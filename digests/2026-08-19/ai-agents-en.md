# OpenClaw Ecosystem Digest 2026-08-19

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-18 23:11 UTC

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

# OpenClaw Project Digest — 2026-08-19

## 1. Today's Overview

OpenClaw is in a period of **very high activity and moderate stability pressure**: 500 issues and 500 PRs were updated in the last 24 hours (38 issues closed; 167 PRs merged/closed), with **no new releases** shipped. The tracker continues to be dominated by **P1 regressions and session-state/data-loss bugs** — several tagged 🦞 diamond lobster — while maintainers (notably `steipete`, `clawsweeper`, `vyctorbrzezowski`) pushed a steady stream of focused fixes through the PR queue. Two new high-severity regressions landed this cycle: a **Matrix initial-sync loop** (#125679, bisected to #125302) and a **beta.2 gateway event-loop block** (#124788). Community-maintainer collaboration looks healthy, but several critical issues remain stalled awaiting maintainer review or product decisions, and a notable cluster of bugs carries the `clawsweeper-recovery-stuck` label.

---

## 2. Releases

**No new releases in the last 24 hours.** No changelog, breaking-change, or migration notes to report.

---

## 3. Project Progress

167 PRs were merged/closed in the last 24 hours. The highest-visible merged/closed PRs include:

- **[PR #116489](https://github.com/openclaw/openclaw/pull/116489) — feat(security): require acknowledgement for install policy warnings** (closed). Adds a `warn` return to external `security.installPolicy` commands, requiring explicit exact-name acknowledgement for suspicious plugin/skill installs. Significant security-boundary improvement.
- **[PR #125879](https://github.com/openclaw/openclaw/pull/125879) — feat(cli): prepare session-host onboarding** (closed). Extends `openclaw connect --service` with an explicit consent path for full worker-session hosting, and adds fresh-machine bootstrap (Node/npm installation).
- **[PR #126061](https://github.com/openclaw/openclaw/pull/126061) — fix(ui): keep Plugins hub navigation stable** (closed). Stabilizes tab strip, alignment, scroll ownership, and control heights across Installed/Discover/Skills/Workshop routes.
- **[PR #126060](https://github.com/openclaw/openclaw/pull/126060) — fix(skills): restore oxfmt formatting in the release validation skill** (closed). Unblocks red `check-docs` CI on every open PR.
- **[Issue #103231](https://github.com/openclaw/openclaw/issues/103231) — `claude-cli` `ownsNativeCompaction` assumption is false** (closed). The 🦞 diamond-lobster bug where `claude -p` sessions never compacted (growing past 200% context) is now resolved.

**Notable open fixes awaiting merge** (strong progress signals):

- **[PR #126059](https://github.com/openclaw/openclaw/pull/126059) — fix(doctor): recover recreated legacy workspace state** — directly closes P1 blocker [Issue #111498](https://github.com/openclaw/openclaw/issues/111498) (main agent blocked after auth recovery).
- **[PR #126069](https://github.com/openclaw/openclaw/pull/126069) — fix(gateway): avoid Tailscale crash loops after upgrades** — closes #125390; cleans up stale persistent HTTPS root routes at startup.
- **[PR #125904](https://github.com/openclaw/openclaw/pull/125904) — fix(sessions): preserve committed results across reconnects** — closes #125903; prevents duplicate-retry/phantom-failure when the gateway already committed a session operation.
- **[PR #125992](https://github.com/openclaw/openclaw/pull/125992) — fix(install): avoid success after incomplete lifecycle changes** — closes #125925; detects partially completed npm lifecycle steps during install/update/uninstall.
- **[PR #125362](https://github.com/openclaw/openclaw/pull/125362) — fix(matrix): recover providers after disconnected sync stop** — addresses the SDK `SyncApi.stop()` fence where providers become permanently unrecoverable.

---

## 4. Community Hot Topics

The most-discussed issues reflect **deep operator concern about reliability, silent failures, and migration trust**:

- **[Issue #80319](https://github.com/openclaw/openclaw/issues/80319) — QA tool-defaults suite conflates Codex-native tools with OpenClaw dynamic tool parity** (17 comments, 🦪). A healthy architectural debate: the report itself corrects an earlier overclaim and clarifies that the real problem is in the QA harness/mock-provider layer rather than broad Codex runtime tool dropout.
- **[Issue #112423](https://github.com/openclaw/openclaw/issues/112423) — Large SQLite transcript cleanup blocks the gateway event loop** (15 comments, P1, 🦞). Archiving large transcripts does full materialization/compression/readback on the gateway thread — operators are hitting event-loop stalls and dropped connections.
- **[Issue #62505](https://github.com/openclaw/openclaw/issues/62505) — "Coding Agent never completes anything"** (15 comments, P1 regression, 🦞). A once-productive coding agent now emits only vague status updates and apologies — the single most emotionally charged thread this cycle, with `clawsweeper-recovery-stuck` and `needs-maintainer-review` labels.
- **[Issue #38327](https://github.com/openclaw/openclaw/issues/38327) — "Cannot convert undefined or null to object" with google-vertex/gemini-3.1-pro-preview** (14 comments, P1, 🐚, 3 👍). Regression since 2026.3.2 affecting embedded agents on Vertex; awaiting live repro.
- **[Issue #79902](https://github.com/openclaw/openclaw/issues/79902) — Companion-friendly SQLite transcript/session seams** (14 comments, 2 👍). Advanced consumers want canonical runtime state without scraping opaque blobs — a roadmap-visible architectural request.
- **[Issue #84516](https://github.com/openclaw/openclaw/issues/84516) — Codex app-server replies silently truncated at ~1000–1100 chars** (13 comments, P1). `stop=null, aborted=false` but mid-sentence truncation — silent failures erode trust.
- A 12-comment cluster: [subagent completion isolation #96975](https://github.com/openclaw/openclaw/issues/96975), [write-tool append mode / cron data loss #40001](https://github.com/openclaw/openclaw/issues/40001), and [workspace-state migration blocking the main agent #111498](https://github.com/openclaw/openclaw/issues/111498).

**Underlying need:** operators are asking for *observability, replayability, and no-silent-loss* guarantees — full state access (SQLite seams), honest completion semantics (subagent isolation), and explicit append semantics for concurrent writers.

---

## 5. Bugs & Stability

Bug volume remains high. Ranked by severity (P1 + 🦞 diamond lobster + data-loss/crash/message-loss impact):

### Critical / data-loss or crash-loop (P1, diamond lobster)

| Issue | Impact | Fix status |
|---|---|---|
| [#62505](https://github.com/openclaw/openclaw/issues/62505) Coding Agent never completes (regression since ≤2026.4.2) | Total agent non-function | No fix PR; `needs-maintainer-review`, `no-new-fix-pr` |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) `write` tool lacks append mode — cron sessions overwrite shared files | **Silent data loss** | No fix PR; `needs-product-decision` |
| [#94939](https://github.com/openclaw/openclaw/issues/94939) 6.x migration leaves channel conversation-store SQLite at 0 bytes | **Data loss + broken MS Teams proactive sends** | Linked PR open; `needs-maintainer-review` |
| [#112423](https://github.com/openclaw/openclaw/issues/112423) SQLite transcript cleanup blocks gateway event loop | Event-loop stall | `queueable-fix`, `source-repro` |
| [#83959](https://github.com/openclaw/openclaw/issues/83959) Codex app-server startup retries exhaust before replacement ready | Crash-loop / startup failure | Linked PR open |
| [#91144](https://github.com/openclaw/openclaw/issues/91144) Windows CLI Scheduled Task gateway doesn't stay running | Service unavailable on Windows | Linked PR open |
| [#90098](https://github.com/openclaw/openclaw/issues/90098) Large attachments overflow stack (Control UI/gateway) | Crash on large PDF/file upload | Linked PR open |
| [#86612](https://github.com/openclaw/openclaw/issues/86612) Docker gateway restart loop with `OPENCLAW_SANDBOX=1` on Windows | Crash-loop | `source-repro` |
| [#91941](https://github.com/openclaw/openclaw/issues/91941) Feishu streaming full-content updates cause severe latency | UX regression on long replies | Linked PR open |

### High-severity regressions & message-loss (P1/P2)

- **[#125679](https://github.com/openclaw/openclaw/issues/125679) — Matrix channel never completes initial sync (NEW, bisected to #125302).** Infinite classic-sync restart loop on fresh accounts/rooms; P1, 🐚 platinum hermit, `needs-live-repro`. A [fix PR #125362](https://github.com/openclaw/openclaw/pull/125362) is open.
- **[#124788](https://github.com/openclaw/openclaw/issues/124788) — beta.2 gateway blocks ~100s every ~10.9 min** (NEW). Anchored timer doing string building + fs scan; persists with memory plugins disabled; kills WebSockets/HTTP `/ready`/cron scheduler. P1.
- **[#84516](https://github.com/openclaw/openclaw/issues/84516)** — Codex replies silently truncated at ~1K chars; P1, no fix PR.
- **[#111498](https://github.com/openclaw/openclaw/issues/111498)** — Main agent blocked by legacy workspace-state migration; **fix PR #126059 open**.
- **[#38327](https://github.com/openclaw/openclaw/issues/38327)** — Vertex/gemini-3.1-pro-preview "undefined or null" crash; P1, needs live repro.
- **[#88657](https://github.com/openclaw/openclaw/issues/88657)** — DeepSeek V4 Flash incomplete turns (`payloads=0, tools=2`) in 2026.5.27/28; P2, message-loss.
- **[#92186](https://github.com/openclaw/openclaw/issues/92186)** — Foreground reply fence drops completed replies to earlier concurrent WhatsApp group messages; P1, `not-repro-on-main`.
- **[#102534](https://github.com/openclaw/openclaw/issues/102534)** — Cron scheduler timer permanently stops firing after heavy timeouts; survives restarts; P1.
- **[#81484](https://github.com/openclaw/openclaw/issues/81484)** — Discord guild reply regression: malformed payloads + outbound loops (DMs fine); P1.
- **[#90378](https://github.com/openclaw/openclaw/issues/90378)** — Cron store silently migrated to SQLite with changed `delivery.mode` default; link PR exists; P2 diamond lobster.

### Stability observations
- Six issues carry `clawsweeper-recovery-stuck`, meaning automated claw-sweeper fix attempts have repeatedly stalled — a signal that root-cause complexity is outrunning the bot loop for session-state bugs.
- `not-repro-on-main` on #90361 and #92186 suggests some memory/search and delivery races may already be fixed on `main` but are unverified.

---

## 6. Feature Requests & Roadmap Signals

### Strongest roadmap signals (by votes/comments and PR alignment)

- **[#10687 — Fully dynamic model discovery (OpenRouter first)](https://github.com/openclaw/openclaw/issues/10687)** (3 👍, open since Feb). Static generated catalogs are the pain; setup flows already write provider model entries, and **[PR #126068](https://github.com/openclaw/openclaw/pull/126068)** (seed configured provider models from catalog metadata) is a near-term step in this direction.
- **[#79902 — Companion-friendly SQLite transcript/session seams](https://github.com/openclaw/openclaw/issues/79902)** (2 👍, 14 comments). Tied to the database-first runtime; likely to shape public state APIs.
- **[#60572 — Multi-Slot Memory Architecture](https://github.com/openclaw/openclaw/issues/60572)** (3 👍) and **[#95724 — index memory by source directory](https://github.com/openclaw/openclaw/issues/95724)**. Duplicate per-agent vector indexes for shared workspaces is a practical pain; memory layering is the bigger ask.
- **[#96975 — Isolate subagent completion from parent context](https://github.com/openclaw/openclaw/issues/96975)**. Aligns with new **[PR #126062](https://github.com/openclaw/openclaw/pull/126062)** (bind subagent completion dispatch to gateway instance) and **[PR #126057](https://github.com/openclaw/openclaw/pull/126057)** (link PRs to public work sessions).
- **[#6757 — Agent-triggered context compaction (self-compact tool)](https://github.com/openclaw/openclaw/issues/6757)** (2 👍). Agents want autonomy over their own context.
- **Voice/STT-TTS**: [#45508 self-hosted TTS/STT in webchat](https://github.com/openclaw/openclaw/issues/45508) (2 👍) and [#66252 per-agent TTS/STT overrides](https://github.com/openclaw/openclaw/issues/66252) both remain in `needs-product-decision`.
- **UI/UX**: [#75947 UX-scored UI quality update](https://github.com/openclaw/openclaw/issues/75947) (2 👍) plus PRs for collapsible Online roster ([#126032](https://github.com/openclaw/openclaw/pull/126032), [#125963](https://github.com/openclaw/openclaw/pull/125963)), clipped-title marquee behavior ([#125067](https://github.com/openclaw/openclaw/pull/125067)), opt-in domain favicons ([#121906](https://github.com/openclaw/openclaw/pull/121906)), and staged slash-command arguments ([#123356](https://github.com/openclaw/openclaw/pull/123356)).
- **Operational/audit**: [#126027 audit explanations for plugin/remote actions](https://github.com/openclaw/openclaw/pull/126027) and [#85461 image-generation usage metadata](https://github.com/openclaw/openclaw/issues/85461) point to an enterprise/accounting audience.

### Prediction for next releases
The **2026.8.x line** will likely absorb: doctor recovery for legacy workspace state (#126059), install-lifecycle failure detection (#125992), session-result preservation across reconnects (#125904), Tailscale crash-loop cleanup (#126069), Matrix sync recovery (#125362), and the UI sidebar/plugins-hub polish batch. **Dynamic model discovery, multi-slot memory, and SQLite session seams** are the most probable near-term architectural features, given repeated maintainer engagement.

---

## 7. User Feedback Summary

**Top pain points (recurring themes):**

- **Regression fatigue.** At least 7 issues are explicitly tagged `regression` ("worked before, now fails"), spanning agent behavior (#62505 since 2026.4.2), model providers (#38327 since 2026.3.2), Matrix sync (#125679), Discord guilds (#81484), persona greeting on `/new`/`/reset` (#77733), and memory search (#90361).
- **Silent failures are the most damaging.** Truncation with `stop=null` (#84516), replies computed but never delivered to WhatsApp (#92186), cron jobs silently doing nothing (#91892), and SQLite migrations that silently change behavior or produce 0-byte stores (#90378, #94939) all erode operator confidence.
- **Concurrency/data-loss anxiety.** The `write`tool overwrite issue (#40001) and the multi-agent timeout storm (#43374) show users running many isolated sessions who need safe shared-file semantics and a non-blocking event loop (#112423, #124788).
- **Performance-sensitive users are hitting real costs.** Active-memory injection collapsing prompt cache hit rate from 99.9% → 22% (#91223) is a concrete dollar-and-latency complaint; embedded-run auth stage blocking 10–15s synchronously (#75782) is another.
- **UX friction persists.** Transient tool-error warnings sent to channels (#39406), dense AI-generated-feeling config UI (#75947), and the unfixable doctor NVM warning (#60612) are recurring minor grievances.
- **Positive signals:** Community members are building on OpenClaw (Android chat-first fork #46058, PowerShell smoke coverage #44291, K8s docs cleanup #91455) — evidence of an engaged, technically sophisticated contributor base.

---

## 8. Backlog Watch

Items needing maintainer attention, ranked by staleness × severity:

- **[#62505 — Coding Agent never completes anything](https://github.com/openclaw/openclaw/issues/62505)** — open since **2026-04-07**, P1 regression, 🦞 diamond lobster. The most severe user-facing outage in the backlog, stalled with `needs-maintainer-review` and `clawsweeper-recovery-stuck`. **Needs an owner.**
- **[#38327 — Vertex/gemini "Cannot convert undefined or null to object"](https://github.com/openclaw/openclaw/issues/38327)** — open since **2026-03-06**, P1, 3 👍, `needs-live-repro`.
- **[#40001 — Write tool lacks append mode (cron data loss)](https://github.com/openclaw/openclaw/issues/40001)** — open since **2026-03-08**, P1, diamond lobster, silent data loss, blocked on `needs-product-decision`.
- **[#10687 — Fully dynamic model discovery](https://github.com/openclaw/openclaw/issues/10687)** — open since **2026-02-06**, oldest active feature, 3 👍, `needs-product-decision`.
- **[#6757 — Agent-triggered context compaction](https://github.com/openclaw/openclaw/issues/6757)** — open since **2026-02-02**, 2 👍, `needs-product-decision`.
- **[#84516 — Codex reply truncation](https://github.com/openclaw/openclaw/issues/84516)** — open since **2026-05-20**, P1, silent message loss, `needs-maintainer-review` with no fix PR.
- **[#62328 — node:sqlite missing FTS5 (memory search fallback broken)](https://github.com/openclaw/openclaw/issues/62328)** — open since **2026-04-07**, P2 but affects all Node v23.11 users.
- **[#60612 — Doctor warns about NVM node but cannot be fixed](https://github.com/openclaw/openclaw/issues/60612)** — open since **2026-04-04**, P2; benign-seeming but represents an unfixable warning anti-pattern.
- **Watch item:** 7+ issues carry `clawsweeper-recovery-stuck`, indicating the automated fix bot is repeatedly failing on session-state bugs — a process signal that these need human maintainers to re-scope the root cause rather than more bot attempts.

---

*Digest generated from public OpenClaw GitHub data (issues/PRs updated 2026-08-18; 500 issues + 500 PRs sampled, top items by engagement shown).*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — AI Agent / Personal Assistant Open-Source Ecosystem

**Date:** 2026-08-19 | **Basis:** 24-hour community digest data from 12 projects

---

## 1. Ecosystem Overview

The personal AI assistant / agent open-source landscape is in a **high-velocity consolidation phase**, with the "Claw family" (OpenClaw, NanoClaw, PicoClaw, ZeroClaw, CoPaw) and adjacent runtimes (Hermes Agent, IronClaw, LobsterAI) competing on channel breadth, desktop UX, and backend reliability rather than raw model capability. The dominant engineering themes across projects are **session-state integrity, silent-failure elimination, MCP transport robustness, and async database refactors** — indicating a market shift from feature velocity to operational trust. Release cadence is bifurcated: core infrastructure projects (OpenClaw, CoPaw, ZeroClaw) are shipping no new releases while absorbing high regression pressure, while Desktop/runtime projects (Hermes, IronClaw, LobsterAI, Moltis) are iterating rapidly on patch and RC releases. Two projects (NullClaw, ZeptoClaw) showed zero activity, signaling ecosystem consolidation around the stronger forks.

---

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Release Status (24h) | Health Score¹ |
|---|---|---|---|---|
| OpenClaw | 500 | 500 | No release | 6.5 / 10 |
| ZeroClaw | 50 | 50 | No release | 7.0 / 10 |
| CoPaw | 46 | 50 | No release | 6.5 / 10 |
| Hermes Agent | 50 | 50 | **v0.20.4 patch shipped** | 7.5 / 10 |
| IronClaw | 21 | 38 | **v1.3.0-rc.2 shipped** (crash-loop fix) | 8.0 / 10 |
| NanoClaw | 3 | 41 | No release (breaking DB PRs staged) | 7.0 / 10 |
| LobsterAI | 9 | 20 | **2026.8.18 shipped** (dsh engine) | 6.5 / 10 |
| NanoBot | 9 | 22 | No release | 7.0 / 10 |
| Moltis | 2 | 6 | **20260818.06 shipped** | 8.5 / 10 |
| PicoClaw | 6 | 4 | No release | 6.5 / 10 |
| NullClaw | 0 | 0 | Inactive | 1.0 / 10 |
| ZeptoClaw | 0 | 0 | Inactive | 1.0 / 10 |

*¹ Composite score derived from: release cadence, fix-merge velocity, P1-backlog burden, stale-issue ratio, and maintainer responsiveness observed in the 24h digest.*

---

## 3. OpenClaw's Position

**Advantages vs peers:**
- **Undisputed scale leader:** 500 issues + 500 PRs updated in 24h — 10× the nearest competitor (CoPaw/ZeroClaw at ~50 each). This reflects the largest contributor base, broadest channel adapter coverage, and de facto reference-implementation status.
- **Diamond-lobster severity taxonomy** and `clawsweeper` automation show a mature triage/QA infrastructure no other project matches.
- **Security-boundary leadership:** install-policy acknowledgement (#116489), audit explanations for plugin actions, and the doctor-recovery workstream (#126059) are ahead of peer efforts.

**Technical approach differences:**
- Gateway-centric monorepo with **session-host onboarding** (PR #125879) and SQLite transcript seams (#79902) — an architecture aimed at operator/enterprise control, vs. Hermes' Electron desktop-first model or IronClaw's Rust/libSQL ecosystem.
- 167 PRs merged in 24h proves **merge velocity**, but the flip side is regression pressure: 7+ tagged `clawsweeper-recovery-stuck` and stalled P1s (#62505, #40001) indicate the bot-driven fix loop is outpacing human root-cause analysis.

**Community size comparison:**
- OpenClaw's discussion volume (17-comment threads, 15-comment P1 threads) runs 2–3× deeper than any peer. However, **community confidence is fragile**: regression fatigue ("worked before, now fails" appears on 7+ issues) and silent data-loss reports (#40001, #94939) are the most emotionally charged threads in the ecosystem.

**Net assessment:** OpenClaw remains the ecosystem's center of gravity and the benchmark for feature breadth, but its current risk profile — heavy P1 regression load with **zero releases in 24h** — creates an opening for faster-shipping peers (IronClaw, Moltis, Hermes) to attract stability-sensitive users.

---

## 4. Shared Technical Focus Areas

Requirements emerging independently across 3+ projects:

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **Async / non-blocking database operations** | OpenClaw (#112423 transcript cleanup blocks event loop), NanoClaw (7-PR async DB refactor, `[BREAKING]`), IronClaw (#7714 libSQL write-lane starvation), LobsterAI (SQLite FK fix #1597), Moltis (#1187 config-reset bug) | SQLite/transcript operations must never stall the gateway event loop; portable backends (non-SQLite) are becoming a requirement |
| **MCP transport & config fidelity** | CoPaw (#6470 hardcoded `sse_client`, #5900 no reconnect), Hermes (#89412 OAuth never triggers), NanoBot (MCP schema byte budget, PR #5388), Moltis (OpenAI Responses routing #1198) | Streamable HTTP support, credential rotation, retry/reconnect semantics, and config-file honoring are table stakes |
| **Session-state integrity & no-silent-loss** | OpenClaw (#125904 reconnect preservation, #111498 migration blocker), Hermes (#88955 phantom messages, #89206 blank chats), CoPaw (#7011 cross-session cancellation), ZeroClaw (#8563 SOPs unavailable, #8410 no-reply semantics), NanoClaw (#3338 WebSocket silent waits) | Users demand replayability, honest completion semantics, and zero silent truncation/data loss |
| **Windows / cross-platform parity** | ZeroClaw (#7462 74 test failures), NanoBot (#5417/#5418 PID handoff), Hermes (#73403 ACP deadlock), OpenClaw (#91144 Windows Scheduled Task), LobsterAI (macOS Intel regressions #1587/#1589) | Linux-only CI is systematically missing platform-breaking bugs; Windows is the highest-friction OS across the ecosystem |
| **Shell / subprocess security boundaries** | NanoBot (#4797 no resource limits), ZeroClaw (#7155 allow/ask/deny shell policy), OpenClaw (install-policy warnings), Hermes (#54354 host-execution before image pull) | LLM-triggered shell commands need OS-level isolation, explicit confirmation tiers, and audit trails |
| **Memory / recall architecture** | IronClaw (#7185 memory not recalled, Mnesis spike #7731), OpenClaw (#60572 multi-slot memory, #95724 source-directory indexing), NanoBot (lossless consolidation PR #5379, token-based triggering #5403) | Cross-session persistent memory is universally requested; nobody has a dependable implementation yet |
| **Installer / upgrade trust** | Hermes (#87093 Debian install broken), IronClaw (rc.1 crash-loop), OpenClaw (#125992 install lifecycle detection), NanoClaw (#3194 rollback gaps), LobsterAI (#1587 startup crash) | One-command installs and recoverable upgrades are a prerequisite for mainstream adoption |

---

## 5. Differentiation Analysis

| Project | Core Identity | Target Users | Architectural Signature |
|---|---|---|---|
| **OpenClaw** | Largest multi-channel gateway | Operators, power users, enterprises | Channel-agnostic monorepo; SQLite transcripts; session-host onboarding |
| **Hermes Agent** | Desktop-first AI workspace | Individual professionals, cloud-profile users | Electron + remote Bot Mode + TUI; ~74 PR patch rollups |
| **IronClaw** | Cloud/enterprise agent platform (NEAR AI) | Teams, NEAR ecosystem | Rust core, libSQL, resource governor, v1.4.0 epics (durable memory, design-system governance, Extensions vNext) |
| **ZeroClaw** | Security-hardened Claw fork | Rust/security-conscious operators | RFC-driven governance; SSRF hardening; goal-mode; `zerorelay` NAT traversal |
| **CoPaw** | High-throughput Claw fork | Chinese-market + global power users | Fast feature merges; sandbox/security work; Volcengine/MiMo provider support |
| **NanoClaw** | Lightweight Claw fork | Team channel users (Slack/Webex) | Portability-focused DB refactor; Slack approval flows; Webex polling adapter |
| **LobsterAI** | OpenClaw desktop client | Chinese-speaking desktop users | Electron UI; DeepSeek Harness (dsh) engine option; strong i18n demands |
| **NanoBot** | Lightweight Python gateway | TUI/CLI tinkerers, self-hosters | Native TUI first; gateway orchestration; classic-agent compatibility |
| **Moltis** | Sandbox-first connector runtime | Privacy-conscious integrators | Podman escape hatches; read-only mounts; Files library; Tesla/privacy-safe connectors |
| **PicoClaw** | Minimalist lightweight agent | IRC/Line/telegram hobbyists | Anthropic-native protocol; planned WebUI; small footprint |
| **NullClaw / ZeptoClaw** | Inactive forks | — | — |

---

## 6. Community Momentum & Maturity

**Tier 1 — Very high velocity, regression-heavy (consolidating under load):**
- **OpenClaw, ZeroClaw, CoPaw.** All three process 50+ issues and 50+ PRs daily but ship no releases. OpenClaw's 500/500 volume is unique; ZeroClaw and CoPaw are actively absorbing community contributions while carrying security and MCP P1s.

**Tier 2 — High velocity, shipping steadily (stabilizing):**
- **Hermes Agent, IronClaw, NanoClaw, LobsterAI.** Hermes shipped a 74-PR patch rollup; IronClaw shipped two RCs in two days with a same-day crash-loop fix; LobsterAI cleared a 4-month PR backlog in one day; NanoClaw is mid-refactor with breaking changes staged.

**Tier 3 — Moderate, healthy maintenance (mature/stable):**
- **Moltis, NanoBot, PicoClaw.** Moltis is the healthiest per-ratio project: all reported bugs closed, release shipped, one open PR in normal review range. NanoBot shows tight issue↔PR coupling (every open bug has a fix PR). PicoClaw is stable but lower-velocity with a high-value WebUI roadmap item.

**Tier 4 — Dormant:**
- **NullClaw, ZeptoClaw.** No activity; safe to treat as unmaintained.

**Maturity signals:** Moltis and IronClaw demonstrate the fastest bug-to-fix cycles (9 days and 1 day respectively). OpenClaw, despite its scale, shows the most concerning pattern: **automated fix bots repeatedly stalling (`clawsweeper-recovery-stuck` on 7+ issues) and critical bugs open for 4+ months** (#62505 since Apr 7, #40001 since Mar 8).

---

## 7. Trend Signals

**For AI agent developers, the following industry trends are clear from community feedback across all projects:**

1. **Silent failure is the #1 trust killer.** Truncated replies with `stop=null` (OpenClaw #84516), 10-minute invisible WebSocket stalls (NanoClaw #3338), `/update-skills` no-ops (NanoClaw #2868), and silent config resets (Moltis #1187) all corrode user confidence faster than any missing feature. **Build observability and honest completion semantics into the core, not as an afterthought.**

2. **Reliability now outranks features in user priorities.** The most emotionally charged threads are regressions ("worked before, now fails"), not feature requests. The ecosystem's winners in the next quarter will be projects that eliminate data-loss and event-loop-blocking paths.

3. **Synchronous operations on shared infrastructure are unacceptable.** SQLite cleanup on the gateway thread, single-writer libSQL connections, and blocked event loops appear across OpenClaw, IronClaw, and NanoClaw. **Async-first, non-blocking database seams are becoming a hard architectural requirement.**

4. **MCP is converging but not mature.** Transport config ignored, no auto-reconnect, OAuth never triggering, hardcoded SSE — every major project has MCP pain. Expect MCP client robustness (retry, reconnection, credential rotation, config fidelity) to be a major differentiation point in the coming months.

5. **Security hardening is moving from optional to default.** Shell confirmation policies (ZeroClaw #7155), subprocess resource limits (NanoBot #4797), SSRF gates (ZeroClaw #10070), install-policy acknowledgements (OpenClaw) — security boundaries are becoming user-visible features, not backend concerns.

6. **Memory architecture is the next greenfield.** Every project with persistent-memory ambitions (IronClaw, OpenClaw, NanoBot) is still iterating on basic reliability. No standard approach exists yet. This is the highest-value open problem in the ecosystem for new contributors.

7. **Cross-platform parity is a systemic blind spot.** Windows test failures, macOS Intel regressions, and installer failures recur across projects — all traced back to Linux-only CI. Projects that invest in Windows/macOS CI coverage gain a concrete trust advantage.

8. **Multi-engine extensibility is emerging as a user demand.** LobsterAI users are requesting hermes-agent as an engine option alongside DeepSeek Harness; OpenClaw is adding dynamic model discovery. The "one runtime, many providers/engines" model is becoming the expected default.

---

**Bottom line for decision-makers:** The ecosystem is healthy but at a trust inflection point. OpenClaw leads in breadth and community scale but is exposed on regression handling; IronClaw and Moltis demonstrate the fastest, cleanest fix cycles; Hermes is the most reliable shipper of desktop value; and security/reliability engineering — not model quality — is the competitive battleground of 2026.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-19

## Today's Overview

NanoBot shows active, broad development during this window: 9 issues were updated in the last 24 hours (6 open/active, 3 closed) and 22 pull requests were updated (16 open, 6 closed/merged). No new releases were published. The current work clusters around Windows gateway stability, TUI startup and UX polish, memory consolidation correctness, AgentLoop lifecycle fixes, and provider routing/proxy compatibility. The number of fix-oriented PRs with direct issue links suggests a healthy maintenance cycle, though security and resource-boundary concerns remain visible in the backlog.

## Releases

No new releases were published in this window, so there are no release notes, breaking changes, or migration steps to report.

## Project Progress

Six PRs moved to closed/merged status during the window:

- [PR #5433](https://github.com/HKUDS/nanobot/pull/5433) — `test(exec)`: replaced a fixed 500 ms poll with deterministic output-aware waiting for truncation tests. This addresses a Windows 3.14 test flake.
- [PR #5358](https://github.com/HKUDS/nanobot/pull/5358) — `feat(webui)`: added lightweight cross-session messaging via stable server-owned `@handle`s, plus `list_sessions`, `send_session_message`, and `read_session` support.
- [PR #5432](https://github.com/HKUDS/nanobot/pull/5432) — `fix(tui)`: refresh expired API credentials after HTTP 401, deduplicate concurrent refreshes, and retry each failed API request once.
- [PR #5427](https://github.com/HKUDS/nanobot/pull/5427) — `fix(tui)`: kept the composer visible and focused after clicks elsewhere, while preserving full-screen diff viewer focus behavior.
- [PR #5424](https://github.com/HKUDS/nanobot/pull/5424) — `perf(tui)`: reduced cold-start and exit latency by starting the native TUI before gateway orchestration and deferring classic-agent imports.
- [PR #5418](https://github.com/HKUDS/nanobot/pull/5418) — `fix(gateway)`: allowed Windows launcher PID handoff, fixing the Windows WebUI exit issue reported in [Issue #5417](https://github.com/HKUDS/nanobot/issues/5417).

Several open PRs also advanced important fixes: background-task exception reporting ([PR #5431](https://github.com/HKUDS/nanobot/pull/5431)), task-group cleanup ([PR #5430](https://github.com/HKUDS/nanobot/pull/5430)), legacy `socks://` proxy support ([PR #5426](https://github.com/HKUDS/nanobot/pull/5426)), retry-before-fallback routing ([PR #5422](https://github.com/HKUDS/nanobot/pull/5422)), and Mattermost system-post filtering ([PR #5434](https://github.com/HKUDS/nanobot/pull/5434)).

## Community Hot Topics

- [Issue #5149: no audio ?](https://github.com/HKUDS/nanobot/issues/5149) — 6 comments  
  This is the most active item in the snapshot. Users report NanoBot receives WhatsApp audio messages but fails to send audio back. Logs point to a `neonize_utils_ffmpeg` warning, suggesting a media conversion or attachment pipeline problem. No fix PR is visible yet.

- [Issue #4797: No resource limits on shell subprocesses](https://github.com/HKUDS/nanobot/issues/4797) — 1 comment  
  This security-focused issue has been open since early July and remains an important concern: `ExecTool._spawn()` applies only a timeout, with no `ulimit`, cgroup, CPU, or memory caps. An LLM-triggered fork bomb or `yes > /dev/null &` could exhaust host resources.

Reaction counts on tracked items are all 0 in this window, so comment activity is the main signal. Overall issue/PR discussion volume is low but targeted.

## Bugs & Stability

Ranked by severity:

1. **High — No resource limits on shell subprocesses**  
   [Issue #4797](https://github.com/HKUDS/nanobot/issues/4797) remains open. The `ExecTool` subprocess path has no OS-level resource isolation. No fix PR is visible in the current window.

2. **High — Audio send broken on WhatsApp**  
   [Issue #5149](https://github.com/HKUDS/nanobot/issues/5149) is open with 6 comments. Receiving audio works, but sending audio fails, with an ffmpeg-related warning in the logs. No fix PR is present in the data.

3. **Medium — `socks://` proxy URLs fail for custom OpenAI-compatible providers**  
   [Issue #5425](https://github.com/HKUDS/nanobot/issues/5425) blocks requests before they reach the provider. A fix is already proposed in [PR #5426](https://github.com/HKUDS/nanobot/pull/5426).

4. **Medium — AgentLoop swallows background-task exceptions**  
   [Issue #5429](https://github.com/HKUDS/nanobot/issues/5429) shows `schedule_background()` discards tasks without retrieving results. [PR #5431](https://github.com/HKUDS/nanobot/pull/5431) addresses the issue.

5. **Low/Medium — AgentLoop retains empty active-task groups**  
   [Issue #5428](https://github.com/HKUDS/nanobot/issues/5428) reports a memory/lifecycle leak in long-running sessions. [PR #5430](https://github.com/HKUDS/nanobot/pull/5430) fixes the cleanup.

6. **Resolved — Windows WebUI exits during virtualenv PID handoff**  
   [Issue #5417](https://github.com/HKUDS/nanobot/issues/5417) was closed, with [PR #5418](https://github.com/HKUDS/nanobot/pull/5418) landing as the fix.

## Feature Requests & Roadmap Signals

- **Cross-session messaging** appears ready to ship: [PR #5358](https://github.com/HKUDS/nanobot/pull/5358) adds session handles and a message bus for cross-session text delivery.
- **Memory consolidation is an active direction**: [PR #5379](https://github.com/HKUDS/nanobot/pull/5379) makes consolidation lossless with bounded chunks, and [PR #5403](https://github.com/HKUDS/nanobot/pull/5403) switches consolidation triggering to API-reported prompt tokens. This aligns with repeated user interest in persistent memory.
- **Provider ecosystem expansion** continues with the open metasearch provider PR ([#5234](https://github.com/HKUDS/nanobot/pull/5234)) and a native DashScope image generation client ([#5419](https://github.com/HKUDS/nanobot/pull/5419)).
- **Cost/token control** is an emerging theme: [PR #5388](https://github.com/HKUDS/nanobot/pull/5388) adds an opt-in byte budget for model-visible MCP schemas, and [Issue #5409](https://github.com/HKUDS/nanobot/issues/5409), while closed, reflects user anxiety about runaway LLM spend.
- **Windows reliability** is clearly a priority area, with [PR #5418](https://github.com/HKUDS/nanobot/pull/5418) and [PR #5415](https://github.com/HKUDS/nanobot/pull/5415) both targeting Windows venv/gateway process handling.

The likely next-version themes are TUI responsiveness, memory correctness, Windows process lifecycle stability, and provider-routing hardening.

## User Feedback Summary

- WhatsApp users are blocked by the audio-send failure: receiving audio works, but no audio output is delivered. This is a visible functional gap with no confirmed workaround in the snapshot.
- Windows developers using `nanobot webui --dev` encountered an early-exit bug caused by gateway PID rejection; [Issue #5417](https://github.com/HKUDS/nanobot/issues/5417) was quickly closed alongside a fix PR.
- Self-hosters using custom OpenAI-compatible providers with `socks://` proxy variables cannot reach the provider at all. A targeted fix is waiting in [PR #5426](https://github.com/HKUDS/nanobot/pull/5426).
- Agent-loop users reported silent background-task failures and slow memory growth in long-running sessions; maintainers responded with two focused fix PRs ([#5430](https://github.com/HKUDS/nanobot/pull/5430), [#5431](https://github.com/HKUDS/nanobot/pull/5431)).
- Several external proposals, including persistent memory and spend-firewall ideas, were closed without adoption, but they highlight real user concerns around token cost and session continuity.

## Backlog Watch

- [Issue #4797](https://github.com/HKUDS/nanobot/issues/4797) — security-critical subprocess resource limits, open since 2026-07-06. Needs maintainer design decision and implementation.
- [Issue #5149](https://github.com/HKUDS/nanobot/issues/5149) — WhatsApp audio send bug, open since 2026-07-28 with 6 comments and no fix PR in the current window.
- [PR #5234](https://github.com/HKUDS/nanobot/pull/5234) — metasearch provider integration, open since 2026-08-03 with `priority: p1` and `conflict` labels. Needs rebase/review.
- [PR #5341](https://github.com/HKUDS/nanobot/pull/5341) — Windows-safe weather skill fix, carrying a `conflict` label and open since 2026-08-11.
- [Issue #5421](https://github.com/HKUDS/nanobot/issues/5421) — an ASK-FIRST design question about whether idle compaction should preserve provider state from concurrent turns. Needs a maintainer response before implementation proceeds.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-19

## 1. Today's Overview

Between 2026-08-18 and 2026-08-19, Hermes Agent saw sustained high activity: **50 issues and 50 PRs were updated**, with **10 issues closed** and **8 PRs merged/closed**. A new patch release, **v2026.8.18 / v0.20.4**, was tagged as a stable rollup of **~74 PRs** merged since v0.20.3. The most active threads concern Debian installer failures, Desktop Bot Mode multi-profile/session issues, macOS Intel renderer CPU burn, and a TUI arrow-key regression. Project velocity is strong, but user-facing stability and onboarding friction remain the main pain points.

## 2. Releases

### v2026.8.18 — Hermes Agent v0.20.4
- **Release Date:** August 18, 2026
- **Type:** Patch release
- **Content:** Rolls up ~74 PRs merged since v0.20.3 into a stable tagged release for Docker images, hosted deployments, and fresh installs.
- **Notes:** No explicit breaking changes or migration steps were listed in the provided release notes; this is a stabilization/patch rollup.

## 3. Project Progress

The v0.20.4 tag bundles **~74 PRs merged since v0.20.3**.

In the last 24h, **8 PRs were merged/closed**. Visible examples:

- [PR #88965](https://github.com/NousResearch/hermes-agent/pull/88965) — `fix(gateway): stop dropped goal writes on slow DB init and de-flake CI`: fixes false acks and red CI after cold `state.db` init.
- [PR #89538](https://github.com/NousResearch/hermes-agent/pull/89538) — `fix(gateway): /goal, /loop, /heartbeat stop false-acking on cold SessionDB cache`: closed as a salvage/companion to #88965.
- [PR #89520](https://github.com/NousResearch/hermes-agent/pull/89520) — `fix(auxiliary): never hand a probe-mode stub to a real consumer`: closes an auxiliary-client constructor bug.

Notable issue closures in the same window:

- [Issue #69255](https://github.com/NousResearch/hermes-agent/issues/69255) — `provider_model_ids` swallows `TypeError` when plugin `fetch_models` omits `base_url` — closed.
- [Issue #88615](https://github.com/NousResearch/hermes-agent/issues/88615) — CommandCode provider shows 0 models — closed as duplicate.
- [Issue #89206](https://github.com/NousResearch/hermes-agent/issues/89206) — Desktop Bot Mode: non-primary chats remain blank — closed.
- [Issue #88880](https://github.com/NousResearch/hermes-agent/issues/88880) — Desktop v2 remote Bot sessions absent from sidebar — closed.
- [Issue #89495](https://github.com/NousResearch/hermes-agent/issues/89495) — Windows ACP terminal env probe deadlocks — closed as duplicate.
- [Issue #83422](https://github.com/NousResearch/hermes-agent/issues/83422) — Teams `/meet/` short URL fetch failure — closed.

## 4. Community Hot Topics

Most active issues by comment count:

- [Issue #87093](https://github.com/NousResearch/hermes-agent/issues/87093) — **Debian installation broken; `uv.lock` & `npm install` failed** — 13 comments, P1 setup blocker.
- [Issue #88275](https://github.com/NousResearch/hermes-agent/issues/88275) — **Desktop renderer burns 40–70% CPU at idle on macOS Intel** — 8 comments, thermal throttling.
- [Issue #80821](https://github.com/NousResearch/hermes-agent/issues/80821) — **LaTeX/MathJax rendering support in desktop chat UI** — 7 comments, closed.
- [Issue #89206](https://github.com/NousResearch/hermes-agent/issues/89206) — **Desktop Bot Mode: non-primary chats blank/messages unreachable** — 6 comments, 2 👍, closed.
- [Issue #69255](https://github.com/NousResearch/hermes-agent/issues/69255) — **`provider_model_ids` swallows TypeError** — 4 comments, closed.
- [Issue #54354](https://github.com/NousResearch/hermes-agent/issues/54354) — **Docker backend: first tool call before image pull runs on host** — 4 comments, 1 👍.
- [Issue #89131](https://github.com/NousResearch/hermes-agent/issues/89131) — **Bot Mode drops per-profile Cloud alias and starts inert local backend** — 3 comments.

Underlying community needs: reliable one-command Linux installs, better desktop performance on Intel Macs, math rendering in chat, multi-profile/remote Bot Mode session identity, provider plugin compatibility, and stricter Docker sandbox boundaries.

## 5. Bugs & Stability

Ranked roughly by severity:

- **P1 — Debian/installer failure:** [Issue #87093](https://github.com/NousResearch/hermes-agent/issues/87093) — Debian 13.6 install via `curl | bash` fails at `uv.lock` / `npm install`. No direct fix PR visible, but [PR #89533](https://github.com/NousResearch/hermes-agent/pull/89533) addresses a related Ubuntu `libatomic1`/Node 26 installer issue.
- **P2 — Desktop Bot Mode profile/session regressions:**
  - [Issue #89131](https://github.com/NousResearch/hermes-agent/issues/89131) — per-profile Cloud alias lost; inert local backend started.
  - [Issue #88955](https://github.com/NousResearch/hermes-agent/issues/88955) — interrupted group-chat turns persist hidden empty assistant messages, re-triggering sanitizers every turn.
  - [Issue #89206](https://github.com/NousResearch/hermes-agent/issues/89206) — closed; non-primary chats blank/unreachable.
  - [Issue #88880](https://github.com/NousResearch/hermes-agent/issues/88880) — closed; remote Bot sessions missing from sidebar.
- **P2 — TUI regression:** [Issue #88964](https://github.com/NousResearch/hermes-agent/issues/88964) — arrow keys print raw escape sequences (`[1;129D` etc.) since v0.20.3. No fix PR visible yet.
- **P2 — Gateway/messaging reliability:**
  - [Issue #89477](https://github.com/NousResearch/hermes-agent/issues/89477) — Telegram polling fails/crashes with separate bots on named profiles.
  - [Issue #89412](https://github.com/NousResearch/hermes-agent/issues/89412) — MCP OAuth never triggers for servers that do not challenge unauthenticated requests, e.g. Google Gmail MCP.
- **P2 — Auth/credential bugs:**
  - [Issue #89415](https://github.com/NousResearch/hermes-agent/issues/89415) — credential pool caches provider cooldown; mid-cooldown top-up is never re-probed.
  - Related open fix PRs: [PR #79636](https://github.com/NousResearch/hermes-agent/pull/79636) and [PR #79371](https://github.com/NousResearch/hermes-agent/pull/79371).
- **P2 — Windows ACP hang:** [Issue #73403](https://github.com/NousResearch/hermes-agent/issues/73403) — Windows ACP adapter hangs on terminal execution; duplicate #89495 closed.
- **P2 — Docker sandbox boundary:** [Issue #54354](https://github.com/NousResearch/hermes-agent/issues/54354) — first tool call before image pull runs on host.
- **P3 — Desktop performance:** [Issue #88275](https://github.com/NousResearch/hermes-agent/issues/88275) — renderer CPU burn/thermal throttling on macOS Intel.
- **P3 — Setup wizard:** [Issue #89309](https://github.com/NousResearch/hermes-agent/issues/89309) — Full Setup toolset picker silently discards selections.

Other fix PRs in flight:

- [PR #89541](https://github.com/NousResearch/hermes-agent/pull/89541) — adds `api_key_env_vars` for `minimax-oauth`.
- [PR #89532](https://github.com/NousResearch/hermes-agent/pull/89532) — hydrates cold-profile secret sources before agent build.
- [PR #89542](https://github.com/NousResearch/hermes-agent/pull/89542) — Windows maintenance: Electron 41.10.3, npm audit, build fixes.
- [PR #83787](https://github.com/NousResearch/hermes-agent/pull/83787) — blocks messaging-platform file writes to execution-trusting roots.

## 6. Feature Requests & Roadmap Signals

User/community feature signals:

- [Issue #80821](https://github.com/NousResearch/hermes-agent/issues/80821) — LaTeX/MathJax rendering in Desktop chat UI.
- [Issue #82140](https://github.com/NousResearch/hermes-agent/issues/82140) — expose resolved Desktop connection mode (`local`/`remote`) to skills, MCP, and plugins.
- [Issue #84580](https://github.com/NousResearch/hermes-agent/issues/84580) — supported inbound message hook with sender/message IDs, e.g. for WhatsApp CRM ingestion.
- [Issue #89513](https://github.com/NousResearch/hermes-agent/issues/89513) — Desktop Models pane missing cron model-drift config.
- [Issue #88680](https://github.com/NousResearch/hermes-agent/issues/88680) — preserve connection × profile route identity end-to-end in Desktop.

Likely next-version candidates from active PRs:

- [PR #89540](https://github.com/NousResearch/hermes-agent/pull/89540) — group chats gain PDF/file attachments and drag & drop.
- [PR #89522](https://github.com/NousResearch/hermes-agent/pull/89522) — collapsible group activity view in Bot Mode.
- [PR #89478](https://github.com/NousResearch/hermes-agent/pull/89478) — multi-machine connection pool for TUI/Desktop.
- [PR #88886](https://github.com/NousResearch/hermes-agent/pull/88886) — auto-link absolute file paths in Kanban comments.
- [PR #30112](https://github.com/NousResearch/hermes-agent/pull/30112) — Sprites stateful cloud sandbox backend, open since May, likely needs a roadmap decision.

## 7. User Feedback Summary

Real user pain points from the last 24h:

- Installer friction: Debian 13.6 install broken at `uv.lock`/`npm install` ([#87093](https://github.com/NousResearch/hermes-agent/issues/87093)).
- Desktop performance: Electron renderer burns 40–70% CPU on Intel Macs ([#88275](https://github.com/NousResearch/hermes-agent/issues/88275)).
- Bot Mode unreliability across profiles/remote connections ([#89206](https://github.com/NousResearch/hermes-agent/issues/89206), [#89131](https://github.com/NousResearch/hermes-agent/issues/89131), [#88880](https://github.com/NousResearch/hermes-agent/issues/88880)).
- Windows ACP users blocked by terminal deadlocks ([#73403](https://github.com/NousResearch/hermes-agent/issues/73403), [#89495](https://github.com/NousResearch/hermes-agent/issues/89495)).
- TUI arrow-key regression since v0.20.3 impacts CLI-heavy workflows ([#88964](https://github.com/NousResearch/hermes-agent/issues/88964)).

Satisfaction signals: maintainers are closing duplicates quickly, shipping a stable v0.20.4 rollup, and landing active fixes for gateway/session-state issues.

Representative use cases in the data:

- Public WhatsApp reception bot requiring trusted ingress metadata for safe CRM writes ([#84580](https://github.com/NousResearch/hermes-agent/issues/84580)).
- Local vibe coding with Qwen GGUF models ([#88762](https://github.com/NousResearch/hermes-agent/issues/88762)).
- Kanban/remote VPS attachment workflows over SSH ([#85672](https://github.com/NousResearch/hermes-agent/issues/85672)).
- Cron watchdog/script-only jobs that depend on fresh environment credentials ([#59030](https://github.com/NousResearch/hermes-agent/issues/59030)).

## 8. Backlog Watch

Long-running items that still need maintainer attention:

- [Issue #54354](https://github.com/NousResearch/hermes-agent/issues/54354) — Docker backend: first tool call before image pull runs on host (open since Jun 28, P2, security boundary).
- [Issue #59030](https://github.com/NousResearch/hermes-agent/issues/59030) — `no_agent` cron jobs use stale `os.environ` credentials (open since Jul 5, P2).
- [Issue #66118](https://github.com/NousResearch/hermes-agent/issues/66118) — Profile `SOUL.md`/`AGENTS.md` identity ignored with custom Ollama provider (open since Jul 17, P2, needs repro).
- [Issue #73403](https://github.com/NousResearch/hermes-agent/issues/73403) — Windows ACP adapter hangs on terminal tool (open since Jul 28, P2; fix PR #69083 referenced but no merge visible).
- [Issue #77178](https://github.com/NousResearch/hermes-agent/issues/77178) — `process_subreaper` waits forever on `sccache` descendant (open since Aug 3, P2).
- [PR #73871](https://github.com/NousResearch/hermes-agent/pull/73871) — `fix(cron): persist interrupted shutdown output` — open since Jul 29, P2.
- [PR #30112](https://github.com/NousResearch/hermes-agent/pull/30112) — Sprites stateful sandbox backend — open since May 21, feature/roadmap decision needed.
- [PR #79636](https://github.com/NousResearch/hermes-agent/pull/79636) and [PR #79371](https://github.com/NousResearch/hermes-agent/pull/79371) — auth reset/cooldown fixes, both open since Aug 5 and directly relevant to new issue [#89415](https://github.com/NousResearch/hermes-agent/issues/89415).

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-19

## 1. Today's Overview
PicoClaw saw moderate activity in the last 24 hours: 6 issues were updated (5 still open, 1 closed) and 4 PRs were touched (2 open, 2 closed/merged). Notably, a long-running feature PR for native Anthropic Messages API support was closed, and a PR improving prompt-cache token logging also landed. No new releases were published. Project health looks stable, with maintainers actively closing stale items while a high-priority Web UI feature request continues to attract community support.

## 2. Releases
None. No new releases were published in the last 24 hours, so there are no release notes, breaking changes, or migration instructions to report.

## 3. Project Progress
Two PRs were closed/merged in the last 24 hours:

- **[PR #1158 – feat: add anthropic-messages protocol for native Anthropic API format](https://github.com/sipeed/picoclaw/issues/1158)**  
  Closed after a long review period. Adds an `anthropic-messages` protocol prefix so PicoClaw can use Anthropic-native `/v1/messages` API endpoints. This resolves [#269](https://github.com/sipeed/picoclaw/issues/269) and improves compatibility with Anthropic-compatible proxy services.

- **[PR #3317 – feat(providers): log prompt cache tokens in LLM response debug output](https://github.com/sipeed/picoclaw/pull/3317)**  
  Closed/merged. Adds logging of cache-related token usage from providers such as DeepSeek via Cloudflare AI Gateway, making debugging and token accounting more transparent.

Also, issue **[#3292](https://github.com/sipeed/picoclaw/issues/3292)** (high CPU when focus is on the chat input box) was closed as stale.

## 4. Community Hot Topics
The most active discussions are feature/behavior requests rather than pure bugs:

- **[Issue #806 – Add webUI support (Refactoring now)](https://github.com/sipeed/picoclaw/issues/806)** ⭐ 9 comments · 8 👍  
  The most-discussed and most-liked open item. Users want a browser-based interface to lower the barrier for non-technical users. Labeled `enhancement`, `high` priority, and `roadmap`, with maintainers noting refactoring is in progress.

- **[Issue #3287 – Better support long messages in IRC](https://github.com/sipeed/picoclaw/issues/3287)**  
  6 comments. Users need PicoClaw to treat IRCv3 split long messages as one cohesive message instead of separate fragments. This reflects real-world IRC usage where messages over 512 bytes are split by clients.

## 5. Bugs & Stability
Sorted by severity:

- **[Issue #3339 – Antigravity generation returns generic 429 despite valid OAuth scopes](https://github.com/sipeed/picoclaw/issues/3339)**  
  High severity. Authentication and model discovery succeed, but every generation request fails with `RESOURCE_EXHAUSTED`. No quota details are returned, making debugging difficult. New issue, no fix PR yet.

- **[Issue #3301 – `/clear` and session auto-compression don't work in chats routed to non-default agent via dispatch rules](https://github.com/sipeed/picoclaw/issues/3301)**  
  Medium/high severity. Affects Discord/Telegram users with dispatch rules. Session-management commands silently fail for non-default agents. Open and stale; no fix PR linked.

- **[Issue #3328 – `line.settings.webhook_host` / `webhook_port` are never read](https://github.com/sipeed/picoclaw/issues/3328)**  
  Medium severity. Documented config values are inert, with no warning to users. An open fix PR exists: **[#3329](https://github.com/sipeed/picoclaw/pull/3329)**.

- **[Issue #3292 – CPU usage too high when input box focused (closed stale)](https://github.com/sipeed/picoclaw/issues/3292)**  
  Previously reported in web/Firefox; closed as stale. If still reproducible, users may need to reopen with updated repro steps.

## 6. Feature Requests & Roadmap Signals
- **Web UI support ([#806](https://github.com/sipeed/picoclaw/issues/806))** remains the clearest roadmap signal: it is high priority and explicitly labeled `roadmap`, with maintainer comment "Refactoring now". Likely candidates for a future release.
- **Native Anthropic Messages API support ([PR #1158](https://github.com/sipeed/picoclaw/issues/1158))** already landed, signaling continued investment in flexible LLM provider compatibility.
- **Better IRC long-message handling ([#3287](https://github.com/sipeed/picoclaw/issues/3287))** is a user-driven enhancement that may appear in a future version if maintainers adopt IRCv3 message tags or continuation handling.

## 7. User Feedback Summary
Users are broadly supportive of the project direction, especially the planned Web UI. The 8 👍 on #806 show strong demand for easier onboarding. Power users are reporting practical pain points around provider compatibility and configuration behavior: Anthro-pomorphic-native API support was requested and now appears fixed; IRC long-message splitting is a common annoyance; silently ignored config options (Line webhook settings) frustrate users; and the Antigravity 429 issue is blocking an entire provider. The closure of the CPU-usage issue without resolution may be a minor dissatisfaction point, but no reopen has occurred yet.

## 8. Backlog Watch
Items that need maintainer attention:

- **[Issue #806 – WebUI support](https://github.com/sipeed/picoclaw/issues/806)**  
  Open since February, high priority, 8 👍. The community is waiting on progress; the "Refactoring now" hint is positive but no PR is linked yet.

- **[Issue #3287 – Long messages in IRC](https://github.com/sipeed/picoclaw/issues/3287)**  
  Open since July, 6 comments, no maintainer response visible. Needs triage and a design decision.

- **[PR #3329 – fix(line): warn on inert webhook_host / webhook_port](https://github.com/sipeed/picoclaw/pull/3329)**  
  Fixes #3328 but is stale. Should be reviewed and either merged or closed with a plan.

- **[PR #3314 – Fix: agent not able to execute shell command added to customAllowPatterns](https://github.com/sipeed/picoclaw/pull/3314)**  
  Open and stale. Addresses an allow-list bypass issue that affects real agent workflows like `git push`. Needs maintainer review.

- **[Issue #3301 – Dispatch-routed chats break `/clear` and auto-compression](https://github.com/sipeed/picoclaw/issues/3301)**  
  Stale, but affects messaging reliability for Discord/Telegram users. Should be prioritized or explicitly scheduled.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-19

## 1. Today's Overview

NanoClaw saw a high-velocity development day, driven almost entirely by database infrastructure work. 41 pull requests were updated in the last 24 hours, with 18 merged/closed and 23 still open. Issue activity was lower: 3 issues updated, 2 closed and 1 remaining open. No new releases were published. The main theme is a coordinated refactor of the central database toward async operations and portable backend support, with additional Slack/provisioning fixes and a new Webex channel skill in flight.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Project Progress

The bulk of today's merged/closed PRs are from the central database refactor effort, focused on making the SQL backend async-ready, portable, and safe under concurrency.

Closed/merged PRs visible in today's data:

- [nanocoai/nanoclaw#3320](https://github.com/nanocoai/nanoclaw/pull/3320) — `chore(lint): enforce async promise handling`
- [nanocoai/nanoclaw#3321](https://github.com/nanocoai/nanoclaw/pull/3321) — `refactor(db): centralize the central database path`
- [nanocoai/nanoclaw#3323](https://github.com/nanocoai/nanoclaw/pull/3323) — `refactor(db): make central SQL portable`
- [nanocoai/nanoclaw#3324](https://github.com/nanocoai/nanoclaw/pull/3324) — `refactor(db): add async central database seam`
- [nanocoai/nanoclaw#3325](https://github.com/nanocoai/nanoclaw/pull/3325) — `[BREAKING] refactor(db): adopt async central database seam`
- [nanocoai/nanoclaw#3326](https://github.com/nanocoai/nanoclaw/pull/3326) — `fix(db): close async concurrency races`
- [nanocoai/nanoclaw#3327](https://github.com/nanocoai/nanoclaw/pull/3327) — `refactor(db): add backend composition and migration modes`
- [nanocoai/nanoclaw#3329](https://github.com/nanocoai/nanoclaw/pull/3329) — `fix(db): make concurrent queue dequeue lossless`
- [nanocoai/nanoclaw#3330](https://github.com/nanocoai/nanoclaw/pull/3330) — `test(db): run central suites through the driver`

A second wave of DB-related PRs is still open, including [nanocoai/nanoclaw#3332](https://github.com/nanocoai/nanoclaw/pull/3332), [nanocoai/nanoclaw#3333](https://github.com/nanocoai/nanoclaw/pull/3333), [nanocoai/nanoclaw#3334](https://github.com/nanocoai/nanoclaw/pull/3334), [nanocoai/nanoclaw#3335](https://github.com/nanocoai/nanoclaw/pull/3335), and [nanocoai/nanoclaw#3337](https://github.com/nanocoai/nanoclaw/pull/3337). This suggests the database refactor is being landed in stages, with breaking async adoption likely near.

Non-DB progress includes:
- [nanocoai/nanoclaw#3339](https://github.com/nanocoai/nanoclaw/pull/3339) — fail closed when a stored sign-in cannot be verified
- [nanocoai/nanoclaw#3340](https://github.com/nanocoai/nanoclaw/pull/3340) — record delivering instance on `pending_approvals`
- [nanocoai/nanoclaw#3341](https://github.com/nanocoai/nanoclaw/pull/3341) — derive Slack service from credential issuer
- [nanocoai/nanoclaw#3342](https://github.com/nanocoai/nanoclaw/pull/3342) — decline owner-absent Slack channel invites

## 4. Community Hot Topics

The most active item in the last 24 hours is [nanocoai/nanoclaw#3338](https://github.com/nanocoai/nanoclaw/issues/3338), with 2 comments. It reports that a stalled Codex Responses WebSocket can cause a silent 10-minute wait on Telegram requests because Codex CLI's internal 5-minute timeout/retry is not surfaced to NanoClaw. This reflects an underlying need for better connection-layer observability and clearer timeout propagation.

The next most-commented item is [nanocoai/nanoclaw#2868](https://github.com/nanocoai/nanoclaw/issues/2868), now closed. It identifies that `/update-skills` is a silent no-op for already-installed channels, failing to refresh adapter code or pinned dependencies. This is a discoverability and trust issue: users believe an update ran when it did not.

PRs in today's list show no comment counts in the supplied data, so issue discussion remains the main signal for community/developer attention.

## 5. Bugs & Stability

Ranked by likely user impact:

- **High — [nanocoai/nanoclaw#3338](https://github.com/nanocoai/nanoclaw/issues/3338)**  
  Codex WebSocket stalls can leave a Telegram request silent for up to 10 minutes because `codex app-server` hides its internal 5-minute idle timeout/retry. This is currently the only open issue and has no visible fix PR yet.

- **Medium — [nanocoai/nanoclaw#3194](https://github.com/nanocoai/nanoclaw/issues/3194)**  
  `/update-nanoclaw` can report success without a recoverable cutover point. The rollback protects Git but not the SQLite database, gitignored configuration, or external components. This issue was closed in the last 24 hours, though no dedicated fix PR appears in the current list.

- **Medium — [nanocoai/nanoclaw#2868](https://github.com/nanocoai/nanoclaw/issues/2868)**  
  `/update-skills` silently skips code/dependency refresh for installed channels. This issue was also closed today. A merged fix could not be confirmed from the provided PR list.

- **Open fix PRs worth monitoring:**  
  [nanocoai/nanoclaw#3339](https://github.com/nanocoai/nanoclaw/pull/3339) fixes a stored-sign-in verification gap that could treat unverifiable credentials as valid. [nanocoai/nanoclaw#3326](https://github.com/nanocoai/nanoclaw/pull/3326) and [nanocoai/nanoclaw#3329](https://github.com/nanocoai/nanoclaw/pull/3329) address database concurrency races, which may affect queue reliability.

## 6. Feature Requests & Roadmap Signals

Two user-facing feature skills are open:

- [nanocoai/nanoclaw#3343](https://github.com/nanocoai/nanoclaw/pull/3343) — adds a Cisco Webex `webex-poll` channel adapter using REST polling instead of inbound webhooks. This targets enterprise environments where inbound webhooks are impractical.
- [nanocoai/nanoclaw#3322](https://github.com/nanocoai/nanoclaw/pull/3322) — adds `/add-youdotcom-tool` for You.com MCP tools, expanding the utility skill ecosystem.

The large central-database refactor is a strong roadmap signal: portable SQL, async seams, and backend composition point toward support for non-SQLite/remote backends. The presence of `[BREAKING]` PRs suggests a version bump may be required when the async database change lands.

Slack behavior is also being refined: [nanocoai/nanoclaw#3342](https://github.com/nanocoai/nanoclaw/pull/3342) changes owner-absent Slack channel invites from approval-card escalation to automatic decline, reducing unwanted bot presence.

## 7. User Feedback Summary

The main user-reported pain points are about update and connection reliability:

- Silent stalls erode trust: [nanocoai/nanoclaw#3338](https://github.com/nanocoai/nanoclaw/issues/3338) describes a 10-minute invisible wait caused by WebSocket timeout handling not being surfaced.
- Update commands can be misleading: [nanocoai/nanoclaw#2868](https://github.com/nanocoai/nanoclaw/issues/2868) shows `/update-skills` doing nothing for installed channels while appearing successful.
- Update rollback safety is incomplete: [nanocoai/nanoclaw#3194](https://github.com/nanocoai/nanoclaw/issues/3194) highlights that `/update-nanoclaw` can leave the system in an unrecoverable state despite reporting success.

Overall sentiment appears cautious: users depend on NanoClaw's update and channel-maintenance flows, and silent no-ops are a significant source of dissatisfaction. The flurry of fix PRs from maintainers suggests these areas are being taken seriously.

## 8. Backlog Watch

The only currently open issue is [nanocoai/nanoclaw#3338](https://github.com/nanocoai/nanoclaw/issues/3338), created on 2026-08-18. It is fresh, but because it is user-visible and involves long silent waits, it deserves prompt maintainer attention.

[nanocoai/nanoclaw#2868](https://github.com/nanocoai/nanoclaw/issues/2868) was outstanding since 2026-06-26 before closing today — roughly 53 days. That is worth verifying to ensure the underlying `/update-skills` behavior is actually fixed and not just closed as duplicate/wontfix.

No long-stale PRs are visible in today's data; all listed PRs were created or updated on 2026-08-18. The open database refactor PRs, especially the breaking async adoption [nanocoai/nanoclaw#3334](https://github.com/nanocoai/nanoclaw/pull/3334), are the most likely candidates for future review bottlenecks.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-19

## 1. Today's Overview

IronClaw is in a heavy stabilization and release-candidate phase: 21 issues and 38 PRs were updated in the last 24 hours, with 14 PRs merged/closed and 6 issues closed. The project shipped two v1.3.0 release candidates in two days, with `rc.2` specifically fixing an upgrade-blocking crash-loop found in `rc.1`. Activity is split between hardening v1.3.0 (upgrade compatibility, libSQL resource-governor stability) and advancing v1.4.0 roadmap epics (automation reliability, durable memory, design-system governance, Extensions vNext). Overall project health looks strong: release cadence is high, bug fixes are landing quickly, and a clear v1.4.0 planning track is visible. The main risk area remains user-visible reliability — memory recall, automation runs, and upgrade paths.

## 2. Releases

### [ironclaw-v1.3.0-rc.2](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.3.0-rc.2) — 2026-08-18
- **Fixed:** Upgrades from 1.2.x now accept and preserve the released extension `activation_state` field, instead of crash-looping during startup.
- **Fixed:** The canonical Reborn runtime image again supports opt-in, public-key-only worker SSH on port 2222 while running IronClaw.

### [ironclaw-v1.3.0-rc.1](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.3.0-rc.1) — 2026-08-17
- Release notes were empty for this RC.
- Known issue: this version crash-loops on deployments upgraded from 1.2.x — tracked in [issue #7720](https://github.com/nearai/ironclaw/issues/7720) and fixed in `rc.2`.

**Migration note:** Users on `1.2.x` should skip `1.3.0-rc.1` and upgrade directly to `1.3.0-rc.2`. Users already on `rc.1` should upgrade to `rc.2` to resolve the boot crash-loop.

## 3. Project Progress

Visible merged/closed PRs from the top-20 active PR sample:

- [PR #7717](https://github.com/nearai/ironclaw/pull/7717) — `fix(resources): stop libSQL write-lane starvation from cascading through the resource governor` — closes [issue #7714](https://github.com/nearai/ironclaw/issues/7714). This is a meaningful stability fix for libSQL-backed deployments under load.
- [PR #7713](https://github.com/nearai/ironclaw/pull/7713) — test PR exercising `/benchmark` on `qa-automation-preview`; closed, not intended for merge.
- [PR #7684](https://github.com/nearai/ironclaw/pull/7684) — dependency-group bump (`base64`, `toml`, `http-body-util`, etc.), closed/merged.

Also closed this cycle:

- [Issue #7638](https://github.com/nearai/ironclaw/issues/7638) — replace thread-deletion `window.alert()` with a global toast.
- [Issue #7639](https://github.com/nearai/ironclaw/issues/7639) — introduce a shared `InlineNotice` component for page feedback.
- [Issue #7465](https://github.com/nearai/ironclaw/issues/7465) and [issue #7165](https://github.com/nearai/ironclaw/issues/7165) — older epic tracking items closed.

## 4. Community Hot Topics

The highest-comment issues in the last 24 hours signal a cluster of reliability and accounting concerns:

- [Issue #7185 — Memory not reliably recalled across conversations](https://github.com/nearai/ironclaw/issues/7185) — 2 comments, closed. Multiple testers reported that context established in one conversation is not available in later conversations. Underlying need: persistent, cross-session memory is expected and currently not dependable.
- [Issue #6879 — Automation runs are hit-or-miss](https://github.com/nearai/ironclaw/issues/6879) — 1 comment, open. Unattended runs sometimes execute as plain interactive chat turns, especially on small models. Underlying need: deterministic trigger-to-run behavior for unattended automation.
- [Issue #7673 — BudgetLedger accounting refinements](https://github.com/nearai/ironclaw/issues/7673) — 1 comment, open. Truncated launch windows can double-charge and reservation leaks can occur. Underlying need: exact, conservative cost accounting with durability guarantees.

PR comment counts were not exposed in the provided data, but the most roadmap-heavy open PRs receiving continued updates include [PR #7491](https://github.com/nearai/ironclaw/pull/7491) (omp core-tool contract), [PR #7650](https://github.com/nearai/ironclaw/pull/7650) (automation outcome evidence), and [PR #7711](https://github.com/nearai/ironclaw/pull/7711) (WASM typed tool response).

## 5. Bugs & Stability

Ranked by severity:

1. **Critical — Upgrade crash-loop in 1.3.0-rc.1**  
   [Issue #7720](https://github.com/nearai/ironclaw/issues/7720): `unknown field activation_state` crashes on boot for all 1.2.x → 1.3.0-rc.1 upgrades.  
   **Fix:** released in `ironclaw-v1.3.0-rc.2`.

2. **High — libSQL write-lane starvation cascades through resource governor**  
   [Issue #7714](https://github.com/nearai/ironclaw/issues/7714), closed. Single shared write connection caused ~40s journal stalls, authority invalidation, and permanent reservation leaks under PinchBench load.  
   **Fix:** [PR #7717](https://github.com/nearai/ironclaw/pull/7717), closed.

3. **Medium-High — Agent fails after too many tool calls**  
   [Issue #7447](https://github.com/nearai/ironclaw/issues/7447): agent entered a redundant fetch-retry loop and exhausted its tool-call/turn budget instead of paginating. No fix PR was visible in this update window.

4. **Medium — Catalog `capabilities` artifact is mandatory but never read**  
   [Issue #7727](https://github.com/nearai/ironclaw/issues/7727): field is downloaded and digest-verified but unused, including for manifest v3 tools. This is a correctness/CLI-surface bug rather than a crash.

5. **Medium — `IRONHUB_MANIFEST_URL` is configurable but hardcoded in practice**  
   [Issue #7726](https://github.com/nearai/ironclaw/issues/7726): self-hosted catalog hosts are rejected by a compile-time allowlist, making the configuration knob ineffective.

6. **Medium — Memory not reliably recalled across conversations**  
   [Issue #7185](https://github.com/nearai/ironclaw/issues/7185), closed. Cross-conversation memory persistence remains unreliable; no fix PR was visible in the sampled data.

## 6. Feature Requests & Roadmap Signals

Several v1.4.0 epics and experiments are actively moving:

- **Durable memory and profile-agnostic state**  
  [Issue #7731 — Mnesis Spike](https://github.com/nearai/ironclaw/issues/7731) and [Issue #7467 — Reborn durable state profile-agnostic](https://github.com/nearai/ironclaw/issues/7467) both point to memory/storage becoming a first-class v1.4.0 concern.

- **Automation reliability and evidence-based outcomes**  
  [Issue #6879](https://github.com/nearai/ironclaw/issues/6879) and [PR #7650](https://github.com/nearai/ironclaw/pull/7650) push toward deterministic run outcomes, while [PR #7735](https://github.com/nearai/ironclaw/pull/7735) adds run-timing evidence to downloadable artifacts.

- **Channel and extension expansion**  
  [Issue #7354 — Extensions vNext](https://github.com/nearai/ironclaw/issues/7354) and [PR #7682 — private Slack unlinked-user connect nudge](https://github.com/nearai/ironclaw/pull/7682) indicate continued channel polish. [PR #7728](https://github.com/nearai/ironclaw/pull/7728) adds semantic Google Docs editing tools.

- **WebUI and design system**  
  [Issue #7038](https://github.com/nearai/ironclaw/issues/7038) (Storybook/design system), [Issue #7733](https://github.com/nearai/ironclaw/issues/7733) (DESIGN.md governance), and [PR #7724](https://github.com/nearai/ironclaw/pull/7724) (voice-to-text composer via NEAR AI Whisper) are strong v1.4.0 UX candidates.

- **Developer experience / sandboxing**  
  [Issue #7732 — Sandboxing Solution with CLIs](https://github.com/nearai/ironclaw/issues/7732) and [Issue #7392 — replace first-party coding tools with pinned omp tool surface](https://github.com/nearai/ironclaw/issues/7392) are likely roadmap experiments for the next minor release.

Prediction: v1.4.0 will likely include durable profile-agnostic Reborn state, evidence-based automation outcomes, a private Slack connect flow, and the first phase of the WebUI design-system governance.

## 7. User Feedback Summary

- **Upgrade pain:** Users upgrading from 1.2.x to 1.3.0-rc.1 hit a hard crash-loop; this was reported as an immediate blocker in [#7720](https://github.com/nearai/ironclaw/issues/7720). The fast `rc.2` fix should restore confidence.
- **Memory inconsistency:** Testers in the IronClaw Champions check-in repeatedly found that information from one conversation is not recalled later — see [#7185](https://github.com/nearai/ironclaw/issues/7185). This is a recurring dissatisfaction signal around long-term memory.
- **Automation distrust:** Users report that scheduled/unattended runs sometimes behave like plain interactive chat turns or produce nothing useful — see [#6879](https://github.com/nearai/ironclaw/issues/6879). Small-model users are especially affected.
- **Slack onboarding friction:** Unlinked Slack users receive a public, multi-step connect notice instead of a private one-click link — see [#7681](https://github.com/nearai/ironclaw/issues/7681). A fix is already proposed in [PR #7682](https://github.com/nearai/ironclaw/pull/7682).
- **WebUI polish is being felt:** The closure of [#7638](https://github.com/nearai/ironclaw/issues/7638) and [#7639](https://github.com/nearai/ironclaw/issues/7639) shows user-facing feedback around toasts and inline notices is being addressed.

## 8. Backlog Watch

Items that appear under-attended relative to their importance:

- [Issue #7447 — Agent fails after calling too many tools](https://github.com/nearai/ironclaw/issues/7447) — open since 2026-08-10, no comments visible, but represents a core agent-loop reliability bug.
- [Issue #6879 — Automation runs are hit-or-miss](https://github.com/nearai/ironclaw/issues/6879) — open since 2026-07-29 with only 1 comment, yet labeled as an epic spanning v1.3.0/v1.4.0.
- [Issue #7185 — Memory not reliably recalled across conversations](https://github.com/nearai/ironclaw/issues/7185) — closed, but no visible fix PR; the underlying durability issue may need a dedicated follow-up.
- [PR #3676 — Security docs rework](https://github.com/nearai/ironclaw/pull/3676) — open since 2026-05-15; a large docs PR that has been rebuilt from current `main` and likely needs maintainer review.
- [PR #7257 — WebUI design-system proposal](https://github.com/nearai/ironclaw/pull/7257) — open since 2026-08-05; a docs-only north-star proposal that is foundational for the design-system epic and may be waiting for governance sign-off.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-19

## 1. Today's Overview

LobsterAI saw a burst of activity on 2026-08-18, with 20 PRs touched and 17 merged/closed in a single day — including a substantial backlog clearance of 10+ PRs originally opened in early April. This coincided with the **2026.8.18 release**, which ships the experimental **DeepSeek Harness (dsh)** engine integration, plus a release-branch merge (`release/2026.8.17`) bringing 23 commits and 57 file changes (+7,004/−39) into main. Meanwhile, 9 issues were touched — all still open and all tagged stale (dating back to April 9–11), indicating that while PRs are being actively merged, **issue triage is lagging significantly (~4 months behind)**. The overall project health is strong on the engineering side, but user-facing bug reports are aging without resolution or explicit maintainer response.

---

## 2. Releases

### [LobsterAI 2026.8.18](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.8.18) — released 2026-08-18

**Included changes:**
- **feat: dsh engine integration** ([#2502](https://github.com/netease-youdao/LobsterAI/pull/2502)) — new DeepSeek Harness engine
- **feat: update dsh to rc.7** ([#2509](https://github.com/netease-youdao/LobsterAI/pull/2509))
- **feat: dsh process launcher** — process management for dsh

**Context from release PR** ([#2510](https://github.com/netease-youdao/LobsterAI/pull/2510)): merged final changes from `release/2026.8.17` (23 commits, 57 files, +7,004/−39), introducing an **opt-in experimental DeepSeek Harness integration**, improved model loading, and scheduled-task history adjustments.

**Migration/breaking notes:** The dsh integration is explicitly **opt-in and experimental**; no breaking changes or migration requirements are indicated. A dedicated setup doc was added in [#2506](https://github.com/netease-youdao/LobsterAI/pull/2506).

---

## 3. Project Progress

The big story of this window is that **long-dormant PRs from April were finally merged on August 18**, alongside fresh release-prep work.

**New features merged:**
- **dsh engine updates** — rc.7 bump ([#2509](https://github.com/netease-youdao/LobsterAI/pull/2509)) and runtime setup docs ([#2506](https://github.com/netease-youdao/LobsterAI/pull/2506))
- **Skills "recently used" tab** with usage-count tracking (incl. auto-routing detection fix) ([#1583](https://github.com/netease-youdao/LobsterAI/pull/1583), by BucleLiu, from April)
- **Scheduled-task system notifications** — OS-native push on completion, default-off, permissions onboarding; also fixes a `pollOnce()` first-run callback bug; **closes #1620** ([#1621](https://github.com/netease-youdao/LobsterAI/pull/1621))
- **User avatar settings** — preset SVGs + local upload, auto-assign on first run ([#1629](https://github.com/netease-youdao/LobsterAI/pull/1629))
- **MCP quick-add templates** for File System, SQLite, Brave Search ([#1631](https://github.com/netease-youdao/LobsterAI/pull/1631))
- **Multi-agent task activity filter** in sidebar (Codex-inspired, blue indicator) ([#2418](https://github.com/netease-youdao/LobsterAI/pull/2418))
- **Artifact auto-preview toggle** in settings ([#2425](https://github.com/netease-youdao/LobsterAI/pull/2425))
- **Task search moved to header actions** in sidebar ([#2481](https://github.com/netease-youdao/LobsterAI/pull/2481))

**Bug fixes merged:**
- **P0 OpenClaw gateway blocker**: removed invalid `skipMissedJobs` cron fields that caused 100% startup failure on new OpenClaw; also fixed dialog flicker during crash-retry loop ([#1626](https://github.com/netease-youdao/LobsterAI/pull/1626))
- **SQLite foreign keys enabled** — fixes broken `ON DELETE CASCADE` for `cowork_messages` / `user_memory_sources`, eliminating orphaned data ([#1597](https://github.com/netease-youdao/LobsterAI/pull/1597))
- **Resilient model loading** — backoff retry so transient plan-model fetch failures don't leave the model group empty for the session; avoids clearing models on same-account reload failure ([#2508](https://github.com/netease-youdao/LobsterAI/pull/2508))
- **Cron run-history page size capped** to OpenClaw gateway maximum, internal pagination added ([#2507](https://github.com/netease-youdao/LobsterAI/pull/2507))
- **Session export overhaul** — localized role titles, timestamps/agent metadata, no forced 2k-character truncation of `tool_result`, collapsible tool calls, ESC-closable dialog, plus **copy-to-clipboard** ([#1615](https://github.com/netease-youdao/LobsterAI/pull/1615))
- **Sites page cleanup** — layout aligned with Skills/MCP pages ([#2410](https://github.com/netease-youdao/LobsterAI/pull/2410)), copy-success feedback added ([#2417](https://github.com/netease-youdao/LobsterAI/pull/2417))

**Still open (needs attention):**
- Global search fix + UX upgrade — removes agent-scoped search filtering and reworks search panel ([#1634](https://github.com/netease-youdao/LobsterAI/pull/1634), open since April 11)
- Model selector UI refactor — vendor icons, portal-based dropdown positioning, unified toolbar styling ([#1628](https://github.com/netease-youdao/LobsterAI/pull/1628), open since April 10)
- Dependabot electron group bump (electron 40.2.1 → 43.4.0) ([#1277](https://github.com/netease-youdao/LobsterAI/pull/1277), open since April 2)

---

## 4. Community Hot Topics

The most-commented items this window all carry 2 comments and remain **unanswered by maintainers**:

- **[#1614 — "how about add hermes-agent as one of the ai engine?"](https://github.com/netease-youdao/LobsterAI/issues/1614)** (2 comments) — User proposes adding **hermes-agent** as an optional AI agent engine "similar to openclaw." Given dsh was just added experimentally, this is a **signal that users want engine extensibility** beyond OpenClaw. Worth considering whether to formalize an engine plugin architecture.

- **[#1622 — "无法添加自定义模型" (Cannot add custom model)](https://github.com/netease-youdao/LobsterAI/issues/1622)** (2 comments) — Adding a custom model fails during testing. Directly related to the model-loading resilience work merged in [#2508](https://github.com/netease-youdao/LobsterAI/pull/2508) — maintainers should verify whether this issue is addressed.

- **[#1627 — "一个稍微复杂的任务，客户端就崩了" (Complex task crashes the client)](https://github.com/netease-youdao/LobsterAI/issues/1627)** (2 comments) — Logs show WebSocket event flood (`tick seq=135`) immediately before crash. Suggests a **stability issue under high WS traffic**, currently without maintainer response.

- **[#1632 — "切换成本地模型以后，原来的skill都不能用了" (After switching to local model, all skills stop working)](https://github.com/netease-youdao/LobsterAI/issues/1632)** (2 comments) — Skill functionality disappears when using local models; user asks how to install skills in that mode. This is likely a **documentation + product gap**.

The most active PR by community contribution was **[#1621 — scheduled task system notifications](https://github.com/netease-youdao/LobsterAI/pull/1621)**, which closed feature request [#1620](https://github.com/netease-youdao/LobsterAI/issues/1620) — a rare case where a community-suggested feature went from issue to merged PR.

---

## 5. Bugs & Stability

Ranked by severity. **Note: no new bugs were filed this window; all 9 issues are stale (April) but still open and unaddressed.**

| Severity | Issue | Description | Fix available? |
|---|---|---|---|
| 🔴 Critical | [#1627](https://github.com/netease-youdao/LobsterAI/issues/1627) | Client crashes on moderately complex tasks; WS event flood in logs | No — open, likely related to gateway/WS backpressure |
| 🔴 Critical | [#1587](https://github.com/netease-youdao/LobsterAI/issues/1587) | Crash on first launch after updating to latest version (Apr 9, on 2026.04.08 build) | No — stale, unverified against current 2026.8.18 |
| 🟠 High | [#1589](https://github.com/netease-youdao/LobsterAI/issues/1589) | Both session execution and scheduled tasks fail on **macOS Intel** (version 2026.04.08) | No — stale; unknown if fixed by later releases |
| 🟠 High | [#1622](https://github.com/netease-youdao/LobsterAI/issues/1622) | "Test" fails when adding a custom model | Possibly fixed by [#2508](https://github.com/netease-youdao/LobsterAI/pull/2508) model-load retry — needs verification |
| 🟠 High | [#1632](https://github.com/netease-youdao/LobsterAI/issues/1632) | Skills unusable after switching to a local model | No — likely product/UX gap |
| 🟡 Medium | [#1617](https://github.com/netease-youdao/LobsterAI/issues/1617) | Deleted skills remain in UI after restart; "Skill not found" on re-delete — backend/frontend state sync bug | No open fix; note SQLite FK fix [#1597](https://github.com/netease-youdao/LobsterAI/pull/1597) may touch related storage paths |
| 🟢 Low | [#1586](https://github.com/netease-youdao/LobsterAI/issues/1586) | Language switch incomplete: "Terms" and "Tool Style" pages remain Chinese in English mode | No |

**Fixed this window (from PR activity):** the P0 gateway startup blocker ([#1626](https://github.com/netease-youdao/LobsterAI/pull/1626)) and the cron-history gateway limit issue ([#2507](https://github.com/netease-youdao/LobsterAI/pull/2507)) were both merged. However, **none of the 9 open issues were closed**, so users may still be affected on older builds.

---

## 6. Feature Requests & Roadmap Signals

**Confirmed on roadmap (shipped/merged this window):**
- ✅ DeepSeek Harness (dsh) as experimental engine — released in 2026.8.18
- ✅ Scheduled-task OS notifications — merged ([#1621](https://github.com/netease-youdao/LobsterAI/pull/1621)) → closes [#1620](https://github.com/netease-youdao/LobsterAI/issues/1620)
- ✅ Recently-used skills tab with usage tracking — merged ([#1583](https://github.com/netease-youdao/LobsterAI/pull/1583))
- ✅ MCP quick-add templates — merged ([#1631](https://github.com/netease-youdao/LobsterAI/pull/1631))
- ✅ Avatar customization — merged ([#1629](https://github.com/netease-youdao/LobsterAI/pull/1629))

**Strong signals for next versions (open PRs:** [#1628](https://github.com/netease-youdao/LobsterAI/pull/1628), [#1634](https://github.com/netease-youdao/LobsterAI/pull/1634)):
- **Global search across all agents** ([#1634](https://github.com/netease-youdao/LobsterAI/pull/1634)) — fixes the bug where search was implicitly scoped to the active agent; includes a full search-panel UX upgrade. This is high-value and has been waiting since April 11.
- **Model selector polish** ([#1628](https://github.com/netease-youdao/LobsterAI/pull/1628)) — vendor icons, portal-based dropdowns fixing clipped panels, internationalized image-support labels.

**Community signals not yet addressed:**
- **hermes-agent as additional engine** ([#1614](https://github.com/netease-youdao/LobsterAI/issues/1614)) — combined with the dsh experiment, this suggests demand for a **multi-engine architecture**.
- **Skill installation for local-model mode** ([#1632](https://github.com/netease-youdao/LobsterAI/issues/1632)) — likely needs product/documentation work.

---

## 7. User Feedback Summary

- **Language parity**: Chinese-speaking users expect full i18n coverage; "Terms" and "Tool Style" pages not translating is a visible polish issue ([#1586](https://github.com/netease-youdao/LobsterAI/issues/1586)).
- **Stability anxiety on macOS Intel**: Two separate reports ([#1587](https://github.com/netease-youdao/LobsterAI/issues/1587), [#1589](https://github.com/netease-youdao/LobsterAI/issues/1589)) describe startup crashes and broken session/timer functionality on Intel Macs — a sign the Intel macOS build may have regressions users care about.
- **Local-model path friction**: Users switching to local models lose skill functionality and custom-model configuration fails ([#1632](https://github.com/netease-youdao/LobsterAI/issues/1632), [#1622](https://github.com/netease-youdao/LobsterAI/issues/1622)). This points to **incomplete onboarding/configuration docs** for the local-first workflow.
- **UI state sync complaints**: Skill deletion not reflected in the UI, even after restart, erodes trust in skill management ([#1617](https://github.com/netease-youdao/LobsterAI/issues/1617)).
- **Positive signal**: Community-contributed features (notifications, recently-used skills, avatar, MCP templates) are being accepted and merged — users are engaged and contributing product improvements.
- **Satisfaction caveat**: 100% of touched issues remain open with **no maintainer comments in this window**, so users don't know if their reports are acknowledged. The gap between issue creation (April) and PR merge (August) suggests a **bus-maintenance rhythm** rather than continuous triage.

---

## 8. Backlog Watch

Items needing maintainer attention — all are stale (unanswered for ~4 months) but remain relevant:

- **[#1614 — hermes-agent engine request](https://github.com/netease-youdao/LobsterAI/issues/1614)** (opened Apr 10) — unanswered feature proposal; deserves a roadmap response, especially now that dsh shows engine extensibility is possible.
- **[#1627 — crash on complex tasks](https://github.com/netease-youdao/LobsterAI/issues/1627)** (opened Apr 10) — potentially severe stability bug with logs; no maintainer reply.
- **[#1622 — custom model add failure](https://github.com/netease-youdao/LobsterAI/issues/1622)** (opened Apr 10) — may have been fixed by [#2508](https://github.com/netease-youdao/LobsterAI/pull/2508); should be verified and closed.
- **[#1589 — macOS Intel session/timer failure](https://github.com/netease-youdao/LobsterAI/issues/1589)** (opened Apr 9) — platform-specific regression; no status update in 4 months.
- **[#1587 — startup crash on update](https://github.com/netease-youdao/LobsterAI/issues/1587)** (opened Apr 9) — critical crash with full logs attached; unverified against current release.
- **[#1277 — Dependabot electron major bump (40→43)](https://github.com/netease-youdao/LobsterAI/pull/1277)** (opened Apr 2) — open for 4.5 months; a major Electron upgrade carries security/stability implications and deserves scheduling.
- **Open April PRs [#1628](https://github.com/netease-youdao/LobsterAI/pull/1628) / [#1634](https://github.com/netease-youdao/LobsterAI/pull/1634)** — both high-quality UI/UX contributions from the same author; waiting since April 10–11. Given the August merge wave, these should be next in line.

---

*Digest generated from LobsterAI public GitHub data. All dates per 2026-08-19 snapshot. Project: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI).*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-19

## 1. Today's Overview
As of 2026-08-19, Moltis shows a healthy, high-velocity maintenance and feature day. Two bug reports were closed, five PRs were closed/merged out of six updated, and one new release (`20260818.06`) was published. The closed PRs span core gateway behavior, OpenAI tool/reasoning routing, Podman sandbox support, README fixes, and a new managed Files library/Settings browser. One new feature PR is open: a Tesla Fleet API connector. Overall, the project is actively resolving user-reported issues while expanding its connector and storage/UI surface.

## 2. Releases
- **`20260818.06`** — [Release](https://github.com/moltis-org/moltis/releases/tag/20260818.06)

No detailed changelog or migration notes were included in the provided data. Based on the PRs closed on the same day, this release likely includes the heartbeat patch fix ([#1209](https://github.com/moltis-org/moltis/pull/1209)), Podman sandbox support ([#1106](https://github.com/moltis-org/moltis/pull/1106)), OpenAI Responses routing ([#1198](https://github.com/moltis-org/moltis/pull/1198)), and the Files library/Settings browser work ([#1206](https://github.com/moltis-org/moltis/pull/1206)). No explicit breaking changes or migration steps were surfaced in the available data.

## 3. Project Progress
Five PRs were closed/merged in the last 24 hours:

- **#1206 — Add managed Files library and Settings browser** ([PR](https://github.com/moltis-org/moltis/pull/1206))  
  Adds a persistent, data-directory-backed Files library with authenticated streamed file APIs, plus a Finder-style Settings browser and read-only-by-default container mounts. This is a significant product-surface expansion.

- **#1198 — Route OpenAI reasoning tool calls through Responses API** ([PR](https://github.com/moltis-org/moltis/pull/1198))  
  Improves compatibility for OpenAI requests combining function tools with `reasoning_effort`, while preserving Chat Completions behavior for compatible providers and non-reasoning cases.

- **#1209 — fix(gateway): treat `heartbeat.update` params as a patch** ([PR](https://github.com/moltis-org/moltis/pull/1209))  
  Fixes a config-reset bug: previously, `heartbeat.update` deserialized missing fields as defaults and overwrote the whole config; now it behaves as a patch. Closes [#1187](https://github.com/moltis-org/moltis/issues/1187).

- **#1106 — fix(sandbox): support Podman escape hatches** ([PR](https://github.com/moltis-org/moltis/pull/1106))  
  Adds explicit, mutually exclusive Podman sandbox escape hatches for host-socket passthrough and privileged nested Podman. Recreates sandboxes when socket identity changes, fails closed on unavailable sockets, and improves rootless Podman diagnostics.

- **#1211 — fix(readme): restore broken star history chart** ([PR](https://github.com/moltis-org/moltis/pull/1211))  
  Replaces a broken GitHub star-history chart with a working alternative that does not require a token.

The only current open PR is **#1210 — Add Tesla Fleet API connector for vehicle data sync** ([PR](https://github.com/moltis-org/moltis/pull/1210)), still under review.

## 4. Community Hot Topics
- **#1095 — [Bug]: Podman is not working via Moltis** ([Issue](https://github.com/moltis-org/moltis/issues/1095))  
  This is the only item with meaningful comment activity (2 comments). It was created on 2026-06-03 and finally closed on 2026-08-18, after the Podman sandbox escape-hatch PR landed. The underlying need is clear: users want reliable Podman support alongside Docker, including host-socket passthrough and privileged nested-container workflows.

- **#1187 — [Bug]: Heartbeat settings UI silently resets fields not represented by the form** ([Issue](https://github.com/moltis-org/moltis/issues/1187))  
  No comments, but was quickly addressed by the patch-semantics fix in [#1209](https://github.com/moltis-org/moltis/pull/1209). The silent config-reset behavior represents a trust-breaking UX bug, and the maintainers responded within ~9 days.

## 5. Bugs & Stability
All bugs in today’s update are closed:

- **High severity — Podman runtime not working** ([#1095](https://github.com/moltis-org/moltis/issues/1095))  
  Affected users running Podman sandboxes. Fixed by the Podman escape-hatch work in [#1106](https://github.com/moltis-org/moltis/pull/1106).

- **Moderate severity — Heartbeat settings UI silently resets form-unrepresented fields** ([#1187](https://github.com/moltis-org/moltis/issues/1187))  
  Could cause unexpected configuration loss or drift. Fixed by treating `heartbeat.update` parameters as a patch rather than a whole-config replacement in [#1209](https://github.com/moltis-org/moltis/pull/1209).

- **Low severity / non-runtime — Broken README star history chart**  
  Addressed directly by [#1211](https://github.com/moltis-org/moltis/pull/1211).

No new crashes, security issues, or regressions were reported in the last 24 hours.

## 6. Feature Requests & Roadmap Signals
No explicit user-submitted feature requests appeared in today’s issue update set. However, the active PRs indicate clear roadmap directions:

- **Managed Files library and Settings browser** ([#1206](https://github.com/moltis-org/moltis/pull/1206)) is already merged/closed, signaling a push toward richer data management and UI-internal configuration browsing.
- **Tesla Fleet API connector** ([#1210](https://github.com/moltis-org/moltis/pull/1210)) is open and likely a strong candidate for the next release. It is designed as a read-only adapter that never sends commands or wakes sleeping vehicles, suggesting a pattern for future privacy-conscious connector integrations.
- **OpenAI Responses API routing** ([#1198](https://github.com/moltis-org/moltis/pull/1198)) shows continued investment in AI-provider compatibility and reasoning-tool workflows.

If #1210 merges cleanly, a future minor release could include Tesla vehicle data sync as a new connector.

## 7. User Feedback Summary
The main user pain points in today’s data were:

- **Podman users could not use Moltis properly** ([#1095](https://github.com/moltis-org/moltis/issues/1095)), with the issue receiving comments and taking ~2.5 months to resolve. The fix adds escape hatches and better diagnostics, which should improve Podman usability significantly.
- **Heartbeat settings UI users could silently lose configuration** ([#1187](https://github.com/moltis-org/moltis/issues/1187)), a frustrating UX issue. The quick fix indicates strong maintainer responsiveness to configuration-integrity bugs.

No explicit satisfaction/dissatisfaction statements were available, but the fact that both reported bugs were closed with fix PRs suggests user-reported issues are being taken seriously.

## 8. Backlog Watch
No long-unanswered open issues or PRs are apparent in today’s data. The only open PR is **#1210** ([PR](https://github.com/moltis-org/moltis/pull/1210)), created on 2026-08-18 and still within normal review range.

Notably, the previously long-lived PR **#1106** ([PR](https://github.com/moltis-org/moltis/pull/1106)) — created on 2026-06-05 — was closed on 2026-08-18, clearing a ~2.5-month-old sandbox-related workstream. No stale or abandoned items were detected in this snapshot.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-19

## Today's Overview

CoPaw / QwenPaw remains highly active: 46 issues and 50 PRs were updated in the last 24 hours, with 16 issues and 19 PRs moving to closed/merged state. No new release was published in this window. Development effort is visibly concentrated on MCP/transport robustness, sandbox and security hardening, console/session fixes, and new provider integrations. Bug reports continue to outnumber feature requests, with silent task halts, session-state corruption, and MCP reconnect failures as the most recurrent pain points. Overall project throughput is strong, but several long-standing MCP durability issues remain unresolved.

## Releases

No new releases in the last 24 hours.

## Project Progress

Notable PRs that were closed in this window:

- **[PR #7072](https://github.com/agentscope-ai/QwenPaw/pull/7072) — feat(console): add background chat task list API**  
  Adds a task-status list API so multi-agent background tasks can be inspected without one-by-one polling.

- **[PR #7069](https://github.com/agentscope-ai/QwenPaw/pull/7069) — fix(console): render data-URL images in historical messages on session reload**  
  Fixes broken/empty image thumbnails after closing and reopening a chat.

- **[PR #7064](https://github.com/agentscope-ai/QwenPaw/pull/7064) — fix(cli): sync top-level text on cron update --text for agent jobs**  
  Corrects stale top-level prompt text when updating agent-type cron jobs.

- **[PR #6617](https://github.com/agentscope-ai/QwenPaw/pull/6617) — fix(providers): honor the Retry-After cap on the streaming retry path**  
  Tightens rate-limit handling on streaming provider retries.

Additional PRs still open but under review or ready for review include [#7087](https://github.com/agentscope-ai/QwenPaw/pull/7087) (localize remote media URLs before model requests), [#7120](https://github.com/agentscope-ai/QwenPaw/pull/7120) (enable shell evasion checks by default), [#7116](https://github.com/agentscope-ai/QwenPaw/pull/7116) (sandbox mount path expansion), and [#7066](https://github.com/agentscope-ai/QwenPaw/pull/7066) (persist rotated OAuth2 refresh tokens).

## Community Hot Topics

- **[Issue #6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) — 10 comments**  
  Request for channel retry functionality. A user self-hosting Matrix reports that QwenPaw starts before Matrix is ready, then never retries or health-checks the channel; manual re-saving is required after every server start.

- **[Issue #6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) — 8 comments**  
  Frequent silent task stops after the model writes a plan such as “Now 2.1, 3.1, 3.2. Let me do all three.” The task waits for the user to say “继续” before continuing.

- **[Issue #7102](https://github.com/agentscope-ai/QwenPaw/issues/7102) — 7 comments**  
  Desktop 2.1.0 freezes for more than ten minutes with no token output, visible text, or thinking updates while using GLM 5.3.

- **[Issue #7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) — 7 comments**  
  A Console UI stop request can cancel an active Feishu conversation when session identity values cross between two UI sessions.

- **[Issue #6470](https://github.com/agentscope-ai/QwenPaw/issues/6470) — 5 comments**  
  MCP driver hardcodes `sse_client` and ignores `transport: streamable_http` from YAML config, breaking all Streamable HTTP MCP servers.

The common underlying themes are **task-execution reliability**, **channel/session state isolation**, and **MCP configuration fidelity**.

## Bugs & Stability

Ranked roughly by severity:

- **[#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102) — Long freeze with no output**  
  Critical UX issue: no tokens, no thinking, no timeout feedback. No fix PR visible.

- **[#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) — Agent silently stops after planning**  
  High impact on multi-step workflows. Users must manually prompt “继续”. No fix PR visible.

- **[#7110](https://github.com/agentscope-ai/QwenPaw/issues/7110) — Undownloadable image URL poisons the whole session**  
  A single inaccessible image link in message history makes the entire conversation unusable until `/clear`. Related fix candidate: [#7087](https://github.com/agentscope-ai/QwenPaw/pull/7087).

- **[#7082](https://github.com/agentscope-ai/QwenPaw/issues/7082) — `_StructuredOutputDynamicClass` is not fully defined**  
  Pydantic model initialization error causes `MODEL_EXECUTION_ERROR` during agent/toolkit setup in the Console channel.

- **[#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) — Cross-session cancellation between Console and Feishu**  
  Session identity isolation issue; one stop request can kill another active channel session.

- **[#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470) — MCP transport config ignored**  
  `sse_client` is hardcoded, so `streamable_http` servers fail to load tools.

- **[#5900](https://github.com/agentscope-ai/QwenPaw/issues/5900) — No auto-reconnect for terminated `streamable_http` sessions**  
  MCP client is permanently skipped for the rest of the session after a network blip or server restart.

Fixes are already in flight for some reported issues:

- **[#7053](https://github.com/agentscope-ai/QwenPaw/issues/7053) — OAuth2 rotated refresh token never persisted** → PR [#7066](https://github.com/agentscope-ai/QwenPaw/pull/7066).
- **[#7005](https://github.com/agentscope-ai/QwenPaw/issues/7005) — Sandbox blocks `uv` from writing `~/.cache/uv`** → PR [#7116](https://github.com/agentscope-ai/QwenPaw/pull/7116).
- **[#7051](https://github.com/agentscope-ai/QwenPaw/issues/7051) — Images missing in historical chat messages** → PR [#7069](https://github.com/agentscope-ai/QwenPaw/pull/7069).

## Feature Requests & Roadmap Signals

Strong user demand is visible around:

- **[#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) — Channel retry / health check**  
  Especially for self-hosted services like Matrix.

- **[#7062](https://github.com/agentscope-ai/QwenPaw/issues/7062) — Per-agent / per-session `reasoning_effort` override**  
  Users want different thinking depth for different roles without creating separate model entries.

- **[#7090](https://github.com/agentscope-ai/QwenPaw/issues/7090) — Search/filter in skill pool import UI**  
  With hundreds of skills, current checkbox navigation is impractical.

- **[#6925](https://github.com/agentscope-ai/QwenPaw/issues/6925) — Agent collaboration in one session window**  
  Users dislike that each collaboration round creates a new session and requires switching agents to see results.

- **[#7052](https://github.com/agentscope-ai/QwenPaw/issues/7052) — Plugin API `system_prompt` permission**  
  Enterprise/plugin governance request to avoid exposing company prompts to end users.

- **[#7039](https://github.com/agentscope-ai/QwenPaw/issues/7039) — Option to disable file preview**  
  Users want direct download behavior as an optional setting.

Likely next-version signals are already visible as open PRs: sandbox fixes ([#7116](https://github.com/agentscope-ai/QwenPaw/pull/7116)), OAuth2 refresh-token persistence ([#7066](https://github.com/agentscope-ai/QwenPaw/pull/7066)), security defaults ([#7120](https://github.com/agentscope-ai/QwenPaw/pull/7120)), remote media URL localization ([#7087](https://github.com/agentscope-ai/QwenPaw/pull/7087)), and background chat task listing ([#7072](https://github.com/agentscope-ai/QwenPaw/pull/7072)).

## User Feedback Summary

Real user pain points are concentrated in three areas:

1. **Task execution reliability** — Silent stops after planning ([#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921)) and long freezes ([#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102)) erode trust in multi-step workflows.
2. **Session and history integrity** — One inaccessible image link can kill a session ([#7110](https://github.com/agentscope-ai/QwenPaw/issues/7110)); chat history becomes unreachable after several rounds ([#7065](https://github.com/agentscope-ai/QwenPaw/issues/7065)); Console stop requests can cancel active Feishu sessions ([#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011)).
3. **MCP interoperability** — Streamable HTTP, OAuth2 rotation, transport config, and reconnect behavior remain recurring sources of frustration ([#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470), [#5900](https://github.com/agentscope-ai/QwenPaw/issues/5900), [#7053](https://github.com/agentscope-ai/QwenPaw/issues/7053)).

There is also measurable trust sensitivity around security labeling: a MalwareBytes “Trojan Loader” report ([#6775](https://github.com/agentscope-ai/QwenPaw/issues/6775)) and a Cloudflare Tunnel termination false positive ([#7009](https://github.com/agentscope-ai/QwenPaw/issues/7009)) both pushed users toward uninstalling or pausing usage.

Positive sentiment still exists: users acknowledge 2.1.0 improvements such as better formula display ([#7039](https://github.com/agentscope-ai/QwenPaw/issues/7039)), and closed items like [#4001](https://github.com/agentscope-ai/QwenPaw/issues/4001) show maintainers are working through long-requested UX features.

## Backlog Watch

Items that have been open for a while and need maintainer attention:

- **[#5900](https://github.com/agentscope-ai/QwenPaw/issues/5900)** — Opened July 9: `streamable_http` MCP session termination has no auto-reconnect.
- **[#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470)** — Opened July 26: MCP driver ignores `transport: streamable_http` config.
- **[#6775](https://github.com/agentscope-ai/QwenPaw/issues/6775)** — Opened August 7: MalwareBytes false-positive/uninstall risk; security-sensitive and user-facing.
- **[#6925](https://github.com/agentscope-ai/QwenPaw/issues/6925)** — Opened August 12: multi-agent collaboration still creates separate sessions, hurting usability.
- **[PR #6515](https://github.com/agentscope-ai/QwenPaw/pull/6515)** — Opened July 28: Volcengine Agent Plan & MiMo V2.5 provider support; still under review.
- **[PR #6764](https://github.com/agentscope-ai/QwenPaw/pull/6764)** — Opened August 6: CI gate on `main` to prevent merging with failing tests; no merge yet.
- **[PR #6800](https://github.com/agentscope-ai/QwenPaw/pull/6800)** — Opened August 7: intelligent email/mailbox assistant; appears to lack maintainer engagement.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-19

## 1. Today's Overview

ZeroClaw remains highly active: **50 issues** and **50 PRs** were updated in the last 24 hours, with **32 PRs** moved to merged/closed and **18 issues** closed. The visible snapshot is dominated by accepted RFCs and high-priority hardening work across Windows CI, SSRF protection for `file_download`, shell-command policy, channel reliability, and runtime memory behavior. No new release was published, so the project appears to be in a consolidation phase rather than a shipping window. The main risk areas are security remediation, Windows test gaps, and several high-value PRs still sitting behind `do-not-merge` or `needs-maintainer-review` labels.

## 2. Releases

No new releases were published in the last 24 hours. No release notes, breaking changes, or migration notes to report.

## 3. Project Progress

Closed/landed PRs visible in the snapshot:

- [#5168](https://github.com/zeroclaw-labs/zeroclaw/pull/5168) — `feat(agent)`: HMAC tool execution receipts for hallucination detection.
- [#5207](https://github.com/zeroclaw-labs/zeroclaw/pull/5207) — `fix(web)`: theme switching, session crash, CSS token consistency, CJK IME handling, and smaller logo asset.
- [#5648](https://github.com/zeroclaw-labs/zeroclaw/pull/5648) — `docs(pr-template)`: streamlined PR template from 15 sections to 7.
- [#5684](https://github.com/zeroclaw-labs/zeroclaw/pull/5684) — `docs`: added `pr-review-prompt` to contributing docs.
- [#5780](https://github.com/zeroclaw-labs/zeroclaw/pull/5780) — `feat(skills)`: added `github-issue-triage` Claude Code skill.

Notable closed issues in the same window:

- [#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415) — RFC to unify the three agent turn engines, with implementation noted via PR #7540.
- [#8059](https://github.com/zeroclaw-labs/zeroclaw/issues/8059) — `deny.toml`/`audit.toml` policy cleanup.
- [#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) — SOPs not available through web dashboard chat sessions; S1 bug closed.
- [#7069](https://github.com/zeroclaw-labs/zeroclaw/issues/7069) — Twitter/X channel missing from prebuilt binaries; closed.
- [#3542](https://github.com/zeroclaw-labs/zeroclaw/issues/3542) — Webhook agent-mode request; closed.

## 4. Community Hot Topics

Most-commented issues in the last 24 hours:

- [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) — **RFC: Goal mode v1** — 22 comments, 1 👍. Community and maintainers are trying to define a bounded foreground Matrix work mode without over-coupling restart handoff, web, and async child work.
- [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) — **RFC: high-risk shell command confirmation + allow/ask/deny policy** — 22 comments. Heavily revised; scope has narrowed to a reconciled shell-policy contract, indicating strong security-focused interest.
- [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) — **74 test failures on Windows** — 17 comments. Windows users are blocked by Unix-only test commands, path-semantics issues, and console encoding; CI currently does not catch this.
- [#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929) — **Unify slash-command registries** — 8 comments. Command drift across web UI, ZeroCode TUI, and channel runtime is a real usability pain point.
- [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) — **wasmtime-wasi CVE remediation / audit ignore drift** — 6 comments. Security-focused thread about reconciling `cargo audit` and `cargo deny` scopes.

PR-side comment counts were not included in the supplied snapshot, but open PRs with heavy cross-cutting scope include [#9985](https://github.com/zeroclaw-labs/zeroclaw/pull/9985), [#10070](https://github.com/zeroclaw-labs/zeroclaw/pull/10070), and [#10075](https://github.com/zeroclaw-labs/zeroclaw/pull/10075).

## 5. Bugs & Stability

Ranked by severity:

- **S1 — [#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563)** — SOPs are not available to the agent through the web dashboard chat session. Closed in this window, though no explicit fix PR is listed.
- **S1 — [#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627)** — WhatsApp Web device linking is broken by WhatsApp’s new passkey/SHORTCAKE companion-linking gate. Still in-progress; no fix PR visible.
- **P1 — [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)** — MCP/tool-schema cloning drives unbounded RSS growth in the agent loop. Split from the WSL2 OOM tracker; the restart-storm part is addressed separately by #8633.
- **P1 — [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519)** — Remaining wasmtime-wasi CVEs and `cargo audit`/`cargo deny` ignore drift.
- **S2 — [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)** — 74 Windows test failures. [#10090](https://github.com/zeroclaw-labs/zeroclaw/pull/10090) is a partial fix for Windows-only `cfg` warnings, but the broader failure count remains open.
- **S2 — [#8410](https://github.com/zeroclaw-labs/zeroclaw/issues/8410)** — Channel tasks lack a first-class intentional no-reply outcome; conditional tasks send visible responses when they should stay silent.

Fix PRs currently in flight:

- [#9321](https://github.com/zeroclaw-labs/zeroclaw/pull/9321) — Telegram: send unauthorized notice for processable media messages.
- [#9325](https://github.com/zeroclaw-labs/zeroclaw/pull/9325) — Make streamed user turns read as conversation, not log payloads.
- [#9281](https://github.com/zeroclaw-labs/zeroclaw/pull/9281) — Roll back auto-created map aliases when `config/set` fails.
- [#10070](https://github.com/zeroclaw-labs/zeroclaw/pull/10070) / [#10075](https://github.com/zeroclaw-labs/zeroclaw/pull/10075) — Stacked SSRF hardening for `file_download`, including live config threading through gateway chat.

## 6. Feature Requests & Roadmap Signals

Accepted or high-signal feature/RFC items:

- [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) — Per-execution confirmation tier for high-risk shell commands.
- [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) — Goal mode v1: bounded foreground Matrix work.
- [#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929) — Unify slash-command registries across surfaces.
- [#8134](https://github.com/zeroclaw-labs/zeroclaw/issues/8134) — Reset stale channel sessions after `channels.session_ttl_hours`.
- [#8409](https://github.com/zeroclaw-labs/zeroclaw/issues/8409) — Cron shell jobs should support raw stdout output.
- [#8584](https://github.com/zeroclaw-labs/zeroclaw/issues/8584) — Move web dashboard localization into the Fluent flow.
- [#8228](https://github.com/zeroclaw-labs/zeroclaw/issues/8228) — DingTalk channel streaming message support.
- [#8383](https://github.com/zeroclaw-labs/zeroclaw/issues/8383) — Show active runtime context in ZeroCode Dashboard.
- [#9998](https://github.com/zeroclaw-labs/zeroclaw/issues/9998) — RFC: session-scoped persistent prompt attachments.
- [#8358](https://github.com/zeroclaw-labs/zeroclaw/issues/8358) — `zerorelay` milestone: relay node for NAT/CGNAT traversal.
- [#8309](https://github.com/zeroclaw-labs/zeroclaw/issues/8309) — Remove or finish wiring the orphaned SkillForge engine.
- [#8367](https://github.com/zeroclaw-labs/zeroclaw/issues/8367) — Derived capability readiness for agent guidance.
- [#8321](https://github.com/zeroclaw-labs/zeroclaw/issues/8321) — Response-cache policy for volatile runtime context.
- [#8858](https://github.com/zeroclaw-labs/zeroclaw/issues/8858) — Tracker: audit existing drift surfaces across the codebase.

Open PRs also point to upcoming features:

- [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) — Anchor context compaction to model window ratio.
- [#9241](https://github.com/zeroclaw-labs/zeroclaw/pull/9241) — Add Microsoft Teams (Bot Framework) channel.
- [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) — Add native Hailo-Ollama support.
- [#10096](https://github.com/zeroclaw-labs/zeroclaw/pull/10096) — Make ZeroCode logs text selectable and copyable.

Given accepted status and priority, likely next-version candidates are the shell confirmation policy (#7155), slash-command unification (#7929), stale channel session TTL (#8134), cron raw stdout (#8409), and the `file_download` SSRF gate (#10070/#10075). Larger RFCs like #8303 and #9998 may take longer to land.

## 7. User Feedback Summary

Visible user pain points and use cases:

- **Windows users** are frustrated by 74 test failures that Linux-only CI does not catch ([#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)).
- **Web dashboard users** need SOPs to actually reach the agent runtime ([#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563)).
- **WhatsApp users** are blocked from completing device linking due to external WhatsApp authentication changes ([#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627)).
- **Twitter/X users** found the feature in source and docs but not in prebuilt binaries ([#7069](https://github.com/zeroclaw-labs/zeroclaw/issues/7069)).
- **DingTalk users** want streaming responses to avoid long waits ([#8228](https://github.com/zeroclaw-labs/zeroclaw/issues/8228)).
- **Teams users** are asking for a first-class Microsoft Teams channel; [#9241](https://github.com/zeroclaw-labs/zeroclaw/pull/9241) is an open implementation.
- **Cron users** need raw stdout output instead of the current `status=... / stdout:` wrapper ([#8409](https://github.com/zeroclaw-labs/zeroclaw/issues/8409)).
- **Small local model users** see streamed user turns misread as log/API output, causing protocol commentary instead of conversation ([#9325](https://github.com/zeroclaw-labs/zeroclaw/pull/9325)).
- **Telegram operators** hit silent failures for unauthorized media senders ([#9321](https://github.com/zeroclaw-labs/zeroclaw/pull/9321)).
- **Slash-command users** are affected by command-name and behavior drift across web, TUI, and channels ([#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929)).
- **Webhook users** want full agent-mode workflows, not just chat-mode responses ([#3542](https://github.com/zeroclaw-labs/zeroclaw/issues/3542)).
- **Contributor experience** feedback shows demand for lighter PR templates ([#5648](https://github.com/zeroclaw-labs/zeroclaw/pull/5648)), automatic PR title checks ([#6394](https://github.com/zeroclaw-labs/zeroclaw/issues/6394)), and structured triage skills ([#5780](https://github.com/zeroclaw-labs/zeroclaw/pull/5780)).

## 8. Backlog Watch

Items that need maintainer attention or are at risk of stalling:

- [#9998](https://github.com/zeroclaw-labs/zeroclaw/issues/9998) — RFC: session-scoped persistent prompt attachments; labeled `needs-maintainer-review`.
- [#9985](https://github.com/zeroclaw-labs/zeroclaw/pull/9985) — `ci(runners)`: extend Blacksmith to msrv, parallel-runtime-test, installer-drift; `do-not-merge` + `needs-maintainer-review`.
- [#9935](https://github.com/zeroclaw-labs/zeroclaw/pull/9935) — `feat(vi)`: preserve unknown constraint types and read strictness mode; `do-not-merge` + `needs-maintainer-review`.
- [#10070](https://github.com/zeroclaw-labs/zeroclaw/pull/10070) — SSRF gate for `file_download`; `do-not-merge` + `needs-maintainer-review`. [#10075](https://github.com/zeroclaw-labs/zeroclaw/pull/10075) is stacked on top.
- [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) — P1 security issue: wasmtime-wasi CVE remediation; open since 2026-06-30.
- [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) — P1 agent-loop memory growth; open since 2026-07-03.
- [#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627) — P1 WhatsApp channel linking broken; in-progress.
- [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) — P1 Windows test failures; open since 2026-06-10.
- [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) — Accepted RFC for shell command policy; no implementation PR visible yet.
- [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) — Accepted RFC for Goal mode v1; no implementation PR visible yet.

Overall project health is strong in terms of community activity and issue throughput, but the cluster of `do-not-merge` security PRs and open P1 bugs suggests the next release should focus on hardening and cross-platform reliability.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*