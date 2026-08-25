# OpenClaw Ecosystem Digest 2026-08-25

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-24 23:13 UTC

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

# OpenClaw Project Digest — 2026-08-25

## 1. Today's Overview

OpenClaw remains highly active, with 500 issues and 500 PRs updated in the 24-hour window ending 2026-08-25. Of those, 476 issues are open/active and 24 closed, while 425 PRs are open and 75 merged or closed. This suggests a healthy but heavy pipeline, with maintainer attention spread across release validation, reliability bugs, and long-running feature discussions. One new beta release, `v2026.8.1-beta.3`, was published. The most-discussed issue is release validation for the previous beta, while the most severe topics continue to center on message delivery, session-state loss, and process/resource leaks.

## 2. Releases

### v2026.8.1-beta.3
- **Published:** 2026-08-25 (latest release in data)
- **Highlights:**
  - GPT-5.6 Sol, Terra, Luna, and Ultra reasoning support across OpenClaw and the Codex runtime.
  - Control UI first-run setup now continues verified model setup into Custodian and optional channel setup.
  - Puppeteer-compatible CDP relay support for paired Chrome sessions.
  - The release description is truncated in the data at “Explicit ext…”, so additional notes are not available.

No explicit breaking changes or migration notes were included in the captured release data.

## 3. Project Progress

75 PRs were merged or closed during the window. Notable PRs from the captured top set include:

- [fix(release): authorize focused beta evidence (#128371)](https://github.com/openclaw/openclaw/pull/128371) — Closed; resolves a beta.3 release blocker by allowing targeted beta evidence to be authorized.
- [fix(scripts): clean up tsgo process trees on timeout or signal (#123975)](https://github.com/openclaw/openclaw/pull/123975) — Closed; addresses wedged compiler process trees.
- [fix(models): keep Claude CLI OAuth available in Control UI (#125471)](https://github.com/openclaw/openclaw/pull/125471) — Closed; fixes OAuth refresh ownership loss after gateway restart.
- [fix(gateway): keep conversation delivery within agent bindings (#126424)](https://github.com/openclaw/openclaw/pull/126424) — Closed; multi-agent conversation delivery boundary fix across many channels.
- [feat(security): require acknowledgement for install policy warnings (#116489)](https://github.com/openclaw/openclaw/pull/116489) — Closed; adds an acknowledged `warn` state for `security.installPolicy`.

Several high-value PRs remain open and under review/proof, including:

- [fix(infra): prevent $-pattern injection in home directory tilde expansion (#122991)](https://github.com/openclaw/openclaw/pull/122991)
- [fix(codex): keep Computer Use working after desktop updates (#127778)](https://github.com/openclaw/openclaw/pull/127778)
- [fix(gateway): usage.status no longer waits on provider HTTP (#121799)](https://github.com/openclaw/openclaw/pull/121799)
- [fix(anthropic): recover long-context rejections with compact + retry (#111913)](https://github.com/openclaw/openclaw/pull/111913)
- [fix(cron): preserve Codex trigger exec authority (#126496)](https://github.com/openclaw/openclaw/pull/126496)
- [fix(discord): preserve authoritative interaction callback ownership (#117027)](https://github.com/openclaw/openclaw/pull/117027)
- [fix(telegram): prevent duplicate reply images from reaching the agent (#126789)](https://github.com/openclaw/openclaw/pull/126789)
- [fix(memory): search warns about stale index during session catch-up (#128894)](https://github.com/openclaw/openclaw/pull/128894)
- [fix(code-mode): wait dead-ends on a backgrounded shell sessionId (#128886)](https://github.com/openclaw/openclaw/pull/128886)

Overall, the project is advancing on session reliability, auth stability, resource cleanup, and memory correctness.

## 4. Community Hot Topics

The most active issues, ranked by comment count, reveal a community focused on reliability, release readiness, and missing quality-of-life features.

- [Release validation: v2026.8.1-beta.2 (#125626)](https://github.com/openclaw/openclaw/issues/125626) — 18 comments. Release validation issue for the previous beta, with multiple testers needed per the worksheet. Indicates a structured but heavy release-validation process.
- [[Bug]: Subagent completion delivery can be lost on direct-announce timeout, drain, or orphan prune (#67777)](https://github.com/openclaw/openclaw/issues/67777) — 12 comments. P1 message-loss bug; subagent results can be silently dropped under busy or restart conditions.
- [[Bug]: OpenClaw leaks unreaped hook/tool child processes, causing zombie accumulation (#97616)](https://github.com/openclaw/openclaw/issues/97616) — 9 comments, 1 👍. Long-running process hygiene issue.
- [Models: fully dynamic model discovery (OpenRouter + beyond) (#10687)](https://github.com/openclaw/openclaw/issues/10687) — 9 comments, 3 👍. Community strongly wants dynamic model catalogs rather than static generated lists.
- [Feature Request: Agent-triggered context compaction (self-compact tool) (#6757)](https://github.com/openclaw/openclaw/issues/6757) — 8 comments, 2 👍. Agents want to manage their own context compaction.
- [Beta-tagged update can leave official external plugins on latest (#97680)](https://github.com/openclaw/openclaw/issues/97680) — 8 comments, 1 👍. Plugin versioning bug with beta tags.
- [Feature: Self-hosted STT/TTS provider support in webchat (#45508)](https://github.com/openclaw/openclaw/issues/45508) — 7 comments, 2 👍. Webchat voice uses browser APIs instead of gateway-configured TTS/STT.
- [Feishu/Telegram channel dispatch fails: runChannelInboundEvent requires runDispatchLifecycle (#114020)](https://github.com/openclaw/openclaw/issues/114020) — 7 comments. High-severity channel dispatch regression.

The underlying needs are clear: users want no message loss, no leaked processes, dynamic model lists, and the ability for agents to self-regulate context and voice behavior.

## 5. Bugs & Stability

Several reliability defects are currently open, with P0s and P1s concentrated in delivery, state loss, and resource leaks.

### P0 / Critical
- [🚨 URGENT: iOS app update breaks Talk Mode and chat (#108520)](https://github.com/openclaw/openclaw/issues/108520) — iOS app connects to gateway but features are nonfunctional. Needs info; no linked fix PR visible.
- [Bug: Skill Workshop Apply overwrites SKILL.md with proposal text verbatim, data loss (#107707)](https://github.com/openclaw/openclaw/issues/107707) — P0, stale, with linked PR open. Skill content can be destroyed by applying a proposal.

### P1 / High
- [Subagent completion delivery can be lost (#67777)](https://github.com/openclaw/openclaw/issues/67777) — Message loss under drain/timeout/orphan conditions.
- [OpenClaw leaks unreaped hook/tool child processes (#97616)](https://github.com/openclaw/openclaw/issues/97616) — Zombie accumulation and runtime degradation.
- [Feishu/Telegram channel dispatch fails (#114020)](https://github.com/openclaw/openclaw/issues/114020) — `runChannelInboundEvent` requires `runDispatchLifecycle`.
- [Skill Workshop update apply overwrites live skill description (#125570)](https://github.com/openclaw/openclaw/issues/125570) — Silently breaks skill routing.
- [Feishu streaming card content delivery bugs (#77685)](https://github.com/openclaw/openclaw/issues/77685) — Final text loss, stale content, duplication.
- [Visible inbound channel turn can be silently dropped (#112259)](https://github.com/openclaw/openclaw/issues/112259) — Zero-payload dispatch has no retry or dead-letter.
- [Telegram durable outbound deliveries stuck in send_attempt_started (#126246)](https://github.com/openclaw/openclaw/issues/126246) — Replies lost on restart.
- [Sandbox skills bind-mount creates root-owned /workspace/.openclaw (#126631)](https://github.com/openclaw/openclaw/issues/126631) — Locks out uid 1000 sandbox user.
- [genericRepeat critical/circuit-breaker never fires when exec results vary slightly (#93917)](https://github.com/openclaw/openclaw/issues/93917) — Loop detection can miss varied outputs.
- [Codex Apps plugin discovery causing excessive disk I/O (#99071)](https://github.com/openclaw/openclaw/issues/99071) — Repeated reads of plugin files during a single request.
- [Denying the write tool silently disables memory persistence (#126906)](https://github.com/openclaw/openclaw/issues/126906) — Agent reports success for saves that never happen.
- [maxActiveTranscriptBytes loops compaction forever when compacted transcript stays above threshold (#126900)](https://github.com/openclaw/openclaw/issues/126900) — Channel wedges behind repeated compaction.
- [exec: $SHELL zsh spawned with interactive EQUALS/NOMATCH expansions (#126521)](https://github.com/openclaw/openclaw/issues/126521) — `echo ===` fails and kills command chain.
- [Custom openai-completions omitted maxTokens still defaults to 8192 (#126458)](https://github.com/openclaw/openclaw/issues/126458) — Thinking truncates tool-call JSON.
- [github-copilot: copilot-developer-cli integration-id breaks GHE data-residency tenants (#127287)](https://github.com/openclaw/openclaw/issues/127287) — Needs config escape hatch.
- [Remote extension pairing: gateway rejects browser.request ~10ms after starting relay (#127728)](https://github.com/openclaw/openclaw/issues/127728) — Extension cannot attach in time.
- [beta.7 field report: 6 reliability defect classes (#128067)](https://github.com/openclaw/openclaw/issues/128067) — Production-style report covering persistence, delivery, restart-recovery.
- [Orphaned node server.js worker processes accumulate (#86119)](https://github.com/openclaw/openclaw/issues/86119) — After subagent/cron embedded runs.
- [Codex commentary not delivered to Telegram (#111944)](https://github.com/openclaw/openclaw/issues/111944) — Progress/block streaming missing.
- [AgentSelectionRequiredError floods logs under explicit multi-agent ownership (#126360)](https://github.com/openclaw/openclaw/issues/126360) — Logbook plugin and Control UI RPCs lack agentId target.

### Regressions / Provider Issues
- [memory status --index and --deep fail with “Unknown memory embedding provider: google” (#90786)](https://github.com/openclaw/openclaw/issues/90786) — Regression on 2026.6.1.
- [Custom provider sharing baseUrl with built-in provider still broken (#82020)](https://github.com/openclaw/openclaw/issues/82020) — Regression from 4.29.

Many of these have linked open PRs or are labeled with `clawsweeper:linked-pr-open`, but a significant number still await maintainer review or product decisions. The overall stability picture is of a project with aggressive feature velocity and a long tail of reliability debt.

## 6. Feature Requests & Roadmap Signals

Strong feature signals in the current issue set include:

- [Fully dynamic model discovery (OpenRouter + beyond) (#10687)](https://github.com/openclaw/openclaw/issues/10687) — Static model catalogs are a growing pain point; likely to receive attention next.
- [Agent-triggered context compaction (self-compact tool) (#6757)](https://github.com/openclaw/openclaw/issues/6757) — Agents filing their own feature requests indicates real autonomous usage.
- [Self-hosted STT/TTS provider support in webchat (#45508)](https://github.com/openclaw/openclaw/issues/45508) — Voice should respect `openclaw.json` TTS/STT config.
- [Prune stale orphaned sessions from Dashboard Sessions (#49259)](https://github.com/openclaw/openclaw/issues/49259) — Cleanup of dead Telegram/Discord sessions.
- [Config option to suppress transient tool error warnings (#39406)](https://github.com/openclaw/openclaw/issues/39406) — UX noise reduction.
- [Built-in pace-aware rate limiting for autonomous agents (#45771)](https://github.com/openclaw/openclaw/issues/45771) — Needed for autonomous loops.
- [Decouple mode="session" from thread binding requirement (#53548)](https://github.com/openclaw/openclaw/issues/53548) — Flexible ACP session spawning.
- [Trigger model fallback on context length exceeded (#9986)](https://github.com/openclaw/openclaw/issues/9986) — Fallback should trigger on context overflow, not only API errors.
- [Human-readable Telegram topic names in session dropdown (#7406)](https://github.com/openclaw/openclaw/issues/7406) — Small but high-visibility UX fix.
- [Improve Control UI for Multi-Agent + Subagent Orchestration (#52803)](https://github.com/openclaw/openclaw/issues/52803) — Hierarchy, bulk ops, scalability.
- [Cron job auto-retry on failure (#49740)](https://github.com/openclaw/openclaw/issues/49740) — Failed daily crons should retry sooner.
- [Configurable request labels for Gemini API calls (#50205)](https://github.com/openclaw/openclaw/issues/50205) — GCP billing cost attribution.

Most of these are P2/P3 and marked `needs-product-decision`. The next beta is likely to contain more work on model-provider flexibility, session/memory reliability, and control-plane UX rather than entirely new surfaces.

## 7. User Feedback Summary

Users are deeply engaged with OpenClaw, often filing autonomous, agent-authored issues with detailed repros and production evidence. The strongest pain points are:

- **Message loss and delivery failures**: Telegram, Feishu, QQBot, and generic channel paths all have open delivery bugs. Users lose replies, progress updates, and even whole turns.
- **Session-state fragility**: Compaction loops, orphaned sessions, lost subagent completions, and session dropdown problems are common themes.
- **Process/resource leaks**: Zombie processes, orphaned `node server.js` workers, and excessive disk I/O suggest operational instability under sustained use.
- **Silent failures**: Several issues describe failures that are invisible to the user or the agent, e.g., memory persistence disabled after tool deny, context fallback not triggering, and skill routing broken without warning.
- **Auth/provider regressions**: Custom providers sharing a baseUrl, OAuth refresh failures, and GHE Copilot integration-id issues are recurring sources of frustration.
- **Release validation burden**: The active release-validation issue with 18 comments shows a structured but operator-heavy process, and later beta field reports (e.g., #128067) suggest users are still finding reliability defect classes after release.

Satisfaction signals are mixed: users appreciate the project’s autonomy and feature velocity, but the volume of P1 reliability bugs and long-standing open issues indicates impatience with stability. The detailed, high-quality bug reports are a strong sign of an invested power-user community.

## 8. Backlog Watch

The following issues and PRs have been open for a long time or are otherwise at risk of stalling without maintainer attention:

- [Models: fully dynamic model discovery (#10687)](https://github.com/openclaw/openclaw/issues/10687) — Created 2026-02-06; 3 👍; needs product decision and maintainer review.
- [Feature Request: Agent-triggered context compaction (#6757)](https://github.com/openclaw/openclaw/issues/6757) — Created 2026-02-02; needs product decision.
- [Subagent completion delivery can be lost (#67777)](https://github.com/openclaw/openclaw/issues/67777) — Created 2026-04-16; P1 message-loss issue that remains open.
- [Feature: Self-hosted STT/TTS provider support in webchat (#45508)](https://github.com/openclaw/openclaw/issues/45508) — Created 2026-03-13; needs product decision.
- [OpenClaw leaks unreaped hook/tool child processes (#97616)](https://github.com/openclaw/openclaw/issues/97616) — Created 2026-06-29; needs maintainer review and live repro.
- [Visible inbound channel turn can be silently dropped (#112259)](https://github.com/openclaw/openclaw/issues/112259) — Created 2026-07-21; P1 message-loss issue needing live repro.
- [github-copilot integration-id breaks GHE data-residency (#127287)](https://github.com/openclaw/openclaw/issues/127287) — Created 2026-08-21; needs product decision and live repro.
- [fix(auth): re-seed only the tombstoned OAuth target (#112932)](https://github.com/openclaw/openclaw/pull/112932) — Waiting on author since July 2026.
- [fix(ui): avoid session catalog refresh storms (#123535)](https://github.com/openclaw/openclaw/pull/123535) — Waiting on author since August 2026.
- [feat(macos): default remote connections to WSS (#121982)](https://github.com/openclaw/openclaw/pull/121982) — Waiting on author.
- [fix(qa): reserve Matrix no-reply cleanup budget (#127280)](https://github.com/openclaw/openclaw/pull/127280) — Waiting on author.
- [fix(agents): bound auth refresh without releasing token ownership (#93952)](https://github.com/openclaw/openclaw/pull/93952) — Needs real-behavior proof; P1 auth-boundary risk.

These items represent a mix of user-facing feature requests and maintainer-blocked PRs. The highest-risk backlog items are P1 message-loss bugs and auth/provider regressions, which should be prioritized ahead of new feature work to improve overall project health.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-08-25 | **Data window:** 24 hours ending 2026-08-25

---

## 1. Ecosystem Overview

The personal AI assistant open-source landscape is consolidating around a common architecture: a gateway/control-plane core that brokers model access, channel integrations (Telegram, Slack, Discord, Feishu, WhatsApp), session/memory persistence, and tool/skill execution. The "Claw" lineage now spans a dozen projects — from the reference implementation (OpenClaw) to lightweight variants (NanoClaw, PicoClaw, NullClaw, ZeptoClaw) and security/enterprise forks (ZeroClaw, IronClaw) — indicating a healthy but fragmenting ecosystem. Across all projects, the dominant engineering themes are identical: message-delivery reliability, session-state persistence, resource-leak containment, and provider/model flexibility. Feature velocity remains high everywhere, but reliability debt is accumulating faster than it is being retired, particularly in the largest projects. Community demand is shifting from raw capability toward trust: no lost messages, no silent failures, transparent cost/context accounting, and OpenAI-ecosystem interoperability.

---

## 2. Activity Comparison

Activity figures reflect the 24-hour digest window (issues/PRs *updated*; closed/merged shown in parentheses where available).

| Project | Issues Updated | PRs Updated | Release (window) | Health Score* |
|---|---|---|---|---|
| **OpenClaw** | 500 (24 closed) | 500 (75 merged/closed) | v2026.8.1-beta.3 | 6.5 / 10 |
| **NanoBot** | 8 | 26 (12 merged/closed) | None | 8.5 / 10 |
| **Hermes Agent** | 50 (4 closed) | 50 (3 merged/closed) | None | 5.5 / 10 |
| **PicoClaw** | 2 | 3 (2 merged/closed) | None | 6.5 / 10 |
| **NanoClaw** | 3 (1 closed) | 21 (3 merged/closed) | **v2.3.0** | 8.0 / 10 |
| **NullClaw** | 2 | 1 | None | 3.0 / 10 |
| **IronClaw** | 22 (9 closed) | 32 (15 merged/closed) | None | 8.0 / 10 |
| **LobsterAI** | 3 (stale-bot closures) | 10 (10 merged/closed) | None | 7.0 / 10 |
| **Moltis** | 2 (2 closed) | 16 (16 merged/closed) | **20260824.01** | 8.5 / 10 |
| **CoPaw (QwenPaw)** | 50 (19 closed) | 46 (26 merged/closed) | v2.1.1-beta.2 | 6.5 / 10 |
| **ZeptoClaw** | 1 | 0 | None | 5.0 / 10 |
| **ZeroClaw** | 50 (7 closed) | 50 (5 merged/closed) | None | 7.0 / 10 |

*\*Health score composites: maintainer responsiveness (issue-to-fix latency), severity of open bugs (P0/P1 count), release cadence, and backlog drift. Qualitative, not a formal metric.*

**Notable observations:**
- **Highest velocity:** OpenClaw, Hermes, CoPaw, ZeroClaw — all at 50+ issues and 50+ PRs touched per day.
- **Best health-to-activity ratio:** Moltis and NanoBot — high merge rates, few severe open bugs, same-day fix PRs.
- **Concerning:** NullClaw (blocking pairing-code regression untriaged, 70-day-old Dependabot PR) and Hermes (two P1 crashes without fix PRs, 400+ open timeout/hang backlog).

---

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Largest community and mindshare:** 500 issues + 500 PRs updated daily is 10× the activity of mid-tier projects (NanoBot, Moltis) and equal to the combined activity of Hermes + CoPaw + ZeroClaw. It is the definitive reference implementation.
- **Broadest surface coverage:** GPT-5.6 family support (Sol/Terra/Luna/Ultra) across both OpenClaw and Codex runtime; Puppeteer-compatible CDP relay; Control UI spanning first-run setup, Custodian, and channel onboarding — a platform, not a single-surface agent.
- **Battle-tested release process:** Structured beta-release validation (#125626) and field-report-driven defect tracking (#128067) show mature quality gates, though the burden on maintainers is visible.
- **Reliability investment:** Active PR pipeline directly targets message-delivery boundaries (multi-agent binding, Telegram dedupe, Discord callback ownership), auth stability (OAuth refresh re-seeding), and resource cleanup (tsgo process trees, hook/tool child processes).

**Technical approach differences:** OpenClaw is a heavy, monolithic gateway + Control UI + Codex runtime. Peers are diverging toward leaner stacks: NanoBot (zero-token conditional triggers, FTS5 search, lightweight gateway), Hermes (Electron Desktop + WS-only server simplification), ZeroClaw (WebSocket-native, OpenAI-compatible roadmap). OpenClaw's breadth is its moat, but it carries the largest reliability debt: P0/P1 issues in iOS Talk Mode, skill-workshop data loss, delivery loss, and zombie processes.

**Community size comparison:** OpenClaw's issue/PR churn is 10–60× any single peer. Hermes, CoPaw, and ZeroClaw are the only projects operating in the same order of magnitude. The long tail (ZeptoClaw, NullClaw) is effectively single-maintainer or hobbyist scale.

---

## 4. Shared Technical Focus Areas

Cross-project requirements emerging independently in multiple repos:

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **Message-delivery guarantees** | OpenClaw, Hermes, CoPaw, NanoBot, PicoClaw, Moltis, ZeroClaw | No silent drops, no duplicate replies, delivery resumes after restart, dead-letter/retry paths, subagent completion delivery, interleaved streaming preserved |
| **Session-state persistence & restore** | OpenClaw, Hermes, CoPaw, NanoClaw, LobsterAI | Cross-session identity isolation, restore from remote gateways, crash-safe task ledgers, compaction loops fixed, session catalog refresh without storms |
| **Process/resource-leak containment** | OpenClaw, CoPaw, IronClaw, LobsterAI | Zombie child processes, orphaned workers, unbounded memory growth (CoPaw: 20GB+ backend over 2 days), SQLite write-amplification |
| **Provider/model flexibility** | OpenClaw, NanoBot, CoPaw, Moltis, ZeroClaw, NullClaw | Dynamic model discovery, per-channel model routing, subscription OAuth (Grok), custom/self-hosted endpoints, provider-fallback correctness |
| **Context/token accounting** | Hermes, LobsterAI, ZeroClaw, OpenClaw | Reasoning-content undercounting, configurable context/output windows, context-overflow fallback triggers, cost/ cache transparency |
| **Agent-created skill trust** | Hermes, OpenClaw, LobsterAI, CoPaw | Correctness guarantees for self-created skills, skill install paths, skill-routing integrity, permission-scoped skill preload |
| **macOS/Windows setup reliability** | NanoClaw, Hermes, ZeroClaw | Node version floors vs. native module segfaults, symlink path handling, updater silent no-ops, Windows test stability |
| **Ecosystem interop** | ZeroClaw, Hermes, Moltis, OpenClaw | OpenAI Chat Completions-compatible surfaces, OpenAI-safe tool schemas, image delivery over OpenAI protocol, browser-hosted UIs |
| **Automation ops** | NanoBot, CoPaw, OpenClaw | Zero-token conditional triggers, cron result routing, heartbeat model override, pace-aware rate limiting, retry-on-failure |

---

## 5. Differentiation Analysis

| Project | Core Focus | Target Users | Architectural Signature |
|---|---|---|---|
| **OpenClaw** | Reference gateway/everything-platform | Power users, self-hosters, developers | Monolithic gateway + Control UI + Codex runtime; broadest channel/model/plugin matrix |
| **Hermes Agent** | Desktop-first agent workspace | Professionals, desktop power users | Electron Desktop + agent-core; unified deadline layer to kill the timeout/hang class; Collective Wisdom skill-sharing stack |
| **NanoBot** | Lean, token-efficient automation | Ops-minded users, automation builders | Zero-token conditional triggers, FTS5 session search, unified provider usage accounting, Langfuse tracing |
| **ZeroClaw** | Security-hardened agent runtime | Security-sensitive / enterprise users | S0 delegate-privilege fixes, filesystem-mutation confinement, OpenAI-compatible RFC, heavy CI gating |
| **CoPaw (QwenPaw)** | Chinese-ecosystem multi-agent platform | Chinese-market users, teams | Deep DingTalk/WeChat/Feishu integration, multimedia Creator, agent teams, per-channel models |
| **IronClaw** | Product-quality agent platform | Near AI ecosystem, product teams | Dogfooding epics, CI expedite program, onboarding suggestions, Rust + WebUI polish |
| **Moltis** | Provider/enterprise breadth | Self-hosters, enterprise | xAI Grok subscription OAuth, Browserless/Obscura, WhatsApp file support, Apple container sandboxing |
| **LobsterAI** | Collaboration + library UX | Chinese-market knowledge workers | Cowork/IM features, artifact/library lifecycle, cross-platform thumbnails |
| **NanoClaw / PicoClaw / NullClaw / ZeptoClaw** | Lightweight Claw variants | Hobbyists, minimal deployments | Small surfaces, occasional maintenance bursts; NullClaw (Zig), ZeptoClaw (CLI REPL) |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapid iteration (high throughput, active maintainers):**
- **OpenClaw, Hermes, CoPaw, ZeroClaw, IronClaw** — 20–500 issues/PRs daily, multiple high-severity items in flight, structured roadmaps. These are maturing but carrying reliability debt proportional to their feature velocity.
- **NanoBot, Moltis** — Smaller but exceptionally responsive; same-day fix PRs and health-positive merge rates. Best momentum-to-debt ratio in the ecosystem.

**Tier 2 — Steady consolidation:**
- **LobsterAI, NanoClaw, PicoClaw** — Shipping releases or steady polish (LobsterAI: 10 PRs merged; NanoClaw: v2.3.0 with careful backwards compatibility). Bug-fix consolidation and cleanup mode rather than new surface expansion.

**Tier 3 — Quiet / stabilizing:**
- **NullClaw, ZeptoClaw** — Near-dormant. NullClaw has a blocking new-user regression (#992) with no maintainer response; ZeptoClaw had a single well-scoped REPL UX issue and zero code activity. Neither is dangerous, but both risk contributor attrition.

**Key maturity signals:** The ecosystem is bifurcating into "platform-scale with reliability debt" (OpenClaw, Hermes, CoPaw) and "lean with fast feedback" (NanoBot, Moltis). Projects with structured release validation (OpenClaw), dogfooding cadences (IronClaw), and stale-bot hygiene (LobsterAI) are demonstrating the process maturity that the smaller projects lack.

---

## 7. Trend Signals

Extracted from community feedback across all 12 projects, ranked by likely impact on AI agent developers:

1. **OpenAI-protocol compatibility is the next adoption accelerant.** ZeroClaw's accepted Chat Completions RFC (#8603, 24 comments), Hermes' OpenWebUI image-delivery gap (#7895), and Moltis' OpenAI-safe schema PR (#1232) all point the same direction: agents must become drop-in backends for the existing OpenAI SDK/client ecosystem (Open WebUI, LobeChat, Continue.dev, Aider, LangChain).

2. **Message-delivery guarantees are table stakes.** No silent drops, no lost subagent results, no duplicate replies, no restart-orphaned messages. The volume of P1 delivery bugs across OpenClaw, CoPaw, Hermes, and NanoBot signals that users are running these agents in production, where a missed Telegram reply is a failed workflow.

3. **Session identity and context are the top reliability battleground.** Cross-session message routing, compaction loops, context-window undercounting (reasoning models), and forced 32k compaction despite 131k configured limits are eroding trust. Expect a wave of "session identity freeze" and "token-accounting correctness" fixes across all major projects.

4. **Zero-token and low-cost operation is a rising demand.** NanoBot's conditional-trigger runtime and heartbeat `model_override`, plus Hermes' +58% cost comparison report against Reasonix, show users optimizing for cost per completed task, not just capability. Token-free automation and cache-hit visibility will differentiate the next generation.

5. **Agent-created content needs trust mechanisms.** Skill auto-creation correctness, silent skill-patch failures, and skill-routing breakage (OpenClaw, Hermes, LobsterAI) are prompting calls for mechanism-level guarantees. Hermes' Collective Wisdom stack (trusted publish/install) and CoPaw's workspace-scoped skill preload are early experiments in governed skill distribution.

6. **Self-hosting configurability is non-negotiable.** Firecrawl endpoint configurability (NullClaw), self-hosted STT/TTS (OpenClaw), Custom provider baseUrl fixes (OpenClaw), and Coder remote sandboxes (Moltis) confirm that users expect every external dependency to be pointable at a self-hosted equivalent.

7. **Security hardening is moving from feature to requirement.** ZeroClaw's S0 delegate-privilege bypass, Moltis' pairing-signature verification fix, and OpenClaw's tilde-expansion injection fix show attackers (and security-minded users) are now probing the agent tool-permission and pairing boundaries.

8. **macOS/Windows reliability is a silent churn factor.** Native module segfaults, symlinked temp paths, and updater no-ops (NanoClaw, ZeroClaw, Hermes) are disproportionately damaging onboarding — the worst possible place to lose a user.

**Bottom line for developers:** Choose a platform based on your tolerance for reliability debt. OpenClaw offers the broadest ecosystem and fastest-moving feature set but demands operator attention; NanoBot and Moltis offer the cleanest daily experience with the smallest surface; Hermes and ZeroClaw are bets on architectural correctness (deadline layer, security hardening) paying off over the next 2–3 releases. Across all platforms, demand is converging on the same three deliverables: **no lost messages, honest token/cost accounting, and drop-in OpenAI compatibility.**

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

## 1. Today's Overview

Between 2026-08-24 and 2026-08-25, NanoBot saw high contributor and community activity: 8 issues were updated, 26 PRs were touched, and 12 PRs moved to closed/merged. No new releases were published. The project is currently focused on provider/usage infrastructure, agent reliability, WebUI transport fixes, and performance-oriented features such as FTS5 session search and token-free conditional triggers. Maintainer responsiveness looks strong: several issues filed on 2026-08-24 already have fix PRs attached, including the WebUI Gateway-reconnect hang. Overall, project health appears positive, with steady throughput and a mix of bug fixes, feature PRs, and external contributor proposals.

## 2. Releases

No new releases were published in this window. The latest activity is all pre-release development.

## 3. Project Progress

Twelve PRs were closed/merged in the last 24 hours. Based on the visible PR set, notable completed work includes:

- **FTS5 session search** — [PR #5507](https://github.com/HKUDS/nanobot/pull/5507) adds a SQLite FTS5 index mirror for fast full-text session search, with fallback to the JSONL scan.
- **Zero-token conditional triggers** — [PR #5508](https://github.com/HKUDS/nanobot/pull/5508) adds a `ConditionalTriggerRuntime` to the gateway, enabling lightweight event-driven automation without consuming LLM tokens.
- **Unified provider usage backend** — [PR #5481](https://github.com/HKUDS/nanobot/pull/5481) and [PR #5480](https://github.com/HKUDS/nanobot/pull/5480) introduce a typed LLM usage contract and unified usage recording across provider attempts.
- **No-tools model request timeout** — [PR #5496](https://github.com/HKUDS/nanobot/pull/5496) fixes a hang risk where no-tools provider calls bypassed wall-clock timeout protection.
- **Project workspace handling** — [PR #5506](https://github.com/HKUDS/nanobot/pull/5506) fixes the agent to honor the selected WebUI project workspace.
- **Windows exec test stability** — [PR #5517](https://github.com/HKUDS/nanobot/pull/5517) removes process-timing races in exec session tests.

## 4. Community Hot Topics

The most active issues and PRs reveal several recurring themes:

- **QwenCloud provider support** — [#5350](https://github.com/HKUDS/nanobot/issues/5350) is the issue with the most comments (2). It requests a backward-compatible QwenCloud provider path alongside existing DashScope support, reflecting user need for international Qwen access without breaking existing configurations.
- **WebUI hangs after Gateway restart** — [#5512](https://github.com/HKUDS/nanobot/issues/5512) describes the frontend remaining in a spinning state because the terminal `goal_status: idle` event is never received. This is a high-visibility reliability issue; fix PR [#5514](https://github.com/HKUDS/nanobot/pull/5514) was opened the same day.
- **Telegram rich messages vs. streaming** — [#5516](https://github.com/HKUDS/nanobot/issues/5516) reports that `rich_messages: true` and `streaming: true` are mutually exclusive, so rich messages never render when streaming is enabled. This blocks an existing opt-in feature for Telegram users.
- **Automation and operational features** — [#5513](https://github.com/HKUDS/nanobot/issues/5513) (cron result routing), [#5511](https://github.com/HKUDS/nanobot/issues/5511) (crash-safe task ledger), and [#5510](https://github.com/HKUDS/nanobot/issues/5510) (zero-token conditional triggers) show strong user demand for making NanoBot a more robust automation platform.
- **Search performance** — [#5509](https://github.com/HKUDS/nanobot/issues/5509) reports slow session search on large histories; the corresponding implementation PR [#5507](https://github.com/HKUDS/nanobot/pull/5507) was already closed, showing a fast issue-to-implementation loop.

## 5. Bugs & Stability

Bugs reported or updated in the last 24 hours, ranked roughly by severity:

1. **WebUI stalls in spinning state after Gateway restart** — [#5512](https://github.com/HKUDS/nanobot/issues/5512). Frontend stays `isStreaming=true` forever. Fix PR [#5514](https://github.com/HKUDS/nanobot/pull/5514) is open and directly closes the issue.
2. **Telegram rich messages never render with streaming** — [#5516](https://github.com/HKUDS/nanobot/issues/5516). Default streaming prevents `sendRichMessage` from ever being called. No fix PR yet.
3. **Silent repeated identical tool calls** — [#5344](https://github.com/HKUDS/nanobot/issues/5344) (fix PR [PR #5344](https://github.com/HKUDS/nanobot/pull/5344) open). Stuck agents can waste the entire iteration budget with no user signal.
4. **No-tools model requests missing timeout** — [PR #5496](https://github.com/HKUDS/nanobot/pull/5496), now closed, fixes potential hangs in malformed-call recovery and finalization paths.
5. **Unobserved timeout task failures** — [PR #5515](https://github.com/HKUDS/nanobot/pull/5515) addresses failures from delayed session-reply timeout tasks being silently discarded.
6. **Provider stream timing not recorded** — [PR #5518](https://github.com/HKUDS/nanobot/pull/5518) fixes missing TTFT/generation-time measurement at physical provider attempts.
7. **Windows process timing races** — [PR #5517](https://github.com/HKUDS/nanobot/pull/5517), closed, removes flaky test races in exec-session cleanup.
8. **Timezone-related test failures** — [PR #5349](https://github.com/HKUDS/nanobot/pull/5349) fixes deterministic settings-API test failures during a daily ~5-hour window.

## 6. Feature Requests & Roadmap Signals

Recent issues and PRs point to the following roadmap directions:

- **Provider expansion**: [#5350](https://github.com/HKUDS/nanobot/issues/5350) requests QwenCloud; [#5505](https://github.com/HKUDS/nanobot/issues/5505) proposes AnySearch as a key-optional web search provider.
- **Automation ergonomics**: [#5513](https://github.com/HKUDS/nanobot/issues/5513) wants cron results routed to configurable channels with batch archive; [#5511](https://github.com/HKUDS/nanobot/issues/5511) requests a crash-safe task ledger; [#5510](https://github.com/HKUDS/nanobot/issues/5510) asks for zero-token conditional triggers.
- **Search and history**: [#5509](https://github.com/HKUDS/nanobot/issues/5509) requests FTS5 indexing, already implemented in closed PR [#5507](https://github.com/HKUDS/nanobot/pull/5507).
- **Observability**: [PR #5520](https://github.com/HKUDS/nanobot/pull/5520) adds Langfuse tracing to the Codex provider.
- **Configuration UX**: [PR #5497](https://github.com/HKUDS/nanobot/pull/5497) and [PR #5498](https://github.com/HKUDS/nanobot/pull/5498) add a shared complete configuration-editor contract and unify onboarding in the Agent TUI.
- **Cheaper heartbeat operation**: [PR #4549](https://github.com/HKUDS/nanobot/pull/4549) proposes a `model_override` config for using a cheaper heartbeat model.

Features most likely to appear in the next NanoBot release are those already closed/merged: FTS5 session search, conditional trigger runtime, unified provider usage backend, and no-tools timeout hardening.

## 7. User Feedback Summary

User-submitted issues in this window show a mix of reliability complaints and feature demands:

- **WebUI hang after restart** is a clear pain point: users report chat appearing hung even when the backend is alive.
- **Telegram rich messages** are effectively broken for users with streaming enabled, which is the default.
- **Cron/automation users** want automation output separated from personal conversation channels and want batch management of accumulated jobs.
- **Agent users** are concerned about lost progress after Gateway restarts, token waste from heartbeat polling, and slow session search on large histories.
- **Positive signal**: users are actively contributing feature proposals with implementation-ready plans, such as AnySearch ([#5505](https://github.com/HKUDS/nanobot/issues/5505)), and maintainers/contributors are responding quickly with fix PRs, often within hours or the same day.

## 8. Backlog Watch

Several important items remain open and may need maintainer attention:

- **[PR #4549](https://github.com/HKUDS/nanobot/pull/4549)** — `feat(heartbeat): add model_override config` has been open since June 26, 2026, and was updated as recently as August 24. It is one of the longest-standing open PRs.
- **[PR #5291](https://github.com/HKUDS/nanobot/pull/5291)** — `fix(agent): persist subagent conversation transcripts` has been open since August 7 and addresses a real debugging/observability gap.
- **[PR #5344](https://github.com/HKUDS/nanobot/pull/5344)** — repeated tool-call loop detection fix, open since August 11; important for preventing silent agent hangs.
- **[PR #5349](https://github.com/HKUDS/nanobot/pull/5349)** — timezone-sensitive test fix, open since August 12; currently carries a `conflict` label.
- **[Issue #5350](https://github.com/HKUDS/nanobot/issues/5350)** — QwenCloud provider proposal, open since August 12 with two comments but no linked implementation PR yet.
- **[PR #5430](https://github.com/HKUDS/nanobot/pull/5430)** — `fix(agent): release completed task groups`, open since August 18, covering long-running `AgentLoop` memory cleanup.

Several open PRs also carry a `conflict` label, suggesting merge conflicts that may require maintainer rebasing or review: [#5504](https://github.com/HKUDS/nanobot/pull/5504), [#5498](https://github.com/HKUDS/nanobot/pull/5498), [#5497](https://github.com/HKUDS/nanobot/pull/5497), [#5344](https://github.com/HKUDS/nanobot/pull/5344), and [#5291](https://github.com/HKUDS/nanobot/pull/5291).

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-25

## 1. Today's Overview

Hermes Agent logged a high-activity day: 50 issues and 50 PRs were updated in the last 24 hours, with 46 issues and 47 PRs still open and no new releases published. Activity remains concentrated in two areas: the Electron Desktop app (session restore, layout persistence, stuck file-tree, bot roster quirks) and agent-core reliability (timeout/hang architecture, context compression, skill correctness). The long-running **unified deadline layer** initiative ([#85125](https://github.com/NousResearch/hermes-agent/issues/85125)) continues to anchor the community's biggest concern — 400+ open timeout/hang issues. Project health is characterized by a steady stream of small, targeted fixes (several Desktop and gateway fix PRs landed or are open today) alongside a few high-severity crash reports that need maintainer attention. Notably, the infrastructure is being actively simplified: a slim WS-only server PR ([#94245](https://github.com/NousResearch/hermes-agent/pull/94245)) marks step one of removing the "dashboard layer cake."

## 2. Releases

No new releases were published in the last 24 hours. No changelog, breaking-change, or migration notes to report.

## 3. Project Progress

Three PRs were merged/closed in the period. The one visible in the top-20 list is:

- **Closed — [#94199](https://github.com/NousResearch/hermes-agent/pull/94199) `fix(errors): unwrap flat OpenRouter provider failures`** — normalizes nested/flat OpenRouter provider-error wrappers and preserves upstream-provider detection, improving error actionability for the OpenAI-compatible SDK path.

Progress also advanced on the issue side:

- **Closed — [#59499](https://github.com/NousResearch/hermes-agent/issues/59499)**: Kanban dispatcher ignoring `max_in_progress_per_profile` was closed with `sweeper:implemented-on-main` — a resource-exhaustion fix for concurrent task spawning is now on main.

Notable open feature/fix PRs actively moving today:

- **[#94245](https://github.com/NousResearch/hermes-agent/pull/94245)** — `feat(gateway): slim WS-only server`; removes FastAPI/uvicorn from the Desktop boot path entirely.
- **[#93508](https://github.com/NousResearch/hermes-agent/pull/93508)** — `feat(webapp): serve Desktop renderer in browsers`; authenticated browser-hosted mode for the full Desktop workspace.
- **[#94277](https://github.com/NousResearch/hermes-agent/pull/94277)** — deterministic, redacted `hermes tools catalog` JSON inventory for audits and CI diffs.
- **[#93202](https://github.com/NousResearch/hermes-agent/pull/93202)** — stops persisting ephemeral tile panes in the layout tree (direct fix for the layout-instability bug family).
- **[#94273](https://github.com/NousResearch/hermes-agent/pull/94273)** — ensures `dashboard.public_url` does not gate Desktop-private loopback backends (fixes WebSocket 401s on all local profiles).
- **Collective Wisdom V1 stack** — three stacked PRs by shannonsands: trusted publish/install foundation ([#93609](https://github.com/NousResearch/hermes-agent/pull/93609)), private contribution loop ([#93637](https://github.com/NousResearch/hermes-agent/pull/93637)), and managed consumption workflows ([#94266](https://github.com/NousResearch/hermes-agent/pull/94266)). This is a substantial skill-sharing feature in flight, currently awaiting decisions.

## 4. Community Hot Topics

The most active items are overwhelmingly issue-driven; comment counts are high on architectural and Desktop-stability topics:

- **[#85125 — Tracking: unified deadline layer (20 comments)](https://github.com/NousResearch/hermes-agent/issues/85125)**: The top topic. Proposes a 4-phase architectural fix for the 400+ timeout/hang/stuck/wedge backlog, building on community triage [#84047](https://github.com/NousResearch/hermes-agent/issues/84047) which collapsed 77 runtime stalls into seven mechanisms. Labeled `needs-decision` — the community is waiting for direction on the single most impactful reliability investment available.
- **[#25833 — Self-created skills lack correctness guarantees (10 comments)](https://github.com/NousResearch/hermes-agent/issues/25833)**: Users want mechanism-level guarantees for the skill auto-creation loop, reflecting broader anxiety about agent-written skills being trusted blindly.
- **[#80246 — Context-compression threshold undercounts `reasoning_content` (8 comments)](https://github.com/NousResearch/hermes-agent/issues/80246)**: DeepSeek/Kimi reasoning-mode sessions hit false "context overflow" because the token estimator ignores `reasoning_content`.
- **[#93888 — Desktop cannot restore sessions from Remote Gateway (7 comments)](https://github.com/NousResearch/hermes-agent/issues/93888)**: An 8-character local runtime ID is sent to the remote backend, causing permanent "Session not found" failures.
- **[#90229 — Desktop file tree stuck on skeleton (6 comments)](https://github.com/NousResearch/hermes-agent/issues/90229)**: Windows 11 boot-time failure where the right-sidebar tree never renders.
- **[#7895 — No images in OpenWebUI integration (4 comments, 3 👍)](https://github.com/NousResearch/hermes-agent/issues/7895)**: Oldest upvoted request; users want generated images delivered via OpenAI-protocol-compatible responses.

**Underlying needs:** (1) structural timeout elimination rather than per-bug patches; (2) trust and verification for self-created skills; (3) accurate token accounting for reasoning models (cost/overflow); (4) stable, correct Desktop session state across remote gateways and restarts.

## 5. Bugs & Stability

Ranked by severity (fix PRs noted where they exist):

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| **P1** | [#94248](https://github.com/NousResearch/hermes-agent/issues/94248) | Gateway **SIGSEGV** on macOS arm64 17–72 ms after delegate deadlines (Codex SSL reads); 12 Apple crash reports since Aug 19, 5 on Aug 24 | None yet |
| **P1 (duplicate flag)** | [#94258](https://github.com/NousResearch/hermes-agent/issues/94258) | Unhandled SQLite `SystemError` (NULL-without-exception) breaks session persistence retry; ends turn with `session_persistence_failed` despite healthy DB | None |
| **P2** | [#93888](https://github.com/NousResearch/hermes-agent/issues/93888) | Desktop + Remote Gateway: permanent "Restore failed — Session not found"; local runtime ID sent to remote backend | None yet |
| **P2** | [#94260](https://github.com/NousResearch/hermes-agent/issues/94260) | Applying a saved Desktop layout remounts baked-in session tiles across multiple profiles, then `ws_orphan_reap` + agent init fail | None (related: [#93202](https://github.com/NousResearch/hermes-agent/pull/93202)) |
| **P2** | [#93981](https://github.com/NousResearch/hermes-agent/issues/93981) | Desktop chat fails when a profile sets a non-loopback `dashboard.public_url`; gated WS mode rejects the `?token=` probe | [#94273](https://github.com/NousResearch/hermes-agent/pull/94273) |
| **P2** | [#92701](https://github.com/NousResearch/hermes-agent/issues/92701) | Docker backend exit 125 "too many colons" — unsanitized `task_id` built into persistent sandbox path; breaks every tool call on Windows | None |
| **P2** | [#94078](https://github.com/NousResearch/hermes-agent/issues/94078) | Shell startup diagnostics (e.g. `BASH_ENV`) contaminate file-operation data channels; stderr merged into read/write output | None |
| **P2** | [#80246](https://github.com/NousResearch/hermes-agent/issues/80246) | False context-overflow on DeepSeek/Kimi reasoning sessions due to `reasoning_content` undercount | None |
| **P2** | [#93865](https://github.com/NousResearch/hermes-agent/issues/93865) | Tools picker silently strips `browser.use_gateway`, breaking managed Browser-Use gateway connections | None |
| **P2** | [#56337](https://github.com/NousResearch/hermes-agent/issues/56337) | Telegram strips `@BotName` from `/command@Bot args`, collapsing command and first arg | None |
| **P2** | [#73965](https://github.com/NousResearch/hermes-agent/issues/73965) | bg-review guard uses turn-scoped ContextVar — 13 silent skill-patch failures across 4 skills in one week | None |
| **P2** | [#92818](https://github.com/NousResearch/hermes-agent/issues/92818), [#90229](https://github.com/NousResearch/hermes-agent/issues/90229), [#91245](https://github.com/NousResearch/hermes-agent/issues/91245) | Desktop layout instability / file-tree skeleton cluster | [#93202](https://github.com/NousResearch/hermes-agent/pull/93202) (layout) |
| **P2** | [#94254](https://github.com/NousResearch/hermes-agent/issues/94254) | Email channel cannot be disabled — re-enables after restart; also marks emails read | None |
| **P2/P3** | [#94137](https://github.com/NousResearch/hermes-agent/issues/94137), [#94235](https://github.com/NousResearch/hermes-agent/issues/94235), [#94001](https://github.com/NousResearch/hermes-agent/issues/94001), [#94271](https://github.com/NousResearch/hermes-agent/issues/94271) | Desktop Bot Mode tab resurrection, cloned-bot resurrection after deletion, stale status-bar context usage, ACP ignoring `agent.max_turns` | None |

**Takeaway:** Three fix PRs ([#94273](https://github.com/NousResearch/hermes-agent/pull/94273), [#93202](https://github.com/NousResearch/hermes-agent/pull/93202), [#94270](https://github.com/NousResearch/hermes-agent/pull/94270)) are already in flight against today's Desktop/session bug reports. The two P1 items — the macOS Codex SIGSEGV and the SQLite `SystemError` — remain without fix PRs and should be prioritized.

## 6. Feature Requests & Roadmap Signals

Strong signals for near-term work:

- **Unified deadline layer ([#85125](https://github.com/NousResearch/hermes-agent/issues/85125))** — `needs-decision`, 20 comments. A 4-phase fix for the entire timeout/hang backlog. If approved, this will be the defining stability milestone of the next releases.
- **Collective Wisdom V1** ([#93609](https://github.com/NousResearch/hermes-agent/pull/93609), [#93637](https://github.com/NousResearch/hermes-agent/pull/93637), [#94266](https://github.com/NousResearch/hermes-agent/pull/94266)) — three stacked PRs deliver trusted publish/install, private contribution, and managed consumption of agent skills. All are `needs-decision`; this is a credible candidate for the next minor version.
- **`hermes webapp` ([#93508](https://github.com/NousResearch/hermes-agent/pull/93508))** — serving the true Desktop renderer in browsers addresses a recurring user desire for a lightweight hosted UI (cf. the community-built [Hermes Chat](https://github.com/NousResearch/hermes-agent/issues/94198)).
- **Plan-then-approve mode ([#94251](https://github.com/NousResearch/hermes-agent/issues/94251))** — users explicitly compare against Reasonix's "no writes before approval" flow; could evolve the external `/plan` skill into a built-in safety mode.
- **Cost/context transparency ([#94222](https://github.com/NousResearch/hermes-agent/issues/94222))** — a +58% cost comparison vs. Reasonix on DeepSeek, requesting smaller per-request context and cache-hit visibility. Expect pressure for token-accounting fixes ([#80246](https://github.com/NousResearch/hermes-agent/issues/80246)) and Kimi quota surfacing (PR [#74424](https://github.com/NousResearch/hermes-agent/pull/74424)).
- **In-app browser element picker ([#90654](https://github.com/NousResearch/hermes-agent/issues/90654))** — RFC to let users point at page elements and agents act on them; moderate priority (P3) but conceptually popular.
- **Tool capability catalog ([#94277](https://github.com/NousResearch/hermes-agent/pull/94277))** — a deterministic, redacted tools inventory for audits and CI diffs; likely a quick win for enterprise/ops users.
- **Discord voice-channel participation ([#33683](https://github.com/NousResearch/hermes-agent/issues/33683))** — long-standing idea (May) with steady interest; still no decision.

## 7. User Feedback Summary

**Cost and context anxiety is the loudest theme.** A detailed DeepSeek comparison ([#94222](https://github.com/NousResearch/hermes-agent/issues/94222)) shows Hermes Studio at +58% cost vs. Reasonix on the same task; users want visible cache-hit rates and leaner prompts. The `reasoning_content` undercount ([#80246](https://github.com/NousResearch/hermes-agent/issues/80246)) compounds this on reasoning models.

**Desktop experience is the most-reported pain area.** Users cite: permanent "Session not found" with remote gateways ([#93888](https://github.com/NousResearch/hermes-agent/issues/93888)), layout trees that reshuffle themselves ([#92818](https://github.com/NousResearch/hermes-agent/issues/92818)), file panes stuck on skeletons ([#90229](https://github.com/NousResearch/hermes-agent/issues/90229), [#91245](https://github.com/NousResearch/hermes-agent/issues/91245)), background tabs mislabeled "New session" ([#94167](https://github.com/NousResearch/hermes-agent/issues/94167)), "Close All" tabs resurrecting ([#94137](https://github.com/NousResearch/hermes-agent/issues/94137)), and deleted bots reappearing ([#94235](https://github.com/NousResearch/hermes-agent/issues/94235)). The overall impression is that session state persistence is not yet trustworthy.

**Integration gaps frustrate users:** images not delivered to OpenWebUI ([#7895](https://github.com/NousResearch/hermes-agent/issues/7895)), Telegram group command args collapsed ([#56337](https://github.com/NousResearch/hermes-agent/issues/56337)), email channel that cannot be disabled and marks messages read ([#94254](https://github.com/NousResearch/hermes-agent/issues/94254)).

**Skill reliability is a trust issue:** silent failures in the bg-review skill-patching path ([#73965](https://github.com/NousResearch/hermes-agent/issues/73965)) and a call for mechanism-level correctness guarantees ([#25833](https://github.com/NousResearch/hermes-agent/issues/25833)) indicate users want the skill auto-creation loop auditable and safe.

**Positive signals:** users are building and sharing companion projects (Hermes Chat, [#94198](https://github.com/NousResearch/hermes-agent/issues/94198)), proposing UX improvements like ⌘⇧E sidebar collapse ([#89487](https://github.com/NousResearch/hermes-agent/pull/89487)) and Kanban attachment previews ([#84297](https://github.com/NousResearch/hermes-agent/pull/84297)), and engaging constructively on architectural RFCs.

## 8. Backlog Watch

Long-unanswered or decision-pending items that need maintainer attention:

- **[#7895 — No images in OpenWebUI (opened Apr 11, 3 👍)](https://github.com/NousResearch/hermes-agent/issues/7895)**: Four months old, the most-upvoted request in this window, with no maintainer response. Users want an OpenAI-protocol-compatible image delivery path.
- **[#25833 — Skill correctness guarantees (opened May 14, needs-decision)](https://github.com/NousResearch/hermes-agent/issues/25833)**: 10 comments; connects directly to the Reliability/Trust theme and the Wisdom PR stack — needs a maintainer position.
- **[#33683 — Discord voice mode (opened May 28)](https://github.com/NousResearch/hermes-agent/issues/33683)**: Interesting platform expansion; likely waiting on gateway architecture decisions.
- **[#56337 — Telegram command arg stripping (opened Jul 1, P2)](https://github.com/NousResearch/hermes-agent/issues/56337)**: A real P2 functional bug in group workflows that has been open for nearly two months.
- **[#82654 — Quick Entry hotkey broken on wlroots Wayland (opened Aug 9, blocked)](https://github.com/NousResearch/hermes-agent/issues/82654)**: Blocked on missing GlobalShortcuts portal support; misleading "taken" error message needs at minimum a diagnostic improvement.
- **[#85125 — Unified deadline layer (opened Aug 13, needs-decision, 20 comments)](https://github.com/NousResearch/hermes-agent/issues/85125)**: The single highest-leverage decision in front of maintainers; community has already done the triage work.
- **Long-open PRs needing review/merge**: [#74424 Kimi Coding Plan quota usage (Jul 29)](https://github.com/NousResearch/hermes-agent/pull/74424) and [#69260 preserve Codex commentary across interleaved output (Jul 22)](https://github.com/NousResearch/hermes-agent/pull/69260) — both are user-facing fixes/features with `blast-moderate` labels that have lingered for weeks.
- **[#93974 — Continuity pilot hardening (draft, labeled invalid)](https://github.com/NousResearch/hermes-agent/pull/93974)**: Large integration PR covering native evidence, rollback authority, and privacy boundaries; needs triage to resolve the label/status ambiguity.

---

*Digest generated from Hermes Agent GitHub activity, 2026-08-24 → 2026-08-25. Data: 50 issues updated (46 open / 4 closed), 50 PRs updated (47 open / 3 merged-closed), 0 releases.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

## PicoClaw Project Digest — 2026-08-25

### 1. Today's Overview
PicoClaw shows moderate activity over the last 24 hours: 2 issues were updated (both open), 3 PRs were updated, and 2 of those PRs moved to closed/merged status. No new releases were published. The most notable signal is continued momentum around the high-priority Web UI roadmap issue (#806), which remains a community focus with 10 comments and 8 👍 reactions. Meanwhile, an open Slack media upload bug (#3338) remains unresolved and is now marked stale. Overall, the project is progressing on bug-fix consolidation, but several important items need maintainer attention to avoid backlog drift.

### 2. Releases
No new releases were published in this window. The latest release list is empty, so there are no changelog, breaking change, or migration notes to report.

### 3. Project Progress
Two PRs moved to closed/merged status today:

- [#1929](https://github.com/sipeed/picoclaw/pull/1929) — **fix: apply security credentials before config validation in web handlers**. This addresses a real bug where web launcher config saves failed with `"channels.pico.token is required when pico channel is enabled"` even when the token was correctly stored in `.security.yml`. The fix changes validation order so security-managed private fields are applied before config validation.
- [#1551](https://github.com/sipeed/picoclaw/pull/1551) — **fix: merge PR #1428 #1422 #1417**. This consolidates several open fix PRs into a single merge, indicating bundling / cleanup of previously isolated fixes.

One PR remains open and stale:

- [#3299](https://github.com/sipeed/picoclaw/pull/3299) — **Add native Exa web search provider** (open since 2026-07-26, no comment count recorded). Still awaiting maintainer review or merge.

### 4. Community Hot Topics
- [#806](https://github.com/sipeed/picoclaw/issues/806) — **[Feature] Add webUI support (Refactoring now)**  
  *10 comments · 8 👍 · priority: high · roadmap*  
  This is by far the most active item. The proposal aims to lower the barrier to entry for beginners by providing a browser-based UI, since the TUI "is great for terminal users" but is less accessible for "non-tech" users. The phrase "Refactoring now" suggests active work may be underway. Underlying need: broader usability and non-developer adoption.

- [#3338](https://github.com/sipeed/picoclaw/issues/3338) — **Slack does not attach image media content**  
  *1 comment · stale*  
  Users hitting Slack media upload failures care about reliable rich-media integrations. The bug report is technical but the underlying expectation is that Slack attachments should "just work" with PicoClaw.

### 5. Bugs & Stability
No new bugs were opened in the last 24 hours, but one existing bug was updated:

- [#3338](https://github.com/sipeed/picoclaw/issues/3338) — **Slack media uploads always fail with `file.upload.v2: file size cannot be 0`**  
  *Severity: Medium* — Slack image/media attachments are completely broken because `SendMedia` builds `slack.UploadFileParameters` without setting `FileSize`, causing the slack-go SDK to reject every upload before any network call. No fix PR exists yet. This affects a common Slack integration path and should be prioritized.

Additionally, the closed PR [#1929](https://github.com/sipeed/picoclaw/pull/1929) fixed a config-validation bug in the web handlers, so that stability item is now resolved.

### 6. Feature Requests & Roadmap Signals
- **Web UI (#806)** remains the strongest roadmap signal: high priority, actively discussed, and explicitly marked as "Refactoring now." This is a strong candidate for a near-future release, though no release has been cut yet.
- **Native Exa web search provider (#3299)** is a clear feature request for broadening `tools.web` / `web_search` capabilities. It is still open and stale, but if merged it would add a new external search provider with existing `d`/`w`/`m`/`y` range filter support.
- The consolidation PR #1551 suggests maintainers are in cleanup mode, possibly preparing the codebase for larger changes such as the Web UI refactor.

### 7. User Feedback Summary
Real user pain points visible from this data:

- **Non-technical users find the TUI a barrier.** The Web UI request (#806) explicitly states that a browser-based interface is "the most intuitive path for 'non-tech' users to manage their PicoClaw instances."
- **Slack integration is unreliable for media.** Users expect image media content to be attached in Slack messages, but the current implementation rejects all uploads due to missing `FileSize`.
- **Config UX issue was fixed.** The #1929 fix resolves a confusing scenario where users correctly placed a token in `.security.yml` but still received validation errors — a clear user-facing bug that has now been addressed.

### 8. Backlog Watch
These items need maintainer attention:

- [#806](https://github.com/sipeed/picoclaw/issues/806) — Open since 2026-02-26, high priority, 8 👍, 10 comments, and flagged as roadmap. Despite the "Refactoring now" note, it remains open with no linked merged PR visible. This is the most important item to watch.
- [#3299](https://github.com/sipeed/picoclaw/pull/3299) — Open since 2026-07-26 and now stale. A reasonable, self-contained feature PR adding Exa web search support. Needs maintainer review or explicit closure.
- [#3338](https://github.com/sipeed/picoclaw/issues/3338) — Open since 2026-08-17, stale, with a clear root-cause description but no fix PR. Should be prioritized before more users hit Slack media failures.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-25

## 1. Today's Overview
NanoClaw saw a high-activity day: **3 issues updated** (2 open, 1 closed), **21 PRs updated** (18 open, 3 merged/closed), and **1 new release** (`v2.3.0`). The busiest areas were channel integrations — Mattermost, Dial, Slack, Telegram — plus macOS-specific setup/update reliability fixes. The release of `v2.3.0` introduces a significant Slack experience change, but explicitly preserves backward compatibility for classic Slack installs. Overall project health looks strong: contributor throughput is high, and maintainer attention is visibly focused on user-reported macOS breakage.

## 2. Releases
### v2.3.0
- **Title/summary:** A new Slack experience — per-agent provisioned Slack apps, agent spawning from Slack, and UX improvements — is available to classic single-bot Slack installs.
- **Breaking change note:** The release is marked `[BREAKING]`, but the note says classic Slack keeps working unchanged and this is a decision gate, **not a forced migration**.
- **Migration context:** Existing single-bot Slack installations can continue using the current setup while deciding whether to adopt the new per-agent app model. The note for new/non-Slack installs is truncated in the data, but the emphasis on “not a forced migration” suggests a deliberate, low-pressure rollout.

## 3. Project Progress
### Merged/closed PRs (visible in today’s data)
- [#2474 — feat(setup): AI-coding-CLI picker](https://github.com/nanocoai/nanoclaw/pull/2474) — closed/merged after being open since May 14. Adds a registry framework so setup can hand off failed steps and headless utility tasks to Claude Code, OpenAI Codex, or future adapters.
- [#2475 — feat(codex): surface skills + persona to codex agents](https://github.com/nanocoai/nanoclaw/pull/2475) — closed/merged. Gives Codex agents parity with Claude Code agents by exposing the same persona and skill catalog.

The data indicates **3 merged/closed PRs total**, but only two are visible in the top-20 list; the third was not included in the provided snapshot.

### Active in-flight features
- [#3508 — durable host-coordination state](https://github.com/nanocoai/nanoclaw/pull/3508) — groundwork for safe host restarts, including approval waiters, retry counts, and stop/respawn intent.
- [#3502 — Mattermost via NanoCo Chat SDK](https://github.com/nanocoai/nanoclaw/pull/3502) and [#3507 — Mattermost installation skill](https://github.com/nanocoai/nanoclaw/pull/3507) — dual PRs adding Mattermost channel support.
- [#3396 — create agents from templates in chat](https://github.com/nanocoai/nanoclaw/pull/3396) and [#3428 — Slack template-ref carry-through](https://github.com/nanocoai/nanoclaw/pull/3428) — template-driven agent creation.
- [#3503 — Apple Container session driver](https://github.com/nanocoai/nanoclaw/pull/3503) — first overlay for the new session-driver seam using macOS microVMs.
- [#3493 — MindsHub provider guide and setup skill](https://github.com/nanocoai/nanoclaw/pull/3493) — documentation and operational skill for MindsHub.
- [#3501 — mention Dial channel in README/changelog](https://github.com/nanocoai/nanoclaw/pull/3501) — fills in missing docs for already-shipped Dial integration.

## 4. Community Hot Topics
Comment/reaction data is sparse in this snapshot — only [#2767](https://github.com/nanocoai/nanoclaw/issues/2767) has an explicit comment count (`1`). The real activity signals are the two newly filed macOS issues and the corresponding fix PRs.

- [#3497 — better-sqlite3 13 segfaults on macOS, needs Node >=22.14.0](https://github.com/nanocoai/nanoclaw/issues/3497) — brand new and high-impact: fresh installs can pass Node version checks and still end up with no working database layer.
- [#3498 — update-nanoclaw exits 0 without running on macOS; symlinked tmpdir defeats guards](https://github.com/nanocoai/nanoclaw/issues/3498) — brand new, affecting the updater’s documented invocation and safety-state checks.
- [#2767 — Telegram legacy-Markdown sanitizer is now obsolete upstream](https://github.com/nanocoai/nanoclaw/issues/2767) — closed issue; a maintenance win rather than a user-facing debate.

The underlying needs are clear: **macOS install/update reliability** and **removal of obsolete workarounds** after upstream adapters improve.

## 5. Bugs & Stability
Ranked by severity:

1. **High — `better-sqlite3` segfaults on macOS with Node >=22 but <22.14.0**  
   [#3497](https://github.com/nanocoai/nanoclaw/issues/3497)  
   `better-sqlite3@13.0.3` crashes inside `new Database()` on older Node 22 releases on macOS. The declared Node floor is `>=22`, so affected users pass validation and only discover the failure when `pnpm test` cannot complete.  
   **No dedicated fix PR is visible yet**, so this likely needs either a Node floor bump to `>=22.14.0` or a `better-sqlite3` pin.

2. **High — update controller silently no-ops on macOS**  
   [#3498](https://github.com/nanocoai/nanoclaw/issues/3498)  
   `path.resolve()` comparisons fail because macOS temp paths are symlinks (`/var/folders` → `/private/var/folders`). The updater can exit `0` without running, and safety-state validation also fails.  
   **Fix PRs exist:** [#3499 — resolve symlinks in update controller path comparisons](https://github.com/nanocoai/nanoclaw/pull/3499) and [#3506 — correct the transaction controller on macOS hosts](https://github.com/nanocoai/nanoclaw/pull/3506).

3. **Low / cleanup — Telegram Markdown sanitizer obsolete**  
   [#2767](https://github.com/nanocoai/nanoclaw/issues/2767)  
   The workaround in `telegram-markdown-sanitize.ts` is no longer needed after `@chat-adapter/telegram@4.30.0` added native `MarkdownV2` support. This was closed.

Additional bug-fix PRs updated today:
- [#3505 — route attachments through selected mailbox mounts](https://github.com/nanocoai/nanoclaw/pull/3505)
- [#3302 — correct OneCLI gateway default bind address](https://github.com/nanocoai/nanoclaw/pull/3302)
- [#3451 — attribute barrel imports to the correct skill](https://github.com/nanocoai/nanoclaw/pull/3451)

## 6. Feature Requests & Roadmap Signals
Visible contributor PRs strongly suggest the next release may include:

- **Mattermost as a first-class channel**  
  [#3502](https://github.com/nanocoai/nanoclaw/pull/3502) + [#3507](https://github.com/nanocoai/nanoclaw/pull/3507)
- **Agent creation from templates**, both in chat and through the Slack flow  
  [#3396](https://github.com/nanocoai/nanoclaw/pull/3396) + [#3428](https://github.com/nanocoai/nanoclaw/pull/3428)
- **macOS updater and setup hardening**, likely to land quickly given two fix PRs were opened the same day  
  [#3499](https://github.com/nanocoai/nanoclaw/pull/3499) + [#3506](https://github.com/nanocoai/nanoclaw/pull/3506)
- **Apple Container session driver** as the first concrete overlay on the new driver seam  
  [#3503](https://github.com/nanocoai/nanoclaw/pull/3503)
- **Durable coordination state** for crash-safe host restarts, though marked as “dormant groundwork” rather than immediately user-facing  
  [#3508](https://github.com/nanocoai/nanoclaw/pull/3508)

A future version after `v2.3.0` seems likely to emphasize channel breadth (Mattermost, Dial, MindsHub docs) and template-driven agent provisioning.

## 7. User Feedback Summary
The most direct user feedback in this snapshot comes from the macOS install/update path:

- Users report that the Node version check is misleading: it passes but then `better-sqlite3` segfaults, leaving the install with no working DB layer ([#3497](https://github.com/nanocoai/nanoclaw/issues/3497)).
- Users report a silent updater failure: the documented update command exits `0` without doing anything on macOS because of symlinked temp paths ([#3498](https://github.com/nanocoai/nanoclaw/issues/3498)).
- On the positive side, `v2.3.0` explicitly reassures classic Slack users: **“Classic Slack keeps working unchanged”** and the change is a decision, not a forced migration. That should reduce upgrade anxiety.
- Closing [#2767](https://github.com/nanocoai/nanoclaw/issues/2767) shows that upstream adapter improvements are being tracked and adopted rather than accumulating local workarounds.

Overall, user pain is concentrated on macOS reliability; the quick PR response suggests maintainers are treating it seriously.

## 8. Backlog Watch
Two PRs have been open for more than three months and were touched again today:

- [#2361 — tighten codex provider contracts](https://github.com/nanocoai/nanoclaw/pull/2361) — open since 2026-05-09, last updated 2026-08-24. Replaces stale Codex SDK assumptions with current `codex app-server` JSON-RPC contracts.
- [#2337 — surface Claude Code skill catalog to non-Claude providers](https://github.com/nanocoai/nanoclaw/pull/2337) — open since 2026-05-07, last updated 2026-08-24. Would make Claude Code skills usable outside Claude Code providers.

Both are long-running provider-parity efforts that still need a maintainer decision or merge. The recently closed [#2474](https://github.com/nanocoai/nanoclaw/pull/2474) and [#2475](https://github.com/nanocoai/nanoclaw/pull/2475) show this area eventually does land, but the remaining provider-contract work appears stuck at the review/merge gate.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-25

## Today's Overview

NullClaw saw minimal activity on 2026-08-25: no new releases, no merged PRs, and no closed issues. Two new issues were filed by the community (#992, #993), both remaining open with no maintainer response yet. One long-running Dependabot PR (#956) was updated but remains unmerged after more than two months. The project appears to be in a low-activity maintenance phase, with users actively surfacing configuration and usability concerns while no code changes landed today.

## Project Progress

No PRs were merged or closed in the last 24 hours, so no features or fixes advanced to completion. The only PR activity was an update to [#956](https://github.com/nullclaw/nullclaw/pull/956), an open Dependabot pull request bumping Alpine Linux from 3.23 to 3.24 in the docker-images group, which has been pending since 2026-06-15.

## Community Hot Topics

No issues or PRs currently have significant comment or reaction volume (all at 0). The most notable items, both opened on 2026-08-24, represent the current community focus:

- [Issue #993 — [enhancement] make Firecrawl search endpoint configurable for self-hosted instances](https://github.com/nullclaw/nullclaw/issues/993): User Crymfox requests replacing the hardcoded `https://api.firecrawl.dev/v1/search` endpoint in `src/tools/web_search_providers/firecrawl.zig` with a configurable option to support self-hosted Firecrawl deployments.
- [Issue #992 — [bug] if pairing code is hidden and not written to disk, how can we see it?](https://github.com/nullclaw/nullclaw/issues/992): User heredos reports substantial confusion retrieving the 6-digit pairing token after change #535 removed stdout logging, effectively trapping the token in memory.

## Bugs & Stability

One bug report was filed today:

- **High severity — [Issue #992](https://github.com/nullclaw/nullclaw/issues/992):** The pairing code for gateway API configuration is no longer logged to stdout (due to #535) and is not persisted to disk, making the 6-digit token effectively unreachable. The reporter spent days attempting gateway setup before discovering this regression. No fix PR exists; this blocks gateway configuration for new users and is a clear usability regression.

## Feature Requests & Roadmap Signals

- **[Issue #993](https://github.com/nullclaw/nullclaw/issues/993)** requests making the Firecrawl search provider endpoint configurable so self-hosted Firecrawl instances can be used with `search_provider: "firecrawl"`. This is a well-scoped change (replacing a hardcoded constant with a configuration option) that aligns with the project's self-hosting theme. It is a strong candidate for the next minor release if maintainers pick it up.

## User Feedback Summary

Community feedback today centers on two distinct pain points:

1. **Self-hosted integration friction (#993):** Users running self-hosted Firecrawl cannot leverage the native search provider because the endpoint is hardcoded to the cloud API. The ask is for a configuration surface to point to custom instances.
2. **Gateway setup confusion (#992):** The removal of stdout logging for the pairing code (#535) made the 6-digit token unobtainable, causing days of user frustration and an inability to complete gateway configuration. This signals dissatisfaction with the discoverability of the pairing flow.

## Backlog Watch

- **[PR #956](https://github.com/nullclaw/nullclaw/pull/956)** — Dependabot PR bumping Alpine from 3.23 to 3.24 in the docker-images group. Open since 2026-06-15 (over 70 days) with no maintainer action. Routine dependency updates should be merged or closed promptly to avoid accumulating technical debt and merge conflicts.
- **[Issue #992](https://github.com/nullclaw/nullclaw/issues/992)** and **[Issue #993](https://github.com/nullclaw/nullclaw/issues/993)** — Both filed on 2026-08-24 and awaiting maintainer triage; #992 in particular is a blocking usability bug that warrants an expedited response.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-25

## 1. Today's Overview

IronClaw is in a high-velocity maintenance-and-hardening phase: 22 issues and 32 PRs were updated in the last 24 hours, with 9 issues closed and 15 PRs merged/closed. The dominant themes are (a) the **onboarding suggestions** feature maturing end-to-end, (b) a four-lane **CI expedite program** (T1–T4) consolidating how Rust builds and tests run, and (c) a wave of **WebUI polish refactors** (shared page primitives, `InlineNotice` migration). Two throwaway investigation PRs (#7852, #7858) were used to bisect a T1 CI regression without merging experimental code — a sign of disciplined engineering process. No new releases were cut, and the project's dogfooding/QA cadence continues with a fresh weekly epic (#7843). Overall health looks strong: structured epics, active bug triage, and steady PR throughput.

## 2. Releases

No new releases in the last 24 hours.

## 3. Project Progress

Eight meaningful PRs landed (merged or closed) today, plus two closed investigation probes:

- **[#7821 — ci: single setup-rust composite (T1)](https://github.com/nearai/ironclaw/pull/7821)** · Closes [#7798](https://github.com/nearai/ironclaw/issues/7798). Replaces 43 scattered `dtolnay/rust-toolchain` invocations across 12 workflow files with one `.github/actions/setup-rust` composite action owning toolchain pin, mold linker, and centralized build profiles.
- **[#7833 — feat(suggestions): generate over the user's no-approval, read-only tools](https://github.com/nearai/ironclaw/pull/7833)** · Closes [#7812](https://github.com/nearai/ironclaw/issues/7812). Suggestion cards are now grounded in the user's connected accounts rather than a hardcoded four-capability allowlist.
- **[#7857 — fix(webui): refresh conversations after starting suggestion](https://github.com/nearai/ironclaw/pull/7857)** · Fixes [#7845](https://github.com/nearai/ironclaw/issues/7845). A suggested task's thread now appears in the sidebar without a manual navigation refresh.
- **[#7854 — fix(webui): remove Gateway v2 login eyebrow](https://github.com/nearai/ironclaw/pull/7854)** · Removes stale login-card branding and a retired `login.tagline` key across 11 locale packs.
- **[#7794 — refactor(webui): shared page shell and loading primitives](https://github.com/nearai/ironclaw/pull/7794)** · Closes [#7792](https://github.com/nearai/ironclaw/issues/7792). New `PageScroll`, `PageStack`, `Skeleton`, and `SkeletonList` primitives now back Automations, Extensions, Admin, Workspace, and Settings.
- **[#7001 — feat(loop): keep cached system prefix byte-stable](https://github.com/nearai/ironclaw/pull/7001)** · Closes [#6985](https://github.com/nearai/ironclaw/issues/6985) (P0 performance). Inline loop-control nudges and minute-precision timestamps were invalidating the provider-cached prompt prefix; the system block is now stable across model calls.
- **[#7795 — refactor(webui): migrate settings and admin notices](https://github.com/nearai/ironclaw/pull/7795)** · Closes [#7793](https://github.com/nearai/ironclaw/issues/7793). Page-level feedback banners now use the shared `InlineNotice` component with semantic tones.
- **[#7844 — fix(ci): restore main coverage and WebUI checks](https://github.com/nearai/ironclaw/pull/7844)** · Closes [#7851](https://github.com/nearai/ironclaw/issues/7851). Updates WASM fixtures to the enum-based WIT contract and recaptures coverage floors.

Investigation-only (closed without merge): **[#7852](https://github.com/nearai/ironclaw/pull/7852)** (bisect of T1's E2E failure) and **[#7858](https://github.com/nearai/ironclaw/pull/7858)** (Windows probe for the T1 composite). Both were explicitly labeled throwaway, indicating the T1 regression was isolated via process rather than merged blind.

## 4. Community Hot Topics

Comment activity was concentrated on the suggestions and CI tracks:

- **[#7812 — Onboarding suggestions: respect user-level tool permissions](https://github.com/nearai/ironclaw/issues/7812)** (3 comments, closed) — The most-discussed issue. Underlying need: suggestions must ground themselves in real user data (Gmail, etc.) while honoring read-only permissions. Resolved by PR #7833.
- **[#7798 — CI expedite T1: setup-rust composite](https://github.com/nearai/ironclaw/issues/7798)** (2 comments, closed) — Core CI-infrastructure concern: eliminating "green locally, red in CI" drift caused by 43 scattered toolchain pins.
- **[#7297 — Error messages stack up in UI after every failed prompt](https://github.com/nearai/ironclaw/issues/7297)** (2 comments, open, P2 QA bug) — User-visible frustration on the Railway QA instance; old `service_unavailable` and runner-heartbeat errors accumulate rather than clearing.
- **[#7742 — Automations: bound creation preflight](https://github.com/nearai/ironclaw/issues/7742)** (2 comments, closed) — Distinguishing "authoring a future run" from "executing it now" so automations make honest execution contracts before persistence.

The low comment counts overall (0–3 per item) suggest a project where discussion happens in PR reviews and Slack rather than public issue threads.

## 5. Bugs & Stability

Bugs reported or updated today, ranked by user impact:

| Severity | Issue | Description | Status |
|---|---|---|---|
| High | [#7842](https://github.com/nearai/ironclaw/issues/7842) | Request stopped with a generic "invalid result" error (x-ai-product-feedback, posted via IronClaw) | Open, no repro details |
| High | [#7297](https://github.com/nearai/ironclaw/issues/7297) | Error messages stack up in the chat UI after every failed prompt, degrading usability | Open since 2026-08-06, P2 |
| High | [#7853](https://github.com/nearai/ironclaw/issues/7853) | Telegram setup offers personal-account linking but cannot complete it — agent reports a missing tool | Open |
| High | [#7841](https://github.com/nearai/ironclaw/issues/7841) | Telegram setup dead-ends on "admin must configure" error | Open |
| Medium | [#7856](https://github.com/nearai/ironclaw/issues/7856) | MCP tool discovery silently skips camelCase tool names during hosted HTTP/SSE discovery | Open |
| Medium | [#7845](https://github.com/nearai/ironclaw/issues/7845) | Suggested-task activation doesn't create sidebar thread entry | Closed — fixed by [#7857](https://github.com/nearai/ironclaw/pull/7857) |
| CI | [#7851](https://github.com/nearai/ironclaw/issues/7851) | Main branch CI failures (coverage + WebUI checks) | Closed — fixed by [#7844](https://github.com/nearai/ironclaw/pull/7844) |
| CI | [#7848](https://github.com/nearai/ironclaw/issues/7848) | Daily failure taxonomy: officeqa run shows 65 non-pass, attributed to DeepSeek-V4-Flash model quality over OCR output | Open, monitoring |

The two Telegram issues (#7853, #7841) form a cluster suggesting the Telegram integration's setup wizard has a real broken path. The T1 CI regression was actively bisected via [#7852](https://github.com/nearai/ironclaw/pull/7852) and probed on Windows via [#7858](https://github.com/nearai/ironclaw/pull/7858), though no fix has landed yet.

## 6. Feature Requests & Roadmap Signals

- **[#7855 — Add Italian language support](https://github.com/nearai/ironclaw/issues/7855)** — New request for Italian in `/settings/language`; signals continued i18n expansion beyond the existing 11 locale packs (the recent #7854 touched all of them).
- **[#7849 — Bundle an agent-first GSuite CLI for Google Workspace](https://github.com/nearai/ironclaw/issues/7849)** — P1, v1.4.0-scoped enhancement. Gmail list/read operations expose raw MIME/base64 and require follow-up reads; an agent-first CLI would model-facing operations. Likely targets the next minor release.
- **[#7840 — Slack: connect guidance gap](https://github.com/nearai/ironclaw/issues/7840)** — Users report the app doesn't clearly guide them to connect Slack. Small UX/documentation improvement, plausible near-term fix.
- **[#6774 — Document Gmail terminal-based setup in Extensions > Registry UI](https://github.com/nearai/ironclaw/issues/6774)** — Request surfaced via Slack feedback (`deepak.jangir`); wants Google Apps setup documented in-product rather than requiring `nearai` CLI knowledge.
- **[#7815 — Onboarding suggestions: cumulative net-new work](https://github.com/nearai/ironclaw/issues/7815)** — Epic tracking the connect → suggest → thread flow; frontend gaps are being shipped behind the `oobe_suggestions` flag ([#7816](https://github.com/nearai/ironclaw/pull/7816)), so full rollout is a likely v1.3.0 candidate.

Also in flight (features, not yet merged): background subagents ([#7818](https://github.com/nearai/ironclaw/pull/7818)), sandbox credential bindings for CLIs like `gh` ([#7810](https://github.com/nearai/ironclaw/pull/7810)), automations run capability facts ([#7850](https://github.com/nearai/ironclaw/pull/7850)), and IronHub agent-link operator surface ([#7516](https://github.com/nearai/ironclaw/pull/7516)).

## 7. User Feedback Summary

Real user pain points captured in the last 24 hours, mostly via the `x-ai-product-feedback` channel:

- **Telegram setup is broken end-to-end for some users** — two separate reports: personal-account linking fails with a missing tool ([#7853](https://github.com/nearai/ironclaw/issues/7853)) and workspace setup dead-ends on "admin must configure" ([#7841](https://github.com/nearai/ironclaw/issues/7841)). This is the strongest dissatisfaction signal of the day.
- **Onboarding suggestions were previously superficial** — users' suggestion cards were generated without access to their connected data, making them generic. This was validated as a real gap and fixed in [#7833](https://github.com/nearai/ironclaw/pull/7833).
- **UI error accumulation** ([#7297](https://github.com/nearai/ironclaw/issues/7297)) — repeated failures clutter the chat and obscure new errors; a direct usability complaint on the QA instance.
- **Setup discoverability gaps** — Gmail requires terminal/CLI setup ([#6774](https://github.com/nearai/ironclaw/issues/6774)) and Slack connection isn't guided ([#7840](https://github.com/nearai/ironclaw/issues/7840)); users want in-product guidance.
- **A generic "invalid result" error** ([#7842](https://github.com/nearai/ironclaw/issues/7842)) stalled a user's request with no actionable detail — a transparency/observability concern.
- **Positive signal**: the weekly dogfooding epic ([#7843](https://github.com/nearai/ironclaw/issues/7843)) shows the team systematically eating its own dogfood and triaging QA bugs on a fixed cadence.

## 8. Backlog Watch

Items needing maintainer attention due to age, unanswered state, or stalled progress:

- **[#6774 — Document Gmail terminal-based setup in Extensions UI](https://github.com/nearai/ironclaw/issues/6774)** — Open since **2026-07-28** (~4 weeks), 1 comment. Oldest open issue in today's set; a documentation-only fix that directly addresses user confusion.
- **[#7297 — Error messages stack up in UI](https://github.com/nearai/ironclaw/issues/7297)** — Open since **2026-08-06** (P2 QA bug). No fix PR attached yet; the UI-clearing behavior is a straightforward quality-of-life fix.
- **[#7456 — fix(reborn): make durable storage profile-agnostic](https://github.com/nearai/ironclaw/pull/7456)** — Open PR since **2026-08-10** (15 days), XL size with a security-envelope design. Appears to be a significant architectural change awaiting review capacity.
- **[#7516 — feat(webui): operator surface for the IronHub agent link](https://github.com/nearai/ironclaw/pull/7516)** — Open since **2026-08-12** by a **new contributor** (`neo-sky`). XL-sized; long-lived contributor-authored PRs risk going stale. The author also has [#7826](https://github.com/nearai/ironclaw/pull/7826) open, making this a contributor to nurture.
- **[#7810 — feat(sandbox): direct-exec credential bindings behind managed proxy](https://github.com/nearai/ironclaw/pull/7810)** — Open since 2026-08-21, XL scope with security implications; no comments shown in the last 24h despite being referenced by [#7825](https://github.com/nearai/ironclaw/issues/7825).
- **[#7825 — Sandbox egress auth: native iron-proxy recipes](https://github.com/nearai/ironclaw/issues/7825)** — Open follow-on to #7810; waiting on the parent PR's design to land.
- **Dependabot PR [#7835](https://github.com/nearai/ironclaw/pull/7835)** — Actions group bump includes a major `actions/setup-node` jump (4.0.2 → 7.0.0); should be reviewed deliberately rather than auto-merged given the CI churn this week.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**Date:** 2026-08-25  
**Source data window:** Last 24 hours (updates on 2026-08-24)

---

## 1. Today's Overview

LobsterAI shows healthy but maintenance-mode activity: no new release was published, while 10 PRs were closed/merged and 1 long-running dependency PR remains open. All 3 issue updates were stale-bot closures, meaning no new user-reported bugs surfaced today. The closed PRs span renderer UI, skills/plugins, library artifacts, cowork/IM, and cross-platform thumbnail handling, indicating steady polish and bug-fixing rather than large structural changes. One notable SQLite write-amplification performance PR (#1193) was closed as stale, so its fix is not yet landed. Overall, project health appears stable, with active maintainer throughput and a focus on UX reliability.

---

## 2. Releases

**No new releases were published in the last 24 hours.**

---

## 3. Project Progress

The following PRs were closed/merged in the last 24 hours:

- **[#2528 — Feat/credits loading settings UI](https://github.com/netease-youdao/LobsterAI/pull/2528)** (`area: renderer`): Adds UI for credits loading settings.
- **[#2527 — fix(skills): stop persisting selected tab, default to marketplace](https://github.com/netease-youdao/LobsterAI/pull/2527)** (`area: renderer`): Improves skill marketplace UX by always reopening on the marketplace tab.
- **[#2526 — chore: update some kits icon url](https://github.com/netease-youdao/LobsterAI/pull/2526)** (`area: main`): Refreshes kit icon URLs.
- **[#2525 — Liuzhq/login guide](https://github.com/netease-youdao/LobsterAI/pull/2525)** (`area: renderer`): Adds login guidance in the UI.
- **[#2524 — feat(library): enhance cross-platform thumbnails and local artifact lifecycle](https://github.com/netease-youdao/LobsterAI/pull/2524)** (`area: renderer`, `area: docs`, `area: main`): Introduces isolated cross-platform thumbnails for images/videos/PDFs/Office/HTML, unified 16:9 sizing/caching, and stricter local artifact lifecycle management.
- **[#2523 — Liuzhq/add im icon](https://github.com/netease-youdao/LobsterAI/pull/2523)** (`area: renderer`, `area: docs`, `area: main`, `area: cowork`, `area: im`): Adds IM icon assets and related wiring.
- **[#2522 — fix(library): improve file sharing and favorite interactions](https://github.com/netease-youdao/LobsterAI/pull/2522)** (`area: renderer`, `area: artifacts`): Fixes Unicode filename handling in shared packages, improves favorite-state updates, rollback behavior, and subscription/export quota modal consistency.
- **[#2521 — fix(cowork): preserve message selection for context menu](https://github.com/netease-youdao/LobsterAI/pull/2521)** (`area: renderer`, `area: main`, `area: cowork`): Keeps selected text from being cleared before right-click / Ctrl-click context menus open; enables shared-edit menu for read-only selection.
- **[#2520 — fix(plugins): keep install modal usable with long errors](https://github.com/netease-youdao/LobsterAI/pull/2520)** (`area: renderer`): Constrains plugin install modal to viewport, makes error details scrollable, adds close button and safer IPC error handling.
- **[#1193 — perf(sqlite): eliminate write amplification with debounce + batch transactions](https://github.com/netease-youdao/LobsterAI/pull/1193) ([stale], closed):** Proposed eliminating full `db.export()` + `fs.writeFileSync()` on every row mutation; closed as stale and would need rebasing/reopening to land.

**Assessment:** The main thread of work is UI/UX hardening across the renderer, library/artifacts, plugins, and cowork flows, with several targeted bug fixes.

---

## 4. Community Hot Topics

The most active discussion items were older issues closed as stale in the last 24h:

- **[#1187 — [stale] 建议在设置模型api的选项中增加上下文窗口大小设置和输出token设置](https://github.com/netease-youdao/LobsterAI/issues/1187)**  
  *Author: qxjysd | Comments: 3 | 👍: 1*  
  User hit `Context overflow: prompt too large for the model` while using DeepSeek and asks for explicit context-window size and output-token settings in the model API options.

- **[#1195 — [stale] 【bug】自建skill被安装到OpenClaw的skill目录下，提示安装成功，重启LobsterAI后技能面板无显示](https://github.com/netease-youdao/LobsterAI/issues/1195)**  
  *Author: blueb0ne | Comments: 3 | 👍: 0*  
  A user-created skill was installed to the OpenClaw skill directory instead of the LobsterAI skill panel; after restart it was not visible. Repro rate: 100% on Windows 10.

- **[#1192 — [stale] 自定义已有工具的默认配置](https://github.com/netease-youdao/LobsterAI/issues/1192)**  
  *Author: duzhen1996 | Comments: 2 | 👍: 0*  
  User wants to hard-code default tool configurations (e.g., headless browser mode) instead of relying on LLM instruction-following, which is unreliable.

**Underlying need:** Users are asking for deterministic, user-controllable configuration (context limits, tool defaults, skill install paths) rather than depending on model behavior or memory.

---

## 5. Bugs & Stability

No new bugs were opened in the last 24 hours. The following bugs were present in stale-closed issues, ordered by severity:

- **High — Skill install path is wrong (#1195):**  
  Self-built skills are installed under the OpenClaw skill directory and never appear in LobsterAI’s skill panel after restart. This is a user-visible functional bug with 100% reproducibility.  
  No fix PR was linked.  
  [Issue #1195](https://github.com/netease-youdao/LobsterAI/issues/1195)

- **Medium-High — Context window overflow with DeepSeek (#1187):**  
  Users cannot reliably use DeepSeek models because the context window/output-token settings are either not exposed or incompatible with the model’s limits.  
  No fix PR was linked.  
  [Issue #1187](https://github.com/netease-youdao/LobsterAI/issues/1187)

- **Medium — Browser tool launches visible window despite "headless" request (#1192):**  
  User wants a hard default for headless browser mode; LLM instruction-following does not consistently respect the setting.  
  No fix PR was linked.  
  [Issue #1192](https://github.com/netease-youdao/LobsterAI/issues/1192)

**Stability fixes landed today:**

- **[#2520](https://github.com/netease-youdao/LobsterAI/pull/2520)** — Plugin install modal no longer becomes unusable when errors are long.
- **[#2521](https://github.com/netease-youdao/LobsterAI/pull/2521)** — Cowork message selection is preserved for context menus.
- **[#2522](https://github.com/netease-youdao/LobsterAI/pull/2522)** — Library share/favorite flows are more robust, including rollback and duplicate-refresh fixes.
- **[#2524](https://github.com/netease-youdao/LobsterAI/pull/2524)** — Library thumbnails and local artifact lifecycle are hardened across platforms.

---

## 6. Feature Requests & Roadmap Signals

The following signals are the most likely to influence upcoming versions:

- **Explicit model settings for context window and output tokens** — [#1187](https://github.com/netease-youdao/LobsterAI/issues/1187). Given DeepSeek/LLM context overflow reports, adding user-configurable token/context limits is a strong roadmap candidate.
- **User-defined tool default configurations** — [#1192](https://github.com/netease-youdao/LobsterAI/issues/1192). Users want to "write dead" defaults (e.g., headless browser mode) rather than prompt-model behavior.
- **Credits loading settings UI** — [#2528](https://github.com/netease-youdao/LobsterAI/pull/2528). Suggests monetization/credits management is being productized.
- **Login guide** — [#2525](https://github.com/netease-youdao/LobsterAI/pull/2525). Indicates onboarding/login UX is being improved.
- **Skills marketplace as default tab** — [#2527](https://github.com/netease-youdao/LobsterAI/pull/2527). Points toward a more marketplace-centric skills experience.

**Prediction:** Next minor releases are likely to include settings/configuration UI improvements (context windows, tool defaults), further skill-install fixes, and continued library/artifact UX polish.

---

## 7. User Feedback Summary

Real user pain points from today’s data:

- **DeepSeek context limits are a real blocker:** one user encountered `Context overflow` and requested more control over model context/output-token settings ([#1187](https://github.com/netease-youdao/LobsterAI/issues/1187)).
- **Skill installation is confusing:** users who create a skill and install it expect it to appear in the LobsterAI skill panel; instead it lands in the OpenClaw directory and disappears after restart ([#1195](https://github.com/netease-youdao/LobsterAI/issues/1195)).
- **Users want deterministic configuration over AI instruction-following:** the browser tool example shows dissatisfaction with relying on LLM memory/commands to apply simple defaults ([#1192](https://github.com/netease-youdao/LobsterAI/issues/1192)).

Overall, users are engaged with advanced customization but are hitting friction around configuration discoverability and skill persistence.

---

## 8. Backlog Watch

- **[#1277 — chore(deps-dev): bump electron group (electron 40.2.1 → 43.4.1, electron-builder)](https://github.com/netease-youdao/LobsterAI/pull/1277)**  
  *Open since 2026-04-02, last updated 2026-08-24.*  
  This dependency PR has been open for nearly five months. It may need review/rebasing or explicit closure if the Electron upgrade is intentionally deferred.

- **[#1193 — perf(sqlite): eliminate write amplification with debounce + batch transactions](https://github.com/netease-youdao/LobsterAI/pull/1193)**  
  *Closed as stale.*  
  This is a meaningful performance fix for SQLite persistence. If still desired, maintainers should reopen/rebase it; otherwise, the write-amplification issue remains unaddressed.

- **Stale-closed user issues that may need official follow-up:** [#1187](https://github.com/netease-youdao/LobsterAI/issues/1187), [#1195](https://github.com/netease-youdao/LobsterAI/issues/1195), and [#1192](https://github.com/netease-youdao/LobsterAI/issues/1192) were closed by automation, not necessarily resolved. Given they represent real user-facing bugs/requests, maintainers should verify whether each should be re-opened or tracked as known limitations.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-25

Source: [github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)

---

## 1. Today's Overview

Moltis had a high-velocity day: **2 issues were closed**, **16 pull requests were merged/closed**, and **3 PRs remain open**. A new release, **20260824.01**, was published on 2026-08-24. The activity was heavily focused on bug fixes and provider/infrastructure hardening: Apple sandbox identifiers, MCP client lifecycle, WhatsApp inbound files, memory embedding safety, and a new xAI Grok subscription OAuth provider all moved forward. Maintainers appear highly responsive; the one long-running issue in the window, Apple Container ID naming, was finally addressed after being open since June. Overall project health looks strong, with broad community and maintainer contribution across providers, browser tooling, i18n, and security.

---

## 2. Releases

- **[20260824.01](https://github.com/moltis-org/moltis/releases)** — released 2026-08-24.

No release notes or changelog details were included in the provided data. Given the 16 PRs merged/closed around the same time, this release likely includes many of the fixes listed below. No explicit breaking changes or migration notes were identifiable from the dataset.

---

## 3. Project Progress

16 PRs were merged/closed in the last 24 hours, grouped by theme:

### Provider / Platform Features
- **#1240** [merged/closed] — feat(providers): add xAI Grok subscription OAuth (`xai-oauth`)  
  Adds SuperGrok / X Premium+ support via device-code login.  
  [PR #1240](https://github.com/moltis-org/moltis/pull/1240)
- **#1179** [merged/closed] — fix(gateway): verify node pairing signatures  
  Closes a security gap in node pairing.  
  [PR #1179](https://github.com/moltis-org/moltis/pull/1179)
- **#1229** [merged/closed] — fix(browser): support Browserless v2 containers  
  [PR #1229](https://github.com/moltis-org/moltis/pull/1229)
- **#1227** [merged/closed] — fix(browser): enable Obscura stealth mode by default  
  New `tools.browser.obscura_stealth` setting.  
  [PR #1227](https://github.com/moltis-org/moltis/pull/1227)
- **#1238** [merged/closed] — Allow configured tools in shared Slack channels  
  [PR #1238](https://github.com/moltis-org/moltis/pull/1238)

### Messenger / Channel Fixes
- **#1228** [merged/closed] — fix(whatsapp): persist inbound files for local tools  
  [PR #1228](https://github.com/moltis-org/moltis/pull/1228)
- **#1233** [merged/closed] — fix(whatsapp): bound inbound media downloads while streaming  
  Superseded in part by #1228.  
  [PR #1233](https://github.com/moltis-org/moltis/pull/1233)
- **#1226** [merged/closed] — fix(cron): deliver scheduled output to the originating chat  
  [PR #1226](https://github.com/moltis-org/moltis/pull/1226)

### Runtime / Memory / MCP
- **#1231** [merged/closed] — fix(mcp): resolve current client after server restart  
  [PR #1231](https://github.com/moltis-org/moltis/pull/1231)
- **#1236** [merged/closed] — fix(memory): bound local embedding encoder batches  
  Prevents process termination on oversized token batches.  
  [PR #1236](https://github.com/moltis-org/moltis/pull/1236)
- **#1235** [merged/closed] — fix(memory): normalize built-in backend config value  
  [PR #1235](https://github.com/moltis-org/moltis/pull/1235)
- **#1234** [merged/closed] — fix(skills): materialize recursive bundled sidecars  
  [PR #1234](https://github.com/moltis-org/moltis/pull/1234)

### System / Configuration Fixes
- **#1237** [merged/closed] — Bound Apple container identifiers to 64 characters  
  Fixes issue #1137.  
  [PR #1237](https://github.com/moltis-org/moltis/pull/1237)
- **#1242** [merged/closed] — fix(tts): stop treating default Coqui as configured  
  Fixes issue #1114.  
  [PR #1242](https://github.com/moltis-org/moltis/pull/1242)
- **#1241** [merged/closed] — fix(heartbeat): honor `active_hours` and accept `end=24:00`  
  [PR #1241](https://github.com/moltis-org/moltis/pull/1241)
- **#1225** [merged/closed] — fix(i18n): update and improve zh-TW Traditional Chinese locale  
  [PR #1225](https://github.com/moltis-org/moltis/pull/1225)

### Still Open
- **#1199** — Add Coder remote workspace sandbox support  
  [PR #1199](https://github.com/moltis-org/moltis/pull/1199)
- **#1232** — fix(tools): make object schemas OpenAI-safe  
  [PR #1232](https://github.com/moltis-org/moltis/pull/1232)
- **#1243** — fix(cron): preserve delivered channel context  
  [PR #1243](https://github.com/moltis-org/moltis/pull/1243)

---

## 4. Community Hot Topics

The most-discussed items in the 24h window were both issues:

- **[Issue #1239](https://github.com/moltis-org/moltis/issues/1239)** — feat(providers): add xAI Grok subscription OAuth  
  **2 comments**, now closed. This is a strong demand signal: users want to use Grok via existing subscription OAuth rather than requiring an `XAI_API_KEY`.

- **[Issue #1137](https://github.com/moltis-org/moltis/issues/1137)** — [Bug]: Apple Container ID exceeds name limit  
  **1 comment**, now closed. Long-running real-world deployment bug fixed by PR #1237.

PR comment counts were not available in the provided data, but the open PRs **#1199** (Coder sandbox), **#1232** (OpenAI-safe schemas), and **#1243** (cron context) are likely to remain discussion points because they directly affect usability and integration compatibility.

---

## 5. Bugs & Stability

Issues and fixes ranked by severity:

1. **Memory embedding process crash** — Local GGUF memory embeddings could terminate the entire Moltis process when a tokenized chunk/query exceeds 512 tokens.  
   Fix: [PR #1236](https://github.com/moltis-org/moltis/pull/1236)

2. **Gateway node pairing signature verification missing** — Callers could supply their own key/challenge due to a placeholder verification path.  
   Fix: [PR #1179](https://github.com/moltis-org/moltis/pull/1179)

3. **Apple Container ID startup failures** — Identity-scoped prefixes plus session UUIDs exceeded the 64-character identifier limit.  
   Reported in [Issue #1137](https://github.com/moltis-org/moltis/issues/1137).  
   Fix: [PR #1237](https://github.com/moltis-org/moltis/pull/1237)

4. **MCP dispatch through closed clients** — After a server restart, active chat turns kept using the old closed MCP client.  
   Fix: [PR #1231](https://github.com/moltis-org/moltis/pull/1231)

5. **Heartbeat `active_hours` not enforced** — The helper existed but was never called; `end=24:00` was also treated as invalid.  
   Fix: [PR #1241](https://github.com/moltis-org/moltis/pull/1241)

6. **Bundled skill sidecar missing in releases/Docker** — `skill-creator` failed because `scripts/quick_validate.py` was listed but unavailable.  
   Fix: [PR #1234](https://github.com/moltis-org/moltis/pull/1234)

7. **False Coqui TTS “not configured” warnings** — Default Coqui was hard-coded as configured.  
   Fix: [PR #1242](https://github.com/moltis-org/moltis/pull/1242)

All listed bugs have corresponding fix PRs that were closed/merged in the same window.

---

## 6. Feature Requests & Roadmap Signals

- **xAI Grok subscription OAuth** — [#1239](https://github.com/moltis-org/moltis/issues/1239) / [#1240](https://github.com/moltis-org/moltis/pull/1240) is a clear roadmap item: login with SuperGrok / X Premium+ instead of API key. This is already in the merge pipeline.

- **Coder remote workspace sandbox** — [PR #1199](https://github.com/moltis-org/moltis/pull/1199) is still open and adds ephemeral remote workspaces. This is the largest open feature PR and may land in a future release.

- **OpenAI-safe tool schemas** — [PR #1232](https://github.com/moltis-org/moltis/pull/1232) is open and needed for strict OpenAI tool compatibility.

- **Cron context preservation** — [PR #1243](https://github.com/moltis-org/moltis/pull/1243) is open and targets follow-up conversational context for scheduled messages.

- **Shared Slack channel tool policy** — [PR #1238](https://github.com/moltis-org/moltis/pull/1238) signals a move toward policy-based tool access in collaborative/enterprise environments.

- **Browser automation ecosystem support** — Browserless v2 ([#1229](https://github.com/moltis-org/moltis/pull/1229)) and Obscura stealth mode ([#1227](https://github.com/moltis-org/moltis/pull/1227)) show continued investment in browser tooling.

- **WhatsApp media/file support** — [PR #1228](https://github.com/moltis-org/moltis/pull/1228) makes inbound files available to local tools, a practical UX improvement for WhatsApp-based agent use.

---

## 7. User Feedback Summary

Real user pain points visible in this batch:

- **Apple sandbox deployment delayed**: A user reported container ID collisions in June; the fix did not land until late August. This was a frustrating, deployment-blocking bug for Apple-backed sandboxes.
- **Grok users want subscription OAuth**: The demand for Grok access without a developer API key is explicit in issue #1239.
- **Cron/scheduled message context loss**: Scheduled outputs needed to be tied back to the originating chat; two PRs address this, indicating real conversational-flow pain.
- **MCP restart fragility**: Users running MCP servers saw stale clients after restarts, causing failures mid-conversation.
- **Memory embedding crashes**: Local users with GGUF embeddings could take down the entire process — a severe stability complaint.
- **Configuration footguns**: Heartbeat `active_hours` was documented but not enforced, and default Coqui generated false “not configured” warnings.

Overall, users are actively running Moltis in production-like environments and hitting integration edge cases. Maintainer response is fast: most issues have a fix PR on the same day.

---

## 8. Backlog Watch

No long-stale open issues were reported in the last 24h, but these items deserve continued attention:

- **[PR #1199](https://github.com/moltis-org/moltis/pull/1199)** — Add Coder remote workspace sandbox support  
  Open since 2026-08-15. This is a notable feature with no visible comments/reviews in the dataset; it needs maintainer review or follow-up.

- **[PR #1232](https://github.com/moltis-org/moltis/pull/1232)** — fix(tools): make object schemas OpenAI-safe  
  Open since 2026-08-22. Important for OpenAI-compatible strict schema support; if not merged soon it could cause lingering compatibility regressions.

- **[PR #1243](https://github.com/moltis-org/moltis/pull/1243)** — fix(cron): preserve delivered channel context  
  Freshly opened on 2026-08-24, but it addresses the same cron/delivery area as the recently merged #1226, so it should be prioritized for consistency.

- **[Issue #1137](https://github.com/moltis-org/moltis/issues/1137)** — Apple Container ID issue is now closed, but it was open for roughly two months; a useful reminder to review long-lived platform-specific bugs sooner.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-25

All links refer to the tracked repository: [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw).

---

## 1. Today's Overview

CoPaw/QwenPaw is in a highly active maintenance and iteration phase. In the last 24 hours, 50 issues were updated (31 open, 19 closed) and 46 PRs were updated (20 open, 26 merged/closed), with one new release: `v2.1.1-beta.2`. Activity is concentrated on console/session reliability, memory stability, multi-agent collaboration UX, and expanded integration coverage. Several severe user-facing bugs are still open — especially silent task halting, cross-session message routing errors, and unbounded backend memory growth — but matching fix PRs are emerging. The project remains responsive, with a steady stream of bug fixes, CI hardening, and community-contributed features.

---

## 2. Releases

### v2.1.1-beta.2

Release: [v2.1.1-beta.2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.1-beta.2)

Changes included in the provided release notes:

- **feat(console):** add artifacts to assistant response card — [PR #7161](https://github.com/agentscope-ai/QwenPaw/pull/7161)
- **fix(video):** deliver tool-result videos on OpenAI Responses API — [PR #7061](https://github.com/agentscope-ai/QwenPaw/pull/7061)
- **test(browser):** notes truncated in the source data.

No breaking changes or migration notes were included in the available release data.

---

## 3. Project Progress

Notable merged/closed PRs from the last 24 hours:

- **feat(creator) 1.1.0** — Major Creator update with mainstream image/video providers, Anthropic/Gemini protocols, dialogue-gated video dispatch, expanded effects library, project copy & recreate, session status cards, 2GB uploads, and runtime reliability hardening — [PR #7167](https://github.com/agentscope-ai/QwenPaw/pull/7167)
- **fix(ci): derive Docker boundary version from package** — Removes hard-coded managed runtime boundary version and verifies the built image label matches package version — [PR #7248](https://github.com/agentscope-ai/QwenPaw/pull/7248)
- **chore(console): remove desktop mode reminder** — [PR #7245](https://github.com/agentscope-ai/QwenPaw/pull/7245)
- **fix(e2e): re-anchor agents action cells and follow project-directory API rename** — Test-side fixes for upstream UI/API changes — [PR #7173](https://github.com/agentscope-ai/QwenPaw/pull/7173)
- **feat: more sensitive files & allow read global** — Security-relevant file handling improvement — [PR #6067](https://github.com/agentscope-ai/QwenPaw/pull/6067)
- **fix(memory): restore periodic ReMe index compaction** — Closed as **DO NOT MERGE**, but addresses BM25 index growth in ReMe-backed memory — [PR #7234](https://github.com/agentscope-ai/QwenPaw/pull/7234)
- **fix(providers): stop sending media to SiliconFlow DeepSeek V4** — Closed as **DO NOT MERGE**; prevents unsupported media payloads — [PR #7247](https://github.com/agentscope-ai/QwenPaw/pull/7247)

In-flight PRs indicating near-term direction:

- **fix(console): freeze session identity for chat sends** — Directly targets the cross-session message/stop routing bugs — [PR #7237](https://github.com/agentscope-ai/QwenPaw/pull/7237)
- **feat(console): show all-agent LLM and tool-call trend on Token Usage** — [PR #7219](https://github.com/agentscope-ai/QwenPaw/pull/7219)
- **feat(skills): add workspace-scoped preload policy** — [PR #7183](https://github.com/agentscope-ai/QwenPaw/pull/7183)
- **test(integration): expand integration coverage with 39 router/module test files** — [PR #7246](https://github.com/agentscope-ai/QwenPaw/pull/7246)
- **feat(qwenpaw-data): PyPI runtime path, docker-compose one-shot demo, and env inheritance fix** — [PR #7190](https://github.com/agentscope-ai/QwenPaw/pull/7190)

---

## 4. Community Hot Topics

Most active issues by comment count:

- **#6921** — Agent silently stops after saying things like “Now 2.1, 3.1, 3.2. Let me do all three.” and requires the user to type “继续” to continue. 11 comments.  
  [Issue #6921](https://github.com/agentscope-ai/QwenPaw/issues/6921)

- **#6782** — Docker 2.0.1: plugin market and app market persistently show “maintenance”. 9 comments. Closed.  
  [Issue #6782](https://github.com/agentscope-ai/QwenPaw/issues/6782)

- **#338** — Request for webhook functionality: external apps send messages to CoPaw and poll for responses via a key. 8 comments, 1 👍.  
  [Issue #338](https://github.com/agentscope-ai/QwenPaw/issues/338)

- **#7011** — Console stop request cancels an active Feishu session when session identity values cross between multiple UI sessions. 8 comments.  
  [Issue #7011](https://github.com/agentscope-ai/QwenPaw/issues/7011)

- **#3224** — Feature request for “CoPaw Agent Teams”: natural-language-driven, self-evolving multi-agent collaboration teams. 7 comments.  
  [Issue #3224](https://github.com/agentscope-ai/QwenPaw/issues/3224)

- **#5563** — Request to aggregate multi-step agent responses to avoid message spam/chat flooding. 6 comments.  
  [Issue #5563](https://github.com/agentscope-ai/QwenPaw/issues/5563)

- **#7224** — Russian-language help request: how to integrate Aider CLI (`aider-chat`) as a QwenPaw agent. 6 comments.  
  [Issue #7224](https://github.com/agentscope-ai/QwenPaw/issues/7224)

- **#7085** — Request for per-channel model configuration, e.g. DingTalk uses `gpt-4o`, WeChat uses `qwen-max`, console uses local `llama.cpp`. 5 comments.  
  [Issue #7085](https://github.com/agentscope-ai/QwenPaw/issues/7085)

**Underlying needs:** The most active discussions cluster around four themes:  
1. Long-running multi-step agent tasks are unreliable — silent halts, fragmented messages, and context compression interruptions.  
2. Multi-agent collaboration is still awkward — users want one shared session, better guidance, and stronger identity isolation.  
3. Configuration flexibility is a growing demand — per-channel models, webhooks, external agent harnesses.  
4. Resource stability — memory leaks and unbounded backend growth are painful for real deployments.

---

## 5. Bugs & Stability

Ranked by severity:

### Critical / High

- **Unbounded backend memory growth to 20GB+** — `qwenpaw-backend` grows from a few hundred MB to 20.7 GB over ~2 days of runtime. This is runtime accumulation, not startup leak.  
  [Issue #7222](https://github.com/agentscope-ai/QwenPaw/issues/7222)  
  Related but unmerged: [PR #7234](https://github.com/agentscope-ai/QwenPaw/pull/7234) restores periodic ReMe index compaction, marked **DO NOT MERGE**.

- **Windows memory leak + config corruption** — QwenPaw 1.1.12.post2 grows from ~150MB to ~580MB in ~64 minutes, then gets killed, and the config is corrupted on restart.  
  [Issue #5720](https://github.com/agentscope-ai/QwenPaw/issues/5720)

- **Console message sent to the wrong session** — When two sessions run in parallel or the user switches session/page while another turn is generating, the message can be delivered to the wrong session.  
  [Issue #7231](https://github.com/agentscope-ai/QwenPaw/issues/7231)  
  Fix PR open: [PR #7237](https://github.com/agentscope-ai/QwenPaw/pull/7237)

- **Console stop request cancels active Feishu session** — Session identity crossing between UI sessions causes cross-channel cancellation.  
  [Issue #7011](https://github.com/agentscope-ai/QwenPaw/issues/7011)  
  Also likely addressed by [PR #7237](https://github.com/agentscope-ai/QwenPaw/pull/7237).

- **Agent silently stops mid-task** — Frequent reports of the agent planning several steps, then stopping without visible output until the user says “继续”.  
  [Issue #6921](https://github.com/agentscope-ai/QwenPaw/issues/6921)

- **Transient MCP failure permanently blocks conversation** — A brief `streamable_http` MCP connection failure blocks the active conversation indefinitely after “automatic” reconnect.  
  [Issue #6822](https://github.com/agentscope-ai/QwenPaw/issues/6822)

### Medium

- **Dashboard takes 6+ minutes to load with 74 agents** — API works, but localhost dashboard is extremely slow under many agents.  
  [Issue #7242](https://github.com/agentscope-ai/QwenPaw/issues/7242)

- **Built-in tools enabled but not injected into session function schema** — Tool config shows all enabled, but tools are missing from the agent function schema.  
  [Issue #7210](https://github.com/agentscope-ai/QwenPaw/issues/7210)

- **`daily_paper` crashes on PDFs with surrogate characters** — `UnicodeEncodeError: surrogates not allowed` inside `write_atomic`.  
  [Issue #7199](https://github.com/agentscope-ai/QwenPaw/issues/7199)

- **Non-ASCII filename mojibake in file cards** — `send_file_to_user` with Chinese filenames shows percent-encoded text.  
  [Issue #7136](https://github.com/agentscope-ai/QwenPaw/issues/7136) — Closed.

### Low / Test Stability

- **Flaky nightly test**: `test_sibling_sessions_run_without_serializing` timing assertion fails intermittently on macOS runners.  
  [Issue #7121](https://github.com/agentscope-ai/QwenPaw/issues/7121)

---

## 6. Feature Requests & Roadmap Signals

Strongly requested features and likely roadmap candidates:

- **Workspace-scoped Skill preload policy** — Most skills stay on-demand; workspaces centered on a specific skill can opt into preload.  
  [Issue #7182](https://github.com/agentscope-ai/QwenPaw/issues/7182) → Open PR: [PR #7183](https://github.com/agentscope-ai/QwenPaw/pull/7183)

- **Webhook support** — Long-standing request for external apps to send messages to CoPaw and poll results by key.  
  [Issue #338](https://github.com/agentscope-ai/QwenPaw/issues/338)

- **CoPaw Agent Teams** — Natural-language-driven, self-evolving multi-agent collaboration teams.  
  [Issue #3224](https://github.com/agentscope-ai/QwenPaw/issues/3224)

- **Aggregate multi-step agent responses** — Avoid sending a separate card for every step in a multi-step task.  
  [Issue #5563](https://github.com/agentscope-ai/QwenPaw/issues/5563)

- **Per-channel model configuration** — Different models per channel, e.g. DingTalk, WeChat, console.  
  [Issue #7085](https://github.com/agentscope-ai/QwenPaw/issues/7085)

- **All agent collaboration in one session window** — Avoid creating a new session for every agent-to-agent conversation.  
  [Issue #6925](https://github.com/agentscope-ai/QwenPaw/issues/6925)

- **Optimize agent switching UI** — Show more agents per dropdown when many agents are configured.  
  [Issue #7179](https://github.com/agentscope-ai/QwenPaw/issues/7179)

- **Smarter approval policy** — Operations on intermediate/temp files created during a task should not require approval; only pre-existing files should.  
  [Issue #7198](https://github.com/agentscope-ai/QwenPaw/issues/7198)

- **Context compression only when session is idle** — Avoid compressing context while a task is actively executing.  
  [Issue #7230](https://github.com/agentscope-ai/QwenPaw/issues/7230)

- **Relational database storage for config/sessions and Microsoft Teams channel support**  
  [Issue #3425](https://github.com/agentscope-ai/QwenPaw/issues/3425)

- **Qwen_Code as a third-party agent harness** — Closed feature request, but indicates demand for more external harness integrations.  
  [Issue #7181](https://github.com/agentscope-ai/QwenPaw/issues/7181)

**Likely next-version signals:** The session-identity fix ([PR #7237](https://github.com/agentscope-ai/QwenPaw/pull/7237)), all-agent token usage trends ([PR #7219](https://github.com/agentscope-ai/QwenPaw/pull/7219)), and workspace-scoped Skill preload ([PR #7183](https://github.com/agentscope-ai/QwenPaw/pull/7183)) are the most concrete near-term additions.

---

## 7. User Feedback Summary

Real user pain points visible in the data:

- **Long-running agent tasks are still fragile.** Multiple users report silent stops, fragmented message cards, intrusive approval prompts at night, and context compression that interrupts active work. Some users are already manually working around the issue by setting maximum context sizes and pressing the “压缩” button manually.
- **Multi-agent collaboration is a top frustration area.** Users want agent-to-agent conversations to happen in a shared, visible session; they also want better guidance, identity isolation, and the ability to observe cross-agent activity from channels like Feishu.
- **Resource consumption hurts real deployments.** Memory leaks — especially on Windows and long-running Docker/backend processes — are affecting trust in the project. One user reported 20.7GB backend growth after two days.
- **Deployment and configuration UX needs attention.** Plugin/app market “maintenance” errors, slow dashboards with many agents, and hard-to-find configuration options are common complaints.
- **Users are actively requesting deeper integration.** Webhooks, Aider CLI, Qwen_Code, PowerContext memory backend, and per-channel model routing all show strong community interest.
- **Positive signals:** Contributors are submitting first-time PRs for README improvements and import flows, maintainers are shipping beta releases quickly, and the project is investing heavily in integration/e2e test coverage.

---

## 8. Backlog Watch

Items that have been open for a long time and/or have sustained community attention and likely need maintainer response:

- **#338 — Webhook feature request**  
  Open since 2026-03-02, 8 comments, 1 👍.  
  [Issue #338](https://github.com/agentscope-ai/QwenPaw/issues/338)

- **#3224 — CoPaw Agent Teams feature request**  
  Open since 2026-04-10, 7 comments.  
  [Issue #3224](https://github.com/agentscope-ai/QwenPaw/issues/3224)

- **#2420 — Multi-agent collaboration experience feedback**  
  Open since 2026-03-27, 4 comments.  
  [Issue #2420](https://github.com/agentscope-ai/QwenPaw/issues/2420)

- **#2750 — Multi-agent collaboration isolation/enhancement**  
  Open since 2026-04-01, 2 comments.  
  [Issue #2750](https://github.com/agentscope-ai/QwenPaw/issues/2750)

- **#3013 — Multi-agent interaction mechanism optimization**  
  Open since 2026-04-07, 3 comments.  
  [Issue #3013](https://github.com/agentscope-ai/QwenPaw/issues/3013)

- **#3425 — Relational database storage + Microsoft Teams channel**  
  Open since 2026-04-15, 2 comments.  
  [Issue #3425](https://github.com/agentscope-ai/QwenPaw/issues/3425)

- **#5563 — Aggregate multi-step agent responses**  
  Open since 2026-06-26, 6 comments.  
  [Issue #5563](https://github.com/agentscope-ai/QwenPaw/issues/5563)

- **#5720 — Windows memory leak and config corruption**  
  Open since 2026-07-02, 5 comments.  
  [Issue #5720](https://github.com/agentscope-ai/QwenPaw/issues/5720)

PRs that have been under review for a while and may need maintainer attention:

- **#6399 — Reranker UI config panel for ReMeLightMemoryCard** — Under review since 2026-07-23.  
  [PR #6399](https://github.com/agentscope-ai/QwenPaw/pull/6399)

- **#7080 — Optional PowerContext pluggable long-term memory backend** — Under review.  
  [PR #7080](https://github.com/agentscope-ai/QwenPaw/pull/7080)

- **#7066 — Persist rotated refresh_token for OAuth2 auth-code providers** — Under review; fixes a real MCP/OAuth issue.  
  [PR #7066](https://github.com/agentscope-ai/QwenPaw/pull/7066)

- **#6960 — Pawport: import flow from Codex/Qoder into QwenPaw** — First-time contributor PR, open since 2026-08-13.  
  [PR #6960](https://github.com/agentscope-ai/QwenPaw/pull/6960)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-08-25

## 1. Today's Overview
ZeptoClaw saw minimal activity in the last 24 hours: one new open issue (#650) and zero pull requests or releases. The project is in a quiet, low-velocity phase; no code changes merged and no version was published. The single issue is a well-scoped REPL UX hardening proposal, indicating targeted community interest in CLI polish rather than broad feature demand. Overall project health appears stable, with maintainers having clear headroom to address the pending CLI concern.

## 2. Releases
No new releases were published in the last 24 hours. The latest-releases list is empty, so no change notes, breaking changes, or migration guidance are available.

## 3. Project Progress
No pull requests were updated, merged, or closed in the last 24 hours. No feature work or bug fixes landed during this period.

## 4. Community Hot Topics
- [#650 [OPEN] feat(cli): REPL UX hardening — safe Ctrl+C/Ctrl+D, lone '/' command table](https://github.com/qhkm/zeptoclaw/issues/650)
  - Author: Suraware · Created/Updated: 2026-08-24 · Comments: 0 · 👍: 0
  - This is the only item touched in the period, and it has no comments or reactions yet. It reports two concrete UX problems in the `zeptoclaw agent` interactive REPL: (1) any Ctrl+C/Ctrl+D triggers an immediate, silent shutdown (`Err(Interrupted | Eof) => Goodbye!`), destroying in-progress sessions; (2) a lone `/` input falls into the `Unknown command: /` arm instead of showing a command table. Underlying needs: session-safety in interactive mode and better command discoverability/error messaging.

## 5. Bugs & Stability
No crashes or regressions were reported today. One issue with bug-like characteristics was filed (#650), ranked by severity:
- **Medium** — Ctrl+C/Ctrl+D causes unconditional silent exit, risking accidental loss of an active session.
- **Low** — Lone `/` input is misclassified as an unknown command rather than surfacing available slash commands.

No fix PRs exist yet; issue #650 itself proposes the hardening.

## 6. Feature Requests & Roadmap Signals
Issue #650 requests two CLI enhancements: graceful Ctrl+C/Ctrl+D handling (e.g., confirmation or non-destructive interrupt) and a command-table response for lone `/` input. Both are small, self-contained improvements to the REPL surface, making them plausible candidates for the next minor release if maintainers acknowledge and prioritize them.

## 7. User Feedback Summary
The only user signal today (Suraware via #650) expresses frustration with accidental session termination in the REPL—a common interrupt-handling footgun—and suboptimal slash-command discovery. No other satisfaction or dissatisfaction data is available given the absence of comments or reactions across the repo.

## 8. Backlog Watch
No long-unanswered issues or PRs are currently pending. The sole open issue (#650) was created within the last 24 hours and does not yet require escalation. Maintainers should monitor it for community engagement and clarify the intended Ctrl+C/Ctrl+D behavior in interactive mode.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-25

## 1. Today's Overview

ZeroClaw's development velocity remains high: 50 issues and 50 PRs were updated in the last 24 hours, with 7 issues closed and 5 PRs merged or closed. No releases were published in this window. The dominant theme is security hardening and provider reliability — an S0 delegate-privilege bypass ([#10165](https://github.com/zeroclaw-labs/zeroclaw/issues/10165)), cron-tool scoping ([#9948](https://github.com/zeroclaw-labs/zeroclaw/pull/9948)), and filesystem-mutation confinement ([#9977](https://github.com/zeroclaw-labs/zeroclaw/pull/9977)) are all in flight, while provider fallback and accounting fixes ([#10027](https://github.com/zeroclaw-labs/zeroclaw/pull/10027), [#10144](https://github.com/zeroclaw-labs/zeroclaw/pull/10144)) landed. The most-discussed item, RFC [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) (24 comments), proposes an OpenAI Chat Completions-compatible surface, signaling strong demand for ecosystem interoperability. A burst of eight new items from contributor JordanTheJet on 08-24 (TypeScript CI gating, pairing-code policy, shared-workspace access, SkillForge removal) indicates continued architectural cleanup and release-gate tightening.

## 3. Project Progress

Four merged/closed PRs are visible in the top-20 sample (plus one additional closure in the full set):

- **[#10208 — fix(tests): fix Windows platform test failures](https://github.com/zeroclaw-labs/zeroclaw/pull/10208)** (closed, principal contributor). Addressed unsafe `bash` invocation on Windows (`CreateProcess` searches system dir before `PATH` and hits a WSL launcher stub), plus related browser/shell/web/MCP-config test fixes. Meaningful cross-platform CI maturation.
- **[#9563 — fix(channels): populate the typed media envelope from Telegram](https://github.com/zeroclaw-labs/zeroclaw/pull/9563)** (closed). Telegram now fills `msg.attachments` with typed media instead of emitting `[IMAGE:<path>]` text markers. This was a prerequisite for the stacked skills PR [#8965](https://github.com/zeroclaw-labs/zeroclaw/pull/8965), which can now be rebased.
- **[#10027 — fix(providers): report the served model in reliable fallback failure logs](https://github.com/zeroclaw-labs/zeroclaw/pull/10027)** (merged, distinguished contributor). Resolves the diagnostic gap in [#10023](https://github.com/zeroclaw-labs/zeroclaw/issues/10023): retry/cooldown logs now name the actually-pinned fallback model.
- **[#10144 — fix(providers): complete lifecycle provider accounting](https://github.com/zeroclaw-labs/zeroclaw/pull/10144)** (merged, experienced contributor). Closes [#10143](https://github.com/zeroclaw-labs/zeroclaw/issues/10143) by adding a poll-owned `ProviderDispatch` collector that records each physical provider leaf exactly once across direct, Reliable, Router, model-pin, vision-override, and streaming paths.

Closed bug issues with fixes in this window: [#10251](https://github.com/zeroclaw-labs/zeroclaw/issues/10251) (telegram wall-clock timeout tests), [#9590](https://github.com/zeroclaw-labs/zeroclaw/issues/9590) (concurrent `models refresh` cache loss), [#10106](https://github.com/zeroclaw-labs/zeroclaw/issues/10106) (proxy selectors rejecting transcription services), [#10224](https://github.com/zeroclaw-labs/zeroclaw/issues/10224) (duplicated escaped JSON in 5xx logs), [#10190](https://github.com/zeroclaw-labs/zeroclaw/issues/10190) (reasoning fallback classifier over-matching). Maintainers are clearing bug debt at a healthy rate.

## 4. Community Hot Topics

- **[#8603 — RFC: ZeroClaw Chat Completions profile (24 comments)](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** — The clear engagement leader. Underlying need: today ZeroClaw exposes agents only via WebSocket, ACP, and webhooks, excluding an entire ecosystem of OpenAI-protocol clients (Open WebUI, LobeChat, Continue.dev, Aider, LangChain, OpenAI SDK). Status is `accepted` with `risk:high`; this is the strongest roadmap signal for a major integration milestone.
- **[#7431 — Pre-turn tool elicitation hints for natural-language routing (6 comments)](https://github.com/zeroclaw-labs/zeroclaw/issues/7431)** — Agents don't reliably call `send_via` explicitly, so route-by-language requests fail. Users need implicit intent extraction before the main LLM call. Accepted, no-stale, high risk.
- **[#9512 — Annotate bespoke CI gates with motivating issue/incident (5 comments)](https://github.com/zeroclaw-labs/zeroclaw/issues/9512)** — Contributor-friction request: gates like `repo-structure` and `nix-hash-drift` exist for undocumented historical reasons. Low risk, docs/CI quality-of-life.
- **[#9363 — Config metadata remains English in localized ZeroCode/web (4 comments)](https://github.com/zeroclaw-labs/zeroclaw/issues/9363)** — i18n incompleteness: shells and panes translate, but Config group headings/sections do not. S2 UX gap for non-English users.
- **[#7759 — Decouple gateway WebSocket lifetime from agent turn lifecycle (4 comments)](https://github.com/zeroclaw-labs/zeroclaw/issues/7759)** — Client disconnects cancel in-flight turns because WebSocket owns the turn 1:1. Users want background turn execution and resume-on-reconnect. P1, in-progress, high risk.
- **[#10165 — Independent delegate bypasses `block_high_risk_commands` (4 comments)](https://github.com/zeroclaw-labs/zeroclaw/issues/10165)** — Security-sensitivity match on a critical bug: a delegate with its own `risk_profile` can execute `rm` despite `block_high_risk_commands = true`.

## 5. Bugs & Stability

Ranked by reported severity:

**S0 — Critical / security**
- **[#10165 — Delegate bypasses `block_high_risk_commands` on its own risk profile](https://github.com/zeroclaw-labs/zeroclaw/issues/10165)** — High-risk commands succeed through an independent delegate even when its profile blocks them. Data-loss/security risk; `status:in-progress`. No dedicated fix PR visible yet; related diagnostics PR [#10234](https://github.com/zeroclaw-labs/zeroclaw/pull/10234) is open.

**S2 — Degraded behavior / high risk**
- **[#9812 — Provider fallback carries primary's model id, so it can never fire](https://github.com/zeroclaw-labs/zeroclaw/issues/9812)** — High risk, but flagged `r:needs-repro` and `status:stale`. A correctly configured fallback is poisoned into cooldown because the fallback is asked for the primary's model. This is the highest-impact open reliability bug.
- **[#9820 — Calculator tool: model emits literal `<TOOLCALL>` pseudo-syntax](https://github.com/zeroclaw-labs/zeroclaw/issues/9820)** — NVIDIA NIM (llama-3.3-nemotron-super-49b) on Raspberry Pi outputs pseudo-tool-call text instead of a real call; breaks calculator on compatible providers.
- **[#10068 — Interactive session caps context at 32k despite `max_context_tokens = 131072`](https://github.com/zeroclaw-labs/zeroclaw/issues/10068)** — Forced compaction at 32k in `zeroclaw agent` sessions. In-progress, medium risk.
- **[#10232 — Daemon diagnostics drop underlying error chain](https://github.com/zeroclaw-labs/zeroclaw/issues/10232)** — Supervisor records only `e.to_string()`, losing the cause. In-progress.
- **[#10238 — ZeroCode shows stale "Connected" state after daemon exits](https://github.com/zeroclaw-labs/zeroclaw/issues/10238)** — Green footer persists; `session/new` hangs until timeout.
- **[#10272 — Hailo log assertions flaky under parallel tests](https://github.com/zeroclaw-labs/zeroclaw/issues/10272)** — Nondeterministic failures from cross-test event capture; test-infra stability.
- **[#10178 — Daemon socket ownership error not actionable](https://github.com/zeroclaw-labs/zeroclaw/issues/10178)** — Fails closed correctly after #9846, but doesn't identify the active owner or recovery path.
- **[#10175 — Google TTS API key header not marked sensitive](https://github.com/zeroclaw-labs/zeroclaw/issues/10175)** — `x-goog-api-key` HeaderValue could leak into formatted request/header maps.
- **[#10199 — Plugin egress connect-deadline cannot cancel blocking `getaddrinfo`](https://github.com/zeroclaw-labs/zeroclaw/issues/10199)** — DNS resolution escapes the deadline via `spawn_blocking`; in-progress with follow-up.
- **[#9363 — Config metadata remains English in localized surfaces](https://github.com/zeroclaw-labs/zeroclaw/issues/9363)** — i18n gap (see Hot Topics).

**S3 — Minor**
- **[#10180 — ZeroCode paste mutates hidden composer while another surface owns input](https://github.com/zeroclaw-labs/zeroclaw/issues/10180)** — Bracketed-paste bypasses input-ownership checks.

**Closed this window (fixes available):** [#10023](https://github.com/zeroclaw-labs/zeroclaw/issues/10023) (fallback model logging, fixed by #10027), [#10251](https://github.com/zeroclaw-labs/zeroclaw/issues/10251) (telegram wall-clock tests), [#9590](https://github.com/zeroclaw-labs/zeroclaw/issues/9590) (models refresh race), [#10106](https://github.com/zeroclaw-labs/zeroclaw/issues/10106) (transcription proxy selectors), [#10224](https://github.com/zeroclaw-labs/zeroclaw/issues/10224) (escaped JSON logs), [#10190](https://github.com/zeroclaw-labs/zeroclaw/issues/10190) (fallback classifier over-match).

## 6. Feature Requests & Roadmap Signals

- **[#8603 — Chat Completions profile RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** (`accepted`, high risk). The single strongest next-version signal. If implemented, ZeroClaw becomes a drop-in agent backend for the OpenAI SDK ecosystem — a major adoption accelerant.
- **[#7759 — WebSocket/turn lifecycle decoupling](https://github.com/zeroclaw-labs/zeroclaw/issues/7759)** (P1, `in-progress`, `accepted`). Background turn execution + reconnect resume is likely in the next release.
- **[#10306 — Gate web/ TypeScript in required CI](https://github.com/zeroclaw-labs/zeroclaw/issues/10306)** (new, `accepted`). Repair master's `tsc` noise and add a `cargo web check` gate. Release-gate hardening.
- **[#10073 — Retire `StoragePolicy::Rolling`; query logs across segments](https://github.com/zeroclaw-labs/zeroclaw/issues/10073)** (`in-progress`, `accepted`). Fixes a performance regression in the default log storage policy.
- **[#10243 — Retire legacy HMAC node transport](https://github.com/zeroclaw-labs/zeroclaw/issues/10243)** (`in-progress`, refactor). Dead code/config removal.
- **[#10162 — Recoverable plugin install + config-entry seeding](https://github.com/zeroclaw-labs/zeroclaw/issues/10162)** (`in-progress`). Makes plugin installation transactional.
- **JordanTheJet's 08-24 new PR batch** — shared pairing-code policy with stronger default ([#10307](https://github.com/zeroclaw-labs/zeroclaw/pull/10307)), per-agent shared-workspace read gate ([#10308](https://github.com/zeroclaw-labs/zeroclaw/pull/10308)), orphaned SkillForge engine removal ([#10309](https://github.com/zeroclaw-labs/zeroclaw/pull/10309)), router body-limit tests ([#10310](https://github.com/zeroclaw-labs/zeroclaw/pull/10310)), centralized tool-call formatting ([#10311](https://github.com/zeroclaw-labs/zeroclaw/pull/10311)), and PR-review policy docs ([#10304](https://github.com/zeroclaw-labs/zeroclaw/pull/10304)). Collectively these point to a security-hardening + internal-cleanup release.
- **[#8289 — OIDC milestone tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/8289)** — Long-running roadmap tracker for canonical principals and inbound authentication; still active but no recent movement.

## 7. User Feedback Summary

- **Ecosystem interop is the top want.** The 24-comment RFC [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) shows real demand from users of Open WebUI/LobeChat/Aider/LangChain-style tooling. This is the clearest "users are asking to plug us into their existing stack" signal.
- **Security trust is being tested.** The S0 delegate bypass ([#10165](https://github.com/zeroclaw-labs/zeroclaw/issues/10165)) is a "data loss / security risk" report from a user who configured `block_high_risk_commands = true` and still saw `rm` succeed. Confidence hinges on this being fixed promptly.
- **Reliability pain points recur across surfaces:** sessions that ignore configured context limits ([#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068)), in-flight turns killed by WebSocket drops ([#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759)), stale UI state ([#10238](https://github.com/zeroclaw-labs/zeroclaw/issues/10238)), and a fallback system that can silently never fire ([#9812](https://github.com/zeroclaw-labs/zeroclaw/issues/9812)).
- **Real-world compatible-provider friction:** the Raspberry Pi / NVIDIA NIM calculator failure ([#9820](https://github.com/zeroclaw-labs/zeroclaw/issues/9820)) demonstrates that non-OpenAI providers emit nonstandard tool-call syntax that ZeroClaw must normalize.
- **Positive signals:** provider observability fixes landed quickly (#10027, #10144), and maintainers are closing accepted bugs at a steady clip (7 issues closed in 24h). Localization users still see partial i18n ([#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363)), a satisfaction drag for non-English deployments.

## 8. Backlog Watch

- **[#9812 — Provider fallback carries primary's model id (created 08-07, stale, needs-repro, high risk)](https://github.com/zeroclaw-labs/zeroclaw/issues/9812)** — Quietly stale despite being a "fallback can never fire" reliability bug. Needs a maintainer repro decision; the related logging fix #10027 landed but does not address root cause.
- **[#9948 — Scope cron tools to the calling agent (created 08-12, do-not-merge, needs-maintainer-review)](https://github.com/zeroclaw-labs/zeroclaw/pull/9948)** — Security-relevant (any agent could list/trigger/remove any job's runs/output). Blocked on maintainer review.
- **[#9977 — Confine filesystem mutations to workspace (created 08-13, needs-maintainer-review, XL)](https://github.com/zeroclaw-labs/zeroclaw/pull/9977)** — Large security hardening PR (symlink/authorization boundary work). Needs maintainer bandwidth.
- **[#9678 — Harden Git shell policy arguments (created 08-02, needs-author-action, XL)](https://github.com/zeroclaw-labs/zeroclaw/pull/9678)** — Waiting on author response; high risk and long-pending.
- **[#8965 — Declarative skill auto-activation (created 07-11, stacked, needs-author-action)](https://github.com/zeroclaw-labs/zeroclaw/pull/8965)** — Its blocker [#9563](https://github.com/zeroclaw-labs/zeroclaw/pull/9563) merged this window; the branch now needs a rebase and author follow-through.
- **[#7431 — Pre-turn tool elicitation hints (created 06-09, accepted, no-stale)](https://github.com/zeroclaw-labs/zeroclaw/issues/7431)** — Oldest accepted enhancement after #8603; no assignee visible. Would meaningfully improve NL routing.
- **[#8289 — OIDC milestone tracker (created 06-24)](https://github.com/zeroclaw-labs/zeroclaw/issues/8289)** — Large roadmap tracker; watch for stage progress.
- **Needing author action (PR review bottleneck):** [#9707](https://github.com/zeroclaw-labs/zeroclaw/pull/9707) (vision_model_provider alias migration), [#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) (token accounting on history-trim), [#10241](https://github.com/zeroclaw-labs/zeroclaw/pull/10241) (supervised shell approval routing), [#10246](https://github.com/zeroclaw-labs/zeroclaw/pull/10246) (expose configured channels to sessions).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*