# OpenClaw Ecosystem Digest 2026-08-15

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-14 23:11 UTC

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

# OpenClaw Project Digest — 2026-08-15

## 1. Today's Overview
OpenClaw is in a period of very high activity: 500 issues and 500 PRs were updated in the last 24 hours, with 12 issues closed and 96 PRs merged/closed. No new release was published. The community remains deeply engaged — many of the open PRs come from external contributors and already have linked fixes for reported issues. However, the project carries a heavy stability burden: most of the most-commented issues are P0/P1 bugs around message loss, memory leaks, and provider-specific stalls, and a large share are tagged `needs-maintainer-review`, `needs-product-decision`, or `clawsweeper-recovery-stuck`, suggesting maintainer bandwidth is a bottleneck.

## 2. Releases
No new releases were published on 2026-08-15.

---

## 3. Project Progress
**96 PRs merged/closed** in the last 24 hours (404 still open). Noteworthy items:

### Merged/Closed
- [PR #116489](https://github.com/openclaw/openclaw/pull/116489) — `feat(security): require acknowledgement for install policy warnings` (closed; adds interactive confirmation for suspicious plugin/skill installs when `security.installPolicy` returns `warn`).

### Open PRs with linked fixes (in-flight progress)
- [PR #123495](https://github.com/openclaw/openclaw/pull/123495) — fix(sessions): prevent cleanup from deleting readable transcripts (closes #119085)
- [PR #123866](https://github.com/openclaw/openclaw/pull/123866) — fix(skills): repair valid skills above the reviewer read cap (closes #123833)
- [PR #123877](https://github.com/openclaw/openclaw/pull/123877) — fix: honor provider timeouts during stuck-session recovery (closes #121018)
- [PR #123827](https://github.com/openclaw/openclaw/pull/123827) — fix(compaction): preserve generated summaries when suffix context overflows (closes #119272)
- [PR #121044](https://github.com/openclaw/openclaw/pull/121044) — fix: memory_search no longer rebuilds the whole index after an ordinary zero-hit query (closes #121043)
- [PR #121103](https://github.com/openclaw/openclaw/pull/121103) — fix(memory): apply temporal decay to dated files in memory subdirectories (fixes #121046)
- [PR #121106](https://github.com/openclaw/openclaw/pull/121106) — fix(sessions): treat non-positive `pruneAfterMs` as disabled instead of pruning all entries (P0 severity fix)
- [PR #121105](https://github.com/openclaw/openclaw/pull/121105) — fix(acpx): strip amazon-bedrock provider prefix from Claude ACP model refs (fixes #121034)
- [PR #121100](https://github.com/openclaw/openclaw/pull/121100) — fix(automations): stop offering rejected agent retargets (closes #121078)
- [PR #123837](https://github.com/openclaw/openclaw/pull/123837) — feat(telegram): support copy-text presentation buttons (related #36105)
- [PR #122862](https://github.com/openclaw/openclaw/pull/122862) — fix(matrix): resolve exact room session routes
- [PR #120919](https://github.com/openclaw/openclaw/pull/120919) — fix: preserve Bedrock discovered image capability (closes #71921)
- [PR #121191](https://github.com/openclaw/openclaw/pull/121191) — fix(ui): keep annotated slash commands local
- [PR #113750](https://github.com/openclaw/openclaw/pull/113750) — fix(cron): fail originating media cron on detached errors
- [PR #88084](https://github.com/openclaw/openclaw/pull/88084) — fix: let approval commands bypass the active reply lane
- [PR #123834](https://github.com/openclaw/openclaw/pull/123834) — fix(agents): stop yield diagnostic from being suppressed by narrated text
- [PR #121137](https://github.com/openclaw/openclaw/pull/121137) — fix(cron): keep overview refreshes generation-consistent
- [PR #121198](https://github.com/openclaw/openclaw/pull/121198) — feat(android): support Android 9–11 devices
- [PR #64064](https://github.com/openclaw/openclaw/pull/64064) — feat(anthropic): add advisor tool support [AI-assisted]

A coordinated Control UI improvement series by `vyctorbrzezowski` ([#123356](https://github.com/openclaw/openclaw/pull/123356), [#123597](https://github.com/openclaw/openclaw/pull/123597), [#123582](https://github.com/openclaw/openclaw/pull/123582), [#123682](https://github.com/openclaw/openclaw/pull/123682)) is advancing composer slash-command staging and sidebar consolidation.

---

## 4. Community Hot Topics
Most active/discussed issues (by comment count):

- [Issue #121058](https://github.com/openclaw/openclaw/issues/121058) — **Silent reply failures still recurring after #116277 closed** (94 comments). The single most active item. Users report the monitoring cron still logs failures, so the previous fix was incomplete. Signals a systemic, hard-to-reproduce delivery bug.
- [Issue #91588](https://github.com/openclaw/openclaw/issues/91588) — **P0 Gateway memory leak: RSS 350MB → 15.5GB, OOM crash loops** (24 comments, 1 👍). Core stability issue spanning weeks.
- [Issue #121953](https://github.com/openclaw/openclaw/issues/121953) — **Cron agent turns stall on DeepSeek** because the `[cron:<jobId> <name>] ` user-message prefix is deprioritized by DeepSeek's API edge (20 comments). New P1 with an unusual provider-specific root cause.
- [Issue #80319](https://github.com/openclaw/openclaw/issues/80319) — **QA tool-defaults suite conflates Codex-native tools with OpenClaw dynamic tool parity** (18 comments, 1 👍). Community largely reframed the original overclaim; needs a product decision.
- [Issue #96834](https://github.com/openclaw/openclaw/issues/96834) — **WhatsApp 1:1 inbound image wedges the main lane ~3 minutes** (15 comments, 1 👍).
- [Issue #62505](https://github.com/openclaw/openclaw/issues/62505) — **Coding Agent never completes anything** (15 comments, 1 👍); regression since 2026.4.2.
- [Issue #108435](https://github.com/openclaw/openclaw/issues/108435) — **Gateway fails to start after update to 2026.7.1** (14 comments, 3 👍, P0).

**Most reacted:** [#108435](https://github.com/openclaw/openclaw/issues/108435) (3 👍), [#10687](https://github.com/openclaw/openclaw/issues/10687) dynamic model discovery (3 👍), [#81061](https://github.com/openclaw/openclaw/issues/81061) pre-routing hook (3 👍).

**Underlying needs:** Users are hitting a cluster of reliability issues (memory, delivery, provider quirks) and are asking for more robustness, better observability (cost/usage logging), and clearer product decisions on architectural changes.

---

## 5. Bugs & Stability
Ranked by severity:

### P0 / Critical
- [Issue #91588](https://github.com/openclaw/openclaw/issues/91588) — Gateway memory leak (RSS up to 15.5GB) causing repeated OOM kills and `launchd-handoff` crash loops. **No fix PR.**
- [Issue #108435](https://github.com/openclaw/openclaw/issues/108435) — Gateway fails to start with `Error: gateway did not start on 127.0...` on 2026.7.1; systemd, ollama, and manual launch all affected. **Needs info.**
- [Issue #119270](https://github.com/openclaw/openclaw/issues/119270) — File tools strip a leading `@` from **destination** paths, silently writing to and deleting the wrong file (data loss). **Needs maintainer review.**

### P1 / High
- [Issue #121058](https://github.com/openclaw/openclaw/issues/121058) — Silent reply failures recurring; no queued reply payload (94 comments).
- [Issue #121953](https://github.com/openclaw/openclaw/issues/121953) — DeepSeek cron stall due to `[cron:...]` prefix deprioritization.
- [Issue #96834](https://github.com/openclaw/openclaw/issues/96834) — WhatsApp inbound image wedges main lane; strands reply work.
- [Issue #62505](https://github.com/openclaw/openclaw/issues/62505) — Coding Agent regression: never completes anything.
- [Issue #86215](https://github.com/openclaw/openclaw/issues/86215) — Codex OAuth refresh failures wedge agents for hours without rotation/alerting.
- [Issue #47975](https://github.com/openclaw/openclaw/issues/47975) — Subagent sessions persist after completion; main session becomes unresponsive.
- [Issue #98435](https://github.com/openclaw/openclaw/issues/98435) — MCP loopback transport doesn't auto-reconnect after gateway restart; `recovered=1` is misleading.
- [Issue #87109](https://github.com/openclaw/openclaw/issues/87109) — Gateway heap grows to 1073MB+ at idle on macOS; cron jobs silently fail under memory pressure.
- [Issue #120563](https://github.com/openclaw/openclaw/issues/120563) — Conversation history not sent to model on custom/Ollama provider; every turn gets fixed-size context.
- [Issue #108379](https://github.com/openclaw/openclaw/issues/108379) — Duplicate assistant generation attempts for Xiaomi MiMo (openai-completions).
- [Issue #94939](https://github.com/openclaw/openclaw/issues/94939) — 6.x migration leaves channel conversation-store SQLite at 0 bytes; breaks MS Teams proactive sends.
- [Issue #91144](https://github.com/openclaw/openclaw/issues/91144) — Windows Scheduled Task gateway doesn't stay running (foreground works).
- [Issue #97616](https://github.com/openclaw/openclaw/issues/97616) — Unreaped hook/tool child processes accumulate as zombies.
- [Issue #95553](https://github.com/openclaw/openclaw/issues/95553) — Preflight compaction hard-capped at ~60s, ignores `compaction.timeoutSeconds`.
- [Issue #99947](https://github.com/openclaw/openclaw/issues/99947) — Codex harness mirrored-session-history read fails; one-shot cleanup retires shared client mid-flight.
- [Issue #98702](https://github.com/openclaw/openclaw/issues/98702) — Inherited OpenAI OAuth rejected for built-in runtime on `openai-chatgpt-responses` transport.
- [Issue #92186](https://github.com/openclaw/openclaw/issues/92186) — Foreground reply fence cancels delivery of completed WhatsApp replies (shown in dashboard, never delivered).
- [Issue #99910](https://github.com/openclaw/openclaw/issues/99910) — Memory dreaming run pegs gateway event loop ~10 min until killed.
- [Issue #107244](https://github.com/openclaw/openclaw/issues/107244) — WhatsApp group messages never reach inbound handling (DMs work).
- [Issue #106704](https://github.com/openclaw/openclaw/issues/106704) — `sessions_yield` on a subagent's first turn silently finalizes as "ok" with empty result.

### Fix PRs in flight
Several P1/P2 bugs already have linked fix PRs: #119272 (compaction summaries → [PR #123827](https://github.com/openclaw/openclaw/pull/123827)), #121018 (provider timeouts → [PR #123877](https://github.com/openclaw/openclaw/pull/123877)), #121043 (memory_search index rebuild → [PR #121044](https://github.com/openclaw/openclaw/pull/121044)), #121046 (temporal decay → [PR #121103](https://github.com/openclaw/openclaw/pull/121103)), #119085 (transcript cleanup → [PR #123495](https://github.com/openclaw/openclaw/pull/123495)), #121078 (automations retarget → [PR #121100](https://github.com/openclaw/openclaw/pull/121100)), #123833 (skill repair cap → [PR #123866](https://github.com/openclaw/openclaw/pull/123866)).

---

## 6. Feature Requests & Roadmap Signals
Most active/upvoted requests:

- [Issue #10687](https://github.com/openclaw/openclaw/issues/10687) — Fully dynamic model discovery for OpenRouter + beyond (3 👍). Strong signal; static catalog is a known limitation.
- [Issue #81061](https://github.com/openclaw/openclaw/issues/81061) — `before_route_inbound_message` pre-routing hook for channel bridging/proxying (3 👍).
- [Issue #73537](https://github.com/openclaw/openclaw/issues/73537) — Production-readiness stability label on releases (2 👍).
- [Issue #75947](https://github.com/openclaw/openclaw/issues/75947) — UI quality redesign based on UX scoring (2 👍).
- [Issue #13219](https://github.com/openclaw/openclaw/issues/13219) — Per-model usage logging for cost tracking (1 👍).
- [Issue #50093](https://github.com/openclaw/openclaw/issues/50093) — WhatsApp backfill of missed messages after reconnection.
- [Issue #96975](https://github.com/openclaw/openclaw/issues/96975) — Isolate subagent completion from parent context; return status + child session link only.
- [Issue #71142](https://github.com/openclaw/openclaw/issues/71142) — Configurable upload size limit for Control UI (currently hardcoded 5MB).
- [Issue #88154](https://github.com/openclaw/openclaw/issues/88154) — Slack modal support for interactive workflows.
- [Issue #17840](https://github.com/openclaw/openclaw/issues/17840) — Opt-in reaction-triggered agent turns.
- [Issue #44395](https://github.com/openclaw/openclaw/issues/44395) — Heading-aware chunking + entity extraction for memory search (2 👍).
- [Issue #68920](https://github.com/openclaw/openclaw/issues/68920) — `lightContext`/voice mode for `/v1/chat/completions` (10–15s TTFB is too slow for real-time voice).

**Likely in next version:** The in-flight PR set is heavily weighted toward session/compaction/memory fixes, plus Control UI polish and Telegram UX — these are likely candidates for the next release. The Android 9–11 support PR ([#121198](https://github.com/openclaw/openclaw/pull/121198)) and Anthropic advisor tool ([#64064](https://github.com/openclaw/openclaw/pull/64064)) are larger feature-shaped additions still awaiting maintainer action.

---

## 7. User Feedback Summary
- **Positive:** [Issue #73537](https://github.com/openclaw/openclaw/issues/73537) includes a heartfelt thank-you from a user running OpenClaw as a family and business assistant (Telegram, automations, Home Assistant) — a good signal for the project's real-world value.
- **Frustration — silent failures:** #121058 explicitly calls out that the previous fix was closed while the bug persists; users want the team to stop closing issues prematurely.
- **Frustration — stability:** Repeated OOM/memory issues (#91588, #87109), cron silent failures, and coding-agent regressions (#62505) are eroding trust in the "it just works" experience.
- **Channel pain:** WhatsApp is the most-cited pain point (images, groups, backfill, reply delivery).
- **Missing observability:** Users want cost/usage logging (#13219) and stability labels (#73537) to operate OpenClaw with confidence.
- **Healthy contributor ecosystem:** Many fixes now come from the user community (joshavant, vyctorbrzezowski, wangmiao0668000666, Alix-007, hartmark, etc.), indicating an engaged and technically sophisticated user base.

---

## 8. Backlog Watch
Long-standing or stuck items needing maintainer attention:

### Issues
- [Issue #62505](https://github.com/openclaw/openclaw/issues/62505) — Coding Agent regression (since 2026-04-07, 15 comments). **P1, oldest major regression still open.**
- [Issue #47975](https://github.com/openclaw/openclaw/issues/47975) — Subagent sessions persist; main session unresponsive (2026-03-16).
- [Issue #50093](https://github.com/openclaw/openclaw/issues/50093) — WhatsApp backfill after reconnection (2026-03-19).
- [Issue #10687](https://github.com/openclaw/openclaw/issues/10687) — Dynamic model discovery (2026-02-06, 3 👍).
- [Issue #52186](https://github.com/openclaw/openclaw/issues/52186) — ElevenLabs TTS plays OpenAI voice instead (2026-03-22, `not-repro-on-main`).
- [Issue #54463](https://github.com/openclaw/openclaw/issues/54463) — QMD memory indexing symlink loops / ENAMETOOLONG (2026-03-25, `not-repro-on-main`).
- [Issue #44395](https://github.com/openclaw/openclaw/issues/44395) — Heading-aware memory chunking (2026-03-12, 2 👍).
- [Issue #45505](https://github.com/openclaw/openclaw/issues/45505) — Generalize post-timeout compaction reconciliation (2026-03-13).
- [Issue #13219](https://github.com/openclaw/openclaw/issues/13219) — Per-model usage logging (2026-02-10).
- [Issue #17840](https://github.com/openclaw/openclaw/issues/17840) — Reaction-triggered agent turns (2026-02-16).

### PRs waiting on maintainers
- [PR #68236](https://github.com/openclaw/openclaw/pull/68236) — OAuth e2e regression coverage (open since 2026-04-17, `waiting on author`).
- [PR #64064](https://github.com/openclaw/openclaw/pull/64064) — Anthropic advisor tool support (open since 2026-04-10, `needs proof`).
- [PR #81176](https://github.com/openclaw/openclaw/pull/81176) — Context-window-relative compaction budget shares (open since 2026-05-12, `needs proof`).
- [PR #114287](https://github.com/openclaw/openclaw/pull/114287) — Opt-in local publication preflight (open since 2026-07-27, `needs proof`).

---

**Bottom line:** OpenClaw is highly active with a strong contributor community, but the backlog is dominated by reliability issues — memory growth, message loss, channel-specific wedges, and provider quirks. The large number of `no-new-fix-pr` / `needs-maintainer-review` labels suggests the next release should prioritize the in-flight session, memory, and compaction fixes already staged in open PRs.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — AI Agent / Personal AI Assistant Ecosystem
**Data window:** 2026-08-15 (24-hour community digests) · **Coverage:** 12 projects

---

## 1. Ecosystem Overview

The personal AI assistant / agent open-source space remains anchored by OpenClaw as the reference implementation, with a long tail of Claw-family forks (ZeroClaw, CoPaw, PicoClaw, NanoClaw, NullClaw, IronClaw, ZeptoClaw) and independent projects (Hermes Agent, NanoBot, LobsterAI, Moltis) iterating on distinct niches — from low-cost Go runtimes to enterprise automation and research-grade desktop clients. Cross-cutting concerns dominate every tracker: session/memory integrity, provider/model compatibility, and MCP-tool reliability. Most projects are actively merging code daily, but the ecosystem is in a stability-critical phase: memory leaks, silent delivery failures, and Windows portability gaps are the most common severe defects. Notably, only two projects (IronClaw, LobsterAI) shipped releases in this window, indicating a mature subset is emerging alongside a still-hardening majority.

---

## 2. Activity Comparison

*Counts reflect issues/PRs updated (touched) in the last 24h; closed/merged shown in parentheses.*

| Project | Issues updated (closed) | PRs updated (merged/closed) | Release status | Health score (1–10)* |
|---|---|---|---|---|
| OpenClaw | 500 (12) | 500 (96) | None | 7.0 |
| Hermes Agent | 50 (4) | 50 (5) | None | 8.0 |
| CoPaw | 50 (38) | 41 (15) | None | 7.5 |
| ZeroClaw | 33 (3) | 50 (3) | None (v0.8.5 pending Aug 30) | 7.0 |
| IronClaw | 25 (9) | 47 (22) | **v1.2.0 stable** | 8.5 |
| LobsterAI | 2 (0) | 27 (22) | **2026.8.14** | 8.0 |
| NanoBot | 3 (2) | 22 (8) | None | 8.0 |
| PicoClaw | 3 (2) | 9 (5) | None | 6.5 |
| NanoClaw | 2 (0) | 9 (3) | None | 7.0 |
| NullClaw | 0 (0) | 1 (1) | None | 7.5 |
| Moltis | 0 (0) | 1 (0) | None | 5.0 |
| ZeptoClaw | 0 (0) | 0 (0) | None | Dormant |

*\*Health score weighs merge velocity, issue closure rate, release cadence, bug-to-fix turnaround, and severity of open stability defects.*

---

## 3. OpenClaw's Position

- **Community size — unmatched:** 500 issues + 500 PRs updated in 24h is an order of magnitude above every peer (next: CoPaw at 50/41, Hermes at 50/50). 96 PRs merged/closed daily vs. 22 for the next most active project.
- **Contributor ecosystem — strongest in the field:** repeat external contributors (joshavant, vyctorbrzezowski, wangmiao0668000666, Alix-007, hartmark) are self-serve filing issues and pairing them with fix PRs — a level of community ownership no other project approaches.
- **Technical approach — breadth-first monolithic gateway:** widest channel/provider adapter surface in the ecosystem (Telegram, WhatsApp, Matrix, Discord, Slack, Bedrock, DeepSeek, Ollama, Android, and more). It is the de-facto reference architecture for the Claw family and a common integration target.
- **Key vulnerabilities:** maintainer bandwidth is the bottleneck — large shares of active issues carry `needs-maintainer-review` / `needs-product-decision` labels, and the top P0s (gateway memory leak #91588, startup failure #108435, `@`-path data loss #119270) still lack fix PRs. No release shipped despite 96 merges. Peers with smaller scope (NanoBot, IronClaw) demonstrate faster bug-to-fix turnaround, which is OpenClaw's main competitive risk.

---

## 4. Shared Technical Focus Areas

Requirements emerging independently across multiple projects:

1. **Session lifecycle & data integrity** — OpenClaw (transcript cleanup #119085, pruneAfterMs P0, subagent persistence), NanoBot (stale background-task saves, archive-failure mutation), Hermes (delegation lifecycle separation), CoPaw (console stop cancels Feishu session), ZeroClaw (runtime-owned sessions RFC).
2. **Memory architecture as a pluggable service** — OpenClaw (index rebuilds, temporal decay, compaction), IronClaw (pluggable memory over MCP + Mnesis), NullClaw (configurable SQLite memory path), ZeroClaw (silent Qdrant→Markdown routing bug), Moltis (durable calendar/email/channel connectors for long-term context).
3. **Provider/model compatibility & timeout semantics** — OpenClaw (DeepSeek cron prefix deprioritization, Bedrock capability loss), NanoBot (Anthropic idle vs. total timeout — fixed in 24h), CoPaw (MiniMax `/models` failure, OpenAI Responses API incompatibility), LobsterAI (urgent "v4pro" request), Hermes (Xiaomi MiMo tool visibility, xAI TTS), ZeroClaw (Chat Completions profile RFC).
4. **MCP & tool-call reliability** — PicoClaw (MCP failure hangs agent loop), CoPaw (duplicate MCP results, "tool not found" after upgrade), IronClaw (hosted-MCP OAuth), OpenClaw (loopback auto-reconnect), NanoBot (MCP SDK v2 migration).
5. **Windows as a first-class platform** — ZeroClaw (74 CI test failures), NanoBot (`os.replace` crash), NanoClaw (orphan cleanup no-op), CoPaw (cmd.exe window flash, plugin save failure), Hermes (LSP POSIX-shim error).
6. **Chat-channel UX parity** — Telegram/WhatsApp session management (PicoClaw #3307), inline `/model` picker (ZeroClaw), WhatsApp image/group wedges (OpenClaw), Telegram MP4 attachments (IronClaw), new Dial SMS/voice channel (NanoClaw).
7. **Setup robustness & supply-chain trust** — NanoClaw (too-old Node.js, AVX2 SIGILL, live-fire signature-approval tests), OpenClaw (gateway start failure, install-policy acknowledgment), Hermes (unsigned skills-index security PR).

---

## 5. Differentiation Analysis

- **OpenClaw** — General-purpose flagship; maximum breadth of channels/providers; targets power users self-hosting a full personal assistant.
- **Hermes Agent (Nous Research)** — Research-lab lineage; desktop/TUI state reliability plus an aggressive Discord API v10 "Omniscience" feature campaign; targets desktop-first and Discord-centric users.
- **IronClaw (Near AI)** — Production/enterprise angle: structured automation epics, WASM extensions, deterministic suppression, QA bug-bash discipline; the most operationally mature release process (v1.2.0 with RC validation).
- **CoPaw (AgentScope)** — Deep China-ecosystem integration (Feishu, OneBot, DashScope, GGUF local models) and a new DataPaw native-app direction; targets Chinese-market prosumers and agent-framework developers.
- **LobsterAI (NetEase Youdao)** — Team Edition account/quota flows, cowork sessions, artifact panel; targets collaborative teams rather than single-user automation.
- **ZeroClaw** — RFC/ADR-driven governance, security-identity first (pluggable auth, shell command policy); explicitly building an OpenAI-compatible API profile for interop with Open WebUI/LobeChat/Aider; targets operators with policy requirements.
- **NanoBot (HKUDS)** — Python, WebUI-centric, strict-typing culture; best-in-class bug-response speed; targets developers who value maintainability and code quality.
- **PicoClaw (Sipeed)** — Native Go, runs on very low-cost hardware; Chinese-platform work (DingTalk, WeChat, DashScope TTS); targets embedded/hobbyist deployments.
- **NanoClaw** — Installer/setup polish, Dial SMS/voice channel, and supply-chain verification CI; early-stage adoption focus.
- **NullClaw / Moltis / ZeptoClaw** — Minimal/specialized: NullClaw is a lean reference with a clean zero-issue backlog; Moltis concentrates on durable provider-neutral connectors; ZeptoClaw is dormant.

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapid iteration (near-daily merge cadence, large contributor bases):** OpenClaw, CoPaw, ZeroClaw, IronClaw, Hermes. All sustain 24/7 activity, each with a distinct bottleneck: OpenClaw (maintainer review queue), ZeroClaw (RFC decision queue #8692 — 3/50 PRs merged), CoPaw (2.1.0 regression triage despite 38 issues closed), IronClaw (healthy — 22/47 PRs merged plus release shipped), Hermes (organized Discord campaign with PRs advancing in lockstep).

**Tier 2 — Healthy, responsive (moderate volume, fast bug fixes):** NanoBot (new high-severity bug closed via merged PR within 24h), LobsterAI (22/27 PRs merged — highest merge ratio, plus release shipped), PicoClaw, NanoClaw.

**Tier 3 — Low-velocity / stabilizing:** NullClaw (zero open issues/PRs — effectively stable), Moltis (single unreviewed PR, no engagement signal), ZeptoClaw (dormant).

**Maturity markers:** Only IronClaw and LobsterAI shipped releases this window, and both run formal promotion processes (RC validation; large release-branch merges with migration notes). OpenClaw's failure to release despite 96 merges is the largest release-cadence gap in Tier 1.

---

## 7. Trend Signals

1. **Reliability is the moat.** The most-commented issues across projects are memory growth (OpenClaw #91588), silent reply failures (OpenClaw #121058), and false-success outcomes (ZeroClaw #9421). Users reward fast bug-to-fix cycles (NanoBot's 24h Anthropic turnaround) and punish premature issue-closing.
2. **MCP is the universal tool bus — and universal fragility.** Connection hangs (PicoClaw), duplicate tool results (CoPaw), OAuth shape gaps (IronClaw), reconnect failures (OpenClaw), and SDK migrations (NanoBot) all surfaced simultaneously. This is a clear standardization opportunity.
3. **Model-switching is a UX problem, not just a config problem.** Demand is converging on runtime model pickers, per-session overrides, fallback chains, and dynamic model discovery (OpenClaw #10687, ZeroClaw #9895, CoPaw #5992/#2763, PicoClaw #3200). Static model catalogs are becoming a liability.
4. **OpenAI-compatible API surfaces drive ecosystem interop.** ZeroClaw's Chat Completions profile RFC and CoPaw's Responses-API incompatibility both signal consolidation on OpenAI-compatible interfaces to reach tooling like Open WebUI, LobeChat, and Aider.
5. **Memory is moving from vector store to architecture.** Pluggable memory providers (IronClaw), configurable SQLite paths (NullClaw), durable external connectors (Moltis), and memory-subsystem bug fixes (OpenClaw, ZeroClaw) indicate long-term memory is becoming a first-class pluggable service with trust boundaries.
6. **Windows remains the underserved opportunity.** Six-plus Windows-specific defects across five projects in one window (ZeroClaw's 74 failures, NanoBot's `os.replace` crash, CoPaw's cmd flash, Hermes' LSP WinError 193) — a demonstrable competitive gap for any project that prioritizes Windows CI.
7. **Supply-chain security is moving from talk to CI.** NanoClaw ran deliberate live-fire tests of its image-signature approval flow; Hermes has an open security PR to stop unsigned skills-index installs; OpenClaw added install-policy acknowledgments. Distribution hardening is becoming a differentiator.
8. **"Always-on" state persistence is expected.** Zoom resets, session restoration after reconnect, daemon/background modes, and TUI flicker fixes appear across Hermes, CoPaw, OpenClaw, and NanoClaw — users treat agents as infrastructure that must survive UI churn and transient network failures.

**Bottom line for developers and decision-makers:** Build production workloads on projects with healthy decision and release pipelines (IronClaw, NanoBot, LobsterAI); treat OpenClaw as the most complete integration reference while budgeting for self-hosting stability fixes; and if contributing, prioritize memory subsystems, model-switching UX, MCP resilience, and Windows support — demand is demonstrable across at least five concurrent projects.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-15

## 1. Today's Overview

NanoBot logged a highly active 24 hours: **3 issues updated** (1 open, 2 closed) and **22 PRs updated** (14 open, 8 merged/closed), with no new releases. The visible activity is concentrated on WebUI/UX polish, session lifecycle safety, and provider/transport reliability. One newly reported bug — the Anthropic stream idle timeout being mistakenly treated as a total timeout — was already fixed by a closed PR. The project appears healthy and responsive, though several `p0`/`p1` PRs and multiple `conflict`-tagged WebUI PRs indicate merge coordination is becoming a bottleneck.

## 2. Releases

No new releases were published in the last 24 hours. Omitted.

## 3. Project Progress

The dataset records **8 merged/closed PRs**; the visible subset includes six:

- [#5392 fix(anthropic): treat stream idle timeout as inactivity only, not total time](https://github.com/HKUDS/nanobot/pull/5392) — Fixes #5391; prevents `NANOBOT_STREAM_IDLE_TIMEOUT_S` from killing long but active Anthropic generations.
- [#5393 feat(webui): polish sidebar and session transitions](https://github.com/HKUDS/nanobot/pull/5393) — UI-only cleanup split from #5358; improves sidebar hierarchy, tabs, and transition handling.
- [#5395 feat(webui): refine conversation groups and shared shapes](https://github.com/HKUDS/nanobot/pull/5395) — Fully localizes grouping, supports dragging active topics into groups, and standardizes WebUI control styling.
- [#4689 feat(providers): surface OAuth status and expiry warnings](https://github.com/HKUDS/nanobot/pull/4689) — Adds OAuth provider status visibility and proactive token-expiry warnings across CLI/WebUI/runtime.
- [#5018 feat(skills): support explicit context loading](https://github.com/HKUDS/nanobot/pull/5018) — Makes `skill_names` on `ContextBuilder` actually load explicitly requested skills.
- [#5390 Agent/knowledge graph](https://github.com/HKUDS/nanobot/pull/5390) — Closed/merged; no summary available in the data.

Closed issues include [#5391](https://github.com/HKUDS/nanobot/pull/5392) — fixed by #5392 — and [#5378](https://github.com/HKUDS/nanobot/issues/5378), the file-cap archive mutation bug, which was closed without a visible linked PR in this sample.

## 4. Community Hot Topics

Comment/reaction data is limited: among issues, only **#5161** has comments. The most notable active threads and PRs by urgency/longevity:

- [#5161 [OPEN] refactor: narrow file-level Pyright suppressions](https://github.com/HKUDS/nanobot/issues/5161) — 1 comment. The follow-up PR [#5396](https://github.com/HKUDS/nanobot/pull/5396) shows contributor-driven code-quality work: removing blanket suppressions after strict Pyright was enabled.
- [#5271 [OPEN, p0] fix(session): prevent stale background task saves from overwriting session data](https://github.com/HKUDS/nanobot/pull/5271) — A high-priority reliability fix; likely receiving disciplined review.
- [#5179 [OPEN, p1] Migrate MCP integration to SDK v2 with legacy compatibility](https://github.com/HKUDS/nanobot/pull/5179) — Signed by `p1`; complex because it touches SSRF validation, DNS pinning, and transport compatibility.
- [#4329 [OPEN] feat(cli): add native TypeScript terminal UI](https://github.com/HKUDS/nanobot/pull/4329) — Long-running product-direction PR, still open after two months.

Underlying needs: contributors care about code quality (Pyright), data integrity (`p0` session race), infrastructure modernization (MCP v2), and a richer cross-platform terminal client.

## 5. Bugs & Stability

Ranked by severity:

1. **High — Anthropic streaming total timeout**  
   [#5391 [bug] NANOBOT_STREAM_IDLE_TIMEOUT_S acts as total timeout](https://github.com/HKUDS/nanobot/issues/5391)  
   Long but active Anthropic generations could be killed after 90s on the no-callback stream path.  
   **Fix exists:** [#5392](https://github.com/HKUDS/nanobot/pull/5392) is already closed/merged.

2. **High — Session mutation before persistence on archive failure**  
   [#5378 [bug] file-cap archive failure mutates the session before persistence](https://github.com/HKUDS/nanobot/issues/5378)  
   A raising archive callback leaves the in-memory session with lost overflow, even though the save failed. Issue is closed, though no visible fix PR was in the top-20 sample.

3. **Open `p0` fix — stale background task saves**  
   [#5271 [OPEN, p0] fix(session): prevent stale background task saves from overwriting session data](https://github.com/HKUDS/nanobot/pull/5271)  
   Prevents `/new` or lifecycle replacements from being overwritten by a stale compactor/save.

4. **Medium — Windows `os.replace()` crash**  
   [#5382 [OPEN, p2] fix(session): retry os.replace() on transient Windows PermissionError](https://github.com/HKUDS/nanobot/pull/5382)  
   Reported as a gateway crash during heartbeat saves; fix proposes retry logic.

5. **Regression — subagent partial completion**  
   [#5152 [OPEN] fix(subagent): mark partial completion results](https://github.com/HKUDS/nanobot/pull/5152)  
   Prevents the model from inferring unfinished sibling-task results as complete.

## 6. Feature Requests & Roadmap Signals

There were no new feature-request issues in this window; all feature momentum is in PRs. The strongest roadmap signals:

- **WebUI collaboration**: [#5358 session collaboration via mentions](https://github.com/HKUDS/nanobot/pull/5358)
- **WebUI drag-and-drop organization**: [#5389 drag-and-drop session organization](https://github.com/HKUDS/nanobot/pull/5389)
- **WebUI setup flow improvements**: [#5356 improve setup flows across chat channels](https://github.com/HKUDS/nanobot/pull/5356)
- **Localization**: [#5367 localize agent activity](https://github.com/HKUDS/nanobot/pull/5367)
- **Visual experience**: [#5340 interactive particle hero background](https://github.com/HKUDS/nanobot/pull/5340)
- **CLI future**: [#4329 native TypeScript terminal UI](https://github.com/HKUDS/nanobot/pull/4329)
- **Skills ecosystem**: [#5309 allow marketplace skills to shadow builtins](https://github.com/HKUDS/nanobot/pull/5309)

Likely next-version features include the recently closed WebUI polish work (#5393, #5395), plus MCP SDK v2 (#5179) and session save safety (#5271) if their reviews finish. The TypeScript terminal UI remains a larger strategic bet that is still open.

## 7. User Feedback Summary

Real pain points visible in the data:

- Anthropic users hit arbitrary total timeouts on long generations, even during active streaming — fixed quickly.
- Session archive failures could cause silent data loss/state mutation — a serious trust issue for persistence-heavy usage.
- Windows users experienced crashes from transient `os.replace()` `PermissionError` during heartbeat saves.
- Skills users could not override built-in skills through the Marketplace, making customization/install flows misleading.
- Contributors want stricter type checking without suppressing whole files, indicating a maturing codebase.

Overall, NanoBot's maintainers are responding fast to bug reports: the one new bug with high impact was closed within a day via #5392. No negative broader sentiment was visible in the sampled data.

## 8. Backlog Watch

Potentially sticky items needing maintainer attention:

- [#4145 [OPEN] Weather Skill](https://github.com/HKUDS/nanobot/pull/4145) — Oldest open PR in the sample (June 1); still awaiting review/merge decision.
- [#4329 [OPEN] Native TypeScript terminal UI](https://github.com/HKUDS/nanobot/pull/4329) — Large enhancement open since June 13; needs product/architecture sign-off.
- [#5152 [OPEN] Subagent partial completion fix](https://github.com/HKUDS/nanobot/pull/5152) — Open since July 28; regression fix with test coverage.
- [#5179 [OPEN, p1] MCP SDK v2 migration](https://github.com/HKUDS/nanobot/pull/5179) — Open since July 30; critical dependency modernization with security-sensitive transport changes.
- [#5271 [OPEN, p0] Stale session save fix](https://github.com/HKUDS/nanobot/pull/5271) — Highest-severity open fix; should be prioritized for merge.
- [#5309 [OPEN, p2] Marketplace skills shadow builtins](https://github.com/HKUDS/nanobot/pull/5309) — Important for the skills ecosystem but not emergency-level.

No issues currently appear abandoned, and `#5161` has a matching PR (#5396), which is a good sign for contributor-maintainer velocity.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-15

## 1. Today's Overview

Hermes Agent is in a high-activity period: 50 issues and 50 PRs were updated in the last 24 hours, with the vast majority still open (46 issues / 45 PRs) and a small number closed or merged (4 issues / 5 PRs). No new release was published today. The dominant theme is the **Discord API v10 “Omniscience” feature campaign** (#79564), with a steady stream of new-module-only PRs and matching feature issues. At the same time, the project shows healthy bug-response velocity: contributors are pairing reported issues with fix PRs, including Windows LSP resolution, browser subprocess environment leaks, TUI flakiness, and Kanban delivery behavior.

## 2. Releases

**None.** No new Hermes Agent release was cut on 2026-08-15.

## 3. Project Progress

Merged/closed PRs visible in today’s data:

- [#86427](https://github.com/NousResearch/hermes-agent/pull/86427) — `fix(tests): reap leaked TUI notification pollers between tests` — Closed. Fixes CI flakiness in `test_run_prompt_submit_requeues_all_unstarted_notifications_with_real_threading`.

Other closed items in the issue tracker include:

- [#59591](https://github.com/NousResearch/hermes-agent/issues/59591) — Dashboard resumed session transcript appears incomplete until theme change forces refresh.
- [#66490](https://github.com/NousResearch/hermes-agent/issues/66490) — TUI enables DEC 2026 synchronized output inside Zellij, causing repeated/scrolling frames.
- [#41480](https://github.com/NousResearch/hermes-agent/issues/41480) — TUI status bar flickers heavily during streaming on iTerm2.
- [#82713](https://github.com/NousResearch/hermes-agent/issues/82713) — Desktop UI zoom silently drops to 100% when launching/exiting another Electron app on macOS.

The remaining 4 merged/closed PRs are not fully enumerated in the top-20 sample, but open feature/fix PRs advanced significantly today, especially the **Discord Omniscience** set:

- [#86449](https://github.com/NousResearch/hermes-agent/pull/86449) — Message edit/delete REST actions (M2)
- [#86451](https://github.com/NousResearch/hermes-agent/pull/86451) — Read-only poll projection (M5)
- [#86454](https://github.com/NousResearch/hermes-agent/pull/86454) — Thread lifecycle REST actions (T1)
- [#86458](https://github.com/NousResearch/hermes-agent/pull/86458) — Forum starter/tag REST actions (T3)
- [#86460](https://github.com/NousResearch/hermes-agent/pull/86460) — Channel/category CRUD REST actions (A1)
- [#86462](https://github.com/NousResearch/hermes-agent/pull/86462) — Role CRUD + assignment REST actions (A3)
- [#86466](https://github.com/NousResearch/hermes-agent/pull/86466) — Guild scheduled-event REST actions (A6)
- [#86468](https://github.com/NousResearch/hermes-agent/pull/86468) — Route-aware rate-limit contract (R1)

Also active:

- [#86434](https://github.com/NousResearch/hermes-agent/pull/86434) — Fixes `/context` to use the live session rather than a fresh isolated worker.
- [#86455](https://github.com/NousResearch/hermes-agent/pull/86455) — Makes Kanban home delivery profile-safe.
- [#86371](https://github.com/NousResearch/hermes-agent/pull/86371) — Strips `PYTHONPATH`/`PYTHONHOME` from browser-use CLI subprocess env.
- [#86374](https://github.com/NousResearch/hermes-agent/pull/86374) — Prepends Hermes tool dirs to `slash_worker` PATH.
- [#86368](https://github.com/NousResearch/hermes-agent/pull/86368) — Fixes xAI streaming TTS WebSocket protocol + websockets 15 compatibility.
- [#86456](https://github.com/NousResearch/hermes-agent/pull/86456) — Windows LSP server resolution fix for #86445.

## 4. Community Hot Topics

Most active issue by comment count:

- [#79564](https://github.com/NousResearch/hermes-agent/issues/79564) — **Discord Feature Parity & Alignment Campaign (API v10)** — Meta-issue with 4 comments, last updated 2026-08-14. This is the coordination point for the Discord Omniscience campaign. It is not simply a user request: it is a structured roadmap of sub-issues and PRs covering messages, polls, threads, forums, channels, roles, moderation, rate limits, pagination, and reliability telemetry.

Also receiving attention:

- [#8751](https://github.com/NousResearch/hermes-agent/issues/8751) — `PermissionError when walking parent directories for .git root` — 3 comments, P2, open since April 2026. Still active.
- [#59591](https://github.com/NousResearch/hermes-agent/issues/59591) — Dashboard resumed-session transcript incomplete until refresh — 3 comments, now closed.
- [#73722](https://github.com/NousResearch/hermes-agent/issues/73722) — Desktop boot fails on transient gateway connect failures — 2 comments, P2, Windows.
- [#73495](https://github.com/NousResearch/hermes-agent/issues/73495) — Desktop Cloud cold start can hide agents until Portal re-login — 2 comments, P3.
- [#84274](https://github.com/NousResearch/hermes-agent/issues/84274) — Desktop UI zoom resets after RDP session reconnect — 2 comments.
- [#82713](https://github.com/NousResearch/hermes-agent/issues/82713) — macOS UI zoom silently drops when another Electron app launches/exits — 2 comments, closed.
- [#66490](https://github.com/NousResearch/hermes-agent/issues/66490) — TUI DEC 2026/Zellij repeated frames — 2 comments, closed.
- [#41480](https://github.com/NousResearch/hermes-agent/issues/41480) — TUI status bar flicker on iTerm2 — 2 comments, closed.

Underlying needs: users are pushing on **desktop reliability** (session restoration, zoom persistence, cloud reconnect), **terminal/TUI compatibility** (Zellij, iTerm2), and **Discord platform completeness**. The high volume of child issues in #79564 suggests organized Discord feature work is a near-term release priority.

## 5. Bugs & Stability

Ranked by severity and user impact:

1. **macOS Screen Recording permission loop after update** — [#86385](https://github.com/NousResearch/hermes-agent/issues/86385) (P2). Users who previously granted Screen Recording are stuck in a prompt loop with a stale TCC grant. No fix PR visible in today's data.
2. **`terminal.cwd` re-pins working directory mid-turn** — [#86411](https://github.com/NousResearch/hermes-agent/issues/86411) (P2). Explicit `terminal.cwd` overrides the launch directory after startup on local backend. No fix PR visible.
3. **Desktop boot fails fatally on transient gateway connection failures** — [#73722](https://github.com/NousResearch/hermes-agent/issues/73722) (P2, Windows). Boot path never retries; transient token-refresh failure is misreported as "session has expired". Still open.
4. **PermissionError when walking parent directories** — [#8751](https://github.com/NousResearch/hermes-agent/issues/8751) (P2, core agent). Affects `agent/prompt_builder.py` and has been open since April 2026.
5. **Windows LSP server resolution picks POSIX shim and fails with WinError 193** — [#86445](https://github.com/NousResearch/hermes-agent/issues/86445) (P3). Fix PR exists: [#86456](https://github.com/NousResearch/hermes-agent/pull/86456).
6. **Tool calling broken for Xiaomi MiMo v2.5 Pro** — [#86403](https://github.com/NousResearch/hermes-agent/issues/86403) (P3, needs-repro). Enabled tools are not exposed to the model.
7. **Recurring background MCP discovery WARNING with no MCP servers** — [#86452](https://github.com/NousResearch/hermes-agent/issues/86452) (P3, duplicate).
8. **Kanban runtime `TERMINAL_CWD` misreported as deprecated .env setting** — [#86393](https://github.com/NousResearch/hermes-agent/issues/86393) (P3, duplicate).

Additional stability fixes in progress:

- [#86371](https://github.com/NousResearch/hermes-agent/pull/86371) — browser-use CLI subprocess crash caused by `PYTHONPATH`/`PYTHONHOME`.
- [#86374](https://github.com/NousResearch/hermes-agent/pull/86374) — `slash_worker` cannot resolve Hermes-managed CLIs under Desktop.
- [#86368](https://github.com/NousResearch/hermes-agent/pull/86368) — xAI streaming TTS silent failure.
- [#86455](https://github.com/NousResearch/hermes-agent/pull/86455) — Kanban notification route safety.

## 6. Feature Requests & Roadmap Signals

The clearest roadmap signal is the **Discord Omniscience campaign** ([#79564](https://github.com/NousResearch/hermes-agent/issues/79564)). Its sub-issues describe a broad expansion of Discord REST v10 coverage:

- [#86448](https://github.com/NousResearch/hermes-agent/issues/86448) — Message edit/delete
- [#86450](https://github.com/NousResearch/hermes-agent/issues/86450) — Read-only poll projection
- [#86453](https://github.com/NousResearch/hermes-agent/issues/86453) — Thread lifecycle
- [#86457](https://github.com/NousResearch/hermes-agent/issues/86457) — Forum starter/tag actions
- [#86459](https://github.com/NousResearch/hermes-agent/issues/86459) — Channel/category CRUD
- [#86461](https://github.com/NousResearch/hermes-agent/issues/86461) — Role CRUD + membership assignment
- [#86463](https://github.com/NousResearch/hermes-agent/issues/86463) — Moderation actions
- [#86465](https://github.com/NousResearch/hermes-agent/issues/86465) — Scheduled events
- [#86467](https://github.com/NousResearch/hermes-agent/issues/86467) — Route-aware rate-limit contract
- [#86436](https://github.com/NousResearch/hermes-agent/issues/86436) — REST pagination conformance
- [#86439](https://github.com/NousResearch/hermes-agent/issues/86439) — Structured inbound message model
- [#86441](https://github.com/NousResearch/hermes-agent/issues/86441) — Local reliability telemetry
- [#86428](https://github.com/NousResearch/hermes-agent/issues/86428) — Permission-overwrite REST actions
- [#86418](https://github.com/NousResearch/hermes-agent/issues/86418) — Outbound reaction actions
- [#86431](https://github.com/NousResearch/hermes-agent/issues/86431) — Scalar guild-settings REST action

Most of these already have associated PRs with passing test suites, so a **Discord-focused minor release** is likely in the near term.

A separate roadmap signal is [#85631](https://github.com/NousResearch/hermes-agent/pull/85631) — **Freemaxxing: optional no-auth multi-provider failover pool**, which would add a local OpenAI-compatible proxy provider for multi-provider failover without authentication.

## 7. User Feedback Summary

User-reported pain points in the last 24 hours show two recurring themes: **desktop/UI state reliability** and **environment/tooling edge cases**.

- Desktop users report session/zoom persistence problems: Cloud cold start hiding agents ([#73495](https://github.com/NousResearch/hermes-agent/issues/73495)), RDP zoom reset ([#84274](https://github.com/NousResearch/hermes-agent/issues/84274)), and macOS zoom reset when other Electron apps run ([#82713](https://github.com/NousResearch/hermes-agent/issues/82713)).
- Permission/auth issues are causing real friction: macOS Screen Recording prompt loop ([#86385](https://github.com/NousResearch/hermes-agent/issues/86385)) and `PermissionError` while walking directories ([#8751](https://github.com/NousResearch/hermes-agent/issues/8751)).
- TUI users benefit from quick closure of long-standing annoyances: Zellij scrolling and iTerm2 status-bar flicker were both closed today.
- Config/runtime mismatches are confusing users: `terminal.cwd` overriding launch directory ([#86411](https://github.com/NousResearch/hermes-agent/issues/86411)) and `TERMINAL_CWD` being mislabeled deprecated ([#86393](https://github.com/NousResearch/hermes-agent/issues/86393)).
- Provider-specific integration issues remain: Xiaomi MiMo v2.5 Pro tool visibility ([#86403](https://github.com/NousResearch/hermes-agent/issues/86403)) and xAI TTS voice not speaking back (fix in [#86368](https://github.com/NousResearch/hermes-agent/pull/86368)).

Satisfaction signals: the project is responding quickly with targeted fix PRs, duplicate detection, and test-only cleanup, which indicates an actively maintained and responsive contributor ecosystem.

## 8. Backlog Watch

- [#8751](https://github.com/NousResearch/hermes-agent/issues/8751) — **PermissionError when walking parent directories** — P2, open since April 2026. This is the oldest high-severity issue in today's active set and still lacks a mergeable fix.
- [#71723](https://github.com/NousResearch/hermes-agent/pull/71723) — **Stop unsigned skills-index from installing dangerous skills as builtin** — Open since July 26, tagged `needs-decision` and `security`. Important security-boundary PR that needs maintainer attention.
- [#68499](https://github.com/NousResearch/hermes-agent/pull/68499) — **Separate delegation lifecycle from task outcome** — Open since July 21, P2, broad blast radius across gateway, TUI, Desktop. Still in review.
- [#76650](https://github.com/NousResearch/hermes-agent/pull/76650) — **Recover flattened deferred-tool arguments** — Open since August 2, P2, affects Gemini/Copilot-style tool calls.
- [#77050](https://github.com/NousResearch/hermes-agent/pull/77050) — **Expose remote-readable artifact paths for delegation** — Open since August 2, P2, Docker/backend integration.
- [#73722](https://github.com/NousResearch/hermes-agent/issues/73722) — **Desktop boot fails on transient gateway connect failures** — P2 Windows issue open since July 29; the failure mode is user-facing and deserves a fix.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

## 1. Today's Overview

In the 24-hour window ending 2026-08-15, PicoClaw had moderate activity: 3 issues were updated (1 still open, 2 closed) and 9 PRs were updated (4 open, 5 closed/merged), with no new releases. The most significant item is the open MCP connection-failure hang bug ([#3269](https://sipeed/picoclaw%20Issue%20#3269)) and the appearance of a dedicated fix PR ([#3337](https://sipeed/picoclaw%20PR%20#3337)). Many of the closed items carry `[stale]` labels, suggesting automated cleanup is partly responsible for the high “closed” count, while the open PRs include substantial work on DeltaChat, exec tool behavior, and model fallback chains. Overall project health appears stable: community contributions are flowing, and a critical reliability issue has attracted a direct fix attempt.

## 2. Releases

No new releases were published in the last 24 hours. The latest-release list is empty, so there are no changelog entries, breaking changes, or migration notes to report.

## 3. Project Progress

Five PRs moved to closed status in the window, though all carry `[stale]` labels, so closure may be bot-driven cleanup rather than confirmed merges:

- [#3303](https://sipeed/picoclaw%20PR%20#3303) — `build(deps): bump actions/stale from 10 to 11`  
  Maintenance bump for the GitHub stale-action dependency.

- [#3283](https://sipeed/picoclaw%20PR%20#3283) — `fix(dingtalk): support picture/image message inbound`  
  Adds image-message handling for DingTalk with token caching and graceful degradation.

- [#3279](https://sipeed/picoclaw%20PR%20#3279) — `fix(seahorse): prevent tool-call format leakage into LLM summaries`  
  Fixes a bug where raw tool-call formatting was leaking into user-facing LLM summaries via `partsToReadableContent`.

- [#3271](https://sipeed/picoclaw%20PR%20#3271) — `chore(providers): update default model names to 2026-07 latest`  
  Refreshes default/common model lists across 9 providers, including OpenAI’s newer `gpt-5.6` variants.

- [#3270](https://sipeed/picoclaw%20PR%20#3270) — `feat: add DashScope TTS provider and WeChat audio file sending`  
  Adds a new DashScope/Bailian TTS provider and WeChat outbound audio support.

Still-open PRs represent ongoing work:

- [#3337](https://sipeed/picoclaw%20PR%20#3337) — Fix for MCP failure hanging the agent loop.
- [#3319](https://sipeed/picoclaw%20PR%20#3319) — Honor exec tool timeout and boolean options.
- [#3222](https://sipeed/picoclaw%20PR%20#3222) — DeltaChat cleanup and docs, −200 LOC.
- [#3200](https://sipeed/picoclaw%20PR%20#3200) — Configurable default model fallback chain.

## 4. Community Hot Topics

The most active discussion is on the open MCP hang bug:

- [#3269](https://sipeed/picoclaw%20Issue%20#3269) — `[BUG] If the MCP server connection fails, the agent loop will hang`  
  5 comments, 1 👍. This is the clear community hotspot: an external dependency failure should not freeze the chat interface. The underlying need is resilience and observable failure handling in the agent loop. A fix PR ([#3337](https://sipeed/picoclaw%20PR%20#3337)) already exists.

Two closed-stale issues also drew attention:

- [#3308](https://sipeed/picoclaw%20Issue%20#3308) — `[Code Review] Concurrency hazards, goroutine leaks, and memory/speed optimizations`  
  2 comments. Includes constructive review of SeaHorse, Channel Manager, and Hooks. Even though auto-closed, the concerns about concurrency safety remain relevant.

- [#3307](https://sipeed/picoclaw%20Issue%20#3307) — `Feature: session list/switch command for Telegram (and other chat channels)`  
  2 comments. Users want the Web UI’s session-management capabilities in Telegram and other non-Web channels.

## 5. Bugs & Stability

Active/recently touched bugs, ranked by severity:

- **High — MCP failure hangs the agent loop**  
  [#3269](https://sipeed/picoclaw%20Issue%20#3269): if an MCP server connection fails, `AgentLoop.Run` propagates the error and the chat interface stops replying. A fix is already proposed in [#3337](https://sipeed/picoclaw%20PR%20#3337).

- **Medium — exec tool ignores per-run timeout and misdeclares options**  
  [#3319](https://sipeed/picoclaw%20PR%20#3319): the `exec` tool advertises a `timeout` argument but synchronously uses the global timeout; `background` and `pty` are also declared as strings instead of booleans. The fix is open but unreviewed.

- **Medium — tool-call format leaking into LLM summaries via SeaHorse**  
  [#3279](https://sipeed/picoclaw%20PR%20#3279): `partsToReadableContent` caused raw tool-call formatting to leak into user messages. A fix PR exists but is currently closed/stale.

- **Watch item — concurrency and goroutine-leak review**  
  [#3308](https://sipeed/picoclaw%20Issue%20#3308): raised concerns about concurrency hazards, goroutine leaks, and memory/speed bottlenecks in SeaHorse, Channel Manager, and Hooks. No dedicated fix PR is visible, and the issue was auto-closed.

## 6. Feature Requests & Roadmap Signals

There is no formal roadmap in the data, but several signals point to likely next-version work:

- **Multi-channel session management**  
  [#3307](https://sipeed/picoclaw%20Issue%20#3307) requests Telegram session listing/switching, matching Web UI behavior. This is a common parity gap for chat-channel backends.

- **MCP/agent-loop resilience**  
  [#3269](https://sipeed/picoclaw%20Issue%20#3269) and [#3337](https://sipeed/picoclaw%20PR%20#3337) strongly suggest MCP failure handling will land soon.

- **Model fallback chain**  
  [#3200](https://sipeed/picoclaw%20PR%20#3200) adds configurable default fallback models through the Web UI and backend. It has been open since early July and is still relevant.

- **Deeper Chinese-platform integration**  
  [#3270](https://sipeed/picoclaw%20PR%20#3270) and [#3283](https://sipeed/picoclaw%20PR%20#3283) show active work on DashScope TTS, WeChat audio, and DingTalk images. These may become part of the next release if not already merged.

- **DeltaChat cleanup**  
  [#3222](https://sipeed/picoclaw%20PR%20#3222) is a non-trivial refactor that removes legacy features, simplifies invite links, and improves docs.

Prediction: the highest-probability next-version items are the MCP hang fix and the exec timeout/boolean-options fix. The fallback-chain model feature is also a strong candidate if maintainers review it soon.

## 7. User Feedback Summary

Users are engaged with PicoClaw’s positioning as a native Go AI assistant running on very low-cost hardware, and contributors are actively improving platform coverage rather than just fixing small bugs. The main pain points are reliability-related: MCP dependency failures can completely break the chat experience, and the exec tool silently ignores per-run settings. Chat-channel users are dissatisfied with the feature gap between the Web UI and Telegram/other channels, especially around session management. Chinese-ecosystem contributors are pushing meaningful integration work for DingTalk, WeChat, and DashScope, reflecting real usage in that region. The tone of the code-review issue ([#3308](https://sipeed/picoclaw%20Issue%20#3308)) is supportive but warns about internal code quality: concurrency hazards, goroutine leaks, and optimization opportunities.

## 8. Backlog Watch

Items that may need maintainer attention:

- [#3269](https://sipeed/picoclaw%20Issue%20#3269) — open since 2026-07-20, critical MCP hang bug. The fix PR [#3337](https://sipeed/picoclaw%20PR%20#3337) needs review/merge.

- [#3200](https://sipeed/picoclaw%20PR%20#3200) — open since 2026-07-01, configurable default fallback chain. No comments visible, still open and `stale`.

- [#3222](https://sipeed/picoclaw%20PR%20#3222) — open since 2026-07-03, DeltaChat cleanup/refactor. No maintainer discussion visible.

- [#3319](https://sipeed/picoclaw%20PR%20#3319) — open since 2026-08-07, exec tool timeout/boolean fix. Meaningful bug fix, still open and unreviewed.

- [#3308](https://sipeed/picoclaw%20Issue%20#3308) and [#3307](https://sipeed/picoclaw%20Issue%20#3307) were auto-closed as stale, but their underlying topics—concurrency safety and channel session management—remain relevant and may need reopening or follow-up PRs.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-15

## Today's Overview

NanoClaw saw moderate-to-high activity in the last 24 hours: 2 open issues were updated, 9 PRs were touched (6 open, 3 closed), and no new releases were published. The busiest areas were setup/installer robustness, channel feature work, container/scheduling fixes, and internal supply-chain verification testing. The core team ran deliberate “live-fire” tests of the image signature approval flow, while community contributors filed and fixed real setup pain points. Overall, the project looks healthy and responsive, though the absence of a release means these fixes are still waiting to reach users.

## Releases

No new releases were published in this window. No changelog, breaking-change, or migration notes are available for 2026-08-15.

## Project Progress

No user-facing feature PRs were merged today. The 3 closed PRs were internal supply-chain/verification items:

- [#3243](https://github.com/nanocoai/nanoclaw/pull/3243) — **verify-agent-image: arming auto-merge is not a verdict**  
  Closed. This fixes the verification job so that the final “enable auto-merge” step no longer determines whether image verification passed. It addresses false failure signals on draft PRs and transient API errors.
- [#3242](https://github.com/nanocoai/nanoclaw/pull/3242) — **DO NOT MERGE — live-fire test of the signature approver**  
  Closed as intended, unmerged. Used to exercise: verify → approve-agent-image → independent cosign verify → approving review.
- [#3244](https://github.com/nanocoai/nanoclaw/pull/3244) — **DO NOT MERGE — live-fire the signature approver (take 2)**  
  Closed as intended, unmerged. Follow-up test after #3243 was in place.

Open PRs advanced in the background, including:

- [#3249](https://github.com/nanocoai/nanoclaw/pull/3249) — fix(setup): handle an existing Node.js that is too old
- [#3247](https://github.com/nanocoai/nanoclaw/pull/3247) — fix(scheduling): retire malformed cron strings instead of re-erroring
- [#3246](https://github.com/nanocoai/nanoclaw/pull/3246) — fix(container-runtime): stop orphan cleanup from silently no-oping on Windows
- [#3230](https://github.com/nanocoai/nanoclaw/pull/3230) — fix(skills): stop removal docs pointing at the retired data/env mirror
- [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) / [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) — Dial channel adapter and setup-wizard integration

## Community Hot Topics

No issues or PRs had recorded comments/reactions in the provided data, so “hot topics” here are based on update activity and substance:

- [#3248](https://github.com/nanocoai/nanoclaw/issues/3248) — **setup.sh cannot handle an existing but too-old Node.js**  
  The reporter also submitted a fix PR ([#3249](https://github.com/nanocoai/nanoclaw/pull/3249)), showing a contributor self-serve pattern. Underlying need: smoother setup for users with legacy Node environments.
- [#3245](https://github.com/nanocoai/nanoclaw/issues/3245) — **Prebuilt agent image requires AVX2, causing SIGILL on older CPUs**  
  Raised by a user on Intel Atom/Tremont-class hardware. Underlying need: baseline x64 compatibility for the default hardened image.
- [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) / [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) — **Dial channel support (SMS + AI voice calls)**  
  Two related PRs have been open since mid-July and were both updated again. This is the clearest roadmap signal for a new channel integration.

## Bugs & Stability

Ranked by likely severity for affected users:

1. **[#3245](https://github.com/nanocoai/nanoclaw/issues/3245) — Bun binary requires AVX2; SIGILL on CPUs without it**  
   High impact for affected hardware (e.g. Celeron J6413/N5105, Intel Elkhart Lake/Tremont Atoms). The default setup image, as recommended by the wizard, crashes at runtime. **No fix PR is open yet.**

2. **[#3248](https://github.com/nanocoai/nanoclaw/issues/3248) — setup.sh mishandles an existing Node.js that is too old**  
   Medium-high impact for users who already have Node.js installed but below the required major version. `install-node.sh` short-circuits when any Node exists, so the “too old” path never installs a working version. **Fix PR [#3249](https://github.com/nanocoai/nanoclaw/pull/3249) is open.**

3. **[#3247](https://github.com/nanocoai/nanoclaw/pull/3247) — Malformed cron strings re-error every sweep tick**  
   Lower severity but annoying: invalid user/agent-written cron values are logged repeatedly instead of being retired. Fix PR is open.

4. **[#3246](https://github.com/nanocoai/nanoclaw/pull/3246) — Orphan cleanup silently no-ops on Windows**  
   The fix PR is open and addresses a silent failure mode caused by POSIX quoting in `execSync` arguments.

No regressions or new security bugs were reported in this window.

## Feature Requests & Roadmap Signals

- **Dial channel integration** is the strongest near-term feature signal.  
  [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) adds the Dial adapter for SMS and AI voice calls, while [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) wires it into the setup channel picker and wizard skills. Both are still open and were updated on 2026-08-14; they are plausible candidates for the next release if maintainers move them forward.
- **No new feature-request issues** were filed in the last 24 hours.
- Internal roadmap work around **image verification and supply-chain trust** remains active, as shown by #3242/#3243/#3244.

## User Feedback Summary

Real user pain points visible in this window:

- Setup friction for users with an existing but outdated Node.js installation ([#3248](https://github.com/nanocoai/nanoclaw/issues/3248)).
- Hardware compatibility concerns: the default prebuilt image does not run on non-AVX2 x86_64 CPUs ([#3245](https://github.com/nanocoai/nanoclaw/issues/3245)).
- Windows users may see silent no-op behavior in container orphan cleanup ([#3246](https://github.com/nanocoai/nanoclaw/pull/3246)).
- Agent-generated malformed cron strings can cause repeated scheduler errors ([#3247](https://github.com/nanocoai/nanoclaw/pull/3247)).

There is no explicit satisfaction/dissatisfaction commentary in the data. The quick issue-to-fix-PR pattern from contributors suggests an engaged user base, but also that early-adopter setup and cross-platform compatibility still need polish.

## Backlog Watch

- [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) and [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) — **Dial channel feature PRs**  
  Open since 2026-07-14 and still not merged after more than a month. These need a maintainer review/decision, especially if they are intended for the next release.
- [#3230](https://github.com/nanocoai/nanoclaw/pull/3230) — **Docs fix for skills removal instructions**  
  Open since 2026-08-12; small but useful documentation fix that should be low-cost to merge.
- No issue older than 24 hours appeared in the backlog watch window; the two open issues (#3245, #3248) were filed on 2026-08-14 and already have maintainer/community attention.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-15

## Today's Overview
NullClaw saw minimal but healthy activity over the last 24 hours: no issues were updated, no new releases were published, and one pull request was closed/merged. The sole PR (#986) addresses a configuration improvement for SQLite-backed memory storage, suggesting ongoing refinement work rather than major feature expansion. With zero open issues and zero open PRs, the project currently has a clean backlog. Overall project health appears stable, with maintainers actively processing small, targeted improvements.

## Releases
No new releases were published during this period.

## Project Progress
- **#986 [CLOSED] GEN-548: make SQLite memory database path configurable**  
  [PR #986](https://github.com/nullclaw/nullclaw/pull/986)  
  This merged/closed PR adds a `memory.database_path` setting for SQLite-backed primary memory engines. Key changes include:
  - Preserves the existing default location (`<workspace>/memory.db`) when the new setting is empty.
  - Resolves relative paths from the workspace directory.
  - Accepts absolute paths, enabling support for read-only workspace deployments.
  - Includes documentation for the new setting.

## Community Hot Topics
No active issues or PRs generated comments or reactions in the last 24 hours. The only activity was PR #986, which was closed without recorded discussion. The underlying need behind this PR is clear: deployments with read-only workspaces require flexibility in placing SQLite database files outside the workspace.

## Bugs & Stability
No bugs, crashes, or regressions were reported during this period. PR #986 is a configuration enhancement, not a bug fix, so no stability impact is noted.

## Feature Requests & Roadmap Signals
The main roadmap signal comes from PR #986 / ticket GEN-548: making the SQLite memory database path configurable. This indicates a move toward more flexible deployment configurations, especially for environments with immutable or read-only filesystems. Given this PR has already been closed/merged, the feature is likely to appear in the next release. Future related improvements could include more configurable storage engines or environment-variable support for path settings.

## User Feedback Summary
No direct user comments or reactions were captured in the last 24 hours. The merged PR itself addresses a real deployment pain point: users with read-only workspace deployments need to redirect SQLite storage to an absolute path. The quick merge suggests maintainers value this feedback and are acting on it.

## Backlog Watch
There are currently no open issues or open PRs requiring maintainer attention. The backlog is effectively clear, and no long-unanswered items were observed.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-15

## Today's Overview

IronClaw is in a high-activity period: in the last 24 hours, 25 issues were updated (16 open, 9 closed) and 47 PRs were updated (25 open, 22 merged/closed). The release line is stable with `ironclaw-v1.2.0` promoted from `1.2.0-rc.3`, while the project’s main focus is clearly on v1.3.0 reliability features: structured automation execution, deterministic suppression, pluggable memory, and the “unbound-turns” architecture train. Multiple QA bugs from the 08/14 bug-bash were fixed or addressed, but several P2 issues remain open, including a potential cross-user extension visibility problem. Overall, the project is shipping steadily with a healthy ratio of merged work, though automation reliability and a few data-isolation/attachment bugs need continued attention.

## Releases

- **ironclaw-v1.2.0** (`1.2.0`, published 2026-08-13)

The latest release is the stable promotion of `1.2.0-rc.3`, including fixes validated in RC2/RC3 and the complete RC1 feature set. The only explicitly called-out fix in the release notes is:

- The runtime container image now installs `curl`, so in-container HTTP healthchecks can execute. Orchestrators probe the worker with the resulting healthcheck.

No explicit breaking changes or migration notes are visible in the provided release-notes excerpt. The related merge PR [nearai/ironclaw PR #7657](https://github.com/nearai/ironclaw/pull/7657) forward-ported the 1.2.0 release line back into `main`, including state-preserving 1.0/1.1→1.2 startup migrations and Windows filesystem/smoke fixes.

## Project Progress

The following PRs were merged/closed in the last 24 hours and represent the main completed work:

- [nearai/ironclaw PR #7657](https://github.com/nearai/ironclaw/pull/7657) — **chore: merge the 1.2.0 release line back into main**. Brought in the validated `release/2026-08-11` line, startup migrations, release artifact canaries, and Windows reliability fixes.
- [nearai/ironclaw PR #7658](https://github.com/nearai/ironclaw/pull/7658) — **fix(telegram): recognize the 2FA gate on migrated DCs and say where login codes arrive**. Addresses early linked-device QA defects.
- [nearai/ironclaw PR #7668](https://github.com/nearai/ironclaw/pull/7668) — **fix(extensions): surface provider auth diagnostics**. Preserves bounded GitHub provider error messages/codes through the WASM/ABI/runtime paths.
- [nearai/ironclaw PR #7666](https://github.com/nearai/ironclaw/pull/7666) — **fix(extensions): tell the truth on cards and install results**. Directly addresses Slack connection-status confusion from QA issue #7660.
- [nearai/ironclaw PR #7665](https://github.com/nearai/ironclaw/pull/7665) — **fix(auth): support origin-scoped hosted MCP OAuth**. Admits the hosted-MCP OAuth shape used by MKT1.
- [nearai/ironclaw PR #7652](https://github.com/nearai/ironclaw/pull/7652) — **perf(stress): measure production DB write workloads**. Adds the measurement harness for DB write-pressure work.
- [nearai/ironclaw PR #7655](https://github.com/nearai/ironclaw/pull/7655) — **fix(ci): re-pin slack/telegram integration coverage floors** to observed reality.

Several important issues also closed, including the structured automation spec issue [nearai/ironclaw Issue #7532](https://github.com/nearai/ironclaw/issues/7532), the DB write-write measurement harness issue [nearai/ironclaw Issue #7592](https://github.com/nearai/ironclaw/issues/7592), and the per-user LLM model selection request [nearai/ironclaw Issue #7183](https://github.com/nearai/ironclaw/issues/7183).

## Community Hot Topics

The snapshot shows low explicit comment/reaction volume, but the most active items by linkage, updates, and size are:

- [nearai/ironclaw Issue #6879](https://github.com/nearai/ironclaw/issues/6879) — **Automation runs are hit-or-miss**. This v1.3.0 epic has the only visible comment in the issue snapshot and is the parent of multiple new automation sub-issues. The underlying need is structural reliability for unattended scheduled runs, especially on smaller models like DeepSeek V4 Flash.
- [nearai/ironclaw PR #7634](https://github.com/nearai/ironclaw/pull/7634) — **feat(unbound-turns): complete the switchover to prepared-context turns**. A large open PR that, with base PR [nearai/ironclaw PR #7562](https://github.com/nearai/ironclaw/pull/7562), represents the biggest active architecture change.
- [nearai/ironclaw PR #7661](https://github.com/nearai/ironclaw/pull/7661) / [nearai/ironclaw Issue #7664](https://github.com/nearai/ironclaw/issues/7664) — **Pluggable memory over MCP**. The community and roadmap signal is clear: external memory systems should be bindable by configuration rather than hard-coded factory arms.

The common theme is control and reliability: users/operators want deterministic automation outcomes, lower DB write pressure, and configurable infrastructure.

## Bugs & Stability

| Severity | Issue | Description | Status |
|---|---|---|---|
| High | [nearai/ironclaw Issue #7659](https://github.com/nearai/ironclaw/issues/7659) | Extensions installed by other users appear on the Extensions/Registry page; potential cross-user state leakage. | Open; no explicit fix PR linked in this snapshot. |
| High | [nearai/ironclaw Issue #7662](https://github.com/nearai/ironclaw/issues/7662) | Telegram MP4 attachment fails with `invalid_value (attachments.mime_type)` even when file is recognized as `video/mp4`. | Open; no explicit fix PR linked. |
| Medium | [nearai/ironclaw Issue #7667](https://github.com/nearai/ironclaw/issues/7667) | Telegram phone-mode login code hint does not reflect `sentCode.type_`; user received code in the wrong place after `PHONE_MIGRATE_1`. | Open; related fix [nearai/ironclaw PR #7658](https://github.com/nearai/ironclaw/pull/7658) was merged. |
| Medium | [nearai/ironclaw Issue #7660](https://github.com/nearai/ironclaw/issues/7660) | Slack UI incorrectly shows “Reconnect” and “Finish Setup” despite an active working connection. | Fix merged in [nearai/ironclaw PR #7666](https://github.com/nearai/ironclaw/pull/7666). |
| Reliability | [nearai/ironclaw Issue #6879](https://github.com/nearai/ironclaw/issues/6879) | Automation runs are inconsistent; same prompt sometimes produces nothing, especially on small models. | Open epic; mitigation PRs [nearai/ironclaw PR #7650](https://github.com/nearai/ironclaw/pull/7650) and [nearai/ironclaw PR #7651](https://github.com/nearai/ironclaw/pull/7651) are open. |
| Performance | [nearai/ironclaw PR #7628](https://github.com/nearai/ironclaw/pull/7628) | Removes heartbeat journal churn to reduce DB write pressure. | Open PR; conservative fix subset of the DB write epic. |

The closed DOCX corruption bug [nearai/ironclaw Issue #6869](https://github.com/nearai/ironclaw/issues/6869) was also closed in this window, though the provided data does not explicitly identify the fixing PR.

## Feature Requests & Roadmap Signals

- **Automation v1.3.0 suite** — The parent epic [nearai/ironclaw Issue #6879](https://github.com/nearai/ironclaw/issues/6879) has spawned concrete enhancements: deterministic no-delivery outcome ([#7647](https://github.com/nearai/ironclaw/issues/7647)), standing approval leases ([#7646](https://github.com/nearai/ironclaw/issues/7646)), per-automation LLM model pinning ([#7645](https://github.com/nearai/ironclaw/issues/7645)), and preflight verification before arming schedules ([#7644](https://github.com/nearai/ironclaw/issues/7644)).
- **Pluggable memory** — [nearai/ironclaw Issue #7664](https://github.com/nearai/ironclaw/issues/7664) tracks the provider contract and Mnesis as first consumer; open PR [nearai/ironclaw PR #7661](https://github.com/nearai/ironclaw/pull/7661) is the implementation.
- **Structured Ask User cards in WebUI** — [nearai/ironclaw Issue #7653](https://github.com/nearai/ironclaw/issues/7653) proposes an OMP-inspired `ask` tool using the existing `LoopCompletionKind::AskUserReply`.
- **Slack-to-Console bridge** — [nearai/ironclaw Issue #7656](https://github.com/nearai/ironclaw/issues/7656) closed; this likely addresses the need to tie Slack responses back to Console threads/runs with deep links and metadata.
- **Per-user LLM model selection** — [nearai/ironclaw Issue #7183](https://github.com/nearai/ironclaw/issues/7183) closed; if shipped, it resolves a long-standing admin-only limitation raised by IronClaw Champions.

Most of these point toward v1.3.0 being an “automation reliability” release, with memory pluggability and WebUI interaction improvements as strong secondary themes.

## User Feedback Summary

Real user pain points visible in this snapshot:

- **Unreliable automation runs** — [nearai/ironclaw Issue #6879](https://github.com/nearai/ironclaw/issues/6879) describes the same stored prompt sometimes succeeding and sometimes producing nothing, particularly on DeepSeek V4 Flash. The audit concluded the issue pipeline is structural, not model noise.
- **Document generation quality** — [nearai/ironclaw Issue #6869](https://github.com/nearai/ironclaw/issues/6869) reports generated DOCX files unreadable by Word, while ChatGPT and Claude can produce similar files successfully. Two attempts failed.
- **Configuration flexibility** — [nearai/ironclaw Issue #7183](https://github.com/nearai/ironclaw/issues/7183) came from the IronClaw Champions weekly check-in: users want per-user LLM model selection, not admin-only control.
- **QA/bug-bash friction** — Testers reported misleading Slack connection status ([#7660](https://github.com/nearai/ironclaw/issues/7660)), failed MP4 attachments in Telegram ([#7662](https://github.com/nearai/ironclaw/issues/7662)), and cross-user extension visibility ([#7659](https://github.com/nearai/ironclaw/issues/7659)) on the Railway QA instance.

The overall sentiment is mixed: feature work is ambitious and shipping, but users are hitting reliability and interoperability issues in real workflows.

## Backlog Watch

The following open items have sat without visible comments/reactions for several days and may need maintainer attention:

- [nearai/ironclaw PR #7255](https://github.com/nearai/ironclaw/pull/7255) — **docs(governance): evaluate the APDD kit + propose scoped integration**. Open since 2026-08-05; docs-only, low risk.
- [nearai/ironclaw PR #7378](https://github.com/nearai/ironclaw/pull/7378) — **test(docs): doc-fact contract tests for CLI, manifest, and Responses claims**. Open since 2026-08-07; part of the “doc-truth” series.
- [nearai/ironclaw PR #7379](https://github.com/nearai/ironclaw/pull/7379) — **release(docs): deploy public docs from a docs-live branch**. Open since 2026-08-07; addresses docs↔release skew.
- [nearai/ironclaw PR #7456](https://github.com/nearai/ironclaw/pull/7456) — **fix(reborn): make durable storage profile-agnostic**. Open since 2026-08-10; large, medium-risk, and relevant to tenancy/isolation correctness.

These are not necessarily abandoned, but they are the oldest open PRs in the current snapshot and have no visible community engagement in the provided data.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-15

Data window: GitHub activity in the last 24 hours.

## Today's Overview

LobsterAI showed high development activity: 27 PRs were updated, 22 were closed/merged, and one new release was published. The 2026.8.14 release adds sidebar features, while a large 2026.7.30 release branch was merged into `main`, bringing Team Edition account/quota flows and a refreshed Skills/Connectors experience. The main focus areas were cowork UX fixes, OpenClaw skill-key handling, and account/credits UI polish. Issue activity remains low, but several stale safety/quality items are still waiting for maintainer attention. No new crashes or P0-level regressions were reported.

## Releases

### [LobsterAI 2026.8.14](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.8.14)

Released 2026-08-14. Changes visible in the release notes:

- **feat(sidebar): support check-in and banner carousel** — [PR #2411](https://github.com/netease-youdao/LobsterAI/pull/2411)
- **feat(sidebar): add multi-agent task activity filter** — [PR #2418](https://github.com/netease-youdao/LobsterAI/pull/2418)

The release note excerpt was truncated at `feat(sidebar): mov...`, so the full changelog should be checked for additional items. No breaking changes or migration notes were visible in the provided excerpt.

## Project Progress

22 PRs were closed/merged in the last 24 hours. Notable items:

### Major release-branch merge
- [PR #2498 — Release: 2026.7.30](https://github.com/netease-youdao/LobsterAI/pull/2498) was merged into `main`. It is 67 commits ahead, changing 264 files (`+24,736/-4,253`). It introduces Team Edition account and quota flows and refreshes the Skills and Connectors experience.

### Cowork improvements
- [PR #2499 — fix(cowork): keep turn process expanded until an answer exists](https://github.com/netease-youdao/LobsterAI/pull/2499) — prevents cowork turns from collapsing into an empty duration line while mid-wait.
- [PR #2496 — fix(cowork): keep badge popovers within viewport](https://github.com/netease-youdao/LobsterAI/pull/2496) — fixes popover clipping and z-order issues.
- [PR #2497 — fix(i18n): improve cowork goal and steer copy wording](https://github.com/netease-youdao/LobsterAI/pull/2497)
- [PR #2493 — Fix/session export image and card toggle UI](https://github.com/netease-youdao/LobsterAI/pull/2493)
- [PR #2490 — feat(cowork): preview browser annotation attachments in artifact panel](https://github.com/netease-youdao/LobsterAI/pull/2490) — renders browser-annotation screenshots as numbered attachment cards and opens them in the artifact panel.

### OpenClaw fixes
- [PR #2483 — fix(openclaw): key skill entries by frontmatter name](https://github.com/netease-youdao/LobsterAI/pull/2483)
- [PR #2491 — fix(openclaw): key skills.entries by frontmatter name](https://github.com/netease-youdao/LobsterAI/pull/2491)

Both address the same underlying bug: OpenClaw resolves skill overrides by frontmatter name, but LobsterAI was writing directory-derived IDs, silently making UI skill toggles ineffective.

### Account / credits UI
- [PR #2494 — fix(account): update credits icon style](https://github.com/netease-youdao/LobsterAI/pull/2494)
- [PR #2492 — fix(account): align credits icon color](https://github.com/netease-youdao/LobsterAI/pull/2492)

### Typography
- [PR #2495 — feat(typography): bump default UI/code font sizes with one-time migration](https://github.com/netease-youdao/LobsterAI/pull/2495)

### Other UX / backlog cleanup
- [PR #1228 — feat(cowork): mark session as unread](https://github.com/netease-youdao/LobsterAI/pull/1228) was closed after being stale.
- [PR #1231 — fix(agent): AgentCreateModal Escape key and form reset](https://github.com/netease-youdao/LobsterAI/pull/1231) was closed after being stale.
- [PR #2422 — Liuzhq/fix btw tools](https://github.com/netease-youdao/LobsterAI/pull/2422) and [PR #2423 — Revert "Liuzhq/fix btw tools"](https://github.com/netease-youdao/LobsterAI/pull/2423) were both closed; the revert means the BTW tools fix did not stick.

Still-open PRs in this window: [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374), [#2460](https://github.com/netease-youdao/LobsterAI/pull/2460), [#2465](https://github.com/netease-youdao/LobsterAI/pull/2465), [#1153](https://github.com/netease-youdao/LobsterAI/pull/1153), and [#1155](https://github.com/netease-youdao/LobsterAI/pull/1155).

## Community Hot Topics

Only two issues were updated in the last 24 hours, and both have exactly 1 comment and 0 👍 reactions.

- [#1154 — [OPEN] [stale] Add Vitest unit tests for commandSafety and coworkMemoryJudge](https://github.com/netease-youdao/LobsterAI/issues/1154)  
  **Underlying need:** Safety and memory-quality modules are untested. `commandSafety.ts` gates dangerous command execution, and `coworkMemoryJudge.ts` gates memory writes. This is a developer trust/quality concern, not just a test coverage issue.

- [#2489 — [OPEN] 快更新v4pro！](https://github.com/netease-youdao/LobsterAI/issues/2489) ("Update v4pro quickly!")  
  **Underlying need:** Users are requesting support for a newer model/API version ("v4pro"). The urgent tone suggests dissatisfaction with model-update cadence.

PR comment counts were not provided in the dataset, so issue comments are the only reliable public discussion signal.

## Bugs & Stability

Ranked by severity:

1. **OpenClaw skill toggles silently ineffective** — directory/frontmatter name mismatch made skill enable/disable appear to work but have no effect.  
   Fix: [#2483](https://github.com/netease-youdao/LobsterAI/pull/2483), [#2491](https://github.com/netease-youdao/LobsterAI/pull/2491).  
   **Status:** Fixed/closed.

2. **Cowork turn shows false failure when waiting** — a turn that ended mid-wait collapsed into an empty duration line that read as a failure.  
   Fix: [#2499](https://github.com/netease-youdao/LobsterAI/pull/2499).  
   **Status:** Fixed/closed.

3. **BTW tools fix was reverted** — [#2422](https://github.com/netease-youdao/LobsterAI/pull/2422) was followed by [#2423](https://github.com/netease-youdao/LobsterAI/pull/2423) "Revert". The original issue may still be unresolved.  
   **Status:** Needs follow-up.

4. **Cowork badge popovers clipped / positioned incorrectly** — [#2496](https://github.com/netease-youdao/LobsterAI/pull/2496).  
   **Status:** Fixed/closed.

5. **Session export image and card toggle UI bug** — [#2493](https://github.com/netease-youdao/LobsterAI/pull/2493).  
   **Status:** Fixed/closed.

6. **Credits icon color/style inconsistency** — [#2492](https://github.com/netease-youdao/LobsterAI/pull/2492), [#2494](https://github.com/netease-youdao/LobsterAI/pull/2494).  
   **Status:** Fixed/closed. Severity: cosmetic.

## Feature Requests & Roadmap Signals

- **v4pro model support** — [Issue #2489](https://github.com/netease-youdao/LobsterAI/issues/2489) is a direct user request and is likely to appear in the next release if the model/API integration is ready.
- **Permanent sidebar ad-banner hide** — [PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374) adds a Settings → General toggle and addresses [Issue #2342](https://github.com/netease-youdao/LobsterAI/issues/2342). This was still open but active, so it is a strong candidate for the next release.
- **In-session Ctrl+F / Cmd+F search** — [PR #1155](https://github.com/netease-youdao/LobsterAI/pull/1155) remains open and stale. It is a mature feature proposal and could be revived or closed with maintainer decision.
- **Team Edition direction** — [PR #2498](https://github.com/netease-youdao/LobsterAI/pull/2498) merges Team Edition account/quota flows, signaling enterprise/team features as a roadmap focus.
- **Artifact panel expansion** — [PR #2490](https://github.com/netease-youdao/LobsterAI/pull/2490) adds browser annotation previews, suggesting continued investment in artifact-rich cowork sessions.

## User Feedback Summary

- **Urgency for model updates** — [Issue #2489](https://github.com/netease-youdao/LobsterAI/issues/2489) ("快更新v4pro！") is the clearest user dissatisfaction signal in this window.
- **Ad banner annoyance** — [PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374) references [Issue #2342](https://github.com/netease-youdao/LobsterAI/issues/2342): users want a permanent way to hide the sidebar ad banner, not just temporary dismissal.
- **Silent configuration failures** — The OpenClaw skill-key bug reported in [#2483](https://github.com/netease-youdao/LobsterAI/pull/2483) / [#2491](https://github.com/netease-youdao/LobsterAI/pull/2491) is a trust issue: users toggled skills and believed the changes were applied.
- **Cowork false-failure confusion** — [PR #2499](https://github.com/netease-youdao/LobsterAI/pull/2499) addresses users seeing collapsed/empty cowork turns that looked like failures.
- **Safety/testing concern** — [Issue #1154](https://github.com/netease-youdao/LobsterAI/issues/1154) reflects developer-side concern about missing tests for dangerous command detection and memory quality gating.

Overall, user-facing issue volume is low, but the maintainers are processing PRs quickly and shipping fixes at a high cadence.

## Backlog Watch

Long-open or important items needing maintainer attention:

- [Issue #1154 — Tests for commandSafety and coworkMemoryJudge](https://github.com/netease-youdao/LobsterAI/issues/1154)  
  Open since 2026-03-31. Safety-critical modules still lack tests. This is the most important backlog item.

- [PR #1153 — Google Gemini `/v1` URL joining bug](https://github.com/netease-youdao/LobsterAI/pull/1153)  
  Open since 2026-03-31, tagged stale. The fix is ready but has not been merged or explicitly rejected.

- [PR #1155 — In-session search (Ctrl+F / Cmd+F)](https://github.com/netease-youdao/LobsterAI/pull/1155)  
  Open since 2026-03-31, tagged stale. Needs a maintainer decision: revive, update, or close.

- [PR #2374 — Permanent setting to hide sidebar ad banner](https://github.com/netease-youdao/LobsterAI/pull/2374)  
  Open since 2026-07-21. Directly addresses a user complaint and should be reviewed for merge.

- [PR #2460 — chore(deps-dev): bump rimraf from 5.0.10 to 6.1.3](https://github.com/netease-youdao/LobsterAI/pull/2460)  
  Dependency major-version bump; needs review.

- [PR #2465 — chore(deps-dev): bump vite from 5.4.21 to 8.2.1](https://github.com/netease-youdao/LobsterAI/pull/2465)  
  Very large major-version jump; requires careful migration and build validation.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-15

## 1. Today's Overview
Moltis is in a quiet period: no issues were updated in the last 24 hours, no new releases were published, and the only activity is a single open pull request (#1190) last touched on August 14. The project's sole active item, "Add durable calendar, channel, and email connectors," remains in open status with no merge or close activity, indicating the feature is still under development or awaiting review. With zero open issues, the project shows no outstanding bug reports or user-reported problems at this time. Overall, project health appears stable but low-velocity, with activity concentrated on connector infrastructure rather than fixes or community engagement.

## 2. Releases
No new releases were published in the last 24 hours. There are no recent versions to summarize, so no changelog, breaking changes, or migration notes are available.

## 3. Project Progress
No pull requests were merged or closed in the last 24 hours, meaning no features were officially integrated or fixes landed during this period.

The only active item is:
- **[PR #1190 — Add durable calendar, channel, and email connectors](https://github.com/moltis-org/moltis/pull/1190)** (open, by **penso**, created Aug 11, updated Aug 14)
  - Adds provider-neutral connector persistence, atomic snapshots, scheduling, projections, and bounded local full-text search.
  - Introduces read-only CalDAV, Gmail, Himalaya v2, and reusable channel-history datasets with provider-owned schemas and no copied credentials.
  - Adds provider-scoped trust boundaries.

This is a feature-advancing contribution still in flight; it has not been reviewed or merged as of this digest.

## 4. Community Hot Topics
There are no active community discussions to report. Moltis currently has **zero open issues**, and the single open PR (#1190) has **no comments and no reactions**. The absence of discussion around the connector PR may indicate it is either in early review stages or simply not yet attracting attention. Underlying need signaled by the PR itself: users appear to require durable, provider-neutral integrations for calendar, email, and chat history — a common pattern for AI assistants needing long-term memory and external tool access.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported today. There are zero open issues, so there is nothing to rank by severity and no fix PRs to track. Stability metrics cannot be assessed from the available data, but the clean issue tracker suggests no known user-facing defects at this time.

## 6. Feature Requests & Roadmap Signals
No formal feature requests were filed. The clearest roadmap signal comes from **[PR #1190](https://github.com/moltis-org/moltis/pull/1190)**, which points toward:
- **Durable connector persistence** (atomic snapshots, scheduling, projections)
- **Local full-text search** over connector data (bounded scope)
- **Calendar (CalDAV), email (Gmail, Himalaya v2), and channel-history** connectors with read-only access and provider-owned schemas
- **No copied credentials**, indicating a privacy/security-first design for credential handling

If merged, these capabilities would likely land in the next minor release and establish a foundation for multi-provider data ingestion — a core enabler for personal AI assistants that need persistent memory across email, calendars, and chat platforms.

## 7. User Feedback Summary
No user feedback, pain points, or satisfaction signals are available for this period. With zero open issues and no comments on the active PR, there is insufficient data to characterize user sentiment. The only indirect signal is the design of PR #1190 itself, which emphasizes **provider-scoped trust** and **no copied credentials** — suggesting either internal or community pressure around secure handling of user data across third-party providers.

## 8. Backlog Watch
- **[PR #1190 — Add durable calendar, channel, and email connectors](https://github.com/moltis-org/moltis/pull/1190)** — Open for **4 days** (since Aug 11), last updated Aug 14. This is the project's only outstanding item and carries substantial feature scope (connector persistence, snapshots, scheduling, full-text search, and multiple provider integrations). It has no comments or reviews, so it likely needs maintainer attention for initial review, feedback, or merge decision. Despite being relatively young, its status as the sole open work item makes it the top backlog priority.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-15

*Data source: github.com/agentscope-ai/CoPaw, with issue/PR links pointing to the `agentscope-ai/QwenPaw` tracker as provided in the input.*

## 1. Today's Overview

CoPaw is in a high-velocity maintenance and feature-development phase. In the last 24 hours, 50 issues and 41 PRs were updated, with 38 issues closed and 15 PRs merged/closed, showing active triage and regular contributor engagement. No release was published in this window. The main development themes are MCP/tool reliability, skill-system lifecycle management, provider/model compatibility, and desktop/console UX polish. Several 2.1.0 regressions remain open and will need maintainer attention, but the overall trajectory looks healthy.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Project Progress

Visible closed PRs in the last 24 hours:

- [#7029 / #7031](https://github.com/agentscope-ai/QwenPaw/pull/7029) — dynamic skill loading + auto-unload + frontmatter fix; superseded by [#7033](https://github.com/agentscope-ai/QwenPaw/pull/7033)
- [#7030](https://github.com/agentscope-ai/QwenPaw/pull/7030) — auto-title-sync for memory-linked chats; superseded by [#7032](https://github.com/agentscope-ai/QwenPaw/pull/7032)
- [#2105](https://github.com/agentscope-ai/QwenPaw/pull/2105) — Whisper installation documentation
- [#6715](https://github.com/agentscope-ai/QwenPaw/pull/6715) — OneBot inbound media localization before agent processing
- [#6943](https://github.com/agentscope-ai/QwenPaw/pull/6943) — interactive configurators for plugin channels

Open PRs advancing major workstreams:

- [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) — native DataPaw app runtime and durable analysis workspace
- [#7033](https://github.com/agentscope-ai/QwenPaw/pull/7033) — dynamic skill lifecycle: load/unload/auto-unload
- [#7032](https://github.com/agentscope-ai/QwenPaw/pull/7032) — auto-memory linked chat title refresh
- [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) — opt-in per-session model overrides
- [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) — unified provider discovery, model metadata, routing, and agent controls
- [#7035](https://github.com/agentscope-ai/QwenPaw/pull/7035) — group subagent conversations in console
- [#7036](https://github.com/agentscope-ai/QwenPaw/pull/7036) — media download controls
- [#7037](https://github.com/agentscope-ai/QwenPaw/pull/7037) — computer-use observation of related window surfaces
- [#6869](https://github.com/agentscope-ai/QwenPaw/pull/6869) — background task timeout contract
- [#6969](https://github.com/agentscope-ai/QwenPaw/pull/6969) — fix duplicate MCP tool results
- [#7024](https://github.com/agentscope-ai/QwenPaw/pull/7024) — DashScope audio formatting + fallback retry
- [#6908](https://github.com/agentscope-ai/QwenPaw/pull/6908) — bump agentscope dependency to 2.0.6
- [#6997](https://github.com/agentscope-ai/QwenPaw/pull/6997) — rewrite long-term memory guides and agent memory prompt

## 4. Community Hot Topics

Most-discussed issues in the last 24 hours:

- [#3045](https://github.com/agentscope-ai/QwenPaw/issues/3045) — **8 comments, closed** — "[Bug]: 自动获取模型为什么不可用"  
  Users continue to hit model auto-fetch/discovery failures, especially on desktop Windows.

- [#2418](https://github.com/agentscope-ai/QwenPaw/issues/2418) — **7 comments, closed** — Request for a skills-hub management page  
  Strong demand for faster discovery/download of mainstream skills.

- [#2846](https://github.com/agentscope-ai/QwenPaw/issues/2846) — **6 comments, closed** — Desktop auto-update + wrong Windows taskbar icon  
  Recurring Windows UX complaint: update process is too manual.

- [#2303](https://github.com/agentscope-ai/QwenPaw/issues/2303) — **6 comments, closed** — MiniMax `check_connection()` fails on unsupported `/models` endpoint  
  Provider compatibility bug with Anthropic-compatible APIs.

- [#7010](https://github.com/agentscope-ai/QwenPaw/issues/7010) — **6 comments, closed** — No true daemon/background mode  
  `qwenpaw app` hangs SSH/script launches; important for headless/server use.

- [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) — **6 comments, closed** — MCP tools "not found" after 2.0 upgrade  
  High-frequency MCP regression report.

- [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) — **5 comments, open** — Console stop request cancels active Feishu session  
  Cross-session state bug in 2.1.0.

- [#3002](https://github.com/agentscope-ai/QwenPaw/issues/3002) — **5 comments, closed** — CoPaw incompatible with OpenAI Responses API format  
  Requests to Azure OpenAI-compatible gateway all return 400.

- [#4001](https://github.com/agentscope-ai/QwenPaw/issues/4001) — **4 comments, open** — Request to delete single chat messages  
  Strong console UX wish: message-level deletion like WeChat.

- [#7025](https://github.com/agentscope-ai/QwenPaw/issues/7025) — **4 comments, open** — QwenPaw Creator plugin disables all other plugins  
  Plugin isolation regression.

- [#2763](https://github.com/agentscope-ai/QwenPaw/issues/2763) — **4 comments, 2 👍, closed** — Request for `/models` and `/model <provider>-<model>` slash commands  
  Users want model switching without going into settings.

Underlying needs: users want fewer provider/model integration failures, better desktop lifecycle management, more flexible conversation UI, and a safer plugin/MCP ecosystem.

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Status | Notes |
|---|---|---|---|
| High | [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) — Console stop cancels active Feishu session | Open | 2.1.0 cross-session identity bug; no fix PR visible |
| High | [#7016](https://github.com/agentscope-ai/QwenPaw/issues/7016) — Tool call offload returns 404 during streaming | Open | UI repeatedly queries `/{session_id}/{tool_call_id}/offload` and fails |
| High | [#7025](https://github.com/agentscope-ai/QwenPaw/issues/7025) — Creator plugin disables all other plugins | Open | Plugin isolation regression; likely blocks plugin users |
| High | [#6958](https://github.com/agentscope-ai/QwenPaw/issues/6958) — FastMCP tool result file contains duplicate data | Open | Fix PR: [#6969](https://github.com/agentscope-ai/QwenPaw/pull/6969) |
| Medium | [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) — MCP "Tool not found" after 2.0 upgrade | Closed | Common report; users need clearer migration guidance |
| Medium | [#7010](https://github.com/agentscope-ai/QwenPaw/issues/7010) — No daemon mode; SSH hangs | Closed | Capability gap reported as bug |
| Medium | [#6972](https://github.com/agentscope-ai/QwenPaw/issues/6972) — Chrome extension WebSocket drops after `tab.create` | Closed | Browser tool JSON-RPC bug |
| Medium | [#6806](https://github.com/agentscope-ai/QwenPaw/issues/6806) — Creator plugin cannot save model config on Windows | Closed | "Internal Server Error" on Windows |
| Medium | [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) — QwenPaw 2.0.1 incompatible with agentscope 2.0.4.post1 | Closed | Crashes + tool-permission deadlock; [#6908](https://github.com/agentscope-ai/QwenPaw/pull/6908) may help |
| Medium | [#6197](https://github.com/agentscope-ai/QwenPaw/issues/6197) — Desktop hangs when `nvidia-smi` hangs | Closed | Startup robustness issue |
| Medium | [#4731](https://github.com/agentscope-ai/QwenPaw/issues/4731) — Browser launch failure with Edge exit code 21 | Closed | Playwright/Edge integration |
| Low/Medium | [#4832](https://github.com/agentscope-ai/QwenPaw/issues/4832) — cmd.exe window flashes due to missing `CREATE_NO_WINDOW` | Closed | Windows shell tool polish |
| Low/Medium | [#6951](https://github.com/agentscope-ai/QwenPaw/issues/6951) — Scroll compression hides pre-compression transcript | Closed | User-visible transcript integrity issue |
| Low | [#7040](https://github.com/agentscope-ai/QwenPaw/issues/7040) — "Stop Running" typo "Stopp Running" | Closed | UI copy quality feedback |

## 6. Feature Requests & Roadmap Signals

Strong roadmap signals from recent issues and PRs:

- **Desktop experience**: auto-update ([#2846](https://github.com/agentscope-ai/QwenPaw/issues/2846), [#3464](https://github.com/agentscope-ai/QwenPaw/issues/3464)), daemon/background mode ([#7010](https://github.com/agentscope-ai/QwenPaw/issues/7010)), Windows icon fix — likely next for desktop polish.
- **Skill/plugin management**: dynamic skill loading ([#7033](https://github.com/agentscope-ai/QwenPaw/pull/7033)), skills-hub page ([#2418](https://github.com/agentscope-ai/QwenPaw/issues/2418)), plugin-channel configurators ([#6943](https://github.com/agentscope-ai/QwenPaw/pull/6943)).
- **Model/provider flexibility**: per-session model overrides ([#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992)), unified provider/model catalog ([#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302)), OpenAI Responses API support ([#944](https://github.com/agentscope-ai/QwenPaw/issues/944), [#2737](https://github.com/agentscope-ai/QwenPaw/issues/2737), [#3002](https://github.com/agentscope-ai/QwenPaw/issues/3002)).
- **Conversation UX**: single-message deletion ([#4001](https://github.com/agentscope-ai/QwenPaw/issues/4001)), session splitting ([#4436](https://github.com/agentscope-ai/QwenPaw/issues/4436)), `/models` and `/model` commands ([#2763](https://github.com/agentscope-ai/QwenPaw/issues/2763)).
- **Advanced runtime**: computer use ([#5551](https://github.com/agentscope-ai/QwenPaw/issues/5551), [#7037](https://github.com/agentscope-ai/QwenPaw/pull/7037)), zero-setup local GGUF models ([#6433](https://github.com/agentscope-ai/QwenPaw/issues/6433)), scheduled tasks without delivery ([#2554](https://github.com/agentscope-ai/QwenPaw/issues/2554)).
- **New product direction**: DataPaw native app runtime/workspace ([#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940)).

Predictions for the next minor release: skill lifecycle improvements, MCP/tool reliability fixes, agentscope 2.0.6 compatibility, console media/conversation polish, and possibly per-session model overrides.

## 7. User Feedback Summary

Users are actively pushing CoPaw toward a more polished, production-ready personal AI assistant.

- **Windows pain points dominate**: update process is a top complaint ("每次都要卸载后再更新很麻烦" — [#2846](https://github.com/agentscope-ai/QwenPaw/issues/2846), [#3464](https://github.com/agentscope-ai/QwenPaw/issues/3464)), along with wrong taskbar icon and cmd-window flashes ([#4832](https://github.com/agentscope-ai/QwenPaw/issues/4832)).
- **Plugin/MCP ecosystem is growing but fragile**: users are installing Creator and MCP tools, but conflicts ([#7025](https://github.com/agentscope-ai/QwenPaw/issues/7025)), "Tool not found" errors ([#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405)), and duplicate tool results ([#6958](https://github.com/agentscope-ai/QwenPaw/issues/6958)) are causing frustration.
- **Power users want deeper control**: conversation editing, session splitting, slash-command model switching, daemon mode, and local model downloads.
- **Satisfaction signals**: users are willing to file detailed bug reports and submit PRs (e.g., [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940), [#2105](https://github.com/agentscope-ai/QwenPaw/pull/2105)). The typo report ([#7040](https://github.com/agentscope-ai/QwenPaw/issues/7040)) also shows an engaged UI-feedback community. Main dissatisfaction clusters around upgrade regressions and provider compatibility.

## 8. Backlog Watch

Issues/PRs that need maintainer attention:

- [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) — open 2.1.0 cross-session cancellation bug; should be high priority.
- [#7016](https://github.com/agentscope-ai/QwenPaw/issues/7016) — open 404 tool-call offload bug; no fix PR yet.
- [#7025](https://github.com/agentscope-ai/QwenPaw/issues/7025) — open plugin isolation regression; blocks Creator users.
- [#6958](https://github.com/agentscope-ai/QwenPaw/issues/6958) / [#6969](https://github.com/agentscope-ai/QwenPaw/pull/6969) — fix PR needs review and merge.
- [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) — per-session model overrides PR open since 2026-07-12, marked "Under Review"; no visible maintainer comments.
- [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) — large provider/model unification PR open since 2026-07-21; likely needs design review.
- [#4001](https://github.com/agentscope-ai/QwenPaw/issues/4001) — single-message deletion open since 2026-05-02; remains unanswered.
- [#4436](https://github.com/agentscope-ai/QwenPaw/issues/4436) — session splitting open since 2026-05-16; no visible progress.
- [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) — first-time contributor PR marked "ready-for-human-review"; needs a timely response to avoid contributor attrition.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-15

## 1. Today's Overview

ZeroClaw is in a heavily design-driven period: 33 issues and 50 PRs were updated in the last 24 hours, with RFCs and architecture trackers dominating both queues. The project is mid-stabilization on the v0.8.5 line (frozen intake August 4, targeting August 30, per [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459)), yet no release was cut this cycle. Security, identity, and runtime-ownership proposals — pluggable authentication ([#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)), shell command policy ([#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)), runtime-owned sessions ([#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)), and a Chat Completions profile ([#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)) — continue to draw sustained community discussion, indicating an Identity & Access milestone is actively converging. PR velocity is healthy but gated: 47 of 50 PRs remain open, and a significant share have been idle awaiting author or maintainer action. The maintainer decision queue ([#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)) remains the central bottleneck for accepting the large backlog of high-risk RFCs.

## 2. Releases

**None in the last 24 hours.** No new versions, breaking changes, or migration notes to report. The next expected milestone is **v0.8.5**, tracked by the finite weekly stabilization line ([#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459)) that runs through August 30, 2026. Weekly cuts ship ready work without waiting for all milestone items.

## 3. Project Progress

**Merged/closed PRs:** 3 of the 50 updated PRs were merged or closed; none appear in the top-20 list, so their identities are not visible in this dataset.

**Closed issues (2 of 3 visible):**
- [#6663](https://github.com/zeroclaw-labs/zeroclaw/issues/6663) — **feat(telegram): show tool-call progress during partial streaming** — closed, indicating completion of Telegram draft-message progress support.
- [#9982](https://github.com/zeroclaw-labs/zeroclaw/issues/9982) — **Hosted memory proposal (ViBo Cloud API)** — closed as **wontfix**; the external marketing/pitch issue was declined.

**Notable open PRs advanced/updated today:**
- [#9999](https://github.com/zeroclaw-labs/zeroclaw/pull/9999) — Fix: classifies OpenAI-compatible `finish_reason: "length"` as an output-token-limit terminal failure, addressing the S1 bug [#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421).
- [#9996](https://github.com/zeroclaw-labs/zeroclaw/pull/9996) — Fix: **atomic action-budget accounting** so parallel tool calls cannot jointly exceed `max_actions_per_hour`.
- [#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) — Feat: token accounting on history-trim events (fixes the misleading budget reporting of [#9619](https://github.com/zeroclaw-labs/zeroclaw/issues/9619)).
- [#9997](https://github.com/zeroclaw-labs/zeroclaw/pull/9997) — Feat: provider-grouped, paginated Telegram inline **/model picker**.
- [#9994](https://github.com/zeroclaw-labs/zeroclaw/pull/9994) — Feat: ZeroCode transcript **copy context menu**.
- [#10002](https://github.com/zeroclaw-labs/zeroclaw/pull/10002) — Fix: accepts camelCase segments in `google_workspace` validation (e.g., `calendarList`, `batchUpdate`).
- [#9986](https://github.com/zeroclaw-labs/zeroclaw/pull/9986) — Feat: `zeroclaw agents export <alias>` portable agent bundles.
- [#9985](https://github.com/zeroclaw-labs/zeroclaw/pull/9985) — CI: extends Blacksmith runners to msrv, parallel-runtime-test, installer-drift.
- [#9839](https://github.com/zeroclaw-labs/zeroclaw/pull/9839) — Feat: blocks direct spellings of irreversible destructive shell commands.

## 4. Community Hot Topics

Most-commented issues (all updated within the last 24h):

| Issue | Title | Comments | Focus |
|---|---|---|---|
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | RFC: Goal mode v1 — bounded foreground Matrix work | 22 | Durable multi-turn user objectives |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | RFC: Per-execution confirmation tier for high-risk shell commands | 20 | Shell safety / Claude Code-style allow/ask/deny |
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | RFC: ZeroClaw Chat Completions profile | 19 | OpenAI-compatible API surface |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | RFC: Pluggable inbound authentication and canonical principals | 16 | OIDC + pluggable identity (Rev 8) |
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 74 test failures on Windows | 15 | Windows CI/portability gap |
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) / [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | Runtime-owned sessions / unified attachments | 14 each | Web/channel surface architecture |

**Underlying signals:** The community is pushing ZeroClaw toward (a) an interoperable, OpenAI-compatible API for the ecosystem (Open WebUI, LobeChat, Continue.dev, Aider, LangChain), (b) a hardened, policy-driven security model with operator control over shell/egress/identity, and (c) fixing Windows as a first-class platform. The long RFC threads (several spanning 6–10 weeks) show the project's decision process is thorough but slow — exactly what the maintainer decision queue ([#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)) is meant to accelerate.

## 5. Bugs & Stability

Ranked by severity, with fix status:

- **[S1 — workflow blocked] [#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421)**: Incomplete terminal responses can be reported as successful (provider ends turn without trustworthy final answer). **Fix PR open:** [#9999](https://github.com/zeroclaw-labs/zeroclaw/pull/9999).
- **[S2 — degraded behavior] [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)**: 74 test failures on Windows 11 (console code page 936, Unix-only commands, path semantics, encoding). Long-standing; CI only runs Linux, so regressions go undetected. Related fix today: [#10001](https://github.com/zeroclaw-labs/zeroclaw/pull/10001) gates non-UTF-8 browser-path fixtures to Linux.
- **[High] [#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486)**: High-entropy detector redacts Solana wallet addresses in outbound Telegram messages; `high_entropy_tokens=false` does not disable it on the channel path.
- **[High] [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)**: Cron custom-shell test intermittently hits `ETXTBSY` under the parallel runtime gate, causing red checks on unrelated PRs (e.g., #9963).
- **[Medium] [#9919](https://github.com/zeroclaw-labs/zeroclaw/issues/9919)**: `create_memory_with_builders` silently routes Qdrant to MarkdownMemory when storage config is absent — wrong persistence layer selected.
- **[Medium] [#9759](https://github.com/zeroclaw-labs/zeroclaw/issues/9759)**: Quickstart does not reject duplicate enabled webhook ports (defaulting to 8090 can create ambiguous channel configs).
- **[S3 — minor] [#9983](https://github.com/zeroclaw-labs/zeroclaw/issues/9983)**: Fallback provider without vision misreports the cause of vision-request failures.
- **Stability note:** Config rollback fix [#9281](https://github.com/zeroclaw-labs/zeroclaw/pull/9281) (transactional `config/set` alias rollback) and config migration fix [#9707](https://github.com/zeroclaw-labs/zeroclaw/pull/9707) (bare `vision_model_provider` → dotted alias ref) remain open and would close two recurring config-related bug classes.

## 6. Feature Requests & Roadmap Signals

Likely near-term additions (several already have open PRs, suggesting near-term landing):

- **Telegram /model picker** ([#9895](https://github.com/zeroclaw-labs/zeroclaw/issues/9895)) — provider-grouped, paginated inline keyboard; **PR [#9997](https://github.com/zeroclaw-labs/zeroclaw/pull/9997) already open** → strong candidate for v0.8.5.
- **Agent portable bundles** ([#9986](https://github.com/zeroclaw-labs/zeroclaw/pull/9986)) — `agents export` with manifest, config closure, and workspace tree.
- **Discord role-based authorization** ([#9970](https://github.com/zeroclaw-labs/zeroclaw/issues/9970)) — `allowed_role_ids` additive to the user-ID allowlist; new and active.
- **Shell dialect in system prompt** ([#9788](https://github.com/zeroclaw-labs/zeroclaw/issues/9788)) — tell the model which shell language to write; currently blocked.
- **Agent evaluation harness** ([#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065)) — `zeroclaw eval` replay/live modes; now coordinated by new tracker [#9967](https://github.com/zeroclaw-labs/zeroclaw/issues/9967) (benchmark selection, per-turn instrumentation, baseline on master).
- **Localization compliance** — new tracker [#9972](https://github.com/zeroclaw-labs/zeroclaw/issues/9972) to eliminate user-facing literal output outside Fluent boundaries.

**Strategic RFCs shaping the next milestone:** Chat Completions profile ([#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)), runtime-owned sessions ([#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)), unified attachments ([#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)), and the catalog contract ([#9346](https://github.com/zeroclaw-labs/zeroclaw/issues/9346)). If accepted, these four would together deliver a broad, OpenAI-compatible, web-first integration surface.

## 7. User Feedback Summary

Real pain points expressed across the last 24h of activity:

- **Windows is a second-class platform.** The 74-failure suite ([#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)) and the non-UTF-8 test gating ([#10001](https://github.com/zeroclaw-labs/zeroclaw/pull/10001)) indicate Windows users/contributors are hitting path, encoding, and CI blind spots.
- **False-positive redaction breaks real workflows.** Solana wallet addresses being redacted as high-entropy tokens ([#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486)) undermines trust in the leak detector for legitimate crypto/MCP use cases.
- **Mobile/Telegram UX is a recurring theme.** Users find the text-based `/model` command cumbersome; the inline picker ([#9895](https://github.com/zeroclaw-labs/zeroclaw/issues/9895)) directly addresses this. The older Telegram streaming gap ([#6663](https://github.com/zeroclaw-labs/zeroclaw/issues/6663)) was resolved.
- **Security policy is powerful but hard to operate.** Multiple RFCs ([#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155), [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142), [#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897)) ask for runtime-appliable, inspectable, confirmation-tiered controls rather than full daemon reloads.
- **Misleading errors frustrate users.** Vision fallback errors ([#9983](https://github.com/zeroclaw-labs/zeroclaw/issues/9983)) and false "success" on incomplete responses ([#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421)) are both being fixed, but show a pattern where the runtime over-claims outcomes.
- **CI flakiness erodes contributor trust.** The `ETXTBSY` cron test ([#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)) failed unrelated PRs — a direct friction point for contributors.

## 8. Backlog Watch

**Long-running accepted RFCs awaiting implementation follow-through** (all `status:accepted`, several no-stale):

- [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) (created May 26) — Provenance and reply contract for internally initiated turns
- [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) (May 27) — Security posture, credential boundaries, universal ingress policy
- [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) / [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) (Jun 3) — Pluggable inbound auth; security decision pipeline (Rev 8 / Rev 6)
- [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) (Jun 3) — High-risk shell command confirmation tiers
- [#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897) (Jun 17) — Apply security/channel config updates without daemon reload
- [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) (Jun 24) — Goal mode v1 (top-commented issue at 22 comments)
- [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) (Jul 2) — Chat Completions profile (needs maintainer review)
- [#9346](https://github.com/zeroclaw-labs/zeroclaw/issues/9346) (Jul 24) — Unified catalog contract
- [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) / [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) (Jul 28) — Runtime sessions / unified attachments (needs maintainer review)

**Maintainer decision bottleneck:** The tracking issue [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) is the active decision queue and has 13 comments of its own — it is the single most important issue for unblocking the RFC backlog. The ADR audit tracker ([#8691](https://github.com/zeroclaw-labs/zeroclaw/issues/8691)) also awaits follow-through.

**PRs needing maintainer review (priority:p1):**
- [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) — keep agent turns alive after viewer disconnect
- [#9281](https://github.com/zeroclaw-labs/zeroclaw/pull/9281) — roll back auto-created map aliases on config set failure

**PRs stalled on author action (11 of top 20):** [#9137](https://github.com/zeroclaw-labs/zeroclaw/pull/9137), [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443), [#9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126), [#9707](https://github.com/zeroclaw-labs/zeroclaw/pull/9707), [#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713), [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420), [#9839](https://github.com/zeroclaw-labs/zeroclaw/pull/9839), [#9580](https://github.com/zeroclaw-labs/zeroclaw/pull/9580), [#9962](https://github.com/zeroclaw-labs/zeroclaw/pull/9962), [#9986](https://github.com/zeroclaw-labs/zeroclaw/pull/9986), [#9842](https://github.com/zeroclaw-labs/zeroclaw/pull/9842). Half of the most-active PRs are blocked on contributor follow-up — a sign that large, high-risk changes (plugin egress, Matrix drafts, OAuth profiles, plugin config validation) need either owner re-engagement or maintainer co-ownership to land.

---

**Project health summary:** Architecturally ambitious and community-engaged, with a strong pipeline of RFCs and fixes. The main risks are decision latency on the RFC queue, an unusually large share of open PRs waiting on authors/reviewers, and persistent Windows CI gaps. If the maintainer queue ([#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)) clears the high-risk RFC cluster before the v0.8.5 line ends August 30, the next release could be substantially broader than a stabilization cut.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*