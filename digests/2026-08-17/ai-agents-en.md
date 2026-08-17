# OpenClaw Ecosystem Digest 2026-08-17

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-16 23:09 UTC

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

# OpenClaw Project Digest — 2026-08-17

## 1. Today's Overview

OpenClaw is experiencing very high activity: 500 issues and 500 PRs were updated in the last 24 hours, with 35 issues closed and 74 PRs merged/closed. The dominant theme is reliability hardening — message-delivery semantics, event-loop stalls, provider timeout handling, and channel-specific regressions (WhatsApp, Telegram, Feishu, Matrix, Buzz) — alongside sustained UI/UX polish in the Control UI and webchat. The only "release" is a CPU-profile evidence archive for a PR, not a versioned product release. A significant fraction of the backlog remains blocked on `needs-maintainer-review` / `needs-product-decision` labels rather than missing reproductions, indicating maintainer triage bandwidth is the bottleneck.

## 2. Releases

- **pr-124528-profiles** — CPU profile evidence archive for [PR #124528](https://github.com/openclaw/openclaw/pull/124528) (Gateway profile comparison). Contains representative before and exact-head Gateway profiles from a bounded three-node, twelve-concurrent-turn rig, used for event-loop hotspot comparison. This is a data artifact, not a software release — no version changes, breaking changes, or migration notes.

## 3. Project Progress

74 PRs merged or closed in the last 24 hours. Notable closed PRs:

- [[#124784] fix(skills): expand explicit references on agent turns](https://github.com/openclaw/openclaw/pull/124784) — scoped `$skill-name`/`/skill-name` expansion through shared skill renderer; explicitly excludes channel command dispatcher.
- [[#124887] fix(cli): keep internal error causes out of operator output](https://github.com/openclaw/openclaw/pull/124887) — hides raw ClawHub API routes/transport errors from CLI output.
- [[#120900] feat(ui): review install policy warnings](https://github.com/openclaw/openclaw/pull/120900) — authenticated admin can acknowledge install-policy warnings in Control UI.
- [[#116489] feat(security): require acknowledgement for install policy warnings](https://github.com/openclaw/openclaw/pull/116489) — interactive CLI and web UI confirmation flow for suspicious installs.
- [[#124866] fix(ui): reveal clipped session history](https://github.com/openclaw/openclaw/pull/124866) — long paginated sessions now surface older history instead of a collapsed tail.
- [[#124879] fix: prevent clipped session selections and Code Mode timer crashes](https://github.com/openclaw/openclaw/pull/124879) — addresses sidebar overflow clipping and guest `setTimeout` unavailability.
- [[#124081] fix: stop forked commands after Gateway timeouts](https://github.com/openclaw/openclaw/pull/124081) — closes [#120386](https://github.com/openclaw/openclaw/issues/120386); kills forked descendants without risking the Gateway process group.

Closed issues with shipped fixes: [#92433](https://github.com/openclaw/openclaw/issues/92433) (subagent completion silently dropped), [#111870](https://github.com/openclaw/openclaw/issues/111870) (@openclaw/codex CLI registration), [#121058](https://github.com/openclaw/openclaw/issues/121058) (silent reply failures — closed, but reporter notes continued recurrence; worth monitoring).

Active feature PRs in flight: [#123709](https://github.com/openclaw/openclaw/pull/123709) (outbound delivery audit trail), [#112811](https://github.com/openclaw/openclaw/pull/112811) (multiple MS Teams bot accounts), [#124828](https://github.com/openclaw/openclaw/pull/124828) (agent creation provenance + roster tree), [#118977](https://github.com/openclaw/openclaw/pull/118977) (realtime transcription WebSocket subprotocols), [#124858](https://github.com/openclaw/openclaw/pull/124858) (approved-script immutability, fixes [#124738](https://github.com/openclaw/openclaw/issues/124738)).

## 4. Community Hot Topics

- [[#121058] Silent reply failures still recurring after #116277 closed](https://github.com/openclaw/openclaw/issues/121058) — **97 comments**. The most-commented item. Users report the monitoring cron keeps logging failures even after the issue was closed, straining trust in the fix.
- [[#42475] Per-agent cost budget enforcement at gateway level](https://github.com/openclaw/openclaw/issues/42475) — 26 comments, 1 👍. Operators want daily/monthly caps enforced before model dispatch to prevent runaway spend.
- [[#48003] Steer mode does not inject messages mid-turn](https://github.com/openclaw/openclaw/issues/48003) — 21 comments, 4 👍. `messages.queue.mode: "steer"` queues messages until turn completion instead of injecting at tool boundaries; root cause traced to `KeyedAsyncQueue` in commit `9889c6da5`.
- [[#22438] Tiered bootstrap file loading](https://github.com/openclaw/openclaw/issues/22438) — 19 comments. Context-window waste for large workspaces; recurrent request since February.
- [[#87744] Codex-backed Telegram turns repeatedly time out](https://github.com/openclaw/openclaw/issues/87744) — 17 comments, 3 👍. Work is performed but `turn/completed` never arrives; post-2026.5.27 regression.
- [[#96834] WhatsApp 1:1 inbound image wedges main lane ~3 min](https://github.com/openclaw/openclaw/issues/96834) — 15 comments, 1 👍. Native multimodal image injection strands `active_reply_work` before processing starts.
- [[#38327] "Cannot convert undefined or null to object" with google-vertex/gemini-3.1-pro-preview](https://github.com/openclaw/openclaw/issues/38327) — 14 comments, 3 👍.
- [[#90361] Intermittent memory_search "index metadata is missing"](https://github.com/openclaw/openclaw/issues/90361) — 7 comments, 3 👍. Likely search/reindex race; user locally hotfixed.

## 5. Bugs & Stability

Ranked by severity (P1 message-loss/session-state first):

1. [[#121058] Silent reply failures still recurring (P1, message-loss)](https://github.com/openclaw/openclaw/issues/121058) — closed but reproducing; candidate for reopen. Fix-related PR [#124773](https://github.com/openclaw/openclaw/pull/124773) (report settled delivery outcomes once) is open.
2. [[#87744] Codex-backed Telegram timeouts (P1, message-loss)](https://github.com/openclaw/openclaw/issues/87744) — needs live repro + product decision.
3. [[#96834] WhatsApp image wedges lane ~3 min (P1, session-state/message-loss)](https://github.com/openclaw/openclaw/issues/96834) — no fix PR yet.
4. [[#50093] WhatsApp missed-message backfill after reconnection (P1, message-loss)](https://github.com/openclaw/openclaw/issues/50093) — silently lost messages during 503 outages.
5. [[#53408] write/exec tool parameters silently dropped after long conversations (P1, session-state)](https://github.com/openclaw/openclaw/issues/53408) — empty arguments object after 15+ turns.
6. [[#115908] Session transcript projection livelock blocks main thread (P1, session-state)](https://github.com/openclaw/openclaw/issues/115908) — source repro available; stalls all channel transports.
7. [[#112423] Large SQLite transcript cleanup blocks gateway event loop (P1, session-state)](https://github.com/openclaw/openclaw/issues/112423) — source repro available.
8. [[#105528] exec/read silently return empty output on Windows (P1, regression)](https://github.com/openclaw/openclaw/issues/105528) — intermittent and session-specific.
9. [[#97616] Hook/tool child processes leak as zombies (P1, crash-loop)](https://github.com/openclaw/openclaw/issues/97616) — runtime degradation over time.
10. [[#56217] 1Password secret-provider crash-loop exhausts rate limits (P1, auth/crash-loop)](https://github.com/openclaw/openclaw/issues/56217) — linked PR open.
11. [[#38327] google-vertex "undefined or null to object" (P1, regression)](https://github.com/openclaw/openclaw/issues/38327) — needs live repro.
12. [[#45494] Cron jobs silently time out during sustained LLM API outages (P2, regression)](https://github.com/openclaw/openclaw/issues/45494) — should fast-fail on definitive 5xx.
13. [[#74378] Windows CLI commands remain alive as node.exe processes (P2)](https://github.com/openclaw/openclaw/issues/74378).

Fix PRs in flight: [#124773](https://github.com/openclaw/openclaw/pull/124773) (delivery outcome reporting), [#124858](https://github.com/openclaw/openclaw/pull/124858) (approved-script immutability), [#124081](https://github.com/openclaw/openclaw/pull/124081) (forked command cleanup), [#116373](https://github.com/openclaw/openclaw/pull/116373) (heartbeat session targeting), [#116378](https://github.com/openclaw/openclaw/pull/116378) (surface write errno), [#124891](https://github.com/openclaw/openclaw/pull/124891) (control-plane polling stalls), [#109493](https://github.com/openclaw/openclaw/pull/109493) (worker workspace recovery).

## 6. Feature Requests & Roadmap Signals

Strong user demand with active PRs or mature proposals:

- [[#42475] Per-agent cost budgets at gateway level](https://github.com/openclaw/openclaw/issues/42475) — 26 comments; natural next step for operators, likely candidate for near-term release.
- [[#22438] Tiered bootstrap file loading](https://github.com/openclaw/openclaw/issues/22438) — progressive context control; open since February.
- [[#6757] Agent-triggered context compaction (self-compact tool)](https://github.com/openclaw/openclaw/issues/6757) — filed by an OpenClaw agent itself; 2 👍.
- [[#45508] Self-hosted STT/TTS support in webchat](https://github.com/openclaw/openclaw/issues/45508) — route TTS/STT through gateway instead of browser Speech API; 2 👍.
- [[#88154] Slack Modal support for interactive workflows](https://github.com/openclaw/openclaw/issues/88154) — structured form input.
- [[#50093] WhatsApp backfill of missed messages after reconnection](https://github.com/openclaw/openclaw/issues/50093) — reliability feature.
- [[#71452] Pagination for message/channel list (remove hardcoded 25 limit)](https://github.com/openclaw/openclaw/issues/71452).
- [[#7476] WhatsApp sticker send support](https://github.com/openclaw/openclaw/issues/7476).
- [[#45501] `session.resetPrompt` — configurable session startup message](https://github.com/openclaw/openclaw/issues/45501).

Roadmap signals from in-flight PRs: multiple MS Teams bots ([#112811](https://github.com/openclaw/openclaw/pull/112811)), agent creation provenance and roster tree ([#124828](https://github.com/openclaw/openclaw/pull/124828)), outbound delivery audit trail ([#123709](https://github.com/openclaw/openclaw/pull/123709)), realtime transcription WebSocket subprotocols ([#118977](https://github.com/openclaw/openclaw/pull/118977)), Control UI slash-command staging ([#123356](https://github.com/openclaw/openclaw/pull/123356)).

## 7. User Feedback Summary

- **Silent message loss is the #1 pain point.** Users explicitly note that "closed" issues still reproduce ([#121058](https://github.com/openclaw/openclaw/issues/121058)), and multiple P1 message-loss issues remain open across Telegram, WhatsApp, and Feishu ([#87744](https://github.com/openclaw/openclaw/issues/87744), [#50093](https://github.com/openclaw/openclaw/issues/50093), [#108865](https://github.com/openclaw/openclaw/issues/108865)). Trust in issue closure is visibly strained.
- **Performance under load** is a recurring complaint: event-loop stalls from SQLite transcript cleanup/projection ([#112423](https://github.com/openclaw/openclaw/issues/112423), [#115908](https://github.com/openclaw/openclaw/issues/115908)) and parallel tool fan-out WebSocket drops ([#100941](https://github.com/openclaw/openclaw/issues/100941)).
- **Windows users report multiple regressions** — empty tool output ([#105528](https://github.com/openclaw/openclaw/issues/105528)) and lingering `node.exe` processes ([#74378](https://github.com/openclaw/openclaw/issues/74378)).
- **Channel-specific friction**: group-chat context blur in Telegram ([#56692](https://github.com/openclaw/openclaw/issues/56692)), archived-session message drops in Feishu ([#108865](https://github.com/openclaw/openclaw/issues/108865)), Buzz thread nesting (fixed in [#124884](https://github.com/openclaw/openclaw/pull/124884)).
- **Technically sophisticated user base**: reports include commit-level root-cause analysis (e.g., [#48003](https://github.com/openclaw/openclaw/issues/48003) names `KeyedAsyncQueue`), and at least one feature request was filed by an agent itself ([#6757](https://github.com/openclaw/openclaw/issues/6757)).
- **Positive signals**: maintainers are closing PRs with sufficient proof in meaningful volume, and users are building on the platform (SDK realtime transcription, multi-bot Teams setups).

## 8. Backlog Watch

Long-running, high-comment items awaiting maintainer/product decisions:

- [[#42475] Per-agent cost budgets (Mar 10, 26 comments, P2)](https://github.com/openclaw/openclaw/issues/42475) — needs product decision + maintainer review.
- [[#48003] Steer mode mid-turn injection (Mar 16, 21 comments, P1)](https://github.com/openclaw/openclaw/issues/48003) — linked PR open; needs maintainer review.
- [[#22438] Tiered bootstrap loading (Feb 21, 19 comments, P2)](https://github.com/openclaw/openclaw/issues/22438) — needs product decision.
- [[#87744] Codex Telegram timeouts (May 28, 17 comments, P1)](https://github.com/openclaw/openclaw/issues/87744) — needs live repro + product decision.
- [[#96834] WhatsApp image wedge (Jun 25, 15 comments, P1)](https://github.com/openclaw/openclaw/issues/96834) — needs live repro + product decision.
- [[#38327] Vertex "undefined or null" regression (Mar 6, 14 comments, P1)](https://github.com/openclaw/openclaw/issues/38327) — needs live repro + product decision.
- [[#6757] Agent-triggered compaction (Feb 2, 9 comments, P2)](https://github.com/openclaw/openclaw/issues/6757) — needs product decision.
- [[#56217] 1Password crash-loop (Mar 28, 7 comments, P1)](https://github.com/openclaw/openclaw/issues/56217) — linked PR open.
- [[#115421] Schema downgrade recovery quarantines state DB / loses cron jobs (Jul 28, 7 comments, P1)](https://github.com/openclaw/openclaw/issues/115421) — linked PR open.
- [[#118785] QA proof for containers and external app SDK (Aug 3, 9 comments, P2)](https://github.com/openclaw/openclaw/issues/118785) — recently filed, maintainer-owned tracking issue.

**Backlog pattern**: A large share of issues carry both `clawsweeper:source-repro` (reproduction available) and `clawsweeper:needs-maintainer-review` / `needs-product-decision`, meaning the blocking factor is review capacity, not missing information.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — Personal AI Agent / Assistant Open-Source Ecosystem
**2026-08-17 Digest Analysis · 13 Projects**

---

## 1. Ecosystem Overview

The personal AI agent OSS landscape is organized around a family of OpenClaw-derived "Claw" gateways (PicoClaw, NanoClaw, IronClaw, ZeroClaw, ZeptoClaw, NullClaw, CoPaw, Moltis) plus a set of independent agents (Hermes Agent, NanoBot, LobsterAI) that share a common architectural template: a gateway/transport core, channel adapters, model-provider abstractions, and tool/MCP execution. Despite the breadth of new feature work, **reliability hardening and security — not novel capabilities — dominate engineering attention** across nearly every active project, with message-delivery semantics, session-state integrity, SSRF/credential controls, and cost observability recurring as the top themes. The ecosystem's single most binding constraint is now **maintainer review capacity**: most projects with large backlogs are explicitly blocked on `needs-maintainer-review` / `needs-product-decision` labels rather than missing reproductions. Overall, the ecosystem has moved past the demo phase and is grinding through production hardening — a sign of maturing adoption by operators who depend on these agents for real workloads.

---

## 2. Activity Comparison

*"Updated" = issues/PRs touched in the last 24h. Health score rubric: merge throughput, issue closure rate, maintainer responsiveness, severity of open defects, release cadence (1–10).*

| Project | Issues Updated (Open/Closed) | PRs Updated (Open/Merged-Closed) | Release Status | Health |
|---|---|---|---|---|
| **OpenClaw** | 500 (465/35) | 500 (426/74) | None (artifact only) | **8/10** — massive throughput; P1 message-loss recurrence strains trust |
| **NanoBot** | 15 (11/4) | 500 (499/1) | None | **4/10** — zero merges, 499 open PRs largely stale since Feb |
| **Hermes Agent** | 50 (42/8) | 50 (44/6) | **v0.20.2** (Aug 16) | **8/10** — shipped patch, active fix PRs; one P0 open |
| **PicoClaw** | 2 (2/0) | 5 (4/1) | None | **5/10** — SSRF security PRs stuck in `stale` |
| **NanoClaw** | 1 (1/0, invalid) | 33 (20/13) | None | **7/10** — high merge rate, clean tracker; no release |
| **NullClaw** | 0 | 0 | None | **2/10** — no activity |
| **IronClaw** | 1 (1/0) | 9 (7/2) | None | **6/10** — steady maintenance; responsive to new issue |
| **LobsterAI** | 10 (7/3) | 17 (8/9) | None | **5/10** — security fixes landed; unresolved core-tool bugs, stale April backlog |
| **Moltis** | 5 (2/3) | 17 (1/16) | None | **8/10** — 16/17 PRs closed, same-day compile fix, bugs resolved quickly |
| **CoPaw / QwenPaw** | 9 (6/3) | 9 (9/0) | None | **5/10** — active community PRs, zero merges (review bottleneck) |
| **ZeptoClaw** | 0 | 0 | None | **2/10** — no activity |
| **ZeroClaw** | 50 (48/2) | 50 (46/4) | None | **6/10** — RFC-governed and security-focused; maintainer queue is the constraint |

**Notable observations:** OpenClaw alone accounts for ~60% of the ecosystem's merged PRs in the window (74), and ~76% of combined issue+PR activity. Moltis shows the best closure ratio (16 of 17 PRs). NanoBot's 500-updated-PR number is misleading — the overwhelming majority are stale, conflict-labeled contributions from February.

---

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Scale**: 1,000 combined issue/PR updates in 24h — 10× Hermes/ZeroClaw, 33× NanoClaw, 100× PicoClaw. Its single most-commented thread (#121058, 97 comments) exceeds most other projects' total daily comment volume.
- **Breadth**: widest channel matrix (WhatsApp, Telegram, Feishu, Matrix, Buzz, MS Teams, Slack) and deepest provider coverage (Codex, Vertex/Gemini family, local OpenAI-compatible).
- **Architecture maturity**: formalized delivery-outcome reporting (PR #124773), outbound delivery audit trails (#123709), multi-identity Teams support (#112811), event-loop performance profiling with published CPU-profile evidence archives — practices no peer currently matches.
- **Community sophistication**: users contribute commit-level root-cause analysis (e.g., tracing steer-mode behavior to `KeyedAsyncQueue`); one feature request was filed by an OpenClaw agent itself (#6757).
- **Ecosystem gravity**: at least 8 projects in this report derive from or orbit the OpenClaw core — it is the reference implementation upstream of most "Claw"-family forks.

**Technical approach differences:**
- Treats **event-loop performance engineering** as first-class practice (bounded-node profile rigs, hotspot comparison before/after PRs).
- Explicit **settled-delivery semantics** rather than fire-and-forget message sending, with audit trails and echo suppression.
- Heavy simultaneous investment in **Control UI/webchat polish** alongside core reliability — unusual for a gateway project.
- Users hold the project to a high bar: closed issues that still reproduce (#121058) generate visible trust strain, indicating a demanding, technically literate operator base.

**Community size comparison:** OpenClaw's 24h activity is 10× the next tier; its PR merge rate (74/day) approaches most peers' *monthly* totals. NanoBot has a larger raw PR count but nearly all are stale. Hermes and ZeroClaw are the closest in genuine engagement, at roughly one-tenth OpenClaw's volume. OpenClaw is unambiguously the ecosystem's center of gravity and primary funnel for community contribution.

---

## 4. Shared Technical Focus Areas

Requirements emerging independently across multiple projects:

| Focus Area | Projects (evidence) | Specific Needs |
|---|---|---|
| **Message-delivery reliability / anti-loss** | OpenClaw (#121058 silent failures, #87744 Telegram timeouts, #50093 WhatsApp backfill), NanoClaw (delivery semantics PRs #3254–#3256), Hermes (#87368 prompt-cache parity on background forks), ZeroClaw (#9811 false-healthy channel) | Settled-outcome reporting, missed-message backfill, delivery refusal into detached conversations, health checks that reflect real connectivity |
| **Cost transparency & spend guardrails** | OpenClaw (#42475 per-agent budgets), NanoBot (#5266 token logging, #5402 consolidation never triggers), Hermes (#81481 reasoning double-charge, #81952 silent paid-model fallback, #87418 context-fill reporting), CoPaw (#7003 ViBo memory cost) | Per-call token accounting, dispatch-time budget enforcement, accurate reasoning-token estimation, provider fallback notices |
| **Session/context integrity** | OpenClaw (#48003 steer mode, #53408 dropped params, #115908 projection livelock), Hermes (#86366 compaction duplication, #85680 session leak), CoPaw (#7065 history disappears), LobsterAI (#1783 diff regression), ZeroClaw (#9487 runtime-owned sessions RFC), NanoClaw (#3257 cross-session fan-out) | Runtime-owned session state, compaction correctness, pagination without clipping, cross-session context sharing |
| **Channel feature parity** | Telegram: stickers (OpenClaw #7476, NanoBot #5289), rich tables (PicoClaw #3325); Slack: private onboarding (IronClaw #7681), live task cards (Moltis #1195); WhatsApp: images/backfill (OpenClaw #96834/#50093); Matrix: thread context (NanoBot #5275) | Sticker send, native table rendering, private one-click connect, thread-scoped memory, media handling without lane wedging |
| **Security hardening** | PicoClaw (SSRF media downloads #3322–#3324), LobsterAI (log redaction, IPC key-level access, URL scheme whitelist #1831–#1833), ZeroClaw (plugin egress #9137/#9580, network guard), Moltis (#1179 pairing signatures, #1180 zip/model path hardening), NanoBot (#5305 `exec.allowPatterns` bypass), OpenClaw (#124858 approved-script immutability) | Safe HTTP clients for media fetches, credential redaction, IPC exfiltration blocking, plugin egress governance, approval-card UX |
| **Provider/model compatibility fallout** | OpenClaw (#38327 google-vertex), NanoBot (#2185 gemini-flash regression), LobsterAI (#1813 DeepSeek V4 schema rejection), Hermes (#87027 Ollama tool_calls), ZeroClaw (#7881 fallback circuit breakers), CoPaw (#6302 provider/metadata unification) | Provider schema changes breaking tool payloads, OpenAI-compatible endpoint fidelity, deterministic fallback behavior |
| **Maintainer review bottleneck** | Explicitly flagged in OpenClaw, NanoBot (499 open PRs), PicoClaw (`stale` labels), CoPaw (0 merges despite ready PRs), ZeroClaw (growing decision queue #8692) | More maintainers, triage automation, or explicit deferral with rationale |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target Users | Architecture / Approach |
|---|---|---|---|
| **OpenClaw** | Broad multi-channel enterprise gateway | Operators, power users, multi-platform teams | Node-based gateway monolith; channel adapters; Control UI + webchat; delivery-semantics and event-loop engineering as differentiators |
| **Hermes Agent** | Desktop-first personal agent with remote-gateway frontend | Individual professionals, local-model (Ollama) users | Python; Desktop app + Web Dashboard + CLI; heavy investment in installer/update/state-preservation lifecycle |
| **NanoBot** | Developer tool-use platform with strong cache efficiency | Python developers, MCP/tooling users, research community (HKUDS) | Python; Ollama-compatible API; KV-cache reuse and conversation-consolidation focus; MCP Apps host in WebUI |
| **LobsterAI** | IM-centric desktop assistant ("cowork" mode) | Chinese-market IM users; DeepSeek/Qwen-model workflows | Desktop app with IM-instance management; recently pivoting to security hardening (log redaction, IPC access control) |
| **IronClaw** | Rust-based automation agent | Rust developers, Near ecosystem | Rust; automations engine, dependency hygiene; Slack UX polish; small steady cadence |
| **Moltis** | Self-hostable memory & durable connectors | Privacy-conscious self-hosters, security-sensitive operators | Go; zvec + redb vector memory backend; CalDAV/Gmail/channel connectors; vault recovery normalization; Slack native live task cards |
| **CoPaw / QwenPaw** | Data analysis + Qwen ecosystem agent | Data analysts, Aliyun/Qwen users, plugin developers | Python/async; DataPaw app runtime; background chat task API; plugin `system_prompt` permission model |
| **ZeroClaw** | RFC-governed architectural refactor | Integration builders, multi-agent orchestrators, WASM plugin authors | Heavy RFC governance; OpenAI Chat Completions compatibility target; plugin egress security; ephemeral swarm concept |
| **PicoClaw** | Lightweight, hardware-adjacent gateway | Tinkerers, makers (SiPEED ecosystem) | Smaller footprint; channel connectors; SSRF hardening; early adoption of Telegram Bot API 10.1 / MCP OAuth 2.1 features |
| **NanoClaw** | OpenClaw-neighbor core/ops hardening | Multi-session operators, agent-to-agent workflows | Cross-session context fan-out, permission interception seams (`registerChannelCardInterceptor`), MCP document memory (`save_document`) |
| **NullClaw / ZeptoClaw** | Inactive shells | — | No activity in window |

**Key fault lines:** Desktop-product vs. gateway infrastructure (Hermes/LobsterAI vs. OpenClaw/ZeroClaw); Rust vs. Node vs. Python vs. Go implementation languages; RFC/governance-driven vs. fast-merge maintenance cultures; China-market IM/DeepSeek focus (LobsterAI, CoPaw) vs. Western channel matrix focus (OpenClaw, IronClaw, Moltis).

---

## 6. Community Momentum & Maturity

**Tier 1 — High velocity, production hardening:**
- **OpenClaw** (74 PRs merged/24h), **Moltis** (16/17 PRs closed; same-day compile regression fix), **Hermes Agent** (shipped v0.20.2 plus targeted fix PRs), **NanoClaw** (13 merges; active core-team infrastructure cluster).

**Tier 2 — Active but constrained:**
- *Bottlenecked on review:* **ZeroClaw** (RFC-heavy, 4 merges, growing decision queue), **CoPaw** (healthy community PR flow, zero merges), **NanoBot** (large PR pool, mostly stale from Feb; effectively stalled), **PicoClaw** (security PRs languishing under `stale`).
- *Steady maintenance:* **IronClaw** (dependency hygiene + Slack UX), **LobsterAI** (security fixes landed; core-tool bugs unresolved; oldest stale backlog, from April).

**Tier 3 — Inactive:**
- **NullClaw**, **ZeptoClaw** — no activity in 24h; effectively dormant.

**Maturity markers:** OpenClaw and Hermes have formalized release/artifact processes and structured backlog labels; ZeroClaw has graduated to governance RFCs; Moltis demonstrates quick-turnaround bug fixing; NanoBot's stale-PR debt and LobsterAI's April-era unresolved P1s are signs of past sprint velocity colliding with current triage limits.

---

## 7. Trend Signals

**Signals extracted from community feedback (with value for AI agent developers):**

1. **Delivery reliability is the new competitive differentiator.** The ecosystem's loudest signal is recurring silent message loss (OpenClaw #121058, 97 comments). Expect audit trails, settled-outcome reporting, backfill, and exactly-once semantics to become standard agent-platform requirements. *Action: build delivery settlement into agent frameworks from day one — fire-and-forget is no longer acceptable.*

2. **Cost observability is becoming table stakes.** Token logging, per-agent budgets, context-fill reporting, and reasoning-token accounting are demanded across OpenClaw, NanoBot, Hermes, and CoPaw. Operators are being burned by silent spend (Hermes #81952). *Action: expose per-call token/cost accounting and enforce budgets at dispatch time, not after.*

3. **OpenAI-compatible APIs and MCP are the interoperability baseline.** ZeroClaw's Chat Completions RFC (#8603, 22 comments), NanoBot's Ollama-compatible endpoint, and MCP-related requests (OAuth 2.1 in PicoClaw, schema budgeting in NanoBot) show that ecosystem lock-in is consolidating around these two standards. *Action: prioritize OpenAI-compatible surfaces and MCP-native tooling over bespoke protocols.*

4. **Memory is being re-architected around cost and persistence.** Vector backends (Moltis zvec), document-memory MCP tools (NanoClaw `save_document`), agent-triggered compaction (OpenClaw #6757), memory proposals (CoPaw ViBo), and consolidation fixes (NanoBot) all point to context-window economics as a core design constraint. *Action: treat compaction, memory tiering, and token-efficient context as core primitives, not afterthoughts.*

5. **A security-hardening wave is underway across the stack.** SSRF in media-download paths (PicoClaw), credential log redaction and IPC exfiltration blocking (LobsterAI), plugin egress governance (ZeroClaw), allowlist bypasses (NanoBot), and node pairing signature verification (Moltis) — security is shifting from perimeter to data-plane. *Action: treat every URL fetch, file write, and IPC channel as a security boundary by default.*

6. **Multi-agent coordination is emerging as the next feature frontier.** Cross-session context fan-out (NanoClaw #3257), ephemeral agent swarms (ZeroClaw #10025), background task APIs (CoPaw #7072), inter-session coordination (Hermes #28690), and agent-to-agent workflow controls (NanoClaw `suppressCreatedNotify`) indicate a shift from single-agent assistants to orchestrated agent networks. *Action: design agent identity, provenance, and session ownership with multi-agent federation in mind.*

7. **Maintainer bandwidth is the ecosystem's critical constraint.** `needs-maintainer-review` backlogs dominate every sizable project; security fixes sit unmerged for weeks (PicoClaw SSRF PRs). The bottleneck is now organizational, not technical. *Action: for developers building on or contributing to this ecosystem, expect longer merge latency — plan for forking/pinning, and support projects with triage automation or maintainer funding.*

---

**Bottom line for technical decision-makers:** OpenClaw remains the reference implementation and the safest investment for broad multi-channel agent deployments, with the caveat that message-loss issues at the P1 level demand rigorous verification before trusting closure claims. Hermes Agent is the strongest desktop-centric alternative with the best release cadence. Moltis and NanoClaw show the healthiest merge discipline and are the most attractive targets for upstream contribution. NanoBot, CoPaw, and ZeroClaw have valuable architectures but currently suffer review bottlenecks — budget for slower iteration there. The ecosystem-wide direction is unambiguous: reliability, security, cost transparency, and multi-agent coordination are where the next 12 months of differentiation will happen.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-17

## 1. Today's Overview

NanoBot showed moderate issue activity in the last 24 hours: **15 issues updated** (11 open, 4 closed) and **500 PRs updated** (499 open, 1 closed). No new releases were published. The only closed PR was #4329, which was superseded by #5406, meaning no feature changes actually landed on `main`. A large portion of updated PRs remain old, `[conflict]`-labeled contributions from February, suggesting the project is active but currently bottlenecked on PR triage and merge capacity.

---

## 2. Releases

**None.** No new NanoBot releases were published on 2026-08-17.

---

## 3. Project Progress

- **No merged PRs** landed in this 24-hour window.
- **PR #4329** was closed: [HKUDS/nanobot PR #4329](https://github.com/HKUDS/nanobot/pull/4329) — the original TypeScript terminal UI work was superseded by **PR #5406**: [HKUDS/nanobot PR #5406](https://github.com/HKUDS/nanobot/pull/5406), which carries the same commit history plus final cross-terminal fixes.
- **Four issues were closed:**
  - [Issue #2185](https://github.com/HKUDS/nanobot/issues/2185) — gemini-3-flash-preview regression after upgrade.
  - [Issue #5305](https://github.com/HKUDS/nanobot/issues/5305) — `exec.allowPatterns` allowlist bypass security advisory.
  - [Issue #5275](https://github.com/HKUDS/nanobot/issues/5275) — Matrix “reply in thread” dedicated-context behavior.
  - [Issue #5373](https://github.com/HKUDS/nanobot/issues/5373) — cron scheduler dying after persistence failure.

No new features merged, but the closure of these issues indicates progress on regressions, a high-severity security flaw, and channel/platform robustness.

---

## 4. Community Hot Topics

The most-discussed and reacted-to issues were:

- **[Issue #2463 — Architectural issue: prompt prefix not preserved exactly](https://github.com/HKUDS/nanobot/issues/2463)** · 15 comments
  Core architectural conflict: persisted conversation history is not identical to the actual prompt prefix previously sent to the model. This affects OpenAI prompt caching, reproducibility, and consistency.

- **[Issue #5266 — Logs about token consumption](https://github.com/HKUDS/nanobot/issues/5266)** · 14 comments
  User reports millions of tokens burned in ~2 hours without visible activity. Strong demand for per-call token logging and visibility.

- **[Issue #2185 — Gemini-3-flash-preview regression](https://github.com/HKUDS/nanobot/issues/2185)** · 9 comments · closed
  Upgrading from 0.1.4 to 0.1.4post5 broke `openai/gemini-3-flash-preview:cloud` through the Ollama-compatible endpoint.

- **[Issue #4864 — Endless loop for `<tool_call> <function=complete_goal>`](https://github.com/HKUDS/nanobot/issues/4864)** · 6 comments · 1 👍
  Gateway change broke serialization of `recap` parameter, causing repeated failed tool calls.

**Underlying needs:** users are concerned about cost visibility, prompt-cache effectiveness, provider compatibility, and agent reliability in tool-calling loops.

---

## 5. Bugs & Stability

Ranked by severity:

1. **High — [Issue #5305: `exec.allowPatterns` allowlist bypass](https://github.com/HKUDS/nanobot/issues/5305)** · closed
   Chained shell command execution possible via OpenAI-compatible API despite allowlist restrictions. High-impact security issue; appears to have been closed/fixed.

2. **High — [Issue #5373: Cron scheduler dies permanently after one persistence failure](https://github.com/HKUDS/nanobot/issues/5373)** · closed
   A single disk-full/locked-file error kills the timer because `_arm_timer()` sits outside the `try/finally`. Availability bug, now closed.

3. **Medium/High — [Issue #4864: Endless `complete_goal` tool loop](https://github.com/HKUDS/nanobot/issues/4864)** · open
   Agent cannot finish because gateway parses `recap` as a bare string instead of JSON object. No fix PR visible yet.

4. **Medium — [Issue #5402: Token consolidation never triggers](https://github.com/HKUDS/nanobot/issues/5402)** · open
   tiktoken estimation underestimates real API token counts, so consolidation is never activated.

5. **Medium — [Issue #5377: Consolidation truncates input but advances past full message batch](https://github.com/HKUDS/nanobot/issues/5377)** · open
   Archived data can lose messages/suffixes even though the session pointer moves past the entire batch.

6. **Medium — [Issue #2185: Gemini flash regression](https://github.com/HKUDS/nanobot/issues/2185)** · closed
   Provider/model upgrade compatibility failure, now closed.

No dedicated fix PRs were visible in the updated-PR set for #4864, #5402, or #5377.

---

## 6. Feature Requests & Roadmap Signals

Strong roadmap signals from recent enhancement requests:

- **[Issue #5404 — `disable-model-invocation` for skills](https://github.com/HKUDS/nanobot/issues/5404)** · open
  Make skills “user-only” so models cannot auto-invoke them — similar to Cursor/Claude Code patterns.

- **[Issue #4467 — Dream should update existing workspace skills, not duplicate](https://github.com/HKUDS/nanobot/issues/4467)** · open · 1 👍
  Long-running pain point for users iterating on custom skills.

- **[Issue #5251 — MCP Apps host support in WebUI](https://github.com/HKUDS/nanobot/issues/5251)** · open
  Wants `io.modelcontextprotocol/ui` apps surfaced in the WebUI, not just text/image artifacts.

- **[Issue #5289 — Telegram stickers and agent-initiated reactions](https://github.com/HKUDS/nanobot/issues/5289)** · open
  Missing sticker support and richer reaction flows in the Telegram channel.

- **[Issue #5298 — Budget model-visible MCP schemas for large tool sets](https://github.com/HKUDS/nanobot/issues/5298)** · open
  Reduces context cost when many MCP tools are loaded.

- **[Issue #5266 — Token consumption logging](https://github.com/HKUDS/nanobot/issues/5266)** · open
  Per-call token usage observability.

- **PR #5406** — native TypeScript terminal UI: [HKUDS/nanobot PR #5406](https://github.com/HKUDS/nanobot/pull/5406)
- **PR #5358** — WebUI session collaboration via mentions: [HKUDS/nanobot PR #5358](https://github.com/HKUDS/nanobot/pull/5358)

Likely next-version candidates: the TypeScript terminal UI (#5406), WebUI session collaboration (#5358), and low-risk improvements around Telegram stickers (#5289) and MCP schema budgeting (#5298).

---

## 7. User Feedback Summary

Users are engaged but showing clear pain points:

- **High token costs** are a recurring theme: users observe “enormous” token consumption and need per-call logging. (#5266)
- **Conversation/cache fidelity** matters: preserving the exact prompt prefix is raised as an architectural issue, not just a bug. (#2463)
- **Security issues** are being actively reported and resolved, which is a positive health signal. (#5305)
- **Channel parity expectations** are high: Matrix users want thread-like contexts (#5275), Telegram users want stickers/reactions (#5289), and group-chat attribution is still an issue in older PRs (#1147).
- **Skill workflows** frustrate users when the system creates duplicates instead of updating existing skills. (#4467)
- **Consolidation failures** mean users may face unnecessarily long or corrupted contexts. (#5402, #5377)

Overall, user sentiment is constructive but urgent around cost visibility, reliability, and platform feature parity.

---

## 8. Backlog Watch

Items that need maintainer attention:

- **[Issue #2463 — Prompt-prefix architectural mismatch](https://github.com/HKUDS/nanobot/issues/2463)** · open since March 2026 · 15 comments
  Long-standing architectural issue with major implications for caching and reproducibility.

- **[Issue #5266 — Token consumption logging](https://github.com/HKUDS/nanobot/issues/5266)** · open since Aug 6 · 14 comments
  High community interest, no release yet.

- **[Issue #4864 — Endless `complete_goal` loop](https://github.com/HKUDS/nanobot/issues/4864)** · open since July · active bug
  Needs a fix PR.

- **Old conflict-labeled PRs from February 2026** — many remain open and unmerged:
  - [PR #1306](https://github.com/HKUDS/nanobot/pull/1306) — Discord voice/audio/TTS support
  - [PR #1205](https://github.com/HKUDS/nanobot/pull/1205) — KV cache reuse with batch prompt rollover
  - [PR #1195](https://github.com/HKUDS/nanobot/pull/1195) — Telegram forum threads
  - [PR #1149](https://github.com/HKUDS/nanobot/pull/1149) — PromptGuard injection detection
  - [PR #1147](https://github.com/HKUDS/nanobot/pull/1147) — Telegram group sender prefix
  - [PR #1128](https://github.com/HKUDS/nanobot/pull/1128) — 163.com IMAP ID command fix
  - [PR #1073](https://github.com/HKUDS/nanobot/pull/1073) — preserve unknown config keys
  - [PR #1072](https://github.com/HKUDS/nanobot/pull/1072) — catch `CancelledError` in tool execution
  - Plus many others from Feb 22–25: #1066, #1053, #1037, #1034, #1032, #1026, #1025, #1024, #1015

These PRs contain useful fixes and features but are blocked by conflicts/staleness. They need rebasing, review, or explicit closure.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-17

## 1. Today's Overview

Hermes Agent remains a high-velocity project: in the last 24 hours **50 issues and 50 PRs were updated**, with 42 issues open / 8 closed and 44 PRs open / 6 closed or merged. The project shipped **v0.20.2 (v2026.8.16)** as a patch release rolling up ~397 PRs since v0.20.1. Activity is dominated by **Desktop/CLI reliability work, Windows update issues, approval-flow bugs, and session/state integrity fixes**. Several P0/P1 bugs are still open, but multiple targeted fix PRs are in flight, indicating active maintainer engagement.

---

## 2. Releases

### [Hermes Agent v0.20.2 (v2026.8.16)](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.16)

- **Released:** August 16, 2026
- **Type:** Patch release
- **Scope:** Rolls up ~397 PRs merged since v0.20.1 into a stable tagged release for downstream consumers — Docker images, hosted deployments, and fresh installs.
- **Breaking changes / migration notes:** None explicitly stated in the available release excerpt. This appears to be a stabilization cut for the v0.20.x line.

---

## 3. Project Progress

Of the 6 closed/merged PRs reported, the top-comment set includes:

- [PR #87310 — fix(agent): let slow local reasoning models finish long responses](https://github.com/NousResearch/hermes-agent/pull/87310)  
  Closed. Extends the automatic 180-second reasoning floor for local OpenAI-compatible reasoning models while preserving finite watchdogs for hosted models.

- [PR #87066 — fix(tui): restore Alt+Enter for newlines](https://github.com/NousResearch/hermes-agent/pull/87066)  
  Closed. Restores a TUI keyboard interaction lost during recent input-handling updates.

Notable closed issues from the last 24 hours:

- [Issue #78661 — Desktop app setup wizard should offer option to connect to existing remote gateway](https://github.com/NousResearch/hermes-agent/issues/78661) — closed, feature request.
- [Issue #71689 — Offer SSH as a connection option on the Desktop first-run screen](https://github.com/NousResearch/hermes-agent/issues/71689) — closed.
- [Issue #87027 — Ollama MCP tools never emit real tool_calls](https://github.com/NousResearch/hermes-agent/issues/87027) — closed with `needs-repro`.

These closures suggest continued progress on **Desktop remote-gateway onboarding** and **agent tool-call correctness**, even though some resolutions still need reproduction validation.

---

## 4. Community Hot Topics

### Most-commented issues

- [Issue #66616 — [skills-index-watchdog] Skills index is stale or degraded](https://github.com/NousResearch/hermes-agent/issues/66616) — **44 comments**  
  An automated freshness probe reports the Skills Hub index is 29.8h old versus the 26h limit. This is a recurring infrastructure/deployment issue that the community has been tracking closely.

- [Issue #59877 — Package 'hermes-agent' requires a different Python: 3.14.6 not in '<3.14,>=3.11'](https://github.com/NousResearch/hermes-agent/issues/59877) — **8 comments**  
  Termux users cannot install Hermes because the package metadata rejects Python 3.14. This is both an install blocker and a compatibility-signal issue.

- [Issue #85695 — False positive: "TERMINAL_CWD deprecated" warning on every gateway start](https://github.com/NousResearch/hermes-agent/issues/85695) — **8 comments**  
  Users see a deprecation warning even when the variable is only commented out in `.env`. This is a config-validation false positive affecting startup UX.

### Most-reacted issues

- [Issue #85422 — Official macOS installer predates Desktop remote-client onboarding and forces local bootstrap](https://github.com/NousResearch/hermes-agent/issues/85422) — 2 👍
- [Issue #53839 — Durable reconnectable runs for Desktop and Web Dashboard](https://github.com/NousResearch/hermes-agent/issues/53839) — 2 👍
- [Issue #71689 — Offer SSH as a connection option on the Desktop first-run screen](https://github.com/NousResearch/hermes-agent/issues/71689) — 2 👍
- [Issue #64160 — Desktop updater drops active-profile preference and rewrites config model settings](https://github.com/NousResearch/hermes-agent/issues/64160) — 1 👍

The underlying need is clear: **users want Hermes Desktop to be a robust frontend for remote/local gateways**, with stable connection switching, reconnectable sessions, and a setup flow that does not force local installation.

---

## 5. Bugs & Stability

### P0

- [Issue #87368 — Background review drops gateway ephemeral session context and breaks prompt-cache prefix parity](https://github.com/NousResearch/hermes-agent/issues/87368)  
  The background memory/skill review fork does not inherit the parent’s `ephemeral_system_prompt`, causing different prompt-cache prefixes in gateway sessions. This has correctness, context-loss, and cost implications. No fix PR is visible yet.

### P1

- [Issue #86443 — `hermes update` deletes the packaged Desktop app and exits 0 when desktop rebuild fails](https://github.com/NousResearch/hermes-agent/issues/86443)  
  On Windows, an update can leave the machine with no `Hermes.exe` while still reporting success.

- [Issue #70871 — TUI/desktop hangs in busy state and context-usage bar stays stale during streaming](https://github.com/NousResearch/hermes-agent/issues/70871)  
  Streaming sessions can stay stuck in “busy” state when `message.complete` is never emitted.

- [Issue #87183 — CLI approval panel never renders: relay_runtime imports gateway.run whose module top-level setenv hijacks approvals](https://github.com/NousResearch/hermes-agent/issues/87183)  
  Dangerous-command approvals hang forever in CLI sessions because approval handling is routed into the gateway path with no `notify_cb`. A related approval fix is in progress in [PR #87996](https://github.com/NousResearch/hermes-agent/pull/87996).

### P2 — high-impact

- [Issue #81952 — Corrupt profile config silently falls back to a paid OpenRouter default model and auto-ingests OPENROUTER_API_KEY](https://github.com/NousResearch/hermes-agent/issues/81952)  
  Real-money spend without operator consent; a fail-closed concern for non-interactive runs.

- [Issue #87876 — Windows update frequently fails / partial updates block runtime repair](https://github.com/NousResearch/hermes-agent/issues/87876)  
  Broken Git trampolines, missing `venv/python.exe`, and self-lock issues make Windows updates unreliable.

- [Issue #73379 — `hermes update` permanently orphans a non-systemd-supervised dashboard](https://github.com/NousResearch/hermes-agent/issues/73379)  
  The updater kills the supervisor loop while leaving an unsupervised process holding port 9119.

- [Issue #64160 — Desktop updater drops active-profile preference and rewrites config model settings](https://github.com/NousResearch/hermes-agent/issues/64160)  
  User state loss after Desktop updates.

- [Issue #86366 — `archive_and_compact` marks carried-forward tail as compacted, duplicating it in recall](https://github.com/NousResearch/hermes-agent/issues/86366)  
  Causes duplicated messages after each compaction.

- [Issue #85680 — `hermes chat -q` sessions never finalize; unbounded session leak](https://github.com/NousResearch/hermes-agent/issues/85680)  
  `ended_at` stays NULL, so pruning never removes these sessions.

- [Issue #81481 — reasoning/reasoning_content double-charged on every historical turn](https://github.com/NousResearch/hermes-agent/issues/81481)  
  Cost estimation remains inflated ~2.5x on reasoning-heavy sessions.

- [Issue #87973 — Dangerous-command detector flags `git clean -f` inside quoted commit messages](https://github.com/NousResearch/hermes-agent/issues/87973)  
  False positive blocks benign commands.

### Fix PRs in flight

- [PR #81526 — kill reasoning-only streams that never produce output](https://github.com/NousResearch/hermes-agent/pull/81526)
- [PR #86599 — drain stale read-only pool after 'file is not a database' self-heal](https://github.com/NousResearch/hermes-agent/pull/86599)
- [PR #76003 — bound the doctor state.db health probe with a cancellable SQLite deadline](https://github.com/NousResearch/hermes-agent/pull/76003)
- [PR #87992 — consult fallback chain when continuation attempts are exhausted](https://github.com/NousResearch/hermes-agent/pull/87992)
- [PR #87996 — stop faking a human approval channel in `hermes chat -q` sessions](https://github.com/NousResearch/hermes-agent/pull/87996)

---

## 6. Feature Requests & Roadmap Signals

### Desktop / Dashboard parity and connectivity

- [Issue #67144 — Desktop surface parity with Web Dashboard](https://github.com/NousResearch/hermes-agent/issues/67144) — phased admin, plugins, kanban.
- [Issue #53839 — Durable reconnectable runs for Desktop and Web Dashboard](https://github.com/NousResearch/hermes-agent/issues/53839)
- [Issue #85422 — macOS installer should support remote-client onboarding](https://github.com/NousResearch/hermes-agent/issues/85422)

Open PRs pushing in this direction:

- [PR #87997 — keep profile rail alive across remote/Cloud connection switches](https://github.com/NousResearch/hermes-agent/pull/87997)
- [PR #87993 — scope session/pin lists per connection across Desktop windows](https://github.com/NousResearch/hermes-agent/pull/87993)
- [PR #76616 — safe current backend restart for Desktop](https://github.com/NousResearch/hermes-agent/pull/76616)

### Cross-session coordination

- [Issue #28690 — Active session awareness and inter-session coordination](https://github.com/NousResearch/hermes-agent/issues/28690)
- [Issue #78418 — Session-level file coordination: journal + approval + reconcile](https://github.com/NousResearch/hermes-agent/issues/78418)

### Memory / profile / config contracts

- [Issue #84340 — Memory-file placement contract for MEMORY.md / USER.md / AGENTS.md / SOUL.md](https://github.com/NousResearch/hermes-agent/issues/84340)
- [Issue #24740 — Honcho session titles override sessionStrategy setting](https://github.com/NousResearch/hermes-agent/issues/24740)

### Provider / usage transparency

- [PR #86560 — dedicated `zai-coding-plan` provider profile](https://github.com/NousResearch/hermes-agent/pull/86560)
- [PR #87418 — expose context fill and window in turn usage](https://github.com/NousResearch/hermes-agent/pull/87418)

### Likely next-version candidates

Based on open PRs and recent issue closures, the next version will likely include:
- Desktop connection-state fixes (profile rail, per-connection session/pin lists)
- Approval-flow reliability improvements for non-interactive CLI sessions
- Session/state lifecycle fixes (compaction duplication, chat query leaks, state.db self-heal)
- Usage/cost transparency improvements (context fill reporting, reasoning-token accounting)

---

## 7. User Feedback Summary

Real user pain points visible in the last 24 hours:

- **Installer/update reliability is the biggest recurring frustration.**  
  Windows updates can delete the Desktop app ([#86443](https://github.com/NousResearch/hermes-agent/issues/86443)), partially fail and block repair ([#87876](https://github.com/NousResearch/hermes-agent/issues/87876)), or orphan dashboards ([#73379](https://github.com/NousResearch/hermes-agent/issues/73379)). Termux users are blocked by Python version metadata ([#59877](https://github.com/NousResearch/hermes-agent/issues/59877)).

- **Desktop state loss is a trust issue.**  
  Updaters drop the active profile and rewrite config settings ([#64160](https://github.com/NousResearch/hermes-agent/issues/64160)); the macOS installer forces a local bootstrap even when users only want a remote-client frontend ([#85422](https://github.com/NousResearch/hermes-agent/issues/85422)).

- **CLI approval flow feels dangerous.**  
  Approvals hang forever in some CLI sessions ([#87183](https://github.com/NousResearch/hermes-agent/issues/87183)), while the dangerous-command detector also blocks benign commands ([#87973](https://github.com/NousResearch/hermes-agent/issues/87973)).

- **Local model users want native tool-call behavior.**  
  Ollama users report fabricated or empty MCP tool results ([#87027](https://github.com/NousResearch/hermes-agent/issues/87027)), and slow local reasoning models need longer timeouts ([PR #87310](https://github.com/NousResearch/hermes-agent/pull/87310)).

- **Cost transparency concerns remain.**  
  Corrupt profiles can silently trigger paid model usage ([#81952](https://github.com/NousResearch/hermes-agent/issues/81952)), and reasoning tokens are double-counted in cost estimates ([#81481](https://github.com/NousResearch/hermes-agent/issues/81481)).

Satisfaction signals: the project is shipping frequently, and community members are actively submitting fix PRs. The main dissatisfaction clusters around **install/update robustness** and **state preservation**.

---

## 8. Backlog Watch

Issues and PRs that appear important but may need more maintainer attention:

- [Issue #24740 — Honcho session titles override sessionStrategy setting](https://github.com/NousResearch/hermes-agent/issues/24740)  
  Open since May 13, 2026. P3 plugin/memory bug with only 2 comments.

- [Issue #28690 — Active session awareness and inter-session coordination](https://github.com/NousResearch/hermes-agent/issues/28690)  
  Open since May 19, 2026. P3 feature with community interest.

- [Issue #53839 — Durable reconnectable runs for Desktop and Web Dashboard](https://github.com/NousResearch/hermes-agent/issues/53839)  
  Open since June 27, 2026. P3 with 2 👍; highly relevant to Desktop roadmap.

- [Issue #59877 — Termux install fails: Python 3.14 not in allowed range](https://github.com/NousResearch/hermes-agent/issues/59877)  
  Open since July 6, 2026. P2 install blocker with 8 comments.

- [Issue #64160 — Desktop updater drops active-profile preference and rewrites config](https://github.com/NousResearch/hermes-agent/issues/64160)  
  Open since July 14, 2026. P2 user-state loss.

- [Issue #66616 — Skills index is stale or degraded](https://github.com/NousResearch/hermes-agent/issues/66616)  
  Open since July 18, 2026. 44 comments; high visibility but still unresolved.

- [Issue #73379 — `hermes update` orphans non-systemd dashboard](https://github.com/NousResearch/hermes-agent/issues/73379)  
  Open since July 28, 2026. P2 updater reliability bug.

- [PR #76003 — bound the doctor state.db probe with a cancellable SQLite deadline](https://github.com/NousResearch/hermes-agent/pull/76003)  
  Open since August 1, 2026. P2 fix for a hang in `hermes doctor`; supersedes an older PR.

- [PR #76616 — safe current backend restart for Desktop](https://github.com/NousResearch/hermes-agent/pull/76616)  
  Open since August 2, 2026. P3 feature touching SSH/Windows safety boundaries; likely needs careful review.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-17

## 1. Today's Overview
PicoClaw saw moderate activity over the past 24 hours: 2 issues and 5 pull requests were updated, with no new releases and no newly reported bug issues. The main thrust of current PR work is security hardening around media downloads (SSRF protection) across Weixin, WeCom, and other channels, plus feature work such as an Exa web search provider and a Simplex channel type. One PR (#3193) was closed/merged during the window. A notable portion of the active issues and PRs carry a `stale` label, suggesting maintainer review bandwidth may be a bottleneck.

## 2. Releases
No new releases, release candidates, or pre-releases were published in the reported window. There are no changelog, breaking-change, or migration notes to report.

## 3. Project Progress
- **#3193 — Added simplex channel type ([PR](https://github.com/sipeed/picoclaw/pull/3193))**  
  Closed/merged during the period. This was a new feature PR adding a Simplex channel connector; if merged, it expands PicoClaw’s channel support.

- **#3299 — Add native Exa web search provider ([PR](https://github.com/sipeed/picoclaw/pull/3299))**  
  Still open. Adds Exa as a native `tools.web` / `web_search` provider, supporting Exa’s POST `/search` API, API key auth, and existing time-range filters.

- **#3322 / #3323 / #3324 — SSRF hardening for media downloads ([PR #3322](https://github.com/sipeed/picoclaw/pull/3322), [#3323](https://github.com/sipeed/picoclaw/pull/3323), [#3324](https://github.com/sipeed/picoclaw/pull/3324))**  
  All open. These PRs replace unsafe HTTP clients with PicoClaw’s `CreateSafeHTTPClient` / `ValidateSafeHTTPURL` / `BlockPrivateTargets` utilities to prevent media downloads from reaching loopback, link-local, or private hosts.

## 4. Community Hot Topics
- **#3302 — Support OAuth 2.1 for MCP servers ([Issue](https://github.com/sipeed/picoclaw/issues/3302))**  
  The most commented item in the window with 3 comments. This is a feature request to bring MCP server authentication in line with OAuth 2.1, explicitly referencing earlier demand from #2546. The issue is labeled `stale` and marked “Nice-to-Have / Enhancement,” so it may not currently be prioritized by maintainers.

- **#3325 — Render Telegram tables with rich messages ([Issue](https://github.com/sipeed/picoclaw/issues/3325))**  
  1 comment. Users want Telegram to display structured Markdown tables using the native table UI introduced in Telegram Bot API 10.1. PicoClaw currently sends tables as plain text or monospaced code blocks, which loses readability.

- **#3299 — Exa web search provider ([PR](https://github.com/sipeed/picoclaw/pull/3299))**  
  No comment traffic, but the PR is a visible contribution aimed at expanding web search provider coverage. It reflects demand for more configurable/native search backends.

## 5. Bugs & Stability
No new crash, regression, or functional bug reports were opened in the last 24 hours. However, three open PRs address an ongoing **SSRF risk** in media download paths:

- **#3322 — block private targets on inbound media downloads ([PR](https://github.com/sipeed/picoclaw/pull/3322))**  
  Broadest fix: QQ, Telegram, Discord, LINE, and Slack inbound attachment downloads are not using `BlockPrivateTargets`, leaving them potentially vulnerable to crafted media URLs reaching loopback/private networks. Severity: **high**.

- **#3323 — WeCom media downloads use `CreateSafeHTTPClient` ([PR](https://github.com/sipeed/picoclaw/pull/3323))**  
  WeCom’s `mediaClient` is a plain `http.Client`, so redirects can reach loopback/private hosts during inbound and outbound media fetches. Severity: **medium/high**.

- **#3324 — Weixin media downloads use `CreateSafeHTTPClient` ([PR](https://github.com/sipeed/picoclaw/pull/3324))**  
  Similar SSRF issue in Weixin CDN/remote media fetches. Fix PR is open but not merged. Severity: **medium/high**.

These fix PRs exist but remain open and `stale`, so the reported exposure is still present in the codebase.

## 6. Feature Requests & Roadmap Signals
- **OAuth 2.1 for MCP servers (#3302)** — Explicitly classified as a nice-to-have enhancement, not a core/roadmap item. Given repeated mention of #2546, this is a recurring user ask and may eventually move up if MCP adoption grows.
- **Telegram rich table rendering (#3325)** — This request depends on Telegram Bot API 10.1 capabilities. It is a concrete UX improvement that could plausibly land in a minor release if accepted.
- **Exa web search provider (#3299)** — Open PR with a completed implementation. If reviewed and merged, native Exa support is likely to appear in the next release.
- **Simplex channel type (#3193)** — Closed/merged, so a Simplex channel connector could be part of the next version.

## 7. User Feedback Summary
User feedback in this window centers on **integration completeness** rather than general dissatisfaction:

- MCP users want **OAuth 2.1 support** for modern authentication workflows.
- Telegram users want **native table rendering** instead of degraded Markdown/code-block output.
- A contributor/user requests **Exa as a first-class web search provider** rather than relying on external configuration.
- Security-conscious contributors identified **SSRF issues in media download paths**, particularly across WeCom, Weixin, and generic inbound channels.

The presence of `stale` labels on several open PRs and issues suggests users/contributors may be waiting longer than expected for maintainer review or triage.

## 8. Backlog Watch
Items needing maintainer attention:

- **#3302 — OAuth 2.1 for MCP servers ([Issue](https://github.com/sipeed/picoclaw/issues/3302))**  
  Open since 2026-07-30, `stale`, with 3 comments and no obvious resolution. Repeated request referencing #2546 — needs triage or a roadmap decision.

- **#3325 — Render Telegram tables with rich messages ([Issue](https://github.com/sipeed/picoclaw/issues/3325))**  
  Open since 2026-08-09, `stale`. A concrete, scoped feature request; pending maintainer feedback or acceptance.

- **#3322 / #3323 / #3324 — SSRF hardening PRs ([PR #3322](https://github.com/sipeed/picoclaw/pull/3322), [#3323](https://github.com/sipeed/picoclaw/pull/3323), [#3324](https://github.com/sipeed/picoclaw/pull/3324))**  
  All open and `stale` since 2026-08-09. Security fixes should be prioritized for review/merge.

- **#3299 — Exa web search provider ([PR](https://github.com/sipeed/picoclaw/pull/3299))**  
  Open since 2026-07-26, no comments, no stale label. A full implementation is waiting for maintainer attention; it should be either reviewed/merged or explicitly closed with feedback.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-17

## 1. Today's Overview

NanoClaw saw a high-velocity day: 33 PRs were updated, with 13 moving to closed/merged and 20 remaining open. The only issue touched in the last 24 hours was quickly self-closed as “filed in error,” so the active user-issue signal is essentially zero. The bulk of activity came from core-team infrastructure work on cross-session context, channel adapter capabilities, delivery semantics, permissions, and document memory tooling. No new releases were published, so these changes remain in main pending a future tag. Overall, the project appears actively maintained and technically healthy, with a strong emphasis on hardening multi-session and multi-platform behavior.

## 2. Releases

**No new releases** were published in the last 24 hours. There are no new version notes, breaking changes, or migration steps to report.

## 3. Project Progress

13 PRs were closed/merged in the window. The most significant visible landings or closings include:

- **[PR #3284](https://github.com/nanocoai/nanoclaw/pull/3284)** — Closed: Mid-turn streaming is now the single delivery door for providers that emit mid-turn text; final results no longer send content separately, with DB-backed echo suppression.
- **[PR #3262](https://github.com/nanocoai/nanoclaw/pull/3262)** — Closed: Chat SDK bridge agent-mode DM surface now supports app-context capture, DM-thread normalization, and a `dm-opened` hook.
- **[PR #3261](https://github.com/nanocoai/nanoclaw/pull/3261)** — Closed: Optional adapter capabilities were widened, including status-bearing `setTyping`, `setThreadTitle`, and `setSuggestedPrompts`.
- **[PR #3263](https://github.com/nanocoai/nanoclaw/pull/3263)** — Closed: Channel registry can now hot-start a registered adapter after boot.
- **[PR #3260](https://github.com/nanocoai/nanoclaw/pull/3260)** — Closed: New `decline_notify` unknown-sender policy for DM-shaped surfaces, adding a polite decline plus one-line owner FYI.
- **[PR #3266](https://github.com/nanocoai/nanoclaw/pull/3266)** — Closed: Permissions now support a `registerChannelCardInterceptor` seam before registration cards are built.
- **[PR #3265](https://github.com/nanocoai/nanoclaw/pull/3265)** — Closed: Added `CreateAgentOptions.suppressCreatedNotify` for agent-to-agent workflows.
- **[PR #3278](https://github.com/nanocoai/nanoclaw/pull/3278)** — Closed: New `save_document` MCP tool persists Word/PDF attachments to agent memory.
- **[PR #3283](https://github.com/nanocoai/nanoclaw/pull/3283)** — Closed: Structured chat links are now preserved when platform display text is shortened.
- **[PR #3259](https://github.com/nanocoai/nanoclaw/pull/3259)** — Closed: Skill-apply heading ordinal handling, headless browser URL surfacing, and inherited-script extraction fixes.
- **[PR #1251](https://github.com/nanocoai/nanoclaw/pull/1251)** — Closed: Long-running community contribution adding an `add-openmail` email channel skill.

## 4. Community Hot Topics

Comment/reaction counts were not populated in the provided data, so “hotness” is inferred from topic weight and maintainer attention.

The most substantive open threads are core-team PRs targeting multi-session and delivery correctness:

- **[PR #3257](https://github.com/nanocoai/nanoclaw/pull/3257)** — Cross-session context fan-out, DM backfill, and echo pruning. Underlying need: agents running several concurrent sessions need shared context without duplicating or crowding out real messages.
- **[PR #3256](https://github.com/nanocoai/nanoclaw/pull/3256)** — `messaging_groups.detached_at` migration and delivery refusal into detached conversations. Underlying need: accurate platform lifecycle state and avoiding sends to rooms the bot no longer belongs to.
- **[PR #3255](https://github.com/nanocoai/nanoclaw/pull/3255)** — Outbound delivery must resolve the sender’s own channel row, not an arbitrary sibling instance. Underlying need: multi-identity rooms can misroute messages without instance-scoped resolution.
- **[PR #3254](https://github.com/nanocoai/nanoclaw/pull/3254)** — Two-phase inbound batch selection so context rows never crowd out or drive a turn. Underlying need: backlogged context must not starve actual task work.

## 5. Bugs & Stability

No crash-level regression was reported today in the issue tracker. The only issue updated — [#3271](https://github.com/nanocoai/nanoclaw/issues/3271) — was explicitly filed against the wrong repository and closed as invalid.

Bug-fix PRs in flight, ranked by estimated impact:

- **[PR #2752](https://github.com/nanocoai/nanoclaw/pull/2752)** — Open since June 12; Discord inbound attachments that expose only a URL never reach the agent in readable form. Long-standing platform gap with a fix waiting on attention.
- **[PR #3255](https://github.com/nanocoai/nanoclaw/pull/3255)** — Open fix for outbound delivery resolving an arbitrary sibling instance row in multi-identity shared rooms. Can cause messages to be attributed to or delivered through the wrong bot identity.
- **[PR #3254](https://github.com/nanocoai/nanoclaw/pull/3254)** — Open fix for context backlog pushing due task rows out of the capped inbound batch; work can be “woken” but never delivered to the agent.
- **[PR #3281](https://github.com/nanocoai/nanoclaw/pull/3281)** — Open fix for agent-scoped `ncl tasks` being blind to legacy pre-2.1.54 sessions.
- **[PR #3282](https://github.com/nanocoai/nanoclaw/pull/3282)** — Open fix for Telegram pairing codes displayed with spaces being rejected when pasted verbatim.
- **[PR #3280](https://github.com/nanocoai/nanoclaw/pull/3280)** — Open fix so `ncl groups config update` can actually clear a nullable scalar instead of storing an empty string.

Already-closed fixes in this window include **[PR #3283](https://github.com/nanocoai/nanoclaw/pull/3283)** for lost structured chat link targets and **[PR #3284](https://github.com/nanocoai/nanoclaw/pull/3284)** for consistent mid-turn streaming delivery.

## 6. Feature Requests & Roadmap Signals

The issue tracker produced no new feature requests in the last 24 hours, but the PR stream is a clear roadmap signal. The core-team cluster is pushing toward:

- Cross-session context and group-level conversation state: **[PR #3257](https://github.com/nanocoai/nanoclaw/pull/3257)** and **[PR #3256](https://github.com/nanocoai/nanoclaw/pull/3256)**.
- Richer channel-adapter capabilities: **[PR #3261](https://github.com/nanocoai/nanoclaw/pull/3261)**, **[PR #3262](https://github.com/nanocoai/nanoclaw/pull/3262)**, and **[PR #3263](https://github.com/nanocoai/nanoclaw/pull/3263)**.
- More permission and approval seams: **[PR #3260](https://github.com/nanocoai/nanoclaw/pull/3260)** and **[PR #3266](https://github.com/nanocoai/nanoclaw/pull/3266)**.
- Document memory via MCP: **[PR #3278](https://github.com/nanocoai/nanoclaw/pull/3278)** points toward a larger Document Memory + Fill-In Editing epic.
- Community interest in email channels: **[PR #1251](https://github.com/nanocoai/nanoclaw/pull/1251)** adds an OpenMail-based email channel and eventually closed.

Prediction: if the open core-team PRs merge cleanly, the next NanoClaw release will likely include cross-session context fan-out, detached-conversation blocking, optional adapter presence/typing capabilities, and the new permission interception hooks.

## 7. User Feedback Summary

There is no directly measured user satisfaction data in this window: the only issue was an erroneous submission, and no comment or reaction counts were included.

Pain points and use cases can still be inferred from contributor PRs:

- Discord users/agents cannot reliably read inbound attachments: **[PR #2752](https://github.com/nanocoai/nanoclaw/pull/2752)**.
- Telegram setup UX is fragile when pairing codes include spaces: **[PR #3282](https://github.com/nanocoai/nanoclaw/pull/3282)**.
- Existing users upgrading from legacy sessions noticed `ncl tasks` blind spots: **[PR #3281](https://github.com/nanocoai/nanoclaw/pull/3281)**.
- Operators need to unset config scalars, not just set them: **[PR #3280](https://github.com/nanocoai/nanoclaw/pull/3280)**.
- Community contributors want deeper email integration, shown by the OpenMail skill PR.

Overall, contributors are responding to real operational friction with targeted fixes, which is a positive maintenance signal.

## 8. Backlog Watch

- **[PR #2752](https://github.com/nanocoai/nanoclaw/pull/2752)** is the clearest stale item: open since 2026-06-12, last updated 2026-08-16, and still awaiting a maintainer decision. It addresses a meaningful Discord attachment bug and should be prioritized or explicitly deferred.
- No user issue currently needs maintainer response; [#3271](https://github.com/nanocoai/nanoclaw/issues/3271) was self-closed as wrong-repository noise.
- Several core-team PRs remain open — [#3254](https://github.com/nanocoai/nanoclaw/pull/3254), [#3255](https://github.com/nanocoai/nanoclaw/pull/3255), [#3256](https://github.com/nanocoai/nanoclaw/pull/3256), and [#3257](https://github.com/nanocoai/nanoclaw/pull/3257) — but they are recent and still moving, so they are not backlog yet.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-17

## 1. Today's Overview

IronClaw saw steady, maintenance-heavy activity over the last 24 hours: 9 pull requests were updated, 1 new issue was filed, and no new releases were published. Dependency automation continues to drive much of the PR volume, but the project also saw a closed cleanup PR and a fast-moving Slack onboarding fix. The only open issue — #7681 — was quickly followed by a dedicated fix PR from the same author, indicating responsive maintainer attention. No crashes or regressions were reported, and the overall project health appears stable. The current focus seems to be dependency hygiene, Slack UX polish, and automation feature work.

## 2. Releases

No new releases were published in this window.

---

## 3. Project Progress

Two PRs were closed in the last 24 hours:

- [#7683 — chore: remove retired IronLoop network settings](https://github.com/nearai/ironclaw/pull/7683)  
  Closed, size XS, core contributor. Removes obsolete `network_access` fields from the trusted IronLoop repository configuration while retaining existing Implement/Tester/automatic Review/Resolve behavior. A low-risk internal cleanup.

- [#7632 — chore(deps): bump the everything-else group with 4 updates](https://github.com/nearai/ironclaw/pull/7632)  
  Closed, size M. Updates `base64`, `toml`, `rstest`, and `jsonschema`. Routine dependency maintenance.

Notable open PRs advancing features/fixes:

- [#7682 — fix(slack): deliver the unlinked-user connect nudge privately, with a one-click connect link](https://github.com/nearai/ironclaw/pull/7682)  
  Open, size L, docs scope. Directly addresses #7681; converts a public Slack connection nudge into a private, contextual one-click flow.

- [#7651 — feat(automations): add deterministic no-result suppression](https://github.com/nearai/ironclaw/pull/7651)  
  Open, size XL. Requires `trigger_create` to provide `result_delivery` and adds deterministic behavior for “only notify on match/change/result” intents.

- [#7680 — chore(agents): refresh codebase knowledge graph](https://github.com/nearai/ironclaw/pull/7680)  
  Open, CI-generated snapshot refresh. Purely infrastructure.

---

## 4. Community Hot Topics

There were no comment/reaction counts available on any item, so “active” is relative. The clear hotspot is the Slack unlinked-user onboarding issue and its immediate fix:

- [#7681 — Slack: unlinked-user connect message is public and requires a manual round trip](https://github.com/nearai/ironclaw/issues/7681)  
  Open, enhancement / UX / epic. Reports that when an unlinked Slack user @-mentions or DMs the bot, the reply is visible to everyone in shared channels and forces the user through a manual, disconnected web-app flow.

- [#7682 — fix(slack): deliver the unlinked-user connect nudge privately, with a one-click connect link](https://github.com/nearai/ironclaw/pull/7682)  
  Linked fix PR, same author. Addresses both privacy and context loss by making the nudge private and adding a one-click connect link.

Underlying need: users expect onboarding messages in Slack to be private, contextual, and low-friction — especially in shared team channels. This is a strong signal that Slack-channel UX and privacy handling are becoming a priority.

---

## 5. Bugs & Stability

No explicit bug, crash, or regression reports were filed in the last 24 hours. The closest issue is a UX/privacy flaw rather than a runtime failure:

- [#7681 — Slack: unlinked-user connect message is public and requires a manual round trip](https://github.com/nearai/ironclaw/issues/7681)  
  Severity: medium for enterprise/team Slack environments. The public reply in shared channels is a privacy/visibility problem, and the manual reconnect flow creates a poor onboarding experience. A fix PR already exists: [#7682](https://github.com/nearai/ironclaw/pull/7682).

Dependency-related stability notes:

- [#7406 — chore(deps): bump the actions group with 4 updates](https://github.com/nearai/ironclaw/pull/7406)  
  Open, risk: medium, because it updates GitHub Actions including `anthropics/claude-code-action`, `actions/setup-node`, `Swatinem/rust-cache`, and `docker/login-action`.

- Other dependency bumps — [#7684](https://github.com/nearai/ironclaw/pull/7684), [#7020](https://github.com/nearai/ironclaw/pull/7020), [#7262](https://github.com/nearai/ironclaw/pull/7262) — are low-risk routine maintenance.

No regressions were reported in this window.

---

## 6. Feature Requests & Roadmap Signals

- [#7681 — Slack: unlinked-user connect message is public and requires a manual round trip](https://github.com/nearai/ironclaw/issues/7681)  
  Marked as an epic and scoped to channel onboarding. Given the fix PR #7682 is already open, a Slack-specific private/one-click onboarding improvement is likely to land in the next version.

- [#7651 — feat(automations): add deterministic no-result suppression](https://github.com/nearai/ironclaw/pull/7651)  
  Large feature for automations. It introduces model-derived `result_delivery` behavior and deterministic fallback to `deliver`. This could appear in an upcoming minor release after review.

- [#7680 — chore(agents): refresh codebase knowledge graph](https://github.com/nearai/ironclaw/pull/7680)  
  CI/infrastructure only; no user-facing roadmap impact.

No releases are currently published, so no release notes or migration guidance are available.

---

## 7. User Feedback Summary

The only direct user-reported pain point is from #7681:

- In shared Slack channels, an unlinked user who mentions the bot receives a public “connect it in the Ironclaw web app” message, visible to everyone in the channel. This creates privacy concerns and potential confusion for the requesting user.
- The current flow is a manual multi-step round trip: connect in the web app, then return to Slack and re-message the bot. The issue highlights that step context is lost, illustrated by the reported “what's the link to connect you?” confusion.

There is no explicit negative sentiment in the dependency PRs. The quick creation of #7682 suggests maintainers/users are aligned on the desired outcome: private, one-click, context-preserving onboarding.

---

## 8. Backlog Watch

Several dependency and feature PRs have been open for more than a week and may need maintainer attention:

- [#7020 — chore(deps): bump tokio-tungstenite from 0.29.0 to 0.30.0](https://github.com/nearai/ironclaw/pull/7020)  
  Open since 2026-08-02. Low-risk Rust dependency update.

- [#7262 — chore(deps): bump the wasm group with 2 updates](https://github.com/nearai/ironclaw/pull/7262)  
  Open since 2026-08-05. Updates `wit-component` and `wit-parser`.

- [#7406 — chore(deps): bump the actions group with 4 updates](https://github.com/nearai/ironclaw/pull/7406)  
  Open since 2026-08-09. Medium-risk GitHub Actions update; worth prioritising.

- [#7651 — feat(automations): add deterministic no-result suppression](https://github.com/nearai/ironclaw/pull/7651)  
  Open since 2026-08-14. Large feature, needs maintainer review.

- [#7680 — chore(agents): refresh codebase knowledge graph](https://github.com/nearai/ironclaw/pull/7680)  
  Open, generated by CI; should be reviewed and merged normally.

There are no long-unanswered issues: #7681 already has a matching fix PR (#7682), and the remaining open items are mostly dependency updates.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-17

## 1. Today's Overview

LobsterAI showed moderate maintenance activity over the last 24 hours: 10 issues were updated (7 open, 3 closed) and 17 PRs were updated (8 open, 9 closed/merged). No new release was published. The PR pool includes a notable cluster of security-hardening patches around log redaction, IPC access control, and URL scheme validation, alongside long-running UX and cowork improvements. However, many of the updated issues and PRs carry the `stale` label and originate from mid-April, suggesting the project is currently in a maintenance/triage phase rather than a rapid feature-iteration phase. Overall health is stable but with several unresolved user-facing blockers still awaiting attention.

## 2. Releases

No new releases were published in this window.

## 3. Project Progress

The following PRs were closed/updated in a merged or closed state during this period. Exact merge status is not shown in the data, and several carry `stale` labels.

### Security & Hardening
- [PR #1831](https://github.com/netease-youdao/LobsterAI/pull/1831) — fix(security): Redacts sensitive logs in the main process and IM modules, preventing bearer tokens, API keys, and auth codes from being written to disk as plaintext.
- [PR #1832](https://github.com/netease-youdao/LobsterAI/pull/1832) — fix(security): Adds key-level access control to `store:*` IPC channels, blocking renderer-side exfiltration of `auth_tokens` and GitHub Copilot tokens.
- [PR #1833](https://github.com/netease-youdao/LobsterAI/pull/1833) — fix(security): Adds a URI scheme whitelist to `shell.openExternal`, rejecting `file:`, `javascript:`, `data:`, and other dangerous schemes.

### Cowork & Agent Experience
- [PR #1835](https://github.com/netease-youdao/LobsterAI/pull/1835) — fix(cowork): Removes duplicate system error messages when `continueSession` fails.
- [PR #1715](https://github.com/netease-youdao/LobsterAI/pull/1715) — fix(cowork): Adds missing `session_id` to OpenClaw server proxy requests for multi-session stability.
- [PR #1691](https://github.com/netease-youdao/LobsterAI/pull/1691) — feat(agent): Adds agent template export/import via JSON files or remote URLs.
- [PR #1693](https://github.com/netease-youdao/LobsterAI/pull/1693) — feat(cowork): Improves model setup entry when no model is configured and preserves draft input on failed send.
- [PR #1760](https://github.com/netease-youdao/LobsterAI/pull/1760) — feat(agent): Supports image avatars for custom agents in addition to emoji avatars.
- [PR #1690](https://github.com/netease-youdao/LobsterAI/pull/1690) — fix(settings): Adds confirmation modal before deleting IM instances.

## 4. Community Hot Topics

Most active items by comments/reactions:

- [Issue #1813](https://github.com/netease-youdao/LobsterAI/issues/1813) — DeepSeek V4 "provider rejected the request schema or tool payload" (8 comments, closed as stale). High user interest in model-provider compatibility.
- [Issue #1797](https://github.com/netease-youdao/LobsterAI/issues/1797) — Request to add batch conversation deletion (1 👍, 2 comments). Signals need for better session/context management.
- [Issue #1698](https://github.com/netease-youdao/LobsterAI/issues/1698) — Gateway port conflict and process competition when installing another app ("智企帝王蟹") alongside LobsterAI (3 comments). Reproducible integration blocker.
- [Issue #1796](https://github.com/netease-youdao/LobsterAI/issues/1796) — Write/Edit tools consistently fail (3 comments, closed as stale). Core functionality reliability concern.
- [Issue #1744](https://github.com/netease-youdao/LobsterAI/issues/1744) — Bug report with failed document upload (3 comments, open).

Underlying theme: users are hitting real blockers around model-provider schema changes, broken core editing tools, and cross-application port conflicts. The strongest positive reaction, `#1797`, signals demand for more user control over conversation history.

## 5. Bugs & Stability

Ranked by severity:

1. **Gateway port conflict / process competition** — [Issue #1698](https://github.com/netease-youdao/LobsterAI/issues/1698)  
   Reproducible failure when LobsterAI is running and another app is installed: gateway becomes unresponsive and authentication fails. No visible open fix PR.

2. **Write/Edit tools always fail** — [Issue #1796](https://github.com/netease-youdao/LobsterAI/issues/1796)  
   Core file-modification tools stopped working for days even after app updates. Closed as stale without a public fix, which is concerning.

3. **Diff display broken after update** — [Issue #1783](https://github.com/netease-youdao/LobsterAI/issues/1783)  
   User identified likely root cause in `extractDiffFromToolInput`: the edit branch only reads `oldText/newText` from top-level `toolInput`. Needs a frontend fix.

4. **DeepSeek V4 schema rejection** — [Issue #1813](https://github.com/netease-youdao/LobsterAI/issues/1813)  
   Requests fail because the provider rejects the tool payload/schema. Closed as stale, but may reappear with new model versions.

5. **Windows 11 install icon blank/invalid** — [Issue #1714](https://github.com/netease-youdao/LobsterAI/issues/1714)  
   Installation sometimes produces a white/invalid app icon. Medium severity.

6. **Bug report upload failure** — [Issue #1744](https://github.com/netease-youdao/LobsterAI/issues/1744)  
   Report itself failed to upload a `.docx` support letter; low severity but indicates issue template friction.

Positive note: the closed security PRs ([#1831](https://github.com/netease-youdao/LobsterAI/pull/1831), [#1832](https://github.com/netease-youdao/LobsterAI/pull/1832), [#1833](https://github.com/netease-youdao/LobsterAI/pull/1833)) address serious stability/security risks in the main process, renderer, and external URL handling.

## 6. Feature Requests & Roadmap Signals

User-requested features visible in the latest issues:

- **OAuth2 / modern auth for email** — [Issue #1745](https://github.com/netease-youdao/LobsterAI/issues/1745)  
  User cannot connect to Outlook because only app-password login is supported. This is increasingly important as Microsoft disables basic auth.

- **Dynamic temperature control** — [Issue #1688](https://github.com/netease-youdao/LobsterAI/issues/1688)  
  User wants to adjust LLM `temperature` via conversation keywords.

- **Batch conversation deletion** — [Issue #1797](https://github.com/netease-youdao/LobsterAI/issues/1797)  
  Explicit user request to remove invalid conversations in bulk.

- **Scheduled task notification text** — [Issue #1751](https://github.com/netease-youdao/LobsterAI/issues/1751)  
  Notification wording in scheduled tasks does not match the sent message.

Near-term roadmap signals from open, non-stale PRs:

- [PR #2452](https://github.com/netease-youdao/LobsterAI/pull/2452) — Preserves provider prefix for slashed model IDs (important for DeepSeek family).
- [PR #1682](https://github.com/netease-youdao/LobsterAI/pull/1682) — Adds read-aloud for AI replies via Web Speech API.
- [PR #1683](https://github.com/netease-youdao/LobsterAI/pull/1683) — Validates `owner/repo` format before remote skill import.
- [PR #1707](https://github.com/netease-youdao/LobsterAI/pull/1707) — Clears home input when switching agents.
- [PR #1773](https://github.com/netease-youdao/LobsterAI/pull/1773) — Adds missing `edit` i18n key.

These PRs are likely candidates for the next minor release if maintainers resume merging.

## 7. User Feedback Summary

User sentiment in this window skews toward frustration with regressions and blockers:

- **Reproducible integration failures** around gateway port conflicts ([#1698](https://github.com/netease-youdao/LobsterAI/issues/1698)).
- **Core tool breakage** — Write/Edit failing for multiple days ([#1796](https://github.com/netease-youdao/LobsterAI/issues/1796)).
- **Update-caused regression** — diff display broke after an update ([#1783](https://github.com/netease-youdao/LobsterAI/issues/1783)).
- **Missing authentication support** — Outlook OAuth2 block ([#1745](https://github.com/netease-youdao/LobsterAI/issues/1745)).
- **Feature gap** — users want finer control over model parameters and conversation history cleanup ([#1688](https://github.com/netease-youdao/LobsterAI/issues/1688), [#1797](https://github.com/netease-youdao/LobsterAI/issues/1797)).

No positive satisfaction signals were present in this window. The overall impression is that users value the product but are experiencing reliability and compatibility pain.

## 8. Backlog Watch

Items that appear stale but still matter and need maintainer attention:

- [Issue #1698](https://github.com/netease-youdao/LobsterAI/issues/1698) — Gateway port conflict with other apps. Open since 2026-04-15, high impact, no clear fix PR.
- [Issue #1783](https://github.com/netease-youdao/LobsterAI/issues/1783) — Diff regression root cause identified by user. Open since 2026-04-21.
- [Issue #1745](https://github.com/netease-youdao/LobsterAI/issues/1745) — Email OAuth2 support request. Blocked user workflow, open since 2026-04-19.
- [Issue #1688](https://github.com/netease-youdao/LobsterAI/issues/1688) — Temperature parameter control. Open since 2026-04-15.
- [Issue #1714](https://github.com/netease-youdao/LobsterAI/issues/1714) — Windows 11 installation icon bug. Open since 2026-04-17.
- [PR #1765](https://github.com/netease-youdao/LobsterAI/pull/1765) — Dependabot `@headlessui/react` bump `1.7.19 → 2.2.10`. Open since 2026-04-20 without update.
- [PR #1769](https://github.com/netease-youdao/LobsterAI/pull/1769) — Skeleton loading screen for cowork initialization. Open since 2026-04-20.
- [PR #1770](https://github.com/netease-youdao/LobsterAI/pull/1770) — Enhanced empty states for skills and task history. Open since 2026-04-20.

These items, especially the unresolved gateway conflict and diff regression, deserve explicit maintainer response or closure with rationale.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-17

## Today's Overview

Moltis saw very high activity in the last 24 hours: 17 PRs were updated, with 16 closed and 1 new open PR, while 5 issues were updated (2 open, 3 closed). No new release was published. The project made major progress across memory, connectors, security, and UX: a zvec vector memory backend landed, durable calendar/channel/email connectors were added, Slack native live task cards shipped, and several security hardening fixes were merged. Community-reported bugs around sandbox builds and main-session deletion were also fixed and closed. Two new open issues remain notable: a heartbeat scheduling bug and a red CI format gate on `main`.

## Releases

No new releases were available in this period. There are no release notes, breaking changes, or migration steps to report.

## Project Progress

The 16 closed PRs show a broad mix of feature work, stabilization, and security hardening:

- [PR #1201](https://github.com/moltis-org/moltis/pull/1201) — `fix(gateway)`: fixed a compile error on `main` by threading `start_background_tasks` into the memory runtime builder.
- [PR #1203](https://github.com/moltis-org/moltis/pull/1203) — `test(gateway)`: stabilized the flaky push fanout timeout test using a paused clock; closes [Issue #1193](https://github.com/moltis-org/moltis/issues/1193).
- [PR #1182](https://github.com/moltis-org/moltis/pull/1182) — `fix(sessions)`: allowed deleting/archiving the main session; closes [Issue #1132](https://github.com/moltis-org/moltis/issues/1132).
- [PR #1191](https://github.com/moltis-org/moltis/pull/1191) — `fix(sandbox)`: pointed gogcli module path at the `openclaw` org; fixes sandbox build failure ([Issue #1189](https://github.com/moltis-org/moltis/issues/1189)).
- [PR #1192](https://github.com/moltis-org/moltis/pull/1192) — `fix(skills)`: fixed `wacrawl` Go install metadata after repo org change.
- [PR #1186](https://github.com/moltis-org/moltis/pull/1186) — `fix(vault)`: normalized recovery phrases before hashing, fixing vault unsealing with differently formatted phrases.
- [PR #1180](https://github.com/moltis-org/moltis/pull/1180) — `fix(security)`: hardened model and zip path handling against arbitrary file writes.
- [PR #1179](https://github.com/moltis-org/moltis/pull/1179) — `fix(gateway)`: added verification of node pairing signatures.
- [PR #1147](https://github.com/moltis-org/moltis/pull/1147) — `fix(caldav)`: made `list_events` honor time ranges via RFC 4791 `calendar-query`.
- [PR #1093](https://github.com/moltis-org/moltis/pull/1093) — `feat`: added per-account, per-channel, and per-user activity log visibility settings.
- [PR #1158](https://github.com/moltis-org/moltis/pull/1158) — `feat(memory)`: added a zvec + redb vector database memory backend.
- [PR #1190](https://github.com/moltis-org/moltis/pull/1190) — `feat`: added durable calendar, channel, and email connectors with snapshots, scheduling, projections, and local search.
- [PR #1195](https://github.com/moltis-org/moltis/pull/1195) — `feat`: added Slack native live task cards.
- [PR #1194](https://github.com/moltis-org/moltis/pull/1194) — `fix(scripts)`: guarded empty bash array expansions for macOS bash 3.2.
- [PR #1200](https://github.com/moltis-org/moltis/pull/1200) and [PR #1184](https://github.com/moltis-org/moltis/pull/1184) — dependency bumps in npm/yarn groups.

## Community Hot Topics

Visible comment activity was low in this snapshot: only [Issue #1132](https://github.com/moltis-org/moltis/issues/1132) had a recorded comment, and it was closed by [PR #1182](https://github.com/moltis-org/moltis/pull/1182). The underlying user need was clear: people expect to be able to delete or archive the default `main` session just like any other session.

On the PR side, the most substantive topics by scope and user impact were:

- [PR #1158](https://github.com/moltis-org/moltis/pull/1158) — local/self-hosted vector memory backend using zvec + redb.
- [PR #1190](https://github.com/moltis-org/moltis/pull/1190) — durable provider-neutral connectors for CalDAV, Gmail, and channel history.
- [PR #1195](https://github.com/moltis-org/moltis/pull/1195) — Slack-native live task cards.
- [PR #1180](https://github.com/moltis-org/moltis/pull/1180) and [PR #1179](https://github.com/moltis-org/moltis/pull/1179) — security hardening for zip/model paths and node pairing verification.

These themes indicate strong community interest in self-hostable memory, multi-platform integrations, and production-ready security.

## Bugs & Stability

Open issues, ranked by likely severity:

1. **[Issue #1205](https://github.com/moltis-org/moltis/issues/1205) — Heartbeat ignores configured active hours and runs continuously**  
   Open, no fix PR yet. This is a potential resource/privacy issue: if active-hours configuration is meant to limit background work, the current behavior violates that expectation.

2. **[Issue #1202](https://github.com/moltis-org/moltis/issues/1202) — Format CI gate red on `main`: two files exceed 1500 lines**  
   Open, no fix PR yet. This blocks CI. The files were introduced by [PR #1158](https://github.com/moltis-org/moltis/pull/1158), so a follow-up formatting/refactor cleanup is needed.

3. **[Issue #1193](https://github.com/moltis-org/moltis/issues/1193) — Flaky push fanout timeout test under full-suite load**  
   Closed. Fixed by [PR #1203](https://github.com/moltis-org/moltis/pull/1203), which runs the test on a paused clock.

4. **[Issue #1189](https://github.com/moltis-org/moltis/issues/1189) — Sandbox build failing due to wrong gogcli GitHub URL**  
   Closed. Fixed by [PR #1191](https://github.com/moltis-org/moltis/pull/1191).

5. **[Issue #1132](https://github.com/moltis-org/moltis/issues/1132) — `main` session can't be deleted/archived**  
   Closed. Fixed by [PR #1182](https://github.com/moltis-org/moltis/pull/1182).

Also worth noting: [PR #1201](https://github.com/moltis-org/moltis/pull/1201) fixed an immediate compile break on `main`, and [PR #1194](https://github.com/moltis-org/moltis/pull/1194) fixed a macOS-only script failure.

## Feature Requests & Roadmap Signals

The most visible roadmap signals came from landed or newly proposed PRs:

- **[PR #1204](https://github.com/moltis-org/moltis/pull/1204) — MiniMax Code ACP agent** is currently open. It adds a named `acp-minimax-code` external-agent kind, default executable detection, and documentation. If merged, this broadens supported external coding agents.
- **[PR #1190](https://github.com/moltis-org/moltis/pull/1190) — Durable calendar, channel, and email connectors** is a major integration milestone. Expect continued work on provider reliability and local indexing.
- **[PR #1195](https://github.com/moltis-org/moltis/pull/1195) — Slack native live task cards** suggests deeper Slack workflow integration.
- **[PR #1158](https://github.com/moltis-org/moltis/pull/1158) — zvec memory backend** landed, but the line-length CI issue in [Issue #1202](https://github.com/moltis-org/moltis/issues/1202) may require a small follow-up refactor before it is fully clean.
- **[PR #1147](https://github.com/moltis-org/moltis/pull/1147) — CalDAV time-range support** improves calendar sync correctness and likely sets the stage for more calendar features.

## User Feedback Summary

Real user pain points visible in this cycle:

- Users want full control over session management, including the `main` session ([Issue #1132](https://github.com/moltis-org/moltis/issues/1132)).
- Sandbox builds are a point of friction when external dependencies move organizations, e.g. gogcli and wacrawl moving to `openclaw` ([Issue #1189](https://github.com/moltis-org/moltis/issues/1189), [PR #1192](https://github.com/moltis-org/moltis/pull/1192)).
- Background behavior must respect user configuration; the heartbeat issue ([Issue #1205](https://github.com/moltis-org/moltis/issues/1205)) suggests users rely on active-hours settings.
- Some users are security-sensitive and explicitly said they want Moltis hardened before adopting it ([PR #1179](https://github.com/moltis-org/moltis/pull/1179)).
- Users are actively using Moltis with locally run models and custom memory setups ([PR #1158](https://github.com/moltis-org/moltis/pull/1158)).

Overall, maintainer responsiveness looks strong: multiple reported bugs were closed within days, and a same-day compile regression was fixed in [PR #1201](https://github.com/moltis-org/moltis/pull/1201).

## Backlog Watch

Several long-running PRs were closed today, including [PR #1093](https://github.com/moltis-org/moltis/pull/1093) (created June 3), [PR #1147](https://github.com/moltis-org/moltis/pull/1147) (created July 11), and [PR #1180](https://github.com/moltis-org/moltis/pull/1180) (created July 31). Clearing those is a positive health signal.

Remaining items needing attention:

- **[Issue #1205](https://github.com/moltis-org/moltis/issues/1205)** — open heartbeat bug with no fix PR yet.
- **[Issue #1202](https://github.com/moltis-org/moltis/issues/1202)** — red CI format gate caused by oversized files from [PR #1158](https://github.com/moltis-org/moltis/pull/1158).
- **[PR #1204](https://github.com/moltis-org/moltis/pull/1204)** — new MiniMax Code ACP agent feature awaiting review/merge.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw / QwenPaw Project Digest — 2026-08-17

## Today's Overview

CoPaw/QwenPaw saw moderate-to-high activity in the last 24 hours: 9 issues were updated (6 open/active, 3 closed) and 9 PRs were updated, all still open with 0 merged or closed. No new releases were published. The activity was dominated by first-time contributor bug-fix PRs covering video handling, OAuth token persistence, cron sync, and console rendering — a healthy sign of community engagement, though maintainer merge throughput appears to be the current bottleneck. The most notable unresolved pain points are session/console stability and agent tool-call reliability.

## Releases

No new releases in the last 24 hours. No release notes or migration notes to report.

## Project Progress

- **Merged/closed PRs today:** 0. No PRs were merged or closed in the last 24h.
- **Closed issues:**
  - [#7063 — Agent tool-call crash](https://github.com/agentscope-ai/QwenPaw/issues/7063) — closed after being reported on 2026-08-16.
  - [#7003 — ViBo memory proposal](https://github.com/agentscope-ai/QwenPaw/issues/7003) — closed; memory-efficiency proposal with 3 comments.
  - [#6471 — Cron misfire with APScheduler AsyncIOScheduler](https://github.com/agentscope-ai/QwenPaw/issues/6471) — closed after a long investigation.

Significant open PRs advanced in the last 24h, but remain unmerged:

- [#6302 — Unify provider discovery, model metadata, routing, and agent controls](https://github.com/agentscope-ai/QwenPaw/pull/6302)
- [#7072 — Add background chat task list API](https://github.com/agentscope-ai/QwenPaw/pull/7072)
- [#6940 — Native DataPaw app runtime and durable analysis workspace](https://github.com/agentscope-ai/QwenPaw/pull/6940)

## Community Hot Topics

The most-discussed items by comment count were:

- [#7063 — Agent tool-call crash (`async for` on coroutine)](https://github.com/agentscope-ai/QwenPaw/issues/7063) — 3 comments  
  Underlying need: reliability of agentic tool execution. A guaranteed crash on tool calls is a major adoption blocker for automation use cases.

- [#7003 — Memory for QwenPaw agents, ViBo proposal](https://github.com/agentscope-ai/QwenPaw/issues/7003) — 3 comments  
  Underlying need: persistent, cost-efficient memory. Users want fewer tokens consumed by full-history resends and cross-session memory.

- [#7052 — Plugin API `system_prompt` permission request](https://github.com/agentscope-ai/QwenPaw/issues/7052) — 2 comments  
  Underlying need: enterprises and plugin developers want to inject their own system prompts without exposing them in the chat UI.

No items had significant 👍 reactions in this window.

## Bugs & Stability

Ranked by severity:

1. **High — [#7074: Normal-operation crashes requiring page refresh](https://github.com/agentscope-ai/QwenPaw/issues/7074)**  
   User reports frequent crashes during normal use, needing a page refresh to recover. Open, no fix PR identified yet.

2. **Medium-High — [#7065: Chat history disappears after several rounds](https://github.com/agentscope-ai/QwenPaw/issues/7065)**  
   After ~7 rounds, only the most recent 3–4 messages are visible, and scrolling to top does not reveal earlier history. Open, no fix PR identified.

3. **Medium-High — [#7063: Tool-call crash is reportably guaranteed](https://github.com/agentscope-ai/QwenPaw/issues/7063)**  
   `TypeError: 'async for' requires an object with __aiter__ method, got coroutine` in `_execute_tool_call`. The issue is closed, but no explicit fix PR is visible in the data.

4. **Medium — [#6471: Cron misfire after long idle](https://github.com/agentscope-ai/QwenPaw/issues/6471)**  
   APScheduler `AsyncIOScheduler` stops firing after long event-loop idle periods. Closed, though details of fix are not clear from issue data.

Several bug-fix PRs are pending review:

- [#7070 — Fix `view_video` silent failure on OpenAI Responses API path](https://github.com/agentscope-ai/QwenPaw/pull/7070) — fixes #7059
- [#7071 — Make `view_video` inline cap configurable instead of hardcoded 2 MB](https://github.com/agentscope-ai/QwenPaw/pull/7071) — fixes #7060
- [#7066 — Persist rotated OAuth2 refresh tokens for MCP auth-code providers](https://github.com/agentscope-ai/QwenPaw/pull/7066) — fixes #7053
- [#7069 — Render data-URL images in historical console messages](https://github.com/agentscope-ai/QwenPaw/pull/7069) — fixes #7051
- [#7064 — Sync top-level text on `cron update --text` for agent jobs](https://github.com/agentscope-ai/QwenPaw/pull/7064) — fixes #7048

## Feature Requests & Roadmap Signals

- [#7062 — Per-agent / per-session `reasoning_effort` override](https://github.com/agentscope-ai/QwenPaw/issues/7062)  
  Users want different thinking levels for different agent roles without creating separate model entries. Strong candidate for a future release.

- [#7052 — Plugin API `system_prompt` permission](https://github.com/agentscope-ai/QwenPaw/issues/7052)  
  Enterprise/plugin use case; likely to gain traction if plugin ecosystem growth continues.

- [#7068 — File/script viewer support for C# and shader languages](https://github.com/agentscope-ai/QwenPaw/issues/7068)  
  Game-development workflows need syntax highlighting for `.shader`, `.gdshader`, `.hlsl`, etc.

- [#7073 — Skill name deduplication](https://github.com/agentscope-ai/QwenPaw/issues/7073)  
  Prevents duplicate loading when workspace skills collide with built-in skill names.

- [#7072 — Background chat task list API](https://github.com/agentscope-ai/QwenPaw/pull/7072)  
  Adds a list endpoint for background chat tasks; important for multi-agent coordination.

- [#6940 — Native DataPaw app runtime and durable analysis workspace](https://github.com/agentscope-ai/QwenPaw/pull/6940)  
  Large feature PR, tagged ready-for-human-review, but still unmerged.

## User Feedback Summary

- **Tool-call reliability is a critical concern:** a guaranteed crash blocks agent automation workflows.
- **Session/console stability is frustrating users:** crashes requiring page refresh and disappearing chat history are daily blockers.
- **Memory cost is top-of-mind:** the ViBo proposal shows real demand for cheaper, persistent memory rather than resending full conversation history.
- **Silent failures damage trust:** `view_video` returning “Video loaded” without frames, and OAuth refresh tokens not persisting, are confusing bugs for power users.
- **Enterprise/plugin needs are emerging:** plugin developers want `system_prompt` control and privacy from the UI.
- **Developer experience signal:** many first-time contributors submitted small, well-scoped fixes, but zero PRs merged in 24h suggests a review bottleneck.

## Backlog Watch

- [#6302 — Unify provider discovery, model metadata, routing, and agent controls](https://github.com/agentscope-ai/QwenPaw/pull/6302)  
  Opened 2026-07-21, still open with no visible maintainer activity. Large architectural PR that could affect roadmap direction.

- [#6940 — Native DataPaw app runtime and durable analysis workspace](https://github.com/agentscope-ai/QwenPaw/pull/6940)  
  Opened 2026-08-12, tagged `ready-for-human-review`, but still awaiting maintainer review. Important for desktop/data-analysis positioning.

These two PRs represent the highest-risk backlog items: both are large, long-lived, and likely need maintainer guidance before they can advance.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-17

## 1. Today’s Overview

ZeroClaw logged another high-volume design and stabilization day: 50 issues were updated (48 open, 2 closed) and 50 PRs were updated (46 open, 4 closed/merged), with no new releases. Activity remains dominated by long-running architectural RFCs — chat-completions compatibility, attachment/session ownership, security posture, and plugin egress — rather than a release push. At the same time, several p1 test and health-reporting bugs are actively being tracked, showing continued investment in CI reliability and operational correctness. The main bottleneck visible in the data is maintainer review: many important RFCs and large PRs are still waiting for maintainer action.

## 2. Releases

No new releases were recorded in the last 24 hours. The latest release data is empty, and the project remains on the 0.8.x track with RFCs targeting future 0.8/0.9 milestones.

## 3. Project Progress

The data window reports 4 PRs closed/merged. The visible closed PRs are:

- [PR #9580 — fix(security): harden built-in HTTP egress on the shared network guard](https://github.com/zeroclaw-labs/zeroclaw/pull/9580) — closed; moves shared network classification into `zeroclaw-infra::net_guard` and hardens the built-in HTTP egress boundary. This is a major security milestone that also supports the plugin egress work.
- [PR #9416 — docs(tools): document that AllToolsResult.tools is the pre-filter registry](https://github.com/zeroclaw-labs/zeroclaw/pull/9416) — closed; clarifies tool registry semantics for plugin/tooling developers.

Other newly active PRs that advanced the project outside the merged set include:

- [PR #10010 — test(cron): avoid ETXTBSY race in custom shell test](https://github.com/zeroclaw-labs/zeroclaw/pull/10010) — direct fix for the ETXTBSY CI failure tracked in #9965.
- [PR #10046 — fix(tools): pin image_gen to the validated host and cover the redirect boundary](https://github.com/zeroclaw-labs/zeroclaw/pull/10046)
- [PR #10003 — fix(providers): account Reliable rejected attempts exactly](https://github.com/zeroclaw-labs/zeroclaw/pull/10003)
- [PR #9584 / #9582 / #9137 — plugin egress grant ceremony, host-owned egress policy, shared egress policy foundation](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) — the three-stage plugin egress security effort remained active.

## 4. Community Hot Topics

The most active discussions continue to be governance-heavy and architecture-heavy issues:

- [#6808 — RFC: Work Lanes, Board Automation, and Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — 23 comments. Ratified governance RFC for routing maintainer work; reflects team-wide process overload.
- [#8603 — RFC: ZeroClaw Chat Completions profile](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) — 22 comments. High demand for OpenAI-compatible API surface to unlock Open WebUI, LobeChat, Continue.dev, Aider, and LangChain integrations.
- [#9488 — RFC: Unified attachment architecture for web chat and channels](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) — 17 comments. Proposes consistent attachment handling across web, channels, and security boundaries.
- [#9487 — RFC: Runtime-owned conversation sessions and transport surface adapters](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) — 17 comments. Companion RFC for session ownership and transport abstraction; part of a ratified ownership cluster.
- [#6954 — RFC: Provenance, conversation binding, and reply contract for internally initiated agent turns](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) — 14 comments. Key for cron/internal-turn correctness.
- [#6971 — RFC: Security posture, credential boundaries, and universal ingress policy](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) — 14 comments. Security observability and operator trust.
- [#6165 — RFC: Prefer a lighter ZeroClaw core through external integrations](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) — 14 comments. Maintainers and users both want less core bloat and clearer integration ownership.
- [#8780 — RFC: Realtime speech-to-speech channel for Gemini Live](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) — 13 comments. Actively rewritten to a broker contract; strong realtime voice signal.

Underlying need: the community is pushing ZeroClaw toward broader ecosystem interoperability (OpenAI-compatible APIs, realtime voice, Teams, Telegram group collaboration), while maintainers are trying to reduce governance overhead and security risk.

## 5. Bugs & Stability

Several p1/p2 reliability and correctness issues were active in the last 24 hours, ranked roughly by severity:

**High / p1**

- [#9811 — /health reports a channel healthy that has never connected](https://github.com/zeroclaw-labs/zeroclaw/issues/9811) — p1, accepted. A Telegram channel with an invalid bot token is reported healthy. This is an operator-trust issue with no visible fix PR yet.
- [#10013 — Edge TTS cancellation test can miss fake child startup under parallel load](https://github.com/zeroclaw-labs/zeroclaw/issues/10013) — p1, accepted. Intermittent CI failure in the Parallel Runtime Test job.
- [#9965 — runtime-written executable test fixtures hit ETXTBSY under the parallel runtime gate](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) — p1, accepted. A fix is already open as [PR #10010](https://github.com/zeroclaw-labs/zeroclaw/pull/10010).
- [#9655 — approval cards carry no position, so back-to-back cards from one message are indistinguishable before tapping](https://github.com/zeroclaw-labs/zeroclaw/issues/9655) — p1, accepted. Telegram approval UX/security bug.

**Medium / p2**

- [#10020 — Agentic independent delegates ignore the target thinking policy](https://github.com/zeroclaw-labs/zeroclaw/issues/10020) — p2, in-progress. Delegate calls don’t respect target agent `thinking` config.
- [#10037 — POST /api/cron silently stores invalid session_target as isolated](https://github.com/zeroclaw-labs/zeroclaw/issues/10037) — p2, in-progress. API accepts invalid `session_target` values and silently downgrades them.

**Closed / resolved in window**

- [#9953 — SOP step schema validation rejects a double-encoded output object instead of unwrapping it](https://github.com/zeroclaw-labs/zeroclaw/issues/9953) — closed; appears resolved.

## 6. Feature Requests & Roadmap Signals

The roadmap is clearly being shaped by large RFCs and accepted trackers:

- **OpenAI-compatible API surface** — [#8603 RFC: Chat Completions profile](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) is one of the most-commented issues and would meaningfully expand client ecosystem support.
- **Unified attachment + runtime-owned sessions** — [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) and [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) form a ratified architectural boundary and are likely near-term implementation targets.
- **Realtime voice** — [#8780 Gemini Live speech-to-speech channel](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) was rewritten to a broker contract on 2026-08-16, suggesting active forward movement.
- **Ephemeral agent swarms** — new [#10025 RFC: zeroclaw swarm — ephemeral agent swarms with a crush-style TUI](https://github.com/zeroclaw-labs/zeroclaw/issues/10025) signals demand for lightweight multi-agent orchestration without config surgery.
- **WASM plugin lifecycle hooks** — [#7822 RFC: WASM plugin lifecycle hook subscriptions](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) remains a strong plugin-ecosystem signal.
- **Accepted backlog features likely to ship in a future 0.8.x/0.9.x** — [#6998 schema-validated memory consolidation](https://github.com/zeroclaw-labs/zeroclaw/issues/6998), [#7881 provider fallback circuit breakers](https://github.com/zeroclaw-labs/zeroclaw/issues/7881), [#7883 intra-family provider fallback notices](https://github.com/zeroclaw-labs/zeroclaw/issues/7883), and [#7887 date-range conditional schedules for cron jobs](https://github.com/zeroclaw-labs/zeroclaw/issues/7887).

Given the ratification momentum, Chat Completions compatibility, attachment/session refactoring, and plugin egress are the most plausible near-term feature bundles.

## 7. User Feedback Summary

Real user pain points visible in the last 24h:

- **Protocol compatibility gap**: users want to bring existing OpenAI-compatible clients to ZeroClaw ([#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)).
- **Telegram group collaboration is hindered**: hardcoded per-sender sessions make shared group workflows awkward. [PR #9772](https://github.com/zeroclaw-labs/zeroclaw/pull/9772) proposes a `per_user_session` toggle.
- **Approval UX is confusing**: multiple tool-call approvals in one Telegram message are indistinguishable before tapping ([#9655](https://github.com/zeroclaw-labs/zeroclaw/issues/9655)).
- **Health reporting undermines trust**: `/health` claiming a never-connected channel is healthy is a serious operational concern ([#9811](https://github.com/zeroclaw-labs/zeroclaw/issues/9811)).
- **Fallback behavior is opaque**: users want visibility into intra-family provider model fallbacks ([#7883](https://github.com/zeroclaw-labs/zeroclaw/issues/7883)).
- **Memory isolation concerns**: cross-agent knowledge graph leakage is being addressed through [PR #9745](https://github.com/zeroclaw-labs/zeroclaw/pull/9745), which adds per-agent attribution and scoping.
- **Core bloat frustration**: maintainers and users continue to push for a lighter core with external integrations ([#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)).

Overall, users are engaged and pushing for production-hardening, broader client compatibility, and more flexible multi-agent/group-collaboration behavior.

## 8. Backlog Watch

Several important items are still waiting for maintainer action:

- [#6165 — RFC: Prefer a lighter ZeroClaw core through external integrations](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) — filed 2026-04-27, needs-maintainer-review.
- [#6954 — RFC: Provenance, conversation binding, and reply contract](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) — filed 2026-05-26, needs-maintainer-review.
- [#6971 — RFC: Security posture, credential boundaries, and universal ingress policy](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) — filed 2026-05-27, needs-maintainer-review.
- [#8603 — RFC: ZeroClaw Chat Completions profile](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) — filed 2026-07-02, needs-maintainer-review, 22 comments.
- [#8780 — RFC: Realtime speech-to-speech channel for Gemini Live](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) — filed 2026-07-06, needs-maintainer-review.
- [#9488 / #9487 — Attachment architecture and runtime-owned sessions](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) — filed 2026-07-28, needs-maintainer-review, 17 comments each.
- [#9137 — PR: add shared egress policy foundation](https://github.com/zeroclaw-labs/zeroclaw/pull/9137) — open since 2026-07-18, needs-maintainer-review.
- [#9772 — PR: Telegram per_user_session toggle](https://github.com/zeroclaw-labs/zeroclaw/pull/9772) — open since 2026-08-05, needs-maintainer-review.

Additionally, the maintainer decision queue tracked in [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) is itself the central coordination point for these decisions, and it continues to grow. The volume of `needs-maintainer-review` and `needs-author-action` items suggests that maintainer bandwidth is currently the limiting factor for ZeroClaw’s roadmap velocity.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*