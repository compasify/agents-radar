# OpenClaw Ecosystem Digest 2026-07-30

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-07-30 01:19 UTC

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

# OpenClaw Project Digest — 2026-07-30

## Today’s Overview

OpenClaw is in a period of high activity: **500 issues** and **500 pull requests** were updated in the last 24 hours, with **449 open issues** and **403 open PRs** reflecting a vibrant community. **97 PRs were merged or closed** today, indicating steady progress on both fixes and features, while **51 issues were closed**. No new releases were published, suggesting the team is focusing on addressing accumulated technical debt and bug fixes. The project faces multiple P1/P0 regressions (e.g., Codex integration stalls, OAuth wedging) that are generating heated discussion, but the volume of merged PRs shows maintainers are actively responding.

## Releases

*No new releases were published on 2026-07-30. The latest stable version remains 2026.7.1 (npm `latest` tag) as indicated by recent issues.*

## Project Progress

**97 PRs were merged or closed today**, including several notable fixes:

- **docker**: `fix(docker): validate timezone in runtime image` (PR [#116153](https://github.com/openclaw/openclaw/pull/116153)) – prevents invalid `OPENCLAW_TZ` values from silently breaking timezone handling in containers.
- **codex**: `fix(codex): preserve requester across promoted approvals` (PR [#116152](https://github.com/openclaw/openclaw/pull/116152)) – resolves a policy rejection issue for promoted Codex file-change approvals.
- **feishu**: `fix(feishu): use resolved runtime config for gateway sends` (PR [#89403](https://github.com/openclaw/openclaw/pull/89403)) – ensures Feishu credentials reach delivery paths.
- **config**: `fix(config): allow explicit main agent bindings when agents.list is non-empty` (PR [#89419](https://github.com/openclaw/openclaw/pull/89419)) – restores the documented multi-agent binding pattern.
- **status**: `fix(status): show effective channel model override` (PR [#89602](https://github.com/openclaw/openclaw/pull/89602)) – improves `/status` command visibility for channel-specific model overrides.

Open PRs advancing toward merge include:
- **agents**: `fix(agents): emit a user-visible notice when a turn times out during tool execution` (PR [#112022](https://github.com/openclaw/openclaw/pull/112022)) – addresses silent agent stalls.
- **gateway**: `fix(doctor): stop advisory state-dir skips from wedging gateway startup` (PR [#114678](https://github.com/openclaw/openclaw/pull/114678)) – prevents legacy state dir leftovers from blocking boot.
- **queue**: `feat(queue): persist followup queues across gateway restarts` (PR [#82572](https://github.com/openclaw/openclaw/pull/82572)) – a long-requested quality-of-life improvement.
- **cron**: `fix(cron): stop replaying old schedule slots after a cron job is edited` (PR [#115779](https://github.com/openclaw/openclaw/pull/115779)) – prevents duplicate job firings after schedule changes.

## Community Hot Topics

The most active issues by comment count and reactions reveal deep concerns about Codex integration, stability, and caching:

- **#91009** (18 comments, 2👍): [Codex PreToolUse native hook relay spawns CPU-bound processes, stalls gateway RPC](https://github.com/openclaw/openclaw/issues/91009) – A diamond-lobster-rated P1 causing 100%+ CPU load on hook processes. Community is actively debugging the relay lifecycle.
- **#86996** (15 comments, 2👍): [Active Memory + Codex app-server path causes long response latency, hook timeouts, startup aborts](https://github.com/openclaw/openclaw/issues/86996) – Another diamond-lobster P1 showing a combination of features causing severe degradation.
- **#39476** (13 comments): [A2A sessions_send duplicate messages](https://github.com/openclaw/openclaw/issues/39476) – A long-standing P1 (March 2026) where subagent responses double-post. Users are frustrated by the staleness.
- **#91363** (10 comments, 6👍): [Isolated cron consistently fails with “LLM request failed”](https://github.com/openclaw/openclaw/issues/91363) – Platinum hermit rating; model requests never reach providers in isolated cron jobs. High demand for resolution.
- **#88657** (10 comments, 1👍): [DeepSeek V4 Flash incomplete turn regression](https://github.com/openclaw/openclaw/issues/88657) – Users report model behavior broken since 2026.5.27.
- **#86215** (10 comments, 1👍): [Codex OAuth refresh failures wedge agent for hours](https://github.com/openclaw/openclaw/issues/86215) – No aggressive rotation or alerting for OAuth failures.

**Key insight**: The community is deeply invested in Codex-native agent workflows and OAuth token management. Many issues share a common thread of *reliability under scale* – subagent orchestration, token refresh timing, and CPU-bound hook processes.

## Bugs & Stability

Severity breakdown of newly reported or updated bugs today (P0–P1 only):

| Issue | Severity | Description | Fix PR Exists? |
|-------|----------|-------------|----------------|
| [#95515](https://github.com/openclaw/openclaw/issues/95515) | **P0** (closed) | Upgrade 2026.6.8→2026.6.9 corrupts email channel config with spurious groupAllowFrom field | Yes (closed) |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | **P1** | Codex PreToolUse hook spawns CPU-bound processes, stalls RPC | No |
| [#86996](https://github.com/openclaw/openclaw/issues/86996) | **P1** | Active Memory + Codex causes long latency, hook timeouts, startup aborts | No |
| [#91363](https://github.com/openclaw/openclaw/issues/91363) | **P1** | Isolated cron fails with “LLM request failed” / timeout | No |
| [#86215](https://github.com/openclaw/openclaw/issues/86215) | **P1** | Codex OAuth refresh failures wedge agent for hours | No |
| [#89278](https://github.com/openclaw/openclaw/issues/89278) | **P1** | Codex OAuth refresh succeeds but cron/heartbeat fail with 10s timeout | No |
| [#112423](https://github.com/openclaw/openclaw/issues/112423) | **P1** | Large SQLite transcript cleanup blocks gateway event loop | No |
| [#87756](https://github.com/openclaw/openclaw/issues/87756) | **P1** | Regression: prompt-launched Lobster workflow hangs on /tools/invoke | No |
| [#92433](https://github.com/openclaw/openclaw/issues/92433) | **P1** | Subagent completion silently dropped when announce steers into requester run | No |
| [#98435](https://github.com/openclaw/openclaw/issues/98435) | **P1** | MCP loopback transport does not auto-reconnect after gateway restart | No |
| [#90684](https://github.com/openclaw/openclaw/issues/90684) | **P1** | Feishu misses sanitizeAssistantVisibleText() – security/message loss | [PR linked](https://github.com/openclaw/openclaw/pull/???)* |
| [#89315](https://github.com/openclaw/openclaw/issues/89315) | **P1** | Gateway heap grows unbounded, killed by cgroup OOM | No |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | **Bug** (P1-like) | OpenClaw leaks unreaped hook/tool child processes, zombie accumulation | No |

*Note: Several P1 issues have `clawsweeper:needs-maintainer-review` and no fix PR yet, indicating a bottleneck in maintainer review capacity.*

**Stability patterns**: The most critical bugs involve **concurrent resource usage** (event-loop blocking, CPU spikes, memory leaks) and **token/session management** (OAuth, subagent completions). The lack of fix PRs for many P1s is a concern.

## Feature Requests & Roadmap Signals

Active feature requests (not bugs) with high engagement:

- **[#90354](https://github.com/openclaw/openclaw/issues/90354) (P2)**: Add bounded/validated append semantics for pre-compaction memory flush – prevents oversized model writes that corrupt memory files.
- **[#91455](https://github.com/openclaw/openclaw/issues/91455) (P3)**: Documentation update for Kubernetes – points to outdated Helm guidance.
- **[#81061](https://github.com/openclaw/openclaw/issues/81061) (P2)**: Hook: `before_route_inbound_message` – pre-routing interception for channel bridging/proxying.
- **[#8299](https://github.com/openclaw/openclaw/issues/8299) (P2)**: Config option to suppress sub-agent announce – a long-standing (Feb 2026) UX friction request.
- **[#88154](https://github.com/openclaw/openclaw/issues/88154) (P2)**: Slack Modal Support for interactive workflows.
- **[#13219](https://github.com/openclaw/openclaw/issues/13219) (P2)**: Per-model usage logging for cost tracking – a community favorite (7 comments, 1👍).
- **[#91259](https://github.com/openclaw/openclaw/issues/91259) (P3)**: Remove redundant agent-id scoping from memory collection names – cleanup.

**Prediction for next release**: The volume of merged PRs today suggests the next minor release (2026.7.x) is imminent. Likely inclusions: Codex approval fix (#116152), cron schedule replay fix (#115779), Feishu credential fix (#89403), and state dir migration fix (#114678). The more impactful features (Slack modals, per-model cost tracking) are lower priority and may appear later.

## User Feedback Summary

**Pain points expressed in top issues**:
- **Reliability with Codex agents**: Users report stalls, CPU spikes, OAuth wedging, and silent failures (e.g., [#91009](https://github.com/openclaw/openclaw/issues/91009), [#86215](https://github.com/openclaw/openclaw/issues/86215)). The integration with Codex app-server is the single largest source of dissatisfaction.
- **Cron/isolated agent jobs**: Multiple reports of cron jobs failing silently or timing out ([#91363](https://github.com/openclaw/openclaw/issues/91363), [#87327](https://github.com/openclaw/openclaw/issues/87327)), reducing trust in automated workflows.
- **Cache invalidation**: Anthropic prompt-cache hit rate collapse from 99.9% to 22% when active memory is enabled ([#91223](https://github.com/openclaw/openclaw/issues/91223)), impacting cost and speed.
- **Memory / search race conditions**: `memory_search` intermittently returns “database is not open” or “index metadata is missing” after gateway restart ([#90361](https://github.com/openclaw/openclaw/issues/90361), [#112196](https://github.com/openclaw/openclaw/issues/112196)), causing confusion.
- **Channel-specific issues**: Telegram DM lane guarded after timeout ([#91456](https://github.com/openclaw/openclaw/issues/91456)), Feishu raw text leaks ([#90684](https://github.com/openclaw/openclaw/issues/90684)), Windows CLI scheduled task dies ([#91144](https://github.com/openclaw/openclaw/issues/91144)).

**Satisfaction highlights**: The community appreciates the plugin extensibility (lifecycle hooks [#43454](https://github.com/openclaw/openclaw/issues/43454) was requested and later closed as resolved?), Discord sanitization use as a precedent, and the general responsiveness of maintainers (97 PRs merged today). However, the high volume of P1 bugs without fix PRs tempers enthusiasm.

## Backlog Watch

Issues that remain open for extended periods and may need maintainer attention:

- **[#39476](https://github.com/openclaw/openclaw/issues/39476) (P1, stale since Mar 8)**: A2A sessions_send duplicate messages – one of the oldest P1s, tagged `clawsweeper:linked-pr-open` but still open after 4+ months.
- **[#8299](https://github.com/openclaw/openclaw/issues/8299) (P2, since Feb 3)**: Config option to suppress sub-agent announce – simple UX improvement waiting for product decision.
- **[#13219](https://github.com/openclaw/openclaw/issues/13219) (P2, since Feb 10)**: Per-model usage logging – highly requested but no maintainer review progress.
- **[#52526](https://github.com/openclaw/openclaw/issues/52526) (P2, stale since Mar 22)**: `agent --json` returns pre-hook text – security-impacting discrepancy between CLI output and persisted transcript.
- **[#43454](https://github.com/openclaw/openclaw/issues/43454) (P3, closed?)**: Gateway lifecycle hooks – closed but listed as open in top 50; might have been resolved but not removed from view.
- **[#69086](https://github.com/openclaw/openclaw/issues/69086) (P2, since Apr 19)**: attempt-execution session-history guard too broad – a long-standing retry logic issue.

**Maintainer capacity concern**: Many of the most active P1 issues (e.g., #91009, #86996, #91363) have the `clawsweeper:no-new-fix-pr` tag and `clawsweeper:needs-maintainer-review`, suggesting the team is backlogged on reviewing fixes for critical bugs. Without additional maintainer bandwidth or community contributions, these problems may persist across releases.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent Open-Source Ecosystem
**Date: 2026-07-30**

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source landscape remains intensely active and fragmented, with multiple projects converging on shared challenges around reliability, memory management, and multi-agent orchestration. **Codex integration** has emerged as the dominant pain point across projects, with OpenClaw, NanoClaw, and IronClaw all reporting significant regressions related to Codex hooks, OAuth refresh failures, and CPU-bound subprocess stalls. A clear architectural divide persists between projects prioritizing **stability and bug fixes** (OpenClaw, Hermes Agent, LobsterAI) versus those advancing **large-scale RFCs and architectural redesigns** (ZeroClaw, IronClaw). The ecosystem shows healthy contributor diversity, with NanoBot and CoPaw attracting first-time contributors, while PicoClaw and ZeptoClaw appear to be slowing. Overall, the landscape is characterized by rapid iteration on reliability fundamentals, with growing demand for production-grade features like A2A interoperability, persistent memory separation, and cross-platform channel support.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Merged/Closed PRs | New Release | Health Score* |
|---------|---------------------|-------------------|-------------------|-------------|---------------|
| **OpenClaw** | 500 | 500 | 97 | No | **Very High** |
| **NanoBot** | 5 | 33 | 19 | No | **High** |
| **Hermes Agent** | 50 | 50 | 12 | No | **High** |
| **PicoClaw** | 1 | 2 | 0 | No | **Low** |
| **NanoClaw** | 2 | 6 | 3 | No | **Medium** |
| **NullClaw** | 1 | 4 | 2 | No | **Medium** |
| **IronClaw** | 50 | 50 | 15 | No | **Very High** |
| **LobsterAI** | 0 | 13 | 13 | No | **High** |
| **Moltis** | 0 | 5 | 2 | No | **Medium** |
| **CoPaw (QwenPaw)** | 25 | 50 | 13 | No | **High** |
| **ZeptoClaw** | 0 | 0 | 0 | No | **Inactive** |
| **ZeroClaw** | 50 | 50 | 6 | No | **Very High** |

*Health Score: Composite of activity velocity, fix responsiveness, community engagement, and backlog health.

---

## 3. OpenClaw's Position

**Advantages over peers:**
- **Scale of community engagement** – 500 issues and PRs updated daily dwarfs every other project. OpenClaw is the de facto reference implementation, with the largest contributor base and most comprehensive channel support (Feishu, Discord, Telegram, Slack).
- **Bug-fix velocity** – 97 PRs merged/closed in 24 hours demonstrates maintainer responsiveness unavailable elsewhere. Hermes Agent (12) and NanoBot (19) cannot match this throughput.
- **Enterprise-grade issue management** – Structured severity tracking (P0/P1), explicit regression tagging, and `clawsweeper` automation labels indicate mature project governance.

**Technical approach differences:**
- OpenClaw uses **Codex-native hooks** for agent workflows (PreToolUse, OAuth), which creates deep integration but also generates the most severe P1 regressions. Peers like NanoClaw and NullClaw use lighter-weight CLI-based spawning patterns (e.g., `codex-cli` provider), avoiding CPU-bound hook stall issues.
- OpenClaw emphasizes **event-loop-driven gateway architecture**, which is vulnerable to blocking operations (SQLite cleanup, hook processes). IronClaw and Moltis favor more isolated component boundaries.
- **Multi-agent binding** is explicitly configurable (PR #89419), whereas NanoBot and CoPaw are still debating multi-agent collaboration at the RFC stage.

**Community size comparison:**
- OpenClaw's top issues attract 10–18 comments; ZeroClaw's RFCs attract similar numbers but are more architecturally focused. PicoClaw and NullClaw see 0–3 comments per item. OpenClaw clearly commands the largest active user base and maintainer team.

---

## 4. Shared Technical Focus Areas

| Requirement | Affected Projects | Specific Needs |
|------------|------------------|----------------|
| **Codex/Agent reliability** | OpenClaw, NanoClaw, IronClaw, NullClaw | OAuth refresh failures, CPU-bound hooks, 400 errors on tool calls, silent message drops |
| **Memory separation & persistence** | OpenClaw, ZeroClaw, CoPaw, NullClaw | Event-loop blocking on cleanup, memory/context mixing, session data loss after restart |
| **Session & state management** | OpenClaw, NanoBot, CoPaw, LobsterAI | Duplicate messages, phantom resets, state lost on consolidation (NanoBot #5118), cron completion race conditions |
| **Channel reliability** | OpenClaw, NanoClaw, CoPaw, LobsterAI | Telegram polling stalls, Slack thread history loss, Feishu credential delivery, Discord DM lane timeouts |
| **Provider diversity** | NullClaw, NanoClaw, ZeroClaw, LobsterAI | Grok CLI (NullClaw), Copilot SDK (NanoClaw), Mixture-of-Agents (ZeroClaw), Kimi K3 compat (LobsterAI) |
| **Authentication & token management** | OpenClaw, NullClaw, IronClaw, ZeroClaw | OAuth not persisted to disk (NullClaw), token refresh wedging agents (OpenClaw), plaintext credential leaks (ZeroClaw) |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | NanoBot | CoPaw | LobsterAI | Moltis |
|-----------|----------|----------|---------|-------|-----------|--------|
| **Target user** | Power users, enterprise | Architects, advanced devs | Casual devs, desktop users | Chinese market, researchers | Desktop productivity | System integrators |
| **Primary language** | TypeScript/Node | Rust | Python | Python + Qwen | TypeScript/Electron | TypeScript |
| **Architecture** | Gateway + plugins | Monorepo/wasm plugins | Modular, skill-first | Plugin-based | Desktop-first | ACP stdio, PWA |
| **Feature velocity** | Bug-fix focused | RFC-driven redesign | Feature + fix balance | Stabilization after 2.0 | Cowork/IM polish | Observability/security |
| **Channel support** | 10+ (Feishu, Discord, Telegram, etc.) | Extensible (WASM) | Telegram, WebUI | Feishu, QQ, MCP | Built-in desktop | Slack, PWA, ACP |
| **Unique strength** | Largest ecosystem | Architectural decoupling | Developer UX | Chinese platform integration | Side chat/cowork | PWA + ACP interop |
| **Weakness** | Reliability under scale | Maintainer bottleneck on RFCs | Smaller community | CI blocks external contributors | Small team | Sole maintainer |

**Key insight:** OpenClaw and ZeroClaw represent opposite ends of the maturity spectrum—OpenClaw prioritizes fixing existing features, while ZeroClaw redesigns from first principles. CoPaw serves a distinct regional and model-specific audience. Moltis and LobsterAI target different environments (PWA vs. desktop) and integration protocols (ACP vs. native).

---

## 6. Community Momentum & Maturity

**Tier 1: Very High Velocity / Rapid Iteration**
- **OpenClaw** – 97 merged PRs/day, but heavy technical debt (13 unfixed P1s, oldest P1 from March 2026).
- **ZeroClaw** – Architectural RFCs with deep engagement, but 29-day maintainer decision queue risks contributor burnout.
- **IronClaw** – Intense Reborn migration (15 PRs/day, 30 issues closed) with clear EPIC tracking.

**Tier 2: High Velocity / Stabilizing**
- **NanoBot** – 19 merged PRs/day, quick fix turnaround (hours for PowerShell bug), active first-time contributors.
- **Hermes Agent** – Focused on SQLite/fs compatibility fixes, 12 PRs merged, good on stale cleanup.
- **CoPaw** – 13 fixed bugs, responsive maintainers on session-blocking issues, but 2.0.1 stabilization overhead and CI gate blocks.
- **LobsterAI** – 13 PRs merged, release branch shipped, strong IM/cowork polish cycle.

**Tier 3: Moderate / Focused**
- **NanoClaw** – 3 merged PRs (Slack fix, container hardening, routing bug). Good maintenance but feature pace slower.
- **NullClaw** – 2 PRs merged, clean focus on scheduler fix and memory config. Single bug #915 is 2+ months old.
- **Moltis** – 2 PRs merged, internally driven roadmap. No bug reports; sole maintainer limits scalability.

**Tier 4: Low / Dormant**
- **PicoClaw** – 0 PRs merged, 2 stale PRs (4+ months), 1 new bug (#3301) with no response. Risk of stagnation.
- **ZeptoClaw** – No activity. Likely in maintainer hiatus or unmaintained.

---

## 7. Trend Signals

### For AI Agent Developers:

1. **Codex/agent runtime reliability is the #1 blocker.** Every project with Codex integration reports stalls, OAuth wedging, CPU spikes, or silent message drops. Teams building agent applications should budget significant engineering time for these issues or consider lighter integration patterns (e.g., NullClaw's `codex-cli` provider).

2. **Memory separation is becoming a requirement, not a nice-to-have.** OpenClaw (#91223), ZeroClaw (#9048), and CoPaw (#6555) all report data loss or corruption when session history and long-term memory are mixed. Expect dedicated memory storage APIs and configurable recall limits (NullClaw #979) to become standard within 6 months.

3. **Cross-project integration is a growing demand.** A2A protocol support (ZeroClaw #9106, Moltis PR #1169) and OpenAI API compatibility (ZeroClaw #8603) signal a desire for interoperable agent ecosystems, not siloed platforms.

4. **Desktop and PWA experiences are maturing.** LobsterAI's cowork (side chat) features and Moltis's PWA notifications show that production-grade desktop/mobile UX is now table stakes. The shift from CLI-only to rich UI is accelerating.

5. **Reliability at scale requires architectural decoupling.** The most severe bug patterns cross multiple projects (event-loop blocking, credential mismanagement, session state corruption). Projects investing in component isolation (ZeroClaw's WASM plugins, IronClaw's Reborn migration) are likely to achieve better long-term stability than monolithic gateway approaches.

6. **Chinese-market projects (CoPaw, PicoClaw) face unique constraints** around Chinese-language encoding (Feishu paths), platform-specific channels (QQ, DingTalk), and cross-platform testing. These are underserved by Western-focused projects but represent a significant user base.

7. **Security hardening is emerging as a priority.** Moltis (#1170), ZeroClaw (#9542), and OpenClaw are all adding operator lists, token persistence, and credential validation. Expect vulnerability disclosure programs and documented security postures to become standard.

**Bottom line for technical decision-makers:** OpenClaw remains the safest choice for breadth of features and community support, but expect reliability overhead. ZeroClaw is the most forward-looking architectural bet but carries maintainer throughput risk. NanoBot offers the best developer experience for quick adoption. CoPaw leads in Chinese-market support. Assess your team's tolerance for regression risk versus architectural ambition when choosing a base for production deployment.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest – 2026-07-30

## Today’s Overview

Activity remains high with **5 issues** and **33 pull requests** updated in the last 24 hours. 19 PRs were merged or closed, reflecting a strong focus on fixing regressions and improving stability. No new releases were published today. The community is actively contributing to both bug fixes (especially around session consolidation, Telegram polling, and PowerShell compatibility) and feature work (multi-agent collaboration, skill marketplaces, and durable goal planning). The project shows healthy momentum with responsive maintainers and a growing contributor base.

## Releases

No new releases were tagged today.

## Project Progress – Merged/Closed PRs Today

Key PRs that were merged or closed in the last 24 hours:

- **[#5165 – fix(webui): avoid false microphone silence errors](https://github.com/HKUDS/nanobot/pull/5165)** – Prevents Web Audio waveform analysis from incorrectly treating silent samples as empty audio.
- **[#5162 – feat(webui): track optimistic message delivery status](https://github.com/HKUDS/nanobot/pull/5162)** – Adds UI indicators for message sending, accepted, and failed states.
- **[#5160 – fix(shell): preserve UTF-8 native input on PowerShell 5](https://github.com/HKUDS/nanobot/pull/5160)** – Fixes `$OutputEncoding` configuration to restore non-ASCII pipeline input on Windows PowerShell 5.1.
- **[#5158 – refactor: enforce BasedPyright strict type checking](https://github.com/HKUDS/nanobot/pull/5158)** – Makes all 273 Python modules strict-clean under BasedPyright, improving code quality and maintainability.
- **[#5157 – fix(memory): expose media references to session consolidation](https://github.com/HKUDS/nanobot/pull/5157)** – Fixes the root cause of media path loss during archiving (issue #5118).
- **[#5116 – feat(webui): add skill marketplaces and management](https://github.com/HKUDS/nanobot/pull/5116)** – Introduces a Discover view for third‑party skills from skills.sh and SkillHub, with install‑history sparklines.

## Community Hot Topics

**Most Active Issue:**

- **[#5000 – Proposal: evolve the current subagent system toward multi-agent collaboration](https://github.com/HKUDS/nanobot/issues/5000)** (6 comments, 👍0)
  - The community is discussing a fundamental enhancement: moving from simple background task delegation to a true multi-agent system with persistent identities and shared state. This long‑running proposal (opened Jul 20) signals strong interest in advanced agent orchestration.

**Most Active PRs** (by recency and number of associated conversations):  
Many PRs have zero comments but are part of active discussions via linked issues. Standouts include:

- **[#5139 – Fix: Preserve media paths during session consolidation](https://github.com/HKUDS/nanobot/pull/5139)** – Fix for the critical data‑loss bug #5118.
- **[#5034 – feat(goal): add durable state-graph planning and recovery](https://github.com/HKUDS/nanobot/pull/5034)** – A major feature to make `/goal` resilient through structured plans and recovery paths.

## Bugs & Stability

Bugs reported or addressed today, ranked by severity:

| Severity | Description | Fix PR / Status |
|----------|-------------|----------------|
| **Critical** | **Media paths lost during session consolidation** (issue #5118, closed) – Files stored only in `media[]` become unrecoverable after archiving. | Fixed by [#5157](https://github.com/HKUDS/nanobot/pull/5157) and [#5139](https://github.com/HKUDS/nanobot/pull/5139). |
| **High** | **Telegram polling silently stalls** (PR #5156, open) – After transient network blips, the bot stops receiving messages with no log output. | Under review; fix proposed. |
| **High** | **Cron completion state lost on WebUI polling** (issue #5163, open) – Manually triggered cron jobs succeed but the UI still shows `Failed` due to a race condition between `CronService.run_job()` and store‑reading APIs. | No fix PR yet. |
| **High** | **Windows PowerShell 5.1 corrupts non-ASCII pipeline input** (issue #5159, closed) – Missing `$OutputEncoding` configuration causes data loss in native commands. | Fixed by [#5160](https://github.com/HKUDS/nanobot/pull/5160). |
| **Medium** | **Provider API parser crashes on primitive items** (PR #5154, open) – SSE streams or response output lists containing strings cause `TypeError` in `parse_response_output`. | Fix proposed. |
| **Medium** | **Session locks never released** (PR #5151, open) – `WeakValueDictionary` introduced to prevent memory leaks from idle session locks. | Under review. |
| **Low** | **Malformed token-usage day keys break settings API** (PR #5146, open) – One bad key fails every `/api/settings` request. | Fix proposed. |

Additional closed bugs today:  
- [#5159](https://github.com/HKUDS/nanobot/issues/5159) (PowerShell 5.1 UTF‑8), [#5118](https://github.com/HKUDS/nanobot/issues/5118) (media paths).

## Feature Requests & Roadmap Signals

Recent issues and PRs point to several roadmap priorities:

- **Multi-agent collaboration** – Issue #5000 proposes persistent subagents with shared state. This aligns with PR #5034 (durable goal planning) and PR #5152 (partial completion tracking for subagents).
- **Skill ecosystem** – PR #5116 (skill marketplaces) opens the door to third‑party skill discovery and installation. Expect further refinement in the next release.
- **Platform flexibility** – PR #4919 (custom Telegram Bot API URL) and PR #5094 (canonical OpenRouter URL) show demand for self‑hosted and custom gateway support.
- **WebUI reliability** – PR #5165 (microphone silence), PR #5164 (redundant reloads), and PR #5162 (message delivery status) indicate ongoing investment in web client robustness.
- **Type safety** – The strict type‑checking baseline (#5158) signals a commitment to code quality and may reduce regressions long‑term.

Likely candidates for next version: merged features from #5116 (skill marketplaces) and #5034 (goal planning), if conflicts are resolved.

## User Feedback Summary

**Pain points expressed in issues and PRs:**

- **Data loss / consistency:** The media‑path drop bug (#5118) caused frustration because archived files became unrecoverable. Users appreciate the swift fix (#5157, #5139).
- **Telegram reliability:** The silent polling stall (#5156) is a production issue that interrupts service. Users want a robust recovery mechanism.
- **Windows compatibility:** Non‑ASCII data corruption on PowerShell 5 (#5159) affects Windows users running native tools. Fix delivered quickly.
- **Cron state confusion:** Race condition in cron completion (#5163) undermines trust in automation status.

**Satisfaction signals:**  
High activity from multiple contributors (chengyongru, yu‑xin‑c, santhreal, Re‑bin, etc.) and maintainer responsiveness (merges within hours) suggest a healthy, collaborative community.

## Backlog Watch

Issues and PRs that have been open for an extended period and may need maintainer attention:

- **[#4812 – fix(memory): use .get() for role key](https://github.com/HKUDS/nanobot/pull/4812)** (opened Jul 6) – Simple defensive fix for malformed messages, still open with merge conflicts.
- **[#4919 – feat(telegram): support custom Bot API base URL](https://github.com/HKUDS/nanobot/pull/4919)** (opened Jul 14) – Valuable for self‑hosted setups; unmerged.
- **[#5094 – fix(providers): use canonical OpenRouter app URL](https://github.com/HKUDS/nanobot/pull/5094)** (opened Jul 26) – Minor but blocked by conflicts.
- **[#5034 – feat(goal): add durable state-graph planning and recovery](https://github.com/HKUDS/nanobot/pull/5034)** (opened Jul 22) – Large feature with merge conflicts; risk of stagnation.
- **[#5000 – Multi-agent collaboration proposal](https://github.com/HKUDS/nanobot/issues/5000)** (opened Jul 20) – High community interest but no implementation started yet. May require architectural discussion.

These items would benefit from maintainer triage and conflict resolution to keep the project’s momentum.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-30

## Today's Overview
Hermes Agent is exhibiting high development velocity today with **50 issues and 50 PRs updated** in the past 24 hours. The open/closed ratio for issues (39 open, 11 closed) and PRs (38 open, 12 merged/closed) indicates a heavy triage and merge cycle, especially around SQLite journal-mode and filesystem compatibility fixes. No new releases were published, but several critical bug fixes landed as PRs. The project is actively responding to filesystem-specific stability reports (APFS, ZFS, virtiofs) and configuration consistency problems.

## Releases
No new releases today.

## Project Progress
12 PRs were merged or closed today, advancing several key fixes:
- **SQLite WAL resiliency**: PR [#74485](https://github.com/nousresearch/hermes-agent/pull/74485) consolidated and improved WAL-fallback detection across all filesystem types (APFS, ZFS, NFS/SMB, virtiofs). It honors `database.journal_mode` from `config.yaml` and closes multiple related issues.
- **Stale venv cleanup**: PR [#73590](https://github.com/nousresearch/hermes-agent/pull/73590) (merged) and PR [#74490](https://github.com/nousresearch/hermes-agent/pull/74490) (merged) reclaim the 1.1 GB `venv.stale.runtime-*` markers left behind after managed runtime repairs, solving [#73109](https://github.com/nousresearch/hermes-agent/issues/73109).
- **API server config bridging**: PR [#74505](https://github.com/nousresearch/hermes-agent/pull/74505) (open) fixes missing `key`/`cors_origins`/`model_name` transfer from top-level YAML to gateway extra.
- **Profile distribution ownership**: PR [#73874](https://github.com/nousresearch/hermes-agent/pull/73874) (open) honors `distribution_owned` subpaths during profile installs/updates, preserving user-managed siblings.

## Community Hot Topics
- **#71298** [OPEN] *Bug: providers vs custom_providers dual storage causes CLI/GUI mismatch* (13 comments, 0 reactions) — Users report inconsistent model version display between `hermes setup model` and Desktop app due to separate `providers`/`custom_providers` dicts. No maintainer decision yet; high relevance for all multi-provider users. [Link](https://github.com/nousresearch/hermes-agent/issues/71298)
- **#69551** [OPEN] *Desktop SSH remote mode broken with non-default profile* (12 comments) — Token-path validation resolves against profile-scoped `HERMES_HOME` while client hardcodes `~/.hermes/desktop-ssh`. Affects v0.19.0; needs decision. [Link](https://github.com/nousresearch/hermes-agent/issues/69551)
- **#18715** [OPEN] *Support remote Hermes agent with local tool execution* (12 comments, 22 👍) — Strongly upvoted feature request asking for split client/remote architecture. No maintainer decision since May 2026; significant backlog item. [Link](https://github.com/nousresearch/hermes-agent/issues/18715)
- **#41222** [OPEN] *Feature Request: Integrate Kanban Board into Desktop App* (9 comments, 16 👍) — Users want unified multi-agent workflow without switching between CLI and desktop. No assignment yet. [Link](https://github.com/nousresearch/hermes-agent/issues/41222)

## Bugs & Stability
- **P1**: [#60197](https://github.com/nousresearch/hermes-agent/issues/60197) (CLOSED) — `RuntimeError: Event loop is closed` during `/exit` from MCP server tasks. Fixed in today’s merges.  
  [#74373](https://github.com/nousresearch/hermes-agent/issues/74373) (OPEN) — `distribution_owned` does not constrain profile copy/update payload, risking overwrite of non-owned files. **Fix PR**: [#73874](https://github.com/nousresearch/hermes-agent/pull/73874).  
  [#74267](https://github.com/nousresearch/hermes-agent/issues/74267) (OPEN) — Windows Desktop updater falsely detects running processes and aborts update. No fix PR yet.  
- **P2**: Many SQLite WAL corruption issues resolved today via merged PRs. New reports: [#72451](https://github.com/nousresearch/hermes-agent/issues/72451) — In-place compression exhausts attempt budget in long tool loops; [#70131](https://github.com/nousresearch/hermes-agent/issues/70131) — Emoji sign-off fix misses Dingbats (✨✅ trigger truncation loop).  
- **P3**: [#73109](https://github.com/nousresearch/hermes-agent/issues/73109) (CLOSED) — Stale venv leak (1.1 GB per repair); fixed. [#38359](https://github.com/nousresearch/hermes-agent/issues/38359) — TUI dark theme inline diff renders light backgrounds inconsistently with CLI.

## Feature Requests & Roadmap Signals
- **#71727** *Named delegation profiles* — Users want to select model/endpoint pairs per subagent without top-level config changes. [Link](https://github.com/nousresearch/hermes-agent/issues/71727)
- **#70241** *max_context_length global ceiling* — Prevents reset on model switch during session. [Link](https://github.com/nousresearch/hermes-agent/issues/70241)
- **#7489** *RPM-based pre-emptive throttling* — Use `x-ratelimit` headers to avoid 429 retry loops. Strong technical interest (5 👍). [Link](https://github.com/nousresearch/hermes-agent/issues/7489)
- **#41222** *Kanban board in Desktop* — Likely candidate for v0.20 given popularity and ongoing desktop improvements.

## User Feedback Summary
**Pain points**: Filesystem incompatibilities (APFS, ZFS, virtiofs) cause data corruption and session loss – users express frustration that WAL mode is forced without configurable fallback. Many reports praise the recent `database.journal_mode` config but note it took months to arrive. **Satisfaction**: The community appreciates rapid bug fix merges (e.g., stale venv cleanup, multi-filesystem WAL detection). **Dissatisfaction**: The `providers` vs `custom_providers` split (issue #71298) and the SSH/profile path mismatch (#69551) cause confusion for users trying to set up remote desktop workflows. The lack of a Kanban Board integration (#41222) is a recurring ask from power users.

## Backlog Watch
- **#18715** (May 2, 2026) — *Remote agent with local tool execution* – 22 👍, no maintainer decision in 89 days. High demand but architecturally complex.  
- **#7489** (Apr 11, 2026) — *RPM-based throttling* – 5 👍, no activity. Would improve provider reliability.  
- **#38359** (Jun 3, 2026) — *TUI dark theme diff rendering* – 2 comments, no assignee. Low-priority but visible cosmetic bug.  
- **#21807** (May 8, 2026, CLOSED today) — *database.journal_size_limit never applied* – Fixed by PR #68912/#74485; good example of long-standing config gap now resolved.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-07-30

## 1. Today's Overview
Project activity is low, with only one new bug issue reported and no merged pull requests in the last 24 hours. Two long‑standing PRs received updates (one stale for a week, the other for over four months), but no code was merged. No new releases were published. Overall health is stable but indicates a need for maintainer bandwidth to close open contributions and address a newly reported functionality bug.

## 2. Releases
No new releases today.

## 3. Project Progress
No pull requests were merged or closed in the last 24 hours. Two PRs were updated but remain open:

- **#3283** – [fix(dingtalk): support picture/image message inbound](https://github.com/sipeed/picoclaw/pull/3283) (stale, last updated Jul 29). Adds DingTalk image handling with token caching. No recent maintainer review.
- **#1951** – [chore: move installation scripts from docs repo to here](https://github.com/sipeed/picoclaw/pull/1951) (open since Mar 24, updated Jul 29). Moves installation scripts into the main repo. Aims to consolidate documentation, but lacks reviewer engagement.

## 4. Community Hot Topics
No issue or pull request received comments or reactions today. The only open issue, **#3301**, is a newly filed bug with zero discussion. The two updated PRs have no comment activity. Community engagement remains low.

## 5. Bugs & Stability
One bug was reported:

- **#3301** – [BUG: /clear and session auto-compression don't work in chats routed to non-default agent via dispatch rules](https://github.com/sipeed/picoclaw/issues/3301)  
  **Severity:** Medium (core functionality – clearing history and auto-compression – fails for users with custom dispatch rules).  
  **Environment:** PicoClaw 0.3.1, DeepSeek via OpenCode Go, Raspberry Pi, Discord/Telegram channels.  
  **Status:** No fix PR exists yet, no comments from maintainers.

No other bugs, crashes, or regressions were reported.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed today. The open PR **#3283** (DingTalk image support) signals interest in richer messaging capabilities for the DingTalk channel. Given its “stale” label and lack of review, it may be considered for inclusion in the next minor release if maintainers adopt it.

## 7. User Feedback Summary
No direct user feedback (comments, reactions) was captured today. The single bug report (#3301) highlights a pain point for users who rely on dispatch rules to route chats to non‑default agents, suggesting that advanced routing configurations are a use case where core commands fail. No signs of broad satisfaction or dissatisfaction.

## 8. Backlog Watch
Two items require maintainer attention due to long inactivity:

- **PR #1951** – [move installation scripts from docs to here](https://github.com/sipeed/picoclaw/pull/1951)  
  Opened 4 months ago, last updated Jul 29. No reviewer comments. Important for documentation consolidation.

- **PR #3283** – [fix(dingtalk): support picture/image message inbound](https://github.com/sipeed/picoclaw/pull/3283)  
  Opened Jul 22, labeled “stale”. Adds a new feature but has not received review feedback.

Both PRs risk becoming outdated. Attention from maintainers is recommended to either merge, request changes, or close with reasoning.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-30

## Today’s Overview
NanoClaw shows moderate activity over the past 24 hours, with **2 open issues** and **6 pull requests** receiving updates. Three PRs were merged/closed, indicating steady maintenance momentum. No new releases were published. The project is addressing both infrastructure hardening (prebuilt container images, quota fallback) and critical bug fixes (Telegram rich-message loss, Slack thread history). A long-requested feature (GitHub Copilot SDK backend) remains open with strong community support, signalling ongoing demand for backend diversity.

## Releases
**No new releases** in the last 24 hours. The latest published version is unchanged.

## Project Progress
Three pull requests were merged/closed today:

- **[PR #3150 – Setup: fetch a hardened agent image instead of building it](https://github.com/nanocoai/nanoclaw/pull/3150)**  
  *Closed/Merged* – Introduces an optional way to download a prebuilt, hardened container image from the NanoClaw registry (built by Echo), reducing setup time and attack surface while keeping local build as the default.

- **[PR #2440 – fix(poll-loop) + feat(agent): session routing fix and pre-compaction notification](https://github.com/nanocoai/nanoclaw/pull/2440)**  
  *Closed/Merged* – Fixes a routing bug where container restarts could misidentify the first message; also adds a pre-compaction notification to agent flows.

- **[PR #2904 – fix(slack): reload thread history from platform on @mention](https://github.com/nanocoai/nanoclaw/pull/2904)**  
  *Closed/Merged* – Corrects a Slack integration issue where re-tagging the bot in a thread only delivered the single tagged message, ignoring human interjections. Now the bot fetches full thread history on `@mention`.

These fixes improve stability for Slack, container agent routing, and deployment security.

## Community Hot Topics
The most active items by comments, reactions, or recent updates:

- **[Issue #1350 – Add GitHub Copilot SDK as alternative AI backend](https://github.com/nanocoai/nanoclaw/issues/1350)**  
  *Open since March 2026* – 8 👍, 3 comments. The community continues to express strong interest in supporting Copilot models (GPT-4.1) alongside Claude. This is the most upvoted open issue and reflects a clear desire for backend diversity.

- **[PR #3057 – Dual-engine quota fallback: Claude→Codex overflow, handoff recaps, proactive quota warning](https://github.com/nanocoai/nanoclaw/pull/3057)**  
  *Open, updated yesterday* – A large feature branch (battle-tested on WhatsApp) that adds automatic provider fallback when Claude quotas are exhausted. The complexity and breadth of changes indicate it is a high-impact feature likely to be merged soon.

- **[Issue #3151 – Telegram Bot API 10.1 `rich_message` empty bug](https://github.com/nanocoai/nanoclaw/issues/3151)**  
  *Open, created yesterday* – No comments yet, but describes a silent data-loss bug that blocks formatted content from reaching agents. Already grabbed developer attention.

**Underlying needs**: Users are pushing for multi-model flexibility (Copilot) and production-grade resilience (quota fallback). The Telegram bug highlights a reliability gap in handling modern Bot API features.

## Bugs & Stability
Ranked by severity:

1. **Critical – Telegram rich messages silently dropped**  
   [Issue #3151](https://github.com/nanocoai/nanoclaw/issues/3151) – Inbound `rich_message` content from Bot API 10.1 reaches agents completely empty. No errors logged. Affects formatted pastes from web pages. No fix PR yet.
   
2. **High – Slack thread history missing on re-tag**  
   Fixed in merged **[PR #2904](https://github.com/nanocoai/nanoclaw/pull/2904)**. This was causing humans’ in-between messages to be invisible when the bot was re-`@mentioned` in an existing thread.

3. **Medium – Database backfill for missing channel destinations**  
   **[PR #3145](https://github.com/nanocoai/nanoclaw/pull/3145)** (open) adds migration 021 to provision missing destinations for existing messaging-group wirings. Without it, some old configurations may silently break.

4. **Medium – Container restart routing mis-identification**  
   Fixed in merged **[PR #2440](https://github.com/nanocoai/nanoclaw/pull/2440)**. First message in a batch after restart could be incorrectly treated as user input instead of an approval notification.

No crashes or regressions reported.

## Feature Requests & Roadmap Signals
- **GitHub Copilot SDK as AI backend** ([Issue #1350](https://github.com/nanocoai/nanoclaw/issues/1350)) – High community demand. Likely to be prioritised for the next minor release if maintainers adopt the SDK integration.
- **Dual‑engine quota fallback** ([PR #3057](https://github.com/nanocoai/nanoclaw/pull/3057)) – Almost ready, already tested in production. Expected to land in the next release, bringing automatic Claude→Codex overflow and proactive warnings.
- **CLI `--rw` flag for groups config mount** ([PR #3149](https://github.com/nanocoai/nanoclaw/pull/3149)) – Small usability improvement, likely to merge quickly.
- **Prebuilt hardened agent image** ([PR #3150](https://github.com/nanocoai/nanoclaw/pull/3150)) – Already merged; enhances deployment flexibility.

**Prediction**: The next version will likely include the quota fallback feature (#3057), the prebuilt image option (#3150), and the CLI mount flag (#3149). The Copilot backend (#1350) may be deferred to a subsequent release unless maintainers accelerate it due to community pressure.

## User Feedback Summary
- **Positive**: The Slack thread fix (#2904) addresses a long-standing pain point for bot users; the prebuilt image (#3150) is praised for simplifying setup.  
- **Negative / Pain points**:  
  - Telegram rich-message loss (#3151) – users lose formatted content without any warning.  
  - The single Claude-only backend (#1350) limits agent diversity – users want Copilot/Codex integration.  
  - Missing channel destinations in old wirings (#3145) cause silent failures some users may not have noticed yet.  
- **Satisfaction**: Overall, the project is actively fixing bugs and adding requested features, though the Telegram bug may dent user trust until resolved.

## Backlog Watch
- **[Issue #1350 – Add GitHub Copilot SDK backend](https://github.com/nanocoai/nanoclaw/issues/1350)**  
  *Created 2026-03-22, 8 👍, last update 2026-07-29* – The most‑upvoted open issue with no assignee and no PR. Despite strong community interest, it has been open for over four months. A maintainer response or milestone assignment is overdue to signal roadmap priority.

No other long‑unanswered items appear in the provided data.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest – 2026-07-30

**Generated from GitHub activity (nullclaw/nullclaw)**  
*Data refreshed 2026-07-30 00:00 UTC*

---

## Today’s Overview

Project activity is moderate with one newly reported issue and four pull requests updated in the last 24 hours. Two PRs were closed/merged, including a new provider integration for xAI’s Grok CLI; two remain open for review. The single open issue (#915) reports a persistent scheduler authentication failure that has drawn community attention and already has a pending fix PR (#980). No releases were cut today, but the memory recall feature is nearing completion with two parallel PRs. Overall, the project shows steady development with a clear focus on scheduling reliability and configurability.

---

## Releases

None today.  
*Last release: (no data available)*

---

## Project Progress

**Merged/Closed PRs (today):**

- **[PR #981 – feat(provider): add grok-cli provider for xAI Grok CLI](https://github.com/nullclaw/nullclaw/pull/981)**  
  *Author: valonmulolli | Status: Merged/closed*  
  Adds a new CLI-based provider that delegates to the local `grok` binary, following the same spawn-per-request pattern as the existing `codex-cli` provider. This expands the supported LLM backends.

- **[PR #961 – feat(memory): add configurable auto-recall, recall_limit, max_context_bytes](https://github.com/nullclaw/nullclaw/pull/961)**  
  *Author: valonmulolli | Status: Closed (superseded)*  
  This older PR introduced three new memory configuration keys but was closed today in favour of the updated PR #979 (still open). The feature itself is progressing.

**Open PRs under active review:**

- **[PR #980 – fix(scheduler): persist paired token to disk during /pair](https://github.com/nullclaw/nullclaw/pull/980)**  
  Directly addresses the scheduler authentication bug (#839 and the related #915). Writes the paired token to disk so the cron tool can authenticate against gateway admin routes.

- **[PR #979 – feat(memory): add configurable auto-recall, recall_limit, max_context_bytes](https://github.com/nullclaw/nullclaw/pull/979)**  
  Updated version of PR #961 with the same three configuration options. Currently open for review and testing.

---

## Community Hot Topics

- **[Issue #915 – [bug] Problem with scheduler unauthorized](https://github.com/nullclaw/nullclaw/issues/915)**  
  *Author: scabros | Comments: 3 | 👍: 1*  
  The most discussed item today. User reports scheduler not working in Telegram chat when running NullClaw on Ubuntu with an external Ollama host (Qwen3.6:27b on RTX 3090). The underlying need is a reliable scheduler that can authenticate with the gateway. A fix is already proposed in PR #980, which addresses the root cause (token not persisted to disk). The community is likely waiting for this fix to land.

- **[PR #979 – feat(memory): add configurable auto-recall, recall_limit, max_context_bytes](https://github.com/nullclaw/nullclaw/pull/979)**  
  While not heavily commented yet, this feature addresses a long-standing request to control memory recall behaviour – particularly important for users with large contexts or who need to disable automatic memory enrichment.

---

## Bugs & Stability

### Current Bugs Reported (last 24h)

| Issue | Severity | Description | Fix Status |
|-------|----------|-------------|------------|
| [#915 – Scheduler unauthorized](https://github.com/nullclaw/nullclaw/issues/915) | **High** | Scheduler tool fails to authenticate in Telegram/chat. User on Ubuntu with external Ollama host. Prevents automated tasks. | Fix PR #980 open (persists paired token to disk). |

**No other crash or regression bugs reported today.**  
The single bug is well-understood and has a targeted fix under review.

---

## Feature Requests & Roadmap Signals

### Incoming Features (from open PRs)

1. **xAI Grok CLI Provider** (#981) – Already merged. Expands provider ecosystem.
2. **Memory Recall Configuration** (#979) – Adds `auto_recall`, `recall_limit`, `max_context_bytes` to `memory` config. Highly requested for users who want to tune memory injection overhead or disable it entirely.
3. **Scheduler Token Persistence** (#980) – While a bugfix, this also unblocks any future scheduler enhancements by ensuring robust authentication.

### Predicted for Next Release
Based on current open PRs and activity, the next minor version is likely to include:
- Grok CLI provider
- Memory recall configuration
- Scheduler authentication fix

The memory config feature (#979) may require further testing, while the scheduler fix (#980) could land quickly given the urgency of #915.

---

## User Feedback Summary

- **Pain Point:** Scheduled tasks are broken for users with external LLM hosts (Ollama). The scheduler cannot authenticate because the paired token is never written to disk.
- **Use Case:** Running NullClaw in a headless/server environment (Ubuntu) with a separate Ollama instance; automated chat interactions via Telegram.
- **Satisfaction:** Users are generally positive about tool calling and LLM integration, but the scheduler issue is a blocker for automation.
- **Requests:** More control over memory behaviour (auto-recall, context size) is clearly desired, given two PRs submitted by the same contributor.

---

## Backlog Watch

### Issues and PRs Requiring Maintainer Attention

- **[Issue #915 – Scheduler unauthorized](https://github.com/nullclaw/nullclaw/issues/915)**  
  *Opened 2026-05-15, last updated 2026-07-29*  
  Although updated today, this bug has been open for over two months. A fix PR (#980) exists but has not yet been merged. Maintainers should prioritise review and merge to resolve a critical user-facing issue.

- **[PR #979 – Memory recall config](https://github.com/nullclaw/nullclaw/pull/979)**  
  *Created 2026-07-29*  
  Freshly submitted; no reviewer comments yet. The earlier version (#961) was closed to avoid duplication, so this is the active candidate. Prompt review will prevent the feature from stalling.

- **No long-dormant issues** beyond #915 appear in the current data. Activity is generally healthy.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest – 2026-07-30

## 1. Today's Overview

The project remains in an intense **Reborn product-surface migration** phase, with 50 issues and 50 PRs updated in the last 24 hours. Activity is high: 30 issues were closed, and 15 PRs were merged or closed. The largest cluster of work continues to be the **attested-signing system** (PR groups 4–8) and the **hermetic testing platform** epic (#6524). A number of critical bugs were fixed (see Bugs & Stability), but several open provider‑integration bugs (Gemini tool‑calling) and automation reliability issues signal ongoing stability work. No new releases were published today.

## 2. Releases

**None.** The last release PR (#5598) remains open since July 3, 2026, awaiting merge.

## 3. Project Progress – Merged/Closed PRs Today

Among the 15 merged/closed PRs, the most prominent is:

- **[#6691] Refactor composition assembly into focused builders** — Merged. Reduced `ironclaw_reborn_composition` by 9,421 lines, splitting monolithic factory/runtime logic into focused assembly modules. Workflow ownership moved to contract owners.

Other closed PRs (not listed in detail) likely include smaller dependency bumps and fixes. The high number of closed issues (30) suggests steady progress on the Reborn EPIC tracker (#3031) and related sub‑tasks.

## 4. Community Hot Topics

Most active discussions (by comment count):

| Issue/PR | Comments | Topic |
|----------|----------|-------|
| [#3031] [CLOSED] EPIC: Reborn product surface migration | 7 | Final cutover tracking – now closed. |
| [#6524] [OPEN] Epic: Hermetic capability and journey testing platform | 4 | Community interest in mechanical coverage verification. |
| [#6786] [OPEN] Gemini `provider_id` 400s on every tool call | 3 | Critical integration bug – every Gemini tool call fails. |
| [#6887] [OPEN] Test suite intermittent red under parallelism | 3 (0 shown, but 3 comments implied?) | Infrastructure timeout concerns. |
| [#6790] [OPEN] WebUI blocks during pending Codex auth | 2 | UX pain point for hosted Reborn instances. |

**Underlying needs:** The community is primarily focused on **production reliability** (Gemini, WebUI, automation) and **test infrastructure**. The new hermetic testing epic (#6524) signals a desire for a more deterministic quality gate.

## 5. Bugs & Stability

### Critical / High Severity

- **[#6786] [OPEN] Gemini 400s on every tool call** — Builtin tool schemas ship empty `"type"` to `functionDeclarations`. No fix PR yet.
- **[#6880] [OPEN] Gemini OAuth tool schemas bypass `shape_tool_schema`** — Similar root cause, separate provider `gemini_oauth`. No fix PR yet.
- **[#6879] [OPEN] Automation runs hit‑or‑miss** — Structural issue: triggers execute as plain chat turns, especially on small models.

### Medium Severity – Fixed Today

- **[#6815] [CLOSED] Turn‑state store latched degraded after flush failure** — Required restart; root cause identified, fix merged.
- **[#6805] [CLOSED] Intermittent `service_unavailable` (~30 min)** — Fixed.
- **[#6720] [CLOSED] Task runs indefinitely; stop button fails** — Fixed.
- **[#6806] [CLOSED] Automations not shown in web chat** — Fixed.
- **[#6348] [CLOSED] Gmail auto‑authorization after reinstall** — Security bug fixed.

### Low Severity / Infrastructure

- **[#6887] [OPEN] `ironclaw_reborn_composition` test suite intermittently red under parallelism** — Timeout contention, not a code defect. Acknowledged.
- **[#6790] [OPEN] WebUI blocks during pending Codex device auth** — User experience issue, no fix PR yet.

## 6. Feature Requests & Roadmap Signals

Work visible in open PRs and issues points to these likely next‑version features:

- **Attested signing system** (8‑part series by @zmanian) — Multi‑tenant isolation, Ledger clear‑signing, PostgreSQL/libSQL stores, provider registration, capability‑based dispatch. PRs #6769, #6809, #6811, #6813, #6818, #6822 are open and large.
- **WebUI smooth streaming** — PR #6876 introduces 16ms snapshot window and `streamdown@2.5.0`. Likely shipping soon.
- **CI enforcement gates** — PR #6889 adds coverage ratchets (85.11% aggregate) and mutation gates. PR #6881 completes WS12 scaling, artifact, and coverage gates.
- **Regression promotion loop** — PR #6884 adds a production‑failure → scrubbed thread → regression fix pipeline (WS10).
- **WebUI design system** – PR #6836 introduces `@ironclaw/ui` workspace package and agent‑workspace refactor.

**User‑requested features:** The hermetic testing epic (#6524) is demand‑driven, aiming to mechanically answer “does every capability have deterministic coverage?”.

## 7. User Feedback Summary

Pain points from bug reports (no explicit satisfaction comments):

- **Gemini integration is broken** for both native and OAuth providers – every tool call fails with 400. This affects users who rely on Gemini as their primary LLM.
- **Automation unreliability** – prompts sometimes produce no useful output, especially with smaller models like DeepSeek V4 Flash. The issue is structural, not model noise.
- **WebUI availability** – during startup, pending OAuth flows can block the entire UI, forcing manual intervention.
- **Test flakiness** – maintainers note that parallelism causes timeouts, but this is a CI concern, not user‑facing.

No explicit satisfaction signals (e.g., “this works great” comments) in the tracked items.

## 8. Backlog Watch

Items that have remained open for an extended period or lack maintainer response:

| Issue/PR | Days Since Created | Notes |
|----------|-------------------|-------|
| [#3577] [OPEN] Track v1 ports for legacy channels | 79 (since May 13) | Only 1 comment; no visible progress. Awaiting channel‑porting decisions. |
| [#3964] [OPEN] Attested‑signing PR4/10 (durable challenge store) | 68 (since May 24) | Rebased onto main; huge diff. Maintainer (@zmanian) is active on later groups, but this PR still open. |
| [#5598] [OPEN] Release PR (“chore: release”) | 27 (since Jul 3) | Blocked? No comments; needed to publish breaking changes in `ironclaw_common` and `ironclaw_skills`. |

These may require community or core‑team attention to unblock.

[#3031]: https://github.com/nearai/ironclaw/issues/3031
[#6524]: https://github.com/nearai/ironclaw/issues/6524
[#6786]: https://github.com/nearai/ironclaw/issues/6786
[#6887]: https://github.com/nearai/ironclaw/issues/6887
[#6790]: https://github.com/nearai/ironclaw/issues/6790
[#6880]: https://github.com/nearai/ironclaw/issues/6880
[#6879]: https://github.com/nearai/ironclaw/issues/6879
[#6815]: https://github.com/nearai/ironclaw/issues/6815
[#6805]: https://github.com/nearai/ironclaw/issues/6805
[#6720]: https://github.com/nearai/ironclaw/issues/6720
[#6806]: https://github.com/nearai/ironclaw/issues/6806
[#6348]: https://github.com/nearai/ironclaw/issues/6348
[#3577]: https://github.com/nearai/ironclaw/issues/3577
[#3964]: https://github.com/nearai/ironclaw/pull/3964
[#5598]: https://github.com/nearai/ironclaw/pull/5598
[#6691]: https://github.com/nearai/ironclaw/pull/6691
[#6876]: https://github.com/nearai/ironclaw/pull/6876
[#6889]: https://github.com/nearai/ironclaw/pull/6889
[#6884]: https://github.com/nearai/ironclaw/pull/6884
[#6836]: https://github.com/nearai/ironclaw/pull/6836

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-30

## 1. Today's Overview
The project saw a surge of maintenance activity with **13 pull requests merged/closed** in the last 24 hours, driven by two main contributors (liuzhq1986 and fisherdaddy). No new issues were filed, suggesting the community is either satisfied or focused on polishing existing features. The majority of merges target the **cowork** (side chat / IM) subsystem, improving input handling, export modals, scroll stability, and message flicker. A release branch (`Release/2026.7.24`) was also merged, indicating a recent stable shipment. Two pull requests remain open: an automated dependency bump for Electron and a long‑standing fix for scheduled task notifications (stale since April). Overall, the project is in a healthy iterative cycle with strong attention to reliability.

## 2. Releases
*No new releases were published today.*  
The most recent shipment is captured in PR [#2407](https://github.com/netease-youdao/LobsterAI/pull/2407) (merged yesterday, tagged `Release/2026.7.24`). Users running the latest desktop builds can expect the enhancements listed below.

## 3. Project Progress
### Merged/Closed PRs Today (13 total)
All PRs below were closed/merged on 2026‑07‑29.

| PR | Area | Summary |
|----|------|---------|
| [#2407](https://github.com/netease-youdao/LobsterAI/pull/2407) | renderer, build, docs, main, openclaw, skills, cowork, artifacts, platform:windows | **Release/2026.7.24** – umbrella PR bundling the latest stable changes. |
| [#2406](https://github.com/netease-youdao/LobsterAI/pull/2406) | renderer, docs, main, cowork | **fix(cowork): improve side chat input handling** – Accumulate selected text while panel is open, remove product‑level length limit, retain bounded context and safety checks. |
| [#2405](https://github.com/netease-youdao/LobsterAI/pull/2405) | renderer, docs, cowork | **feat(cowork): add selected text tags to side chat** – Show selected text as removable context, support direct sending and follow‑up editing, plus state safeguards and tests. |
| [#2404](https://github.com/netease-youdao/LobsterAI/pull/2404) | renderer, docs, main, openclaw | **Refactor/kimi k3 auto only compat** – Compatibility adjustments for Kimi K3 “auto only” mode (likely a model‑specific configuration). |
| [#2403](https://github.com/netease-youdao/LobsterAI/pull/2403) | renderer, build, docs, main, openclaw | **revert(openclaw): remove run‑safety‑contract gate for no‑progress token burn** – Reverts a client‑side safety feature (PR #2400) that caused release‑blocking issues (receipt keying, false positives, compaction handling, byte‑accounting mismatches). |
| [#2376](https://github.com/netease-youdao/LobsterAI/pull/2376) | renderer, cowork | **fix(cowork): render export modal above sidebar** – Use body portal to avoid z‑index stacking conflicts. |
| [#2364](https://github.com/netease-youdao/LobsterAI/pull/2364) | renderer, main | **fix(cowork): prevent scroll jumps on session refresh** – Scope refresh events by session ID and preserve loaded message history. |
| [#2363](https://github.com/netease-youdao/LobsterAI/pull/2363) | main | **fix(cowork): prevent periodic IM message flicker** – Compare matching history windows during reconciliation; preserve older messages when repairing gateway tail. |
| [#2360](https://github.com/netease-youdao/LobsterAI/pull/2360) | renderer, main | **fix(auth): preserve local callback across login retries** – Reuse active callback server so repeated/concurrent login attempts don’t break; add diagnostics and regression tests. |
| [#2355](https://github.com/netease-youdao/LobsterAI/pull/2355) | renderer | **fix(window): align Windows caption button hover colors** – Theme‑aware surface colors for minimize/maximize buttons. |
| [#2347](https://github.com/netease-youdao/LobsterAI/pull/2347) | renderer | **chore(updater): reduce automatic update check interval** – Changed from 12h to 2h for faster rollout of patches. |
| [#2346](https://github.com/netease-youdao/LobsterAI/pull/2346) | renderer | **fix(cowork): open email diagnostics in a new chat** – Prevents stale history or IM sessions from overriding the diagnostic conversation. |
| [#1322](https://github.com/netease-youdao/LobsterAI/pull/1322) | cowork | **fix(cowork): true LRU eviction for LLM memory judge cache** – Closed after being stale since April; fixes cache eviction order to mirror actual LRU behavior (hot keys previously evicted first). |

## 4. Community Hot Topics
*No issues have comments or reactions in the last 24 hours.*  
Activity is concentrated on pull requests. The most notable open items:

- **[#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (OPEN)** – `dependabot[bot]` bumps the Electron group (electron 40→43, electron‑builder). This indicates the project is tracking the latest Electron release, a critical dependency for desktop users.
- **[#1232](https://github.com/netease-youdao/LobsterAI/pull/1232) (OPEN, stale)** – Chinese‑language fix for scheduled tasks not showing results on first execution. It has been open since April; the recent update on Jul 29 suggests maintainers may be revisiting it soon.

## 5. Bugs & Stability
**Severity: Medium** – No new bugs were filed, but several stability fixes were merged today:

| Bug / Issue | Fix PR | Description |
|-------------|--------|-------------|
| Side chat input length limit too restrictive | [#2406](https://github.com/netease-youdao/LobsterAI/pull/2406) | Removed product‑level character limit; retains safety checks. |
| Export modal hidden behind sidebar | [#2376](https://github.com/netease-youdao/LobsterAI/pull/2376) | Rendered above sidebar via portal. |
| Chat scroll jumps after session refresh | [#2364](https://github.com/netease-youdao/LobsterAI/pull/2364) | Scope events by session ID. |
| IM message flicker (periodic) | [#2363](https://github.com/netease-youdao/LobsterAI/pull/2363) | Improved reconciliation of history windows. |
| Login retries failing on callback | [#2360](https://github.com/netease-youdao/LobsterAI/pull/2360) | Reuse active callback server. |
| Email diagnostics opening in wrong chat | [#2346](https://github.com/netease-youdao/LobsterAI/pull/2346) | Isolate new chat context. |
| LLM memory cache eviction (LRU bug) | [#1322](https://github.com/netease-youdao/LobsterAI/pull/1322) | True LRU now evicts least‑recently‑used entries instead of oldest insertion order. |

All fixes were confirmed in the same cycle as the release branch. The reverted safety contract (PR #2403) was identified as causing release‑blocking issues; the revert restores stable behaviour.

## 6. Feature Requests & Roadmap Signals
The pair of cowork side chat PRs ([#2405](https://github.com/netease-youdao/LobsterAI/pull/2405) and [#2406](https://github.com/netease-youdao/LobsterAI/pull/2406)) represent the most visible feature advancement: **selected‑text tagging and improved input handling in side chat**. This suggests the team is investing in the “cowork” (collaborative) experience, likely to support copy‑paste and contextual Q&A use cases.

The compatibility refactor for Kimi K3 (`auto only` mode, PR #2404) signals ongoing adaptation to third‑party model APIs. Users wanting to run newer model variants may benefit from this.

**Prediction for next version (2026.7.31+):** The stale scheduled‑task fix (PR #1232) may finally be merged, along with the Electron dependency bump (PR #1277) once CI passes. The reverted safety contract may return in a redesigned form.

## 7. User Feedback Summary
No direct user feedback (issues, comments) was recorded today. Inference from merged PRs:

- **Pain point addressed:** Users on Windows experienced mismatched caption button hover colours (PR #2355). Fixed.
- **Pain point addressed:** Chat scroll jumping and message flickering in IM sessions frustrated users who expected smooth conversation continuity (PRs #2364, #2363). Fixed.
- **Pain point addressed:** The side‑chat length limit blocked users from asking long questions (PR #2406). Removed.
- **Positive signal:** The decrease of update‑check interval (PR #2347) from 12h to 2h shows responsiveness to users who want faster access to fixes.
- **Unsolved:** The scheduled task notification issue (PR #1232) has been pending for nearly four months; affected users likely still experience missing first‑run alerts.

## 8. Backlog Watch
Two open PRs need maintainer attention:

- **[#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (dependabot, Electron bump)** – Open since April 2, last updated July 29. Dependabot updates usually auto‑merge if tests pass; the long open status may indicate either CI failures or manual review required. The jump from Electron 40→43 is significant (3 major versions), so maintainers should verify compatibility.
- **[#1232](https://github.com/netease-youdao/LobsterAI/pull/1232) (Chinese fix for scheduled task notification)** – Open since April 1, last updated April 1 but noted as updated Jul 29 in the data set. This is a long‑standing user‑reported bug; merging it would close a 4‑month gap in scheduled task reliability.

*No new issues were created today, so the backlog is limited to these two items.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-30

**Data snapshot:** No issues updated in the last 24 hours; 5 pull requests updated (3 open, 2 closed); no new releases.

---

### 1. Today's Overview

Development activity remained steady with five PRs updated, two of which were merged or closed. The focus continues to be on upstreaming infrastructure for observability, security hardening, and platform-specific UX improvements. No new issues were filed, suggesting the current development cycle is oriented toward completing in‑flight features rather than addressing emerging problems. The project’s maintainer (penso) is the sole contributor visible in this window, indicating a tightly scoped development effort.

---

### 2. Releases

No new releases were published in the past 24 hours.

---

### 3. Project Progress

Two pull requests were completed (merged/closed) since the last digest:

- **PR #1169 — *feat(acp): expose Moltis as an ACP agent over stdio***  
  [moltis-org/moltis PR #1169](https://github.com/moltis-org/moltis/pull/1169)  
  Adds a new `moltis acp` command that exposes Moltis as an Agent Communication Protocol (ACP) agent over stdio. The implementation routes prompts through the existing `LiveChatService` with session isolation, concurrency limits, and full final-text reconciliation. This expands Moltis’s interoperability with other ACP‑compliant tools and runtimes.

- **PR #1173 — *feat(pwa): make push notifications reliable and non-disruptive***  
  [moltis-org/moltis PR #1173](https://github.com/moltis-org/moltis/pull/1173)  
  Overhauls the PWA push notification system to deliver ordered, private, and non‑disruptive alerts across tabs and devices. Key improvements include re‑alerting for new messages without losing earlier counts, using a generic privacy‑safe title, stripping rich formatting, and maintaining an app‑wide unread badge. This addresses a common pain point for multi‑device users.

---

### 4. Community Hot Topics

No issues are currently open, so all discussion activity is within pull requests. The three open PRs (all authored by penso) are the main focus:

- **PR #1174 — *Add instrumentation and feedback collection infrastructure***  
  [moltis-org/moltis PR #1174](https://github.com/moltis-org/moltis/pull/1174)  
  Introduces backend‑neutral agent instrumentation with Langfuse v4 export, OTLP backends, and end‑user reaction feedback. This is a foundational piece for production observability, suggesting the team is preparing Moltis for broader deployment.

- **PR #1170 — *fix(channels): gate /sh and privileged tools behind a per-account operators list***  
  [moltis-org/moltis PR #1170](https://github.com/moltis-org/moltis/pull/1170)  
  Addresses a security gap where channel senders who passed an access allowlist could reach privileged commands and host tools. The fix introduces an explicit per‑account `operators` list and enforces the boundary across commands, callbacks, queue replay, and external integrations. This signals an increased emphasis on access‑control hardening.

- **PR #1166 — *feat(slack): per-message acknowledgment reactions, phases, reconnect supervision, and Block Kit***  
  [moltis-org/moltis PR #1166](https://github.com/moltis-org/moltis/pull/1166)  
  Builds on previous Slack acknowledgment reactions (#1165) to make the lifecycle robust against queueing, cancellation, retries, and delivery failures. The addition of phase tracking and reconnect supervision addresses Slack’s lack of a native typing indicator, improving user‑perceived responsiveness.

None of these PRs have received public comments or reactions, so community engagement is not yet visible. The underlying needs are clear: better monitoring (PR#1174), tighter security (PR#1170), and richer Slack interaction (PR#1166).

---

### 5. Bugs & Stability

No bugs were filed in the last 24 hours. However, several PRs address existing stability and reliability concerns:

- **High severity – PR #1170** is a security fix for a privilege‑escalation vector in channel commands. Not yet merged; should be treated as critical for anyone running Moltis in a multi‑user channel environment.
- **Medium severity – PR #1173** resolves notification ordering and duplication issues in the PWA client.
- **Medium severity – PR #1166** ensures Slack acknowledgment reactions remain consistent under queueing, retries, and callback bursts.

No regressions have been reported. The fix PRs are all in the open pipeline.

---

### 6. Feature Requests & Roadmap Signals

No user‑submitted feature requests were recorded. The three open feature PRs are all authored by the core maintainer, indicating an internally driven roadmap. Predictions for the next release:

- **Observability & feedback**: PR#1174’s instrumentation and Langfuse export will likely land, making Moltis production‑ready for teams that require LLM call tracing and user ratings.
- **Security hardening**: PR#1170’s operator‑list enforcement is a clear candidate for inclusion, given its security implications.
- **Slack UX**: PR#1166 will further improve the Slack bot experience, especially for users who rely on reaction‑based progress indicators.
- **ACP interoperability**: PR#1169 has already been merged, so future releases will include the ACP stdio interface out of the box.

---

### 7. User Feedback Summary

No explicit user feedback (comments, reviews, or separate issues) appeared in the data window. Inferred pain points from PR descriptions:

- Users of Moltis in Slack channels needed a way to see that the bot is processing a request (hence reaction acknowledgments).
- Multi‑device PWA users were likely experiencing unreliable or duplicate notifications (addressed by PR#1173).
- Channel administrators who used allowlists discovered that privileged commands could be accessed by unintended users (PR#1170).
- Developers deploying Moltis at scale requested more comprehensive observability and feedback collection (PR#1174).

Satisfaction indicators are absent, but the rapid pace of feature and fix PRs suggests the maintainer is responsive to these needs.

---

### 8. Backlog Watch

No issues are open. All three open PRs are recent (created within the last week) and are actively being updated by the author. No long‑unanswered items require maintainer attention.

- **PR #1174** – created 2026-07-27, last updated 2026-07-30. No comments; likely awaiting review.
- **PR #1170** – created 2026-07-26, last updated 2026-07-30. Security fix; may need additional testing before merge.
- **PR #1166** – created 2026-07-24, last updated 2026-07-30. Large Slack feature; may involve more complex review.

None of these are “stale” yet. Project health appears good, with no signs of neglect on open work items.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-30

## 1. Today's Overview

The QwenPaw project (part of CoPaw) shows high community activity with **25 issues updated** (21 open, 4 closed) and **50 pull requests updated** (37 open, 13 merged/closed) in the last 24 hours. No new releases were published. The project is actively maintained, with maintainers quickly closing several critical bugs (e.g., background offload killing subprocesses, session permanent blocking after shell command timeout). However, a significant number of regressions and new bugs—particularly around session data integrity, MCP connectivity, and UI stability—indicate the 2.0.1 release still requires stabilization. First-time contributors are actively submitting fixes, reflecting a healthy open-source community.

## 2. Releases

**None.** No new versions were released in this window.

## 3. Project Progress

**13 PRs were merged or closed** today. Notable fix merges include:

- **#6056 (closed)** — *Background offload kills subprocess immediately* – The LLM-provided timeout was silently ignored; the fix ensures background shell commands are not immediately killed.
- **#6245 (closed)** — *Session permanently blocked when shell command exceeds coordinator deadline* – A regression from the #6056 fix that caused sessions to hang indefinitely.
- **#6496 (closed)** – *Legacy plugins silently disabled on QwenPaw 2.0+* – Implicit max version derivation from `min_version` caused incompatibility; this has been addressed.
- **#6479 (merged)** – *sync MiniMax model baseline* – First-time contributor update bringing the built-in model list in line with the official platform.

Several open PRs are under review that aim to fix regressions and add features (see sections below).

## 4. Community Hot Topics

### Most Discussed Issues

- **[Bug] Skill tags disappear on restart (regression of #3270)** [#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) – **9 comments**. Tags are saved via API but lost during startup reconciliation. This is a high-impact regression for users who rely on skill classification.
- **[Bug] High CPU usage on Edge+Wayland** [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) – **4 comments**. Suspected large result set rendering or WebSocket push on the home/conversation page. Affects Linux users on Wayland.
- **[Feature] Add notice_after_complete tool** [#6475](https://github.com/agentscope-ai/QwenPaw/issues/6475) – **2 comments**. Users want the agent to acknowledge long-running tasks and continue conversing while the task completes in the background.
- **[Bug] MCP backend restart breaks client connection** [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) – **3 comments**. Clients using `streamable_http` fail to reconnect automatically; manual `list mcp` is required.
- **[Enhancement] Auto-save mechanism for conversation history** [#6542](https://github.com/agentscope-ai/QwenPaw/issues/6542) – **3 comments**. Users lose entire sessions after crashes because JSONL logs are not flushed in real time.

### Underlying Needs

- **Reliability**: Bug #6537 (tags vanished) and #6524 (MCP reconnect broken) show that state management across restarts is fragile.
- **User Experience**: High CPU and session loss are critical for daily driving. Automation of long tasks (#6475) and auto-save (#6542) are quality-of-life essentials.
- **Transparency**: Users want clear tool documentation (#6325 PR) and model availability (#6529).

## 5. Bugs & Stability

### High Severity (functionality broken, no workaround)

- **[Windows Installer infinite loop]** [#6534](https://github.com/agentscope-ai/QwenPaw/issues/6534) – NSIS installer wrongly detects QwenPaw as running, making installation impossible.
- **[DeepSeek model error on scroll compression]** [#6541](https://github.com/agentscope-ai/QwenPaw/issues/6541) – Context-compressed blocks are injected as `role=user`, causing API rejection. A fix PR #6540 addresses orphan tool messages but not the role mismatch.
- **[Dream/memory compression misses early-session events]** [#6555](https://github.com/agentscope-ai/QwenPaw/issues/6555) – Critical user data lost when context scrolls out before daily memory generation.
- **[Chinese paths URL-encoded in Feishu channel]** [#6510](https://github.com/agentscope-ai/QwenPaw/issues/6510) – Files with Chinese names become inaccessible. Breaks file attachment workflows.
- **[MCP tools with leading hyphen cause 400 errors]** [#6557](https://github.com/agentscope-ai/QwenPaw/issues/6557) – Strict providers (Kimi) reject tool names violating OpenAI Function Calling spec. PR #6561 proposes sanitization.

### Medium Severity (annoying, partial workaround)

- **[Chat session UI data integrity issues]** [#6558](https://github.com/agentscope-ai/QwenPaw/issues/6558) – Messages lost on mode/session switch, instructions drift, replies re-render from scratch. Affects daily UX.
- **[Unwanted session forking]** [#6559](https://github.com/agentscope-ai/QwenPaw/issues/6559) – Automatic forks flood session list with no parent-child grouping.
- **[Mission command TypeError]** [#6533](https://github.com/agentscope-ai/QwenPaw/issues/6533) – `/mission` broken due to missing arguments in monkey-patched function. PR #6535 and #6562 fix this.
- **[ACP new_session missing models field]** [#6529](https://github.com/agentscope-ai/QwenPaw/issues/6529) – External agent clients cannot discover available models. PR #6531 adds the field.
- **[CI blocks all fork PRs]** [#6563](https://github.com/agentscope-ai/QwenPaw/issues/6563) – The `real-behavior-proof.yml` workflow fails on forks, preventing any external contributions from passing CI.

### Low Severity (minor or visual)

- **[Misplaced cursor in Coding Mode editor]** [#6547](https://github.com/agentscope-ai/QwenPaw/issues/6547) – Floating input caret rendering offset.
- **[Feishu audio messages silent transcription failure]** [#6544](https://github.com/agentscope-ai/QwenPaw/issues/6544) – No error, just no output.

### Notable Fix PRs in Review

- **#6522**: retain dirty flag on token usage flush failure (prevents silent data loss)
- **#6539**: fix race condition in UnifiedQueueManager (stale consumer removes recreated state)
- **#6523**: preserve quoted verify commands in mission arg parsing (fixes #6355)
- **#6540**: last-mile tool-message sanitizer before every model call (fixes #6407)
- **#6561**: ensure exposed MCP tool names start with a letter (fixes #6557)

## 6. Feature Requests & Roadmap Signals

### Requested by Users

- **Background task completion notification** (Issue [#6475](https://github.com/agentscope-ai/QwenPaw/issues/6475)) – Agent should acknowledge long tasks and allow parallel conversation.
- **QQ channel streaming output** (Issue [#6421](https://github.com/agentscope-ai/QwenPaw/issues/6421)) – User wants typing‑effect message delivery on QQ.
- **Chat session UX improvements** (Issue [#6560](https://github.com/agentscope-ai/QwenPaw/issues/6560)) – Copy, undo, stop generation, mission mode, session ID transfer, etc. This detailed issue suggests a future UX overhaul.

### Likely for Next Release

- **Configurable themes/skins** (PR [#6312](https://github.com/agentscope-ai/QwenPaw/pull/6312)) – Drafted by a first-time contributor; maintainer feedback will determine inclusion.
- **Native desktop GUI automation** (PR [#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424)) – Accessibility‑first computer use tool for Windows/macOS. Large feature that may take multiple releases.
- **Reranker for ReMe memory** (PR [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398)) – Over‑fetch + rerank backend. Under review.
- **Built-in tool documentation in Console** (PR [#6325](https://github.com/agentscope-ai/QwenPaw/pull/6325)) – Shows tool docs and parameters, reducing user guesswork.
- **Creation checkpoints and home redesign** (PR [#6556](https://github.com/agentscope-ai/QwenPaw/pull/6556)) – Creator plugin enhancements with bilingual guide.

## 7. User Feedback Summary

### Pain Points

- **Data loss**: Crashes losing session history (#6542), memory compression dropping early events (#6555), token usage flush silently failing (#6374 fixed by #6522).
- **Stability regressions**: Skill tags vanishing (#6537), MCP reconnection requiring manual intervention (#6524), session blocking after shell command timeout (#6245, now closed).
- **UI/UX friction**: High CPU on Edge/Wayland (#6460), installer loops (#6534), Chinese path encoding (#6510), cursor rendering issues (#6547), session forking chaos (#6559).
- **Missing essentials**: No copy/undo/stop in chat (#6560), no QQ streaming (#6421), no background task notifications (#6475).

### Positive Signals

- **Quick bug fixes**: #6056 and #6245 were closed within days, indicating responsive maintainers.
- **First-time contributors**: PRs from new developers (#6479, #6562, #6531, #6486, #6561) are being reviewed. This shows the project is welcoming and attracts community fixes.
- **Active documentation**: Bilingual user guides (#6556) and in-Console tool docs (#6325) are being added.

## 8. Backlog Watch

The following issues and PRs have been open for extended periods with no maintainer response or are blocked by CI:

- **Issue #6460** (high CPU Edge/Wayland) – open since July 25, 4 comments, no assignee. May require deeper profiling.
- **Issue #6421** (QQ streaming) – open since July 24, no maintainer reply. Feature likely low priority but could attract Chinese users.
- **Issue #6475** (notice_after_complete) – open since July 26, no maintainer comment. Implementation complexity unknown.
- **PR #6102** (isolation meta-tests) – open since July 14, still under review. Pinning flaky test patterns is critical for CI reliability.
- **PR #6103** (frontend vitest thresholds) – open since July 14, no update. Low priority but prevents regression.
- **PR #6312** (theme config) – draft since July 21, maintainer feedback pending. Could be a good candidate for next release if reviewed.
- **Issue #6563** (CI blocks fork PRs) – reported today but critical for external contributions. Needs immediate CI workflow fix.

*All links use the base repository `agentscope-ai/QwenPaw` as per the data.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-30

## Today's Overview
The project remains highly active with **50 issues and 50 pull requests updated in the last 24 hours**. Among these, **39 issues are open/active** and **11 were closed**, while **44 PRs are open** and **6 were merged or closed**. No new releases were published today. The community continues to drive **large-scale architectural RFCs** on memory separation, key-source abstraction, A2A outbound capability, and runtime-owned sessions, alongside a steady stream of bug fixes and CI improvements. The overall health is strong, though maintainer bandwidth may be stretched by the volume of high-risk RFCs awaiting review.

## Releases
None — no new versions or release notes.

## Project Progress
Six PRs were merged/closed in the last 24 hours (the top three visible in the dataset):
- **[#9542](https://github.com/zeroclaw-labs/zeroclaw/pull/9542) (docs/security):** Documented untrusted GitHub input doctrine for AI PR reviews.
- **[#9495](https://github.com/zeroclaw-labs/zeroclaw/pull/9495) (fix/channels):** Resolved channel alias resolution for one-off `send` commands.
- **[#9469](https://github.com/zeroclaw-labs/zeroclaw/pull/9469) (fix/runtime):** Scoped peer-agent turns to the recipient’s cost context, fixing cost attribution off-by-one.

Notable among closed issues (with high priority):  
- **[#9186](https://github.com/zeroclaw-labs/zeroclaw/issues/9186) (MCP stdio bug):** Three interacting defects (response ID mismatch, hard 30s timeout, mutex-held-for-call) were fixed, unblocking MCP workflows.  
- **[#9239](https://github.com/zeroclaw-labs/zeroclaw/issues/9239) (config patch json error):** Plaintext error propagation was fixed.  
- **[#9422](https://github.com/zeroclaw-labs/zeroclaw/issues/9422) (Windows compile failure):** `EnvValueGuard` platform gate fixed.

## Community Hot Topics
The most active discussions (highest comment counts) focus on core architectural changes:

| Issue | Comments | Topic |
|-------|----------|-------|
| [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) | 11 | Separate conversation history from long-term memory |
| [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) | 9 | Abstract a `KeySource` trait for master-key material |
| [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) | 6 | A2A outbound client (`A2ATool`) |
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | 6 | OpenAI Chat Completions compatibility adapter |
| [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) | 6 | Cross-turn conversation correlation in OTel |
| [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) | 5 | Separate authoritative memory from enrichment connectors |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | 4 | Unified attachment architecture for web chat & channels |
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | 4 | Runtime-owned conversation sessions & transport adapters |

The **underlying needs** are clear: developers want ZeroClaw to decouple its internal storage, formalize encryption key management, enable external agent collaboration (A2A), support standard HTTP-based clients (OpenAI API shape), and improve telemetry for multi-turn observability. Two new RFCs (#9487, #9488) propose a fundamental shift toward runtime-owned session management and a unified attachment model, indicating a push toward cleaner architectural boundaries.

## Bugs & Stability
**High-severity bugs** (P1) in the last 24 hours:

- **[#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) (CLI cron jobs):** Any cron job created via CLI has `delivery.mode = "none"` — output is silently discarded. **No fix PR yet.** (Risk: high)
- **[#9186](https://github.com/zeroclaw-labs/zeroclaw/issues/9186) (MCP stdio):** Three defects (response ID mismatch, 30s hard timeout, mutex-held-for-call) were **fixed and closed**.
- **[#9239](https://github.com/zeroclaw-labs/zeroclaw/issues/9239) (config patch --json):** Plaintext error on two failure paths — **fixed and closed**.
- **[#9422](https://github.com/zeroclaw-labs/zeroclaw/issues/9422) (Windows compile):** Unit tests cannot compile on Windows — **fixed and closed**.

**Medium-severity bugs** (P2) still open:

- **[#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) (high-entropy detector):** Solana wallet addresses are erroneously redacted on Telegram, and `high_entropy_tokens=false` does not help on the channel path. (Risk: high)
- **[#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) (empty credentials crashloop):** Enabled Signal/Voice Channel with empty credentials causes supervisor crashloop every ~2 seconds. (Risk: high, P3 but long-standing)
- **[#9506](https://github.com/zeroclaw-labs/zeroclaw/issues/9506) (email CC):** Email channel cannot preserve CC recipients or send Reply All. (Risk: high)

**No fix PRs are currently linked** to #9340 or #9486, so these remain active stability risks.

## Feature Requests & Roadmap Signals
The following RFCs and feature requests signal the likely direction of upcoming releases:

| Feature | RFC/Issue | Likely Version |
|---------|-----------|----------------|
| **Separate conversation history from long-term memory** | [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) | v0.9.x |
| **A2A outbound client** (A2ATool) | [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) | v0.9.x |
| **OpenAI Chat Completions compatibility adapter** | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | v0.9.x |
| **KeySource trait for master-key material** | [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) | v0.9.x |
| **Mixture-of-Agents (MoA) virtual model provider** | [#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) | v0.9.x |
| **Move channels & tools to runtime WASM plugins** | [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | v0.9.x |
| **Real-time speech-to-speech (Gemini Live)** | [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) | Later |
| **Runtime-owned conversation sessions** | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | Later |
| **Unified attachment architecture** | [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | Later |
| **Enforce crate dependency direction declaratively** | [#9507](https://github.com/zeroclaw-labs/zeroclaw/issues/9507) | v0.9.x |

Given the concentration of P2/high-risk RFCs, the **next major release (likely v0.9.x)** will probably include memory decoupling, A2A outbound, OpenAI compatibility, and key management improvements. The WASM plugin system (#8850) is also progressing (tracker in-progress).

## User Feedback Summary
Real user pain points expressed in the last 24 hours:

- **Memory mixing:** “ZeroClaw documents session history and long-term memory as different lifecycle concepts, but the implementation still mixes them” — user Audacity88 (#9048).
- **A2A limitation:** “Today a ZeroClaw agent cannot proactively call an external A2A-compliant agent; inter-agent collaboration is forced through a channel” — kingstar001 (#9106).
- **CLI cron output black hole:** “Every cron job created through the CLI gets delivery.mode = ‘none’ … the run is recorded as ok, so nothing indicates the result went nowhere” — AngryPacifist (#9340).
- **Solana wallet redaction:** “An agent with a Solana MCP server cannot state a wallet address. Every address in an outbound Telegram message is replaced with [REDACTED_HIGH_ENTROPY_TOKEN]” — koshak01 (#9486).
- **Windows compilation:** “cargo test -p zeroclaw-config cannot build on Windows” — belumume (#9422, now fixed).
- **Email channel deficiency:** “ZeroClaw’s email channel can send to only one recipient and cannot represent or preserve an email conversation’s recipient list” — JordanTheJet (#9506).
- **Documentation inaccuracies:** “The documentation is wrong [for Telegram]” — cr3a7ure (#8810, closed with correction).

Overall, users are **actively contributing RFCs and bug reports**, indicating high engagement and a sophisticated user base that values architectural clarity. The dissatisfaction centers on missing integration capabilities (A2A, OpenAI API, email CC) and data handling bugs (memory mixing, entropy redaction, cron delivery).

## Backlog Watch
Issues and PRs that need maintainer review or have remained unanswered for an extended period (all with `needs-maintainer-review` and high risk):

| Item | Created | Days Open | Topic |
|------|---------|-----------|-------|
| [#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) | 2026-07-01 | 29 | Mixture-of-Agents virtual model provider |
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | 2026-07-02 | 28 | OpenAI Chat Completions compatibility adapter |
| [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) | 2026-07-06 | 24 | Realtime speech-to-speech (Gemini Live) |
| [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) | 2026-07-10 | 20 | OTel cross-turn correlation |
| [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) | 2026-07-14 | 16 | Memory separation RFC |
| [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) | 2026-07-16 | 14 | Separate authoritative memory from enrichment |
| [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) | 2026-07-16 | 14 | A2A outbound client |
| [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) | 2026-07-18 | 12 | KeySource trait |

The **maintainer decision queue** ([#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)) tracks these items explicitly. The oldest RFCs (e.g., #8568, #8603) have been waiting for maintainer action for nearly a month, which may become a bottleneck for external contributors. Additionally, the **WASM plugin tracker** [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) and the **dependency gate proposal** [#9507](https://github.com/zeroclaw-labs/zeroclaw/issues/9507) are in-progress but lack recent maintainer comments.

**PRs needing maintainer attention** (also `needs-author-action` — indicating the author must update, but maintainer review may be pending):  
- [#9208](https://github.com/zeroclaw-labs/zeroclaw/pull/9208) (P1 fix for tool-schema deep clones, 10 days old)  
- [#8687](https://github.com/zeroclaw-labs/zeroclaw/pull/8687) (Goal controller, 26 days old)  
- [#8689](https://github.com/zeroclaw-labs/zeroclaw/pull/8689) (Goal command admission in channels, 26 days old)  

These large, high-risk PRs may benefit from prioritised review to avoid stalling the goal subsystem.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*