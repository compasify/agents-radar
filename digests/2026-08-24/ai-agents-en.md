# OpenClaw Ecosystem Digest 2026-08-24

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-23 23:10 UTC

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

# OpenClaw Project Digest — 2026-08-24

## 1. Today's Overview

OpenClaw is in an extremely high-activity period: **500 issues and 500 PRs were updated in the last 24 hours**, with 48 issues closed and 109 PRs merged/closed — though the open queue remains heavy (452 open/active issues, 391 open PRs). No new stable release shipped today; the project is mid-validation of **v2026.8.1-beta.2** ([#125626](https://github.com/openclaw/openclaw/issues/125626), 18 comments — the most active item), with two release-blocker PRs ([#128371](https://github.com/openclaw/openclaw/pull/128371), [#128405](https://github.com/openclaw/openclaw/pull/128405)) landing to unblock a **beta.3** evidence pipeline. The dominant themes across the tracker are **message-delivery reliability** (Telegram/Slack/A2A/sessions_send), **session-state integrity**, **Windows-native stability**, and **multi-agent resource scaling**. Several already-fixed issues were closed this cycle, indicating maintainer churn is clearing, but a large share of top issues remain stalled awaiting maintainer review or product decisions.

## 3. Project Progress

**Notable PRs merged/closed in the last 24h:**

- [#116489](https://github.com/openclaw/openclaw/pull/116489) — **feat(security): require acknowledgement for install policy warnings** (large, security-boundary). Interactive CLI installs now surface bounded warnings and require exact target-name confirmation.
- [#120900](https://github.com/openclaw/openclaw/pull/120900) — **feat(ui): review install policy warnings** (companion UI flow; authenticated admins can acknowledge warnings in the Control UI to continue plugin installs).
- [#128371](https://github.com/openclaw/openclaw/pull/128371) — **fix(release): authorize focused beta evidence** (resolves a beta.3 release blocker by accepting rerun historical leaves instead of requiring a full all-group manifest).
- [#123975](https://github.com/openclaw/openclaw/pull/123975) — **fix(scripts): clean up tsgo process trees on timeout or signal** (routes tsgo through the managed-process owner, adds `OPENCLAW_TSGO_TIMEOUT_MS` watchdog).
- [#120097](https://github.com/openclaw/openclaw/pull/120097) — **docs(plugins): note the factory tool execute signature** (documents the argument-order difference for factory tools).

**Issues closed as already-fixed:**

- [#112246](https://github.com/openclaw/openclaw/issues/112246) — Codex stable session-key bindings no longer permanently brick web/dashboard GPT sessions (TTL fix landed).
- [#111745](https://github.com/openclaw/openclaw/issues/111745) — safe-package-install no longer reifies all six `@openai/codex` platform binaries (~1.65 GB waste per host).
- [#111969](https://github.com/openclaw/openclaw/issues/111969) — foreground reply fence no longer parks completed turns for the entire runtime of a newer admitted turn.
- [#79451](https://github.com/openclaw/openclaw/issues/79451) — `tools.deny` enforcement for claude-cli backend MCP (closed as stale, but with security-review history — worth re-verifying).
- [#111799](https://github.com/openclaw/openclaw/issues/111799) — active-memory 45% timeout rate closed as cannot-repro, despite prior user logs.

## 4. Community Hot Topics

The most active conversations reveal where users are spending their time and patience:

- **[#125626 — Release validation v2026.8.1-beta.2](https://github.com/openclaw/openclaw/issues/125626)** (18 comments) — Multi-tester beta worksheet; the release-validation skill is the current coordination point for the project.
- **[#119796 — Windows vitest teardown EBUSY on agent state DB](https://github.com/openclaw/openclaw/issues/119796)** (15 comments) — Persistent Windows-only test-infra flake; the per-agent SQLite handle isn't released before unlink. No fix PR yet; needs maintainer review.
- **[#121953 — Cron agent stalls on DeepSeek due to `[cron:]` prefix deprioritization](https://github.com/openclaw/openclaw/issues/121953)** (13 comments, P1) — DeepSeek's edge routes first-user-messages starting with `[cron:` to a lower-priority queue; cron turns stall for tens of seconds to minutes. Needs a product decision on prefix strategy.
- **[#39476 — A2A sessions_send allows back-calls, causing duplicate messages](https://github.com/openclaw/openclaw/issues/39476)** (12 comments, open since March, P1) — Agent A posts `primaryReply` and Agent B independently sends the same content back; session-state/message-loss impact, linked PR open, still awaiting product decision.
- **[#6599 — Feature: /models test-fallback command](https://github.com/openclaw/openclaw/issues/6599)** (11 comments, 1 👍) — Users want to verify fallback chains without waiting for a real provider failure; stuck in maintainer/product-decision limbo since February.
- **[#109490 — Codex app-server turn interrupted after delegated message tool result](https://github.com/openclaw/openclaw/issues/109490)** (11 comments, 1 👍) — `terminate:true` from client-delegated dynamic tools fires `interruptCodex` and promised work never executes; needs live repro + product decision.
- **[#97616 — Hook/tool child processes leak into zombies, runtime degrades](https://github.com/openclaw/openclaw/issues/97616)** (9 comments, 1 👍) — Regression reported since 2026.6.x; needs maintainer review, no fix PR yet.
- **[#90098 — Large attachments overflow browser/gateway stack](https://github.com/openclaw/openclaw/issues/90098)** (7 comments, **2 👍**) — Control UI + gateway stack overflow on large PDFs; linked PR open.
- **[#75947 — UI quality update based on UX scoring](https://github.com/openclaw/openclaw/issues/75947)** (7 comments, **2 👍**) — Broad dissatisfaction with dense config pages; P3 roadmap signal.
- **[#99583 — Intelligent Session Auto-Titling](https://github.com/openclaw/openclaw/issues/99583)** (7 comments, **2 👍**) — Users want lazy/topic-aware session titles reusing the existing LLM slug generator.

**Active PR conversations** (all from the last 24h, mostly awaiting proof/maintainer look): [#128357](https://github.com/openclaw/openclaw/pull/128357) (Discord caption follow-ups after cancellation), [#124301](https://github.com/openclaw/openclaw/pull/124301) (multiline composer redesign), [#128404](https://github.com/openclaw/openclaw/pull/128404) (stale Discord thread-starter refresh), [#128393](https://github.com/openclaw/openclaw/pull/128393) (keep replacement gateway requests alive across reconnect), [#126566](https://github.com/openclaw/openclaw/pull/126566) (stop fallback tasks hanging after primary model failures).

## 5. Bugs & Stability

Ranked by severity; fix status noted where a PR exists.

**Critical / P0**
- **[#126821 — SQLite corruption recurs on pristine rebuilt DBs within 15–24h (WSL2)](https://github.com/openclaw/openclaw/issues/126821)** — 5 corruption events in 5 days, including a "paralyzed gateway" mode that refuses all service but never exits. Data-loss + crash-loop impact; beta/regression; **no fix PR yet** — highest-priority stability item.

**High / P1 — message loss & delivery failures**
- **[#127710 — prepared-model-runtime fails closed on transient generation churn](https://github.com/openclaw/openclaw/issues/127710)** — One fingerprint drift permanently wedges the gateway; owner-commit race silently drops messages. No fix PR yet.
- **[#126246 — Telegram durable outbound deliveries stuck in send_attempt_started, lost on restart](https://github.com/openclaw/openclaw/issues/126246)** — No fix PR yet.
- **[#109490 — Codex turn interrupted after delegated message tool result; promised work never executes](https://github.com/openclaw/openclaw/issues/109490)** — No fix PR yet.
- **[#39476 — A2A sessions_send back-call duplicates messages](https://github.com/openclaw/openclaw/issues/39476)** — Linked PR open.
- **[#96692 — Slack thread replies generated but not delivered after origin tuple lost](https://github.com/openclaw/openclaw/issues/96692)** — Linked PR open.
- **[#111358 — sessions_send silently delivers as webchat message when target has no channel binding](https://github.com/openclaw/openclaw/issues/111358)** — No fix PR; needs maintainer + product decision.
- **[#126707 — Native Codex compaction can repeat a successful message send in the same turn](https://github.com/openclaw/openclaw/issues/126707)** — No fix PR yet.
- **[#121953 — Cron agent stalls on DeepSeek (`[cron:]` prefix deprioritized)](https://github.com/openclaw/openclaw/issues/121953)** — No fix PR; availability impact.
- **[#127728 — Remote extension pairing: gateway rejects browser.request ~10ms after starting relay](https://github.com/openclaw/openclaw/issues/127728)** — Linked PR open.
- **[#126423 — Voice Mode deletes conversations & breaks layout (macOS app)](https://github.com/openclaw/openclaw/issues/126423)** — Voice dialogs not saved; layout breakage; no fix PR yet.

**High / P1 — stability, state & data integrity**
- **[#97616 — Zombie process accumulation from hook/tool execution degrades runtime](https://github.com/openclaw/openclaw/issues/97616)** — No fix PR yet.
- **[#126311 — Fallback model keeps running after primary terminal error; cancel says 'already terminal'](https://github.com/openclaw/openclaw/issues/126311)** — Fix PR **[#126566](https://github.com/openclaw/openclaw/pull/126566)** open.
- **[#119796 — Windows vitest teardown EBUSY on agent state DB](https://github.com/openclaw/openclaw/issues/119796)** — Test-infra blocker on Windows; no fix PR yet.
- **[#91144 — Windows native CLI gateway Scheduled Task doesn't stay running](https://github.com/openclaw/openclaw/issues/91144)** — Linked PR open.
- **[#78493 — `sudo openclaw update` creates mixed ownership; doctor overwrites config after EACCES](https://github.com/openclaw/openclaw/issues/78493)** — Needs live repro.
- **[#108215 — Context usage drops 57% → 13% without compaction after large tool output](https://github.com/openclaw/openclaw/issues/108215)** — No fix PR; session-state impact.
- **[#104950 — Sessions report abortedLastRun=true without error trace in trajectory log](https://github.com/openclaw/openclaw/issues/104950)** — Linked PR open.

**Medium / P2 — session-state & memory correctness**
- [#116010](https://github.com/openclaw/openclaw/issues/116010) — All persistent sessions capped at 128k context regardless of model (linked PR open).
- [#115001](https://github.com/openclaw/openclaw/issues/115001) — Hybrid memory search returns spurious 1.0 similarity scores via FTS LIKE-fallback hard-coded textScore (linked PR open).
- [#126016](https://github.com/openclaw/openclaw/issues/126016) — Compaction strict identifier extractor treats decimal fragments in tool results as exact IDs → `guard_blocked`.
- [#121252](https://github.com/openclaw/openclaw/issues/121252) — Enabling the Buzz plugin breaks inbound reply resolution for all non-Buzz channels.
- [#105513](https://github.com/openclaw/openclaw/issues/105513) — Dreaming system prompt includes 200+ redundant/irrelevant instruction lines.

## 6. Feature Requests & Roadmap Signals

Strongest signals for near-term roadmap:

- **Install-policy security workflow** — The pair of merged/closed PRs ([#116489](https://github.com/openclaw/openclaw/pull/116489), [#120900](https://github.com/openclaw/openclaw/pull/120900)) lands "warn + acknowledge" for suspicious plugin/skill installs in CLI and UI. Expect this in the next beta.
- **Model/fallback tooling** — [#6599](https://github.com/openclaw/openclaw/issues/6599) (`/models test-fallback`, 11 comments) and [#121083](https://github.com/openclaw/openclaw/issues/121083) (SecretRef `provider: "default"` docs) both address configurability friction.
- **Per-agent MCP scoping** — [#72591](https://github.com/openclaw/openclaw/issues/72591) (spawns 120 MCP processes for 12 agents × 10 servers) is a serious multi-agent scaling pain; needs security review, likely to attract a fix soon.
- **UI/UX overhaul** — [#75947](https://github.com/openclaw/openclaw/issues/75947) (UX-scored redesign) plus the active composer PR [#124301](https://github.com/openclaw/openclaw/pull/124301) suggest the Control UI is being actively reworked.
- **Session ergonomics** — [#99583](https://github.com/openclaw/openclaw/issues/99583) (intelligent auto-titling), [#79458](https://github.com/openclaw/openclaw/issues/79458) (i18n for slash command descriptions), [#56619](https://github.com/openclaw/openclaw/issues/56619) (WhatsApp pairing approval notification).
- **Channel/docs gaps being actively patched** — Feishu/Mattermost `contextVisibility` ([#117287](https://github.com/openclaw/openclaw/pull/117287)), group-capable channels rejecting `historyLimit` ([#118152](https://github.com/openclaw/openclaw/pull/118152)), Kubernetes docs ([#91455](https://github.com/openclaw/openclaw/issues/91455)).
- **New capability PRs in flight** — [#96937](https://github.com/openclaw/openclaw/pull/96937) (Perplexity `search_context_size`), [#128379](https://github.com/openclaw/openclaw/pull/128379) (standalone browser extension relay daemon with native-host wake-up), [#126618](https://github.com/openclaw/openclaw/pull/126618) (Tool Search native read/exec in `tool_call`).

**Predictions for next version (beta.3 / 2026.8.x):** release-evidence pipeline fixes ([#128371](https://github.com/openclaw/openclaw/pull/128371), [#128405](https://github.com/openclaw/openclaw/pull/128405)) are already in; install-policy acknowledgement ([#116489](https://github.com/openclaw/openclaw/pull/116489), [#120900](https://github.com/openclaw/openclaw/pull/120900)) and the fallback-task hang fix ([#126566](https://github.com/openclaw/openclaw/pull/126566)) have strong merge momentum.

## 7. User Feedback Summary

Real pain points expressed across the last 24h of activity:

- **Message loss is the #1 trust issue.** Users report Telegram replies stuck in `send_attempt_started` and lost on restart ([#126246](https://github.com/openclaw/openclaw/issues/126246)), Slack thread replies silently undelivered ([#96692](https://github.com/openclaw/openclaw/issues/96692)), A2A/sessions_send duplicates and silent webchat fallbacks ([#39476](https://github.com/openclaw/openclaw/issues/39476), [#111358](https://github.com/openclaw/openclaw/issues/111358), [#115400](https://github.com/openclaw/openclaw/issues/115400)), and NO_REPLY suppression that ignores `silentReply` policy on small/local models ([#119401](https://github.com/openclaw/openclaw/issues/119401)).
- **Windows-native and WSL2 users are disproportionately affected**: EBUSY test teardown ([#119796](https://github.com/openclaw/openclaw/issues/119796)), Scheduled Task gateway instability ([#91144](https://github.com/openclaw/openclaw/issues/91144)), recurring SQLite corruption ([#126821](https://github.com/openclaw/openclaw/issues/126821)), and an unfixable NVM-vs-system-node doctor warning ([#60612](https://github.com/openclaw/openclaw/issues/60612)).
- **Multi-agent operators feel the scaling cost**: MCP process explosion ([#72591](https://github.com/openclaw/openclaw/issues/72591)), ACP `sessions_spawn` producing 0-byte transcripts ([#95759](https://github.com/openclaw/openclaw/issues/95759)), and `acpx flow run` returning empty outputs ([#77694](https://github.com/openclaw/openclaw/issues/77694), 2 👍).
- **Context/memory management confuses and frustrates**: unexpected 128k caps ([#116010](https://github.com/openclaw/openclaw/issues/116010)), context % dropping without compaction ([#108215](https://github.com/openclaw/openclaw/issues/108215)), spurious 1.0 similarity hits ([#115001](https://github.com/openclaw/openclaw/issues/115001)), and QMD memory-search wrapper overhead ([#96561](https://github.com/openclaw/openclaw/issues/96561)).
- **UI dissatisfaction persists**: dense config pages ([#75947](https://github.com/openclaw/openclaw/issues/75947)), missing Anthropic provider group in dashboard settings ([#116062](https://github.com/openclaw/openclaw/issues/116062)), and a P1 voice-mode bug that deletes conversations ([#126423](https://github.com/openclaw/openclaw/issues/126423)).

## 8. Backlog Watch

High-signal items needing maintainer attention, sorted by age:

- **[#6599 — /models test-fallback command](https://github.com/openclaw/openclaw/issues/6599)** — open since **Feb 1**, 11 comments, 1 👍; needs maintainer review + product decision.
- **[#39476 — A2A sessions_send duplicate messages](https://github.com/openclaw/openclaw/issues/39476)** — open since **Mar 8**, P1, 12 comments; linked PR open but no product decision after 5+ months.
- **[#54157 — Doubao/BytePlus cacheRead/cacheWrite pricing set to 0](https://github.com/openclaw/openclaw/issues/54157)** — open since **Mar 25**, P2; small, well-defined cost-correctness fix with no PR.
- **[#56619 — Notify sender on WhatsApp after pairing approval](https://github.com/openclaw/openclaw/issues/56619)** — open since **Mar 28**, P2; labeled `fix-shape-clear` and `queueable-fix` — ideal candidate for a contributor.
- **[#60612 — Doctor warns about NVM node but cannot be fixed](https://github.com/openclaw/openclaw/issues/60612)** — open since **Apr 4**, P3, 1 👍; warning loops with no resolution path.
- **[#72021 — Short-term promotion signalCount mixes daily/session signals with real recalls](https://github.com/openclaw/openclaw/issues/72021)** — open since **Apr 26**, P2, 1 👍; memory-quality bug, needs maintainer review.
- **[#72591 — Per-agent MCP server scoping](https://github.com/openclaw/openclaw/issues/72591)** — open since **Apr 27**, P2, 1 👍; needs security review + product decision; significant multi-agent scaling impact.
- **[#77694 — acpx flow run ACP node outputs return empty strings](https://github.com/openclaw/openclaw/issues/77694)** — open since **May 5**, 2 👍; no labels, no PR — a visible user-facing gap in the acpx flow experience.
- **[#78493 — `sudo openclaw update` mixed ownership, doctor overwrites config](https://github.com/openclaw/openclaw/issues/78493)** — open since **May 6**, P1, 1 👍; security-adjacent config corruption, needs live repro.
- **[#79458 — i18n for slash command descriptions](https://github.com/openclaw/openclaw/issues/79458)** — open since **May 8**, P3, 1 👍; dedupe:parent, needs product decision.
- **[#78082 — Discord per-account native command disable leaves stale specialist commands hijacking /side](https://github.com/openclaw/openclaw/issues/78082)** — open since **May 5**, P2, 1 👍; linked PR open.

**Also on the watchlist:** P0 SQLite corruption ([#126821](https://github.com/openclaw/openclaw/issues/126821)) and P1 message-loss issue [#127710](https://github.com/openclaw/openclaw/issues/127710) are recent but already carry `needs-maintainer-review`/`needs-product-decision` — they should jump the queue given data-loss and permanent-gateway-wedge impact.

---

**Overall health assessment:** The project is shipping steadily (109 PRs merged/closed today, several already-fixed issue closures) and maintainer attention is clearly active around the beta.3 release. However, the open backlog is dominated by P1 message-delivery/session-state bugs with no linked fixes, and long-lived P2/P3 items are aging without product decisions — the release-validation flow is healthy, but the "needs-product-decision" queue is becoming a systemic bottleneck.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-08-24 | **Window:** Last 24 hours

---

## 1. Ecosystem Overview

The personal AI assistant / agent open-source landscape is bifurcating into two tiers: a small number of high-velocity, broadly-scoped agent frameworks (OpenClaw, ZeroClaw, NanoClaw, CoPaw, IronClaw) that are shipping rapidly but accumulating reliability and decision debt, and a long tail of smaller or dormant projects (NullClaw, ZeptoClaw, LobsterAI) where activity has stalled or been reduced to stale-housekeeping. No stable release shipped across any tracked project in this window — OpenClaw is mid-beta-validation, NanoClaw has a release-prep PR closed but unpublished, and the remainder are between releases. The dominant engineering themes are message-delivery reliability, process-level credential hygiene, Windows/WSL2 stability, and multi-agent resource scaling. Notably, the ecosystem is shifting from feature velocity toward trust and operational maturity: install-time security warnings, fail-closed policies, sandbox confinement, and OAuth onboarding reliability are now first-class concerns.

---

## 2. Activity Comparison

Health score rubric: merge velocity, issue/PR volume, maintainer responsiveness, severity of open bugs, and release progress (0–10).

| Project | Issues Updated (closed) | PRs Updated (merged/closed) | Release Status | Health |
|---|---|---|---|---|
| **OpenClaw** | 500 (48) | 500 (109) | v2026.8.1-beta.2 validation | 7/10 |
| **NanoBot** | 2 (1) | 19 (5) | None | 8/10 |
| **Hermes Agent** | 50 (14) | 50 (17) | None | 6.5/10 |
| **PicoClaw** | 2 (2 stale) | 5 (5 stale) | None | 6/10 |
| **NanoClaw** | 4 (1) | 50 (20) | v2.3.0 prep closed, unpublished | 7/10 |
| **NullClaw** | 1 (0) | 0 | None | 4/10 |
| **IronClaw** | 9 (0) | 24 (5) | None | 8.5/10 |
| **LobsterAI** | 4 (4 stale) | 3 (3 stale) | None | 4/10 |
| **Moltis** | 3 (1) | 6 (0) | None | 6/10 |
| **CoPaw (QwenPaw)** | 5 (0) | 14 (8) | None | 7.5/10 |
| **ZeptoClaw** | 0 | 0 | None | 3/10 |
| **ZeroClaw** | 50 (12) | 50 (5) | None | 7/10 |

**Volume leaders:** OpenClaw (≈500 issues + 500 PRs touched) dominates by an order of magnitude; NanoClaw, ZeroClaw, and Hermes form a second tier at ~50 each. **Most responsive:** NanoBot and NanoClaw closed user-reported bugs the same day. **Most at risk:** NullClaw (zero code changes, unresolved high-severity deadlock), LobsterAI (security issue swept into stale-closure), and Hermes (critical credential-scrub cluster open with no dedicated fix PR).

---

## 3. OpenClaw's Position

**Advantages:**
- **Scale & community:** ~500 issues and 500 PRs updated in 24h vs. ~50 for the next busiest project; 109 PRs merged/closed per day. This is the ecosystem's center of gravity, with a contributor base no peer approaches.
- **Release discipline:** The only project running a structured multi-tester beta-validation program (v2026.8.1-beta.2 worksheet), with dedicated release-blocker PRs and an evidence pipeline — a maturity signal others lack.
- **Channel breadth:** Telegram, Slack, Discord, WhatsApp, A2A, Feishu, Mattermost, plus ACP/MCP/Codex backends; unrivaled transport coverage.
- **Security workflow innovation:** The merged install-policy "warn + acknowledge" pair (CLI + UI) is the most advanced supply-chain mitigation visible in the ecosystem this window.

**Technical approach differences:** TypeScript-based (tsgo-managed processes), session-centric with a gateway + channel-adapter architecture, A2A/sessions_send as an integration contract. Distinct from IronClaw's Rust/WASM cloud-sandbox model, CoPaw's Python/AgentScope stack, or ZeroClaw's RFC-driven WASM-plugin + Landlock sandbox design.

**Weaknesses:** The "needs-product-decision" queue is a systemic bottleneck (A2A duplicates open since March, `/models test-fallback` since February); P0 SQLite corruption and P1 message-loss bugs remain unfixed; Windows/WSL2 reliability is a persistent blind spot.

**Verdict:** OpenClaw is the reference implementation and de-facto ecosystem standard, but its scale is now its liability — the backlog (452 open issues) and decision latency are creating opportunities for more agile peers (IronClaw, ZeroClaw) to differentiate on narrow, well-executed use cases.

---

## 4. Shared Technical Focus Areas

Requirements emerging across multiple projects simultaneously:

| Focus Area | Projects (evidence) | Specific Needs |
|---|---|---|
| **Message-delivery reliability** | OpenClaw, NanoClaw, Moltis, ZeroClaw, CoPaw, Hermes | Duplicate delivery from dual send paths (NanoClaw #2404; OpenClaw A2A #39476); messages stuck/lost on restart (OpenClaw #126246); cron output misrouting (Moltis #1226); conversation contamination after stop (CoPaw #7217) |
| **Process/credential security hardening** | Hermes, PicoClaw, OpenClaw, ZeroClaw, LobsterAI, Moltis | Child-env credential leaks (Hermes critical cluster); SSRF in channel media downloads (PicoClaw ×3 PRs); install-time policy warnings (OpenClaw); Landlock DNS/filesystem confinement (ZeroClaw); fail-closed hook semantics (Moltis #1230) |
| **Windows & WSL2 stability** | OpenClaw, Hermes, CoPaw, NanoBot | SQLite corruption on WSL2 (OpenClaw #126821); gateway dies post-liveness-poll (Hermes #91675); EBUSY test teardown (OpenClaw #119796); tasklist probe hangs (CoPaw #6203) |
| **Session-state integrity & cancellation** | CoPaw, Hermes, NanoClaw, OpenClaw, ZeroClaw | Stop/resume must not replay or corrupt next turn (CoPaw #7217; Hermes #93129); turn recovery checkpoints (NanoBot #5420); runtime-owned session ownership (ZeroClaw RFC #9487) |
| **OAuth & integration onboarding** | IronClaw, NanoBot, ZeroClaw, CoPaw | Gmail OAuth popup vanishes (IronClaw #7829); Docker OAuth creds not persisted (NanoBot #5444); ACP pairing fails silently (ZeroClaw #6754); OAuth2 refresh-token rotation (CoPaw #7066) |
| **Multi-agent resource scaling** | OpenClaw, IronClaw, ZeroClaw | 120 MCP processes for 12 agents (OpenClaw #72591); persistent per-user sandbox vs ephemeral containers (IronClaw epic #7732); cross-agent memory grants (ZeroClaw #10252) |
| **Plugin/skill lifecycle** | CoPaw, ZeroClaw, OpenClaw, Moltis | Dynamic skill loading (CoPaw merged); reload-safe plugin registrations (CoPaw #7221); WASM plugin architecture (ZeroClaw RFC #10076); packaged skill sidecars missing (Moltis #1234) |
| **Dependency & release hygiene** | NanoClaw, IronClaw, OpenClaw | pnpm minimumReleaseAge gate (NanoClaw); four-lane CI overhaul (IronClaw T1–T4); release-evidence pipeline (OpenClaw beta.3) |

---

## 5. Differentiation Analysis

| Project | Target User | Core Architecture | Defining Focus |
|---|---|---|---|
| **OpenClaw** | Power users / self-hosters | TypeScript gateway + channel adapters + A2A | Breadth: every channel, every backend, huge plugin surface |
| **ZeroClaw** | Security-conscious self-hosters | RFC-governed, WASM plugins, Landlock sandbox | Architecture rigor; broad channel roadmap (Twilio, Zulip, Mastodon, Lemmy) |
| **IronClaw** | Cloud/ops teams | Rust + WASM, managed proxy, persistent per-user sandbox | "Personal computer in the cloud" — one long-lived sandbox per user, not ephemeral shells |
| **NanoClaw** | Release-pragmatic deployers | Stacked PR chains, SDK-driven channels | Dependency hygiene and CI discipline; rapid same-day bug response |
| **CoPaw (QwenPaw)** | Qwen/AgentScope ecosystem users | Python (AgentScope), skill-system runtime | Skill extensibility, token-usage observability, auto-title-sync |
| **Hermes Agent** | Desktop / Bot-Mode operators | Desktop app + gateway, multi-profile, Bot Mode | Multi-bot group orchestration; profile isolation; security auditing |
| **NanoBot** | Lightweight personal use | TUI/WebUI + agent runtime | UX polish (turn recovery, process identity), Docker usability |
| **PicoClaw** | Messaging-heavy users (CN channels) | Channel media pipeline | WeChat/WeCom/WhatsApp reliability, SSRF hardening |
| **Moltis** | Policy-driven teams | Security hooks, cron automation | Fail-closed guardrails, Slack collaboration, self-host TLS |
| **LobsterAI** | NetEase/NIM users | NIM SDK gateway, workspace files | Enterprise IM (NIM) integration, Cowork mode |
| **NullClaw** | Homelab/SME (Proxmox) | Gateway + standalone agent | Minimal footprint; currently single-issue project |
| **ZeptoClaw** | — | — | Dormant |

**Architecture split:** TypeScript/Node gateway model (OpenClaw, NanoClaw, PicoClaw, NullClaw) vs. Rust/WASM sandbox model (IronClaw) vs. Python/AgentScope (CoPaw) vs. desktop-first multi-process (Hermes). The "Claw-family" naming convention indicates OpenClaw's conceptual influence across at least five projects, but they are diverging on delivery guarantees, sandboxing, and extensibility rather than competing feature-for-feature.

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapid iteration, high velocity (shipping daily, but accumulating debt):**
- **OpenClaw** — 109 PRs merged/closed/day; beta validation active; bottleneck is product decisions, not code.
- **ZeroClaw** — 50/50 churn, but 45 open PRs vs 5 merged; RFC-heavy culture risks maintainer review pileup (community opened a "decision queue" tracker, #8692).
- **NanoClaw** — 20 PRs merged/closed; most disciplined release process in the cohort (stacked PR chains, dependency-age gates); blocked only by 3 open reliability bugs.
- **CoPaw** — 8 PRs merged incl. skill-system infrastructure; stability lagging (20GB memory growth, conversation contamination).
- **IronClaw** — Healthiest velocity-to-quality ratio: 24 PRs touched, explicit T1–T4 CI lanes, throwaway probe branches, deferred scope. Emerging as the engineering-standard-setter for cloud-agent infrastructure.

**Tier 2 — Steady, contributor-driven:**
- **NanoBot** — Small but responsive; OAuth bug fixed same window; healthy first-time contributor flow.
- **Hermes Agent** — High triage velocity, but critical security cluster and P1 parallel-tool-result loss remain open.
- **Moltis** — Contributor PRs (6 open, 0 merged) plus a 6-month-old TLS/WebSocket bug — reviewer capacity is the constraint.

**Tier 3 — Stabilizing / maintenance:**
- **PicoClaw** — Backlog cleanup via stale-closures; security PRs of unclear merge status.
- **LobsterAI** — Stale-sweep only; a high-severity model-key leak was archived without a fix — requires immediate attention.
- **NullClaw** — Single unresolved high-severity deadlock, zero maintainer response; effectively paused.
- **ZeptoClaw** — No activity; effectively dormant.

**Maturity markers:** Release validation (OpenClaw), stacked-release engineering (NanoClaw), CI overhaul with convergence lanes (IronClaw), structured RFC process with decision-queue tracking (ZeroClaw), and same-day bug closure (NanoBot, NanoClaw) indicate a maturing ecosystem. The main deficiency is **review/decision bandwidth**, not contribution volume.

---

## 7. Trend Signals

1. **Delivery guarantees are the new competitive battleground.** Duplicate, lost, or silently-fallen-back messages are the #1 trust issue across OpenClaw, NanoClaw, Moltis, and ZeroClaw. Expect idempotency keys, outbox patterns, and delivery receipts to become table stakes.

2. **Security hardening is moving down the stack.** This window: install-policy warnings (OpenClaw), child-env credential scrubbing (Hermes), SSRF in media downloads (PicoClaw), Landlock filesystem/DNS confinement (ZeroClaw), fail-closed hooks (Moltis). The pattern: network-level SSRF defense is now assumed; **process-level credential hygiene and OS-level sandboxing** are the next differentiators.

3. **Windows-native and WSL2 are the platform risk area.** SQLite corruption, gateway lifecycle failures, EBUSY teardowns, and venv-blocker aborts appear across four projects. Developers targeting enterprise/prosumer Windows should expect this to be a recurring support sink.

4. **Cancellation and session-state semantics are becoming first-class.** Users demand that Stop ≠ corrupted next turn (CoPaw #7217), that interrupted turns are recoverable (NanoBot #5420), and that cron triggers carry context (ZeroClaw #6105). Design cancellation as an explicit state transition, not a process kill.

5. **OAuth onboarding is the weakest UX link.** Four projects hit OAuth/integration failures in the same 24h (IronClaw Gmail/Slack, NanoBot Docker, ZeroClaw ACP, CoPaw refresh-token rotation). Containers, popup flows, and rotation are all breaking. **Value for developers:** write automated OAuth e2e tests for containerized deployments before shipping.

6. **Multi-agent orchestration is converging on persistent identity.** IronClaw's per-user persistent sandbox, ZeroClaw's cross-agent grants, OpenClaw's per-agent MCP scoping, and Hermes' Bot-Mode reliability program all point the same direction: agents need stable runtime identities with scoped resource ownership, not per-command ephemerality.

7. **Observability is the quiet winner.** Token-usage trend charts (CoPaw), process identities (NanoBot), quota/usage surfaces (Hermes), `/models` testing (OpenClaw) — operators increasingly want to see *what the agent did and why* as much as they want new capabilities.

**Bottom line for AI agent developers:** prioritize delivery idempotency, process-level credential isolation, and correct cancellation semantics in your architecture; expect OAuth-in-container to break; and watch IronClaw's sandbox model and ZeroClaw's WASM plugin architecture as the next architectural shifts to propagate into the broader ecosystem.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-24

## 1. Today's Overview

NanoBot saw a high volume of pull-request activity in the last 24 hours: 19 PRs were updated, with 5 closed/merged and 14 still open. Issue activity remained light, with only 2 issues updated — one OAuth bug was closed and one document-preview enhancement request was opened. No new releases were published. Overall, the project appears healthy and actively developed, with focus areas including provider/API contracts, TUI/WebUI polish, Docker OAuth handling, and channel integrations.

## 2. Releases

No new releases were published in this window. The “Latest Releases” data is empty.

## 3. Project Progress

Closed/merged PRs in the last 24 hours:

- **#5445 — fix(docker): persist OAuth client data**  
  Dangzitou fixed Docker OAuth credential persistence by directing XDG app data to the mounted instance directory. This directly addresses the OpenAI OAuth login failure reported in issue #5444.  
  [HKUDS/nanobot PR #5445](https://github.com/HKUDS/nanobot/pull/5445)

- **#5420 — feat(runtime): add user-controlled turn recovery**  
  Re-bin added sidecar checkpoints for interrupted WebSocket turns, plus explicit **Continue / Dismiss** recovery options in WebUI and TUI. It avoids automatic resumption and supports restoring final answers without extra model calls.  
  [HKUDS/nanobot PR #5420](https://github.com/HKUDS/nanobot/pull/5420)

- **#5491 — fix(webui): keep answer text outside reasoning shell**  
  chengyongru fixed a WebUI rendering issue where assistant answer text could be merged with reasoning/tool activity. The change preserves answer slices across complex tool-use turns.  
  [HKUDS/nanobot PR #5491](https://github.com/HKUDS/nanobot/pull/5491)

- **#5492 — feat(cli): expose nanobot process identities**  
  Re-bin added clear process names for the agent, WebUI, gateway, and TUI processes, improving observability for users managing running NanoBot instances.  
  [HKUDS/nanobot PR #5492](https://github.com/HKUDS/nanobot/pull/5492)

- **#5475 — refactor: remove remaining dead code**  
  chengyongru removed unused runtime/settings/channel helpers, an unneeded `websocket-client` dependency, and narrowed WebUI/TUI exports.  
  [HKUDS/nanobot PR #5475](https://github.com/HKUDS/nanobot/pull/5475)

Also closed: **issue #5444** (OpenAI OAuth failure in Docker), fixed by PR #5445.

## 4. Community Hot Topics

The most active issue in the window was:

- **#5444 — [bug] Failed to ogin OpenAI via OAuth in Docker**  
  2 comments | closed  
  The user reported that OAuth login fails in Docker when exchanging the authorization code against `localhost`. The underlying need was persistent OAuth client credentials and a usable local redirect flow inside containerized deployments. This is now fixed via PR #5445.  
  [HKUDS/nanobot Issue #5444](https://github.com/HKUDS/nanobot/issues/5444)

Also notable:

- **#5493 — [enhancement] 增加html，.txt .md 文档等预览**  
  New open feature request asking for HTML/TXT/Markdown preview support. The proposer specifically suggests using `iframe + srcdoc` for sandboxed, safe previews.  
  [HKUDS/nanobot Issue #5493](https://github.com/HKUDS/nanobot/issues/5493)

PR comment counts were not populated in the supplied data, so “most active” was evaluated from issue comments and update timestamps. Several large PRs — e.g. #5480 (typed LLM usage contract), #5495 (Linear channel), and #5498 (TUI onboarding) — received ongoing updates and likely represent the current development hotspots.

## 5. Bugs & Stability

Bug/regression-related items ranked by severity:

- **High — #5500 fix(codex): reuse TLS contexts across requests**  
  The Codex provider could construct TLS contexts per request, causing severe performance problems and unresponsiveness. A regression test confirms only one TLS context is now used. Fix PR is open.  
  [HKUDS/nanobot PR #5500](https://github.com/HKUDS/nanobot/pull/5500)

- **High — #5496 fix(agent): time out no-tools model requests**  
  Some agent recovery/finalization paths bypassed the normal request timeout and could hang a turn indefinitely. Fix PR is open.  
  [HKUDS/nanobot PR #5496](https://github.com/HKUDS/nanobot/pull/5496)

- **Medium — #5444 / #5445**: Docker OAuth login failure was caused by non-persistent OAuth client data; fix is now closed/merged.  
  [Issue #5444](https://github.com/HKUDS/nanobot/issues/5444) · [PR #5445](https://github.com/HKUDS/nanobot/pull/5445)

- **Medium — #5430 fix(agent): release completed task groups**  
  Long-running agent loops could retain empty session sets, effectively acting as a memory leak. Fix PR is open.  
  [HKUDS/nanobot PR #5430](https://github.com/HKUDS/nanobot/pull/5430)

- **Medium — #5467 fix(tui): preserve launch context in resume commands**  
  TUI resume commands could drop explicit `--config` / `--workspace` selectors, causing sessions to resume in the wrong context. Fix PR is open.  
  [HKUDS/nanobot PR #5467](https://github.com/HKUDS/nanobot/pull/5467)

- **Medium — #5152 fix(subagent): mark partial completion results**  
  Subagent results could be misinterpreted when sibling tasks were still running. The fix adds remaining-count metadata. PR has been open since July.  
  [HKUDS/nanobot PR #5152](https://github.com/HKUDS/nanobot/pull/5152)

- **Low/UX — #5491 fix(webui): keep answer text outside reasoning shell**  
  Closed; improves message rendering in WebUI.  
  [HKUDS/nanobot PR #5491](https://github.com/HKUDS/nanobot/pull/5491)

- **Low/UX — #5490 fix(webui): clarify aggregate turn token usage**  
  The WebUI token tooltip did not distinguish cumulative turn input from final request context. Fix PR is open.  
  [HKUDS/nanobot PR #5490](https://github.com/HKUDS/nanobot/pull/5490)

- **Low — #5499 fix(tui): avoid saving empty sessions**  
  Opening the TUI in an empty folder could synchronize empty session metadata. Fix PR is open.  
  [HKUDS/nanobot PR #5499](https://github.com/HKUDS/nanobot/pull/5499)

No newly opened crash-level bugs were reported in the issue tracker during this window.

## 6. Feature Requests & Roadmap Signals

User-facing feature request:

- **#5493 — HTML/TXT/MD document preview**  
  The user requests in-chat preview for HTML, plain text, and Markdown files, proposing `iframe srcdoc` with sandbox isolation. This is a practical channel/WebUI enhancement and could plausibly land in a future WebUI release.  
  [HKUDS/nanobot Issue #5493](https://github.com/HKUDS/nanobot/issues/5493)

Active feature-oriented PRs that signal roadmap direction:

- **#5495 — native Linear agent channel**  
  Adds a full Linear integration with OAuth PKCE, webhook queueing, and WebUI setup flow.  
  [HKUDS/nanobot PR #5495](https://github.com/HKUDS/nanobot/pull/5495)

- **#5498 / #5497 — config editor contract and unified Agent TUI onboarding**  
  These PRs introduce a schema-driven, transport-neutral configuration editor contract with secret-safe snapshots, plus a full `/config` surface in the Agent TUI.  
  [PR #5498](https://github.com/HKUDS/nanobot/pull/5498) · [PR #5497](https://github.com/HKUDS/nanobot/pull/5497)

- **#5480 — typed LLM usage contract**  
  Refactors provider usage tracking into a typed contract across OpenAI, Anthropic, and Bedrock boundaries. This is more internal architecture but improves consistency for future provider features.  
  [HKUDS/nanobot PR #5480](https://github.com/HKUDS/nanobot/pull/5480)

- **#5388 / #5386 — MCP schema budgeting and metadata preservation**  
  Both target MCP tooling: capping model-visible schema size and preserving app result metadata without expanding model context.  
  [PR #5388](https://github.com/HKUDS/nanobot/pull/5388) · [PR #5386](https://github.com/HKUDS/nanobot/pull/5386)

Given the high activity around Linear, TUI configuration, and MCP improvements, those are likely candidates for the next minor release batch.

## 7. User Feedback Summary

User-reported pain points in this window were limited but concrete:

- **Docker OAuth login failure**: The user in #5444 hit a broken OpenAI sign-in flow inside Docker because OAuth client data was not persisted. This caused real friction for container users. The prompt fix (#5445) was closed in the same window, which should resolve the issue.
- **Document preview request**: The #5493 requester wants lightweight preview of HTML, TXT, and Markdown files, likely for document-heavy chat/channel workflows. The suggested `srcdoc` approach shows awareness of security concerns.
- **No negative reactions or strong dissatisfaction signals** were present in the data. The volume of closed fixes suggests maintainers are responsive to reported regressions.

## 8. Backlog Watch

Several important PRs remain open for extended periods and may need maintainer attention:

- **#5152 — fix(subagent): mark partial completion results**  
  Open since **2026-07-28**, updated 08-23. This is a regression fix that has been waiting for review/merge for nearly a month.  
  [HKUDS/nanobot PR #5152](https://github.com/HKUDS/nanobot/pull/5152)

- **#5385 — fix(matrix): complete Element SAS request flow**  
  Open since **2026-08-13**. Adds verification support for modern Element clients.  
  [HKUDS/nanobot PR #5385](https://github.com/HKUDS/nanobot/pull/5385)

- **#5386 — feat(mcp): preserve MCP Apps result metadata**  
  Open since **2026-08-13**.  
  [HKUDS/nanobot PR #5386](https://github.com/HKUDS/nanobot/pull/5386)

- **#5388 — feat(agent): budget model-visible MCP schemas**  
  Open since **2026-08-13**.  
  [HKUDS/nanobot PR #5388](https://github.com/HKUDS/nanobot/pull/5388)

- **#5430 — fix(agent): release completed task groups**  
  Open since **2026-08-18**, updated 08-23. Memory-leak fix for long-running agent loops.  
  [HKUDS/nanobot PR #5430](https://github.com/HKUDS/nanobot/pull/5430)

The August-13 cluster of MCP/Matrix PRs (#5385/#5386/#5388) has been open for over 10 days without closing; these are good candidates for maintainer review.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-24

## Today's Overview

Hermes Agent had a very active 24-hour window: **50 issues** were updated (36 open / 14 closed) and **50 PRs** were updated (33 open / 17 closed/merged). **No new releases** shipped. Activity was concentrated around Desktop/Bot Mode behavior, the gateway lifecycle guard, Windows reliability, and a cluster of child-environment credential-scrub security reports. Maintainers spent significant effort landing salvaged fixes — especially desktop connection-blip lockouts, dashboard auth guidance, and lifecycle-guard bypasses. Overall project health is mixed: triage velocity is high, but several P1 reliability bugs remain open, including lost parallel tool results, destructive `state.db` repair, and Windows gateway startup failures.

## Project Progress

The closed/merged PRs shown today are primarily fixes and maintenance salvages:

- [PR #93288](https://github.com/NousResearch/hermes-agent/pull/93288) — Desktop remote-ticket blips no longer lock the chat behind the boot overlay (salvage of #82907). Closes the “Hermes couldn’t start” false-lockout class.
- [PR #93281](https://github.com/NousResearch/hermes-agent/pull/93281) — Dashboard “Sign-in unavailable” page no longer recommends the dead `--insecure` bypass (salvage of #87813).
- [PR #82907](https://github.com/NousResearch/hermes-agent/pull/82907) — Original desktop fix for transient remote ticket blips locking the chat; closed after salvage.
- [PR #87813](https://github.com/NousResearch/hermes-agent/pull/87813) — Dashboard auth page no longer suggests a no-op bypass.
- [PR #93287](https://github.com/NousResearch/hermes-agent/pull/93287) — Auto-generated JS formatting fix via `npm run fix`.

Several matching issues were also closed, indicating fixes landed or were consolidated: [Issue #57512](https://github.com/NousResearch/hermes-agent/issues/57512) (Desktop “Restart Gateway” button silently failing), [Issue #92560](https://github.com/NousResearch/hermes-agent/issues/92560) (lifecycle env gate firing on CLI/TUI agent sessions), [Issue #92687](https://github.com/NousResearch/hermes-agent/issues/92687) (Bot Mode canonical “Bot Chat” not resurrected after archival), and [Issue #93129](https://github.com/NousResearch/hermes-agent/issues/93129) (Bot Mode bot ignoring an explicit stop).

Open PRs show continued feature/fix work: desktop Bot Chat rebinding after reconnect ([PR #93292](https://github.com/NousResearch/hermes-agent/pull/93292), [PR #93222](https://github.com/NousResearch/hermes-agent/pull/93222)), session RPC routing by target session ([PR #93296](https://github.com/NousResearch/hermes-agent/pull/93296)), rich HTML email replies ([PR #93294](https://github.com/NousResearch/hermes-agent/pull/93294)), and CLI/desktop quota visibility ([PR #93282](https://github.com/NousResearch/hermes-agent/pull/93282), [PR #93285](https://github.com/NousResearch/hermes-agent/pull/93285)).

## Community Hot Topics

The most active conversation drivers were bugs affecting multi-profile Desktop setups, Windows gateway reliability, and Bot Mode orchestration:

- [Issue #67605](https://github.com/NousResearch/hermes-agent/issues/67605) — **9 comments**. Dashboard/desktop profile switching is partial: MCP tools never load for the selected profile, and secrets/`${VAR}` resolve from the launch profile. This signals a deeper architectural complaint: the desktop dashboard serves all profiles from one compute-host process and cannot fully isolate profile state.
- [Issue #91675](https://github.com/NousResearch/hermes-agent/issues/91675) — **6 comments**. Windows gateway still prints “✓” and then dies after the 6s liveness poll; post-update cold-start only resumes the active profile. Windows users are repeatedly hitting gateway lifecycle/update regressions.
- [Issue #93091](https://github.com/NousResearch/hermes-agent/issues/93091) — **6 comments**. Bot Mode reliability program: typed failure reasons, envelope TTL, attention badges, leader-routed group rooms, retry session policy. Power users are pushing for more structured, observable multi-bot coordination rather than one-off fixes.
- [Issue #57512](https://github.com/NousResearch/hermes-agent/issues/57512) — **5 comments**. Desktop “Restart Gateway” silently fails due to the `_HERMES_GATEWAY` env guard. Now closed, but the comment volume shows confusion when lifecycle-guard internals surface as user-facing UI failures.
- [Issue #92361](https://github.com/NousResearch/hermes-agent/issues/92361) — **4 comments**. Camofox browser navigate needs timeout/retry hardening on slow first paint. A smaller but recurring cold-backend pain point.

Only one issue in the top set shows explicit reactions: [Issue #92414](https://github.com/NousResearch/hermes-agent/issues/92414) has a 👍, indicating some user agreement on the TUI Docker bind-mount `session:<id>` failure.

## Bugs & Stability

Ranked by severity as labeled/reported:

**Critical / High security**
- [Issue #93230](https://github.com/NousResearch/hermes-agent/issues/93230) — **CRITICAL / P0**: child-env post-scrub clobber in `tui_gateway/host_supervisor.py` (`env.update(os.environ)` after scrub). Closed today.
- [Issue #77463](https://github.com/NousResearch/hermes-agent/issues/77463) — **CRITICAL**: cluster Q-SPAWN, 6 child-env scrub bypass findings — including the same post-scrub `env.update(os.environ)`, LSP full-env leak, `_HERMES_FORCE_` unwrap, and Docker forward-env. Still **open**; this security cluster needs a dedicated fixing PR, not just individual reports.
- [Issue #93233](https://github.com/NousResearch/hermes-agent/issues/93233) — **HIGH / P1**: LSP spawn leaks full credential ring via `dict(os.environ)` at `agent/lsp/client.py:292`. Closed today.

**P1 reliability**
- [Issue #93251](https://github.com/NousResearch/hermes-agent/issues/93251) — Parallel tool batches of **4+ calls lose all results**; batches of 1–3 work. This is a severe agent-correctness bug with no fix PR yet.
- [Issue #91675](https://github.com/NousResearch/hermes-agent/issues/91675) — Windows gateway starts then dies after the 6s liveness poll; still open.
- [Issue #93064](https://github.com/NousResearch/hermes-agent/issues/93064) — `state.db` automatic repair mutates canonical data before proving recovery; risk of destroying user sessions. Still open.

**P2 bugs**
- [Issue #93022](https://github.com/NousResearch/hermes-agent/issues/93022) — Anti-thrashing breaker permanently disables compaction on sessions too short to compress; reproduced on v0.20.5.
- [Issue #92560](https://github.com/NousResearch/hermes-agent/issues/92560) — Lifecycle env gate fires on CLI/TUI agent sessions; closed, with related lifecycle-guard hardening PRs open ([#93286](https://github.com/NousResearch/hermes-agent/pull/93286), [#93291](https://github.com/NousResearch/hermes-agent/pull/93291), [#93297](https://github.com/NousResearch/hermes-agent/pull/93297)).
- [Issue #92414](https://github.com/NousResearch/hermes-agent/issues/92414) — TUI Docker backend fails because `session:<id>` is used in a `-v` bind-mount path.
- [Issue #93134](https://github.com/NousResearch/hermes-agent/issues/93134) — TUI clipboard path can leave `execFileNoThrow` pending after timeout.
- [Issue #93242](https://github.com/NousResearch/hermes-agent/issues/93242) — `create_ssrf_safe_async_client()` call sites with no User-Agent exposed to bot-detection 403s.
- [Issue #75460](https://github.com/NousResearch/hermes-agent/issues/75460) — Windows Desktop update aborts on busy machines because venv-blocker scan is killed at 15s.

**P3 / Desktop UX**
- [Issue #93197](https://github.com/NousResearch/hermes-agent/issues/93197) — “Show all profiles” resets on every Desktop restart; fix PR [PR #93279](https://github.com/NousResearch/hermes-agent/pull/93279) is open.
- [Issue #93262](https://github.com/NousResearch/hermes-agent/issues/93262) — Desktop Bots pane never renders roster rows despite working backend/profile data.
- [Issue #93273](https://github.com/NousResearch/hermes-agent/issues/93273) — ⌘F does not refocus the find bar when already visible.

## Feature Requests & Roadmap Signals

Most requested features cluster around **Bot Mode reliability**, **plugin extensibility**, and **operational visibility**:

- [Issue #93091](https://github.com/NousResearch/hermes-agent/issues/93091) — Bot Mode reliability program. This is the strongest roadmap signal for multi-bot group coordination: typed failure reasons, envelope TTL, attention badges, leader-routed rooms, retry policies.
- [Issue #92711](https://github.com/NousResearch/hermes-agent/issues/92711) — Complete machine-readable model-facing tool enumeration endpoint, useful for agent containment verification.
- [Issue #90432](https://github.com/NousResearch/hermes-agent/issues/90432) — Upgrade `pre_api_request` to a Transform hook so plugins can override model/provider/base_url per request.
- [Issue #90216](https://github.com/NousResearch/hermes-agent/issues/90216) — `stream_diag` should record the actually-serving downstream provider from delta-chunk bodies, not just response headers.
- [Issue #46150](https://github.com/NousResearch/hermes-agent/issues/46150) — Interactive skin selector with live preview and auto day/night mode.

Open PRs suggest what could land next:
- **Rich HTML email replies** ([PR #93294](https://github.com/NousResearch/hermes-agent/pull/93294)) — multipart/alternative with sanitized HTML while keeping plain-text default.
- **Official quota visibility** ([PR #93282](https://github.com/NousResearch/hermes-agent/pull/93282), [PR #93285](https://github.com/NousResearch/hermes-agent/pull/93285)) — `hermes usage`, auth-status summary, and a desktop quota chip.
- **Codex model discovery fix** ([PR #93295](https://github.com/NousResearch/hermes-agent/pull/93295)) — uncouples catalog visibility from a fake client version.

The next release likely includes the quota/usage surfaces and desktop profile/session fixes; Bot Mode’s larger reliability program is probably still in scoping.

## User Feedback Summary

User pain is dominated by **Desktop/multi-profile session management**, **Windows lifecycle/update failures**, and **data/credential safety concerns**:

- Multi-profile Desktop users report that profile switching is unreliable: MCP tools don’t load and secrets come from the wrong profile ([#67605](https://github.com/NousResearch/hermes-agent/issues/67605)).
- Windows users are repeatedly frustrated by gateway startups that appear successful before dying, and by update flows that abort on busy machines ([#91675](https://github.com/NousResearch/hermes-agent/issues/91675), [#75460](https://github.com/NousResearch/hermes-agent/issues/75460)).
- Bot Mode users are reporting autonomy failures: bots ignore explicit stops, sessions get archived/duplicated, and group-room behavior is inconsistent ([#93129](https://github.com/NousResearch/hermes-agent/issues/93129), [#92687](https://github.com/NousResearch/hermes-agent/issues/92687), [#93262](https://github.com/NousResearch/hermes-agent/issues/93262)).
- Security-conscious users are identifying credential-ring leak paths in child spawning, LSP, and Docker forwarding — the reports are detailed and reproducible, suggesting active security review by the community ([#77463](https://github.com/NousResearch/hermes-agent/issues/77463), [#93230](https://github.com/NousResearch/hermes-agent/issues/93230)).
- Some dissatisfaction is visible around persistence/reset behavior, e.g. “Show all profiles” resetting every restart ([#93197](https://github.com/NousResearch/hermes-agent/issues/93197)).

Overall, users are more focused on **reliability and trust** than on new features right now.

## Backlog Watch

Several older, important items still need maintainer attention:

- [Issue #46150](https://github.com/NousResearch/hermes-agent/issues/46150) — Interactive skin selector, open since **June 14**. No visible maintainer decision; a long-running cosmetic/UX feature request.
- [Issue #67605](https://github.com/NousResearch/hermes-agent/issues/67605) — Desktop/dashboard profile switching is partial, open since **July 19** with 9 comments. This is one of the most-discussed open bugs and needs architectural ownership.
- [Issue #75460](https://github.com/NousResearch/hermes-agent/issues/75460) — Windows Desktop update abort, open since **July 31**. Windows update reliability remains a repeated theme.
- [Issue #77463](https://github.com/NousResearch/hermes-agent/issues/77463) — Critical child-env scrub bypass cluster, open since **August 3**. Despite the severity, it has no dedicated PR in today’s list.
- [Issue #80276](https://github.com/NousResearch/hermes-agent/issues/80276) — Camofox stale-tab recovery misses HTTP 410, open since **August 6**; browser tools wedge until restart.
- [PR #56043](https://github.com/NousResearch/hermes-agent/pull/56043) — Spotify URI normalization/detection hardening, open since **July 1**. Stale but non-trivial plugin fix.
- [PR #79840](https://github.com/NousResearch/hermes-agent/pull/79840) — Fallback chain fix so benched credentials don’t disqualify a provider, open since **August 6**. It affects billing/failover behavior and deserves review.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-24

## 1. Today's Overview

PicoClaw had a quiet but maintenance-heavy day: no new releases, two stale-closed issues, and five stale-labeled PRs closed in the last 24 hours. No open issues were updated in the window, while two PRs remain open — one new feature (#3344) and one long-running DeltaChat refactor (#3222). The stale closures suggest active backlog cleanup rather than a surge of new user-facing work. Overall project health appears stable, with security-hardening and reliability fixes progressing across messaging-channel media handling and WhatsApp connectivity.

## 2. Releases

No new releases were published in the last 24 hours. There are no release notes, breaking changes, or migration steps to report.

## 3. Project Progress

Five PRs were closed in this window, all carrying the `stale` label. The provided data does not confirm whether they were merged or closed without merging, but the work they represent includes:

- [PR #3324 — fix(weixin): use CreateSafeHTTPClient for media downloads](https://github.com/sipeed/picoclaw/pull/3324)  
  Hardens Weixin CDN/remote media downloads against redirects to loopback/private hosts.

- [PR #3323 — fix(wecom): use CreateSafeHTTPClient for media downloads](https://github.com/sipeed/picoclaw/pull/3323)  
  Applies the same SSRF hardening to WeCom inbound/outbound media downloads.

- [PR #3322 — fix(channels): block private targets on inbound media downloads](https://github.com/sipeed/picoclaw/pull/3322)  
  Extends `BlockPrivateTargets` protection to QQ, Telegram, Discord, LINE, and Slack inbound attachments, closing potential SSRF exposure.

- [PR #3321 — fix(agent): move dynamic context after history to preserve prefix caching](https://github.com/sipeed/picoclaw/pull/3321)  
  Moves per-request dynamic context after conversation history so changing tokens do not invalidate LLM prefix caches.

- [PR #3320 — fix(deps): bump whatsmeow to unblock WhatsApp "client outdated (405)"](https://github.com/sipeed/picoclaw/pull/3320)  
  Updates the WhatsApp library to address the client-version rejection that was leaving the native WhatsApp channel disconnected.

Two PRs remain open:

- [PR #3344 — Add Build Remote Agent phone pairing (gbr/1)](https://github.com/sipeed/picoclaw/pull/3344)  
- [PR #3222 — refactor(deltachat): cleanup implementation, documentation -200LOC](https://github.com/sipeed/picoclaw/pull/3222)

## 4. Community Hot Topics

The most commented items in the last 24 hours were both stale-closed feature requests:

- [Issue #3302 — Support OAuth 2.1 for MCP servers](https://github.com/sipeed/picoclaw/issues/3302) — 4 comments  
  Requests OAuth 2.1 support for MCP servers, referencing issue #2546. The request is tagged as a nice-to-have/enhancement rather than a core roadmap item.

- [Issue #3325 — Render Telegram tables with rich messages](https://github.com/sipeed/picoclaw/issues/3325) — 2 comments  
  Requests native Telegram table rendering instead of degraded Markdown-to-plain-text fallback, citing newer Telegram Bot API capabilities.

No PRs had significant comment/reaction activity. All reaction counts are zero.

Underlying needs: users want modern auth interoperability for MCP servers, and richer, platform-native formatting for Telegram output.

## 5. Bugs & Stability

No new bug reports were opened in the last 24 hours. However, several PRs address notable reliability/security bugs:

1. **SSRF exposure in channel media downloads — High severity**  
   Weixin, WeCom, QQ, Telegram, Discord, LINE, and Slack media downloads could potentially follow redirects to loopback/private hosts.  
   Fix PRs: [#3324](https://github.com/sipeed/picoclaw/pull/3324), [#3323](https://github.com/sipeed/picoclaw/pull/3323), [#3322](https://github.com/sipeed/picoclaw/pull/3322).

2. **WhatsApp channel "client outdated (405)" — High severity**  
   The pinned `whatsmeow` version was rejected by WhatsApp, causing connection drops and no reconnect.  
   Fix PR: [#3320](https://github.com/sipeed/picoclaw/pull/3320).

3. **Prefix-cache degradation caused by dynamic context placement — Medium severity**  
   Dynamic context in the system prompt invalidated positional prefix caches, likely increasing latency/cost.  
   Fix PR: [#3321](https://github.com/sipeed/picoclaw/pull/3321).

## 6. Feature Requests & Roadmap Signals

Two feature requests were closed as stale in this window:

- [Issue #3302 — OAuth 2.1 for MCP servers](https://github.com/sipeed/picoclaw/issues/3302)  
  Tagged as nice-to-have, not core roadmap. Stale closure lowers the likelihood of near-term implementation unless maintainers explicitly re-prioritize it.

- [Issue #3325 — Render Telegram tables with rich messages](https://github.com/sipeed/picoclaw/issues/3325)  
  Depends on newer Telegram Bot API features. Also stale-closed, so likely deprioritized.

In-flight feature/refactor signals:

- [PR #3344](https://github.com/sipeed/picoclaw/pull/3344) proposes a new Build Remote Agent phone-pairing adapter, letting a phone spectate a desktop agent via `gbr/1`.
- [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) proposes a substantial DeltaChat cleanup, including dropping legacy fallbacks, removing password-based email configuration, and renaming `invite_link` → `join_invite_link`.

## 7. User Feedback Summary

Visible user/contributor pain points from this window:

- **WhatsApp reliability** — the native WhatsApp channel was effectively dead due to client-version rejection ([#3320](https://github.com/sipeed/picoclaw/pull/3320)).
- **Security concerns in channel media downloads** — multiple channels lacked SSRF/private-target protections ([#3322](https://github.com/sipeed/picoclaw/pull/3322), [#3323](https://github.com/sipeed/picoclaw/pull/3323), [#3324](https://github.com/sipeed/picoclaw/pull/3324)).
- **Poor Telegram table output** — Markdown tables degrade to plain text/monospaced blocks instead of Telegram's native table UI ([#3325](https://github.com/sipeed/picoclaw/issues/3325)).
- **MCP auth modernization** — users want OAuth 2.1 support for MCP servers ([#3302](https://github.com/sipeed/picoclaw/issues/3302)).
- **Agent performance** — dynamic context placement was hurting prefix caching, likely increasing request cost/latency ([#3321](https://github.com/sipeed/picoclaw/pull/3321)).
- **Phone pairing desire** — a contributor wants to pair a phone as a remote spectator/companion to the desktop agent ([#3344](https://github.com/sipeed/picoclaw/pull/3344)).

No direct satisfaction/dissatisfaction metrics were provided in the data.

## 8. Backlog Watch

Open items that may need maintainer attention:

- [PR #3222 — refactor(deltachat): cleanup implementation, documentation -200LOC](https://github.com/sipeed/picoclaw/pull/3222)  
  Open since 2026-07-03 with no recorded comments. This is a substantial cleanup/refactor and likely needs a maintainer review or explicit decision.

- [PR #3344 — Add Build Remote Agent phone pairing (gbr/1)](https://github.com/sipeed/picoclaw/pull/3344)  
  Newly opened 2026-08-23; needs review, especially around protocol/security constraints.

- The stale-closed PRs [#3320](https://github.com/sipeed/picoclaw/pull/3320), [#3321](https://github.com/sipeed/picoclaw/pull/3321), [#3322](https://github.com/sipeed/picoclaw/pull/3322), [#3323](https://github.com/sipeed/picoclaw/pull/3323), and [#3324](https://github.com/sipeed/picoclaw/pull/3324) may need verification if they were closed before being merged.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-24

## Today's Overview

NanoClaw is in a high-activity window: **50 PRs were updated in the last 24 hours** (30 open, 20 closed/merged), while issues were quieter at 4 updates (3 open, 1 closed). The majority of activity is core-team release-readiness and dependency-hardening work: Chat SDK 4.32.0 bump, per-channel typing-indicator lifetime, pnpm `minimumReleaseAge` enforcement, and a hardened-image repin. No formal release was published today, although a **v2.3.0 release PR** was closed. Project health is stable but release-blocking: three open reliability bugs — including two high-severity items — remain active.

## Releases

**No release was published today** (new releases: 0). A release-prep PR for v2.3.0 was closed: [PR #3495](https://github.com/qwibitai/nanoclaw/pull/3495). No user-facing release notes are available yet.

## Project Progress

Visible closed/merged PRs today:

- **v2.3.0 release prep** – [PR #3495](https://github.com/qwibitai/nanoclaw/pull/3495) closed: bumps `package.json` to 2.3.0 and prepares changelog notes.
- **Hardened image repin** – [PR #3496](https://github.com/qwibitai/nanoclaw/pull/3496) closed: repins to `hardened-2026-08-23` to fix failed setup on new hardened installs caused by an `agent-runner-lock-sha256` label mismatch.
- **Chat SDK 4.32.0 bump** – [PR #3466](https://github.com/qwibitai/nanoclaw/pull/3466) closed, with the current stacked version open as [PR #3490](https://github.com/qwibitai/nanoclaw/pull/3490). The channel twin [PR #3465](https://github.com/qwibitai/nanoclaw/pull/3465) is open.
- **Per-channel typing-indicator lifetime** – [PR #3467](https://github.com/qwibitai/nanoclaw/pull/3467) closed, reworked as stacked [PR #3491](https://github.com/qwibitai/nanoclaw/pull/3491). WhatsApp twin [PR #3468](https://github.com/qwibitai/nanoclaw/pull/3468) is open.
- **pnpm `minimumReleaseAge` gate** – [PR #3469](https://github.com/qwibitai/nanoclaw/pull/3469) closed, reworked as stacked [PR #3492](https://github.com/qwibitai/nanoclaw/pull/3492). Providers twin [PR #3471](https://github.com/qwibitai/nanoclaw/pull/3471) and channels twin [PR #3470](https://github.com/qwibitai/nanoclaw/pull/3470) are open.

Notable open feature/contributor PRs:

- Build Remote Agent phone pairing (gbr/1) – [PR #3494](https://github.com/qwibitai/nanoclaw/pull/3494)
- Cursor Agent provider skill – [PR #3355](https://github.com/qwibitai/nanoclaw/pull/3355), [PR #3356](https://github.com/qwibitai/nanoclaw/pull/3356)
- Codex structured setup-driver authentication – [PR #3489](https://github.com/qwibitai/nanoclaw/pull/3489)
- MindsHub provider guide – [PR #3493](https://github.com/qwibitai/nanoclaw/pull/3493)

The earlier singleton PRs #3466/#3467/#3469 were closed and replaced by the stacked `main` chain #3490 ← #3491 ← #3492, a deliberate process change to keep CI checks and merge order explicit.

## Community Hot Topics

- **Issue #2404** – [Double delivery when agent uses `send_message` MCP tool and `<message>` blocks in the same turn](https://github.com/qwibitai/nanoclaw/issues/2404) is the most-commented issue (4 comments). Open since May and updated today; users need a single delivery path when MCP tool output and native message blocks contain the same text.
- **Issue #3456** – [Discord approval `custom_id` corruption](https://github.com/qwibitai/nanoclaw/issues/3456) was closed today after a high-severity report: redundant Button `value` param made approval/ask-question cards unusable in Discord.
- **Core-team dependency stack** – The cluster around [PR #3490](https://github.com/qwibitai/nanoclaw/pull/3490), [PR #3491](https://github.com/qwibitai/nanoclaw/pull/3491), and [PR #3492](https://github.com/qwibitai/nanoclaw/pull/3492) plus their channel/provider twins shows strong coordination around dependency hygiene and release readiness.
- **New contributor feature PRs** – [Remote phone pairing](https://github.com/qwibitai/nanoclaw/pull/3494), [Cursor provider](https://github.com/qwibitai/nanoclaw/pull/3355), and [MindsHub docs](https://github.com/qwibitai/nanoclaw/pull/3493) are generating community interest.

## Bugs & Stability

Ranked by severity:

1. **High – [Issue #3455](https://github.com/qwibitai/nanoclaw/issues/3455)**: `poll-loop` heartbeat is not touched between claim and first SDK event. The `host-sweep` claim-stuck watchdog (`CLAIM_STUCK_MS = 60_000`) can kill legitimately busy turns forever, with no self-recovery. No linked fix PR yet.
2. **High – [Issue #3456](https://github.com/qwibitai/nanoclaw/issues/3456)**: Discord approval cards were unusable because Button `value` corrupted `custom_id`, causing wrong-option resolution and duplicate resends. The issue is closed, so a fix appears to be in progress or already merged.
3. **High / long-standing – [Issue #2404](https://github.com/qwibitai/nanoclaw/issues/2404)**: double delivery via MCP `send_message` plus `<message>` blocks. Root cause involves the MCP subprocess (`StdioServerTransport`) running separately from the poll loop. No fix PR linked.
4. **Medium – [Issue #3457](https://github.com/qwibitai/nanoclaw/issues/3457)**: `session-db.insertMessage()` uses a plain `INSERT INTO messages_in`, crashing on UNIQUE-constraint violation when a retried delivery reuses the same message id. Can compound duplicate-message symptoms.

Also note the setup regression addressed by [PR #3496](https://github.com/qwibitai/nanoclaw/pull/3496): new hardened installs failed setup from 2026-08-21 until repin.

## Feature Requests & Roadmap Signals

- **Remote agent / phone pairing** – [PR #3494](https://github.com/qwibitai/nanoclaw/pull/3494) proposes a `gbr/1` adapter so a phone can spectate a desktop agent.
- **More provider integrations** – Cursor ([#3355](https://github.com/qwibitai/nanoclaw/pull/3355), [#3356](https://github.com/qwibitai/nanoclaw/pull/3356)), Codex ([#3489](https://github.com/qwibitai/nanoclaw/pull/3489)), MindsHub ([#3493](https://github.com/qwibitai/nanoclaw/pull/3493)).
- **GitHub polling mode** – [PR #2301](https://github.com/qwibitai/nanoclaw/pull/2301) remains open; it adds a no-inbound-port GitHub integration for NAT/firewall environments.
- **Typing-indicator lifecycle** – [PR #3491](https://github.com/qwibitai/nanoclaw/pull/3491) / [PR #3468](https://github.com/qwibitai/nanoclaw/pull/3468) will let channel adapters declare their own typing-indicator lifetime (e.g., 25s for WhatsApp Cloud).
- **Chat SDK 4.32 + Telegram "/" commands** – [PR #3490](https://github.com/qwibitai/nanoclaw/pull/3490) / [PR #3465](https://github.com/qwibitai/nanoclaw/pull/3465) are likely blockers for v2.3.0.

Prediction: v2.3.0 will likely include the Chat SDK 4.32.0 bump, per-channel typing cadence, pnpm release-age gate, and the hardened-image repin. Cursor/Codex provider additions may land in the following minor release.

## User Feedback Summary

- **Reliability is the dominant user pain point**: duplicate message delivery ([#2404](https://github.com/qwibitai/nanoclaw/issues/2404)), broken Discord approval buttons ([#3456](https://github.com/qwibitai/nanoclaw/issues/3456)), retry crashes ([#3457](https://github.com/qwibitai/nanoclaw/issues/3457)), and permanent session blocking ([#3455](https://github.com/qwibitai/nanoclaw/issues/3455)).
- **Operator friction**: hardened installs failed setup for days, requiring an emergency repin ([#3496](https://github.com/qwibitai/nanoclaw/pull/3496)).
- **Signal users**: image/file attachments are broken because the adapter references a path not mounted into the agent container ([#3142](https://github.com/qwibitai/nanoclaw/pull/3142)).
- **Positive signals**: maintainers are responsive — 20 PRs closed/merged, and issue #3456 was closed the same day it was reported. Contributors are actively expanding provider/channel support.

## Backlog Watch

- **[Issue #2404](https://github.com/qwibitai/nanoclaw/issues/2404)** – Double delivery via MCP + `<message>` blocks: open since 2026-05-10, updated today, 4 comments. The most important long-unanswered bug.
- **[PR #2301](https://github.com/qwibitai/nanoclaw/pull/2301)** – GitHub polling mode: open since 2026-05-06; substantial feature awaiting review/merge.
- **[PR #2537](https://github.com/qwibitai/nanoclaw/pull/2537)** – Pre-commit hooks: open since 2026-05-18; CI/quality improvement.
- **[PR #3142](https://github.com/qwibitai/nanoclaw/pull/3142)** – Signal attachment forwarding fix: open since 2026-07-27; fixes broken attachment paths for Signal users.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-24

## 1. Today's Overview
NullClaw saw minimal activity over the past 24 hours: **1 open issue updated**, **0 pull requests touched**, and **no new releases**. The project is in a low-activity maintenance phase, with no code merges or version bumps landing today. The single active thread is a newly filed concurrency bug (Issue #991) involving indefinite hangs in MCP stdio calls when a standalone agent invocation collides with the gateway's lock on an MCP server. No maintainer response or fix PR has appeared yet, so the issue remains an open reliability risk. Overall project health is stable but warrants attention on the reported deadlock.

## 2. Releases
No new releases were published in the last 24 hours. The most recent known version in the wild remains **2026.8.22** (as referenced in the issue's reproduction steps).

## 3. Project Progress
**No pull requests were merged or closed today.** No features advanced, no fixes landed, and no code changes were committed to the main branch within the reporting window. The project effectively had a zero-code-change day.

## 4. Community Hot Topics
- **[Issue #991 — MCP stdio calls can hang indefinitely behind the Proxmox launcher lock](https://github.com/nullclaw/nullclaw/issues/991)** (OPEN, 2 comments, 0 👍)
  - The only active discussion, filed by `locke1979` on 2026-08-23. It describes a standalone `nullclaw agent` invocation hanging forever when the configured stdio MCP server is already owned by the long-lived `nullclaw-gateway.service`. Reporter's environment: Proxmox CT 151, NullClaw 2026.8.22, read-only Proxmox MCP bridge exposing 148 tools.
  - **Underlying need:** Users expect concurrent invocations of `nullclaw agent` and the gateway to coexist gracefully, with proper lock acquisition timeouts or process ownership handoff. The current lock design assumes exclusive access, which breaks standalone agent use cases when the gateway is running.

## 5. Bugs & Stability
- **[#991 — MCP stdio hang behind launcher lock](https://github.com/nullclaw/nullclaw/issues/991)** — **Severity: High** (indefinite hang, reproducible, affects production deployments)
  - A standalone agent invocation blocks indefinitely because the stdio MCP server it needs is already locked by the running gateway process. The hang has no apparent timeout, making it a reliability/availability issue for scheduled or interactive agent runs on infrastructure like Proxmox.
  - **No fix PR exists.** The issue is open with 2 comments and no linked resolution; maintainer triage is still pending.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed today. However, Issue #991 signals an implicit roadmap item: **lock acquisition with timeout/retry semantics** for MCP stdio server ownership between the gateway and standalone agent processes. Given that the reporter's setup uses a 148-tool read-only Proxmox bridge, the scale of configured MCP servers amplifies the practical impact. A likely response would be a patch release (e.g., 2026.8.23+) introducing a non-blocking lock with watchdog timeout, or a "shared read-only mode" for stdio MCP servers so multiple consumers can connect safely.

## 7. User Feedback Summary
The only feedback signal today is from the reporter of Issue #991. **Pain point:** running `nullclaw agent` as a one-off on the same host as the gateway hits a hard deadlock rather than a clean error, forcing a manual intervention. **Use case:** a Proxmox-based deployment with a read-only MCP bridge (148 tools) where the gateway runs as a service but users still need standalone agent invocations for ad-hoc tasks. **Satisfaction:** negative — the hang blocks workflow entirely and the issue is unimplemented from the reporter's perspective (missing timeout/fallback behavior). The low comment count (2) suggests the community is small or the issue is too fresh to have drawn engagement.

## 8. Backlog Watch
- **[Issue #991 — MCP stdio hang](https://github.com/nullclaw/nullclaw/issues/991)** — Filed 2026-08-23, only 1 day old, so not yet "long-unanswered" by historical standards. However, it is the **only open issue** and has **zero maintainer acknowledgment** (no `triage`, `bug`, or `confirmed` labels mentioned, no assignee). Given its severity and easy reproducibility, it should be prioritized in the next maintainer cycle to avoid the project accumulating unresolved reliability debt.

---
*Data source: NullClaw GitHub activity for 2026-08-24 (Issues updated: 1 open / 0 closed; PRs updated: 0; Releases: 0).*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-24

## 1. Today's Overview
IronClaw shows high sustained activity: 9 issues and 24 PRs were touched in the last 24 hours, with 5 PRs merged/closed and no new releases. The project is executing on two major workstreams — the **v1.4.0 persistent per-user sandbox epic** ([#7732](https://github.com/nearai/ironclaw/issues/7732)) and a **four-lane CI overhaul** (T1–T4) with multiple in-flight PRs and throwaway probe branches. A cluster of user-reported integration setup failures (Notion, Gmail, Slack) was triaged from the #x-ai-product-feedback Slack channel and filed as open bugs. Maintainers also opened forward-looking work on tool-availability filtering and grounding suggestions in real user data, indicating healthy iteration on both reliability and model-surface correctness.

## 2. Releases
No new releases in the last 24 hours.

## 3. Project Progress
**Merged/closed PRs (all Dependabot dependency bumps; 5 total, 3 visible in top-20):**
- [#7730](https://github.com/nearai/ironclaw/pull/7730) — Closed: bump the "everything-else" group with 6 updates (uuid, base64, toml, etc.)
- [#7406](https://github.com/nearai/ironclaw/pull/7406) — Closed: bump the actions group with 4 updates (claude-code-action, setup-node, rust-cache, docker/login-action)
- [#7262](https://github.com/nearai/ironclaw/pull/7262) — Closed: bump the wasm group with 2 updates (wit-component, wit-parser)

**Feature work actively advancing (open PRs):**
- [#7810](https://github.com/nearai/ironclaw/pull/7810) — Manifest-declared direct-exec credential bindings behind the managed proxy; completes the one-persistent-sandbox-per-user runtime with `gh` CLI credential mediation (size XL, low risk)
- [#7833](https://github.com/nearai/ironclaw/pull/7833) — Suggestions generation now runs over the user's no-approval, read-only connected tools, closing [#7812](https://github.com/nearai/ironclaw/issues/7812)
- [#7818](https://github.com/nearai/ironclaw/pull/7818) — Subagent background mode slices 2b+2c: receipt spawns, per-child delivery, activation, healing sweeps
- [#7826](https://github.com/nearai/ironclaw/pull/7826) — Fixes four catalog entries that fail at install (legacy `capabilities.json` requirement, egress budget mis-measurement, schema-ref mismatches) and lets the IronHub deep link land
- [#7831](https://github.com/nearai/ironclaw/pull/7831) — Design System Phase 3a foundation: non-blocking Chromatic visual-regression lane + missing design-token axes
- **CI overhaul lanes:** [#7821](https://github.com/nearai/ironclaw/pull/7821) (T1 setup-rust composite), [#7817](https://github.com/nearai/ironclaw/pull/7817) (T2 nextest pipeline), [#7819](https://github.com/nearai/ironclaw/pull/7819) (T3 PR/queue convergence), [#7809](https://github.com/nearai/ironclaw/pull/7809) (T4 canonical preflight), plus throwaway CI probes [#7838](https://github.com/nearai/ironclaw/pull/7838) and [#7839](https://github.com/nearai/ironclaw/pull/7839)

## 4. Community Hot Topics
- **[#7732 — Epic: Persistent per-user sandbox with iron-proxy; defer loop executors](https://github.com/nearai/ironclaw/issues/7732)** — 9 comments, the most-active item. The flagship v1.4.0 epic critiquing today's per-command Docker lifecycle (container created/removed per shell command) and `/workspace` persistence model. Underlying need: users want a stable, long-lived "personal computer" in the cloud rather than ephemeral shells.
- **[#7812 — Onboarding suggestions: respect user-level tool permissions, generate with read-only tool access](https://github.com/nearai/ironclaw/issues/7812)** — 3 comments. Suggestions are currently generated only over internal search tools, so they aren't grounded in the user's actual connected data. PR [#7833](https://github.com/nearai/ironclaw/pull/7833) closes it.
- **[#7836 — Tool advertisement: filter by availability](https://github.com/nearai/ironclaw/issues/7836)** — 0 comments yet, but high signal: the model sees tools that can't execute in the current deployment, producing doomed calls (measured on PinchBench).

## 5. Bugs & Stability
Three user-facing integration setup failures were filed from Slack feedback triage — all open, no dedicated fix PRs yet:

1. **[#7830 — Notion extension fails to install](https://github.com/nearai/ironclaw/issues/7830)** (high severity) — "Notion tool doesn't want to install in my IronClaw."
2. **[#7829 — Gmail setup fails in web UI; auth popup disappears](https://github.com/nearai/ironclaw/issues/7829)** (high severity) — OAuth popup appears for ~1 second and vanishes, blocking Extensions > Registry > Gmail.
3. **[#7828 — Slack setup blocked in NEAR Foundation account](https://github.com/nearai/ironclaw/issues/7828)** (high severity) — Slack connection fails for at least one `near.foundation` user.

These share a common theme of fragile extension installation and OAuth flows. Related fix in flight: **[#7826](https://github.com/nearai/ironclaw/pull/7826)** addresses four catalog entries that reach install and fail, likely the same bug class. Also new: **[#7836](https://github.com/nearai/ironclaw/issues/7836)** flags that advertised tooling includes non-executable capabilities, causing model dispatch failures.

## 6. Feature Requests & Roadmap Signals
- **Persistent per-user sandbox ([#7732](https://github.com/nearai/ironclaw/issues/7732))** — v1.4.0 epic; implementation spans [#7810](https://github.com/nearai/ironclaw/pull/7810) and [#7825](https://github.com/nearai/ironclaw/issues/7825) (native egress auth recipes via iron-proxy, retiring the GitHub-specific carve-out).
- **Tool advertisement by availability ([#7836](https://github.com/nearai/ironclaw/issues/7836))** — opened by core maintainer serrrfirat; likely targeted for v1.4.0.
- **Grounded suggestions ([#7812](https://github.com/nearai/ironclaw/issues/7812)) addressed by [#7833](https://github.com/nearai/ironclaw/pull/7833)** — on the immediate horizon.
- **Design System Phase 3a ([#7831](https://github.com/nearai/ironclaw/pull/7831))** — visual-regression infrastructure and token expansion signal a UI reskin in progress.
- **IronHub agent link operator surface ([#7516](https://github.com/nearai/ironclaw/pull/7516), [#7826](https://github.com/nearai/ironclaw/pull/7826))** — WebUI-complete IronHub integration.

**Prediction:** v1.4.0 will ship the persistent sandbox runtime plus iron-proxy egress auth, tool-availability filtering, and user-data-grounded suggestions.

## 7. User Feedback Summary
Real pain points captured from the #x-ai-product-feedback Slack triage:
- **Notion install failure** — user cannot install the Notion tool.
- **Gmail OAuth popup flashes and disappears** — blocks setup through Extensions > Registry > Gmail.
- **Slack setup blocked** — fails in a NEAR Foundation account.

The dominant dissatisfaction cluster is **extension installation and OAuth reliability in the WebUI**, affecting at least three major integrations. Users expect frictionless connected-account onboarding; the current experience is a top-three stability concern.

## 8. Backlog Watch
- **[#7020 — Bump tokio-tungstenite 0.29.0 → 0.30.0](https://github.com/nearai/ironclaw/pull/7020)** — open since 2026-08-02 (3+ weeks), low-risk dependency bump awaiting review.
- **[#7255 — docs(governance): evaluate the APDD kit + propose scoped integration](https://github.com/nearai/ironclaw/pull/7255)** — open since 2026-08-05 (nearly 3 weeks); governance documentation pending.
- **[#7516 — feat(webui): operator surface for the IronHub agent link](https://github.com/nearai/ironclaw/pull/7516)** — open since 2026-08-12 (~12 days); new contributor PR, companion [#7826](https://github.com/nearai/ironclaw/pull/7826) also open.

**Project health assessment:** Strong and healthy. The CI overhaul and sandbox epic show disciplined, well-scoped engineering (explicit T1–T4 lanes, throwaway probes, deferred scope). The main risk area is the WebUI integration/OAuth bug cluster, which is actively triaged and likely to draw fix PRs from the ongoing [#7826](https://github.com/nearai/ironclaw/pull/7826) work.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-24

## Today's Overview

All activity in the last 24 hours consisted of older issues and PRs being closed as **stale**: 4 issues and 3 PRs were updated, all now closed, with no open items in this batch. There were **no new releases** and no newly created issues/PRs. This points to a quiet period dominated by automated stale-housekeeping rather than fresh development or community discussion. The project appears stable but currently low-velocity, with important unresolved user topics being swept into closure.

## Releases

No new releases were published in this period.

## Project Progress

Three PRs were closed/updated, though all carry the `[stale]` tag and appear to have been closed rather than explicitly marked merged:

- [PR #1197](https://github.com/netease-youdao/LobsterAI/pull/1197) — **Agent management page interaction optimization**. Aimed to shorten the deletion interaction path and improve sidebar behavior; originally based on an earlier PR (#1176) with conflicts resolved.
- [PR #1199](https://github.com/netease-youdao/LobsterAI/pull/1199) — **Model-level context window and token settings**. Adds per-model `contextWindow` / `maxTokens` configuration, persists/export these fields, and propagates them into direct chat, Cowork, and OpenClaw configs.
- [PR #1201](https://github.com/netease-youdao/LobsterAI/pull/1201) — **NIM superteam group name fix**. Fixes a hardcoded `teamTypeNum` mismatch in `nimGateway.ts`, which caused incorrect group name resolution for superteam/p2p messages. Linked to Issue #1200.

These PRs represent meaningful improvements — especially UI/UX for agent management, model-level token settings, and a targeted NIM SDK bug fix — but their closure as stale makes the final merge status unclear.

## Community Hot Topics

All four updated issues had exactly **2 comments** and no reactions, so no single topic dominated. The most notable underlying concerns:

- [Issue #1196](https://github.com/netease-youdao/LobsterAI/issues/1196) — **Forced workspace file clutter**: Users dislike automatically creating `AGENTS.md`, `USER.md`, and six related files in every workspace. They ask for a global/central `agents.md` or hidden directory support.
- [Issue #1198](https://github.com/netease-youdao/LobsterAI/issues/1198) — **Gateway restart UX**: Restart progress bar disappears midway, and subsequent dialogs report the model as unavailable. Also mentions browser service detection being unreliable.
- [Issue #1200](https://github.com/netease-youdao/LobsterAI/issues/1200) — **NIM superteam name bug**: Hardcoded `teamTypeNum` breaks group-name resolution; the fix exists in PR #1201.
- [Issue #1202](https://github.com/netease-youdao/LobsterAI/issues/1202) — **Sensitive model key leakage**: An agent can be prompted to reveal model key/environment variable information. This is a security concern.

## Bugs & Stability

No new bugs were opened, but four previously reported issues reached stale-closure. Ranked by severity:

1. **High — Model key information leak** ([Issue #1202](https://github.com/netease-youdao/LobsterAI/issues/1202))  
   An agent could disclose key configuration and environment-variable details. No fix PR is associated. This should be treated as a security-relevant item and likely needs reopening or verification.

2. **Medium — NIM superteam group name resolution** ([Issue #1200](https://github.com/netease-youdao/LobsterAI/issues/1200))  
   Wrong `teamTypeNum` causes @-mentions in superteams to display raw IDs instead of real group names. A one-line fix was submitted in [PR #1201](https://github.com/netease-youdao/LobsterAI/pull/1201).

3. **Medium — Gateway restart UX / browser service detection** ([Issue #1198](https://github.com/netease-youdao/LobsterAI/issues/1198))  
   Restart progress disappears and browser service is incorrectly reported unavailable. No associated fix PR.

## Feature Requests & Roadmap Signals

- **Global agent configuration**: Issue #1196 suggests allowing a shared/external `agents.md` or hidden-dir config instead of forcing per-workspace files. This is a likely quality-of-life improvement if the project revisits agent initialization.
- **Model-level token settings**: PR #1199 already implements per-model `contextWindow` and `maxTokens`, signaling a move toward finer-grained model configuration.
- **Agent management UX**: PR #1197 addresses deep interaction paths for deleting/editing agents, a sign that improving the management panel is on the roadmap.

Coming next-version items most likely include the **model token/context settings** and possibly the **agent management interaction improvements** from those two PRs.

## User Feedback Summary

User pain points in this batch:

- Setup/workspace pollution: forced creation of six system files is annoying and disruptive, especially when switching directories.
- Opaque operational states: gateway restart progress and browser availability need better visual/status feedback.
- Security concerns: users expect the assistant to refuse disclosing model keys or sensitive env vars.
- Integration correctness: NIM group-name display should work correctly for both normal and supergroups.

There was no positive/negative sentiment data beyond these reports, but the issues reflect real workflow friction rather than feature requests alone.

## Backlog Watch

All items in the 24-hour window were **closed as stale**, but several deserve maintainer attention and possibly reopening:

- [Issue #1202](https://github.com/netease-youdao/LobsterAI/issues/1202) — Sensitive key leakage has no visible fix and should not be silently archived.
- [Issue #1198](https://github.com/netease-youdao/LobsterAI/issues/1198) — Restart/browser service UX bug has no matching fix.
- [Issue #1200](https://github.com/netease-youdao/LobsterAI/issues/1200) — The fix PR #1201 exists, but the issue was stale-closed; merge status should be confirmed.

The lack of open items today may indicate a healthy triage process — or that important unresolved issues are being auto-closed without maintainer follow-up.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-24

## 1. Today's Overview
Moltis saw moderate activity in the last 24 hours: 3 issues were updated (2 still open, 1 closed) and 6 pull requests were touched, all of them still open with none merged or closed. The PR pipeline is healthy and contributor-driven — rubenssoto authored three fixes (memory batching, backend config, cron delivery, WhatsApp ingestion) and IlyaBizyaev contributed two (skill sidecars, MCP client lifecycle). No new releases were published. The closure of issue #1230 (fail-closed security hooks) signals feature progress, while the other updates are dominated by bug fixes and hardening work awaiting review.

## 2. Releases
No new releases were published in the last 24 hours. The latest public release remains unchanged as of this digest.

## 3. Project Progress
No PRs were merged or closed in the last 24 hours (0 merged/closed, 6 open), so no commit-level changes landed today. However, notable progress:

- **[Issue #1230 (closed)](https://github.com/moltis-org/moltis/issues/1230)** — The feature request for an opt-in **fail-closed error policy for modifying security hooks** was closed, likely indicating the gap identified by the community has been addressed or accepted into the roadmap.
- **Feature advancement in review:**
  - [PR #1233 — WhatsApp document ingestion](https://github.com/moltis-org/moltis/pull/1233): net-new user-facing capability to download and persist inbound WhatsApp documents instead of surfacing only metadata.
  - [PR #1226 — Cron delivery to originating chat](https://github.com/moltis-org/moltis/pull/1226): scheduled outputs will be routed back to the chat/channel that scheduled them, including thread/topic preservation.
  - [PR #1235 — Memory config normalization](https://github.com/moltis-org/moltis/pull/1235): aligns backend naming, serialization, and defaults with tests.

These PRs are all open and awaiting review/merge.

## 4. Community Hot Topics
The most active discussion this cycle is **Issue #245** with 2 comments:

- **[Issue #245 — TLS h2/ALPN breaks WebSocket, WS upgrade returns 405](https://github.com/moltis-org/moltis/issues/245)** — First created in February 2026, this issue saw renewed attention (updated 2026-08-23). The core complaint: advertising `h2` first in ALPN causes WebSocket upgrades to fail on *fresh* browser connections or page refreshes; only existing tabs survive via TLS session reuse. This is a real usability pain point for TLS deployments, and the lack of a fix PR is conspicuous.

[Issue #1230](https://github.com/moltis-org/moltis/issues/1230) received 1 comment and reflects a security-minded user need: runtime failures in security hooks should *fail closed* by default rather than degrade to continuation. The underlying need is predictable, safe policy enforcement for shell-hook based guardrails.

PRs recorded no comment activity in the data window.

## 5. Bugs & Stability
Bugs and stability items updated in the last 24 hours, ranked by severity:

1. **Process crash in local memory embeddings — [PR #1236](https://github.com/moltis-org/moltis/pull/1236)** — GGUF embedding batches can exceed `n_ctx = 512` and terminate the entire Moltis process. Severity is high (process death), but a fix PR is already open to bound encoder batches.
2. **TLS/WebSocket 405 on refresh — [Issue #245](https://github.com/moltis-org/moltis/issues/245)** — Long-standing (since February) and still unfixed. Affects any user behind TLS who refreshes a page or opens a new tab; WebSocket connections silently break. No associated fix PR yet — this is the top stability gap.
3. **Tools stop working in shared Slack channels — [Issue #1224](https://github.com/moltis-org/moltis/issues/1224)** — Open bug reported 2026-08-21 with zero comments; no maintainer response or fix PR. Severity is high for Slack collaboration workflows.
4. **MCP client goes stale after server restart — [PR #1231](https://github.com/moltis-org/moltis/pull/1231)** — Active chat turns dispatch through a closed MCP client until the registry is rebuilt. Fix PR open.
5. **Bundled skill sidecars not found in packaged releases — [PR #1234](https://github.com/moltis-org/moltis/pull/1234)** — `skill-creator` fails with "sidecar file not found" in Docker/pre-built images. Fix PR open.
6. **Cron output misrouted — [PR #1226](https://github.com/moltis-org/moltis/pull/1226)** — Scheduled results don't reliably reach the originating chat; fix PR open.

Notable: every bug in the "fix PR" category has a solution in review, but none have merged yet.

## 6. Feature Requests & Roadmap Signals
- **Fail-closed security hooks (closed #1230)** — Signals a hardening direction for Moltis as a policy/security boundary. Likely to land in the next release.
- **WhatsApp document ingestion ([PR #1233](https://github.com/moltis-org/moltis/pull/1233))** — The strongest roadmap signal for a new user-facing feature; agents currently "know" a document exists but cannot inspect bytes. If merged, this will be in the next version.
- **Cron output delivery to originating chat ([PR #1226](https://github.com/moltis-org/moltis/pull/1226))** — Suggests growing investment in scheduled/automation workflows with correct channel routing.
- **Memory config normalization ([PR #1235](https://github.com/moltis-org/moltis/pull/1235))** — Indicates cleanup of the memory backend config surface, likely preparing for wider memory feature adoption.

Prediction: the next release will likely include the memory fixes (#1235, #1236), the MCP restart fix (#1231), and the WhatsApp ingestion feature (#1233), given they are all already written and in review.

## 7. User Feedback Summary
- **Use-case pain (Slack):** A user reports tools silently failing in shared Slack channels with no preflight checklist omissions — suggesting a reproducibility gap that needs maintainer help.
- **Annoyance with TLS sessions:** The WebSocket breakage (#245) is framed around a real daily workflow (page refresh/new tab), not an edge case; user frustration stems from inconsistent behavior between existing and fresh sessions.
- **Security expectations:** The #1230 author expects hook failures to be *deny-by-default* at security boundaries — a clear signal that some users are deploying Moltis as a policy enforcement point and need strict failure semantics.
- **Operational friction:** PR authors describe real crashes (memory encoder process termination), broken packaged skills, and stale MCP connections — indicating users hit stability issues in production-ish setups.

Overall the feedback pattern shows a mix of feature enthusiasm (security hooks, document ingestion) and stability concerns (crashes, stale connections, TLS WebSocket behavior).

## 8. Backlog Watch
- **[Issue #245 — TLS/ALPN WebSocket 405](https://github.com/moltis-org/moltis/issues/245)** — Open since **2026-02-26** (~6 months). It was updated again this week, confirming it's still reproducible and relevant. Despite 2 comments and clear root-cause detail, it has no maintainer response and no fix PR. This is the most important item needing maintainer attention.
- **[Issue #1224 — Slack shared channel tool failures](https://github.com/moltis-org/moltis/issues/1224)** — Open since 2026-08-21 with no comments or maintainer acknowledgement. Needs triage and ideally a reproduction request.
- No open PRs in the data appear stale; the oldest (#1226) is only 3 days old and actively updated.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — QwenPaw  
**Date:** 2026-08-24  
**Source data:** CoPaw-tracked GitHub activity for `agentscope-ai/QwenPaw`

---

## 1. Today's Overview

QwenPaw is in an active development and review cycle: **14 PRs were updated in the last 24 hours**, with **8 closed/merged** and **6 still open**, while **5 issues were updated**, all remaining open. No new release was published in this window. The closed/merged PR cluster around **skill-system lifecycle**, **auto-title-sync**, and several **bug fixes** indicates that larger feature work is landing. At the same time, newly filed issues point to **stability concerns** around long-running memory usage, conversation interruption, and plugin reload behavior. Community contribution is healthy, with multiple first-time-contributor PRs either merged or awaiting review.

---

## 2. Releases

**No new releases were published in the last 24 hours.**  
There are therefore no release notes, breaking changes, or migration steps to report.

---

## 3. Project Progress

The following PRs were **closed/merged** in this window:

- **#6220** — [`fix(token_usage): don't persist an unseeded cache on shutdown`](https://github.com/agentscope-ai/QwenPaw/pull/6220)  
  Fixes an unconditional flush at shutdown that could persist an empty/unseeded `_disk_cache`, avoiding corrupt/incorrect token usage state.

- **#6203** — [`fix(utils): bound and hide the Windows tasklist liveness probe`](https://github.com/agentscope-ai/QwenPaw/pull/6203)  
  Hardens `_is_pid_running()` on Windows by adding a timeout and hiding the `tasklist` console window, preventing hangs and UI flashes.

- **#6616** — [`fix(cli): build a valid user message for the headless task command`](https://github.com/agentscope-ai/QwenPaw/pull/6616)  
  Fixes `qwenpaw task` not actually running because the instruction string was not converted into the `list[ContentBlock]` type expected by `agentscope==2.0.4.post1`.

- **#7031 / #7033** — [`feat(skill-system): dynamic skill loading + auto-unload + frontmatter fix`](https://github.com/agentscope-ai/QwenPaw/pull/7033)  
  Adds basic runtime infrastructure for dynamic skill loading, auto-unload of idle skills, and fixes frontmatter/lazy-skill path bugs.

- **#7027 / #7030 / #7032** — [`feat(auto-title-sync): auto-memory linked chat title refresh + observability`](https://github.com/agentscope-ai/QwenPaw/pull/7030)  
  Delivers automatic chat-title refresh linked to auto-memory, plus observability improvements. #7027 also includes skill-system cleanup.

These PRs represent meaningful progress in **plugin/skill extensibility**, **CLI correctness**, and **observability**, although no new release has yet shipped them to users.

---

## 4. Community Hot Topics

The most active issues by comment count:

- **[#7221 — `reload_agent()` drops plugin workspace-scoped registrations](https://github.com/agentscope-ai/QwenPaw/issues/7221)** — 3 comments  
  Users report that zero-downtime config reloads lose plugin runtime hooks, modes, and slash commands.  
  *Underlying need:* configuration changes should not require manual plugin re-registration or a full restart.

- **[#7222 — Long-running qwenpaw-backend memory grows unbounded to 20GB+](https://github.com/agentscope-ai/QwenPaw/issues/7222)** — 2 comments  
  A 2-day run sees memory climb from hundreds of MB to 20.7 GB.  
  *Underlying need:* long-lived processes must have stable memory use, especially under heavy document/agent workloads.

- **[#7224 — How to connect Aider CLI as an agent in QwenPaw](https://github.com/agentscope-ai/QwenPaw/issues/7224)** — 1 comment  
  A user asks for supported integration of `aider-chat` as a managed coding agent.  
  *Underlying need:* external CLI coding agents should be cleanly adaptible as first-class QwenPaw agents.

- **[#7218 — Peer closed connection without sending complete message body](https://github.com/agentscope-ai/QwenPaw/issues/7218)** — 1 comment  
  Long inference/writing tasks trigger incomplete chunked reads; the user suspects timeout configuration is missing.  
  *Underlying need:* configurable timeout behavior for custom model providers.

- **[#7217 — Stopping a task makes the next dialogue repeat the previous one](https://github.com/agentscope-ai/QwenPaw/issues/7217)** — 1 comment  
  After interruption, the next conversation replays the prior task’s reasoning regardless of the new question.  
  *Underlying need:* cancellation must reset/preserve session state cleanly.

---

## 5. Bugs & Stability

Ranked by severity:

1. **High — Unbounded memory growth** ([#7222](https://github.com/agentscope-ai/QwenPaw/issues/7222))  
   `qwenpaw-backend` grows to **20.7 GB** after ~2 days of runtime, slowing the whole machine. This is specifically a post-startup accumulation, not the known startup leak from #9.  
   *No fix PR was observed in this window.*

2. **High — Conversation contamination after stop** ([#7217](https://github.com/agentscope-ai/QwenPaw/issues/7217))  
   Stopping a task or conversation causes the next dialogue to follow the previous one’s thoughts and actions, even for unrelated questions. This is a core correctness/usability bug.  
   *No fix PR was observed in this window.*

3. **Medium — Premature disconnect on long responses** ([#7218](https://github.com/agentscope-ai/QwenPaw/issues/7218))  
   Occurs frequently with long texts and long inference: `peer closed connection without sending complete message body (incomplete chunked read)`. The user reports custom-provider timeout limits seem to fire earlier than expected.  
   *No fix PR was observed in this window; likely needs timeout/streaming configurability.*

4. **Medium — Plugin registrations lost after reload** ([#7221](https://github.com/agentscope-ai/QwenPaw/issues/7221))  
   Runtime hooks, modes, and slash commands registered by workspace-scoped plugins disappear after zero-downtime reload.  
   *No direct fix PR linked, but related skill/plugin PRs are in flight.*

---

## 6. Feature Requests & Roadmap Signals

- **External agent integration:** [#7224](https://github.com/agentscope-ai/QwenPaw/issues/7224) requests official Aider CLI integration. This signals a broader demand for pluggable external coding agents.

- **Plugin workspace-scoped persistence:** [#7221](https://github.com/agentscope-ai/QwenPaw/issues/7221) asks for reload-safe plugin registrations. Combined with the merged skill-system PRs, the roadmap appears to be moving toward richer runtime plugin/skill lifecycle management.

- **Observability:** Open PR [#7219](https://github.com/agentscope-ai/QwenPaw/pull/7219) adds an all-agent LLM and tool-call trend chart to Settings → Token Usage, suggesting continued investment in token-usage observability.

- **Likely next-version candidates:** Based on merged/closed PRs in this window, the next release should include dynamic skill loading, auto-title-sync, the token-usage shutdown fix, Windows probe hardening, and headless `qwenpaw task` fix.  
  If open PRs continue forward, DeepSeek catalog refresh ([#7223](https://github.com/agentscope-ai/QwenPaw/pull/7223)), oversized image rejection ([#7220](https://github.com/agentscope-ai/QwenPaw/pull/7220)), reasoning-free titles ([#7187](https://github.com/agentscope-ai/QwenPaw/pull/7187)), and OAuth2 refresh-token persistence ([#7066](https://github.com/agentscope-ai/QwenPaw/pull/7066)) are also strong candidates.

---

## 7. User Feedback Summary

- **Stability pain points dominate:** Users are hitting real production issues with long-running memory growth ([#7222](https://github.com/agentscope-ai/QwenPaw/issues/7222)), broken conversation state after interruption ([#7217](https://github.com/agentscope-ai/QwenPaw/issues/7217)), and streaming disconnects on long tasks ([#7218](https://github.com/agentscope-ai/QwenPaw/issues/7218)).

- **Plugin and integration extensibility is a recurring theme:** The plugin reload regression ([#7221](https://github.com/agentscope-ai/QwenPaw/issues/7221)) and the Aider integration question ([#7224](https://github.com/agentscope-ai/QwenPaw/issues/7224)) show that advanced users are pushing QwenPaw toward more composable agent workflows.

- **Community engagement is positive:** Several first-time contributors have opened or merged PRs in this window — e.g., [#7223](https://github.com/agentscope-ai/QwenPaw/pull/7223), [#7220](https://github.com/agentscope-ai/QwenPaw/pull/7220), and previously [#6203](https://github.com/agentscope-ai/QwenPaw/pull/6203). That indicates a healthy contribution pipeline.

- **Overall satisfaction is mixed:** Feature progress is steady, but the lack of a new release and the high-impact stability issues leave some users waiting for fixes.

---

## 8. Backlog Watch

Items needing maintainer attention:

- **[#7066 — Persist rotated refresh_token for OAuth2 auth-code providers](https://github.com/agentscope-ai/QwenPaw/pull/7066)**  
  Open since Aug 16, marked “Under Review”, first-time contributor. This fixes a real integration bug for remote MCP servers using rotating refresh tokens. Needs a decision/review.

- **[#7183 — Workspace-scoped always-on Skill loading](https://github.com/agentscope-ai/QwenPaw/pull/7183)**  
  Open since Aug 20, no comment count. Adds opt-in always-on skills for specialized agents. Awaiting maintainer review.

- **[#7187 — Exclude reasoning from generated titles](https://github.com/agentscope-ai/QwenPaw/pull/7187)**  
  Open since Aug 21, fixes #6979. Prevents model reasoning from being persisted as chat titles. Needs review/merge.

- **[#7217](https://github.com/agentscope-ai/QwenPaw/issues/7217) and [#7218](https://github.com/agentscope-ai/QwenPaw/issues/7218)**  
  Both are high-impact bugs with only one comment each; they need maintainer reproduction, triage, and ideally fix PRs.

- **[#7224 — Aider CLI integration question](https://github.com/agentscope-ai/QwenPaw/issues/7224)**  
  A support/integration question. This could be closed quickly with a documentation answer or a more formal adapter design.

---

**Project health summary:** Development activity is strong, with multiple features landing and external contributors actively participating. The main risks are stability issues around long-running memory and session state, plus the increasing number of open PRs waiting for maintainer review.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-24

## 1. Today's Overview

ZeroClaw saw a very active 24-hour window: **50 issues and 50 PRs updated**, with **38 issues open/active** and **12 issues closed**, plus **45 open PRs** and **5 closed/merged PRs**. No new releases were published. Activity concentrated on architecture RFCs — runtime-owned sessions, unified attachments, memory lifecycle, and WASM plugin architecture — as well as channel integrations, sandbox/security policy, and provider reliability. The high number of open RFCs, many tagged `needs-author-action` or `needs-maintainer-review`, suggests strong contributor momentum but a growing maintainer decision bottleneck.

## 2. Releases

**No new releases were published in this window.** There are no changelog entries, breaking changes, or migration notes to report.

## 3. Project Progress

- In the provided top-20 PR sample, the only closed PR was [fix(channels): make the filesystem listener cancellation-aware #10217](https://github.com/zeroclaw-labs/zeroclaw/pull/10217), which fixes an idle blocking receive that prevented supervisor shutdown/reload.
- Overall PR stats: **5 closed/merged PRs, 45 open PRs**. Details for the other closed/merged PRs were not included in the provided data.
- Notable closed issues in the window:
  - [\[Feature\]: where is napcat channel #2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) — closed, accepted.
  - [\[Feature\]: Webhook transforms #2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) — closed, accepted.
  - [fix(channels): make the filesystem listener cancellation-aware #9666](https://github.com/zeroclaw-labs/zeroclaw/issues/9666) — closed, fix landed via PR #10217.
  - [\[Feature\]: Route zeroclaw status output through CLI i18n #7099](https://github.com/zeroclaw-labs/zeroclaw/issues/7099) — closed.
  - [\[Tracker\]: WASM plugin program #7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314) — closed.
  - [\[Feature\]: Add Lemmy channel #6441](https://github.com/zeroclaw-labs/zeroclaw/issues/6441) — closed.

Notable open PRs advancing work: [fix(cron): preserve scheduler workspace policy #10253](https://github.com/zeroclaw-labs/zeroclaw/pull/10253), [feat(memory): add category-scoped cross-agent grants #10252](https://github.com/zeroclaw-labs/zeroclaw/pull/10252), [fix(gateway): redact duplicate idempotency keys from logs #10256](https://github.com/zeroclaw-labs/zeroclaw/pull/10256), and [chore(ci): remove dead labeler paths #10284](https://github.com/zeroclaw-labs/zeroclaw/pull/10284).

## 4. Community Hot Topics

The most actively discussed issues were architectural RFCs and maintainer-process trackers:

- [RFC: Runtime-owned conversation sessions and transport surface adapters #9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) — **25 comments**. Focused on session ownership boundaries, `InboundAction` migration, and durable admission semantics.
- [RFC: Unified attachment architecture for web chat and channels #9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) — **19 comments**. Community interest in consistent attachment handling across web and channel transports.
- [RFC: Decouple memory lifecycle policy from storage backends #6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) — **17 comments**. Users want a clean boundary between durable storage and lifecycle/governance decisions.
- [RFC: Realtime speech-to-speech channel for Gemini Live #8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) — **17 comments**. Rewritten as a broker contract; currently `needs-maintainer-review`.
- [\[Tracker\]: Maintainer decision queue for RFCs and design issues #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — **13 comments**. The community is actively tracking pending maintainer decisions.
- [RFC: Workspace-relative forbidden path patterns and optional .zeroclawignore #8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) — **12 comments**. Strong user demand for protecting workspace-internal sensitive files.

Underlying need: maintainers need to make faster decisions on foundational architecture proposals; users are increasingly relying on ZeroClaw for self-hosted, multi-channel, security-sensitive workflows.

## 5. Bugs & Stability

Bug-related items active in this window, ranked by severity:

- **High / security:** [fix(tools): confine filesystem mutations to workspace #9977](https://github.com/zeroclaw-labs/zeroclaw/pull/9977) — open, `needs-maintainer-review`; prevents file writes outside policy-authorized paths even via symlinks.
- **High / security:** [fix(security): grant Landlock access to DNS and TLS configuration #10098](https://github.com/zeroclaw-labs/zeroclaw/pull/10098) — open; sandboxed children could not resolve DNS because `/etc/resolv.conf` and related files were not whitelisted.
- **High / runtime:** [fix(channels): restore supervised shell approval routing #10241](https://github.com/zeroclaw-labs/zeroclaw/pull/10241) — open; channel-driven shell calls were being denied before an operator could approve them.
- **Medium / leak detector:** [RFC: Define publish-safe exceptions for public blockchain identifiers #9825](https://github.com/zeroclaw-labs/zeroclaw/issues/9825) — open; high-entropy heuristics redact public blockchain addresses and break payment-request URLs.
- **Medium / cron runtime:** [\[Bug\]: Agent doesn't have context of the cron job it's run #6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) — open, `blocked`; scheduled agent jobs have no reference to the message/trigger that caused them.
- **Fixed:** [fix(channels): make the filesystem listener cancellation-aware #9666](https://github.com/zeroclaw-labs/zeroclaw/issues/9666) — closed; fix delivered in [PR #10217](https://github.com/zeroclaw-labs/zeroclaw/pull/10217).

Provider reliability was also a major stability theme: [PR #9999](https://github.com/zeroclaw-labs/zeroclaw/pull/9999), [PR #9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447), and [PR #10144](https://github.com/zeroclaw-labs/zeroclaw/pull/10144) all target classifying incomplete provider responses and fixing lifecycle accounting.

## 6. Feature Requests & Roadmap Signals

Strong roadmap signals from accepted feature requests and RFCs:

- **Channel breadth:** Twilio SMS [#6427](https://github.com/zeroclaw-labs/zeroclaw/issues/6427), Zulip [#6437](https://github.com/zeroclaw-labs/zeroclaw/issues/6437), Rocket.Chat [#6435](https://github.com/zeroclaw-labs/zeroclaw/issues/6435), Mastodon [#6423](https://github.com/zeroclaw-labs/zeroclaw/issues/6423), Slack Events API mode [#9022](https://github.com/zeroclaw-labs/zeroclaw/issues/9022), and Home Assistant integration [#6448](https://github.com/zeroclaw-labs/zeroclaw/issues/6448).
- **Architecture / plugin system:** [RFC: Comprehensive WASM plugin architecture #10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) and [RFC: Load Agent Plugins 1.0 skill and MCP packages #9810](https://github.com/zeroclaw-labs/zeroclaw/issues/9810).
- **Security and sandboxing:** [RFC: Granular sandbox policy — filesystem and network restrictions #6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) and [RFC: Workspace-relative forbidden path patterns #8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424).
- **Provider tuning:** [Warm OpenAI-compatible connections through /models #9575](https://github.com/zeroclaw-labs/zeroclaw/issues/9575).

Likely near-term version candidates: accepted channel additions such as Twilio, Zulip, Rocket.Chat, and Mastodon, plus provider reliability fixes already in flight. The WASM/plugin architecture RFCs are high-signal but still too early to predict for the next release.

## 7. User Feedback Summary

Real user needs visible in this window:

- **More channel adapters:** Users specifically requested NapCat/OneBot [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503), Twilio SMS [#6427](https://github.com/zeroclaw-labs/zeroclaw/issues/6427), Zulip [#6437](https://github.com/zeroclaw-labs/zeroclaw/issues/6437), Rocket.Chat [#6435](https://github.com/zeroclaw-labs/zeroclaw/issues/6435), Mastodon [#6423](https://github.com/zeroclaw-labs/zeroclaw/issues/6423), and Lemmy [#6441](https://github.com/zeroclaw-labs/zeroclaw/issues/6441).
- **Webhook flexibility:** [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) shows generic webhook senders need custom paths/transforms, not just fixed payload handling.
- **Cron context:** [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) — users cannot trace an agent response back to the cron job that triggered it.
- **Verbatim channel send:** [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) — gateway users want to send caller-supplied messages on a channel without forcing an agent turn.
- **Security false positives:** [#9825](https://github.com/zeroclaw-labs/zeroclaw/issues/9825) — leak detection breaks payment URLs by redacting public blockchain addresses.
- **Pairing reliability:** [#6754](https://github.com/zeroclaw-labs/zeroclaw/issues/6754) — ACP bridge auto-pairing fails silently after one-time-use codes are consumed.

Satisfaction signals are mixed: closed/accepted issues like [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) and [#7099](https://github.com/zeroclaw-labs/zeroclaw/issues/7099) show acknowledged user complaints, while long-running open RFCs indicate impatience around architecture decisions.

## 8. Backlog Watch

Items needing maintainer attention or unblocking:

- [RFC: Realtime speech-to-speech channel for Gemini Live #8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) — open since July, `needs-maintainer-review`, 17 comments.
- [RFC: Granular sandbox policy — filesystem and network restrictions #6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) — open since May, `needs-maintainer-review`.
- [fix(tools): confine filesystem mutations to workspace #9977](https://github.com/zeroclaw-labs/zeroclaw/pull/9977) — open, `needs-maintainer-review`, high risk, size XL.
- [\[Bug\]: Agent doesn't have context of the cron job it's run #6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) — open, `blocked` since April, accepted.
- [\[Feature\]: ACP bridge auto-pairing should not depend on a one-time-use code #6754](https://github.com/zeroclaw-labs/zeroclaw/issues/6754) — open, accepted, unresolved since May.
- [Warm OpenAI-compatible connections through /models #9575](https://github.com/zeroclaw-labs/zeroclaw/issues/9575) — open, accepted, but not yet acted on.

These items represent a mix of security-critical fixes and foundational architecture decisions that will likely block or accelerate several other workstreams.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*