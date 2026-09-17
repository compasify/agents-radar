# OpenClaw Ecosystem Digest 2026-09-17

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-09-17 00:51 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest — 2026-09-17**

---

### **1. Today's Overview**  
The OpenClaw project remains highly active with a surge of developer engagement: **500 issues and 500 pull requests updated in the last 24 hours**, indicating intense development momentum. The ecosystem is under significant pressure due to critical stability issues—particularly memory leaks, crash loops, and update failures—across multiple platforms (Windows, Linux, macOS). Despite no new releases, the volume of high-severity bugs (P0/P1) and urgent PRs suggests that the upcoming **2026.9.4/9.5 release cycle is in crisis mode**, likely delaying stable deployment. Community trust is being tested by recurring regressions and unpatched production blockers.

---

### **2. Releases**  
❌ **No new releases** have been published as of 2026-09-17.  
⚠️ **Critical Update Failures Reported**:  
- **2026.9.3 → 2026.9.4 upgrades are failing on Windows** due to `mkdir` path expansion issues (`$OPENCLAW_STATE_DIR` not expanded) — [Issue #146719](https://github.com/openclaw/openclaw/issues/146719)  
- **npm global updates fail** due to schema migration mismatches — [Issue #144739](https://github.com/openclaw/openclaw/issues/144739)  
- **Windows snapshot fails** during update — [Issue #150201](https://github.com/openclaw/openclaw/issues/150201)  
➡️ *Migration to 2026.9.4 is currently blocked for many users.*

---

### **3. Project Progress**  
✅ **Merged/Closed PRs Today**:  
While no PRs were explicitly marked "merged" in the data, **several high-priority fixes are ready for review** and appear to be in final stages:  
- [PR #150274](https://github.com/openclaw/openclaw/pull/150274): Fixes plugin state retention after reload; reduces allocations  
- [PR #150196](https://github.com/openclaw/openclaw/pull/150196): Keeps session lists current in memory; prevents stale reads  
- [PR #150415](https://github.com/openclaw/openclaw/pull/150415): Centralizes tool block contracts across replay/heartbeat/filtering  
- [PR #148078](https://github.com/openclaw/openclaw/pull/148078): Reduces plugin activation overhead  
- [PR #149533](https://github.com/openclaw/openclaw/pull/149533): Performance improvement for cold session catalog listings (⚠️ flagged as not ready to merge due to CPU regressions)

> These PRs represent core infrastructure improvements focused on **memory efficiency, lifecycle consistency, and performance**—critical for stabilizing the gateway.

---

### **4. Community Hot Topics**  
🔥 **Top Issues by Comment Count & Severity**:

| Issue | Summary | Comments | Severity | Link |
|------|--------|---------|----------|------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Zombie process leak from hooks/tools causing runtime degradation | 30 | 🦞 Diamond Lobster (P1) | [Bug: Process Leak](https://github.com/openclaw/openclaw/issues/97616) |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway memory leak: RSS grows from 350MB → 15.5GB, OOM crashes | 25 | 🦞 Diamond Lobster (P1) | [Memory Leak: OOM Crashes](https://github.com/openclaw/openclaw/issues/91588) |
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | MCP server init timeout crashes Gateway via unhandled promise rejection | 24 | 🦞 Diamond Lobster (P1) | [MCP Init Timeout Crash](https://github.com/openclaw/openclaw/issues/144911) |
| [#150201](https://github.com/openclaw/openclaw/issues/150201) | Windows update fails due to unexpanded `$OPENCLAW_STATE_DIR` in extended path | 14 | 🦞 Diamond Lobster (P0) | [Windows Update Failure](https://github.com/openclaw/openclaw/issues/150201) |

💡 **Underlying Needs**:  
- **Stability at scale** (632-agent fleets, long-running gateways)  
- **Reliable update/rollback mechanisms**  
- **Predictable resource usage** (no memory leaks, zombie processes)  
- **Cross-platform consistency** (especially Windows + ARM64)

---

### **5. Bugs & Stability**  
🚨 **Critical Bugs Reported Today (Ranked by Severity)**:

| Bug | Impact | Status | Fix PR? | Link |
|-----|--------|--------|---------|------|
| **[#149538](https://github.com/openclaw/openclaw/issues/149538)** | Gateway reaches “ready” but never serves — `/health` times out, event loop starved | Crash-loop, UX-blocker | ❌ No fix yet | [Event Loop Starvation](https://github.com/openclaw/openclaw/issues/149538) |
| **[#148529](https://github.com/openclaw/openclaw/issues/148529)** | Boot time from 2s (2026.7.1-2) → 12 minutes (2026.9.4) on 632-agent fleet | Regression, UX-blocker | ❌ No fix yet | [Boot Time Regression](https://github.com/openclaw/openclaw/issues/148529) |
| **[#144911](https://github.com/openclaw/openclaw/issues/144911)** | Unhandled promise rejection in child cleanup path causes full Gateway crash | Crash-loop | ❌ No fix yet | [Uncaught Rejection in Cleanup](https://github.com/openclaw/openclaw/issues/144911) |
| **[#97616](https://github.com/openclaw/openclaw/issues/97616)** | Child process zombies accumulate → eventual OOM | Runtime degradation | ❌ No fix yet | [Zombie Process Leak](https://github.com/openclaw/openclaw/issues/97616) |
| **[#136311](https://github.com/openclaw/openclaw/issues/136311)** | Reindex lock never released → index repair impossible | Data corruption risk | ❌ No fix yet | [Reindex Lock Stuck](https://github.com/openclaw/openclaw/issues/136311) |

> ⚠️ **Note**: All top P0/P1 bugs lack merged fixes. This indicates **urgent maintainer triage required** before any stable release can be trusted.

---

### **6. Feature Requests & Roadmap Signals**  
📌 **Emerging Themes in Feature Requests**:

| Request | Use Case | Priority Signal | Link |
|-------|----------|------------------|------|
| **One-way dispatch mode (no reply ping-pong)** | Agent-to-agent handoffs without feedback loop | P2, high demand | [Issue #44309](https://github.com/openclaw/openclaw/issues/44309) |
| **Prune stale orphaned sessions** | Clean up dead sessions tied to deleted channels | High UX friction | [Issue #49259](https://github.com/openclaw/openclaw/issues/49259) |
| **RTL bidi isolation at gateway boundary** | Fix Hebrew/Arabic punctuation rendering | Localization need | [Issue #68105](https://github.com/openclaw/openclaw/issues/68105) |
| **Native PowerShell smoke tests** | Ensure contributor commands work cross-platform | Dev experience priority | [Issue #44291](https://github.com/openclaw/openclaw/issues/44291) |

> ✅ **Predicted for Next Release**: One-way dispatch and session pruning are likely candidates for inclusion in **2026.9.5**, given their traction and alignment with agent orchestration maturity.

---

### **7. User Feedback Summary**  
💬 **Real User Pain Points (From Issues & PRs)**:

- **“I upgraded to 2026.9.3 → 2026.9.4 and now my Gateway crashes every 2 days.”** → Memory leak and OOM kills ([#91588](https://github.com/openclaw/openclaw/issues/91588))  
- **“My WebChat session starts blind — no prior context.”** → AI unaware of conversation history ([#99925](https://github.com/openclaw/openclaw/issues/99925))  
- **“After updating, I can’t log out — auth store says ‘lock may be busy’.”** → Auth failure persists post-recovery ([#145929](https://github.com/openclaw/openclaw/issues/145929))  
- **“Telegram replies duplicate first commentary when snapshot ID changes.”** → UI inconsistency affecting user trust ([#116512](https://github.com/openclaw/openclaw/issues/116512))  
- **“Plugins install silently fail — no progress indicator.”** → Lack of feedback causes confusion ([#150235](https://github.com/openclaw/openclaw/pull/150235))

> 💬 **Sentiment**: Users are frustrated with **unpredictable behavior, poor error messaging, and lack of visibility into system state**—despite powerful underlying capabilities.

---

### **8. Backlog Watch**  
🔍 **Long-Unanswered or Critical Items Needing Maintainer Attention**:

| Issue | Age | Severity | Status | Notes |
|------|-----|----------|--------|-------|
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | 6 days old | 🦞 Diamond Lobster (P1) | Open | Unhandled rejection in cleanup path — **crash loop** |
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | 1 day old | 🦞 Diamond Lobster (P0) | Open | Event loop starved — **Gateway unusable** |
| [#150201](https://github.com/openclaw/openclaw/issues/150201) | 1 day old | 🦞 Diamond Lobster (P0) | Open | Windows update fails — **release blocker** |
| [#145252](https://github.com/openclaw/openclaw/issues/145252) | 6 days old | 🌊 Off-meta tidepool (P0) | Open | Tracking update reliability — **needs coordination** |
| [#136311](https://github.com/openclaw/openclaw/issues/136311) | 15 days old | 🐚 Platinum Hermit (P1) | Open | Index repair impossible — **data integrity risk** |

> 🔴 **Critical Gap**: Several **P0 bugs are open for over a week with no assigned maintainer or PR** — this reflects a **maintenance bottleneck** despite high community activity.

---

### ✅ **Final Assessment**  
**OpenClaw is in a state of high tension**: massive contributor activity meets severe stability challenges. While technical improvements are being made (e.g., refactoring, perf fixes), **core system reliability is compromised** by unaddressed P0/P1 bugs. Without immediate resolution of **memory leaks, boot regressions, and update failures**, adoption will stall. The project’s future hinges on **rapid triage, coordinated fixes, and transparent communication** around the next stable release.

👉 **Recommended Actions**:  
- Prioritize fixing **#149538**, **#148529**, and **#150201**  
- Assign maintainers to all P0 issues within 24h  
- Delay 2026.9.5 until these are resolved  
- Publish an emergency changelog detailing known issues and workarounds  

---  
*Data Source: GitHub — openclaw/openclaw (2026-09-17)*

---

## Cross-Ecosystem Comparison

⚠️ Comparative analysis generation failed.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-09-17**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active with a robust pace of development: **50 issues and 50 pull requests updated in the last 24 hours**, indicating sustained engineering momentum. The ecosystem is focused on stability, session integrity, and platform-specific reliability—particularly around concurrent execution, message delivery, and fallback logic. No new releases were published today, suggesting that the team is prioritizing patching over versioning. Despite this, the volume of closed PRs and resolved issues reflects strong progress in addressing critical bugs and improving user experience across desktop, CLI, and gateway integrations.

---

### **2. Releases**  
**No new releases** were published as of 2026-09-17. The latest release remains **v0.21.3 (2026.9.14)**, which introduced improvements to scale-to-zero behavior and heartbeat handling. Maintainers are likely preparing for an upcoming patch or feature release based on recent PR merges related to MoA billing clarity, watchdog fixes, and security hardening.

---

### **3. Project Progress**  
Over the past day, **20 pull requests were merged or closed**, marking significant forward movement in several key areas:

- ✅ **Session & State Management**: Fixes for `/branch` mid-turn race conditions (#113210), persistent session tracking in TUI/Desktop (#113211), and rogue `NO_REPLY` marker handling (#113031).
- ✅ **Kanban Workflow Stability**: Multiple PRs addressed stale worker claims (`_claim_is_live`, PID-less reclamation) and misclassified task states (#113627, #113632, #113610).
- ✅ **Security & Compliance**: Critical fixes to `body-parser` vulnerability in WhatsApp bridge (#112382), file write guards anchored to process HOME instead of profile HOME (#113628), and improved credential isolation.
- ✅ **User Experience**: Resolved garbled ANSI characters in install logs (#113213), fixed misleading "Gateway Inference unavailable" alerts (#113216), and retired outdated update tips (#113634).
- ✅ **Model Fallback Clarity**: Two related PRs clarified MoA fallback behavior—correcting both provider name and model slug exposure (#112525, #112623).

These merges indicate a mature focus on **robustness, observability, and UX polish** ahead of potential v0.22.

---

### **4. Community Hot Topics**  
Top community concerns center on **session isolation**, **message delivery reliability**, and **MoA billing transparency**:

- 🔥 **#46303** – *Concurrent sessions cross-contaminate* (8 comments): A P2 bug affecting Desktop GUI users where shared memory and Git worktrees cause data leakage between sessions. This is a high-severity risk for multi-session workflows.
  - [GitHub Issue #46303](https://github.com/nousresearch/hermes-agent/issues/46303)
- 🔥 **#113618** – *Telegram stall watchdog rebuilds poller but never recovers* (2 comments): A P1 issue causing gateways to go “deaf” after restarts, requiring manual process restarts. Users report silent failures on Linux fleets.
  - [GitHub Issue #113618](https://github.com/nousresearch/hermes-agent/issues/113618)
- 🔥 **#113631** – *Discord missed-message backfill re-dispatches same message endlessly* (0 comments, but severe impact): A P2 bug causing infinite reprocessing of messages on reconnect—a major concern for Discord users relying on message continuity.
  - [GitHub Issue #113631](https://github.com/nousresearch/hermes-agent/issues/113631)

These top issues reflect growing demand for **system resilience, state consistency, and real-time coordination across platforms**.

---

### **5. Bugs & Stability**  
Critical and medium-severity bugs reported today highlight instability in core workflows:

| Severity | Issue | Summary | Fix PR? |
|---------|-------|--------|--------|
| **P1** | [#113618](https://github.com/nousresearch/hermes-agent/issues/113618) | Telegram gateway goes deaf after watchdog rebuild — no recovery without restart | ❌ Pending |
| **P1** | [#113031](https://github.com/nousresearch/hermes-agent/issues/113031) | `NO_REPLY` markers trigger warning spam despite being valid silence signals | ✅ Fixed via PR #113031 (closed) |
| **P2** | [#46303](https://github.com/nousresearch/hermes-agent/issues/46303) | Concurrent sessions share memory/worktree → data contamination | ❌ Pending |
| **P2** | [#112525](https://github.com/nousresearch/hermes-agent/issues/112525) | MoA fallback discards resolved aggregator model slug | ✅ Fixed in PR #112525 |
| **P2** | [#112623](https://github.com/nousresearch/hermes-agent/issues/112623) | `agent.provider` stays as `"moa"` even when real HTTP client used | ✅ Fixed in PR #112623 |
| **P3** | [#113611](https://github.com/nousresearch/hermes-agent/issues/113611) | Kanban respawn guard misses clean exit without transition | ❌ Pending |

> ⚠️ **Notable Regressions**: Several PRs address previously unseen edge cases in worker lifecycle management, suggesting deeper architectural complexity in job orchestration.

---

### **6. Feature Requests & Roadmap Signals**  
Emerging themes point toward **enhanced visibility, automation, and integration depth**:

- 🎯 **MoA Billing Transparency**: Multiple issues (#112359, #112525, #112623) emphasize user confusion over who gets billed during fallbacks. This suggests a need for **clearer UI indicators** and **cost attribution logging** in future versions.
- 🧩 **Plugin Ecosystem Expansion**: New plugin catalog addition (#113635) for `hud-teach` indicates a push toward **interactive learning tools** within the app.
- 🔄 **Cron Job Failure Reporting**: PR #112426 highlights a gap in failure reporting—users want cron jobs to fail visibly if delegated children fail. This will likely be prioritized in v0.22.
- 📱 **Platform-Specific Improvements**: Fixes for Telegram, Discord, and Feishu suggest ongoing investment in **multi-platform parity** and **message fidelity**.

> 🔮 **Predicted v0.22 Focus**: Session isolation, MoA cost clarity, enhanced cron monitoring, and proactive health checks across gateways.

---

### **7. User Feedback Summary**  
Real-world pain points from users include:

- **Desktop App Instability**: Garbled logs during installation (#112675), session state flickering (#113029), and edit composer glitches (#112944).
- **Confusion Over Costs**: Users expect Codex billing during MoA fallbacks but are surprised by actual charges — indicating poor feedback loops in pricing models.
- **Message Reprocessing Chaos**: Discord users report receiving the same message 24 times over 12 hours due to backfill loops — a serious trust issue.
- **Silent Failures**: Many users report that failed tasks appear successful in logs, leading to false confidence in automated workflows.

> 💬 **Satisfaction Signal**: Positive reception of PRs fixing visual inconsistencies (e.g., ANSI escape codes, model badges) shows users value polished UX.

---

### **8. Backlog Watch**  
Several long-standing or high-impact issues remain unresolved and require maintainer attention:

- 🟡 **#46303** – Concurrent session contamination (8 comments, P2, 2026-06-14)  
  - **Status**: Open, high-risk, affects core workflow integrity.  
  - **Action Needed**: Prioritize isolation layer design review and test coverage.

- 🟡 **#113631** – Discord missed-message backfill loop (0 comments, P2)  
  - **Status**: High-impact, silently corrupts message history.  
  - **Action Needed**: Immediate investigation into `reply_to_mode: off` anchor logic.

- 🟡 **#113618** – Telegram gateway deadlock post-watchdog (2 comments, P1)  
  - **Status**: Critical for production fleets; requires process-level recovery mechanism.  
  - **Action Needed**: Review `stall watchdog` + `poller rebuild` interaction.

- 🟡 **#112382** – Vulnerable `body-parser` in WhatsApp bridge (3 moderate advisories)  
  - **Status**: Security-related, already patched in PR #112382, but not yet merged.  
  - **Action Needed**: Merge immediately to prevent supply chain risk.

> ⏳ These represent **technical debt accumulation** and could hinder adoption in enterprise or regulated environments.

--- 

**Digest compiled**: 2026-09-17 | Source: [Hermes Agent GitHub](https://github.com/nousresearch/hermes-agent)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-09-17**

---

### **1. Today's Overview**  
QwenPaw remains highly active with a robust development pulse: **25 new issues** and **37 pull requests** updated in the past 24 hours, indicating strong community engagement and ongoing engineering momentum. The project is clearly transitioning from a personal AI assistant toward a multi-tenant, team-oriented platform, as evidenced by the growing focus on enterprise-grade features like Hub scalability, model governance, and access control. Despite no new releases, the pipeline is rich with critical bug fixes and feature enhancements—especially around stability (memory exhaustion, SSE streaming), security (shell evasion), and UI/UX polish. The lack of releases suggests that v2.2.1 or v2.2.2 may be imminent, likely focused on stabilizing recent changes.

---

### **2. Releases**  
❌ **No new releases** were published today.  
The last release was `v2.2.1` (as noted in Issue #7799), which addressed several console display bugs but did not resolve core stability issues. Given the volume of merged PRs related to memory management, streaming reliability, and security hardening, a **patch release (v2.2.2)** is expected soon to address:
- Memory exhaustion (Issue #7722)
- SSE stream failures (Issues #7813, #7814)
- Shell command safety (PR #7120)

> 🔗 *No release notes available yet — monitor [GitHub Releases](https://github.com/agentscope-ai/QwenPaw/releases) for updates.*

---

### **3. Project Progress**  
✅ **12 PRs merged/closed** today, including high-impact fixes and foundational improvements:

| PR | Summary | Impact |
|----|--------|--------|
| [#7805](https://github.com/agentscope-ai/QwenPaw/pull/7805) | Fix font weight mismatch in settings menu | UX polish |
| [#7783](https://github.com/agentscope-ai/QwenPaw/pull/7783) | Prevent ACP reply duplication/fragmentation | Core agent reliability |
| [#7613](https://github.com/agentscope-ai/QwenPaw/pull/7613) | Introduce OpenViking memory plugin as optional | Extensibility & modularity |
| [#7760](https://github.com/agentscope-ai/QwenPaw/pull/7760) | Allow memory jobs to drain on shutdown | Stability & graceful exit |
| [#6569](https://github.com/agentscope-ai/QwenPaw/pull/6569) | Suppress EIO/EPIPE errors after detached TTY | CLI robustness |

These PRs reflect a shift toward **system-level resilience**, **modular architecture**, and **user-facing polish**, particularly in desktop and CLI environments.

---

### **4. Community Hot Topics**  
🔥 **Top 5 Most Active Issues/PRs** (by comments/reactions):

| Issue/PR | Title | Comments | 👍 | Link |
|---------|------|----------|-----|------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | QwenPaw Hub: Multi-tenant edition roadmap discussion | 29 | 4 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7318) |
| [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | Memory exhaustion via three compounding paths | 5 | 0 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7722) |
| [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) | Console fails to recover from lazy load error | 4 | 0 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7815) |
| [#7814](https://github.com/agentscope-ai/QwenPaw/issues/7814) | SSE emits bare `null` payload → stream failure | 2 | 0 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7814) |
| [#7813](https://github.com/agentscope-ai/QwenPaw/issues/7813) | SSE stream freezes on bare `null` frame | 2 | 0 | [Link](https://github.com/agentscope-ai/QwenPaw/issues/7813) |

🔍 **Underlying Needs**:  
- **Enterprise readiness** (Hub, multi-tenancy, governance) is a top priority (Issue #7318).  
- **UI/UX reliability** is under pressure — users report unhandled errors that break navigation and streams.  
- **Streaming robustness** is a systemic concern: malformed events (`null`) cause cascading failures, suggesting need for stricter validation at the channel level.

---

### **5. Bugs & Stability**  
🚨 **Critical Stability Issues Reported Today** (ranked by severity):

| Issue | Severity | Description | Fix PR? |
|------|----------|-------------|--------|
| [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | Critical ⚠️ | Three compounding paths to container OOM: unbounded buffers, keep-alive stacking, doom-loop gate evasion | ✅ PR #7808 (fixes doom loop) exists; others pending |
| [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) | High | Console stuck on error screen after failed lazy load; requires full reload | ❌ No fix PR yet |
| [#7814](https://github.com/agentscope-ai/QwenPaw/issues/7814) | High | SSE emits invalid `null` payload → breaks stream | ✅ PR #7811 addresses context ring; streaming fix pending |
| [#7813](https://github.com/agentscope-ai/QwenPaw/issues/7813) | High | Bare `null` in SSE payload freezes entire stream | ✅ PR #7814 partially addresses root cause |
| [#7799](https://github.com/agentscope-ai/QwenPaw/issues/7799) | Medium | Images sent via `send_file_to_user` disappear after response | ✅ Closed — indicates regression in v2.2.1 |

💡 **Pattern**: Streaming, memory, and UI recovery are recurring pain points. Fixes are emerging but not yet unified — risk of regressions if not coordinated.

---

### **6. Feature Requests & Roadmap Signals**  
🚀 **Emerging Themes in User Requests**:

| Feature | Request Source | Priority Signal |
|-------|----------------|-----------------|
| **Multi-tenant Hub** (Team/organization support) | Issue #7318 (29 comments, 4 upvotes) | ✅ Top-priority roadmap item |
| **Task completion alerts** (orange status in bottom bar) | Issue #7800 (1 comment) | 💡 High user visibility, low complexity |
| **Realtime voice chat** | PR #7785 (feat/voice) | 🎯 Active dev interest |
| **i18n for tool approval cards** | Issue #7809 | 🌍 Global user demand |
| **Chat mode selector: Discuss vs Execute** | Issue #7801 | 🧠 UX clarity needed for agent behavior |
| **Cleaner output: Only final artifacts** | Issue #7797 | 📦 User frustration with clutter |

🔮 **Predicted Next Release (v2.2.2)**: Likely to include:
- Hub MVP (model gateway, member governance, usage dashboard — PR #7779)
- Voice chat (PR #7785)
- i18n support for key UI elements
- Stream resilience fixes

---

### **7. User Feedback Summary**  
🗣️ **Real User Pain Points (from Issues & PRs)**:

- **"I can't use it in teams"** – Repeated calls for multi-user/multi-tenant support (Issue #7318).
- **"It crashes on large workspaces"** – File watching causes server freeze (PR #7725).
- **"Images vanish after sending"** – Affects workflow trust (Issue #7799).
- **"Too many temporary files"** – Users want clean, final-only outputs (Issue #7797).
- **"After startup, slash commands act on wrong session"** – Confusing UX (Issue #7812).

🎯 **User Satisfaction**: Mixed.  
- **Satisfied**: With modular plugins (OpenViking, memory distillation).  
- **Frustrated**: By unrecoverable UI states, broken streams, and poor feedback on task status.

---

### **8. Backlog Watch**  
⚠️ **Long-Unanswered or High-Impact Items Needing Maintainer Attention**:

| Issue | Status | Why It Matters | Action Needed |
|------|--------|----------------|---------------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | Open, 29 comments | Defining the future of QwenPaw as a team platform | Prioritize roadmap planning |
| [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | Open, 5 comments | Systemic memory leak risk — could affect production deployments | Assign dedicated engineer |
| [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) | Open, 4 comments | Unrecoverable UI state — impacts usability | Fix within next patch |
| [#7804](https://github.com/agentscope-ai/QwenPaw/issues/7804) | Closed, but vague | "Management" feature lacks clarity — needs scoping | Refine description or reopen |
| [#7730](https://github.com/agentscope-ai/QwenPaw/issues/7730) | Closed, unresolved | Offline fallback broken — undermines reliability | Review fix logic |

📌 **Recommendation**: Maintainers should **triage and respond to #7318 and #7722 immediately** to retain community trust and guide next-phase development.

---

> ✅ **Project Health Score**: **High Activity, Moderate Stability**  
> 🛠️ **Next Steps**: Focus on stabilizing v2.2.2 with core fixes, then accelerate Hub development.  
> 🔗 **Track All**: [GitHub Repository](https://github.com/agentscope-ai/QwenPaw) | [Discussions](https://github.com/agentscope-ai/QwenPaw/discussions)

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest**  
**Date:** 2026-09-17  
**Repository:** [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

### **1. Today's Overview**

The ZeroClaw project remains highly active, with **36 new issues and 50 pull requests updated in the last 24 hours**, indicating strong ongoing development momentum across security, architecture, and core runtime stability. A significant focus is on **security hardening (RUSTSEC-2026-0247), context management, and agent lifecycle coordination**, with multiple high-risk PRs targeting critical paths like plugin admission, token budgeting, and RPC enforcement. Despite no new releases, the velocity of code changes—especially in `runtime`, `agent`, and `gateway`—suggests a pre-release stabilization phase for upcoming features.

---

### **2. Releases**

❌ **No new releases** were published in the past 24 hours.  
The project maintains an active development cadence without formal versioning updates, consistent with its current focus on internal refactoring, security fixes, and feature integration ahead of a potential v0.9.0 milestone.

---

### **3. Project Progress**

#### ✅ **Merged/Closed PRs (Today)**  
While no PRs were merged or closed today, several high-impact PRs are **in progress or awaiting review**, signaling near-term delivery:

- **[PR #10134](https://github.com/zeroclaw-labs/zeroclaw/pull/10134)** – *Fix: Keep agent dispatch panic-free*  
  → Converted 17 panic points to error returns/fail-closed fallbacks; critical for runtime stability.

- **[PR #10259](https://github.com/zeroclaw-labs/zeroclaw/pull/10259)** – *feat(security): enforce authenticated principals on RPC*  
  → Part of a staged rollout for secure RPC access using OIDC and peercred; depends on prior stages.

- **[PR #10879](https://github.com/zeroclaw-labs/zeroclaw/pull/10879)** – *feat(zerocode): combine Sessions Queue and Plan in one dock*  
  → Improves UX by consolidating UI components; already approved and in review.

> 📌 *Note: Several large PRs (e.g., #10621, #10911) are stacked and require upstream merges before review can proceed.*

---

### **4. Community Hot Topics**

#### 🔥 **Top Issues (by comment count)**

| Issue | Summary | Link |
|------|--------|------|
| [#10118](https://github.com/zeroclaw-labs/zeroclaw/issues/10118) | Rust anti-slop policy debt remediation — 16 comments | [Issue #10118](https://github.com/zeroclaw-labs/zeroclaw/issues/10118) |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Maintainer decision queue for RFCs/design issues — 15 comments | [Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| [#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) | Remove unmaintained `bitmaps` advisory (RUSTSEC-2026-0247) — 5 comments | [Issue #9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) |

> 💡 **Underlying Need**: These reflect growing pressure around **code hygiene, governance, and dependency security**. The Rust anti-slop tracker (#10118) shows systemic technical debt that must be addressed before future scalability. The maintainer decision queue (#8692) signals a need for better triage processes as contributor volume increases.

#### 🔥 **Top PRs (by activity)**

| PR | Summary | Link |
|----|--------|------|
| [#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) | Coordinate agent lifecycle mutations via shared live-config authority — 0 comments, high risk/size | [PR #10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) |
| [#10911](https://github.com/zeroclaw-labs/zeroclaw/pull/10911) | Publish atomic live revisions — stacked on #10621, 3,253 lines added | [PR #10911](https://github.com/zeroclaw-labs/zeroclaw/pull/10911) |
| [#10525](https://github.com/zeroclaw-labs/zeroclaw/pull/10525) | Re-add browser enrollment frontdoor (relay-terminated) — 0 comments | [PR #10525](https://github.com/zeroclaw-labs/zeroclaw/pull/10525) |

> 💡 **Pattern**: High-impact architectural changes are being coordinated through **stacked, modular PRs** (e.g., config, RPC, agent lifecycle), suggesting a deliberate effort to manage complexity during major refactorings.

---

### **5. Bugs & Stability**

#### ⚠️ **High-Risk Bugs Reported (Severity S2–S3)**

| Issue | Description | Severity | Status | Fix PR? |
|------|-------------|----------|--------|---------|
| [#10885](https://github.com/zeroclaw-labs/zeroclaw/issues/10885) | Tool-returned images disappear after unrelated tool call in same turn | S2 | In-progress | ❌ No PR yet |
| [#10887](https://github.com/zeroclaw-labs/zeroclaw/issues/10887) | Non-vision capability gate fails on image markers with no loadable image | S2 | Accepted | ❌ No PR yet |
| [#10912](https://github.com/zeroclaw-labs/zeroclaw/issues/10912) | Streaming text guard suppresses replies when prose quotes tool-result objects | S2 | Open | ❌ No PR yet |
| [#10883](https://github.com/zeroclaw-labs/zeroclaw/issues/10883) | Telegram media-group test times out under parallel runtime job | S2 | Accepted | ❌ No PR yet |

> 🔴 **Critical Insight**: Multiple bugs center on **context preservation and state consistency across tool calls and sessions**, particularly in multi-tool, async, or streaming scenarios. This indicates a **fragile state model** in the turn engine that needs deeper refactoring.

---

### **6. Feature Requests & Roadmap Signals**

#### 🎯 **Emerging Features (Likely in Next Release)**

| Feature | Status | Indicators |
|-------|--------|-----------|
| **Async function tools with OpenAI responses** ([#10704](https://github.com/zeroclaw-labs/zeroclaw/issues/10704)) | Accepted, priority P2 | Enables non-blocking tool execution; aligns with async-first design trends |
| **SOP pause/resume controls (web, zerocode, RPC)** ([#9687](https://github.com/zeroclaw-labs/zeroclaw/issues/9687)) | Accepted, blocked | Core to operational control; likely in v0.9.0 |
| **OCI-compliant registries for WASM plugins** ([#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497)) | Accepted, RFC | Long-term storage/distribution strategy; signals maturity in plugin ecosystem |
| **Atomic config publication & per-target apply tracking** ([#10892](https://github.com/zeroclaw-labs/zeroclaw/issues/10892)) | In-progress | Foundation for live configuration management — key for production use |

> 📈 **Prediction**: The next release will emphasize **operational reliability**, **plugin supply chain integrity**, and **user-facing control** (SOPs, config, async tools), with minimal breaking changes.

---

### **7. User Feedback Summary**

User pain points are emerging from real-world usage patterns:

- **Context loss** in multi-tool turns is a recurring theme (e.g., image disappearance, failed message retention).
- **Local model setup** remains frustrating due to lack of centralized guidance (see [#9549](https://github.com/zeroclaw-labs/zeroclaw/issues/9549)).
- **Slack/Telegram integration** suffers from flaky tests and limited scale-to-zero support.
- **ZeroCode UX** is being refined with UI consolidation (e.g., #10879), but feedback suggests it’s still fragmented.

> 👍 **Positive Signal**: Users appreciate proactive security measures (e.g., RUSTSEC warnings) and are engaged in RFCs and design discussions.

---

### **8. Backlog Watch**

Several **high-priority, long-standing issues** require maintainer attention:

| Issue | Priority | Age | Status | Notes |
|------|----------|-----|--------|-------|
| [#10118](https://github.com/zeroclaw-labs/zeroclaw/issues/10118) | P2 | 29 days | In-progress | Rust anti-slop cleanup — critical for maintainability |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | P2 | 54 days | Accepted | Decision queue — essential for governance |
| [#9677](https://github.com/zeroclaw-labs/zeroclaw/issues/9677) | P2 | 54 days | Accepted | Retire legacy command-catalogue fallback — blocker for clean migration |
| [#9679](https://github.com/zeroclaw-labs/zeroclaw/issues/9679) | P3 | 54 days | Accepted | Re-evaluate `act` artifact support — depends on external tooling |

> ⏳ **Call to Action**: These issues represent **governance, tech debt, and compatibility bottlenecks** that could stall future releases if not prioritized.

---

### ✅ **Final Assessment**

ZeroClaw is in a **critical stabilization and architectural refinement phase**. While no releases have been made, the project is advancing rapidly in **security, modularity, and operational control**. High-risk bugs indicate fragile state handling, but corresponding PRs are actively addressing root causes. The community is engaged in meaningful design discussions, and the roadmap reflects a shift toward **production readiness** over novelty.

> 🔗 **Recommendation**: Prioritize resolving **[#10118](https://github.com/zeroclaw-labs/zeroclaw/issues/10118)** and **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** to enable sustainable growth and faster decision-making.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*