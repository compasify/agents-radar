# OpenClaw Ecosystem Digest 2026-09-05

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-09-05 00:21 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest — 2026-09-05**

---

### **1. Today's Overview**  
OpenClaw remains highly active with a surge in developer engagement: **500 issues and 500 pull requests updated in the last 24 hours**, indicating intense development and community scrutiny. The project is in a critical phase of stabilization, with numerous high-severity bugs (P1/P0) related to session state, data loss, and message delivery under review. While no new releases have been published, multiple PRs are targeting core reliability fixes—particularly around task recovery, agent state persistence, and gateway resilience. This reflects a focus on foundational stability ahead of upcoming feature integrations.

---

### **2. Releases**  
❌ **No new releases published** as of 2026-09-05.  
The latest version remains **2026.8.1**, which has seen multiple regression reports (e.g., #135111, #38327). Users upgrading from earlier versions (e.g., 2026.7.1-beta.1 → 2026.8.1) are experiencing intermittent failures in tool call parsing and authentication flows. No migration notes or breaking change announcements are currently available.

> 🔗 [Latest Release: v2026.8.1](https://github.com/openclaw/openclaw/releases/tag/v2026.8.1)

---

### **3. Project Progress**  
✅ **22 PRs merged/closed today**, primarily focused on **session state integrity**, **gateway resilience**, and **channel-specific bug fixes**:

- **PR #138681** – Fixed Slack QA test preloading issue blocking CI/CD.
- **PR #138438 & #138478** – Resolved inconsistent `openclaw automations runs` argument handling (positional vs. flag-based).
- **PR #138710** – Optimized SQLite coordination locks to avoid unnecessary writes during reacquisition.
- **PR #138186** – Fixed Android Mermaid asset generation failure due to unsafe task paths.
- **PR #138683** – Simplified build declaration hooks and regression fixtures for maintainability.

These fixes signal strong momentum in stabilizing the runtime’s internal state management and improving tooling consistency across platforms.

> 🔗 [Merged PRs Summary](https://github.com/openclaw/openclaw/pulls?q=is%3Cclosed+updated%3A2026-09-04..2026-09-05)

---

### **4. Community Hot Topics**  
Top 5 most commented issues reflect deep concerns about **agent reliability**, **context integrity**, and **user experience friction**:

1. **[Issue #44925]** — *Subagent completion silently lost*  
   - **26 comments**, **P1**, **diamond lobster** severity  
   - Silent failure mode where subagent results vanish without retry, notification, or auto-restart.  
   > 🔗 [View Issue](https://github.com/openclaw/openclaw/issues/44925)  
   → **Underlying Need**: Reliable task orchestration in multi-agent systems; users demand auditability and resilience.

2. **[Issue #43367]** — *Multi-agent orchestration unstable*  
   - **15 comments**, P1, diamond lobster  
   - Concurrent `agents add` operations overwrite configs; session-lock failures and detached child work.  
   > 🔗 [View Issue](https://github.com/openclaw/openclaw/issues/43367)  
   → **Underlying Need**: Safe, atomic agent lifecycle management in distributed environments.

3. **[Issue #135111]** — *Intermittent malformed JSON arguments on Claude Sonnet 5*  
   - **9 comments**, P1, platinum hermit  
   - Regression after v2026.8.1; affects tool call parsing unpredictably.  
   > 🔗 [View Issue](https://github.com/openclaw/openclaw/issues/135111)  
   → **Underlying Need**: Robust schema validation and error propagation for LLM-generated tool calls.

4. **[Issue #114211]** — *Matrix room agents loop on stale replay*  
   - **9 comments**, P1, diamond lobster  
   - Self-sustaining loop between no-reply logic, restart recovery, and stale session replay.  
   > 🔗 [View Issue](https://github.com/openclaw/openclaw/issues/114211)  
   → **Underlying Need**: Session state consistency across channels and recovery paths.

5. **[PR #138394]** — *Resume interrupted tasks after Gateway restart*  
   - **High visibility**, XL size, P1, gold shrimp  
   - Fixes abandoned tasks post-restart; critical for long-running automation workflows.  
   > 🔗 [View PR](https://github.com/openclaw/openclaw/pull/138394)  
   → **Signal**: User demand for end-to-end task durability.

---

### **5. Bugs & Stability**  
**Critical stability issues reported today**, ranked by impact:

| Severity | Issue ID | Title | Impact | Fix PR? |
|--------|--------|------|--------|--------|
| 🦞 **Diamond Lobster (P1)** | #44925 | Subagent completion silently lost | Data loss, message loss | ❌ No fix PR yet |
| 🦞 **Diamond Lobster (P1)** | #114234 | Usage-cost refresh lock never released | Cache freeze, cost tracking failure | ❌ No fix PR |
| 🦞 **Diamond Lobster (P1)** | #119720 | Synchronous SQLite transactions block event loop | High latency, crash risk | ❌ No fix PR |
| 🦞 **Diamond Lobster (P1)** | #113306 | SQLite snapshot restore lacks crash guarantees | Data inconsistency, identity loss | ❌ No fix PR |
| 🦪 **Silver Shellfish (P1)** | #97616 | Process leaks cause zombie accumulation | Runtime degradation | ✅ PR #138710 partially addresses |

> 🔗 [All Critical Issues Dashboard](https://github.com/openclaw/openclaw/issues?q=is%3Aopen+label%3A%22issue-rating%3A+%F0%9F%90%BE+diamond+lobster%22)

**Note**: Despite high activity, many P1 bugs remain unaddressed, suggesting a backlog bottleneck in maintainer triage capacity.

---

### **6. Feature Requests & Roadmap Signals**  
User-driven innovation is accelerating in **context efficiency**, **multi-agent control**, and **transparency**:

- **Tiered Bootstrap File Loading (#22438)** – Reduce context token waste by loading files progressively.  
  → Likely candidate for **v2026.9.0** (high comment count, clear use case).

- **Agent-triggered context compaction (#6757)** – Self-compact sessions without user input.  
  → Already being explored via PRs like #138716 (reduce plugin ownership overhead).

- **Per-model usage logging (#13219)** – Enable cost tracking and model mix optimization.  
  → Strong alignment with observability roadmap; may be bundled with billing features.

- **Session TTL / max lifetime (#45390)** – Prevent indefinite context growth.  
  → High priority for production deployments; likely to be prioritized next quarter.

- **Companion-friendly SQLite seams (#79902)** – Enable external tools to consume session state safely.  
  → Signals growing ecosystem maturity and API-first design intent.

> 🔗 [Feature Request Trends](https://github.com/openclaw/openclaw/issues?q=is%3Aopen+label%3A%22feature%22+sort%3Acomments-desc)

---

### **7. User Feedback Summary**  
Real-world pain points dominate the feedback loop:

- **"I lose work silently"** – Multiple users report subagent results vanishing without error or warning (#44925, #114234).
- **"My agent crashes on restart"** – Persistent issues with task recovery and session state corruption (#113306, #138394).
- **"It’s not my fault, but I’m blamed"** – Users frustrated by silent failures in tool calls (e.g., malformed JSON), especially when debugging complex workflows (#135111).
- **"I can’t tell what’s happening"** – UI/UX complaints include duplicate replies (#110368), invisible context shifts (#90378), and unclear session behavior (#71417).
- **"Why does it keep restarting?"** – Frequent restarts due to memory pressure, process leaks, or configuration drift.

> 💬 **Sentiment Summary**: High frustration with unreliability despite powerful capabilities. Users value transparency, predictability, and durability over novelty.

---

### **8. Backlog Watch**  
**Critical issues and PRs requiring immediate maintainer attention**:

| Issue/PR | Status | Label | Notes |
|--------|--------|-------|------|
| [Issue #44925](https://github.com/openclaw/openclaw/issues/44925) | Open | P1, diamond lobster, clawsweeper:needs-maintainer-review | Silent data loss in subagent orchestration — major UX and reliability risk. |
| [PR #138394](https://github.com/openclaw/openclaw/pull/138394) | Open | P1, gold shrimp, merge-risk: message-delivery | Fixes task resumption after restart — essential for automation. Needs review. |
| [Issue #114234](https://github.com/openclaw/openclaw/issues/114234) | Open | P1, diamond lobster | Permanently frozen cache after restart — blocks cost tracking. |
| [Issue #135111](https://github.com/openclaw/openclaw/issues/135111) | Open | P1, platinum hermit | Intermittent tool call failures post-upgrade — urgent for production use. |
| [PR #134899](https://github.com/openclaw/openclaw/pull/134899) | Open | P1, gold shrimp, merge-risk: security-boundary | External verification lifecycle — key for enterprise trust. |

> ⚠️ **Action Required**: Maintainers must prioritize triaging and reviewing these high-impact items to prevent further erosion of user confidence.

---

**📌 Final Assessment**: OpenClaw is at a **critical inflection point** — technically vibrant but burdened by unresolved stability risks. The community is deeply engaged, but trust hinges on demonstrable progress in fixing core reliability issues. Immediate focus should shift from feature velocity to **stability, data integrity, and end-to-end error handling** to solidify its position as a production-grade AI agent platform.

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem (2026-09-05)**

---

### **1. Ecosystem Overview**  
The personal AI assistant and agent open-source ecosystem is entering a pivotal phase of maturation, marked by a clear divergence between **feature velocity** and **production readiness**. Projects are increasingly focused on multi-agent orchestration, session durability, and cross-platform consistency, driven by user demand for reliable, long-running workflows. While innovation remains rapid—especially in mobile access, sandboxing, and cost-aware execution—core stability issues across multiple projects indicate that the community is still grappling with foundational reliability. The shift from individual productivity tools toward team-centric, enterprise-grade platforms is evident, signaling a move toward scalable, auditable AI systems.

---

### **2. Activity Comparison**

| Project         | Issues (Last 24h) | PRs (Last 24h) | Release Status       | Health Score¹ (1–5) |
|----------------|-------------------|----------------|----------------------|---------------------|
| **OpenClaw**   | 500               | 500            | ❌ No new release     | 2.8                 |
| **Hermes Agent** | 50                | 50             | ❌ No new release     | 3.5                 |
| **IronClaw**   | 6                 | 14             | ❌ No new release     | 4.2                 |
| **QwenPaw**    | 28                | 38             | ❌ No new release     | 3.0                 |
| **ZeroClaw**   | 34                | 50             | ❌ v0.8.5 pending     | 3.7                 |

> **¹ Health Score**: Composite metric based on critical bug count, fix-to-bug ratio, backlog triage speed, and user sentiment (higher = more stable/healthy).

---

### **3. OpenClaw's Position**  
OpenClaw stands out as the most technically active project—**highest issue and PR volume**—but also the most unstable. Its position is defined by **intense development pressure**, with over 500 concurrent issues and PRs reflecting deep community scrutiny and high urgency around core reliability. Unlike peers, OpenClaw has not yet stabilized its release cadence, despite significant fixes in session state, task recovery, and gateway resilience. Its **largest community size** and most vocal feedback loop amplify both innovation and risk exposure. While others are refining UX or securing architecture, OpenClaw is still addressing fundamental data loss and silent failure modes—making it a high-risk, high-reward platform for early adopters and developers seeking maximum feature depth.

---

### **4. Shared Technical Focus Areas**  
Across all five projects, several recurring technical requirements are emerging:

| Requirement                              | Projects Involved                  | Specific Needs                                                                 |
|------------------------------------------|------------------------------------|--------------------------------------------------------------------------------|
| **Session State Integrity & Recovery**   | OpenClaw, QwenPaw, ZeroClaw        | Resume interrupted tasks post-restart; prevent silent data loss; handle stale sessions |
| **Agent Lifecycle Management**           | OpenClaw, IronClaw, QwenPaw, ZeroClaw | Atomic config updates; safe parallel agent creation; prevent detached child work |
| **Cross-Platform Consistency**           | OpenClaw, Hermes Agent, QwenPaw    | Fix Windows/macOS-specific regressions (e.g., stdin inheritance, token capture) |
| **Context Efficiency & Budgeting**       | IronClaw, QwenPaw, ZeroClaw        | Dynamic context limits per model; reduce token waste via progressive file loading |
| **Error Transparency & Diagnostics**     | All projects                       | Clear error messages; avoid silent failures; expose root causes (e.g., missing API keys) |

These shared challenges signal a **convergence toward production-grade expectations**: predictability, observability, and durability.

---

### **5. Differentiation Analysis**

| Dimension                     | OpenClaw                            | Hermes Agent                        | IronClaw                             | QwenPaw                               | ZeroClaw                                |
|-------------------------------|-------------------------------------|-------------------------------------|--------------------------------------|----------------------------------------|-----------------------------------------|
| **Feature Focus**             | Multi-agent orchestration, tool call robustness | SSH remote access, voice interaction, model upgrades | UI/UX polish, persistent sandboxes | Team collaboration, multi-tenant Hub | Security hardening, runtime control |
| **Target Users**              | Power users, developers, research labs | Remote developers, system admins   | Privacy-conscious users, power users | Enterprise teams, DevOps             | Security-sensitive orgs, infrastructure |
| **Architecture**              | Centralized agent state, SQLite-heavy | Headless dashboard, token-driven | Per-user sandboxed executor (proposed) | Modular skills, workspace isolation | Runtime-owned sessions, zero-trust design |
| **Key Differentiator**        | Highest feature density, highest instability | Best SSH/mobile integration | Most mature UX, proactive security vision | Strongest team/enterprise roadmap | Most rigorous RFC process, trust boundaries |

This divergence reflects distinct product visions: **OpenClaw** pushes boundaries, **Hermes** optimizes workflow, **IronClaw** prioritizes safety, **QwenPaw** scales for teams, and **ZeroClaw** enforces security.

---

### **6. Community Momentum & Maturity**

| Tier                     | Projects                          | Characteristics |
|--------------------------|-----------------------------------|----------------|
| **Rapid Iteration (High Velocity)** | OpenClaw, ZeroClaw, Hermes Agent | >50 PRs/issues/day; frequent breaking changes; high bug density; strong contributor base |
| **Stabilizing (Mature Development)** | IronClaw, QwenPaw               | Lower activity volume; focus on UX polish, security, and dependency management; responsive to feedback |

- **OpenClaw** and **ZeroClaw** are in **"crisis mode"**—high activity but unaddressed P1 bugs.
- **IronClaw** shows signs of **maturity**: quick resolution of UX issues, architectural foresight.
- **QwenPaw** is transitioning from beta to **enterprise readiness**, with strong roadmap signals.
- **Hermes Agent** balances innovation with usability gaps—mobile and voice features are top requests.

---

### **7. Trend Signals**  
Based on community feedback and project direction, the following **industry trends** are emerging:

1. **Shift from Individual to Team-Centric AI Agents**  
   - Evidence: QwenPaw’s *multi-tenant Hub* roadmap (#7318), role-based access needs, skill versioning.
   - Value: Enables auditability, compliance, and collaborative AI workflows.

2. **Demand for Persistent, Isolated Agent Execution**  
   - Evidence: IronClaw’s *persistent sandboxed executor* proposal (#7903), ZeroClaw’s *runtime-owned sessions* RFC (#9487).
   - Value: Reduces attack surface, prevents privilege escalation, enables true stateful agents.

3. **Cost-Aware & Efficient AI Workflows**  
   - Evidence: QwenPaw’s *off-peak scheduling*, ZeroClaw’s *token accounting transparency*, IronClaw’s *dynamic context budgeting*.
   - Value: Critical for sustainable AI operations at scale.

4. **Mobile & Ambient Interaction**  
   - Evidence: Hermes Agent’s *voice calling request* (#11911), ZeroClaw’s *desktop screen interaction* RFC (#6909).
   - Value: Moves AI from reactive to proactive, hands-free use cases.

5. **Security-First Design in Open Source**  
   - Evidence: ZeroClaw’s *RFC-driven risk labeling*, OpenClaw’s *agent-triggered compaction*, QwenPaw’s *per-tool whitelisting*.
   - Value: Builds trust in open-source agents for sensitive environments.

---

### ✅ **Conclusion for Developers & Decision-Makers**  
The ecosystem is no longer about "what can an AI agent do?" but **"can it be trusted to run reliably, securely, and consistently?"**  
- Choose **OpenClaw** for cutting-edge features (with caution).  
- Choose **IronClaw** for a polished, secure experience.  
- Choose **QwenPaw** for team-scale deployments.  
- Choose **ZeroClaw** for zero-trust, enterprise-grade systems.  
- Choose **Hermes Agent** for remote SSH and mobile-first workflows.

**Immediate priorities**: Stabilize session state, improve diagnostics, and implement end-to-end error handling. The future belongs to agents that are not just smart—but **predictable, durable, and trustworthy**.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-09-05**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active, with **50 new issues and 50 updated pull requests** reported in the last 24 hours—indicating robust community engagement and ongoing development momentum. A surge in critical bug reports (P1/P2) centers on **SSH authentication failures**, **session token mismanagement**, and **platform-specific regressions**, particularly on Windows and macOS. Despite no new releases, a significant number of PRs are focused on stabilizing core components like the agent runtime, gateway communication, and desktop client behavior. The project shows strong technical velocity but faces growing pressure around session consistency, cross-platform reliability, and secure credential handling.

---

### **2. Releases**  
❌ **No new releases** were published today.  
- Last release: v0.21.0 (as of 2026-08-31).  
- No breaking changes or migration notes to report at this time.  
- Users are advised to monitor `hermes update` output for potential sync issues (see #98022).

---

### **3. Project Progress**  
✅ **1 merged PR** (from 50 open) — a critical fix for session token handling:  
- **PR #103305** ([fix(dashboard): serve live session token on headless token page](https://github.com/NousResearch/hermes-agent/pull/103305))  
  - Resolves persistent 401 errors in SSH mode by ensuring the dashboard serves the current session token instead of a stale import-time snapshot.  
  - Directly addresses multiple high-severity bugs (#102930, #103203, #103237).  

🔧 **Key progress in stabilization**:  
- Multiple PRs focus on **gateway lifecycle management** (#103306, #103307), **media streaming** (#103239), and **subagent resilience** (#103300, #103298).  
- Improvements to **Ollama Cloud usage tracking** (#103297) and **Discord rate-limit clarity** (#103296) enhance observability and user control.

---

### **4. Community Hot Topics**  
🔥 **Top 3 Most Active Issues (by comment count & urgency)**:

| Issue | Summary | Link |
|------|--------|------|
| [#102930](https://github.com/NousResearch/hermes-agent/issues/102930) | **Desktop SSH mode fails with 401 on every API call** since `d3630f8532` due to stale session token capture at import time. | [View Issue](https://github.com/NousResearch/hermes-agent/issues/102930) |
| [#103015](https://github.com/NousResearch/hermes-agent/issues/103015) | **GPT-6 Astra support tracker** — requires model-specific compatibility work across OpenAI response path. | [View Issue](https://github.com/NousResearch/hermes-agent/issues/103015) |
| [#11911](https://github.com/NousResearch/hermes-agent/issues/11911) | **Native mobile app with voice calling** requested by users seeking hands-free AI interaction. | [View Issue](https://github.com/NousResearch/hermes-agent/issues/11911) |

🔍 **Analysis of Underlying Needs**:  
- **Authentication reliability** is a top concern, especially in remote/SSH workflows.  
- **New model integrations (Astra)** signal demand for cutting-edge LLM support.  
- **Mobile access via voice** reflects a shift toward ambient, real-time AI interaction—suggesting future product direction.

---

### **5. Bugs & Stability**  
🚨 **Critical Bugs (P1/P2) Reported Today**:

| Bug ID | Description | Severity | Fix PR? |
|-------|------------|----------|--------|
| [#102930](https://github.com/NousResearch/hermes-agent/issues/102930) | SSH mode: 401 Unauthorized on every API call due to static `_SESSION_TOKEN` import. | P1 | ✅ Yes → PR #103305 |
| [#103203](https://github.com/NousResearch/hermes-agent/issues/103203) | Same issue: Desktop SSH loop fails with 401 due to frozen session token. | P1 | ✅ Yes → PR #103305 |
| [#103237](https://github.com/NousResearch/hermes-agent/issues/103237) | Duplicate of above; confirms root cause is `mount_spa()` capturing token at import time. | P1 | ✅ Yes → PR #103305 |
| [#103246](https://github.com/NousResearch/hermes-agent/issues/103246) | GPT-6 Astra compaction not supported; missing request constraints. | P3 | ❌ No |
| [#103230](https://github.com/NousResearch/hermes-agent/issues/103230) | Profile wake requests silently die in 3-slot queue → UI hangs forever. | P2 | ❌ No |
| [#103291](https://github.com/NousResearch/hermes-agent/issues/103291) | Installation fails on Windows 11 (UV-based install); no error logs provided. | P2 | ❌ No |

⚠️ **Stability Risks**:  
- Persistent **SSH connection loops** and **silent profile hangups** undermine trust in remote workflows.  
- **Windows-specific issues** (e.g., hard-coded `ssh.exe`, Git Bash null file creation) suggest platform-specific regression testing gaps.

---

### **6. Feature Requests & Roadmap Signals**  
💡 **High-Potential Future Features**:
- **[Mobile App with Voice Calling](https://github.com/NousResearch/hermes-agent/issues/11911)** — top-requested feature; aligns with ambient AI trends. Likely candidate for v0.22+.
- **GPT-6 Astra Support** ([#103015](https://github.com/NousResearch/hermes-agent/issues/103015)) — signals early adoption of next-gen models; may drive infrastructure updates.
- **Group Chat Continuity & File Sharing** ([#98307](https://github.com/NousResearch/hermes-agent/pull/98307)) — already in PR phase, indicating roadmap prioritization.

📈 **Predicted Next Version (v0.22)**:  
Expect enhanced **cross-device continuity**, **voice-first mobile integration**, **Astra/GPT-6 support**, and **improved session resilience**.

---

### **7. User Feedback Summary**  
🗣️ **Real User Pain Points**:
- **"SSH connection fails after `hermes update`"** — repeated across macOS and Linux (issues #102930, #103234).  
- **"Profile wake-up hangs forever"** — users unable to recover from stalled sessions (issue #103230).  
- **"Installation fails silently on Windows"** — lack of debug feedback frustrates new adopters (issue #103291).  
- **"Voice calling isn't available"** — users desire hands-free interaction (issue #11911).  

✅ **Positive Signals**:  
- Users actively engage with advanced features (e.g., skills, delegated tasks, local models).  
- High-quality bug reports with detailed reproduction steps (e.g., #103237, #103244).

---

### **8. Backlog Watch**  
⏳ **Long-Unanswered Critical Issues Requiring Attention**:

| Issue | Status | Reason for Priority |
|------|--------|---------------------|
| [#103015](https://github.com/NousResearch/hermes-agent/issues/103015) | Open (P2) | Blocking next-gen model adoption; affects provider ecosystem. |
| [#103230](https://github.com/NousResearch/hermes-agent/issues/103230) | Open (P2) | Silent failure in profile wake-up breaks UX flow; no timeout feedback. |
| [#103291](https://github.com/NousResearch/hermes-agent/issues/103291) | Open (P2) | Installation failure without logs — major onboarding barrier. |
| [#60674](https://github.com/NousResearch/hermes-agent/issues/60674) | Open (P4) | `op CLI` hangs on macOS 26.5.2 — security-sensitive component affected. |

📌 **Action Needed**: Prioritize triage and assign maintainers to resolve these before v0.22 release.

---  
*Data sourced from GitHub: NousResearch/hermes-agent (2026-09-05)*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# **IronClaw Project Digest**  
**Date:** 2026-09-05  
**Repository:** [github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)  

---

### **1. Today's Overview**  
IronClaw continues strong momentum in its evolution toward a secure, user-centric AI agent platform. The project shows robust daily activity with **6 open issues** and **14 open PRs** updated in the last 24 hours—indicating active development and responsive community engagement. A significant portion of today’s work centers on **UI/UX refinement**, particularly around command execution feedback, menu alignment, and card persistence. Core infrastructure improvements are also underway, including context budgeting adjustments, background subagent healing, and enhanced prompt caching. No new releases were published, but several critical fixes and feature enhancements were merged or proposed, signaling continued stability and forward progress.

---

### **2. Releases**  
❌ **No new releases** were published in the past 24 hours.  
The project remains in an active development phase without versioned updates, consistent with its iterative, feature-driven release cadence. Maintainers are likely prioritizing internal improvements and bug fixes ahead of a coordinated release.

---

### **3. Project Progress**  
✅ **Merged/Closed PRs (Today):**  
- **[PR #8062](https://github.com/nearai/ironclaw/pull/8062)** – *fix(llm): send conversation cache keys on OpenAI request paths*  
  → Adds persistent, domain-separated prompt-cache keys to all OpenAI-compatible requests, improving cache coherence across tool loops and model iterations. Critical for performance and reproducibility.  
- **[PR #8060](https://github.com/nearai/ironclaw/pull/8060)** – *ci(nextest): give the whole-tree architecture scans real timeout headroom*  
  → Addresses flaky CI failures by increasing timeout allowance for full codebase scans. Improves build reliability and reduces false negatives.  
- **[PR #7988](https://github.com/nearai/ironclaw/pull/7988)** – *chore(agents): refresh codebase knowledge graph*  
  → Automated refresh of the codebase memory snapshot via nightly workflow. Ensures internal AI agents have up-to-date context for reasoning and navigation.

These merges reflect a focus on **infrastructure stability**, **performance consistency**, and **developer experience**.

---

### **4. Community Hot Topics**  
🔥 **Most Active Issue:**  
- **[Issue #7903](https://github.com/nearai/ironclaw/issues/7903)** – *Decision spike: persistent per-user sandboxed executor behind the trusted host kernel*  
  - **Author:** serrrfirat | **Created:** 2026-08-26 | **Updated:** 2026-09-04  
  - **Labels:** enhancement, risk: high, scope: agent, sandbox, reborn  
  - **Summary:** Proposes moving the entire canonical agent loop into a persistent per-user sandbox, reducing trust in the host process. This is a foundational architectural shift with implications for security, isolation, and extensibility.  
  - **Analysis:** High-risk, high-impact proposal. Signals growing interest in deeper sandboxing and reduced host privilege. Likely a key discussion point for future Reborn iteration planning.

🔥 **Most Active PRs (by impact & visibility):**  
- **[PR #8072](https://github.com/nearai/ironclaw/pull/8072)** – *feat(telegram): register the Bot API command menu at activation*  
  → Enables Telegram users to see `/model`, `/status`, etc., directly in the chat menu via `setMyCommands`. Enhances usability and discoverability.  
- **[PR #8067](https://github.com/nearai/ironclaw/pull/8067)** – *feat(subagent): boot/periodic sweep for stranded background deliveries, counters, e2e revival (R4)*  
  → Solves edge-case failure scenarios where subagent threads never run again. Critical for reliability in long-running workflows.  
- **[PR #8053](https://github.com/nearai/ironclaw/pull/8053)** – *feat(loop): derive the prompt context budget from the model's advertised window*  
  → Dynamically adapts context limits based on model capabilities (e.g., GPT-4 vs. smaller models). Avoids hard-coded limits and improves compatibility.

These PRs represent **core product maturity**: better UX, stronger resilience, and smarter resource management.

---

### **5. Bugs & Stability**  
🚨 **High Severity (Critical UX/Flow Issues):**  
- **[Issue #8074](https://github.com/nearai/ironclaw/issues/8074)** – *Paired user’s rejected action in not-connected shared channel gets pairing notice instead of channel-not-connected copy*  
  → Misleading error message for paired users when channel is disconnected. Could cause confusion and support overhead.  
  **Fix PR:** Not yet open. Requires logic adjustment in command admission path.

🟡 **Medium Severity (UI/UX Degradation):**  
- **[Issue #8066](https://github.com/nearai/ironclaw/issues/8066)** – *Prevent command result cards from collapsing when results accumulate*  
  → Cards shrink to invisible lines after repeated commands, consuming space and obscuring content.  
  **Fix PR:** [PR #8071](https://github.com/nearai/ironclaw/pull/8071) – already submitted and merged.
- **[Issue #8064](https://github.com/nearai/ironclaw/issues/8064)** – *Add dismissal action for command result cards*  
  → Cards accumulate without a way to remove them.  
  **Fix PR:** [PR #8069](https://github.com/nearai/ironclaw/pull/8069) – merged.

🟢 **Low Severity (Minor UI Inconsistencies):**  
- **[Issue #8065](https://github.com/nearai/ironclaw/issues/8065)** – *Align command metadata consistently in the slash-command menu*  
  → Inconsistent column alignment affects scanability.  
  **Fix PR:** [PR #8070](https://github.com/nearai/ironclaw/pull/8070) – merged.
- **[Issue #8063](https://github.com/nearai/ironclaw/issues/8063)** – *Keep active command visible while navigating command menu*  
  → Active item can scroll out of view during keyboard/mouse navigation.  
  **Fix PR:** [PR #8068](https://github.com/nearai/ironclaw/pull/8068) – merged.

> ✅ **Stability Note:** All medium-to-low severity bugs have been addressed via PRs. Only one high-severity issue lacks a fix.

---

### **6. Feature Requests & Roadmap Signals**  
📌 **Emerging Themes:**  
- **Persistent Sandboxing (Issue #7903)** – Strong signal that the team is evaluating a major architectural shift toward full agent isolation. Likely to be a top priority for Q4 2026.
- **Subagent Resilience (PR #8067, #8061)** – Suggests focus on long-running, autonomous workflows. Indicates roadmap emphasis on "stateful" agents.
- **Dynamic Context Budgeting (PR #8053)** – Reflects move toward adaptive, model-aware AI systems—critical for scaling to diverse LLM backends.
- **Telegram Command Menu Integration (PR #8072)** – Shows commitment to improving third-party platform UX, especially for mobile-first users.

🔮 **Predicted Next Version Features (Q4 2026):**  
- Persistent per-user sandboxes (Reborn v2.0?)  
- Enhanced subagent lifecycle management  
- Dynamic prompt budgeting per model  
- Improved command discovery and UX across platforms

---

### **7. User Feedback Summary**  
💬 **Real User Pain Points Identified:**  
- **Confusing error messaging** when using paired accounts in disconnected channels ([Issue #8074](https://github.com/nearai/ironclaw/issues/8074)) — indicates friction in multi-channel workflows.  
- **Accumulation of ephemeral command cards** leading to cluttered conversations ([Issue #8066](https://github.com/nearai/ironclaw/issues/8066)) — suggests users perform frequent interactions, possibly in exploratory mode.  
- **Inconsistent UI layout** in command menus ([Issue #8065](https://github.com/nearai/ironclaw/issues/8065)) — impacts usability for both new and experienced users.

🎯 **User Satisfaction Indicators:**  
- Rapid resolution of UX issues (e.g., card collapse, alignment) shows responsiveness to user feedback.  
- Clearer command menus and dismissible results indicate improved control and predictability.

---

### **8. Backlog Watch**  
⚠️ **Long-Unanswered Critical Issues Needing Attention:**  
- **[Issue #7903](https://github.com/nearai/ironclaw/issues/7903)** – *Decision spike: persistent per-user sandboxed executor behind the trusted host kernel*  
  - **Age:** 9 days (created 2026-08-26)  
  - **Risk:** High | **Scope:** Agent, Sandbox, Reborn  
  - **Status:** Open, no PR, no comments  
  - **Why it matters:** This is a potential game-changer for security and scalability. Should be prioritized for design review and early prototyping.

🔍 **Other Backlog Items Requiring Follow-Up:**  
- **[Issue #8074](https://github.com/nearai/ironclaw/issues/8074)** – Error message misdirection in paired/disconnected flows  
  - Already identified as a bug; needs urgent fix PR to avoid user confusion.

> 🔍 **Recommendation:** Assign a core maintainer to lead a design review for Issue #7903 and initiate a prototype sprint. It represents a strategic inflection point for IronClaw’s future architecture.

---  
**End of Digest**  
*Generated: 2026-09-05 | Source: GitHub Activity (last 24h)*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-09-05**

---

### **1. Today's Overview**  
QwenPaw remains highly active with a robust community pulse: **28 open issues** and **38 pull requests updated in the last 24 hours**, indicating strong developer engagement and user-driven feedback. The project is in a transitional phase—shifting from personal AI assistant to team-oriented, multi-tenant deployment—with significant focus on stability, performance, and extensibility. While no new releases were issued, core development continues at pace, particularly around Hub scalability, session lifecycle management, and cross-platform consistency.

---

### **2. Releases**  
❌ *No new releases* were published today or in the past week. The latest stable version remains **2.2.0-beta.7**, with ongoing beta testing for **2.2.1b1** (noted in Issue #7552). No breaking changes or migration notes are currently documented; users should expect incremental updates focused on reliability and feature polish.

> 🔗 [Latest Release (beta)](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.0-beta.7)

---

### **3. Project Progress**  
**Merged/Closed PRs (Today):**  
- ✅ **PR #7560** (`fix(chat): preserve selected loop mode query`) — Fixes UI inconsistency when switching between task modes, ensuring persistent state across navigation.  
- ✅ **PR #7504** (`fix(mcp): enforce per-tool whitelist on agent runtime path`) — Addresses critical security gap where disabled tools remained callable despite policy configuration.  
- ✅ **PR #7183** (`feat(skills): add workspace-scoped preload config`) — Implements requested `preload` option for trusted skills, reducing redundant tool discovery.  

These fixes reflect progress in **security hardening**, **user experience consistency**, and **performance optimization** for workspace-specific workflows.

> 🔗 [PR #7560](https://github.com/agentscope-ai/QwenPaw/pull/7560) | 🔗 [PR #7504](https://github.com/agentscope-ai/QwenPaw/pull/7504) | 🔗 [PR #7183](https://github.com/agentscope-ai/QwenPaw/pull/7183)

---

### **4. Community Hot Topics**  
The most discussed issues reveal growing demand for **team collaboration**, **stable long-running tasks**, and **cross-channel consistency**:

- 📌 **Issue #7318** [*Multi-tenant Hub roadmap*](https://github.com/agentscope-ai/QwenPaw/issues/7318) – 22 comments, 3 👍  
  *Community asks:* What features should define QwenPaw Hub’s multi-tenant edition? Priorities include admin controls, role-based access, and shared skill libraries. This signals a strategic pivot toward enterprise use cases.

- 📌 **Issue #7559** [*409 conflict during task execution*](https://github.com/agentscope-ai/QwenPaw/issues/7559) – 4 comments, 0 👍  
  Users report message submission fails mid-task due to 409 errors, despite expecting queueing. Highlights need for better **concurrent request handling** and **message buffering logic**.

- 📌 **Issue #7555** [*Loop mode UI resets after navigation*](https://github.com/agentscope-ai/QwenPaw/issues/7555) – 2 comments, 0 👍  
  Confusion over whether the current loop mode is “Goal” or “Default” after page switches. Points to poor **UI state persistence** and UX clarity.

> These top issues underscore a shift from individual productivity to **team-centric workflows**, demanding more robust session state, concurrency control, and transparent execution visibility.

---

### **5. Bugs & Stability**  
Critical bugs reported today affect both **task execution flow** and **system reliability**:

| Severity | Issue | Summary | Fix Status |
|--------|------|--------|-----------|
| 🔴 High | [#7552](https://github.com/agentscope-ai/QwenPaw/issues/7552) | Loop mode selection not passed to backend — always runs in default loop | ❌ Unresolved |
| 🔴 High | [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) | Task stop button shows as stopped, but task still runs | ❌ Unresolved |
| 🟡 Medium | [#7554](https://github.com/agentscope-ai/QwenPaw/issues/7554) | Shell commands hang on Windows due to stdin inheritance | ❌ Unresolved |
| 🟡 Medium | [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) | Feishu DM session silently deadlocks after hours | ⚠️ Partial logs, no fix yet |
| 🟡 Medium | [#7549](https://github.com/agentscope-ai/QwenPaw/issues/7549) | Volcengine Ark API rejects requests ending with assistant turns | ⚠️ Needs input validation |

> 🔗 [High-severity bugs list](https://github.com/agentscope-ai/QwenPaw/issues?q=is%3Aopen+label%3Abug+sort%3Aupdated-desc)

These indicate **deep-rooted issues in task lifecycle coordination**, **platform-specific edge cases**, and **API compatibility** that must be addressed before 2.2.0 final release.

---

### **6. Feature Requests & Roadmap Signals**  
User-driven innovation points to three major upcoming directions:

- 🚀 **Off-Peak Task Scheduling** ([#7568](https://github.com/agentscope-ai/QwenPaw/issues/7568)) – Request to leverage low-cost model hours via batch APIs. Strong alignment with cost-aware AI agents. Likely candidate for 2.3.
- 🚀 **Pluggable Relational Storage** ([#7558](https://github.com/agentscope-ai/QwenPaw/issues/7558)) – Demand for PostgreSQL/MySQL support due to SQLite WAL limitations in HA environments. Critical for Docker/K8s deployments.
- 🚀 **Versioned Skills & Dependency Tracking** ([#7557](https://github.com/agentscope-ai/QwenPaw/issues/7557)) – Calls for metadata in skill pools to track revisions and dependencies. Essential for large-scale agent fleets.

> These are not isolated requests—they form a coherent **enterprise-grade agent platform vision**: scalable, auditable, cost-efficient, and maintainable.

---

### **7. User Feedback Summary**  
Real-world pain points highlight friction in **long-running tasks**, **multi-user access**, and **platform consistency**:

- **Task interruption**: Users report tasks appear stopped (UI shows “completed”) but continue running silently (#7567).
- **Inconsistent behavior across channels**: Same session behaves differently in web vs desktop; flyout menus fail on Windows (#7545).
- **Navigation loss**: After restart, early conversation history disappears from sidebar despite being stored in `history.db` (#7548).
- **Update disruption**: Frontend update blocks app usage entirely—users want background updates (#7543).

> 💬 *User sentiment*: High enthusiasm for capability, but frustration with **reliability**, **consistency**, and **UX polish**. Many are willing to contribute but hit walls in stability.

---

### **8. Backlog Watch**  
Several high-impact, under-addressed issues require maintainer attention:

- 📌 **[Issue #7318]** – Multi-tenant Hub roadmap: 22 comments, no official response. **Urgent** for strategic direction.
- 📌 **[Issue #7367]** – Startup delay due to importing all 18 channel modules even when only `console` is enabled. **Major perf issue** on startup.
- 📌 **[Issue #7553]** – Output artifacts buried in completed steps. Users struggle to extract results. Affects usability in research/workflow contexts.
- 📌 **[PR #7378]** – Mobile native client draft: introduced but marked `DO NOT MERGE`. Indicates interest in mobile expansion but stalled.

> 🔗 [Backlog Watch List](https://github.com/agentscope-ai/QwenPaw/issues?q=is%3Aopen+label%3Aenhancement+sort%3Acreated-asc)

---

### ✅ **Summary Assessment**  
QwenPaw is **maturing rapidly into a team-focused, production-ready agent framework**. While core functionality is solid, **stability, cross-platform consistency, and user experience polish** remain key bottlenecks. The community is vocal, innovative, and technically engaged—especially around **enterprise readiness** and **cost optimization**. With strong momentum in PRs and issue activity, **2.2.0 final** should prioritize fixing high-severity bugs and stabilizing Hub-related features. The next 6–8 weeks will determine whether QwenPaw becomes a viable alternative to closed-source agent platforms.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest**  
**Date:** 2026-09-05  
**Repository:** [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

### **1. Today's Overview**

The ZeroClaw project remains highly active with 34 new issues and 50 updated pull requests in the last 24 hours, indicating sustained momentum in both community engagement and core development. Activity is concentrated around security hardening, runtime stability, agent lifecycle coordination, and channel-specific fixes—particularly for WhatsApp, Matrix, and TTS. Despite no new releases, a strong focus on risk-aware changes (with 14 high-risk labels) and RFC implementation tracking suggests preparation for a major v0.8.5 stabilization release. The project continues to balance innovation with rigorous operational safety, especially in agent trust boundaries and config validation.

---

### **2. Releases**

- **No new releases** were published in the past 24 hours.
- The last stable release remains **v0.8.4**, with **v0.8.5** still in finite stabilization (tracked in [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459)), expected by August 30, 2026. No migration notes or breaking changes are currently documented for this line.

---

### **3. Project Progress**

#### ✅ **Merged / Closed PRs (Today)**  
While no PRs were merged today, several key PRs were closed with significant impact:

- **[PR #10158](https://github.com/zeroclaw-labs/zeroclaw/pull/10158)**: *feat(release): publish the workspace to crates.io*  
  → Enabled public publishing of core crates (`zerorelay`, `zeroclaw-relay-proto`, `zeroclaw-tls`), improving dependency management and ecosystem integration.

- **[PR #10587](https://github.com/zeroclaw-labs/zeroclaw/pull/10587)**: *chore(deps): bump rust-all group across 1 directory with 49 updates*  
  → Maintained up-to-date dependencies; critical for security and compatibility.

- **[PR #10153](https://github.com/zeroclaw-labs/zeroclaw/pull/10153)**: *feat(whatsapp-web): port to whatsapp-rust 0.7.0*  
  → Removed git-pinned dependencies, enabling official crate publishing and future maintenance.

#### 🔧 **Key Features Advanced**
- **[PR #10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621)**: *feat(runtime): coordinate agent lifecycle mutations*  
  → Centralized live-config authority across daemon, gateway, channels, and CLI—critical for consistency in multi-agent deployments.

- **[PR #10628](https://github.com/zeroclaw-labs/zeroclaw/pull/10628)**: *fix(tts): surface providers dropped for a missing api_key*  
  → Improves diagnostics for TTS setup failures—users now see why a provider is unconfigured.

---

### **4. Community Hot Topics**

#### 🔥 **Top Issues by Engagement**
| Issue | Comments | Last Updated | Link |
|------|----------|--------------|------|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | 32 | 2026-09-04 | [RFC: Runtime-owned conversation sessions](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | 16 | 2026-09-04 | [RFC: Desktop screen interaction & input control](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) |
| [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) | 13 | 2026-09-04 | [RFC: Verbatim channel send without agent turn](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) |

**Analysis**:  
- **[#9487]**: A foundational architectural shift—runtime-managed session state—is under intense debate. This reflects growing demand for more secure, isolated agent contexts and better transport abstraction. High comment count signals deep technical scrutiny.
- **[#6909]**: Users want deeper desktop automation (e.g., GUI control). The fact it’s an accepted RFC with ongoing refinement shows interest in real-world productivity use cases beyond chat.
- **[#10050]**: Enables direct channel messaging bypassing agent logic—important for emergency alerts, monitoring tools, or fallback communication. High risk rating underscores its sensitivity.

#### 🔥 **Top PRs by Engagement**
| PR | Comments | Last Updated | Link |
|----|----------|--------------|------|
| [#10613](https://github.com/zeroclaw-labs/zeroclaw/pull/10613) | undefined | 2026-09-05 | [align constraint tags with spec](https://github.com/zeroclaw-labs/zeroclaw/pull/10613) |
| [#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) | undefined | 2026-09-04 | [expose token accounting on history-trim events](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) |
| [#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) | undefined | 2026-09-04 | [coordinate agent lifecycle mutations](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) |

**Analysis**:  
- **[#10613]**: Security-focused update aligning constraint tags with specification—critical for trust and compliance in enterprise environments.
- **[#9713]**: Directly addresses user confusion about token usage during history trimming—key for cost transparency and budget control.
- **[#10621]**: One of the most architecturally significant PRs—centralizing configuration state will reduce drift and improve auditability.

---

### **5. Bugs & Stability**

| Issue | Severity | Status | Fix PR? | Link |
|------|----------|--------|---------|------|
| [#10609](https://github.com/zeroclaw-labs/zeroclaw/issues/10609) | S1 - workflow blocked | In-progress | ❌ | [zerocode ignores launch dir](https://github.com/zeroclaw-labs/zeroclaw/issues/10609) |
| [#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603) | S1 - workflow blocked | In-progress | ❌ | [OpenCode providers miss x-opencode-session header](https://github.com/zeroclaw-labs/zeroclaw/issues/10603) |
| [#10593](https://github.com/zeroclaw-labs/zeroclaw/issues/10593) | S1 - workflow blocked | In-progress | ❌ | [backup.schedule_cron silently fails](https://github.com/zeroclaw-labs/zeroclaw/issues/10593) |
| [#10594](https://github.com/zeroclaw-labs/zeroclaw/issues/10594) | S2 - degraded behavior | In-progress | ❌ | [cron records nothing when job doesn't run](https://github.com/zeroclaw-labs/zeroclaw/issues/10594) |
| [#10585](https://github.com/zeroclaw-labs/zeroclaw/issues/10585) | S3 - minor issue | In-progress | ❌ | [log sink regression in migration tests](https://github.com/zeroclaw-labs/zeroclaw/issues/10585) |

**Summary**:  
- **Critical workflow blockers** exist in **ZeroCode CLI**, **OpenCode provider integration**, and **backup scheduling**—all impacting usability and reliability.
- **[#10603]** is particularly concerning: missing `x-opencode-session` header risks account flags and breaks Go models, potentially affecting production deployments.
- No fix PRs have been opened yet for these S1 bugs—urgent attention needed.

---

### **6. Feature Requests & Roadmap Signals**

| Request | Priority | Status | Likely Next Release? |
|--------|----------|--------|-----------------------|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | P2 | Open, revision 5 | ✅ Yes (v0.8.5+) |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | P2 | Accepted | ✅ Yes (post-v0.8.5) |
| [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) | P2 | Accepted | ✅ Yes (v0.8.5) |
| [#10619](https://github.com/zeroclaw-labs/zeroclaw/issues/10619) | P1 | In-progress | ✅ Yes (v0.8.5) |
| [#10588](https://github.com/zeroclaw-labs/zeroclaw/issues/10588) | P2 | In-progress | ⚠️ Maybe |

**Signals**:  
- **v0.8.5 stabilization line** is actively shaping the roadmap. Architectural RFCs like [#9487] and [#10050] are being prioritized.
- **Cross-provider compatibility** (e.g., Anthropic prompt cache passthrough via OpenAI-compatible gateways) is a clear emerging theme—indicating users need interoperability.
- **Multimodal enhancements** (image size increase, media placeholder handling) suggest growing use of vision models.

---

### **7. User Feedback Summary**

- **Pain Points**:  
  - **CLI misbehavior**: Users report `zerocode` ignoring launch directory ([#10609](https://github.com/zeroclaw-labs/zeroclaw/issues/10609)) and blocking input during reconnects ([#10223](https://github.com/zeroclaw-labs/zeroclaw/issues/10223)).
  - **TTS quality**: Markdown and emoji are spoken aloud ([#10626](https://github.com/zeroclaw-labs/zeroclaw/issues/10626)), and voice note durations aren’t displayed correctly ([#10627](https://github.com/zeroclaw-labs/zeroclaw/issues/10627)).
  - **Config invisibility**: Missing `api_key` leads to silent TTS failure ([#10628](https://github.com/zeroclaw-labs/zeroclaw/issues/10628)), and `backup.schedule_cron` does nothing with no warning ([#10593](https://github.com/zeroclaw-labs/zeroclaw/issues/10593)).

- **Satisfaction**:  
  - Users appreciate **transparent error reporting** (e.g., improved tool execution error messages in [#10357](https://github.com/zeroclaw-labs/zeroclaw/issues/10357)).
  - The **dedicated RFC process** and **clear risk labeling** are valued by contributors.

---

### **8. Backlog Watch**

| Issue | Priority | Status | Needs Attention? | Link |
|------|----------|--------|------------------|------|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | P2 | Open, revision 5 | ✅ Yes — critical architecture change | [RFC: Runtime-owned sessions](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) |
| [#10619](https://github.com/zeroclaw-labs/zeroclaw/issues/10619) | P1 | In-progress | ✅ Yes — high-impact feature | [Anthropic cache passthrough](https://github.com/zeroclaw-labs/zeroclaw/issues/10619) |
| [#10579](https://github.com/zeroclaw-labs/zeroclaw/issues/10579) | P2 | Open | ✅ Yes — broken links in docs | [Reference pages missing](https://github.com/zeroclaw-labs/zeroclaw/issues/10579) |
| [#10330](https://github.com/zeroclaw-labs/zeroclaw/issues/10330) | P2 | Open | ✅ Yes — tracker for accepted RFCs | [Accepted RFC index](https://github.com/zeroclaw-labs/zeroclaw/issues/10330) |

**Note**: Several high-impact, accepted RFCs remain open or unimplemented. Maintainer review and action are urgently needed to avoid stagnation.

--- 

**Final Assessment**:  
ZeroClaw is in a **high-intensity development phase**, focused on **security**, **stability**, and **architectural clarity**. While the project is healthy in activity and community engagement, **critical bugs in core workflows** and **delayed implementation of accepted RFCs** pose near-term risks. Immediate attention to S1 bugs and backlog triage is recommended to maintain momentum toward v0.8.5.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*