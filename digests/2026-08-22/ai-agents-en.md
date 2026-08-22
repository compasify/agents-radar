# OpenClaw Ecosystem Digest 2026-08-22

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-21 23:13 UTC

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

# OpenClaw Project Digest — 2026-08-22

## 1. Today's Overview

OpenClaw remains highly active, but maintainer capacity is a clear bottleneck: 500 issues and 500 PRs were updated in the last 24 hours, with 491 issues still open/active and 386 PRs still open. No release was published in this window. On the positive side, 114 PRs moved to merged/closed status during the period. The most urgent signal is a P0 SQLite corruption regression on the latest beta (`2026.8.1-beta.2`) that has recurred multiple times, plus a backlog of P1 regressions around auth, OAuth refresh, and process/resource leaks. Meanwhile, the project is actively advancing a large RFC 0029 "Control Model" series (CM1–CM5) across the gateway and Control UI.

- Issues updated: 500 (open/active: 491, closed: 9)
- PRs updated: 500 (open: 386, merged/closed: 114)
- New releases: 0

## 2. Releases

None in the last 24 hours.

The most relevant release-adjacent activity is the open release-validation issue for [v2026.8.1-beta.2 #125626](https://github.com/openclaw/openclaw/issues/125626), which still has 18 comments and is awaiting maintainer/product validation.

## 3. Project Progress

114 PRs reached merged/closed status in the last 24 hours. From the highly active PR set, the following closed PRs are particularly notable:

- [[CLOSED] fix(models): keep Claude CLI OAuth available in Control UI #125471](https://github.com/openclaw/openclaw/pull/125471) — addresses Claude CLI OAuth losing refresh ownership after a Gateway restart and contradictory provider rows.
- [[CLOSED] feat(security): require acknowledgement for install policy warnings #116489](https://github.com/openclaw/openclaw/pull/116489) — adds `warn` support to `security.installPolicy`, requiring explicit operator acknowledgement for suspicious plugin/skill installs.
- [[CLOSED] fix(gateway): keep conversation delivery within agent bindings #126424](https://github.com/openclaw/openclaw/pull/126424) — fixes multi-agent conversation delivery escaping configured agent bindings.

Several important PRs remain open and show forward progress:

- **RFC 0029 Control Model series** submitted by `giodl73-repo`, all open and large:
  - [CM1: Control Model session foundation #127670](https://github.com/openclaw/openclaw/pull/127670)
  - [CM2: add Control Model conversations #127671](https://github.com/openclaw/openclaw/pull/127671)
  - [CM3: add renderer-neutral UI artifacts #127672](https://github.com/openclaw/openclaw/pull/127672)
  - [CM4: harden Control Model conformance and security #127674](https://github.com/openclaw/openclaw/pull/127674)
  - [CM5: adopt Control Model in Control UI commands and artifacts #127675](https://github.com/openclaw/openclaw/pull/127675)
- [fix(ui): New Session misses dynamically discovered models #126013](https://github.com/openclaw/openclaw/pull/126013) — targets missing dynamically configured models in the Control UI.
- [fix(text): only insert separator between word chars when stripping model tokens #121576](https://github.com/openclaw/openclaw/pull/121576) — fixes spurious whitespace from leaked token stripping.
- [fix(memory): respect provenance in automatic context #127469](https://github.com/openclaw/openclaw/pull/127469) — prevents automatic memory context from including untrusted content.
- [fix(llm-task): trust explicit provider for slash-containing model ids #126518](https://github.com/openclaw/openclaw/pull/126518) — addresses tool invocation failures with explicit providers.
- [fix(acp): deliver thread-bound ACP child replies instead of suppressing them #123930](https://github.com/openclaw/openclaw/pull/123930) — fixes ACP sub-session replies not being delivered back to the thread.

## 4. Community Hot Topics

The most-discussed issues reveal deep concerns about multi-channel delivery reliability, configuration handling, and release validation.

- [#48788 feat: centralized filename encoding utility for multi-encoding Content-Disposition handling](https://github.com/openclaw/openclaw/issues/48788) — 19 comments. Users want a proper architectural fix for non-UTF-8 filenames across channel adapters, not just the Feishu-specific PR #48578.
- [#125626 Release validation: v2026.8.1-beta.2](https://github.com/openclaw/openclaw/issues/125626) — 18 comments. Release-validation activity is high; beta testing is surfacing real regressions.
- [#53628 [Bug]: ${XDG_CONFIG_HOME} is not processed when installing a skill](https://github.com/openclaw/openclaw/issues/53628) — 14 comments. Docker/XDG configuration handling is confusing and broken for skill installs.
- [#119796 [Bug]: Windows: vitest teardown fails with EBUSY unlink on agent state DB](https://github.com/openclaw/openclaw/issues/119796) — 14 comments. Windows-specific test/state-handle lifecycle issue.
- [#87561 Define durable final fallback delivery semantics across channels](https://github.com/openclaw/openclaw/issues/87561) — 10 comments, P1. Users are hitting silent message loss when channels drop final fallback/error payloads.
- [#42840 Feature Request: Add MathJax/LaTeX Support to Control UI](https://github.com/openclaw/openclaw/issues/42840) — 8 comments, 10 👍. Strongly requested UX feature for rendering math in the UI.
- [#52640 Feature request: Persistent task-status surface for long-running channel turns](https://github.com/openclaw/openclaw/issues/52640) — 8 comments, 2 👍. Long-running tasks need an authoritative status surface beyond typing indicators.
- [#50199 Feature Request: Add Skill Priority Configuration](https://github.com/openclaw/openclaw/issues/50199) — 9 comments. Overlapping skills need explicit selection rules.

Underlying need: users care most about reliability of message delivery, clearer configuration semantics, and better visibility into long-running agent work.

## 5. Bugs & Stability

Stability is the biggest risk in this snapshot. A P0 regression plus several P1 regressions remain open, and most have no visible fix PR.

### P0

- [SQLite corruption recurs on pristine rebuilt DBs within 15–24h (2026.8.1-beta.2, WSL2) #126821](https://github.com/openclaw/openclaw/issues/126821) — 5 events in 5 days, including a "paralyzed gateway" mode that refuses all service but never exits. Freelist miscount occurs even after VACUUM INTO rebuild and `PRAGMA integrity_check = ok`. No fix PR visible.

### P1 regressions / critical bugs

- [OpenClaw leaks unreaped hook/tool child processes, causing zombie accumulation #97616](https://github.com/openclaw/openclaw/issues/97616) — zombies under `openclaw` degrade runtime over time. No fix PR visible.
- [anthropic:claude-cli OAuth refresh still dead-ends main lane in 2026.5.12 despite #73682 fix #83598](https://github.com/openclaw/openclaw/issues/83598) — persisted auth expiry causes all agent traffic to fail. No fix PR visible.
- [Docker gateway container restart loop when OPENCLAW_SANDBOX=1 and OPENCLAW_HOME=/mnt/... #86612](https://github.com/openclaw/openclaw/issues/86612) — Windows + Docker sandbox environment causes crash loop. No fix PR visible.
- [2026.7.1-2 fail-closed doctor migration gate crash-loops the gateway #126451](https://github.com/openclaw/openclaw/issues/126451) — regression from 2026.6.11; Codex sidecar `ERR_MODULE_NOT_FOUND` crashes the gateway on boot.
- [Context usage drops from 57% to 13% without compaction after large tool output #108215](https://github.com/openclaw/openclaw/issues/108215) — context accounting appears inconsistent after large tool results.
- [Sandbox skills bind-mount creates root-owned /workspace/.openclaw, locking out sandbox user #126631](https://github.com/openclaw/openclaw/issues/126631) — permission bug breaks sandboxed skills; carries `linked-pr-open` label.
- [CLI and Node Host alternate device metadata approvals on Windows #127176](https://github.com/openclaw/openclaw/issues/127176) — device identity is reused while platform metadata diverges; linked PR open.

### P2 bugs with broad impact

- [Windows: vitest teardown EBUSY unlink on agent state DB #119796](https://github.com/openclaw/openclaw/issues/119796)
- [Discord routing / mention-gating issue #44502](https://github.com/openclaw/openclaw/issues/44502) — regression in preflight routing.
- [Feishu: duplicate final replies after model failover #49381](https://github.com/openclaw/openclaw/issues/49381)
- [memory flush never triggers when reserveTokensFloor equals contextWindow #50611](https://github.com/openclaw/openclaw/issues/50611)
- [Telegram inbound stickers arrive as raw file refs, not staged to disk #120735](https://github.com/openclaw/openclaw/issues/120735)

There are also several fix-focused PRs in flight that address stability/system issues:

- [fix(codex): allow computer reuse across completed runs #126399](https://github.com/openclaw/openclaw/pull/126399)
- [fix(settings): take the settings file lock before first-write read #124471](https://github.com/openclaw/openclaw/pull/124471)
- [fix(system-agent): increase setup inference probe max tokens from 32 to 128 #124405](https://github.com/openclaw/openclaw/pull/124405)
- [fix(sessions): keep visible spawns in the parent group #126094](https://github.com/openclaw/openclaw/pull/126094)

## 6. Feature Requests & Roadmap Signals

The feature backlog is large, but several requests have enough momentum or user demand to be possible near-term candidates.

High-signal feature requests:

- [Centralized filename encoding utility #48788](https://github.com/openclaw/openclaw/issues/48788) — actively discussed (19 comments); partial fix already merged for Feishu, so a cross-channel architectural fix is a likely follow-up.
- [Persistent task-status surface #52640](https://github.com/openclaw/openclaw/issues/52640) — recurring UX gap for long-running Discord/task work.
- [MathJax/LaTeX Support to Control UI #42840](https://github.com/openclaw/openclaw/issues/42840) — 10 👍, strong user demand.
- [Graceful Gateway Restart with Session Recovery #57425](https://github.com/openclaw/openclaw/issues/57425) — important reliability feature; currently blocked on product decisions.
- [Surface API provider name in error/overload messages #51336](https://github.com/openclaw/openclaw/issues/51336) — small, high-value UX fix for provider errors.
- [Skill Priority Configuration #50199](https://github.com/openclaw/openclaw/issues/50199) — users need deterministic skill selection.
- [Surface cron job name / session label in /status and statusline #51184](https://github.com/openclaw/openclaw/issues/51184) — low-risk observability improvement.
- [Fire session-memory hook on session reset/prune #51572](https://github.com/openclaw/openclaw/issues/51572) — currently only fires on compaction, causing lost memory on resets.
- [Queue prompts when API limits prevent an immediate response #49251](https://github.com/openclaw/openclaw/issues/49251) — addresses orphaned prompts during rate-limit failures.

Prediction: the RFC 0029 Control Model series (CM1–CM5) is the clearest roadmap signal right now. Smaller UX fixes such as #51336 and #51184, plus the filename encoding work in #48788, are candidates for near-term releases because they are well-scoped and have active discussions or related PRs.

## 7. User Feedback Summary

The most consistent user pain points this cycle are:

- **Silent message loss / duplicate replies across channels.** Multiple issues report messages disappearing or duplicating after fallback/failover: [#87561](https://github.com/openclaw/openclaw/issues/87561), [#49381](https://github.com/openclaw/openclaw/issues/49381), [#44502](https://github.com/openclaw/openclaw/issues/44502), [#51049](https://github.com/openclaw/openclaw/issues/51049).
- **Session/context management is fragile.** Users report context percentage drops, memory flushing never triggering, compaction thresholds being model-relative, and silent failures on model switch: [#108215](https://github.com/openclaw/openclaw/issues/108215), [#50611](https://github.com/openclaw/openclaw/issues/50611), [#87136](https://github.com/openclaw/openclaw/issues/87136), [#58957](https://github.com/openclaw/openclaw/issues/58957), [#86963](https://github.com/openclaw/openclaw/issues/86963).
- **Auth/provider configuration remains confusing.** Examples include `auth.order` ignored for GitHub Copilot ([#46031](https://github.com/openclaw/openclaw/issues/46031)), Claude CLI OAuth refresh dead-ends ([#83598](https://github.com/openclaw/openclaw/issues/83598)), and alternate device metadata between TUI and Node Host ([#127176](https://github.com/openclaw/openclaw/issues/127176)).
- **Sandbox and install experience on Docker/Windows is rough.** Root-owned sandbox mounts ([#126631](https://github.com/openclaw/openclaw/issues/126631)), XDG_CONFIG_HOME not expanded ([#53628](https://github.com/openclaw/openclaw/issues/53628)), Docker restart loops ([#86612](https://github.com/openclaw/openclaw/issues/86612)), and sandbox prune leaving workspace directories behind ([#43797](https://github.com/openclaw/openclaw/issues/43797)) all point to operational debt.
- **Positive demand signals:** users are actively participating in beta validation ([#125626](https://github.com/openclaw/openclaw/issues/125626)), and requests for math rendering, session labels, and status surfaces have strong 👍 counts.

## 8. Backlog Watch

Several important issues have been waiting for maintainer/product attention for months and still carry `clawsweeper:needs-maintainer-review` or `no-new-fix-pr` labels.

Priority backlog items:

- [P1: Define durable final fallback delivery semantics across channels #87561](https://github.com/openclaw/openclaw/issues/87561) — open since 2026-05-28; core delivery reliability issue.
- [P1: Feishu duplicate final replies after model failover #49381](https://github.com/openclaw/openclaw/issues/49381) — open since 2026-03-18.
- [P1: raise or remove 3-minute no-output watchdog cap on CLI requests #40982](https://github.com/openclaw/openclaw/issues/40982) — open since 2026-03-09; kills legitimate long-running CLI tasks.
- [P1: Claude CLI OAuth refresh still dead-ends #83598](https://github.com/openclaw/openclaw/issues/83598) — open since 2026-05-18; blocks all traffic for affected users.
- [P1: Docker gateway container restart loop #86612](https://github.com/openclaw/openclaw/issues/86612) — open since 2026-05-25.
- [P1: Orphaned/oversized native Codex thread wedges a session #86963](https://github.com/openclaw/openclaw/issues/86963) — open since 2026-05-26; silently drops messages.
- [P2: auth.order ignored for GitHub Copilot provider #46031](https://github.com/openclaw/openclaw/issues/46031) — open since 2026-03-14; linked PR may be in flight but issue remains open.
- [P2: memory flush never triggers when reserveTokensFloor equals contextWindow #50611](https://github.com/openclaw/openclaw/issues/50611) — open since 2026-03-19.
- [P2: Discord routing / mention-gating regression #44502](https://github.com/openclaw/openclaw/issues/44502) — open since 2026-03-13.
- [P3 but high reaction: MathJax/LaTeX Support to Control UI #42840](https://github.com/openclaw/openclaw/issues/42840) — open since 2026-03-11; 10 👍 and no maintainer decision.

These issues are not just old; they represent recurring reliability gaps that will likely keep generating duplicate reports until the maintainers make explicit product/architecture decisions.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — Personal AI Assistant / Agent Open-Source Ecosystem
**Digest window: 2026-08-22**

---

## 1. Ecosystem Overview

The 12 projects tracked in this snapshot processed roughly **660 issues and 760 PRs in a single 24-hour window**, placing the ecosystem firmly past the demo phase and into production-hardening. Activity is dominated by regression fixes rather than greenfield features — SQLite corruption, silent message loss, MCP session deadlocks, context-accounting drift, and OAuth refresh failures recur across multiple independent codebases. While each project targets a distinct niche, from general-purpose chat hubs to Rust-based automation runtimes, the failure modes are strikingly convergent, pointing to a shared set of unresolved platform problems. Maintainer bandwidth, not user demand, is the primary constraint on progress: the healthiest projects this window are those with narrow scopes and disciplined merge practices, while the largest projects show churn outpacing closure.

---

## 2. Activity Comparison

**Health score** is an indicative composite of 24h issue-closure rate, PR-merge rate, unresolved P0/S0 count, and release momentum.

| Project | Issues updated (24h) | PRs updated (24h) | Release status | Health (0–10) |
|---|---|---|---|---|
| OpenClaw | 500 (491 open / 9 closed) | 500 (386 open / 114 merged) | None — v2026.8.1-beta.2 under open validation | 4.5 |
| ZeroClaw | 50 (50 open / **0 closed**) | 50 (48 open / 2 merged) | None | 4.0 |
| Hermes Agent | 50 (44 open / 6 closed) | 50 (49 open / 1 merged) | v0.20.5 patch (v2026.8.19) | 6.0 |
| CoPaw (QwenPaw) | 34 (19 open / 15 closed) | 36 (21 open / 15 merged) | None — v2.1.1b2 version bump merged | 5.5 |
| NanoClaw | 1 (new) | 25 (14 open / 11 merged) | None | 8.0 |
| IronClaw | 13 (9 active / 4 closed) | 35 (17 merged/closed) | None | 8.0 |
| NanoBot | 5 (1 open / 4 closed) | 37 (14 open / 23 merged) | None — consolidation for a batch release | 8.0 |
| LobsterAI | 2 (both closed) | 13 (12 merged / 1 open) | None — `release/2026.8.21` merged to main | 8.5 |
| PicoClaw | 1 (new feature request) | 4 merged/closed | None | 7.5 |
| Moltis | 2 (both open) | 8 (7 open / 1 closed) | None | 6.5 |
| NullClaw | 0 | 1 (open) | None | 6.5 |
| ZeptoClaw | 0 | 0 | None | N/A (dormant) |

**Takeaway:** The three largest projects (OpenClaw, ZeroClaw, Hermes) show the worst closure ratios and carry nearly all unresolved P0/S0 bugs this window. The mid-tier projects (NanoClaw, IronClaw, NanoBot, LobsterAI) demonstrate that high throughput and high merge discipline can coexist.

---

## 3. OpenClaw's Position

OpenClaw remains the ecosystem's reference hub by scale: its daily update volume is roughly **10× the next-busiest project**, and its 114 merged PRs in 24h exceed the total open-PR count of most peers. Its advantages are structural:

- **Broadest channel/adapter matrix** (Discord, Feishu, Telegram, Slack, WhatsApp, ACP, and more) — no peer matches this surface area.
- **Architecture-by-RFC governance** — the CM1–CM5 Control Model series gives the project a visible, coherent roadmap that smaller projects lack.
- **Deep contributor pool** — feature work continues even while maintainers are the bottleneck.

Its technical approach — a cross-channel gateway with adapters and plugins — is the reference design. Peers have chosen narrower bets: Hermes optimizes unattended automation, ZeroClaw security policy, NanoClaw channel/setup ergonomics, CoPaw desktop + China-market channels.

The weakness is proportional to the scale. The **P0 SQLite corruption regression (#126821)**, unresolved P1 auth/OAuth and zombie-process leaks, and a release-validation backlog mean the reference implementation is currently *not* the most stable option. Decision-makers evaluating OpenClaw should weigh its unmatched extensibility against reliability fixes queuing behind maintainer capacity.

---

## 4. Shared Technical Focus Areas

The following requirements emerged independently across multiple projects:

1. **Message delivery reliability** — OpenClaw (#87561 final-fallback semantics, #49381 duplicate replies), Hermes (#91583 @mention routing), NanoBot (#5457 dispatcher exception boundary), Moltis (#1224 tools failing in shared Slack), CoPaw (#7016 tool-call 404s). *Need: idempotent delivery, defined fallback/duplicate semantics, per-channel routing guarantees.*

2. **MCP/ACP session lifecycle** — Hermes (#88661 timeout unregisters entire toolset, #91654 registries keyed only by server name), CoPaw (#6524 stale `mcp-session-id` after remote restart), NanoBot (#1168 Notion MCP failure), OpenClaw (#123930 thread-bound ACP replies). *Need: automatic reconnect, per-call timeout isolation, profile-aware registry keying.*

3. **Context & memory accounting** — OpenClaw (#108215 context drops 57%→13%, #50611 flush never triggers), ZeroClaw (#10068 hard 32k cap despite 131k config, #10114–10116 tool-result truncation policy), CoPaw (#7168 7.6GB history.db bloat, #7193 memory leaking across sessions), NanoBot (#5441 Dream cursor blocking), Hermes (#91830 prompt-cache invalidation). *Need: truthful token accounting, truncation tied to the model context window, memory provenance and session isolation.*

4. **Auth & provider configuration** — OpenClaw (#83598 Claude CLI OAuth refresh dead-end), Hermes (#89886 Anthropic `cache_control` 400s), NanoBot (#5198 per-session model switching), LobsterAI (#1215 stale handler on config save), NullClaw (#990 gateway provider aggregation). *Need: robust OAuth lifecycle, strict provider-format compatibility, per-session/per-profile configurability.*

5. **Security & sandbox policy** — ZeroClaw (#10165 delegate bypasses `block_high_risk_commands`), OpenClaw (#116489 install-policy warnings, #126631 root-owned sandbox mounts), IronClaw (#7807 GitHub credential mediation), NanoBot (#1149 PromptGuard prompt-injection defense), Hermes (#91885 instruction-file poisoning scan). *Need: enforceable delegation policies, credential scrubbing, sandbox permissions that work on Docker/Windows.*

6. **Background work observability** — OpenClaw (#52640 persistent task-status surface), Hermes (#91826 bot-scoped activity panel), NanoBot (#5420 turn observability), CoPaw (#7203/#7196 collapse tool-call and reasoning traces), IronClaw (#7699 actionable run gates). *Need: persistent status surfaces, per-agent visibility, and usage/token attribution.*

---

## 5. Differentiation Analysis

| Project | Core focus | Target user | Technical signature |
|---|---|---|---|
| **OpenClaw** | General-purpose personal AI hub | Individuals running one agent across all chat surfaces | Cross-channel gateway + plugin adapters; RFC-driven monorepo |
| **Hermes Agent** | Production automation | DevOps-ish power users running persistent agents | Cron, MCP catalog, remote gateways, Desktop Bot Mode; ~323 PRs per patch |
| **ZeroClaw** | Security-first runtime | High-trust/sensitive environments | SOP engine, risk profiles, sandbox, delegate approval policy |
| **CoPaw (QwenPaw)** | Desktop-first research agent | Chinese-market + enterprise desktop users | Deep web tools, self-hosted multi-user Hub, DingTalk/Feishu channels |
| **IronClaw** | Reliable unattended ops | Teams, CI-conscious deployments | Rust core, coordinated CI program, pluggable memory over MCP |
| **NanoBot** | Lightweight provider-agnostic assistant | Developers wanting a clean WebUI/TUI | Typed LLM usage contract, trajectory logging, PromptGuard |
| **NanoClaw** | Channel/setup ergonomics | Self-hosters adopting Claude Code | Containerized Claude Code CLI, wizard-driven Telegram/Mattermost/WhatsApp setup |
| **PicoClaw** | Lightweight protocol interop | Minimal/Go-friendly deployments | Go, native Anthropic Messages API support, contributor-first docs |
| **LobsterAI** | Desktop IM/workbench hybrid | NetEase-Youdao ecosystem users | Library/artifact UX, scheduled tasks, Windows reliability |
| **Moltis** | Multi-connector lightweight agent | WhatsApp/Slack-centric small teams | Cron/heartbeat scheduling, Obscura stealth browser, Windows shell hooks |
| **NullClaw** | OpenAI-compatible gateway | EU/sovereignty-minded users | Pure provider aggregation; Eden AI, NEAR, Atlas cloud |
| **ZeptoClaw** | — | — | Dormant |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapid iteration, high churn (carry most P0/S0 risk):** OpenClaw, ZeroClaw, Hermes, CoPaw. These projects are shipping features quickly but accumulating reliability debt; their closure rates (0–22%) lag far behind their update volume.

**Tier 2 — Healthy high throughput:** NanoClaw, IronClaw, NanoBot, LobsterAI. Merge rates of 44–92% with few open bugs. LobsterAI is the window's standout: 12 of 13 PRs merged and a release branch integrated.

**Tier 3 — Consolidating:** PicoClaw (cleared ~6-month-old PR backlog), Moltis (targeted reliability fixes), NullClaw (stable, minimal).

**Tier 4 — Dormant:** ZeptoClaw (no activity).

**Maturity signal:** The Tier-2 projects demonstrate that merge discipline and CI rigor — not raw contributor volume — are what produce a trustworthy agent runtime.

---

## 7. Trend Signals

1. **Unattended reliability is the new bar.** Overnight cron runs, Docker containers, remote gateways, and multi-bot group chats are now default deployment modes. Expect more work on run gates, watchdog defaults, and queueing semantics (PicoClaw #3342, IronClaw #7699, OpenClaw #52640).

2. **MCP is standard, but lifecycle management is immature.** Every project with MCP support has an open reconnect/isolation bug. This is the clearest shared engineering opportunity for the ecosystem.

3. **Context accounting is becoming a trust issue.** Silent truncation, memory leaks across sessions, and cache-prefix invalidation are eroding user confidence. Provenance-aware memory and truthful token accounting will be differentiators.

4. **Security is moving from documentation to enforcement.** Delegate risk profiles, install-policy warnings, credential mediation, and prompt-injection scanning are appearing simultaneously across five projects. Policy that can be bypassed is considered a bug.

5. **Multi-instance and profile isolation are table stakes.** Named Telegram instances (NanoClaw), multiplexed profiles (Hermes), profile-agnostic storage (IronClaw) — users are running multiple agents/identities and demanding state separation.

6. **Deployment sovereignty is emerging.** EU-based gateway providers (Eden AI in NullClaw), self-hosted multi-user Hubs (CoPaw), and release-track pinning (Hermes) all point to users wanting control over where their agents run and which vendors they route through.

7. **Quiet-by-default UX.** Users are asking to collapse reasoning traces, hide tool calls, and trigger side-effect-heavy skills manually. Agent UX maturity now means *less* noise and *more* user control.

8. **Usage observability is becoming a purchase criterion.** Typed LLM usage contracts (NanoBot), per-agent token attribution (CoPaw), and `/usage` diagnostics (Hermes) signal that cost governance is moving from spreadsheet tracking into the runtime itself.

**For AI agent developers:** build delivery idempotency, MCP resilience, context provenance, and enforceable policy first — those four are the shared failure modes across every major implementation in this ecosystem.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-22

## 1. Today's Overview

NanoBot is in an active maintenance and feature-development cycle. In the last 24 hours, 5 issues were updated (1 open, 4 closed) and 37 pull requests were updated (14 open, 23 closed/merged). No new releases were published, suggesting that maintainers are consolidating merged work into an upcoming release. The most prominent activity is around provider usage/token accounting, trajectory observability, Dream memory fixes, WebUI/TUI polish, and new provider integrations. Overall project health looks strong: several user-reported regressions were fixed promptly, and the PR backlog is being actively worked.

## 2. Releases

No new releases were recorded in this window. There are no release notes, breaking changes, or migration notes to report.

## 3. Project Progress

The last 24 hours show a high volume of closed/merged PRs. Key advances from the visible PR set:

### Provider & Platform Features
- **DeepSeek V4 Flash Vision support** — [`#5474`](https://github.com/HKUDS/nanobot/pull/5474) adds `deepseek-v4-flash-vision-exp` routing for DeepSeek Responses API.
- **Typed LLM usage contract** — [`#5478`](https://github.com/HKUDS/nanobot/pull/5478) replaces dynamic provider usage dictionaries with an immutable typed `LLMUsage` contract across OpenAI, Anthropic, and Bedrock boundaries.
- **Unified provider usage trajectory backend** — [`#5479`](https://github.com/HKUDS/nanobot/pull/5479) records content-free trajectory rows for retries, fallbacks, errors, and cancellations.
- **Meta-Search Tool (MST) provider** — [`#5234`](https://github.com/HKUDS/nanobot/pull/5234) is still open; it would aggregate multiple search engines with Reciprocal Rank Fusion.

### WebUI / TUI
- **TUI LaTeX rendering** — [`#5476`](https://github.com/HKUDS/nanobot/pull/5476) renders common LaTeX math as Unicode/plain text in assistant transcripts.
- **iOS PWA safe-area fix** — [`#5477`](https://github.com/HKUDS/nanobot/pull/5477) keeps installed PWA controls inside the platform safe area and fixes theme-color synchronization.

### Bug Fixes & Regressions
- **Cron jobs disabled but still running** — [`#5407`](https://github.com/HKUDS/nanobot/pull/5407) retires persisted heartbeat/dream system jobs when their settings are disabled.
- **Dream cursor stuck after recovered tool errors** — [`#5442`](https://github.com/HKUDS/nanobot/pull/5442) fixes [`#5441`](https://github.com/HKUDS/nanobot/issues/5441), allowing Dream runs to advance even when a tool error was recovered.
- **Slack file download redirect validation** — [`#5414`](https://github.com/HKUDS/nanobot/pull/5414) hardens Slack downloads against redirect-based URL manipulation.

### Long-Running Feature PRs Closed
Several older feature PRs were closed in this window:
- PromptGuard prompt-injection detection — [`#1149`](https://github.com/HKUDS/nanobot/pull/1149)
- Lumina Windows app installer flow — [`#1592`](https://github.com/HKUDS/nanobot/pull/1592)
- Tauri desktop app with PyInstaller sidecar — [`#2063`](https://github.com/HKUDS/nanobot/pull/2063)
- CrowPay skill for autonomous agent payments — [`#1539`](https://github.com/HKUDS/nanobot/pull/1539)

Still-open PRs requiring review include the typed usage/trajectory stack [`#5480`](https://github.com/HKUDS/nanobot/pull/5480) / [`#5481`](https://github.com/HKUDS/nanobot/pull/5481), WebUI turn observability [`#5420`](https://github.com/HKUDS/nanobot/pull/5420), manual-only skill invocation [`#5405`](https://github.com/HKUDS/nanobot/pull/5405), memory consolidation fix [`#5379`](https://github.com/HKUDS/nanobot/pull/5379), dead-code cleanup [`#5475`](https://github.com/HKUDS/nanobot/pull/5475), and channel dispatcher exception boundary [`#5457`](https://github.com/HKUDS/nanobot/pull/5457).

## 4. Community Hot Topics

Comment activity is relatively low, but the two issues with the most comments reveal real user expectations:

- **Per-session model switching** — [`#5198`](https://github.com/HKUDS/nanobot/issues/5198) (4 comments, closed). Users expect to switch models directly from the session UI, similar to cloud SaaS AI assistants. The issue was closed, but no clear code fix is visible in the PR set.
- **Notion MCP connection failure** — [`#1168`](https://github.com/HKUDS/nanobot/issues/1168) (2 comments, closed). A Chinese-language report about failing to connect Notion through MCP, while the same credentials work in Claude. This points to a need for better MCP debugging/troubleshooting documentation and compatibility handling.

The stacked provider usage PRs ([`#5478`](https://github.com/HKUDS/nanobot/pull/5478), [`#5479`](https://github.com/HKUDS/nanobot/pull/5479), [`#5480`](https://github.com/HKUDS/nanobot/pull/5480), [`#5481`](https://github.com/HKUDS/nanobot/pull/5481)) also represent a hot internal workstream: normalizing provider usage accounting and trajectory logging.

## 5. Bugs & Stability

Ranked by user impact:

1. **Mid-stream streaming errors skip retry** — [`#5454`](https://github.com/HKUDS/nanobot/issues/5454) (closed). Transient `server_error` events are not retried once any content has already been streamed. This can leave users with a partial response instead of a successful completion. No dedicated fix PR appears in the current dataset.
2. **Dream cursor permanently blocked** — [`#5441`](https://github.com/HKUDS/nanobot/issues/5441) (closed). A recovered tool error caused Dream runs to be marked incomplete, blocking the memory cursor and causing duplicate edits on every subsequent run. Fixed by [`#5442`](https://github.com/HKUDS/nanobot/pull/5442).
3. **DingTalk background tasks not drained/observed** — [`#5463`](https://github.com/HKUDS/nanobot/issues/5463) (open). Inbound DingTalk messages are processed via `asyncio.Task` without a terminal observer, risking swallowed exceptions and accumulating background tasks. This is the only currently open issue in the dataset.
4. **Persisted cron jobs firing while disabled** — [`#5407`](https://github.com/HKUDS/nanobot/pull/5407) (closed). Heartbeat/dream jobs kept running despite being disabled in config, burning tokens. Fixed in [`#5407`](https://github.com/HKUDS/nanobot/pull/5407).
5. **Slack file download redirect risk** — [`#5414`](https://github.com/HKUDS/nanobot/pull/5414) (closed). Slack private URLs are remote input and could redirect; validation now covers the full redirect chain.

There is also the older **Notion MCP connection failure** ([`#1168`](https://github.com/HKUDS/nanobot/issues/1168)), which appears closed but suggests integration friction with third-party MCP servers.

## 6. Feature Requests & Roadmap Signals

Clear product-direction signals from recent PRs:

- **Provider usage/token observability** — The typed `LLMUsage` contract ([`#5480`](https://github.com/HKUDS/nanobot/pull/5480)) and trajectory backend ([`#5481`](https://github.com/HKUDS/nanobot/pull/5481)) point to better cost tracking and audit trails.
- **Metasearch aggregation** — [`#5234`](https://github.com/HKUDS/nanobot/pull/5234) would add multi-engine web search with RRF merging; likely a high-value feature for agent research tasks.
- **Manual-only skill invocation** — [`#5405`](https://github.com/HKUDS/nanobot/pull/5405) would let side-effect-heavy skills (deploy, publish) be user-triggered only and never auto-advertised to the model.
- **WebUI turn observability** — [`#5420`](https://github.com/HKUDS/nanobot/pull/5420) proposes per-turn answer surfaces, tool activity, and interrupted-work recovery, which would significantly improve UI transparency.
- **Safety: prompt-injection defense** — [`#1149`](https://github.com/HKUDS/nanobot/pull/1149) adds PromptGuard detection for system-prompt overrides, role confusion, and tool-call JSON injection.
- **Desktop app** — The closed Tauri desktop PR [`#2063`](https://github.com/HKUDS/nanobot/pull/2063) suggests a native desktop packaging path has been explored and may appear in a future release.

Likely next-version candidates: the provider usage contract + trajectory stack, DeepSeek V4 Flash Vision support, TUI LaTeX rendering, manual-only skills, and the Dream cursor fix.

## 7. User Feedback Summary

- **Model switching is expected by default** — Users find it unintuitive that NanoBot locks a session to a primary model and only uses others as fallback ([`#5198`](https://github.com/HKUDS/nanobot/issues/5198)).
- **MCP setup confidence is low** — The Notion MCP case ([`#1168`](https://github.com/HKUDS/nanobot/issues/1168)) shows users struggle with third-party MCP connectivity, especially when the same credentials work in other clients.
- **Memory/Dream reliability matters** — Users are bothered by redundant processing and duplicate memory edits caused by cursor-state bugs ([`#5441`](https://github.com/HKUDS/nanobot/issues/5441)).
- **Transient failures should not ruin a stream** — Users expect retry logic to handle mid-stream server errors gracefully ([`#5454`](https://github.com/HKUDS/nanobot/issues/5454)).
- **Disabled features must stay disabled** — The cron-job bug ([`#5407`](https://github.com/HKUDS/nanobot/pull/5407)) shows sensitivity around token waste from background jobs.

Overall, users are pushing NanoBot toward stronger session control, safer skill execution, transparent usage accounting, and resilience to transient provider/tool failures.

## 8. Backlog Watch

- **Open issue needing attention:** [`#5463`](https://github.com/HKUDS/nanobot/issues/5463) — DingTalk background-task lifecycle is unobserved; this is the only currently open issue and may require a channel-level fix.
- **Oldest open feature PR:** [`#5234`](https://github.com/HKUDS/nanobot/pull/5234) — MST metasearch provider has been open since 2026-08-03 and would benefit from maintainer review/merge or explicit next steps.
- **Conflict-labeled PR:** [`#5420`](https://github.com/HKUDS/nanobot/pull/5420) — WebUI turn observability and safe recovery is marked with a `conflict` tag; it will need rebasing or design alignment.
- **Open memory fix:** [`#5379`](https://github.com/HKUDS/nanobot/pull/5379) — Preserves full consolidation input in memory processing; important for avoiding history truncation issues.
- **Open channel robustness fix:** [`#5457`](https://github.com/HKUDS/nanobot/pull/5457) — Scopes dispatcher exception handling to message processing; prevents outbound delivery from silently stopping.

Given 23 closed/merged PRs in one day and 0 releases, the next NanoBot release is likely to be a significant batch including provider usage normalization, trajectory logging, UI fixes, and Dream reliability improvements.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-22

## 1. Today's Overview

Hermes Agent is seeing high, bug-heavy activity: **50 issues** were updated in the last 24 hours (44 open, 6 closed) and **50 PRs** were updated (49 open, 1 closed/merged). The only release in the window is **v0.20.5 (v2026.8.19)**, a patch tag rolling up roughly **323 PRs** since v0.20.4. Community discussion is concentrated on installation reliability, MCP connection lifecycle, profile/session isolation, and desktop Bot Mode UX. Maintainers are actively closing regressions, but two **P0 issues** around Anthropic-format cache handling and prompt-cache invalidation signal ongoing provider-compatibility risk. Overall, the project remains responsive, but multi-profile state handling and desktop-mode complexity are becoming recurring pain points.

## 2. Releases

### v2026.8.19 / v0.20.5 — August 19, 2026

- **Type:** Patch release
- **Scope:** Rolls up ~323 PRs merged since v0.20.4 into a stable tagged release for Docker images, hosted deployments, and fresh installs.
- **Breaking changes:** None stated in the available release data.
- **Migration notes:** None published in the release summary. However, P0 issues filed against the surrounding v2026.8.x line, especially **#89886** around Anthropic `cache_control` rejection, suggest users should validate tool-using Anthropic sessions after upgrading.

## 3. Project Progress

### Closed/Merged PRs in the last 24h: 1

- **[#88537 — fix(desktop): run repo discovery server-side in remote mode so Projects sidebar surfaces disk-scanned repos](https://github.com/NousResearch/hermes-agent/pull/88537)**  
  Fixes the Desktop Projects sidebar in remote/VPS mode by moving repo scanning to the backend that actually holds the filesystem context. Useful for remote desktop workflows.

### Closed issues in the last 24h

- **[#88655 — Scheduler-level cron processing errors bypass failure_nudge alerting](https://github.com/NousResearch/hermes-agent/issues/88655)** — closed.
- **[#90456 — Hermes BOT conversation mix-up after switching session/bot mode](https://github.com/NousResearch/hermes-agent/issues/90456)** — closed.
- **[#91843 — Intermittent “Credit access paused · run /topup” banner on free stealth-preview models](https://github.com/NousResearch/hermes-agent/issues/91843)** — closed.
- **[#59265 — IndexError in _display_resumed_history when resumed session has empty message](https://github.com/NousResearch/hermes-agent/issues/59265)** — closed.
- **[#90806 — state.db WAL sidecars replaced under live holders during SQLite corruption handling](https://github.com/NousResearch/hermes-agent/issues/90806)** — closed.

These closures show forward progress in cron alerting, conversation-state sync, billing-notice flakiness, history rendering, and SQLite corruption handling.

## 4. Community Hot Topics

Most active discussion is on installation, MCP reliability, and profile/session state:

- **[#87093 — Debian installation broken; uv.lock & npm install failed](https://github.com/NousResearch/hermes-agent/issues/87093)**  
  19 comments, 3 👍  
  Users report a basic `curl | bash` install on Debian 13.6 fails during dependency resolution. This is the single most-engaged issue and a major onboarding blocker.

- **[#88661 — MCP tool timeout parks server connection; entire toolset unregisters](https://github.com/NousResearch/hermes-agent/issues/88661)**  
  6 comments  
  A 300s MCP tool timeout causes the whole MCP server toolset to disappear from the live agent session until gateway restart. Users need per-call timeout isolation and automatic reconnect.

- **[#89886 — v2026.8.18: cache_control on tool_result.content[] rejected by Anthropic-format API](https://github.com/NousResearch/hermes-agent/issues/89886)**  
  4 comments, P0  
  Non-retryable 400s kill any tool-using session. The underlying need is strict API-format compatibility before release.

- **[#89346 — Shared primary profile routes reload session history from root store after #88734](https://github.com/NousResearch/hermes-agent/issues/89346)**  
  4 comments, 1 👍  
  Multi-profile session routing creates split sessions because gateway metadata and `AIAgent` persistence read from different stores. Profile isolation is a recurring community concern.

- **[#48190 — Session ↔ Workspace binding: record cwd + repo, group, restore on resume](https://github.com/NousResearch/hermes-agent/issues/48190)**  
  4 comments  
  Popular feature request: sessions should know where work happened and be grouped/restored by workspace.

## 5. Bugs & Stability

Ranked by severity, based on issues updated in the last 24 hours.

### P0

- **[#89886 — Anthropic-format API rejects cache_control on tool_result.content[]; non-retryable 400 kills tool sessions](https://github.com/NousResearch/hermes-agent/issues/89886)**  
  Reported on v2026.8.18. Any tool-using session fails on first LLM turn. No direct fix PR appears in the visible top-20 PR list.

- **[#91830 — proactive_prune_rearm_tokens invalidates prompt-cache prefix for sessions >10M tokens](https://github.com/NousResearch/hermes-agent/issues/91830)**  
  Marked duplicate but still P0. Large sessions lose 100% of prompt-cache reads across all provider paths, while small sessions cache at 72–93%.

### P1

- **[#87093 — Debian 13.6 installation broken; uv.lock & npm install fail](https://github.com/NousResearch/hermes-agent/issues/87093)**  
  Blocks new Linux installs via the official script.

- **[#89346 — Shared primary profile routes reload session history from root store after #88734](https://github.com/NousResearch/hermes-agent/issues/89346)**  
  Causes split session state under `gateway.multiplex_profiles`.

- **[#88655 — Scheduler-level cron errors bypass failure_nudge alerting](https://github.com/NousResearch/hermes-agent/issues/88655)**  
  Closed, so this silently-dying-cron class appears to have a fix.

### P2

- **[#88661 — MCP timeout parks server connection; whole toolset unregisters](https://github.com/NousResearch/hermes-agent/issues/88661)**  
- **[#91654 — MCP session/circuit-breaker registries keyed only by server name; profile multiplexing collisions](https://github.com/NousResearch/hermes-agent/issues/91654)**  
- **[#91815 — Disk-full OSError (ENOSPC/EDQUOT) misclassified as timeout or billing](https://github.com/NousResearch/hermes-agent/issues/91815)**  
- **[#88004 — Linux desktop app-launcher cannot find npm on a session PATH](https://github.com/NousResearch/hermes-agent/issues/88004)**  
- **[#91818 — Projects leak across profiles; broken isolation on Windows 11](https://github.com/NousResearch/hermes-agent/issues/91818)**  
- **[#91717 — Misleading “Response truncated due to output length limit” after transport timeout](https://github.com/NousResearch/hermes-agent/issues/91717)**  
- **[#63211 — Model picker hides custom base_url models until manual refresh](https://github.com/NousResearch/hermes-agent/issues/63211)**  
- **[#91583 — Remote-gateway chat skips @mention delivery to a local Bot](https://github.com/NousResearch/hermes-agent/issues/91583)**

### P3 / noteworthy

- **[#90048 — Desktop connection identity must preserve exact registry connectionId](https://github.com/NousResearch/hermes-agent/issues/90048)**
- **[#91706 — Bot Mode group command approval can be selected but not submitted](https://github.com/NousResearch/hermes-agent/issues/91706)**
- **[#91633 — Discord /new and /reset reset wrong session under multiplex_profiles](https://github.com/NousResearch/hermes-agent/issues/91633)**

**Fix-PR status:** No direct fix PRs for the P0/P1 issues were visible in the top-20 PR list. Smaller fix PRs are in flight, including **[#91883](https://github.com/NousResearch/hermes-agent/pull/91883)** (TUI compact mode), **[#91884](https://github.com/NousResearch/hermes-agent/pull/91884)** (exclude `.hermes` home from hint discovery), and **[#91887](https://github.com/NousResearch/hermes-agent/pull/91887)** (Codex auxiliary call security guard).

## 6. Feature Requests & Roadmap Signals

### Open feature requests gaining traction

- **[#48190 — Session ↔ Workspace binding](https://github.com/NousResearch/hermes-agent/issues/48190)**  
  Record cwd/repo with sessions, group in lists, restore on resume.

- **[#90838 — Provider-pool availability query for route selection](https://github.com/NousResearch/hermes-agent/issues/90838)**  
  Avoid sending requests to providers that are cooling down after 429s.

- **[#91871 — Configure model reasoning/thinking effort per bot](https://github.com/NousResearch/hermes-agent/issues/91871)**  
  Users want low/medium/high or numeric budget controls at bot/profile scope.

- **[#91826 / #91817 — Bot-scoped activity panel with per-bot transcript](https://github.com/NousResearch/hermes-agent/issues/91826)**  
  Users want more visibility into which message a bot is responding to and which stage it is in.

- **[#91827 — Bot Mode canonical Bot Chat should not hardcode an English kickoff prompt](https://github.com/NousResearch/hermes-agent/issues/91827)**  
  Internationalization and user-owned conversation start.

- **[#91107 — Persist Accent Picker override per profile](https://github.com/NousResearch/hermes-agent/issues/91107)**  
  Desktop theming customization request.

### In-flight PRs likely to land in upcoming versions

- **[#88904 — feat(mcp): add Context.dev catalog integration](https://github.com/NousResearch/hermes-agent/pull/88904)** — MCP catalog expansion.
- **[#88514 — feat(agent): optional session token budget fuse + /usage diagnostics](https://github.com/NousResearch/hermes-agent/pull/88514)** — hard ceiling for cumulative session tokens.
- **[#74837 — feat(update): CLI release track infrastructure](https://github.com/NousResearch/hermes-agent/pull/74837)** — pin to official releases instead of `main`.
- **[#89141 — feat(cli): add hermes update --no-restart](https://github.com/NousResearch/hermes-agent/pull/89141)** — update without bouncing gateway processes.
- **[#88509 — feat(plugins): expose declared config fields to UIs](https://github.com/NousResearch/hermes-agent/pull/88509)** — plugin-driven settings UI.
- **[#89139 — feat(cli): set one provider/model for all auxiliary tasks](https://github.com/NousResearch/hermes-agent/pull/89139)** — simplify side-task model config.
- **[#91885 — feat(security): detect persistent instruction-file poisoning](https://github.com/NousResearch/hermes-agent/pull/91885)** — new `hermes security scan` command.

**Prediction for next releases:** The next patch is likely to prioritize the **P0 cache/Anthropic fixes**, **MCP reconnect and profile-aware keying**, and **session/profile isolation fixes**. On the feature side, **release track infrastructure** and **plugin config-field exposure** look close to landing; **bot-scoped activity panels** may follow if the duplicate requests are consolidated.

## 7. User Feedback Summary

- **Pain point: Installation reliability.** The Debian install failure is the most-commented issue. For a project that markets `curl | bash` setup, this is a serious first-impression risk.
- **Pain point: Multi-profile isolation.** Projects leaking across profiles, session history loading from the wrong store, and MCP registries colliding by server name show that power users are pushing multi-profile multiplexing beyond current state separation.
- **Pain point: MCP production reliability.** Timeouts disabling entire toolsets and requiring gateway restarts is unacceptable for automation-heavy workflows.
- **Pain point: Regression sensitivity.** Issues like the Anthropic `cache_control` 400 and the v2026.8.18 tool-session breakage suggest users are upgrading immediately and are being burned by provider-format regressions.
- **Positive signal:** Users are deploying Hermes for serious workloads: **remote/VPS gateways, cron automation, Discord bots, Google Workspace integrations, MCP catalogs, and multi-bot Desktop group chats**. The volume of closed regressions — especially cron alerting, SQLite corruption, and session-history crashes — shows maintainers are responding.

## 8. Backlog Watch

Long-running, still-open issues and PRs that appear to need maintainer attention:

- **[#43054 — productivity/google-workspace: gmail get returns only top-level MIME part; nested forwarded bodies dropped](https://github.com/NousResearch/hermes-agent/issues/43054)**  
  Opened June 9, 2026. P3, but it silently corrupts real email content for nested forwards.

- **[#48190 — Session ↔ Workspace binding](https://github.com/NousResearch/hermes-agent/issues/48190)**  
  Opened June 18, 2026. P3 but widely relevant to session restore and organization.

- **[PR #40726 — fix(migration): warn on cron scanner and workflow cleanup tripwires](https://github.com/NousResearch/hermes-agent/pull/40726)**  
  Opened June 6, 2026. P3. Helps avoid silent failures for OpenClaw → Hermes migrations.

- **[PR #45458 — fix(bedrock): honor resolve_bedrock_region() on runtime init paths](https://github.com/NousResearch/hermes-agent/pull/45458)**  
  Opened June 13, 2026. P2. Bedrock region hardcoding affects AWS deployments.

- **[PR #52344 — Daytona: set auto-archive interval on sandbox create (quota safety)](https://github.com/NousResearch/hermes-agent/pull/52344)**  
  Opened June 25, 2026. P2, billing/disk-quota related.

- **[#63211 — Model picker hides custom base_url models until manual refresh](https://github.com/NousResearch/hermes-agent/issues/63211)**  
  Opened July 12, 2026. P2, needs-repro. Affects local gateway users.

- **[#70451 — Desktop chat markdown/.md preview forces horizontal scroll](https://github.com/NousResearch/hermes-agent/issues/70451)**  
  Opened July 24, 2026. P3, but a visible desktop UX degradation.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

## 1. Today's Overview

As of 2026-08-22, PicoClaw shows a quiet-but-healthy activity profile. Only one issue is active in the last 24 hours — a new feature request about queueing messages during agent turns — while four older PRs were closed/merged, clearing accumulated work across tooling, documentation, API protocol support, and skill management. No new releases were published. The project appears to be in a consolidation phase: maintainers are landing previously opened PRs, though new community discussion volume is low.

## 2. Releases

No new releases were published in the 24-hour window. The "Latest Releases" data is empty, so there are no changelog details, breaking changes, or migration notes to report.

## 3. Project Progress

Four PRs were closed/merged in the last 24 hours:

- [PR #647](https://github.com/sipeed/picoclaw/pull/647) — **WebFetchTool text extraction improvements**  
  Adds HTML entity decoding (`&amp;`, `&lt;`, etc.) and newline preservation for block-level elements, making extracted web content more readable and accurate.

- [PR #1182](https://github.com/sipeed/picoclaw/pull/1182) — **Add `agents.md`**  
  Refines repository guidance into a principle-first, lightweight guide for AI agents/contributors. Uses `go.mod` as the source of truth for Go version requirements.

- [PR #1158](https://github.com/sipeed/picoclaw/pull/1158) — **Add `anthropic-messages` protocol**  
  Introduces native Anthropic Messages API format support (`/v1/messages` endpoint), fixing issue #269 and enabling services that only support Anthropic's native API format.

- [PR #714](https://github.com/sipeed/picoclaw/pull/714) — **Skills CLI install/reinstall refactor**  
  Adds GitHub-based skill installation with `repo@branch` and subpath support, a reinstall subcommand with forced overwrite, and refactors install/reinstall logic into a `skillsCmd` command.

These merges indicate progress in web tool robustness, contributor documentation, LLM provider interoperability, and skill lifecycle management.

## 4. Community Hot Topics

There is very little high-engagement discussion in the current window. No issues or PRs show significant comment counts or reactions.

The only active issue is:

- [Issue #3342](https://github.com/sipeed/picoclaw/issues/3342) — **[Feature] Opt-in "after-turn" steering mode: queue busy-session messages instead of interrupting the running turn**  
  This request addresses a core UX flow: when a user sends a second message while the agent is still running, PicoClaw currently treats it as a mid-task correction, causing the first task's remaining tool calls to be skipped with "Skipped due to queued user message." The author proposes an opt-in mode that queues the new message until the current turn completes.

Although it has zero comments and reactions so far, this touches an important interaction design decision and may attract more discussion if maintainers respond.

## 5. Bugs & Stability

No bug reports, crashes, or regression issues were updated in the last 24 hours. The only tool-related PR, [PR #647](https://github.com/sipeed/picoclaw/pull/647), is an enhancement rather than an explicit bug fix, though it likely improves real-world reliability of `WebFetchTool` output parsing. Overall, no stability signals were raised in this window.

## 6. Feature Requests & Roadmap Signals

The main new feature signal is:

- [Issue #3342](https://github.com/sipeed/picoclaw/issues/3342) — **Queue busy-session messages instead of interrupting**  
  This suggests growing user interest in more predictable, non-interruptive agent steering. The "opt-in" phrasing implies preserving the current interrupt-by-default behavior while giving advanced users a safer alternative.

Looking at recently merged PRs, the next PicoClaw version will likely include:

- Native Anthropic Messages API support (`anthropic-messages` protocol)
- Improved skill installation with GitHub branch/subpath support and reinstall capability
- Cleaner web-fetched text extraction
- New `AGENTS.md` contributor guidance

Issue #3342 is still in early discussion, so it is less likely to land in the immediate next release unless maintainers prioritize it quickly.

## 7. User Feedback Summary

Real user pain points visible in this window include:

- **Interruption of ongoing agent tasks**: The request in [#3342](https://github.com/sipeed/picoclaw/issues/3342) shows frustration with losing in-flight tool calls when a second user message arrives. Users want controlled queueing rather than abrupt course correction.
- **Anthropic-compatible service compatibility**: PR #1158 addresses users whose API providers only support the native Anthropic format, not PicoClaw's existing protocol handling.
- **Skill installation friction**: PR #714 improves support for installing skills from GitHub with branches and subpaths, plus reinstall capability, suggesting prior pain around overwriting and source flexibility.

Satisfaction signals are indirect but positive: long-standing PRs were finally merged, indicating maintainers are responding to community contributions.

## 8. Backlog Watch

No long-unanswered open issues or PRs were identified beyond the single active issue. However, several PRs merged today had notable review latency:

- [PR #647](https://github.com/sipeed/picoclaw/pull/647) was created on 2026-02-22 and closed 2026-08-21 (~6 months)
- [PR #714](https://github.com/sipeed/picoclaw/pull/714) was created on 2026-02-24 and closed 2026-08-21 (~6 months)
- [PR #1158](https://github.com/sipeed/picoclaw/pull/1158) was created on 2026-03-06 and closed 2026-08-21 (~5.5 months)

This suggests maintainer bandwidth has been a constraint, though the backlog is being cleared. The open [Issue #3342](https://github.com/sipeed/picoclaw/issues/3342) currently has no comments or maintainer response, so it still needs triage to determine whether the proposed opt-in steering mode is aligned with the project roadmap.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-22

## 1. Today's Overview

NanoClaw saw high activity over the past 24 hours: 25 PRs were updated, with 14 open and 11 merged/closed, while only 1 new issue was filed. The majority of work centered on channel setup flows — notably Telegram multi-instance support, Dial/registry fixes, CI hardening, and the long-awaited Mattermost integration. No new releases were published. The single open issue, [#3426](https://github.com/nanocoai/nanoclaw/issues/3426), is a user-facing `send_card` bug where the bridge drops callback buttons that the docs promise. Overall, the project looks healthy: high PR throughput, active core-team participation, and minimal open bug reports.

## 2. Releases

No new releases were published in the reported period.

## 3. Project Progress

The visible closed/merged PRs updated in the last 24 hours include:

- [**#3202**](https://github.com/nanocoai/nanoclaw/pull/3202) — Add Mattermost channel integration (closes [#1379](https://github.com/nanocoai/nanoclaw/issues/1379)).
- [**#3050**](https://github.com/nanocoai/nanoclaw/pull/3050) — Add Dial to the channel picker + wizard/skills (`runChannelSkill` model).
- [**#3429**](https://github.com/nanocoai/nanoclaw/pull/3429) — Ratify the driver attach surface: `SessionExecSpec` describes exec argv.
- [**#3439**](https://github.com/nanocoai/nanoclaw/pull/3439) — Bump container pins: Claude Code CLI to 2.1.238, agent SDK to ^0.3.238.
- [**#3424**](https://github.com/nanocoai/nanoclaw/pull/3424) — CI now tests registry-backed skills.
- [**#3430**](https://github.com/nanocoai/nanoclaw/pull/3430) — Restore the stable required `ci` check after the Node 22/24 matrix broke it.
- [**#3403**](https://github.com/nanocoai/nanoclaw/pull/3403) — Fix Matrix adapter under Node 22 with a refresh-safe ESM patch.
- [**#3402**](https://github.com/nanocoai/nanoclaw/pull/3402) — Providers now accept branch-backed provider file events.
- [**#3401**](https://github.com/nanocoai/nanoclaw/pull/3401) — Keep WhatsApp Cloud skill payload compatible with `main`.
- [**#3433**](https://github.com/nanocoai/nanoclaw/pull/3433) — `/add-dial-number` migrated to `nc` directives.

Active feature work still in progress:

- [**#3396**](https://github.com/nanocoai/nanoclaw/pull/3396) — Create agents from templates in chat (`create_agent` template ref + `ncl templates list`).
- [**#3428**](https://github.com/nanocoai/nanoclaw/pull/3428) — Carry the template ref through Slack creation; supersedes the prematurely merged [#3397](https://github.com/nanocoai/nanoclaw/pull/3397).
- [**#3436**](https://github.com/nanocoai/nanoclaw/pull/3436) — Named Telegram bot instances via `TELEGRAM_INSTANCES` + instance-bound pairing.
- [**#3435**](https://github.com/nanocoai/nanoclaw/pull/3435) — Carry the adapter instance through pairing, init-first-agent, and CLI welcome.
- [**#3438**](https://github.com/nanocoai/nanoclaw/pull/3438) — Wizard offers "add another Telegram bot" when one is already configured.

## 4. Community Hot Topics

The feed did not include comment/reaction counts, so hot topics are inferred from update activity and cross-PR references.

- [**Issue #3426**](https://github.com/nanocoai/nanoclaw/issues/3426) is the only open issue. It describes a real user-facing mismatch: `send_card` documentation promises `actions` buttons, but the bridge drops every action without a `url`, and agents then blame the platform. The underlying need is either to make the docs match the bridge or to support URL-less actions.
- [**PR #3428**](https://github.com/nanocoai/nanoclaw/pull/3428) is high-signal because it corrects a merge-order problem: it supersedes [#3397](https://github.com/nanocoai/nanoclaw/pull/3397), which was merged ahead of its dependency [#3396](https://github.com/nanocoai/nanoclaw/pull/3396) and had to be reverted on the branch.
- [**PR #3396**](https://github.com/nanocoai/nanoclaw/pull/3396) is the anchor feature for several other PRs; template-based agent creation is clearly becoming a core workflow.

## 5. Bugs & Stability

Ranked by severity:

1. **High — [#3426](https://github.com/nanocoai/nanoclaw/issues/3426): `send_card` callback buttons dropped by the bridge.** Docs promise `actions`; the bridge drops button actions without `url`; agents tell users the platform cannot render buttons. No direct fix PR is open yet.
2. **Medium — [#3434](https://github.com/nanocoai/nanoclaw/pull/3434): Polling adapters do not open the webhook server.** A fix PR is open from the setup-wizard workstream.
3. **Medium — [#3287](https://github.com/nanocoai/nanoclaw/pull/3287): Inbound platform message ID includes an agent-group suffix.** PR is open and fixes [#3153](https://github.com/nanocoai/nanoclaw/issues/3153).
4. **Low — [#3431](https://github.com/nanocoai/nanoclaw/pull/3431): Telegram pairing card says 6 digits when the actual code length differs.** Fix PR is open.
5. **Infrastructure — [#3430](https://github.com/nanocoai/nanoclaw/pull/3430): CI required check broken by Node version matrix.** Fix already closed/merged.
6. **Infrastructure — [#3403](https://github.com/nanocoai/nanoclaw/pull/3403): Matrix adapter ESM imports fail under Node 22.** Fix already closed/merged.
7. **Infrastructure — [#3401](https://github.com/nanocoai/nanoclaw/pull/3401): WhatsApp Cloud skill imported a channels-only helper, breaking `main`.** Fix already closed/merged.

## 6. Feature Requests & Roadmap Signals

- **Mattermost support** ([#3202](https://github.com/nanocoai/nanoclaw/pull/3202), closing [#1379](https://github.com/nanocoai/nanoclaw/issues/1379)) is now likely in the next release; it was an explicit long-standing user request.
- **Template-first agent creation** ([#3396](https://github.com/nanocoai/nanoclaw/pull/3396), [#3428](https://github.com/nanocoai/nanoclaw/pull/3428)) points toward reusable agent templates, local template listing, and public registry discovery.
- **Telegram instance management** ([#3436](https://github.com/nanocoai/nanoclaw/pull/3436), [#3435](https://github.com/nanocoai/nanoclaw/pull/3435), [#3438](https://github.com/nanocoai/nanoclaw/pull/3438), [#3437](https://github.com/nanocoai/nanoclaw/pull/3437)) suggests a broader multi-instance story for chat adapters.
- **Driver attach surface** ([#3429](https://github.com/nanocoai/nanoclaw/pull/3429)) lays groundwork for interactive terminal attach tooling.
- **Registry-backed skills CI** ([#3424](https://github.com/nanocoai/nanoclaw/pull/3424)) signals that "add-*" registry skills are becoming a supported extension surface.

## 7. User Feedback Summary

- The only direct user feedback in the period is [#3426](https://github.com/nanocoai/nanoclaw/issues/3426): card buttons silently disappear, and the agent blames the platform. This is a trust-impacting communication bug.
- The closure of [#1379](https://github.com/nanocoai/nanoclaw/issues/1379) via [#3202](https://github.com/nanocoai/nanoclaw/pull/3202) confirms sustained user demand for Mattermost and non-Slack channels.
- [**PR #3428**](https://github.com/nanocoai/nanoclaw/pull/3428) documents contributor-facing friction: a branch was merged ahead of its dependency and had to be reverted. That is not end-user feedback, but it signals a process issue maintainers may want to address.

## 8. Backlog Watch

- [**PR #3287**](https://github.com/nanocoai/nanoclaw/pull/3287) — open since Aug 17 but updated Aug 21; it fixes [#3153](https://github.com/nanocoai/nanoclaw/issues/3153) and still needs maintainer review/merge.
- [**Issue #3153**](https://github.com/nanocoai/nanoclaw/issues/3153) is referenced as fixed by [#3287](https://github.com/nanocoai/nanoclaw/pull/3287) but remains open until that PR lands.
- [**Issue #3426**](https://github.com/nanocoai/nanoclaw/issues/3426) is new but has no comments or assignee; it should be triaged to determine whether the fix is docs-only or a bridge change.
- With 14 open PRs, including a stack of Telegram/setup PRs from the same author, review capacity is the current main backlog risk.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-22

## 1. Today's Overview
NullClaw is in a low-activity window: no issues were updated in the last 24 hours (0 open, 0 closed), no new releases were published, and no PRs were merged or closed. The only activity is a single open pull request (#990) proposing Eden AI as a new OpenAI-compatible gateway provider, created and last updated yesterday. This signals that while day-to-day churn is minimal, the provider-integration path remains an active area of contributor interest. The project remains stable, with no regressions or bug reports surfacing in the reporting window.

## 2. Releases
No new releases were published in the last 24 hours. This section is omitted per project guidelines.

## 3. Project Progress
**Merged/Closed PRs:** None in the last 24 hours.

No features or fixes advanced to the main branch during this period. The state of the repository is unchanged from the previous digest cycle, with the exception of the new open PR noted below.

## 4. Community Hot Topics
**[PR #990 — feat(providers): add Eden AI as an OpenAI-compatible gateway](https://github.com/nullclaw/nullclaw/pull/990)** — *Open*
- Author: MVS-source | Created: 2026-08-21 | Updated: 2026-08-21 | 👍: 0 | Comments: 0
- **Summary:** Adds Eden AI as an OpenAI-compatible gateway provider, structurally following PR #922 (which added NEAR AI Cloud and Atlas Cloud). It reuses the existing `OpenAiCompatibleProvider` rather than introducing a new provider implementation. Eden AI aggregates multiple upstream vendors behind a single API key and is EU-based.
- **Analysis:** Although this PR has no comments or reactions yet, it carries two underlying signals. First, the contributor is deliberately following the established pattern from #922, suggesting the project's provider abstraction layer is mature enough that third parties can extend it with low friction. Second, the EU-based positioning of Eden AI hints at demand for sovereignty-friendly hosting options — a theme likely to resonate with European users who need data-residency guarantees. Maintainers should review and merge this before the pattern drifts, as stacked provider PRs that diverge would increase maintenance cost.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported or fixed in the last 24 hours. No new issues were opened, and no stability-related PRs were raised. The project appears stable on this front.

## 6. Feature Requests & Roadmap Signals
The Eden AI PR (#990) is the clearest roadmap signal today. It indicates two things:

1. **Provider gateway ecosystem expansion** — Contributors see value in aggregating upstream AI vendors (Eden AI) and cloud-specific endpoints (NEAR AI Cloud, Atlas Cloud from #922) through the same `OpenAiCompatibleProvider` interface. The next version of NullClaw may ship with this additional gateway already included, provided maintainers review #990 promptly.
2. **EU compliance / regional routing** — Eden AI's EU-based operations suggest a user segment interested in low-latency European endpoints or GDPR-aligned data handling. Future roadmap items could include region-aware provider selection or documentation highlighting EU-compliant gateways.

Given the pattern is already established and the PR is trivial to review (no new provider implementation), it is a strong candidate for inclusion in the next release.

## 7. User Feedback Summary
Direct user feedback in the last 24 hours is essentially absent (0 comments, 0 reactions). The one contributor action — MVS-source opening #990 — is implicit feedback that the provider experience matters and that the current abstraction is workable. The PR's choice to route through the existing `OpenAiCompatibleProvider` rather than writing a custom adapter reflects satisfaction with the current architecture. No pain points or dissatisfaction were voiced in this window.

## 8. Backlog Watch
- **[PR #990 (feat: Eden AI gateway)](https://github.com/nullclaw/nullclaw/pull/990)** — Opened 2026-08-21, no maintainer response yet. Not technically "long-unanswered" at ~1 day old, but it is the only open item and it touches the provider layer, which affects downstream users. Recommend a maintainer review within the next few days to keep the provider-integration momentum and avoid the PR going stale.

No other long-standing issues or PRs were identified in the supplied data window.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

## 1. Today's Overview

IronClaw saw a high-volume, CI-focused day: 13 issues and 35 PRs were updated in the last 24 hours, with 17 PRs merged/closed and 9 issues still active. The dominant theme is a coordinated “CI expedite” program (T1–T4) aimed at consolidating toolchain setup, unifying preflight gates, improving test parallelism, and closing the green-PR/red-queue divergence. Several release-branch regressions were also fixed and forward-ported, especially around Clippy 1.98 compatibility, workspace-root overrides, and Telegram connection flows. No new releases were published.

## 2. Releases

None in the last 24 hours. No release notes, breaking changes, or migration steps to report.

## 3. Project Progress

The following notable PRs were merged/closed:

- **#7807 / #7806** — [feat(sandbox): mediate GitHub CLI credentials](https://github.com/nearai/ironclaw/pull/7807): adds direct-executable sandbox execution and staged, invocation-scoped GitHub credential mediation.
- **#7805** — [fix(ci): forward-port the clippy 1.98 lint fixes to 1.3](https://github.com/nearai/ironclaw/pull/7805): fixes a release-branch CI blocker affecting every PR into `release/2026-08-17`.
- **#7804** — [fix(workspace): honor IRONCLAW_REBORN_WORKSPACE_ROOT on 1.3](https://github.com/nearai/ironclaw/pull/7804): forward-ports a missing durable workspace-root override.
- **#7803 / #7766** — [Telegram pairing and device-linking fixes](https://github.com/nearai/ironclaw/pull/7803): separates bot pairing from personal account linking, keeps paired bots active, and adds explicit consent/selection.
- **#7797** — [docs(guidance): repo-wide agent-guidance audit](https://github.com/nearai/ironclaw/pull/7797): pruned 21.5k lines and consolidated guidance under the `AGENTS.md` convention.
- **#7796** — [fix(sandbox): preserve failed Railway audit appends](https://github.com/nearai/ironclaw/pull/7796): fails closed and preserves staged proxy audit records for retry.
- **#7699** — [feat(notifications): publish actionable run gates](https://github.com/nearai/ironclaw/pull/7699): durable approval, authentication, and blocked-run notifications.

Closed issues include **#7783** (LLM timeout policy), **#7690** (publish approval/auth/blocked-run notifications), **#7715** (Telegram consent flow), and **#7689** (server-backed notification inbox consumption).

## 4. Community Hot Topics

The most active issue threads by comment count:

- **#7801** — [CI expedite T4: canonical preflight](https://github.com/nearai/ironclaw/issues/7801) — 3 comments. Proposes a single canonical preflight gate list, worktree-safe hooks, and self-printing REPRO output.
- **#7799** — [CI expedite T2: nextest pipeline](https://github.com/nearai/ironclaw/issues/7799) — 3 comments. Focused on replacing sequential test loops, consolidating failure reporting, and reducing PR CI latency.
- **#7664** — [Pluggable memory over MCP](https://github.com/nearai/ironclaw/issues/7664) — 2 comments. Tracks wiring an external memory provider with Mnesis Core as first consumer.
- **#7798 / #7800** — [CI expedite T1 / T3](https://github.com/nearai/ironclaw/issues/7798) — 2 comments each. Cover centralized Rust toolchain setup and PR/queue convergence guards.

Underlying needs: maintainers are clearly pushing to make CI faster, more deterministic, and less likely to produce green-PR/red-queue drift. The memory-related threads show growing interest in external/pluggable memory, with privacy/redaction concerns emerging as a prerequisite.

## 5. Bugs & Stability

Ranked by severity:

1. **High — #7808** [Memory write path: redaction + taint metadata required before any external provider binds](https://github.com/nearai/ironclaw/issues/7808) — open. Conversation content currently leaves verbatim through the memory write path; this is a privacy/security prerequisite for any external provider. No fix PR yet.
2. **Medium — #7783** [LLM timeout policy: finalization can’t measure TTFT, retry budget can’t fit deadline](https://github.com/nearai/ironclaw/issues/7783) — closed. Transport stalls could destroy runs before retries complete.
3. **Medium — #7805** [Clippy 1.98 lint failures on release/2026-08-17](https://github.com/nearai/ironclaw/pull/7805) — fixed. This was breaking every PR into the release branch.
4. **Medium — #7715** [Telegram connection flow lacks consent/selection between bot and personal account](https://github.com/nearai/ironclaw/issues/7715) — closed; addressed by #7766 and #7803.
5. **Low/Medium — #7804** [IRONCLAW_REBORN_WORKSPACE_ROOT missing on 1.3](https://github.com/nearai/ironclaw/pull/7804) — fixed via forward-port.
6. **Low — #7796** [Failed Railway audit appends were being lost](https://github.com/nearai/ironclaw/pull/7796) — fixed with fail-closed behavior and retry preservation.

## 6. Feature Requests & Roadmap Signals

Several substantial feature tracks are in flight:

- **Pluggable memory over MCP** — [#7664](https://github.com/nearai/ironclaw/issues/7664): external memory bindable by configuration, but blocked on redaction/taint work in #7808.
- **Durable user inbox** — [#7687](https://github.com/nearai/ironclaw/issues/7687): generalizes the notification center into a durable, actionable inbox; related PRs #7699 and #7700 are moving this forward.
- **WebUI design system** — [#7257](https://github.com/nearai/ironclaw/pull/7257) and [#7750](https://github.com/nearai/ironclaw/pull/7750): Storybook integration, design-system catalog, and shared UI primitives.
- **UI consistency** — [#7792](https://github.com/nearai/ironclaw/issues/7792) and [#7793](https://github.com/nearai/ironclaw/issues/7793): shared page-shell/loading primitives and migrating Settings/Admin banners to `InlineNotice`.
- **CI overhaul** — Issues [#7798](https://github.com/nearai/ironclaw/issues/7798), [#7799](https://github.com/nearai/ironclaw/issues/7799), [#7800](https://github.com/nearai/ironclaw/issues/7800), [#7801](https://github.com/nearai/ironclaw/issues/7801): likely to land across upcoming releases as a consolidated CI experience.

Next-version predictions: notification inbox completion, memory-write redaction before external provider integration, and the first wave of canonical CI infrastructure.

## 7. User Feedback Summary

User-reported pain points this cycle:

- **Telegram connection ambiguity** — users did not know whether they were connecting a bot or a personal account, and consent/selection was missing ([#7715](https://github.com/nearai/ironclaw/issues/7715)). The follow-up fixes were well-targeted.
- **LLM timeout fragility** — stalled provider requests could kill runs before retries completed, creating a poor and confusing run experience ([#7783](https://github.com/nearai/ironclaw/issues/7783)).
- **Memory privacy concern** — the possibility of verbatim conversation data egressing to external memory providers is a clear trust issue ([#7808](https://github.com/nearai/ironclaw/issues/7808)).
- **Release-branch CI noise** — irrelevant Clippy failures on PRs into `release/2026-08-17` wasted developer time and signaled instability ([#7805](https://github.com/nearai/ironclaw/pull/7805)).
- **UI inconsistency** — repeated page-shell/loading markup and old-style banners in Settings/Admin are being cleaned up, which should improve perceived polish ([#7792](https://github.com/nearai/ironclaw/issues/7792), [#7793](https://github.com/nearai/ironclaw/issues/7793)).

Overall, users are getting responsive fixes, but CI reliability and memory-data safety remain areas of active concern.

## 8. Backlog Watch

Older/large open items that may need maintainer attention:

- **#7257** — [docs(design-system): proposal, plan & checklist for WebUI design system](https://github.com/nearai/ironclaw/pull/7257) — open since 2026-08-05, docs-only but foundational for the design-system epic.
- **#7456** — [fix(reborn): make durable storage profile-agnostic](https://github.com/nearai/ironclaw/pull/7456) — open since 2026-08-10, XL-sized, risk medium; still actively updated but not merged.
- **#7491** — [feat(coding): omp core-tool contract + engines + benchmark arm](https://github.com/nearai/ironclaw/pull/7491) — open since 2026-08-11, XL-sized, medium risk; large surface-area change.
- **#7664** — [Pluggable memory over MCP](https://github.com/nearai/ironclaw/issues/7664) — tracking issue open since 2026-08-14; waiting on privacy prerequisite #7808.
- **#7700** — [feat(notifications): publish authoritative run outcomes](https://github.com/nearai/ironclaw/pull/7700) — open since 2026-08-17, human-verified; important for inbox reliability.
- **#7750** — [chore(webui): integrate Storybook + design-system catalog](https://github.com/nearai/ironclaw/pull/7750) — recreated off current `main`, superseding #7039; open since 2026-08-19.

These are not necessarily stale, but they are large or cross-cutting enough that continued review/merge decisions will be important for roadmap momentum.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

## LobsterAI Project Digest — 2026-08-22

### 1. Today's Overview

LobsterAI was very active in the last 24 hours: 13 PRs were updated, 12 were closed/merged, and only 1 remains open. Two stale issues were closed with no new active issues remaining. The bulk of merged PRs belong to the `release/2026.8.21` branch, which brings DeepSeek Harness (DSH) runtime updates, better analytics handling, and a series of library/artifact UX improvements into `main`. No new GitHub release tag was published today. Overall, the project looks healthy — release integration is moving fast, with clear focus on DSH maturity, Windows reliability, and library interaction polish.

### 2. Releases

No new releases were published in the last 24 hours.

However, PR [#2519](https://github.com/netease-youdao/LobsterAI/pull/2519) merged the `release/2026.8.21` branch into `main`, indicating that the next release is in preparation. It updates the experimental DeepSeek Harness runtime to `0.1.1-rc.1`, improves Windows integration reliability, and adds privacy-conscious usage analytics for DSH enablement and workbench usage.

### 3. Project Progress

Merged/closed PRs today grouped by theme:

**Release integration**
- [#2519 Release: 2026.8.21](https://github.com/netease-youdao/LobsterAI/pull/2519) — Merged `release/2026.8.21` into `main`, containing related PRs #2515, #2516, #2518.

**DSH / DeepSeek Harness**
- [#2516 feat: update dsh to 0.1.1-rc.1](https://github.com/netease-youdao/LobsterAI/pull/2516) — Bumps the experimental DSH runtime.
- [#2515 feat(dsh): add usage analytics for enable toggle and workbench open](https://github.com/netease-youdao/LobsterAI/pull/2515) — Tracks DSH enablement and workbench open attempts with fire-and-forget analytics.
- [#2518 refactor(dsh): move usage analytics reporting from main to renderer](https://github.com/netease-youdao/LobsterAI/pull/2518) — Moves analytics event building from IPC handlers to a renderer-side service to reduce main-process coupling.

**Library / Artifact UX**
- [#2517 fix(library): 完善文件分享与收藏交互](https://github.com/netease-youdao/LobsterAI/pull/2517) — Improves file sharing/favorites: Unicode filename preservation, better favorite-state updates, rollback on failure, and unified modal styling.
- [#2514 feat(library): 优化本地产物预览与操作体验](https://github.com/netease-youdao/LobsterAI/pull/2514) — Optimizes local artifact preview sizing, removes delete-related entries, splits empty vs. no-search-result states, and adds search clear buttons.
- [#2513 Feat/2026.8.17 library](https://github.com/netease-youdao/LobsterAI/pull/2513) — Merged library feature branch into main.

**Bug fixes / performance (closed as stale after long inactivity)**
- [#1215 fix(im): always rebuild chat handler on setConfig](https://github.com/netease-youdao/LobsterAI/pull/1215) — Fixes stale chat handler when platform-specific config saves don’t include a `settings` key.
- [#1218 fix(定时任务): 重构任务列表排序规则](https://github.com/netease-youdao/LobsterAI/pull/1218) — Sorts scheduled tasks predictably instead of relying on random UUID order.
- [#1219 perf(cowork): 消除会话列表和详情页的无效重渲染](https://github.com/netease-youdao/LobsterAI/pull/1219) — Adds `React.memo` and reduces Redux selectors to prevent unnecessary rerenders.
- [#1220 perf(cowork): 消除 recentChats/conversationSearch 的 N+1 查询](https://github.com/netease-youdao/LobsterAI/pull/1220) — Eliminates N+1 query patterns when fetching latest message summaries.
- [#1224 fix(agent): 修复 i18n 硬编码、Escape 键支持及删除防重复点击](https://github.com/netease-youdao/LobsterAI/pull/1224) — Fixes hardcoded Chinese labels, adds Escape-to-close in agent modals, and adds delete double-click protection.

### 4. Community Hot Topics

Only two issues were updated in the last 24 hours, both closed and both with 2 comments and 0 reactions — engagement is low, but these are the only active discussion points:

- [#1217 [stale] 【bug】运行过程中偶发启动网关](https://github.com/netease-youdao/LobsterAI/issues/1217) — Users report intermittent gateway restarts happening 3–5 times per day on Windows 10. Underlying need: **stability and background-process reliability**.
- [#1223 [stale] [Bug] CoworkPromptInput 硬编码中文标签 + Agent 弹窗 UX](https://github.com/netease-youdao/LobsterAI/issues/1223) — Reports hardcoded Chinese text breaking English UX, missing Escape-key support, and no delete double-click protection. Underlying need: **i18n quality and standard desktop interaction patterns**. This issue was fixed by PR [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224).

No PRs had notable comment/reaction activity in this window.

### 5. Bugs & Stability

Ranked by severity:

1. **Intermittent gateway restarts** — [#1217](https://github.com/netease-youdao/LobsterAI/issues/1217)  
   User on Windows 10 experienced gateway restarts several times per day, disrupting normal use. The issue was closed as stale with no linked fix. This remains the highest-risk unresolved user-facing stability concern.

2. **Hardcoded Chinese labels and agent modal UX bugs** — [#1223](https://github.com/netease-youdao/LobsterAI/issues/1223)  
   English users saw `输入文件` mixed into AI prompts; agent modals lacked Escape-key close and delete-click protection. Fixed by [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224).

3. **Stale IM chat handler after platform-specific config saves** — [#1215](https://github.com/netease-youdao/LobsterAI/pull/1215)  
   Saving DingTalk/Telegram credentials without a `settings` key prevented the chat handler from rebuilding, so systemPrompt/sk changes were not applied. Fix closed.

4. **Scheduled task list ordering** — [#1218](https://github.com/netease-youdao/LobsterAI/pull/1218)  
   New tasks randomly appeared in the middle of the list due to UUID-based sorting. Fix merged/closed.

5. **Cowork performance issues** — [#1219](https://github.com/netease-youdao/LobsterAI/pull/1219), [#1220](https://github.com/netease-youdao/LobsterAI/pull/1220)  
   Unnecessary rerenders and N+1 queries caused visible sluggishness during streaming output and message updates. Both fixes closed.

### 6. Feature Requests & Roadmap Signals

No new feature-request issues were opened, but merged PRs reveal clear roadmap direction:

- **DeepSeek Harness (DSH) is maturing** — updating to `0.1.1-rc.1` and adding usage analytics suggests the experimental feature is preparing for broader rollout.
- **Library/artifact management is an active focus** — multiple PRs landed improving file sharing, favorites, preview dialogs, and empty-state UX.
- **Analytics architecture is being refined** — moving reporting to the renderer suggests a privacy-conscious and maintainable analytics approach.

Likely next version content: the `2026.8.21` release branch already contains DSH updates, Windows integration fixes, and library UX improvements. The open PR [#1550](https://github.com/netease-youdao/LobsterAI/pull/1550) fixing “no notification” scheduled tasks is also a candidate for a near-future release.

### 7. User Feedback Summary

Reported user pain points from recent issues and stale-closed items:

- **Windows stability concerns**: Intermittent gateway restarts are disruptive and appear unresolved ([#1217](https://github.com/netease-youdao/LobsterAI/issues/1217)).
- **Internationalization gaps**: Chinese text appearing in English UI is a direct UX regression for non-Chinese users ([#1223](https://github.com/netease-youdao/LobsterAI/issues/1223)).
- **Desktop interaction expectations**: Users expect Escape-key close behavior and protection against accidental double deletes.
- **Task management predictability**: Scheduled tasks appearing in random order made it hard to track recently created or enabled tasks ([#1218](https://github.com/netease-youdao/LobsterAI/pull/1218)).
- **Performance during streaming**: Cowork session list and detail pages suffered from avoidable rerenders and redundant queries ([#1219](https://github.com/netease-youdao/LobsterAI/pull/1219), [#1220](https://github.com/netease-youdao/LobsterAI/pull/1220)).

Satisfaction signal: Most of the UX/perf/i18n issues have corresponding fix PRs, which is good. However, the stale closure of the gateway restart issue without an identified fix is a potential dissatisfaction point.

### 8. Backlog Watch

- **[#1550 [OPEN] fix(scheduledTask): 投递模式为“不通知”时，去除发送给网关的 channel/to 字段](https://github.com/netease-youdao/LobsterAI/pull/1550)**  
  This is the only open PR. It fixes a real runtime validation error — `"Channel is required when multiple channels are configured"` — for scheduled tasks created via chat/IM when delivery mode is set to “no notification.” The PR includes a clear root-cause analysis. It was created on April 7 and last updated August 21, so it is at risk of becoming stale. It deserves maintainer review and likely merge.

No other open issues or PRs currently need maintainer attention.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-22

## 1. Today's Overview

Moltis saw moderate-to-high activity in the last 24 hours: 2 open issues were updated, 8 pull requests received updates, and 1 PR was closed. No new release was published. The current work is focused on reliability fixes and hardening across connectors, scheduling, browser tooling, i18n, and web sandbox security. Two new user-facing bugs were reported, both related to configuration or channel-context behavior. Overall, project health looks strong, with multiple active contributors and maintainer attention on recently opened PRs.

## 2. Releases

No new releases were published in the last 24 hours, so there are no changelog entries, breaking changes, or migration notes to report for this digest period.

## 3. Project Progress

- **Closed PR [#1220](https://github.com/moltis-org/moltis/issues/1220): `fix(whatsapp): render Markdown in outbound messages`** — The only closed PR today. It converts model-generated Markdown to WhatsApp-native markup before outbound delivery, while preserving the original Markdown in session history and web UI.
- **Open PR [#1208](https://github.com/moltis-org/moltis/pull/1208): `fix(cron): honor heartbeat active hours when the scheduler fires`** — Continued activity on a fix for the heartbeat scheduling bug; it directly addresses issue #1205 and is related to newly reported issue #1223.
- Multiple open PRs were updated, indicating active development on WhatsApp file persistence, Obscura stealth mode, cron delivery routing, zh-TW translations, and web sandbox validation.

## 4. Community Hot Topics

No issues or PRs in this dataset show explicit comments or reactions, so attention is inferred from recency and linked context.

- **[Issue #1224: Tools stop working in shared Slack channels](https://github.com/moltis-org/moltis/issues/1224)** — New bug report about tool failures in shared Slack channels. This is likely a high-impact collaboration scenario for team deployments.
- **[Issue #1223: heartbeat active_hours has no effect on a default config](https://github.com/moltis-org/moltis/issues/1223)** — New bug report on heartbeat scheduling configuration; a fix PR already exists at [#1208](https://github.com/moltis-org/moltis/pull/1208).
- **[PR #1228: persist inbound files for local tools](https://github.com/moltis-org/moltis/pull/1228)** — Shows user demand for stable local file paths when using WhatsApp documents/photos with local tools.

Underlying needs include better messaging-channel compatibility, predictable scheduled execution, and seamless file handling from chat connectors to local tooling.

## 5. Bugs & Stability

Ranked by estimated user impact:

1. **[Issue #1224: Tools stop working in shared Slack channels](https://github.com/moltis-org/moltis/issues/1224)** — High severity. A regression/behavioral bug that breaks tool invocation in shared Slack channels. No linked fix PR yet.
2. **[Issue #1223: heartbeat active_hours has no effect on a default config](https://github.com/moltis-org/moltis/issues/1223)** — Medium severity. The `active_hours` scheduling window never suppresses heartbeat execution, including the default configuration. A fix is already proposed in PR [#1208](https://github.com/moltis-org/moltis/pull/1208).

No crashes or security regressions were reported in the last 24 hours.

## 6. Feature Requests & Roadmap Signals

Several open PRs point to likely upcoming capabilities:

- **WhatsApp inbound file persistence** — [#1228](https://github.com/moltis-org/moltis/pull/1228) would give local tools stable `local_path` access to inbound WhatsApp media, with a 20 MB limit.
- **Obscura stealth mode by default** — [#1227](https://github.com/moltis-org/moltis/pull/1227) would enable `--stealth` by default and add a configurable `tools.browser.obscura_stealth` option.
- **Cron output delivery to originating chat** — [#1226](https://github.com/moltis-org/moltis/pull/1226) would route scheduled job output back to the chat that created the schedule.
- **Web sandbox image validation** — [#1222](https://github.com/moltis-org/moltis/pull/1222) would validate image references/package names and restrict builds to operator admins.
- **Windows shell hook support** — [#468](https://github.com/moltis-org/moltis/pull/468) would replace `sh -c` with `cmd.exe /C` on Windows.

The next version is likely to include WhatsApp reliability improvements, cron/heartbeat fixes, browser stealth defaults, and continued i18n polish.

## 7. User Feedback Summary

- A user reported that tools "stop working" in shared Slack channels, indicating a real disruption for collaborative Slack workspaces. See [#1224](https://github.com/moltis-org/moltis/issues/1224).
- A user reported that `heartbeat.active_hours` has no effect, even with documented defaults, meaning background scheduling cannot be restricted as expected. See [#1223](https://github.com/moltis-org/moltis/issues/1223).
- Contributor activity shows strong community investment: multiple PRs were authored to fix WhatsApp, cron, web sandbox, and Windows issues proactively.

Overall, users are pushing for better cross-platform behavior, predictable scheduling, and smoother chat-to-tool workflows.

## 8. Backlog Watch

- **[PR #468: fix(plugins): use cmd.exe on Windows for shell hooks](https://github.com/moltis-org/moltis/pull/468)** — Open since 2026-03-23 and still awaiting maintainer action. This PR fixes Windows shell hook execution, which currently fails because `sh -c` is not available. It was updated as recently as 2026-08-21, but has been open for roughly five months and deserves review/merge attention.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-22

> Data source: GitHub activity for CoPaw / QwenPaw (links point to `agentscope-ai/QwenPaw`).

## 1. Today's Overview

CoPaw showed high activity over the last 24 hours: **34 issues updated** (19 open/active, 15 closed) and **36 PRs updated** (21 open, 15 merged/closed). No release was published, but [PR #7200](https://github.com/agentscope-ai/QwenPaw/pull/7200) closed with a version bump to **v2.1.1b2**, indicating a new release candidate is being prepared. The issue tracker is currently weighted toward **v2.1 / v2.1.1-beta regressions** — including a `/compact` validation failure, tool-call 404s, embedding health-check timeouts, and MCP session recovery problems — while the PR queue contains substantial new feature work (self-hosted Hub, Creator 1.1.0, DingTalk group context). Maintainers are actively merging fixes and features, but several high-severity bugs remain open without a clearly linked fix PR.

## 2. Releases

**No new releases in the last 24 hours.**

The closest signal is [PR #7200](https://github.com/agentscope-ai/QwenPaw/pull/7200), a closed version-bump to `v2.1.1b2`, which suggests a new beta/stable build is imminent.

## 3. Project Progress

Notable merged/closed PRs in the last 24 hours:

- [PR #7112 — feat(hub): add self-hosted multi-user Hub with local and Docker runtimes](https://github.com/agentscope-ai/QwenPaw/pull/7112)  
  Adds an opt-in self-hosted control plane for running isolated QwenPaw App instances, with local and Docker runtimes. This is a major deployment/enterprise feature.

- [PR #7176 — perf(console): keep long chat sessions responsive](https://github.com/agentscope-ai/QwenPaw/pull/7176)  
  Reduces repeated Markdown parsing and other streaming/scroll bottlenecks in long conversations.

- [PR #7205 — test(coverage): fix Windows integration coverage always reading 0](https://github.com/agentscope-ai/QwenPaw/pull/7205)  
  Fixes silent CI coverage collection failures on Windows and adds a fail-closed guard.

- [PR #7200 — chore: bump the version to v2.1.1b2](https://github.com/agentscope-ai/QwenPaw/pull/7200)  
  Release preparation.

Ongoing feature PRs being advanced include [PR #7167 (Creator 1.1.0)](https://github.com/agentscope-ai/QwenPaw/pull/7167), [PR #7190 (qwenpaw-data PyPI runtime/demo)](https://github.com/agentscope-ai/QwenPaw/pull/7190), and [PR #7208 (DingTalk shared session context)](https://github.com/agentscope-ai/QwenPaw/pull/7208).

## 4. Community Hot Topics

Most active issues by comment count:

- [#6524 — MCP backend restart does not auto-recover; requires `list mcp` to reconnect](https://github.com/agentscope-ai/QwenPaw/issues/6524) — **6 comments**  
  Users need resilient MCP session handling; after a remote MCP server restarts, QwenPaw keeps using a stale `mcp-session-id` and cannot re-enumerate tools automatically.

- [#6780 — v2.0.1 process freezes after idle period; only restarting helps](https://github.com/agentscope-ai/QwenPaw/issues/6780) — **4 comments**, closed  
  Desktop idle-stability complaint, likely related to background resource cleanup / connection keepalive.

- [#7016 — Tool call returns 404 during streaming sessions](https://github.com/agentscope-ai/QwenPaw/issues/7016) — **3 comments**  
  `/api/tool-calls/{session_id}/{tool_call_id}/offload` responds `Tool call not found` during streaming, suggesting a tool-call lifecycle/state mismatch.

- [#7156 — Embedding health check times out even when the backend is warm; timeout hardcoded](https://github.com/agentscope-ai/QwenPaw/issues/7156) — **3 comments**  
  Users want configurable health-check timeouts and better warm-backend detection.

No reaction data was available in the provided snapshot (`👍` values were 0 for the sampled issues).

## 5. Bugs & Stability

Ranked roughly by severity:

### High severity

- [#7206 — v2.1.1-beta.1: manual `/compact` always fails with pydantic ValidationError when `compact_threshold_ratio == 0.9`](https://github.com/agentscope-ai/QwenPaw/issues/7206)  
  Confirmed regression on v2.1.1-beta.1; works on v2.1.0. No linked fix PR yet.

- [#7016 — Tool call 404 during streaming sessions](https://github.com/agentscope-ai/QwenPaw/issues/7016)  
  Breaks tool execution flow in streamed conversations. No fix PR linked.

- [#7193 — Memory search leaks into another session of the same agent](https://github.com/agentscope-ai/QwenPaw/issues/7193)  
  Agent “remembers” content from a different conversation and starts acting on the wrong task. This is both a correctness and privacy concern.

- [#6430 — Startup hang ~85 seconds on desktop](https://github.com/agentscope-ai/QwenPaw/issues/6430)  
  Desktop background startup consistently stalls; unresolved since July 24.

- [#6427 — WebView2 renderer crash ~7 seconds after desktop app launch](https://github.com/agentscope-ai/QwenPaw/issues/6427)  
  Deterministic crash in `msedge.dll` on v2.0.0+post.4; app window becomes blank. Unresolved since July 24.

### Medium severity

- [#7168 — `history.db` bloat to 7.6 GB caused by recall_history expand duplication](https://github.com/agentscope-ai/QwenPaw/issues/7168) — closed  
  Root-caused to `ToolResultCapMiddleware` writing full tool output into `conversation_history`; duplicate interval writes also occur. No fix PR appears in the sampled set.

- [#7156 — Embedding health check timeout hardcoded; warm backend still fails](https://github.com/agentscope-ai/QwenPaw/issues/7156)  
  Causes silent degradation to BM25-only retrieval.

- [#6524 — MCP backend restart requires manual `list mcp` to reconnect](https://github.com/agentscope-ai/QwenPaw/issues/6524)  
  Session recovery should be automatic.

- [#7136 — Non-ASCII (Chinese) filenames shown percent-encoded in file cards](https://github.com/agentscope-ai/QwenPaw/issues/7136)  
  Display bug in `send_file_to_user` file cards.

### Lower severity / edge cases

- [#7199 — `daily_paper` crashes on PDFs with surrogate characters U+D800–U+DFFF](https://github.com/agentscope-ai/QwenPaw/issues/7199)
- [#7197 — MCP tool authorization rules cannot select a custom channel plugin](https://github.com/agentscope-ai/QwenPaw/issues/7197)

## 6. Feature Requests & Roadmap Signals

Strong user demand for UX control and unattended-operation improvements:

- [#7203 — Option to hide tool-call information](https://github.com/agentscope-ai/QwenPaw/issues/7203)
- [#7196 — Option to default-collapse reasoning traces](https://github.com/agentscope-ai/QwenPaw/issues/7196)
- [#7198 — Approval should not be required for operations on process artifacts created during the session](https://github.com/agentscope-ai/QwenPaw/issues/7198)
- [#7201 — Per-provider `max_image_bytes` / `max_video_bytes` / `max_audio_bytes` settings](https://github.com/agentscope-ai/QwenPaw/issues/7201)
- [#7204 — Better support/docs for adding custom tools](https://github.com/agentscope-ai/QwenPaw/issues/7204)
- [#7195 — Desktop fullscreen chat window hidden behind taskbar icons](https://github.com/agentscope-ai/QwenPaw/issues/7195)

Likely candidates for the next version based on open PR momentum:

- [PR #5992 — Per-session model overrides](https://github.com/agentscope-ai/QwenPaw/pull/5992)
- [PR #7208 — DingTalk shared session context in group chats](https://github.com/agentscope-ai/QwenPaw/pull/7208)
- [PR #7207 — Token usage attribution by agent](https://github.com/agentscope-ai/QwenPaw/pull/7207)
- [PR #6976 — Session-scoped multi project directories](https://github.com/agentscope-ai/QwenPaw/pull/6976)
- [PR #6607 — Global-hotkey floating quick-input window](https://github.com/agentscope-ai/QwenPaw/pull/6607)
- [PR #6399 — Reranker UI configuration panel](https://github.com/agentscope-ai/QwenPaw/pull/6399)

## 7. User Feedback Summary

User feedback in the last 24 hours centers on **stability, unattended operation, and UI distraction**:

- **Unattended/overnight workflows are painful**: approval prompts interrupt agents even for intermediate/process artifacts; users want smarter approval gating ([#7198](https://github.com/agentscope-ai/QwenPaw/issues/7198)).
- **Visual noise**: tool-call and reasoning output is considered distracting for normal work; users want collapse/display settings ([#7203](https://github.com/agentscope-ai/QwenPaw/issues/7203), [#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196)).
- **Memory contamination is confusing**: one user reported an agent switching to another session’s task after memory search ([#7193](https://github.com/agentscope-ai/QwenPaw/issues/7193)).
- **Desktop reliability complaints persist**: idle freezes ([#6780](https://github.com/agentscope-ai/QwenPaw/issues/6780)), startup hangs ([#6430](https://github.com/agentscope-ai/QwenPaw/issues/6430)), and fullscreen overlay issues ([#7195](https://github.com/agentscope-ai/QwenPaw/issues/7195)).
- **Power users want less restrictive file handling**: older feature requests about unlimited Windows uploads and history sorting by recent activity remain echoed in closed issues ([#4854](https://github.com/agentscope-ai/QwenPaw/issues/4854), [#4816](https://github.com/agentscope-ai/QwenPaw/issues/4816)).

Overall, users are pushing CoPaw/QwenPaw toward **more controllable, quieter, and more autonomous** agent behavior.

## 8. Backlog Watch

Issues/PRs that have been open for a while and likely need maintainer attention:

- [#6427 — WebView2 crash on desktop startup](https://github.com/agentscope-ai/QwenPaw/issues/6427)  
  Open since **July 24**, updated but no resolution visible.

- [#6430 — Startup hang ~85s](https://github.com/agentscope-ai/QwenPaw/issues/6430)  
  Open since **July 24**, no fix linked.

- [#6524 — MCP backend restart requires manual `list mcp`](https://github.com/agentscope-ai/QwenPaw/issues/6524)  
  Most-commented open issue; no linked fix PR in the sampled data.

- [PR #5992 — Add per-session model overrides](https://github.com/agentscope-ai/QwenPaw/pull/5992)  
  Under review since **July 12**, still open.

- [PR #6399 — Reranker UI configuration panel](https://github.com/agentscope-ai/QwenPaw/pull/6399)  
  Under review since **July 23**, still open.

- [PR #6515 — Volcengine Agent Plan & MiMo V2.5 providers refresh](https://github.com/agentscope-ai/QwenPaw/pull/6515)  
  Under review since **July 28**, still open.

These long-pending items are worth prioritizing, especially the desktop crash/hang issues and the MCP session-recovery problem, because they directly affect core usability and unattended agent reliability.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-22

## 1. Today's Overview

ZeroClaw remains highly active: **50 issues** and **50 PRs** were updated in the 24-hour window ending 2026-08-22. All 50 updated issues remain open; no issues were closed. PR throughput was modest — **48 PRs are open and 2 are merged/closed** — but no new release was published. The update stream is dominated by security/sandbox policy work, ACP/session persistence, context-window behavior, and ZeroCode UI fixes. Several S0/S1 bugs are still awaiting fix PRs, and a noticeable number of older high-risk PRs remain blocked on author action.

## 2. Releases

No releases were published in this window.

---

## 3. Project Progress

- **Merged/closed PRs:** 2 PRs closed or merged in the last 24h, but the provided sample does not identify them, so no specific merged feature can be confirmed from this data.
- **Notable open PRs that advanced/updated in this window:**
  - [feat(sop): add a collision-checked atomic SOP rename flow #10233](https://github.com/zeroclaw-labs/zeroclaw/pull/10233)
  - [feat(android): add native tools and standalone app #10205](https://github.com/zeroclaw-labs/zeroclaw/pull/10205)
  - [fix(runtime): enforce independent delegate approval policy #10188](https://github.com/zeroclaw-labs/zeroclaw/pull/10188)
  - [fix(acp): persist interrupted turn progress #10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197)
  - [fix(channels): mark Google TTS API key header sensitive #10191](https://github.com/zeroclaw-labs/zeroclaw/pull/10191)
  - [docs(maintainers): calibrate risk review policy #10192](https://github.com/zeroclaw-labs/zeroclaw/pull/10192)

---

## 4. Community Hot Topics

The most-commented issues in the sample each have **3 comments**:

- [Issue #10165 — independent delegate bypasses `block_high_risk_commands` on its own risk profile](https://github.com/zeroclaw-labs/zeroclaw/issues/10165)  
  Security-critical: a delegate can run `rm` despite `block_high_risk_commands = true`.

- [Issue #10074 — SECURITY.md documents a CI job that was removed in April](https://github.com/zeroclaw-labs/zeroclaw/issues/10074)  
  Documentation drift around container security enforcement.

- [Issue #10068 — interactive agent session caps context at 32,000 tokens, ignoring configured `max_context_tokens = 131072`](https://github.com/zeroclaw-labs/zeroclaw/issues/10068)  
  Users are hitting context truncation far below configured limits.

- [Issue #10066 — SOP engine promotes and runs later steps before recording output-schema rejection](https://github.com/zeroclaw-labs/zeroclaw/issues/10066)  
  Workflow correctness issue: rejected output still allows later steps to execute.

- [Issue #10059 — support Option-Backspace word deletion in ZeroCode text inputs](https://github.com/zeroclaw-labs/zeroclaw/issues/10059)  
  macOS UX parity request for the ZeroCode UI.

Underlying themes: users are actively testing security boundaries, long-running agent workflows, and ZeroCode editor UX. No reaction counts were available in the snapshot.

---

## 5. Bugs & Stability

Ranked by severity:

### S0 — Critical / data loss / security risk

- [Issue #10165 — independent delegate bypasses `block_high_risk_commands`](https://github.com/zeroclaw-labs/zeroclaw/issues/10165)  
  High-risk commands succeed through an independent delegate even when its risk profile blocks them.  
  **Related fix PR:** [fix(runtime): enforce independent delegate approval policy #10188](https://github.com/zeroclaw-labs/zeroclaw/pull/10188)

- [Issue #10121 — partial Code/ACP turns disappear if the process exits before completion](https://github.com/zeroclaw-labs/zeroclaw/issues/10121)  
  Streamed assistant text and tool activity can be lost.  
  **Related fix PR:** [fix(acp): persist interrupted turn progress #10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197)

### S1 — Workflow blocked

- [Issue #10066 — SOP engine runs later steps before recording output-schema rejection](https://github.com/zeroclaw-labs/zeroclaw/issues/10066)
- [Issue #10230 — Quickstart stack overflow](https://github.com/zeroclaw-labs/zeroclaw/issues/10230)
- [Issue #10061 — provider-rejected image poisons later turns in a vision-capable session](https://github.com/zeroclaw-labs/zeroclaw/issues/10061)
- [Issue #10042 — MSRV system dependency installation can consume job timeout](https://github.com/zeroclaw-labs/zeroclaw/issues/10042)

### S2 — Degraded behavior / security hardening

- [Issue #10164 — `block_high_risk_commands = false` not honored for allowlisted `rm` on parent path](https://github.com/zeroclaw-labs/zeroclaw/issues/10164)
- [Issue #10068 — context capped at 32k despite 131k configured limit](https://github.com/zeroclaw-labs/zeroclaw/issues/10068)
- [Issue #10175 — Google TTS API key header not marked sensitive](https://github.com/zeroclaw-labs/zeroclaw/issues/10175)  
  **Related fix PR:** [fix(channels): mark Google TTS API key header sensitive #10191](https://github.com/zeroclaw-labs/zeroclaw/pull/10191)
- [Issue #10116 — oversized tool results cut byte-wise middle-out](https://github.com/zeroclaw-labs/zeroclaw/issues/10116)
- [Issue #10115 — tool-result truncation invisible outside model context](https://github.com/zeroclaw-labs/zeroclaw/issues/10115)
- [Issue #10114 — `max_tool_result_chars` fixed at 50,000 default, unrelated to model context window](https://github.com/zeroclaw-labs/zeroclaw/issues/10114)

---

## 6. Feature Requests & Roadmap Signals

Accepted or actively discussed features in the current window:

- [Feature #10166 — default `stream_mode` to `partial` so replies stream by default](https://github.com/zeroclaw-labs/zeroclaw/issues/10166)
- [Feature #10168 — enable stall watchdog by default](https://github.com/zeroclaw-labs/zeroclaw/issues/10168)
- [Task #10162 — make plugin install + config-entry seeding recoverable](https://github.com/zeroclaw-labs/zeroclaw/issues/10162)
- [Task #10073 — retire `StoragePolicy::Rolling`; extend `/api/logs` to query segment files](https://github.com/zeroclaw-labs/zeroclaw/issues/10073)
- [Feature #10140 — iMessage channel should transcribe inbound voice messages](https://github.com/zeroclaw-labs/zeroclaw/issues/10140)
- [Feature #10086 — make ZeroCode Logs text selectable and copyable](https://github.com/zeroclaw-labs/zeroclaw/issues/10086)
- [Feature #10059 — Option-Backspace word deletion in ZeroCode](https://github.com/zeroclaw-labs/zeroclaw/issues/10059)
- [Bug #10058 — ZeroCode file explorer search ignores row/page navigation](https://github.com/zeroclaw-labs/zeroclaw/issues/10058)

Likely next-version candidates if current PRs land: **security policy hardening for delegates (#10188)**, **ACP interrupted-turn persistence (#10197)**, **streaming-by-default (#10166)**, and **selectable ZeroCode logs (#10096)**.

---

## 7. User Feedback Summary

Users are reporting concrete, real-world friction:

- **Security policy confusion:** delegates can bypass high-risk command blocks ([#10165](https://github.com/zeroclaw-labs/zeroclaw/issues/10165)), while allowlisted commands can still be hard-blocked on the parent path ([#10164](https://github.com/zeroclaw-labs/zeroclaw/issues/10164)).
- **Context handling frustration:** interactive sessions truncate at 32k tokens even when configured for 131k ([#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068)).
- **Data loss risk:** interrupted Code/ACP turns can erase visible progress ([#10121](https://github.com/zeroclaw-labs/zeroclaw/issues/10121)).
- **Channel gaps:** iMessage voice messages are silently dropped ([#10140](https://github.com/zeroclaw-labs/zeroclaw/issues/10140)).
- **ZeroCode UX:** logs are not selectable/copyable ([#10086](https://github.com/zeroclaw-labs/zeroclaw/issues/10086)), stale plans persist across session switches ([#10062](https://github.com/zeroclaw-labs/zeroclaw/issues/10062)), and search-mode navigation is broken ([#10058](https://github.com/zeroclaw-labs/zeroclaw/issues/10058)).

No explicit satisfaction metrics are present in the snapshot; all sampled issues show 0 👍 reactions.

---

## 8. Backlog Watch

Long-open or blocked PRs that likely need maintainer or author attention:

- [PR #9110 — fix(lark): use `constant_time_eq` for `verification_token` comparison](https://github.com/zeroclaw-labs/zeroclaw/pull/9110)  
  Open since **2026-07-17**, `needs-maintainer-review`, `stale-candidate`, risk:high, size:XS.

- [PR #9319 — refactor(runtime): seal the engine tool registry as ScopedToolRegistry](https://github.com/zeroclaw-labs/zeroclaw/pull/9319)  
  Open since **2026-07-23**, risk:high, size:XL.

- [PR #9563 — fix(channels): populate the typed media envelope from Telegram](https://github.com/zeroclaw-labs/zeroclaw/pull/9563)  
  Open since **2026-07-30**, `needs-author-action`, `stale-candidate`.

- [PR #9574 — fix(channels): authorize approval responders](https://github.com/zeroclaw-labs/zeroclaw/pull/9574)  
  Open since **2026-07-31**, `needs-author-action`, risk:high, size:L.

- [PR #9678 — fix(config): harden Git shell policy arguments](https://github.com/zeroclaw-labs/zeroclaw/pull/9678)  
  Open since **2026-08-02**, `needs-author-action`, risk:high, size:XL.

- [PR #9707 — fix(config): migrate bare `vision_model_provider` to dotted alias ref](https://github.com/zeroclaw-labs/zeroclaw/pull/9707)  
  Open since **2026-08-03**, `needs-author-action`.

- [PR #9837 — perf(skills): digest only the bytes a skill load decision can observe](https://github.com/zeroclaw-labs/zeroclaw/pull/9837)  
  Open since **2026-08-07**, `needs-author-action`, risk:high, size:S.

These items represent a mix of long-running architecture work and security fixes that could become release blockers if not triaged soon.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*