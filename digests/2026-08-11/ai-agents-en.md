# OpenClaw Ecosystem Digest 2026-08-11

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-11 00:52 UTC

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

# OpenClaw Project Digest — 2026-08-11

## 1. Today's Overview
OpenClaw saw very high activity in the last 24 hours: **500 issues updated** (406 open/active, 94 closed) and **500 PRs updated** (349 open, 151 merged/closed), with **no new releases published**. The open backlog remains large, but closure rates are healthy: ~19% of touched issues and ~30% of touched PRs moved to closed/merged status. The dominant technical themes are **message-delivery reliability** (silent replies, duplicate sends), **session-state stability/regressions**, **auth/OAuth handling**, and **performance regressions**. Maintainers are actively landing targeted fixes, though several recurring failure classes suggest deeper reliability work is still needed.

## 2. Releases
**No new releases in the last 24 hours.** The latest releases list is empty, so there are no changelog, breaking-change, or migration notes to report.

## 3. Project Progress
151 PRs were closed/merged in the last 24 hours. Notable visible changes:

- **[#121637](https://github.com/openclaw/openclaw/pull/121637) — fix(ui): prevent terminal garble after Gateway reconnect** — fixes stale/mojibake terminal rendering in Control UI after a Gateway restart or output gap.
- **[#121249](https://github.com/openclaw/openclaw/pull/121249) — fix(ui): name new session groups in an owned dialog instead of a browser prompt** — replaces native `window.prompt()` with a proper OpenClaw dialog.
- **[#121653](https://github.com/openclaw/openclaw/pull/121653) — feat(skills): reconcile learned skill collections** — adds an isolated daily model session to clean/rewrite skills and revises `/learn` behavior.
- **[#115104](https://github.com/openclaw/openclaw/pull/115104) — fix: finish completed tool work after empty final responses** — handles valid completed-empty responses without turning them into exceptions.
- **[#121673](https://github.com/openclaw/openclaw/pull/121673) — fix: keep approval requests on the owning channel account** — prevents approvals from appearing on every eligible account for a channel.
- **[#121696](https://github.com/openclaw/openclaw/pull/121696) — fix: reject invalid memory parents and trim test facades** — closes a real memory-parent validation gap.
- **[#121677](https://github.com/openclaw/openclaw/pull/121677) — fix: make gateway stress results reflect real concurrency** — fixes QA RPC serialization that hid true concurrency metrics.
- **[#121658](https://github.com/openclaw/openclaw/pull/121658) — refactor(cloud-workers): centralize placement lifecycle fences** — consolidates worker dispatch/activation/reclaim lifecycle logic.
- **[#121664](https://github.com/openclaw/openclaw/pull/121664) — fix(update): record verified install receipts even when the handoff fails** — prevents dev-channel update campaigns from stalling on false-negative post-restart checks.
- **[#111205](https://github.com/openclaw/openclaw/pull/111205) — feat(codex): config to disable or scope the native hook relay** — gives operators a supported escape hatch for the Codex relay fan-out issue.
- **[#121695](https://github.com/openclaw/openclaw/pull/121695) — fix(ci): clear main reds from image actions, chat alerts, and release routing** — unblocks the merge gate for PRs against `main`.

Several important fixes are still open/in-flight, including **[#121647](https://github.com/openclaw/openclaw/pull/121647)** (durable context stalls in long sessions), **[#120398](https://github.com/openclaw/openclaw/pull/120398)** (detach service-managed tool children), and **[#120443](https://github.com/openclaw/openclaw/pull/120443)** (Codex compaction thread binding).

## 4. Community Hot Topics
The most active issues by comment count were:

| Issue | Comments | Subject |
|---|---|---|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | 47 | Silent reply failures recurring after #116277 was closed |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 33 | Memory trust tagging by source to prevent prompt-injection/memory poisoning |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | 18 | Tiered bootstrap file loading for progressive context control |
| [#86519](https://github.com/openclaw/openclaw/issues/86519) | 15 | Duplicate Telegram replies after 5.20 update (closed) |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | 14 | Per-agent cost budget enforcement at the gateway |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | 13 | Transcript projection livelock blocking the main thread |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | 12 | Write tool lacks append mode; cron sessions overwrite shared files |
| [#27445](https://github.com/openclaw/openclaw/issues/27445) | 12 | `announceTarget` option for sub-agent completion routing |

The underlying needs are clear: **users are frustrated by recurring silent reply and duplicate-delivery failures**, **want better memory security/trust boundaries**, and **want more granular control over context, cost, and sub-agent behavior**. The high reaction counts on [#27445](https://github.com/openclaw/openclaw/issues/27445) (👍5), [#28300](https://github.com/openclaw/openclaw/issues/28300) (👍5), and [#26037](https://github.com/openclaw/openclaw/issues/26037) (👍4) show strong community interest in orchestration controls, UI theming, and additional model provider support.

## 5. Bugs & Stability
Severity-ranked notable bugs updated in the last 24 hours:

**High severity / P1**
- **[#121058](https://github.com/openclaw/openclaw/issues/121058)** — Silent reply failures recurring even after #116277 was closed; monitoring still logs new occurrences. 47 comments, no dedicated fix PR visible.
- **[#86519](https://github.com/openclaw/openclaw/issues/86519)** — Telegram duplicate replies after v5.20; closed, but related duplicate-delivery reports continue to appear (e.g., [#96242](https://github.com/openclaw/openclaw/issues/96242), [#49381](https://github.com/openclaw/openclaw/issues/49381)).
- **[#115908](https://github.com/openclaw/openclaw/issues/115908)** — Session transcript projection can livelock under sustained writes, stalling the Node main thread and all channel transports.
- **[#40001](https://github.com/openclaw/openclaw/issues/40001)** — Write tool has no append mode; isolated cron sessions silently overwrite shared files like `memory/YYYY-MM-DD.md`.
- **[#97983](https://github.com/openclaw/openclaw/issues/97983)** — iOS/WebChat messages append to transcript but do not reliably trigger assistant replies.
- **[#47975](https://github.com/openclaw/openclaw/issues/47975)** — Subagent sessions persist after completion; main session becomes unresponsive.
- **[#89278](https://github.com/openclaw/openclaw/issues/89278)** — Codex OAuth refresh succeeds but cron/heartbeat fail with 10s auth refresh timeout. Related fix PR: [#121764](https://github.com/openclaw/openclaw/pull/121764).
- **[#119087](https://github.com/openclaw/openclaw/issues/119087)** — Gateway cold start regressed ~2.5x on 1-vCPU containers.
- **[#97616](https://github.com/openclaw/openclaw/issues/97616)** — Hook/tool child processes leak and accumulate as zombies. Fix PR in flight: [#120398](https://github.com/openclaw/openclaw/pull/120398).
- **[#111010](https://github.com/openclaw/openclaw/issues/111010)** — Detached native Codex subagents lose hook relay when the parent turn releases.
- **[#100941](https://github.com/openclaw/openclaw/issues/100941)** — Gateway drops concurrent in-process WebSocket connections (1006) under parallel tool fan-out.
- **[#118793](https://github.com/openclaw/openclaw/issues/118793)** — Claude CLI "session limit" error dies instead of triggering model fallback.
- **[#119333](https://github.com/openclaw/openclaw/issues/119333)** — Codex `request_user_input` exposed in Default mode but rejected at runtime.

**Moderate / P2**
- **[#119401](https://github.com/openclaw/openclaw/issues/119401)** — Direct/DM `NO_REPLY` suppression ignores `silentReply` policy.
- **[#45494](https://github.com/openclaw/openclaw/issues/45494)** — Cron jobs silently time out during sustained LLM API outages instead of fast-failing.
- **[#120735](https://github.com/openclaw/openclaw/issues/120735)** — Telegram stickers arrive as raw file refs and are never staged to disk.
- **[#119796](https://github.com/openclaw/openclaw/issues/119796)** — Windows vitest teardown fails with `EBUSY` on agent state SQLite.
- **[#82662](https://github.com/openclaw/openclaw/issues/82662)** — Isolated cron `agentTurn` fails with "setup timed out before runner start" on all fallback models.

There are active fix PRs for several of these, including [#120398](https://github.com/openclaw/openclaw/pull/120398) (zombie child processes), [#112932](https://github.com/openclaw/openclaw/pull/112932) (tombstoned OAuth re-seed), [#120443](https://github.com/openclaw/openclaw/pull/120443) (Codex compaction), [#121647](https://github.com/openclaw/openclaw/pull/121647) (durable state stalls), and [#121673](https://github.com/openclaw/openclaw/pull/121673) (approval routing).

## 6. Feature Requests & Roadmap Signals
Strong roadmap signals from user-requested features:

**Security & trust**
- [#7707](https://github.com/openclaw/openclaw/issues/7707) — Memory trust tagging by source to prevent memory-poisoning attacks.
- [#15032](https://github.com/openclaw/openclaw/issues/15032) — Per-spawn tool restrictions for sub-agents as a prompt-injection defense.

**Context & cost control**
- [#22438](https://github.com/openclaw/openclaw/issues/22438) — Tiered bootstrap file loading to save context-window budget.
- [#42475](https://github.com/openclaw/openclaw/issues/42475) — Per-agent daily/monthly cost budgets enforced at the gateway.
- [#9986](https://github.com/openclaw/openclaw/issues/9986) — Trigger model fallback on context-length-exceeded.
- [#38568](https://github.com/openclaw/openclaw/issues/38568) — Inject current context-window usage % into the system prompt runtime section.

**Sub-agent & session orchestration**
- [#27445](https://github.com/openclaw/openclaw/issues/27445) — `announceTarget` for sub-agent completion routing.
- [#40001](https://github.com/openclaw/openclaw/issues/40001) — Append mode for the write tool.
- [#43562](https://github.com/openclaw/openclaw/issues/43562) — Make the hardcoded "personal assistant" identity preamble configurable.

**UX & operability**
- [#33413](https://github.com/openclaw/openclaw/issues/33413) — Slack tool-level progress in thread status.
- [#40786](https://github.com/openclaw/openclaw/issues/40786) — `.gitignore`-like exclude patterns for the backup CLI.
- [#45565](https://github.com/openclaw/openclaw/issues/45565) — Route gateway lifecycle warnings to a dedicated channel.
- [#39406](https://github.com/openclaw/openclaw/issues/39406) — Suppress transient tool error warnings after successful retry.
- [#117178](https://github.com/openclaw/openclaw/issues/117178) — Confirm disruptive lifecycle actions in Control UI/apps.

Given the volume of in-flight PRs around OAuth refresh, Codex compaction, and tool child-process handling, the next release will likely prioritize **reliability fixes for delivery/session state** and **auth/OAuth expiry handling**, while **memory security tagging** and **cost/context controls** remain the most-watched feature themes.

## 7. User Feedback Summary
User sentiment is mixed: there is clear appreciation for active maintenance, but recurring regressions are causing frustration. The biggest pain points are **silent/missing replies**, **duplicate messages across channels**, **data loss from file overwrites**, and **OAuth/auth timeout failures**. Several users explicitly noted that closed issues (e.g., [#116277](https://github.com/openclaw/openclaw/issues/121058)) did not actually stop their failure mode, highlighting a need for better regression coverage. On the positive side, users are actively requesting advanced controls around memory trust, cost budgets, and sub-agent tool restrictions — a sign that the project is being adopted for serious multi-agent and production workloads.

## 8. Backlog Watch
Long-running or unresolved items needing maintainer attention:

- **[#7707](https://github.com/openclaw/openclaw/issues/7707)** — Memory trust tagging by source; open since Feb 3, 33 comments, labeled `needs-maintainer-review`, `needs-product-decision`, `needs-security-review`.
- **[#22438](https://github.com/openclaw/openclaw/issues/22438)** — Tiered bootstrap loading; open since Feb 21, 18 comments, with linked PR still open.
- **[#40001](https://github.com/openclaw/openclaw/issues/40001)** — Write tool append mode; open since Mar 8, 12 comments, P1 data-loss impact.
- **[#27445](https://github.com/openclaw/openclaw/issues/27445)** — `announceTarget` sub-agent routing; open since Feb 26, 12 comments, 👍5.
- **[#15032](https://github.com/openclaw/openclaw/issues/15032)** — Per-spawn tool restrictions; open since Feb 12, 7 comments, security-related.
- **[#9986](https://github.com/openclaw/openclaw/issues/9986)** — Fallback on context-length-exceeded; open since Feb 5, 5 comments.
- **[#40786](https://github.com/openclaw/openclaw/issues/40786)** — Backup exclusion patterns; open since Mar 9, 9 comments, security/data-exposure relevance.
- **[#26037](https://github.com/openclaw/openclaw/issues/26037)** — Ali Bailian coding-plan support; open since Feb 25, 👍4.
- **[#89278](https://github.com/openclaw/openclaw/issues/89278)** — Codex OAuth refresh timeout; P1 regression open since Jun 2, with a related fix PR now under review.
- **[#119087](https://github.com/openclaw/openclaw/issues/119087)** — Gateway cold-start regression; P1 open since Aug 4 and still needing maintainer review/product decision.

These backlog items represent a mix of **early-2026 feature requests** that have not moved and **P1 regressions** that are still awaiting maintainer decisions or reproducible proof.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — Personal AI Assistant / Agent Open Source Ecosystem
**Date:** 2026-08-11 | **Source:** Community digest summaries for 12 projects

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is in a high-velocity maturation phase: the top-tier projects (OpenClaw, IronClaw, Hermes, ZeroClaw, CoPaw) each moved 40–500 issues and 50+ PRs in a single day, with the core reference project OpenClaw alone merging 151 PRs in 24 hours. The competitive battleground has shifted from raw feature counts to **reliability engineering** — silent message delivery failures, token-burning agent loops, auth/OAuth expiry, and resource leaks dominate user complaints across nearly every project. Simultaneously, **MCP is consolidating as the universal integration standard**, memory security/prompt-injection defense is becoming table stakes, and cost/context governance is emerging as the next differentiation frontier. A second tier of lightweight community variants (NanoBot, NanoClaw, PicoClaw) is iterating rapidly on specific niches (MCP-first UX, Telegram UX, privacy), while protocol-focused and sandbox-focused projects (NullClaw, Moltis) show lower momentum. The ecosystem is healthy but fragmented: each project is solving the same core reliability problems independently, suggesting room for shared infrastructure or cross-project learning.

---

## 2. Activity Comparison

*Health score reflects: activity volume, closure/merge rates, release cadence, responsiveness to critical bugs (same-day fix PRs), and severity of open P1/S0 issues.*

| Project | Issues updated (closed) | PRs updated (merged/closed) | Release status | Health |
|---|---|---|---|---|
| **OpenClaw** | 500 (94) | 500 (151) | None | 7/10 |
| **IronClaw** | 50 (24) | 50 (17) | **v1.1.1-rc.1** | 9/10 |
| **Hermes Agent** | 50 (6) | 50 (17) | None | 7/10 |
| **ZeroClaw** | 50 (0) | 50 (1) | None | 6/10 |
| **CoPaw / QwenPaw** | 40 (6) | 50 (19) | v2.1.0 in prep | 7/10 |
| **LobsterAI** | 1 (1) | 34 (20) | None | 8/10 |
| **NanoBot** | 5 (3) | 23 (10) | None | 8/10 |
| **NanoClaw** | 3 (0) | 20 (10) | None | 6/10 |
| **PicoClaw** | 4 (n/a) | 9 (7) | None (v0.3.1) | 6/10 |
| **Moltis** | 3 (0) | 1 (0) | None | 5/10 |
| **NullClaw** | 1 (1) | 1 (0) | None | 5/10 |
| **ZeptoClaw** | 0 | 0 | None | 3/10 |

**Key observations:**
- **IronClaw** leads on operational discipline: an urgent patch RC shipped, and 4 user-facing bugs filed this cycle already have same-day fix PRs.
- **OpenClaw** has 10× the raw activity of any peer, but its recurring P1 regressions (silent replies, duplicate delivery) and 500-item backlog cap its health score.
- **ZeroClaw** shows strong process maturity (RFC governance, security audits) but closed **zero** issues in the window — a red flag for execution throughput.
- **NanoBot** resolved a critical 10M-token infinite-loop bug within the same 24h window it was reported — the fastest critical-bug turnaround observed.

---

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Community scale:** 500 issues + 500 PRs touched daily is an order of magnitude above the next tier (IronClaw/Hermes/ZeroClaw at 50/50). This translates into unmatched channel coverage, integration breadth, and a 151-PR/day merge capacity no peer approaches.
- **Reference status:** OpenClaw is the de facto core reference implementation — downstream forks (LobsterAI explicitly patches the OpenClaw runtime; ZeroClaw references upstream OpenClaw issues) extend its reach beyond its own repo.
- **Feature surface:** No peer matches its combination of skills/memory management, sub-agent orchestration, cloud-workers fleet, and native Codex relay.
- **Self-healing velocity:** Even with a large backlog, closure rates are healthy (~19% issues, ~30% PRs touched), and maintainers land targeted fixes daily.

**Technical approach differences:**
- **Node.js/TypeScript gateway-centric monorepo**, whereas IronClaw's Reborn architecture leans on Rust tooling (cargo-component, Postgres data plane), Hermes is Python-based with a desktop/plugin SDK, and CoPaw is Python/Qwen-centric.
- **Cloud-workers fleet orchestration** for gateway lifecycle is unique among peers — most competitors run single-process gateways.
- **Native hook relay for Codex subagents** is a distinctive integration pattern; peers handle sub-agents purely in-process.

**Community size comparison:** OpenClaw's daily touched volumes (500/500) vs. IronClaw/Hermes/ZeroClaw/CoPaw (40–50/50) indicate roughly a 10:1 activity ratio. Its backlog is proportionally larger, but its maintainer throughput (151 merges/day) exceeds entire peer projects' *monthly* merge counts.

**Vulnerability:** The dominant complaint cluster — silent reply failures recurring after closed fixes (#121058, 47 comments) — suggests regression coverage is not keeping pace with feature surface. IronClaw's same-day-fix discipline and NanoBot's rapid loop-bug turnaround are areas where OpenClaw's scale works against it.

---

## 4. Shared Technical Focus Areas

Requirements emerging independently across multiple projects:

| Focus area | Projects | Specific needs |
|---|---|---|
| **Message-delivery reliability** | OpenClaw, NanoBot, NanoClaw, IronClaw, Hermes, CoPaw | Silent reply failures, duplicate sends, message-ID reuse, delivery target routing, "agent ignored me" failure modes |
| **Agent-loop guardrails / token-burn prevention** | NanoBot, PicoClaw, IronClaw, LobsterAI | No-op edit loops (10M tokens burned), repeated identical tool failures, redundant fetch-retry loops, guardrails killing legitimate polling |
| **Memory security & trust boundaries** | OpenClaw, ZeroClaw, NanoClaw, CoPaw | Source-based trust tagging, per-agent knowledge attribution, privacy-safe DM logs, memory-poisoning defense |
| **MCP interoperability & OAuth** | NanoBot, NanoClaw, IronClaw, CoPaw, ZeroClaw | Browser OAuth for remote MCP servers, Streamable HTTP support, custom-provider compatibility, "Tool not found" after upgrades, custom CA trust |
| **Auth/OAuth expiry & pairing security** | OpenClaw, IronClaw, NanoClaw, ZeroClaw | Refresh-timeout failures, predictable pairing codes (Math.random → CSPRNG), linked-device auth, unauthenticated lockout endpoints |
| **Resource exhaustion** | Hermes, OpenClaw, CoPaw, Moltis | SQLite FD leaks (EMFILE), zombie child processes, idle CPU repaint loops, ignored container resource limits |
| **Cost/context governance** | OpenClaw, ZeroClaw, Hermes, CoPaw | Per-agent cost budgets, per-model context-window config, context-usage injection into system prompt, token/effort runtime footers |

The highest-signal pattern: **silent data loss** (messages, errors, or memory silently dropped) is the #1 trust-killer across all projects — reported as "indistinguishable from the agent ignoring me" (NanoClaw), "operator never learns the task failed" (NanoClaw), and "silent reply failures recurring" (OpenClaw).

---

## 5. Differentiation Analysis

| Project | Core differentiator | Target user | Architectural signature |
|---|---|---|---|
| **OpenClaw** | Broadest integration surface; reference implementation | General power users, self-hosters, multi-channel operators | Node.js, gateway-centric, cloud-worker fleet |
| **IronClaw** | Enterprise-grade ops discipline; Reborn architecture; AI-first design system | Ops-heavy teams, production deployments | Rust toolchain, Postgres data plane, architecture-audit culture |
| **Hermes Agent** | Desktop-first experience; plugin SDK; god-file refactoring | Desktop app users (Win/macOS/Linux) | Python, Desktop shell, SSH routing, Kanban boards |
| **ZeroClaw** | RFC-driven governance; security-audit culture | Security-conscious operators, contributors wanting process | Rust (rustdoc gates), strict risk classification, contributor tiers |
| **CoPaw / QwenPaw** | Chinese-market fit; ReMe memory system; Creator plugin | Qwen-model users, Chinese-speaking desktop users | Python, Console/Desktop UI, Auto-Dream memory |
| **LobsterAI** | Cowork/team collaboration UI; OpenClaw runtime fork | Teams wanting shared agent workspaces | Electron-style renderer, OpenClaw runtime patches |
| **NanoBot / NanoClaw / PicoClaw** | Lightweight, MCP-first, community-driven | Hobbyists, Telegram/Discord heavy users, Raspberry Pi | Simpler monorepos, fast PR turnaround, i18n contributions |
| **NullClaw** | A2A protocol interop (client + server) | Multi-instance / inter-agent communication | Minimal footprint, protocol-focused |
| **Moltis** | Sandbox/container backends (Apple Container); browser CDP control | Automation engineers needing isolated runtimes | Backend abstraction layer, browser screencast UI |

**Notable architectural fork:** LobsterAI *patches the OpenClaw runtime* rather than forking the product surface — evidence that OpenClaw is becoming platform substrate, not just a product.

---

## 6. Community Momentum & Maturity

**Tier 1 — Hyper-iteration (daily releases-grade velocity):**
- **IronClaw** — highest momentum-to-chaos ratio: RC release, same-day fixes, systematic architecture-audit closures.
- **OpenClaw** — volume leader; iterating fastest but fighting regression whack-a-mole.
- **Hermes Agent** — steady triage (17 PRs merged), P1 EMFILE cluster being actively retired, major sharding epic underway.
- **ZeroClaw** — process-rich but execution-starved (0 issue closures, `needs-author-action` PR pileup). Governance maturity exceeds delivery throughput.
- **CoPaw** — paired issue→fix-PR cycles show disciplined iteration; v2.1.0 imminent but 2.0.x regressions still accumulating.

**Tier 2 — Rapid iteration (focused scope):**
- **NanoBot** — fastest critical-bug response in the ecosystem; MCP OAuth feature shipped within a day of the request.
- **LobsterAI** — high merge rate (20 PRs), no new bug reports; in a comfortable UX-polish phase.
- **NanoClaw** — heavy refactoring with a critical message-drop fix stuck in review — momentum without a release valve.

**Tier 3 — Steady / maintenance:**
- **PicoClaw** — healthy community contributions (i18n, security, Telegram UX) but a critical tool-loop bug waiting on PR review.
- **Moltis** — maintenance phase; no merges, three backend bugs open, flagship browser-UI PR stalled 4+ months.

**Tier 4 — Low / dormant:**
- **NullClaw** — stable but nearly dormant (1 issue, 1 stale Dependabot PR).
- **ZeptoClaw** — no activity in 24h.

---

## 7. Trend Signals

1. **Reliability is the new feature.** Every project's top complaint is silent failure or data loss — not missing features. Expect "delivery receipts" and "observable failure" to become selling points. **Value for developers:** instrument every silent-failure path; a logged-and-dropped message is worse than a crash.

2. **Token-burn incidents are forcing loop guardrails.** The NanoBot 10M-token incident and PicoClaw's silent `max_tool_iterations` spins show that agent loops are a financial and trust liability. **Value for developers:** no-op detection, repeated-failure early termination, and token budgets are now baseline safety features, not nice-to-haves.

3. **MCP is consolidating as the universal integration bus** — but OAuth, provider-compatibility normalization, and schema validation are the friction points. Projects winning are those shipping one-click OAuth presets and vendor-neutral plugin boundaries. **Value for developers:** build MCP-native, not provider-native.

4. **Memory security is becoming table stakes.** Memory trust tagging, per-agent knowledge attribution, and prompt-injection defense appear simultaneously across OpenClaw, ZeroClaw, and NanoClaw. **Value for developers:** treat memory as an untrusted input with provenance; "trust by source" is the emerging pattern.

5. **Cost/context governance is the next killer feature.** Per-agent budgets, context-window percentage injection, model-specific context limits, and token/effort footers are being requested or built in OpenClaw, ZeroClaw, Hermes, and CoPaw. **Value for developers:** usage transparency features are high-leverage differentiators.

6. **Sub-agent orchestration is moving from primitive to controllable.** `announceTarget` routing, per-spawn tool restrictions, approval-request targeting, and busy-mode routing are converging across projects. **Value for developers:** the multi-agent future needs explicit control planes, not just spawning primitives.

7. **Cross-agent protocols are emerging.** NullClaw's `a2a_call` client tool (A2A protocol v0.3.0) signals demand for inter-agent communication beyond monolithic gateways. **Value for developers:** A2A/MCP interop will be a hiring and architecture consideration within 12 months.

8. **Desktop/WebUI UX is an active arms race** — Hermes (sidebar, HUD), CoPaw (Console streaming, IME fixes), IronClaw (Storybook design system), LobsterAI (Cowork file cards), and OpenClaw (Control UI dialogs) are all investing simultaneously. **Value for developers:** webview-based agents are commoditizing; polish and platform-specific correctness (IME, X11, Windows) are the differentiators.

9. **Governance maturity correlates with throughput risk.** ZeroClaw's 7-day/unanimity RFC process is being challenged by its own contributors as too slow — a cautionary signal that process overhead can outpace delivery. IronClaw's lighter-weight "audit → batch-close" pattern produces better outcomes. **Value for developers:** lightweight, reversible decisions beat heavyweight consensus.

---

**Bottom line for decision-makers:** The ecosystem is converging on a shared reliability baseline (delivery guarantees, loop guardrails, memory security, auth resilience) while differentiating on platform (OpenClaw = breadth, IronClaw = ops discipline, Hermes = desktop, CoPaw = China market, ZeroClaw = security governance). OpenClaw remains the strategic default for breadth and community, but IronClaw's execution discipline and NanoBot's incident-response speed are the patterns to emulate. MCP compatibility and cost governance are the two investments most likely to pay off across any project in this space over the next 6–12 months.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-11

## Today's Overview

NanoBot saw very high activity over the last 24 hours: 23 PRs were updated (13 open, 10 merged/closed) and 5 issues were updated (2 open, 3 closed). No new releases were published. The busiest areas were MCP integration robustness, WebUI architecture/security, and agent-loop safeguards. Several critical bugs were reported, including a token-burning infinite loop in Dream memory consolidation and a gateway crash caused by MCP connection failures. Overall, the project shows healthy momentum, with maintainers and community contributors shipping fixes and features at a rapid pace.

## Releases

No new releases were published in this digest window.

## Project Progress

Notable merged/closed PRs in the last 24 hours:

- **MCP browser OAuth support** — [#5316](https://github.com/HKUDS/nanobot/pull/5316) adds browser-based OAuth for remote Streamable HTTP and SSE MCP servers, including one-click presets for Xmind, Notion, and Linear.
- **Reject no-op file edits** — [#5325](https://github.com/HKUDS/nanobot/pull/5325) fixes `edit_file` calls where `old_text` and `new_text` are identical, directly addressing the infinite loop reported in [#5324](https://github.com/HKUDS/nanobot/issues/5324).
- **WebUI security hardening** — [#5317](https://github.com/HKUDS/nanobot/pull/5317) moves WebUI state-changing operations to authenticated WebSocket request/reply frames.
- **Gateway-owned settings services** — [#5321](https://github.com/HKUDS/nanobot/pull/5321) refactors WebUI settings into a gateway-scoped service with serialized atomic updates.
- **Agent runtime refactor** — [#5319](https://github.com/HKUDS/nanobot/pull/5319) replaces reflective runtime state access with an explicit `RuntimeControl` protocol and redacts credential-bearing config fields.
- **WebUI event projection refactor** — [#5318](https://github.com/HKUDS/nanobot/pull/5318) extracts deterministic event projection helpers for `useNanobotStream`.
- **WebUI UX recovery improvements** — [#5315](https://github.com/HKUDS/nanobot/pull/5315) improves workspace chat creation failure recovery, empty states, and auth focus styling.
- **Weixin forced QR login** — [#5310](https://github.com/HKUDS/nanobot/pull/5310) makes forced Weixin login perform a fresh QR flow across CLI and WebUI.

## Community Hot Topics

The most active issues by comment count were both fixed or addressed within the window:

- [#5297](https://github.com/HKUDS/nanobot/issues/5297) — [CLOSED] Feature request: MCP OAuth web authorization. The user needed support for services like Xmind's MCP endpoint and suggested gateway-based authorization. This was addressed by PR [#5316](https://github.com/HKUDS/nanobot/pull/5316).
- [#5324](https://github.com/HKUDS/nanobot/issues/5324) — [CLOSED] Bug: Dream memory consolidation enters an infinite loop when `edit_file` accepts no-op edits. The issue reported 23 minutes of abnormal runtime and over 10M tokens consumed. Fix PR [#5325](https://github.com/HKUDS/nanobot/pull/5325) is already merged/closed.

Two open issues are likely to become hot if they remain unresolved:

- [#5327](https://github.com/HKUDS/nanobot/issues/5327) — Nanobot randomly repeats the same message multiple times while reasoning.
- [#5311](https://github.com/HKUDS/nanobot/issues/5311) — Agnes AI custom provider double-encodes nested-object tool arguments as JSON strings, causing MCP schema validation failures.

## Bugs & Stability

Ranked by severity:

- **Critical — Dream memory infinite loop / token exhaustion**  
  [#5324](https://github.com/HKUDS/nanobot/issues/5324) caused a memory-consolidation task to run for 23 minutes and consume more than 10M tokens. The trigger was `edit_file` accepting no-op edits. Fix: [#5325](https://github.com/HKUDS/nanobot/pull/5325), already closed.

- **High — MCP failure can crash the entire gateway**  
  [#5300](https://github.com/HKUDS/nanobot/issues/5300) reports that a remote MCP HTTP 530 error triggered an anyio cancel-scope crash, causing gateway process hang, leaked tasks, and very high CPU usage. The issue is closed, but no explicit fix PR appears in the visible data.

- **Medium — Repeated messages while reasoning**  
  [#5327](https://github.com/HKUDS/nanobot/issues/5327) is an open bug where NanoBot randomly repeats the same phrase multiple times during reasoning. No comments or fix PR yet.

- **Medium — Custom provider nested-object argument encoding**  
  [#5311](https://github.com/HKUDS/nanobot/issues/5311) breaks MCP tool calls when using Agnes AI due to nested object/array fields being JSON-encoded as strings. Fix PR: [#5314](https://github.com/HKUDS/nanobot/pull/5314), currently open.

## Feature Requests & Roadmap Signals

- **MCP OAuth for remote servers** was the clearest user-driven feature request. It is already implemented in [#5316](https://github.com/HKUDS/nanobot/pull/5316), so it is likely to appear in the next release.
- **New provider gateway: OrcaRouter** — [#5328](https://github.com/HKUDS/nanobot/pull/5328) adds OrcaRouter as a named OpenAI-compatible gateway provider, suggesting continued expansion of the provider ecosystem.
- **Tabbed pane workbench** — [#5322](https://github.com/HKUDS/nanobot/pull/5322) proposes a WebUI tabbed workspace with multi-pane session layouts, indicating a significant UX upgrade is in progress.
- **Agent Plugins integration with CLI Apps** — [#5288](https://github.com/HKUDS/nanobot/pull/5288) aims to make plugin boundaries vendor-neutral and portable, which would strengthen NanoBot's ecosystem story.

## User Feedback Summary

User feedback in this window centers on four practical pain points:

- **MCP services requiring web OAuth are unusable** without a browser-based authorization flow. The Xmind MCP use case was explicit, and the project responded quickly with OAuth presets.
- **Resource/cost control matters**: the Dream memory infinite loop burned roughly half a month's token usage in one incident. Users expect guardrails against no-op edits and runaway loops.
- **Custom provider compatibility is fragile**: Agnes AI's nested-object encoding bug shows that OpenAI-compatible providers are not always truly compatible; users need schema-aware normalization.
- **Failure isolation is critical**: one MCP connection failure should not bring down the whole gateway. The crash report in [#5300](https://github.com/HKUDS/nanobot/issues/5300) highlights a stability risk that likely needs deeper architectural attention.

Overall, users are actively reporting issues with concrete detail, and maintainers are responding quickly. The main dissatisfaction signals are around resource exhaustion and stability, not missing features.

## Backlog Watch

Open PRs that may need maintainer attention:

- [#5271](https://github.com/HKUDS/nanobot/pull/5271) — **P0** fix preventing stale background task saves from overwriting session data. Open since Aug 6; session-data integrity issue.
- [#5179](https://github.com/HKUDS/nanobot/pull/5179) — MCP SDK v2 migration with legacy compatibility. Open since Jul 30 and tagged with conflicts.
- [#5257](https://github.com/HKUDS/nanobot/pull/5257) — Bound sustained-goal continuation when a turn goes idle. Tagged with conflicts; related to token-waste prevention.
- [#5299](https://github.com/HKUDS/nanobot/pull/5299) — Expose structured token usage records. Tagged with conflicts; useful for diagnostics and cost tracking.
- [#5323](https://github.com/HKUDS/nanobot/pull/5323) — Split settings backend by domain. Large refactor tagged with conflicts.
- [#5328](https://github.com/HKUDS/nanobot/pull/5328) — OrcaRouter provider addition. New provider feature, currently open.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-11

## 1. Today's Overview

Hermes Agent is seeing **very high activity**: 50 issues and 50 PRs were updated in the last 24 hours, with 44 issues still open/active and 33 PRs open. No new release was published during this window. The main energy areas are **repo-wide god-file sharding/refactoring**, **SQLite/file-descriptor exhaustion (EMFILE) fixes**, **Desktop backend/orphan process cleanup**, and **session-state/cron delivery reliability**. Maintainers closed 6 issues and 17 PRs were merged/closed, indicating steady triage and forward progress. Overall project health looks strong, though several P1 resource-leak and Desktop regressions remain open.

## 2. Releases

No new releases in the last 24 hours. No changelog, breaking-change notes, or migration guidance to report.

## 3. Project Progress

**Notable closed/merged PRs visible in the top items:**
- [#83545](https://github.com/NousResearch/hermes-agent/pull/83545) — `fix(ssh): make Windows sandbox routing reliable` (closed; keeps SSH file paths in the POSIX namespace and makes OpenSSH ControlMaster configurable).
- [#83397](https://github.com/NousResearch/hermes-agent/pull/83397) — `[Bug] SQLite file descriptor leak: close SessionDB connections on exception paths` (closed as duplicate, likely folded into the wider EMFILE cleanup cluster).

**Closed issues updated in the last 24h:**
- [#75269](https://github.com/NousResearch/hermes-agent/issues/75269) — SessionDB retaining WAL readers from finished worker threads, exhausting `RLIMIT_NOFILE`.
- [#78872](https://github.com/NousResearch/hermes-agent/issues/78872) — Desktop orphaned local `hermes serve` backends causing EMFILE.
- [#80560](https://github.com/NousResearch/hermes-agent/issues/80560) — Plugin SDK React #310 crash on Windows Desktop.
- [#79428](https://github.com/NousResearch/hermes-agent/issues/79428) — Second-window renderer crash (React #310).
- [#83475](https://github.com/NousResearch/hermes-agent/issues/83475) — Browser toolset never surfacing after successful `agent_browser` post-setup.
- [#45762](https://github.com/NousResearch/hermes-agent/issues/45762) — Telegram Rich Message body text rendering oversized.

**Active feature/refactor PRs advancing today:**
- [#83546](https://github.com/NousResearch/hermes-agent/pull/83546) and [#83547](https://github.com/NousResearch/hermes-agent/pull/83547) — byte-verbatim extraction from god files as part of the sharding epic.
- [#83552](https://github.com/NousResearch/hermes-agent/pull/83552) — global Kanban worker concurrency cap across boards/profiles.
- [#83550](https://github.com/NousResearch/hermes-agent/pull/83550) — gateway now respects routed profile busy modes (`queue` / `steer`).
- [#83551](https://github.com/NousResearch/hermes-agent/pull/83551) — explains silently auto-approved dangerous commands.
- [#83553](https://github.com/NousResearch/hermes-agent/pull/83553) — opt-in runtime footer fields: `tokens_in`, `tokens_out`, `effort`.
- [#82821](https://github.com/NousResearch/hermes-agent/pull/82821), [#82822](https://github.com/NousResearch/hermes-agent/pull/82822), [#82823](https://github.com/NousResearch/hermes-agent/pull/82823) — Desktop sidebar session/project/profile UX improvements.

## 4. Community Hot Topics

- [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) — **64 comments**: The repo-wide god-file sharding epic. The community and maintainers are actively debating how to decompose 20 god files without regressions. This is the clearest roadmap signal for the project's architecture direction.
- [#75269](https://github.com/NousResearch/hermes-agent/issues/75269) — **9 comments**: SessionDB WAL-reader FD leak. Closed, but the issue resonates strongly because it caused real `EMFILE` outages in long-running gateways.
- [#66824](https://github.com/NousResearch/hermes-agent/issues/66824) — **7 comments**: `cronjob create` with `repeat='forever'` fails with a type-comparison error. Still open since July 18.
- [#69451](https://github.com/NousResearch/hermes-agent/issues/69451) — **5 comments**: Desktop custom endpoints ignore the active Hermes profile. Users are asking for strict per-profile isolation in the Desktop UI.
- [#63395](https://github.com/NousResearch/hermes-agent/issues/63395) — **5 comments**: Matrix cron delivery succeeds but then floods logs with `database pool has been stopped` and disconnects. Points to E2EE/lifecycle fragility in platform adapters.
- [#7908? Actually #5908](https://github.com/NousResearch/hermes-agent/issues/5908) — **2 comments + 2 👍**: Long-standing `kimi-coding` credential-pool `base_url` resolution bug.

Underlying needs: users want **predictable resource usage**, **clean module boundaries**, **profile-scoped Desktop behavior**, and **resilient cron delivery across chat platforms**.

## 5. Bugs & Stability

**P1 / highest severity:**
- [#83512](https://github.com/NousResearch/hermes-agent/issues/83512) — `SessionDB._read_conns` leaks one SQLite FD per agent thread; EMFILE after ~40h. Marked duplicate, but it confirms the same failure mode as #75269 and remains a critical stability issue for long-running processes.
- [#83445](https://github.com/NousResearch/hermes-agent/issues/83445) — **Regression**: Kanban UI shows no boards because `kanban.db` is rewritten as an empty 4KB SQLite file and the `boards` table is never created. No dedicated fix PR is visible yet.

**P2 / active pain points:**
- [#83455](https://github.com/NousResearch/hermes-agent/issues/83455) — `/refine` rejects completed Desktop sessions when the in-memory agent cache is absent.
- [#83484](https://github.com/NousResearch/hermes-agent/issues/83484) — Scheduled cron jobs retry indefinitely when the delivery target is a closed/stateless API-server session.
- [#83473](https://github.com/NousResearch/hermes-agent/issues/83473) — HUD becomes unusable on Linux/X11 (Xfce): band never re-arms from click-through, input wedges until restart.
- [#83006](https://github.com/NousResearch/hermes-agent/issues/83006) — TUI Ctrl+Z keybinding suspends the whole process group; a pasted `0x1A` byte can trigger it accidentally.
- [#83017](https://github.com/NousResearch/hermes-agent/issues/83017) — Windows Desktop HUD mode cannot be exited via in-app control.
- [#80898](https://github.com/NousResearch/hermes-agent/issues/80898) — macOS orphaned `hermes serve` backends accumulate across repeated Desktop restarts.
- [#83542](https://github.com/NousResearch/hermes-agent/pull/83542) is an open fix addressing the EMFILE follow-up cluster: restart-path gateway reap, Desktop-owned gateway shutdown cleanup, SSH ulimit, and scandir hardening.
- [#77297](https://github.com/NousResearch/hermes-agent/pull/77297) — open fix to stop app-managed gateway on Desktop backend shutdown.

**P3 / lower severity:**
- [#83482](https://github.com/NousResearch/hermes-agent/issues/83482) — Linux Desktop closing the window leaks an orphaned backend (duplicate).
- [#83380](https://github.com/NousResearch/hermes-agent/issues/83380) — Artifacts page shows 1970 timestamps and fails to render generated images (timestamp unit bug).
- [#82816](https://github.com/NousResearch/hermes-agent/issues/82816) — Session auto-title generation fails 100% on OpenAI-compatible providers that reject `response_format=json_schema`, e.g. vLLM guided-grammar backends.

## 6. Feature Requests & Roadmap Signals

Strong roadmap signals from recent PRs and issues:

- **God-file sharding is effectively policy now.** Epic [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) and per-file shard issues ([#78641](https://github.com/NousResearch/hermes-agent/issues/78641), [#78643](https://github.com/NousResearch/hermes-agent/issues/78643), [#78640](https://github.com/NousResearch/hermes-agent/issues/78640), [#78642](https://github.com/NousResearch/hermes-agent/issues/78642)) are being actively implemented through small extractions like [#83546](https://github.com/NousResearch/hermes-agent/pull/83546) and [#83547](https://github.com/NousResearch/hermes-agent/pull/83547).
- **Desktop UX is getting visible investment**: session steppers, Sessions/Projects/Profiles view switcher, and per-profile project-state cleanup ([#82821](https://github.com/NousResearch/hermes-agent/pull/82821), [#82822](https://github.com/NousResearch/hermes-agent/pull/82822), [#82823](https://github.com/NousResearch/hermes-agent/pull/82823)).
- **Cost/usage transparency**: negative pricing sentinels from OpenRouter are treated as unknown ([#83549](https://github.com/NousResearch/hermes-agent/pull/83549)), and runtime footer token/effort fields are added ([#83553](https://github.com/NousResearch/hermes-agent/pull/83553)).
- **Plugin ecosystem growth**: [#80758](https://github.com/NousResearch/hermes-agent/pull/80758) adds content-addressed patch anchoring to the `hashline-guard` plugin; [#77915](https://github.com/NousResearch/hermes-agent/pull/77915) initializes static/dynamic NeMo Relay plugin components.
- **Community feature request**: [#9485](https://github.com/NousResearch/hermes-agent/issues/9485) proposes "HermesClaw", a visual CRM frontend for Hermes-driven sales outreach. No implementation PR yet, but it is a clear product-direction signal.

Likely next-version candidates: EMFILE/orphan-process cleanup (#83542), Desktop sidebar navigation improvements (#82821–#82823), profile-busy-mode routing (#83550), approval-transparency messaging (#83551), and the first wave of god-file shard extractions.

## 7. User Feedback Summary

Users are reporting both serious pain and visible relief:

- **Pain points**: repeated `EMFILE`/too-many-open-files failures on macOS and Linux; orphaned `hermes serve` backends; Windows Desktop React #310 renders; HUD exit/input wedge bugs on Linux and Windows; cron jobs that fail silently or retry forever when delivery origin is an API-server session; Desktop custom endpoints not honoring the active profile.
- **Satisfaction signals**: several high-visibility bugs were closed within the last 24 hours, including the SessionDB WAL-reader leak, Desktop orphan-backend accumulation, Telegram rich-text sizing, and two Windows renderer-crash reports. This suggests maintainers are responsive to the most disruptive user-facing issues.
- **Community sentiment** in the sharding epic is engaged but cautious: users and maintainers want clean module boundaries without destabilizing behavior changes.

## 8. Backlog Watch

These items look like they need maintainer attention:

- [#66824](https://github.com/NousResearch/hermes-agent/issues/66824) — `cronjob create` with `repeat='forever'` fails. Open since July 18, 7 comments, P2.
- [#69451](https://github.com/NousResearch/hermes-agent/issues/69451) — Desktop custom endpoints ignore active profile. Open since July 22, 5 comments, P2, and still awaiting a decision.
- [#63395](https://github.com/NousResearch/hermes-agent/issues/63395) — Matrix encrypted-room cron delivery destabilizes the adapter with `database pool has been stopped`. Open since July 12, P3 but platform-critical.
- [#5908](https://github.com/NousResearch/hermes-agent/issues/5908) — `kimi-coding` credential-pool `base_url` not re-resolved on load. Open since **April 7**, P2, with 2 👍; this is the oldest visible unresolved issue.
- [#9485](https://github.com/NousResearch/hermes-agent/issues/9485) — "HermesClaw" CRM frontend feature request. Open since April 14, no PR yet.
- [#77297](https://github.com/NousResearch/hermes-agent/pull/77297) — Desktop gateway shutdown fix. Open since August 3, relevant to the EMFILE cluster; needs review/merge attention.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-11

## 1. Today's Overview

PicoClaw activity over the past 24 hours is moderate-to-healthy: 4 issues were updated, 9 PRs were touched, and 7 PRs moved to a closed state. No new release was published, so the latest referenced project version remains **v0.3.1 (`2cf030d2`)**. The most important signals are two open bugs affecting real users: repeated identical tool failures can leave a user without an answer, and chat-routed non-default agents break `/clear` and auto-compression. There is also meaningful community contribution energy, including Telegram table rendering, Czech i18n completion, security hardening, and config fixes. Many items carry `[stale]` labels, indicating active backlog cleanup rather than necessarily abandoned work.

## 2. Releases

**No new releases were published in this 24-hour window.** The latest referenced PicoClaw version remains **0.3.1 (`2cf030d2`)**. No release notes, breaking changes, or migration guides are available for this digest period.

## 3. Project Progress

Seven PRs were closed/merged in the last 24 hours:

- **[#3327 — feat(telegram): render tables with native rich messages](https://github.com/sipeed/picoclaw/pull/3327)**  
  Advances Telegram UX by detecting GFM/HTML tables and sending Bot API rich messages instead of monospaced code blocks.

- **[#3297 — fix(security): harden remote prompt and exec boundaries](https://github.com/sipeed/picoclaw/pull/3297)**  
  Closes important security work: keeps remote sender metadata out of system instructions, defaults remote exec to disabled, requires per-call approval, and enforces origin policy at execution time. Also migrates configs to schema v4.

- **[#3295 — fix(channels): prevent SplitMessage hang on oversized fence headers](https://github.com/sipeed/picoclaw/pull/3295)**  
  Resolves a channel-message splitter hang and includes regression coverage.

- **[#2132 — feat(config): support model-specific max_tokens and fix config key coupling](https://github.com/sipeed/picoclaw/pull/2132)**  
  Long-running PR closed after months; decouples config lookup keys from runtime model IDs and adds granular model-level overrides.

- **[#3296 — i18n: complete Czech code wrap labels](https://github.com/sipeed/picoclaw/pull/3296)**  
  Completes Czech localization for code-wrap UI labels.

- **[#3326 — fix(web): remove duplicate pnpm lock entries](https://github.com/sipeed/picoclaw/pull/3326)**  
  Fixes broken `pnpm install --frozen-lockfile` by removing duplicate `semver@7.8.5` entries.

- **[#1547 — fix: merge PR #1466 #1465](https://github.com/sipeed/picoclaw/pull/1547)**  
  Old PR closed; brings together fixes from two earlier open PRs.

## 4. Community Hot Topics

The most active discussion items are issue threads, with comment counts ranging from 1 to 3:

- **[Issue #3301 — `/clear` and session auto-compression don't work in non-default agent chats](https://github.com/sipeed/picoclaw/issues/3301)** — 3 comments  
  Reported by a Raspberry Pi user on Discord/Telegram. Underlying need: dispatch rules must not break core session-management behavior for non-default agents.

- **[Issue #3298 — Add AI Router as an OpenAI-compatible provider preset](https://github.com/sipeed/picoclaw/issues/3298)** — 2 comments  
  Submitted by the AI Router maintainer. The generic `openai` provider already works, but users want a named, discoverable preset instead of manual `api_base` configuration.

- **[Issue #3294 — `/list models` only shows the current model](https://github.com/sipeed/picoclaw/issues/3294)** — 2 comments  
  A command-completeness/UX complaint. Users expect `/list models` to show every configured model, not just the active one.

- **[Issue #3311 — Repeated identical tool failure loops silently to `max_tool_iterations`](https://github.com/sipeed/picoclaw/issues/3311)** — 1 comment  
  A production-affecting Telegram report: the agent never answers because the tool loop keeps retrying the same failure. The matching fix PR is #[#3312](https://github.com/sipeed/picoclaw/pull/3312).

## 5. Bugs & Stability

Ranked by severity:

1. **High — [#3311: Repeated identical tool failure loops silently, no answer to user](https://github.com/sipeed/picoclaw/issues/3311)**  
   A turn can spin for minutes until `max_tool_iterations` is hit. This is a trust-breaking bug. A fix PR is open: **[#3312 — stop turn early on repeated identical tool failure](https://github.com/sipeed/picoclaw/pull/3312)**.

2. **Medium/High — [#3301: `/clear` and auto-compression broken for dispatched non-default agents](https://github.com/sipeed/picoclaw/issues/3301)**  
   Chat routing to a non-default agent bypasses normal session cleanup. No linked fix PR is visible yet.

3. **Medium — [PR #3314: `customAllowPatterns` not honored for shell commands](https://github.com/sipeed/picoclaw/pull/3314)**  
   Open fix: commands like `git push` added to the allow list still fail because default deny patterns take precedence in `guardCommand`.

4. **Low/Medium — [#3294: `/list models` only displays the current model](https://github.com/sipeed/picoclaw/issues/3294)**  
   Closed, but it reflects a real UX gap in Telegram’s configured-model listing.

5. **Resolved — [#3295: `SplitMessage` hang on oversized fence headers](https://github.com/sipeed/picoclaw/pull/3295)**  
   Stability fix closed; the splitter now falls back to bounded raw splitting.

6. **Resolved security work — [#3297: hardened remote prompt and exec boundaries](https://github.com/sipeed/picoclaw/pull/3297)**  
   Closed; reduces accidental remote-execution risk.

## 6. Feature Requests & Roadmap Signals

- **Named provider presets are in demand.**  
  [Issue #3298](https://github.com/sipeed/picoclaw/issues/3298) requests an AI Router preset. Although closed, it signals interest in first-class OpenAI-compatible provider presets beyond the generic `openai` provider.

- **Richer Telegram message rendering is progressing.**  
  [PR #3327](https://github.com/sipeed/picoclaw/pull/3327) adds native rich table rendering. This suggests the project is investing in channel-specific UX quality.

- **Power-user model configuration is advancing.**  
  [PR #2132](https://github.com/sipeed/picoclaw/pull/2132) adds model-specific `max_tokens` and fixes config key coupling. This points toward more granular per-model configuration in future releases.

- **Agent-loop reliability is on the roadmap.**  
  [PR #3312](https://github.com/sipeed/picoclaw/pull/3312) is a direct response to the repeated-failure loop bug. It is a strong candidate for the next patch/minor release.

## 7. User Feedback Summary

- **Pain point: silent failures.** Users in production on Telegram report never getting an answer when a tool fails repeatedly. This is the strongest negative signal in the current data.

- **Pain point: configuration doesn’t always match expectations.** `customAllowPatterns` not working for `git push`, and `/list models` showing only one model, both indicate that users expect configured settings to be fully respected and visible.

- **Pain point: dispatch rules break essential chat features.** The `/clear` and auto-compression issue with non-default agents suggests routing flexibility comes with hidden side effects.

- **Positive signal: contributors are actively fixing ecosystem issues.** Czech i18n completion, Telegram table rendering, lockfile repair, and SplitMessage hang fixes all show a community willing to improve the project.

- **Overall sentiment:** The project is active and responsive, but core agent-loop reliability and config trust remain the most urgent user-facing concerns.

## 8. Backlog Watch

Items that may need maintainer attention:

- **[Issue #3301 — dispatch rules break `/clear` and auto-compression](https://github.com/sipeed/picoclaw/issues/3301)**  
  Open since July 29, updated but no linked fix PR. This is the most commented open issue in the current window.

- **[Issue #3311 + PR #3312 — repeated tool failure fix](https://github.com/sipeed/picoclaw/pull/3312)**  
  Critical bug has a proposed fix, but the PR remains open. This is a high-priority item for the next release.

- **[PR #3314 — `customAllowPatterns` allow-list fix](https://github.com/sipeed/picoclaw/pull/3314)**  
  Open; affects users who legitimately want to allow shell commands. Needs review and merge.

- **Old PRs finally closed.**  
  [PR #2132](https://github.com/sipeed/picoclaw/pull/2132) and [PR #1547](https://github.com/sipeed/picoclaw/pull/1547) were both closed after months-long lifetimes. This shows maintainers are churning the backlog, but also suggests that some important work can sit for a long time before receiving attention.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-11

## 1. Today's Overview

NanoClaw saw elevated activity over the last 24 hours, with 20 PRs touched (10 open, 10 merged/closed) and 3 open issues carrying forward, but no new releases. The project is in a heavy refactoring and hardening phase: maintainers merged a broad series of architectural cleanups (module lifecycle hooks, migration registries, channel renderers) while the community converged on two urgent reliability themes — silent loss of inbound messages and Telegram pairing security. A coordinated fix for message-ID reuse is already in review (#3224), suggesting maintainers are treating reliability regressions as top priority. No release was cut, so fixes remain available only on `main`.

## 2. Releases

No new releases in the last 24 hours. There are no release notes, changelogs, breaking-change, or migration details to report.

## 3. Project Progress

Ten PRs were merged or closed, spanning four areas:

**Architecture / refactoring (all by zvi-fried):**
- [#3212 refactor(db): add module migration registry](https://github.com/nanocoai/nanoclaw/pull/3212)
- [#3213 refactor(channels): register question renderers](https://github.com/nanocoai/nanoclaw/pull/3213)
- [#3214 refactor(host): unify module lifecycle hooks](https://github.com/nanocoai/nanoclaw/pull/3214)
- [#3215 fix(permissions): redact DM resolution logs](https://github.com/nanocoai/nanoclaw/pull/3215)
- [#3211 docs(skills): define single-responsibility integration rule](https://github.com/nanocoai/nanoclaw/pull/3211)
- [#3186 refactor: add host seams for skill-owned capabilities](https://github.com/nanocoai/nanoclaw/pull/3186)

**Reliability / messaging:**
- [#3228 fix: deduplicate turn-scoped chat delivery](https://github.com/nanocoai/nanoclaw/pull/3228) (merged)

**Privacy:**
- [#3222 feat(permissions): add opt-in privacy-safe DM logs](https://github.com/nanocoai/nanoclaw/pull/3222) (merged)

**Docs / ops:**
- [#3216 docs(hardened-image): note install_packages covers apt and npm only](https://github.com/nanocoai/nanoclaw/pull/3216) (merged)
- [#3219 Telegram and container env](https://github.com/nanocoai/nanoclaw/pull/3219) (closed)

Net effect: the merged surface this week is mostly internal plumbing — the module/migration/lifecycle refactors lay groundwork for cleaner plugin and capability management — plus concrete fixes to duplicate chat delivery and log leakage of DM metadata.

## 4. Community Hot Topics

The liveliest discussion is on long-running reliability issues rather than new features:

- **[#3075 — Silent log loss + inbound message duplicate-insert errors after long uptime; no systemd unit installed](https://github.com/nanocoai/nanoclaw/issues/3075)** — only item with comments this cycle. The reporter (running NanoClaw v2 on WSL2/Docker, Matrix channel) describes two linked symptoms: silent log loss after long uptime and duplicate-insert errors for inbound messages. The underlying need is clear: operators want durable, observable message ingestion on long-lived deployments, and the issue pairs an operational gap (no systemd unit) with a data-path bug.
- **[#3226 — Inbound messages silently dropped when a platform reuses a message id](https://github.com/nanocoai/nanoclaw/issues/3226)** — zero comments but high signal. A contributor (dweekly) opened both the issue and a fix PR in the same day, describing a failure mode indistinguishable from "the agent ignored me." This resonated with #3075, indicating a shared root cause around session-database primary-key collisions.

## 5. Bugs & Stability

Ranked by severity:

1. **CRITICAL — Silent inbound message drop on platform ID reuse** ([#3226](https://github.com/nanocoai/nanoclaw/issues/3226)). Platforms that restart/reuse message IDs cause primary-key insert failures; messages are logged-and-dropped, never reaching the agent, with no user-visible error. Fix exists: **[#3224 fix(session-db): preserve inbound messages across platform ID reuse](https://github.com/nanocoai/nanoclaw/pull/3224)** (open, by dweekly). This is the same failure family described in #3075.

2. **HIGH — Scheduled-task errors silently dropped** ([#3223](https://github.com/nanocoai/nanoclaw/issues/3223)). When a scheduled-task turn throws, the error is written as a `chat` message carrying routing fields from the trigger — but task messages deliberately carry no routing fields, so the error is unroutable and the operator never learns the task failed. No fix PR yet.

3. **MEDIUM-HIGH — Log loss + duplicate-insert errors after long uptime** ([#3075](https://github.com/nanocoai/nanoclaw/issues/3075), open since 2026-07-17). Includes an ops gap (no systemd unit installed) and is likely at least partially addressed by #3224.

4. **SECURITY — Predictable Telegram pairing codes** ([#3225](https://github.com/nanocoai/nanoclaw/pull/3225) and [#3229](https://github.com/nanocoai/nanoclaw/pull/3229)). Both open PRs replace `Math.random()` with CSPRNG `crypto.randomInt` and harden store-file permissions. Redundant fixes from two authors; maintainers should pick one and merge promptly.

## 6. Feature Requests & Roadmap Signals

The strongest roadmap signal is **remote Streamable HTTP MCP servers**: [#3092](https://github.com/nanocoai/nanoclaw/pull/3092) (engine + Claude provider, open since 07-19) and its companion [#3221](https://github.com/nanocoai/nanoclaw/pull/3221), which extends the same support to codex and opencode providers. The companion PR suggests the feature is close to complete and is a strong candidate for the next release.

Other in-flight features likely to land soon:
- **Agent templates → Agent Plugins 1.0.0** ([#3220](https://github.com/nanocoai/nanoclaw/pull/3220)) plus the setup-wizard stamping flow ([#2909](https://github.com/nanocoai/nanoclaw/pull/2909), open since 07-02) — a format migration and UX feature that has been cooking for over a month.
- **Bounded JSON input from stdin** for the `ncl` CLI ([#3218](https://github.com/nanocoai/nanoclaw/pull/3218)) — a generic, low-risk ergonomics addition.
- **Opt-in privacy-safe DM logs** ([#3222](https://github.com/nanocoai/nanoclaw/pull/3222), merged) signals a broader privacy-hardening direction that may continue.

## 7. User Feedback Summary

The reporting patterns show real pain around **silent failures**: #3226's "from the user's side this is indistinguishable from 'the agent ignored me'" and #3223's "the operator never learns the task failed" are the same complaint from two angles — the system loses data without any observable signal. Contributors are frustrated enough by the message-reuse bug to author their own root-cause analysis and fix PR (#3224), which is a positive sign of a healthy, participatory community. On the operations side, #3075 voices dissatisfaction with long-uptime stability (log loss, duplicate errors) and packaging (missing systemd unit). The quick turnaround of fixes (#3228 dedup merged, #3215 log redaction merged, #3222 privacy logs merged) shows maintainers are responsive, which likely offsets some of the stability frustration. The duplicate Telegram-pairing PRs (#3225 and #3229) suggest users are also actively security-auditing the codebase.

## 8. Backlog Watch

Items needing maintainer attention:

- **[#3075 — Silent log loss + duplicate-insert errors; no systemd unit](https://github.com/nanocoai/nanoclaw/issues/3075)** — open since 2026-07-17 (~3.5 weeks), the longest-standing issue in the active set. Only 1 comment despite being a serious reliability report; it should be cross-linked with #3226/#3224.
- **[#2909 — feat(setup): template setup flow in the wizard and first-agent stamping](https://github.com/nanocoai/nanoclaw/pull/2909)** — open since 2026-07-02, with no visible comment activity in the data. Blocking or paired with #3220; the core team should resolve the design overlap.
- **[#3092 — Remote Streamable HTTP MCP servers](https://github.com/nanocoai/nanoclaw/pull/3092)** — open since 2026-07-19; now has a companion PR #3221. Needs a maintainer decision on the config schema before it can merge.
- **[#3193 — fix(telegram): update Chat SDK for rich messages](https://github.com/nanocoai/nanoclaw/pull/3193)** — open since 2026-08-06, no recent comments. Possibly in review limbo; worth triaging.
- **[#3224 / #3225 / #3229 — inbound-message fix and duplicate Telegram security fixes](https://github.com/nanocoai/nanoclaw/pull/3224)** — the two Telegram PRs are near-identical and should be reconciled quickly, and #3224 should be prioritized given the critical user-facing data loss it fixes.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-11

## 1. Today's Overview
NullClaw saw minimal activity in the last 24 hours: one issue was updated to a closed state, one dependency-related PR remains open, and no new releases or merged PRs were recorded. The most notable signal is Issue #700, which proposes/contributes an `a2a_call` client tool for calling remote A2A agents. The only open PR is a routine Dependabot Docker base image bump. Overall, the project appears stable but low-velocity, with possible maintainer backlog on dependency housekeeping.

## 2. Releases
None. No new NullClaw releases were published in the reporting window.

## 3. Project Progress
No PRs were merged or closed within the last 24 hours.

The only closed item is [Issue #700 — Add a2a_call client tool for calling remote agents](https://github.com/nullclaw/nullclaw/issues/700), last updated 2026-08-10. This issue describes a community-built `a2a_call` tool that would allow NullClaw to send A2A protocol v0.3.0 `message/send` JSON-RPC requests to remote agents. Since no associated merged PR is visible in the current data, the exact implementation status is not fully confirmed, but the closure suggests progress toward a client-side A2A capability.

## 4. Community Hot Topics
- [Issue #700 — Add a2a_call client tool](https://github.com/nullclaw/nullclaw/issues/700): Closed, 1 comment, 1 👍. This is the most active item and reflects community interest in enabling NullClaw to call remote agents rather than only serve A2A requests.
- [PR #956 — ci(deps): bump alpine from 3.23 to 3.24](https://github.com/nullclaw/nullclaw/pull/956): Open, no listed comments/reactions. It remains the only open PR and has been pending for nearly two months.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported or updated in the last 24 hours.

The only stability-related activity is [PR #956](https://github.com/nullclaw/nullclaw/pull/956), which bumps the Docker base image `alpine` from 3.23 to 3.24. This is a routine dependency update rather than a bug fix. No known issues require severity ranking at this time.

## 6. Feature Requests & Roadmap Signals
The clearest roadmap signal is the `a2a_call` client tool described in [Issue #700](https://github.com/nullclaw/nullclaw/issues/700). NullClaw currently serves the A2A protocol v0.3.0 but has no client-side implementation. The author’s use case—running a public-facing “doorman” instance alongside a private personal agent—highlights demand for multi-instance, inter-agent communication.

If the `a2a_call` contribution is accepted and integrated, it is likely to appear in a future release as an official or community-supported client tool.

## 7. User Feedback Summary
The only direct user feedback in this window comes from the author of Issue #700. They run two NullClaw instances and need one agent to send structured A2A requests to another. The issue received a 👍 and is closed, suggesting the proposal was well-received. No negative feedback or dissatisfaction was visible in the current data.

## 8. Backlog Watch
- [PR #956 — Docker: bump alpine from 3.23 to 3.24](https://github.com/nullclaw/nullclaw/pull/956): Opened 2026-06-15 and still open as of 2026-08-10. This Dependabot PR has waited nearly two months for maintainer review/merge. It is low risk but should be actioned to keep Docker images current.
- If Issue #700 was closed without a corresponding merged PR, maintainers should ensure the `a2a_call` capability is tracked in an implementation issue or pull request to avoid losing the contribution.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-11

## 1. Today's Overview

IronClaw is in a high-velocity cycle: **50 issues and 50 PRs updated in the last 24 hours**, with a healthy mix of closure and new work (26 open/24 closed issues; 33 open/17 merged-or-closed PRs). A new release candidate, **ironclaw-v1.1.1-rc.1**, shipped as an urgent patch targeting channel delivery/pairing, custom MCP compatibility, WebUI streaming stability, and durable retrieval. The Reborn architecture restructure continues to dominate the tracker, with a wave of audit-found architecture defects closed this window alongside several epic completions. Notably, the project is demonstrating strong operational discipline: multiple user-facing bugs filed this cycle already have same-day fix PRs. Overall health looks solid — CI and architecture debt are being systematically retired while new feature work (Telegram linked-device, profile-agnostic storage, trace logprob reductions) advances in parallel.

## 2. Releases

**ironclaw-v1.1.1-rc.1** (2026-08-10) — [Release](https://github.com/nearai/ironclaw/releases)

An urgent patch candidate for the 1.1 line, concentrating on:
- **Channel delivery and pairing**
- **IronHub/custom MCP compatibility**
- **WebUI streaming stability**
- **Durable retrieval**
- **Safe upgrades** from both supported stable predecessors

**Migration note:** For users upgrading from 1.0.0, the release instructions state: *"Stop all writers"* before upgrading — a required quiescence step.

## 3. Project Progress

**Notable merged/closed PRs in this window:**

- **[PR #7336](https://github.com/nearai/ironclaw/pull/7336)** (closed) — `fix(loop-host)`: dedup consumed steering replays. Preserves a bounded durable identity window for consumed steering messages and prevents delayed queued-message replays from triggering duplicate assistant replies.
- **[PR #7446](https://github.com/nearai/ironclaw/pull/7446)** (closed) — `feat(channels)`: rich working indicator with varied working copy, reactions, failure states, and progress nudges across Slack and Telegram.

**Architecture/audit closures (19 of top-30 issues closed):** The doc-truth and target-architecture soundness audits produced a batch of closures covering the extension_host → loops re-layer ([#7145](https://github.com/nearai/ironclaw/issues/7145)), untracked architecture ratchet slack ([#7147](https://github.com/nearai/ironclaw/issues/7147)), share-based composition mass gate poisoning ([#7151](https://github.com/nearai/ironclaw/issues/7151)), same-layer coupling guard gaps ([#7149](https://github.com/nearai/ironclaw/issues/7149)), and vendor-sanction pin gaps ([#7150](https://github.com/nearai/ironclaw/issues/7150)).

**Epics completed:** Skills self-creation/selection epic ([#6941](https://github.com/nearai/ironclaw/issues/6941)), manifest-declared `/model` and `/status` commands ([#6733](https://github.com/nearai/ironclaw/issues/6733)), custom/arbitrary MCP server support ([#6727](https://github.com/nearai/ironclaw/issues/6727)), and the Telegram/Channel/Canonical-Messaging epic trio ([#6483](https://github.com/nearai/ironclaw/issues/6483), [#6484](https://github.com/nearai/ironclaw/issues/6484), [#6485](https://github.com/nearai/ironclaw/issues/6485)).

**Major new PRs opened (advancing the roadmap):**
- **[PR #7456](https://github.com/nearai/ironclaw/pull/7456)** (XL) — profile-agnostic durable storage, rooting profiles at `IRONCLAW_REBORN_HOME` with typed security envelope
- **[PR #7464](https://github.com/nearai/ironclaw/pull/7464)** (XL) — Telegram linked-device auth, session custody, and standard-op tools
- **[PR #7468](https://github.com/nearai/ironclaw/pull/7468)** + **[#7469](https://github.com/nearai/ironclaw/pull/7469)** (XL) — opt-in per-token logprobs sidecar and envelope confidence aggregates
- **[PR #7474](https://github.com/nearai/ironclaw/pull/7474)** (XL) — batch fix for three "agent asserts unverified state" QA bugs, one commit per issue

## 4. Community Hot Topics

- **[Issue #7137](https://github.com/nearai/ironclaw/issues/7137)** (12 comments, open) — `live-canary` CI shard artifacts are 700MB–1.5GB each, totaling 5GB+ across 13 bundles. Community discussion centers on excluding regenerable/intermediate paths; a bot-authored fix ([PR #7466](https://github.com/nearai/ironclaw/pull/7466)) is already open. Underlying need: CI sustainability and triage practicality.
- **[Issue #7145](https://github.com/nearai/ironclaw/issues/7145)** (4 comments, closed) — WS2 `extension_host → loops` re-layer sizing methodology. Reflects deep architectural-care process: the team corrected a flawed sizing heuristic mid-execution.
- **[Issue #6257](https://github.com/nearai/ironclaw/issues/6257)** (3 comments, open) — `Invalid value (attachments.mime_type)` when sending/generating PDF files. User-reported via Slack; suspected typing/validation bug. No visible fix PR yet.
- **[Issue #7147](https://github.com/nearai/ironclaw/issues/7147)** (3 comments, closed) — Two shrink-only architecture ratchets carried untracked slack on `main`, and three open PRs held three different values of the same baseline. Shows process discipline around budget gates.
- **[Issue #5882](https://github.com/nearai/ironclaw/issues/5882)** (3 comments, closed) — Repeated Slack reconnects leave auth flow permanently broken, requiring extension reinstall. P2 QA-bug, now resolved.

## 5. Bugs & Stability

Ranked by severity:

1. **[#7447](https://github.com/nearai/ironclaw/issues/7447)** (new, open, epic v1.3.0) — **Agents fail after calling too many tools.** An agent got stuck in a redundant fetch-retry loop (4 near-duplicate GitHub queries with shrinking size limits) instead of paginating via `result_read`, exhausting the run's tool-call/turn budget. No fix PR yet; logged as an epic.
2. **[#7473](https://github.com/nearai/ironclaw/issues/7473)** (new, open) — **Duplicate connect-nudges.** `post_notice` collapses "delivered with no vendor ref" into "not delivered," releasing the anti-duplicate throttle — so already-nudged users receive duplicate "please connect" prompts. Applies to web push (always ref-less) and Slack when `postMessage` succeeds without a ref. **Fix PR [#7475](https://github.com/nearai/ironclaw/pull/7475) opened same day.**
3. **[#6257](https://github.com/nearai/ironclaw/issues/6257)** (open since 2026-07-19) — **PDF mime_type validation failure** on send/generate. User-visible and unresolved for ~3 weeks.
4. **[PR #7470](https://github.com/nearai/ironclaw/pull/7470)** (new, fix in PR) — `thread_index` rows without ordered-projection metadata are **invisible in `list_threads` and the sidebar**; the fix restores listability.
5. **[PR #7471](https://github.com/nearai/ironclaw/pull/7471)** (new, fix in PR) — Hosted runs die user-visibly with `lease_expired` because the process-journal heartbeat shares one **max-size-2 Postgres pool** with data-plane traffic; one read burst starves heartbeats. Fix isolates the heartbeat pool and recovers safe runs on lease expiry.
6. **[PR #7474](https://github.com/nearai/ironclaw/pull/7474)** (new, fix in PR) — Three Railway-QA bugs ([#7246](https://github.com/nearai/ironclaw/issues/7246), [#7247](https://github.com/nearai/ironclaw/issues/7247), [#7294](https://github.com/nearai/ironclaw/issues/7294)) where the **agent asserted automation/auth/memory state it never verified**; each reproduced deterministically before the fix.

**Resolved this window:** Slack setup failure ([#6834](https://github.com/nearai/ironclaw/issues/6834)) and Slack reconnect auth breakage ([#5882](https://github.com/nearai/ironclaw/issues/5882)) are both closed.

## 6. Feature Requests & Roadmap Signals

- **[#7467](https://github.com/nearai/ironclaw/issues/7467) + [PR #7456](https://github.com/nearai/ironclaw/pull/7456)** (new, risk: high) — **Profile-agnostic durable state**: re-root Reborn profiles directly at `IRONCLAW_REBORN_HOME` with a typed security envelope so profile transitions cannot weaken tenancy or strand data. Likely a v1.3.0 candidate.
- **[#7354](https://github.com/nearai/ironclaw/issues/7354)** (open, v1.3.0, target 2026-08-14) — **Extensions vNext**: Web Push, Rich Messaging, Telegram User Sessions, and a production-ready Signal channel. Directly advanced by the Telegram linked-device PR ([#7464](https://github.com/nearai/ironclaw/pull/7464)); target date is only days away.
- **[#7046](https://github.com/nearai/ironclaw/issues/7046)** (open, epic) — **Admin configuration via AI chat**: configure all tools, channels, and extensions conversationally instead of through the WebUI. Complements the channel-first onboarding epic ([#7044](https://github.com/nearai/ironclaw/issues/7044)).
- **[#7038](https://github.com/nearai/ironclaw/issues/7038)** (open, v1.3.0) — **Storybook + AI-first Design System** backed by a full proposal package (PR #7257); code-free OOBE prototype exists in [PR #6994](https://github.com/nearai/ironclaw/pull/6994).
- **[#7465](https://github.com/nearai/ironclaw/issues/7465)** (new, open) — **Company Brain FDE** epic; sparse description, early-stage signal for knowledge/retrieval product work.
- **[PR #7442](https://github.com/nearai/ironclaw/pull/7442)** (open) — Install every companion file published for IronHub skills, with normalized-path validation and digest verification; supersedes #7076.
- **[PR #7410](https://github.com/nearai/ironclaw/pull/7410)** (open) — Fair tool-search discovery: complete input signatures and deterministic representative-tool rounds, removing the mandatory `tool_describe` round trip.

**Prediction:** v1.3.0 will likely bundle Extensions vNext (Web Push/Signal/Telegram sessions), the design-system/OOBE work, and admin-via-chat — with the profile-agnostic storage migration as a strong candidate if risk can be retired in time.

## 7. User Feedback Summary

- **Slack reliability is the top recurring pain point.** Users reported setup failures on near.foundation accounts ([#6834](https://github.com/nearai/ironclaw/issues/6834)) and permanent auth breakage after repeated reconnects ([#5882](https://github.com/nearai/ironclaw/issues/5882)); both are now closed.
- **PDF attachments are broken for real users.** A customer (Michael Kelly via Slack) hit `Invalid value (attachments.mime_type)` on both send and generate ([#6257](https://github.com/nearai/ironclaw/issues/6257)) — open for three weeks with no fix in sight.
- **AGENTS.md edits don't propagate.** Users editing identity files in the WebUI expect the system prompt to update for current and future conversations, but the save is a no-op ([#3762](https://github.com/nearai/ironclaw/issues/3762)). Filed as customer P1, v1.3.0; open since May 18.
- **Agents waste budgets on redundant loops.** The too-many-tools failure ([#7447](https://github.com/nearai/ironclaw/issues/7447)) shows users observing agents retry near-identical queries instead of paginating — a practical efficiency complaint.
- **Duplicate nudges annoy connected users.** The connect-nudge throttle bug ([#7473](https://github.com/nearai/ironclaw/issues/7473)) sends repeated "please connect" prompts to users who already connected — a product-polish regression.
- **Positive signal:** maintainers are closing the loop fast — same-day fix PRs exist for #7473, #7474, #7470, and #7471, and the 1.1.1-rc.1 release explicitly targets stability surfaces users are touching.

## 8. Backlog Watch

- **[#3762](https://github.com/nearai/ironclaw/issues/3762)** (open since 2026-05-18, P1, v1.3.0) — AGENTS.md edits do not update system prompts. Low comment count but high user impact; no visible fix PR after ~12 weeks.
- **[#6257](https://github.com/nearai/ironclaw/issues/6257)** (open since 2026-07-19) — PDF `mime_type` error. User-visible, triaged, but unaddressed for 3+ weeks; deserves a fix or explicit deferral comment.
- **[PR #5101](https://github.com/nearai/ironclaw/pull/5101)** (open since 2026-06-20) — Small CI improvement (reuse cargo-component installer in live canary); waiting ~7 weeks. New-contributor authored — stale review risks discouraging participation.
- **[PR #6994](https://github.com/nearai/ironclaw/pull/6994)** (open since 2026-08-01) — OOBE design + integration plan for onboarding (v1.3.0 epic). Code-free docs branch; needs review commitment to keep the v1.3.0 onboarding timeline viable.
- **[#7137](https://github.com/nearai/ironclaw/issues/7137)** (open since 2026-08-04, 12 comments) — CI artifact bloat (700MB–1.5GB shards). Active discussion and a bot-authored fix PR ([#7466](https://github.com/nearai/ironclaw/pull/7466)); watch for merge and follow-up verification that retention targets are met.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-11

## 1. Today's Overview
LobsterAI saw high PR activity in the last 24 hours: **34 PRs updated, 20 merged/closed, 14 open**, while issue activity was minimal (1 closed issue). Development momentum was concentrated in **Cowork UI/UX features** and **OpenClaw/runtime stability fixes**, with a series of small feature PRs from `fisherdaddy` and several dependency upgrades from Dependabot. No new releases were published. The only issue update was a **stale bug closure**, indicating the maintainers are cleaning old issues rather than reacting to new user reports. Overall, the project looks healthy: active maintenance, steady dependency modernization, and quick turnaround on bug-fix PRs.

---

## 2. Releases
No new releases were published in this window.

---

## 3. Project Progress
Most closed/merged PRs today were aimed at improving the **Cowork experience** and fixing **stability/runtime issues**.

### Cowork UX & Features
- **#2472** – `feat(cowork): activity group collapse`  
  https://github.com/netease-youdao/LobsterAI/pull/2472
- **#2471** – `feat(cowork): render submitted file attachments as clickable cards`  
  https://github.com/netease-youdao/LobsterAI/pull/2471
- **#2469** – `feat(cowork): add collapse-agent-tasks shortcut and allow modifier shortcuts while typing`  
  https://github.com/netease-youdao/LobsterAI/pull/2469
- **#2468** – `refactor(cowork): unify streaming loading indicators into a single indicator`  
  https://github.com/netease-youdao/LobsterAI/pull/2468

### Stability / Runtime Fixes
- **#2470** – `fix(openclaw): surface provider runtime failures on late chat error`  
  Prevents real provider/LLM failures from being swallowed as stale tool errors.  
  https://github.com/netease-youdao/LobsterAI/pull/2470
- **#2454** – `fix(openclaw): stop tool-loop guard from killing legitimate polling`  
  https://github.com/netease-youdao/LobsterAI/pull/2454
- **#2467** – `fix(python-runtime): repair stale pip shims on Windows runtime upgrade`  
  https://github.com/netease-youdao/LobsterAI/pull/2467
- **#2466** – `fix/renderer init ipc stall retry`  
  https://github.com/netease-youdao/LobsterAI/pull/2466

### Dependency Updates (closed)
- **#1766** – Bump Vite from 5.4.21 to 8.0.13  
  https://github.com/netease-youdao/LobsterAI/pull/1766
- **#1764** – Bump React DOM from 18.3.1 to 19.2.6  
  https://github.com/netease-youdao/LobsterAI/pull/1764
- **#1763** – Bump `@vitejs/plugin-react` from 4.7.0 to 6.0.1  
  https://github.com/netease-youdao/LobsterAI/pull/1763

---

## 4. Community Hot Topics
Community discussion was very low. The only issue with comments was:

- **#1243** – `[BUG] qwen-portal-auth 插件配置循环写入导致网关频繁重启`  
  Comments: 2 | Status: closed as stale  
  https://github.com/netease-youdao/LobsterAI/issues/1243

**Underlying need:** users want stable gateway behavior. The issue describes `qwen-portal-auth` configuration being continuously rewritten, causing gateway restarts every 5–20 minutes. Although the issue was closed as stale, the underlying configuration-loop problem may still exist and could resurface.

No PRs had significant comment/reaction activity.

---

## 5. Bugs & Stability
No new bug reports arrived in the last 24 hours, but several stability fixes were closed:

### High Severity
- **#1243** – `qwen-portal-auth` config loop causes gateway restarts every 5–20 minutes on Windows.  
  Closed as stale; no fix PR linked in this data.  
  https://github.com/netease-youdao/LobsterAI/issues/1243

### Medium Severity (fixes landed/closed today)
- **#2470** – Provider runtime failures were being swallowed on late chat errors; now surfaced properly.  
  https://github.com/netease-youdao/LobsterAI/pull/2470
- **#2454** – Tool-loop guard was killing legitimate polling; fixed to avoid false-positive termination.  
  https://github.com/netease-youdao/LobsterAI/pull/2454
- **#2467** – Windows runtime upgrades could leave broken/outdated pip shims; now repaired and normalized.  
  https://github.com/netease-youdao/LobsterAI/pull/2467
- **#2466** – Renderer init IPC stall now retries, reducing hang/startup failures.  
  https://github.com/netease-youdao/LobsterAI/pull/2466

---

## 6. Feature Requests & Roadmap Signals
The most visible roadmap signal is the **continued investment in Cowork UX**:

- **#2473** – `feat(cowork): add right-click context menu for local file links`  
  New open PR adding open-with / save-as / copy-path / copy-contents / copy-image / reveal-in-folder actions.  
  https://github.com/netease-youdao/LobsterAI/pull/2473
- **#2471** – Submitted file attachments rendered as clickable cards after send.  
  https://github.com/netease-youdao/LobsterAI/pull/2471
- **#2472** – Activity group collapse for cleaner Cowork history.  
  https://github.com/netease-youdao/LobsterAI/pull/2472
- **#2469** – New collapse-agent-tasks shortcut and modifier-shortcut support while typing.  
  https://github.com/netease-youdao/LobsterAI/pull/2469

**Prediction:** the next LobsterAI release is likely to include a more polished Cowork file-handling flow: clickable attachments, contextual file actions, grouped activity, and improved keyboard shortcuts.

A notable open fix PR is **#2452** – `fix(openclaw): preserve provider for slashed model ids`, which is important for model IDs containing `/` (e.g. `deepseek-ai/DeepSeek-V4-Flash`).  
https://github.com/netease-youdao/LobsterAI/pull/2452

---

## 7. User Feedback Summary
Direct user feedback is limited, but the available signals show:

- **Pain point:** Gateway restart loops caused by plugin config mutation (#1243), showing a need for config stability and better diagnostics.
- **Workflow need:** Users want rich file handling in Cowork — non-image attachments should remain visible as cards, not degrade into raw text lines (#2471).
- **Workflow need:** Local file links should support common operations without leaving the app (#2473).
- **Satisfaction signal:** The number of merged UX/feature PRs suggests contributors are actively improving the product, likely responding to user friction around agent activity and file attachments.

Overall, no explicit praise or complaint surveys are available, but the issue/PR mix indicates the community is focused on practical usability and stability rather than requesting new model integrations.

---

## 8. Backlog Watch
The issue tracker is mostly quiet, but several open PRs need maintainer attention:

- **#2452** – `fix(openclaw): preserve provider for slashed model ids`  
  Open since **2026-08-07**, no comments yet. Important correctness fix for model IDs containing `/`.  
  https://github.com/netease-youdao/LobsterAI/pull/2452

- **#2473** – New Cowork file context-menu feature PR, opened 2026-08-11, needs review.  
  https://github.com/netease-youdao/LobsterAI/pull/2473

- **Dependabot dependency update PRs** opened on 2026-08-10 are waiting for review/merge:  
  - #2465 Vite 8.2.1  
  - #2464 React DOM 19.2.8  
  - #2463 @vitejs/plugin-react 6.0.5  
  - #2462 Mermaid 11.16.1  
  - #2461 eslint-plugin-react-hooks 7.1.1  
  - #2460 rimraf 6.1.3  
  - #2459 @nodesecure/js-x-ray 16.0.0  
  https://github.com/netease-youdao/LobsterAI/pull/2465  
  https://github.com/netease-youdao/LobsterAI/pull/2464  
  https://github.com/netease-youdao/LobsterAI/pull/2463  
  https://github.com/netease-youdao/LobsterAI/pull/2462  
  https://github.com/netease-youdao/LobsterAI/pull/2461  
  https://github.com/netease-youdao/LobsterAI/pull/2460  
  https://github.com/netease-youdao/LobsterAI/pull/2459

- **#1243** – Issue closed as stale, but if the `qwen-portal-auth` gateway restart bug is still reproducible, it may need reopening or a proper regression test.  
  https://github.com/netease-youdao/LobsterAI/issues/1243

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-11

## 1. Today's Overview
Moltis showed moderate activity over the last 24 hours, driven entirely by bug reporting: 3 issues were updated (all still open) and 1 long-running pull request saw activity. No releases were published and no PRs were merged or closed, so no feature landed in this window. Notably, two of the three reported bugs target the **apple-container backend**, suggesting that area is the current reliability hotspot. Overall project health is stable but trending toward a maintenance/bugfix phase, with the only substantive feature work (browser UI, PR #531) remaining open after more than four months.

## 2. Releases
No new releases were published in the last 24 hours. This section is omitted.

## 3. Project Progress
No pull requests were merged or closed in the reporting period. The only PR touched is **#531 – feat(browser): interactive browser viewing UI with CDP screencast** ([link](https://github.com/moltis-org/moltis/pull/531)), authored by penso and updated on 2026-08-10. This long-running feature (open since 2026-03-31) adds live browser session viewing via CDP screencast, mouse/keyboard/scroll interaction, session history with action logs, and per-agent cookie isolation profiles. While no merge occurred today, the update signals continued work or review on this substantial UI feature.

## 4. Community Hot Topics
- **Issue #1185 – Apple Container 1.x sandbox starts but Moltis treats it as not running** ([link](https://github.com/moltis-org/moltis/issues/1185)) — With 3 comments, this is the most discussed item. The underlying need is reliable state detection for Apple Container sandboxes; users need the tool's runtime state to match reality to avoid broken automation workflows.
- **PR #531 – Browser viewing UI with CDP screencast** ([link](https://github.com/moltis-org/moltis/pull/531)) — Although it has no comment count listed, its extended open lifetime and feature scope make it a community focal point. The demand signal: teams want a human-in-the-loop browser interface with session replay, not just headless automation.
- The two new issues from **holgzn** (#1188, #1189) are fresh reports on apple-container backend gaps, indicating concentrated community testing of that backend.

## 5. Bugs & Stability
Three open bugs were active in the last 24 hours, all targeting the Apple Container ecosystem. Ranked by severity:

1. **#1188 – resource limits not applied for apple-container backend** ([link](https://github.com/moltis-org/moltis/issues/1188)) — *High severity.* Ignored resource limits can lead to host resource exhaustion or noisy-neighbor behavior in multi-tenant setups. Reported by holgzn on 2026-08-10. No fix PR exists.
2. **#1185 – Apple Container 1.x sandbox starts but Moltis treats it as not running** ([link](https://github.com/moltis-org/moltis/issues/1185)) — *High severity.* False-negative status causes unnecessary restarts and broken orchestration logic. Reported by mikz on 2026-08-08, with 3 comments but no resolution yet.
3. **#1189 – Sandbox build failing due to wrong gogcli github URL** ([link](https://github.com/moltis-org/moltis/issues/1189)) — *Medium severity.* A build-time blocker that prevents sandbox creation entirely; likely a trivial URL fix, but it halts developer workflows. Reported by holgzn on 2026-08-10. No fix PR exists.

No crashes or regressions were reported outside the apple-container scope.

## 6. Feature Requests & Roadmap Signals
The clearest roadmap signal is **PR #531** ([link](https://github.com/moltis-org/moltis/pull/531)): an interactive browser viewing and control UI with CDP screencast, session history, and per-agent browser profiles. If merged, this would be a headline feature for the next release, addressing a long-standing desire for visible, debuggable browser automation.

Secondary signals come from the bug cluster: the apple-container backend needs feature-complete parity (resource limits, accurate state tracking). A near-term maintenance release fixing #1185 and #1188 is plausible, as these are behavioral gaps rather than design limitations. The gogcli URL issue (#1189) suggests a quick patch release may also be imminent.

## 7. User Feedback Summary
- **Pain point: backend state reliability.** Users report that Moltis's view of sandbox state diverges from reality (#1185), which breaks trust in automation.
- **Pain point: missing resource governance.** Limiting CPU/memory on apple-container is expected but silently ignored (#1188) — a classic "config accepted but not enforced" frustration.
- **Pain point: build friction.** A simple misconfigured dependency URL (#1189) is blocking sandbox builds entirely, indicating a possible lack of CI coverage for the apple-container build path.
- **Satisfaction signals:** Users are actively testing the latest version and filing detailed preflight-checked reports, which reflects an engaged and technically competent community. The absence of duplicate reports suggests maintainers are responsive and users are diligent readers of existing issues.

## 8. Backlog Watch
- **PR #531 – Interactive browser UI with CDP screencast** ([link](https://github.com/moltis-org/moltis/pull/531)) — Open since **2026-03-31** (over 4 months). This is the largest pending feature and is at risk of becoming stale. It needs maintainer review, merge, or explicit status update (e.g., "blocked on X" or "planned for vNext").
- **Issue #1185 – Apple Container sandbox false-negative state** ([link](https://github.com/moltis-org/moltis/issues/1185)) — Open since 2026-08-08 with 3 comments but no assignee or fix PR. As the most-commented issue, it deserves maintainer triage to confirm root cause and timeline.

---

*Digest generated from Moltis GitHub activity on 2026-08-11. All links reference moltis-org/moltis.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw / QwenPaw Project Digest — 2026-08-11

## 1. Today's Overview

- Activity is high: **40 issues updated in the last 24h** (34 open, 6 closed) and **50 PRs updated** (31 open, 19 merged/closed). **No new releases** were published.
- The project appears to be preparing a **v2.1.0 release**: PR [#6875](https://github.com/agentscope-ai/QwenPaw/pull/6875) prepares release notes and NEWS entries for v2.1.0.
- Current community attention is concentrated on **provider compatibility**, **MCP tool reliability**, **memory/ReMe behavior**, and **console/desktop UI regressions**.
- Several reported regressions already have paired fix PRs, e.g. [#6803](https://github.com/agentscope-ai/QwenPaw/issues/6803) → [#6809](https://github.com/agentscope-ai/QwenPaw/pull/6809), and [#6885](https://github.com/agentscope-ai/QwenPaw/issues/6885) → [#6889](https://github.com/agentscope-ai/QwenPaw/pull/6889), indicating active triage and iteration.

## 2. Releases

**None** in the last 24 hours.

However, release documentation PR [#6875](https://github.com/agentscope-ai/QwenPaw/pull/6875) suggests v2.1.0 is being finalized.

## 3. Project Progress

Notable merged/closed PRs in the update window:

- [#6809](https://github.com/agentscope-ai/QwenPaw/pull/6809) — **Closed**: Sanitize Chat Completions content for strict OpenAI-compatible providers (addresses #6803).
- [#6615](https://github.com/agentscope-ai/QwenPaw/pull/6615) — **Closed**: Handle corrupted agent config / invalid JSON in `load_agent_config`.
- [#6878](https://github.com/agentscope-ai/QwenPaw/pull/6878) — **Closed**: Add hidden-folders toggle to the project directory picker.
- [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) — **Closed**: Add reranker support for ReMe memory search (backend).

Open PRs showing active workstreams:

- [#6889](https://github.com/agentscope-ai/QwenPaw/pull/6889) — Fix IME event handling in Console.
- [#6884](https://github.com/agentscope-ai/QwenPaw/pull/6884) — Make Auto-Dream integration resilient to malformed LLM output.
- [#6880](https://github.com/agentscope-ai/QwenPaw/pull/6880) — Unify apps/plugins/skills marketplace.
- [#6877](https://github.com/agentscope-ai/QwenPaw/pull/6877) — Remember desktop window geometry.
- [#6772](https://github.com/agentscope-ai/QwenPaw/pull/6772) — ReMe Light: embedding hot updates and Daily Paper support.
- [#6870](https://github.com/agentscope-ai/QwenPaw/pull/6870) — Creator plugin: settings center, media generation orchestration, cross-platform hardening.
- [#6869](https://github.com/agentscope-ai/QwenPaw/pull/6869) — Accept string `task_timeout` and default background task timeouts.
- [#6845](https://github.com/agentscope-ai/QwenPaw/pull/6845) — Preserve assistant completion time in chat history.

## 4. Community Hot Topics

Most-commented issues in the last 24h:

- [#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) — **9 comments**: Docker 2.0.1 plugin market / app market always shows “maintenance”, making plugins unusable.
- [#6803](https://github.com/agentscope-ai/QwenPaw/issues/6803) — **6 comments** (closed): OpenAI-compatible requests rejected by strict providers like StepFun; fix PR #6809 is closed.
- [#6811](https://github.com/agentscope-ai/QwenPaw/issues/6811) — **5 comments**: OpenAI Responses continuation summary ignores `disable_thinking` and misreports 60s cancellation as malformed output.
- [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) — **5 comments**: Assistant message end time displays incorrectly after long thinking.
- [#4237](https://github.com/agentscope-ai/QwenPaw/issues/4237) — **4 comments**: In-chat observability for running shell commands — see/kill/extend timeout.
- [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) — **4 comments**: MCP tools consistently report “Tool not found” after upgrading to 2.0.
- [#6814](https://github.com/agentscope-ai/QwenPaw/issues/6814) — **4 comments**: SIGBUS in `sqlite3WalFindFrame` when opening Scroll history.db on macOS.
- [#6820](https://github.com/agentscope-ai/QwenPaw/issues/6820) — **4 comments**: Console UI only displays final output after tool calls / thinking completes, instead of streaming live.

**Underlying needs:** Users are asking for stricter provider compatibility, reliable MCP tool invocation, real-time streaming UI feedback, and better visibility/control over long-running background tasks.

## 5. Bugs & Stability

Ranked by severity:

1. [#6814](https://github.com/agentscope-ai/QwenPaw/issues/6814) — **High**: macOS crash/SIGBUS in SQLite WAL while opening Scroll history.db. No fix PR visible yet.
2. [#6885](https://github.com/agentscope-ai/QwenPaw/issues/6885) — **High**: Console UI crashes on Chinese IME `compositionEnd` during agent run; message queue unusable in v2.1.0b2. Fix PR [#6889](https://github.com/agentscope-ai/QwenPaw/pull/6889) is open.
3. [#6811](https://github.com/agentscope-ai/QwenPaw/issues/6811) — **High**: OpenAI Responses continuation summary blocks the main conversation and can misreport cancellation as malformed output.
4. [#6821](https://github.com/agentscope-ai/QwenPaw/issues/6821) — **High**: Thinking-mode models fail multi-turn chat with 400 errors because `reasoning_content` must be relayed back.
5. [#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) — **Medium/High**: Docker 2.0.1 plugin/app market remains in “maintenance” state, blocking installs.
6. [#6828](https://github.com/agentscope-ai/QwenPaw/issues/6828) — **Medium**: Console frontend repaints at idle, consuming ~20% CPU due to infinite CSS animations.
7. [#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) — **Medium**: MCP tool calls coerce numeric-like strings to numbers, causing API failures.
8. [#6813](https://github.com/agentscope-ai/QwenPaw/issues/6813) — **Medium**: Chat auto-title generation fails with `KeyError: '__aiter__'`.
9. [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) / [#6820](https://github.com/agentscope-ai/QwenPaw/issues/6820) — **UI regressions**: Incorrect completion timestamps and non-live streaming display.

Other stability reports include idle freezes ([#6780](https://github.com/agentscope-ai/QwenPaw/issues/6780)), antivirus killing QwenPaw during tasks ([#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847)), and Windows installer lock-file failures ([#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810)).

## 6. Feature Requests & Roadmap Signals

Strong roadmap signals from the community:

- [#4237](https://github.com/agentscope-ai/QwenPaw/issues/4237) — In-chat running-commands panel with kill / extend-timeout controls.
- [#6876](https://github.com/agentscope-ai/QwenPaw/issues/6876) — Background task panel should be collapsed/folded by default instead of occupying the chat stream.
- [#6585](https://github.com/agentscope-ai/QwenPaw/issues/6585) — Add a toggle to disable the dynamic “received characters” counter.
- [#6724](https://github.com/agentscope-ai/QwenPaw/issues/6724) — Configurable MCP tool-call timeout.
- [#6881](https://github.com/agentscope-ai/QwenPaw/issues/6881) — Auto-refresh session title after auto-memory updates.
- [#6841](https://github.com/agentscope-ai/QwenPaw/issues/6841) — Auto-Dream should tolerate single integration-unit failures; open PR [#6884](https://github.com/agentscope-ai/QwenPaw/pull/6884) targets this.
- [#6840](https://github.com/agentscope-ai/QwenPaw/issues/6840) — User asks for the full ReMe4 roadmap timeline: Auto-Link, tri-modal search, 4-category digest weights.
- [#4634](https://github.com/agentscope-ai/QwenPaw/issues/4634) — Remember desktop window geometry; PR [#6877](https://github.com/agentscope-ai/QwenPaw/pull/6877) is open.

**Prediction:** v2.1.0 final will likely include the already-open polish items — marketplace unification, window geometry, IME fixes, Auto-Dream resilience, and strict-provider sanitization. Larger items such as MCP timeouts and the running-commands panel are more likely to land in a later minor release.

## 7. User Feedback Summary

- Users generally value the project — one report calls it “非常不错的项目” ([#6585](https://github.com/agentscope-ai/QwenPaw/issues/6585)).
- Most dissatisfaction centers on **regressions after upgrading to 2.0.x/2.1.0b2**: Docker market unavailable, MCP tools “not found”, UI not streaming live, and desktop freezes.
- Chinese-language reports dominate UI/desktop concerns; English-language reports focus more on provider API strictness, Gemini/DeepSeek/OpenAI Responses compatibility, and memory internals.
- Plugin users on Windows face extra friction: installer locks ([#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810)), plugin module-name conflicts ([#6683](https://github.com/agentscope-ai/QwenPaw/issues/6683)), and Creator media generation not working ([#6807](https://github.com/agentscope-ai/QwenPaw/issues/6807)).
- Memory-related feedback shows users depend on Auto-Dream and ReMe, but want better resilience, truthful documentation, and clearer roadmap communication ([#6853](https://github.com/agentscope-ai/QwenPaw/issues/6853), [#6841](https://github.com/agentscope-ai/QwenPaw/issues/6841), [#6840](https://github.com/agentscope-ai/QwenPaw/issues/6840)).

## 8. Backlog Watch

Items that appear to need maintainer attention:

- [#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) — **High visibility, 9 comments**: Docker 2.0.1 plugin/app market unusable; no linked fix yet.
- [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) — MCP “Tool not found” after 2.0 upgrade; still open with related MCP complaints.
- [#4237](https://github.com/agentscope-ai/QwenPaw/issues/4237) — Long-standing feature request (May 12) for in-chat shell command observability.
- [#6814](https://github.com/agentscope-ai/QwenPaw/issues/6814) — macOS SIGBUS crash; no fix PR visible.
- [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) — Open PR since July 12: per-session model overrides; first-time contributor; appears to need review.
- [#6764](https://github.com/agentscope-ai/QwenPaw/pull/6764) — CI merge-gating PR; requires repository admin to import the ruleset.
- [#6772](https://github.com/agentscope-ai/QwenPaw/pull/6772) — Large ReMe Light embedding/Daily Paper PR; no visible review activity yet.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-11

## 1. Today's Overview

ZeroClaw shows sustained, high-velocity activity: **50 issues** and **50 PRs** were updated in the last 24 hours, with all 50 issues still open (0 closed) and 49 of 50 PRs open (1 closed/merged). **No new releases** shipped in this window; the project remains on the v0.8.x line (v0.8.3 is referenced in recent issues). The activity mix points to a project in a governance-and-hardening phase: a long-running RFC rollout tracker (#6808), a wave of community security-audit findings filed by `belumume`, accepted RFCs for per-model capability config and PR-label automation, and several large feature PRs stalled on author action. Overall health is mixed — contributor engagement and process maturity are strong, but the open S0/S1 security backlog and the number of `needs-author-action` PRs are risks to watch.

## 2. Releases

**No new releases in the last 24 hours.** No changelog, migration notes, or breaking-change announcements apply to this digest window.

## 3. Project Progress

One PR closed/merged in the window:

- [PR #8301 — test(hardware): cover catalog tool name format](https://github.com/zeroclaw-labs/zeroclaw/pull/8301) — test-only regression coverage asserting every catalog tool name is a non-empty, lower_snake_case ASCII identifier. Low-risk, XS, no production code change.

Notable PRs with updates **today (2026-08-11)** that remain open:

- [PR #8576 — fix(channels): env-var fallback for OpenAI STT credentials](https://github.com/zeroclaw-labs/zeroclaw/pull/8576) — addresses #7899; stale-candidate flag present.
- [PR #8486 — feat(gateway): OpenAI chat completions endpoint](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) — large (XL) gateway feature closing #8550; blocked on author action.
- [PR #9110 — fix(lark): constant_time_eq for verification_token](https://github.com/zeroclaw-labs/zeroclaw/pull/9110) — timing-attack fix (XS).
- [PR #9013 — refactor(config)!: move TodoWrite display config into zerocode](https://github.com/zeroclaw-labs/zeroclaw/pull/9013) — breaking schema refactor by principal contributor `tidux`.
- [PR #8955 — fix(telegram): batch media group attachments](https://github.com/zeroclaw-labs/zeroclaw/pull/8955) — XL, distinguished contributor.
- [PR #8561 — feat(channels/telegram): multi_message streaming mode](https://github.com/zeroclaw-labs/zeroclaw/pull/8561)
- [PR #8443 — feat(matrix): single-message progress drafts](https://github.com/zeroclaw-labs/zeroclaw/pull/8443)
- [PR #9126 — feat(plugins): validate typed instance config](https://github.com/zeroclaw-labs/zeroclaw/pull/9126)

Other active PRs updated in the last 24h: [PR #9867](https://github.com/zeroclaw-labs/zeroclaw/pull/9867) (CI automation for PR size labels, implementing #9345), [PR #9898](https://github.com/zeroclaw-labs/zeroclaw/pull/9898) (fixes misleading `Memory: none` banner in `zeroclaw status`), and [PR #9900](https://github.com/zeroclaw-labs/zeroclaw/pull/9900) (OpenAI Codex provider: stop retrying non-streaming against an endpoint that requires streaming).

## 4. Community Hot Topics

The most-discussed issues (sorted by comment count):

- [Issue #6808 — RFC: Work Lanes, Board Automation, and Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) (23 comments) — governance RFC/rollout tracker at Rev. 24; ratification **deferred** but rollout in progress. Signals a community actively negotiating process change while shipping.
- [Issue #7100 — RFC: Per-model capability & context-window config](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) (13 comments) — accepted, priority p1, risk:high; targets misreported vision support and incorrect 32K context fallback.
- [Issue #8692 — Tracker: Maintainer decision queue for RFCs](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) (12 comments) — the project's own decision-routing backlog; useful barometer of maintainer bandwidth.
- [Issue #9397 — RFC: empty WhatsApp Web `allowed_groups` as permit-none](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) (12 comments) — accepted/in-progress, high-risk security RFC sponsored by `belumume`.
- [Issue #9496 — RFC: Streamline RFC scope, discussion, voting, assignment](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) (7 comments) — community consensus that the 7-day/unanimity process is too slow.
- [Issue #9530 — RFC: risk precedence for test-only changes](https://github.com/zeroclaw-labs/zeroclaw/issues/9530) (7 comments) — resolves conflicting contributor docs.
- [Issue #9545 — Task: gate rustdoc warnings in required PR CI](https://github.com/zeroclaw-labs/zeroclaw/issues/9545) (3 comments, **1 👍** — the only reaction in the dataset).

**Underlying needs:** contributors want lighter-weight governance, clearer maintainer decision routing, automated label maintenance, and a harder security posture (several issues are user-audited findings with line-level citations against HEAD).

## 5. Bugs & Stability

Bugs updated in the last 24h, ranked by reported severity (labels/severity as filed):

**S0 — data loss / security risk**

- [Issue #9647 — Knowledge graph has no per-agent attribution](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) — any agent can read/mutate another agent's knowledge; in-progress, risk:high.
- [Issue #9855 — Matrix channel fails `.well-known/matrix/client` homeserver delegation](https://github.com/zeroclaw-labs/zeroclaw/issues/9855) — accepted, risk:high; bypasses standard discovery, breaking delegated homeservers.
- [Issue #9627 — git write verbs bypass the risk classifier via `-C` / `--git-dir`](https://github.com/zeroclaw-labs/zeroclaw/issues/9627) — in-progress, follow-up; approval gate can be circumvented.

**S1 — workflow blocked**

- [Issue #9207 — web_fetch returns garbage for gzip/brotli/deflate responses](https://github.com/zeroclaw-labs/zeroclaw/issues/9207) — in-progress; agents cannot parse compressed pages.
- [Issue #9425 — Running SOP jobs have no operator cancellation path](https://github.com/zeroclaw-labs/zeroclaw/issues/9425) — in-progress; dashboard lacks Stop/Cancel.
- [Issue #9035 — Docker Compose gateway can remain loopback-bound behind a published port](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) — in-progress; “Connection refused” after successful `up -d`.
- [Issue #9779 — `sops_dir` documented default not honored → SOPs silently never load](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) — accepted, p1, risk:high; no error or log line.

**S1 security-audit cluster (all in-progress, risk:high, filed by `belumume`)**

- [Issue #9393 — Bluesky/Reddit have no sender authorization](https://github.com/zeroclaw-labs/zeroclaw/issues/9393)
- [Issue #9395 — plugin wasi:http egress has no destination policy](https://github.com/zeroclaw-labs/zeroclaw/issues/9395)
- [Issue #9392 — LINE group messages skip allowlist and pairing handshake](https://github.com/zeroclaw-labs/zeroclaw/issues/9392)
- [Issue #9389 — unauthenticated POST /api/pair lockout keys on attacker-supplied header](https://github.com/zeroclaw-labs/zeroclaw/issues/9389)
- [Issue #9391 — command audit logging defaults to enabled but writes nothing](https://github.com/zeroclaw-labs/zeroclaw/issues/9391)

**S2 / S3**

- [Issue #9768 — daemon reload not on SIGUSR1; warning tells operators to send a daemon-killing signal](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) (accepted)
- [Issue #9796 — cron parent help prints invalid add-at/add-every/once examples](https://github.com/zeroclaw-labs/zeroclaw/issues/9796) (accepted)
- [Issue #9844 — dashboard CPU metric misidentifies measured process](https://github.com/zeroclaw-labs/zeroclaw/issues/9844) (accepted, p3)

**Fix PRs in flight (not yet merged):** #8713 (file_download SSRF opt-in), #9110 (constant-time Lark comparison), #9002 (keep agent turns alive after viewer disconnect), #9898 (memory-banner backend). No new S0/S1 bug was *closed* by a fix in this window.

## 6. Feature Requests & Roadmap Signals

Strongest roadmap signals (accepted/in-progress):

- **Per-model capability & context-window config** ([#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100), accepted, p1) — likely to land in the next minor release; touches capability checks, context budget, and UI display.
- **PR risk/size label automation** ([#9345](https://github.com/zeroclaw-labs/zeroclaw/issues/9345) accepted; implementation in [PR #9867](https://github.com/zeroclaw-labs/zeroclaw/pull/9867)).
- **Custom CA trust for remote MCP servers** ([#9339](https://github.com/zeroclaw-labs/zeroclaw/issues/9339), in-progress).
- **Rustdoc warnings CI gate** ([#9545](https://github.com/zeroclaw-labs/zeroclaw/issues/9545)).
- **RFC process streamlining** ([#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496)) — governance meta-change that could accelerate everything else.

Large feature PRs awaiting merge/author action: OpenAI-compatible gateway endpoint ([#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486)), PowerShell native shell ([#9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182)), Hailo-Ollama provider ([#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)), plugin typed-config validation ([#9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126)), diagnostic LLM-judge grader ([#9222](https://github.com/zeroclaw-labs/zeroclaw/pull/9222)).

**Prediction:** the next minor release will likely combine the accepted per-model config work, label automation, and a batch of the security fixes currently in-progress.

## 7. User Feedback Summary

- **Security anxiety is the dominant theme.** Multiple users (notably `belumume` and `metalmon`) are manually auditing the codebase and filing S0/S1 issues with line-level citations. This is constructive but also signals that operators feel the security posture needs external validation.
- **Silent misconfiguration is a recurring pain point**: `sops_dir` defaults that never load ([#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779)), audit logging that writes nothing ([#9391](https://github.com/zeroclaw-labs/zeroclaw/issues/9391)), and misleading `Memory: none` status ([PR #9898](https://github.com/zeroclaw-labs/zeroclaw/pull/9898)).
- **UX friction**: WebChat auto-scroll overrides manual reading during streaming ([#9562](https://github.com/zeroclaw-labs/zeroclaw/issues/9562), references upstream OpenClaw issues), ZeroCode streamed turns look like log payloads to small local models ([#8999](https://github.com/zeroclaw-labs/zeroclaw/issues/8999)), and dashboard CPU mislabeling ([#9844](https://github.com/zeroclaw-labs/zeroclaw/issues/9844)).
- **Positive signals:** a graduated contributor-label system (trusted/experienced/distinguished/principal) is visibly active, and maintainers responded to process complaints with a dedicated RFC ([#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496)) and a maintainer decision-queue tracker ([#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)).

## 8. Backlog Watch

Items that have been open longest or risk stalling:

- [Issue #5842 — warn when Codex CLI `extra_args` weaken sandbox/policy](https://github.com/zeroclaw-labs/zeroclaw/issues/5842) — open since **2026-04-17**, in-progress/no-stale, 5 comments; oldest tracked item, no linked fix PR yet.
- [Issue #6808 — work-lanes RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — ratification deferred since ~May; 23 comments; the single biggest open governance question.
- [PR #8486 — OpenAI chat completions endpoint](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) — open since Jun 29, `needs-author-action`, XL; high user value if it can be unstuck.
- [PR #8576 — OpenAI STT env-var fallback](https://github.com/zeroclaw-labs/zeroclaw/pull/8576) and [PR #8655 — zerocode Code-pane consolidation](https://github.com/zeroclaw-labs/zeroclaw/pull/8655) — both flagged `stale-candidate`; need author response or maintainer takeover.
- [Issue #8692 — Maintainer decision queue](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — the project's own tracker for pending maintainer decisions; worth monitoring directly for the next acceptance/rejection wave.

**Bottom line:** ZeroClaw is busier than ever on process and security, but the gap between *accepted RFCs* and *merged implementations* — plus a large `needs-author-action` PR queue — is the main constraint on forward progress.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*