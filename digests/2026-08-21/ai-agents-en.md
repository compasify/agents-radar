# OpenClaw Ecosystem Digest 2026-08-21

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-20 23:15 UTC

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

# OpenClaw Project Digest — 2026-08-21

## 1. Today's Overview

OpenClaw saw very high activity in the last 24 hours: 500 issues and 500 PRs were updated, with 37 issues closed and 161 PRs merged/closed. No new release was published; the project is currently in beta validation for `v2026.8.1-beta.2` ([#125626](https://github.com/openclaw/openclaw/issues/125626)). The maintainer queue remains heavily loaded — many top issues are P0/P1 regressions labeled `clawsweeper:no-new-fix-pr` or `needs-maintainer-review`, while a long tail of older feature requests continues to wait for product decisions. Contributor throughput is strong, but release-blocker stability and review bandwidth are the main risks to project health.

## 2. Releases

**None.** No new releases were published in this window, so there are no changelog entries, breaking changes, or migration notes to report.

## 3. Project Progress

161 PRs were merged or closed in the last 24 hours. Notable closed PRs visible in the activity window:

- [#116489](https://github.com/openclaw/openclaw/pull/116489) — `feat(security)`: require explicit acknowledgement for install-policy warnings. This advances plugin/skill install safety across CLI and gateway flows.
- [#120900](https://github.com/openclaw/openclaw/pull/120900) — `feat(ui)`: let authenticated admins review install-policy warnings directly in the Control UI, complementing #116489.
- [#125471](https://github.com/openclaw/openclaw/pull/125471) — `fix(models)`: keep Claude CLI OAuth available in the Control UI after gateway restarts.

Also moving through the review queue:

- [#126859](https://github.com/openclaw/openclaw/pull/126859) — Codex execution-session transport refactor.
- [#123535](https://github.com/openclaw/openclaw/pull/123535) — UI fix to prevent session-catalog refresh storms.
- [#124543](https://github.com/openclaw/openclaw/pull/124543) — Fix for duplicate assistant turns on CLI backends, closing [#123792](https://github.com/openclaw/openclaw/issues/123792).
- [#126873](https://github.com/openclaw/openclaw/pull/126873) — Recovery for failed new-session navigation in the Control UI.

## 4. Community Hot Topics

The most active issues by comment count:

- [#42475](https://github.com/openclaw/openclaw/issues/42475) — **Per-agent cost budget enforcement at the gateway** (23 comments). Operators want daily/monthly spend caps enforced before model dispatch. Strong signal for cost-governance tooling.
- [#48788](https://github.com/openclaw/openclaw/issues/48788) — **Centralized filename encoding utility** (20 comments). Addresses multi-encoding Content-Disposition handling across channels (UTF-8, Shift-JIS, EUC-KR, GB18030).
- [#125626](https://github.com/openclaw/openclaw/issues/125626) — **Release validation for v2026.8.1-beta.2** (17 comments). Community testers are actively validating the beta.
- [#108435](https://github.com/openclaw/openclaw/issues/108435) — **Gateway fails to start after updating to 2026.7.1** (14 comments, 3 👍). P0 regression with crash-loop impact.
- [#38327](https://github.com/openclaw/openclaw/issues/38327) — **`Cannot convert undefined or null to object` with google-vertex/gemini** (14 comments, 3 👍). Provider-specific regression affecting embedded agents.

Most-reacted issues include [#48920](https://github.com/openclaw/openclaw/issues/48920) (4 👍, Live Docs ahead of release), [#80498](https://github.com/openclaw/openclaw/issues/80498) (3 👍, premature subagent completion announcements), and [#90361](https://github.com/openclaw/openclaw/issues/90361) (3 👍, intermittent `memory_search` index metadata errors).

## 5. Bugs & Stability

Active stability issues ranked by severity:

### P0 / Release-blocking

- [#108435](https://github.com/openclaw/openclaw/issues/108435) — Gateway fails to start on 2026.7.1 with `Error: gateway did not start on 127.0...`; crash-loop, no fix PR labeled.
- [#119270](https://github.com/openclaw/openclaw/issues/119270) — File tools strip a leading `@` from destination paths, silently writing to/deleting the wrong file. Data-loss risk; linked PR open.
- [#48920](https://github.com/openclaw/openclaw/issues/48920) — Live documentation is ahead of the released version (`IsolatedSessions` referenced but not in 2026.3.13); no-new-fix-pr.

### P1 / High-impact regressions

- [#113306](https://github.com/openclaw/openclaw/issues/113306) — SQLite snapshot restore lacks end-to-end crash and identity guarantees; data-loss potential.
- [#125431](https://github.com/openclaw/openclaw/issues/125431) — Codex restricted tool policy silently disables workspace `AGENTS.md`; security/session-state impact.
- [#92241](https://github.com/openclaw/openclaw/issues/92241) — Gateway holds stale module import paths after update/rollback, silently dropping inbound messages (`ERR_MODULE_NOT_FOUND`).
- [#97616](https://github.com/openclaw/openclaw/issues/97616) — Unreaped hook/tool child processes accumulate as zombies, degrading runtime over time.
- [#126246](https://github.com/openclaw/openclaw/issues/126246) — Telegram durable outbound deliveries stuck in `send_attempt_started`; replies lost on restart.
- [#123273](https://github.com/openclaw/openclaw/issues/123273) — Image attachments fail for named agents, while the default agent works.
- [#83598](https://github.com/openclaw/openclaw/issues/83598) — `anthropic:claude-cli` OAuth refresh still dead-ends main lane despite the earlier #73682 fix.
- [#124284](https://github.com/openclaw/openclaw/issues/124284) — vLLM + thinking-enabled subagent spawn produces malformed XML tool calls since `v2026.8.1-beta.2`.

Some of these already have linked fix PRs, including [#119270](https://github.com/openclaw/openclaw/issues/119270), [#123792](https://github.com/openclaw/openclaw/issues/123792) (fix PR [#124543](https://github.com/openclaw/openclaw/pull/124543)), [#114234](https://github.com/openclaw/openclaw/issues/114234), and [#90378](https://github.com/openclaw/openclaw/issues/90378). Many others still await maintainer review.

## 6. Feature Requests & Roadmap Signals

The following requests received meaningful engagement and may indicate roadmap direction:

- [#42475](https://github.com/openclaw/openclaw/issues/42475) — Per-agent cost budget enforcement at the gateway. Likely candidate for the next release given operator demand.
- [#47910](https://github.com/openclaw/openclaw/issues/47910) — Provider fallback by failure class, including quarantine of auth-broken providers. Aligns with several auth-related regressions.
- [#48788](https://github.com/openclaw/openclaw/issues/48788) — Centralized filename encoding utility for multi-encoding Content-Disposition handling.
- [#71142](https://github.com/openclaw/openclaw/issues/71142) — Configurable upload size limit for the Control UI (currently hardcoded at 5MB).
- [#40644](https://github.com/openclaw/openclaw/issues/40644) — Cron jobs calendar/timeline view for the Control UI.
- [#45501](https://github.com/openclaw/openclaw/issues/45501) — Configurable session startup message via `session.resetPrompt`.
- [#42276](https://github.com/openclaw/openclaw/issues/42276) — Live reasoning stream display (write/overwrite lines like OpenAI/Grok).
- [#50798](https://github.com/openclaw/openclaw/issues/50798) — Visible agent-to-agent messaging for ACP thread-bound sessions.

Cost governance, provider failover, and Control UI usability are the clearest roadmap signals.

## 7. User Feedback Summary

Recurring user pain points in the last 24h:

- **Cost and reliability operations**: Users want gateway-level spend caps ([#42475](https://github.com/openclaw/openclaw/issues/42475)) and smarter provider failover to avoid known-bad auth states ([#47910](https://github.com/openclaw/openclaw/issues/47910)).
- **Internationalization / non-English users**: Chinese users reported Feishu activation mode not working ([#50490](https://github.com/openclaw/openclaw/issues/50490)), Volcano Engine long-context failures ([#116691](https://github.com/openclaw/openclaw/issues/116691)), and filename encoding issues ([#48788](https://github.com/openclaw/openclaw/issues/48788)).
- **Upgrade/rollback fragility**: Silent cron store migration ([#90378](https://github.com/openclaw/openclaw/issues/90378)), stale module paths after rollback ([#92241](https://github.com/openclaw/openclaw/issues/92241)), and docs ahead of release ([#48920](https://github.com/openclaw/openclaw/issues/48920)) all erode trust in updates.
- **Memory management inconsistency**: Users report that memory is stored/embedded differently across machines ([#43747](https://github.com/openclaw/openclaw/issues/43747)).
- **Windows-specific pain**: CLI processes lingering as `node.exe` ([#74378](https://github.com/openclaw/openclaw/issues/74378)), Docker restart loops with `OPENCLAW_SANDBOX=1` ([#86612](https://github.com/openclaw/openclaw/issues/86612)), test teardown `EBUSY` errors ([#119796](https://github.com/openclaw/openclaw/issues/119796)), and doctor warnings about NVM node that cannot be resolved ([#60612](https://github.com/openclaw/openclaw/issues/60612)).
- **Positive signal**: Users are participating in beta release validation ([#125626](https://github.com/openclaw/openclaw/issues/125626)), which shows engagement and willingness to help stabilize releases.

## 8. Backlog Watch

The following issues have been open for a long time and still need maintainer attention or product decisions:

- [#14747](https://github.com/openclaw/openclaw/issues/14747) — Configurable lane-wait diagnostic threshold. Opened Feb 12; needs product decision.
- [#40644](https://github.com/openclaw/openclaw/issues/40644) — Cron jobs calendar view for Control UI. Opened Mar 9; needs product decision.
- [#42276](https://github.com/openclaw/openclaw/issues/42276) — Reasoning stream display. Opened Mar 10; sourced repro available.
- [#43374](https://github.com/openclaw/openclaw/issues/43374) — All LLM API calls time out simultaneously under multi-agent concurrency. Opened Mar 11; still `needs-info`.
- [#43747](https://github.com/openclaw/openclaw/issues/43747) — Memory management behavior is inconsistent across users. Opened Mar 12; needs maintainer review/product decision.
- [#44289](https://github.com/openclaw/openclaw/issues/44289) — Generate secretref reference docs from registry metadata. Opened Mar 12; linked PR open.
- [#45469](https://github.com/openclaw/openclaw/issues/45469) — `scheduleReconnect()` has no max retry limit and can loop forever. Opened Mar 13; needs maintainer review.
- [#45564](https://github.com/openclaw/openclaw/issues/45564) — Add confirmation step to `/new` and `/reset`. Opened Mar 14; needs maintainer review.
- [#47910](https://github.com/openclaw/openclaw/issues/47910) — Provider fallback by failure class. Opened Mar 16; no-new-fix-pr.
- [#48920](https://github.com/openclaw/openclaw/issues/48920) — Live Docs are ahead of release. Opened Mar 17; P0, no-new-fix-pr.

These issues share a common pattern: they are high-value or high-severity but remain blocked on maintainer bandwidth, product decisions, or a concrete fix PR.


---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — Personal AI Assistant / Agent Open Source Ecosystem
**Date:** 2026-08-21 · **Data window:** last 24 hours (GitHub activity only)

---

## 1. Ecosystem Overview

The personal AI assistant / agent ecosystem is consolidating around a clear architectural pattern: a **gateway + agent runtime + channel adapters + WebUI/console**, with multi-provider LLM support as table stakes. A large "Claw" family (OpenClaw, NanoClaw, PicoClaw, NullClaw, ZeptoClaw, IronClaw) shares architectural DNA, while independent implementations (Hermes Agent, CoPaw, NanoBot, Moltis, ZeroClaw, LobsterAI) differentiate on language, target platform, and security posture. The field is simultaneously in a **stabilization phase** (release-blocking regressions, update/rollback safety, data-integrity bugs) and a **differentiation phase** (persistent sandboxes, lifecycle hooks, WASM pluginization, provider failover, cost governance). Activity is overwhelmingly maintenance-focused rather than greenfield feature work, suggesting the ecosystem is preparing for production hardening before the next feature wave.

---

## 2. Activity Comparison

All counts reflect issues/PRs updated in the last 24 hours as reported in each digest.

| Project | Issues Updated (closed) | PRs Updated (merged/closed) | Releases Published | Health Score |
|---|---|---|---|---|
| OpenClaw | 500 (37) | 500 (161) | None (v2026.8.1-beta.2 in validation) | 6.0 / 10 |
| IronClaw | 23 (6) | 36 (17) | **ironclaw-v1.3.0** | 8.5 / 10 |
| CoPaw (QwenPaw) | 27 (13) | 50 (29) | **v2.1.1-beta.1** | 8.0 / 10 |
| NanoClaw | 3 (1) | 50 (16) | None | 7.5 / 10 |
| Moltis | 1 (1) | 8 (4) | **20260820.01** | 7.5 / 10 |
| NanoBot | 5 (2) | 29 (12) | None | 7.0 / 10 |
| Hermes Agent | 50 (12) | 50 (4) | None | 6.0 / 10 |
| ZeroClaw | 50 (5) | 50 (0) | None | 5.5 / 10 |
| PicoClaw | 3 (—) | 8 (3) | None | 5.0 / 10 |
| LobsterAI | 2 (—) | 7 (6, stale-closed) | None | 4.5 / 10 |
| NullClaw | 0 | 0 | — | N/A — no activity |
| ZeptoClaw | 0 | 0 | — | N/A — no activity |

**Health score rationale:** based on merge responsiveness, release cadence, severity of open regressions, and review-pipeline efficiency. OpenClaw's massive volume is offset by release-blocking P0s and a saturated maintainer queue. LobsterAI's stale-closed PRs and unmerged months-old fixes indicate a review bottleneck. ZeroClaw shows high design activity but zero merged PRs in the window. IronClaw earns the top score for shipping a stable release, unblocking CI, and demonstrating roadmap discipline.

---

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Reference-implementation status.** OpenClaw anchors the ecosystem; several projects (NanoClaw, PicoClaw, LobsterAI's engine overlay) are direct derivatives or wrappers. Its CLI/gateway/Control UI/backends model is the de facto standard.
- **Scale of community.** 500 issues and 500 PRs updated in 24 hours — 10× the next most active project (CoPaw, ZeroClaw at 50/50). 161 PRs merged/closed in one day exceeds most peers' *monthly* throughput.
- **Broadest surface coverage:** channels (Telegram, Slack, Feishu, WhatsApp, Discord), model families (Claude CLI OAuth, Gemini/Vertex, Codex, vLLM), and extensibility (skills, plugins, MCP, ACP).
- **Active beta-community engagement.** Release validation for v2026.8.1-beta.2 is being crowd-tested, a sign of mature change management.

**Technical approach differences:**
- OpenClaw is a **full-stack TypeScript/Node reference** with a universal gateway, whereas IronClaw (Rust) and ZeroClaw (Rust/WASM) pursue native performance and sandbox isolation, NanoBot/CoPaw are Python-centric, and Hermes is Electron-desktop-focused.
- Its fork ecosystem means architecture decisions (install policies, memory, session catalog) propagate downstream, making OpenClaw's stability bar disproportionately important.

**Community size comparison:**
- OpenClaw's maintainer queue is the ecosystem's largest bottleneck — top issues sit at P0/P1 with `needs-maintainer-review` or `clawsweeper:no-new-fix-pr`. This is a symptom of success but also an opening for competitors: IronClaw and Moltis are moving faster on security hardening and release delivery.

---

## 4. Shared Technical Focus Areas

Requirements emerging across multiple projects, independent of stack or target user:

| Focus Area | Evidence |
|---|---|
| **Cost governance & token visibility** | OpenClaw: per-agent budget caps at gateway (#42475); NanoClaw: `ncl` token-usage reporting (PR #3270); CoPaw: automatic model routing (#6436); PicoClaw: dynamic model override in subagents (#3330) |
| **Provider failover & retry resilience** | OpenClaw: fallback by failure class, quarantine auth-broken providers (#47910); NanoBot: fallback policy for raised errors (PR #5413), retry gaps on `server_error` (#5454); CoPaw: no auto-recovery after network interruption (#6932), `httpx.ReadError` not retried (#7162) |
| **Windows reliability** | Hermes: update deletes Desktop exe, exits 0 (#86443, #44225); OpenClaw: `node.exe` lingering (#74378), NVM doctor warnings (#60612); NanoClaw: installer audit series (#3413–#3420); ZeroClaw: `TaskDialogIndirect` startup failure (#10111, fix #10080); Moltis: `sh -c` → `cmd.exe` shell hooks (PR #468) |
| **Install & onboarding friction** | Hermes: Debian install broken (#87093); NanoClaw: one-click Slack setup scope fixes (#3421, #3423); Moltis: Docker OAuth failures (NanoBot #5444 mirrors this class); OpenClaw: docs ahead of release (#48920); LobsterAI: IM guide 404 (#1556); CoPaw: `envs.json` corruption wipes env vars (#7118) |
| **Data integrity & memory consistency** | OpenClaw: `@` path stripping in file tools (#119270), memory inconsistency across machines (#43747); Hermes: `state.db` corruption (#90950); IronClaw: `memory.write` CAS gap (#7776); CoPaw: `history.db` bloat to 7.6 GB (#7168); NanoBot: memory consolidation input preservation (PR #5379) |
| **WebUI/console UX & performance** | OpenClaw: Control UI refresh storms (#123535); IronClaw: design-system program (#7038/#7781); CoPaw: unified marketplace (#6880), deep-link fixes (#7067); PicoClaw: Web UI lag with long history (#3281); Hermes: dashboard 5.2 GB memory leak (#46082); NanoBot: WebUI turn observability (PR #5420) |
| **Multi-agent orchestration correctness** | OpenClaw: premature subagent completion announcements (#80498); CoPaw: agent stops mid-task, requires "continue" (#6921); NanoClaw: mention-sticky engages without mention (#3369); IronClaw: agent lifecycle hooks (#7770); PicoClaw: multi-agent WIP closed (#423); ZeroClaw: ephemeral agent swarms RFC (#10025) |
| **Security & sandboxing** | OpenClaw: install-policy acknowledgement (#116489, #120900); ZeroClaw: WASM egress grants (#9582/#9584), webhook credential scrubbing (#9995); Moltis: vault auth fix (#1216), sandbox image validation (#1222); IronClaw: persistent per-user sandbox (#7732); NanoBot: Slack download redirect validation (PR #5414) |
| **Channel-specific correctness** | WhatsApp: NanoClaw unreachable attachments (#2715), Moltis reply-to-bot addressing (#1217), hardcoded bot name (#1218); Slack: NanoClaw missing `app_mentions:read` scope (#3423), IronClaw deployment config help text; Telegram: OpenClaw stuck outbound deliveries (#126246), NanoBot sticker support (PR #5387); China channels: CoPaw DingTalk context modes (#7158), QQ push (#7159), OpenClaw Feishu activation (#50490) |

---

## 5. Differentiation Analysis

| Project | Core Differentiator | Target User | Architecture |
|---|---|---|---|
| **OpenClaw** | Universal reference implementation; largest channel/provider matrix | Self-hosting operators, power users | TypeScript/Node; gateway + Control UI + CLI + multiple backends |
| **IronClaw** | Persistent per-user sandbox with managed proxy; enterprise lifecycle hooks; automations | Ops/enterprise teams | Rust workspace; iron-proxy sidecar; WebUI design system |
| **Hermes Agent** | Desktop-first (Electron) with native Windows/WSL integration; SQLite session state | Desktop personal users (Windows-heavy) | Electron desktop + gateway; ACP support |
| **CoPaw (QwenPaw)** | Chinese-market depth: Qwen/GLM models, DingTalk/QQ/Feishu channels, unified apps/plugins/skills marketplace | Chinese-speaking desktop power users | Python; desktop console + providers + packaged MCP sidecars |
| **NanoBot** | Lightweight Python multi-provider agent; fast-moving provider breadth (Vertex, SenseNova, Bedrock, Copilot) | Developers/tinkerers | Python; CLI/TUI/WebUI; gateway pattern |
| **NanoClaw** | OpenClaw derivative focused on one-click onboarding (Slack, WhatsApp) and engagement-router semantics | Onboarding-sensitive SMB/ops users | OpenClaw-derived; `ncl` CLI; Slack/WhatsApp emphasis |
| **ZeroClaw** | Security-research posture: WASM pluginization, Landlock sandbox tiers, egress grants, Rust anti-slop gates; RFC-driven governance | Security-conscious developers, plugin ecosystem | Rust; WASM plugins; ZeroRelay transport; ZeroCode TUI |
| **Moltis** | Security-hardened minimal agent; vault auth, sandbox image validation, supply-chain pinning | Small teams needing hardened self-host | Rust/backend + channels; security-first |
| **PicoClaw** | Lightweight OpenClaw-family with Anthropic-native protocol support; embedded/small-footprint | Users needing Anthropic-native API providers | Lightweight; web frontend; subagent tooling |
| **LobsterAI** | NetEase Youdao desktop client overlaying an OpenClaw engine; AI artifact preview; Chinese-language UI | Chinese desktop users of the OpenClaw engine | Electron desktop wrapper + engine overlay |
| **NullClaw / ZeptoClaw** | Dormant — no activity; possible brand-reserved or abandoned forks | — | — |

**Key architectural schism:** the JavaScript/OpenClaw-derived family (convenience, breadth, fast iteration) vs. the Rust-native family (IronClaw, ZeroClaw — sandboxing, performance, formal security policy). Python occupies the middle (CoPaw, NanoBot — provider agility, scriptability). The Chinese-market projects (CoPaw, LobsterAI, and OpenClaw's Feishu/Volcano threads) treat local channels and CJK encoding as first-class, which Western-centric projects under-serve.

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapidly iterating, shipping (healthy momentum):**
- **IronClaw** — released v1.3.0, unblocked CI in hours, 17 PRs merged, clear v1.4.0 epics with active implementation. Best roadmap hygiene in the ecosystem.
- **CoPaw** — 29 PRs merged/closed, beta release, strong first-time-contributor pipeline, but user trust is threatened by task-autonomy reliability issues.
- **OpenClaw** — highest raw velocity (161 PRs) and strongest test community, but release-blocked by P0s and a saturated maintainer queue. Momentum high; delivery constrained.

**Tier 2 — Steady, responsive (stable maturity):**
- **NanoClaw** (16 merged, rapid fix-PR turnaround on mention-sticky and Slack scope), **Moltis** (release + critical security fix landed), **NanoBot** (consistent 12 merged, provider expansion, but conflict-marked PRs accumulating).

**Tier 3 — Active but bottlenecked or stabilizing:**
- **Hermes Agent** — active contributor flow, but four of the top five issues are Windows/update/DB regressions; the project is fighting for stability, not shipping features.
- **ZeroClaw** — intellectually high-output (RFCs, security PRs) but **zero merges in 24h** and a decision-queue tracker (#8692) that reads as governance overload.
- **PicoClaw** — stable but drifting: stale-labeled issues, open PRs are mostly Dependabot bumps, and the multi-agent WIP was closed without a successor.

**Tier 4 — Concerning / dormant:**
- **LobsterAI** — completed-looking fixes stale-closed rather than merged; maintainer review pipeline is the bottleneck.
- **NullClaw, ZeptoClaw** — no activity; effectively inactive.

---

## 7. Trend Signals

1. **Cost governance is becoming core infrastructure.** Across OpenClaw (per-agent caps), NanoClaw (token usage in CLI), CoPaw (auto model routing), and PicoClaw (dynamic model override), operators are demanding spend limits and cost-aware routing *before* dispatch, not after. **Value for developers:** build budget enforcement and usage telemetry into the gateway from day one.

2. **Update/rollback safety determines trust.** The most acute dissatisfaction clusters around destructive updates: Hermes' update deleting the desktop executable, OpenClaw's stale module paths after rollback, CoPaw's env-var wiping, and NanoClaw's destructive rsync removal. **Value:** install/update flows must be atomic, idempotent, and fail-closed — especially on Windows.

3. **Agent memory is the new data-integrity frontier.** `state.db` corruption, `memory.write` concurrent-overwrite gaps, `history.db` bloat, and cross-machine memory inconsistency signal that conversational memory is being treated as a real database but implemented like a file. **Value:** adopt CAS/WAL semantics, size quotas, and end-to-end integrity checks for memory stores.

4. **Persistent sandboxes and lifecycle hooks are the next architecture wave.** IronClaw's per-user sandbox + proxy, ZeroClaw's Landlock/WASM egress, and Moltis's sandbox image validation all point toward agents as continuously-running, accountable systems with auditable permissions — rather than ephemeral shell sessions. **Value:** design permission contracts and hook seams now; retrofitting is expensive.

5. **Multi-agent orchestration semantics are still immature.** Symptoms across projects: premature subagent completion, mention-sticky misfires, agents stopping mid-plan and requiring "continue," and session-level corruption from bad tool results. The *semantic layer* (when does an agent engage, when is a task "done," how do interruptions recover) is the ecosystem's largest unsolved product problem. **Value:** define explicit engagement/terminalization states and surface them observably.

6. **Provider resilience lags provider breadth.** Every multi-provider project reports retry/failover gaps: unseen TTFT stalls consuming retry budgets, non-retried stream errors, frozen connections needing manual restart. **Value:** instrument time-to-first-token, classify failures by class (auth, rate, network), and quarantine bad providers automatically.

7. **China-market channels are a first-class expansion surface.** Feishu, DingTalk, QQ, Volcano Engine, SenseNova, Qwen, and GLM appear across CoPaw, OpenClaw, LobsterAI, and NanoBot's provider additions. For global agent platforms, local-channel/providers support is a concrete market-access feature. **Value:** prioritize CJK filename handling, local OAuth flows, and mainland-accessible model endpoints.

8. **The "Claw" pattern created a de facto ecosystem standard** — gateway + agents + channels + WebUI — but Rust-native challengers (IronClaw, ZeroClaw) are contesting the security/sandboxing high ground. The reference implementation's P0 backlog is the ecosystem's biggest single risk; its resolution pace will shape fork health downstream. **Value:** track OpenClaw release-blockers as leading indicators for the entire derivative family.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-21

## 1. Today's Overview

NanoBot shows a highly active maintenance and feature-development rhythm: in the last 24 hours, 5 issues were updated (3 open/active, 2 closed) and 29 pull requests were updated (17 open, 12 merged/closed). No new releases were published, so all movement is in fixes, provider support, and UI/channel improvements. The main themes are provider resilience, WebUI/TUI polish, MCP SDK migration, and channel-specific bug fixes. A small number of open PRs carry conflict markers, indicating some backlog review is still needed.

## 2. Releases

No new releases were published in this window.

## 3. Project Progress

Twelve PRs were merged/closed in the last 24 hours. Notable visible closures include:

- [PR #1203 — fix(cli): workaround 'Event loop is closed' on linux](https://github.com/HKUDS/nanobot/pull/1203) — closes the long-standing Linux shutdown `RuntimeError: Event loop is closed` issue.
- [PR #5452 — feat(tui): print resume command on exit](https://github.com/HKUDS/nanobot/pull/5452) — merged feature that prints a ready-to-run `nanobot agent --session websocket:<id>` command when the TUI exits.
- [PR #5240 — refactor(webui): unify floating controls](https://github.com/HKUDS/nanobot/pull/5240) — merged UI refactor centralizing floating-surface styling and semantics.

These indicate continued work on CLI stability, TUI usability, and WebUI component consistency.

## 4. Community Hot Topics

The items with the most visible issue comments are:

- [Issue #5444 — [bug] Failed to login OpenAI via OAuth in Docker](https://github.com/HKUDS/nanobot/issues/5444) — 1 comment, open. Users in Dockerized deployments are hitting authentication failures during the OpenAI OAuth redirect flow. This is a practical onboarding blocker for self-hosted deployments.
- [Issue #5425 — [bug] Support legacy socks:// proxy URLs for custom OpenAI-compatible providers](https://github.com/HKUDS/nanobot/issues/5425) — 1 comment, closed. Custom provider users expect common `socks://` proxy URL aliases to be accepted; the issue was closed in the last 24 hours, suggesting a fix or triage decision was reached.

Underlying need: users want predictable OAuth behavior in container environments and compatible proxy handling for custom/provider-integrated setups.

## 5. Bugs & Stability

Ranked roughly by severity:

- **High — Docker OAuth login failure**  
  [Issue #5444](https://github.com/HKUDS/nanobot/issues/5444)  
  OpenAI OAuth login fails in Docker. This blocks authenticated provider setup for containerized users. No linked fix PR is visible yet.

- **Medium — Streaming retry skips `server_error` after first content**  
  [Issue #5454](https://github.com/HKUDS/nanobot/issues/5454)  
  Codex `response.failed` / `server_error` events are not retried if content has already streamed. A partial fix is proposed in [PR #5455](https://github.com/HKUDS/nanobot/pull/5455), but the PR currently only covers `server_error` occurring before the first delta.

- **Medium/Low — `socks://` proxy URL compatibility**  
  [Issue #5425](https://github.com/HKUDS/nanobot/issues/5425)  
  Closed, likely resolved. Requests fail before reaching custom providers when a `socks://` alias is used.

- **Low/Operational — Channel and background-task reliability fixes in review**  
  Several open PRs address stability issues:  
  - [PR #5457 — fix(channels): scope dispatcher exception boundary to message processing](https://github.com/HKUDS/nanobot/pull/5457)  
  - [PR #5431 — fix(agent): report background task failures](https://github.com/HKUDS/nanobot/pull/5431)  
  - [PR #5430 — fix(agent): release completed task groups](https://github.com/HKUDS/nanobot/pull/5430)  
  - [PR #5413 — fix(providers): apply fallback policy to raised errors](https://github.com/HKUDS/nanobot/pull/5413)  
  - [PR #5412 — fix(gateway): flush background child output to logs](https://github.com/HKUDS/nanobot/pull/5412)

- **Security-adjacent — Slack file download validation**  
  [PR #5414 — fix(slack): validate file downloads across redirects](https://github.com/HKUDS/nanobot/pull/5414)  
  Prevents crafted redirect URLs from bypassing URL guards during Slack downloads.

## 6. Feature Requests & Roadmap Signals

Notable user-requested features and roadmap signals:

- [Issue #5459 — Add native Google Vertex AI provider for Claude models](https://github.com/HKUDS/nanobot/issues/5459)  
  Users are asking for first-class Vertex AI support in addition to existing Anthropic/Bedrock/Copilot providers. This is a strong roadmap signal for provider expansion.

- [PR #5453 — feat(providers): add SenseNova (商汤日日新) provider](https://github.com/HKUDS/nanobot/pull/5453)  
  Open PR adding SenseNova as a native provider, including `sensenova-6.8-flash-lite`, `deepseek-v4-flash`, and `glm-5.2` models.

- [Issue #5447 — Paid security-scan MCP integration with ScanPay x402](https://github.com/HKUDS/nanobot/issues/5447)  
  Closed feature request proposing a Solana x402 micropayment security scanner. Its closure may mean it was not accepted, but it signals user interest in monetized/extensible MCP services.

- [PR #5420 — feat(webui): add turn observability and safe recovery](https://github.com/HKUDS/nanobot/pull/5420)  
  Open feature improving per-turn visibility, tool activity, provider usage, and interrupted-work recovery in the WebUI.

- [PR #5387 — feat(telegram): support reusable sticker replies](https://github.com/HKUDS/nanobot/pull/5387)  
  Adds Telegram sticker support, likely to make bot replies feel more native on the platform.

Prediction: the next NanoBot release may include the SenseNova provider, Telegram sticker replies, provider retry improvements, and some form of WebUI turn observability.

## 7. User Feedback Summary

Real user pain points in this window include:

- Docker users find OpenAI OAuth login unreliable, which hurts the out-of-box self-hosted experience.
- Streaming users hit retry gaps when providers emit `server_error` after partial output.
- Custom provider users expect standard proxy URL formats such as `socks://` to work without special configuration.
- Some users want more first-party provider coverage, especially Google Vertex AI for Claude models.
- A user proposed using NanoBot as an agent integration layer for paid x402-based security scanning, showing interest in extending NanoBot beyond chat into autonomous agent revenue workflows.

No explicit satisfaction ratings are visible, but the volume of contributor-submitted fixes and feature PRs suggests an engaged external community.

## 8. Backlog Watch

Several open PRs have been waiting for review and carry conflict markers, which increases maintenance risk:

- [PR #5179 — Migrate MCP integration to SDK v2 with legacy compatibility](https://github.com/HKUDS/nanobot/pull/5179) — open since 2026-07-30, marked `conflict`, priority p1.
- [PR #5180 — chore(mcp): evaluate minimal SDK v2 migration](https://github.com/HKUDS/nanobot/pull/5180) — open since 2026-07-30, marked `conflict`; should be reconciled with #5179.
- [PR #5338 — fix(mcp): preserve credentials when OAuth store read fails](https://github.com/HKUDS/nanobot/pull/5338) — open since 2026-08-11, marked `conflict`.
- [PR #5379 — fix(memory): preserve full consolidation input](https://github.com/HKUDS/nanobot/pull/5379) — open since 2026-08-13, marked `conflict`.
- [PR #5339 — fix(webui): reject discarded temporary chat messages](https://github.com/HKUDS/nanobot/pull/5339) — open since 2026-08-11; important race-condition fix that still needs review.

These PRs are especially worth maintainer attention because they address correctness/security edge cases and are at risk of becoming stale due to conflicts.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-21

## 1. Today's Overview
Hermes Agent is seeing sustained high activity: 50 issues and 50 PRs were updated in the last 24 hours, with 12 issues closed and 4 PRs merged/closed. No new releases were published. The dominant themes are Windows/desktop update reliability, installation friction, and SQLite `state.db` integrity. There is also a healthy flow of small, focused bug-fix PRs — particularly around stream retry logging, compaction transparency, and gateway session routing — suggesting active maintenance in addition to feature work.

## 2. Releases
No new releases in the last 24 hours.

## 3. Project Progress
- 12 issues were closed in the last day. Notable closures include:
  - [Windows `hermes update` hides cua-driver stale-daemon prompt and waits 660 seconds (#79684)](https://github.com/NousResearch/hermes-agent/issues/79684)
  - [Bot Mode group chat no longer lands on latest message (#89835)](https://github.com/NousResearch/hermes-agent/issues/89835)
  - [Desktop `::preview` widget intents silently dropped in session tabs (#90630)](https://github.com/NousResearch/hermes-agent/issues/90630)
  - [Feature: peer + broadcast session steering (#90287)](https://github.com/NousResearch/hermes-agent/issues/90287)
  - [Feature: opt-in token budget for `/goal` (#90286)](https://github.com/NousResearch/hermes-agent/issues/90286)
  - [Feature: reversible `/refine` undo (#90283)](https://github.com/NousResearch/hermes-agent/issues/90283)
- The 4 merged/closed PRs are not individually listed in the available top-comment snapshot, but the open PR activity includes several new fix-oriented PRs today:
  - [Fix stream drop attempt numbering (#91157)](https://github.com/NousResearch/hermes-agent/pull/91157)
  - [Every compaction names the trigger that fired it (#91158)](https://github.com/NousResearch/hermes-agent/pull/91158)
  - [Route truncation writes + `/undo` to the profile database (#91150)](https://github.com/NousResearch/hermes-agent/pull/91150)
  - [Typed remote folder navigation in desktop (#91159)](https://github.com/NousResearch/hermes-agent/pull/91159)

## 4. Community Hot Topics
- [Debian installation broken; `uv.lock` & `npm install` failed (#87093)](https://github.com/NousResearch/hermes-agent/issues/87093) — 14 comments, 2 👍  
  High user impact: a basic Debian 13.6 `curl | bash` install fails. Users are looking for a smoother, more resilient install path.
- [Hermes Dashboard memory leak — grows to 5.2GB, OOM-killed (#46082)](https://github.com/NousResearch/hermes-agent/issues/46082) — 6 comments  
  Long-standing stability concern for the desktop dashboard.
- [`hermes update` deletes packaged Desktop app and exits 0 on failed rebuild (#86443)](https://github.com/NousResearch/hermes-agent/issues/86443) — 6 comments  
  A severe Windows reliability issue that overlaps with #44225. Community expectation: update must never leave the machine without a working Desktop app.
- [Windows update destroys Hermes Desktop executable on failed Electron rebuild (#44225)](https://github.com/NousResearch/hermes-agent/issues/44225) — 5 comments, 1 👍  
  User frustration is clear; this is the same update-safety failure mode as #86443.
- [`state.db` corruption recurs on SQLite 3.53.1 (#90950)](https://github.com/NousResearch/hermes-agent/issues/90950) — 5 comments  
  Data integrity issue with active discussion about WAL-concurrency root causes.
- [Make observable state proof-carrying from source to side effect (#90866)](https://github.com/NousResearch/hermes-agent/issues/90866) — 4 comments  
  Architecture-level proposal; signals the community is thinking about reliability in a more systematic way.

## 5. Bugs & Stability
Ranked by reported severity:

| Severity | Issue | Description | Status / Fix PR |
|---|---|---|---|
| P0 | [Anthropic cache-control is not idempotent (#90971)](https://github.com/NousResearch/hermes-agent/issues/90971) | P0-tagged, but maintainers later confirmed the original overflow scenarios are unreachable. Remaining idempotency concern still needs final resolution. | Open |
| P1 | [Debian 13.6 installation broken (#87093)](https://github.com/NousResearch/hermes-agent/issues/87093) | `uv.lock`/npm failures on a basic install. | Open, no visible fix PR |
| P1 | [`hermes update` deletes Desktop app, exits 0 (#86443)](https://github.com/NousResearch/hermes-agent/issues/86443) | Rebuild failure leaves no `Hermes.exe`, but update reports success. | Open; related [PR #59942](https://github.com/NousResearch/hermes-agent/pull/59942) |
| P1 | [`state.db` corruption recurs on SQLite 3.53.1 (#90950)](https://github.com/NousResearch/hermes-agent/issues/90950) | WAL sidecar unlink under concurrent writer. | Open |
| P1 | [Daily Windows Desktop update fails — desktop not rebuilt (#90829)](https://github.com/NousResearch/hermes-agent/issues/90829) | Fail-closed native-dep gate plus corrupted `node_modules`. | Open |
| P2 | [Dashboard memory leak, 5.2GB/OOM (#46082)](https://github.com/NousResearch/hermes-agent/issues/46082) | Long-running dashboard instability. | Open |
| P2 | [Windows bash capability probe can hang a turn indefinitely (#74982)](https://github.com/NousResearch/hermes-agent/issues/74982) | Timeout doesn't reliably kill Git-Bash shim. | Open |
| P2 | [Desktop breaks Windows Snap and FancyZones (#90237)](https://github.com/NousResearch/hermes-agent/issues/90237) | `transparent: true` applied unconditionally on Win11 22H2+. | Open |
| P2 | [Desktop build fails `blockmap.js` (#90134)](https://github.com/NousResearch/hermes-agent/issues/90134) | Windows packaging failure. | Open |

Some smaller issues already have fix PRs open:
- Stream retry log overstatement (#90215) → [PR #91157](https://github.com/NousResearch/hermes-agent/pull/91157)
- Compaction banners missing trigger attribution → [PR #90785](https://github.com/NousResearch/hermes-agent/pull/90785) / [PR #91158](https://github.com/NousResearch/hermes-agent/pull/91158)
- Session truncation writes routed to wrong database → [PR #91150](https://github.com/NousResearch/hermes-agent/pull/91150)

## 6. Feature Requests & Roadmap Signals
- [Architecture: proof-carrying observable state (#90866)](https://github.com/NousResearch/hermes-agent/issues/90866) — A forward-looking reliability architecture proposal; likely to influence future gateway/session design.
- [Preview pane: route localhost dev servers through remote/SSH backend (#91149)](https://github.com/NousResearch/hermes-agent/issues/91149) — Requested by desktop users working against remote backends; strong candidate for a future desktop release.
- [Memory-file placement contract for MEMORY.md / USER.md / AGENTS.md / SOUL.md (#84340)](https://github.com/NousResearch/hermes-agent/issues/84340) — Open `needs-decision`; could land as docs plus optional linting.
- [Discord voice channels vs voice messages policy (#91140)](https://github.com/NousResearch/hermes-agent/pull/91140) — New config-gated feature PR.
- [Typed remote folder navigation (#91159)](https://github.com/NousResearch/hermes-agent/pull/91159) — New desktop UX feature, likely to be refined for the next desktop build.

The small bug-fix PRs around stream retry logs and compaction attribution are likely to ship in the next patch release. The desktop remoting and preview-pane proposals are the strongest roadmap signals for the next minor version.

## 7. User Feedback Summary
- **Install friction is a real pain point.** Users report failed Debian installs and stalled Chrome-for-Testing downloads with little error feedback ([#87093](https://github.com/NousResearch/hermes-agent/issues/87093), [#90932](https://github.com/NousResearch/hermes-agent/issues/90932)).
- **Windows update/desktop reliability is the most acute source of dissatisfaction.** Multiple issues describe dead shortcuts, deleted executables, failed reconnect to WSL backend after relaunch, and update commands that report success while leaving the desktop app broken ([#86443](https://github.com/NousResearch/hermes-agent/issues/86443), [#44225](https://github.com/NousResearch/hermes-agent/issues/44225), [#90829](https://github.com/NousResearch/hermes-agent/issues/90829), [#91021](https://github.com/NousResearch/hermes-agent/issues/91021)).
- **Data integrity concerns are serious.** `state.db` corruption and swallowed SQLite errors are frustrating for users running long-lived sessions ([#90950](https://github.com/NousResearch/hermes-agent/issues/90950), [#90493](https://github.com/NousResearch/hermes-agent/issues/90493)).
- **Desktop UX issues are being actively reported:** session search showing raw tool-call JSON as a session name, group chats not scrolling to the latest message, and preview intents being dropped ([#91068](https://github.com/NousResearch/hermes-agent/issues/91068), [#89835](https://github.com/NousResearch/hermes-agent/issues/89835), [#90630](https://github.com/NousResearch/hermes-agent/issues/90630)).
- **Auth/config message quality matters:** false negatives like “No LLM provider configured” and false-positive vendor-prefix warnings reduce trust in diagnostics ([#91090](https://github.com/NousResearch/hermes-agent/issues/91090), [#91144](https://github.com/NousResearch/hermes-agent/issues/91144)).

## 8. Backlog Watch
These items are important, have been open for a while, and still need maintainer attention:

- [Dashboard memory leak — 5.2GB, OOM (#46082)](https://github.com/NousResearch/hermes-agent/issues/46082) — Open since June 14; severe desktop stability issue with no visible fix PR in the current queue.
- [Windows update destroys Hermes Desktop executable on failed Electron rebuild (#44225)](https://github.com/NousResearch/hermes-agent/issues/44225) — Open since June 11; overlaps with #86443 and deserves a canonical fix and duplicate cleanup.
- [Windows bash capability probe can hang a turn indefinitely (#74982)](https://github.com/NousResearch/hermes-agent/issues/74982) — Open since July 30; timeout enforcement issue that can stall production ACP agents.
- [PR: Install rebuilt app to system location after CLI `hermes update` (#59942)](https://github.com/NousResearch/hermes-agent/pull/59942) — Open since July 7; directly addresses the desktop-update installation gap and is highly relevant to the Windows update bugs.
- [PR: Preserve queued prompt boundaries end to end (#63298)](https://github.com/NousResearch/hermes-agent/pull/63298) — Open since July 12; broad session-state change tagged `blast-massive` and `needs-decision`, but it fixes important queued-message semantics.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-21

Data window: last 24 hours (updates through 2026-08-20). All items below are from the GitHub repository: https://github.com/sipeed/picoclaw

## 1. Today's Overview

Activity is moderate but maintenance-heavy. Last 24 hours touched 3 open issues and 8 pull requests, with 0 new releases and no newly filed issues. The three closed PRs are meaningful—one adds Anthropic-native API protocol support, one addresses a broken web lockfile, and one long-running multi-agent WIP was closed—but the remaining open PRs are mostly stale Dependabot dependency bumps. All open issues in this window are labeled `stale`, suggesting maintainer attention has been slow on user-facing concerns. Overall, the project appears stable but is currently in a dependency-maintenance and cleanup phase rather than rapid feature development.

## 2. Releases

No new releases in the last 24 hours.

## 3. Project Progress

Three PRs were closed in this window; no merge state is explicitly reported for any of them.

- [#1158 — feat: add anthropic-messages protocol for native Anthropic API format (Fixes #269)](https://github.com/sipeed/picoclaw/pull/1158)  
  Adds an `anthropic-messages` protocol prefix so PicoClaw can use Anthropic-native `/v1/messages` endpoints. This addresses compatibility with providers that only support Anthropic's native API format. This is the most feature-significant PR closed recently.

- [#3318 — fix(web): repair unparseable pnpm-lock.yaml](https://github.com/sipeed/picoclaw/pull/3318)  
  Fixes a broken `web/frontend/pnpm-lock.yaml` caused by duplicate `semver@7.8.5` mapping keys, which made pnpm reject the lockfile. This unblocks web frontend dependency installation for contributors.

- [#423 — WIP: feat: base multi-agent collaboration framework & shared context](https://github.com/sipeed/picoclaw/pull/423)  
  A long-running WIP (created 2026-02-18) was closed. It proposed shared context via a blackboard, agent handoff, and discovery tools, building on earlier protocol/fallback work. Its closure may mean the approach was superseded, abandoned, or still being reworked—no successor PR is visible in this data.

## 4. Community Hot Topics

The most active item by comment count is a Web UI performance bug.

- [#3281 — [BUG] Web UI chat input is very laggy when history has a little bit long](https://github.com/sipeed/picoclaw/issues/3281)  
  6 comments, 1 👍. Users report significant input lag in long chat sessions, which is a core UX pain point for the Web UI. Despite being active for a month, it remains open and stale.

- [#3331 — Feature: use any models with /audio/transcriptions endpoint](https://github.com/sipeed/picoclaw/issues/3331)  
  1 comment. Underlying need: users want to choose modern/faster transcription models instead of being limited to `*-whisper-*` model names.

- [#3330 — Feature: support dynamic model override in delegate/spawn/subagent tools](https://github.com/sipeed/picoclaw/issues/3330)  
  1 comment. Advanced users want per-call model selection when delegating to agents/subagents, instead of statically reading model config.

The overall community demand centers on flexibility: faster UI interactions, modern ASR model options, and dynamic model control in multi-agent workflows.

## 5. Bugs & Stability

Ranked by impact:

1. **Web UI input lag with long chat history** — [#3281](https://github.com/sipeed/picoclaw/issues/3281)  
   User-facing performance issue affecting normal Web UI use. Labeled `stale`, no fix PR is currently open. This is the most severe issue in the current queue because it directly degrades day-to-day usability.

2. **Broken `pnpm-lock.yaml` in web frontend** — [#3318](https://github.com/sipeed/picoclaw/pull/3318)  
   A build/tooling bug caused by duplicated YAML mapping keys. Fix PR was closed in this window; if merged, the web dependency chain is repaired.

No new crashes, regressions, or security-related issues were reported in the last 24 hours.

## 6. Feature Requests & Roadmap Signals

Two open feature requests stand out:

- [#3331 — Generalized /audio/transcriptions endpoint support](https://github.com/sipeed/picoclaw/issues/3331)  
  Proposes a `whisper-transcription: true` config flag to allow any model/endpoint to be used for ASR, rather than only `*-whisper-*` models. This signals a move toward more flexible voice/AI provider configuration.

- [#3330 — Dynamic model override for delegate/spawn/subagent tools](https://github.com/sipeed/picoclaw/issues/3330)  
  Users want to specify models at call time in multi-agent tooling, rather than relying on static defaults. This aligns with the multi-agent direction seen in the closed PR #423.

Additionally, the closed PR [#1158](https://github.com/sipeed/picoclaw/pull/1158) suggests that native Anthropic protocol support is a likely roadmap item. If it is merged, the next version may include better Anthropic-compatible provider support.

Given the `stale` labels, these feature requests are not being actively processed yet, but the pattern suggests future work on provider flexibility and multi-agent model control.

## 7. User Feedback Summary

Real pain points visible in this window:

- **Long-session Web UI performance**: Users find input lag unacceptable once chat history grows. This is the clearest dissatisfaction signal.
- **Outdated transcription model restriction**: Limiting ASR to `*-whisper-*` models is seen as "too old and slow"—users want to plug in newer or faster models via standard `/audio/transcriptions` endpoints.
- **Static model routing in subagents**: Users building more complex agent workflows want runtime control over model selection, not just static config.

Satisfaction signals are low in this dataset, with only one 👍 across all issues/PRs. No explicit positive feedback was recorded in the last 24 hours.

## 8. Backlog Watch

Items that need maintainer attention:

- [#3281 — Web UI laggy with long history](https://github.com/sipeed/picoclaw/issues/3281)  
  Open for a month, 6 comments, no fix PR, now `stale`. This is likely the highest-priority item for user retention.

- [#423 — Multi-agent collaboration framework WIP](https://github.com/sipeed/picoclaw/pull/423)  
  Closed after 6 months in WIP state. Maintainers should clarify whether this feature direction is still planned, and if so, where the work moved.

- [#3330 — Dynamic model override](https://github.com/sipeed/picoclaw/issues/3330) and [#3331 — Generic ASR endpoint](https://github.com/sipeed/picoclaw/issues/3331)  
  Both are user-relevant feature requests but already `stale` after only ~1 week, with no visible maintainer response.

- **Dependabot dependency PRs** — [#3332](https://github.com/sipeed/picoclaw/pull/3332), [#3333](https://github.com/sipeed/picoclaw/pull/3333), [#3334](https://github.com/sipeed/picoclaw/pull/3334), [#3335](https://github.com/sipeed/picoclaw/pull/3335), [#3336](https://github.com/sipeed/picoclaw/pull/3336)  
  All open since 2026-08-13 and now `stale`. These need review/merge or explicit closing to avoid accumulating unaddressed dependency updates.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-21

## 1. Today's Overview

NanoClaw is in a high-activity maintenance and integration period: 50 PRs were updated in the last 24 hours (34 open, 16 merged/closed), while 3 issues were updated (2 still open, 1 closed). No new releases were published. A large core-team stabilization campaign is visible across many stacked PRs focused on installer correctness, per-group configuration, and removing destructive or misleading setup steps. Community contribution is also active around Slack onboarding, WhatsApp media handling, and the engagement router. Overall, the project is moving quickly on reliability and channel/provider polish, with a steady stream of fixes rather than large new features.

## 2. Releases

No releases in the last 24 hours. No changelog, breaking-change, or migration notes to report.

## 3. Project Progress

Aggregate data shows **16 merged/closed PRs** in the last 24 hours. Among the visible top items:

- **#3421 — [CLOSED] docs+setup: announce one-click Slack agents**  
  Adds README/setup announcement for one-click Slack app creation and workspace install.  
  https://github.com/nanocoai/nanoclaw/pull/3421

- **#1311 — [CLOSED] Feature create new session**  
  A long-running feature PR from March finally closed; likely delivered or superseded by newer session-management work.  
  https://github.com/nanocoai/nanoclaw/pull/1311

Other active fixes advancing the codebase include:

- **#3423 — fix(add-slack): add missing `app_mentions:read` bot scope**  
  https://github.com/nanocoai/nanoclaw/pull/3423

- **#3422 — fix(router): mention-sticky subscribes on a mention, not on a session**  
  https://github.com/nanocoai/nanoclaw/pull/3422

- **#3402 / #3403 — provider-generated file delivery and Matrix ESM patch fixes**  
  https://github.com/nanocoai/nanoclaw/pull/3402  
  https://github.com/nanocoai/nanoclaw/pull/3403

- **#3401 — fix(whatsapp-cloud): keep skill payload compatible with main**  
  https://github.com/nanocoai/nanoclaw/pull/3401

- A broad audit/fix series (**#3413–#3420**) addressed installer issues across Vercel, dashboard, Ollama, Atomic Chat, clidash, anydoc, macOS statusbar, and Tavily tooling. Notable fixes include removing a destructive rsync, capping refresh fan-out, making configs use the per-group MCP seam, and replacing hardcoded install labels with slug-aware values.  
  Example: https://github.com/nanocoai/nanoclaw/pull/3413

## 4. Community Hot Topics

The most active threads center on engagement reliability, Slack onboarding, and channel integration fixes:

- **#2715 — Inbound WhatsApp media unreachable by the agent**  
  Open since June, still unresolved. Agent cannot access images/docs/audio because attachments land in an unmounted `DATA_DIR/attachments` directory.  
  https://github.com/nanocoai/nanoclaw/issues/2715

- **#3369 — mention-sticky engages without a mention**  
  Reported yesterday; very quickly followed by a targeted fix PR. Community need: predictable `mention-sticky` behavior in threaded platforms.  
  https://github.com/nanocoai/nanoclaw/issues/3369  
  Fix attempt: https://github.com/nanocoai/nanoclaw/pull/3422

- **#3423 — Slack `app_mentions:read` scope missing from setup docs**  
  Shows user demand for correct, copy-pasteable Slack onboarding.  
  https://github.com/nanocoai/nanoclaw/pull/3423

- **#3270 — Feat/ncl token usage**  
  A community PR adding token-usage reporting to the `ncl` CLI; likely a common need for cost-aware users.  
  https://github.com/nanocoai/nanoclaw/pull/3270

- **#3355 / #3356 — Cursor Agent SDK provider and `/add-cursor` skill**  
  Feature-level community/core work to add Cursor as an agent provider.  
  https://github.com/nanocoai/nanoclaw/pull/3355  
  https://github.com/nanocoai/nanoclaw/pull/3356

Underlying needs: users want setup flows that actually work, agents that can access inbound media, and engagement modes that behave exactly as documented.

## 5. Bugs & Stability

Ranked by severity:

1. **High — #2715: WhatsApp media attachments unreachable by the agent**  
   Files are written to a host directory not mounted into the agent container, and the agent receives a non-existent `/workspace/attachments/...` path. No fix PR is currently linked.  
   https://github.com/nanocoai/nanoclaw/issues/2715

2. **High — #2606: `engage_mode='always'` silently drops all messages**  
   `evaluateEngage()` lacks a case for `always`, causing all messages to be dropped as `no_agent_engaged`. Now closed, but it represents an important correctness regression in router behavior.  
   https://github.com/nanocoai/nanoclaw/issues/2606

3. **Medium — #3369: mention-sticky triggers without a mention**  
   With `ignored_message_policy: 'accumulate'`, a session row is created that becomes the subscription, causing replies in threads where the agent was never mentioned. A fix PR is open.  
   https://github.com/nanocoai/nanoclaw/issues/3369  
   https://github.com/nanocoai/nanoclaw/pull/3422

4. **Low/Medium — #3423: Slack bot missing `app_mentions:read` scope**  
   Docs say to subscribe to `app_mention` but omit the required OAuth scope. Fix PR is open.  
   https://github.com/nanocoai/nanoclaw/pull/3423

Stability fixes from the installer audit series are also significant, especially:

- **#3413** removes a destructive rsync in the Vercel skill.  
  https://github.com/nanocoai/nanoclaw/pull/3413

- **#3414** caps a `clidash` refresh fan-out that caused 27/29 concurrent `ncl` processes to time out on a 2-vCPU host.  
  https://github.com/nanocoai/nanoclaw/pull/3414

## 6. Feature Requests & Roadmap Signals

Strong signals for upcoming versions:

- **Cursor Agent SDK support**  
  Two open feature PRs add Cursor as a provider: `/add-cursor` setup skill and Cursor Agent SDK payload support.  
  https://github.com/nanocoai/nanoclaw/pull/3355  
  https://github.com/nanocoai/nanoclaw/pull/3356

- **Token usage reporting in `ncl`**  
  PR #3270 adds token-usage visibility, likely valuable for heavy users.  
  https://github.com/nanocoai/nanoclaw/pull/3270

- **One-click Slack agents**  
  The closed docs/setup PR #3421 suggests self-serve Slack app creation is becoming a supported first-class flow.  
  https://github.com/nanocoai/nanoclaw/pull/3421

- **User-facing explainability skill**  
  PR #3189 adds `add-why` — a utility skill to explain what happened to one message.  
  https://github.com/nanocoai/nanoclaw/pull/3189

Predictions: the next release is likely to include Cursor provider support, Slack setup fixes, token usage improvements, and the router/mention-sticky fix.

## 7. User Feedback Summary

Recent user pain points are centered on **documented behavior not matching real behavior**:

- WhatsApp users cannot use inbound media because attachment paths are broken inside the container (#2715).
- Thread users see agents reply without being mentioned, violating `mention-sticky` expectations (#3369).
- Slack users following setup docs can miss the `app_mentions:read` scope, causing event subscription failures (#3423).
- Operators report setup/audit issues where configuration is inert, commands use the wrong install, or destructive commands overwrite symlinks (#3413–#3419).

Satisfaction signals are more indirect: the rapid creation of fix PRs by both core-team and community contributors suggests a responsive development cycle, and the large number of merged/closed PRs indicates active collaboration.

## 8. Backlog Watch

- **#2715 — WhatsApp media attachment bug**  
  Open since **June 8, 2026**, with only 1 comment. This is the clearest long-unanswered issue and deserves maintainer triage.  
  https://github.com/nanocoai/nanoclaw/issues/2715

- **#3189 — add-why utility skill**  
  Open since **August 5, 2026** with no visible approval or merge activity.  
  https://github.com/nanocoai/nanoclaw/pull/3189

- **#3270 — ncl token usage feature**  
  Open since **August 16, 2026**; a useful feature waiting on review.  
  https://github.com/nanocoai/nanoclaw/pull/3270

- **#3402, #3403, #3401** are recent core-team fixes that should be watched for merge, as they affect file delivery, Matrix, and WhatsApp-cloud compatibility.  
  https://github.com/nanocoai/nanoclaw/pull/3402  
  https://github.com/nanocoai/nanoclaw/pull/3403  
  https://github.com/nanocoai/nanoclaw/pull/3401

The oldest tracked item, #1311, was closed during this window, reducing long-tail backlog.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-21

## 1. Today's Overview

IronClaw is in a high-velocity, healthy state: **23 issues** were updated in the last 24 hours (17 open/active, 6 closed) and **36 PRs** were updated (19 open, 17 closed/merged). The project shipped a stable release (**ironclaw-v1.3.0**), unblocked CI after a Rust 1.98 clippy cascade, and continued major roadmap work around persistent per-user sandboxes, agent lifecycle hooks, the WebUI design system, and automations. The v1.4.0 roadmap is visibly forming, with several epics and large PRs actively moving. Maintenance quality also looks strong: cleanup, test-robustness, and documentation-consolidation work are landing alongside features.

---

## 2. Releases

### ironclaw-v1.3.0 — 2026-08-19

- Stable promotion of `1.3.0-rc.2`, including the upgrade and container fixes validated in RC2 and the complete RC1 scope.
- **Fixed in RC2:** Upgrades from 1.2 now accept and preserve the released extension `activation_state` field instead of crash-looping during state handling.

No explicit breaking changes or migration steps were listed in the provided release notes. The main migration note embedded in this release is the **1.2 → 1.3 upgrade fix**, which should make that path safer for existing extensions.

---

## 3. Project Progress

Closed/merged PRs observed in the last 24 hours (17 total; key items):

| PR | Description | Impact |
|---|---|---|
| [PR #7729](https://github.com/nearai/ironclaw/pull/7729) | `feat(automations): add run-now across trigger domain and WebUI` | Adds a manual-fire path for automations that preserves the existing schedule, exposes run-now through the first-party capability, assistant product service, WebUI API, and localized UI. Closes the long-standing automation gap tracked in [Issue #7193](https://github.com/nearai/ironclaw/issues/7193). |
| [PR #7777](https://github.com/nearai/ironclaw/pull/7777) | `fix(ci): clear the clippy 1.98 lint cascade blocking the merge queue` | Resolves a CI red state on `main` caused by newly promoted clippy lints. |
| [PR #7778](https://github.com/nearai/ironclaw/pull/7778) | `fix(lints): Rust 1.98 clippy migration` | Makes the whole workspace clean under `cargo +1.98.0 clippy --workspace --all-features --tests -- -D warnings`. |
| [PR #7763](https://github.com/nearai/ironclaw/pull/7763) | `docs(subagent): consolidate seven design docs into one canonical README` | Net **−9,713 lines**; replaces seven contradictory design documents with one canonical subagent design record. |
| [PR #7738](https://github.com/nearai/ironclaw/pull/7738) | `feat(slack): per-field help text on the Slack deployment configuration card` | Every manifest field now renders a description in the Admin configuration UI. |
| [PR #7304](https://github.com/nearai/ironclaw/pull/7304) | `refactor(webui): place OAuth sign-in above the gateway token form on login` | Improves login UX by prioritizing OAuth provider buttons. |

Several important issues also closed, including the **onboarding-to-channel-first epic** ([#7044](https://github.com/nearai/ironclaw/issues/7044)), the **design-system Phase 2–3 epic** deprecated in favor of [#7781](https://github.com/nearai/ironclaw/issues/7781) ([#7733](https://github.com/nearai/ironclaw/issues/7733)), the **Attio MCP OAuth failure** ([#7308](https://github.com/nearai/ironclaw/issues/7308)), the **notification inbox contracts/storage work** ([#7688](https://github.com/nearai/ironclaw/issues/7688)), and the **duplicate turn/subagent vocabulary cleanup** ([#7755](https://github.com/nearai/ironclaw/issues/7755)).

---

## 4. Community Hot Topics

The most-discussed issues in the last 24 hours:

- **[Issue #7732 — Epic: Persistent per-user sandbox with iron-proxy; defer loop executors](https://github.com/nearai/ironclaw/issues/7732)** — 8 comments  
  The highest-activity item. This v1.4.0 epic is about replacing ephemeral per-command Docker containers with a persistent per-user sandbox and managed proxy. The underlying need is a reliable, long-lived "user computer" model for agents rather than disposable shell environments.

- **[Issue #7770 — Epic: hook the agent lifecycle](https://github.com/nearai/ironclaw/issues/7770)** — 3 comments  
  Tracks adding `after-turn`, `before-turn`, compaction, and tool-result seams to `ironclaw_hooks`. The core need is to make agent behavior extensible via hook registrations instead of core-engine edits.

- **[Issue #7038 — Epic: Design System Phase 1 — Storybook integration & design-system catalog](https://github.com/nearai/ironclaw/issues/7038)** — 2 comments  
  Part of the re-scoped WebUI design-system program. Community/team attention is focused on maturing the WebUI development environment.

- **[Issue #7042 — Design System Phase 2: DESIGN.md governance & guidelines](https://github.com/nearai/ironclaw/issues/7042)** — 2 comments  
  Tracks the governance layer of the design-system work.

- **[Issue #7193 — feat(automations): add run-now](https://github.com/nearai/ironclaw/issues/7193)** — 2 comments  
  Closed after the corresponding feature PR landed. This was a clear user need: no way to fire an automation on demand.

Overall, the "hot" areas are infrastructure/architecture concerns — sandboxing, lifecycle hooks, and design-system standardization — rather than simple bug reports.

---

## 5. Bugs & Stability

Ranked by severity:

- **[High] Issue #7776 — `memory.write` needs an expected-version mode: full-document rewrites can silently overwrite concurrent writes**  
  [Issue #7776](https://github.com/nearai/ironclaw/issues/7776)  
  Found by review on PR #7765. The current CAS protects against torn writes but not against two writers doing sequential read-modify-write cycles on the same version. This can silently lose concurrent updates. **No fix PR is visible yet.**

- **[Medium] Issue #7783 — LLM timeout policy: finalization can't measure TTFT, and the retry budget can't fit the deadline**  
  [Issue #7783](https://github.com/nearai/ironclaw/issues/7783)  
  Structured-output finalization uses a non-streaming client with no visibility into time-to-first-token. A single transport stall can consume the entire retry budget and kill the run before a retry completes. **No fix PR is visible yet.**

- **[Medium] Issue #7780 — AfterTurn hook: scheduler-side failure terminalization bypasses the point**  
  [Issue #7780](https://github.com/nearai/ironclaw/issues/7780)  
  Follow-up from the #7770 phase 1 audit. `AfterTurn` only fires after successfully applied exits; scheduler-driven failure terminalization bypasses the hook, leaving a lifecycle gap. **No fix PR is visible yet.**

- **[Closed] Issue #7308 — Hosted MCP OAuth registration for Attio fails with invalid scope and cannot be corrected**  
  [Issue #7308](https://github.com/nearai/ironclaw/issues/7308)  
  An OAuth/authorization bug preventing Attio MCP registration. It was closed in the last 24 hours.

**Stability fixes landed:** Both [PR #7777](https://github.com/nearai/ironclaw/pull/7777) and [PR #7778](https://github.com/nearai/ironclaw/pull/7778) addressed the Rust 1.98 clippy lint cascade that was breaking all-branch CI. This was a key stability event because CI was red on `main` and blocking the merge queue.

---

## 6. Feature Requests & Roadmap Signals

The clearest v1.4.0 roadmap signals are:

- **Persistent per-user sandbox with `iron-proxy`** — [Issue #7732](https://github.com/nearai/ironclaw/issues/7732) is explicitly labeled `v1.4.0`. The first implementation PR, [PR #7779](https://github.com/nearai/ironclaw/pull/7779), is open and routes user-sandbox egress through a managed per-user proxy sidecar.
- **Agent lifecycle hooks** — [Issue #7770](https://github.com/nearai/ironclaw/issues/7770) is moving through phases. Its first phase, [PR #7765](https://github.com/nearai/ironclaw/pull/7765), adds the `AfterTurn` hook with memory curation as the first consumer.
- **Design System Phases 1–5** — Re-scoped into:
  - Phase 1: [Issue #7038](https://github.com/nearai/ironclaw/issues/7038) — Storybook integration, PR [#7750](https://github.com/nearai/ironclaw/pull/7750).
  - Phases 2–3: [Issue #7781](https://github.com/nearai/ironclaw/issues/7781) — DESIGN.md governance, theme update, UI reskin.
  - Phases 4–5: [Issue #7782](https://github.com/nearai/ironclaw/issues/7782) — agentic interactions, components, and information architecture.
- **Automation run-now** — [PR #7729](https://github.com/nearai/ironclaw/pull/7729) landed, satisfying [Issue #7193](https://github.com/nearai/ironclaw/issues/7193). This is likely to appear in the next release as a user-facing feature.
- **Unbound runs: skip gating capabilities instead of aborting** — [Issue #7775](https://github.com/nearai/ironclaw/issues/7775) proposes a better gate posture for background work.
- **Notifications and inbox** — [PR #7699](https://github.com/nearai/ironclaw/pull/7699) publishes actionable run gates into the durable inbox, and [PR #7698](https://github.com/nearai/ironclaw/pull/7698) generalizes the WebUI notification center.

Likely next-version candidates: **sandbox proxy step 2, AfterTurn hooks, and the design-system Phase 1 Storybook integration** are all actively open and progressing.

---

## 7. User Feedback Summary

Real pain points and user signals visible in the data:

- **Onboarding friction:** [Issue #7044](https://github.com/nearai/ironclaw/issues/7044) described the WebUI as a "blank slate" with too much burden on the user. It was a v1.4.0 epic and has now been closed, suggesting progress toward a channel-first onboarding experience.
- **Automations lacked on-demand firing:** [Issue #7193](https://github.com/nearai/ironclaw/issues/7193) — now addressed by the run-now feature in [PR #7729](https://github.com/nearai/ironclaw/pull/7729).
- **Agent quality is often model-quality, not platform quality:** [Issue #7771](https://github.com/nearai/ironclaw/issues/7771), the daily failure taxonomy for 2026-08-20, reports that the `officeqa` suite's 58 failures are "overwhelmingly genuine model-quality errors" from the DeepSeek-V4-Flash agent, not IronClaw infrastructure defects. That is useful signal that the platform itself is stabilizing.
- **Concurrency safety concerns:** [Issue #7776](https://github.com/nearai/ironclaw/issues/7776) shows users/reviewers are worried about silent data loss from concurrent `memory.write` operations.
- **LLM timeout reliability:** [Issue #7783](https://github.com/nearai/ironclaw/issues/7783) reflects frustration with provider stalls being invisible until a run is killed.
- **Developer experience debt:** Timezone-fragile tests ([#7767](https://github.com/nearai/ironclaw/issues/7767)), duplicate WebUI tabs and route metadata ([#7768](https://github.com/nearai/ironclaw/issues/7768)), and Slack docs drift ([PR #7737](https://github.com/nearai/ironclaw/pull/7737)) are being actively cleaned up.

Satisfaction appears moderate-to-positive: the project is shipping features, fixing CI quickly, and investing in cleanup and documentation, but reliability issues around LLM timeouts and memory concurrency will need attention.

---

## 8. Backlog Watch

Items that may need maintainer attention:

- **[PR #7257 — docs(design-system): proposal, plan & checklist for the WebUI design system](https://github.com/nearai/ironclaw/pull/7257)**  
  Open since 2026-08-05, updated 2026-08-20. This docs-only PR underpins three design-system epics but shows no comment activity in the data. It needs review or explicit acknowledgment.

- **[PR #7491 — feat(coding): omp core-tool contract + engines + benchmark arm](https://github.com/nearai/ironclaw/pull/7491)**  
  Open since 2026-08-11, size XL, risk medium. A major coding-tool surface change (unifying to `read`, `write`, `edit`, `glob`, `grep`, `bash`). No visible comment activity; this is a large, high-impact PR that could use maintainer eyes.

- **[PR #7711 — feat(wasm): typed tool response, guest migration, and dispatch-error cleanup](https://github.com/nearai/ironclaw/pull/7711)**  
  Open since 2026-08-17, size XL. Final PR of the capability-response-normalization stack. Large scope and long open duration suggest it needs scheduling or reviewer bandwidth.

- **[PR #7699 — feat(notifications): publish actionable run gates](https://github.com/nearai/ironclaw/pull/7699)** and **[PR #7698 — feat(webui): generalize the notification center](https://github.com/nearai/ironclaw/pull/7698)**  
  Both open since 2026-08-17, size XL, risk medium. They form a coupled notifications feature. If they are not already being actively reviewed, they are the most likely candidates for priority attention.

- **[Issue #7038 — Epic: Design System Phase 1](https://github.com/nearai/ironclaw/issues/7038)**  
  Open since 2026-08-03 with only 2 comments. The design-system program was re-scoped, and PR [#7750](https://github.com/nearai/ironclaw/pull/7750) is open, but the epic itself may need clearer owner updates.

---

**Overall project health:** IronClaw is shipping, stabilizing, and reorganizing around a clear v1.4.0 roadmap. The main risks to watch are LLM timeout reliability, memory-write concurrency, and the review bandwidth needed for several large open PRs.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-21

## 1. Today's Overview

LobsterAI shows a moderate but “old backlog” activity pattern: 2 issues were updated (both still open) and 7 PRs were updated, of which 6 are closed and 1 remains open. Notably, most updated PRs were created in early April and are now marked as stale-closed, suggesting maintenance work is happening but merge attention may be lagging. No new releases were published today. The main community conversations continue to revolve around documentation correctness and AI-generated file preview workflows.

---

## 2. Releases

None.

---

## 3. Project Progress

Six closed PRs were touched in the last 24 hours. Most carry the `[stale]` label and appear to have been auto-closed rather than merged, but they document significant development work that may need re-opening or re-review:

- **[#1545 – fix(agent): sync activeSkillIds immediately when updating current agent's skills](https://netease-youdao/LobsterAI PR #1545)**  
  Fixes a bug where changed skill lists were not reflected in the Active Skill Badges until switching agents. Fixes #1502.

- **[#1546 – feat(engine-overlay): 引擎启动超时后显示取消启动和查看日志按钮](https://netease-youdao/LobsterAI PR #1546)**  
  Adds cancel-start and view-log escape buttons when the OpenClaw engine startup hangs beyond 30 seconds.

- **[#1553 – feat(cowork): Write 工具文件卡片及分屏预览面板](https://netease-youdao/LobsterAI PR #1553)**  
  Implements inline FileCard for Write tool output and a resizable preview panel for Markdown/HTML/SVG/images. Closes #1552.

- **[#1555 – fix: npm run dist:mac:x64打包失败](https://netease-youdao/LobsterAI PR #1555)**  
  Fixes macOS packaging failure caused by `sha256sum` unavailability, replacing it with `shasum`.

- **[#1557 – feat(settings): 设置面板侧栏支持搜索筛选分类](https://netease-youdao/LobsterAI PR #1557)**  
  Adds search/filter to the settings sidebar with NFKC-normalized multi-keyword matching.

- **[#1560 – fix: 修复Agent编辑后点击原Agent无法切换回聊天界面的问题](https://netease-youdao/LobsterAI PR #1560)**  
  Fixes the issue where clicking the currently selected Agent after editing failed to switch back to the chat view.

Because these PRs are listed as closed/stale, project maintainers should verify whether their content has been merged elsewhere or whether they need to be re-opened.

---

## 4. Community Hot Topics

The most active items by comment count are both issues:

- **[#1556 – [OPEN] [stale] doc bug: IM机器人配置指南404](https://netease-youdao/LobsterAI Issue #1556)**  
  2 comments. The official IM bot configuration guide is returning HTTP 404. This blocks users from setting up IM integrations.

- **[#1552 – [OPEN] [stale] feat: AI产物 Markdown 预览及文件卡片支持](https://netease-youdao/LobsterAI Issue #1552)**  
  1 comment. Users want inline file cards and preview capability after Write-tool file creation, instead of forcing the Agent to read the entire file into chat.

Underlying needs: documentation reliability and a smoother AI-generated content review workflow. The proposed solution for #1552 already exists in PR #1553, but that PR is currently closed/stale rather than merged.

---

## 5. Bugs & Stability

Ranked by estimated severity:

1. **Documentation 404 – IM Bot Guide**  
   [Issue #1556](https://netease-youdao/LobsterAI Issue #1556)  
   Public documentation link broken. Low code risk but high user friction for IM setup. No fix PR observed yet.

2. **Agent skill badges not syncing**  
   [PR #1545](https://netease-youdao/LobsterAI PR #1545)  
   Edited skills didn’t show in Active Skill Badges until switching agents. A fix exists but the PR is closed/stale.

3. **Scheduled task notification cannot be reverted to “no notification”**  
   [Open PR #1547](https://netease-youdao/LobsterAI PR #1547)  
   After saving a task with “not notify”, re-editing still shows an old IM channel. A two-line fix has been proposed but remains open.

4. **macOS x64 packaging failure**  
   [PR #1555](https://netease-youdao/LobsterAI PR #1555)  
   `npm run dist:mac:x64` failed because macOS lacks `sha256sum`. Compatibility fix proposed but closed/stale.

5. **Agent switch regression before/after editing**  
   [PR #1560](https://netease-youdao/LobsterAI PR #1560)  
   Clicking the already-selected Agent after editing would not return to the chat interface. Fix proposed but closed/stale.

---

## 6. Feature Requests & Roadmap Signals

- **AI artifact preview & file cards**  
  [Issue #1552](https://netease-youdao/LobsterAI Issue #1552) and [PR #1553](https://netease-youdao/LobsterAI PR #1553)  
  High-value UX improvement: after Write tool calls, show a visual FileCard and a preview pane for Markdown/HTML/SVG/code/images. If this moves to the next release, it would substantially improve writing and document-generation workflows.

- **Engine startup timeout escape**  
  [PR #1546](https://netease-youdao/LobsterAI PR #1546)  
  Users need a way out of a stuck OpenClaw engine startup without waiting the full 5-minute hard timeout. Cancel/log buttons are a small but practical roadmap addition.

- **Settings panel search**  
  [PR #1557](https://netease-youdao/LobsterAI PR #1557)  
  The settings dialog has many tabs; adding search/filter is a quality-of-life improvement likely to be appreciated as the product grows.

---

## 7. User Feedback Summary

- **Documentation frustration**: Broken IM setup link indicates a need for automated docs-link validation and better release hygiene around guides.
- **File preview demand**: Users find it inefficient and disruptive when AI-generated Markdown/code must be echoed into the chat to be reviewed. The request for file cards plus preview panel is a clear signal that “chat-only output” is not adequate for serious content production.
- **Configuration friction**: Skill badges not updating and scheduled-task notification state being sticky are small but confusing UI bugs that degrade trust in the Agent configuration panel.
- **Packaging pain**: Mac users hit a Unix-tool mismatch (`sha256sum` vs `shasum`) during packaging; this is a cross-platform portability issue that should be fixed in the build toolchain.

Overall, users are engaged with agent configuration, IM integration, and AI artifact workflows, and expect smoother, more predictable behavior.

---

## 8. Backlog Watch

These items need maintainer attention:

- **[Issue #1556 – IM robot config guide 404](https://netease-youdao/LobsterAI Issue #1556)**  
  Open since April 2026, still unresolved. Small docs fix, but affects onboarding.

- **[Issue #1552 – Markdown preview / file card support](https://netease-youdao/LobsterAI Issue #1552)**  
  Open since April, with a corresponding PR (#1553) that is closed/stale. This should be triaged and either revived or explicitly closed as out of scope.

- **[PR #1547 – Scheduled task notification cannot revert to "no notification"](https://netease-youdao/LobsterAI PR #1547)**  
  Open and not labeled stale. The fix is small and already described; needs review/merge.

- **[PR #1545 / #1546 / #1555 / #1557 / #1560 – stale-closed PRs](https://netease-youdao/LobsterAI PR #1545)**  
  All represent completed-looking fixes/features that have been closed as stale. They should be re-evaluated for merge or have their status clarified to avoid losing valuable work.

Project health signal: feature work is plentiful and community-contributed, but the large number of stale-closed PRs and months-old open issues suggests the maintainer review pipeline is a bottleneck.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-21

## 1. Today's Overview
Moltis saw a security-focused, moderately active 24 hours: 1 issue was closed, 8 PRs were updated, 4 PRs remain open, and release `20260820.01` was published. The most notable event was the closure of a critical vault authentication bug, with the corresponding fix PR also moving to closed/merged status. Open PRs cover sandbox image validation, Snyk Agent pinning, WhatsApp Markdown rendering, and Windows shell-hook support. Overall project health looks stable, with maintainers actively addressing security hardening and channel-platform correctness.

## 2. Releases
- **20260820.01** — published 2026-08-20 ([release](https://github.com/moltis-org/moltis/releases/tag/20260820.01))
  - No release notes, breaking-change details, or migration instructions were included in the provided data.

## 3. Project Progress
The following PRs were closed/merged in the last 24 hours:

- **#1216** — Require authentication for vault unlock and recovery ([PR](https://github.com/moltis-org/moltis/pull/1216))  
  Fixes the CWE-306 missing-authentication issue from #1177 by adding the `AuthSession` extractor to `POST /api/auth/vault/unlock` and `POST /api/auth/vault/recovery`.

- **#1217** — Treat a reply to the bot as addressing it ([PR](https://github.com/moltis-org/moltis/pull/1217))  
  Fixes WhatsApp group handling where replying to a bot message was not considered an @ mention even in `mention_mode = "mention"`.

- **#1218** — Stop hardcoding the WhatsApp push name to "Moltis" ([PR](https://github.com/moltis-org/moltis/pull/1218))  
  Removes the hardcoded push name so bot identities like "Ada" are displayed correctly in WhatsApp group chats.

- **#1219** — Make the untrusted-turn tool ceiling configurable ([PR](https://github.com/moltis-org/moltis/pull/1219))  
  Addresses a regression from #1170 by allowing the deny-all tool policy for untrusted turns to be configured, instead of hardcoded for every non-operator public conversation.

## 4. Community Hot Topics
No issues or PRs in the last 24 hours have visible comment/reaction counts, so activity ranking is based on updates and security significance.

- **#1177 — Vault Unlock/Recovery Endpoints Missing Authentication** ([Issue](https://github.com/moltis-org/moltis/issues/1177))  
  Closed after being open since 2026-07-30. This was the single issue updated in the period and was a security-critical bug. The underlying need — protecting vault credential access from unauthenticated remote brute-force — was addressed by PR #1216.

- **#1222 — Validate sandbox image requests** ([PR](https://github.com/moltis-org/moltis/pull/1222), open)  
  Security hardening around image references and package names before container/Dockerfile use, with package checks and image builds restricted to operator admins.

- **#1221 — Pin Snyk Agent Scan** ([PR](https://github.com/moltis-org/moltis/pull/1221), open)  
  Supply-chain defense by pinning Snyk Agent Scan to version `0.5.17` via `uvx` and removing the standalone `mcp-scan` fallback.

## 5. Bugs & Stability
Ranked by severity:

- **Critical / Security — #1177: Missing Authentication on Vault Unlock/Recovery** ([Issue](https://github.com/moltis-org/moltis/issues/1177))  
  Any unauthenticated remote caller could attempt to brute-force vault unlock/recovery. **Fixed by PR #1216**, which is now closed/merged.

- **High / Security — #1222: Sandbox image request validation** ([PR](https://github.com/moltis-org/moltis/pull/1222))  
  Open PR addressing unsafe image reference and package name inputs. Not yet merged, but actively validated with `cargo test`.

- **High / Supply Chain — #1221: Snyk Agent Scan pinning** ([PR](https://github.com/moltis-org/moltis/pull/1221))  
  Open PR to prevent supply-chain attacks by pinning the Snyk Agent version.

No new crash or regression bug reports appeared in the last 24 hours.

## 6. Feature Requests & Roadmap Signals
There were no user-issued feature requests in the latest data, but two PRs signal likely roadmap areas:

- **Configurable tool ceilings for channels** — #1219 ([PR](https://github.com/moltis-org/moltis/pull/1219))  
  Makes untrusted-turn tool policies configurable instead of hardcoded, indicating future support for more granular audience/operator tool permissions.

- **WhatsApp content parity** — #1220 ([PR](https://github.com/moltis-org/moltis/pull/1220), open)  
  Converts model-generated Markdown to WhatsApp-native markup for outbound text and media captions while preserving original Markdown in session history/web UI. This suggests ongoing investment in messaging-channel formatting and UX parity.

## 7. User Feedback Summary
Direct user pain points surfaced through PRs and the closed issue:

- **Vault security concern** (#1177): missing authentication could allow remote brute-force attacks — a serious user-facing trust issue, now fixed.
- **WhatsApp identity confusion** (#1218): a bot configured with another name appeared as "Moltis" for non-contacts; fixed.
- **WhatsApp reply addressing** (#1217): users replying to bot messages were ignored in mention-only groups; fixed.
- **Windows shell hooks** (#468): `sh -c` is unavailable on Windows, so shell hooks fail; an open PR proposes using `cmd.exe /C`.

No explicit satisfaction/dissatisfaction signals were present in the data.

## 8. Backlog Watch
- **#468 — Use cmd.exe on Windows for shell hooks** ([PR](https://github.com/moltis-org/moltis/pull/468))  
  Open since 2026-03-23, this is the oldest PR in the current active set. It directly addresses Windows compatibility and has been tested on Windows 10, but still needs maintainer attention/review.

Other open PRs from the current batch are recent and still in validation: #1222, #1221, and #1220.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-21

Data source: `agentscope-ai/QwenPaw` (CoPaw issue/PR links below)

---

## 1. Today's Overview

CoPaw is in a high-activity maintenance and feature phase: **27 issues** were updated in the last 24 hours (14 open / 13 closed), and **50 PRs** were touched (21 open / 29 merged/closed). A new beta, **v2.1.1-beta.1**, was published with console UX and provider-logging improvements. The project shows a healthy mix of community bug reports, first-time contributor PRs, and maintainer-driven performance/security work. The dominant user concerns are task-autonomy reliability, long freezes, network resilience, and session-level corruption risks.

---

## 2. Releases

### [v2.1.1-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.1-beta.1)

Changes included:

- `feat(console)`: improve editor tab overflow navigation — @rayrayraykk ([#6983](https://github.com/agentscope-ai/QwenPaw/pull/6983))
- `fix(providers)`: lower rate limiter init log level — @rayrayraykk ([#6988](https://github.com/agentscope-ai/QwenPaw/pull/6988))
- `chore`: update release notes

No breaking changes or migration notes were included in the provided release notes. This is a beta release, so behavior should be treated as pre-stable.

---

## 3. Project Progress

29 PRs are listed as merged/closed. Notable examples from today's active set:

- **[#6371](https://github.com/agentscope-ai/QwenPaw/pull/6371)** — `fix(file-handling)`: continue downloader fallback after subprocess timeout. Important robustness fix for `wget`/`curl`/`urllib` chain.
- **[#7135](https://github.com/agentscope-ai/QwenPaw/pull/7135)** — `fix(envs)`: preserve corrupt files and write `envs.json` atomically; addresses silent environment-variable loss.
- **[#7172](https://github.com/agentscope-ai/QwenPaw/pull/7172)** — `chore(deps)`: patch vulnerable website/creator dependencies (`vite`, `rollup`, `react-router-dom`, `js-yaml`).
- **[#7174](https://github.com/agentscope-ai/QwenPaw/pull/7174)** — `perf(drivers)`: initialize persistent drivers concurrently to reduce cold-start latency.
- **[#7166](https://github.com/agentscope-ai/QwenPaw/pull/7166)** — `fix(release)`: bundle `qwenpawmail` MCP as a standalone sidecar for frozen builds.
- **[#7161](https://github.com/agentscope-ai/QwenPaw/pull/7161)** — `feat(console)`: add artifacts to assistant response card.
- **[#6880](https://github.com/agentscope-ai/QwenPaw/pull/6880)** — `feat(console)`: unify apps, plugins, and skills under a shared marketplace page.

The overall PR stream indicates work on **startup performance, dependency security, console UX, and release packaging** is moving forward steadily.

---

## 4. Community Hot Topics

Most active issues by comment count:

### [#6921 — Agent stops mid-task without notification](https://github.com/agentscope-ai/QwenPaw/issues/6921) — 10 comments
Open bug: after outputting lines like “Now 2.1, 3.1, 3.2. Let me do all three.”, the agent stops without visible explanation and only continues when the user says “继续”.  
**Underlying need:** users expect the agent to actually execute its stated plan, or at least clearly signal why it paused.

### [#7102 — Freeze longer than 10 minutes](https://github.com/agentscope-ai/QwenPaw/issues/7102) — 9 comments
Closed bug: running GLM 5.3 froze for over 10 minutes with no text tokens or thinking output.  
**Underlying need:** better timeout/streaming feedback and provider-level error recovery.

### [#6643 — Task artifacts should be stored in per-task directories](https://github.com/agentscope-ai/QwenPaw/issues/6643) — 6 comments
Closed feature request: output files currently pile into `media/`, making organization painful.  
**Underlying need:** task-oriented file management and workspace hygiene.

### [#6436 — Automatic model routing](https://github.com/agentscope-ai/QwenPaw/issues/6436) — 4 comments, 1 👍
Open enhancement: route simple turns to small/fast local models, vision inputs to vision models, and hard reasoning to larger models.  
**Underlying need:** cost/latency optimization and more intelligent model selection.

### [#6826 — Assistant message end-time display is wrong](https://github.com/agentscope-ai/QwenPaw/issues/6826) — 4 comments
Closed bug: a 2-minute thinking turn displays as only a few seconds in the UI.  
**Underlying need:** accurate timing/progress visibility in chat history.

---

## 5. Bugs & Stability

Ranked roughly by severity:

1. **[#7168 — `history.db` bloated to 7.6 GB](https://github.com/agentscope-ai/QwenPaw/issues/7168)**  
   `recall_history` expansion can write entire tool outputs into `conversation_history`, and repeated ranges are stored. High severity: can exhaust disk on long-running agents.  
   *No linked fix PR visible yet.*

2. **[#6921 — Agent stops after planning without telling the user](https://github.com/agentscope-ai/QwenPaw/issues/6921)**  
   Multi-step tasks stall unless the user says “continue”. High user impact for autonomous-agent workflows.  
   *No linked fix PR visible yet.*

3. **[#7102 — Freeze longer than 10 minutes](https://github.com/agentscope-ai/QwenPaw/issues/7102)**  
   No tokens/thinking output for minutes with GLM 5.3.  
   *Closed, but the underlying provider-freeze class may still need hardening.*

4. **[#7110 — A single undownloadable image link disables the whole session](https://github.com/agentscope-ai/QwenPaw/issues/7110)**  
   Session becomes unusable until `/clear`.  
   *No visible fix PR yet.*

5. **[#6932 — No automatic recovery after network interruption](https://github.com/agentscope-ai/QwenPaw/issues/6932)**  
   All LLM requests keep failing with `httpx.ConnectTimeout` until manual restart.  
   *No visible fix PR yet.*

6. **[#7162 — `httpx.ReadError` during streaming causes `UNKNOWN_AGENT_ERROR`](https://github.com/agentscope-ai/QwenPaw/issues/7162)**  
   SSE stream interruptions are not retried because `_get_httpx_retryable()` misses `ReadError`.  
   *No visible fix PR yet.*

7. **[#7156 — Embedding health check times out even when backend is warm](https://github.com/agentscope-ai/QwenPaw/issues/7156)**  
   Hardcoded 5s timeout causes degradation to BM25-only retrieval.  
   *Fix candidate exists: [#7133](https://github.com/agentscope-ai/QwenPaw/pull/7133) adds configurable timeout.*

8. **[#7118 — Corrupt `envs.json` silently wipes env vars](https://github.com/agentscope-ai/QwenPaw/issues/7118)**  
   A single bad byte can destroy all stored env vars.  
   *Fix merged/closed: [#7135](https://github.com/agentscope-ai/QwenPaw/pull/7135).*

9. **[#7060 — `view_video` inline-media cap hardcoded at 2 MB](https://github.com/agentscope-ai/QwenPaw/issues/7060)**  
   Provider `max_inline_media_bytes` setting is ignored for videos.  
   *Fix PR in progress: [#7061](https://github.com/agentscope-ai/QwenPaw/pull/7061).*

10. **[#6826 — Assistant message end time inaccurate in console](https://github.com/agentscope-ai/QwenPaw/issues/6826)**  
    UI displays seconds instead of actual minutes for long assistant turns.

---

## 6. Feature Requests & Roadmap Signals

Strong roadmap signals from today's issue/PR activity:

- **[#6436 — Automatic model routing](https://github.com/agentscope-ai/QwenPaw/issues/6436)**  
  Likely a long-term architecture item.
- **[#7013 — Unified tool panel with web preview and interactive terminal](https://github.com/agentscope-ai/QwenPaw/issues/7013)**  
  Points toward a richer “agent workspace” console.
- **[#7182 — Workspace-scoped always-on Skills](https://github.com/agentscope-ai/QwenPaw/issues/7182)**  
  Already has an open implementation: [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183).
- **[#7184 — Agent-level cross-session recall toggle for Scroll](https://github.com/agentscope-ai/QwenPaw/issues/7184)**  
  Privacy/context-control feature for memory.
- **[#7181 — Support `qwen_code` as a third-party agent harness](https://github.com/agentscope-ai/QwenPaw/issues/7181)**  
  Especially requested for users with limited network access.
- **[#7158 — Configurable DingTalk group context modes](https://github.com/agentscope-ai/QwenPaw/issues/7158)**  
  Isolated vs. shared group contexts.
- **[#7159 — QQ group scheduled/active push messages](https://github.com/agentscope-ai/QwenPaw/issues/7159)**  
  Channel automation feature.
- **[#7179 — Optimize agent switcher for many agents](https://github.com/agentscope-ai/QwenPaw/issues/7179)**  
  Small but frequent UX pain point.

Prediction: next minor release is likely to include **always-on Skills** (#7182/#7183), **configurable embedding health-check timeout** (#7133), and the **unified marketplace** (#6880), since those already have concrete PRs moving.

---

## 7. User Feedback Summary

- **Task autonomy is the biggest pain point.** Multiple users report the agent stopping after planning, requiring explicit “continue” prompts.
- **Long freezes and lack of progress visibility** are causing trust issues, especially with third-party providers like GLM.
- **Session-level fragility** is a recurring theme: bad image links, network drops, and `history.db` bloat can disable or degrade long-running sessions.
- **Chinese-speaking desktop users are highly active.** Repeated requests include per-task output folders, preserving Chinese filenames, better agent-switcher UX, VPN support, and clearer naming like “新任务” instead of “新建聊天”.
- **Contributor sentiment appears positive:** multiple first-time-contributor PRs are landing, especially in console, file-handling, and provider compatibility.
- No explicit satisfaction/ praise comments were present in the dataset; the tone is mostly constructive bug reporting and feature requesting.

---

## 8. Backlog Watch

Items that may need maintainer attention due to age, importance, or open status:

- **[#6436 — Automatic model routing](https://github.com/agentscope-ai/QwenPaw/issues/6436)**  
  Open since **2026-07-24**, still just a feature request with 4 comments. Important roadmap item but little maintainer movement visible.

- **[#6921 — Agent stops after planning](https://github.com/agentscope-ai/QwenPaw/issues/6921)**  
  10 comments, open since **2026-08-12**. High user impact; needs a maintainer diagnosis.

- **[#6932 — No auto-recovery after network interruption](https://github.com/agentscope-ai/QwenPaw/issues/6932)**  
  Open since **2026-08-12**, reproducibility reported twice in one day.

- **[#7013 — Unified tool panel / workspace](https://github.com/agentscope-ai/QwenPaw/issues/7013)**  
  Large UX feature, open since **2026-08-14**, no linked PR.

- **[#7061 — Fix video tool-result delivery on OpenAI Responses API](https://github.com/agentscope-ai/QwenPaw/pull/7061)**  
  First-time-contributor PR open since **2026-08-15**; needs review.

- **[#7067 — Console deep-link fix for `/chat/:agentId/:sessionId`](https://github.com/agentscope-ai/QwenPaw/pull/7067)**  
  First-time-contributor PR open since **2026-08-16**; needs review.

- **[#7080 — Optional PowerContext long-term memory backend](https://github.com/agentscope-ai/QwenPaw/pull/7080)**  
  Open since **2026-08-17**, labeled Under Review.

- **[#7119 — Master key file permissions security fix](https://github.com/agentscope-ai/QwenPaw/pull/7119)**  
  Security-relevant PR open since **2026-08-18**; should be prioritized.

- **[#7112 — Self-hosted multi-user Hub](https://github.com/agentscope-ai/QwenPaw/pull/7112)**  
  Large new control-plane feature, open since **2026-08-18**.

---

**Overall health:** CoPaw is active and responsive, with strong community participation and a steady flow of fixes. The main risk area is **long-running agent reliability**: task interruptions, freezes, network recovery, and session corruption are the issues most likely to affect user trust in the product.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-21

## 1. Today's Overview

ZeroClaw is in a high-volume design and review window: **50 issues** and **50 PRs** were updated in the last 24 hours. No new releases were published, and **no PRs were merged or closed** — all 50 PRs remain open, which points to an active but bottlenecked review pipeline. The issue tracker is dominated by architecture RFCs, maintainer decision trackers, and security/sandbox work. Five issues were closed, including #10194 (PR reviewer publishing in-flight results), #10111 (Windows startup error), and #9016 (OpenAI reasoning-effort tool-call failure). Many high-signal items still carry `needs-maintainer-review` or `needs-author-action`, suggesting maintainer capacity is the current limiting factor.

## 2. Releases

No new releases or version tags were published in this window.

## 3. Project Progress

No PRs were merged or closed during the last 24 hours, so no features formally landed. However, several substantial PRs saw continued activity and are close to representing major upcoming changes:

- [#9995](https://github.com/zeroclaw-labs/zeroclaw/pull/9995) – Harden webhook audit exports with credential scrubbing.
- [#9678](https://github.com/zeroclaw-labs/zeroclaw/pull/9678) – Harden Git shell policy argument normalization.
- [#9582](https://github.com/zeroclaw-labs/zeroclaw/pull/9582) / [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) – Enforce host-owned egress policy for WASM plugins and add the egress grant ceremony.
- [#10142](https://github.com/zeroclaw-labs/zeroclaw/pull/10142) – ZeroRelay secure transport and browser enrollment frontdoor.
- [#10119](https://github.com/zeroclaw-labs/zeroclaw/pull/10119) – Make the Rust anti-slop checker a shared PR gate.
- [#10100](https://github.com/zeroclaw-labs/zeroclaw/pull/10100) – Honor `allowed_roots` tiers in the Landlock sandbox.
- [#10093](https://github.com/zeroclaw-labs/zeroclaw/pull/10093) – Isolate manifest-installed plugin subprocesses from the host environment.
- [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197) – Persist interrupted ACP/Code turn progress.
- [#10080](https://github.com/zeroclaw-labs/zeroclaw/pull/10080) – Select Windows Common Controls v6 to fix `TaskDialogIndirect`.
- [#10107](https://github.com/zeroclaw-labs/zeroclaw/pull/10107) – Keep Google STT API keys out of URLs.

Several PRs remain blocked or stacked, which is delaying progress:

- [#10016](https://github.com/zeroclaw-labs/zeroclaw/pull/10016) is stacked on #9995.
- [#8965](https://github.com/zeroclaw-labs/zeroclaw/pull/8965) is stacked on #9563.
- [#10085](https://github.com/zeroclaw-labs/zeroclaw/pull/10085) depends on #10084.
- [#10183](https://github.com/zeroclaw-labs/zeroclaw/pull/10183) is stacked on #10160.
- [#9368](https://github.com/zeroclaw-labs/zeroclaw/pull/9368) has review paused pending #9713.

## 4. Community Hot Topics

The most active issues are architectural RFCs and maintainer-facing trackers. Underlying themes: **runtime ownership, sandbox/security policy, WASM pluginization, and maintainer governance**.

- [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) – RFC: Runtime-owned conversation sessions and transport surface adapters (22 comments). High architectural impact, with `risk:high` and `needs-maintainer-review`.
- [#10118](https://github.com/zeroclaw-labs/zeroclaw/issues/10118) – Tracker: Rust anti-slop policy debt remediation (16 comments). Coordinates cleanup of 307 candidates across 1,078 Rust files.
- [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) – RFC: Decouple memory lifecycle policy from storage backends (14 comments). Long-running design discussion since May.
- [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) – RFC: Realtime speech-to-speech channel for Gemini Live (14 comments). A rewritten broker-contract proposal.
- [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) – Tracker: Maintainer decision queue for RFCs and design issues (13 comments). Indicates decision overload.
- [#9598](https://github.com/zeroclaw-labs/zeroclaw/issues/9598) – RFC: SOP capability permission contract (10 comments). Accepted, targeting v0.9.0.
- [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) – RFC: Granular sandbox policy for filesystem/network restrictions (8 comments).
- [#9990](https://github.com/zeroclaw-labs/zeroclaw/issues/9990) – RFC: Calibrate PR risk and security approval requirements (6 comments). Accepted.
- [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) – RFC: Replace React/Vite web UI with Rust→Wasm framework (5 comments, 1 👍).
- [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) – Move optional channels/tools from compile-time features to runtime WASM plugins (4 comments).

## 5. Bugs & Stability

Ranking by severity and user impact:

- **S1 – Workflow blocked**
  - [#9016](https://github.com/zeroclaw-labs/zeroclaw/issues/9016) – OpenAI tool turns fail when Chat Completions rejects `reasoning_effort` with function tools. Closed during this window.

- **S2 – Degraded behavior**
  - [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) – Interactive agent session caps context at 32,000 tokens despite `max_context_tokens = 131072`. In progress and accepted.
  - [#10106](https://github.com/zeroclaw-labs/zeroclaw/issues/10106) – Exact proxy selectors reject supported transcription services (Groq, OpenAI, Deepgram, AssemblyAI, Google). In progress.
  - [#10194](https://github.com/zeroclaw-labs/zeroclaw/issues/10194) – AI PR reviewer publishes in-flight review results after the PR has already merged. Closed.
  - [#10074](https://github.com/zeroclaw-labs/zeroclaw/issues/10074) – `SECURITY.md` documents a CI Docker job that was removed in April; container checks are now convention. In progress.

- **S3 – Minor**
  - [#10103](https://github.com/zeroclaw-labs/zeroclaw/issues/10103) – ZeroCode Health status values misalign in French and Spanish due to fixed label widths.

- **Startup / installation**
  - [#10111](https://github.com/zeroclaw-labs/zeroclaw/issues/10111) – Windows `TaskDialogIndirect — Entry Point Not Found` in `zeroclaw-desktop.exe`. Duplicate/closed. Fix PR: [#10080](https://github.com/zeroclaw-labs/zeroclaw/pull/10080).

Relevant security/hardening PRs in flight: #10107, #10093, #10016, #9995, #9678, #10100.

## 6. Feature Requests & Roadmap Signals

Issues with `status:accepted` or `status:in-progress` are the strongest near-term roadmap signals:

- [#10168](https://github.com/zeroclaw-labs/zeroclaw/issues/10168) – Enable the stall watchdog by default (`stall_timeout_secs`).
- [#10166](https://github.com/zeroclaw-labs/zeroclaw/issues/10166) – Default `stream_mode` to `partial` so replies stream by default.
- [#10162](https://github.com/zeroclaw-labs/zeroclaw/issues/10162) – Make `plugin install` recovery work when config-entry seeding fails.
- [#10086](https://github.com/zeroclaw-labs/zeroclaw/issues/10086) – Make ZeroCode Logs text selectable and copyable.
- [#10087](https://github.com/zeroclaw-labs/zeroclaw/issues/10087) – Run `memory-postgres` tests in required CI.
- [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) – Move optional channels/tools from compile-time features to runtime WASM plugins.
- [#9598](https://github.com/zeroclaw-labs/zeroclaw/issues/9598) – Define the SOP capability permission contract for v0.9.0.

Larger design proposals still in discussion:

- [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) – Runtime-owned conversation sessions.
- [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) – Gemini Live realtime speech-to-speech channel.
- [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) – Comprehensive WASM plugin architecture.
- [#10025](https://github.com/zeroclaw-labs/zeroclaw/issues/10025) – Ephemeral agent swarms with a crush-style TUI.
- [#10069](https://github.com/zeroclaw-labs/zeroclaw/issues/10069) – Agent Portability.
- [#9810](https://github.com/zeroclaw-labs/zeroclaw/issues/9810) – Load Agent Plugins 1.0 skill and MCP packages.

The simple accepted defaults changes (#10166, #10168) and the plugin egress PR stack (#9582/#9584) are plausible candidates for the next release, while the larger RFCs are still in design and review phase.

## 7. User Feedback Summary

User-reported pain points in this window focus on reliability, install friction, and default behavior:

- **Windows startup failure** is a clear friction point: #10111 reports `TaskDialogIndirect` missing, and the corresponding fix #10080 is already in review.
- **Context handling confusion**: #10068 shows a user configuring 131k context but being hard-capped at 32k in interactive sessions.
- **Provider compatibility**: #10106 reports transcription services being rejected by proxy selector logic, which breaks expected provider support.
- **Documentation trust**: #10074 shows users or contributors noticing `SECURITY.md` describes a CI job that no longer exists.
- **Chat experience defaults**: #10166 and #10168 both imply out-of-the-box behavior is not ideal: replies arrive as one delayed message and stalled turns hang indefinitely.
- **Plugin reliability**: #10162 highlights a real operational risk — plugin install can persist a package but fail during config seeding, leaving the install partially complete.
- **TUI polish**: #10103 and #10086 reflect smaller but visible quality-of-life issues in ZeroCode.

Overall, users appear to value ZeroClaw’s extensibility and are pushing for safer defaults, better Windows support, and more transparent/recoverable plugin operations.

## 8. Backlog Watch

Items needing maintainer attention or author action, especially older or high-risk items:

- [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) – RFC: Decouple memory lifecycle policy from storage backends. Created May 22; 14 comments; `needs-maintainer-review`.
- [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) – RFC: Granular sandbox policy — filesystem and network restrictions. Created May 28; `needs-author-action`.
- [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) – RFC: Replace React/Vite web UI with Rust→Wasm. Created Jun 22; `needs-author-action`, `p3`.
- [#8398](https://github.com/zeroclaw-labs/zeroclaw/issues/8398) – RFC: Plugin permission, config, and secrets model. Created Jun 27; `needs-author-action`.
- [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) – RFC: Realtime speech-to-speech for Gemini Live. Created Jul 6; `needs-maintainer-review`.
- [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) – Maintainer decision queue tracker. Created Jul 4; central coordination point for stalled RFC decisions.
- [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) – RFC: Runtime-owned conversation sessions. Created Jul 28; 22 comments; `needs-maintainer-review`.

High-priority PRs awaiting review or author action:

- [#9582](https://github.com/zeroclaw-labs/zeroclaw/pull/9582) / [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) – Plugin egress policy enforcement and grant ceremony, both `p1`, `risk:high`.
- [#9678](https://github.com/zeroclaw-labs/zeroclaw/pull/9678) – Git shell policy hardening, `p1`, `needs-author-action`.
- [#9637](https://github.com/zeroclaw-labs/zeroclaw/pull/9637) – Guard temporary React Router RSC exception; `do-not-merge`.
- [#8965](https://github.com/zeroclaw-labs/zeroclaw/pull/8965) – Declarative skill auto-activation with provider switch; blocked/stacked since Jul 11.
- [#9368](https://github.com/zeroclaw-labs/zeroclaw/pull/9368) – Count and report retained history in whole turns; review paused pending #9713.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*