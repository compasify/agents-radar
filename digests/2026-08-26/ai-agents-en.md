# OpenClaw Ecosystem Digest 2026-08-26

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-26 00:00 UTC

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

# OpenClaw Project Digest — 2026-08-26

## 1. Today's Overview

OpenClaw is in an intense stabilization phase: 500 issues and 500 PRs were updated in the last 24 hours (445 issues open, 55 closed; 273 PRs open, 227 merged/closed), with no new releases published. The active test target remains **v2026.8.1-beta.3** (commit `5831b80721`), and the beta window is drawing heavy field scrutiny — most notably a **P0 SQLite corruption regression** ([#126821](https://github.com/openclaw/openclaw/issues/126821)) that recurs on freshly rebuilt databases within 15–24h on WSL2, including a "paralyzed gateway" mode. A broad cluster of P1 message-delivery and session-state bugs (WhatsApp blank bubbles, Telegram stuck outbound, infinite compaction loops, subagent completion loss) shows core reliability is the dominant theme ahead of the next stable release. In parallel, maintainers are landing meaningful security improvements (install-policy acknowledgements, credential isolation) and a substantial Control UI composer redesign. Overall project health: high community engagement and strong contributor depth, but maintainer review bandwidth appears to be the gating factor on several long-standing P1s.

## 2. Releases

No new releases were published in this window. The current beta remains [v2026.8.1-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.8.1-beta.3), with release-validation feedback tracked in [#125626](https://github.com/openclaw/openclaw/issues/125626).

## 3. Project Progress

227 PRs were merged/closed in the last 24h. Notable items among the most-active set:

**Security & trust boundary**
- [#116489](https://github.com/openclaw/openclaw/pull/116489) — feat(security): require acknowledgement for install policy warnings; external `security.installPolicy` can return `warn`, requiring operator confirmation before suspicious plugin/skill installs
- [#120900](https://github.com/openclaw/openclaw/pull/120900) — feat(ui): review install policy warnings in Control UI
- [#125471](https://github.com/openclaw/openclaw/pull/125471) — fix(models): keep Claude CLI OAuth available in Control UI (lost refresh ownership after gateway restart)
- [#129670](https://github.com/openclaw/openclaw/pull/129670) *(open)* — feat(secrets): agent-requested credentials the model never sees — a notable security-boundary improvement letting users hand agents API keys without them entering conversation context

**Skills / Gateway / Channels**
- [#126424](https://github.com/openclaw/openclaw/pull/126424) — fix(gateway): keep conversation delivery within agent bindings (touches 8 channels)
- [#117567](https://github.com/openclaw/openclaw/pull/117567) — fix(skills): fail closed for unavailable remote Gateway (prevents client-local fallback to stale inventory)
- [#129662](https://github.com/openclaw/openclaw/pull/129662) — fix(skills): load trusted Bun and Nix package hardlinks safely (closes [#116594](https://github.com/openclaw/openclaw/issues/116594))
- [#123975](https://github.com/openclaw/openclaw/pull/123975) — fix(scripts): clean up tsgo process trees on timeout or signal

**Control UI**
- [#124301](https://github.com/openclaw/openclaw/pull/124301) — improve(control-ui): restructure the composer as a multiline surface
- [#127824](https://github.com/openclaw/openclaw/pull/127824) — improve(control-ui): redesign composer slash and skill invocations (stacked on #124301)
- [#129620](https://github.com/openclaw/openclaw/pull/129620) *(open)* — fix(ui): keep hidden session files cold (prevents `sessions.files.list` from monopolizing the Gateway event loop)

**Closed bug with fix**
- [#95553](https://github.com/openclaw/openclaw/issues/95553) — P1 preflight compaction hard-capped at ~60s, ignoring `compaction.timeoutSeconds`, closed with linked PR.

## 4. Community Hot Topics

Most active issues by comment count:

- [#125626](https://github.com/openclaw/openclaw/issues/125626) — **OpenClaw 2026.8.1 beta feedback** (18 comments) — the release-validation hub for the current beta; effectively the community's beta QA log.
- [#80319](https://github.com/openclaw/openclaw/issues/80319) — **QA tool-defaults suite conflates Codex-native tools with OpenClaw dynamic tool parity** (17 comments, 1👍) — long-running tool-parity debate; author clarifies it's a harness issue, not broad Codex runtime dropout.
- [#79902](https://github.com/openclaw/openclaw/issues/79902) — **Companion-friendly SQLite transcript/session seams** (14 comments, 2👍) — advanced consumers want canonical runtime state without scraping opaque blobs.
- [#67777](https://github.com/openclaw/openclaw/issues/67777) — **Subagent completion delivery can be lost** (13 comments, P1) — reliability of subagent results under timeout/drain/orphan conditions.
- [#67413](https://github.com/openclaw/openclaw/issues/67413) — **Per-agent dreaming configuration** (9 comments, **5👍** — the most-liked request this period) — memory-core dreaming runs on all workspaces at once, causing OOM kills on multi-agent gateways.
- [#97616](https://github.com/openclaw/openclaw/issues/97616) — **Unreaped hook/tool child processes → zombie accumulation** (9 comments, 1👍, P1).
- [#92633](https://github.com/openclaw/openclaw/issues/92633) — **`memory_search corpus=all` times out while individual corpora succeed** (9 comments, P1).
- [#45758](https://github.com/openclaw/openclaw/issues/45758) — **YAML config file support** (9 comments, 2👍).

**Underlying need:** operators running multi-agent production gateways are pushing hard on memory-system scaling and delivery guarantees; config ergonomics (YAML, model/cost transparency) remain persistently popular.

## 5. Bugs & Stability

Ranked by severity. Fix-PR status noted where relevant.

**Critical / P0**
- [#126821](https://github.com/openclaw/openclaw/issues/126821) — **SQLite corruption recurs on pristine rebuilt DBs within 15–24h** (2026.8.1-beta.2, WSL2): 5 events in 5 days, freelist miscounts, plus a "paralyzed gateway" mode that refuses all service but never exits. Data-loss + crash-loop. **No fix PR yet.**

**P1 — Message loss / delivery failures**
- [#127710](https://github.com/openclaw/openclaw/issues/127710) — prepared-model-runtime fails closed on transient generation churn: one fingerprint drift permanently wedges the gateway; owner-commit race silently drops messages. No fix PR.
- [#127948](https://github.com/openclaw/openclaw/issues/127948) — WhatsApp group replies render as blank bubbles when quote cache expires (>10 min). **Linked PR open.**
- [#126900](https://github.com/openclaw/openclaw/issues/126900) — `maxActiveTranscriptBytes` loops compaction forever when the compacted transcript stays above threshold; channel wedges. **Linked PR open.**
- [#126246](https://github.com/openclaw/openclaw/issues/126246) — Telegram durable outbound deliveries stuck in `send_attempt_started`, lost on restart. No fix PR.
- [#67777](https://github.com/openclaw/openclaw/issues/67777) — Subagent completion delivery lost on direct-announce timeout, drain, or orphan prune. No fix PR.
- [#106704](https://github.com/openclaw/openclaw/issues/106704) — `sessions_yield` on a subagent's first turn silently finalizes the run as `ok` with an empty result. No fix PR.
- [#128067](https://github.com/openclaw/openclaw/issues/128067) — beta.7 field report: 6 reliability defect classes (persistence, delivery, restart-recovery) + 3 minor, from 3 weeks of evidence. No fix PR.

**P1 — Session state / context**
- [#92633](https://github.com/openclaw/openclaw/issues/92633) — `memory_search corpus=all` times out after 15s while each individual corpus succeeds. No fix PR.
- [#84662](https://github.com/openclaw/openclaw/issues/84662) — Codex app-server stores per-turn OpenClaw runtime context in native user history → runaway `response.create` input growth. No fix PR.
- [#80178](https://github.com/openclaw/openclaw/issues/80178) — `resolveCliAuthEpoch` invalidates every live CLI session when local credential source-of-storage flips. No fix PR.
- [#96477](https://github.com/openclaw/openclaw/issues/96477) — Single-writer session lock breaks under multi-user production load. No fix PR.
- [#99925](https://github.com/openclaw/openclaw/issues/99925) — WebChat new session loses all prior conversation context (P2). No fix PR.

**P1 — Crashes / resource exhaustion**
- [#97616](https://github.com/openclaw/openclaw/issues/97616) — Unreaped hook/tool child processes → zombie accumulation and runtime degradation. No fix PR.
- [#56217](https://github.com/openclaw/openclaw/issues/56217) — Secret-provider crash-loop exhausts 1Password service account rate limits. No fix PR.
- [#60398](https://github.com/openclaw/openclaw/issues/60398) — `gateway install` fails with error 5 when home directory is on an external APFS volume. No fix PR; `fix-shape-clear`.
- [#79252](https://github.com/openclaw/openclaw/issues/79252) — `globalCircuitBreakerThreshold` is per-tool-type, not session-global — allows cross-tool loop evasion. No fix PR.
- [#95746](https://github.com/openclaw/openclaw/issues/95746) — memory-core dreaming exhausts local model context/KV cache via parallel Dream Diary subagent runs. No fix PR.

**P1 — Auth / security boundary**
- [#127176](https://github.com/openclaw/openclaw/issues/127176) — CLI and Node Host alternate device metadata approvals on Windows. **Linked PR open.**
- [#125570](https://github.com/openclaw/openclaw/issues/125570) — Skill Workshop update apply overwrites live skill description, silently breaking skill routing. No fix PR.
- [#126631](https://github.com/openclaw/openclaw/issues/126631) — Sandbox skills bind-mount creates root-owned `/workspace/.openclaw`, locking out uid 1000. **Linked PR open.**

**Notable P2/P3:** [#114612](https://github.com/openclaw/openclaw/issues/114612) memory-core SQLite unbounded growth; [#119401](https://github.com/openclaw/openclaw/issues/119401) `NO_REPLY` suppression ignores `silentReply` policy; [#64103](https://github.com/openclaw/openclaw/issues/64103) session `status` values mislead agents; [#48709](https://github.com/openclaw/openclaw/issues/48709) Gemini 2.5 Pro `textSignature` bloat.

**Assessment:** Most P1s carry `no-new-fix-pr` / `needs-maintainer-review` labels — the community has supplied solid repros, but fixes are bottlenecked on maintainer capacity.

## 6. Feature Requests & Roadmap Signals

Most-supported requests (by 👍 and engagement):

- [#67413](https://github.com/openclaw/openclaw/issues/67413) — **Per-agent dreaming configuration** (5👍) — strongest roadmap signal; directly mitigates OOM kills on multi-agent gateways.
- [#26037](https://github.com/openclaw/openclaw/issues/26037) — Ali Bailian coding plan (thinking/reasoning) support (4👍).
- [#79902](https://github.com/openclaw/openclaw/issues/79902) — Companion-friendly SQLite transcript/session seams (2👍, 14 comments).
- [#45758](https://github.com/openclaw/openclaw/issues/45758) — YAML config file format (2👍).
- [#65438](https://github.com/openclaw/openclaw/issues/65438) — Configurable bootstrap file injection order for prompt cache optimization (2👍).
- [#95601](https://github.com/openclaw/openclaw/issues/95601) — VoiceOver-friendly chat history (2👍).
- [#16670](https://github.com/openclaw/openclaw/issues/16670) — Include Memory/Embedding setup in onboarding wizard (1👍).
- [#51441](https://github.com/openclaw/openclaw/issues/51441) — Expose resolved backend model in `session_status` (LiteLLM/routing transparency) (1👍).
- [#9016](https://github.com/openclaw/openclaw/issues/9016) — Expose OpenRouter usage cost to agent runtime (1👍).
- [#39343](https://github.com/openclaw/openclaw/issues/39343) — Image batching / media group buffering at gateway layer (1👍).
- [#83954](https://github.com/openclaw/openclaw/issues/83954) — Pro-plan path for `gpt-5.5-pro` / retired Spark via Codex (1👍).
- Also: [#62615](https://github.com/openclaw/openclaw/issues/62615) gateway-side circuit breaker for unhealthy sessions; [#6625](https://github.com/openclaw/openclaw/issues/6625) graceful sub-agent timeout with pre-timeout warning; [#9637](https://github.com/openclaw/openclaw/issues/9637) TUI accessibility/emoji toggle.

**Prediction:** memory-core dominates the roadmap signal — per-agent dreaming controls, memory onboarding, and retention policy directly counter active P1/P2 bugs ([#67413](https://github.com/openclaw/openclaw/issues/67413), [#16670](https://github.com/openclaw/openclaw/issues/16670), [#92633](https://github.com/openclaw/openclaw/issues/92633), [#114612](https://github.com/openclaw/openclaw/issues/114612)). Expect these in an upcoming minor release. Small empathy-driven UX items (TUI accessibility, VoiceOver history) are plausible follow-ups given maintainers recently shipped a well-received accessibility improvement.

## 7. User Feedback Summary

- **Beta reliability is the top pain point.** [#128067](https://github.com/openclaw/openclaw/issues/128067) documents six defect classes over three weeks of production-like use; [#126821](https://github.com/openclaw/openclaw/issues/126821) reports 5 SQLite corruption events in 5 days, including a "paralyzed gateway."
- **Message delivery is the most fragile surface.** Lost Telegram outbound after restart ([#126246](https://github.com/openclaw/openclaw/issues/126246)), blank WhatsApp bubbles ([#127948](https://github.com/openclaw/openclaw/issues/127948)), Buzz downtime message drops ([#117259](https://github.com/openclaw/openclaw/pull/117259)), and subagent completion loss ([#67777](https://github.com/openclaw/openclaw/issues/67777)).
- **Memory setup and scaling cause recurring frustration.** New users are never told about embedding provider configuration ([#16670](https://github.com/openclaw/openclaw/issues/16670)); `corpus=all` times out ([#92633](https://github.com/openclaw/openclaw/issues/92633)); tables grow unbounded ([#114612](https://github.com/openclaw/openclaw/issues/114612)); dreaming causes OOM spikes ([#67413](https://github.com/openclaw/openclaw/issues/67413)).
- **WebChat context reset:** users report the AI starts "blind" after session reset/timeouts ([#99925](https://github.com/openclaw/openclaw/issues/99925), [#77819](https://github.com/openclaw/openclaw/issues/77819)).
- **Ops/auth friction:** 1Password rate-limit crash-loops ([#56217](https://github.com/openclaw/openclaw/issues/56217)), Windows device metadata approval alternation ([#127176](https://github.com/openclaw/openclaw/issues/127176)), gateway install failures on external APFS volumes ([#60398](https://github.com/openclaw/openclaw/issues/60398)).
- **Positive signal:** a macOS VoiceOver user explicitly thanked the team for placing remaining usage info near the model selector in v2026.6.9 ([#95601](https://github.com/openclaw/openclaw/issues/95601)) — an accessibility win to build on.
- **Community quality is high.** Reports frequently include root-cause analysis and self-corrections (e.g., [#80319](https://github.com/openclaw/openclaw/issues/80319)), reflecting a technically sophisticated, high-trust contributor base.

## 8. Backlog Watch

Long-standing items still awaiting fixes or maintainer review:

- [#80319](https://github.com/openclaw/openclaw/issues/80319) — [P2, since 2026-05-10, 17 comments] QA tool-defaults suite conflation; `needs-maintainer-review`.
- [#67777](https://github.com/openclaw/openclaw/issues/67777) — [P1, since 2026-04-16, 13 comments] Subagent completion delivery loss; critical reliability, no fix PR.
- [#92633](https://github.com/openclaw/openclaw/issues/92633) — [P1, since 2026-06-13] `memory_search corpus=all` timeout; no fix PR.
- [#97616](https://github.com/openclaw/openclaw/issues/97616) — [P1, since 2026-06-29] Zombie process leak; no fix PR.
- [#56217](https://github.com/openclaw/openclaw/issues/56217) — [P1, since 2026-03-28] 1Password crash-loop rate-limit exhaustion; no fix PR.
- [#60398](https://github.com/openclaw/openclaw/issues/60398) — [P1, since 2026-04-03] `gateway install` fails on external APFS volume; `fix-shape-clear`, no fix PR.
- [#67413](https://github.com/openclaw/openclaw/issues/67413) — [P2, since 2026-04-15, 5👍] Per-agent dreaming configuration; no fix PR.
- [#16670](https://github.com/openclaw/openclaw/issues/16670) — [P2, since 2026-02-15] Onboarding wizard memory setup; no fix PR.
- [#51441](https://github.com/openclaw/openclaw/issues/51441) — [P2, since 2026-03-21] Expose resolved backend model; no fix PR.
- [#9016](https://github.com/openclaw/openclaw/issues/9016) — [P2, since 2026-02-04] OpenRouter usage cost exposure; no fix PR.
- [#9637](https://github.com/openclaw/openclaw/issues/9637) — [P2, since 2026-02-05] TUI emoji/unicode accessibility toggle; no fix PR.
- [#45758](https://github.com/openclaw/openclaw/issues/45758) — [P3, since 2026-03-14] YAML config support; no fix PR.
- [#6625](https://github.com/openclaw/openclaw/issues/6625) — [P3, since 2026-02-01] Graceful sub-agent timeout; no fix PR.
- [#62615](https://github.com/openclaw/openclaw/issues/62615) — [P3, since 2026-04-07] Gateway-side circuit breaker; no fix PR.

The recurring `clawsweeper:needs-maintainer-review` + `clawsweeper:no-new-fix-pr` combination across this backlog suggests maintainer review capacity — not community disinterest — is the primary gating factor for project velocity.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — Personal AI Assistant / Agent OSS Ecosystem
**Date:** 2026-08-26 | **Scope:** 12 projects, 24-hour community digest data

---

## 1. Ecosystem Overview

The personal AI assistant open-source landscape is in a **stabilization-and-hardening phase** rather than a feature-expansion phase. The largest projects (OpenClaw, Hermes Agent, CoPaw, ZeroClaw) are all processing unusually high issue/PR volumes centered on message-delivery guarantees, memory-system scaling, MCP reliability, and security-boundary enforcement — with multiple P0/P1 defects (SQLite corruption, subagent completion loss, cron cross-tenant access) still unresolved. Release cadence is uneven: CoPaw and LobsterAI shipped within days, while OpenClaw, Hermes, and ZeroClaw are holding releases for beta-validation or breaking-change milestones. Notably, **five separate communities independently proposed household edge-mesh architectures** (PicoClaw, NanoClaw, NullClaw, IronClaw, ZeroClaw), signaling a convergent desire to federate idle local hardware. Across all projects, the dominant bottleneck is not community interest but **maintainer review capacity**, repeatedly tagged as `needs-maintainer-review` or `do-not-merge`.

---

## 2. Activity Comparison

*Counts reflect issues/PRs updated in the last 24 hours. Health score is a qualitative composite of responsiveness, bug severity, release cadence, and backlog hygiene (1–10).*

| Project | Issues (open/closed) | PRs (open/merged) | Release status | Health |
|---|---|---|---|---|
| **OpenClaw** | 500 (445/55) | 500 (273/227) | No new release; beta v2026.8.1-beta.3 in validation | 7/10 — Massive community, but P0 SQLite corruption and maintainer bottleneck |
| **Hermes Agent** | 50 (40/10) | 50 (26/24) | No new release | 7/10 — High-velocity fixes; many P2 regressions and duplicate reports |
| **CoPaw (QwenPaw)** | 33 (19/14) | 50 (21/29) | **v2.1.1-beta.3 released** | 7/10 — Fast triage, but severe long-session performance issues open |
| **ZeroClaw** | 50 (38/12) | 50 (n/a) | No release; v0.9.0 breaking-change milestone | 7/10 — Strong security focus; PRs heavily gated behind review |
| **NanoClaw** | 5 (5/0) | 50 (34/16) | No new release | 8/10 — High merge rate; security issues (shell injection, argv secrets) need triage |
| **IronClaw** | 39 (35/4) | 25 (13/12) | No release; v1.4.0 milestone active | 8/10 — Closing large epics; CI infrastructure mature |
| **NanoBot** | 5 (5/0) | 24 (10/14) | No new release | 8/10 — Responsive maintainers; fixes land same-day |
| **LobsterAI** | 1 (1/0) | 11 (2/9) | **2 releases (2026.8.25, 2026.8.21)** | 8/10 — Shipping steadily; minimal bug volume |
| **Moltis** | 2 (1/1) | 5 (4/1) | No new release | 7/10 — Moderate activity; steady integration fixes |
| **PicoClaw** | 4 (4/0) | 1 (1/0) | No new release | 5/10 — Critical MCP hang open >1 month; PRs marked stale |
| **NullClaw** | 1 (1/0) | 0 (0/0) | No new release | 6/10 — Stable but nearly dormant; single feature proposal |
| **ZeptoClaw** | — | — | — | N/A — No activity in window |

**Volume leader:** OpenClaw alone accounts for roughly **60% of all tracked activity** across the ecosystem (1,000 combined issue/PR updates vs. ~360 for the next four projects combined).

---

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Community scale is unmatched** — 500 issues and 500 PRs touched in 24h dwarfs every other project; 227 PRs merged in a single day exceeds the monthly merge rate of most peers.
- **Trust-boundary innovation** — The agent-requested credentials PR (#129670, model never sees secrets) and install-policy acknowledgements are ahead of equivalent work in NanoClaw/ZeroClaw/NanoBot.
- **Channel breadth** — Gateway design touches 8+ channels simultaneously; peers typically optimize for 1–3 (NanoBot: Telegram; IronClaw: Slack/Telegram; CoPaw: WeChat/QQ).
- **Contributor depth** — Community reports include root-cause analysis and self-corrections, reflecting a sophisticated power-user base.

**Technical approach differences:**
- OpenClaw is a **gateway-centric, multi-agent, memory-core architecture** with a Control UI; peers split into desktop-app (Hermes), TUI-first (NanoBot), minimal-footprint primitives (NullClaw), and Rust/WASM security-first (ZeroClaw) approaches.
- OpenClaw's struggle with **SQLite corruption under WSL2** (#126821) is the ecosystem's most visible data-integrity incident; competitors using file-based or simpler storage haven't hit this class of bug — but also lack OpenClaw's scale of production-like testing.

**Relative weakness:** Maintainer bandwidth. The `clawsweeper:needs-maintainer-review` + `no-new-fix-pr` combination across the longest-standing P1s indicates OpenClaw is community-rich but **review-poor**, while smaller projects (NanoBot, IronClaw) close issues same-day.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **Memory system scaling** | OpenClaw, Hermes, ZeroClaw, CoPaw, NanoBot | Per-agent dreaming/OOM isolation (#67413 OpenClaw, #95746), `corpus=all` timeouts (#92633), unbounded table growth (#114612), memory-cleanup crashes (#5532 NanoBot), memory/enrichment separation RFC (#9103 ZeroClaw), loopback LLM memory bridge (#79159 Hermes) |
| **MCP lifecycle reliability** | Hermes, PicoClaw, CoPaw, Moltis, ZeroClaw | Client auto-recovery after server restart (#6524 CoPaw), agent-loop hangs on connection failure (#3269 PicoClaw), Windows stdio MCP subprocess exits (#94906 Hermes), OAuth scope registration (#1244 Moltis), shared MCP-registry caching RFC (#10346 ZeroClaw) |
| **Security & sandboxing** | OpenClaw, NanoBot, NanoClaw, ZeroClaw, CoPaw | Restricted-shell fail-closed enforcement (#5536 NanoBot), credential isolation (#129670 OpenClaw), shell-injection via unquoted interpolation (#3543 NanoClaw), argv secret leakage (#3484 NanoClaw), Copilot credential-cache hardening (#10370 ZeroClaw), master-key file permissions (#7119 CoPaw) |
| **Message delivery guarantees** | OpenClaw, NanoBot, PicoClaw, Moltis, Hermes, CoPaw | Blank WhatsApp bubbles (#127948), Telegram stuck outbound (#126246), rich-messages vs. streaming exclusivity (#5516 NanoBot), Slack `FileSize=0` upload failure (#3338 PicoClaw), cron delivered-channel context (#1243 Moltis), WeChat thinking-process setting ignored (#7258 CoPaw) |
| **Subagent/task lifecycle** | OpenClaw, NanoBot, IronClaw, Hermes | Completion-loss on timeout/drain (#67777), background-mode receipts and healing sweeps (#7818 IronClaw, merged), non-blocking drains at turn exit (#5529 NanoBot), cron completion requiring persisted results (#93946 Hermes) |
| **Setup/provisioning ergonomics** | OpenClaw, NanoClaw, IronClaw, ZeroClaw | YAML config support (#45758), scriptable non-interactive install (NanoClaw setup driver #3485), OOBE suggestions drawer (IronClaw #7816), onboarding wizard memory setup (#16670 OpenClaw) |
| **Edge/worker federation** | PicoClaw, NanoClaw, NullClaw, IronClaw, ZeroClaw | Household edge mesh with signed receipts (#3345, #3538, #994, #7889, #10360) — five independent proposals in one week |
| **Web UI performance & UX** | PicoClaw, CoPaw, IronClaw, NanoBot | Input lag with long history (#3281), browser stutter in long sessions (#7285 CoPaw), voice-to-text composer (#7867 IronClaw), drag-and-drop session organization (#5389 NanoBot), unifiedSession title projection (#5527) |

---

## 5. Differentiation Analysis

| Project | Core Differentiator | Target Users | Architecture Signature |
|---|---|---|---|
| **OpenClaw** | The reference implementation; broadest channel and skill ecosystem | Production multi-agent gateway operators | Gateway + memory-core + Control UI; TypeScript |
| **Hermes Agent** | Desktop-centric with Bot Mode, cron, Kanban; strong Windows/macOS packaging | Desktop power users running scheduled/background agents | Desktop renderer + gateway; fast salvage-and-merge culture |
| **ZeroClaw** | Security-first with formal RFC governance; aggressively gated PRs | Security-conscious operators, multi-tenant installs | Rust/WASM; execution-tree budgets; wire-protocol-first design |
| **CoPaw / QwenPaw** | Alibaba/Qwen ecosystem integration; WeChat/QQ channels; large Chinese community | Chinese-market users on Aliyun/Kimi/Qwen models | Python-based; Agentscope dependency; console + desktop Tauri bundle |
| **IronClaw** | NEAR-adjacent; persistent sandbox epic; design-system maturity | Developers wanting CI-grade reliability + persistent workspaces | Rust; iron-proxy sandbox; durable notification Inbox |
| **NanoBot** | Lightweight, TUI-first, Telegram-optimized | Solo developers/hobbyists preferring terminal UX | Minimal core; rich TUI; worker-based tool scanning |
| **NanoClaw** | Skill/dial system with structured setup protocol | Power users automating via reusable skills | Skill-sync architecture; runner lease/fencing |
| **LobsterAI** | Artifact/library management + monetization analytics | Product builders, content creators | Electron renderer; plan model catalog; conversion attribution |
| **Moltis** | Cron/scheduled delivery with channel-context preservation | Ops users automating multi-channel workflows | Sandbox-backend abstraction (K8s, Coder, local) |
| **PicoClaw** | Sipeed-backed lightweight builds for constrained hardware | Embedded/hobbyist users on RISC-V/ARM | Lightweight worker orientation; nightly builds |
| **NullClaw** | Minimal Zig runtime with adapter vtables; extreme size/memory constraints | Systems programmers, mesh builders | Tiny runtime + RuntimeAdapter/Peripheral vtables; Docker/WASM adapters |
| **ZeptoClaw** | Dormant; no signals | — | — |

**Key architectural split:** the ecosystem divides between **single-binary minimalists** (NullClaw, NanoBot, PicoClaw) and **multi-service gateway/desktop platforms** (OpenClaw, Hermes, ZeroClaw, IronClaw). Rust is gaining ground (ZeroClaw, IronClaw) while Python remains strong in Chinese-ecosystem projects (CoPaw, LobsterAI).

---

## 6. Community Momentum & Maturity

**Tier 1 — Very high velocity (stabilization-heavy):**
- **OpenClaw** — Massive throughput but gated by maintainer review; beta validation is the community's full-time job right now.
- **Hermes Agent** — Rapid merge cadence with "salvage PR" practice (recovering useful fixes from stale PRs); high bug volume suggests broad real-world usage.
- **CoPaw** — Fastest release cycle in ecosystem (2 betas in days); triage is responsive but long-session performance issues remain unresolved — classic beta-stage profile.
- **ZeroClaw** — High issue/PR volume with unusually formal governance (RFC votes, REVISE, FND-003); moving deliberately toward v0.9.0.

**Tier 2 — High velocity (feature-forward):**
- **IronClaw** — Closing large epics (notification center, CI pipeline) while shipping background subagents; the most consistently *completing* project this window.
- **NanoClaw** — 16 merges in 24h with coherent themes (workspace correctness, composer deduplication); security issues are the main lag.
- **NanoBot** — Responsive and healthy; issues opened and fixed within the same window (find_files, subagent waiting).

**Tier 3 — Moderate / maintenance:**
- **LobsterAI** — Shipping steadily with low bug volume; the most "product-managed" profile.
- **Moltis** — Steady integration fixes; no drama.

**Tier 4 — Low activity / at risk:**
- **PicoClaw** — Critical MCP hang open since July 20, PRs labeled `[stale]` after 9 days; maintainer attention is the risk.
- **NullClaw** — One issue, zero PRs; awaiting first response on #994.
- **ZeptoClaw** — No activity; effectively dormant.

**Rapidly iterating vs. stabilizing:** CoPaw and LobsterAI are **iterating** (shipping releases); OpenClaw, Hermes, and ZeroClaw are **stabilizing** (holding releases for hardening milestones); IronClaw is **transitioning** from CI/internal infrastructure to user-facing feature delivery.

---

## 7. Trend Signals

1. **Memory architecture is the industry's #1 scaling bottleneck.** Across OpenClaw, ZeroClaw, CoPaw, NanoBot, and Hermes, memory-system complaints range from OOM kills (per-agent dreaming) to unbounded growth to cleanup-path crashes. Projects that solve *per-agent memory isolation + retention policy* first will win the multi-agent production market.

2. **MCP reliability is now table stakes, not a feature.** Five projects independently reported MCP lifecycle failures (restart recovery, hangs, OAuth, Windows stdio). As MCP becomes the universal tool bus, *fail-closed reconnection semantics* are the emerging requirement.

3. **Security boundaries are shifting from prompt-injection to credential isolation.** The strongest signal: OpenClaw's agent-requested credentials that the model never sees (#129670), NanoClaw's argv-secret exposure fix, ZeroClaw's credential-cache hardening, and NanoBot's restricted-shell fail-closed enforcement — all in one week.

4. **Household edge mesh is a convergent community proposal.** Five independent RFCs/issues propose federating idle PCs, SBCs, and NAS boxes into trust-verified compute meshes with signed receipts. This is the strongest *new* demand signal in the ecosystem — and it arrives just as "worker mode" and "remote edge workers" appear in IronClaw and NanoClaw PRs.

5. **Message-delivery guarantees remain the most fragile surface.** Blank bubbles, stuck outbound queues, lost subagent completions, ignored channel settings — delivery semantics are where production trust is won or lost. Expect a wave of "delivery receipt / at-least-once / durable outbox" features across all gateway projects.

6. **Maintainer review capacity is the universal gating factor.** Nearly every project shows the same pattern: high-quality community repros, root-cause analyses, and ready PRs sitting behind `needs-maintainer-review`. Projects that institutionalize review throughput (IronClaw's canonical preflight, Hermes' salvage-and-merge, ZeroClaw's RFC governance) are the ones closing work.

7. **Setup and provisioning ergonomics are becoming a competitive moat.** Scriptable installs (NanoClaw), OOBE improvements (IronClaw), onboarding wizard gaps (OpenClaw), and YAML config requests all point to the same need: *the next wave of users is less technical, and first-run experience determines retention.*

8. **WebUI is converging on a feature baseline.** Drag-and-drop session organization (NanoBot), voice-to-text (IronClaw), notification sounds, composer redesigns (OpenClaw), and performance fixes under long history (PicoClaw, CoPaw) — the terminal-first projects are shifting investment to browser surfaces, while the browser-first projects are fighting long-session performance.

---

*For AI agent developers, the actionable takeaway: build for memory isolation and MCP fail-closed recovery first; expect edge-mesh and signed-receipt requirements to arrive within 2–3 quarters; and assume your users run multi-agent production workloads where silent delivery loss is the cardinal sin.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-26

## 1. Today's Overview

NanoBot saw high activity in the last 24 hours: **5 open issues** (0 closed) and **24 updated PRs** (10 open, 14 closed/merged). No new releases were published. The project’s focus today was heavily on **Telegram fixes**, **TUI/WebUI polish**, **provider/tool stability**, and **exec/session lifecycle improvements**. A notable open security PR (`#5536`) signals maintainers are hardening restricted-shell execution, while two long-open PRs still carry `conflict` labels and may need review. Overall, the repository appears healthy and responsive, with multiple regressions and feature requests landing or moving forward quickly.

## 2. Releases

**None.** No new releases were published in this window, so there are no changelogs, breaking changes, or migration notes to report.

## 3. Project Progress

**14 PRs were closed/merged** in the last 24 hours. The visible closed/merged PRs from the top-20 list include:

- [#5541](https://github.com/HKUDS/nanobot/pull/5541) – **fix(telegram): attribute group messages to senders** — prefixes non-private Telegram messages with sender display name, fixes [#1091](https://github.com/HKUDS/nanobot/issues/1091).
- [#5540](https://github.com/HKUDS/nanobot/pull/5540) – **fix(provider): stabilize Codex prompt cache routing** — propagates stable session identity through fallback/image-retry paths.
- [#5538](https://github.com/HKUDS/nanobot/pull/5538) – **refactor(tui): clarify active composer actions** — clarifies `Enter` vs `Tab` behavior in the composer.
- [#5534](https://github.com/HKUDS/nanobot/pull/5534) – **feat(tui): autocomplete skill references** — adds `$skill-name` picker with keyboard navigation.
- [#5533](https://github.com/HKUDS/nanobot/pull/5533) – **fix(tools): keep find_files scans responsive** — worker-based scanning with budgeted `os.scandir` traversal.
- [#5529](https://github.com/HKUDS/nanobot/pull/5529) – **fix(agent): wait for background subagents only at turn exit** — keeps pending-message drains non-blocking, adds terminal rendezvous.
- [#5530](https://github.com/HKUDS/nanobot/pull/5530) – **style(tui): keep short transcripts and composer top-aligned** — improves vertical-space behavior in tall terminal panes.
- [#5525](https://github.com/HKUDS/nanobot/pull/5525) – **feat: add demand-driven document retrieval** — makes `grep` return bounded match snippets and extends PDF/DOCX/XLSX/PPTX search.
- [#5526](https://github.com/HKUDS/nanobot/pull/5526) – **fix(agent): wait for exec sessions without polling** — introduces `exec_session` with `until_exit`/`timeout_ms`.
- [#5389](https://github.com/HKUDS/nanobot/pull/5389) – **feat(webui): add drag-and-drop session organization** — enables reordering, grouping, and pane-based session layout.

These changes show forward momentum in **TUI usability, WebUI organization, tool performance, and agent lifecycle handling**.

## 4. Community Hot Topics

The most active issue conversations (by comment count / freshness) were:

- [#5505](https://github.com/HKUDS/nanobot/issues/5505) – **Add AnySearch as a web search provider** (3 comments)  
  The AnySearch team proposes a key-optional, anonymous-quota search integration. Underlying need: users want more lightweight, privacy-friendly search providers without mandatory API keys.

- [#5532](https://github.com/HKUDS/nanobot/issues/5532) – **Missing import of `mask_session_key` in autocompact.py** (1 comment)  
  User hit a runtime error while asking the agent to delete resources and clear all memory. This suggests memory-compaction workflows are actively used and currently broken.

- [#5516](https://github.com/HKUDS/nanobot/issues/5516) – **Telegram rich messages never render when streaming is enabled** (1 comment)  
  `rich_messages: true` and `streaming: true` are mutually exclusive today. A fix PR ([#5531](https://github.com/HKUDS/nanobot/pull/5531)) is open.

- [#5527](https://github.com/HKUDS/nanobot/issues/5527) – **WebUI sidebar titles stay "Untitled" under unifiedSession**  
  Zero comments yet, but paired with open fix PR [#5528](https://github.com/HKUDS/nanobot/pull/5528). This is a real UX mismatch between unified session storage and per-chat WebUI rendering.

## 5. Bugs & Stability

Ranked by severity:

1. **High — Restricted-shell sandbox enforcement**  
   [#5536](https://github.com/HKUDS/nanobot/pull/5536) – open `p1` fix: `ExecTool` should **fail closed** when a restricted shell lacks a sandbox. Application-level path checks are insufficient against symlinks, shell expansion, and command substitution. Fixes [#4072](https://github.com/HKUDS/nanobot/issues/4072).

2. **Medium — Runtime error from missing import in `autocompact.py`**  
   [#5532](https://github.com/HKUDS/nanobot/issues/5532) — `mask_session_key` is not imported, breaking memory-cleanup prompts. No fix PR yet.

3. **Medium — Telegram rich messages + streaming incompatibility**  
   [#5516](https://github.com/HKUDS/nanobot/issues/5516) — rich output is never rendered when streaming is enabled. Open fix PR: [#5531](https://github.com/HKUDS/nanobot/pull/5531).

4. **Medium — WebUI titles missing under `unifiedSession`**  
   [#5527](https://github.com/HKUDS/nanobot/issues/5527) — sidebar titles remain "Untitled" because titles are stored on a shared session. Open fix PR: [#5528](https://github.com/HKUDS/nanobot/pull/5528).

5. **Resolved / addressed today**  
   - [#5533](https://github.com/HKUDS/nanobot/pull/5533) — `find_files` responsiveness fix closed.  
   - [#5529](https://github.com/HKUDS/nanobot/pull/5529) — subagent waiting behavior fixed.  
   - [#5526](https://github.com/HKUDS/nanobot/pull/5526) — exec-session polling eliminated.  
   - [#5540](https://github.com/HKUDS/nanobot/pull/5540) — Codex prompt cache routing stabilized.

## 6. Feature Requests & Roadmap Signals

Strong roadmap signals came from both issues and PRs:

- **New web search providers**  
  [#5505](https://github.com/HKUDS/nanobot/issues/5505) requests AnySearch as a key-optional provider. [#5234](https://github.com/HKUDS/nanobot/pull/5234) proposes MST metasearch. Search-provider diversity is clearly an active direction.

- **WebUI notification sound**  
  [#5524](https://github.com/HKUDS/nanobot/issues/5524) asks for an opt-in "agent turn finished" chime. This is a small, likely candidate for a future WebUI release.

- **Session continuity and organization**  
  [#5537](https://github.com/HKUDS/nanobot/pull/5537) adds persistent `my(focus=...)` across turns. Combined with merged drag-and-drop session organization ([#5389](https://github.com/HKUDS/nanobot/pull/5389)), session management is evolving quickly.

- **TUI improvements**  
  Skill autocomplete ([#5534](https://github.com/HKUDS/nanobot/pull/5534)) and composer action clarity ([#5538](https://github.com/HKUDS/nanobot/pull/5538)) both landed, pointing toward continued TUI-first UX investment.

- **Document retrieval**  
  [#5525](https://github.com/HKUDS/nanobot/pull/5525) makes document retrieval demand-driven and supports PDF/DOCX/XLSX/PPTX search — a meaningful step toward richer RAG-style workflows.

**Likely next-version candidates:** AnySearch provider integration, WebUI notification sound, unifiedSession title projection, and Telegram rich-streaming fix.

## 7. User Feedback Summary

Real user pain points visible today:

- **Memory lifecycle actions are being used but can crash.** The failing prompt in [#5532](https://github.com/HKUDS/nanobot/issues/5532) asked the agent to delete resources/files and clear memory — a realistic heavy-cleanup use case.
- **Telegram users expect polished rich messages even with streaming enabled.** The current limitation forces a degraded ChatGPT-style HTML experience.
- **WebUI users with `unifiedSession: true` lose readable conversation titles**, making navigation harder.
- **Long-running agent tasks lack completion feedback** — users want an audible cue while waiting for tool/shell work to finish.
- **Search provider users want more choice and lower friction.** AnySearch’s key-optional anonymous quota is a direct answer to API-key fatigue.

No strongly negative sentiment was recorded; maintainers appear responsive, with several fix PRs opened immediately for newly reported issues.

## 8. Backlog Watch

The following open PRs have been waiting longest and may need maintainer attention:

- [#5152](https://github.com/HKUDS/nanobot/pull/5152) — **fix(subagent): mark partial completion results**  
  Opened **July 28**, still open, labeled `conflict`, `regression`. This could be blocking subagent-result correctness.

- [#5234](https://github.com/HKUDS/nanobot/pull/5234) — **feat(agent): integrate mst-python as a metasearch provider**  
  Opened **August 3**, labeled `conflict`, `p1`. Needs conflict resolution and review; search-provider integrations remain a hot topic.

Both PRs touch useful, user-facing functionality and have been open for weeks — they are the clearest items requiring maintainer or author action.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

## Today's Overview

As of 2026-08-26, Hermes Agent shows very high activity: 50 issues and 50 PRs were updated in the last 24 hours, with 40 issues open/active and 10 closed, plus 26 PRs open and 24 merged/closed. No new release was published in this window. Maintainers are merging fixes quickly, particularly around Windows update behavior, auth compatibility, and MCP/tool-search reliability. At the same time, several P1/P2 regressions, duplicate reports, and desktop/session-state bugs suggest the project is in a stabilization-heavy phase before its next release.

## Releases

No new releases were published in the last 24 hours. The latest release data is empty, so there are no changelog, migration, or breaking-change notes to report.

## Project Progress

Notable closed/merged PRs visible in the last 24 hours:

- [PR #95008](https://github.com/NousResearch/hermes-agent/pull/95008) — Windows auto-update no longer stalls ~11 minutes on CUA-driver interactive installer; salvages #94296 and addresses [#87703](https://github.com/NousResearch/hermes-agent/issues/87703).
- [PR #94296](https://github.com/NousResearch/hermes-agent/pull/94296) — Defers interactive CUA installs on Windows, keeping automatic updates non-interactive.
- [PR #92693](https://github.com/NousResearch/hermes-agent/pull/92693) — Fixes five tool-search deferral bugs: parallel-execution barrier, listing truncation, source indexing, and availability-cache staleness.
- [PR #84053](https://github.com/NousResearch/hermes-agent/pull/84053) — Omits `tool_choice` on max-iteration Codex/xAI summary requests, preventing provider 400 errors.
- [PR #83278](https://github.com/NousResearch/hermes-agent/pull/83278) and [PR #80581](https://github.com/NousResearch/hermes-agent/pull/80581) — Both make `hermes auth remove openai-codex` tolerate legacy Codex suppression data formats.
- [PR #82500](https://github.com/NousResearch/hermes-agent/pull/82500) — Isolates test fixtures from host credentials and source trees.

Several open PRs are moving toward merge, including mic-permission handling ([#95125](https://github.com/NousResearch/hermes-agent/pull/95125)), bots-roster locking ([#95126](https://github.com/NousResearch/hermes-agent/pull/95126)), subagent background-process noise control ([#95073](https://github.com/NousResearch/hermes-agent/pull/95073)), lazy desktop session-list refresh ([#95123](https://github.com/NousResearch/hermes-agent/pull/95123)), Slack event deduplication ([#95124](https://github.com/NousResearch/hermes-agent/pull/95124)), and durable Discord thread rename behavior ([#95120](https://github.com/NousResearch/hermes-agent/pull/95120)).

## Community Hot Topics

Most active issues by comment count:

- [#87697](https://github.com/NousResearch/hermes-agent/issues/87697) — 11 comments, P2, needs-repro: Hermes client cancels local Ollama LLM streams after ~1.5s during prompt evaluation, triggering an `<unused49>` token loop.
- [#16520](https://github.com/NousResearch/hermes-agent/issues/16520) — 10 comments, 2 👍, closed: `read_file`/`cat` truncate long lines with `...`, causing models to misjudge file content as corrupted.
- [#95003](https://github.com/NousResearch/hermes-agent/issues/95003) — 9 comments, 6 👍, P2: xAI rejects all requests because `tool_search` is reserved for the native server-side tool.
- [#95028](https://github.com/NousResearch/hermes-agent/issues/95028) — 9 comments, P3, needs-decision: architecture proposal claiming twelve related issues are one underlying defect and proposing a “Hermes Authority Execution Layer.”
- [#74973](https://github.com/NousResearch/hermes-agent/issues/74973) — 7 comments, P2: macOS `hermes update` exits 0 while leaving the gateway dead and unloaded from launchd.
- [#91911](https://github.com/NousResearch/hermes-agent/issues/91911) — 7 comments, P3, needs-decision: proposal to unify Bot Mode identity, capability, delivery, and cancellation in one control plane.

The reaction-weighted hot topic is clearly [#95003](https://github.com/NousResearch/hermes-agent/issues/95003), with 6 👍 in under a day. The underlying need across these threads is provider compatibility and fail-loud behavior: users are hitting silent cancellations, reserved-name conflicts, and update paths that report success while leaving the system broken.

## Bugs & Stability

Ranked by severity:

**P1 / Critical**

- [#94906](https://github.com/NousResearch/hermes-agent/issues/94906) — Windows native stdio MCP client discovers tools but every call fails with `MCP stdio subprocess ... has exited`. Duplicate report, P1.
- [PR #93946](https://github.com/NousResearch/hermes-agent/pull/93946) — P1 fix targeting cron completion integrity: cron runs can be stamped complete even when the terminal result was not persisted.

**P2 / High visibility**

- [#95003](https://github.com/NousResearch/hermes-agent/issues/95003) — xAI rejects all requests containing `tool_search`; Grok providers are unusable when Tool Search is configured.
- [#87697](https://github.com/NousResearch/hermes-agent/issues/87697) — Ollama-backed local streams canceled client-side after ~1.5s; needs-repro.
- [#95078](https://github.com/NousResearch/hermes-agent/issues/95078) — Nested Hermes CLI inherits stale `TERMINAL_CWD` instead of using explicit subprocess working directory.
- [#94859](https://github.com/NousResearch/hermes-agent/issues/94859) — Multiple stdio MCP servers intermittently fail immediately after gateway restart.
- [#95054](https://github.com/NousResearch/hermes-agent/issues/95054) — Ollama fallback entries silently resolve to `(None, None)` with no runtime diagnostic.
- [#90428](https://github.com/NousResearch/hermes-agent/issues/90428) — Desktop messages sent to a WS-detached session after reconnect are silently dropped. Closed, but signals fragility.
- [#72480](https://github.com/NousResearch/hermes-agent/issues/72480) — Desktop tool execution uses the wrong `HERMES_HOME` and does not load profile `.env` when switching profiles.
- [#79005](https://github.com/NousResearch/hermes-agent/issues/79005) — Desktop profile swap can route `session.create` to the wrong backend, causing cross-profile `state.db` pollution.
- [#90292](https://github.com/NousResearch/hermes-agent/issues/90292) — Linux desktop entry generated with non-runnable `Exec`; icon launch always fails.
- [#84678](https://github.com/NousResearch/hermes-agent/issues/84678) — Windows update progress card is born minimized on machines without Edge.

**P3 / Lower severity**

- [#90663](https://github.com/NousResearch/hermes-agent/issues/90663) — Ink TUI lowercases Shift+letter input in the prompt composer on Ghostty/macOS.
- [#40963](https://github.com/NousResearch/hermes-agent/issues/40963) — Model selection dropdown height is too constrained.

Several of these have fixes already merged or in flight: [#87703](https://github.com/NousResearch/hermes-agent/issues/87703) is addressed by [#95008](https://github.com/NousResearch/hermes-agent/pull/95008), and [#16520](https://github.com/NousResearch/hermes-agent/issues/16520) is labeled `sweeper:implemented-on-main`.

## Feature Requests & Roadmap Signals

The tracker contains several substantial architecture and product proposals:

- [#95028](https://github.com/NousResearch/hermes-agent/issues/95028) — Hermes Authority Execution Layer: argues twelve existing issues are one boundary/enforcement defect and proposes a unified architecture. Needs decision.
- [#91911](https://github.com/NousResearch/hermes-agent/issues/91911) — Unified Bot Mode control plane for identity, capability, delivery, and cancellation. Needs decision.
- [#94484](https://github.com/NousResearch/hermes-agent/issues/94484) — Cheap desktop backend boot and lean chat/event plane without removing the HTTP control plane. Needs decision.
- [#93382](https://github.com/NousResearch/hermes-agent/issues/93382) — Adaptive explanation policy for interactive learning artifacts.
- [#67619](https://github.com/NousResearch/hermes-agent/issues/67619) — Safe structured execution context for `quick_commands` with `type: exec`.
- [#68768](https://github.com/NousResearch/hermes-agent/issues/68768) — Configurable webhook signature and event-type headers per route.
- [#84000](https://github.com/NousResearch/hermes-agent/issues/84000) — Chrome Extension backend for shared visible browser control, Claude-in-Chrome style.
- [#88055](https://github.com/NousResearch/hermes-agent/issues/88055) — Back off repeated cron-failure deliveries and notify once on recovery; closed, likely merged or superseded.

Feature PRs in flight:

- [#93508](https://github.com/NousResearch/hermes-agent/pull/93508) — `hermes webapp`: serve the real Desktop renderer in authenticated browsers.
- [#93977](https://github.com/NousResearch/hermes-agent/pull/93977) — Trusted scheduled-run hooks for cron, with operator-owned `max_turns` caps.
- [#91093](https://github.com/NousResearch/hermes-agent/pull/91093) — Mandatory bead link on every kanban card.
- [#79159](https://github.com/NousResearch/hermes-agent/pull/79159) — Hindsight embedded memory inherits Hermes’ LLM via a loopback OpenAI-compatible bridge.

Based on the current salvage-and-merge cadence, the next Hermes release will likely include the Windows update fixes, tool-search/MCP reliability fixes, desktop session/roster/mic fixes, and the Slack/Discord delivery hardening PRs. The larger architecture proposals are unlikely to land until maintainers make decisions on the P3 `needs-decision` items.

## User Feedback Summary

User pain points in the last 24 hours cluster around silent failures and provider/desktop regressions:

- Local Ollama users report broken streaming after recent updates, with cancellation and token-loop behavior ([#87697](https://github.com/NousResearch/hermes-agent/issues/87697)).
- xAI/Grok users are blocked entirely when Tool Search is enabled ([#95003](https://github.com/NousResearch/hermes-agent/issues/95003)).
- Desktop users report repeated Bot Mode / cron pane failures, including “Cronjobs are unavailable until this agent appears in the roster” for every bot ([#94516](https://github.com/NousResearch/hermes-agent/issues/94516), [#94483](https://github.com/NousResearch/hermes-agent/issues/94483)).
- Session/profile state concerns remain prominent: WS-detached messages are silently dropped, profile swaps pollute `state.db`, and gateway switching leaks session IDs ([#90428](https://github.com/NousResearch/hermes-agent/issues/90428), [#79005](https://github.com/NousResearch/hermes-agent/issues/79005), [#93937](https://github.com/NousResearch/hermes-agent/issues/93937)).
- Windows users are affected by update hangs, hidden UAC prompts, and native MCP failures ([#87703](https://github.com/NousResearch/hermes-agent/issues/87703), [#94906](https://github.com/NousResearch/hermes-agent/issues/94906)).

There is also positive signal: maintainers are moving quickly, including “salvage” PRs that recover useful fixes from stale PRs. The fast closure of [#88055](https://github.com/NousResearch/hermes-agent/issues/88055) and the merged MCP/tool-search fix [#92693](https://github.com/NousResearch/hermes-agent/pull/92693) suggest the project is responsive, even though the bug volume is high.

## Backlog Watch

Items that appear to need maintainer attention:

- [#40963](https://github.com/NousResearch/hermes-agent/issues/40963) — Open since June 7: model selection dropdown has too-constrained height; minor UX but very old.
- [#64322](https://github.com/NousResearch/hermes-agent/issues/64322) — Open since July 14: tool-loop guardrail hard-stop silently halts tasks instead of allowing model recovery.
- [#67619](https://github.com/NousResearch/hermes-agent/issues/67619) — Open since July 19, needs-decision: safe structured execution context for quick commands.
- [#68768](https://github.com/NousResearch/hermes-agent/issues/68768) — Open since July 21, needs-decision: configurable webhook signature/event headers.
- [#72480](https://github.com/NousResearch/hermes-agent/issues/72480) — Open since July 27, P2: desktop tool environment uses wrong `HERMES_HOME` and skips profile `.env`.
- [#79005](https://github.com/NousResearch/hermes-agent/issues/79005) — Open since August 5, P2: desktop profile swap can route sessions to the wrong backend.
- [#79159](https://github.com/NousResearch/hermes-agent/pull/79159) — Open PR since August 5: Hindsight memory inheriting Hermes’ LLM.
- [#84000](https://github.com/NousResearch/hermes-agent/issues/84000) — Open since August 11: Chrome Extension backend for visible shared browser control.
- [#87671](https://github.com/NousResearch/hermes-agent/issues/87671) — Open since August 16: Kanban stop-nudge misfires inside delegated children, with 7 reported production incidents.
- [#87697](https://github.com/NousResearch/hermes-agent/issues/87697) — Open since August 16, needs-repro: Ollama stream cancellation after ~1.5s.
- [#90292](https://github.com/NousResearch/hermes-agent/issues/90292) — Open since August 19, needs-decision: Linux desktop entry generated with broken `Exec`.
- [#90428](https://github.com/NousResearch/hermes-agent/issues/90428) — Closed but a symptom of recurring session-state fragility; related duplicates continue to appear.
- [#91093](https://github.com/NousResearch/hermes-agent/pull/91093) — Open PR since August 20: mandatory bead link on kanban cards.
- [#93946](https://github.com/NousResearch/hermes-agent/pull/93946) — Open P1 PR since August 24: cron completion must require persisted terminal result.

The most urgent backlog items are the P2 desktop profile/session-state bugs ([#72480](https://github.com/NousResearch/hermes-agent/issues/72480), [#79005](https://github.com/NousResearch/hermes-agent/issues/79005)) and the P1 Windows MCP failure ([#94906](https://github.com/NousResearch/hermes-agent/issues/94906)).

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

## PicoClaw Project Digest — 2026-08-26

### 1. Today’s Overview
PicoClaw saw light but meaningful activity in the last 24 hours: 4 open issues and 1 open PR were updated, with no new releases and no merged/closed PRs. The current issue queue is dominated by bug reports around Web UI performance, MCP connection failures, and Slack media uploads, alongside one new feature proposal for lightweight edge deployment. Notably, several older issues and PRs are now marked `[stale]`, suggesting maintainer attention may be spread thin. Overall, the project is in a maintenance/triage phase rather than active feature development, with community-reported stability issues still awaiting resolution.

### 2. Releases
No new releases were published in the last 24 hours. The latest known project versions remain **PicoClaw 0.3.1** and the nightly builds referenced in issue reports.

### 3. Project Progress
- **Merged/closed PRs:** None in the last 24 hours.
- **Open PR under review:**
  - [PicoClaw PR #3340](https://github.com/sipeed/picoclaw/pull/3340) — `fix(slack): set FileSize on media upload params`  
    This PR directly addresses the Slack media upload bug reported in [#3338](https://github.com/sipeed/picoclaw/issues/3338). The fix sets the `FileSize` field in `slack.UploadFileParameters`, which is required by `slack-go v0.23.1` for `files.upload.v2`. It remains open and is marked `[stale]`.

No merged features or fixes advanced today.

### 4. Community Hot Topics
The most active discussions in the last 24 hours are both bug reports with 7 comments and 1 👍 each:

- [PicoClaw Issue #3281](https://github.com/sipeed/picoclaw/issues/3281) — **Web UI chat input is very laggy when history has a little bit long**  
  Users are experiencing significant input lag in the Web UI as conversation history grows. The underlying need is clear: the chat interface needs better rendering/virtualization or history management to remain responsive in long sessions.

- [PicoClaw Issue #3269](https://github.com/sipeed/picoclaw/issues/3269) — **MCP server connection failure causes agent loop to hang and chat interface to stop replying**  
  This is a high-impact reliability issue. When an MCP server connection fails, the agent loop hangs entirely, making the chat interface unresponsive. Users need graceful failure handling and timeout/retry logic for MCP connections.

Also updated but with lower engagement:

- [PicoClaw Issue #3338](https://github.com/sipeed/picoclaw/issues/3338) — Slack does not attach image media content (2 comments). The companion PR is [#3340](https://github.com/sipeed/picoclaw/pull/3340).

### 5. Bugs & Stability
All reported bugs remain open. Ranked by severity:

1. **Critical — Agent loop hangs on MCP connection failure**  
   [Issue #3269](https://github.com/sipeed/picoclaw/issues/3269)  
   If the MCP server connection fails, the agent loop hangs and the entire PicoClaw chat interface stops replying. This is a core availability bug affecting real usage. No fix PR exists yet.

2. **High — Slack media uploads always fail**  
   [Issue #3338](https://github.com/sipeed/picoclaw/issues/3338)  
   Slack image/media uploads are rejected because `FileSize` is not set, causing `file size cannot be 0` errors before any network call. A fix is proposed in [PR #3340](https://github.com/sipeed/picoclaw/pull/3340), but it has not been merged.

3. **Medium — Web UI input lag with long chat history**  
   [Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)  
   Input becomes very laggy once history builds up. This degrades UX but does not block functionality. No fix PR is linked yet.

All three issues were updated in the last 24 hours, and both #3281 and #3338 are marked `[stale]`.

### 6. Feature Requests & Roadmap Signals
The only new feature proposal is:

- [PicoClaw Issue #3345](https://github.com/sipeed/picoclaw/issues/3345) — **Proposal: lightweight PicoClaw worker mode for household edge compute**  
  The author suggests enabling PicoClaw to run as a lightweight worker on low-cost devices (RISC-V/ARM/MIPS boards, Raspberry Pis, old Android phones) with ~10–20 MB available memory, complementing a stronger PC. This signals community interest in distributed/edge deployment and resource-constrained environments.

**Likely next-version candidates:**
- The Slack media upload fix from [PR #3340](https://github.com/sipeed/picoclaw/pull/3340) is small, well-scoped, and directly fixes a reported regression, so it is a strong candidate for inclusion in the next release.
- The MCP hang issue [#3269](https://github.com/sipeed/picoclaw/issues/3269) is critical enough that a robustness fix may be prioritized, though no PR exists yet.
- The edge worker mode proposal is likely too large for an immediate version and may remain a roadmap/discussion item.

### 7. User Feedback Summary
Real user pain points from the last 24 hours:

- **Reliability concerns:** Users cannot rely on the chat interface if MCP connection failures cause a permanent hang until restart.
- **Slack integration is broken for media:** Users trying to share images via Slack hit a hard failure due to a missing field in the upload request.
- **Web UI performance degrades with history:** Long-running sessions become noticeably laggy, impairing the primary assistant experience.
- **Interest in lightweight deployment:** One user is actively proposing PicoClaw as a worker for household/edge devices, indicating desire for broader hardware support and distributed workflows.

Satisfaction appears mixed: the project is being actively tested on nightly builds and real integrations, but unresolved critical bugs and stale-labelled PRs may frustrate contributors.

### 8. Backlog Watch
The following items need maintainer attention most urgently:

- [Issue #3269](https://github.com/sipeed/picoclaw/issues/3269) — **MCP connection failure hang**  
  Open since 2026-07-20, still unresolved after over a month. This is the highest-severity open issue.

- [Issue #3281](https://github.com/sipeed/picoclaw/issues/3281) — **Web UI lag with long history**  
  Open since 2026-07-21 and now `[stale]`. Needs performance investigation or at least a maintainer response.

- [PR #3340](https://github.com/sipeed/picoclaw/pull/3340) — **Slack FileSize fix**  
  Open since 2026-08-17 and already `[stale]`. This small fix would resolve an active bug and should be reviewed/merged promptly.

- [Issue #3338](https://github.com/sipeed/picoclaw/issues/3338) — **Slack media upload bug**  
  Depends on PR #3340; also marked `[stale]`. Should be closed once the fix lands.

- [Issue #3345](https://github.com/sipeed/picoclaw/issues/3345) — **Edge worker mode proposal**  
  New as of 2026-08-25 with zero comments. A maintainer response would help validate whether this fits the project roadmap.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-26

## 1. Today's Overview

High activity in the nanocoai/nanoclaw repo: **50 PRs were updated in the last 24 hours** (34 open, 16 merged/closed), while **5 issues were updated**, all remaining open. No new releases were cut. Core-team work advanced around Slack handoffs, OpenCode workspace behavior, Codex composer deduplication, and agent instruction composition. The project looks healthy overall, but the open issue backlog contains several security- and upgrade-path concerns that will need maintainer triage soon.

## 2. Releases

No new releases in this window.

## 3. Project Progress

Closed/merged PRs observed in the snapshot:

- [nanocoai/nanoclaw PR #3544](https://github.com/nanocoai/nanoclaw/pull/3544) — **Closed:** Slack explicit room handoff tooling; a same-titled PR [#3545](https://github.com/nanocoai/nanoclaw/pull/3545) remains open, likely an updated revision.
- [nanocoai/nanoclaw PR #3540](https://github.com/nanocoai/nanoclaw/pull/3540) — **Closed:** OpenCode agent sessions now run in the agent workspace instead of the runner’s inherited `WORKDIR`, fixing project-document discovery.
- [nanocoai/nanoclaw PR #3539](https://github.com/nanocoai/nanoclaw/pull/3539) / [nanocoai/nanoclaw PR #3537](https://github.com/nanocoai/nanoclaw/pull/3537) — **Closed:** Codex composer deduplication; Codex now uses the trunk shared composer instead of its own drifted copy.
- [nanocoai/nanoclaw PR #3536](https://github.com/nanocoai/nanoclaw/pull/3536) — **Closed:** Compose logic now inlines every instruction source into one project document, avoiding Claude Code `@`-import security-gate failures.
- [nanocoai/nanoclaw PR #2656](https://github.com/nanocoai/nanoclaw/pull/2656) — **Closed:** `mnemon setup` moved to `index.ts main()` so the host’s ENTRYPOINT override no longer prevents hook registration.

These fixes target agent instruction delivery, workspace correctness, and setup reliability.

## 4. Community Hot Topics

No issue comments or reaction counts are present in the snapshot, so “hot” here is based on recency, scope, and likely user impact:

- [nanocoai/nanoclaw Issue #3543](https://github.com/nanocoai/nanoclaw/issues/3543) — Unquoted `owner_email` interpolation in `add-dial` / `add-dial-tool`. This is both a functional bug and a potential shell-injection risk.
- [nanocoai/nanoclaw Issue #3538](https://github.com/nanocoai/nanoclaw/issues/3538) — Proposal to use isolated NanoClaw containers as opt-in household edge workers, tapping into idle PCs, NAS boxes, and home servers.
- [nanocoai/nanoclaw PR #3528](https://github.com/nanocoai/nanoclaw/pull/3528) / [nanocoai/nanoclaw PR #3521](https://github.com/nanocoai/nanoclaw/pull/3521) — Runner durability work: lease-id claimants, restart-overlap protection, and session claims as the fencing authority.
- [nanocoai/nanoclaw PR #3485](https://github.com/nanocoai/nanoclaw/pull/3485) — Structured setup driver protocol (`nanoclaw.driver.v1`), reflecting a strong need for scriptable, non-interactive installation.

Underlying needs: safer shell handling, multi-host deployment, crash-safe session ownership, and automation-friendly setup.

## 5. Bugs & Stability

Ranked by severity:

1. **High — Shell injection / unquoted email interpolation**  
   [nanocoai/nanoclaw Issue #3543](https://github.com/nanocoai/nanoclaw/issues/3543)  
   `{{owner_email}}` reaches `bash -c` unquoted in both Dial skills; apostrophe emails break sign-in and shell metacharacters pass validation. No fix PR is visible yet.

2. **High — Setup secrets exposed via argv**  
   [nanocoai/nanoclaw PR #3484](https://github.com/nanocoai/nanoclaw/pull/3484)  
   Pasted OAuth tokens/API keys go onto child-process command lines. Open fix PR: [#3484](https://github.com/nanocoai/nanoclaw/pull/3484).

3. **High — Update skill refresh can overwrite local adapters**  
   [nanocoai/nanoclaw Issue #3529](https://github.com/nanocoai/nanoclaw/issues/3529)  
   The updater assumes every channel import came from a skill, so locally written adapters can fail validation or be overwritten; no opt-out exists. Related update-path fix: [PR #3452](https://github.com/nanocoai/nanoclaw/pull/3452).

4. **High/Medium — Per-agent tool scoping misses future agents**  
   [nanocoai/nanoclaw Issue #3532](https://github.com/nanocoai/nanoclaw/issues/3532)  
   Groups created after `/add-dial-tool` scoping still receive the tool by default. No fix PR is visible.

5. **Medium — `add-vercel` leaves stale per-session skill copies**  
   [nanocoai/nanoclaw Issue #3535](https://github.com/nanocoai/nanoclaw/issues/3535)  
   Rsynced skill copies block spawn-time symlink sync and can pin groups to outdated skills.

6. **Medium — Uninstall TOCTOU / ownership failure**  
   [nanocoai/nanoclaw PR #3483](https://github.com/nanocoai/nanoclaw/pull/3483)  
   Files are deleted after the prompt scan without re-checking targets. Open fix PR: [#3483](https://github.com/nanocoai/nanoclaw/pull/3483).

7. **Medium — `container_status` drift at startup adoption**  
   [nanocoai/nanoclaw PR #3542](https://github.com/nanocoai/nanoclaw/pull/3542)  
   Open fix PR: [#3542](https://github.com/nanocoai/nanoclaw/pull/3542).

8. **Low/Medium — Blind agent-scope prompt**  
   [nanocoai/nanoclaw PR #3525](https://github.com/nanocoai/nanoclaw/pull/3525)  
   Wizard cannot echo typed agent IDs in a nested `nc:run effect:step`. Open fix PR: [#3525](https://github.com/nanocoai/nanoclaw/pull/3525).

## 6. Feature Requests & Roadmap Signals

Likely near-term additions based on open PRs:

- [nanocoai/nanoclaw PR #3485](https://github.com/nanocoai/nanoclaw/pull/3485) / [#3486](https://github.com/nanocoai/nanoclaw/pull/3486) / [#3487](https://github.com/nanocoai/nanoclaw/pull/3487) — Structured setup driver protocol, preseed catalog, and timezone preseed. Strong signal that programmatic provisioning is on the roadmap.
- [nanocoai/nanoclaw PR #3482](https://github.com/nanocoai/nanoclaw/pull/3482) — Structured host health endpoint for single-call status checks.
- [nanocoai/nanoclaw PR #3298](https://github.com/nanocoai/nanoclaw/pull/3298) — Local web chat channel, solving the “no external account needed” first-run problem.
- [nanocoai/nanoclaw PR #3528](https://github.com/nanocoai/nanoclaw/pull/3528) / [#3521](https://github.com/nanocoai/nanoclaw/pull/3521) — Runner lease IDs and session-claim fencing; these form the basis of durable host behavior.
- [nanocoai/nanoclaw Issue #3538](https://github.com/nanocoai/nanoclaw/issues/3538) — Household edge workers. This is more exploratory but could become a longer-term multi-host deployment direction.
- [nanocoai/nanoclaw PR #2431](https://github.com/nanocoai/nanoclaw/pull/2431) — Conditional Slack thread policy, allowing DMs to be top-level while channels remain threaded.

The setup automation cluster and runner durability PRs are the most likely candidates for a next release.

## 7. User Feedback Summary

- Advanced users are hitting real skill-lifecycle pain: update overwrites, stale skill copies, and future-agent scoping gaps all come from the same reporter ([#3529](https://github.com/nanocoai/nanoclaw/issues/3529), [#3532](https://github.com/nanocoai/nanoclaw/issues/3532), [#3535](https://github.com/nanocoai/nanoclaw/issues/3535), [#3543](https://github.com/nanocoai/nanoclaw/issues/3543)).
- One user explicitly wants to run NanoClaw on idle household hardware instead of buying GPUs or paying for cloud workers ([#3538](https://github.com/nanocoai/nanoclaw/issues/3538)).
- Slack users need different threading behavior for DMs vs. channels, a real workflow-level UX request ([#2431](https://github.com/nanocoai/nanoclaw/pull/2431)).
- Setup and provisioning pain is prominent: non-scriptable wizard, secrets leaking into argv, and lack of health/status introspection ([#3485](https://github.com/nanocoai/nanoclaw/pull/3485), [#3484](https://github.com/nanocoai/nanoclaw/pull/3484), [#3482](https://github.com/nanocoai/nanoclaw/pull/3482)).

No explicit positive/negative sentiment is available, but the issue quality is precise and implementation-focused, indicating engaged power users. The main dissatisfaction centers on upgrade reliability and security edge cases.

## 8. Backlog Watch

- [nanocoai/nanoclaw PR #2431](https://github.com/nanocoai/nanoclaw/pull/2431) — **Conditional Slack thread policy**, open since 2026-05-12 and updated in this window. This is the longest-open item in the snapshot and still needs a maintainer decision.
- [nanocoai/nanoclaw PR #3298](https://github.com/nanocoai/nanoclaw/pull/3298) — **Local web chat channel**, open since 2026-08-17 and updated now. It is a significant user-facing feature that deserves review or explicit roadmap placement.
- [nanocoai/nanoclaw PR #3452](https://github.com/nanocoai/nanoclaw/pull/3452) — **Update command output buffer fix**, open since 2026-08-22, likely relevant to update-reliability complaints.
- The setup PR cluster ([#3482–#3487](https://github.com/nanocoai/nanoclaw/pull/3482)) has been open since 2026-08-23 and would benefit from batch review, since several pieces are designed to work together.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-26

## 1. Today's Overview

NullClaw is in a low-activity period: 1 issue updated in the last 24 hours, 0 pull requests, and 0 releases. The single update is a newly filed feature-oriented issue (#994) proposing a household edge mesh built on existing NullClaw primitives, which suggests user interest in higher-level orchestration capabilities rather than bug reports or urgent maintenance. No PR or release activity indicates core development is either paused, in progress on unmerged branches, or in a quiet phase. Overall project health appears stable — no regressions or breakages surfaced, but community engagement is minimal today. Maintainers may want to acknowledge the new issue to keep momentum.

## 2. Releases

No new releases were published in the last 24 hours. There are no changelog entries, breaking changes, or migration notes to report.

## 3. Project Progress

No pull requests were merged, closed, or even updated today (0 open, 0 merged/closed). There is no verifiable feature advancement, bugfix, or refactor to report from public activity. The project's development cadence appears slow at this snapshot, with the only signal of forward motion being the community-proposed design in issue #994.

## 4. Community Hot Topics

The only active item is:

- **[#994 — "Household edge mesh using RuntimeAdapter workers and signed receipts"](https://github.com/nullclaw/nullclaw/issues/994)** (open, created 2026-08-25, updated 2026-08-25, 0 comments, 0 👍)

While it currently has zero comments/reactions, the issue is notable for what it reveals about how users conceive of NullClaw. The author explicitly calls out NullClaw's "unusually good primitives for a household edge mesh": the tiny Zig runtime, `RuntimeAdapter` and `Peripheral` vtables, Docker/WASM adapters, hardware discovery, tunnels, channels, tools, and strict size/memory goals. The underlying need is clear: operators with multiple idle PCs/laptops want to federate them into a private, trust-verified compute mesh at home, and they believe NullClaw's architecture is uniquely positioned to support it with low overhead. The mention of "signed receipts" signals a requirement for verifiable proof of work/computation across untrusted nodes — a distributed-trust mechanism not evidently present today.

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported in the last 24 hours. Stability signals are clean: 0 closed issues, 0 PRs referencing fixes, and no error-related discussion in the open issue. No severity ranking or fix-PR tracking is needed at this time.

## 6. Feature Requests & Roadmap Signals

Issue #994 is effectively a substantial feature/design proposal and the strongest roadmap signal this week. It requests, implicitly, the following capabilities:

- First-class **edge mesh orchestration** across household devices (idle PCs, laptops, likely SBCs).
- **Trust and verification** via signed receipts for work executed by heterogeneous nodes (WASM/Docker adapters).
- Tight integration with existing primitives (tunnels, channels, hardware discovery) rather than a separate subsystem.

Prediction: if maintainers engage, the next minor release could introduce mesh-networking conveniences on top of `RuntimeAdapter` (e.g., node discovery handshakes, receipt signing/verification helpers), or at minimum a documented pattern/example for building edge meshes. The issue's alignment with NullClaw's explicit "strict size/memory goals" makes it a plausible design target rather than a scope-creep outlier.

## 7. User Feedback Summary

The lone issue provides qualitative user feedback: NullClaw is perceived as having excellent low-level building blocks (runtime, adapters, discovery, tunnels) but lacks an out-of-the-box story for multi-device mesh use cases. The user's framing — "many operators own several idle PCs, laptops, An…" (likely "and…" devices) — suggests a real, common pain point: idle hardware underutilization, with users wanting a lightweight, self-hosted alternative to cloud fleets. There is no expressed dissatisfaction with stability or performance; the tone is constructive and opportunity-focused. Satisfaction is implicit in the author's praise of the existing primitives, but the absence of responses means broader sentiment cannot be measured yet.

## 8. Backlog Watch

No long-unanswered issues or PRs currently require maintainer attention. The only open item, #994, was created yesterday (2026-08-25) and is still within a normal response window. However, given today's complete lack of maintainer activity (0 PR updates, no comments), the issue is at risk of entering the "awaiting first response" state — a timely acknowledgment would prevent it from becoming a stale item on the backlog.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-26

## 1. Today's Overview

IronClaw saw a highly active 24-hour window: **39 issues** were updated (35 open, 4 closed) and **25 PRs** were touched (13 open, 12 merged/closed), with **no new releases** published. The majority of merged work landed in CI infrastructure — the nextest pipeline (#7817), canonical preflight (#7809), and PR/queue convergence (#7819) — plus the long-running notification-center refactor that retired the legacy approval fallback (#7846). Concurrently, new bug reports surfaced around Telegram device linking, agent-loop hangs, and log retrieval stalls, alongside a wave of WebUI-centered feature requests. Overall project health looks strong: core maintainers are closing out large epics while steadily addressing user-facing friction, though several medium-severity bugs remain without fix PRs.

## 2. Releases

**No new releases** were published in the last 24 hours. The most recent release activity remains unlisted; the active `v1.4.0` milestone is tracked via open epics like the persistent sandbox (#7732) and Design System Phases 2–3 (#7781).

## 3. Project Progress

**Merged/closed PRs today (12 total):**

- [#7894](https://github.com/nearai/ironclaw/pull/7894) — `ci: reduce required scope checkout transfer` (CI optimization via partial-clone filters, depth-1 checkout)
- [#7816](https://github.com/nearai/ironclaw/pull/7816) — `feat(webui): add refresh and connect entries to the OOBE suggestion drawer` (frontend half of #7815, behind `oobe_suggestions` flag)
- [#7861](https://github.com/nearai/ironclaw/pull/7861) — `fix(extensions): restore device-link guidance on the install/activate paths`
- [#7820](https://github.com/nearai/ironclaw/pull/7820) — `test: scope-isolation suite consolidation probe` (T2 measurement-gated follow-up)
- [#7809](https://github.com/nearai/ironclaw/pull/7809) — `ci: canonical preflight` — single gate list, worktree-safe hooks, self-printing REPRO
- [#7819](https://github.com/nearai/ironclaw/pull/7819) — `ci: PR/queue check convergence` — closes #7800 (planner drift guard, default-features clippy on PRs)
- [#7846](https://github.com/nearai/ironclaw/pull/7846) — `refactor(notifications): retire legacy approval fallback` — durable Inbox is now the exclusive notification source
- [#7817](https://github.com/nearai/ironclaw/pull/7817) — `ci: nextest test pipeline, full-failure signal, PR unthrottle` — closes #7799
- [#7818](https://github.com/nearai/ironclaw/pull/7818) — `feat(subagent): background mode` — receipt spawns, per-child delivery, activation, healing sweeps (slices 2b+2c)

**Issues closed:** [#7799](https://github.com/nearai/ironclaw/issues/7799) (CI expedite T2), [#7038](https://github.com/nearai/ironclaw/issues/7038) (Design System Phase 1, superseded), [#7687](https://github.com/nearai/ironclaw/issues/7687) (notification-center epic), [#7706](https://github.com/nearai/ironclaw/issues/7706) (remove approval compatibility fallback).

**Key themes:** CI reliability/speed, durable notification inbox completion, device-link guidance restoration, OOBE suggestions, and background subagents.

## 4. Community Hot Topics

Most-commented issues:

- [#7732](https://github.com/nearai/ironclaw/issues/7732) — **Epic: Persistent per-user sandbox with iron-proxy** (9 comments). The most active discussion; deferred loop executors. Signals strong demand for persistent user workspaces over per-command container churn.
- [#7799](https://github.com/nearai/ironclaw/issues/7799) — **CI expedite T2** (4 comments). Now closed via the merged nextest pipeline PR #7817.
- [#7038](https://github.com/nearai/ironclaw/issues/7038) — **Design System Phase 1** (3 comments). Closed as re-scoped/superseded by #7781 and #7782.
- [#7862](https://github.com/nearai/ironclaw/issues/7862) — **Device link fails with generic error** (3 comments). Telegram linking pain point, triaged alongside #7853.
- [#7891](https://github.com/nearai/ironclaw/issues/7891) — **perf: unprojected capability payloads + blind 24 KiB head-slice** (2 comments). 14.3s of inference on just two emails — a model-cost and latency red flag.
- [#7781](https://github.com/nearai/ironclaw/issues/7781) — **Design System Phases 2–3 epic** (2 comments).
- [#7853](https://github.com/nearai/ironclaw/issues/7853) — **Telegram setup incomplete for personal account linking** (2 comments).

**Underlying needs:** persistent per-user sandboxing is the most-watched architectural item; Telegram personal-account linking is a recurring onboarding blocker; agent-turn performance predictability is drawing user attention.

## 5. Bugs & Stability

Ranked by severity:

1. **[#7888](https://github.com/nearai/ironclaw/issues/7888) — Getting logs hangs indefinitely** on two confirmed instances. High impact (core debugging path broken); no fix PR yet.
2. **[#7892](https://github.com/nearai/ironclaw/issues/7892) — Deferred tool found 15x, never invoked; 123s run with no terminating guard.** Model stuck repeating 4 distinct calls; wasted spend and timeouts. No fix PR yet.
3. **[#7891](https://github.com/nearai/ironclaw/issues/7891) — 49,152 bytes of raw MIME headers pushed into prompt unasked; 19.7s turn of which 19.2s was inference.** Medium-high performance regression; no fix PR yet.
4. **[#7862](https://github.com/nearai/ironclaw/issues/7862) — Device link fails with generic error when `telegram_api_id`/`api_hash` unconfigured.** Partially addressed by merged PR #7861; error messaging improvement still needed.
5. **[#7853](https://github.com/nearai/ironclaw/issues/7853) — Telegram offers personal account linking but cannot complete it.** The agent self-reports "no available tool"; #7861 fixes install/activate paths; follow-up [#7887](https://github.com/nearai/ironclaw/issues/7887) split out for the extension lookup path.
6. **[#7887](https://github.com/nearai/ironclaw/issues/7887) — Extension lookup path improvises device-link setup instructions.** Reproduced live on the #7861 preview; still open.

**Open fix PRs:** [#7884](https://github.com/nearai/ironclaw/pull/7884) (wall-clock occupancy cap to unlock stuck threads); [#7883](https://github.com/nearai/ironclaw/pull/7883) (loading shell for Notification Center, addressing #7880).

## 6. Feature Requests & Roadmap Signals

- **[#7895](https://github.com/nearai/ironclaw/issues/7895) — Personality (agent.md) editor in Settings UI.** Direct user request; strong next-version candidate for WebUI.
- **[#7867](https://github.com/nearai/ironclaw/issues/7867) — Voice-to-text in WebUI composer.** Epic + roadmap-tagged; user notes Slack/Telegram already support voice.
- **[#7871](https://github.com/nearai/ironclaw/issues/7871) — Epic: Slack-to-console bridge + rich interactive Slack UX.** Complements the longer-lived Slack channel-routed agents epic (#4625).
- **[#7889](https://github.com/nearai/ironclaw/issues/7889) — RFC: opt-in remote edge workers for scheduler/orchestrator.** Extends the worker pool beyond a single host.
- **[#7893](https://github.com/nearai/ironclaw/issues/7893) — Per-automation lessons file (`ironclaw.memory.automation_lessons_set`)** with fire-time injection — memory persistence for scheduled runs.
- **[#7885](https://github.com/nearai/ironclaw/issues/7885) / [PR #7886](https://github.com/nearai/ironclaw/pull/7886) — OpenSSF Scorecard workflow.** Security posture improvement from a new contributor.
- **[#7872–#7876](https://github.com/nearai/ironclaw/issues/7872)** — Notification-center expansion: automation pre-run failures, blocked runs, auth-required notifications, and producer lifecycle hardening. Appears to be an actively planned workstream following the Inbox completion.

**Prediction:** WebUI personality editing, voice-to-text, and the Slack-to-console bridge are the strongest candidates for the next minor release; the notification-center expansion series is likely to land incrementally across upcoming patches.

## 7. User Feedback Summary

- **Personality setup friction** — Users explicitly request a Settings section to edit `agent.md`; current setup described as difficult (#7895).
- **Telegram onboarding confusion** — Personal account linking is offered but fails with generic errors; repeated reports (#7853, #7862, #7887) indicate an onboarding-blocking experience, though #7861 restores the guidance paths.
- **Log retrieval broken** — "Getting logs" hangs indefinitely on multiple instances; confirmed by two users (#7888).
- **Voice input demand** — WebUI composer is keyboard-only while Slack and Telegram already allow voice; users expect parity (#7867).
- **Slack as a control surface** — Users want durable continuity into the IronClaw console, visible run metadata, and quick follow-up actions, not just chat transport (#7871).
- **Design-system consistency** — Ongoing migration of legacy panels/controls to shared components (#7878, #7879 with PRs #7881, #7882) demonstrates quality-focused internal polish.

## 8. Backlog Watch

- **[#4625](https://github.com/nearai/ironclaw/issues/4625) — Slack channel-routed personal and team agents.** Open since 2026-06-09 with only 1 comment; roadmap epic awaiting a champion.
- **[#7732](https://github.com/nearai/ironclaw/issues/7732) — Persistent per-user sandbox epic.** Most-commented issue (9), tagged `v1.4.0`, but no implementation PR open yet.
- **[PR #7491](https://github.com/nearai/ironclaw/pull/7491) — omp core-tool contract + engines + benchmark arm.** Large XL PR open since 2026-08-11 (slices 1–4); needs review capacity.
- **[PR #7516](https://github.com/nearai/ironclaw/pull/7516) — Operator surface for IronHub agent link.** Open since 2026-08-12, XL scope, from a new contributor; needs maintainer attention.
- **[PR #7737](https://github.com/nearai/ironclaw/pull/7737) — Fix Slack setup docs drift.** Open since 2026-08-19; medium-sized docs fix covering widened scopes (`reactions:write`, `im:write`) and full admin field list.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-26

## 1. Today's Overview

LobsterAI shows healthy, release-active momentum: **2 releases** shipped within days (`2026.8.25`, `2026.8.21`), and **9 PRs were merged/closed** in the last 24 hours alongside **2 open PRs**. Activity is concentrated on the library/artifacts area, settings/model catalog UI, analytics, and UX fixes. Issue volume is very low (only 1 issue), indicating no major public bug or support crisis. Overall, the project is shipping steadily with a mix of feature work, polish fixes, and dependency hygiene.

## 2. Releases

### [LobsterAI 2026.8.25](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.8.25)
Highlights from the changelog:
- `feat: library` via [#2513](https://github.com/netease-youdao/LobsterAI/pull/2513)
- `feat(library)`: enhanced cross-platform thumbnails and local artifact lifecycle via [#2524](https://github.com/netease-youdao/LobsterAI/pull/2524)
- `feat(library)`: improved local artifact preview and operation experience

No explicit breaking changes or migration notes are visible in the provided changelog snippet.

### [LobsterAI 2026.8.21](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.8.21)
Highlights from the changelog:
- `feat(dsh)`: added usage analytics for enable toggle and workbench open via [#2515](https://github.com/netease-youdao/LobsterAI/pull/2515)
- `feat`: updated `dsh` to 0.1.1-rc.1 via [#2516](https://github.com/netease-youdao/LobsterAI/pull/2516)
- `refactor(dsh)`: moved usage analytics handling

No breaking changes or migration notes were included in the provided snippet.

## 3. Project Progress

Nine PRs were merged/closed in the last 24 hours:

- **Settings / model catalog**
  - [#2530](https://github.com/netease-youdao/LobsterAI/pull/2530) `feat(settings): add plan model catalog` — Added a plan model tab, pricing catalog for text/image/video models, categorized model cards, and diagnostics.
  - [#2535](https://github.com/netease-youdao/LobsterAI/pull/2535) `[area: renderer] feat(settings): add plan model catalog` — Same feature area; closed alongside #2530.

- **Library / artifacts fixes**
  - [#2531](https://github.com/netease-youdao/LobsterAI/pull/2531) `fix(library): fix background refresh flickering for local artifacts` — Split first-load/background-refresh/pagination states, added batch lookup by artifact ID, and preserved filter/scroll position during refresh.
  - [#2533](https://github.com/netease-youdao/LobsterAI/pull/2533) `fix(artifacts): distinguish web page vs local service previews` — Split HTML web pages and local services into separate display types with distinct icons/labels and updated tests/docs.

- **UX polish**
  - [#2532](https://github.com/netease-youdao/LobsterAI/pull/2532) `fix(sidebar): fade out login promo tip` — Auth promo tip now fades after 5 seconds; timers cleaned up on auth state change.

- **Analytics / attribution**
  - [#2529](https://github.com/netease-youdao/LobsterAI/pull/2529) `feat(analytics): improve library event tracking and publish conversion attribution` — Added impressions, filtering, search, preview, favorite, and refresh events; added 7-day last-touch attribution from publish CTA to paid subscription state.

- **Release / dependency cleanup**
  - [#2534](https://github.com/netease-youdao/LobsterAI/pull/2534) `Release/2026.8.20` — Release branch merging across renderer, docs, main, cowork, IM, and artifacts.
  - [#1275](https://github.com/netease-youdao/LobsterAI/pull/1275) and [#1276](https://github.com/netease-youdao/LobsterAI/pull/1276) — `dependabot` CI action bumps, closed as stale.

## 4. Community Hot Topics

The only issue updated in the last 24h is also the only community signal:

- [#2536 [OPEN] 微信群已满人 / "WeChat group is full"](https://github.com/netease-youdao/LobsterAI/issues/2536)
  - Author: MurrayHubert
  - Created/Updated: 2026-08-25
  - Comments: 1
  - The user is asking for an additional WeChat community group because the existing one has reached capacity. This indicates strong community demand and a need for more official support/community channels.

No PRs had tracked comment/reaction activity in the provided data.

## 5. Bugs & Stability

No new bug reports were filed in the issue tracker, but several fixes were merged/closed in PRs:

| Severity | Bug / Fix | Status |
|---|---|---|
| Medium | Local artifact background refresh caused whole-page skeleton flicker, affecting UX and data stability. Fixed via [#2531](https://github.com/netease-youdao/LobsterAI/pull/2531). | Fixed |
| Medium | HTML web previews and local-service previews were not visually/functionally distinguished. Fixed via [#2533](https://github.com/netease-youdao/LobsterAI/pull/2533). | Fixed |
| Low | Login promo tip did not auto-dismiss, creating persistent UI noise. Fixed via [#2532](https://github.com/netease-youdao/LobsterAI/pull/2532). | Fixed |

No crashes, regressions, or release-blocking stability issues were reported.

## 6. Feature Requests & Roadmap Signals

- **Session fork for cowork sessions**
  - [#1159 [OPEN] `feat(cowork): add session fork`](https://github.com/netease-youdao/LobsterAI/pull/1159) has been open since March 31, 2026 and still awaits maintainer action. The feature would let users branch off a copy of any cowork session from the detail view menu (`⋯ → 创建分支会话`). This is a strong roadmap signal for **cowork/session power users**.

- **Paid plan model catalog**
  - PRs [#2530](https://github.com/netease-youdao/LobsterAI/pull/2530) and [#2535](https://github.com/netease-youdao/LobsterAI/pull/2535) show an active move toward **plan/pricing model catalogs** in settings, suggesting upcoming subscription/plan UI changes.

- **Publish conversion analytics**
  - [#2529](https://github.com/netease-youdao/LobsterAI/pull/2529) adds attribution from publish CTA to paid subscription, indicating product investment in **conversion tracking and monetization funnels**.

- **Community capacity**
  - [#2536](https://github.com/netease-youdao/LobsterAI/issues/2536) is an indirect product/community roadmap signal: LobsterAI’s user base is growing faster than official support channels.

Prediction: if maintained backlog is cleared, **session fork** (#1159) is a likely next community-visible cowork feature; model catalog and analytics work appear already in the shipped build trajectory.

## 7. User Feedback Summary

- **Positive growth pressure**: The only actionable user feedback is from [#2536](https://github.com/netease-youdao/LobsterAI/issues/2536), a request for another WeChat group because the current one is full. This is a positive sign of community growth, but also exposes a support-channel bottleneck.
- **UX pain points are being addressed internally**: The merged fix PRs around refresh flicker, preview clarity, and promo-tip dismissal suggest the team is responding to real user friction, even if no explicit issue threads were opened.
- **No explicit complaints or satisfaction scores** appeared in the last 24h. Overall sentiment appears neutral-to-positive.

## 8. Backlog Watch

- [#1159 [OPEN] `feat(cowork): add session fork`](https://github.com/netease-youdao/LobsterAI/pull/1159)
  - Open since 2026-03-31, stale, and updated 2026-08-25. This is a meaningful product feature that has not received maintainer closure or merge. Needs review or explicit decision.

- [#1277 [OPEN] `chore(deps-dev): bump the electron group`](https://github.com/netease-youdao/LobsterAI/pull/1277)
  - Dependabot PR open since 2026-04-02, updated 2026-08-25. Bumps Electron from 40.2.1 to 43.4.1 and electron-builder. Long open dependency updates can carry security/stability implications and deserve maintainer attention.

- Stale CI dependency PRs [#1275](https://github.com/netease-youdao/LobsterAI/pull/1275) and [#1276](https://github.com/netease-youdao/LobsterAI/pull/1276) were closed in this window, so the stale-bot process is working, but the dependency backlog remains non-trivial.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-26

## Today's Overview

Moltis showed moderate maintenance activity over the last 24 hours, with 2 issues and 5 pull requests updated. One issue was closed and one remains active, while 4 PRs are still open and 1 PR was closed. No new releases were published, indicating the project is in a development-and-fix cycle rather than a release phase. The open PRs cluster around infrastructure/sandboxing, tool schema correctness, and OAuth/MCP integration, while the closed items suggest ongoing stability fixes.

## Releases

No new releases were published in the last 24 hours. There are no latest releases to report.

## Project Progress

One pull request was closed/merged in this window:

- [PR #1243 — fix(cron): preserve delivered channel context](https://github.com/moltis-org/moltis/pull/1243) — Closes follow-up question context loss for scheduled messages delivered to WhatsApp or other channels. The final delivered text is now appended as an assistant message to the destination conversation, preserving context while keeping cron execution isolated.

Also closed today:

- [Issue #1224 — [Bug]: Tools stop working in shared Slack channels](https://github.com/moltis-org/moltis/issues/1224) — Closed as resolved or no longer reproducible.

## Community Hot Topics

The most commented/reactive item is:

- [Issue #1118 — [Feature]: Add Kubernetes-native sandbox backend with runtimeClassName support](https://github.com/moltis-org/moltis/issues/1118) — 2 comments, 1 👍. This feature requests ephemeral Kubernetes pods for agent command execution, with support for `runtimeClassName` to enable VM-level isolation via Kata Containers, gVisor, or any OCI-compatible runtime.

The underlying need is clear: Moltis users want a production-grade, multi-tenant sandboxing path for untrusted LLM-generated commands. The request aligns with the open [PR #1199 — Add Coder remote workspace sandbox support](https://github.com/moltis-org/moltis/pull/1199), which also expands sandbox backend options. Both signals point to a broader roadmap push toward more flexible and secure remote execution environments.

## Bugs & Stability

Two bug-related items were active in the last 24 hours:

- [Issue #1224 — Tools stop working in shared Slack channels](https://github.com/moltis-org/moltis/issues/1224) — **Closed**. Severity: moderate (integration bug affecting Slack multi-channel workflows), but no longer open.
- [PR #1243 — fix(cron): preserve delivered channel context](https://github.com/moltis-org/moltis/pull/1243) — **Closed** fix for context loss in scheduled message follow-ups.

Two additional fix-oriented PRs remain open and may address stability/compatibility issues:

- [PR #1232 — fix(tools): make object schemas OpenAI-safe](https://github.com/moltis-org/moltis/pull/1232) — Fixes strict OpenAI tool schemas causing Codex to send null/empty values instead of requested data. This is a correctness issue for OpenAI-compatible clients.
- [PR #1245 — fix(tools): validate Brave search parameters](https://github.com/moltis-org/moltis/pull/1245) — Prevents invalid Brave Search API parameters and normalizes provider-specific values.

## Feature Requests & Roadmap Signals

The strongest roadmap signals are around sandboxing and remote execution:

- [Issue #1118 — Kubernetes-native sandbox backend with runtimeClassName](https://github.com/moltis-org/moltis/issues/1118) — Likely a candidate for a future release, especially if the maintainers are consolidating sandbox backends.
- [PR #1199 — Coder remote workspace sandbox support](https://github.com/moltis-org/moltis/pull/1199) — Suggests Moltis is actively extending sandbox options beyond local containers into remote/cloud workspaces.

Other open PRs indicate near-term polish items:

- [PR #1245 — validate Brave search parameters](https://github.com/moltis-org/moltis/pull/1245)
- [PR #1244 — Fix Fastmail MCP OAuth scope registration](https://github.com/moltis-org/moltis/pull/1244)
- [PR #1232 — make object schemas OpenAI-safe](https://github.com/moltis-org/moltis/pull/1232)

These are likely candidates for the next patch or minor release.

## User Feedback Summary

User activity reflects a mix of integration pain points and infrastructure desires:

- Shared Slack channel tool failures caused enough friction to open a bug report, though it was closed.
- Scheduled message follow-ups losing context in WhatsApp/other channels was identified and fixed in [PR #1243](https://github.com/moltis-org/moltis/pull/1243).
- OpenAI-compatible strict schema handling is a pain point, especially for Codex users, as seen in [PR #1232](https://github.com/moltis-org/moltis/pull/1232).
- MCP OAuth scope registration issues affect Fastmail users, addressed in [PR #1244](https://github.com/moltis-org/moltis/pull/1244).
- The continued interest in [Kubernetes sandboxing](https://github.com/moltis-org/moltis/issues/1118) and [Coder workspace support](https://github.com/moltis-org/moltis/pull/1199) suggests users are scaling beyond local development environments and need secure, ephemeral remote execution.

Overall, the feedback signals that Moltis is being used in real integration environments where compatibility with external APIs, messaging platforms, and existing infrastructure is critical.

## Backlog Watch

- [Issue #1118 — Kubernetes-native sandbox backend with runtimeClassName](https://github.com/moltis-org/moltis/issues/1118) — Created 2026-06-12, last updated 2026-08-25. This feature request has been open for over two months with only 2 comments and 1 reaction. Given the related Coder sandbox PR, it deserves maintainer attention to confirm roadmap priority and possibly align implementation effort.

- [PR #1199 — Add Coder remote workspace sandbox support](https://github.com/moltis-org/moltis/pull/1199) — Open since 2026-08-15, last updated 2026-08-25. Still open after 10 days; likely needs review or iteration from maintainers.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-26

> Note: This digest aggregates data from the `agentscope-ai/QwenPaw` repository, tracked as CoPaw.

---

## 1. Today's Overview

CoPaw/QwenPaw is in a very active beta cycle: **33 issues and 50 PRs were updated in the last 24 hours**, with **14 issues closed** and **29 PRs merged/closed**. A new beta, **v2.1.1-beta.3**, was released today. The project is clearly processing a high volume of incoming bug reports and long-running contributor PRs, but the overall health is mixed: maintainers are highly responsive, yet several serious stability and performance issues remain open — especially around long conversations, MCP resource handling, and Windows packaging. The release cadence remains fast, suggesting active feature development alongside stability triage.

---

## 2. Releases

### [v2.1.1-beta.3](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.1-beta.3)

The release notes are partially truncated in the data, but the visible changes include:

- `chore(console)`: pin `@agentscope-ai/chat` to `1.1.72` — likely a dependency stability fix.
- `docs(loop-engineering)`: fix `PluginAPI` casing to `PluginApi`.
- `test(integration)`: expand integration test coverage (details truncated).

No breaking changes or migration notes were provided in the available release data.

---

## 3. Project Progress

The following PRs were closed/merged or otherwise updated to a closed state today:

- **#7276** — `chore(deps): bumping version of agentscope to 2.0.7`  
  [agentscope-ai/QwenPaw PR #7276](https://github.com/agentscope-ai/QwenPaw/pull/7276)
- **#7300** — `Docs: update scroll context manager blog`  
  [agentscope-ai/QwenPaw PR #7300](https://github.com/agentscope-ai/QwenPaw/pull/7300)
- Several long-running "Under Review" PRs were also closed today:
  - **#2773** — self-evolution skill / self-improving agent engine  
    [PR #2773](https://github.com/agentscope-ai/QwenPaw/pull/2773)
  - **#5414** — decouple skill SOP and judgement rules  
    [PR #5414](https://github.com/agentscope-ai/QwenPaw/pull/5414)
  - **#1228** — new `read_media` tool for image/video/audio processing  
    [PR #1228](https://github.com/agentscope-ai/QwenPaw/pull/1228)
  - **#1525** — isolate invalid persisted cron schedules  
    [PR #1525](https://github.com/agentscope-ai/QwenPaw/pull/1525)
  - **#4881** — add MiniMax M3 to built-in models  
    [PR #4881](https://github.com/agentscope-ai/QwenPaw/pull/4881)
  - **#2304** — treat `404` from `models.list` as a successful connection check  
    [PR #2304](https://github.com/agentscope-ai/QwenPaw/pull/2304)
  - **#1552** — add `default_headers` support for custom providers  
    [PR #1552](https://github.com/agentscope-ai/QwenPaw/pull/1552)

Note: The data does not confirm whether all of these were merged vs. closed without merge.

Active PRs advancing features today include:

- **#7299** — `fix(console): reject conflicting chat payloads`  
  [PR #7299](https://github.com/agentscope-ai/QwenPaw/pull/7299)
- **#7294** — optional image resizing by pixel limit  
  [PR #7294](https://github.com/agentscope-ai/QwenPaw/pull/7294)
- **#7163** — session-level thinking modes and model management  
  [PR #7163](https://github.com/agentscope-ai/QwenPaw/pull/7163)
- **#7277** — refresh Aliyun and Kimi model catalogs  
  [PR #7277](https://github.com/agentscope-ai/QwenPaw/pull/7277)
- **#7190** — `qwenpaw-data` PyPI runtime path + docker-compose demo  
  [PR #7190](https://github.com/agentscope-ai/QwenPaw/pull/7190)

---

## 4. Community Hot Topics

The most active issues by comment count today:

- **[#338 — [Feature]: 建议添加webhook功能](https://github.com/agentscope-ai/QwenPaw/issues/338)**  
  9 comments · 1 👍  
  User wants a webhook interface: send messages to CoPaw, get a key, then poll/callback for responses. Long-standing request (created March 2026).

- **[#7258 — [Bug]: 微信频道的不“显示思考过程”设置无效](https://github.com/agentscope-ai/QwenPaw/issues/7258)**  
  6 comments  
  WeChat channel ignores the "show thinking process" setting and still outputs reasoning.

- **[#6524 — [Bug]: MCP 后端重启后客户端无法自动恢复](https://github.com/agentscope-ai/QwenPaw/issues/6524)**  
  6 comments  
  After an MCP server restart, QwenPaw reuses stale `mcp-session-id` and requires manual `list mcp` to reconnect.

- **[#5720 — [Bug]: Qwen Paw v1.1.12.post2 内存泄漏反馈](https://github.com/agentscope-ai/QwenPaw/issues/5720)**  
  5 comments  
  Detailed memory-leak analysis: orphaned async tasks and unreclaimed HTTP sessions.

- **[#6810 — Windows 安装/更新在覆盖文件前应终止所有占用安装目录的进程](https://github.com/agentscope-ai/QwenPaw/issues/6810)**  
  5 comments  
  NSIS installer fails due to locked files (browser extension NM host lock).

- **[#6273 — [Bug]: Unify task tracking and same-session concurrency semantics](https://github.com/agentscope-ai/QwenPaw/issues/6273)**  
  4 comments  
  Different execution entry points serialize work or ignore payloads inconsistently.

- **[#7261 — Runaway SSE serialization loop after agent-to-agent run](https://github.com/agentscope-ai/QwenPaw/issues/7261)**  
  4 comments  
  100% CPU, unbounded memory growth, fully unresponsive server. Closed, but no fix PR was visible in the top PR list.

**Underlying needs:** Users are pushing for external integrations (webhooks), better channel-specific settings, more robust MCP session lifecycle management, and improved Windows update/packaging behavior. Performance and memory stability remain the loudest concerns.

---

## 5. Bugs & Stability

Ranked roughly by severity:

| Severity | Issue | Summary | Status / Fix |
|---|---|---|---|
| **Critical** | [#7261](https://github.com/agentscope-ai/QwenPaw/issues/7261) | Runaway SSE serialization loop after agent-to-agent run; 100% CPU, memory grows unboundedly | Closed; no fix PR identified |
| **High** | [#7285](https://github.com/agentscope-ai/QwenPaw/issues/7285) | Long conversations cause severe browser/computer stutter after 1–2 min of generation | Open |
| **High** | [#7288](https://github.com/agentscope-ai/QwenPaw/issues/7288) | Large MCP results bypass scroll compaction and overflow model context | Open |
| **High** | [#7296](https://github.com/agentscope-ai/QwenPaw/issues/7296) | OpenAI Responses multi-turn fails with `Referenced reasoning item ... not found or has expired` on stateless upstreams | Open |
| **High** | [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) | Desktop Tauri bundle ships OpenSSL 3.0.x-era TLS stack; carrier DPI resets handshakes | Open; suggests Python 3.13 bump |
| **Medium** | [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) | MCP client cannot auto-recover after backend restart | Open |
| **Medium** | [#7218](https://github.com/agentscope-ai/QwenPaw/issues/7218) | `peer closed connection without sending complete message body` on long inference | Open |
| **Medium** | [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) | Windows installer fails when files are locked by running processes | Open |
| **Medium** | [#5720](https://github.com/agentscope-ai/QwenPaw/issues/5720) | Memory leak from async task and HTTP session accumulation | Closed; root-cause analysis provided |
| **Medium** | [#7291](https://github.com/agentscope-ai/QwenPaw/issues/7291) | `qwenpaw-creator` on Windows 11 fails pulling example projects | Open |
| **Medium** | [#7258](https://github.com/agentscope-ai/QwenPaw/issues/7258) | WeChat channel ignores "show thinking process" disabled setting | Open |
| **Low** | [#7282](https://github.com/agentscope-ai/QwenPaw/issues/7282) | Markdown lists render with excessive vertical spacing | Open |
| **Low** | [#7266](https://github.com/agentscope-ai/QwenPaw/issues/7266) | subAgent task searches wrong default folder instead of project folder | Open |

**Related fix PRs:** No direct fix PR for the high-severity issues appears in today's top-20 PR list. However, **#7299** targets a closely related concurrency/payload bug in `POST /api/console/chat`, and **#7264** improves channel contract checks for portability/completeness.

---

## 6. Feature Requests & Roadmap Signals

Notable user-requested features from today's issue activity:

- **[#338 — Webhook support](https://github.com/agentscope-ai/QwenPaw/issues/338)**  
  External apps could send messages to CoPaw, receive a key, and poll/query for responses. Likely valuable for automation/API use cases.

- **[#7182 — Workspace-scoped Skill preload policy](https://github.com/agentscope-ai/QwenPaw/issues/7182)**  
  Add `on_demand` vs `preload` skill policies per workspace to avoid rediscovery overhead.

- **[#7013 — Unified tool panel / web preview / interactive terminal for Chat](https://github.com/agentscope-ai/QwenPaw/issues/7013)**  
  Suggests a "workbench" for files, diffs, web services, and terminal output. Closed, but conceptually aligns with agent-development workflow needs.

- **[#7196 — Option to collapse thinking process by default](https://github.com/agentscope-ai/QwenPaw/issues/7196)**  
  A popular complaint about visual noise. Closed; may already be in progress via **#7163** (session-level thinking modes).

- **[#7263 — Task completion notification via orange activity tab](https://github.com/agentscope-ai/QwenPaw/issues/7263)**  
  Small UX enhancement for background task visibility.

- **[#7280 — Auto-clear completed background tasks](https://github.com/agentscope-ai/QwenPaw/issues/7280)**  
  Users want a setting to remove completed tasks automatically.

- **[#7279 — Model "choose among options" should show clickable popup instead of text input](https://github.com/agentscope-ai/QwenPaw/issues/7279)**  
  UX request to replace type-based selection with clickable choices.

- **[#7287 — Zero-intrusion "skin gateway" for theming](https://github.com/agentscope-ai/QwenPaw/issues/7287)**  
  A community-authored proposal for non-invasive skinning/customization.

**Likely candidates for next releases:** session-level thinking controls (**#7163**), image resizing by pixel limit (**#7294**), model catalog refreshes (**#7277**), and possibly webhook support if maintainers prioritize automation integrations.

---

## 7. User Feedback Summary

Real user pain points visible today:

- **Performance degradation in long sessions** is a recurring theme (#7285, #7129, #7261). Users report browser stutter, high CPU, and even full system unresponsiveness.
- **Memory leaks / resource accumulation** continue to worry users (#5720, #7261).
- **MCP lifecycle reliability** is a major pain point: stale sessions, manual reconnection, and context overflow (#6524, #7288).
- **Windows packaging/installer reliability** is poor for some users (#6810, #7291).
- **Channel-specific behavior** (WeChat, QQ) still has rough edges: thinking process settings ignored, memory loss after restart (#7258, #7297).
- **UI/UX feedback is active and constructive**: users want fewer text inputs, less visual noise, cleaner task lists, and better naming (#7256, #7279, #7280, #7282).
- **Satisfaction**: Many issues are being triaged and closed quickly, and users are contributing detailed root-cause analyses, which indicates a healthy, engaged community. However, repeated performance complaints suggest the beta is still not production-ready for heavy sessions.

---

## 8. Backlog Watch

Issues and PRs that appear to need maintainer attention due to long age or open status:

- **[#338 — Webhook feature request](https://github.com/agentscope-ai/QwenPaw/issues/338)**  
  Open since **2026-03-02**, 9 comments, 1 👍. A long-standing feature request with clear API design suggestions.

- **[#2773 — Self-evolution skill PR](https://github.com/agentscope-ai/QwenPaw/pull/2773)**  
  Open since **2026-04-01**, marked Under Review, now closed. Needs final disposition.

- **[#1228 — `read_media` tool PR](https://github.com/agentscope-ai/QwenPaw/pull/1228)**  
  Open since **2026-03-11**, first-time contributor, closed today but had been stale for months.

- **[#1525 — Cron schedule isolation PR](https://github.com/agentscope-ai/QwenPaw/pull/1525)**  
  Open since **2026-03-15**.

- **[#1552 — Custom provider `default_headers` PR](https://github.com/agentscope-ai/QwenPaw/pull/1552)**  
  Open since **2026-03-16**.

- **[#2304 — Treat models.list 404 as success PR](https://github.com/agentscope-ai/QwenPaw/pull/2304)**  
  Open since **2026-03-25**.

- **[#5414 — Decouple skill SOP and judgement rules PR](https://github.com/agentscope-ai/QwenPaw/pull/5414)**  
  Open since **2026-06-23**.

- **[#6399 — Reranker UI config panel PR](https://github.com/agentscope-ai/QwenPaw/pull/6399)**  
  Open since **2026-07-23**, still Under Review.

- **[#7119 — Security fix: master key file permissions](https://github.com/agentscope-ai/QwenPaw/pull/7119)**  
  Open since **2026-08-18**. Security-relevant; deserves review priority.

These older items accumulating without clear merge/close decisions suggest the maintainers may be focusing on beta release velocity over backlog cleanup — but several of them, especially #7119 and #338, are highly actionable.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-26

## 1. Today's Overview

ZeroClaw saw a high-volume, security-heavy day: 50 issues and 50 PRs were updated in the last 24 hours. Issue churn skewed toward open/active work (38 open vs. 12 closed), with a large share of RFCs, governance trackers, and S0/S1 security bugs. New PRs concentrate on hardening — credential-cache fixes, symlink-race prevention, skill HTTP egress bounds, and execution-tree budget enforcement — plus a wave of fresh RFCs (edge mesh, MCP caching, telemetry pilot). No release was cut; activity is converging on the v0.9.0 breaking-change milestone. The main bottleneck is maintainer review: a cluster of high-risk PRs is held behind `do-not-merge` or `needs-maintainer-review` gates.

## 2. Releases

No new releases in the last 24 hours. Active milestone in flight: v0.9.0 (auth, security, gateway, and breaking-change queue — tracked in [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)).

## 3. Project Progress

One PR was merged/closed in the window (not individually identified in the top-20 set). Issue closures show concrete fix progress:

- **S0 workspace_dir fix landed:** [#9206](https://github.com/zeroclaw-labs/zeroclaw/issues/9206) — agent cron jobs intermittently resolving `workspace_dir` to `/` is **closed**.
- **Voice Wake transcription fixed:** [#9663](https://github.com/zeroclaw-labs/zeroclaw/issues/9663) — now binds to the owning agent's transcription provider.
- **Cron CLI/API payload mismatch fixed:** [#10257](https://github.com/zeroclaw-labs/zeroclaw/issues/10257) — `cron update --command` no longer writes an unused column on agent jobs.
- **ZeroCode TUI bugs closed:** file-explorer search navigation ([#10058](https://github.com/zeroclaw-labs/zeroclaw/issues/10058)) and streamed turns confusing small local models ([#8999](https://github.com/zeroclaw-labs/zeroclaw/issues/8999)).
- **CI/infra fixes:** MSRV system-dependency timeout ([#10042](https://github.com/zeroclaw-labs/zeroclaw/issues/10042)), `floor_char_boundary` std consolidation ([#10271](https://github.com/zeroclaw-labs/zeroclaw/issues/10271)), withheld-capability notice delivery ([#9769](https://github.com/zeroclaw-labs/zeroclaw/issues/9769)).

New capability advances in open PRs: Mattermost approval prompts ([#10358](https://github.com/zeroclaw-labs/zeroclaw/pull/10358)), AnySearch web-search provider ([#10356](https://github.com/zeroclaw-labs/zeroclaw/pull/10356)), execution-tree iteration budget enforcement ([#10351](https://github.com/zeroclaw-labs/zeroclaw/pull/10351)), shell profile exposure in runtime status ([#10354](https://github.com/zeroclaw-labs/zeroclaw/pull/10354)), and Git channel in official dist artifacts ([#10363](https://github.com/zeroclaw-labs/zeroclaw/pull/10363)).

## 4. Community Hot Topics

- **#6808 — RFC: Work Lanes, Board Automation, and Label Cleanup** (24 comments) — [link](https://github.com/zeroclaw-labs/zeroclaw/issues/6808). Ratified governance RFC; the community is co-designing maintainer workflow automation to reduce manual routing overhead.
- **#8692 — Maintainer decision queue for RFCs** (14) — [link](https://github.com/zeroclaw-labs/zeroclaw/issues/8692). Reflects demand for transparent, faster RFC disposition.
- **#9103 — RFC: separate authoritative memory storage from enrichment connectors** (14) — [link](https://github.com/zeroclaw-labs/zeroclaw/issues/9103). High-risk architecture boundary; maintainer-takeover revision is in progress after a REVISE vote.
- **#8396 — RFC: wire protocol first-class in provider construction** (12) — [link](https://github.com/zeroclaw-labs/zeroclaw/issues/8396). Ratified-shape governance per FND-003; heavy architecture interest.
- **#9965 — Harden runtime-written executable test fixtures** (9) — [link](https://github.com/zeroclaw-labs/zeroclaw/issues/9965). Investment in flaky-test reduction under the parallel runtime gate.
- **#8132 — Rust/WASM web UI before React/Vite migration** (9 comments, 1 👍) — [link](https://github.com/zeroclaw-labs/zeroclaw/issues/8132). Community interest in eliminating Node.js from the build/runtime.

Underlying need: users want clearer governance, faster maintainer decisions, and architectural direction (memory architecture, wire protocol, WASM web) before committing to migration paths.

## 5. Bugs & Stability

Ranked by severity:

- **S0 — Cron tools not scoped to owning agent:** [#9947](https://github.com/zeroclaw-labs/zeroclaw/issues/9947) — any agent holding cron tools can read/trigger/modify/delete **another agent's** jobs by ID on multi-agent installs. Open, accepted, in-progress; **no fix PR yet**.
- **S0 — Cron `workspace_dir` → `/`:** [#9206](https://github.com/zeroclaw-labs/zeroclaw/issues/9206) — CLOSED (fixed).
- **S1 — Tool error detail discarded:** [#10357](https://github.com/zeroclaw-labs/zeroclaw/issues/10357) — agents only receive a bare status like "HTTP 400" instead of the detailed error body. Fix PR available: [#10364](https://github.com/zeroclaw-labs/zeroclaw/pull/10364).
- **S2 — Bounded delegate resolves wrong filesystem:** [#9872](https://github.com/zeroclaw-labs/zeroclaw/issues/9872) — delegated agent writes to the delegator's workspace, violating sandbox boundaries. Accepted; no fix PR yet.
- **S2 — ZeroCode health label misalignment (FR/ES):** [#10103](https://github.com/zeroclaw-labs/zeroclaw/issues/10103) — low risk, good first issue.

Stability/CI: Windows test measurement is being introduced advis-only via [#10350](https://github.com/zeroclaw-labs/zeroclaw/pull/10350); stale IPC cleanup test stabilized in draft PR [#10368](https://github.com/zeroclaw-labs/zeroclaw/pull/10368).

## 6. Feature Requests & Roadmap Signals

Strong signals for v0.9.0 and beyond:

- **Execution-tree iteration budgets** ([#9323](https://github.com/zeroclaw-labs/zeroclaw/issues/9323)) — accepted; implementation PR [#10351](https://github.com/zeroclaw-labs/zeroclaw/pull/10351) under independent review. Strong next-release candidate.
- **Multi-session gateway web chat** ([#7543](https://github.com/zeroclaw-labs/zeroclaw/issues/7543)) — in progress; session sidebar with new/switch/rename/delete.
- **Windows/macOS CI coverage** ([#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461)) — measurement job landed; making Windows required is a separate decision.
- **Web/TypeScript CI gate** ([#10306](https://github.com/zeroclaw-labs/zeroclaw/issues/10306)) — accepted; will stop bare `tsc` from printing 75 misleading errors.
- **Git Channel in Docker/dist artifacts** ([#10138](https://github.com/zeroclaw-labs/zeroclaw/issues/10138); PR [#10363](https://github.com/zeroclaw-labs/zeroclaw/pull/10363)).
- **Live tool-registry refresh** ([#10297](https://github.com/zeroclaw-labs/zeroclaw/issues/10297)) — enable/disable built-in tools without daemon restart; likely 0.9.x.
- **New RFCs:** household edge mesh with signed receipts ([#10360](https://github.com/zeroclaw-labs/zeroclaw/issues/10360)), shared MCP-registry caching for gateway/channels ([#10346](https://github.com/zeroclaw-labs/zeroclaw/issues/10346)), bounded telemetry pilot tracker ([#10340](https://github.com/zeroclaw-labs/zeroclaw/issues/10340)).
- **Rust/WASM web UI** ([#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)) — long-running evaluation; would remove Node.js from the stack.

## 7. User Feedback Summary

- **Multi-agent security pain:** the cron cross-tenant access bug ([#9947](https://github.com/zeroclaw-labs/zeroclaw/issues/9947)) is the loudest operator concern; per-agent scoping is urgently expected.
- **Local-model UX friction:** ZeroCode's streamed turns confused Ollama/llama3.2 users ([#8999](https://github.com/zeroclaw-labs/zeroclaw/issues/8999), closed) — small-model-friendliness is a recurring theme.
- **Internationalization polish:** French/Spanish dashboard misalignment ([#10103](https://github.com/zeroclaw-labs/zeroclaw/issues/10103)) shows active non-English users reporting UI nits.
- **Packaging completeness:** users want the Git channel compiled into official Docker images ([#10138](https://github.com/zeroclaw-labs/zeroclaw/issues/10138)).
- **Web stack direction:** support for dropping Node.js via Rust/WASM is visible on [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132); the React/Vite migration is being challenged.
- **Provider reliability:** multiple PRs target actionable provider failures — Anthropic terminal-response classification ([#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447)), reliable-provider cause surfacing ([#10234](https://github.com/zeroclaw-labs/zeroclaw/pull/10234)), Copilot credential-cache hardening ([#10370](https://github.com/zeroclaw-labs/zeroclaw/pull/10370)).

## 8. Backlog Watch

Items needing maintainer or author attention:

- **#8132 — Rust/WASM web UI evaluation** ([issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)) — open since Jun 22, `needs-author-action`, 1 👍.
- **#9109 — Native Hailo-Ollama provider** ([PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)) — open since Jul 17, `do-not-merge`, XL, awaiting maintainer review.
- **#9447 — Anthropic incomplete terminal responses** ([PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9447)) — open since Jul 27, `needs-author-action`, XL.
- **#10142 — ZeroRelay secure transport with native mTLS** ([PR](https://github.com/zeroclaw-labs/zeroclaw/pull/10142)) — `needs-author-action`, XL, supersedes #9080.
- **#10246 — Expose configured channels to RPC sessions** ([PR](https://github.com/zeroclaw-labs/zeroclaw/pull/10246)) — `needs-author-action`, XL.
- **#9935 — vi constraint unknown-type handling** ([PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9935)) — open since Aug 12, `do-not-merge`, XL, security-sensitive.
- **#10370 — Copilot credential cache hardening** ([PR](https://github.com/zeroclaw-labs/zeroclaw/pull/10370)) — new, `do-not-merge` + `needs-maintainer-review`; high-risk credential persistence change.

Several items are blocked on author action rather than maintainer review; the `do-not-merge` cluster indicates maintainers are deliberately gating risky changes behind head-CI and independent review.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*