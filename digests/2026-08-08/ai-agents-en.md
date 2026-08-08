# OpenClaw Ecosystem Digest 2026-08-08

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-08 00:46 UTC

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

# OpenClaw Project Digest — 2026-08-08

## 1. Today's Overview

OpenClaw shows very high activity: 500 issues and 500 PRs were updated in the last 24 hours, with 468 issues and 405 PRs still open. No new releases were published in this window. The most notable signal is a cluster of P0/P1 stability issues around SQLite migration/state corruption, gateway memory leaks, and premature compaction, alongside active PRs targeting session-state correctness and process-lifecycle bugs. The volume of user reports and the presence of maintainer-labeled “needs review” items indicate a project under heavy real-world load, but also one where maintainers are actively triaging and shipping fixes.

## 2. Releases

No new releases were reported in this period. There are no release notes, breaking-change summaries, or migration instructions to include.

## 3. Project Progress

The aggregate data shows 95 PRs in merged/closed state over the last 24 hours. Among the highlighted top PRs, two are marked closed:

- [PR #120370 — fix(ui): keep missing profile avatars on initials after rerenders](https://github.com/openclaw/openclaw/pull/120370)
- [PR #75121 — fix(telegram): preserve forwarded context in agent body](https://github.com/openclaw/openclaw/pull/75121)

Notable open PRs advancing fixes and features:

- [PR #120398 — fix(process): detach service-managed tool children on Linux](https://github.com/openclaw/openclaw/pull/120398) — prevents orphaned child processes after command timeout.
- [PR #120276 — fix(ai): treat OpenAI Responses thinking signatures as untrusted JSON during replay](https://github.com/openclaw/openclaw/pull/120276) — protects session replay from malformed history blocks.
- [PR #120287 — fix(plugins): bound session-catalog history import pagination](https://github.com/openclaw/openclaw/pull/120287) — prevents Control-UI session adoption from hanging.
- [PR #120001 — fix(codex): keep native subagent tools available after parent turns end](https://github.com/openclaw/openclaw/pull/120001) — addresses tool loss in Codex subagent workers.
- [PR #119778 — fix(gateway): return retryable chat send error during transcript rebuild](https://github.com/openclaw/openclaw/pull/119778) — ClawSweeper-autofixed chat-send lifecycle issue.
- [PR #119344 — feat(signal): add signal-cli account linking](https://github.com/openclaw/openclaw/pull/119344)
- [PR #119321 — feat(macos): add realtime Talk relay](https://github.com/openclaw/openclaw/pull/119321)

## 4. Community Hot Topics

The most active issue by a wide margin continues to be:

- [Issue #116277 — DeepSeek v4 Flash silent reply failure — no reply generated, generic fallback](https://github.com/openclaw/openclaw/issues/116277) — 128 comments. Users are chasing a model-provider failure mode that produces no reply and only a generic fallback message. The heavy engagement suggests provider fallback/retry behavior is a major trust issue.

Other high-engagement threads:

- [Issue #7707 — Feature Request: Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707) — 29 comments. Concern about memory poisoning via untrusted web scrapes, third-party skills, or messages.
- [Issue #91588 — Critical: Gateway Memory Leak — RSS grows from 350MB to 15.5GB](https://github.com/openclaw/openclaw/issues/91588) — 22 comments, P0, OOM crashes.
- [Issue #101290 — CLI startup preflight can corrupt the live state DB](https://github.com/openclaw/openclaw/issues/101290) — 14 comments, P0, “database disk image is malformed.”
- [Issue #45608 — Pre-reset agentic memory flush before /new and daily reset](https://github.com/openclaw/openclaw/issues/45608) — 11 comments, 4 👍.
- [Issue #86684 — sessions_yield subagent wake can compact parent branch at low context usage](https://github.com/openclaw/openclaw/issues/86684) — 10 comments.
- [Issue #85030 — MCP tools not injected into subagent (sessions_spawn) sessions](https://github.com/openclaw/openclaw/issues/85030) — 10 comments, 6 👍, strong user demand for subagent/MCP parity.

The underlying pattern: users are most concerned about silent message loss, state corruption, memory growth, and MCP tools not being honored in subagents.

## 5. Bugs & Stability

Several P0 and P1 regressions are active this week. Ranked by severity:

**P0 — blockers / data loss / crash loops**

- [Issue #119263 — Agent DB v14→v15 migration fails: “no such column: entry_valid”; gateway refuses to start](https://github.com/openclaw/openclaw/issues/119263)
- [Issue #118772 — sessionEntry.totalTokens inflation causes premature compaction at 4–8% of context window](https://github.com/openclaw/openclaw/issues/118772) — data loss through premature compaction.
- [Issue #101290 — CLI startup preflight can corrupt the live state DB while gateway is running](https://github.com/openclaw/openclaw/issues/101290)
- [Issue #91588 — Gateway memory leak: RSS 350MB → 15.5GB, repeated OOM crashes](https://github.com/openclaw/openclaw/issues/91588)

**P1 — session-state, message loss, and provider issues**

- [Issue #86684 — sessions_yield subagent wake can compact parent branch at low context usage](https://github.com/openclaw/openclaw/issues/86684)
- [Issue #115700 — chat.send rejected with “thread switched branches” after model completes](https://github.com/openclaw/openclaw/issues/115700) — fix PR [PR #116382](https://github.com/openclaw/openclaw/pull/116382) is open.
- [Issue #98435 — MCP loopback transport does not auto-reconnect after gateway restart](https://github.com/openclaw/openclaw/issues/98435)
- [Issue #86050 — Gateway buffers claude-cli stream events; surfaces only see final assembled message](https://github.com/openclaw/openclaw/issues/86050)
- [Issue #90789 — claude-cli synthetic “No response requested.” leaves Telegram turn fully silent](https://github.com/openclaw/openclaw/issues/90789)
- [Issue #86012 — LINE channel: messages silently lost due to reply token expiry](https://github.com/openclaw/openclaw/issues/86012)
- [Issue #117445 — @openclaw/feishu decodes inbound DM as “?” and never replies](https://github.com/openclaw/openclaw/issues/117445)
- [Issue #116022 — /new reuses stable session ID and cannot recover retired Codex binding tombstone](https://github.com/openclaw/openclaw/issues/116022)
- [Issue #119411 — Memory file watcher never reindexes; memory status reports Dirty: no while index is stale](https://github.com/openclaw/openclaw/issues/119411)
- [Issue #119009 — Runaway model-call retry loop billed $204 over two incidents](https://github.com/openclaw/openclaw/issues/119009) — closed, but a strong cost/stability signal.
- [Issue #119087 — Gateway cold start regressed ~2.5x from beta.1 to beta.7](https://github.com/openclaw/openclaw/issues/119087)

Fix PRs in flight targeting stability include [PR #116382](https://github.com/openclaw/openclaw/pull/116382) for false branch-switch errors, [PR #120001](https://github.com/openclaw/openclaw/pull/120001) for Codex subagent tool availability, and [PR #119778](https://github.com/openclaw/openclaw/pull/119778) for chat-send retry behavior during transcript rebuild.

## 6. Feature Requests & Roadmap Signals

Several feature requests are receiving maintainer attention or represent recurring user demand:

- [Issue #7707 — Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707) — tagged `needs-maintainer-review`, `needs-product-decision`, `needs-security-review`. Security-focused memory hardening.
- [Issue #45608 — Pre-reset agentic memory flush before /new and daily reset](https://github.com/openclaw/openclaw/issues/45608) — would reuse existing compaction-time memory flush.
- [Issue #99583 — Intelligent Session Auto-Titling](https://github.com/openclaw/openclaw/issues/99583) — lazy title generation with cheap models.
- [Issue #81061 — Hook: before_route_inbound_message for pre-routing interception](https://github.com/openclaw/openclaw/issues/81061) — plugin-system extensibility for bridging/proxying.
- [Issue #87362 — Emit task flow lifecycle hook events for plugin observability](https://github.com/openclaw/openclaw/issues/87362)
- [Issue #95516 — Skill lifecycle management: auto-optimization on failure + usage-based retirement](https://github.com/openclaw/openclaw/issues/95516)
- [Issue #13219 — Per-model usage logging for cost tracking](https://github.com/openclaw/openclaw/issues/13219)
- [Issue #95724 — Index memory by source directory instead of per-agent vector stores](https://github.com/openclaw/openclaw/issues/95724)
- [Issue #17840 — Opt-in reaction-triggered agent turns](https://github.com/openclaw/openclaw/issues/17840)
- [Issue #87325 — Support Azure Foundry GPT Realtime Talk via gateway relay](https://github.com/openclaw/openclaw/issues/87325)

Given the current P0/P1 cluster around session state and SQLite migration, the next release is likely to prioritize migration safety, compaction token accounting, and MCP/subagent parity over new user-facing features. The product-decision-labeled features such as memory trust tagging and per-model usage logging may take longer.

## 7. User Feedback Summary

The dominant user sentiment this period is frustration with silent failures and data integrity issues:

- Silent reply failures: DeepSeek, Feishu, LINE, Telegram, and claude-cli all have reports of messages being dropped or replaced with generic fallbacks.
- Data loss / state corruption: SQLite corruption, premature compaction, and failed migrations are the most severe complaints.
- Cost incidents: [Issue #119009](https://github.com/openclaw/openclaw/issues/119009) ($204 runaway retry loop) highlights concerns about retry loops during provider outages.
- MCP tooling: users are actively demanding that MCP tools behave consistently in subagents and after gateway restarts.
- Operational pain: memory leaks, orphaned node processes on Windows, cold-start regressions, and unbounded log/JSONL growth ([Issue #75380](https://github.com/openclaw/openclaw/issues/75380)) are common self-hosting pain points.

Positive signals: users are contributing concrete reproductions, maintainers are labeling issues quickly, and automated ClawSweeper PRs are starting to land fixes for corner cases.

## 8. Backlog Watch

These items have been open for a long time and appear to need maintainer or product decisions:

- [Issue #7707 — Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707) — open since 2026-02-03, 29 comments, still `needs-maintainer-review` / `needs-security-review`.
- [Issue #13219 — Per-model usage logging for cost tracking](https://github.com/openclaw/openclaw/issues/13219) — open since 2026-02-10.
- [Issue #17840 — Opt-in reaction-triggered agent turns](https://github.com/openclaw/openclaw/issues/17840) — open since 2026-02-16.
- [Issue #30381 — chatCompletions: ignore request model when x-openclaw-agent-id header is present](https://github.com/openclaw/openclaw/issues/30381) — open since 2026-03-01.
- [Issue #45608 — Pre-reset agentic memory flush](https://github.com/openclaw/openclaw/issues/45608) — open since 2026-03-14, 4 👍, still in product review.
- [Issue #85030 — MCP tools not injected into subagent sessions](https://github.com/openclaw/openclaw/issues/85030) — open since 2026-05-21, 6 👍, high-impact.
- [Issue #74378 — OpenClaw CLI commands remain alive as node.exe processes on Windows](https://github.com/openclaw/openclaw/issues/74378) — open since 2026-04-29, `needs-live-repro`.
- [PR #82519 — fix(test): stabilize red CI tests](https://github.com/openclaw/openclaw/pull/82519) — open since 2026-05-16, waiting on proof.
- [PR #80396 — fix(media): warn when MEDIA: token is skipped inside fenced code block](https://github.com/openclaw/openclaw/pull/80396) — open since 2026-05-10.
- [PR #84853 — fix(agents): drop throttled exec update events](https://github.com/openclaw/openclaw/pull/84853) — open since 2026-05-21, ready for maintainer look.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-08-08

## 1. Ecosystem Overview

The personal AI assistant / agent open-source ecosystem is centered on OpenClaw as the core reference implementation, surrounded by a dense cluster of Claw-suffixed derivatives (PicoClaw, NanoClaw, IronClaw, ZeroClaw, CoPaw/QwenPaw) and independent agents (NanoBot, Hermes Agent, LobsterAI). Activity is exceptionally high overall — the three largest projects (OpenClaw, Hermes, IronClaw, ZeroClaw) each saw 50+ issues and 50+ PRs updated in a single day — but the dominant theme is stabilization rather than new features: session-state corruption, memory leaks, compaction safety, MCP lifecycle reliability, and channel delivery parity recur across nearly every project. Only two releases shipped in the window (LobsterAI 2026.8.7, CoPaw v2.1.0-beta.2), consistent with a broad "hardening before release" pattern. Three projects (NullClaw, Moltis, ZeptoClaw) showed zero activity, indicating ecosystem consolidation around the active few.

## 2. Activity Comparison

| Project | Issues Updated (Open) | PRs Updated (Merged/Closed) | Release Status | Health Score |
|---|---|---|---|---|
| OpenClaw | 500 (468 open) | 500 (95 merged/closed) | None | **Medium-High** — massive throughput, but P0/P1 stability cluster (SQLite corruption, memory leaks, premature compaction) |
| CoPaw (QwenPaw) | 31 (20 active) | 49 (22 merged) | **v2.1.0-beta.2** | **High** — fast fix turnaround; backlog weighted toward loops/freezes and Windows regressions |
| IronClaw | 50 (36 active, 14 closed) | 50 (12 merged) | None | **High** — responsive QA bug-bash cycle; 5-PR doc-truth pipeline active |
| ZeroClaw | 50 (45 active, 5 closed) | 50 (3 merged, 47 open) | None (v0.8.4 ref) | **Medium-High** — fast security fixes, but large author-blocked PR stack gates critical fixes |
| Hermes Agent | 50 (45 open) | 50 (3 merged) | None | **Medium** — good throughput; P1 session-safety bugs (compression, crash loops) lack fix PRs |
| NanoBot | 10 (2 closed) | 21 (11 merged) | None | **High** — healthy closure velocity; channel/session/memory fixes landing daily |
| LobsterAI | 7 (3 closed) | 7 (6 merged) | **2026.8.7** | **High** — steady minor-release cadence; rapid bug-fix turnaround |
| NanoClaw | 0 | 10 (2 closed) | None | **Medium** — feature-forward PRs, no new bug reports; review latency on older PRs |
| PicoClaw | 4 | 14 (2 dep bumps) | None | **Low** — review bottleneck; stale bot closing valid issues; mostly Dependabot churn |
| NullClaw / Moltis / ZeptoClaw | 0 | 0 | None | **Inactive** |

## 3. OpenClaw's Position

- **Community scale:** OpenClaw's daily activity (500 issues + 500 PRs updated, 95 PRs merged/closed in 24h) is 10x the next tier (CoPaw/IronClaw/ZeroClaw at ~50 each) and 50x smaller projects like NanoClaw/PicoClaw. It remains the default integration target for the ecosystem.
- **Reference-architecture advantage:** As the core reference, OpenClaw defines the dominant patterns — gateway-centric delivery, session/state DB, plugin catalogs, subagent tooling. Derivatives (LobsterAI's OpenClaw configuration surface, NanoBot's plugin+CLI app unification, ZeroClaw's Agent Plugins 1.0 RFC) explicitly anchor their compatibility to it.
- **Technical approach differences:** OpenClaw leans into a heavy gateway monolith with SQLite-backed session state and a broad channel matrix (Telegram, LINE, Feishu, Signal, macOS Talk). Its real-world load is exposing the ecosystem's hardest problems first: SQLite migration corruption, gateway memory leaks (350MB→15.5GB), and premature compaction. These are the same failure classes Hermes (compression dropping tool chains), ZeroClaw (SOP/cron rot), and CoPaw (session identity deadlocks) are hitting at smaller scale — making OpenClaw the ecosystem's early-warning system.
- **Vulnerability:** The P0/P1 cluster (state corruption, silent message loss, cost runaway) is eroding trust among exactly the self-hosting power users who form its base; peers are differentiating on stability while OpenClaw absorbs the damage of being the most widely deployed. Its next release will be judged on migration safety and compaction correctness, not features.

## 4. Shared Technical Focus Areas

These requirements emerged independently across multiple projects, indicating genuine ecosystem pressure:

- **Session-state integrity & safe compaction:** OpenClaw (#118772 premature compaction, #101290 DB corruption while gateway runs), Hermes (#79278 compression drops in-flight tool chain → unsafe replay, #79624 crash during preflight compaction), CoPaw (#6750 session identity deadlock), NanoBot (#5273 retention drops proactive delivery messages), ZeroClaw (#9805 SOP runs rot as "running" forever).
- **Memory lifecycle & cross-session recall:** OpenClaw (#7707 memory trust tagging, #119411 stale memory index), IronClaw (#7185 memory not recalled → fix PR #7365), NanoBot (Dream archival #5231/#5280), CoPaw (ReMe memory config PR #6772).
- **MCP tool reliability & subagent parity:** OpenClaw (#85030 MCP tools missing in subagents, #98435 loopback reconnect), CoPaw (#6732 MCP tools stop working until container restart), ZeroClaw (#8948 zombie MCP processes), PicoClaw (#3302 OAuth 2.1 for MCP).
- **Channel delivery parity & multimedia:** OpenClaw (LINE, Feishu, Telegram silent-failure fixes), Hermes (Telegram media groups, WhatsApp parity campaign, Discord docs drift), PicoClaw (WhatsApp 405, Telegram session commands, WeChat/DingTalk media), IronClaw (Slack/Telegram QA bug-bash), CoPaw (WeChat approvals, OneBot media), NanoBot (WeChat/Matrix/WhatsApp fixes).
- **Cost & token observability:** OpenClaw (#13219 per-model logging, #119009 $204 runaway retry loop), NanoBot (#5266 token consumption logs), IronClaw (#6989 token accounting bug), ZeroClaw (#9816 Anthropic budget caps never fire — all records written at $0.00).
- **Provider compatibility & fallback chains:** OpenClaw (#116277 DeepSeek silent replies), CoPaw (#6812 Google rejects `$schema` in tool schemas, #6809 strict-provider sanitization), PicoClaw (#3200 fallback chain), LobsterAI (#2443 slash-containing model IDs), Hermes (#65365 OAuth tool-schema HTTP 400).
- **Security hardening of filesystem/policy:** ZeroClaw (#9815 silent `forbidden_paths` bypass, symlink-escape hardening), NanoBot (#5278 session history reachable by file tools → fix PR #5279), OpenClaw (#7707 memory poisoning), Hermes (#80760 persisted tool-result storage), CoPaw (#6788 ACL reset on task spawn).
- **Windows/desktop reliability:** OpenClaw (#74378 orphaned node.exe), Hermes (#80968 TUI crash, #81290 black desktop window), IronClaw (#6590 `serve` fails on Windows), CoPaw (#6810 installer lock-file failures, #6806/#6807 creator regressions), LobsterAI (installer/watchdog fixes in 2026.8.7).

## 5. Differentiation Analysis

| Project | Core Focus | Target Users | Architecture Standouts |
|---|---|---|---|
| OpenClaw | Broadest channel gateway + session state | Power self-hosters; ecosystem reference | Gateway monolith, SQLite session DB, plugin catalog, subagent workers |
| Hermes Agent | Multi-surface continuity, Kanban/cron automation, OAuth (Claude Pro/Max) | ChatGPT-subscription users, desktop (macOS/Windows), automation-driven teams | Profiles/Teams, background delegate_task, desktop apps |
| IronClaw | Enterprise-grade delivery, progressive tool disclosure, docs truth | Teams/QA champions; nearai platform users | Docker/Railway sandbox profiles, two-lane channel delivery, bulk `tool_describe` |
| ZeroClaw | Rust-based SOP engine + cron, security-first, OTel observability | Security-conscious self-hosters, Raspberry Pi/ARM cohort | SOP automation, forbidden-path confinement, `forbid(unsafe_code)` roadmap |
| CoPaw (QwenPaw) | Alibaba/agentscope ecosystem, memory (ReMe), Chinese-language UX | Chinese-speaking users, Docker/desktop deployers | Checkpoint/workspace bootstrap, plugin market, WeChat/OneBot channels |
| NanoBot | WebUI-first multi-channel assistant, plugin+app unification | Hobbyists-to-prosumers; Dream memory archival | Per-session sandbox isolation, Matrix thread sessions, Temporary Chat |
| LobsterAI | Desktop app managing OpenClaw (Cowork, config, plugins, installers) | Desktop-first users wanting OpenClaw without CLI | Electron-style desktop, Windows installer reliability, Markdown/math rendering |
| PicoClaw | Lightweight Go agent with chat-channel breadth | Edge/resource-constrained; privacy-protocol enthusiasts (SimpleX/Tox) | Go stack, copilot-sdk, prefix-cache optimization |
| NanoClaw | Skill/ChannelAdapter architecture, setup wizard | Teams adopting Mattermost/Dial; new users | v2 ChannelAdapter/registry, wizard templates, DB backfill migrations |

## 6. Community Momentum & Maturity

**Tier 1 — Hyperactive reference (stabilizing under load):** OpenClaw. 500/500 daily issue/PR churn with 95 merges; maintainers triaging aggressively and ClawSweeper auto-fixes landing, but the P0/P1 cluster means the next release is a stabilization gate, not a feature release.

**Tier 2 — High-velocity, shipping or merging at scale:** CoPaw (beta.2 shipped, 22 merges), IronClaw (12 merges, doc-truth pipeline, QA program), ZeroClaw (security fixes fast, RFCs accepted rapidly), Hermes (strong contributor PRs landing despite P1 gaps). These projects are converging on stable cores while expanding surface area.

**Tier 3 — Steady, focused iteration:** NanoBot (11 merges, healthy triage), LobsterAI (daily/minor release cadence), NanoClaw (feature-forward PRs, no bug inflow).

**Tier 4 — Review-bottlenecked or inactive:** PicoClaw (valid PRs waiting weeks, stale bot closing issues within days of filing), NullClaw / Moltis / ZeptoClaw (no activity — likely abandoned or dormant forks).

The ecosystem is bifurcating: active projects are converging on a shared stability checklist (session safety, MCP lifecycle, memory persistence, cost observability), while stalled projects are accumulating `stale` labels. For developers choosing a base, momentum and maintenance responsiveness — not feature lists — are the clearest differentiators.

## 7. Trend Signals

1. **Session/state integrity is the new trust frontier.** Silent failures are the top complaint across OpenClaw (SQLite corruption, premature compaction), Hermes (unsafe replay after compression), ZeroClaw (SOP runs rotting), and CoPaw (freezes after multi-step tasks). **Value:** invest in transactional state stores, crash-safe migration, and explicit failure surfacing; users consistently say silent no-ops are worse than errors.

2. **Cost governance is becoming a purchase criterion.** Token-accounting bugs, budget caps that never fire (ZeroClaw #9816), runaway retry loops (OpenClaw #119009, $204), and opaque consumption (NanoBot #5266) all point to the same gap: per-call metering and spend control are not yet first-class features anywhere. **Value:** per-model usage logs, retry budgets, and spend-aware fallback chains are differentiators.

3. **MCP tooling has won, but its lifecycle is immature.** The ecosystem-wide complaint is not "MCP doesn't work" but "MCP works until it silently expires" — subagent injection gaps (OpenClaw #85030), container-restart requirements (CoPaw #6732), zombie processes (ZeroClaw #8948), and missing auto-reconnect (OpenClaw #98435). **Value:** robust MCP process supervision, re-registration, and parity across subagents/workspaces is a high-leverage engineering investment.

4. **Channel parity = retention.** Users increasingly expect the same experience across Telegram, WhatsApp, WeChat, Discord, Matrix, Feishu, and LINE — including session management, multimedia, and reactions. The most active feature requests in the ecosystem are parity campaigns (Hermes WhatsApp, PicoClaw Telegram session commands, CoPaw WeChat approvals, NanoBot Matrix threads). **Value:** a clean channel-adapter abstraction with progressive-enhancement fallbacks is the architectural pattern winning across projects.

5. **Security is moving from perimeter to policy.** The newest P1s are not exposed endpoints but *agent-internal* enforcements that silently no-op: ZeroClaw's `forbidden_paths` bypass, OpenClaw's memory-poisoning concerns, NanoBot's session-history-reachable-by-file-tools, Hermes' persisted tool-result hardening. **Value:** agent developers should treat policy/guardrail code as security-critical and add adversarial tests (symlink escapes, path confinement, schema leaks) to CI.

6. **Memory is becoming a product surface, not a database detail.** Trust tagging (OpenClaw), Dream archival (NanoBot), ReMe (CoPaw), and cross-conversation recall fixes (IronClaw) show memory evolving into a user-visible, tunable capability. **Value:** source-trusted memory ingestion and pre-reset memory flush are concrete features users are requesting across projects.

7. **Docs truth is becoming a CI concern.** IronClaw's 5-PR doc-truth pipeline and Hermes' docs-drift closures signal a shift: docs that contradict agent behavior are now treated as bugs that mislead the agent itself. **Value:** automated doc-vs-behavior verification is an emerging best practice for agent projects where models consume the docs.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-08

## Today's Overview
NanoBot is in a high-activity maintenance and feature-development cycle: in the last 24 hours, 10 issues were updated and 21 PRs were touched, with 11 PRs closed/merged and 2 issues closed. The main focus areas were WebUI polish, channel reliability (WeChat, Telegram, Matrix), session/memory lifecycle fixes, and workspace security hardening. No new releases were published. The project looks healthy: reported regressions are being addressed quickly, while larger design topics like session isolation, token observability, and plugin packaging are moving through active PRs.

## Releases
No new releases were published in this window, so there are no release notes, breaking changes, or migration steps to report.

## Project Progress
The following PRs were closed/merged in the last 24 hours, showing progress across several areas:

**WebUI**
- [PR #5285](https://github.com/HKUDS/nanobot/pull/5285) — fix(webui): preserve newly created topic route
- [PR #5284](https://github.com/HKUDS/nanobot/pull/5284) — refactor(webui): remove legacy session messages route
- [PR #5281](https://github.com/HKUDS/nanobot/pull/5281) — fix(webui): keep activity text crisp while fading edges
- [PR #5277](https://github.com/HKUDS/nanobot/pull/5277) — feat(webui): expand model preset editor inline
- [PR #5268](https://github.com/HKUDS/nanobot/pull/5268) — fix(webui): stage out-of-media-root attachments on history reads

**Channels**
- [PR #5263](https://github.com/HKUDS/nanobot/pull/5263) — fix(weixin): harden protocol delivery, streaming, and login
- [PR #5287](https://github.com/HKUDS/nanobot/pull/5287) — fix(channels): preserve global progress defaults

**Session & Memory**
- [PR #5272](https://github.com/HKUDS/nanobot/pull/5272) — fix(session): preserve proactive channel delivery during session retention trimming
- [PR #5280](https://github.com/HKUDS/nanobot/pull/5280) — fix(memory): archive short idle sessions for Dream
- [PR #5231](https://github.com/HKUDS/nanobot/pull/5231) — feat(memory): archive idle sessions for Dream

**Docs / Maintenance**
- [PR #5282](https://github.com/HKUDS/nanobot/pull/5282) — fix: modernize dependency recovery guidance

Closed issues tied to fixes: [#5264](https://github.com/HKUDS/nanobot/issues/5264) (“history endpoint never returns media_urls”) was resolved by [PR #5268](https://github.com/HKUDS/nanobot/pull/5268), and [#5273](https://github.com/HKUDS/nanobot/issues/5273) (“session retention drops proactive delivery messages”) was fixed by [PR #5272](https://github.com/HKUDS/nanobot/pull/5272).

## Community Hot Topics
The most active issue discussions are around observability, channel media support, and per-session model control:

- [Issue #5266](https://github.com/HKUDS/nanobot/issues/5266) — **Logs about token consumption** (10 comments). Users report extremely high token burn with no visible activity, asking for per-call token accounting and traceability.
- [Issue #5149](https://github.com/HKUDS/nanobot/issues/5149) — **No audio on WhatsApp** (5 comments). The bot receives audio but does not send audio files back.
- [Issue #5198](https://github.com/HKUDS/nanobot/issues/5198) — **Cannot change models in a specific session** (3 comments). Clicking the model blip does nothing, and `/model` does not behave as users expect.

Underlying needs: cost observability and control, reliable multimodal delivery, and flexible per-conversation model switching.

## Bugs & Stability
Reported and active issues ranked roughly by severity:

| Severity | Issue | Status / Fix |
|---|---|---|
| High | [#5256](https://github.com/HKUDS/nanobot/issues/5256) — `/goal` produces dozens of repeated replies while waiting for user input | Open; no fix PR yet |
| High | [#5198](https://github.com/HKUDS/nanobot/issues/5198) — Model selection is locked per session | Open; no fix PR yet |
| Medium | [#5149](https://github.com/HKUDS/nanobot/issues/5149) — WhatsApp audio sending broken | Open; no fix PR yet |
| Medium | [#5278](https://github.com/HKUDS/nanobot/issues/5278) — Session history lives inside agent workspace, reachable by file tools | Open; fix proposed in [PR #5279](https://github.com/HKUDS/nanobot/pull/5279) |
| Fixed | [#5264](https://github.com/HKUDS/nanobot/issues/5264) — History endpoint missing `media_urls` for out-of-media-root files | Fixed by [PR #5268](https://github.com/HKUDS/nanobot/pull/5268) |
| Fixed | [#5273](https://github.com/HKUDS/nanobot/issues/5273) — Session trimming drops proactive delivery messages | Fixed by [PR #5272](https://github.com/HKUDS/nanobot/pull/5272) |

## Feature Requests & Roadmap Signals
Several active PRs point toward the next wave of features:

- [PR #5288](https://github.com/HKUDS/nanobot/pull/5288) — Integrate Agent Plugins with CLI Apps: unifies plugin skills and CLI-installed apps under one package format.
- [PR #5283](https://github.com/HKUDS/nanobot/pull/5283) — Per-session sandbox isolation for non-WebUI channels: opt-in isolated filesystem workspaces per session.
- [PR #5279](https://github.com/HKUDS/nanobot/pull/5279) — Store session history outside the agent workspace: closes the security gap raised in #5278.
- [PR #5286](https://github.com/HKUDS/nanobot/pull/5286) — Matrix thread session isolation: stable thread-scoped sessions.
- [PR #5291](https://github.com/HKUDS/nanobot/pull/5291) — Persist subagent conversation transcripts for later review.
- [PR #5252](https://github.com/HKUDS/nanobot/pull/5252) — WebUI Temporary Chat mode: non-persistent multi-turn chats.
- [Issue #5289](https://github.com/HKUDS/nanobot/issues/5289) — Telegram sticker sending and agent-initiated message reactions.
- [Issue #5290](https://github.com/HKUDS/nanobot/issues/5290) — Deduplicate the atomic JSONL write idiom across three writers.

Given the current closure velocity, the next NanoBot version is likely to include WebUI interaction improvements, session/memory lifecycle fixes, WeChat/Matrix channel hardening, and possibly the Agent Plugins + CLI Apps integration.

## User Feedback Summary
Real user pain points visible this cycle:

- **Token consumption is opaque and expensive**: users want detailed logs to understand which calls burn tokens.
- **Session-level model control is missing**: users expect to switch models per conversation like in commercial AI UIs.
- **Channel media support is incomplete**: WhatsApp audio output is broken, and Telegram stickers/reactions are missing.
- **Session/workspace isolation concerns**: users want stronger boundaries between sessions, especially for security-sensitive deployments.
- **Proactive messages are fragile**: background/cron delivery messages can be dropped during session trimming.

On the positive side, maintainers are responding quickly: multiple recently reported regressions already have merged fixes or open fix PRs.

## Backlog Watch
Items that may need maintainer attention due to age, open duration, or unresolved status:

- [PR #4276](https://github.com/HKUDS/nanobot/pull/4276) — Model-agnostic computer use (`computer_use` + browser tools). Open since June 10, large feature PR.
- [PR #5156](https://github.com/HKUDS/nanobot/pull/5156) — Fix Telegram silently stalled polling. Open since July 29, production-impacting reliability issue.
- [Issue #5149](https://github.com/HKUDS/nanobot/issues/5149) — WhatsApp audio send broken. Open since July 28 with no fix PR yet.
- [Issue #5198](https://github.com/HKUDS/nanobot/issues/5198) — Per-session model switching impossible. Open since July 31, affecting core UX.
- [Issue #5266](https://github.com/HKUDS/nanobot/issues/5266) — Token consumption logging. High community interest, still in design/discussion phase.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-08

## 1. Today's Overview

Hermes Agent is in a **high-activity phase**: 50 issues and 50 PRs were updated in the last 24 hours, with 45 issues and 47 PRs remaining open. No new release was published today. Active work clusters around **session-state reliability**, **gateway/platform parity** (Telegram, WhatsApp, Discord), **Kanban/cron automation**, and **Windows desktop stability**. Several P1 session-safety bugs remain open, but the community is contributing fixes quickly. Overall project health is strong in terms of throughput, though maintainer attention is needed on a few long-running, high-impact issues.

## 2. Releases

No new releases were published in the last 24 hours. There are no changelog, breaking-change, or migration notes to report for this digest window.

## 3. Project Progress

Three PRs were merged/closed today (2 visible in the top-20 list):

- **PR #80808** — [fix(agent): require actionable handoffs at implementation boundaries](https://github.com/NousResearch/hermes-agent/pull/80808)  
  Closes a behavioral gap where agents could stop at a permission/safety/workspace boundary with only a partial summary, leaving users unclear about task status.

- **PR #81412** — [Add policy fallback delegation to local Qwen](https://github.com/NousResearch/hermes-agent/pull/81412)  
  Adds policy-only fallback routing from the primary orchestrator to a local Qwen subagent, with idempotent fallback jobs and consultation state persistence.

Several issues were also closed, mostly cleanup and bug verification:

- **#11349** — [docs(discord): six documentation drifts vs actual behavior + `/voice join` missing from slash UI](https://github.com/NousResearch/hermes-agent/issues/11349)
- **#79331** — [Telegram Rich Messages omit standard copy affordance for code blocks](https://github.com/NousResearch/hermes-agent/issues/79331)
- **#46100** — [Telegram batch/media-group attachments can split across turns](https://github.com/NousResearch/hermes-agent/issues/46100)
- **#65765** — [Feature: add localization support for Telegram BotCommand descriptions](https://github.com/NousResearch/hermes-agent/issues/65765) (closed as duplicate)

These closures show active triage of Telegram delivery issues and documentation drift.

## 4. Community Hot Topics

- **#4335 — [Feature Request: Cross-platform session context sharing (CLI ↔ Telegram)](https://github.com/NousResearch/hermes-agent/issues/4335)** — 12 comments, 3 👍  
  The most-discussed issue. Users want continuity between CLI, Telegram, Discord, and other gateway surfaces. This is a significant architectural request touching session stores and the gateway.

- **#79278 — [[Bug]: context compression can drop an in-flight tool chain](https://github.com/NousResearch/hermes-agent/issues/79278)** — 10 comments  
  High concern around unsafe replay after compression interrupts a running tool chain. Non-idempotent operations could be executed twice. This is a P1 safety issue.

- **#11349 — [docs(discord) documentation drifts](https://github.com/NousResearch/hermes-agent/issues/11349)** — 9 comments  
  Users are auditing documentation against real behavior and finding multiple mismatches. Now closed, but reflects broader documentation-quality concerns.

- **#65365 — [OAuth (Claude Pro/Max): `memory`/`session_search` tool schema triggers HTTP 400](https://github.com/NousResearch/hermes-agent/issues/65365)** — 8 comments  
  A P1 billing/usage edge case: merely exposing certain tool schemas causes Anthropic OAuth connections to be rejected as “out of extra usage.” Needs a decision on tool-schema filtering.

- **#79890 — [WhatsApp Feature Parity & Alignment Campaign — meta-issue](https://github.com/NousResearch/hermes-agent/issues/79890)** — 6 comments  
  A community-organized push for full WhatsApp Business API alignment. Signals growing interest in WhatsApp as a first-class platform.

- **#18374 — [feat(cronjob): expose full cron prompt via get/include_prompt](https://github.com/NousResearch/hermes-agent/issues/18374)** — 4 comments, 5 👍  
  Well-liked request. A matching PR now exists: **PR #81408**.

## 5. Bugs & Stability

### Critical / Hot (P1)

- **#79278** — [Context compression can drop an in-flight tool chain → unsafe replay](https://github.com/NousResearch/hermes-agent/issues/79278)  
  Tool side effects complete server-side but the result is lost; the agent replays the step. **No visible fix PR yet.**

- **#79624** — [Gateway crashes with exit(1) during preflight compaction on restart](https://github.com/NousResearch/hermes-agent/issues/79624)  
  Oversized sessions (>98k tokens) crash the gateway before compression completes. **No visible fix PR yet.**

- **#81267** — [Cron + background delegate_task: shared SessionDB use-after-close drops child transcripts](https://github.com/NousResearch/hermes-agent/issues/81267)  
  Also includes unroutable completions and a missing Discord send/edit tool. **No visible fix PR yet.**

- **#65365** — [OAuth Claude Pro/Max: `memory`/`session_search` schema causes HTTP 400](https://github.com/NousResearch/hermes-agent/issues/65365)  
  Needs product decision on how to expose built-in tools on OAuth-based Anthropic subscriptions.

### Moderate (P2)

- **#22418** — [macOS Atomic Hermes desktop-gateway conflicts with CLI gateway --replace](https://github.com/NousResearch/hermes-agent/issues/22418)  
  Blocks Discord token lock on macOS when both desktop and CLI gateways run.
- **#54523** — [Remote desktop over Tailscale: async routes block the asyncio loop 10–25s](https://github.com/NousResearch/hermes-agent/issues/54523)  
  Detailed diagnosis of server- and client-side issues; needs maintainer attention.
- **#80968** — [Gateway crash on Windows when using --tui](https://github.com/NousResearch/hermes-agent/issues/80968)  
  Windows Terminal/ConPTY crash after first command; filed as duplicate.
- **#81290** — [Secondary Desktop window stays black with no lifecycle diagnostics](https://github.com/NousResearch/hermes-agent/issues/81290)  
  Windows desktop stability issue.

### Kanban / Cron automation cluster

Multiple bug reports highlight recurring problems in the Kanban/cron subsystem:

- **#80280** — [Timed-out/superseded workers leave descendant process groups alive](https://github.com/NousResearch/hermes-agent/issues/80280) — fix PR **#81411** is open.
- **#80512** — [Circuit-breaker gave_up does not halt the worker; zombie execution can still complete](https://github.com/NousResearch/hermes-agent/issues/80512)
- **#80507** — [Delegated child Kanban exit guard can exhaust parent turn budget](https://github.com/NousResearch/hermes-agent/issues/80507)
- **#79738** — [Kanban auto-decomposer re-promotes review-blocked task and leaves ended worker alive](https://github.com/NousResearch/hermes-agent/issues/79738)
- **#79728** — [Block-loop recovery triage is auto-decomposed into duplicate work](https://github.com/NousResearch/hermes-agent/issues/79728)
- **#75444** — [Auto-decomposer re-dispatches escalated triage tasks](https://github.com/NousResearch/hermes-agent/issues/75444)

### Fixes in flight

- **PR #81411** — [fix(kanban): signal the whole process group when terminating workers](https://github.com/NousResearch/hermes-agent/pull/81411) — directly targets #80280.
- **PR #81395** — [fix(tui): fan out same-session events to multiple frontends](https://github.com/NousResearch/hermes-agent/pull/81395)
- **PR #80969** — [fix(desktop): normalize Windows absolute paths to file:// URLs](https://github.com/NousResearch/hermes-agent/pull/80969)
- **PR #81400** — [fix(gateway): cancel pending clarify on unmatched prose reply](https://github.com/NousResearch/hermes-agent/pull/81400)
- **PR #80847** — [fix(tools): stop browser_cdp frame_id bad params from skipping private-page SSRF guard](https://github.com/NousResearch/hermes-agent/pull/80847)
- **PR #80760** — [fix(security): harden persisted tool-result storage](https://github.com/NousResearch/hermes-agent/pull/80760)

## 6. Feature Requests & Roadmap Signals

- **Cross-platform session context sharing** (#4335) remains the top-requested architectural feature. Given its complexity and “needs-decision” label, it is unlikely to land immediately but is a strong roadmap candidate.
- **WhatsApp parity campaign** (#79890) plus **WhatsApp message history/contacts** (#69659) indicate WhatsApp is a target platform for expansion.
- **First-class Teams** (#81405) — new feature request for persistent multi-profile teams with Quick Chat, Managed Work, and channels. Early-stage, but aligned with existing Profiles and Kanban capabilities.
- **cronjob full prompt access** (#18374) — implementation PR **#81408** is open; this is likely to land in the next release.
- **Realtime voice provider contract** (#81404 PR) — community-driven draft for realtime voice across Discord/Meet/transcription. Could become an official plugin contract.
- **Optional Cursor AI sync skill** (#81399 PR) — two-way project sync between Hermes Agent and Cursor AI; interesting for developer workflows.
- **Desktop delete confirmation** (#81356) — small UX improvement likely to be accepted quickly.
- **Telegram command localization** (#65765) — closed as duplicate, but the underlying demand is still visible and may resurface.

## 7. User Feedback Summary

**Pain points:**

- Session context is fragmented across platforms — users want the same agent memory/context in CLI, Telegram, Discord, etc.
- Context compression is unsafe when tool chains are still running; users fear duplicate side effects.
- Gateway crashes and desktop black windows on Windows erode trust in desktop stability.
- Anthropic OAuth users are hitting confusing usage errors triggered by tool-schema exposure.
- Kanban/cron automation can create duplicate work or leave zombie processes, undermining unattended operation.
- Telegram rich-message handling still has edge cases around media groups and code-block UI.

**Use cases driving requests:**

- CLI ↔ Telegram continuity for power users.
- WhatsApp as a business-facing channel.
- Sandboxed agents managing cron jobs without losing full prompt visibility.
- Remote desktop access over Tailscale.
- Multi-profile/multi-agent team collaboration.

**Satisfaction signals:**

- Users are filing detailed reproductions and even duplicate issues, indicating active and engaged usage.
- Community contributors are submitting targeted PRs quickly (e.g., #81411, #81408, #81400).
- The 5 👍 on the cron-prompt feature request shows clear demand for small, practical tool improvements.
- Several bug reports were closed as resolved or duplicate, showing triage is working.

## 8. Backlog Watch

Issues that have been open a long time or remain unresolved with high user impact:

- **#4335 — Cross-platform session context sharing**  
  [Open since 2026-03-31, 12 comments, needs-decision](https://github.com/NousResearch/hermes-agent/issues/4335)  
  One of the most active and architecturally significant feature requests; needs maintainer decision on scope.

- **#65365 — OAuth Claude Pro/Max usage 400 with memory/session_search tools**  
  [P1, open since 2026-07-16, needs-decision](https://github.com/NousResearch/hermes-agent/issues/65365)  
  Directly affects Anthropic-subscription users; requires product/design decision.

- **#79278 — Compression drops in-flight tool chain**  
  [P1, open since 2026-08-05, 10 comments](https://github.com/NousResearch/hermes-agent/issues/79278)  
  Safety-critical session-state bug without a visible fix PR.

- **#79624 — Gateway crash during preflight compaction on restart**  
  [P1, open since 2026-08-05](https://github.com/NousResearch/hermes-agent/issues/79624)  
  Symmetric to #79278; both need maintainer prioritization.

- **#22418 — macOS desktop-gateway vs CLI gateway --replace conflict**  
  [P2, open since 2026-05-09](https://github.com/NousResearch/hermes-agent/issues/22418)  
  Long-running platform conflict with no visible resolution.

- **#54523 — Remote desktop over Tailscale: async routes block the asyncio loop**  
  [P2, open since 2026-06-29, detailed root-cause analysis](https://github.com/NousResearch/hermes-agent/issues/54523)  
  Strong diagnosis already provided; waiting on maintainer follow-through.

- **PR #79599 — Desktop bundled installers**  
  [Open since 2026-08-05, large feature PR](https://github.com/NousResearch/hermes-agent/pull/79599)  
  Significant contribution that has not yet seen much visible review/discussion.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-08

## Today's Overview

PicoClaw saw moderate activity in the last 24 hours: 4 issues and 14 PRs were updated, with no new releases. The activity is dominated by Dependabot dependency bumps and a growing backlog of community-contributed feature and bugfix PRs, rather than newly merged work. The project remains community-active, especially around chat-channel integration, model provider updates, and tooling fixes, but maintainer review appears to be the current bottleneck: most open issues and PRs are already labeled `stale`. Two dependency PRs were closed, while 12 PRs remain open. Overall, the project is in a "waiting for review" state rather than a "shipping new features" state.

## Releases

**None.** There are no new releases to report for 2026-08-08.

## Project Progress

No feature PRs were merged in the last 24 hours. The two closed/merged PRs were routine dependency updates:

- [#3291](https://github.com/sipeed/picoclaw/pull/3291) — Bump `github.com/github/copilot-sdk/go` from 0.2.0 to 1.0.8.
- [#3289](https://github.com/sipeed/picoclaw/pull/3289) — Bump `github.com/pion/rtp` from 1.10.2 to 1.10.5.

Several meaningful PRs are still open and awaiting review, including:

- [#3320](https://github.com/sipeed/picoclaw/pull/3320) — Fix WhatsApp "client outdated (405)" by bumping `whatsmeow`.
- [#3319](https://github.com/sipeed/picoclaw/pull/3319) — Fix exec tool to honor per-run timeout and boolean options.
- [#3321](https://github.com/sipeed/picoclaw/pull/3321) — Move dynamic context after history to preserve prefix caching.
- [#3270](https://github.com/sipeed/picoclaw/pull/3270) — Add DashScope TTS provider and WeChat audio file sending.
- [#3200](https://github.com/sipeed/picoclaw/pull/3200) — Add configurable default model fallback chain.

## Community Hot Topics

The most active issue discussions are around channel expansion and chat-platform parity:

- [#3093](https://github.com/sipeed/picoclaw/issues/3093) — "I need SimpleX or tox" — 6 comments, 1 👍. Closed as stale, but the underlying need is clear: users want additional private/alternative messaging gateways such as SimpleX, Tox, or Wire.
- [#3302](https://github.com/sipeed/picoclaw/issues/3302) — Support OAuth 2.1 for MCP servers, referencing earlier demand from #2546. This is explicitly labeled a nice-to-have enhancement.
- [#3307](https://github.com/sipeed/picoclaw/issues/3307) — Telegram and other chat channels lack session list/switch/delete commands that already exist in the Web UI.
- [#3308](https://github.com/sipeed/picoclaw/issues/3308) — A community code review pointing out concurrency hazards, goroutine leaks, and memory/speed concerns in SeaHorse, Channel Manager, and Hooks.

The common theme in community discussions is **multi-channel parity**: users want the same capabilities across Telegram, WhatsApp, DingTalk, and WeChat that they already get from the Web UI.

## Bugs & Stability

Ranked by potential severity:

1. **Concurrency hazards and goroutine leaks in core components** ([#3308](https://github.com/sipeed/picoclaw/issues/3308)) — A community review flags SeaHorse, Channel Manager, and Hooks for concurrency hazards, goroutine leaks, and memory/speed issues. No linked fix PR yet; needs maintainer investigation.
2. **WhatsApp "client outdated (405)"** ([#3320](https://github.com/sipeed/picoclaw/pull/3320)) — The native WhatsApp channel connects and then drops with `Client outdated (405)`. A fix PR exists and is open.
3. **Tool-call format leaking into LLM summaries** ([#3279](https://github.com/sipeed/picoclaw/pull/3279)) — SeaHorse's `partsToReadableContent` can leak tool-call formatting into user messages sent to the LLM. A fix PR is open.
4. **Exec tool ignoring timeout and boolean run options** ([#3319](https://github.com/sipeed/picoclaw/pull/3319)) — The `exec` tool schema declares `background` and `pty` as strings, and the per-run `timeout` is ignored in synchronous execution. A fix PR is open.
5. **Dynamic context breaking prefix caching** ([#3321](https://github.com/sipeed/picoclaw/pull/3321)) — The per-request dynamic context block sits before conversation history, invalidating prefix cache tokens. A fix PR is open.

None of these fix PRs have been merged in the last 24 hours.

## Feature Requests & Roadmap Signals

Active feature requests:

- SimpleX/Tox/Wire gateway support ([#3093](https://github.com/sipeed/picoclaw/issues/3093)).
- OAuth 2.1 for MCP servers ([#3302](https://github.com/sipeed/picoclaw/issues/3302)).
- Telegram session list/switch commands ([#3307](https://github.com/sipeed/picoclaw/issues/3307)).

Feature PRs that could land in the next version if reviewed:

- DashScope TTS provider + WeChat audio sending ([#3270](https://github.com/sipeed/picoclaw/pull/3270)).
- Configurable default model fallback chain ([#3200](https://github.com/sipeed/picoclaw/pull/3200)).
- Updated default provider model names ([#3271](https://github.com/sipeed/picoclaw/pull/3271)).
- DingTalk picture/image message support ([#3283](https://github.com/sipeed/picoclaw/pull/3283)).

The next release, when it comes, will likely include a mix of WhatsApp reliability fixes, exec tool correctness, prefix-cache optimization, and broader chat-channel multimedia support.

## User Feedback Summary

Users are actively using PicoClaw across multiple chat channels and are pushing for feature parity between the Web UI and chat backends. Common pain points include:

- Lack of session management from Telegram and other channels.
- Desire for more gateway options, including privacy-oriented protocols like SimpleX and Tox.
- Need for OAuth 2.1 support as MCP servers evolve.
- Fragility of third-party chat integrations, such as WhatsApp client version lockouts.
- Internal code-quality concerns around concurrency and memory usage.

There is no explicit satisfaction rating available, but the volume of contributor-submitted fixes and feature PRs suggests a technically engaged community. The main dissatisfaction signal is the growing number of `stale` labels on valid issues and PRs.

## Backlog Watch

Several important items are waiting for maintainer attention:

- [#3200](https://github.com/sipeed/picoclaw/pull/3200) — Configurable default model fallback chain, open since July 1.
- [#3270](https://github.com/sipeed/picoclaw/pull/3270) — DashScope TTS + WeChat audio sending, open since July 20.
- [#3271](https://github.com/sipeed/picoclaw/pull/3271) — Update default model names across providers, open since July 20.
- [#3279](https://github.com/sipeed/picoclaw/pull/3279) — Fix seahorse tool-call format leakage, open since July 21.
- [#3283](https://github.com/sipeed/picoclaw/pull/3283) — DingTalk image message support, open since July 22.
- [#3308](https://github.com/sipeed/picoclaw/issues/3308) — Code review of concurrency and goroutine leaks, open since July 30.

The stale bot is labeling items very quickly — some created on July 30 were already marked stale by August 7. Without maintainer triage, valid feature requests and bug reports may continue to be closed as stale, as happened with [#3093](https://github.com/sipeed/picoclaw/issues/3093).

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-08

## 1. Today's Overview

On 2026-08-08, NanoClaw showed a quiet issue tracker but active pull-request development. No Issues were updated in the last 24 hours and no new release was published. Ten PRs were touched during the window: eight remain open and two moved to closed. Activity is spread across new integrations, utility skills, setup-wizard improvements, a database migration, and a formatter bug fix. Overall, the project appears healthy and feature-forward, with no new bug reports or regressions submitted in the current window.

## 2. Releases

No new releases were published on 2026-08-08. There are no release notes, breaking changes, or migration instructions to report.

## 3. Project Progress

Two PRs were closed today:

- [#3197 — fix(progress): 失败状态展示具体原因](https://github.com/nanocoai/nanoclaw/pull/3197)  
  Closed after addressing the agent-runner progress card only showing generic failure messages. The fix extracts the first meaningful failure reason from `resultSummary`, filters out exit-code boilerplate, limits output to 38 characters, and adds reducer + Feishu card JSON tests. Verification reported 274 targeted tests passing and a full suite of 1427 tests passing.

- [#546 — [PR: Skill, Status: Blocked] Add Mattermost channel skill (/add-mattermost)](https://github.com/nanocoai/nanoclaw/pull/546)  
  Closed as superseded. This was a long-running Mattermost integration PR aimed at the pre-v2 architecture; the new implementation is now tracked in open PR [#3199](https://github.com/nanocoai/nanoclaw/pull/3199).

Additional forward progress is visible in open PRs updated today:

- [#3199 — Add Mattermost channel integration (v2 ChannelAdapter)](https://github.com/nanocoai/nanoclaw/pull/3199)
- [#3198 — Add AnyDoc document conversion skill](https://github.com/nanocoai/nanoclaw/pull/3198)
- [#3190 — Add Tavily MCP tool skill](https://github.com/nanocoai/nanoclaw/pull/3190)
- [#3050 — Add Dial to the channel picker + wizard/skills](https://github.com/nanocoai/nanoclaw/pull/3050)
- [#2909 — Template setup flow in the wizard and first-agent stamping](https://github.com/nanocoai/nanoclaw/pull/2909)
- [#3145 — DB backfill for existing wirings](https://github.com/nanocoai/nanoclaw/pull/3145)

## 4. Community Hot Topics

No comment/reaction counts were available in the provided data, so exact “hottest” ranking is not possible. Based on recency, cross-reference, and scope, the highest-signal PRs today are:

- [#3199 — Mattermost channel integration](https://github.com/nanocoai/nanoclaw/pull/3199)  
  Directly replaces the stale #546 and is aligned to the current `ChannelAdapter`/`channel-registry.ts` architecture. This signals strong community/maintainer interest in Mattermost support.

- [#3190 — Tavily MCP tool skill](https://github.com/nanocoai/nanoclaw/pull/3190)  
  Adds a standalone web-search tool, reflecting demand for agent-ready search utilities.

- [#3198 — AnyDoc document conversion skill](https://github.com/nanocoai/nanoclaw/pull/3198)  
  Another utility-skill addition, indicating a pattern of contributors extending NanoClaw with practical document-processing capabilities.

- [#3050 — Dial channel picker + wizard integration](https://github.com/nanocoai/nanoclaw/pull/3050)  
  Shows interest in broadening the channel picker beyond the current defaults.

The underlying theme is clear: contributors are actively extending NanoClaw’s integration surface and adding reusable agent skills.

## 5. Bugs & Stability

No new Issues were filed in the last 24 hours, so there are no newly reported crashes or regressions. However, several open PRs address known or likely stability problems:

- **High — [#3145: Backfill destinations for existing wirings](https://github.com/nanocoai/nanoclaw/pull/3145)**  
  A database migration 021 fixes missing channel destinations for existing messaging-group wirings. It preserves existing destinations and custom local names while skipping wirings that already have a destination. This is an important data-integrity fix for existing deployments.

- **Medium — [#2346: Treat unknown slash commands as normal chat](https://github.com/nanocoai/nanoclaw/pull/2346)**  
  Unknown slash commands were categorized as `passthrough`, causing the Agent SDK to treat them as Claude Code slash commands and silently drop the response. The proposed fix falls through to `category: 'none'` so unrecognized commands are handled as ordinary chat.

- **Medium/Low — [#3197: Show concrete failure reasons in progress status](https://github.com/nanocoai/nanoclaw/pull/3197)**  
  Users previously saw generic messages like “执行系统检查失败”; the fix surfaces the first valid underlying reason. This improves observability and debugging.

- **Low/Undetermined — [#3196: Fix/add mount readonly](https://github.com/nanocoai/nanoclaw/pull/3196)**  
  No detailed summary was provided, but the title suggests a container/volume mount read-only hardening change.

## 6. Feature Requests & Roadmap Signals

No new feature-request Issues were updated, so the roadmap signals are coming from open PRs. The likely next-version areas include:

- **Channel expansion**: Mattermost v2 integration [#3199](https://github.com/nanocoai/nanoclaw/pull/3199) and Dial via channel picker/wizard [#3050](https://github.com/nanocoai/nanoclaw/pull/3050).
- **Utility skills**: Tavily MCP search skill [#3190](https://github.com/nanocoai/nanoclaw/pull/3190) and AnyDoc document conversion skill [#3198](https://github.com/nanocoai/nanoclaw/pull/3198).
- **Setup experience**: Template-based first-agent creation in the wizard [#2909](https://github.com/nanocoai/nanoclaw/pull/2909), building on the earlier template loader.

These are likely candidates for inclusion in the next NanoClaw release, assuming review and merge continue.

## 7. User Feedback Summary

No explicit user feedback Issues were updated in the last 24 hours. Inferred from the PRs, real user pain points and use cases include:

- Mattermost and Dial users need native channel integrations rather than workarounds.
- Agents benefit from ready-made tools like Tavily search and AnyDoc document conversion.
- Existing deployments may have incomplete wiring data that needs safe backfilling.
- Generic failure messages in progress cards are confusing; users want concrete reasons.
- Silently dropped responses for unknown slash commands are a serious usability issue.

The absence of open bug reports is a positive signal, though the number of long-open PRs may indicate some contributor-facing wait time for review.

## 8. Backlog Watch

No Issues are currently in the backlog, but several PRs have been waiting for significant time and may need maintainer attention:

- [#2346 — Unknown slash command fix](https://github.com/nanocoai/nanoclaw/pull/2346)  
  Opened 2026-05-08. This is a real response-dropping bug fix and has been open for three months.

- [#2909 — Template setup flow and first-agent stamping](https://github.com/nanocoai/nanoclaw/pull/2909)  
  Opened 2026-07-02. A core-team feature PR that is part of a larger template workflow.

- [#3050 — Dial channel picker + wizard integration](https://github.com/nanocoai/nanoclaw/pull/3050)  
  Opened 2026-07-14. Feature skill with channel-picker changes.

- [#3145 — DB backfill migration](https://github.com/nanocoai/nanoclaw/pull/3145)  
  Opened 2026-07-28. Important migration for existing installations and should be prioritized for review.

The old Mattermost PR #546, open since February, was finally closed today; that removes one long-running backlog item, but #2346 remains the oldest unresolved PR still needing maintainer action.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-08

## 1. Today's Overview

IronClaw saw high maintenance activity in the last 24 hours: **50 issues updated** (36 open/active, 14 closed) and **50 PRs updated** (38 open, 12 merged/closed). No new releases were published. The project is currently absorbing a dense QA bug-bash cycle, with several P1 issues around channel reliability, runner heartbeat failures, and agent hallucination of integration state. At the same time, the project is shipping substantial engineering work: a 5-PR “doc-truth” pipeline to prevent docs drift, bulk `tool_describe` optimization for progressive tool disclosure, memory persistence fixes, and new sandbox profiles. Overall, the project looks actively maintained and responsive, with many fixes already in flight.

## 2. Releases

No new releases in the 2026-08-08 window.

## 3. Project Progress

Notable closed/merged PRs in the last 24 hours:

- [PR #7214](https://github.com/nearai/ironclaw/pull/7214) — **feat(sandbox): explicit Docker and Railway user sandbox profiles**  
  Adds user-scoped sandbox profiles for Docker and Railway, with tenant+user workspace scoping and non-root Python workers.
- [PR #7372](https://github.com/nearai/ironclaw/pull/7372) — **test(disclosure): pin wide-catalog schema-token reduction floor**  
  Hardens the progressive tool disclosure benchmark against silent cost regression.
- [PR #7157](https://github.com/nearai/ironclaw/pull/7157) — **feat: explicit channel delivery tool**  
  Implements the two-lane channel delivery model: conversation lifecycle delivery plus notification-channel delivery, removing old delivery heuristics.

Several important issues also closed, confirming completed roadmap items:

- [Issue #6810](https://github.com/nearai/ironclaw/issues/6810) — Progressive tool disclosure is now safe default-on for Reborn.
- [Issue #7177](https://github.com/nearai/ironclaw/issues/7177) — Schema-aware ranked search for deferred tool retrieval closed.
- [Issue #7224](https://github.com/nearai/ironclaw/issues/7224) — Inspector Activity timeline and turn navigation closed.
- [Issue #7367](https://github.com/nearai/ironclaw/issues/7367) — Docs drift around chat channel-connect behavior closed.
- [Issue #6476](https://github.com/nearai/ironclaw/issues/6476), [Issue #6643](https://github.com/nearai/ironclaw/issues/6643), [Issue #6644](https://github.com/nearai/ironclaw/issues/6644), [Issue #6475](https://github.com/nearai/ironclaw/issues/6475) — QA bug-bash Slack/Telegram issues closed.

The **doc-truth pipeline** is the most visible in-progress initiative: five coordinated PRs are now open ([#7375](https://github.com/nearai/ironclaw/pull/7375), [#7376](https://github.com/nearai/ironclaw/pull/7376), [#7378](https://github.com/nearai/ironclaw/pull/7378), [#7379](https://github.com/nearai/ironclaw/pull/7379), [#7381](https://github.com/nearai/ironclaw/pull/7381)) to fix live doc drift tracked in [Issue #7317](https://github.com/nearai/ironclaw/issues/7317).

## 4. Community Hot Topics

Most-commented issues in the last 24 hours:

- [Issue #7340](https://github.com/nearai/ironclaw/issues/7340) — **No way to reset model settings to factory defaults** (6 comments)  
  Customer-facing UX gap: users who change provider/model settings cannot restore the original defaults. Signals a need for simple recovery/undo in settings.
- [Issue #6989](https://github.com/nearai/ironclaw/issues/6989) — **Token accounting: hybrid provider-usage + tail estimates** (4 comments)  
  P1 bug where `ModelWorkRequest::for_assistant` estimates tokens from a content reference string instead of referenced content. Important for cost/context correctness.
- [Issue #7317](https://github.com/nearai/ironclaw/issues/7317) — **Proposal: Doc-Truth Verification Pipeline** (3 comments)  
  Community/core contributor concern that breaking changes ship without docs updates. Already driving the 5-PR doc-truth series.
- [Issue #7360](https://github.com/nearai/ironclaw/issues/7360) — **Expand stress coverage across built-in and durable write paths** (2 comments)  
  Testing infrastructure gap: nightly stress workloads miss tool-call regressions.
- [Issue #6590](https://github.com/nearai/ironclaw/issues/6590) — **`serve` fails on Windows** (2 comments)  
  Platform blocker for local development on Windows.
- [Issue #7185](https://github.com/nearai/ironclaw/issues/7185) — **Memory not reliably recalled across conversations** (2 comments)  
  High-impact user-reported memory failure; fix PR already exists ([#7365](https://github.com/nearai/ironclaw/pull/7365)).
- [Issue #7292](https://github.com/nearai/ironclaw/issues/7292) — **Installed tool cannot be used; runner heartbeat error** (2 comments)  
  QA-reported P1 blocking real tool usage after installation.

PR comment counts were not populated in the snapshot, but the most active PR surface includes the large doc-truth series, [PR #7374](https://github.com/nearai/ironclaw/pull/7374) (bulk `tool_describe`), and [PR #7385](https://github.com/nearai/ironclaw/pull/7385) (durable tool-disclosure rollout metrics).

## 5. Bugs & Stability

Ranked by severity, the most significant open bugs updated in the last 24 hours:

1. [Issue #7292](https://github.com/nearai/ironclaw/issues/7292) — Installed tool cannot be used; run fails with runner heartbeat error.  
   Blocks core tool workflow after installation.

2. [Issue #7298](https://github.com/nearai/ironclaw/issues/7298) — “Request failed before it could be sent” / monitoring loses contact with runner.  
   Infrastructure-level reliability failure during execution.

3. [Issue #7344](https://github.com/nearai/ironclaw/issues/7344) — Slack shown ACTIVE in Messaging Channels, but assistant does not recognize the connection.  
   State mismatch between UI and agent behavior.

4. [Issue #7247](https://github.com/nearai/ironclaw/issues/7247) — Agent falsely claims GitHub is already connected.  
   Hallucinated integration state leads users into dead-ends.

5. [Issue #7246](https://github.com/nearai/ironclaw/issues/7246) — Agent hallucinates automation status instead of checking actual state.  
   Trust/accuracy issue: claims automation is running when none exists.

6. [Issue #7295](https://github.com/nearai/ironclaw/issues/7295) — Agent leaks or confuses Slack user identity in responses.  
   Potential privacy/correctness issue; agent references the wrong user in Slack DMs.

7. [Issue #7074](https://github.com/nearai/ironclaw/issues/7074) — Multi-tool meeting research fails after retrieving calendar data.  
   P1 multi-tool workflow regression.

8. [Issue #5456](https://github.com/nearai/ironclaw/issues/5456) — Routine runs fail with runner lease expiration.  
   Long-running P1; 90-second inactivity threshold is too aggressive for multi-tool routines.

9. [Issue #6989](https://github.com/nearai/ironclaw/issues/6989) — Token accounting bug in `ModelWorkRequest` estimation.  
   Affects cost/context accounting.

10. [Issue #6590](https://github.com/nearai/ironclaw/issues/6590) — `ironclaw serve` fails on Windows.  
    Platform support blocker.

11. [Issue #7368](https://github.com/nearai/ironclaw/issues/7368) — Channel turns can take minutes on DeepSeek-class models.  
    Latency behind several Telegram QA failures.

12. [Issue #7369](https://github.com/nearai/ironclaw/issues/7369) — No way to capture traces when agent gets an error.  
    Observability gap, especially for debugging.

Several fix PRs are already in flight:

- [PR #7365](https://github.com/nearai/ironclaw/pull/7365) fixes memory recall ([#7185](https://github.com/nearai/ironclaw/issues/7185)).
- [PR #7382](https://github.com/nearai/ironclaw/pull/7382) expands stress coverage ([#7360](https://github.com/nearai/ironclaw/issues/7360)).
- [PR #7377](https://github.com/nearai/ironclaw/pull/7377) makes a run act as its invoker, likely addressing channel/user identity issues.
- [PR #7384](https://github.com/nearai/ironclaw/pull/7384) fixes misreported “bad API key” errors by loading the operator `.env`.

## 6. Feature Requests & Roadmap Signals

Strong signals for upcoming work:

- **Factory reset for model settings** — [Issue #7340](https://github.com/nearai/ironclaw/issues/7340) is a simple, high-value UX request likely to land soon.
- **Doc-Truth Verification Pipeline** — [Issue #7317](https://github.com/nearai/ironclaw/issues/7317) already has a full PR series open; docs accuracy is becoming a first-class CI concern.
- **Localization / i18n for failure summaries** — [Issue #7362](https://github.com/nearai/ironclaw/issues/7362) asks to move 65 hardcoded English failure strings into per-surface i18n.
- **Trace capture on agent error** — [Issue #7369](https://github.com/nearai/ironclaw/issues/7369) requests trace collection when an error occurs.
- **Persisted-state compatibility enforcement** — [Issue #7380](https://github.com/nearai/ironclaw/issues/7380) is an epic to require proof that a new binary can read previous release state before merge.
- **Decomposition of `tool_disclosure_port.rs`** — [Issue #7383](https://github.com/nearai/ironclaw/issues/7383) tracks reducing a 4.4k-line file, per the project’s architecture rules.
- **Compact Google extension capabilities** — [PR #5503](https://github.com/nearai/ironclaw/pull/5503) remains open as an experiment to add context-efficient Gmail/Calendar capabilities.
- **Durable tool-disclosure metrics** — [PR #7385](https://github.com/nearai/ironclaw/pull/7385) is a strong candidate for next release: durable, queryable rollout metrics for progressive disclosure.

## 7. User Feedback Summary

Real user pain points visible in this snapshot:

- **Settings recovery**: A customer changed model/provider settings and could not restore defaults ([#7340](https://github.com/nearai/ironclaw/issues/7340)).
- **Memory failures**: Multiple testers reported that context from earlier conversations is not recalled later ([#7185](https://github.com/nearai/ironclaw/issues/7185)).
- **Docs confusing agents**: Published docs stated chat cannot connect channels, feeding model refusals and dead-ends ([#7367](https://github.com/nearai/ironclaw/issues/7367), [Issue #7317](https://github.com/nearai/ironclaw/issues/7317)).
- **Platform friction**: Windows users cannot run `ironclaw serve` in local-dev profiles ([#6590](https://github.com/nearai/ironclaw/issues/6590)).
- **QA/Champions feedback**: Slack and Telegram QA testing uncovered pairing loops, wrong-recipient replies, unprocessed messages, and latency ([#6475](https://github.com/nearai/ironclaw/issues/6475), [#6643](https://github.com/nearai/ironclaw/issues/6643), [#6644](https://github.com/nearai/ironclaw/issues/6644), [#7368](https://github.com/nearai/ironclaw/issues/7368)).
- **Trust in agent state**: Users are being told integrations/automations are active when they are not, causing frustration and loss of confidence ([#7246](https://github.com/nearai/ironclaw/issues/7246), [#7247](https://github.com/nearai/ironclaw/issues/7247), [#7344](https://github.com/nearai/ironclaw/issues/7344)).

Satisfaction signals are mostly indirect: the closure of progressive tool disclosure work ([#6810](https://github.com/nearai/ironclaw/issues/6810)) and the rapid creation of fix PRs for reported bugs suggest the team is responsive, but the volume of P1 QA bugs indicates stability is still a work in progress.

## 8. Backlog Watch

Issues/PRs that appear stuck or need maintainer attention:

- [Issue #5456](https://github.com/nearai/ironclaw/issues/5456) — **Runner lease expiration** (open since 2026-06-30, P1). Persistent infrastructure failure pattern; still open after over a month.
- [PR #5503](https://github.com/nearai/ironclaw/pull/5503) — **Experiment: compact Google extension capabilities** (open since 2026-07-01). Large experiment PR awaiting decision or review.
- [Issue #6590](https://github.com/nearai/ironclaw/issues/6590) — **Windows `serve` failure** (open since 2026-07-23). Platform blocker with only 2 comments.
- [Issue #6989](https://github.com/nearai/ironclaw/issues/6989) — **Token accounting bug** (open since 2026-08-01, P1, 4 comments). Needs a concrete fix PR.
- [Issue #7074](https://github.com/nearai/ironclaw/issues/7074) — **Multi-tool meeting research fails** (open since 2026-08-03, P1). No fix PR visible yet.
- [PR #7131](https://github.com/nearai/ironclaw/pull/7131) — **Deliver triggered run failures to creator** (open since 2026-08-04). Important reliability improvement waiting for review.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-08

## 1. Today's Overview

LobsterAI is in an active release cycle: a new `2026.8.7` release was published, and 7 PRs were updated within the last 24 hours — 6 merged/closed and 1 open. Issue activity was moderate with 7 issues updated, 4 still open and 3 closed/stale. The merged release branch `2026.8.5` brought improvements across Cowork search, math rendering, OpenClaw configuration, plugin installation, and Windows installer reliability. One important open PR (#2452) directly targets a user-reported custom provider model-ID bug. Overall project health looks solid, with rapid bug-fix turnaround and a steady cadence of minor releases.

## 2. Releases

### LobsterAI 2026.8.7 (released 2026-08-07)

**What’s Changed:**

- `feat(cowork): add title-bar conversation search` — [#2435](https://github.com/netease-youdao/LobsterAI/pull/2435)
- `feat: markdown latex math delimiters` — [#2449](https://github.com/netease-youdao/LobsterAI/pull/2449)
- `fix(win-installer): rescue null watchdog exit code` — [#2446](https://github.com/netease-youdao/LobsterAI/pull/2446)

No breaking changes or migration notes were included in the release summary.

## 3. Project Progress

Six PRs were merged/closed in the last 24 hours:

- [#2451](https://github.com/netease-youdao/LobsterAI/pull/2451) — **Merged release/2026.8.5 into main**. Adds in-conversation search to Cowork, improved math rendering, IM analytics, OpenClaw configuration & plugin installation, and Windows installation/update reliability.
- [#2450](https://github.com/netease-youdao/LobsterAI/pull/2450) — `fix(cowork): restore fullscreen code toolbar clicks on Windows`
- [#2449](https://github.com/netease-youdao/LobsterAI/pull/2449) — `fix: markdown latex math delimiters`
- [#2448](https://github.com/netease-youdao/LobsterAI/pull/2448) — `fix chat search`
- [#2445](https://github.com/netease-youdao/LobsterAI/pull/2445) — `fix(openclaw): strip plugin-index-managed keys from config.set`
- [#2446](https://github.com/netease-youdao/LobsterAI/pull/2446) — `fix(win-installer): rescue null watchdog exit code via extractor`

Still open:

- [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) — `fix(openclaw): preserve provider for slashed model ids` — directly addresses the SiliconFlow / custom-provider bug reported in #2443.

## 4. Community Hot Topics

Most-discussed items all have 2 comments and cover distinct pain points:

- [Issue #1195](https://github.com/netease-youdao/LobsterAI/issues/1195) — Self-created skills are installed into the OpenClaw skill directory but do not appear in the skill panel after restart. This is a long-standing open issue since April and still lacks a confirmed fix.
- [Issue #1263](https://github.com/netease-youdao/LobsterAI/issues/1263) — Scheduled tasks appear duplicate in the UI, both showing `API rate limit reached`. Points to possible API-key/rate-limit handling and scheduled-task deduplication problems.
- [Issue #1265](https://github.com/netease-youdao/LobsterAI/issues/1265) — Request to bind different IM bots and models to different agents for multi-agent workflows. Closed/stale, but signals demand for more flexible agent-to-IM/model routing.
- [Issue #1273](https://github.com/netease-youdao/LobsterAI/issues/1273) — SQL.js/WASM `memory access out of bounds` crashes under high-frequency writes, with risk of database file corruption. Closed/stale but is the most severe stability report in this batch.

## 5. Bugs & Stability

Ranked by user impact:

1. **High — [Issue #1273](https://github.com/netease-youdao/LobsterAI/issues/1273): SQL.js/WASM memory crash & DB corruption risk**  
   High-frequency write scenarios (Cowork, dense message streams) can trigger an unrecoverable `memory access out of bounds` crash. Non-atomic `fs.writeFileSync` can corrupt the database. No fix PR was observed; issue is closed/stale.

2. **Medium — [Issue #2443](https://github.com/netease-youdao/LobsterAI/issues/2443): Model ID with slash unusable for custom providers (SiliconFlow)**  
   `deepseek-ai/DeepSeek-V4-Flash` cannot be selected in the UI. The newly opened PR [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) appears to fix this by preserving the provider prefix when storing session patches.

3. **Medium — [Issue #1195](https://github.com/netease-youdao/LobsterAI/issues/1195): Self-created skill not shown in skill panel**  
   User creates a skill, install succeeds, restart required, but skill never appears. Open since April and labeled `stale`; still needs maintainer attention.

4. **Medium — [Issue #2447](https://github.com/netease-youdao/LobsterAI/issues/2447): Execution returns no output and no error**  
   A user reports a silent execution failure with only a screenshot. Low diagnostic detail; needs reproduction steps or logs.

5. **Low — [Issue #1263](https://github.com/netease-youdao/LobsterAI/issues/1263): Duplicate scheduled tasks in UI**  
   Duplicated entries and API rate-limit messages likely indicate a UI/state issue or missing deduplication. Closed/stale.

Also fixed today:

- [#2450](https://github.com/netease-youdao/LobsterAI/pull/2450) — Windows fullscreen code toolbar clicks restored.
- [#2446](https://github.com/netease-youdao/LobsterAI/pull/2446) — Windows installer watchdog null-exit-code rescue.

## 6. Feature Requests & Roadmap Signals

- [Issue #1265](https://github.com/netease-youdao/LobsterAI/issues/1265) — **Per-agent IM bot and model binding**. Users want different agents to use different bots/models, e.g. a scheduler bot vs. a PPT assistant. This was closed/stale, but the underlying multi-agent orchestration need remains relevant.
- [Issue #2444](https://github.com/netease-youdao/LobsterAI/issues/2444) — **Input box edit mode**. User requests an Enter-to-newline / Ctrl+Enter-to-send mode or an "edit mode" toggle to avoid accidental sends during long prompts. A WYSIWYG Markdown mode is also suggested as optional.

Prediction: The in-progress fix in [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) has the highest chance of appearing in the next patch release. The input-editor improvement (#2444) is a plausible UX enhancement for a future minor version, while per-agent bot/model binding (#1265) may need reopening to gain traction.

## 7. User Feedback Summary

Real user pain points from the last 24 hours:

- **Skill management confusion**: Custom skills appear to install into OpenClaw’s directory but are invisible in LobsterAI’s skill panel.
- **Custom model provider frustration**: OpenAI-compatible providers with slash-containing model IDs cannot be used through the UI, affecting SiliconFlow users.
- **Multi-agent configuration rigidity**: Users want agent-specific IM bot and model selection, not global bindings.
- **Stability under load**: High-frequency Cowork/session writes can crash the app and risk database corruption via SQL.js.
- **Silent failures**: Some executions produce neither output nor errors, making debugging difficult.
- **Input UX friction**: Long prompts risk accidental early sends because Enter sends by default.

Satisfaction signals: The release of Cowork conversation search, Markdown LaTeX math support, and Windows installer fixes shows maintainers are responsive to recent UI/UX and platform reliability issues.

## 8. Backlog Watch

- [Issue #1195](https://github.com/netease-youdao/LobsterAI/issues/1195) — **Open since 2026-04-01, stale label, no fix**. The self-created skill installation issue is the oldest open item in this batch and continues to affect users. Needs either reproduction, a fix, or a workaround.
- [Issue #1263](https://github.com/netease-youdao/LobsterAI/issues/1263), [#1265](https://github.com/netease-youdao/LobsterAI/issues/1265), [#1273](https://github.com/netease-youdao/LobsterAI/issues/1273) — Closed/stale, but they represent recurring themes (scheduled-task reliability, multi-agent configuration, storage engine robustness). Maintainers may want to re-triage these as roadmap candidates rather than let them age out.
- [Issue #2447](https://github.com/netease-youdao/LobsterAI/issues/2447) — New and open with insufficient detail; needs maintainer follow-up for logs or reproduction steps.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

## CoPaw Project Digest — 2026-08-08

> Note: The CoPaw org’s current issue/PR stream is tracked under `agentscope-ai/QwenPaw`; all links below point to that repo.

---

## 1. Today’s Overview

As of 2026-08-08, CoPaw/QwenPaw is highly active: 31 issues were updated in the last 24 hours (20 open/active, 11 closed) and 49 PRs were updated (27 open, 22 merged/closed). One new beta release, `v2.1.0-beta.2`, shipped with CI and checkpoint fixes. The project is healthy in contributor throughput, but the open backlog is heavily weighted toward stability issues: agent loops/freezes, provider compatibility, MCP tool lifecycle problems, and Windows installer/desktop regressions. Several targeted fix PRs are already open, indicating responsive maintainer attention. Community engagement is broad, with a significant Chinese-speaking user base reporting Docker, desktop, and plugin-market pain points.

---

## 2. Releases

### v2.1.0-beta.2

**What’s Changed:**

- `fix(ci)`: fence-aware section extraction in `real-behavior-proof` — fixes #6626 via [PR #6653](https://github.com/agentscope-ai/QwenPaw/pull/6653)
- `fix(checkpoints)`: restore auto snapshots in web workspace bootstrap — via [PR #6](https://github.com/agentscope-ai/QwenPaw/pull/6)

The release notes contain **no breaking-change or migration notes**. This is a beta release, so users should expect potential regressions and are likely the target audience for the v2.1.0 final stabilization cycle.

---

## 3. Project Progress

- **22 PRs** were merged/closed in the window. The visible sample includes one completed PR:
  - [#4694 — feat(website): downloads UI refactoring and opt](https://github.com/agentscope-ai/QwenPaw/pull/4694) — closed/merged; advances the website download experience.
- The new `v2.1.0-beta.2` release also absorbed two merged fixes: [PR #6653](https://github.com/agentscope-ai/QwenPaw/pull/6653) and [PR #6](https://github.com/agentscope-ai/QwenPaw/pull/6).
- Notable open PRs actively moving:
  - [#6772 — ReMe memory configuration, embedding lifecycle, Daily Paper](https://github.com/agentscope-ai/QwenPaw/pull/6772)
  - [#6809 — sanitize Chat Completions content for strict providers](https://github.com/agentscope-ai/QwenPaw/pull/6809)
  - [#6799 — stop temp output file leakage and cap captured shell output](https://github.com/agentscope-ai/QwenPaw/pull/6799)
  - [#6808 — show custom profile markdown files in Console](https://github.com/agentscope-ai/QwenPaw/pull/6808)
  - [#6788 — use shared root profile workspace for ACL store](https://github.com/agentscope-ai/QwenPaw/pull/6788)
  - [#6804 — WeChat Chinese approval replies](https://github.com/agentscope-ai/QwenPaw/pull/6804)
  - [#6800 — intelligent email management assistant](https://github.com/agentscope-ai/QwenPaw/pull/6800)

---

## 4. Community Hot Topics

Most active issues by comment count:

- [#6116 — [Bug] Doom loop: agent repeatedly triggers same tool call in single turn](https://github.com/agentscope-ai/QwenPaw/issues/6116) — 8 comments  
  **Underlying need:** loop protection should activate earlier; repeated API calls/tokens are wasted before the ~6-repetition warning.

- [#6782 — [Bug] 2.0.1 Docker version: plugin/app market always “maintenance”](https://github.com/agentscope-ai/QwenPaw/issues/6782) — 8 comments  
  **Underlying need:** Docker installations should have a working plugin/app marketplace; likely network/registry/endpoint issue.

- [#6732 — [Bug] MCP tools regularly stop working](https://github.com/agentscope-ai/QwenPaw/issues/6732) — 6 comments  
  **Underlying need:** MCP tool registration should not silently expire; users are forced to restart the container.

- [#6490 — [Feature] Add Volcengine Agent Plan and Xiaomi MiMo Standard API as built-in providers](https://github.com/agentscope-ai/QwenPaw/issues/6490) — 4 comments  
  **Underlying need:** users want broader built-in model-provider coverage.

- [#6786 — [Bug] Telegram channel access_control whitelist resets when multica starts a new task](https://github.com/agentscope-ai/QwenPaw/issues/6786) — 4 comments  
  **Underlying need:** per-task workspaces must not clear channel ACL state; a fix PR is already open ([#6788](https://github.com/agentscope-ai/QwenPaw/pull/6788)).

PR discussion was quieter: the top sampled PRs had no comment counts recorded, meaning issue discussion is currently driving the community signal.

---

## 5. Bugs & Stability

### High Severity

- [#6768 — Agent enters infinite loop after completing multi-step task; session blocked for hours](https://github.com/agentscope-ai/QwenPaw/issues/6768)  
  No visible fix PR yet; needs maintainer investigation.

- [#6780 — 2.0.1 becomes unresponsive after idle period; requires process restart](https://github.com/agentscope-ai/QwenPaw/issues/6780)  
  No visible fix PR yet.

- [#6732 — MCP tools regularly fail until Docker container restart](https://github.com/agentscope-ai/QwenPaw/issues/6732)  
  Reliability issue affecting automation workflows.

- [#6810 — Windows installer/update fails because NM host lock files block overwrite](https://github.com/agentscope-ai/QwenPaw/issues/6810)  
  NSIS errors on `python-runtime` files; install/update path is broken for some Windows users.

- [#6812 — Google API “Model ‘unknown’ execution failed”](https://github.com/agentscope-ai/QwenPaw/issues/6812)  
  Root cause: Gemini provider sends `$schema` inside tool schemas, which Google’s API rejects.

- [#6786 — Telegram ACL whitelist resets on new multica task](https://github.com/agentscope-ai/QwenPaw/issues/6786)  
  Approved users get blocked after per-task workspace creation.  
  **Fix PR open:** [#6788](https://github.com/agentscope-ai/QwenPaw/pull/6788)

- [#6116 — [Closed] Doom loop: same tool call repeated in a single turn](https://github.com/agentscope-ai/QwenPaw/issues/6116)  
  Closed, but highlights token-wasting loop behavior.

- [#6773 — [Closed] Linux doom-loop/rubric gates never activate; `in_loop_modes` is a no-op](https://github.com/agentscope-ai/QwenPaw/issues/6773)  
  Safety gates silently disabled — closed, but important signal.

- [#6775 — Malware Bytes detects “Trojan Loader” in Windows Desktop version](https://github.com/agentscope-ai/QwenPaw/issues/6775)  
  Likely false positive, but one user uninstalled and asked for clarification. Trust-impacting if not addressed.

- [#6782 — Docker plugin/app market always shows maintenance](https://github.com/agentscope-ai/QwenPaw/issues/6782)  
  Blocks plugin installation for Docker users.

### Medium Severity

- [#6811 — OpenAI Responses continuation summary ignores `disable_thinking` and misreports 60-second cancellation as malformed output](https://github.com/agentscope-ai/QwenPaw/issues/6811)
- [#6813 — `consume_model_response` raises `KeyError: '__aiter__'` on agentscope 2.x `ChatResponse`; chat auto-title generation fails](https://github.com/agentscope-ai/QwenPaw/issues/6813)
- [#6803 — OpenAI-compatible requests rejected by strict providers due to Responses-API fields](https://github.com/agentscope-ai/QwenPaw/issues/6803)  
  **Fix PR open:** [#6809](https://github.com/agentscope-ai/QwenPaw/pull/6809)
- [#6785 — Profile category hard-codes official persona files; custom persona `.md` files can no longer be toggled](https://github.com/agentscope-ai/QwenPaw/issues/6785)  
  **Fix PR open:** [#6808](https://github.com/agentscope-ai/QwenPaw/pull/6808)
- [#6794 — Agent Kanban: creating an Issue returns 405; hot reload causes temporary 404](https://github.com/agentscope-ai/QwenPaw/issues/6794)
- [#6792 — Built-in ACP runner uses deprecated npm package names](https://github.com/agentscope-ai/QwenPaw/issues/6792)
- [#6806 — qwenpaw-creator: Windows cannot save model config — “Internal Server Error”](https://github.com/agentscope-ai/QwenPaw/issues/6806)
- [#6807 — qwenpaw-creator: Windows video/image generation and asset publishing broken](https://github.com/agentscope-ai/QwenPaw/issues/6807)
- [#6797 — [Closed] v2.1.0b2 desktop mode cannot select/copy text in conversation window](https://github.com/agentscope-ai/QwenPaw/issues/6797)  
  Likely addressed by [#6801](https://github.com/agentscope-ai/QwenPaw/pull/6801) / [#6802](https://github.com/agentscope-ai/QwenPaw/pull/6802).
- [#6565 / #6480 — Closed shell issues: multi-line command collapse, background/nohup process hangs](https://github.com/agentscope-ai/QwenPaw/issues/6565)  
  Closed; users should verify against latest beta.

---

## 6. Feature Requests & Roadmap Signals

- **More built-in providers:**  
  [#6490 — Volcengine Agent Plan and Xiaomi MiMo Standard API](https://github.com/agentscope-ai/QwenPaw/issues/6490)  
  [#6285 — Add `qwen3.8-max-preview` to Aliyun Token Plan model list](https://github.com/agentscope-ai/QwenPaw/issues/6285)  
  These are low-risk additions likely to land in a future minor release.

- **Desktop/UI polish:**  
  [#6790 — Single-click app launch and return-to-full-mode button in desktop mode](https://github.com/agentscope-ai/QwenPaw/issues/6790)  
  Text selection/copy restoration is already being fixed via [#6801](https://github.com/agentscope-ai/QwenPaw/pull/6801) and [#6802](https://github.com/agentscope-ai/QwenPaw/pull/6802).

- **Browser/context persistence:**  
  [#6770 — Make user Chrome tab lifetime configurable across response cycles](https://github.com/agentscope-ai/QwenPaw/issues/6770)

- **Channel improvements:**  
  [#6804 — WeChat Chinese approval replies](https://github.com/agentscope-ai/QwenPaw/pull/6804)  
  [#6715 — OneBot remote inbound voice/image media](https://github.com/agentscope-ai/QwenPaw/pull/6715)

- **Product expansion signals:**  
  [#6800 — Intelligent email management assistant](https://github.com/agentscope-ai/QwenPaw/pull/6800)  
  [#6772 — ReMe memory configuration, embedding lifecycle, and Daily Paper](https://github.com/agentscope-ai/QwenPaw/pull/6772)

**Prediction for next versions:** v2.1.x will likely focus on provider compatibility sanitization, desktop text-selection fixes, ACL persistence for channel security, custom persona visibility, and WeChat/OneBot channel enhancements. Memory and mailbox features point to broader “proactive agent” capabilities beyond chat.

---

## 7. User Feedback Summary

- **Active but stability-sensitive community:** many users are hitting agent loops, session freezes, MCP tool expiration, Windows installer failures, and Docker/plugin market issues.
- **Chinese-speaking users are a large segment:** multiple reports in Chinese focus on Docker, desktop mode, plugin market, and Windows packaging. Localization-aware support and release notes would help.
- **Users provide deep root-cause analysis:** several issues include code-level diagnosis, e.g. [#6812](https://github.com/agentscope-ai/QwenPaw/issues/6812), [#6803](https://github.com/agentscope-ai/QwenPaw/issues/6803), [#6794](https://github.com/agentscope-ai/QwenPaw/issues/6794), and [#6807](https://github.com/agentscope-ai/QwenPaw/issues/6807). This indicates a technically sophisticated user base.
- **Trust impact from antivirus warning:** [#6775](https://github.com/agentscope-ai/QwenPaw/issues/6775) shows a user who loves the project (“I love your work. Thanks for all you do.”) but uninstalled because of a Malware Bytes warning. A public confirmation of false-positive status would reduce risk.
- **Satisfaction is tempered by reliability:** users want the agent to fail loudly and recover cleanly, not silently loop or require container/process restarts.

---

## 8. Backlog Watch

These issues/PRs have been open or under review for a while and need maintainer attention:

- [#6285 — Aliyun Token Plan model list missing `qwen3.8-max-preview`](https://github.com/agentscope-ai/QwenPaw/issues/6285) — open since Jul 20
- [#6490 — Add Volcengine Agent Plan and Xiaomi MiMo Standard API providers](https://github.com/agentscope-ai/QwenPaw/issues/6490) — open since Jul 27
- [#6615 — fix(config): handle corrupted agent config and invalid JSON](https://github.com/agentscope-ai/QwenPaw/pull/6615) — under review since Jul 31
- [#6617 — fix(providers): honor Retry-After cap on streaming retry path](https://github.com/agentscope-ai/QwenPaw/pull/6617) — under review since Jul 31
- [#6623 — fix(acp): prevent final text loss when notifications race the prompt response](https://github.com/agentscope-ai/QwenPaw/pull/6623) — under review since Aug 1
- [#6688 — fix(plugins): isolate bare absolute imports per plugin namespace](https://github.com/agentscope-ai/QwenPaw/pull/6688) — open since Aug 4; fixes plugin installation failure
- [#6725 — fix(agents): report fork finalization failures in background tasks](https://github.com/agentscope-ai/QwenPaw/pull/6725) — open since Aug 5
- [#6750 — fix(chat): session identity deadlock, early session save, oversized prompt collapse](https://github.com/agentscope-ai/QwenPaw/pull/6750) — open since Aug 6
- [#6768 — Agent infinite loop after multi-step task; session blocked for hours](https://github.com/agentscope-ai/QwenPaw/issues/6768) — open since Aug 6, still needs maintainer investigation

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-08

## 1. Today's Overview

ZeroClaw is in a period of **high-intensity stabilization and architecture consolidation**: 50 issues and 50 PRs were updated in the last 24 hours, with maintainers merging/accepting 5 issues and 3 PRs while 47 PRs remain open. Activity is dominated by **runtime reliability of the SOP engine and cron system**, **security hardening of shell/path confinement**, and **observability/OTel standardization**. A cluster of P1 severity bugs reported today — most notably a silent `forbidden_paths` bypass (#9815) and non-firing Anthropic budget caps (#9816) — indicates the project is actively auditing its own security and cost controls. No new releases were published, and the project remains in a "many open PRs awaiting review" state that suggests a large release may be pending coalescence.

## 2. Releases

No new releases in the last 24 hours. The most recent reference version in active code is **v0.8.4** (per issue reports). Several merged/closed PRs are candidates for the next minor release.

## 3. Project Progress

**Merged/closed PRs (3 total; 1 visible in top-20):**
- **[#9836 — fix(transcription): make local_whisper bearer_token optional](https://github.com/zeroclaw-labs/zeroclaw/pull/9836)** — `LocalWhisperProvider::from_config` previously hard-failed when `bearer_token` was absent; whisper.cpp's loopback server has no auth, so the token is now optional. Unblocks local transcription on default setups.

**Closed issues (5):**
- **[#8938 — RFC: Cross-turn conversation correlation to OTel export](https://github.com/zeroclaw-labs/zeroclaw/issues/8933)** — Accepted; carries `gen_ai.conversation.id` per OTel Semantic Conventions v1.41.0.
- **[#9246 — RFC: Preserve Todo tracker configuration during ZeroCode ownership migration](https://github.com/zeroclaw-labs/zeroclaw/issues/9246)** — Accepted; consolidates the July review agreements.
- **[#7232 — Structured Observability Enhancement (Rich Events, OTel Trace Correlation)](https://github.com/zeroclaw-labs/zeroclaw/issues/7232)** — Closed/accepted; feeds into the #8933 work.
- **[#6055 — Slack: hydrate thread context from conversations.replies](https://github.com/zeroclaw-labs/zeroclaw/issues/6055)** — Accepted; first-mention thread backfill is now approved scope.
- **[#9386 — Gemini API key in request URL survives sanitize_api_error (P1 security bug)](https://github.com/zeroclaw-labs/zeroclaw/issues/9386)** — Fixed and closed; API keys can no longer be echoed into the originating chat on transport failures.

**Feature/architecture work advancing via open PRs:** Agent-facing config authoring with operator approval (#9828), `web_research` delegate scoping raw search behind it (#9833), and headless SOP run driving (#9841, continuing #9494).

## 4. Community Hot Topics

- **[#8933 — RFC: Cross-turn conversation correlation to OTel export](https://github.com/zeroclaw-labs/zeroclaw/issues/8933)** (13 comments, closed/accepted) — The observability community's most actively shaped proposal. Underlying need: multi-turn agent conversations are currently untraceable as a single unit in downstream telemetry.
- **[#9246 — RFC: Preserve Todo tracker configuration during ZeroCode ownership migration](https://github.com/zeroclaw-labs/zeroclaw/issues/9246)** (12 comments) — Config loss during ownership migration is a real trust-breaker for teams; accepted with agent-assisted revision.
- **[#5937 — Refactor: Unify providers architecture and reqwest client management](https://github.com/zeroclaw-labs/zeroclaw/issues/5937)** (12 comments, open since April) — Persistent pain around duplicated provider code and fragmented reqwest construction; a high-risk, high-effort refactor still awaiting a champion.
- **[#8424 — RFC: Workspace-relative forbidden path patterns and optional .zeroclawignore](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)** (10 comments) — Users want agent protection for workspace-internal sensitive files (`.env`, `.cargo/config.toml`); today only out-of-workspace paths are blocked.
- **[#8043 — RFC: Retire standalone aardvark-sys crate](https://github.com/zeroclaw-labs/zeroclaw/issues/8043)** (9 comments) — Simplification signal: the workspace wants to fold the last `unsafe` carve-out into `zeroclaw-hardware`.

## 5. Bugs & Stability

Ranked by severity:

**Critical / P1:**

- **[#9815 — `forbidden_paths` is unreachable for any path under allowed_roots or the workspace](https://github.com/zeroclaw-labs/zeroclaw/issues/9815)** — The forbidden-path loop is never reached because `is_path_allowed` returns `true` at the allowed-root check first. This is a **silent security-control bypass**; the feature appears to work but does nothing for workspace-internal files.
- **[#9816 — Anthropic provider reports $0.00 spend, so daily/monthly budget caps can never fire](https://github.com/zeroclaw-labs/zeroclaw/issues/9816)** — Every usage record is written with `cost_usd: 0.0`; cost governance is effectively disabled on the direct Anthropic provider.
- **[#9805 — SOP auto-mode runs from channel/cron triggers are never executed and rot as 'running' forever](https://github.com/zeroclaw-labs/zeroclaw/issues/9805)** — Headless dispatch has no agent loop; the run holds a concurrency slot forever. A fix is in flight via **PR #9841** (drives headless SOP runs) and **PR #9494**.
- **[#9840 — Daemon steals daemon.sock on start and unlinks it on exit, stranding a live daemon](https://github.com/zeroclaw-labs/zeroclaw/issues/9840)** — Two unguarded operations let any second daemon break the first and the socket for everyone (S1 workflow blocked).
- **[#9770 — `cron update` silently discards changes to declarative jobs (six columns)](https://github.com/zeroclaw-labs/zeroclaw/issues/9770)** — `command`, `name`, `expression`/`schedule`, `session_target`, `allowed_tools`, `uses_memory` are silently dropped; needs explicit rejection.
- **[#9775 — OpenRouter streaming requests drop provider_extra](https://github.com/zeroclaw-labs/zeroclaw/issues/9775)** — `stream_chat` bypasses `merge_extra_body`, so configured extra body params never reach the API (S1 workflow blocked).
- **[#9786 — Malformed SOP.toml is silently dropped; `sop list` omits it and `sop validate` reports success](https://github.com/zeroclaw-labs/zeroclaw/issues/9786)** — Indistinguishable from a deleted SOP; no diagnostic anywhere.

**Moderate / P2:**

- **[#9821 — cron tool: agent never invokes it, always falls back to shell crontab (blocked by policy)](https://github.com/zeroclaw-labs/zeroclaw/issues/9821)** (Raspberry Pi/NIM user report)
- **[#9820 — calculator tool: model emits literal `<TOOLCALL>` pseudo-syntax instead of a function call](https://github.com/zeroclaw-labs/zeroclaw/issues/9820)** — Likely model/tool-schema mismatch worth a compatibility investigation.
- **[#9825 — Leak detector redacts public blockchain addresses, making payment URLs undeliverable](https://github.com/zeroclaw-labs/zeroclaw/issues/9825)** — False positive by design; needs an allowlist/context heuristic.
- **[#9832 — zeroclaw-hardware fails to compile with `--features hardware`](https://github.com/zeroclaw-labs/zeroclaw/issues/9832)** — Unresolved import `aardvark_sys::AardvarkHandle` on aarch64 Linux; blocks Raspberry Pi builds.
- **[#9834 — Intermittent zeroclaw-runtime test failures from shared process-global state](https://github.com/zeroclaw-labs/zeroclaw/issues/9834)** — Flaky CI on clean master; 2 of 6 baseline runs failed.
- **[#9656 — Telegram typing indicator runs for the whole approval wait](https://github.com/zeroclaw-labs/zeroclaw/issues/9656)** — Blocked turns look active; P2 UX issue, distinct from Discord #9198.

**Notable security-fix PRs in review:** [#9827](https://github.com/zeroclaw-labs/zeroclaw/pull/9827) (stop shell children escaping confinement), [#9839](https://github.com/zeroclaw-labs/zeroclaw/pull/9839) (deny irreversible destructive commands in every posture), [#9838](https://github.com/zeroclaw-labs/zeroclaw/pull/9838) (authorize Telegram approval-button tappers), [#9384](https://github.com/zeroclaw-labs/zeroclaw/pull/9384) (symlink-escape hardening).

## 6. Feature Requests & Roadmap Signals

- **[#9810 — RFC: Load Agent Plugins 1.0 skill and MCP packages](https://github.com/zeroclaw-labs/zeroclaw/issues/9810)** — Vendor-neutral plugin loading (`plugin.json` + `skills/` + `mcp.json`). Strong roadmap signal for ecosystem interoperability; likely candidate for next minor version given existing plugin-catalog groundwork (#8908/#8909).
- **[#9824 — Simplify default web-tool surface to web_fetch + web_research + http_request](https://github.com/zeroclaw-labs/zeroclaw/issues/9824)** — Already moving: **PR #9833** implements `web_research` as a bounded sub-agent delegate and scopes raw `web_search` to it. Expect this to land together.
- **[#8424 — Workspace-relative forbidden paths and optional `.zeroclawignore`](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)** — Complements #9815's bug report; likely to be re-scoped as the fix for forbidden-path enforcement.
- **[#9828 — Agent-facing config authoring with operator-approved policy previews](https://github.com/zeroclaw-labs/zeroclaw/pull/9828)** — Replaces the `echo > config.toml` pattern; six-commit PR, each independently testable.
- **[#9835 — Rename root package `zeroclawlabs` → `zeroclaw`](https://github.com/zeroclaw-labs/zeroclaw/pull/9835)** — Maintenance/cleanup; the crates.io name is now under project control.

**Prediction:** The next release will likely bundle the web-tool simplification (#9824/#9833), headless SOP execution fixes (#9841/#9494), and at least one of the accepted observability RFCs (#8933/#7232).

## 7. User Feedback Summary

- **Real-world deployment pain is visible on ARM**: Two Raspberry Pi 5 reports today (#9820, #9821) plus an aarch64 build failure (#9832) suggest **Raspberry Pi / self-hosted users are a growing cohort and are hitting integration gaps** (NVIDIA NIM tool-call syntax, cron tool fallback, `hardware` feature compile break).
- **Security controls that silently no-op are the biggest trust issue**: users explicitly rely on `forbidden_paths` (#9815), budget caps (#9816), and SOP validation (#9786) as guardrails; each silently failing is worse than an explicit error.
- **SOP/cron reliability concerns are recurring**: auto-mode runs rotting forever (#9805), the need for network capability in cron-triggered SOPs (#9780), and dropped failure reasons (#9783) indicate the SOP system is being used for real automation but isn't yet dependable unattended.
- **Satisfaction signal**: The rapid acceptance of RFCs (#8933, #9246, #7232) and the fast turn-around on the Gemini API-key leak (#9386, reported July 26 → closed by August 7) show a responsive maintainer core.

## 8. Backlog Watch

Items needing maintainer attention or author action:

- **[#5937 — Unify providers architecture and reqwest client management](https://github.com/zeroclaw-labs/zeroclaw/issues/5937)** (open since 2026-04-20, 12 comments) — Longest-running high-priority refactor; no associated PR yet. Risk of divergence grows as provider fixes like #9775 and #9757 land piecemeal.
- **[#8337 — Feat(observability): herdr agent reporting integration](https://github.com/zeroclaw-labs/zeroclaw/pull/8337)** (open since 2026-06-26, `needs-author-action`, size:XL) — Large PR that likely needs rebasing or splitting; author unresponsive.
- **[#8948 — Fix(tools): reap exited stdio MCP server processes](https://github.com/zeroclaw-labs/zeroclaw/pull/8948)** (open since 2026-07-10) — Zombie MCP processes (P1 #8731); partially superseded by #9418, needs re-review against the new stdio transport.
- **[#8965 / #8964 / #9563 — ATECHPCS stacked channel/media PRs](https://github.com/zeroclaw-labs/zeroclaw/pull/8965)** — Three stacked PRs (skills auto-activation, streaming-draft sanitization, Telegram media envelope) all sit in `needs-author-action`; the stack blocks P1 channel/media fixes.
- **[#8424 and #8043 — Two RFCs in `needs-author-action`](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)** — Both have community consensus (10 and 9 comments) but require the authors to respond to review; #8043 (aardvark-sys retirement) gates the `unsafe`-code workspace lint work in #7130.
- **[#7130 — `forbid(unsafe_code)` workspace-wide](https://github.com/zeroclaw-labs/zeroclaw/issues/7130)** (open since 2026-06-03, accepted) — Depends on #8043; stalled for two months.

**Overall health assessment:** ZeroClaw is actively converging on a more secure, observable, and automation-reliable core, but the volume of P1 bug reports concentrated in SOP/cron execution and security-policy enforcement suggests the next release should prioritize stabilization over new surface area. The maintainer response to security issues is fast; the main risk is the growing stack of large, author-blocked PRs (#8337, #8965 series, #9494/#9841 chain) that gate multiple critical fixes.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*