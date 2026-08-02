# OpenClaw Ecosystem Digest 2026-08-02

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-02 01:43 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-08-02

## 1. Today's Overview

OpenClaw is showing very high activity: 500 issues and 500 PRs were updated in the last 24 hours, with 39 issues closed and 93 PRs merged/closed. A new beta release (v2026.7.2-beta.6) landed with a strong focus on **state safety and crash recovery**, reflecting ongoing community pain around database corruption, schema migrations, and message loss. The most contentious open threads revolve around silent model failures (DeepSeek v4 Flash), internal text leaking into messaging channels, and unbounded state retention in realtime voice sessions. Maintainer activity is heavy — dozens of fix PRs are in flight across auth, compaction, WebSocket transports, and release tooling — but the volume of P0/P1 regressions suggests the project is in a stabilization-harden cycle.

## 2. Releases

### v2026.7.2-beta.6 (openclaw 2026.7.2-beta.6)
Source: [Release v2026.7.2-beta.6](https://github.com/openclaw/openclaw/releases)

**Highlights (2026.7.2):**
- **State safety and recovery**: persisted data is now protected by a quarantine store that survives primary-database damage
- **Crash-recoverable SQLite snapshots** and crash-durable filesystem publication
- **Schema-upgrade data-loss rejection**: upgrades that would discard data are refused
- **Rollback-writer snapshot recovery** for interrupted writes

This release directly targets a cluster of recent issues: CLI preflight corruption of the live state DB ([#101290](https://github.com/openclaw/openclaw/issues/101290)), schema downgrade wiping state ([#115421](https://github.com/openclaw/openclaw/issues/115421)), and migration failures leaving empty conversation stores ([#94939](https://github.com/openclaw/openclaw/issues/94939)). The changelog excerpt is partial; no explicit breaking-change or migration notes were visible in the provided data.

## 3. Project Progress

93 PRs were merged/closed in the last 24 hours. Notable PRs advancing fixes and features:

**Auth & Provider Reliability**
- [PR #117258](https://github.com/openclaw/openclaw/pull/117258) — fixes [#117209](https://github.com/openclaw/openclaw/issues/117209): prevents sticky `AuthProfileStoreUnreadableError` after snapshot publication failures (auth-provider/session-state risk)
- [PR #116248](https://github.com/openclaw/openclaw/pull/116248) — closes [#116243](https://github.com/openclaw/openclaw/issues/116243): default agent no longer loses API keys after `paste-api-key --agent <non-default>`
- [PR #117735](https://github.com/openclaw/openclaw/pull/117735) — rejects provider-owned binary downloads that return JSON/HTML/empty bodies (fal, Google extensions)
- [PR #117712](https://github.com/openclaw/openclaw/pull/117712) — Dependabot security/actions group bump (10 updates)

**Agent Runtime & Sessions**
- [PR #117731](https://github.com/openclaw/openclaw/pull/117731) — fixes lost subagent replies, stale runs, and Codex turn stalls ([#117298](https://github.com/openclaw/openclaw/issues/117298))
- [PR #117400](https://github.com/openclaw/openclaw/pull/117400) — closes [#117358](https://github.com/openclaw/openclaw/issues/117358): post-turn compaction estimator now uses canonical session context projection
- [PR #117147](https://github.com/openclaw/openclaw/pull/117147) — pins compaction summarization to text-only input ([#111856](https://github.com/openclaw/openclaw/issues/111856)), avoiding multi-MB image payload spikes
- [PR #117509](https://github.com/openclaw/openclaw/pull/117509) — surfaces `sessions_yield` waiting status so parent turns no longer end silently
- [PR #117676](https://github.com/openclaw/openclaw/pull/117676) — fixes the dreaming recall store being empty (0 entries) due to a missing `allowTranscriptTurnSnippet` argument
- [PR #112022](https://github.com/openclaw/openclaw/pull/112022) — emits a user-visible notice when a turn times out during tool execution

**Channels & Delivery**
- [PR #117719](https://github.com/openclaw/openclaw/pull/117719) — WhatsApp: retries transient inbound-media download failures through the ingress drain instead of permanently replacing attachments
- [PR #117734](https://github.com/openclaw/openclaw/pull/117734) — conversation burst budget now catches multi-party bot storms (N-bot reply loops invisible to pairwise guards)
- [PR #117727](https://github.com/openclaw/openclaw/pull/117727) — prevents fractional chunk limits from stalling text splitting
- [PR #111624](https://github.com/openclaw/openclaw/pull/111624) — closes [#111620](https://github.com/openclaw/openclaw/issues/111620): Windows file tools now read POSIX drive paths (`/c/…`, `/cygdrive/c/…`, WSL)

**UI / DX / Platform**
- [PR #117657](https://github.com/openclaw/openclaw/pull/117657) — decodes UTF-8 artifact previews in the control UI (fixes mojibake)
- [PR #117689](https://github.com/openclaw/openclaw/pull/117689) — restores sandbox media previews in the control UI
- [PR #117738](https://github.com/openclaw/openclaw/pull/117738) — plugins declaring OpenClaw as a direct dependency now correctly resolve their host package
- [PR #117720](https://github.com/openclaw/openclaw/pull/117720) — CLI startup-stage attribution (closes ~2.6–3.0s of unattributed pre-provider startup time)
- [PR #117690](https://github.com/openclaw/openclaw/pull/117690) — macOS app no longer opens its own bundle ID as a separate defaults suite (fixes launch warning from [#88909](https://github.com/openclaw/openclaw/issues/88909))
- [PR #117698](https://github.com/openclaw/openclaw/pull/117698) (closed/merged) — consolidated fal image-generation provider test fixtures (1,186 lines of duplication removed)
- [PR #117184](https://github.com/openclaw/openclaw/pull/117184) — cleans empty staged inbound media directories ([#104358](https://github.com/openclaw/openclaw/issues/104358))

**Infra / Release Tooling**
- [PR #117730](https://github.com/openclaw/openclaw/pull/117730) — prevents bundled-plugin `npm install --package-lock-only` lock timeouts blocking beta releases
- [PR #117723](https://github.com/openclaw/openclaw/pull/117723) — repairs release-validation regressions (plugin agentic tests, dynamic model metadata)
- [PR #117737](https://github.com/openclaw/openclaw/pull/117737) — closes [#117736](https://github.com/openclaw/openclaw/issues/117736): `nodes push` now fails with non-zero exit on APNs rejection

## 4. Community Hot Topics

| Issue/PR | Comments | Topic |
|---|---|---|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | 73 | DeepSeek v4 Flash silently fails to reply; generic "No reply was generated" fallback — P1, message-loss |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 39 | Text produced between tool calls leaks into Slack/iMessage as visible messages — P1, session-state/security |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | 38 | Realtime voice sessions retain unbounded provider/consult state under stall/burst — P1 |
| [#99241](https://github.com/openclaw/openclaw/issues/99241) | 26 (closed) | Tool outputs collapse into unreadable image attachments in long ANSI-heavy runs — P1 |
| [#115326](https://github.com/openclaw/openclaw/issues/115326) | 24 | Crash-loop breaker permanently suppresses Discord/WhatsApp; documented recovery fails with WebSocket 1006 — P1 |

**Underlying needs:** The dominant theme is **message-delivery integrity** — users losing replies entirely (silent model failures, crash-loop suppression) or receiving unintended internal narration. Secondary themes are **state/resource governance** (realtime voice, transcript projection) and **privacy boundaries** (internal text/reasoning leakage). The 73-comment DeepSeek thread indicates a widespread, unresolved provider-integration issue.

## 5. Bugs & Stability

### P0 (Critical)
- **[#101290](https://github.com/openclaw/openclaw/issues/101290)** — CLI startup preflight corrupts the live state DB while the gateway is running ("database disk image is malformed", 4× in 5 days; vanilla SQLite does not reproduce). macOS stable channel. *No fix PR linked.*
- **[#115421](https://github.com/openclaw/openclaw/issues/115421)** — Schema downgrade recovery quarantines/wipes the state DB, losing cron jobs (v1 ↔ v6 mismatch). *No fix PR linked.*
- **[#48920](https://github.com/openclaw/openclaw/issues/48920)** — Live docs are ahead of the release (e.g., `IsolatedSessions` documented but absent in 2026.3.13); UX release blocker.

### P1 — Highest-Impact Clusters
- **Message loss / silent failures:** [#116277](https://github.com/openclaw/openclaw/issues/116277) (DeepSeek v4 Flash), [#107464](https://github.com/openclaw/openclaw/issues/107464) (Telegram prematurely releases Codex turn), [#115476](https://github.com/openclaw/openclaw/issues/115476) (compaction replays stale inbound `message_id`), [#116488](https://github.com/openclaw/openclaw/issues/116488) (superseded reply never released from registry), [#94939](https://github.com/openclaw/openclaw/issues/94939) (6.x migration leaves conversation store empty, breaks MS Teams proactive sends)
- **State corruption / livelock:** [#115908](https://github.com/openclaw/openclaw/issues/115908) (transcript projection livelock stalls all transports), [#115424](https://github.com/openclaw/openclaw/issues/115424) (V8 heap OOM → restart-recovery converts one crash into a 7-core-dump loop), [#114234](https://github.com/openclaw/openclaw/issues/114234) (usage-cost refresh lock permanently frozen via PID reuse in containers), [#116010](https://github.com/openclaw/openclaw/issues/116010) (all persistent sessions capped at 128k context regardless of model)
- **Security / privacy:** [#25592](https://github.com/openclaw/openclaw/issues/25592) (text between tool calls leaks to channels), [#91804](https://github.com/openclaw/openclaw/issues/91804) (internal reasoning exposed to users since 2026.6.5), [#115909](https://github.com/openclaw/openclaw/issues/115909) (bundled browser-copilot can never pair — auth gate rejects device identity), [#31583](https://github.com/openclaw/openclaw/issues/31583) (`exec` tool drops `skills.entries.*.env` secrets)
- **Channel outages:** [#115326](https://github.com/openclaw/openclaw/issues/115326) (crash-loop breaker suppresses Discord/WhatsApp), [#109145](https://github.com/openclaw/openclaw/issues/109145) (HTTP server listens but never accepts connections)
- **Regression reports:** [#31583](https://github.com/openclaw/openclaw/issues/31583) and [#101290](https://github.com/openclaw/openclaw/issues/101290) are marked regression; [#112906](https://github.com/openclaw/openclaw/issues/112906) is a rich-messages rendering regression in v2026.7.1.

**Fix PRs in flight for related issues:** [#117258](https://github.com/openclaw/openclaw/pull/117258) → [#117209](https://github.com/openclaw/openclaw/issues/117209) (auth sticky state); [#117733](https://github.com/openclaw/openclaw/pull/117733) → [#116201](https://github.com/openclaw/openclaw/issues/116201) (meeting-bot audio lifecycle); [#117731](https://github.com/openclaw/openclaw/pull/117731) → [#117298](https://github.com/openclaw/openclaw/issues/117298) (stale runs/Codex stalls); [#117400](https://github.com/openclaw/openclaw/pull/117400) → [#117358](https://github.com/openclaw/openclaw/issues/117358) (compaction estimator). The new v2026.7.2-beta.6 release directly targets the state-DB corruption class.

## 6. Feature Requests & Roadmap Signals

- **[#113251](https://github.com/openclaw/openclaw/issues/113251)** — Add image viewing in the webchat file viewer (10 comments, `needs-product-decision`). High-utility UX gap.
- **[#73537](https://github.com/openclaw/openclaw/issues/73537)** — Add a production-readiness stability label to releases; user running OpenClaw as a family/business assistant (Home Assistant, cron, Telegram) wants clearer stability signals.
- **[#110171](https://github.com/openclaw/openclaw/issues/110171)** — Realtime voice chat should behave identically to text chat (context parity: MEMORY.md, USER.md, SOUL.md, history).
- **[#17840](https://github.com/openclaw/openclaw/issues/17840)** — Opt-in reaction-triggered agent turns (emoji polling, lightweight interactive patterns).
- **[#95724](https://github.com/openclaw/openclaw/issues/95724)** — Memory should index by source directory, not per-agent — eliminate duplicate vector stores for same-workspace agents.
- **[#30381](https://github.com/openclaw/openclaw/issues/30381)** — `chatCompletions` should ignore the request `model` when `x-openclaw-agent-id` targets a specific agent.
- **[#116022](https://github.com/openclaw/openclaw/issues/116022)** — `/new` should recover retired Codex binding tombstones (session recovery completeness).
- **[#88079](https://github.com/openclaw/openclaw/issues/88079)** — Stream `reasoning_content` for Kimi Code / DeepSeek Reasoner in WebChat (queueable-fix, no-stale).

**Likely next-version candidates:** near-ready PRs include typing-indicator TTL configurability ([#72009](https://github.com/openclaw/openclaw/pull/72009)), `mediaLocalRoots` config support ([#115286](https://github.com/openclaw/openclaw/pull/115286)), and MCP materialization for server-name allows ([#115277](https://github.com/openclaw/openclaw/pull/115277)). Given the release theme, continued state-safety hardening is the strongest roadmap signal.

## 7. User Feedback Summary

- **DeepSeek v4 Flash users are hitting a hard wall**: 73 comments on silent reply failures with a generic fallback; the issue carries the "platinum hermit" severity rating and remains open with no fix PR. Demands are high for either a real error surfaced or a working retry.
- **Stable-channel trust is eroding**: macOS users report repeated "database disk image is malformed" corruption with no power loss/OS crash ([#101290](https://github.com/openclaw/openclaw/issues/101290)); one user lost cron jobs to schema-downgrade wipes ([#115421](https://github.com/openclaw/openclaw/issues/115421)).
- **Privacy regressions are a top complaint**: internal processing text leaking into Slack/iMessage ([#25592](https://github.com/openclaw/openclaw/issues/25592)) and reasoning being exposed to end users ([#91804](https://github.com/openclaw/openclaw/issues/91804)) were both flagged as major privacy and UX regressions.
- **Positive signals**: dedicated users describe OpenClaw as "genuinely part of our daily workflow" for family/business automation ([#73537](https://github.com/openclaw/openclaw/issues/73537)); the #99241 thread closed, indicating progress on tool-output readability.
- **Platform gaps**: Windows users report zombie `node.exe` processes after CLI commands ([#74378](https://github.com/openclaw/openclaw/issues/74378)); native Windows file tools and POSIX paths being fixed ([#111624](https://github.com/openclaw/openclaw/pull/111624)).

## 8. Backlog Watch

Long-standing or high-severity items needing maintainer attention:

- **[#25592](https://github.com/openclaw/openclaw/issues/25592)** — Open since Feb 2026, 39 comments, P1, security + session-state impact, needs product decision; no fix PR despite `linked-pr-open` marker.
- **[#48920](https://github.com/openclaw/openclaw/issues/48920)** — Open since Mar 2026, P0: live docs ahead of release causes config failures (`IsolatedSessions`). Needs docs/release synchronization.
- **[#31583](https://github.com/openclaw/openclaw/issues/31583)** — Open since Mar 2026, 14 comments, P1 regression: `exec` tool not inheriting skill env vars; blocks secret injection workflows.
- **[#30381](https://github.com/openclaw/openclaw/issues/30381)** — Open since Mar 2026, quiet but P2 with `maturity:stable`; API model-validation behavior conflicts with agent-targeted routing.
- **[#101290](https://github.com/openclaw/openclaw/issues/101290)** — Open since Jul 7, P0 data-loss, only 14 comments; CLI preflight DB corruption is arguably the most severe unresolved stability bug.
- **[#74378](https://github.com/openclaw/openclaw/issues/74378)** — Open since Apr 2026, Windows zombie processes; needs maintainer info, low priority but visible platform annoyance.
- **[#88079](https://github.com/openclaw/openclaw/issues/88079)** — Open since May 2026, `no-stale` + `queueable-fix`; reasoning stream missing for Kimi/DeepSeek in WebChat — waiting on a fix-shaped PR.
- **[PR #95847](https://github.com/openclaw/openclaw/pull/95847)** — Open since Jun 22, XL-size subagent delivery-accounting fix with triple merge-risk flags (compatibility, session-state, message-delivery); still `needs proof` after six weeks.
- **[PR #72009](https://github.com/openclaw/openclaw/pull/72009)** — Open since Apr 26; typing-indicator TTL configurability is small, documented, and has supplied proof — a candidate for a low-risk merge.
- **[#98976](https://github.com/openclaw/openclaw/issues/98976)** — Open since Jul 2, P2 but security-adjacent: provider refusals (Anthropic/OpenAI) never trigger the fallback chain, leaving users with bare "LLM request failed."

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-08-02 | **Coverage:** 12 projects, 24-hour digest window

---

## 1. Ecosystem Overview

The personal AI assistant ecosystem is in a **stabilization-harden cycle**, with the largest projects (OpenClaw, Hermes Agent, ZeroClaw) prioritizing crash recovery, message-delivery integrity, and security boundaries over new features. A clear architectural split is emerging: **gateway/channel-centric agents** (OpenClaw, NanoClaw, ZeroClaw) versus **developer-tool/desktop agents** (Hermes Agent, CoPaw, LobsterAI), with Rust (IronClaw) and Python (NanoBot, CoPaw) challenging the Node.js default. Release velocity remains high — OpenClaw and NanoClaw both shipped betas/rollups this week — but **state corruption, silent model failures, and internal-text leakage** are the dominant cross-project pain points, indicating the field is converging on reliability fundamentals before feature differentiation. The community is actively contributing: first-time contributors landed fixes in CoPaw, IronClaw, and NanoClaw within the window.

---

## 2. Activity Comparison

| Project | Issues Updated (closed) | PRs Updated (merged/closed) | Release This Window | Health Score* |
|---|---|---|---|---|
| **OpenClaw** | 500 (39) | 500 (93) | ✅ v2026.7.2-beta.6 | **6.5/10** — Very high velocity, but P0 data-loss and privacy regressions |
| **NanoBot** | 5 (4) | 25 (13) | ❌ | **8/10** — Healthy triage; fixes merged within days of reports |
| **Hermes Agent** | 50 (16) | 50 (8) | ❌ | **6/10** — Active, but update instability and stalled security PRs |
| **PicoClaw** | 1 (0) | 3 (0, 1 stale) | ❌ | **4.5/10** — Minimal activity; critical Matrix bug left stale |
| **NanoClaw** | 2 (0) | 15 (5) | ✅ v2.1.54 (breaking) | **8/10** — Fast rollup cadence, good contributor throughput |
| **NullClaw** | 0 | 0 | — | N/A — Inactive |
| **IronClaw** | 11 (2) | 24 (8) | ❌ | **7.5/10** — Disciplined refactor momentum, but p95 latency regression and 30-day release PR |
| **LobsterAI** | 7 (6 stale) | 2 (0) | ❌ | **3/10** — Maintenance-only; stale-bot dominated; no merges |
| **Moltis** | 0 | 3 (2) | ❌ | **7/10** — Stable; security & observability work landed |
| **CoPaw (QwenPaw)** | 9 (0) | 13 (1) | ❌ | **7.5/10** — Active triage; most bugs have matching fix PRs |
| **ZeptoClaw** | 0 | 0 | — | N/A — Inactive |
| **ZeroClaw** | 50 (3) | 50 (0) | ❌ (v0.8.4 bump pending) | **6/10** — Strong RFC process, but zero merges; release blocked |

*\*Health score = synthesis of activity, merge throughput, unresolved-severity burden, and maintainer responsiveness. Author's assessment.*

---

## 3. OpenClaw's Position

**Scale leader by an order of magnitude.** OpenClaw's 500-issue/500-PR daily volume dwarfs the next tier (Hermes/ZeroClaw at 50/50) and represents roughly 70% of total ecosystem activity in this window. No peer approaches its channel coverage (Slack, iMessage, WhatsApp, Discord, Telegram, Matrix, Teams) or plugin ecosystem.

**Technical approach:** OpenClaw is a **gateway-centric, channel-first architecture** with persisted conversation state, compaction/recall subsystems, and a bundled-plugin model. Its main differentiator is the **state-safety layer**: the new v2026.7.2-beta.6 introduces quarantine stores, crash-durable SQLite snapshots, and schema-upgrade data-loss rejection — a direct response to the ecosystem's most damaging bug class (DB corruption, migration data loss).

**Weaknesses exposed this window:** The project is running hot. P0 data-corruption issues (#101290, #115421) remain unpatched on stable, and the 73-comment DeepSeek silent-failure thread (#116277) shows provider integration quality lagging behind channel breadth. Privacy regressions (internal text leaking to Slack/iMessage, #25592) are the type of trust-breaking bugs that smaller competitors could exploit.

**Community:** Largest and most reactive, but the volume itself is a risk — the sheer number of P0/P1 regressions suggests the project is **iterating faster than it can stabilize**.

---

## 4. Shared Technical Focus Areas

Requirements emerging independently across multiple projects (strong signal of ecosystem-wide need):

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **Message-delivery integrity** | OpenClaw, NanoBot, NanoClaw, CoPaw, ZeroClaw | Silent model failures (DeepSeek/Gemini), tool-call text leaking into channels, duplicate delivery when final output repeats tool-sent content, cron output silently discarded (ZeroClaw #9340), tool-call code appearing in responses (NanoBot #5185) |
| **State & persistence robustness** | OpenClaw, NanoBot, NanoClaw, IronClaw, LobsterAI | DB corruption at startup, schema-downgrade data loss, malformed session entries crashing memory stores, lost cron completion state, `outbound.db` recovery after container kills, libSQL p95 37–135s regression |
| **Provider/routing compatibility** | OpenClaw, NanoBot, Hermes, CoPaw, PicoClaw, IronClaw, ZeroClaw | Local providers hijacking cloud models on keyword match (NanoBot #3732), duplicate `web_search` tool on OpenRouter (Hermes #76496), Gemini `thought_signature` crashes (CoPaw #6619), OrcaRouter support requested/added in **3 projects** (PicoClaw #3309, CoPaw #6622, IronClaw #7009) |
| **Security & privacy boundaries** | OpenClaw, Hermes, Moltis, ZeroClaw, NanoBot | Internal processing text leaking to channels, reasoning exposed to users, credential scope bypasses, absolute-path approval bypass, WhatsApp allowlist misconfiguration (empty list = allow all), privileged command exposure via channel allowlist |
| **Memory/context lifecycle** | OpenClaw, NanoBot, CoPaw, ZeroClaw | Auto-compression not triggering summarization, compaction replaying stale message IDs, 128k context cap regardless of model, conversation history vs. long-term memory separation |
| **Session-management ergonomics** | NanoBot, Moltis, CoPaw, OpenClaw | Per-session model switching, main session undeletable, Quick/Temporary Chat, `/new` recovering retired bindings |
| **Observability & feedback** | Moltis, OpenClaw, ZeroClaw, CoPaw | Backend-neutral instrumentation, Langfuse/OTLP export, cross-turn correlation IDs, user reaction feedback |

---

## 5. Differentiation Analysis

| Project | Core Focus | Target User | Architecture | Distinctive Trait |
|---|---|---|---|---|
| **OpenClaw** | Universal channel gateway + agent runtime | Power users, family/business automation | Node.js, gateway-centric, plugin-bundled, persisted SQLite state | Broadest channel/plugin coverage; state-safety release theme |
| **NanoBot** | Lightweight WebUI agent | Self-hosters, tinkerers | Python, WebUI-first | Fast fix turnaround; Chromium-free small footprint |
| **Hermes Agent** | Desktop-centric agent | Individual devs on macOS/Windows | Node/npm, Desktop app + gateway multiplex | Desktop UX depth (plugins, fonts, Projects); multi-profile gateway |
| **PicoClaw** | Embedded/low-cost assistant | Sipeed hardware hobbyists | Lightweight, Matrix-focused | Hardware ecosystem tie-in; minimal resource footprint |
| **NanoClaw** | Apple-ecosystem agent | Mac/iMessage users | Node.js, iMessage-native | Photon hosted iMessage backend; fast rollup releases |
| **IronClaw** | Enterprise-grade agent platform | Large deployments | **Rust** (crates), contract-driven | Architecture rigor — "reborn" refactor inverting product dependencies onto neutral contracts |
| **LobsterAI** | Chinese-market productivity agent | NetEase Youdao users | Web-based, MCP-enabled | i18n friction visible; stale-bot automation suggests reduced maintenance |
| **Moltis** | Secure multi-tenant agent | Teams requiring audit/roles | Backend-neutral, OTLP | Operators list separates channel access from privilege; instrumentation-first |
| **CoPaw (QwenPaw)** | Alibaba ecosystem agent | AgentScope users, CN+global | Python, AgentScope framework | Tight Gemini/Aliyun compatibility work; active first-time contributor base |
| **ZeroClaw** | RFC-driven secure agent | Security-conscious deployers | Modular, RFC-governed | Slowest merge velocity but most disciplined design process; security/architecture RFCs dominate |

---

## 6. Community Momentum & Maturity

**Tier 1 — Hyper-velocity / stabilization risk:**  
**OpenClaw** (500/500 daily updates, shipping betas, but P0 backlog growing). **Hermes Agent** and **ZeroClaw** (50/50 each) are active but throughput-constrained — Hermes merges steadily while ZeroClaw's zero-merge day reflects its RFC-first governance.

**Tier 2 — Healthy iteration:**  
**NanoBot** (13 PRs merged) and **NanoClaw** (5 merged + release) show the best **merge-to-issue ratio** in the ecosystem. **IronClaw** is rapidly iterating with strong architectural discipline — 8 merges, ~28-hour turnaround on the CI-gate fix (#6963). **CoPaw** is triage-healthy with fix PRs for nearly every reported bug.

**Tier 3 — Stabilizing / low-activity:**  
**Moltis** shipped two significant PRs (security, observability) with zero new bug reports — a stable, consolidating project. **PicoClaw** and **LobsterAI** show concerning signs: stale-labeled critical bugs, closed-without-merge PRs, and stale-bot dominated issue traffic.

**Tier 4 — Inactive:** NullClaw, ZeptoClaw (no activity).

**Key insight:** The ecosystem is **bimodal** — a small number of projects (OpenClaw, NanoBot, NanoClaw, IronClaw) absorb most contributor attention, while mid-tier projects risk maintainer burnout or abandonment. Contributors flow toward projects with visible merge activity.

---

## 7. Trend Signals

Signals extracted from community feedback across all projects, ranked by strategic relevance for AI agent developers:

1. **Message-delivery integrity is the new battleground.** The most-commented issues across the ecosystem are silent model failures, tool-call text leakage, duplicate/absent delivery, and crash-loop suppression. Users will tolerate missing features more than missing or wrong messages. **Action:** instrument every provider failure with a surfaced error; never fall back to generic "no reply."

2. **Provider agnosticism is table stakes — and routers are the next standard.** OrcaRouter appeared in **three** projects in one day (PicoClaw, CoPaw, IronClaw), alongside OpenRouter prompt-caching requests (ZeroClaw #9631) and local-provider hijacking fixes (NanoBot). **Action:** treat `providers.json`-style catalogs and router support as a first-class feature.

3. **State safety > feature velocity.** At least 5 projects shipped fixes for data corruption, migration data loss, or malformed-persistence crashes this week. OpenClaw's quarantine-store release is the template. **Action:** adopt crash-durable snapshots, refuse destructive schema downgrades, and make recovery paths explicit.

4. **Privacy boundaries are being re-drawn.** Internal reasoning leakage, credential scope bypasses, and allowlist misconfigurations are drawing security-level severity ratings. The Moltis operators-list and ZeroClaw's permit-none RFC (#9397) point toward **explicit privilege models** rather than implicit trust-by-access.

5. **Memory is bifurcating.** The ecosystem is moving from single-context to layered memory: conversation history, agent-curated long-term memory, and compaction summaries as distinct systems (ZeroClaw #9048, OpenClaw compaction fixes, CoPaw summarization triggers). **Action:** design memory as separable, indexable layers from day one.

6. **Desktop UX is underserved.** Font selectors (Hermes), global hotkey quick-input (CoPaw), and lightweight WebUI interactions (NanoBot Quick Chat) signal that **the 1280×800 full-window chat is not the end-state interaction model.** Floating quick-input and reaction-triggered turns are early but consistent signals.

7. **Observability is becoming a purchase criterion.** Moltis's instrumentation PR (Langfuse v4 + OTLP + token accounting) and ZeroClaw's OpenTelemetry correlation RFC indicate production deployments now demand tracing, token-usage visibility, and feedback collection as core features, not add-ons.

---

*Report generated from 2026-08-02 project digests. Health scores are qualitative assessments based on activity, merge velocity, severity burden, and maintainer responsiveness within the 24-hour window.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-02

## 1. Today's Overview

NanoBot saw a busy 24-hour maintenance and feature window: **5 issues were updated** (1 still open, 4 closed) and **25 PRs were updated** (12 open, 13 closed/merged). The closed/merged PRs concentrated on high-priority bug fixes — cron state preservation, memory/archive robustness, exec wait-target handling, and channel rate limiting — as well as WebUI polish and provider matching. No new releases were cut during this window. The project overall looks healthy: maintainers are actively reviewing contributions, and several long-standing regressions appear to have been addressed.

---

## 2. Releases

**No new NanoBot releases were published in this window.**

All recent changes exist only in the main branch via merged PRs, with no tagged release or migration notes to report.

---

## 3. Project Progress

Of the **13 closed/merged PRs** updated in the last 24h, the following were visible in the top-20 activity feed:

### WebUI / UX
- [PR #5209](https://github.com/HKUDS/nanobot/pull/5209) — **refactor(webui): reuse sidebar selection highlight**  
  Extracted the session selection background into a reusable component, fixing mask-like flicker and highlighting the blank New-route.

- [PR #5172](https://github.com/HKUDS/nanobot/pull/5172) — **feat: preserve Responses reasoning state and compact context**  
  Adopts OpenAI Responses API output-item preservation, including encrypted reasoning and future item types.

### Channels & Providers
- [PR #5108](https://github.com/HKUDS/nanobot/pull/5108) — **fix(channels): add per-sender message rate limiting**  
  Adds first-class per-user/per-chat rate limiting across channel adapters, preventing LLM-token abuse.

- [PR #3732](https://github.com/HKUDS/nanobot/pull/3732) — **fix(providers): require api_base before local provider wins on keyword match**  
  Fixes silent hijacking of cloud-hosted models by local providers with matching family keywords.

### Cron, Memory & Session Robustness
- [PR #5183](https://github.com/HKUDS/nanobot/pull/5183) — **fix(cron): preserve manual run completion state**  
  Protects the cron store during both scheduled and manual runs so WebUI/API reads don't overwrite completion status.

- [PR #5153](https://github.com/HKUDS/nanobot/pull/5153) — **fix(memory): handle non-string timestamp and missing role in raw_archive**  
  Fixes `MemoryStore._format_messages` crashes on malformed persisted history entries.

- [PR #5200](https://github.com/HKUDS/nanobot/pull/5200) — **fix(exec): preserve wait targets across response truncation**  
  Ensures `write_stdin(wait_for=...)` still finds targets after head/tail truncation.

- [PR #5201](https://github.com/HKUDS/nanobot/pull/5201) — **fix(session): tolerate malformed persisted session summary**  
  Prevents `AutoCompact.prepare_session()` from failing on bad `_last_summary` metadata.

### Dream Cron / Internal Correctness
- [PR #5208](https://github.com/HKUDS/nanobot/pull/5208) — **fix(dream): advance cursor when durable changes were made**  
  Fixes repeated reprocessing of history batches when ephemeral agent runs succeed via non-clean stop reasons.

### Code Quality
- [PR #5199](https://github.com/HKUDS/nanobot/pull/5199) — **refactor(cli): narrow Pyright suppressions**  
  Reduces blanket type-check suppressions to precise line-level ignores.

---

## 4. Community Hot Topics

The most active discussion this window centered on user-visible correctness and model-behavior issues:

- [Issue #5185](https://github.com/HKUDS/nanobot/issues/5185) — **Nanobot returning tool calls code in responses** (4 comments, closed)  
  User suddenly saw tool-call code leaked into assistant responses. The issue was closed as invalid/provider-side, but it drew attention to how provider responses are surfaced.

- [Issue #5205](https://github.com/HKUDS/nanobot/issues/5205) — **`No module named ensurepip` when enabling feishu plugin** (2 comments, closed)  
  Plugin installation failed inside the `uv`-managed tool environment. Likely an environment bootstrapping issue rather than core Nanobot logic.

- [Issue #5198](https://github.com/HKUDS/nanobot/issues/5198) — **Not possible to change models in a specific session** (1 comment, open)  
  The only currently open issue in the feed. Users expect per-session model switching, similar to cloud SaaS UIs, but `/model` doesn't change the active top-choice model in an existing session.

- [Issue #4801](https://github.com/HKUDS/nanobot/issues/4801) — **KeyError on malformed session entries** (1 comment, closed)  
  Led to a fix in `MemoryStore._format_messages` and was resolved via PR #5153.

**Underlying needs:** Users are asking for cleaner provider response handling, more flexible model selection, and a more forgiving persistence layer that doesn't crash on malformed history.

---

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue / PR | Status | Notes |
| --- | --- | --- | --- |
| **High** | [Issue #5163](https://github.com/HKUDS/nanobot/issues/5163) — Manual cron runs lose completion state when WebUI reloads store | Closed | Fixed by [PR #5183](https://github.com/HKUDS/nanobot/pull/5183). |
| **Medium** | [Issue #5198](https://github.com/HKUDS/nanobot/issues/5198) — Cannot change models per session | **Open** | No dedicated fix PR yet; [PR #5202](https://github.com/HKUDS/nanobot/pull/5202) improves model-preset discoverability but doesn't fully solve per-session switching. |
| **Medium** | [Issue #5205](https://github.com/HKUDS/nanobot/issues/5205) — `ensurepip` missing when enabling feishu | Closed | Deployment/environment issue; may need better plugin-install bootstrap docs. |
| **Medium** | [PR #5206](https://github.com/HKUDS/nanobot/pull/5206) — Duplicate "Response to" log lines for streamed messages | Open | Prevents double logging of streamed responses. |
| **Low/Medium** | [Issue #4801](https://github.com/HKUDS/nanobot/issues/4801) — KeyError on malformed session entries | Closed | Fixed by [PR #5153](https://github.com/HKUDS/nanobot/pull/5153). |
| **Low** | [Issue #5185](https://github.com/HKUDS/nanobot/issues/5185) — Tool-call code in responses | Closed | Marked invalid/provider-related; no Nanobot-side action. |

Additional stability fixes merged/closed in this window:
- [PR #5208](https://github.com/HKUDS/nanobot/pull/5208) — Dream cron cursor advance fix.
- [PR #5200](https://github.com/HKUDS/nanobot/pull/5200) — Exec wait-target preservation.
- [PR #5201](https://github.com/HKUDS/nanobot/pull/5201) — Malformed session-summary tolerance.

---

## 6. Feature Requests & Roadmap Signals

Several open PRs and issues point toward the likely next release themes:

### WebUI Model Experience
- [Issue #5198](https://github.com/HKUDS/nanobot/issues/5198) — Per-session model switching is the clearest user-requested feature.
- [PR #5202](https://github.com/HKUDS/nanobot/pull/5202) — Replaces hidden long-press gesture with a clickable model-preset menu, making switching discoverable.

### WebUI Chat UX
- [PR #5184](https://github.com/HKUDS/nanobot/pull/5184) — Adds **Quick Chat** and **Temporary Chat** as first-class WebUI destinations.
- [PR #5211](https://github.com/HKUDS/nanobot/pull/5211) — Adds **cross-session search and `@` mentions** over persisted conversations.

### Security & Deployment
- [PR #5210](https://github.com/HKUDS/nanobot/pull/5210) — Opt-in trusted proxy bootstrap auth (Cloudflare Tunnel / Access style).

### Performance
- [PR #5194](https://github.com/HKUDS/nanobot/pull/5194) — Accelerates JSONL session list and thread loading by caching workspace-scope snapshots.

### Agent Tooling
- [PR #5207](https://github.com/HKUDS/nanobot/pull/5207) — Adds `preset` parameter to the `spawn` tool, letting subagents run with a specific model preset.

**Prediction:** The next NanoBot release is likely to include WebUI model-preset discoverability, Quick/Temporary Chat, and at least one of cross-session search or subagent presets.

---

## 7. User Feedback Summary

Real user pain points visible in this window:

- **Tool-call leakage:** Users see raw tool-call code in assistant responses; even though #5185 was closed as invalid/provider-side, it indicates users need clearer handling or filtering of provider tool results.
- **Plugin installation barriers:** The `ensurepip` failure on Debian with `uv`-managed installs makes channel plugins hard to enable. Users expect `nanobot plugins enable` to work out of the box.
- **Model-switching inflexibility:** Users find Nanobot's model selection confusing; the top-choice model is fixed and `/model` doesn't reliably switch within a session.
- **State-loss anxiety:** Manual cron runs showing as `Failed` after a successful run undermines trust in automation status.
- **Media durability:** PR #5139 (still open) highlights that uploaded media paths can be dropped during session consolidation, making files unrecoverable after archiving.

Satisfaction signals are positive overall: users are filing precise bug reports, and several high-priority fixes (cron, memory, exec) were merged within days.

---

## 8. Backlog Watch

Items that need maintainer attention:

- [PR #3869](https://github.com/HKUDS/nanobot/pull/3869) — **DeepSeek message hardening**  
  Open since **May 16, 2026**, labeled `question` and `conflict`. Addresses null-content 400 errors, `"(empty)"` placeholder leakage, and assistant-text dropping for DeepSeek. Long-standing and still unresolved.

- [PR #5139](https://github.com/HKUDS/nanobot/pull/5139) — **Preserve media paths during session consolidation**  
  Open since **July 28**, labeled `priority: p1` and `conflict`. Aims to fix issue #5118 and #5135, where uploaded media paths are lost during consolidation/archiving. Blocked or disputed, but high user impact.

- [Issue #5198](https://github.com/HKUDS/nanobot/issues/5198) — **Per-session model switching**  
  The only open issue in this window's feed. It has attracted a feature PR (#5202) that helps discoverability but does not fully resolve the underlying request.

- [PR #5186](https://github.com/HKUDS/nanobot/pull/5186) — **Support well-known skills.sh sources**  
  Adds support for discovery hosts like `uizze.com`, not just `owner/repo` GitHub sources. Important for skills-search completeness.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-02

## 1. Today's Overview

Hermes Agent saw a high level of activity on 2026-08-02, with 50 issues updated (34 open, 16 closed) and 50 PRs updated (42 open, 8 merged/closed). No new release was published in the last 24 hours. Work was heavily concentrated in bug fixing, security hardening, and installation/compatibility issues, with several P2 and P1 fixes proposed or landed. The project also shows strong community engagement around plugin lifecycle management, desktop customization, and gateway reliability.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Project Progress

From the visible merged/closed PR set, the following PRs were closed today:

- [PR #76513 — feat(gateway): key Discord auto-thread sessions on prospective_thread_id](https://github.com/NousResearch/hermes-agent/pull/76513) — Fixes Discord auto-thread naming where only the first auto-thread in a channel received the correct title.
- [PR #76492 — feat(gateway): support session-scoped toolsets](https://github.com/NousResearch/hermes-agent/pull/76492) — Adds optional `enabled_toolsets` on `session.create`, preserving existing defaults while allowing zero-tool sessions.

Notable open PRs that advanced major fixes or features today:

- [PR #76499 — fix(npm): allow Node 22 / npm 11 installs](https://github.com/NousResearch/hermes-agent/pull/76499) — Direct fix for the `EBADENGINE` installer/package-manager issue.
- [PR #76496 — fix(agent): drop client web_search on OpenRouter xAI :online requests](https://github.com/NousResearch/hermes-agent/pull/76496) — Fixes duplicate `web_search` tool rejection.
- [PR #76490 — feat(plugins): add ownership ledger unload lifecycle](https://github.com/NousResearch/hermes-agent/pull/76490) — Advances plugin lifecycle support.
- [PR #76516 — feat(gateway): attribute every inbound sender with stable identity](https://github.com/NousResearch/hermes-agent/pull/76516) — Adds durable per-message sender attribution.
- [PR #76512 — feat(delegation): add parent-scoped live controls](https://github.com/NousResearch/hermes-agent/pull/76512) — Adds `delegate_control` for `list`, `cancel`, and `steer`.

## 4. Community Hot Topics

The most-discussed and most-reacted items were focused on desktop reliability, installer friction, and security boundaries.

- [Issue #75598 — `[Bug]: issue with updates`](https://github.com/NousResearch/hermes-agent/issues/75598) — 7 comments. Recent updates are making the whole program unstable, with multiple conflicting gateways running across profiles. This is one of the clearest signals of update-related destabilization.
- [Issue #65274 — Desktop project-scoped fresh sessions fall back to home cwd on Windows](https://github.com/NousResearch/hermes-agent/issues/65274) — 6 comments, 1 👍. Fresh Desktop sessions inside active Projects use the home directory instead of the Project path on Windows.
- [Issue #51603 — `resolve_anthropic_token()` bypasses profile secret scope](https://github.com/NousResearch/hermes-agent/issues/51603) — 5 comments. Closed security bug involving cross-profile credential leaks in multiplex mode.
- [Issue #60845 — queued follow-up responses bypass MEDIA extraction](https://github.com/NousResearch/hermes-agent/issues/60845) — 4 comments. Telegram queued responses deliver attachments as plain-text file paths.
- [Issue #37566 — Font selector for Hermes Agent desktop](https://github.com/NousResearch/hermes-agent/issues/37566) — 4 comments, 5 👍. The most upvoted feature request in the current window.
- [Issue #76352 — MCP tool result exceeds context, compression exhausts attempts](https://github.com/NousResearch/hermes-agent/issues/76352) — 4 comments. Closed; inconsistent behavior between `agent_close` and explicit error on oversized MCP results.

Underlying need: users are asking for more stable multi-gateway/profile isolation, smoother Desktop project handling, and more visible control over Desktop appearance.

## 5. Bugs & Stability

Ranked by severity and community impact:

| Severity | Bug | Status / Fix |
|---|---|---|
| P1 | `package.json` npm engine constraint `>=12.0.0` blocks Node 22 / npm 11 installs ([Issue #76486](https://github.com/NousResearch/hermes-agent/issues/76486)) | Fix PR open: [#76499](https://github.com/NousResearch/hermes-agent/pull/76499) |
| P2 | Updates causing program instability and conflicting gateways ([Issue #75598](https://github.com/NousResearch/hermes-agent/issues/75598)) | Closed; no visible linked fix PR |
| P2 | Gateway reconnect loop plus unusable Desktop updater ([Issue #76435](https://github.com/NousResearch/hermes-agent/issues/76435)) | Open, needs repro |
| P2 | Duplicate `web_search` tool on OpenRouter xAI `:online` requests ([Issue #76481](https://github.com/NousResearch/hermes-agent/issues/76481)) | Fix PR open: [#76496](https://github.com/NousResearch/hermes-agent/pull/76496) |
| P2 | Copilot token exchange stalls startup ~4.5s due to `_is_suppressed()` ordering ([Issue #76511](https://github.com/NousResearch/hermes-agent/issues/76511)) | Closed |
| P2 | Bootstrap installer fails on Windows Desktop stage due to `EBADENGINE` ([Issue #76484](https://github.com/NousResearch/hermes-agent/issues/76484)) | Closed |
| P2 | Termux install fails: `nemo-relay<0.7,>=0.6.0` unsatisfiable ([Issue #76469](https://github.com/NousResearch/hermes-agent/issues/76469)) | Open, needs repro |
| P2 | Responses API `function_call_output` items stripped from `input` array ([Issue #43757](https://github.com/NousResearch/hermes-agent/issues/43757)) | Open since 2026-06-10 |
| P2 | Queued Telegram follow-up attachments delivered as plain text paths ([Issue #60845](https://github.com/NousResearch/hermes-agent/issues/60845)) | Open |
| P2 | Kanban notifier skips all subscriptions when an adapter-less gateway owns dispatcher ([Issue #76482](https://github.com/NousResearch/hermes-agent/issues/76482)) | Closed |
| P3 | Desktop demo/dogfood plugins enabled by default ([Issue #76064](https://github.com/NousResearch/hermes-agent/issues/76064)) | Open, 1 👍 |
| P3 | `sidebar/footer-*` PluginSlot names declared but never rendered in `App.tsx` ([Issue #76381](https://github.com/NousResearch/hermes-agent/issues/76381)) | Open |

Additional fix PRs in flight:

- [PR #76507 — fix(cron): treat referenced directory as "not a script" in lifecycle guard](https://github.com/NousResearch/hermes-agent/pull/76507)
- [PR #76514 — fix(kanban): stop stamping notify-subscribe with the invoking shell's profile](https://github.com/NousResearch/hermes-agent/pull/76514)
- [PR #76247 — fix(tools): stop Windows hosts from allowing write_file into /etc and docker.sock](https://github.com/NousResearch/hermes-agent/pull/76247)
- [PR #76487 — fix(gateway): namespace telegram topic mode by profile under multiplex](https://github.com/NousResearch/hermes-agent/pull/76487)
- [PR #76470 — fix(config): decode JSON array literals into YAML lists on config set](https://github.com/NousResearch/hermes-agent/pull/76470)
- [PR #76497 — fix(fallback): restore primary route after picker errors](https://github.com/NousResearch/hermes-agent/pull/76497)
- [PR #71996 — fix(approval): stop absolute-path spellings bypassing the hardline floor](https://github.com/NousResearch/hermes-agent/pull/71996)

## 6. Feature Requests & Roadmap Signals

Several user-facing features and larger architectural proposals are visible in the current issue/PR set:

- **Plugin lifecycle management** — [Issue #64229](https://github.com/NousResearch/hermes-agent/issues/64229) and [PR #76490](https://github.com/NousResearch/hermes-agent/pull/76490) are working toward registration handles, `on_unload`, and supervised plugin tasks.
- **Session-scoped toolsets** — [PR #76492](https://github.com/NousResearch/hermes-agent/pull/76492) was closed today and may land in the next release.
- **Desktop font selector** — [Issue #37566](https://github.com/NousResearch/hermes-agent/issues/37566) and [Issue #64790](https://github.com/NousResearch/hermes-agent/issues/64790) request configurable font family/size/color. This is the most upvoted desktop request.
- **EMAIL_ACCOUNT support** — [Issue #25849](https://github.com/NousResearch/hermes-agent/issues/25849) asks for separate email account identity, rather than assuming `EMAIL_ADDRESS` is always the account name.
- **Policy/audit authorization layer** — [Issue #34992](https://github.com/NousResearch/hermes-agent/issues/34992) proposes policy-based tool authorization, human approval workflows, and scoped delegation.
- **OpenAI-compatible TTS sample rate support** — [Issue #76466](https://github.com/NousResearch/hermes-agent/issues/76466) asks to use the sample rate returned by TTS endpoints instead of hardcoded 24kHz.
- **Gateway sender attribution** — [PR #76516](https://github.com/NousResearch/hermes-agent/pull/76516) adds stable inbound sender identity.

Likely next-version signals: Node 22/npm 11 compatibility, plugin lifecycle hooks, session-scoped toolsets, and TTS sample-rate handling.

## 7. User Feedback Summary

- **Update stability is the loudest complaint.** [Issue #75598](https://github.com/NousResearch/hermes-agent/issues/75598) describes a week-long regression where updates make the program unstable and multiple gateways conflict across profiles.
- **Installer friction is widespread.** Users report `EBADENGINE` on npm 11/Node 22 ([#76486](https://github.com/NousResearch/hermes-agent/issues/76486), [#75651](https://github.com/NousResearch/hermes-agent/issues/75651)), Windows bootstrap `.exe` failure ([#76484](https://github.com/NousResearch/hermes-agent/issues/76484)), and Termux install failure ([#76469](https://github.com/NousResearch/hermes-agent/issues/76469)).
- **Desktop UX remains a dissatisfaction point.** Complaints include default demo plugins cluttering the status bar ([#76064](https://github.com/NousResearch/hermes-agent/issues/76064)), broken IME preedit for Japanese/CJK ([#75960](https://github.com/NousResearch/hermes-agent/issues/75960)), and project-scoped sessions using the wrong cwd on Windows ([#65274](https://github.com/NousResearch/hermes-agent/issues/65274)).
- **Power users are pushing for governance and lifecycle features.** The plugin lifecycle proposal and policy/audit authorization proposal both attracted active implementation work.

## 8. Backlog Watch

The following issues and PRs have been open for a long time or remain unanswered despite importance:

- [Issue #43757 — Responses API: `function_call_output` items stripped, losing tool results across turns](https://github.com/NousResearch/hermes-agent/issues/43757) — Open since 2026-06-10, P2.
- [Issue #32887 — `gateway_state.json` heartbeat tick missing; idle gateways appear down](https://github.com/NousResearch/hermes-agent/issues/32887) — Open since 2026-05-27, P3.
- [Issue #25849 — `EMAIL_ADDRESS` env var does not always match the actual email account/user](https://github.com/NousResearch/hermes-agent/issues/25849) — Open since 2026-05-14, P3.
- [Issue #34992 — Proposal: policy/audit authorization layer for Hermes tool execution](https://github.com/NousResearch/hermes-agent/issues/34992) — Open since 2026-05-29.
- [PR #56040 — fix: redact secrets in streaming path split-message chunks](https://github.com/NousResearch/hermes-agent/pull/56040) — Open since 2026-07-01; security-relevant and still unmerged.
- [PR #71996 — fix(approval): stop absolute-path spellings bypassing the hardline floor](https://github.com/NousResearch/hermes-agent/pull/71996) — Open since 2026-07-26; addresses a security bypass.

These items, especially the security-related PRs and the long-standing Responses API tool-result bug, remain important candidates for maintainer attention.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-02

## 1. Today's Overview
PicoClaw’s GitHub activity in the last 24 hours is modest: 1 issue and 3 PRs were updated, with no new releases. No PRs were merged in this window, and one PR was closed with the `stale` label. Active development appears focused on expanding provider support — Exa web search and OrcaRouter — while the main stability concern remains the unreconnected Matrix sync loop. Overall project health is stable but trending toward integration breadth rather than reliability fixes. Maintainer review is needed to keep open PRs and the stale-marked Matrix bug from stalling.

## 2. Releases
No new releases were published for PicoClaw on or around 2026-08-02.

## 3. Project Progress
No merged PRs were observed in this window.

- **PR #3261 — Add zh-TW locale and Traditional Chinese translations**  
  [https://github.com/sipeed/picoclaw/pull/3261](https://github.com/sipeed/picoclaw/pull/3261)  
  This PR was closed and labeled `stale`, so the Taiwanese Traditional Chinese localization work did not advance. No merge indication was present in the data.

## 4. Community Hot Topics
The most active discussion is the Matrix sync reliability bug:

- **Issue #3203 — [BUG] Matrix sync loop has no reconnection logic**  
  [https://github.com/sipeed/picoclaw/issues/3203](https://github.com/sipeed/picoclaw/issues/3203)  
  Created: 2026-07-02 | Updated: 2026-08-01 | Comments: 7 | 👍: 2  
  Users are concerned about silent permanent failure of the Matrix `/sync` long-polling loop after network disruptions or homeserver restarts. The underlying need is resilience: channel integrations should automatically reconnect or at least provide a crash signal that triggers systemd restart.

## 5. Bugs & Stability
- **High severity — Matrix sync loop silent death**  
  [Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)  
  PicoClaw v0.2.9’s Matrix channel can permanently stop syncing after network/server disruption. Because the main process stays alive, `Restart=on-failure` does not fire. The bug remains open and has no linked fix PR as of 2026-08-02.

## 6. Feature Requests & Roadmap Signals
Two open PRs point toward a more extensible provider layer in future versions:

- **PR #3299 — Add native Exa web search provider**  
  [https://github.com/sipeed/picoclaw/pull/3299](https://github.com/sipeed/picoclaw/pull/3299)  
  Adds Exa as a `web_search` provider with API key auth and date-range filters. If merged, this strengthens the `tools.web` ecosystem.

- **PR #3309 — Add OrcaRouter as an OpenAI-compatible provider**  
  [https://github.com/sipeed/picoclaw/pull/3309](https://github.com/sipeed/picoclaw/pull/3309)  
  Introduces `orcarouter` as a first-class OpenAI-compatible provider, supporting multi-vendor `vendor/model` routing.

- **PR #3261 — zh-TW locale / Traditional Chinese translations**  
  Although closed as stale, this signals demand for broader localization. It may be revived if maintainers prioritize i18n.

Predictions: The next minor PicoClaw release could include native Exa search and/or OrcaRouter support if these PRs receive maintainer approval. Localization work may need to be re-submitted to be accepted.

## 7. User Feedback Summary
- Users need **reliable Matrix connectivity**; the silent sync death in Issue #3203 is a concrete pain point that can cause missed messages without any visible error.
- There is interest in **better web search provider choice**, specifically Exa, and in **OpenAI-compatible router support** like OrcaRouter, indicating a preference for vendor-neutral flexibility.
- The zh-TW localization PR shows demand for **Traditional Chinese / Taiwanese terminology** in both WebUI and documentation.

## 8. Backlog Watch
- **Issue #3203 — Matrix sync no reconnection logic**  
  Open for a month, updated 2026-08-01, labeled `stale`, with 7 comments and 2 👍. This is the most important reliability issue needing maintainer attention; without a fix PR it risks being ignored.

- **PR #3261 — zh-TW locale**  
  Closed as stale despite appearing complete. Maintainers may want to re-evaluate whether this should be reopened or manually reviewed.

- **PR #3299 — Exa web search provider**  
  Open since 2026-07-26 with no reported maintainer comments. Needs review to avoid becoming stale.

- **PR #3309 — OrcaRouter provider**  
  Open since 2026-08-01, very new, but should receive maintainer feedback early to remain viable.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-02

## Today's Overview

NanoClaw had a high-activity 24-hour window: **2 issues updated, 15 PRs updated, 5 PRs closed/merged, and 1 new release** (`v2.1.54`). The headline change is the breaking unification of iMessage into a single channel with local and hosted backends, immediately refined by a follow-up registration-flow PR. Maintainers also merged a setup-failure fix and a new credential-expiration alert. The open PR queue is substantial but healthy, with several older fixes — rootless Docker, duplicate delivery, and outbound.db recovery — still waiting for merge. Overall, project health looks strong: contributor throughput is high and core-team-labeled PRs are moving quickly.

## Releases

### v2.1.54 — [Release](https://github.com/nanocoai/nanoclaw/releases/tag/v2.1.54)

- **Rollup release** covering **v2.1.18 through v2.1.54** — everything merged since the `v2.1.17` tag.
- **[BREAKING]** iMessage is unified into a single `imessage` channel with **two backends** via `/add-imessage`:
  - **Local** — this Mac’s `chat.db` via the Chat SDK
  - **Hosted** — native [Photon](https://photon.codes) via `spectru…` *(release note truncated)*
- **Migration note:** operators using older/separate iMessage setup paths should re-install through `/add-imessage` and choose the desired backend.

## Project Progress

Five PRs moved to **merged/closed** in the last 24 hours:

- [#3170 — fix(setup): dispatch failure assist to the picked provider](https://github.com/nanocoai/nanoclaw/pull/3170) — closed; prevents setup from redirecting failures to the wrong provider tooling.
- [#3168 — fix(release): close post-merge safety gaps](https://github.com/nanocoai/nanoclaw/pull/3168) — closed; release-process hardening.
- [#3167 — feat(credentials): alert when a provider credential expires](https://github.com/nanocoai/nanoclaw/pull/3167) — closed; adds proactive provider-credential expiration alerts.
- [#2999 — feat(channels): unify iMessage into a single `imessage` channel](https://github.com/nanocoai/nanoclaw/pull/2999) — closed; the foundation of the new iMessage channel structure.
- [#3164 — Hosted iMessage (Photon): supersede #2999 with a working registration flow](https://github.com/nanocoai/nanoclaw/pull/3164) — closed; final working registration flow for hosted iMessage.

Also closed: [#3169 — Setup failures on non-Claude installs always offer to install the Claude CLI](https://github.com/nanocoai/nanoclaw/issues/3169).

## Community Hot Topics

No comment or reaction counts were provided in the data, so “hot topics” are identified by recency and issue-to-PR pairing.

- **[#3171 — The two qodo skills depend on an integration nothing sets up and intercept normal coding requests](https://github.com/nanocoai/nanoclaw/issues/3171)** — Open. This is the most behaviorally significant issue: bundled Qodo skills require `~/.qodo/config.json` but nothing provisions it. Directly addressed by open PR [#3172](https://github.com/nanocoai/nanoclaw/pull/3172).
- **[#3169 — Setup failures on non-Claude installs always offer to install the Claude CLI](https://github.com/nanocoai/nanoclaw/issues/3169)** — Closed. Underlying need: setup failure assistance should respect the provider the user actually selected.
- **[#3174 — fix: support rootless Docker for agent containers](https://github.com/nanocoai/nanoclaw/pull/3174)** — Open. Community-contributed fix for a real deployment limitation; representative of broader demand for non-root/rootless environments.
- **[#3170 — fix(setup): dispatch failure assist to the picked provider](https://github.com/nanocoai/nanoclaw/pull/3170)** — Closed; quickly resolved the #3169 pain point.

## Bugs & Stability

Ranked by severity:

1. **Qodo skills intercept normal coding requests** — [#3171](https://github.com/nanocoai/nanoclaw/issues/3171) — Open. Two bundled skills read an unconfigured Qodo API key and intercept normal requests. Fix PR: [#3172](https://github.com/nanocoai/nanoclaw/pull/3172) (proposes removing both skills).
2. **migrate-v2 calls removed `insertTask`** — [#3166](https://github.com/nanocoai/nanoclaw/pull/3166) — Open. Static ESM import dies with a `SyntaxError` before migration runs. Fix exists and is open.
3. **Rootless Docker agent containers unusable** — [#3174](https://github.com/nanocoai/nanoclaw/pull/3174) — Open. Two independent failures make agents impossible on rootless Docker daemons.
4. **Setup failure assist targets wrong provider** — [#3169](https://github.com/nanocoai/nanoclaw/issues/3169) — Closed. UX bug, fixed by [#3170](https://github.com/nanocoai/nanoclaw/pull/3170).
5. **Duplicate delivery when final output repeats tool-sent content** — [#2956](https://github.com/nanocoai/nanoclaw/pull/2956) — Open. Agents using `send_message` then repeating the text can deliver duplicates.
6. **Credential expiration surfaced only as a cryptic reconnect error** — [#3167](https://github.com/nanocoai/nanoclaw/pull/3167) — Closed/fixed via the new credential-expiry alert.

No security or crash-only regressions were reported in the last 24 hours.

## Feature Requests & Roadmap Signals

The following open PRs act as current feature/roadmap signals:

- **Rootless Docker support** — [#3174](https://github.com/nanocoai/nanoclaw/pull/3174)
- **Best-effort reaction delivery** — [#3121](https://github.com/nanocoai/nanoclaw/pull/3121)
- **Egress update** — [#3173](https://github.com/nanocoai/nanoclaw/pull/3173)
- **Prepended top-level context Markdown in templates** — [#3090](https://github.com/nanocoai/nanoclaw/pull/3090)
- **Docs alignment for Telegram pairing** — [#3046](https://github.com/nanocoai/nanoclaw/pull/3046)

Given the fast rollup cadence of `v2.1.54`, the next release likely includes **#3172** (Qodo skill removal), **#3174** (rootless Docker), and **#3166** (migrate-v2 fix), assuming maintainers keep current merge velocity.

## User Feedback Summary

- **Setup should respect provider choice.** Users selecting Codex or other providers do not want Claude CLI installs or Anthropic sign-in prompts during failure diagnosis ([#3169](https://github.com/nanocoai/nanoclaw/issues/3169)).
- **Bundled skills should not depend on unconfigured external services.** The Qodo skills created confusion and intercepted normal workflows ([#3171](https://github.com/nanocoai/nanoclaw/issues/3171)).
- **Credential errors need actionable messaging.** An expired credential surfaced as “Read-only file system” during reconnect, which is hard for operators to interpret ([#3167](https://github.com/nanocoai/nanoclaw/pull/3167)).
- **Rootless Docker is a real deployment model.** A contributor deliberately kept the agent account out of the `docker` group and hit concrete failures ([#3174](https://github.com/nanocoai/nanoclaw/pull/3174)).
- **Migration paths must be tested after refactors.** The `insertTaskRow` rename broke `migrate-v2` entirely ([#3166](https://github.com/nanocoai/nanoclaw/pull/3166)).

## Backlog Watch

Several important PRs have been open for weeks and may need maintainer attention:

- [#2750 — recover stale `outbound.db` journals after container kills; classify hot-journal poll races](https://github.com/nanocoai/nanoclaw/pull/2750) — open since **2026-06-12**, updated 2026-08-01.
- [#2801 — fix(router): harden untrusted router input](https://github.com/nanocoai/nanoclaw/pull/2801) — open since **2026-06-17**, updated 2026-08-01.
- [#2956 — suppress duplicate delivery when final output repeats tool-sent content](https://github.com/nanocoai/nanoclaw/pull/2956) — open since **2026-07-05**, updated 2026-08-01.
- [#3046 — docs(pairing): align init-first-agent with current status blocks](https://github.com/nanocoai/nanoclaw/pull/3046) — open since **2026-07-14**, updated 2026-08-01.
- [#3090 — fix(templates): prepend all top-level context Markdown](https://github.com/nanocoai/nanoclaw/pull/3090) — open since **2026-07-19**, updated 2026-08-01.
- [#3121 — Make reaction delivery best-effort](https://github.com/nanocoai/nanoclaw/pull/3121) — open since **2026-07-23**, updated 2026-08-01.

The long-open items are primarily stability and reliability fixes, so they represent the most important backlog risk for NanoClaw.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-02

## 1. Today's Overview

High-velocity day, dominated by the "reborn" architecture refactor: 11 issues and 24 PRs were updated in the last 24 hours, with 8 PRs merged/closed and 2 issues closed. The Wave 2 contract-inversion program advanced on two fronts — #6998 (WS2.1) and #7002 (WS5) both merged, removing `ironclaw_product` dependencies from `extension_host` and `webui`/`openai_compat` respectively. Two tracking issues closed: the path-keyed CI-gate inventory (#6963) and the neutral-contracts extraction (#6921). However, stability debt is accumulating: a severe libSQL write-path regression (#6974, p95 37–135s) and a structural CI roll-up failure (#6978) remain open, and a release PR (#5598) has now languished for 30 days. Overall health is good — disciplined architectural momentum with active, responsive maintainers — but performance and CI reliability are the areas to watch.

## 2. Releases

No new releases in the last 24 hours. (Note: release PR [#5598](https://github.com/nearai/ironclaw/pull/5598) — carrying breaking changes for `ironclaw_common` 0.4.2→0.5.0 and `ironclaw_skills` 0.3.0→0.4.0 — remains pending; see Backlog Watch.)

## 3. Project Progress

Merged/closed in the last 24 hours:

- **[PR #6998](https://github.com/nearai/ironclaw/pull/6998) (WS2.1, merged)** — Inverts `ironclaw_extension_host`'s product-facing ports onto `ironclaw_product_contracts`. Behavior-free refactor: definitions move, all implementations stay with their owners, decoupling 19 production files.
- **[PR #7002](https://github.com/nearai/ironclaw/pull/7002) (WS5, merged)** — Inverts `webui` and `openai_compat` onto `product_contracts`; includes union resolution with #7000's new modules in `product_contracts/src/lib.rs`.
- **[PR #6996](https://github.com/nearai/ironclaw/pull/6996) (merged)** — Closes [#6963](https://github.com/nearai/ironclaw/issues/6963): inventory-driven discovery plus fail-closed behavior for six silent and two loud path-keyed CI gates that #6946 missed.
- **[PR #6995](https://github.com/nearai/ironclaw/pull/6995) (merged)** — Wave 1 truth audit reconciling `docs/reborn/target-architecture/` with merged `main` at `a50ad0638`.
- **[PR #6761](https://github.com/nearai/ironclaw/pull/6761) (merged)** — Regression test for generic outbound channel registration; first contribution from ogarciarevett (tagged "contributor: new").
- **[Issue #6963](https://github.com/nearai/ironclaw/issues/6963)** and **[Issue #6921](https://github.com/nearai/ironclaw/issues/6921)** closed.

The day's activity centers on a deliberate merge order for the WS2 stack: #6998 → #7000 → #7003 → #7004, with #7005 stacked on #7002→#6998. Roughly half of Wave 2's contract inversions have now landed.

## 4. Community Hot Topics

- **[Issue #6963 — Path-keyed CI gates](https://github.com/nearai/ironclaw/issues/6963)** — 7 comments, the most-discussed item. Filed as a weak-checklist→tracking-issue escalation; the discussion drove an inventory-driven, fail-closed fix (#6996) that closed it within ~28 hours. Underlying need: systematic discovery of CI gate defects rather than incidental review findings.
- **[Issue #6974 — libSQL thread_store_writes pathology](https://github.com/nearai/ironclaw/issues/6974)** — 2 comments. Split from #6973; tool-heavy stress cases at p95 37–135s dominate the conversation around the Postgres/libSQL capacity-recovery effort.
- **[Issue #6921 — Neutral contracts extraction](https://github.com/nearai/ironclaw/issues/6921)** — 2 comments, closed. Acceptance-criteria discussion on giving loop/extension/product vocabulary neutral homes and sealing evidence minting.
- **The WS2 stacked-PR chain** (#6998→#7000→#7003→#7004, plus #7002/#7005) was the volume center of the day; heavy but well-ordered review traffic from core contributors.

## 5. Bugs & Stability

Ranked by severity:

1. **libSQL write-path performance regression — [#6974](https://github.com/nearai/ironclaw/issues/6974) (OPEN).** Tool-heavy stress cases at p95 37–135s post-#6696, versus a 2.5s target; `main` cannot even complete the large-context prefill within a 20-minute CI timeout. Mitigation for the related Postgres slice is in PR [#6973](https://github.com/nearai/ironclaw/pull/6973); **no dedicated libSQL fix PR yet.**
2. **Tests (Reborn) roll-up structurally broken on manual runs — [#6978](https://github.com/nearai/ironclaw/issues/6978) (OPEN).** Proven chain: `critical-mutation` only runs on `pull_request`/`merge_group`, but the roll-up disallows the skip, so every `workflow_dispatch` run goes red even with zero real lane failures. Blocks clean CI signal for wave runs.
3. **Five pre-existing `extension_manager` findings — [#7011](https://github.com/nearai/ironclaw/issues/7011) (OPEN).** Surfaced by the WS2.4 split (#7003): false `WriteFilesystem` effect, untested lock predicate, two missing dispatch tests, six dropped causes. All in code relocated byte-for-byte (100% rename similarity) — latent, not introduced by the split, but now unowned.
4. **Server-lifecycle rule gap — [#6999](https://github.com/nearai/ironclaw/issues/6999) (OPEN).** `reborn_dependency_boundaries` documents a WebChat v2 route-surface rule it never enforced; explicitly deferred as an architecture call, not a gate repoint.
5. **Coverage-gate friction — [#7006](https://github.com/nearai/ironclaw/issues/7006) (OPEN).** PR #5981 trips the changed-lines integration coverage gate on ~180 lines that the hermetic harness cannot execute (fault-injection paths, serialization failures, etc.).

Fix PRs in flight: [#6992](https://github.com/nearai/ironclaw/pull/6992) (LC_ALL=C pin for `comm` in crate discovery), [#7001](https://github.com/nearai/ironclaw/pull/7001) (byte-stable cached system prefix — P0 cache-churn fix), [#6997](https://github.com/nearai/ironclaw/pull/6997) (explicit Anthropic `cache_control` breakpoints on both transports — P0).

## 6. Feature Requests & Roadmap Signals

- **OrcaRouter as a built-in LLM provider — [#7009](https://github.com/nearai/ironclaw/issues/7009) (OPEN).** Direct user request: `providers.json` already carries nine multi-provider gateways (OpenRouter, Together, Fireworks, Cerebras, SambaNova, NVIDIA, Venice, io.net, Yandex) but not OrcaRouter, forcing out-of-band configuration. Small, well-scoped parity addition — plausible near-term landing.
- **OOBE automation-tasks backend wiring — [#6993](https://github.com/nearai/ironclaw/issues/6993) (OPEN).** Tracks making the UI-only prototype ([#6994](https://github.com/nearai/ironclaw/pull/6994)) production-real per `AUTOMATION-TASKS-CONTRACT.md`; signals product investment in first-time-user onboarding.
- **Merge-queue Slack alerting — [#7007](https://github.com/nearai/ironclaw/pull/7007) (OPEN).** Watches failed `merge_group` runs and posts details to the live-canary channel; an operational reliability feature for the reborn CI pipeline.
- **IronHub deep-link register/install gateway + private manifest source — [#6780](https://github.com/nearai/ironclaw/pull/6780) (OPEN).** Large feature re-port of #5409, awaiting a review slot in the stack-heavy queue.

## 7. User Feedback Summary

- **External feature demand is thin but concrete**: [#7009](https://github.com/nearai/ironclaw/issues/7009) is a clear external request for gateway parity — users expect dedicated `providers.json` entries for the providers they actually reach for.
- **Performance pain in tool-heavy workloads**: [#6974](https://github.com/nearai/ironclaw/issues/6974) documents p95 latency of 37–135s for tool-heavy cases, and a nightly suite that cannot pass CI timeouts at all. This is the loudest pain point today.
- **Contributor friction on CI gates**: [#7006](https://github.com/nearai/ironclaw/issues/7006) (coverage gate impossible for fault-injection error paths) and [#6978](https://github.com/nearai/ironclaw/issues/6978) (structural roll-up red) add noise for contributors. Maintainers are responsive — #6963 went from filed to fixed in about a day.
- **Onboarding/UX direction**: [#6994](https://github.com/nearai/ironclaw/pull/6994)/[#6993](https://github.com/nearai/ironclaw/issues/6993) show design-session OOBE concepts being recovered and pushed toward real backend wiring — a product-led signal for first-run experience.

## 8. Backlog Watch

- **[PR #5598 — chore: release](https://github.com/nearai/ironclaw/pull/5598)** — open since 2026-07-03 (30 days). Release carrying breaking changes in `ironclaw_common` (0.4.2→0.5.0) and `ironclaw_skills` (0.3.0→0.4.0). Likely blocked on the reborn refactor; needs an explicit maintainer decision or de-queue.
- **[PR #5981 — Reborn queued-message steering](https://github.com/nearai/ironclaw/pull/5981)** — open since 2026-07-11 (22 days). Large, risk-medium, forward-ported; now additionally blocked by the coverage-gate finding in #7006.
- **[PR #5982 — Budget approval-as-blocked-gate + usage settings](https://github.com/nearai/ironclaw/pull/5982)** — open since 2026-07-11 (22 days). Split 2/2, stacked on #5981; waiting on that merge.
- **[PR #6780 — IronHub deep-link register/install gateway](https://github.com/nearai/ironclaw/pull/6780)** — open since 2026-07-28. XL feature re-port following @neo-sky's design; needs a review slot.
- **[PR #6917 — Authenticated workspace file-link previews](https://github.com/nearai/ironclaw/pull/6917)** — open since 2026-07-30. WebUI fix from a non-core contributor; low review time since it landed at the start of the WS2 wave.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-02

## 1. Today's Overview

In the last 24 hours, LobsterAI saw very low activity: 7 issues were updated, of which 6 were closed by stale-bot and only 1 remains open. No pull requests were merged or closed; 2 PRs were touched, both still open. No new releases were published. Overall, the project appears to be in a maintenance-only phase, with stale-label automation dominating issue traffic and no visible feature integration or release momentum.

## 2. Releases

No new releases were published in the last 24 hours. This section is intentionally omitted.

## 3. Project Progress

- No PRs were merged or closed today.
- Two PRs were updated and remain open:
  - [PR #1224](https://github.com/netease-youdao/LobsterAI/pull/1224) — `fix(agent): 修复 i18n 硬编码、Agent 弹窗 Escape 键支持及删除防重复点击` — i18n hardcoded Chinese fix plus Agent modal UX improvements; linked to Issue #1223.
  - [PR #2358](https://github.com/netease-youdao/LobsterAI/pull/2358) — `fix(cowork): show feedback when session rename fails` — adds localized error feedback when renaming a session fails; linked to Issue #670.

No feature advancement was merged; the project's visible progress is limited to pending review work.

## 4. Community Hot Topics

No issue or PR generated significant discussion. All closed issues have 2 comments; the only reaction was a 👍 on #1293.

- [Issue #1293](https://github.com/netease-youdao/LobsterAI/issues/1293) — Custom MCP HTTP not working because the OpenClaw engine does not receive the custom MCP config; only SSE works. This is a practical integration gap affecting users who rely on custom MCP endpoints.
- [Issue #1296](https://github.com/netease-youdao/LobsterAI/issues/1296) — Uploading a 3MB long image causes page error and subsequent tasks become unusable. Severity is high due to a persistent broken state.
- [Issue #1298](https://github.com/netease-youdao/LobsterAI/issues/1298) — A simple two-character input is incorrectly rejected as "content too long", suggesting flawed token-limit estimation.
- [Issue #1305](https://github.com/netease-youdao/LobsterAI/issues/1305) — After deleting a runnable scheduled task, historical records show an incorrect title.
- [Issue #1307](https://github.com/netease-youdao/LobsterAI/issues/1307) — After closing a model provider config panel, other providers become read-only and cannot be edited.

These issues highlight real user pain around MCP compatibility, image upload robustness, input validation, and config panel state management.

## 5. Bugs & Stability

Ranked by severity:

1. **High** — [Issue #1296](https://github.com/netease-youdao/LobsterAI/issues/1296): 3MB long image upload causes a hard page error and new tasks keep failing, making the app effectively unusable after the incident. No fix PR linked.
2. **High** — [Issue #1293](https://github.com/netease-youdao/LobsterAI/issues/1293): Custom HTTP MCP is not registered in the OpenClaw engine, so custom MCP tools cannot be called. This blocks MCP-based workflows.
3. **Medium** — [Issue #1307](https://github.com/netease-youdao/LobsterAI/issues/1307): Model provider config panel becomes permanently read-only after open/close cycle; likely a state-reset bug.
4. **Medium** — [Issue #1298](https://github.com/netease-youdao/LobsterAI/issues/1298): False "input exceeds model limit" error for short text, possibly a wrong tokenizer or context calculation.
5. **Low** — [Issue #1305](https://github.com/netease-youdao/LobsterAI/issues/1305): Wrong title displayed in scheduled task history after the task is deleted.

No fix PRs were linked to these newly updated bugs.

## 6. Feature Requests & Roadmap Signals

- [Issue #1302](https://github.com/netease-youdao/LobsterAI/issues/1302) — A feature request to add line-number toggle buttons to code blocks via `showLineNumbers`. It was closed as stale, but the detailed UX proposal suggests users want better code-reading support.
- [Issue #1223](https://github.com/netease-youdao/LobsterAI/issues/1223) — Combines three UX/i18n improvements: hardcoded Chinese strings, missing Escape key support in Agent modals, and debounce protection for delete actions. Since [PR #1224](https://github.com/netease-youdao/LobsterAI/pull/1224) already exists and addresses this issue, it is a strong candidate for a future merge.
- [PR #2358](https://github.com/netease-youdao/LobsterAI/pull/2358) — Adding failure feedback for session renames is a small but meaningful UX fix, likely to appear in the next minor release if reviewed.

Predictions: The next version will likely include the i18n/Escape/delete fixes from PR #1224 and the session rename feedback from PR #2358, assuming maintainer review resumes.

## 7. User Feedback Summary

User reports this cycle center on:

- **Integration friction**: Custom MCP HTTP endpoints do not work with the underlying engine.
- **Stability concerns**: Large image uploads can crash the UI and make tasks permanently fail.
- **UX bugs**: Model provider config panel becomes uneditable; input-length validation is too aggressive.
- **i18n quality**: Hardcoded Chinese labels leak into English prompts, degrading non-Chinese user experience.
- **Data consistency**: Deleted scheduled tasks leave incorrect titles in history logs.

There is no positive feedback visible in this window. The high closure rate of stale issues without visible fixes may intensify user dissatisfaction around unresolved bugs.

## 8. Backlog Watch

- [Issue #1223](https://github.com/netease-youdao/LobsterAI/issues/1223) — Open since 2026-04-01, labeled stale, with a ready fix PR ([#1224](https://github.com/netease-youdao/LobsterAI/pull/1224)) also open since 2026-04-01. Both were updated on 2026-08-01 but remain unmerged. This is the most important item needing maintainer attention.
- [PR #2358](https://github.com/netease-youdao/LobsterAI/pull/2358) — Open since 2026-07-18, fixes Issue #670, but has no visible comments or merge activity. The fix addresses silent session rename failures and should be reviewed.
- All closed issues (#1293, #1296, #1298, #1302, #1305, #1307) were automatically marked stale and closed, suggesting the maintainer team has not recently triaged them.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-02

## Today's Overview
On 2026-08-02, Moltis saw no new releases and no issue updates in the last 24 hours. Pull request activity was moderate: 3 PRs were touched, with 2 closed (merged or closed) and 1 open. The closed work adds agent instrumentation/feedback infrastructure and enforces stronger operator-based privilege boundaries. One open PR aims to make the `main` session deletable/archivable like other sessions. Overall project health appears stable, with no new bug reports and maintainer attention focused on security, observability, and session-management ergonomics.

## Releases
None. No new versions were published in the last 24 hours, so no changelog, breaking-change, or migration notes are available.

## Project Progress
- **PR #1174 — [CLOSED] Add instrumentation and feedback collection infrastructure**  
  [moltis-org/moltis PR #1174](https://github.com/moltis-org/moltis/pull/1174)  
  This substantial PR adds backend-neutral agent instrumentation, Langfuse v4 export, operational OTLP backends, and end-user reaction feedback. It includes immutable completion-only turns, streaming/non-streaming parity, provider failover attribution, cache-aware token usage, and reasoning support. This is a major observability and user-feedback milestone.

- **PR #1170 — [CLOSED] fix(channels): gate /sh and privileged tools behind a per-account operators list**  
  [moltis-org/moltis PR #1170](https://github.com/moltis-org/moltis/pull/1170)  
  This security-focused fix separates channel access from privilege by introducing an explicit per-account `operators` list. It enforces the boundary across commands, callbacks, queue replay, chat execution, and external paths, closing a potential privilege-escalation gap for allowlisted senders.

- **PR #1182 — [OPEN] fix(sessions): allow deleting and archiving the main session**  
  [moltis-org/moltis PR #1182](https://github.com/moltis-org/moltis/pull/1182)  
  This open PR fixes [#1132](https://github.com/moltis-org/moltis/issues/1132) by removing the `main` session guard in `delete_impl` and `is_archivable_entry`, while preserving restrictions on the currently active channel session and `clear_all` behavior.

## Community Hot Topics
No issues were updated in the last 24 hours, and comment/reaction counts for PRs were not populated in the available data. The most likely discussion magnets are:

- **PR #1182 — Session lifecycle flexibility**  
  [moltis-org/moltis PR #1182](https://github.com/moltis-org/moltis/pull/1182)  
  The underlying user need is straightforward: the `main` session should not be a special, undeletable object. Users want the same deletion/archiving controls for the main session as for any other session, without sacrificing safety around the active channel session.

- **PR #1174 — Instrumentation and feedback infrastructure**  
  [moltis-org/moltis PR #1174](https://github.com/moltis-org/moltis/pull/1174)  
  This indicates demand for production-grade observability: tracing, token-usage accounting, provider failover attribution, and collecting explicit user feedback. It is a sign of users moving toward real-world deployment and needing operational visibility.

- **PR #1170 — Privilege separation / security hardening**  
  [moltis-org/moltis PR #1170](https://github.com/moltis-org/moltis/pull/1170)  
  The security angle is likely a high-interest topic: admins want a clear, per-account operator model rather than conflating channel access with privileged tool access.

## Bugs & Stability
No new issues or crashes were reported or updated in the last 24 hours. However, two PRs address existing or potential stability/security concerns:

- **High severity: Privileged command exposure via channel allowlist — fixed in PR #1170**  
  Channel senders who passed an access allowlist could previously reach privileged commands and host tools. This is a security boundary issue, now mitigated by the per-account `operators` list.

- **Medium severity: Inability to delete/archive the main session — fix in PR #1182**  
  Referenced issue [#1132](https://github.com/moltis-org/moltis/issues/1132) prevented normal lifecycle management for the `main` session. The fix is proposed but not yet merged.

No other regressions or new stability issues were observed in this window.

## Feature Requests & Roadmap Signals
The recent PRs point to several roadmap priorities:

- **Observability and feedback collection** — PR #1174 strongly signals that tracing, token accounting, and end-user reactions are expected features for production deployments.
- **Flexible session management** — PR #1182 suggests session lifecycle operations should be uniform across all session types, including `main`.
- **Granular access control** — PR #1170 indicates a move toward operational roles, separating “who can chat” from “who can run privileged tools.”

If these land together, the next Moltis version could include: backend-neutral instrumentation, Langfuse/OTLP export, user feedback APIs, operator-based privilege management, and improved session deletion/archiving behavior.

## User Feedback Summary
No explicit user issues or comments were captured in the last 24 hours. Indirectly, the PR activity reflects known pain points:

- Users want the `main` session to behave like other sessions and be deletable/archivable.
- Deployers need clear separation between channel access and privileged tool access.
- Teams integrating Moltis into production are asking for observability, token-usage visibility, and feedback collection.

The maintainers appear responsive to these concerns, as two of the three PRs are already closed and one is actively under review.

## Backlog Watch
No long-unanswered issues were visible in the last-24-hour data set; there are currently 0 open/active issues in the reporting window. The open PR to watch is:

- **PR #1182 — [OPEN] fix(sessions): allow deleting and archiving the main session**  
  [moltis-org/moltis PR #1182](https://github.com/moltis-org/moltis/pull/1182)  
  This PR resolves a known user-facing limitation (#1132) and should be considered for review/merge attention. Its absence from the merged set is the only notable backlog item in this snapshot.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-02

**Note:** The issue/PR data below is from the CoPaw/QwenPaw project at `agentscope-ai/QwenPaw`.

## 1. Today's Overview

In the last 24 hours, CoPaw showed active but incremental development: **9 issues were updated (all still open)** and **13 PRs were updated (12 open, 1 closed)**. No new releases were published. Activity was dominated by bug reports and matching fix PRs, particularly around memory compression, model-provider compatibility, ACP races, and skill-tag persistence. Several first-time contributors submitted fixes, suggesting a healthy community contribution loop. Overall project health looks stable: issue triage is moving, and most newly reported bugs already have corresponding open PRs.

## 2. Releases

**No new releases in the last 24 hours.** No changelog, migration, or breaking-change notes are available for this period.

## 3. Project Progress

- The only PR marked closed today was **[#6598](https://github.com/agentscope-ai/QwenPaw/pull/6598) — `fix(skills): preserve plugin-sourced skill tags across reconcile cycles`**. A newer open PR, **[#6632](https://github.com/agentscope-ai/QwenPaw/pull/6632)**, targets the same issue (#6537), so maintainers may want to consolidate the two.
- No PRs were explicitly merged today, but a large set of fix/feature PRs moved forward:

### Notable open PRs updated in last 24h
- **[#6632](https://github.com/agentscope-ai/QwenPaw/pull/6632)** — fix(skills): preserve plugin-sourced skill tags across reconcile cycles
- **[#6631](https://github.com/agentscope-ai/QwenPaw/pull/6631)** — fix(providers): align Aliyun coding plan models with official website
- **[#6630](https://github.com/agentscope-ai/QwenPaw/pull/6630)** — fix(agents): report empty model response to user instead of silently failing
- **[#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629)** — fix(memory): trigger summarize on auto-compression when `summarize_when_compact` is enabled
- **[#6628](https://github.com/agentscope-ai/QwenPaw/pull/6628)** — fix(scroll): use `SystemMsg` for compressed memory placeholder in `_rebuild_context`
- **[#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623)** — fix(acp): prevent final text loss when notifications race the prompt response
- **[#6622](https://github.com/agentscope-ai/QwenPaw/pull/6622)** — feat(provider): add OrcaRouter as built-in provider
- **[#6620](https://github.com/agentscope-ai/QwenPaw/pull/6620)** — fix(providers): relay Gemini `thought_signature` without mutating strict `ToolCallBlock`
- **[#6618](https://github.com/agentscope-ai/QwenPaw/pull/6618)** — fix(console): remove forced UTC timestamp normalization in session list

Longer-running feature PRs also saw updates: console image gallery (#5490), provider/routing unification (#6302), and desktop workspace shortcut (#6306).

## 4. Community Hot Topics

Within this 24-hour window, the most-discussed items had **2 comments each** — no PRs showed high comment/reaction activity, suggesting early-stage triage rather than heavy debate.

- **[#6593](https://github.com/agentscope-ai/QwenPaw/issues/6593) — Feature: 增加统一且专业的清理页面 (Unified cleanup page)**  
  Users are concerned about long-term storage bloat from automatic memory, tool artifacts, backups, and conversation history. The underlying need is **data lifecycle management**: a global cleanup page, selective deletion, and optional automated cleanup.

- **[#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) — Question: 运行nohup命令agent都会卡住 (nohup command hangs agent)**  
  Tool calls that detach processes via `nohup` or `&` never return to idle. This points to a need for **background/async command execution support** in the shell tool.

- **[#6568](https://github.com/agentscope-ai/QwenPaw/issues/6568) — Feature: 全局快捷键唤出浮动快速输入框 (Global hotkey floating quick-input box)**  
  The desktop app currently forces users to open the full 1280×800 main window for quick questions. Users want a **Raycast/豆包-style lightweight input overlay**, implying the current desktop interaction model is too heavy for casual questions.

Also notable: **[#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621)** describes 50+ rounds of wasted multi-agent debugging because agents were not automatically invoked unless explicitly configured in `PROFILE.md`. It has fewer comments but reflects a strong onboarding/documentation gap.

## 5. Bugs & Stability

Ranked by severity among issues updated in the last 24 hours:

### High severity
- **[#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619) — `"ToolCallBlock" object has no field "extra_content"` crash**  
  Crash in `openai_chat_model_compat._parse_stream_response` when Gemini tool calls carry thought-signature relay data. This breaks streaming requests in QwenPaw 2.0.1 + AgentScope 2.0.4.post1.  
  **Fix PR exists:** [#6620](https://github.com/agentscope-ai/QwenPaw/pull/6620)

- **[#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) — Shell process detached via `nohup`/`&` never returns to idle**  
  Causes the agent to hang on any command using background execution. This is a stability issue for shell-heavy workflows.  
  **No linked fix PR yet.**

### Medium severity
- **[#6625](https://github.com/agentscope-ai/QwenPaw/issues/6625) — ACP delegate sometimes returns "completed without text output"**  
  Race condition between `session/update` notifications and `session/prompt` responses can drop visible output.  
  **Fix PR exists:** [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623)

- **[#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624) — Scroll auto-compression does not trigger memory summarization**  
  Manual `/compact` triggers memory flow, but automatic context eviction does not respect `summarize_when_compact`.  
  **Fix PR exists:** [#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629)

### Lower severity / CI
- **[#6626](https://github.com/agentscope-ai/QwenPaw/issues/6626) — CI "Real behavior proof" gate strips fenced Evidence blocks**  
  PRs whose evidence consists only of fenced code blocks are incorrectly rejected because the content is stripped before evaluation.  
  **No fix PR yet.**

### Related fixes in flight
- **[#6628](https://github.com/agentscope-ai/QwenPaw/pull/6628)** fixes #6541, where compressed context was injected as `role=user`, causing OpenAI-compatible APIs like DeepSeek to return HTTP 400.
- **[#6630](https://github.com/agentscope-ai/QwenPaw/pull/6630)** addresses silent empty model responses.
- **[#6632](https://github.com/agentscope-ai/QwenPaw/pull/6632)** addresses skill-tag loss on restart (#6537).

## 6. Feature Requests & Roadmap Signals

- **[#6593](https://github.com/agentscope-ai/QwenPaw/issues/6593) — Unified cleanup page**  
  Likely roadmap candidate for a future minor release. It aligns with long-term user concerns about storage bloat. No implementation PR exists yet.

- **[#6568](https://github.com/agentscope-ai/QwenPaw/issues/6568) — Global hotkey + floating quick input box**  
  Strong desktop UX signal from multiple users. Would require Tauri/shortcut work and is a candidate for a later desktop release.

- **[#6627](https://github.com/agentscope-ai/QwenPaw/issues/6627) — LoongSuite tracing integration**  
  Users want to use `alibaba/loongsuite-python` for LLM traces with QwenPaw. This could be a documentation/plugin improvement rather than a core feature.

- **[#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621) — Multi-agent collaboration guidance**  
  The docs describe multi-agent setup but not the fact that agents are not auto-invoked unless specified in `PROFILE.md`. This is a clear **documentation and onboarding gap** that should be addressed soon.

- **[#6622](https://github.com/agentscope-ai/QwenPaw/pull/6622) — OrcaRouter as built-in provider**  
  Although a PR, it signals roadmap direction: expanding the provider catalog beyond cloud vendors and making custom routers one-click configurable.

Likely next-version candidates are the already-open bug-fix PRs: #6629, #6628, #6630, #6631, #6620, #6623, and #6632.

## 7. User Feedback Summary

- **Storage bloat is a real pain point for long-term users.** One user explicitly described QwenPaw becoming "臃肿" (bloated) over time, with no easy way to delete sessions together with their workspace directories.
- **Lightweight desktop interaction is missing.** Opening a 1280×800 window just to ask a quick question is considered too heavy; the demand for a mini floating input is clear.
- **Multi-agent discoverability is causing wasted time.** The #6621 report of 50+ rounds of ineffective debugging is a strong signal that current docs are insufficient for new users.
- **Timezone handling annoyed users enough to trigger a fix.** The UTC timestamp issue was significant enough for a first-time contributor to submit [#6618](https://github.com/agentscope-ai/QwenPaw/pull/6618).
- **Positive community signal:** Multiple first-time contributors submitted fixes for bugs they personally reproduced (#6620, #6623, #6618, #6622), indicating that the barrier to contributing is reasonably low.

## 8. Backlog Watch

Items that look most in need of maintainer attention:

- **[#5490](https://github.com/agentscope-ai/QwenPaw/pull/5490) — feat(console): show tool-card images inline and add gallery navigation**  
  Open since **2026-06-24** (~6 weeks). The PR improves how tool-generated images/videos are viewed in the console. It received no visible comments/reactions and may need review/decision.

- **[#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) — feat: unify provider discovery, model metadata, routing, and agent controls**  
  Large architectural PR open since **2026-07-21**. It touches provider onboarding and model management, so it likely needs maintainer review before merging.

- **[#6306](https://github.com/agentscope-ai/QwenPaw/pull/6306) — feat(desktop): add workspace shortcut to sidebar**  
  Open since **2026-07-21**. Solves a useful desktop workflow problem: opening generated files/artifacts without manually locating the agent workspace.

- **[#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) — nohup/background shell command hang**  
  Created **2026-07-26**, still no linked fix PR. This is a functional bug with meaningful impact for automation users.

- **[#6593](https://github.com/agentscope-ai/QwenPaw/issues/6593) — Cleanup page request**  
  Opened **2026-07-31**, already at 2 comments. It touches storage management, which is becoming a recurring theme in user feedback.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

## 1. Today's Overview

As of 2026-08-02, ZeroClaw is in a high-activity but consolidation-focused phase: 50 issues (47 open, 3 closed) and 50 PRs (50 open, 0 merged/closed) were updated in the last 24 hours, with no new releases published. The discussion load is concentrated in architecture and security RFCs, several now marked `accepted` or `in-progress`. Release preparation appears to have started via a `v0.8.4` version-bump PR, while a large eval-harness PR series remains blocked on author follow-up. Overall health is good in terms of maintainer process and issue triage, but merge throughput is currently limited.

## 2. Releases

No releases were published in the last 24 hours, so there are no changelog or migration notes to report. The closest release signal is open PR [#9648](https://github.com/zeroclaw-labs/zeroclaw/pull/9648), `chore(release): bump version to v0.8.4`, which notes that catalogue commits and the translation tag must be corrected before the release is cut.

## 3. Project Progress

There were **no merged or closed PRs** in the last 24 hours. Known closed issues from the data:

- [#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) — Mixture-of-Agents virtual model provider RFC, closed.
- [#9550](https://github.com/zeroclaw-labs/zeroclaw/issues/9550) — Docs: broken LinkedIn link on GitHub organization profile, closed.

Notable open PRs that advanced or are under active review:

- [#9648](https://github.com/zeroclaw-labs/zeroclaw/pull/9648) — Version bump to v0.8.4.
- [#9571](https://github.com/zeroclaw-labs/zeroclaw/pull/9571) — Remove the WATI channel entirely.
- [#9091](https://github.com/zeroclaw-labs/zeroclaw/pull/9091) — Native macOS/Linux X11/Windows computer-use drivers.
- [#9080](https://github.com/zeroclaw-labs/zeroclaw/pull/9080) — Secure relay transport and browser enrollment frontdoor.
- [#8985](https://github.com/zeroclaw-labs/zeroclaw/pull/8985) — Slack lifecycle progress display.
- [#9319](https://github.com/zeroclaw-labs/zeroclaw/pull/9319) — Seal the engine tool registry as `ScopedToolRegistry`.
- Eval-system PRs by IftekharUddin: [#9220](https://github.com/zeroclaw-labs/zeroclaw/pull/9220), [#9221](https://github.com/zeroclaw-labs/zeroclaw/pull/9221), [#9222](https://github.com/zeroclaw-labs/zeroclaw/pull/9222), [#9223](https://github.com/zeroclaw-labs/zeroclaw/pull/9223), [#9224](https://github.com/zeroclaw-labs/zeroclaw/pull/9224), [#9248](https://github.com/zeroclaw-labs/zeroclaw/pull/9248).
- [#9634](https://github.com/zeroclaw-labs/zeroclaw/pull/9634) — Telegram fix for `mention_only` group handling.

## 4. Community Hot Topics

The most commented issues are all RFCs around architecture, security, and interoperability:

- [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) — 16 comments: Separate conversation history from agent-curated long-term memory.
- [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) — 13 comments: Abstract a `KeySource` trait for master-key material classification.
- [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) — 12 comments: OpenAI Chat Completions compatibility adapter.
- [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) — 12 comments: Cross-turn conversation correlation in OpenTelemetry export.
- [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) — 11 comments: Per-execution confirmation tier for high-risk shell commands.

The underlying needs are consistent: clearer memory lifecycle boundaries, stronger security/deployment abstractions, OpenAI-ecosystem compatibility, better observability, and safer shell tooling. Notably, all top issues have 0 👍, so engagement is discussion-driven rather than reaction-driven.

## 5. Bugs & Stability

Ranked by reported severity:

- **S1 — security risk**: [#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) — WhatsApp Web responds to every DM and group under `mode = business`; an empty `allowed_groups` permits all groups. Accepted and in-progress. Follow-up RFC [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) proposes treating empty `allowed_groups` as permit-none.
- **S2 — degraded behavior / security leak**: [#9417](https://github.com/zeroclaw-labs/zeroclaw/issues/9417) — WhatsApp Cloud `request_approval` leaks a live approval token on send failure and cancellation. In-progress.
- **P1 — functional data loss**: [#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) — CLI-created cron jobs hardcode `delivery.mode = "none"`, so output is silently discarded. Accepted and in-progress.
- **S3 — minor issue**: [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) — Nextcloud Talk uses the wrong bot message API. Accepted and in-progress.

Bug-fix PRs also saw updates:

- [#9634](https://github.com/zeroclaw-labs/zeroclaw/pull/9634) — Telegram: skip unauthorized handler for non-mentioned group messages when `mention_only` is set.
- [#8576](https://github.com/zeroclaw-labs/zeroclaw/pull/8576) — Add env-var fallback for OpenAI STT credentials.
- [#9056](https://github.com/zeroclaw-labs/zeroclaw/pull/9056) — Surface cause-specific provider failure diagnostics.
- [#8546](https://github.com/zeroclaw-labs/zeroclaw/pull/8546) — Localize `zeroclaw status` fragments.

## 6. Feature Requests & Roadmap Signals

Strong roadmap signals this cycle:

- [#9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631) — Send stable `session_id` to OpenRouter for prompt-cache savings. New and likely attractive for cost reduction.
- [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) and [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) — Two related RFCs pushing to separate authoritative memory storage from conversation history and enrichment connectors.
- [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) — Key-source abstraction for master-key material.
- [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) — A2A outbound client (`A2ATool`) for proactive inter-agent calls.
- [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) — Realtime speech-to-speech channel for Gemini Live.
- [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) — Computer-use desktop support; implementation PR [#9091](https://github.com/zeroclaw-labs/zeroclaw/pull/9091) is already open.

Prediction: `v0.8.4` is likely imminent via [#9648](https://github.com/zeroclaw-labs/zeroclaw/pull/9648), probably containing smaller security/correctness fixes such as [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) if merged in time. The larger memory, auth, and A2A RFCs align with the v0.9.0 milestone tracked in [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432).

## 7. User Feedback Summary

Real user pain points visible in this window:

- **Security configuration that behaves unexpectedly**: WhatsApp Web allowlists read as locked down but are fully open ([#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348)), and a WhatsApp approval token can leak on failure ([#9417](https://github.com/zeroclaw-labs/zeroclaw/issues/9417)).
- **Ecosystem integration friction**: OpenAI-compatible clients like Open WebUI and LobeChat cannot connect without a custom adapter ([#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)).
- **Memory model confusion**: conversation history and long-term memory are mixed in runtime paths, and enrichment connectors like Lucid are modeled as authoritative backends ([#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048), [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103)).
- **Cost concerns**: OpenRouter chat is unnecessarily expensive because no stable `session_id` is sent for prompt caching ([#9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631)).
- **Silent failure modes**: CLI cron jobs run successfully but discard all output ([#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340)).
- **Channel integration bugs**: Nextcloud Talk responses fail due to wrong API usage ([#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157)).
- **Approval granularity**: shell tooling needs an allow/ask/deny middle tier, not just broad allow or deny ([#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)).

Satisfaction signals are mixed: the RFC process appears disciplined, with revision histories and accepted statuses, but many PRs are stuck in `needs-author-action`, suggesting contributor-side follow-up is a bottleneck.

## 8. Backlog Watch

Long-standing issues still awaiting maintainer review:

- [#6653](https://github.com/zeroclaw-labs/zeroclaw/issues/6653) — Host-architecture policy for emulated installs (May 14).
- [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) — Decouple memory lifecycle policy from storage backends (May 22).
- [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) — Computer-use desktop support (May 25); implementation PR [#9091](https://github.com/zeroclaw-labs/zeroclaw/pull/9091) is open.
- [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) — Security UX, runtime credential boundaries, isolation defaults (May 27).
- [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) — Granular sandbox policy for filesystem and network (May 28).
- [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) — Per-model capability and context-window config (June 2, P1).
- [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) — Pluggable inbound authentication and canonical principals (June 3).
- [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) — Runtime-owned security decision pipeline and restrictive overlays (June 3).
- [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) — Shell command confirmation tier / command policy (June 3).
- [#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897) — Apply security/config updates without full daemon reload (June 17).
- [#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929) — Unify slash-command registries across web UI, zerocode, and channel runtime (June 18).

PRs marked as stale-candidates or blocked on author action also deserve attention: [#8546](https://github.com/zeroclaw-labs/zeroclaw/pull/8546), [#8576](https://github.com/zeroclaw-labs/zeroclaw/pull/8576), [#8655](https://github.com/zeroclaw-labs/zeroclaw/pull/8655), and [#9056](https://github.com/zeroclaw-labs/zeroclaw/pull/9056).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*