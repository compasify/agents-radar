# OpenClaw Ecosystem Digest 2026-09-12

> Issues: 494 | PRs: 500 | Projects covered: 5 | Generated: 2026-09-12 02:48 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest — 2026-09-12**

---

### **1. Today's Overview**  
The OpenClaw project remains highly active, with 494 issues and 500 pull requests updated in the last 24 hours—indicating intense development and community engagement. The release of **v2026.9.4** introduces a critical rollback safety enhancement for compatible failed updates, while several high-severity bugs affecting session state, crash loops, and upgrade reliability have been reported. Despite strong momentum in PRs (many focused on UI/UX polish and performance), core stability concerns persist, particularly around agent upgrades, memory handling, and process lifecycle management. The project continues to balance rapid iteration with growing complexity in multi-agent, cross-platform, and production-grade deployment scenarios.

---

### **2. Releases**  
**v2026.9.4** – *Released today*  
- **Key Change**: Added **recoverable rollback logic** for compatible failed updates: if schema/config checks pass, the system retains the previous package and restores it with prior configuration and service state.  
- **Important Note**: Database migrations still require a verified pre-update backup.  
- **Impact**: Addresses critical upgrade failure risks (e.g., #140339).  
- **Link**: [GitHub Release v2026.9.4](https://github.com/openclaw/openclaw/releases/tag/v2026.9.4)  

> ⚠️ **Note**: A release blocker issue (#144742) was discovered post-release: **#144208** (fixing handoff lease conflicts) was missing from this build, potentially causing config write failures on upgraded systems.

---

### **3. Project Progress**  
**Merged/Closed PRs (Today)**: 216  
**Top Progress Highlights**:  
- ✅ **UI/UX Refinements**: Multiple PRs improved dashboard layout (#145542), model selector clarity (#145525), and session filtering (#145514), enhancing usability for teams and power users.  
- ✅ **Performance Optimizations**: Key improvements in model catalog indexing (#145439, #145433), startup time reduction (#145541), and terminal health scanning (#145401).  
- ✅ **Update & Migration Fixes**: Critical fixes for update resilience (#145501, #145282, #145312) and task delivery recovery during updates.  
- ✅ **Audio & Plugin Stability**: Fixed voice note truncation (#145391) and Feishu plugin visibility (#143944).  

These changes reflect a shift toward **stability, performance, and operational robustness**, especially in upgrade paths and real-time user experience.

---

### **4. Community Hot Topics**  
**Most Active Issues (by comments/reactions)**:  
| Issue | Summary | Link | Comments | Severity |
|------|--------|------|---------|----------|
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | Synchronous persistence blocks event loop at scale | 17 | 🦞 Diamond Lobster (P0) |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Zombie processes leak from hooks/tools | 16 | 🦐 Gold Shrimp (P1) |
| [#96834](https://github.com/openclaw/openclaw/issues/96834) | WhatsApp image processing wedges lane for 3 minutes | 15 | 🦪 Silver Shellfish (P1) |
| [#140620](https://github.com/openclaw/openclaw/issues/140620) | Session reconciliation stalls post-upgrade; sessions lost | 12 | 🦪 Silver Shellfish (P0) |

**Analysis**:  
- **Core infrastructure stress**: High-frequency sync operations (persistence, compaction) are causing event loop contention.  
- **Process lifecycle hygiene**: Unreaped child processes and zombie accumulation indicate deep resource management gaps.  
- **User-facing latency**: Media-heavy inputs (images, voice notes) trigger long delays or deadlocks, undermining trust in real-time interaction.  
- **Upgrade fragility**: Multiple regression reports suggest upgrade path validation is not yet resilient across environments.

---

### **5. Bugs & Stability**  
**Top Stability Risks (Ranked by Impact)**:  
| Bug | Description | Status | Fix PR? |
|-----|-------------|--------|--------|
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | MCP server init timeout crashes Gateway via unhandled rejection | Open (P0) | ❌ No |
| [#145192](https://github.com/openclaw/openclaw/issues/145192) | Managed update fails due to incompatible handoff lease (post-v2026.9.4) | Open (P0) | ❌ No (release missing fix) |
| [#140620](https://github.com/openclaw/openclaw/issues/140620) | Post-upgrade session reconciliation stalls, making sessions unfindable | Open (P0) | ❌ No |
| [#142476](https://github.com/openclaw/openclaw/issues/142476) | Cron reaper blocks event loop for 14–76 seconds due to sync DB check | Open (P1) | ❌ No |
| [#144712](https://github.com/openclaw/openclaw/issues/144712) | `openclaw update` fails at global install swap; rollback misreported | Closed (P0) | ✅ Yes (PR #145501) |

> 🔥 **Critical Risk**: **v2026.9.4 release missing #144208** means systems with legacy handoff leases may fail silently on config writes—a **known P0 regression**.

---

### **6. Feature Requests & Roadmap Signals**  
**High-Value User-Requested Features**:  
- **Enhanced Backup Exclusions** ([#40786](https://github.com/openclaw/openclaw/issues/40786)): `.gitignore`-style patterns for `backup create`.  
- **Prompt Injection Scanning on Tool Output** ([#79168](https://github.com/openclaw/openclaw/issues/79168)): Security hardening against indirect injection.  
- **Exposing OpenRouter Cost to Agents** ([#9016](https://github.com/openclaw/openclaw/issues/9016)): For cost-aware AI planning.  
- **Accessibility Audit for Screen Readers** ([#126876](https://github.com/openclaw/openclaw/issues/126876)): First blind user report highlights inclusivity gap.  

**Prediction**: These features are likely to appear in **v2026.10.x** as part of a broader **security + UX + observability** push. The accessibility audit suggests a growing focus on inclusive design.

---

### **7. User Feedback Summary**  
Real-world pain points revealed through issues:  
- **Trust & Safety**: Users receive hallucinated outputs when tools fail ([#49876](https://github.com/openclaw/openclaw/issues/49876)), eroding confidence in automated agents.  
- **Operational Friction**: Long delays in WhatsApp/Telegram responses ([#96834](https://github.com/openclaw/openclaw/issues/96834), [#126246](https://github.com/openclaw/openclaw/issues/126246)) hinder productivity.  
- **Upgrade Anxiety**: Multiple users report losing data or being unable to access sessions after upgrading, indicating poor rollback transparency.  
- **Developer Experience Gaps**: Missing debug logs for tool failures ([#117703](https://github.com/openclaw/openclaw/issues/117703)), inconsistent error messaging.  
- **Platform-Specific Pain**: Windows (`#136203`, `#137377`) and macOS (`#145282`) users face unique permission and service management issues.

> 💬 **Overall Sentiment**: High enthusiasm for capability, but frustration with **stability, upgrade reliability, and debugging opacity**.

---

### **8. Backlog Watch**  
**Critical Long-Standing Issues Needing Maintainer Attention**:  
| Issue | Description | Age | Status | Priority |
|------|-------------|-----|--------|----------|
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | Synchronous agent persistence blocks event loop | 28 days | Open (P1) | 🦞 Diamond Lobster |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Hook/tool child processes leak → zombies | 34 days | Open (P1) | 🦐 Gold Shrimp |
| [#125333](https://github.com/openclaw/openclaw/issues/125333) | totalTokens inflation persists despite fix | 25 days | Open (P0) | 🦞 Diamond Lobster |
| [#140971](https://github.com/openclaw/openclaw/issues/140971) | All Feishu tools silently dropped in message runs | 5 days | Open (P1) | 🦞 Diamond Lobster |
| [#121558](https://github.com/openclaw/openclaw/issues/121558) | Cron runs fuse narration into output | 33 days | Open (P1) | 🦞 Diamond Lobster |

> 🛑 **Action Required**: These represent **systemic flaws** in concurrency, lifecycle management, and security boundaries. Without dedicated maintainer review, they risk becoming permanent technical debt.

---

**✅ Summary**: OpenClaw is in a **high-growth, high-stakes phase**—innovative features are rapidly advancing, but core stability and upgrade reliability remain fragile. Immediate attention to **P0/P1 regressions**, **process lifecycle hygiene**, and **upgrade validation** is essential to maintain user trust. The next version must prioritize **robustness over novelty**.

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem – 2026-09-12**

---

### **1. Ecosystem Overview**  
The personal AI assistant and agent open-source ecosystem in Q3 2026 is marked by rapid innovation, increasing architectural complexity, and growing focus on operational robustness. Projects are transitioning from experimental prototypes to production-grade platforms, with strong emphasis on multi-agent orchestration, cross-platform reliability, and secure identity management. While feature velocity remains high across the board, core stability—particularly around session persistence, upgrade resilience, and memory safety—is emerging as a critical bottleneck affecting user trust and adoption. The landscape reflects a maturing market where technical maturity now competes with feature novelty for developer attention.

---

### **2. Activity Comparison**

| Project         | Issues (Last 24h) | PRs (Last 24h) | Release Status       | Health Score (Out of 10) |
|----------------|-------------------|----------------|----------------------|----------------------------|
| **OpenClaw**   | 494               | 500            | v2026.9.4 (Patch)    | 7.2                        |
| **Hermes Agent** | 50                | 50             | v0.21.2 (Patch)      | 8.4                        |
| **QwenPaw**    | 24                | 37             | v2.2.1 (Stable)      | 8.6                        |
| **ZeroClaw**   | 50                | 50             | No new release       | 8.8                        |
| **IronClaw**   | 0                 | 0              | —                    | —                          |

> ✅ *Note: IronClaw shows no activity; likely dormant or under maintenance.*

---

### **3. OpenClaw's Position**  
OpenClaw stands out as the most **feature-rich and aggressively iterating** project, with unparalleled volume in issues and pull requests—indicating both high community engagement and significant technical debt. Its **modular, multi-agent architecture** enables deep customization but contributes to instability in process lifecycle and update paths. Compared to peers, OpenClaw has the largest contributor base and most diverse plugin ecosystem, yet suffers from **persistent P0/P1 regressions** in core infrastructure (e.g., event loop blocking, zombie processes). Unlike Hermes Agent’s focused stability push or QwenPaw’s user-centric polish, OpenClaw prioritizes breadth over depth, positioning it as a foundational platform for advanced developers rather than end-users.

---

### **4. Shared Technical Focus Areas**  
Across all active projects, several systemic challenges are recurring:

- **Session & State Integrity**:  
  - *OpenClaw* (#140620): Post-upgrade session reconciliation stalls.  
  - *Hermes Agent* (#66616): Skills index staleness causes tool discovery failure.  
  - *QwenPaw* (#7698): Session index/disk mismatch leads to ghost sessions.  
  → **Need**: Proactive state validation, atomic upgrades, and durable metadata indexing.

- **Memory & Performance Management**:  
  - *OpenClaw* (#119720): Sync persistence blocks event loop.  
  - *ZeroClaw* (#10734/#10753): Stack overflow on Windows.  
  - *QwenPaw* (#7715): Silent Daily Paper failures due to network unavailability.  
  → **Need**: Async-first design, stack-safe execution, and resilient network fallbacks.

- **Upgrade & Rollback Reliability**:  
  - *OpenClaw* (missing fix in v2026.9.4) and *QwenPaw* (#7567): Failed rollback mechanisms.  
  → **Need**: Verified pre-update backups, recoverable rollback logic, and transparent status reporting.

- **Security & Identity Infrastructure**:  
  - *ZeroClaw* (RFC #7141): Full OIDC integration.  
  - *Hermes Agent* (#108716): `auth.json` writable despite contract.  
  - *QwenPaw* (#7711): Need for private search backends.  
  → **Need**: Zero-trust configuration, identity-aware RPCs, and secure plugin verification.

---

### **5. Differentiation Analysis**

| Dimension             | OpenClaw                            | Hermes Agent                         | QwenPaw                              | ZeroClaw                              |
|-----------------------|-------------------------------------|--------------------------------------|--------------------------------------|----------------------------------------|
| **Feature Focus**     | Multi-agent orchestration, extensibility | Multiplexed profiles, cron/kanban workflows | Model routing, Hub (multi-tenant), UX polish | Security-first, identity control, Wasm sandboxing |
| **Target User**       | Power users, enterprise integrators | Developers, workflow automation teams | Teams, knowledge workers, creators | Security-conscious orgs, regulated environments |
| **Architecture**      | Monorepo with heavy plugin model    | Modular gateway + multiplexer        | Agent-per-model routing, CLI-driven  | Rust-based, zero-trust RPC, OIDC-native |
| **Core Innovation**   | High-complexity agent networks      | Profile isolation & parity           | Configurable model routing per agent | Canonical identity, proactive context compression |

> 🔍 **Key Differentiator**: ZeroClaw is the only project actively building **identity-aware, auditable agent systems**—a strategic divergence from feature-heavy competitors.

---

### **6. Community Momentum & Maturity**  

| Tier                     | Projects                                  | Characteristics |
|--------------------------|-------------------------------------------|-----------------|
| **Rapid Iteration**      | OpenClaw, QwenPaw, ZeroClaw              | >50 PRs/issue updates daily; frequent releases; high churn in config/behavior |
| **Stabilization Phase**  | Hermes Agent                              | Patch-focused releases; fewer new features; strong UX polish |
| **Dormant / Low Activity** | IronClaw                                | No recent activity; possible stagnation |

> 📈 **Trend**: Projects with **clear roadmap signals** (e.g., QwenPaw Hub, ZeroClaw OIDC) show higher contributor retention and faster issue resolution. OpenClaw’s momentum is impressive but unsustainable without addressing P0 regressions.

---

### **7. Trend Signals**  
Based on community feedback and development patterns, the following industry trends are emerging:

1. **Shift from Feature-Centric to Stability-Centric Development**:  
   - Users increasingly prioritize **upgrade reliability**, **session persistence**, and **debuggability** over new features.  
   - Example: OpenClaw’s top issues revolve around crashes and data loss—despite rich functionality.

2. **Demand for Enterprise-Ready Platforms**:  
   - QwenPaw’s Hub planning (#7318), ZeroClaw’s OIDC RFC, and Hermes Agent’s multiplexed profile parity signal a move toward **RBAC, audit logging, and shared skill libraries**.

3. **Security-by-Design as Baseline Expectation**:  
   - Plugin verification (ZeroClaw), credential sanitization (Hermes), and immutable configs (QwenPaw) reflect a new standard: **trust must be engineered in, not bolted on**.

4. **UX as a Competitive Moat**:  
   - Desktop layout improvements (Hermes), session grouping (QwenPaw), and “add selected text” (ZeroClaw) show that **micro-interactions matter**—especially for long-running workflows.

5. **Diverse Tooling Demand**:  
   - Requests for Serply, DeepSeek V4.1 Flash, and privacy-preserving search providers indicate users want **flexible, customizable, and reliable backend diversity**.

---

### **Conclusion**  
The personal AI agent ecosystem is entering a **critical inflection point**: innovation is no longer just about what agents can do—but how reliably, securely, and predictably they do it. Projects like **QwenPaw** and **ZeroClaw** are setting new standards in **user experience** and **security architecture**, respectively, while **OpenClaw** remains the most ambitious but also most fragile. For developers and decision-makers, the choice is clear: opt for **mature, stable platforms** (Hermes, QwenPaw) for team deployment, or **cutting-edge, high-risk frameworks** (OpenClaw) only if you have dedicated engineering capacity. The future belongs not to the most feature-packed agent—but to the one that works *when it matters*.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-09-12**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active, with 50 new issues and 50 updated pull requests in the past 24 hours—indicating strong community engagement and ongoing development momentum. A critical patch release, `v0.21.2` (v2026.9.11), was issued to resolve session state instability caused by a recent rewrite of connection handling in `state.db`. The activity is heavily focused on stability fixes for core components like cron scheduling, multiplexed profiles, and agent tooling, alongside UX refinements in the desktop client. High-priority bugs (P1/P2) are concentrated around security, session integrity, and cross-platform compatibility.

---

### **2. Releases**  
🔹 **v2026.9.11 – Hermes Agent v0.21.2**  
- **Release Date:** September 11, 2026  
- **Type:** Patch Release  
- **Summary:** Addresses instability in `state.db` caused by the `v0.21.0` rewrite of session store connection handling. Some installations experienced second writers canceling each other’s locks, leading to degraded or failed sessions.  
- **Fix:** Stabilized concurrent access via improved lock management and connection lifecycle handling.  
- **Migration Note:** Users upgrading from `v0.21.0` should verify session continuity, especially in long-running or multi-agent workflows. No breaking changes reported.  
🔗 [GitHub Release v0.21.2](https://github.com/nousresearch/hermes-agent/releases/tag/v0.21.2)

---

### **3. Project Progress**  
✅ **Merged/Closed PRs (Today):**  
- **PR #108708**: Fixes profile isolation in multiplexed gateway mode — ensures each served profile sees its own `cwd`, approvals, redaction policies, and tool configurations.  
- **PR #108683**: Aligns dashboard and CLI status reporting: multiplexer-served profiles now correctly appear as "running via multiplexer" across all surfaces.  
- **PR #108753**: Auto-formatted JavaScript codebase via `npm run fix` workflow; auto-merged post-CI success.  
- **PR #95377**: Adds `excel_line` memory plugin to community index — enables durable, human-readable Excel-backed long-term memory.  
- **PR #108759**: Fixes password manager toggle persistence — prevents Bitwarden/1Password settings from reverting after config reload.  

🔧 **Key Advancements:**  
- Multiplexed profiles now behave identically to standalone gateways across **cron**, **kanban**, **completion delivery**, and **session scope**.  
- Desktop UX improvements: sash double-click now equalizes pane sizes (PR #108757/#108756), and split panes remain reachable even when overflowing (PR #108758).  
- Security hardening: remediated package vulnerabilities (PR #108755), removed dangling media markers (PR #108762).

---

### **4. Community Hot Topics**  
🔥 **Top Issues by Comment Count & Urgency:**  
- **Issue #66616** – *[Skills Index Stale]* (199 comments)  
  - **Status:** Degraded | **Root Cause:** Skills index hasn’t refreshed in 29.8h (>26h limit).  
  - **Impact:** Breaks `/docs/skills` and downstream tool discovery.  
  - **Analysis:** Indicates systemic reliability issue in CI/CD pipeline (`skills-index.yml`). Suggests need for proactive monitoring or retry logic.  
  🔗 [Issue #66616](https://github.com/nousresearch/hermes-agent/issues/66616)

- **Issue #87654** – *[Vision Tools Disappear After Probe]* (11 comments)  
  - **Severity:** P1 | **Cause:** `AuxProbeClientStub` cached incorrectly, causing tools to vanish mid-session.  
  - **Impact:** Critical for vision-enabled agents; silently fails in long-running processes.  
  - **Analysis:** Highlights need for proper client lifecycle management in dynamic tool provisioning.  
  🔗 [Issue #87654](https://github.com/nousresearch/hermes-agent/issues/87654)

- **Issue #108761** – *[Web Extract Leaks Credentials]* (2 comments)  
  - **Security Risk:** P1 | **Cause:** Opaque credential parameters forwarded despite sensitive-name detection.  
  - **Analysis:** Shows gap in URL sanitization logic — consistency between heuristic and enforcement needed.  
  🔗 [Issue #108761](https://github.com/nousresearch/hermes-agent/issues/108761)

📌 **Top PRs by Impact:**  
- **PR #108748**: Enables multiplexed profiles to match standalone behavior in cron, kanban, and completion delivery — major step toward parity.  
- **PR #108755**: Remediated Node.js dependency vulnerabilities — essential for security compliance.  
- **PR #108757 / #108756**: UX-focused sash double-click equalization — aligns with user expectations in UI design.

---

### **5. Bugs & Stability**  
🔴 **Critical (P1) Bugs:**  
- **Issue #87654** – Vision tools disappear after first probe → **no fix PR yet**. High risk for users relying on vision tools.  
- **Issue #92758** – MCP OAuth fails on desktop due to missing `iss` parameter → **security boundary breach**. Requires RFC 9207 compliance fix.  
- **Issue #108716** – `auth.json` remains writable despite documented denial contract → **security risk**; allows privilege escalation.  

🟡 **High-Priority (P2) Bugs:**  
- **Issue #107485** – SSH-isolated cron scheduler killed by idle-exit watchdog → job loss during execution.  
- **Issue #108656** – Gemini quota failures exhaust API key pools globally → breaks fallback models.  
- **Issue #108707** – Hardline false positive due to unquoted apostrophe in comment → desyncs command parsing.  
- **Issue #108674** – `sudo hermes gateway start|stop --system` fails due to unit name mismatch → regression from prior fix.  

🟢 **Stability Improvements:**  
- Multiple PRs address session state corruption (e.g., `state.db`, `resume guard`, lineage compaction).  
- Fix for `uv` installation hanging on Windows (PR #108735) resolves installer deadlock.

---

### **6. Feature Requests & Roadmap Signals**  
💡 **Emerging Themes:**  
- **Session Transparency:**  
  - *Issue #91813*: Bot Mode group activity needs live transcript — signals demand for real-time supervision of multi-agent work.  
- **UX Polish:**  
  - *Issue #108751* & *#108756*: Double-click sash should equalize panes — confirms user expectation for consistent layout behavior.  
  - *Issue #103586*: Scroll-to-bottom button appears in all panes — indicates need for per-pane scroll state tracking.  
- **Workflow Automation:**  
  - *Issue #106807*: Deterministic event hooks between bots with adversarial review → suggests interest in declarative, auditable workflows.  
- **Navigation & Discovery:**  
  - *Issue #47809*: Quick jump navigation in long conversations (like DeepSeek) — top-requested UX enhancement.  
  - *Issue #108759*: Password manager toggle persistence — reflects need for configuration durability.

🎯 **Predicted Next Version Additions:**  
- Session-level audit logs for approval decisions (*Issue #104102*)  
- Visual conversation navigator (sidebar jump list)  
- Enhanced multiplexed profile parity (all services now matched)  
- Improved error recovery for empty `old_string` in file patches

---

### **7. User Feedback Summary**  
💬 **Real Pain Points Reported:**  
- **Frustration with Hidden Tool Failures:** Users report vision tools vanishing silently — disrupts workflows without warning.  
- **Configuration Instability:** `hermes update` hangs on Windows due to PowerShell profile loading — breaks upgrade path.  
- **Inconsistent State Management:** Cloned profiles lose `max_turns` setting → causes Kanban dispatch failures ("Iteration budget exhausted").  
- **Poor Session Resilience:** Long sessions fail to resume due to message count limits, forcing export — undermines persistent workflows.  
- **Security Confusion:** `auth.json` remaining writable despite docs stating otherwise raises trust issues.

✅ **Positive Signals:**  
- High engagement in PRs related to UX (desktop layout, sash behavior).  
- Growing use of multiplexed profiles and complex workflows (cron, kanban).  
- Strong internationalization effort (Indonesian docs added — PR #92192/#93632).

---

### **8. Backlog Watch**  
⚠️ **Long-Unanswered Critical Issues:**  
- **Issue #66616** – Skills index stale (199 comments, 2026-07-18) — **over 2 months unresolved**.  
  🔗 [Issue #66616](https://github.com/nousresearch/hermes-agent/issues/66616)  
- **Issue #84102** – Local TTS writes Ogg/Vorbis instead of Opus → silent degradation.  
  🔗 [Issue #84102](https://github.com/nousresearch/hermes-agent/issues/84102)  
- **Issue #38617** – Windows `uv` install fails even when `uv` exists → recurring pain point since June 2026.  
  🔗 [Issue #38617](https://github.com/nousresearch/hermes-agent/issues/38617)  

📌 **PRs Needing Review:**  
- **PR #108312** – Fix for unpinnable sidebar rows in desktop app — has no comments but impacts UX.  
  🔗 [PR #108312](https://github.com/nousresearch/hermes-agent/pull/108312)  
- **PR #108676** – Full multiplex profile scope fix — critical for security and consistency.  
  🔗 [PR #108676](https://github.com/nousresearch/hermes-agent/pull/108676)

---

**📊 Project Health Score: 8.4/10**  
Active development, high-quality PRs, and responsive maintainers. Focus on stability and UX polish. Prioritize resolving `skills-index` staleness and `vision tool disappearance` to prevent user churn.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-09-12**

---

### **1. Today's Overview**  
QwenPaw is experiencing a high velocity of community engagement, with **24 issues and 37 PRs updated in the last 24 hours**, indicating strong momentum in both feature development and bug triage. The release of **v2.2.1 (Stable)** on September 11 marks a key milestone, introducing granular model routing per agent and proactive memory upgrades. Active discussions center around multi-user support, UI/UX refinements, and stability fixes—particularly for subagent execution, session persistence, and task cancellation. The project remains healthy, with consistent contributions from first-time developers and rapid response to critical regressions.

---

### **2. Releases**  
🔹 **v2.2.1 (Stable)** – Released: 2026-09-11  
🔗 [Release Page](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.1)  

#### ✨ What’s Changed  
**Models, Agents & Memory**  
- ✅ **Configurable model routing per Agent**: Users can now define provider preferences and fallback behavior independently for each agent via `model_routing` configuration. This enables cost optimization and model specialization (e.g., using Haiku for simple tasks, Opus for complex reasoning).  
- ✅ **Auto Fin proactive memory review + ReMe upgrade**: Enhances automated memory cleanup and recall, improving long-term context management and reducing token bloat.  

> 📌 **Migration Note**: No breaking changes reported. Existing configurations should remain compatible. Ensure `qwenpaw models` CLI command is used instead of deprecated `qwenpaw providers`.

---

### **3. Project Progress**  
✅ **Merged/Closed PRs (Today):**  
- [#7677](https://github.com/agentscope-ai/QwenPaw/pull/7677): Fixes validation error handling by returning structured `422 Unprocessable Entity` responses instead of silent failures.  
- [#7688](https://github.com/agentscope-ai/QwenPaw/pull/7688): Simplified grouped conversation pagination by removing "Collapse List" and replacing it with a "Load More" pattern, preserving user state across selections.  
- [#7652](https://github.com/agentscope-ai/QwenPaw/pull/7652): Preserves actual context window sizes resolved by providers (e.g., DeepSeek, Atlas Cloud), preventing premature compaction.  
- [#7590](https://github.com/agentscope-ai/QwenPaw/pull/7590): Fixes Telegram Markdown table rendering by switching from raw pipes to `<pre>` blocks for readability.  
- [#7696](https://github.com/agentscope-ai/QwenPaw/pull/7696): Adds local admin bootstrap (`hub --init-admin`) for Hub deployments, enabling headless setup without browser or SSH port forwarding.  

These updates reflect a focus on **stability, usability, and infrastructure robustness** ahead of broader team adoption.

---

### **4. Community Hot Topics**  
🔥 **Issue #7318** – *“QwenPaw Hub, the multi-tenant edition, is coming in 2.2.0: what should we build next?”*  
🔗 [GitHub Issue #7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)  
- **26 comments, 4 upvotes** — most active discussion today.  
- **Community Need**: Demand for team-based deployment features (multi-user access, admin-managed skills) has been persistent since 2025.  
- **Signal**: QwenPaw is transitioning from personal assistant to enterprise-ready platform. Future roadmap likely includes role-based access control (RBAC), shared skill libraries, and audit logging.

🔥 **PR #7712** – *Add Serply as web_search provider*  
🔗 [PR #7712](https://github.com/agentscope-ai/QwenPaw/pull/7712)  
- First-time contributor; proposes adding Serply (Google-powered API) as an opt-in alternative to Tavily/AnySearch.  
- **User Need**: Diversification of search backends for reliability, privacy (BYOK), and performance. Highlights growing demand for customizable tooling.

---

### **5. Bugs & Stability**  
🚨 **Critical (High Severity)**  
- [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567): **Stop button doesn’t halt running tasks** — UI shows task stopped, but process continues.  
  - **Impact**: Risk of duplicate processing, wasted tokens, data inconsistency.  
  - **Fix PR**: Not yet open. High priority.  
- [#7676](https://github.com/agentscope-ai/QwenPaw/issues/7676): `subagent_model` config ignored — subagents always inherit parent’s model.  
  - **Impact**: Breaks per-task model selection strategy.  
  - **Fix PR**: [#7680](https://github.com/agentscope-ai/QwenPaw/pull/7680) – diagnosed and partially fixed; needs deeper testing.  

⚠️ **Medium Severity**  
- [#7698](https://github.com/agentscope-ai/QwenPaw/issues/7698): Session index and disk file mismatch → ghost sessions, data loss.  
  - **Impact**: User trust erosion due to lost conversation history.  
- [#7689](https://github.com/agentscope-ai/QwenPaw/issues/7689): PDF blocks sent to non-multimodal endpoints despite fix — rejected with HTTP 400.  
  - **Root Cause**: Multimodal path not fully disabled in all cases.  
- [#7716](https://github.com/agentscope-ai/QwenPaw/issues/7716): MCP fails to connect after v2.2.x upgrade — regression in plugin compatibility.  

🛠️ **Low Severity / UX Issues**  
- [#7709](https://github.com/agentscope-ai/QwenPaw/issues/7709): Results hidden inside “thinking” steps or collapsed.  
- [#7708](https://github.com/agentscope-ai/QwenPaw/issues/7708): Model settings reset unexpectedly.  
- [#7705](https://github.com/agentscope-ai/QwenPaw/issues/7705): Default work directory not respected after migration.  

---

### **6. Feature Requests & Roadmap Signals**  
🚀 **Top User-Requested Features (Next Version Candidates)**  
- **[#7717](https://github.com/agentscope-ai/QwenPaw/issues/7717)**: Native DeepSeek V4.1 Flash support with metadata, prompt prefix stability, and KV-cache observability.  
  - *Signal*: Growing demand for advanced model-specific optimizations. Likely to be prioritized in v2.3+.  
- **[#7714](https://github.com/agentscope-ai/QwenPaw/issues/7714)**: Customizable default Loop mode (rename “default” → “standard”, allow any template as default).  
  - *Signal*: High-efficiency users want to reduce repetitive UI actions.  
- **[#7710](https://github.com/agentscope-ai/QwenPaw/issues/7710)**: Dedicated history groups for inter-agent tool chats and proactive messages.  
  - *Signal*: As agents become more autonomous, users need better organization of machine-generated conversations.  
- **[#7711](https://github.com/agentscope-ai/QwenPaw/issues/7711)**: Add Serply as web_search provider.  
  - *Signal*: Market demand for diverse, reliable, and private search backends.  

📌 **Predicted v2.3 Focus Areas**: Multi-tenancy (Hub), advanced model routing, improved memory management, and richer plugin ecosystem.

---

### **7. User Feedback Summary**  
💬 **Real Pain Points Expressed:**  
- **Trust & Reliability**: Multiple reports of silent task failures, session corruption, and lost data (*#7698*, *#7567*).  
- **Workflow Friction**: Users frustrated by needing to reselect models (*#7708*), reconfigure directories (*#7705*), or manually switch Loop modes (*#7714*).  
- **Mobile UX Gaps**: Android users unable to input long messages due to lack of “enter” vs “send” distinction (*#7707*).  
- **Tool Visibility**: Automated agent interactions (via `chat_with_agent`) mix into “Uncategorized” logs, making debugging hard (*#7710*).  

✅ **Satisfaction Indicators**:  
- Positive feedback on v2.2.1’s new model routing and memory improvements.  
- Appreciation for community-driven feature design (e.g., Hub planning via #7318).

---

### **8. Backlog Watch**  
🔍 **Longstanding, High-Impact Issues Needing Attention**  
- **[#4901](https://github.com/agentscope-ai/QwenPaw/issues/4901)**: `spawn_subagent` support for per-task model selection (multi-model collaboration)  
  - Open since June 2026. Critical for cost efficiency and agent orchestration.  
  - Related to #7676 and #7680 — fixing one may unlock others.  
- **[#7693](https://github.com/agentscope-ai/QwenPaw/issues/7693)**: Creator multi-image generation interrupted by user approval — task stuck in RUNNING  
  - Affects creative workflows. Requires lifecycle-aware handling of approvals.  
- **[#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715)**: Daily Paper fails silently when arxiv.org unreachable — no proxy/config, hidden error  
  - Shows need for better error visibility and network resilience.  

🔔 **Action Required**: These issues represent systemic gaps in **error handling, workflow resilience, and user control**. Prioritizing them will significantly improve user retention and enterprise readiness.

---  
📊 *Data collected from GitHub: 2026-09-12 | Project Health: ✅ Strong Momentum, ⚠️ Stability Challenges in Subagent & Session Layers*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest – 2026-09-12**

---

### **1. Today's Overview**  
The ZeroClaw project remains highly active with a robust pace of development: **50 issues and 50 pull requests updated in the last 24 hours**, indicating sustained momentum across architecture, security, and core runtime improvements. The ecosystem is focused on stabilizing high-severity bugs related to stack overflow, memory safety, and authentication flows, while simultaneously advancing a major security overhaul under RFC #7141. Despite no new releases, the integration of OIDC-based identity systems and proactive context management suggests strong progress toward a more secure, user-controlled AI agent platform.

---

### **2. Releases**  
❌ **No new releases** were published in the past 24 hours.  
*Note: The latest stable version remains v0.8.5, with ongoing work focused on stability fixes and feature refinement ahead of the next release cycle.*

---

### **3. Project Progress**  
✅ **Merged PRs (closed today):**  
- [#10262](https://github.com/zeroclaw-labs/zeroclaw/pull/10262): Fixes RPC connection handling during daemon reload, resolving stuck `zerocode` quickstart scenarios — critical for developer workflow continuity.
- [#10676](https://github.com/zeroclaw-labs/zeroclaw/pull/10676): Addresses cross-platform path comparison in CI tests, ensuring consistent behavior between Unix and Windows environments.

🚀 **Key features advanced:**  
- **OIDC Identity & Access Control (RFC #7141):** Seven stacked PRs (#10248 → #10275) are progressing through stages 2–6, laying the foundation for canonical principals, private session storage, and authenticated RPCs. This is the most significant architectural shift in recent weeks.
- **Enhanced plugin security:** [#10746](https://github.com/zeroclaw-labs/zeroclaw/pull/10746) introduces pre-install verification of Wasm plugins, improving trust and preventing malicious or broken plugin installs.

---

### **4. Community Hot Topics**  
🔥 **Top Issues by Engagement (Comments):**  
1. [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692): *Maintainer decision queue for RFCs and design issues* – 15 comments.  
   ➤ **Need:** Transparent, prioritized tracking of governance decisions to reduce contributor friction and ensure RFCs don’t stall in limbo.

2. [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549): *Simplify RFC voting by removing mandatory discussion windows* – 9 comments.  
   ➤ **Need:** Faster iteration cycles; current 48–72 hour waits are seen as bureaucratic bottlenecks despite minimal added value.

3. [#10753](https://github.com/zeroclaw-labs/zeroclaw/issues/10753): *Stack overflow in `session/new` on Windows* – 3 comments.  
   ➤ **Need:** Immediate fix for a reproducible crash affecting Windows users; already flagged via advisory tooling.

🔥 **Top PRs by Activity:**  
- [#10263](https://github.com/zeroclaw-labs/zeroclaw/pull/10263)–[#10275](https://github.com/zeroclaw-labs/zeroclaw/pull/10275): Stacked OIDC security enhancements — collectively represent the project’s highest-priority initiative.  
- [#10746](https://github.com/zeroclaw-labs/zeroclaw/pull/10746): Plugin egress denial + install-time verification — reflects growing concern over plugin safety and sandbox integrity.

---

### **5. Bugs & Stability**  
🚨 **Critical Bugs (S1-S2 Severity):**  
| Issue | Description | Severity | Status |
|------|-------------|----------|--------|
| [#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734) | Stack overflow (`0xc00000fd`) in `RpcDispatcher::process_line` on Windows | S2 – degraded behavior | In-progress |
| [#10753](https://github.com/zeroclaw-labs/zeroclaw/issues/10753) | `session/new` overflows 2MB stack on Windows | S2 – degraded behavior | In-progress |
| [#10788](https://github.com/zeroclaw-labs/zeroclaw/issues/10788) | Failed Code/ACP turn discards durable history | S2 – degraded behavior | Open |
| [#10785](https://github.com/zeroclaw-labs/zeroclaw/issues/10785) | Notification lag cancels running turns | S2 – degraded behavior | Open |

🛠️ **Fixes in Progress:**  
- [#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734) and [#10753](https://github.com/zeroclaw-labs/zeroclaw/issues/10753) are linked—both stem from insufficient stack guard margin. A fix PR may be imminent given the recent detection via `Advisory Windows nextest`.

⚠️ **High-Risk Regressions:**  
- [#10778](https://github.com/zeroclaw-labs/zeroclaw/issues/10778): Multimodal image cap eviction rewrites earlier history, invalidating cache prefixes — impacts performance and correctness in long sessions.

---

### **6. Feature Requests & Roadmap Signals**  
💡 **Emerging Priorities from User Feedback:**  
- **Proactive context compression** ([#10780](https://github.com/zeroclaw-labs/zeroclaw/issues/10780)): Users want token-budget-driven trimming, not just message-count limits. Likely to be included in v0.9.0.
- **Inert config keys removal/improvement** ([#10781](https://github.com/zeroclaw-labs/zeroclaw/issues/10781)): Clear demand for documentation clarity and functional consistency in `context_compression.*`, `keep_recent`, etc.
- **Add selected text to chat** ([#10553](https://github.com/zeroclaw-labs/zeroclaw/pull/10553)): High-value UX improvement for code agents, currently in review — expected to land soon.
- **Simplified RFC process** ([#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549)): Strong community support to eliminate rigid discussion windows — could become official policy if adopted.

📌 **Predicted Next Release Features:**  
- Full OIDC identity enforcement (via staged PRs)  
- Plugin load-verify and egress controls  
- Proactive context compaction  
- Improved CLI error reporting and diagnostics

---

### **7. User Feedback Summary**  
👥 **User Pain Points:**  
- **Windows instability**: Multiple reports of stack overflow crashes during session initialization, especially when using large inputs (e.g., image-heavy messages).  
- **Session history loss**: Users report losing completed tool exchanges when a turn fails — undermines reliability of automation workflows.  
- **Slow UI responsiveness**: Long-running sessions suffer from lag due to full-history rendering in `zerocode` — impacts real-time interaction.  
- **Confusing config options**: Many users set `context_compression` and `history_pruning` expecting reduced token usage, but nothing happens — leads to frustration and wasted effort.

✅ **Positive Signals:**  
- High engagement in security-focused PRs indicates strong trust in the project’s direction.  
- Positive reception to `add selected text to chat` feature shows appreciation for granular, practical UX upgrades.

---

### **8. Backlog Watch**  
🔍 **Long-Unanswered Critical Items Requiring Maintainer Attention:**  
- [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692): *Maintainer decision queue for RFCs* – 15 comments, accepted, no action in 1.5 months.  
  ➤ **Risk:** Bottleneck in RFC progression; risks contributor burnout and stalled innovation.  
- [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549): *Simplify RFC voting* – 9 comments, accepted, no maintainer response since Aug 2026.  
  ➤ **Risk:** Governance friction may deter new contributors.  
- [#10781](https://github.com/zeroclaw-labs/zeroclaw/issues/10781): *Remove inert config keys* – 1 comment, accepted, no follow-up since Sept 2026.  
  ➤ **Risk:** Confusion and misuse of configuration settings persists.

🔧 **Recommendation:** Establish a bi-weekly RFC triage cadence and prioritize clearing the backlog of accepted, high-impact tracker issues to maintain community momentum.

---  
**Digest compiled:** 2026-09-12 | Source: [GitHub – zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*