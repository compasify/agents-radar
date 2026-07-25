# OpenClaw Ecosystem Digest 2026-07-25

> Issues: 464 | PRs: 500 | Projects covered: 12 | Generated: 2026-07-25 01:40 UTC

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

# OpenClaw Project Digest – 2026-07-25

## 1. Today's Overview
The project remains in a high-activity phase with **464 issues** and **500 pull requests** updated in the last 24 hours, reflecting intense community engagement and a sustained maintenance push. Of those, **355 issues are still open/active** and **296 PRs were merged or closed** over the same period. No new release was published today — the latest stable remains 2026.7.1 and the beta track is at 2026.7.2-beta.3. The overall health is mixed: while the team is aggressively landing fixes, several P0/P1 regressions (especially around session state, message delivery, and recovery) are causing significant user friction.

---

## 2. Releases
*No new releases today.* The last stable build is **2026.7.1** (reported with a gateway crash-loop issue #107220). The beta track continues with **2026.7.2-beta.3** (known Telegram DM regression #111519). No migration notes apply at this time.

---

## 3. Project Progress
Over the past 24 hours, **296 pull requests were merged or closed**, indicating a strong focus on bug fixing and incremental improvements. Notable merged/advanced PRs visible in the open PR queue (awaiting review or proof) that represent forward progress:

- **fix(configure): ignore blank gateway env credentials in wizard probes** (#113096) – eliminates silent config shadowing.
- **fix(text): keep visible text after self-closing reasoning tag** (#113164) – fixes a long-standing text truncation bug.
- **fix(mcp): keep servers whose tool schemas omit a root type** (#113162) – broadens MCP tool schema compatibility.
- **fix(uninstall): remove shell completion block on uninstall** (#112631) – improves clean uninstall experience.
- **fix(media): keep unquoted MEDIA path with spaces as one media item** (#112464) – resolves a Windows-specific media failure.
- **fix(compaction): thread agent streamFn into safeguard summarizer** (#112416) – prevents summarizer bypass for OpenRouter models.
- **fix(gateway): shutdown reports unresolved SecretRef warnings when channel credentials use exec/file refs** (#112717) – reduces noise on graceful shutdown.
- **fix(agent): exit nonzero when gateway runs do not complete** (#111126) – ensures proper exit codes for script automation.
- **fix(googlechat): honor lowercase `no_proxy` when `NO_PROXY` is blank** (#113176) – fixes proxy handling in Google Chat.
- **fix(openrouter/venice/kilocode): discover models when HTTP proxy is required** (#112905, #112851, #112844) – makes live model discovery work behind proxies.
- **fix(volcengine/xiaomi): reject malformed base64 audio in TTS responses** (#113109, #113106) – prevents silent corruption of audio output.
- **fix(ios): render assistant media attachments** (#113057) – brings generated images to native iOS UI.

Fixes targeting regressions from recent stable releases (e.g., #98528 tool output empty, #107220 gateway crash-loop) are also in the pipeline. The overall trend is a rapid response to the P0/P1 bugs reported in the last weeks.

---

## 4. Community Hot Topics
The following issues and PRs generated the most discussion (by comment count) and reactions, reflecting key community concerns:

- **#102020** [[Bug]: Second message fails with "reply session initialization conflicted"](https://github.com/openclaw/openclaw/issues/102020) (16 comments, 1 👍) – Cross-channel, position-dependent bug affecting both Signal and other platforms after the first turn.
- **#86996** [Active Memory + Codex app-server path causes long response latency](https://github.com/openclaw/openclaw/issues/86996) (14 comments, 2 👍) – Systemic performance issue when using active memory with OpenAI/Codex models; leads to hook timeouts and gateway stalls.
- **#94228** [Native Anthropic path: replaying historical `thinking` blocks bricks long tool-use threads](https://github.com/openclaw/openclaw/issues/94228) (14 comments, 2 👍) – Permanent bricking of long conversations when replaying thinking blocks – a high-impact Anthropic-specific bug.
- **#92043** [180s compaction timeout stops legitimately long compactions from making progress](https://github.com/openclaw/openclaw/issues/92043) (13 comments, 3 👍) – A design flaw where the compaction timeout is a single wall-clock budget with no partial progress reuse, turning slow compactions into permanent failures.
- **#107220** [2026.7.1 gateway crash-loop: legacy memory sidecar conflicts are fatal](https://github.com/openclaw/openclaw/issues/107220) (10 comments, 1 👍) – A P0 regression on upgrade that crash-loops the gateway, now closed.
- **#110950** [[Feature]: Everything is a cron — unify heartbeat, watchers, and scheduled automation](https://github.com/openclaw/openclaw/issues/110950) (10 comments, 2 👍) – A design proposal to consolidate all automation into a cron primitive; signals a potential architectural shift.
- **#67419** [Session context bloat: bootstrap files re-injected every turn](https://github.com/openclaw/openclaw/issues/67419) (10 comments, 2 👍) – Long-standing token waste issue (20-30% per turn) with multiple community workarounds.
- **#7722** [Feature Request: Filesystem Sandboxing Config](https://github.com/openclaw/openclaw/issues/7722) (10 comments, 4 👍) – High-demand security feature for restricting file access; resolution has been deferred for months.
- **#10687** [Models: fully dynamic model discovery (OpenRouter + beyond)](https://github.com/openclaw/openclaw/issues/10687) (10 comments, 3 👍) – Users frustrated with static model catalogs; proxy-aware discovery PRs (above) partially address this.

Community concern is concentrated on **session reliability** and **message loss**, with several high-comment issues remaining open for weeks. The most upvoted issue (#7722, 4 👍) shows strong demand for filesystem sandboxing.

---

## 5. Bugs & Stability
**Critical / P0 (new or updated today):**
- **#107220** (CLOSED) – Gateway crash-loop on upgrade to 2026.7.1 due to legacy memory sidecar conflicts; fix was merged and closed today.
- **#90378** (OPEN, P0) – Cron store silent migration from JSON to SQLite with delivery mode default change causing channel errors.
- **#94228** (OPEN, P1) – Native Anthropic thinking block signature error permanently bricking long threads.
- **#86996** (OPEN, P1) – Latency explosion with active memory + Codex; marked `clawsweeper-recovery-stuck`.
- **#92043** (OPEN, P1) – Compaction timeout design flaw prevents recovery on slow compactions.
- **#102020** (OPEN, P1) – Second message session initialization conflict; `clawsweeper-recovery-stuck`.

**Recent regressions (new today or in last 3 days):**
- **#113306** (OPEN, P1, new today) – SQLite snapshot restore lacks end-to-end crash and identity guarantees (7 comments).
- **#112906** (OPEN, bug, v2026.7.1 regression) – Rich messages: collapsible `` tags no longer work (6 comments).
- **#111519** (OPEN, P1, regression) – Telegram DM replies fall back after stale DM-scope cleanup in 2026.7.2-beta.3.
- **#111498** (OPEN, P1, regression) – Main agent blocked by persistent workspace-state migration after Anthropic auth recovery.
- **#98528** (CLOSED, P1, regression) – Tool output returns empty after first call per turn; marked fixed but needs verification.

**Severity summary:** The majority of open P0/P1 issues involve **session state corruption** or **message loss** (labels `impact:session-state`, `impact:message-loss`). Several are tagged `clawsweeper-recovery-stuck` meaning recovery attempts are also failing. A fix PR exists for #107220 (closed) and PRs are open for #90378, #94228, #92043, and #86996. The pipeline looks active, but the sheer volume of critical open bugs is concerning.

---

## 6. Feature Requests & Roadmap Signals
The most prominent feature requests and design discussions:

| Issue | Title | Comments | 👍 | Likely next version? |
|-------|-------|----------|----|----------------------|
| #110950 | Everything is a cron | 10 | 2 | Possible – architectural RFC, may land as opt-in |
| #7722 | Filesystem sandboxing config | 10 | 4 | Unlikely – blocked on security review since Feb |
| #10687 | Dynamic model discovery | 10 | 3 | Partially addressed by proxy-aware PRs; full solution slated later |
| #12219 | Skill permission manifest standard | 6 | 0 | Low priority – not updated since Feb |
| #46812 | Control UI pinned context panel | 6 | 1 | Moderate – could be a community contribution |
| #45758 | YAML config support | 8 | 2 | Low, but simple – may appear as a niche addition |
| #46058 | Android chat-first surface | 6 | 1 | Unlikely to be upstreamed; independent fork |

**Predictions for next release (2026.7.x):**
- Continued fixes for the proxy discovery gap (already multiple PRs landed).
- More robust recovery handling for compaction and session init (multiple PRs in review).
- The "Everything is a cron" proposal (#110950) is being actively discussed and may enter experimental phase.
- Filesystem sandboxing (#7722) remains in security review; unlikely to ship until at least 2026.8.

---

## 7. User Feedback Summary
Real pain points voiced by the community:

- **Session reliability is the top complaint.** Users frequently report messages being lost, sessions wedged, or needing manual recovery. Multi-platform users (Telegram, Discord, Signal) are especially affected.
- **Upgrade regressions cause trust erosion.** The jump from 2026.6.11 → 2026.7.1 introduced at least three critical regressions (crash-loop, cron migration, tool output emptiness). Beta testers report similar friction.
- **Context management inefficiency** (bootstrap file bloat, compaction timeouts) leads to excessive token waste and frustration.
- **Model discovery and fallback issues** – users want to see which actual backend model is used, and need dynamic catalogs for fast-moving providers.
- **Security gaps** – lack of filesystem sandboxing and skill permission manifests are recurring themes, especially after reported credential stealers.
- **Platform parity** – Android, iOS, and Windows users note gaps (Windows media paths, iOS media rendering, Android lack of a first-party app).

Overall satisfaction appears mixed: users appreciate the rapid fix cadence but are experiencing too many regressions. The sentiment is "great tool, but stability needs to be the #1 priority."

---

## 8. Backlog Watch
Several important issues and PRs have been open for a long time without maintainer closure or significant update. These represent unresolved technical debt:

- **#67419** (2026-04-15) – Session context bloat from bootstrap file re-injection (10 comments, 2 👍). No PR open. Requires design decision on per-turn injection policy.
- **#7722** (2026-02-03) – Filesystem sandboxing config (10 comments, 4 👍). Stalled on security review. Closest PR is #90234 (not in today's data). 
- **#10687** (2026-02-06) – Dynamic model discovery (10 comments, 3 👍). Multiple PRs landed today for proxy support, but the full RFC remains open.
- **#47975** (2026-03-16) – Subagent sessions persist after completion, main session unresponsive (10 comments, 1 👍). No fix PR. Marked `maturity:stable` – a long-standing bug.
- **#38520** (2026-03-07) – Pre-compaction agent notification and deferral (6 comments, 1 👍). No PR. Important for workflow-heavy users.
- **#12219** (2026-02-09) – Skill permission manifest (6 comments, 0 👍). No activity since March.
- **#7524** (2026-02-02) – `groupScope` option to consolidate group sessions into main (5 comments, 4 👍). Popular request, no movement.

These items should be prioritized if the project wants to reduce churn and address long-standing community dissatisfaction. The high number of open issues with `clawsweeper-recovery-stuck` tags (e.g., #86996, #92043, #102020) suggests recovery mechanisms themselves are broken – a meta-problem that deserves systemic attention.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — AI Agent Open-Source Ecosystem

## 2026-07-25

---

## 1. Ecosystem Overview

The open-source personal AI agent landscape is experiencing a bifurcation between **stability-focused hardening** and **architectural expansion**. While projects like OpenClaw and Hermes Agent continue to support massive communities with deep feature sets, they are simultaneously grappling with post-migration regressions and session reliability crises that erode user trust. Conversely, mid-tier projects such as NanoBot and CoPaw are aggressively shipping new releases (v0.3.0 and v2.0.1 respectively), prioritizing feature velocity even as they accumulate technical debt. A third cluster—IronClaw, ZeroClaw, and LobsterAI—is in a pre-launch or upgrade cycle, with bug-bash intensity and large-scale refactoring dominating activity. The overall picture shows a maturing ecosystem where users increasingly demand **reliable baseline behavior** (message delivery, session persistence, tool execution) over novel capabilities, yet maintainers remain incentivized to ship architectural changes that risk breaking existing workflows.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Today | Health Score | Notes |
|---------|----------------------|-------------------|---------------|--------------|-------|
| **OpenClaw** | 464 | 500 | No | ⚠️ Moderate | High volume but 355 open issues; P0/P1 regressions widespread |
| **NanoBot** | 5 | 26 | No | ✅ Strong | 21/26 PRs merged; approaching v0.3.0 |
| **Hermes Agent** | 50 | 50 | No | ⚠️ Moderate | 18 issues closed; Windows encoding pain persists |
| **IronClaw** | 26 | 31 | No | ⚠️ Volatile | Pre-v1 bug bash; 19 PRs merged but critical channel bugs |
| **PicoClaw** | 1 | 8 | No | ✅ Good | 7/8 PRs merged; rapid bug turnaround |
| **NanoClaw** | 0 | 7 | No | 🟡 Stable | No new issues; 6 open fix PRs awaiting merge |
| **NullClaw** | 0 | 0 | — | ⬜ Inactive | No activity in 24h |
| **IronClaw** | — | — | — | — | (Duplicated row — see IronClaw above) |
| **LobsterAI** | 19 | 50 | Yes (v2026.7.23) | ⚠️ Mixed | 43 PRs merged but stale critical bugs (DeepSeek V4, tool failures) |
| **Moltis** | 0 | 2 | No | 🟡 Quiet | 2 open Slack PRs; no merges |
| **CoPaw** | 48 | 37 | Yes (v2.0.1) | ⚠️ Mixed | High churn; v2.0 migration regressions prominent |
| **ZeptoClaw** | 2 | 2 | No | ✅ Good | 1 PR merged; CI infra issue open |
| **ZeroClaw** | 48 | 50 | No | ⚠️ Volatile | 10 PRs merged; S0 symlink-bypass security bug remains |

**Key observations:**
- **OpenClaw dominates in absolute volume** (964 combined updates) but has the worst issue-to-resolution ratio.
- **NanoBot, PicoClaw, and ZeptoClaw** show the healthiest merge rates relative to activity.
- **IronClaw, ZeroClaw, and LobsterAI** are in high-churn states that could tip into either stability or crisis.

---

## 3. OpenClaw's Position

### Advantages vs. Peers
- **Largest community and contributor base** — 464 issues and 500 PRs in 24h is 5–10× the nearest competitor (Hermes Agent, IronClaw at ~50 each). This gives OpenClaw unmatched bug-discovery velocity and third-party integration breadth.
- **Most mature multi-channel support** — Telegram, Discord, Signal, WeChat, Google Chat all have dedicated fixes landing daily (e.g., Google Chat proxy fix #113176, Telegram DM regression #111519).
- **Reference implementation status** — Projects like LobsterAI (#2016) and CoPaw explicitly reference OpenClaw's architecture. It remains the de facto standard for fork projects and downstream tooling.

### Technical Approach Differences
- **Monolithic session state model** — OpenClaw's session management is centralized, leading to the `clawsweeper-recovery-stuck` meta-problem (recovery mechanisms themselves fail). In contrast, NanoBot and Hermes Agent use more isolated session contexts.
- **Aggressive migration pace** — OpenClaw's jump from 2026.6.11 → 2026.7.1 introduced 3+ critical regressions (crash-loop, cron migration, tool output emptiness). Other projects (NanoBot, Moltis) maintain slower, more cautious release cycles.
- **Proxy-aware model discovery** — OpenClaw leads in solving real-world deployment constraints (proxy-aware discovery for OpenRouter, Venice, Kilocode; multiple PRs merged today). Most peers still rely on static model catalogs.

### Community Size Comparison
- **OpenClaw:** ~16x more daily issue/PR activity than the next largest project (IronClaw at 50+). However, this scale also means higher noise and unresolved backlogs (355 open issues).
- **NanoBot, CoPaw, LobsterAI:** Medium-sized communities with active maintainer response but less third-party tool support.
- **PicoClaw, ZeptoClaw, Moltis:** Smaller, focused communities; faster turnaround but narrower feature scope.

### Risk for OpenClaw
The sheer volume of open P0/P1 issues (session state corruption, message loss, recovery failures) combined with the `clawsweeper-recovery-stuck` tag indicates a **systemic reliability crisis**. If not addressed in the next release, users may migrate to more stable alternatives like NanoBot or CoPaw.

---

## 4. Shared Technical Focus Areas

The following requirements emerged independently across **3 or more projects**, indicating industry-wide pain points:

| Focus Area | Affected Projects | Specific Needs |
|------------|-------------------|----------------|
| **Session reliability & state persistence** | OpenClaw, Hermes Agent, CoPaw, LobsterAI | Session corruption, message loss, recovery failure, context bloat, state.db zeroing |
| **MCP tool compatibility & error handling** | OpenClaw, NanoBot, Hermes Agent, CoPaw, ZeptoClaw, NanoClaw | Tool schema compatibility, `Tool not found` errors, silent failures, premature ack |
| **Telegram/Discord channel streaming** | OpenClaw, NanoBot, Hermes Agent, PicoClaw, ZeptoClaw, Moltis | Streaming replies, typing indicators, reaction-based feedback, long-message rendering |
| **Windows platform parity** | OpenClaw, Hermes Agent, PicoClaw, LobsterAI, ZeroClaw | Encoding issues (BOM, cp1252, GBK), media path handling, desktop installer, Smart App Control |
| **Configuration & discovery UX** | OpenClaw, Hermes Agent, IronClaw, CoPaw, LobsterAI | Dual config sources, missing fields in `config show`, OAuth redirect URI, stale model catalogs |
| **Dynamic model discovery & proxy support** | OpenClaw, NanoBot, LobsterAI, ZeroClaw | Proxy-aware discovery, dynamic catalogs, host-provider compatibility (e.g., xAI, Kimi K3) |
| **Tool execution reliability** | OpenClaw, LobsterAI, CoPaw, IronClaw | Write/Edit tool failures, AQI hallucination, silent failure after success, `save_dirty` drops |
| **Cron/automation consolidation** | OpenClaw, CoPaw, IronClaw, ZeroClaw | "Everything is a cron" proposal, cron store migration bugs, cron delivery to `None` |

### Emerging Cross-Project Pattern: **Unified Automation Primitives**
OpenClaw (#110950 "Everything is a cron") and ZeroClaw (#6808 "Work Lanes") are both proposing architectural changes that unify heartbeat, watchers, scheduled tasks, and automation into single primitives. CoPaw's scheduled-task routing fixes (#2306, #2314) indicate similar thinking. This suggests the ecosystem is converging on **declarative, cron-like automation** as a core agent primitive, rather than handling each trigger type separately.

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architecture Approach | Release Cadence |
|---------|---------------|-------------|----------------------|-----------------|
| **OpenClaw** | Full-featured personal AI assistant with multi-channel, MCP, active memory | Power users, self-hosters, developers | Monolithic; centralized session state with `clawsweeper` recovery | Frequent (stable + beta tracks); regression-prone |
| **NanoBot** | Agentic workflows with inline subagents, authorized task execution | Developers, automation engineers | Modular; WebUI-first with desktop installer; agent loop separation | Intentional (v0.3.0 looming); careful reversion of stale fixes |
| **Hermes Agent** | Desktop-first agent with skill system, MCP, multi-model | Windows users, enterprise proof-of-concepts | Desktop native (Electron); session.db for persistence; `hermes doctor` diagnostics | Steady bug-fix cycle; platform parity gaps |
| **PicoClaw** | Lightweight, embeddable chatbot platform | IoT, edge devices, multi-lingual deployments | Minimal (MQTT, compact prompt assembly); i18n focus | Moderate; security hardening (MQTT TLS) |
| **NanoClaw** | Agent-group management with timezone-aware deployment | DevOps, multi-agent operators | Per-agent-group configuration; OpenCode integration | Slow; focused on bug fixes over features |
| **IronClaw** | Pre-v1 enterprise agent with Slack/Telegram/Sheets | Enterprise teams (bug bash testers) | Rust-based; "reborn" architecture; error-recoverability epic | High-velocity pre-launch; volatile |
| **LobsterAI** | Cowork sessions, multi-annotation, enterprise IM (WeCom, DingTalk) | Chinese enterprise users, collaborative work | Skin-based UI; build entry points for Wind/WeCom; scheduled task routing | Frequent releases; stale critical bugs |
| **Moltis** | Slack-native agent with reaction-based feedback | Slack-heavy teams | Minimal; Slack Block Kit, reconnect supervision | Very slow; narrow scope |
| **CoPaw** | Mini-app platform with Kanban, PawApp SDK; multi-model execution | Users wanting rich UIs (RAG, Kanban) | PawApp platform (mini-apps); v2.0 migration with stability regressions | Active (v2.0.1); feature velocity over stability |
| **ZeptoClaw** | Lightweight multi-channel agent with Telegram streaming | Developers needing secure runtime | Rust; subprocess secret scrubbing; CI-focused | Measured; security hardening |
| **ZeroClaw** | Zero-trust, security-hardened agent with goal control plane | Security-conscious users, multi-tenant deployments | Sandbox (Landlock), goal controller, scoped secrets, unified plugin catalog | Volatile (v0.9.0 target); large refactoring PRs |

### Key Differentiation Vectors

1. **Security Model:** ZeroClaw leads with Landlock sandboxing, scoped secrets, and workspace boundary enforcement. OpenClaw and Hermes Agent rely on filesystem sandboxing requests (#7722) that remain unresolved. ZeptoClaw is adding subprocess secret scrubbing (#645).

2. **Target Platform:** Hermes Agent (Windows desktop) and LobsterAI (Chinese enterprise IM) have the strongest platform-specific focus. NanoBot is WebUI-first. OpenClaw is cross-platform but with Windows gaps.

3. **Deployment Scale:** NanoClaw (agent groups, timezones) and ZeroClaw (goal control plane, multi-tenant) target larger deployments. PicoClaw and Moltis target simpler, single-instance use cases.

4. **Architecture Philosophy:** OpenClaw is **monolithic with automatic recovery**. NanoBot is **modular with agent loop separation**. ZeroClaw is **security-first with explicit goal control**. CoPaw is **platform-driven with mini-apps**.

---

## 6. Community Momentum & Maturity

### Tier 1: High Velocity, Post-Migration Volatility
| Project | Signals | Risk |
|---------|---------|------|
| **OpenClaw** | 964 updates/24h; aggressive fix pipeline; largest community | Systemic reliability crisis; session state corruption; user trust eroding |
| **IronClaw** | Pre-v1 bug bash; 19 PRs merged; error-recoverability epic | 6+ P1 channel bugs unresolved; phantom successes undermine confidence |
| **ZeroClaw** | 10 PRs merged; large refactoring (goal, plugins); security focus | S0 symlink bypass; Windows installer broken; large PRs stalled |
| **CoPaw** | v2.0.1 released; Kanban app; PawApp SDK; 22 issues closed | v2.0 migration regressions (2s overhead, missing SSH, MCP tool not found) |

### Tier 2: Steady Progress, Approaching Milestones
| Project | Signals | Milestone |
|---------|---------|-----------|
| **NanoBot** | 21 PRs merged; v0.3.0 preparation; WebUI enhancements | v0.3.0 release imminent |
| **Hermes Agent** | 8 PRs merged; Windows encoding fixes; session reopening fix | v0.20.0 likely next |
| **PicoClaw** | 7/8 PRs merged; rapid CPU bug turnaround; i18n additions | v0.4.x on horizon |
| **ZeptoClaw** | Telegram streaming merged; security PR under review | Next minor release |

### Tier 3: Stable / Low Activity
| Project | Signals | Concern |
|---------|---------|---------|
| **NanoClaw** | 0 new issues; 6 open fix PRs | Stagnation risk; no code merged today |
| **Moltis** | 2 open Slack PRs; 0 merged | Very narrow development focus; low community engagement |
| **NullClaw** | No activity | Effectively dormant |

### Tier 4: Stalled Backlog Accumulators
| Project | Signal |
|---------|--------|
| **LobsterAI** | 50 PRs updated but 4+ critical bugs (DeepSeek V4, Write/Edit tools) open since April–May with no fix; security PRs unmerged since April |

---

## 7. Trend Signals

### 1. **Stability is the New Feature**
The most common user sentiment across all projects is **reliability fatigue**. Users consistently report messages lost, sessions wedged, configurations silently corrupted, and tools reporting phantom successes. OpenClaw's `clawsweeper-recovery-stuck` tag, CoPaw's v2.0 overhead, and IronClaw's Telegram/Sheets silent failures all point to the same conclusion: **users will tolerate fewer features over unstable ones**. The ecosystem is entering a phase where maintainers must prioritize regression-proofing over novel capabilities.

**Implication for AI agent developers:** Invest in integration testing across channels, session recovery mechanisms that actually work (partial progress reuse, not one-shot timeouts), and transparent error reporting ("hermes doctor" pattern).

### 2. **Multi-Channel UX Demands Real-Time Feedback**
Projects across the board are adding typing indicators (NanoBot, NanoClaw), reaction-based acknowledgments (Moltis), and streaming responses (ZeptoClaw Telegram, PicoClaw QQ). Users no longer accept silent agent processing — they expect **real-time visibility** into agent activity (tool calls, thinking blocks, streaming). IronClaw's bug #6649 ("tool activity panel appears after response") shows this is a baseline expectation, not a nice-to-have.

**Implication:** Any agent framework without native streaming or typing indicator support will be considered inferior.

### 3. **MCP is Becoming a Cross-Project Standard — and a Pain Point**
Model Context Protocol (MCP) tool compatibility issues appear in **7 of 8 active projects** (OpenClaw, NanoBot, Hermes Agent, CoPaw, ZeptoClaw, NanoClaw, ZeroClaw). Common failures include schema incompatibility, `Tool not found` errors, premature ack, and silent failures. The ecosystem is converging on MCP as the tool integration standard, but **interoperability testing and error recovery remain immature**.

**Implication:** A shared MCP conformance test suite or reference implementation would dramatically reduce fragmentation and accelerate development.

### 4. **Security Hardening Moves from Request to Requirement**
ZeroClaw's Landlock sandbox and symlink bypass (#9247), ZeptoClaw's subprocess secret scrubbing (#645), Hermes Agent's Smart App Control fix (#50210), and OpenClaw's filesystem sandboxing request (#7722, 4 👍, one of the most upvoted issues) all indicate that **users are deploying agents in increasingly sensitive environments** and demanding security baseline equivalent to production software.

**Implication:** Security must be architected from day one, not added as a feature. Sandboxing, credential isolation, and workspace boundaries are table stakes for enterprise adoption.

### 5. **Dynamic Model Discovery is a Cross-Project Gap**
OpenClaw's proxy-aware discovery PRs (#112905, #112851, #112844) and #10687 (10 comments, 3 👍), NanoBot's Ollama caching issue (#4867, 23 comments), LobsterAI's DeepSeek V4 rejection (#1813), and IronClaw's stale model list (#6642) all point to **static model catalogs as a major friction point**. Users want agents to dynamically discover and use available models, not require manual configuration for each provider.

### 6. **Consolidation of Automation Primitives**
OpenClaw (#110950 "Everything is a cron") and ZeroClaw (#6808 "Work Lanes") are both proposing unified automation models. CoPaw's scheduled-task fixes and NanoBot's inline subagents (`wait` argument on spawn tool) suggest the ecosystem is converging on **declarative, cron-like automation with conditionals** as the preferred abstraction for agentic workflows.

### 7. **Windows Parity is the Platform Gap**
Hermes Agent (5 Windows-specific bugs resolved/updated today), PicoClaw (Windows media path fix #112464), LobsterAI (binary signing #2327), and ZeroClaw (installer failure #9290) all show that **Windows remains the most fragmented and under-tested platform**. Any project targeting broader adoption must prioritize Windows QA, especially around encoding (BOM, cp1252) and installer reliability.

---

## Summary for Decision-Makers

| Decision | Guidance |
|----------|----------|
| **Choose a project for production deployment** | OpenClaw for ecosystem breadth (with stability caveats); NanoBot for reliability and agentic features; Hermes Agent for Windows-first deployments |
| **Contribute to** | ZeroClaw (high-impact security work), NanoBot (active, responsive), PicoClaw (focused, fast turnaround) |
| **Monitor for investment** | IronClaw v1.0 release (may reshape enterprise expectations), CoPaw's PawApp platform (mini-app ecosystem potential) |
| **Avoid for now** | LobsterAI (critical bugs aging without fix), Moltis (low momentum), NullClaw (inactive) |
| **Industry bet** | Unified automation primitives (cron-like) and MCP conformance standards will become table stakes within 6 months. Projects that invest now will lead. |

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-25

## Today’s Overview

Development momentum remains very high, with **26 pull requests updated in the last 24 hours** and **21 of them merged or closed**. The team is clearly accelerating toward a major milestone (v0.3.0), as shown by the open chore PR #5081 that bumps version numbers. Three of the five issues updated today were closed, while two open issues continue to receive attention. No new release was cut during this period, but the sheer volume of merged features, fixes, and polish across the agent, WebUI, providers, and channels indicates a release is imminent.

## Releases

No new releases today.

## Project Progress (Merged/Closed PRs)

21 PRs were merged or closed today, spanning agent mechanics, WebUI experience, provider support, and bug fixes. Highlights include:

- **Version bump & branding**: PR #5081 (open chore) prepares v0.3.0, while PR #5080 and #5079 replace raster logos with crisp SVG assets across README and WebUI.
- **First-time setup in WebUI**: PR #5078 launches the WebUI directly from desktop installers, keeping the terminal wizard as a fallback for headless environments.
- **Authorized tasks & inline subagents**: PR #5075 treats clear user requests as authorization for execution, reserving confirmation only for irreversible actions. PR #5074 adds a `wait` argument to the spawn tool, allowing inline subagent consultation with concurrency control.
- **Multimodal tool outputs**: PR #5073 preserves text, image, and file blocks returned by tools when converting OpenAI Responses, avoiding base64 serialization into inert JSON.
- **WebUI enhancements**: PR #5076 fixes custom gateway port handling with Vite; PR #5077 introduces long-press preset switching from the composer; PR #5071 shows quoted context after follow-up sends; PR #5060 polishes responsive layouts and settings search; PR #5031 fixes mobile welcome composer overlap.
- **Agent output polish**: PR #4963 replaces raw tool logs with unified one-line activity language and moves streamed answers to Streamdown with partial-Markdown repair.
- **WeChat streaming fix**: PR #4567 enables streaming LLM calls for the WeChat channel and works around a relay bug by buffering reply delivery.
- **Non-streamed finalization delivery**: PR #5049 fixes a regression where non-streaming channels could miss final responses.
- **xAI hosted search**: PR #5050 surfaces xAI’s `x_search` lifecycle events as structured agent activity in the WebUI.
- **Revert stale context fix**: PR #5072 rolls back PR #4665 because it became stale after a new architecture, preserving correct default context envelopes.

## Community Hot Topics

| Issue/PR | Comments | Summary |
|----------|----------|---------|
| [#4867](https://github.com/HKUDS/nanobot/issues/4867) [CLOSED] | 23 | **Performance**: User reports 60-second extra delay every turn when using Ollama due to prompt caching not being preserved. Highly active discussion on improving local model performance. |
| [#4637](https://github.com/HKUDS/nanobot/issues/4637) [CLOSED] | 4 | **Telegram UX**: Long markdown messages are split, and earlier trunks fail to render. |
| [#4858](https://github.com/HKUDS/nanobot/issues/4858) [OPEN] | 2 | **Refactoring**: Calls to move MCP lifecycle out of `AgentLoop` into a dedicated provider, addressing maintainability concerns. |
| [#4064](https://github.com/HKUDS/nanobot/issues/4064) [OPEN] | 1 | **Context loss**: Queued mid-turn messages lose sender/channel metadata. Only 1 comment but 1 👍, indicating user interest. |

The underlying theme is performance optimisation (Ollama caching) and architectural cleanup (MCP decoupling). The Ollama issue generated the most discussion, reflecting strong community demand for smooth local model usage.

## Bugs & Stability

- **High severity**: [#4064](https://github.com/HKUDS/nanobot/issues/4064) (open) – pending mid-turn messages lose runtime context (sender, channel, chat). Has been open since May; no fix PR yet. This could affect multi-channel workflows.
- **Medium severity**: [#5062](https://github.com/HKUDS/nanobot/issues/5062) (closed) – test failure on Linux systems where `python` is not available. Closed quickly but indicates environmental assumptions.
- **Medium severity**: [#5049](https://github.com/HKUDS/nanobot/issues/5049) (PR closed) – non-streamed finalization responses were being suppressed, causing silent delivery failures. Fixed in today’s merge.
- **Low severity**: [#4637](https://github.com/HKUDS/nanobot/issues/4637) (closed) – Telegram rendering bug, fixed previously but updated today.
- **Regression watched**: PR [#5072](https://github.com/HKUDS/nanobot/pull/5072) revert of #4665 – careful surgery to avoid introducing context bugs again.

Overall, stability is solid: most bugs have active fix PRs. The pending context loss issue (#4064) remains the main open stability risk.

## Feature Requests & Roadmap Signals

The most impactful user request is for **Ollama/LLM caching support** (#4867), which was closed as an enhancement. Given the strong community outcry, this is likely to be implemented very soon.

Other signals pointing toward the next release (v0.3.0):

- **Inline subagent consultation** (#5074) – a power-user feature for multi-step reasoning.
- **Authorized task execution** (#5075) – reduces friction by treating clear requests as permission.
- **xAI hosted search** (#5050) – expands provider integration.
- **First-time setup via WebUI** (#5078) – improves onboarding for new users.
- **Preset switching** (#5077) – streamlines model selection.
- **Branding upgrade** (#5080, #5079) – SVGs for documentation and favicons.

Open PR [#4383](https://github.com/HKUDS/nanobot/pull/4383) (Globalping MCP preset) has been pending since June 17 and could land in v0.3.0 if merged.

## User Feedback Summary

- **Pain point (critical)**: Ollama users face 60-second extra latency per turn, making Nanobot “totally unusable” with local models on 32 GB VRAM. The issue (#4867) received extensive community discussion and was closed, suggesting the team is actively working on a solution.
- **Pain point (moderate)**: Telegram long-message rendering is broken – users see only the last trunk. Closed issue indicates a fix is in place.
- **Pain point (moderate)**: Mid-turn pending messages lose channel identity (#4064). Users rely on this for multi-channel support.
- **Satisfaction**: High level of PR activity and responsive issue handling. The community sees continuous improvements in WebUI, agent capabilities, and provider support. The reversion of a stale fix (PR #5072) shows careful quality control.

## Backlog Watch

| Item | Age | Notes |
|------|-----|-------|
| [#4064](https://github.com/HKUDS/nanobot/issues/4064) (open bug – context loss) | Since May 29 (57 days) | 1 comment from maintainer; 1 👍. No fix PR yet. Increasing risk as the project grows. |
| [#4383](https://github.com/HKUDS/nanobot/pull/4383) (open PR – Globalping MCP) | Since June 17 (38 days) | No recent maintainer comments. The feature is low risk but stalled. |
| [#4858](https://github.com/HKUDS/nanobot/issues/4858) (open refactor – MCP lifecycle) | Since July 9 (16 days) | 2 comments, assigned priority p2. Discussing design. |
| [#4696](https://github.com/HKUDS/nanobot/pull/4696) (open PR – smooth WebUI streaming) | Since July 4 (21 days) | No updates; still open while other WebUI PRs have been merged. May need review. |

These items should be monitored to avoid accumulating technical debt. The context-loss bug (#4064) is the most impactful for users with multi-channel setups.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-25

## 1. Today's Overview
Activity remains high, with **50 issues** and **50 pull requests** updated in the last 24 hours. 18 issues were closed (including several P1/P2 Windows‑related bugs and a major feature umbrella for MCP smart loading), while 32 remain open. On the PR side, **8 were merged or closed**, reflecting steady bug‑fix velocity. No new releases were cut today. The project continues to grapple with **Windows‑specific encoding problems**, **session state corruption**, and **desktop/CLI config inconsistencies**, but fixes are landing quickly. Community engagement is strong, with several long‑standing issues finally resolved.

## 2. Releases
*No new releases were published on 2026-07-25.*

## 3. Project Progress
Eight pull requests were merged or closed today. Notable fixes include:

- **PR #70586** – Fix desktop session reopening with `async_delegation_complete` messages (was blanking the transcript).  
- **PR #68176** – Preserve image attachments across desktop session switches (fixes #68092).  
- **PR #69559** – Agent hangs after tool calls; closed after investigation (root cause identified; workaround in progress).  
- **PR #42785** – Cron `no_agent` script stdout now decoded with explicit UTF‑8 instead of platform default (cp1252 on Windows).  
- **PR #65123** – `.env` files with UTF‑8 BOM no longer silently drop the first key.  
- **PR #51691** – `skill_view` fixed for Windows Desktop with Chinese locale (explicit UTF‑8 read).  

Several feature‑focused PRs also remain open (see Section 6).

## 4. Community Hot Topics
The most active discussions (by comment count and reactions) highlight persistent Windows pain points and a desire for smarter resource loading:

| Issue | Comments | 👍 | Summary |
|---|---|---|---|
| [#60144 – Desktop boot fails when MCP registration exceeds 15s timeout](https://github.com/NousResearch/hermes-agent/issues/60144) (CLOSED) | 6 | 0 | Windows Desktop fails to start if 7 MCP servers + 21 adapters don’t initialise within the readiness probe window. Community solution involved reducing auto‑connected servers. |
| [#50210 – Windows bootstrap produces unsigned Hermes.exe blocked by Smart App Control](https://github.com/NousResearch/hermes-agent/issues/50210) (CLOSED) | 5 | 1 | Signed installer builds an unsigned executable, blocked by Windows 11 code integrity. Fix merged; now requires post‑build signing. |
| [#68474 – state.db zeroed (95 MB of null bytes) during desktop update to v0.19.0](https://github.com/NousResearch/hermes-agent/issues/68474) (CLOSED) | 5 | 0 | Critical session database destruction on Windows. Pre‑update snapshot saved the data; root cause was a migration race condition. Fix shipped. |
| [#66473 – MCP Smart Loading: lazy connections, tool budgets, per‑session scoping](https://github.com/NousResearch/hermes-agent/issues/66473) (CLOSED) | 4 | 0 | Umbrella feature request with 3 related sub‑issues. Community strongly supports reducing startup overhead by connecting MCP servers on‑demand instead of all at once. Closed as “won’t do in current form” but parts may be re‑scoped. |
| [#33317 – Bedrock image uploads rejected: double base64 encoding](https://github.com/NousResearch/hermes-agent/issues/33317) (OPEN) | 4 | 0 | Long‑standing bug (May) – `agent/bedrock_adapter.py` sends still‑encoded data URLs. Still open; duplicate reported. |

**Underlying needs**: Windows users demand parity with Linux/macOS stability. The community explicitly requests **lazy MCP loading** to fix the boot timeout without reducing capability. Several encoding issues (BOM, GBK, cp1252) reveal that platform‑agnostic file handling is incomplete.

## 5. Bugs & Stability
### Newly reported or updated bugs today (ranked by severity)

**P1 – Critical**
- [#69559](https://github.com/NousResearch/hermes-agent/issues/69559) – **Agent hangs indefinitely after tool call completes**, reproducible across 3 providers. Fresh Ubuntu VPS, `hermes doctor` clean. **Open, no fix PR yet.**
- [#71118](https://github.com/NousResearch/hermes-agent/pull/71118) – Telegram gateway cold start hangs at “Connecting…” forever if the first polling attempt silently fails. **Fix PR open** (teknium1).

**P2 – High**
- [#69230](https://github.com/NousResearch/hermes-agent/issues/69230) – Desktop “Could not reach this gateway yet” despite server being healthy. Windows. **Open, needs reproduction.**
- [#71026](https://github.com/NousResearch/hermes-agent/issues/71026) – `hermes insights --days 30` crashes with `TypeError: unsupported operand type(s) for -: 'str' and 'int'`. **Open.**
- [#60313](https://github.com/NousResearch/hermes-agent/issues/60313) – Dual `config.yaml` sources (GUI vs CLI) cause confusing MCP OAuth behaviour. **Open.**
- [#62849](https://github.com/NousResearch/hermes-agent/issues/62849) – Dockerfile fails on Podman/Buildah due to engine‑specific flags. **Open.**
- [#71121](https://github.com/NousResearch/hermes-agent/pull/71121) – Attached images lost across session switches (already a known issue). **Fix PR open** (OutThisLife).

**P3 – Medium**
- [#10878](https://github.com/NousResearch/hermes-agent/issues/10878) – UTF‑8 BOM in `MEMORY.md` injects invisible `\ufeff` into system prompt. **Open since April.**
- [#49451](https://github.com/NousResearch/hermes-agent/issues/49451) – `read_file` shows phantom empty last line for files ending in newline. **Open.**
- [#42384](https://github.com/NousResearch/hermes-agent/issues/42384) – Windows `pythonw` gateway silently drops emoji‑containing stdout from cron scripts. **Open.**
- [#47107](https://github.com/NousResearch/hermes-agent/issues/47107) – Agent cannot write to its own `~/.hermes/.env` (blocked by protected‑file check). **Open.**
- [#71124](https://github.com/NousResearch/hermes-agent/pull/71124) – Kanban default assignee fallback incorrectly spans all boards. **Fix PR open.**

**Notable regressions fixed today**:  
- State.db zeroed during update (#68474) – closed.  
- Session reopening with delegation messages (#70586) – closed.  
- `hermes skills check` crash on Chinese Windows (#68369) – closed.  
- `.env` first key dropped due to BOM (#65123) – closed.

## 6. Feature Requests & Roadmap Signals
Strong signals point toward the following coming in **v0.20.0** or later:

- **MCP Smart Loading** (#66473) – Although closed, the underlying problems (boot timeout, tool budget, per‑session scoping) are still open as separate issues. Expect a re‑scoped implementation.
- **Per‑session skill auto‑injection** (#26709) – Community request to declare skills that activate on every new session. Maintainer discussion is needed; PR #43762 (compression deferral) touches similar config logic.
- **Microsoft Agent Governance Toolkit (AGT) integration** (#69128) – Consolidates 53+ governance issues. One 👍, labelled `needs-decision`. Could appear as an optional plugin.
- **Hindsight recall relevance floor** (#71122) – PR open to add `recall_min_scores` config key, fixing stale fact injection. Likely to land soon.
- **Config visibility improvements** – Multiple PRs today (#71126, #71127, #71125) improve `config show`, `config edit` hints, and dotted key handling. These are small but address common user confusion.

## 7. User Feedback Summary
Real pain points expressed through issues and comments:

- **Windows frustration is high.** Users report repeated encoding failures (GBK, BOM, cp1252), desktop boot timeouts, and Smart App Control blocks. While many fixes land, the sheer volume suggests a need for a dedicated Windows QA pass.
- **Session stability is a top concern.** The state.db zeroing bug (#68474) caused significant data loss (95 MB of null bytes). Users appreciate the pre‑update snapshot mechanism but expect bullet‑proof upgrades.
- **Configuration complexity** – Dual `config.yaml` locations (#60313) and missing fields in `config show` (#71126) erode trust. The community requests clearer documentation and a single source of truth.
- **Image handling on desktop** – Attachments lost after switching sessions (#71121, #68176) is a recurring issue. The fix in #68176 addresses in‑memory persistence; a full solution for restarts is still pending.
- **Positive sentiment** – Contributors actively submit PRs (e.g., Watergard with 4 fixes today). The rate of issue closure is encouraging, and “hermes doctor” is praised for catching configuration problems early.

## 8. Backlog Watch
The following important issues have remained open for extended periods or lack maintainer response:

| Issue | Created | Priority | Summary | Age (days) |
|---|---|---|---|---|
| [#33317](https://github.com/NousResearch/hermes-agent/issues/33317) | 2026-05-27 | P3 | Bedrock image upload double‑encoded – still open, duplicate reported. Needs triage. | 59 |
| [#10878](https://github.com/NousResearch/hermes-agent/issues/10878) | 2026-04-16 | P2 | BOM in MEMORY.md causes invisible character in system prompt. No fix PR since April. | 100 |
| [#26709](https://github.com/NousResearch/hermes-agent/issues/26709) | 2026-05-16 | P3 | Feature request: per‑session skill auto‑injection. No maintainer comment. | 70 |
| [#47107](https://github.com/NousResearch/hermes-agent/issues/47107) | 2026-06-16 | P2 | Agent cannot write to its own `.env`. PR discussion stalled. | 39 |
| [#35266](https://github.com/NousResearch/hermes-agent/issues/35266) | 2026-05-30 | P3 | Z.AI API key check missing environment variables. Duplicate with no resolution. | 56 |

**Call to maintainers**: The encoding‑related bugs (#10878, #10879 closed, but #10878 open) desperately need a unified fix (e.g., always use `encoding="utf-8-sig"` or `errors="replace"`). The Bedrock image issue (#33317) blocks Windows users on AWS. A decision on the governance plugin (#69128) would help consolidate the 53+ related issues.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-07-25

## 1. Today’s Overview
The project saw a burst of activity with **8 pull requests updated in the last 24 hours** – 7 merged/closed and 1 still open. Two stale issues were closed, while one new bug report (CPU spike on input focus) was posted and quickly addressed by a same‑day merged fix. No new releases were published. The volume and variety of merged PRs – spanning security hardening, performance refactoring, i18n additions, and channel bug fixes – indicate that PicoClaw’s maintainers are actively improving both stability and code quality.

## 2. Releases
*None.* No new versions or releases were tagged in the last 24 hours. The latest available version remains **v0.3.1** (as referenced in issue #3292).

## 3. Project Progress
Seven pull requests were merged or closed today, reflecting progress in several areas:

- **Bug fix – input box CPU spike** – [#3293](https://github.com/sipeed/picoclaw/pull/3293) (merged): Direct response to the newly filed issue #3292, fixing the high CPU usage when the chat input box is focused.
- **Security & performance hardening** – [#3246](https://github.com/sipeed/picoclaw/pull/3246) (merged): Enables MQTT TLS certificate verification by default, adds OAuth timeouts, and bounds search reads.
- **Code refactoring (seahorse & skills modules)** – [#3245](https://github.com/sipeed/picoclaw/pull/3245), [#3244](https://github.com/sipeed/picoclaw/pull/3244), [#3243](https://github.com/sipeed/picoclaw/pull/3243) (all merged): Converted multi‑pass string replacements to single‑pass `strings.Replacer` and replaced `+=` concatenation with `strings.Builder` in compaction helpers, reducing allocations and improving prompt assembly performance.
- **Discord channel reliability** – [#323](https://github.com/sipeed/picoclaw/pull/323) (closed): Handles message length limits with rune‑based splitting and maintains typing status.
- **i18n – Czech translations** – [#3247](https://github.com/sipeed/picoclaw/pull/3247) (merged): Adds Czech locale entries for code wrap options introduced in v0.3.1.

The open PR [#3261](https://github.com/sipeed/picoclaw/pull/3261) (Traditional Chinese / zh‑TW locale) has been marked as stale but remains open, awaiting review.

## 4. Community Hot Topics
The most discussed items in the last 24h are both issues that were closed as stale:

- **[Issue #2796](https://github.com/sipeed/picoclaw/issues/2796) – “History only shows last user message”** (7 comments, closed stale). Users expressed frustration that conversational history compresses user messages to only the final one, while expecting full display. The underlying need is for **transparent history management** – compressing only for the LLM context, not for the user’s UI.
- **[Issue #3201](https://github.com/sipeed/picoclaw/issues/3201) – “Support streaming output for QQ channel”** (4 comments, closed stale). The QQ channel currently sends complete responses only, unlike Telegram and Pico WebSocket. Users want **real‑time, token‑by‑token streaming** to improve perceived latency.

Both were closed due to inactivity, but the requests remain unaddressed and may resurface.

## 5. Bugs & Stability
| Severity | Bug | Status | Notes |
|----------|-----|--------|-------|
| **High** | [#3292](https://github.com/sipeed/picoclaw/issues/3292) – CPU usage spikes when input box is focused | **Open** (fix PR #3293 merged same day) | Affects v0.3.1 on Debian/Firefox with deepseek-v4-flash. Rapidly patched – expect the fix in next release. |
| Medium | [#2796](https://github.com/sipeed/picoclaw/issues/2796) – History only shows last user message | Closed stale | No fix merged; workaround unknown. Could be a design limitation rather than a regression. |
| Low | No other new crashes or regressions reported. | – | – |

The swift resolution of #3292 demonstrates strong responsiveness to critical bugs.

## 6. Feature Requests & Roadmap Signals
- **Streaming for QQ channel** ([#3201](https://github.com/sipeed/picoclaw/issues/3201)) – Closed stale but still wanted by the community. A likely candidate for a future “streaming” feature push if community interest revives.
- **Internationalization expansion** – Merged Czech locale ([#3247](https://github.com/sipeed/picoclaw/pull/3247)) and pending zh‑TW locale ([#3261](https://github.com/sipeed/picoclaw/pull/3261)) signal that multi‑language support is a growing focus. Expect more locales in v0.4.x.
- **Enterprise/security hardening** – The merged PR [#3246](https://github.com/sipeed/picoclaw/pull/3246) (MQTT TLS, OAuth timeouts) suggests some users are deploying PicoClaw in production or sensitive environments. Future security audits may follow.

## 7. User Feedback Summary
- **Pain points**: High CPU usage on input focus (reported and fixed quickly, so likely temporary). Incomplete history display remains an unresolved annoyance.
- **Use cases**: Multi‑platform chatbots – interest in QQ channel (China market) and Discord reliability.
- **Satisfaction**: The project’s rapid turnaround on the CPU bug (#3292 → fix in <24h) shows healthy responsiveness. The closure of two feature/bug issues as stale, however, may leave some users feeling unheard.

## 8. Backlog Watch
- **[PR #3261](https://github.com/sipeed/picoclaw/pull/3261) – “Add zh‑TW locale and Traditional Chinese translations”** – Open since July 16, marked as stale, zero comments. Needs maintainer review or feedback.
- **[Issue #2796](https://github.com/sipeed/picoclaw/issues/2796) – History display bug** – Closed as stale but never resolved. If a user re‑opens or a new report appears, it should be prioritized given the 7 comments and clear expected behavior.
- **[Issue #3201](https://github.com/sipeed/picoclaw/issues/3201) – QQ streaming** – Same situation; closing without addressing the core request may lead to duplicate reports.

All links are provided for direct access. No release blockers are currently apparent.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-25

## Today’s Overview

NanoClaw saw no new issues or releases in the last 24 hours, but 7 pull requests were updated—6 remain open and 1 was closed (as a mistake). Activity is concentrated on bug fixes and a single feature addition, with contributions from both core team members and external developers. The absence of newly filed issues suggests user-reported problems are being captured through existing PRs, while the steady stream of fix PRs indicates active maintenance. Overall project health appears stable, though no code has been merged yet today.

## Releases

No new releases exist for today. The last recorded release is not specified in the data.

## Project Progress

The only PR closed in the last 24 hours was **#3123** — a mistaken submission titled “Pacific changes. Wrong PR.” by `iamarunkumark` (closed without merge). No features or fixes were merged during this period. However, several open fix PRs are progressing through review and could land soon (see Bugs & Stability below).

## Community Hot Topics

No issues or PRs generated comments or reactions (all values are `0`), so no active discussion can be identified. Notably, **PR #3125** introduces a per-agent-group timezone override, which may attract attention from users managing multi-timezone agent deployments. Links:
- [PR #3125 – feat: per-agent-group timezone override](https://github.com/nanocoai/nanoclaw/pull/3125)

## Bugs & Stability

A cluster of bug-fix PRs is awaiting review/merge, addressing several areas:

- **Silence on nudged chat turns** — [PR #3126](https://github.com/nanocoai/nanoclaw/pull/3126) prevents the agent runner from delivering silence when a nudged chat turn remains bare.
- **OpenCode compatibility** — [PR #3122](https://github.com/nanocoai/nanoclaw/pull/3122) fixes main compatibility, custom-endpoint transport, and memory parity for OpenCode integration.
- **Typing indicator during chat processing** — [PR #3093](https://github.com/nanocoai/nanoclaw/pull/3093) keeps the typing indicator active while turns are being processed.
- **Unavailable MCP servers** — [PR #3124](https://github.com/nanocoai/nanoclaw/pull/3124) adds proper reporting when MCP servers are unavailable.
- **Template context prepending** — [PR #3090](https://github.com/nanocoai/nanoclaw/pull/3090) fixes a bug where top-level context Markdown was not prepended in templates.

All fixes are authored by core-team or follows-guidelines contributors. Severity is moderate—each addresses a specific user-facing regression or missing behavior. No crashes or regressions were reported in issues today.

## Feature Requests & Roadmap Signals

The only new feature surfaced today is **per-agent-group timezone override** ([PR #3125](https://github.com/nanocoai/nanoclaw/pull/3125)), which allows operators to set an IANA timezone per agent group via `ncl groups config update --timezone`. This feature is likely to be included in the next minor release, especially given its clean migration (020) and gating by approval. No other feature requests appeared, suggesting the team is currently focused on hardening before adding larger capabilities.

## User Feedback Summary

While no direct user feedback (comments, issues) was recorded today, the fix PRs implicitly reveal user pain points:
- Chat interactions can produce awkward silent responses after nudging; users expect audible or visible feedback.
- OpenCode integration users experience compatibility and memory-parity issues.
- Typing indicators disappear prematurely during chat processing, confusing users.
- Unavailable MCP servers were previously unreported, leading to silent failures.
- Templates may omit top-level context, breaking outputs for certain configurations.

These are all actionable items that the project team is actively addressing.

## Backlog Watch

No issues exist in the backlog (total issues: 0). However, two fix PRs—[#3090](https://github.com/nanocoai/nanoclaw/pull/3090) and [#3093](https://github.com/nanocoai/nanoclaw/pull/3093)—have been open since July 19 (six days) without merging. Both are core-team authored and appear uncontroversial; they may benefit from a final review or maintainer sign-off to avoid accumulating stale work. No other items require immediate attention.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-25

## 1. Today's Overview
IronClaw activity remains intense as the project approaches its v1 launch: 26 open/active issues and 31 open PRs were updated in the last 24 hours, alongside 6 closed issues and 19 merged/closed PRs. The bulk of this activity centers on **bug-bash findings** (labelled `bug_bash_P1`/`P2` and `v1-launch-checklist`) and the **reborn architecture** refactoring. No new releases were published. Overall project health is high‑velocity but volatile – core functionality (Slack, Telegram, Google Sheets, tool execution) shows several critical integration bugs, while platform infrastructure (error recovery, skill routing, WebUI performance) is being hardened.

## 2. Releases
*None in the last 24 hours.* The most recent release candidate (1.0.0-rc.8) is referenced in bug reports but no new tags were cut. The release automation PR [#5598](https://github.com/nearai/ironclaw/pull/5598) remains open, suggesting a next version is still being prepared.

## 3. Project Progress (merged/closed today)
**19 PRs were merged or closed** in the past day. Notable contributions:

- **[PR #6664](https://github.com/nearai/ironclaw/pull/6664)** (closed) – Fixed capability coverage counting to measure per‑outcome instead of per‑capability, improving test quality.
- **[PR #6663](https://github.com/nearai/ironclaw/pull/6663)** (closed) – Defaulted `cargo run` to serve the WebUI, simplified developer workflow.
- **[PR #6637](https://github.com/nearai/ironclaw/pull/6637)** (closed) – Documented the current Reborn storage landscape and proposed a hybrid relational model.
- Several **v1‑launch‑checklist issues** were closed:
  - [#6521](https://github.com/nearai/ironclaw/issues/6521): CLI unavailable on agent staging → fixed.
  - [#6656](https://github.com/nearai/ironclaw/issues/6656): Upgrade disabled for pre‑v1.0.0 → released.
  - [#6614](https://github.com/nearai/ironclaw/issues/6614): Slack personal OAuth binding resolution issue → closed.
  - [#6482](https://github.com/nearai/ironclaw/issues/6482) & [#6490](https://github.com/nearai/ironclaw/issues/6490): Pluggable memory provider epic / Manifest V3 contract – closed as completed.

## 4. Community Hot Topics

| Issue/PR | Title | Comments | Activity |
|----------|-------|----------|----------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | [EPIC] Error‑recoverability endgame | 5 | Core reliability epic; the model must recover from 100% of errors. |
| [#6544](https://github.com/nearai/ironclaw/issues/6544) | No UI/CLI to configure Slack OAuth redirect URI | 4 | Blocking hosted Slack integration; resolved by closure today. |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) | Epic: Hermetic capability & journey testing platform | 3 | Addressing lack of deterministic coverage – high interest. |
| [#6656](https://github.com/nearai/ironclaw/issues/6656) | Disable upgrade before v1.0.0 | 2 | Quick close; prevents migration issues. |

**Underlying needs:** The community (primarily core team) is focused on:
- Ensuring **zero silent failures** (error recovery epic).
- Closing **gaps in configuration UX** (Slack OAuth).
- Building a **reliable testing foundation** for capabilities and user journeys.

Most PRs have no comment counts recorded, indicating discussion happens elsewhere (Slack) or PRs are reviewed without discussion.

## 5. Bugs & Stability
A large volume of bugs was reported from the ongoing bug bash. Severity ranking (P1 > P2):

### Critical (P1) – Immediate user impact
- **Slack send_message success but DM not delivered** – [#6645](https://github.com/nearai/ironclaw/issues/6645): Tool reports success, `outbound_delivery_transport` shows failure. No fix PR linked yet.
- **Telegram replies delivered to wrong user message** – [#6644](https://github.com/nearai/ironclaw/issues/6644): Messages are misassociated.
- **Telegram messages accepted but never processed** – [#6643](https://github.com/nearai/ironclaw/issues/6643): Complete silent failure after pairing.
- **Agent fabricates AQI data from mixed/cached sources** – [#6650](https://github.com/nearai/ironclaw/issues/6650): Hallucinated numbers not matching any live source.

### High (P2) – Functional but confusing
- **Tool activity panel appears after response** – [#6649](https://github.com/nearai/ironclaw/issues/6649) (no real‑time feedback).
- **Tool failure messages duplicated and inconsistent** – [#6648](https://github.com/nearai/ironclaw/issues/6648).
- **Agent ignores Google Sheets action, reports only email** – [#6646](https://github.com/nearai/ironclaw/issues/6646): 26 tool calls, never writes.
- **Agent repeats question text after responding** – [#6651](https://github.com/nearai/ironclaw/issues/6651): UI duplicate.
- **CLI model list shows stale provider** – [#6642](https://github.com/nearai/ironclaw/issues/6642): `ironclaw models list` ignores actual config changes via TUI.

### Lower severity / UX
- Chat failure messages ignore selected language [#6623](https://github.com/nearai/ironclaw/issues/6623)
- Automation filter flashes full loading skeleton [#6622](https://github.com/nearai/ironclaw/issues/6622)
- Extension modal doesn’t trap keyboard focus [#6621](https://github.com/nearai/ironclaw/issues/6621)

No fix PRs are directly linked to these bugs yet, though several open refactoring PRs (e.g., [#6616](https://github.com/nearai/ironclaw/pull/6616) extension host shrink, [#6655](https://github.com/nearai/ironclaw/pull/6655) extension state normalization) may indirectly address stability.

## 6. Feature Requests & Roadmap Signals

| Epic/Issue | Description | Likely next version inclusion |
|------------|-------------|-------------------------------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | Error‑recoverability endgame | High – core PRs [#6530](https://github.com/nearai/ironclaw/pull/6530) (pre‑termination warnings) and [#6665](https://github.com/nearai/ironclaw/pull/6665) (actionable diagnostics) are open. |
| [#6565](https://github.com/nearai/ironclaw/issues/6565) | Reliable skill discovery, routing, activation | High – repeatedly identified as a gap. |
| [#6641](https://github.com/nearai/ironclaw/issues/6641) | Skill self‑creation design doc | Medium – design phase. |
| [#6666](https://github.com/nearai/ironclaw/issues/6666) | Move process journal kernel to `ironclaw_processes` | Medium – restructuring. |
| [#6628](https://github.com/nearai/ironclaw/issues/6628) | Improve WebUI bundle size & loading performance | High – three child issues [#6631](https://github.com/nearai/ironclaw/issues/6631), [#6630](https://github.com/nearai/ironclaw/issues/6630), [#6629](https://github.com/nearai/ironclaw/issues/6629) are open. |
| [#6544](https://github.com/nearai/ironclaw/issues/6544) | UI/CLI for Slack OAuth redirect URI | Already closed – shipped. |

User‑visible feature requests center on **configuration accessibility** (Slack OAuth, model switching) and **reliable tool execution** (Sheets, Slack, Telegram). The next minor release (v1.0.0-rc.9 or v1.0.0) will likely include error recovery improvements, skill routing fixes, and WebUI performance optimization.

## 7. User Feedback Summary
Feedback from bug reports and issue comments reveals several pain points:

- **Confidence eroding from phantom successes** – Tools that report success yet fail silently (Slack DM, Google Sheets) directly undermine user trust.
- **Cross‑channel inconsistency** – Telegram and Slack behave differently, with Telegram showing complete processing silence after initial pairing.
- **UI/UX friction** – Duplicate messages, language‑ignored error texts, and missing real‑time tool status frustrate users.
- **Data hallucination** – The AQI fabrication issue (air quality index not matching any source) is particularly concerning for factual reliability.
- **Configuration surprises** – The CLI model list ignoring actual config changes and missing OAuth redirect URI configuration were blocking for some usage scenarios.

Satisfaction appears low among the bug‑bash testers, but the rapid closure of several v1‑launch‑checklist issues signals that the team is responsive to feedback.

## 8. Backlog Watch
Several important PRs have been open for extended periods without merging:

- **Signing subsystem PRs** – Four PRs from May 2026 remain open:
  - [#4058](https://github.com/nearai/ironclaw/pull/4058) – KMS curve‑capability fail‑closed (open since May 25)
  - [#4060](https://github.com/nearai/ironclaw/pull/4060) – Continuation context assertion (May 25)
  - [#4104](https://github.com/nearai/ironclaw/pull/4104) – Grant expiry + binding tenant‑key (May 27)
  - [#4055](https://github.com/nearai/ironclaw/pull/4055) – TrustEnrollment ceremony (May 25)
  - [#4054](https://github.com/nearai/ironclaw/pull/4054) – Multi‑tenant isolation tests (May 25)
  
  These represent a large, interdependent signing feature that has been waiting for review/merge for two months.

- **Release automation** – [#5598](https://github.com/nearai/ironclaw/pull/5598) (chore: release) has been open since July 3, blocking new version publication.

- **WebUI design system** – [#5563](https://github.com/nearai/ironclaw/pull/5563) (design tokens + /playground) open since July 2, waiting for feedback resolution.

These long‑standing items may introduce merge conflicts or become stale. Maintainer attention is recommended to avoid technical debt accumulation.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-25

## 1. Today's Overview

LobsterAI shows high development activity with **50 pull requests updated in the last 24 hours** (43 merged/closed, 7 open), signaling a strong release cycle. The project also saw **19 open issues updated**, all remaining open with no closures. A new release **v2026.7.23** shipped, introducing AI skin creation, browser multi-annotation support, and build entry point refinements. Despite the busy code churn, the issue backlog continues to grow with many stale reports from April–May that still lack maintainer resolution, particularly around model provider compatibility and tool execution stability.

## 2. Releases

**LobsterAI 2026.7.23** (released 2026-07-23)  
[View release](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.7.23)

Changes:
- **feat(skin):** Improved AI skin creation flow (PR [#2361](https://github.com/netease-youdao/LobsterAI/pull/2361))
- **feat(cowork):** Support for browser multi-annotation attachments (PR [#2366](https://github.com/netease-youdao/LobsterAI/pull/2366))
- **feat(build):** Added explicit channel entry points for Wind builds

No breaking changes or migration instructions were documented in the release notes.

## 3. Project Progress

Of the 43 merged/closed PRs, key themes include:

- **Cowork stability & diagnostics:**  
  Merged [#2382](https://github.com/netease-youdao/LobsterAI/pull/2382) (model timeout handling, 330s timeout, local wait hints), [#2264](https://github.com/netease-youdao/LobsterAI/pull/2264) (large session rendering optimization, diagnostics ZIP export), [#2261](https://github.com/netease-youdao/LobsterAI/pull/2261) (subagent panel timestamp repair), [#2299](https://github.com/netease-youdao/LobsterAI/pull/2299) (subagent child tool history sync), [#2231](https://github.com/netease-youdao/LobsterAI/pull/2231) (scheduled-task gateway-backed run history).

- **Scheduled task routing:**  
  [#2306](https://github.com/netease-youdao/LobsterAI/pull/2306) (IM group task routing repair), [#2314](https://github.com/netease-youdao/LobsterAI/pull/2314) (preserve WeCom/DingTalk group ID casing), [#2328](https://github.com/netease-youdao/LobsterAI/pull/2328) (fix Chrome leaks by serializing browser launch/search).

- **Build & installer fixes:**  
  [#2327](https://github.com/netease-youdao/LobsterAI/pull/2327) (sign all Windows binaries via internal service), [#2326](https://github.com/netease-youdao/LobsterAI/pull/2326) (self-heal interrupted win-resources.tar extraction), [#2309](https://github.com/netease-youdao/LobsterAI/pull/2309) (null-byte stripping ES2020-compatible).

- **New model support:**  
  [#2381](https://github.com/netease-youdao/LobsterAI/pull/2381) (feat: support Kimi K3, opened today, not yet merged).

- **Security PRs (still open):**  
  [#1831](https://github.com/netease-youdao/LobsterAI/pull/1831) (log desensitization), [#1832](https://github.com/netease-youdao/LobsterAI/pull/1832) (IPC access control), [#1833](https://github.com/netease-youdao/LobsterAI/pull/1833) (shell.openExternal scheme whitelist) remain unmerged since April.

## 4. Community Hot Topics

Most commented issues (last 24h):

- **[#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) — DeepSeek V4 cannot use (7 comments)**  
  `LLM request failed: provider rejected the request schema or tool payload`. High frustration as the model is widely used; no resolution since April.

- **[#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) — "Infinite NO_REPLY" after follow-up (3 comments)**  
  Task completes prematurely leaving empty response on the UI. User logs show the model still outputs after the engine signals completion.

- **[#1878](https://github.com/netease-youdao/LobsterAI/issues/1878) — IM WeChat QR code cannot enter verification code (3 comments)**  
  New WeChat integration requires 6-digit input but UI provides no field, blocking configuration.

- **[#1796](https://github.com/netease-youdao/LobsterAI/issues/1796) — Write/Edit tool always fails (2 comments)**  
  Persistent failure over several days; user has already updated app.

Underlying need: **Seamless multi-provider model compatibility** and **reliable tool execution** are the most urgent community pain points.

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR exists? |
|----------|-------|-------------|---------------|
| **Critical** | [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) | DeepSeek V4 provider rejection | No |
| **Critical** | [#1796](https://github.com/netease-youdao/LobsterAI/issues/1796) | Write/Edit tool always fail | No |
| **High** | [#1988](https://github.com/netease-youdao/LobsterAI/issues/1988) | After update, qwen3.6-plus forced to NetEase model | No |
| **High** | [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) | Infinite NO_REPLY / truncated output | No |
| **Medium** | [#1971](https://github.com/netease-youdao/LobsterAI/issues/1971) | Scroll anomaly with long Mermaid elements | No |
| **Medium** | [#2017](https://github.com/netease-youdao/LobsterAI/issues/2017) | Local runtime fails with "detect OpenClaw runtime" error | No |

No fix PRs for these bugs were merged today. The closest related merged PR is [#2382](https://github.com/netease-youdao/LobsterAI/pull/2382) which improves model timeout handling but does not fix the provider rejection or tool failures.

## 6. Feature Requests & Roadmap Signals

Active feature requests in issues:

- **[#1797](https://github.com/netease-youdao/LobsterAI/issues/1797) — Batch delete conversations** (👍1)  
  Strongly requested by user "to keep context effective".

- **[#1836](https://github.com/netease-youdao/LobsterAI/issues/1836) — UI redesign**  
  User calls the interface "ugly compared to competitors".

- **[#1880](https://github.com/netease-youdao/LobsterAI/issues/1880) — Hermes Agent integration**  
  Reference to Open WebUI’s agent connector pattern.

- **[#2016](https://github.com/netease-youdao/LobsterAI/issues/2016) — OpenHuman engine support**  
  New AI agent engine request.

- **[#2041](https://github.com/netease-youdao/LobsterAI/issues/2041) — Memory system improvements**  
  Analysis-style issue comparing current “skill-self-evolver” to ideal memory framework.

Roadmap signals from PRs:  
- **LiteLLM support** ([#2193](https://github.com/netease-youdao/LobsterAI/pull/2193)) — still open since June, would enable 100+ providers.  
- **Kimi K3** ([#2381](https://github.com/netease-youdao/LobsterAI/pull/2381)) — freshly opened, likely to merge soon.  
- **Dreaming switch fix** ([#2039](https://github.com/netease-youdao/LobsterAI/issues/2039)) — user reports upstream OpenClaw bug, maintainer awareness.

**Prediction:** Next minor version may include Kimi K3 support, LiteLLM (if merged), and further Cowork UX fixes. UI redesign and memory system improvements are likely longer-term.

## 7. User Feedback Summary

- **Dissatisfaction:**  
  - Model provider forcing (NetEase for qwen3.6-plus) after update feels restrictive.
  - Write/Edit tools broken for days with no visible fix.
  - UI aesthetics deemed poor vs. competitors like Open WebUI.
  - Blank loading states and inconsistent empty-state design.
  - Security concerns: path traversal vulnerability in email skill ([#1885](https://github.com/netease-youdao/LobsterAI/issues/1885)) remains open.

- **Satisfaction:**  
  - Active PR merge rate shows the project is alive and well-maintained.
  - Cowork session improvements (diagnostics export, subagent history) address advanced user needs.
  - Scheduled task routing fixes target enterprise IM users (WeCom, DingTalk).

**Recurring theme:** Users expect **reliable baseline functionality** (model calling, tool execution) before advanced features.

## 8. Backlog Watch

Issues and PRs that have remained unanswered or unmerged for extended periods:

- **[#1813](https://github.com/netease-youdao/LobsterAI/issues/1813)** — DeepSeek V4 failure (open since April 24, last maintainer activity unclear)
- **[#1796](https://github.com/netease-youdao/LobsterAI/issues/1796)** — Write/Edit tools fail (open since April 22)
- **[#1885](https://github.com/netease-youdao/LobsterAI/issues/1885)** — Email skill path traversal (security, open since May 6)
- **[#1831](https://github.com/netease-youdao/LobsterAI/pull/1831)** — Log desensitization (PR open since April 27, no merge)
- **[#1832](https://github.com/netease-youdao/LobsterAI/pull/1832)** — IPC access control (PR open since April 27)
- **[#1833](https://github.com/netease-youdao/LobsterAI/pull/1833)** — Shell URL scheme whitelist (PR open since April 27)
- **[#2193](https://github.com/netease-youdao/LobsterAI/pull/2193)** — LiteLLM support (PR open since June 23, needs review)

These items represent **critical stability and security gaps** that have not been addressed for 1–3 months and should be prioritized by maintainers to prevent further user attrition.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

## Moltis Project Digest – 2026-07-25

### 1. Today's Overview
Project activity was low over the past 24 hours. No new issues were created or updated, and no releases were published. Two open pull requests (#1165 and #1166) from the same author were updated, both targeting Slack integration improvements. Both remain open and unreviewed. The absence of any merged PRs or closed issues suggests the project is currently in a development phase with a narrow focus on Slack-specific features.

### 2. Releases
No new releases were recorded during this period.

### 3. Project Progress
No pull requests were merged or closed today. Two open PRs represent ongoing work:

- **PR #1165** – [feat(slack): acknowledge messages with reactions and add reaction triggers](https://github.com/moltis-org/moltis/pull/1165)  
  Adds Slack acknowledgment reactions (a substitute for typing indicators) and inbound reaction triggers. Includes a bugfix for a confirmed wrong-message issue in threaded replies.

- **PR #1166** – [feat(slack): phase reactions, reconnect supervision, Block Kit, and a premature-ack bugfix](https://github.com/moltis-org/moltis/pull/1166)  
  Stacked on #1165, this PR introduces eight further Slack improvements: reaction lifecycle management, reconnect supervision for the Slack client, Block Kit message support, and a fix for a premature-acknowledgment bug in `chat.send`.

### 4. Community Hot Topics
No issues were updated in the last 24 hours. The only recent activity is the two Slack-focused PRs, but neither has accumulated comments or reactions yet. No trending community discussions are present.

### 5. Bugs & Stability
Two bugs have been identified and fixed within the open PRs (not yet merged):

- **Wrong-message bug in threaded replies** – Fixed in PR #1165. Users sending replies in Slack threads could be routed to incorrect parent messages. **Severity: High** (data loss / confusion).
- **Premature-acknowledgment bug in `chat.send`** – Fixed in PR #1166. The agent run was being acknowledged before actual completion, potentially causing misleading feedback to users. **Severity: Medium** (user experience degradation).

No other bugs, crashes, or regressions were reported today.

### 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed today. However, the two open PRs strongly indicate the development team is addressing a common Slack bot pain point: the lack of a typing indicator. The introduction of emoji reactions, Block Kit, and reconnect supervision are all user-visible improvements. Based on the stacking of PRs, these features are likely to land together in the next release (v0.x). No roadmap signals beyond Slack integration are visible.

### 7. User Feedback Summary
No direct user feedback was captured in issues or comments. The PR descriptions reference comparisons with the `hermes-agen` and `openclaw/hermes` projects, suggesting an external design inspiration. The lack of complaints or praise in the issue tracker may indicate either low community engagement or that the Slack-related work is being developed internally before wider testing.

### 8. Backlog Watch
No long-standing issues or PRs requiring maintainer attention were found. The most recent open items are the two PRs from today, which are awaiting review. The project backlog appears clean.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-25

**Project**: CoPaw (AI agent & personal assistant platform) — [GitHub](https://github.com/agentscope-ai/CoPaw)  
**Data snapshot**: 48 issues updated in last 24h, 37 PRs updated, 2 new releases.

---

## Today's Overview

The project shows extremely high activity, with 48 issues touched (22 closed) and 37 PRs updated (14 merged/closed) in the past day. Two new versions were published: a stable **v2.0.1** featuring the new PawApp SDK and a built-in Kanban app, and a release candidate **v2.0.1-beta.3** focusing on console performance stabilization. However, the community continues to report significant pain points after the v2.0.0 upgrade — particularly a ~2s fixed overhead on every reply, missing SSH offline/custom profiles, and frequent `Tool not found` errors with MCP. A large batch of feature requests (34 issues) was submitted by a single user and immediately closed as "Close-and-review-later", suggesting the maintainers are triaging a heavy feature pipeline while prioritizing stability fixes.

---

## Releases

### v2.0.1 (Stable)  
**What's Changed**  
- **PawApp Platform & SDK**: New mini-app framework allowing plugins to build rich interactive UIs on top of QwenPaw. Ships with a built-in **Kanban task board** app for project management ([PR #6150](https://github.com/agentscope-ai/QwenPaw/pull/6150)).  
- **No explicit migration notes** — though users upgrading from v1.x should be aware of the architectural changes documented in v2.0.0.

### v2.0.1-beta.3 (Release Candidate)

- Fixed chat options memoization and reduced SSE re-parsing ([#6393](https://github.com/agentscope-ai/QwenPaw/pull/6393))  
- Version bump and date update

**Migration Warning**: Users on v1.x who upgrade to v2.0.x may encounter missing features (see Issue #5980 — SSH offline, returning 404 profiles). The v2.0.1 release does **not** explicitly address these regressions.

---

## Project Progress

### Merged/Closed PRs (14 items today)

| PR | Description | Status |
|----|-------------|--------|
| [#6323](https://github.com/agentscope-ai/QwenPaw/pull/6323) | Redesigns Scroll context management with staged compaction for durable task continuity | Merged |
| [#6118](https://github.com/agentscope-ai/QwenPaw/pull/6118) | Adds Zalo Bot channel (long-polling, no webhook required) | Merged |
| [#5698](https://github.com/agentscope-ai/QwenPaw/pull/5698) | Adapts `run_tool_batch` to agentscope 2.0 with control-flow primitives | Merged |
| [#6401](https://github.com/agentscope-ai/QwenPaw/issues/6401) | Fixed: Cron tasks reusing user sessions no longer overwrite chat history | Closed with fix |

Other closed/merged items include dependency bumps, documentation updates, and several low-risk fixes. A batch of 34 enhancement proposals (Issues #6439–#6451) were all closed as "Close-and-review-later" — indicating the maintainers have acknowledged them but are deferring implementation to a future milestone.

---

## Community Hot Topics

1. **Issue #5980 — Missing features after v2.0 upgrade**  
   [agentscope-ai/QwenPaw#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980)  
   *7 comments, 0 👍* — Reports SSH offline functionality and custom profiles returning 404 in v2.0.0. No fix PR yet. High visibility.

2. **Issue #6307 — ~2s overhead per reply in v2.0**  
   [agentscope-ai/QwenPaw#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307)  
   *7 comments, 0 👍* — Architecturally introduced fixed latency independent of model. No PR linked. Performance regression is a top concern.

3. **Issue #6258 — OpenAI model max_tokens not working**  
   [agentscope-ai/QwenPaw#6258](https://github.com/agentscope-ai/QwenPaw/issues/6258)  
   *3 comments* — Configuration parameter ignored in v2.0.0.post3. Users seeking workaround.

4. **Issue #2999 — Repeated MCP client registration causing CancelledError**  
   [agentscope-ai/QwenPaw#2999](https://github.com/agentscope-ai/QwenPaw/issues/2999)  
   *3 comments* — Long-standing bug (open since April) causing task failure on slow MCP servers. No resolution.

5. **Issue #6405 — MCP "Tool not found" after v2.0**  
   [agentscope-ai/QwenPaw#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405)  
   *3 comments* — Users report that MCP tools are not found despite correct namespacing. Caused by v2.0 architecture changes.

**Underlying need**: The community is struggling with the v2.0 migration, especially around MCP reliability, performance regressions, and removed features. Stability fixes are more urgent than new features.

---

## Bugs & Stability

### Newly Reported Bugs (last 24h)

| Issue | Summary | Severity | Related Fix PR |
|-------|---------|----------|----------------|
| [#6458](https://github.com/agentscope-ai/QwenPaw/issues/6458) | Cron tasks: Tool Safety Check defaults to OFF, no notification granularity | **High** — can lead to unintended automated actions | None yet |
| [#6407](https://github.com/agentscope-ai/QwenPaw/issues/6407) | ReAct Agent context mixes tool_result into `role:assistant` → OpenAI API 400 errors | **High** — breaks conversation recovery | None yet |
| [#6401](https://github.com/agentscope-ai/QwenPaw/issues/6401) | Cron tasks overwriting user session history | **High** — data loss | Fixed in v2.0.1 (implicit) |
| [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) | v2.0 adds 2s fixed overhead per reply | **Medium** — performance regression | None yet |
| [#6459](https://github.com/agentscope-ai/QwenPaw/pull/6459) | Hardens SQLite persistence (WAL mode, backup/restore) | **Medium** — reliability improvement | Open PR |

### Fix PRs Active Today

- [#6459](https://github.com/agentscope-ai/QwenPaw/pull/6459) — Harden history persistence (WAL, busy timeout, backup)  
- [#6409](https://github.com/agentscope-ai/QwenPaw/pull/6409) — Ignore non-object tool call JSON for local models  
- [#6410](https://github.com/agentscope-ai/QwenPaw/pull/6410) — Strip annotated null Gemini schemas  
- [#6412](https://github.com/agentscope-ai/QwenPaw/pull/6412) — Preserve multiline PowerShell commands in shell execution  
- [#6428](https://github.com/agentscope-ai/QwenPaw/pull/6428) — Require auth for plugin install/upload even on localhost

---

## Feature Requests & Roadmap Signals

### High-Community-Interest Requests

- **Built-in RAG knowledge base** [#6432](https://github.com/agentscope-ai/QwenPaw/issues/6432) — “Chat with your documents” is the most requested local AI feature.  
- **Multi-model execution per agent** [#6455](https://github.com/agentscope-ai/QwenPaw/issues/6455) — Run the same request through multiple models and aggregate results.  
- **Agent-level token tracking** [#6392](https://github.com/agentscope-ai/QwenPaw/issues/6392) — Finer-grained token consumption statistics.  
- **Conversation undo/redo** [#6408](https://github.com/agentscope-ai/QwenPaw/issues/6408) — `/undo` command to retract the last user+assistant exchange (like Cherry Studio).  

### Roadmap Signals (Closed-and-Review-Later Batch)

Hazemaan submitted 34 feature proposals that were acknowledged and closed for later evaluation. Notable themes:

- **Parallel sub-agents** for big tasks  
- **One-click backup/restore/sync** (including encrypted archives, WebDAV/S3)  
- **Multi-user support** with roles (admin/member/viewer)  
- **Built-in utilities** (OCR, translation, image generation, notes, mini-apps in sidebar)  
- **MCP simplified setup** (bundled runtimes, one-click server install)  
- **Lazy agent loading** for instant startup  

These indicate the maintainers are considering a large feature expansion, but are focusing on core stability first.

---

## User Feedback Summary

**Satisfaction**: Low-to-moderate after the v2.0 migration. Users appreciate new capabilities (e.g., Kanban app, PawApp SDK) but are frustrated by regressions.

**Key Pain Points**:
- “I had to downgrade back to v1.1.12 because SSH offline and profiles are broken” (#5980)  
- “Every message now takes 2 seconds longer for no reason” (#6307)  
- “MCP tools constantly return ‘Tool not found’ — the namespacing is correct but it doesn’t work” (#6405)  
- “My cron tasks destroyed my entire chat history” (#6401, now fixed)  
- “The multi-modal warning banner is intrusive and ugly” (#6452)  

**Positive signals**: The Kanban app and PawApp SDK are well-received. The community is actively contributing new channels (Zalo Bot) and tool improvements (AskUserQuestion tool, unified browser backend).

---

## Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Summary | Priority |
|-------|-----|---------|----------|
| [#2999](https://github.com/agentscope-ai/QwenPaw/issues/2999) | 3.5 months | Repeated MCP client registration → CancelledError | High — affects all MCP users |
| [#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980) | 13 days | v2.0 missing SSH offline & profiles (404) | High — regressions blocking upgrades |
| [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) | 4 days | 2s overhead per reply | Medium — performance |
| [#6258](https://github.com/agentscope-ai/QwenPaw/issues/6258) | 6 days | Openai max_tokens not honored | Medium — configuration bug |

### PRs Stalled in Review

- [PR #5692](https://github.com/agentscope-ai/QwenPaw/pull/5692) — Reranker for memory search (open since July 1, 24 days)  
- [PR #6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) — Unified browser SDK (open 5 days, under review)  
- [PR #6387](https://github.com/agentscope-ai/QwenPaw/pull/6387) — On-demand channel SDK installation (open 2 days)

These PRs add significant value but may be blocked by architectural decisions.

---

*Generated from public GitHub data of [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw). All times in UTC.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-07-25

## 1. Today's Overview

The project shows moderate activity with two issues and two pull requests updated in the last 24 hours. One feature PR (telegram streaming) was merged, while a critical infrastructure issue (#646) remains open, highlighting ongoing CI and dependency health concerns. A separate fix PR (#645) addressing runtime secret leakage and process reaping is still under review. No new releases were made. Overall, the project is making measured progress on channel features while addressing security and stability debt.

## 2. Releases

No new releases in the last 24 hours. The latest release remains unknown.

## 3. Project Progress

- **Merged/Closed PRs**:
  - [#648 feat(telegram): stream gateway responses](https://github.com/qhkm/zeptoclaw/pull/648) — closed/merged. Implements real-time streaming of agent responses through progressive Telegram message edits. Adds channel-neutral cumulative outbound stream phases, preserves reply/forum-topic routing, UTF-16 limits, HTML final rendering, and long-response continuation. Feature is now available.
  - [#647 feat(telegram): stream agent responses with progressive message edits](https://github.com/qhkm/zeptoclaw/issues/647) — the corresponding feature issue was closed upon merging PR #648.

- **Open PRs under review**:
  - [#645 fix(runtime): scrub subprocess secrets and reap timed-out process trees](https://github.com/qhkm/zeptoclaw/pull/645) — addresses a security vulnerability where runtime shell commands inherited ZeptoClaw’s full process environment, exposing provider keys to model-authored commands. Also fixes inconsistent process termination and reaping of timed-out subprocess trees and Docker containers.

## 4. Community Hot Topics

- **Most active issue**:
  - [#646 [P1-critical] chore(ci): restore Clippy and cargo-deny checks on current toolchain](https://github.com/qhkm/zeptoclaw/issues/646) — 2 comments, opened by maintainer `qhkm`. This issue tracks two repository-baseline CI failures introduced by PR #645’s unrelated changes: five new Clippy warnings on Rust 1.97.1 and cargo-deny rejecting vulnerable versions of `quick-xml 0.39.2` and `lopdf 0.40.0`. The call for discussion suggests maintainers want to decide whether to fix warnings immediately or adjust CI rules. Community (or internal) commentary indicates this is blocking further CI reliability.

- **No other issues or PRs received more than 0 comments or reactions** in the observed window.

## 5. Bugs & Stability

| Bug/Issue | Severity | Status | Description |
|-----------|----------|--------|-------------|
| CI Clippy warnings and cargo-deny failures (#646) | **P1-critical** | Open, no fix PR yet | Five new warnings from Rust 1.97.1 and two known vulnerable dependency versions (`quick-xml 0.39.2`, `lopdf 0.40.0`) prevent CI from passing. Blocks automation for other changes. |
| Subprocess secret leakage and timeout handling (#645) | **P2-high** | Fix PR #645 open | Runtime shell commands leak environment variables including provider keys to model-authored commands. Timeouts also do not consistently reap child processes or Docker containers. PR #645 provides a fix (still under review). |

No crash reports or regressions were filed in the last 24 hours beyond these two items.

## 6. Feature Requests & Roadmap Signals

- **Telegram streaming** (issues #647, PR #648) was the only user-facing feature advanced. It was requested and implemented in one cycle. This aligns with the project’s apparent focus on enhancing multi-channel agent interaction.
- **No explicit new feature requests** from users appeared in the last 24 hours. However, the CI infrastructure issue (#646) implicitly signals a need for better dependency management ahead of future features.
- **Prediction**: The next minor version (if any) may include the Telegram streaming feature and the subprocess security fix (PR #645) once merged.

## 7. User Feedback Summary

No direct user feedback (comments, reactions, complaints) was recorded in the 24-hour window. The only comments came from the maintainer on issue #646, discussing CI failure resolution. User sentiment cannot be assessed from this sample.

## 8. Backlog Watch

No long-unanswered or stalled issues/PRs were identified. The oldest observed item (#645, #646) was created on 2026-07-23 and has been updated within the last 24 hours, receiving maintainer attention. No items appear to require urgent maintainer intervention beyond the ongoing review of PR #645 and the resolution of #646.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-25

## 1. Today’s Overview

The project saw very high activity: **48 issues** and **50 pull requests** were updated in the last 24 hours, with 8 issues closed and 10 PRs merged/closed. No new releases were published today. The work continues to be driven by several large architectural RFCs (work lanes, unified plugins, wire protocol) and a steady stream of bug fixes and security patches, including the closing of critical sandbox and configuration bugs. However, several high-severity issues remain open, particularly around shell tool workspace boundaries and a Windows desktop installer failure.

## 2. Releases

No new versions were released today. The last release remains **v0.8.3**.

## 3. Project Progress

Today’s merged/closed PRs (10 total) include:

- **chore(deps): bump anchore/sbom-action** ([PR #9305](https://github.com/zeroclaw-labs/zeroclaw/pull/9305)) — dependency update.
- **docs(sop): clarify boolean condition comparisons** ([PR #8679](https://github.com/zeroclaw-labs/zeroclaw/pull/8679)) — documentation improvement.

Several important bugs were closed following fixes:

- **Shell tool calls refused at `[autonomy] level = "full"`** ([#6434](https://zeroclaw-labs/zeroclaw/issue/6434)) — closed.
- **Landlock sandbox restricts the daemon itself** ([#9204](https://zeroclaw-labs/zeroclaw/issue/9204)) — closed.
- **Fresh Telegram aliases dropped after config reload** ([#9236](https://zeroclaw-labs/zeroclaw/issue/9236)) — closed.
- **`save_dirty` silently drops writes whose map key contains a dot** ([#9240](https://zeroclaw-labs/zeroclaw/issue/9240)) — closed.
- **ACP console splits thinking into one- or two-word entries** ([#9116](https://zeroclaw-labs/zeroclaw/issue/9116)) — closed.

Features that advanced today (open PRs not yet merged) include CLI cron delivery flags ([PR #9350](https://github.com/zeroclaw-labs/zeroclaw/pull/9350)), model context window from the models.dev catalog ([PR #9347](https://github.com/zeroclaw-labs/zeroclaw/pull/9347)), and a new OpenAI-compatible provider family (Crusoe) ([PR #9338](https://github.com/zeroclaw-labs/zeroclaw/pull/9338)).

## 4. Community Hot Topics

The most active issue continues to be a governance RFC:

- **[#6808](https://zeroclaw-labs/zeroclaw/issue/6808) — RFC: Work Lanes, Board Automation, and Label Cleanup** (14 comments). This long-running discussion (since May 2026) is now in progress for v0.8.x, aiming to make work routing easier without adding manual overhead. It reflects a need for better issue triage and contributor workflow governance.

Other notable issues with 3–4 comments:

- **[#6489](https://zeroclaw-labs/zeroclaw/issue/6489) — "Everything is a plugin"** (4 comments)—a major architectural direction to unify integrations and plugins.
- **[#8396](https://zeroclaw-labs/zeroclaw/issue/8396) — RFC: Make wire protocol first-class** (3 comments)—addresses provider construction and onboarding.
- **[#9285](https://zeroclaw-labs/zeroclaw/issue/9285) — Bug: nested set_prop masks invalid values** (3 comments)—a minor but confusing configuration bug.

## 5. Bugs & Stability

**Critical severity (S0 / S1)** bugs reported or active today:

| Severity | Issue | Status | Summary |
|----------|-------|--------|---------|
| **S0** | [#9247](https://zeroclaw-labs/zeroclaw/issue/9247) | **Open** | Shell tool workspace boundary bypass via symlinks (data loss / security risk). No fix PR yet. |
| **S1** | [#9340](https://zeroclaw-labs/zeroclaw/issue/9340) | **Open** | CLI-created cron jobs always deliver to `None`—output discarded. Fix PR [#9350](https://github.com/zeroclaw-labs/zeroclaw/pull/9350) open. |
| **S1** | [#9290](https://zeroclaw-labs/zeroclaw/issue/9290) | **Open** | Windows desktop installer fails at launch with missing `TaskDialogIndirect`. No fix reported. |
| **S1** | [#9192](https://zeroclaw-labs/zeroclaw/issue/9192) | **Open** | `shared_budget` TOCTOU can wrap `AtomicUsize`; `SopEngine::finish_run` panics under mutex. In progress. |
| **S1** | [#8519](https://zeroclaw-labs/zeroclaw/issue/8519) | **Open** | Reconcile `cargo-audit` ignores and remediate wasmtime-wasi CVEs. In progress. |

**Closed today:** The Landlock sandbox bug ([#9204](https://zeroclaw-labs/zeroclaw/issue/9204)) and Telegram alias drop ([#9236](https://zeroclaw-labs/zeroclaw/issue/9236)) were fixed, but the symlink bypass issue remains the most serious open security threat.

## 6. Feature Requests & Roadmap Signals

Several user-requested enhancements attracted discussion today:

- **[#9335](https://zeroclaw-labs/zeroclaw/issue/9335)** — Support `data`-wrapped OpenAI-compatible chat responses (needed for certain API proxies).
- **[#8228](https://zeroclaw-labs/zeroclaw/issue/8228)** — DingTalk channel streaming message support (still accepted, waiting implementation).
- **[#9315](https://zeroclaw-labs/zeroclaw/issue/9315)** — Classify Telegram file-download failures as permanent/transient by HTTP status (blocked pending upstream).
- **[#9323](https://zeroclaw-labs/zeroclaw/issue/9323)** — RFC: Define execution-tree iteration budget ownership (new, high risk).
- **[#9330](https://zeroclaw-labs/zeroclaw/issue/9330)** — RFC: AI-assisted PR pre-review and re-review (new, no maintainer review yet).

Predictions for next version (v0.9.0): The **unified plugin catalog** ([#6489](https://zeroclaw-labs/zeroclaw/issue/6489)) and **work lanes** ([#6808](https://zeroclaw-labs/zeroclaw/issue/6808)) are likely to be included as they are accepted and in progress. The **goal control plane** (PRs [#8687](https://github.com/zeroclaw-labs/zeroclaw/pull/8687), [#8688](https://github.com/zeroclaw-labs/zeroclaw/pull/8688), [#8689](https://github.com/zeroclaw-labs/zeroclaw/pull/8689)) is also moving toward completion.

## 7. User Feedback Summary

User pain points expressed via issues today:

- **Windows desktop unusable** ([#9290](https://zeroclaw-labs/zeroclaw/issue/9290)) — a fresh user cannot start the installed application.
- **Cron output silently lost** ([#9340](https://zeroclaw-labs/zeroclaw/issue/9340)) — scheduled jobs produce no visible result, causing confusion.
- **Configuration inconsistencies** ([#9285](https://zeroclaw-labs/zeroclaw/issue/9285), [#9240](https://zeroclaw-labs/zeroclaw/issue/9240)) — unexpected error messages and silent data loss when setting config values.
- **Security concerns** ([#9247](https://zeroclaw-labs/zeroclaw/issue/9247), [#9328](https://zeroclaw-labs/zeroclaw/issue/9328)) — workspace bypass and missing credential chain verification are worrying for users in multi-tenant or sensitive environments.

On the positive side, users requested new features (Crusoe provider, data-wrapped responses, Telegram retry classification), indicating active interest in expanding platform support. The community also contributed several large PRs (XR labels, goal features) showing strong contributor engagement.

## 8. Backlog Watch

Issues and PRs that have been open for a while and still require maintainer attention:

- **[#6808](https://zeroclaw-labs/zeroclaw/issue/6808)** — RFC: Work Lanes (since May 20, 14 comments) — in progress but not yet merged.
- **[#6489](https://zeroclaw-labs/zeroclaw/issue/6489)** — Everything is a plugin (since May 6, accepted) — no PR yet.
- **[#7432](https://zeroclaw-labs/zeroclaw/issue/7432)** — v0.9.0 auth/security/breaking-change tracker (since Jun 9) — key milestone.
- **[#8288](https://zeroclaw-labs/zeroclaw/issue/8288)** — SOP control plane tracker (since Jun 24) — in progress, 1 comment.
- **[#8519](https://zeroclaw-labs/zeroclaw/issue/8519)** — CVE remediation (since Jun 30) — P1, in progress but older.

Large PRs needing review (size:XL, many `needs-author-action`):

- [#8746](https://github.com/zeroclaw-labs/zeroclaw/pull/8746) — fix(goal): stop active goal self-resume loops
- [#8689](https://github.com/zeroclaw-labs/zeroclaw/pull/8689) — feat(channels): add goal command admission
- [#8688](https://github.com/zeroclaw-labs/zeroclaw/pull/8688) — feat(runtime): add trusted goal tools
- [#8687](https://github.com/zeroclaw-labs/zeroclaw/pull/8687) — feat(runtime): add goal controller and verifier
- [#8996](https://github.com/zeroclaw-labs/zeroclaw/pull/8996) — fix(goal): preserve running goals across daemon reload
- [#8857](https://github.com/zeroclaw-labs/zeroclaw/pull/8857) — feat(plugins): add scoped secrets
- [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) — fix(tools): add `allowed_private_hosts` opt-in to file_download SSRF gate

These PRs represent critical feature and security work; many are blocked awaiting author action or maintainer re-review. The project should prioritise unblocking these to reach v0.9.0 goals.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*