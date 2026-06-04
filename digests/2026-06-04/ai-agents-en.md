# OpenClaw Ecosystem Digest 2026-06-04

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-04 00:36 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-06-04

## 1. Today's Overview

OpenClaw shows **exceptionally high velocity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a mature, actively maintained project at scale. The 367:133 open-to-closed issue ratio and 402:98 open-to-merged PR ratio suggest the project is in a **growth phase with significant in-flight work** rather than maintenance mode. Three releases shipped recently, with the latest beta (v2026.6.2-beta.1) introducing a major security architecture change for plugin installation. The community is heavily focused on **session state reliability**, **message delivery guarantees**, and **multi-channel stability** across Telegram, Discord, WhatsApp, iMessage, and Slack.

---

## 2. Releases

### [v2026.6.2-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.6.2-beta.1) — Latest Beta
**Breaking Change: Plugin/Skill Installation Security Model**

- **Major architectural shift**: Replaced the "dangerous-code scanner" path with an **operator install policy** framework for all plugin and skill installations
- Affects all install surfaces: package, archive, source, upload, and marketplace installs
- Updated CLI, ClawHub, doctor diagnostics, and troubleshooting flows
- **Migration note**: Operators must now define explicit install policies; legacy scanner configurations are deprecated ([#89516](https://github.com/openclaw/openclaw/issues/89516), thanks @joshavant)

### [v2026.6.1](https://github.com/openclaw/openclaw/releases/tag/v2026.6.1) — Stable
- **Resilience improvements**: Agents and CLI-backed runtimes recover more cleanly from interrupted tool calls, stale session bindings, compaction handoffs, and media delivery retries ([#88129](https://github.com/openclaw/openclaw/issues/88129), [#88136](https://github.com/openclaw/openclaw/issues/88136), [#88141](https://github.com/openclaw/openclaw/issues/88141), [#88162](https://github.com/openclaw/openclaw/issues/88162), [#88182](https://github.com/openclaw/openclaw/issues/88182))
- **Channel stability**: Steadier delivery across Telegram, WhatsApp, iMessage, Slack

### [v2026.6.1-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.6.1-beta.3) — Pre-release
- Same resilience and channel fixes as v2026.6.1

---

## 3. Project Progress

### Recently Merged/Closed PRs (from issue data)

| PR | Status | Summary | Impact |
|:---|:---|:---|:---|
| [#88020](https://github.com/openclaw/openclaw/pull/88020) | **CLOSED/merged** | Added Anthropic "Invalid signature in thinking block" to `REPLAY_INVALID_RE` recovery patterns | Fixes hard session failures on extended thinking sessions |
| [#67035](https://github.com/openclaw/openclaw/issues/67035) | **CLOSED** | Windows chat UI regression (input swallowed, streamed replies invisible) | Major Windows UX fix |
| [#71992](https://github.com/openclaw/openclaw/issues/71992) | **CLOSED** | Control UI webchat duplicate assistant replies | Regression from #5964/#39469 fixed |
| [#67793](https://github.com/openclaw/openclaw/issues/67793) | **CLOSED** | `queue.mode "collect"` not batching messages | Debounce/batch processing restored |
| [#73699](https://github.com/openclaw/openclaw/issues/73699) | **CLOSED** | Discord voice-to-text channel bridge feature | New voice-as-IO capability |
| [#86811](https://github.com/openclaw/openclaw/issues/86811) | **CLOSED** | WebChat dashboard freeze during tool calls, WebSocket disconnect | Critical UI stability fix |
| [#67423](https://github.com/openclaw/openclaw/issues/67423) | **CLOSED** | Auth router ignoring provider `apiKey` field for split entries | Auth provider reliability |
| [#63427](https://github.com/openclaw/openclaw/issues/63427) | **CLOSED** | CLI WebSocket probe no backoff on device-required rejection | Connection storm prevention |

### In-Flight Feature Advancement

- **Memory architecture overhaul**: [PR #88504](https://github.com/openclaw/openclaw/pull/88504) introduces multi-slot memory role architecture (`memory.recall`, `memory.compaction`, `memory.capture`, `memory.search`) — foundational for plugin composability
- **Doctor diagnostics expansion**: Series of PRs by @giodl73-repo exposing sandbox registry, gateway services, session locks, and config audit findings as structured health checks ([#84326](https://github.com/openclaw/openclaw/pull/84326), [#84340](https://github.com/openclaw/openclaw/pull/84340), [#84366](https://github.com/openclaw/openclaw/pull/84366), [#84450](https://github.com/openclaw/openclaw/pull/84450))
- **Cross-encoder reranker**: [PR #89584](https://github.com/openclaw/openclaw/pull/89584) adds optional second-stage reranking to memory search — addresses long-standing MMR limitation

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Comments | Status | Core Concern |
|:---|:---|:---|:---|
| [#88838](https://github.com/openclaw/openclaw/issues/88838) — SQLite migration via accessor seam | **17** | OPEN | **Database architecture**: Avoiding monolithic session/transcript migration |
| [#65161](https://github.com/openclaw/openclaw/issues/65161) — Heartbeat isolated mode regressions | **14** | OPEN, stale | **Reliability engineering**: Multiple heartbeat failures in isolated deployments |
| [#67035](https://github.com/openclaw/openclaw/issues/67035) — Windows chat UI regression | **14** | **CLOSED** | **Cross-platform UX**: Windows-specific rendering pipeline |
| [#88312](https://github.com/openclaw/openclaw/issues/88312) — Codex turn-completion stall regression | **12** | OPEN, P1 | **Regression management**: Fixed once in #85107, re-emerged in 2026.5.27 |
| [#67288](https://github.com/openclaw/openclaw/issues/67288) — Bedrock IAM discovery ungated | **11** | OPEN, stale | **Cloud cost/performance**: Unnecessary AWS API calls |
| [#68113](https://github.com/openclaw/openclaw/issues/68113) — Mattermost slash commands 503 | **11** | OPEN, P1 | **Enterprise integration**: Initialization race in Mattermost bridge |
| [#63216](https://github.com/openclaw/openclaw/issues/63216) — Hard reset loop despite high reserveTokensFloor | **11** | OPEN, P1 | **Token economics**: Compaction not preventing context overflow |

### Underlying Community Needs

1. **Operational predictability**: Users need clear signals when systems degrade (heartbeat, session state, token usage)
2. **Platform parity**: Windows, macOS, and Linux users report divergent experiences
3. **Cost control**: Cloud provider integrations (AWS Bedrock, Codex) need gating mechanisms
4. **Migration safety**: Large architectural changes (SQLite, memory roles) need incremental, reversible paths

---

## 5. Bugs & Stability

### Critical (P1) Open Issues

| Issue | Severity | Description | Fix PR? |
|:---|:---|:---|:---|
| [#88312](https://github.com/openclaw/openclaw/issues/88312) | **Regression, P1** | Codex app-server turn stall — *re-fixed once, regressed again* | None linked |
| [#86214](https://github.com/openclaw/openclaw/issues/86214) | **P1** | Codex client closes mid-turn during image/tool requests with large `logs_2.sqlite` | None linked |
| [#86215](https://github.com/openclaw/openclaw/issues/86215) | **P1** | Codex OAuth refresh failures wedge agent for hours | None linked |
| [#85030](https://github.com/openclaw/openclaw/issues/85030) | **P1** | MCP tools not injected into `sessions_spawn` subagents | None linked |
| [#81484](https://github.com/openclaw/openclaw/issues/81484) | **P1, regression** | Discord guild reply regression (malformed payloads, outbound loops) | None linked |
| [#77467](https://github.com/openclaw/openclaw/issues/77467) | **P1** | MiniMax Portal OAuth cannot auto-refresh | None linked |
| [#77136](https://github.com/openclaw/openclaw/issues/77136) | **P1** | WebChat fails to render some assistant messages (TUI works, data intact) | None linked |
| [#76038](https://github.com/openclaw/openclaw/issues/76038) | **P1** | Stuck Session Recovery dual failure + excessive preprocessing time | None linked |
| [#75624](https://github.com/openclaw/openclaw/issues/75624) | **P1** | Mattermost slash commands cleartext callback URLs (CVSS 8.6) | None linked |
| [#73699](https://github.com/openclaw/openclaw/issues/73699) | **P1** | Session transcript doomloop → OOM | None linked |
| [#69118](https://github.com/openclaw/openclaw/issues/69118) | **P1** | Claude CLI sessions reset every turn in group channels (hash drift) | None linked |
| [#68691](https://github.com/openclaw/openclaw/issues/68691) | **P1** | Sandbox zombie processes accumulate toward `pids.max` | None linked |
| [#68113](https://github.com/openclaw/openclaw/issues/68113) | **P1** | Mattermost slash commands 503 "not yet initialized" | None linked |
| [#67716](https://github.com/openclaw/openclaw/issues/67716) | **P1** | Deferred compaction debt stranded by bootstrap/reconcile | None linked |
| [#67419](https://github.com/openclaw/openclaw/issues/67419) | **P1** | Bootstrap files re-injected every turn, wasting 20-30% tokens | None linked |
| [#67366](https://github.com/openclaw/openclaw/issues/67366) | **P1** | `openclaw onboard` TypeError replacing Telegram token | None linked |
| [#67035](https://github.com/openclaw/openclaw/issues/67035) | **P1** | Windows chat UI regression | **CLOSED** |
| [#66747](https://github.com/openclaw/openclaw/issues/66747) | **P1** | macOS CLI gateway probes fail `1006`, `EPERM` on `chmod` | None linked |
| [#66561](https://github.com/openclaw/openclaw/issues/66561) | **P1** | openai-codex SSE stream aborts locally, surfaced as timeout 408 | None linked |
| [#65624](https://github.com/openclaw/openclaw/issues/65624) | **P1, security** | Mattermost cleartext callback URLs expose tokens | None linked |
| [#64810](https://github.com/openclaw/openclaw/issues/64810) | **P1** | Heartbeat interrupts in-progress replies in Telegram topics | None linked |
| [#64362](https://github.com/openclaw/openclaw/issues/64362) | **P1** | Main agent response lost after tool execution (dead-pid lock) | None linked |
| [#63673](https://github.com/openclaw/openclaw/issues/63673) | **P1, regression** | Keychat Bridge no inbound messages after 2026.4.8 | None linked |
| [#63612](https://github.com/openclaw/openclaw/issues/63612) | **P1** | Main session crash in compaction token estimation | None linked |
| [#63216](https://github.com/openclaw/openclaw/issues/63216) | **P1** | Hard reset loop despite high `reserveTokensFloor` | None linked |

### Stability Themes

- **Session state fragility** dominates P1 issues: compaction, recovery, reset loops, and transcript growth are systemic
- **OAuth/auth provider reliability** is a recurring blind spot (Codex, MiniMax, auth router)
- **Platform-specific regressions** (Windows UI, macOS permissions) indicate CI/CD coverage gaps
- **"Fixed once, regressed again"** pattern in [#88312](https://github.com/openclaw/openclaw/issues/88312) suggests test coverage needs strengthening for complex async flows

---

## 6. Feature Requests & Roadmap Signals

### Active Feature Requests

| Issue/PR | Description | Likelihood in Next Release |
|:---|:---|:---|
| [#72741](https://github.com/openclaw/openclaw/issues/72741) | Standard interface for external security/guardrail checks | **High** — aligns with v2026.6.2-beta.1 policy architecture |
| [#63990](https://github.com/openclaw/openclaw/issues/63990) | Multi-index embedding memory with model-aware failover | **Medium** — [PR #88504](https://github.com/openclaw/openclaw/pull/88504) slots architecture enables this |
| [#64438](https://github.com/openclaw/openclaw/issues/64438) | Remote reranker endpoint support | **High** — [PR #89584](https://github.com/openclaw/openclaw/pull/89584) in review |
| [#63930](https://github.com/openclaw/openclaw/issues/63930) | Anthropic advisor tool (server-side tool) support | **Medium** — requires upstream API stability |
| [#76159](https://github.com/openclaw/openclaw/issues/76159) | Per-job `acceptSilentStop` flag for cron jobs | **Medium** — small surface, clear use case |
| [#71142](https://github.com/openclaw/openclaw/issues/71142) | Configurable upload size limit for Control UI | **Medium** — straightforward, blocked on product decision |
| [#67000](https://github.com/openclaw/openclaw/issues/67000) | Warm-up/session reuse for embedded agents | **Low-Medium** — architectural, impacts cold start metrics |

### Predicted v2026.6.x Priorities

Based on release velocity and open PRs:
1. **Memory system modernization** (multi-slot architecture + reranker)
2. **Operator policy framework expansion** (security/guardrail interfaces)
3. **Session state hardening** (SQLite migration, compaction reliability)
4. **Voice channel expansion** ([PR #89724](https://github.com/openclaw/openclaw/pull/89724) — Microsoft Teams)

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Message loss/invisibility** | [#67035](https://github.com/openclaw/openclaw/issues/67035), [#77136](https://github.com/openclaw/openclaw/issues/77136), [#81484](https://github.com/openclaw/openclaw/issues/81484), [#64810](github.com/openclaw/openclaw/issues/64810) | Critical — erodes trust |
| **Session instability** | [#63216](https://github.com/openclaw/openclaw/issues/63216), [#63998](https://github.com/openclaw/openclaw/issues/63998), [#67716](https://github.com/openclaw/openclaw/issues/67716), [#76038](https://github.com/openclaw/openclaw/issues/76038) | Critical — operational burden |
| **Token waste/cost** | [#67419](https://github.com/openclaw/openclaw/issues/67419) — 20-30% context consumed by re-injected bootstraps | High — direct cost impact |
| **Authentication fragility** | [#86215](https://github.com/openclaw/openclaw/issues/86215), [#77467](https://github.com/openclaw/openclaw/issues/77467), [#67366](https://github.com/openclaw/openclaw/issues/67366) | High — breaks integrations |
| **Platform inconsistency** | Windows UI regressions, macOS permission issues | Medium — adoption friction |
| **Enterprise integration gaps** | Mattermost, Teams, Feishu issues | Medium — B2B blocker |

### Satisfaction Indicators

- **High engagement**: 17 comments on architectural issue [#88838](https://github.com/openclaw/openclaw/issues/88838) shows sophisticated user base invested in long-term health
- **Active contribution**: Multiple community PRs for doctor diagnostics, memory features
- **Responsive maintenance**: Recent releases address specific pain points (resilience, channel stability)

### Dissatisfaction Indicators

- **"Stale" label prevalence**: Many high-priority issues marked stale despite ongoing impact
- **Regression pattern**: Fixes not preventing re-occurrence (Codex stall, Discord guild replies)
- **No-fix-PR backlog**: `clawsweeper:no-new-fix-pr` label on many active issues indicates contributor capacity constraints

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>2 weeks old, high impact, no fix PR)

| Issue | Age | Blocker | Why Critical |
|:---|:---|:---|:---|
| [#65161](https://github.com/openclaw/openclaw/issues/65161) | ~8 weeks | `clawsweeper:needs-maintainer-review`, `clawsweeper:needs-product-decision` | Heartbeat failures break isolated mode reliability |
| [#67288](https://github.com/openclaw/openclaw/issues/67288) | ~7 weeks | `clawsweeper:needs-maintainer-review` | Unnecessary AWS costs on every request |
| [#68113](https://github.com/openclaw/openclaw/issues/68113) | ~7 weeks | `clawsweeper:needs-maintainer-review`, `clawsweeper:needs-product-decision` | Mattermost enterprise integration broken |
| [#63216](https://github.com/openclaw/openclaw/issues/63216) | ~8 weeks | `clawsweeper:needs-maintainer-review`, `clawsweeper:needs-product-decision`, `clawsweeper:needs

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the provided community digest summaries.

---

## Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem

**Date:** 2026-06-04

### 1. Ecosystem Overview

The personal AI agent open-source ecosystem is characterized by high-velocity, concurrent development across multiple projects, signaling rapid maturation from experimental tools towards production-grade infrastructure. The community is heavily focused on operational reliability—solving session state persistence, message delivery guarantees, and provider fallback mechanics—while simultaneously pushing forward major architectural shifts towards multi-agent orchestration, layered memory systems, and security-hardened plugin models. A clear tension is emerging between the desire for autonomous, self-evolving agents and the practical need for predictable, controllable, and cost-efficient systems. The ecosystem is segmenting into distinct architectural philosophies: monolithic "do-everything" platforms versus lightweight, composable frameworks, with each approach attracting different developer communities and use cases.

### 2. Activity Comparison

| Project | Issues (Open/Closed) | PRs (Open/Merged) | New Release Today | Health Score* |
|:---|:---|:---|:---|:---|
| **OpenClaw** | 500 (367 open, 133 closed) | 500 (402 open, 98 merged) | ✅ v2026.6.2-beta.1 | 🔴 Very High Velocity, Growth Phase |
| **ZeroClaw** | 50 (high) | 50 (43 open, 7 merged) | ❌ | 🟡 Heavy Development, Review Bottleneck |
| **CoPaw** | 49 (28 open, 21 closed) | 50 (29 open, 21 merged) | ❌ | 🟡 High Activity, Stability Concerns |
| **IronClaw** | 27 (high) | 50 (22 open, 28 merged) | ✅ v0.29.1 | 🟢 Very High Velocity, Integration Phase |
| **Hermes Agent** | 50 (44 open, 6 closed) | 50 (38 open, 12 merged) | ❌ | 🟢 High Activity, Responsive Maintainers |
| **LobsterAI** | 16 (1 open) | 16 (2 open, 14 merged) | ✅ v2026.6.3 | 🟢 Strong Release Push, Healthy Close Rate |
| **NanoBot** | 32 (16 open, 16 closed) | 31 (15 open, 16 merged) | ❌ | 🟢 Healthy Sustained Activity |
| **Moltis** | 14 (5 open, 9 closed) | 4 (4 open, 0 merged) | ✅ 2x Patch Builds | 🟢 Good Bug-Fix Velocity, Minor Merge Pause |
| **PicoClaw** | 3 (all open) | 10 (7 open, 3 merged) | ✅ Nightly v0.2.9 | 🟡 Active Maintenance & Stabilization |
| **NanoClaw** | 1 (all open) | 9 (9 open, 0 merged) | ❌ | 🟢 High Community Contribution Cycle |
| **NullClaw** | 0 | 1 (1 open, 0 merged) | ❌ | 🟢 Stable but Idle |
| **ZeptoClaw** | 0 | 16 (16 open, 0 merged, Dependabot) | ❌ | 🟢 Low Activity, Dependency Focus |
| **TinyClaw** | 0 | 0 | ❌ | ⚪ Inactive |

*Health Score is a qualitative assessment based on the digest data, considering activity level, close rates, and reported stability themes.

### 3. OpenClaw’s Position

OpenClaw is the clear ecosystem leader in terms of raw scale, with 500 issues and 500 PRs in the last 24 hours—an order of magnitude more than any other project tracked. This represents a mature, high-velocity project in a sustained growth phase rather than maintenance mode.

**Advantages vs. Peers:**
- **Scale and Breadth:** OpenClaw’s channel support (Telegram, Discord, WhatsApp, iMessage, Slack, Microsoft Teams) is the most extensive in the ecosystem, approaching platform-level completeness.
- **Architectural Sophistication:** The move from a "dangerous-code scanner" to an "operator install policy" framework (v2026.6.2-beta.1) for plugin security is a generational leap over simpler sandbox approaches used by competitors like NanoBot.
- **Community Investment:** The user base is deeply technical and invested in the project's long-term health, as evidenced by 17 comments on the SQLite migration architecture issue (#88838)—a sign of high engagement.
- **Memory System Modernization:** The multi-slot memory role architecture (PR #88504) and cross-encoder reranker (PR #89584) represent a systematic approach to memory that many peers lack.

**Technical Approach Differences:**
- OpenClaw is a **monolithic, platform-scale framework** designed to own the entire agent lifecycle, from installation to session management to multi-channel delivery. This contrasts with NanoBot’s **lightweight, composable framework** (<4k lines) that prioritizes developer extensibility.
- The project leans heavily on a "doctor diagnostics" model for operational health checks, indicating a production-first mindset that is less mature in projects like ZeptoClaw or NullClaw.

**Community Size Comparison:**
- OpenClaw’s sheer volume of activity (500 issues + 500 PRs daily) dwarfs all peers. The next largest (IronClaw, CoPaw) each handle ~50 items. This 10x multiplier suggests a significantly larger user and contributor base.

### 4. Shared Technical Focus Areas

The following requirements are emerging across multiple projects, indicating ecosystem-level consensus on key priorities:

| Focus Area | Projects Affected | Specific Needs |
|:---|:---|:---|
| **Session State Reliability** | OpenClaw, CoPaw, ZeroClaw, Moltis | Preventing session crash loops, transcript doomloops, compaction failures, and OOM errors. Users across all projects report state corruption as a critical trust-eroding bug. |
| **Multi-Agent Orchestration** | NanoBot, OpenClaw, IronClaw, CoPaw | Growing demand for Supervisor→Worker patterns, agent-to-agent (A2A) messaging, sub-agent spawning, and mailbox channels. NanoBot and ZeroClaw have explicit community requests for this. |
| **Memory System Overhaul** | OpenClaw, CoPaw, NanoBot, Hermes Agent | Need for hygienic memory writes (layered/compartmentalized storage), cost-effective retrieval (BM25/TF-IDF as fallback to dense embeddings), and architecture that prevents bloat. CoPaw's vector store ballooning to 37GB is a cautionary tale. |
| **Provider Reliability & Fallback** | OpenClaw, Hermes Agent, ZeroClaw, IronClaw | Users demand graceful degradation when a provider (Gemini 503, Codex stall) fails. Several projects lack proper fallback chains, causing total service outages. |
| **Security Hardening** | NanoBot, OpenClaw, IronClaw, ZeroClaw, CoPaw | Prompt injection bypassing safety guards (NanoBot), credential zeroization (IronClaw), OIDC auth (ZeroClaw), and operator policy frameworks (OpenClaw) are all underway. |
| **Cross-Platform Parity** | OpenClaw, CoPaw, IronClaw | Windows-specific regressions (OpenClaw, CoPaw), macOS permission issues (OpenClaw), and ARM64 compatibility (Hermes Agent) indicate CI/CD coverage gaps that affect user adoption. |

### 5. Differentiation Analysis

| Dimension | OpenClaw, IronClaw, ZeroClaw | NanoBot, PicoClaw | LobsterAI, Moltis |
|:---|:---|:---|:---|
| **Architecture** | Monolithic, heavy, production-grade. Owns the full stack (gateway, memory, channels, plugins). | Lightweight, composable, extensible. Core under 4k lines (NanoBot). Focus on plugin/mailbox architecture. | Desktop-IDE hybrid (LobsterAI). Minimalist channel-focus (Moltis). |
| **Target User** | Ops-heavy teams running multi-channel, multi-agent deployments. Enterprise and power users. | Developers building custom agent workflows. Hobbyists and tinkerers. | End-users seeking a polished desktop experience (LobsterAI). Telegram-focused bot developers (Moltis). |
| **Key Focus** | Scale, reliability, security, channel diversity. | Developer extensibility, clean architecture, low barrier to entry. | UX polish, channel-specific features, stable release cycle. |
| **Recent Major Feature** | Operator Install Policy (OpenClaw). Slack ProductAdapter MVP (IronClaw). OIDC Auth (ZeroClaw). | Multi-agent Mailbox Channel (NanoBot). MQTT TLS Fix (PicoClaw). | Conversation Forking & Keyboard Shortcuts (LobsterAI). Telegram Progress Stream Fix (Moltis). |
| **Community Profile** | Large, highly technical, demanding of reliability. Many contributors. | Small but engaged, strong core contributor (chengyongru). Active feature requests. | Smaller, more passive. Feedback is less technical but more focused on UX and subscription policies (LobsterAI). |

### 6. Community Momentum & Maturity

**Tier 1: High-Velocity, Rapid Iteration (Growth Phase)**
- **OpenClaw, IronClaw, ZeroClaw, CoPaw, Hermes Agent.** These projects are shipping multiple PRs daily, tackling major architectural changes, and have the highest community engagement. OpenClaw and IronClaw show signs of production maturity (release ships, structured diagnostics). CoPaw and ZeroClaw are in intense development sprints but have warning signs of instability (critical unaddressed bugs, review bottlenecks).

**Tier 2: Sustained, Healthy Activity (Maturation Phase)**
- **NanoBot, LobsterAI, Moltis, PicoClaw.** These projects have strong maintainer responsiveness and healthy close rates but are operating at smaller scale. NanoBot is particularly notable for its architectural cleanliness and focused feature development (multi-agent, memory). LobsterAI shipped a major release push today.

**Tier 3: Low-Activity Maintenance (Stable/Idle)**
- **NullClaw, ZeptoClaw, TinyClaw.** These projects are seeing minimal human-driven activity. NullClaw has a single PR; ZeptoClaw is entirely Dependabot updates. They are not advancing features but may be stable for current users.

### 7. Trend Signals

1.  **The "Self-Evolution" Demand:** CoPaw’s community is explicitly asking for Hermes Agent-style auto-evolution (issues #3470, #3516). This is a leading indicator that users now expect agents to learn and adapt autonomously over time, not just execute commands. This will likely become a cross-ecosystem expectation within 6–12 months.

2.  **From Session to Architecture:** The ecosystem is moving past basic session management issues (keeping a chat alive) and into architecting for persistence (SQLite migration, memory slots, compaction). The focus is shifting from *"how do I keep my agent running?"* to *"how do I build a system that remembers and improves?"*

3.  **Security is a Non-Negotiable:** The "dangerous-code scanner" → "operator policy" shift in OpenClaw, along with zeroization efforts in IronClaw and OIDC plans in ZeroClaw, signals that as agents gain more autonomy (file access, code execution), security can no longer be an afterthought. Projects with unfixed sandbox escape issues (NanoBot #143, #979) are at risk of losing trust.

4.  **Cost Optimization is a First-Class Concern:** Users across OpenClaw (20-30% token waste from re-injected bootstraps), CoPaw (37GB vector bloat), and NanoBot (memory retrieval relevance) are increasingly sensitive to API costs. Future competitive advantage will be defined not just by capability, but by token/credits efficiency.

5.  **Channel Fragmentation is a Barrier:** Supporting high-quality integrations across 5-10 channels (Telegram, Discord, Slack, WhatsApp, iMessage, Mattermost, QQ, Teams) is a massive engineering burden. Projects that can offer a unified, reliable channel abstraction (like OpenClaw’s operator framework) will have a structural advantage over those building point-to-point integrations.

6.  **Developer Experience as a Moat:** For developer-facing frameworks (NanoBot, PicoClaw, NullClaw), clean architecture ("under 4k lines") and a low barrier to entry (easy plugin creation) are key differentiators against the "heavy" platforms. The emergence of agent-specific skill documentation (PicoClaw's SKILL.md) is a positive trend.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-04

## 1. Today's Overview

NanoBot shows **healthy sustained activity** with 32 issues and 31 PRs updated in the last 24 hours, indicating an engaged community around this lightweight AI agent framework. The project is in active development mode with no new releases today, but substantial code movement: 16 PRs merged/closed versus 15 remaining open suggests maintainers are keeping pace with contributions. A notable pattern is the dominance of a single prolific contributor (`chengyongru`) who authored 11 of the 20 highlighted PRs, driving core architectural improvements. The community is increasingly focused on **multi-agent orchestration**, **memory systems**, and **security hardening** — signaling maturation beyond single-user personal assistant use cases.

---

## 2. Releases

**No new releases** (v0.1.4 remains current).

---

## 3. Project Progress

### Merged/Closed PRs (16 total, key highlights)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#4135](https://github.com/HKUDS/nanobot/pull/4135) | chengyongru | **Refactor WebUI runtime state onto event bus** — decouples WebUI from hard-wired agent state | Major architecture improvement for real-time UI reliability |
| [#3999](https://github.com/HKUDS/nanobot/pull/3999) | chengyongru | **Fix agent runner exiting during sustained goals** — prevents `/goal` tasks from terminating prematurely | Critical fix for long-running autonomous tasks |
| [#3952](https://github.com/HKUDS/nanobot/pull/3952) | chengyongru | **Enhance Dream + Consolidator prompts for MECE long-term memory** | Addresses memory duplication bloat; reduces token waste |
| [#3990](https://github.com/HKUDS/nanobot/pull/3990) | chengyongru | **Simplify Dream class** — replaces two-phase architecture with cron + `process_direct` | Reduces complexity, improves maintainability |
| [#3461](https://github.com/HKUDS/nanobot/pull/3461) | chengyongru | **Multi-agent mailbox channel plugin** — file-system-based inter-agent communication | Enables multi-agent workflows with zero core code changes |
| [#3920](https://github.com/HKUDS/nanobot/pull/3920) | chengyongru | **Compaction benchmark + optimized consolidator prompt** | Data-driven prompt engineering for memory system |
| [#4157](https://github.com/HKUDS/nanobot/pull/4157) | chengyongru | **Bound WebUI startup fetch waits** — prevents infinite pending requests | UX reliability fix |
| [#4174](https://github.com/HKUDS/nanobot/pull/4174) | chengyongru | **Restore top-level import order** — fixes E402 lint violations | Code quality |
| [#3932](https://github.com/HKUDS/nanobot/pull/3932) | chengyongru | **Fix duplicate `tool_call_id` in stream mode** | Prevents API rejection errors in OpenAI-compatible providers |
| [#3858](https://github.com/HKUDS/nanobot/pull/3858) | chengyongru | **Extract `ContextBuilder.build_user_content()` as public method** | Refactoring for extensibility |
| [#3221](https://github.com/HKUDS/nanobot/pull/3221) | chengyongru | **`nanobot auth` command with OAuth Device Flow** | Simplified onboarding for authenticated deployments |
| [#3992](https://github.com/HKUDS/nanobot/pull/3992) | ysofologis | **Cross-agent message bus** (merged? — status unclear from data) | Infrastructure for agent collaboration |

### Open PRs Under Review

| PR | Author | Status | Note |
|:---|:---|:---|:---|
| [#4181](https://github.com/HKUDS/nanobot/pull/4181) | axelray-dev | Open | WebUI new chat shortcut (`Cmd/Ctrl+Shift+O`) — addresses [#4178](https://github.com/HKUDS/nanobot/issues/4178) |
| [#4176](https://github.com/HKUDS/nanobot/pull/4176) | chengyongru | Open | **Run-level agent hook lifecycle** — major extensibility feature |
| [#4177](https://github.com/HKUDS/nanobot/pull/4177) | chengyongru | Open | Beginner-friendly onboarding docs |
| [#4126](https://github.com/HKUDS/nanobot/pull/4126) | kunalk16 | Open | Azure AAD auth for Azure OpenAI provider |
| [#4123](https://github.com/HKUDS/nanobot/pull/4123) | yu-xin-c | Open | SSRF guard for MCP HTTP URLs — security hardening |
| [#4180](https://github.com/HKUDS/nanobot/pull/4180) | yorkhellen | Open | QQ channel pairing code fix |
| [#3720](https://github.com/HKUDS/nanobot/pull/3720) | chengyongru | Open | Cron reminder streaming fix for WebSocket clients |

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

| Issue | Comments | 👍 | Topic | Underlying Need |
|:---|:---|:---|:---|:---|
| [#222](https://github.com/HKUDS/nanobot/issues/222) | 10 | 7 | **Multi-agent setup support** | Users want native multi-agent orchestration, not just isolated instances; documentation gap |
| [#979](https://github.com/HKUDS/nanobot/issues/979) | 5 | 0 | **AI bypasses `rm` command guards** | Security theater concern — users discover prompt injection can override safety controls |
| [#1022](https://github.com/HKUDS/nanobot/issues/1022) | 4 | 3 | **Long-running tasks hang at "Starting execution"** | Reliability for autonomous workflows; silent failures erode trust |
| [#80](https://github.com/HKUDS/nanobot/issues/80) | 4 | 0 | **Lightweight memory retrieval (BM25/TF-IDF)** | Token cost optimization as memory scales; relevance quality |
| [#912](https://github.com/HKUDS/nanobot/issues/912) | 3 | 3 | **Task-specific model configuration** | Cost/performance optimization — route simple chat to cheap models, complex tasks to powerful ones |

### Emerging Topics (newly filed, 0 comments but strategic)

| Issue | Topic | Signal |
|:---|:---|:---|
| [#4179](https://github.com/HKUDS/nanobot/issues/4179) | **Native Agent-to-Agent (A2A) orchestration** | Formalizes the multi-agent demand; requests Supervisor→Worker patterns |
| [#4178](https://github.com/HKUDS/nanobot/issues/4178) | **WebUI keyboard shortcut for new chat** | Polish/UX maturity expectation |

**Analysis:** The community is pulling NanoBot from "personal assistant" toward **"team of agents"** architecture. The gap between [#222](https://github.com/HKUDS/nanobot/issues/222)'s question ("is multi-agent supported?") and [#4179](https://github.com/HKUDS/nanobot/issues/4179)'s explicit A2A request shows evolving sophistication. Memory and cost optimization are secondary pressures.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **🔴 Critical** | [#979](https://github.com/HKUDS/nanobot/issues/979) | AI bypasses `rm` safety guards via prompt injection — **security regression** | Closed but unresolved; closed as stale, not fixed |
| **🔴 Critical** | [#143](https://github.com/HKUDS/nanobot/issues/143) | Filesystem tools ignore `restrict_to_workspace` — sandbox escape risk | **Open**, no fix PR |
| **🟡 High** | [#1022](https://github.com/HKUDS/nanobot/issues/1022) | Long-running tasks silently fail — "Starting execution now" then nothing | Closed as stale; may relate to [#3999](https://github.com/HKUDS/nanobot/pull/3999) fix |
| **🟡 High** | [#954](https://github.com/HKUDS/nanobot/issues/954) | Progress streaming leaks internal tool calls to user chat | **Open**, no fix PR |
| **🟡 High** | [#937](https://github.com/HKUDS/nanobot/issues/937) | Exec tool hallucinations causing framework abandonment | **Open**, user stopped evaluation |
| **🟡 High** | [#935](https://github.com/HKUDS/nanobot/issues/935) | Remote MCP URL timeouts with `asyncio.CancelledError` | **Open**, no fix PR |
| **🟢 Medium** | [#896](https://github.com/HKUDS/nanobot/issues/896) | Telegram/Discord media files never cleaned — unbounded disk growth | **Open**, no fix PR |
| **🟢 Medium** | [#984](https://github.com/HKUDS/nanobot/issues/984) | Media path outside workspace breaks `restrictToWorkspace` | Closed via PR? |

**Stability Assessment:** Two **unfixed security issues** ([#979](https://github.com/HKUDS/nanobot/issues/979), [#143](https://github.com/HKUDS/nanobot/issues/143)) are particularly concerning as they undermine trust in agent autonomy. The hallucination problem ([#937](https://github.com/HKUDS/nanobot/issues/937)) represents a retention risk — users are abandoning evaluation.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Multi-agent orchestration (A2A)** | [#222](https://github.com/HKUDS/nanobot/issues/222), [#4179](https://github.com/HKUDS/nanobot/issues/4179), [#3461](https://github.com/HKUDS/nanobot/pull/3461), [#3992](https://github.com/HKUDS/nanobot/pull/3992) | **High** | Infrastructure already landing (mailbox plugin, cross-agent bus); community demand is loudest |
| **Task-specific model routing** | [#912](https://github.com/HKUDS/nanobot/issues/912) | Medium | Clear cost/performance win; aligns with multi-agent specialization |
| **Subagent profiles / specialized agents** | [#1012](https://github.com/HKUDS/nanobot/issues/1012) | Medium | Natural extension of multi-agent work; [#1012](https://github.com/HKUDS/nanobot/issues/1012) has detailed spec |
| **WebUI keyboard shortcuts** | [#4178](https://github.com/HKUDS/nanobot/issues/4178), [#4181](https://github.com/HKUDS/nanobot/pull/4181) | **High** | PR already open, trivial merge |
| **Run-level agent hooks** | [#4176](https://github.com/HKUDS/nanobot/pull/4176) | **High** | PR open from core contributor; enables plugin ecosystem |
| **Persistent long-term memory** | [#135](https://github.com/HKUDS/nanobot/issues/135), [#80](https://github.com/HKUDS/nanobot/issues/80) | Medium | Partially addressed by Dream/consolidator improvements; full system needs more design |
| **Pre-handler hooks for zero-token routing** | [#990](https://github.com/HKUDS/nanobot/issues/990) | Low | Niche use case; good extensibility candidate via [#4176](https://github.com/HKUDS/nanobot/pull/4176) hooks |
| **Native sandbox for plugins** | [#931](https://github.com/HKUDS/nanobot/issues/931) | Low | Important but complex; security issues may force prioritization |
| **New channel integrations** (SimpleX, WeChat, Mattermost) | [#240](https://github.com/HKUDS/nanobot/issues/240), [#192](https://github.com/HKUDS/nanobot/issues/192), [#1011](https://github.com/HKUDS/nanobot/issues/1011) | Low | Community-driven, not core team priority |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Security trust erosion** | [#979](https://github.com/HKUDS/nanobot/issues/979), [#143](https://github.com/HKUDS/nanobot/issues/143), [#937](https://github.com/HKUDS/nanobot/issues/937) | Critical — "I have stopped evaluation" |
| **Silent failures on long tasks** | [#1022](https://github.com/HKUDS/nanobot/issues/1022) | High — breaks autonomous use case |
| **Memory irrelevance / token bloat** | [#80](https://github.com/HKUDS/nanobot/issues/80), [#135](https://github.com/HKUDS/nanobot/issues/135) | Medium — cost and quality degradation over time |
| **Sandbox isolation breaking workflows** | [#940](https://github.com/HKUDS/nanobot/issues/940) | Medium — skills and media processing blocked |
| **Operational gaps (no subagent control)** | [#1006](https://github.com/HKUDS/nanobot/issues/1006) | Medium — can't inspect/kill runaway agents |

### Positive Signals

- **Clean architecture appreciation**: [#97](https://github.com/HKUDS/nanobot/issues/97) — "huge props for the clean and lightweight architecture... kept under 4k lines"
- **Active contribution willingness**: [#1010](https://github.com/HKUDS/nanobot/issues/1010) — "Would be happy to contribute"
- **Strong core contributor velocity**: `chengyongru`'s sustained output indicates healthy maintainer engagement

### Use Case Evolution

| Early Adopters | Emerging Demand |
|:---|:---|
| Personal AI assistant (Telegram/Discord/Slack) | **Team of collaborative agents** with specialization |
| Single-user, single-session | Multi-tenant, multi-session with thread continuity |
| Simple tool use | Complex long-running autonomous goals with oversight |

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (stale, high-value, or security-critical)

| Issue | Age | Why It Needs Action |
|:---|:---|:---|
| [#143](https://github.com/HKUDS/nanobot/issues/143) **Security: Filesystem tools bypass `restrict_to_workspace`** | ~4 months | **Active security vulnerability**; 4 upvotes; no response pattern concerning |
| [#937](https://github.com/HKUDS/nanobot/issues/937) **Exec tool hallucinations** | ~4 months | User attrition cited; framework evaluation abandoned |
| [#97](https://github.com/HKUDS/nanobot/issues/97) **RFC: Core architecture improvements** | ~4 months | 6 upvotes; comprehensive security/testing/memory proposals; community investment visible |
| [#135](https://github.com/HKUDS/nanobot/issues/135) **Persistent long-term memory** | ~4 months | 4 upvotes; fundamental UX gap vs. competitors |
| [#1011](https://github.com/HKUDS/nanobot/issues/1011) **Mattermost channel** | ~4 months | 4 upvotes; enterprise/self-hosted demand; privacy-conscious alternative to Slack/Discord |
| [#912](https://github.com/HKUDS/nanobot/issues/912) **Task-specific model config** | ~4 months | 3 upvotes; clear spec; cost optimization demand |
| [#222](https://github.com/HKUDS/nanobot/issues/222) **Multi-agent setup docs** | ~4 months | 7 upvotes, 10 comments; documentation blocking adoption |
| [#240](https://github.com/HKUDS/nanobot/issues/240) **SimpleX Chat channel** | ~4 months | 2 upvotes; privacy/decentralization alignment with project ethos |

### PRs At Risk of Stagnation

| PR | Risk |
|:---|:---|
| [#3992](https://github.com/HKUDS/nanobot/pull/3992) (cross-agent messaging) | May conflict with core contributor's [#3461](https://github.com/HKUDS/nanobot/pull/3461) mailbox approach; needs reconciliation |
| [#4122](https://github.com/HKUDS/nanobot/pull/4122) (local ASR) | Closed as invalid — unclear why; community voice input demand unmet |
| [#4126](https://github.com/HKUDS/nanobot/pull/4126) (Azure AAD auth) | Enterprise blocker; needs review |

---

**Overall Project Health: 🟡 Moderate-Healthy**

**Strengths:** Rapid core development, clean architecture, emerging multi-agent infrastructure, responsive maintainer (chengyongru).

**Risks:** Unaddressed security issues, contributor concentration (bus factor), stale issue accumulation, hallucination quality problems causing user churn.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — June 4, 2026

Generated from GitHub data updated in the last 24 hours.

## Today's Overview

Hermes Agent is experiencing a very high-activity day with **50 issues and 50 PRs updated** in the last 24 hours, indicating major development momentum. A substantial wave of bug fixes targeting the Desktop app, gateway stability, Docker support, and provider fallback reliability has been submitted. The project shows **12 merged/closed PRs and 6 closed issues today**, with maintainers actively reviewing and merging contributions. The community is particularly focused on improving remote access, TUI usability, and MCP server resilience. No new releases were cut today, but the volume of merged PRs suggests a release may be imminent.

## Releases

**None.** No new releases were published in the last 24 hours. However, the high volume of merged PRs (12) covering critical fixes across Desktop, Docker, CLI, and gateway components suggests a patch or minor release may be prepared soon.

## Project Progress

**Merged/Closed PRs Today (12):**

| PR | Summary |
|----|---------|
| [#38565](https://github.com/NousResearch/hermes-agent/pull/38565) | **feat: add layered memory provider** — Adds a new `plugins/memory/layered` module with `memory_route` and `memory_compress` tools for hygienic memory writes, routing between curated, skills, domain, session, and semantic recall stores |
| [#38556](https://github.com/NousResearch/hermes-agent/pull/38556) | **fix(docker): chown build trees on UID remap** — Fixes a regression (#35027) where build trees under `/opt/hermes` were left owned by build-time UID after remap, breaking lazy_deps and UI |
| [#38555](https://github.com/NousResearch/hermes-agent/pull/38555) | **fix(cli): ignore Desktop bootstrap marker** — Prevents `.hermes-bootstrap-complete` from triggering autostash loops during `hermes update` |
| [#38581](https://github.com/NousResearch/hermes-agent/pull/38581) | *(TUI approval prompt fixes — multiple related PRs)* — Improvements to TUI approval flow: full command review, unambiguous copy for hidden payload lines, and multi-line execution code display |

**Closed Issues Today (6):**

- [#37869](https://github.com/NousResearch/hermes-agent/issues/37869) — Desktop app remote connection failure after 9120 conflict cleared (bug fix)
- [#37109](https://github.com/NousResearch/hermes-agent/issues/37109) — Kanban Executor Board active worker panel (feature implemented)
- [#37108](https://github.com/NousResearch/hermes-agent/issues/37108) — Kanban dashboard columns alignment (bug fix)
- [#17986](https://github.com/NousResearch/hermes-agent/issues/17986) — HTTP 400 on Fireworks custom endpoint, first turn only (bug fix)

## Community Hot Topics

### Most Active Issues (by comment count)

1. **[#10567](https://github.com/NousResearch/hermes-agent/issues/10567) — Add --host and CORS config for hermes dashboard** (6 comments, 10 👍)
   - *Need:* Users want to access the Hermes dashboard remotely via Tailscale/VPN. Currently hardcoded to `127.0.0.1:9119` with no CORS flexibility. **10 upvotes** signals strong community demand.

2. **[#25822](https://github.com/NousResearch/hermes-agent/issues/25822) — Gemini 503 (UNAVAILABLE) doesn't trigger provider fallback** (4 comments, 1 👍)
   - *Need:* Critical reliability issue — when Gemini is overloaded, the fallback chain is entirely skipped, causing complete service degradation rather than graceful degradation.

3. **[#24357](https://github.com/NousResearch/hermes-agent/issues/24357) — QQBot gateway heartbeat failure after reconnect** (3 comments, 2 👍)
   - *Need:* Docker-deployed QQ gateway users facing silent disconnect loops. Bot appears online but doesn't respond — very disruptive for Chinese market users.

4. **[#24039](https://github.com/NousResearch/hermes-agent/issues/24039) — Auxiliary fallback chain should reuse fallback_providers** (3 comments, 2 👍)
   - *Need:* Design issue where two parallel fallback systems exist and don't coordinate, causing unexpected fallback behavior.

### Most Active PRs

- **[#38574](https://github.com/NousResearch/hermes-agent/pull/38574) — feat(slack): native AI Assistant Steps API streaming** — Modernizes Slack integration with native streaming cards
- **[#38564](https://github.com/NousResearch/hermes-agent/pull/38564) — fix(hermes-ink): reassemble split SGR mouse sequences** — Root-cause fix for a long-standing TUI bug where mouse sequences leaked into prompts
- **[#38569](https://github.com/NousResearch/hermes-agent/pull/38569) — feat: add 1Password secrets backend** — Adds enterprise-grade secret management via `op` CLI

## Bugs & Stability

### Critical / P1

| Issue | Description | Status |
|-------|-------------|--------|
| [#38471](https://github.com/NousResearch/hermes-agent/issues/38471) | **Desktop skips onboarding, finds random invalid OAI key** — New users land in chat without any setup, potentially hitting unconfigured API keys. No UI to correct. | **Open** — No fix PR yet |

### High / P2

| Issue | Description | Fix PR Status |
|-------|-------------|---------------|
| [#38488](https://github.com/NousResearch/hermes-agent/issues/38488) | **MCP server never reconnects after transient outage** — Requires full gateway restart. Unlike LLM calls, MCP has no retry logic. | **Open** |
| [#38156](https://github.com/NousResearch/hermes-agent/issues/38156) | **TUI passes host cwd into Docker terminal sessions on Windows** — Path leakage from host to container | **Open** |
| [#38575](https://github.com/NousResearch/hermes-agent/issues/38575) | **Pinned session token causes Desktop SIGTERM boot loop** — `HERMES_DASHBOARD_SESSION_TOKEN` breaks local mode | **Open** |
| [#38580](https://github.com/NousResearch/hermes-agent/issues/38580) | **requests==2.33.0 missing `_types.py` on aarch64** — Crashes on NVIDIA Jetson/ARM after `hermes update` | **Open** |
| [#35876](https://github.com/NousResearch/hermes-agent/issues/35876) | **Vision fallback fails on Gemini quota errors** — Fallback chain silently fails due to kwargs regression | **Open** |
| [#32766](https://github.com/NousResearch/hermes-agent/issues/32766) | **computer_use tool breaks auxiliary vision routing** — CUA-driver assumptions too fragile | **Open** |
| [#30704](https://github.com/NousResearch/hermes-agent/issues/30704) | **Gemini 2.5 models missing from media-in-tool-results allowlist** — Blocks multimodal support for newer models | **Open** |

**Notable:** Several fix PRs are in flight for P2 issues today, including:
- [#38571](https://github.com/NousResearch/hermes-agent/pull/38571) — Fix MCP env var resolution for header auth
- [#38566](https://github.com/NousResearch/hermes-agent/pull/38566) — Fix Discord typing indicator overlap
- [#38567](https://github.com/NousResearch/hermes-agent/pull/38567) — Fix macOS launchd detection for immediate gateway restart
- [#38568](https://github.com/NousResearch/hermes-agent/pull/38568) — Stabilize gateway launchd HOME and Honcho memory sync
- [#38564](https://github.com/NousResearch/hermes-agent/pull/38564) — Fix TUI SGR mouse fragment leaks
- [#38578](https://github.com/NousResearch/hermes-agent/pull/38578) — Fix Desktop tool approval/sudo/secret prompt rendering

## Feature Requests & Roadmap Signals

### High-Community-Interest Features

| Issue | Feature | Likelihood for Next Version |
|-------|---------|-----------------------------|
| [#10567](https://github.com/NousResearch/hermes-agent/issues/10567) | Remote dashboard access (--host, CORS config) | **High** — 10 👍, long-open, needed for VPN/Tailscale |
| [#38552](https://github.com/NousResearch/hermes-agent/issues/38552) | Automated workspace memory (directory awareness) | **Medium** — Proposed yesterday, complementary to existing work |
| [#38280](https://github.com/NousResearch/hermes-agent/issues/38280) | Agent Economic Layer (wallet, service registry) | **Low-Medium** — Ambitious, likely farther out |
| [#36053](https://github.com/NousResearch/hermes-agent/issues/36053) | Context Preflight — forced reflection before action | **Low** — RFC stage, design discussion |
| [#34038](https://github.com/NousResearch/hermes-agent/issues/34038) | On-demand tool/skill/MCP discovery | **Medium** — Reduces startup token overhead significantly |
| [#38540](https://github.com/NousResearch/hermes-agent/issues/38540) | Discord per-category mention/ignore rules | **Medium** — Targeted Discord enhancement |
| [#38570](https://github.com/NousResearch/hermes-agent/issues/38570) | Windows desktop app Chinese language support | **Low-Medium** — Single-user request, localization scope |

**Near-term prediction:** The layered memory provider ([#38565](https://github.com/NousResearch/hermes-agent/pull/38565)) merged today is likely a major feature for the next release. The 1Password secrets backend ([#38569](https://github.com/NousResearch/hermes-agent/pull/38569)) and Slack AI Assistant Steps ([#38574](https://github.com/NousResearch/hermes-agent/pull/38574)) are also strong candidates for inclusion in the next version.

## User Feedback Summary

### Pain Points (reported today)

1. **Desktop app reliability issues** — Multiple users reporting boot loops, skipped onboarding, missing session refresh, and tool approval timeouts. The Desktop is a clear area of friction.
   - *"Desktop app skips onboarding, finds random invalid OAI-API key, nowhere to place OAI/Codex information."* — [#38471](https://github.com/NousResearch/hermes-agent/issues/38471)
   - *"Pinned HERMES_DASHBOARD_SESSION_TOKEN in .env breaks Desktop LOCAL mode into SIGTERM boot loop"* — [#38575](https://github.com/NousResearch/hermes-agent/issues/38575)

2. **Provider fallback unreliability** — Several reports of Gemini 503/429 errors not triggering fallbacks, causing complete outage instead of graceful degradation.
   - *"Gemini 503 (UNAVAILABLE) does not trigger provider fallback"* — [#25822](https://github.com/NousResearch/hermes-agent/issues/25822)

3. **MCP resilience gaps** — Transient backend outages permanently kill MCP servers, requiring full gateway restart.
   - *"MCP server permanently gives up after a transient backend outage"* — [#38488](https://github.com/NousResearch/hermes-agent/issues/38488)

4. **ARM64 compatibility** — Jetpack/ARM users hit crashes due to missing `_types.py` in `requests` library.
   - *"requests==2.33.0 aarch64 wheel missing _types.py — crashes on Jetson (ARM)"* — [#38580](https://github.com/NousResearch/hermes-agent/issues/38580)

### Satisfaction Signals

- Multiple PRs are being merged quickly — 12 merged today indicates responsive maintainers
- The Slack AI Assistant Steps integration ([#38574](https://github.com/NousResearch/hermes-agent/pull/38574)) shows investment in platform-native UX
- 1Password integration ([#38569](https://github.com/NousResearch/hermes-agent/pull/38569)) signals enterprise adoption focus
- Layered memory provider ([#38565](https://github.com/NousResearch/hermes-agent/pull/38565)) merged today addresses long-standing memory architecture concerns

## Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Reason for Concern |
|-------|-----|---------------------|
| [#10567](https://github.com/NousResearch/hermes-agent/issues/10567) | **52 days** (since Apr 15) | 10 upvotes, 6 comments, P3 — Remote dashboard access is highly demanded but no maintainer response |
| [#24039](https://github.com/NousResearch/hermes-agent/issues/24039) | **24 days** | Design issue with parallel fallback systems — 2 upvotes, no assignment |
| [#25822](https://github.com/NousResearch/hermes-agent/issues/25822) | **21 days** | Gemini 503 handling — P2 bug affecting all Gemini users, no fix PR |
| [#29418](https://github.com/NousResearch/hermes-agent/issues/29418) | **15 days** | Nous inference API streaming timeout — P3 but affects core provider |
| [#24357](https://github.com/NousResearch/hermes-agent/issues/24357) | **23 days** | QQBot heartbeat failure — Affects Chinese market users, 2 upvotes |

### PRs Needing Maintainer Attention

| PR | Age | Status |
|----|-----|--------|
| [#14768](https://github.com/NousResearch/hermes-agent/pull/14768) | **42 days** (since Apr 23) | Adding LLM Gateway provider — Open with no recent maintainer activity |

**Assessment:** The project health is strong with high community engagement and rapid PR merging. The main risk is the Desktop app's reliability issues affecting new user onboarding and the provider fallback gaps that can cause complete service degradation. The backlog of unanswered issues (particularly #10567 for remote access) shows room for improvement in maintainer response time to popular feature requests.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# 🐙 PicoClaw Project Digest — 2026-06-04

## Today's Overview

PicoClaw remains in an **active maintenance and stabilization phase**, with 10 pull requests updated in the last 24 hours and 1 new nightly release published (v0.2.9-nightly). Three issues remain open, all receiving updates as recently as June 3. The project is seeing steady contributor engagement, particularly around **security hardening, MCP tooling, and session management**. While no issues were closed in the past day, three PRs were merged or closed, including a critical Go dependency security bump. The overall activity level is **moderate-high**, with a clear focus on bug fixes, documentation improvements, and addressing GitHub security advisories.

---

## Releases

**Nightly Build** (2026-06-03)  
- Build tag: `v0.2.9-nightly.20260603.a502aa7f`  
- Automatically generated; may be unstable  
- Full changelog: [v0.2.9…main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

**Migration Notes**: None provided. Users should treat nightly builds as experimental. No stable release notes or breaking changes accompany this build.

---

## Project Progress

Three pull requests were **merged or closed** in the last 24 hours:

- **#2997** `[CLOSED]` — **Security dependency bump**: Go upgraded from 1.25.10 to 1.25.11 to fix GO-2026-5039 (header name injection in `net/textproto` error messages). A critical, low-risk fix with no breaking changes.  
  [PR #2997](https://github.com/sipeed/picoclaw/pull/2997)

- **#2994** `[CLOSED]` — **New agent skill documentation**: Added `workspace/skills/picoclaw-agent/SKILL.md`, a detailed operational guide covering CLI usage, provider configuration, and PicoClaw-native workflows.  
  [PR #2994](https://github.com/sipeed/picoclaw/pull/2994)

- **#2899** `[CLOSED]` — **MQTT TLS fix**: MQTT channel now supports configurable TLS verification (`TLSSkipVerify` field), defaulting to secure (`false`). Fixes a hardcoded insecure mode.  
  [PR #2899](https://github.com/sipeed/picoclaw/pull/2899)

**Notable open PRs with progress**:
- **#2957** — Fixes `tool_calls` being dropped during streaming (direct fix for issue #2958)  
- **#2992** — Fixes session history promotion issue affecting v0.2.9 upgrades  
- **#2696** — Enables per-request dynamic headers from channel context to MCP servers (enhancement)

---

## Community Hot Topics

**Most active issue**:  
- **#2404** — `[Feature] Add in config to send streaming HTTP request`  
  *Created Apr 7 | 11 comments | 1 👍*  
  **Analysis**: This is the **oldest and most discussed open issue**. The user wants a simple `streaming: true` config toggle to enable server-sent event (SSE) style streaming from LLM backends (like OpenAI's Python client). The high comment count suggests active design discussion, potentially blocking other streaming-related work.  
  [Issue #2404](https://github.com/sipeed/picoclaw/issues/2404)

**Other active issues** (both with recent updates):  
- **#2958** — `tool_calls messages dropped during consecutive requests via pico channel` (bug, 1 comment)  
- **#2954** — `不支持32位Android系统` (no 32-bit Android support, 2 comments)

---

## Bugs & Stability

| Severity | Issue | Description | Fix PR Exists? |
|----------|-------|-------------|----------------|
| 🔴 High | **#2958** | `tool_calls` messages lost on consecutive requests via WebSocket channel. Affects all tool-using agents. | ✅ **PR #2957** (open) |
| 🟡 Medium | **#2954** | PicoClaw does not run on 32-bit Android systems. Affects Termux users on older devices. | ❌ No fix PR |
| 🟢 Low | **#2972** (linked) | New Web UI sessions receive old migrated history after v0.2.9 upgrade. | ✅ **PR #2992** (open) |

**Security fix today**:  
- **#2997** closes **GO-2026-5039** — unescaped header names in `net/textproto` error messages, enabling potential injection. This is a Go runtime fix, not a PicoClaw logic bug.

---

## Feature Requests & Roadmap Signals

**Likely to be in next stable release (v0.2.10 or v0.3.0)**:
1. **Configurable HTTP streaming (#2404)** — High demand, long discussion. If merged, it would unlock real-time chat UX for all channels.
2. **Per-request MCP dynamic headers (#2696)** — Enables channel-specific authentication forwarding to MCP tools. Already well-implemented; likely to merge soon.
3. **CLI & agent skill documentation (#2994)** — Already merged; improves developer onboarding.

**Lower priority / speculative**:
- **32-bit Android support (#2954)** — Niche, but could be important for edge/IoT deployments.
- **Tool call reliability (#2958)** — Fix already prototyped in PR #2957; likely to land soon.

---

## User Feedback Summary

**Pain points expressed**:
- "Streaming is missing from the config" — user wants OpenAI-style `stream=True` support (Issue #2404, 11 comments)
- "tool_calls not delivered to UI on consecutive requests" — breaks multi-step tool workflows (Issue #2958)
- "Cannot run on 32-bit Android" — limits deployment on older phones and low-cost devices (Issue #2954)

**Satisfaction signals**:
- No recent negative feedback about performance or uptime.
- The community is actively contributing fixes (6 different contributors in last 24h).
- The `picoclaw-agent` skill (PR #2994) shows positive engagement with documentation.

---

## Backlog Watch

**Issues needing maintainer attention**:
- **#2404** (Streaming config) — 60 days old, 11 comments, no assignee. Core UX feature that blocks many real-time use cases.
- **#2954** (32-bit Android) — 8 days old, minimal discussion. Possibly low priority but unanswered.

**Stale PRs requiring review/merge**:
- **#2696** (MCP dynamic headers) — 38 days old, no comments, no updates since Apr 28. Valuable enhancement; review pending.
- **#2955** (Singleton PID verification) — 8 days old, unreviewed. Security-relevant (prevents process confusion).

**No critical unassigned security issues** — the Go advisory (#2997) was handled same day.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — June 4, 2026

## 1. Today's Overview
NanoClaw sees a high-velocity day with nine open pull requests and one active bug issue, indicating a strong community contribution cycle. The project is in an active development phase, with contributors focusing on scheduling reliability, service-level fixes, and expanding the skill ecosystem. No releases were published today, but the sheer volume of open PRs (all created or updated within 24 hours) signals a responsive maintainer team and an engaged contributor base. The open bug regarding linger on encrypted home directories has a companion fix PR, showing fast issue-to-resolution pipeline.

## 2. Releases
*No new releases today.* The latest published release remains prior to 2026-06-04.

## 3. Project Progress
No PRs were merged or closed today; however, nine PRs are actively being reviewed or awaiting CI:

- **#2683** — New container skill for QMD (hybrid markdown search engine) added ([PR #2683](https://github.com/nanocoai/nanoclaw/pull/2683))
- **#2682** — Fix for `update-skills` to skip v1-only skill branches, improving v2 migration ([PR #2682](https://github.com/nanocoai/nanoclaw/pull/2682))
- **#2679** — Scheduling module now surfaces permanently-failed tasks as user-visible notices ([PR #2679](https://github.com/nanocoai/nanoclaw/pull/2679))
- **#2678** — Recurring tasks re-arm properly on permanent failure (not just completion) ([PR #2678](https://github.com/nanocoai/nanoclaw/pull/2678))
- **#2677** — Pre-task scripts get one retry with diagnostics on failure ([PR #2677](https://github.com/nanocoai/nanoclaw/pull/2677))
- **#2676** — Container runner adds `NO_PROXY` to bypass OneCLI proxy for local services ([PR #2676](https://github.com/nanocoai/nanoclaw/pull/2676))
- **#2675** — Slack adapter patched to handle 3000-char block limit, preventing dropped messages ([PR #2675](https://github.com/nanocoai/nanoclaw/pull/2675))
- **#2605** — Ongoing work to inherit parent agent permissions via OneCLI (open since May 24, still active) ([PR #2605](https://github.com/nanocoai/nanoclaw/pull/2605))
- **#2681** — Fix for linger service on per-home-encrypted systems (directly addresses #2680) ([PR #2681](https://github.com/nanocoai/nanoclaw/pull/2681))

## 4. Community Hot Topics
The most active area today is **scheduling reliability**, with two related PRs from the same author:

- **#2679** and **#2678** (both by yairixStudio) — Handling permanently-failed scheduled tasks and re-arming recurrence. These PRs together address a user pain point where silent failures caused missed scheduled actions. ([PR #2679](https://github.com/nanocoai/nanoclaw/pull/2679), [PR #2678](https://github.com/nanocoai/nanoclaw/pull/2678))
- **#2680** — The single open issue, with a detailed bug report on boot-time service failure on encrypted home directories, has drawn a companion fix PR within hours. ([Issue #2680](https://github.com/nanocoai/nanoclaw/issues/2680))

**Underlying need:** Users with per-user encrypted home directories (common on corporate-managed laptops) are experiencing silent service failures. The community response reflects strong demand for broader system compatibility, especially for security-conscious deployments.

## 5. Bugs & Stability
One bug reported today (Medium priority):

- **#2680** — Service doesn't start at boot when `linger` is enabled on an **encrypted home directory** (ecryptfs/fscrypt/gocryptfs). Root cause: systemd's lingering logic cannot decrypt the home directory at boot because decryption happens at PAM login, so the service environment is unavailable. A fix PR (#2681) already exists, which skips linger in these scenarios. ([Issue #2680](https://github.com/nanocoai/nanoclaw/issues/2680))

**Severity:** Medium — affects users with encrypted home directories but has a clear workaround (manual start after login) and a proposed fix.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed today, but the PRs signal roadmap direction:

- **QMD container skill** (#2683) — Hybrid search (BM25 + vector) suggests a growing emphasis on local-first, retrieval-augmented skills.
- **Permission inheritance via OneCLI** (#2605, still open after 11 days) — Likely a high-priority feature for multi-agent workflows, expected in next release.
- **Slack 3000-char fix** (#2675) — Indicates Slack integration is under active polish; may lead to a Slack-specific release.

**Prediction for next minor release:** Expect scheduling reliability fixes (#2679, #2678) and the encrypted home directory fix (#2681) to land first, along with the permission inheritance feature (#2605).

## 7. User Feedback Summary
- **Pain point:** Silent failures — both in scheduled tasks (PR #2679) and service startup (Issue #2680) erode trust in automation. Users want proactive notification when things go wrong.
- **Use case highlight:** Contributors are clearly using NanoClaw in production-like environments (encrypted home directories, Slack integrations, scheduled tasks), indicating maturity beyond hobbyist use.
- **Satisfaction/dissatisfaction:** The quick turnaround on the encrypted home directory bug (issue to fix PR in <24h) suggests the community feels heard. However, the lack of merged PRs today means these fixes are still pending review — a possible source of mild frustration for contributors.

## 8. Backlog Watch
- **#2605** — `feat: inherit parent agent permissions via OneCLI` (created May 24, last updated June 3). Open for 11 days with no comments from maintainers. This is a significant feature affecting security model; lack of merge or feedback could stall dependent PRs. ([PR #2605](https://github.com/nanocoai/nanoclaw/pull/2605))

No other long-untouched issues or PRs require immediate maintainer attention.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-04

**Data Source:** `github.com/nullclaw/nullclaw`  
**Analysis Period:** Last 24 hours (ending 2026-06-04)

---

## 1. Today's Overview

Project activity was light over the past 24 hours, with no new issues opened or closed and no new releases cut. However, a single meaningful pull request (#946) was updated, representing focused maintenance work on the agent’s tool-filtering logic. With zero open or closed issues and no release activity, the project appears to be in a low-velocity maintenance phase rather than a period of rapid feature expansion. The lone PR suggests maintainer attention is directed toward improving the system prompt generation for agent tool calling, particularly around MCP (Model Context Protocol) tool visibility.

---

## 2. Releases

**No new releases published** in the last 24 hours. The latest release date remains unchanged from prior periods.

---

## 3. Project Progress

**Merged/Closed PRs today:** None  
**Open PRs updated today:** 1

### Open PR #946 — `fix(agent): filter tools in system prompt text by tool_filter_groups`
- **Author:** vernonstinebaker  
- **Created:** 2026-06-03 | **Updated:** 2026-06-03  
- **Status:** Open  
- **Link:** [PR #946](https://github.com/nullclaw/nullclaw/pull/946)

**Summary of Changes:**  
This PR introduces a `filterToolsForPromptText` function that restricts which tools appear in the text-based system prompt. Specifically:
- Only **built-in tools** and **MCP tools from `always` filter groups** are included in the system prompt text.
- **Dynamic-group MCP tools** are omitted from text, but their schemas are still sent via native API tool-calling when turn keywords match.
- Removes `Para...` (likely a partial description — possibly removing a paragraph or parameter).

**Significance:** This is a targeted fix for prompt-token efficiency and clarity. By preventing dynamic-group MCP tools from bloating the system prompt text while preserving their API-accessible schemas, the PR reduces unnecessary token consumption and avoids confusing the agent with tools that aren’t always relevant. This is especially important for projects using many MCP tools across different context groups.

---

## 4. Community Hot Topics

**No issues or PRs with notable comment volume or reactions** in the last 24 hours. The only activity is PR #946, which received 0 comments and 0 thumbs-up reactions. The project currently shows no active discussions, indicating either low community engagement this period or that recent open work is being handled by core contributors without broader debate.

---

## 5. Bugs & Stability

**No new bugs, crashes, or regressions reported** in the last 24 hours.  
The absence of bug-related issues suggests either a stable current state or that user-reported problems have already been addressed in prior periods. No fix PRs for stability concerns are pending.

---

## 6. Feature Requests & Roadmap Signals

**No new feature requests** were submitted in the last 24 hours.  
However, the direction indicated by PR #946—improving tool-filtering granularity in system prompts—suggests the team is prioritizing **agent prompt optimization** and **MCP tool lifecycle management**. This could be part of a broader initiative to support more sophisticated multi-tool workflows without overwhelming the agent’s context window.  

Predicted next-version items (based on this PR’s trajectory):
- Formal introduction of `tool_filter_groups` configuration
- Enhanced documentation for configuring `always` vs. `dynamic` MCP tool groups
- Potential CLI or UI to manage tool filter groups per agent session

---

## 7. User Feedback Summary

**No direct user feedback** was recorded in the last 24 hours.  
Given the low activity, it is not possible to assess user satisfaction or pain points from this period’s data. The open PR (#946) was authored by a core contributor, not a community user, so no user sentiment is inferable.

---

## 8. Backlog Watch

**No long-unanswered issues or PRs** currently require maintainer attention.  
With zero open issues and only one open PR (which was updated just yesterday), the project’s backlog appears well-managed. No items are older than 24 hours without response.

**Note:** This assessment is based solely on items updated in the last 24 hours. Items with longer update windows (e.g., weeks-old issues) may exist but fall outside the scope of this report.

---

## Summary Assessment

| Metric | Status |
|--------|--------|
| Activity Level | Low |
| New Releases | None |
| Issues (open/closed) | 0 / 0 |
| PRs (open/closed/merged) | 1 / 0 / 0 |
| Bug Reports | 0 |
| Community Engagement | Minimal |
| Backlog Health | Clean |

**Project Health: Stable but idle.** The single PR (#946) shows continued maintenance on tool filtering, which is a positive sign for agent reliability. However, the absence of any new issues or releases suggests a plateau in community and development velocity. If this pattern persists, the project may benefit from re-engagement efforts such as a new release, feature preview, or call for community feedback.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-04

## 1. Today's Overview
The IronClaw project is experiencing **very high development velocity** today, with 50 PRs and 27 issues updated in the last 24 hours. The team shipped **one new patch release (v0.29.1)** and merged/closed **28 PRs**, indicating strong forward momentum on the Reborn architecture migration. Activity is concentrated on Slack integration (personal binding, OAuth, actor identity), trigger system hardening, credential security, and fixing a cluster of Reborn prompt/tool-surface bugs filed by core contributor henrypark133. The project remains in an intense integration phase — the `reborn-integration` branch is absorbing many stacked PRs while production-facing bug reports from sunglow666 and automated nightly E2E failures indicate areas needing stabilization.

---

## 2. Releases

### ironclaw-v0.29.1 — 2026-06-04
**Patch release** with two targeted fixes and one CI change.

#### Added
- **Web**: Plumbed `temperature` through the Responses API ([#3641](https://github.com/nearai/ironclaw/pull/3641)) — enables model temperature control in the OpenAI-compatible response path.

#### Fixed
- **Engine**: Scoped v1 history for channel conversations ([#4320](https://github.com/nearai/ironclaw/pull/4320)) — resolves a bug where conversation history in channel contexts was incorrectly scoped.

#### CI / Release
- **Added WeCo** to the release pipeline — likely a new deployment target or platform.

**Breaking changes:** None. **Migration notes:** No migration required for this patch.

---

## 3. Project Progress

### Merged/Closed PRs Today (28 total)
Key closures advancing the Reborn architecture:

| PR | Title | Significance |
|---|---|---|
| [#4418](https://github.com/nearai/ironclaw/pull/4418) | Wire Slack host-beta route into Reborn serve | Large PR (XL) — adds Slack config parsing, feature-gated Slack host-beta wiring, composes Slack Events API through Reborn runtime. DB migration included. |
| [#4421](https://github.com/nearai/ironclaw/pull/4421) | Bind Slack actors through Reborn user identities | Adds product workflow actor-user resolver hook for binding external Slack actors before canonical conversation resolution. |
| [#4422](https://github.com/nearai/ironclaw/pull/4422) | Add Slack personal binding service | Reborn-composition Slack personal binding service with host-owned `RebornUserIdentityBindingStore` write port. |
| [#4412](https://github.com/nearai/ironclaw/pull/4412) | Bind local dev runtime scope to run actor | Fixes actor-scoped capability resolution for SSO-request users in local dev. |
| [#4417](https://github.com/nearai/ironclaw/pull/4417) | Fix WebUI live projection cursor resume | Splits WebUI projection cursors so synthetic live-progress updates don't advance the durable runtime cursor. |
| [#4415](https://github.com/nearai/ironclaw/pull/4415) | PR18.7: trigger poller full-path integration test | Adds composition-tier integration test driving real background trigger poller end-to-end. |
| [#4380](https://github.com/nearai/ironclaw/pull/4380) | Add read-only automations WebUI API | New WebUI v2 read-only endpoint: `GET /api/webchat/v2/automations`. |
| [#4410](https://github.com/nearai/ironclaw/pull/4410) | Cover composed Google refresh | Adds caller-boundary coverage for expired Google account refresh via `ProviderBackedCredentialAccountService`. |

### Closed Issues Today (6 total)
- **#4351** ([closed](https://github.com/nearai/ironclaw/issues/4351)) — Capability surface + safety gating: fail-closed injection scan, family-id-keyed predicate.
- **#4222** ([closed](https://github.com/nearai/ironclaw/issues/4222)) — Zeroize injected HTTP credential material across network request carriers.
- **#4310** ([closed](https://github.com/nearai/ironclaw/issues/4310)) — Context-overflow recovery emits ShrinkContext but executor retries without shrinking.
- **#4309** ([closed](https://github.com/nearai/ironclaw/issues/4309)) — Compaction summary write can outlive failed BeforeModel checkpoint.
- **#4215** ([closed](https://github.com/nearai/ironclaw/issues/4215)) — Consolidate duplicated PKCE math into `ironclaw_common::pkce`.
- **#3801** ([closed](https://github.com/nearai/ironclaw/issues/3801)) — Lane 2: finish extension-v2 catalog readiness.

---

## 4. Community Hot Topics

### Most Active Issues (by comments)
1. **#3857** — [Reborn] Lane 10: add Slack ProductAdapter MVP with preconfigured credentials (6 comments)  
   [Issue link](https://github.com/nearai/ironclaw/issues/3857)  
   *Active Reborn lane for Slack MVP — reflects heavy Slack integration push this cycle.*

2. **#3280** — [Reborn] Add ProductWorkflow and InboundTurnService facade (5 comments)  
   [Issue link](https://github.com/nearai/ironclaw/issues/3280)  
   *Core Reborn architecture item — parent issue #3031 for multiple sub-items.*

3. **#4376** — Harden HTTP credential carriers with non-clone types and DTO boundary (2 comments)  
   [Issue link](https://github.com/nearai/ironclaw/issues/4376)  
   *Follow-up from credential zeroization PR — design discussion for stronger security boundaries.*

### Analysis of Underlying Needs
The **Slack integration** cluster (#3857, PRs #4418, #4421, #4422, #4430, #4423) signals a major product push — IronClaw is building native Slack channel support as a first-class Reborn product adapter. The **credential security** conversation (#4376, #4222) reflects sustained investment in production-grade secret handling. The **Reborn architecture** issues (#3280, #3283) show the team is methodically migrating from legacy to Reborn architecture, with work-items organized into numbered "Lanes."

---

## 5. Bugs & Stability

### High Severity
1. **#4425** — `builtin.http` is a context bomb: 10MB floor, no HTML strip, descriptions don't steer model to `.save`  
   [Issue link](https://github.com/nearai/ironclaw/issues/4425)  
   *Severe: single web fetch can inject ~1.2MB into context. No fix PR open yet. Risk of OOM/cost explosion in production.*

2. **#4400** — IronClaw fails to start due to stale PID file  
   [Issue link](https://github.com/nearai/ironclaw/issues/4400)  
   *Production reliability issue — instances fail to restart after crash. No automatic recovery. Risk of downtime.*

3. **#4108** — Nightly E2E failed (automated report)  
   [Issue link](https://github.com/nearai/ironclaw/issues/4108)  
   *Ci pipeline instability. Commit 749f584 caused failure. Not yet triaged.*

### Medium Severity
4. **#4424** — `builtin.spawn_subagent` advertised in surface text but absent from structured tools array  
   [Issue link](https://github.com/nearai/ironclaw/issues/4424)  
   *Model inconsistency — can't call a tool that's advertised. Affects all OpenAI-compatible model interactions.*

5. **#4429** — Prompt bundle rebuild waste — `ThreadBackedLoopContextPort` reconstructed per model call  
   [Issue link](https://github.com/nearai/ironclaw/issues/4429)  
   *Performance issue: identity/skill caches cold every model call. No fix PR yet.*

6. **#4428** — `builtin.skill_list` unbounded: returns full descriptions for all installed skills  
   [Issue link](https://github.com/nearai/ironclaw/issues/4428)  
   *14,612 bytes returned for 31 skills — no pagination or truncation. Token waste.*

7. **#4427** — Loop exit reason invisible — `LoopFailureKind` never traced  
   [Issue link](https://github.com/nearai/ironclaw/issues/4427)  
   *Observability gap: operators can't see why loops end in production.*

### Low Severity
8. **#4420** — `TriggerCompletionPolicy::CompleteAfterFirstFire` stored but never consulted  
   [Issue link](https://github.com/nearai/ironclaw/issues/4420)  
   *Triggers re-fire forever even with CompleteAfterFirstFire policy.*

9. **#4377** — `/model` returns display names that cannot be used to switch models with NEAR AI provider  
   [Issue link](https://github.com/nearai/ironclaw/issues/4377)  
   *UX issue in production — model names displayed differ from actual API identifiers.*

10. **#4426** — Parent loop tool surface is AllowAll — capability surface profile ignored  
    [Issue link](https://github.com/nearai/ironclaw/issues/4426)  
    *`interactive_tools` profile_id stamped but hardcoded to AllowAll — safety gap.*

### Existing Fix PRs
- None of today's high-severity bugs have attached fix PRs yet. Multiple bugs were filed by henrypark133 this morning (June 4) and are 0-1 comment old.

---

## 6. Feature Requests & Roadmap Signals

### Likely in Next Version (v0.30.x)
1. **Slack ProductAdapter MVP** — Multiple PRs (#4418, #4421, #4422, #4430, #4423) are converging. The personal binding OAuth flow, actor-user resolver, and service are all nearing completion. **Prediction: v0.30.0.**

2. **Capability surface selection** — Issue #4407 ([link](https://github.com/nearai/ironclaw/issues/4407)) designs model-visible capability selection for provider tool-count limits. Directly addresses the "too many tools exceed provider limits" problem observed in local Reborn. **Prediction: v0.30.x.**

3. **OAuth default account per provider** — Issue #4382 ([link](https://github.com/nearai/ironclaw/issues/4382)) proposes "set once, gate never re-fires" UX for OAuth. **Prediction: v0.30.x** (mentioned as follow-up from PR #4354).

### Roadmap Signals
- **Reborn migration continues** — #3283 (migrate OpenAI-compatible APIs onto Reborn) and #3280 (ProductWorkflow facade) are active, suggesting the legacy-to-Reborn transition is the dominant roadmap theme.
- **Third-party hooks** — PRs #3951, #3928, #3937, #3938 from zmanian are stacked on `reborn-integration`, showing the hook framework is nearing production activation (currently flag-gated OFF).
- **Trigger system hardening** — #4432 (Python E2E cron scenario) and #4416 (consolidate test handles) indicate the trigger system is being production-ready'd.

---

## 7. User Feedback Summary

### Real Pain Points
1. **Model names don't match API identifiers** — sunglow666 reports `/model` returns names like "OpenAI GPT-5" that can't be used to switch models with NEAR AI provider. **Frustration level: medium** — affects API consumers and agent developers.

2. **Stale PID file causes startup failure** — sunglow666 reports production restart failures with no automatic recovery. **Frustration level: high** — causes downtime.

3. **Context overflow from web fetches** — Impact noted in #4425: single `builtin.http` call can inject 1.2MB into context. **Frustration level: high** — likely affects all users of web-fetching agents.

4. **Tool consistency problems** — #4424 shows `spawn_subagent` advertised but not callable. OpenAI-compat users can't use advertised tools. **Frustration level: medium.**

### Use Cases
- **Slack integration** — Multiple PRs target Slack as a product adapter. User need: allow end-users to interact with IronClaw agents via Slack DMs and app mentions.
- **Trigger-based automations** — #4380 adds read-only automations WebUI API; #4415 adds trigger poller integration test. User need: scheduled/recurring agent execution.
- **SSO/OAuth identity** — #4381, #4382, #4421 address OAuth identity binding. User need: persistent identity across sessions, "set credential once" UX.

### Satisfaction Indicators
- High commit/merge velocity suggests responsive maintainers.
- Multiple follow-up PRs (e.g., #4376 as follow-up to #4372, #4389 as follow-up to #4354) show the team addresses review feedback.
- Mixed: nightly E2E failures (#4108) and the cluster of Reborn bugs from henrypark133 suggest the system is under active development strain.

---

## 8. Backlog Watch

### Long-standing Issues (critical attention needed)
1. **#3280** — [Reborn] Add ProductWorkflow and InboundTurnService facade  
   [Issue link](https://github.com/nearai/ironclaw/issues/3280)  
   *Created 2026-05-06 (29 days ago). Parent of multiple sub-issues. No PR linked. Essential for Reborn architecture—needs closure milestone.*

2. **#4108** — Nightly E2E failed  
   [Issue link](https://github.com/nearai/ironclaw/issues/4108)  
   *First reported 2026-05-27 (8 days ago). Repeat failures. No triage or fix assignment visible. Should be P0.*

3. **#3283** — Migrate OpenAI-compatible chat and Responses APIs onto Reborn  
   [Issue link](https://github.com/nearai/ironclaw/issues/3283)  
   *Created 2026-05-06 (29 days ago). No PR. Critical for Reborn completion.*

### Issues Needing Maintainer Response
4. **#3857** — [Reborn] Lane 10: add Slack ProductAdapter MVP with preconfigured credentials  
   [Issue link](https://github.com/nearai/ironclaw/issues/3857)  
   *Created 2026-05-21 (14 days ago). 6 comments, 0 maintainer response (last comment June 3). High-activity issue with no explicit triage.*

5. **#4377** — `/model` returns display names that cannot be used (production user report)  
   [Issue link](https://github.com/nearai/ironclaw/issues/4377)  
   *Created 2026-06-03. Reported by sunglow666 with environment details. No response yet.*

### Stalled PRs (>10 days open)
6. **#3928** — test(hooks): drive arguments_digest snapshot through invoke_capability  
   [PR link](https://github.com/nearai/ironclaw/pull/3928)  
   *Created 2026-05-23 (12 days). From zmanian—hook framework testing. Stacked on reborn-integration.*

7. **#3937** — test(hooks): cross-backend adversarial parity suite + A3 closeout  
   [PR link](https://github.com/nearai/ironclaw/pull/3937)  
   *Created 2026-05-23 (12 days). Final PR of durable-backend split. Medium risk, extensive scope.*

8. **#3938** — feat(hooks): activate hook framework in production behind HOOKS_ENABLED flag  
   [PR link](https://github.com/nearai/ironclaw/pull/3938)  
   *Created 2026-05-23 (12 days). Default OFF, but represents major architecture change.*

### Non-critical but notable
9. **#4389** — Follow up: split behavior-changing auth and MCP review items from PR #4354  
   [Issue link](https://github.com/nearai/ironclaw/issues/4389)  
   *Created 2026-06-03. Tracks deferred risky behavior changes. Important for safety but low urgency.*

10. **#4407** — Design model-visible capability selection for provider tool-count limits  
    [Issue link](https://github.com/nearai/ironclaw/issues/4407)  
    *Created 2026-06-03. Design-phase issue. Will grow in importance as Reborn surfaces more capabilities.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-04

## 1. Today's Overview
LobsterAI saw very high development activity with **16 PRs updated** in the last 24 hours—14 of which were closed or merged—indicating a major release push and stabilization sprint following the **2026.6.3 release** shipped on June 3. Only one new issue was updated (a user complaint about subscription credits expiring), while core team efforts focused on keyboard shortcuts, HTML sharing, MCP server validation, and cowork session management. Project health is strong: the high merge-to-open ratio suggests maintainers are clearing the backlog quickly, though the single open issue signals growing user frustration around subscription policies.

## 2. Releases
**Latest Release: [LobsterAI 2026.6.3](https://github.com/netease-youdao/LobsterAI/releases/tag/v2026.6.3)** (June 3, 2026)

**What's Changed:**
- `feat(mcp)`: Optimized npx MCP launch resolution and added first-response timing logs ([PR #2091](https://github.com/netease-youdao/LobsterAI/pull/2091))
- `feat`: Optimized HTML share functionality ([PR #2092](https://github.com/netease-youdao/LobsterAI/pull/2092))
- `feat(cowork)`: New cowork features (details continue in the release notes)

**Impact:** This is a minor patch release—no breaking changes or migration notes. The focus is on MCP reliability (timing diagnostics) and improving the sharing experience. Users running self-hosted instances should update to benefit from MCP stability improvements.

## 3. Project Progress (Merged/Closed PRs Today)
14 PRs were merged or closed today, spanning cowork, MCP, artifacts, and UI polish:

### Cowork & Collaboration
- **[PR #2109](https://github.com/netease-youdao/LobsterAI/pull/2109)** — Complete keyboard shortcuts overhaul with expanded actions and improved UX.
- **[PR #2108](https://github.com/netease-youdao/LobsterAI/pull/2108)** — Improved channel session sync and cleanup (gateway transcripts, `MessageForkIcon` replacement).
- **[PR #2085](https://github.com/netease-youdao/LobsterAI/pull/2085)** — Added local conversation forking: users can now fork any assistant message into a new conversation, preserving compacted context.
- **[PR #2101](https://github.com/netease-youdao/LobsterAI/pull/2101)** — Added artifact preview text selection to cowork drafts (Markdown/plain text sources).
- **[PR #2098](https://github.com/netease-youdao/LobsterAI/pull/2098)** — Assistant-message text selection with "Add to chat" action, persistent snippet metadata.

### MCP & Server Reliability
- **[PR #2104](https://github.com/netease-youdao/LobsterAI/pull/2104)** — Prevented session timeout during gateway config reload.
- **[PR #2103](https://github.com/netease-youdao/LobsterAI/pull/2103)** — Added MCP remote server URL validation (shared validator, localized errors).
- **[PR #2100](https://github.com/netease-youdao/LobsterAI/pull/2100)** — Kept managed MCP installs Node-aware; added fallback when managed launch fails.

### HTML Share & Artifacts
- **[PR #2105](https://github.com/netease-youdao/LobsterAI/pull/2105)** — Copy share link and code together (formatted labeled lines).
- **[PR #2099](https://github.com/netease-youdao/LobsterAI/pull/2099)** — Refined share dialog for created/active/stopped states; enabled HTML sharing outside test mode.

### UI & Configuration
- **[PR #2106](https://github.com/netease-youdao/LobsterAI/pull/2106)** — Fixed kits/skills popover interactions (overflow, delayed close).
- **[PR #2102](https://github.com/netease-youdao/LobsterAI/pull/2102)** — Preserved user-configured context windows and added Mimo v2.5 models.
- **[PR #2097](https://github.com/netease-youdao/LobsterAI/pull/2097)** — Added title bar close button to search modal.

## 4. Community Hot Topics
**Most Active Issue: [#2081 (Subscription Credits Expiration)](https://github.com/netease-youdao/LobsterAI/issues/2081)**
- **Status:** Open | **Comments:** 2 | **Author:** zjk648491625
- **Summary:** The user reports purchasing a 5500-point subscription that was "cleared to zero" before month-end, expressing frustration ("Are you kidding me?").
- **Analysis:** This is a strong signal of customer dissatisfaction with subscription/credit policies. The issue has no maintainer response yet (last updated June 3). Given that it's the only open issue with user comments, it likely reflects a broader pain point affecting paying users. The project maintainers should prioritize clarifying credit expiration policies or implementing a grace period.

**Notable Closed PR (High Activity):** No PRs today had multiple comment threads—all 14 closed items had zero or minimal discussion, suggesting a smooth, review-intensive workflow with quick merges.

## 5. Bugs & Stability
**No crash or regression bugs were filed today.** However, several fixed issues indicate latent problems:

| Severity | Issue | Fix PR | Description |
|----------|-------|--------|-------------|
| Medium | MCP session timeout during config reload | [PR #2104](https://github.com/netease-youdao/LobsterAI/pull/2104) | Session could drop when gateway config was reloaded. |
| Medium | MCP managed installs missing Node path | [PR #2100](https://github.com/netease-youdao/LobsterAI/pull/2100) | Managed npm installs failed because Electron's Node path was not injected. QA logs confirmed the issue. |
| Low | Invalid remote MCP server URLs accepted | [PR #2103](https://github.com/netease-youdao/LobsterAI/pull/2103) | URLs were not validated at input; now rejected with localized errors. |
| Low | Kits/skills popover overflow and delayed close | [PR #2106](https://github.com/netease-youdao/LobsterAI/pull/2106) | UI glitch: hover cards overflowed viewport; popover required timer for close. |

All bugs identified in closed PRs have corresponding fix PRs—none remain open.

## 6. Feature Requests & Roadmap Signals
Based on today's merged PRs, the following features were **shipped** and likely reflect completed roadmap items:

- **Conversation forking** (PR #2085) — A highly requested feature for branching discussions; likely to be expanded in the next version (e.g., forking to shared channels).
- **Text selection → chat injection** (PRs #2101, #2098) — Users can now select any text from assistant messages or artifact previews and add it directly to their current draft. This improves the cowork flow significantly.
- **Keyboard shortcuts overhaul** (PR #2109) — Indicates a UX deep-dive; may precede a broader accessibility pass.

**Predicted next version features:** Based on the volume of cowork enhancements, the next release (2026.6.x) will likely include:
- Forking across shared channels (not just local)
- More robust artifact preview interaction (images, code blocks)
- MCP launch performance diagnostics (already added timing logs)

No new user feature requests were filed today.

## 7. User Feedback Summary
- **Positive Signals:** None explicit today—but the high merge velocity (14 PRs in 24h) suggests maintainers are rapidly shipping improvements, which typically satisfies power users.
- **Pain Points:**
  - **Subscription credit expiration** ([#2081](https://github.com/netease-youdao/LobsterAI/issues/2081)) — A paying user expressed strong dissatisfaction about losing 5500 unused subscription points at month-end. This is the clearest user pain point this week. No response from maintainers as of June 4.
  - **No other user-submitted issues** were updated or filed today, suggesting the existing feature set is generally stable for most users.

## 8. Backlog Watch
**Stale PRs Needing Maintainer Attention:**

| Item | Age | Status | Description |
|------|-----|--------|-------------|
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | 63 days (Apr 2) | Open | `dependabot` bump for Electron (40.2.1 → 42.3.1) and Electron Builder. This is a **security/maintenance** dependency update—2 months stale. |
| [#1463](https://github.com/netease-youdao/LobsterAI/pull/1463) | 61 days (Apr 4) | Open | Truncates long modal titles; reviewed as "stale" with no recent activity. Low risk but should be merged to fix a known UX issue. |

**Recommendation:** Both PRs are from April and should be triaged this week—especially #1277 (security deps) and #1463 (a pre-reviewed UX fix). The project appears healthy otherwise, with no other open issues or PRs lingering beyond 2 days.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-04

## 1. Today's Overview
Moltis had a moderately active 24-hour period with 14 issues updated (9 closed, 5 open) and 4 pull requests filed (all open, none merged). Two new patch releases were pushed (20260602.05 and 20260603.01), indicating continued rapid iteration. The project shows healthy bug-fix velocity, with maintainers closing long-standing issues from late May, while also fielding a fresh wave of container-environment bugs and Telegram integration problems. Community engagement is steady, with several new contributors filing reports and a burst of serial bug reports from a single user (RokkuCode) around Docker/Podman compatibility.

## 2. Releases
Two new releases were published today:
- **20260603.01** — Latest (June 3 build)
- **20260602.05** — Minor patch (June 2 build)

No changelogs, migration notes, or breaking change details are available from the provided data. The sequential date-based versioning suggests these are automated nightly/canary builds. Users should update if they are affected by any of the bugs closed since late May (issues #1028–#1054 batch).

## 3. Project Progress
**No PRs were merged or closed today.** All 4 open PRs remain in review:
- **#1099** [codex] Separate Telegram progress stream from final replies – fixes the edit-in-place streaming bug (see Community Hot Topics)
- **#1098** [fix(browser)] Tolerate null optional params in browser tool calls – addresses model-serde mismatch for smaller local LLMs
- **#1093** [Add channel activity log visibility settings] – granular per-channel/per-user control over tool-status messages in chat replies
- **#1089** [Cap persisted tool results before rehydration] – prevents oversized session history from bloating provider-bound ChatMessages

Nine issues were closed, all from the May 20–May 29 backlog. A batch of seven bugs (#1045–#1054 and #1037) were resolved, along with two enhancements (#1028, #1036) and one closed without explanation. This suggests maintainers performed a targeted stability sweep.

## 4. Community Hot Topics
- **Issue #1097** [OPEN] Telegram edit-in-place streaming mixes intermediate output into final reply (1 comment, filed by s-salamatov) — [Link](https://github.com/moltis-org/moltis/issues/1097)  
  The most actively debated issue. The reporter (also a PR author) notes that Telegram’s progressive message editing leaks streaming/final answer boundaries. **PR #1099** directly addresses this by treating streaming as temporary progress updates that are silently deleted on completion, so the final reply arrives cleanly. This is the highest-impact open thread.

- **Issue #1028** [CLOSED] Agent should have access to Moltis docs OOTB (3 comments, 0 reactions) — [Link](https://github.com/moltis-org/moltis/issues/1028)  
  The most commented-on closed issue. The feature request suggests agents should be able to self-reference project documentation out-of-the-box. It was closed, possibly after being implemented or deemed out of scope. No merged PR directly references it, so the resolution reason is unclear.

- **Issue #1092** [OPEN] Add config option to disable channel activity log tool-status messages — [Link](https://github.com/moltis-org/moltis/issues/1092)  
  Related to #1097, this requests granular control over Telegram’s collapsible `Activity log` block. PR #1093 is the companion implementation. The underlying need: users want to control tool-use verbosity per channel/user without disabling it globally.

## 5. Bugs & Stability
Three new bugs reported today, all filed on 2026-06-03:

**High Severity** (affects core functionality):
- **#1096** `Read`/`Write`/`Edit` tools don’t work in Docker — [Link](https://github.com/moltis-org/moltis/issues/1096)  
  Filed by IlyaBizyaev (core contributor). Agent core tools fail in containerized environments. No fix PR yet. Likely a filesystem path or permission issue.

**Medium Severity** (affects deployment options):
- **#1095** Podman is not working via Moltis — [Link](https://github.com/moltis-org/moltis/issues/1095)  
  Filed by new user RokkuCode. Podman (Docker alternative) integration is broken. No details on error mode (build/run/exec). No fix PR yet.

**Low-Medium Severity** (configuration/UX):
- **#1094** De-Preferring Models — [Link](https://github.com/moltis-org/moltis/issues/1094)  
  Also filed by RokkuCode. Title is cryptic; likely refers to a "de-preferring" mechanism (auto-detecting and excluding models that perform poorly or are unreachable). No comments or PR addressing this yet.

**Regression Watch**: The Docker-related issues (#1037, #1096) and tool-result capping (#1089) suggest recent changes to file I/O or session handling may have introduced regression in container contexts.

## 6. Feature Requests & Roadmap Signals
- **#1092** Channel activity log visibility settings (active PR #1093) — Likely to land in next release (20260604.x). Would give users `all` | `errors_only` | `off` per channel/user.
- **#1028** Agent access to docs OOTB — Closed without visible implementation. May resurface if users ask for it again.
- **#1036** Arbitrary inbound file attachments in Web UI — Closed. Possibly implemented or deferred indefinitely.

**Prediction for next release (20260604.x):** The Telegram streaming fix (#1097/#1099) and the activity log settings (#1092/#1093) are both authored by s-salamatov and touch similar code paths—high chance they ship together. The browser tool null-param fix (#1098) is a small, safe patch likely to merge quickly.

## 7. User Feedback Summary
- **Pain point: Telegram UI issues.** The most vocal feedback today concerns how Moltis displays tool usage and streaming responses in Telegram. Users want cleaner separation of progress updates vs. final answers (#1097) and control over Activity log visibility (#1092). This is the #1 user experience friction point visible today.
- **Pain point: Docker/Podman container support.** Multiple users (IlyaBizyaev, RokkuCode) report file-read/write tools and container managers failing in Docker environments (#1096, #1095, and earlier #1037). This points to either a configuration complexity or a regression in the container execution layer.
- **Silent satisfaction:** Nine bugs closed today (mostly from late May) suggest the team is responsive to community reports, even if PR merging is currently paused.

## 8. Backlog Watch
- **Issue #1083** (closed 2026-06-03) — Was a real backlog item (skills enable/disable per-category, originally 2026-05-29), resolved today. Good.
- **PR #1089** — Cap persisted tool results before rehydration (filed 2026-06-01, last updated 2026-06-03). No comments from maintainers. This is a moderate-risk change affecting session persistence. It may be held for more review before the next stable release.
- **No orphaned issues** older than 30 days are present in the active set. The current open issues (1092, 1094, 1095, 1096, 1097) are all from the last 48 hours. The maintainers appear to be keeping up with triage reasonably well.

---

**Overall Project Health:** Good. High bug-fix throughput, two active feature PRs, and responsive issue closure. The main risks are container compatibility regressions and Telegram UX fragmentation. The team's structured approach (separating progress from final replies, adding granular visibility controls) indicates thoughtful design maturation. The lack of any merged PRs today is the only yellow flag, but may be a natural pause before a batch merge.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest
**Date:** 2026-06-04

---

## 1. Today's Overview

CoPaw (QwenPaw) is showing **elevated activity and community interest**, with 49 issues and 50 PRs updated in the last 24 hours. The project maintains a **healthy close rate**: ~43% of issues (21/49) and ~42% of PRs (21/50) were closed or merged. No new releases were published today. The community continues to submit high-quality bug reports and feature requests, particularly around **context compression**, **memory system reliability**, and **cross-browser/desktop stability**. A notable trend is the community’s repeated calls for **Hermes Agent-style self-evolution capabilities**, with multiple issues raising the same theme across months.

---

## 2. Releases

**No new releases** today. The latest version remains **v1.1.10** (Tauri Desktop).

---

## 3. Project Progress

**21 PRs were merged/closed today**, reflecting ongoing maintenance and feature work:

### Merged/Closed Highlights:

- **#4942** – [Roadmap update](https://github.com/agentscope-ai/CoPaw/pull/4942) – Maintainer activity on project direction.
- **#4935** – [Reme dependency update to v0.3.1.10](https://github.com/agentscope-ai/CoPaw/pull/4935) – Fixes file watcher restart reliability (stop-event not reset).
- **#4933** – [Context fix: handle non-dict source objects](https://github.com/agentscope-ai/CoPaw/pull/4933) – Fixes `'str' object has no attribute 'get'` crash in media block processing.
- **#4940** – [Integration test resilience: upload size limit + plugin loader timeout](https://github.com/agentscope-ai/CoPaw/pull/4940) – CI reliability improvements.
- **#4943** – [Agent-scoped P0 contract tests (+55 cases)](https://github.com/agentscope-ai/CoPaw/pull/4943) – Significant test coverage expansion.
- **#4821** – [Feishu group session sharing mode](https://github.com/agentscope-ai/CoPaw/pull/4821) – Channel feature improvement.
- **#4737** – [Telegram tool_guard inline keyboard approval](https://github.com/agentscope-ai/CoPaw/pull/4737) – Telegram channel enhancement.
- **#4810** – [Slash command suggestions with current-agent skills](https://github.com/agentscope-ai/CoPaw/pull/4810) – Console UX optimization.

### Key Open PRs Under Review:
- **#4171** – [Memory distillation tool plugin](https://github.com/agentscope-ai/CoPaw/pull/4171) – Title-diffing distillation engine with ~92% noise reduction (open 25 days).
- **#4949** – [ACP server metadata enhancement](https://github.com/agentscope-ai/CoPaw/pull/4949) – For terminal UI integration.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count):

| Issue | Title | Comments | Status |
|-------|-------|----------|--------|
| [#4919](https://github.com/agentscope-ai/CoPaw/issues/4919) | browser_use: managed CDP timeout + Chrome/Edge crash | 6 | **OPEN** |
| [#3470](https://github.com/agentscope-ai/CoPaw/issues/3470) | Hermes Agent self-evolution R&D plan | 6 | CLOSED |
| [#3854](https://github.com/agentscope-ai/CoPaw/issues/3854) | chromadb Rust binding segfault (SIGSEGV) | 5 | **OPEN** |
| [#3905](https://github.com/agentscope-ai/CoPaw/issues/3905) | Dream agent memory management failure | 5 | **OPEN** |
| [#4924](https://github.com/agentscope-ai/CoPaw/issues/4924) | Context compaction fails: 'str' has no 'get' | 4 | **CLOSED** |

### Underlying Needs Analysis:

- **Browser integration fragility** (#4919): Windows users are hitting a wall with CDP-based browser automation — timeout and crash across Chrome/Edge, requiring npm fallback. This is a **core reliability blocker** for Windows desktop users.
- **Memory system instability** (#3905, #4795, #4710): Multiple extensive reports of MEMORY.md corruption, vector store bloat to 37GB, and timestamp inconsistencies — the memory system is the **#1 pain point**.
- **Self-evolution demand** (#3470, #3516): Two separate issues (April 16 & 17) explicitly ask about Hermes Agent-style auto-evolution, indicating strong community desire for agents that improve autonomously over time.

---

## 5. Bugs & Stability

### Critical / High Severity:

| Issue | Title | Severity | Status | Fix PR? |
|-------|-------|----------|--------|---------|
| [#3854](https://github.com/agentscope-ai/CoPaw/issues/3854) | chromadb Rust binding segfault kills process (45+ crashes/session) | **CRITICAL** | **OPEN** | ❌ |
| [#4919](https://github.com/agentscope-ai/CoPaw/issues/4919) | browser_use CDP timeout + browser crash on Windows | **CRITICAL** | **OPEN** | ✅ #4944 |
| [#4795](https://github.com/agentscope-ai/CoPaw/issues/4795) | Vector index ballooned to 37GB; memory_search crashes | **HIGH** | **OPEN** | ❌ |
| [#4922](https://github.com/agentscope-ai/CoPaw/issues/4922) | PermissionError persists after session clear — agent broken | **HIGH** | **OPEN** | ❌ |
| [#4889](https://github.com/agentscope-ai/CoPaw/issues/4889) | Plugin Loader uninitialized on Tauri Desktop | **HIGH** | **OPEN** | ✅ #4900 |
| [#4937](https://github.com/agentscope-ai/CoPaw/issues/4937) | /compact ignores model's max_input_length | **HIGH** | **OPEN** | ❌ |
| [#4924](https://github.com/agentscope-ai/CoPaw/issues/4924) | Context compression fails on old-format file blocks | **MEDIUM** | **CLOSED** | ✅ #4933 |

### Medium Severity (ongoing):
- **#4916** – Backup fails with PermissionError on browser cache files (Windows).
- **#4877** – Custom channel save stops channel listener due to logic bug in `replace_channel`.
- **#4876** – Windows code mode cannot open drives other than C:.
- **#4923** – Sub-agent tasks via `spawn_subagent` show no progress during execution.
- **#4928** – Skill market download fails due to size limit (5MB).

### Notable Fix in Pipeline:
- **PR #4944** directly addresses the Windows browser_use crash (#4919) by adding CDP timeout parameter and browser profile isolation.
- **PR #4900** fixes the Plugin Loader initialization issue (#4889) by decoupling from agent startup.

---

## 6. Feature Requests & Roadmap Signals

### Recurring Community Themes:

**1. Self-Evolving Agents (Hermes-style)**
- Issues [#3470](https://github.com/agentscope-ai/CoPaw/issues/3470) and [#3516](https://github.com/agentscope-ai/CoPaw/issues/3516) both ask explicitly about Hermes Agent-like auto-evolution. This is a **clear roadmap signal** — the community wants agents that learn and improve autonomously.

**2. Auto-Memory & Session Summarization**
- [#4640](https://github.com/agentscope-ai/CoPaw/issues/4640) – RFC for **pre-hook memory archiving** at session end (automatic extraction of decisions, code changes, pitfalls).
- [#3944](https://github.com/agentscope-ai/CoPaw/issues/3944) – Request to exclude heartbeat/cron from Auto-Memory.
- [#4208](https://github.com/agentscope-ai/CoPaw/issues/4208) – Question about mem0 integration support.

**3. UI/UX Improvements**
- [#4920](https://github.com/agentscope-ai/CoPaw/issues/4920) – Arrow key navigation behavior in chat input.
- [#4921](https://github.com/agentscope-ai/CoPaw/issues/4921) – Images should not be Base64-loaded into context.
- [#4637](https://github.com/agentscope-ai/CoPaw/pull/4637) – Customizable slash command shortcut menu (open PR).

### Predictions for Next Release:

Likely inclusions based on open PRs and community demand:
1. **MiniMax M3 model support** (PR #4881) – New flagship model, high demand.
2. **Tauri auto-updater** (PR #4669) – Desktop quality-of-life.
3. **Memory distillation plugin** (PR #4171) – Addresses the #1 pain point.
4. **Browser stability fixes** (PR #4944) – Critical for Windows users.
5. **Plugin Loader fix** (PR #4900) – Unblocks plugin ecosystem on desktop.

---

## 7. User Feedback Summary

### Pain Points (High Signal):

- **Memory/Context System is Unreliable**: Multiple users report MEMORY.md corruption (#4888, #3905), context compaction failures (#4448, #4924, #4811, #4937), and vector store bloat (#4795). This is the **single largest source of user dissatisfaction**.
- **Windows-specific Instability**: browser_use crashes (#4919), backup permission errors (#4916), and code mode drive limitation (#4876) indicate Windows QA gaps.
- **Agent State Corruption**: A user reports that after one error, the agent becomes **permanently broken** (#4922) — suggesting error recovery or state reset is insufficient.
- **Plugin Ecosystem Friction**: Plugin Loader not ready (#4889), skill download limits (#4928), and channel save logic bugs (#4877) frustrate customization.

### Satisfaction Signals:

- **Active Community Engagement**: 99 combined issues+PRs in 24h shows a **healthy, invested user base**.
- **Contributor Pull Requests**: Multiple external contributors (ekzhu, OCTO-Patch, DICKQI, saltapp) submitting significant features.
- **Detailed Error Reports**: Issues consistently include environment info, logs, and reproduction steps — indicating technical users who care deeply about the project.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention:

| Issue | Age | Title | Why It Matters |
|-------|-----|-------|----------------|
| [#3854](https://github.com/agentscope-ai/CoPaw/issues/3854) | 38 days | chromadb Rust binding segfault | **CRITICAL**: Kills entire process. 45+ crashes/session. No response yet. |
| [#4795](https://github.com/agentscope-ai/CoPaw/issues/4795) | 6 days | Vector index 37GB bloat | Growing concern — memory_search crashes. Only 3 comments, no triage. |
| [#4208](https://github.com/agentscope-ai/CoPaw/issues/4208) | 24 days | mem0 integration support | Direct user asking for architecture guidance. No response. |
| [#4640](https://github.com/agentscope-ai/CoPaw/issues/4640) | 12 days | Session-end auto summary RFC | Detailed proposal — no maintainer engagement yet. |
| [#4781](https://github.com/agentscope-ai/CoPaw/issues/4781) | 7 days | tool_result_pruning fails on large shell output | Context blowup risk — no response. |
| [#4710](https://github.com/agentscope-ai/CoPaw/issues/4710) | 8 days | Vector store timestamp inconsistency | Technical debt — naive vs UTC datetime mismatch. |

### Open PRs in Limbo:

| PR | Age | Title | Why It Matters |
|----|-----|-------|----------------|
| [#4171](https://github.com/agentscope-ai/CoPaw/pull/4171) | 25 days | Memory distillation plugin | Addresses #1 user pain point. Under Review but stalled. |
| [#4637](https://github.com/agentscope-ai/CoPaw/pull/4637) | 13 days | Customizable slash commands | High UX impact. No recent review activity. |

**Notable observation:** The CRITICAL segfault issue (#3854) has been open for 38 days with **zero maintainer response**. Given the severity (process crash, 45+ occurrences per session), this should be triaged immediately.

---

## Project Health Summary

| Metric | Value | Signal |
|--------|-------|--------|
| Issues/day | 49 | 🔴 High — may indicate stability concerns |
| Close rate | ~43% | 🟢 Healthy |
| PR merge rate | ~42% | 🟢 Active development |
| New releases | 0 | 🟡 No new features shipped |
| Unresponded critical bugs | 2 | 🔴 (#3854, #4795) |
| Contributor ratio | ~60% external | 🟢 Strong community |

**Bottom line:** CoPaw is **highly active** with a passionate community, but **memory system reliability and Windows stability** are urgent priorities. The backlog of critical unaddressed bugs risks eroding trust if left unresolved.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-06-04

## Today's Overview
ZeptoClaw is in a low-activity maintenance phase, with no new Issues opened or resolved in the last 24 hours and zero merged pull requests. The project received 16 open dependency update PRs, all filed today by Dependabot, covering Rust crates, Docker images, GitHub Actions, and JavaScript packages used across the main codebase, the panel, and documentation landing pages. No releases were issued, and no user-facing code changes were introduced. This indicates the project is currently focused on keeping dependencies fresh rather than active feature development or issue triage.

## Releases
None.

## Project Progress
No pull requests were merged or closed today. The 16 open PRs (all Dependabot) remain unmerged; none advance features or fix user-reported bugs.

## Community Hot Topics
No Issues or PRs have generated community discussion. All 16 PRs are automated dependency bumps with zero comments and zero reactions from maintainers or contributors. The lack of human interaction on these PRs suggests either a backlog in maintainer review or an automated merge pipeline that has not yet run.

**Links:**
- All 16 open PRs: https://github.com/qhkm/zeptoclaw/pulls?q=is%3Aopen+is%3Apr

## Bugs & Stability
No new bugs, crashes, or regressions were reported in the last 24 hours. The dependency bumps (e.g., Tokio 1.52.1→1.52.3, tower-http 0.6.10→0.6.11, serde_json 1.0.149→1.0.150) include minor fixes that, once merged, would marginally improve runtime stability. No critical stability issues are outstanding.

**Notable fix in pending PRs:**
- Tokio v1.52.3 includes bug fixes (PR #623): https://github.com/qhkm/zeptoclaw/pull/623
- rpassword v7.5.2 fixes a Unicode parsing issue (PR #625): https://github.com/qhkm/zeptoclaw/pull/625

## Feature Requests & Roadmap Signals
No feature requests were submitted today. The Dependabot PRs offer indirect insight into ZeptoClaw's tech stack: it uses Rust (Tokio, tower-http, serde_json, scraper, rpassword), Docker (rust:1.96-slim-trixie base), a frontend panel built with React 19.2.x and Tailwind CSS 4.3.0, and Astro-powered documentation landing pages. The steady flow of dependency bumps suggests the project follows a rolling update cadence, but no roadmap signals about upcoming features are visible.

## User Feedback Summary
No user feedback, pain points, or satisfaction signals were recorded in the past 24 hours. The absence of Issues or PR comments indicates the community is either satisfied, dormant, or waiting for maintainer engagement.

## Backlog Watch
There are no long-unanswered Issues or PRs requiring attention — the PR queue consists entirely of same-day automated updates. However, the complete lack of maintainer responses on any of the 16 open PRs (all from 3 June 2026) could become a concern if this pattern persists. A brief acknowledgment or automated merge schedule would improve project health perception.

**All open PRs needing review (no maintainer activity):** https://github.com/qhkm/zeptoclaw/pulls

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-04

## Today's Overview

ZeroClaw shows **elevated activity** with 50 issues and 50 PRs updated in the last 24 hours, though only 7 PRs were merged or closed. The project is in a **heavy development and stabilization phase** targeting v0.8.0 and v0.8.1 releases, with multiple large refactors in flight around configuration resilience, provider fallback mechanics, channel architecture, and security enforcement. A notable **security-focused initiative** is emerging around OIDC authentication and pluggable security providers, while bug fixes continue across providers, memory, shell sandboxing, and the TUI dashboard. No new releases were cut today.

## Releases

None — no new releases were published in the last 24 hours.

## Project Progress

**Merged/Closed PRs (7 total):**
- **#7166** — *fix(zerocode): let quickstart agent name accept hotkey letters* (by JordanTheJet): Modal hotkey letters (`e`, `t`, `c`, `d`) were being silently dropped from agent name fields in the Quickstart modal; now properly accepted.
- **#7172** — *fix(providers): honour wire_api = "responses" for llamacpp provider* (by tidux): `LlamacppModelProviderConfig::create_provider` was ignoring the operator's `wire_api` field, always building a `/chat/completions` provider even when `responses` was configured.
- **#7168** — *[Feature]: Session branching — fork conversations at any message point* (by sentinel-nnet): Feature request for conversation forking.
- **#7167** — *[Feature]: Session branching — fork conversations at a specific message point* (by sentinel-nnet): Duplicate/related feature request for session branching.
- Several other closed PRs related to CI and documentation improvements.

**Notable open PRs advancing this week:**
- **#7067** (Phase 0 agent eval harness — deterministic replay): Large PR adding `zeroclaw eval run` for replay-based evaluation with declarative expectations.
- **#6389** (per-recipient reply pacing across 9 channels): Large cross-channel architecture change adding configurable `reply_min_interval_secs` for Telegram, Discord, Slack, Mattermost, Webhook, iMessage, Matrix, Signal, and WhatsApp.
- **#6988** (invalidate bearer token on device rotate/delete): Critical security fix ensuring token rotation/revocation actually works.
- **#7066** (excise default-model-provider credential fallback): Architecture change removing the implicit channel credential fallback mechanism.

## Community Hot Topics

**Most active issues today (by comments):**

1. **#6123** ([CLOSED] *default_model issue on fresh install* — 18 comments): Users with fresh LXC installs hit a `default_model` error when Ollama runs on a separate container. The discussion indicates this is a provider routing/resolution issue on first startup with remote providers. High engagement suggests this is a **common onboarding friction point**.

2. **#5722** ([CLOSED] *Default shell sandbox configuration blocks all realistic Python skill patterns* — 6 comments): Contributor Jason Perlow (building InvestorClaw) reports that the default sandbox configuration is too restrictive for real Python skill development, blocking common patterns. This reflects **tension between security and developer productivity**.

3. **#6246** ([CLOSED] *WhatsApp Web channel: pair succeeds but messages don't flow after April 2026 server-side protocol bump* — 6 comments): A server-side WhatsApp protocol change broke message delivery for the WhatsApp Web channel. User alexandme reports pairing succeeds but messages silently fail — a **channel stability concern** for production users.

4. **#7141** and **#7142** (both OPEN, *OIDC Authentication Provider support* and *Pluggable security provider interface* — 3 comments each): User singlerider has created tracking issues for a **major security architecture overhaul** targeting v0.9.0, suggesting this is a planned feature with maintainer involvement.

**Underlying needs:** The community is signaling strong demand for **reliable first-time setup** (LXC/Ollama), **security that doesn't block real work** (shell sandbox), **channel reliability** (WhatsApp), and **enterprise-grade security** (OIDC).

## Bugs & Stability

**Critical (S1 - workflow blocked):**

| Issue | Description | Fix Status |
|-------|-------------|------------|
| #7179 (OPEN) | RPC sessions reaped after 10 minutes of idle — users lose long-running sessions unexpectedly | No fix PR yet |
| #7173 (OPEN) | Quickstart webhook channel setup omits port field, causing toml parse failure | No fix PR yet |
| #7133 (OPEN) | Path-policy false-positive on `~` tokens in quoted/heredoc command data — security sandbox incorrectly blocks legitimate commands | No fix PR yet |
| #6516 (CLOSED) | ACP "cwd" change can lock agent out of reading its own skill files | Closed |
| #6207 (CLOSED) | Web dashboard / WebSocket gateway bypasses ApprovalManager — supervised tool approvals never surface | Closed |

**High (S2 - degraded behavior):**

- **#6269** (CLOSED): Context compressor drops `reasoning_content` from assistant messages, breaking DeepSeek and reasoning-capable providers.
- **#7133** (OPEN): Path-policy false-positive with tilde tokens — `forbidden_path_argument` tokenizes commands with `split_whitespace()` and applies path checks to every token, catching `~` within quoted strings.
- **#6702** (OPEN, priority: p3): Dashboard assistant bubble accumulates blank lines for each tool-call card — minor UI regression.

**Fix PRs in flight for recent bugs:**
- **#7180** (OPEN): Fixes `wire_api = "responses"` being ignored for custom/openai-compatible provider families.
- **#7177** (OPEN): Forces memory-tool exclusion for ACP (Code) sessions server-side — prevents memory tools from being exposed in code sessions.
- **#7120** (OPEN): Prevents interactive subprocesses (e.g., `git` credential prompts) from hijacking the controlling terminal in TUI deployments.
- **#7066** (OPEN): Excises default-model-provider credential fallback for channels — resolves a class of credential-leakage and misrouting bugs.

## Feature Requests & Roadmap Signals

**New feature requests opened today:**

1. **#7175** (OPEN, by singlerider): *typed delete-with-cascade for aliased entries (providers, agents, channels)* — When deleting a config alias, cascade-delete references throughout the config. Likely for **v0.8.0** (configuration stability target).

2. **#7141 / #7142** (OPEN, by singlerider): OIDC authentication provider and pluggable security provider interface. Labeled **v0.9.0** — this is a **medium-to-long-term roadmap item** for enterprise security.

3. **#7168 / #7167** (CLOSED, by sentinel-nnet): Session branching — fork conversations at any message point. Currently closed with no PR attached; status unclear.

4. **#7112** (OPEN, by Audacity88): *v0.8.0 release queue and Stable-tier blockers* — tracking issue for the next major release. Lists config and tool-call-parser Stable-tier promotion, schema/config breaking-change cleanup, and release-default decisions.

**Predictions for next version (v0.8.0):**
- Config resilience improvements (PR #7160 — resilient daemon config load)
- Provider fallback chains (PR #7178 — per-alias model-provider fallback)
- Kilo AI Gateway as first-class provider (PR #7136)
- Agent eval harness (PR #7067 — Phase 0)
- Container pipeline with musl static linking (PR #7176)
- ZeroCode navigation/unification (PR #7118)

## User Feedback Summary

**Pain points expressed today:**

1. **Onboarding friction:** Issue #6123's 18 comments highlight that fresh installs with remote Ollama instances fail on default model resolution. This is a **recurring theme** — users report setup as confusing.

2. **Channel reliability:** Issue #6246 (WhatsApp protocol bump) and #7173 (webhook port missing) indicate that **channel integrations remain fragile** and the Quickstart UI has validation gaps.

3. **Session management:** Issue #7179 (10-minute RPC session reap) frustrates users who expect long-running sessions to persist. User tidux explicitly calls out the **600-second timeout as too aggressive**.

4. **Security vs. usability:** Issue #7133 (path-policy false positives) and #7132 (shell sandbox blocking Python skills) reflect continued **tension between sandbox security and real-world developer workflows**.

5. **Positive market signals:** The Kilo AI Gateway integration (PR #7136) and FreeBSD setup guide (PR #7161) suggest **growing community contributions** and interest in enterprise/self-hosted deployments. The agent eval harness (PR #7067) addresses a **clear developer need** for reproducible testing.

6. **Documentation gaps:** Issue #5863 (CLOSED, *Document about skills wanted*) and #5956 (CLOSED, *Document skill audit scope decision*) both resolved but indicate ongoing documentation needs for the skills system.

## Backlog Watch

**Issues needing maintainer attention:**

1. **#5987** (OPEN, created 2026-04-22) — *feat(nix): add flake.nix* by srghma. A significant Nix flake PR for reproducible builds with decoupled backend/UI. Open for **43 days** with recent updates but no merge. This is a **valuable infrastructure contribution** that would benefit NixOS users.

2. **#6702** (OPEN, created 2026-05-16) — *Dashboard assistant bubble accumulates blank lines for each tool-call card*. Accepted priority p3, but **20 days stale** with no assigned owner. While minor, it affects user experience in the web dashboard.

3. **#7179** (OPEN, created today) — *RPC session idle timeout at 10 minutes*. Labeled S1 (workflow blocked) with no fix PR yet. **Critical for power users** running long assistant interactions.

4. **#7133** (OPEN, created today) — *Path-policy false-positive on ~ tokens*. S2 severity affecting shell commands with heredocs/quoted strings. **Blocks users from legitimate command execution**.

5. **#7173** (OPEN, created today) — *Quickstart webhook channel port missing*. S1 severity blocking channel setup. **Needs immediate UI fix** for the Quickstart flow.

**PRs needing review:**
- **#6389** (per-recipient reply pacing, open since May 5 — 30 days): Large cross-channel PR that could address user complaints about message flooding.
- **#7067** (agent eval harness, open since June 1 — 3 days): Significant infrastructure addition, likely being reviewed carefully.
- **#6988** (token invalidation fix, open since May 28 — 7 days): **Security-critical fix** that should be prioritized.

**Observation:** The high volume of open PRs (43 open vs. 7 merged today) suggests a **review bottleneck**. Several critical fixes (#6988, #7066) have been open for a week or more without merge. The maintainers may benefit from additional reviewer capacity to close these gaps more quickly.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*