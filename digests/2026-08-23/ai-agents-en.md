# OpenClaw Ecosystem Digest 2026-08-23

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-22 23:10 UTC

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

# OpenClaw Project Digest — 2026-08-23

## Today's Overview
OpenClaw activity remains very high: 500 issues and 500 PRs were updated in the last 24 hours, with 479 issues still open/active and 424 PRs still open. 76 PRs were merged or closed in the same window, while no new release was published. The project is in a stabilization-heavy phase: the v2026.8.1-beta.2 release-validation issue is still active, and several P0/P1 reliability bugs — event-loop blocking, SQLite corruption, WhatsApp media wedging, MCP tool injection failures, and subagent delivery loss — are absorbing maintainer attention. A large share of open PRs is marked “needs proof” or “waiting on author,” suggesting triage is still ahead of merging.

## Releases
No new releases were published in this window. The only release-related signal is the still-open **v2026.8.1-beta.2 release validation** issue, which has 19 comments and remains a coordination point for testers and maintainers:

- [Issue #125626 — Release validation: v2026.8.1-beta.2](https://github.com/openclaw/openclaw/issues/125626)

## Project Progress
The visible closed/merged PRs in the last 24 hours show progress across security policy, auth handling, delivery scoping, and macOS onboarding:

- [PR #120900 — feat(ui): review install policy warnings](https://github.com/openclaw/openclaw/pull/120900) — closed; lets admins acknowledge install-policy warnings in the Control UI before continuing plugin installs.
- [PR #116489 — feat(security): require acknowledgement for install policy warnings](https://github.com/openclaw/openclaw/pull/116489) — closed; extends install policy with a `warn` result requiring operator confirmation.
- [PR #125471 — fix(models): keep Claude CLI OAuth available in Control UI](https://github.com/openclaw/openclaw/pull/125471) — closed; prevents Claude CLI OAuth from losing refresh ownership after gateway restart.
- [PR #126424 — fix(gateway): keep conversation delivery within agent bindings](https://github.com/openclaw/openclaw/pull/126424) — closed; stops multi-agent conversation tools from delivering outside configured agent bindings.
- [PR #127713 — fix: macOS onboarding waits for Gateway restart](https://github.com/openclaw/openclaw/pull/127713) — closed; prevents fresh macOS activation from being misclassified after an inference-plugin restart.

Several open PRs are close to readiness and signal near-term fixes:

- [PR #125617 — fix(message): settle WebChat media sends promptly](https://github.com/openclaw/openclaw/pull/125617) — ready for maintainer look.
- [PR #127530 — fix: explicit session resets clear prior context](https://github.com/openclaw/openclaw/pull/127530) — proof sufficient, ready for maintainer look.
- [PR #123231 — fix(matrix): guard malformed poll answers instead of throwing TypeError](https://github.com/openclaw/openclaw/pull/123231) — proof sufficient, ready for maintainer look.
- [PR #126986 — fix(codex): preserve agent workspace instructions](https://github.com/openclaw/openclaw/pull/126986) — proof sufficient, ready for maintainer look.
- [PR #123535 — fix(ui): avoid session catalog refresh storms](https://github.com/openclaw/openclaw/pull/123535) — ready for maintainer look.

## Community Hot Topics
The most active issues revolve around beta validation, configurable reliability behavior, and subagent/multimodal failure modes:

- [Issue #125626 — Release validation v2026.8.1-beta.2](https://github.com/openclaw/openclaw/issues/125626) — 19 comments. Release-blocking coordination, with testers expected to run upgrade validation.
- [Issue #68596 — Configurable streaming watchdog timeout threshold](https://github.com/openclaw/openclaw/issues/68596) — 15 comments, 8 👍. Users running long-reasoning models (DeepSeek-R1, kimi-k2.5) hit false watchdog resets because 30s is too tight.
- [Issue #96834 — WhatsApp 1:1: inbound image wedges main lane ~3min](https://github.com/openclaw/openclaw/issues/96834) — 14 comments. Native multimodal image handling can strand `active_reply_work` and delay processing.
- [Issue #51429 — Hardcoded working path `/Users/wangtao` merged into code](https://github.com/openclaw/openclaw/issues/51429) — 12 comments. Users report OpenClaw creating `/Users/wangtao`; the issue is a serious trust/quality concern.
- [Issue #85030 — MCP tools not injected into subagent sessions](https://github.com/openclaw/openclaw/issues/85030) — 12 comments, 6 👍. Documented MCP exposure mechanisms are ignored for spawned sessions.
- [Issue #67777 — Subagent completion delivery can be lost on timeout/drain/orphan prune](https://github.com/openclaw/openclaw/issues/67777) — 11 comments. Core subagent reliability defect.
- [Issue #72015 — active-memory blocks replies; QMD boot initialization overloads gateways](https://github.com/openclaw/openclaw/issues/72015) — 10 comments, 2 👍. Multi-agent gateway reliability concern with the official `active-memory` plugin.

## Bugs & Stability
The highest-severity active bugs are dominated by P0/P1 reliability and data-integrity issues. Several have linked PRs in progress, but most are still waiting on maintainer review or product decisions.

### P0
- [Issue #124788 — beta.2 gateway: event loop blocks ~100s every ~10 min](https://github.com/openclaw/openclaw/issues/124788) — P0; anchored timer, string building, and fs scan; persists with memory plugins disabled.
- [Issue #126821 — SQLite corruption recurs on pristine rebuilt DBs within 15–24h](https://github.com/openclaw/openclaw/issues/126821) — P0; includes a “paralyzed gateway” mode that refuses service but never exits.

### P1
- [Issue #96834 — WhatsApp image wedges main lane ~3min before processing](https://github.com/openclaw/openclaw/issues/96834) — multimodal run strands `active_reply_work`.
- [Issue #85030 — MCP tools not injected into `sessions_spawn`](https://github.com/openclaw/openclaw/issues/85030) — P1; subagents only receive built-in tools.
- [Issue #67777 — Subagent completion delivery can be lost](https://github.com/openclaw/openclaw/issues/67777) — P1; delivery fails under busy-lane, drain, and orphan-prune conditions.
- [Issue #72015 — active-memory blocks replies / QMD boot overload](https://github.com/openclaw/openclaw/issues/72015) — P1; can cause crash-loop-like unreliability.
- [Issue #89278 — Codex OAuth refresh succeeds but cron/heartbeat fail with 10s timeout](https://github.com/openclaw/openclaw/issues/89278) — P1; linked PR is open.
- [Issue #45224 — Unhandled Playwright assertion error crashes Gateway](https://github.com/openclaw/openclaw/issues/45224) — P1; full process exit requiring launchd restart.
- [Issue #97616 — OpenClaw leaks unreaped hook/tool child processes](https://github.com/openclaw/openclaw/issues/97616) — P1; zombie accumulation degrades runtime.
- [Issue #112196 — `memory_search` transient sync timeout masks provider failure](https://github.com/openclaw/openclaw/issues/112196) — P1; “database is not open” after restart; linked PR open.
- [Issue #108215 — Context usage drops from 57% to 13% without compaction](https://github.com/openclaw/openclaw/issues/108215) — P1; large tool output causes context-count inconsistency.
- [Issue #49381 — Feishu duplicate final replies after model failover](https://github.com/openclaw/openclaw/issues/49381) — P1; rate-limited primary triggers duplicate assistant replies.
- [Issue #89257 — `openclaw backup create --verify` exits 13, leaves corrupt `.tmp` archive](https://github.com/openclaw/openclaw/issues/89257) — P1; verifier also rejects older backup hardlinks.
- [Issue #124284 — Subagent spawn fails with vLLM openai-completions + thinking](https://github.com/openclaw/openclaw/issues/124284) — P1; malformed XML tool calls introduced in beta.2.
- [Issue #44502 — Discord routing / mention-gating issue](https://github.com/openclaw/openclaw/issues/44502) — P1; preflight logic too permissive.
- [Issue #78055 — Subagent announce can deliver stale output / inherit unrelated history](https://github.com/openclaw/openclaw/issues/78055) — P1; stale completions become user-visible replies.
- [Issue #99910 — Memory dreaming run pegs gateway event loop ~10min](https://github.com/openclaw/openclaw/issues/99910) — P1; short-term recall store never persists.
- [Issue #113701 — Context overflow: compaction can’t recover; sessions enter failure loop](https://github.com/openclaw/openclaw/issues/113701) — P1; large tool outputs exceed context window.
- [Issue #125570 — Skill Workshop update overwrites live skill description](https://github.com/openclaw/openclaw/issues/125570) — P1; breaks skill routing silently.
- [Issue #78805 — Severe event-loop blocking due to synchronous I/O](https://github.com/openclaw/openclaw/issues/78805) — P1; linked PR is open.
- [Issue #81182 — Overflow recovery waits full auto-compaction timeout before truncating tool results](https://github.com/openclaw/openclaw/issues/81182) — P1; linked PR is open.

### Notable regressions
Several P1 issues are explicitly regressions, including Codex OAuth timeout behavior ([#89278](https://github.com/openclaw/openclaw/issues/89278)), child-process zombies ([#97616](https://github.com/openclaw/openclaw/issues/97616)), Feishu duplicate replies ([#49381](https://github.com/openclaw/openclaw/issues/49381)), Discord gating ([#44502](https://github.com/openclaw/openclaw/issues/44502)), and SQLite corruption on WSL2 ([#126821](https://github.com/openclaw/openclaw/issues/126821)).

## Feature Requests & Roadmap Signals
Strong user demand continues around configuration flexibility, session control, and observability. The most likely near-term roadmap items are visible in open PRs targeting the Control UI and session model.

### Active feature requests
- [Issue #68596 — Configurable streaming watchdog timeout threshold](https://github.com/openclaw/openclaw/issues/68596) — 8 👍; top community request for long-reasoning model support.
- [Issue #75947 — UI quality update based on UX scoring](https://github.com/openclaw/openclaw/issues/75947) — users want less dense, more accessible config pages.
- [Issue #13700 — Session snapshots: save/load context checkpoints](https://github.com/openclaw/openclaw/issues/13700) — branch/rollback conversation support.
- [Issue #57425 — Graceful Gateway Restart with Session Recovery](https://github.com/openclaw/openclaw/issues/57425) — in-flight work is silently killed on restart.
- [Issue #45771 — Built-in pace-aware rate limiting for autonomous agents](https://github.com/openclaw/openclaw/issues/45771) — rate-limit burn-through during autonomous loops.
- [Issue #51572 — Fire session-memory hook on reset/prune, not just compaction](https://github.com/openclaw/openclaw/issues/51572) — memory continuity gap.
- [Issue #33102 — TUI config support for `--deliver` flag default](https://github.com/openclaw/openclaw/issues/33102) — default `--deliver=false` confuses users.
- [Issue #45503 — Manual context clearing for tool results](https://github.com/openclaw/openclaw/issues/45503) — large tool results should be prunable on demand.

### Roadmap signals from open PRs
Newer PRs strongly suggest the next minor release will focus on Control UI session management and plugin/session state:

- [PR #128053 — feat: add session trajectory view](https://github.com/openclaw/openclaw/pull/128053) — inspect actual execution path of live/completed sessions.
- [PR #128050 — feat(ui): send composer prompts to background sessions](https://github.com/openclaw/openclaw/pull/128050) — start independent work without leaving current chat.
- [PR #128046 — feat: add per-session developer tool modes](https://github.com/openclaw/openclaw/pull/128046) — per-session control of tool surface and Code Mode.
- [PR #127982 — feat(plugins): expose durable plugin session state](https://github.com/openclaw/openclaw/pull/127982) — plugin state readback across turns/restarts.
- [PR #126501 — feat: let `/v1/responses` callers set a delivery target for subagent completions](https://github.com/openclaw/openclaw/pull/126501) — enables subagent result delivery for API-driven integrators.

Prediction: next release will likely include the UI/session-trajectory work, per-session developer tool modes, and durable plugin session state. The streaming watchdog configurability request has enough traction to be a candidate as well.

## User Feedback Summary
User sentiment is mixed: the project is shipping ambitious features, but beta reliability issues are causing operational pain.

- **Production users are asking for safe upgrade/backport guidance** after the Codex compact 404 fix landed on main; they need an upgrade path from 2026.5.12 ([#123799](https://github.com/openclaw/openclaw/issues/123799)).
- **The hardcoded `/Users/wangtao` path** ([#51429](https://github.com/openclaw/openclaw/issues/51429)) is a notable trust incident: the issue is in Chinese and English, and users are surprised that an obvious local path was merged and published.
- **Context/compaction confusion is a recurring theme**: silent context drops ([#108215](https://github.com/openclaw/openclaw/issues/108215)), compaction reserve tokens ignoring model context windows ([#124911](https://github.com/openclaw/openclaw/issues/124911)), and silent failures on large carried-over context ([#58957](https://github.com/openclaw/openclaw/issues/58957)).
- **Provider-specific friction is common**: Ollama Cloud requests sign-in despite configured API key ([#124689](https://github.com/openclaw/openclaw/issues/124689)), MiniMax-M3 shows unknown context usage ([#111630](https://github.com/openclaw/openclaw/issues/111630)), vLLM thinking models break subagent spawns ([#124284](https://github.com/openclaw/openclaw/issues/124284)), and Doubao/BytePlus cache pricing is set to 0 ([#54157](https://github.com/openclaw/openclaw/issues/54157)).
- **Subagent and MCP users report silent failures**: MCP tools missing in spawned sessions ([#85030](https://github.com/openclaw/openclaw/issues/85030)), ACP sessions with zero-byte transcripts ([#95759](https://github.com/openclaw/openclaw/issues/95759)), and stale subagent completions delivered as replies ([#78055](https://github.com/openclaw/openclaw/issues/78055)).
- **UI complaints persist**: model picker changes only affect new sessions ([#124689](https://github.com/openclaw/openclaw/issues/124689)), TUI long messages vanish from scrollback ([#78017](https://github.com/openclaw/openclaw/issues/78017)), and provider display shows unnormalized config values ([#47840](https://github.com/openclaw/openclaw/issues/47840)).

## Backlog Watch
Several important issues have been open for a long time and still need maintainer review, product decisions, or live reproduction. These are worth prioritizing:

- [Issue #50291 — Plugin Hooks: missing trace context for observability](https://github.com/openclaw/openclaw/issues/50291) — opened Mar 19; P2; needs product decision.
- [Issue #45224 — Unhandled Playwright assertion error crashes Gateway](https://github.com/openclaw/openclaw/issues/45224) — opened Mar 13; P1; fix shape is clear, queueable.
- [Issue #44502 — Discord routing / mention-gating issue](https://github.com/openclaw/openclaw/issues/44502) — opened Mar 13; P1; needs live repro.
- [Issue #49381 — Feishu duplicate final replies after model failover](https://github.com/openclaw/openclaw/issues/49381) — opened Mar 18; P1; source repro available.
- [Issue #48810 — Compaction retry creates orphan fork in parentId chain](https://github.com/openclaw/openclaw/issues/48810) — opened Mar 17; P2; source repro available.
- [Issue #51429 — Hardcoded work path merged into code](https://github.com/openclaw/openclaw/issues/51429) — opened Mar 21; P2; needs maintainer review and product decision.
- [Issue #67777 — Subagent completion delivery can be lost](https://github.com/openclaw/openclaw/issues/67777) — opened Apr 16; P1; no new fix PR.
- [Issue #72015 — active-memory blocks replies / QMD boot overload](https://github.com/openclaw/openclaw/issues/72015) — opened Apr 26; P1; needs product decision.
- [Issue #68187 — SSE-backed MCP sessions stale after server restart](https://github.com/openclaw/openclaw/issues/68187) — opened Apr 17; P2; needs live repro.
- [Issue #89257 — backup create --verify exits 13 and leaves corrupt archive](https://github.com/openclaw/openclaw/issues/89257) — opened Jun 1; P1; needs maintainer review.
- [Issue #82662 — Isolated cron `agentTurn` fails with setup timeout before runner start](https://github.com/openclaw/openclaw/issues/82662) — opened May 16; P2; needs live repro.
- [Issue #90595 — Cron “failed” notifications fire during hot reload and retries](https://github.com/openclaw/openclaw/issues/90595) — opened Jun 5; P2; alert fatigue concern.
- [Issue #112196 — `memory_search` transient sync timeout masks provider failure](https://github.com/openclaw/openclaw/issues/112196) — opened Jul 21; P1; linked PR open but still needs maintainer review.
- [Issue #125626 — Release validation v2026.8.1-beta.2](https://github.com/openclaw/openclaw/issues/125626) — open; maintainer-owned; needs tester sign-off before release.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-08-23 | **Coverage:** 12 projects, last 24h activity

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source landscape in August 2026 is organized around OpenClaw as the core reference implementation, surrounded by a dense family of Claw-derived projects (ZeroClaw, NanoClaw, PicoClaw, NullClaw, ZeptoClaw) plus independent agents (Hermes, NanoBot, IronClaw, CoPaw, Moltis). Notably, **no project published a release in the 24-hour window** — the ecosystem is in a stabilization and hardening phase, with effort concentrated on reliability bugs, security boundaries, and pre-release validation rather than new features. The dominant technical struggles are strikingly consistent across projects: MCP integration reliability, subagent/session state delivery, context-compaction economics, and update/install safety. Community engagement remains very high, but maintainer review bandwidth is emerging as the critical throughput constraint, with at least four projects (ZeroClaw, CoPaw, Moltis, NanoClaw) showing visible review queues or stale PRs.

---

## 2. Activity Comparison

| Project | Issues updated / open | PRs updated / open / merged-closed | Release status | Health score |
|---|---|---|---|---|
| **OpenClaw** | 500 / 479 | 500 / 424 / **76** | None; beta.2 validation active | 8.0 / 10 — very high velocity, but P0/P1 stability debt and no release |
| **ZeroClaw** | 50 / 43 | 50 / 48 / 2 | None | 7.5 / 10 — intense security/RFC work; maintainer bottleneck, XL PRs idle |
| **Hermes Agent** | 50 / 45 | 50 / 46 / 4 | None | 6.5 / 10 — active, but systemic update/install debt (~30 related issues) |
| **NanoBot** | 0 / — | 21 / 14 / 7 | None | 7.0 / 10 — clean, feature-paced; some PRs carry conflict labels for weeks |
| **IronClaw** | 11 / 7 | 22 / 17 / 5 | None | 7.0 / 10 — high-velocity, focused scope; small team |
| **NanoClaw** | 1 / 1 | 25 / 17 / 8 | None | 6.5 / 10 — strong merge rate; Telegram PR cluster + Node 25 test failure open |
| **CoPaw** | 7 / 6 | 6 / 6 / **0** | None | 5.0 / 10 — zero merges; first-time-contributor PRs aging in review |
| **PicoClaw** | 2 / 2 | 6 / 2 / 4 | None | 5.5 / 10 — some merges, but critical MCP hang fix is stale |
| **Moltis** | 1 / 1 | 3 / 3 / 0 | None | 4.5 / 10 — all work pending review; no landed changes |
| **NullClaw** | 0 | 0 | None | 2.0 / 10 — dormant |
| **ZeptoClaw** | 0 | 0 | None | 2.0 / 10 — dormant |
| **LobsterAI** | N/A | N/A | N/A | N/A — digest generation failed, status opaque |

*Health score reflects activity level, merge throughput, severity of open bugs, and review responsiveness.*

---

## 3. OpenClaw's Position

**Advantages vs. peers**

- **Community size:** OpenClaw processes ~1,000 issue/PR updates per day — 10–20× the next tier (ZeroClaw/Hermes at 100). Open issues (479) alone exceed the *total* open items of all other active projects combined.
- **Merge throughput:** 76 PRs merged/closed in 24h, versus 2–8 for the nearest peers. This is the ecosystem's primary integration hub.
- **Breadth:** The most complete feature surface — multi-channel delivery (WhatsApp, Feishu, Discord, Telegram, Matrix), gateway architecture, Control UI, plugin ecosystem, subagent orchestration, MCP integration, and a wide model-provider matrix.
- **Ecosystem gravity:** As the core reference, its architecture decisions (session model, plugin hooks, gateway bindings) propagate to Claw-family forks, amplifying its influence beyond its own codebase.

**Technical approach differences**

- Gateway-centric runtime with a plugin system and a Control UI, versus Hermes' desktop-first profile model, ZeroClaw's security/RFC-driven compiled runtime, NanoBot's WebUI/TUI observability stack, and NanoClaw's Node.js + better-sqlite3 adapter-focused design.
- OpenClaw is the only project currently in formal release validation (v2026.8.1-beta.2), which makes it the compatibility baseline the ecosystem converges on — but also exposes it to beta-grade P0/P1 defects (event-loop blocking, SQLite corruption) that narrower, newer projects can avoid.

**Main weakness:** Its sheer surface area produces a long tail of reliability issues that peers don't carry. OpenClaw is the most capable and the most burdened; the forks effectively serve as "canaries" for simpler use cases.

---

## 4. Shared Technical Focus Areas

Requirements emerging independently across multiple projects:

| Focus area | Projects affected | Specific needs |
|---|---|---|
| **MCP reliability** | OpenClaw, PicoClaw, NanoBot, Moltis, ZeroClaw | Tools not injected into subagents (#85030); MCP failure hangs agent loop (#3269); business errors treated as success (#5484); stale client after server restart (#1231); custom CA trust for remote MCP (#9339). Need: health-checking, fail-closed semantics, lifecycle management. |
| **Subagent/session state delivery** | OpenClaw, Hermes, NanoBot, ZeroClaw, IronClaw | Lost completion delivery under timeout/drain (#67777); session death after compression hangs (#78981); deleted sessions recreated by delayed messages (#5483); RFC on runtime-owned sessions (#9487). Need: defensive delivery semantics, orphan detection, session ownership clarity. |
| **Context/compaction economics** | OpenClaw, Hermes, IronClaw, NanoBot, CoPaw | 4× cost regression measured on PinchBench (55.1M→227.7M tokens / $2.52→$10.31, IronClaw #7824); silent context drops (#108215); overflow failure loops (#113701); token display trust (#5490). Need: model-aware compaction, manual pruning, per-turn accounting. |
| **Channel/message delivery integrity** | OpenClaw, PicoClaw, NanoClaw, ZeroClaw | WhatsApp media wedging (#96834); 228k Telegram edit-loop triggering rate limits (#3343); channel-post blackholing (#3449); Telegram duplicate replies (#9718). Need: bounded feedback loops, idempotent delivery. |
| **Update/install reliability** | Hermes, NanoClaw, PicoClaw, ZeroClaw | Fleet update tracker consolidating ~30 issues/15 PRs (#91277); Git-less upgrade fallback (#3444); cron schedule loss after update (#1083); config init producing unloadable configs (#9436). Need: non-interactive, idempotent, recoverable updates. |
| **Security hardening** | ZeroClaw, OpenClaw, Moltis, Hermes | WASM wall-clock deadlines (#9403); scoped tool secrets (#9128); install-policy warnings (#120900); fail-closed security hooks (#1230); credential rotation incident (#92457). Need: in-process sandboxing, fail-closed policy hooks. |
| **Observability & telemetry trust** | NanoBot, OpenClaw, ZeroClaw, Hermes | Unified turn observability (#5486); measured request context (#5469); hook trace context (#50291); error-chain preservation (#9001, #10232); diagnostics reporting healthy while silently discarding actions (#92553). Need: truthful telemetry, trace-level session replay. |

---

## 5. Differentiation Analysis

| Project | Primary focus | Target users | Technical architecture |
|---|---|---|---|
| **OpenClaw** | Core reference; multi-channel gateway; plugin ecosystem | Broad — developers, enterprises, power users | Gateway-centric runtime, Control UI, session model, large provider matrix |
| **Hermes Agent** | Desktop app; fleet update reliability; Codex integration | Desktop-first users, enterprises | Desktop + gateway, profile-based config, skills index |
| **ZeroClaw** | Security-first; RFC-driven roadmap; WASM plugins; realtime voice | Security-conscious operators, advanced users | Compiled runtime with compile-time feature flags → runtime plugins; channel adapters |
| **NanoBot** | WebUI/TUI observability; provider usage accounting | Developers tracking token costs; DeepSeek users | WebUI + TUI; native OpenAI/Anthropic provider stack; trajectory backend |
| **IronClaw** | OOBE/onboarding; CI convergence; context projection | New users; teams with long-horizon agent workloads | SPA frontend + Process Journal event-sourced backend |
| **NanoClaw** | Chat adapter setup hardening (Telegram/Slack); Cursor provider | Node.js/TypeScript developers | Node.js + better-sqlite3; polling & webhook adapters; upgrade-state detection |
| **CoPaw** | Chinese Windows UX; Qwen models; media pipeline | Chinese-speaking Windows users | Desktop GUI + shell integration; per-provider media limits |
| **PicoClaw** | Skills CLI; cron reliability; Delta Chat | Lightweight/embedded deployments | Compact chat interface + skills install system; cron scheduler |
| **Moltis** | OpenAI/Codex schema compatibility; security hooks | Codex/OpenAI API integrators | Tool-schema translation, MCP bridge, Browserless container support |
| **NullClaw / ZeptoClaw** | — | — | Dormant |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapidly iterating, stabilization-critical**

- **OpenClaw:** ~1,000 daily updates, 76 merges, release validation in progress. The most mature but carries P0/P1 reliability debt (event-loop blocking, SQLite corruption, subagent delivery loss).
- **ZeroClaw:** Intense security/RFC phase — two XL-scale security merges landed (WASM deadlines, scoped secrets). The community has self-organized a maintainer-decision-queue tracker, signaling review bandwidth is the gating factor.
- **Hermes Agent:** 100 daily updates with valuable feature merges (`/codex-usage` forecast, Tavily keyless), but update/install reliability is an acknowledged systemic weakness.

**Tier 2 — Healthy, feature-paced**

- **NanoBot:** 7 merges; observability/WebUI push; some long-running PRs carrying conflict labels (weeks unresolved).
- **IronClaw:** 5 merges; small but effective — onboarding, CI convergence, notification lifecycle.
- **NanoClaw:** 8 merges; rapid adapter fixes; Telegram multi-bot PR cluster needs coordinated review.

**Tier 3 — Stable but review-limited**

- **CoPaw:** Zero merges this window; first-time-contributor PRs aging (16 days) with no maintainer comments.
- **PicoClaw:** 4 merges, but the critical MCP-hang fix (#3337) is marked stale.
- **Moltis:** All three open PRs pending review; no landed changes in window.

**Tier 4 — Inactive**

- **NullClaw, ZeptoClaw:** zero activity. **LobsterAI:** status unknown (digest failure).

---

## 7. Trend Signals

Extracted from cross-project community feedback — with value for AI agent developers:

1. **MCP is the default integration fabric, but reliability is the tax.** Every MCP-using project reports distinct failure modes (stale clients, business-error confusion, missing tool injection, trust boundaries). *For developers:* build MCP health-checking and fail-closed error policies into agent architectures now.
2. **Subagent/session state is the most fragile capability.** Lost deliveries occur under combinations of timeout, drain, busy lanes, and orphan pruning across OpenClaw, NanoBot, Hermes, and ZeroClaw. *For developers:* design delivery semantics defensively — acked, idempotent, replayable.
3. **Context economics are becoming a measurable cost center.** IronClaw's 4× token-cost regression on a benchmark is the starkest data point; users everywhere demand compaction that respects model context windows, manual pruning, and honest per-turn accounting. *For developers:* instrument context usage; treat compaction as a first-class reliability feature.
4. **Long-reasoning LLMs break fixed watchdogs.** OpenClaw's 30s streaming watchdog and Hermes' 120s TTFB cap both produce false failures with DeepSeek-R1 / kimi-k2.5. Configurable, model-aware timeouts are now a baseline requirement. *For developers:* expose timeout thresholds; don't hardcode.
5. **Update/install is the top operational pain point.** Hermes consolidated ~30 issues + 15 PRs into one fleet-update tracker. *For developers:* non-interactive, idempotent, recoverable update paths are a competitive differentiator.
6. **Security is moving inside the runtime.** Wall-clock deadlines for plugin code, scoped secrets, fail-closed hooks, and install-policy warnings shift the boundary from network security to in-process sandboxing. *For developers:* assume plugins/agents are adversarial; bound all execution.
7. **Windows and international users are underserved.** ZeroClaw's 74 Windows test failures (Linux-only CI) and CoPaw's Chinese Windows UTF-8 issues are visible gaps. *For developers:* cross-platform CI and Unicode-aware tooling are unmet needs with loyal users behind them.
8. **Observability trust is the next UX battleground.** Truthful token accounting, execution-path replay, and error-chain preservation are landing in NanoBot, OpenClaw, and ZeroClaw PRs. *For developers:* trace-level session replay will become standard — invest early.
9. **Realtime voice is an emerging category.** ZeroClaw's Gemini Live speech-to-speech RFC and backend-agnostic voicehost channel are the leading signals. *For developers:* watch this space for cross-project ripple in 2–3 release cycles.
10. **Power-user UX is shifting from chat to session management.** Session trajectory views, per-session tool modes, background-session composers, and durable plugin state appear in near-term roadmap PRs across OpenClaw, NanoBot, and IronClaw. *For developers:* treat the session, not the message, as the core interaction unit.

---

**Bottom line for decision-makers:** The ecosystem is converging on OpenClaw's architecture as the reference while independently solving the same hard problems — MCP resilience, subagent delivery, context economics, and safe updates. No project is release-ready this week; teams should treat the Claw-family forks (ZeroClaw, NanoClaw, PicoClaw) as viable lighter-weight alternatives and watch OpenClaw's beta.2 validation as the ecosystem's next compatibility milestone.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

## NanoBot Project Digest — 2026-08-23

### 1. Today's Overview

NanoBot shows healthy but review-heavy activity: **0 issue updates** in the last 24 hours, but **21 PRs updated** — **14 open** and **7 merged/closed**. No new releases were published. The main development focus is on WebUI/agent observability, provider usage accounting, session integrity, and MCP/Telegram reliability. Multiple PRs are stacked or carrying conflict labels, indicating an active integration phase with several long-running feature branches.

---

### 2. Releases

**No new releases** were published in this window.

---

### 3. Project Progress

The overview reports **7 merged/closed PRs**; six are visible in the detailed data:

- **#5488** — docs: refresh team and contributor credits  
  [HKUDS/nanobot PR #5488](https://github.com/HKUDS/nanobot/pull/5488)  
  Updated maintainer and contributor presentation.

- **#5486** — feat(webui): unify turn observability  
  [HKUDS/nanobot PR #5486](https://github.com/HKUDS/nanobot/pull/5486)  
  One answer surface per turn, with ordered reasoning/tool segments and per-turn token reporting.

- **#5156** — fix(telegram): recover from silently stalled polling  
  [HKUDS/nanobot PR #5156](https://github.com/HKUDS/nanobot/pull/5156)  
  Fixes a production issue where Telegram polling could permanently stall after transient network problems.

- **#4430** — feat(web): configure web_fetch provider  
  [HKUDS/nanobot PR #4430](https://github.com/HKUDS/nanobot/pull/4430)  
  Adds configurable `web_fetch` providers: `auto`, `tavily`, `jina`, `readability`.

- **#3869** — fix(providers): DeepSeek message hardening  
  [HKUDS/nanobot PR #3869](https://github.com/HKUDS/nanobot/pull/3869)  
  Preserves content, sanitizes null/empty fields, prevents `"(empty)"` placeholder leakage.

- **#3294** — feat(dream): optional kill switch + custom Phase 1/2 template paths  
  [HKUDS/nanobot PR #3294](https://github.com/HKUDS/nanobot/pull/3294)  
  Adds opt-in DreamConfig controls for disabling the self-learning cron and customizing templates.

---

### 4. Community Hot Topics

Comment/reaction counts were **not available** in this export, so activity is inferred from update recency, label density, and PR scope.

- **#5491** — fix(webui): keep answer text outside reasoning shell  
  [HKUDS/nanobot PR #5491](https://github.com/HKUDS/nanobot/pull/5491)  
  Highly targeted WebUI fix for preserving answer slices and tool-activity separation.

- **#5490** — fix(webui): clarify aggregate turn token usage  
  [HKUDS/nanobot PR #5490](https://github.com/HKUDS/nanobot/pull/5490)  
  Users clearly care about trustworthy token accounting; this adds model call count and request context tooltips.

- **#5487** — feat(webui): file preview path fixes + subagent activity & lifecycle replay  
  [HKUDS/nanobot PR #5487](https://github.com/HKUDS/nanobot/pull/5487)  
  Broad WebUI improvement covering file previews, markdown rendering, and subagent lifecycle replay.

- **#5469** — fix(tui): show measured request context  
  [HKUDS/nanobot PR #5469](https://github.com/HKUDS/nanobot/pull/5469)  
  TUI telemetry improvement aligning provider-reported context with UI display.

- **#5408 / #5367** — follow-up suggestions / localized agent activity  
  [HKUDS/nanobot PR #5408](https://github.com/HKUDS/nanobot/pull/5408)  
  [HKUDS/nanobot PR #5367](https://github.com/HKUDS/nanobot/pull/5367)  
  Two long-running WebUI features still active: chat follow-up suggestions and localization of agent activity across 10 locales.

---

### 5. Bugs & Stability

Ranked by impact:

- **Telegram silently stalled polling — production-visible outage**  
  [#5156](https://github.com/HKUDS/nanobot/pull/5156) (closed, fix available)

- **MCP business errors with `isError=false` treated as success**  
  [#5484](https://github.com/HKUDS/nanobot/pull/5484) — open fix  
  Agents continue reasoning on error payloads such as `{"code": 404, "msg": "data not exist"}`.

- **Deleted sessions recreated by delayed cross-session messages**  
  [#5483](https://github.com/HKUDS/nanobot/pull/5483) — open fix  
  This is a session-data integrity issue; fix prevents recreation via timeout/delivery messages.

- **Ephemeral SDK runs persist session state despite contract**  
  [#5471](https://github.com/HKUDS/nanobot/pull/5471) — open fix  
  `/run` and `/run_streamed` documented behavior was not honored.

- **LangSmith tracing lost after native-provider migration**  
  [#5485](https://github.com/HKUDS/nanobot/pull/5485) — open fix  
  Observability regression fixed by wrapping OpenAI/Anthropic clients again.

- **WebUI answer/reasoning shell and token display issues**  
  [#5491](https://github.com/HKUDS/nanobot/pull/5491), [#5490](https://github.com/HKUDS/nanobot/pull/5490), [#5469](https://github.com/HKUDS/nanobot/pull/5469) — open fixes  
  User-facing telemetry and message-structure bugs.

Also relevant: **#5489** — IMAP polling fetched full email bodies before filtering, causing repeated re-fetch of rejected messages. Fix is performance-focused rather than correctness-focused.

---

### 6. Feature Requests & Roadmap Signals

Strong roadmap signals from open feature work:

- **Unified provider usage contract + trajectory backend**  
  [#5480](https://github.com/HKUDS/nanobot/pull/5480) and [#5481](https://github.com/HKUDS/nanobot/pull/5481)  
  Part of a native stack (#5482). This is likely headed into the next release: typed LLM usage, cache semantics, and per-attempt trajectory records.

- **WebUI follow-up suggestions**  
  [#5408](https://github.com/HKUDS/nanobot/pull/5408)  
  Ephemeral, chat-scoped suggestions after successful turns.

- **Localized agent activity**  
  [#5367](https://github.com/HKUDS/nanobot/pull/5367)  
  All 10 locales; likely high-value for international WebUI users.

- **User-controlled turn recovery**  
  [#5420](https://github.com/HKUDS/nanobot/pull/5420)  
  Sidecar checkpoints and explicit “Continue / Dismiss” recovery in WebUI/TUI.

- **Configurable web_fetch provider**  
  [#4430](https://github.com/HKUDS/nanobot/pull/4430) — closed but signals demand for TAVILY/Jina/readability modes.

Expect the next version to emphasize **observability**, **provider usage correctness**, and **WebUI turn/activity UX**.

---

### 7. User Feedback Summary

Direct issue comments were not available, but PR motivation sections reveal recurring pain points:

- **DeepSeek API strictness** caused 400 errors on null content and placeholder leakage; users needed sanitization. (#3869)
- **Telegram silent failures** caused permanent loss of message reception in production with no logs. (#5156)
- **MCP servers returning business errors as successful tool calls** confused agents — users need `isError` to be respected or inferred. (#5484)
- **Session deletion is not safe enough** when delayed messages arrive; users want deleted sessions to stay deleted. (#5483)
- **SDK ephemeral runs are expected to leave no trace**, and this contract was broken. (#5471)
- **WebUI token/context displays are misleading** — users want per-turn totals plus measured request context. (#5490, #5469)

Overall sentiment appears pragmatic: maintainers are responding quickly with regression tests, but some fixes have been sitting with conflict labels for weeks.

---

### 8. Backlog Watch

No issues were updated in the last 24 hours, so the backlog is PR-heavy. The following open PRs have been active for several days and carry **[conflict]** labels — they need rebase or maintainer help:

- **#5487** — WebUI file previews + subagent lifecycle replay  
  [HKUDS/nanobot PR #5487](https://github.com/HKUDS/nanobot/pull/5487)

- **#5469** — fix(tui): show measured request context  
  [HKUDS/nanobot PR #5469](https://github.com/HKUDS/nanobot/pull/5469)

- **#5408** — feat(webui): add follow-up suggestions  
  [HKUDS/nanobot PR #5408](https://github.com/HKUDS/nanobot/pull/5408)

- **#5367** — feat(webui): localize agent activity  
  [HKUDS/nanobot PR #5367](https://github.com/HKUDS/nanobot/pull/5367)

Also worth watching: the **#5480 → #5481 → #5482** provider usage stack, and **#5420** (turn recovery) for next-version candidate features.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-23

## 1. Today’s Overview

Hermes Agent remains very active: 50 issues and 50 PRs were updated in the last 24h, with 45 issues open/active and 46 PRs open. No new release was published. The update window was dominated by reliability bugs — especially around update/install, session persistence, desktop profile switching, and security boundaries — but also shows continued feature work from the community. The long-running [skills-index watchdog issue #66616](https://github.com/NousResearch/hermes-agent/issues/66616) remains the single hottest thread with 77 comments. Overall project health is active, but the volume of P1/P2 regressions suggests accumulated reliability debt in fleet update and session-state handling.

## 2. Releases

**None.** No new versions were published in this window, so there are no release notes, breaking changes, or migration steps to report.

## 3. Project Progress

The aggregate data reports 4 merged/closed PRs in the last 24h. In the visible top-comment PR set, two PRs are marked **CLOSED**:

- [#91616 — feat: add Codex usage forecast command](https://github.com/NousResearch/hermes-agent/pull/91616) — adds `/codex-usage` on CLI and gateway surfaces, shows remaining Codex quota, reset countdowns, and linear exhaustion projections. Reports `90 passed` tests.
- [#88591 — feat(tavily): update Tavily integration to support keyless access](https://github.com/NousResearch/hermes-agent/pull/88591) — adds keyed and keyless Tavily auth with Hermes attribution on every request.

Several important closed issues are also visible:

- [#38873 — Hermes Desktop remote gateway mode flaps back to local backend](https://github.com/NousResearch/hermes-agent/issues/38873) — closed with `sweeper:implemented-on-main`, indicating a fix landed on `main`.
- [#65562 — TUI injects NODE_ENV=production → web UI build fails](https://github.com/NousResearch/hermes-agent/issues/65562) — closed after regression handling.
- [#92551 — computer_use approval returns approved when no CLI callback is registered](https://github.com/NousResearch/hermes-agent/issues/92551) — closed as duplicate.
- [#92504 — Docker sandbox fails for task IDs containing colons](https://github.com/NousResearch/hermes-agent/issues/92504) — closed as duplicate.

Notable open PRs updated today show work in progress:

- [#92548 — support Python 3.14 runtime provisioning](https://github.com/NousResearch/hermes-agent/pull/92548)
- [#92479 — desktop selection-to-chat for transcript quotes and image crops](https://github.com/NousResearch/hermes-agent/pull/92479)
- [#92024 — Standard Webhooks sender authentication for webhook gateway](https://github.com/NousResearch/hermes-agent/pull/92024)
- [#92000 — one-sentence live dashboards via cron tick](https://github.com/NousResearch/hermes-agent/pull/92000)
- [#92005 — inbox-triage drafts calibrated to user’s real voice](https://github.com/NousResearch/hermes-agent/pull/92005)

## 4. Community Hot Topics

The most active issue threads by comment count:

- [#66616 — Skills index is stale or degraded](https://github.com/NousResearch/hermes-agent/issues/66616) — **77 comments**. An automated probe reports the skills index is 29.8h old against a 26h limit. The ongoing high comment volume signals that docs/skills freshness is a persistent trust problem for the project.
- [#91277 — Fleet update reliability: one deployment plan](https://github.com/NousResearch/hermes-agent/issues/91277) — **13 comments**, P1 tracking issue. Users report ~30 open issues and ~15 open PRs all patching different corners of update/install reliability. The underlying need is a unified deployment model instead of per-platform spaghetti.
- [#38873 — Desktop remote gateway mode flaps back to local backend](https://github.com/NousResearch/hermes-agent/issues/38873) — **11 comments**, 👍3. Closed, but the reaction count shows desktop remote-mode stability matters to users.
- [#78981 — DeepSeek 500k-token session permanently dies after compression hangs](https://github.com/NousResearch/hermes-agent/issues/78981) — **8 comments**, P1. Long-context sessions with DeepSeek can stall for 600s and never recover; users need session recovery or better timeout behavior.
- [#91230 — Task Completion Verification as the sixth Hermes law](https://github.com/NousResearch/hermes-agent/issues/91230) — **5 comments**. Architecture/publication discussion about adversarial verification of task completion; signals interest in stronger formal guarantees.

PR comment counts were not exposed in the visible snapshot, so issue threads dominate the hot-topic analysis.

## 5. Bugs & Stability

Ranked roughly by severity:

### P1 / Critical

| Issue | Description | Status / Fix PR |
|---|---|---|
| [#78981](https://github.com/NousResearch/hermes-agent/issues/78981) | DeepSeek 500k-token session permanently dies after repeated context-compression hangs; stalled stream waits 600s ceiling and interrupted turn never recovers. | No direct fix PR visible. |
| [#92279](https://github.com/NousResearch/hermes-agent/issues/92279) | Profile-routed Telegram sessions lose all history every turn; cache probe/rebuild reads main store while messages persist in profile store. Regression 0.20.1→0.20.5. | Marked duplicate, still open. No direct fix PR visible. |
| [#92457](https://github.com/NousResearch/hermes-agent/issues/92457) | Security: exposed webhook credential must be rotated and affected images republished after committed profile archive. Incident boundary explicitly outside previous cleanup. | No direct fix PR visible. Related security/CI work: [#92046](https://github.com/NousResearch/hermes-agent/pull/92046). |

### P2 / High

| Issue | Description | Status / Fix PR |
|---|---|---|
| [#92434](https://github.com/NousResearch/hermes-agent/issues/92434) | Desktop profile switching (Bot ↔ Default) breaks WebSocket connection and requires app restart. | No direct fix PR visible. |
| [#92553](https://github.com/NousResearch/hermes-agent/issues/92553) | `pre_tool_call` shell hooks silently discard documented `"approve"` action; `hooks doctor` reports them healthy. | No direct fix PR visible. |
| [#92554](https://github.com/NousResearch/hermes-agent/issues/92554) | Writing `config.yaml` destroys all user comments via re-serialization. | No direct fix PR visible. |
| [#91621](https://github.com/NousResearch/hermes-agent/issues/91621) | Large-context Codex TTFB watchdog scales the timeout, but default max caps it back to 120s. | No direct fix PR visible. |
| [#89332](https://github.com/NousResearch/hermes-agent/issues/89332) | Gateway has no file-identity guard on `state.db`; out-of-band replacement is not detected and persistence outage limps on. | No direct fix PR visible. |
| [#91459](https://github.com/NousResearch/hermes-agent/issues/91459) | Windows 11 HUD mode shows persistent opaque themed backdrop; `transparent: true` not honored. | No direct fix PR visible. |
| [#92441](https://github.com/NousResearch/hermes-agent/issues/92441) | Context-file/memory scanners block Persian/Arabic/Hebrew files containing U+200C (ZWNJ), a standard orthographic character. | No direct fix PR visible. |
| [#92475](https://github.com/NousResearch/hermes-agent/issues/92475) | `todo` is classified MUTATING, so its no-argument READ path gets no failure detectors or no-progress detector. | No direct fix PR visible. |
| [#92549](https://github.com/NousResearch/hermes-agent/issues/92549) | Security audit reports a shadowed stale lazy-packages version as the active dependency even when the sealed venv is patched. | No direct fix PR visible. |
| [#92535](https://github.com/NousResearch/hermes-agent/issues/92535) | Successful Git updates lose update receipts when stale-module purge evicts `update_receipt`. | No direct fix PR visible. |
| [#92515](https://github.com/NousResearch/hermes-agent/issues/92515) | Desktop right sidebar flickers during scroll; pinned sessions hard-limited to 2 with no unpin/replace. | No direct fix PR visible. |

### P3 / Lower Severity

| Issue | Description |
|---|---|
| [#71239](https://github.com/NousResearch/hermes-agent/issues/71239) | Telegram can consume updates but stall the Python-telegram-bot dispatcher invisibly. |
| [#70606](https://github.com/NousResearch/hermes-agent/issues/70606) | `local_embedded` Hindsight profile env completely overwritten on daemon start. |
| [#80276](https://github.com/NousResearch/hermes-agent/issues/80276) | Camofox stale-tab recovery handles HTTP 404 but not 410; browser tools wedge until restart. |
| [#92361](https://github.com/NousResearch/hermes-agent/issues/92361) | Camofox navigation needs timeout/retry hardening on slow first paint. |
| [#83391](https://github.com/NousResearch/hermes-agent/issues/83391) | Messaging Platforms page shows the same Telegram bot token across different profiles in multiplex setups. |

### Notable Open Fix PRs

Several fix PRs were updated in the last 24h and are worth watching:

- [#87409 — fix(state): failed schema repair must not destroy the database](https://github.com/NousResearch/hermes-agent/pull/87409) — P1 data-loss invariant fix.
- [#92410 — bound update prompts so unattended runs cannot hang](https://github.com/NousResearch/hermes-agent/pull/92410)
- [#92448 — never block on prompts when stdin is unattended](https://github.com/NousResearch/hermes-agent/pull/92448)
- [#92528 — recover model switches after failed session resume](https://github.com/NousResearch/hermes-agent/pull/92528)
- [#83999 — close proc.stdout on every terminal wait exit path](https://github.com/NousResearch/hermes-agent/pull/83999)
- [#91788 — Bedrock Converse: honour ephemeral output cap on retries](https://github.com/NousResearch/hermes-agent/pull/91788)
- [#92090 — keep venv interpreter in desktop Exec= line instead of symlink target](https://github.com/NousResearch/hermes-agent/pull/92090)
- [#80580 — exec env-shebang relaunch scripts under current interpreter](https://github.com/NousResearch/hermes-agent/pull/80580)

## 6. Feature Requests & Roadmap Signals

Strong roadmap signals emerged in the last 24h:

- [#91277 — Fleet update reliability tracking](https://github.com/NousResearch/hermes-agent/issues/91277) is the clearest P1 roadmap item. The project seems to be consolidating update/install fixes into one deployment plan. PR [#92545](https://github.com/NousResearch/hermes-agent/pull/92545) is a WIP “Phase 3: image-managed update refusal contract” directly tied to this effort.
- [#91230 — Task Completion Verification as the sixth Hermes law](https://github.com/NousResearch/hermes-agent/issues/91230) — a design/publication proposal for exact-object completion verification.
- [#84340 — Memory-file placement contract for MEMORY.md / USER.md / AGENTS.md / SOUL.md](https://github.com/NousResearch/hermes-agent/issues/84340) — users want a formal contract and optional linting for persistent memory files.
- [#55811 — Runtime-enforced capability contracts for high-risk tools](https://github.com/NousResearch/hermes-agent/issues/55811) — a recurring request to centralize safety rules for high-risk tools.
- [#28984 — Typed Config-Runtime Contract](https://github.com/NousResearch/hermes-agent/issues/28984) — a broad, older feature request covering silent config/state/hook binding gaps.

Likely candidates for the next version, based on current momentum:

- `/codex-usage` command and Tavily keyless support — both PRs closed.
- Unattended update prompt fixes from [#92410](https://github.com/NousResearch/hermes-agent/pull/92410) and [#92448](https://github.com/NousResearch/hermes-agent/pull/92448).
- Python 3.14 runtime provisioning from [#92548](https://github.com/NousResearch/hermes-agent/pull/92548).
- Desktop German locale from [#51762](https://github.com/NousResearch/hermes-agent/pull/51762), if merged.
- Webhook gateway Standard Webhooks authentication from [#92024](https://github.com/NousResearch/hermes-agent/pull/92024).

## 7. User Feedback Summary

User pain points in this window are concentrated in a few areas:

- **Update/install is the least reliable capability.** The tracking issue [#91277](https://github.com/NousResearch/hermes-agent/issues/91277) explicitly says ~30 open issues and ~15 open PRs all patch one corner of the same problem.
- **Desktop reliability concerns are recurring.** Users report remote gateway flapping ([#38873](https://github.com/NousResearch/hermes-agent/issues/38873)), broken WebSocket after profile switching ([#92434](https://github.com/NousResearch/hermes-agent/issues/92434)), HUD transparency failures ([#91459](https://github.com/NousResearch/hermes-agent/issues/91459)), and sidebar/pinned-session UX bugs ([#92515](https://github.com/NousResearch/hermes-agent/issues/92515)).
- **Session/persistence fragility is a major trust issue.** The DeepSeek session death ([#78981](https://github.com/NousResearch/hermes-agent/issues/78981)) and Telegram history loss ([#92279](https://github.com/NousResearch/hermes-agent/issues/92279)) are severe because they destroy user work or context.
- **Configuration preservation matters.** Users are upset that `config.yaml` comments are destroyed on write ([#92554](https://github.com/NousResearch/hermes-agent/issues/92554)), profile env files are overwritten ([#70606](https://github.com/NousResearch/hermes-agent/issues/70606)), and update receipts vanish ([#92535](https://github.com/NousResearch/hermes-agent/issues/92535)).
- **Diagnostics are not always trustworthy.** [#92553](https://github.com/NousResearch/hermes-agent/issues/92553) shows a hook directive being silently ignored while `hooks doctor` reports the hook healthy — a clear safety-relevant gap.

On the positive side, users are contributing detailed reproductions and high-quality PRs, which indicates strong engagement from power users and a healthy open-source contribution loop.

## 8. Backlog Watch

Items that deserve maintainer attention due to age, severity, or lack of visible progress:

- [#3954 — feat(cli): add `hermes memory` subcommand](https://github.com/NousResearch/hermes-agent/pull/3954) — open since **2026-03-30**. One of the oldest visible PRs, adding a directly useful memory-management CLI.
- [#28984 — Typed Config-Runtime Contract](https://github.com/NousResearch/hermes-agent/issues/28984) — open since **2026-05-19**. Broad architectural contract gap with only 1 comment; may need maintainer triage or scope decision.
- [#51762 — feat(desktop): add German (de) locale](https://github.com/NousResearch/hermes-agent/pull/51762) — open since **2026-06-24**, full locale parity, but still unmerged.
- [#55811 — Runtime-enforced capability contracts for high-risk tool execution](https://github.com/NousResearch/hermes-agent/issues/55811) — open since **2026-06-30**, only 2 comments.
- [#66616 — Skills index is stale or degraded](https://github.com/NousResearch/hermes-agent/issues/66616) — open since **2026-07-18** with 77 comments; needs a durable fix rather than repeated automated freshness pings.
- [#80950 — feat(deepseek): support Responses API native web search](https://github.com/NousResearch/hermes-agent/pull/80950) — open since **2026-08-07**; first-class DeepSeek feature with clear user value.
- [#87409 — fix(state): a failed schema repair must not destroy the database](https://github.com/NousResearch/hermes-agent/pull/87409) — open since **2026-08-16**, P1 data-loss invariant fix; high priority for merge review.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-23

## 1. Today's Overview

PicoClaw saw moderate activity in the last 24 hours: 2 open issues were updated and 6 pull requests were touched, with 4 PRs now merged/closed and 2 still open. No new releases were published. The project is moving on multiple fronts — tool execution fixes, cron behavior, skills CLI improvements, and Delta Chat cleanup — but two open bugs around MCP failure handling and Telegram message editing remain unresolved and are the main stability concerns. Overall, the project is actively being patched, though several important PRs are marked stale and may need maintainer attention.

## 2. Releases

No new releases were reported for PicoClaw on 2026-08-23.

## 3. Project Progress

Merged/closed PRs updated in the last 24 hours:

- **[PR #3319 — fix(tools): honor exec timeout and boolean run options](https://github.com/sipeed/picoclaw/pull/3319)** (closed)  
  Fixes the `exec` tool silently ignoring per-run `timeout` values and declares `background`/`pty` as proper boolean options. This corrects a real tool-schema mismatch.

- **[PR #714 — skills: install/reinstall CLI and refactor into skillsCmd](https://github.com/sipeed/picoclaw/pull/714)** (closed)  
  Adds `ParseInstallSpec`, `InstallFromGitHubEx`, `reinstall` subcommand, and optional repo branch/subpath support. Production installs now use the GitHub Trees API for full directories.

- **[PR #1083 — fix(cron): preserve recurring job schedule after execution](https://github.com/sipeed/picoclaw/pull/1083)** (closed)  
  Fixes recurring cron jobs becoming one-time tasks after execution. Root cause was `computeNextRun()` returning `nil`, causing scheduled jobs to stop repeating.

- **[PR #1545 — merge fixes from PR #1500 #1490 #1488 #1487 #1485](https://github.com/sipeed/picoclaw/pull/1545)** (closed)  
  A consolidated merge of multiple open fixes.

Still-open PRs:

- **[PR #3222 — refactor(deltachat): cleanup implementation, documentation -200LOC](https://github.com/sipeed/picoclaw/pull/3222)** (open, stale)
- **[PR #3337 — Fix/mcp failure hangs agent loop](https://github.com/sipeed/picoclaw/pull/3337)** (open, stale)

## 4. Community Hot Topics

- **[Issue #3269 — MCP server failure hangs agent loop](https://github.com/sipeed/picoclaw/issues/3269)**  
  The most active issue with 6 comments and 1 👍. Users report that when an MCP server connection fails, the agent loop hangs and the PicoClaw chat interface stops replying entirely. This is a high-impact reliability issue and clearly resonates with users relying on MCP integrations.

- **[Issue #3343 — Tool feedback animation can edit a Telegram message indefinitely](https://github.com/sipeed/picoclaw/issues/3343)**  
  Newly filed, no comments yet, but potentially severe. A tool feedback animation continued calling Telegram’s `editMessageText` every three seconds — producing over 228,000 edit attempts and triggering a Telegram server-side rate limit. This exposes a missing loop/termination guard for async tool feedback.

Underlying needs: users need resilient failure handling for external service integrations (MCP, Telegram), not just surface-level error messages. Long-running animations/feedback loops must be bounded and stop when the agent turn is no longer making progress.

## 5. Bugs & Stability

Ranked by severity:

1. **High — [#3269: MCP server connection failure hangs agent loop](https://github.com/sipeed/picoclaw/issues/3269)**  
   The chat interface becomes unresponsive when MCP initialization fails. An open fix exists: **[PR #3337](https://github.com/sipeed/picoclaw/pull/3337)**, but it is marked stale and still needs review/merge.

2. **High — [#3343: Telegram message edit loop causes rate limit](https://github.com/sipeed/picoclaw/issues/3343)**  
   The tool feedback animation keeps editing a Telegram message indefinitely after the agent turn has failed, generating 228k+ edit attempts. No fix PR is currently linked.

3. **Medium — fixed — [#3319: exec tool ignored per-run timeout and boolean options](https://github.com/sipeed/picoclaw/pull/3319)**  
   Closed PR; the issue is addressed in the tool execution path.

4. **Medium — fixed — [#1083: recurring cron jobs become one-time tasks](https://github.com/sipeed/picoclaw/pull/1083)**  
   Closed PR; cron schedule preservation is now fixed.

## 6. Feature Requests & Roadmap Signals

- **Skills management improvements** — PR #714 adds `install`/`reinstall` CLI behavior and GitHub-backed skill installation. This suggests the project is investing in a more polished skill ecosystem.
- **Delta Chat cleanup** — PR #3222 proposes a major Delta Chat refactor: dropping legacy features, relying on official relay lists, and better invite-link handling. This signals continued messaging-platform support, but the PR is stale and may need rebasing.
- **Tool execution flexibility** — PR #3319 makes exec `timeout`, `background`, and `pty` actually honor documented semantics. This aligns with power users needing finer-grained tool control.

Prediction for next release: the MCP hang fix from PR #3337 is likely to be included, along with the already-merged exec timeout, cron, and skills CLI changes. The Telegram edit-loop bug (#3343) may also drive a quick follow-up fix.

## 7. User Feedback Summary

User-reported pain points from this batch of data:

- MCP integration failures can make the entire PicoClaw chat interface unusable — this is the most significant reported dissatisfaction.
- Tool feedback loops are not safely bounded in messaging environments like Telegram, leading to API abuse and rate limiting.
- Some declared tool arguments (timeout, boolean run options) did not actually work as documented.
- Recurring cron jobs silently stopped repeating, undermining trust in scheduled automation.

No positive user feedback was visible in the provided data; the recent signal is mostly bug reports and expectation of reliable behavior in external integrations.

## 8. Backlog Watch

These items are stale or at risk of being overlooked and need maintainer attention:

- **[Issue #3269 — MCP server failure hangs agent loop](https://github.com/sipeed/picoclaw/issues/3269)**  
  Open since 2026-07-20, updated 2026-08-22, marked stale. A fix PR exists but has not been merged.

- **[PR #3337 — Fix/mcp failure hangs agent loop](https://github.com/sipeed/picoclaw/pull/3337)**  
  Open since 2026-08-14, updated 2026-08-22, marked stale. This is a direct fix for #3269 and should be prioritized.

- **[PR #3222 — refactor(deltachat): cleanup implementation, documentation -200LOC](https://github.com/sipeed/picoclaw/pull/3222)**  
  Open since 2026-07-03, updated 2026-08-22, marked stale. Large refactor that will likely need rebasing before it can be merged.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-23

## 1. Today's Overview

NanoClaw saw moderate-to-high activity in the last 24 hours: 1 open issue was updated, and 25 PRs were touched, with 17 still open and 8 closed/merged. No new releases were published. The activity is concentrated around setup hardening, Telegram/Slack adapter fixes, build stability, and approval-flow edge cases. Overall project health looks solid, but the open Node 25+ stdin-json test failure and several older feature PRs need maintainer attention.

## 2. Releases

No new releases were published in this window.

## 3. Project Progress

The following PRs were closed/merged in the last 24 hours (as visible in the top-20 dataset):

- **#3443 — build: drop better-sqlite3 from onlyBuiltDependencies**  
  Removes the `node-gyp rebuild` step in favor of bundled prebuilds, improving install reliability.  
  [PR #3443](https://github.com/nanocoai/nanoclaw/pull/3443)

- **#3444 — fix(upgrade-state): accept a version-matching marker when Git cannot identify the checkout**  
  Adds a degraded but usable version-only upgrade check with a WARN when Git identity is unavailable.  
  [PR #3444](https://github.com/nanocoai/nanoclaw/pull/3444)

- **#3394 — fix(slack): working manual-install fallback, delivered to the requester**  
  Fixes broken recovery paths when Slack's approval policy blocks managed app installation.  
  [PR #3394](https://github.com/nanocoai/nanoclaw/pull/3394)

- **#3390 — fix(setup): skip Slack auto-provisioning when a bot is already saved**  
  Prevents duplicate Slack app provisioning when setup is rerun after partial completion.  
  [PR #3390](https://github.com/nanocoai/nanoclaw/pull/3390)

- **#3445 — Closing: wrong repository**  
  Opened against the wrong upstream and closed without review; not a project change.  
  [PR #3445](https://github.com/nanocoai/nanoclaw/pull/3445)

These changes indicate a focus on stabilizing Slack onboarding, install/build behavior, and upgrade detection.

## 4. Community Hot Topics

No PRs or issues in this dataset reported meaningful comment/reaction counts — the only issue has 0 comments. However, by update cadence and label weight, the active areas are:

- **Telegram integration reliability**  
  PRs #3450, #3449, #3438, #3437, #3435, #3434, and #3431 all center on Telegram adapter identity, polling behavior, setup flows, and multi-bot support.  
  [PR #3450](https://github.com/nanocoai/nanoclaw/pull/3450) · [PR #3449](https://github.com/nanocoai/nanoclaw/pull/3449) · [PR #3438](https://github.com/nanocoai/nanoclaw/pull/3438)

- **Slack setup and approval UX**  
  PRs #3394, #3390, and #3385 target Slack manual install fallback, duplicate provisioning, and MPDM approval card readability.  
  [PR #3385](https://github.com/nanocoai/nanoclaw/pull/3385)

- **Runtime safety and gate behavior**  
  PR #3447 addresses circuit-breaker strike scoping; PR #3446 addresses automated senders being blocked by the unknown-sender approval gate.  
  [PR #3447](https://github.com/nanocoai/nanoclaw/pull/3447) · [PR #3446](https://github.com/nanocoai/nanoclaw/pull/3446)

Underlying need: users are hitting real-world setup and identity-edge cases across multiple chat adapters, and the project is actively patching those paths.

## 5. Bugs & Stability

Ranked by estimated severity:

1. **stdin-json tests fail on Node 25+**  
   The tsx loader triggers Node's `module.register()` deprecation, polluting stderr and breaking assertions. No fix PR exists yet.  
   [Issue #3453](https://github.com/nanocoai/nanoclaw/issues/3453)

2. **Telegram channel-post blackholing**  
   Server-persisted `allowed_updates` can cause posts to be silently ignored. A fix is proposed by pinning explicit `allowedUpdates`.  
   [PR #3449](https://github.com/nanocoai/nanoclaw/pull/3449)

3. **Startup circuit-breaker strikes are not instance-scoped**  
   The shared `data/circuit-breaker.json` can cause crashes from one instance to delay another. Fix proposed.  
   [PR #3447](https://github.com/nanocoai/nanoclaw/pull/3447)

4. **Unknown-sender gate blocks automated senders**  
   Bot/webhook senders trigger approval cards that can never be approved. Fix proposed by auto-dropping automated senders.  
   [PR #3446](https://github.com/nanocoai/nanoclaw/pull/3446)

5. **Polling adapters do not open the webhook server**  
   Inconsistency between polling and webhook modes. Fix proposed.  
   [PR #3434](https://github.com/nanocoai/nanoclaw/pull/3434)

6. **Upgrade-state fails when Git cannot identify the checkout**  
   Already mitigated by closed PR #3444, which adds a version-matching fallback with a warning.  
   [PR #3444](https://github.com/nanocoai/nanoclaw/pull/3444)

## 6. Feature Requests & Roadmap Signals

- **Telegram multi-bot setup**  
  Multiple PRs (#3438, #3437, #3435, #3431) add the ability to configure “another Telegram bot,” carry adapter instances through setup, and improve pairing documentation. This looks like a strong next-release candidate.  
  [PR #3438](https://github.com/nanocoai/nanoclaw/pull/3438)

- **Cursor agent provider**  
  PRs #3355 and #3356 add an `/add-cursor` agent-provider skill and Cursor Agent SDK payload. These have been open since Aug 19 and may land in a future release.  
  [PR #3355](https://github.com/nanocoai/nanoclaw/pull/3355) · [PR #3356](https://github.com/nanocoai/nanoclaw/pull/3356)

- **CLI/UX improvements**  
  PR #3448 warns when group scope overrides an explicit auto-fill argument, fixing #2464. PRs #3452 and #3451 improve captured update command output and barrel-import attribution.  
  [PR #3448](https://github.com/nanocoai/nanoclaw/pull/3448) · [PR #3452](https://github.com/nanocoai/nanoclaw/pull/3452) · [PR #3451](https://github.com/nanocoai/nanoclaw/pull/3451)

Likely near-term release themes: Telegram setup/multi-bot support, Cursor integration, and instance-aware runtime state.

## 7. User Feedback Summary

The dataset does not include explicit sentiment, but the PRs reveal concrete user pain points:

- Slack managed-install failures with no working recovery path (#3394).
- Duplicate Slack bot provisioning after interrupted setup (#3390).
- Unreadable Slack MPDM approval card names (#3385).
- Telegram channel posts ignored due to anonymous sender identity (#3450).
- Telegram bots silently dropping channel posts because of server-persisted `allowed_updates` (#3449).
- Bot/webhook senders getting stuck in the unknown-sender approval gate (#3446).
- Node 25+ users hitting stderr pollution from tsx during CLI tests (#3453).
- Installations without Git metadata failing upgrade checks (#3444).

Overall, users are encountering edge cases in setup flows, channel identity, and upgrade/install behavior; the maintainers are actively addressing them.

## 8. Backlog Watch

- **Issue #3453 — stdin-json tests fail on Node 25+**  
  Open, no comments, no linked fix PR. Needs triage.  
  [Issue #3453](https://github.com/nanocoai/nanoclaw/issues/3453)

- **Cursor provider feature PRs**  
  PRs #3355 and #3356 have been open since Aug 19 and appear ready for maintainer review.  
  [PR #3355](https://github.com/nanocoai/nanoclaw/pull/3355) · [PR #3356](https://github.com/nanocoai/nanoclaw/pull/3356)

- **Slack MPDM approval card fix**  
  PR #3385 has been open since Aug 20 and is labeled `core-team`; it addresses a real approval-flow readability issue.  
  [PR #3385](https://github.com/nanocoai/nanoclaw/pull/3385)

- **Telegram setup PR cluster**  
  Several related Telegram PRs from Aug 21 are still open (#3431, #3434, #3435, #3437, #3438). They likely need coordinated review.  
  [PR #3434](https://github.com/nanocoai/nanoclaw/pull/3434) · [PR #3438](https://github.com/nanocoai/nanoclaw/pull/3438)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-23

## 1. Today's Overview
IronClaw is in a high-velocity engineering state: 11 issues and 22 PRs were touched in the last 24 hours, with 7 issues still open/active and 4 closed, plus 5 PRs merged/closed and 17 open. No new releases were published. The most visible workstreams are onboarding suggestions, sandbox credential mediation, CI pipeline consolidation, and notification lifecycle hardening. Health signals are mixed: broad feature progress is happening, but user-facing integration setup failures and a measured context-cost regression remain open.

## 2. Releases
No new releases were published in the last 24 hours. There are no release notes, breaking-change notices, or migration notes to report.

## 3. Project Progress
Five PRs were merged/closed in the window, and four linked issues were closed:

- [PR #7773](https://github.com/nearai/ironclaw/pull/7773) / [Issue #7768](https://github.com/nearai/ironclaw/issues/7768) — Removed duplicate Settings and Extensions tabs and redundant route metadata.
- [PR #7774](https://github.com/nearai/ironclaw/pull/7774) / [Issue #7767](https://github.com/nearai/ironclaw/issues/7767) — Made Automation presenter date tests timezone-robust, fixing failures in e.g. `Asia/Shanghai`.
- [PR #7772](https://github.com/nearai/ironclaw/pull/7772) / [Issue #7769](https://github.com/nearai/ironclaw/issues/7769) — Configure now surfaces the authoritative extension setup phase and all readiness blockers.
- [PR #7700](https://github.com/nearai/ironclaw/pull/7700) / [Issue #7691](https://github.com/nearai/ironclaw/issues/7691) — Published authoritative run-outcome notifications from Process Journal transitions, with bounded/redacted delivery behavior.
- [PR #7076](https://github.com/nearai/ironclaw/pull/7076) — Closed after a rebase onto current `main`; installs the packages the catalog already publishes.

## 4. Community Hot Topics
The only issues with visible comment activity in this window were:

- [Issue #7824 — Context projection: Pi-style compaction barrier, structured summaries, overflow recovery](https://github.com/nearai/ironclaw/issues/7824) (2 comments) — This is the clearest hot topic. The issue reports measured token/cost regression: PR #7491 raised PinchBench input tokens from **55.1M / $2.52** to **227.7M / $10.31** compared to the older shell baseline. Underlying need: models need a cheaper way to maintain long-horizon context without replaying full thread history.
- [Issue #7815 — Onboarding suggestions: cumulative net-new work to close connect → suggest → thread flow](https://github.com/nearai/ironclaw/issues/7815) (1 comment) — Represents a product-focused push to make the onboarding suggestion flow complete. Related PR #7816 is already open as its frontend half.

No PR-level comment counts were provided, so issue activity is the primary engagement signal.

## 5. Bugs & Stability
Ranked by severity:

1. **Notion install failure** — [Issue #7823](https://github.com/nearai/ironclaw/issues/7823) — User reports the Notion tool will not install in their IronClaw environment. Categorized as integration-install, medium severity. No fix PR is visible yet.
2. **Slack setup failure** — [Issue #7822](https://github.com/nearai/ironclaw/issues/7822) — User reports being unable to set up Slack, with a possible relationship to the Notion install issue. No fix PR is visible yet.
3. **Context cost/token regression** — [Issue #7824](https://github.com/nearai/ironclaw/issues/7824) — Not a classic crash, but a measured performance/cost regression on PinchBench linked to PR #7491. This is open and directly affects operating costs.
4. **UI heading cropped by suggestions panel** — [Issue #7813](https://github.com/nearai/ironclaw/issues/7813) — Low severity; the “What do you need help with?” heading is cut off when “Suggested for you” renders instead of reflowing.

Previously reported stability issues were fixed in this window: extension setup phase/blocker display ([#7769](https://github.com/nearai/ironclaw/issues/7769) → [#7772](https://github.com/nearai/ironclaw/pull/7772)), timezone-dependent test failures ([#7767](https://github.com/nearai/ironclaw/issues/7767) → [#7774](https://github.com/nearai/ironclaw/pull/7774)), notification lifecycle gaps ([#7691](https://github.com/nearai/ironclaw/issues/7691) → [#7700](https://github.com/nearai/ironclaw/pull/7700)), and duplicate UI tabs ([#7768](https://github.com/nearai/ironclaw/issues/7768) → [#7773](https://github.com/nearai/ironclaw/pull/7773)).

## 6. Feature Requests & Roadmap Signals
Several open issues and PRs point toward near-term product direction:

- **Onboarding suggestions polish** — [Issue #7815](https://github.com/nearai/ironclaw/issues/7815) and [PR #7816](https://github.com/nearai/ironclaw/pull/7816) continue the `oobe_suggestions`-flagged flow with refresh and connect actions.
- **Respect user-level tool permissions during suggestion generation** — [Issue #7812](https://github.com/nearai/ironclaw/issues/7812) proposes read-only access to connected tools so suggestions are grounded in real user data.
- **Sandbox egress auth via generic credential broker** — [Issue #7825](https://github.com/nearai/ironclaw/issues/7825) and [PR #7810](https://github.com/nearai/ironclaw/pull/7810) aim to retire the GitHub-specific carve-out and mediate GitHub CLI through provider-neutral host credential bindings.
- **Background subagents** — [PR #7818](https://github.com/nearai/ironclaw/pull/7818) ships slices 2b+2c: receipt spawns, per-child delivery, activation, and healing sweeps.
- **CI expedite tracks** — A four-lane CI convergence effort is active: [T1 #7821](https://github.com/nearai/ironclaw/pull/7821), [T2 #7817](https://github.com/nearai/ironclaw/pull/7817), [T2 probe #7820](https://github.com/nearai/ironclaw/pull/7820), [T3 #7819](https://github.com/nearai/ironclaw/pull/7819), and [T4 #7809](https://github.com/nearai/ironclaw/pull/7809). This is internal-stability work, but it should reduce “green locally, red in CI” failures.

Likely next-version themes: onboarding suggestion completion, sandbox credential brokering, CI reliability convergence, and possibly the first pieces of context projection.

## 7. User Feedback Summary
Real user friction is concentrated in integration setup:

- A Slack user reported **Notion not installing** in IronClaw ([#7823](https://github.com/nearai/ironclaw/issues/7823)).
- The same or related user reported being **unable to set up Slack** ([#7822](https://github.com/nearai/ironclaw/issues/7822)).
- Chat UI users see a **cropped heading** when the suggestions panel appears ([#7813](https://github.com/nearai/ironclaw/issues/7813)).

No positive satisfaction signals were captured in this window. The implicit demand is for reliable third-party tool installation and a visually stable OOBE.

## 8. Backlog Watch
Older open PRs/issues that may need maintainer attention or a decision:

- [PR #7257 — Design-system proposal, plan & checklist for WebUI (Epic #7038)](https://github.com/nearai/ironclaw/pull/7257) — Open since 2026-08-05 and still docs-only.
- [PR #7255 — Evaluate the APDD kit + propose scoped integration](https://github.com/nearai/ironclaw/pull/7255) — Open since 2026-08-05; depends on a private repo, which may slow review.
- [PR #7650 — Derive automation run outcomes from runtime evidence](https://github.com/nearai/ironclaw/pull/7650) — Open since 2026-08-14; touches core automation semantics.
- [PR #7491 — omp core-tool contract + engines + benchmark arm](https://github.com/nearai/ironclaw/pull/7491) — Open since 2026-08-11 and central to the cost regression reported in [#7824](https://github.com/nearai/ironclaw/issues/7824).
- [PR #7820 — Scope-isolation suite consolidation probe](https://github.com/nearai/ironclaw/pull/7820) — A draft stacked on [#7817](https://github.com/nearai/ironclaw/pull/7817); it cannot move forward until T2’s base PR merges.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-23

## Today’s Overview

Over the past 24 hours, Moltis saw focused but modest activity: 1 new issue, 3 open pull requests, and 0 releases / 0 merged PRs. The issue queue is currently centered on security-hardening for hooks, while the PR queue targets OpenAI/Codex schema compatibility, MCP client lifecycle stability, and Browserless v2 container support. All three PRs remain open and pending maintainer review, so today’s work is proposed rather than landed. Overall, project health looks steady, with maintainers actively addressing integration and reliability pain points.

## Releases

No new releases.

## Project Progress

- **Merged/closed PRs today:** 0
- **Open PRs proposed today:**

  - [#1232 fix(tools): make object schemas OpenAI-safe](https://github.com/moltis-org/moltis/pull/1232)  
    Fixes strict OpenAI schemas forcing Codex to send `null`/empty values for patch and map fields.

  - [#1231 fix(mcp): resolve current client after server restart](https://github.com/moltis-org/moltis/pull/1231)  
    Prevents active chat turns from dispatching through a closed MCP client after server restart.

  - [#1229 fix(browser): support Browserless v2 containers](https://github.com/moltis-org/moltis/pull/1229)  
    Adds Browserless v2 container-protocol support while keeping v1 behavior as the default.

These fixes are not yet merged, so they represent pending stability and compatibility improvements.

## Community Hot Topics

No items show significant comment/reaction activity in this snapshot. The most substantive active topics are:

- [#1230 [OPEN] feat(hooks): add an opt-in fail-closed error policy for modifying security hooks](https://github.com/moltis-org/moltis/issues/1230)  
  Users need security hooks to fail closed on runtime errors instead of degrading to continuation.

- [#1232 [OPEN] fix(tools): make object schemas OpenAI-safe](https://github.com/moltis-org/moltis/pull/1232)  
  Underlying need: OpenAI/Codex compatibility with strict JSON schemas without losing tool arguments.

- [#1231 [OPEN] fix(mcp): resolve current client after server restart](https://github.com/moltis-org/moltis/pull/1231)  
  Underlying need: reliable MCP tool dispatch across server restarts and long-running chat sessions.

- [#1229 [OPEN] fix(browser): support Browserless v2 containers](https://github.com/moltis-org/moltis/pull/1229)  
  Underlying need: modern Browserless container support without breaking existing v1 workflows.

## Bugs & Stability

Ranked by severity:

1. **High — Security boundary fail-open risk**  
   [#1230](https://github.com/moltis-org/moltis/issues/1230)  
   Runtime failures in `BeforeToolCall` and other modifying hooks currently degrade to continuation, which is dangerous when hooks are used for policy enforcement. This is not a regression, but a security hardening gap. No fix PR exists yet.

2. **Medium — OpenAI/Codex strict-schema data loss**  
   [#1232](https://github.com/moltis-org/moltis/pull/1232)  
   OpenAI strict tool schemas close objects with `additionalProperties=false`, forcing Codex to send `null`/empty values for unspecified patch/map fields. A fix PR is open.

3. **Medium — Stale MCP client after server restart**  
   [#1231](https://github.com/moltis-org/moltis/pull/1231)  
   Tool bridges keep dispatching through a closed MCP client until the next turn rebuilds the registry. This can cause failed or misdirected tool calls in active conversations. A fix PR is open.

4. **Low — Browserless v2 container incompatibility**  
   [#1229](https://github.com/moltis-org/moltis/pull/1229)  
   Existing Browserless v1 support does not cover v2 container protocols. A compatibility PR is open.

## Feature Requests & Roadmap Signals

- [#1230](https://github.com/moltis-org/moltis/issues/1230) requests an **opt-in fail-closed error policy** for modifying security hooks. This is a strong roadmap signal for security-conscious deployments and could reasonably land in the next minor version.

- [#1229](https://github.com/moltis-org/moltis/pull/1229) signals demand for **Browserless v2 container support**, while preserving v1 defaults.

- [#1232](https://github.com/moltis-org/moltis/pull/1232) indicates an ongoing need to **keep Moltis compatible with OpenAI/Codex strict schemas**, likely important for agent-facing integrations.

Given the open PRs, the next Moltis release may include the OpenAI-safe schema fix, MCP client lifecycle fix, and Browserless v2 support if reviews complete successfully.

## User Feedback Summary

User-reported pain points in this snapshot include:

- Security hooks failing open on runtime errors, which undermines policy enforcement.
- OpenAI/Codex strict schemas causing `null`/empty values in tool arguments.
- MCP tool calls failing after a server restart until the next turn.
- Lack of Browserless v2 container support.

No direct satisfaction/dissatisfaction rating is available, but the issue and PR descriptions point to specific integration and reliability friction rather than core-functionality complaints.

## Backlog Watch

No long-unanswered issues or stale PRs are visible in this snapshot. All current items were created/updated on 2026-08-22, so none are backlogged yet. Maintainers should still review the three open PRs promptly to keep momentum and avoid accumulation.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-23

## 1. Today's Overview

CoPaw showed moderate activity in the last 24 hours: 7 issues were updated (6 open, 1 closed) and 6 PRs received updates, but none were merged or closed. No new releases were published. While community engagement remains steady — with users reporting bugs in v2.1.0 and proposing enhancements — the zero-merge day and several first-time-contributor PRs aging in review (one since 2026-08-07, two since 2026-08-15) suggest maintainer review bandwidth may be a limiting factor. On the positive side, the closure of the UTF-8 startup request (#7043) shows responsiveness to user feedback. Overall project health is stable but with a buildup of open PRs and unaddressed bug reports.

## 2. Releases

No new releases in the last 24 hours.

## 3. Project Progress

No PRs were merged or closed today. The only item resolved was issue [#7043](https://github.com/agentscope-ai/QwenPaw/issues/7043) (feature request: optional `chcp 65001` UTF-8 startup switch for Chinese Windows users), closed after an 8-day lifecycle — likely implemented or slated for a near-term release. Two PRs continue advancing through the pipeline: [#7054](https://github.com/agentscope-ai/QwenPaw/pull/7054) (Chrome remote bridge for LAN browsers, marked "Under Review") and [#7190](https://github.com/agentscope-ai/QwenPaw/pull/7190) (qwenpaw-data packaging and docker-compose demo), but neither reached merge.

## 4. Community Hot Topics

- **[#7196 — Always-visible reasoning process is "severe visual interference"](https://github.com/agentscope-ai/QwenPaw/issues/7196)** is the most active item of the day (2 comments, 1 👍). Users want the reasoning trace collapsed by default, citing Hermes-style configurable behavior as a good reference. This topic directly connects to PR [#7187](https://github.com/agentscope-ai/QwenPaw/pull/7187) (disable thinking for title generation), indicating a broader maintainer push to reduce thinking-output noise.
- Several bug reports ([#7213](https://github.com/agentscope-ai/QwenPaw/issues/7213), [#7215](https://github.com/agentscope-ai/QwenPaw/issues/7215), [#7216](https://github.com/agentscope-ai/QwenPaw/issues/7216)) each drew 1 comment, reflecting a steady stream of individual pain points rather than one dominant controversy.
- PRs received no comment/reaction activity, suggesting the community is currently more focused on reporting than on reviewing contributions.

## 5. Bugs & Stability

Ranked by severity:

1. **High — [#7212: Image pixel-dimension crash ends conversation](https://github.com/agentscope-ai/QwenPaw/issues/7212)**: Images under the 2 MB inline cap but exceeding the provider's pixel limit crash the request with `MODEL_EXECUTION_ERROR` and terminate the session. No degrading-gracefully fallback exists. No fix PR yet.
2. **High — [#7216: Intermittent tool-name corruption causes ToolNotFoundError](https://github.com/agentscope-ai/QwenPaw/issues/7216)**: The `execute_shell_command` tool name is occasionally character-mangled in LLM output (e.g., `l` → `|`), breaking shell-based workflows unpredictably. No fix PR yet.
3. **Medium — [#7215: OpenRouter/OpenCode model backends not displayed](https://github.com/agentscope-ai/QwenPaw/issues/7215)**: Added third-party models fail to render on the GUI desktop, hurting multi-provider usability. No fix PR yet.
4. **Low — [#7213: Meaningless blank lines in session output](https://github.com/agentscope-ai/QwenPaw/issues/7213)**: v2.1.0 persistently inserts unsuppressible blank lines; users report repeated prompting doesn't help. No fix PR yet.

None of today's bugs have associated fix PRs, so maintainer triage in the coming days is advisable.

## 6. Feature Requests & Roadmap Signals

- **Thinking-output hygiene looks like a near-term theme**: Issue [#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196) (collapsible reasoning display) aligns with PR [#7187](https://github.com/agentscope-ai/QwenPaw/pull/7187) (disable thinking for title generation). Both point to a UX improvement effort targeting the next minor release.
- **Media handling is an emerging focus**: [#7201](https://github.com/agentscope-ai/QwenPaw/issues/7201) requests splitting the single `max_inline_media_bytes` cap into per-provider `max_image_bytes` / `max_video_bytes` / `max_audio_bytes` with advanced-settings UI exposure; its sibling bug [#7212](https://github.com/agentscope-ai/QwenPaw/issues/7212) suggests media limits are being actively hit in production.
- **In-flight PRs hint at roadmap features**: per-cron-job model override picker ([#7050](https://github.com/agentscope-ai/QwenPaw/pull/7050)), LAN/network browser support via Chrome remote bridge ([#7054](https://github.com/agentscope-ai/QwenPaw/pull/7054)), and installable `qwenpaw[qwenpaw-data]` with a seeded docker-compose demo ([#7190](https://github.com/agentscope-ai/QwenPaw/pull/7190)).
- **Chinese-Windows usability has been addressed**: the closed [#7043](https://github.com/agentscope-ai/QwenPaw/issues/7043) (UTF-8 startup option) should be highlighted in release notes as a user-visible win.

## 7. User Feedback Summary

- **Output clutter is the top recurring complaint**: users describe the always-visible reasoning process as "severe visual interference" (#7196) and are frustrated by unsuppressible blank lines (#7213). Both degrade long-session UX.
- **Chinese Windows users face real friction**: #7043 documents that the shell tool launches `pwsh -NoProfile -NonInteractive`, bypassing `$PROFILE` UTF-8 settings and leaving GBK encoding issues unsolved.
- **Multi-provider users are hitting edge cases**: OpenRouter/OpenCode models don't render (#7215), and media limits crash rather than degrade (#7212), pointing to gaps in third-party provider integration.
- **Positive signal**: the closure of #7043 within 8 days indicates maintainers do act on well-scoped requests. Users are actively testing v2.1.0 and reporting concrete, actionable issues.

## 8. Backlog Watch

- **[PR #6808 — fix(console): show custom profile markdown files](https://github.com/agentscope-ai/QwenPaw/pull/6808)**: Open since 2026-08-07 (16 days), first-time contributor, no recorded maintainer comments. The backend already returns custom persona files but the console filters them out — a simple, user-visible fix at risk of stalling.
- **[PR #7054 — feat(chrome): remote bridge for LAN/network browsers](https://github.com/agentscope-ai/QwenPaw/pull/7054)**: Open since 2026-08-15, marked "Under Review" but not merged after 8 days. Extends the Chrome plugin beyond loopback-only connections.
- **[PR #7050 — feat(console): per-cron-job model override picker](https://github.com/agentscope-ai/QwenPaw/pull/7050)**: Open since 2026-08-15, same author as #7054, leveraging existing backend contract (`model_slot_override`). Needs a maintainer decision.
- All three are first-time-contributor PRs; timely review or explicit feedback would help sustain external contribution momentum and reduce the open-PR backlog.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-23

## 1. Today's Overview

ZeroClaw is in a period of intense architectural and security-hardening activity: **50 issues and 50 PRs were updated in the last 24h**, with 43 issues still open, 48 PRs open, and **no new release published**. Four issues and two PRs closed, notably the long-running **WASM plugin wall-clock timeout bug** and its accompanying fix. The dominant conversation threads are high-risk RFCs (runtime session ownership, memory lifecycle boundaries, realtime voice) alongside a cluster of P1 stability/security bugs — suggesting strong community momentum but also a growing maintainer-review bottleneck. The project remains very healthy in terms of contributor engagement, with multiple large (XL) feature PRs in flight, including A2A support, Android tooling, and principal-based authentication.

## 2. Releases

**No new releases in this window.** No release notes, breaking changes, or migration guidance to report.

## 3. Project Progress

Two PRs were merged/closed in the last 24h, both in the plugin security area:

- [PR #9403 — fix(plugins): bound WASM exports by a wall-clock deadline](https://github.com/zeroclaw-labs/zeroclaw/pull/9403) *(closed, risk:high, size:XL)* — Adds validated `plugins.limits.call_timeout_ms` (default 30,000 ms), applying a host-owned deadline to every tool, memory, and channel guest export. This directly resolves [Issue #9255](https://github.com/zeroclaw-labs/zeroclaw/issues/9255) (also closed), where dripping HTTP responses ran unbounded inside plugin calls.
- [PR #9128 — feat(plugins): add scoped tool secret service](https://github.com/zeroclaw-labs/zeroclaw/pull/9128) *(closed, risk:high, size:XL)* — Adds a generic host-owned `secrets.get(name)` service for tool components, scoped to the canonical plugin instance and granted only during tool execution.

Also closed on the issue side: [Issue #9255](https://github.com/zeroclaw-labs/zeroclaw/issues/9255) (WASM timeout, fixed by #9403), [Issue #9640](https://github.com/zeroclaw-labs/zeroclaw/issues/9640) (WhatsApp Web policy docs referencing a nonexistent V2 config key), [Issue #9436](https://github.com/zeroclaw-labs/zeroclaw/issues/9436) (`config init` writing template sections that fail the strict loader), and [Issue #9339](https://github.com/zeroclaw-labs/zeroclaw/issues/9339) (custom CA trust for remote MCP servers). Net effect: plugin sandboxing, config onboarding, and MCP trust boundaries all advanced.

## 4. Community Hot Topics

Most active issues by comment count:

- [Issue #9487 — RFC: Runtime-owned conversation sessions and transport surface adapters](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) *(23 comments, high risk, needs-maintainer-review)* — The most-discussed item. Revision 2 ratifies an ownership boundary across #9487/#9488/#9600 and mandates `InboundAction` at every migrated entry point. Underlying need: clarifying who owns session state as gateway/channel surfaces multiply.
- [Issue #7462 — 74 test failures on Windows](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) *(19 comments, P1)* — CI only runs Linux, so Unix-only test commands, path semantics, and console code page 936 fall through. Strong signal of unmet cross-platform testing demand.
- [Issue #6850 — RFC: Decouple memory lifecycle policy from storage backends](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) *(15 comments)* and [Issue #9103 — RFC: separate authoritative memory storage from optional enrichment connectors](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) *(13 comments)* — A coherent thread: the community is pushing for clean architectural boundaries on memory, with #9103 undergoing maintainer takeover revision.
- [Issue #8780 — RFC: Realtime speech-to-speech channel for Gemini Live](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) *(15 comments)* — Rewritten to a broker contract in v2; demand for realtime voice is clearly high.
- [Issue #8692 — Tracker: Maintainer decision queue for RFCs](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) *(13 comments)* — The community itself is organizing a decision queue for the RFC backlog, indicating review throughput is the current bottleneck.

PR comment counts were not available in the data, but notable open PRs by scope/labels include [PR #9324 (A2A outbound client, size:XL)](https://github.com/zeroclaw-labs/zeroclaw/pull/9324), [PR #10259 (enforce authenticated principals on RPC, size:XL)](https://github.com/zeroclaw-labs/zeroclaw/pull/10259), and [PR #10205 (Android native tools and standalone app, size:XL)](https://github.com/zeroclaw-labs/zeroclaw/pull/10205).

## 5. Bugs & Stability

High severity (P1 / workflow-blocking):

- [Issue #10164 — `block_high_risk_commands = false` is not honored](https://github.com/zeroclaw-labs/zeroclaw/issues/10164) *(P1, security, accepted)* — An allowlisted `rm` on the parent path is hard-blocked with no approval path. No fix PR yet; high visibility security-policy defect.
- [Issue #9946 — agent-browser subprocess waits are unbounded](https://github.com/zeroclaw-labs/zeroclaw/issues/9946) *(P1, S1 workflow blocked)* — No wall-clock deadline and no `kill_on_drop` in both availability probe and `run_command`; same defect class as #8560. No fix PR yet.
- [Issue #9718 — Telegram channel delivers duplicate messages when model emits both tool_call and content](https://github.com/zeroclaw-labs/zeroclaw/issues/9718) *(P1)* — A fix PR exists: [PR #10215](https://github.com/zeroclaw-labs/zeroclaw/pull/10215) suppresses the final reply duplicated by same-turn `send_via` delivery.
- [Issue #9666 — Filesystem channel listener is not cancellation-aware](https://github.com/zeroclaw-labs/zeroclaw/issues/9666) *(P1, accepted)* — Idle blocking `recv()` prevents supervisor shutdown/reload; no fix PR yet.
- [Issue #7462 — 74 Windows test failures](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) *(P1)* — No fix PR yet; CI infrastructure gap.

Also new in the last 24h: [Issue #10251](https://github.com/zeroclaw-labs/zeroclaw/issues/10251) — 17 `telegram::listen_*` tests assert on wall-clock timeouts, a flaky-test class matching #9429.

Medium severity:

- [Issue #10232 — Daemon diagnostics drop the underlying error chain](https://github.com/zeroclaw-labs/zeroclaw/issues/10232) *(P2)* — Supervisor records only `e.to_string()`, losing `anyhow` context causes.
- [Issue #9001 — Provider turn failures bury cause-specific diagnostics](https://github.com/zeroclaw-labs/zeroclaw/issues/9001) *(P2)* — Generic `All model_providers/models failed` envelope hides root causes.
- [Issue #10073 — `StoragePolicy::Rolling` performance regression under sustained event volume](https://github.com/zeroclaw-labs/zeroclaw/issues/10073) *(P2)* — Includes a proposal to retire Rolling, absorb row-count cap into Rotating, and extend `/api/logs` across segment files.
- [Issue #9590 — Concurrent `models refresh` runs can lose cache entries](https://github.com/zeroclaw-labs/zeroclaw/issues/9590) *(P3)* — Read-modify-write race on shared cache.

Fixed/closed in period: #9255 (WASM timeout), #9436 (`config init` degraded config), #9640 (WhatsApp docs), #9339 (MCP custom CA).

## 6. Feature Requests & Roadmap Signals

Most significant new and active requests:

- [Issue #10141 — "Please make sessions usable"](https://github.com/zeroclaw-labs/zeroclaw/issues/10141) *(new Aug 19, accepted, needs-repro)* — A direct UX plea for session management in zerocode (copying snippets, resuming past sessions). Likely candidate for a quick-fix iteration.
- [Issue #8850 — Move optional channels & tools from compile-time feature flags to runtime plugins](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) *(accepted, in-progress tracker, high risk)* — Core roadmap item; pairs with the merged plugin secret service (#9128) and WASM deadlines (#9403).
- [Issue #5607 — Deterministic precondition gates for cron jobs](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) *(accepted, no-stale)* — Cheap pre-hook with exit-code semantics (`0` proceed, `10` skip).
- [Issue #8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) / [Issue #7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943) — Realtime voice: Gemini Live speech-to-speech RFC and a backend-agnostic voicehost channel are both actively worked (in-progress).
- [Issue #10050 — RFC: Verbatim channel send over the gateway without an agent turn](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) *(follow-up, needs-maintainer-review)* — Newer RFC addressing a gap across the gateway's 47 `/api/*` paths.

Roadmap prediction: The v0.9.0 tracker ([Issue #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)) continues to be the coordination surface for auth/security/gateway breaking changes. Near-term merges are most likely in the security stack — [PR #10259](https://github.com/zeroclaw-labs/zeroclaw/pull/10259) and [PR #10263](https://github.com/zeroclaw-labs/zeroclaw/pull/10263) (principal authentication, stacked), [PR #10215](https://github.com/zeroclaw-labs/zeroclaw/pull/10215) (Telegram duplicates), and [PR #9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) (cron wall-clock timeout). Feature-shipping candidates for the next release include A2A outbound ([PR #9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324)) and Hailo-Ollama provider support ([PR #9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)).

## 7. User Feedback Summary

- **Windows experience is the loudest pain point.** The reporter of #7462 runs Windows 11 (Simplified Chinese, code page 936) and hits 74 failures that Linux-only CI never catches. This indicates both a tooling gap and a real international-user base.
- **Session UX frustration is explicit.** [#10141](https://github.com/zeroclaw-labs/zeroclaw/issues/10141): "It's quite frustrating to get into previous session" — users want easier copy/snippet management and session resume in zerocode.
- **Security policy confusion.** [#10164](https://github.com/zeroclaw-labs/zeroclaw/issues/10164) shows operators following documented config and still being hard-blocked with no approval path — a trust-damaging experience.
- **Tooling coverage complaints.** [#9945](https://github.com/zeroclaw-labs/zeroclaw/issues/9945) — browser tool exposes only 16 of 100+ agent-browser commands (iframes, dialogs, tabs, form controls unreachable), and [#9946](https://github.com/zeroclaw-labs/zeroclaw/issues/9946) shows hangs are possible.
- **User-visible message duplication** on Telegram ([#9718](https://github.com/zeroclaw-labs/zeroclaw/issues/9718)) was reported against shipped behavior; a fix is already in review.
- **Onboarding was degraded** for fresh installs via `config init` producing unloadable configs ([#9436](https://github.com/zeroclaw-labs/zeroclaw/issues/9436)) — now closed.
- **Diagnostics quality** is a recurring satisfaction issue: generic retry envelopes ([#9001](https://github.com/zeroclaw-labs/zeroclaw/issues/9001)) and dropped error chains ([#10232](https://github.com/zeroclaw-labs/zeroclaw/issues/10232)) make failures hard to self-diagnose.

Overall sentiment: contributors are highly engaged and constructive, but Windows support, session UX, and error transparency are the main sources of dissatisfaction.

## 8. Backlog Watch

Items that need maintainer attention and have been open or idle for a while:

- **RFCs labeled `needs-maintainer-review` (all high risk, all `no-stale`):**
  - [Issue #9487 — Runtime-owned conversation sessions](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) — 23 comments, revised as recently as Aug 22; the biggest open decision.
  - [Issue #6850 — Decouple memory lifecycle from storage backends](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) — open since May 22 (~3 months).
  - [Issue #8780 — Gemini Live realtime speech-to-speech](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) — open since Jul 6; v2 rewrite waiting on review.
  - [Issue #9103 — Memory storage vs. enrichment connectors](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) — maintainer takeover revision landed Aug 22; needs a decision.
  - [Issue #8396 — Wire protocol first-class in provider construction](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) — open since Jun 27.
  - [Issue #10050 — Verbatim channel send over gateway](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) — newer but awaiting maintainer review.
- **PRs awaiting maintainer review** (distinguished contributor, idle for ~4 weeks): [PR #9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) (cron job timeout), [PR #9399](https://github.com/zeroclaw-labs/zeroclaw/pull/9399) (Quickstart checklist width), [PR #9317](https://github.com/zeroclaw-labs/zeroclaw/pull/9317) (zerocode viewport rendering).
- **PRs flagged `needs-author-action`** (potentially stalled, author-side): [PR #9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) (Hailo-Ollama, Jul 17), [PR #9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) (A2A outbound, Jul 24), [PR #8561](https://github.com/zeroclaw-labs/zeroclaw/pull/8561) (Telegram multi-message, Jun 30), [PR #9635](https://github.com/zeroclaw-labs/zeroclaw/pull/9635) (git risk classifier, Aug 1), [PR #9196](https://github.com/zeroclaw-labs/zeroclaw/pull/9196) (MCP resource blob, Jul 20), and [PR #10215](https://github.com/zeroclaw-labs/zeroclaw/pull/10215) (Telegram duplication fix — important, should not stall).
- **Systemic signal:** The existence of the Maintainer Decision Queue tracker ([#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)), combined with at least 5 high-risk RFCs simultaneously awaiting review, indicates maintainer bandwidth is the critical constraint on ZeroClaw's throughput.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*