# OpenClaw Ecosystem Digest 2026-08-13

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-13 01:00 UTC

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

# OpenClaw Project Digest — 2026-08-13

## 1. Today's Overview

OpenClaw remains in a high-intensity maintenance and bugfix cycle: 500 issues and 500 PRs were updated in the last 24 hours, with 392 open/active issues and 108 closed issues, plus 157 merged/closed PRs among the updated set. No new releases were published in this window, so all visible activity is happening against the current codebase. The dominant themes are reliability of subagent orchestration, silent message/completion loss, session-lane and auth timeouts, and regressions following recent fixes. Community engagement is heavily concentrated on recurring delivery failures and on trust/security around agent memory.

## 2. Releases

No new releases were published in the last 24 hours. There are no release notes, breaking-change notices, or migration notes to summarize.

## 3. Project Progress

While no release shipped, the PR stream shows active forward movement across channels, agents, CI, and model/provider support.

Notable closed PRs in this window:

- [PR #122852](https://github.com/openclaw/openclaw/pull/122852) — CI: fingerprint preferred pnpm hooks to protect dependency snapshots from future `.pnpmfile.mjs` changes.
- [PR #122883](https://github.com/openclaw/openclaw/pull/122883) — fix(agents): repair extension fixtures for explicit ownership, unblocking other extension PRs.

Key open PRs advancing fixes and features:

- [PR #122862](https://github.com/openclaw/openclaw/pull/122862) — fix(matrix): resolve exact room session routes for explicit Matrix room delivery.
- [PR #122889](https://github.com/openclaw/openclaw/pull/122889) — fix: restore Gateway startup for migrated multi-agent configs.
- [PR #122887](https://github.com/openclaw/openclaw/pull/122887) — fix(ui): unblock builds after startup bundle growth.
- [PR #122877](https://github.com/openclaw/openclaw/pull/122877) — fix(telegram): prevent multi-agent startup migration false positives.
- [PR #122650](https://github.com/openclaw/openclaw/pull/122650) — fix(reasoning-tags): strip `<internal>` reflection blocks from visible replies.
- [PR #122824](https://github.com/openclaw/openclaw/pull/122824) — fix: preserve session history when compaction quality checks fail.
- [PR #122762](https://github.com/openclaw/openclaw/pull/122762) — feat(xai): add Grok 4.6 catalog and preserve OAuth xhigh behavior.
- [PR #122344](https://github.com/openclaw/openclaw/pull/122344) — fix(models): make model picker discovery profile-aware.

## 4. Community Hot Topics

The most active issues reveal that users are primarily concerned with reliability, data loss, and security boundaries.

- [#121058 — Silent reply failures still recurring after #116277 closed](https://github.com/openclaw/openclaw/issues/121058)  
  91 comments. This is the single hottest issue. Users report that silent reply failures continue even after a prior fix was marked closed. The underlying need is for a durable, observable delivery mechanism that does not fail silently.

- [#7707 — Feature Request: Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707)  
  45 comments. Users want agent memory entries tagged by trust level based on origin, to prevent memory poisoning via web scrapes or third-party skills. This is a security/architecture request with broad community interest.

- [#44925 — Subagent completion silently lost — no retry, no notification, no auto-restart on timeout](https://github.com/openclaw/openclaw/issues/44925)  
  26 comments. A P1 reliability issue covering multiple subagent failure modes. Users need lossless subagent completion delivery with retries and visibility.

- [#77598 — Track live dev agent behavior and trajectory](https://github.com/openclaw/openclaw/issues/77598)  
  23 comments. Maintainer-run observation issue for a 24-hour watch of a dev agent. Useful for understanding real-world agent behavior but not a user-facing feature.

- [#39604 — Feature: Add tools.web.fetch.allowPrivateNetwork](https://github.com/openclaw/openclaw/issues/39604)  
  12 👍 reactions. Closed as already fixed, but the high reaction count shows demand for opt-in private-network fetch access.

- [#91363 — Isolated cron consistently fails with "LLM request failed"](https://github.com/openclaw/openclaw/issues/91363)  
  6 👍 reactions. Users are hitting deterministic cron failures unrelated to provider availability.

## 5. Bugs & Stability

Multiple P1 reliability and data-loss bugs are active. The overall stability picture is concerning: several fixes have closed, but related failure modes keep resurfacing.

Ranked by severity and impact:

- **Recurring silent reply failures**  
  [#121058](https://github.com/openclaw/openclaw/issues/121058) — Silent reply failures still occurring after a prior fix; no queued reply payload. Very high community impact.

- **Subagent completion loss cluster**  
  [#44925](https://github.com/openclaw/openclaw/issues/44925), [#67777](https://github.com/openclaw/openclaw/issues/67777), [#92433](https://github.com/openclaw/openclaw/issues/92433), [#47975](https://github.com/openclaw/openclaw/issues/47975) — Subagent completions can be silently dropped, orphaned, or steered into runs that never process them. This is the most persistent stability theme.

- **Multi-agent orchestration instability**  
  [#43367](https://github.com/openclaw/openclaw/issues/43367) — Concurrent `agents add`, session-lock failures, and detached child work make multi-agent runs unreliable.

- **Cron and LLM call failures**  
  [#91363](https://github.com/openclaw/openclaw/issues/91363) — Isolated cron jobs fail before model requests reach the provider.  
  [#43374](https://github.com/openclaw/openclaw/issues/43374) — All LLM API calls time out simultaneously despite APIs being reachable.

- **Auth and startup regressions**  
  [#89278](https://github.com/openclaw/openclaw/issues/89278) — Codex OAuth refresh succeeds but cron/heartbeat hit a 10s timeout.  
  [#111498](https://github.com/openclaw/openclaw/issues/111498) — Main agent blocked by persistent workspace-state migration after Anthropic auth recovery.  
  [#78493](https://github.com/openclaw/openclaw/issues/78493) — `sudo openclaw update` can create mixed ownership and lead to config overwrite.

- **Channel delivery failures**  
  [#97983](https://github.com/openclaw/openclaw/issues/97983) — iOS/WebChat messages append to transcript but do not trigger assistant replies.

- **Resource and availability issues**  
  [#72015](https://github.com/openclaw/openclaw/issues/72015) — active-memory blocks replies and QMD boot initialization can overload gateways.  
  [#54488](https://github.com/openclaw/openclaw/issues/54488) — Session lane starvation delays inbound messages for 20–30 minutes.  
  [#40611](https://github.com/openclaw/openclaw/issues/40611) — Heartbeat retry behavior blocks Telegram during active conversations.  
  [#97616](https://github.com/openclaw/openclaw/issues/97616) — Leaked hook/tool child processes cause zombie accumulation.

Several fix PRs are already in flight for related issues:

- [PR #122877](https://github.com/openclaw/openclaw/pull/122877) — Telegram multi-agent startup false positives.
- [PR #122864](https://github.com/openclaw/openclaw/pull/122864) — Telegram requeue of aborted ingress claims.
- [PR #122650](https://github.com/openclaw/openclaw/pull/122650) — Strip `<internal>` reflection blocks from visible replies.
- [PR #122824](https://github.com/openclaw/openclaw/pull/122824) — Preserve session history when compaction quality checks fail.
- [PR #110898](https://github.com/openclaw/openclaw/pull/110898) — Bound active-memory recall context to 25K chars.
- [PR #110529](https://github.com/openclaw/openclaw/pull/110529) — Longer backoff for 429 embedding rate-limit errors.
- [PR #110835](https://github.com/openclaw/openclaw/pull/110835) — Bound doctor session-snapshot reads.
- [PR #110841](https://github.com/openclaw/openclaw/pull/110841) — Bound Vault JSON response bodies.

## 6. Feature Requests & Roadmap Signals

Users continue to push for configurability, security, and better observability. Likely candidates for upcoming releases include:

- **Memory trust tagging by source**  
  [#7707](https://github.com/openclaw/openclaw/issues/7707) — High community engagement; could move into design/roadmap if security review supports it.

- **YAML config file support**  
  [#45758](https://github.com/openclaw/openclaw/issues/45758) — Repeatedly requested UX improvement for config readability.

- **Skill priority configuration**  
  [#50199](https://github.com/openclaw/openclaw/issues/50199) — Users want deterministic skill selection when multiple skills overlap.

- **Self-hosted STT/TTS in webchat**  
  [#45508](https://github.com/openclaw/openclaw/issues/45508) — Route webchat voice through the gateway instead of browser Speech API.

- **TTL/expiry for delivery queue messages**  
  [#16555](https://github.com/openclaw/openclaw/issues/16555) — Aimed at preventing stale/orphaned outbound messages after gateway restart.

- **Expose OpenRouter usage cost to agent runtime**  
  [#9016](https://github.com/openclaw/openclaw/issues/9016) — Cost-aware agent behavior is an ongoing enterprise-adjacent request.

- **Session auto-titling**  
  [#99583](https://github.com/openclaw/openclaw/issues/99583) — Cheap lazy title generation with topic-aware renames; an LLM slug generator already exists in the codebase.

- **Android chat-first surface**  
  [#46058](https://github.com/openclaw/openclaw/issues/46058) — Independent fork exploring a mobile client; maintainers have not committed upstream.

## 7. User Feedback Summary

User sentiment is mixed: there is clear enthusiasm for OpenClaw's feature direction, but frustration is rising around reliability regressions and silent failures.

- **Recurring silent failures are the top pain point.**  
  [#121058](https://github.com/openclaw/openclaw/issues/121058) shows that users no longer trust "fixed" status when the same failure mode keeps appearing. The demand is for explicit queued payloads, retries, and notifications.

- **Subagent orchestration is fragile in practice.**  
  Multiple P1 issues report lost completions, unresponsive parent sessions, and detached work. Users need deterministic behavior for parallel and long-running agent tasks.

- **Auth and heartbeat timeouts are disrupting real deployments.**  
  Issues like [#89278](https://github.com/openclaw/openclaw/issues/89278) and [#40611](https://github.com/openclaw/openclaw/issues/40611) describe normal operations being blocked by internal timing assumptions.

- **Security-conscious users want memory isolation.**  
  [#7707](https://github.com/openclaw/openclaw/issues/7707) reflects broader concern about prompt-injection and memory poisoning from untrusted content.

- **Positive signal: feature requests receive maintainer attention.**  
  Several feature requests, such as [#39604](https://github.com/openclaw/openclaw/issues/39604) and [#8299](https://github.com/openclaw/openclaw/issues/8299), were closed as already fixed, showing that community feedback does translate into shipped changes.

## 8. Backlog Watch

Several important issues and PRs have remained open for a long time despite maintainer review labels or high user impact.

- [#7707 — Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707)  
  Open since February 2026, 45 comments, still awaiting maintainer product/security decision.

- [#9016 — Expose OpenRouter usage cost to agent runtime](https://github.com/openclaw/openclaw/issues/9016)  
  Open since February 2026, no new fix PR.

- [#16555 — Add TTL/Expiry for Delivery Queue Messages](https://github.com/openclaw/openclaw/issues/16555)  
  Open since February 2026, directly relevant to the recurring delivery-queue problems.

- [#45758 — Support YAML as config file format](https://github.com/openclaw/openclaw/issues/45758)  
  Open since March 2026, needs product decision.

- [#45508 — Self-hosted STT/TTS support in webchat](https://github.com/openclaw/openclaw/issues/45508)  
  Open since March 2026, has reproduction and maintainer review but no fix PR.

- [#50199 — Add Skill Priority Configuration](https://github.com/openclaw/openclaw/issues/50199)  
  Open since March 2026, waiting on product decision.

- [#89278 — Codex OAuth refresh timeout breaks cron/heartbeat](https://github.com/openclaw/openclaw/issues/89278)  
  P1 regression, open since June 2026, still needs maintainer review.

- [PR #90062 — fix(agent): infer agent from fresh session keys](https://github.com/openclaw/openclaw/pull/90062)  
  Open since June 2026, touching auth and session state, still needs proof.

- [PR #110138 — fix(openrouter): add model-aware tool schema normalization](https://github.com/openclaw/openclaw/pull/110138)  
  Open since July 2026, waiting on author, but addresses provider-compatibility failures.

- [PR #110998 — fix(opencode): public models work without configured credentials](https://github.com/openclaw/openclaw/pull/110998)  
  Open since July 2026, large scope, still needs proof.

Overall, OpenClaw is actively developed and responsive, but the backlog shows a need to consolidate reliability fixes around subagent delivery, auth timeouts, and multi-agent orchestration before users will consider those areas stable.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — Personal AI Assistant / Agent Open-Source Ecosystem

**Date:** 2026-08-13 | **Data window:** 24 hours ending 2026-08-13

---

## 1. Ecosystem Overview

The personal AI assistant open-source landscape is bifurcating into two clusters: large, community-driven reference platforms (OpenClaw, Hermes, ZeroClaw) that are consolidating features under heavy reliability pressure, and smaller security- or niche-focused forks (NanoBot, CoPaw, IronClaw) that are iterating rapidly on specific pain points such as tool confinement, channel reliability, and plugin extensibility. The dominant cross-project theme is **delivery trust**: silent message loss, subagent completion drops, and unacknowledged failures are the top complaint across nearly every active project. Simultaneously, the plugin/skill ecosystem is emerging as the primary competitive surface — every major project is investing in plugin APIs, manifest versioning, and capability gating. The "Claw" naming family (OpenClaw, PicoClaw, NanoClaw, ZeptoClaw, NullClaw) reflects a fork ecosystem where OpenClaw remains the de-facto reference, but it no longer enjoys automatic superiority in stability or security posture.

---

## 2. Activity Comparison

| Project | Issues Updated (closed/open) | PRs Updated (merged/open) | Release Status | Health Score* | Notes |
|---|---|---|---|---|---|
| **OpenClaw** | 500 (108 closed / 392 open) | 500 (157 merged / 343 open) | None in window | **6.5/10** | Massive volume, but recurring P1 data-loss bugs erode user trust |
| **NanoBot** (HKUDS) | 8 (4 closed / 4 open) | 36 (17 merged / 19 open) | None in window | **8/10** | Highest fix velocity relative to issue count; P1 security patches landing within days |
| **Hermes Agent** (NousResearch) | 50 (13 closed / 37 open) | 50 (3 merged / 47 open) | None in window | **6/10** | Feature-dense plugin expansion, but 47 open PRs and unresolved P1 desktop regressions |
| **IronClaw** (nearai) | 41 (12 closed / 29 open) | 50 (19 merged / 31 open) | **v1.2.0-rc.2 + rc.3** | **8/10** | Clean release-candidate cadence; QA bug-bash cluster on Telegram is well-characterized |
| **CoPaw** (QwenPaw) | 29 (7 closed / 22 open) | 42 (15 merged / 27 open) | **v2.1.0-beta.4** | **7/10** | Healthy beta iteration; stability debt (silent stalls, Windows crashes) is real but being addressed |
| **ZeroClaw** | 50 (5 closed / 45 open) | 50 (14 merged / 36 open) | None in window | **7/10** | Strong contributor momentum; S1 web-fetch and desktop bugs remain open |
| **NanoClaw** (qwibitai) | 4 (0 closed / 4 open) | 10 (1 merged / 9 open) | None in window | **6/10** | Agent-plugin migration near landing; two fresh migration regressions |
| **LobsterAI** | 6 (2 closed / 4 open) | 8 (7 merged / 1 open) | Release-prep closed (no assets) | **6/10** | Steady UI/stability fixes; long-stale issues on Windows sandbox and uninstall behavior |
| **PicoClaw** (sipeed) | 2 (0 closed / 2 open) | 3 (0 merged / 3 open) | None in window | **4/10** | Low activity; stale-labeled bugs with no linked fixes; PRs awaiting review |
| **NullClaw** | 0 | 0 | — | N/A | No activity |
| **Moltis** | 0 | 0 | — | N/A | No activity |
| **ZeptoClaw** | 0 | 0 | — | N/A | No activity |

*\*Health score is a qualitative composite of: issue closure rate, PR merge velocity, critical-bug count, release cadence, and maintainer responsiveness observed in the window.*

---

## 3. OpenClaw's Position

**Advantages:**
- **Unmatched community scale** — 500 issues/500 PRs touched in 24 hours is an order of magnitude above every peer; no other project approaches this contributor base.
- **Broadest channel & model coverage** — Matrix, Telegram, iOS/WebChat, multi-agent configs, Grok 4.6 catalog, CRON, and gateway features position it as the most complete general-purpose assistant platform.
- **Ecosystem gravity** — The PicoClaw/NanoClaw/ZeptoClaw fork family indicates OpenClaw serves as the upstream reference, giving it de-facto standard-setter influence on architecture and naming.

**Weaknesses relative to peers:**
- **Reliability debt is the worst in the ecosystem.** Silent reply failures (#121058, 91 comments), subagent completion loss (#44925), and session-lane starvation are long-running and recurring after "fixed" status — while NanoBot and IronClaw are closing similar classes of bugs within days.
- **Security posture is reactive.** Memory trust tagging (#7707) has been open since February with no product decision, while NanoBot shipped ExecTool confinement and Jina credential-leak fixes in the same window.
- **No release in this window** contrasts with IronClaw's two RCs and CoPaw's beta — the project appears to be in a long stabilization trough without a clear ship date.

**Technical approach difference:** OpenClaw's monorepo-plus-extensions model maximizes flexibility and community contribution surface, but the volume creates coordination overhead — visible in the multi-agent migration false-positive PRs and the need for CI fingerprinting fixes. Smaller projects with narrower scopes (NanoBot's security focus, IronClaw's enterprise stabilization) can close bugs faster.

---

## 4. Shared Technical Focus Areas

The following requirements are emerging independently across multiple projects, indicating genuine ecosystem-level demand:

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **Lossless subagent/completion delivery** | OpenClaw (#44925, #67777), CoPaw (#6927 infinite loops, #6918 shadow instances), IronClaw (automation execution contracts) | Retry with backoff, orphan detection, completion receipts, no-silent-drop guarantees |
| **Memory transparency & trust isolation** | OpenClaw (#7707 trust tagging), Hermes (redaction registry, cache-safe injection), CoPaw (#6853 prompt honesty fix), ZeroClaw (#6998 schema-validated consolidation), IronClaw (durable storage abstraction) | Source-based trust levels, anti-poisoning, honest documentation of what the agent persists |
| **Plugin/extension API stability** | Hermes (plugin manifest v2, event bus, capability consent), CoPaw (Apps marketplace, configurator regression), NanoClaw (Agent Plugins 1.0.0), IronClaw (extension admin config), OpenClaw (skills ecosystem) | Versioned manifests, dependency declaration, permission consent flows, discovery/search |
| **Token & latency cost reduction** | Hermes (#6839 two-pass tool injection, 18👍), OpenClaw (OpenRouter cost exposure), CoPaw (KV prefix-cache stabilization), IronClaw (token-estimator fix, compact Google extensions) | Lazy schema loading, cache-friendly prompt ordering, per-model thinking/effort control |
| **Cross-platform desktop reliability** | ZeroClaw (74 Windows test failures), CoPaw (Windows crashes/freezes), LobsterAI (Windows plugin installs), Hermes (Linux keychain, Windows atomic_replace), IronClaw (Windows first-start, atomic rename) | Windows/macOS CI coverage, installer correctness, keychain/secret storage, filesystem atomicity |
| **Channel delivery correctness** | IronClaw (Telegram cluster: 10+ issues), OpenClaw (Telegram, Matrix, iOS), NanoClaw (WhatsApp, Signal, Telegram), PicoClaw (Telegram topics), ZeroClaw (Discord typing indicator) | Webhook lifecycle management, media handling, message ordering, thread semantics, read-receipt parity |
| **Privacy/security hardening of web tools** | NanoBot (Jina credential leakage, ExecTool path guards), ZeroClaw (SSRF gate, web_fetch compression), OpenClaw (private-network fetch), CoPaw (plugin cron injection) | URL sanitization, workspace confinement, SSRF protection, permission gating |
| **Multi-agent orchestration & session management** | OpenClaw (multi-agent config migration), Hermes (multi-gateway tabs), CoPaw (#6925 single-session collaboration), PicoClaw (routed-agent context), ZeroClaw (slash-command unification) | Deterministic routing, session identity stability, unified command registries |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architectural Signature |
|---|---|---|---|
| **OpenClaw** | General-purpose assistant; maximal channel/model breadth | Hobbyists to prosumers; DIY deployers | Monorepo + extension/skills ecosystem; large Rust/Node surface |
| **NanoBot** | Security-hardened, privacy-preserving agent runtime | Privacy-sensitive users; research community (HKUDS) | Python; ExecTool workspace confinement, local-first web fetch, credential-safe providers |
| **Hermes Agent** | Plugin-first agent operating system; desktop gateway | Developers building custom agents; Nous Research ecosystem | Plugin manifest v2, event bus, `ctx.inject_message`, capability consent; desktop-centric UX |
| **IronClaw** | Enterprise-grade stabilized agent; cloud/hosted deployments | Teams/orgs; Railway-style hosted instances | Release-candidate discipline, v1.2.0 stabilization, design-system WebUI, automation execution contracts |
| **CoPaw (QwenPaw)** | Consumer desktop assistant with memory/diary features | Chinese-language power users; AgentScope ecosystem | AgentScope 2.x backend; TUI+Web+ACP; subagent orchestration with persistent Inbox concepts |
| **ZeroClaw** | Developer/coding-agent workflows | Developers using ZeroCode TUI; CI-minded operators | ZeroCode coding agent, LSP ambitions, strong supply-chain governance (Semgrep, deny.toml, attestation) |
| **NanoClaw** | Lightweight OpenClaw-compatible CLI | CLI-first users; template/plugin adopters | Agent Plugins 1.0.0 template migration; wizard-based setup; skill-based provider integration |
| **LobsterAI** | Chinese-market desktop assistant (Feishu/cowork) | Windows users in China; team collaboration | Electron desktop; model-provider onboarding UX; plugin install atomics |
| **PicoClaw** | Lightweight embedded/edge agent | Resource-constrained hobbyists (Sipeed hardware) | Small footprint; Discord routing; MCP integration; Web UI |

**Key architectural fork:** The ecosystem splits between **Python-first** security/research projects (NanoBot, CoPaw) and **Rust/Node-first** performance/breadth projects (OpenClaw, IronClaw, ZeroClaw). Python projects ship security fixes faster; Rust/Node projects ship broader feature surfaces faster.

---

## 6. Community Momentum & Maturity

**Tier 1 — High velocity, feature-expanding:**
- **OpenClaw** — Volume leader; iterating on every surface simultaneously, but needs a consolidation release to restore user trust.
- **Hermes** — Fastest feature expansion (plugin wave: 7+ PRs in one day from maintainers); stabilization is the gating risk.
- **ZeroClaw** — Strong contributor diversity (distinguished-contributor PRs landing); S1 bugs indicate platform maturity still forming.
- **IronClaw** — Best release discipline in the ecosystem; RC cadence with backport lines (1.1.1-rc.1 + 1.2.0-rc.3) is a mature pattern.

**Tier 2 — Steady-state iteration:**
- **NanoBot** — Small but exceptionally efficient; closing security P1s within days. Model of focused velocity.
- **CoPaw** — Beta-driven momentum with a responsive maintainer team; Chinese-language community is detailed and engaged.
- **NanoClaw** — Preparing for a significant template/plugin migration; current velocity is moderate but purposeful.
- **LobsterAI** — Consistent UI/UX polish; low community engagement but healthy merge rate.

**Tier 3 — Contribution-heavy, review-pending:**
- **PicoClaw** — Community is submitting meaningful PRs (Exa provider, Telegram topics, context management), but maintainer review is stalled. Risk: contributor attrition.

**Inactive:** NullClaw, Moltis, ZeptoClaw — no observable pulse; likely abandoned or dormant.

---

## 7. Trend Signals

**1. Silent failure is the ecosystem's #1 trust killer.** Across OpenClaw (#121058), CoPaw (#6921), NanoClaw (#2346), and IronClaw (Telegram routine-delivery failures), users consistently report agents that *appear* to work but never deliver. The industry expectation is shifting: **agents must provide explicit delivery receipts, retry visibility, and non-silent failure modes.** Any agent developer treating "best-effort" delivery as acceptable is building against the grain of user expectations.

**2. Memory transparency is becoming a security requirement, not a feature.** OpenClaw's trust-tagging request, CoPaw's prompt-honesty fix, Hermes's redaction registry, and ZeroClaw's schema-validated consolidation all point to the same conclusion: users will demand **source-attributed memory, explicit opt-outs, and honest system prompts** about what persists. Memory poisoning via untrusted content is the next attack vector everyone is quietly preparing for.

**3. Plugin ecosystems are the new competitive moat — but need governance.** Hermes's manifest v2 with versioning/dependencies/consent, CoPaw's Apps marketplace, NanoClaw's Agent Plugins 1.0.0, and IronClaw's extension admin-config all landed or advanced in the same 24-hour window. The differentiator is no longer *whether* you have plugins, but whether your plugin API has **stable versioning, permission consent flows, and discovery tooling.**

**4. Multi-agent orchestration is the hardest unsolved problem.** Lost subagent completions (OpenClaw), infinite subagent loops (CoPaw), shadow sessions (CoPaw), and routed-agent context loss (PicoClaw) indicate that **parallel agent execution with deterministic delivery remains unsolved across the entire ecosystem.** This is the highest-value engineering opportunity for differentiation.

**5. Windows/desktop reliability is the new adoption bottleneck.** ZeroClaw's 74 test failures, CoPaw's Windows crashes, LobsterAI's plugin-install fixes, and IronClaw's Windows atomic-rename RC all signal that tools built for Linux-first developers are hitting friction as agents move to end-user desktops. **Cross-platform CI and Windows-specific hardening are table stakes for 2027.**

**6. Token/cost efficiency is a top user demand, not a minor optimization.** Hermes's 18👍 lazy-tool-schema request, CoPaw's KV-cache stabilization PR, and IronClaw's token-estimator double-counting fix show users are actively measuring per-call overhead. **Agents that waste 2,000–5,000 tokens per turn on full schemas will lose to agents that don't.**

**7. Security-consciousness is rising across the fork family.** The most notable shift in this window: even in a 24-hour snapshot, we see NanoBot closing a Jina credential-leak fix, CoPaw flagging plugin cron injection without approval, ZeroClaw working SSRF gating, and OpenClaw re-surfacing memory-trust-tagging demand. **Security posture is becoming a visible differentiator in project health scores and user trust.**

---

*Report compiled from public GitHub community digest data for 2026-08-13. All metrics reflect the stated 24-hour update window and are indicative of project velocity and health, not absolute code quality.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

## 1. Today's Overview

NanoBot had a highly active 24-hour window: **8 issues were updated** (4 closed, 4 open) and **36 PRs were touched** (19 open, 17 closed/merged). No new releases were published during the period. The activity profile was dominated by security hardening and stability fixes — especially around `ExecTool` workspace confinement, Docker capability handling, WebFetch/Jina credential leakage, and session persistence. The project also shows strong external contributor momentum, with multiple P1/P2 fixes landing from a diverse set of authors.

## 2. Releases

**No new releases** were detected in the last 24 hours. Version-specific changes, breaking changes, and migration notes are therefore omitted.

## 3. Project Progress

Among the 17 closed/merged PRs updated in the last 24 hours, the following are the most notable:

- **[PR #5329](https://github.com/HKUDS/nanobot/pull/5329) — `fix(exec): guard bare and named-user home paths`**  
  Closes workspace-boundary bypasses in `ExecTool` via improved tilde-expansion detection, including `~`, `~user`, redirects, and assignment/option values.

- **[PR #5258](https://github.com/HKUDS/nanobot/pull/5258) — `fix(web): keep credential-bearing URLs away from the remote Jina reader`**  
  Fixes the WebFetch privacy issue where userinfo/token-bearing URLs were sent to Jina; now routed through the local readability path.

- **[PR #5320](https://github.com/HKUDS/nanobot/pull/5320) — `fix(docker): restore capabilities for privilege drop`**  
  Restores required capabilities while keeping `cap_drop: ALL` and enables `no-new-privileges` for safer root bootstrap.

- **[PR #5230](https://github.com/HKUDS/nanobot/pull/5230) — `fix(gemini): preserve imported tool calls with signature fallback`**  
  Prevents Gemini 3 replay rejection when reasoning signatures are absent from imported provider conversations.

- **[PR #5218](https://github.com/HKUDS/nanobot/pull/5218) — `fix(tools): treat redirection and grouping delimiters in ExecTool path guard`**  
  Further improves `ExecTool` workspace guard to handle paths adjacent to shell redirection/grouping operators without breaking quoted paths.

- **[PR #5279](https://github.com/HKUDS/nanobot/pull/5279) — `fix(session): store session history outside the agent workspace`**  
  Moves session transcripts from `<workspace>/sessions/` to `<config-dir>/sessions/`, closing a reachability risk from workspace-scoped tools.

- **[PR #5362](https://github.com/HKUDS/nanobot/pull/5362) — `feat(providers): support DeepSeek V4 Pro Responses`**  
  Adds native Responses API routing for `deepseek-v4-pro` and preserves explicit `reasoning.effort: "none"`.

- **[PR #4878](https://github.com/HKUDS/nanobot/pull/4878) — `feat(hooks): add auto-discovery mechanism for agent hooks`**  
  Adds pkgutil scanning + entry-point-based hook discovery, mirroring the existing channel/tool auto-registration pattern.

## 4. Community Hot Topics

- **[Issue #5327](https://github.com/HKUDS/nanobot/issues/5327) — `[bug] Nanobot repeats multiple times the same message while reasoning`**  
  **11 comments**, closed. High-visibility reproducibility issue involving repeated phrases during reasoning. Underlying need: reliable, non-duplicative reasoning output in agent loops.

- **[Issue #5295](https://github.com/HKUDS/nanobot/issues/5295) — `[bug] deploy with docker compose failed: cannot open entrypoint.sh: Permission denied`**  
  **5 comments**, closed. Deployment friction directly impacting first-time Docker Compose users.

- **[Issue #4010](https://github.com/HKUDS/nanobot/issues/4010) — `Feature proposal: text-to-speech / voice output support`**  
  **3 comments, 3 👍**, open since May. Users want conversational voice output on channels that support voice notes, not just voice input.

- **[Issue #4858](https://github.com/HKUDS/nanobot/issues/4858) — `[refactor] Refactor dynamic tool provider lifecycle out of AgentLoop`**  
  **2 comments**, closed. Maintainers addressed MCP lifecycle technical debt directly tied to reconnect/crash fixes.

- **[Issue #5275](https://github.com/HKUDS/nanobot/issues/5275) — `[channels/matrix] "reply in thread" should form a dedicated context`**  
  **1 comment**, open. Matrix thread semantics diverge from Discord/Slack; users expect thread replies to create isolated contexts.

## 5. Bugs & Stability

Ranked by severity:

- **High — [Issue #4884](https://github.com/HKUDS/nanobot/issues/4884): WebFetch sends complete user URLs to Jina**  
  Security/privacy issue. Credential-bearing URLs could leak to `r.jina.ai`. **Fixed/closed via [PR #5258](https://github.com/HKUDS/nanobot/pull/5258).**

- **High — [PR #5271](https://github.com/HKUDS/nanobot/pull/5271): `fix(session): prevent stale background task saves from overwriting session data`**  
  P0-tagged open PR. Addresses race condition where stale background compactions/saves could overwrite `/new` or lifecycle-replaced sessions.

- **High — [Issue #5295](https://github.com/HKUDS/nanobot/issues/5295): Docker Compose entrypoint permission denied**  
  Closed. Deployment-blocking bug. Related Docker hardening landed in [PR #5320](https://github.com/HKUDS/nanobot/pull/5320).

- **Medium — [Issue #5327](https://github.com/HKUDS/nanobot/issues/5327): repeated messages while reasoning**  
  Closed after 11 comments. Likely fixed or worked around in recent agent-loop changes; worth verifying with a regression test if not already covered.

- **Medium — [Issue #5348](https://github.com/HKUDS/nanobot/issues/5348): token-usage settings tests fail in a ~5-hour/day window**  
  Open. `record_token_usage()` defaults to UTC while settings payload uses configured timezone, causing deterministic daily CI/time-dependent failures. No fix PR yet.

- **Medium — [Issue #5275](https://github.com/HKUDS/nanobot/issues/5275): Matrix "reply in thread" does not form a dedicated context**  
  Open. Not a crash, but a functional inconsistency across supported chat platforms.

## 6. Feature Requests & Roadmap Signals

- **[Issue #4010](https://github.com/HKUDS/nanobot/issues/4010) — TTS / voice output**  
  Most thumbed-up open feature request (3 👍). With voice input already supported, voice output is a natural next-step candidate.

- **[Issue #5350](https://github.com/HKUDS/nanobot/issues/5350) — Backward-compatible QwenCloud provider path**  
  New request to add QwenCloud as a provider alongside existing DashScope support. Likely given the current provider-expansion momentum.

- **[PR #4329](https://github.com/HKUDS/nanobot/pull/4329) — Native TypeScript terminal UI**  
  Open, conflict-tagged. Rebuilds `nanobot agent` as a TypeScript/OpenTUI client while preserving Python gateway logic.

- **[PR #5358](https://github.com/HKUDS/nanobot/pull/5358) — WebUI session collaboration via mentions**  
  Adds stable `@name`s for persisted WebUI sessions and mention-based peer-session collaboration.

- **[PR #5342](https://github.com/HKUDS/nanobot/pull/5342) — Redesign apps discovery**  
  Open, conflict-tagged. Restructures Apps into Discover/Installed/All sections with curated featured batches.

- **[PR #5356](https://github.com/HKUDS/nanobot/pull/5356) — Improve setup flows across chat channels**  
  Open. Adds sectioned channel config, actionable toggles, and better validation UX.

**Roadmap prediction:** TTS support, QwenCloud provider support, and Matrix thread-context improvements are the most likely near-term features, given community demand and existing platform-parity gaps.

## 7. User Feedback Summary

Real user pain points visible in this window:

- **Agent reliability:** Repeated identical messages during reasoning ([#5327](https://github.com/HKUDS/nanobot/issues/5327)) undermines trust in long investigation sessions.
- **Deployment friction:** Docker Compose permission errors ([#5295](https://github.com/HKUDS/nanobot/issues/5295)) still create onboarding friction, though the issue is now closed.
- **Privacy concerns:** Users are sensitive to sending full URLs—especially with credentials—to third-party readers like Jina ([#4884](https://github.com/HKUDS/nanobot/issues/4884)). Fixes were quick and well-targeted.
- **Platform semantics:** Matrix users expect reply-in-thread to behave like Discord/Slack threads ([#5275](https://github.com/HKUDS/nanobot/issues/5275)).
- **Voice interactivity:** Users want bidirectional voice, not just voice input ([#4010](https://github.com/HKUDS/nanobot/issues/4010)).

Satisfaction signals are positive: the community is actively submitting security fixes, maintainers are closing high-priority issues quickly, and P1 security patches are landing within days.

## 8. Backlog Watch

Items that may need maintainer attention:

- **[Issue #4010](https://github.com/HKUDS/nanobot/issues/4010) — TTS/voice output request**  
  Open since **May 26**. High 👍 count. No label or milestone visible; needs a product decision.

- **[Issue #5275](https://github.com/HKUDS/nanobot/issues/5275) — Matrix reply-in-thread context**  
  Open since Aug 6. Only 1 comment; may need a maintainer to confirm design direction.

- **[PR #5271](https://github.com/HKUDS/nanobot/pull/5271) — Stale background task save fix (P0)**  
  Open, high priority. Needs review/merge to prevent session data-loss races.

- **[PR #5291](https://github.com/HKUDS/nanobot/pull/5291) — Persist subagent conversation transcripts**  
  Open with `conflict` tag. Important usability improvement for debugging/auditing subagent runs.

- **[PR #5204](https://github.com/HKUDS/nanobot/pull/5204) — Declarative Responses capabilities (P1)**  
  Open with `conflict` tag. A core provider-refactor PR likely needing rebase and re-review.

- **[PR #4329](https://github.com/HKUDS/nanobot/pull/4329) — TypeScript terminal UI**  
  Open since June. Conflict-tagged; large surface area but could be a major UX milestone.

- **[PR #5338](https://github.com/HKUDS/nanobot/pull/5338) — Preserve MCP OAuth credentials on store read failure**  
  Open with `conflict` tag. Security-adjacent fix; should be prioritized.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-13

## 1. Today's Overview

Hermes Agent saw heavy activity in the last 24 hours: **50 issues updated** (37 open, 13 closed) and **50 PRs updated** (47 open, 3 merged/closed), with **no new releases**. Development is currently in a feature-dense integration period, centered on the **plugin-interface expansion** — a wave of new plugin API PRs landed from maintainer `teknium1` on 2026-08-13. At the same time, several **P1 desktop/gateway regressions** remain active and unresolved. The high issue/PR volume and the 13 closed issues indicate good momentum, but the large open-PR count suggests stabilization work is still ahead.

## 2. Releases

**No new releases in this window.** No breaking changes or migration notes to report.

## 3. Project Progress

**Closed/merged PRs visible in the window:**

- [PR #84903](https://github.com/NousResearch/hermes-agent/pull/84903) — `feat(desktop): auto-detect Linux keychain backend for secure token storage` — salvages [PR #41236](https://github.com/NousResearch/hermes-agent/pull/41236) and fixes token persistence on keyring-less Linux desktops.
- [PR #41236](https://github.com/NousResearch/hermes-agent/pull/41236) — original Linux keychain backend auto-detection PR, closed in favor of the salvaged version.

**Closed issues — plugin-interface expansion batch (tracker [issue #64182](https://github.com/NousResearch/hermes-agent/issues/64182)):**

- [#64174](https://github.com/NousResearch/hermes-agent/issues/64174) — route `ctx.llm` calls through plugin-registered auxiliary model slots
- [#64162](https://github.com/NousResearch/hermes-agent/issues/64162) — pluggable approval transport + gated approval policy
- [#64177](https://github.com/NousResearch/hermes-agent/issues/64177) — secret-source plugins bootstrap fix
- [#64179](https://github.com/NousResearch/hermes-agent/issues/64179) — plugin API versioning, stability contract, and compat test suite
- [#64167](https://github.com/NousResearch/hermes-agent/issues/64167) — cache-safe context injection
- [#64227](https://github.com/NousResearch/hermes-agent/issues/64227) — plugin config/state/cron bridge
- [#64230](https://github.com/NousResearch/hermes-agent/issues/64230) — plugin developer tooling
- [#64180](https://github.com/NousResearch/hermes-agent/issues/64180) — Pi + OpenCode plugin architecture research spike
- [#64900](https://github.com/NousResearch/hermes-agent/issues/64900) — plugins extending `send_message` with platform-specific schema fields

**Other notable closures:**

- [#44673](https://github.com/NousResearch/hermes-agent/issues/44673) — plugins can register custom auxiliary model slots (closed by the plugin work above)
- [#57775](https://github.com/NousResearch/hermes-agent/issues/57775) — Windows `atomic_replace` no longer drops writes on `ERROR_SHARING_VIOLATION`
- [#62294](https://github.com/NousResearch/hermes-agent/issues/62294) — desktop app can now save remote gateway tokens on Linux without a keyring service
- [#84623](https://github.com/NousResearch/hermes-agent/issues/84623) — closed as duplicate (desktop Kanban "Specify"/"Decompose" actions)

## 4. Community Hot Topics

The most active/conversational issues reveal two dominant concerns: **token cost** and **plugin ecosystem maturity**.

- [Issue #6839 — Feature: Lazy Tool Schema Loading — Two-Pass Tool Injection](https://github.com/NousResearch/hermes-agent/issues/6839) — **39 comments, 18 👍**  
  Users want to stop injecting all tool schemas on every API call, especially on local models. This is the clearest cost/token-overhead signal in the project right now.

- [Issue #64182 — Tracking: Plugin Interface Expansion](https://github.com/NousResearch/hermes-agent/issues/64182) — **33 comments**  
  The community plugin-interface roadmap tracker. It is actively being worked, but still marked `needs-decision`.

- [Issue #64231 — Plugin lifecycle-event catalog and hook taxonomy](https://github.com/NousResearch/hermes-agent/issues/64231) — **24 comments**  
  Community desire for a coherent hook/event standard rather than one-off `VALID_HOOKS` additions.

- [Issue #66616 — Skills index is stale/degraded](https://github.com/NousResearch/hermes-agent/issues/66616) — **19 comments**  
  Automated freshness probe has been failing; the public Skills Hub index is 29.8h old against a 26h limit.

- [Issue #83683 — Desktop restart reaps live gateway and never relaunches it](https://github.com/NousResearch/hermes-agent/issues/83683) — **9 comments, P1**  
  Critical desktop regression affecting WeChat/QQ/Telegram delivery.

- [Issue #78069 — Clarify free-text response intermittently fails to bind](https://github.com/NousResearch/hermes-agent/issues/78069) — **9 comments, P1**  
  Turns hang indefinitely when a free-text reply does not bind to a pending `clarify()` call.

Underlying needs: **lower model usage cost**, **stable plugin APIs**, and **reliable desktop/gateway session delivery**.

## 5. Bugs & Stability

Ranked by severity:

### P1 — Critical

- [Issue #83683 — Desktop restart reaps live gateway and never relaunches it](https://github.com/NousResearch/hermes-agent/issues/83683)  
  Regression on Windows desktop app: restart kills the messaging gateway and WeChat/QQ/Telegram go silent until manual restart. **No visible fix PR yet.**
- [Issue #84824 — Desktop serve boot reaps healthy registered detached gateway](https://github.com/NousResearch/hermes-agent/issues/84824)  
  Duplicate of #83683, but includes the detached Scheduled Task gateway scenario. **No visible fix PR yet.**
- [Issue #78069 — Clarify free-text response fails to bind to pending clarify call](https://github.com/NousResearch/hermes-agent/issues/78069)  
  Session turn hangs indefinitely. Related follow-up: [Issue #82975](https://github.com/NousResearch/hermes-agent/issues/82975) for Telegram profile-namespaced session keys.

### P2 — Significant

- [Issue #84871 — Discord triggering-message context leaks into stored user messages and session titles](https://github.com/NousResearch/hermes-agent/issues/84871)  
  Internal per-turn control wrapper is persisted into transcripts/exports.
- [Issue #84870 — Session list shows stale lineage ROOT instead of live tip after session_reset](https://github.com/NousResearch/hermes-agent/issues/84870)  
  Desktop sidebar session list shows old title/timestamp for reset conversations.
- [Issue #25065 — HASS_TOKEN unconditionally force-enables Home Assistant gateway](https://github.com/NousResearch/hermes-agent/issues/25065)  
  Environment variable overrides explicit `platforms.homeassistant.enabled: false`.
- [Issue #71331 — Termux install fails when default Python is 3.14+](https://github.com/NousResearch/hermes-agent/issues/71331)  
  `install.sh` only checks the Python lower bound, so 3.14 passes despite `requires-python <3.14`.

### P3 — Lower severity / service health

- [Issue #66616 — Skills index is stale or degraded](https://github.com/NousResearch/hermes-agent/issues/66616) — automated index freshness probe failing.

### Fix PRs in flight

- [PR #84931](https://github.com/NousResearch/hermes-agent/pull/84931) — preserve MCP tool attempt identity across retries
- [PR #84928](https://github.com/NousResearch/hermes-agent/pull/84928) — fix Nous auth keepalive never refreshing before expiry (causes 401s)
- [PR #84586](https://github.com/NousResearch/hermes-agent/pull/84586) — add `local_embedded` mode to Hindsight config schema
- [PR #68491](https://github.com/NousResearch/hermes-agent/pull/68491) — surface `apply_yaml_config_fn` validation errors instead of silently disabling platforms

## 6. Feature Requests & Roadmap Signals

The strongest roadmap signal is the **plugin-interface expansion wave**. Multiple open PRs landed on 2026-08-13:

- [PR #84932](https://github.com/NousResearch/hermes-agent/pull/84932) — inter-plugin event bus with declared emits/listens
- [PR #84929](https://github.com/NousResearch/hermes-agent/pull/84929) — `ctx.inject_message(session_key=...)` gateway-session injection
- [PR #84914](https://github.com/NousResearch/hermes-agent/pull/84914) — `pre_command` observer hook + capability-gated `ctx.call_mcp`
- [PR #84916](https://github.com/NousResearch/hermes-agent/pull/84916) — plugin manifest v2: versioning, dependencies, pip seam, config schema
- [PR #84919](https://github.com/NousResearch/hermes-agent/pull/84919) — community plugin index + `hermes plugins search`
- [PR #84912](https://github.com/NousResearch/hermes-agent/pull/84912) — capability declarations + install/update consent flow
- [PR #84927](https://github.com/NousResearch/hermes-agent/pull/84927) — additive-only redaction pattern registry
- [PR #84917](https://github.com/NousResearch/hermes-agent/pull/84917) — session-librarian skill for prompt-driven session management

These are likely candidates for the **next minor version**. Other notable user-facing feature requests:

- [Issue #6839](https://github.com/NousResearch/hermes-agent/issues/6839) — Lazy tool schema loading (high demand; still `needs-decision`)
- [Issue #45779](https://github.com/NousResearch/hermes-agent/issues/45779) — Multi-gateway connections with per-gateway tabs in Desktop
- [Issue #46257](https://github.com/NousResearch/hermes-agent/issues/46257) — Native Xiaomi MiMo-V2.5 TTS & ASR provider
- [Issue #38275](https://github.com/NousResearch/hermes-agent/issues/38275) — HAMP: agent address system + async messaging + cryptographic identity
- [Issue #84921](https://github.com/NousResearch/hermes-agent/issues/84921) — `display.autolink_urls` setting for Desktop
- [Issue #84834](https://github.com/NousResearch/hermes-agent/issues/84834) — Webhook Revolution repair campaign (meta-epic)

## 7. User Feedback Summary

- **Token overhead is the top pain point.** [Issue #6839](https://github.com/NousResearch/hermes-agent/issues/6839) has 18 👍 and 39 comments; users on local models are especially affected by 3,500–5,000 tokens per call for full tool schemas.
- **Desktop + gateway reliability is causing real-world messaging outages.** [Issue #83683](https://github.com/NousResearch/hermes-agent/issues/83683) and [Issue #84824](https://github.com/NousResearch/hermes-agent/issues/84824) describe silent WeChat/QQ/Telegram failures after desktop restarts.
- **Linux users without a keyring service** were blocked from saving remote gateway tokens; [PR #84903](https://github.com/NousResearch/hermes-agent/pull/84903) addresses this, and [Issue #84913](https://github.com/NousResearch/hermes-agent/pull/84913) further documents SSH connection-token persistence limits.
- **Transcript/session pollution complaints** surfaced in [Issue #84871](https://github.com/NousResearch/hermes-agent/issues/84871) (Discord triggering-message context leaking into user-visible transcripts).
- **Plugin developers are actively requesting stable APIs**: lifecycle hooks, event buses, config/state bridges, plugin discovery, and versioning contracts are all recurring themes in [Issue #64182](https://github.com/NousResearch/hermes-agent/issues/64182).
- **Positive signal**: maintainers are salvaging community PRs with authorship preserved (e.g., [PR #84932](https://github.com/NousResearch/hermes-agent/pull/84932), [PR #84927](https://github.com/NousResearch/hermes-agent/pull/84927)), which tends to improve contributor trust.

## 8. Backlog Watch

- [Issue #6839 — Lazy Tool Schema Loading](https://github.com/NousResearch/hermes-agent/issues/6839)  
  Open since **2026-04-09**, 39 comments, 18 👍, still `needs-decision`. This is the highest-interest open feature request and needs a maintainer decision or implementation plan.

- [Issue #25065 — HASS_TOKEN force-enables Home Assistant gateway](https://github.com/NousResearch/hermes-agent/issues/25065)  
  Open since **2026-05-13**, P2, only 2 comments. Explicit user config is being overridden by an environment variable with no supported opt-out.

- [Issue #38275 — HAMP: agent address system + async messaging](https://github.com/NousResearch/hermes-agent/issues/38275)  
  Open since **2026-06-03**, only 2 comments. Ambitious A2A-adjacent proposal; has not received visible maintainer engagement.

- [Issue #45779 — Multi-gateway connections with per-gateway tabs in Desktop](https://github.com/NousResearch/hermes-agent/issues/45779)  
  Open since **2026-06-13**, 7 👍. Frequently requested by users running multiple Hermes agents on different machines.

- [Issue #46257 — Xiaomi MiMo-V2.5 TTS & ASR provider support](https://github.com/NousResearch/hermes-agent/issues/46257)  
  Open since **2026-06-14**, 6 comments. Chinese-language speech model support request; still no implementation.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-13

## 1. Today's Overview

PicoClaw saw low but active community engagement over the last 24 hours: 2 open issues and 3 open PRs were updated, with no new releases and no merged/closed PRs. Activity was concentrated around two stale bugs — Web UI input lag and MCP connection failure hanging the agent loop — alongside community-submitted work on routed-agent context management, Telegram topics, and an Exa web search provider. The absence of merges or closures suggests maintainer review is pending rather than a burst of feature delivery. Overall, the project is in a contribution-heavy, release-quiet phase with meaningful open PRs awaiting attention.

## 2. Releases

No new PicoClaw releases were published in this window. There are no changelog entries, breaking changes, or migration notes to report.

## 3. Project Progress

No PRs were merged or closed today. Three open PRs were updated and remain under review:

- [#3316 — fix: routed-agent context management not respecting history, summarization, compression, and seahorse bootstrap](https://github.com/sipeed/picoclaw/pull/3316)  
  Proposed fix for routed agents not remembering previous messages and auto-compaction not triggering in per-agent/channel sessions.
- [#3315 — Support topics in private bot chats](https://github.com/sipeed/picoclaw/pull/3315)  
  Extends Telegram topic handling to private bot chats where `IsTopicMessage` is used rather than `Chat.IsForum`.
- [#3299 — Add native Exa web search provider](https://github.com/sipeed/picoclaw/pull/3299)  
  Adds Exa as a native `tools.web` / `web_search` provider with API-key auth and date range filters.

No features or fixes were officially merged today.

## 4. Community Hot Topics

- [#3281 — [BUG] Web UI chat input is very laggy when history has a little bit long](https://github.com/sipeed/picoclaw/issues/3281)  
  4 comments · 1 👍 · labeled `stale`  
  Users report noticeable input lag in the PicoClaw Web UI once session history grows. This points to a performance problem in rendering or state handling for long conversations.

- [#3269 — [BUG] If the MCP server connection fails, the agent loop will hang, causing the Picoclaw chat interface to stop replying to users](https://github.com/sipeed/picoclaw/issues/3269)  
  4 comments · 1 👍 · labeled `stale`  
  A failure in an MCP server connection can freeze the agent loop entirely, making the chat interface unresponsive. This is a reliability concern around external tool dependencies.

Underlying needs: users are asking for better long-session performance, resilient failure handling for external services like MCP, and more robust context retention in routed/conversational agents.

## 5. Bugs & Stability

Ranked by severity:

1. **High — Agent loop hang on MCP server failure**  
   [#3269](https://github.com/sipeed/picoclaw/issues/3269)  
   If an MCP server connection fails, the agent loop can hang and stop replying to users entirely. No fix PR is currently linked.

2. **Medium-High — Web UI input lag with longer history**  
   [#3281](https://github.com/sipeed/picoclaw/issues/3281)  
   Input becomes noticeably laggy after a moderate amount of chat history. No fix PR is currently linked.

3. **Related context-management bug — Routed agents not respecting history/compaction**  
   [#3316](https://github.com/sipeed/picoclaw/pull/3316)  
   This is an open fix PR, not a bug report, but it addresses routed-agent context loss and auto-compaction never triggering. If merged, it would resolve a meaningful stability/context bug for Discord/agent routing users.

## 6. Feature Requests & Roadmap Signals

- **Native Exa web search provider** — [#3299](https://github.com/sipeed/picoclaw/pull/3299)  
  Community contribution adding Exa as a first-class web search backend. Signals user demand for more/search-provider options.

- **Telegram topics in private bot chats** — [#3315](https://github.com/sipeed/picoclaw/pull/3315)  
  Improves Telegram integration for private chats with forum-topic mode enabled. This is a targeted UX/feature gap-fill.

- **Routed-agent context management** — [#3316](https://github.com/sipeed/picoclaw/pull/3316)  
  Though a fix, this PR indicates a roadmap direction toward better multi-agent routing, session memory, summarization, and compression.

If these PRs are merged, the next PicoClaw version could include Exa search support, improved Telegram topic handling, and more reliable context management for routed agents.

## 7. User Feedback Summary

Real user pain points expressed in the last 24 hours include:

- Web UI becomes sluggish as chat history grows ([#3281](https://github.com/sipeed/picoclaw/issues/3281)).
- MCP connection failures can freeze the entire agent loop and stop replies ([#3269](https://github.com/sipeed/picoclaw/issues/3269)).
- Routed agents in Discord channels are not remembering prior messages, and auto-compaction never triggers regardless of message/token count ([#3316](https://github.com/sipeed/picoclaw/pull/3316)).

Users are actively using PicoClaw for Discord routing, Telegram bots, and web search workflows. No explicit satisfaction data was available; the feedback skews toward reliability and performance concerns.

## 8. Backlog Watch

Items needing maintainer attention:

- [#3269 — MCP failure hangs agent loop](https://github.com/sipeed/picoclaw/issues/3269)  
  Open since 2026-07-20, labeled `stale`, 4 comments, no merged fix. High-impact reliability issue.

- [#3281 — Web UI lag with long history](https://github.com/sipeed/picoclaw/issues/3281)  
  Open since 2026-07-21, labeled `stale`, 4 comments, no merged fix. Affects core Web UI UX.

- [#3299 — Exa web search provider PR](https://github.com/sipeed/picoclaw/pull/3299)  
  Open since 2026-07-26 with no visible merge/comment activity. Needs maintainer review.

- [#3316 — Routed-agent context management fix PR](https://github.com/sipeed/picoclaw/pull/3316)  
  Open since 2026-08-03. Important fix for context/summarization/compression, still unreviewed.

- [#3315 — Telegram topics in private bot chats PR](https://github.com/sipeed/picoclaw/pull/3315)  
  Open since 2026-08-03. Targeted Telegram improvement, also awaiting review.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-13

## Today’s Overview

NanoClaw saw moderate activity in the 24-hour window ending 2026-08-12: **4 issues were updated (all open)** and **10 PRs were updated (9 open, 1 closed)**. No new releases were published. The busiest area is the core-team agent template/plugin migration stack ([#3220](https://github.com/nanocoai/nanoclaw/pull/3220), [#2909](https://github.com/nanocoai/nanoclaw/pull/2909), [#3231](https://github.com/nanocoai/nanoclaw/pull/3231)), which appears close to landing as an integrated feature. Fresh bug reports around recurring-task migration ([#3233](https://github.com/nanocoai/nanoclaw/issues/3233)) and template-generated agent IDs ([#3234](https://github.com/nanocoai/nanoclaw/issues/3234)) suggest user-facing regressions are surfacing as the template work approaches completion. Overall project health is stable but shipping-focused, with no release cut in this period.

## Releases

No new releases to report.

## Project Progress

- **Only closed PR in the window:** [PR #3086 — fix(whatsapp): validate recipient exists before sending](https://github.com/nanocoai/nanoclaw/pull/3086). This closes the bug where WhatsApp sends to unregistered numbers reported as delivered; now the recipient is validated before send.
- **Active core-team PRs that advanced:**
  - [PR #3220 — feat!: agent templates become Agent Plugins 1.0.0 directories](https://github.com/nanocoai/nanoclaw/pull/3220) received updates.
  - [PR #2909 — feat(setup): template setup flow in the wizard and first-agent stamping](https://github.com/nanocoai/nanoclaw/pull/2909) is explicitly stacked on #3220.
  - [PR #3231 — feat(codex,opencode): honor plugin MCP cwd in both provider config writers](https://github.com/nanocoai/nanoclaw/pull/3231) is described as the “registry payload half” of the plugin MCP working-directory support landing with #3220.

No other PRs were merged or closed.

## Community Hot Topics

The snapshot shows limited comment/reaction activity overall. The only issue with an explicit comment is:

- [Issue #2504 — feat: add `ncl status` command for lightweight operational health check](https://github.com/nanocoai/nanoclaw/issues/2504) — opened in May, still open, one comment.

The other recently updated issues received no public comments or reactions:

- [Issue #3234 — Template-stamped agent groups get bare UUID id missing `ag-` prefix](https://github.com/nanocoai/nanoclaw/issues/3234)
- [Issue #3233 — Agent-scoped `ncl tasks` is blind to pre-2.1.54 recurring tasks](https://github.com/nanocoai/nanoclaw/issues/3233)
- [Issue #3232 — Proposal: add QwenCloud as an optional provider skill](https://github.com/nanocoai/nanoclaw/issues/3232)

Themes behind these: users want better operational visibility, smoother upgrade/migration behavior, and more optional provider integrations.

## Bugs & Stability

Ranked by severity:

1. **High — [Issue #3233: Agent-scoped `ncl tasks` blind to pre-2.1.54 recurring tasks](https://github.com/nanocoai/nanoclaw/issues/3233)**  
   After upgrading to 2.1.54, agents cannot list, pause, resume, cancel, or update existing recurring tasks; CLI returns `No tasks.` while tasks still fire on schedule. This is a migration/data-rehoming gap. No linked fix PR yet.

2. **High/Medium — [Issue #3234: Template-stamped agent groups get bare UUID, missing `ag-` prefix](https://github.com/nanocoai/nanoclaw/issues/3234)**  
   `ncl groups create --template <ref>` generates a bare UUID, unlike `--folder` which produces `ag-<uuid>`. This can cause OneCLI `ensureAgent` to reject the agent ID, breaking template-created agents. The template/plugin migration PRs may intersect with this path, but no explicit fix is linked.

3. **Medium — [PR #2689: Signal DM platform ID consistency, `isMention`, and `ask_question`/approval delivery](https://github.com/nanocoai/nanoclaw/pull/2689)**  
   Open fix for Signal DMs being silently dropped because `isMention` is not set and DM platform IDs are inconsistent. Updated today but not merged.

4. **Medium — [PR #2346: Treat unknown slash commands as normal chat](https://github.com/nanocoai/nanoclaw/pull/2346)**  
   Fixes unknown slash commands being mis-categorized as `passthrough`, causing the Agent SDK to produce output without `<message>` blocks and then silently drop the response.

5. **Fixed — [PR #3086: WhatsApp recipient validation](https://github.com/nanocoai/nanoclaw/pull/3086)**  
   Closed during this window; prevents false “Message delivered” logs for unregistered WhatsApp numbers.

No crash-level regressions were reported.

## Feature Requests & Roadmap Signals

- **New provider request:** [Issue #3232 — QwenCloud as optional provider skill](https://github.com/nanocoai/nanoclaw/issues/3232) follows the existing provider-skill modular pattern. If accepted, it would likely become `/add-qwencloud` and is a plausible next optional integration.
- **Operational health command:** [Issue #2504 — `ncl status`](https://github.com/nanocoai/nanoclaw/issues/2504) remains a user-requested feature, but has seen little engagement.
- **Channel expansion:** [PR #3050 — add Dial to the channel picker + wizard/skills](https://github.com/nanocoai/nanoclaw/pull/3050) is an open feature skill.
- **New utility skill:** [PR #3189 — add-why: explain what happened to one message](https://github.com/nanocoai/nanoclaw/pull/3189).
- **Rich messaging:** [PR #3193 — Telegram Chat SDK update for rich messages](https://github.com/nanocoai/nanoclaw/pull/3193).

Likely next-version content: **Agent Plugins 1.0.0 template migration** ([#3220](https://github.com/nanocoai/nanoclaw/pull/3220)), **setup wizard template flow** ([#2909](https://github.com/nanocoai/nanoclaw/pull/2909)), and **plugin MCP `cwd` support** ([#3231](https://github.com/nanocoai/nanoclaw/pull/3231)) appear to be the most probable near-term additions. QwenCloud is a strong candidate if maintainers signal approval.

## User Feedback Summary

Users are reporting real operational friction in several areas:

- **No quick health visibility:** `ncl status` request ([#2504](https://github.com/nanocoai/nanoclaw/issues/2504)) indicates users want a lighter-weight alternative to existing session and dashboard tooling.
- **Upgrade pain:** Legacy recurring tasks become invisible to agents after upgrading to 2.1.54 ([#3233](https://github.com/nanocoai/nanoclaw/issues/3233)). This is a significant trust issue for existing installs.
- **Template workflow friction:** The missing `ag-` prefix on template-created agent groups ([#3234](https://github.com/nanocoai/nanoclaw/issues/3234)) makes template adoption unreliable.
- **Silent message failures:** Multiple reports point to messages being silently dropped or falsely acknowledged in WhatsApp ([#3086](https://github.com/nanocoai/nanoclaw/pull/3086)), Signal ([#2689](https://github.com/nanocoai/nanoclaw/pull/2689)), and unknown slash-command handling ([#2346](https://github.com/nanocoai/nanoclaw/pull/2346)).
- **Provider appetite:** QwenCloud request ([#3232](https://github.com/nanocoai/nanoclaw/issues/3232)) shows continued user interest in optional, modular LLM providers.

No explicit satisfaction data was present in the snapshot.

## Backlog Watch

- [PR #2346 — Fix unknown slash commands as normal chat](https://github.com/nanocoai/nanoclaw/pull/2346) — open since **2026-05-08**, updated recently but still unmerged; prevents silent response drops.
- [Issue #2504 — `ncl status` operational health command](https://github.com/nanocoai/nanoclaw/issues/2504) — open since **2026-05-15** with only one comment; needs maintainer signal.
- [PR #2689 — Signal DM platform ID consistency and delivery fixes](https://github.com/nanocoai/nanoclaw/pull/2689) — open since **2026-06-04**; important for reliable Signal onboarding.
- [PR #3050 — Add Dial channel to picker/wizard](https://github.com/nanocoai/nanoclaw/pull/3050) — open since **2026-07-14**; no visible merge activity.
- [PR #2909 — Template setup flow in wizard](https://github.com/nanocoai/nanoclaw/pull/2909) — open since **2026-07-02**, waiting on #3220.
- [PR #3220 — Agent templates become Agent Plugins 1.0.0 directories](https://github.com/nanocoai/nanoclaw/pull/3220) — the central migration PR; likely needs careful review before landing because of its breaking-change scope.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-13

## 1. Today's Overview

IronClaw logged a busy 24-hour window: **41 issues updated** (29 open, 12 closed) and **50 PRs updated** (31 open, 19 merged/closed), capped by **two release candidates** published for v1.2.0. The dominant signal is a large QA bug-bash sweep against a Railway-hosted instance, surfacing a concentrated cluster of Telegram channel defects (stuck sessions, undelivered messages, webhook activation failures) plus two P1 multi-user access and Telegram webhook issues. On the engineering side, the team landed critical infrastructure fixes — an HTTP client missing from the runtime container image and a fragile release-installer download — and continued substantial efforts across automation execution contracts, durable storage abstraction, and the WebUI design system. Overall, activity indicates a project in an active stabilization and QA pass ahead of a v1.2.0 release, with healthy forward motion on the v1.3.0/v1.4.0 feature roadmap.

## 2. Releases

Two patch-level release candidates were published on 2026-08-12:

- **[ironclaw-v1.2.0-rc.3](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.2.0-rc.3)** — Fixes a production-blocking infrastructure gap: the runtime container image now installs `curl`, so orchestrator healthchecks (`curl -fsS http://localhost:3000/`) can actually execute. Previously the image shipped no HTTP client, meaning the container was never marked healthy.
- **[ironclaw-v1.2.0-rc.2](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.2.0-rc.2)** — Fixes Windows first-start filesystem publication by using native atomic rename semantics instead of hard links and tolerating unsupported directory syncs. Release smoke runs now also preserve the Windows account identity required to secure the standalone secrets key.

**Migration notes:** No breaking changes documented in either RC. Operators running hosted/orchestrated deployments should upgrade to rc.3 to restore healthcheck-based readiness; Windows first-start users should use rc.2+ to avoid filesystem publication failures.

## 3. Project Progress

**Merged/closed PRs today include:**

- **[#7555 — fix(docker): install curl so orchestrator healthchecks can run](https://github.com/nearai/ironclaw/pull/7555)** — Forward-port of the rc.3 fix from the 1.1.0 line onto the current release branch; resolves a container-liveness detection failure.
- **[#7560 — fix(release): retry the dist installer download](https://github.com/nearai/ironclaw/pull/7560)** — Addresses the rc.3 build failure caused by a flaky `cargo-dist` download (curl error 56 after 5 attempts); adds retry resilience to the release pipeline.
- **[#7550 — feat(extensions): per-field help text on admin configuration forms + channel setup docs rewrite](https://github.com/nearai/ironclaw/pull/7550)** — Manifest `[admin_configuration]` fields now support an optional `description` rendered as a hint on Admin → Configuration forms; Telegram is the first consumer, with the channel setup docs rewritten.
- **[#5503 — Add compact Google extension capabilities](https://github.com/nearai/ironclaw/pull/5503)** — Long-running experiment merged: adds context-efficient capabilities (e.g., `gmail.fetch_message_summaries`) for triage/digest workloads without full-message fanout.
- **[#7427 — release: prepare 1.1.1-rc.1](https://github.com/nearai/ironclaw/pull/7427)** — Backports urgent IronHub/custom MCP, WebUI, retrieval, runtime-credential, Slack, and Telegram fixes onto the 1.1 line; documents durable storage migration notes.
- **[#6836 — feat(webui): @ironclaw/ui and workspace refactor](https://github.com/nearai/ironclaw/pull/6836)** — Re-derives the WebUI design system as a workspace package in five reviewable layers; supersedes earlier attempts (#5563/#6830).

**Closed issues reflect real user-facing fixes landing:** [#7407](https://github.com/nearai/ironclaw/issues/7407) parallel capability batches now execute concurrently; [#7484](https://github.com/nearai/ironclaw/issues/7484) fixes silent task eviction from the context window by pinning user messages; [#7485](https://github.com/nearai/ironclaw/issues/7485) unifies two token estimators that were double-counting ASCII (effectively halving context); [#5508](https://github.com/nearai/ironclaw/issues/5508) resolves "Slack delivery target not found" despite an active connection; [#6541](https://github.com/nearai/ironclaw/issues/6541) fixes the persistent WebUI "Reconnecting" loop; [#7302](https://github.com/nearai/ironclaw/issues/7302) softens the tool-failure UI so recovered errors are informational.

## 4. Community Hot Topics

The most-commented issues this window:

- **[#7360 — Expand stress coverage across built-in and durable write paths](https://github.com/nearai/ironclaw/issues/7360)** (3 comments, open, epic) — The nightly API-capacity workload never exercises tool-call paths because the mock model returns final responses without tool calls, letting regressions in built-in capability writes slip through. The underlying need is systemic: stress infrastructure must mirror real multi-tool agent behavior.
- **[#7407 — Execute BatchPolicy::Parallel capability batches concurrently](https://github.com/nearai/ironclaw/issues/7407)** (3 comments, closed) — The agent loop already computes parallel batch policies but the production port executed batches sequentially. Closed by the fix; a good indicator the team is responsive to performance-gap reports.
- **[#7554 — Custom MCP server add flow shows validation error](https://github.com/nearai/ironclaw/issues/7554)** (1 comment, open) — Reported via Slack product-feedback; users cannot add a custom MCP server due to a blocking red "validation" error. Ties into the IronHub/custom MCP backports in the 1.1.1 RC.

The **Telegram QA bug-bash cluster** is the dominant conversation surface this cycle — 10+ issues filed by the same reporter against the Railway instance ([#7535](https://github.com/nearai/ironclaw/issues/7535), [#7536](https://github.com/nearai/ironclaw/issues/7536), [#7538](https://github.com/nearai/ironclaw/issues/7538), [#7539](https://github.com/nearai/ironclaw/issues/7539), [#7540](https://github.com/nearai/ironclaw/issues/7540), [#7541](https://github.com/nearai/ironclaw/issues/7541), [#7542](https://github.com/nearai/ironclaw/issues/7542), [#7543](https://github.com/nearai/ironclaw/issues/7543), [#7544](https://github.com/nearai/ironclaw/issues/7544), [#7545](https://github.com/nearai/ironclaw/issues/7545), [#7546](https://github.com/nearai/ironclaw/issues/7546)). These indicate a channel-integration quality problem that is well-understood in aggregate but spans many subsystems: webhook lifecycle, MTProto/media handling, message ordering, attachment delivery, and conversation-state awareness.

## 5. Bugs & Stability

Ranked by severity:

**P1 — Critical / blocking:**
- **[#7536 — Multi-user access flow is broken — "Invalid secret" for additional users](https://github.com/nearai/ironclaw/issues/7536)** — Users created via Admin UI receive tokens that fail on login. Blocks team/instance sharing entirely.
- **[#7538 — Telegram agent completely stuck after GIF or sticker](https://github.com/nearai/ironclaw/issues/7538)** — Media input permanently wedges the session; even subsequent text messages go unanswered. No fix PR visible yet.
- **[#7535 — Telegram webhook not activated after saving bot configuration](https://github.com/nearai/ironclaw/issues/7535)** — Webhook only works after a full redeploy; "Forbidden" errors in logs. No fix PR yet.

**P2 — High:**
- [#7541](https://github.com/nearai/ironclaw/issues/7541) — Generated files are sent as local workspace links, not actual Telegram attachments.
- [#7540](https://github.com/nearai/ironclaw/issues/7540) — Long Telegram messages split by Telegram are only partially processed ("still working on previous message").
- [#7544](https://github.com/nearai/ironclaw/issues/7544) — Agent leaks internal reasoning/planning/raw tool docs into the chat.
- [#7545](https://github.com/nearai/ironclaw/issues/7545) — Agent falsely claims no live crypto market-data tool for multi-token queries despite HTTP tooling.
- [#7542](https://github.com/nearai/ironclaw/issues/7542) — Agent doesn't recognize it's already in a Telegram conversation and offers Telegram delivery.
- [#7539](https://github.com/nearai/ironclaw/issues/7539) — Out-of-order conversation flow: agent "working" state renders before the user message.
- [#7543](https://github.com/nearai/ironclaw/issues/7543) — Routine executes successfully but the Telegram message isn't delivered on first run.
- [#7451](https://github.com/nearai/ironclaw/issues/7451) — Agent spuriously asks for credentials/API keys for requests that shouldn't need them.
- [#7508](https://github.com/nearai/ironclaw/issues/7508) — GitHub MCP extension startup shows a confusing endpoint-verification prompt instead of connecting.

**P3 — Low:**
- [#7546](https://github.com/nearai/ironclaw/issues/7546) — Stickers silently ignored (no acknowledgment).

**Launch-blocker:**
- [#7547 — Instance upgrade fails during egress apply on agent staging](https://github.com/nearai/ironclaw/issues/7547) — Image swap succeeds but "egress apply failed" blocks upgrades; tagged v1-launch-checklist.

**Fixed this window:** Context-window eviction ([#7484](https://github.com/nearai/ironclaw/issues/7484)), token-estimator double-counting ([#7485](https://github.com/nearai/ironclaw/issues/7485)), Slack delivery target ([#5508](https://github.com/nearai/ironclaw/issues/5508)), WebUI reconnection loop ([#6541](https://github.com/nearai/ironclaw/issues/6541)), and the runtime container missing `curl` ([#7555](https://github.com/nearai/ironclaw/pull/7555)).

## 6. Feature Requests & Roadmap Signals

Clear roadmap signals visible in today's data:

- **[#7517 — Cloud.near.ai: allow staking path for Google/GitHub sign-ins](https://github.com/nearai/ironclaw/issues/7517)** — Users signing in with Google/GitHub cannot stake for inference; NEAR wallet is login-only, not attachable. A monetization/onboarding gap likely to be prioritized given revenue implications.
- **[#7537 — Generic per-request thinking/effort control (provider-native mapping incl. DeepSeek chat_template_kwargs)](https://github.com/nearai/ironclaw/issues/7537)** — Adds a generic thinking/effort level that provider adapters map natively; DeepSeek V4 Flash verbosity is the trigger case. Predict this lands in the next minor release alongside LLM-path work.
- **[#7360 — Stress coverage across built-in and durable write paths](https://github.com/nearai/ironclaw/issues/7360)** — Part of a reliability epic; likely scheduled as pre-1.2.0 hardening.
- **[#7044 — Onboarding to channel-first approach (v1.4.0 epic)](https://github.com/nearai/ironclaw/issues/7044)** with backend counterpart **[#6993](https://github.com/nearai/ironclaw/issues/6993)** — The OOBE automation-tasks prototype is moving forward via PRs [#6994](https://github.com/nearai/ironclaw/pull/6994) and [#7498](https://github.com/nearai/ironclaw/pull/7498) (backend suggestion cards).
- **[#7038 — Epic: Storybook + AI-first Design System (v1.3.0)](https://github.com/nearai/ironclaw/issues/7038)** — Phases 1–3 are all in open PRs ([#7039](https://github.com/nearai/ironclaw/pull/7039), [#7043](https://github.com/nearai/ironclaw/pull/7043), [#7558](https://github.com/nearai/ironclaw/pull/7558)); design-system governance docs are progressing.
- **[#7520 — Epic: retire superseded and unreachable WebUI frontend surfaces](https://github.com/nearai/ironclaw/issues/7520)** — Housekeeping epic to delete retired v1/engine-v2 frontend code (explicitly deferring the Jobs surface).
- **[#7548 — Automation structured execution contracts](https://github.com/nearai/ironclaw/pull/7548)** and **[#7491 — omp core-tool contract](https://github.com/nearai/ironclaw/pull/7491)** — Both large open PRs signal a shift to stricter, versioned contracts for automations and coding tools; expect these to define the next release's developer-facing surface.

**Likely next-version items:** Telegram reliability fixes (P1 cluster), custom MCP validation fix, thinking/effort control, automation execution contracts, and the Railway sandbox file bridge ([#7556](https://github.com/nearai/ironclaw/pull/7556)).

## 7. User Feedback Summary

Real user pain points surfaced this cycle:

- **Telegram channel reliability is the #1 complaint.** Users experience stuck sessions (GIF/sticker), undelivered routine outputs, missed message parts, out-of-order timelines, and confusing credential requests. The QA reports map to concrete user-facing trust issues: "the agent appears to work but never responds," "files aren't actually sent," "routine ran but nothing arrived."
- **Multi-user/team sharing is broken** ("Invalid secret" on invited users) — a blocker for any team adoption of self-hosted instances.
- **Custom MCP server configuration fails with an opaque validation error**, preventing users from extending the agent with their own tools (reported through the product-feedback Slack channel).
- **Agent behavior quality issues** — leaking internal reasoning into chat, falsely claiming missing capabilities (crypto pricing), and not recognizing the active channel — erode user confidence in the agent's situational awareness.
- **Upgrade friction** on agent staging (egress apply failure) could affect operators rolling out new releases.
- **Positive signal:** several long-standing complaints were resolved in this window (Slack delivery, WebUI reconnecting, context eviction), indicating the team closes known issues at a healthy pace.

## 8. Backlog Watch

Items needing maintainer attention:

- **[#7508 — GitHub MCP extension startup gives endpoint verification prompt](https://github.com/nearai/ironclaw/issues/7508)** — Open since 2026-08-11, P2, no linked fix PR yet; part of the broader extension UX friction.
- **[#7451 — Telegram agent sometimes incorrectly asks for credentials](https://github.com/nearai/ironclaw/issues/7451)** — Open since 2026-08-10, P2, no fix PR; predates the current bug-bash batch and is still unaddressed.
- **[#6994 — OOBE automation-tasks prototype PR](https://github.com/nearai/ironclaw/pull/6994)** — Open since 2026-08-01 (12+ days); a large XL change central to the v1.4.0 onboarding epic. Similarly, **[#7039](https://github.com/nearai/ironclaw/pull/7039)** and **[#7043](https://github.com/nearai/ironclaw/pull/7043)** (design-system phases 1–2) have been open since 2026-08-03.
- **[#7456 — Durable storage profile-agnostic refactor](https://github.com/nearai/ironclaw/pull/7456)** — Open since 2026-08-10, XL/medium-risk; central to storage reliability but has been sitting unreviewed/updated for several days.
- **[#7464 — Telegram linked-device auth PR](https://github.com/nearai/ironclaw/pull/7464)** — Open since 2026-08-10; a large feature (device-link auth, session custody) that may intersect with the fresh Telegram bug cluster — reviewers should check whether known P1/P2 bugs are addressed or exacerbated by this design.
- **[#7360 — Stress coverage epic](https://github.com/nearai/ironclaw/issues/7360)** — Open since 2026-08-07; no linked PR yet, but tagged for e2e-coverage and performance; a natural candidate for next-sprint commitment given the bug-bash findings.

---

*Digest generated from public GitHub data for nearai/ironclaw, covering the 24-hour window ending 2026-08-13.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-13

## Today’s Overview
On 2026-08-12, LobsterAI showed active development: **8 PRs were updated** (7 closed/merged, 1 open) and **6 issues were updated** (4 open, 2 closed). No new releases were published in the last 24h, though a release-prep PR (`Release/2026.8.12`) was closed. The merged work focuses on renderer UX polish — skills manager tabs, task search placement, per-model thinking levels — plus main-process stability fixes for Windows plugin installs and shell icon handling. Community issue activity was low and mostly represented older stale threads; no brand-new critical regressions were opened in the window.

## Releases
None in the last 24 hours.  
The closest release signal is the closed release branch PR:  
- [PR #2480 — Release/2026.8.12](https://github.com/netease-youdao/LobsterAI/pull/2480)

No release assets or changelog entries were recorded.

## Project Progress
Merged/closed PRs represent steady forward movement in both user-facing UI and core reliability:

- [PR #2482 — feat: skills manager split mine builtin tabs](https://github.com/netease-youdao/LobsterAI/pull/2482)  
  Renderer improvement splitting the Skills Manager into “Mine” and “Built-in” tabs.

- [PR #2481 — feat(sidebar): move task search to header actions](https://github.com/netease-youdao/LobsterAI/pull/2481)  
  Replaces a labeled search entry with an icon-only action, improves cross-platform layout consistency, and adds diagnostics/regression coverage.

- [PR #2479 — fix(plugins): preserve junctions during Windows install](https://github.com/netease-youdao/LobsterAI/pull/2479)  
  Fixes Windows plugin install reliability by staging installs beside the extensions directory and atomically renaming, preserving dependency junctions and avoiding `EPERM` symlink failures.

- [PR #2478 — fix(shell): avoid unsupported large file icon size on macOS/Windows](https://github.com/netease-youdao/LobsterAI/pull/2478)  
  Prevents Electron `app.getFileIcon` failures by using `large` only on Linux and `normal` elsewhere.

- [PR #2475 — fix(model-selector): give each model its own thinking level](https://github.com/netease-youdao/LobsterAI/pull/2475)  
  Fixes a real UX bug where thinking-depth setting was global, so setting one model overwrote another model’s level. Each model now stores its own value.

- [PR #1233 — feat(model): add official website links and API Key guidance](https://github.com/netease-youdao/LobsterAI/pull/1233)  
  Reintroduces model-provider official links and “Get API Key” shortcuts from PR #731 with review fixes and i18n support.

- [PR #2480 — Release/2026.8.12](https://github.com/netease-youdao/LobsterAI/pull/2480)  
  Release-prep branch closure; likely the staging point for the next published version.

## Community Hot Topics
Comment activity is low — max **2 comments** on any issue, and no reactions were recorded. The most active threads are:

- [Issue #1179 — “3.31版本强制沙箱怎么关？”](https://github.com/netease-youdao/LobsterAI/issues/1179)  
  2 comments, open, stale. User asks how to disable the forced sandbox introduced in 3.31 and says rolling back to 3.30 works. Underlying need: **explicit sandbox configuration/opt-out documentation**.

- [Issue #1236 — “插件 ID 不匹配警告”](https://github.com/netease-youdao/LobsterAI/issues/1236)  
  2 comments, closed/stale. Every gateway startup warns that the `mcp-bridge` plugin entry key doesn’t match its manifest ID. Underlying need: **config/manifest validation consistency and automatic migration**.

- [Issue #2071 — “创建定时任务错误”](https://github.com/netease-youdao/LobsterAI/issues/2071)  
  2 comments, closed/stale. User reports an error when creating scheduled tasks on version 2026.5.27 with screenshot. Underlying need: **reproduction and fix for scheduled task creation**.

## Bugs & Stability
Issues updated in the last 24h, ranked by severity:

1. **High — [Issue #1173: Uninstall still runs](https://github.com/netease-youdao/LobsterAI/issues/1173)**  
   User uninstalls LobsterAI from Windows, but the open window continues running and can still send Feishu messages. This raises trust/security concerns about background processes after uninstall. No fix PR in this window.

2. **High — [Issue #1180: Editing custom agent triggers gateway restart loop](https://github.com/netease-youdao/LobsterAI/issues/1180)**  
   Changing a custom agent icon in version 2026.3.31 causes the gateway to restart repeatedly; deleting the agent stops the loop. No fix PR observed.

3. **Medium — [Issue #1236: Plugin ID mismatch warning on startup](https://github.com/netease-youdao/LobsterAI/issues/1236)**  
   Repeated config warning for `mcp-bridge` plugin entry key vs manifest ID. Closed as stale, but underlying validation issue may still exist.

4. **Medium — [Issue #2071: Scheduled task creation error](https://github.com/netease-youdao/LobsterAI/issues/2071)**  
   Error creating scheduled tasks, reported on 2026.5.27. Closed as stale; no linked fix PR.

5. **Low — [Issue #1179: Forced sandbox can’t be disabled](https://github.com/netease-youdao/LobsterAI/issues/1179)**  
   Not a crash, but a behavior change forcing sandbox mode in 3.31. User workaround is downgrading to 3.30.

Merged PRs [#2479](https://github.com/netease-youdao/LobsterAI/pull/2479), [#2478](https://github.com/netease-youdao/LobsterAI/pull/2478), and [#2475](https://github.com/netease-youdao/LobsterAI/pull/2475) fix **adjacent stability/UX issues** but are not directly linked to the above reports.

## Feature Requests & Roadmap Signals
The clearest feature signal is:

- [Issue #1174 — Support multiple custom model providers](https://github.com/netease-youdao/LobsterAI/issues/1174)  
  User wants to add multiple custom model providers and preserve old ones. This is the strongest roadmap signal for model configuration flexibility.

Other signals:
- [Issue #1179 — Sandbox toggle](https://github.com/netease-youdao/LobsterAI/issues/1179): users want to control/disable sandbox behavior.
- [PR #1233 — Model provider links and API-key guidance](https://github.com/netease-youdao/LobsterAI/pull/1233): suggests continued work on model onboarding UX.
- [PR #2482 — Skills manager tabs](https://github.com/netease-youdao/LobsterAI/pull/2482) and [PR #2481 — Task search in header](https://github.com/netease-youdao/LobsterAI/pull/2481): roadmap is leaning toward UI consolidation and discoverability.

The next minor release is likely to include the recently merged renderer and plugin-install fixes; multi-provider support and sandbox configurability are the most probable future-facing features.

## User Feedback Summary
Real user pain points from the last 24h of issue updates:

- **Trust/security**: Uninstall leaving a running process is alarming and interpreted as a possible “hidden backdoor” ([#1173](https://github.com/netease-youdao/LobsterAI/issues/1173)).
- **Update friction**: Users are surprised by forcing sandbox in 3.31 and will downgrade rather than adapt ([#1179](https://github.com/netease-youdao/LobsterAI/issues/1179)).
- **Configuration annoyance**: Repeated startup warnings for plugin ID mismatch reduce confidence in config hygiene ([#1236](https://github.com/netease-youdao/LobsterAI/issues/1236)).
- **Stability expectations**: Editing an agent icon should not restart the gateway indefinitely ([#1180](https://github.com/netease-youdao/LobsterAI/issues/1180)).
- **Flexibility**: Users want to retain old custom model providers while trying new ones ([#1174](https://github.com/netease-youdao/LobsterAI/issues/1174)).

Overall, the community values configurability and stability; the high PR closure rate indicates maintainers are still shipping fixes quickly, but stale issues with no visible resolution may cause frustration.

## Backlog Watch
Long-unanswered or stale items needing maintainer attention:

- [Issue #1179 — Forced sandbox question](https://github.com/netease-youdao/LobsterAI/issues/1179) — open since March 31, stale, 2 comments.
- [Issue #1173 — Uninstall still runs](https://github.com/netease-youdao/LobsterAI/issues/1173) — open since March 31, 1 comment, trust-sensitive.
- [Issue #1174 — Multiple custom model providers](https://github.com/netease-youdao/LobsterAI/issues/1174) — open since March 31, 1 comment, clear feature request.
- [Issue #1180 — Gateway restart loop after agent icon edit](https://github.com/netease-youdao/LobsterAI/issues/1180) — open since March 31, 1 comment, reproducible-looking bug.
- [PR #1181 — Hide OpenClaw main agent sessions from session list](https://github.com/netease-youdao/LobsterAI/pull/1181) — open since April 1, still pending review; would address user confusion from internal `[OpenClaw]` sessions appearing in Cowork.

These items are important because they cover trust, security, stability, and flexibility — and they have remained open or stale for several months.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-13

*Data source: [github.com/agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) — 29 issues updated (22 open / 7 closed), 42 PRs updated (27 open / 15 merged-closed), 1 new release.*

---

## 1. Today's Overview

CoPaw (QwenPaw) is in a highly active development cycle, with 29 issues and 42 PRs touched in the last 24 hours and a new patch release shipped. The project is clearly iterating toward v2.1.0 stable: a beta-4 release landed with UI and tool-description fixes, while multiple maintainer-driven fix PRs are queued in review for known regressions (memory prompts, MCP argument coercion, chat timestamps). However, the issue tracker shows a concentrated cluster of stability complaints — agent sessions stalling, freezes/crashes on Windows, session-state corruption, and network-recovery failures — indicating that hardening the agent runtime is the dominant concern. Community health is strong: Chinese-language users are filing detailed, reproducible bug reports, and maintainers are closing issues with linked fixes at a good clip. Overall: healthy velocity, tolerable but real stability debt.

---

## 2. Releases

### [v2.1.0-beta.4](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.0-beta.4)

**What's Changed:**
- `fix(files)`: repair previews and dark mode styling — [PR #6915](https://github.com/agentscope-ai/QwenPaw/pull/6915)
- `fix(tools)`: correct `read_file` tool description — [PR #6898](https://github.com/agentscope-ai/QwenPaw/pull/6898)
- `chore`: bump version to 2.1.0b4

**Breaking changes / migration notes:** None indicated. This is a small beta patch release focused on the Console UI (file previews/dark mode) and tool-description accuracy. Release verification is tracked in [Issue #6946](https://github.com/agentscope-ai/QwenPaw/issues/6946) (open, deadline 2026-08-12 16:16 UTC).

---

## 3. Project Progress

**Merged/closed PRs in the last 24h (15 total; notable items):**

- [PR #6816](https://github.com/agentscope-ai/QwenPaw/pull/6816) — `fix(chats)`: handle dict-like model responses. Resolves [Issue #6813](https://github.com/agentscope-ai/QwenPaw/issues/6813) (`KeyError: '__aiter__'` breaking chat auto-title generation on AgentScope 2.x `ChatResponse`).
- [PR #6540](https://github.com/agentscope-ai/QwenPaw/pull/6540) — `fix(agents)`: sanitize tool messages before model calls. Fixes [Issue #6407](https://github.com/agentscope-ai/QwenPaw/issues/6407); prevents orphan tool results from reaching providers after context compression.
- [PR #6913](https://github.com/agentscope-ai/QwenPaw/pull/6913) — `fix(computer-use)`: improve macOS element activation for transient menus and composite accessibility elements.
- [PR #6937](https://github.com/agentscope-ai/QwenPaw/pull/6937) — `fix(creator)`: compose-gate scene auto-rereview, DAG production hardening, vendor runtime bootstrap, and fail-closed plugin packaging.
- [PR #6944](https://github.com/agentscope-ai/QwenPaw/pull/6944) — `chore`: update release notes for v2.1.0.

**Fix PRs currently in review (responding to open issues):**

- [PR #6942](https://github.com/agentscope-ai/QwenPaw/pull/6942) — `fix(memory)`: simplify long-term memory guidance; removes false claim that Dream auto-writes to `MEMORY.md`. Closes [Issue #6853](https://github.com/agentscope-ai/QwenPaw/issues/6853).
- [PR #6938](https://github.com/agentscope-ai/QwenPaw/pull/6938) — `fix(#6826)`: display actual assistant reply completion time (tool-call-heavy turns).
- [PR #6936](https://github.com/agentscope-ai/QwenPaw/pull/6936) — `fix(providers)`: coerce string-typed tool args emitted as JSON numbers. Fixes [Issue #6839](https://github.com/agentscope-ai/QwenPaw/issues/6839).
- [PR #6947](https://github.com/agentscope-ai/QwenPaw/pull/6947) — `fix(#6541)`: use `SystemMsg` instead of `UserMsg` for scroll-compression placeholder (DeepSeek / strict OpenAI-compatible providers).
- [PR #6953](https://github.com/agentscope-ai/QwenPaw/pull/6953) — `perf`: stabilize LLM prefix (KV) cache by sorting tool schemas and splitting `env_context` (addresses [Issue #6952](https://github.com/agentscope-ai/QwenPaw/issues/6952)).
- [PR #6943](https://github.com/agentscope-ai/QwenPaw/pull/6943) — `feat(channels)`: restore interactive configurators for plugin channels (addresses [Issue #6924](https://github.com/agentscope-ai/QwenPaw/issues/6924)).

---

## 4. Community Hot Topics

**Most active issues (by comment count):**

- **[Issue #6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) — Agent stops silently after announcing next steps (5 comments).** Users report the model outputs lines like "Now 2.1, 3.1, 3.2. Let me do all three." then halts with no visible error, requiring the user to type "继续" (continue). This is the strongest signal this week: multi-step task execution reliability is a top pain point.
- **[Issue #6853](https://github.com/agentscope-ai/QwenPaw/issues/6853) — "prompts.py lies to agents" (5 comments).** Documentation/prompt mismatch: prompts claim Dream syncs digests into `MEMORY.md`, but the pipeline never implemented it. A fix is already in review ([PR #6942](https://github.com/agentscope-ai/QwenPaw/pull/6942)), indicating good maintainer responsiveness.
- **[Issue #6928](https://github.com/agentscope-ai/QwenPaw/issues/6928) — History scroll + input-bar editing bugs (4 comments).** Users cannot scroll back through historical messages, and editing selected text in the input bar deletes trailing content.
- **[Issue #6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) — Assistant message completion time wrong (4 comments).** A 2-minute tool-heavy turn displays as a few seconds. Fix PR [#6938](https://github.com/agentscope-ai/QwenPaw/pull/6938) is in review.
- **[Issue #6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) — MCP numeric-string coercion failures (4 comments).** Models emit string-typed args (e.g. `"assetInfo": 1.000001`) as numbers, failing `jsonschema` validation. Fix PR [#6936](https://github.com/agentscope-ai/QwenPaw/pull/6936) exists.
- **[Issue #6924](https://github.com/agentscope-ai/QwenPaw/issues/6924) — Plugin channel config regression (4 comments).** Third-party channels lost their custom interactive configurators in 2.0.x. Addressed by [PR #6943](https://github.com/agentscope-ai/QwenPaw/pull/6943).
- **[Issue #6847](https://github.com/agentscope-ai/QwenPaw/issues/6847) — Antivirus kills QwenPaw but not comparable agents (4 comments).** False-positive process termination during tasks.
- **[Issue #6780](https://github.com/agentscope-ai/QwenPaw/issues/6780) — v2.0.1 freezes after idle minutes (4 comments).** Requires killing the process; still unresolved.

**Underlying need:** Users are asking for reliable long-running autonomy (no silent stalls), honest documentation of memory behavior, and trustworthy UI/history. The PR pipeline shows maintainers are actively responding to each of these clusters.

---

## 5. Bugs & Stability

Ranked by severity:

**Critical / High**
- **[Issue #6916](https://github.com/agentscope-ai/QwenPaw/issues/6916) — Security: plugins can silently create cron jobs and inject user-visible messages without approval.** Permission-model gap (medium-high severity) in the Apps marketplace flow. No fix PR yet — deserves prioritization.
- **[Issue #6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) — Agent silently stops after planning (needs "继续" to resume).** Core loop reliability defect on v2.1.0-beta.2. No fix PR yet.
- **[Issue #6918](https://github.com/agentscope-ai/QwenPaw/issues/6918) — Inter-agent messages spawn a new agent session per message**, causing concurrent "shadow instances" and duplicate history.
- **[Issue #6927](https://github.com/agentscope-ai/QwenPaw/issues/6927) — Multi-subagent invocations repeatedly fall into infinite loops** (v2.1.0-beta.3).
- **[Issue #6926](https://github.com/agentscope-ai/QwenPaw/issues/6926) — `sync.py` imports history under random AgentState UUID instead of the real session_id** (closed, but a critical data-integrity bug: 18–50% rows orphaned in every agent, recall split/duplicated).

**Moderate**
- **[Issue #6932](https://github.com/agentscope-ai/QwenPaw/issues/6932) — No auto-recovery after transient network drops**; all LLM requests fail with `httpx.ConnectTimeout` until process restart (reproduced twice in one day).
- **[Issue #6780](https://github.com/agentscope-ai/QwenPaw/issues/6780) — v2.0.1 freezes after tens of minutes idle**; only a process restart helps.
- **[Issue #6955](https://github.com/agentscope-ai/QwenPaw/issues/6955) / [Issue #6919](https://github.com/agentscope-ai/QwenPaw/issues/6919) — Probabilistic startup crashes and frequent crashes** on Windows (pip install, Python 3.13/3.11); the latter closed without a stated resolution.
- **[Issue #6951](https://github.com/agentscope-ai/QwenPaw/issues/6951) — After Scroll compression, pre-compression chat history is invisible** on session re-entry; UI shows only internal eviction indexes.
- **[Issue #6813](https://github.com/agentscope-ai/QwenPaw/issues/6813)** — `KeyError: '__aiter__'` in chat auto-title generation. **Fixed** by [PR #6816](https://github.com/agentscope-ai/QwenPaw/pull/6816).

**Lower**
- **[Issue #6948](https://github.com/agentscope-ai/QwenPaw/issues/6948)** — Admin console shows UTC instead of configured `user_timezone`.
- **[Issue #6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) / [#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839)** — have fix PRs in review ([#6938](https://github.com/agentscope-ai/QwenPaw/pull/6938), [#6936](https://github.com/agentscope-ai/QwenPaw/pull/6936)).
- **[Issue #6883](https://github.com/agentscope-ai/QwenPaw/issues/6883)** — Diary page groups subfolder notes (e.g. `memory/2026-08-09/`) under the wrong date.
- **[Issue #6945](https://github.com/agentscope-ai/QwenPaw/issues/6945)** — Smart-mode dialogue writes outside the sandbox fail unexpectedly (user asks: should smart mode just approve, or execute?).
- **[Issue #6928](https://github.com/agentscope-ai/QwenPaw/issues/6928)** — Input-bar editing deletes trailing text; history not scrollable.
- **[Issue #6847](https://github.com/agentscope-ai/QwenPaw/issues/6847)** — Antivirus falsely terminates QwenPaw; no resolution path visible (possibly a signing/packaging issue).

---

## 6. Feature Requests & Roadmap Signals

**Notable user-driven requests:**
- **[Issue #6929](https://github.com/agentscope-ai/QwenPaw/issues/6929) — Project-conversation-folder as a working context.** Users want the codex/trae pattern: base a conversation on a folder, preview files, and send selected file content into the dialogue. Strong UX signal for file-centric workflows (closed as enhancement, but likely roadmap input).
- **[Issue #6917](https://github.com/agentscope-ai/QwenPaw/issues/6917) — Agent should be able to deliver reports/messages into a persistent Inbox** (not just chat sessions that scroll away), with unread indicators.
- **[Issue #6925](https://github.com/agentscope-ai/QwenPaw/issues/6925) — Multi-agent collaboration should live in a single session window**, instead of spawning a new session per agent interaction.
- **[Issue #6923](https://github.com/agentscope-ai/QwenPaw/issues/6923) — Suggestion to study LongHorizon-Harness** for sustained, multi-round tasks without state drift.

**Incoming feature PRs:**
- [PR #6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) — Native **DataPaw app runtime** and durable analysis workspace (first-time contributor, large feature; infra repo [QwenPaw-Data](https://github.com/agentscope-ai/QwenPaw-Data/)).
- [PR #6954](https://github.com/agentscope-ai/QwenPaw/pull/6954) — **MiniMax TTS support** in the SIP channel (HTTP TTS with configurable model/voice/endpoint, hex PCM parsing).
- [PR #5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) — **Per-session model overrides** (open since 07-12; single Agent, different LLMs per conversation).
- [PR #5869](https://github.com/agentscope-ai/QwenPaw/pull/5869) — **System commands in slash autocomplete** across TUI/web/ACP (open since 07-08).

**Prediction for v2.1.0 stable:** The memory prompt fix ([#6942](https://github.com/agentscope-ai/QwenPaw/pull/6942)), MCP string coercion ([#6936](https://github.com/agentscope-ai/QwenPaw/pull/6936)), assistant timestamp fix ([#6938](https://github.com/agentscope-ai/QwenPaw/pull/6938)), scroll-compression placeholder fix ([#6947](https://github.com/agentscope-ai/QwenPaw/pull/6947)), and plugin-channel configurator restoration ([#6943](https://github.com/agentscope-ai/QwenPaw/pull/6943)) are all plausible candidates for inclusion. Per-session model overrides ([#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992)) may land if review completes in time.

---

## 7. User Feedback Summary

- **Silent task stalling is the loudest complaint.** Multiple reports describe the agent announcing a multi-step plan and then stopping without error, requiring a nudge ("继续") to proceed ([#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921)); relatedly, sub-agent orchestration can loop indefinitely ([#6927](https://github.com/agentscope-ai/QwenPaw/issues/6927)).
- **Windows users are disproportionately affected** by antivirus interference ([#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847)), startup crashes ([#6955](https://github.com/agentscope-ai/QwenPaw/issues/6955), [#6919](https://github.com/agentscope-ai/QwenPaw/issues/6919)), and idle freezes ([#6780](https://github.com/agentscope-ai/QwenPaw/issues/6780)).
- **Trust in memory behavior is broken**: the prompt layer misrepresents Dream's behavior ([#6853](https://github.com/agentscope-ai/QwenPaw/issues/6853)), and the resulting UX is confusing. The maintainers' response — simplifying the memory prompt to remove internal implementation details ([PR #6942](https://github.com/agentscope-ai/QwenPaw/pull/6942)) — is a good sign.
- **UI/history regressions frustrate daily users**: non-scrollable history and an input-bar editing bug ([#6928](https://github.com/agentscope-ai/QwenPaw/issues/6928)), wrong timestamps ([#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826)), and UTC instead of local time in the admin console ([#6948](https://github.com/agentscope-ai/QwenPaw/issues/6948)).
- **Plugin ecosystem friction**: developers lost interactive configurators for custom channels in 2.0.x ([#6924](https://github.com/agentscope-ai/QwenPaw/issues/6924)); a restoration PR ([#6943](https://github.com/agentscope-ai/QwenPaw/pull/6943)) is in review.
- **Satisfaction signals**: users reference competitors/cousins constructively (codex, trae, WorkBuddy) — QwenPaw is being compared against them on stability ([#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847)) and workflow design ([#6929](https://github.com/agentscope-ai/QwenPaw/issues/6929)), which suggests a motivated power-user base.

---

## 8. Backlog Watch

Items needing maintainer attention:

- **[Issue #6780](https://github.com/agentscope-ai/QwenPaw/issues/6780) — Idle freeze on v2.0.1** (open since 08-07, 4 comments). No fix or workaround communicated yet; affects unattended deployments.
- **[Issue #6847](https://github.com/agentscope-ai/QwenPaw/issues/6847) — Antivirus false positives** (open since 08-09). Possibly a code-signing/packaging issue; no response path visible.
- **[PR #5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) — Per-session model overrides** (open since 07-12, under review). High user value; a final review decision would be valuable.
- **[PR #5869](https://github.com/agentscope-ai/QwenPaw/pull/5869) — System commands in slash autocomplete** (open since 07-08, under review, first-time contributor).
- **[PR #6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) — ACP final-text loss when notifications race the prompt response** (open since 08-01, under review; fixes #6625).
- **[PR #6715](https://github.com/agentscope-ai/QwenPaw/pull/6715) — OneBot inbound media localization** (open since 08-05, under review; maintainer follow-up review items were raised).
- **[PR #6818](https://github.com/agentscope-ai/QwenPaw/pull/6818) — Summary should honor `disable_thinking` and interruption** (open since 08-08, under review; fixes #6811).
- **[Issue #6952](https://github.com/agentscope-ai/QwenPaw/issues/6952) / [PR #6953](https://github.com/agentscope-ai/QwenPaw/pull/6953)** — Prefix-cache instability from unsorted tool schemas and interleaved `env_context` fields. New; PR ready, needs review bandwidth.
- **[PR #6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) — DataPaw app runtime** (large, first-time contributor). High architectural impact; needs early maintainer triage to set expectations and review scope.

---

*Digest generated from public GitHub activity on 2026-08-13. All links refer to the [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) repository.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-13

## 1. Today's Overview

ZeroClaw remains highly active, with **50 issues** and **50 PRs** touched in the last 24 hours. The open/active issue count is **45**, with **5 closed issues**; the PR queue shows **36 open PRs** and **14 merged/closed PRs**. No new releases were published in this window. Activity is concentrated on Windows/macOS testing gaps, web-tool reliability, agent/runtime policy work, and security/compliance cleanups. Several high-severity bugs remain open, especially around desktop installers, web fetching, and channel runtime behavior, but a steady stream of contributor PRs shows strong community momentum.

## 2. Releases

**None.** No new ZeroClaw releases, changelogs, or migration notes were published in this digest window.

## 3. Project Progress

The following PRs were closed/merged in the recent update window, indicating completed or landed work:

- [PR #9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182) — **feat(runtime): support PowerShell as the native shell on Windows.** Routes `powershell`/`pwsh` through `-NoProfile -NonInteractive -Command` while preserving the `cmd.exe /C` default.
- [PR #9877](https://github.com/zeroclaw-labs/zeroclaw/pull/9877) — **fix(cli): make cron scheduling help examples runnable.** Gives parent `cron` help examples valid `--agent` and `--prompt` values.
- [PR #9720](https://github.com/zeroclaw-labs/zeroclaw/pull/9720) — **fix(runtime): enforce response cache request boundaries.** Restricts full-response caching to deterministic requests and applies modifying hooks before providers see the request.
- [PR #9701](https://github.com/zeroclaw-labs/zeroclaw/pull/9701) — **feat(gateway): keep chat WebSockets alive.** Adds configurable ping interval for Web UI chat connections.
- [PR #9692](https://github.com/zeroclaw-labs/zeroclaw/pull/9692) — **feat(zerocode): show live run-status icons on the SOP pane list.**
- [PR #8902](https://github.com/zeroclaw-labs/zeroclaw/pull/8902) — **fix(runtime): route bidirectional JSON-RPC responses.** Completes ZeroCode ask-user/poll interactions.
- [PR #9778](https://github.com/zeroclaw-labs/zeroclaw/pull/9778) — **docs(foundations): reconcile revision histories.**

Closed issues in the same window include:

- [Issue #9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) — CLI-created cron jobs could not deliver output (`delivery.mode = "none"`).
- [Issue #9796](https://github.com/zeroclaw-labs/zeroclaw/issues/9796) — Cron parent help printed invalid `add-at`, `add-every`, and `once` examples.
- [Issue #9684](https://github.com/zeroclaw-labs/zeroclaw/issues/9684) — ZeroCode SOP pane live run-status icons.

## 4. Community Hot Topics

The most-discussed issues in this update window, by comment count:

- [Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) — **74 test failures on Windows** (14 comments). Unix-only test commands, path semantics, and console encoding break the suite; CI only runs Linux.
- [Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — **Maintainer decision queue for RFCs and design issues** (13 comments). A coordination tracker for items needing maintainer attention.
- [Issue #8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) — **Plugin-owned Kanban board for agent work** (9 comments). Proposes an opt-in Kanban domain owned by a plugin on generic host capabilities.
- [Issue #9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) — **Consolidate release attestation mechanisms** (9 comments). v0.8.3 shipped with three parallel signing/provenance systems; team wants one story and fewer release assets.
- [Issue #6653](https://github.com/zeroclaw-labs/zeroclaw/issues/6653) — **Host-architecture policy for emulated installs** (7 comments).
- [Issue #7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929) — **Unify slash-command registries** across web UI, ZeroCode TUI, and channel runtime (7 comments).
- [Issue #5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) — **Complete SearXNG configuration and web-search failure recovery** (6 comments).
- [Issue #6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) — **Schema-validated memory consolidation with bounded fallback** (6 comments).
- [Issue #5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) — **Opt-in LSP support for ZeroCode coding workflows** (6 comments).
- [Issue #9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207) — **`web_fetch` returns garbage for compressed responses** (5 comments).

Underlying themes: cross-platform reliability, maintainer decision-making, agent extensibility, supply-chain security, and better developer/coding-agent tooling.

## 5. Bugs & Stability

Ranked by severity:

**S1 — workflow blocked**

- [Issue #9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207) — `web_fetch` returns garbage for gzip/brotli/deflate responses. No dedicated fix PR appears in the current window.
- [Issue #7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) — macOS desktop app can reopen blank or without a window. Marked `r:needs-repro`.
- [Issue #9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290) — Windows desktop installer fails at launch with missing `TaskDialogIndirect`.
- [Issue #9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) — CLI-created cron jobs discard output because delivery is hardcoded to `None`; now **closed**.

**S2 — degraded behavior**

- [Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) — 74 Windows test failures. Related work is visible in [Issue #7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) and the advisory CI PR [PR #9398](https://github.com/zeroclaw-labs/zeroclaw/pull/9398).
- [Issue #9796](https://github.com/zeroclaw-labs/zeroclaw/issues/9796) — Invalid cron help examples; appears fixed by [PR #9877](https://github.com/zeroclaw-labs/zeroclaw/pull/9877).

**S3 — minor issue**

- [Issue #9198](https://github.com/zeroclaw-labs/zeroclaw/issues/9198) — Discord typing indicator remains stuck after dashboard daemon reload.
- [Issue #9202](https://github.com/zeroclaw-labs/zeroclaw/issues/9202) — `zeroclaw desktop` uses a dead download URL and does not detect installed AppImage on Linux.

Stability trend: Windows/macOS coverage is a known weak point; the project is actively discussing platform CI expansion, but S1 desktop and web-fetch issues remain user-visible blockers.

## 6. Feature Requests & Roadmap Signals

Notable requested features and roadmap signals:

- **Cross-platform CI and runtime parity**
  - [Issue #7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) — Run test suite on Windows and macOS in CI.
  - [PR #9398](https://github.com/zeroclaw-labs/zeroclaw/pull/9398) — Advisory macOS and Windows tests, currently blocked/stacked.
  - [PR #9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182) — Native PowerShell support on Windows.

- **Agent orchestration and runtime policy**
  - [Issue #8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) — Plugin-owned Kanban board.
  - [Issue #7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929) — Unified slash-command registry.
  - [Issue #9323](https://github.com/zeroclaw-labs/zeroclaw/issues/9323) — Execution-tree iteration budget ownership.
  - [Issue #6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) — Schema-validated memory consolidation.
  - [Issue #8321](https://github.com/zeroclaw-labs/zeroclaw/issues/8321) — Response-cache policy for volatile runtime context.

- **Developer experience**
  - [Issue #5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) — LSP support for ZeroCode.
  - [Issue #8078](https://github.com/zeroclaw-labs/zeroclaw/issues/8078) — ZeroCode local pre-submission gate.

- **Security and supply chain**
  - [Issue #9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) — Consolidate release attestation mechanisms.
  - [Issue #8059](https://github.com/zeroclaw-labs/zeroclaw/issues/8059) — `deny.toml` policy cleanup.
  - [Issue #9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) — Remove `bitmaps` unmaintained advisory waiver, currently blocked.
  - [Issue #9511](https://github.com/zeroclaw-labs/zeroclaw/issues/9511) — Surface diff-aware Semgrep findings as advisory PR comments.
  - [Issue #9507](https://github.com/zeroclaw-labs/zeroclaw/issues/9507) — Enforce crate dependency direction with one declarative CI gate.

- **Search and tooling**
  - [Issue #5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) — SearXNG support and DuckDuckGo CAPTCHA detection.

- **Deprecations / cleanups**
  - [Issue #9644](https://github.com/zeroclaw-labs/zeroclaw/issues/9644) — Retire the Lucid memory connector at v0.9.0.
  - [Issue #8431](https://github.com/zeroclaw-labs/zeroclaw/issues/8431) — Audit temporary artifact lifecycle and owner-side cleanup.

Roadmap prediction: the next release is likely to include further Windows/runtime parity work, unified slash-command behavior, response-cache policy enforcement, and release-attestation consolidation. The v0.9.0 line may also mark the removal of the dormant Lucid memory connector based on [Issue #9644](https://github.com/zeroclaw-labs/zeroclaw/issues/9644).

## 7. User Feedback Summary

User pain points in this window are heavily weighted toward **Windows and desktop reliability**:

- Windows test suites fail at scale; contributors report local workflow being blocked or degraded.
- Windows desktop installer can fail at launch.
- macOS desktop app can appear blank or lose its window after restart.
- `web_fetch` is unreliable for compressed responses, making agent web workflows difficult.
- Discord typing indicator can get permanently stuck after daemon reload.
- Cron jobs created via CLI can silently discard all output.

There is positive engagement from the contributor community: multiple trusted/principal/distinguished contributor PRs landed, and maintainers are actively using trackers and decision queues. Still, several S1 issues remain open and need repro or maintainer prioritization.

## 8. Backlog Watch

Issues and PRs that appear to need maintainer or author action:

- [Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — Maintainer decision queue for RFCs and design issues; the central routing point for stalled decisions.
- [Issue #7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) — macOS desktop blank-window bug; marked `r:needs-repro`.
- [Issue #6653](https://github.com/zeroclaw-labs/zeroclaw/issues/6653) — Host-architecture policy; marked `needs-author-action`.
- [Issue #7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929) — Slash-command registry unification; marked `needs-author-action`.
- [Issue #5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) — LSP support for ZeroCode; marked `needs-author-action`.
- [Issue #9323](https://github.com/zeroclaw-labs/zeroclaw/issues/9323) — Execution-tree iteration budget ownership; marked `needs-author-action`.
- [Issue #9644](https://github.com/zeroclaw-labs/zeroclaw/issues/9644) — Retire Lucid memory connector; marked `needs-author-action`.
- [Issue #8367](https://github.com/zeroclaw-labs/zeroclaw/issues/8367) — Derived capability readiness; currently `blocked`.
- [Issue #9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) — `bitmaps` advisory waiver removal; currently `blocked`.
- [Issue #9511](https://github.com/zeroclaw-labs/zeroclaw/issues/9511) — Semgrep advisory PR comments; currently `blocked`.
- [PR #9398](https://github.com/zeroclaw-labs/zeroclaw/pull/9398) — Advisory macOS/Windows CI tests; maintainer note says do not merge in current stacked state.
- [PR #9544](https://github.com/zeroclaw-labs/zeroclaw/pull/9544) — `fix(delegate): honor configured provider fallbacks`; marked `needs-author-action`.
- [PR #8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) — SSRF gate opt-in for `file_download`; marked `needs-author-action`.
- [PR #9867](https://github.com/zeroclaw-labs/zeroclaw/pull/9867) — Automate PR size labels; marked `needs-author-action`.
- [PR #9527](https://github.com/zeroclaw-labs/zeroclaw/pull/9527) — Routine toolchain bump to 1.97.1; marked `needs-author-action`.

Overall, ZeroClaw is in a healthy but busy state: strong contributor throughput and clear roadmap signals, offset by lingering cross-platform and web-tooling stability bugs that need maintainer focus.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*