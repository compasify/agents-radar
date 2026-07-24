# OpenClaw Ecosystem Digest 2026-07-24

> Issues: 326 | PRs: 500 | Projects covered: 12 | Generated: 2026-07-24 01:30 UTC

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

# OpenClaw Project Digest — 2026-07-24

## 1. Today's Overview

OpenClaw remains in an **intense maintenance and stabilization phase**, with 326 issues updated and 500 PRs active in the last 24 hours. The project is wrestling with a cluster of **critical P0/P1 regressions** introduced in the 2026.6.x and 2026.7.x releases, particularly around session state corruption, silent message loss, and provider compatibility breaks. While no new releases were cut today, the community is highly engaged — 95 issues were closed and 186 PRs were merged or closed, signaling strong maintainer throughput. The backlog shows persistent pain points around **compaction reliability, subagent orchestration, and cross-channel session degradation**, which remain the top barriers to production stability.

---

## 2. Releases

**No new releases today.** The latest tagged version remains OpenClaw 2026.7.2-beta.3.

*Note: Given the high volume of P0/P1 regressions (e.g., #108435 gateway startup failure, #111519 Telegram DM regression), a hotfix release addressing these blockers is likely imminent.*

---

## 3. Project Progress

**186 PRs were merged or closed today.** Key fixes that advanced through the pipeline include:

| PR | Summary | Impact |
|----|---------|--------|
| [#99422](https://github.com/openclaw/openclaw/pull/99422) | **fix(memory-wiki): skip malformed legacy import-run files in doctor** — Guards against unguarded `JSON.parse` crashes in `readLegacyMemoryWikiImportRunRecords` | Prevents full `openclaw doctor` failure from a single corrupt import-run file |
| [#103532](https://github.com/openclaw/openclaw/issues/103532) | **Novita LLM provider model list retrieval fix** (closed) — Provider credentials accepted but model selector remained empty | Restores Novita provider functionality |
| [#110950](https://github.com/openclaw/openclaw/issues/110950) | **"Everything is a cron" unification proposal** (closed) — Unifying heartbeat, watchers, and scheduled automation around cron jobs | Architectural roadmap signal, likely for next major release |
| [#112386](https://github.com/openclaw/openclaw/issues/112386) | **Gateway management without systemd on Linux** (closed) — Detection and use of manually/externally managed gateways | Improves Linux distribution compatibility |
| [#112696](https://github.com/openclaw/openclaw/issues/112696) | **Control UI avatar + session list regressions** — Workspace-relative avatars not loading, session list incorrectly reports all agents as "Busy" in multi-agent setups | UI fix improving multi-agent management |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count + reactions)

1. **[#44925](https://github.com/openclaw/openclaw/issues/44925) — Subagent completion silently lost** (22 comments, 2 👍)
   - **Core issue:** Three distinct patterns where subagent task results vanish — completion announce fails (E31, E42, E45), no retry mechanism, no user notification, no auto-restart on timeout.
   - **Underlying need:** Operationally robust multi-agent orchestration with guaranteed delivery of subagent results.

2. **[#102020](https://github.com/openclaw/openclaw/issues/102020) — Second message in session fails with "reply session initialization conflicted"** (15 comments, 1 👍)
   - **Core issue:** Cross-channel, position-dependent failure where the second message after session creation always fails.
   - **Underlying need:** Basic conversational flow reliability — the second-turn failure pattern breaks the most fundamental user interaction.

3. **[#94228](https://github.com/openclaw/openclaw/issues/94228) — Native Anthropic path: thinking blocks brick long tool-use threads** (14 comments, 2 👍)
   - **Core issue:** `Invalid signature in thinking block` 400 error on the native Anthropic provider path for long-lived multi-turn sessions — permanent brick of the thread.
   - **Underlying need:** Reliable long-running tool-use sessions with Anthropic's native API, especially for complex multi-step tasks.

4. **[#92043](https://github.com/openclaw/openclaw/issues/92043) — 180s compaction timeout is a single wall clock over whole chunk pipeline** (13 comments, 3 👍)
   - **Core issue:** The compaction timeout (lowered from 900s to 180s) is not per-chunk — a legitimately long compaction fails identically every turn with no partial-progress reuse.
   - **Underlying need:** Configurable or adaptive compaction timeouts that respect actual workload size rather than failing repeatably.

5. **[#108435](https://github.com/openclaw/openclaw/issues/108435) — Update to 2026.7.1: gateway fails to start (P0 regression)** (10 comments, 2 👍)
   - **Core issue:** Gateway fails to start with systemd, ollama, and manual launch after 2026.7.1 update.
   - **Underlying need:** Safe upgrade path — a startup-blocking regression creates immediate trust loss.

### Most Active PRs (by comment count — many show "undefined" in data)

**Notable:** While comment counts are sparse in the PR data, several large-scope PRs are accumulating review attention:

| PR | Summary | Status |
|----|---------|--------|
| [#112773](https://github.com/openclaw/openclaw/pull/112773) | **feat(claws): separate portable and OpenClaw profiles** (XL size) | Open |
| [#112661](https://github.com/openclaw/openclaw/pull/112661) | **fix(cron): senderless runs lose authorized tools** (XL size, touches 16+ areas) | Open — maintainer attention needed |
| [#107744](https://github.com/openclaw/openclaw/pull/107744) | **feat: AI safety/quality event taxonomy** (XL size, high merge risk) | Open — waiting on author |
| [#112963](https://github.com/openclaw/openclaw/pull/112963) | **chore: update dependencies and migrate major contracts** (L size, maintainer-authored) | Open — foundational plumbing change |

---

## 5. Bugs & Stability

### Critical (P0) — Immediate Threat

| Issue | Symptom | Fix PR? |
|-------|---------|---------|
| [#108435](https://github.com/openclaw/openclaw/issues/108435) | **Gateway fails to start** after 2026.7.1 update — systemd, ollama, manual launch all affected | None yet — 10 comments, active |
| [#90378](https://github.com/openclaw/openclaw/issues/90378) | **Cron store migration silently drops config** — JSON→SQLite migration loses job config, new jobs default to `delivery.mode=announce` causing channel errors | PR linked but needs product decision |
| [#103532](https://github.com/openclaw/openclaw/issues/103532) | **Novita provider model list empty** (closed) | Resolved |

### High Severity (P1) — Widespread Impact

| Issue | Symptom | Status |
|-------|---------|--------|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent completion silently lost — no retry, no notification | Open, needs product decision |
| [#94228](https://github.com/openclaw/openclaw/issues/94228) | Anthropic thinking blocks brick long tool-use threads (400 error) | Open, needs live repro |
| [#92043](https://github.com/openclaw/openclaw/issues/92043) | 180s compaction timeout single wall clock — fails repeatably | Open, needs product decision |
| [#108580](https://github.com/openclaw/openclaw/issues/108580) | Cron tool schema incompatible with llama.cpp grammar-constrained tool calling (2026.7.1 regression) | PR linked |
| [#111519](https://github.com/openclaw/openclaw/issues/111519) | Telegram DM replies fall back after stale DM-scope cleanup (2026.7.2-beta.3 regression) | Open, needs info |
| [#98435](https://github.com/openclaw/openclaw/issues/98435) | MCP loopback transport does not auto-reconnect after gateway restart — recovered=1 is misleading | Open, needs product decision |
| [#101814](https://github.com/openclaw/openclaw/issues/101814) | All channels enter broken state after 2026.6.11 update — one message per session then silence | Open, needs live repro |
| [#67419](https://github.com/openclaw/openclaw/issues/67419) | Session context bloat — bootstrap files re-injected every turn, wasting 20-30% tokens | Open, needs product decision |

### Medium Severity (P2) — Notable

| Issue | Symptom | Status |
|-------|---------|--------|
| [#81514](https://github.com/openclaw/openclaw/issues/81514) | Cron isolated-job status non-deterministic after tool error recovery | Open, source repro available |
| [#91799](https://github.com/openclaw/openclaw/issues/91799) | Discord agents cannot access MCP tools (works via CLI) | Open, needs maintainer review |
| [#102081](https://github.com/openclaw/openclaw/issues/102081) | Exec allowlist matches never auto-execute on macOS | Open, needs live repro |
| [#97826](https://github.com/openclaw/openclaw/issues/97826) | sendVideo omits width/height for large videos — wrong aspect ratio | Open, needs live repro |

### Regression Patterns Observed

Three distinct regression clusters are visible in today's data:
1. **2026.6.11 → 2026.7.1 breakage** — Gateway startup failure (#108435), cron tool schema incompatibility (#108580), channel silent-death (#101814)
2. **2026.7.2-beta.3 Telegram regression** — DM reply fallback (#111519)
3. **MacOS-specific policy regression** — Exec allowlist auto-execution permanently unavailable on darwin (#102081, labeled "maturity:stable")

---

## 6. Feature Requests & Roadmap Signals

### High-Community-Interest Features (likely in next release)

| Issue | Feature | Community Signal |
|-------|---------|-----------------|
| [#110950](https://github.com/openclaw/openclaw/issues/110950) | **"Everything is a cron"** — Unify heartbeat, watchers, scheduled automation (closed, maintainer-driven) | Already accepted direction — likely 2026.8.x |
| [#7524](https://github.com/openclaw/openclaw/issues/7524) | **groupScope option** — Consolidate group sessions into main session (5 comments, 4 👍) | Strong demand for multi-agent group chat unification |
| [#45390](https://github.com/openclaw/openclaw/issues/45390) | **Session TTL / max lifetime** — Automatic session rotation (5 comments, 1 👍) | Addresses long-running session bloat problem |
| [#49259](https://github.com/openclaw/openclaw/issues/49259) | **Prune stale orphaned sessions** from Dashboard (7 comments) | Operational hygiene improvement |
| [#38568](https://github.com/openclaw/openclaw/issues/38568) | **Inject context window % into system prompt** (6 comments, 2 👍) | Agents need visibility into their own context pressure |
| [#41418](https://github.com/openclaw/openclaw/issues/41418) | **Global --dry-run mode** — Prevent all tool calls from executing (5 comments, 1 👍) | Safety/auditing use case |

### Infrastructure & Security Features

| Issue | Feature | Status |
|-------|---------|--------|
| [#12219](https://github.com/openclaw/openclaw/issues/12219) | **Skill Permission Manifest Standard (skill.yaml)** — Declarative permission model for skills | Open, needs security review |
| [#43673](https://github.com/openclaw/openclaw/issues/43673) | **First-class org/team deployment** — Workspace scaffolding, RBAC, deployment manifests | Open, needs product decision |
| [#87325](https://github.com/openclaw/openclaw/issues/87325) | **Azure Foundry GPT Realtime Talk** — via gateway relay (8 comments) | Growing enterprise demand |

### Predictions for Next Release (2026.7.x or 2026.8.x)

1. **Compaction timeout redesign** — Per-chunk timeout with partial-progress reuse (driven by #92043)
2. **Session resilience fixes** — Multi-regression fixes for second-turn failures (#102020), channel death (#101814)
3. **Telegram DM reliability** — Stale DM-scope cleanup fix (#111519)
4. **Gateway health monitoring** — MCP loopback auto-reconnect (#98435), launchd duplicate prevention (#97285)

---

## 7. User Feedback Summary

### Pain Points (recurring across multiple issues)

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **Session state corruption after upgrade** | 4+ distinct regressions from 2026.6.11 → 2026.7.1 (#108435, #101814, #108580, #111519) | 🔴 Critical |
| **Silent message/subagent loss** | Subagent completion vanishes with no notification (#44925), message tool sends succeed but content lost (#42820) | 🔴 Critical |
| **Compaction unpredictability** | Timeouts fail repeatably (#92043), pruning mode 'off' still compacts (#48579), no lead time warning (#38520) | 🟠 High |
| **Cross-channel inconsistency** | MCP tools work in CLI but not Discord (#91799), Control UI messages reach context but not Open WebUI visible history (#49205) | 🟠 High |
| **Context window waste** | Bootstrap files re-injected every turn (20-30% token waste, #67419), browser interactions exhaust context (#41949) | 🟠 High |

### Satisfaction Signals

- **Active community engagement** — 326 issues, 500 PRs updated in 24 hours indicates a highly active user base that is invested in the project
- **Maintainer responsiveness** — 95 issues closed, 186 PRs merged/closed today shows fast turnaround on reported problems
- **Feature demand for production features** — Org deployment (#43673), RBAC, session TTL, and permission manifests signal enterprise adoption interest
- **"Everything is a cron" acceptance** — Maintainer-authored feature (#110950) closed with community support shows alignment between maintainers and users

### Dissatisfaction Signals

- **Upgrade fear** — Multiple users report hesitation about upgrading after experiencing regressions (e.g., "Initially upgraded... no issues... this morning sessions started breaking for no reason" — #98672)
- **Debugging difficulty** — Silent failures (message loss, subagent loss, recovered=1 but transport broken) make it hard for operators to diagnose problems
- **Documentation gaps** — Migration steps for cron store (#90378), exec allowlist behavior on macOS (#102081) not well documented

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (Long-Pending, High Severity)

| Issue | Age | Severity | Last Maintainer Action |
|-------|-----|----------|------------------------|
| [#43374](https://github.com/openclaw/openclaw/issues/43374) — **All LLM API calls time out simultaneously** (multi-agent concurrency) | Created 2026-03-11 (~135 days) | P1 | Needs product decision, needs live repro |
| [#42273](https://github.com/openclaw/openclaw/issues/42273) — **backup create stalls on large installations (4GB+)** | Created 2026-03-10 (~136 days) | P2 | Needs product decision, needs live repro |
| [#42820](https://github.com/openclaw/openclaw/issues/42820) — **Feishu send action polluted by poll schema** | Created 2026-03-11 (~135 days) | P1 | Needs product decision, needs live repro |
| [#41372](https://github.com/openclaw/openclaw/issues/41372) — **25 findings from 4 weeks of production use** (comprehensive field report) | Created 2026-03-09 (~137 days) | P2 | Needs product decision, needs live repro |
| [#48579](https://github.com/openclaw/openclaw/issues/48579) — **Context pruning mode 'off' not preventing compactions** | Created 2026-03-17 (~129 days) | P2 | Needs product decision, needs live repro |

### PRs Stalled / Needing Maintainer Review

| PR | Age | Issue Solved | Status |
|----|-----|-------------|--------|
| [#89039](https://github.com/openclaw/openclaw/pull/89039) — **Prevent silent message loss from EmbeddedAttemptSessionTakeoverError** | Created 2026-06-01 (~53 days) | P1 | ⏳ Waiting on author |
| [#92307](https://github.com/openclaw/openclaw/pull/92307) — **Warn when host approvals clamp exec security** | Created 2026-06-12 (~42 days) | P2 | 👀 Ready for maintainer look |
| [#89040](https://github.com/openclaw/openclaw/pull/89040) — **Avoid event-loop stall during embedded_run bootstrap** | Created 2026-06-01 (~53 days) | P1 | 👀 Ready for maintainer look |
| [#97285](https://github.com/openclaw/openclaw/pull/97285) — **Refuse duplicate launchd gateway managers** | Created 2026-06-27 (~27 days) | P2 | 👀 Ready for maintainer look |

### Critical Backlog Risk

Five issues marked **P1** or **P2** have been open for 4+ months without resolution, all carrying the `needs-product-decision` or `needs-live-repro` labels. These represent chronic stability concerns that continue to affect users:

1. **Multi-agent concurrency timeout** (#43374) — All agents time out simultaneously under load
2. **Backup stalls on large installations** (#42273) — Directly impacts production backup strategies
3. **Feishu poll schema pollution** (#42820) — Platform-specific but blocks a major messaging channel
4. **Compaction cannot be disabled** (#48579) — Users explicitly configuring `mode: "off"` still experience compactions
5. **Production field report** (#41372) — 25 distinct findings from real 4-week deployment, none fully resolved

The persistent age of these issues without maintainer activity (all last updated in this cycle but with no resolution) suggests they may require architectural changes that are being deferred to a larger refactoring effort — likely the upcoming "Everything is a cron" unification or session state rewrite.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the provided community digest summaries.

---

## Cross-Project Comparison Report: Personal AI Agent Ecosystem (2026-07-24)

### 1. Ecosystem Overview

The open-source personal AI agent ecosystem is currently in a **high-velocity stabilization phase** following a period of rapid feature expansion. The landscape is bifurcated: mature, widely-deployed projects like **OpenClaw** are grappling with release-induced regressions and session state corruption, while smaller, more focused projects like **Moltis** and **NanoBot** are pushing security hardening and feature increments. A common theme across the board is a focus on **fundamental reliability**—fixing session persistence, message delivery guarantees, and container lifecycle management—rather than introducing novel capabilities. The "Big Fish" (OpenClaw) is slowing down to fix its foundation, while the "Fast Fish" (ZeroClaw, NanoBot) are iterating rapidly to claim niche dominance in specific areas like desktop GUI or multi-agent orchestration.

### 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | New Release (24h) | Health Score | Primary Phase |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 326 | 500 | No | 🟡 Degraded | Regression Stabilization |
| **ZeroClaw** | 50 | 50 | No | 🟡 Active-Stabilizing | High-Intensity Bug Fixing |
| **Hermes Agent** | 50 | 50 | No | 🟡 Active | Incremental Improvement |
| **NanoBot** | 8 | 37 | No | 🟢 Healthy | Maintenance & Polish |
| **CoPaw** | 35 | 50 | Yes (v2.0.1-beta.2) | 🟡 Strained | Post-v2.0 Bug Fixing |
| **PicoClaw** | 0 | 15 | No | 🟢 Stable | Dependency Housekeeping |
| **Moltis** | 2 | 5 | Yes (2 releases) | 🟢 Healthy | Balanced Development |
| **NanoClaw** | 1 | 10 | No | 🟢 Healthy | Active Development |
| **LobsterAI** | 3 | 3 | No | 🟡 Stagnant | Low Community Engagement |
| **IronClaw** | 32 | 50 | No | 🟡 Strained | v1 Launch Preparation |
| **ZeptoClaw** | 2 | 1 | No | 🟢 Stable | Maintenance |
| **NullClaw** | 0 | 0 | No | ⚪ Dormant | No Activity |

**Note:** Health Score is a qualitative assessment based on the ratio of bug fixes to features, severity of open bugs, and community responsiveness. `Degraded` indicates critical path regressions. `Strained` indicates high bug volume with active fixing.

### 3. OpenClaw's Position

- **Advantages:** As the core reference implementation, OpenClaw has the largest community by an order of magnitude (326 issues, 500 PRs updated daily), the most extensive provider support, and the deepest feature set (subagent orchestration, MCP, cron unification). Its sheer scale makes it the de facto standard for complex agent workflows.
- **Weaknesses:** This scale comes at a cost. The project is currently suffering from **severe regression fatigue**. Key production features like session persistence and provider compatibility are breaking between minor releases, eroding user trust. The "needs-product-decision" and "needs-live-repro" tags on 4-month-old P1 bugs indicate a **decision-making bottleneck** in the maintainer team.
- **Technical Approach Difference:** OpenClaw is monolithic and Python-centric, prioritizing deep integration and a plugin-rich ecosystem. This contrasts sharply with **ZeroClaw** (Rust, performance-focused) and **NanoBot** (Python, lightweight), which are architected for stability and sandboxing from the ground up.
- **Threat:** Projects like **ZeroClaw** and **NanoBot** are rapidly closing the feature gap (A2A protocol, MCP tools, workspace security) without the same baggage. If OpenClaw does not resolve its core stability issues soon, it risks losing its production-user base to these lighter, more reliable alternatives.

### 4. Shared Technical Focus Areas

These are cross-cutting requirements emerging from multiple projects, indicating industry consensus.

| Requirement | Affected Projects | Specific Pain Point |
| :--- | :--- | :--- |
| **Reliable Session State Persistence** | OpenClaw, Hermes, NanoBot, ZeroClaw | Session cost, context, and message history lost on restart or upgrade. |
| **Compaction Predictability** | OpenClaw, Hermes | Timeouts are too strict or not configurable; aggressive optimization degrades reliability. |
| **Multi-Agent / Subagent Reliability** | OpenClaw, CoPaw, Moltis | Agent results silently dropped; no retry or notification mechanisms. |
| **Message Delivery Guarantees** | OpenClaw, ZeroClaw, CoPaw | Telegram, WeChat, and Discord messages lost or delivered out of order. |
| **Security & Sandboxing** | NanoBot, ZeroClaw, ZeptoClaw, Moltis | Credential leakage, workspace bypass, and "Always Allow" UX risks in approval dialogs. |
| **Container / Runtime Lifycycle** | NanoClaw, ZeptoClaw, CoPaw | Orphan containers, process tree cleanup, and duplicate spawns. |
| **Model Fallback / Override** | PicoClaw, NanoBot, CoPaw | Users want per-conversation model switching and graceful fallback chains. |
| **Agent-to-Agent Protocol (A2A)** | ZeroClaw | Growing demand for agent interoperability, currently unique to ZeroClaw but a clear trend. |

### 5. Differentiation Analysis

| Project | Primary Focus | Target User | Key Differentiator |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | Full-stack, complex workflows | Power users, enterprise teams | Deepest feature set, largest plugin ecosystem |
| **ZeroClaw** | Performance, security, A2A | Developers, infra engineers | Rust-based, strong sandboxing, protocol-first |
| **NanoBot** | Lightweight, secure, WebUI-first | Hobbyists, single users | Excellent UX, quick setup, responsive maintainers |
| **Hermes Agent** | Desktop GUI, Desktop OS integration | Desktop-first users | Agent for desktop control (SSH, GUI) |
| **CoPaw** | Visual tools, video/3D generation | Creative professionals | Strong in AI skin, video pipeline (QwenPaw Creator) |
| **IronClaw** | v1 Launch, enterprise SLA | Enterprise SaaS | Undergoing formal launch qualification |
| **Moltis** | Chat platform integration | Team communication users | Focus on Slack, Matrix, and Teams integration |
| **NanoClaw** | Container orchestration | DevOps / Ops teams | Focus on container lifecycle and reliability |
| **PicoClaw** | Edge device deployment | IoT / Edge users | Lightweight, KVM/Raspberry Pi focus |
| **LobsterAI** | Multi-agent team chat | Complex multi-agent teams | Agent-specific IM bot and model binding |
| **ZeptoClaw** | Security hardening | Security-conscious devs | Scrubbing environments, process tree safety |
| **NullClaw** | Inactive | N/A | N/A |

### 6. Community Momentum & Maturity

- **Tier 1: Super-Active (Scale = Degraded Reliability)**
    - **OpenClaw:** Still the center of gravity, but its momentum is consuming its own output in a cycle of regression-fix-regression.
    - **ZeroClaw:** Very high activity with a clear focus on closing critical S0/S1 bugs. Has strong momentum and an active contributor base.
- **Tier 2: High-Velocity (Healthy Iteration)**
    - **NanoBot:** Rapidly squashing bugs and merging community features. High responsiveness and clear communication.
    - **Hermes Agent:** Steady, incremental improvement with strong focus on desktop and gateway reliability.
    - **CoPaw:** Post-launch bug-fixing mode. High activity but strained by the volume of v2.0 migration issues.
- **Tier 3: Stable & Focused**
    - **Moltis, NanoClaw, PicoClaw:** Smaller, more manageable codebases. These projects are iterating without the regression baggage of Tier 1.
- **Tier 4: Low Activity / At Risk**
    - **LobsterAI:** 3-month-old critical bugs with no fix. High risk of user abandonment.
    - **NullClaw:** Dormant. Project is effectively dead or on hold.

### 7. Trend Signals

From the community feedback, the following industry trends are clear:

1.  **The "Reliability Tax" is Growing:** Users are increasingly frustrated by features that break between releases. The value of a "boring, stable" agent is rising. Projects that prioritize testing and session persistence (e.g., **NanoBot**, **Moltis**) are likely to gain market share in production environments.
2.  **Security is No Longer Optional:** The volume of workspace bypasses, credential leaks, and approval dialog UX flaws indicates that basic security assumptions are being challenged. **ZeroClaw** and **ZeptoClaw** lead in this area, and others are playing catch-up.
3.  **A2A (Agent-to-Agent) is the Next Frontier:** **ZeroClaw's** tracker for A2A is the most-upvoted feature request across all projects. The industry is realizing that siloed agents are limited; the future is a "protocol of agents" where different agents from different projects can collaborate.
4.  **Desktop GUI is a Key Battleground:** **Hermes Agent** and **ZeroClaw** are pushing desktop experience (SSH, GUI, computer use). The "agent as an OS-level assistant" is becoming a tangible use case, but reliability is poor (websocket storms, window controls missing).
5.  **Model Agnosticism is a Core Requirement:** Users want to switch between cloud and local models per conversation. Features like **NanoBot's** per-turn fallback and **PicoClaw's** fallback chain show a clear rejection of vendor lock-in.
6.  **Cron / Automation Reliability is Foundational:** Multiple projects (**OpenClaw, Hermes, ZeroClaw**) report silent failures in scheduled tasks. For agents to be "employees," they need to be reliable "night auditors." This is a major gap.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the NanoBot project digest for 2026-07-24.

---

## NanoBot Project Digest — 2026-07-24

### 1. Today's Overview
The project saw extremely high activity, with 37 Pull Requests updated in the last 24 hours and 30 merged or closed—indicating a major push to stabilize the codebase. The maintainers focused heavily on security hardening, bug fixing, and improving the WebUI, with several critical fixes moving through quickly. Eight issues were updated, reflecting a healthy balance of bug reports and feature requests, though no new releases were cut today. Overall, the project is in a high-velocity maintenance and polish phase.

### 2. Releases
**None.** No new releases were published in the last 24 hours.

### 3. Project Progress
The core team merged a significant volume of work today, advancing security, WebUI features, and platform compatibility.

- **Security & Workspace Hardening:**
    - Merged fix for the shell guard bypass (`PR #4594`), where absolute paths after an equals sign (`curl --output=/etc/passwd`) could escape the workspace restriction.
    - Merged authorization for destructive priority commands (`PR #4889`), adding an explicit allowlist for `/restart` and `/stop` in chat channels.
- **WebUI & Model Management:**
    - Merged a major simplification of model preset settings (`PR #5061`), replacing the complex "current configuration" workflow with reusable presets and explicit call order.
    - Merged feature for per-turn model fallback indication (`PR #5017`), showing which model is actually handling a turn when fallback occurs.
    - Merged responsive layout and settings search polishing (`PR #5060`).
    - Merged unification of settings and dark mode visual surfaces (`PR #5058`).
- **Bug Fixes & Stability:**
    - Merged fix for stale exec sessions (`PR #5066`) to retain them after a cleanup failure so they can be retried.
    - Merged fix for session listing failures (`PR #5068`) when files are removed concurrently.
    - Merged fix for Telegram markdown splitting hanging on long code fences (`PR #5055`).
    - Merged fix for DOCX table content preservation (`PR #5039`).
    - Merged fix for WebUI composer model badge sync (`PR #5067`).
    - Merged fix for WebUI media directory access when `restrictToWorkspace` is enabled (`PR #5065`).
    - Merged fix for legacy filename metadata loss (`PR #4940`), restoring `workspace_scope` for sessions created with older naming.
    - Merged fix to replace JSON round-trip deep-copies with `copy.deepcopy()` in WebUI transcripts (`PR #4901`).

### 4. Community Hot Topics
- **Issue #4253 (Closed): Feature request for overriding model per conversation.**
    - *Link:* HKUDS/nanobot Issue #4253
    - *Analysis:* This long-standing, high-value feature request was closed today. The user wants to easily switch between fast cloud models and private local models per conversation. The closure, combined with the merge of the new model preset simplification (`PR #5061`), strongly suggests the new preset system now supports this workflow via per-turn overrides or presets.

- **Issue #5028 (Open): Conflict between `media` path and workspace restrictions.**
    - *Link:* HKUDS/nanobot Issue #5028
    - *Analysis:* This issue highlights a real user pain point: files uploaded via channel integrations (like Feishu) are stored outside the workspace scope, making them inaccessible when `restrictToWorkspace` is enabled. The underlying need is for better path resolution logic that treats the media directory as a privileged exception.

### 5. Bugs & Stability
A large batch of bugs was addressed today, with severity ranging from critical to low.

- **[Severity: P0] Filesystem workspace validation bypass (PR #4987 - Open):** A fix is in progress to bind workspace checks to opened file handles using `O_NOFOLLOW` to prevent TOCTOU (time-of-check/time-of-use) races. This is a high-priority security fix.
- **[Severity: P1] Length recovery data loss (Issue #5051 / PR #5056 - Open):** A bug where `AgentRunner` only preserved the *last* segment of a truncated model response, losing earlier recovered output. A fix is open to accumulate all recovered segments.
- **[Severity: P1] MCP tool schema rejection by strict providers (PR #5057 - Open):** MCP tools using arbitrary JSON pointers are rejected by providers like Kimi/Moonshot, causing the entire chat request to fail. A fix is open to normalize local schema refs.
- **[Severity: P1] Stale exec session cleanup failure (PR #5066 - Closed):** Fixed. Sessions were being removed from state before the process actually terminated, causing leaks.
- **[Severity: P1] Session listing crashes on concurrent file removal (PR #5068 - Closed):** Fixed.
- **[Severity: P2] Test failure on systems without `python` symlink (Issue #5062 / PR #5064 - Open):** Two tests fail on Ubuntu/Debian. A follow-up PR is open to use `python3`.

### 6. Feature Requests & Roadmap Signals
- **Per-Conversation Model Override (Issue #4253):** The closure of this issue, alongside the new model preset system in `PR #5061`, is a strong signal that the next version will feature a simplified, flexible model-switching system.
- **Browser Support Documentation (Issue #5059):** A user requested a list of supported browser versions. This is a minor but common documentation gap; likely to be solved by adding a compatibility table to the README or WebUI documentation page.
- **Dynamic Tool Provider Lifecycle (MCP Refactor - Issue #4858):** This open refactoring issue remains a roadmap priority. Moving MCP lifecycle out of `AgentLoop` into a dedicated provider is key to improved stability and extensibility. This likely targets a future minor release (e.g., v0.3.0).

### 7. User Feedback Summary
- **Pain Points:**
    - Workspace restrictions are still confusing for users who integrate with channel uploads (Issue #5028).
    - Token-limit recovery truncation loses context, which is frustrating for long-running tasks (Issue #5051).
    - Niche Linux setups (no `python` symlink) cause silent test failures, indicating a need for better cross-distro testing.
- **Use Cases:**
    - Users need to quickly switch between low-latency (cloud) and private (local) models for different tasks (Issue #4253).
    - Users need to read and edit DOCX files containing tables, which was broken and is now fixed (PR #5039).
- **Satisfaction:**
    - The rapid merging of 30 PRs in a single day demonstrates a highly responsive team that is actively squashing bugs and accepting community contributions.

### 8. Backlog Watch
- **Issue #4858 (Open, Updated Jul 23): Refactor MCP lifecycle out of AgentLoop.** This long-standing architectural issue is a pre-requisite for more robust MCP support. It has a fix in progress (a pending PR) but is still open, indicating it is a complex, multi-step refactor.
- **PR #4987 (Open, Updated Jul 19): Bind workspace checks to opened files.** This is a critical P0 security fix that has been open for several days. While it likely requires thorough review, its prolonged open status warrants attention from maintainers to prevent a potential regression window.
- **Issue #4592 (Closed, Updated Jul 23): ExecTool path extraction misses absolute paths after equals sign.** This was a significant security bypass that was fixed and merged today. The fact that this exploit existed for nearly a month underscores the need for more rigorous security audits of the workspace confinement system.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — July 24, 2026

## Today's Overview

Hermes Agent saw sustained high activity with 50 issues and 50 PRs updated in the last 24 hours, signaling a healthy, actively maintained project. Of the 50 issues touched, 32 remain open and 18 were closed; similarly, 36 PRs remain open while 14 were merged or closed. No new releases were published today, suggesting the team is focused on bug fixing and incremental improvements ahead of a potential v0.20.0 milestone. The community is highly engaged, with multiple critical bugs around session state persistence and gateway reliability receiving concentrated attention via both reports and fix PRs.

## Releases

No new releases were published today. The latest available version remains Hermes Agent v0.19.0.

## Project Progress

14 PRs were merged or closed today, indicating active project advancement:

- **Mem0 Memory Scoping (PR #69744, CLOSED):** Added `filter_by_agent_id` option to Mem0 memory provider, enabling multi-profile deployments (e.g., secretary vs. sales) to isolate memory search results — a key feature for enterprise multi-agent setups.
- **Anthropic Empty Text Block Fix (Issue #69512, CLOSED):** Sanitized empty/whitespace-only text blocks post-compression, preventing permanent HTTP 400 errors from Anthropic's API.
- **WhatsApp Setup Guide (Issue #70389, CLOSED):** Improved documentation for WhatsApp platform setup, addressing a common onboarding pain point.
- **Gemini MoA Aggregator Fix (Issue #65092, CLOSED):** Fixed missing `thought_signature` in Gemini aggregator mode for MoA routing.
- **Context Compression Safety (Issue #59496, CLOSED):** Fixed call to context engine with empty window after boundary adjustment, preventing crashes.
- **MoA Provider Resolution (Issue #56828, CLOSED):** Fixed `moa:preset` provider resolution in non-interactive mode.
- **Auto-formatting (PR #70417, CLOSED):** Automated JS formatting cleanup via CI.
- **Live Fix PRs today (open but progressing):** At least 6 fix PRs targeting today's reported bugs were opened (see Bugs section).

## Community Hot Topics

The most active discussions reveal deep concerns about session reliability and gateway stability:

1. **[#69314 — Telegram Gateway CLOSE_WAIT Socket Leak](https://github.com/NousResearch/hermes-agent/issues/69314)** (6 comments, OPEN — P3, sweeper-attached)
   - **Analysis:** A high-impact reliability bug where Telegram gateway behind HTTP proxy enters permanent degradation with hundreds of CLOSE_WAIT sockets. The agent stays alive but effectively dead. This represents a critical blind spot in proxy-based deployments. A potential fix was submitted in PR #70433, which adds a keepalive timer to prevent the event loop from freezing during CLOSE_WAIT.

2. **[#67762 — Session Cost Resets to $0 on Gateway Restart](https://github.com/NousResearch/hermes-agent/issues/67762)** (6 comments, OPEN — P2, area/billing)
   - **Analysis:** `agent.session_estimated_cost_usd` not rehydrated from SQLite on restart. Labeled a "BLOCKER" by the reporter, this breaks any billing display feature. Session state persistence continues to be a recurring theme in issues across the project.

3. **[#30640 — Cursor SDK Integration RFC](https://github.com/NousResearch/hermes-agent/issues/30640)** (6 comments, CLOSED — P3 feature)
   - **Analysis:** A long-lived RFC for integrating Cursor Composer as a delegate tool. The community clearly wants IDE-level coding capabilities bridged into Hermes. This has "next version" potential given the sustained interest.

4. **[#70294 — Cron Delegate Task Silent Drop](https://github.com/NousResearch/hermes-agent/issues/70294)** (6 comments, OPEN — P2, needs-repro)
   - **Analysis:** Top-level `delegate_task` calls inside cron jobs silently fail — results are dropped but the job reports "ok." This is a reliability issue for scheduled workflows that could silently corrupt outputs.

5. **[#513 — Two-Phase Context Management Feature](https://github.com/NousResearch/hermes-agent/issues/513)** (5 comments, CLOSED — P3 feature, inspired by Kilocode)
   - **Analysis:** A feature request proposing cheaper, better context compression via prune-then-compact, inspired by Kilocode. Was closed, suggesting the team evaluated and may have a different direction, but it speaks to ongoing interest in context optimization.

## Bugs & Stability

### High Severity (P1 — critical, active today)

- **[#70401 — OAuth 401 Retry Death Loop](https://github.com/NousResearch/hermes-agent/issues/70401)** (OPEN — P1, area/auth): OAuth credential pool enters unbounded, non-interruptible 401 retry loop when API key hint doesn't match. Requires external process kill. **Fix PR #70430 opened today** — adds retry cap and backoff.

- **[#14694 — Anti-Thrashing Locks Compression Permanently](https://github.com/NousResearch/hermes-agent/issues/14694)** (OPEN — P1, area/compression): After 2 consecutive compressions saving <10%, auto-compression is permanently disabled for the session with no recovery. **No fix PR open yet** — this is a long-standing issue (April 2026) that needs attention.

### Medium Severity (P2 — functional impact)

- **[#69551 — Desktop SSH Broken with Non-Default Profile](https://github.com/NousResearch/hermes-agent/issues/69551)** (OPEN — P2, comp/desktop): Token-path validation uses profile-scoped HERMES_HOME while client hardcodes `~/.hermes/desktop-ssh`. **No fix PR yet.**

- **[#70294 — Cron Delegate Results Silently Dropped](https://github.com/NousResearch/hermes-agent/issues/70294)** (OPEN — P2, needs-repro): Cron jobs report success but delegate_task results are lost. **No fix PR yet.**

- **[#69930 — Desktop GUI Websocket Reconnect Storm](https://github.com/NousResearch/hermes-agent/issues/69930)** (OPEN — P2, comp/desktop): 572 websocket closes / 574 accepts in a single day; sessions accumulate unreaped. **No fix PR yet.**

- **[#64488 — Dashboard TUI Sessions Leak Processes/Memory](https://github.com/NousResearch/hermes-agent/issues/64488)** (OPEN — P2, comp/dashboard): Orphaned node processes and open DB rows accumulate across failure modes. **No fix PR yet.**

- **[#69512 — Anthropic Empty Text Block (CLOSED):](https://github.com/NousResearch/hermes-agent/issues/69512)** Fixed today — sanitization added for empty/whitespace-only blocks after compression.

- **[#32106 — Skill State Corruption After Compression (CLOSED):](https://github.com/NousResearch/hermes-agent/issues/32106)** Fixed — invalid skill availability states after compression no longer corrupt execution.

### Lower Severity (P3 — edge cases)

- [#52669 — System prompt hardcodes ~/.hermes instead of HERMES_HOME](https://github.com/NousResearch/hermes-agent/issues/52669)
- [#47359 — Desktop "Update failed" false positive](https://github.com/NousResearch/hermes-agent/issues/47359)
- [#61003 — False-positive systemd unit warning](https://github.com/NousResearch/hermes-agent/issues/61003)
- [#63428 — Computer Use 0x0 capture after reconnect](https://github.com/NousResearch/hermes-agent/issues/63428)
- [#50101 — mnemosyne_diagnose false MISSING report](https://github.com/NousResearch/hermes-agent/issues/50101)
- [#70400 — Desktop missing window controls on WSLg](https://github.com/NousResearch/hermes-agent/issues/70400)
- [#70422 — Accidental composer drag/pop-out on text selection](https://github.com/NousResearch/hermes-agent/issues/70422)

## Feature Requests & Roadmap Signals

Several community-driven feature requests emerged today:

- **[#70421 — Show All Chats Under a Project](https://github.com/NousResearch/hermes-agent/issues/70421)** (P3, Feature): Remove the 3-session preview cap in Desktop sidebar — requested for multi-chat project management. Likely candidate for v0.20.0 Desktop improvements.

- **[#70423 — Show Target Project on New Session](https://github.com/NousResearch/hermes-agent/issues/70423)** (P3, Feature): Parity with Claude macOS — display which project a new chat will belong to. Addresses a common UX friction in multi-project setups.

- **[#30640 — Cursor SDK Integration (CLOSED)](https://github.com/NousResearch/hermes-agent/issues/30640):** Though closed, the sustained interest (6 comments) suggests the community wants deep IDE agent bridging. May reappear in a different form.

- **[#513 — Two-Phase Context Compression (CLOSED):](https://github.com/NousResearch/hermes-agent/issues/513)** Closed but the concept of prune-then-compact remains relevant. The team may have a different implementation direction.

**Prediction:** The Desktop UX improvements (project visibility, session navigation) and the Mem0 multi-agent scoping (just merged) are strong candidates for inclusion in v0.20.0. The OAuth retry fix is urgent and will likely be backported.

## User Feedback Summary

**Pain Points (recurring themes):**

1. **Session state persistence is fragile** — Issues #67762 (cost reset), #69930 (websocket reconnection), and #64488 (session leaks) all point to session state not surviving gateway restarts or reconnections. Multiple users describe this as a "blocker" for billing features and long-running sessions.

2. **Desktop GUI reliability is poor** — Three distinct Desktop bugs reported today alone (#69930 websocket storm, #70422 accidental drag, #70400 WSLg controls). The `/u/networthexplained` user filed three bugs in one day, indicating active frustration with Desktop UX.

3. **Gateway stability behind proxies is problematic** — Issue #69314 (CLOSE_WAIT death spiral) shows that running behind an HTTP proxy can permanently brick the Telegram adapter. This affects a specific but important deployment pattern.

4. **Cron/delegate reliability concerns** — #70294 shows silent failures in cron jobs. Users relying on scheduled automation cannot trust job status reports.

**Satisfaction Signals:**

- The quick turnaround on Anthropic (#69512 → fixed), Gemini MoA (#65092 → fixed), and Mem0 scoping (#69744 → merged) shows the team is responsive to community-reported issues.
- Multiple fix PRs opened same-day as bug reports (e.g., #70430 for #70401, #70433 for #69314) indicates strong maintainer engagement.

## Backlog Watch

### Long-Unanswered Important Issues Needing Maintainer Attention

1. **[#14694 — Anti-Thrashing Disables Compression Permanently](https://github.com/NousResearch/hermes-agent/issues/14694)** (Posted April 23, 2026 — **92 days open**)
   - **Severity:** P1 (critical) — permanently breaks auto-compression with no recovery.
   - **Status:** Last updated July 24, but no fix PR exists. This is the longest-standing high-severity bug in the active set.

2. **[#64488 — Dashboard TUI Session Leaks](https://github.com/NousResearch/hermes-agent/issues/64488)** (Posted July 14, 2026 — **10 days open**)
   - **Severity:** P2 — orphans processes, leaks memory and DB rows.
   - **Status:** No fix PR yet. Multiple failure modes make this complex.

3. **[#63384 — Text Becomes Invisible on Long Sessions](https://github.com/NousResearch/hermes-agent/issues/63384)** (Posted July 12, 2026 — **12 days open**)
   - **Severity:** P2 — renders text unreadable/unselectable in long sessions.
   - **Status:** Needs reproduction steps and resolution.

4. **[#63428 — Computer Use 0x0 After Reconnect](https://github.com/NousResearch/hermes-agent/issues/63428)** (Posted July 12, 2026 — **12 days open**)
   - **Severity:** P2 — silently degrades Computer Use sessions.
   - **Status:** No fix PR; requires CUA 0.7.1 compatibility investigation.

5. **[#69551 — Desktop SSH Broken with Non-Default Profile](https://github.com/NousResearch/hermes-agent/issues/69551)** (Posted July 22, 2026 — **2 days open**)
   - **Severity:** P2 — breaks remote SSH mode entirely for users with multiple profiles.
   - **Status:** No fix PR yet, but this is recent so maintainers may be triaging.

### Stale PRs (no updates >7 days)

- **[#37980 — `--warm` Flag for Cold Start Bypass](https://github.com/NousResearch/hermes-agent/pull/37980)** (Opened June 3; last updated July 24 — comments indicate maintainer interest but no merge).
- **[#48784 — Path Normalization in Cross-Profile Guard](https://github.com/NousResearch/hermes-agent/pull/48784)** (Opened June 19; last updated July 24 — important fix for profile-based deployments).
- **[#57113 — Billing Model Pricing Coverage](https://github.com/NousResearch/hermes-agent/pull/57113)** (Opened July 2; last updated July 24 — missing pricing for DeepSeek and Stepfun models).

These PRs showed some activity today but haven't been merged despite being open for weeks — they may be waiting on code review or additional testing before the next release.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the project digest for PicoClaw on 2026-07-24.

---

# PicoClaw Project Digest: 2026-07-24

## 1. Today's Overview
Activity on the PicoClaw project has entered a **maintenance-heavy phase**, characterized by a significant volume of dependency updates and housekeeping rather than new feature rollouts. Fifteen pull requests (PRs) were updated in the last 24 hours, but the vast majority are automated dependency bumps (Dependabot) and stale closures. One bug issue (#3195) was closed as stale. While there are no new releases, the appearance of a major SDK version bump (Copilot SDK v1.0.8) and a feature PR (#3200) regarding fallback model chains suggest the team is laying the groundwork for future stability and UX improvements. Overall, project health appears stable but with **low contributor velocity on substantive code changes**.

## 2. Releases
**No new releases were published today.**  
The latest stable release remains previous, with no version tag updates noted in the last 24 hours.

## 3. Project Progress
Several closed/merged PRs indicate incremental progress:

- **Bug Fix & Security:** PR #3286 (by imguoguo) was merged, updating Go and `x/text` dependencies to address `govulncheck` vulnerabilities. This is a critical security maintenance fix.
- **Feature Advancements (Stale/Closed):** Two significant feature PRs were closed as stale:
    - **PR #3118** (Add remote Pico WebSocket mode): This feature allowing `picoclaw agent` to connect via `ws://` was closed without merging. The status suggests it may have been superseded or deprioritized.
    - **PR #3115** (Fix inline data URL media extraction): A session-history corruption bug fix was also closed stale. This indicates a known bug that has not yet been officially applied.
- **Refactoring:** PR #3222 (refactor(deltachat): cleanup implementation) remains open and is awaiting review, showing -200LOC of removed code.

## 4. Community Hot Topics
- **#3195: [BUG] OpenAI GPT does not work on NanoKVM** [CLOSED]  
  *Comments: 4 | 👍: 0*
  - **Analysis:** This issue reported that PicoClaw fails to connect to GPT-5.4 when running on the NanoKVM (a KVM-over-IP device). The user followed the standard documentation but encountered a persistent error. The issue was closed as stale without a fix being merged.  
  - **Underlying Need:** Users want a seamless "plug-and-play" experience for AI models on edge hardware (NanoKVM). The closure without resolution may indicate a configuration nuance or a hardware-specific limitation that has not been prioritized.  
  **[Link to Issue](https://github.com/sipeed/picoclaw/issues/3195)**

## 5. Bugs & Stability
| Severity | Bug Description | Status | Fix PR Exists? |
| :--- | :--- | :--- | :--- |
| **Medium** | **OpenAI GPT fails on NanoKVM with default config** (#3195). Users cannot interact with PicoClaw when deployed on specific hardware. | Closed as Stale | No | 
| **Low** | **Potential session-history corruption via inline data URLs** (#3115). Generic tools (`read_file`, `exec`) could cause history corruption when returning raw base64 strings. | Closed as Stale | Yes, but not merged | 
| **Secure** | **Go vulnerability scan failures** (implied by PR #3286). The fix for `govulncheck` was merged today, resolving an active security alert. | Fixed | Merged (#3286) | 

## 6. Feature Requests & Roadmap Signals
- **Configurable Default Fallback Chain (PR #3200):** This is the most significant feature signal on the board. It proposes a UI and API for users to set a default model with a fallback chain (e.g., "try GPT-4o first, then Claude, then open-source model"). This is a high-value UX feature that reflects the industry trend toward multi-model resilience. **Prediction:** Likely to be in the next minor release (v2.5.x) given it has been open for 22 days and has no critical conflicts.
- **Copilot SDK v1.0 Integration (PR #3291, #3236):** Multiple PRs bump the Copilot SDK from v0.2.0 to v1.0.8. This is a major version jump. The team is actively preparing for GitHub Copilot integration features, though the specific functionality is not yet exposed in user-facing PRs.
- **Pico WebSocket Remote Mode (PR #3118):** While closed as stale, the demand for a remote agent mode suggests users want to run PicoClaw on one machine and control it from another. This may return in a later sprint.

## 7. User Feedback Summary
- **Pain Point: Edge-Device Compatibility:** The #3195 issue (NanoKVM) highlights a recurring tension: PicoClaw is marketed for lightweight deployment (KVM, Raspberry Pi), but early adopters are hitting configuration walls with newer hardware/firmware combinations.
- **Satisfaction:** The automatic dependency updates (Dependabot) and the quick fix for `govulncheck` (PR #3286) show the project is attentive to security hygiene, which is appreciated by production users.
- **Dissatisfaction:** The closure of two meaningful PRs (#3115, #3118) as "stale" without comment may frustrate contributors who expected their fixes to be merged. This suggests a maintainer bottleneck.

## 8. Backlog Watch
The following items have been largely ignored or are stalled and require maintainer attention:

- **PR #3222: refactor(deltachat): cleanup implementation**  
  *Updated: 2026-07-23 | Age: 21 days*  
  A substantial refactor (>200LOC removed) by a regular contributor (trufae) with no reviews. This is a code health improvement that is blocking progress on the DeltaChat integration.  
  **[Link to PR](https://github.com/sipeed/picoclaw/pull/3222)**

- **PR #3200: feat(models): add configurable default fallback chain**  
  *Updated: 2026-07-23 | Age: 23 days*  
  High-impact feature with zero comments from the core team. If this PR is not merged soon, it risks becoming stale like the others.  
  **[Link to PR](https://github.com/sipeed/picoclaw/pull/3200)**

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-24

## 1. Today's Overview
NanoClaw saw **high activity** on July 23—24, with **10 PRs** updated and **1 open bug** pending. The team landed **4 merged/closed PRs** addressing critical fixes (typing indicator, Telegram threads, Matrix E2EE, Gmail route blocking) while **6 open PRs** continue refinement in container orchestration, context templates, and slash command handling. The project remains in active development with sustained core-team and community contributions. A **low-priority but hardening-level bug** (#2466) involving duplicate container spawns remains open with a fix PR (#3119) under review.

## 2. Releases
**No new releases** in the last 24 hours. The latest tagged release predates this period.

## 3. Project Progress
The following **4 PRs were merged/closed** today:
- **PR #3120** (closed) — *Keep typing indicator alive through a single long tool call* by @vlsmt. Fix prevents premature timeout of typing indicator during extended tool execution.
- **PR #2892** (closed) — *Enable thread support for Telegram* by @avri-schneider. Flips `supportsThreads: true` flag, enabling forum/topic thread tracking.
- **PR #2844** (closed) — *Native persistent E2EE adapter for Matrix* by @avri-schneider. Replaces Chat SDK bridge with `matrix-bot-sdk` + Rust-based crypto, enabling persistent end-to-end encryption.
- **PR #3115** (closed) — *Block legacy Gmail API routes* by @Koshkoshinsk. Adds idempotent global OneCLI blocks for `www.googleapis.com` traffic, preventing policy bypass via legacy paths.

These advances strengthen **messaging reliability** (typing indicator, threads) and **security posture** (Matrix E2EE, Gmail route hardening).

## 4. Community Hot Topics
The most active items today were **fix-focused PRs** with maintainer engagement:
- **PR #3122** (open) — *Fix opencode main compatibility, custom-endpoint transport, memory parity* by @glifocat. Core-team fix addressing multiple integration gaps; labeled `core-team` and `follows-guidelines`.
- **PR #3090** (open) — *Prepend all top-level context Markdown* by @amit-shafnir. Core-team effort to standardize context injection across templates; 4 days open with ongoing discussion.
- **PR #3119** (open) — *Reconcile untracked orphan containers* by @robbyczgw-cla. Directly addresses the duplicate container issue from bug #2466, with detailed root cause analysis of 3-concurrent-container scenario after 5d uptime.

Underlying need: **Container lifecycle reliability** and **concurrent access safety** dominate community concerns, with multiple PRs targeting race conditions and orphan cleanup.

## 5. Bugs & Stability
**1 bug** reported/updated today, linking to an active fix:
- **Issue #2466** (open, Priority: Low, Hardening) — *Duplicate container spawn race on wakeContainer* when script and host sweep run concurrently. **Severity: Medium** (data processing duplication, but both containers process same brief independently). Detailed repro attached. **Fix PR #3119** is open and ready for review, implementing orphan container reconciliation to prevent duplicate per-group spawns.

No new crashes or regressions were introduced today. The team is actively hardening the container runner.

## 6. Feature Requests & Roadmap Signals
While no explicit feature requests were filed today, the following PRs signal **roadmap direction**:
- **PR #2971** (open) — *ncc utility skill: host operational and health CLI* by @zivisaiah. A standalone CLI tool for host operations — likely to land as a developer productivity enhancement.
- **PR #2346** (open, since May 8) — *Treat unknown slash commands as normal chat* by @SidhayaPravda618. Long-standing fix to prevent silent drops of unrecognized commands; could unblock better chat UX.

**Prediction for next minor release:** Container lifecycle hardening (PR #3119), context template standardization (PR #3090), and the ncc health CLI (PR #2971) are strong candidates.

## 7. User Feedback Summary
User pain points surfaced through code contributions:
- **Container duplication** (Issue #2466, PR #3119) — Users running continuously for 5+ days observed 3 concurrent containers for a single agent group, indicating **resource waste and potential processing conflicts**.
- **Silent command drops** (PR #2346) — Unknown slash commands disappearing without user feedback suggests a **frustrating UX gap** for power users.
- **Gmail API bypass** (PR #3115) — Users employing `www.googleapis.com` routes to circumvent OneCLI policies indicates **configuration hardening needs**.

Satisfaction signals: Active community contributions (10 PRs today, multiple authors), with core-team members handling complex fixes (E2EE Matrix, container orchestration).

## 8. Backlog Watch
Items needing maintainer attention:
- **PR #2346** (open since 2026-05-08, no assigned reviewer) — *Fix unknown slash command handling*. ~2.5 months stale; a potential **low-hanging UX fix** that could be merged with minimal risk.
- **PR #3119** (open, ~1 day) — *Orphan container reconciliation*. Directly addresses open bug #2466; **should be prioritized** to resolve the duplicate container race.
- **Issue #2466** (open since 2026-05-14, updated today) — **Bug with active fix PR**. Maintainers should review PR #3119 to close this hardening gap.

No critical unaddressed issues beyond the container race condition.

---

*Generated from GitHub data for nanocoai/nanoclaw, snapshot 2026-07-24 00:00 UTC.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-24

## Today's Overview

IronClaw is in an intensive v1-launch preparation phase, with 50 PRs and 32 issues updated in the last 24 hours. Activity is dominated by **v1-launch-checklist bugs**, **extension lifecycle refactoring**, and **infrastructure cleanup** ahead of a likely imminent release. The project merged 17 PRs yesterday, including critical fixes for webhook delivery, rate-limiting, and legacy code removal. The "Reborn" codename is being systematically retired in favor of neutral "IronClaw" branding across configuration, environment variables, and crate names. Four new epics were opened covering hermetic testing, admin-managed agents, skill discovery, and heartbeat scheduling, signaling a post-launch roadmap is already forming. Overall health is productive but strained — the bug-to-feature ratio is high, and several launch-blocking issues remain unaddressed.

## Releases

**No new releases today.** The previous version remains `ironclaw 1.0.0-rc.1`. PR #5598 (release automation) is still open and has been pending since July 3 — it would bump `ironclaw_common` to 0.5.0 with breaking API changes.

## Project Progress

**17 PRs merged/closed today** (of 50 total updated). Key advancements:

| PR | Summary | Impact |
|----|---------|--------|
| [#6603](https://github.com/nearai/ironclaw/pull/6603) | Reconciled Playwright tests to merged #6520 lifecycle contracts | Fixes post-merge test regression |
| [#6602](https://github.com/nearai/ironclaw/pull/6602) | Fixed operator extension-configuration value serialization (422 → 200) | Unblocked 8 Slack QA shards |
| [#6601](https://github.com/nearai/ironclaw/pull/6601) | Added admin-config-preserving extension reset script | Ops tooling for extension state management |
| [#6594](https://github.com/nearai/ironclaw/pull/6594) | Retired legacy `tools-src/` and `channels-src/` source trees | Major cleanup of ~2-year-old code |
| [#6592](https://github.com/nearai/ironclaw/pull/6592) | Fixed WebChat "Disconnected" lockout (rate-limit + navigation-race bugs) | Fixes #6581, persistent UX regression |
| [#6520](https://github.com/nearai/ironclaw/pull/6520) | Generic extension readiness + channel delivery ([closed](https://github.com/nearai/ironclaw/pull/6520)) | Foundation PR; separates admin config from user membership |
| [#6582](https://github.com/nearai/ironclaw/pull/6582) | Dummy PR to verify benchmark canary | CI infrastructure fix |

The **#6520 merge** was the largest architectural change yesterday — it collapses extension lifecycle to three states (`uninstalled`, `setup_needed`, `active`) and separates tenant-admin config from user OAuth. It's directly responsible for the downstream PRs #6602, #6603, and #6606 that fix post-merge regressions.

## Community Hot Topics

**Most Active Issues (by comment count):**

1. **[#6389](https://github.com/nearai/ironclaw/issues/6389)** — *Phase 4 (§5.11): collapse build_local_runtime + build_production_shaped into one build_runtime(cfg)* — **11 comments** (closed). Author driving architecture simplification.

2. **[#6274](https://github.com/nearai/ironclaw/issues/6274)** — *Finish DeploymentConfig as main composition config* — **5 comments** (closed). Foundational config work.

3. **[#6524](https://github.com/nearai/ironclaw/issues/6524)** — *Epic: Hermetic capability and journey testing platform* — **3 comments**. New epic signals desire for deterministic QA.

**Most Active PRs:**
- [#6606](https://github.com/nearai/ironclaw/pull/6606) — *fix(live-qa): map setup values onto declared admin-group handles* — Layer two of Slack admin bootstrap fix
- [#6604](https://github.com/nearai/ironclaw/pull/6604) — *fix(reborn): fall back to web-app delivery when channel removed mid-run* — Responds to live Telegram incident

**Analysis:** The community is primarily **contributor-driven** (core team + regular contributors). User-facing issues like #6521 (CLI unavailable on staging) and #6522 (no Telegram setup docs) show the project is still closing the gap between code completeness and production-readiness. The high number of v1-launch-checklist issues (10 of 32) indicates a structured launch qualification process.

## Bugs & Stability

**Critical bugs reported today:**

| Issue | Severity | Description | Fix exists? |
|-------|----------|-------------|-------------|
| [#6605](https://github.com/nearai/ironclaw/issues/6605) | **Critical** | Telegram inbound silently dead after extension reinstall (no `telegram_webhook_secret`) | No |
| [#6604](https://github.com/nearai/ironclaw/pull/6604) (PR) | **Critical** | Run delivery fails when reply channel is removed mid-turn (live incident) | Yes — PR #6604 open |
| [#6581](https://github.com/nearai/ironclaw/issues/6581) | **High** | 429 Too Many Requests on agent-stg WebChat (SSE rate-limit) | Yes — fixed in #6592 |
| [#6590](https://github.com/nearai/ironclaw/issues/6590) | **High** | `serve` fails on Windows: workspace root path overlap | No |
| [#6548](https://github.com/nearai/ironclaw/issues/6548) | **High** | Preview auth wall blocks Telegram/Slack webhook delivery | No (closed — workaround exists?) |
| [#6544](https://github.com/nearai/ironclaw/issues/6544) | **High** | No UI/CLI to persist Slack OAuth redirect URI (503 on Slack auth) | No (closed — likely awaiting UI work) |
| [#6575](https://github.com/nearai/ironclaw/issues/6575) | **Medium** | `systemd` service error right after `ironclaw onboard` (Ubuntu) | No |

**Notable:** Three of seven critical/high-severity bugs are already fixed (429 via #6592, 422 serialization via #6602, preview auth wall closed). However, the Telegram reinstall bug (#6605) and Windows path bug (#6590) are blocking user journeys with no fix PR yet.

## Feature Requests & Roadmap Signals

**New feature epics opened today:**

1. **[#6524](https://github.com/nearai/ironclaw/issues/6524)** — *Hermetic capability and journey testing platform* — Wants mechanical verification that every capability has deterministic coverage. Likely to be a Q3 priority given project's QA investment.
2. **[#6565](https://github.com/nearai/ironclaw/issues/6565)** — *Reliable Skill Discovery, Routing, and Activation* — Moves from model-directed skill selection to a more structured system. High risk, suggested P1.
3. **[#6578](https://github.com/nearai/ironclaw/issues/6578)** — *Admin-Managed Agents as UserId Subjects* — Enables tenant admins to create non-human agent identities without weakening user isolation. Security-focused epic.
4. **[#6569](https://github.com/nearai/ironclaw/issues/6569)** — *Heartbeat contract and scheduling semantics* — New feature for periodic agent health checks.

**Likely next-version candidates:**
- `IRONCLAW_*` environment variable migration (PR #6559) — currently the largest open PR
- Default Anthropic provider version bump (PR #6600) — small fix for Claude model deprecation
- Heartbeat MVP (issues #6569-6571) — appears to have dedicated ownership (italic-jinxin)

## User Feedback Summary

**Pain points from v1-launch-checklist issues:**

- **"CLI is not available"** — [#6521](https://github.com/nearai/ironclaw/issues/6521): Users SSH-ing into staging VMs cannot run `ironclaw service restart`
- **"WebUI constantly reconnecting"** — [#6541](https://github.com/nearai/ironclaw/issues/6541): Confusing reconnect notifications with no workflow impact (fixed in #6592)
- **"No Telegram setup instructions"** — [#6522](https://github.com/nearai/ironclaw/issues/6522): Users cannot self-service Telegram integration
- **"Test build flag breaks agent creation"** — [#6523](https://github.com/nearai/ironclaw/issues/6523): Onboarding regression when selecting test build
- **"Google OAuth config can't be applied"** — [#6534](https://github.com/nearai/ironclaw/issues/6534): Operator UI cannot save Google credentials in hosted deployments

**Satisfaction signals:**
- High contributor responsiveness — most v1-launch-checklist issues receive a comment within hours
- Three QA-category issues closed today, suggesting aggressive triage
- The live-incident response to #6604 (Telegram reinstall) shows the team is monitoring production behavior

## Backlog Watch

**Long-unanswered important issues:**

| Issue | Age | Why it matters |
|-------|-----|----------------|
| [#4548](https://github.com/nearai/ironclaw/issues/4548) | **46 days** — DeepSeek 400 with duplicate `model` field — only 2 comments, no fix | Blocks DeepSeek+tools users; opened June 8 |
| [#5598](https://github.com/nearai/ironclaw/pull/5598) | **21 days** — Release automation PR (chore: release) — pending since July 3 | Prevents new crates from being published; includes breaking changes |
| [#3997](https://github.com/nearai/ironclaw/pull/3997) | **61 days** — Attested signing PR13 (re-ported 2026-07-23) — dormant stack of 1184 commits | Longest-running feature branch; attestation/signing is a security-critical feature |
| [#4015](https://github.com/nearai/ironclaw/pull/4015) | **61 days** — Attested signing PR14 (coupled with PR13) | Same dormant signing stack |

**Notable:** The **attested-signing** stack (PRs #3997 and #4015) was just force-pushed with a fresh port onto current main after being 1184 commits behind. This suggests renewed attention on signing infrastructure. The DeepSeek 400 bug (#4548) is the most concerning — it's been open 6+ weeks with no fix and blocks DeepSeek users from using tools, which is a significant compatibility gap for that provider.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the project digest for LobsterAI, generated from the provided GitHub data.

---

## LobsterAI Project Digest: 2026-07-24

### 1. Today's Overview
LobsterAI shows signs of moderate but stable activity today, with no new releases to announce. The project processed a healthy volume of contributions yesterday, most notably closing two significant Pull Requests (PRs), including a major release branch (`2026.7.20`) and a feature update for AI skin presentation. However, the open issue queue is stagnant; the three recently updated issues are all over three months old (stale), indicating a potential bottleneck in maintainer response to user-reported bugs and feature requests. The overall project health is steady in terms of code integration, but risks from unaddressed technical debt and user frustration are growing.

### 2. Releases
None of the three PRs merged in the last 24 hours resulted in a tagged release or a new version announcement. The most notable merge, `#2379`, was a release branch (`Release/2026.7.20`), but no installable artifacts were published in the data window.

### 3. Project Progress
Two PRs were merged/closed in the last 24 hours, representing a successful deployment cycle:
- **[PR #2379 - Release/2026.7.20]** - Merged. This is the primary release candidate for this week, touching the renderer, build, docs, main, OpenClaw, cowork, artifacts, and Windows-specific code.
- **[PR #2378 - feat(skin): polish AI skin appearance behavior]** - Merged. This feature update improved the AI skin UI, making themes and AI skins mutually exclusive, aligning artifact add-tab and task-search surfaces, and simplifying the skin settings.

The only open PR, [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277), is a routine dependency update (Electron from 40.2.1 to 43.1.1) by Dependabot and is not a feature driver.

### 4. Community Hot Topics
Engagement remains low; all three updated issues have exactly one comment each and zero reactions. The key topics are:

- **[Issue #1263: Duplicate Scheduled Tasks & API Rate Limiting]** - A user reports that scheduled tasks appear duplicated in the UI and both throw "API rate limit reached" errors. This suggests a logic bug in task creation or UI rendering, coupled with an underlying infrastructure issue (rate limiting).
- **[Issue #1265: Agent-Specific IM Bot & Model Binding]** - A request for advanced multi-agent configuration, allowing different agents (e.g., a scheduler vs. a PPT generator) to use different IM bots and different language models. This points to users wanting to build more complex, specialized agent teams.
- **[Issue #1273: WASM Database Crash & Corruption Risk]** - A critical stability report. The user describes an unrecoverable crash (`memory access out of bounds`) in `sql.js` under high-frequency write loads, alongside a risk of permanent database corruption due to non-atomic `save()` operations.

### 5. Bugs & Stability
One high-severity, critical bug is currently open:

- **CRITICAL: [Bug] sql.js (WASM) memory crash & data corruption** - **[Issue #1273](https://github.com/netease-youdao/LobsterAI/issues/1273)**. This is the most dangerous item on the board. It describes a complete application crash (`memory access out of bounds`) and the risk of permanent database file corruption during high-frequency writes (e.g., long cowork sessions). No fix PR is currently associated with this issue. The risk of data loss for users running intensive sessions is high.

A secondary bug, **[Issue #1263](https://github.com/netease-youdao/LobsterAI/issues/1263)** (duplicate UI tasks & rate limiting), is moderate in severity. It causes user confusion and blocks functionality (API limits), but does not corrupt data or crash the app.

### 6. Feature Requests & Roadmap Signals
The most significant roadmap signal comes from a user request for advanced multi-agent orchestration:
- **[Issue #1265: Agent-Specific IM Bot & Model Binding](https://github.com/netease-youdao/LobsterAI/issues/1265)** - This feature request asks for the ability to assign different IM bots and language models to different agents. This is a core architectural enhancement for multi-agent workflows. It is highly likely that future releases (e.g., the 2026.7.27 cycle) will include initial support for this, as it unlocks a major value proposition for power users building agent teams.

### 7. User Feedback Summary
User feedback reveals two clear pain points:

1.  **Stability & Reliability Pain (High Dissatisfaction):** Users running long or high-volume sessions are facing crashes and data corruption. The lack of a fix or acknowledgment on Issue #1273 is a major source of frustration for power users.
2.  **Configuration Limitations (Moderate Dissatisfaction):** Users building multi-agent systems feel constrained by the current "one size fits all" agent configuration (Issue #1265). They want the flexibility to route tasks to specialized agents running different models.

### 8. Backlog Watch
Three issues have been open for over three months (since April 2, 2026) and have received no maintainer comment or fix PR, despite being marked as stale:

1.  **CRITICAL:** **[Issue #1263](https://github.com/netease-youdao/LobsterAI/issues/1263)** - Duplicate scheduled tasks causing API rate limit errors.
2.  **HIGH:** **[Issue #1265](https://github.com/netease-youdao/LobsterAI/issues/1265)** - Feature request for Agent-specific IM bots and models.
3.  **HIGH:** **[Issue #1273](https://github.com/netease-youdao/LobsterAI/issues/1273)** - WASM database crash and corruption bug.

These items represent a significant maintenance debt. Prioritizing responses and fixes for these issues is critical to maintaining community trust and project stability.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-24

## 1. Today's Overview

Moltis remains in an active development and maintenance cycle, with **5 pull requests merged** and **2 issues updated** in the last 24 hours. Two new releases were published (20260723.02 and 20260723.03), though no release notes were provided. The project shows strong forward momentum, particularly in Slack integration hardening and user interface improvements. Activity is well-balanced between feature work, bug fixing, and dependency maintenance, indicating a healthy project with attentive maintainers.

## 2. Releases

Two new releases were published today:
- **20260723.03** (most recent)
- **20260723.02**

**Note:** No changelogs, release notes, or commit summaries were attached to these releases. Based on the PRs merged (see Section 3), likely contents include Slack security fixes (PR #1163, #1164), Web UI date display fix (PR #1162), the chat context command feature (PR #1124), and Astro dependency bump (PR #1161). No breaking changes or migration notes are documented.

## 3. Project Progress

All **5 PRs updated today were merged/closed** (0 remain open):

| PR | Title | Area | Type |
|---|---|---|---|
| [#1124](https://github.com/moltis-org/moltis/pull/1124) | Add context command support for chat turns | Core/Config | Feature |
| [#1161](https://github.com/moltis-org/moltis/pull/1161) | chore(deps): bump astro from 7.0.9 to 7.1.3 in /docs | Docs | Dependencies |
| [#1162](https://github.com/moltis-org/moltis/pull/1162) | fix(web): show dates for older sessions | Web UI | Bug Fix |
| [#1163](https://github.com/moltis-org/moltis/pull/1163) | fix(slack): challenge unknown allowlist DMs with OTP | Slack | Bug Fix/Security |
| [#1164](https://github.com/moltis-org/moltis/pull/1164) | fix(slack): allow operator-approved api base hosts | Slack | Feature/Security |

**Key advances:**
- **Feature:** Chat sessions can now auto-inject runtime context via an optional `chat.context_command` configuration — valuable for deployments needing dynamic context without manual pasting.
- **Security hardening:** Slack integration gains OTP self-approval for non-allowlisted DM users (PR #1163) and operator-controlled API base URL allowlisting (PR #1164).
- **Web UI improvement:** Session list now shows proper date labels — "today" shows time only, recent days show "yesterday" or weekday, older sessions show calendar date with year when needed (PR #1162).
- **Bug fixes in other platforms:** PR #1163 also fixed empty-allowlist bypass vulnerabilities in Microsoft Teams, Signal group access, and Matrix DM.

## 4. Community Hot Topics

- **#1095 [Bug]: Podman is not working via Moltis** — [Open Issue](https://github.com/moltis-org/moltis/issues/1095) (1 comment, author: RokkuCode, opened 2026-06-03, updated 2026-07-23). This issue has been open for 7+ weeks with only one comment (likely a confirmation or request for more info). The lack of resolution suggests either low priority or difficulty reproducing. As container runtime support is critical for many deployments, this may need attention if more users encounter it.
  
- **#1108 [Bug]: Session list shows times but not dates** — [Closed Issue](https://github.com/moltis-org/moltis/issues/1108) (no comments, author: IlyaBizyaev, opened 2026-06-05, closed 2026-07-23). This bug was resolved today via PR #1162, demonstrating responsive turnaround once addressed (PR created yesterday, merged today).

No issues or PRs had reactions (👍), suggesting that the community is not currently expressing strong sentiment through this metric. The activity level is moderate but not high-velocity.

## 5. Bugs & Stability

**No new bugs were filed today.** The one open bug remains:

- **#1095: Podman not working via Moltis** — Medium severity. While not updated with new activity today, it remains as an unresolved blocker for Podman users. No fix PR exists. May affect users relying on containerized deployments. *Status: unassigned, reopened for 7+ weeks.*

**Bugs fixed today via merged PRs:**
- **#1108 (closed):** Session list date display fixed through PR #1162 — Low severity, resolved.
- **PR #1163:** Multiple security bugs in Slack/Teams/Signal/Matrix allowlist handling — **High severity** (empty allowlist granted full access instead of denying). Now fixed.
- **PR #1164:** Slack API base URL validation missing for gateway — Medium severity (could allow connecting to non-approved proxy hosts). Now fixed.

## 6. Feature Requests & Roadmap Signals

**Major new feature added today:**
- **Chat Context Command (PR #1124):** Allows dynamic context injection via shell command at each chat turn. This signals interest in making Moltis more programmable and suitable for CI/CD or automated deployment scenarios. Likely to be refined further based on user feedback.

**Predicted next-version candidates:**
- Podman support fix (#1095) — may be addressed if container runtime compatibility is a priority.
- Further Web UI enhancements (date display was just fixed, but UX polish often continues).
- Additional Slack integration hardening (recent velocity suggests maintainers are focused here).

## 7. User Feedback Summary

**Pain points expressed:**
- **Container runtime limitation:** Podman users cannot use Moltis (#1095) — a notable gap for users avoiding Docker.
- **Web UI UX gap:** Session list usability was reduced on older sessions (dates missing) — reported by IlyaBizyaev, now fixed in PR #1162.
- **Slack security concerns:** Implicit trust of empty allowlists created unexpected open access (PR #1163) — indicates operators need clear, safe defaults.

**Positive signals:**
- Quick turnaround on the session date bug (user report → fix merged in ~6 weeks, but once addressed, fix merged within 2 days).
- Developer responsiveness to security feedback (both Slack fixes merged same day they were authored).

## 8. Backlog Watch

| Item | Status | Days Open | Notes |
|---|---|---|---|
| [#1095](https://github.com/moltis-org/moltis/issues/1095) — Podman not working | Open, 1 comment | 51 days | Needs maintainer response or reproduction attempt. Only issue open with active label from a user — potential priority mismatch. |
| [#1108](https://github.com/moltis-org/moltis/issues/1108) — Session date display | ✅ Closed today | 48 days to fix | Responsive once worked on. No backlog concern. |
| PR #1124 — Context command feature | ✅ Merged today | 38 days from open to merge | Long lifecycle but merged successfully. |

**Maintainer attention needed:**
- The **Podman bug (#1095)** remains the clearest unattended item. After 7 weeks with only one comment, users may abandon the issue or the project if this is a key feature for their workflow. A maintainer response (reproduction request, workaround, or prioritization note) would improve community confidence.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-24

## Today's Overview

The project shows **very high activity** with **35 issues** and **50 pull requests** updated in the last 24 hours, alongside one new pre-release (v2.0.1-beta.2). The open-to-closed ratio is healthy, with 13 issues closed and 21 PRs merged/closed. The release pipeline has advanced with CI orchestrator improvements, but the volume of bug reports (particularly around the v2.0 transition, Docker deployment, and Windows-specific issues) indicates the team is in a **stabilization phase** following the major v2.0 launch. A significant architectural initiative — the **Unified Browser SDK (PR #6276)** and **third-party agent backends (PR #6397)** — signals continued feature investment alongside bugfix work.

## Releases

**v2.0.1-beta.2** was released (the only release in the last 24 hours). Notable changes:
- **feat(ci):** Unified release orchestrator gating web on desktop build (PR #6329) — streamlines the release pipeline for the Tauri desktop app.
- **fix(runtime):** Rotate text message on new reasoning block (PR #6310) — addresses a rendering/context issue when a model transitions to a reasoning step.

No breaking changes or migration notes were documented in the release notes. This is a pre-release bugfix version.

## Project Progress

**Merged/closed PRs today (21 total) — key highlights:**

- **#6351** *(merged)* — **fix(memory): guide failed memory edits** — Adds explicit recovery guidance to MEMORY.md prompts, preventing the infinite retry loop that wasted tokens. This directly addresses Issue #3015.
- **#6393** *(merged)* — **perf(console): stabilize chat options memo and reduce SSE re-parsing** — A performance fix that stabilizes React memoization, preventing full-tree re-renders.
- **#6390** *(merged)* — **fix(governance): bridge tool_guard detection rules into governance policy Phase 1** — Improves security policy enforcement by bridging existing tool guard detection.
- **#6368** *(merged)* — **fix(governance): honor audit_level=none before persisting events** — Prevents unnecessary SQLite inserts when auditing is disabled.
- **#6354** *(merged)* — **[Bug] Approval Dialog UI Design Risks Accidental Permanent Permission Grants** — Fixes a dangerous UX issue where the "Always Allow" button was visually dominant, leading to accidental permanent grants.
- **#6225** *(merged)* — **fix(desktop): gracefully shut down backend sidecar before exit** — Implements proper SIGTERM-based shutdown instead of force-kill (addresses Issue #6219).
- **#6366** *(merged)* — **fix(Console coverage run timeout in AgentLoopCard Gate test)** — Adjusts test timeout configuration to prevent false CI failures under coverage instrumentation.

**Key feature PRs that remain open and under review:**
- **#6284** — **feat(apps): add qwenpaw-creator app** (script → assets → storyboard → video workflow)
- **#6397** — **feat(third-party agents): add extensible Codex and Qoder backends** (major architectural change)
- **#6276** — **feat(browser): unified browser — one SDK, any backend** (control/execution plane split)

## Community Hot Topics

| Issue/PR | Comments | Summary |
|----------|----------|---------|
| [Issue #6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) | 6 | **v2.0 introduces ~2s fixed overhead per reply** — The most-discussed issue. Users report every simple conversational reply incurs a 2-second fixed overhead regardless of model latency, absent in v1.x. Upsetting power users who rely on fast responses. |
| [Issue #6344](https://github.com/agentscope-ai/QwenPaw/issues/6344) | 3 | **Docker hot-reload for Web updates** — Users want to avoid container rebuilds that wipe runtime environments (Node, ffmpeg, LibreOffice). References AstrBot's mature implementation. Signal: Docker deployment experience needs improvement. |
| [Issue #6342](https://github.com/agentscope-ai/QwenPaw/issues/6342) | 3 | **ReMe embedding verification** — User cannot verify whether vector search is actually working after configuring embeddings. No observable data files created. Documentation/usability gap. |
| [Issue #6363](https://github.com/agentscope-ai/QwenPaw/issues/6363) — *CLOSED* | 3 | **Tool_call arguments polluted with markdown fences** — GLM-5-Turbo and DeepSeek-V3 wrap JSON in markdown fences, breaking all tool execution. A hard blocker for users of those models. |
| [Issue #6316](https://github.com/agentscope-ai/QwenPaw/issues/6316) | 3 | **Request for per-cron-job model specification** — Power users want cron tasks to use a fixed model independent of the agent's current global model. |

**Underlying needs** observed: (1) **Performance regression anxiety** around v2.0's architectural changes, (2) **Docker/Hybrid deployment pain** from frequent releases, (3) **Model compatibility issues** with non-OpenAI providers (GLM, DeepSeek, MiniMax) being second-class citizens.

## Bugs & Stability

**Critical severity:**
- **[#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307)** — v2.0 2s fixed overhead per reply. **No fix PR yet.** High impact for all v2.0 users.
- **[#6363](https://github.com/agentscope-ai/QwenPaw/issues/6363)** — Tool calls broken for GLM-5-Turbo/DeepSeek-V3. **Closed** — likely patched in v2.0.1-beta.2 or related PRs.
- **[#6406](https://github.com/agentscope-ai/QwenPaw/issues/6406)** — Windows PowerShell multiline commands collapsed into one line (breaks here-strings). **PR #6412 exists** (fix(shell): preserve multiline commands for Windows PowerShell).
- **[#6407](https://github.com/agentscope-ai/QwenPaw/issues/6407)** — ReAct Agent context has `tool_result` mixed into `role:assistant` messages, causing OpenAI API 400 errors. **No fix PR yet.**
- **[#6376](https://github.com/agentscope-ai/QwenPaw/issues/6376) — CLOSED** — v2.0.0.post3/post4 crashes from new loop functionality causing main process death. User explicitly asked for better testing. **Closed** — likely fixed.

**High severity:**
- **[#6401](https://github.com/agentscope-ai/QwenPaw/issues/6401)** — Cron jobs with `share_session: true` overwrite entire session history. **No fix PR yet.**
- **[#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405)** — MCP tools always "Tool not found" in v2.0. **No fix PR yet.**
- **[#6372](https://github.com/agentscope-ai/QwenPaw/issues/6372)** — Idle cleanup can remove a newly recreated queue state (race condition). **No fix PR yet.**
- **[#6386](https://github.com/agentscope-ai/QwenPaw/issues/6386)** — Repeated tool calls (infinite loop) with specific GGUF models. **No fix PR yet.**
- **[#6362](https://github.com/agentscope-ai/QwenPaw/issues/6362)** — MiniMax-M3 cannot recognize images at all (recurring issue, see also #5135). **No fix PR yet.**

**Medium severity:**
- [#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239) — Windows PATH concatenation drops semicolons, breaking npm globals in child processes.
- [#6294](https://github.com/agentscope-ai/QwenPaw/issues/6294) — Installed market skill not visible until page refresh.

## Feature Requests & Roadmap Signals

**Likely to land in next version (v2.0.1 stable or v2.0.2):**
- **Docker hot-reload (Issue #6344)** — High upvote potential; AstrBot already has this. The team may prioritize given Docker user frustration.
- **Undo/redo for conversation (Issue #6408)** — `/undo` command to roll back last user+assistant turn. Low implementation complexity.
- **Reranker support for ReMe memory (PRs #6398 and #6399)** — Both backend and UI PRs are open. Likely to merge soon.
- **Agent-level token statistics (Issue #6392)** — User request for granular token tracking. The team's response suggests this may stay as a plugin.

**Longer-term roadmap signals:**
- **QwenPaw Creator app (PR #6284)** — Video creation workflow within the agent. A significant new capability.
- **Third-party agent backends — Codex & Qoder (PR #6397)** — Major extensibility architecture. Under review.
- **Unified Browser SDK (PR #6276)** — Control/execution plane split. Large architectural change.
- **Windows desktop GUI automation with UIA (PR #5187)** — `computer_use` tool for Windows. Still open since June.
- **Safe model discovery infrastructure (PR #6302)** — Automated model list discovery for providers. Under review.

**Likely NOT in next version (more speculative):**
- RobotFramework syntax highlighting (Issue #6403) — Low priority.
- API endpoint creation for specific agents (Issue #6377) — Requires significant architectural work.

## User Feedback Summary

**Satisfaction points:**
- Users appreciate the **rapid iteration** ("仅7月就已经发布十余个小版本" — Issue #6344), but this is also a pain point.
- The **Skill Market** and plugin ecosystem are actively used (Issue #6294, #6379).

**Dissatisfaction / Pain points:**
1. **v2.0 performance regression (Issue #6307)** — "2 second fixed overhead" is the most alarming complaint. Users who relied on v1.x for fast conversational AI are frustrated.
2. **Docker update hell (Issue #6344, #6380)** — HDD users suffer 1.5-hour updates; Docker users lose all runtime tools on every update.
3. **Model compatibility gaps** — GLM-5-Turbo tool calls broken (Issue #6363), MiniMax-M3 image recognition broken (Issue #6362), Gemini nullable schema issues (PR #6410).
4. **Windows is a second-class platform** — PATH issues (Issue #6239), PowerShell multiline collapse (Issue #6406), force-kill shutdown (Issue #6219 — now fixed).
5. **Security UX concerns** — The approval dialog making "Always Allow" too prominent (Issue #6354) was a serious UX flaw, but has been fixed (PR merged).
6. **Memory system opaque** — Users cannot verify ReMe is working (Issue #6342).

## Backlog Watch

| Item | Age | Issue | Notes |
|------|-----|-------|-------|
| MiniMax-M3 visual ability bug | 43 days | [#5135](https://github.com/agentscope-ai/QwenPaw/issues/5135) — CLOSED | Reopened as Issue #6362. The fix didn't stick, or was incomplete. |
| Windows PATH concatenation bug | 5 days | [#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239) | Still open, 2 comments, no fix PR. Affects npm/Node users on Windows. |
| Cron job session overwrite | 1 day | [#6401](https://github.com/agentscope-ai/QwenPaw/issues/6401) | Fresh, but high severity. No response from maintainers yet. |
| MCP "Tool not found" in v2.0 | 1 day | [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) | Fresh, high impact for MCP users. No response yet. |
| ReAct Agent context corruption (OpenAI 400) | 1 day | [#6407](https://github.com/agentscope-ai/QwenPaw/issues/6407) | Fresh, high severity — breaks all ReAct agents on OpenAI-compatible APIs. No fix PR yet. |
| Governance policy `audit_level=none` not honored | 1 day | *Fixed in PR #6368 (merged)* | Resolved. |
| v2.0 2s overhead (Issue #6307) | 3 days | [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) | Most-discussed issue. No fix PR yet. **Needs immediate maintainer attention.** |

**Priority recommendation:** Issue #6307 (2s overhead) and Issue #6407 (ReAct context corruption) should be treated as **P0** — they affect the core user experience of every v2.0 user.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-07-24

## Today's Overview
ZeptoClaw saw moderate activity in the last 24 hours, with two new open issues and one open pull request, though no releases were published. The project is in a maintenance-heavy phase, focusing on critical safety improvements and CI pipeline restoration. Both issues are labeled **P1-critical**, indicating high-priority concerns around process environment safety and build health. No community discussion or reactions have emerged yet on these items, suggesting they are maintainer-driven rather than user-reported. Overall, the project appears stable but with urgent technical debt being addressed.

## Releases
**No new releases** were published today. The latest available release remains unchanged from previous periods.

## Project Progress
**No pull requests were merged or closed today.**  
One new PR, [#645](https://github.com/qhkm/zeptoclaw/pull/645), was opened by maintainer **qhkm** to address subprocess security and timeout handling. The PR targets runtime safety improvements, including:
- Scrubbing the process environment for shell commands to prevent credential leakage
- Ensuring timed-out child process trees are terminated and reaped
- Cleaning up orphaned Docker containers from timed-out runs

This PR directly addresses the bug described in Issue [#644](https://github.com/qhkm/zeptoclaw/issues/644). It remains open with no comments or reviews yet.

## Community Hot Topics
**No issues or PRs received comments or reactions in the last 24 hours.**  
The two open issues and one PR are all authored by the maintainer **qhkm**, with zero community engagement so far. This suggests the current activity is internal and focused on core infrastructure improvements rather than responding to user feedback.

## Bugs & Stability
**Two new critical bugs were reported today, both labeled P1-critical:**

1. **[[bug, P1-critical] Scrub subprocess environments and terminate process trees on timeout](https://github.com/qhkm/zeptoclaw/issues/644)**  
   - **Severity:** Critical — Credential leakage and resource leaks  
   - **Description:** Runtime subprocesses inherit ZeptoClaw's full environment, potentially exposing provider keys and credentials to model-authored commands. Additionally, timeouts wrap `Command::output()` but don't ensure the spawned process tree is killed and reaped.  
   - **Fix PR:** [#645](https://github.com/qhkm/zeptoclaw/pull/645) is open and directly addresses this bug.

2. **[[chore, P1-critical] Restore Clippy and cargo-deny checks on current toolchain](https://github.com/qhkm/zeptoclaw/issues/646)**  
   - **Severity:** Critical — Prevents CI from passing  
   - **Description:** PR [#645](https://github.com/qhkm/zeptoclaw/pull/645) revealed two pre-existing CI failures unrelated to its changes:
     - Rust 1.97.1 generates five new Clippy warnings in existing channel, provider, and binary-plugin code.
     - Cargo-deny rejects vulnerable versions of `quick-xml 0.39.2` and `lopdf 0.40.0`.  
   - **Fix:** No dedicated fix PR yet; likely will be addressed alongside #645 or in a follow-up.

**No crashes, regressions, or user-reported bugs were recorded today.**

## Feature Requests & Roadmap Signals
**No user-submitted feature requests were identified today.**  
Both open issues are infrastructure/tech-debt items (CI fix, safety hardening) rather than new features. The subprocess environment scrubbing in PR #645 could be seen as a safety feature for production deployments, but it is driven by security best practices rather than user demand.

**Predicted next-version inclusions:**
- Subprocess environment sanitization and process tree cleanup (PR #645)
- Updated dependency resolution for `quick-xml` and `lopdf` vulnerabilities
- Clippy lint fixes for compatibility with Rust 1.97.1

## User Feedback Summary
**No user feedback, complaints, or pain points were recorded in the last 24 hours.**  
All activity is maintainer-initiated. The absence of user comments on the critical safety fix suggests that either the issue has not yet been widely noticed, or users have not encountered the problem in practice.

## Backlog Watch
**No long-unanswered issues or PRs were identified today.**  
Both open items (#644 and #646) were created less than 24 hours ago and already have corresponding activity (PR #645 for #644). No stale or unaddressed items require maintainer attention at this time.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-24

## Today's Overview

ZeroClaw is in a period of **high-intensity development and stabilization**, with 50 issues and 50 PRs updated in the last 24 hours. The project has 41 open/active issues and 48 open PRs, indicating a substantial backlog of work in progress. Activity is concentrated on **critical bug fixes, security hardening, and infrastructure refactoring** across the runtime, channels, config, and desktop components. The community is actively contributing, with multiple PRs from first-time contributors and several "needs-author-action" items awaiting follow-up. The absence of new releases suggests the team is consolidating changes before the next version cut.

## Releases

**None.** No new releases were published in the last 24 hours. The project appears to be between release cycles, with the last listed version being v0.8.3 referenced in open issues.

## Project Progress

Two PRs were merged or closed today:
- **[#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320)** — fix(cron): bound agent job runs with a wall-clock timeout that releases the lock. This addresses a critical S1 bug where hung agent cron jobs never released their SQLite lock, blocking future runs. Now has a 120s wall-clock timeout mirroring shell jobs.
- **[#9299](https://github.com/zeroclaw-labs/zeroclaw/pull/9299)** — fix(config): default `context_compression.enabled` to `false` and warn on the inert surface. The runtime compressor was removed earlier, but the config default was still `true`, causing confusion.

Key structural refactors advancing:
- **[#9319](https://github.com/zeroclaw-labs/zeroclaw/pull/9319)** — refactor(runtime): seal the engine tool registry as `ScopedToolRegistry`. This encapsulates the tool registry behind a newtype, preventing accidental bypasses and enabling future security scoping.
- **[#9295](https://github.com/zeroclaw-labs/zeroclaw/pull/9295)** — fix(release): repair package publishing workflows, including Scoop and Homebrew.
- **[#9317](https://github.com/zeroclaw-labs/zeroclaw/pull/9317)** — fix(zerocode): render transient frames as a viewport slice instead of full history, addressing the ZeroCode keystroke lag issue (#9092).

## Community Hot Topics

### Most Active Issues
1. **[#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566)** — [OPEN] Tracker: A2A protocol interoperability (9 comments, 7 👍). The most-upvoted open issue. The community is actively pushing for ZeroClaw to support the open Agent2Agent protocol, enabling interoperation with NanoClaw, OpenClaw, and other A2A-compliant agents. This is a major roadmap item.

2. **[#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127)** — [OPEN] RFC: Abstract a `KeySource` trait (7 comments). A detailed security RFC proposing classification of master-key material by source/deployment form. Signals deep architectural thinking around secrets management.

3. **[#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378)** — [CLOSED] Feature: Discord Bot respond only in specific Discord channels (8 comments). Recently closed, indicating this channel-specific configurability has been delivered.

4. **[#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767)** — [CLOSED] Feature: Multi-Agent Routing (7 comments, 9 👍). Closed but heavily reacted-to, showing strong community demand for multi-agent workspace isolation.

### Most Active Pull Requests
- **[#8838](https://github.com/zeroclaw-labs/zeroclaw/pull/8838)** — fix(providers): idle-bound SSE streaming on one shared transport. A large (XL) PR standardizing SSE parsing across OpenAI, Anthropic, and Compatible providers with a 90-second idle guard.
- **[#8746](https://github.com/zeroclaw-labs/zeroclaw/pull/8746)** — fix(goal): stop active goal self-resume loops. This touches 20+ component labels, reflecting its cross-cutting nature.
- **[#9251](https://github.com/zeroclaw-labs/zeroclaw/pull/9251)** — feat(infra): PostgreSQL as the first supported session backend. A major infrastructure shift from SQLite-only to PostgreSQL support.

## Bugs & Stability

### Today's New Bugs (S1 - Workflow Blocked)
1. **[#9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290)** — Windows desktop installer fails at launch with missing `TaskDialogIndirect`. S1 blocker for Windows users. No fix PR yet.
2. **[#9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207)** — `web_fetch` returns garbage for compressed responses (gzip, brotli, deflate). S1 — agents cannot parse binary data. In-progress, status:accepted.
3. **[#9204](https://github.com/zeroclaw-labs/zeroclaw/issues/9204)** — Landlock sandbox restricts the ZeroClaw daemon itself. S1 — daemon cannot access SQLite or bind TCP ports when sandboxing is enabled.

### Today's New Bugs (S2 - Degraded Behavior)
4. **[#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284)** — config flush can overwrite concurrent writes. S2 — race condition in the config save path. Fix PR [#9297](https://github.com/zeroclaw-labs/zeroclaw/pull/9297) opened same day.
5. **[#9285](https://github.com/zeroclaw-labs/zeroclaw/issues/9285)** — nested `set_prop` masks invalid values as unknown properties. S3 minor, but fix PR [#9310](https://github.com/zeroclaw-labs/zeroclaw/pull/9310) already submitted.

### Ongoing Critical Bugs with Fixes in Progress
- **[#9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191)** — Cron agent jobs have no wall-clock timeout. **Fixed today** by [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320).
- **[#9188](https://github.com/zeroclaw-labs/zeroclaw/issues/9188)** — Telegram long-poll advances offset before successful delivery. S0 data loss risk. Fixed by [#9321](https://github.com/zeroclaw-labs/zeroclaw/pull/9321).
- **[#9187](https://github.com/zeroclaw-labs/zeroclaw/issues/9187)** — WeChat sync cursor persisted before message enqueue. S0 data loss risk. No fix PR yet.
- **[#9236](https://github.com/zeroclaw-labs/zeroclaw/issues/9236)** — Fresh Telegram aliases are dropped after config reload. No fix PR yet.

## Feature Requests & Roadmap Signals

### Likely for Next Release (v0.9.0)
The **[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)** tracker consolidates v0.9.0 work: auth/security hardening, A2A interoperability, multi-agent boundaries, and breaking changes. High-certainty inclusions:
- **A2A protocol support** (#3566) — foundational for agent federation
- **PostgreSQL session backend** (PR #9251) — a major infrastructure upgrade
- **ScopedToolRegistry** (PR #9319) — security architecture change
- **KeySource trait** (#9127) — secrets management refactoring
- **TOTP for cross-channel approval** (#3767) — security feature for destructive commands

### Emerging Community Demands
- **[#8999](https://github.com/zeroclaw-labs/zeroclaw/issues/8999)** — ZeroCode streamed user turns look like log/API payloads to small local models (Ollama). Suggests need for protocol-aware formatting for 7B-class models.
- **[#9228](https://github.com/zeroclaw-labs/zeroclaw/issues/9228)** — Eval results dashboard and trend tracking. Deferred from #7065, community wants longitudinal view of agent capability testing.
- **[#3672](https://github.com/zeroclaw-labs/zeroclaw/issues/3672)** — Workspace file and memory change history. Users want version control for agent self-modifications (SOUL.md, AGENTS.md).

## User Feedback Summary

### Satisfaction Signals
- **Strong community engagement:** 50 issues and 50 PRs updated daily, with contributors like @IftekharUddin, @Project516, and @Audacity88 submitting high-quality work.
- **Closed PRs addressing long-standing pain:** The log-to-stderr fix (#4721), Discord channel whitelist (#6378), and token redaction disablement (#4832) show responsiveness to user workflow needs.
- **Documentation and CLI improvements welcomed:** PRs like [#9075](https://github.com/zeroclaw-labs/zeroclaw/pull/9075) (persisting model catalog cache) and [#9291](https://github.com/zeroclaw-labs/zeroclaw/pull/9291) (detecting installed AppImage) address common user friction points.

### Pain Points
- **Windows desktop broken:** Multiple reports of installer failures (#9290) and the `zeroclaw desktop` command not detecting installed AppImages (#9202).
- **Channel delivery reliability:** S0 severity bugs in Telegram and WeChat channels where message delivery can be silently lost (#9188, #9187) — this erodes user trust in production use.
- **Config and state persistence:** Users report config values silently dropped (#9236), concurrent write conflicts (#9284), and cron job state leaks (#9191). This suggests the runtime state machine needs hardening.
- **Small model support:** ZeroCode with local Ollama models produces confusing output (#8999) and UI lag (#9092, #9119), impacting the developer experience on consumer hardware.

## Backlog Watch

### High-Impact Items Needing Maintainer Attention
1. **[#9187](https://github.com/zeroclaw-labs/zeroclaw/issues/9187)** — WeChat sync cursor persists before message enqueue. **S0 data loss.** No fix PR yet. The Telegram counterpart (#9188) already has a fix; WeChat still unaddressed.
2. **[#9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290)** — Windows desktop installer `TaskDialogIndirect` failure. **S1 blocker** for Windows users. No PR. New today (2026-07-23).
3. **[#8765](https://github.com/zeroclaw-labs/zeroclaw/issues/8765)** — *(not in top 30 but previously flagged)* Long-dormant security issues may need rotation review.
4. **Needs-author-action PRs:** There are multiple PRs (at least 7) tagged `needs-author-action` waiting for contributor follow-up, including large/XL PRs like #8746, #8838, #8741, #8561, and #8689. These represent significant engineering investment that is blocked.

### Long-Running Open Issues with No Recent Activity
- **[#3696](https://github.com/zeroclaw-labs/zeroclaw/issues/3696)** — External commands for message lifecycle hooks (last updated 2026-07-23, but created March 16). Sits accepted with no assigned PR.
- **[#4760](https://github.com/zeroclaw-labs/zeroclaw/issues/4760)** — Schema-validated tool calls for memory consolidation (created March 26). Accepted, no-stale, but no PR linked.
- **[#8997](https://github.com/zeroclaw-labs/zeroclaw/issues/8997)** — Warn when peer_groups channel ref targets non-existent alias (created July 11). Accepted, in-progress, but no PR yet — would greatly improve config debuggability.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*