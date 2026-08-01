# OpenClaw Ecosystem Digest 2026-08-01

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-01 01:47 UTC

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

# OpenClaw Project Digest — 2026-08-01

## 1. Today's Overview

OpenClaw showed heavy maintenance and triage activity on 2026-08-01: 500 issues and 500 PRs were updated in the last 24 hours, with 57 issues closed and 138 PRs merged/closed. No new release was published during this window. The issue queue remains dominated by P1 reliability and session-state bugs — duplicate transcript writes, undelivered replies, event-loop stalls, and message loss across Telegram, Slack, Matrix, and Codex paths. A batch of large refactor PRs around auto-reply ownership, turn lifecycle, and plugin descriptor consolidation suggests active architectural cleanup alongside bug fixing.

---

## 2. Releases

**No new releases in the last 24 hours.**  
There are no changelog entries, breaking changes, or migration notes to report for 2026-08-01.

---

## 3. Project Progress

Merged/closed activity was strong, with **138 PRs merged/closed** and **57 issues closed** in the last 24 hours.

Notable visible changes and closeouts:

- [#116909 — fix(messages): reply actions leak citation markers and draw the no-reply fallback](https://github.com/openclaw/openclaw/pull/116909) — closed, automerge-armed; fixes message-delivery edge cases around reply actions and no-reply fallback.
- [#116391 — WebChat session history disappears when sending first message on new calendar day](https://github.com/openclaw/openclaw/issues/116391) — closed.
- [#116409 — Every inbound message written twice to transcript on all channels](https://github.com/openclaw/openclaw/issues/116409) — closed.
- [#116868 — SQLite-backed sessions can fall back to frozen legacy JSONL and resurrect completed tasks](https://github.com/openclaw/openclaw/issues/116868) — closed.

Open PRs advancing important fixes/features:

- [#117148 — fix(agents): preserve tools on verified completion wakes](https://github.com/openclaw/openclaw/pull/117148)
- [#117145 — refactor(reply): unify turn lifecycle state ownership](https://github.com/openclaw/openclaw/pull/117145)
- [#117143 — refactor(auto-reply): unify slash command and directive ownership](https://github.com/openclaw/openclaw/pull/117143)
- [#117146 — refactor(plugins): consolidate descriptors and startup activation](https://github.com/openclaw/openclaw/pull/117146)
- [#117147 — test(agent-core): pin compaction summarization to text-only input](https://github.com/openclaw/openclaw/pull/117147)
- [#117128 — fix(secrets): preflight exec provider command paths before config acceptance](https://github.com/openclaw/openclaw/pull/117128)
- [#110568 — fix(matrix): journal inbound events before advancing sync token](https://github.com/openclaw/openclaw/pull/110568)

---

## 4. Community Hot Topics

Most-commented issues reveal that users are primarily concerned with reliability, security, and resource stability:

- [#116201 — Realtime voice work can retain unbounded provider and consult state](https://github.com/openclaw/openclaw/issues/116201) — 16 comments, P1 maintainer bug.
- [#10659 — Masked Secrets: Prevent Agent from Accessing Raw API Keys](https://github.com/openclaw/openclaw/issues/10659) — 15 comments, 4 👍, P1 security feature.
- [#51429 — Someone hardcoded a working path into the code and it was merged/published](https://github.com/openclaw/openclaw/issues/51429) — 13 comments, P1 bug; high user frustration.
- [#86519 — Agent repeats identical replies 2-10x on Telegram after 5.20 update](https://github.com/openclaw/openclaw/issues/86519) — 13 comments, 1 👍, P1 regression.
- [#67288 — amazon-bedrock-mantle lacks config.discovery.enabled gate](https://github.com/openclaw/openclaw/issues/67288) — 13 comments, 1 👍, closed.
- [#113306 — SQLite snapshot restore lacks end-to-end crash and identity guarantees](https://github.com/openclaw/openclaw/issues/113306) — 12 comments, P1 data-loss risk.
- [#69208 — Umbrella: duplicate transcript, replay, and context assembly across channels](https://github.com/openclaw/openclaw/issues/69208) — 12 comments, P1 maintainer umbrella issue.
- [#115908 — Session transcript projection reconcile can livelock under sustained writes](https://github.com/openclaw/openclaw/issues/115908) — 11 comments, P1, main-thread stall.
- [#114137 — Visible channel turns dispatch with no queued reply payloads](https://github.com/openclaw/openclaw/issues/114137) — 11 comments, P1 message loss.
- [#85251 — Codex app-server emits turn/started then goes silent](https://github.com/openclaw/openclaw/issues/85251) — 11 comments, 1 👍, P1 session wedge.

Underlying need: users are asking for **durable delivery guarantees**, **session-state consistency**, and **safe credential handling** more than for new flashy features.

---

## 5. Bugs & Stability

### P0 — Blocker-level

- [#112395 — Startup migration preflight blocks gateway after upgrade from 6.11 to 7.1](https://github.com/openclaw/openclaw/issues/112395) — regression; upgrade blocker; migration tables/leases empty.
- [#70903 — Persistent file-based provider cooldown blocks user for hours after billing recovery](https://github.com/openclaw/openclaw/issues/70903) — P0 stale issue; provider lockout persists across restarts.

### P1 — High severity

- [#116201 — Realtime voice sessions retain unbounded provider and consult state](https://github.com/openclaw/openclaw/issues/116201)
- [#86519 — Telegram duplicate replies 2-10x after 5.20 update](https://github.com/openclaw/openclaw/issues/86519)
- [#113306 — SQLite snapshot restore lacks crash/identity guarantees](https://github.com/openclaw/openclaw/issues/113306) — potential data loss.
- [#115908 — Transcript projection livelock stalls Node main thread](https://github.com/openclaw/openclaw/issues/115908)
- [#114137 — Final reply persisted in transcript but never delivered](https://github.com/openclaw/openclaw/issues/114137)
- [#85251 — Codex app-server wedges after turn/started](https://github.com/openclaw/openclaw/issues/85251)
- [#87109 — Gateway heap grows to 1073MB+ at idle; cron jobs fail silently](https://github.com/openclaw/openclaw/issues/87109)
- [#53540 — Embedded runner "Network connection lost" on large tool-call params](https://github.com/openclaw/openclaw/issues/53540)
- [#97616 — Leaked unreaped hook/tool child processes cause zombie accumulation](https://github.com/openclaw/openclaw/issues/97616)
- [#114211 — Matrix room agents loop on no-reply output and stale replay](https://github.com/openclaw/openclaw/issues/114211)
- [#114255 — Restart mid-run leaves session running; Telegram spool retries forever](https://github.com/openclaw/openclaw/issues/114255)
- [#48810 — Compaction retry creates orphan fork in parentId chain](https://github.com/openclaw/openclaw/issues/48810)
- [#96692 — Slack thread replies generated but not delivered after origin tuple lost](https://github.com/openclaw/openclaw/issues/96692)
- [#85844 — Auto-update leaves running gateway with stale hashed bundle imports](https://github.com/openclaw/openclaw/issues/85844)
- [#51396 — clearUnboundScopes strips operator scopes for non-local token-auth clients](https://github.com/openclaw/openclaw/issues/51396) — security regression.
- [#115476 — Context refresh replays old inbound message_id for Telegram](https://github.com/openclaw/openclaw/issues/115476)
- [#116418 — Ollama provider never selected as primary in 2026.7.1](https://github.com/openclaw/openclaw/issues/116418)

### Fix PRs visible for related issues

Several PRs in today's batch target the same reliability/security areas:

- [#116909 — reply citation markers / no-reply fallback](https://github.com/openclaw/openclaw/pull/116909)
- [#117148 — preserve tools on verified completion wakes](https://github.com/openclaw/openclaw/pull/117148)
- [#117139 — preserve node invoke dispatch provenance](https://github.com/openclaw/openclaw/pull/117139)
- [#110568 — Matrix: journal inbound events before advancing sync token](https://github.com/openclaw/openclaw/pull/110568)
- [#117008 — Matrix: recover durable sends after response loss](https://github.com/openclaw/openclaw/pull/117008)
- [#117128 — preflight exec SecretRef command paths](https://github.com/openclaw/openclaw/pull/117128)
- [#116957 — redact sig and x-* auth params in URLs and bodies](https://github.com/openclaw/openclaw/pull/116957)
- [#117147 — compaction summarization: text-only input](https://github.com/openclaw/openclaw/pull/117147)
- [#109707 — add timeout to fd and ripgrep search executions](https://github.com/openclaw/openclaw/pull/109707)

---

## 6. Feature Requests & Roadmap Signals

Active feature requests and roadmap signals:

- [#10659 — Masked Secrets: prevent agents from seeing raw API keys](https://github.com/openclaw/openclaw/issues/10659) — P1, security-reviewed candidate; strong community support.
- [#10687 — Fully dynamic model discovery (OpenRouter + beyond)](https://github.com/openclaw/openclaw/issues/10687) — 3 👍, P2.
- [#13219 — Per-model usage logging for cost tracking](https://github.com/openclaw/openclaw/issues/13219) — P2.
- [#87325 — Support Azure Foundry GPT Realtime Talk via gateway relay](https://github.com/openclaw/openclaw/issues/87325) — P2.
- [#81913 — Stable plugin SDK surface for installed skill workflows](https://github.com/openclaw/openclaw/issues/81913) — P2, security review.
- [#45854 — Android Node Tools & Session Enhancement](https://github.com/openclaw/openclaw/issues/45854) — P2.
- [#37584 — Per-agent tool settings (e.g. tools.web.search.apiKey)](https://github.com/openclaw/openclaw/issues/37584) — P2.
- [#45503 — Manual context clearing for tool results](https://github.com/openclaw/openclaw/issues/45503) — P2.
- [#113251 — Image viewing in the webchat file viewer](https://github.com/openclaw/openclaw/issues/113251) — P2 UX.

Likely next-version candidates: masked secrets (#10659) if security review completes; auto-reply/turn-lifecycle consolidation via PRs #117143/#117145; multi-slot memory architecture (#88504); local faster-whisper transcription (#115698); and audit execution identity (#117034).

---

## 7. User Feedback Summary

User sentiment in the top issue data is dominated by **reliability pain** and **regression frustration**:

- Hardcoded workspace path in a published release ([#51429](https://github.com/openclaw/openclaw/issues/51429)) caused visible anger and damaged release confidence.
- Telegram duplicate replies ([#86519](https://github.com/openclaw/openclaw/issues/86519)) and general duplicate/message-loss issues ([#69208](https://github.com/openclaw/openclaw/issues/69208)) are recurring complaints.
- Users report context/token waste from re-injected bootstrap files ([#67419](https://github.com/openclaw/openclaw/issues/67419)) and prompt-cache churn ([#95610](https://github.com/openclaw/openclaw/issues/95610)), reflecting cost sensitivity.
- Provider lockout after billing recovery ([#70903](https://github.com/openclaw/openclaw/issues/70903)) is seen as particularly punishing.
- Upgrade blockers ([#112395](https://github.com/openclaw/openclaw/issues/112395)) and provider selection regressions ([#116418](https://github.com/openclaw/openclaw/issues/116418)) add to dissatisfaction.

Positive signal: maintainers closed several high-visibility P1 bugs and have large refactor PRs in flight, indicating active response to the reliability wave.

---

## 8. Backlog Watch

Long-running or high-impact items still needing maintainer attention:

- [#10659 — Masked Secrets](https://github.com/openclaw/openclaw/issues/10659) — opened Feb 6; P1; 15 comments, 4 👍; needs security/product decision.
- [#70903 — Provider cooldown blocks users for hours](https://github.com/openclaw/openclaw/issues/70903) — opened Apr 24; P0; stale; needs maintainer review.
- [#112395 — Upgrade migration preflight blocks gateway](https://github.com/openclaw/openclaw/issues/112395) — opened Jul 21; P0; 5 comments; upgrade blocker.
- [#67419 — Bootstrap files re-injected every turn, wasting 20-30% tokens](https://github.com/openclaw/openclaw/issues/67419) — opened Apr 15; P1; 2 👍; needs product decision.
- [#51429 — Hardcoded working path merged into release](https://github.com/openclaw/openclaw/issues/51429) — opened Mar 21; P1; 13 comments; needs maintainer review.
- [#51396 — clearUnboundScopes strips operator scopes](https://github.com/openclaw/openclaw/issues/51396) — opened Mar 21; P1 security regression; linked PR open.
- [#10687 — Dynamic model discovery](https://github.com/openclaw/openclaw/issues/10687) — opened Feb 6; P2; 3 👍; needs maintainer review/product decision.

PRs waiting for maintainer look:

- [#117148 — preserve tools on verified completion wakes](https://github.com/openclaw/openclaw/pull/117148)
- [#117145 — unify turn lifecycle state ownership](https://github.com/openclaw/openclaw/pull/117145)
- [#117146 — consolidate plugin descriptors and startup activation](https://github.com/openclaw/openclaw/pull/117146)
- [#109707 — add timeout to fd and ripgrep executions](https://github.com/openclaw/openclaw/pull/109707)
- [#112961 — IRC: send plain text instead of Markdown source](https://github.com/openclaw/openclaw/pull/112961)

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — Personal AI Assistant / Agent Open-Source Ecosystem
**Data window: 2026-07-31 → 2026-08-01 (12 projects)**

---

## 1. Ecosystem Overview

The open-source personal AI assistant landscape is in a **reliability-driven consolidation phase**. The largest projects — OpenClaw, ZeroClaw, IronClaw, and Hermes — are spending the majority of their cycles on session-state durability, message-delivery guarantees, and credential security rather than new features. A second tier (NanoBot, CoPaw, LobsterAI, Moltis) is iterating effectively on channel integrations and platform hardening, while niche projects (NullClaw, PicoClaw, ZeptoClaw) show low but stable activity. Recurring failure modes are strikingly consistent across codebases: duplicate transcripts, undelivered replies, session-state corruption, shell-execution timeouts, and secret leakage. Token-cost pressure is now an explicit engineering priority, with dedicated prompt-cache stabilization work landing in OpenClaw, LobsterAI, and IronClaw. **Maintainer review capacity — not contributor throughput — is emerging as the ecosystem's binding constraint.**

---

## 2. Activity Comparison

| Project | Issues updated (closed) | PRs updated (merged/closed) | Release status | Health score (0–10) |
|---|---|---|---|---|
| **OpenClaw** | 500 (57) | 500 (138) | None | **9.0** — highest throughput and close-rate in ecosystem; P1 backlog remains heavy |
| **IronClaw** | 38 (8) | 50 (32) | None; release PR stuck ~1 month | **8.5** — strong refactor velocity; P0 security leak and release stall drag score |
| **CoPaw (QwenPaw)** | 20 (6) | 43 (~5) | None | **8.0** — fast fix turnaround on critical bugs; first-time contributors active |
| **NanoBot** | 4 (2) | 16 (6) | None | **8.0** — small but exceptionally responsive; issues attract same-day fix PRs |
| **LobsterAI** | 4 (4) | 12 (11) | 2026.7.31 cut merged (shipping) | **7.5** — healthy post-release stabilization; stale sweep left UX merge status ambiguous |
| **ZeroClaw** | 50 (5) | 50 (13) | None | **7.0** — high throughput but 45/50 issues open; RFC decision queue is the bottleneck |
| **Moltis** | 2 (1) | 6 (2) | None | **7.0** — responsive to feature requests; three security PRs awaiting collective review |
| **NanoClaw** | 8 (0) | 10 (4) | v2.1.54 path restored | **6.5** — release unblocked, but security fixes and runtime PRs aging |
| **NullClaw** | 0 (0) | 1 (0) | None | **6.0** — zero defect backlog, healthy but low-velocity; sole PR pending 3 days |
| **Hermes Agent** | 50 (4) | 50 (0) | None | **5.5** — activity-heavy but **zero merges** in 24h signals review bottleneck |
| **PicoClaw** | 2 (0) | 3 (0) | None | **5.0** — no merges; backlog of channel/model PRs forming since late June |
| **ZeptoClaw** | 0 (0) | 0 (0) | None | **N/A** — no activity in window |

*Health score = weighted blend of throughput, merge responsiveness, backlog health, and stability posture.*

**Aggregate ecosystem output (24h): ~678 issues and ~731 PRs touched, ~215 PRs merged/closed.**

---

## 3. OpenClaw's Position

**Advantages over peers**
- **Order-of-magnitude community scale:** OpenClaw's 500 issues / 500 PRs per day exceeds the combined volume of all other projects in this report. The next tier (ZeroClaw, IronClaw, Hermes) operates at 50/50.
- **Reference-implementation status:** the only project explicitly framed as "core reference" — meaning other codebases (e.g., LobsterAI's `fix(openclaw)` PRs) track its behavior as a compatibility target.
- **Strongest triage machinery:** 57 issues and 138 PRs closed/merged in 24h — a 28% PR close rate — while Hermes closed 0 PRs and PicoClaw 0. Maintainers are demonstrably clearing the queue.
- **Architectural modernization, not just patching:** in-flight refactors for turn-lifecycle ownership (#117145), auto-reply/directive unification (#117143), and plugin descriptor consolidation (#117146) show platform-level cleanup alongside bug fixing.

**Technical approach differences**
- OpenClaw runs a **Node.js multi-channel gateway** with SQLite session storage and a channel-agnostic message pipeline — versus Rust single-binary architectures at IronClaw and ZeroClaw (tokio/ratatui tooling), a Python/AgentScope stack at CoPaw, and Go at PicoClaw.
- Its channel matrix (Telegram, Slack, Matrix, IRC, WebChat, Codex, voice) is the widest in the ecosystem; most peers specialize in one or two channels (NanoBot → WeChat, NanoClaw → iMessage, Moltis → Nostr/Buzz).

**Community size comparison**

| Metric (24h) | OpenClaw | Next largest |
|---|---|---|
| Issues touched | 500 | 50 (Hermes, ZeroClaw) |
| PRs touched | 500 | 50 (Hermes, ZeroClaw, IronClaw) |
| PRs merged/closed | 138 | 32 (IronClaw) |
| Distinct channels covered | 7+ | 3–4 |

OpenClaw's main structural risk is its **P1 reliability backlog** (duplicate writes, message loss, session wedges) — volume at scale surfaces disproportionately more edge cases, and users are vocal about regression fatigue.

---

## 4. Shared Technical Focus Areas

**1. Session-state durability & delivery guarantees** *(OpenClaw, NanoBot, Hermes, CoPaw, IronClaw)*
- Duplicate transcript writes, SQLite/JSONL fallback corruption, message loss, and session wedges dominate every large-project tracker.
- NanoBot is migrating to SQLite as sole session store (#5173); OpenClaw is closing snapshot-restore and livelock bugs (#113306, #115908); IronClaw regressed on Postgres capacity post-refactor (#6973).

**2. Credential security & redaction** *(OpenClaw, IronClaw, NanoClaw, Moltis, Hermes)*
- Masked secrets / raw API-key protection (OpenClaw #10659), log redaction (NanoClaw #3161), cross-user memory isolation (IronClaw #6900), pairing-signature verification (Moltis #1179), and persistence-boundary redaction gaps (Hermes #43666).
- A Moltis contributor captured the zeitgeist: *"I'd like to use Moltis, but I've got a couple of security fixes I'd like to get in before doing so."* Security review is now a pre-adoption gate.

**3. Prompt-cache stability & token-cost control** *(OpenClaw, LobsterAI, IronClaw, ZeroClaw)*
- LobsterAI's merged fixes (#2413/#2415) restored DeepSeek long-session cache hit rates from ~57% → ~100% by making live tool-result history byte-stable.
- IronClaw filed a P0 cache-instability set (#6984–#6987): missing `cache_control` breakpoints, prefix mutation by timestamps, mid-run tool-array mutation.
- OpenClaw users report 20–30% token waste from re-injected bootstrap files (#67419).

**4. Shell/tool-execution reliability** *(OpenClaw, CoPaw, ZeroClaw)*
- Timeouts for fd/ripgrep (OpenClaw #109707), `shell_command_timeout` bypass and orphaned subprocesses (CoPaw #6608/#6610), huge-stdout UI freezes (CoPaw #6589), per-execution shell confirmation policy (ZeroClaw #7155).

**5. Desktop & WebUI UX polish** *(Hermes, CoPaw, LobsterAI, NanoBot, PicoClaw)*
- Accidental composer drag, scroll-position loss, collapsed reasoning blocks, per-session model switching, bundled Python runtime, input-box CPU spikes, MIME-type loading failures on Windows.

**6. Runtime flexibility beyond Docker** *(NanoClaw — with echoes across all deployment-restricted users)*
- Native runner mode, Kubernetes runtime, Apple Container support; the strongest single feature cluster in the ecosystem this window.

**7. Provider/model diversity** *(NullClaw, Moltis, Hermes, NanoBot, CoPaw, ZeroClaw)*
- CLI-backed providers (grok-cli, codex-cli, gemini-cli, claude-cli), NIP-29/Buzz group chat, NVIDIA NIM, DeepSeek Responses API, Vertex AI auth, dynamic model discovery.

---

## 5. Differentiation Analysis

| Project | Core focus | Target users | Architecture |
|---|---|---|---|
| **OpenClaw** | Universal cross-channel assistant, ecosystem reference | General users, self-hosters, plugin developers | Node.js gateway + SQLite, widest channel matrix, plugin SDK |
| **ZeroClaw** | RFC-governed, security-and-observability-first platform | Advanced operators, security-conscious enterprises | Rust; Wasm plugin runtime, A2A, OTel, granular sandbox policy |
| **IronClaw** | Enterprise multi-tenant reliability; hosted MCP | Teams, migration path from legacy agents | Rust workspace; contract-crate extraction ("Reborn" refactor) |
| **Hermes** | Local inference + desktop + media (TTS/image gen) | Nous Research users, local-model enthusiasts | Python; MLX/OLMX local providers, Discord voice |
| **CoPaw** | AgentScope-ecosystem agent with memory lifecycle management | Chinese-market users (Feishu/WeChat), desktop | Python/AgentScope; Scroll context + ReMe memory |
| **NanoBot** | Lightweight Python assistant with superior WeChat/Weixin support | WeChat-centric users, WebUI fans | Python; SQLite session store |
| **NanoClaw** | Minimalist, security-focused; iMessage + emerging runtimes | Privacy-conscious, Apple-adjacent users | Minimal core; Docker-first but K8s/native/Apple Container in flight |
| **LobsterAI** | OpenClaw-compatible desktop product with cowork + DeepSeek optimization | Chinese desktop productivity users | OpenClaw-derived; cowork side-chat, prompt-cache tuning |
| **Moltis** | Nostr/Buzz-native group chat (agents + humans) | Crypto/nostr community, multi-agent teams | Rust; NIP-29, node pairing, security-hardening focus |
| **PicoClaw** | Channel breadth (Simplex, DeltaChat, IRC) | Chat-protocol enthusiasts | Go |
| **NullClaw** | Aggregator of local CLI providers | Users who prefer local auth via familiar CLIs | Spawn-per-request CLI pattern (codex/gemini/claude/grok) |
| **ZeptoClaw** | — | — | Idle in window |

The ecosystem is splitting into **two philosophies**: *gateway aggregators* (OpenClaw, NullClaw, NanoBot — connect many providers/channels to one agent) versus *embedded runtime platforms* (IronClaw, ZeroClaw, Hermes — own the execution, security, and memory model).

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapidly iterating, high throughput**
- **OpenClaw (9.0)** and **IronClaw (8.5)**: sustained high merge velocity with active architectural refactors. IronClaw is the most internally consistent (32 PRs merged, stacked WS1 workstreams); OpenClaw is the most externally impactful.

**Tier 2 — Healthy iteration**
- **CoPaw (8.0)**, **NanoBot (8.0)**, **LobsterAI (7.5)**: responsive maintainers, fast fix turnaround, healthy contributor mix. NanoBot's ratio of issues-to-same-day-fix-PRs is the best in the ecosystem.

**Tier 3 — Gated or stabilizing**
- **ZeroClaw (7.0)**: high PR throughput, but 45/50 touched issues remain open and the project itself tracks a "maintainer decision queue" (#8692) as its velocity bottleneck. Moltis (7.0) and NanoClaw (6.5) have solid pipelines but accumulating review lag on security-critical PRs.

**Tier 4 — Stalled or at risk**
- **Hermes (5.5)**: 50 PRs updated, **0 merged** — a clear maintainer-review stall despite high contributor energy; P1 workspace-hijack bug unfixed.
- **PicoClaw (5.0)**: no merges, PRs aging 3–5 weeks, no maintainer comments on top issues.
- **NullClaw (6.0)**: stable with an empty issue tracker, but essentially single-PR velocity.
- **ZeptoClaw**: dormant.

**Cross-cutting pattern:** three projects (ZeroClaw, Hermes, IronClaw) show that **community contribution is outrunning maintainer capacity** — the differentiator for contributor retention in the next quarter will be triage speed, not feature roadmap.

---

## 7. Trend Signals

**For AI agent developers and platform decision-makers:**

1. **Delivery guarantees are the new feature race.** Duplicate transcripts, lost replies, and session wedges appear in almost every tracker. Expect durable outbox patterns, idempotent transcripts, and crash-safe session stores to become table stakes — projects without them will bleed users on trust.

2. **Security is a pre-adoption gate, not a post-hoc label.** New users are auditing before deploying (Moltis #1179/#1180), cross-tenant memory leaks are P0 (IronClaw #6900), and credential masking has strong community support (OpenClaw #10659). Default-deny privilege separation (OpenClaw, Moltis #1170, ZeroClaw) is the direction of travel.

3. **Token cost is now a product feature.** Cache-stability fixes with measurable recovery (LobsterAI 57%→100% DeepSeek cache hit rate), bootstrap-file token waste (#67419), and per-model usage logging (#13219) show users are optimizing on cost as much as capability.

4. **Memory is splitting into two systems.** Conversation history vs. curated long-term memory is being separated by design (ZeroClaw #9048, OpenClaw multi-slot #88504, CoPaw ReMe). Agent memory is moving from a single context window toward structured, lifecycle-managed stores.

5. **Docker-only deployment is losing adopters.** Restricted enterprise clusters and host-tool workflows (tmux, headed browsers, macOS APIs) are driving demand for native/Kubernetes/Apple Container runtimes (NanoClaw) and CLI-mediated providers that sidestep sandboxing entirely (NullClaw).

6. **Long-session degradation is a universal complaint.** Empty responses at context limits (CoPaw #6601), destructive compress/reset loops on misclassified errors (Hermes #52261), and memory loss after extended use (CoPaw #6555) point to a shared need: **graceful, observable context management** rather than reactive compaction.

7. **Observability and interop are rising.** OTel conversation correlation (ZeroClaw #8933), Langfuse backends, hosted MCP registration (IronClaw #6930), A2A outbound calls (ZeroClaw #9106), and NIP-29 group chat (Moltis) signal that agents are becoming network citizens, not isolated chatboxes.

8. **Maintainer bandwidth is the ecosystem's critical resource.** Hermes' 0-merge day, ZeroClaw's decision queue, IronClaw's month-stale release PR, and PicoClaw's weeks-old unreviewed PRs all point to the same conclusion: **projects that invest in review/triage velocity will win the contributor war.** For developers choosing a base project, review latency is now as important as feature depth.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-01

## Today's Overview

NanoBot is in an active maintenance and feature-development cycle: 4 issues were updated in the last 24 hours (2 closed) and 16 PRs were updated (6 merged/closed, 10 still open). No new release was tagged. The main themes were Weixin/WeChat session recovery, the ongoing migration to SQLite session storage, platform compatibility fixes (Termux, Windows), and WebUI/UX bug fixes. Multiple contributors are actively landing p1/p2 fixes, which signals a healthy and responsive maintainer ecosystem.

## Releases

No new releases in this period.

## Project Progress

Six PRs were merged or closed in the last 24 hours:

- **[#5173 — feat(session): migrate session storage from JSONL to SQLite](https://github.com/HKUDS/nanobot/pull/5173)** — Major infrastructure step: SQLite becomes the sole runtime session store, with transactional JSONL import and rollback backups. This likely prepares the ground for more scalable session management.
- **[#5196 — fix(weixin): recover refreshed state after session expiry](https://github.com/HKUDS/nanobot/pull/5196)** — Fixes [#5195](https://github.com/HKUDS/nanobot/issues/5195); reloads persisted Weixin state after a paused session expires so refreshed login tokens are picked up.
- **[#4223 — fix(weixin): reload session state after pause expiry](https://github.com/HKUDS/nanobot/pull/4223)** — An older PR from June that was closed now; complements #5196 in addressing the Weixin token-expiry dead loop.
- **[#5192 — fix(slack): scope channel thread openers to their own session](https://github.com/HKUDS/nanobot/pull/5192)** — Prevents unrelated Slack threads from sharing the channel-wide session.
- **[#5193 — fix(webui): preserve user scroll ownership near tail](https://github.com/HKUDS/nanobot/pull/5193)** — Improves chat UX by respecting user scrolling near the live-tail boundary.
- **[#5189 — fix(config): install timezone data on all platforms](https://github.com/HKUDS/nanobot/pull/5189)** — Fixes Termux/minimal-Linux timezone failures by shipping `tzdata`.

## Community Hot Topics

- **[#5195 — Weixin re-scan QR login overwrites new token with old one](https://github.com/HKUDS/nanobot/issues/5195)** — The only issue with comments (2) in this batch. It describes a serious Weixin login bug where re-scanning the QR code in the WebUI leaves the channel with a stale token, triggering `errcode -14` and a 60-minute pause. The existence of two related fix PRs shows community and maintainer alignment.
- **[#5198 — Not possible to change models in a specific session](https://github.com/HKUDS/nanobot/issues/5198)** — A long-standing UX gap: users want a per-session model selector like SaaS AI UIs, not a global instance reconfiguration. This was opened in a bug report but is effectively a product/feature signal.
- **[#5190 — Module script loading fails with MIME type "text/plain"](https://github.com/HKUDS/nanobot/issues/5190)** — Affects Windows primarily due to registry-based MIME sniffing; a fix PR is already open.

No reactions were recorded on the listed items, and PR comment counts were not available, so issue engagement is the primary signal here.

## Bugs & Stability

Ranked by severity:

1. **Weixin token overwrite after QR re-login ([#5195](https://github.com/HKUDS/nanobot/issues/5195))** — High severity: causes immediate session expiration and a 60-minute channel pause. Fixed by [#5196](https://github.com/HKUDS/nanobot/pull/5196), with related fix [#4223](https://github.com/HKUDS/nanobot/pull/4223).
2. **Frontend module script MIME error on Windows ([#5190](https://github.com/HKUDS/nanobot/issues/5190))** — Blocks WebUI JavaScript loading. Fix PR **[#5191](https://github.com/HKUDS/nanobot/pull/5191)** is open.
3. **Termux config failure due missing timezone database ([#5187](https://github.com/HKUDS/nanobot/issues/5187))** — Fix merged in [#5189](https://github.com/HKUDS/nanobot/pull/5189).
4. **Per-session model switching broken ([#5198](https://github.com/HKUDS/nanobot/issues/5198))** — Bug/UX gap; no fix PR yet.
5. **Open fix PRs for stability:** [#5201](https://github.com/HKUDS/nanobot/pull/5201) tolerates malformed persisted session summaries; [#5200](https://github.com/HKUDS/nanobot/pull/5200) preserves exec `wait_for` targets across response truncation. These indicate ongoing hardening of session and tool execution logic.

## Feature Requests & Roadmap Signals

Several open PRs are strong candidates for upcoming releases:

- **[#5184 — feat(webui): add Quick Chat and Temporary Chat](https://github.com/HKUDS/nanobot/pull/5184)** — Adds persistent Quick Chat and ephemeral Temporary Chat as first-class WebUI modes.
- **[#5197 — feat(providers): support DeepSeek Responses API](https://github.com/HKUDS/nanobot/pull/5197)** — Routes `deepseek-v4-flash` through DeepSeek's native Responses API while preserving streaming and tool-calling behavior.
- **[#5194 — perf(webui): reduce JSONL session list overhead](https://github.com/HKUDS/nanobot/pull/5194)** — Optimizes `/api/sessions` for large session histories.
- **[#5199 — refactor(cli): narrow Pyright suppressions](https://github.com/HKUDS/nanobot/pull/5199)** — Code-health improvement.

Long-standing feature PRs still in backlog include session export/import/search/stats ([#1565](https://github.com/HKUDS/nanobot/pull/1565)) and a `nanobot skill status` CLI command ([#1319](https://github.com/HKUDS/nanobot/pull/1319)).

## User Feedback Summary

Real user pain points from this period:

- Weixin channel users need QR re-login to actually take effect without restarting the whole instance or hitting a long pause ([#5195](https://github.com/HKUDS/nanobot/issues/5195)).
- Users expect to be able to switch models per session from the UI or via `/model`, instead of only setting one primary model globally ([#5198](https://github.com/HKUDS/nanobot/issues/5198)).
- Windows users need correct JavaScript MIME types for the WebUI to load ([#5190](https://github.com/HKUDS/nanobot/issues/5190)).
- Termux/minimal Linux users want the project to work out of the box without a system timezone database ([#5187](https://github.com/HKUDS/nanobot/issues/5187)).

Satisfaction signals are indirect but positive: issues are attracting quick fix PRs, several from first-time or recent contributors, and core maintainers are closing high-priority items rapidly.

## Backlog Watch

The following PRs have been open for several months and carry `conflict` labels, meaning they likely need rebasing or maintainer decision:

- **[#1656 — fix(validation): handle None value in string schema validation](https://github.com/HKUDS/nanobot/pull/1656)** — Open since 2026-03-07.
- **[#1565 — feat(session): add session export, import, search and stats commands](https://github.com/HKUDS/nanobot/pull/1565)** — Open since 2026-03-05.
- **[#1319 — feat: add skill status command](https://github.com/HKUDS/nanobot/pull/1319)** — Open since 2026-02-28.

These are valuable user-facing additions that have not progressed recently. Given the project's current momentum, they may deserve maintainer attention or explicit closure guidance.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-01

## 1. Today's Overview
Hermes Agent saw very high activity in the last 24 hours: **50 issues updated** (46 open/active, 4 closed) and **50 PRs updated** (all open, 0 merged/closed). No new releases were published. The busiest topics were session-state and profile-isolation bugs, local-inference resource errors, Windows update stability, and Desktop UX issues, alongside a wave of new feature PRs for Vertex AI auth, Discord TTS, image-generation backends, and Codex improvements. The fact that **0 PRs were merged/closed** despite 50 updated suggests a possible maintainer review bottleneck rather than a lack of contribution.

## 2. Releases
**None.** There were no new releases, tags, or migration notes published in the 2026-08-01 window.

## 3. Project Progress
**Merged/closed PRs today: 0.**

Two visible closed issues in the data:
- [**#75737**](https://github.com/NousResearch/hermes-agent/issues/75737) — Feature request for per-subagent toolset restriction was closed.
- [**#50769**](https://github.com/NousResearch/hermes-agent/issues/50769) — Windows installer Python 3.12 fallback bug was closed.

Notable PRs actively advanced/updated today:

- [**#75764**](https://github.com/NousResearch/hermes-agent/pull/75764) — Adds MiniMax image-01 and StepFun step-image-edit-2 image generation backends.
- [**#75775**](https://github.com/NousResearch/hermes-agent/pull/75775) — Streams TTS into Discord voice channels while the model is still writing.
- [**#75760**](https://github.com/NousResearch/hermes-agent/pull/75760) — Bounds and persists tool results consistently across execution paths.
- [**#75761 → #75767**](https://github.com/NousResearch/hermes-agent/pull/75767) — Fix for same-profile Desktop image upload filename collisions using UUIDs.
- [**#75773**](https://github.com/NousResearch/hermes-agent/pull/75773) — Bootstrap safety guard: strips mismatched-Python-version site-packages from `sys.path`.
- [**#75771**](https://github.com/NousResearch/hermes-agent/pull/75771) — Salvages poll-loop guard and orphaned-pipe drain fix.
- [**#75770**](https://github.com/NousResearch/hermes-agent/pull/75770) — Refactors gateway session-resume authorization into a mixin.
- [**#70663**](https://github.com/NousResearch/hermes-agent/pull/70663) — Vertex AI API key / Express Mode auth support.
- [**#75325**](https://github.com/NousResearch/hermes-agent/pull/75325) — Conservative Discord voice barge-in.
- [**#75191**](https://github.com/NousResearch/hermes-agent/pull/75191) — Named custom Codex app-server provider support.
- [**#75549**](https://github.com/NousResearch/hermes-agent/pull/75549) — Shows active fallback route in `/status` and `/usage`.
- [**#71723**](https://github.com/NousResearch/hermes-agent/pull/71723) — Stops unsigned skills-index from installing dangerous skills as builtin.

## 4. Community Hot Topics
The most discussed issues in the last 24h:

- [**#52261**](https://github.com/NousResearch/hermes-agent/issues/52261) — **6 comments** — Local inference (oMLX/MLX) provider 400s are misclassified as `context_overflow`, triggering a destructive compress/reset loop. This is a top concern for local-resource users.
- [**#75598**](https://github.com/NousResearch/hermes-agent/issues/75598) — **5 comments** — Update problems on Windows: multiple conflicting gateways with different profiles, unstable after recent updates.
- [**#72776**](https://github.com/NousResearch/hermes-agent/issues/72776) — **5 comments** — **P1**: Session workspace is hijacked to an unrelated git repo whenever a tool-call enters any git directory.
- [**#75737**](https://github.com/NousResearch/hermes-agent/issues/75737) — **4 comments** — Per-subagent toolset restriction in `delegate_task`; subagents inherit all 21 toolsets, bloating prompts by thousands of tokens.
- [**#43666**](https://github.com/NousResearch/hermes-agent/issues/43666) — **4 comments** — Redaction gaps at persistence boundary: tool output file dumps, compaction blocks, DB URIs.
- [**#20717**](https://github.com/NousResearch/hermes-agent/issues/20717) — **4 comments, 2 👍** — Dynamic context pruning: manage stale context proactively instead of relying on reactive compression.
- [**#69161**](https://github.com/NousResearch/hermes-agent/issues/69161) — **4 comments, 1 👍** — Desktop feature request: collapse thinking/reasoning blocks by default.
- [**#70422**](https://github.com/NousResearch/hermes-agent/issues/70422) — **4 comments, 1 👍** — Desktop macOS: accidental composer drag/pop-out when selecting text.

Underlying needs: users want safer handling of local-inference failures, stable multi-profile/gateway behavior, deterministic session/workspace selection, less token waste in subagents, and much better Desktop UX polish.

PR comment counts were not surfaced in the data, but the most active PRs in terms of recent work are [**#75775**](https://github.com/NousResearch/hermes-agent/pull/75775), [**#75764**](https://github.com/NousResearch/hermes-agent/pull/75764), [**#75760**](https://github.com/NousResearch/hermes-agent/pull/75760), and [**#75767**](https://github.com/NousResearch/hermes-agent/pull/75767).

## 5. Bugs & Stability
The following bugs were updated in the last 24h, ranked roughly by severity:

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| **P1** | [**#72776**](https://github.com/NousResearch/hermes-agent/issues/72776) | Session workspace hijacked to unrelated git repo after any tool-call enters a git directory (Windows CLI/TUI). | None visible |
| **P2** | [**#52261**](https://github.com/NousResearch/hermes-agent/issues/52261) | Local inference provider 400s misclassified as `context_overflow` → destructive compress/reset loop. | None visible |
| **P2** | [**#75598**](https://github.com/NousResearch/hermes-agent/issues/75598) | Update instability, multiple conflicting gateways across profiles. | None visible |
| **P2** | [**#73060**](https://github.com/NousResearch/hermes-agent/issues/73060) | `/stop` discards only one queued message; FIFO overflow continues running. | None visible |
| **P2** | [**#75768**](https://github.com/NousResearch/hermes-agent/issues/75768) | Telegram typing indicator stuck indefinitely in multi-profile setup — v0.19.0 regression. | None visible |
| **P2** | [**#75724**](https://github.com/NousResearch/hermes-agent/issues/75724) | Full pre-update backup aborts when `HERMES_HOME` contains a non-SQLite `.db` file. | None visible |
| **P2** | [**#75761**](https://github.com/NousResearch/hermes-agent/issues/75761) | Same-profile desktop sessions can overwrite image uploads generated in the same second. | [**#75767**](https://github.com/NousResearch/hermes-agent/pull/75767) |
| **P2** | [**#75684**](https://github.com/NousResearch/hermes-agent/issues/75684) | Multiplex `/memory` and `/skills` use default profile home instead of routed profile. | None visible |
| **P2** | [**#70077**](https://github.com/NousResearch/hermes-agent/issues/70077) | Restore checkpoint fails with “session not found” after stopping a request and editing the prompt. | None visible |
| **P2** | [**#66084**](https://github.com/NousResearch/hermes-agent/issues/66084) | `_tui_need_npm_install()` compares against entire monorepo lockfile, effectively always returns True. | None visible |
| **P2** | [**#66392**](https://github.com/NousResearch/hermes-agent/issues/66392) | Linux/X11 `computer_use` CUA pointer can crash entire KDE Plasma/Qt session. | None visible |
| **P2** | [**#70422**](https://github.com/NousResearch/hermes-agent/issues/70422) | Desktop composer accidentally dragged/pop-out when selecting text. | None visible |
| **P2 security** | [**#36645**](https://github.com/NousResearch/hermes-agent/issues/36645) | `terminal` / `execute_code` bypasses `HERMES_WRITE_SAFE_ROOT`. | None visible |
| **P2 security** | [**#7484**](https://github.com/NousResearch/hermes-agent/issues/7484) | Session fixation via predictable session ID derivation in API server. | None visible |
| **P2 security** | [**#43666**](https://github.com/NousResearch/hermes-agent/issues/43666) | Redaction gaps at persistence boundary: passwords in state DB, tool-output dumps, compaction blocks. | None visible |
| **P3** | [**#75725**](https://github.com/NousResearch/hermes-agent/issues/75725) | MiniMax-M3 interleaved thinking stops after first tool-call turn. | None visible |
| **P3** | [**#72421**](https://github.com/NousResearch/hermes-agent/issues/72421) | Azure Foundry auxiliary calls fail with HTTP 401 when main provider uses Entra ID. | None visible |
| **P3** | [**#74248**](https://github.com/NousResearch/hermes-agent/issues/74248) | Codex app-server final agent message delivered twice on Discord. | Related: [**#69457**](https://github.com/NousResearch/hermes-agent/pull/69457) |

## 6. Feature Requests & Roadmap Signals
Strong roadmap signals in the last 24h:

- [**#20717**](https://github.com/NousResearch/hermes-agent/issues/20717) — Dynamic Context Pruning: move from reactive compression to proactive stale-context management. P3, `needs-decision`, 2 👍.
- [**#69161**](https://github.com/NousResearch/hermes-agent/issues/69161) — Desktop setting to collapse thinking/reasoning blocks by default. 1 👍.
- [**#19128**](https://github.com/NousResearch/hermes-agent/issues/19128) — Add `qwen3.6-flash`, `deepseek-v4-flash`, and `deepseek-v4-pro` for Alibaba provider.
- [**#75737**](https://github.com/NousResearch/hermes-agent/issues/75737) — Per-subagent toolset restriction — closed, but shows strong demand for reducing subagent prompt bloat.
- [**#69203**](https://github.com/NousResearch/hermes-agent/issues/69203) — Discord adapter: outbound `@Name` → `<@id>` mention resolution.
- [**#73990**](https://github.com/NousResearch/hermes-agent/issues/73990) — Desktop: preserve scroll position when sending a message while reading history.

Likely next-version candidates based on fresh, targeted PR activity:
- [**#75764**](https://github.com/NousResearch/hermes-agent/pull/75764) — MiniMax and StepFun image-generation backends.
- [**#75767**](https://github.com/NousResearch/hermes-agent/pull/75767) — UUID-based image upload filenames.
- [**#75773**](https://github.com/NousResearch/hermes-agent/pull/75773) — Python site-packages bootstrap safety guard.
- [**#75774**](https://github.com/NousResearch/hermes-agent/pull/75774) — Desktop voice settings cleanup.
- [**#75775**](https://github.com/NousResearch/hermes-agent/pull/75775) — Streaming TTS into Discord voice channels.

## 7. User Feedback Summary
- **Local-inference users** are hitting a dangerous failure mode: provider resource errors are mistaken for context overflow, causing unnecessary compression or resets ([#52261](https://github.com/NousResearch/hermes-agent/issues/52261)).
- **Windows users** report update-related instability, broken backups, and conflicting gateway processes ([#75598](https://github.com/NousResearch/hermes-agent/issues/75598), [#75724](https://github.com/NousResearch/hermes-agent/issues/75724)).
- **Power users / subagent users** are frustrated by token bloat: subagents inherit all 21 toolsets, even for simple research tasks ([#75737](https://github.com/NousResearch/hermes-agent/issues/75737)).
- **Desktop UX** is a recurring pain point: accidental composer pop-out, scroll jumps, and expanded reasoning blocks causing layout reflow ([#70422](https://github.com/NousResearch/hermes-agent/issues/70422), [#73990](https://github.com/NousResearch/hermes-agent/issues/73990), [#69161](https://github.com/NousResearch/hermes-agent/issues/69161)).
- **Memory plugin users** report configuration and scoping issues: Honcho ignoring `baseUrl`, mem0 ignoring `gateway_session_key`, and false `hermes doctor` warnings ([#43800](https://github.com/NousResearch/hermes-agent/issues/43800), [#75708](https://github.com/NousResearch/hermes-agent/issues/75708), [#75647](https://github.com/NousResearch/hermes-agent/issues/75647)).
- Overall sentiment skews **frustrated by regressions but enthusiastic about feature velocity**, especially around TTS, image generation, provider auth, and Codex integration.

## 8. Backlog Watch
Older issues/PRs still open and needing maintainer attention:

- [**#7484**](https://github.com/NousResearch/hermes-agent/issues/7484) — Session fixation via predictable session ID derivation (open since Apr 11, P2 security).
- [**#19128**](https://github.com/NousResearch/hermes-agent/issues/19128) — Alibaba provider model additions (open since May 3, P3).
- [**#20717**](https://github.com/NousResearch/hermes-agent/issues/20717) — Dynamic Context Pruning (open since May 6, P3, `needs-decision`).
- [**#36645**](https://github.com/NousResearch/hermes-agent/issues/36645) — `terminal`/`execute_code` bypasses `HERMES_WRITE_SAFE_ROOT` (open since Jun 1, P2 security).
- [**#43666**](https://github.com/NousResearch/hermes-agent/issues/43666) — Redaction gaps at persistence boundary (open since Jun 10, P2 security).
- [**#29897**](https://github.com/NousResearch/hermes-agent/pull/29897) — Refuse `config set` on invalid YAML (open since May 21, P2).
- [**#38938**](https://github.com/NousResearch/hermes-agent/pull/38938) — Omit `mcp-protocol-version` header on MCP initialize request (open since Jun 4, P2).
- [**#45888**](https://github.com/NousResearch/hermes-agent/pull/45888) — Responses API path missing guarded approval wiring (open since Jun 14, P2).
- [**#58043**](https://github.com/NousResearch/hermes-agent/pull/58043) — Auto-discovery registry mappings for Mistral, Cohere, DeepInfra, SiliconFlow (open since Jul 4, P3).

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-08-01

## 1. Today's Overview
PicoClaw saw moderate activity in the last 24 hours: 2 open issues and 3 open pull requests were updated, while no new releases or merges occurred. The project remains healthy with active user engagement, but a clear backlog is forming—several PRs have been open for weeks without maintainer review. The existing work centers on expanding channel support, improving model fallback configuration, and fixing a frontend performance bug. No regressions or critical stability issues were reported in this window.

## 2. Releases
No new releases were published during this period.

## 3. Project Progress
No pull requests were merged or closed in the last 24 hours. However, three open PRs saw recent updates and represent the current in-flight work:

- **#3222** – `refactor(deltachat): cleanup implementation, documentation -200LOC` – [PR link](https://github.com/sipeed/picoclaw/pull/3222)  
- **#3193** – `Added simplex channel type` – [PR link](https://github.com/sipeed/picoclaw/pull/3193)  
- **#3200** – `feat(models): add configurable default fallback chain` – [PR link](https://github.com/sipeed/picoclaw/pull/3200)  

These PRs have not yet been merged, but their continued updates indicate active development.

## 4. Community Hot Topics
The most active issue in the last 24 hours is:

- **#3287** – `[Feature] Better support long messages in IRC` – [Issue link](https://github.com/sipeed/picoclaw/issues/3287)  
  - 2 comments | Created 2026-07-22 | Updated 2026-07-31  
  - **Analysis**: Users need IRCv3 long messages to be treated as a single cohesive message, despite the protocol’s 512-byte and newline-based splitting. This indicates that the current IRC integration truncates or mishandles long messages, which is a real pain point for chat-heavy users.

Also drawing attention:

- **#3292** – `[BUG] CPU usage too high when focus on input box in chat interface` – [Issue link](https://github.com/sipeed/picoclaw/issues/3292)  
  - 1 comment | Created 2026-07-24 | Updated 2026-07-31  
  - **Analysis**: The web chat interface spikes CPU usage when the input box is focused, particularly in Firefox. This is a clear performance complaint with actionable environment details.

## 5. Bugs & Stability
- **#3292** – High CPU usage when focusing the input box in the chat interface.  
  - **Severity**: Medium (performance degradation, no crash or data loss)  
  - **Details**: PicoClaw 0.3.1, Go 1.26, deepseek-v4-flash, Firefox on Debian/Linux.  
  - **Status**: No fix PR currently open. [Issue link](https://github.com/sipeed/picoclaw/issues/3292)

No crashes, regressions, or other stability issues were reported in the last 24 hours.

## 6. Feature Requests & Roadmap Signals
The clearest feature request is **#3287** for proper IRC long-message handling, which likely targets better protocol compatibility and message integrity.  
Pending open PRs also signal near-term roadmap directions:

- **#3193** – Adding the Simplex channel type, expanding PicoClaw’s supported messaging networks.  
- **#3200** – Configurable default fallback chain for models in the web UI with backend persistence, improving user control over AI model selection.  
- **#3222** – DeltaChat cleanup and simplification, including better secrets handling and updated relay documentation.

If maintainers review and merge these PRs, the next minor version could introduce new channel support and enhanced model configuration options.

## 7. User Feedback Summary
Users are actively exercising the web UI and IRC integration. The main pain points raised are:

- Long IRC messages being split/truncated beyond the 512-byte protocol limit.  
- High CPU usage in the web chat interface when the input box is focused, making the UI less responsive.

There is also positive community engagement through code contributions (Simplex support, model fallback chains, DeltaChat improvements). The lack of recent merges may lead to contributor frustration, but no explicit dissatisfaction has been voiced in the current threads.

## 8. Backlog Watch
The following PRs and issues may need maintainer attention:

- **PR #3193** – Simplex channel support, open since 2026-06-27 – [PR link](https://github.com/sipeed/picoclaw/pull/3193)  
- **PR #3200** – Configurable default model fallback chain, open since 2026-07-01 – [PR link](https://github.com/sipeed/picoclaw/pull/3200)  
- **PR #3222** – DeltaChat refactor, open since 2026-07-03 – [PR link](https://github.com/sipeed/picoclaw/pull/3222)  
- **Issue #3292** – High CPU bug, no maintainer comment yet – [Issue link](https://github.com/sipeed/picoclaw/issues/3292)  
- **Issue #3287** – IRC long-message feature request, no maintainer reply – [Issue link](https://github.com/sipeed/picoclaw/issues/3287)  

These items represent the most significant outstanding work and would benefit from review, triage, or explicit scheduling.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-01

## 1. Today's Overview

NanoClaw shows steady, healthy activity: 8 issues and 10 PRs were touched in the last 24 hours, with 4 PRs closed/merged and no new releases published. Development centers on two themes — expanding runtime flexibility beyond Docker (Kubernetes, Apple Container, native mode) and hardening security boundaries (origin validation, secret redaction). The community is vocal about deployment constraints: a recurring cluster of issues asks for Docker-free operation in restricted enterprise environments. A high-severity Telegram pairing bug landed today, and the release path for v2.1.54 was restored, suggesting a version cut is imminent.

## 3. Project Progress

Four PRs were closed/merged in the last 24h:

- **[#3163](https://github.com/nanocoai/nanoclaw/pull/3163) — fix(release): restore the v2.1.54 release path** (closed). Release engineering is being unblocked; a v2.1.54 cut is likely the next milestone.
- **[#3076](https://github.com/nanocoai/nanoclaw/pull/3076) — feat(imessage): unified local+hosted adapter targeting spectrum-ts v11** (closed). The iMessage channel story advances; a follow-up PR (#3164) supersedes #2999 with a working hosted registration flow.
- **[#3165](https://github.com/nanocoai/nanoclaw/pull/3165) — Codex/copilot changes** (closed).
- **[#1678](https://github.com/nanocoai/nanoclaw/pull/1678) — docs(skills): update voice transcription skills for Telegram + Linux** (closed). Quality-of-life doc fix expanding Whisper transcription beyond WhatsApp.

Still open and actively moving: **[#3161](https://github.com/nanocoai/nanoclaw/pull/3161)** (redact secrets from host structured logs) and **[#2651](https://github.com/nanocoai/nanoclaw/pull/2651)** (validate pending-question response origin) — both security fixes awaiting merge.

## 4. Community Hot Topics

- **[#1184](https://github.com/nanocoai/nanoclaw/issues/1184) — Challenges deploying NanoClaw in restricted K8s environments (Sealos)** — 3 comments, 1 👍. A March question still drawing attention; the author praises the minimalist, lightweight, secure design but is blocked by Docker requirements in a managed K8s environment.
- **[#1732](https://github.com/nanocoai/nanoclaw/issues/1732) — feat: native runner mode — bypass Docker for host-tool access** — 3 comments. Highlights a real user segment (tmux-based coding, headed browsers, macOS APIs) for whom container isolation is a hard blocker.
- **[#1225](https://github.com/nanocoai/nanoclaw/issues/1225) — Run it without Docker** — 2 comments. A straightforward question from a Windows/Linux user with no Docker available.
- **[#2354](https://github.com/nanocoai/nanoclaw/issues/2354) — Kubernetes container runtime for agent spawning** — 1 comment, 1 👍.

**Underlying need:** A meaningful portion of users cannot run Docker in their environments (restricted clusters, no Docker installed) or need direct host integration. The demand for alternative runtimes — native, K8s, Apple Container — is the clearest roadmap signal in the data.

## 5. Bugs & Stability

Ranked by severity:

1. **High — [#3162](https://github.com/nanocoai/nanoclaw/issues/3162) Telegram pairing silently broken if boot-time getMe fails** (2026-07-31). A single failed HTTP call at channel start permanently locks out pairing with zero user-visible explanation. Verified on the `channels` branch at 6ee516ad. No fix PR yet.
2. **Security — [#2923](https://github.com/nanocoai/nanoclaw/issues/2923) ask_user_question card can be defaced by a forged click before origin authz** (2026-07-04). Display/integrity spoof even though the response is correctly rejected. Related fix PR **[#2651](https://github.com/nanocoai/nanoclaw/pull/2651)** remains open.
3. **Medium — [#2589](https://github.com/nanocoai/nanoclaw/issues/2589) Apple Container: `host.docker.internal` in OneCLI proxy URL doesn't resolve** (2026-05-22). Apple Container lacks `--add-host` support, blocking the OneCLI proxy path.
4. **Medium — [#2588](https://github.com/nanocoai/nanoclaw/issues/2588) skill/apple-container branch substantially out of sync with mainline** (2026-05-22). `/convert-to-apple-container` fails immediately due to API drift and the bun/tsc runtime change.

Mitigating activity: **[#3161](https://github.com/nanocoai/nanoclaw/pull/3161)** (log secret redaction) and **[#2651](https://github.com/nanocoai/nanoclaw/pull/2651)** (origin validation) are open security-fix PRs; the restored release path (#3163) should speed delivery of pending fixes.

## 6. Feature Requests & Roadmap Signals

- **[#1732](https://github.com/nanocoai/nanoclaw/issues/1732) — Native runner mode** (bypass Docker for host-tool access). The most prominent feature request in the runtime-flexibility cluster.
- **[#2354](https://github.com/nanocoai/nanoclaw/issues/2354) — Kubernetes container runtime** for per-session agent pods on a user-provided cluster.
- **[#2809](https://github.com/nanocoai/nanoclaw/pull/2809) — Apple Container runtime + remote OneCLI gateway** (open, env-gated `CONTAINER_RUNTIME` abstraction). If merged, it establishes the architecture that K8s and native modes would build on.
- **[#3164](https://github.com/nanocoai/nanoclaw/pull/3164) — Hosted iMessage (Photon) registration flow**, superseding #2999; iMessage is clearly an active channel priority.
- **[#3041](https://github.com/nanocoai/nanoclaw/pull/3041) — Dial channel adapter (SMS + AI voice calls)**, open since mid-July.

**Prediction:** The immediate next release (v2.1.54, per #3163) will likely carry the iMessage adapter work and possibly the `CONTAINER_RUNTIME` abstraction (#2809). The Docker-less theme (native runner, K8s) is the strongest mid-term roadmap candidate, but needs maintainer triage to move forward.

## 7. User Feedback Summary

- **Satisfaction:** Users explicitly value NanoClaw's minimalist, lightweight, secure positioning — framed as a "streamlined alternative to bloated agent frameworks" (#1184).
- **Pain point — deployment flexibility:** The Docker-only model is the top complaint. Users are blocked on Windows/Linux without Docker (#1225), in restricted K8s/Sealos clusters (#1184), and for host-tool workflows requiring direct integration (#1732).
- **Pain point — Apple Container:** Two open issues (#2588, #2589) describe a broken experience: branch drift and unresolved host networking.
- **Trust signals:** The community is security-aware and contributing — users filed the card-defacement (#2923) and Telegram pairing (#3162) issues, and submitted hardening PRs (#2651, #3161). The silent Telegram pairing failure is the kind of bug most likely to erode trust if not fixed quickly.

## 8. Backlog Watch

Items overdue for maintainer attention:

- **[#1184](https://github.com/nanocoai/nanoclaw/issues/1184)** (2026-03-17, Question, 3 comments) — K8s/Sealos deployment question unanswered since March; an official response or docs would help.
- **[#1225](https://github.com/nanocoai/nanoclaw/issues/1225)** (2026-03-18, Question) — "Run it without Docker" remains unresolved; directly tied to the most-requested feature cluster.
- **[#1732](https://github.com/nanocoai/nanoclaw/issues/1732)** (2026-04-10, Feature) — Native runner mode proposal with no visible maintainer response.
- **[#2354](https://github.com/nanocoai/nanoclaw/issues/2354)** (2026-05-08, Feature, 1 👍) — Kubernetes container runtime request awaiting triage.
- **[#2588](https://github.com/nanocoai/nanoclaw/issues/2588) / [#2589](https://github.com/nanocoai/nanoclaw/issues/2589)** (2026-05-22) — Apple Container branch drift and networking issues open for over two months.
- **[PR #2651](https://github.com/nanocoai/nanoclaw/pull/2651)** (2026-05-30, security fix) — Pending-question origin validation, tagged [Hardening], open since May and directly addresses #2923.
- **[PR #2809](https://github.com/nanocoai/nanoclaw/pull/2809)** (2026-06-18) — Apple Container runtime + remote OneCLI gateway; a large feature PR with no comments and no maintainer activity in six weeks.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-01

## 1. Today's Overview

NullClaw experienced minimal activity on August 1, 2026, with zero issues updated, a single open PR touched, and no new releases published. The only item of movement was PR #981, an open contribution adding an optional `grok-cli` provider that delegates to the local xAI Grok CLI. No bugs, regressions, or user-reported issues surfaced in the last 24 hours. The project appears stable but low-velocity, with community energy concentrated on broadening provider support rather than fixing defects. Maintainers should note that #981 has been pending review since July 29.

## 2. Releases

No new releases were published in the reporting window. This section is omitted.

## 3. Project Progress

No PRs were merged or closed in the last 24 hours, so no features were officially advanced into the codebase today. However, PR #981 remains actively developed:

- **#981 — [OPEN] feat(provider): add grok-cli provider for xAI Grok CLI** ([link](https://github.com/nullclaw/nullclaw/pull/981))  
  Author: valonmulolli · Created 2026-07-29 · Updated 2026-07-31  
  Adds a new CLI-based provider following the existing spawn-per-request pattern used by `codex-cli`, `gemini-cli`, and `claude-cli`. The provider is optional and requires a locally installed and authenticated `grok` CLI.

## 4. Community Hot Topics

There is only one active discussion thread, and it carries zero comments or reactions — so no consensus-forming debates are underway.

- **#981 — grok-cli provider** ([link](https://github.com/nullclaw/nullclaw/pull/981))  
  Underlying need: Users want a consistent, CLI-mediated integration with xAI's Grok models that mirrors the established pattern for OpenAI Codex, Google Gemini, and Anthropic Claude. The PR signals demand for model-provider diversity without requiring API-key handling inside NullClaw itself — the local CLI handles authentication. It also implies community confidence in the existing provider abstraction, since a contributor was able to replicate the pattern with minimal friction.

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported in the last 24 hours. The issue tracker is currently empty (0 open, 0 closed), indicating no active defect backlog. Stability assessment: no new risks introduced.

## 6. Feature Requests & Roadmap Signals

The sole feature signal is PR #981, which proposes **xAI Grok support** via a CLI-backed provider ([link](https://github.com/nullclaw/nullclaw/pull/981)). Given that the PR is complete, follows an established code pattern, and has been open for three days, a merge in the next release is plausible. If merged, expect `grok-cli` to ship alongside the existing `codex-cli` / `gemini-cli` / `claude-cli` set. The broader trajectory — four CLI providers now in motion — points toward the project becoming an aggregator of local-LLM CLIs rather than a direct API gateway, a positioning that bears watching.

## 7. User Feedback Summary

Direct user feedback data is extremely limited today. The only artifact is PR #981, from which two pain points/use cases can be inferred:

- **Toolchain isolation**: Users prefer delegating authentication to familiar local CLIs (e.g., `grok`, `claude`, `codex`) rather than managing credentials inside NullClaw.
- **Provider parity**: The contributor specifically matched the existing `codex-cli` / `gemini-cli` / `claude-cli` implementations, implying an expectation that all major model providers should have equivalent first-class support.

No satisfaction/dissatisfaction signals (reactions, comments) are available to gauge sentiment further.

## 8. Backlog Watch

No long-unanswered issues exist — the tracker holds zero issues. However, PR #981 ([link](https://github.com/nullclaw/nullclaw/pull/981)) has been open for three days without recorded maintainer interaction. While not yet a "long" wait, timely review is advisable to keep contributor momentum healthy, especially since the PR's pattern has been validated by three prior providers and likely poses low integration risk.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-01

## 1. Today's Overview
Exceptionally high activity: **38 issues and 50 PRs updated in the last 24 hours**, with 8 issues closed and 32 PRs merged/closed. The dominant theme is the target-architecture ("Reborn") Wave 1 refactor: contract-extraction workstreams WS1.1–WS1.3 merged and WS1.4–WS1.7 progressing as a stacked PR chain. A new P0/P1 "pi-harness adoption program" landed today, targeting prompt-cache stability, token accounting, and compaction — signaling a performance/cost optimization push. Several unresolved security findings remain open, including a P0 cross-user memory leak (issue [#6900](https://github.com/nearai/ironclaw/issues/6900)) and multi-tenant metadata exposure (issue [#6778](https://github.com/nearai/ironclaw/issues/6778)). No new releases shipped; one release PR ([#5598](https://github.com/nearai/ironclaw/pull/5598)) has been pending for nearly a month.

## 2. Releases
**None.** No new releases in this window. Note: the long-pending `chore: release` PR ([#5598](https://github.com/nearai/ironclaw/pull/5598)) would ship breaking changes in `ironclaw_common` 0.4.2→0.5.0 and `ironclaw_skills` 0.3.0→0.4.0, plus a compatible `ironclaw_safety` 0.2.2→0.2.3 (see [Backlog Watch](#8-backlog-watch)).

## 3. Project Progress
**Merged/closed today (32 PRs):**

**Target-architecture refactor — WS1 wave (BenKurrek):**
- [#6967](https://github.com/nearai/ironclaw/pull/6967) (WS1.1) — completed turn vocabulary in `host_api`; retired the turns shims.
- [#6975](https://github.com/nearai/ironclaw/pull/6975) (WS1.2) — extracted `ironclaw_loop_contracts` and flipped `ironclaw_agent_loop` onto it.
- [#6977](https://github.com/nearai/ironclaw/pull/6977) (WS1.3) — extracted `ironclaw_extension_contracts`; closed the dual import paths.
- [#6979](https://github.com/nearai/ironclaw/pull/6979) — docs-only reconciliation of target-architecture docs with the merged hosted-MCP work.

**Feature work:**
- [#6930](https://github.com/nearai/ironclaw/pull/6930) — **Hosted MCP server registration** (henrypark133): tenant-runtime registration with automatic no-auth/bearer/OAuth detection, wired into the full extension install→activation→removal lifecycle. Large: 153 files, +15,002/−1,818.

**WebUI fixes (italic-jinxin):**
- [#6908](https://github.com/nearai/ironclaw/pull/6908) — paginated the admin users list (fixes [#6903](https://github.com/nearai/ironclaw/issues/6903)).

**Stability/security (zmanian):**
- [#4022](https://github.com/nearai/ironclaw/pull/4022) — HTTP response errors are recoverable again, not run-aborting output-contract violations (regression from #4014).
- [#3942](https://github.com/nearai/ironclaw/pull/3942) — PilotAllowlist enum + caller-level error-branch tests.
- [#3952](https://github.com/nearai/ironclaw/pull/3952) — TOCTOU-hardened `LocalFilesystem` via fd-relative `openat2`/`O_NOFOLLOW`.

**Dependencies:**
- [#6932](https://github.com/nearai/ironclaw/pull/6932) — 34-update "everything-else" group bump (dependabot).

**Still open in the same wave:** [#6980](https://github.com/nearai/ironclaw/pull/6980) (WS1.4 product contracts + adapter half), [#6981](https://github.com/nearai/ironclaw/pull/6981) (WS1.5 sealed evidence minting), [#6982](https://github.com/nearai/ironclaw/pull/6982) (WS1.6/1.7 ironclaw_common narrowing + product→runner edge).

## 4. Community Hot Topics
- **[#6284 — Error-recoverability endgame epic](https://github.com/nearai/ironclaw/issues/6284)** — 15 comments (most-active issue). Defines a five-part recoverability contract: the run survives the error, the model sees it with cause *and* remedy, the model gets a turn to act, and no non-success is ever misreported. Signals deep investment in agent-run reliability.
- **[#6963 — Path-keyed CI gates tracking](https://github.com/nearai/ironclaw/issues/6963)** — 5 comments. Eight CI/dev-gate defects that assume the flat `crates/ironclaw_*` tree shape; these will block the first `git mv` toward the target architecture. Filed because "a checklist row is weak tracking for eight discovered defects."
- **[#6524 — Hermetic capability and journey testing platform epic](https://github.com/nearai/ironclaw/issues/6524)** — 4 comments. Addresses whether every supported capability and critical user journey has deterministic, meaningful coverage.
- **[#6940 — IronHub skill CTA 404s](https://github.com/nearai/ironclaw/issues/6940)** — 2 comments. High-visibility user-facing bug: the CTA is broken for *every* skill.
- **[#6941 — Skills subset epic](https://github.com/nearai/ironclaw/issues/6941)** — new epic splitting the oversized [#6565](https://github.com/nearai/ironclaw/issues/6565) into a completable scope; pairs with PR [#6938](https://github.com/nearai/ironclaw/pull/6938) (*"the model chooses the skill, not a keyword scorer"*).

**PR-side attention:** the WS1 stacked chain (#6967→#6975→#6977→#6980→#6981→#6982) is the most active refactor conversation. The author is candidly documenting where the plan "did not survive contact with the code" (e.g., five of WS1.6's six clauses invalid in [#6982](https://github.com/nearai/ironclaw/pull/6982)).

**Underlying needs:** reliability/determinism, CI resilience during refactoring, model-driven skills UX, and multi-tenant security.

## 5. Bugs & Stability
Ranked by severity:

- **P0 — Cross-user memory leak** ([#6900](https://github.com/nearai/ironclaw/issues/6900)): shared-channel traffic collapses all users into the operator's memory namespace. No fix PR yet; tagged `suggested_P0`/`security`.
- **P0 — Prompt-cache instability wave** ([#6984](https://github.com/nearai/ironclaw/issues/6984), [#6985](https://github.com/nearai/ironclaw/issues/6985), [#6986](https://github.com/nearai/ironclaw/issues/6986), [#6987](https://github.com/nearai/ironclaw/issues/6987)): no explicit Anthropic `cache_control` breakpoints; prompt prefix mutated by nudges/timestamps/per-run retrieval; tool array mutated mid-run by progressive disclosure; no regression test pinning byte-identical prefixes. Filed Aug 1 (pi-harness P0 set); no fixes landed yet.
- **High — Postgres API capacity regression** (PR [#6973](https://github.com/nearai/ironclaw/pull/6973)): p95 3.74s → 12.0s, throughput 6.86 → 2.57 ops/sec after the row-native process journal (#6696); `send_message` p95 went 275ms → 4.78s.
- **High — libSQL write pathology** ([#6974](https://github.com/nearai/ironclaw/issues/6974)): tool-heavy stress cases sit at p95 37–135s post-#6696; split out of #6973 because the suite now completes but far exceeds the 2.5s p95 target.
- **Medium — Token accounting bug** ([#6989](https://github.com/nearai/ironclaw/issues/6989)): `ModelWorkRequest::for_assistant` estimates input tokens from the content *reference string* length, not the referenced content.
- **Medium — Hosted-MCP cross-user metadata exposure** ([#6778](https://github.com/nearai/ironclaw/issues/6778)): discovered tool catalogs published per extension id, not per installation, on multi-principal servers.
- **Medium — Shared home directory / workspace privacy** ([#6866](https://github.com/nearai/ironclaw/issues/6866)): all users see all workspaces.
- **Medium — CI structural failures**: [#6978](https://github.com/nearai/ironclaw/issues/6978) (`workflow_dispatch` runs always red the Tests (Reborn) roll-up because critical-mutation is skipped-but-disallowed) and [#6947](https://github.com/nearai/ironclaw/issues/6947) (`classify-test-scope.sh` mis-buckets `ironclaw_product` as legacy-only).
- **Low/UX**: [#6940](https://github.com/nearai/ironclaw/issues/6940) IronHub CTA 404 for all skills; [#6972](https://github.com/nearai/ironclaw/issues/6972) new-account email auth broken; [#6976](https://github.com/nearai/ironclaw/issues/6976) `service install` does not enable systemd lingering, breaking unattended VM/headless operation.

**Fixed:** [#6903](https://github.com/nearai/ironclaw/issues/6903) (admin pagination, via [#6908](https://github.com/nearai/ironclaw/pull/6908)); [#6906](https://github.com/nearai/ironclaw/pull/6906) removes fabricated project metrics; [#4022](https://github.com/nearai/ironclaw/pull/4022) restores recoverable HTTP errors.

## 6. Feature Requests & Roadmap Signals
- **Migration tool from legacy Hermes/Openclaw** ([#6939](https://github.com/nearai/ironclaw/issues/6939)) — high switching costs are blocking adoption; a strong near-term lever.
- **`hub` alias for `ironhub` CLI** ([#6983](https://github.com/nearai/ironclaw/issues/6983)) — small, low-risk; likely to land soon.
- **"Tools" vs "Extensions" terminology standardization** ([#6971](https://github.com/nearai/ironclaw/issues/6971)) — product-model clarity driven by genuine user confusion.
- **"Reborn" → "Ironclaw 1.0" rebranding** in product surfaces ([#6854](https://github.com/nearai/ironclaw/issues/6854)) — likely bundled with the 1.0 naming push.
- **Hosted MCP registration** ([#6930](https://github.com/nearai/ironclaw/pull/6930), merged) is the largest landed feature; #6778 is the known follow-up gap.
- **Skills direction**: [#6941](https://github.com/nearai/ironclaw/issues/6941) + [#6938](https://github.com/nearai/ironclaw/pull/6938) point to model-driven skill activation in the next release.
- **Cache/cost engineering**: the pi-harness P0 set ([#6984](https://github.com/nearai/ironclaw/issues/6984)–[#6987](https://github.com/nearai/ironclaw/issues/6987)), real window-derived compaction budgets ([#6988](https://github.com/nearai/ironclaw/issues/6988)), and cache-safe summarization ([#6990](https://github.com/nearai/ironclaw/issues/6990)) indicate a performance/cost-focused next version.

## 7. User Feedback Summary
- **Broken CTA**: IronHub skill links resolve to a 404 for every skill ([#6940](https://github.com/nearai/ironclaw/issues/6940)); the reporter was unsure who owns the property.
- **Auth failure**: new email-based accounts cannot authenticate after signup ([#6972](https://github.com/nearai/ironclaw/issues/6972)).
- **Privacy concern** (reported by tobias.holenstein): a single shared home directory exposes all users' workspaces to each other ([#6866](https://github.com/nearai/ironclaw/issues/6866)).
- **Terminology confusion**: users asked whether "Tools" vs "Extensions" should be unified, noting tools and channels currently appear to be extension types ([#6971](https://github.com/nearai/ironclaw/issues/6971)).
- **Branding inconsistency**: extension descriptions still use "Reborn" instead of "Ironclaw 1.0" ([#6854](https://github.com/nearai/ironclaw/issues/6854)).
- **Migration friction**: legacy Hermes/Openclaw users resist starting over; there is no way to carry over setup, config, or memory ([#6939](https://github.com/nearai/ironclaw/issues/6939)).
- **Unattended operation**: Debian/Proxmox VM setup fails to run reliably without systemd lingering enabled ([#6976](https://github.com/nearai/ironclaw/issues/6976)).

Overall: users are engaged and reporting concrete, reproducible issues; friction clusters around auth, branding consistency, multi-user isolation, and legacy onboarding.

## 8. Backlog Watch
- **[#5598 — Release PR](https://github.com/nearai/ironclaw/pull/5598)** — open since Jul 3 (~1 month) with breaking changes queued (`ironclaw_common` 0.5.0, `ironclaw_skills` 0.4.0). A release stuck this long blocks downstream consumers from receiving fixes; needs escalation.
- **[#6778 — Hosted-MCP cross-user metadata exposure](https://github.com/nearai/ironclaw/issues/6778)** — security-relevant, open since Jul 28 with only 1 comment; needs a triage/fix owner.
- **[#6831 — Standardized messaging framework](https://github.com/nearai/ironclaw/pull/6831)** — large (16 core ops, canonical error taxonomy), open since Jul 28, quiet in this window.
- **[#6780 — IronHub deep-link register/install gateway](https://github.com/nearai/ironclaw/pull/6780)** — re-port of #5409, open since Jul 28, no comments in window.
- **[#6565 — Skill discovery/activation epic](https://github.com/nearai/ironclaw/issues/6565)** — 21 acceptance criteria, four owned by other workstreams; the new [#6941](https://github.com/nearai/ironclaw/issues/6941) split may unblock it.
- **Merge-cycle pattern**: zmanian's May PRs ([#3942](https://github.com/nearai/ironclaw/pull/3942), [#3952](https://github.com/nearai/ironclaw/pull/3952), [#4022](https://github.com/nearai/ironclaw/pull/4022)) only closed this week after months — long review cycles are a recurring queue-blocking pattern worth monitoring alongside the CI gate issues ([#6963](https://github.com/nearai/ironclaw/issues/6963), [#6978](https://github.com/nearai/ironclaw/issues/6978)).

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-01

## 1. Today's Overview

LobsterAI is in a **post-release stabilization phase** following the merged release cut for `2026.7.31` ([PR #2416](https://github.com/netease-youdao/LobsterAI/pull/2416)), with no new releases published in the 24-hour window. Activity was maintenance-heavy: **4 issues closed** (all stale-labeled) and **12 PRs updated** (11 merged/closed, 1 open). The most significant engineering work was a pair of merged OpenClaw fixes ([PR #2413](https://github.com/netease-youdao/LobsterAI/pull/2413), [PR #2415](https://github.com/netease-youdao/LobsterAI/pull/2415)) that restore DeepSeek long-session cache hit rates from a collapsed ~57% back toward ~100%. A large batch of **stale April-era PRs and issues was swept closed**, clearing backlog but leaving ambiguity about whether several UX implementations ever landed. Overall project health is **stable**, with active maintenance and one lingering open cron fix ([PR #2234](https://github.com/netease-youdao/LobsterAI/pull/2234)) deserving attention.

## 2. Releases

**No new releases in the last 24 hours.** However, the release branch PR [Release/2026.7.31 (#2416)](https://github.com/netease-youdao/LobsterAI/pull/2416) was closed/merged on 2026-07-31, indicating the `2026.7.31` release is shipping or just shipped. Its PR body contains only a placeholder template, so no detailed changelog, breaking changes, or migration notes are available in this data window.

## 3. Project Progress

**Actively merged fixes (2026-07-31):**

- [fix(openclaw): keep live prompt tool-result history byte-stable across turns (#2413)](https://github.com/netease-youdao/LobsterAI/pull/2413) — Stops live prompt projection from reapplying a fixed 4× aggregate char cap on every request, which was rewriting cached history and collapsing DeepSeek cache hit rates.
- [fix(openclaw): drop aggregate cap in live tool-result prompt projection (#2415)](https://github.com/netease-youdao/LobsterAI/pull/2415) — Complements #2413; restores prefix-cache stability so unchanged tool-result history stays byte-stable, recovering DeepSeek long-session hit rates from ~57% to ~100%.
- [fix(cowork): prevent BTW tool protocol leakage (#2414)](https://github.com/netease-youdao/LobsterAI/pull/2414) — Sanitizes provider tool-call markup from side-chat results, returns stable guidance when a side question requires tools, and preserves error metadata through the OpenClaw gateway.
- [fix(sites): add copy success feedback (#2417)](https://github.com/netease-youdao/LobsterAI/pull/2417) — Reuses the conversation copy icon/interaction for site URLs and share codes.
- [Release/2026.7.31 (#2416)](https://github.com/netease-youdao/LobsterAI/pull/2416) — Release cut across docs, main, and openclaw areas.

**Closed as stale (backlog sweep, 2026-07-31):**

- [feat(oauth): add Antigravity OAuth integration and proxy compatibility (#172)](https://github.com/netease-youdao/LobsterAI/pull/172) — Closed after ~5 months; OAuth subsystem with SQLite profile persistence.
- [feat(cowork): isolate home-screen input draft per agent (#1308)](https://github.com/netease-youdao/LobsterAI/pull/1308)
- [feat: drag-to-resize sidebar (#1315)](https://github.com/netease-youdao/LobsterAI/pull/1315) — Closes issue #1314.
- [feat: sidebar keyboard shortcut kbd hints (#1318)](https://github.com/netease-youdao/LobsterAI/pull/1318) — Closes issue #1317.
- [feat: session list skeleton loading (#1320)](https://github.com/netease-youdao/LobsterAI/pull/1320) — Closes issue #1319.
- [fix(settings): dismiss overlays when switching settings tabs (#1321)](https://github.com/netease-youdao/LobsterAI/pull/1321) — Fixes issue #1307.

⚠️ **Flag:** The stale-labeled UX PRs (#1315/#1318/#1320) contain complete, detailed implementations. It is **unclear whether they were merged** into a prior release or closed without merging. Maintainers should verify and, if unmerged, revive them.

## 4. Community Hot Topics

The most active items (2 comments each, no reactions) were the four issues updated in this window:

- [Issue #1311 — Table content shows raw HTML tags on wrap; add hover-to-view-full-text for truncated cells](https://github.com/netease-youdao/LobsterAI/issues/1311) (Cathylkx)
- [Issue #1314 — Support drag-resize for sidebar (180–480px)](https://github.com/netease-youdao/LobsterAI/issues/1314) (MaoQianTu)
- [Issue #1317 — Show keyboard shortcut kbd hints on sidebar buttons](https://github.com/netease-youdao/LobsterAI/issues/1317) (MaoQianTu)
- [Issue #1319 — Add skeleton loading to distinguish "loading" from "empty" session list](https://github.com/netease-youdao/LobsterAI/issues/1319) (MaoQianTu)

**Underlying needs:** These cluster around **desktop UX polish** — the fixed 240px sidebar (Tailwind `w-60`) doesn't adapt to different screen sizes; keyboard shortcuts (Ctrl+N / Ctrl+F) are undiscoverable without visiting settings; and the startup "no sessions" flash makes users think their history is lost. The table rendering issue (#1311) points to data-display quality gaps in markdown/rich-text output. These are power-user ergonomics signals, not architecture complaints.

All four were **closed as stale** with no visible maintainer resolution, which may leave users feeling unheard even though implementation PRs existed for three of them.

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Status | Fix |
|---|---|---|---|
| 🔴 **High** | **DeepSeek long-session cache hit rates collapsed from ~100% to ~57%** — live prompt projection re-applied a fixed 4× aggregate char cap on every request, rewriting byte-identical tool-result history as new results arrived and breaking prefix-cache stability. | Root-caused, fixed, **merged** | [PR #2413](https://github.com/netease-youdao/LobsterAI/pull/2413) + [PR #2415](https://github.com/netease-youdao/LobsterAI/pull/2415) — pass `aggregateMaxCharsOverride=null` for live requests so unchanged history stays a stable prefix. |
| 🟠 **Medium** | **BTW tool protocol leakage** — side-chat results could expose raw provider tool-call markup; side questions requiring tools lacked stable guidance. | Fixed, **merged** | [PR #2414](https://github.com/netease-youdao/LobsterAI/pull/2414) |
| 🟠 **Medium** | **Cron yield descendant finalization broken** — after `sessions_yield`, child-agent completion events don't drive the parent agent; active requester steering can write completion events into an already-ended run. | Fix exists, **open/stale** | [PR #2234](https://github.com/netease-youdao/LobsterAI/pull/2234) — needs maintainer review/merge. |
| 🟡 **Low** | **Settings tab overlay bug** — cowork memory editor / model connection-test modals remain mounted as `absolute inset-0` layers after switching tabs, making UI appear read-only. | Fix PR closed as stale, merge status **unverified** | [Issue #1307](https://github.com/netease-youdao/LobsterAI/issues/1307) → [PR #1321](https://github.com/netease-youdao/LobsterAI/pull/1321) |
| 🟡 **Low** | **Empty-state flash at startup** — `sessions` initializes as `[]`, so "暂无可聊记录" flashes before data loads, alarming users. | Fix PR closed as stale, merge status **unverified** | [Issue #1319](https://github.com/netease-youdao/LobsterAI/issues/1319) → [PR #1320](https://github.com/netease-youdao/LobsterAI/pull/1320) |

**Stability takeaway:** The DeepSeek cache fixes are the headline — they have direct **cost and latency impact** for long-session users. The unverified merge status of #1321/#1320 is a follow-up risk.

## 6. Feature Requests & Roadmap Signals

Strongest signals in this window — all from the **sidebar/table UX cluster**:

- **Drag-to-resize sidebar** (180–480px, `col-resize` handle, persisted width) — [Issue #1314](https://github.com/netease-youdao/LobsterAI/issues/1314), implemented in [PR #1315](https://github.com/netease-youdao/LobsterAI/pull/1315)
- **Keyboard shortcut kbd badges** on "New Task" / "Search" buttons, platform-aware (⌘/⌥/⇧ vs Ctrl/Alt/Shift) — [Issue #1317](https://github.com/netease-youdao/LobsterAI/issues/1317), implemented in [PR #1318](https://github.com/netease-youdao/LobsterAI/pull/1318)
- **Skeleton loading state** for session list (`sessionsLoaded` flag in `coworkSlice`) — [Issue #1319](https://github.com/netease-youdao/LobsterAI/issues/1319), implemented in [PR #1320](https://github.com/netease-youdao/LobsterAI/pull/1320)
- **Table rendering improvements** — strip raw HTML tags on wrapped lines; add hover-to-expand for truncated long text — [Issue #1311](https://github.com/netease-youdao/LobsterAI/issues/1311) (no linked fix PR)
- **Per-agent input draft isolation** on home screen — [PR #1308](https://github.com/netease-youdao/LobsterAI/pull/1308) (closed stale)
- **Antigravity OAuth integration** — main-process OAuth subsystem, SQLite profile persistence, OpenAI-compatible proxy support — [PR #172](https://github.com/netease-youdao/LobsterAI/pull/172) (closed stale; signals a roadmap direction toward more managed provider integrations)

**Prediction:** The sidebar UX set (resizable width + kbd hints + skeleton loading) is the most cohesive feature batch and most likely appears in the next minor release **if** PRs #1315/#1318/#1320 were merged; if they were stale-closed without merge, they are top candidates for revival. Issue #1311 (table rendering) is the likeliest next UI-polish candidate.

## 7. User Feedback Summary

**Real pain points voiced this cycle:**

- **Fixed 240px sidebar is a layout liability** — too wide on small screens, too narrow for large screens; long session titles get truncated with no way to see full content ([#1314](https://github.com/netease-youdao/LobsterAI/issues/1314)).
- **Keyboard shortcuts are invisible** — new users must dig into settings to discover Ctrl+N/Ctrl+F, a high discovery cost ([#1317](https://github.com/netease-youdao/LobsterAI/issues/1317)).
- **Startup empty-state flash** — users briefly see "暂无历史记录" on launch and may believe their history was lost ([#1319](https://github.com/netease-youdao/LobsterAI/issues/1319)).
- **Table rendering degrades readability** — line-wrapped cells expose raw HTML tags; truncated long text has no tooltip to reveal full content ([#1311](https://github.com/netease-youdao/LobsterAI/issues/1311)).

**Use cases represented:** multi-device desktop users on varying screen sizes; heavy session-history users who rely on the sidebar for navigation; users running long DeepSeek-backed sessions (where cache stability directly affects cost); cowork/side-chat flows involving tool calls.

**Satisfaction signals:** No 👍 reactions or explicit positive feedback in this window. The prompt-cache fixes (#2413/#2415) directly address cost/latency pain and demonstrate active maintenance. However, the **stale closure of all four user issues without visible maintainer commentary** is a negative signal — the UX concerns raised in April were never visibly resolved in the issue threads.

## 8. Backlog Watch

Items needing maintainer attention:

1. **[PR #2234 — fix(openclaw): cron yield descendant finalization](https://github.com/netease-youdao/LobsterAI/pull/2234)** — 🔴 **Top priority.** Open since 2026-06-30, stale-labeled, 0 comments. Fixes a real bug where child-agent completion events fail to drive parent agents in cron workflows. Test plan covers normal parallel, cron parallel, and cron serial sub-agent scenarios.

2. **[Issue #1311 — Table markup/truncation](https://github.com/netease-youdao/LobsterAI/issues/1311)** — Closed stale with **no linked fix PR**. Should be re-triaged; the screenshot-documented bug (raw tags in wrapped cells) is a visible quality issue.

3. **[PR #172 — Antigravity OAuth integration](https://github.com/netease-youdao/LobsterAI/pull/172)** — Closed stale after 5 months. Large, well-scoped feature (OAuth subsystem + SQLite persistence + proxy compatibility). If multi-provider OAuth is still strategic, it needs re-opening and rebasing.

4. **UX PR set [#1315](https://github.com/netease-youdao/LobsterAI/pull/1315) / [#1318](https://github.com/netease-youdao/LobsterAI/pull/1318) / [#1320](https://github.com/netease-youdao/LobsterAI/pull/1320) / [#1321](https://github.com/netease-youdao/LobsterAI/pull/1321)** — All closed stale with full implementations. **Verify merge status** — if intentionally dropped, document why; if accidentally swept, revive for the next release.

---

*Data window: 2026-07-31 → 2026-08-01. Source: [LobsterAI GitHub repository](https://github.com/netease-youdao/LobsterAI).*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-01

## 1. Today's Overview
Moltis shows steady, security-conscious development activity over the last 24 hours. Two issues were updated — one new bug report (#1181) and one long-standing feature request closed (#1131). Six pull requests saw activity, with two merged/closed (#1168, #1176) and four open PRs spanning security hardening, channel access control, and new memory backends. The most notable signal is a cluster of security-focused contributions from new contributor `tsauvajon`, who explicitly stated they want to use Moltis once their fixes land. Overall project health appears positive, with a mix of feature work, external contributions, and responsive issue resolution.

## 2. Releases
No new releases were published in the last 24 hours. No release notes, breaking changes, or migration guidance to report.

---

## 3. Project Progress
Two pull requests were merged/closed today, marking the completion of a user-requested feature and a major channel integration:

- **[PR #1176 — feat(web): add Markdown copy and session export](https://github.com/moltis-org/moltis/pull/1176)** (merged, by Jonesxq): Adds preserving raw Markdown when copying assistant replies and a session-level "Save as Markdown" action that loads the complete paginated history. This directly closes the related feature request **[Issue #1131](https://github.com/moltis-org/moltis/issues/1131)**, which had been open since June 17.
- **[PR #1168 — feat(nostr): add NIP-29 group chat support for Buzz channels](https://github.com/moltis-org/moltis/pull/1168)** (merged, by penso): Extends `moltis-nostr` beyond NIP-xx protocols to support NIP-29 group chat over NIP-42-authenticated connections, enabling [Buzz](https://github.com/block/buzz) — Block's open-source workspace where AI agents and humans share team channels.

---

## 4. Community Hot Topics
Activity is spread across several PRs with no single thread dominating discussion. The most notable engagement signals:

- **[Issue #1131 — Add copy + export as Markdown](https://github.com/moltis-org/moltis/issues/1131)** received the only reaction (1 👍) among recent items. It was opened June 17 and closed today with the merge of PR #1176 — evidence of the maintainers acting on community requests.
- **[PR #1170 — Gate /sh and privileged tools behind a per-account operators list](https://github.com/moltis-org/moltis/pull/1170)** (open, by penso) addresses a real security boundary: channel senders who passed an access allowlist could previously reach privileged commands and host tools. This represents the underlying community need for finer-grained privilege separation in multi-user/agent settings.
- **[PR #1179 — Verify node pairing signatures](https://github.com/moltis-org/moltis/pull/1179)** and **[PR #1180 — Harden model and zip paths](https://github.com/moltis-org/moltis/pull/1180)** (both by tsauvajon) are security fixes driven by a would-be user's pre-adoption audit, signaling that security review is a gating factor for new adopters.

---

## 5. Bugs & Stability
One new bug was reported, and two open security PRs address vulnerability classes that could lead to code execution:

1. **[Issue #1181 — [Bug]: Issue with GPT 5.6 Luna](https://github.com/moltis-org/moltis/issues/1181)** (open, reported by ndrewtl, 0 comments): A new bug report against the latest version of Moltis. Severity currently unknown due to truncated summary; needs triage to determine if it's a model-compatibility issue or a deeper runtime problem.
2. **[PR #1180 — fix(security): harden model and zip paths](https://github.com/moltis-org/moltis/pull/1180)** (open, by tsauvajon): Fixes two bug classes — malicious zip extraction and HuggingFace repo handling — that could result in arbitrary file write outside the intended directory, overwriting trusted config/credentials/scripts and leading to code execution. **Severity: High.** The PR notes the current guard only rejects names containing certain patterns, leaving bypass vectors.
3. **[PR #1179 — fix(gateway): verify node pairing signatures](https://github.com/moltis-org/moltis/pull/1179)** (open, by tsauvajon): Binds `node.pair.verify` to the server-issued pending request so callers cannot supply their own key or challenge, closing a pairing-authentication bypass. **Severity: Medium-High.**

No regressions were reported in the last 24 hours.

---

## 6. Feature Requests & Roadmap Signals
- **Markdown copy/export (Issue #1131)** — Completed today via PR #1176. A "next version" certainty if the release train is imminent.
- **zvec vector memory backend (PR #1158)** — A vibe-coded experimental backend for memory built on Zvec and redb, with the embedding model running on an independently installed llama-cpp server. Feature-gated behind the `zvec` cargo feature (enabled by default in `full`). It has been open since July 17 and represents growing community interest in modular/local memory backends. Likely to land in a future `full` build if maintainers accept it.
- **NIP-29 group chat / Buzz integration (PR #1168, merged)** — Suggests the roadmap is expanding toward richer multi-agent/multi-human collaboration channels beyond typical single-relay Nostr setups.
- **Per-account operator privileges (PR #1170, open)** — If merged, this is a strong signal that Moltis is moving toward enterprise-grade access control, separating access from privilege at the account level.

---

## 7. User Feedback Summary
- **Security is an adoption barrier.** `tsauvajon` (PR #1179/#1180) explicitly wrote: *"I'd like to use Moltis, but I've got a couple of security fixes I'd like to get in before doing so."* This indicates that while Moltis is attractive enough to prompt contribution, prospective users are conducting security reviews before deploying, and finding real issues.
- **Markdown export was a desired workflow feature.** Issue #1131 spent ~6 weeks open with a 👍 reaction before being fulfilled — a concrete example of a user-requested workflow improvement (copying/preserving assistant replies, exporting full session history) being delivered.
- **Privilege separation concerns.** PR #1170 highlights a latent pain point: the allowlist mechanism conflated channel access with host-tool privilege, which is risky in multi-agent or shared-channel deployments (e.g., Buzz team channels).

---

## 8. Backlog Watch
Items needing maintainer attention, ranked by age:

- **[PR #1158 — feat(memory): add zvec vector database memory backend](https://github.com/moltis-org/moltis/pull/1158)** — Open since July 17 (~15 days), no merge/close activity in the last 24h. A substantial experimental feature by a contributor; needs maintainer review to decide whether it becomes a supported backend.
- **[PR #1170 — fix(channels): gate /sh and privileged tools behind a per-account operators list](https://github.com/moltis-org/moltis/pull/1170)** — Open since July 26 (~6 days), updated today. Security-relevant; should be prioritized alongside #1179/#1180 to lock down the privilege model.
- **[Issue #1181 — GPT 5.6 Luna bug](https://github.com/moltis-org/moltis/issues/1181)** — New, untriaged; needs a maintainer response to gather repro details and confirm whether it's model-specific.

The recently closed #1131 (open since June 17) shows the maintainers do work through older items, but the three open security/privilege PRs (#1170, #1179, #1180) represent an accumulating stack of defensive improvements that should be reviewed collectively to avoid merge conflicts and ensure a coherent security story in the next release.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — QwenPaw  
**Date: 2026-08-01**

> This digest covers QwenPaw activity tracked via CoPaw (`github.com/agentscope-ai/CoPaw`). All linked items reference the QwenPaw repository.

---

## 1. Today's Overview

QwenPaw is in a **high-activity stabilization phase**: 20 issues and 43 PRs were updated in the last 24 hours, with 14 issues still open/active and 6 closed. No new release was published today. The busiest areas are shell command execution reliability, memory/context compression, `agent.json` integrity, agent-scope compatibility, and desktop UI/UX issues. Community contribution is strong, especially from first-time contributors, with multiple fix PRs already submitted for today's most critical bugs. Overall project trajectory is healthy, but reliability complaints around long-running sessions and silent failures remain the dominant concern.

---

## 2. Releases

**No new releases today.**  
No changelog, breaking-change, or migration notes to report.

---

## 3. Project Progress

Visible merged/closed PRs today include:

- [QwenPaw #6573](https://github.com/agentscope-ai/QwenPaw/pull/6573) — **fix(audio)**: restored transcription for channel audio messages after AgentScope 2.0 migration.
- [QwenPaw #6592](https://github.com/agentscope-ai/QwenPaw/pull/6592) — **fix(memory)**: flush Auto-Memory before Scroll context eviction, addressing daily memory loss.
- [QwenPaw #6606](https://github.com/agentscope-ai/QwenPaw/pull/6606) — **fix(read_file)**: accept numeric string line ranges.
- [QwenPaw #6602](https://github.com/agentscope-ai/QwenPaw/pull/6602) — **fix(session UI)**: preserve active responses when switching between Coding and Chat modes.
- [QwenPaw #6604](https://github.com/agentscope-ai/QwenPaw/pull/6604) — **docs(memory)**: explain ReMe self-evolving knowledge base.

Closed issues today include:

- [QwenPaw #6563](https://github.com/agentscope-ai/QwenPaw/issues/6563) — CI “real behavior proof” workflow no longer blocks fork PRs.
- [QwenPaw #6555](https://github.com/agentscope-ai/QwenPaw/issues/6555) — Dream/memory compression missing early-session events.
- [QwenPaw #6529](https://github.com/agentscope-ai/QwenPaw/issues/6529) — ACP `new_session` response missing `models` field.
- [QwenPaw #6544](https://github.com/agentscope-ai/QwenPaw/issues/6544) — Feishu audio messages silently failing transcription.
- [QwenPaw #6558](https://github.com/agentscope-ai/QwenPaw/issues/6558) — Multiple chat session UI data integrity issues.
- [QwenPaw #6549](https://github.com/agentscope-ai/QwenPaw/issues/6549) — Desktop input box obscured on Windows.

---

## 4. Community Hot Topics

Most active issues by comment count:

- [QwenPaw #6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) — **Skill tags disappear on restart** (10 comments). Users report a regression in Skill Pool metadata persistence; tags save via API but are lost during manifest reconciliation.
- [QwenPaw #6601](https://github.com/agentscope-ai/QwenPaw/issues/6601) — **QwenPaw 不报空响应错误 / empty model responses not reported** (5 comments). Long sessions approach context limits and the model returns empty responses without any error surfaced to the user.
- [QwenPaw #6563](https://github.com/agentscope-ai/QwenPaw/issues/6563) — **CI blocks all fork PRs** (5 comments). A workflow permission issue was preventing external contributors from passing CI; now closed.
- [QwenPaw #6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) — **`spawn_subagent` single-task mode unusable** (4 comments). Tool schema incorrectly requires `batch`, making foreground single subagents impossible.
- [QwenPaw #6083](https://github.com/agentscope-ai/QwenPaw/issues/6083) — **Desktop needs workspace artifact quick-access** (4 comments). Users want one-click access to generated files from the desktop app.
- [QwenPaw #6160](https://github.com/agentscope-ai/QwenPaw/issues/6160) — **Independent Python runtime for QwenPaw** (4 comments). Desktop currently calls system Python, which is missing in many Windows environments.

Underlying needs: users are asking for **stronger persistence guarantees**, **better error visibility in long-running sessions**, **lower contribution barriers**, and **more desktop-native UX** for non-technical users.

---

## 5. Bugs & Stability

Ranked by severity, with fix status where available:

| Severity | Issue | Summary | Fix PR |
|---|---|---|---|
| **Critical** | [QwenPaw #6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) | Incompatible with `agentscope 2.0.4.post1`: proactive responder crashes and tool-permission deadlock. | [QwenPaw #6615](https://github.com/agentscope-ai/QwenPaw/pull/6615) open |
| **Critical** | [QwenPaw #6608](https://github.com/agentscope-ai/QwenPaw/issues/6608) | Long-running shell commands bypass `shell_command_timeout` and blocked a Feishu session for 1.5 hours; orphan subprocess on cancel. | [QwenPaw #6610](https://github.com/agentscope-ai/QwenPaw/pull/6610) open |
| **High** | [QwenPaw #6589](https://github.com/agentscope-ai/QwenPaw/issues/6589) | `execute_shell_command` with huge stdout freezes the UI by rendering all output at once. | [QwenPaw #6610](https://github.com/agentscope-ai/QwenPaw/pull/6610) open |
| **High** | [QwenPaw #6520](https://github.com/agentscope-ai/QwenPaw/issues/6520) | `agent.json` systematically corrupted on Windows: BOM header, missing quotes, double-encoded Chinese text. | [QwenPaw #6528](https://github.com/agentscope-ai/QwenPaw/pull/6528) open |
| **High** | [QwenPaw #6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) | Skill tags disappear after restart; regression of #3270. | No visible fix PR yet |
| **High** | [QwenPaw #6601](https://github.com/agentscope-ai/QwenPaw/issues/6601) | Empty model responses in long contexts are not reported as errors. | No visible fix PR yet |
| **Medium** | [QwenPaw #6512](https://github.com/agentscope-ai/QwenPaw/issues/6512) | Large tool output >30 KB gets truncated or causes `Internal error`. | Related to shell handling effort |
| **Medium** | [QwenPaw #6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) | `spawn_subagent` schema wrongly makes `batch` required. | [QwenPaw #6609](https://github.com/agentscope-ai/QwenPaw/pull/6609) open |
| **Medium** | [QwenPaw #6555](https://github.com/agentscope-ai/QwenPaw/issues/6555) | Dream/memory compression misses early-session events. | [QwenPaw #6592](https://github.com/agentscope-ai/QwenPaw/pull/6592) closed; [QwenPaw #6564](https://github.com/agentscope-ai/QwenPaw/pull/6564) open |
| **Medium** | [QwenPaw #6558](https://github.com/agentscope-ai/QwenPaw/issues/6558) | Messages lost on session switch, instructions drift, replies re-render from scratch. | [QwenPaw #6602](https://github.com/agentscope-ai/QwenPaw/pull/6602) closed |
| **Medium** | [QwenPaw #6544](https://github.com/agentscope-ai/QwenPaw/issues/6544) | Feishu audio messages silently fail transcription in 2.x. | [QwenPaw #6573](https://github.com/agentscope-ai/QwenPaw/pull/6573) closed |
| **Low** | [QwenPaw #6563](https://github.com/agentscope-ai/QwenPaw/issues/6563) | CI workflow blocked all fork PRs. | Closed |

---

## 6. Feature Requests & Roadmap Signals

Strong user-requested features:

- [QwenPaw #6083](https://github.com/agentscope-ai/QwenPaw/issues/6083) — Workspace artifact quick-access button in Desktop.
- [QwenPaw #6160](https://github.com/agentscope-ai/QwenPaw/issues/6160) — Bundled or internally managed Python runtime.
- [QwenPaw #6593](https://github.com/agentscope-ai/QwenPaw/issues/6593) — Unified, professional cleanup page for memory, workspaces, backups, and stale data.
- [QwenPaw #6587](https://github.com/agentscope-ai/QwenPaw/issues/6587) — Rename desktop app from “QwenPaw Desktop” to “QwenPaw”.
- [QwenPaw #6260](https://github.com/agentscope-ai/QwenPaw/issues/6260) — Collapsible thinking/tool-call sections, with results shown first.

Open PRs pointing to likely next-version work:

- [QwenPaw #6526](https://github.com/agentscope-ai/QwenPaw/pull/6526) — NVIDIA NIM provider support.
- [QwenPaw #6607](https://github.com/agentscope-ai/QwenPaw/pull/6607) — Global-hotkey floating quick-input window for Desktop.
- [QwenPaw #6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) — Unified provider discovery, model metadata, routing, and agent controls.
- [QwenPaw #6611](https://github.com/agentscope-ai/QwenPaw/pull/6611) — Refactor Scroll context and memory lifecycle around AgentScope.
- [QwenPaw #6617](https://github.com/agentscope-ai/QwenPaw/pull/6617) — Honor `Retry-After` cap on streaming retry path.

**Next release likely includes:** shell command timeout hardening and output streaming, subagent schema fixes, `agent.json` BOM/corruption handling, agentscope compatibility fixes, and possibly NVIDIA NIM support.

---

## 7. User Feedback Summary

Real pain points expressed by users:

- **Silent failures are a major trust issue.** Examples include [QwenPaw #6614](https://github.com/agentscope-ai/QwenPaw/issues/6614) where WeChat cron pushes report `success` but never deliver, and [QwenPaw #6608](https://github.com/agentscope-ai/QwenPaw/issues/6608) where a Feishu session stalled for 1.5 hours.
- **Long sessions degrade badly.** Empty responses, context overwrite, memory loss, and UI freezes appear after extended use ([QwenPaw #6601](https://github.com/agentscope-ai/QwenPaw/issues/6601), [QwenPaw #6555](https://github.com/agentscope-ai/QwenPaw/issues/6555), [QwenPaw #6589](https://github.com/agentscope-ai/QwenPaw/issues/6589)).
- **Desktop UX still needs polish.** Users report hidden input boxes, awkward app naming, difficult access to generated files, and lack of a cleanup workflow ([QwenPaw #6549](https://github.com/agentscope-ai/QwenPaw/issues/6549), [QwenPaw #6587](https://github.com/agentscope-ai/QwenPaw/issues/6587), [QwenPaw #6083](https://github.com/agentscope-ai/QwenPaw/issues/6083), [QwenPaw #6593](https://github.com/agentscope-ai/QwenPaw/issues/6593)).
- **Users want results, not process.** [QwenPaw #6260](https://github.com/agentscope-ai/QwenPaw/issues/6260) asks for collapsible reasoning traces and emphasized final outputs.
- **Positive signal:** community contributors are actively submitting fixes, including several first-time-contributor PRs for critical bugs.

---

## 8. Backlog Watch

Older or high-importance items that may need maintainer attention:

- [QwenPaw #6083](https://github.com/agentscope-ai/QwenPaw/issues/6083) — Desktop workspace artifact quick access; open since 2026-07-14, still unresolved.
- [QwenPaw #6160](https://github.com/agentscope-ai/QwenPaw/issues/6160) — Request for bundled Python runtime; open since 2026-07-16.
- [QwenPaw #6260](https://github.com/agentscope-ai/QwenPaw/issues/6260) — Result presentation improvement; open since 2026-07-19 with positive reaction.
- [QwenPaw #6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) — Skill tags disappearing; high comment count, no fix PR visible yet.
- [QwenPaw #6512](https://github.com/agentscope-ai/QwenPaw/issues/6512) — Large shell output truncation; open since 2026-07-28 and closely related to today's freeze/timeout reports.
- [QwenPaw #6203](https://github.com/agentscope-ai/QwenPaw/pull/6203) — Windows `tasklist` liveness probe fix; in review since 2026-07-16.
- [QwenPaw #6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) — Large provider/model unification PR; open since 2026-07-21 and likely needs focused maintainer review.
- [QwenPaw #6520](https://github.com/agentscope-ai/QwenPaw/issues/6520) — `agent.json` corruption; fix PR exists but remains open and should be prioritized.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-01

## 1. Today's Overview

ZeroClaw activity remained very high in the 24 hours ending 2026-08-01: 50 issues and 50 pull requests were updated, with no new releases. The issue tracker is dominated by open design work — 45 of 50 touched issues remain open, and most are `type:rfc` proposals flagged high-risk and awaiting maintainer review. PR throughput shows a healthy but gated pipeline: 13 of 50 PRs were merged or closed, while a large share of the 37 open PRs carry `needs-author-action`, indicating active review cycles with follow-ups on contributors. Several priority-1 fixes are in motion (semantic-empty completion rejection, tool-allowlist enforcement, multimodal image trimming), and two notable stability bugs (Fedora Landlock shell failure, Signal/Voice channel crashloop) were closed. The project's critical path remains the maintainer decision queue ([#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)), with many high-risk RFCs pending.

## 2. Releases

No new releases in the last 24 hours; the latest release list is empty for this reporting window.

## 3. Project Progress

13 PRs were merged/closed in the last 24 hours (highlights below), and 5 issues were closed.

**Closed/merged PRs:**
- [PR #9292](https://github.com/zeroclaw-labs/zeroclaw/pull/9292) — `fix(zerocode)`: keep session picker scroll offset for mouse hit-testing. Fixes a ratatui `ListState` copy bug where the overlay list drew with a stale offset.
- [PR #8438](https://github.com/zeroclaw-labs/zeroclaw/pull/8438) — `feat(cron)`: add `shell_output_format` config so operators can opt into trimmed raw stdout for shell cron jobs; the `status`/`stdout`/`stderr` envelope remains the default.
- [PR #9300](https://github.com/zeroclaw-labs/zeroclaw/pull/9300) — `test(agent)`: refresh agent-policy parity harness row-1 evidence after Epic A cut-overs.

**Closed issues:**
- [Issue #8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) — Landlock sandbox blocked shell access to `/dev/null` on Fedora (p1, S2 severity); resolved.
- [Issue #6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) — Signal/Voice Call channel blocks with empty credentials caused a ~2s supervisor crashloop; resolved.

**Notable work advancing (large, cross-cutting open PRs updated today):**
- [PR #8996](https://github.com/zeroclaw-labs/zeroclaw/pull/8996) — `fix(goal)`: preserve running goals across daemon reload (size XL; touches agent, channel, config, daemon, gateway, provider, runtime, security).
- [PR #8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966) — `feat(agent)`: carry live provider identity on usage events and resolve context window from the serving provider (size XL).
- [PR #9424](https://github.com/zeroclaw-labs/zeroclaw/pull/9424) — `fix(runtime)`: reject semantic-empty terminal completions; normalizes `<think>`-only final text across Reliable entry points and non-agentic delegation (p1, size XL).

## 4. Community Hot Topics

Most-commented issues in the last 24h (all open RFCs):

| Issue | Comments | Topic / underlying need |
|---|---|---|
| [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) | 14 | Separate conversation history from agent-curated long-term memory. The highest-traffic item: users want the documented lifecycle separation actually enforced in runtime/gateway/channel autosave paths instead of writing turns into the general memory backend as `MemoryCategory::Conversation`. |
| [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) | 11 | Abstract a `KeySource` trait classifying master-key material by source/deployment form. Debate over how to structure the credential encryption base (93 `#[secret]` fields, `enc2:` ciphertext, 59 credential-classified fields) for different deployment styles. |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | 9 | Per-execution confirmation tier for high-risk shell commands + Claude Code-style allow/ask/deny policy (p1). Users want a reliable middle ground between blocking a command and broadly allowing the shell tool. |
| [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) | 9 | Cross-turn conversation correlation in OpenTelemetry export (`gen_ai.conversation.id`). Observability gap: turn-lifecycle events can't be correlated into a conversation scope. |
| [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) | 8 | A2A outbound client (`A2ATool`). Users want agents to proactively call external A2A-compliant agents; today only inbound A2A server support exists. |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | 7 | Computer-use support for desktop screen interaction and input control — a maintained, secure-by-default path for controlling local desktop apps. |

[Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) (Goal mode for bounded autonomous session work) is the only issue in this window with a 👍 reaction — explicit community support for a durable objective-driven execution mode.

Common thread: users are pushing ZeroClaw from a chat/turn-centric runtime toward cleaner memory separation, stronger security/credential abstractions, cross-session observability, and agent-to-agent collaboration.

## 5. Bugs & Stability

Fixed/closed today:
- [Issue #8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) (p1, closed) — Landlock sandbox blocked the shell tool on Fedora because `sh` could not access `/dev/null`; severity S2 degraded behavior, resolved.
- [Issue #6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) (p3, closed) — dashboard-added Signal/Voice Call channels with empty credentials induced a supervisor crashloop every ~2 seconds; resolved.

Active bug-fix PRs, ranked by severity:
- [PR #9424](https://github.com/zeroclaw-labs/zeroclaw/pull/9424) (p1, XL) — reject semantic-empty terminal completions; `<think>`-only output was being treated as a blank successful completion.
- [PR #9576](https://github.com/zeroclaw-labs/zeroclaw/pull/9576) (p1, S) — `trim_old_images` now drops images one by one instead of whole messages in multimodal context trimming.
- [PR #9433](https://github.com/zeroclaw-labs/zeroclaw/pull/9433) (p1, M, security:policy) — `SecurityPolicy::ensure_no_escalation_beyond` never validated `allowed_tools` / `excluded_tools`; escalation checks now enforce tool allowlists.
- [PR #8943](https://github.com/zeroclaw-labs/zeroclaw/pull/8943) — Bedrock Nova 2 (`us.amazon.nova-2-lite-v1:0`) fails long turns with `400: extraneous key [cachePoint]`; prompt-caching allowlist was too broad for `nova` model IDs.
- [PR #9477](https://github.com/zeroclaw-labs/zeroclaw/pull/9477) (security, principal contributor) — recover tool invocations wrapped in `<tools>` tags; Qwen2.5-Coder-32B can emit valid Hermes calls under the declaration wrapper.
- [PR #9038](https://github.com/zeroclaw-labs/zeroclaw/pull/9038) — Lark channel hardcoded `receive_id_type=chat_id`, causing `invalid receive_id` (error 230001) for non-`oc_` recipients; now derived from the recipient ID prefix.
- [PR #9561](https://github.com/zeroclaw-labs/zeroclaw/pull/9561) — remove `### FILENAME.md` headings from rendered personality prompts (token waste, no semantic value for the LLM).
- [PR #8674](https://github.com/zeroclaw-labs/zeroclaw/pull/8674) — zerocode: drop the `<unset>` sentinel before seeding the config edit buffer; maintainer refreshed the branch and moved the regression under Tokio.
- [PR #9279](https://github.com/zeroclaw-labs/zeroclaw/pull/9279) / [PR #9292](https://github.com/zeroclaw-labs/zeroclaw/pull/9292) — zerocode TUI: CJK display-width measurement for picker modals (open) and session-picker scroll offset hit-testing (closed).

Posture: no new crash-level regressions were reported in this window; the open p1 fixes are already under review, and the two most visible stability bugs were closed.

## 6. Feature Requests & Roadmap Signals

**Committed / in-progress (strongest next-version signals):**
- [Issue #8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) — OpenAI-compatible chat completions endpoint, `status:accepted` + `status:in-progress`. The clearest committed item: lets Open WebUI, LobeChat, and custom OpenAI-compatible clients connect without a custom protocol.
- [Issue #9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) — `KeySource` trait for master-key material, `status:in-progress`; likely to land with the ongoing credential/security refactor.

**New feature PRs open and actively iterating:**
- [PR #9556](https://github.com/zeroclaw-labs/zeroclaw/pull/9556) — Langfuse observer backend (OTel export to Langfuse cloud or self-hosted).
- [PR #9554](https://github.com/zeroclaw-labs/zeroclaw/pull/9554) — `dag_plan_execute` tool for sequential/parallel multi-step task plans with templates and variables.
- [PR #9557](https://github.com/zeroclaw-labs/zeroclaw/pull/9557) — `ProviderErrorKind` classification (AuthFailed, RateLimited, QuotaExceeded, ModelNotFound, VisionNotSupported, NetworkError, ServerError, Unknown) for user-friendly provider failures.
- [PR #8996](https://github.com/zeroclaw-labs/zeroclaw/pull/8996) — preserving running goals across daemon reload, a prerequisite for durable goal-mode execution.

**Longer-horizon roadmap RFCs:**
- [Issue #6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) — "Everything is a plugin": unified catalog merging Integrations and Wasm plugins (tracker).
- [Issue #9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) — A2A outbound client for inter-agent collaboration.
- [Issue #7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) — shell command allow/ask/deny policy tier.
- [Issue #8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135) — Wasm-first plugin runtime, default-on with capability enforcement and signed distribution.

Prediction: the OpenAI-compatible endpoint (#8550) and KeySource credential work (#9127) are the most likely near-term release items, followed by goal persistence (#8996) and the A2A outbound tool (#9106).

## 7. User Feedback Summary

- **Memory architecture pain:** conversation history and curated long-term memory are still mixed in implementation paths ([#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)); memory lifecycle policy is coupled to storage backends ([#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)). Users want clear lifecycle boundaries.
- **Security/UX friction:** operators cannot easily inspect which security controls are actually active ([#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971)); master-key material lacks a clean source/deployment abstraction ([#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127)); shell controls are binary — too broad or too blocking ([#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)); Landlock/Fedora breakage ([#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973)) shows sandbox defaults need platform-specific validation.
- **Config correctness:** per-model vision/context-window capability is misreported (unset context falls back to 32k tokens even when unsupported) ([#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100)); wire protocol should be first-class in provider onboarding ([#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396)); `ensure_no_escalation_beyond` silently ignored tool allowlists ([#9433](https://github.com/zeroclaw-labs/zeroclaw/pull/9433)).
- **Coding workflows:** LSP support requested for ZeroCode ([#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907)); AI-assisted PR pre-review/re-review proposed ([#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330)); local pre-submission gate to enforce the contributor bar ([#8078](https://github.com/zeroclaw-labs/zeroclaw/issues/8078)).
- **Automation scope:** desktop computer-use/input control ([#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)), goal mode with explicit user support ([#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)), and A2A outbound calls ([#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106)).
- **Observability:** cross-turn conversation correlation missing in OTel ([#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933)); rich events and OTel trace-correlation bridge refactoring wanted ([#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232)).

Satisfaction signals: contribution quality is high — PRs from principal/distinguished contributors ([#8996](https://github.com/zeroclaw-labs/zeroclaw/pull/8996), [#8438](https://github.com/zeroclaw-labs/zeroclaw/pull/8438), [#9300](https://github.com/zeroclaw-labs/zeroclaw/pull/9300), [#9477](https://github.com/zeroclaw-labs/zeroclaw/pull/9477)) and maintainer-driven refresh of stale PRs ([#8674](https://github.com/zeroclaw-labs/zeroclaw/pull/8674)) indicate a governed, engaged process. The main dissatisfaction pattern is review latency: many RFCs sit in `needs-maintainer-review`, which the project itself tracks via a dedicated decision queue ([#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)).

## 8. Backlog Watch

Long-running items needing maintainer attention, by age and priority:

- [Issue #5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) — RFC: Opt-in LSP support for ZeroCode (created 2026-04-19; oldest open RFC in this set, `needs-author-action`).
- [Issue #6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) — "Everything is a plugin" tracker (created 2026-05-06); major architectural direction awaiting a decision.
- [Issue #6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) — RFC: Decouple memory lifecycle policy from storage backends (created 2026-05-22; related to #9048).
- [Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) — RFC: Computer-use support for desktop interaction (created 2026-05-25).
- [Issue #6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) — RFC: Security UX, runtime credential boundaries, isolation defaults (created 2026-05-27).
- [Issue #6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) — RFC: Granular sandbox policy — filesystem and network restrictions (created 2026-05-28).
- [Issue #6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) — RFC: Schema-Guided Reasoning for cross-provider structured output (created 2026-05-29).
- [Issue #7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) — RFC: Per-model capability & context-window config (**p1**, created 2026-06-02).
- [Issue #7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) — RFC: shell command allow/ask/deny policy (**p1**, created 2026-06-03).
- [Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — Maintainer decision queue tracker: the coordination point for the RFC backlog above; currently the project's main velocity bottleneck.
- [Issue #8691](https://github.com/zeroclaw-labs/zeroclaw/issues/8691) — Tracker: restore ADR baseline and audit accepted RFC decision records.

Open PRs flagged for maintainer review:
- [PR #8674](https://github.com/zeroclaw-labs/zeroclaw/pull/8674) — `needs-maintainer-review`; maintainer already refreshed the branch — awaiting final decision.
- [PR #8996](https://github.com/zeroclaw-labs/zeroclaw/pull/8996) — goal persistence across daemon reload (XL, cross-cutting; long `needs-author-action` cycle).
- [PR #9424](https://github.com/zeroclaw-labs/zeroclaw/pull/9424) — p1 semantic-empty completion rejection (XL; spans Reliable, Anthropic, and ACP paths).

Risk note: the concentration of `needs-maintainer-review` on high-risk RFCs plus several XL PRs suggests maintainer decision capacity — not contributor throughput — is the limiting factor for project velocity.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*