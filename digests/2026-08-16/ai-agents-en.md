# OpenClaw Ecosystem Digest 2026-08-16

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-15 23:11 UTC

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

# OpenClaw Project Digest — 2026-08-16

## 1. Today's Overview

OpenClaw saw very high activity in the last 24h: **500 issues updated** (480 open, 20 closed) and **500 PRs updated** (448 open, 52 merged/closed), plus one new beta release. The project remains in a heavy stabilization phase — P1 issues span Codex integration, cron reliability, channel-specific message loss (Feishu, Telegram, MS Teams), and gateway performance regressions. The `clawsweeper` triage bot is actively routing work, but a large share of top issues are tagged `needs-product-decision` / `needs-maintainer-review`, indicating a significant maintainer review backlog. Fresh PRs on Aug 15 address Windows cron execution, context-window provenance, gateway readiness decoupling, and MCP response-body caps.

## 2. Releases

**[v2026.8.1-beta.2](https://github.com/openclaw/openclaw/releases)** — OpenClaw 2026.8.1-beta.2

Visible highlights from the release notes:
- **Secret egress host binding** (thanks @shakkernerd): each shared-store secret is now bound to exact HTTPS destination hosts across CLI, Gateway RPC, and Control UI, so unbound sentinel substitution fails closed before plaintext egress — a security hardening change.
- **GPT-5.6 Ultra and runtime switching**: the release notes begin this section but are truncated in the provided data; the change appears to add GPT-5.6 Ultra support and model/runtime switching capabilities.

No explicit breaking changes or migration notes were included in the visible excerpt.

## 3. Project Progress

Merged/closed PRs in the last 24h (visible from the data; 52 total merged/closed):
- [#116489](https://github.com/openclaw/openclaw/pull/116489) — feat(security): require acknowledgement for install-policy warnings (CLI + gateway + agents). Closed.
- [#120900](https://github.com/openclaw/openclaw/pull/120900) — feat(ui): review install-policy warnings in the Control UI. Closed. Together, these land a meaningful security workflow for plugin/skill installs.
- [#124297](https://github.com/openclaw/openclaw/pull/124297) — test(tooling): deduplicate release-timeout evaluators. Closed.
- Issue [#113181](https://github.com/openclaw/openclaw/issues/113181) — cron `delivery.mode="none"` + isolated agent silent no-op — closed as resolved.

Key fixes advanced by open PRs:
- [#124293](https://github.com/openclaw/openclaw/pull/124293) (P1) — fixes Windows cron jobs never running because the durable fence can't read a process identity (closes #124125).
- [#124303](https://github.com/openclaw/openclaw/pull/124303) — track context-window provenance (runtime telemetry vs. prepared/config resolution) across command, auto-reply, and cron paths.
- [#124214](https://github.com/openclaw/openclaw/pull/124214) — Feishu: release the per-chat queue lane at turn adoption so rapid follow-up messages merge instead of replying independently (closes #54409).
- [#123194](https://github.com/openclaw/openclaw/pull/123194) — MCP: cap HTTP/SSE response bodies before SDK parse to prevent gateway event-loop stalls.
- [#124302](https://github.com/openclaw/openclaw/pull/124302) — gateway core readiness made independent of optional channel/plugin/worker sidecars.
- [#117339](https://github.com/openclaw/openclaw/pull/117339) — reject non-binary generated video downloads across Google, xAI, MiniMax, Together, fal, Vydra, OpenRouter, and Comfy providers.
- [#123874](https://github.com/openclaw/openclaw/pull/123874) — Control UI: unify chat side rails into a tabbed panel (closes #123286).

## 4. Community Hot Topics

- [#91009](https://github.com/openclaw/openclaw/issues/91009) — **Codex PreToolUse native hook relay spawns CPU-bound `openclaw-hooks` processes and stalls gateway RPC** (20 comments, P1). The most-discussed issue: bundled Codex integration spawns short-lived hook processes at ~100% CPU each. No fix PR linked yet.
- [#121953](https://github.com/openclaw/openclaw/issues/121953) — **Cron agent turns stall on DeepSeek** (19 comments, P1). The `[cron:<jobId> <name>]` user-message prefix is deprioritized by DeepSeek's API edge, causing tens-of-seconds-to-minutes stalls.
- [#79902](https://github.com/openclaw/openclaw/issues/79902) — **Companion-friendly SQLite transcript/session seams** (13 comments, 2 👍, P3). Community wants canonical runtime state exposed without scraping opaque blobs.
- [#69208](https://github.com/openclaw/openclaw/issues/69208) — **Umbrella: duplicate transcript, replay, and context assembly across channels** (13 comments, P1, maintainer). A cross-channel bug class (MSTeams, webchat, Telegram, followup queue, delivery-mirror).
- [#51429](https://github.com/openclaw/openclaw/issues/51429) — **Hardcoded `/Users/wangtao` work path merged and published** (13 comments, P2). Users outraged that a developer's local path shipped in a release and `openclaw` now mkdirs it.
- [#38327](https://github.com/openclaw/openclaw/issues/38327) — **"Cannot convert undefined or null to object" with google-vertex/gemini-3.1-pro-preview** (13 comments, 3 👍, P1). Regression since 2026.3.2.
- [#41744](https://github.com/openclaw/openclaw/issues/41744) — **Feishu: read-image tool result loses media before final outbound payload** (12 comments, P1, linked PR open).

**Underlying need**: users are demanding reliable CLI/Codex backends, zero silent message/data loss across channels, and transparency around regressions and migrations.

## 5. Bugs & Stability

Ranked by severity (with fix-PR status where known):

**P0**
- [#70903](https://github.com/openclaw/openclaw/issues/70903) — Persistent file-based provider cooldown blocks users for hours after billing recovery (`disabledUntil` extends on repeated failures; stale label applied). No fix PR.

**P1 — regressions / critical**
- [#119087](https://github.com/openclaw/openclaw/issues/119087) — Gateway cold start regressed ~2.5× from 2026.7.1-beta.1 to 2026.7.2-beta.7 on 1-vCPU. Linked PR open.
- [#103231](https://github.com/openclaw/openclaw/issues/103231) — `claude-cli` backend: `ownsNativeCompaction` assumption is false; sessions grow past 200% context and recovery paths fail silently. No fix PR.
- [#94939](https://github.com/openclaw/openclaw/issues/94939) — 6.x migration leaves channel conversation-store SQLite empty (0 bytes), breaking MS Teams proactive sends. Data loss; linked PR open.
- [#92633](https://github.com/openclaw/openclaw/issues/92633) — `memory_search corpus="all"` times out while individual corpora succeed. No fix PR.
- [#43374](https://github.com/openclaw/openclaw/issues/43374) — All LLM API calls time out simultaneously under 4-agent concurrency; not a provider issue. No fix PR.
- [#78493](https://github.com/openclaw/openclaw/issues/78493) — `sudo openclaw update` creates mixed root/user ownership; `doctor` then overwrites config after EACCES. No fix PR.
- [#123073](https://github.com/openclaw/openclaw/issues/123073) — dev-channel update fails with `EUNSUPPORTEDPROTOCOL` on `workspace:*` (updater uses npm, repo requires pnpm). Fix-shape clear; queueable.
- [#123799](https://github.com/openclaw/openclaw/issues/123799) — Production deployments on 2026.5.12 need safe upgrade/backport guidance for the Codex compact 404 (filed Aug 14, 7 comments).
- [#91009](https://github.com/openclaw/openclaw/issues/91009) and [#121953](https://github.com/openclaw/openclaw/issues/121953) — see Hot Topics above; both remain without linked fix PRs.
- Additional P1s without linked PRs: [#86214](https://github.com/openclaw/openclaw/issues/86214) (Codex app-server closes mid-turn), [#84662](https://github.com/openclaw/openclaw/issues/84662) (Codex runtime context growth), [#55694](https://github.com/openclaw/openclaw/issues/55694) (agent tool-failure retry spam in Feishu), [#118793](https://github.com/openclaw/openclaw/issues/118793) (Claude CLI session limit dies instead of failing over; linked PR open), [#79293](https://github.com/openclaw/openclaw/issues/79293) (Weixin proactive sends lie about success), [#49381](https://github.com/openclaw/openclaw/issues/49381) (Feishu duplicate replies after failover), [#56653](https://github.com/openclaw/openclaw/issues/56653) (Slack reactions never delivered via Socket Mode).

**Fix PRs that do exist**
- [#124293](https://github.com/openclaw/openclaw/pull/124293) — Windows cron never runs (P1).
- [#120056](https://github.com/openclaw/openclaw/pull/120056) — cron `NO_REPLY` no longer misclassified as `status: ok` on tool failure.
- [#120589](https://github.com/openclaw/openclaw/pull/120589) — backfill tool args when provider skips `input_json_delta` (#120306).
- [#120248](https://github.com/openclaw/openclaw/pull/120248) — amazon-bedrock O(n²) tool-call arg re-parsing on large streamed payloads.
- [#122862](https://github.com/openclaw/openclaw/pull/122862) — Matrix exact room session routes.

**Stability assessment**: the volume of merged/closed work (52 PRs) shows rapid iteration, but the number of P1 issues without linked PRs suggests the maintainer review queue is the bottleneck.

## 6. Feature Requests & Roadmap Signals

Strongest signals (by engagement and product fit):
- [#10687](https://github.com/openclaw/openclaw/issues/10687) — **Fully dynamic model discovery (OpenRouter + beyond)** (10 comments, 3 👍). Static model catalogs don't fit fast-moving providers; a natural fit with the GPT-5.6 Ultra/runtime-switching theme in the new beta.
- [#79902](https://github.com/openclaw/openclaw/issues/79902) — **SQLite transcript/session seams** on the database-first runtime (13 comments, 2 👍).
- [#13219](https://github.com/openclaw/openclaw/issues/13219) — **Per-model usage logging for cost tracking** (8 comments, 1 👍); likely next-version candidate.
- [#6599](https://github.com/openclaw/openclaw/issues/6599) — **`/models test-fallback` command** to verify fallback chains without waiting for real failures (12 comments).
- [#45758](https://github.com/openclaw/openclaw/issues/45758) — **YAML config support** alongside JSON5 (9 comments, 2 👍).
- [#66252](https://github.com/openclaw/openclaw/issues/66252) — **Per-agent TTS/STT overrides** for multi-language setups (8 comments).
- [#45771](https://github.com/openclaw/openclaw/issues/45771) — **Pace-aware rate limiting** for autonomous agents (7 comments, 2 👍).
- [#63930](https://github.com/openclaw/openclaw/issues/63930) — **Anthropic advisor tool** (beta server-side tool) plus generic `server_tool_use` handling (6 comments).
- [#39343](https://github.com/openclaw/openclaw/issues/39343) — **Image batching / media-group buffering** at the gateway (6 comments).
- [#6625](https://github.com/openclaw/openclaw/issues/6625) — **Graceful sub-agent timeout** with pre-timeout warning to save work (7 comments).

**Prediction**: dynamic model discovery and per-model usage logging are the most likely roadmap additions given the release's runtime-switching direction; `/models test-fallback` and YAML config are smaller, shippable candidates.

## 7. User Feedback Summary

- **Production pain**: a family/business deployment running Telegram, automations, cron, and Home Assistant asks for a production-readiness stability label ([#73537](https://github.com/openclaw/openclaw/issues/73537), 2 👍: "thank you for OpenClaw… it has genuinely become part of our daily workflow"). Production users on 2026.5.12 are explicitly requesting upgrade/backport guidance ([#123799](https://github.com/openclaw/openclaw/issues/123799)).
- **Chinese-speaking users**: strong dissatisfaction over the hardcoded `/Users/wangtao` path being merged ([#51429](https://github.com/openclaw/openclaw/issues/51429)) and Feishu agents spamming duplicate messages in tool-failure retry loops ([#55694](https://github.com/openclaw/openclaw/issues/55694)).
- **Upgrade/migration frustration**: silent JSON→SQLite cron-store migration changing delivery defaults ([#90378](https://github.com/openclaw/openclaw/issues/90378)), empty conversation-store SQLite after 6.x migration ([#94939](https://github.com/openclaw/openclaw/issues/94939)), and plugin/core version drift silently breaking channels ([#83337](https://github.com/openclaw/openclaw/issues/83337)).
- **Performance complaints**: 10–15s synchronous auth stage on every embedded run ([#75782](https://github.com/openclaw/openclaw/issues/75782)), 2.5× gateway cold-start regression ([#119087](https://github.com/openclaw/openclaw/issues/119087)), and simultaneous all-LLM timeouts under concurrency ([#43374](https://github.com/openclaw/openclaw/issues/43374)).
- **UX friction**: Discord channel regression in 2026.5.4 ([#77930](https://github.com/openclaw/openclaw/issues/77930)), Telegram stickers arriving as unusable raw file refs ([#120735](https://github.com/openclaw/openclaw/issues/120735)), and duplicated Telegram progress commentary ([#116512](https://github.com/openclaw/openclaw/issues/116512)).
- **Positive signals**: the security direction (secret egress host binding, install-policy acknowledgements) addresses real trust concerns; users with working deployments express genuine appreciation.

## 8. Backlog Watch

Issues needing maintainer attention (long-unanswered or high-impact):
- [#70903](https://github.com/openclaw/openclaw/issues/70903) — **P0, stale**: provider cooldown blocks users for hours after billing recovery. Oldest P0 still open.
- [#38327](https://github.com/openclaw/openclaw/issues/38327) — **P1 regression from 2026-03-06** ("Cannot convert undefined or null to object" with Vertex/Gemini), 3 👍, still unaddressed.
- [#69208](https://github.com/openclaw/openclaw/issues/69208) — **P1 umbrella** for duplicate transcript/replay/context bugs across channels; 13 comments, needs product decision.
- [#10687](https://github.com/openclaw/openclaw/issues/10687) — dynamic model discovery, 10 comments, awaiting maintainer review.
- [#51429](https://github.com/openclaw/openclaw/issues/51429) — hardcoded work path; community-visible and embarrassing; needs a fix and public communication.
- A large cluster of top issues carries `clawsweeper:needs-product-decision` and `needs-maintainer-review` labels (e.g., [#91009](https://github.com/openclaw/openclaw/issues/91009), [#121953](https://github.com/openclaw/openclaw/issues/121953), [#103231](https://github.com/openclaw/openclaw/issues/103231), [#92633](https://github.com/openclaw/openclaw/issues/92633)) — clear evidence that decision latency, not issue discovery, is the current bottleneck for project health.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-08-16 | **Coverage:** 12 projects, last 24h activity

---

## 1. Ecosystem Overview

The personal AI assistant open-source landscape remains highly active but is entering a **stabilization-over-feature** phase: the largest projects (OpenClaw, Hermes, ZeroClaw) are investing heavily in reliability, security hardening, and architectural refactoring rather than net-new capabilities. A second tier of projects (IronClaw, NanoBot, Moltis, CoPaw) is shipping targeted fixes and integration features with high per-PR velocity. Across all projects, the dominant recurring themes are **cron/background-task reliability**, **silent message/data loss**, **session & memory integrity**, and **provider/model interoperability**. Community health is generally strong — contributor influx is robust (notably in CoPaw and ZeroClaw) — but **maintainer review latency is now the primary bottleneck** in at least four major projects.

---

## 2. Activity Comparison

*Health score = analyst composite of closure rates, PR throughput, release cadence, and backlog pressure (1–10).*

| Project | Issues updated (closed) | PRs updated (merged/closed) | Release status | Health score | Notes |
|---|---|---|---|---|---|
| **OpenClaw** | 500 (20) | 500 (52) | ✅ v2026.8.1-beta.2 | 6.5 / 10 | Highest raw volume; 4% issue closure and large `needs-maintainer-review` backlog indicate triage bottleneck |
| **IronClaw** | 27 (21) | 13 (6) | ❌ None | 9.0 / 10 | Best-in-class closure rates (78% issues, 46% PRs); performance epic completed |
| **ZeroClaw** | 50 (4) | 50 (6) | ❌ None | 7.0 / 10 | High activity + merged Anthropic refusal stack; RFC decision queue growing |
| **Hermes Agent** | 50 (8) | 50 (3) | ❌ None | 6.5 / 10 | Responsive triage but low PR merge rate; Desktop/Windows regressions accumulate |
| **NanoBot** | 2 (1) | 16 (7) | ❌ None | 8.5 / 10 | 44% PR merge rate; fast fix turnaround on data-integrity issues |
| **NanoClaw** | 0 (0) | 22 (3) | ❌ None | 7.5 / 10 | Feature-building phase with structured roadmap labels; no issue backlog |
| **Moltis** | 0 (0) | 6 (3) | ❌ None | 8.0 / 10 | 50% merge rate; maintainer-driven, no open issues |
| **CoPaw** | 10 (1) | 11 (0) | ❌ None | 6.0 / 10 | 7 first-time-contributor PRs but 0% merged today — review queue is the constraint |
| **LobsterAI** | 18 (16)* | 6 (2) | ❌ None | 5.5 / 10 | *Mostly stale-label cleanups; two real fixes; 4 dependabot PRs stale since June |
| **PicoClaw** | 0 (0) | 2 (0) | ❌ None | 4.5 / 10 | Stable but quiet; two stale PRs (WhatsApp outage fix, prefix caching) unmerged |
| **NullClaw** | 1 (0) | 1 (0) | ❌ None | 5.0 / 10 | Minimal activity; one solid agent-loop hygiene PR awaiting review |
| **ZeptoClaw** | 0 (0) | 0 (0) | ❌ None | 2.0 / 10 | No observed activity in window |

---

## 3. OpenClaw's Position

**Advantages over peers:**
- **Clearly the reference implementation and largest community.** At 500 issues / 500 PRs touched daily, its volume exceeds the next three busiest projects (ZeroClaw, Hermes) by 10×. No other project approaches this contributor base or bug-report surface.
- **Broadest channel matrix.** Feishu, Telegram, MS Teams, WeChat/Weixin, Slack, Discord, Matrix, webchat — most peers cover 1–3 channels; OpenClaw's per-channel regressions (Feishu, Telegram, Teams) reflect a unique integration surface.
- **Most mature security posture.** Secret egress host binding, install-policy acknowledgement workflows (CLI + Gateway + Control UI) are ahead of peers, many of whom are only now discussing credential boundaries (ZeroClaw #6971, Hermes #83565).
- **Active release train.** Beta releases are shipping while most peers have no release in-window — a sign of continuous delivery discipline.
- **Tooling investment.** The `clawsweeper` triage bot shows automation in the review pipeline; no other project reports equivalent tooling.

**Technical approach differences:**
- Gateway-centric monorepo with three surfaces (CLI, Gateway RPC, Control UI) and a shared-store secret subsystem — architecturally closest to ZeroClaw's RFC vision, but already implemented.
- Durable-fence cron with per-job delivery modes, and channel-specific queue lanes (e.g., Feishu turn adoption) — a level of channel-state engineering peers (NanoBot, Hermes) haven't reached.

**Community size comparison:**

| Project | Daily issue/PR volume | Community posture |
|---|---|---|
| OpenClaw | 1,000 combined | Massive, demanding, partially frustrated by review latency |
| ZeroClaw / Hermes | 100 combined each | Large, RFC-driven / engaged but Desktop-fragile |
| IronClaw | 40 combined | Small, high-signal, reviewer-heavy culture |
| NanoBot / CoPaw / Moltis | 10–25 combined | Emerging, contributor-friendly |

**Key weakness:** the maintainer queue. OpenClaw's top P1s (Codex hook CPU stalls, DeepSeek cron stalls, gateway cold start) lack linked fix PRs despite heavy discussion — its decision latency is the ecosystem's most visible constraint.

---

## 4. Shared Technical Focus Areas

Requirements emerging across **multiple projects** simultaneously:

| Theme | Projects (evidence) | Specific needs |
|---|---|---|
| **Cron / scheduled-task reliability** | OpenClaw, NanoBot, Hermes, ZeroClaw, CoPaw, IronClaw | Windows cron never runs (OpenClaw); scheduler dies on single persistence error (NanoBot); cron jobs hang holding SQLite locks (ZeroClaw); `cron update --text` silent no-op (CoPaw); false-positive lifecycle guards (Hermes); stale-heartbeat misclassification (IronClaw) |
| **Session / memory / transcript integrity** | NanoBot, Hermes, OpenClaw, ZeroClaw, LobsterAI | Consolidation truncating history (NanoBot); stale background saves overwriting sessions (NanoBot); duplicate transcript/replay umbrella (OpenClaw); runtime-owned sessions RFC (ZeroClaw); subagent transcript persistence (Hermes, NanoBot); agent memory system proposal (LobsterAI) |
| **Silent failure elimination** | CoPaw, NanoBot, OpenClaw, IronClaw | Video frames silently dropped (CoPaw); consolidation advancing past truncated messages (NanoBot); channel message loss (OpenClaw); IronHub search fabricating catalog results (IronClaw) |
| **Provider/model interoperability** | ZeroClaw, OpenClaw, NanoBot, Moltis, NullClaw, IronClaw | OpenAI-compatible API for third-party clients (ZeroClaw); dynamic model discovery (OpenClaw); named gateway providers (NanoBot); OpenAI reasoning via Responses API (Moltis); proxy support (NullClaw); typed ToolChoice (IronClaw) |
| **Security hardening at trust boundaries** | OpenClaw, Hermes, LobsterAI, ZeroClaw, NanoBot, CoPaw | Secret egress binding (OpenClaw); dangerous-command approval bypass (Hermes); IMAP path traversal (LobsterAI); webhook credential scrubbing (ZeroClaw); stale plugin skill roots (NanoBot); OAuth refresh-token rotation (CoPaw) |
| **Desktop / installer / update reliability** | Hermes, LobsterAI, ZeroClaw, OpenClaw | Windows updater self-lock & interrupted installs (Hermes); macOS blank window (ZeroClaw); desktop runtime "connection lost" (LobsterAI); dev-channel update protocol error (OpenClaw) |
| **Per-agent isolation & multi-tenancy** | ZeroClaw, NanoClaw, CoPaw, OpenClaw | Per-agent memory/knowledge-graph scoping (ZeroClaw); Matrix per-sender session isolation (CoPaw); cross-session context fan-out (NanoClaw); companion-friendly SQLite seams (OpenClaw) |
| **Write-amplification / performance at scale** | IronClaw, OpenClaw, NanoClaw, CoPaw | Heartbeat journal churn elimination (IronClaw); 2.5× gateway cold-start regression (OpenClaw); heartbeat stalls under rate-limiting (NanoClaw); WebUI virtual scrolling (CoPaw) |

**Takeaway:** reliability engineering — not new features — is the shared industry battleground. The highest-value contribution an AI agent developer can make right now is in **observability of silent failures** and **state lifecycle correctness**, not model integration.

---

## 5. Differentiation Analysis

| Project | Target users | Feature focus | Architecture |
|---|---|---|---|
| **OpenClaw** | Power users, self-hosters, families | Breadth: channels, cron, plugins, security governance | Gateway-centric monorepo, Control UI + CLI + RPC, channel adapters |
| **IronClaw** | Production AI infra teams | Performance, kernel sandboxing, design-to-implementation traceability | Rust/WASM core, prepared-context turns, unbound-turns lane |
| **ZeroClaw** | Platform builders, enterprise | Protocol compatibility, multi-tenancy, RFC-driven architecture | OpenAI-compatible ambition, runtime-owned sessions, per-agent scoping |
| **Hermes Agent** | Desktop-centric developers | Desktop app (Electron), TUI, Discord parity, campaign-based refactors | Python agent + Electron shell, god-file sharding policy |
| **NanoBot** | Web-first individual users | WebUI collaboration (mentions, side chats, drag-and-drop), provider gateways | WebUI-forward, session collaboration, model-preset unification |
| **Moltis** | Team productivity | Slack-native interaction, remote sandboxes (Coder), durable external connectors | Connector-based integration, Slack task cards |
| **CoPaw** | Bilingual (EN/ZH) data/analysis users | DataPaw runtime, video/media tool-results, per-cron model pickers | Fork lineage from QwenPaw; silent-failure-prone but fast contributor growth |
| **LobsterAI** | Chinese-speaking consumers | WeChat/IM integration, paid NetEase models, UI polish | Desktop app + OpenClaw-derived runtime ("OpenClawConfigSync") |
| **NanoClaw** | Embedders/hackers | Extensibility hooks, adapter capabilities, cross-session context | Renaming to DotClaw; Telegram/Telegraf pivot; A1–A4 roadmap labels |
| **NullClaw** | Performance-focused local users | Prompt-cache-friendly ordering, tool-output compression, loop detection | Zig-based tool compression, efficient local runs |
| **PicoClaw** | Low-resource / hardware-adjacent | Maintenance only: WhatsApp bridge, prefix caching | Minimal footprint, stale-but-stable |
| **ZeptoClaw** | — | Dormant | — |

Notable architectural forks: **LobsterAI** is visibly derived from OpenClaw's runtime (references `OpenClawConfigSync`, `memory-core` schema, upstream OpenClaw issues) — an important consolidation signal. **CoPaw** similarly shares the OpenClaw lineage name (CoPaw/QwenPaw) while diverging on DataPaw and console WebUI.

---

## 6. Community Momentum & Maturity

**Tier 1 — High-volume, stabilizing (volume high, decision-latency constrained):**
- **OpenClaw**: massive contribution surface; velocity held back by maintainer review queue; shipping betas.
- **ZeroClaw**: high-quality RFC culture; executing well (Anthropic fallback stack merged) but `needs-maintainer-review` queue is the stated bottleneck (tracker #8692 is itself a hot topic).
- **Hermes Agent**: responsive triage; god-file sharding epic complete (20/20); Desktop/Windows fragility is the persistent drag.

**Tier 2 — Rapidly iterating, healthy throughput:**
- **IronClaw**: the healthiest closure metrics in the ecosystem (78% issues, 46% PRs). Small but rigorous reviewer culture; performance epic closed; review-driven follow-up issues show quality investment.
- **NanoBot**: fast fix turnaround on data-integrity issues; 44% PR merge rate; active WebUI feature pipeline.
- **Moltis**: maintainer-driven, 50% merge rate, zero issue backlog.
- **NanoClaw**: strong contributor breadth (8+ named contributors); feature-building phase with no bug backlog.

**Tier 3 — Contributor influx but review-limited:**
- **CoPaw**: 7 first-time-contributor PRs in one window is a leading indicator, but 0/11 merged and several stale PRs (some since July) mean the project could lose that momentum without maintainer bandwidth.

**Tier 4 — Maintenance / low activity:**
- **LobsterAI**: triage-sweeping rather than shipping; stale dependabot PRs since June; high-impact user bugs closed without visible fix links.
- **PicoClaw / NullClaw**: quiet; single-PR queues; low engagement.
- **ZeptoClaw**: dormant.

---

## 7. Trend Signals

**1. Reliability of autonomous execution is the industry's #1 pain point.** Cron, background tasks, and long-running agent turns fail across six projects in distinct ways (locks, heartbeats, persistence, delivery semantics). Value for developers: treat scheduled/autonomous execution as a first-class distributed-systems problem — wall-clock bounds, durable leases, and failure visibility are table stakes.

**2. Silent failures are the most trust-eroding bug class — and they are everywhere.** CoPaw's three worst open bugs are all silent (video frames dropped, cron no-op, images lost after reload); NanoBot's consolidation truncates but advances; OpenClaw's channel umbrella tracks message loss; IronClaw found an agent-truthfulness bug where search results were fabricated. Value: instrument every data path with explicit "delivered/not delivered" outcomes; users consistently tolerate errors far more than silence.

**3. Memory/session architecture is converging on runtime-owned, per-agent state.** ZeroClaw's RFCs (#9487/#9488/#9103), OpenClaw's SQLite-seams request (#79902), NanoBot's session/consolidation fixes, and LobsterAI's memory proposal all point to the same conclusion: conversations and memory must be owned by the runtime, not the channel or the client. Value: designing for cross-session, cross-channel memory now will save a migration later.

**4. Protocol interoperability is becoming a competitive moat.** ZeroClaw's Chat Completions RFC (#8603, 20 comments) is the single most-discussed issue in any project — users explicitly want OpenAI-protocol access so existing tools (Open WebUI, LobeChat, Aider, LangChain) can drive agents. OpenClaw's dynamic model discovery, NanoBot's gateway providers, and Moltis's OpenAI Responses routing reinforce: the agent is becoming a backend, not an app.

**5. Provider resilience is moving up the stack.** Fallback chains are no longer enough — ZeroClaw merged an end-to-end Anthropic refusal/fallback stack (typed errors → client-side fallback → server-side fallback → user-visible notices) across five PRs. OpenClaw is shipping runtime model switching. Value: model-agnostic reliability layers (typed refusal detection, fallback routing, cost-aware selection) are a differentiation opportunity.

**6. Security hardening is shifting from transport to trust boundaries.** The ecosystem's security work is about *what the agent can be tricked into doing*: approval-gate bypasses via wrapper commands (Hermes), path traversal in skills (LobsterAI), credential leakage in audit exports (ZeroClaw), secret egress binding (OpenClaw), stale plugin roots (NanoBot), OAuth token rotation (CoPaw). Value: agents are the new attack surface; developers who build auditable approval flows and credential hygiene will lead.

**7. Regional platform coverage is a real demand signal.** Feishu (OpenClaw), WeChat/Weixin (OpenClaw, LobsterAI), MAX messenger (Hermes), DashScope/Bailian (NanoBot, LobsterAI), Matrix E2EE (CoPaw) — non-Western platforms are repeatedly requested. Value: multi-lingual, multi-platform adapter support is an under-served niche with clear demand.

**8. Maintainer review bandwidth — not code supply — is the ecosystem's gating constraint.** OpenClaw, ZeroClaw, CoPaw, and Hermes all show fix-PRs waiting on `needs-maintainer-review` or `needs-author-action` while P1s go unfixed. IronClaw demonstrates the counter-model (small team, high closure rate via structured review). Value: contributor tooling (automated triage, CI-based pre-review, decision trackers) is at least as important as feature work for project health.

---

*Report generated from community digest data dated 2026-08-15/16. Health scores are analyst judgments based on closure rates, PR throughput, release cadence, and backlog pressure as reported in each project's digest.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-16

## 1. Today's Overview

NanoBot saw active development over the last 24 hours, with 16 PRs updated, 7 PRs closed or merged, and 2 issues updated (1 open, 1 closed). No new releases were published in this window. Work was concentrated on WebUI interaction fixes, session/memory integrity, provider additions, and backend stability. The project remains healthy and fast-moving, with several high-priority stability and data-loss fixes either landed or actively under review.

---

## 2. Releases

**No new releases in this window.**

---

## 3. Project Progress

Seven PRs were closed or merged in the last 24 hours, advancing WebUI polish, provider support, security, and backend reliability:

- [#5328 feat(providers): add OrcaRouter as a named gateway provider](https://github.com/HKUDS/nanobot/pull/5328) — Added OrcaRouter, an OpenAI-compatible model routing gateway with 150+ models from multiple vendors.
- [#5371 fix(webui): hide assistant actions until turn end](https://github.com/HKUDS/nanobot/pull/5371) — Fixed the copy/fork actions appearing before an Agent turn has finished.
- [#5369 fix(plugins): revalidate cached skill roots after package changes](https://github.com/HKUDS/nanobot/pull/5369) — Security/regression fix for plugin skill directories remaining readable after package replacement.
- [#5370 fix(agent): bound per-session file state lifecycle](https://github.com/HKUDS/nanobot/pull/5370) — Prevented unbounded `FileStates` retention for high-cardinality, temporary, or API sessions.
- [#5376 fix(cron): keep scheduler alive when job-store persistence fails](https://github.com/HKUDS/nanobot/pull/5376) — Fixed a single persistence error killing the entire cron scheduler.
- [#5399 fix(webui): clarify model preset display names](https://github.com/HKUDS/nanobot/pull/5399) — Separated preset display labels from stable `/model` command names and localized the clarification.
- [#5397 fix(webui): preserve range selection and turn timing](https://github.com/HKUDS/nanobot/pull/5397) — Added macOS-style Shift range selection and preserved turn identity during guidance and resumed runs.

---

## 4. Community Hot Topics

The most active item by engagement is:

- [#5377 Bug: consolidation truncates archive input but advances past the full message batch](https://github.com/HKUDS/nanobot/issues/5377) — **2 comments**, 0 reactions.

This issue is the clearest current user concern: consolidation truncates input to the model token budget, but the session pointer advances past the entire batch, which can cause message history loss. A fix PR already exists:

- [#5379 fix(memory): preserve full consolidation input](https://github.com/HKUDS/nanobot/pull/5379)

The underlying need is **lossless memory consolidation**, especially for large or Unicode-heavy conversations. This is a correctness issue directly affecting user trust in persisted conversation history.

---

## 5. Bugs & Stability

Ranked by severity:

### High
- [#5271 [p0] fix(session): prevent stale background task saves from overwriting session data](https://github.com/HKUDS/nanobot/pull/5271) — Open PR with `priority: p0` and `conflict` labels. Prevents stale background work from overwriting a session after `/new` or lifecycle replacement. This is the most severe open stability issue.
- [#5377 Bug: consolidation truncates archive input but advances past the full message batch](https://github.com/HKUDS/nanobot/issues/5377) — Open bug with a fix PR available ([#5379](https://github.com/HKUDS/nanobot/pull/5379)). Risk of silent conversation-history loss.

### Medium
- [#5376 fix(cron): keep scheduler alive when job-store persistence fails](https://github.com/HKUDS/nanobot/pull/5376) — Closed. Fixed a silent failure where a single disk/permission error permanently killed cron scheduling.
- [#5370 fix(agent): bound per-session file state lifecycle](https://github.com/HKUDS/nanobot/pull/5370) — Closed. Fixed unbounded memory growth in `FileStateStore`.
- [#5369 fix(plugins): revalidate cached skill roots after package changes](https://github.com/HKUDS/nanobot/pull/5369) — Closed. Security/regression fix for stale cached plugin skill directories.

### Low / UX
- [#5368 WebUI: hide copy and fork actions while an Agent turn is still running](https://github.com/HKUDS/nanobot/issues/5368) — Closed issue; fixed by [#5371](https://github.com/HKUDS/nanobot/pull/5371).
- [#5401 fix(webui): make mutations reconnect-safe](https://github.com/HKUDS/nanobot/pull/5401) — Open. Prevents duplicated mutations after reconnects and rejects reused request IDs.

---

## 6. Feature Requests & Roadmap Signals

Notable feature work in progress:

- [#5358 feat(webui): add session collaboration via mentions](https://github.com/HKUDS/nanobot/pull/5358) — Gives WebUI sessions stable `@name` identities and lets users mention peer sessions.
- [#5364 feat(webui): add temporary side conversations](https://github.com/HKUDS/nanobot/pull/5364) — Adds `/side` for transient, parallel side conversations beside the main topic.
- [#5389 feat(webui): add drag-and-drop session organization](https://github.com/HKUDS/nanobot/pull/5389) — Supports reordering sessions and creating groups through drag-and-drop.
- [#5398 feat(providers): add DashScope (Bailian) native protocol support](https://github.com/HKUDS/nanobot/pull/5398) — New native provider exposing advanced parameter surface not available in compatible mode.
- [#5400 refactor(models): unify preset names](https://github.com/HKUDS/nanobot/pull/5400) — Makes preset keys canonical across config, WebUI, sessions, and runtime snapshots.

The merged OrcaRouter provider ([#5328](https://github.com/HKUDS/nanobot/pull/5328)) suggests continuing momentum on multi-provider gateway support. The next release may also include the model-preset naming work (#5399/#5400) and reconnect-safe mutation handling (#5401), while larger features like side conversations (#5364) and drag-and-drop (#5389) still need conflict resolution.

---

## 7. User Feedback Summary

Real user pain points visible in this window:

- **Conversation history loss risk**: #5377 highlights that consolidation can advance past messages that were effectively truncated, causing silent data loss.
- **Confusing WebUI running states**: #5368 reports copy/fork actions appearing while a turn is still generating, making completion state ambiguous.
- **Session overwrites**: #5271 addresses user-visible session data being clobbered by stale background tasks after `/new`.
- **Missing subagent transcripts**: #5291 requests persistence of subagent conversation transcripts, with tool calls and reasoning steps currently lost after process completion.
- **Cron scheduler silently dying**: #5376 responds to users hitting a single persistence error and then losing scheduling entirely.
- **Preset naming confusion**: #5399 fixed the confusing case where renaming a preset display label changed its command identity.

Overall, users are engaged with advanced WebUI organization and collaboration features, while also surfacing real data-integrity and lifecycle bugs. The maintainers are responding quickly with targeted fixes.

---

## 8. Backlog Watch

PRs and issues that have been open for some time and may need maintainer attention:

- [#5271 fix(session): prevent stale background task saves from overwriting session data](https://github.com/HKUDS/nanobot/pull/5271) — `p0` severity, open since 2026-08-06, currently marked with `conflict`. Should be prioritized.
- [#5291 fix(agent): persist subagent conversation transcripts](https://github.com/HKUDS/nanobot/pull/5291) — Open since 2026-08-07. Important for debuggability and auditability of subagent runs.
- [#5358 feat(webui): add session collaboration via mentions](https://github.com/HKUDS/nanobot/pull/5358) — Open since 2026-08-12. A substantial feature, but no visible merge or maintainer discussion in this window.
- [#5364 feat(webui): add temporary side conversations](https://github.com/HKUDS/nanobot/pull/5364) — Open since 2026-08-13 with `conflict` label.
- [#5389 feat(webui): add drag-and-drop session organization](https://github.com/HKUDS/nanobot/pull/5389) — Open since 2026-08-14 with `conflict` label; may require design alignment with the newer pane-based session layout.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-16

## Today's Overview

Activity remained high over the last 24 hours: 50 issues and 50 PRs were updated, with 8 issues closed and 3 PRs closed. No new release was published. The project is in a stabilization and refactoring-heavy phase: the largest closed item, #78647, marks the repo-wide god-file sharding effort complete (20/20), while many newly filed P2 bugs target Desktop lifecycle, Windows updater reliability, slow local-model timeouts, and session-state consistency. Several meta-issues/trackers (#79564, #82591, #83565) show intentional campaign-style coordination. Overall health is responsive, but the volume of Desktop/Windows regressions suggests those areas remain the most fragile.

## Releases

No new releases were published in this window.

## Project Progress

Three PRs were closed in the last 24 hours:

- [PR #87139 — fix(cron): respect explicit Slack channel targets](https://github.com/NousResearch/hermes-agent/pull/87139)  
  Stops explicit `slack:CHANNEL_ID` cron destinations from incorrectly inheriting the creating thread. Includes regression coverage.

- [PR #66512 — feat: capture model responses next to request dumps (HERMES_DUMP_REQUESTS)](https://github.com/NousResearch/hermes-agent/pull/66512)  
  Adds response capture alongside existing request dumps for debugging workflows. Closes #66530.

- [PR #13746 — fix: stabilize local Hermes UX and provider selection](https://github.com/NousResearch/hermes-agent/pull/13746)  
  Trims Telegram DM session prompt overhead, stabilizes NVIDIA curated catalog selection/fallback, and fixes TUI status-bar wrap ghosting.

Also notable: [Issue #78647 — Large-file decomposition: 20/20 done](https://github.com/NousResearch/hermes-agent/issues/78647) was closed as complete. The stated standing policy is now: **all god files are sharded, never reverted.** Related refactor slices like [#77719](https://github.com/NousResearch/hermes-agent/pull/77719) and [#77723](https://github.com/NousResearch/hermes-agent/pull/77723) remain open.

## Community Hot Topics

Issues dominate the engagement list by comment count:

- [#78647 — Large-file decomposition: 20/20 done](https://github.com/NousResearch/hermes-agent/issues/78647) — 78 comments  
  The god-file sharding epic. High maintainer/contributor alignment around architecture policy.

- [#66616 — Skills index is stale or degraded](https://github.com/NousResearch/hermes-agent/issues/66616) — 36 comments  
  Automated freshness probe failing; docs/skills index is 29.8h old against a 26h limit. Underlying need: reliable docs automation and site regeneration.

- [#4178 — python-olm build fail](https://github.com/NousResearch/hermes-agent/issues/4178) — 11 comments, 👍2  
  Update-time build error that does not appear to impact runtime behavior, but creates upgrade noise.

- [#51327 — Hermes Desktop silently fails from .desktop launcher](https://github.com/NousResearch/hermes-agent/issues/51327) — 9 comments  
  P1 Linux packaging issue: Electron `chrome-sandbox` lacks setuid 4755, causing silent launch failure.

- [#83569 — Windows: hermes update self-locks cryptography._rust.pyd](https://github.com/NousResearch/hermes-agent/issues/83569) — 7 comments  
  P1 Windows updater bug: the updater process imports `cryptography` and blocks replacement of its own `.pyd`. Closed in-window.

- [#69107 — prompt.submit truncate_before_user_ordinal rejects valid ordinals](https://github.com/NousResearch/hermes-agent/issues/69107) — 7 comments  
  Stale in-memory history when another client writes to the same session. Underlying need: multi-client session consistency.

- [#79564 — Discord Feature Parity & Alignment Campaign (API v10)](https://github.com/NousResearch/hermes-agent/issues/79564) — 6 comments  
  Meta-issue for bringing Discord surface to full parity with discord.py 2.7.1.

- [#82591 — Kanban zero-authority workers / large-file eradication tracker](https://github.com/NousResearch/hermes-agent/issues/82591) — 5 comments  
  Roadmap planning for Kanban worker safety and durable publication.

- [#50159 — Desktop stays stuck on stale "Thinking" state](https://github.com/NousResearch/hermes-agent/issues/50159) — 5 comments, 👍1  
  Desktop UI state desync after turn completion.

## Bugs & Stability

Bug inflow remains high. Newly reported/active issues, ranked by severity:

### P1

- [#51327 — Desktop silently fails from .desktop launcher when chrome-sandbox lacks setuid 4755](https://github.com/NousResearch/hermes-agent/issues/51327)  
  Linux Desktop app aborts with no window/error. No fix PR visible in snapshot.

- [#83569 — Windows updater self-locks cryptography._rust.pyd](https://github.com/NousResearch/hermes-agent/issues/83569)  
  Closed, but highlights a serious Windows update-class failure.

### P2 — Desktop lifecycle & session state

- [#87295 — Second Desktop launch silently kills running app's backend](https://github.com/NousResearch/hermes-agent/issues/87295) — **fix PR exists:** [#87314](https://github.com/NousResearch/hermes-agent/pull/87314)
- [#87200 — Desktop: subagent timeout leaves "computing…" indicator stuck until restart](https://github.com/NousResearch/hermes-agent/issues/87200) — needs-repro
- [#50159 — Desktop stays stuck on stale "Thinking" state after turn completes](https://github.com/NousResearch/hermes-agent/issues/50159)
- [#85868 — macOS live self-update leaves stale renderer / blank reload](https://github.com/NousResearch/hermes-agent/issues/85868)
- [#73890 — Desktop Artifacts/Preview leak context across Projects](https://github.com/NousResearch/hermes-agent/issues/73890) — P3

### P2 — Update/install reliability

- [#75584 — Windows update fails after interrupted install: hermes.exe missing + node_modules ENOTEMPTY](https://github.com/NousResearch/hermes-agent/issues/75584)
- [#87268 — install.sh --commit with abbreviated SHA silently installs unpinned main and exits 0](https://github.com/NousResearch/hermes-agent/issues/87268)

### P2 — Agent/runtime correctness

- [#87292 — Timeout with slow local models](https://github.com/NousResearch/hermes-agent/issues/87292) — **fix PR exists:** [#87310](https://github.com/NousResearch/hermes-agent/pull/87310)
- [#87309 — delegate_task hangs ~600s when target CLI rejects --acp](https://github.com/NousResearch/hermes-agent/issues/87309)
- [#84371 — Compaction dead-loop: preflight charges reasoning replay but tail-budget walk excludes it](https://github.com/NousResearch/hermes-agent/issues/84371)
- [#85315 — auxiliary.free_only gate rejects explicitly-requested :free models](https://github.com/NousResearch/hermes-agent/issues/85315)

### P2 — Security / boundary

- [#84551 — detect_dangerous_command does not unwrap timeout / bash -c wrappers, bypassing approval gate](https://github.com/NousResearch/hermes-agent/issues/84551)  
  Security-relevant; no fix PR visible in snapshot.

### P2 — Messaging / cron

- [#87051 — /loop responses delivered outside active Telegram topic after gateway restart](https://github.com/NousResearch/hermes-agent/issues/87051)
- [#87280 — cron lifecycle guard false-positives on bash arithmetic `$(( x / y ))`](https://github.com/NousResearch/hermes-agent/issues/87280)

### P3

- [#84350 — hermes kanban show crashes with "Cannot operate on a closed database"](https://github.com/NousResearch/hermes-agent/issues/84350)

## Feature Requests & Roadmap Signals

Active feature work and requests likely to shape the next release:

- [#40306 — Auto reasoning mode (ChatGPT-style)](https://github.com/NousResearch/hermes-agent/issues/40306)  
  Older P3 request; still open. Could be picked up if reasoning-effort UX becomes a priority.

- [#79564 — Discord Feature Parity & Alignment Campaign (API v10)](https://github.com/NousResearch/hermes-agent/issues/79564)  
  Campaign meta-issue; likely driving incremental Discord PRs.

- [#82591 — Kanban zero-authority workers / durable publication / safe reclaim](https://github.com/NousResearch/hermes-agent/issues/82591)  
  Needs decision. Contains a complete 3-part implementation plan.

- [#83565 — Child-process credential-inheritance closure tracker](https://github.com/NousResearch/hermes-agent/issues/83565)  
  Security-focused campaign meta-issue, anchored by #77027.

- [#86986 — Termux: make native pkg install/upgrade the first-class Android path](https://github.com/NousResearch/hermes-agent/issues/86986)  
  New feature request targeting Android/Termux reliability.

- [#87267 — Add MAX messenger platform plugin (Russian messenger)](https://github.com/NousResearch/hermes-agent/issues/87267)  
  New platform request; signals demand for non-mainstream/regional messengers.

Feature PRs in progress:

- [#87312 — Desktop Capabilities-wide profile scoping + one-click Skills Hub installs](https://github.com/NousResearch/hermes-agent/pull/87312)
- [#86948 — Make memory provider timeouts configurable](https://github.com/NousResearch/hermes-agent/pull/86948)
- [#76772 — TUI /widgets subcommand family](https://github.com/NousResearch/hermes-agent/pull/76772)
- [#87311 — Disclose orchestrator worker behavior before plugin activation](https://github.com/NousResearch/hermes-agent/pull/87311)
- [#87313 — Disclose Kanban automatic worker fan-out before gateway startup](https://github.com/NousResearch/hermes-agent/pull/87313)

Likely next-version candidates: Desktop polish (#87312, #87314), memory configurability (#86948), and operator-transparency features (#87311, #87313).

## User Feedback Summary

Real user pain points visible in this window:

- **Windows update reliability is the largest recurring complaint.** Issues like #83569, #75584, and #87268 show users repeatedly hitting update/install failures, often with misleading success messages.
- **Desktop app users are experiencing state desync.** Stale "Thinking" indicators, second-launch backend kills, stuck subagent indicators, and context leakage across projects show that Desktop session lifecycle remains fragile.
- **Slow local-model users are hitting hard timeouts.** #87292 and #87309 both affect local/self-hosted workflows and cause full agent stalls.
- **Session consistency matters for power users.** #69107 and #87051 show that multi-client and multi-platform delivery are sensitive areas.
- **Security-conscious users are worried about approval-gate bypasses.** #84551 and #83565 both touch the trust boundary between user, agent, and subprocesses.
- **Platform coverage gaps remain.** Requests for Termux-first Android support (#86986) and the MAX messenger (#87267) show demand beyond mainstream desktop/mobile platforms.

On the positive side, contributors are actively self-fixing: the same user who reported #87295 opened the fix PR #87314, and #87310/#87313 show quick community-driven patches. The community is engaged, but the steady stream of P2 regressions indicates quality pressure around installers and Desktop.

## Backlog Watch

Items that appear to need maintainer attention despite recent activity:

- [#51327 — P1 Linux Desktop sandbox silent failure](https://github.com/NousResearch/hermes-agent/issues/51327)  
  Open since 2026-06-23, P1, 9 comments, no visible fix PR. This is the highest-priority long-running Desktop bug in the snapshot.

- [#50159 — Desktop stale "Thinking" state](https://github.com/NousResearch/hermes-agent/issues/50159)  
  Open since 2026-06-21, still no fix PR visible.

- [#84551 — Dangerous-command approval-gate bypass via wrappers](https://github.com/NousResearch/hermes-agent/issues/84551)  
  Security-relevant P2, no fix PR visible.

- [#75584 — Windows interrupted update leaves broken install](https://github.com/NousResearch/hermes-agent/issues/75584)  
  Long-running Windows update-class failure, no fix PR visible.

- [#66616 — Skills index stale/degraded watchdog](https://github.com/NousResearch/hermes-agent/issues/66616)  
  36 comments and still open; automation reliability issue.

- [#40306 — Auto reasoning mode](https://github.com/NousResearch/hermes-agent/issues/40306)  
  Open since 2026-06-06 with low engagement; needs a product/roadmap decision.

- [PR #75154 — fix(update): preserve local-only commits instead of silently discarding them on reset](https://github.com/NousResearch/hermes-agent/pull/75154)  
  Open since 2026-07-31, flagged `needs-decision`, and directly related to user update-safety concerns.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-16

## 1. Today's Overview

PicoClaw had a quiet 24-hour window: zero issues were updated, and no releases were published. Activity was limited to two open pull requests, both stale-labelled and last updated on August 15. These PRs show ongoing maintenance work in the agent context/caching layer and WhatsApp dependency compatibility. Overall, the project appears stable but low-activity, with no new bug reports or merged contributions in this period.

## 2. Releases

No new releases were published for PicoClaw on 2026-08-16.

## 3. Project Progress

No PRs were merged or closed in the last 24 hours. Two open PRs were updated:

- [#3321 [stale] fix(agent): move dynamic context after history to preserve prefix caching](https://github.com/sipeed/picoclaw/pull/3321) — Proposes moving per-request dynamic context blocks after conversation history to preserve prefix caching, potentially reducing redundant token processing and LLM costs.
- [#3320 [stale] fix(deps): bump whatsmeow to unblock WhatsApp "client outdated (405)"](https://github.com/sipeed/picoclaw/pull/3320) — Updates the pinned WhatsApp library to address WhatsApp rejecting the current client version, which causes connection drops and leaves the native WhatsApp channel unusable.

Neither PR has been merged yet.

## 4. Community Hot Topics

There were no Issues or PRs with significant comment/reaction activity in the last 24 hours. The two most relevant active PRs are:

- [WhatsApp client outdated fix — PR #3320](https://github.com/sipeed/picoclaw/pull/3320): Highlights a real user-facing channel outage caused by an outdated WhatsApp client version.
- [Prefix caching preservation — PR #3321](https://github.com/sipeed/picoclaw/pull/3321): Addresses agent performance by improving cache-friendly prompt ordering, likely important for users running long conversations or high-volume agent workloads.

No explicit community discussion or issue threads were captured in this window.

## 5. Bugs & Stability

Two stability/performance items are visible via open PRs, ranked by severity:

1. **WhatsApp "client outdated (405)"** — High severity for WhatsApp bridge users. The native WhatsApp channel connects and then drops, with no reconnect attempt. A fix PR is open: [#3320](https://github.com/sipeed/picoclaw/pull/3320).
2. **Prefix cache invalidation from dynamic context placement** — Not a crash, but a performance/cost regression risk: dynamic context blocks ahead of history invalidate positional prefix caching. A fix PR is open: [#3321](https://github.com/sipeed/picoclaw/pull/3321).

No new bugs, crashes, or regressions were reported as Issues in the last 24 hours.

## 6. Feature Requests & Roadmap Signals

No explicit feature requests were submitted in this period. The active PRs send two roadmap signals:

- **Agent efficiency focus**: Moving dynamic context blocks to preserve prefix caching suggests work on reducing LLM latency and token spend for PicoClaw's agent features.
- **Channel reliability maintenance**: Bumping `whatsmeow` indicates an ongoing commitment to keeping native messaging channels healthy, likely in response to upstream breaking changes.

No new-feature speculation is warranted beyond these maintenance/optimization directions.

## 7. User Feedback Summary

No direct user feedback, issue comments, or reactions were available in the last 24 hours. The implied pain points from PRs are:

- WhatsApp users experiencing an unusable native channel due to client rejection.
- Agent users potentially facing increased latency/costs due to suboptimal prompt caching behavior.

Satisfaction/dissatisfaction levels cannot be quantified from the available data.

## 8. Backlog Watch

Two open PRs are stale-labelled and may need maintainer attention for review or merge:

- [#3321 — fix(agent): move dynamic context after history to preserve prefix caching](https://github.com/sipeed/picoclaw/pull/3321), created 2026-08-07, last updated 2026-08-15.
- [#3320 — fix(deps): bump whatsmeow to unblock WhatsApp "client outdated (405)"](https://github.com/sipeed/picoclaw/pull/3320), created 2026-08-07, last updated 2026-08-15.

No long-unanswered Issues are currently in the backlog.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-16

## 1. Today's Overview

No releases or issue updates were recorded in the last 24 hours, but the PR queue was very active: 22 PRs were updated, with 19 still open and 3 closed/merged. Activity is dominated by core-team infrastructure work around channels, permissions, cross-session context, and delivery reliability. The absence of new issues suggests the project is in a steady feature-building phase rather than a firefighting phase, though several important bug-fix PRs remain open. Overall project health appears strong, with regular contributor momentum and a structured roadmap visible in the PR labels.

## 2. Releases

None. No new NanoClaw releases were published in this window.

## 3. Project Progress

Three PRs moved to closed/merged state:

- [#37 — Rename to DotClaw and switch from WhatsApp to Telegram](https://github.com/nanocoai/nanoclaw/pull/37): large rebranding and integration change; closes the WhatsApp-era code path and replaces it with a Telegram bot using Telegraf.
- [#3268 — fix(poll-loop): stopped loops leaked their active query's follow-up poller](https://github.com/nanocoai/nanoclaw/pull/3268): resource leak fix for stopped poll loops.
- [#3117 — feat(skill): add-omarchy-statusbar — Waybar status indicator for NanoClaw](https://github.com/nanocoai/nanoclaw/pull/3117): new utility skill for Waybar integration.

Open PRs updated during the window show substantial feature advancement:

- Permissions and lifecycle seams: channel registration card interceptors (#3266), `suppressCreatedNotify` (#3265), delivery batch preview hooks (#3264), hot-start adapter support (#3263).
- Channel adapter capabilities: typing status with tool/agent kind, thread title, suggested prompts (#3261), DM handling improvements (#3262).
- Cross-session context: fan-out, DM backfill, echo pruning, and `ncl sessions history` (#3257).
- Database/domain improvements: `messaging_groups.detached_at` (#3256), two-phase inbound batch selection (#3254), correct channel-row resolution for outbound delivery (#3255).

## 4. Community Hot Topics

Comment and reaction counts were not exported, but the PR list is sorted by comment count, so the top-ranked items indicate the most active discussions. The leading PRs are:

- [#37 — Rename to DotClaw and switch from WhatsApp to Telegram](https://github.com/nanocoai/nanoclaw/pull/37)
- [#3266 — Permissions: registerChannelCardInterceptor seam before registration cards](https://github.com/nanocoai/nanoclaw/pull/3266)
- [#3265 — Agent-to-agent: CreateAgentOptions.suppressCreatedNotify](https://github.com/nanocoai/nanoclaw/pull/3265)
- [#3264 — Delivery: registerDeliveryBatchPreview hook over each undelivered batch](https://github.com/nanocoai/nanoclaw/pull/3264)
- [#3263 — Channel registry: hot-start a registered adapter after boot](https://github.com/nanocoai/nanoclaw/pull/3263)

Underlying need: maintainers and advanced users are pushing toward a more extensible, multi-session, multi-platform architecture. The emphasis on hooks, seams, and adapter capabilities indicates real demand for customizing approval flows, controlling notifications, and handling complex channel/DM environments without forking core code.

## 5. Bugs & Stability

Several bug fixes and reliability improvements were active today, ranked roughly by severity:

1. **False stale-container kills during rate-limiting** — [#3251 fix(agent-runner): prevent heartbeat stall during rate-limiting](https://github.com/nanocoai/nanoclaw/pull/3251). Heartbeat only updated on API events, so rate-limited agents could be falsely killed. Open fix.
2. **Idle containers can escape absolute-ceiling kill forever** — [#3252 fix: idle container with no heartbeat file is exempt from the absolute-ceiling kill forever](https://github.com/nanocoai/nanoclaw/pull/3252). Stuck containers may never be reaped. Open fix.
3. **Context rows can starve real task work** — [#3254 container: two-phase inbound batch selection](https://github.com/nanocoai/nanoclaw/pull/3254). Backlogged `trigger=0` rows could push due tasks out of the batch. Open fix.
4. **Outbound delivery can resolve the wrong sender channel row** — [#3255 fix: outbound delivery resolves the sender's own channel row](https://github.com/nanocoai/nanoclaw/pull/3255). Multiple bot identities in one room could cause misrouted sends. Open fix.
5. **Stopped poll loops leaked query pollers** — [#3268 fix(poll-loop)](https://github.com/nanocoai/nanoclaw/pull/3268). Closed fix.
6. **Discord attachments arrive unreadable** — [#2752 fix: stage inbound attachments that expose only a url (Discord)](https://github.com/nanocoai/nanoclaw/pull/2752). Long-standing open fix.
7. **Telegram Markdown sanitizer degrades bold to italic** — [#3250 fix(telegram): drop the legacy-Markdown sanitizer](https://github.com/nanocoai/nanoclaw/pull/3250). Open fix.
8. **Skill-apply step captions show wrong ordinals** — [#3259 setup/tooling: skill-apply heading-ordinal strip](https://github.com/nanocoai/nanoclaw/pull/3259). Open fix.

## 6. Feature Requests & Roadmap Signals

The labeled A1–A4 and A8+C4 PRs in this window reveal a deliberate roadmap around extensibility and multi-session operations. Likely candidates for the next version include:

- **Channel adapter registry hot-start** — [#3263](https://github.com/nanocoai/nanoclaw/pull/3263)
- **Registration card interception seam** — [#3266](https://github.com/nanocoai/nanoclaw/pull/3266)
- **Batch delivery preview hooks** — [#3264](https://github.com/nanocoai/nanoclaw/pull/3264)
- **Agent creation notification suppression** — [#3265](https://github.com/nanocoai/nanoclaw/pull/3265)
- **Rich optional adapter capabilities** — typing status, thread title, suggested prompts — [#3261](https://github.com/nanocoai/nanoclaw/pull/3261)
- **DM thread normalization and app-context capture** — [#3262](https://github.com/nanocoai/nanoclaw/pull/3262)
- **New `decline_notify` unknown-sender policy** — [#3260](https://github.com/nanocoai/nanoclaw/pull/3260)
- **Cross-session context fan-out and history** — [#3257](https://github.com/nanocoai/nanoclaw/pull/3257)
- **Detached conversation tracking** — [#3256](https://github.com/nanocoai/nanoclaw/pull/3256)

The variety suggests an upcoming minor release centered on multi-session context, richer channel adapters, and permission workflow flexibility.

## 7. User Feedback Summary

No new issues were filed in the window, so user sentiment must be read from the PRs and fixes. The clearest pain points:

- Platform adapter correctness: Discord attachments not reaching the agent (#2752), Telegram markdown bold/italic rendering broken (#3250).
- Reliability under API pressure: heartbeat stalls during rate-limits (#3251).
- Operational predictability: stuck containers lingering forever due to heartbeat-file edge cases (#3252).
- Multi-account routing: duplicate bot identities in the same room could cause messages to be resolved to the wrong channel row (#3255).

Contributors are actively addressing these issues, which indicates engaged users and maintainers. The breadth of contributors — including `dotsetgreg`, `gavrielc`, `simonechecchia`, `chubbicorn245`, `DawoudIO`, `chiptoe-svg`, and `mmneimne` — is a positive health signal.

## 8. Backlog Watch

The issue tracker is empty, so the main backlog concern is the open PR queue. The most important item needing maintainer attention:

- [#2752 — fix: stage inbound attachments that expose only a url (Discord)](https://github.com/nanocoai/nanoclaw/pull/2752)  
  Opened June 12, 2026, and still open after more than two months. It fixes a significant Discord usability gap and has had no visible closure. This should be prioritized for review.

Other open fix PRs are recent and moving, so they are less at risk of becoming stale.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-16

## 1. Today's Overview

NullClaw saw minimal public activity in the last 24 hours: one open issue and one open pull request were updated, with no releases and no merged/closed PRs. The only issue is an enhancement request for proxy support, while the only PR targets agent loop hygiene for long, tool-heavy local runs. This suggests a quiet, maintenance-focused period rather than active feature shipping. Overall project health appears stable, though public engagement and issue/PR discussion volume are low.

## 2. Releases

No new releases were published in the last 24 hours. There are no release notes, breaking changes, or migration notes to report.

## 3. Project Progress

No PRs were merged or closed today. The only active PR is still open:

- **[#987 [OPEN] feat(agent): loop hygiene for long local tool-heavy runs](https://github.com/nullclaw/nullclaw/pull/987)** by `vernonstinebaker`
  - Splits the system prompt into a cache-friendly stable prefix and a variable datetime tail.
  - Adds compression of tool outputs before history injection via `result_compress.zig`, while observers still see full output.
  - Adds per-turn identical-call loop detection.
  - This PR is not yet merged, so its improvements are not in any released version.

## 4. Community Hot Topics

There are no heavily commented or reacted issues/PRs in this window. The only open issue is:

- **[#988 [OPEN] [enhancement] proxy support](https://github.com/nullclaw/nullclaw/issues/988)** by `anpic`
  - Requests HTTP(S) and SOCKS5h proxy support for providers.
  - Has no comments or reactions yet, but is the only active user-facing feature request.
  - Underlying need: users operating behind restricted networks, corporate firewalls, or in isolated environments require proxy support to reach LLM providers.

The only PR, [#987](https://github.com/nullclaw/nullclaw/pull/987), also has no public comments but signals contributor interest in improving long-run agent reliability.

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported in the last 24 hours. The only issue is an enhancement request, not a defect. PR #987 may indirectly address stability concerns for long local tool-heavy runs by compressing history and preventing repeated identical calls, but no explicit bug reports are tied to it today.

## 6. Feature Requests & Roadmap Signals

The clearest roadmap signal is **proxy support** from issue [#988](https://github.com/nullclaw/nullclaw/issues/988). If maintainers prioritize network flexibility, HTTP(S)/SOCKS5h proxy support is a likely candidate for a future release.

On the agent side, PR [#987](https://github.com/nullclaw/nullclaw/pull/987) points toward upcoming improvements in:
- Prompt caching via stable prefix separation.
- Tool output compression to reduce token/history bloat.
- Guardrails against repeated identical tool calls in long-running loops.

These could become part of the next version if the PR is reviewed and merged.

## 7. User Feedback Summary

- A user requested HTTP(S) and SOCKS5h proxy support for providers, indicating a real use case around restricted network environments.
- A contributor submitted substantial agent-loop hygiene work, suggesting community interest in making local tool-heavy agent runs more efficient and stable over time.
- No explicit complaints about existing behavior were filed today, but the lack of discussion on open items means user sentiment is not strongly visible.

## 8. Backlog Watch

Both open items were created/updated within the last 24 hours, so neither is stale yet. Maintainers should still prioritize:

- Reviewing and deciding on **[PR #987](https://github.com/nullclaw/nullclaw/pull/987)** before it risks falling behind other changes.
- Triaging **[Issue #988](https://github.com/nullclaw/nullclaw/issues/988)** with a clear accept/decline or roadmap response.

No long-unanswered items were observed in this snapshot.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-16

## 1. Today's Overview

IronClaw shows a high-velocity, healthy day: 27 issues were updated (21 closed, a 78% closure rate), and 13 PRs touched, with 6 merged/closed. The dominant theme is a coordinated performance wave from epic #7591 — heartbeat journal churn, trigger/outbound state writes, and thread-index rewrites were all eliminated or coalesced in merged PRs. The platform also completed a major architectural milestone: the **unbound-turns train** (#7562 + #7634) fully switched over to prepared-context turns. Notably, five new open issues were filed by reviewer henrypark133 as follow-ups from the #7634 review, indicating a strong code-quality culture. No new releases were published today.

## 2. Releases

**None.** No new versions or release artifacts were published in the last 24 hours.

## 3. Project Progress

Six PRs were merged/closed today, representing both architectural completion and aggressive write-amplification reduction:

| PR | Area | Significance |
|---|---|---|
| [#7562](https://github.com/nearai/ironclaw/pull/7562) | unbound-turns | Base PR: design docs + phase-1 implementation — prepared-context accept door, unbound run lane, kernel binding-ref deletion |
| [#7634](https://github.com/nearai/ironclaw/pull/7634) | unbound-turns | **Completes the switchover** — all follow-ups shipped, 71-clause conformance audit against both design docs passed |
| [#7628](https://github.com/nearai/ironclaw/pull/7628) | processes | Removes heartbeat journal churn (#7593) — stops permanent journal rows per heartbeat, ships 15-second turn-runner heartbeat interval |
| [#7629](https://github.com/nearai/ironclaw/pull/7629) | triggers/outbound | Reduces trigger/outbound state writes — moves run-history pruning to the initial fire claim, retains recovery-path pruning |
| [#7676](https://github.com/nearai/ironclaw/pull/7676) | threads | Coalesces thread-index touches — bursty per-thread activity now collapses into bounded writes, with monotonic CAS protecting multi-worker correctness |
| [#7670](https://github.com/nearai/ironclaw/pull/7670) | CI | Nightly codebase knowledge-graph refresh (bot-generated) |

These merges close out Tier-1 items #7593, #7595, #7596, #7597, and #7599 from the performance epic, delivering estimated savings of ~18 rows/turn (heartbeat journal), 2–3 DELETE statements per trigger fire (prune gating), up to 7 CAS rewrites per turn (index coalescing), and a 67% cut in background heartbeat load.

## 4. Community Hot Topics

- **[#467 — Trajectory benchmark system for agent quality evaluation](https://github.com/nearai/ironclaw/issues/467)** (4 comments, open since March 2026): The longest-running open thread. Proposes a benchmark that runs real user scenarios through the real agent loop, evaluating trajectories via hard assertions (tool selection, cost, latency) plus LLM-as-judge criteria. This is a foundational ask for agent-quality measurement and continues to attract attention.

- **[#3236 — Reborn same-thread follow-up and steering policy](https://github.com/nearai/ironclaw/issues/3236)** (3 comments, closed): A dense policy-definition issue covering how Reborn handles follow-ups while a turn holds the active-thread lock — including `/btw` steering, queue visibility, cancellation interaction, and blocked-run behavior. Its closure signals the v2/driver execution model has reached policy completeness.

- **#7634 review follow-up cluster (#7671–#7674)**: Four new issues filed from detailed review of PR #7634 — typed `ToolChoice` across providers, BudgetLedger charge-durability gaps, symbol-level architecture allowlists, and kernel sandbox stack pressure. The depth of these threads signals serious reviewer investment in production rigor.

## 5. Bugs & Stability

Ranked by severity:

1. **[#7675 — qa_6c gmail-to-sheet flake cascades across the whole provider-contracts session](https://github.com/nearai/ironclaw/issues/7675)** (open, new): The **most severe** open item. An intermittent resource-class capability failure in the live Gmail/emulate leg cascades into unrelated cases, reddening entire provider-contracts sessions. Notably, the failure was proven NOT caused by the PR under test (#7634). No fix PR yet; the harness-level fix may land in #7679.

2. **[#6835 — MCP auth failures never raise a re-auth gate](https://github.com/nearai/ironclaw/issues/6835)** (closed): `McpError::AuthRequired` was misclassified as `Client`, breaking the re-auth flow. Found via fault-profile → failure-fate crossing tests; WASM lane correctly gates, MCP lane did the opposite.

3. **[#6821 — IronHub free-text search matches reported as complete catalog listing](https://github.com/nearai/ironclaw/issues/6821)** (closed): The agent claimed only 3 installable tools when the signed catalog had 18, and listed 20 non-catalog skills. A serious agent-truthfulness bug in the IronHub search path, reproduced against the signed catalog.

4. **[#5239 — Scheduler treats stale terminal heartbeat as runner failure](https://github.com/nearai/ironclaw/issues/5239)** (closed): `turn_scheduler` misclassified a post-completion stale heartbeat as a failure, emitting a false terminal-failure path and attempted `Co…` recovery.

5. **[#5237 — Reborn debug logging floods Railway with Cranelift/Wasmtime DEBUG output](https://github.com/nearai/ironclaw/issues/5237)** (closed): Broad debug filtering lets low-level compiler targets emit high-volume timing logs during WASM compilation.

## 6. Feature Requests & Roadmap Signals

The five new open issues from the #7634 review are the clearest forward-looking signals:

- **[#7672 — Typed ToolChoice](https://github.com/nearai/ironclaw/issues/7672)**: Retire the overloaded `tool_choice: Option<String>` in favor of a typed enum. Every provider encoder currently string-matches `"auto"`/`"required"`/tool names — a refactor with broad cross-provider impact (rig_adapter, bedrock, nearai_chat, gemini_oauth, codex_chatgpt, openai_codex_provider). High likelihood for next version given its touch-surface and bug potential.

- **[#7673 — BudgetLedger accounting refinements](https://github.com/nearai/ironclaw/issues/7673)**: Fixes double-charging on truncated launch windows and improves charge durability. Both gaps err conservative (over-count → earlier stop), so this is correctness-hardening rather than an emergency.

- **[#7674 — Symbol-level architecture allowlist](https://github.com/nearai/ironclaw/issues/7674)**: Extends the dependency-boundaries test beyond crate-level edges to pin exactly which symbols the `ironclaw_openai_compat` crate may import from `ironclaw_threads`.

- **[#7671 — Kernel sandbox stack pressure](https://github.com/nearai/ironclaw/issues/7671)**: The LoopCapabilityPort decorator chain previously overflowed 2 MiB test-thread stacks; chain-boxing fixed the suite but the sandbox path remains near the edge — a follow-up for default-stack safety.

- **[#467 — Trajectory benchmark system](https://github.com/nearai/ironclaw/issues/467)**: Still open and foundational for objective agent-quality evaluation; likely a roadmap epic candidate.

Additionally, the open PRs **[#7678](https://github.com/nearai/ironclaw/pull/7678) (persist capability invocation state at gate/terminal edges)** and **[#7677](https://github.com/nearai/ironclaw/pull/7677) (fold message lookup indexes into message rows)** continue the storage-efficiency theme into capabilities and messaging.

## 7. User Feedback Summary

- **Performance / write-amplification pain is being actively addressed**: Epic #7591's Tier-1 items closed today, directly reducing per-turn database writes (heartbeat journal rows, index CAS rewrites, trigger-fire DELETEs). This reflects real production-cost pressure on hosted Railway deployments.

- **Live canary reliability is a known sore point**: [#7679](https://github.com/nearai/ironclaw/pull/7679) documents that the scheduled Live Canary has been red **30/30 runs** — but the root causes are harness defects failing correct product behavior, not product regressions. The fix PR is open and large (XL).

- **Agent truthfulness bug in IronHub search** ([#6821](https://github.com/nearai/ironclaw/issues/6821)): Users asking "what can I install from IronHub" received fabricated catalog listings (20 of 21 skills were not catalog entries). Closed, but a reminder of the agent-hallucination risk surface.

- **Positive signal**: The unbound-turns conformance audit ("71-clause conformance audit of both design docs") shows the team is investing in design-to-implementation traceability, which should reduce user-facing behavioral drift.

## 8. Backlog Watch

- **[#467 — Trajectory benchmark system](https://github.com/nearai/ironclaw/issues/467)**: Open since **March 2, 2026** — over 5 months. Despite 4 comments and being a foundational quality-evaluation ask, it has no assigned milestone or linked PR. This is the single most important long-unanswered item.

- **[#7491 — OMP core-tool contract + engines + benchmark arm](https://github.com/nearai/ironclaw/pull/7491)**: Open since August 11, sized XL with **risk: medium** and dependency/CI scope. Consolidates the coding-tool surface into six bare names (`read`, `write`, `edit`, `glob`, `grep`, `bash`) and removes legacy tool spellings. Large surface-area PR that warrants maintainer scheduling.

- **[#7516 — Operator surface for IronHub agent link](https://github.com/nearai/ironclaw/pull/7516)**: Open since August 12 from **new contributor** `neo-sky` (XL, risk: low). Adds a WebUI panel for obtaining the IronHub register URL and installing the hub-minted shared key — today this is CLI-only. Valuable UX gap; should be prioritized to keep the new-contributor loop tight.

- **[#7641 — Archive parity-blocked skill bundles](https://github.com/nearai/ironclaw/pull/7641)**: Open since August 14; moves 17 parity-blocked bundles out of the build-scanned `skills/` root. Low risk but touches docs and skill discovery, so it needs a maintainer pass to avoid breaking the skill catalog.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-16

## 1. Today's Overview

As of 2026-08-16, the last 24-hour window shows **18 issues updated** (2 open, 16 closed) and **6 PRs updated** (4 open, 2 closed), with **no new releases**. Almost all issue updates were stale-label closures of older April/May threads rather than newly reported problems; no new issues or PRs were created in this window. PR activity is limited to two meaningful fixes — plugin config preservation ([#1879](https://github.com/netease-youdao/LobsterAI/pull/1879)) and cron sub-agent finalization ([#2234](https://github.com/netease-youdao/LobsterAI/pull/2234)) — plus four unmerged dependabot CI bumps. Overall, the project looks to be in **maintenance/triage mode**: the stale backlog is being swept, but several high-impact user-facing bugs were closed without visible fix confirmation in this window.

## 2. Releases

No new releases or version tags were published in this digest window.

## 3. Project Progress

Two non-dependency PRs were closed/updated in this period, both appearing to be genuine fixes:

- [#1879](https://github.com/netease-youdao/LobsterAI/pull/1879) — **fix: preserve manually-added plugin load paths on config sync**  
  Prevents `OpenClawConfigSync.sync()` from overwriting `plugins.load.paths` and silently discarding user/community plugin installs such as `memory-lancedb-pro`.

- [#2234](https://github.com/netease-youdao/LobsterAI/pull/2234) — **fix(openclaw): cron yield descendant finalization**  
  Fixes parent-agent continuation after `sessions_yield` child completion, adds a yield continuation loop, and covers normal/cron/parallel/cron-serial sub-agent scenarios.

Also present but inactive are four open dependabot PRs ([#2164](https://github.com/netease-youdao/LobsterAI/pull/2164), [#2165](https://github.com/netease-youdao/LobsterAI/pull/2165), [#2166](https://github.com/netease-youdao/LobsterAI/pull/2166), [#2167](https://github.com/netease-youdao/LobsterAI/pull/2167)) that have not been progressed since June 15.

## 4. Community Hot Topics

The most active issues by comment count in the updated set:

- [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) — **Infinite `NO_REPLY` / truncated output on follow-up** (4 comments)  
  Users report tasks being completed early while the model is still generating, causing blank/no-response behavior.

- [#1878](https://github.com/netease-youdao/LobsterAI/issues/1878) — **WeChat IM bot cannot enter 6-digit verification code after QR scan** (4 comments)  
  Latest WeChat requires entering a verification code in the OpenClaw/LobsterAI client, but no input UI exists.

- [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) — **Member login frequently fails** (3 comments, still open)  
  Blocks access to paid NetEase models; user wants a better login flow.

- [#1988](https://github.com/netease-youdao/LobsterAI/issues/1988) — **Alibaba Bailian qwen3.6-plus cannot be called; config is overwritten** (3 comments)  
  After update, LobsterAI forces NetEase’s built-in model and reports no quota, even when user modifies config.

- [#1993](https://github.com/netease-youdao/LobsterAI/issues/1993) — **Desktop app shows “AI engine connection lost” while IM Bot works** (3 comments)

- [#2046](https://github.com/netease-youdao/LobsterAI/issues/2046) — **Product proposal: Agent memory system** (2 comments, still open)  
  Calls for session title/metadata persistence, cross-session memory retrieval, and reduced manual memory maintenance.

**Underlying need:** Many of the hottest threads cluster around integration boundaries — WeChat auth, third-party model providers, desktop runtime stability — and around **agent memory/lifecycle**, which is also reflected in issue cluster [#2036](https://github.com/netease-youdao/LobsterAI/issues/2036), [#2039](https://github.com/netease-youdao/LobsterAI/issues/2039), [#2040](https://github.com/netease-youdao/LobsterAI/issues/2040), and [#2041](https://github.com/netease-youdao/LobsterAI/issues/2041).

## 5. Bugs & Stability

Ranked by severity from the issues updated in this window:

**High severity**

- [#1885](https://github.com/netease-youdao/LobsterAI/issues/1885) — **Security: path traversal in email SKILL `imap.js` attachment download**  
  Unsanitized attachment filenames can be concatenated into download paths, enabling path traversal. No fix PR appears in this updated set; this deserves maintainer verification despite being stale-closed.

- [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) — **Member login failure** (open)  
  Blocks use of paid NetEase models; directly impacts core product value.

- [#1988](https://github.com/netease-youdao/LobsterAI/issues/1988) — **Model routing regression for Alibaba qwen3.6-plus**  
  System force-overwrites user config and falls back to a NetEase model without quota.

- [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) — **Infinite `NO_REPLY` / early task completion**  
  Model output is not surfaced because task completion fires before generation finishes.

**Medium severity**

- [#2017](https://github.com/netease-youdao/LobsterAI/issues/2017) — **Local runtime “OpenClaw runtime not detected” prevents login and task creation**  
  Blocks local development use entirely.

- [#1993](https://github.com/netease-youdao/LobsterAI/issues/1993) — **Desktop AI engine connection lost**  
  Inconsistent with IM Bot, which suggests a desktop-only network/runtime issue.

- [#1971](https://github.com/netease-youdao/LobsterAI/issues/1971) — **Virtual scroll breaks with long Mermaid/oversized elements**  
  Causes scroll suppression or repeated re-rendering.

- [#1878](https://github.com/netease-youdao/LobsterAI/issues/1878) — **WeChat verification code input missing**  
  Blocks IM bot configuration on current WeChat versions.

**Low severity**

- [#2039](https://github.com/netease-youdao/LobsterAI/issues/2039) — **Dreaming switch (`/dreaming on`) loses config after Gateway restart**  
  Upstream OpenClaw/memory-core schema issue.

No fix PRs in this window were directly linked to these bug reports.

## 6. Feature Requests & Roadmap Signals

Notable feature/UX requests updated in this window:

- [#1836](https://github.com/netease-youdao/LobsterAI/issues/1836) — Professional UI redesign; current UI described as “too ugly” versus competitors.
- [#1880](https://github.com/netease-youdao/LobsterAI/issues/1880) — Add **Hermes Agent** integration as an agent option, similar to Open WebUI.
- [#2016](https://github.com/netease-youdao/LobsterAI/issues/2016) — Add **OpenHuman engine** functionality.
- [#1920](https://github.com/netease-youdao/LobsterAI/issues/1920) / [#1921](https://github.com/netease-youdao/LobsterAI/issues/1921) — Improve empty/loading states with skeleton screens and icons.
- [#2036](https://github.com/netease-youdao/LobsterAI/issues/2036) — Add `agent:turn` / `agent:loop` gateway events for reliable real-time state persistence.
- [#2046](https://github.com/netease-youdao/LobsterAI/issues/2046) — **Agent memory system**: persist session metadata to filesystem, make session history visible/retrievable to the agent.

**Likely next-version direction:** The memory cluster is the strongest roadmap signal. Multiple issues and detailed proposals point to memory-core schema changes, session persistence, and cross-session retrieval. UI polish requests are also plausible for a near-term release because they are relatively low-risk. Larger engine integrations such as Hermes Agent or OpenHuman are more architectural and less likely in the immediate next version.

## 7. User Feedback Summary

Real user pain points surfaced in this update window:

- **Paid-model access is broken for some users**: login failures ([#1903](https://github.com/netease-youdao/LobsterAI/issues/1903)) and forced model routing ([#1988](https://github.com/netease-youdao/LobsterAI/issues/1988)) prevent users from using services they pay for.
- **Local/desktop experience is unstable**: “AI engine connection lost” ([#1993](https://github.com/netease-youdao/LobsterAI/issues/1993)) and missing local runtime detection ([#2017](https://github.com/netease-youdao/LobsterAI/issues/2017)) make the desktop app feel unreliable.
- **WeChat/IM setup is incomplete**: verification-code flow is missing ([#1878](https://github.com/netease-youdao/LobsterAI/issues/1878)).
- **Response generation can be unpredictable**: early task completion / `NO_REPLY` loops ([#1849](https://github.com/netease-youdao/LobsterAI/issues/1849)) hurt trust.
- **UI/UX is seen as unfinished**: plain loading text, poor empty states, and overall design complaints ([#1836](https://github.com/netease-youdao/LobsterAI/issues/1836), [#1920](https://github.com/netease-youdao/LobsterAI/issues/1920), [#1921](https://github.com/netease-youdao/LobsterAI/issues/1921)).
- **Memory across sessions is the biggest conceptual gap**: users want the agent to learn and persist context without manual maintenance ([#2046](https://github.com/netease-youdao/LobsterAI/issues/2046), [#2041](https://github.com/netease-youdao/LobsterAI/issues/2041)).

Users are engaged and technical, producing detailed proposals and security reports, but the stale-closure of many threads may leave submitters without a clear “fixed/declined” resolution.

## 8. Backlog Watch

Items still open or important but needing maintainer attention:

- [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) — **Member login failure** (open, stale)  
  High-impact paid-feature blocker; needs a maintainer reply or fix verification.

- [#2046](https://github.com/netease-youdao/LobsterAI/issues/2046) — **Agent memory system proposal** (open, stale)  
  A rich, actionable roadmap item; should be triaged formally.

- [#2164](https://github.com/netease-youdao/LobsterAI/pull/2164) / [#2165](https://github.com/netease-youdao/LobsterAI/pull/2165) / [#2166](https://github.com/netease-youdao/LobsterAI/pull/2166) / [#2167](https://github.com/netease-youdao/LobsterAI/pull/2167) — **Dependabot CI updates**  
  Open since June 15 with no maintainer action. These are security/CI hygiene updates and should be merged or closed to reduce noise.

- [#1885](https://github.com/netease-youdao/LobsterAI/issues/1885) — **Email SKILL path traversal** (stale-closed)  
  Even though closed, this is a security issue. It should be re-verified or explicitly linked to a fix commit before being considered resolved.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-16

## 1. Today's Overview

Moltis showed moderate development activity over the last 24 hours, driven entirely by pull requests: 6 PRs were updated, with 3 still open and 3 closed/merged. No new releases were published, and no issues were updated or opened during the period, indicating a maintainer-driven phase focused on implementation rather than community bug reporting. The activity centers on infrastructure and UX improvements: remote sandbox support, durable external connectors, Slack-native task cards, skill search fixes, command-palette chat entry, and OpenAI reasoning route handling. Overall, the project appears healthy and actively advancing across integration and developer-experience fronts.

## 2. Releases

No new releases were published in the last 24 hours. No release notes, breaking changes, or migration guidance are available for this digest.

## 3. Project Progress

Three PRs were closed/merged during the period:

- **[#1196 – Fix ClawHub skill search results](https://github.com/moltis-org/moltis/pull/1196)** — Fixed ClawHub skill search exceeding RPC timeouts by removing per-result metadata requests; now consumes search metadata directly and carries owner-qualified references through detail, scan, download, and install flows. This resolves a real functional bug in skill discovery.

- **[#1197 – Start agent chats from command palette](https://github.com/moltis-org/moltis/pull/1197)** — Added “Ask agent” as the final item for command-palette queries, including while debounced session search is pending. Selecting it creates a fresh chat session and immediately sends the palette query, with originating-session capture throughout.

- **[#1198 – Route OpenAI reasoning tool calls through Responses](https://github.com/moltis-org/moltis/pull/1198)** — Built-in OpenAI requests combining function tools with `reasoning_effort` now go through the Responses API; Chat Completions behavior is preserved when tools or reasoning are absent and for OpenAI-compatible providers. Also shares Responses request construction across streaming and non-streaming paths.

Three PRs remain open and represent work-in-progress (see Roadmap Signals below).

## 4. Community Hot Topics

No issues were active, and no comments or reactions were recorded on the updated PRs in the provided data, so there are no measurable community “hot topics” based on engagement metrics.

However, the open PRs themselves signal high-interest areas:

- **[#1199 – Add Coder remote workspace sandbox support](https://github.com/moltis-org/moltis/pull/1199)** — Underlying need: users want ephemeral, remotely managed sandbox environments using Coder, with REST API workspace creation and PTY WebSocket command execution.
- **[#1190 – Add durable calendar, channel, and email connectors](https://github.com/moltis-org/moltis/pull/1190)** — Underlying need: reliable persistence, atomic snapshots, and bounded local search for CalDAV, Gmail, Himalaya v2, and channel-history data.
- **[#1195 – Add Slack native live task cards](https://github.com/moltis-org/moltis/pull/1195)** — Underlying need: users want live plan/task visibility directly inside Slack, with privacy-protected opaque run IDs and cleanup on failed streams.

## 5. Bugs & Stability

No new bugs, crashes, or regressions were reported via issues in the last 24 hours. One bug fix was closed/merged:

- **Medium severity — ClawHub skill search timeout**: Per-result ClawHub metadata requests were pushing skill search beyond the RPC timeout, making skill search unreliable. Fixed in **[#1196](https://github.com/moltis-org/moltis/pull/1196)**.

Additionally, **[#1198](https://github.com/moltis-org/moltis/pull/1198)** explicitly preserves existing Chat Completions behavior when tools or reasoning are absent, suggesting care to avoid regressions for OpenAI-compatible providers.

## 6. Feature Requests & Roadmap Signals

There were no explicit user-submitted feature requests in the issue tracker. The open PRs are the clearest roadmap signals:

- **Coder remote workspace sandboxes** ([#1199](https://github.com/moltis-org/moltis/pull/1199)) — likely to add a new sandbox backend with template/preset/TTL support.
- **Durable calendar, channel, and email connectors** ([#1190](https://github.com/moltis-org/moltis/pull/1190)) — provider-neutral persistence, scheduling, projections, and local full-text search.
- **Slack native live task cards** ([#1195](https://github.com/moltis-org/moltis/pull/1195)) — task lifecycle updates rendered as Slack-native cards in the response stream.

If these PRs merge, the next version is likely to include remote sandboxing via Coder, persistent external connectors, and richer Slack-native interactivity, alongside the already-closed skill-search fix, command-palette chat entry, and OpenAI Responses routing.

## 7. User Feedback Summary

No direct user comments, reactions, or issue reports were available in the last 24 hours. Indirect feedback can be inferred from the PR work:

- ClawHub skill search was too slow / timed out — addressed in [#1196](https://github.com/moltis-org/moltis/pull/1196).
- Users want a faster path to start agent chats from the command palette — addressed in [#1197](https://github.com/moltis-org/moltis/pull/1197).
- Users need OpenAI reasoning-capable tool calls — addressed in [#1198](https://github.com/moltis-org/moltis/pull/1198).
- Users want remote, ephemeral sandboxes (Coder) and durable external data connectors — in progress via [#1199](https://github.com/moltis-org/moltis/pull/1199) and [#1190](https://github.com/moltis-org/moltis/pull/1190).
- Slack users want live task cards without exposing sensitive internal IDs — in progress via [#1195](https://github.com/moltis-org/moltis/pull/1195).

Overall, the maintainers are addressing concrete pain points, though no explicit satisfaction/dissatisfaction metrics are available.

## 8. Backlog Watch

No long-unanswered issues or stale PRs requiring maintainer attention were detected. All open PRs are recent and actively updated:

- [#1199](https://github.com/moltis-org/moltis/pull/1199) — created/updated Aug 15
- [#1195](https://github.com/moltis-org/moltis/pull/1195) — created/updated Aug 15
- [#1190](https://github.com/moltis-org/moltis/pull/1190) — created Aug 11, updated Aug 15 (5 days old, still within active development cycle)

No issues are in need of maintainer response.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-16

## 1. Today's Overview

CoPaw saw elevated activity over the past 24 hours: 10 issues were updated (9 still open/active, 1 closed) and 11 PRs received updates, all of them still open with **zero merges or closures** — a sign of strong contributor momentum but a growing review queue. Notably, 7 of the 11 active PRs are from first-time contributors, indicating a healthy influx of new community developers. No new releases were published, and the single closed issue (#6476, Matrix end-to-end encryption) suggests steady triage of long-standing bugs. The busiest areas are video tool-result handling, cron CLI behavior, Matrix channel fixes, and console UI/UX improvements — the latter increasingly driven by user feedback on performance and configuration flexibility.

## 2. Releases

No new releases in the last 24 hours. Last known version referenced in issue reports is **v2.1.0** (with v2.0.1 also still in the field), so users are reporting against the current release while several fixes are pending in open PRs.

## 3. Project Progress

**No PRs were merged or closed today** (11 open, 0 merged/closed), so no features officially landed in the last 24 hours. However, several PRs advanced meaningfully and signal near-term fixes:

- **[#7061 — fix(video): deliver tool-result videos on OpenAI Responses API](https://github.com/agentscope-ai/QwenPaw/pull/7061)** (first-time contributor): targets two defects in the video-promotion path introduced by #6495 that kept `view_video` frames out of model context on OpenAI Responses API-compatible providers (e.g., Volcengine Ark). Directly addresses issues #7059/#7060.
- **[#7055 — fix(cli): sync top-level text on agent cron --text update](https://github.com/agentscope-ai/QwenPaw/pull/7055)**: fixes #7048, where `qwenpaw cron update <id> --text` returned success but silently failed to persist the new prompt for agent-type cron jobs.
- **[#7057 — fix(shell): add user-local bin dirs to subprocess PATH](https://github.com/agentscope-ai/QwenPaw/pull/7057)**: fixes a real deployment pain where systemd/Launchd/Docker daemons inherit stripped `PATH` and cannot find user-installed CLIs (`gh`, `cmake`, `lark`, etc.).
- **[#7033 — feat(skill-system): dynamic skill loading + auto-unload + frontmatter fix](https://github.com/agentscope-ai/QwenPaw/pull/7033)**: adds runtime skill lifecycle management (loading/unloading) that was previously static after startup.
- **[#7001 — feat(matrix): isolate session and memory per sender in group rooms](https://github.com/agentscope-ai/QwenPaw/pull/7001)**: fixes a privacy/context bug where all group-room members shared one conversation state and memory identity.
- **[#6940 — feat(pawapp): add native DataPaw app runtime and durable analysis workspace](https://github.com/agentscope-ai/QwenPaw/pull/6940)** (first-time contributor): a large new feature adding a native DataPaw runtime with a durable analysis workspace.

The one closed issue, **[#6476 — Matrix 端到端加密不可用 (E2EE unavailable)](https://github.com/agentscope-ai/QwenPaw/issues/6476)**, was resolved after the user installed `libolm-dev` + `matrix-nio[e2e]`; the fix is environmental (installer guidance) rather than a code change.

## 4. Community Hot Topics

- **[#3915 — Introduce virtual scrolling for Console WebUI](https://github.com/agentscope-ai/QwenPaw/issues/3915)** — 3 comments, 1 👍, open since 2026-04-28. The most-liked request in the dataset. Users report severe lag from full DOM rendering of long conversations; the need for virtualized/paginated rendering is a clear UX priority.
- **[#6476 — Matrix E2EE unavailable (CLOSED)](https://github.com/agentscope-ai/QwenPaw/issues/6476)** — 3 comments. Heavy back-and-forth on install steps (`apt install libolm-dev`, `uv pip install matrix-nio[e2e]`); now closed, indicating resolution.
- **[#7060 — view_video inline-media cap hardcoded to 2 MB](https://github.com/agentscope-ai/QwenPaw/issues/7060)** — the `max_inline_media_bytes` provider setting is ignored on the video path; the model receives a `[video omitted...]` placeholder instead.
- **[#7059 — view_video tool-result video blocks silently dropped on OpenAI Responses API](https://github.com/agentscope-ai/QwenPaw/issues/7059)** — a completely silent failure: no error, no warning, no frames delivered.

Underlying needs: contributors and users are converging on **configurability** (media size limits, context strategy, model overrides) and **fail-visibility** — several recent bugs are silent failures where the system reports success but drops data.

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| 🔴 High | [#7059 — `view_video` frames silently dropped on OpenAI Responses API](https://github.com/agentscope-ai/QwenPaw/issues/7059) | Tool-result video blocks vanish with no error; model never receives frames. | ✅ [#7061](https://github.com/agentscope-ai/QwenPaw/pull/7061) |
| 🔴 High | [#7053 — OAuth2 refresh never rotates `refresh_token`](https://github.com/agentscope-ai/QwenPaw/issues/7053) | Remote MCP servers using rotating refresh tokens (e.g., XMind) permanently degrade to manual re-auth; only `access_token` is renewed, not the rotated refresh token. | ❌ None |
| 🔴 High | [#7051 — Image attachments lost on session reload](https://github.com/agentscope-ai/QwenPaw/issues/7051) | Console desktop app shows images correctly on send, but after reopening a chat the backend serves data URLs the frontend can't render → broken thumbnails. | ❌ None |
| 🟠 Medium | [#7048 — `cron update --text` returns success but prompt unchanged](https://github.com/agentscope-ai/QwenPaw/issues/7048) | Silent no-op for agent-type cron jobs on Windows/cmd.exe; rc=0 and task JSON returned, but `cron list` shows old prompt. | ✅ [#7055](https://github.com/agentscope-ai/QwenPaw/pull/7055) |
| 🟠 Medium | [#7060 — view_video inline cap hardcoded to 2 MB](https://github.com/agentscope-ai/QwenPaw/issues/7060) | Provider's `max_inline_media_bytes` has no effect on video path; videos >2 MB replaced with placeholder text. Related to #7059. | Partial — [#7061](https://github.com/agentscope-ai/QwenPaw/pull/7061) addresses the silent drop, but configurable cap still missing |
| ✅ Resolved | [#6476 — Matrix E2EE unavailable](https://github.com/agentscope-ai/QwenPaw/issues/6476) | Closed after documenting `libolm-dev` + `matrix-nio[e2e]` install steps. | N/A (documentation/environment) |

Pattern: **silent failures are the recurring theme** — three of the five open bugs (video drop, cron no-op, image loss) present no error to the user. These erode trust and should be prioritized for both code fixes and better user-facing diagnostics.

## 6. Feature Requests & Roadmap Signals

Active requests and the features they imply for upcoming versions:

- **[#3915 — Virtual scrolling for Console WebUI](https://github.com/agentscope-ai/QwenPaw/issues/3915)** — oldest open request in this set; addresses performance degradation in long conversations. Likely candidate for a future web/console iteration.
- **[#7058 — Restore native context strategy option in web UI](https://github.com/agentscope-ai/QwenPaw/pull/7058)** — v2.1.0 removed the `native` context-strategy selector even though the backend still supports `LightContextConfig.strategy: Literal["native", "scroll"]`. Users want the UI choice back, or at least documented configuration.
- **[#7056 — Background task callback/notification mechanism](https://github.com/agentscope-ai/QwenPaw/issues/7056)** — request for push notifications/callbacks when `submit_to_agent` background tasks complete, instead of manual polling of `GET /console/chat/task/{id}`.
- **[#7052 — system_prompt permission for plugin API](https://github.com/agentscope-ai/QwenPaw/issues/7052)** — enterprise use case: companies building plugin interfaces want to inject a hidden system prompt that end users can't see in the chat UI.

Roadmap signals from open PRs (likely to shape the next release): **DataPaw native runtime** (#6940), **per-cron model override picker** (#7050), **paginated chat history API** (#7049), **remote bridge support for Chrome on LAN/network browsers** (#7054), and **unified provider discovery/model routing** (#6302) — the latter is a large architectural change unifying provider catalogs, routing, and agent model controls.

## 7. User Feedback Summary

Real pain points expressed across issues:

- **Silent data loss / silent no-ops are the top frustration.** Users explicitly call out "no error, no warning, a completely silent failure" (#7059), commands that "return success but prompt not updated" (#7048), and images that disappear only after session reload (#7051).
- **Configuration exists in the backend but is not exposed in UI.** The `native` context strategy (#7058) and the `max_inline_media_bytes` video cap (#7060) are both backend-supported but either hidden or hardcoded. Users want to configure without hacking site-packages.
- **Remote MCP reliability is a trust issue.** OAuth2 refresh-token rotation (#7053) forces manual re-auth loops, which "permanently degrades" remote MCP servers — a strong word choice indicating production impact.
- **Chinese-speaking users are a significant community segment.** Four of the ten issues are written in Chinese (#6476, #7056, #7052, #7048); the project may benefit from bilingual issue templates or triage support.
- **Positive signal:** issue #6476 shows users are willing to dig into system-level dependencies (`libolm`, `vodozemac`) and document the resolution — an engaged, technically sophisticated community.

## 8. Backlog Watch

Items needing maintainer attention:

- **[#3915 — Virtual scrolling for Console WebUI](https://github.com/agentscope-ai/QwenPaw/issues/3915)** — open since **2026-04-28**, 3 comments, 1 👍. Long-unanswered high-value UX request; users report "severe lag" on long conversations. No linked PR.
- **[PR #6302 — feat: unify provider discovery, model metadata, routing, and agent controls](https://github.com/agentscope-ai/QwenPaw/pull/6302)** — open since **2026-07-21**. Large architectural PR with broad surface area; no comments recorded in this dataset. Risk of bit-rot given the scale — needs maintainer review.
- **[PR #6623 — fix(acp): prevent final text loss when notifications race the prompt response](https://github.com/agentscope-ai/QwenPaw/pull/6623)** — open since **2026-08-01**, labeled "Under Review," first-time contributor. Fixes an ACP transport race that can lose final text. Review appears stalled.
- **[PR #6940 — feat(pawapp): add native DataPaw app runtime and durable analysis workspace](https://github.com/agentscope-ai/QwenPaw/pull/6940)** — open since **2026-08-12**, first-time contributor, large feature with screenshots and an infra repo dependency. Needs maintainer triage to confirm scope and direction.

**Overall health assessment:** CoPaw has strong community energy (7 first-time-contributor PRs, responsive bug reports, bilingual community), but the **0/11 merge rate today and several stale PRs** suggest maintainer review bandwidth is the current bottleneck. The concentration of silent-failure bugs in video, cron, and image handling points to a need for integration tests around tool-result delivery and CLI persistence paths before the next release.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-16

## 1. Today's Overview

ZeroClaw recorded a very active 24-hour cycle: 50 issues and 50 PRs were updated, with 46 issues still open and 44 PRs still open. The project is in a sustained **architecture-definition phase** — the majority of the most-commented items are high-risk RFCs awaiting maintainer decisions, spanning OpenAI-compatible API compatibility, runtime-owned conversation sessions, unified attachments, security posture, and memory architecture. On the execution side, a five-PR stack for Anthropic refusal/fallback handling appears to have been merged, and multiple priority-1 bug fixes (cron lock release, webhook audit hardening, gateway turn lifecycle) are moving through review. No new releases were published. Activity is healthy but concentrated: maintainers face a growing decision queue, and several RFCs have been waiting since May–July for a final call.

---

## 2. Releases

No new releases were published in the reporting period.

---

## 3. Project Progress

Six PRs were merged or closed in the last 24 hours; the dominant story is the completion of the **Anthropic refusal/fallback stack** (all marked `distinguished contributor`, `risk:high`):

- **[#9262 — feat(providers): surface native anthropic refusals as typed errors](https://github.com/zeroclaw-labs/zeroclaw/pull/9262)** *(merged/closed, size:M)* — HTTP 200 safety refusals (`stop_reason: "refusal"`) are now a typed `AnthropicRefusalError` instead of an empty success.
- **[#9263 — feat(providers): route refusals through client-side fallback entries](https://github.com/zeroclaw-labs/zeroclaw/pull/9263)** *(merged/closed, size:XL)* — The reliability layer now acts on typed refusals, classifying them as non-retryable and routing through client-side fallback models.
- **[#9265 — feat(providers): opt-in anthropic server-side fallback requests](https://github.com/zeroclaw-labs/zeroclaw/pull/9265)** *(merged/closed, size:XL)* — Adds an Anthropic-only `server_fallback_models` config field for server-side fallback within a single API call.
- **[#9266 — feat(providers): detect anthropic server-side fallback responses](https://github.com/zeroclaw-labs/zeroclaw/pull/9266)** *(merged/closed, size:XL)* — Reads native response signals to detect when Anthropic served a turn with a different model.
- **[#9268 — feat(channels): surface safeguard fallback notices](https://github.com/zeroclaw-labs/zeroclaw/pull/9268)** *(merged/closed, size:XL)* — Closes the stack by surfacing safeguard/fallback notices to users through the channel orchestrator.

This is a significant reliability milestone: refusal handling is now end-to-end across the provider boundary, reliability layer, and channel UX.

Other notable PRs under active review (not yet merged):

- **[#9320 — fix(cron): bound agent job runs with a wall-clock timeout that releases the lock](https://github.com/zeroclaw-labs/zeroclaw/pull/9320)** *(p1, risk:high, size:XL)* — Fixes hung cron agent jobs holding SQLite `locked_at` locks forever.
- **[#9995 — fix(hooks): harden webhook audit exports](https://github.com/zeroclaw-labs/zeroclaw/pull/9995)** *(p1, security, size:M)* — Scrubs credentials and token patterns from webhook audit arguments.
- **[#9745 / #9746 — per-agent memory and session ownership scoping](https://github.com/zeroclaw-labs/zeroclaw/pull/9745)** *(risk:high, size:XL)* — Adds per-agent attribution to the knowledge graph and session tools; closes an agent-to-agent data leak.
- **[#9739 — feat(zerocode): multi-session panes with agent sidebar](https://github.com/zeroclaw-labs/zeroclaw/pull/9739)** *(size:XL)* — Advances TUI parity with the web dashboard.
- **[#9002 — fix(gateway): keep agent turns alive after viewer disconnect](https://github.com/zeroclaw-labs/zeroclaw/pull/9002)** *(p1, risk:high, size:XL)* — Decouples turn execution from dashboard WebSocket lifetime.

---

## 4. Community Hot Topics

The most active discussions are all architecture RFCs, indicating a community that cares deeply about the platform's long-term design:

- **[#8603 — RFC: ZeroClaw Chat Completions profile](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** *(20 comments, risk:high, needs-maintainer-review)* — The highest-engagement issue. Users want OpenAI-protocol compatibility so Open WebUI, LobeChat, Continue.dev, Aider, and LangChain can talk to ZeroClaw agents. Underlying need: **interoperability with the existing AI tooling ecosystem** rather than forcing every client through WebSocket/ACP/webhooks.

- **[#9487 — RFC: Runtime-owned conversation sessions and transport surface adapters](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)** *(16 comments, risk:high)* — Proposes centralizing session ownership in the runtime with durable admission semantics. Underlying need: consistent behavior across all entry points (web, channels, ACP, RFC #8603).

- **[#9488 — RFC: Unified attachment architecture for web chat and channels](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)** *(15 comments, risk:high)* — Pairs with #9487 to unify how files/media flow through channels.

- **[#8692 — Tracker: Maintainer decision queue for RFCs and design issues](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** *(13 comments)* — Community-visible evidence that RFCs are piling up; this tracker is itself a hot topic because it exposes the bottleneck.

- **[#6954 — RFC: Provenance, conversation binding, and reply contract for internally initiated agent turns](https://github.com/zeroclaw-labs/zeroclaw/issues/6954)** *(12 comments, risk:high)* — Revision 2 with boundary clarifications; covers cron/automated turns identity and reply lifecycle.

- **[#6971 — RFC: Security posture, credential boundaries, and universal ingress policy](https://github.com/zeroclaw-labs/zeroclaw/issues/6971)** *(12 comments, risk:high)* — Wants one inspectable, auditable security model across credentials, sandboxing, tool approval, and channel auth.

- **[#9103 — RFC: separate authoritative memory storage from optional enrichment connectors](https://github.com/zeroclaw-labs/zeroclaw/issues/9103)** *(12 comments, risk:high)* — Argues `memory.backend` conflates the durable store with pluggable connectors like Lucid.

**Analysis:** The community is converging on a vision of ZeroClaw as a **protocol-compatible, securely multi-tenant agent runtime** — OpenAI-compatible APIs, runtime-owned sessions, unified attachments, and strict per-agent data isolation. These five RFCs are interdependent, and maintainer decisions on them will shape the next several releases.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|---|---|---|---|
| **High (p1)** | **[#9965 — cron custom-shell test hits ETXTBSY under parallel runtime gate](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)** — Flaky test fails unrelated PRs (e.g., #9963) on a required check. `risk:medium` | Accepted; task tracked | No dedicated fix PR yet |
| **High (p1)** | **[#9320 — Cron agent jobs hang with no wall-clock bound, holding SQLite lock](https://github.com/zeroclaw-labs/zeroclaw/pull/9320)** — A hung provider/tool call never releases the job lock | Fix PR open (`needs-author-action`) | #9320 |
| **High (p1)** | **[#9995 — Webhook audit exports can leak credentials/provider tokens](https://github.com/zeroclaw-labs/zeroclaw/pull/9995)** | Fix PR open (`needs-author-action`) | #9995 |
| **High (p1)** | **[#9002 — Agent turns cancelled when dashboard viewer disconnects](https://github.com/zeroclaw-labs/zeroclaw/pull/9002)** — Navigation/browser sleep kills in-flight work | Fix PR open (`needs-author-action`) | #9002 |
| **High (p1)** | **[#9281 — Config set failures leave auto-created map aliases behind](https://github.com/zeroclaw-labs/zeroclaw/pull/9281)** — Non-transactional config mutation | Fix PR open (`needs-author-action`) | #9281 |
| **Medium (p2)** | **[#9954 — SOP step output double-encoded as JSON string skips schema validation](https://github.com/zeroclaw-labs/zeroclaw/pull/9954)** | Fix PR open (`needs-maintainer-review`) | #9954 |
| **Medium (p2)** | **[#9957 — SOP engine discards the failure reason for failed runs](https://github.com/zeroclaw-labs/zeroclaw/pull/9957)** | Fix PR open (`needs-author-action`) | #9957 |

**Resolved this cycle:**
- **[#7527 — macOS desktop app can reopen blank or without a window](https://github.com/zeroclaw-labs/zeroclaw/issues/7527)** *(S1, workflow blocked)* — **Closed** after a repro attempt (`r:needs-repro`); users should verify in the next release.
- **[#4760 — Use schema-validated tool calls for memory consolidation](https://github.com/zeroclaw-labs/zeroclaw/issues/4760)** — **Closed as duplicate**; the underlying idea lives on in the memory RFC (#9103) discussion.

**Pattern:** Several p1 fix PRs are blocked on **author action** — the biggest stability risk right now is review latency, not missing fixes.

---

## 6. Feature Requests & Roadmap Signals

Strong signals for upcoming versions:

- **OpenAI Chat Completions compatibility** ([#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)) — The single most-commented issue. If accepted, it would unlock the entire OpenAI-SDK ecosystem (Open WebUI, LobeChat, Aider, LangChain) as ZeroClaw frontends. High likelihood of being a v-next headline feature.
- **Runtime-owned sessions + unified attachments** ([#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487), [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)) — Foundational; likely prerequisites for #8603 and the Gemini Live voice channel.
- **Gemini Live realtime speech-to-speech channel** ([#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780)) — Revision v2 rewrote this as a broker contract; very active, revised 2026-08-16.
- **Computer-use support for desktop control** ([#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)) — Browser computer-use exists; desktop screen/mouse/keyboard control is the requested extension.
- **Agent Plugins 1.0.0 standard loading** ([#9810](https://github.com/zeroclaw-labs/zeroclaw/issues/9810)) — Vendor-neutral plugin packaging (`plugin.json` + `skills/` + `mcp.json`); aligns with the MCP ecosystem trend.
- **Staged opt-in product telemetry** ([#9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621)) — Maintainers want usage data to make informed investment/removal decisions.
- **Cron jobs with a specific model** ([#7762](https://github.com/zeroclaw-labs/zeroclaw/issues/7762)) — Small, accepted, practical: run cheap periodic tasks on cheap models; also requests missing cron documentation.
- **AI-assisted PR pre-review** ([#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330)) — Use CI results to trigger AI initial review while keeping human approval; signals the project embracing AI-assisted development internally.

**Predictions for next release:** #7762 (cron model selection), #7849 (Discord thread mode), and #7824 (wecom_ws proactive messaging) are small accepted features that could land soon. The RFC cluster (#8603/#9487/#9488/#6954) is more likely to land as a coordinated architectural release given their interdependence.

---

## 7. User Feedback Summary

Real user pain points visible in this cycle:

- **macOS experience is fragile** ([#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527), now closed): permissions not detected, blank UI, vanishing window after restart — S1 workflow blocker for a desktop user. Closure without a visible fix means this deserves regression-watch attention.
- **CI flakiness wastes contributor time** ([#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)): a cron test race (`ETXTBSY`) failing unrelated PRs is exactly the kind of friction that discourages external contributors.
- **False-positive secret detection breaks real use cases** ([#9825](https://github.com/zeroclaw-labs/zeroclaw/issues/9825)): the high-entropy leak detector redacts public blockchain addresses, making payment-request URLs undeliverable — the user notes the detector is working as designed but needs "publish-safe exceptions."
- **Cron configuration gaps** ([#7762](https://github.com/zeroclaw-labs/zeroclaw/issues/7762)): missing docs and no way to pin a cron job to a cheap model — a concrete cost-saving request.
- **Multi-tenancy correctness concerns** ([#9745](https://github.com/zeroclaw-labs/zeroclaw/pull/9745), [#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746), [#7870](https://github.com/zeroclaw-labs/zeroclaw/issues/7870)): reviewers/contributors are actively fixing agent-to-agent data leaks in knowledge graph, sessions, and provider option resolution — trust/security is a recurring theme.

Overall sentiment: **enthusiastic but impatient for maintainer decisions**. Contributors are producing high-quality RFCs and fix PRs (many marked `distinguished contributor`), but `needs-author-action` on p1 fixes and an untouched `needs-maintainer-review` queue are causing frustration.

---

## 8. Backlog Watch

Items needing maintainer attention, ranked by risk of stagnation:

1. **[#8603 — RFC: Chat Completions profile](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** *(20 comments, needs-maintainer-review since July 2)* — The community's top request, waiting over six weeks. Decision here cascades into #9487/#9488.
2. **[#9487 / #9488 — Session & attachment RFCs](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)** *(16/15 comments, needs-maintainer-review)* — Submitted July 28, revised August 3; foundational for multiple features.
3. **[#6971 — RFC: Security posture & universal ingress policy](https://github.com/zeroclaw-labs/zeroclaw/issues/6971)** *(12 comments, needs-maintainer-review)* — Security-critical proposal from May 27; long unresolved.
4. **[#6954 — RFC: Internally initiated agent turns](https://github.com/zeroclaw-labs/zeroclaw/issues/6954)** *(12 comments, needs-maintainer-review)* — Affects cron and automation correctness; revised August 5.
5. **[#8692 — Maintainer decision queue tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** *(13 comments)* — The meta-issue: the queue itself is the bottleneck.
6. **[#9320 — p1 cron lock fix PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9320)** — Waiting on author action; a hung-job bug with a complete fix in hand.
7. **[#7108 — CI cached Rust builds / critical path](https://github.com/zeroclaw-labs/zeroclaw/issues/7108)** *(accepted, risk:high)* — 15–20 min PR CI is a drag on the entire contribution pipeline.
8. **[#6909 — RFC: Desktop computer-use](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)** *(9 comments, needs-author-action)* — Broad-scope proposal; needs scoping or deferral decision.

**Watch item:** RFC #8780 (Gemini Live speech channel) was revised today to a broker contract and may be converging; it could move to the front of the maintainer queue quickly.

---

*Data source: github.com/zeroclaw-labs/zeroclaw — issues and PRs updated 2026-08-15/16. Digest generated 2026-08-16.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*