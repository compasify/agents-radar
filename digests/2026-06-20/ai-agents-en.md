# OpenClaw Ecosystem Digest 2026-06-20

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-20 00:28 UTC

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

Here is the OpenClaw project digest for 2026-06-20.

---

## OpenClaw Project Digest — 2026-06-20

### 1. Today's Overview

OpenClaw is in a period of intense development and patching, with 500 issues and 500 PRs updated in the last 24 hours. While a single new beta release (v2026.6.9-beta.1) was published with minor improvements to Telegram delivery, the overwhelming signal from the community is one of stability concerns following the major v2026.6.1 release. The project is under significant pressure from a high volume of P0/P1 regressions, memory leaks, and session-state corruption bugs, with maintainers actively triaging and merging fixes. The "ClawSweeper" automation system is heavily queued with fix approvals, suggesting a focused effort to stabilize the codebase.

### 2. Releases

**v2026.6.9-beta.1** was released today.
- **Highlights:** The release focuses on improving Telegram integration. It now sends richer HTML, preserves markdown and sticker paths, renders progress drafts more faithfully, and fixes routing for mentions and spooled handlers.
- **Migration Notes:** This is a minor beta release; no breaking changes or special migration steps are noted.

### 3. Project Progress

Today's activity shows a strong push to close out regressions identified in the 2026.6.x line.
- **Memory & Session Stability:** Several critical fixes were merged, including a compiler fix for subagent invocations (`#91306`), a fix for session state migration issues (`#91422`), and improvements to memory index synchronization.
- **Platform Support:** A fix was merged for Windows users dealing with EPERM errors during memory index operations (related to `#78640`).
- **Documentation:** A long-standing PR to clarify Kubernetes installation docs (`#91455`) saw activity and is near completion.

### 4. Community Hot Topics

The community is highly engaged, primarily around critical bugs and feature requests affecting daily operation.

- **Gateway Memory Leak ([Issue #91588](https://github.com/openclaw/openclaw/issues/91588))** — *12 comments, P0*
  - **The Issue:** The gateway process leaks memory from 350MB to 15.5GB over 2-3 days, causing repeated OOM crashes. This is the most critical stability issue currently open.
  - **Underlying Need:** Users need reliable, long-running operation without manual restarts for production deployments.

- **Per-Agent Memory Vaults ([Issue #63829](https://github.com/openclaw/openclaw/issues/63829))** — *10 comments, 9 👍*
  - **The Issue:** A long-standing feature request for multi-agent setups to have isolated memory-wiki vaults instead of a shared global one.
  - **Underlying Need:** Advanced users building complex multi-agent systems require strict data isolation between different personas or roles.

- **Codex OAuth / Cron Timeout Regression ([Issue #89278](https://github.com/openclaw/openclaw/issues/89278))** — *5 comments, P1*
  - **The Issue:** Codex OAuth refresh succeeds but takes slightly more than 10 seconds, causing cron/heartbeat checks to fail.
  - **Underlying Need:** Users with automated Codex workflows need consistent and prompt authentication, not timed-out background tasks.

- **Telegram Compatibility Breaking ([Issue #93794](https://github.com/openclaw/openclaw/issues/93794))** — *5 comments, 8 👍 (CLOSED)*
  - **The Issue:** A high-reaction issue reporting that Telegram web client stopped working entirely after an upgrade. This was a regression that has since been closed, indicating a successful hotfix.

### 5. Bugs & Stability

Stability is the primary theme of today’s digest, with several high-severity bugs in the pipeline.

- **P0 - Critical: Gateway Memory Leak ([#91588](https://github.com/openclaw/openclaw/issues/91588))** — RSS grows to 15.5GB causing OOM. No fix PR linked, but it is a top priority.
- **P0 - Critical: Compaction Timeout & Session Wedge ([#92043](https://github.com/openclaw/openclaw/issues/92043))** — 180s compaction timeout is too short, causing "Something went wrong" errors. A fix PR is open.
- **P1 - Regression: Cron Migrations Broken ([#90378](https://github.com/openclaw/openclaw/issues/90378))** — Silent migration to SQLite broke existing cron job configurations, causing channel errors. A fix PR is linked.
- **P1 - Regression: Matrix Channel Dispatch Broken ([#90325](https://github.com/openclaw/openclaw/issues/90325))** — A TypeError crashes the Matrix handler on every inbound message. A fix PR is in review.

### 6. Feature Requests & Roadmap Signals

While the community is focused on fixes, several strong feature signals emerged.

- **Topic-Session Families ([Issue #90916](https://github.com/openclaw/openclaw/issues/90916))** — A well-formed proposal for one assistant to maintain multiple named context lanes (e.g., separate chats for "work" and "personal" within one agent). This is a strong candidate for a future minor release as it solves a real usability problem.
- **Session Duration in Status Footer ([Issue #68226](https://github.com/openclaw/openclaw/issues/68226))** — A small UX request to show how long a session has been active. *Closed today*, suggesting it will land in the next stable release.
- **Platform-Specific Documentation ([Issue #91455](https://github.com/openclaw/openclaw/issues/91455))** — A PR to improve Kubernetes deployment docs is active, signaling better enterprise/self-hosting support on the roadmap.

### 7. User Feedback Summary

- **Pain Points:** The dominant sentiment is frustration with regressions from `v2026.6.1`. Users describe silent data loss from memory flush failures, broken automation from cron migration issues, and application unavailability from the gateway memory leak and OOM crashes.
- **Use Cases:** A significant portion of the user base relies on OpenClaw for robust production automation (cron jobs, Codex integration, multi-agent orchestration) and requires high uptime and predictable performance.
- **Satisfaction:** While the project is responsive to bugs (many issues have linked PRs or "Needs Maintainer Review" labels), the sheer volume of breaking changes is eroding trust in the stability of the latest stable channel.

### 8. Backlog Watch

Several important long-standing issues remain unresolved, risking stagnation.

- **Memory Index EPERM on Windows ([#78640](https://github.com/openclaw/openclaw/issues/78640))** — This has been open since May and represents a persistent source of breakage for Windows users. Despite multiple attempts to fix it, the root cause is not fully addressed.
- **Per-Channel Model Override ([#53638](https://github.com/openclaw/openclaw/issues/53638))** — A high-demand feature (P2) that has been open since March. A linked PR exists, suggesting progress, but it has not been merged. This is a major missing feature for users who want to route cheap vs. expensive models per conversation.
- **Config Validation Rejecting Plugin Extensions ([#92884](https://github.com/openclaw/openclaw/issues/92884))** — This bug blocks plugin development for third-party channel extensions. Without a fix, the plugin ecosystem remains constrained to the bundled channel types.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant Open-Source Ecosystem

## 2026-06-20

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing a **fractured but rapidly maturing landscape**, with projects diverging along architecture (monolithic vs. modular), deployment model (local-first vs. cloud-hybrid), and target user (developer vs. end-user). Development velocity remains extremely high across the board, but a clear pattern has emerged: **projects are paying down technical debt from rapid expansion**, with every major project facing significant stability regressions following recent releases. The community is increasingly demanding production-grade features—credential management, context isolation, human-in-the-loop workflows, and reliable multi-agent orchestration—suggesting the ecosystem is transitioning from experimental to enterprise-adjacent usage. Notably, smaller/younger projects (NanoClaw, NullClaw) are consolidating, while mid-tier projects (NanoBot, CoPaw) are seeing surges in first-time contributors, indicating a healthy pipeline of community engagement.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score | Notes |
|---------|-------------|-----------|----------------|--------------|-------|
| **OpenClaw** | 500 updated | 500 updated | v2026.6.9-beta.1 | 🟡 **Stressed** | P0 regressions, memory leaks, high triage load |
| **ZeroClaw** | 50 active | 46 open / 4 merged | v0.8.1 (recent) | 🟡 **High velocity, bottlenecked** | Strong contributor count (45), but review backlog growing |
| **Hermes Agent** | 50 updated | 50 updated / 16 merged | v0.17.0 "Reach" | 🟡 **Post-release churn** | P1 regressions in new release, rapid patching |
| **IronClaw** | 5 updated | 30 updated / 12 merged | No release | 🟢 **Active development** | Deep Reborn architecture push, CI improvement focus |
| **CoPaw** | 11 updated | 17 updated / 6 merged | v1.1.12.post2 | 🟢 **Healthy growth** | 4 first-time contributors, same-day fix turnaround |
| **NanoBot** | 9 updated (6 closed) | 33 updated (19 merged) | v0.2.1 | 🟢 **Stable, moderate** | 66% issue closure rate, codex-sponsored features |
| **PicoClaw** | 4 open (0 closed) | 7 open (1 merged) | v0.3.0-nightly | 🟡 **Stable but backlogged** | Growing stale PR queue |
| **NanoClaw** | 0 updated | 5 open (0 merged) | Unknown | 🟠 **Consolidation phase** | No issue activity, PRs stalling |
| **LobsterAI** | 4 updated (3 closed) | 0 updated | v2026.6.18 | 🟢 **Low-velocity stable** | Clean bug queue, evaluating next feature direction |
| **NullClaw** | 2 open (0 closed) | 1 open (0 merged) | v2026.4.17 | 🟠 **Maintenance lull** | Android/Termux support gap, minimal maintainer activity |
| **TinyClaw** | 0 | 0 | Unknown | ⚪ **Inactive** | No activity in 24h |
| **Moltis** | 0 | 0 | Unknown | ⚪ **Inactive** | No activity in 24h |
| **ZeptoClaw** | 0 | 0 | Unknown | ⚪ **Inactive** | No activity in 24h |

**Health Score Key:** 🟢 Green (stable/active, no critical blockers) | 🟡 Yellow (active but with notable risks) | 🟠 Orange (low activity or stalled) | ⚪ Gray (inactive)

---

## 3. OpenClaw's Position

### Advantages vs. Peers

- **Largest raw community activity**: At 500+ issues and PRs updated in 24h, OpenClaw's community engagement dwarfs all peers by ~10x. This is both a strength (rapid bug discovery, diverse contributions) and a risk (maintainer burnout, triage quality degradation).
- **Mature release pipeline**: The beta release model (v2026.6.9-beta.1) demonstrates disciplined staging, whereas peers like Hermes Agent ship major releases with regressions (v0.17.0 context compression bug).
- **Telegram integration depth**: The richest message formatting support in the ecosystem (HTML, markdown, stickers, progress drafts). ZeroClaw struggles with Slack/Discord prebuilt binaries; Hermes Agent's Telegram channel is less mature.

### Technical Approach Differences

- **Architecture**: OpenClaw uses a **gateway + worker process model** with memory index synchronization. This is architecturally closer to ZeroClaw (Rust-based, process-per-agent) than to NanoBot (Python, single-process) or Hermes Agent (monolithic desktop app).
- **Memory model**: OpenClaw is the only major project with per-agent memory vault requests (#63829), whereas peers (NanoBot, ZeroClaw) have global/shared memory. This is a differentiation point for multi-agent deployments.
- **Session management**: OpenClaw's session-state migration issues (#91422) and compaction timeouts (#92043) suggest a more complex session model than NanoBot or CoPaw, which have simpler session architectures.

### Community Size Comparison

| Metric | OpenClaw | Hermes Agent | ZeroClaw | CoPaw | NanoBot |
|--------|----------|--------------|----------|-------|---------|
| 24h Issues Updated | ~500 | ~50 | ~50 | ~11 | ~9 |
| 24h PRs Updated | ~500 | ~50 | ~46 | ~17 | ~33 |
| Release Contributors | (not specified) | 245 (v0.17.0) | 45 (v0.8.1) | (several first-time) | (codex-sponsored) |
| Latest Release | v2026.6.9-beta.1 | v0.17.0 | v0.8.1 | v1.1.12.post2 | v0.2.1 |

OpenClaw's raw activity volume is **10x larger** than the next busiest project (Hermes Agent), but issue resolution quality may suffer. Hermes Agent's 245 contributors per release indicates deeper community distribution.

---

## 4. Shared Technical Focus Areas

The following requirements are emerging **across multiple projects**, indicating ecosystem-wide needs:

| Need | Affected Projects | Specific Evidence |
|------|------------------|-------------------|
| **Memory/Index Stability** | OpenClaw (#91588, #92043), CoPaw (#4795, 37GB bloat), ZeroClaw (#5808, default budget exceeded 3.3x), NanoBot (#4373, delivery context preservation) | Memory leaks, compaction failures, and index growth are the #1 stability concern across the ecosystem |
| **Human-in-the-Loop / SuspendTurn** | NanoBot (PR #4411), ZeroClaw (#6067, reply-intent precheck), IronClaw (#5078, approval modal overflow) | Users want async approvals, multi-step workflows, and configurable human oversight |
| **Per-Model / Per-Agent Configuration** | OpenClaw (#63829, per-agent memory vaults), NanoBot (#4389, per-model contextWindowTokens), ZeroClaw (#6557, runtime model switching), CoPaw (#5267, model ordering) | Demand for fine-grained control over model selection, context limits, and memory isolation per agent |
| **Credential Security** | Hermes Agent (#4656, credential proxy daemon), IronClaw (#5087, OAuth token refresh), ZeroClaw (#7141, OIDC auth) | Production deployments require zero-knowledge credential management and enterprise auth |
| **Platform-Specific Support** | OpenClaw (#78640, Windows EPERM), NullClaw (#868, Android Termux build), ZeroClaw (#7911, Android Termux), PicoClaw (#2472, Windows paths) | Cross-platform reliability remains a gap; Windows and ARM/Android are underserved |
| **Cron/Heartbeat Reliability** | OpenClaw (#90378, broken migrations), NanoBot (#4410, unwanted heartbeat messages), ZeroClaw (#6037, concurrent cron launches), CoPaw (#5241, misfire_grace_seconds) | Scheduled task execution is fragile across the ecosystem; users need guaranteed delivery |
| **Channel Feature Parity** | OpenClaw (#93794, Telegram regression), ZeroClaw (#7787, Slack/Discord missing in binaries), CoPaw (#5320, image display regression v1.1.12), PicoClaw (#348, general attachments) | Every project has per-channel bugs; no project has full feature parity across all chat platforms |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | ZeroClaw | NanoBot | CoPaw | IronClaw |
|-----------|----------|--------------|----------|---------|-------|----------|
| **Primary Language** | Go (reference impl.) | TypeScript/Electron | Rust | Python | Python | Rust/TS |
| **Target User** | Developers, sysadmins | End-users, desktop users | Developers, self-hosters | Power users, developers | Chinese-speaking users, developers | Enterprise, production |
| **Deployment Model** | Gateway + workers | Desktop app (Electron) | CLI + daemon | CLI + plugins | Web + Tauri desktop | CLI + Reborn architecture |
| **Agent Architecture** | Multi-agent, process-isolated | Single-agent, session-based | Multi-agent, config-driven | Single-agent, plugin-extensible | Multi-agent, web UI | Multi-agent, pipeline-based |
| **Memory Model** | Global + per-agent request | Session/turn-based | Shared vector index | ChromaDB (index) | ChromaDB (index) | Reborn architecture (new) |
| **Channel Breadth** | Telegram, Matrix, Slack, Discord | Signal, Desktop, Web | Slack, Discord, Telegram | Telegram, Discord, Feishu, XMPP | Telegram, Feishu, Web | Slack, Telegram, Web (ingress) |
| **Key Differentiator** | Reference implementation, largest ecosystem | Desktop-first, consumer-friendly UX | Rust performance, production focus | Plugin ecosystem, codex sponsorship | Chinese market focus, fast bug fixes | Enterprise architecture, Reborn rewrite |
| **Current Risk** | Stability regressions overwhelming maintainers | Post-release regression churn | PR review bottleneck | Stream stall regression unresolved | Tauri packaging regression | Nightly CI broken 24 days |
| **Unique Strength** | Most mature Telegram integration | 245 contributors per release | 45 contributors, Rust safety | Strong plugin docs, codex backing | 4 first-time contributors in 24h | CI optimization, feature flags |

### Architectural Spectrum

- **Monolithic desktop apps**: Hermes Agent (Electron), CoPaw (Tauri + Web)
- **Gateway + worker process**: OpenClaw, ZeroClaw (Rust daemon), IronClaw (Reborn)
- **CLI + plugin**: NanoBot, PicoClaw (Go), NullClaw (Zig)
- **Inactive/lull**: TinyClaw, Moltis, ZeptoClaw, NanoClaw

---

## 6. Community Momentum & Maturity

### Activity Tiers

**Tier 1: High-Velocity (10+ PRs/day, actively releasing)**
- **OpenClaw** — 500 issues/PRs/day; stressed but dominant
- **ZeroClaw** — 50+ PRs/day; 45 contributors per release; growing review bottleneck
- **Hermes Agent** — 50+ items/day; 245 contributors per release; post-release regression cleanup
- **IronClaw** — 30 PRs/day; Reborn architecture push; high core-contributor depth

**Tier 2: Moderate Velocity (5-20 PRs/day, stable)**
- **CoPaw** — 17 PRs/day; healthy first-time contributor influx; same-day bug fix turnaround
- **NanoBot** — 33 PRs/day (mostly merged); 66% closure rate; stable but slow release cadence
- **PicoClaw** — 7 PRs/day; nightly builds; stale PR backlog growing

**Tier 3: Low Velocity / Inactive**
- **LobsterAI** — 0 PRs; 4 issues, mostly closed; evaluating roadmap pivot to "AI Collaborator"
- **NanoClaw** — 5 open PRs, 0 merged; consolidation phase; no issue activity
- **NullClaw** — 1 PR; Android/Termux focus; minimal maintainer presence
- **TinyClaw, Moltis, ZeptoClaw** — No activity; effectively dormant

### Rapidly Iterating vs. Stabilizing

| Phase | Projects | Signal |
|-------|----------|--------|
| **Rapidly Iterating** (adding features, architectural changes) | ZeroClaw (v0.8.x, Discord components), IronClaw (Reborn rewrite), Hermes Agent (v0.17.0 "Reach"), CoPaw (v1.1.x, mobile UX) | High PR-in-flight count; major features under review; recent major releases |
| **Stabilizing** (bug fixing, consolidating) | OpenClaw (v2026.6.x bugfixes), NanoBot (v0.2.x, cron fixes), PicoClaw (v0.3.0 nightly) | Focus on P0/P1 regression fixes; beta/nightly releases; lower feature velocity |
| **Low Activity** (maintenance only) | LobsterAI, NullClaw, NanoClaw | Few or no PRs; stale issues; no pipeline activity |

---

## 7. Trend Signals

### Industry Trends Extracted from Community Feedback

1. **Memory is the new bottleneck.** Across all active projects, memory/index stability is the #1 pain point (OpenClaw 15.5GB leak, CoPaw 37GB bloat, ZeroClaw 3.3x context overage). The ecosystem has not yet solved persistent, efficient context management. **Value for AI agent developers:** Invest in vector index compaction, tiered memory (hot/warm/cold), and predictable memory budgets.

2. **Human-in-the-loop is becoming table stakes.** Multiple projects (NanoBot's SuspendTurn, ZeroClaw's reply-intent precheck, IronClaw's approval modal) are building async human oversight into agent workflows. This suggests a shift from "auto-pilot" agents to "co-pilot" agents with approval gates. **Value for AI agent developers:** Design agent workflows with explicit pause/resume points; build permission-aware execution layers.

3. **Channel fragmentation remains unsolved.** Every project has per-channel bugs (OpenClaw Telegram, ZeroClaw Slack/Discord, CoPaw Feishu, NanoBot Discord). No project has achieved channel abstraction that works reliably across all platforms. **Value for AI agent developers:** Abstract channel protocol as a cross-cutting concern; test each channel as a first-class integration; resist the temptation to write a single adapter.

4. **The Chrome Extension / OpenClaw plugin dichotomy.** OpenClaw enables full-functionality OS-level agents, while the ecosystem is pushing toward sandboxed plugin ecosystems (NanoBot's plugin flags, Hermes Agent's credential daemon, CoPaw's bubblewrap sandbox). **Value for AI agent developers:** Balance capability against security; offer graduated permission models (read-only, sandboxed, native).

5. **Enterprise deployment patterns are emerging.** OIDC auth (ZeroClaw), credential proxies (Hermes Agent), feature flags (IronClaw), and multi-database backends (ZeroClaw PR #6893) indicate serious production deployment thinking. **Value for AI agent developers:** Build for enterprise from day one—RBAC, audit logging, environment staging, and configuration-as-code.

6. **Chinese market is driving significant development.** CoPaw (netease-youdao), PicoClaw (sipeed), and issues in Chinese (NullClaw's Feishu, PicoClaw's "amnesia" bug) show strong demand from Chinese-speaking users. Localization (Hermes Agent, PR #38846) is becoming a differentiator. **Value for AI agent developers:** Internationalize early; support WeChat/Feishu/DingTalk as first-class channels.

7. **The cost optimization problem is unsolved.** Multiple projects report model cost overruns (ZeroClaw default budget exceeded 3.3x, NanoBot unused fallback model costs, Hermes Agent background review cost optimization). **Value for AI agent developers:** Implement token budgeting, per-model cost tracking, and automatic model downgrade for non-critical tasks.

---

*Report generated from community digest data for 2026-06-20. All metrics are based on GitHub activity within the last 24 hours unless otherwise noted.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest
**Date:** 2026-06-20  
**Repository:** [github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. Today's Overview

NanoBot shows **moderate activity** today with 9 issues updated and 33 PRs updated in the last 24 hours. The project maintains a healthy **66% closure rate** on issues (6 closed of 9) and **58% merge/closure rate** on PRs (19 merged/closed of 33). No new releases were published. The development focus is clearly on **core agent infrastructure improvements**, with several codex-sponsored PRs addressing subagent spawning, cron job model presets, and memory consolidation fixes. Community contributions remain strong, particularly around channel integrations (Discord, Feishu, XMPP) and bug fixes from external contributors.

---

## 2. Releases

**No new releases today.** The latest version remains v0.2.1. Notable: Issue #4013 reports a stream stall regression introduced between v0.1.5post2 and v0.2.0, suggesting users should test upgrades carefully.

---

## 3. Project Progress

**19 PRs merged/closed today**, including:

### Core Agent & Memory
- **[PR #4373](https://github.com/HKUDS/nanobot/pull/4373)** — `fix(memory): preserve delivery context during consolidation` — Critical fix ensuring proactive channel delivery messages aren't lost during memory consolidation replay windows.
- **[PR #4246](https://github.com/HKUDS/nanobot/pull/4246)** — `fix(session): delete_session also removes legacy path files` — Fixes a history revival bug where `delete_session()` only removed workspace files but not legacy `~/.nanobot/sessions/` files.

### Provider & Model
- **[PR #4394](https://github.com/HKUDS/nanobot/pull/4394)** — `fix: support OpenAI image reference edits` — Routes image edit requests to correct OpenAI API endpoints with multipart upload support.
- **[PR #4230](https://github.com/HKUDS/nanobot/pull/4230)** — `fix: set httpx timeout for streamableHttp transport` — Prevents indefinite hangs on MCP streamable HTTP connections.

### Channel & Integration
- **[PR #4342](https://github.com/HKUDS/nanobot/pull/4342)** — `fix(feishu): support reading WebSocket rendered card content` — Fixes placeholder rendering for Feishu cards arriving via WebSocket.
- **[PR #2655](https://github.com/HKUDS/nanobot/pull/2655)** — `feat(discord): overhaul — discord.py 2.x, slash commands, UI components` — Complete Discord channel rewrite with modern API support.
- **[PR #4138](https://github.com/HKUDS/nanobot/pull/4138)** — `feat: add tools.file.enable to toggle built-in filesystem tools` — Adds enable/disable flag for filesystem tools, following existing pattern for exec/web tools.

### Non-merged but active
- **[PR #4411](https://github.com/HKUDS/nanobot/pull/4411)** (open) — `feat(agent): add SuspendTurn` — New sentinel for pausing turns for async/human-in-the-loop continuations.
- **[PR #4414](https://github.com/HKUDS/nanobot/pull/4414)** (open) — `feat(subagent): add aggregated result mode` — Buffered result delivery mode for subagent tasks.
- **[PR #4416](https://github.com/HKUDS/nanobot/pull/4416)** (open) — `feat(cron): support job model presets` — Per-cron-job model overrides.

---

## 4. Community Hot Topics

### Most Active Issues

1. **Issue #4013** — [Error calling LLM: stream stalled for more than 90 seconds](https://github.com/HKUDS/nanobot/issues/4013) [CLOSED]  
   **5 comments, created May 26** — User reports regression after upgrading from v0.1.5post2 to v0.2.0. Hardcoded timeout issue making the agent practically unusable. **Underlying need:** Better timeout configuration or model-specific timeout settings.

2. **Issue #4374** — [SOUL.md/USER.md read/write asymmetry in project workspaces](https://github.com/HKUDS/nanobot/issues/4374) [CLOSED]  
   **3 comments** — Bootstrap files are read from project root but written to default workspace. **Underlying need:** Consistent workspace isolation for project-level agent identity files.

3. **Issue #4389** — [Per-model contextWindowTokens for fallback models](https://github.com/HKUDS/nanobot/issues/4389) [CLOSED]  
   **2 comments** — Global `contextWindowTokens` doesn't account for different model capabilities in fallback chains. **Underlying need:** Better automatic prompt trimming when falling back to smaller-context models.

### Most Active PRs (by recency)
- **PR #4411** — `SuspendTurn` (open, new) — Early interest in human-in-the-loop capabilities.
- **PR #4418** — `Heartbeat tasks should deliver results to correct channel` (open) — Workflow integration concern.

---

## 5. Bugs & Stability

### High Severity
- **[Issue #4410](https://github.com/HKUDS/nanobot/issues/4410)** (open) — **"Even ask LLM don't send message, it still send message after upgrade from v0.15"** — Regression in heartbeat cron job behavior causing unwanted messages despite explicit instructions. Points to `agent/loop.py` lines 1008-1009. User reports this is a **new behavior** after upgrade.  
  **Fix in progress:** [PR #4412](https://github.com/HKUDS/nanobot/pull/4412) directly addresses this by restoring the `evaluate_response` gate for cron-bound jobs.

- **[Issue #4013](https://github.com/HKUDS/nanobot/issues/4013)** (closed) — **Stream stall timeout after v0.2.0** — Hardcoded 90-second timeout makes agent unusable for real work. User must constantly prompt "keep going." This was marked closed, but the underlying timeout configurability remains unresolved.

### Medium Severity
- **[Issue #4287](https://github.com/HKUDS/nanobot/issues/4287)** (closed) — **Empty model responses not triggering fallback** — DeepSeek empty responses classified as "non-fallbackable" by the detection logic. Was closed, but the classification logic fix should be verified.

- **[Issue #4345](https://github.com/HKUDS/nanobot/issues/4345)** (closed) — **Image-strip fallback leaks file path** — When stripping image blocks fails, the model acts as if it saw an image and exposes internal file paths. Fix appears to have been merged.

### Low Severity
- **[Issue #4052](https://github.com/HKUDS/nanobot/issues/4052)** (closed) — **MCP notifications/progress rejected** — Pydantic validation errors for `notifications/progress` messages. Closed, likely patched.

---

## 6. Feature Requests & Roadmap Signals

### Likely for Next Release (v0.2.2)

1. **SuspendTurn for Human-in-the-Loop** ([PR #4411](https://github.com/HKUDS/nanobot/pull/4411)) — Tool-returnable sentinel to pause turns. Directly enables async approvals and complex multi-step workflows. Likely to merge due to codex sponsorship.

2. **Subagent Result Modes** ([PR #4414](https://github.com/HKUDS/nanobot/pull/4414)) — `aggregated` mode for buffering subagent results. Addresses performance concerns with `realtime` mode.

3. **Cron Job Model Presets** ([PR #4416](https://github.com/HKUDS/nanobot/pull/4416)) — Per-cron-job model/context-window overrides. Fixes Issue #4378. Clear demand from scheduled task users.

4. **Subagent Spawn Model Override** ([PR #4415](https://github.com/HKUDS/nanobot/pull/4415)) — Pass specific models when spawning subagents. Complements the model presets feature.

### Community-Requested Features

- **Telegram Rich Messages** ([Issue #4413](https://github.com/HKUDS/nanobot/issues/4413)) — Support for Telegram Bot API 10.1 rich message format. Markdown-to-Telegram format converter needed.
- **Heartbeat Channel Routing** ([Issue #4418](https://github.com/HKUDS/nanobot/issues/4418)) — Tasks should output to originating channel, not most recent active channel.
- **XMPP Support** ([PR #1945](https://github.com/HKUDS/nanobot/pull/1945)) — Still open since March 12, offering self-hosted messaging integration.
- **Inline TUI** ([PR #4329](https://github.com/HKUDS/nanobot/pull/4329)) — Terminal UI for CLI users, with retro/classic fallback.
- **Onboard Wizard** ([PR #4395](https://github.com/HKUDS/nanobot/pull/4395)) — Guided setup flow for new users with JetBrains-inspired palette.

### Roadmap Prediction
The next release appears to focus on **agent workflow improvements** (SuspendTurn, subagent result modes) and **configuration flexibility** (cron model presets, tool enable flags). The `codex` sponsorship on multiple PRs (#4414, #4415, #4416, #4417) suggests these are prioritized internally.

---

## 7. User Feedback Summary

### Pain Points
- **Upgrade regressions:** Multiple users report issues after upgrading from v0.1.5/v0.15 to v0.2.x — stream stalls (#4013) and unwanted heartbeat messages (#4410). Suggests insufficient regression testing for the v0.2.0 release.
- **Fallback model inadequacy:** DeepSeek empty responses (#4287) and per-model context window limits (#4389) reveal gaps in the fallback model architecture.
- **Workspace isolation:** SOUL.md/USER.md read/write asymmetry (#4374) shows workspace feature needs more consistent implementation.

### Satisfaction Signals
- Users acknowledge improvements: "*ive been using 0.1.5post2, its been very good (way to say ty)*" (#4013).
- Active community contributing fixes: 19 PRs merged today, including contributions from 8+ different external contributors.
- Telegram runtime users actively testing and reporting edge cases.

### Emerging Use Cases
- **Scheduled operations** via heartbeat/cron with delivery routing expectations.
- **Multi-channel workflows** with project workspaces.
- **Human-in-the-loop** patterns emerging from the community.

---

## 8. Backlog Watch

### Critical attention needed

1. **[PR #1945](https://github.com/HKUDS/nanobot/pull/1945) — XMPP channel** (since March 12, 2026, **100 days open**)  
   Author states "no guarantees other than 'it works for me.'" Needs maintainer review for merge, feedback, or closure. Core channel module additions typically require architectural review.

2. **[PR #3591](https://github.com/HKUDS/nanobot/pull/3591) — Dream update scope controls** (since May 2, 2026)  
   Lets users disable Dream or restrict to memory/context updates. Important for users experiencing skill drift from automatic consolidation.

3. **[PR #3590](https://github.com/HKUDS/nanobot/pull/3590) — Heartbeat manual trigger** (since May 2, 2026)  
   On-demand heartbeat for dry-running Phase 1 decisions. Directly complements the heartbeat routing issue (#4418).

4. **[PR #3662](https://github.com/HKUDS/nanobot/pull/3662) — Avoid network loads during token estimation** (since May 6, 2026)  
   Network-dependent `tiktoken` encoding calls can fail on offline hosts. Important for edge/air-gapped deployments.

### Investigation needed
- **Issue #4013** was closed but the underlying hardcoded timeout is not addressed — the fix may be incomplete.
- **Issue #4287** was closed but the "non-fallbackable" classification logic may need re-audit for other edge cases.

---

*Digest generated from GitHub data for NanoBot (github.com/HKUDS/nanobot) as of 2026-06-20 UTC.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — June 20, 2026

## Today's Overview

Hermes Agent remains in an intense development cycle following the v0.17.0 "Reach Release" on June 19, which brought ~1,475 commits and contributions from 245 community members. Activity is very high: 50 issues and 50 PRs were updated in the last 24 hours, with 16 PRs merged/closed and 10 issues resolved. However, the project is also dealing with significant stability fallout — multiple P1 and P2 bugs are being reported and rapidly patched, particularly around the gateway restart loop, context compression regressions, and MCP tool discovery in TUI mode. The community is highly engaged, with feature discussions on i18n, credential security, and web tool expansion continuing alongside urgent bug fixes.

## Releases

**v0.17.0 (v2026.6.19) — "The Reach Release"** was released yesterday.

- **Scope:** 1,475 commits, ~800 merged PRs, 1,693 files changed, 235,390 insertions, 50,730 deletions, 300+ issues closed, 245 community contributors.
- **No breaking changes or migration notes were explicitly documented in the release.**

## Project Progress

**16 PRs merged/closed in the last 24 hours.** Key fixes and features advanced:

- **[Critical] fix(gateway): prevent infinite restart loop on session resume** ([PR #49243](https://github.com/NousResearch/hermes-agent/pull/49243)) — P1 fix for gateway boot-loop on session resume, merged by JoaoMarcos44.
- **[Critical] fix(gateway): break the restart loop at the source on session resume** ([PR #49321](https://github.com/NousResearch/hermes-agent/pull/49321)) — Alternative fix tackling root cause: tool calls that restart the gateway no longer leave dangling unanswered calls.
- **Fix silent delivery failures in Signal live adapter** ([PR #49280](https://github.com/NousResearch/hermes-agent/pull/49280)) — Fixed P2 issue where Signal cron jobs reported success but messages never reached users.
- **fix(tools): never let a model whitelist strip prompt/source images** ([PR #49282](https://github.com/NousResearch/hermes-agent/pull/49282), [PR #49313](https://github.com/NousResearch/hermes-agent/pull/49313)) — Two overlapping fixes merged for FAL image payload builders.
- **fix(plugins): silence raft check_fn log spam** ([PR #49240](https://github.com/NousResearch/hermes-agent/pull/49240)) — Reduced WARNING log flooding every ~10 seconds for users without raft CLI.
- **fix(desktop): refresh profile rail after deletion** ([PR #49335](https://github.com/NousResearch/hermes-agent/pull/49335)) — UI fix for profile rail not updating after deletions.
- **feat(titles): language-aware session titles** ([PR #45296](https://github.com/NousResearch/hermes-agent/pull/45296)) — Merged feature inspired by Claude Code v2.1.176.
- **feat(desktop): notify renderer when GPU acceleration disabled via remote display** ([PR #49284](https://github.com/NousResearch/hermes-agent/pull/49284)) — Merged feature for remote desktop awareness.

## Community Hot Topics

- **[Issue #4656](https://github.com/NousResearch/hermes-agent/issues/4656) — Credential proxy daemon (11 comments, 1 👍)** : Request for zero-knowledge HTTP/HTTPS broker for agent credentials. The discussion highlights ongoing security concerns around credential exfiltration, building on recent PID namespace isolation work. This reflects deep community interest in production-grade credential management.

- **[Issue #39691](https://github.com/NousResearch/hermes-agent/issues/39691) — Feat: integrate headroom-ai for tool output compression (6 comments, 9 👍)** : Most-upvoted open issue. User proposes per-tool output compression using headroom-ai rather than current conversation-level summarization. Indicates community frustration with context window management and desire for smarter memory efficiency.

- **[Issue #38478](https://github.com/NousResearch/hermes-agent/issues/38478) — Camofox browser screenshots cropped (6 comments)** : Ongoing browser compatibility issue. Users are actively debugging viewport/resolution mismatches with the camofox provider.

- **[Issue #41625](https://github.com/NousResearch/hermes-agent/issues/41625) — MCP tools not exposed in TUI mode (5 comments, CLOSED)** : This has been a major pain point — resolved in v0.17.0? The related [Issue #47121](https://github.com/NousResearch/hermes-agent/issues/47121) was also closed, citing a timing race condition fix. However, multiple duplicate issues suggest the fix may not be complete across all configurations.

**Underlying needs:** The community is pushing for: (1) **security hardening** — credential storage and management remain top concerns; (2) **context/memory efficiency** — better compression and cost management; (3) **MCP tool reliability** — recurring timing and discovery issues; (4) **i18n and accessibility** — multiple locale PRs indicate a growing global user base.

## Bugs & Stability

**High severity (P1):**
- **[Issue #49260](https://github.com/NousResearch/hermes-agent/issues/49260) — Signal live adapter silent delivery failure** — CLOSED via [PR #49280](https://github.com/NousResearch/hermes-agent/pull/49280). Critical bug where all four daily cron briefs reported success but messages never reached users.
- **[Issue #49307](https://github.com/NousResearch/hermes-agent/issues/49307) — Context compression causes answer repetition + new instruction loss** — P1 regression in v0.17.0. User reports that context compression corrupts instruction following. No fix PR yet — **critical attention needed**.
- **[Issue #49332](https://github.com/NousResearch/hermes-agent/issues/49332) — delegate_task model override ignored** — P2 (new today). Subagents always use session default model, consuming unauthorized credits. No fix PR yet.

**Medium severity (P2):**
- **[Issue #49297](https://github.com/NousResearch/hermes-agent/issues/49297) — Gemma4 with Ollama still broken in v0.17.0** — User re-opened issue #39281 as v0.17.0 did not fix the "Response truncated" warnings. [PR #41694](https://github.com/NousResearch/hermes-agent/pull/41694) previously attempted fix but apparently incomplete.
- **[Issue #47868](https://github.com/NousResearch/hermes-agent/issues/47868) — Timestamp metadata leakage to chat completions payload** — Rejected by strict providers. Duplicate [Issue #48523](https://github.com/NousResearch/hermes-agent/issues/48523) adds more detail on session replay metadata stripping.
- **[Issue #47795](https://github.com/NousResearch/hermes-agent/issues/47795) — Desktop chat scroll bouncing after streaming** — Makes reading impossible. User reports regression.
- **[Issue #48991](https://github.com/NousResearch/hermes-agent/issues/48991) — auxiliary.vision provider=auto doesn't inherit base_url/api_key** — Breaks custom provider configurations.
- **[Issue #47500](https://github.com/NousResearch/hermes-agent/issues/47500) — Desktop app triggers custom protocol handlers** — Security/UX issue with bitbrowser:// protocol popups on Windows.
- **[Issue #49242](https://github.com/NousResearch/hermes-agent/issues/49242) — Windows: WhatsApp gateway should prefer Hermes-managed Node** — PATH resolution issue on Windows.

**Low severity (P3):**
- **[Issue #23802](https://github.com/NousResearch/hermes-agent/issues/23802) — Plugin CLI filters out entry-point-discovered plugins** — Open since May 11, affects plugin ecosystem.
- **[Issue #49075](https://github.com/NousResearch/hermes-agent/issues/49075) — skills_list/skill_view missing from IDEMPOTENT_TOOL_NAMES** — Tool-loop guardrail bypass.
- **[Issue #49326](https://github.com/NousResearch/hermes-agent/issues/49326) — Chinese punctuation triggers settings page** — i18n input handling bug in Desktop.

## Feature Requests & Roadmap Signals

**Most likely for next version:**
1. **Credential proxy daemon** ([Issue #4656](https://github.com/NousResearch/hermes-agent/issues/4656)) — Security-focused feature with high engagement. Expected in v0.18.0 given recent PID namespace work.
2. **Headroom-ai tool output compression** ([Issue #39691](https://github.com/NousResearch/hermes-agent/issues/39691)) — #1 most upvoted open issue. Addresses a clear pain point for heavy tool users.
3. **Self-hosted katana web tool** ([PR #49333](https://github.com/NousResearch/hermes-agent/pull/49333)) — New PR today for API-key-free web extraction. Aligns with community desire for self-hosted options.
4. **Multilingual i18n** ([PR #38846](https://github.com/NousResearch/hermes-agent/pull/38846)) — Large PR (15 languages, 861 keys) has been in progress since June 4. High community interest with multiple locale PRs being submitted.
5. **Ordered failover chains for web backends** ([Issue #32159](https://github.com/NousResearch/hermes-agent/issues/32159)) — Operational reliability request for production deployments.

**Longer-term signals:**
- **Send-gate configuration** ([PR #49331](https://github.com/NousResearch/hermes-agent/pull/49331)) — Structural message disable for security-conscious deployments.
- **Zulip platform adapter** ([Issue #49229](https://github.com/NousResearch/hermes-agent/issues/49229)) — Organization communication channel integration.
- **Background review cost optimization** ([PR #49252](https://github.com/NousResearch/hermes-agent/pull/49252)) — Self-improvement cost reduction, important for heavy users.

## User Feedback Summary

**Pain points (negative sentiment):**
- **v0.17.0 regressions causing frustration.** Multiple users report features that were working (Gemma4/Ollama, MCP tools, context compression) are now broken or degraded. The re-opened issue #49297 explicitly expresses frustration that maintainers may not see closed issues.
- **"Reading is impossible"** on Desktop ([Issue #47795](https://github.com/NousResearch/hermes-agent/issues/47795)) — The chat scroll jumping bug is making the primary UI unusable for at least one user.
- **i18n input issues** — Chinese users cannot type basic punctuation without triggering settings ([Issue #49326](https://github.com/NousResearch/hermes-agent/issues/49326)). This is a fundamental accessibility barrier.
- **Credential management concerns** — The credential proxy feature request ([Issue #4656](https://github.com/NousResearch/hermes-agent/issues/4656)) reflects deep anxiety about credential exfiltration, especially in multi-tenant setups.

**Positive signals:**
- **Strong community contribution velocity** — 245 unique contributors for v0.17.0, with 50 PRs updated in 24h.
- **Rapid fix turnaround** — Gateway restart loop (P1) had fix PRs merged within 24 hours of issue creation.
- **Growing international user base** — Multiple locale PRs (French, Chinese, i18n framework) suggest expanding global adoption.
- **Production deployment interest** — Features like web backend failover, structural send-gates, and credential daemon indicate serious enterprise use cases.

## Backlog Watch

**Long-unanswered important issues needing maintainer attention:**

- **[Issue #23802](https://github.com/NousResearch/hermes-agent/issues/23802) — Plugin CLI filters out entry-point-discovered plugins** — Open since May 11, 2026 (40 days). This affects the entire plugin ecosystem's usability. A core CLI functionality bug left unaddressed despite ongoing plugin development.

- **[Issue #25106](https://github.com/NousResearch/hermes-agent/issues/25106) — CLI --global model switch does not persist model.base_url and model.api_mode** — Open since May 13 (38 days). Basic model configuration persistence, could confuse new users trying to configure custom providers.

- **[Issue #32159](https://github.com/NousResearch/hermes-agent/issues/32159) — Support ordered failover chains for web search/extract backends** — Open since May 25 (26 days). Operational reliability request with no maintainer response. Valuable for production deployments.

- **[Issue #33327](https://github.com/NousResearch/hermes-agent/issues/33327) — BlueBubbles webhook conflicts** — Open since May 27 (24 days). User provided local fix branch but no official maintainer engagement.

- **[PR #2830](https://github.com/NousResearch/hermes-agent/pull/2830) — CI: expand supply chain audit beyond base64** — Open since March 24 (88 days). Security-relevant PR expanding obfuscation detection from 7 to 20 checks. No movement in 88 days despite the project's security focus.

- **[Issue #46199](https://github.com/NousResearch/hermes-agent/issues/46199) — Windows portable/isolated deployment guidance** — Open since June 14 (6 days). Documentation request for security-conscious Windows users. No maintainer response.

**Maintainer attention needed:**
The context compression regression ([Issue #49307](https://github.com/NousResearch/hermes-agent/issues/49307)) is a **P1 bug in the just-released v0.17.0** that currently has no fix PR. Given it affects core functionality (instruction following after compression), this should be the highest priority item in the backlog. The Gemma4/Ollama recurring issue ([Issue #49297](https://github.com/NousResearch/hermes-agent/issues/49297)) was explicitly re-opened because the user feels ignored — attention needed to maintain community trust.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-20

## Today's Overview
PicoClaw saw moderate activity over the past 24 hours with **4 open issues** (none closed) and **7 pull requests** (6 open, 1 merged). A **new nightly build (v0.3.0-nightly.20260619)** was released, indicating ongoing development momentum toward the next minor version. While no critical regressions surfaced today, several long-standing bugs and feature requests remain open, signaling areas where maintainer attention is concentrated. Overall project health is stable but with a growing backlog of stale PRs that may require triage.

## Releases
- **[nightly: Nightly Build v0.3.0-nightly.20260619.287853ab](https://github.com/sipeed/picoclaw/releases/tag/nightly)** – Automated build, may be unstable. Compare changes: [v0.3.0...main](https://github.com/sipeed/picoclaw/compare/v0.3.0...main). No migration notes provided.

## Project Progress
One PR was **merged/closed** today:

- **[#2956 [CLOSED] fix: preserve channel enabled state when merging security.yml](https://github.com/sipeed/picoclaw/pull/2956)** – Fix: Previously, channels configured as `enabled: true` in `config.json` could be silently disabled after loading `.security.yml`. The merge process overwrote the enabled state when credentials were added. This fix ensures the enabled state is preserved during merge, resolving a subtle configuration regression.

## Community Hot Topics
- **[#3150 [BUG] "它给自己整失忆了" (It gave itself amnesia)](https://github.com/sipeed/picoclaw/issues/3150)** – New (June 19), 2 comments, 0 reactions. Title in Chinese suggests an agent forgetting context or state. Minimal description; likely a memory loss or session persistence bug. Needs maintainer to clarify.
- **[#2472 [BUG] list_dir returns "invalid argument" on Windows](https://github.com/sipeed/picoclaw/issues/2472)** – 6 comments, 1 👍. Open since April, affects Windows path handling. Community engagement suggests real-world friction for Windows-based deployments.
- **[#348 [Feature] General Attachment Support](https://github.com/sipeed/picoclaw/issues/348)** – Roadmap-level request (high priority) with 4 comments. Demands processing of files, documents, and media across Telegram, Discord, etc. High conceptual impact but no implementation PR yet.
- **[#3114 [Future Request] Telegram permission grading by chat type](https://github.com/sipeed/picoclaw/issues/3114)** – 1 comment, 1 👍. Requests security boundaries for private/group/channel chats in Telegram, particularly restricting dangerous operations (shell, file write) in group contexts.

## Bugs & Stability
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Medium** | [#3150](https://github.com/sipeed/picoclaw/issues/3150) | "Amnesia" – agent forgets context/state. Minimal details, likely memory-related. | No |
| **Medium** | [#2472](https://github.com/sipeed/picoclaw/issues/2472) | `list_dir` fails on Windows due to backslash/path separator mismatch. Stale since April. | No |
| **Low-Medium** | [#3091 (PR)](https://github.com/sipeed/picoclaw/pull/3091) | Open PR fixing unchecked type assertion in `native_search` causing silent disable. Unmerged. | PR exists but unmerged |
| **Low-Medium** | [#3053 (PR)](https://github.com/sipeed/picoclaw/pull/3053) | Open PR fixing panic in `lockStoreFile` from unchecked type assertion. Unmerged. | PR exists but unmerged |
| **Low** | [#3143 (PR)](https://github.com/sipeed/picoclaw/pull/3143) | Open PR fixing SSRF bypass via ISATAP IPv6 literals (web_fetch). Unmerged. | PR exists but unmerged |

## Feature Requests & Roadmap Signals
- **General Attachment Support** ([#348](https://github.com/sipeed/picoclaw/issues/348)) – High-priority roadmap feature. Likely to land in v0.4.x or a future release, given the number of supported IM channels (Telegram, Discord) and user demand.
- **Agent Collaboration Bus** ([PR #2937](https://github.com/sipeed/picoclaw/pull/2937)) – Stale but ambitious PR introducing per-agent mailboxes, collaboration threads, and permission-aware messaging. Could foreshadow multi-agent orchestration in a future version.
- **Telegram Permission Grading** ([#3114](https://github.com/sipeed/picoclaw/issues/3114)) – User-driven security request. Likely to be considered for next minor release if maintainers prioritize channel-level safety.

## User Feedback Summary
- **Windows users** continue to experience path separator bugs (see [#2472](https://github.com/sipeed/picoclaw/issues/2472)) – pain point for cross-platform deployments.
- **Configuration surprises**: The now-fixed [#2956](https://github.com/sipeed/picoclaw/pull/2956) shows that channel disablement after security.yml merge was an unwelcome surprise for users.
- **Chinese-language users** reporting memory loss ([#3150](https://github.com/sipeed/picoclaw/issues/3150)) – suggests a non-trivial context retention bug affecting usability as an AI assistant.
- **Security-conscious users** request granular Telegram chat-type permissions ([#3114](https://github.com/sipeed/picoclaw/issues/3114)), indicating growing real-world deployment in group settings.

## Backlog Watch
**Issues/PRs needing maintainer attention**:

- **[#2472](https://github.com/sipeed/picoclaw/issues/2472)** – Windows `list_dir` bug (open since April 10, stale). Fix would improve cross-platform reliability.
- **[#3091](https://github.com/sipeed/picoclaw/pull/3091)** – Native search type assertion fix (open since June 10, stale). Code correctness issue, low-risk merge.
- **[#3053](https://github.com/sipeed/picoclaw/pull/3053)** – `lockStoreFile` panic fix (open since June 8, stale). Potential crash vector, recommended for merge.
- **[#3048](https://github.com/sipeed/picoclaw/pull/3048)** – `mcp add` flag parsing fix (open since June 7, stale). CLI usability issue, low risk.
- **[#2937](https://github.com/sipeed/picoclaw/pull/2937)** – Agent collaboration bus (open since May 24, stale). Large feature; needs architectural review or rejection.
- **[#3114](https://github.com/sipeed/picoclaw/issues/3114)** – Telegram permission grading (open since June 12, 1 comment). Explicit feature request with security implications.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-20

## Today's Overview
NanoClaw shows moderate activity today with 5 open pull requests updated in the last 24 hours but no new releases or issue updates. The project remains in a consolidation phase, with several meaningful code improvements progressing through review rather than being merged. No issues were filed or closed today, suggesting either low user engagement or a stable codebase with no critical bugs reported. The pull request pipeline includes two bug fixes, a significant platform extension (Apple Container runtime), and two integration/security additions.

## Releases
No new releases were published in the last 24 hours. The latest release remains unknown from this data set.

## Project Progress
No pull requests were merged or closed today. All 5 updated PRs remain open. Notable features advancing toward merge include:

- **#2809** [feat(apple-container): Apple Container runtime + remote OneCLI gateway](https://github.com/nanocoai/nanoclaw/pull/2809) — Adds macOS Container runtime support, extending NanoClaw's deployment options.
- **#2605** [feat: inherit parent agent permissions via OneCLI](https://github.com/nanocoai/nanoclaw/pull/2605) — Permissions inheritance feature for agent hierarchies.

## Community Hot Topics
No issues received comments or reactions today. Among pull requests, none have accumulated reactions yet. The most notable activity is on:

- **PR #2605** ([link](https://github.com/nanocoai/nanoclaw/pull/2605)) — Open for 27 days, this permissions inheritance feature has generated moderate ongoing discussion, reflecting community interest in fine-grained agent access control.
- **PR #2820** ([link](https://github.com/nanocoai/nanoclaw/pull/2820)) — The approvals delivery tracking fix addresses a data persistence issue likely affecting users relying on approval workflows.

The PRs indicate underlying needs for better platform integration (Discord chunking), data integrity (approvals), and deployment flexibility (Apple Container).

## Bugs & Stability
Two bug-fix PRs are open, neither merged:

- **Medium severity — PR #2820** ([link](https://github.com/nanocoai/nanoclaw/pull/2820)): Fixes `approvals list` and approval data showing NULL values for `channel_type`, `platform_id`, and `platform_message_id`. This affects all users of the approval system.
- **Medium severity — PR #2812** ([link](https://github.com/nanocoai/nanoclaw/pull/2812)): Discord adapter truncates long replies instead of chunking them across multiple messages, causing message loss for users with long AI responses.

No crashes or regressions were reported today.

## Feature Requests & Roadmap Signals
No new feature requests were filed today. Based on open PRs, the following features appear likely for the next release:

- Apple Container runtime support (PR #2809) — Major platform expansion for macOS users
- Parent agent permission inheritance (PR #2605) — Enterprise-grade agent management
- Discord message chunking (PR #2812) — Quality-of-life improvement for Discord users

The Apple Container runtime is the most significant feature signal, suggesting the team is investing in desktop-first deployment scenarios.

## User Feedback Summary
No direct user feedback was captured in today's data. The absence of new issues or comments suggests users are either satisfied with current functionality or not actively reporting. The presence of bug-fix PRs without corresponding issue reports may indicate these were discovered internally or in pre-release testing.

## Backlog Watch
The following long-open PR requires attention:

- **PR #2605** ([link](https://github.com/nanocoai/nanoclaw/pull/2605)) — "feat: inherit parent agent permissions via OneCLI" has been open since May 24, 2026 (27 days). This feature likely has high community interest for multi-agent setups and has followed the contributing guidelines. Without issue activity, it's unclear if maintainer review is blocked or simply queued.

No unanswered issues or stalled PRs from users were identified.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the **NullClaw Project Digest** for **2026-06-20**.

---

## NullClaw Project Digest – 2026-06-20

### 1. Today's Overview
The project is in a **low-activity maintenance phase**. In the last 24 hours, no new releases were published, and no issues or pull requests were closed. Activity is concentrated on a single open pull request (#966) addressing a critical Android/Termux bug, while two open issues remain unresolved. The lack of merged changes suggests maintainer bandwidth is currently limited, but the targeted nature of incoming contributions indicates a specific focus on improving platform compatibility.

### 2. Releases
**No new releases** were published in the last 24 hours. The most recent tagged version remains **v2026.4.17**.

### 3. Project Progress
- **No pull requests were merged or closed** in the last 24 hours.
- **New Actionable PR:** [PR #966](https://github.com/nullclaw/nullclaw/pull/966) (open) proposes routing `std.http.Client` through `curl` on `aarch64-linux-android` (Termux) to solve standard library DNS failures. This is the only PR currently in flight.

### 4. Community Hot Topics
- **#484 – 飞书无法联网查询 (Feishu cannot connect to the internet):** [Issue #484](https://github.com/nullclaw/nullclaw/issues/484)
  - *Age:* ~3 months | *Comments:* 3 | *Reactions:* 0
  - *Analysis:* This is the longest-running open issue. The user is likely attempting to use NullClaw with the Lark/Feishu API but encountering network connectivity problems. The lack of maintainer response or a labeled fix indicates this may be a low-priority configuration issue or a platform-specific blocker.

- **#966 – [fix(http): route stdlib HTTP through curl on aarch64-linux-android]:** [PR #966](https://github.com/nullclaw/nullclaw/pull/966)
  - *Age:* 1 day | *Comments:* 0 | *Reactions:* 0
  - *Analysis:* This PR is the most significant current activity. It directly addresses the stalest "zero comment" bug (#868), indicating that community contributors are actively working on Termux/Android support.

### 5. Bugs & Stability
**Severity: Medium**
- **[OPEN] #868 – `zig build` fails on Android/Termux with `AccessDenied on linkat`:** [Issue #868](https://github.com/nullclaw/nullclaw/issues/868)
  - *Environment:* aarch64, Zig 0.16.0, NullClaw v2026.4.17
  - *Impact:* Blocks compilation on Android mobile devices.
  - *Status:* A targeted fix is proposed in **PR #966** (routing HTTP via curl). However, the core build failure (`linkat`) is a separate issue likely related to Zig’s linker on constrained Android filesystems; it is **not yet addressed** by the current PR.

**Note:** No new bugs were reported in the last 24 hours.

### 6. Feature Requests & Roadmap Signals
- **Active Request (Indirect): Android/Termux First-Class Support**
  - *Signal:* The combination of Issue #868 (build fail) and PR #966 (network fix) strongly indicates that users are trying to run NullClaw on Android. The next minor version (likely v2026.7.x) should aim to resolve the `linkat` build failure and merge the HTTP workaround to officially support Termux.

- **Stalled Request: Feishu/Lark Integration (Issue #484)**
  - No progress or maintainer comment in 3 months. If the project prioritizes enterprise IM support, this will need explicit debugging steps or a configuration guide.

### 7. User Feedback Summary
- **Pain Point (Android/CI):** Users on `aarch64-linux-android` cannot build the project or run HTTP requests. This is a blocker for developers wanting to test or use NullClaw on mobile devices or low-cost ARM servers.
- **Pain Point (Chinese Users):** At least one user (Issue #484) is unable to utilize Feishu/Lark, a critical platform in the Chinese market. The lack of response may be causing dissatisfaction among non-English-speaking users.
- **Satisfaction Signal:** The fact that a contributor (vernonstinebaker) created a PR within 24 hours of the issue being updated shows a healthy, responsive community even during slow maintainer activity.

### 8. Backlog Watch
- **Issue #484 – 飞书无法联网查询 (Feishu connectivity)** – *Last updated: 2026-06-19 (comment from user)*
  - *Link:* https://github.com/nullclaw/nullclaw/issues/484
  - *Verdict:* **Needs maintainer triage.** This issue has been untouched for months. Even a label (e.g., `needs-repro` or `question`) or a request for logs would improve community trust.

- **Issue #868 – Zig build fail on Android/Termux** – *Last updated: 2026-06-19*
  - *Link:* https://github.com/nullclaw/nullclaw/issues/868
  - *Verdict:* **High priority.** A partial fix (network layer) exists in PR #966, but the build failure itself remains unresolved and unlabeled. This is likely blocking a growing mobile user base.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-20

## 1. Today's Overview

IronClaw is in a period of very high development velocity, with **30 pull requests** updated in the last 24 hours and 18 still open—indicating a major push toward the "Reborn" architectural overhaul. The maintainer team is deeply engaged across product features, infrastructure, and quality assurance, while community issue activity remains moderate with 5 updated issues. **No new releases** were published today, suggesting the team is consolidating features before a Reborn launch. The overall project health is strong, with core contributors driving multiple stacked PRs and a notable influx of external contributors (at least 2 "contributor: new" tagged PRs).

## 2. Releases

**No new releases** in the last 24 hours. The most recent stable release predates this digest period.

## 3. Project Progress

**12 PRs were merged or closed** in the last 24 hours, reflecting significant feature advancement:

- **Projects feature complete**: `#5019` (5/5 stack) lit up the full Projects page with real WebChat v2 API wiring, CRUD, and membership functions. `#5064` addressed review comments on prior merged port slices.
- **QA infrastructure**: `#5095` added committed recorded LLM trace fixtures for connection, routine, and web-fetch scenarios. `#5096` ported seven project-setup automation benchmarks to the QA record/replay harness.
- **CI improvements**: `#5097` added Reborn QA guidance to agent rules. `#5090` extended mold linker to reborn-e2e and replay-gate Rust jobs. `#5092` completed a spike A/B comparing `sccache` vs `rust-cache` on a heavy Reborn build.
- **Developer experience**: `#5092` and `#5090` demonstrate ongoing CI optimization, reducing link times by an expected ~40% for some jobs.

**Notable open (in-progress) PRs** show the team is advancing toward OpenAI-compatible APIs, Telegram/Slack ingress, and concurrent execution—all likely targeted for a future Reborn release.

## 4. Community Hot Topics

**Most active issues** (by recency/reactions):

- **#1012** (👍1) — *Alibaba Coding Plan in openai_compatible mode*: A long-standing issue (since March 2026) where the Alibaba Coding Plan fails with HTTP 405 errors. Underlying need: broader model provider compatibility in the OpenAI-compatible endpoint, important for enterprise users in China/Asia. *Still no resolution or maintainer assignment.*

- **#5078** (closed) — *Approval modal difficult to review with large commands*: Resolved. A user-reported UX issue where long shell commands in approval dialogs obscured action details. The fix was merged, improving usability for heavy-shell workflows.

**Most active PRs**: The top PRs by size and scope are all core-contributor driven, meaning community engagement is primarily via issues rather than code contributions today. However, two "contributor: new" PRs (`#5100` by abbyshekit, `#5061` by krishna-505) signal growing external participation in the Reborn ecosystem.

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **High** | `#4108` (open) | **Nightly E2E tests failing** — CI workflow has been in a failure state since May 27. No comments from maintainers since creation. Critical blocker for release confidence. | No fix PR identified |
| **Medium** | `#5088` (open) | **Shell approval prompt mislabels read commands** — UI shows "reads" as an approval action for shell commands, which is misleading since it's not a real user-invoked command. Sub-issue of #4879. | No fix PR identified |
| **Low** | `#5078` (closed) | Approval modal overflow — fixed, merged. | ✅ Closed |

**Risk note**: The persistent E2E failure (`#4108`, 24 days without resolution) is a stability concern. The nightly CI pipeline has not produced a green run for nearly a month—this should be a priority for the core team.

## 6. Feature Requests & Roadmap Signals

**Active feature discussions today:**

- **#5091** (new, enhancement) — *Unified feature-flag system for Reborn*: A significant infrastructure request from core maintainer `ilblackdragon`. Proposes replacing ad-hoc env-var gating with a proper per-tenant/per-user targeting, gradual rollout, and A/B testing system. **Likely to appear in next Reborn version** as it addresses a known scaling limitation (currently flags are deployment-wide and read-once at startup).

- **#5087** (PR open) — *Proactive Google OAuth token refresh*: Addresses user frustration when OAuth credentials expire mid-session, requiring manual reconnection. Shows demand for better credential lifecycle management.

- **#5061** (PR open) — *Skill extraction & self-evolution*: A Hermes-style feature where the agent distills successful transcripts into reusable skills with safety scanning. This is a major AI capability enhancement—if merged, it significantly differentiates IronClaw from simpler AI assistants.

**Predicted next-version inclusions**: Unified feature flags (#5091), per-tool permission overrides (#5062), concurrent turn execution (#5085), and at least one of the Slack/Telegram ingress PRs (#5093/#5100) appear ready for a Reborn release.

## 7. User Feedback Summary

**Pain points voiced today:**
- **Large command UX** (#5078, now fixed): Users running complex shell commands through IronClaw found approval UI unmanageable—commands overflowed the modal, hiding action details and approval controls. This was a genuine usability blocker for power users.
- **Misleading approval language** (#5088): "Reads" appearing as an approval action for shell commands causes confusion. Users reasonably expect shell commands to show as "shell" or the actual command, not an opaque classification.
- **OAuth token expiration** (#5071, addressed by #5087): Users needing to manually reconnect Google credentials mid-workflow was reported as friction. The fix introduces proactive refresh before expiry.

**Positive signals**: The community is actively testing the Reborn preview locally, filing detailed UX feedback. The approval system improvements (#5062) and skill extraction (#5061) suggest users are pushing IronClaw toward more autonomous, production-grade operation.

## 8. Backlog Watch

**Critical unaddressed items:**

1. **#4108** (open since May 27, 24 days) — Nightly E2E test failure. **No maintainer response.** The only ongoing CI health check for the codebase is broken. This should be a top priority—if the nightly CI has been red for 24 days, regressions could be accumulating silently.

2. **#1012** (open since March 12, ~100 days) — Alibaba Coding Plan incompatibility with OpenAI-compatible endpoint. **No maintainer response.** Single user with no engagement from the team. While low reaction count (1 👍), the ask is reasonable (broader provider support) and the issue is very old.

3. **#4829** (PR open since June 12, 8 days) — CI workflow retirement and reorganization. This is actively being worked (last updated yesterday) but hasn't merged yet. If merged, it would consolidate Reborn testing into the nightly deep CI, potentially improving the situation around #4108.

**Recommendation**: The core team should prioritize:
1. Fixing the nightly E2E pipeline (#4108)
2. Responding to #1012 (even a "help wanted" or "won't fix" is better than silence)
3. Merging #4829 to improve CI coverage and consolidation

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is a structured project digest for **LobsterAI** on **2026-06-20**, based on the provided GitHub data.

---

## LobsterAI Project Digest – 2026-06-20

### 1. Today's Overview

LobsterAI shows a **stable maintenance phase** with low churn. A single new release shipped two days ago, and the issue tracker saw moderate activity (4 issues updated, 3 of which were closed). Notably, **zero Pull Requests were updated** in the last 24 hours, indicating a pause in active feature integration. The project closed three stale bugs while one new feature request (#2180) was opened, suggesting maintainers are clearing house before potentially tackling a larger scope feature. Overall, the project is healthy but currently in a **low-velocity window**.

### 2. Releases

- **[LobsterAI 2026.6.18](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.6.18)** (released 2026-06-18)
  - **What's Changed:**
    - **Artifact Sharing Upgrade (feat):** Now supports sharing for Word, PPT, Excel, PDF, Markdown, and Mermaid file types (PR #2159 by @liugang519).
    - **Voice Input Fix:** Kept only the real-time ASR (Automatic Speech Recognition) mode, removing a non-realtime fallback.
  - **Breaking Changes:** None noted.
  - **Migration Notes:** No migration steps required. Users may notice a change in voice-input behavior if they relied on the removed non-realtime ASR path.

### 3. Project Progress

No Pull Requests were merged, closed, or updated in the last 24 hours. The last significant feature advancement was the artifact-sharing upgrade seeded in the 2026.6.18 release.

### 4. Community Hot Topics

With zero recent PRs and only one open issue, community discussion is minimal. The only item of note is:

- **#2180 – Feature Request: Build "AI Collaborator" Form** ([link](https://github.com/netease-youdao/LobsterAI/issues/2180))  
  *Author: woxinsj* | Updated: 2026-06-19 | Comments: 0  
  This is a detailed proposal (attached as a `.md` file) to upgrade OpenClaw into an "AI Collaborator" platform, including a natural language command bar and cross-model orchestration.  
  **Analysis:** The proposal signals demand from "tech-savvy non-elite programmers" for a higher-level agent abstraction. This could indicate a **future roadmap pivot** toward multi-agent, project-level memory capabilities.

### 5. Bugs & Stability

**Bugs closed (stale, fixed):**
- **#1487 – Python script failure in sessions** ([link](https://github.com/netease-youdao/LobsterAI/issues/1487))  
  *Severity: Medium* | *Status: Closed*  
  User reported that Python skills work in Claude Code CLI but not in LobsterAI sessions. Likely an integration compatibility issue that was either fixed or rendered moot by the 2026.6.18 release.

- **#1471 – Draft loss on session/view switch** ([link](https://github.com/netease-youdao/LobsterAI/issues/1471))  
  *Severity: Medium* | *Status: Closed*  
  Debounce timer (300ms) was not flushed on component unmount, causing input loss. Fix was presumably merged.

- **#1472 – Overwrite without confirmation on "re-edit"** ([link](https://github.com/netease-youdao/LobsterAI/issues/1472))  
  *Severity: Low-Medium* | *Status: Closed*  
  Clicking "re-edit" on a historical message silently overwrote unsent input. No confirmation dialog existed.

**New bugs:**
- **None** opened today. The three closed bugs appear to be cleanup of stale/unfixed items.

### 6. Feature Requests & Roadmap Signals

- **#2180 – "AI Collaborator" platform proposal** ([link](https://github.com/netease-youdao/LobsterAI/issues/2180))  
  This is the only new FR. It is a significant, well-documented proposal for a cross-model orchestration layer with project-level memory.  
  **Prediction:** If the maintainers see alignment with their vision, this could become a focus for the next minor or major version (e.g., v2026.7.x / v1.x). The zero-PR activity suggests maintainers may be evaluating this proposal internally.

### 7. User Feedback Summary

- **Pain Point: Input robustness** – Multiple closed bugs (#1471, #1472) confirm that users experience **silent data loss** (drafts overwritten or not persisted) when switching contexts or editing history. This suggests a need for better UX guardrails in the Cowork interface.
- **Pain Point: Python skill compatibility** (#1487) – Users running local 30B models reported that scripts working in Claude Code CLI failed in LobsterAI, pointing to a gap in local model execution parity.
- **Satisfaction indicator:** The artifact sharing upgrade (Word, PPT, PDF) in v2026.6.18 directly addresses a common user request for richer file output, which should improve satisfaction.

### 8. Backlog Watch

- **#2180 – Open feature request** ([link](https://github.com/netease-youdao/LobsterAI/issues/2180))  
  Created yesterday with no maintainer response yet. Given the detailed proposal and zero PR activity, this is worth watching for signs of roadmap commitment.
- **Stale issues closed:** The closure of #1487, #1471, and #1472 (ages 76+ days) indicates the maintainers are cleaning house. No long-ignored critical issues remain open.

---

**Overall Health:** 🟢 Stable. Recent release adds value. Bug queue is clean. The project is in a lull but ready for the next focused push, likely around the "AI Collaborator" feature.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-20

## Today's Overview

The CoPaw project shows **very high activity** today with 17 PRs and 11 Issues updated in the last 24 hours — nearly twice the typical daily volume. The community is heavily engaged, with **11 open PRs** currently under review and **6 merged/closed** today alone. Notably, 4 first-time contributors have submitted significant fixes and features, indicating growing external participation. Activity is concentrated on **bug fixes for v1.1.12 regressions** (image display, UI freezing, Zhipu provider connectivity) and **UI/UX enhancements** for mobile users and multi-agent workflows. **No new releases** were published today.

## Releases

No new releases were published on 2026-06-20. The project remains on v1.1.12.post1/v1.1.12.post2 (referenced in recent Issue reports).

## Project Progress

### Merged/Closed PRs Today (6 items)

- **[#5332] fix(memory): add index maintenance and timeout protection for ChromaDB** — *lecheng2018 (first-time contributor)*
  - Directly addresses the **37GB vector index bloat** (Issue #4795). Adds `compact_index()`, `purge_index()`, `get_index_stats()`, auto-compact with configurable threshold (default: 1000 writes), and 30-second timeout for memory_search.
  - URL: https://github.com/agentscope-ai/QwenPaw/pull/5332

- **[#5242] fix(compaction): add timeout protection to agent.reply()** — *lecheng2018 (first-time contributor)*
  - Prevents process-wide freezes when LLM API calls hang during context compaction. Adds configurable timeout to `_compact_context()`.
  - URL: https://github.com/agentscope-ai/QwenPaw/pull/5242

- **[#5241] fix(cron): increase default misfire_grace_seconds from 60 to 3600** — *lecheng2018 (first-time contributor)*
  - Prevents APScheduler from silently skipping cron jobs when QwenPaw is busy with long-running agent tasks.
  - URL: https://github.com/agentscope-ai/QwenPaw/pull/5241

- **[#5179] fix(skills): expand multi-agent collaboration skill trigger keywords** — *nguyenthanhthe (first-time contributor)*
  - Adds "团队协作" trigger keywords so agents reliably recognize team collaboration mode requests on first attempt.
  - URL: https://github.com/agentscope-ai/QwenPaw/pull/5179

- **[#5338] fix(providers): use plain string content for check_model_connection (#5330)** — *nguyenthanhthe (first-time contributor)*
  - First fix attempt for Zhipu model connection tests; opened and closed as "Close-and-review-later" in favor of refined PR #5339.
  - URL: https://github.com/agentscope-ai/QwenPaw/pull/5338

- **[#5337] fix(providers): use plain string content for check_model_connection (#5330)** — *nguyenthanhthe (first-time contributor)*
  - Another variant submitted then closed in favor of #5339.
  - URL: https://github.com/agentscope-ai/QwenPaw/pull/5337

### Notable Open PRs Under Active Review

- **[#5321] feat(context): scroll context manager — durable history + recall REPL** — *niceIrene (first-time contributor)*
  - New retrieval-driven context management strategy (alternative to compression). Adds durable history and recall REPL.
  - URL: https://github.com/agentscope-ai/QwenPaw/pull/5321

- **[#5310] feat(sandbox): add bubblewrap Linux sandbox with mount namespace isolation** — *vanwaals (first-time contributor)*
  - Significant security feature for running agent skills with OS-level isolation.
  - URL: https://github.com/agentscope-ai/QwenPaw/pull/5310

## Community Hot Topics

### Most Active Discussions

1. **Vector index bloat to 37GB (Issue #4795, 3 comments)**
   - **Author:** liudao008 | **Opened:** 2026-05-29 (22 days old)
   - Root cause analysis produced: `link_lists` structure in ChromaDB grows unbounded. Fix PR #5332 merged today.
   - URL: https://github.com/agentscope-ai/QwenPaw/issues/4795

2. **Mobile sidebar agent switching (Issue #5329, 3 comments)**
   - **Author:** bob-geek11 | **Opened:** 2026-06-19
   - User requests collapsed sidebar button to switch agents on mobile. PR #5334 opened same day implementing exactly this feature.
   - URL: https://github.com/agentscope-ai/QwenPaw/issues/5329

3. **Agent freezing during DeepSeek thinking (Issue #5328, 2 comments)**
   - **Author:** bob-geek11 | **Opened:** 2026-06-19
   - Agent gets stuck in "thinking" phase requiring manual stop/continue. User has tried web, console, and Tauri — all affected.
   - URL: https://github.com/agentscope-ai/QwenPaw/issues/5328

4. **UI stuck after submitting instructions (Issue #5333, 1 comment)**
   - **Author:** bob-geek11 | **Opened:** 2026-06-19
   - Textbox remains active (showing submit button) after instruction, but agent is unresponsive. User suspects DeepSeek compatibility. Fix PR #5335 opened same day.
   - URL: https://github.com/agentscope-ai/QwenPaw/issues/5333

5. **Agent Office conversation feature (Issue #5327, 1 comment)**
   - **Author:** q1264703873 | **Opened:** 2026-06-19
   - Requests direct chat button and session switching on Agent Office cards. No PR yet, but aligns with PR #5321 (scroll context) and #5323 (todo progress panel).
   - URL: https://github.com/agentscope-ai/QwenPaw/issues/5327

**Active User:** bob-geek11 filed **4 Issues** today (#5328, #5329, #5333, and contributed to others), making them the most active reporter. Their reports span mobile Ux, deepseek compatibility, and general stability — a power user testing multiple surfaces (web, console, Tauri).

## Bugs & Stability

### Critical Severity

1. **[#5333] Agent UI stuck after submitting instructions** — *bob-geek11*
   - **Impact:** Agent appears non-responsive but textbox remains active, not showing stop button. User on Windows 11, v1.1.12.post1.
   - **Fix exists:** PR #5335 (nguyenthanhthe) catches all exceptions during SSE event stream to yield failure events.
   - URL: https://github.com/agentscope-ai/QwenPaw/issues/5333

2. **[#5328] Agent freezes during DeepSeek thinking** — *bob-geek11*
   - **Impact:** Agent stalls mid-thought across all interfaces (web, console, Tauri). User must manually stop and prompt "continue."
   - **Fix status:** No dedicated PR yet; may be related to SSE/streaming issue addressed in PR #5335.
   - URL: https://github.com/agentscope-ai/QwenPaw/issues/5328

### High Severity

3. **[#5320] send_file_to_user images not displayed after v1.1.12 upgrade** — *zjccjz869*
   - **Impact:** Images sent via `send_file_to_user` disappear from chat (shows "success" but no image), and previously visible images vanish. Feishu delivery still works.
   - **Root cause identified:** v1.1.12 switched from `Response+bytes` to `FileResponse` using `content_disposition_type="attachment"`, causing browsers to download instead of display.
   - **Fix exists:** PR #5324 (nguyenthanhthe) changes to inline content-disposition.
   - URL: https://github.com/agentscope-ai/QwenPaw/issues/5320

4. **[#4795] ChromaDB vector index grows to 37GB, crashes memory_search** — *liudao008*
   - **Impact:** Process crashes every ~30 minutes (~10+ crashes over 2 days). Deleting `file_store/` required.
   - **Fix merged:** PR #5332 adds index compaction, purging, and timeout protection.
   - URL: https://github.com/agentscope-ai/QwenPaw/issues/4795

### Medium Severity

5. **[#5330] Zhipu provider: all model connection tests fail despite successful provider test** — *hyper0x*
   - **Impact:** Configured Zhipu provider works at provider level but no models can be used. Users cannot utilize any Zhipu models.
   - **Root cause:** `check_model_connection` sends content as array `[{"type": "text", "text": "ping"}]` which Zhipu's non-multimodal endpoint doesn't support.
   - **Fix proposed:** PR #5339 (nguyenthanhthe) sends plain string instead.
   - URL: https://github.com/agentscope-ai/QwenPaw/issues/5330

6. **[#5317] Missing Python in Tauri after upgrade** — *HQ1363*
   - **Impact:** Python-dependent skills cannot execute. Previously Conda provided bundled Python.
   - **Fix status:** No PR yet; could be packaging/installer issue.
   - URL: https://github.com/agentscope-ai/QwenPaw/issues/5317

### Low Severity (Closed)

7. **[#5319] Console channel always shows "Answers have stopped"** — *gsm1258*
   - **Resolution:** Resolved by reinstalling/restarting. Likely transient state issue.
   - URL: https://github.com/agentscope-ai/QwenPaw/issues/5319

## Feature Requests & Roadmap Signals

### Strong Likelihood for Next Release

1. **Collapsed sidebar agent switching (Issue #5329)** — PR #5334 already submitted by lecheng2018 making the agent icon clickable with popover selector. Highly likely to ship soon given direct PR alignment.
   - URL: https://github.com/agentscope-ai/QwenPaw/issues/5329

2. **Custom model ordering within providers (Issue #5267)** — PR #5336 submitted same day by lecheng2018 with `sort_order` field and `reorder_models()` API. Very likely next release.
   - URL: https://github.com/agentscope-ai/QwenPaw/issues/5267

3. **Real-time SSE push notifications + voice beep (Issue #5322)** — PR #5331 (nguyenthanhthe) implements sub-50ms SSE push for console notifications, replacing polling latency. Includes Web Audio beep.
   - URL: https://github.com/agentscope-ai/QwenPaw/issues/5322

### Moderate Likelihood

4. **Agent Office conversation cards (Issue #5327)** — Direct chat button on agent cards. No PR yet, but aligns with parallel Ux work (#5323, #5321). Likely roadmap for v1.2.
   - URL: https://github.com/agentscope-ai/QwenPaw/issues/5327

5. **Todo_write progress panel for multi-step tasks (PR #5323)** — Native plan execution tracking in console. UI auto-opens panel when plan active.
   - URL: https://github.com/agentscope-ai/QwenPaw/pull/5323

6. **System tray minimize on close (PR #5326)** — Hides to tray instead of quit on window close. Simple quality-of-life improvement.
   - URL: https://github.com/agentscope-ai/QwenPaw/pull/5326

### Exploratory / Longer-Term

7. **Scroll context manager (PR #5321)** — Retrieval-driven context management replacing native compression. First-time contributor, net-new feature, needs evaluation.
   - URL: https://github.com/agentscope-ai/QwenPaw/pull/5321

8. **Bubblewrap Linux sandbox (PR #5310)** — Mount namespace isolation for skill execution. Significant security feature.
   - URL: https://github.com/agentscope-ai/QwenPaw/pull/5310

## User Feedback Summary

### Pain Points Expressed

- **v1.1.12 regression (send_file_to_user):** "之前没升级前都是正常可以显示图片的" — image display worked before upgrade, now broken. Highly disruptive for users relying on visual agent output.
- **Mobile/browser limited experience:** "UI界面有问题, 我没有办法切换agent" — mobile user cannot switch agents in collapsed sidebar mode. Needs workaround with expand/unexpand hack.
- **DeepSeek compatibility concerns:** "agent经常在thinking的过程中卡死, 需要手动点停止" — agent stalling mid-thought on DeepSeek models across all interfaces. Multiple Issues (#5328, #5333) suggest systemic streaming issue.
- **Memory bloat after moderate use:** "使用约 3 个月后, 向量索引膨胀至 37GB" — 3 months of normal usage caused 37GB index growth requiring manual delete. Surprised that "未做任何特殊操作" (no special operations) triggered this.
- **Zhipu unusable despite setup:** "供应商级别的 API 连接测试通过, 但模型级别的连接测试全部失败" — wasted setup effort, confusing contradictory test results.
- **Cron job unpredictability:** Users experienced missed scheduled tasks due to 60-second grace window being too short during busy periods.

### Satisfaction Signals

- **Responsive maintainers:** Multiple Issues submitted today received PRs on same day (#5324 for #5320, #5334 for #5329, #5335 for #5333, #5336 for #5267, #5339 for #5330), suggesting very responsive core team.
- **Active first-time contributors:** 4 first-time contributors submitted PRs today, indicating healthy onboarding and documentation quality.
- **Community self-help culture:** Issue #5319 resolved by user ("重装、重启后解决" — reinstalled/restarted to fix), suggesting users explore workarounds before filing.

## Backlog Watch

### Issues Needing Maintainer Attention

1. **[#4795] ChromaDB 37GB bloat** — *liudao008 | Opened 2026-05-29*
   - **Status:** PR #5332 merged today. Awaiting v1.1.13 release to reach users. Monitor if `compact_index()` and auto-compact threshold works for all configurations.
   - URL: https://github.com/agentscope-ai/QwenPaw/issues/4795

2. **[#5317] Missing Python in Tauri / Conda** — *HQ1363 | Opened 2026-06-18*
   - **Status:** No PR, no maintainer response yet. Impacts skill execution entirely. Likely a packaging/installer regression after v1.1.12.
   - URL: https://github.com/agentscope-ai/QwenPaw/issues/5317

3. **[#5328] DeepSeek thinking freeze** — *bob-geek11 | Opened 2026-06-19*
   - **Status:** No dedicated fix PR. If not resolved by PR #5335 (general SSE exception handling), may need separate investigation into DeepSeek streaming behavior.
   - URL: https://github.com/agentscope-ai/QwenPaw/issues/5328

### PRs Needing Review or Decision

4. **[#5321] Scroll context manager** — *niceIrene | Opened 2026-06-19*
   - **Status:** Under Review. First-time contributor, significant new feature (durable history + recall REPL). Needs architectural review and benchmark comparison with existing compression.
   - URL: https://github.com/agentscope-ai/QwenPaw/pull/5321

5. **[#5310] Bubblewrap Linux sandbox** — *vanwaals | Opened 2026-06-18*
   - **Status:** Open, no review tag changes. Security-sensitive feature requiring thorough code review. Adds mount namespace isolation — significant for production deployments.
   - URL: https://github.com/agentscope-ai/QwenPaw/pull/5310

**Overall Project Health:** Today's activity reflects a project in **active maintenance and feature growth phase** following a v1.1.12 release that introduced regressions. The **high PR-to-Issue ratio** (17 PRs vs 11 Issues) and **same-day fix turnaround** on multiple critical bugs indicate a responsive maintainer team. The influx of first-time contributors (4 today alone) suggests good onboarding docs and growing community. The primary risk is **release quality** — the v1.1.12 upgrade broke image display (regression introduced by PR #5115) and introduced Zhipu connectivity issues, suggesting the need for more thorough regression testing before releases.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-20

## 1. Today's Overview

ZeroClaw maintains high development velocity following the v0.8.1 patch release, with 50 active issues and 46 open PRs in the last 24 hours. The project shows strong contributor engagement with 45 contributors across 207 commits since v0.8.0, though the open PR backlog (46 open vs. 4 merged/closed) suggests a growing review bottleneck. Critical priorities include stabilizing prebuilt binaries (Slack/Discord channel regression), fixing Gemini provider compatibility, and addressing config persistence ordering defects that can corrupt agent state. The team is actively shipping fixes via automated builds, with 9 merged PRs today addressing bugs in multimodal routing, file descriptor exhaustion, MCP server configuration, and cost config reloadability.

## 2. Releases

**v0.8.1** — Released as the first patch on the v0.8.x line, focused on stabilizing the multi-agent runtime, channels, and provider stack. Spans 207 commits from 45 contributors with 123 bug fixes and 46 new features since v0.8.0.

*No breaking changes or migration notes were detailed in the release data.*

## 3. Project Progress

**4 PRs merged/closed today:**
- **#8031** (CLOSED) — NOOP issue closed (singlerider)
- Fixed: Pre-existing CI gate failures on master — provider-dispatch and `--all-features` build broken
- Fixed: MCP server command/url required-ness logic in web config editor
- Fixed: Bitcoin crate yanked-package warnings in Cargo.lock

**Features advanced (open PRs with recent activity):**
- Discord interaction components (buttons, selects, modals) — PR #7965 (XL, high risk)
- Discord slash command localizations + guild scope — PR #7922 (L, high risk)
- Context window usage bar for TUI, gateway chat, CLI — PR #7946 (L, high risk)
- SopRunStore trait + in-memory backend (SOP EPIC B scaffold) — PR #8001 (L, high risk)
- Multi-database session backends (Postgres, Oracle, MySQL, Db2) — PR #6893 (XL, high risk)

## 4. Community Hot Topics

1. **[#7787] Prebuilt v0.8.0 binaries ship without Slack/Discord channel features** (6 comments, 1 👍)  
   *URL: Zeroclaw Issue #7787*  
   Regression from v0.7.x — prebuilt binaries were compiled without channel features. Downgrading to v0.7.5 restores functionality. A P1 blocker for users relying on Slack integrations.

2. **[#5844] Too much emphasis on memory** (6 comments)  
   *URL: Zeroclaw Issue #5844*  
   Users report system prompts over-prioritize stored memories over current context, especially in cron jobs. Indicates memory weighting needs configurable tuning.

3. **[#7141] OIDC Authentication Provider support** (5 comments)  
   *URL: Zeroclaw Issue #7141*  
   RFC tracking issue for pluggable auth-provider work targeting v0.9.0. Signals enterprise/security-focused roadmap direction.

4. **[#6067] Make channel reply-intent precheck configurable** (5 comments)  
   *URL: Zeroclaw Issue #6067*  
   Request for lightweight model + timeout for reply-intent classification, currently blocking full agent turns on main model. Performance-focused community need.

**Underlying theme:** Users are pushing for production hardening — configurable performance knobs, reliable prebuilt binaries, and enterprise auth integration.

## 5. Bugs & Stability

### Critical (P1, S1 — workflow blocked):
- **#7787** — Prebuilt v0.8.0 binaries lack Slack/Discord features (regression)
- **#6302** — Gemini 400 errors due to history serializer invariant violation (first non-user turn contains tool_calls)
- **#5808** — Default 32k context budget exceeded 3.3x on first iteration, causing perpetual preemptive trimming
- **#7907** — Agent rename mutates owned state before config persistence (fix PR #7907 in progress)
- **#7941** — Agent delete can purge owned state before config persistence (mirror of #7907)
- **#6037** — Cron jobs launched repeatedly while still running (no concurrency guard)
- **#6841** — `vision_provider` silently ignored, images routed to fallback provider

### High (P1, S2 — degraded behavior):
- **#5869** — RUSTSEC advisory cluster from rumqttc transitive dependency (security blocked)
- **#4721** — Logs emitted to stdout instead of stderr, breaking CLI output piping

### Today's fix PRs:
- **#7972** — Fix multimodal vision_provider routing (fixes #6841)
- **#7983** — Handle file-descriptor exhaustion (EMFILE) in IPC accept loop (fixes #7042)
- **#8009** — Wire HMAC tool receipts through ACP, gateway WS, CLI (agent turn paths)
- **#8014** — Stop duplicating streamed narration before native tool calls
- **#8023** — Stop leaking stdio child processes per MCP heartbeat tick (fixes #5903)

## 6. Feature Requests & Roadmap Signals

### Likely v0.8.2/v0.8.3 candidates:
- **#7320** — MCP dashboard and web/plugin-management surfaces (v0.8.3 tracker, actively building)
- **#6557** — Reconcile runtime model switching with provider structure (P2, in-progress)
- **#7759** — Decouple gateway WebSocket from agent turn lifetime (P1, in-progress — run turns in background, resume on reconnect)

### v0.9.0 targets:
- **#7141** — OIDC Authentication Provider support (RFC tracking)
- **#7432** — Auth, security, gateway, breaking-change queue (tracker)
- **#6250** — Route-layer middleware for auth on `/api/config` and `/api/onboard`

### Community feature requests:
- **#7950** — Docker images including ZeroClaw documentation for self-service agent answers (P3)
- **#7996** — Configurable temporary-file cleanup for storage-constrained deployments (P3)
- **#7929** — Unify slash-command registries across web, TUI, and channel runtime (P2, needs maintainer review)

## 7. User Feedback Summary

**Pain points expressed:**
- Prebuilt binaries don't work with Slack/Discord — users must build from source or downgrade
- Telegram multimodal: images sent together cause duplicate agent responses (each image triggers separate request)
- Model costs not captured for schedules, CLI, and web agents (cost tracking incomplete)
- Container deployments accumulate temp files with no cleanup mechanism
- Context budget exceeded immediately with default settings (32k is too small for system prompt + tools)
- Android/Termux setup fails — unknown binary detected for `aarch64-linux-android`
- Group chats: agent replies to messages not clearly directed to it (telegram)
- Rerunning cron jobs when execution exceeds poll interval

**Satisfaction signals:**
- Strong community contribution (45 contributors in v0.8.1)
- Active maintainer response with automated fix PRs
- Discord interaction components nearing completion (high community interest)

## 8. Backlog Watch

### Stale issues needing maintainer attention:
- **#4721** — `zeroclaw should log to stderr` — Open since 2026-03-26, labeled `no-stale`, 3 comments, P2
- **#5514** — Telegram image duplication — Open since 2026-04-08, labeled `no-stale`, 2 comments, P2
- **#5869** — RUSTSEC advisory cluster — Blocked + accepted since 2026-04-18, 2 comments, P1
- **#6841** — Vision provider routing bug — Open since 2026-05-21, labeled `no-stale`, 1 comment, P1

### PRs requiring review:
- **#6893** — Multi-database session backends (XL, high risk) — Open since 2026-05-24, 0 comments
- **#7922** — Discord slash command localizations — Needs author action, 0 comments
- **#8001** — SopRunStore trait — Just opened 2026-06-19, 0 comments

### Blocked issues:
- **#7911** — Android Termux setup — Blocked, needs author action, unknown binary detection
- **#5869** — Security advisory cluster blocked by rumqttc dependency update

---

*Generated from ZeroClaw GitHub activity data. All issue/PR links: `github.com/zeroclaw-labs/zeroclaw/issues/[ID]` or `.../pull/[ID]`.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*