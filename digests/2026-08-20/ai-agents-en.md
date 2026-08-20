# OpenClaw Ecosystem Digest 2026-08-20

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-19 23:12 UTC

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

# OpenClaw Project Digest — 2026-08-20

## 1. Today's Overview

OpenClaw is moving at a very high velocity: 500 issues and 500 PRs were updated in the last 24 hours, with 40 issues closed and 84 PRs merged/closed. No new releases were published during the window, while validation of the v2026.8.1-beta.2 release candidate continues in [Issue #125626](https://github.com/openclaw/openclaw/issues/125626). The tracker shows concerning density of P0/P1 regressions around session-state corruption, silent message loss, crash loops, and auth/provider failures — many carrying the highest "diamond lobster" impact rating — but also a healthy counter-flow of fix PRs from maintainers, community contributors, and the ClawSweeper bot. The biggest near-term risk is a triage bottleneck: a large share of critical issues is parked on `needs-maintainer-review` or `needs-product-decision` rather than a fix in flight.

## 2. Releases

No new releases were published in the last 24 hours (0 releases). Latest open milestone activity is release validation for `v2026.8.1-beta.2` ([#125626](https://github.com/openclaw/openclaw/issues/125626)), currently gathering tester evidence.

---

## 3. Project Progress

**Merged/closed PRs (84 in last 24h), with the two visible in the top-commented list:**

- **[PR #123931 (closed)](https://github.com/openclaw/openclaw/pull/123931) — fix(matrix): accept Room v12 IDs without server suffix.** Removes a hard requirement for `:` at resolved-room boundaries, fixing valid suffixless Room v12 IDs from being silently dropped from room routing.
- **[PR #125847 (closed)](https://github.com/openclaw/openclaw/pull/125847) — fix: thinking controls update after dynamic model discovery.** Ensures the UI picker reflects richer provider metadata loaded after the startup catalog (web-ui, gateway, agents).

**Fresh PRs opened 2026-08-19 (newest work):**

- **[PR #126248](https://github.com/openclaw/openclaw/pull/126248) — fix(telegram): finalize streamed questions in place.** Fixes streamed `ask_user` prompts bypassing question registration, false-success on button attachment, and duplicate fallback bubbles.
- **[PR #126466](https://github.com/openclaw/openclaw/pull/126466) — fix(qa): preserve terminal script failures.** QA harness fix so non-Docker script scenarios can't mask failures.
- **[PR #126465](https://github.com/openclaw/openclaw/pull/126465) — fix: preserve cloud worker lease during cleanup recovery.** Prevents provider-side setup timeout from leaving a cloud worker permanently unrecoverable.
- **[PR #126456](https://github.com/openclaw/openclaw/pull/126456) — docs: add release validation handoff.** Gives testers a Discord-ready handoff summary.

**Notable issue closures:** [Issue #111498](https://github.com/openclaw/openclaw/issues/111498) (main agent blocked by persistent workspace-state migration after Anthropic auth recovery, P1/diamond lobster) and [Issue #125679](https://github.com/openclaw/openclaw/issues/125679) (Matrix channel infinite restart loop, bisected to #125302).

**Bot-assisted fix throughput continues:** ClawSweeper authored PRs now in review cover Discord `maxLinesPerMessage` enforcement ([#120249](https://github.com/openclaw/openclaw/pull/120249)), OpenAI-completions usage unavailability ([#120569](https://github.com/openclaw/openclaw/pull/120569)), context-usage provenance repair ([#120550](https://github.com/openclaw/openclaw/pull/120550)), and Windows Scheduled Task restart handoff ([#120230](https://github.com/openclaw/openclaw/pull/120230)).

---

## 4. Community Hot Topics

Most-commented issues (links included) and what they reveal:

- **[Issue #116201 — 60 comments](https://github.com/openclaw/openclaw/issues/116201), diamond lobster, P1:** Realtime voice retains unbounded provider/consult state. Resource limits are expressed as item counts/cancellations rather than hard ownership bounds, so slow/stalled providers accumulate superseded work. Underlying need: real ownership-based memory limits for long-lived voice sessions.
- **[Issue #44925 — 26 comments, 2 👍](https://github.com/openclaw/openclaw/issues/44925), diamond lobster, P1:** Subagent completion silently lost — no retry, no notification, no auto-restart on timeout. Multiple announced-completion failure patterns (E31, E42, E45…). Underlying need: orchestration trust — users cannot tell whether work actually finished.
- **[Issue #62505 — 15 comments](https://github.com/openclaw/openclaw/issues/62505), diamond lobster, P1:** "Coding Agent never completes anything" — regression from 2026.4.2. Underlying need: flagship coding workflow is degraded for some setups.
- **[Issue #38327 — 14 comments, 3 👍](https://github.com/openclaw/openclaw/issues/38327), platinum hermit, P1:** "Cannot convert undefined or null to object" with google-vertex/gemini-3.1-pro-preview. Underlying need: provider compatibility with a widely used model.
- **[Issue #108435 — 14 comments, 3 👍](https://github.com/openclaw/openclaw/issues/108435), diamond lobster, P0:** Gateway fails to start after update to 2026.7.1 (systemd, ollama, manual launch all fail). Underlying need: release-blocking stability — updates must not brick startup.
- **[Issue #40001 — 14 comments](https://github.com/openclaw/openclaw/issues/40001), diamond lobster, P1:** `write` tool lacks append mode; isolated cron sessions overwrite shared files like `memory/YYYY-MM-DD.md`. Underlying need: concurrency-safe shared-state tooling for scheduled agents.
- Also active: [Issue #125626](https://github.com/openclaw/openclaw/issues/125626) (release validation, 12 comments); [Issue #88657](https://github.com/openclaw/openclaw/issues/88657) (DeepSeek V4 Flash incomplete turns, 11); [Issue #120563](https://github.com/openclaw/openclaw/issues/120563) (Ollama history never sent to model, 10).

---

## 5. Bugs & Stability

**P0 (release-blocking / crash-loop):**

- **[Issue #108435](https://github.com/openclaw/openclaw/issues/108435)** — Gateway fails to start after 2026.7.1 update on systemd, ollama, and manual launch (`gateway did not start on 127.0...`). Diamond lobster, ux-release-blocker. No fix PR visible yet.
- **[Issue #70903](https://github.com/openclaw/openclaw/issues/70903)** — Persistent file-based provider cooldown `disabledUntil` blocks users for hours after billing recovery; stale-labeled, awaiting product decision. P0 impact remains unaddressed.

**P1 regressions / data-loss / session-state:**

- [Issue #44925](https://github.com/openclaw/openclaw/issues/44925) — Subagent results silently lost (no retry/notification/restart).
- [Issue #62505](https://github.com/openclaw/openclaw/issues/62505) — Coding agent never completes (regression from 2026.4.2).
- [Issue #38327](https://github.com/openclaw/openclaw/issues/38327) — Vertex/Gemini 3.1 null-object crash (regression).
- [Issue #94939](https://github.com/openclaw/openclaw/issues/94939) — 6.x state migration leaves channel conversation-store SQLite empty (0 bytes); data-loss; linked PR open.
- [Issue #49876](https://github.com/openclaw/openclaw/issues/49876) — Cron sessions deliver hallucinated output on tool failure instead of failing cleanly (security review pending).
- [Issue #115546](https://github.com/openclaw/openclaw/issues/115546) — CLI-budget compaction fails ~100% on large sessions; timeouts fire after 4.9s–50s vs. 180s deadline; wake death-spiral.
- [Issue #114234](https://github.com/openclaw/openclaw/issues/114234) — Usage-cost refresh lock never released when a container reuses the owner PID.
- [Issue #125431](https://github.com/openclaw/openclaw/issues/125431) — Codex restricted-tool policy silently disables workspace `AGENTS.md`.
- [Issue #97616](https://github.com/openclaw/openclaw/issues/97616) — Unreaped hook/tool child processes accumulate as zombies.
- [Issue #119087](https://github.com/openclaw/openclaw/issues/119087) — Gateway cold start regressed ~2.5x; linked PR open.
- [Issue #86612](https://github.com/openclaw/openclaw/issues/86612) — Docker gateway restart loop when `OPENCLAW_SANDBOX=1` + `OPENCLAW_HOME=/mnt/...` on Windows.
- [Issue #56217](https://github.com/openclaw/openclaw/issues/56217) — Secret-provider crash-loop exhausts 1Password service-account rate limits.
- [Issue #112391](https://github.com/openclaw/openclaw/issues/112391) — Docker `:latest` tag regressed from 2026.7.1 to 2026.6.33, triggering downgrade guard.
- [Issue #124284](https://github.com/openclaw/openclaw/issues/124284) — v2026.8.1-beta.2 stream wrapper breaks vLLM subagent spawns with thinking models (new, unreleased regression).

**Fixed/closed in-window:** [Issue #111498](https://github.com/openclaw/openclaw/issues/111498) (workspace-state migration block) and [Issue #125679](https://github.com/openclaw/openclaw/issues/125679) (Matrix infinite sync loop) were closed.

---

## 6. Feature Requests & Roadmap Signals

Strong signals that may shape the next release:

- **[Issue #63930 — Anthropic advisor tool support](https://github.com/openclaw/openclaw/issues/63930) (P1).** Adds generic handling for server-side tool blocks; high compatibility value for Claude-powered agents.
- **[Issue #60572 — Multi-Slot Memory Architecture](https://github.com/openclaw/openclaw/issues/60572) (P3, 3 👍).** Replace single `memory` slot with purpose-specific providers; aligns with the growing memory-growth/degradation bug cluster.
- **[Issue #56781 — Fallback model chain for compaction/summary](https://github.com/openclaw/openclaw/issues/56781).** Compaction fails silently when its single model is rate-limited; directly addresses the large-session stalls in #115546.
- **[Issue #9016 — Expose OpenRouter usage cost to agent runtime](https://github.com/openclaw/openclaw/issues/9016).** Cost transparency per message; popular, uncontroversial, likely candidate.
- **[Issue #16670 — Onboarding must include Memory/Embedding setup](https://github.com/openclaw/openclaw/issues/16670).** Memory is a flagship feature but invisible in `openclaw setup`.
- **[Issue #79168 — Content-based prompt injection scanning](https://github.com/openclaw/openclaw/issues/79168).** Security-forward request; structural XML wrapping is not enough for tool output.
- **[Issue #6625 — Graceful sub-agent timeout](https://github.com/openclaw/openclaw/issues/6625).** Pre-timeout warning to let subagents save progress; pairs naturally with #44925.

Prediction: the next minor release is likely to bundle provider error-handling fixes ([PR #126028](https://github.com/openclaw/openclaw/pull/126028) — consistent request acceptance), compaction/fallback resilience, and a memory-core retention policy, given the concentration of diamond-lobster session-state issues.

---

## 7. User Feedback Summary

**Dominant pain points (by volume and severity):**

- **Silent loss of work/messages** — subagent results vanish ([#44925](https://github.com/openclaw/openclaw/issues/44925)), `write` tool overwrites rather than appends ([#40001](https://github.com/openclaw/openclaw/issues/40001)), migration orphans conversation stores ([#94939](https://github.com/openclaw/openclaw/issues/94939)), unconditional NO_REPLY suppression swallows replies on DMs ([#119401](https://github.com/openclaw/openclaw/issues/119401)).
- **Trust & safety** — cron sessions deliver fabricated output instead of clean failures ([#49876](https://github.com/openclaw/openclaw/issues/49876)); no content-level prompt-injection defense ([#79168](https://github.com/openclaw/openclaw/issues/79168)); Codex tool policy silently drops `AGENTS.md` instructions ([#125431](https://github.com/openclaw/openclaw/issues/125431)).
- **Auth/provider friction** — billing cooldowns outlive recovery ([#70903](https://github.com/openclaw/openclaw/issues/70903)); Anthropic CLI OAuth refresh still dead-ends ([#83598](https://github.com/openclaw/openclaw/issues/83598)); Vertex/Gemini regression ([#38327](https://github.com/openclaw/openclaw/issues/38327)).
- **Performance on long sessions** — 2.5x cold-start regression ([#119087](https://github.com/openclaw/openclaw/issues/119087)); compaction failure death-spirals ([#115546](https://github.com/openclaw/openclaw/issues/115546)); unbounded memory-table growth ([#114612](https://github.com/openclaw/openclaw/issues/114612)).

**Satisfaction signals:** The community is actively participating in release validation ([#125626](https://github.com/openclaw/openclaw/issues/125626)); 84 PRs merged/closed in 24 hours shows a responsive maintainer+bot pipeline; users value the memory architecture conceptually ([#16670](https://github.com/openclaw/openclaw/issues/16670), [#60572](https://github.com/openclaw/openclaw/issues/60572)) and request cost transparency ([#9016](https://github.com/openclaw/openclaw/issues/9016)). A repeated sentiment is "worked in earlier versions" — regressions disproportionately damage trust despite high feature velocity.

---

## 8. Backlog Watch

Long-open, high-impact items needing maintainer decisions:

- **[Issue #70903](https://github.com/openclaw/openclaw/issues/70903)** — P0 provider cooldown persists after billing recovery. Open since 2026-04-24, stale-labeled, no fix PR; needs product decision.
- **[Issue #44925](https://github.com/openclaw/openclaw/issues/44925)** — P1/diamond lobster subagent silent loss. Open since March, parked on maintainer review + product decision.
- **[Issue #62505](https://github.com/openclaw/openclaw/issues/62505)** — P1 coding agent "never completes" regression. Open since April, no fix PR despite user reports.
- **[Issue #40001](https://github.com/openclaw/openclaw/issues/40001)** — P1 `write` tool append mode / cron overwrites. Open since March; needs product decision.
- **[Issue #49876](https://github.com/openclaw/openclaw/issues/49876)** — P1 cron hallucination. Open since March; blocked on security review + live repro.
- **[Issue #83959](https://github.com/openclaw/openclaw/issues/83959)** — P1 Codex app-server startup retries exhaust. Open since May; linked PR open but needs live repro and maintainer review.
- **[Issue #119087](https://github.com/openclaw/openclaw/issues/119087)** — P1 cold-start 2.5x regression; fix PR exists, awaiting maintainer review.
- **Oldest feature debt:** [Issue #6625](https://github.com/openclaw/openclaw/issues/6625) (Feb 1), [Issue #9016](https://github.com/openclaw/openclaw/issues/9016) (Feb 4), [Issue #16670](https://github.com/openclaw/openclaw/issues/16670) (Feb 15) — all P2/P3 awaiting maintainer/product decisions for over six months.

---

*Data source: openclaw/openclaw GitHub activity window ending 2026-08-20; digest based on top-50 issues and top-30 PRs by comment count from 500 updated items each.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-08-20 | **Window:** last 24h | **Projects analyzed:** 12

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is bifurcating into a small set of high-velocity core platforms (OpenClaw, Hermes Agent, CoPaw, ZeroClaw, IronClaw) and a long tail of specialized or dormant agents. Across all active projects, the dominant engineering challenge has shifted from feature breadth to **reliability**: session-state corruption, silent message loss, provider drift, and update-path breakage dominate the top issue lists. Memory lifecycle management and orchestration trust are emerging as the next architectural battlegrounds, with at least five projects actively reworking session ownership, compaction, or memory consolidation. Maintainers are increasingly leaning on bot-assisted contribution pipelines (OpenClaw's ClawSweeper alone merged/closed 84 PRs in 24h) to keep pace with issue volume.

---

## 2. Activity Comparison

*Health score is analyst-assessed: throughput, merge ratio, open critical-bug load, release cadence, backlog hygiene (10 = excellent).*

| Project | Issues updated (24h) | PRs updated (24h) | Merged/closed PRs | Releases | Health | Notes |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 (40 closed) | 500 | 84 | None (validating v2026.8.1-beta.2) | 6.5/10 | Extreme velocity, but P0/P1 "diamond lobster" regression density + triage bottleneck |
| **CoPaw** | 50 (46 closed) | 48 | 17 | None | 7/10 | High triage throughput; closed alarming data-loss report needs transparency follow-up |
| **Hermes Agent** | 50 (9 closed) | 50 | 11 | None | 6.5/10 | Intense stabilization; strong fix rate, but P1 update/install regressions open with no visible hotfix |
| **ZeroClaw** | 43 (2 closed) | 50 | 2* | None (v0.8.4 current) | 7/10 | Heavy RFC/architecture activity; author-blocked PRs are the bottleneck; *incl. 1 withdrawn |
| **IronClaw** | 13 | 39 | 15 | None (1.3.0 promotion closed, artifacts imminent) | 8/10 | Core-team-driven, release-ready; persistent-sandbox epic actively pivoting |
| **NanoClaw** | 3 (all new) | 34 | 24 | None | 7.5/10 | Highest merge ratio in ecosystem; new setup friction around Node 26 |
| **NanoBot** | 5 | 27 | 8 | None | 7/10 | Steady and healthy, but 8 PRs stuck on `conflict` labels incl. one `priority: p0` |
| **Moltis** | 3 (all closed) | 10 | 5 | **2** (20260818.08, 20260818.10) | 8.5/10 | Only project shipping releases; responsive; security fix in flight |
| **LobsterAI** | 6 (all stale) | 8 | 8 (6 were stale closures) | None | 4/10 | Severe open chat regressions unresolved; tracker stale since April |
| **PicoClaw** | 1 (closed) | 5 | 2 | None | 6/10 | Light but meaningful; slow triage (issue took 5 months to close) |
| **NullClaw** | 0 | 1 | 0 | None | 5/10 | Stable but near-dormant; single pending docs fix |
| **ZeptoClaw** | 0 | 0 | 0 | None | 3/10 | No activity in window |

---

## 3. OpenClaw's Position

**Community size — undisputed leader.** OpenClaw's 500 issues + 500 PRs updated in 24h is ~10× the next tier (Hermes, CoPaw, ZeroClaw at 43–50). Its 84 merged/closed PRs/day exceeds most peers' *total open PR queue*. The ecosystem visibly orbits it: at least 7 of the 12 analyzed projects are *Claw-named (NanoClaw, PicoClaw, NullClaw, IronClaw, ZeptoClaw, ZeroClaw, CoPaw/QwenPaw), indicating architectural and naming influence as the de-facto reference implementation.

**Technical approach.** OpenClaw is a unified full-stack agent runtime — gateway + agents + web-UI — with exceptional channel breadth (Discord, Telegram, Matrix, WhatsApp-class integrations) and a conceptualized memory architecture that peers are still catching up on (multi-slot memory RFC #60572, memory-growth bug cluster). It is the only project operating a **bot-assisted maintenance loop at scale**: ClawSweeper-authored PRs span Discord line limits, OpenAI-completions compatibility, context-usage provenance, and Windows Scheduled Tasks.

**Advantages vs. peers:**
- Largest contributor surface and fastest fix throughput (84 PRs/day)
- Broadest provider/channel compatibility surface
- Most mature memory/session architecture conceptually

**Risks vs. peers:**
- Triage bottleneck: a large share of critical issues is parked on `needs-maintainer-review` / `needs-product-decision` with no fix in flight
- Highest severity-inflation density: P0 gateway startup failure (#108435), silent subagent loss (#44925), compaction death-spiral (#115546) coexist with release validation
- Contrast with IronClaw/Moltis: fewer issues per PR, but also fewer shipped releases

---

## 4. Shared Technical Focus Areas

Requirements emerging independently across multiple projects:

| Focus area | Specific needs | Projects (evidence) |
|---|---|---|
| **Session/state reliability** | No silent subagent loss; session persistence across restarts/updates; migration safety; resumability | OpenClaw (#44925, #94939, #125679), Hermes (#89675), NanoBot (#5441), CoPaw (#2723), PicoClaw (#3316), ZeroClaw (RFCs #9487/#9600) |
| **Memory lifecycle** | Multi-slot/typed memory, consolidation without duplication, compaction fallback, bounded growth | OpenClaw (#60572, #115546), NanoBot (#5440, #5441), ZeroClaw (memory-postgres CI), Hermes (#81427) |
| **Provider resilience** | Fallback model chains, vocabulary normalization (reasoning_effort), OAuth/passkey persistence, cost transparency | OpenClaw (#56781, #70903), Hermes (7 PR reasoning-effort cluster), PicoClaw (#3200), CoPaw (#2301), Moltis (#1198/#1212), NanoBot (#5444) |
| **Update/install trust** | Non-destructive updates; runtime version validation; no silent dependency overrides | Hermes (#83529 "update destroys hermes", #90159), OpenClaw (#108435), CoPaw (#3005), LobsterAI (#1582), NanoClaw (#3359) |
| **Windows/desktop support** | Safe process handling, installer reliability, test parity with Linux | Hermes (#89614 svchost kill, #90134), ZeroClaw (#7462 74 failures, #9290, #10148), OpenClaw (#86612), NanoClaw (#3359) |
| **Security hardening** | Credential hygiene, authenticated admin endpoints, prompt-injection defense, least-privilege | ZeroClaw (#9976 credential logging, #9397 permit-none), Moltis (#1216 vault brute-force), OpenClaw (#79168), Hermes (#90144), CoPaw (#6847) |
| **Agent orchestration trust** | Subagent timeout/progress visibility; per-agent channel binding; activation provenance; multi-agent collaboration | OpenClaw (#44925, #6625), CoPaw (#2035), IronClaw (#7752 ActivationProvenance), Hermes (bot-mode SDK fixes) |
| **Execution sandboxing** | Persistent containers, resource limits, local MCP transport | IronClaw (#7732 per-user sandbox), Moltis (#1185/#1188 Apple Container), CoPaw (#7037 Computer Use), IronClaw (#5998 local MCP) |

---

## 5. Differentiation Analysis

| Project | Positioning | Target users | Architecture signature |
|---|---|---|---|
| **OpenClaw** | General-purpose reference platform; "everything agent" | Developers, power users, self-hosters | Unified gateway + agents + web-UI; broadest channel/provider matrix; bot-assisted maintenance |
| **Hermes Agent** | Managed desktop client + SDK with provider normalization | Desktop-first users, bot operators | Electron desktop + headless `serve`; aggressive reasoning-effort clamping; SDK contract discipline |
| **CoPaw** | Chinese-language desktop/mobile agent with local-model emphasis | Chinese-speaking users, Alibaba ecosystem (Qwen), local GPU users | Desktop Console; local inference (RTX 3080 4B at ~9.2/10GB reported); multi-agent orchestration |
| **ZeroClaw** | Security-forward, RFC-driven Rust platform | Technical/security-conscious users, Windows desktop ambitions | Rust; WASM plugin architecture; SOP engine; mTLS secure relay; heavy RFC culture |
| **IronClaw** | Execution/sandbox + coding-agent reliability | Developers needing persistent command environments | Docker Exec per-user containers (~40ms); OMP 6-tool coding contract; checkpoint/lease-fence perf work |
| **NanoClaw** | Node.js channel automation with strong setup/provisioning | Slack/Telegram team workflows | Node.js; Slack agent feature separation; Dial SMS/voice; Cursor provider |
| **NanoBot** | Lightweight personal automation with skills + Dream memory | Privacy-focused individuals, WebUI/TUI users | WebUI/TUI; skills framework; autonomous memory consolidation; Docker OAuth |
| **Moltis** | Platform-specific reliability + channel polish | Apple Container users, WhatsApp/cron automation | Apple Container backend; OpenAI Responses/ Chat Completions routing; vault security |
| **LobsterAI** | Chinese IM ecosystem + Windows installer | Chinese enterprise IM users (DingTalk, Feishu, QQ, WeChat) | IM slash commands; SSE race fixes; installer-focused |
| **PicoClaw** | Compact CLI-first agent | Lightweight/scriptable deployments | CLI (shell completion); Telegram UX; fallback chains |
| **NullClaw / ZeptoClaw** | Minimal/dormant | — | No meaningful differentiation this window |

---

## 6. Community Momentum & Maturity

**Tier 1 — Hyperactive (rapid iteration, high issue volume):**
- **OpenClaw** — 10× everyone else's volume; iterating faster than it can triage. Maturity paradox: most features, most regressions.
- **CoPaw** — closing 46 issues/day; feature-rich but safety-trust deficit after the data-loss report (#2884).
- **ZeroClaw** — architecturally ambitious (WASM, SOP, relay); high RFC discipline, but decision queue (#8692) and author-blocked PRs slow delivery.
- **Hermes Agent** — in explicit stabilization mode; merging 11 PRs/day against v0.20.x regressions.

**Tier 2 — High velocity (core-team driven, release-focused):**
- **IronClaw** — cleanest execution rhythm: 15 merged/closed PRs, release promotion closed, sandbox pivot executed within the day.
- **NanoClaw** — highest merge efficiency (24/34 PRs); young project with install friction.
- **NanoBot** — steady, contributor-friendly, but conflict-label backlog (8 PRs) signals review-bandwidth strain.

**Tier 3 — Steady / maintenance:**
- **Moltis** — only project shipping releases; responsive, security-aware. Small but healthy.
- **PicoClaw** — fixes landing; triage too slow.

**Tier 4 — Stalled / at risk:**
- **LobsterAI** — stale tracker (all issues from April), severe open regressions, unclear whether 6 stale PR closures were merges or abandons.
- **NullClaw / ZeptoClaw** — effectively dormant; single PRs pending for days with zero engagement.

---

## 7. Trend Signals

1. **Silent failure is the #1 trust killer.** Across OpenClaw (subagent results vanish), LobsterAI (same canned reply regardless of input), NanoBot (Dream cursor duplication), and Hermes (silent effort clamping / dependency overrides), users punish invisible misbehavior more than visible failure. Expect "fail loud + retry + notify" to become a design requirement.

2. **Memory is graduating from feature to architecture.** Multi-slot memory (OpenClaw #60572), compaction prefix reuse (NanoBot #5440), memory-postgres CI (ZeroClaw), and memory-provider injection (Hermes #81427) all point to memory as a persistent, pluggable subsystem — not a context-window hack.

3. **Model fallback chains are becoming table stakes.** PicoClaw merged configurable default fallback chains; OpenClaw has a compaction-fallback RFC; CoPaw users demand automatic model switching with ranking ladders; Hermes spent 7 PRs normalizing reasoning-effort vocabulary. Single-provider failure should no longer kill an agent session.

4. **Provider drift is a recurring cost center.** OAuth/passkey gates (NanoBot, ZeroClaw), Responses-vs-Chat Completions routing (Moltis), Vertex/Gemini regressions (OpenClaw), and reasoning-effort vocabulary (Hermes) show providers are a moving target requiring a dedicated abstraction layer.

5. **Update/install paths are under-engineered relative to runtime.** "Working yesterday, destroyed by update" reports (Hermes #83529, CoPaw #3005, OpenClaw #108435, NanoClaw Node 26) suggest release engineering — version validation, rollback, dependency pinning — is the next competitive differentiator.

6. **Windows is a real deployment target and a real liability.** From Hermes' `svchost.exe` kill causing blue screens to ZeroClaw's 74 Windows test failures and NanoClaw's Node 26 compile abort, cross-platform parity is a growing pain point with no project having solved it.

7. **Security defaults are shifting left.** Credential-logging bugs (ZeroClaw #9976), unauthenticated vault endpoints (Moltis #1216), permit-none-by-default group policies (ZeroClaw #9397), and prompt-injection scanning (OpenClaw #79168) indicate security is moving from perimeter (auth) to data-plane (what the agent sees and logs).

8. **Orchestration trust is the next frontier.** Subagent timeout warnings (OpenClaw #6625), activation provenance (IronClaw #7752), per-agent channel binding (CoPaw #2035), and "proof scope = mutation scope" (Hermes #90144) all signal movement toward auditable, disciplined multi-agent execution.

9. **AI-assisted maintenance loops are becoming real.** OpenClaw's ClawSweeper (84 PRs/day) and ZeroClaw's AI-assisted PR pre-review RFC (#9330) suggest the agents themselves are becoming the most efficient contributors to agent infrastructure.

---

*Data sources: project digests for 2026-08-20 covering GitHub activity windows ending 2026-08-20. Health scores are analyst estimates based on throughput, merge ratios, open critical-severity load, release cadence, and backlog hygiene.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-20

## Today's Overview
NanoBot shows steady, healthy activity over the last 24 hours: 5 issues were updated (all open) and 27 PRs saw movement (19 open, 8 merged/closed), with no new releases published. The merged batch concentrates on UX polish and memory/session robustness — including a long-awaited `ask_clarification` tool and WebUI lifecycle fixes — while open PRs continue advancing OAuth/Docker fixes, WebUI observability, and memory consolidation improvements. However, several open bug reports around OAuth in Docker, proxy schemes, and the Dream memory cursor highlight lingering friction in deployment and long-running agent workflows. A notable maintainer bottleneck is visible: multiple PRs carry `conflict` labels, including one tagged `priority: p0`.

## Releases
No new versions were published in the reporting window.

## Project Progress
Eight PRs were merged or closed during the last 24 hours (per the activity summary). The visible closures in this batch:

**Merged/closed:**
- **feat: add `ask_clarification` tool** ([#4527](https://github.com/HKUDS/nanobot/pull/4527)) — ships a built-in clarification tool with focused question/type/context/options parameters; short-circuits agent turns and preserves clarification content through context trimming. Merged after ~2 months in review.
- **perf(memory): reuse conversation prefix for local compaction** ([#5440](https://github.com/HKUDS/nanobot/pull/5440)) — builds idle/token-overflow/`/new` consolidation requests from the ordinary model-facing prefix, reducing redundancy in local compaction.
- **fix(webui): return promptly after Ctrl-C** ([#5438](https://github.com/HKUDS/nanobot/pull/5438)) — fixes slow shutdown by releasing client leases with `wait_for_stop=False` and delegating last-client gateway shutdown to the monitor.
- **fix(tui): expose `/exit` in command menu** ([#5443](https://github.com/HKUDS/nanobot/pull/5443)) — makes the existing `/exit` behavior discoverable via slash-command completion.
- **fix(skills): make weather workflow Windows-safe** ([#5341](https://github.com/HKUDS/nanobot/pull/5341)) — avoids the PowerShell `curl`-alias pitfall in the weather skill examples.
- **feat: add file management features to the settings view** ([#4282](https://github.com/HKUDS/nanobot/pull/4282)) — adds folder browsing for Agent/SOUL configuration files directly from the WebUI settings.

**Active open PRs receiving updates:**
- Docker OAuth persistence fixes ([#5445](https://github.com/HKUDS/nanobot/pull/5445), [#5446](https://github.com/HKUDS/nanobot/pull/5446))
- Dream cursor fix for recovered tool errors ([#5442](https://github.com/HKUDS/nanobot/pull/5442))
- Standard `socks5://` proxy support ([#5439](https://github.com/HKUDS/nanobot/pull/5439))
- Agent task-group cleanup and background-task failure reporting ([#5430](https://github.com/HKUDS/nanobot/pull/5430), [#5431](https://github.com/HKUDS/nanobot/pull/5431))
- WebUI turn observability ([#5420](https://github.com/HKUDS/nanobot/pull/5420)) and follow-up suggestions ([#5408](https://github.com/HKUDS/nanobot/pull/5408))

## Community Hot Topics
- **Issue #2493 — "LANGSMITH is not working (anymore) after latest update"** — the most active discussion this cycle (7 comments, 1 👍). Removal of `litellm_provider.py` broke langchain.com integration. Open since 2026-03-25 and still unresolved, this is the project's oldest touched issue. [Link](https://github.com/HKUDS/nanobot/issues/2493)
- **Issue #5425 — "Support legacy `socks://` proxy URLs"** — reflects a concrete enterprise deployment need: custom OpenAI-compatible providers behind proxies using the common `socks://` alias fail before requests reach the provider. [Link](https://github.com/HKUDS/nanobot/issues/5425)
- **PR #4853 — `nano_timer` core tool** — a long-running feature request (UTC/local time, timezone, calendar fields) with active community interest, currently blocked by merge conflicts after 6+ weeks. [Link](https://github.com/HKUDS/nanobot/pull/4853)

## Bugs & Stability
Ranked by severity and user impact:

1. **Regression: LangSmith integration broken** ([#2493](https://github.com/HKUDS/nanobot/issues/2493)) — open since March 2026; the removal of `litellm_provider.py` broke langchain.com connectivity. No linked fix PR yet; the longest-running unresolved regression.
2. **OpenAI OAuth login fails in Docker** ([#5444](https://github.com/HKUDS/nanobot/issues/5444)) — OAuth callback flow fails inside containers. Two fix PRs in flight: [#5446](https://github.com/HKUDS/nanobot/pull/5446) (route Codex OAuth token storage through nanobot's data dir) and [#5445](https://github.com/HKUDS/nanobot/pull/5445) (persist OAuth client data via XDG in Docker).
3. **Dream memory cursor permanently blocked by recovered tool errors** ([#5441](https://github.com/HKUDS/nanobot/issues/5441)) — a single errored tool call (e.g., `edit_file` with stale `old_text`) that is later retried successfully still marks the whole run as "did not complete", so `memory/.dream_cursor` never advances and the same history batch is reprocessed, duplicating memory edits. Fix PR [#5442](https://github.com/HKUDS/nanobot/pull/5442) advances the cursor on recovered errors and adds diagnostics for incomplete runs.
4. **Legacy `socks://` proxy URLs unsupported** ([#5425](https://github.com/HKUDS/nanobot/issues/5425)) — proxy configs using `socks://` alias fail before reaching custom OpenAI-compatible providers. Related PR [#5439](https://github.com/HKUDS/nanobot/pull/5439) enables HTTPX SOCKS support but intentionally accepts only standard `socks5://`, so the alias case remains open.

## Feature Requests & Roadmap Signals
- **Paid security-scan MCP integration** ([#5447](https://github.com/HKUDS/nanobot/issues/5447)) — a user proposes integrating a Solana x402 micropayment security scanner ("ScanPay") as a paid MCP/x402 service with an "AgentBridge" job manager. Signals growing demand for agentic payments and monetizable MCP tooling.
- **`nano_timer` core tool** ([PR #4853](https://github.com/HKUDS/nanobot/pull/4853)) — dependency-free time/timezone/calendar tool with IANA timezone and DST handling; likely to land once conflict labels are resolved.
- **Manual-only skill invocation** ([PR #5405](https://github.com/HKUDS/nanobot/pull/5405)) — `disable-model-invocation: true` frontmatter for side-effecting skills (deploy, publish); aligns with enterprise guardrail needs.
- **WebUI follow-up suggestions** ([PR #5408](https://github.com/HKUDS/nanobot/pull/5408)) — provider-neutral, ephemeral follow-up prompts after successful turns, matching the DeerFlow interaction pattern.
- **WebUI turn observability** ([PR #5420](https://github.com/HKUDS/nanobot/pull/5420)) — per-turn answer surfaces with ordered reasoning/tool/file-edit activity, provider usage accumulation, and interrupted-work recovery.

## User Feedback Summary
- **Deployment friction is the loudest signal.** Docker OAuth failures ([#5444](https://github.com/HKUDS/nanobot/issues/5444)) and proxy-scheme incompatibility ([#5425](https://github.com/HKUDS/nanobot/issues/5425)) show real pain around containerized setups and enterprise-network environments.
- **Memory reliability concerns.** The Dream duplication issue ([#5441](https://github.com/HKUDS/nanobot/issues/5441)) is trust-breaking for users relying on long-running autonomous memory, as recovered errors cause repeated re-processing of the same history batch.
- **Compatibility regressions linger.** The LangSmith/LangChain break ([#2493](https://github.com/HKUDS/nanobot/issues/2493)) has gone unaddressed for months, creating latent dissatisfaction among LangChain-ecosystem users.
- **Encouraging contributor engagement.** Community PRs landing UX fixes (TUI `/exit`, settings file management, Windows-safe weather skill) and ambitious proposals (paid MCP security scanning) indicate an active and invested contributor base.

## Backlog Watch
- **[#2493](https://github.com/HKUDS/nanobot/issues/2493) — LangSmith regression** (open since 2026-03-25, 7 comments): the oldest active issue in this window; needs an official triage decision or status update.
- **[PR #4853](https://github.com/HKUDS/nanobot/pull/4853) — `nano_timer` core tool** (open since 2026-07-08, `conflict`): polished, dependency-free feature blocked by merge conflicts for over six weeks.
- **[PR #5271](https://github.com/HKUDS/nanobot/pull/5271) — prevent stale background task saves from overwriting session data** (open since 2026-08-06, `priority: p0`, `conflict`): a data-loss-prevention fix with p0 severity still stuck behind a conflict label.
- **Conflict-label bottleneck:** eight PRs currently carry `conflict` labels (including [#5403](https://github.com/HKUDS/nanobot/pull/5403), [#5379](https://github.com/HKUDS/nanobot/pull/5379), [#5257](https://github.com/HKUDS/nanobot/pull/5257)); two conflict-tagged PRs ([#4527](https://github.com/HKUDS/nanobot/pull/4527), [#4282](https://github.com/HKUDS/nanobot/pull/4282)) merged this cycle, but the volume suggests maintainers need dedicated time for rebasing and merging otherwise-complete work.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-20

## Today's Overview

Hermes Agent is in a high-intensity stabilization phase: 50 issues and 50 PRs were updated in the last 24 hours, with 9 issues and 11 PRs moving to closed/merged status. No new release was published, so the focus remains on repairing existing v0.20.x behavior rather than shipping net-new versions. The dominant themes are Desktop session/profile reliability, reasoning-effort vocabulary bugs across many providers, Windows-specific crash risks, and SDK contract fixes. Maintainer responsiveness appears strong for bot-mode and reasoning-effort issues, while several P1 update/install regressions remain open with no visible hotfix in the provided snapshot.

## Releases

No new releases. There are no changelog entries, breaking changes, or migration notes to report for 2026-08-20.

## Project Progress

11 PRs moved to closed/merged in the last 24 hours. The most significant landings:

- **Reasoning-effort bug class substantially fixed**
  - [PR #90330](https://github.com/NousResearch/hermes-agent/pull/90330) — fixes `reasoning_effort: ultra` no longer returning HTTP 400 on non-Anthropic wires.
  - [PR #89509](https://github.com/NousResearch/hermes-agent/pull/89509) — caps Hermes-internal `ultra` level at the wire vocabulary accepted by OpenAI-compatible APIs.
  - [PR #80291](https://github.com/NousResearch/hermes-agent/pull/80291) — clamps `ultra`/`max` to `high` for custom OpenAI-compatible providers that reject extended efforts.
  - [PR #70182](https://github.com/NousResearch/hermes-agent/pull/70182) — fixes GLM `reasoning_effort: ultra` and drops empty `tool_calls` keys.
  - [PR #70079](https://github.com/NousResearch/hermes-agent/pull/70079) — clamps `ultra` → `max` for all models, not just GPT-5.6.
  - [PR #74558](https://github.com/NousResearch/hermes-agent/pull/74558) — steps Copilot/GitHub Models effort down instead of clamping to the weaker `medium`.

- **Desktop / SDK contract fixes**
  - [PR #90311](https://github.com/NousResearch/hermes-agent/pull/90311) and [PR #89893](https://github.com/NousResearch/hermes-agent/pull/89893) — fix `host.connections()` returning the documented connection list; completes bot-mode “Create on” picker fix for [issue #89823](https://github.com/NousResearch/hermes-agent/issues/89823).
  - [PR #90326](https://github.com/NousResearch/hermes-agent/pull/90326) — fixes stale bot roster activity showing “6d ago” for canonical Bot Chats.

- **Tool provider routing**
  - [PR #90317](https://github.com/NousResearch/hermes-agent/pull/90317) — makes the provider selected in `hermes tools` authoritative; credential presence no longer silently reroutes tool dispatch.

Closed issues today also include the P0 Codex `prompt_cache_retention` failure ([#89897](https://github.com/NousResearch/hermes-agent/issues/89897)), the Gateway restart-loop/state.db FTS5 corruption ([#89034](https://github.com/NousResearch/hermes-agent/issues/89034)), the Cron reasoning-effort translation bug ([#89503](https://github.com/NousResearch/hermes-agent/issues/89503)), and the OpenRouter `image_gen` migration ([#57504](https://github.com/NousResearch/hermes-agent/issues/57504)).

## Community Hot Topics

- [Issue #84834 — Webhook Feature Package meta-issue](https://github.com/NousResearch/hermes-agent/issues/84834) — 19 comments. Large graph-gated repair effort spanning ingress, execution, delivery, configuration, UI, deployment, and docs. This is a strong signal that users want the webhook surface treated as a first-class, cross-cutting feature, not a set of isolated fixes.

- [Issue #89675 — Desktop: no sessions load for any agent profile after update](https://github.com/NousResearch/hermes-agent/issues/89675) — 11 comments, 2 👍. A post-update regression where the remote backend is spawned without `--profile`, so session queries target the wrong profile. This is currently one of the most painful user-facing stability issues.

- [Issue #79564 — Discord Feature Parity & Alignment Campaign](https://github.com/NousResearch/hermes-agent/issues/79564) — 8 comments. Meta-campaign for Discord API v10 / discord.py 2.7.1 parity. Signals continued community demand for full Discord feature completeness.

- [Issue #83529 — `hermes update` destroys hermes](https://github.com/NousResearch/hermes-agent/issues/83529) — 6 comments. Catastrophic update failure on Debian Trixie; user reports it was working the day before. Update-path trust is a clear pain point.

- [Issue #89614 — Windows: Hermes kills `svchost.exe` via stale-PID `taskkill /F /PID`](https://github.com/NousResearch/hermes-agent/issues/89614) — 5 comments. Windows 11 blue-screen-level severity caused by killing a stale PID that has been reused by a critical system process.

- On the PR side, the most actively discussed entries are [PR #90317](https://github.com/NousResearch/hermes-agent/pull/90317) (provider routing), [PR #90330](https://github.com/NousResearch/hermes-agent/pull/90330) (reasoning-effort vocabulary), [PR #90343](https://github.com/NousResearch/hermes-agent/pull/90343) (bot-mode room profile config), and [PR #90342](https://github.com/NousResearch/hermes-agent/pull/90342) (MCP registry refresh after reconnect). The underlying theme is elimination of silent behavior: silent provider rerouting, silent effort clamping, stale MCP registries, and stale session configs.

## Bugs & Stability

Ranked by severity:

### Critical / P0
- [Issue #89897 — Codex follow-ups send unsupported `prompt_cache_retention` to `gpt-5.6-sol`](https://github.com/NousResearch/hermes-agent/issues/89897) — closed in the last 24 hours. Intermittent HTTP 400 after the first successful request. No fix PR is visible in the provided top-20 PR list.

### High / P1
- [Issue #89675 — Desktop shows no sessions for any agent profile after update](https://github.com/NousResearch/hermes-agent/issues/89675) — open, 11 comments. Backend spawned without `--profile`. No direct fix PR is visible in the snapshot.
- [Issue #83529 — `hermes update` destroys hermes](https://github.com/NousResearch/hermes-agent/issues/83529) — open, 6 comments. Failing catastrophically on Debian Trixie.
- [Issue #89614 — Windows stale-PID `taskkill` kills `svchost.exe` → repeated 0xEF blue screens](https://github.com/NousResearch/hermes-agent/issues/89614) — open, 5 comments. Needs urgent Windows process-safety guard.
- [Issue #89034 — Gateway restart-loop + s6 no-backoff → state.db FTS5 corruption](https://github.com/NousResearch/hermes-agent/issues/89034) — closed in snapshot. No associated fix PR appears in the provided top-20 list.

### Medium / P2
- [Issue #90299 — False-positive `TERMINAL_CWD` deprecation warning on every startup](https://github.com/NousResearch/hermes-agent/issues/90299) — open.
- [Issue #90159 — `hermes update` installs `mcp 2.0.0` over pinned `mcp==1.28.1`, breaking HTTP/SSE MCP servers](https://github.com/NousResearch/hermes-agent/issues/90159) — open. Silent dependency regression.
- [Issue #90229 — Desktop file tree stuck on skeleton after boot](https://github.com/NousResearch/hermes-agent/issues/90229) — open.
- [Issue #90268 — Kanban/tool workers invisible in Desktop UI](https://github.com/NousResearch/hermes-agent/issues/90268) — open.
- [Issue #90134 — Windows desktop build fails in `blockmap.js`](https://github.com/NousResearch/hermes-agent/issues/90134) — open.
- [Issue #89823 — Bot-mode “Create on” picker never appears](https://github.com/NousResearch/hermes-agent/issues/89823) — closed and fixed by [PR #89893](https://github.com/NousResearch/hermes-agent/pull/89893) / [PR #90311](https://github.com/NousResearch/hermes-agent/pull/90311).
- [Issue #70058](https://github.com/NousResearch/hermes-agent/issues/70058), [Issue #74295](https://github.com/NousResearch/hermes-agent/issues/74295), and [Issue #89503](https://github.com/NousResearch/hermes-agent/issues/89503) — reasoning-effort bugs closed and fixed by the reasoning-effort PR cluster.

### Lower / P3
- [Issue #90316 — Remote-primary Desktop still starts a loopback agent for “This device”](https://github.com/NousResearch/hermes-agent/issues/90316) — open.
- [Issue #90333 — Google sign-in passkey 2FA fails during Desktop reauth through Nous portal](https://github.com/NousResearch/hermes-agent/issues/90333) — open.
- [Issue #85605 — Desktop Electron cannot connect to `hermes serve` headless backend](https://github.com/NousResearch/hermes-agent/issues/85605) — open.
- [Issue #81427 — Memory provider tools not injected in Desktop sessions](https://github.com/NousResearch/hermes-agent/issues/81427) — open.
- [Issue #89497 — Room bots hang on “thinking” then falsely report “out of Nous credits”](https://github.com/NousResearch/hermes-agent/issues/89497) — open; a related fix PR exists at [PR #90343](https://github.com/NousResearch/hermes-agent/pull/90343).
- [Issue #84483 — Desktop cannot pair with self-hosted OIDC remote backend](https://github.com/NousResearch/hermes-agent/issues/84483) — open.

No fix PR is visible in the provided snapshot for the highest-severity open regressions: #89675, #83529, and #89614.

## Feature Requests & Roadmap Signals

- [Issue #90007 — Resource-aware low-memory Windows execution profile](https://github.com/NousResearch/hermes-agent/issues/90007) — `needs-decision`. Users want a single operator-facing profile that coordinates context size, local/fallback providers, gateway memory, and auxiliary work. This is a strong candidate for a future release if accepted.
- [Issue #82140 — Expose resolved Desktop connection mode to skills, MCP, and plugins](https://github.com/NousResearch/hermes-agent/issues/82140) — `local` vs `remote` mode should be available to extension surfaces.
- [Issue #90144 — Proof scope must equal mutation scope](https://github.com/NousResearch/hermes-agent/issues/90144) — architecture-level request to prevent narrow observations from authorizing broad mutations.
- [Issue #84834 — Webhook Feature Package](https://github.com/NousResearch/hermes-agent/issues/84834) — meta-issue; likely roadmapped as a coordinated cross-surface feature.
- [Issue #79564 — Discord Feature Parity campaign](https://github.com/NousResearch/hermes-agent/issues/79564) — meta-issue; ongoing Discord API v10 alignment.
- [Issue #57504 — OpenRouter dedicated Image API for `image_gen`](https://github.com/NousResearch/hermes-agent/issues/57504) — closed with 5 👍, indicating strong user demand for broader image-generation model access.
- Open PRs [PR #90335](https://github.com/NousResearch/hermes-agent/pull/90335), [PR #90336](https://github.com/NousResearch/hermes-agent/pull/90336), and [PR #90337](https://github.com/NousResearch/hermes-agent/pull/90337) suggest the next minor release may include execution-discipline guidance for all tool-capable models, earlier MCP result spilling at 50K chars, and wall-clock run budgets to prevent computed-but-unspoken answers.

## User Feedback Summary

- **Update reliability is the biggest trust issue.** Users report “working yesterday” installations being destroyed by `hermes update` ([#83529](https://github.com/NousResearch/hermes-agent/issues/83529)) and Desktop losing all sessions after an update ([#89675](https://github.com/NousResearch/hermes-agent/issues/89675)).
- **Windows safety is a major concern.** The `svchost.exe` blue-screen report ([#89614](https://github.com/NousResearch/hermes-agent/issues/89614)) is the most alarming user-facing stability issue in the current window.
- **Silent behavior is unpopular.** Users repeatedly hit silent clamping, silent fallback, silent rerouting, and silent dependency overrides — e.g. reasoning effort clamping ([#74295](https://github.com/NousResearch/hermes-agent/issues/74295), [#70058](https://github.com/NousResearch/hermes-agent/issues/70058)), MCP SDK pin replacement ([#90159](https://github.com/NousResearch/hermes-agent/issues/90159)), and tool provider rerouting ([PR #90317](https://github.com/NousResearch/hermes-agent/pull/90317)).
- **Desktop remote/self-hosted workflows are still rough around onboarding.** Self-hosted OIDC pairing ([#84483](https://github.com/NousResearch/hermes-agent/issues/84483)), macOS remote-client onboarding ([#85422](https://github.com/NousResearch/hermes-agent/issues/85422)), and headless `hermes serve` handshakes ([#85605](https://github.com/NousResearch/hermes-agent/issues/85605)) all need smoother flows.
- **Positive signal:** the bot-mode SDK contract issue ([#89823](https://github.com/NousResearch/hermes-agent/issues/89823)) and the reasoning-effort bug cluster were addressed quickly, with multiple PRs closed within the same 24-hour period.

## Backlog Watch

These items have been open for a while with limited comment traffic and likely need maintainer attention:

- [Issue #79539 — Windows missing base interpreter recovery loops into impossible `hermes-setup --update`](https://github.com/NousResearch/hermes-agent/issues/79539) — open since 2026-08-05; follow-up to #58749.
- [Issue #85605 — Desktop Electron cannot connect to `hermes serve` headless backend](https://github.com/NousResearch/hermes-agent/issues/85605) — open since 2026-08-13.
- [Issue #81427 — Memory provider tools not injected in Desktop sessions](https://github.com/NousResearch/hermes-agent/issues/81427) — open since 2026-08-08.
- [Issue #84483 — Desktop remote backend pairing with self-hosted auth provider](https://github.com/NousResearch/hermes-agent/issues/84483) — open since 2026-08-12.
- [PR #79650](https://github.com/NousResearch/hermes-agent/pull/79650) and [PR #79651](https://github.com/NousResearch/hermes-agent/pull/79651) — Discord `adapter.py` god-file refactor slices opened 2026-08-05 and still appear unmerged.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-20

## Today's Overview
As of 2026-08-20, PicoClaw shows light but meaningful activity: 1 issue update and 5 PR updates in the last 24 hours, with no new releases. The long-running completion-flow bug (#1305) was closed, and two PRs (#3341, #3200) were closed/merged, advancing Telegram command UX and configurable model fallback chains. Three PRs remain open, including two stale-labeled fixes (#3316, #3315) that are waiting on maintainer attention. Overall project health is moderate: user-facing fixes are landing, but triage of older PRs appears slow.

## Releases
No new releases were published in this period.

## Project Progress
- [#3341](https://github.com/sipeed/picoclaw/pull/3341) — **Closed/merged:** `feat(telegram): add interactive command UX and formatted ephemeral fallback`. Improves Telegram command experience by reducing CLI-style grammar complexity for `/memory`, cleaning up `/help` output, and adding a formatted ephemeral fallback for structured content.
- [#3200](https://github.com/sipeed/picoclaw/pull/3200) — **Closed/merged:** `feat(models): add configurable default fallback chain`. Adds a dedicated default-chain workflow on the models page in the web UI, with backend persistence for default model, fallback model, ordering, and saving.
- [#1305](https://github.com/sipeed/picoclaw/issues/1305) — **Closed:** Bug reporting that a new banner printed to STDOUT broke shell completion flow (e.g., `picoclaw completion zsh`). Closure resolves a long-standing CLI interoperability issue.

## Community Hot Topics
- [#1305](https://github.com/sipeed/picoclaw/issues/1305) — **Most active issue** with 4 comments. Users reported the new banner breaking `picoclaw completion zsh`, highlighting the need for clean STDOUT in CLI tools and shell completion compatibility. It is now closed.
- [#3316](https://github.com/sipeed/picoclaw/pull/3316) — Open, stale-labeled PR about routed-agent context not respecting history, summarization, compression, or seahorse bootstrap. No recorded comments, but it addresses a significant user-facing bug in Discord-routed agent sessions.
- [#3315](https://github.com/sipeed/picoclaw/pull/3315) — Open, stale-labeled PR adding Telegram topic support for private bot chats. No recorded comments, but it fills a clear functional gap for Telegram users with forum-topic-enabled private chats.

## Bugs & Stability
1. **Routed-agent memory/compaction failure** — [#3316](https://github.com/sipeed/picoclaw/pull/3316)  
   High severity: dispatched agents do not remember previous messages, and auto-compaction never triggers regardless of message count or token usage. Fix PR exists but is stale and open.
2. **Banner breaks shell completion** — [#1305](https://github.com/sipeed/picoclaw/issues/1305)  
   Medium/high severity for scriptable CLI usage: banner output to STDOUT contaminated `picoclaw completion zsh`. This issue is now closed.
3. **Inert LINE webhook settings** — [#3329](https://github.com/sipeed/picoclaw/pull/3329)  
   Medium severity: `line.settings.webhook_host` / `webhook_port` are declared, defaulted, and env-bound but never read, silently misleading users. The proposed fix warns on inert settings instead of seeding them.
4. **Telegram topics ignored in private bot chats** — [#3315](https://github.com/sipeed/picoclaw/pull/3315)  
   Medium severity for affected Telegram users: topic detection only works when `Chat.IsForum` is true, missing private chats where Telegram provides `IsTopicMessage`. Fix PR is open.

## Feature Requests & Roadmap Signals
- [#3341](https://github.com/sipeed/picoclaw/pull/3341) — Interactive Telegram command UX and ephemeral fallback suggests a push toward reducing Telegram cognitive load and improving chat-friendly command interfaces.
- [#3200](https://github.com/sipeed/picoclaw/pull/3200) — Configurable default model fallback chain indicates stronger web UI model management and resilience features are on the roadmap.
- [#3315](https://github.com/sipeed/picoclaw/pull/3315) — Telegram private-chat topic support is a targeted platform compatibility improvement likely to be included in an upcoming release.

These merged/closed PRs and open requests suggest the next PicoClaw version may include Telegram UX enhancements, model fallback configuration, and improved topic handling.

## User Feedback Summary
Users are reporting practical, real-world friction:
- CLI completion is easily broken by non-essential banner output.
- Routed agents lose context and fail to compact long sessions in Discord channels.
- LINE webhook configuration fields exist but do nothing, causing setup confusion.
- Telegram topic mode does not work in private bot chats.
- Telegram command syntax is too verbose and unfriendly for interactive use.

The positive signal is that community contributors are actively submitting fixes for these issues, indicating an engaged user/developer base.

## Backlog Watch
- [#3316](https://github.com/sipeed/picoclaw/pull/3316) — Open since 2026-08-03, stale-labeled, no visible maintainer comments. Fix addresses critical routed-agent context loss and needs attention.
- [#3315](https://github.com/sipeed/picoclaw/pull/3315) — Open since 2026-08-03, stale-labeled, no visible maintainer comments. Needed for Telegram private-chat topic support.
- [#3329](https://github.com/sipeed/picoclaw/pull/3329) — Open since 2026-08-11, no recorded comments. Fixes misleading LINE webhook settings and should be reviewed soon.
- [#1305](https://github.com/sipeed/picoclaw/issues/1305) — Took over five months from creation to closure, suggesting issue triage can be slow; maintainers should prioritize newer stale PRs to avoid similarly long delays.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

## 1. Today's Overview

NanoClaw is in a high-activity phase: 34 PRs were updated in the last 24 hours, with 24 moving to merged/closed and 10 remaining open. Only 3 new issues were filed, all reporting setup- or delivery-related bugs, and no releases were published. Core-team work centered on Slack agent feature separation, setup robustness, provisioning metadata, Telegram group onboarding, and current Node runtime support. The project looks healthy overall, though the day’s open issues point to real friction around modern Node installs and non-interactive setup environments.

## 2. Releases

None in the last 24 hours.

## 3. Project Progress

Merged/closed PRs in the last 24 hours reflect concentrated work on Slack setup/provisioning, Telegram group flows, and install-time fixes. Notable examples:

- **Slack agents split** — [#3358](https://github.com/nanocoai/nanoclaw/pull/3358) separates the base Slack adapter (`/add-slack`) from the agents feature (`/slack-agent-flow`), with [#3357](https://github.com/nanocoai/nanoclaw/pull/3357) making `--slack-agents` install the full agents feature.
- **Slack channel invite behavior** — [#3342](https://github.com/nanocoai/nanoclaw/pull/3342) now declines owner-absent Slack channel invites instead of escalating them to approve/reject cards.
- **Slack service metadata** — [#3345](https://github.com/nanocoai/nanoclaw/pull/3345) and [#3344](https://github.com/nanocoai/nanoclaw/pull/3344) add optional client/origin metadata to Slack service requests and app creation provisioning.
- **Approvals/instance correctness** — [#3340](https://github.com/nanocoai/nanoclaw/pull/3340) records the delivering instance on `pending_approvals`; [#3341](https://github.com/nanocoai/nanoclaw/pull/3341) derives the Slack service from the credential’s issuer.
- **Setup fail-closed behavior** — [#3339](https://github.com/nanocoai/nanoclaw/pull/3339) makes stored sign-in failure fail closed rather than silently pass.
- **Telegram group connections** — [#3351](https://github.com/nanocoai/nanoclaw/pull/3351) adds an owner/global-admin `/connect_group` flow; [#3352](https://github.com/nanocoai/nanoclaw/pull/3352) documents and validates it.
- **Setup compatibility fix** — [#3350](https://github.com/nanocoai/nanoclaw/pull/3350) fixes setup ping folder compatibility.

## 4. Community Hot Topics

No comment/reaction counts are visible in the provided data, so “hot” is measured by recent activity and issue/PR state.

- **Current Node.js install failures** — [#3359](https://github.com/nanocoai/nanoclaw/issues/3359): Node 26 passes the setup check but `better-sqlite3` cannot build, aborting bootstrap. This is the most direct user-facing blocker: the Node check only enforces a lower bound.
- **Headless/non-login setup breaks** — [#3354](https://github.com/nanocoai/nanoclaw/issues/3354): setup leaves 0-byte channel files on failed `git show` copies, and a onecli check runs before its own PATH fix. This indicates setup implicitly assumes an interactive login shell.
- **Dial SMS delivery misreporting** — [#3353](https://github.com/nanocoai/nanoclaw/issues/3353): outbound SMS accepted by Dial is recorded as delivered even if the carrier later rejects it, leaving agent/owner unaware and retry budget untouched.
- **Long-running Dial channel feature PRs** — [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) and [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) were updated again yesterday. They add a Dial channel adapter for SMS + AI voice calls and setup picker/skills integration.

Underlying need: users want setup that validates the full Node toolchain, works over non-interactive SSH, and treats carrier acceptance as final only when actually delivered.

## 5. Bugs & Stability

| Severity | Item | Summary | Status |
|---|---|---|---|
| **High** | [#3359](https://github.com/nanocoai/nanoclaw/issues/3359) | Fresh install aborts on Node 26 because `better-sqlite3` 11.10.0 cannot compile; setup’s Node check only has a lower bound. | Open; [#3360](https://github.com/nanocoai/nanoclaw/pull/3360) proposes upgrading to `better-sqlite3` 13.0.3 and raising the host minimum to Node 22. |
| **Medium-High** | [#3354](https://github.com/nanocoai/nanoclaw/issues/3354) | Non-login/headless setup leaves 0-byte channel files and runs a onecli check before PATH is ready. | Open; no directly matching fix PR in this snapshot. |
| **Medium** | [#3353](https://github.com/nanocoai/nanoclaw/issues/3353) | Dial SMS rejected by carrier after send is still marked `delivered`; no retry or owner notification. | Open; no fix PR visible. |

The #3359/#3360 pair is the clearest stability signal: the project is actively moving to support current Node runtimes and is raising the supported minimum.

## 6. Feature Requests & Roadmap Signals

Recent PRs point to several roadmap themes likely to land soon:

- **Cursor agent provider** — [#3356](https://github.com/nanocoai/nanoclaw/pull/3356) adds a Cursor Agent SDK payload, while [#3355](https://github.com/nanocoai/nanoclaw/pull/3355) adds a `/add-cursor` provider setup skill.
- **Agent mailbox seam** — [#3349](https://github.com/nanocoai/nanoclaw/pull/3349) introduces an agent mailbox seam and registry, keeping SQLite as the included implementation but allowing alternatives.
- **Slack agents as an explicit install mode** — `--slack-agents` (#3357, merged/closed) is now the boundary line between base Slack and full agents.
- **Custom decline notification copy** — [#3361](https://github.com/nanocoai/nanoclaw/pull/3361) exposes `dedupeKey`, `declineText`, and `fyiText` on the `declineAndNotify` seam, with [#3362](https://github.com/nanocoai/nanoclaw/pull/3362) validating Slack agent flow prerequisites.

Predictions: Cursor provider support and the agent mailbox abstraction are the strongest next-version signals. The Dial channel feature pair remains pending and is updated regularly.

## 7. User Feedback Summary

The main user-reported pain points, all from glifocat, are install- and correctness-focused:

- Node 26 is current on Homebrew macOS arm64, but NanoClaw’s setup check says OK and then fails during `better-sqlite3` compilation — a frustrating “pass then break” experience.
- Clean non-login SSH installs are not fully supported: setup assumes an interactive login shell and produces corrupted 0-byte files or runs commands before PATH is fixed.
- Dial delivery status is not trustworthy for outbound SMS: a carrier rejection after send does not update status, consume retry budget, or notify the owner/agent.

No positive or satisfaction-oriented feedback was captured in this snapshot; the signal is strongly weighted toward setup robustness and channel delivery correctness.

## 8. Backlog Watch

There are no stale open issues in this snapshot — all three issues were created on 2026-08-19. The backlog concern is PRs, not issues:

- **Dial channel feature pair** — [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) and [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) have been open since **2026-07-14** and were both updated on 2026-08-19. These are substantial feature/skill additions; they need a maintainer decision or continuation signal.
- **Setup Node range handling** — [#3249](https://github.com/nanocoai/nanoclaw/pull/3249), open since 2026-08-14 and updated yesterday, directly addresses existing Node installs outside the supported range. It is closely related to the newly reported #3359 and deserves priority review.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-20

## 1. Today's Overview
NullClaw experienced a notably quiet 24-hour window. **Zero issues** were updated (no new bugs reported, no active threads), **zero releases** were published, and only **one pull request** saw activity — a documentation/readme fix that remains open. The absence of merged PRs or closed issues suggests a low-velocity period, possibly a maintenance lull or mid-cycle pause. Overall project health appears stable, but the single open PR signals a small backlog of community-contributed fixes awaiting maintainer attention.

---

## 2. Releases
No new releases were published in the last 24 hours. This section is omitted.

---

## 3. Project Progress
**No PRs merged or closed today.** The single PR in flight is:

- **[#989 — fix: restore broken star history chart](https://github.com/nullclaw/nullclaw/pull/989)** (OPEN)
  - Author: FaintFlower | Created/Updated: 2026-08-19
  - The PR addresses a broken README star-history visualization caused by GitHub stargazer API access restrictions. It redirects the chart to `star-history.dera.page`, a token-free alternative that renders without authentication.

No feature work or bug-fix milestones were advanced to `main` during this window.

---

## 4. Community Hot Topics
Activity is minimal; the only item in the last 24 hours is **PR #989**, which has **0 comments** and **0 reactions** so far.

- **[#989 — fix: restore broken star history chart](https://github.com/nullclaw/nullclaw/pull/989)** — FaintFlower

**Analysis:** While engagement is near zero, the PR itself reveals a subtle but meaningful signal: the project's README has been displaying a broken chart for some time, and the GitHub stargazer API (now rate-limited/restricted for unauthenticated use) is the root cause. The community (or contributor) cares about the project's public presentation — a sign of healthy stewardship even in a quiet period. The lack of comments may indicate maintainer bandwidth constraints or that the PR hasn't received review attention yet.

---

## 5. Bugs & Stability
No crashes, regressions, or runtime bugs were reported today through Issues. However, one **non-code defect** was identified and addressed via PR:

| Severity | Issue | Status | Fix PR |
|---|---|---|---|
| **Medium** (visual/documentation) | README star-history chart fails to render due to GitHub stargazer API access restrictions | Open | [#989](https://github.com/nullclaw/nullclaw/pull/989) (open, unmerged) |

**Notes:**
- This is a project-presentation defect rather than a runtime bug — no user-facing functionality is degraded.
- The fix exists but has **not been merged**, so the broken chart remains live on the README.

---

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed in this window. However, the existence of PR #989 hints at two relevant signals:

- **Integration resilience:** The project's dependence on unauthenticated GitHub APIs is a recurring fragility; contributors may push for more self-hosted or token-free service integrations going forward.
- **Project visibility tooling:** The emphasis on restoring the star-history chart suggests maintainers/contributors value project popularity metrics and README polish — expect potential future work on badges, analytics, or alternative metric widgets.

**Prediction:** If the maintainers accept the star-history fix (likely, as it's low-risk), the next release or commit batch may also include similar API-dependency cleanups elsewhere in the repo. Watch for a follow-up release following the merge.

---

## 7. User Feedback Summary
Direct user feedback is sparse in this window, but the available evidence yields two takeaways:

- **Pain point:** The broken star-history chart on the README has been visible to visitors for an unspecified period, which can erode trust in a project's maintenance health. The contributor's fix is a direct response to this visibility issue.
- **Satisfaction signal:** The existence of a volunteer-submitted PR (rather than maintainer-initiated) indicates a community that notices and acts on project hygiene issues — a mild positive signal for overall engagement.

No complaints, feature praise, or usage reports were logged in the last 24 hours.

---

## 8. Backlog Watch
The following item deserves attention:

- **[#989 — fix: restore broken star history chart](https://github.com/nullclaw/nullclaw/pull/989)** (OPEN, updated 2026-08-19)
  - **Days open:** 1 day (at time of snapshot)
  - **Status:** No reviews, no comments, no reactions.
  - **Why it matters:** The PR fixes a visible defect in the project's primary documentation surface. Low review activity on a trivial, low-risk fix can deter future community contributions. A quick maintainer review and merge (or feedback) would signal responsiveness and keep the contribution pipeline healthy.

No other long-dormant issues or PRs were flagged in this window.

---

*Digest generated from GitHub activity between 2026-08-19 and 2026-08-20. All links reference the NullClaw repository at https://github.com/nullclaw/nullclaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-20

## 1. Today's Overview

IronClaw posted a high-velocity day: 39 PRs updated (15 merged/closed) and 13 issues touched, concentrated on the persistent-sandbox epic (#7732), the capability-response-normalization stack (#7627), and automation preflight. The strongest release signal is the closed promotion PR #7754 moving `1.3.0-rc.2` to stable `1.3.0` — no release artifact is recorded yet, but the cut appears to be in motion. The sandbox design visibly pivoted within the day: per-thread persistent containers (#7741, closed) were superseded by a per-user container implementation (#7751), aligning with the v1.4.0 epic. Overall health is good — activity is core-team-driven with several new contributors (jpdevries, neo-sky) landing real work, and CI instability is being actively fixed rather than ignored.

## 2. Releases

No new releases were published in the last 24 hours. Nota bene: the release-promotion PR #7754 (`chore(release): promote 1.3.0-rc.2 to 1.3.0`) is now closed, so stable **1.3.0** release artifacts may surface imminently. No breaking-change or migration notes are available until the release is formally cut.

## 3. Project Progress

**Merged/closed PRs (visible in this window):**
- [#7754](https://github.com/nearai/ironclaw/pull/7754) — Release promotion `1.3.0-rc.2` → `1.3.0` (version + lockfile only, no production behavior change).
- [#7741](https://github.com/nearai/ironclaw/pull/7741) — Per-thread persistent container with Docker Exec (#7732 Step 1); closed in favor of the per-user model in #7751.
- [#7686](https://github.com/nearai/ironclaw/pull/7686) — PR 1 of the capability-response-normalization plan (#7627): centralized capability outcome processing in `ironclaw_host_runtime` (behavior-preserving refactor).
- [#7491](https://github.com/nearai/ironclaw/pull/7491) — OMP core-tool contract: the model-facing coding surface is now exactly six bare names (`read`, `write`, `edit`, `glob`, `grep`, `bash`), with legacy file tools removed.

**Closed issues (features fixed/landed):**
- [#7602](https://github.com/nearai/ironclaw/issues/7602) — Tier 2: cache the lease-fence token instead of a journal read per transcript write (~11+ reads/turn saved).
- [#7603](https://github.com/nearai/ironclaw/issues/7603) — Tier 3: batch `BeforeModel` checkpoints per-N iterations (~−14 rows/turn).
- [#6993](https://github.com/nearai/ironclaw/issues/6993) — Backend wiring for the OOBE automation-tasks prototype (epic #7044).
- [#7681](https://github.com/nearai/ironclaw/issues/7681) — Slack unlinked-user connect message is now private, removing the manual public round trip.

The performance-tier closings (#7602, #7603) confirm the checkpoint/lease-fence optimization epic (#7591) is being worked top-down.

## 4. Community Hot Topics

| Item | Type | Comments | Signal |
|---|---|---|---|
| [#7732](https://github.com/nearai/ironclaw/issues/7732) | Epic, v1.4.0 | 7 (highest) | Persistent per-user sandbox with `iron-proxy`; defers loop executors |
| [#7603](https://github.com/nearai/ironclaw/issues/7603) | Tier 3 perf | 2 | Checkpoint batching per-N iterations (now closed) |
| [#5998](https://github.com/nearai/ironclaw/issues/5998) | Bug/limitation | 1 | No transport for local on-device MCP servers |
| [#6993](https://github.com/nearai/ironclaw/issues/6993) | Backend wiring | 1 | OOBE automation-tasks backend (now closed) |

Underlying need behind the top item (#7732): the per-command container lifecycle (~1–2.5 s per shell call) is untenable for interactive use, and users need a persistent, per-user workspace across threads. The active PRs [#7751](https://github.com/nearai/ironclaw/pull/7751) (per-user Docker Exec, ~40 ms) and the loopback-MCP PR [#7757](https://github.com/nearai/ironclaw/pull/7757) are the concrete responses drawing attention.

## 5. Bugs & Stability

Ranked by severity:

1. **[#7748](https://github.com/nearai/ironclaw/issues/7748) — "IronClaw got confused and stopped working"** (user-reported via Slack). Vague but high-impact user-facing reliability failure; no repro details and no linked fix PR yet.
2. **[#7745](https://github.com/nearai/ironclaw/issues/7745) — Copilot MCP extension install fails** (`bug_bash_P2`): duplicate catalog entries, `auth_required`, unclear token type. Install-flow correctness issue on the QA LibSQL instance. Related fix work in flight on auth diagnostics: #7692.
3. **[#7736](https://github.com/nearai/ironclaw/issues/7736) — Daily failure taxonomy 2026-08-19**: 169 non-pass pinchbench runs; analysis attributes the dominant score drag to a model limitation (Qwen3.8-27) rather than a harness bug — good news for harness health, but a benchmark ceiling to track.
4. **[#7744](https://github.com/nearai/ironclaw/issues/7744) — Cron job UI missing edit/test buttons** (`bug_bash_P3`): users can view status but cannot edit or manually trigger cron jobs — a functional gap, lower severity.
5. **CI instability** — merge queue stalls were traced to unbounded `apt-get` fetches; fix PR [#7756](https://github.com/nearai/ironclaw/pull/7756) bounds every apt fetch so dark mirrors fail fast instead of hanging the queue.
6. **[#5998](https://github.com/nearai/ironclaw/issues/5998) — local MCP server unreachable** (open since 07-11): stdio rejected, loopback HTTP denied. Fix PR [#7757](https://github.com/nearai/ironclaw/pull/7757) (hosted MCP on literal loopback IP) is open.

No regressions were explicitly flagged in this window; the CI fix and MCP transport are the items most likely to unblock users.

## 6. Feature Requests & Roadmap Signals

- **v1.4.0 flagship — persistent per-user sandbox** ([#7732](https://github.com/nearai/ironclaw/issues/7732)): per-user persistent container with Docker Exec is Step 1; `iron-proxy` and deferred loop executors follow. PR #7751 is the active implementation.
- **Automation creation preflight** ([#7742](https://github.com/nearai/ironclaw/issues/7742), `v1.3.0`, suggested P1): bounded `ready` / `needs_setup` / `needs_input` contract before persistence; implementation PR #7743 open.
- **Subagent activation provenance** ([#7752](https://github.com/nearai/ironclaw/pull/7752)): foundation for background subagents via `ActivationProvenance` (`Human`/`ParentAgent`/`System`) and an `activate()` primitive — no production behavior change yet, but it is the groundwork for autonomous wake capabilities.
- **Design System / Storybook epic** ([#7038](https://github.com/nearai/ironclaw/issues/7038)): Phase 1 integration PR #7750 open; docs proposal #7257 in flight.
- **Local/loopback MCP support**: requirement #5998 is being answered by #7757; likely to land in the next minor release.

Prediction: **1.3.0 stable** (with automations preflight, OMP coding-tool contract, and the MCP loopback fix) is the near-term cut; the **v1.4.0 persistent sandbox** is the headline roadmap item already under active construction.

## 7. User Feedback Summary

- **Reliability complaint** ([#7748](https://github.com/nearai/ironclaw/issues/7748)): "It just got confused and stopped working" — a direct user-satisfaction signal; needs triage and a repro.
- **Local MCP server demand** ([#5998](https://github.com/nearai/ironclaw/issues/5998)): developers want on-device MCP integrations; the current stdio/loopback rejection forces them to use remote HTTPS endpoints.
- **QA/bug-bash feedback** ([#7745](https://github.com/nearai/ironclaw/issues/7745), [#7744](https://github.com/nearai/ironclaw/issues/7744)): extension install friction (auth + duplicate entries) and missing cron-job edit/test affordances.
- **Benchmark insight** ([#7736](https://github.com/nearai/ironclaw/issues/7736)): model capability (Qwen3.8-27) rather than harness defects dominates current failure counts — useful for setting user expectations on model-backed features.

Overall sentiment: users see the sandbox and MCP story as core pain points; the team is responding quickly with dedicated PRs. The vague "stopped working" report is the main satisfaction red flag.

## 8. Backlog Watch

- **[#5998](https://github.com/nearai/ironclaw/issues/5998) — local MCP transport denied** (opened 07-11, ~6 weeks): long-unanswered user-facing limitation; fix PR #7757 now open — needs review/merge.
- **[#6994](https://github.com/nearai/ironclaw/pull/6994) — OOBE automation-tasks prototype** (opened 08-01): large frontend PR still open; its backend half (#6993) closed today, so this is the remaining piece of the onboarding epic.
- **[#7038](https://github.com/nearai/ironclaw/issues/7038) / [#7257](https://github.com/nearai/ironclaw/pull/7257) — Design System epic and proposal** (opened 08-03/08-05): docs-only proposal awaiting integration; Phase 1 (#7750) recreated off main to escape stack tangles — monitor for merge.
- **[#7456](https://github.com/nearai/ironclaw/pull/7456) — durable storage profile-agnostic** (opened 08-10, size XL, risk medium): large change touching sandbox/CI/dependencies; has been open 10 days and likely needs sustained review capacity.
- **[#7516](https://github.com/nearai/ironclaw/pull/7516) — IronHub agent-link operator surface** (opened 08-12, contributor: new): first-time contributor PR for the WebUI Extensions page; could use maintainer guidance to avoid stalling.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-20

## Today's Overview

LobsterAI’s GitHub activity on 2026-08-20 was maintenance-heavy: 6 issues were updated, 8 pull requests were closed/merged, and no new releases were published. All 6 open issues carry the `stale` label and were originally created in early April, meaning the tracker has not seen fresh user reports in the last 24 hours. The PR list is split between two recent Windows installer fixes and six older stale PRs that were closed during this window. Overall, some infrastructure work is moving forward, but serious user-facing bugs remain open and unresolved.

## Releases

No new releases were published in the last 24 hours. There are no changelog entries, breaking changes, or migration notes to report.

## Project Progress

All 8 PRs updated in the last 24 hours are in closed/merged state.

- [#2512 fix(installer): hide banner for dictbind silent package](https://github.com/netease-youdao/LobsterAI/pull/2512) — Windows installer improvement; hides the plugin-owned banner only for the dictbind silent channel, preserving behavior elsewhere.
- [#2511 fix(installer): support silent upload-first web builds](https://github.com/netease-youdao/LobsterAI/pull/2511) — Adds an upload-first two-pass Windows web-installer flow for NOS-hosted payloads, with SHA-256 invariant checks on the signed stub.
- [#1570 fix(scheduledTasks): editing a disabled task re-enables it](https://github.com/netease-youdao/LobsterAI/pull/1570) — Fixes a form bug where editing a disabled scheduled task would force it back to enabled.
- [#1573 feat(im): 为 IM 渠道新增斜杠命令支持](https://github.com/netease-youdao/LobsterAI/pull/1573) — Adds `/help`, `/status`, `/new`, `/compact` style slash commands for Telegram, DingTalk, Feishu, Discord, QQ, and WeChat.
- [#1576 fix(api): 修复 SSE 流监听器被旧请求的异步 abort 回调错误清理的竞态条件](https://github.com/netease-youdao/LobsterAI/pull/1576) — Fixes a race condition where an old request’s abort callback could remove a new request’s SSE listeners.
- [#1578 feat(permission-modal): 权限审批弹窗增加 Bash 命令语法高亮](https://github.com/netease-youdao/LobsterAI/pull/1578) — Adds Bash syntax highlighting to the permission approval modal to help users spot dangerous commands.
- [#1580 feat(prompt-input): 输入框图片附件展示缩略图预览](https://github.com/netease-youdao/LobsterAI/pull/1580) — Replaces the plain file-name pill with a 64×64 image thumbnail preview for uploaded image attachments.
- [#1582 fix(setup-python): 检测并覆盖旧版本的pip文件，解决pip无法使用问题](https://github.com/netease-youdao/LobsterAI/pull/1582) — Detects and overwrites stale pip payload files that caused recursion errors after upgrading LobsterAI.

Note: Only #2511 and #2512 are fresh PRs; the other six are older `stale` PRs that were closed during this window. It is unclear from the status alone whether those six were merged or closed unmerged after inactivity.

## Community Hot Topics

- [#1569 提问后不运行，也不显示任何信息](https://github.com/netease-youdao/LobsterAI/issues/1569) — The most-discussed issue with 5 comments. The user reports sending a prompt and getting no execution and no feedback at all, which suggests a serious silent failure path.
- [#1561 模型无法获取上传的文件](https://github.com/netease-youdao/LobsterAI/issues/1561) — 2 comments. Users report that files dragged into the chat are no longer visible to the model; older versions placed files under the project directory where the model could find them.
- [#1566 最新版本无论输入什么都回复相同内容](https://github.com/netease-youdao/LobsterAI/issues/1566) — 2 comments. A severe regression where the latest version returns the same canned response regardless of user input, with logs attached.

The common underlying need is **visible and reliable behavior**: users are not getting feedback, context is being lost, and the model appears to be returning stale or broken responses.

## Bugs & Stability

Ranked by severity:

1. **[#1566] Latest version replies with the same content no matter what is entered** — [Issue #1566](https://github.com/netease-youdao/LobsterAI/issues/1566)  
   High severity: core chat functionality is effectively unusable. Logs were provided. No active public fix PR is linked.

2. **[#1569] Prompt runs nothing and shows no feedback** — [Issue #1569](https://github.com/netease-youdao/LobsterAI/issues/1569)  
   High severity: silent failure blocks normal usage. With 5 comments, this is also the most-engaged open issue. Needs maintainer diagnosis.

3. **[#1561] Model cannot see uploaded files** — [Issue #1561](https://github.com/netease-youdao/LobsterAI/issues/1561)  
   Regression in file handling: the model is unaware of files dragged into the chat. This breaks a previously working workflow.

4. **[#1551] Network environment changes can cause the gateway to repeatedly restart** — [Issue #1551](https://github.com/netease-youdao/LobsterAI/issues/1551)  
   Medium severity: affects users whose network changes; recovery only happens when the original network environment is restored.

5. **[#1563] Traffic package service terms contain an obvious typo** — [Issue #1563](https://github.com/netease-youdao/LobsterAI/issues/1563)  
   Low severity but easy to fix; damaged product credibility on a public terms page.

None of the open bugs currently has a matching active fix PR in this update.

## Feature Requests & Roadmap Signals

- **[#1567] Input box shortcut buttons: stop topic, compact context, recovery actions** — [Issue #1567](https://github.com/netease-youdao/LobsterAI/issues/1567)  
  A user-facing recovery feature request. The user suggests quick buttons or at least a `/help` command to rescue conversations stuck by long context or backend errors.

- **[#1573] IM slash command support** — [PR #1573](https://github.com/netease-youdao/LobsterAI/pull/1573)  
  This stale PR already implemented `/help`, `/status`, `/new`, and `/compact` for multiple IM channels. It directly addresses the same “lightweight control” need as #1567.

- **[#1578] Bash syntax highlighting in permission modal** — [PR #1578](https://github.com/netease-youdao/LobsterAI/pull/1578)  
  Improves safety review of dangerous commands; a good “safety UX” signal.

- **[#1580] Thumbnail preview for uploaded images** — [PR #1580](https://github.com/netease-youdao/LobsterAI/pull/1580)  
  A small UX win that helps users verify uploaded images before sending.

Likely next-version candidates: the Windows installer improvements (#2511/#2512) are the freshest and most likely to land. Recovery/slash-command functionality is also a strong roadmap signal because it appears in both issue #1567 and PR #1573.

## User Feedback Summary

Users are encountering serious reliability problems: silent failures after prompts (#1569), identical repeated responses (#1566), and lost file context (#1561). These issues indicate frustration with diagnostics and recovery mechanisms. Users are also proactively proposing concrete UX improvements, including context compaction, stop buttons, slash commands, and image thumbnails. The overarching sentiment is that the core chat experience must become more transparent and recoverable when something goes wrong.

## Backlog Watch

The following items have been open since 2026-04-08 and are now stale, yet remain unresolved. They need maintainer triage:

- [#1569 Silent failure after sending a prompt](https://github.com/netease-youdao/LobsterAI/issues/1569) — 5 comments, highest community engagement.
- [#1566 Identical replies regardless of input](https://github.com/netease-youdao/LobsterAI/issues/1566) — severe regression.
- [#1561 Uploaded files not visible to the model](https://github.com/netease-youdao/LobsterAI/issues/1561) — regression in file workflows.
- [#1551 Gateway restart loop after network changes](https://github.com/netease-youdao/LobsterAI/issues/1551) — environment-specific but disruptive.
- [#1563 Public service-terms typo](https://github.com/netease-youdao/LobsterAI/issues/1563) — low effort, high polish benefit.

Additionally, six stale PRs were closed this window: [#1570](https://github.com/netease-youdao/LobsterAI/pull/1570), [#1573](https://github.com/netease-youdao/LobsterAI/pull/1573), [#1576](https://github.com/netease-youdao/LobsterAI/pull/1576), [#1578](https://github.com/netease-youdao/LobsterAI/pull/1578), [#1580](https://github.com/netease-youdao/LobsterAI/pull/1580), and [#1582](https://github.com/netease-youdao/LobsterAI/pull/1582). If they were not merged, the project should decide whether to revive them, because several contain meaningful bug fixes and UX improvements.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-20

## 1. Today's Overview

Moltis saw a healthy, bugfix-heavy day: 3 issues were closed and 10 pull requests were touched, with 5 PRs merged/closed and 5 PRs still open. The main focus areas were Apple Container backend reliability and OpenAI/S Responses API routing, alongside security hardening for the vault endpoint. Two new releases were published: `20260818.08` and `20260818.10`. Overall, the project looks actively maintained and responsive to reported regressions.

---

## 2. Releases

Two releases were published in this period:

- [`20260818.10`](https://github.com/moltis-org/moltis/releases/tag/20260818.10)
- [`20260818.08`](https://github.com/moltis-org/moltis/releases/tag/20260818.08)

No release notes or changelog details were provided in the data, so no breaking changes or migration notes can be confirmed from this snapshot.

---

## 3. Project Progress

Merged/closed PRs today:

- [#1198 Route OpenAI reasoning tool calls through Responses](https://github.com/moltis-org/moltis/pull/1198) — built-in OpenAI requests combining function tools with reasoning effort now use the Responses API; custom providers keep Chat Completions behavior.
- [#1212 Preserve Responses routing for explicit OpenAI endpoints](https://github.com/moltis-org/moltis/pull/1212) — avoids breaking Responses routing when `OPENAI_BASE_URL` or saved provider config contains the official OpenAI URL.
- [#1213 Add GPT-5.6 Luna routing coverage](https://github.com/moltis-org/moltis/pull/1213) — adds deterministic routing tests for GPT-5.6 variants and requires Luna availability in live health checks.
- [#1214 Fix Apple Container status parsing across versions](https://github.com/moltis-org/moltis/pull/1214) — replaces brittle substring matching with a typed decoder and supports both 1.x nested `status.state` and pre-1.x scalar statuses.
- [#1215 Fix Apple Container sandbox resource limits](https://github.com/moltis-org/moltis/pull/1215) — properly applies memory, CPU, and PID limits through Apple Container’s native flags.

Closed issues today:

- [#1185 Apple Container 1.x sandbox starts but Moltis treats it as not running](https://github.com/moltis-org/moltis/issues/1185)
- [#1188 Resource limits not applied for apple-container backend](https://github.com/moltis-org/moltis/issues/1188)
- [#1181 Issue with GPT 5.6 Luna](https://github.com/moltis-org/moltis/issues/1181)

---

## 4. Community Hot Topics

The most active issue by comment count was:

- [#1185 [Bug]: Apple Container 1.x sandbox starts but Moltis treats it as not running](https://github.com/moltis-org/moltis/issues/1185) — 3 comments. Users reported that Moltis misread Apple Container 1.x sandbox status. The fix appears to be addressed by [#1214](https://github.com/moltis-org/moltis/pull/1214).

No reaction counts were provided in the data, so attention is inferred from issue/PR activity. The most attention-heavy PRs appear to be security- and configuration-related:

- [#1216 Require authentication for vault unlock and recovery](https://github.com/moltis-org/moltis/pull/1216) — addresses a serious unauthenticated brute-force risk.
- [#1219 Make the untrusted-turn tool ceiling configurable](https://github.com/moltis-org/moltis/pull/1219) — surfaced from a previous change that removed public-audience tools too aggressively.

Underlying demand: users need reliable sandbox behavior on Apple Container, safer vault endpoints, and finer control over per-audience tool permissions.

---

## 5. Bugs & Stability

Ranked by severity:

1. **High — Unauthenticated vault unlock/recovery**  
   [#1216](https://github.com/moltis-org/moltis/pull/1216) is an open security fix for CWE-306. The vault unlock and recovery endpoints were reachable without an `AuthSession` because the whole `/api/auth/` prefix was allowlisted. Any remote caller could brute-force the vault. Fix PR exists and should be prioritized.

2. **Medium-High — Apple Container 1.x status misdetection**  
   [#1185](https://github.com/moltis-org/moltis/issues/1185) was closed; the fix landed via [#1214](https://github.com/moltis-org/moltis/pull/1214), which adds a typed status decoder.

3. **Medium-High — Apple Container resource limits ignored**  
   [#1188](https://github.com/moltis-org/moltis/issues/1188) was closed; fixed by [#1215](https://github.com/moltis-org/moltis/pull/1215).

4. **Medium — GPT-5.6 Luna routing issue**  
   [#1181](https://github.com/moltis-org/moltis/issues/1181) was closed; coverage and live-check updates were added in [#1213](https://github.com/moltis-org/moltis/pull/1213).

5. **Open — Cron heartbeat active hours ignored**  
   [#1208](https://github.com/moltis-org/moltis/pull/1208) fixes the fact that `heartbeat.active_hours` never had any effect. Still open.

6. **Open — WhatsApp reply handling and identity**  
   [#1217](https://github.com/moltis-org/moltis/pull/1217) treats replies to the bot as mentions; [#1218](https://github.com/moltis-org/moltis/pull/1218) stops hardcoding the push name to “Moltis”. Both remain open.

7. **Open — Hardcoded untrusted-turn tool ceiling**  
   [#1219](https://github.com/moltis-org/moltis/pull/1219) makes the deny-all tool policy for non-operator turns configurable. This was a regression from an earlier fix and is awaiting review.

---

## 6. Feature Requests & Roadmap Signals

Several open PRs point to likely near-term improvements:

- **Vault security hardening** — [#1216](https://github.com/moltis-org/moltis/pull/1216) adds authentication to vault unlock/recovery; this should land soon given the severity.
- **Configurable tool permissions per audience** — [#1219](https://github.com/moltis-org/moltis/pull/1219) responds to a need for flexible tool ceilings in shared/untrusted chat contexts.
- **WhatsApp group interaction improvements** — [#1217](https://github.com/moltis-org/moltis/pull/1217) and [#1218](https://github.com/moltis-org/moltis/pull/1218) address user-facing WhatsApp behavior and bot identity.
- **Cron heartbeat active hours** — [#1208](https://github.com/moltis-org/moltis/pull/1208) closes the gap between documented `active_hours` behavior and actual scheduling.

If these PRs are merged, the next version is likely to include Apple Container compatibility fixes, OpenAI Responses routing refinements, WhatsApp group fixes, and a security fix for vault access.

---

## 7. User Feedback Summary

Real user pain points visible in this snapshot:

- Apple Container 1.x users were confused when a running sandbox was reported as not running ([#1185](https://github.com/moltis-org/moltis/issues/1185)).
- Apple Container users also found that configured resource limits were silently ignored ([#1188](https://github.com/moltis-org/moltis/issues/1188)).
- A user reported a specific issue with GPT-5.6 Luna ([#1181](https://github.com/moltis-org/moltis/issues/1181)); maintainers responded with test coverage and routing adjustments.
- WhatsApp users may have seen the bot appear as “Moltis” even when configured with a custom name ([#1218](https://github.com/moltis-org/moltis/pull/1218)).
- Group reply behavior in WhatsApp appeared broken for `mention_mode = "mention"` ([#1217](https://github.com/moltis-org/moltis/pull/1217)).

Overall, user reports are concrete and platform-specific, and maintainers responded quickly with targeted fixes, often within the same update window.

---

## 8. Backlog Watch

There are no stale or long-unanswered issues visible in this 24-hour window. However, five open PRs are currently waiting for review or merge:

- [#1216 Require authentication for vault unlock and recovery](https://github.com/moltis-org/moltis/pull/1216) — security-critical.
- [#1219 Make the untrusted-turn tool ceiling configurable](https://github.com/moltis-org/moltis/pull/1219) — addresses a regression in shared-chat tool policies.
- [#1218 Stop hardcoding the WhatsApp push name to “Moltis”](https://github.com/moltis-org/moltis/pull/1218) — user-facing identity fix.
- [#1217 Treat a WhatsApp reply to the bot as addressing it](https://github.com/moltis-org/moltis/pull/1217) — corrects expected group behavior.
- [#1208 Honor heartbeat active hours when the scheduler fires](https://github.com/moltis-org/moltis/pull/1208) — closes documented feature gap #1205.

The security-related PR [#1216](https://github.com/moltis-org/moltis/pull/1216) should receive attention first.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-20

*Link base from source data: `https://github.com/agentscope-ai/QwenPaw`*

## Today's Overview

CoPaw is in a **high-activity triage and development phase**: 50 issues were updated in the last 24 hours, with 46 closed and only 4 remaining open, while 48 PRs were updated — 31 open and 17 closed/merged. No new release was published in this window. The open PR queue is substantial, signaling active feature development, bug fixing, and integration-test hardening. Community conversation is still dominated by reliability concerns: task interruption, freezes, antivirus interference, and one alarming — though closed — report of local data loss.

## Releases

No new releases were published in the 24-hour window.

## Project Progress

**Closed/merged PRs visible in the sample:**

- [#7151](https://github.com/agentscope-ai/QwenPaw/pull/7151) — Adds folder creation to the Console file/directory browser, including validation and refresh behavior.
- [#7103](https://github.com/agentscope-ai/QwenPaw/pull/7103) — Expands integration test coverage across routing, channels, tools, MCP, and coding-project flows.
- [#7137](https://github.com/agentscope-ai/QwenPaw/pull/7137) — Polishes Console model selector styles.
- [#6986](https://github.com/agentscope-ai/QwenPaw/pull/6986) — Fixes antivirus-software blocking issues; relevant to user report [#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847).
- [#6800](https://github.com/agentscope-ai/QwenPaw/pull/6800) — First-time contributor feature: intelligent email management assistant with real-time monitoring and access control.

**Active high-impact PRs:**

- [#7150](https://github.com/agentscope-ai/QwenPaw/pull/7150) — Adds a watchdog that detects and recovers from stalled LLM streams; directly targets [#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102).
- [#7146](https://github.com/agentscope-ai/QwenPaw/pull/7146) — Freezes remote `view_image` results safely before persisting tool outputs.
- [#7135](https://github.com/agentscope-ai/QwenPaw/pull/7135) — Preserves corrupt env files and writes envs atomically.
- [#7112](https://github.com/agentscope-ai/QwenPaw/pull/7112) — Adds opt-in self-hosted multi-user Hub with local and Docker runtimes.
- [#6515](https://github.com/agentscope-ai/QwenPaw/pull/6515) — Adds Volcengine Agent Plan and MiMo V2.5 providers and refreshes model catalogs.
- [#7037](https://github.com/agentscope-ai/QwenPaw/pull/7037) — Improves Computer Use by observing related window surfaces.
- [#6976](https://github.com/agentscope-ai/QwenPaw/pull/6976) — Adds session-scoped multi-project directories.

## Community Hot Topics

The most active issue by far is **#2884**, with 27 comments — more than double any other issue in the sample.

- [#2884](https://github.com/agentscope-ai/QwenPaw/issues/2884) — [CLOSED] User reports that after installing CoPaw on Ubuntu 22.04, their personal directory was almost emptied and the software itself was removed. Underlying need: **trust and data safety**. Even though the issue is closed, this is the kind of report that needs a transparent public post-mortem.
- [#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) — [CLOSED] 10 comments, 1 👍. User requests one-click updating, `/approve` as buttons, automatic model switching with a ranking/fallback ladder, self-evolution, mobile continuity, and additional providers. Underlying need: **smoother, more resilient daily operation**.
- [#2035](https://github.com/agentscope-ai/QwenPaw/issues/2035) — [CLOSED] 10 comments. Asks how to bind each agent to its own bot and enable multi-agent collaborative task execution. Underlying need: **multi-agent orchestration and per-agent channel control**.
- [#2723](https://github.com/agentscope-ai/QwenPaw/issues/2723) — [CLOSED] 9 comments. User reports that switching to another channel caused the current task, description, and agent execution state to disappear. Underlying need: **session persistence and context preservation**.
- [#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102) — [OPEN] 9 comments. QwenPaw Desktop 2.1.0 freezes for 10+ minutes with GLM 5.3, with no tokens or thinking output. A fix PR is already open: [#7150](https://github.com/agentscope-ai/QwenPaw/pull/7150).
- [#2377](https://github.com/agentscope-ai/QwenPaw/issues/2377) — [CLOSED] 9 comments. Batch processing stops after only a few files, despite user-defined chunking and resume settings. Underlying need: **long-running task reliability**.

PR comment counts were not populated in the provided snapshot, so PR discussion ranking is not available.

## Bugs & Stability

Ranked by severity, focusing on issues updated in the last 24 hours:

| Severity | Issue | Summary | Status / Fix |
|---|---|---|---|
| Critical | [#2884](https://github.com/agentscope-ai/QwenPaw/issues/2884) | User reports home directory contents almost fully deleted and CoPaw uninstalled after installation on Ubuntu | Closed; no public fix PR referenced in sample |
| High | [#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102) | Desktop 2.1.0 freezes >10 minutes with GLM 5.3; no token/thinking output | Open; PR [#7150](https://github.com/agentscope-ai/QwenPaw/pull/7150) |
| High | [#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847) | Antivirus software kills QwenPaw during task execution | Closed; fix PR [#6986](https://github.com/agentscope-ai/QwenPaw/pull/6986) |
| High | [#2377](https://github.com/agentscope-ai/QwenPaw/issues/2377) | Task stops after a few files on a 1500-file summarization job despite resume config | Closed |
| Medium | [#2723](https://github.com/agentscope-ai/QwenPaw/issues/2723) | Task disappears after viewing another channel | Closed |
| Medium | [#2663](https://github.com/agentscope-ai/QwenPaw/issues/2663) | Task stuck and not pausable; language/theme reset to English/light after restart | Closed |
| Medium | [#3005](https://github.com/agentscope-ai/QwenPaw/issues/3005) | Upgrade via install script leaves app unable to start | Closed |
| Medium | [#2705](https://github.com/agentscope-ai/QwenPaw/issues/2705) | Cannot connect to DashScope models | Closed |
| Medium | [#7034](https://github.com/agentscope-ai/QwenPaw/issues/7034) | `TypeError: 'async for' requires an object with __aiter__ method` during ReactAgent tool calls | Closed |
| Low | [#2655](https://github.com/agentscope-ai/QwenPaw/issues/2655) | `browser_use` downloads x86_64 Chromium on Apple Silicon instead of ARM64 | Closed; performance-oriented |

## Feature Requests & Roadmap Signals

Several frequently requested themes are visible:

- **Model/resilience flexibility** — Users want automatic model switching, fallback models, and support for private/internal model gateways: [#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301), [#2089](https://github.com/agentscope-ai/QwenPaw/issues/2089), [#2296](https://github.com/agentscope-ai/QwenPaw/issues/2296), [#2598](https://github.com/agentscope-ai/QwenPaw/issues/2598).
- **Multi-agent and orchestration** — Multiple users are asking for per-agent bot binding, collaborative multi-agent execution, and deeper research orchestration: [#2035](https://github.com/agentscope-ai/QwenPaw/issues/2035), [#3260](https://github.com/agentscope-ai/QwenPaw/issues/3260), [#3074](https://github.com/agentscope-ai/QwenPaw/issues/3074).
- **File safety and workspace control** — Requests include file rollback/undo, better tool-layer error handling, and multi-directory sessions: [#2590](https://github.com/agentscope-ai/QwenPaw/issues/2590), [#2201](https://github.com/agentscope-ai/QwenPaw/issues/2201), [#6976](https://github.com/agentscope-ai/QwenPaw/pull/6976).
- **Browser/computer use improvements** — Users want better browser automation, session reuse, and native Apple Silicon support: [#2655](https://github.com/agentscope-ai/QwenPaw/issues/2655), [#3261](https://github.com/agentscope-ai/QwenPaw/issues/3261), [#7037](https://github.com/agentscope-ai/QwenPaw/pull/7037).
- **Mobile/UI polish** — Mobile browser layout, clearer approve actions, and persistent language/theme settings: [#2856](https://github.com/agentscope-ai/QwenPaw/issues/2856), [#2845](https://github.com/agentscope-ai/QwenPaw/issues/2845), [#2663](https://github.com/agentscope-ai/QwenPaw/issues/2663).

**Likely next-version signals:** The open PR queue suggests the next release will include stalled-stream recovery, provider additions (Volcengine/MiMo), Console tool documentation, reranker UI configuration, Computer Use related-window observation, and possibly the self-hosted Hub.

## User Feedback Summary

CoPaw’s user base is heavily Chinese-language, and feedback shows strong interest in local-model use, multi-agent workflow, and desktop automation. Positive signals include smooth local-model token generation on modest hardware: one user reported running a 4B model on an RTX 3080 10GB at ~9.2/10GB VRAM with “very smooth output” ([#2776](https://github.com/agentscope-ai/QwenPaw/issues/2776)).

However, dissatisfaction centers on **stability and safety**:

- Task interruptions and lost execution state: [#2377](https://github.com/agentscope-ai/QwenPaw/issues/2377), [#2723](https://github.com/agentscope-ai/QwenPaw/issues/2723)
- Antivirus false positives killing the app: [#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847)
- Long freezes with no feedback: [#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102)
- Update/install breakage: [#3005](https://github.com/agentscope-ai/QwenPaw/issues/3005)
- Poor mobile experience and settings not persisting: [#2856](https://github.com/agentscope-ai/QwenPaw/issues/2856), [#2663](https://github.com/agentscope-ai/QwenPaw/issues/2663)
- Browser automation triggers bot detection and cannot reuse login state: [#3261](https://github.com/agentscope-ai/QwenPaw/issues/3261)

The most alarming feedback — [#2884](https://github.com/agentscope-ai/QwenPaw/issues/2884) — describes possible data loss. It is closed, but the emotional severity and community visibility make it important for maintainers to address with a clear explanation or audit.

## Backlog Watch

Open PRs that have been waiting for review for a while and may need maintainer attention:

- [#5930](https://github.com/agentscope-ai/QwenPaw/pull/5930) — Structured run outcome in SSE responses for API automation; open since July 10.
- [#6325](https://github.com/agentscope-ai/QwenPaw/pull/6325) — Show built-in tool docs/parameters in Console; open since July 22.
- [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) — Reranker UI config panel for ReMeLightMemoryCard; open since July 23.
- [#6515](https://github.com/agentscope-ai/QwenPaw/pull/6515) — Volcengine/MiMo providers; open since July 28.
- [#6936](https://github.com/agentscope-ai/QwenPaw/pull/6936) and [#6938](https://github.com/agentscope-ai/QwenPaw/pull/6938) — Tool-arg type coercion and assistant completion-time fix; open since August 12.

Also worth prioritizing: open issue [#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102) already has a fix PR ([#7150](https://github.com/agentscope-ai/QwenPaw/pull/7150)); the data-loss report [#2884](https://github.com/agentscope-ai/QwenPaw/issues/2884) is closed, but a public follow-up would help rebuild user trust.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-20

## 1. Today's Overview

ZeroClaw saw heavy cross-cutting activity in the last 24 hours: 43 issues were updated (41 still open) and 50 PRs were touched (48 still open), with no new releases. The dominant themes are architectural consolidation (session ownership RFCs #9487/#9600, WASM plugin architecture #10076) and a broad code-quality/refactor wave tied to the new Rust anti-slop tracker (#10118), which produced at least four refactor PRs yesterday. Security remains front-of-mind: a P1 credential-logging bug in the Anthropic provider (#9976) and a WhatsApp passkey-gate fix (#10084) are both active. A notable share of long-running PRs remain blocked on author action, indicating review bandwidth is not the only bottleneck. Overall project health is high-activity but with an accumulating decision queue (#8692).

## 2. Releases

No new releases in the last 24 hours. The current shipped release remains v0.8.4; downstream publishing, packaging, and `cargo-install` follow-ups are tracked in [issue #9381](https://github.com/zeroclaw-labs/zeroclaw/issues/9381).

## 3. Project Progress

Two PRs left the open set today; one is visible in the data: [#10145](https://github.com/zeroclaw-labs/zeroclaw/pull/10145) — *chore: withdrawn* by the author. One issue also closed: [#10067](https://github.com/zeroclaw-labs/zeroclaw/issues/10067) — *tool-result truncation is a fixed 50,000 chars, invisible to operators, and byte-wise on structured output* (P1, re-scoped and resolved). Features and fixes advanced in open PRs (not yet merged):

- **Secure relay frontdoor** — [#10142](https://github.com/zeroclaw-labs/zeroclaw/pull/10142) `feat(relay)`: mandatory mutual TLS for the remote WSS plane with per-daemon CA and CSR-only issuance; supersedes #9080.
- **WhatsApp device linking** — [#10084](https://github.com/zeroclaw-labs/zeroclaw/pull/10084): bumps `whatsapp-rust` deps and answers WhatsApp's passkey gate.
- **Release-gate fix** — [#10148](https://github.com/zeroclaw-labs/zeroclaw/pull/10148): makes TUI theme presets package-local, unblocking extractable builds.
- **Anti-slop cleanup wave** (from #10118): [#10123](https://github.com/zeroclaw-labs/zeroclaw/pull/10123) removes dead-code suppressions, [#10124](https://github.com/zeroclaw-labs/zeroclaw/pull/10124) audits 25 unsafe platform sites, [#10129](https://github.com/zeroclaw-labs/zeroclaw/pull/10129) removes 21 panic-prone tool assumptions, [#10134](https://github.com/zeroclaw-labs/zeroclaw/pull/10134) removes 17 panic candidates from runtime dispatch paths.

## 4. Community Hot Topics

Most-discussed issues, by comment count:

- [#9487 — RFC: Runtime-owned conversation sessions and transport surface adapters](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) (20 comments, updated Aug 19). A high-risk architecture RFC with an explicit revision history; paired with tracker #9600 so multiple workstreams don't collide on the session-persistence contract.
- [#7462 — 74 test failures on Windows](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) (18 comments, P1, accepted). Unix-only test commands, path semantics, and console code page 936 break the Windows suite; CI only runs Linux. High community resonance given the project's Windows desktop ambitions.
- [#10118 — Rust anti-slop policy debt remediation tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/10118) (16 comments, created Aug 19). 307 policy candidates across 1,078 Rust files; spawned the refactor PRs above.
- [#6165 — RFC: Prefer a lighter ZeroClaw core through external integrations](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) (16 comments, open since Apr 27). Long-running philosophical debate about core bloat versus default integrations; still needs maintainer review.
- [#8692 — Maintainer decision queue for RFCs and design issues](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) (13 comments). Meta-tracker; its existence signals the volume of RFCs awaiting maintainer time.
- [#9397 — RFC: Treat empty WhatsApp Web `allowed_groups` as permit-none](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) (13 comments, P1, accepted/in-progress). Security default-flip; empty list currently admits every group.

Underlying needs: the community is pushing for clearer architectural ownership (sessions, SOP permissions), stricter security defaults, and honest cross-platform support (Windows).

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Summary | Fix PR? |
|---|---|---|---|
| S0 | [#9976](https://github.com/zeroclaw-labs/zeroclaw/issues/9976) (P1, in-progress) | Anthropic auth logs credential head/tail fragments at debug level | None linked yet |
| S1 | [#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) (P0, accepted) | SOP engine promotes and executes later steps before recording an output-schema rejection | None linked |
| S1 | [#9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290) (P1, accepted, help wanted) | Windows desktop installer crashes at launch — missing `TaskDialogIndirect` | None linked |
| S2 | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) (P1, accepted) | 74 test failures on Windows (Unix-only commands, path semantics, console encoding) | None linked |
| S2 | [#10045](https://github.com/zeroclaw-labs/zeroclaw/issues/10045) (P2, in-progress) | Persisted `[IMAGE:...]` markers can retain temporary source paths and warn repeatedly | None |
| S2 | [#10106](https://github.com/zeroclaw-labs/zeroclaw/issues/10106) (P2) | Exact proxy selectors reject supported transcription services | None |
| S2 | [#10074](https://github.com/zeroclaw-labs/zeroclaw/issues/10074) (P2) | `SECURITY.md` documents a CI `docker` job removed in April | None |
| S3 | [#10103](https://github.com/zeroclaw-labs/zeroclaw/issues/10103) (P3, good first issue) | ZeroCode Health values misalign in French/Spanish due to fixed-width padding | None |

Resolved today: [#10067](https://github.com/zeroclaw-labs/zeroclaw/issues/10067) (tool-result truncation) was closed after re-scoping. Proactive stability work is visible in the refactor PRs (#10123/#10124/#10129/#10134), which remove panic and `unsafe` risk surface across runtime, tools, and native boundaries.

## 6. Feature Requests & Roadmap Signals

- **Sessions UX** — [#10141](https://github.com/zeroclaw-labs/zeroclaw/issues/10141) *"Please make sessions usable"* and PR #9739 (multi-session panes with agent sidebar) directly target the same pain; #9739 is a strong candidate for an upcoming release once author revisions land.
- **WASM plugin architecture** — [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076), a comprehensive "everything is a plugin" RFC (hook/backend/capability layers), signals the next major runtime direction if accepted.
- **AI-assisted PR pre-review** — [#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330), using CI results to trigger AI review; fits the project's existing automation-heavy workflow.
- **ZeroCode polish** — [#10086](https://github.com/zeroclaw-labs/zeroclaw/issues/10086) selectable/copyable Logs text; [#10059](https://github.com/zeroclaw-labs/zeroclaw/issues/10059) Option-Backspace word deletion (macOS); [#8650](https://github.com/zeroclaw-labs/zeroclaw/issues/8650) visible log path in diagnostics.
- **CI/test infra** — [#10087](https://github.com/zeroclaw-labs/zeroclaw/issues/10087) run `memory-postgres` tests in required CI; [#9318](https://github.com/zeroclaw-labs/zeroclaw/issues/9318) required PostgreSQL service-container job (currently blocked).
- **Roadmap RFCs** — Goal mode v2 durable continuation [#9702](https://github.com/zeroclaw-labs/zeroclaw/issues/9702), SOP capability permission contract [#9598](https://github.com/zeroclaw-labs/zeroclaw/issues/9598), and Web bundle/daemon compatibility [#9975](https://github.com/zeroclaw-labs/zeroclaw/issues/9975).

Likely next-version candidates: session/transport ownership decision (#9487/#9600), SOP cancellation (#9476), and the ZeroCode multi-session panes (#9739).

## 7. User Feedback Summary

Direct user pain points surfaced in the last 24 hours:

- **Session management is the top friction point.** [#10141](https://github.com/zeroclaw-labs/zeroclaw/issues/10141) is a plain-language frustration report: copying prior sessions/messages is awkward, and there is no easy way to resume. This corroborates the architectural push in #9487/#9600 and the UI work in #9739.
- **Windows remains a second-class platform.** Between #7462 (74 test failures), #9290 (installer crash), and #10148 (package-local theme presets to fix Windows checkouts), users on Windows are hitting build, test, and launch failures.
- **ZeroCode ergonomics feedback is incremental but concrete**: copyable logs (#10086), macOS keybindings (#10059), and localization alignment in Health panel (#10103) are small quality-of-life requests from active users.
- **Docs drift matters to contributors**: #10074 shows users reading `SECURITY.md` and finding CI enforcement that no longer exists.

## 8. Backlog Watch

Items needing maintainer or author attention:

- **[#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) — Lighter core RFC** (open since Apr 27, 16 comments, `needs-maintainer-review`). Longest-running unresolved architectural question; no decision recorded despite sustained discussion.
- **[#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) — Windows test failures** (open since Jun 10, P1, accepted). Accepted but no assignee/fix PR; Windows CI gap remains unaddressed.
- **[#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) — CI cache/critical-path improvements** (open since Jun 2, accepted). 15–20 minute PR CI remains a known cost center.
- **[#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) — AI-assisted PR review RFC** — marked `needs-author-action`; stalled on the author.
- **Stale large PRs awaiting author action** — [#9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126) (typed plugin config, since Jul 18), [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) (cron wall-clock timeout, P1, since Jul 23), [#9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739) (multi-session panes, since Aug 4), [#9828](https://github.com/zeroclaw-labs/zeroclaw/pull/9828) (agent-facing config authoring, since Aug 7). All are substantial (size XL) and could shape the next release if unblocked.
- **[#9981](https://github.com/zeroclaw-labs/zeroclaw/pull/9981) — Report active shell dialect in system prompt** — marked `do-not-merge`; needs maintainer sign-off.


</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*