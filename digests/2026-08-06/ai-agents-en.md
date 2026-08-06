# OpenClaw Ecosystem Digest 2026-08-06

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-06 01:24 UTC

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

# OpenClaw Project Digest — 2026-08-06

## Today's Overview
OpenClaw remains under very high triage load: 500 issues and 500 PRs were updated in the last 24 hours, with 58 issues closed and 73 PRs closed/merged. No new release was published. The active backlog is dominated by P0/P1 session-state and message-loss bugs, several with long comment threads and no merged fix yet. Community contribution is strong, but many items still await maintainer review or product decisions. The overall signal is a mature but strained project with important reliability work in progress.

## Releases
No new releases were published in the last 24 hours.

## Project Progress
Several notable PRs were closed/merged or moved to resolution:

- [PR #119785](https://github.com/openclaw/openclaw/pull/119785) — Grant administrator access through host-issued Control UI links; closed.
- [PR #119402](https://github.com/openclaw/openclaw/pull/119402) — Unblock queued replies after repeated model requests; closes #119009.
- [PR #113066](https://github.com/openclaw/openclaw/pull/113066) — Surface specific auth-failure messages in terminal incomplete-turn text.
- [PR #118796](https://github.com/openclaw/openclaw/pull/118796) — Session context snapshot fix; closed as superseded by [PR #118792](https://github.com/openclaw/openclaw/pull/118792).
- [PR #119792](https://github.com/openclaw/openclaw/pull/119792) — Skip ephemeral coordinator lock databases in backups; closes #119757.

Related closed issues include [Issue #119534](https://github.com/openclaw/openclaw/issues/119534) (bundled skills cannot read support files), [Issue #112278](https://github.com/openclaw/openclaw/issues/112278) (OTel trace ID not adopted), [Issue #92369](https://github.com/openclaw/openclaw/issues/92369) (cron subagent orchestration, already fixed), and [Issue #118846](https://github.com/openclaw/openclaw/issues/118846) (gateway main thread saturation).

## Community Hot Topics
The most active discussions reveal deep user focus on reliability and security:

- [Issue #116201](https://github.com/openclaw/openclaw/issues/116201) — 59 comments: Realtime voice work can retain unbounded provider/consult state.
- [Issue #7707](https://github.com/openclaw/openclaw/issues/7707) — 27 comments: Memory trust tagging by source, to prevent memory poisoning.
- [Issue #44925](https://github.com/openclaw/openclaw/issues/44925) — 25 comments, 2 reactions: Subagent completion silently lost with no retry or notification.
- [Issue #118846](https://github.com/openclaw/openclaw/issues/118846) — 19 comments: Gateway main thread saturated from plugin-metadata snapshotting.
- [Issue #86519](https://github.com/openclaw/openclaw/issues/86519) — 13 comments, 1 reaction: Duplicate replies on Telegram after 5.20 update.

The common underlying needs are: bounded resource usage, trustworthy memory provenance, guaranteed subagent completion, and preventing event-loop/message-delivery failures.

## Bugs & Stability
High-severity bugs active or updated in the last 24 hours:

- **P0: [Issue #119263](https://github.com/openclaw/openclaw/issues/119263)** — Agent DB v14→v15 migration fails with `no such column: entry_valid`; gateway refuses to start. No fix PR visible.
- **P0: [Issue #119090](https://github.com/openclaw/openclaw/issues/119090)** — Managed media cleanup fails open and permanently deletes session media. Closed, likely fixed.
- **P0: [Issue #70903](https://github.com/openclaw/openclaw/issues/70903)** — Persistent provider cooldown blocks users for hours after billing recovery.
- **P1: [Issue #116201](https://github.com/openclaw/openclaw/issues/116201)** — Realtime voice state unbounded under slow/bursty providers.
- **P1: [Issue #44925](https://github.com/openclaw/openclaw/issues/44925)** — Subagent results silently lost on timeout; no retry/auto-restart.
- **P1: [Issue #86519](https://github.com/openclaw/openclaw/issues/86519)** — Telegram duplicate replies regression; severity reduced but not fixed.
- **P1: [Issue #112423](https://github.com/openclaw/openclaw/issues/112423)** — Large SQLite transcript cleanup blocks gateway event loop.
- **P1: [Issue #106231](https://github.com/openclaw/openclaw/issues/106231)** — Loop detection blocks exec but does not terminate stuck runs; linked PR open.
- **P1: [Issue #117358](https://github.com/openclaw/openclaw/issues/117358)** — Post-turn compaction ignores boundaries and delays completed replies; linked PR open.

Fix PRs in flight include [PR #119596](https://github.com/openclaw/openclaw/pull/119596) (avoid false compaction on bodyless 400/413), [PR #118792](https://github.com/openclaw/openclaw/pull/118792) (stop persisting cumulative usage as context snapshot), and [PR #119398](https://github.com/openclaw/openclaw/pull/119398) (forward abort signal to retry backoff).

## Feature Requests & Roadmap Signals
Active feature requests indicate strong demand for security, deployment guidance, and channel control:

- [Issue #7707](https://github.com/openclaw/openclaw/issues/7707) — Memory trust tagging by source.
- [Issue #13597](https://github.com/openclaw/openclaw/issues/13597) — AWS deployment guide (EC2, ECS, Lambda); 4 reactions.
- [Issue #53654](https://github.com/openclaw/openclaw/issues/53654) — Discord `messageUpdate` / `messageDelete` support; 3 reactions.
- [Issue #50205](https://github.com/openclaw/openclaw/issues/50205) — Configurable request labels for Gemini billing tracking.
- [Issue #50798](https://github.com/openclaw/openclaw/issues/50798) — Visible agent-to-agent messaging for ACP thread-bound sessions.
- [Issue #15022](https://github.com/openclaw/openclaw/issues/15022) — Coalesce interleaved text blocks into one outbound message.
- [Issue #44289](https://github.com/openclaw/openclaw/issues/44289) — Generate secretref docs from registry metadata.

Roadmap signal: the large QR-setup PR stack ([#119341](https://github.com/openclaw/openclaw/pull/119341), [#119342](https://github.com/openclaw/openclaw/pull/119342), [#119343](https://github.com/openclaw/openclaw/pull/119343), [#119344](https://github.com/openclaw/openclaw/pull/119344), [#114173](https://github.com/openclaw/openclaw/pull/114173)) is advancing toward first-class Signal/WhatsApp/Zalo account linking through the Control UI.

## User Feedback Summary
User pain points are heavily concentrated around silent failures, regressions, and operational lockout:

- Subagent work being lost without notification ([#44925](https://github.com/openclaw/openclaw/issues/44925)).
- Duplicate or undelivered messages across Telegram, QQBot, Slack, and Discord ([#86519](https://github.com/openclaw/openclaw/issues/86519), [#77306](https://github.com/openclaw/openclaw/issues/77306), [#96692](https://github.com/openclaw/openclaw/issues/96692), [#77930](https://github.com/openclaw/openclaw/issues/77930)).
- Upgrades breaking startup or channels, including DB migration failure ([#119263](https://github.com/openclaw/openclaw/issues/119263)) and hardcoded user paths ([#51429](https://github.com/openclaw/openclaw/issues/51429)).
- Provider cooldowns and false compactions wasting time/tokens ([#70903](https://github.com/openclaw/openclaw/issues/70903), [#118792](https://github.com/openclaw/openclaw/pull/118792)).

Positive signals: users are actively submitting polished fixes, several issues were closed as already-fixed, and upvoted feature requests show engaged power users.

## Backlog Watch
Older, high-interest items still needing maintainer attention:

- [Issue #7707](https://github.com/openclaw/openclaw/issues/7707) — Memory trust tagging; open since Feb, still needs product decision.
- [Issue #13597](https://github.com/openclaw/openclaw/issues/13597) — AWS deployment guide; open since Feb, 4 reactions.
- [Issue #15022](https://github.com/openclaw/openclaw/issues/15022) — Coalesce interleaved text blocks; open since Feb.
- [Issue #44289](https://github.com/openclaw/openclaw/issues/44289) — Secretref docs generation; open since March.
- [Issue #46031](https://github.com/openclaw/openclaw/issues/46031) — `auth.order` ignored for GitHub Copilot; linked PR still without sufficient proof.
- [Issue #51429](https://github.com/openclaw/openclaw/issues/51429) — Hardcoded working path merged into published release.
- [PR #83244](https://github.com/openclaw/openclaw/pull/83244) — Tolerate unknown metadata keys; open since May.
- [PR #89040](https://github.com/openclaw/openclaw/pull/89040) — Avoid event-loop stall during embedded_run bootstrap; open since June.
- [PR #92070](https://github.com/openclaw/openclaw/pull/92070) — Enforce `--safe-mode` on Claude CLI launches; open since June, needs proof.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — AI Personal Assistant / Agent Open-Source Ecosystem
**Data window:** 2026-08-06 (24h digest) | **Scope:** 12 projects

---

## 1. Ecosystem Overview

The open-source personal AI assistant landscape is consolidating around a handful of gateway/agent runtimes, with OpenClaw as the de-facto reference implementation and a family of specialized variants — IronClaw, ZeroClaw, Hermes, NanoClaw, CoPaw, LobsterAI, and others — iterating on shared architectural patterns. Activity is overwhelmingly dominated by reliability work — session-state persistence, message-delivery guarantees, MCP tool integration, and memory provenance — rather than new model capabilities, signaling a maturation phase. Community contribution velocity is high across most projects, but maintainer review capacity is the binding constraint in OpenClaw, Hermes, ZeroClaw, and NullClaw. Meanwhile, commercial-grade concerns are surfacing: agent truthfulness (hallucinated state), config-as-code operations, channel parity, and OpenAI-protocol compatibility. The ecosystem remains healthy but fragmented, with the “Claw family” sharing DNA while differentiating on governance, target users, and deployment models.

---

## 2. Activity Comparison

*Health score = composite (1–10) of merge throughput, maintainer responsiveness, blocker severity, and process maturity, derived from digest data.*

| Project | Issues (24h) | PRs (24h) | Release Status | Health |
|---|---|---|---|---|
| OpenClaw | 500 touched / 58 closed | 500 touched / 73 merged | None | 7/10 |
| IronClaw | 43 touched / 10 closed | 50 touched / 18 merged | v1.1.0-rc.1 (Aug 3) | 8.5/10 |
| ZeroClaw | 50 touched / 11 closed | 50 touched / 1 merged | None (v0.8.5 line in progress) | 7/10 |
| CoPaw¹ | 25 touched / 6 closed | 50 touched / 21 merged | None | 7.5/10 |
| Hermes Agent | 50 touched / 0 closed | 50 touched / 0 merged | None | 5/10 |
| NanoClaw | 2 open in triage | 12 touched / 2 merged / 6 opened | None | 8/10 |
| LobsterAI | 3 open bugs | 12 merged | **2026.8.5** (Aug 5) | 8/10 |
| NanoBot | 4 touched / 0 closed | 16 touched / 8 merged | None | 8/10 |
| PicoClaw | 0 touched | 4 touched / 1 merged | None | 6/10 |
| NullClaw | 0 touched | 2 open / 0 merged | None | 5/10 |
| Moltis | 0 | 0 | None | N/A (inactive) |
| ZeptoClaw | 0 | 0 | None | N/A (inactive) |

¹CoPaw's digest references the agentscope-ai/QwenPaw codebase; project name presented as provided.

**Key observations:** OpenClaw's raw volume (500/500) is roughly 10× any peer. IronClaw leads in shipped value (RC + 18 merges). Hermes shows active triage but zero merge throughput — a structural bottleneck. Moltis and ZeptoClaw are dormant.

---

## 3. OpenClaw's Position

**Advantages:**
- **Scale and gravity.** 500 issues + 500 PRs touched in 24h, with 58 issues and 73 PRs closed/merged — more closures in one day than most peers process in a week. It is the ecosystem's reference implementation; patterns it establishes (single-writer DB invariants, delivery adapters, session snapshots) visibly propagate to NanoClaw, ZeroClaw, and others.
- **Breadth.** Widest channel/provider/skill surface in the ecosystem, with deep power-user engagement (59-comment threads on voice-state retention, 27-comment memory-trust discussions, a growing QR-setup PR stack for Signal/WhatsApp/Zalo account linking).
- **Community depth.** Users submit polished, ready-to-merge fixes; several issues closed as "already fixed" indicate an active, capable contributor base.

**Technical approach difference:** OpenClaw centralizes hard problems — session state, provider cooldowns, compaction, plugin-metadata snapshotting — in the gateway. This horizontal approach maximizes generality but produces reliability debt: a P0 Agent DB migration failure blocks gateway start (#119263), plugin-metadata snapshotting saturates the main thread (#118846), and provider cooldowns lock users out for hours (#70903).

**Comparison vs. peers:** IronClaw is the commercialized challenger (productized RC, IronHub marketplace, design system, standardized messaging framework); ZeroClaw is the security/ops-hardened alternative (RFC-governed, shell policies, verifiable intent); Hermes is the research-lab variant. OpenClaw's risk is that peers are actively positioning on the stability and trust dimensions where it is currently strained.

---

## 4. Shared Technical Focus Areas

Emerging requirements repeated across multiple projects:

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **Session-state & persistence reliability** | OpenClaw, Hermes, NanoClaw, ZeroClaw, IronClaw | Context-snapshot corruption; WAL reader leaks; DB migration failures; JSONL session migration; durable delivery claims |
| **Message-delivery guarantees** | OpenClaw, Hermes, NullClaw, CoPaw, IronClaw, NanoBot | Duplicate replies (Telegram); silent channel death; lost subagent results; cross-channel delivery leaks; channel retry/health checks |
| **MCP reliability & security** | NanoBot, CoPaw, IronClaw, NanoClaw, ZeroClaw | Error-envelope transparency (`isError` semantics); configurable tool timeouts; proxy/CA env forwarding to stdio children; endpoint validation; schema-clone OOM |
| **Memory provenance & anti-poisoning** | OpenClaw, ZeroClaw, IronClaw | Source-based trust tagging; credential-chain verification; verify-before-assert state checks |
| **Model/provider flexibility** | CoPaw, NanoBot, PicoClaw, OpenClaw, ZeroClaw | LLM fallback chains; provider-native request switches; cooldown recovery after billing fixes; `session_id` prompt caching; OpenAI-compatible profiles |
| **Channel platform parity** | Hermes, CoPaw, OpenClaw, NanoClaw, IronClaw | Telegram Bot API 10.2 alignment; WeChat approval flows; Signal attachment routing; Discord `messageUpdate`/`messageDelete`; Slack slash commands |
| **Shell/terminal execution safety** | Hermes, ZeroClaw, OpenClaw | Approval-bypass prevention (ANSI-C quoting); per-execution confirmation tiers; stuck-run termination; bounded CWD lock acquisition |
| **Ops & deployment UX** | OpenClaw, ZeroClaw, NanoClaw, PicoClaw, IronClaw | AWS deployment guides; Docker-socket install recovery (LXC); Windows Task Scheduler support; config-as-code with schema/diff/audit; consolidated install scripts |

---

## 5. Differentiation Analysis

| Project | Primary Differentiation | Target Users | Architecture Signal |
|---|---|---|---|
| **OpenClaw** | Horizontal breadth: every channel, provider, and skill; ecosystem reference | Self-hosted power users, integrators | Gateway + adapters + session snapshots; centralized cooldown/compaction |
| **IronClaw** | Commercial productization: RC cycles, IronHub marketplace, design system, 16-op messaging framework | Enterprises, product teams | Wasm guest runtime; Docker/Railway sandbox profiles; Slack-first delivery |
| **ZeroClaw** | RFC-governed security/ops hardening; OpenAI Chat Completions compatibility profile | Ops-heavy, security-conscious self-hosters | Plugin/Wasm; dual milestone lines (v0.8.5 stable / v0.9.0 breaking) |
| **Hermes Agent** | Research-lab agent; aggressive Telegram parity campaign; memory plugins (TencentDB) | Researchers, API tinkerers | Monolithic CLI undergoing god-file sharding; multiplex profile routing |
| **CoPaw** | Console-centric management; per-agent model fallback; CN channel depth (WeChat) | CN-market users, console operators | SSE retry hardening; artifact canvas; provider capability cache |
| **LobsterAI** | Desktop (Electron) with enterprise auth isolation; NIM (NetEase IM) integration | Enterprise desktop users, CN enterprises | Electron shell around OpenClaw gateway; title-bar search; activity campaigns |
| **NanoBot** | Lean, WebUI-innovative; MCP Apps host request; metasearch provider (RRF) | Developers, WebUI-centric users | WebUI-first; temporary/quick chats; shared project PTY |
| **NanoClaw** | Container correctness (single-writer invariant); skills ecosystem; setup wizard | Docker/K8s self-hosters | Host seams for skill-owned capabilities; DB-routing discipline |
| **PicoClaw** | Lightweight (Sipeed); Anthropic OAuth setup-token login; model fallback chains | Embedded/hobbyist Anthropic users | Minimal surface; auth status with utilization endpoints |
| **NullClaw** | Minimal long-running daemon reliability | Headless deployments | 16 MiB turn-path stack; polling-thread supervision |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapid iteration / high velocity:** OpenClaw (500/500 touched, 131 items closed), CoPaw (21 PR merges), IronClaw (18 PR merges + RC in flight), NanoClaw (6 PRs opened per day), ZeroClaw (same-day bug→PR loops for S1 issues).

**Tier 2 — Steady / consolidating:** NanoBot (8 merges, fast issue→fix response), LobsterAI (12 merges, shipped 2026.8.5), Hermes Agent (active triage and PR updates, but zero merges — review-pending bottleneck).

**Tier 3 — Stabilizing / low activity:** PicoClaw (1 merge; 3 PRs aging), NullClaw (2 substantive fixes awaiting review), Moltis and ZeptoClaw (no activity in window).

**Maturity markers:** ZeroClaw's maintainer decision queue (#8692) and RFC revision discipline; IronClaw's design-system governance, bug-bash QA epics, and E2E coverage closures; Hermes' formal god-file decomposition epic; OpenClaw's P0/P1 triage at scale. The clearest process gaps are Hermes' zero merge throughput and OpenClaw's unresolved P0 migration bug despite high close rates — volume without merge capacity is the ecosystem's most common failure mode.

---

## 7. Trend Signals

1. **Truthfulness is the new reliability frontier.** IronClaw's QA bug bash exposed a cluster of agent-hallucination bugs (false "GitHub connected" claims #7247; fabricated automation status #7246). Combined with OpenClaw's memory-poisoning concern (#7707) and ZeroClaw's verifiable-intent credential-chain issue (#9328), the message is clear: agents must verify state before asserting it. *For developers:* add observable state-check tools and provenance metadata to agent runtimes.

2. **Memory is becoming a security domain.** Source-based trust tagging, anti-poisoning, and credential-chain verification are emerging across OpenClaw, ZeroClaw, and IronClaw. *For developers:* design memory stores with source provenance and trust scoring from day one; retrofitting is painful.

3. **MCP is the universal tool bus, but error semantics are broken.** NanoBot's `isError = False` envelope bug, CoPaw's MCP tools dying until restart, IronClaw's invalid-endpoint acceptance, NanoClaw's missing proxy env forwarding — all point to immature MCP lifecycle management. *For developers:* standardize error propagation from MCP servers so business failures are LLM-visible; add per-tool timeouts and health checks.

4. **Delivery guarantees remain unsolved.** Duplicate replies, silent channel death, lost subagent results, and cross-channel leaks appear across six projects. IronClaw's durable-delivery claim and NanoClaw's single-writer delivery adapter are the most principled responses. *For developers:* treat at-least-once delivery + idempotent handling + supervision loops as table stakes.

5. **Cost efficiency is driving architecture.** ZeroClaw's `session_id` prompt-cache request, CoPaw's on-demand skill loading (8–10k token savings), OpenClaw's compaction-boundary bugs, and the spread of model fallback/routing (CoPaw merged, NanoBot, PicoClaw) show economic pressure shaping design. *For developers:* expose cache-aware session IDs, budget system-prompt token usage, and make fallback/cooldown behavior configurable.

6. **OpenAI-protocol compatibility is the integration gateway.** ZeroClaw's Chat Completions profile RFC targets Open WebUI, LobeChat, Continue.dev, Aider, and LangChain; data-wrapped responses already shipped. *For developers:* exposing agents as drop-in OpenAI endpoints unlocks the widest existing tool ecosystem.

7. **Config-as-code and reproducible ops are rising.** IronClaw's most-commented epic (#3036) demands declarative tenant blueprints; deployment friction recurs across OpenClaw (AWS guide), NanoClaw (LXC Docker socket), ZeroClaw (Windows Task Scheduler), and PicoClaw (install scripts). *For developers:* invest in schema'd, diffable, auditable configuration and first-class install/recovery paths — operators, not models, are the bottleneck to adoption.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-06

## Today's Overview

NanoBot is in a highly active development cycle: 4 issues were updated in the last 24 hours, all still open, while 16 PRs were touched — 8 open and 8 closed/merged. No new releases were published, so all of this work is pre-release. The PR mix shows strong velocity on both features (metasearch provider, WebUI temporary chat, provider request switches) and hardening fixes (WhatsApp media detection, Matrix join compatibility, session tool grants). Community attention is currently concentrated on two reliability gaps: WhatsApp audio output and MCP error-envelope handling. Overall project health looks solid, with multiple p1/p2 PRs moving and no signs of stalled maintainer activity.

## Releases

None.  
No new NanoBot versions were published in this window, so there are no changelog entries, breaking changes, or migration notes to report.

## Project Progress

Eight PRs closed/merged in the last 24 hours:

- [#5234 feat(agent): integrate mst-python as a metasearch provider](https://github.com/HKUDS/nanobot/pull/5234) — Adds a new metasearch provider using Reciprocal Rank Fusion over multiple engines.
- [#5254 feat: add provider-native request switches](https://github.com/HKUDS/nanobot/pull/5254) — Adds WebUI switches for OpenAI Codex Fast mode, OpenAI/DeepSeek web search, and xAI Grok X Search.
- [#5203 fix(whatsapp): detect outbound media content before dispatch](https://github.com/HKUDS/nanobot/pull/5203) — Fixes WhatsApp media sending to inspect file content instead of trusting filename extensions.
- [#5184 feat(webui): add Quick Chat and Temporary Chat](https://github.com/HKUDS/nanobot/pull/5184) — Introduces persistent Quick Chat and connection-owned temporary chat destinations.
- [#5249 refactor(webui): improve visual consistency](https://github.com/HKUDS/nanobot/pull/5249) — Reworks menus, dialogs, sheets, Skills/Channels layouts, and removes replay animations from persisted messages.
- [#5250 fix(webui): feather clipped activity edges](https://github.com/HKUDS/nanobot/pull/5250) — Adds direction-aware fading to clipped agent activity panes.
- [#5238 refactor(session): remove request-scoped access grants](https://github.com/HKUDS/nanobot/pull/5238) — Removes a session tool authorization layer, simplifying session tools to use construction-time enabled state.
- [#5233 feat(mattermost): separate group policy for threads and expose in WebUI](https://github.com/HKUDS/nanobot/pull/5233) — Adds `groupPolicyInThread` for Mattermost and exposes it in the WebUI.

## Community Hot Topics

- [#5149 [bug] no audio ?](https://github.com/HKUDS/nanobot/issues/5149) — 4 comments, 0 reactions.  
  Users report NanoBot receives WhatsApp audio but fails to send audio files. The underlying need is a more robust outbound media pipeline for WhatsApp.

- [#5237 [bug] MCP tool returns "data not found" envelope → agent ignores it, waits until tool_timeout fires](https://github.com/HKUDS/nanobot/issues/5237) — 2 comments, 0 reactions.  
  The issue highlights that MCP business errors wrapped in successful `CallToolResult` responses are invisible to the LLM, causing tool calls to hang until timeout. This points to a need for standardized error propagation from MCP tools.

No PRs in this snapshot included comment/reaction counts, but the volume of open PRs suggests active maintainer collaboration.

## Bugs & Stability

Ranked by severity:

1. **High — MCP business errors are silently treated as success**  
   [#5237](https://github.com/HKUDS/nanobot/issues/5237)  
   When an MCP server returns an error envelope with `isError = False`, the agent never learns the call failed and waits until `tool_timeout`. No dedicated fix PR is visible yet.

2. **High — `/goal` produces dozens of repeated replies while waiting for user input**  
   [#5256](https://github.com/HKUDS/nanobot/issues/5256)  
   A single `/goal` message can trigger a cascade of near-identical replies until the user intervenes.  
   Fix PR: [#5257 fix(agent): bound sustained-goal continuation when the turn goes idle](https://github.com/HKUDS/nanobot/pull/5257).

3. **Medium — WhatsApp outbound audio not delivered**  
   [#5149](https://github.com/HKUDS/nanobot/issues/5149)  
   Audio is received but not sent.  
   Related fix PR: [#5203 fix(whatsapp): detect outbound media content before dispatch](https://github.com/HKUDS/nanobot/pull/5203) was closed/merged in this window.

4. **Medium — Matrix join fails on Continuwuity homeservers due to empty POST body**  
   [#5248 fix(matrix): send non-empty POST body on room join for Continuwuity compatibility](https://github.com/HKUDS/nanobot/pull/5248)  
   Open fix PR addressing `M_BAD_JSON` on join.

5. **Security — Credential-bearing URLs could be forwarded to remote Jina reader**  
   [#5258 fix(web): keep credential-bearing URLs away from the remote Jina reader](https://github.com/HKUDS/nanobot/pull/5258)  
   Open p1 security fix that routes sensitive URLs through local readability instead of third-party services.

## Feature Requests & Roadmap Signals

- [#5251 [enhancement] Feature: Add MCP Apps host support to the WebUI](https://github.com/HKUDS/nanobot/issues/5251)  
  This is the clearest user-driven roadmap signal: users want MCP servers to be able to attach interactive UI applications via `io.modelcontextprotocol/ui`. Given NanoBot already has an MCP client foundation, this is a plausible next-version feature.

- [#5252 feat(webui): add temporary chat mode](https://github.com/HKUDS/nanobot/pull/5252) and [#5259 fix(webui): enforce memory-only temporary sessions](https://github.com/HKUDS/nanobot/pull/5259)  
  Temporary, memory-only chat is actively being developed, likely for the next release.

- [#5253 feat(webui): add shared interactive project terminal](https://github.com/HKUDS/nanobot/pull/5253)  
  A project-scoped PTY shared between the WebUI and the agent is another strong roadmap signal for power users.

- The closed [#5234](https://github.com/HKUDS/nanobot/pull/5234) metasearch provider and [#5254](https://github.com/HKUDS/nanobot/pull/5254) provider-native request switches suggest continued investment in provider flexibility.

## User Feedback Summary

The main user-reported pain points in this window are:

- **WhatsApp media reliability** — audio messages are not delivered ([#5149](https://github.com/HKUDS/nanobot/issues/5149)).
- **MCP error transparency** — business failures are hidden from the model, causing confusing timeouts ([#5237](https://github.com/HKUDS/nanobot/issues/5237)).
- **Goal-loop behavior** — `/goal` can spam replies while the agent waits for user input ([#5256](https://github.com/HKUDS/nanobot/issues/5256)).

There is also demand for richer MCP UI integration ([#5251](https://github.com/HKUDS/nanobot/issues/5251)). No explicit satisfaction or praise metrics were captured in this data, but the rapid PR response to recent issues — especially WhatsApp media and WebUI polish — indicates maintainers are actively addressing user friction.

## Backlog Watch

- **Oldest open issue in the current window:** [#5149 no audio ?](https://github.com/HKUDS/nanobot/issues/5149)  
  Open since 2026-07-28, ~9 days. Although [#5203](https://github.com/HKUDS/nanobot/pull/5203) was closed as a related WhatsApp media fix, the issue itself remains open and likely needs maintainer confirmation.

- **Draft PR needing review:** [#5255 Draft: truthful API service status for externally-managed servers + `nanobot api status`](https://github.com/HKUDS/nanobot/pull/5255)  
  This draft addresses misleading WebUI API status for externally started servers and could use maintainer direction.

- **Open security/correctness PRs that should be prioritized:**  
  [#5258 credential-bearing URL protection](https://github.com/HKUDS/nanobot/pull/5258) and [#5248 Matrix join fix](https://github.com/HKUDS/nanobot/pull/5248).

No issues in this snapshot appear truly stale or abandoned; the project’s main challenge is keeping up with a high volume of incoming bug reports and feature PRs.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-06

## 1. Today's Overview

Hermes Agent activity is high but heavily review-pending: 50 issues and 50 PRs were updated in the last 24 hours, with **zero** closed/merged items and **zero** new releases. The most active discussion threads center on a repo-wide god-file decomposition epic, a terminal lifecycle crash, and a broad Telegram Bot API parity campaign. PR activity is dominated by bug fixes and safety hardening around session persistence, cron delivery, desktop session state, and terminal command sanitization. Overall project health is mixed: strong contributor momentum and triage activity, but merge throughput is currently zero and a substantial backlog of P2/P3 work remains open.

## 2. Releases

**None.** No new releases were published in the last 24 hours, so there are no changelog details, breaking changes, or migration notes to report.

## 3. Project Progress

No PRs were merged or closed in the last 24 hours. However, many open PRs were updated and are making visible progress through the review queue:

- **Safety hardening:** [#76219](https://github.com/NousResearch/hermes-agent/pull/76219) stops bash/zsh ANSI-C quoting from bypassing terminal approval hardline floors, preventing catastrophic disk-wipe commands from running without a prompt.
- **Session/persistence fixes:** [#79811](https://github.com/NousResearch/hermes-agent/pull/79811) persists the active provider in `model_config` on model switch; [#75352](https://github.com/NousResearch/hermes-agent/pull/75352) safely reclaims finished-thread WAL readers; [#73608](https://github.com/NousResearch/hermes-agent/pull/73608) fixes desktop session reads from stale global `$messages`; [#79805](https://github.com/NousResearch/hermes-agent/pull/79805) recovers desktop attach and `/compress` after stale session drops.
- **Cron/gateway fixes:** [#79813](https://github.com/NousResearch/hermes-agent/pull/79813) bounds `TERMINAL_CWD` lock acquisition; [#73363](https://github.com/NousResearch/hermes-agent/pull/73363) delivers each profile's cron output via its own adapter in multiplex mode; [#69242](https://github.com/NousResearch/hermes-agent/pull/69242) routes native Discord slash commands through `profile_routes`; [#79812](https://github.com/NousResearch/hermes-agent/pull/79812) fixes Teams SDK lazy-installation.
- **Refactoring momentum:** [#79127](https://github.com/NousResearch/hermes-agent/pull/79127) extracts custom-endpoints routes from `web_server.py`; [#79708](https://github.com/NousResearch/hermes-agent/pull/79708) extracts status-bar/skill-command mixins from `cli.py` as part of the god-file decomposition campaign.
- **Provider/tooling compatibility:** [#73093](https://github.com/NousResearch/hermes-agent/pull/73093) sanitizes tool schemas for MiniMax; [#78356](https://github.com/NousResearch/hermes-agent/pull/78356) upgrades the TencentDB memory plugin to v2.0.0; [#79810](https://github.com/NousResearch/hermes-agent/pull/79810) makes TUI/desktop tests pass on Windows; [#79809](https://github.com/NousResearch/hermes-agent/pull/79809) patches Electron and dependency advisories.

## 4. Community Hot Topics

The most active issues by comment count are:

- [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) — **Epic: Shard all 20 god files** (14 comments). A repo-wide refactoring epic making god-file decomposition standing policy. Signal: maintainers and contributors see large centralized files as a structural risk.
- [#77780](https://github.com/NousResearch/hermes-agent/issues/77780) — **`lifecycle_guard` crashes on `ValueError: embedded null byte`** (12 comments). Breaks all terminal commands; high visibility because it blocks core agent tooling.
- [#54962](https://github.com/NousResearch/hermes-agent/issues/54962) — **Extract Gateway Platform Routing from `gateway/run.py`** (11 comments). Another god-file concern: `run.py` is ~858KB.
- [#71941](https://github.com/NousResearch/hermes-agent/issues/71941) — **Delegated child context persists through shared terminal snapshots** (5 comments). Session-state isolation issue with `delegate_task`.
- [#78791](https://github.com/NousResearch/hermes-agent/issues/78791) — **Telegram Feature Parity & Alignment Campaign meta-issue** (5 comments). A large, systematic request to align Hermes with Telegram Bot API 10.2.

Underlying needs: contributors are pushing for architectural debt reduction (god-file sharding), safer terminal/session state handling, and platform feature completeness — especially Telegram, which currently has a very long list of unsupported Bot API surfaces.

## 5. Bugs & Stability

Bug reports updated in the last 24 hours, ranked by severity:

- **High — Terminal command path crash:** [#77780](https://github.com/NousResearch/hermes-agent/issues/77780) `lifecycle_guard.py` crashes with `ValueError: embedded null byte` from `os.open`, breaking all terminal commands. No dedicated fix PR was visible in the top updated PRs.
- **High — Session-state leakage:** [#71941](https://github.com/NousResearch/hermes-agent/issues/71941) delegated child context persists through shared terminal snapshots, so ordinary agent invocations may incorrectly observe `HERMES_DELEGATED_CHILD_CONTEXT`.
- **Medium — Cost display bug:** [#79220](https://github.com/NousResearch/hermes-agent/issues/79220) per-turn costs under one cent render as `$0.00` because display labels are formatted to 2 decimal places. Calculation is correct; display is wrong.
- **Medium — Telegram callback spinner hang:** [#78788](https://github.com/NousResearch/hermes-agent/issues/78788) unknown/data-less callback queries are never answered, so client spinners never resolve.
- **Medium — Telegram misuse of `setMyShortDescription`:** [#78784](https://github.com/NousResearch/hermes-agent/issues/78784) the bot's short description is being clobbered with online/offline status text.
- **Medium — Desktop session drop:** [#79805](https://github.com/NousResearch/hermes-agent/pull/79805) addresses attach and `/compress` failures after sleep/wake or backend restart.

Fix PRs exist but remain open, including: [#79813](https://github.com/NousResearch/hermes-agent/pull/79813) (cron lock timeout), [#79717](https://github.com/NousResearch/hermes-agent/pull/79717) (compression retry loops), [#76219](https://github.com/NousResearch/hermes-agent/pull/76219) (ANSI-C quoting safety), [#75352](https://github.com/NousResearch/hermes-agent/pull/75352) (WAL reader leak), and [#79694](https://github.com/NousResearch/hermes-agent/pull/79694) (Telegram Cyrillic BOM normalization).

## 6. Feature Requests & Roadmap Signals

The clearest roadmap signal is the **Telegram Feature Parity campaign** ([#78791](https://github.com/NousResearch/hermes-agent/issues/78791)), which has spawned dozens of filed feature gaps, including:

- Payments & Stars ([#78775](https://github.com/NousResearch/hermes-agent/issues/78775))
- Gifts API ([#78776](https://github.com/NousResearch/hermes-agent/issues/78776))
- Inline mode ([#78774](https://github.com/NousResearch/hermes-agent/issues/78774))
- Reply keyboards ([#78780](https://github.com/NousResearch/hermes-agent/issues/78780))
- Passport ([#78779](https://github.com/NousResearch/hermes-agent/issues/78779))
- Games API ([#78777](https://github.com/NousResearch/hermes-agent/issues/78777))
- Managed-bot and business-account APIs ([#78785](https://github.com/NousResearch/hermes-agent/issues/78785), [#78786](https://github.com/NousResearch/hermes-agent/issues/78786))

Many Telegram issues are already marked `duplicate` or folded into the campaign, indicating active triage rather than immediate implementation.

Other notable feature signals:

- [#78307](https://github.com/NousResearch/hermes-agent/issues/78307) — lifecycle management and maintenance UX for built-in memory (`MEMORY.md` / `USER.md`), tagged `needs-decision`.
- [#79808](https://github.com/NousResearch/hermes-agent/pull/79808) — enforce `cron.required_skills` so cron jobs cannot ship without the skills their output depends on.
- [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) — continued god-file decomposition as standing repo policy.
- [#77857](https://github.com/NousResearch/hermes-agent/pull/77857) — new desktop sessions should land in the Home project instead of inheriting the current workspace.

Likely next-version candidates: a batch of the Telegram parity features, session-state isolation fixes, and another wave of god-file extraction PRs.

## 7. User Feedback Summary

Real user pain points visible in this data:

- Terminal reliability is fragile: the `lifecycle_guard` null-byte crash ([#77780](https://github.com/NousResearch/hermes-agent/issues/77780)) is a hard blocker for terminal-based workflows.
- Session state is contextually leaky: delegated process context ([#71941](https://github.com/NousResearch/hermes-agent/issues/71941)) and desktop session drops ([#79805](https://github.com/NousResearch/hermes-agent/pull/79805)) undermine trust in multi-session use.
- Cost transparency is degraded by display formatting: sub-cent costs look like `$0.00` ([#79220](https://github.com/NousResearch/hermes-agent/issues/79220)).
- Platform parity gaps are a recurring complaint, especially Telegram ([#78791](https://github.com/NousResearch/hermes-agent/issues/78791)) and Discord profile routing ([#69242](https://github.com/NousResearch/hermes-agent/pull/69242)).
- Developer experience issues include Windows test failures ([#79810](https://github.com/NousResearch/hermes-agent/pull/79810)) and dependency advisories ([#79809](https://github.com/NousResearch/hermes-agent/pull/79809)).

No explicit satisfaction metrics or positive feedback are present in the sampled data.

## 8. Backlog Watch

Long-running items that remain open and were touched again in the last 24 hours:

- [#54962](https://github.com/NousResearch/hermes-agent/issues/54962) — opened 2026-06-29, 11 comments. Gateway routing extraction from an 858KB `gateway/run.py`; still no linked PR.
- [#69242](https://github.com/NousResearch/hermes-agent/pull/69242) — opened 2026-07-22, P2. Native Discord slash commands still not routed through `profile_routes`; fix PR awaiting merge.
- [#73093](https://github.com/NousResearch/hermes-agent/pull/73093) — opened 2026-07-28, P2. MiniMax tool schema sanitization; open for over a week.
- [#73363](https://github.com/NousResearch/hermes-agent/pull/73363) — opened 2026-07-28, P2. Cron multiplex profile adapter fix; open for over a week.
- [#73608](https://github.com/NousResearch/hermes-agent/pull/73608) — opened 2026-07-28, P2. Desktop session reads from stale global `$messages`; fix exists but not merged.
- [#75352](https://github.com/NousResearch/hermes-agent/pull/75352) — opened 2026-07-31, P2. WAL reader/FD leak; fix exists but not merged.
- [#76219](https://github.com/NousResearch/hermes-agent/pull/76219) — opened 2026-08-01, P2 security. ANSI-C quoting could bypass approval hardline and wipe disks; high-severity fix still open.

These items are not “abandoned” — they were all updated recently — but they are important, long-lived workstreams that would benefit from maintainer review and merge decisions.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-06

## Today's Overview
No new issues were reported or updated in the last 24 hours, and no releases were published. Activity centered on pull requests: 4 PRs were updated, with 1 closed (#926) and 3 still open. This indicates a steady maintenance and feature-development phase, with little new bug-report inflow. The most notable merged/closed work is Anthropic OAuth setup-token login support, while remaining open PRs cover web tooling, model fallback configuration, and installation-script relocation. Overall project health appears stable, though several PRs continue to wait for maintainer review or merge.

## Releases
No new releases were published in this window.

## Project Progress
- **PR #926 — [CLOSED] feat(auth): add Anthropic OAuth setup-token login**  
  https://github.com/sipeed/picoclaw/pull/926  
  This enhancement PR was closed/merged. It adds support for Anthropic OAuth setup tokens (`sk-ant-oat01-*`) as an alternative to standard API keys. Key additions include a `--setup-token` flag, an interactive login-menu option, usage-endpoint integration showing 5-hour and 7-day utilization in `auth status`, and streaming support for OAuth tokens. This expands authentication flexibility for Anthropic-backed workflows.

## Community Hot Topics
No issues or PRs had substantial comment/reaction activity recorded in this window. The main community-driven signals are the open PRs themselves:

- **PR #3318 — [OPEN] fix(web): repair unparseable pnpm-lock.yaml**  
  https://github.com/sipeed/picoclaw/pull/3318  
  Reports a broken web frontend lockfile and proposes a fix. Underlying need: contributors and users should be able to install/build the web frontend without lockfile corruption.

- **PR #3200 — [OPEN] feat(models): add configurable default fallback chain**  
  https://github.com/sipeed/picoclaw/pull/3200  
  Requests UI and backend support for configuring default model fallback chains. Underlying need: users want reliable model routing and failover behavior customized to their preferences.

- **PR #1951 — [OPEN] chore: move installation scripts from docs repo to here**  
  https://github.com/sipeed/picoclaw/pull/1951  
  Moves installation scripts into the main repository. Underlying need: reduce fragmentation and make installation tooling easier to discover and maintain.

## Bugs & Stability
- **High severity — Broken web frontend lockfile**  
  PR #3318 identifies that `web/frontend/pnpm-lock.yaml` contains duplicate mapping keys for `semver@7.8.5`, causing pnpm to reject the lockfile with `ERR_PNPM_BROKEN_LOCKFILE`. This blocks reproducible installs/builds for the web frontend. A fix PR is open:  
  https://github.com/sipeed/picoclaw/pull/3318

No other crashes, regressions, or critical bugs were reported in the last 24 hours.

## Feature Requests & Roadmap Signals
- **Anthropic OAuth setup-token support** (PR #926, closed) is likely to appear in the next release, enabling users to authenticate without traditional API keys.  
- **Configurable default model fallback chain** (PR #3200) is a strong roadmap candidate for the web UI, adding persistent model routing and fallback ordering.  
- **Installation scripts moved into main repo** (PR #1951) signals a developer-experience improvement that may land soon for easier setup.  

## User Feedback Summary
No direct user comments or reactions were available in this data window. Inferred feedback from PR activity indicates:  
- Users want more flexible Anthropic authentication options (OAuth setup tokens).  
- Users want control over model fallback behavior through the UI, not just configuration files.  
- Contributors/self-hosting users are encountering lockfile/build friction on the web frontend.  
- There is a desire for consolidated install scripts in the main project rather than in a separate docs repository.  

Overall, users appear focused on authentication flexibility, model reliability, and smoother developer onboarding.

## Backlog Watch
- **PR #1951 — [OPEN] chore: move installation scripts from docs repo to here**  
  Opened 2026-03-24, last updated 2026-08-05. This has been open for over four months and may need maintainer attention.  
  https://github.com/sipeed/picoclaw/pull/1951

- **PR #3200 — [OPEN] feat(models): add configurable default fallback chain**  
  Opened 2026-07-01, last updated 2026-08-05. Open for over a month without being merged; it is a significant feature and may need a maintainer decision.  
  https://github.com/sipeed/picoclaw/pull/3200

- **PR #3318 — [OPEN] fix(web): repair unparseable pnpm-lock.yaml**  
  Opened 2026-08-05. This is a newly reported build-blocking bug fix and should be reviewed promptly to avoid ongoing web build issues.  
  https://github.com/sipeed/picoclaw/pull/3318

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-06

## 1. Today's Overview

NanoClaw is in a healthy, high-velocity development phase: **12 pull requests were updated in the last 24 hours**, including **6 newly opened PRs** on August 5 spanning bug fixes (WhatsApp startup timeout, MCP env forwarding, command-gate DB routing) and new capabilities (Tavily MCP skill, `add-why` skill, Dial channel picker). Two PRs reached closed/merged status, and **no new releases** were published. Two open issues remain in triage — both are several months old and touch installer reliability and Signal attachment handling. The mix of core-team fixes and guideline-compliant community contributions indicates strong project health and an active contributor base.

## 2. Releases

No new releases in the last 24 hours. Nothing to report.

## 3. Project Progress

**Closed/merged PRs today (2):**
- [#3175 [CLOSED] fix: route command-gate denials through the delivery adapter, not outbound.db](https://github.com/nanocoai/nanoclaw/pull/3175) — by Joi. Removes a double-writer hazard where the host inserted denial-notice rows directly into a container-owned `outbound.db`, violating the repo’s single-writer invariant (docs/db.md). Superseded by a fresh open PR (#3192).
- [#3187 [CLOSED] fix(agent-runner): disallow built-in SendMessage so agent-to-agent messaging works](https://github.com/nanocoai/nanoclaw/pull/3187) — by dim0627. Fixes the agent runner so the built-in `SendMessage` can’t intercept/hijack agent-to-agent messaging flows.

**Opened in the last 24h (advancing both fixes and features):**
- [#3192 fix: route command-gate denials through the delivery adapter](https://github.com/nanocoai/nanoclaw/pull/3192) — follow-on correction of the same DB-corruption risk.
- [#3191 fix(whatsapp): bound setup() to a timeout](https://github.com/nanocoai/nanoclaw/pull/3191) — prevents a logged-out Wa session from hanging host startup indefinitely.
- [#3188 fix(container): forward OneCLI gateway env to spawned MCP servers](https://github.com/nanocoai/nanoclaw/pull/3188) — stdio MCP children now receive `HTTPS_PROXY`/CA-trust vars.
- [#3156 fix(agent-runner): carry channel attachments to providers as structured parts](https://github.com/nanocoai/nanoclaw/pull/3156) — likely the fix for the Signal attachment bug (#2528).

## 4. Community Hot Topics

Engagement metrics are low across the board (issues carry 1 comment and 0 👍; PRs have no recorded reactions), so the “hot” items are those with recency plus sustainment:

- [#2528 Signal channel: image/PDF attachments unreachable from agent container](https://github.com/nanocoai/nanoclaw/issues/2528) — open since May 18, updated Aug 5. Underlying need: channel attachments must be transparently visible to the agent inside the container; correlated fix PR #3156 is now in flight.
- [#2006 Fresh install on Debian 12 LXC: docker socket permission denied — recovery path doesn’t fire](https://github.com/nanocoai/nanoclaw/issues/2006) — open since April 25, updated Aug 5. Underlying need: fail-safe install UX on container-based hosts when group changes don’t take effect mid-script.
- [#2346 fix(formatter): treat unknown slash commands as normal chat](https://github.com/nanocoai/nanoclaw/pull/2346) — open since May 8; long-lived community fix awaiting review. Underlying need: no silent message drops when users type a non-magic slash command.

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue/Fix | Notes |
|---|---|---|
| **High** | [#2006 Docker socket permission denied on Debian 12 LXC](https://github.com/nanocoai/nanoclaw/issues/2006) | Fresh install aborts; `usermod -aG docker` doesn’t take effect in the same script. No dedicated fix PR visible yet. |
| **Medium** | [#2528 Signal attachments unreachable from agent](https://github.com/nanocoai/nanoclaw/issues/2528) | Files arrive on host but agent can’t open them; [#3156](https://github.com/nanocoai/nanoclaw/pull/3156) addresses structured attachment passing. |
| **Medium** | [#2346 Unknown slash commands silently dropped](https://github.com/nanocoai/nanoclaw/pull/2346) | SDK misinterprets unknown commands as Claude Code slash commands, producing output without `<message>` blocks that gets discarded. |
| **Medium** | [#3191 WhatsApp logged-out session hangs host startup](https://github.com/nanocoai/nanoclaw/pull/3191) | Unbounded `connection: open` await never resolves when QR/pairing isn’t re-scanned; fix PR open. |
| **Low/Med** | [#3188 MCP servers lack proxy/CA env vars](https://github.com/nanocoai/nanoclaw/pull/3188) | `getDefaultEnvironment()` drops `HTTPS_PROXY` and CA-trust settings for stdio children; fix PR open. |
| **Infra** | [#3175/#3192 outbound.db double-writer risk](https://github.com/nanocoai/nanoclaw/pull/3192) | Denial notices written directly by host into container-owned DB; corrected via delivery adapter. |

## 6. Feature Requests & Roadmap Signals

- **Dial channel integration** — [#3050 feat(setup): add Dial to the channel picker + wizard/skills](https://github.com/nanocoai/nanoclaw/pull/3050). A substantial feature-skill PR (open since Jul 14) adding a new channel end-to-end; likely a next-version candidate if it receives maintainer review.
- **Tavily MCP tool skill** — [#3190 feat: add Tavily MCP tool skill](https://github.com/nanocoai/nanoclaw/pull/3190). New utility skill for web-search/tool access; matches the project’s expanding MCP ecosystem.
- **`add-why` skill** — [#3189 feat(skill): add-why — explain what happened to one message](https://github.com/nanocoai/nanoclaw/pull/3189). A debugging/UX polish skill; signals interest in message-level observability.
- **Host seams for skill-owned capabilities** — [#3186 refactor: add host seams for skill-owned capabilities](https://github.com/nanocoai/nanoclaw/pull/3186). Architectural groundwork for richer skills; may unlock future channel/tool integrations.
- **Skills cleanup** — [#3172 chore: remove stale qodo and Google MCP skills](https://github.com/nanocoai/nanoclaw/pull/3172). Housekeeping toward a leaner skills catalog.

## 7. User Feedback Summary

- **Pain points voiced:** install friction on Proxmox/LXC hosts (docker group not effective mid-script, [#2006](https://github.com/nanocoai/nanoclaw/issues/2006)); Signal media files invisible to the agent ([#2528](https://github.com/nanocoai/nanoclaw/issues/2528)); sessions silently hanging when WhatsApp is logged out ([#3191](https://github.com/nanocoai/nanoclaw/pull/3191)); and messages being dropped when users type unrecognized slash commands ([#2346](https://github.com/nanocoai/nanoclaw/pull/2346)).
- **Positive signals:** contributors are creating utility/diagnostic skills (add-why, Tavily) and volunteering refactors with clear rationale (Joi’s DB-safety fix, zvi-fried’s host seams), indicating an engaged, guideline-aware community. Low comment/reaction counts suggest feedback is still mostly PR-driven rather than discussion-driven.

## 8. Backlog Watch

- [#2006 Fresh install on Debian 12 LXC: docker socket permission denied](https://github.com/nanocoai/nanoclaw/issues/2006) — **oldest open issue (since Apr 25)**, install blocker with only 1 comment; needs maintainer acknowledgment or a fix PR.
- [#2528 Signal channel: image/PDF attachments unreachable](https://github.com/nanocoai/nanoclaw/issues/2528) — open since May 18; correlated fix PR #3156 exists but hasn’t been reviewed/merged.
- [#2346 fix(formatter): treat unknown slash commands as normal chat](https://github.com/nanocoai/nanoclaw/pull/2346) — open since May 8; a small, high-value fix awaiting maintainer action.
- [#3050 feat(setup): add Dial to the channel picker](https://github.com/nanocoai/nanoclaw/pull/3050) — open since Jul 14 with no recorded comments; likely needs rebase and core-team review.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-06

## 1. Today's Overview

NullClaw saw a quiet 24-hour window: zero issues were updated (0 open, 0 closed), no new releases were published, and no PRs were merged or closed. The only activity consists of two open pull requests, both authored by raskevichai and both updated yesterday (2026-08-05), targeting runtime and channel-reliability fixes. While the project appears stable on the surface, the open PRs indicate that known stability bugs are still awaiting review and merge. The main health concern is review throughput: two substantive fixes are in flight but have not yet landed.

## 2. Releases

No new releases were published in the last 24 hours. There are no version changes, breaking changes, or migration notes to report.

## 3. Project Progress

No PRs were merged or closed in the last 24 hours. Two PRs remain open and under review:

| PR | Title | Status | Linked Issue |
|----|-------|--------|--------------|
| [#985](https://github.com/nullclaw/nullclaw/pull/985) | fix(runtime): give the agent turn path a 16 MiB stack | Open | Closes [#976](https://github.com/nullclaw/nullclaw/issues/976) |
| [#984](https://github.com/nullclaw/nullclaw/pull/984) | fix(channels): let poll failures age out a dead polling thread | Open | Closes [#972](https://github.com/nullclaw/nullclaw/issues/972) |

Both PRs are bug fixes rather than feature work:

- **#985** addresses a root cause where `SESSION_TURN_STACK_SIZE` was aliased to `HEAVY_RUNTIME_STACK_SIZE` (2 MiB), sizing every thread running `SessionManager.processMessage*()` / `Agent.turn()`. The fix increases the turn-path stack to 16 MiB.
- **#984** addresses silent failures in Telegram and Matrix channels after idle periods, where the gateway supervision loop was structurally unable to detect and restart dead polling threads.

Neither PR has reported comment or reaction activity yet (0 comments, 0 👍).

## 4. Community Hot Topics

There were no issues or PRs with meaningful comment/reaction activity in the last 24 hours — the two open PRs are the entirety of community-facing activity. Underlying needs visible from their descriptions:

- **Long-running deployment reliability**: Operators running `nullclaw agent` continuously expect messaging channels (Telegram, Matrix) to survive idle periods without manual gateway restarts.
- **Crash resilience**: Deep or complex agent turns can exhaust the current 2 MiB stack, indicating community demand for robust execution paths under heavy workloads.

Most active items:

- [PR #985 — fix(runtime): give the agent turn path a 16 MiB stack](https://github.com/nullclaw/nullclaw/pull/985)
- [PR #984 — fix(channels): let poll failures age out a dead polling thread](https://github.com/nullclaw/nullclaw/pull/984)

## 5. Bugs & Stability

No new bugs or regressions were reported in the last 24 hours (0 issues created/updated). However, two known stability bugs are being addressed by the open PRs, ranked by severity:

1. **High — Silent channel death (Telegram/Matrix)** — Channels go silent after an idle night while the agent still answers; only a full gateway restart restores them. The supervisor failed to detect the dead polling threads. Fix available in [PR #984](https://github.com/nullclaw/nullclaw/pull/984) (closes [#972](https://github.com/nullclaw/nullclaw/issues/972)). *Not yet merged.*

2. **Medium — Stack overflow risk on agent turn path** — The turn path was sized at 2 MiB via an aliased constant, which can be insufficient for `SessionManager.processMessage*()` / `Agent.turn()`, risking crashes. Fix available in [PR #985](https://github.com/nullclaw/nullclaw/pull/985) (closes [#976](https://github.com/nullclaw/nullclaw/issues/976)). *Not yet merged.*

Both fixes exist as open PRs, so the underlying bugs remain live until those PRs are merged.

## 6. Feature Requests & Roadmap Signals

No user-submitted feature requests were filed or updated in the last 24 hours. The only roadmap signal is the current fix trajectory:

- **Channel supervision hardening** — making poll failures age out dead threads points toward a more resilient gateway lifecycle.
- **Runtime stack sizing** — increasing the turn-path stack to 16 MiB suggests a commitment to supporting more complex agent turns without developer-configured tuning.

Given that both PRs are bug fixes addressing reported issues, the next version is likely a patch/minor release focused on stability rather than new features. If merged promptly, channel reliability and stack-overflow fixes are the most probable inclusions.

## 7. User Feedback Summary

No direct user feedback, comments, or reactions were captured in the last 24 hours. Indirect pain points can be inferred from the PR descriptions:

- **Frustration with silent outages**: Users of Telegram/Matrix channels experience an outage where the bot appears dead but the agent process is still running; only a full gateway restart resolves it ([#984](https://github.com/nullclaw/nullclaw/pull/984) / [#972](https://github.com/nullclaw/nullclaw/issues/972)).
- **Concern over crashes during turns**: The constrained 2 MiB turn-path stack is a latent crash risk for long-running or deeply nested agent interactions ([#985](https://github.com/nullclaw/nullclaw/pull/985) / [#976](https://github.com/nullclaw/nullclaw/issues/976)).

Both issues were recognized and produced targeted fixes, which is a positive signal for maintainer responsiveness, though users are still waiting for the fixes to land.

## 8. Backlog Watch

No long-unanswered issues are visible in the current data window (0 open issues updated in the last 24h). However, two open PRs warrant maintainer attention:

- [PR #984](https://github.com/nullclaw/nullclaw/pull/984) — resolves the high-severity channel-outage bug; waiting for review/merge.
- [PR #985](https://github.com/nullclaw/nullclaw/pull/985) — resolves the stack-overflow risk; waiting for review/merge.

These PRs close older reported issues ([#972](https://github.com/nullclaw/nullclaw/issues/972) and [#976](https://github.com/nullclaw/nullclaw/issues/976)), so merging them would clear backlog debt. Neither PR has comments or reviews yet, suggesting they may need reviewer bandwidth and/or CI verification before landing.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-06

Source: [github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. Today's Overview

IronClaw is in a high-activity phase around the **v1.1.0 release candidate**, with 43 issues and 50 PRs touched in the last 24 hours (33 open issues, 10 closed; 32 open PRs, 18 merged/closed). The headline RC — **ironclaw-v1.1.0-rc.1** (Aug 3) — delivers extension reach (hosted MCP registration, IronHub deep links, cross-channel file attachments, Slack `/ironclaw` slash commands). The most significant signal this week is a **QA bug bash that surfaced a cluster of agent-hallucination bugs** (false "GitHub connected" claims, fabricated automation status) and MCP authentication/validation failures, indicating reliability gaps around agent truthfulness and state verification. Meanwhile, the **skills subsystem** is the most active development front, with three stacked PRs (#6938, #6745, #7171) reshaping how the model chooses, mounts, and executes skills, alongside a major merged messaging framework (#6831) and steady CI/dependency stabilization.

---

## 2. Releases

### ironclaw-v1.1.0-rc.1 — `1.1.0-rc.1` (2026-08-03)
[Release](https://github.com/nearai/ironclaw/releases) · First release candidate since 1.0.0.

**Headline features:**
- **Arbitrary hosted MCP server registration** — extension reach beyond bundled tools
- **IronHub deep-link installs** — marketplace-style tool/skill installation from links
- **Durable file attachments that cross channels** — files persist across delivery targets
- **Slack `/ironclaw` slash commands** — first-class Slack interaction surface
- **Broad legibility pass** — failures across the product made more readable

**Notes:** No breaking changes or migration steps were published in the RC notes. The RC is the current release vehicle for the v1.1.0 epic, with IronHub integration ([#6731](https://github.com/nearai/ironclaw/issues/6731)) still tagged `v1.1.0` and evidently shipping in this cycle.

---

## 3. Project Progress

**Merged/closed in the last 24h: 18 PRs, 10 issues.** Notable completed work:

- **#6831 — Standardized messaging framework (merged)** — [PR #6831](https://github.com/nearai/ironclaw/pull/6831): host-owned messaging standard with 16 core operations, 13 reserved op names, canonical JSON Schemas, and a 12-code error taxonomy. A foundational architecture piece for the Reborn assistant.
- **#7261 — CI release canary temp path fix (merged)** — [PR #7261](https://github.com/nearai/ironclaw/pull/7261): resolves zero-job failure in the tag-only release workflow; extends the workflow sabotage contract.
- **#7196 — Wasm dependencies bumped (merged)** — [PR #7196](https://github.com/nearai/ironclaw/pull/7196): `wasmtime-wasi` 47.0.3, `wit-component`/`wit-parser` updates.
- **#7244 — Main branch CI failures fixed (closed)** — [Issue #7244](https://github.com/nearai/ironclaw/issues/7244).
- **#7053 / #7056 — Critical E2E coverage closed** — [Issue #7053](https://github.com/nearai/ironclaw/issues/7053) (first-run LLM onboarding, project lifecycle/membership isolation, automation lifecycle) and [Issue #7056](https://github.com/nearai/ironclaw/issues/7056) (automation create → rename → pause → resume → delete) both landed.
- **#7204 — WebUI composer focus fix (closed)** — [Issue #7204](https://github.com/nearai/ironclaw/issues/7204): composer now focuses on "+ New" and thread open; removed the focus-within accent ring.
- **#741 — Bedrock streaming via `converse_stream()` (closed)** — [Issue #741](https://github.com/nearai/ironclaw/issues/741): a long-requested LLM-provider feature (open since March) finally resolved.
- **Dogfooding/QA epics closed** — [#6892](https://github.com/nearai/ironclaw/issues/6892) (07/27–07/31) and [#6394](https://github.com/nearai/ironclaw/issues/6394) (07/20–07/24), plus the Reborn WebUI E2E gap epic [#4632](https://github.com/nearai/ironclaw/issues/4632).

**Actively in flight (open PRs):**
- Skills stack: [#6745](https://github.com/nearai/ironclaw/pull/6745) (installed/agent-authored skills selectable & installable) → [#6938](https://github.com/nearai/ironclaw/pull/6938) (model chooses skills, not a keyword scorer) → [#7171](https://github.com/nearai/ironclaw/pull/7171) (one DB-backed tree per skill mount; runnable skill commands)
- Sandbox: [#7214](https://github.com/nearai/ironclaw/pull/7214) — explicit Docker and Railway user-sandbox profiles, tenant+user scoped workspaces, fresh non-root Python workers
- MCP privacy: [#7253](https://github.com/nearai/ironclaw/pull/7253) — custom MCP registration kept definition-only, no auto-install/activation
- Channel delivery: [#7157](https://github.com/nearai/ironclaw/pull/7157) — explicit two-lane channel delivery tool with notification channels
- Design system: [#7039](https://github.com/nearai/ironclaw/pull/7039) (Storybook integration) and [#7043](https://github.com/nearai/ironclaw/pull/7043) (design governance docs)
- Delivery hardening by theredspoon: [#7028](https://github.com/nearai/ironclaw/pull/7028) (terminal status recovery), [#7029](https://github.com/nearai/ironclaw/pull/7029) (durable delivery claim), [#7027](https://github.com/nearai/ironclaw/pull/7027) (disable ambient proxy discovery), [#7034](https://github.com/nearai/ironclaw/pull/7034) (CLI proxy diagnostics), [#7048](https://github.com/nearai/ironclaw/pull/7048) (Wasm guest diagnostics sanitization)

---

## 4. Community Hot Topics

- **[#3036 — Configuration-as-Code epic (7 comments, 👍1)](https://github.com/nearai/ironclaw/issues/3036)** — The most-discussed issue. Operators want declarative config (tenant blueprints, use-case harnesses) instead of hand-editing `.env`, `.system/` docs, settings JSON, and runtime flags with no schema/diff/audit trail. Open since April; signals strong demand for enterprise-grade reproducibility.
- **[#7194 — Admin-allowed shared channel as outbound delivery target (3 comments)](https://github.com/nearai/ironclaw/issues/7194)** — Agents can post via `slack.send_message` but can't make a shared channel an outbound delivery target. Underlying need: admins want sanctioned, policy-controlled egress to shared spaces rather than ad-hoc agent posting.
- **[#7209 — CI regression gate rejects `node:assert` style (2 comments)](https://github.com/nearai/ironclaw/issues/7209)** — Developer-friction issue: 99% of frontend tests use `node:assert`, but the gate can't see that style, so correct frontend fix PRs fail `Regression test enforcement`. Process pain point with a clear fix path.
- **[#6257 — PDF `attachments.mime_type` error (2 comments)](https://github.com/nearai/ironclaw/issues/6257)** — Reported by a real user (Michael Kelly, Slack `#x-ai-product-feedback`); PDF send/generate is broken. Open since July 19 with no fix PR yet — one to watch.
- **[#7204 / #7208 — WebUI polish (2 comments each)](https://github.com/nearai/ironclaw/issues/7204)** — Composer focus papercut (closed) and dead `ThreadSidebar` component removal (open). Shows active frontend cleanup in the Reborn WebUI.

**Underlying needs:** reproducibility/declarative ops, controlled multi-channel delivery, CI trust, and WebUI UX maturity.

---

## 5. Bugs & Stability

Ranked by severity. Several carry `bug_bash_P1/P2` labels from the QA bash and share a common theme: **the agent asserts state it never verified.**

### Critical (P1)
- **[#7247 — Agent falsely claims GitHub is already connected](https://github.com/nearai/ironclaw/issues/7247)** — Agent asserts GitHub is connected without verifying auth state; the very next GitHub call fails. Trust-eroding hallucination. *No fix PR yet.*
- **[#7246 — Agent hallucinates automation status](https://github.com/nearai/ironclaw/issues/7246)** — Claims a BTC news digest automation is running when the Automations page shows "No automations yet." Same root cause family as #7247. *No fix PR yet.*

### High (P2)
- **[#7249 — Slack DM execution result delivered to Telegram](https://github.com/nearai/ironclaw/issues/7249)** — Cross-channel delivery leak: a Slack DM run's summary (with Slack-specific recipient details and JSON attachment) lands in Telegram. Data-exposure concern; relevant to the in-flight delivery tool PR #7157.
- **[#7248 — Invalid custom MCP endpoint accepted, then run fails](https://github.com/nearai/ironclaw/issues/7248)** — Unverified MCP endpoint registered as "successfully installed"; agent loops trying to discover tools and the run dies.
- **[#7251 — Agent guesses MCP auth type instead of discovering it](https://github.com/nearai/ironclaw/issues/7251)** — Agent speculates about auth rather than inspecting the endpoint or initiating the auth flow.
- **[#7250 — DeepWiki MCP misleading auth guidance on network errors](https://github.com/nearai/ironclaw/issues/7250)** — Network failure is misattributed to auth/URL; the tool's actual error is not reported.
- **[#7254 — Cannot access files attached to Slack feedback threads](https://github.com/nearai/ironclaw/issues/7254)** — User-shared reproducer files can't be downloaded during feedback triage (p2, feedback-sourced).

### Medium
- **[#6257 — PDF send/generate fails with `Invalid value (attachments.mime_type)`](https://github.com/nearai/ironclaw/issues/6257)** — Open since 07/19; no fix PR yet.
- **[#7231 — "verdict: APPROVE" reviews never submit a real GitHub approval](https://github.com/nearai/ironclaw/issues/7231)** — PRs read as approved but stay merge-blocked; process/tooling bug with direct throughput impact.
- **[#7209 — CI regression gate can't see `node:assert` style](https://github.com/nearai/ironclaw/issues/7209)** — Blocks correct frontend PRs.
- **[#7244 — Main branch CI failures (closed/fixed)](https://github.com/nearai/ironclaw/issues/7244)** — Resolved in this window; release canary path fix (#7261) also landed.

**Assessment:** The QA bash was productive — it exposed a systematic reliability problem (agent hallucinating state) and MCP validation gaps. These cluster around the newly shipped 1.1.0-rc.1 extension-reach features and should be prioritized before the final 1.1.0.

---

## 6. Feature Requests & Roadmap Signals

- **IronHub integration ([#6731, epic, v1.1.0](https://github.com/nearai/ironclaw/issues/6731))** — Runtime marketplace for signed, provenance-checked tools/skills; RC deep links already land, so full discovery/install is likely next.
- **Skills that the model self-creates, finds, chooses, and uses ([#6941, epic](https://github.com/nearai/ironclaw/issues/6941))** — Three open PRs (#6745, #6938, #7171) actively implement this; strong candidate for 1.1.x.
- **Admin-Managed Agents as UserId Subjects ([#6578, epic](https://github.com/nearai/ironclaw/issues/6578))** — Tenant admins operating non-human subjects without a second identity hierarchy; open since 07/23, no PR yet.
- **Configuration-as-Code ([#3036, epic](https://github.com/nearai/ironclaw/issues/3036))** — Tenant blueprints + declarative harnesses; most-commented issue, likely to grow in priority for enterprise adoption.
- **Storybook + AI-first Design System ([#7038, epic](https://github.com/nearai/ironclaw/issues/7038))** — Phase 1 & 2 PRs open (#7039, #7043), backed by a full proposal package; near-term WebUI investment.
- **Web Debug Inspector ([#7218, epic](https://github.com/nearai/ironclaw/issues/7218))** — Operator-only `?debug=true` inspector for prompt construction, live activity, token usage, tool execution. New epic (Aug 5).
- **Outbound delivery to admin-allowed shared channels ([#7194](https://github.com/nearai/ironclaw/issues/7194))** — Directly complements merged delivery work; likely to follow the channel-delivery tool PR #7157.
- **Virtual filesystem as a real mount ([#7203](https://github.com/nearai/ironclaw/issues/7203))** — Spun out of the skills work so skill scripts can actually execute, not just be read.

**Prediction:** The next 1.1.0 milestone will converge on the skills stack (#6745/#6938/#7171) and sandbox profiles (#7214), with MCP-definition privacy (#7253) fixing the bug-bash findings.

---

## 7. User Feedback Summary

- **PDF attachments broken (external user)** — Michael Kelly (Slack, `#x-ai-product-feedback`) hit `Invalid value (attachments.mime_type)` when sending/generating PDFs; issue [#6257](https://github.com/nearai/ironclaw/issues/6257) is open since July 19 with a suspected timestamp-format cause. Slow turnaround risk on an externally reported bug.
- **Feedback-triaging friction** — A user shared a report/reproducer as a Slack thread attachment; IronClaw could not download/read it ([#7254](https://github.com/nearai/ironclaw/issues/7254)). Directly impedes the product-feedback loop the team relies on.
- **Trust deficit from hallucinated state** — QA-bash reports ([#7246](https://github.com/nearai/ironclaw/issues/7246), [#7247](https://github.com/nearai/ironclaw/issues/7247)) show the agent confidently asserting false states (connected GitHub, running automations). For an AI-agent product, this is the highest-impact dissatisfaction vector.
- **Cross-channel leakage surprise** — Delivery of a Slack DM result into Telegram ([#7249](https://github.com/nearai/ironclaw/issues/7249)) undermines the new durable-attachment/channel story in 1.1.0-rc.1.
- **MCP onboarding confusion** — Users are asked to guess auth types and are told invalid endpoints installed successfully ([#7248](https://github.com/nearai/ironclaw/issues/7248), [#7251](https://github.com/nearai/ironclaw/issues/7251)); the new MCP registration UX needs verification before GA.
- **Positive governance signal** — The APDD governance-kit evaluation ([#7255 PR](https://github.com/nearai/ironclaw/pull/7255)) and design-system proposal show the project investing in process maturity — a healthy sign for long-term contributors.

---

## 8. Backlog Watch

Items open unusually long or high-value with no movement:

- **[#3036 — Configuration-as-Code epic (open since 2026-04-28)](https://github.com/nearai/ironclaw/issues/3036)** — Most-commented issue in the repo (7 comments), only 1 👍; no implementation branch. The gap between demand and attention is the widest in the backlog.
- **[#6257 — PDF `mime_type` bug (open since 2026-07-19)](https://github.com/nearai/ironclaw/issues/6257)** — Externally reported, two comments, zero fix PRs. This is the kind of small bug that erodes user trust.
- **[#6578 — Admin-Managed Agents epic (open since 2026-07-23)](https://github.com/nearai/ironclaw/issues/6578)** — Significant scope (non-human subjects, delegated integrations) with no linked PRs yet.
- **[#6731 — IronHub integration (open since 2026-07-27, tagged v1.1.0)](https://github.com/nearai/ironclaw/issues/6731)** — Partially delivered via RC deep links; the full marketplace story still needs a home.
- **[#7203 — Virtual filesystem as a real mount (open since 2026-08-05)](https://github.com/nearai/ironclaw/issues/7203)** — Spun out of skills work; explicitly blocked by sandbox work, but needed for the skills epic to pay off.
- **[#7231 — Fake "APPROVE" review comments block merges (open since 2026-08-05)](https://github.com/nearai/ironclaw/issues/7231)** — Young but merge-queue-critical; a process bug that will keep compounding if not fixed.
- **Watch item:** the multi-PR delivery-hardening stack ([#7027](https://github.com/nearai/ironclaw/pull/7027), [#7028](https://github.com/nearai/ironclaw/pull/7028), [#7029](https://github.com/nearai/ironclaw/pull/7029), [#7034](https://github.com/nearai/ironclaw/pull/7034), [#7048](https://github.com/nearai/ironclaw/pull/7048)) by a new contributor has been open since Aug 3 with heavy cross-PR dependencies — it needs maintainer review bandwidth to land.

---

**Bottom line:** IronClaw is shipping ambitiously (1.1.0-rc.1, metadata messaging framework, skills revamp), and the QA bug bash provided a clear, actionable reliability punch list. The project's health is good — high throughput, expanding contributor base (multiple "contributor: new" PRs), and process investments — but the hallucination bugs and MCP validation gaps are the top risks to address before 1.1.0 goes final.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-06

## 1. Today's Overview

LobsterAI is in an active release-and-stabilization cycle: version **2026.8.5** shipped yesterday with new activity and enterprise features, while 12 PRs were closed/merged in the last 24 hours. The bulk of merged work targeted the startup credit campaign, OpenClaw gateway/window lifecycle stability, and a new title-bar conversation search. The issue tracker saw three open bugs, two of which are fresh, detailed reports about prompt duplication and skill-toggle configuration mismatches. Overall project health looks solid: the maintainers are merging quickly, but a few older bugs remain in stale backlog.

## 2. Releases

**LobsterAI 2026.8.5** ([GitHub Releases](https://github.com/netease-youdao/LobsterAI/releases))

- `feat(activity)`: Add native daily check-in experience — [PR #2408](https://github.com/netease-youdao/LobsterAI/pull/2408)
- `feat(enterprise)`: Isolate account-scoped auth and service flows — [PR #2409](https://github.com/netease-youdao/LobsterAI/pull/2409)
- `style`: General style updates

No breaking changes or migration notes were mentioned in the release notes.

## 3. Project Progress

Closed/merged PRs in the last 24 hours show continued momentum across renderer, main-process stability, and cowork features:

- **Activity / startup credit campaign polish**
  - [PR #2439](https://github.com/netease-youdao/LobsterAI/pull/2439): Include close icon in startup credit poster
  - [PR #2438](https://github.com/netease-youdao/LobsterAI/pull/2438): Update startup credit poster asset
  - [PR #2433](https://github.com/netease-youdao/LobsterAI/pull/2433): Crop poster gutters, improve claim failure messages, refresh campaign binding before retry
  - [PR #2432](https://github.com/netease-youdao/LobsterAI/pull/2432): Disable final reward auto popup, keep manual claiming flow

- **Core stability**
  - [PR #2437](https://github.com/netease-youdao/LobsterAI/pull/2437): Harden window lifecycle and shutdown against hangs (bound proxy/server shutdown with drain timers and deadlines)
  - [PR #2436](https://github.com/netease-youdao/LobsterAI/pull/2436): Prevent OpenClaw gateway lock poisoning from self-restart races

- **New feature**
  - [PR #2435](https://github.com/netease-youdao/LobsterAI/pull/2435): Add title-bar conversation search, reusing existing sidebar search workflow

- **Maintenance / dependencies**
  - [PR #1279](https://github.com/netease-youdao/LobsterAI/pull/1279): Bump cross-env to 10.1.0
  - [PR #1280](https://github.com/netease-youdao/LobsterAI/pull/1280): Bump react-dom to 19.2.4
  - [PR #1281](https://github.com/netease-youdao/LobsterAI/pull/1281): Bump vite to 8.0.9

- **Internal / unclear**
  - [PR #2434](https://github.com/netease-youdao/LobsterAI/pull/2434) and [PR #2431](https://github.com/netease-youdao/LobsterAI/pull/2431): Both closed with title `Liuzhq/fix rlog 202683` but no visible summary

## 4. Community Hot Topics

Discussion volume is low, but the clearest focus point is [Issue #1200](https://github.com/netease-youdao/LobsterAI/issues/1200): **NIM superTeam group names are not resolved correctly due to a hardcoded `teamTypeNum` mismatch**. It is the only issue with any comment activity, and it has an associated open fix PR [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201). The underlying need is correct group-name display when bots are @-mentioned in large/ordinary NIM groups.

Two new issues also stand out despite having no comments yet:

- [Issue #2441](https://github.com/netease-youdao/LobsterAI/issues/2441): Skill switches are written by directory name while OpenClaw matches by frontmatter `name`; if they differ, the switch silently fails. Also `openclaw.json` is overwritten entirely, leaving no persistent way for users to trim system prompts.
- [Issue #2440](https://github.com/netease-youdao/LobsterAI/issues/2440): Desktop channel injects a 4,425-character system-instructions block that is ~78% duplicated with `AGENTS.md`, causing the model to read the same instructions twice.

These reports reflect a broader user desire for **more control, transparency, and efficiency in system-prompt management**.

## 5. Bugs & Stability

Ranked by likely impact:

1. **High — Duplicate system prompt injection** ([#2440](https://github.com/netease-youdao/LobsterAI/issues/2440))  
   Desktop sessions inject a large system-instructions block that is 78% verbatim duplicate of `AGENTS.md`. This wastes context and may degrade instruction-following behavior. No fix PR yet.

2. **High — Skill toggle silently fails due to name mismatch** ([#2441](https://github.com/netease-youdao/LobsterAI/issues/2441))  
   Users cannot persistently disable skills from their system prompt because toggles are written by directory name while OpenClaw matches by frontmatter `name`; `openclaw.json` is also overwritten, preventing user-level persistence. No fix PR yet.

3. **Medium — Wrong NIM group name lookup** ([#1200](https://github.com/netease-youdao/LobsterAI/issues/1200))  
   Hardcoded `teamTypeNum` values are inconsistent with V2NIM SDK enums, causing superTeam/group names to fall back to raw IDs in @-mentions. A fix PR exists but has been open and stale since April: [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201).

**Stability fixes merged today:**

- [PR #2437](https://github.com/netease-youdao/LobsterAI/pull/2437) fixes app-quit hangs caused by lingering keep-alive sockets in the OpenAI-compat proxy and HTML preview server.
- [PR #2436](https://github.com/netease-youdao/LobsterAI/pull/2436) fixes OpenClaw gateway lock-file poisoning caused by self-restart races, which previously could make gateway respawns fail for up to 30 seconds.

## 6. Feature Requests & Roadmap Signals

- **Conversation search from title bar** was just shipped in [PR #2435](https://github.com/netease-youdao/LobsterAI/pull/2435), indicating ongoing investment in the cowork/conversation UX.
- **Enterprise account-scoped auth/service isolation** landed in release 2026.8.5 ([PR #2409](https://github.com/netease-youdao/LobsterAI/pull/2409)), suggesting continued enterprise hardening.
- The two newest issue reports ([#2440](https://github.com/netease-youdao/LobsterAI/issues/2440), [#2441](https://github.com/netease-youdao/LobsterAI/issues/2441)) both point to **prompt management and skill configuration**. Given the detailed bug reports and active release cadence, fixes for prompt de-duplication and frontmatter/directory-name consistency could plausibly appear in the next version.
- The long-open NIM fix ([#1201](https://github.com/netease-youdao/LobsterAI/pull/1201)) is a strong candidate for a quick merge if maintainers review it.

## 7. User Feedback Summary

Users are reporting specific, reproducible pain points:

- Duplicate system-prompt content is making sessions less efficient and noisy — [Issue #2440](https://github.com/netease-youdao/LobsterAI/issues/2440).
- Skill toggles “silently fail” when directory names and frontmatter names differ, undermining user trust in configuration — [Issue #2441](https://github.com/netease-youdao/LobsterAI/issues/2441).
- NIM group names in bot mentions appear as raw IDs, breaking expected display behavior — [Issue #1200](https://github.com/netease-youdao/LobsterAI/issues/1200).
- Some activity UI behavior, such as auto-popping the final reward poster, was unwanted; the team responded by disabling it while preserving manual claiming ([PR #2432](https://github.com/netease-youdao/LobsterAI/pull/2432)).

Overall, feedback is technically detailed and actionable. The maintainer response speed is good, with multiple fixes landing the same day.

## 8. Backlog Watch

- [Issue #1200](https://github.com/netease-youdao/LobsterAI/issues/1200) and [PR #1201](https://github.com/netease-youdao/LobsterAI/pull/1201) remain open since **April 2026**. The issue is marked stale but is a real functional bug affecting NIM group names. This is the clearest item needing maintainer attention.
- [Issue #2441](https://github.com/netease-youdao/LobsterAI/issues/2441) and [Issue #2440](https://github.com/netease-youdao/LobsterAI/issues/2440) are new but currently have no maintainer response; given their severity, they should be triaged promptly before they also become stale.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-06

## Today's Overview

QwenPaw activity remains high: 25 issues were updated in the last 24h (19 open, 6 closed) and 50 PRs were updated (29 open, 21 merged/closed). No new release was published in this window. The busiest areas were provider/streaming error handling, MCP tool reliability, desktop packaging regressions, and WeChat channel approval flows. Maintainers closed several long-running PRs, including LLM fallback backend/UI work and reasoning-content relay fixes. Overall project health is active but stability-sensitive, with several bugs quickly producing targeted fix PRs.

## Project Progress

21 PRs reached a merged/closed state in the last 24h. Notable closed items:

- [PR #5597](https://github.com/agentscope-ai/QwenPaw/pull/5597) — feat(backend): per-agent and global LLM model fallback with safe retry boundaries
- [PR #5598](https://github.com/agentscope-ai/QwenPaw/pull/5598) — feat(console): LLM fallback configuration UI for agent and global models pages
- [PR #5462](https://github.com/agentscope-ai/QwenPaw/pull/5462) — feat(console): global responsive utility classes
- [PR #5447](https://github.com/agentscope-ai/QwenPaw/pull/5447) — fix(channel): yield failed AgentResponse on console errors to unblock UI
- [PR #6675](https://github.com/agentscope-ai/QwenPaw/pull/6675) — fix: force relay reasoning_content for DeepSeek models
- [PR #6718](https://github.com/agentscope-ai/QwenPaw/pull/6718) — feat: unify app market listings
- [PR #6713](https://github.com/agentscope-ai/QwenPaw/pull/6713) — fix(router): audit visibility for sensitive directory exclusion

Several related bugs were also closed: the large-tool-output session freeze ([#6700](https://github.com/agentscope-ai/QwenPaw/issues/6700)), cron pause/resume persistence loss ([#6690](https://github.com/agentscope-ai/QwenPaw/issues/6690)), and the deterministic nightly integration test failure ([#6716](https://github.com/agentscope-ai/QwenPaw/issues/6716)).

## Community Hot Topics

The most-discussed issues by comment count were:

- [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) — [Feature] Add retry functionality for channels (4 comments). Users report Matrix channel connections fail because QwenPaw starts before the Matrix service, with no retry or health check.
- [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) — Automatic model routing (3 comments). Users want requests routed to the best model per message instead of a fixed model per agent.
- [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) — MCP tools periodically stop working (2 comments). Tools become "unregistered" after several hours until container restart.
- [#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) — `nohup` / background shell commands hang the agent (2 comments).

Underlying needs are clear: channel resilience, MCP reliability, more flexible model selection, and better shell-process lifecycle handling.

## Bugs & Stability

Ranked by severity and user impact:

1. **MCP tools stop working after hours** — [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732). High severity; requires Docker restart. No fix PR yet.
2. **Desktop v2.1.0b1 injects `PYTHONHOME` into child processes**, crashing all Python subprocesses — [#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697). High severity for Windows desktop users. No fix PR yet.
3. **`execute_shell_command` crashes when model passes `sandbox_config`** — [#6731](https://github.com/agentscope-ai/QwenPaw/issues/6731). `TypeError: replace() should be called on dataclass instances`. No fix PR yet.
4. **Long tool-heavy console sessions hit 400 `tool` role errors** — [#6726](https://github.com/agentscope-ai/QwenPaw/issues/6726). Breaks long-running agent sessions. No fix PR yet.
5. **WeChat iLink typing indicator consumes one-time `context_token`**, causing replies to be rejected — [#6696](https://github.com/agentscope-ai/QwenPaw/issues/6696). No fix PR yet.
6. **Browser SDK `open()` always fails with Target crashed** — [#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698). High-severity for browser tooling on Windows. No fix PR yet.
7. **SSE in-stream 503 errors are not retried** — [#6708](https://github.com/agentscope-ai/QwenPaw/issues/6708). Fix PR open: [#6714](https://github.com/agentscope-ai/QwenPaw/pull/6714).
8. **Thinking-mode upstream rejects histories containing tool calls + reasoning blocks** — [#6707](https://github.com/agentscope-ai/QwenPaw/issues/6707). Related fix PRs: [#6721](https://github.com/agentscope-ai/QwenPaw/pull/6721), [#6675](https://github.com/agentscope-ai/QwenPaw/pull/6675).
9. **Forked background subagent reports success when worktree finalization fails** — [#6722](https://github.com/agentscope-ai/QwenPaw/issues/6722). Fix PR open: [#6725](https://github.com/agentscope-ai/QwenPaw/pull/6725).
10. **OpenRouter capability cache permanently overwrites documented capabilities** — [#6687](https://github.com/agentscope-ai/QwenPaw/issues/6687). Fix PR open: [#6723](https://github.com/agentscope-ai/QwenPaw/pull/6723).

## Feature Requests & Roadmap Signals

Prominent user-requested features:

- **Automatic model routing** ([#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436)) — route simple, vision, and hard-reasoning requests to different models automatically.
- **Configurable MCP tool-call timeout** ([#6724](https://github.com/agentscope-ai/QwenPaw/issues/6724)) — per-client config and call-level guard against hung MCP servers.
- **Live artifact canvas** ([#6730](https://github.com/agentscope-ai/QwenPaw/issues/6730)) — render agent-generated HTML in a Console side panel. A related PR, [#6719](https://github.com/agentscope-ai/QwenPaw/pull/6719), already adds persistent workspace artifact cards.
- **On-demand skill loading** ([#6699](https://github.com/agentscope-ai/QwenPaw/issues/6699)) — avoid loading all enabled skills into the system prompt, saving 8–10k tokens for users with many skills.
- **Channel retry/health-check** ([#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684)) — automatic reconnection for channels like Matrix.
- **WeChat approval prompts in Chinese** ([#6728](https://github.com/agentscope-ai/QwenPaw/issues/6728)) — localization of approval actions.

Likely next-version candidates: MCP timeout support, artifact canvas/cards, reasoning-content retry hardening, and channel retry logic.

## User Feedback Summary

Users are actively using QwenPaw in real deployments, but channel reliability is a recurring pain point. Matrix requires manual re-saving after startup ([#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684)), MCP tools silently die until restart ([#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732)), and WeChat approval was initially impossible without the Console ([#6695](https://github.com/agentscope-ai/QwenPaw/issues/6695)). Desktop users report regressions in v2.1.0b1, especially Python subprocess crashes ([#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697)) and browser automation failures ([#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698)). Long tool-heavy sessions are fragile: large tool outputs freeze history loading ([#6700](https://github.com/agentscope-ai/QwenPaw/issues/6700)) and accumulated tool-call pairs trigger API 400 errors ([#6726](https://github.com/agentscope-ai/QwenPaw/issues/6726)). Feature demand skews toward smarter model routing, token efficiency, and richer Console-side artifact display.

## Backlog Watch

Issues and PRs that appear to need maintainer attention:

- [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) — Automatic model routing, open since 2026-07-24, no linked PR yet.
- [#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) — `nohup` / `&` shell command hang, open since 2026-07-26, unresolved.
- [#6627](https://github.com/agentscope-ai/QwenPaw/issues/6627) — How to use loongsuite for tracing with QwenPaw, open since 2026-08-01, still awaiting guidance.
- [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) — Large provider discovery / routing unification PR, open since 2026-07-21, needs review.
- [#6580](https://github.com/agentscope-ai/QwenPaw/pull/6580) — Sprint 4/5 e2e coverage PR, open since 2026-07-30, needs review/merge.
- [#6669](https://github.com/agentscope-ai/QwenPaw/pull/6669) — Windows desktop Chrome native messaging and restore locking fix, open since 2026-08-04, needs review.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-06

## Today's Overview

ZeroClaw is in a high-intensity RFC and hardening cycle with no new release shipped in the last 24 hours. 50 issues and 50 PRs were touched: 39 issues remain open/active with 11 closed, while PR activity is almost entirely open (49 open, 1 closed). The project is executing a two-track milestone strategy — the v0.8.5 finite weekly stabilization line ([#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459), intake frozen Aug 4) and the v0.9.0 auth/security/gateway breaking-change queue ([#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)). Notable fresh S1 bug reports (OpenRouter streaming parameter loss, Signal UUID sender drops) were answered same-day with new fix PRs, indicating a fast, self-sustaining contribution loop — though maintainer review capacity remains the visible bottleneck.

## Releases

No new releases in the last 24 hours. The v0.8.5 stabilization line is tracked in [issue #9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459) with weekly cuts through August 30.

## Project Progress

- **1 PR closed, 11 issues closed** in the window. PR [#9750](https://github.com/zeroclaw-labs/zeroclaw/pull/9750) (bound launcher-owned daemon logs, size:XL) was closed; a revised, narrow-scoped approach is open in [#9773](https://github.com/zeroclaw-labs/zeroclaw/pull/9773) (launchd-specific 8 MiB bounded log runner).
- **Shipments confirmed via closed issues:** WhatsApp Web LID allowed-numbers bypass fixed ([#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350)), plugins-wasmtime lib tests now execute in CI ([#9462](https://github.com/zeroclaw-labs/zeroclaw/issues/9462)), data-wrapped OpenAI-compatible responses supported ([#9335](https://github.com/zeroclaw-labs/zeroclaw/issues/9335)), config CLI cron hyphen-alias bug fixed ([#9652](https://github.com/zeroclaw-labs/zeroclaw/issues/9652)), ZeroCode string-editing cursor navigation landed ([#7467](https://github.com/zeroclaw-labs/zeroclaw/issues/7467)).
- **PRs advancing today:** [#9777](https://github.com/zeroclaw-labs/zeroclaw/pull/9777) (Signal sourceUuid sender acceptance — addresses [#9774](https://github.com/zeroclaw-labs/zeroclaw/issues/9774)), [#9776](https://github.com/zeroclaw-labs/zeroclaw/pull/9776) (workspace-relative `forbidden_paths` glob patterns — implements [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)), [#9778](https://github.com/zeroclaw-labs/zeroclaw/pull/9778) (foundations docs revision reconciliation), [#9748](https://github.com/zeroclaw-labs/zeroclaw/pull/9748) (stale provider refresh session fix), [#9737](https://github.com/zeroclaw-labs/zeroclaw/pull/9737) (agent tool policy enforced in pipelines), [#9678](https://github.com/zeroclaw-labs/zeroclaw/pull/9678) (Git shell policy hardening), [#9428](https://github.com/zeroclaw-labs/zeroclaw/pull/9428) (Bluesky/Reddit sender authorization), [#9715](https://github.com/zeroclaw-labs/zeroclaw/pull/9715) (retry-safe JSONL session migration), [#8928](https://github.com/zeroclaw-labs/zeroclaw/pull/8928) (Doctor diagnostics log path).

## Community Hot Topics

Top active discussions by comment count:

- [#6808 RFC: Work Lanes, Board Automation, and Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — 18 comments; governance/coordination reform, rev. 24, in progress since May 20.
- [#8303 RFC: Goal mode v1 — bounded foreground Matrix work](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) — 18 comments, 1 👍; durable user objectives across agent turns.
- [#8603 RFC: ZeroClaw Chat Completions profile](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) — 16 comments; OpenAI-protocol compatibility for Open WebUI, LobeChat, Continue.dev, Aider, LangChain.
- [#7155 RFC: Per-execution confirmation tier for high-risk shell commands](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) — 16 comments; Claude Code-style allow/ask/deny policy, Revision 3.
- [#7141 RFC: Pluggable inbound authentication and canonical principals](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) — 12 comments; OIDC/providers and identity architecture, rev. 8.
- [#8692 Maintainer decision queue for RFCs and design issues](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — 11 comments; the coordination surface for the RFC volume.

Underlying community needs: operator safety/control surfaces (shell policy, auth, forbidding sensitive paths), OpenAI-ecosystem API compatibility, and better governance tooling to route the growing RFC backlog.

## Bugs & Stability

**New in this window, ranked by severity:**

- **S1** [#9775](https://github.com/zeroclaw-labs/zeroclaw/issues/9775) — OpenRouter streaming requests drop `provider_extra`; workflow blocked. No fix PR yet.
- **S1** [#9774](https://github.com/zeroclaw-labs/zeroclaw/issues/9774) — Signal channel silently drops `sourceUuid`-only senders. Fix PR opened today: [#9777](https://github.com/zeroclaw-labs/zeroclaw/pull/9777).
- **S2** [#9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) — Daemon reload is not wired to SIGUSR1; the degraded-security warning tells operators to send a signal that actually kills the daemon.
- **S3** [#9769](https://github.com/zeroclaw-labs/zeroclaw/issues/9769) — `vi_verify` withheld-capability notice is invisible when log persistence is disabled.
- **S3** [#9771](https://github.com/zeroclaw-labs/zeroclaw/issues/9771) — `zeroclaw-gateway` fails `clippy -D warnings` on default features.

**Ongoing accepted high-risk bugs:** [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) (verifiable-intent evaluates constraints without verifying the credential chain) and [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) (MCP/tool-schema cloning drives unbounded RSS growth / OOM). [#9697](https://github.com/zeroclaw-labs/zeroclaw/issues/9697) (ZeroCode cannot connect to daemon launched by Windows Task Scheduler) remains accepted as S3. Security fix PRs in queue: [#8826](https://github.com/zeroclaw-labs/zeroclaw/pull/8826) (image_gen SSRF), [#9748](https://github.com/zeroclaw-labs/zeroclaw/pull/9748), [#9477](https://github.com/zeroclaw-labs/zeroclaw/pull/9477).

## Feature Requests & Roadmap Signals

- **Strongest roadmap signal:** the [Chat Completions profile RFC #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) — OpenAI-ecosystem compatibility is the most-requested integration surface; data-wrapped response support ([#9335](https://github.com/zeroclaw-labs/zeroclaw/issues/9335)) already shipped.
- **Security/control features tracking toward v0.9.0:** per-execution shell confirmation ([#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)), pluggable inbound auth ([#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)), workspace-relative forbidden paths ([#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) — implementation PR now open), Anthropic stored-profile OAuth ([#9464](https://github.com/zeroclaw-labs/zeroclaw/issues/9464)), channel sender authorization everywhere ([#9428](https://github.com/zeroclaw-labs/zeroclaw/pull/9428)).
- **Agent capability expansion:** Goal mode ([#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)), plugin-owned Kanban board ([#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832)), computer-use desktop interaction ([#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)), Matrix single-message progress drafts ([#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443)).
- **Cost/performance:** Stable OpenRouter `session_id` for prompt-cache savings ([#9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631)).

**Prediction:** v0.8.5 will absorb the reliability/stabilization queue (daemon logs, memory growth, Windows scheduler), while v0.9.0 collects auth, shell policy, Web/OpenAI surface work, and breaking changes.

## User Feedback Summary

- **Cost pain is explicit:** "ZeroClaw agent chats through OpenRouter are unnecessarily expensive — the system prompt and tool schemas are replayed every turn" ([#9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631)).
- **Recurring reliability frustration:** the Windows Task Scheduler daemon issue shows the "same/similar behavior as in previous version, which I expected to be resolved" ([#9697](https://github.com/zeroclaw-labs/zeroclaw/issues/9697)).
- **Silent failures are a recurring theme:** WhatsApp allowed-numbers bypass ([#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350), closed), empty WhatsApp `allowed_groups` semantics ([#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397)), Signal UUID drops ([#9774](https://github.com/zeroclaw-labs/zeroclaw/issues/9774)), OpenRouter parameter loss ([#9775](https://github.com/zeroclaw-labs/zeroclaw/issues/9775)).
- **Positive signals:** contributors are filing and shipping real security fixes (SSRF, credential-chain verification, channel authorization, shell policy), and the RFC revision discipline visible on Aug 5 (multiple RFCs re-revised) plus the decision queue ([#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)) show a maturing governance process.

## Backlog Watch

**Awaiting maintainer review (via [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) decision queue):**
- [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) RFC Work Lanes — since May 20, rev. 24, longest-running governance RFC.
- Oldest RFCs still unreviewed: [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) (May 26), [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) and [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) (Jun 3), [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) (Jun 24), [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) and [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) (Jul).

**PRs stalled in `needs-author-action` (blocking shipped fixes):**
- [#8826](https://github.com/zeroclaw-labs/zeroclaw/pull/8826) SSRF gate for image_gen (Jul 8), [#8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496) deferred-MCP access policy (Jun 29), [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) Matrix progress drafts (Jun 28), [#9477](https://github.com/zeroclaw-labs/zeroclaw/pull/9477) `<tools>`-tag parser recovery (Jul 28), [#9548](https://github.com/zeroclaw-labs/zeroclaw/pull/9548) Codex extra-arg warnings (Jul 29), [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) Anthropic OAuth (Jul 26), [#9715](https://github.com/zeroclaw-labs/zeroclaw/pull/9715) JSONL migration (Aug 3).

The existence of [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) is itself the process response to this backlog; with 12+ RFCs in flight, maintainer review capacity — not contribution velocity — is the binding constraint on project throughput.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*