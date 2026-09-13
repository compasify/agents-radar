# OpenClaw Ecosystem Digest 2026-09-13

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-09-13 00:29 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest – 2026-09-13**

---

### **1. Today's Overview**  
The OpenClaw project remains highly active with **500 issues and 500 pull requests updated in the last 24 hours**, indicating intense development and community engagement. The ecosystem is experiencing a surge in critical bug reports, particularly around **session state integrity, message loss, crash loops, and upgrade reliability**, suggesting ongoing stress on core runtime stability. While no new releases have been published, multiple high-severity fixes are being actively reviewed, signaling that the next stable release may be imminent. The project continues to balance rapid iteration with growing complexity in agent orchestration, plugin compatibility, and cross-platform resilience.

---

### **2. Releases**  
❌ **No new releases** were published today.  
- The latest available version remains **2026.9.4 (15285e57a4f)**, which has already triggered numerous upgrade path failures (see #145252, #145510, #145782).  
- No migration notes or breaking changes are currently documented for this version, but **multiple regressions and upgrade blockers** are reported in the wild, including schema mismatches (#144739) and failed Doctor repairs (#145782).

---

### **3. Project Progress**  
✅ **17 PRs merged/closed** in the past day, primarily focused on:
- **Performance optimizations**: Reducing repeated code mode fitting (#146584), avoiding redundant heartbeat suffix copying (#146589), and improving history sizing during active runs (#146574).
- **Stability fixes**: Resolving silent tool execution abandonment (#146554), fixing unhandled promise rejections in MCP server cleanup (#144911), and preserving caller context in queued Swarm work (#146490).
- **Security & compliance**: Enhancing SSRF policy per-agent control (#67421), improving auth profile lock handling (#145929), and fixing plugin capture cleanup (#146513).
- **UX improvements**: Faster rendering of long tool argument previews (#146587), better offline workspace recovery diagnostics (#146588), and improved Control UI locale sync (#146400).

> 🔗 *See [PR #146584](https://github.com/openclaw/openclaw/pull/146584) – improve: reduce repeated Code Mode result fitting*  
> 🔗 *See [PR #146588](https://github.com/openclaw/openclaw/pull/146588) – fix(sessions): offer offline workspace recovery when removal is blocked*

---

### **4. Community Hot Topics**  
🔥 **Top 5 Most Active Issues (by comment count)**  
| Issue | Comments | Severity | Link |
|------|----------|---------|------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 29 | 🦞 Diamond Lobster (P1, crash-loop, message-loss) | Zombie process leak from hooks/tools |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 27 | 🦞 Diamond Lobster (P1, data-loss, session-state) | Silent subagent completion loss — no retry, no restart |
| [#142585](https://github.com/openclaw/openclaw/issues/142585) | 17 | 🦐 Gold Shrimp (P0, regression, UX blocker) | Doctor refuses valid legacy workspace migration |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | 16 | 🦞 Diamond Lobster (P1, message-loss) | Subagent completion lost on timeout/drain/orphan prune |
| [#78308](https://github.com/openclaw/openclaw/issues/78308) | 16 | 🦞 Diamond Lobster (P2, security) | Request for channel-mediated approval for MCP tool calls |

🔍 **Underlying Needs Analysis**:
- **Reliability under load**: Multiple issues point to failure modes during high concurrency (subagent timeouts, WebSocket drops, cron reaper blocking).
- **Upgrade safety**: Critical pain points in migration, rollback, and repair processes — users report losing sessions, failing updates, and corrupted state.
- **Transparency & feedback**: Silent failures (no retries, no notifications) are a recurring theme, eroding trust in system behavior.

---

### **5. Bugs & Stability**  
⚠️ **Critical Bugs Reported Today (Ranked by Severity)**

| Issue | Severity | Impact | Fix Status | Link |
|------|----------|--------|------------|------|
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | 🦞 Diamond Lobster (P1) | Gateway crash due to unhandled rejection in child cleanup | ❌ No fix PR yet | `MCP server init timeout crashes Gateway` |
| [#145929](https://github.com/openclaw/openclaw/issues/145929) | 🦪 Silver Shellfish (P0) | Auth logout permanently fails after interrupted self-update | ❌ No fix PR | `auth store lock may be busy` |
| [#145252](https://github.com/openclaw/openclaw/issues/145252) | 🌊 Off-Meta Tidepool (P0) | Update/upgrade/recovery reliability across 2026.9.3/9.4 | ⚠️ Tracking only | Coordination hub for all upgrade issues |
| [#144793](https://github.com/openclaw/openclaw/issues/144793) | 🦞 Diamond Lobster (P1) | `claude-cli` fails with "Not logged in" if second session exists | ❌ No fix PR | Token auth race condition |
| [#142585](https://github.com/openclaw/openclaw/issues/142585) | 🦐 Gold Shrimp (P0) | Doctor blocks valid legacy workspace migration | ❌ No fix PR | Schema mismatch during upgrade |

> ✅ **One notable fix in progress**:  
> - [PR #146514](https://github.com/openclaw/openclaw/pull/146514) addresses `openclaw update repair` refusal due to ownership conflicts — a key part of the upgrade chain.

---

### **6. Feature Requests & Roadmap Signals**  
🚀 **High-Potential Features for Upcoming Release**  
| Feature | User Need | Evidence | Link |
|--------|-----------|----------|------|
| Channel-mediated approval for MCP tools | Security gating for external state mutations | High priority (P2), needs product decision (#78308) | [Issue #78308](https://github.com/openclaw/openclaw/issues/78308) |
| Progress streaming mode for Feishu | Real-time visibility into agent reasoning | Explicit request, matches Slack/Discord parity (#131457) | [Issue #131457](https://github.com/openclaw/openclaw/issues/131457) |
| Collaborative Markdown Editor (Canvas) | Live co-editing in chat | Already requested, feature closed as "done" but not shipped (#77798) | [Issue #77798](https://github.com/openclaw/openclaw/issues/77798) |
| Per-agent web_fetch SSRF overrides | Granular network policy control | Approved in PR (#67421), now awaiting merge | [PR #67421](https://github.com/openclaw/openclaw/pull/67421) |

📌 **Prediction**: The **2026.9.5** release will likely include **SSRF per-agent policies**, **Feishu streaming**, and **enhanced upgrade diagnostics**, while **MCP approval envelopes** remain in backlog pending security review.

---

### **7. User Feedback Summary**  
🗣️ **Real User Pain Points (from Issue Descriptions)**  
- **Silent failures**: Users lose task results without warnings or retries (e.g., #44925, #67777).  
- **Upgrade dread**: Many report failed updates, stuck migrations, and irrecoverable state after `update repair` (e.g., #145782, #145510).  
- **Poor feedback loops**: Agents run silently without liveness indicators (e.g., #101656).  
- **Auth fragility**: Logout fails permanently after interruptions (e.g., #145929).  
- **Platform-specific bugs**: WhatsApp TTS playback fails on 48kHz audio (e.g., #144502); Google Meet voice breaks (e.g., #140455).  

💡 **Satisfaction Signal**:  
- Positive sentiment in PR comments (e.g., “good fix”, “clean change”) suggests strong contributor confidence in code quality.  
- However, **user frustration is rising** — many issues are labeled “UX release blocker” or “impact:crash-loop”, indicating instability is affecting usability.

---

### **8. Backlog Watch**  
⏳ **Long-Unanswered, High-Impact Issues Needing Maintainer Attention**  

| Issue | Age | Priority | Status | Notes |
|------|-----|----------|--------|-------|
| [#145252](https://github.com/openclaw/openclaw/issues/145252) | 2 days | P0 | Tracking | Central coordination hub for 2026.9.3/9.4 upgrades |
| [#78308](https://github.com/openclaw/openclaw/issues/78308) | 4 months | P2 | Needs-maintainer-review | Security-critical feature; stalled on product decision |
| [#115367](https://github.com/openclaw/openclaw/issues/115367) | 1.5 months | P1 | Needs-product-decision | Blocks privileged read access for external plugins |
| [#145503](https://github.com/openclaw/openclaw/issues/145503) | 1 day | P2 | Needs-info | Workshop migration breaks skill registration |
| [#122019](https://github.com/openclaw/openclaw/issues/122019) | 1 month | P2 | Needs-maintainer-review | `update status` omits plugin availability risk |

> 🔔 **Urgent Call to Action**: Maintainers must prioritize **upgrade reliability (#145252)** and **security gate enforcement (#78308)** to prevent user churn and maintain trust in the platform’s maturity.

---

📅 **Next Steps for Maintainers**:  
- Prioritize merging **PR #146514** (repair within update run) and **PR #146588** (offline recovery) to address top-tier upgrade pain points.  
- Schedule a **bug triage sprint** for P0/P1 issues related to 2026.9.3–9.4 upgrade path.  
- Formalize roadmap for **MCP approval envelope** and **Feishu streaming** to align community expectations.

---  
🟢 **Project Health Assessment**: **Active but Under Pressure**  
While innovation and contributions remain strong, **stability and upgrade experience are at risk**. Immediate focus on **release quality, upgrade safety, and user transparency** is essential to sustain momentum.

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Ecosystem – 2026-09-13**

---

### **1. Ecosystem Overview**  
The open-source personal AI assistant and agent ecosystem in Q3 2026 is characterized by rapid innovation, increasing architectural complexity, and growing pains around stability, upgrade safety, and user trust. Projects are converging on shared infrastructural patterns—agent orchestration, plugin governance, memory persistence, and cross-channel integration—while diverging in maturity, community engagement, and focus areas. A clear trend toward **enterprise-grade reliability**, **security-hardened execution**, and **predictable UX** is emerging, driven by real-world deployment demands. Despite strong contributor momentum across most projects, user-reported silent failures, data loss, and upgrade regressions highlight a critical gap between developer velocity and end-user confidence.

---

### **2. Activity Comparison**

| Project       | Issues (Last 24h) | PRs (Last 24h) | New Release? | Health Score (1–5) | Notes |
|---------------|-------------------|-----------------|--------------|--------------------|-------|
| **OpenClaw**  | 500               | 500             | ❌ No        | ⭐⭐⭐⭐☆ (4.2)       | High activity, P0/P1 bug surge |
| **Hermes Agent** | 50              | 50              | ❌ No        | ⭐⭐⭐☆☆ (3.8)        | Strong fix-focused PRs, rising UX concerns |
| **IronClaw**  | 0                 | 2               | ❌ No        | ⭐⭐⭐⭐⭐ (4.7)        | Low visibility, high technical depth |
| **QwenPaw**   | 17                | 7               | ❌ No        | ⭐⭐☆☆☆ (2.5)        | Stability issues in 2.2.x cycle |
| **ZeroClaw**  | 24                | 50              | ❌ No        | ⭐⭐⭐☆☆ (3.6)        | High-risk bugs in core runtime |

> *Health Score: Based on stability, user feedback, release readiness, and maintainability (5 = mature & stable; 1 = high risk)*

---

### **3. OpenClaw's Position**  
OpenClaw stands as the **most active and largest-scale project** in the ecosystem, with unparalleled volume in both issues and pull requests—indicating either massive adoption or intense internal development pressure. Its advantages over peers include:
- **Deep agent orchestration maturity**, especially in session state management and multi-agent workflows.
- **Aggressive performance optimization** (e.g., code mode fitting, heartbeat reduction), signaling a focus on efficiency at scale.
- **Larger contributor base and faster PR turnaround**, suggesting stronger community support and more robust CI/CD pipelines.

Compared to Hermes Agent’s modular design or ZeroClaw’s low-level security focus, OpenClaw adopts a **comprehensive, monorepo-style architecture** with tight integration across tools, plugins, and channels. This enables rapid iteration but increases surface area for regressions—evidenced by its high number of P0/P1 bugs related to upgrades and session integrity.

---

### **4. Shared Technical Focus Areas**  
Multiple projects are converging on **five critical systemic requirements**:

| Requirement                     | Projects Affected                         | Specific Needs |
|----------------------------------|-------------------------------------------|----------------|
| **Upgrade & Rollback Reliability** | OpenClaw, QwenPaw, Hermes Agent         | Schema migration, repair failure recovery, rollback safety |
| **Session & State Persistence**    | OpenClaw, Hermes Agent, QwenPaw, ZeroClaw | Prevent silent completion loss, handle offline recovery |
| **Memory Safety & Data Integrity** | QwenPaw, ZeroClaw, OpenClaw            | Avoid OOM crashes, prevent concurrent store corruption |
| **Security Boundary Enforcement**  | ZeroClaw, OpenClaw, Hermes Agent        | SSRF control, credential isolation, access policy |
| **Transparent Error Feedback**     | All five projects                        | Eliminate silent failures, improve diagnostics |

These recurring themes indicate a **shift from feature delivery to system resilience**, driven by user frustration with unrecoverable state and unexplained failures.

---

### **5. Differentiation Analysis**

| Dimension               | OpenClaw                          | Hermes Agent                      | IronClaw                         | QwenPaw                          | ZeroClaw                           |
|--------------------------|-----------------------------------|-----------------------------------|----------------------------------|----------------------------------|------------------------------------|
| **Feature Focus**        | Full-stack agent orchestration    | Session continuity & cron reliability | Channel-state clarity           | Plugin store + cost-aware memory | Identity & secure egress           |
| **Target User**          | Enterprise teams, developers      | Power users, multi-device users   | Slack/enterprise integrators     | Devs using local agents           | Production deployments             |
| **Architecture**         | Monorepo, tightly coupled         | Modular gateways, scoped workers  | Lightweight channel layer         | Layered ACP/MCP model             | Actor-based, permission-centric    |
| **Key Differentiator**   | Scale & tooling maturity          | Cross-device persistence          | Stateful context precision        | Cost-efficient memory             | Security-first identity model      |

> 🔍 **Notable divergence**: While OpenClaw and QwenPaw prioritize **agent capabilities and cost control**, ZeroClaw and IronClaw emphasize **security and correctness**—reflecting distinct maturity paths.

---

### **6. Community Momentum & Maturity**

| Tier                     | Projects                              | Indicators |
|--------------------------|----------------------------------------|-----------|
| **Rapid Iteration (High Velocity)** | OpenClaw, ZeroClaw, Hermes Agent      | >50 PRs/day, frequent critical fixes, high comment volume |
| **Stabilization Phase (Fix-Driven)** | QwenPaw                               | Focused on patching 2.2.x regressions, no new releases |
| **Low Visibility / Deep Engineering** | IronClaw                              | Minimal public issues, but high-impact internal PRs |

> ✅ **Maturity Signal**: OpenClaw and ZeroClaw show signs of **production readiness**, despite instability. QwenPaw and Hermes Agent are in **critical stabilization phase**—ready for minor patches but not major features. IronClaw remains in **stealth engineering mode**, likely preparing for enterprise rollout.

---

### **7. Trend Signals**  
Based on community feedback and PR trends, the following **industry-wide shifts** are emerging:

1. **Trust Over Features**: Users increasingly value **reliability and transparency** over flashy new capabilities. Silent failures and data loss are now top-tier blockers (e.g., OpenClaw #44925, ZeroClaw #10797).

2. **Security-by-Design is Mandatory**: Projects are moving beyond basic auth to **fine-grained policies** (per-agent SSRF, canonical principals, plugin egress controls), signaling a shift toward **compliance-ready systems**.

3. **Identity & Access Control Are Core Infrastructure**: The rise of `canonical principals`, `shared grant resolution`, and `ownership tracking` (ZeroClaw, Hermes) shows that **identity is becoming foundational**, not an afterthought.

4. **Offline & Multi-Device Resilience is Non-Negotiable**: Persistent group chats (Hermes), workspace recovery (OpenClaw), and background task persistence (QwenPaw) reflect demand for **always-on, always-available agents**.

5. **Developer Experience Drives Adoption**: Tools like `update repair`, `config diagnostics`, and `one-click plugin updates` are gaining traction—not just for users, but for maintainers too.

> 💡 **Value for Developers**: These trends signal that **long-term success in the agent space depends less on model choice and more on system robustness, auditability, and upgrade safety**.

---

**Prepared by**: Senior AI Agent Ecosystem Analyst  
**Date**: 2026-09-13  
**Purpose**: Inform strategic decisions for developers, maintainers, and product leaders in the open-source AI agent landscape.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-09-13**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active, with 50 new issues and 50 pull requests updated in the past 24 hours—indicating strong community engagement and ongoing development momentum. No new releases were issued, suggesting a focus on stabilization and feature refinement ahead of a potential upcoming version. The high volume of open bugs (especially around session state, cron reliability, OAuth flows, and configuration handling) reveals persistent challenges in system robustness and cross-platform consistency. Meanwhile, PR activity is heavily skewed toward critical fixes, particularly in gateway stability, message delivery, and security boundaries.

---

### **2. Releases**  
No new releases were published as of 2026-09-13. The latest stable version remains **v0.21.2**, released on 2026-09-11. There are no migration notes or breaking changes reported in this period, but several open issues (e.g., #109243, #109480) suggest instability in core workflows that may influence future release planning.

---

### **3. Project Progress**  
Several key PRs were merged or closed today, advancing core system stability:

- **PR #109481** ([fix(gateway): make standalone rollback recoverable](https://github.com/NousResearch/hermes-agent/pull/109481)) – Enables safe rollback during `gateway migrate --standalone`, now printing the plan before mutation and restoring secondary gateways gracefully.
- **PR #109485** ([fix(kanban): integrate scoped workers with generation-safe reclaim](https://github.com/NousResearch/hermes-agent/pull/109485)) – Resolves stale worker ownership risks by aligning reclaim logic with execution scope.
- **PR #75813** ([fix(honcho): normalize config path display and resolution on Windows](https://github.com/NousResearch/hermes-agent/pull/75813)) – Addresses path formatting issues on Windows, improving usability for local users.
- **PR #74300** ([test: make Windows test suite work](https://github.com/NousResearch/hermes-agent/pull/74300)) – Makes CI testing viable on Windows by skipping POSIX-only primitives, reducing friction for cross-platform contributors.

These fixes collectively strengthen platform compatibility, recovery mechanisms, and developer experience.

---

### **4. Community Hot Topics**  
The most active discussions center on **session resilience**, **configuration integrity**, and **security boundary violations**:

- **Issue #97681** – [Bot Group Chats should keep working after Desktop closes](https://github.com/NousResearch/hermes-agent/issues/97681) *(28 comments)*  
  > Users demand persistent group chat functionality across devices without requiring Desktop to remain open. This reflects a growing need for true multi-device continuity in collaborative AI workflows.

- **Issue #109243** – [cron: external-worker handoff requires an ack within 5s, but a cold worker start takes ~12s](https://github.com/NousResearch/hermes-agent/issues/109243) *(17 comments)*  
  > High-severity cron job failures due to timing mismatch between handshake timeout and cold-start latency. A recurring pain point for automated tasks.

- **Issue #109440** – [`hermes chat -q -m <direct alias>` leaks API keys to default provider host](https://github.com/NousResearch/hermes-agent/issues/109440) *(3 comments, 1 👍)*  
  > Critical security flaw where direct model aliases expose credentials via unintended cross-origin requests. Indicates urgent need for stricter credential isolation.

> These top issues reveal deep user reliance on **persistent, secure, and predictable agent behavior**—especially in unattended or multi-session environments.

---

### **5. Bugs & Stability**  
Critical and high-priority bugs continue to surface, primarily affecting **session state**, **message delivery**, and **configuration parsing**:

| Issue | Severity | Summary | Fix PR? |
|------|----------|--------|--------|
| [#109243](https://github.com/NousResearch/hermes-agent/issues/109243) | P2 (High) | Cron worker handoff fails due to 5s vs 12s timing mismatch | ❌ No fix yet |
| [#109440](https://github.com/NousResearch/hermes-agent/issues/109440) | P1 (Critical) | API key leakage via `chat -q -m` alias | ❌ No fix yet |
| [#109422](https://github.com/NousResearch/hermes-agent/issues/109422) | P1 (Critical) | Multiplexed profiles share OAuth identity silently | ❌ No fix yet |
| [#109423](https://github.com/NousResearch/hermes-agent/issues/109423) | P2 | Telegram group messages dropped due to JSON string misparse | ✅ PR #109483 pending |
| [#109480](https://github.com/NousResearch/hermes-agent/issues/109480) | P2 | Profiles broken in Web UI after switch | ✅ PR #109490 addressing migration rollback |

> **Stability Risk**: Multiple issues involve silent failures (e.g., corrupted config fallbacks, ignored task transitions), which can lead to undetected data loss or operational drift.

---

### **6. Feature Requests & Roadmap Signals**  
Emerging signals indicate demand for enhanced **automation**, **multi-device persistence**, and **config management**:

- **Feature Request #106742** – [One gateway owns every session](https://github.com/NousResearch/hermes-agent/pull/106742) *(P1, 1+ comment)*  
  > Advocates for unified session ownership across CLI, TUI, Desktop, bots, and cron—aligning with long-term vision for a single source of truth. Likely candidate for v0.22.

- **Feature Request #82304** – [Unattended missions lack resource lifecycle and persistent task state](https://github.com/NousResearch/hermes-agent/issues/82304) *(P3)*  
  > Highlights need for managed background jobs and GPU lifecycle tracking—critical for enterprise-grade autonomous agents.

- **Feature Request #102563** – [Run npm-check and npm-outdated before every release](https://github.com/NousResearch/hermes-agent/issues/102563) *(P3)*  
  > Suggests a desire for more rigorous dependency hygiene, possibly indicating future tooling investment.

> **Predicted Roadmap Focus (v0.22)**: Session persistence, cron reliability, profile isolation, and secure credential handling.

---

### **7. User Feedback Summary**  
Users report frustration with **silent failures**, **inconsistent behavior across platforms**, and **lack of visibility into system state**:

- **"My cron jobs never run"** – Repeated complaints about intermittent cron failures (#109243).
- **"I lost my bot group chat when I closed Desktop"** – Direct feedback on session durability gap (#97681).
- **"Config changes vanish or break things"** – Concerns over YAML parsing silently ignoring user overrides (#102945, #107511).
- **"I don’t trust my config — it feels like magic"** – Underlying anxiety about transparency and auditability.

> Satisfaction is tempered by **low confidence in system predictability**, especially under load or across devices.

---

### **8. Backlog Watch**  
Several high-impact, long-standing issues remain unresolved and require maintainer attention:

- **Issue #97681** – Bot group chats must persist post-Desktop close *(28 comments, created 2026-08-29)*  
  > Core UX issue with significant user demand; lacks assigned milestone or PR.

- **Issue #39609** – Tasks with `--initial-status blocked` auto-promote with no actor trace *(16 comments, created 2026-06-05)*  
  > High-risk workflow bypass that undermines auditability and control.

- **Issue #59293** – `hermes config set` bypasses system-config write protection *(6 comments, created 2026-07-06)*  
  > Security-critical flaw allowing arbitrary config override via CLI—needs immediate triage.

- **Issue #83673** – Python packages in hermes venv are outdated (including `certifi`) *(3 comments, created 2026-08-11)*  
  > Reflects poor dependency maintenance practices; could introduce vulnerabilities.

> These issues represent **latent technical debt and security exposure** that could delay future adoption if not addressed.

---

**Next Steps Recommended**: Prioritize fixing **P1 security issues** (#109440, #109422), stabilize **cron and session state** (#109243, #97681), and implement **automated dependency checks** (#102563). A coordinated patch release may be warranted.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026-09-13**

---

### **1. Today's Overview**  
The IronClaw project shows low immediate activity as of 2026-09-13, with no new issues or releases in the past 24 hours. Two pull requests were updated within this window—highlighting ongoing development momentum despite minimal community engagement. One PR was merged, indicating active maintenance and integration of improvements. The absence of open issues suggests a stable short-term state, though reduced visibility into user-reported concerns may signal limited external feedback flow.

---

### **2. Releases**  
*No new releases detected.*  
There are no version updates or changelogs published in the last 24 hours. The latest release remains unchanged from prior cycles, with no breaking changes or migration notes required at this time.

---

### **3. Project Progress**  
**Merged PR (Closed):**  
- **[#8076](https://github.com/nearai/ironclaw/pull/8076) fix(assistant): distinguish disconnected shared channels**  
  - *Author:* be-student  
  - *Status:* Merged on 2026-09-12  
  - *Impact:* Resolves ambiguity in channel state handling for paired users in shared contexts. Ensures consistent rejection classification across product surfaces (user messages, bot commands, OpenAI-compatible APIs), particularly in Slack integrations. Improves reliability when detecting disconnected shared channels versus unpaired accounts.

**Open PR:**  
- **[#8098](https://github.com/nearai/ironclaw/pull/8098) test(turns): pin state-derived lineage drop**  
  - *Author:* huiq777  
  - *Status:* Open since 2026-09-12  
  - *Focus:* Adds inverse regression testing to validate lineage metadata integrity during turn state transitions. Aims to formally verify that `TurnRunState` snapshots intentionally omit depth, activation provenance, and descendant cap fields—critical for ensuring state consistency in agent workflows.

---

### **4. Community Hot Topics**  
While no high-engagement issues exist today, **PR #8098** stands out due to its technical significance and potential impact on system correctness. It addresses foundational testing around lineage propagation in stateful AI agent turns—a core concern in verifiable execution chains. The lack of reactions (0 👍) may reflect either early-stage review or limited community awareness. This PR signals growing emphasis on rigorous testing of state lineage behavior, which is essential for debugging complex agent interactions and auditability.

---

### **5. Bugs & Stability**  
*No bugs, crashes, or regressions reported in the last 24 hours.*  
The merged fix in **PR #8076** resolves a subtle but meaningful stability issue related to channel state misclassification. While not a critical crash, it prevents incorrect handling of user context in multi-user collaboration scenarios—especially relevant for enterprise-grade deployments using Slack or similar platforms. No associated bug reports were filed, suggesting the fix may have preemptively addressed an emerging pattern.

---

### **6. Feature Requests & Roadmap Signals**  
No explicit feature requests were raised today. However, **PR #8098** reveals a strategic shift toward enhanced *test-driven state validation*, particularly around lineage semantics. This implies that future roadmap efforts may prioritize:  
- Formal verification of state transformations  
- Audit-ready lineage tracking for compliance  
- Improved diagnostics for agent memory and turn history  
These developments suggest a move toward more robust, predictable agent behavior—likely targeting production-scale deployment needs.

---

### **7. User Feedback Summary**  
No direct user feedback was observed in recent issues or comments. However, the nature of the merged PR (#8076) indicates real-world pain points involving **shared channel ambiguity**, especially when users are disconnected or unpaired. This reflects a common scenario in collaborative AI assistant environments where context leakage or incorrect routing can degrade UX. The fix ensures clearer behavioral boundaries, signaling that users expect reliable session isolation even under edge conditions.

---

### **8. Backlog Watch**  
*No open issues currently exist,* but attention should be directed toward **PR #8098** ([#8098](https://github.com/nearai/ironclaw/pull/8098)) as a high-priority open task. Its focus on proving intentional omission of lineage fields in `TurnRunState` underscores a deeper need for formal state contract enforcement. If left unresolved, this could lead to inconsistencies in long-running agent sessions or downstream data corruption. Maintainers should prioritize review and merge to solidify state management rigor.

--- 

**Summary Status:** ✅ Stable | ⚠️ Low Engagement | 🔍 High Technical Depth  
*Project health remains strong, with disciplined engineering focused on internal correctness—but community interaction remains muted.*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-09-13**

---

### **1. Today's Overview**  
QwenPaw continues to experience robust community engagement, with **17 open issues** and **7 active pull requests** updated in the past 24 hours—indicating strong momentum in both bug reporting and development contributions. The project is in a critical phase of stabilizing its 2.2.x release cycle, with multiple high-severity stability and connectivity bugs reported across core components (MCP, ACP, workspace handling). While no new releases were issued, the recent PR activity suggests focused efforts on fixing memory exhaustion, RPC protocol compatibility, and UI/UX friction. The growing number of user-reported data loss and model configuration issues highlights ongoing challenges in persistence and reliability.

---

### **2. Releases**  
❌ **No new releases** were published as of 2026-09-13.  
The latest stable version remains **v2.2.1**, with beta versions (`2.2.1-beta.2`) actively used in the field. No migration notes or breaking changes are documented for this cycle, but several regressions suggest that the current release may not be fully stable.

> 🔗 [GitHub Releases](https://github.com/agentscope-ai/QwenPaw/releases)

---

### **3. Project Progress**  
✅ **Merged/Closed PRs (Today)**:  
- **#7664** (closed): Added `memory_model` config for `ReMeLightMemoryManager`, enabling cost-efficient memory writing via lightweight models.  
- **#7676** (closed): Fixed subagent model override issue where `subagent_model` was ignored due to silent exception swallowing.  
- **#7582** (closed): Improved plugin store UX with better navigation and update tracking—though full "one-click update" still pending.

🛠️ **Key Fixes Merged Today**:  
- **#7729** (PR #7729): Resolves MCP discovery failure with Java/Kotlin SDK servers by properly parsing non-standard `jsonRpcError` envelopes.  
- **#7725** (PR #7725): Fixes server freeze during large workspace file watching by replacing blocking `watchfiles.awatch` with threaded polling.  
- **#7719** (PR #7719): Implements separate memory write model support for ReMeLight, directly addressing cost concerns from users.  
- **#7680** (PR #7680): Improves debuggability of subagent model overrides by logging config load failures instead of silently dropping them.

> 🔗 [PR #7729](https://github.com/agentscope-ai/QwenPaw/pull/7729) | [PR #7725](https://github.com/agentscope-ai/QwenPaw/pull/7725) | [PR #7719](https://github.com/agentscope-ai/QwenPaw/pull/7719)

---

### **4. Community Hot Topics**  
🔥 **Top 3 Most Active Issues (by comments & urgency)**:

1. **#7708** [Bug]: *Big model settings lost after usage*  
   - **Users affected**: Multiple reports (xiaohushi512, repeated issues)  
   - **Impact**: High — disrupts workflow continuity; users must reconfigure every time.  
   - **Root cause**: Likely related to state persistence or session restore logic.  
   > 🔗 [Issue #7708](https://github.com/agentscope-ai/QwenPaw/issues/7708)

2. **#7721** [Bug]: *Workspace file browser freezes entire server on large repos*  
   - **Users affected**: Developers using Git repos or large directories  
   - **Impact**: Critical — causes total service hang; blocks all channels and UI.  
   - **Fix PR**: **#7725** already submitted and addresses the root cause (blocking `RustNotify`).  
   > 🔗 [Issue #7721](https://github.com/agentscope-ai/QwenPaw/issues/7721)

3. **#7722** [Bug]: *Memory exhaustion via three compounding paths*  
   - **Users affected**: Docker/container users running long-lived agents  
   - **Impact**: Severe — OOM crashes at ~1MB/s; affects production use cases.  
   - **Fixes proposed**: Multiple PRs in flight (e.g., stream buffer limits, keep-alive stacking).  
   > 🔗 [Issue #7722](https://github.com/agentscope-ai/QwenPaw/issues/7722)

💡 **Underlying Need**: Users demand **robust persistence, predictable performance, and resilience under load**—especially for long-running agent workflows.

---

### **5. Bugs & Stability**  
⚠️ **Critical Bugs Reported (Ranked by Severity)**:

| Issue | Description | Fix PR? | Status |
|------|-------------|--------|--------|
| **#7721** | Workspace file browser freezes server on large repos | ✅ **PR #7725** | Open |
| **#7722** | Memory exhaustion via unbounded buffers, stacked instances, and loop evasion | ❌ None yet | Open |
| **#7715** | Daily Paper fails silently when arXiv unreachable — no error visibility | ❌ None yet | Open |
| **#7716** | MCP cannot connect/register after 2.2.x upgrade | ❌ None yet | Open |
| **#7727** | Out-of-workspace writes bypass safety checks (kimi-code tool) | ❌ None yet | Open |

❗ **Note**: Several bugs involve **silent failures**, **UI hangs**, or **data loss**, which degrade trust in QwenPaw as a reliable agent runtime.

---

### **6. Feature Requests & Roadmap Signals**  
🚀 **High-Priority Feature Requests**:

- **#7484** [Enhancement]: *A2A protocol support in QwenPaw 2.x*  
  - **Request**: Official support for Agent-to-Agent (A2A) communication via unified Driver.  
  - **Signal**: Architecture docs mention A2A/MCP/ACP integration, but only MCP is implemented. This is a **major roadmap gap**.  
  > 🔗 [Issue #7484](https://github.com/agentscope-ai/QwenPaw/issues/7484)

- **#7717** [Feature]: *DeepSeek model enhancements (KV-cache observability, prompt-prefix stability)*  
  - **Request**: Native support for DeepSeek’s advanced features (inspired by `deepseek-harness`).  
  - **Signal**: Indicates growing interest in **model-specific optimizations** and **performance monitoring**.  
  > 🔗 [Issue #7717](https://github.com/agentscope-ai/QwenPaw/issues/7717)

- **#7731** [Feature]: *Toggle to show dot-prefixed files in Files panel*  
  - **Request**: UI toggle for hidden files (common in dev workflows).  
  - **Signal**: Low-effort UX improvement with high utility.  
  > 🔗 [Issue #7731](https://github.com/agentscope-ai/QwenPaw/issues/7731)

📌 **Prediction**: Next minor release (likely **2.2.2**) will include:
- A2A protocol readiness (if prioritized)
- Memory exhaustion mitigation
- Plugin store UX improvements

---

### **7. User Feedback Summary**  
💬 **Real User Pain Points**:
- **Persistent Configuration Loss**: Users report losing big model settings and chat history after reboot or idle periods (**#7708, #7724**).  
- **Workflow Disruption**: Freezes, silent errors, and failed tasks break productivity (e.g., Daily Paper, Creator plugin).  
- **Cost Anxiety**: Users want to offload memory writing to cheaper models (**#7664, #7719**).  
- **Tool Safety Gaps**: Tools like kimi-code can bypass workspace boundaries without warning (**#7727**).  

✅ **Satisfaction Indicators**:  
- Positive feedback on recent PR fixes (e.g., `subagent_model` now working).  
- First-time contributors actively submitting quality patches (e.g., #7723, #7718).

> 📌 **Overall Sentiment**: Mixed. Strong technical enthusiasm, but frustration with **stability, data loss, and poor error messaging**.

---

### **8. Backlog Watch**  
👀 **Long-Unanswered Critical Issues**:

| Issue | Priority | Last Updated | Notes |
|------|----------|--------------|-------|
| **#7484** [Feature] A2A support in 2.x | ⭐⭐⭐⭐⭐ | 2026-09-12 | **Major architectural gap** — lacks official timeline. Needs maintainer confirmation. |
| **#7722** [Bug] Memory exhaustion (three paths) | ⭐⭐⭐⭐☆ | 2026-09-12 | **High severity** — no fix PR yet despite detailed repro. Risky for long-term deployments. |
| **#7716** [Bug] MCP connection failure post-2.2.x | ⭐⭐⭐⭐☆ | 2026-09-12 | **Blocking regression** — prevents integration with external MCP servers. |
| **#7730** [Bug] Plugin catalog fallback failure | ⭐⭐⭐☆☆ | 2026-09-12 | Offline usability compromised — violates contract. |

> 🔗 [Issue #7484](https://github.com/agentscope-ai/QwenPaw/issues/7484) | [Issue #7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | [Issue #7716](https://github.com/agentscope-ai/QwenPaw/issues/7716)

📌 **Call to Maintainers**: Prioritize **A2A roadmap clarity**, **memory safety fixes**, and **offline resilience** to maintain user trust and adoption.

--- 

**Prepared by**: AI Agent Analyst | Date: 2026-09-13  
**Source**: GitHub Repository — [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest – 2026-09-13**

---

### **1. Today's Overview**  
The ZeroClaw project remains highly active with a robust pace of development: **24 new issues** and **50 pull requests** updated in the last 24 hours, indicating strong contributor engagement across tooling, runtime, security, and channel integrations. The ecosystem shows signs of maturing infrastructure—especially around identity, access control, and plugin governance—with several high-risk PRs addressing core stability and security. However, multiple critical bugs related to memory safety, stack overflow, and data loss are under active investigation, suggesting ongoing stress on low-level components. No new releases were published today, but momentum is building toward a potential feature-rich update.

---

### **2. Releases**  
✅ **No new releases** were published as of 2026-09-13.  
- The project continues to prioritize internal stability and security hardening over release cycles.  
- Previous versions remain unaffected by recent fixes (e.g., #10726, #10091), which may be included in future updates.

---

### **3. Project Progress**  
#### ✅ **Merged/Closed PRs & Fixes**  
- **#10726** (`ci(zerorelay): pin published relay base images by digest`) – Secured Docker image integrity by replacing mutable tags with digests, mitigating drift risks in CI/CD pipelines. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/10726)  
- **#10091** (`fix(memory): harden response cache storage permissions`) – Applied owner-only file permissions to response caches, improving local security hygiene. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/10091)  
- **#10449** (`fix(channels): create Edge TTS artifact with owner-only permissions`) – Fixed world-readable audio files from Edge TTS synthesis. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/10449)  
- **#10562** (`docs(adr): define how holding-crate exceptions are granted`) – Clarified process for temporary exceptions in crate ownership, supporting long-term architectural evolution. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/10562)  
- **#10169** (`docs(adr): file ADR-014 plugin egress authority as proposed`) – Finalized documentation for plugin egress authority, aligning with RFC #8398. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/10169)  

These reflect a focused effort on **security**, **CI reliability**, and **architectural clarity**.

---

### **4. Community Hot Topics**  
#### 🔥 **Top Issues (by comment count & severity)**  
1. **#10734** – *RpcDispatcher::process_line runs within 2% of its 2 MB stack guard*  
   - **Severity**: P1 (S2 degraded behavior)  
   - **Impact**: Windows stack overflow (`0xc00000fd`) in CI; could cause crashes in production-like environments.  
   - **Status**: In progress, needs urgent resolution. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10734)  
   - *Underlying need*: Runtime stack safety and cross-platform reliability for agent execution.

2. **#10797** – *markdown memory backend silently loses stored entries when `store()` calls overlap*  
   - **Severity**: P1 (S0 — data loss / security risk)  
   - **Impact**: Critical data corruption in persistent memory state; affects session history and agent recall.  
   - **Status**: In progress, accepted. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10797)  
   - *Underlying need*: Data durability and concurrency safety in core persistence layers.

3. **#10788** – *Failed Code/ACP turn discards accepted prompt and completed tool exchanges*  
   - **Severity**: P1 (S2 degraded behavior)  
   - **Impact**: Loss of user intent and completed work during provider failures.  
   - **Status**: In progress, follow-up needed. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10788)  
   - *Underlying need*: Resilience in agent workflows despite transient errors.

#### 🚀 **Top PRs (by activity & impact)**  
- **#10621** (`feat(runtime): coordinate agent lifecycle mutations`) – XL-sized change to unify config coordination across agents, daemon, and channels. Currently blocked on maintainer review. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/10621)  
- **#10248** (`feat(security): canonical principals and shared grant resolution`) – Major security overhaul based on RFC #7141. High-risk, high-impact, stalled due to author action. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/10248)  
- **#10813** (`fix(sop): refuse stale step results and duplicate headless drivers`) – Addresses race conditions in workflow execution. Immediate fix for S1-grade logic flaws. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/10813)

> 💡 **Pattern**: Community focus is shifting from feature additions to **systemic resilience**, **data integrity**, and **secure identity management**.

---

### **5. Bugs & Stability**  
| Severity | Issue | Description | Status | Fix PR? |
|---------|-------|-------------|--------|--------|
| **S0 (Critical)** | [#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797) | Concurrent `MarkdownMemory::store()` calls silently overwrite data → **data loss** | In progress | ❌ |
| **S1 (Workflow Blocked)** | [#10807](https://github.com/zeroclaw-labs/zeroclaw/issues/10807) | MCP connection permanently poisoned after one recovery failure → breaks tool calls | In progress | ❌ |
| **S2 (Degraded Behavior)** | [#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734) | Stack overflow risk in `process_line` on Windows | In progress | ❌ |
| **S2 (Degraded Behavior)** | [#10788](https://github.com/zeroclaw-labs/zeroclaw/issues/10788) | Failed turns discard valid user input and tool output | In progress | ❌ |
| **S2 (Degraded Behavior)** | [#10787](https://github.com/zeroclaw-labs/zeroclaw/issues/10787) | Single-candidate stream recovery ignores retries → no backoff on 529 errors | In progress | ❌ |

> ⚠️ **Stability Risk**: Multiple high-severity bugs in **runtime**, **memory**, and **networking** layers suggest ongoing challenges with concurrent execution and error handling.

---

### **6. Feature Requests & Roadmap Signals**  
#### ✅ **Emerging Features (High Likelihood in Next Version)**  
- **#10812** – *Populate DocumentMessage.jpegThumbnail for WhatsApp PDF previews*  
  - **User Need**: Better mobile UX for document sharing.  
  - **Signal**: Low-hanging fruit with clear user benefit; likely to be prioritized soon. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10812)  
- **#10400** – *Configurable Telegram unauthorized-sender notice*  
  - **User Need**: Flexibility in messaging for different deployment contexts.  
  - **Signal**: Already addressed via PR #10401 — likely to merge soon. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/10401)  
- **#10805** – *control_plane liveness tests race process teardown on Windows*  
  - **Signal**: CI stability issue that’s blocking test reliability — fix will be needed before stable releases.

#### 🔮 **Future-Ready Features**  
- **#10621** – Agent lifecycle coordination framework — foundational for multi-agent orchestration.  
- **#10248** – Canonical principals and shared grant resolution — core to next-gen identity model.

> 📌 **Roadmap Signal**: ZeroClaw is moving toward **enterprise-grade reliability**, **identity-centric security**, and **cross-channel consistency**.

---

### **7. User Feedback Summary**  
- **Pain Points**:  
  - **Data loss** in memory backend (#10797) and failed turns (#10788) erode trust in agent reliability.  
  - **Poor UX on macOS/Windows** (e.g., `zeroclaw service logs` prints nothing, Delete key ignored in chat).  
  - **Inconsistent or missing feedback** in tools like WhatsApp (no PDF preview) and Telegram (voice replies skipped).  
- **Use Cases**:  
  - Multi-session ACP workflows with large context (~200k tokens) — exposed via #10785 (turn cancellation lag).  
  - Production deployments requiring hardened security (e.g., `Edge TTS`, `response cache` permissions).  
- **Satisfaction**:  
  - Positive sentiment around **plugin system improvements** and **configurable notifications**.  
  - Frustration expressed over **lack of diagnostics** on non-Linux platforms and **incomplete error reporting**.

---

### **8. Backlog Watch**  
Several high-priority items remain unattended or stalled:

- **#10797** – *Markdown memory backend data loss* (S0) – **Critical**, needs immediate triage.  
- **#10807** – *MCP connection permanently poisoned* (S1) – Blocks tool integration stability.  
- **#10785** – *Notification lag cancels running turns* – Impacts real-time agent performance.  
- **#10248** – *Canonical principals* – **Major security upgrade**, stalled on author action.  
- **#10534** – *Bounded delegates silently strip delegate tool* – Contradicts config; high-risk policy misalignment.  
- **#8733** – *models.dev vision capabilities discarded* – Misleading model availability, affects AI agent reasoning.

> ⏳ **Action Required**: Maintainers should prioritize triaging and assigning ownership to these **high-impact, high-severity** issues to prevent technical debt accumulation.

---

**Summary**: ZeroClaw is at a pivotal stage — balancing rapid innovation with growing complexity. While community energy is high, **core stability and data integrity** are under pressure. Immediate attention to top-tier bugs and stalled security PRs is essential to maintain trust and readiness for broader adoption.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*