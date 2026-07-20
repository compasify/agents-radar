# OpenClaw Ecosystem Digest 2026-07-20

> Issues: 353 | PRs: 500 | Projects covered: 12 | Generated: 2026-07-20 01:53 UTC

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

# OpenClaw Project Digest — 2026-07-20

## Today's Overview

OpenClaw shows **extremely high** community activity with 353 issues and 500 pull requests updated in the last 24 hours. Of these, 119 issues were closed and 156 PRs merged/closed, indicating a strong maintainer response cadence. The project has **no new releases** today, but an enormous volume of open work persists: 234 open/active issues and 344 open PRs. Security and session-state reliability dominate the conversation, with several high-impact regressions reported against the 2026.7.1 release. The project appears to be in an intense stabilization phase following a major release, with maintainers actively reviewing and merging fixes across channels, tools, and core agent infrastructure. A significant maintainer-driven initiative to reduce env-var surface area (tranche 4) and unify automation concepts around cron primitives is underway.

## Releases

**No new releases today.** The last release was v2026.7.1 (date unspecified), which is the version referenced in multiple regression reports. No migration notes or changelog entries applicable.

## Project Progress

**156 PRs were merged or closed** in the last 24 hours. Notable merged/closed items demonstrating forward progress:

- **[#108075]** — CLOSED: Regression where LLM request failed due to provider rejecting the schema or tool payload (v2026.7.1). Fix likely shipped.
- **[#108238]** — CLOSED: Chinese-language bug report about session context usage incorrectly counting `cacheRead` into `totalTokens`, causing false context overflow and compaction failures. Linked PR open.
- **[#89954]** — CLOSED: Telegram `getUpdates` 409 cascade after IPv6→IPv4 transport fallback causing rebuild loop.
- **[#72948]** — CLOSED: `openclaw gateway stop` returning "Gateway service disabled" without killing foreground-launched gateway.
- **[#111057]** — CLOSED: LINE channel media polling preservation fix when body cleanup fails.
- **[#81525]** — CLOSED: Media-understanding silently routing images to models without validating declared vision capabilities.
- **[#97021]** — CLOSED: Telegram typing indicator stuck in group forum/topic mode (regression).
- **[#87970]** — CLOSED: Gateway bind auto-configuration conflict with `auth.mode:none` causing exit 78 loop.
- **[#111344]** — CLOSED: Startup validation falsely reporting "missing register/activate" for `defineChannelPluginEntry` exports.

**Features and improvements** that advanced (open PRs with maintainer attention):
- **[#111583]** — Agent-controlled session status, attention, and TTL in sessions tool (maintainer-authored, size L)
- **[#111552]** — Persist MCP Apps as dashboard board widgets (maintainer, size XL)
- **[#111545]** — Localization consolidation and readiness (maintainer, size XL, RFC-backed)
- **[#107890]** — Make outbound hooks consistent for streamed replies (P1, across 4+ channels)

## Community Hot Topics

### Most Discussed Issues

1. **[#75 — Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)** — 114 comments, 80 👍
   - The **highest-reaction** and **most-commented** issue. Community strongly desires native desktop apps for non-macOS platforms. The gap between macOS/iOS/Android (which have apps) and Linux/Windows is a recurring pain point. This is a longstanding request (created Jan 2026) that continues to gather support without visible maintainer commitment.

2. **[#7707 — Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707)** — 17 comments
   - A security-forward feature to tag agent memory entries by trust level based on origin. Community is concerned about memory poisoning attacks via web scrapes and third-party skills. Classified as **🦞 diamond lobster** (high priority/impact).

3. **[#10659 — Masked Secrets](https://github.com/openclaw/openclaw/issues/10659)** — 14 comments, 4 👍
   - Agents can currently read raw API keys from `.env` files. Community wants a system where agents can *use* keys but not *see* them, preventing prompt injection credential extraction. This is a **P1** with **impact:security**.

4. **[#13583 — Pre-response enforcement hooks (hard gates)](https://github.com/openclaw/openclaw/issues/13583)** — 14 comments, 2 👍
   - High-stakes users (quant/finance, security) need mechanical enforcement of tool-call policies, not soft prompt instructions. Community wants the agent to be literally prevented from responding until mandatory tool calls complete.

5. **[#94846 — Cron isolated agentTurn skips delivery before dispatch](https://github.com/openclaw/openclaw/issues/94846)** — 12 comments
   - A cron scheduling bug where recovered early tool errors are fatally classified, preventing final output delivery. This is affecting automated workflows.

### Latest High-Engagement PRs

- **[#111586 — fix(gateway): bound TLS cert/key file reads with size limit](https://github.com/openclaw/openclaw/pull/111586)** — Newly created, security hardening
- **[#89040 — perf: avoid event-loop stall during embedded_run bootstrap-context](https://github.com/openclaw/openclaw/pull/89040)** — P1, addresses 14-22 second stalls causing message loss
- **[#110297 — fix(agents): avoid synthetic overflow in tool-heavy sessions](https://github.com/openclaw/openclaw/pull/110297)** — Maintainer-authored, fixes tool-heavy session compaction issues
- **[#111481 — fix(cloud-workers): reconcile workspace results across turns](https://github.com/openclaw/openclaw/pull/111481)** — Maintainer-authored, fixes multi-turn cloud worker consistency

## Bugs & Stability

### P1/P2 Regressions (v2026.7.1-related)

| Issue | Summary | Severity | Fix PR? |
|-------|---------|----------|---------|
| [#108580](https://github.com/openclaw/openclaw/issues/108580) | Cron tool schema incompatible with llama.cpp grammar-constrained tool calling (regression) | **High** - every chat request fails | No PR linked |
| [#102006](https://github.com/openclaw/openclaw/issues/102006) | Exec tool: aborted run wedges subsequent exec calls in same session (regression from PR #94412) | **High** - session-disabling | No PR linked |
| [#111519](https://github.com/openclaw/openclaw/issues/111519) | Telegram DM replies fall back after stale DM-scope cleanup in 2026.7.2-beta.3 | **High** - message loss | No PR linked |
| [#109490](https://github.com/openclaw/openclaw/issues/109490) | Codex app-server: turn interrupted after client-delegated message tool result — promised work never executes | **High** - work silently dropped | No PR linked |
| [#108075](https://github.com/openclaw/openclaw/issues/108075) | LLM request failed: provider rejected request schema/tool payload | **High** - CLOSED (fix shipped) | CLOSED |
| [#108238](https://github.com/openclaw/openclaw/issues/108238) | Session context usage mis-counts cacheRead → false overflow → compaction | **High** - CLOSED | CLOSED |

### Critical Session-State & Crash-Loop Bugs

| Issue | Summary | Impact |
|-------|---------|--------|
| [#99910](https://github.com/openclaw/openclaw/issues/99910) | Memory dreaming run pegs gateway event loop for ~10 min until killed; short-term recall store never persists | **Crash-loop, data loss** |
| [#70024](https://github.com/openclaw/openclaw/issues/70024) | Channel stop timeout leaves channel permanently dead (`running: true` with stale store entries) | **Permanent channel death** |
| [#85246](https://github.com/openclaw/openclaw/issues/85246) | UI Update button breaks Gateway when npm global + launchd (handoff deadlock) | **Gateway crash/hang** |
| [#83337](https://github.com/openclaw/openclaw/issues/83337) | Plugin/core version drift after upgrade causes silent channel failure | **Silent failure** |
| [#92405](https://github.com/openclaw/openclaw/issues/92405) | Subagent spawn persists raw provider instead of CLI runtime — depth-2 cold spawns silently die | **Workflow breakage** |
| [#39248](https://github.com/openclaw/openclaw/issues/39248) | `sandbox.mode: "non-main"` silently breaks `sessions_spawn` subagent initialization | **Silent failure** |

### Community-Reported Behavior Bugs

- **[#93139](https://github.com/openclaw/openclaw/issues/93139)** — Write tool and exec heredocs insert literal `\n` instead of newlines (string content escaping bug)
- **[#103198](https://github.com/openclaw/openclaw/issues/103198)** — WebChat image attachments not mapped to media store path — receives `image_0` instead of real file path
- **[#110065](https://github.com/openclaw/openclaw/issues/110065)** — `compaction.enabled` field read by code but rejected by config schema (config validation mismatch)
- **[#111506](https://github.com/openclaw/openclaw/issues/111506)** — `EmbeddedAttemptSessionTakeoverError`: rapid-fire requests cause session lock contention on heavy contexts (180+ messages with LM Studio)

## Feature Requests & Roadmap Signals

### Likely to Ship in Next Version (high community + maintainer investment)

1. **Memory Trust Tagging by Source** ([#7707](https://github.com/openclaw/openclaw/issues/7707)) — P2, heavy security review. Would be a foundational security improvement for multi-source agent memory.
2. **Masked Secrets** ([#10659](https://github.com/openclaw/openclaw/issues/10659)) — P1, security. Prevents prompt injection credential extraction. Very likely given security focus.
3. **Pre-response enforcement hooks (hard gates)** ([#13583](https://github.com/openclaw/openclaw/issues/13583)) — P2, directed at enterprise/regulated use cases.
4. **Denylist for exec-approvals** ([#6615](https://github.com/openclaw/openclaw/issues/6615)) — P2, 7 👍. Users want "allow everything except X" policies.

### Longer-Range Community Desires

| Feature | Issue | Type |
|---------|-------|------|
| Linux/Windows native apps | [#75](https://github.com/openclaw/openclaw/issues/75) | Platform expansion |
| Everything-is-a-cron unification | [#110950](https://github.com/openclaw/openclaw/issues/110950) | Architecture (maintainer-owned) |
| Skill Permission Manifest Standard | [#12219](https://github.com/openclaw/openclaw/issues/12219) | Security/trust |
| Intelligent Session Auto-Titling | [#99583](https://github.com/openclaw/openclaw/issues/99583) | UX |
| WhatsApp listen-only / hooks-only mode | [#78963](https://github.com/openclaw/openclaw/issues/78963) | Channel feature |
| Streaming TTS pipeline for voice calls | [#8355](https://github.com/openclaw/openclaw/issues/8355) | Voice calls |
| Config option to suppress sub-agent announce | [#8299](https://github.com/openclaw/openclaw/issues/8299) | UX |
| OpenRouter usage cost exposure | [#9016](https://github.com/openclaw/openclaw/issues/9016) | Observability |
| Group session consolidation | [#7524](https://github.com/openclaw/openclaw/issues/7524) | Session management |
| Expose session:end internal hook | [#10142](https://github.com/openclaw/openclaw/issues/10142) | Integration with Temporal/workflow orchestration |

### Maintainer-Signaled Roadmap

- **"Everything is a cron" unification** ([#110950](https://github.com/openclaw/openclaw/issues/110950)) — Authored by steipete (lead maintainer). Proposes unifying heartbeat, watchers, and scheduled automation around one cron primitive. This is a significant architectural change.
- **Env-var surface reduction** ([#111584](https://github.com/openclaw/openclaw/pull/111584)) — Tranche 4 of config cleanup, reducing from ~645 env vars (444 undocumented). Maintainer-driven quality initiative.
- **Agent-controlled session status** ([#111583](https://github.com/openclaw/openclaw/pull/111583)) — Maintainer-authored, enables agents to set status lines, request attention from users in sidebar.

## User Feedback Summary

### Pain Points

1. **Regression fatigue** — Multiple users report the v2026.7.1 release broke existing workflows. Specific complaints: LLM schema rejections ([#108075]), session context mis-counting ([#108238]), llama.cpp incompatibility ([#108580]), exec tool wedging ([#102006]), Telegram DM fallback ([#111519]).
2. **Silent failures are common** — Bugs where things silently fail without error messages: subagent spawns ([#39248]), channel death ([#70024]), plugin incompatibility ([#83337]).
3. **Browser automation quality** — Real-world field test ([#44431]) identified 7 blocker issues: no CSS selector support, slow scrolling, incorrect innerHTML reads, visibility-hidden elements, stealth detection, iframe handling, form fill failures.
4. **No reliable cross-platform desktop** — Users on Linux and Windows are left with CLI-only or no native experience ([#75]).
5. **Multi-line input in TUI** — Basic quality-of-life: Enter sends immediately instead of allowing Shift+Enter for multi-line prompts ([#10118]).

### Use Cases Driving Development

- **Enterprise/regulated workflows** — Financial, security operations: need hard enforcement gates ([#13583]), approval resolvers ([#97152])
- **Local-first personal assistants** — Users running on local hardware (LM Studio) hit session lock contention ([#111506]), need memory improvements ([#11955])
- **Automated cron workflows** — Scheduled agent runs are breaking under realistic conditions: subagent orchestration failures ([#92369]), delivery race conditions ([#94846])
- **Multi-channel support** — Users pushing for Telegram guest bots ([#79077]), WhatsApp hooks ([#78963]), LINE polling improvements ([#111057])

### Satisfaction Indicators

- **High engagement**: 500 PRs and 353 issues updated in 24h suggests an active, invested community
- **Strong maintainer response**: 156 closed/merged PRs in one day, numerous CLOSED bug reports
- **Maintainer-led quality push**: steipete and other maintainers actively authoring fixes and architectural cleanup
- **Detailed reporting**: Community provides reproduction steps, root cause analysis, and often suggests fixes in issues

## Backlog Watch

### Issues Needing Maintainer Attention (long-unanswered or stale)

| Issue | Created | Status | Why Watch |
|-------|---------|--------|-----------|
| [#75](https://github.com/openclaw/openclaw/issues/75) — Linux/Windows apps | 2026-01-01 | Open, 114 comments, 80 👍 | Highest-community-desired feature with zero visible maintainer action |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) — Memory Trust Tagging | 2026-02-03 | Open, 17 comments | P2, security, needs product decision and security review |
| [#12219](https://github.com/openclaw/openclaw/issues/12219) — Skill Permission Manifest | 2026-02-09 | Open, 6 comments | Critical for ecosystem trust, no activity |
| [#11955](https://github.com/openclaw/openclaw/issues/11955) — Memory/Context Improvements | 2026-02-08 | Open, 5 comments | Groups multiple related improvements, needs triage |
| [#6599](https://github.com/openclaw/openclaw/issues/6599) — `/models test-fallback` command | 2026-02-01 | Open, 6 comments | P3, but important for reliability; no maintainer decision |
| [#8355](https://github.com/openclaw/openclaw/issues/8355) — Streaming TTS for voice | 2026-02-03 | Open, 5 comments | Needs live repro + product decision |
| [#85246](https://github.com/openclaw/openclaw/issues/85246) — UI Update button breaks Gateway | 2026-05-22 | Stale, P1 | Gateway-crashing bug marked stale, needs live repro |
| [#92405](https://github.com/openclaw/openclaw/issues/92405) — Subagent spawn CLOSED but root issue unfixed | 2026-06-12 | Closed stale | May resurface; two unpatched call sites mentioned |

### PRs Needing Maintainer Review

| PR | Status | Why Watch |
|----|--------|-----------|
| [#110297](https://github.com/openclaw/openclaw/pull/110297) — fix(agents): avoid synthetic overflow | ⏳ waiting on author | Maintainer-authored fix for tool-heavy sessions, related to #107655, #107821 |
| [#107890](https://github.com/openclaw/openclaw/pull/107890) — fix: make outbound hooks consistent | ⏳ waiting on author | P1, across 4+ channels, affects message delivery |
| [#111481](https://github.com/openclaw/openclaw/pull/111481) — fix(cloud-workers): reconcile workspace results | 📣 needs proof | Maintainer-authored, fixes multi-turn cloud worker failures |
| [#111558](https://github.com/openclaw/openclaw/pull/111558) — fix(onboard): keep invalid wizard retries unpersisted | 📣 needs proof | P1, auth provider impact |

### Observability Concern

Several **P1 bugs** affecting session health are marked with `clawsweeper:needs-live-repro` — meaning the maintainers cannot reproduce them in testing. These include:
- [#85246](https://github.com/openclaw/openclaw/issues/85246) — UI Update + npm + launchd deadlock
- [#102006](https://github.com/openclaw/openclaw/issues/102006) — Exec tool wedging after abort
- [#39248](https://github.com/openclaw/openclaw/issues/39248) — Sandbox mode silent failure
- [#83337](https://github.com/openclaw/openclaw/issues/83337) — Plugin/core version drift
- [#92405](https://github.com/openclaw/openclaw/issues/92405) — Subagent spawn depth-2 cold deaths

These bugs affect real users but cannot be confirmed by maintainers, creating a risk of shipping unresolved regressions.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the provided community digest summaries.

---

## Cross-Project Comparison Report: AI Agent Open-Source Ecosystem
**Date:** 2026-07-20

### 1. Ecosystem Overview

The personal AI assistant and agent open-source landscape is characterized by intense, high-velocity development focused on stability and architectural maturity. The ecosystem is currently in a **post-major-release stabilization phase** for several core projects (OpenClaw, ZeroClaw), with maintainers actively addressing regressions while simultaneously pushing forward significant architectural refactors, such as capability-result collapses and channel self-containment. Community feedback is heavily weighted toward production reliability concerns—billing accuracy, silent failures, and session-state integrity—indicating a shift from experimental adoption to serious operational deployment. A strong emphasis on **extensibility** (MCP servers, plugin systems, standard hooks) and **security** (credential masking, trust tagging) defines the technical frontier across the board.

### 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Releases (24h) | Health Score & Rationale |
|---|---|---|---|---|
| **OpenClaw** | 353 | 500 | 0 | **Extremely High** — Massive throughput; high regression count but 156 PRs merged/closed signals strong maintainer response. |
| **ZeroClaw** | 33 | 50 | 0 | **Very High** — Heavy governance/architectural load (RFCs, trackers); 2 PRs merged; high open PR count (48) indicates bottleneck. |
| **IronClaw** | 5 | 50 | 0 | **Very High** — 33 PRs merged/closed; deep architectural refactoring (Reborn) driving a major version bump (0.24.0 → 0.29.1). |
| **NanoBot** | 6 | 30 | 0 | **High** — Good triage pace (9 merged); critical channel refactoring complete; overdue for a point release. |
| **NanoClaw** | 2 | 30 | 0 | **High** — 15 PRs merged; strong community contribution pipeline; major WhatsApp group encryption fixes shipped. |
| **Hermes Agent** | 50 | 50 | 0 | **High** — Rapid development; billing bugs are a pressing concern; healthy but growing backlog (44 open issues). |
| **CoPaw** | 12 | 5 | 0 | **Medium** — Very high engagement but low maintainer throughput (0 PRs merged); risk of user frustration from lagging fixes. |
| **PicoClaw** | 3 | 3 | 0 | **Low-Medium** — Review-and-triage day; no merges; two stale PRs (19 and 8 days) require attention. |
| **Moltis** | 1 | 1 | 1 (routine) | **Low-Medium** — Stable but quiet; low bug count is positive; long-standing feature request needs a maintainer decision. |
| **LobsterAI** | 3 | 3 | 0 | **Low** — Stale backlog (items from April); low activity suggests maintenance mode; security bug (#1287) is a red flag. |
| **NullClaw** | 0 | 0 | 0 | **Inactive** — No activity in 24 hours. |
| **ZeptoClaw** | 0 | 0 | 0 | **Inactive** — No activity in 24 hours. |

### 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Ecosystem Dominance:** With 353 issues and 500 PRs updated in 24 hours, OpenClaw has an order of magnitude more activity than any other project. Its community size and contribution velocity are unmatched.
- **Maintainer Cadence:** 156 PRs merged/closed and 119 issues closed in a single day demonstrates a highly responsive core team, despite the enormous volume.
- **Broad Feature Set:** The project is simultaneously addressing security (Masked Secrets, Trust Tagging), automation (cron unification), multi-channel support (WhatsApp, Telegram, LINE), and developer experience (env-var reduction, localization).

**Technical Approach Differences:**
- **"Everything is a cron" Architecture:** OpenClaw is moving toward unifying all automation (heartbeats, watchers, scheduled tasks) around a single cron primitive—a more opinionated and integrated approach compared to NanoBot’s or NanoClaw’s channel-centric modularity.
- **Agent-Controlled Session State:** The maintainer is actively developing features that give the agent itself control over its session status and attention (PR #111583), a step toward more autonomous agent behavior.

**Community Size Comparison:**
- OpenClaw is the clear leader in raw community engagement, dwarfing ZeroClaw, NanoBot, and Hermes Agent. However, this scale comes with a cost: **regression fatigue** is a recurring complaint, as the 2026.7.1 release introduced multiple high-impact bugs that are only now being closed.

### 4. Shared Technical Focus Areas

The following requirements are emerging across multiple projects, signaling industry-wide priorities:

- **Session-State Reliability:**
    - **OpenClaw:** False context overflow from `cacheRead` miscounting ([#108238]), exec tool wedging ([#102006]).
    - **ZeroClaw:** Confused deputy vulnerability in tool gating ([#7947]).
    - **IronClaw:** Crash-consistency testing caught two real defects (PR #6295).
    - **Hermes Agent:** Session costs resetting to $0 on gateway restart ([#67762]).

- **Security & Credential Hardening:**
    - **OpenClaw:** Masked Secrets ([#10659]), Memory Trust Tagging ([#7707]).
    - **ZeroClaw:** Abstract `KeySource` trait for master-key material (RFC #9127).
    - **Hermes Agent:** Billing bugs from cron jobs ignoring pause/stop ([#44585]).
    - **LobsterAI:** IM robot connectivity test passes with fake credentials ([#1287]).

- **Extensibility & MCP/Plugin Ecosystems:**
    - **NanoClaw:** Support for remote MCP servers over HTTP/SSE (PR #2847, #3092).
    - **ZeroClaw:** Moving channels & tools from compile-time features to runtime WASM plugins (RFC #8850).
    - **NanoBot:** Channel self-containment refactoring (PR #4908) to simplify third-party contributions.
    - **Hermes Agent:** MCP parked server revival fails to re-register tools ([#67187]).

- **Local Model Performance:**
    - **NanoBot:** Ollama prefix caching broken, adding 60s per turn ([#4867]).
    - **Hermes Agent:** LM Studio per-model context_length broken ([#30178]).
    - **ZeroClaw:** llama.cpp model router requested for quick local model switching ([#7539]).

- **Cross-Platform Desktop Experience:**
    - **OpenClaw:** Community desperately wants native Linux/Windows apps ([#75]).
    - **CoPaw:** Linux Tauri zoom broken ([#6252]); Windows system tray request ([#6264]).
    - **ZeroClaw:** Windows ZeroCode TUI won't start without setting env var ([#9117]).

### 5. Differentiation Analysis

| Project | Feature Focus | Target Users | Architectural Approach |
|---|---|---|---|
| **OpenClaw** | Full-stack agent OS (sessions, memory, channels, security, automation) | Advanced power users, self-hosters, automation engineers | Monolithic core with extensive config surface; moving toward cron unification |
| **ZeroClaw** | Memory subsystem redesign, governance RFCs, multi-agent protocols (ACP/MCP) | Enterprise / deployers needing strict access control, audit trails, observability | Heavily RFC-driven; modular with WASM plugin future; strong SOP/policy framework |
| **IronClaw** | "Reborn" architecture refactoring (capability-result collapse), local-dev DX | Developers contributing to the framework itself | Rust-based, deep compiler/architecture work; high barrier to entry but excellent tooling |
| **NanoBot** | Multi-channel reliability (WhatsApp, QQ, Telegram, WeChat), local model support | Community operators running agents on consumer hardware across chat platforms | Channel-centric, Python-based; strong focus on reducing friction for local/hobbyist use |
| **NanoClaw** | Rapid channel integration (Discord, Teams, WeChat, Telegram), MCP server ecosystem | Community contributors who want to add new channels quickly | High volume of community PRs; relaxed governance encourages contributions but risks quality |
| **Hermes Agent** | Billing accuracy, desktop (macOS) focus, kanban workflow, skill system | Individual developers, small teams, macOS users | Balanced between feature velocity and stability; responsive to billing/operational bugs |
| **CoPaw** | Performance (MCP parallelization), UI/UX (collapsible blocks, tray minimization) | Desktop app users (QwenPaw codebase) | Struggling with maintainer throughput vs. user demand; features are reactive to friction reports |
| **PicoClaw** | Narrow provider/routing fixes, small-scale pipeline | Niche users of Antigravity/Weixin/Anthropic providers | Low maintenance bandwidth; risk of bit-rot on open PRs |

### 6. Community Momentum & Maturity

**Tier 1: Rapidly Iterating (High Risk, High Reward)**
- **OpenClaw** — The "engine room" of the ecosystem. Massive volume, major regressions, but unmatched progress. **Maturity: Beta/Stabilizing.**
- **ZeroClaw** — Architectural evolution through governance RFCs. High coordination overhead but clear long-term vision. **Maturity: Late Beta / Release Candidate.**
- **IronClaw** — Deep refactoring with strong tests (chaos suite). Aiming for a clean v0.29.1 release. **Maturity: Advanced Development.**

**Tier 2: Stable Growth**
- **NanoBot** — Solid triage, channel refactoring complete, overdue for a point release. **Maturity: Stable.**
- **NanoClaw** — Community-driven channel expansion; strong contributor pipeline. **Maturity: Stable / Growing.**
- **Hermes Agent** — Active development with clear user feedback loops (billing, IME, desktop). **Maturity: Stable.**

**Tier 3: Low Activity / Maintenance Phase**
- **CoPaw** — High user demand but maintainer bottleneck. **Maturity: Stable but strained.**
- **PicoClaw** — Low bandwidth; needs maintainer engagement on stale items. **Maturity: Low activity.**
- **Moltis** — Stable but quiet; lacks community momentum. **Maturity: Stable / Niche.**
- **LobsterAI** — Effectively in maintenance mode; security bug is a concern. **Maturity: Fading.**

### 7. Trend Signals

1. **From "Does It Work?" to "Does It Cost Money?"** — Billing bugs (Hermes Agent #44585, #67762) and session cost transparency (OpenClaw #9016) are top-of-mind. Users are deploying agents in production and need operational cost control.

2. **Security Moves from Perimeter to Agent-Internal** — The focus on Masked Secrets (OpenClaw), Trust Tagging (OpenClaw), and confused deputy vulnerabilities (ZeroClaw) signals a shift toward *within-the-agent* security—preventing a compromised agent from leaking credentials or misusing tools.

3. **Local Model Caching Is a Bottleneck** — Ollama prefix caching issues (NanoBot) and LM Studio context_length regressions (Hermes Agent) show that local inference, while desirable for privacy/cost, has immature integration patterns. This is a critical gap for the "local-first" use case.

4. **Plugin Ecosystems Are the Next Frontier** — MCP server support (NanoClaw, ZeroClaw), WASM plugins (ZeroClaw), and standardized host hooks (NanoClaw #3091, IronClaw lifecycle hooks #67798) are converging on a shared goal: a stable, composable plugin API that doesn't require forking the core.

5. **Channel Overload** — Projects are managing multi-channel support (WhatsApp, Telegram, WeChat, QQ, Discord, Teams, Signal) and hitting the complexity ceiling. NanoClaw’s multiple WhatsApp group encryption PRs and ZeroClaw’s Telegram configuration bug (#8505) suggest that channel reliability is a significant operational burden.

6. **Desktop is a Pain Point, Not a Differentiator** — While OpenClaw’s community screams for native apps (#75) and CoPaw/ZeroClaw fix Linux/Windows-specific bugs, no project has a clear, mature desktop story. This remains a gap for user-facing adoption.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — July 20, 2026

Generated from github.com/HKUDS/nanobot

---

## 1. Today's Overview

NanoBot shows **elevated activity**, with 30 PRs and 6 issues updated in the last 24 hours. The project continues to mature with a strong focus on **stability and quality-of-life improvements**: 5 of 6 issues were closed, and 9 PRs were merged. Several high-priority fixes (triggers, WhatsApp groups, Windows encoding) were resolved. The issue tracker is well-maintained with rapid triage, though 21 PRs remain open — a typical healthy signal for an actively developed platform. Notably, the **refactoring of channels to be self-contained** (PR #4908) was merged, marking a major architectural milestone.

---

## 2. Releases

**No new releases** published in the reporting period. The last cut remains unnamed on the main branch.

---

## 3. Project Progress

Today 9 PRs were merged/closed. Key advances:

- **Refactored channel architecture** — PR [#4908](https://github.com/HKUDS/nanobot/pull/4908) (merged) removes central coupling: built-in channels are now self-contained packages under `nanobot/channels/<channel>/`. External channels use a legacy registry. This improves modularity and simplifies third-party contributions.

- **Triggers fixed for disabled channels** — PR [#4990](https://github.com/HKUDS/nanobot/pull/4990) (merged) prevents local triggers from running agent turns after their target channel is disabled, fixing a silent resource waste bug (closes #4991).

- **WhatsApp group allowlist restored** — PR [#4834](https://github.com/HKUDS/nanobot/pull/4834) (merged) fixes a regression in 0.2.2 where group IDs were not accepted in `allowFrom`, breaking groupchat allowlist filtering.

- **Windows build fix** — PR [#4994](https://github.com/HKUDS/nanobot/pull/4994) (merged) resolves WebUI package manager shims on Windows by using `shutil.which()` path instead of raw `bun`, fixing `bun.CMD` resolution.

- **Dependency manifest migration** — PR [#4995](https://github.com/HKUDS/nanobot/pull/4995) (open, p1) completes migration from channel extras to package-owned dependency manifests, adding `nanobot plugins install` for CI/image builds.

- **Internal turn lifecycle refactor** — PR [#4993](https://github.com/HKUDS/nanobot/pull/4993) (open, p1) unifies internal message handling into the standard `TurnContext` state machine, eliminating a bug-prone second mini-loop.

- **Atlas Cloud provider** — PR [#4996](https://github.com/HKUDS/nanobot/pull/4996) (open, p1) adds Atlas Cloud as a built-in OpenAI-compatible gateway provider.

---

## 4. Community Hot Topics

### Most Active Issues

- **#4867** — [CLOSED] [Enhancement] "Preserve exact prompt prefix to enable caching in Ollama" (9 comments). Author reports NanoBot adds 60 extra seconds per turn when using Ollama with 32 GB VRAM, making local models "totally unusable." The core problem is that NanoBot's prompt construction breaks Ollama's prefix caching. High user impact.

- **#1459** — [OPEN] "nanobot with codex-5.3-codex is lazy and doesn't actually execute" (6 comments, 2 👍). The bot reads the user's intent but fails to execute file reads or actions without explicit nudging — a persistent user experience gap around tool-use eagerness.

### Most Active PRs

- **#4768** — [OPEN, p1] "fix(qq): add exponential backoff to WebSocket reconnect loop" — QQ channel produces excessive error tracebacks every 5 seconds on network failure. Paired with duplicate PR #4838.

- **#4997** — [OPEN, p1] "feat(webui): add secure browser companion launch" — New WebUI feature for launching companion sessions with HttpOnly, SameSite cookies. Shows growing interest in secure multi-session UX.

- **#4866** — [OPEN, p1] "feat(agent): bind model presets to sessions" — Persists model preset selection per session, enabling per-conversation LLM configuration. The `/model` command becomes session-scoped.

**Underlying need**: Users are increasingly demanding **performance for local models** (caching issues), **reliable multi-channel support** (QQ, WhatsApp, Telegram), and **session-aware configuration** — not just global settings but per-chat model and provider control.

---

## 5. Bugs & Stability

Today's bug reports, ranked by severity:

| Bug | Severity | Summary | Fix PR |
|-----|----------|---------|--------|
| **Local triggers run on disabled channels** (#4991) | **High** — Wastes API credits and model usage silently | ✅ PR #4990 merged |
| **Windows UTF-8 subprocess crash** (#4975) | **High** — Crashes CLI apps on Windows with non-UTF-8 locale (CP936/GBK) | No dedicated fix PR yet |
| **GitStore fails from non-standard workspace** (#4980) | **Medium** — Blocks users with custom workspace layouts, fails on relative path handling | No dedicated fix PR yet |
| **WhatsApp groups broken** (#4823) | **Medium** — Regression from 0.2.2, groups receive replies in all groups | ✅ PR #4834 merged |
| **Feishu/Telegram infinite loops** (PR #4982, #4981) | **Medium** — Both `_fallback_text_chunks` and `_split_telegram_markdown` hang when `max_len ≤ 0` | ✅ Fix PRs #4982, #4981 open |
| **Jina Reader leaks sensitive URLs** (PR #4947) | **Low-Medium** — URL credentials and tokens exposed to third-party reader | ✅ Fix PR #4947 open |

**Overall stability assessment**: Active bug-fixing cycle with rapid turnaround. The Windows locale bug (#4975) and GitStore path bug (#4980) remain unaddressed but are niche.

---

## 6. Feature Requests & Roadmap Signals

### High-likelihood for next release:
- **Model presets per session** — PR #4866 makes `/model` session-scoped, enabling per-conversation model selection. Addresses a top user request.
- **Custom Bot API base URL for Telegram** — PR #4919 supports self-hosted Bot API servers, important for enterprise/isolated deployments.
- **Nimble search provider** — PR #4951 adds a new REST-based search provider, broadening web search options.
- **Live image generation settings** — PR #4964 exposes provider-specific image model choices in WebUI with hot-apply to running agents.
- **Secure browser companion** — PR #4997 adds HttpOnly session handling for companion sessions, improving WebUI security.

### Lower-likelihood / speculative:
- **Skill type requirements** (PR #4300) — Checks skill compatibility at selection time; stalled with conflicts for 38 days.
- **Exact prompt prefix caching** (#4867) — The fix for Ollama caching was closed without merging; likely re-emerges as a follow-up PR.

### Roadmap signals:
- **Channel self-containment architecture** (merged #4908) unlocks easier third-party channel development.
- **WebUI polish** (PR #4963) suggests a focus on production UX: unified activity logging, streamed Markdown rendering, search/F5/RTL/language improvements.

---

## 7. User Feedback Summary

### Pain Points (strong dissatisfaction):
- **Local model performance** — "Totally unusable with Ollama and 32 GB of VRAM" (issue #4867). The lack of prefix caching adds 60s per turn, killing usability.
- **Agent laziness** — "nanobot is lazy and doesn't actually execute" (issue #1459, 2 👍). The agent reads user requests but doesn't act without explicit commands, frustrating power users.
- **WhatsApp regression** — Group responses leaking into all groups after 0.2.2 (issue #4823). A blocker for multi-group users.

### Satisfaction signals:
- **Rapid bug triage** — Many issues closed within days of reporting.
- **Windows attention** — WebUI build fixes (#4994) and UTF-8 encoding (#4975) show growing Windows support.
- **Channel improvements** — QQ exponential backoff (PR #4768), Telegram custom API (PR #4919), Feishu hang fixes (PR #4982) — maintainers are systematically hardening channel reliability.

### Use cases observed:
- Multi-channel deployments (Telegram, WhatsApp, QQ, WeChat, Feishu) with cross-group enable/disable
- Local LLM inference (Ollama) for cost-sensitive or privacy-preserving setups
- Windows + CLI tooling for development and testing workflows

---

## 8. Backlog Watch

### Stale high-importance items:

| Item | Age | Status | Concern |
|------|-----|--------|---------|
| **#1459** — "lazy agent" behavior | **139 days** | Open, 6 comments, 2 👍 | Long-unaddressed UX reliability gap; no maintainer engagement |
| **PR #4300** — Skill type requirements | **39 days** | Open with conflict | Stalled; may need maintainer to resolve conflicts and re-review |
| **PR #4223** — WeChat session reload after pause | **44 days** | Open with conflict | WeChat is a major channel in Asia; 44-day stall on session token expiry fix is risky |
| **PR #4768** — QQ WebSocket backoff | **14 days** | Open, duplicated by #4838 | Two competing PRs with similar approach; needs maintainer to pick one |
| **#4980** — GitStore workspace path bug | **2 days** | No fix PR yet | Recent but unaddressed; blocks users with custom workspace layouts |

### Alert:
- **No releases in the reporting period** — The last release was before these ~30 PRs. The project may be overdue for a point release (0.2.3) bundling stability fixes (WhatsApp groups, triggers, WeChat, Windows) and channel refactoring.

---

*Digest generated from HKUDS/nanobot GitHub data for 2026-07-20. All links are to github.com/HKUDS/nanobot.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — July 20, 2026

## Today's Overview

Hermes Agent is showing high activity with 50 issues and 50 pull requests updated in the last 24 hours, reflecting strong community engagement and rapid development pace. The project has 44 open issues and 37 open PRs, indicating a healthy but growing backlog that maintainers are actively processing. No new releases were published today, but the pipeline includes significant feature work across desktop, gateway, agent, and kanban subsystems. Several high-severity billing and session-state bugs have surfaced alongside well-scoped fixes, suggesting the project is in a refinement phase following recent major features.

## Releases

No new releases were published today. The most recent release remains the current stable version. Several pending PRs and issue discussions touch on configuration and behavior changes that may warrant a release in the near future.

## Project Progress

Today saw 13 PRs merged or closed. Notable developments include:

- **Merged/Closed PRs:**
  - [#67606](https://github.com/NousResearch/hermes-agent/pull/67606) — **feat(agent): adaptive thinking for Kimi-family Anthropic endpoints** — Merged. Adds `adaptive` thinking support for Kimi models, salvaging earlier work with preserved authorship.
  - [#38794](https://github.com/NousResearch/hermes-agent/pull/38794) — **Fix desktop IME composition submit handling** — Merged. Resolves a long-standing desktop IME bug affecting CJK users.
  - [#67596](https://github.com/NousResearch/hermes-agent/pull/67596) — **feat(memory): add opt-in layered built-in memory retrieval** — Closed. Addresses built-in memory injection without duplicating tool-result pruning logic.
  - [#67799](https://github.com/NousResearch/hermes-agent/pull/67799) — Closed by requester (redacted body).
  - [#67800](https://github.com/NousResearch/hermes-agent/pull/67800) — **integrate NarratoAI and AIWriteX as optional skills** — Closed. Third-party skill addition.
  - [#67795](https://github.com/NousResearch/hermes-agent/pull/67795) — **feat(desktop): unify custom endpoint card style with provider key rows** — Closed. UI consistency improvement.

Active PRs showing progress:
- [#67807](https://github.com/NousResearch/hermes-agent/pull/67807) — Aligning `computer_use` with cua-driver 0.9 contracts, preserving evidence-driven verification.
- [#67804](https://github.com/NousResearch/hermes-agent/pull/67804) — Making `cost_status` sticky by priority to prevent downgrades from single provider hiccups.
- [#67796](https://github.com/NousResearch/hermes-agent/pull/67796) — Rehydrating session accumulators from SQLite on gateway restart.
- [#67792](https://github.com/NousResearch/hermes-agent/pull/67792) — Fixing Telegram `send_document` filename handling.

## Community Hot Topics

The most active discussions this period cluster around billing, session state, and desktop usability:

- [#46593](https://github.com/NousResearch/hermes-agent/issues/46593) (6 comments) — **Kanban worker exits with misleading "protocol violation"** — A real pain point: when workers fail silently before any API call, operators get unhelpful error messages that bury the actual root cause (e.g., boto3 `converse_stream` failures). This has been open since June 15 and is impacting reliability monitoring.

- [#67187](https://github.com/NousResearch/hermes-agent/issues/67187) (5 comments) — **MCP parked server revival fails to re-register tools** — A subtle bug where Streamable HTTP MCP servers that reconnect after being parked do not have their tools restored to the registry. This breaks workflows dependent on dynamic tool discovery.

- [#53771](https://github.com/NousResearch/hermes-agent/issues/53771) (4 comments) — **Large chat sessions hitting Cloudflare 502 without compression** — A systemic issue where oversized sessions bypass compression logic because the upstream error is misclassified as retryable. Users are experiencing silent context overflow.

- [#37352](https://github.com/NousResearch/hermes-agent/issues/37352) (4 comments) — **Feature request: `hermes skills lint`** — Skill authors lack tooling for validating SKILL.md frontmatter and cross-references. 8 skills in the built-in collection have broken references, indicating a real quality gap.

- [#14471](https://github.com/NousResearch/hermes-agent/issues/14471) (4 comments, CLOSED) — **Unrelated AGENTS.md/CLAUDE.md injection via tool-path discovery** — A context-injection bug that could append unintended prompt files based on tool arguments. Now closed, suggesting a fix has been applied.

## Bugs & Stability

**Critical/High Severity (P1):**
- [#44585](https://github.com/NousResearch/hermes-agent/issues/44585) (CLOSED) — **Cron inheriting paid provider state during pause/stop** — A cron job continued billing on a paid provider after an operator attempted to stop it. This caused real financial spend. Now closed with a fix.

**High Severity (P2) — New Today:**
- [#67762](https://github.com/NousResearch/hermes-agent/issues/67762) — **`agent.session_estimated_cost_usd` resets to $0 on gateway restart** — A silent undercount bug that breaks any feature displaying running session cost. Fix PR [#67796](https://github.com/NousResearch/hermes-agent/pull/67796) is open and staged.
- [#67764](https://github.com/NousResearch/hermes-agent/issues/67764) — **`cost_status` overwritten on every API call** — "Most-recent-call-wins" behavior misrepresents billing accuracy. Fix PR [#67804](https://github.com/NousResearch/hermes-agent/pull/67804) is open.
- [#67781](https://github.com/NousResearch/hermes-agent/issues/67781) — **Daily 4AM session_reset resurrected by stale-route recovery** — A Telegram session accumulated ~$12 in costs (38M tokens) after a reset was undone by recovery logic. Needs reproduction.
- [#67783](https://github.com/NousResearch/hermes-agent/issues/67783) — **computer_use alignment with cua-driver 0.9** — Breaking changes in upstream driver require behavioral alignment. PR [#67807](https://github.com/NousResearch/hermes-agent/pull/67807) is open.
- [#67732](https://github.com/NousResearch/hermes-agent/issues/67732) — **macOS: sudo gateway install writes plist to /var/root, misreports launchd as unsupported** — Creates a root-run gateway with incorrect configuration. Fix needed.

**Medium Severity (P2) — Pre-existing:**
- [#53771](https://github.com/NousResearch/hermes-agent/issues/53771) — Cloudflare 502 misclassification without compression (updated today).
- [#39136](https://github.com/NousResearch/hermes-agent/issues/39136) — Stale TUI dashboard processes accumulating across updates.

**Low Severity (P3):**
- [#67249](https://github.com/NousResearch/hermes-agent/issues/67249) — `active_pr` respawn guard tripped by non-PR content in comments.
- [#66059](https://github.com/NousResearch/hermes-agent/issues/66059) / [#66917](https://github.com/NousResearch/hermes-agent/issues/66917) / [#67286](https://github.com/NousResearch/hermes-agent/issues/67286) — Desktop file browser auto-opening in new sessions. Multiple duplicate reports suggest a recent regression.
- [#46785](https://github.com/NousResearch/hermes-agent/issues/46785) — Bootstrap installer misdiagnosing desktop build failures.
- [#53861](https://github.com/NousResearch/hermes-agent/issues/53861) — macOS gateway stays down after update due to launchd deferral.

## Feature Requests & Roadmap Signals

**Hot Features Under Discussion:**
- [#67798](https://github.com/NousResearch/hermes-agent/issues/67798) — **Make lifecycle hooks a shared runtime contract** — Currently gateway-owned, but other surfaces (`hermes run`, cron, plugins) need hooks. A foundational architecture change likely for next release.
- [#67765](https://github.com/NousResearch/hermes-agent/issues/67765) — **Show running session cost in desktop status bar** — Directly requested alongside the billing bugs above. High user demand for cost transparency.
- [#65905](https://github.com/NousResearch/hermes-agent/issues/65905) — **Disable persistent context-window caching for volatile provider catalogs** — Safety feature for providers with dynamic model catalogs.
- [#37352](https://github.com/NousResearch/hermes-agent/issues/37352) — **`hermes skills lint`** — Structured validation for SKILL.md files. Predictable addition given built-in collection quality issues.
- [#67246](https://github.com/NousResearch/hermes-agent/pull/67246) — **Optional file upload support for API server** — Lets agents upload generated files to remote servers. Likely to be refined into next release.

**Predicted Next-Release Items:**
1. Billing/session-state fixes (multiple P2 bugs + existing PRs)
2. Lifecycle hooks runtime contract (#67798)
3. cua-driver 0.9 alignment (#67783 / #67807)
4. Desktop file browser sidebar regression fix
5. Kanban external worker lifecycle (#67718)

## User Feedback Summary

**Pain Points:**
- **Billing surprise:** Users are experiencing real financial costs from cron jobs that don't respect pause/stop (#44585), and session costs resetting on restart (#67762). This is the most urgent user-facing issue.
- **Desktop sidebar regression:** Multiple users report the file browser auto-opening in new sessions (#66059, #66917, #67286) — a clear recent regression affecting daily workflow.
- **MCP tool re-registration failure:** Users integrating Streamable HTTP MCP servers lose tools after reconnect (#67187), breaking dynamic tool workflows.
- **Misleading error messages:** Kanban workers failing with "protocol violation" instead of actual error (#46593) makes debugging harder.
- **macOS update reliability:** Gateway staying down after update (#53861) and sudo installation misbehavior (#67732) affect macOS users specifically.

**Satisfaction Signals:**
- Adaptive thinking for Kimi endpoints merged (#67606) — community contribution with preserved authorship.
- Desktop IME fix merged (#38794) — addressing CJK user pain point.
- Layered memory retrieval feature closed (#67596) — advancing memory system capabilities.
- Quick turnaround on billing bugs with companion PRs already open demonstrates responsive maintainership.

## Backlog Watch

**Issues Needing Maintainer Attention:**
- [#30178](https://github.com/NousResearch/hermes-agent/issues/30178) (open since May 22, 2 comments) — **LM Studio per-model context_length broken in 0.14.0** — Regressed from 256K to 64K for all models. No fix PR visible. Affects all LM Studio users.
- [#54509](https://github.com/NousResearch/hermes-agent/issues/54509) (open since June 28, 1 comment) — **WebUI model badge doesn't reflect fallback model** — Visual bug with no maintainer response.
- [#67757](https://github.com/NousResearch/hermes-agent/issues/67757) (new, 1 comment) — **PR #67548 unguarded credential swap** — Idempotency concern flagged by community reviewer, needs maintainer decision.
- [#67756](https://github.com/NousResearch/hermes-agent/issues/67756) (new, 1 comment) — **PR #67541 hidden semantic change to restart notification** — Silent behavior change flagged during review.

**Stale PRs:**
- [#65701](https://github.com/NousResearch/hermes-agent/pull/65701) (open since July 16) — **Windows browser zombie daemon port holding** — P2 bug, no review activity in 4 days.
- [#66874](https://github.com/NousResearch/hermes-agent/pull/66874) (open since July 18) — **Plugin RPC registration for gateway WebSocket** — P3 feature, needs architectural decision.
- [#66294](https://github.com/NousResearch/hermes-agent/pull/66294) (open since July 17) — **Desktop speech synthesis timeout configurable** — P3, needs review.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the PicoClaw project digest for **2026-07-20**.

---

## PicoClaw Project Digest — 2026-07-20

### 1. Today's Overview
PicoClaw is seeing moderate development activity with 3 issues and 3 pull requests updated in the last 24 hours. The team closed one bug and opened two new issues, while no PRs were merged today—suggesting a review-and-triage day rather than a heavy merge cycle. Two stale PRs (open for over a week) remain active, indicating some long-running fixes may be nearing resolution. No new releases or tags were created, so the project remains on its last stable version.

### 2. Releases
*None.* No new releases were published in the last 24 hours.

### 3. Project Progress
**Merged / Closed PRs today:** None.

**Active PRs under review:**
- **PR #3251** (stale, open since Jul-12): `fix(providers): capture the prompt cache token usage in Anthropic providers` — addresses missing cache metrics that operators need to verify Claude’s prompt caching works. No comments from maintainers yet.
- **PR #3202** (stale, open since Jul-01): `fix(routing): strip leading/trailing underscores in ID normalization` — fixes a regex compliance gap in `NormalizeAgentID`/`NormalizeAccountID`. This has been open for 19 days without a merge.
- **PR #3267** (new, opened Jul-19): `fix scope bug for refresh agy token` — corrects a token-scope mismatch in the Antigravity provider that causes permission-denied errors during refresh.

### 4. Community Hot Topics
The most active item is **Issue #3252** (1 comment, 0 reactions), which has been open for 8 days and is the only issue with any discussion. The underlying need is a robust parsing edge case: the `splitKnownProviderModel` function strips the provider prefix even when the model ID legitimately contains a known provider alias as a substring (e.g., a model called `my-claude-3` would incorrectly lose its provider prefix). This is a moderate-impact bug that could cause silent misrouting for custom or chained model IDs.

- **Issue #3252** – [Link](sipeed/picoclaw Issue #3252)

### 5. Bugs & Stability
Three bugs were reported or updated today:

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **Medium** | #3268 (OPEN) | `exec` tool’s `action` parameter is required when it should default to `"run"`. Causes AI agents to fail unpredictably if they omit the field. | Not yet |
| **Medium** | #3266 (CLOSED) | Weixin channel passes images to non-vision models, causing a visible error before the image is saved. **Fixed and closed the same day.** | No PR needed (closed as fixed) |
| **Medium** | #3267 (PR) | Token refresh scope bug in Antigravity provider leads to permanent `PERMISSION_DENIED` after initial login. | **PR #3267** is open for this exact fix |

The Weixin image-handling bug was the only one resolved today. The `exec` tool issue (#3268) is the most impactful open bug, as it affects all agentcalls using the `exec` tool with no workaround.

### 6. Feature Requests & Roadmap Signals
No explicit feature requests were opened today. However, the **prompt cache token capture fix (PR #3251)** strongly suggests the team is investing in observability for Anthropic users—a feature that would likely land in the next minor release. The **ID normalization fix (PR #3202)** is a low-risk cleanup that has been queued for 19 days; it may be merged soon as a compatibility improvement for custom agent/account IDs.

### 7. User Feedback Summary
- **Pain point (exec tool):** User `MrTreasure` reports that AI agents frequently omit the `action` field, causing unnecessary failures. The workaround is to always manually specify `action: "run"`, which contradicts the expected "sensible default" behavior.
- **Pain point (Weixin channel):** Same user reports that non-vision models receive images from Weixin, producing user-visible errors before non-image processing (e.g., text extraction) kicks in. This was fixed today.
- **Pain point (Antigravity token refresh):** User `sarff` provides a clear reproduction of token-scope mismatch leading to permanent authentication failure after a primary login succeeds—a critical user experience blocker for Antigravity users.

### 8. Backlog Watch
Two stale issues/PRs in need of maintainer attention:

- **PR #3202** (19 days stale, no comments from maintainers) – A documented bug-fix for ID normalization that passes tests. Its long wait suggests either low priority or maintainer bandwidth constraints.
  - Link: [sipeed/picoclaw PR #3202](sipeed/picoclaw PR #3202)

- **PR #3251** (8 days stale, no comments) – An important observability improvement for the Anthropic provider. Without it, operators cannot verify prompt caching is working.
  - Link: [sipeed/picoclaw PR #3251](sipeed/picoclaw PR #3251)

Both PRs are at risk of bit-rotting and should receive a review or explicit deferral. No open issues remain unanswered for more than 2 days.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-20

## Today's Overview
NanoClaw shows **high activity** today with 30 PRs updated in the last 24 hours, evenly split between open (15) and merged/closed (15). Two new feature requests were opened, both touching on extensibility and autonomy. The project continues to mature with a strong focus on **channel reliability** (WhatsApp group fixes), **MCP server support**, and **CLI tooling improvements**. The core team is actively reviewing and merging contributions from multiple community members. No new releases were published today.

## Releases
No new releases were published today. The project currently has no tagged release in the data provided.

## Project Progress
**15 PRs were closed/merged today**, reflecting substantial advancement across several areas:

### Channel Reliability (WhatsApp group fixes — major theme)
Multiple PRs addressing the same WhatsApp LID group encryption bug were merged after iterative fixes:
- **#3038** — `caburi00`: Fix WhatsApp group participants not translating to phone JIDs (LID-mode stuck on "waiting")
- **#3008** — `gfnord`: Remove `cachedGroupMetadata` that breaks SKDM in LID groups
- **#2870** — `elancode`: Keep native participant addressing for group encryption
- **#2688** — `mcaldas`: Stop translating group participants to phone JIDs (fixes ack 421 on LID groups)

### New Channel Integrations (merged/closed)
- **#1921** — `Clapeysron`: Add `/add-weixin` skill — WeChat channel via iLink bot protocol
- **#1648** — `Aswinmcw`: Add Microsoft Teams channel (`/add-msteams`)
- **#1594** — `grzhx`: Add WeChat channel skill (iLink Bot API, QR auth, message chunking)
- **#1517** — `misterclarity`: Add Discord channel with image attachment support (resize to 1024×1024)
- **#1087** — `hugwi`: Add Telegram channel, voice transcription (whisper.cpp), message deduplication
- **#352** — `iHamburg`: Add Telegram as a channel (alternative to WhatsApp)

### MCP & Infrastructure
- **#2847** — `grantland`: Support URL-based (remote) MCP servers over HTTP/SSE
- **#2261** — `CrAzyScreamx`: `/add-ffmpeg` MCP server for media transformation
- **#2306** — `CrAzyScreamx`: `/add-ytdlp` MCP server + installer for YouTube-DL
- **#2278** — `CrAzyScreamx`: Per-wiring channel permission (read | write | read+write)
- **#2276** — `CrAzyScreamx`: Fix URL fallback in bridge when adapter omits `fetchData`

### Fixes & Enhancements (merged/closed)
- **#3038, #3008, #2870, #2688** — WhatsApp group encryption (see above)
- **#2276** — Channel bridge URL fallback fix
- **#1087** — Telegram message deduplication & atomic file processing

## Community Hot Topics

### Most Active Issues (both opened today)
- **#3091** — `ZappoMan`: **[Feature request: standardize composable host extension hooks for skills (hosthooks)](https://github.com/nanocoai/nanoclaw/issues/3091)** — 0 comments, 0 👍
  - **Need**: Community skills that need host-side behavior currently "string-patch" NanoClaw sources (router, delivery, container-runner, provider). This creates conflicts when multiple skills modify the same code, breaks on upstream refactoring, and is not maintainable. User wants a standardized hook system.
  
- **#3089** — `cy83rc0llect0r`: **[Feature request: agent-driven skill learning](https://github.com/nanocoai/nanoclaw/issues/3089)** — 0 comments, 0 👍
  - **Need**: User wants NanoClaw to autonomously create/refine skills when it notices repeated task patterns, instead of requiring manual skill writing.

### Most Active PRs (open)
- **#3094** — `amit-shafnir`: Fix Telegram transient bot identity lookup
- **#3093** — `amit-shafnir`: Keep typing active for processing turns
- **#3092** — `amit-shafnir`: Support remote Streamable HTTP MCP servers
- **#3090** — `amit-shafnir`: Fix template context Markdown prepending
- **#3088** — `moshe-nanoco`: Surface unknown-sender holds in `ncl approvals list`

**Underlying need**: The community is heavily focused on **channel reliability** (especially WhatsApp group encryption), **MCP server extensibility** (both remote and local), and **CLI tooling** for operational control. The host extension hooks request (#3091) suggests a growing need for a stable plugin API.

## Bugs & Stability

### Critical Severity
**Bug**: WhatsApp LID-mode group messages stuck on "waiting" — messages logged as delivered but never render for recipients. Root cause: participant JID translation to phone form breaks sender-key distribution in LID groups. **Status: MULTIPLE FIXES MERGED TODAY** (#3038, #3008, #2870, #2688). This was a widespread issue affecting all WhatsApp group messaging on LID-addressed groups.

### Medium Severity
**Bug**: Channel bridge URL fallback fails when adapter omits `fetchData` — **Fixed** in #2276 (merged).

**Bug**: Telegram bot identity lookup transient failures — **Fix PR #3094** open by `amit-shafnir`.

### Low Severity
**Bug**: Chat typing indicator inactive during processing turns — **Fix PR #3093** open.

## Feature Requests & Roadmap Signals

### Likely for Next Release
1. **Host extension hooks / composable plugins** (#3091) — High-value for ecosystem growth; current workaround (string-patching) is fragile. Expect this to be prioritized as the project scales community contributions.
2. **Remote MCP servers via Streamable HTTP** (#3092, open PR) — Extends MCP support beyond local stdio processes.
3. **Agent-driven skill learning** (#3089) — More speculative, advanced feature; lower priority but aligns with NanoClaw's autonomous agent philosophy.
4. **CLI approval management** (#3088) — Practical operational feature already in PR form.

### Prediction for Next Version
- Standardized host hooks API (responding to #3091)
- Remote MCP server support (merging #3092)
- Channel permission model (from #2278)
- Continued WhatsApp group stability improvements

## User Feedback Summary

### Pain Points
- **WhatsApp group messaging unreliability** — Multiple users (caburi00, gfnord, elancode, mcaldas) encountered same bug with different manifestations; community collaborated on iterative fixes.
- **No standardized plugin/hook system** — ZappoMan (#3091) explicitly calls out string-patching as unsustainable.
- **Manual skill authoring required** — cy83rc0llect0r (#3089) wants autonomous skill creation.

### Positive Signals
- **Strong community contribution pipeline** — 15 merged PRs in one day, multiple first-time contributors (caburi00, gfnord, elancode, mcaldas) fixing same issue collaboratively.
- **Channel ecosystem expanding rapidly** — Discord, Teams, WeChat, Telegram, Weixin all added recently.
- **MCP ecosystem growth** — ffmpeg, yt-dlp MCP servers added, remote MCP support in progress.

### Satisfaction Indicators
- Core team active and responsive (amit-shafnir, moshe-nanoco merging/reviewing)
- Community trusts the project enough to contribute complex fixes
- No negative sentiment or complaints visible in data

## Backlog Watch

### Open PRs Requiring Maintainer Attention
- **#352** — Closed but noted as "Blocked / Pending Closure" — Telegram as default channel (replacing WhatsApp). May need resolution on whether Telegram should be default.
- **#1087** — Closed but large feature PR (Telegram, voice transcription, deduplication) — worth tracking for potential regression impacts.

### Unanswered Issues
- **#3091, #3089** — Both opened yesterday (2026-07-19) with 0 comments. These are new but important architectural discussions that warrant maintainer response.

### No Stale/Escalated Items
All activity appears current; no issues or PRs show signs of maintainer neglect. The 15 merged PRs today indicate healthy project triage.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-20

## 1. Today's Overview

IronClaw saw **extremely high activity** over the past 24 hours, with 50 PRs updated (33 merged/closed) and 5 open issues. The project is in the middle of a **major "Reborn" architecture refactoring** (the capability-result collapse documented in §5.3), and today marked the completion of several critical stages. Dependency updates (Tokio ecosystem, Serde, WASM toolchain) also advanced alongside user-facing improvements to the local-dev onboarding experience. No new releases were cut today, but the release pipeline PR (#5598) remains open, suggesting a version bump (0.24.0 → 0.29.1) may be imminent once the refactoring stabilizes. **Project health is strong** — high merge velocity, active core contributor engagement, and systematic bug-fixing.

## 2. Releases

**No new releases today.** The last release remains v0.24.0. The release PR (#5598, open since July 3) proposes bumping to **0.29.1** with breaking changes in `ironclaw_common` (0.4.2→0.5.0) and `ironclaw_skills` (0.3.0→0.4.0), and a minor bump for `ironclaw_safety` (0.2.2→0.2.3). That release is blocked on the current Reborn refactoring wave.

## 3. Project Progress — Merged/Closed PRs (33 total)

### 🚀 Reborn Architecture (Capability-Result Collapse — §5.3)
- **PR #6293** [CLOSED] — **Collapse complete**: all capability producers now emit `Resolution` directly; `CapabilityOutcome` deleted. 184 files changed, +767/−2,424.
- **PR #6287** [CLOSED] — **§5.3 Stage 2 atomic flip**: loop-facing result becomes `host_api::Resolution`.
- **PR #6275** [CLOSED] — **Stage 1 additive vocabulary**: `ResolutionBatch` + loop-suspension predicate added.
- **PR #6273** [CLOSED] — **Model-visible failure diagnostics** added to `Resolution`.
- **PR #6271** [CLOSED] — **Replay payload refactoring**: resume replay payloads moved host-side via `ReplayPayloadStore`.

### 🧪 Testing & Stability
- **PR #6295** [CLOSED] — **Crash-consistency chaos suite** added for turn-state consolidation; found and fixed two real crash-recovery defects.

### 🧩 Composition & DeploymentConfig
- **PR #6279** [CLOSED] — `DeploymentConfig` now covers **all seven** composition profiles (was 3).
- **PR #6280** [CLOSED] — De-prefixed misleading `local_dev_*` builder names.

### 🧑‍💻 Developer Experience & Onboarding
- **PR #6285** [CLOSED] — **Frictionless local-dev onboarding**: auto-provision serve, REPL model wizard, `onboard` launcher end-to-end.
- **PR #6294** [CLOSED] — Onboarding quick start docs shortened and simplified.

### 🔧 Dependency Updates
- **PR #6288** [OPEN] — 32 dependencies updated across `everything-else` group.
- **PR #6286** [OPEN] — Serde 1.0.228→1.0.229.
- **PR #4032** [OPEN] — WASM toolchain updates (wit-component 0.245.1→0.253.0).
- **PR #6186** [OPEN] — Tokio-ecosystem updates (Tokio 1.52.3→1.53.0, tokio-tungstenite 0.26.2→0.29.0).

### 📝 Documentation
- **PR #6291** [OPEN] — Error-recoverability contract folded into architecture docs.
- **PR #6292** [CLOSED] — Frozen `RebornServicesApi` facade method set (test artifact).

### 📊 Active PRs Still Open
- **PR #6296** [OPEN] — **Major feature cleanup**: deleting 14 compile-time features, removing ~1,100 `#[cfg]` sites (38→24 features). Core contributor, 184 files changed.
- **PR #6297** [OPEN] — **onboard launcher + Web UI auto-open** + corepack error fix. Community contributor.
- **PR #6289** [OPEN] — **REPL UX improvements**: thinking spinner + markdown rendering.

## 4. Community Hot Topics

### Most Active Issues
1. **#6263** — `InMemoryTurnStateStore` retirement (8 comments) — Final piece of store consolidation after A1–A8 slices. Core architectural debt, needs "Slice 0 oracle" and livelock evidence before closing.
   - Link: https://github.com/nearai/ironclaw/issues/6263

2. **#6274** — `DeploymentConfig` completion (2 comments) — Already addressed by merged PRs #6279/#6280/#6277.
   - Link: https://github.com/nearai/ironclaw/issues/6274

3. **#6257** — PDF mime_type bug (1 comment) — Duplicate of #6290; user-reported production bug.
   - Link: https://github.com/nearai/ironclaw/issues/6257

### Analysis
The community's most pressing need centers on **two distinct axes**: (1) the Reborn refactoring's final store consolidation (#6263) which requires deep architectural validation before closing, and (2) a real user-facing PDF attachment bug (#6257/#6290) that's a quick-trigger issue for production users. The lack of maintainer response on the PDF bug (0 comments on #6290) is notable given its user-reported nature.

### Most Active PRs
- **#6186** (Tokio deps) and **#6288** (32-package dep bump) — High activity from Dependabot automation.
- **#6296** (Feature cleanup) — Core contributor, major refactoring, 184 files touched.
- **#6297** (Onboard launcher) — Community contributor UX improvement.

## 5. Bugs & Stability

| Issue | Severity | Summary | Fix PR Exists? |
|-------|----------|---------|----------------|
| **#6257 / #6290** (duplicate) | **🔴 HIGH** | `"Invalid value (attachments.mime_type)"` error when sending/generating PDF files. Possibly toolchain-dependent. | ❌ No fix PR identified |
| **#6284** | **🟡 MEDIUM** | Error-recoverability endgame: model must recover from 100% of errors it sees. 4-part contract (survival, visibility, causation, action). | Covered by #6291 (docs) and #6295 (chaos suite) |
| **#6263** | **🟡 MEDIUM** | `InMemoryTurnStateStore` retirement — livelock and slice-0 oracle dependencies. | #6295 (chaos suite) is Phase 0 |

### Key Stability Wins
- **PR #6295** found and fixed **two real crash-recovery defects** in turn-state consolidation — a proactive stability improvement.
- **PR #6273** added model-visible failure diagnostics to `Resolution`, enabling better error recovery.

## 6. Feature Requests & Roadmap Signals

### Likely for Next Release (0.29.x)
1. **Frictionless local onboarding** — Already merged in #6285, will ship as `ironclaw onboard` command.
2. **Capability-result collapse** — All §5.3 stages are now merged; final store consolidation (#6263) is the last blocker.
3. **Feature cleanup** — PR #6296 (38→24 features) is in review; reduces compile-time complexity.
4. **REPL UX improvements** — #6289 (spinner + markdown) is open and independent of refactoring.

### User-Requested
- **PDF attachment support** — The mime_type bug (#6257/#6290) suggests users are actively trying to use PDF generation. A fix or feature enhancement is likely imminent.
- **Simpler CLI setup** — The onboarding PR (#6285) directly addresses user complaints about "dead ends" in first-run experience.

### Roadmap Predictions
- Next release (0.29.0→0.29.1) likely within 1-2 weeks once #6263 resolves and the release PR (#5598) is rerun.
- Feature flag cleanup (#6296) will ship before or with the next release.
- PDF mime_type fix is a quick candidate for a point release.

## 7. User Feedback Summary

### Pain Points (Real Users)
1. **PDF file handling broken** — Michael Kelly (Slack, #x-ai-product-feedback) reported `"Invalid value (attachments.mime_type)"` error when sending/generating PDFs (#6257/#6290). Root cause suspected to be file path handling or missing tooling. **No maintainer response yet on #6290.**
2. **Onboarding friction** — From-scratch `cargo build` + `onboard` hit "a chain of dead ends" (missing WebUI token, missing user ID, corepack error). Addressed by #6285/#6297.
3. **REPL usability** — CLI REPL blocked silently during turns and printed raw markdown. Addressed by #6289 (spinner + markdown rendering).

### Satisfaction Signals
- **High contributor engagement** — Multiple core and regular contributors active simultaneously (ilblackdragon, loopstring, serrrfirat, BenKurrek).
- **Systematic quality** — The chaos testing suite (#6295) demonstrates proactive reliability engineering rather than reactive bug-fixing.

## 8. Backlog Watch

| Item | Age | Risk | Notes |
|------|-----|------|-------|
| **PR #4032** (WASM deps) | **56 days** (since May 25) | 🟢 Low | Wit-component 0.245.1→0.253.0, still rebasing. Automated, not urgent. |
| **PR #5598** (Release) | **17 days** (since July 3) | 🟡 Medium | Blocked on Reborn refactoring. Breaking changes are ready but not shipped. |
| **PR #6186** (Tokio deps) | **3 days** | 🟢 Low | Tokio 1.53.0, tokio-tungstenite bump. Standard Dependabot. |
| **Issue #6290** (PDF bug) | **1 day** | 🔴 High | User-reported production bug with **zero maintainer engagement**. Needs triage. |

### Concerns
- **Issue #6290** is the most urgent backlog item — it's a user-facing production bug with no comments or assignment. The duplicate (#6257) likewise has only 1 comment. This should be triaged to a maintainer within the next 24h.
- **PR #5598** (release) has been open 17 days with breaking changes ready; the ongoing refactoring is the blocker, but keeping release PRs open this long risks merge conflicts and feature skew.

---

*Digest generated 2026-07-20. Data source: GitHub (nearai/ironclaw).*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the project digest for **LobsterAI** based on data from **2026-07-20**.

---

## LobsterAI Project Digest — 2026-07-20

### 1. Today's Overview
The project is currently in a **low-activity maintenance phase**, with no new releases and only routine dependency updates. Three issues and three PRs were updated in the last 24 hours, but all are stale (last updated in April 2026), indicating a backlog of unresolved items. One closed issue regarding attachment uploads was cleaned up, but two open bugs and one feature request remain unaddressed. The overall project health appears stable but there is a clear need for maintainer engagement on older tickets.

### 2. Releases
No new releases were published today. The latest release remains unchanged from prior records.

### 3. Project Progress
- **Merged/Closed PRs:**  
  - **PR #1350** — [CLOSED] “skills文件长时间生成阻塞无法感知…” (Author: jimmy-xz). This PR addressed a blocking issue in skill file generation without user feedback. It was closed, but the resolution status (merged vs. rejected) is not specified.  
- **No feature-related PRs were advanced today.**

### 4. Community Hot Topics
- **Issue #1289** — [OPEN] “feat: 为长代码块添加折叠/展开功能，改善长内容可读性”  
  - **Comments:** 1 | **Reactions:** 0  
  - **Summary:** A user proposes adding automatic collapse/expand for code blocks between 15–200 lines to improve scrolling experience.  
  - **Link:** [Issue #1289](https://github.com/netease-youdao/LobsterAI/issues/1289)  
  - **Analysis:** This is the highest-signal feature request, directly addressing a common UX pain point. It represents a clear end-user need for better long-content readability.

- **Issue #1287** — [OPEN] “设置-IM机器人对popo进行连通性测试时，appkey、appsecret、aes key全填1也能测试连接通过”  
  - **Comments:** 1 | **Reactions:** 0  
  - **Link:** [Issue #1287](https://github.com/netease-youdao/LobsterAI/issues/1287)  
  - **Analysis:** A security-sensitive bug where IM robot connectivity tests pass even with obviously fake credentials. This indicates a missing validation layer.

### 5. Bugs & Stability
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#1287](https://github.com/netease-youdao/LobsterAI/issues/1287) | IM robot connectivity test accepts invalid credentials (appkey, appsecret, aes key all “1”) | No |
| **Medium** | [#1352](https://github.com/netease-youdao/LobsterAI/issues/1352) [CLOSED] | Attachment upload fails while a task is running in the task dialog | Yes (closed, resolution unknown) |
| **Low** | [#1350](https://github.com/netease-youdao/LobsterAI/issues/1350) [CLOSED] | Skill file generation blocks with no user feedback; model understanding issues | Yes (closed, resolution unknown) |

**Note:** No new bugs were filed today. The open #1287 is the most critical stability issue currently.

### 6. Feature Requests & Roadmap Signals
- **Issue #1289** — Code block collapse/expand for long content.  
  - **Expected in next version?** Low probability in the next immediate release, but high user interest suggests it could land in a UX polish release.
- **PR #1285 / #1286** — Dependencies bumped (concurrently to 9.2.1, tailwindcss to 4.2.2).  
  - These are routine maintenance and likely to be merged soon to keep the project up-to-date.

### 7. User Feedback Summary
- **Pain Points:**  
  - Long code blocks disrupt reading flow (Issue #1289).  
  - No visible progress during skill file generation, leading to confusion (PR #1350).  
  - IM robot configuration validation is broken, allowing fake credentials (Issue #1287).  
- **Satisfaction:** Not explicitly measured, but the lack of response to several open issues (since April) may indicate growing user frustration.
- **Use Cases:** Users are actively building skills and relying on the IM robot integration for connectivity.

### 8. Backlog Watch
The following items have been **stale for over 3 months** and require maintainer attention:

| Item | Type | Last Updated | Notes |
|------|------|--------------|-------|
| [#1287](https://github.com/netease-youdao/LobsterAI/issues/1287) | Bug (High) | 2026-04-02 | Security issue with IM robot validation |
| [#1289](https://github.com/netease-youdao/LobsterAI/issues/1289) | Feature Request | 2026-04-02 | Code block readability improvement |
| [#1285](https://github.com/netease-youdao/LobsterAI/pull/1285) | PR (Dependency) | 2026-04-02 | `concurrently` bump |
| [#1286](https://github.com/netease-youdao/LobsterAI/pull/1286) | PR (Dependency) | 2026-04-02 | `tailwindcss` bump (major version shift) |

**Recommendation:** The `tailwindcss` v3 → v4 bump (PR #1286) involves breaking changes and should be reviewed and merged with caution. The security bug #1287 should be prioritized for investigation.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the Moltis project digest for **2026-07-20**.

---

## Moltis Project Digest — 2026-07-20

### 1. Today's Overview
The project is in a **low-activity, high-signal** state today, with only one new issue and one open PR updated within the last 24 hours. A new incremental release (20260719.01) was published, indicating a regular cadence of stable builds. No PRs were merged or closed today, and no new bugs or regressions were reported. The community focus remains on long-standing roadmap features rather than urgent fixes, suggesting a stable codebase with active upstream maintenance.

### 2. Releases
- **New Version:** `20260719.01` (published 2026-07-19)
  - **Details:** This release appears to be a daily stable snapshot. No changelog or migration notes were provided in the data. Given no breaking changes have been announced in recent issues, this release is likely a routine build incorporating the latest merged PRs (including the Zvec memory backend from PR #1158). No migration steps are expected.

### 3. Project Progress
- **Merged/Closed PRs (last 24h):** None.
- **Active PRs of note:**
  - **PR #1158 (OPEN):** `feat(memory): add zvec vector database memory backend`  
    *Author:* demyanrogozhin | Created: 2026-07-17 | Updated: 2026-07-19 | Comments: 0  
    This is a substantial experimental addition providing an alternative memory backend using Zvec and redb, gated behind a `zvec` Cargo feature (enabled by default in the `full` feature set). It pairs with an independently run llama-cpp server for embeddings. This is a high-value addition for users wanting a lightweight, self-hosted vector memory solution.

### 4. Community Hot Topics
- **Issue #574 (OPEN):** `[Feature]: Model Routing Per Topic`  
  *Author:* azharkov78 | Created: 2026-04-06 | Updated: 2026-07-19 | Comments: 4 | 👍: 1  
  [GitHub Issue #574](https://github.com/moltis-org/moltis/issues/574)  
  This is the most active discussion item today. The user is requesting intelligent routing of queries to different LLMs based on topic (e.g., code vs. creative writing vs. factual QA). The single thumbs-up and long lifespan (since April) suggest it’s a frequently requested capability. The underlying need is for a flexible, policy-driven multi-model orchestration layer—this is a core differentiator for agent frameworks.

- **PR #1158:** No comments yet, but its experimental nature and direct user-vibe-coding origin make it a potential community touchpoint in the coming days.

### 5. Bugs & Stability
- **New Bugs Reported (last 24h):** None.
- **Known Open Bugs:** None in the current issue backlog. The project appears stable with no regressions filed recently.

### 6. Feature Requests & Roadmap Signals
- **Active Feature Request:**
  - **Model Routing Per Topic (Issue #574)** — The most likely candidate for the next minor or major version. This feature would allow users to define topic-based routing rules (e.g., "use OpenAI for code, local Llama for creative writing"). Expect this to be prioritized if it receives more community upvotes or a PR.
- **Prediction:** The Zvec memory backend (PR #1158) is likely to be merged within the next week, as it is feature-gated and does not break existing functionality. Model routing (Issue #574) is a longer-term roadmap item, possibly targeting mid-August 2026.

### 7. User Feedback Summary
- **Pain Points:** Users are requesting finer-grained control over which models handle specific tasks (Issue #574). This indicates that power users are hitting limits with the current monolithic or simple model-switching approach.
- **Use Cases:** Running multiple models locally (including via llama-cpp) for different sub-tasks within an agent workflow.
- **Satisfaction:** No negative feedback was observed. The presence of a new experimental memory backend (PR #1158) from a user suggests a healthy contributor ecosystem. The low bug count implies good run-time stability.

### 8. Backlog Watch
- **Issue #574 (Feature: Model Routing Per Topic)** — Open since April 6, 2026 (3+ months). While updated yesterday, it has only 1 thumbs-up. This is a significant feature request with no assigned maintainer or linked PR. If this feature is strategically important, maintainers should consider either scheduling it for the next milestone or closing with a rationale to reduce noise.
- **PR #1158 (Zvec backend)** — No maintainer review or comments yet. As an experimental contribution from a community member, it should receive a triage label (e.g., `needs-review`) to signal attention. If left unattended, it could discourage future experimental contributions.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the **CoPaw Project Digest** for **2026-07-20**, generated from the provided GitHub data.

---

### 1. Today's Overview
CoPaw (leveraging the QwenPaw codebase) is experiencing **very high community engagement** with 12 issues and 5 PRs updated in the last 24 hours, though **no new releases** were published. Activity is heavily weighted toward bug reporting and feature requests, with only **1 issue closed** and **0 PRs merged** during this window, indicating a bottleneck in maintainer throughput relative to user volume. The project is stable in terms of core architecture, but users are encountering several friction points around performance, UI/UX, and edge-case errors. The release cycle appears paused, likely focusing on stabilization for the next version.

### 2. Releases
**None.** No new releases were published today. The latest stable version referenced in user reports is **v2.0.0.post3**.

### 3. Project Progress
- **No PRs were merged or closed** in the last 24 hours.
- **Notable Open PRs (awaiting review/merge):**
    - **#6262**: Adds a "one-click copy agent configuration" feature to the UI (feat: agents).
    - **#6259**: [First-time-contributor] Adds CIDR support to the no-auth host allowlist for improved security configurability.
    - **#6256**: [First-time-contributor] Makes the sandbox-unavailable fallback behavior configurable (e.g., prompt, reject).
    - **#6247**: Fixes a crash in `memoryspace.py` caused by overly long file names in tool refs (fixes #6246).

### 4. Community Hot Topics
- **#6193** [Performance]: "MCP drivers start sequentially instead of in parallel" (4 comments). This is the highest-engagement issue. The community strongly desires parallel MCP initialization, citing an 8x speedup in startup time (40s → 5s). This is a high-impact performance win likely to be prioritized.
    - [Issue Link](https://github.com/agentscope-ai/QwenPaw/issues/6193)
- **#6163** [Feature]: "Reusable Workflow Orchestration with Audit Trail" (3 comments). Users are requesting structured, multi-step workflow definitions with audit trails, indicating a move toward enterprise-level orchestration use cases.
    - [Issue Link](https://github.com/agentscope-ai/QwenPaw/issues/6163)

### 5. Bugs & Stability
- **Critical / High Severity:**
    - **#6246** (OSError: File name too long): Crashes the `recall_history` search function. A fix PR (**#6247**) is already open.
    - **#6255** (chat error): `openai.BadRequestError` (400) during normal chat, suggesting a request formatting or token limit issue.
    - **#6257** (Duplicate thinking output): When calling multiple tools in one turn, all tool calls share the same thinking block, breaking reasoning transparency.
- **Medium Severity:**
    - **#6258** (Max output token not working): `openai` model max-token configuration is ignored.
    - **#6252** (Ctrl+Zoom broken on Linux Tauri): Standard UI zoom shortcuts do not work in the desktop app on Linux.
    - **#6240** (Memory comment visible in UI): HTML comments (`<!--...-->) related to memory updates leak into the chat display.

### 6. Feature Requests & Roadmap Signals
- **High Signal (Likely Next Version):**
    - **#6264**: System tray minimization (common desktop UX expectation).
    - **#6263**: Per-agent auto-memory profiles (advanced memory customization for different agent types).
    - **#6260**: Collapsible thinking/tool-call blocks to improve UI readability.
- **Medium Signal:**
    - **#6163**: Reusable workflow orchestration with audit trails (indicates enterprise/team use cases).
    - **#6261**: Offline file preview (currently blocked by online resource dependencies).
    - **#6262**: One-click agent config copy (PR already open; strong candidate for next patch).

### 7. User Feedback Summary
- **Pain Points:**
    - **Startup Latency**: MCP driver serialization is a primary frustration with measurable performance impact.
    - **UI Clutter**: Users feel the "thinking" and "tool call" sections are too verbose, hiding the actual agent output.
    - **Desktop Parity**: Linux Tauri users report broken zoom, and Windows/Mac users request tray minimization.
    - **Error Handling**: Users are hitting cryptic errors (400 on OpenAI, OSError for long filenames) mid-conversation.
- **Use Cases / Sentiment:**
    - Users are actively pushing CoPaw past basic chat into **composing workflows** (#6163) and **managing specialized agents** (#6263), showing a maturing user base.
    - Overall sentiment is **frustrated but engaged**; the volume of detailed bug reports and feature requests indicates high adoption and investment.

### 8. Backlog Watch
- **#6193** (MCP Parallel Startup): 4 days open, high community commentary, no assignee. This is the most impactful performance issue currently open.
- **#6163** (Workflow Orchestration): 4 days open, 3 comments. Represents a major architectural shift; needs a maintainer to scope or respond to the proposal.
- **All 5 open PRs** (#6262, #6259, #6195, #6256, #6247) remain unmerged. The **#6247** fix is critical for stability (fixes #6246), and **#6256** is a first-time contributor PR that should be acknowledged to maintain community goodwill.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-20

## 1. Today's Overview

ZeroClaw remains in an active development phase with significant governance and architectural evolution underway. Over the past 24 hours, 33 issues were updated (30 open, 3 closed) alongside 50 pull requests (48 open, 2 merged/closed), reflecting sustained high contributor and maintainer engagement. No new releases were published in this period. The project is processing a heavy load of RFCs, trackers, and feature PRs across memory subsystem redesign, security hardening, channel extensibility, and operator tooling — the v0.8.4 maintenance train (target July 31) and v0.9.0 breaking-change queue are both actively tracked, indicating the team is balancing near-term stabilization with longer-term architectural shifts.

## 2. Releases

*No new releases published in the last 24 hours.*

The latest release remains the 0.8.x series (current: 0.8.3, as referenced in ongoing RFCs). The v0.9.0 milestone is actively being coordinated via [Tracker #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432), which includes auth, security, gateway boundaries, and breaking changes. Operators should track the v0.8.4 maintenance train ([Tracker #8357](https://github.com/zeroclaw-labs/zeroclaw/issues/8357), target July 31) for imminent patch-level fixes.

## 3. Project Progress

Two pull requests were closed/merged in the last 24 hours:

| PR | Title | Type |
|---|---|---|
| [#8958](https://github.com/zeroclaw-labs/zeroclaw/pull/8958) | ACP agent selection via `?agent=` query param (multi-agent endpoints) | Merged enhancement |
| [#9017](https://github.com/zeroclaw-labs/zeroclaw/pull/9017) | `--config-dir` ignored during CLI locale detection | Bugfix closed |

**PR #8958** is a notable feature advancement: it adds ACP (Agent Communication Protocol) agent selection via query parameter, validated against an independent third-party client (Thunderbolt from Thunderbird project), strengthening multi-agent endpoint support for external clients.

Despite only two closures, the open PR pipeline is exceptionally active — 48 open PRs, many in advanced review. Key PRs approaching merge readiness include:

- **[#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486)** — OpenAI Chat Completions endpoint on gateway (critical for LangChain/Continue.dev/Aider compatibility)
- **[#8898](https://github.com/zeroclaw-labs/zeroclaw/pull/8898)** — Fix for durable global memories reaching semantic recall across sessions (memory subsystem fix)
- **[#8935](https://github.com/zeroclaw-labs/zeroclaw/pull/8935)** — Preserve Gemini thought signatures in tool-call history (provider compatibility)
- **[#8931](https://github.com/zeroclaw-labs/zeroclaw/pull/8931)** — Sanitize outbound tool-call arguments to prevent HTTP 400 on OpenRouter upstreams (provider stability)
- **[#8848](https://github.com/zeroclaw-labs/zeroclaw/pull/8848)** — Release execution slot on HITL approval, per-SOP admission policy (SOP/workflow)

## 4. Community Hot Topics

The most active discussions in the last 24 hours center on architectural governance, security, and memory redesign:

1. **[RFC #6808: Work Lanes, Board Automation, and Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** (14 comments)
   - **Status:** Accepted / rollout in progress (Rev. 18)
   - **Analysis:** A governance RFC proposing automated work routing to reduce manual maintainer overhead. The high comment count (highest of any issue) and extended revision history suggest careful community deliberation. This is foundational for how the project scales contributor workflows.

2. **[Issue #6641: Turn-level OTel trace correlation](https://github.com/zeroclaw-labs/zeroclaw/issues/6641)** (8 comments)
   - **Analysis:** Follow-up to already-merged tracing infrastructure (#6009, #6190). Community is pushing for production-grade observability — nesting LLM/tool/memory spans under turn-level traces. Indicates growing operational maturity demands from users.

3. **[RFC #9127: Abstract `KeySource` trait for master-key material](https://github.com/zeroclaw-labs/zeroclaw/issues/9127)** (7 comments)
   - **Status:** Accepted, risk:high
   - **Analysis:** Proposes classifying master-key material by source/deployment form (environment, filesystem, TPM, KMS). With 93 encrypted `#[secret]` fields, this reflects a security-conscious community pushing beyond basic encryption toward enterprise key management integration.

4. **[Tracker #8891: Persistent memory - wire curation, relevance, operability planes](https://github.com/zeroclaw-labs/zeroclaw/issues/8891)** (7 comments)
   - **Status:** 21 open items (3 issues, 18 PRs)
   - **Analysis:** The memory subsystem overhaul is the single largest active workstream. The high number of in-flight PRs suggests potential merge conflicts or coordination challenges ahead; the tracker is performing a crucial coordination role.

5. **[Bug #8505: Telegram channel cannot be configured](https://github.com/zeroclaw-labs/zeroclaw/issues/8505)** (6 comments, P1 severity)
   - **Status:** Accepted, risk:high, Quickstart-tagged
   - **Analysis:** A workflow-blocking bug affecting Telegram users who follow quickstart instructions. The bot fails to respond despite correct configuration, with potential relation to another unnamed issue. High priority and quickstart tagging suggest this is impacting new-user onboarding.

## 5. Bugs & Stability

### Critical/High Severity Bugs Reported (last 24h)

| Issue | Title | Severity | Status | Fix PR? |
|---|---|---|---|---|
| [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) | Telegram channel cannot be configured | S1 - workflow blocked | Accepted, no fix PR | No |
| [#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947) | `execute_pipeline` bypasses per-agent tool gating (confused deputy) | **S0 - data loss / security risk** | In progress, accepted | Yes — [#8848](https://github.com/zeroclaw-labs/zeroclaw/pull/8848) partially addresses by enforcing per-SOP admission policy |
| [#9117](https://github.com/zeroclaw-labs/zeroclaw/issues/9117) | ZeroCode won't start on Windows without `ZEROCLAW_SOCKET` | S3 - minor | Open, no fix PR | No |
| [#9177](https://github.com/zeroclaw-labs/zeroclaw/issues/9177) | JIT loading fails with "Engine protocol startup aborted" for Qwen3.6-35B-A3B | S2 - degraded | Open, 0 comments | No |

**Security concern:** The S0 confused deputy vulnerability ([#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947)) remains the most critical outstanding bug. `execute_pipeline` authorizes sub-tool steps from global pipeline config rather than per-agent `ToolAccessPolicy` — effectively allowing any agent to use any pipeline tool regardless of per-agent restrictions. PR [#8848](https://github.com/zeroclaw-labs/zeroclaw/pull/8848) partially addresses this through SOP-level admission policy but does not close the root vulnerability. This warrants immediate maintainer attention.

### Platform Gaps

|[#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) (CI Windows/macOS test suite) remains accepted but not yet implemented — risk that platform-specific bugs like [#9117](https://github.com/zeroclaw-labs/zeroclaw/issues/9117) (Windows ZeroCode) are only caught post-release.|

## 6. Feature Requests & Roadmap Signals

### High-Impact Requests (likely v0.9.0 or later)

1. **[RFC #9048: Separate conversation history from agent-curated long-term memory](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)** (6 comments, accepted)
   - **Signal:** Strong architectural signal — accepted RFC with PR [#9163](https://github.com/zeroclaw-labs/zeroclaw/pull/9163) already drafting ADR-010 memory authority boundaries. Likely shipped alongside the persistent memory tracker ([#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891)).

2. **[RFC #8850: Move channels & tools from compile-time features to runtime WASM plugins](https://github.com/zeroclaw-labs/zeroclaw/issues/8850)** (4 comments, accepted)
   - **Signal:** A major architectural direction for 0.9.x+ — shrinking the default binary and enabling plugin ecosystems. This would fundamentally change the distribution model and reduce compilation burden. Links to the `zeroclaw-plugins` repository.

3. **[Feature #7943: Realtime voice-host channel](https://github.com/zeroclaw-labs/zeroclaw/issues/7943)** (3 comments, accepted)
   - **Signal:** Backend-agnostic WebSocket client for external realtime voice hosts (CrispASR, sherpa-onnx). Growing interest in voice interfaces for agents.

4. **[Feature #7539: llama.cpp model router](https://github.com/zeroclaw-labs/zeroclaw/issues/7539)** (3 comments, accepted, quickstart-tagged)
   - **Signal:** User demand for quick model switching with local llama.cpp models. Quickstart tag suggests this is considered important for new users adopting local models.

### New Feature Requests (last 24h)

- **[#9158](https://github.com/zeroclaw-labs/zeroclaw/issues/9158):** Signal Channel should process "Note to Self" messages (accepted, risk:medium)
- **[#9179](https://github.com/zeroclaw-labs/zeroclaw/issues/9179):** MCP embedded resource blob intake for model (new, 0 comments)
- **[#9178](https://github.com/zeroclaw-labs/zeroclaw/issues/9178):** ACP embedded resource blob + `deliver_file` (new, 0 comments)

**Prediction:** The MCP/ACP blob handling features (##9179, #9178) are from metalmon, a frequent contributor, and fill functionality gaps with the MCP protocol. These are likely candidates for v0.9.0 inclusion given their integration with the existing ACP and MCP stacks.

## 7. User Feedback Summary

### Pain Points Expressed

| Issue | User | Pain Point |
|---|---|---|
| [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) | AIWintermuteAI | **Onboarding friction:** Telegram channel setup via quickstart doesn't work — bot is unresponsive despite correct config. Combine with [#7808](https://github.com/zeroclaw-labs/zeroclaw/issues/7808) (CLI secret prompts give no feedback) and the experience for new users is poor. |
| [#9117](https://github.com/zeroclaw-labs/zeroclaw/issues/9117) | klonuo | **Windows UX degradation:** ZeroCode TUI won't start without manually setting `ZEROCLAW_SOCKET`. The daemon socket path detection fails on Windows named pipes. Minor severity but reflects platform parity gap. |
| [#9177](https://github.com/zeroclaw-labs/zeroclaw/issues/9177) | icemann521 | **Model loading reliability:** JIT loading fails for Qwen3.6-35B-A3B (a popular MoE model) with generic "Engine protocol startup was aborted" error, but manual load works. Frustrating for users of non-standard architectures. |
| [#7808](https://github.com/zeroclaw-labs/zeroclaw/issues/7808) | Audacity88 | **Usability:** CLI secret prompts use fully hidden password input with no confirmation — users paste API keys blindly without visual feedback. Creates anxiety during critical onboarding flow. |

### User Satisfaction Signals

- The ACP integration with Thunderbolt ([#8958](https://github.com/zeroclaw-labs/zeroclaw/pull/8958)) demonstrates real third-party ecosystem adoption, which is a strong positive signal.
- The Quickstart channel field schema fix ([#8764](https://github.com/zeroclaw-labs/zeroclaw/pull/8764)) shows the team actively improving the onboarding flow that #8505 and #7808 exposed.

### Use Cases Emerging

- **Voice agents** (#7943): Users want ZeroClaw as the "LLM/agent/RAG/MCP brain" with external voice pipelines
- **Local-first with model switching** (#7539): Power users running smaller local models via llama.cpp want quick model rotation without config reloads
- **Third-party client integration** (#8958, #8486): External tools (Thunderbird Thunderbolt, LangChain, Continue.dev) are connecting to ZeroClaw via ACP and OpenAI-compatible endpoints
- **Production observability** (#6641): OTel trace correlation signals deployment at scale

## 8. Backlog Watch

### Issues Requiring Maintainer Attention

| Issue | Days Since Created | Status | Risk |
|---|---|---|---|
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) — RFC: Decouple memory lifecycle from storage backends | **59 days** (May 22) | in-progress, accepted | high |
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — RFC: Work Lanes, Board Automation | **61 days** (May 20) | accepted / rollout in progress | medium — governance debt |
| [#7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539) — llama.cpp model router | **38 days** (June 12) | accepted | medium — quickstart tagged, user-facing |
| [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) — CI test suite on Windows/macOS | **40 days** (June 10) | accepted | high — platform parity gap |
| [#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947) — `execute_pipeline` confused deputy | **32 days** (June 18) | in-progress, accepted | **high — S0 security** |
| [#7808](https://github.com/zeroclaw-labs/zeroclaw/issues/7808) — CLI secret prompts no feedback | **34 days** (June 16) | accepted | medium — onboarding UX |
| [#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897) — Zero-downtime reload for security/channel config | **33 days** (June 17) | accepted | high — operational |

### Concerns

1. **Age of accepted RFCs:** The memory lifecycle RFC ([#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850), 59 days) and work lanes RFC ([#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808), 61 days) have been accepted for nearly two months with rollout still in progress. The Work Lanes governance RFC (#6808) being at revision 18 suggests either extensive iteration or decision fatigue.

2. **S0 vulnerability aging:** The confused deputy bug ([#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947), 32 days) remains open despite S0 severity. While PR [#8848](https://github.com/zeroclaw-labs/zeroclaw/pull/8848) partially mitigates via SOP-level admission policy, the core tool-gating bypass is not closed. This should be the project's highest-priority fix.

3. **No release in sight:** With no new releases published and the v0.8.4 target date (July 31) only 11 days away, the high volume of open PRs (48) and trackers suggests the release may slip unless the team applies tighter scope control.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*