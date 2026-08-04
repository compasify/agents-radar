# OpenClaw Ecosystem Digest 2026-08-04

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-04 01:22 UTC

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

# OpenClaw Project Digest — 2026-08-04

## 1. Today's Overview

OpenClaw shows very high activity: 500 issues and 500 PRs were updated in the last 24 hours, with 172 PRs merged/closed and 31 issues closed. Two patch releases shipped (v2026.7.1-1 and v2026.7.1-2), both focused on reliability fixes for Codex turn completion, npm plugin updates, and Memory Core startup. The project remains in a sustained stabilization phase: the dominant themes across issues and PRs are message-delivery reliability, session-state integrity, and subagent orchestration failure modes, with a parallel effort by maintainers to expand QA-lab coverage for previously unverified features. Maintainer attention is heavily concentrated on P1 "diamond lobster"-rated issues (top severity/impact tier), many of which have lingered for weeks awaiting product decisions.

## 2. Releases

Two patch releases shipped this period; both are bug-fix releases with no breaking changes or migration steps noted.

**v2026.7.1-2**
- **npm plugin updates:** accept singleton-array metadata from newer npm clients so tracked official plugins can install and update to correction releases ([#108336](https://github.com/openclaw/openclaw/issues/108336)).

**v2026.7.1-1**
- **Codex progress replies:** keep app-server turns running after delivered progress messages so GPT/Codex reaches its authoritative terminal response instead of stopping mid-turn ([#106961](https://github.com/openclaw/openclaw/issues/106961), [#108487](https://github.com/openclaw/openclaw/issues/108487)). Thanks @joshavant.
- **Memory Core startup repair:** recover derived legacy-index and cache structures (description truncated in source data).

## 3. Project Progress

Aggregate data shows 172 PRs merged/closed in the window. Visible in the sample:

- **[#119038](https://github.com/openclaw/openclaw/pull/119038) (closed)** — QA coverage for sandbox workspace isolation; adds real-runtime proof for `tools.workspace-isolation` inside a real Linux Docker sandbox.
- **[#119039](https://github.com/openclaw/openclaw/pull/119039) (closed)** — QA coverage for progress followthrough evidence: proves visible progress precedes real work and completion is backed by an exact tool-result chain plus durable artifact.
- **[#118933](https://github.com/openclaw/openclaw/pull/118933) (closed)** — QA coverage for plugin testing harness contracts (fixtures, local test environment, unit/integration scaffolds).

**Notable fixes shipped via releases:** Codex progress-reply turns now reach terminal responses (directly addressing a cluster of long-standing P1 issues like [#87744](https://github.com/openclaw/openclaw/issues/87744) and [#84516](https://github.com/openclaw/openclaw/issues/84516)); npm plugin install/update flow repaired.

**Notable open PRs advancing toward merge** (status: ready for maintainer look):
- [#114678](https://github.com/openclaw/openclaw/pull/114678) — fix(doctor): stop advisory state-dir skips from wedging gateway startup (closes [#112395](https://github.com/openclaw/openclaw/issues/112395)).
- [#116677](https://github.com/openclaw/openclaw/pull/116677) — fix(backup): reclaim archive temps left by interrupted backups (closes [#95582](https://github.com/openclaw/openclaw/issues/95582)).

The closed issues in the sample include the heavily-discussed DeepSeek v4 Flash failure ([#116277](https://github.com/openclaw/openclaw/issues/116277)), the `OPENCLAW_HOME` nested-directory regression ([#45765](https://github.com/openclaw/openclaw/issues/45765)), and the billing 402 retry death spiral ([#39807](https://github.com/openclaw/openclaw/issues/39807)).

## 4. Community Hot Topics

Most-discussed issues (by comment count):

1. **[#116277](https://github.com/openclaw/openclaw/issues/116277) — DeepSeek v4 Flash silent reply failure** (100 comments, CLOSED). Model silently fails to generate a reply on Telegram; fallback "No reply was generated" message posted. The volume of discussion signals it was a widespread user-facing incident; it is now closed, presumably resolved.
2. **[#116201](https://github.com/openclaw/openclaw/issues/116201) — Realtime voice retains unbounded provider/consult state** (50 comments, P1). Resource limits are item counts, not hard ownership bounds; slow/bursty provider behavior can retain superseded work, large frames, and pre-ready audio. Underlying need: hard session/resource ownership for realtime voice.
3. **[#7707](https://github.com/openclaw/openclaw/issues/7707) — Memory Trust Tagging by Source** (24 comments). Tag memory entries by trust level (user commands vs. web scrapes vs. third-party skills) to prevent prompt-injection/memory-poisoning. Security-adjacent features are drawing sustained community interest.
4. **[#44925](https://github.com/openclaw/openclaw/issues/44925) — Subagent completion silently lost** (23 comments, 👍2). No retry, no notification, no auto-restart on timeout; multiple failure patterns.
5. **[#48788](https://github.com/openclaw/openclaw/issues/48788) — Centralized filename encoding utility** (20 comments, 👍1). Architectural fix for multi-encoding Content-Disposition handling across channel adapters (Shift-JIS, EUC-KR, GB18030).
6. **[#87744](https://github.com/openclaw/openclaw/issues/87744) — Codex-backed Telegram turns repeatedly time out** (17 comments, 👍3). Work completes but terminal `turn/completed` never arrives.

Underlying need across all hot topics: **users are losing replies or session state in ways that are silent** — no error, no retry, no fallback. The community is consistently asking for deterministic delivery guarantees and better failure visibility.

## 5. Bugs & Stability

Ranked by severity:

**P0**
- **[#103804](https://github.com/openclaw/openclaw/issues/103804) — service-env generator double-quotes values, breaking `AWS_REGION` hostname** (P0, diamond lobster, `maturity:stable`). Produces `export AWS_REGION='"us-east-1"'`; shell resolution breaks. Open; linked PR open.

**P1 — message loss / silent failure cluster** (impact: message-loss, session-state):
- [#44925](https://github.com/openclaw/openclaw/issues/44925) — Subagent completion silently lost; no retry/notification on timeout.
- [#67777](https://github.com/openclaw/openclaw/issues/67777) — Subagent completion delivery lost on direct-announce timeout, drain, or orphan prune.
- [#84516](https://github.com/openclaw/openclaw/issues/84516) — Codex app-server replies silently truncated at ~1000–1100 chars (`stop=null`, `aborted=false`).
- [#87744](https://github.com/openclaw/openclaw/issues/87744) — Codex-backed Telegram turns time out waiting for `turn/completed`.
- [#52249](https://github.com/openclaw/openclaw/issues/52249) — ACP parent session stuck until UI refresh when yielded for child completion.
- [#53408](https://github.com/openclaw/openclaw/issues/53408) — `write`/`exec` tool parameters silently dropped after 15+ turn conversations (empty arguments object).
- [#45494](https://github.com/openclaw/openclaw/issues/45494) — Cron agent jobs exhaust full timeout during sustained LLM HTTP 500s instead of fast-failing.
- [#116022](https://github.com/openclaw/openclaw/issues/116022) — `/new` reuses stable session ID, cannot recover retired Codex binding tombstone.
- [#114234](https://github.com/openclaw/openclaw/issues/114234) — Usage-cost refresh lock never releasable after restart reuses owner PID (containers) — permanently freezes cache.
- [#116010](https://github.com/openclaw/openclaw/issues/116010) — All persistent sessions capped at 128k context regardless of model/`contextTokens`.
- [#115700](https://github.com/openclaw/openclaw/issues/115700) — `chat.send` rejected with "thread switched branches" after model completes; stale `expectedLeafEntryId`.
- [#115037](https://github.com/openclaw/openclaw/issues/115037) — Synthetic "No response requested." on resume triggers model fallback; user turn silently served by downgraded model.
- [#111010](https://github.com/openclaw/openclaw/issues/111010) — Detached native Codex subagents lose hook relay (and native tools) when parent turn releases.
- [#39476](https://github.com/openclaw/openclaw/issues/39476) — A2A `sessions_send` can be called back, causing duplicate messages.
- [#42820](https://github.com/openclaw/openclaw/issues/42820) — Feishu `message` tool send action polluted by poll schema/guard, blocking file sends.

**P2 regressions & reliability**
- [#112906](https://github.com/openclaw/openclaw/issues/112906) — `\`\`` tags render broken in v2026.7.1/v2026.7.1-2 (rich messages regression); content leaks out flat/expanded and cannot be collapsed.
- [#91144](https://github.com/openclaw/openclaw/issues/91144) — Windows native CLI gateway Scheduled Task does not stay running (foreground works).
- [#43747](https://github.com/openclaw/openclaw/issues/43747) — "Memory management is in chaos": inconsistent chunking/embedding/storage behavior across users.

**Fix PRs in flight for bug cluster:**
- [#119037](https://github.com/openclaw/openclaw/pull/119037) — Telegram `getUpdates` long-poll stall: bound request deadline to body read (addresses 150–184s stalls).
- [#108979](https://github.com/openclaw/openclaw/pull/108979) — narrow sandbox parent to exact active session workspace to prevent cross-agent media read (P0 security, closes [#107972](https://github.com/openclaw/openclaw/issues/107972)).
- [#114678](https://github.com/openclaw/openclaw/pull/114678) — stop advisory state-dir skips from wedging gateway startup.
- [#118998](https://github.com/openclaw/openclaw/pull/118998) — TUI: block terminal control sequences in system messages (security-boundary fix).
- [#116677](https://github.com/openclaw/openclaw/pull/116677) — reclaim backup temp dirs left by interrupted backups.
- [#118738](https://github.com/openclaw/openclaw/pull/118738) — migrate redundant native Codex service tiers rejecting authored params.
- [#118749](https://github.com/openclaw/openclaw/pull/118749)/[#118750](https://github.com/openclaw/openclaw/pull/118750) — NaN-safe dreaming timestamp comparators (gateway + memory-core).
- [#118748](https://github.com/openclaw/openclaw/pull/118748) — bound Google realtime PCM sample rate to prevent OOM resample (~24000x buffer inflation).

## 6. Feature Requests & Roadmap Signals

Most-supported/active feature requests:

- **[#7707](https://github.com/openclaw/openclaw/issues/7707) — Memory Trust Tagging by Source** (24 comments; needs security review). High-value anti-poisoning hardening; plausible candidate given the maintainers' parallel work on prompt-injection tainting in PR [#116238](https://github.com/openclaw/openclaw/pull/116238) (taint turns for `conversations_turn`, `pdf`, `image` tools).
- **[#42840](https://github.com/openclaw/openclaw/issues/42840) — MathJax/LaTeX support in Control UI** (👍10, highest reaction count in sample). Clear UX demand for rendering math in the web UI.
- **[#45758](https://github.com/openclaw/openclaw/issues/45758) — YAML config file format support** (👍2). Readability-motivated alternative to JSON5.
- **[#45508](https://github.com/openclaw/openclaw/issues/45508) — Self-hosted STT/TTS in webchat** (👍2): route webchat TTS/voice through the gateway instead of browser Web Speech API.
- **[#47910](https://github.com/openclaw/openclaw/issues/47910) — Provider fallback by failure class**; quarantine auth-broken providers instead of treating all failures equally.
- **[#51441](https://github.com/openclaw/openclaw/issues/51441) — Expose resolved backend model** in `session_status`/agent runtime when using LiteLLM/routing proxies.
- **[#45501](https://github.com/openclaw/openclaw/issues/45501) — `session.resetPrompt`**: make the `/new` startup message configurable.
- **[#16670](https://github.com/openclaw/openclaw/issues/16670) — Make Memory/Embedding setup a mandatory onboarding step**.
- **[#40786](https://github.com/openclaw/openclaw/issues/40786) — `.gitignore`-like exclude patterns for `backup create`** (security + backup-size driver).
- **[#51028](https://github.com/openclaw/openclaw/issues/51028) — Sessions panel sort by last meaningful activity**, not last message.

**Prediction:** The reliability cluster (subagent delivery guarantees, Codex turn termination, session-state ownership) is being actively fixed and will likely dominate v2026.7.2. Among feature requests, memory-trust tagging and provider-failure classification align most closely with current maintainer priorities; YAML config and MathJax remain popular but show no maintainer movement.

## 7. User Feedback Summary

**Dominant pain points (in order of frequency):**
1. **Silent message loss / missing final replies** — recurring across DeepSeek v4 Flash ([#116277](https://github.com/openclaw/openclaw/issues/116277)), Codex turns ([#87744](https://github.com/openclaw/openclaw/issues/87744), [#84516](https://github.com/openclaw/openclaw/issues/84516)), and subagent orchestration ([#44925](https://github.com/openclaw/openclaw/issues/44925), [#67777](https://github.com/openclaw/openclaw/issues/67777)). Users consistently describe "work is done but the answer never arrives."
2. **Session-state corruption/timeouts** — stuck sessions ([#52249](https://github.com/openclaw/openclaw/issues/52249)), lane starvation blocking inbound messages for 20–30 min ([#54488](https://github.com/openclaw/openclaw/issues/54488)), un-recoverable session tombstones ([#116022](https://github.com/openclaw/openclaw/issues/116022)).
3. **Tool-call degradation over long conversations** — silently dropped `write`/`exec` parameters after 15+ turns ([#53408](https://github.com/openclaw/openclaw/issues/53408)).
4. **Memory subsystem inconsistency** — three users on the same version observe three completely different memory behaviors ([#43747](https://github.com/openclaw/openclaw/issues/43747)); false "unavailable" status for working mem0 plugin ([#57256](https://github.com/openclaw/openclaw/issues/57256)).
5. **Auth/provider friction** — Google Antigravity account ban from tool-schema reload churn ([#44134](https://github.com/openclaw/openclaw/issues/44134)), `auth.order` ignored for GitHub Copilot ([#46031](https://github.com/openclaw/openclaw/issues/46031)), Poe media models accepted in config but failing at runtime ([#45655](https://github.com/openclaw/openclaw/issues/45655)), billing 402 retry death spiral ([#39807](https://github.com/openclaw/openclaw/issues/39807)).

**Satisfaction signals:** The two release candidates shipped this period both target the most-complained-about Codex reply path, and maintainer QA coverage is expanding — a positive responsiveness signal. The closing of #116277 and #39807 suggests high-visibility incidents are being handled. However, many top-severity issues remain open with `needs-maintainer-review` + `needs-product-decision` tags, indicating a review bottleneck.

## 8. Backlog Watch

Long-standing items needing maintainer attention (age > 1 month, top severity/impact):

- **[#7707](https://github.com/openclaw/openclaw/issues/7707) — Memory Trust Tagging** (open since 2026-02-03, 24 comments). Needs maintainer review + security review + product decision. Oldest high-traffic open feature.
- **[#44925](https://github.com/openclaw/openclaw/issues/44925) — Subagent completion silently lost** (P1 since 2026-03-13, 👍2). Needs product decision; core to the reliability theme.
- **[#40786](https://github.com/openclaw/openclaw/issues/40786) — Backup exclude patterns** (since 2026-03-09; security review pending, linked PR open).
- **[#45494](https://github.com/openclaw/openclaw/issues/45494) — Cron jobs timeout during LLM outages** (P1 regression since 2026-03-13; needs live repro).
- **[#45573](https://github.com/openclaw/openclaw/issues/45573) — Group chat sessions not persisted** (P1 since 2026-03-14; 166+ messages, 1 session recorded).
- **[#54488](https://github.com/openclaw/openclaw/issues/54488) — Session lane starvation** (P1 since 2026-03-25; blocks inbound dispatch 20–30 min).
- **[#44134](https://github.com/openclaw/openclaw/issues/44134) — Google Antigravity bans from tool schema reloading** (P1 since 2026-03-12; account-damaging).
- **[#103804](https://github.com/openclaw/openclaw/issues/103804) — P0 service-env double-quoting** (since 2026-07-10; linked PR open but still needs proof/merge).
- **[#81185](https://github.com/openclaw/openclaw/pull/81185) — Redact exec tool result payloads** (PR open since 2026-05-12, XL, security-boundary, waiting on author). Long-running security improvement with compatibility risk.

**Risk note:** The volume of P1 items carrying both `needs-maintainer-review` and `needs-product-decision` labels suggests the bottleneck is decision capacity, not discovery — 469 issues remain open/active, and the top-50 list alone shows 28 P1/P0 items.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-08-04 | **Data window:** 24-hour community digests for 12 projects

---

## 1. Ecosystem Overview

The personal AI assistant and agent open-source landscape is in a **reliability consolidation phase**, not a feature-expansion phase. Across the twelve tracked projects, the dominant user complaints are silent message loss, session-state corruption, provider-compatibility breakage, and fragile MCP connectivity — not missing capabilities. The ecosystem spans a clear architectural spectrum: JavaScript-based generalists (OpenClaw), Python research flagships (Hermes Agent, CoPaw), Rust/WASM platform builders (IronClaw, ZeroClaw), and niche self-hosted variants (NullClaw in Zig, PicoClaw/NanoClaw as community forks). Community governance is formalizing under load — decision-queue trackers, fixed release days, and verification gates are appearing — because **maintainer review capacity, not discovery, is now the binding constraint**. Users increasingly treat deterministic delivery, auditable security decisions, and seamless multi-provider operation as table stakes.

---

## 2. Activity Comparison

*All issue/PR counts = items updated in the 24-hour digest window.*

| Project | Issues Updated | PRs Updated | Merged/Closed PRs | Issues Closed | Release Status | Health* |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 172 | 31 | 2 patches (v2026.7.1-1, -2) | 8 |
| **Hermes Agent** | 50 | 50 | 3 | 9 | v0.20.0 "Herald" (Aug 3) | 8 |
| **IronClaw** | 45 | 50 | 18 | 9 | None (release PR parked >1 mo) | 7 |
| **ZeroClaw** | 50 | 50 | 3 | 7 | None (v0.9.0 milestone tracked) | 6 |
| **CoPaw (QwenPaw)** | 23 | 50 | 24 | 6 | v2.1.0-beta.1 (Aug 3) | 8 |
| **NanoBot** | 2 | 36 | 25 | 1 | None | 8 |
| **LobsterAI** | 2 | 11 | 6 | 0 | None | 5 |
| **NanoClaw** | 1 | 9 | 6 | 0 | None | 7 |
| **PicoClaw** | 8 | 6 | 3 | 5 | None | 6 |
| **NullClaw** | 1 | 5 | 2 | 0 | None | 5 |
| **Moltis** | 0 | 1 | 0 | 0 | None | 5 |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | None | 2 (dormant) |

*\*Health = analyst composite of throughput, merge responsiveness, release cadence, and backlog/blocker density (1–10).*

**Key observations:**
- **OpenClaw's daily volume is ~10x the nearest peer** (500/500 vs ~50/50), but its merge ratio (34%) and issue-close rate (6%) are diluted by scale; NanoBot (69%), NanoClaw (67%), and CoPaw (48%) show the highest *responsiveness*.
- Hermes, IronClaw, CoPaw, and NanoBot are the healthiest balance of velocity and closure.
- ZeroClaw's 6% merge ratio despite 50 PRs updated signals a serious review bottleneck, acknowledged by the community's new Maintainer Decision Queue (#8692).

---

## 3. OpenClaw's Position

**Advantages vs peers:**
- **Ecosystem gravity:** 500 issues + 500 PRs in 24h is unmatched; the npm plugin ecosystem creates a third-party surface no peer has.
- **Release velocity:** Only project (with CoPaw) shipping releases in the window — two same-day patches, both aimed at the most-complained-about paths (Codex turn completion, Memory Core startup).
- **Reliability engineering depth:** The only project with an explicit, labeled P1 "message-loss / silent-failure" cluster (subagent completion, Codex truncation, session tombstones, lane starvation) and a QA lab adding empirical evidence for previously unverified features (sandbox isolation, progress followthrough).
- **Frontier-model integration:** Deep Codex/ACP integration work (turn termination, hook relay for detached subagents) is more advanced than peers' model-adapter work.

**Technical approach differences:**
- Stabilization-first: 172 PRs merged in 24h, dominated by bug fixes and QA coverage — not architecture refactors (contrast IronClaw's Reborn waves) or feature landings.
- "Diamond lobster" severity taxonomy couples impact with product decisions, surfacing a **decision bottleneck**: many top-severity issues carry both `needs-maintainer-review` and `needs-product-decision` with 469 open issues (28 P1/P0 in the top-50).

**Community size comparison:**
- Hermes has the larger *cumulative* contributor base (650+ contributors, ~1,400 merged PRs since v0.19.0), but OpenClaw's *daily* engagement is roughly 10x Hermes's and IronClaw's, and ~20x CoPaw's and ZeroClaw's. OpenClaw remains the de-facto reference implementation for multi-channel personal agents.

---

## 4. Shared Technical Focus Areas

Requirements emerging independently across multiple projects:

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **Delivery guarantees / no silent failure** | OpenClaw, CoPaw, ZeroClaw, Hermes, PicoClaw | At-least-once semantics for final replies; loud failures instead of false "success" (CoPaw WeChat cron #6614 burned ~44M tokens; OpenClaw Codex truncation #84516; ZeroClaw Telegram duplicates #9718; PicoClaw MCP hang #3269) |
| **Provider compatibility & failure-class fallback** | NanoBot, CoPaw, ZeroClaw, OpenClaw, NullClaw | Handle model-version drift (NanoBot Opus 5 rejection #5235), cross-provider tool-call replay sanitization (NanoBot #5230), fallback with cooldown/quarantine (OpenClaw #47910, CoPaw #6659), proxy-aware transport (NullClaw #982/#983, ZeroClaw #9606) |
| **MCP lifecycle management** | Moltis, NanoClaw, IronClaw, PicoClaw | Managed discovery/install/update/rollback (Moltis #1183), remote Streamable HTTP support (NanoClaw #3092), auth during registration + correct `destructiveHint` defaults (IronClaw #7024/#7068), graceful failure recovery (PicoClaw #3269) |
| **Memory trust, provenance & consistency** | OpenClaw, ZeroClaw, Hermes, NanoBot, CoPaw | Source-based trust tagging against prompt injection (OpenClaw #7707), separation of authoritative storage vs enrichment (ZeroClaw #9072), schema-validated consolidation (ZeroClaw RFC #6998), consistent behavior across users (OpenClaw #43747), self-improvement misclassification (Hermes #30220) |
| **Streaming tool-calls & real-time UX** | NullClaw, IronClaw, OpenClaw, CoPaw, ZeroClaw | Structured streaming tool-call deltas (NullClaw #964/#965), SSE keep-alive correctness (IronClaw #7070), progress-before-work evidence (OpenClaw QA), structured run outcomes for API automation (CoPaw #5930), response-cache request boundaries (ZeroClaw #9720) |
| **Desktop / OS packaging** | Hermes, CoPaw, LobsterAI, ZeroClaw, IronClaw | Bundled runtimes (CoPaw #6579, Hermes uv #69216), WebView2 crash recovery (CoPaw #6647), installer process cleanup (LobsterAI #2420), macOS launch reliability (ZeroClaw #7527, Hermes #77618) |
| **Security & audit trust** | ZeroClaw, OpenClaw, IronClaw, Hermes | Approval audit trails that cannot be falsified (ZeroClaw #9642), sandbox/workspace isolation (OpenClaw, IronClaw), secrets hygiene in configs (Hermes #78086), WASM guest secret exposure (IronClaw #7041) |

---

## 5. Differentiation Analysis

| Project | Feature Focus | Target Users | Technical Architecture |
|---|---|---|---|
| **OpenClaw** | Multi-channel personal agent; subagent orchestration; reliability at scale | Developers, power users, self-hosters | JavaScript/npm, gateway + Memory Core, "diamond lobster" severity model |
| **Hermes Agent** | Research-grade agent with skills system, self-improvement loop, desktop apps | Researchers, advanced users | Python (uv/pip), skills bundles, Relay session model |
| **IronClaw** | Platform architecture (Reborn refactor), MCP-first, WASM extensions | Platform/ops teams, NEAR ecosystem | Rust, WASM `wit/` contracts, formal refactoring waves, Wednesday release cadence |
| **ZeroClaw** | Security-hardened agent, RFC-driven, observability-first (OTel) | Ops/security-conscious deployers | Rust (tokio), React/Vite WebUI, formal Maintainer Decision Queue |
| **CoPaw (QwenPaw)** | China-market desktop agent; WeChat/Feishu channels; agentscope/Qwen integration | Chinese-speaking desktop/power users | Python/agentscope, bundled runtime, beta-release culture, credit campaigns |
| **NanoBot** | OpenAl-compatible gateway breadth; WebUI polish; i18n | Lightweight gateway users | Python, provider-capabilities profiles, high merge responsiveness |
| **LobsterAI** | Electron desktop product; Windows reliability; custom providers | Consumer desktop (CN), freemium | Electron, NSIS packaging, startup credit campaigns (commercial signals) |
| **Moltis** | MCP server lifecycle infrastructure | MCP server operators | Git-repo bundles, vault/SSH/credential integration |
| **PicoClaw / NanoClaw / NullClaw** | Niche variants: Sipeed-adjacent WebUI; iMessage-focused with approval cards; Zig self-hosted with proxy/scheduler focus | Hobbyists, specific-channel users | JS/TS (Pico/NanoClaw), Zig (NullClaw) |

**Core architectural divide:** JavaScript/Python generalists (OpenClaw, Hermes, CoPaw, NanoBot) compete on model breadth and channel coverage; Rust/WASM platforms (IronClaw, ZeroClaw) compete on security, correctness, and formal process; niche forks compete on channel specialization and minimal footprint.

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapid iteration (shipping weekly/daily):**
- **OpenClaw** — Sustained stabilization at massive scale; two releases/day; expanding QA lab. Risk: decision bottleneck.
- **Hermes Agent** — Post-major-release (v0.20.0) bug-fix mode; responsive triage (duplicates closed quickly); huge cumulative contributor base.
- **IronClaw** — Mid-architecture-refactor (Waves 2–4); 18 PRs merged in 24h; formalized release strategy; CI tooling gaps are the main friction.
- **CoPaw** — Active beta cycle (v2.1.0-beta.1) with verification gates; most reported regressions get fix PRs within days; dependency-drift vs upstream `agentscope` is the key risk.
- **NanoBot** — Steady, high-merge-ratio incrementalism; long-lived PRs (Codex dual-mode #1550, open since March) finally resolving.

**Tier 2 — Moderate / community-driven:**
- **PicoClaw** — Community bug reports + patches; two high-severity issues stale-labelled with no fix PR.
- **NanoClaw** — Small but responsive core team (67% merge ratio); infrastructure hardening + session-reliability focus.

**Tier 3 — Quiet / dormant:**
- **NullClaw** — Stable but thin: 3-month-old scheduler auth bug unresolved; proxy/streaming PRs advancing slowly.
- **LobsterAI** — Merges land, but April community PRs (Markdown export, retry button, Electron bump) remain stale — triage bottleneck.
- **Moltis** — Single large feature PR; no bug volume — healthy but low-velocity.
- **ZeptoClaw** — No activity; effectively dormant.

**Maturity markers:** Formal process is emerging exactly where scale demands it — IronClaw's Wednesday release strategy, ZeroClaw's Maintainer Decision Queue, CoPaw's per-platform release-verification checkpoints, OpenClaw's QA-lab evidence culture.

---

## 7. Trend Signals

**For AI agent developers, the community feedback across all projects points to:**

1. **Deterministic delivery is the new baseline.** The single largest complaint cluster across OpenClaw, CoPaw, ZeroClaw, and Hermes is silent failure — work completes but the answer never arrives. Build retry/terminal-turn guarantees and *loud* failure paths into agent loops from day one.

2. **Provider abstraction layers are breaking under real-world load.** Hardcoded model lists (NanoBot's `omit_temperature` missing `opus-5`), cross-provider tool-call replay failures, and 402/429 retry death spirals are recurring. Failure-class-based fallback with cooldowns/quarantine is becoming a required feature, not a nice-to-have.

3. **MCP is the universal plugin protocol — and its lifecycle is the open frontier.** Discovery, installation, updates, rollback, auth, remote transport, and failure recovery are being independently solved by Moltis, NanoClaw, IronClaw, and PicoClaw. Expect consolidation around a managed-lifecycle standard.

4. **Memory trust and provenance are the next reliability frontier.** Source-based trust tagging (OpenClaw #7707), authoritative-storage-vs-enricher separation (ZeroClaw #9072), and consistent memory behavior (OpenClaw #43747) all point to memory poisoning and incoherence as top-of-mind risks.

5. **Streaming-native tool-call execution is a core architecture decision.** NullClaw, IronClaw, OpenClaw, and CoPaw are all investing in SSE/structured streaming, progress-before-work evidence, and run-outcome events. Real-time agent UX is the next battleground.

6. **Desktop/OS packaging is the most underestimated reliability surface.** Python runtime absence, WebView2 crashes, NSIS survivor processes, macOS launch failures, and Windows path translation bugs span five projects. Bundled runtimes and installer hardening are mandatory for consumer-grade agents.

7. **Audit-grade security logging is required for trust.** ZeroClaw's approval-timeout-mislabeled-as-denial bug (#9642) shows users inspect audit trails byte-for-byte. Approval authorization, secrets hygiene, sandbox boundaries, and injection tainting are moving from security-team asks to user-visible requirements.

8. **Community governance is formalizing under load.** Decision queues (ZeroClaw #8692), fixed release days (IronClaw), verification gates (CoPaw), and QA evidence (OpenClaw) are emerging because maintainer capacity — not code discovery — is the ecosystem's binding constraint. Contributors should expect formal review processes to become the norm.

9. **Regional channels and localization matter commercially.** WeChat/Feishu (CoPaw), Signal (Hermes), iMessage (NanoClaw), Japanese WebUI (PicoClaw), pt-BR desktop (Hermes), and CJK IME handling (NanoBot) show the user base is genuinely global — channel- and locale-specific polish is a differentiator.

**Bottom line:** The ecosystem is converging on a shared understanding that **reliable delivery, provider-agnostic resilience, managed MCP lifecycles, trustworthy memory, and streaming-native tool loops** are the foundations of production-grade AI agents. Projects that formalize review and release processes while investing in these foundations — OpenClaw, Hermes, IronClaw, CoPaw, NanoBot — are best positioned for the next growth phase.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-04

## 1. Today's Overview

NanoBot saw high activity in the last 24 hours: 36 pull requests were updated, with 25 merged/closed and 11 still open, while 2 issues were updated (1 open, 1 closed). No new releases were published in this window. The PR pipeline shows strong momentum across provider compatibility, WebUI polish, and gateway/memory reliability, including multiple priority-p1 fixes landing. One new high-impact bug was reported — Anthropic Opus 5 configuration being rejected — and currently has no associated fix PR. Overall, project health looks solid, with maintainers actively merging work and clearing long-lived PRs.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Project Progress

The following notable PRs were merged/closed in the last 24 hours:

- **Mattermost thread group policy** — [#5232](https://github.com/HKUDS/nanobot/pull/5232) added separate mention/group policy support for threads vs. main channels; a follow-up open PR [#5233](https://github.com/HKUDS/nanobot/pull/5233) exposes this in the WebUI.
- **DeepSeek reasoning fix** — [#5214](https://github.com/HKUDS/nanobot/pull/5214) fixed wire-invalid DeepSeek reasoning items causing OpenAI Responses API deserialization failures.
- **WebUI i18n audit** — [#5227](https://github.com/HKUDS/nanobot/pull/5227) completed a full locale audit, fixing untranslated strings and Chinese terminology inconsistencies.
- **Codex dual-mode support** — [#1550](https://github.com/HKUDS/nanobot/pull/1550) finally closed after a long lifecycle; it adds OAuth + custom Responses mode support for `openai_codex`.
- **ModelScope docs** — [#5038](https://github.com/HKUDS/nanobot/pull/5038) documented the ModelScope provider with JSON examples for LLM and image generation.
- **Local trigger messages in WebUI** — [#5228](https://github.com/HKUDS/nanobot/pull/5228) now persists and displays actual local trigger messages instead of only the trigger command.
- **IME input stability** — [#5229](https://github.com/HKUDS/nanobot/pull/5229) stabilized thread scroll/autosize behavior during IME composition.
- **Eden AI provider** — [#4861](https://github.com/HKUDS/nanobot/pull/4861) added Eden AI as a built-in OpenAI-compatible gateway provider.
- **Cron validation** — [#5141](https://github.com/HKUDS/nanobot/pull/5141) adds cron expression syntax validation before persistence.
- **Mobile keyboard fix** — [#5226](https://github.com/HKUDS/nanobot/pull/5226) dismisses the mobile virtual keyboard after sending.
- **Gateway shutdown cleanup** — [#5215](https://github.com/HKUDS/nanobot/pull/5215) closes exec/MCP resources deterministically during gateway stop.
- **Plugin installer fallback** — [#5213](https://github.com/HKUDS/nanobot/pull/5213) uses `uv` when `pip` is unavailable in `uv tool` environments.
- **Memory tail robustness** — [#5221](https://github.com/HKUDS/nanobot/pull/5221) hardened `history.jsonl` tail reads against invalid UTF-8.

## 4. Community Hot Topics

Comment/reaction counts were not populated in the snapshot, so focus items are identified by priority and update activity:

- **[#5234 — feat(agent): integrate mst-python as a metasearch provider](https://github.com/HKUDS/nanobot/pull/5234)** [OPEN, p1]  
  Adds a Meta-Search Tool provider that aggregates multiple search engines using Reciprocal Rank Fusion. This signals strong demand for richer, multi-engine web search behind NanoBot agents.

- **[#5211 — feat(session): add cross-session search and mentions](https://github.com/HKUDS/nanobot/pull/5211)** [OPEN]  
  Enables bounded read-only access to past sessions and lets WebUI users mention other chats. This is a significant UX/context feature request.

- **[#5230 — fix(providers): drop unsigned tool calls when replaying to Gemini](https://github.com/HKUDS/nanobot/pull/5230)** [OPEN, p1]  
  Addresses hard `400 INVALID_ARGUMENT` failures when provider-switched conversation history reaches Gemini. Cross-provider routing reliability is clearly a major community pain point.

- **[#5233 — feat(mattermost): separate group policy for threads and expose in WebUI](https://github.com/HKUDS/nanobot/pull/5233)** [OPEN]  
  Follow-up to the closed Mattermost thread policy PR; shows active iteration on Mattermost channel/thread permissions.

- **[#5235 — [bug] Anthropic Opus 5 configuration always rejected](https://github.com/HKUDS/nanobot/issues/5235)** [OPEN]  
  Newly reported issue with no comments yet, but it disables the latest Anthropic model on NanoBot, making it a likely hot topic.

## 5. Bugs & Stability

Ranked by severity:

1. **Anthropic Opus 5 rejected** — [#5235](https://github.com/HKUDS/nanobot/issues/5235) [OPEN]  
   The `omit_temperature` substring list still lacks `"opus-5"`, so NanoBot sends deprecated temperature parameters and the API rejects requests. No fix PR exists yet; this blocks Opus 5 users.

2. **Gemini replay failure on unsigned tool calls** — [#5230](https://github.com/HKUDS/nanobot/pull/5230) [OPEN, p1]  
   Provider-switched or fallback-routed conversations containing foreign tool calls fail with `400 INVALID_ARGUMENT`. A fix PR is open.

3. **DeepSeek reasoning wire-invalid items** — [#5214](https://github.com/HKUDS/nanobot/pull/5214) [CLOSED, p1]  
   Fixed serde-style deserialization failures when DeepSeek reasoning content was sent through the Responses API.

4. **Gateway shutdown stalls and asyncio teardown noise** — [#5215](https://github.com/HKUDS/nanobot/pull/5215) [CLOSED, p1]  
   Fixed deterministic cleanup of exec sessions and MCP subprocesses on stop.

5. **Telegram fenced code corruption** — [#5222](https://github.com/HKUDS/nanobot/pull/5222) [OPEN, p2]  
   Language tags like `c++` or `objective-c` are mishandled, corrupting code blocks in Telegram output.

6. **Memory tail invalid UTF-8** — [#5221](https://github.com/HKUDS/nanobot/pull/5221) [CLOSED, p2]  
   Fixed strict UTF-8 decoding when reading the last 4KiB of `history.jsonl`.

7. **WebUI mobile keyboard / IME issues** — [#5226](https://github.com/HKUDS/nanobot/pull/5226), [#5229](https://github.com/HKUDS/nanobot/pull/5229) [CLOSED, p2]  
   Composer behavior on mobile and during IME input was stabilized.

8. **Frontend module MIME type failure** — [#5190](https://github.com/HKUDS/nanobot/issues/5190) [CLOSED]  
   Browser rejected module scripts served as `text/plain`. The issue was closed in this window, though no explicit fix PR appears in the snapshot.

## 6. Feature Requests & Roadmap Signals

Several open PRs indicate where NanoBot is heading:

- **Unified metasearch** — [#5234](https://github.com/HKUDS/nanobot/pull/5234) proposes MST-based aggregation of DuckDuckGo, Google, Brave, Bing, etc., suggesting upcoming search-provision improvements.
- **Cross-session memory and mentions** — [#5211](https://github.com/HKUDS/nanobot/pull/5211) adds persistent session references and `@`-mention selection from past chats.
- **Dream idle-session archiving** — [#5231](https://github.com/HKUDS/nanobot/pull/5231) ensures idle sessions are archived for Dream memory processing, fixing a blind spot in memory ingestion.
- **Mattermost thread policies** — [#5233](https://github.com/HKUDS/nanobot/pull/5233) continues channel-feature maturation with separate thread mention rules.
- **Declarative Responses capabilities** — [#5204](https://github.com/HKUDS/nanobot/pull/5204) refactors Responses provider routing with a capabilities profile, though it currently has a `conflict` label and needs rebase/attention.

Predicted for the next release: Gemini tool-call replay fix, DeepSeek wire-format fix, Mattermost thread policy + WebUI exposure, MST metasearch, and cross-session search/mentions, assuming p1/p2 items continue merging.

## 7. User Feedback Summary

Real user pain points visible in this window are primarily around provider compatibility and WebUI usability:

- Users of new model releases (e.g., Anthropic Opus 5) are blocked by stale hardcoded provider settings.
- Cross-provider conversation switching is fragile: tool calls produced by one provider can break another provider's API contract.
- WebUI users on mobile and with CJK IME input face keyboard/scroll/autosizing annoyances; several fixes landed this cycle.
- Deployments via `uv tool` without `pip` break plugin installation; the project now gracefully falls back to `uv`.
- Community demand for more providers is strong: Eden AI, ModelScope, and MST metasearch all advanced in the same 24-hour window.

Satisfaction indicators are mostly positive: many p1 bugs were fixed quickly, and long-standing PRs like Codex dual-mode were finally closed. The Opus 5 issue remains the clearest current pain point with no fix yet.

## 8. Backlog Watch

No open issues appear genuinely abandoned in this snapshot. The closest items needing maintainer attention:

- **[#5235](https://github.com/HKUDS/nanobot/issues/5235)** — New Opus 5 bug, no fix PR, blocks a recent flagship model.
- **[#5204](https://github.com/HKUDS/nanobot/pull/5204)** — Responses capabilities refactor is p1 but carries a `conflict` label; likely needs a rebase/resolution.
- **[#5230](https://github.com/HKUDS/nanobot/pull/5230)** — p1 Gemini replay fix is still open and could use review.
- **[#5222](https://github.com/HKUDS/nanobot/pull/5222)** — Telegram code-block fix is p2 but affects real output quality.

Also notable: PR #1550 was open since 2026-03-05 and finally closed on 2026-08-03 — not a backlog issue anymore, but a good sign that even long-lived contributions are being resolved.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-04

*Data window: issues/PRs updated in the last 24h; release noted from Aug 3, 2026.*

---

## 1. Today's Overview

Hermes Agent is in a high-activity period immediately following the **v0.20.0 “Herald” release** on August 3, 2026. In the last 24 hours, **50 issues** and **50 PRs** were updated, with **9 issues closed** and **3 PRs merged/closed**. The release notes report large momentum since v0.19.0: ~3,650 commits, ~1,400 merged PRs, ~1,200 issues closed, and 650+ contributors. Overall project health is strong, but the issue stream shows two recurring pressure points: **Telegram gateway connection hangs** and **Windows-native compatibility**. Maintainer triage appears responsive, with several duplicate/invalid reports closed quickly.

---

## 2. Releases

### v2026.8.3 — Hermes Agent v0.20.0 “The Herald Release” (Aug 3, 2026)

The provided release notes emphasize scale rather than detailed changelog content:

- ~3,650 commits since v0.19.0
- ~1,400 merged PRs
- ~5,200 files changed
- ~559,000 insertions / ~405,000 deletions
- ~1,200 issues closed
- 650+ contributors

No explicit breaking-change or migration notes were included in the provided excerpt. Based on issue activity, upgrade attention should focus on **Telegram gateway initialization** ([#78052](https://github.com/NousResearch/hermes-agent/issues/78052), [#72454](https://github.com/NousResearch/hermes-agent/issues/72454)) and **Windows setup/file-tool behavior** ([#69216](https://github.com/NousResearch/hermes-agent/issues/69216), [#76886](https://github.com/NousResearch/hermes-agent/issues/76886)).

---

## 3. Project Progress

- **3 PRs were merged/closed in the last 24h.** One is visible in the sample:
  - [#78005](https://github.com/NousResearch/hermes-agent/pull/78005) *(closed)* — Adds `skills.index_excluded` and `skills.platform_index_excluded` as a third visibility state: hidden from discovery indexes but still exact-loadable. This is applied consistently across prompt assembly, `skills_list`, slash-command discovery, `--skills` forced preload, and external skill handling.
- **9 issues were closed**, including:
  - [#71322](https://github.com/NousResearch/hermes-agent/issues/71322) — `/resume` blocked for pre-v23-migration sessions.
  - [#24617](https://github.com/NousResearch/hermes-agent/issues/24617) — DeepSeek prompt-caching support.
  - [#78052](https://github.com/NousResearch/hermes-agent/issues/78052), [#67498](https://github.com/NousResearch/hermes-agent/issues/67498) — Telegram gateway hang reports closed as duplicates.
  - [#78029](https://github.com/NousResearch/hermes-agent/issues/78029) — Invalid issue, wrong repo.
  - [#78071](https://github.com/NousResearch/hermes-agent/issues/78071) — Sanitizer gap for tool messages with missing `tool_call_id`.

Several important **open PRs** advanced in the same window, including Windows fixes, Relay session recovery, and security hardening:

- [#78087](https://github.com/NousResearch/hermes-agent/pull/78087) — Recover corrupted Relay session stacks after failed turn cleanup.
- [#78088](https://github.com/NousResearch/hermes-agent/pull/78088) — Pass `reasoning_effort` to DashScope coding-plan endpoint.
- [#78086](https://github.com/NousResearch/hermes-agent/pull/78086) — Keep webhook and model API keys out of `config.yaml`.
- [#78082](https://github.com/NousResearch/hermes-agent/pull/78082) — Restore skills bundle/installed content-hash symmetry on Windows.
- [#78079](https://github.com/NousResearch/hermes-agent/pull/78079) — Fix sensitive-path write guard silently no-oping on Windows.

---

## 4. Community Hot Topics

The most active issues by comment count:

- [#30220](https://github.com/NousResearch/hermes-agent/issues/30220) *(7 comments)* — Background Self-Improvement Review misclassifies content between memory/skill/user stores.  
  *Underlying need:* reliable unsupervised memory consolidation for long-term agent behavior.

- [#76886](https://github.com/NousResearch/hermes-agent/issues/76886) *(7 comments)* — `read_file` reports valid UTF-8 text as binary when the 1000-byte sample cuts a multibyte character. Regression in 0.19.1.  
  *Underlying need:* robust file handling for local knowledge workers, e.g. Obsidian note users.

- [#67498](https://github.com/NousResearch/hermes-agent/issues/67498) *(7 comments, 1 👍)* — Telegram gateway hangs at “Connecting to Telegram (attempt 1/8)” even after fallback-IP workaround.  
  *Underlying need:* dependable messaging gateway for always-on agents.

- [#39043](https://github.com/NousResearch/hermes-agent/issues/39043) *(7 comments, 2 👍)* — Signal adapter lacks native quote/reply, edit, remote-delete, and read receipts.  
  *Underlying need:* feature parity across messaging platforms.

- [#29771](https://github.com/NousResearch/hermes-agent/issues/29771) *(5 comments)* — Extend credential pool to search backends (Tavily / Exa).  
  *Underlying need:* unified secret management across web/search providers.

- [#69216](https://github.com/NousResearch/hermes-agent/issues/69216) *(5 comments, 1 👍)* — `uv` installed but not found on native Windows 11.  
  *Underlying need:* smooth onboarding for new Windows users.

PR comment counts were not populated in the provided data, but the most attention-heavy PRs in the last 24h were clearly the new Windows fixes, Relay recovery, and API-key security work.

---

## 5. Bugs & Stability

Ranked by severity:

### P1 / Critical
- [#69216](https://github.com/NousResearch/hermes-agent/issues/69216) — `uv` installed but not found during Windows install. New-user blocker; no fix PR visible in the sample.
- [#78052](https://github.com/NousResearch/hermes-agent/issues/78052) — Telegram gateway connect hangs **forever** in v0.20.0 inside the gateway process only; closed as duplicate.
- [#67498](https://github.com/NousResearch/hermes-agent/issues/67498) — Telegram gateway hangs at “attempt 1/8”, all threads idle; closed, but the underlying complaint persists in [#72454](https://github.com/NousResearch/hermes-agent/issues/72454).

### P2 / Significant
- [#76886](https://github.com/NousResearch/hermes-agent/issues/76886) — UTF-8 misdetection in `read_file`; regression in 0.19.1.
- [#67629](https://github.com/NousResearch/hermes-agent/issues/67629) — `search_files` with absolute Windows path fails because `_bash_safe_path` rewrites `D:\` to `/d/`.
- [#10376](https://github.com/NousResearch/hermes-agent/issues/10376) — Profile isolation incomplete: `--clone` copies memory, and agents can read across profile boundaries.
- [#68559](https://github.com/NousResearch/hermes-agent/issues/68559) — Multiplexed gateway ignores routed profile terminal backend.
- [#76902](https://github.com/NousResearch/hermes-agent/issues/76902) — Desktop app sets `TERMINAL_CWD` to home dir; `SubdirectoryHintTracker` scans the entire home subtree.
- [#78072](https://github.com/NousResearch/hermes-agent/issues/78072) — Custom provider `model.provider` is set to display name instead of runtime name, causing “Unknown provider” errors.
- [#78022](https://github.com/NousResearch/hermes-agent/issues/78022) — Webhook platform drops into a reconnect loop on port collision.
- [#73692](https://github.com/NousResearch/hermes-agent/issues/73692) — `agent.disabled_toolsets: [browser]` silently removes `web_search`.
- [#60551](https://github.com/NousResearch/hermes-agent/issues/60551) — Config write guard blocks `config.yaml` edits; `hermes config set` writes string scalars for list keys.

### Fix PRs opened today
- [#78079](https://github.com/NousResearch/hermes-agent/pull/78079) — Fixes sensitive-path write guard no-op on Windows.
- [#78082](https://github.com/NousResearch/hermes-agent/pull/78082) — Fixes skills content-hash symmetry on Windows.
- [#78083](https://github.com/NousResearch/hermes-agent/pull/78083) — Fixes cron lifecycle guard bypass via embedded NUL bytes.
- [#78087](https://github.com/NousResearch/hermes-agent/pull/78087) — Recovers corrupted Relay session stacks.
- [#78088](https://github.com/NousResearch/hermes-agent/pull/78088) — Fixes missing `reasoning_effort` for DashScope coding-plan.

---

## 6. Feature Requests & Roadmap Signals

Strong user-driven feature signals:

- [#39043](https://github.com/NousResearch/hermes-agent/issues/39043) — Full native Signal quote/reply, edit, remote-delete, and read-receipt support.
- [#29771](https://github.com/NousResearch/hermes-agent/issues/29771) — Credential pool extension to search backends (Tavily / Exa).
- [#78061](https://github.com/NousResearch/hermes-agent/issues/78061) — Let a tool consume the output of a previous tool without the model re-emitting it, especially for binary MCP tool content.
- [#77744](https://github.com/NousResearch/hermes-agent/issues/77744) — Incremental status-bar context-percentage updates during tool loops.
- [#77367](https://github.com/NousResearch/hermes-agent/issues/77367) — Comprehensive “Oh My Pi”–style analysis proposal: LSP, AST, `xd://`, security, SQLite, conflict detection.
- [#68859](https://github.com/NousResearch/hermes-agent/issues/68859) — Define explicit tool retry semantics for lifecycle hooks.

### Likely next-version candidates
Open PRs that look close to landing and align with roadmap signals:

- [#56613](https://github.com/NousResearch/hermes-agent/pull/56613) — Persistent exponential cooldown manager for provider failover.
- [#65102](https://github.com/NousResearch/hermes-agent/pull/65102) — Resolve configured API session identities early.
- [#53958](https://github.com/NousResearch/hermes-agent/pull/53958) — Configurable `compression.warn_after_compressions` threshold.
- [#52107](https://github.com/NousResearch/hermes-agent/pull/52107) — Bundled Box productivity skill.
- [#78005](https://github.com/NousResearch/hermes-agent/pull/78005) — Skill index-excluded visibility state *(closed, likely available soon)*.

---

## 7. User Feedback Summary

- **Gateway reliability is the biggest dissatisfaction driver.** Multiple users report Telegram connection hangs across different versions and workarounds ([#67498](https://github.com/NousResearch/hermes-agent/issues/67498), [#78052](https://github.com/NousResearch/hermes-agent/issues/78052), [#72454](https://github.com/NousResearch/hermes-agent/issues/72454)).
- **Windows-native users are experiencing consistent friction:** install failures ([#69216](https://github.com/NousResearch/hermes-agent/issues/69216)), path translation bugs ([#67629](https://github.com/NousResearch/hermes-agent/issues/67629)), .env BOM issues ([#65124](https://github.com/NousResearch/hermes-agent/pull/65124)), and skill hash mismatches ([#78082](https://github.com/NousResearch/hermes-agent/pull/78082)).
- **Desktop app users are reporting real usability issues:** voice conversation only works for the first turn ([#75329](https://github.com/NousResearch/hermes-agent/issues/75329)), macOS 15 launch failure despite minimum macOS 12 docs ([#77618](https://github.com/NousResearch/hermes-agent/issues/77618)), and duplicate gateway status indicators ([#78078](https://github.com/NousResearch/hermes-agent/issues/78078)).
- **Local knowledge workers rely on file tooling:** the `read_file` UTF-8 regression directly broke Obsidian note workflows ([#76886](https://github.com/NousResearch/hermes-agent/issues/76886)).
- **Configuration and secret-management pain is recurring:** API keys landing in `config.yaml` ([#78086](https://github.com/NousResearch/hermes-agent/pull/78086)), provider display-name confusion ([#78072](https://github.com/NousResearch/hermes-agent/issues/78072)), and `disabled_toolsets` hiding `web_search` ([#73692](https://github.com/NousResearch/hermes-agent/issues/73692)).
- **Positive signals:** community localization contributions like pt-BR desktop translation ([#78081](https://github.com/NousResearch/hermes-agent/pull/78081)), new bundled skills ([#52107](https://github.com/NousResearch/hermes-agent/pull/52107)), and quick triage of invalid/noise issues ([#78029](https://github.com/NousResearch/hermes-agent/issues/78029)).

---

## 8. Backlog Watch

Long-running or decision-blocked items that appear to need maintainer attention:

- [#10376](https://github.com/NousResearch/hermes-agent/issues/10376) *(created Apr 15, P2, needs-decision)* — Profile isolation incomplete: `--clone` copies memory, and cross-profile reads are possible. Oldest significant open issue in the sample with no visible fix PR.
- [#30220](https://github.com/NousResearch/hermes-agent/issues/30220) *(created May 22, P2)* — Background Self-Improvement Review misclassifies content between memory/skill/user stores. 7 comments; no visible fix PR.
- [#29771](https://github.com/NousResearch/hermes-agent/issues/29771) *(created May 21, P2)* — Credential pool extension to search backends. 5 comments; no visible fix PR.
- [#39043](https://github.com/NousResearch/hermes-agent/issues/39043) *(created Jun 4, P3)* — Signal adapter native quote/reply/edit/delete/read-receipt support. 7 comments and 2 👍; a likely candidate for roadmap prioritization.
- [#64392](https://github.com/NousResearch/hermes-agent/issues/64392) *(created Jul 14, P2, needs-decision)* — Duplicate skill names handled inconsistently across list, prompt, and `skill_view`.

Open PRs waiting for review or decisions:

- [#52107](https://github.com/NousResearch/hermes-agent/pull/52107) *(Jun 24)* — Bundled Box productivity skill.
- [#53958](https://github.com/NousResearch/hermes-agent/pull/53958) *(Jun 28)* — Configurable compression warning threshold.
- [#56613](https://github.com/NousResearch/hermes-agent/pull/56613) *(Jul 1)* — Persistent exponential cooldown manager for provider failover.
- [#63789](https://github.com/NousResearch/hermes-agent/pull/63789) *(Jul 13)* — Desktop spawn-helper `chmod 755` fix for macOS 26 node-pty failure.
- [#65102](https://github.com/NousResearch/hermes-agent/pull/65102) *(Jul 15)* — Early resolution of configured API session identities.

These items are not necessarily stale — many were updated in the last 24h — but they lack visible resolution paths or explicit maintainer decisions in the provided data.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-04

## Today's Overview

PicoClaw saw a moderate 24-hour maintenance wave: 8 issues and 6 PRs were updated, with 5 issues closed and 3 PRs moved to closed/merged. Three issues and three PRs remain open/active. No new release was published in this window; user reports reference v0.3.1 and nightly commit `2cf030d2`. The activity is mostly community-driven bug reporting and patch submission, alongside stale-item cleanup. Overall project health is stable, but recurring reliability concerns around MCP failures, routed-agent context, and Web UI performance remain visible.

## Releases

No new releases in this window.

## Project Progress

The three PRs moved to closed/merged in the last 24 hours:

- [#3267](https://github.com/sipeed/picoclaw/pull/3267) — Fix scope bug for refresh token in Antigravity auth. This addresses `PERMISSION_DENIED` errors during token refresh after primary auth succeeds.
- [#3273](https://github.com/sipeed/picoclaw/pull/3273) — Add Japanese (`ja`) localization to the WebUI, fulfilling [#3272](https://github.com/sipeed/picoclaw/issues/3272). Adds a full 968-line `ja.json`, `dayjs/locale/ja`, and i18n registration.
- [#3202](https://github.com/sipeed/picoclaw/pull/3202) — Fix routing ID normalization so leading/trailing underscores are stripped, making output conform to `^[a-z0-9][a-z0-9_-]{0,63}$`.

These are not yet user-visible in a release, but they represent incremental fixes to auth reliability, localization, and routing consistency.

## Community Hot Topics

Most active items by comments and reactions:

- [#3281](https://github.com/sipeed/picoclaw/issues/3281) — **Web UI chat input laggy with long history** (3 comments, 1 👍). Users need smooth input even with extended session history; current behavior degrades noticeably.
- [#3269](https://github.com/sipeed/picoclaw/issues/3269) — **MCP server connection failure hangs the agent loop** (2 comments, 1 👍). High-impact reliability concern: a failed MCP connection can make the chat interface completely unresponsive.
- [#3276](https://github.com/sipeed/picoclaw/issues/3276) — **Launcher support for externally-managed gateway/systemd** (2 comments). Headless users want `picoclaw-launcher` to detect an external gateway and avoid hard-failing on unknown channel types.
- [#3272](https://github.com/sipeed/picoclaw/issues/3272) — **Japanese localization request** (2 comments). Addressed by merged/closed PR [#3273](https://github.com/sipeed/picoclaw/pull/3273).
- [#3301](https://github.com/sipeed/picoclaw/issues/3301) — **`/clear` and auto-compression broken for routed non-default agents** (1 comment). Multi-agent Discord/Telegram users are losing context memory and compaction.

Underlying needs: better long-conversation handling, graceful MCP failure recovery, and reliable per-agent context management.

## Bugs & Stability

Bugs updated in the last 24h, ranked by severity:

1. **High — [#3269](https://github.com/sipeed/picoclaw/issues/3269): MCP connection failure hangs the agent loop.**  
   Chat stops replying entirely when an MCP server connection fails. No fix PR is currently visible; this needs maintainer priority.

2. **High — [#3301](https://github.com/sipeed/picoclaw/issues/3301): `/clear` and session auto-compression do not work for chats routed to a non-default agent.**  
   Affects users with dispatch rules. Open fix PR: [#3316](https://github.com/sipeed/picoclaw/pull/3316).

3. **Medium — [#3281](https://github.com/sipeed/picoclaw/issues/3281): Web UI input lag with moderately long history.**  
   UX degradation in active long-running sessions. No linked fix PR yet.

4. **Medium — [#3264](https://github.com/sipeed/picoclaw/issues/3264): `SplitMessage` hangs on oversized fenced-code info string.**  
   Potential infinite loop in channel message splitting. Closed in this window, but no resolution details are visible.

5. **Low/Medium — [#3265](https://github.com/sipeed/picoclaw/issues/3265): Gateway startup fails with unknown `deltachat` type even when deltachat is not configured.**  
   Closed as stale; likely related to the hard-fail behavior described in [#3276](https://github.com/sipeed/picoclaw/issues/3276).

6. **Low — [#3268](https://github.com/sipeed/picoclaw/issues/3268): `exec` tool `action` parameter should default to `"run"`.**  
   Closed; improves LLM call reliability when `action` is omitted.

## Feature Requests & Roadmap Signals

- **Japanese localization** — Requested in [#3272](https://github.com/sipeed/picoclaw/issues/3272), implemented in [#3273](https://github.com/sipeed/picoclaw/pull/3273). Likely to appear in the next release.
- **Externally-managed gateway/systemd detection** — [#3276](https://github.com/sipeed/picoclaw/issues/3276) closed as stale; may need a follow-up PR to fully land.
- **Telegram topics in private bot chats** — [#3315](https://github.com/sipeed/picoclaw/pull/3315) is an open PR adding support for `IsTopicMessage` in private chats.
- **Routed-agent context management** — [#3316](https://github.com/sipeed/picoclaw/pull/3316) addresses history, summarization, compression, and seahorse bootstrap for non-default routed agents.
- **Exec `customAllowPatterns` fix** — [#3314](https://github.com/sipeed/picoclaw/pull/3314) fixes default deny patterns overriding custom allow patterns, e.g. `git push`.

If maintainers merge the open PRs, the next minor version could include Japanese UI, Telegram private-chat topics, routed-agent memory fixes, and exec allow-pattern corrections.

## User Feedback Summary

Real user pain points this cycle:

- Headless/systemd users need launcher lifecycle to be more flexible and not assume it owns the gateway.
- MCP failures must be handled gracefully instead of hanging the whole agent loop.
- Multi-agent routing users expect each routed agent to keep its own history and honor compression/clear commands.
- Web UI users want long sessions to remain interactive without input lag.
- Japanese-speaking users need full WebUI localization, not just docs.
- Telegram bot users want forum-topic support in private chats, not only supergroups.

Satisfaction signals are mixed but constructive: users are filing detailed bug reports and submitting fixes. The activity around PRs from community contributors like `j-v`, `honbou`, and `genuss` suggests strong engagement, even while reliability issues remain unresolved.

## Backlog Watch

Items that need maintainer attention:

- [#3269](https://github.com/sipeed/picoclaw/issues/3269) — Open since Jul 20, stale-labelled, high-severity MCP hang. No fix PR yet.
- [#3281](https://github.com/sipeed/picoclaw/issues/3281) — Open since Jul 21, stale-labelled Web UI lag bug. No fix PR yet.
- [#3301](https://github.com/sipeed/picoclaw/issues/3301) — Open bug with a ready fix PR [#3316](https://github.com/sipeed/picoclaw/pull/3316); needs review and merge.
- [#3316](https://github.com/sipeed/picoclaw/pull/3316) — Open routed-agent context management fix; needs maintainer review.
- [#3314](https://github.com/sipeed/picoclaw/pull/3314) — Open exec `customAllowPatterns` fix; needs maintainer review.
- [#3315](https://github.com/sipeed/picoclaw/pull/3315) — Open Telegram private-chat topics feature; needs maintainer review.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-04

## 1. Today's Overview
NanoClaw saw a healthy, fix-oriented day with 1 new issue and 9 pull requests updated in the last 24 hours. Six PRs were closed/merged, while 3 remain open. There were no new releases. Activity centered on session reliability, hardened infrastructure images, iMessage onboarding behavior, and engagement-policy controls. The single new issue is an environment-dependent startup crash, but response momentum from core-team and contributors appears strong.

## 2. Releases
No new releases were published in the last 24 hours.

- Latest releases: None

## 3. Project Progress
Six PRs were closed/merged in the last 24 hours:

- **#3182 — [core-team] versions: repin the agent image to hardened-2026-08-02**  
  Repins the agent image to the `hardened-2026-08-02` build, refreshing the base OS while keeping the same NanoClaw agent content.  
  https://nanocoai/nanoclaw/pull/3182

- **#3180 — [core-team] fix(update): surface hardened image migration**  
  Improves the update flow so the hardened image migration is visible to users.  
  https://nanocoai/nanoclaw/pull/3180

- **#3137 — [core-team] Fix engagement consistency and expose self-serve wiring controls**  
  Merged after several days of review. Keeps accumulated messages as context without triggering warm-container follow-up turns, lets group-scoped agents inspect wirings and request approved engagement-policy updates, and rejects invalid JavaScript engagement regexes.  
  https://nanocoai/nanoclaw/pull/3137

- **#3181 — [core-team] fix(imessage): opt in via first message to the assigned line**  
  Fixes the iMessage channel onboarding path so users opt in cleanly by messaging the assigned line.  
  https://nanocoai/nanoclaw/pull/3181

- **#3143 — [core-team] Preserve resolved approval card content**  
  Resolved approval cards now retain title/request details while replacing buttons with a muted decision/actor or timeout status. The original body persists for terminal cards.  
  https://nanocoai/nanoclaw/pull/3143

- **#3178 — Closed: opened against wrong repository**  
  No upstream change requested.  
  https://nanocoai/nanoclaw/pull/3178

## 4. Community Hot Topics
Activity was relatively concentrated around reliability and infrastructure. The only issue filed/updated in the window is also the most commented item:

- **#3179 — SyntaxError: The requested module 'node:util' does not provide an export named 'styleText'**  
  The only active issue, with 1 comment. It blocks startup because a dependency (`@clack/core`) expects a newer Node.js `util.styleText` export that the runtime apparently does not provide.  
  https://nanocoai/nanoclaw/issues/3179

On the PR side, the most strategically interesting open item is likely:

- **#3092 — feat: support remote Streamable HTTP MCP servers**  
  An open core-team feature PR, active since 2026-07-19 and still being updated. This reflects community demand for connecting to remote MCP servers over Streamable HTTP.  
  https://nanocoai/nanoclaw/pull/3092

Underlying need: users want broader MCP server compatibility, not just local/stdio-based setups.

## 5. Bugs & Stability
One new bug was reported, and two open PRs address related session-stability bugs.

- **High — #3179: Startup crash due to missing `node:util` `styleText` export**  
  The app crashes during initialization in an environment where Node.js does not expose `util.styleText`. No fix PR yet. This appears environment-dependent and may require a Node.js/runtime upgrade or dependency pin adjustment.  
  https://nanocoai/nanoclaw/issues/3179

- **Medium — #3184: Missing transcript causes "No conversation found with session ID"**  
  When a stored continuation transcript file no longer exists, the next message dies with a raw session error. The open fix PR rotates to a new session instead of resuming into a dead session.  
  Fix PR: https://nanocoai/nanoclaw/pull/3184

- **Medium — #3183: Retention cleanup can reap cold sessions**  
  A user messaging a channel quiet for 30+ days gets a raw `No conversation found` error. The open fix pins `cleanupPeriodDays` so retention cleanup cannot remove cold sessions.  
  Fix PR: https://nanocoai/nanoclaw/pull/3183

## 6. Feature Requests & Roadmap Signals
The clearest roadmap signal is the long-running open PR for remote MCP support:

- **Remote Streamable HTTP MCP servers (#3092)** has been open since mid-July with core-team involvement. It is a strong candidate for a future release if review completes.  
  https://nanocoai/nanoclaw/pull/3092

Other signals from today’s merged work:

- **Self-serve engagement/wiring controls (#3137)** — group-scoped agents can now inspect wirings and request approved engagement-policy updates. This suggests a roadmap direction toward more agent autonomy and operator self-service.
- **Hardened image migration (#3180, #3182)** — infrastructure hardening is being actively prioritized, likely leading to a new image/version in the near term.

## 7. User Feedback Summary
Real user pain points visible in today’s data:

- Environment/runtime compatibility issues can make NanoClaw unstartable, as shown by the `node:util` `styleText` error in #3179.
- Long-idle sessions or missing transcripts produce raw, user-unfriendly “No conversation found” errors instead of graceful recovery (#3183, #3184).
- Users and operators want more visibility and control over agent engagement behavior, which #3137 addresses.
- iMessage onboarding needed a clearer opt-in path (#3181).
- Approval cards previously lost context after resolution; #3143 preserves that information.

Overall, user-facing issues are being acknowledged quickly, and contributors are producing guideline-compliant fix PRs, indicating a responsive and engaged maintainer community.

## 8. Backlog Watch
- **#3092 — Remote Streamable HTTP MCP servers**  
  Open since 2026-07-19, updated 2026-08-03, and labeled `core-team` + `follows-guidelines`. This is the longest-running open PR in the current window and likely needs maintainer review or next-step feedback to avoid stalling.  
  https://nanocoai/nanoclaw/pull/3092

- **#3184 and #3183** are recent open fix PRs that should be reviewed promptly because they address real session-reliability bugs.  
  https://nanocoai/nanoclaw/pull/3184  
  https://nanocoai/nanoclaw/pull/3183

No other long-unanswered issues appear in the last 24 hours of data.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-04

## 1. Today's Overview

NullClaw is in a moderately active maintenance phase: 5 pull requests were updated in the last 24 hours, with 3 still open and 2 closed, while only 1 issue was updated. The current development focus appears to be on network transport reliability, especially proxy-aware HTTP handling for provider APIs and Telegram, plus streaming tool-call support. No new release was published during this period. The issue tracker remains quiet overall, with no newly reported issue volume beyond the existing scheduler bug. Project health looks stable, though one long-running scheduler auth bug still needs maintainer attention.

## 2. Releases

No new releases.

## 3. Project Progress

- **PR #965 — Closed: Structured streaming tool-call support for SSE parser**  
  [https://github.com/nullclaw/nullclaw/pull/965](https://github.com/nullclaw/nullclaw/pull/965)  
  This PR aimed to make streaming responses preserve structured tool-call deltas, enabling the Agent to execute tool responses that are streamed natively by the model API.

- **PR #964 — Closed: Enable native API-level tool calls during streaming**  
  [https://github.com/nullclaw/nullclaw/pull/964](https://github.com/nullclaw/nullclaw/pull/964)  
  This companion PR targeted the `agent/root.zig` layer so streaming requests can include API-level `tools[]`/`tool_choice` and still return usable tool-call results.

Together, these two closed PRs represent meaningful progress toward reliable streaming tool-call execution. Additionally, two open PRs by ArcanePivot are focused on proxy fixes for provider requests and Telegram:

- **PR #983 — Fix(providers): use pinned curl path for proxied requests**  
  [https://github.com/nullclaw/nullclaw/pull/983](https://github.com/nullclaw/nullclaw/pull/983)
- **PR #982 — Fix(telegram): use curl transport for explicit proxies**  
  [https://github.com/nullclaw/nullclaw/pull/982](https://github.com/nullclaw/nullclaw/pull/982)

## 4. Community Hot Topics

- **Issue #915 — [bug] Problem with scheduler unauthorized**  
  [https://github.com/nullclaw/nullclaw/issues/915](https://github.com/nullclaw/nullclaw/issues/915)  
  This is the most active discussion item, with 4 comments and 1 reaction. The reporter describes a self-hosted setup using Ubuntu, external Ollama, `qwen3.6:27b` on an RTX 3090. Tool calling works, but the scheduler fails with authorization errors in both Telegram chat and other channels. This points to underlying auth/session handling issues for scheduled tasks when using external model hosts.

- **PR #982 / #983 — Proxy transport fixes**  
  These are not heavily commented, but they represent a clear cluster of user-facing pain around explicit proxy configuration. Both PRs route requests through curl when a proxy is configured, preserving security and timeout behavior.

## 5. Bugs & Stability

1. **High — Scheduler unauthorized (Issue #915)**  
   [https://github.com/nullclaw/nullclaw/issues/915](https://github.com/nullclaw/nullclaw/issues/915)  
   Scheduler functionality is broken for a user with an external Ollama backend. No dedicated fix PR is currently linked, so this needs maintainer investigation.

2. **Medium — Proxied provider/Telegram requests may bypass proper transport handling**  
   PR #983 and PR #982 address cases where non-streaming provider POSTs and Telegram Bot API requests do not respect explicit proxy settings. These are proactive reliability fixes, not crash-level bugs, but they affect users behind proxies.

3. **Low — Docker base image outdated**  
   PR #956 proposes bumping Alpine from 3.23 to 3.24. This is routine dependency maintenance.

## 6. Feature Requests & Roadmap Signals

- **Structured streaming tool-call support**  
  PR #964 and PR #965 signal a roadmap push toward full native tool-calling during streaming responses. This is a significant feature for LLM-agent workflows, and it should likely appear in the next release.

- **Proxy-aware HTTP transport**  
  PR #982 and PR #983 indicate demand for robust proxy support in both provider API calls and Telegram integrations. Users in restricted networks are likely to benefit from these changes.

- **Docker/Alpine update**  
  PR #956 is a routine dependabot update, but it indicates ongoing container image maintenance. It may be merged once maintainers clear the current proxy/transport review queue.

## 7. User Feedback Summary

The main user-reported pain point is the scheduler authorization failure in Issue #915. The user has a working local setup with external Ollama and a capable GPU, and general tool calling works, but the scheduler path is unusable. This suggests scheduled tasks may not be reusing the same authenticated session context as normal interactive tool calls.

The proxy-related PRs also reveal a secondary pain point: users relying on explicit proxies need reliable transport handling for both Telegram and provider endpoints. The existence of dedicated fixes suggests this has been a recurring edge case.

Overall, there is no explicit negative or positive sentiment outside these technical reports. The community appears technically engaged and focused on improving self-hosted networking and streaming behavior.

## 8. Backlog Watch

- **Issue #915 — Scheduler unauthorized**  
  [https://github.com/nullclaw/nullclaw/issues/915](https://github.com/nullclaw/nullclaw/issues/915)  
  Open since 2026-05-15 and updated 2026-08-03. This is the longest-running and most important unresolved issue right now. It has gathered 4 comments and still lacks a clear fix path.

- **PR #956 — Dependabot Alpine 3.23 → 3.24**  
  [https://github.com/nullclaw/nullclaw/pull/956](https://github.com/nullclaw/nullclaw/pull/956)  
  Open since 2026-06-15. This is a low-risk dependency update that could be merged quickly to reduce container maintenance debt.

- **PR #964 / PR #965 — Streaming tool-call PRs**  
  These were open for about six weeks before closing. That long review cycle may signal that streaming/tool-call architecture changes are complex and need careful validation.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-04

## 1. Today's Overview

Extremely high activity day: 45 issues and 50 PRs were updated in the last 24 hours, with 9 issues closed and 18 PRs merged/closed. The project is deep in the "Reborn" target-architecture refactoring (Waves 2–4), dominated by core-contributor WS2/WS3 re-layering PRs covering the extension registry, sandbox lane merges, secrets port tightening, and the `wit/` relocation. In parallel, a QA bug-bash against the Railway (libsql) instance surfaced multiple P1/P2 user-facing bugs concentrated in Google OAuth flows and multi-tool orchestration. No new releases were cut; an automated release PR (#5598) has now been open for over a month. Overall project health is strong: architecture cleanup and user-facing fixes are landing at speed, but pre-existing CI tooling gaps — especially the Reborn test-scope planner (#7087) — continue to create friction for every refactoring wave.

## 2. Releases

No new releases in the last 24 hours.

Worth watching: release PR #5598 (https://github.com/nearai/ironclaw/pull/5598) has been open since 2026-07-03 proposing `ironclaw_common` 0.4.2 → 0.5.0 and `ironclaw_skills` 0.3.0 → 0.4.0, both with API-breaking changes (copy-impl additions, etc.). With the newly merged Wednesday-release strategy docs (#7049), expect this to resolve soon.

## 3. Project Progress

**Merged/closed PRs (6 of 18 visible in top-20 sample):**
- #7070 (https://github.com/nearai/ironclaw/pull/7070) — fix(webui): unblock main E2E coverage. Fixes five Reborn WebUI v2 E2E tests red since Jul 30 (#6876); includes SSE keep_alive cursor and admin load-more retry correctness fixes.
- #7064 (https://github.com/nearai/ironclaw/pull/7064) — refactor(loop): shed the model gateway and tool disclosure into loop_host (WS3/WS4). Move-only plus two `layer =` lines; zero tests lost.
- #7040 (https://github.com/nearai/ironclaw/pull/7040) — refactor(contracts): close the WS2 strays and WS2.1 follow-ups, including two dated amendments correcting stale claims in `CHECKLIST`/`PROPOSAL`.
- #7024 (https://github.com/nearai/ironclaw/pull/7024) — fix(extensions): resolve custom MCP auth during registration; `Auto` now performs only a credential-free MCP handshake.
- #7049 (https://github.com/nearai/ironclaw/pull/7049) — docs: add weekly Wednesday production release strategy (Monday RC cut, Tuesday QA, Wednesday promotion).
- #7023 (https://github.com/nearai/ironclaw/pull/7023) — chore(deps): bump everything-else group (6 updates).

**Closed issues (5 of 9 visible):**
- #6284 (https://github.com/nearai/ironclaw/issues/6284) — [epic] error-recoverability endgame: model recovers from 100% of errors it sees.
- #6524 (https://github.com/nearai/ironclaw/issues/6524) — [epic] Hermetic capability and journey testing platform.
- #6481 (https://github.com/nearai/ironclaw/issues/6481) — [epic] Manifest-Driven Extension Lifecycle.
- #6482 (https://github.com/nearai/ironclaw/issues/6482) — [epic] Pluggable Memory Providers.
- #6999 (https://github.com/nearai/ironclaw/issues/6999) — reborn dependency-boundaries server-lifecycle rule gap, closed as an architecture decision.

**Open but advancing (heavy WS wave):**
- #7094 (https://github.com/nearai/ironclaw/pull/7094) — Close Wave 2: extension registry re-layer, `include_str!` kills, nested-tree coverage (WS2 + #7083).
- #7084 (https://github.com/nearai/ironclaw/pull/7084) — refactor(wasm): move `wit/` inside its owning crate (Wave 3); includes a fix for the #7087 planner gap.
- #7065 (https://github.com/nearai/ironclaw/pull/7065) — merge the sandbox lane and flip `ironclaw_mcp` onto contracts; key structural finding: the two are one problem.
- #7096 (https://github.com/nearai/ironclaw/pull/7096) — route operator secrets through a product_contracts port (security-sensitive WS3 row).
- #7088 (https://github.com/nearai/ironclaw/pull/7088) — expose custom hosted-MCP registration as the model-visible `builtin.extension_register_hosted_mcp`.
- #7090 (https://github.com/nearai/ironclaw/pull/7090) — split `host_runtime/obligations.rs` into its three chartered owners (WS3).

## 4. Community Hot Topics

Most-commented issues:
- #6284 (https://github.com/nearai/ironclaw/issues/6284, 15 comments, closed) — error-recoverability endgame epic; six-part recoverability contract for every mid-run error.
- #6524 (https://github.com/nearai/ironclaw/issues/6524, 4 comments, closed) — hermetic capability/journey testing platform epic.
- #7087 (https://github.com/nearai/ironclaw/issues/7087, 3 comments, open) — Reborn PR test planner hard-fails on Dockerfile, `.githooks/`, `.claude/`, `crates/AGENTS.md`, `test-tools/`, and scripts/ gates. The clearest hot topic: it blocked #7084 on 18 of its 46 changed paths and forced a workaround.
- #7085 (https://github.com/nearai/ironclaw/issues/7085, 2 comments) — `check-version-bumps.sh` silently skips the WIT_TOOL_VERSION cross-check on macOS (BSD sed).
- #7060 (https://github.com/nearai/ironclaw/issues/7060, 2 comments) — platform-owned WIT/extension package changes fail the Reborn scope classifier (regression from #7019).

Underlying need: the most active threads are about the project's own CI/planner tooling, not end-user features. The Reborn scope classifier introduced at `d03f81525` is rejecting legitimate platform-owned paths, and the team is treating these as first-class defects rather than working around them silently — a healthy sign, though #7087 has already cost real merge latency. The closure of four long-running epics in a single window indicates the team is actively declaring initiatives complete and folding remaining work into tracked follow-ups.

## 5. Bugs & Stability

Ranked by severity:

**P1 — user-facing (bug_bash):**
- #7074 (https://github.com/nearai/ironclaw/issues/7074) — Multi-tool meeting research (Calendar + Docs + news) fails after retrieving calendar data: model attempts to call an unavailable function. No fix PR yet.
- #7069 (https://github.com/nearai/ironclaw/issues/7069) — Google services require repeated authentication even after completing the Google flow. Fix PR #7077 (https://github.com/nearai/ironclaw/pull/7077) is open (one vendor authorization covers all installed extensions sharing the account).

**Security:**
- #7041 (https://github.com/nearai/ironclaw/issues/7041) — WASM guest diagnostics can expose detectable secrets through runtime, model causes, and tracing. Addressed in stacked PR #7048.
- #7068 (https://github.com/nearai/ironclaw/issues/7068) — Hosted MCP: omitted `destructiveHint` is materialized as `false`, but the MCP spec defaults it to `true` — absent-and-destructive is indistinguishable from present-and-safe.

**CI / tooling (pre-existing, blocking the refactor waves):**
- #7087 (https://github.com/nearai/ironclaw/issues/7087) — Reborn PR test planner hard-fails on meta/config paths; fix included in #7084 (`1f66b58`).
- #7081 (https://github.com/nearai/ironclaw/issues/7081) — Docker fail-closed test gate is wired to nothing: `IRONCLAW_REQUIRE_DOCKER_TESTS` is never set, so sandbox tests silently skip without Docker.
- #7083 (https://github.com/nearai/ironclaw/issues/7083) — Coverage is dark for all five crates under `crates/extensions/` (CRATE_RE still requires a crate directly under `crates/`).
- #7085 (https://github.com/nearai/ironclaw/issues/7085) — `check-version-bumps.sh` silently skips the WIT cross-check on macOS.

**Functional:**
- #7082 (https://github.com/nearai/ironclaw/issues/7082) — `builtin.skill_install`: inline multi-file installs are unreachable; URL installs silently drop `files`/`source`/`source_url`.
- #7078 (https://github.com/nearai/ironclaw/issues/7078) — Shared-vendor OAuth scope ceiling is store-wide, not caller-scoped.

**P2 — user-facing (bug_bash):**
- #7071 — "Reconnecting" status flashes on every streaming chunk despite successful streaming.
- #7075 — After a failed run, agent ignores the user's follow-up question and resumes the failed task.
- #7073 — Agent leaks internal implementation details (tool names, delivery routing logic) in user-facing responses.
- #7072 — Telegram messages render raw Markdown (headers, bold markers) instead of formatted text.

## 6. Feature Requests & Roadmap Signals

- #7097 (https://github.com/nearai/ironclaw/issues/7097) — Add billing support escalation pathways to the billing page (user-reported, p2). Small WebUI change; likely to land in the next sprint.
- #7044 (https://github.com/nearai/ironclaw/issues/7044) — [epic] Onboarding to channel-first approach: WebUI opens to a blank slate with no guidance. Directly paired with PR #6994 (https://github.com/nearai/ironclaw/pull/6994), the OOBE automation-tasks prototype (carousel, inline cards, agent-mode pill).
- #7046 (https://github.com/nearai/ironclaw/issues/7046) — [epic] Configure all tools, channels, and extensions from AI chat, reducing WebUI round-trips.
- #6941 (https://github.com/nearai/ironclaw/issues/6941) — [epic, reborn] Skills the model can self-create, find, choose, and use — subset of #6565 with 21 acceptance criteria, now fully measured.

Roadmap signals: Four epics closed this window (#6284, #6524, #6481, #6482) suggest the team is consolidating a long initiative phase. The merged Wednesday-release strategy (#7049) indicates formalization of a predictable cadence — the next release will likely follow soon, resolving the parked #5598. The WS2/WS3/WS4 re-layering remains the dominant roadmap item: Wave 2 is near closure via #7094, and Wave 3 has five stacked XL-sized PRs (#7065, #7080, #7084, #7090, #7096) awaiting review.

## 7. User Feedback Summary

The bug-bash against the Railway QA instance (ironclaw-qa-testing-libsql.up.railway.app) provides the clearest real-user signals:

- **Auth friction:** users must complete the Google authorization flow repeatedly for each service (#7069) — a top P1 with a fix already in review (#7077).
- **Orchestration unreliability:** multi-tool runs die mid-task on unavailable functions (#7074), and after any failed run the agent ignores new user questions and resumes the stale task (#7075) — both erode trust in the core agent loop.
- **Presentation quality:** internal tool names and routing logic leak into user-facing text (#7073); Telegram shows raw Markdown instead of formatted messages (#7072); the UI flashes "Reconnecting" on every streamed chunk (#7071).
- **Billing ownership:** a user explicitly reported not knowing who handles NEAR AI billing issues and requested clear resolution pathways (#7097).
- **Onboarding:** the WebUI's blank slate puts the burden on users to invent a use case (#7044).

Overall, the P1/P2 density from a single QA instance suggests the product is still rough for real-world multi-service scenarios; however, the maintainers' response — a fix PR within 24 hours for the top auth P1 — indicates a responsive loop.

## 8. Backlog Watch

- #5598 (https://github.com/nearai/ironclaw/pull/5598) — "chore: release" PR, open since 2026-07-03. Over a month old and blocks crate version bumps with breaking changes. The new Wednesday release strategy makes this actionable now.
- #6957 (https://github.com/nearai/ironclaw/pull/6957) — feat(reborn-ironhub): manage installed package lifecycle. Open since 2026-07-31; no recent movement.
- #6994 (https://github.com/nearai/ironclaw/pull/6994) — OOBE automation-tasks prototype, open since 2026-08-01. Directly relevant to the onboarding epic #7044; awaiting design review.
- #6941 (https://github.com/nearai/ironclaw/issues/6941) — Skills self-create/choose epic, open since 2026-07-31; quiet with one comment. Untouched by this week's epic closures — a candidate for scoping attention.
- #7060 (https://github.com/nearai/ironclaw/issues/7060) — Reborn scope classifier rejects platform-owned WIT/extension changes; a regression from #7019 with no linked fix PR yet.
- #7041 (https://github.com/nearai/ironclaw/issues/7041) — WASM guest diagnostics secret-exposure finding; security-relevant and awaiting merge of stacked PR #7048.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-04

## Today's Overview

LobsterAI showed moderate activity in the last 24 hours: 2 issues were updated (both still open), and 11 PRs were updated, of which 6 were closed/merged and 5 remain open. No new release was published. The most substantive merged/closed work targeted Windows NSIS process cleanup, a startup credit campaign, and a sidebar multi-agent activity filter. However, several stale open PRs from April — including a large Electron dependency bump and a duplicate Markdown export feature PR — still need maintainer attention. Overall project health is steady, but triage of long-pending community contributions remains a bottleneck.

## Releases

No new releases were published in the last 24 hours.

## Project Progress

Six PRs were closed/merged during the update window. The notable functional changes are:

- **[PR #2420](https://github.com/netease-youdao/LobsterAI/pull/2420) — `fix(nsis): re-kill survivor processes on every stop poll round`**  
  Fixes a Windows installer/uninstaller race where a process surviving the stop-poll window would not be killed. The fix re-issues `Stop-Process` on every polling round and logs survivor details.

- **[PR #2419](https://github.com/netease-youdao/LobsterAI/pull/2419) — `feat(activity): add startup credit campaign`**  
  Adds a configurable startup credit campaign experience to the desktop client, including a new-conversation-page entry point and claim/login continuation flow.

- **[PR #2418](https://github.com/netease-youdao/LobsterAI/pull/2418) — `feat(sidebar): add multi-agent task activity filter`**  
  Adds a Codex-inspired task activity filter to the sidebar for quickly finding attention-worthy tasks across multiple agents, with a filtering indicator.

Three related PRs — **[#2421](https://github.com/netease-youdao/LobsterAI/pull/2421)**, **[#2422](https://github.com/netease-youdao/LobsterAI/pull/2422)**, and **[#2423](https://github.com/netease-youdao/LobsterAI/pull/2423)** — were also closed. They appear to be variants of `Liuzhq/fix btw tools`, with #2423 explicitly reverting #2422. Because their descriptions are empty, the net impact of this series is unclear.

## Community Hot Topics

Community engagement is low overall: both updated issues have exactly 1 comment and no 👍 reactions, and no PRs show comment activity.

- **[Issue #1206](https://github.com/netease-youdao/LobsterAI/issues/1206) — Private-deployment kimi2.5 repeats processing/progress messages**  
  The reporter says the model repeatedly replies with the current action while analyzing documents, making it unclear whether the task is stuck or still running. This is a functional trust issue for private deployments.

- **[Issue #1213](https://github.com/netease-youdao/LobsterAI/issues/1213) — Request: export conversation detail as Markdown**  
  Users want to export full conversations as `.md` files instead of images. The issue includes a concrete implementation proposal using `window.electron.dialog.saveInlineFile`.

There is also an active open dependency PR worth watching:

- **[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) — Bump Electron from 40.2.1 to 43.2.0**  
  A major-version dependency bump that would benefit from careful review for breaking changes and compatibility.

## Bugs & Stability

Only one user-facing bug appeared in the updated issue list:

- **[Issue #1206](https://github.com/netease-youdao/LobsterAI/issues/1206) — [High-impact] Duplicate processing/progress replies with private kimi2.5 model**  
  - Environment: Windows 10, LobsterAI v2026.3.30  
  - Trigger: Analyzing source code and splitting documents into "source analysis" and "build flow"  
  - Impact: Task appears to repeat current actions; user cannot tell whether the system is waiting or stuck  
  - Workaround: Switching models resolves it  
  - Status: No linked fix PR yet

Also relevant to stability, though not an issue report, is the closed Windows fix:

- **[PR #2420](https://github.com/netease-youdao/LobsterAI/pull/2420)** fixes a genuine installer/uninstaller race where processes could survive the shutdown gate on Windows. This should improve update/install reliability.

## Feature Requests & Roadmap Signals

The clearest roadmap signals are:

- **Markdown conversation export** — [Issue #1213](https://github.com/netease-youdao/LobsterAI/issues/1213) requests this feature, and **[PR #1214](https://github.com/netease-youdao/LobsterAI/pull/1214)** already implements it. The PR is still open and stale despite matching a user request, making it a strong candidate for review and inclusion in the next release.

- **Retry button for transient Cowork errors** — [PR #1208](https://github.com/netease-youdao/LobsterAI/pull/1208) adds inline retry for rate-limit/network/server errors instead of forcing users to resend the last message manually.

- **More custom model providers** — [PR #1212](https://github.com/netease-youdao/LobsterAI/pull/1212) raises the custom provider limit from 10 to 20, responding to user friction when switching providers while preserving older configs.

- **Web-search Chrome flag hardening** — [PR #1209](https://github.com/netease-youdao/LobsterAI/pull/1209) defends against an externally injected `--disable-blink-features=AutomationControlled` flag that can break web-search behavior.

Given today’s merged work, the next release will likely include the startup credit campaign and multi-agent activity filter, plus the Windows NSIS fix. If maintainers clear stale PRs, the Markdown export and retry-button features are also likely candidates.

## User Feedback Summary

Observed user pain points from issues and PRs:

- **Private deployments are vulnerable to model-specific behavior.** The kimi2.5 duplicate-progress bug is reproduction-guaranteed ("当前任务必现") and undermines confidence in long-running document analysis.
- **Conversation export is too limited.** Users need editable, shareable Markdown, not just screenshots. This is the second recently surfaced request/implementation pair for the same feature.
- **Custom provider caps are annoying.** A user wanting to keep old configurations while adding new providers hit the hard-coded 10-provider ceiling.
- **Transient failures interrupt workflow.** Cowork sessions interrupted by 429/network errors require manually retyping or resending the last message, which is a poor UX.

There were no explicit positive reactions or satisfaction indicators in the update window, and zero 👍 reactions on the tracked items, suggesting either a small user base or low engagement with the public tracker.

## Backlog Watch

Several important items have been open since April 1 and need maintainer attention:

- **[Issue #1206](https://github.com/netease-youdao/LobsterAI/issues/1206)** — kimi2.5 duplicate progress bug. Stale, no fix PR, and it affects private deployments.
- **[PR #1214](https://github.com/netease-youdao/LobsterAI/pull/1214)** — Markdown export implementation. Matches user request #1213 but remains stale since April.
- **[PR #1208](https://github.com/netease-youdao/LobsterAI/pull/1208)** — Cowork retry button. Stale despite clear UX value.
- **[PR #1209](https://github.com/netease-youdao/LobsterAI/pull/1209)** — Web-search Chrome flag fix. Stale.
- **[PR #1212](https://github.com/netease-youdao/LobsterAI/pull/1212)** — Increase custom provider limit to 20. Stale.
- **[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)** — Electron major bump 40 → 43. Open since April 2, no comments, and carries upgrade risk; this should be evaluated for security/maintenance reasons.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-04

## 1. Today's Overview
Moltis is in a quiet, stable phase: zero issues were updated in the last 24 hours, and no new releases were published. The only activity is one open pull request, #1183, which was updated on 2026-08-03 and continues the project’s focus on MCP server lifecycle management. No bug reports or regression reports appeared in the window. Overall activity is low but healthy, with active feature development rather than maintenance firefighting.

## 2. Releases
No releases were published in this window.

## 3. Project Progress
No PRs were merged or closed in the last 24 hours, and no issues were closed.

The only active PR remains open:
- **[#1183 [OPEN] feat(mcp): add managed repository bundles](https://github.com/moltis-org/moltis/pull/1183)** — created 2026-08-02, last updated 2026-08-03.  
  This PR adds managed Git repository bundles for discovering, previewing, installing, updating, rolling back, and removing MCP servers. It also introduces HTTPS credentials, pinned managed SSH transport, vault lifecycle integration, imported repository-backed MCP configurations, and simplified web onboarding. It has not yet been merged.

## 4. Community Hot Topics
There was no issue activity and no comment/reaction activity reported in the last 24 hours. The single most relevant item is:

- **[PR #1183](https://github.com/moltis-org/moltis/pull/1183)** — open, no recorded comments or reactions.

Underlying need: the PR addresses MCP server management complexity by centralizing discovery, installation, updates, rollback, and removal through Git repository bundles. The inclusion of credential handling, SSH transport, and vault integration indicates a focus on secure, reproducible MCP configurations.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours. No severity ranking is needed because there are no stability items in this window.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed in the last 24 hours. However, the open PR signals a clear roadmap direction:

- **[PR #1183](https://github.com/moltis-org/moltis/pull/1183)** points toward managed MCP server bundles with a full lifecycle: discover, preview, install, update, rollback, remove.
- Supporting HTTPS credentials and pinned SSH transport suggests a next release focused on secure multi-server setups.
- Vault lifecycle integration and imported repository-backed MCP configurations are likely to become core features in an upcoming version.

If merged, these capabilities would likely land in the next minor or feature release of Moltis.

## 7. User Feedback Summary
No direct user feedback was captured in the last 24 hours: no issue comments, PR comments, or reactions were reported. The only indirect signal is the design scope of PR #1183, which implies maintainer attention on reducing MCP server onboarding friction and improving operational safety.

## 8. Backlog Watch
No long-unanswered issues or PRs are visible in the current data. The only open PR, #1183, was created on 2026-08-02 and is still in an active review/development state. It is not yet backlogged but may deserve maintainer attention to keep momentum.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-04

> **Note:** All data below originates from the `agentscope-ai/QwenPaw` repository (the data feed backing this digest), so links and version references use that repo.

## 1. Today's Overview

Very high activity: 23 issues updated in the last 24h (17 open, 6 closed) and 50 PRs updated (26 open, 24 merged/closed), plus one new release. A new **v2.1.0-beta.1** was published, indicating active development toward the 2.1 series. The maintainer team is visibly working through release-blocking CI issues (macOS desktop verify, real-behavior-proof gate) and shipping regression fixes (spawn_subagent schema, skill tags). Multiple long-standing feature PRs (model fallback, user-context passthrough) are moving forward in parallel with a steady stream of bug reports from a very active user base, many of them Chinese-speaking desktop/power users.

## 2. Releases

**v2.1.0-beta.1** — published 2026-08-03
- `fix(chat)`: prevent stale channel identity leaking into new chats
- `feat(inbox)`: wobble sidebar inbox on new approvals & color-code badge dot

Beta release; no breaking changes or migration notes documented. A release-verification tracking issue ([#6656](https://github.com/agentscope-ai/QwenPaw/issues/6656)) shows the project uses a formal pass-criteria gate (4 checkpoints per platform) before promoting betas.

## 3. Project Progress

24 PRs were merged/closed in the last 24h. Notable ones:

- **[#6579](https://github.com/agentscope-ai/QwenPaw/pull/6579) — fix(desktop): use bundled Python for script execution** — resolves the long-running user complaint ([#6160](https://github.com/agentscope-ai/QwenPaw/issues/6160)) that the desktop app shells out to a system Python that may not exist.
- **[#6609](https://github.com/agentscope-ai/QwenPaw/pull/6609) — Fix spawn subagent schema** — fixes the `batch` parameter being incorrectly inferred as required; related follow-ups [#6595](https://github.com/agentscope-ai/QwenPaw/pull/6595) and [#6658](https://github.com/agentscope-ai/QwenPaw/pull/6658) remain open.
- **[#6653](https://github.com/agentscope-ai/QwenPaw/pull/6653) — fix(ci): fence-aware section extraction in real-behavior-proof** — fixes the gate that stripped fenced Evidence blocks ([#6626](https://github.com/agentscope-ai/QwenPaw/issues/6626)).
- **[#6654](https://github.com/agentscope-ai/QwenPaw/pull/6654) — fix(ci): cap playwright below 1.62** — unblocks the macOS desktop release verification.
- **[#6646](https://github.com/agentscope-ai/QwenPaw/pull/6646) — fix(ci): fetch PR body via API for fork PRs** — fixes CI check failure on all fork PRs.
- **[#6203](https://github.com/agentscope-ai/QwenPaw/pull/6203) — fix(utils): bound and hide Windows tasklist liveness probe** — adds missing timeout + window hiding to `_is_pid_running()`.

Forward-looking features in review: [#6659](https://github.com/agentscope-ai/QwenPaw/pull/6659) (model fallback with cooldown), [#6650](https://github.com/agentscope-ai/QwenPaw/pull/6650) (Skill API payload reduction), [#6651](https://github.com/agentscope-ai/QwenPaw/pull/6651) (file/folder management REST API), [#6652](https://github.com/agentscope-ai/QwenPaw/pull/6652) (server-side `max_iterations` enforcement in MissionGate), and [#6657](https://github.com/agentscope-ai/QwenPaw/pull/6657) (sandbox constraint reporting).

## 4. Community Hot Topics

- **[#6537 — Skill tags disappear on restart (regression of #3270)](https://github.com/agentscope-ai/QwenPaw/issues/6537)** — *11 comments, closed.* The most-discussed issue of the window. Tags persist in `skill_pool/skill.json` but are lost on manifest reconciliation/startup. Closed as fixed; a good sign for regression handling.
- **[#6649 — Support GPT-5.6 prompt caching parameters in Responses API provider](https://github.com/agentscope-ai/QwenPaw/issues/6649)** — *8 comments, open.* Users want `prompt_cache_key` / `prompt_cache_options` / `prompt_cache_breakpoint` to cut latency and cost in multi-turn agent loops. Signals that users are already adopting GPT-5.6 at scale.
- **[#6588 — `spawn_subagent` treats empty `batch` placeholders as batch mode](https://github.com/agentscope-ai/QwenPaw/issues/6588)** — *6 comments, open.* A confusing three-step failure chain ("Missing required argument → invalid type → mutually exclusive"). Attracted three PRs ([#6609](https://github.com/agentscope-ai/QwenPaw/pull/6609) merged, [#6595](https://github.com/agentscope-ai/QwenPaw/pull/6595), [#6658](https://github.com/agentscope-ai/QwenPaw/pull/6658) open), showing strong maintainer attention to schema-correctness issues exposed by real LLM behavior.
- **[#6160 — Standalone Python runtime for QwenPaw](https://github.com/agentscope-ai/QwenPaw/issues/6160)** — *4 comments, closed.* Windows users without a system Python hit "未安装 Python 环境" when executing generated scripts; resolved by the bundled-Python PR [#6579](https://github.com/agentscope-ai/QwenPaw/pull/6579).

**Underlying need:** users are pushing for model-provider compatibility (new caching APIs, fallback behavior), robust desktop packaging (bundled runtime), and fewer silent failure modes — a consistent theme across issues.

## 5. Bugs & Stability

Ranked by severity:

1. **[#6647 — Desktop UI goes fully black when WebView2 browser process crashes (STATUS_IN_PAGE_ERROR), no recovery path](https://github.com/agentscope-ai/QwenPaw/issues/6647)** — *open.* Full session loss with zero recovery; highest-severity desktop stability issue reported.
2. **[#6612 — QwenPaw 2.0.1 incompatible with agentscope 2.0.4.post1: proactive crashes + tool-permission deadlock](https://github.com/agentscope-ai/QwenPaw/issues/6612)** and **[#6619 — `ToolCallBlock` has no field `extra_content` crash in openai_chat_model_compat](https://github.com/agentscope-ai/QwenPaw/issues/6619)** — *both open.* Dependency-drift crashes against the upstream agentscope API. High-impact because installation friction blocks new users.
3. **[#6614 — WeChat cron scheduled push never delivered: task shows success but ret=-2 context_token invalid](https://github.com/agentscope-ai/QwenPaw/issues/6614)** — *open.* Silent failure for daily cron pushes since 2026-07-27, burning ~44M tokens in retries/investigation. High severity due to silent "success" status.
4. **[#6608 — Long-running shell commands bypass shell_command_timeout and block the feishu session for 1.5h (orphan subprocess on cancel)](https://github.com/agentscope-ai/QwenPaw/issues/6608)** — *open.* No per-channel total timeout; user follow-ups queue behind stuck tasks.
5. **[#6635](https://github.com/agentscope-ai/QwenPaw/issues/6635) / [#6633 — Console/Skills/Skill Pool pages fail on slow networks: MB-level uncompressed API responses vs fixed 30s timeout](https://github.com/agentscope-ai/QwenPaw/issues/6633)** — *both open.* List endpoints embed full content/scripts, making pages unloadable on slow connections. A fix PR exists: [#6650](https://github.com/agentscope-ai/QwenPaw/pull/6650).
6. **[#6625 — ACP delegate_external_agent returns "completed without text output" when notifications race the prompt response](https://github.com/agentscope-ai/QwenPaw/issues/6625)** — *open; fix PR [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) in review.*
7. **[#6588 — empty `batch` placeholder in `spawn_subagent`](https://github.com/agentscope-ai/QwenPaw/issues/6588)** — *open; one fix merged, two in flight.*
8. **[#6565 — `execute_shell_command`: multiline newlines collapsed to spaces (syntax errors) + Linux PIPE background processes stuck](https://github.com/agentscope-ai/QwenPaw/issues/6565)** — *open.*
9. **[#6624 — Scroll auto-compression does not trigger `summarize_when_compact` memory flow (manual `/compact` works)](https://github.com/agentscope-ai/QwenPaw/issues/6624)** — *open.*
10. **[#6537 — Skill tags lost on restart](https://github.com/agentscope-ai/QwenPaw/issues/6537)** — *closed/fixed.* Regression resolved.

Also fixed this window: [#6589 large shell output freezing UI](https://github.com/agentscope-ai/QwenPaw/issues/6589), [#6655 console channel not rendering approval prompts](https://github.com/agentscope-ai/QwenPaw/issues/6655), [#6547 misplaced cursor in Coding Mode editor](https://github.com/agentscope-ai/QwenPaw/issues/6547).

## 6. Feature Requests & Roadmap Signals

- **GPT-5.6 prompt caching** ([#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649)) — concrete parameter-level request targeting the Responses API provider. Likely candidate for an early 2.1.x patch given user demand and provider-priority trend.
- **Automatic model fallback with cooldown** ([#6659](https://github.com/agentscope-ai/QwenPaw/pull/6659), original [#2199](https://github.com/agentscope-ai/QwenPaw/pull/2199) open since March) — a revived, long-requested resilience feature; strong signal it lands in the next minor version.
- **Task-scoped output directories** ([#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643)) — users want per-task output folders instead of everything piling into `media/`; small scope, high quality-of-life value.
- **Direct file-path access on drag-in** ([#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642)) — avoid upload/copy steps and media-dir clutter; aligns with "desktop agent" expectations.
- **Multi-line file name display in the chat dialog** ([#6583](https://github.com/agentscope-ai/QwenPaw/issues/6583)) — UI polish for many-file drag-in.
- **File/folder management REST API** ([#6651](https://github.com/agentscope-ai/QwenPaw/pull/6651)) — backend groundwork for a full Files page; indicates a feature push toward richer workspace management.
- **User-context passthrough** ([#6525](https://github.com/agentscope-ai/QwenPaw/pull/6525)) — Chat API → Agent → Tool → MCP → SKILL CLI identity propagation; points at enterprise/multi-tenant use cases.
- **Structured run outcome in SSE** ([#5930](https://github.com/agentscope-ai/QwenPaw/pull/5930)) — API automation integrations need an explicit stop-reason/outcome event.

**Prediction:** the next minor release will likely bundle model fallback, GPT-5.6 caching support, per-task output directories, and the Skill API de-bloating fix ([#6650](https://github.com/agentscope-ai/QwenPaw/pull/6650)).

## 7. User Feedback Summary

- **Silent failures are the top frustration.** The WeChat cron case ([#6614](https://github.com/agentscope-ai/QwenPaw/issues/6614)) is representative: "success" status while nothing is delivered, costing ~44M tokens. Console-channel approval requests being invisible ([#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655), closed) is the same pattern. Users want failed delivery/approval to be loud, not silent.
- **Compatibility pain with upstream `agentscope`:** two independent crash reports ([#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612), [#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619)) from installing `qwenpaw==2.0.1` alongside `agentscope==2.0.4.post1`. Users are actively combining the two packages and hitting API drift.
- **Chinese-speaking desktop users are a major segment** — requests around WeChat/Feishu channels, condensed-language issue reports, and desktop UX polish (file drag-in, media-dir hygiene, coding-mode cursor) are prominent.
- **Onboarding guidance gap:** [#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621) reports 50+ multi-agent conversations before discovering that agents must be explicitly referenced in `PROFILE.md`; the docs describe *what* but not the default-discovery behavior. A documentation/UX gap rather than a code bug.
- **Performance on constrained networks:** MB-level list payloads with a fixed 30s frontend timeout ([#6633](https://github.com/agentscope-ai/QwenPaw/issues/6633), [#6635](https://github.com/agentscope-ai/QwenPaw/issues/6635)) is hurting remote/self-hosted users.

## 8. Backlog Watch

- **[#2199 — automatic model fallback with cooldown](https://github.com/agentscope-ai/QwenPaw/pull/2199)** — open since **2026-03-24** (over 4 months). A newer, more complete PR ([#6659](https://github.com/agentscope-ai/QwenPaw/pull/6659)) has been opened; maintainers should reconcile or supersede the original.
- **[#5930 — structured run outcome in SSE responses](https://github.com/agentscope-ai/QwenPaw/pull/5930)** — open since July 10 with no recent maintainer comments; valuable for API-automation users who currently parse SSE streams heuristically.
- **[#6302 — unify provider discovery, model metadata, routing, and agent controls](https://github.com/agentscope-ai/QwenPaw/pull/6302)** — open since July 21; large architectural PR that needs maintainer review capacity.
- **[#6525 — user context passthrough (Chat API → Agent → Tool → MCP → SKILL CLI)](https://github.com/agentscope-ai/QwenPaw/pull/6525)** — open since July 28; touches multiple layers, needs security review for metadata propagation.
- **[#6656 — v2.1.0-beta.1 installation verification](https://github.com/agentscope-ai/QwenPaw/issues/6656)** — release-duty checklist with a deadline of 2026-08-03 14:35 UTC; the digest window (2026-08-04) shows it still open, meaning beta verification may need a deadline extension or a re-run.

---

**Project health summary:** CoPaw/QwenPaw is in an active release cycle (2.1.0-beta.1) with strong community engagement and responsive maintainers — most reported regressions received fix PRs within days, and CI/release-blocking issues are being cleared rapidly. The main risk areas are dependency compatibility with the upstream `agentscope` package and a cluster of silent-failure bugs that erode user trust despite otherwise solid feature velocity.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-04

## 1. Today's Overview

ZeroClaw is in a period of very high velocity and architectural consolidation: 50 issues and 50 PRs were updated in the last 24 hours (43 open / 7 closed issues; 47 open / 3 merged-or-closed PRs), with no new releases published. The project is dominated by security-hardening and RFC activity targeting the v0.9.0 milestone, including high-priority (p1) fixes in flight for approval-responder authorization, response-cache request boundaries, and OpenAI proxy honoring. A significant bottleneck is visible: a large share of high-risk PRs and RFCs are parked in `needs-maintainer-review` or `needs-author-action`, and the community has formalized a Maintainer Decision Queue tracker ([#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)) to manage the backlog. Observability is the clearest cross-cutting theme, with one major feature closed ([#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641)) while a broader structured-observability RFC ([#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232)) and a DORA-telemetry removal PR ([#9451](https://github.com/zeroclaw-labs/zeroclaw/pull/9451)) advance in parallel.

## 2. Releases

No new releases were published in the last 24 hours. The latest release data is empty; the next expected milestone per active trackers is **v0.9.0**, which is scoped around auth, security hardening, gateway boundaries, and breaking changes ([#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)).

## 3. Project Progress

The three merged/closed PRs in the window were not individually identified in the visible sample (the top-20 PR list is entirely open), but closed issues in the same window indicate shipped or resolved work:

- **[#6641 — Turn-level OTel trace correlation](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) (closed):** The long-running feature to nest `llm.call` / `tool.call` / `memory.*` spans under a single turn trace (follow-up to #6009/#6190) is closed, signaling completion of a significant observability milestone.
- **[#9162 — OAuth-refresh retry loop extraction](https://github.com/zeroclaw-labs/zeroclaw/issues/9162) (closed):** Pure refactor extracting duplicated per-provider OAuth token-refresh retry/backoff logic into a shared `oauth_common` path.
- **[#7113 — Slack lifecycle progress](https://github.com/zeroclaw-labs/zeroclaw/issues/7113) (closed):** Visible progress/status updates in Slack during long-running agent turns shipped.
- **[#9642 — Approval-timeout audit bug](https://github.com/zeroclaw-labs/zeroclaw/issues/9642) (closed, follow-up label):** The p1 finding that timed-out approvals are recorded as explicit operator denials is closed, with follow-up tracking noted.
- **[#6002 — Telegram "not clearly addressed"](https://github.com/zeroclaw-labs/zeroclaw/issues/6002) (closed):** Resolved/closed after a period in `needs-author-action` and stale.

Notable open PRs advancing features and fixes (all still in review):

- **[#9072 — Separate authoritative memory storage from enrichment connectors](https://github.com/zeroclaw-labs/zeroclaw/pull/9072):** Makes `memory.backend` authoritative (SQLite) and introduces an independent `memory.enricher` selector; XL-sized, risk:high.
- **[#9069 — Per-agent backend + memory count in dashboard](https://github.com/zeroclaw-labs/zeroclaw/pull/9069):** Stack 7/7; rebased head now reports failed handles as distinct `unavailable` state and rejects unknown `?agent=` aliases with 404.
- **[#9404 — Accept data-wrapped compatible chat responses](https://github.com/zeroclaw-labs/zeroclaw/pull/9404):** Adds `data.choices` envelope support and routes native-tool paths through the canonical parser.
- **[#9707 — Migrate bare `vision_model_provider` to dotted alias ref](https://github.com/zeroclaw-labs/zeroclaw/pull/9707):** Fixes a config migration gap where bare family names cannot resolve V3 typed aliases.
- **[#9639 — Provider routing lifecycle documentation](https://github.com/zeroclaw-labs/zeroclaw/pull/9639):** Source-grounded docs covering profiles, hint routing, retry, cooldowns, and no-replay boundaries.

## 4. Community Hot Topics

The most active discussions reveal three underlying needs: **architectural direction decisions, observability, and channel reliability.**

| Issue/PR | Comments | Topic |
|---|---|---|
| [#8303 — RFC: Goal mode v1](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | 11 (1 👍) | Bounded foreground Matrix work; durable multi-turn goal pursuit. Most-discussed item. |
| [#8692 — Maintainer decision queue tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 8 | Formal queue for RFCs/design issues awaiting maintainer decisions; updated today. |
| [#9488 — RFC: Unified attachment architecture](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | 8 | Cross-channel/web attachment handling; proposed, needs maintainer review. |
| [#6157 — Nextcloud Talk bot message API bug](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) | 8 | Wrong bot API URL construction breaks replies; accepted but blocked ~100 days. |
| [#6641 — Turn-level OTel trace correlation](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) | 8 | Closed feature; high engagement on span nesting for `llm.call` / `tool.call` / `memory.*`. |
| [#8424 — RFC: Workspace-relative forbidden paths + `.zeroclawignore`](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) | 7 | Protecting workspace-internal sensitive files from agent access. |
| [#6002 — Telegram "Not clearly addressed"](https://github.com/zeroclaw-labs/zeroclaw/issues/6002) | 7 (closed) | S1 workflow-blocked bug around llama.cpp attribution. |

The underlying need behind the top threads is **decision throughput**: multiple mature RFCs (goal mode, attachments, SOP permissions, telemetry, forbidden paths) are waiting on maintainers while the project continues to generate new proposals. The creation of [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) is the community's explicit response to this pain.

## 5. Bugs & Stability

Ranked by severity:

1. **[#9642 — Approval timeout recorded as explicit operator denial](https://github.com/zeroclaw-labs/zeroclaw/issues/9642) (p1, security, closed):** Falsifies the audit trail — what the log says a human did is wrong. Closed with a follow-up label; the fix path is the in-flight PR [#9574](https://github.com/zeroclaw-labs/zeroclaw/pull/9574), which authorizes approval responders across Telegram/Slack/Lark/Matrix.
2. **[#7527 — macOS desktop app reopens blank or without a window](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) (p1, S1):** Workflow-blocked; app fails to detect granted permissions and can display an empty page or no window after restart. Still `r:needs-repro` / `needs-author-action`.
3. **[#9718 — Telegram delivers duplicate messages on combined tool_call + content](https://github.com/zeroclaw-labs/zeroclaw/issues/9718) (new, S2):** When a model emits both `tool_calls` and a populated `content` field, Telegram delivers both, producing duplicates. No fix PR yet; needs defensive handling.
4. **[#6157 — Nextcloud Talk wrong bot message API](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) (S3, risk:high, blocked):** Incorrect URL construction with bot secret; accepted but blocked for ~100 days.

Additional stability fixes in flight via open PRs:

- **[#9720 — Enforce response cache request boundaries](https://github.com/zeroclaw-labs/zeroclaw/pull/9720) (p1, risk:high, new today):** Restricts local full-response caching to deterministic requests and applies modifying hooks to an ephemeral final request, preventing cache cross-talk.
- **[#9606 — Honor runtime proxy for OpenAI Responses](https://github.com/zeroclaw-labs/zeroclaw/pull/9606) (p1, security):** OpenAPI Responses non-streaming/streaming paths now respect configured proxy.
- **[#9722 — Preserve timeout error context in hardware layer](https://github.com/zeroclaw-labs/zeroclaw/pull/9722) (new today):** Keeps `tokio::time::error::Elapsed` as the source instead of flattening it.
- **[#9709 — Edge TTS temp-file cleanup on all error paths](https://github.com/zeroclaw-labs/zeroclaw/pull/9709):** Fixes leaked `zeroclaw_tts_<uuid>.mp3` artifacts when output-read fails after successful subprocess exit.
- **[#9721 — Gate zerocode signal cleanup to Unix](https://github.com/zeroclaw-labs/zeroclaw/pull/9721) (new today):** Fixes Windows Clippy failure from Unix-only signal handler helper.

## 6. Feature Requests & Roadmap Signals

The v0.9.0 milestone is the organizing frame for most accepted work ([tracker #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)), focused on auth, security hardening, gateway boundaries, and breaking changes. Strong candidates for the next release:

- **SOP permission contract** — [RFC #9598](https://github.com/zeroclaw-labs/zeroclaw/issues/9598): Make SOP capability `required_permissions` authoritative via the shared grants/security pipeline rather than a second system.
- **Staged opt-in product telemetry** — [RFC #9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621): Operator-reviewed usage telemetry to inform maintainer investment decisions.
- **Goal mode v1** — [RFC #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303): Bounded foreground Matrix work across multiple turns.
- **Unified attachment architecture** — [RFC #9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488): Shared attachment handling for web chat and channels.
- **Schema-validated memory consolidation** — [RFC #6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998): Replace fragile prompt-based JSON parsing with schema validation plus bounded fallback.
- **Accepted features likely to land:** Reset stale channel sessions via `session_ttl_hours` ([#8134](https://github.com/zeroclaw-labs/zeroclaw/issues/8134)), decouple gateway WebSocket lifetime from agent turns ([#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759)), inject interaction-harness context into agent prompts ([#9005](https://github.com/zeroclaw-labs/zeroclaw/issues/9005)).

More speculative / longer-horizon: replacing the React/Vite web UI with a Rust→Wasm framework ([RFC #8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132), 1 👍) and capability-aware agent documentation ([RFC #8367](https://github.com/zeroclaw-labs/zeroclaw/issues/8367)).

## 7. User Feedback Summary

- **Channel UX is the top pain point.** Users report Telegram delivering duplicate messages or failing to attribute messages to the assistant ([#9718](https://github.com/zeroclaw-labs/zeroclaw/issues/9718), [#6002](https://github.com/zeroclaw-labs/zeroclaw/issues/6002)), Nextcloud Talk replies failing due to a wrong API ([#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157)), and Slack giving no feedback during long turns — the latter addressed by the now-closed [#7113](https://github.com/zeroclaw-labs/zeroclaw/issues/7113).
- **Security/audit trust matters.** The most serious user-reported issue this window is that a timed-out approval is logged as an explicit human denial ([#9642](https://github.com/zeroclaw-labs/zeroclaw/issues/9642)) — users are explicitly calling out audit-trail falsification, not just degraded behavior.
- **Deployment friction persists.** macOS desktop users report blank windows and permission-detection failures ([#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527)); CI runs of 15–20 minutes for small changes frustrate contributors ([#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108)); and session history grows tokens unboundedly without `session_ttl_hours` enforcement ([#8134](https://github.com/zeroclaw-labs/zeroclaw/issues/8134)).
- **Operators want control over agent file access.** RFCs on workspace-relative forbidden paths / `.zeroclawignore` ([#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)) and SSRF protection for `file_download` ([PR #8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713)) reflect real deployments guarding credentials and configs from agent tooling.

## 8. Backlog Watch

Items needing maintainer or author attention, ranked by age × severity:

- **[#6157 — Nextcloud Talk bot API bug](https://github.com/zeroclaw-labs/zeroclaw/issues/6157):** Open since Apr 27, accepted, `risk:high`, but `blocked` — ~100 days without resolution despite 8 comments.
- **[#7527 — macOS blank/no-window launch](https://github.com/zeroclaw-labs/zeroclaw/issues/7527):** Open since Jun 12, p1/S1, stuck in `r:needs-repro` + `needs-author-action`.
- **[#8713 — SSRF gate for file_download](https://github.com/zeroclaw-labs/zeroclaw/pull/8713):** Open since Jul 4, `risk:high`, `size:XL`, now flagged `stale-candidate` with `needs-author-action`; a month without forward motion on a security gate.
- **[#8132 — RFC: Replace React/Vite with Rust→Wasm](https://github.com/zeroclaw-labs/zeroclaw/issues/8132):** Open since Jun 22 with 1 👍; parked in `needs-author-action`, but strategically significant for eliminating Node.js from build/runtime.
- **[#8424 — RFC: Workspace-relative forbidden paths](https://github.com/zeroclaw-labs/zeroclaw/issues/8424):** Open since Jun 28, `risk:high`, `needs-author-action`; high user demand for protecting `.env` / config files.
- **[#9069 — Dashboard per-agent backend + memory count](https://github.com/zeroclaw-labs/zeroclaw/pull/9069):** Open since Jul 14, `risk:high`, `size:XL`; rebased and updated Aug 3, still needs review.
- **[#9419 — Rotate live credentials after rate limits](https://github.com/zeroclaw-labs/zeroclaw/pull/9419):** Open since Jul 26, `risk:high`, `size:XL`; addresses 429 handling across reliable-provider attempts.
- **[#9472 — Stop registering `vi_verify` as a model-callable tool](https://github.com/zeroclaw-labs/zeroclaw/pull/9472):** Open since Jul 27, `risk:high`; closes a signed-credential validation gap.
- **[#9574 — Authorize approval responders](https://github.com/zeroclaw-labs/zeroclaw/pull/9574):** Open since Jul 31, **p1**, `risk:high`; the direct fix for the audit-trail bug [#9642](https://github.com/zeroclaw-labs/zeroclaw/issues/9642) — highest-priority item in review.
- **[#9606 — Honor runtime proxy for OpenAI Responses](https://github.com/zeroclaw-labs/zeroclaw/pull/9606):** Open since Aug 1, p1, `risk:high`.

**Overall health assessment:** ZeroClaw is highly active with a healthy mix of bug fixes, features, and architectural RFCs, and the community is self-organizing to address review bottlenecks via the decision queue ([#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)). The main risk indicators are the concentration of p1/`risk:high` PRs waiting in `needs-author-action` or review, and a handful of accepted, user-facing bugs (Nextcloud Talk, macOS desktop) that have languished for months.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*