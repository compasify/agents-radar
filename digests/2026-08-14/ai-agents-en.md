# OpenClaw Ecosystem Digest 2026-08-14

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-14 00:59 UTC

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

# OpenClaw Project Digest — 2026-08-14

## 1. Today's Overview

OpenClaw remains extremely active: 500 issues were updated in the last 24h (337 open/active, 163 closed) and 500 PRs were updated (391 open, 109 merged/closed). No new release was published in this window. The project is currently in a heavy maintenance/bug-fixing phase, with many P1 reliability issues around message delivery, subagent orchestration, session state, and auth flows, alongside a steady stream of Control UI and developer-experience PRs. Maintainer review looks like the main bottleneck: a large share of high-severity issues still carry `no-new-fix-pr` or `needs-maintainer-review` labels.

## 2. Releases

None.

## 3. Project Progress

Notable PRs that moved to closed/merged state today:

- [#123205](https://github.com/openclaw/openclaw/pull/123205) — `fix(ui): re-clicking the active nav item stacks duplicate history entries` — fixes broken Back-button behavior in the Control UI.
- [#123373](https://github.com/openclaw/openclaw/pull/123373) — `fix(slack): apply updated global settings to new messages` — stops stale model/thinking/routing defaults in Slack messages.
- [#123164](https://github.com/openclaw/openclaw/pull/123164) — `fix(doctor): repeated no-op OAuth migration prompt and swallowed migration error cause` — improves auth-repair UX.
- [#123208](https://github.com/openclaw/openclaw/pull/123208) — `fix(gateway): models.list returns empty forever while chat works` — resolves permanently empty model pickers in Control UI.
- [#123381](https://github.com/openclaw/openclaw/pull/123381) — `fix(ui): create automations for selected agent in all-agents view` — fixes automation creation with multiple agents.
- [#123164](https://github.com/openclaw/openclaw/pull/123164) — doctor OAuth migration fixes.

Several high-value PRs are open and ready for maintainer review, including:

- [#123397](https://github.com/openclaw/openclaw/pull/123397) — unify server-side compaction gates and harden compaction recovery.
- [#123398](https://github.com/openclaw/openclaw/pull/123398) — recover OpenAI WebSocket turns after compaction rejection.
- [#123399](https://github.com/openclaw/openclaw/pull/123399) — install externalized configured plugins during upgrades.
- [#123347](https://github.com/openclaw/openclaw/pull/123347) — refactor native i18n artifacts to content-hash identity.
- [#123386](https://github.com/openclaw/openclaw/pull/123386) — keep composer pickers visible near viewport edges.

## 4. Community Hot Topics

The most active issues reveal a clear pattern: users care most about reliable delivery, memory/security trust, and subagent orchestration.

| Issue | Comments | Summary / Underlying Need |
|---|---|---|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | 92 | Silent reply failures recurring after #116277 was closed. Users are frustrated that a previously "fixed" issue still happens with no queued reply payload. |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 48 | Memory Trust Tagging by Source — prevent memory poisoning from untrusted web/scraped/third-party content. |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 48 | Text between tool calls leaks to messaging channels as visible messages. Internal narration/error output should not be published. |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 27 | Subagent completion silently lost — no retry, no notification, no auto-restart on timeout. |
| [#121953](https://github.com/openclaw/openclaw/issues/121953) | 16 | Cron agent turns stall on DeepSeek because `[cron:...]` prefix is deprioritized by DeepSeek API edge. |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | 13 | Multi-agent orchestration unstable: concurrent agent add/config overwrites, session-lock failures, detached child work. |
| [#43747](https://github.com/openclaw/openclaw/issues/43747) | 11 | "Memory management is in chaos" — different OpenClaw installs treat memory storage/embedding differently. |
| [#44431](https://github.com/openclaw/openclaw/issues/44431) | 11 | 7 browser tool improvements from real-world automation field testing. |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | 10 | Subagent completion delivery can be lost on direct-announce timeout, drain, or orphan prune. |
| [#47975](https://github.com/openclaw/openclaw/issues/47975) | 10 | Subagent sessions persist after completion and main session becomes unresponsive. |

The underlying demand is reliability first: users are running real multi-agent workflows and channel integrations where silent message/subagent loss is the most damaging failure mode.

## 5. Bugs & Stability

Ranked by severity, the most important unresolved bugs as of 2026-08-14:

| Issue | Severity / Labels | Summary | Fix Status |
|---|---|---|---|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | P1, 92 comments | Silent reply failures recurring after fix | No fix PR identified |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | P1, security | Text between tool calls leaks to messaging channels | `no-new-fix-pr` |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | P1, data loss | Subagent completion silently lost | No fix PR identified |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | P1, message loss | Subagent completion delivery lost on timeout/drain/orphan prune | `no-new-fix-pr` |
| [#121953](https://github.com/openclaw/openclaw/issues/121953) | P1 | Cron agent stall on DeepSeek due `[cron:` prefix | Linked PR open |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | P1, session state | Multi-agent orchestration unstable | Linked PR open |
| [#91363](https://github.com/openclaw/openclaw/issues/91363) | P1 | Isolated cron fails with "LLM request failed" at model-call-started | No fix PR identified |
| [#97983](https://github.com/openclaw/openclaw/issues/97983) | P1 | iOS/WebChat messages append but do not trigger replies | No fix PR identified |
| [#111498](https://github.com/openclaw/openclaw/issues/111498) | P1 regression | Main agent blocked by workspace-state migration after Anthropic auth recovery | `needs-info` |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | P1 regression | Hook/tool child processes leak, causing zombie accumulation | `no-new-fix-pr` |
| [#78493](https://github.com/openclaw/openclaw/issues/78493) | P1, crash-loop | `sudo openclaw update` creates mixed ownership; doctor overwrites config | `no-new-fix-pr` |
| [#95553](https://github.com/openclaw/openclaw/issues/95553) | P1 | Preflight compaction hard-capped at ~60s, ignores `compaction.timeoutSeconds` | `no-new-fix-pr` |
| [#115421](https://github.com/openclaw/openclaw/issues/115421) | P1, data loss | Schema downgrade recovery quarantines/wipes state DB, cron jobs lost | Linked PR open |
| [#123073](https://github.com/openclaw/openclaw/issues/123073) | P1 | Dev-channel update fails: `EUNSUPPORTEDPROTOCOL` on `workspace:*` | Open, queueable-fix |
| [#89278](https://github.com/openclaw/openclaw/issues/89278) | P1 regression | Codex OAuth refresh succeeds but cron/heartbeat hit 10s auth refresh timeout | Linked PR open |

Some previously reported bugs were closed today, including [#42273](https://github.com/openclaw/openclaw/issues/42273) (`backup create` stalls on large installations, closed as already fixed), [#91456](https://github.com/openclaw/openclaw/issues/91456) (Telegram DM lane guard), [#105342](https://github.com/openclaw/openclaw/issues/105342) (exec output rendered as images on Telegram), and [#121605](https://github.com/openclaw/openclaw/issues/121605) (fallback reply produced but never delivered).

## 6. Feature Requests & Roadmap Signals

High-engagement feature requests that may shape the next roadmap:

- [#7707](https://github.com/openclaw/openclaw/issues/7707) — Memory Trust Tagging by Source. Strong security-driven demand; currently blocked on maintainer/product/security review.
- [#44431](https://github.com/openclaw/openclaw/issues/44431) — Browser tool improvements from field testing; closed, so likely already integrated or queued for UI/tooling work.
- [#16555](https://github.com/openclaw/openclaw/issues/16555) — TTL/Expiry for delivery queue messages; aligns with current delivery-reliability fixes.
- [#45771](https://github.com/openclaw/openclaw/issues/45771) — Built-in pace-aware rate limiting for autonomous agents; relevant to cron/subagent reliability.
- [#9016](https://github.com/openclaw/openclaw/issues/9016) — Expose OpenRouter usage cost to agent runtime.
- [#45758](https://github.com/openclaw/openclaw/issues/45758) — YAML config file support; high visibility DX request.
- [#45508](https://github.com/openclaw/openclaw/issues/45508) — Self-hosted STT/TTS support in webchat.
- [#41366](https://github.com/openclaw/openclaw/issues/41366) — Durable natural-language rule learning + multi-mention reply semantics.
- [#45501](https://github.com/openclaw/openclaw/issues/45501) — Configurable session startup message via `session.resetPrompt`.
- [#79165](https://github.com/openclaw/openclaw/issues/79165) — Graduated crash recovery ladder for gateway.

Given current PR focus, the next release will likely prioritize delivery/session stability, auth/doctor repair, and Control UI polish rather than new feature work. The longer-lived feature requests — especially memory trust tagging and rate limiting — remain in product-decision limbo.

## 7. User Feedback Summary

Users are running OpenClaw in production-like personal and team setups: Telegram and Discord group chats, parallel coding agents, cron jobs, iOS/WebChat, browser automation, and self-hosted voice. The strongest dissatisfaction is around silent failures: replies never delivered, subagent completions lost, and issues labeled fixed but recurring. Memory behavior is also a recurring pain point — users report inconsistent memory storage/management across installs.

On the positive side, maintainers are shipping rapid UI/UX fixes and doctor/auth improvements, and several high-profile bugs (backup stalls, Telegram DM lane guarding, exec output rendering, fallback delivery) have been closed. The overall picture is a fast-moving project with strong maintainer throughput, but with a serious backlog of reliability debt around session state and message/subagent delivery.

## 8. Backlog Watch

Issues that have been open for a long time with high engagement and still need maintainer attention:

- [#7707](https://github.com/openclaw/openclaw/issues/7707) — Memory Trust Tagging by Source; open since Feb 3, 48 comments.
- [#25592](https://github.com/openclaw/openclaw/issues/25592) — Text between tool calls leaks to channels; open since Feb 24, 48 comments.
- [#44925](https://github.com/openclaw/openclaw/issues/44925) — Subagent completion silently lost; open since Mar 13, 27 comments.
- [#43367](https://github.com/openclaw/openclaw/issues/43367) — Multi-agent orchestration unstable; open since Mar 11, linked PR open.
- [#43747](https://github.com/openclaw/openclaw/issues/43747) — Memory management chaos; open since Mar 12.
- [#67777](https://github.com/openclaw/openclaw/issues/67777) — Subagent delivery loss; open since Apr 16.
- [#72015](https://github.com/openclaw/openclaw/issues/72015) — active-memory blocks replies, gateway overload; open since Apr 26.
- [#78493](https://github.com/openclaw/openclaw/issues/78493) — sudo update ownership/config corruption; open since May 6.
- [#95553](https://github.com/openclaw/openclaw/issues/95553) — compaction timeout hard-cap ignored; open since Jun 21.
- [#16555](https://github.com/openclaw/openclaw/issues/16555) — TTL for delivery queue messages; open since Feb 14.
- [#114612](https://github.com/openclaw/openclaw/issues/114612) — SQLite memory tables unbounded growth; open since Jul 27.
- [#120449](https://github.com/openclaw/openclaw/issues/120449) — loopDetection warnings silently server-side only; open since Aug 8.

PRs that also need maintainer attention:

- [#82950](https://github.com/openclaw/openclaw/pull/82950) — prevent unsafe approval patterns from hanging command authorization; open since May 17, `needs proof`.
- [#109973](https://github.com/openclaw/openclaw/pull/109973) — defer ACP session snapshot update; open since Jul 17, `needs proof`.
- [#120794](https://github.com/openclaw/openclaw/pull/120794) — unbounded channel context arrays flood model prompt; open since Aug 9, `needs proof`.
- [#121799](https://github.com/openclaw/openclaw/pull/121799) — `usage.status` no longer waits on provider HTTP; open since Aug 11, `needs proof`.
- [#118211](https://github.com/openclaw/openclaw/pull/118211) — redact signed cloud credential params in URLs/bodies; waiting on author.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-08-14

## 1. Ecosystem Overview

The personal AI assistant/agent open-source landscape remains dominated by **OpenClaw as the de facto core reference**, surrounded by a long tail of specialized agents (NanoBot, Hermes, ZeroClaw, IronClaw, CoPaw, NanoClaw, LobsterAI, Moltis, PicoClaw) and two dormant projects (NullClaw, ZeptoClaw). The ecosystem has clearly shifted from feature velocity to **reliability hardening, security hardening, and memory/session trust** — the most vocal user pain across nearly every project is silent failure: lost replies, lost subagent completions, dead cron schedulers, and inconsistent memory. At the same time, the ecosystem is converging on shared infrastructure concepts: Agent Plugins 1.0, MCP schema/cost management, ACP harnesses, and pluggable agent loops. Releases this window (IronClaw v1.2.0, CoPaw v2.1.0, NanoClaw v2.2.0, Hermes v0.20.1) confirm that **stabilization and interoperability, not novel features, are the current battleground**.

## 2. Activity Comparison

*Health score = weighted judgment of merge/close throughput, maintainer responsiveness, release cadence, and unresolved high-severity bug load.*

| Project | Issues updated (open/closed) | PRs updated (open/merged-closed) | Releases (24h) | Health |
|---|---|---|---|---|
| OpenClaw | 500 (337 / 163) | 500 (391 / 109) | None | 7/10 |
| ZeroClaw | 50 (37 / 13) | 50 (41 / 9) | None | 7/10 |
| IronClaw | 50 (32 / 18) | 50 (26 / 24) | **v1.2.0 stable** | 8/10 |
| Hermes Agent | 50 (45 / 5) | 50 (47 / 3) | **v0.20.1** | 7/10 |
| CoPaw / QwenPaw | 42 (25 / 17) | 50 (31 / 19) | **v2.1.0 + beta.5** | 8/10 |
| NanoBot | 12 (11 / 1) | 31 (22 / 9) | None | 8/10 |
| NanoClaw | 2 (1 / 1) | 19 (6 / 13) | **v2.2.0** | 8.5/10 |
| LobsterAI | 1 (1 / 0) | 11 (5 / 6) | None | 7.5/10 |
| Moltis | 1 (1 / 0) | 4 (4 / 0) | None | 6.5/10 |
| PicoClaw | 3 (3 / 0) | 9 (6 / 3) | None | 5/10 |
| NullClaw | 0 | 0 | None | N/A (inactive) |
| ZeptoClaw | 0 | 0 | None | N/A (inactive) |

*Note: OpenClaw, ZeroClaw, IronClaw, and Hermes report "50 issues/50 PRs" snapshots, suggesting tracker caps; OpenClaw's 500/500 is real volume.*

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Community size is an order of magnitude larger** — 500 issues + 500 PRs touched in 24h vs. 1–50 for all peers combined.
- **Ecosystem gravity:** downstream projects explicitly align to OpenClaw conventions — Moltis patches module paths for the `openclaw` org; LobsterAI contributes tests for OpenClaw memory modules; NanoClaw and ZeroClaw reference Agent Plugins (OpenClaw lineage) 1.0.
- **Breadth:** channels + subagents + memory + doctor + Control UI in a single self-hosted stack, with rapid UI/auth/doctor fix throughput.

**Technical approach differences:**
- OpenClaw: centralized gateway with channel adapters, subagent orchestration, and server-side compaction; deeply integrated but carries heavy session-state complexity.
- ZeroClaw: RFC-governed, security-first; planning breaking v0.9.0 (shell policy, verifiable intent, runtime-owned sessions).
- IronClaw: cloud-native, Postgres-backed "kernel" with pluggable agent loops and live canary validation.
- CoPaw: consumer desktop OS Shell, Qwen/Aliyun ecosystem, Windows/China-market focus.
- Hermes: research-lab pedigree, TUI/Desktop-first, extensive plugin/hook system.
- NanoBot: lightweight, resilience-focused core with fast bugfix cycles.

**Key risk:** scale creates review bottlenecks — many P1s still carry `needs-maintainer-review`, and recurring silent failures (e.g., #121058) are damaging user trust despite high throughput.

## 4. Shared Technical Focus Areas

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **Reliable message/subagent delivery** | OpenClaw, Hermes, NanoBot, CoPaw, NanoClaw, LobsterAI, ZeroClaw | Silent reply loss; subagent completion lost; cron scheduler permanent death; verification-stop discards answers; first-run task results not pushed; agent stalls after "planning" |
| **Session/memory lifecycle & persistence** | OpenClaw, NanoBot, Hermes, IronClaw, CoPaw, ZeroClaw, LobsterAI | Source-tagged memory trust; memory recall across conversations; session mutation before archive succeeds; zero test coverage on memory modules; compaction hiding history |
| **Provider & cost resilience** | OpenClaw, Hermes, IronClaw, CoPaw, NanoBot, ZeroClaw | Cron pinned to dead model ignoring fallbacks; DeepSeek 400s; Sonnet-5 500s; cheaper heartbeat models; OpenRouter prompt-cache via stable session_id |
| **Security & trust boundaries** | OpenClaw, NanoBot, CoPaw, ZeroClaw, NanoClaw, Hermes | `exec.allowPatterns` shell-chain bypass; unauthenticated plugin API; verifiable-intent credential-chain gap; shell command policy RFCs; agent-image signing; CSPRNG pairing codes |
| **MCP ecosystem maturity** | NanoBot, IronClaw, NanoClaw, LobsterAI, ZeroClaw | MCP schema byte budgets; OAuth-refresh state for MCP; per-server `disabledTools`; MCP working directories; unified skills/MCP/connectors UI |
| **Channel completeness / E2EE** | NanoBot, ZeroClaw, Hermes, CoPaw, OpenClaw | Matrix SAS verification; Telegram stickers; provider-grouped `/model` picker; Signal native quote/edit; Telegram `/new` session rotation |

## 5. Differentiation Analysis

- **OpenClaw** — Swiss-army personal/team assistant; broadest integration surface; configuration-heavy self-hosting; carries the ecosystem's largest reliability debt.
- **ZeroClaw** — Security/architecture-first; RFC-driven with explicit maintainer-decision tracker; targets security-conscious operators willing to accept breaking changes.
- **IronClaw** — Cloud-native agent runtime (NEAR AI); Postgres-backed, canary-validated; "kernel + pluggable agent loops" vision; targets teams wanting hosted/cloud agents.
- **CoPaw/QwenPaw** — Consumer-friendly desktop GUI (OS Shell), Qwen/Aliyun billing integration, Windows/China market; strongest product-UX momentum this window.
- **Hermes Agent** — Research-lab pedigree; TUI/Desktop-first; deep plugin/hook governance; targets developer-tinkerers on desktop.
- **NanoBot** — Lightweight embedded agent core; MCP budget innovation; rapid bugfix cadence; good for devs embedding agents into channels.
- **NanoClaw** — Supply-chain/CI hardening and template→Agent Plugin lifecycle; ops/automation focus; highest health score this window.
- **LobsterAI** — Product polish on OpenClaw-compatible skills; cowork workflows; enterprise-edition groundwork.
- **Moltis** — Durable connectors (CalDAV, channel history) + sandbox tooling; early-stage and small.
- **PicoClaw** — Minimal Go agent; low activity, unanswered user bug, risk of stagnation.
- **NullClaw / ZeptoClaw** — Dormant.

## 6. Community Momentum & Maturity

**Tier 1 — Rapid iteration (50+ items/day):** OpenClaw, IronClaw, ZeroClaw, Hermes, CoPaw. All ship or merge daily, but OpenClaw/ZeroClaw/Hermes show maintainer-review bottlenecks.
**Tier 2 — Healthy, smaller-scale:** NanoBot, NanoClaw, LobsterAI — responsive maintainers, meaningful merge throughput, releases where expected.
**Tier 3 — Stabilizing/slowing:** Moltis (review phase, zero merges in 24h), PicoClaw (only Dependabot churn; no maintainer response on #3281 for ~3 weeks).
**Tier 4 — Dormant:** NullClaw, ZeptoClaw.

**Maturity signals:** IronClaw's stable v1.2.0 promotion with live-canary validation; CoPaw's v2.1.0 OS Shell as a major UX milestone; Hermes's v0.20.1 stabilization tag (656 PRs); ZeroClaw's deliberate pre-0.9.0 breaking-change planning — this is an ecosystem moving from prototype to production discipline.

## 7. Trend Signals

1. **Reliability is the new feature.** Across projects, users demand delivery guarantees, idempotency, and observability for replies, subagent completions, and cron runs. Build these before adding agent capabilities.
2. **Memory is moving from storage to policy.** Demand for source-tagged trust (OpenClaw #7707), lifecycle decoupling (ZeroClaw #6850), cross-install consistency (OpenClaw #43747), and persistent memory (NanoBot #5372). Memory trust/expiry will be a key differentiator.
3. **Security is community-driven, not maintainer-only.** Supply-chain signing (NanoClaw), plugin permission models (CoPaw), shell-command policies (ZeroClaw), CSPRNG fixes (NanoClaw), and credential-chain verification (ZeroClaw #9328) are now contributed as first-class features.
4. **Multi-agent orchestration needs production guardrails.** Server-side `max_iterations` (CoPaw), subagent completion tracking (OpenClaw), and pluggable agent loops (IronClaw) signal a shift from demos to distributed-systems semantics.
5. **Cost control is urgent.** Fallback providers for cron (Hermes), prompt-cache session IDs (ZeroClaw), MCP schema byte budgets (NanoBot), and cheaper heartbeat models are explicit user asks — token economics are a purchase decision.
6. **Interoperability is converging.** Agent Plugins 1.0 (OpenClaw lineage) is being adopted by NanoClaw and ZeroClaw; ACP harnesses (IronClaw); import flows (CoPaw pawport); unified skills/MCP/connectors UI (LobsterAI). Standards are emerging bottom-up.
7. **Channel depth over breadth.** Matrix E2EE/SAS, Telegram stickers, Signal native semantics — users expect native-platform parity, not message relay.

**For AI agent developers:** prioritize delivery guarantees and observability first; design memory with source trust and lifecycle policy from day one; budget for MCP schema costs; treat multi-agent orchestration as a distributed-systems problem; and watch for convergence on Agent Plugins/ACP as the ecosystem's interop layer.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-14

## 1. Today’s Overview

NanoBot is in a highly active development and hardening phase: **12 issues updated** (11 open, 1 closed) and **31 PRs updated** (22 open, 9 closed/merged) in the last 24 hours. Activity is concentrated on session-persistence reliability, cron scheduler resilience, WebUI behavior, MCP tool-schema management, and Telegram/Matrix integration. Maintainers responded quickly to recently filed bugs, often opening or updating fix PRs within the same window. No new release was published, so these changes are not yet in a user-facing version.

## 2. Releases

No new NanoBot releases were published in this window.

## 3. Project Progress

Notable closed/merged PRs in the last 24 hours:

- **WebUI native workspace folder picker** — [PR #5381](https://github.com/HKUDS/nanobot/pull/5381)  
  Adds native folder selection for locally hosted WebUI sessions, with loopback/gateway safety checks.

- **Restore transcript-only session history** — [PR #5384](https://github.com/HKUDS/nanobot/pull/5384)  
  Brings back sidebar discovery for sessions with persisted display transcripts but no canonical session JSONL.

- **Cron scheduler persistence-resilience iteration** — [PR #5374](https://github.com/HKUDS/nanobot/pull/5374), [PR #5375](https://github.com/HKUDS/nanobot/pull/5375)  
  Closed/merged attempts to prevent the cron scheduler from dying after job-store persistence failures. The active follow-up remains [PR #5376](https://github.com/HKUDS/nanobot/pull/5376).

- **Dream consolidation model_override wiring** — [PR #4556](https://github.com/HKUDS/nanobot/pull/4556)  
  Applies `DreamConfig.model_override` at runtime during periodic memory consolidation.

- **Cron per-run session isolation** — [PR #4550](https://github.com/HKUDS/nanobot/pull/4550)  
  Fixes stale cron context by appending the unique `run_id` to the session key.

- **Security issue closed** — [Issue #5306](https://github.com/HKUDS/nanobot/issues/5306)  
  The `exec.allowPatterns` shell-chain bypass advisory was closed during this period.

## 4. Community Hot Topics

- **Cron scheduler permanent death** — [Issue #5373](https://github.com/HKUDS/nanobot/issues/5373)  
  A single persistence failure can silently kill the scheduler forever. Multiple PRs (#5374, #5375, #5376) show strong maintainer/community focus on durable cron execution.

- **MCP schema context budget** — [Issue #5298](https://github.com/HKUDS/nanobot/issues/5298)  
  Proposal to limit model-visible MCP tool schemas for large tool sets; directly connected to the new [PR #5388](https://github.com/HKUDS/nanobot/pull/5388).

- **Telegram sticker support** — [Issue #5289](https://github.com/HKUDS/nanobot/issues/5289)  
  Users want inbound/outbound sticker support and richer reaction behavior; [PR #5387](https://github.com/HKUDS/nanobot/pull/5387) now implements reusable sticker replies.

- **MCP Apps host support in WebUI** — [Issue #5251](https://github.com/HKUDS/nanobot/issues/5251)  
  Community interest in surfacing rich MCP Apps results inside the WebUI; [PR #5386](https://github.com/HKUDS/nanobot/pull/5386) preserves MCP Apps metadata separately from model context.

- **Matrix device trust / SAS verification** — [Issue #4841](https://github.com/HKUDS/nanobot/issues/4841)  
  The bot still appears untrusted in Element; [PR #5385](https://github.com/HKUDS/nanobot/pull/5385) attempts to complete the Element SAS request flow.

## 5. Bugs & Stability

Ranked by severity:

- **Critical — `exec.allowPatterns` shell-chain bypass** — [Issue #5306](https://github.com/HKUDS/nanobot/issues/5306)  
  Security advisory allowing unintended command execution. The issue is now closed, but no explicit fix PR appears in the updated-PR set; verification of the remediation is advised.

- **High — Cron scheduler dies permanently** — [Issue #5373](https://github.com/HKUDS/nanobot/issues/5373)  
  A single job-store persistence failure kills all future ticks. Fix in progress via [PR #5376](https://github.com/HKUDS/nanobot/pull/5376).

- **High — Session state mutated before file-cap archive succeeds** — [Issue #5378](https://github.com/HKUDS/nanobot/issues/5378)  
  Failed archive callbacks leave the in-memory session permanently trimmed. Fix: [PR #5380](https://github.com/HKUDS/nanobot/pull/5380).

- **High — Consolidation truncation loses messages from history** — [Issue #5377](https://github.com/HKUDS/nanobot/issues/5377)  
  Archive truncation can advance the consolidation cursor past the full message batch. Fix: [PR #5379](https://github.com/HKUDS/nanobot/pull/5379).

- **Medium — Windows transient `os.replace()` failure crashes gateway** — [PR #5382](https://github.com/HKUDS/nanobot/pull/5382)  
  `[WinError 5] Access is denied` during heartbeat session saves; retry handling proposed.

- **Medium — Concurrent session JSONL access** — [PR #5383](https://github.com/HKUDS/nanobot/pull/5383)  
  Serializes canonical session readers/mutators behind a directory lock to prevent corruption from multiple `SessionManager` instances.

- **Medium — WebUI copy/fork actions shown while agent turn is still running** — [Issue #5368](https://github.com/HKUDS/nanobot/issues/5368)  
  Conflicting completion signals in the UI; no dedicated fix PR yet.

## 6. Feature Requests & Roadmap Signals

- **MCP schema byte budget** — [Issue #5298](https://github.com/HKUDS/nanobot/issues/5298)  
  Opt-in deterministic MCP schema budgeting is implemented in [PR #5388](https://github.com/HKUDS/nanobot/pull/5388), likely for the next release.

- **Telegram stickers and reactive replies** — [Issue #5289](https://github.com/HKUDS/nanobot/issues/5289)  
  [PR #5387](https://github.com/HKUDS/nanobot/pull/5387) adds reusable sticker replies; strong candidate for next version.

- **MCP Apps result metadata** — [Issue #5251](https://github.com/HKUDS/nanobot/issues/5251)  
  [PR #5386](https://github.com/HKUDS/nanobot/pull/5386) preserves structured MCP app data without expanding model context, aligning with the WebUI MCP Apps request.

- **Matrix SAS/cross-signing completeness** — [Issue #4841](https://github.com/HKUDS/nanobot/issues/4841)  
  [PR #5385](https://github.com/HKUDS/nanobot/pull/5385) is the direct roadmap candidate.

- **QwenCloud provider support** — [Issue #5350](https://github.com/HKUDS/nanobot/issues/5350)  
  Backward-compatible international QwenCloud path beside DashScope; no PR yet, but clearly scoped.

- **WebUI localization of agent activity** — [Issue #5366](https://github.com/HKUDS/nanobot/issues/5366)  
  Agent activity strings should follow the user-selected UI language; currently no implementing PR.

## 7. User Feedback Summary

User feedback continues to center on real operational pain points:

- **Context/token cost**: Large MCP tool sets consume significant model context; users explicitly asked for budget controls ([#5298](https://github.com/HKUDS/nanobot/issues/5298)).
- **Memory persistence**: Agents start from zero every session, and users would like persistent memory alternatives ([#5372](https://github.com/HKUDS/nanobot/issues/5372)).
- **Channel completeness**: Telegram sticker handling is missing ([#5289](https://github.com/HKUDS/nanobot/issues/5289)), and Matrix E2EE devices appear untrusted with no clear verification path ([#4841](https://github.com/HKUDS/nanobot/issues/4841)).
- **WebUI consistency**: Users want localized agent activity strings ([#5366](https://github.com/HKUDS/nanobot/issues/5366)) and clearer action visibility during running turns ([#5368](https://github.com/HKUDS/nanobot/issues/5368)).

The overall tone is constructive: detailed bug reports, concrete enhancement proposals, and active contributor-provided fixes.

## 8. Backlog Watch

- **Heartbeat model_override** — [PR #4549](https://github.com/HKUDS/nanobot/pull/4549)  
  Open since **2026-06-26**; would allow a cheaper heartbeat model. Still needs review/merge.

- **Heartbeat isolated_session config** — [PR #4551](https://github.com/HKUDS/nanobot/pull/4551)  
  Open since **2026-06-26**; related heartbeat improvement for shared-session opt-in.

- **Matrix device trust / SAS** — [Issue #4841](https://github.com/HKUDS/nanobot/issues/4841)  
  Open since **2026-07-07**; [PR #5385](https://github.com/HKUDS/nanobot/pull/5385) may finally close this long-standing UX gap.

- **MCP Apps WebUI support** — [Issue #5251](https://github.com/HKUDS/nanobot/issues/5251)  
  Open since **2026-08-05**; now backed by [PR #5386](https://github.com/HKUDS/nanobot/pull/5386).

Some older PRs carry `conflict` labels and may need rebase or maintainer attention before they can land.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-14

## 1. Today's Overview

Hermes Agent remains in a very active development phase: 50 issues and 50 PRs were updated in the last 24 hours, with 45 issues still open and 47 PRs still open. The project shipped patch release **v0.20.1 (v2026.8.13)** on August 13, rolling up roughly 656 PRs merged since v0.20.0 into a stable tag for downstream consumers. While no new P0 issues appeared today, several long-running P1 and P2 stability problems remain open — notably TUI overlay breakage (#69592) and possible loss of streamed final answers during verification stops (#62142). The PR queue is healthy, with security-focused fixes, provider compatibility patches, and messaging-platform reliability work all advancing.

## 2. Releases

### v0.20.1 (v2026.8.13)

- **Type:** Patch release
- **What's included:** Rolls up ~656 PRs merged since v0.20.0 into a stable tagged release for Docker images, hosted deployments, and users installing from the `latest` tag.
- **Breaking changes / migration notes:** None documented in the release data. This is a stabilization tag rather than a feature release.

## 3. Project Progress

The visible PR activity shows active work across provider configuration, security hardening, cron reliability, and plugin transparency:

- [#85732](https://github.com/NousResearch/hermes-agent/pull/85732) — Pin `top_p` for Ollama-cloud Kimi models across provider-profile, legacy transport, auxiliary, and compression-summary paths.
- [#85730](https://github.com/NousResearch/hermes-agent/pull/85730) — Hard guard: block per-profile gateway launches when `multiplex_profiles` is enabled.
- [#85729](https://github.com/NousResearch/hermes-agent/pull/85729) — Warn when `transform_tool_result` / `terminal_output` / `llm_output` hooks silently skip a valid plugin result (addresses first-wins shadowing).
- [#85728](https://github.com/NousResearch/hermes-agent/pull/85728) — Surface Honcho backend failures from `search_context` / `get_peer_card` / `get_session_context` instead of collapsing them into empty strings.
- [#85727](https://github.com/NousResearch/hermes-agent/pull/85727) — Skip the first-message home-channel onboarding prompt for plugins that don't support home/cron delivery.
- [#85710](https://github.com/NousResearch/hermes-agent/pull/85710) — **Closed** (not merged): was intended to reuse the secret cache for cron runs and clarify home delivery behavior.
- [#85673](https://github.com/NousResearch/hermes-agent/pull/85673) — Stop Desktop from offering unsupported GitHub MCP OAuth through the generic one-click path.
- [#85723](https://github.com/NousResearch/hermes-agent/pull/85723) — Add Japanese (`ja-JP`) locale to the documentation site.

Three PRs were merged/closed in the window; among the visible set, #85710 was closed. The broader snapshot suggests the project is pushing hard on provider compatibility and security-boundary fixes.

## 4. Community Hot Topics

The most active discussions reveal three underlying needs: **infrastructure reliability, webhook/messaging governance, and TUI usability.**

- [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) — **Skills index stale or degraded** (25 comments). Freshness probe failed; index is 29.8h old vs. 26h limit. This is an automated infra-health complaint, but it matters because `/docs/skills` and the skills hub depend on the stale index.
- [#84834](https://github.com/NousResearch/hermes-agent/issues/84834) — **Webhook Revolution — graph-gated repair campaign** (16 comments). Epic meta-issue covering ingress, execution, delivery, configuration, UI, deployment, and docs for the entire webhook surface. Signals a broad maintainer-driven cleanup rather than a single bug.
- [#69592](https://github.com/NousResearch/hermes-agent/issues/69592) — **TUI `/sessions` and `/models` overlays invisible with ambient widget dock** (12 comments, P1). Users cannot resume sessions or change models; `/reload` is silent. Commenters are frustrated that core TUI workflows have been broken for ~13 days.
- [#83390](https://github.com/NousResearch/hermes-agent/issues/83390) — **DeepSeek title_generation fails: HTTP 400 `response_format` unavailable** (9 comments, 2 👍). Provider compatibility issue affecting auxiliary title generation.
- [#4438](https://github.com/NousResearch/hermes-agent/issues/4438) — **Rich Spreadsheet Skill (xlsx/csv)** (8 comments). Long-running feature request for structured spreadsheet handling.
- [#39043](https://github.com/NousResearch/hermes-agent/issues/39043) — **Signal adapter native quote/reply, edit, remote-delete, read receipts** (7 comments, 3 👍). Users want parity with Signal's native capabilities.

## 5. Bugs & Stability

Ranked by severity (P1 first). Several are long-running and have no visible fix PR in the current window.

### P1

- [#69592](https://github.com/NousResearch/hermes-agent/issues/69592) — **TUI `/sessions` and `/models` overlays invisible with ambient widget dock**; `/reload` silent. Core resume/switch/model workflows dead for ~13 days. No fix PR visible.
- [#62142](https://github.com/NousResearch/hermes-agent/issues/62142) — **Verification-stop can discard streamed final answers and cron reports**. Durable transcript may lose substantive answers. No fix PR visible.

### P2

- [#85215](https://github.com/NousResearch/hermes-agent/issues/85215) — **Cron jobs pin to a dead model and ignore `fallback_providers`**; jobs fail with HTTP 402 for days. Provider-snapshot behavior is too rigid.
- [#85614](https://github.com/NousResearch/hermes-agent/issues/85614) — **Slack peer bot IDs required for early delivery but ignored by final bot authorization**; split-brain identity checks.
- [#76267](https://github.com/NousResearch/hermes-agent/issues/76267) — **Windows `sync_back` drops remote sandbox file changes** when a remote backend tears down.
- [#83427](https://github.com/NousResearch/hermes-agent/issues/83427) — **`browser_exec` crashes with `pydantic_core` ModuleNotFoundError** when PYTHONPATH points at the Hermes venv in the desktop app.
- [#52339](https://github.com/NousResearch/hermes-agent/issues/52339) — **Terminal `hermes update` leaves `/Applications/Hermes.app` stale**; split-brain Desktop state on macOS.
- [#83851](https://github.com/NousResearch/hermes-agent/issues/83851) — **GBK encoding kills gateway on Chinese Windows**; Desktop `[gateway-crash]` after upgrade to v0.20.0.
- [#85406](https://github.com/NousResearch/hermes-agent/issues/85406) — **`vision_analyze` fails on Windows + Docker** because host-side `Path()` mangles POSIX separators into backslashes.
- [#85658](https://github.com/NousResearch/hermes-agent/issues/85658) — **Interrupted command adopts another session's working directory**; all later commands run in the wrong chat's cwd.
- [#85693](https://github.com/NousResearch/hermes-agent/issues/85693) — **`computer_use` tool not exposed in Hermes Desktop sessions**; only declared for CLI platform.
- [#85104](https://github.com/NousResearch/hermes-agent/issues/85104) — **Desktop duplicate assistant message rendering**; DB has a single record, so frontend rendering is the suspected cause.

### Closed / Triaged

- [#81639](https://github.com/NousResearch/hermes-agent/issues/81639) — P0 report about `_canonicalize_api_tool_calls` mutating history was **closed as duplicate**.
- [#35838](https://github.com/NousResearch/hermes-agent/issues/35838) — `models.dev` blocking when unreachable was **closed as duplicate**.
- [#85705](https://github.com/NousResearch/hermes-agent/issues/85705) — **Closed as invalid** (wrong repository).

## 6. Feature Requests & Roadmap Signals

Several feature requests could plausibly land in the next minor release:

- [#4438](https://github.com/NousResearch/hermes-agent/issues/4438) — **Rich Spreadsheet Skill (xlsx/csv)**: structured Excel/CSV handling with a clean abstraction over `openpyxl`/`pandas`.
- [#39043](https://github.com/NousResearch/hermes-agent/issues/39043) — **Signal adapter: native quote/reply, edit, remote-delete, read receipts**.
- [#33049](https://github.com/NousResearch/hermes-agent/issues/33049) — **Make credential pool exhaustion TTL configurable** (currently hardcoded `EXHAUSTED_TTL_*_SECONDS`).
- [#84317](https://github.com/NousResearch/hermes-agent/issues/84317) — **Opt out of `drop_pending_updates` on Telegram cold boot**.
- [#85418](https://github.com/NousResearch/hermes-agent/issues/85418) — **Local-first, zero-dependency memory provider** built on Hermes, benchmarked against Honcho.
- [#82801](https://github.com/NousResearch/hermes-agent/issues/82801) — **Built-in personality system overrides SOUL.md**; users want composition, precedence, and a visible indicator.

Signals from PRs: plugin hook transparency (#85729), multi-profile gateway guardrails (#85730), Japanese docs (#85723), and HTTP exposure of session async delegations ([#81806](https://github.com/NousResearch/hermes-agent/pull/81806)) all indicate roadmap investment in governance, observability, and i18n.

## 7. User Feedback Summary

- **Frustration around TUI regressions:** The P1 overlay issue (#69592) has been open for 13 days and users depend on it for basic session switching. Comments express significant dissatisfaction.
- **Provider-pinning pain:** Cron jobs failing for "days" with HTTP 402 because they ignore fallbacks (#85215) is a real operational headache for paying users.
- **Cross-platform gaps:** Chinese Windows users hit a GBK crash (#83851); Windows users lose sandbox file sync (#76267); macOS Desktop updates leave stale app bundles (#52339). Desktop/Windows parity remains a notable pain point.
- **Memory provider trust:** #85622 reports that external memory providers suppress built-in `MEMORY.md`/`USER.md` injection, contradicting documented "additive, never replacing" behavior.
- **Positive signals:** A user in #85418 explicitly thanked a maintainer for fixing their Chrome DevTools blank-profile issue. Community members are also salvaging abandoned PRs (e.g., #82758 salvages #64011 for Kanban log redaction), indicating a healthy contributor ecosystem.

## 8. Backlog Watch

These items have been waiting the longest and would benefit from maintainer attention:

- [#4438](https://github.com/NousResearch/hermes-agent/issues/4438) — **Spreadsheet Skill feature request** (open since Apr 1, 8 comments).
- [#33049](https://github.com/NousResearch/hermes-agent/issues/33049) — **Configurable credential pool exhaustion TTLs** (open since May 27).
- [#35601](https://github.com/NousResearch/hermes-agent/pull/35601) — **Prevent credential leaks and SQLite data loss in profile exports** (PR open since May 31, security-relevant).
- [#52289](https://github.com/NousResearch/hermes-agent/pull/52289) — **Classify provider memory-ceiling 400s as overloaded, not context_overflow** (PR open since Jun 25, relevant for local inference users).
- [#64866](https://github.com/NousResearch/hermes-agent/pull/64866) — **WeCom websocket backoff during auth** (PR open since Jul 15).
- [#72229](https://github.com/NousResearch/hermes-agent/pull/72229) — **Isolate search pagination from shell aliases** (PR open since Jul 26).
- [#73063](https://github.com/NousResearch/hermes-agent/pull/73063) — **Stop Telegram typing before command delivery** (PR open since Jul 28, message-delivery risk).
- [#77773](https://github.com/NousResearch/hermes-agent/pull/77773) — **Update `@playwright/test` to fix stuck installation** (PR open since Aug 3, references issue #76312).

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-14

## 1. Today's Overview

PicoClaw saw moderate activity over the last 24 hours (updates on 2026-08-13): 3 issues and 9 PRs were touched, with no new releases published. The PR pipeline was dominated by routine dependency maintenance — 6 fresh Dependabot bumps were opened (AWS SDK, Anthropic SDK, Mautrix) while 3 older, stale Dependabot PRs were closed as superseded. On the product side, two new feature requests were filed (#3330, #3331) and an unresolved Web UI lag bug (#3281) continues to accumulate discussion. Notably, no feature or bugfix PR was merged during this window, and the week-old web lockfile fix (#3318) remains unmerged.

## 2. Releases

No new releases. Latest published version remains **0.3.1** (referenced in issue #3281).

## 3. Project Progress

Three dependency PRs were closed today, all marked `stale` and superseded by newer versions:

- [PR #3304](https://github.com/sipeed/picoclaw/pull/3304) — `anthropic-sdk-go` 1.55.1 → 1.61.0 (closed; replaced by #3334 targeting 1.62.0)
- [PR #3305](https://github.com/sipeed/picoclaw/pull/3305) — `bedrockruntime` 1.53.3 → 1.56.2 (closed; replaced by #3336 targeting 1.57.1)
- [PR #3306](https://github.com/sipeed/picoclaw/pull/3306) — `aws-sdk-go-v2/config` 1.32.25 → 1.32.33 (closed; replaced by #3335 targeting 1.32.35)

This is routine churn; no feature work or bugfixes landed. The fix for the broken `pnpm-lock.yaml` ([PR #3318](https://github.com/sipeed/picoclaw/pull/3318)) remains open with no review activity.

## 4. Community Hot Topics

- **[Issue #3281 — Web UI chat input is very laggy with long history](https://github.com/sipeed/picoclaw/issues/3281)** — the most active item: 5 comments, 1 👍, open since 2026-07-21 and still unanswered by maintainers. The reporter describes degraded input performance in the web UI as session history grows. This is the clearest community pain signal right now.
- **Feature requests #3330 and #3331** (both created 2026-08-13) have no comments yet but target developer-facing flexibility (subagent model overrides, transcription endpoint support) — worth watching for traction.
- **Dependabot flurry (#3332–#3336)** — 6 new dependency PRs in a single day reflects active upstream ecosystem movement but adds review-queue pressure.

## 5. Bugs & Stability

| Severity | Item | Status | Notes |
|---|---|---|---|
| **Medium** | [Issue #3281](https://github.com/sipeed/picoclaw/issues/3281) — Web UI input lag with long session history | Open, no fix PR | Affects core UX; reproduced by user on v0.3.1, Go 1.25.11, PicoClaw Web |
| **Low** | [PR #3318](https://github.com/sipeed/picoclaw/pull/3318) — broken `web/frontend/pnpm-lock.yaml` (duplicate `semver@7.8.5` key blocks pnpm install) | Open fix, unmerged | Blocks web frontend builds; fix submitted ~1 week ago |

No crashes, regressions, or new bugs were reported today. The lag issue is the main stability risk and has now gone ~3 weeks without a maintainer response.

## 6. Feature Requests & Roadmap Signals

- **[Issue #3330 — Dynamic model override in `delegate`/`spawn`/`subagent` tools](https://github.com/sipeed/picoclaw/issues/3330)** — currently model selection is static (`config.json` for delegates, `defaultModel` for spawn). The request asks for call-time model specification, which would make subagent orchestration significantly more flexible. Moderate implementation scope; plausible for a near-term minor release.
- **[Issue #3331 — Support any `/audio/transcriptions` model, not just `*-whisper-*`](https://github.com/sipeed/picoclaw/issues/3331)** — proposes a `whisper-transcription: true` flag (or similar) in model/voice config so ASR can use newer/faster transcription endpoints. The author explicitly cites whisper variants as "too old and slow."

Both signals indicate users are pushing beyond default configurations — expect configuration-level flexibility to be a theme in upcoming releases.

## 7. User Feedback Summary

- **Performance:** The primary complaint is Web UI input lag growing with history length (#3281) — one user, 5 comments of corroborating detail; no maintainer acknowledgment yet.
- **Outdated defaults:** A user finds the hardcoded whisper-model path for transcription limiting and slow, asking for endpoint-agnostic support (#3331).
- **Orchestration rigidity:** Another user wants to override models dynamically per subagent call rather than being locked into static agent/default configs (#3330).
- **Overall sentiment:** Constructive and feature-oriented rather than frustrated, but the silence on #3281 is a notable satisfaction risk.

## 8. Backlog Watch

- **[Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)** — Open since 2026-07-21, updated 2026-08-13, 5 comments, no assignee, no fix PR. This is the longest-standing user-facing bug and deserves a maintainer triage response (even a "confirmed, planned" note).
- **[PR #3318](https://github.com/sipeed/picoclaw/pull/3318)** — Web lockfile fix submitted 2026-08-05, still unmerged and uncommented. It unblocks frontend builds and has a clear, minimal diff; needs review or explicit deferral.
- **Dependabot queue** — 7 open dependency PRs overall (#3332–#3336 plus older items); the stacked AWS-sdk family (#3332/#3335/#3336) particularly needs coordinated merges to avoid conflicts.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-14

## Today's Overview

The last 24 hours showed a very active PR pipeline: 19 PRs were updated, 13 were merged/closed, 6 remain open, and 1 new release shipped (`v2.2.0`). Issue activity was comparatively quiet, with only 2 issues updated — 1 closed and 1 newly open. The dominant theme was supply-chain hardening: agent-image signing/verification, CI gate behavior, and safe auto-approve workflows, alongside the completion of the template-to-Agent-Plugin migration. Overall project health looks strong, though one open approval-flow issue (#3235) and several older community PRs still need attention.

## Releases

- **v2.2.0** — released 2026-08-13 via [PR #3237](https://github.com/nanocoai/nanoclaw/pull/3237)

The release centers on template/plugin lifecycle management. The main noted change:

- `ncl groups create --template <ref>` now performs an **in-place update** when the group already carries the template’s plugin, rather than minting a duplicate agent.
- A dry run prints a plan of every plugin-owned surface — plugin files, skills, MCP-related configuration, etc.

This aligns with the breaking migration in [PR #3220](https://github.com/nanocoai/nanoclaw/pull/3220): **agent templates become Agent Plugins 1.0.0 directories**. Operators using older template formats should use the new dry-run/update flow to re-stamp or migrate existing groups.

## Project Progress

The following PRs were merged or closed in the last 24 hours:

**Supply-chain / CI hardening**
- [PR #3158](https://github.com/nanocoai/nanoclaw/pull/3158) — `verify-agent-image`: pin publisher identity and check attestations per architecture.
- [PR #3236](https://github.com/nanocoai/nanoclaw/pull/3236) — Repin agent image to `hardened-2026-08-13`.
- [PR #3238](https://github.com/nanocoai/nanoclaw/pull/3238) — Make `verify-agent-image` run on every PR so it can be a required status check.
- [PR #3239](https://github.com/nanocoai/nanoclaw/pull/3239) — Throwaway smoke test for the verification gate (closed unmerged).
- [PR #3240](https://github.com/nanocoai/nanoclaw/pull/3240) — Open agent-image bump PRs from a `repository_dispatch` event.
- [PR #3241](https://github.com/nanocoai/nanoclaw/pull/3241) — Allow a verified signature to serve as the approving review, off by default.

**Templates / plugins**
- [PR #3220](https://github.com/nanocoai/nanoclaw/pull/3220) — Breaking change: agent templates become Agent Plugins 1.0.0 directories.
- [PR #2909](https://github.com/nanocoai/nanoclaw/pull/2909) — Add template setup flow to the wizard and first-agent stamping.
- [PR #3231](https://github.com/nanocoai/nanoclaw/pull/3231) — Honor plugin MCP working directory in Codex and OpenCode provider config writers.

**Fixes / features**
- [PR #3229](https://github.com/nanocoai/nanoclaw/pull/3229) — Telegram pairing codes now use a CSPRNG instead of `Math.random()`.
- [PR #2624](https://github.com/nanocoai/nanoclaw/pull/2624) — Add per-server `disabledTools` in `McpServerConfig`.
- [PR #3145](https://github.com/nanocoai/nanoclaw/pull/3145) — DB migration to backfill missing destinations for existing messaging-group wirings.
- [PR #3237](https://github.com/nanocoai/nanoclaw/pull/3237) — Release chore for `v2.2.0`.

## Community Hot Topics

The issue tracker has low comment volume: [#3234](https://github.com/nanocoai/nanoclaw/issues/3234) has 1 comment, while [#3235](https://github.com/nanocoai/nanoclaw/issues/3235) has 0 comments/reactions. The more substantive discussion is happening through PR activity.

- [Issue #3234](https://github.com/nanocoai/nanoclaw/issues/3234) — **Closed**: Template-stamped agent groups get a bare UUID instead of `ag-` prefix, causing OneCLI `ensureAgent` to reject them. Underlying need: consistent, OneCLI-compatible agent identifiers for template-created groups.
- [Issue #3235](https://github.com/nanocoai/nanoclaw/issues/3235) — **Open**: Unknown-sender approval is triggered by webhooks/bots, creating unbounded approval cards; denials don’t persist. Underlying need: distinguish automated senders from humans and make denial decisions persistent.
- [PR #2420](https://github.com/nanocoai/nanoclaw/pull/2420) — Open community feature: bundled MCP wrapper for Hindsight memory. Shows continued demand for external memory integration.
- [PR #3218](https://github.com/nanocoai/nanoclaw/pull/3218) — Open feature: bounded JSON stdin for `ncl` clients. Signals operator interest in automation-friendly CLI input.

## Bugs & Stability

Ranked by severity:

| Severity | Item | Status | Notes |
|---|---|---|---|
| High | [Issue #3235](https://github.com/nanocoai/nanoclaw/issues/3235) — Unknown-sender approval unbounded cards | Open, no fix PR yet | Webhook/bot senders trigger the same approval flow as humans; denial doesn’t persist, causing endless approval cards. |
| Medium | [Issue #3234](https://github.com/nanocoai/nanoclaw/issues/3234) — Template-stamped groups missing `ag-` prefix | Closed | Bare UUID causes OneCLI `ensureAgent` rejection. Likely fixed in v2.2.0. |
| Medium | [PR #3229](https://github.com/nanocoai/nanoclaw/pull/3229) — Telegram pairing codes using `Math.random()` | Merged | Security fix: switched to `crypto.randomInt` and widened code space. |
| Medium | [PR #2346](https://github.com/nanocoai/nanoclaw/pull/2346) — Unknown slash commands dropped as passthrough | Open | Unknown commands can produce SDK output without `<message>` blocks, causing the response to be silently dropped. |
| Low | [PR #3145](https://github.com/nanocoai/nanoclaw/pull/3145) — Missing destinations for existing wirings | Merged | Migration 021 backfills destinations while preserving custom local names. |
| Low | [PR #3230](https://github.com/nanocoai/nanoclaw/pull/3230) — Removal docs point at retired data/env mirror | Open | Documentation-only fix; still needs review/merge. |

No crash-level regressions were reported today.

## Feature Requests & Roadmap Signals

No new formal feature-request issues were filed in the last 24 hours, but the PR queue provides strong roadmap signals:

- [PR #2420](https://github.com/nanocoai/nanoclaw/pull/2420) — `/add-hindsight` skill with a bundled MCP wrapper for Hindsight long-term memory. This has been open since May and represents a clear community feature request.
- [PR #3218](https://github.com/nanocoai/nanoclaw/pull/3218) — Generic `--stdin-json` input mode for host/container `ncl` clients. Likely valuable for scripted automation.
- [PR #2346](https://github.com/nanocoai/nanoclaw/pull/2346) — Treat unknown slash commands as normal chat instead of passthrough. Small behavioral fix with user-visible impact.
- [PR #3231](https://github.com/nanocoai/nanoclaw/pull/3231) — Plugin MCP working-directory support across Codex/OpenCode config writers; merged and likely to appear in the next release.
- [PR #3241](https://github.com/nanocoai/nanoclaw/pull/3241) — Optional verified-signature-as-approval is off by default, so this is a deliberate opt-in rather than a forced workflow change.

Predictions: the near-term minor release will likely include the merged template/plugin MCP work, while community PRs such as #3218 and #2346 are small enough to be picked up soon if maintainer bandwidth allows.

## User Feedback Summary

- **Pain point — template identifiers**: [Issue #3234](https://github.com/nanocoai/nanoclaw/issues/3234) shows that template-stamped agent groups weren’t compatible with OneCLI because of missing `ag-` prefixes. Users need consistent, predictable ID generation across setup paths.
- **Pain point — automated sender approvals**: [Issue #3235](https://github.com/nanocoai/nanoclaw/issues/3235) describes a real operations gap: webhook/bot senders shouldn’t be treated as human unknowns requiring approval.
- **Security awareness**: Community contributions like [PR #3229](https://github.com/nanocoai/nanoclaw/pull/3229) and the stamp-time hardening in [PR #3220](https://github.com/nanocoai/nanoclaw/pull/3220) show active user investment in NanoClaw’s security posture.
- **Documentation friction**: [PR #3230](https://github.com/nanocoai/nanoclaw/pull/3230) identifies stale docs pointing at a retired data/env mirror, indicating users are hitting outdated guidance.
- **Positive signal**: 13 PRs were merged/closed in one day, including multiple core-team CI improvements; the project is shipping at a fast and responsive cadence.

## Backlog Watch

The following items have been open for a while or lack visible maintainer response:

- [PR #2346](https://github.com/nanocoai/nanoclaw/pull/2346) — Open since 2026-05-08. Fix for unknown slash commands being silently dropped. Important correctness fix, still unmerged.
- [PR #2420](https://github.com/nanocoai/nanoclaw/pull/2420) — Open since 2026-05-11. Large community feature for Hindsight memory integration; likely needs maintainer review/decision.
- [PR #3218](https://github.com/nanocoai/nanoclaw/pull/3218) — Open since 2026-08-09. Bounded JSON stdin support; useful for automation but no merge yet.
- [PR #3230](https://github.com/nanocoai/nanoclaw/pull/3230) — Open since 2026-08-12. Small docs fix that should be low-cost to merge.
- [Issue #3235](https://github.com/nanocoai/nanoclaw/issues/3235) — Open since 2026-08-13 with no comments captured; needs triage to determine whether the approval flow should ignore automated senders or persist denials.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-14

## 1. Today's Overview

IronClaw is in a very active phase: **50 issues and 50 PRs were updated in the last 24 hours**, with 32 issues still open/active and 18 closed, plus 26 open PRs and 24 merged/closed PRs. The project shipped **stable v1.2.0**, promoted from `1.2.0-rc.3`, which marks an important release-health milestone. Development energy is concentrated on the "Reborn" architecture work around pluggable agent loops ([#7482](https://github.com/nearai/ironclaw/issues/7482)) and on reducing Postgres write amplification ([#7591](https://github.com/nearai/ironclaw/issues/7591) sub-issues). The overall signal is healthy: maintainers are landing fixes, validating live canaries, and tightening docs/CI contracts.

## 2. Releases

- **ironclaw-v1.2.0** — stable promotion of `1.2.0-rc.3`
  - Includes fixes validated in RC2 and RC3 plus the complete RC1 feature set.
  - The runtime container image now installs `curl`, so in-container HTTP healthchecks can execute.
  - No explicit breaking changes or migration notes were included in the provided release notes.
  - Promotion PR: [nearai/ironclaw#7625](https://github.com/nearai/ironclaw/pull/7625)

## 3. Project Progress

Notable merged/closed PRs in the last 24 hours:

- [nearai/ironclaw#7625](https://github.com/nearai/ironclaw/pull/7625) — promote `1.2.0-rc.3` to stable `1.2.0`.
- [nearai/ironclaw#7163](https://github.com/nearai/ironclaw/pull/7163) — structural editing for DOCX/XLSX/PPTX, PDF rendering from HTML, and a fix for the #7109 text-log regression.
- [nearai/ironclaw#7581](https://github.com/nearai/ironclaw/pull/7581) — refresh bundled MCP state after OAuth so tools no longer appear stuck as `setup_needed`.
- [nearai/ironclaw#7590](https://github.com/nearai/ironclaw/pull/7590) — align bundled-skill marker owner with runtime mint in live canary verification.
- [nearai/ironclaw#7579](https://github.com/nearai/ironclaw/pull/7579) — widen seeded slack grant for live canary lanes and narrate scrub verdicts.
- [nearai/ironclaw#7531](https://github.com/nearai/ironclaw/pull/7531) — make repeated-call detection advisory-only, reducing false-positive loop warnings.
- [nearai/ironclaw#7376](https://github.com/nearai/ironclaw/pull/7376) — extend the CI guidance path-reference gate to the `docs/` surface.
- [nearai/ironclaw#7506](https://github.com/nearai/ironclaw/pull/7506) — dependency group update (17 packages).

Open PRs also show strong forward progress on performance and architecture: [#7628](https://github.com/nearai/ironclaw/pull/7628), [#7629](https://github.com/nearai/ironclaw/pull/7629), [#7630](https://github.com/nearai/ironclaw/pull/7630), and [#7631](https://github.com/nearai/ironclaw/pull/7631) target per-turn write reduction, while [#7633](https://github.com/nearai/ironclaw/pull/7633) implements the unbound-turns design.

## 4. Community Hot Topics

- [nearai/ironclaw#7482](https://github.com/nearai/ironclaw/issues/7482) — **Epic: Pluggable agent loops** (6 comments). This is the dominant roadmap item. It proposes IronClaw as a kernel and moves agent loops and integrations off-core. Many sub-issues were opened/closed this week around egress, harness drivers, and capability access. Underlying need: support multiple agent harnesses without embedding every loop in the core.
- [nearai/ironclaw#6257](https://github.com/nearai/ironclaw/issues/6257) — **PDF attachment `mime_type` error** (4 comments). Closed in this window; appears to be resolved.
- [nearai/ironclaw#2117](https://github.com/nearai/ironclaw/issues/2117) — **Local file/MCP bridge daemon for cloud deployments** (2 comments, 1 👍). Users want cloud-hosted IronClaw to reach local files such as Obsidian vaults.
- [nearai/ironclaw#7185](https://github.com/nearai/ironclaw/issues/7185) — **Memory not reliably recalled across conversations** (2 comments). Multiple community testers independently observed this issue.

## 5. Bugs & Stability

Ranked by severity:

- **High — [nearai/ironclaw#7589](https://github.com/nearai/ironclaw/issues/7589): Sonnet-5 on NEAR AI Cloud returns 500 errors.** Reported as ongoing for three days, with reference to `nearai/cloud-api#920`. External/service-side issue; no IronClaw fix PR yet visible.
- **High — [nearai/ironclaw#7185](https://github.com/nearai/ironclaw/issues/7185): Memory recall across conversations is unreliable.** Core functionality concern; open with no fix PR yet.
- **High/Medium — [nearai/ironclaw#7626](https://github.com/nearai/ironclaw/issues/7626): Custom MCP requiring browser/email auth gets stuck during connection.** New bug, open; no fix PR yet.
- **Medium — [nearai/ironclaw#7627](https://github.com/nearai/ironclaw/issues/7627): GitHub extension shows as connected after invalid credentials.** State/UX misreport; open; no fix PR yet.
- **Medium — [nearai/ironclaw#6257](https://github.com/nearai/ironclaw/issues/6257): `Invalid value (attachments.mime_type)` when sending PDFs.** Closed in this window; likely fixed.

Stability work was also visible through live-canary fixes ([#7590](https://github.com/nearai/ironclaw/pull/7590), [#7579](https://github.com/nearai/ironclaw/pull/7579)) and the document regression fix in [#7163](https://github.com/nearai/ironclaw/pull/7163).

## 6. Feature Requests & Roadmap Signals

- [nearai/ironclaw#7580](https://github.com/nearai/ironclaw/issues/7580) — **Expose IronClaw Reborn version in the web UI.** Simple UX gap likely to land soon.
- [nearai/ironclaw#2117](https://github.com/nearai/ironclaw/issues/2117) — **ironclaw-bridge: local file/MCP bridge for cloud-hosted deployments.** Long-standing request; likely a major roadmap candidate.
- [nearai/ironclaw#7482](https://github.com/nearai/ironclaw/issues/7482) / [nearai/ironclaw#7624](https://github.com/nearai/ironclaw/issues/7624) — **ACP harness executor v0.** Explicitly scoped as the only pluggable-loops item to build right now.
- [nearai/ironclaw#7513](https://github.com/nearai/ironclaw/pull/7513) — **ACP serve command with streaming + cancel support.** Open PR; would let external tools connect to IronClaw agents via ACP.
- [nearai/ironclaw#7633](https://github.com/nearai/ironclaw/pull/7633) — **Prepared-context accept door, unbound run lane, kernel binding-ref deletion.** Large architecture change for unbound turns.
- [nearai/ironclaw#7548](https://github.com/nearai/ironclaw/pull/7548) — **Structured execution contracts for automations.** Adds explicit goal/success criteria/output contracts.
- [nearai/ironclaw#7184](https://github.com/nearai/ironclaw/pull/7184) — **Nostr host functions for WASM tools.** Extends the WASM tool sandbox.

Prediction: the next minor release is likely to include unbound-turns work, automation execution contracts, Postgres write-coalescing PRs, and possibly the first experimental ACP harness path.

## 7. User Feedback Summary

Real user pain points visible in this window:

- Cloud-hosted IronClaw cannot access local laptop files ([#2117](https://github.com/nearai/ironclaw/issues/2117)).
- Context/memory established in one conversation is not reliably available later ([#7185](https://github.com/nearai/ironclaw/issues/7185)).
- Custom MCP connections with browser/email OAuth flows get stuck ([#7626](https://github.com/nearai/ironclaw/issues/7626)).
- GitHub extension reports "connected" even when credentials are invalid ([#7627](https://github.com/nearai/ironclaw/issues/7627)).
- The Reborn version is not discoverable from the web UI ([#7580](https://github.com/nearai/ironclaw/issues/7580)).
- PDF sending/generation failed with `mime_type` errors ([#6257](https://github.com/nearai/ironclaw/issues/6257)).
- Sonnet-5 on NEAR AI Cloud has been unavailable/erroring for days ([#7589](https://github.com/nearai/ironclaw/issues/7589)).

Overall, users are actively testing IronClaw through feedback channels and weekly Champions check-ins. The maintainer response has been quick for several issues, and the stable 1.2.0 promotion should improve confidence, but OAuth flows, memory recall, and extension-state accuracy remain satisfaction risks.

## 8. Backlog Watch

- [nearai/ironclaw#2117](https://github.com/nearai/ironclaw/issues/2117) — opened **2026-04-07**, updated but still open. This is the oldest important feature issue in this window. Needs a maintainer roadmap decision.
- [nearai/ironclaw#7184](https://github.com/nearai/ironclaw/pull/7184) — PR open since **2026-08-04**, from a new contributor, adding Nostr host functions. No review activity visible in the provided data.
- [nearai/ironclaw#7513](https://github.com/nearai/ironclaw/pull/7513) — PR open since **2026-08-11**, adding an ACP serve command. Important for the pluggable-harness direction; needs review.
- [nearai/ironclaw#7020](https://github.com/nearai/ironclaw/pull/7020) — dependency bump for `tokio-tungstenite` open since **2026-08-02**.
- [nearai/ironclaw#7262](https://github.com/nearai/ironclaw/pull/7262) — WASM tooling dependency bump open since **2026-08-05**.
- [nearai/ironclaw#7378](https://github.com/nearai/ironclaw/pull/7378) — doc-fact contract tests PR, part of the doc-truth series, open since **2026-08-07**.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-14

## 1. Today's Overview

Between 2026-08-13 and 2026-08-14, LobsterAI showed a steady development pulse: **11 PRs were updated**, with **6 closed/merged** and **5 still open**, while only **1 issue** was touched. No new releases were published. The main momentum was in renderer/cowork UI consolidation — unifying skills, MCP, and connector management views — plus a scheduled-task bug fix. The open-issue backlog remains small, and no new regressions or crashes were reported in the window. Overall project health looks healthy, with active PR throughput and a moderate but manageable stale PR backlog.

## 2. Releases

**None.**  
No new releases were published in the last 24 hours, so there are no changelog details, breaking changes, or migration notes to report.

## 3. Project Progress

The **6 closed/merged PRs** in the last 24 hours indicate focused work on UI unification, cowork management, activity features, and a scheduled-task fix:

- **[#2488 — refactor(cowork): btw and management UI](https://netease-youdao/LobsterAI PR #2488)**  
  Closed. Refactors cowork “btw” and management UI polish.

- **[#2487 — refactor(skills): merge skills and mcp views into unified skills-and-connectors view](https://netease-youdao/LobsterAI PR #2487)**  
  Closed. Consolidates skills/MCP entry points into one unified management surface.

- **[#2486 — refactor(mcp): unify MCP card/detail UI with kits and skills styling](https://netease-youdao/LobsterAI PR #2486)**  
  Closed. Standardizes MCP card/detail components, reuses shared overflow menu and typography styles.

- **[#2485 — feat(activity): support evergreen daily check-in](https://netease-youdao/LobsterAI PR #2485)**  
  Closed. Converts the daily check-in activity into an evergreen feature, adds status auto-refresh, and moves points details to a web page.

- **[#1232 — fix(scheduledTask): first execution result now pushed to UI](https://netease-youdao/LobsterAI PR #1232)**  
  Closed. Fixes a root-cause bug where a scheduled task’s first run result was not delivered to the UI because `previousRunAtMs` defaulted to `0`.

- **[#2484 — Feat/enterprise edition](https://netease-youdao/LobsterAI PR #2484)**  
  Closed. Enterprise-edition feature PR; the metadata summary is an empty template, so detailed scope is not available from the snapshot.

## 4. Community Hot Topics

The only issue updated in the last 24 hours was:

- **[#1162 — Add Vitest unit tests for openclawMemoryFile and openclawLocalTimeContextPrompt](https://netease-youdao/LobsterAI Issue #1162)**  
  *Open, stale-tagged, 1 comment.*  
  This issue requests test coverage for two core OpenClaw modules that currently have **zero tests**: memory-file management (`MEMORY.md` read/write/SQLite migration) and local-time-context prompt generation. The associated PR **[#1165](https://netease-youdao/LobsterAI PR #1165)** adds 75 Vitest tests, but both remain open. The underlying need is clear: **critical memory and prompt-generation logic is unprotected against regressions**.

No PRs in the window had recorded comment/reaction counts in the metadata.

## 5. Bugs & Stability

No new crashes or security regressions were reported. The following bugs and fixes were active, ranked by estimated user impact:

1. **OpenClaw skill toggles silently ineffective — [#2483 (open)](https://netease-youdao/LobsterAI PR #2483)**  
   Skill entries are keyed by directory name instead of parsed frontmatter `name`, so OpenClaw can ignore enable/disable overrides without warning. This is the most severe active item because it causes silent misconfiguration. A fix PR exists and is open.

2. **Scheduled task “Run now” gives no feedback — [#1163 (open)](https://netease-youdao/LobsterAI PR #1163)**  
   No loading state, 15s polling lag, and no immediate status sync. Users may double-click and cannot tell if the action was triggered. Fix PR exists but is stale and unmerged.

3. **Duplicate custom agent names allowed — [#1166 (open)](https://netease-youdao/LobsterAI PR #1166)**  
   The create-agent flow does not prevent duplicate names, making agent lists ambiguous. Fix PR exists but is stale.

4. **First scheduled task result not pushed to UI — [#1232 (closed)](https://netease-youdao/LobsterAI PR #1232)**  
   Fixed by the closed PR #1232. The root cause was `previousRunAtMs > 0` blocking first-run updates.

## 6. Feature Requests & Roadmap Signals

No explicit new feature requests were filed in the last 24 hours. However, merged/closed PRs provide strong roadmap signals:

- **Unified skills-and-connectors management** ([#2487](https://netease-youdao/LobsterAI PR #2487)) suggests the project is moving toward a single management hub for skills, MCP servers, and connectors.
- **Consistent MCP/skill/kit UI styling** ([#2486](https://netease-youdao/LobsterAI PR #2486)) indicates design-system harmonization is a current focus.
- **Evergreen daily check-in** ([#2485](https://netease-youdao/LobsterAI PR #2485)) points to long-running engagement features rather than one-off campaign activities.
- **Enterprise edition groundwork** ([#2484](https://netease-youdao/LobsterAI PR #2484)) suggests enterprise-focused capabilities may be in an upcoming release or branch.
- **Cowork management UI refactor** ([#2488](https://netease-youdao/LobsterAI PR #2488)) signals continued investment in cowork workflows.

The next version will likely include the unified skills/MCP interface and evergreen check-in, possibly alongside enterprise edition features.

## 7. User Feedback Summary

The data reveals several real user-facing pain points:

- **Scheduled tasks need instant, reliable feedback** — users cannot tell whether “Run now” succeeded ([#1163](https://netease-youdao/LobsterAI PR #1163)), and first-run results were silently missing ([#1232](https://netease-youdao/LobsterAI PR #1232)).
- **Agent name collisions cause confusion** — duplicate custom agent names make the agent list ambiguous ([#1166](https://netease-youdao/LobsterAI PR #1166)).
- **OpenClaw skill enable/disable appears broken** — UI toggles have no effect when frontmatter names differ from directory names ([#2483](https://netease-youdao/LobsterAI PR #2483)).
- **Core memory/time-context modules have no test confidence** — users/contributors see zero coverage as a stability risk ([#1162](https://netease-youdao/LobsterAI Issue #1162)).
- **UI inconsistency across skills/MCP/cowork** was acknowledged and addressed in the recent refactors ([#2486](https://netease-youdao/LobsterAI PR #2486), [#2487](https://netease-youdao/LobsterAI PR #2487), [#2488](https://netease-youdao/LobsterAI PR #2488)).

Overall, users are looking for predictable behavior in task execution and configuration; the team appears responsive to those concerns, though some fixes are still waiting in the backlog.

## 8. Backlog Watch

Several important items need maintainer attention:

- **[#1165 — PR: tests for openclawMemoryFile and openclawLocalTimeContextPrompt](https://netease-youdao/LobsterAI PR #1165)**  
  Open since **2026-03-31**, stale-tagged. Adds 75 tests to zero-coverage core modules. Directly resolves issue [#1162](https://netease-youdao/LobsterAI Issue #1162).

- **[#1156 — PR: tests for commandSafety and coworkMemoryJudge](https://netease-youdao/LobsterAI PR #1156)**  
  Open since **2026-03-31**, stale-tagged. Would add tests for dangerous-command detection and memory-judge quality scoring — both safety-critical paths.

- **[#1163 — PR: scheduled task “Run now” feedback + optimistic updates](https://netease-youdao/LobsterAI PR #1163)**  
  Open since **2026-03-31**, stale-tagged. UX fix with clear user impact.

- **[#1166 — PR: prevent duplicate custom agent names](https://netease-youdao/LobsterAI PR #1166)**  
  Open since **2026-03-31**, stale-tagged. Small bugfix with no maintainer response visible in the snapshot.

- **[#2483 — PR: key OpenClaw skill entries by frontmatter name](https://netease-youdao/LobsterAI PR #2483)**  
  Open, created **2026-08-13**. Addresses a real silent-failure bug and should be prioritized for review.

- **[#1162 — Issue: Vitest coverage for memory/time-context modules](https://netease-youdao/LobsterAI Issue #1162)**  
  Open, stale-tagged, with 1 comment. The request remains unsatisfied despite an associated PR.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-14

## Today's Overview
Moltis saw light issue activity and moderate open-PR activity in the last 24 hours: 1 open issue, 4 open pull requests, and no new releases. No PRs were merged or closed during this window, indicating a stabilization and review phase rather than a high-velocity landing day. Activity is focused on fixing macOS/bash tooling issues, correcting dependency module-path regressions after upstream org renames, addressing a flaky test, and advancing a large connector feature PR. Overall project health appears stable, with maintainers actively iterating on blockers.

## Releases
No new releases were published in this period.

## Project Progress
No pull requests were merged or closed in the last 24 hours.

Open PRs currently advancing the project:

- **#1194** — `fix(scripts): guard empty bash array expansions for macOS bash 3.2`  
  Fixes `just local-validate-full` crashing on macOS under `set -euo pipefail`.  
  [Moltis PR #1194](https://github.com/moltis-org/moltis/pull/1194)

- **#1192** — `fix(skills): point wacrawl install metadata at the openclaw org`  
  Repairs the `wacrawl` skill’s Go install fallback after upstream repository/org rename.  
  [Moltis PR #1192](https://github.com/moltis-org/moltis/pull/1192)

- **#1191** — `fix(sandbox): point gogcli module path at the openclaw org`  
  Fixes `moltis sandbox build` failing on every pre-built image because a dependency module moved to the `openclaw` org.  
  [Moltis PR #1191](https://github.com/moltis-org/moltis/pull/1191)

- **#1190** — `Add durable CalDAV and channel history connectors`  
  Large feature PR adding provider-neutral connector persistence, atomic snapshots, scheduling, projections, bounded local full-text search, read-only CalDAV datasets, and message-history datasets for Slack, Discord, Matrix, and Microsoft Teams.  
  [Moltis PR #1190](https://github.com/moltis-org/moltis/pull/1190)

## Community Hot Topics
No issues or PRs currently show recorded comments or reactions in the data window, so engagement signals are limited.

The most substantive open item is **PR #1190**, which proposes a broad set of new connector capabilities and is likely to attract review discussion. The only updated issue, **#1193**, documents a flaky test and may also draw maintainer attention for CI stability.

- [Moltis Issue #1193](https://github.com/moltis-org/moltis/issues/1193)
- [Moltis PR #1190](https://github.com/moltis-org/moltis/pull/1190)

## Bugs & Stability
Bugs and stability issues ranked by severity:

1. **High — `moltis sandbox build` fails on every pre-built image**  
   `gogcli` moved to the `openclaw` org and its module path changed, causing the generated Dockerfile’s `go install` step to fail.  
   Fix PR open: [Moltis PR #1191](https://github.com/moltis-org/moltis/pull/1191)  
   Source: [Moltis PR #1191 summary](https://github.com/moltis-org/moltis/pull/1191)

2. **Medium — `wacrawl` skill install fallback is broken**  
   The skill’s `requires.install` entry points to the old `steipete/wacrawl` module path, but upstream has renamed to `openclaw/wacrawl`.  
   Fix PR open: [Moltis PR #1192](https://github.com/moltis-org/moltis/pull/1192)

3. **Medium-low — macOS bash 3.2 script failure**  
   `just local-validate-full` dies with an unbound variable error under `set -euo pipefail` when no PR number is supplied.  
   Fix PR open: [Moltis PR #1194](https://github.com/moltis-org/moltis/pull/1194)

4. **Low/medium — Flaky fanout timeout test under full-suite load**  
   `moltis-gateway push::tests::fanout_is_bounded_and_times_out_a_hung_endpoint` fails intermittently only during full-workspace runs. No fix PR is open yet.  
   [Moltis Issue #1193](https://github.com/moltis-org/moltis/issues/1193)

## Feature Requests & Roadmap Signals
The main roadmap signal is **PR #1190**, which would add durable connector infrastructure for CalDAV and messaging platform history. If merged, it would likely become a significant feature in the next Moltis release, enabling:

- Provider-neutral connector persistence and atomic snapshots
- Read-only CalDAV datasets
- Reusable Slack, Discord, Matrix, and Microsoft Teams message-history datasets
- Bounded local full-text search
- Scheduling and projections

No new feature-request issues were opened or updated in the last 24 hours.

## User Feedback Summary
Real user pain points visible in this window:

- **Broken sandbox builds** due to upstream dependency module path changes, blocking users from building pre-built images.
- **Broken skill installation** for `wacrawl` after its org rename.
- **macOS developer experience issues** with bash 3.2 compatibility in validation scripts.
- **CI flakiness** under full-suite load, which can reduce trust in test results.

The presence of targeted fix PRs for the macOS script, `wacrawl`, and `gogcli` issues suggests maintainers are responsive to developer-facing breakages. No explicit satisfaction/dissatisfaction signals such as comments or reactions are available in this data window.

## Backlog Watch
There are no clearly stale, long-unanswered issues in this data window. The most important item needing maintainer attention is **PR #1190**, a large feature that has been open since 2026-08-11 and may require thorough review. The small fix PRs **#1191**, **#1192**, and **#1194** also appear ready for review/merge. The flaky test issue **#1193** is new and may need a CI triage decision.

- [Moltis PR #1190](https://github.com/moltis-org/moltis/pull/1190)
- [Moltis PR #1191](https://github.com/moltis-org/moltis/pull/1191)
- [Moltis PR #1192](https://github.com/moltis-org/moltis/pull/1192)
- [Moltis PR #1194](https://github.com/moltis-org/moltis/pull/1194)
- [Moltis Issue #1193](https://github.com/moltis-org/moltis/issues/1193)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw / QwenPaw Project Digest — 2026-08-14

## 1. Today's Overview

CoPaw/QwenPaw is in a very active state: 42 issues were updated in the last 24 hours (25 open/active, 17 closed), and 50 PRs were updated (31 open, 19 merged/closed). Two releases shipped, including v2.1.0 with the new QwenPaw OS Shell. Community engagement is strong, but the issue stream shows recurring reliability and security themes: agents pausing mid-task, antivirus interference on Windows, and several permission-model security reports. Maintainer velocity appears healthy, with multiple older issues closed and new fix PRs targeting semaphore leaks, plugin reloads, and chat-history pagination. The main remaining risk is the backlog of large architectural PRs and security clarifications.

## 2. Releases

### v2.1.0
- **QwenPaw OS Shell** — apps can open in movable, resizable windows with a launcher, taskbar, notifications, and saved layouts ([#6645](https://github.com/agentscope-ai/QwenPaw/pull/6645)).
- Installed and marketplace apps now share a unified catalog across the App Center (source text truncated).
- No explicit migration notes or breaking changes were provided in the release snippet.

### v2.1.0-beta.5
- `fix(chats)`: handle dict-like model responses ([#6813](https://github.com/agentscope-ai/QwenPaw/pull/6816) by @RerankerGuo).
- `fix(memory)`: simplify long-term memory guidance ([#6942](https://github.com/agentscope-ai/QwenPaw/pull/6942) by @jinliyl).
- `docs(website)`: Files workspace documentation updates.

## 3. Project Progress

Notable closed PRs in the last 24h:

- **fix(mission): enforce max_iterations server-side in MissionGate** — closed. Prevents controller LLMs from dispatching sub-agents indefinitely ([#6652](https://github.com/agentscope-ai/QwenPaw/pull/6652)).
- **fix(chats): add pagination to chat history and enable GZip compression** — closed. Fixes 30s timeouts on long chats ([#6636](https://github.com/agentscope-ai/QwenPaw/pull/6636)).
- **fix: make Auto-Dream integration resilient** — closed, first-time contributor. Malformed structured output no longer fails the entire Auto-Dream task ([#6884](https://github.com/agentscope-ai/QwenPaw/pull/6884)).
- **feat(channels): install optional dependencies on demand** — closed. Keeps channel SDKs out of the default dependency set ([#6387](https://github.com/agentscope-ai/QwenPaw/pull/6387)).
- **chore: update release notes for v2.1.0** — closed ([#6989](https://github.com/agentscope-ai/QwenPaw/pull/6989)).

Open PRs show active feature work around Matrix per-sender isolation ([#7001](https://github.com/agentscope-ai/QwenPaw/pull/7001)), session-scoped multi-project directories ([#6976](https://github.com/agentscope-ai/QwenPaw/pull/6976)), a "pawport" import flow from Codex/Qoder ([#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960)), and provider capability templates ([#6823](https://github.com/agentscope-ai/QwenPaw/pull/6823)).

## 4. Community Hot Topics

Most-commented issues in the last 24h:

- [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) — **Agent stops after “planning” and requires user to say “继续”** (6 comments). High-frequency pain point: the model announces the next step but does not execute it autonomously.
- [#6973](https://github.com/agentscope-ai/QwenPaw/issues/6973) — **Question: support Aliyun Bailian token plan** (5 comments). China-cloud users want native Aliyun billing integration.
- [#6811](https://github.com/agentscope-ai/QwenPaw/issues/6811) — **OpenAI Responses continuation summary ignores `disable_thinking` and misreports cancellation** (5 comments, closed). Need to respect reasoning flags and distinguish cancellation from malformed output.
- [#6853](https://github.com/agentscope-ai/QwenPaw/issues/6853) — **prompts.py claims Dream writes to MEMORY.md but it never did** (5 comments, closed). Documentation/prompt accuracy around the memory pipeline.
- [#6047](https://github.com/agentscope-ai/QwenPaw/issues/6047) — **New chat reopens old session after upgrade** (4 comments, closed). Migration consistency issue.
- [#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847) — **QwenPaw killed by antivirus, WorkBuddy not** (4 comments). Windows trust/false-positive issue.
- [#6882](https://github.com/agentscope-ai/QwenPaw/issues/6882) — **How to integrate CopilotKit?** (4 comments, closed). Users want more integration examples.

PR comment counts were not exposed in the provided data, so issue activity dominates this section.

## 5. Bugs & Stability

Ranked by severity:

- **Security: exposed port + unauthenticated plugin API** — two issues report `0.0.0.0:8088` exposure, no-auth plugin install, arbitrary command execution, and SSH backdoor persistence. Both are marked closed/invalid in the tracker, but no public analysis is visible in the provided data. [#6992](https://github.com/agentscope-ai/QwenPaw/issues/6992), [#6993](https://github.com/agentscope-ai/QwenPaw/issues/6993).
- **Security: plugins can silently create cron jobs and inject user-visible messages** — closed, severity medium-high ([#6916](https://github.com/agentscope-ai/QwenPaw/issues/6916)).
- **Windows startup crash** — probabilistic startup errors/crashes on pip-installed v2.0.1 ([#6955](https://github.com/agentscope-ai/QwenPaw/issues/6955)).
- **Windows Desktop TUI fails with `transport: Connection closed`** — packaged `qwenpaw.exe` rejects `-m qwenpaw acp` in v2.1.0 ([#7007](https://github.com/agentscope-ai/QwenPaw/issues/7007)).
- **Anthropic false-positive “sensitive image”** — long session with 61+ messages interrupted by model-side moderation (error 1026) ([#7008](https://github.com/agentscope-ai/QwenPaw/issues/7008)).
- **Scroll compaction hides pre-compact chat history** — UI only shows eviction index, despite records existing in `history.db` ([#6951](https://github.com/agentscope-ai/QwenPaw/issues/6951)).
- **Telegram `/new` does not rotate session ID** — context fills indefinitely via scroll history ([#6966](https://github.com/agentscope-ai/QwenPaw/issues/6966)).
- **Shabox breaks UV Run** — cannot write `~/.cache/uv`; workaround is adding a policy rule ([#7005](https://github.com/agentscope-ai/QwenPaw/issues/7005)).
- **Pod termination false positive** — Cloudflare Tunnel flagged as reverse proxy/mining ([#7009](https://github.com/agentscope-ai/QwenPaw/issues/7009)).
- **Language dropdown inconsistency** — low severity UI bug ([#7006](https://github.com/agentscope-ai/QwenPaw/issues/7006)).

Open fix PRs that address related stability issues:
- [#6998](https://github.com/agentscope-ai/QwenPaw/pull/6998) — prevents semaphore leaks from unconsumed LLM streams.
- [#6975](https://github.com/agentscope-ai/QwenPaw/pull/6975) — resets console context-usage ring after `/compact`.
- [#6996](https://github.com/agentscope-ai/QwenPaw/pull/6996) — restores workspace state before plugin reload swap.

## 6. Feature Requests & Roadmap Signals

Notable user-requested features:

- **Aliyun Bailian token plan support** ([#6973](https://github.com/agentscope-ai/QwenPaw/issues/6973)).
- **Embeddable chat sub-page** — chat UI without sidebar/header, API key in URL, richer session-list filtering ([#6970](https://github.com/agentscope-ai/QwenPaw/issues/6970)).
- **Lightweight server-side proxy client** — users want to control a server-deployed QwenPaw from a thin desktop client, not the full heavy desktop app ([#7002](https://github.com/agentscope-ai/QwenPaw/issues/7002)).
- **Inject `QWENPAW_CHANNEL` env var into shell subprocesses** ([#6995](https://github.com/agentscope-ai/QwenPaw/issues/6995)).
- **Append real current time to model context** to avoid date confusion in old sessions ([#6283](https://github.com/agentscope-ai/QwenPaw/issues/6283)).
- **Toggle to disable dynamic received-character counter** ([#6585](https://github.com/agentscope-ai/QwenPaw/issues/6585)).

In-flight PRs likely to land in the next release:
- **Session-scoped multi project directories** ([#6976](https://github.com/agentscope-ai/QwenPaw/pull/6976)) — a chat bound to multiple project dirs with a primary cwd.
- **Provider capability templates for custom models** ([#6823](https://github.com/agentscope-ai/QwenPaw/pull/6823)).
- **Matrix per-sender session/memory isolation in group rooms** ([#7001](https://github.com/agentscope-ai/QwenPaw/pull/7001)).
- **Pawport import flow** from Codex/Qoder ([#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960)).
- **Unified provider discovery/model metadata/routing** ([#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302)) — long-running architectural PR.

## 7. User Feedback Summary

- **Positive:** Users clearly value the project (“非常不错的项目” in [#6585](https://github.com/agentscope-ai/QwenPaw/issues/6585)), and the v2.1.0 OS Shell is a major UX milestone.
- **Biggest pain point:** agents plan then stall without a user nudge ([#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921)); this erodes trust in autonomous multi-step work.
- **Windows environment friction:** antivirus killing QwenPaw ([#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847)), startup crashes ([#6955](https://github.com/agentscope-ai/QwenPaw/issues/6955)), and TUI failure ([#7007](https://github.com/agentscope-ai/QwenPaw/issues/7007)).
- **Chinese cloud users want local billing/integration:** Aliyun token plan ([#6973](https://github.com/agentscope-ai/QwenPaw/issues/6973)).
- **Memory cost/forgetting remains a concern:** an external proposal for ViBo memory claims 97.5% fewer tokens ([#7003](https://github.com/agentscope-ai/QwenPaw/issues/7003)).
- **Use cases are real and complex:** financial data verification ([#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921), [#6768](https://github.com/agentscope-ai/QwenPaw/issues/6768)), long image-bearing history ([#7008](https://github.com/agentscope-ai/QwenPaw/issues/7008)), server deployment with local desktop control ([#7002](https://github.com/agentscope-ai/QwenPaw/issues/7002)).

## 8. Backlog Watch

Issues/PRs that need maintainer attention:

- **#6302 — unify provider discovery, model metadata, routing, and agent controls** ([PR](https://github.com/agentscope-ai/QwenPaw/pull/6302)): open since 2026-07-21, large architectural change with no merge signal.
- **#6715 — feat(onebot): localize inbound media before agent processing** ([PR](https://github.com/agentscope-ai/QwenPaw/pull/6715)): under review since 2026-08-05; may need feedback or rebase.
- **#6847 — antivirus kills QwenPaw** ([Issue](https://github.com/agentscope-ai/QwenPaw/issues/6847)): open since 08-09, 4 comments, no visible mitigation; Windows user trust issue.
- **#6921 — agent stops after planning** ([Issue](https://github.com/agentscope-ai/QwenPaw/issues/6921)): top-commented open bug (6 comments); likely high priority for agent reliability.
- **#6951 — Scroll compaction hides pre-compact history** ([Issue](https://github.com/agentscope-ai/QwenPaw/issues/6951)): user-visible transcript loss after compaction.
- **#6966 — Telegram `/new` does not rotate session ID** ([Issue](https://github.com/agentscope-ai/QwenPaw/issues/6966)): long-running context fill on Telegram.
- **#7009 — Pod termination false positive** ([Issue](https://github.com/agentscope-ai/QwenPaw/issues/7009)): newly opened, affects users running Cloudflare Tunnel; needs quick triage.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-14

## 1. Today's Overview

ZeroClaw saw a high level of activity in the last 24 hours: **50 issues** and **50 PRs** were updated, with **13 issues closed** and **9 PRs closed/merged**. No new release was cut. The busiest threads are dominated by security/architecture RFCs around shell command policy, runtime-owned sessions, memory lifecycle, and the v0.9.0 hardening queue. Many high-risk items remain **blocked** or **awaiting maintainer review**, indicating active but decision-bottlenecked progress. Overall project health is solid, with the project in a deliberate pre-0.9.0 stabilization and breaking-change planning phase.

---

## 2. Releases

**No new releases in the last 24h.**  
There are no new tagged versions available in this snapshot, so no changelog, migration notes, or breaking-change release notes are included.

---

## 3. Project Progress

### Closed/merged PRs in the last 24h (9 total; merge status not explicitly distinguished in snapshot)

- [#9969 fix(gateway): contain filesystem dashboard assets](https://github.com/zeroclaw-labs/zeroclaw/pull/9969) — Security fix: canonicalizes dashboard asset paths and blocks symlink escapes.
- [#9674 fix(infra): preserve session queue serialization during eviction](https://github.com/zeroclaw-labs/zeroclaw/pull/9674) — Fixes a race where idle eviction could remove a selected session slot before pending work is registered.
- [#9709 fix(tts): clean up Edge TTS temp output on every error path](https://github.com/zeroclaw-labs/zeroclaw/pull/9709) — Fixes temp-file leaks in the Edge TTS provider.
- [#9705 fix(config): allow config set on existing hyphenated cron aliases](https://github.com/zeroclaw-labs/zeroclaw/pull/9705) — Fixes `zeroclaw config set cron.<alias>.name ...` rejecting valid hyphenated aliases.
- [#9639 docs(architecture): document provider routing lifecycle](https://github.com/zeroclaw-labs/zeroclaw/pull/9639) — Adds source-grounded docs for provider routing, retries, fallbacks, cooldowns, and attribution.
- [#9932 ci(codeql): drop rust/hard-coded-cryptographic-value](https://github.com/zeroclaw-labs/zeroclaw/pull/9932) — Removes a CodeQL query producing 27 all-false-positive “critical” alerts.
- [#9980 ci(docker): sticky-disk layer cache for PR image builds on Blacksmith](https://github.com/zeroclaw-labs/zeroclaw/pull/9980) — Reduces CI cache thrashing for heavy Docker image builds.
- [#9984 ci: rust-cache useblacksmith path validation](https://github.com/zeroclaw-labs/zeroclaw/pull/9984) — Validation-only PR for Blacksmith cache path; closed after confirmation.
- [#8546 fix(cli): localize status fragments](https://github.com/zeroclaw-labs/zeroclaw/pull/8546) — Localizes remaining `zeroclaw status` fragments through the i18n layer.

### Notable open PRs advancing features

- [#9109 feat(providers): add native Hailo-Ollama support](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) — Adds dedicated provider support for Hailo-Ollama’s `/api/chat` and `/api/tags` contract.
- [#9420 fix(anthropic): support stored OAuth profiles](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) — Adds explicit `auth_mode = "oauth"` for Anthropic aliases.
- [#9713 feat(runtime): expose token accounting on history-trim events](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) — Improves history-trim observability by reporting token counts.
- [#9013 refactor(config)!: move TodoWrite display config into zerocode](https://github.com/zeroclaw-labs/zeroclaw/pull/9013) — Breaking config refactor moving display concerns out of the daemon.
- [#9986 feat(agents): export an agent to a portable bundle](https://github.com/zeroclaw-labs/zeroclaw/pull/9986) — Adds `zeroclaw agents export <alias> --out <dir>`.

---

## 4. Community Hot Topics

### Highest-activity issues by comment count

- [#8303 RFC: Goal mode v1 — bounded foreground Matrix work](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) — **20 comments, 1 👍**  
  Active debate about scope: restart handoff, channel admission, Web, and async child work were split out of the first delivery. Underlying need: durable multi-turn user goals without over-coupling.

- [#7155 RFC: per-execution confirmation tier for high-risk shell commands](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) — **18 comments**  
  Long-running security RFC, now in Revision 3. Underlying need: safe shell policy with allow/ask/deny patterns, similar to Claude Code.

- [#8692 Tracker: Maintainer decision queue for RFCs and design issues](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — **13 comments**  
  Community-visible tracker for blocked RFC/design decisions. Underlying need: clear decision throughput for high-risk architecture items.

- [#6850 RFC: Decouple memory lifecycle policy from storage backends](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) — **12 comments**  
  Underlying need: stop re-implementing memory consolidation and lifecycle governance in each gateway/channel.

- [#9328 Bug: verifiable-intent evaluates constraints without verifying credential chain](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) — **12 comments**  
  Security-focused bug: `vi_verify` checks caller-supplied constraints without cryptographic chain verification.

- [#9487 RFC: Runtime-owned conversation sessions and transport surface adapters](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) — **11 comments**  
  Large architecture proposal with related trackers; touches Web, ACP, channel runtime, and session persistence.

### Notable PRs by risk/size and activity

PR comment counts were not exposed in this snapshot, but the following PRs stand out due to size, risk, and continued updates:

- [#9109 Hailo-Ollama provider support](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) — `size:XL`, `risk:high`.
- [#9203 fix(sop): wire authenticated HTTP fan-in](https://github.com/zeroclaw-labs/zeroclaw/pull/9203) — `size:XL`, `risk:high`.
- [#9713 token accounting on history-trim events](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) — `size:XL`, `risk:high`.
- [#9013 TodoWrite display config move](https://github.com/zeroclaw-labs/zeroclaw/pull/9013) — `size:XL`, `risk:high`, breaking config change.
- [#9420 Anthropic stored OAuth profiles](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) — `size:XL`, `risk:high`.

---

## 5. Bugs & Stability

### High severity

- [#9328 verifiable-intent evaluates constraints without verifying the credential chain](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) — Open, `priority:p2`, `risk:high`, security. Critical correctness gap in VI verification. No direct fix PR yet; [#9942](https://github.com/zeroclaw-labs/zeroclaw/pull/9942) only improves config-surface reporting for the withheld `vi_verify` tool.
- [#9929 headless SOP step turns given a session path but never persisted](https://github.com/zeroclaw-labs/zeroclaw/issues/9929) — Open, `priority:p1`, `risk:high`, S2 degraded behavior. Headless SOP turns are not written to the session store despite receiving session identities.
- [#9389 unauthenticated POST /api/pair keys lockout on attacker-supplied header](https://github.com/zeroclaw-labs/zeroclaw/issues/9389) — Closed, `priority:p1`, security. Authentication bypass/lockout issue; now closed.

### Medium severity

- [#9366 WhatsApp Web accepts approval_timeout_secs and never reads it](https://github.com/zeroclaw-labs/zeroclaw/issues/9366) — Closed, `priority:p2`.
- [#9951 WeChat channel code and its 51 lib unit tests never compile or execute in CI](https://github.com/zeroclaw-labs/zeroclaw/issues/9951) — Closed, `priority:p2`, CI gap.
- [#9643 wit/VERSIONING.md does not classify adding an enum variant, breaking all previously compiled plugins](https://github.com/zeroclaw-labs/zeroclaw/issues/9643) — Closed, `priority:p1`.

### Low severity / hygiene

- [#9710 desktop: clean up temporary screenshot files on every exit](https://github.com/zeroclaw-labs/zeroclaw/issues/9710) — Closed, `priority:p3`.
- [#9706 Edge TTS temporary output cleanup on every error path](https://github.com/zeroclaw-labs/zeroclaw/issues/9706) — Closed, `priority:p3`.

### Bug-fix PRs observed

- [#9969](https://github.com/zeroclaw-labs/zeroclaw/pull/9969) fixes filesystem dashboard asset containment.
- [#9674](https://github.com/zeroclaw-labs/zeroclaw/pull/9674) fixes session queue eviction race.
- [#9709](https://github.com/zeroclaw-labs/zeroclaw/pull/9709) fixes Edge TTS temp-file leaks.
- [#9705](https://github.com/zeroclaw-labs/zeroclaw/pull/9705) fixes config handling for hyphenated cron aliases.

---

## 6. Feature Requests & Roadmap Signals

### Likely v0.9.0 candidates

- [#7155 Shell command confirmation tier + allow/ask/deny policy](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) — `priority:p1`, high engagement, actively revised.
- [#9487 Runtime-owned conversation sessions and transport adapters](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) — Large architecture RFC, tied to [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600).
- [#6850 Decouple memory lifecycle policy from storage backends](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) — Core memory architecture cleanup.
- [#7432 v0.9.0 auth/security/gateway/breaking-change queue](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) — Coordination tracker for the milestone.

### Other notable feature requests

- [#9810 Load Agent Plugins 1.0 skill and MCP packages](https://github.com/zeroclaw-labs/zeroclaw/issues/9810) — Vendor-neutral plugin interoperability.
- [#9880 Type resolved peer policy instead of encoding grants/denies in `Vec<String>`](https://github.com/zeroclaw-labs/zeroclaw/issues/9880) — Config safety/type-safety improvement.
- [#9887 Downscale oversized images instead of dropping them](https://github.com/zeroclaw-labs/zeroclaw/issues/9887) — Better multimodal behavior; `0` would disable limits.
- [#9895 Provider-grouped, paginated Telegram `/model` picker](https://github.com/zeroclaw-labs/zeroclaw/issues/9895) — Mobile UX improvement for Telegram.
- [#9631 Send stable session_id to OpenRouter for prompt-cache savings](https://github.com/zeroclaw-labs/zeroclaw/issues/9631) — Cost-reduction feature, currently blocked.
- [#5907 Opt-in LSP support for ZeroCode coding workflows](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) — Long-running feature request for coding agent use cases.
- [#9945 Browser tool exposes only 16 of agent-browser’s 100+ commands](https://github.com/zeroclaw-labs/zeroclaw/issues/9945) — Browser automation gap.

### Prediction

The next release is likely to focus on **security policy hardening** (`#7155`, `#9328`), **session ownership and persistence** (`#9487`, `#9600`, `#9929`), and **memory lifecycle decoupling** (`#6850`). The v0.9.0 tracker ([#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)) is the best roadmap signal for breaking-change sequencing.

---

## 7. User Feedback Summary

Real user pain points visible in this snapshot:

- **Costs:** OpenRouter prompt caching cannot be leveraged without a stable `session_id`; users report “unnecessarily expensive” agent chats ([#9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631)).
- **Command inconsistency:** Slash commands drift across Web UI, ZeroCode TUI, and channel runtime ([#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929)).
- **Mobile/Telegram UX:** Text-based `/model` selection is cumbersome on mobile; users want a provider-grouped paginated picker ([#9895](https://github.com/zeroclaw-labs/zeroclaw/issues/9895)).
- **Browser automation limits:** Only 16 of 100+ agent-browser commands are exposed, making iframes, dialogs, tabs, and form controls unreachable ([#9945](https://github.com/zeroclaw-labs/zeroclaw/issues/9945)).
- **False-positive security redaction:** Public blockchain addresses are redacted by the leak detector, making payment-request URLs undeliverable ([#9825](https://github.com/zeroclaw-labs/zeroclaw/issues/9825)).
- **Image handling:** Oversized images are dropped instead of downscaled; users want graceful degradation ([#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887)).
- **Coding workflow gaps:** Users want LSP support for ZeroCode to reduce hallucination and improve generated code ([#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907)).
- **Config trust:** WhatsApp Web accepts settings it never reads, and WeChat channel code never runs in CI — both reduce confidence in channel configuration ([#9366](https://github.com/zeroclaw-labs/zeroclaw/issues/9366), [#9951](https://github.com/zeroclaw-labs/zeroclaw/issues/9951)).

Overall, the community is engaged but concerned about **security correctness**, **configuration consistency**, **cost efficiency**, and **surface-level tool coverage**.

---

## 8. Backlog Watch

Long-open or decision-blocked items needing maintainer attention:

- [#7155 Shell command policy RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) — Open ~72 days, `priority:p1`, `needs-maintainer-review`.
- [#6850 Memory lifecycle RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) — Open ~84 days, `needs-author-action`.
- [#5907 LSP support for ZeroCode](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) — Open ~117 days, `needs-author-action`.
- [#6998 Schema-validated memory consolidation](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) — Open ~77 days.
- [#7929 Unify slash-command registries](https://github.com/zeroclaw-labs/zeroclaw/issues/7929) — Open ~57 days, `needs-author-action`.
- [#8692 Maintainer decision queue tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — Signals an active RFC decision backlog.
- [#9600 Session-persistence contract ownership tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/9600) — Needs maintainer review to unblock four independent workstreams.
- [#9013 TodoWrite config refactor PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9013) — Open ~33 days, `size:XL`, breaking config change.
- [#9109 Hailo-Ollama provider PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) — Open ~28 days, `size:XL`, `risk:high`.
- [#9203 SOP HTTP fan-in PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9203) — Open ~25 days, `size:XL`, `risk:high`.
- [#9420 Anthropic OAuth profile PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) — Open ~19 days, `size:XL`, `risk:high`.

---

**Digest generated for 2026-08-14 from ZeroClaw GitHub activity.**  
All links reference `https://github.com/zeroclaw-labs/zeroclaw`.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*