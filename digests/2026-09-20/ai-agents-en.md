# OpenClaw Ecosystem Digest 2026-09-20

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-09-20 00:27 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest — 2026-09-20**

---

### **1. Today's Overview**  
The OpenClaw project remains highly active, with 500 new issues and 500 updated pull requests in the last 24 hours—indicating robust community engagement and ongoing development momentum. A critical release, **v2026.9.5**, was published today, targeting stability improvements and addressing several high-severity bugs reported in prior versions. Despite this progress, a surge in urgent issues—particularly around update reliability, memory leaks, and session state corruption—suggests growing instability in the latest stable channel. The ecosystem is clearly in a phase of rapid iteration, but user-facing reliability concerns are emerging as key blockers.

---

### **2. Releases**  
**✅ v2026.9.5 – Linux Stable Channel (Published: 2026-09-20)**  
- **Release Notes**: [https://docs.openclaw.ai/rele](https://docs.openclaw.ai/rele)  
- **Download Links**:  
  - [AppImage](https://github.com/openclaw/openclaw/releases/download/v2026.9.5/OpenClaw-2026.9.5-amd64.AppImage)  
  - [Debian Package](https://github.com/openclaw/openclaw/releases/download/v2026.9.5/OpenClaw-2026.9.5-amd64.deb)  

**Key Changes**:  
- Stability fixes for Codex plugin lifecycle and Gateway startup sequence.  
- Improved error handling during `openclaw update` operations.  
- Resolved persistent memory leak in `memory_index_chunks` and `memory_embedding_cache` tables (reported in #114612).  
- Enhanced session state migration logic to prevent catalog stalls post-upgrade (addressing #152744).

> ⚠️ **Migration Note**: Users upgrading from `2026.9.4` report silent failures in `openclaw update`, particularly on macOS and Linux (see #152759, #153230). Manual rollback or CLI diagnostics may be required.

---

### **3. Project Progress**  
Today saw **212 PRs merged or closed**, reflecting strong maintenance velocity. Key advancements include:

- ✅ **UI/UX Improvements**:  
  - Navigation in message galleries now supports left/right arrow keys (#153198).  
  - Paste support added to command-palette sessions (#153238).  
  - Cloud provider icons now visible in session pickers (#153288).  
  - Chrome extension status preserved across app upgrades (#153266, #153289).

- ✅ **Stability & Tooling Fixes**:  
  - Fixed `doctor --fix` failure on systemd `--user` units (Windows-only fix merged in #145070).  
  - Prevented Chromium crashes after copying messages (#153281).  
  - Streamlined package updates by removing implicit deadlines (#153236).

- ✅ **Security & Configuration**:  
  - Added per-agent SSRF policy overrides via `web_fetch.ssrfPolicy` (#67421).  
  - Improved config patching for mixed-owned catalogs (#150348).

---

### **4. Community Hot Topics**  
Top 5 most commented issues reflect systemic pain points:

| Issue | Comments | Severity | Link |
|------|---------|----------|------|
| [#149361](https://github.com/openclaw/openclaw/issues/149361) | 50 | 🦞 Diamond Lobster (Critical UX) | Umbrella: WebUI performance and stability |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 30 | 🦪 Silver Shellfish (Crash-loop) | Zombie process leak in hook/tool execution |
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | 30 | 🦞 Diamond Lobster (Crash) | MCP server init timeout causes unhandled rejection |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 27 | 🦪 Silver Shellfish (OOM) | Memory leak from 350MB → 15.5GB over days |
| [#152744](https://github.com/openclaw/openclaw/issues/152744) | 19 | 🦪 Silver Shellfish (UX Release Blocker) | Codex retained-state migration never settles |

> 🔍 **Analysis**: The top issues reveal a cluster of **critical stability and resource management problems**—especially around session state, memory, and update processes. These are not isolated; they suggest deeper architectural challenges in state persistence, process lifecycle, and upgrade safety.

---

### **5. Bugs & Stability**  
High-severity bugs reported today:

| Bug ID | Severity | Impact | Status | Fix PR? |
|--------|----------|--------|--------|--------|
| [#152759](https://github.com/openclaw/openclaw/issues/152759) | P0 | UX Release Blocker | Open | ❌ |
| [#152961](https://github.com/openclaw/openclaw/issues/152961) | P0 | Crash-loop / CPU spike | Open | ❌ |
| [#153257](https://github.com/openclaw/openclaw/issues/153257) | P0 | 8-hour recovery session post-update | Open | ❌ |
| [#152968](https://github.com/openclaw/openclaw/issues/152968) | P0 | Codex OAuth profile missing post-upgrade | Open | ❌ |
| [#152744](https://github.com/openclaw/openclaw/issues/152744) | P0 | Session list stuck empty after migration | Closed | ✅ (but unresolved in practice) |

> ⚠️ **Critical Pattern**: Multiple users report that **upgrades from 2026.9.4 to 2026.9.5 fail silently**, requiring manual rollback. This indicates a **breakage in the upgrade path itself**, not just individual components.

---

### **6. Feature Requests & Roadmap Signals**  
Emerging user-driven priorities:

- **Enhanced Upgrade Experience** (#107930): Users demand better Node.js version compatibility warnings and automated runtime setup during updates.
- **Human-Readable Telegram Topic Names** (#7406): High comment count suggests need for clearer UI metadata in complex channels.
- **Plugin-Level LLM Interception Hooks** (#115988): Request for `llm_intercept_input/output` hooks to enable content filtering and redaction.
- **Improved Image Attachment Handling** (#153238, #153198): Repeated demand for richer media interaction in chat.

> 📌 **Prediction**: The next release (likely **v2026.9.6**) will prioritize **upgrade reliability**, **session state consistency**, and **media UX enhancements**, based on real-world feedback volume.

---

### **7. User Feedback Summary**  
Real user pain points surface consistently across reports:

- **"I upgraded and my environment became unusable for 8 hours."** – #153257  
- **"After update, all sessions are gone. No threads loaded. Nothing works."** – #152744  
- **"My Gateway crashes daily due to OOM killer. RSS went from 350MB to 15GB."** – #91588  
- **"Updating fails with no error message. I’m still on 2026.9.4."** – #152759  

> 💬 **Sentiment**: Frustration is rising. While contributors are actively fixing bugs, **users feel abandoned by the upgrade process**. Trust in "stable" releases is eroding.

---

### **8. Backlog Watch**  
Issues needing immediate maintainer attention:

| Issue | Priority | Status | Why It Matters |
|------|----------|--------|----------------|
| [#149361](https://github.com/openclaw/openclaw/issues/149361) | P2 | Open | Umbrella issue covering WebUI performance—blocking multiple UX flows |
| [#114612](https://github.com/openclaw/openclaw/issues/114612) | P1 | Open | Unbounded SQLite growth threatens disk space and data integrity |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | P1 | Open | Main thread livelock under sustained writes — critical for long-running sessions |
| [#153230](https://github.com/openclaw/openclaw/issues/153230) | P0 | Open | Update failure due to runtime verification — prevents upgrades |
| [#118885](https://github.com/openclaw/openclaw/issues/118885) | P1 | Open | Redundant full DB integrity checks at startup — performance drain |

> 🔎 **Maintenance Call**: These issues represent **core system health risks**. Prioritizing them will directly improve reliability, reduce user churn, and restore confidence in the stable channel.

---  
*Digest generated: 2026-09-20 | Source: GitHub openclaw/openclaw | Data snapshot: Last 24h activity*

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Ecosystem – 2026-09-20**

---

### **1. Ecosystem Overview**  
The open-source personal AI assistant and agent ecosystem is entering a phase of intense specialization and maturity, with projects converging on core capabilities while diverging in architectural philosophy and target use cases. OpenClaw leads in scale and velocity, driving rapid iteration around stability and upgrade reliability, while Hermes Agent and QwenPaw focus on robustness and composability for developer-centric workflows. IronClaw and ZeroClaw represent more niche but strategically significant directions—identity autonomy and security-hardened multi-channel agents—reflecting growing demand for trustable, production-grade AI systems. Overall, the landscape shows strong momentum toward enterprise readiness, with increasing emphasis on session integrity, cross-platform continuity, and policy-driven governance.

---

### **2. Activity Comparison**

| Project       | Issues (Last 24h) | PRs Updated (Last 24h) | Release Status       | Health Score (Est.) |
|---------------|-------------------|--------------------------|-----------------------|---------------------|
| **OpenClaw**  | 500               | 500                      | ✅ v2026.9.5 (Published) | ⚠️ High Risk / Active |
| **Hermes Agent** | 50              | 50                       | ❌ No new release      | ✅ Stable / Focused   |
| **IronClaw**  | 1                 | 1                        | ❌ No new release      | ✅ Stable / Low Momentum |
| **QwenPaw**   | 10                | 7                        | ❌ No new release      | ⚠️ High Velocity / Fragile |
| **ZeroClaw**  | 32                | 50                       | ❌ No new release      | ⚠️ High Risk / Strategic |

> *Health Score Interpretation*:  
> - ✅ Stable: Minimal instability, consistent operations  
> - ⚠️ High Risk: High-severity bugs, user trust erosion, upgrade failures  
> - 🔮 High Potential: Emerging innovation despite low activity

---

### **3. OpenClaw's Position**  
OpenClaw stands as the most active and largest-scale project in the ecosystem, with **500+ issues and PRs daily**, reflecting massive community engagement and aggressive development cycles. Its technical approach emphasizes **full-stack stability**, **session state persistence**, and **upgrade safety**—features critical for consumer-facing applications. Compared to peers, OpenClaw exhibits significantly larger contributor volume and faster release cadence, though this comes at the cost of rising user-reported instability (e.g., silent update failures, memory leaks). Unlike Hermes Agent’s focused refinement or ZeroClaw’s security-first design, OpenClaw prioritizes **user experience polish at scale**, making it the de facto platform for general-purpose AI assistants—but also the most vulnerable to systemic breakage due to its complexity and rapid change rate.

---

### **4. Shared Technical Focus Areas**  

| Need                                | Projects Involved                  | Specific Requirements                                                                 |
|-------------------------------------|------------------------------------|----------------------------------------------------------------------------------------|
| **Session State & Persistence**     | OpenClaw, Hermes Agent, QwenPaw    | Recovery from crashes, stable migration across versions, long-term history retention |
| **Upgrade Reliability**             | OpenClaw, Hermes Agent             | Silent failure prevention, rollback support, runtime compatibility warnings            |
| **Cross-Platform Continuity**       | Hermes Agent, ZeroClaw             | Persistent group chats, desktop-inactive operation, multi-device sync                   |
| **Security Policy Enforcement**     | ZeroClaw, QwenPaw, OpenClaw        | Shell/Git command sandboxing, plugin-level approval hooks, OAuth/identity delegation   |
| **Error Resilience & UX Recovery**  | QwenPaw, OpenClaw, ZeroClaw        | DOM error recovery, fallback logic for audio/files, UI freeze mitigation               |

> 📌 **Pattern**: Across all projects, **state management under failure** and **secure, predictable execution** are now top-tier concerns—not edge cases.

---

### **5. Differentiation Analysis**

| Project       | Feature Focus                          | Target User Profile                     | Technical Architecture                     |
|---------------|----------------------------------------|-----------------------------------------|--------------------------------------------|
| **OpenClaw**  | Consumer-grade UX, stability, broad tooling | General users, power users, teams     | Monorepo, rich plugin ecosystem, GUI-first |
| **Hermes Agent** | Collaborative workflows, project context | Developers, research teams, remote squads | Modular tools, config-driven agents         |
| **IronClaw**  | Identity autonomy, headless agent access | Compliance officers, auditors, devops | Host-mediated identity (idcp), minimal footprint |
| **QwenPaw**   | Extensibility, plugin governance, SDKs | Enterprise developers, AI app builders | PawApp control plane, policy hooks, Docker-ready |
| **ZeroClaw**  | Multi-channel fidelity, security hardening | Mission-critical ops, regulated environments | RFC-driven policies, shell isolation, provenance tracking |

> 🔍 **Key Insight**: While OpenClaw aims for *broad adoption*, others like ZeroClaw and IronClaw are building **niche, high-trust platforms** for sensitive or regulated workloads—indicating a bifurcation in the ecosystem.

---

### **6. Community Momentum & Maturity**  

- **Rapid Iterators (High Velocity)**:  
  - **OpenClaw** (500 issues/PRs/day): Fast-moving, high-risk, high-reward cycle. Prone to regression but drives innovation.  
  - **QwenPaw** (7–10 PRs/day): Focused on reliability fixes; strong feature pipeline but bottlenecked by merge delays.  
  - **ZeroClaw** (50 PRs/day): Aggressive security and channel expansion; fast-paced but with unresolved S0 risks.

- **Stabilizing / Mature Phases**:  
  - **Hermes Agent**: Steady, quality-focused bug fixes; no new releases but clear roadmap alignment. Mature enough for team adoption.  
  - **IronClaw**: Very low activity but strategic PRs indicate deep design thinking. Positioned for future growth, not immediate scale.

> 📈 **Maturity Signal**: The shift from “feature explosion” to “stability consolidation” is evident in Hermes Agent and ZeroClaw’s focus on security and observability—signaling maturation beyond early-stage experimentation.

---

### **7. Trend Signals**  

Based on community feedback and PR activity, the following industry trends are emerging:

1. **Agent Autonomy Requires Identity & Trust Infrastructure**  
   → IronClaw’s `builtin.idcp` and ZeroClaw’s policy gates show that **headless, persistent agents need secure identity delegation**—no longer optional.

2. **Enterprise Readiness Demands Observability & Provenance**  
   → ZeroClaw’s requests for delivery receipts, message provenance, and sub-agent visibility reflect a shift toward **auditability and compliance**—critical for B2B deployment.

3. **Upgrade Experience Is Now a Core UX Metric**  
   → OpenClaw’s user frustration over silent update failures and session loss underscores that **upgrade reliability is a competitive differentiator**, not just a technical detail.

4. **Plugin Governance Is Evolving Beyond Blacklists**  
   → QwenPaw’s `escalation-only tool policy hooks` and ZeroClaw’s RFC-based permission models signal a move toward **programmable, configurable governance**—a must for scalable agent ecosystems.

5. **Frontend Resilience = Productivity**  
   → Recurring UI freezes in QwenPaw and OpenClaw highlight that **frontend stability is now a performance and usability bottleneck**, not just a cosmetic issue.

> 💡 **Value for Developers**: Projects that prioritize **reliable state, upgrade safety, and observable workflows** will be best positioned for real-world adoption. The era of “just works” AI assistants is ending—**trust, traceability, and resilience are now non-negotiable**.

---  
*Generated: 2026-09-20 | Data Source: GitHub — openclaw/openclaw, nousresearch/hermes-agent, nearai/ironclaw, agentscope-ai/QwenPaw, zeroclaw-labs/zeroclaw*

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-09-20**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active, with 50 new issues and 50 pull requests updated in the past 24 hours—indicating strong community engagement and ongoing development momentum. No new releases were issued, suggesting a focus on stability and incremental improvements ahead of a potential upcoming milestone. The workload is heavily skewed toward bug fixes (P0–P2) and session/message delivery reliability, particularly around desktop persistence, agent state management, and cross-platform compatibility (Windows/WSL, macOS). High-comment issues point to persistent pain points in multi-device workflows and real-time collaboration.

---

### **2. Releases**  
❌ **No new releases**  
There are no recent or planned releases as of 2026-09-20. The last version remains stable, with the latest update (v0.21.3) having been applied without incident—though post-update cleanup issues (e.g., #116497) indicate lingering edge-case bugs in the upgrade pipeline.

---

### **3. Project Progress**  
✅ **Merged & Closed PRs (Today):**  
- **#116488** – Fixed `tools.tool_search.defer` missing from `DEFAULT_CONFIG`, resolving drift-mode inconsistency and improving config safety ([PR #116488](https://github.com/nousresearch/hermes-agent/pull/116488))  
- **#112679** – Sanitized real-time installer logs on macOS by stripping terminal control sequences ([PR #112679](https://github.com/nousresearch/hermes-agent/pull/112679))  
- **#116496** – Added Windows-specific fallback to prevent process hang after window close ([PR #116496](https://github.com/nousresearch/hermes-agent/pull/116496))  
- **#116499** – Improved Kanban review-lane validation and crash output anchoring for robustness ([PR #116499](https://github.com/nousresearch/hermes-agent/pull/116499))  

These fixes reflect a concerted effort to stabilize core infrastructure: installer behavior, platform-specific quirks, and internal state consistency.

---

### **4. Community Hot Topics**  
🔥 **Top 3 Most Active Issues (by comments):**  
1. **#97681** – *Bot Group Chats should keep working after Desktop closes* (28 comments)  
   → **Need:** Persistent group chat sessions across devices without requiring Desktop to remain open. Critical for collaborative workflows. [Issue #97681](https://github.com/nousresearch/hermes-agent/issues/97681)  
   
2. **#107307** – *Codex provider errors interrupt Hermes work* (19 comments)  
   → **Need:** Stability under rate-limiting and transient failures. Users report cascading failures after Light conservation windows. [Issue #107307](https://github.com/nousresearch/hermes-agent/issues/107307)  
   
3. **#53004** – *Projects paradigm broke folder → session flow* (16 comments)  
   → **Need:** Revert or fix broken UX introduced by "first-class projects" merge. Users can't start sessions in chosen folders anymore. [Issue #53004](https://github.com/nousresearch/hermes-agent/issues/53004)  

💡 **Underlying Themes:**  
- **Multi-device continuity** (desktop persistence)  
- **Reliability under load/failure** (rate limits, timeouts)  
- **UX integrity after refactors** (especially project system)

---

### **5. Bugs & Stability**  
🚨 **Critical Bugs (P0–P2):**  
- **#114456** – Async delegation completion stalls behind busy sessions; prompt cache invalidated mid-history ([Issue #114456](https://github.com/nousresearch/hermes-agent/issues/114456))  
  → *Impact:* Delays up to 24 minutes in critical task completion.  
  → ✅ **Fix PR:** None yet — still open.  

- **#116497** – Post-update cleanup traceback due to unexpected `scope_home` arg ([Issue #116497](https://github.com/nousresearch/hermes-agent/issues/116497))  
  → *Impact:* Noisy error during updates despite successful install.  
  → ✅ **Fix PR:** None yet — urgent for clean release experience.  

- **#116416** – Gateway status false-negative when running inside dashboard ([Issue #116416](https://github.com/nousresearch/hermes-agent/issues/116416))  
  → *Impact:* Misleading UI state; users think gateway is down when it’s not.  

- **#116443** – Ctrl+D doesn’t exit TUI on macOS; Cmd+D conflicts with Ghostty ([Issue #116443](https://github.com/nousresearch/hermes-agent/issues/116443))  
  → *Impact:* User frustration with escape key behavior.  

⚠️ **Stability Signals:**  
- Multiple issues related to **session state**, **message deduplication**, and **caching invalidation** suggest deep-rooted challenges in maintaining consistent agent state across platforms and restarts.

---

### **6. Feature Requests & Roadmap Signals**  
📌 **High-Interest Feature Requests:**  
- **#33638** – *Project-scoped memory*: Filter MEMORY.md by current project context ([Issue #33638](https://github.com/nousresearch/hermes-agent/issues/33638))  
  → **Signal:** Strong demand for contextual memory isolation—likely a candidate for v0.22.  

- **#50715** – *User-defined supplemental model list for /model picker* ([Issue #50715](https://github.com/nousresearch/hermes-agent/issues/50715))  
  → **Signal:** Users want flexibility beyond curated model catalogs. Likely to be prioritized soon.  

- **#116505** – *Make Fleet Kanban usable and scoped* ([PR #116505](https://github.com/nousresearch/hermes-agent/pull/116505))  
  → **Signal:** Fleet workflow is becoming a central UX layer—expect deeper integration in next release.  

🔍 **Predicted Next Release (v0.22):**  
- Project-scoped memory  
- Enhanced model picker (user-defined sources)  
- Improved fleet visibility and usability  
- Persistent group chat support (if #97681 gains traction)

---

### **7. User Feedback Summary**  
💬 **Real Pain Points Reported:**  
- **Desktop app crashes** on macOS when printing Google Docs ([#101880](https://github.com/nousresearch/hermes-agent/issues/101880)) – Native segfault in Apple PrintCore stack.  
- **Invisible tool feedback**: Clarify tool shows only spinner, answers come back empty ([#116483](https://github.com/nousresearch/hermes-agent/issues/116483)).  
- **Ambiguous error messages**: Bot failures render identically as “hit an error” regardless of cause (timeout vs. crash) ([#116458](https://github.com/nousresearch/hermes-agent/issues/116458)).  
- **Frustration with keyboard shortcuts**: Ctrl+D not working on macOS ([#116443](https://github.com/nousresearch/hermes-agent/issues/116443)).  

🛠️ **Satisfaction Signals:**  
- Users appreciate the ability to install skills via GitHub URLs ([#116500](https://github.com/nousresearch/hermes-agent/pull/116500)), indicating strong approval for developer-centric tooling.

---

### **8. Backlog Watch**  
⏳ **Long-Pending Critical Issues Needing Attention:**  
- **#97681** – Bot group chats lose continuity after Desktop closes *(28 comments, created Aug 29)*  
  → *Why it matters:* Core use case for team-based AI agents. Blocking true remote collaboration.  
  → 🔗 [Issue #97681](https://github.com/nousresearch/hermes-agent/issues/97681)  

- **#53004** – Projects paradigm broke folder → session flow *(16 comments, created Jun 26)*  
  → *Why it matters:* A regression that broke a fundamental UX pattern. Now over 3 months unresolved.  
  → 🔗 [Issue #53004](https://github.com/nousresearch/hermes-agent/issues/53004)  

- **#116497** – Post-update cleanup traceback *(1 comment, opened Sep 20)*  
  → *Why it matters:* Despite being newly reported, it affects all users doing updates—high-impact noise.  
  → 🔗 [Issue #116497](https://github.com/nousresearch/hermes-agent/issues/116497)  

🔧 **Actionable Note:** These three issues represent critical friction points that could deter enterprise or power-user adoption if left unaddressed.

---

**Summary:**  
Hermes Agent is in a phase of high velocity—strong community activity, focused bug fixes, and emerging feature momentum—but also faces significant technical debt in session state, cross-device continuity, and UX resilience. With no new releases, stability and user experience are top priorities. The roadmap is clear: **persistent group chats**, **project-scoped memory**, and **enhanced fleet/tooling UX** are likely to define the next major version. Maintainers must prioritize long-standing regressions (#53004, #97681) to maintain trust.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026-09-20**

---

### **1. Today's Overview**  
The IronClaw project remains in a low-activity phase as of 2026-09-20, with no new issues or releases reported in the past 24 hours. One pull request is open and actively being developed, indicating modest forward momentum in feature development. The absence of merged PRs or closed issues suggests a pause in integration cycles, possibly due to ongoing design refinement or contributor availability. Overall, project health appears stable but not accelerating.

---

### **2. Releases**  
*No new releases were published in the last 24 hours.*  
There are no release notes or changelogs available for this period. The most recent release remains unchanged from prior versions.

---

### **3. Project Progress**  
- **One active pull request**: [#7499](https://github.com/nearai/ironclaw/pull/7499)  
  - **Title**: `feat(identyclaw): host-mediated Passport for practitioners`  
  - **Status**: Open (last updated: 2026-09-19)  
  - **Scope**: Documentation, dependencies, new feature  
  - **Contributor**: discernible-io (first-time contributor)  
  - **Summary**: Introduces a lightweight host seam (`builtin.idcp`) enabling processless IronClaw agents to interact with IdentyClaw Passport without requiring a shell or installable browser extension. Includes a practitioner-focused host kit under `deploy/identyclaw/`, featuring a Node CLI and optional loopback helper on port `:3921`.  
  - **Impact**: This PR represents a significant step toward frictionless identity integration for headless AI agents, aligning with IronClaw’s vision of agent autonomy and privacy-preserving authentication.

---

### **4. Community Hot Topics**  
- **Primary Focus**: [#7499](https://github.com/nearai/ironclaw/pull/7499)  
  - **Engagement**: No comments or reactions recorded yet (👍: 0), suggesting early-stage visibility.  
  - **Analysis**: Despite low engagement, the proposal addresses a critical gap in agent usability—enabling secure, identity-aware operations without user-facing tooling. The focus on "practitioners" signals a shift toward real-world deployment scenarios beyond lab environments.  
  - **Underlying Need**: Users want seamless, secure identity delegation for autonomous agents—especially in regulated or high-stakes workflows—without compromising privacy or requiring complex setup.

---

### **5. Bugs & Stability**  
*No bugs, crashes, or regressions were reported in the last 24 hours.*  
The project maintains a clean stability profile. No fix-related PRs were opened or merged today.

---

### **6. Feature Requests & Roadmap Signals**  
- **Emerging Signal**: Host-mediated identity access via `builtin.idcp` (PR #7499) indicates growing demand for **agent-native identity protocols**.  
- **Predicted Inclusion in Next Release**:  
  - Hosted Passport integration (non-shell, non-extension)  
  - `deploy/identyclaw/` toolkit (Node CLI + loopback server)  
  - Policy-based grant/AskAlways exemption model  
- **Roadmap Alignment**: This feature directly supports IronClaw’s long-term goal of enabling fully autonomous, policy-compliant agents operating across decentralized identities.

---

### **7. User Feedback Summary**  
While no public user feedback was recorded in the past 24 hours, the nature of PR #7499 reveals key user pain points:  
- **Pain Point 1**: Lack of identity access for headless agents (no shell, no browser).  
- **Pain Point 2**: Over-reliance on user-installed extensions or manual configuration.  
- **Use Case**: Practitioners deploying IronClaw agents in production environments (e.g., compliance monitoring, data auditing) require trusted, automated identity resolution.  
- **Satisfaction Indicator**: Early adoption of a new contributor suggests community interest in solving identity friction—though broader validation awaits implementation.

---

### **8. Backlog Watch**  
- **Long-standing Issue**: None identified in the current dataset.  
- **Note**: With only one open PR and no active issues, the backlog appears sparse. However, PR #7499 may represent a strategic bottleneck—if delayed, it could hinder progress on agent autonomy and identity integration.  
- **Recommendation**: Maintainers should review and provide feedback on #7499 to prevent stagnation and encourage further contributions.

---  
**Project Health Score**: ✅ Stable | ⚠️ Low Momentum | 🔮 High Potential  
*Data source: GitHub — nearai/ironclaw (2026-09-20)*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-09-20**

---

### **1. Today's Overview**  
QwenPaw exhibits strong developer engagement with 10 open issues and 7 active pull requests updated within the last 24 hours, indicating a vibrant development cycle. No new releases were published, suggesting the team is prioritizing stability fixes and feature refinement ahead of a potential v2.3 milestone. The majority of activity centers on frontend resilience (React/DOM errors), agent-level fallback handling for audio/files, and plugin/governance extensibility—reflecting a focus on robustness and composability. Despite high issue volume, no PRs have been merged or closed today, signaling that work is in progress but not yet finalized.

---

### **2. Releases**  
*No new releases were published as of 2026-09-20.*  
The latest stable version remains **v2.2.1**, self-built via Docker or PyPI (`agentscope 2.0.7.post1`). Users are advised to monitor the release pipeline for upcoming patches addressing critical bugs related to audio, file handling, and UI recovery.

---

### **3. Project Progress**  
Seven pull requests were opened in the past 24 hours, all focused on **critical bug fixes** and **core system enhancements**:
- **PR #7889** ([fix(console): recover from transient DOM-mutation render errors](https://github.com/agentscope-ai/QwenPaw/pull/7889)) — Addresses persistent UI failure after React rendering errors.
- **PR #7886 & #7887** ([fix(agents): handle unknown input_audio rejections](https://github.com/agentscope-ai/QwenPaw/pull/7886), [handle unknown audio part rejections](https://github.com/agentscope-ai/QwenPaw/pull/7887)) — Enables fallback retry logic when models reject audio payloads due to unrecognized variants.
- **PR #7885** ([fix(agents): retry after unsupported file payload errors](https://github.com/agentscope-ai/QwenPaw/pull/7885)) — Resolves DeepSeek-specific 400 errors caused by malformed file parts.
- **PR #7874** ([feat(pawapp): redesign SDK and app control plane](https://github.com/agentscope-ai/QwenPaw/pull/7874)) — Introduces durable task ownership, idempotent dispatch, and configuration awareness for PawApps.
- **PR #7875** ([docs(pawapp): specify Creator create-video control plane](https://github.com/agentscope-ai/QwenPaw/pull/7875)) — Documents the `create-video` workflow for public consumption and maintainability.
- **PR #7880** ([feat(plugins): add escalation-only tool policy hooks](https://github.com/agentscope-ai/QwenPaw/pull/7880)) — Adds extensible governance hooks for plugins without host modification.

> 🔧 These PRs collectively advance **agent reliability**, **plugin security**, and **system scalability**, laying groundwork for v2.3.

---

### **4. Community Hot Topics**  
Top community-driven discussions reflect urgent usability and integration pain points:

| Issue | Link | Comments | Severity | Trend |
|------|------|----------|----------|-------|
| [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) | Console fails to recover from lazy page load error | 5 | ⚠️ High | Persistent UI freeze requiring full reload |
| [#7888](https://github.com/agentscope-ai/QwenPaw/issues/7888) | Chat page stuck on "Something went wrong" (React DOM injection error) | 2 | ⚠️ High | Reproducible across browsers, affects core UX |
| [#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) | PDF serialization breaks DeepSeek compatibility | 1 | ⚠️ High | Regression despite prior fix (#7597) |
| [#7882](https://github.com/agentscope-ai/QwenPaw/issues/7882) | OpenCode free model API returns 403 despite UI marking as free | 1 | ⚠️ Medium | Misleading UI + broken functionality |
| [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) | Chat history too short — users lose context | 1 | 💡 Medium | Frequent user frustration around retention |

🔍 **Underlying Needs**: Users demand **persistent state management**, **accurate UI feedback**, and **predictable behavior** across agents and providers. The recurrence of “stuck” UI states suggests deeper architectural challenges in error boundary handling and navigation resilience.

---

### **5. Bugs & Stability**  
Critical bugs reported today threaten usability and session integrity:

| Bug | Issue # | Affected Component | Severity | Fix PR? |
|-----|--------|--------------------|----------|---------|
| Console fails to recover from failed lazy chunk load | [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) | Console (frontend) | 🔴 Critical | ✅ Yes — PR #7889 addresses root cause |
| Chat page stuck on "Something went wrong" | [#7888](https://github.com/agentscope-ai/QwenPaw/issues/7888) | Console (frontend) | 🔴 Critical | ✅ Yes — PR #7889 targets same class of DOM mutation error |
| DeepSeek rejects OpenAI-style file parts (400 error) | [#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) | Agents / Providers | 🔴 Critical | ✅ Yes — PR #7885 implements retry logic |
| Audio fallback classifier never fires (422 unknown variant) | [#7876](https://github.com/agentscope-ai/QwenPaw/issues/7876) | Agents / Audio Pipeline | 🔴 Critical | ✅ Yes — PRs #7886 & #7887 fix detection logic |
| kimi-code ACP bypasses safety checks (edit blocked, write/unrestricted) | [#7881](https://github.com/agentscope-ai/QwenPaw/issues/7881) | Governance / Tool Adapter | 🔴 High | ❌ Not yet addressed — requires design review |

📌 **Stability Note**: While several high-severity bugs have corresponding fix PRs, the lack of merge activity indicates **review bottlenecks** or **integration testing delays**. Immediate attention needed on PR #7881 (security risk).

---

### **6. Feature Requests & Roadmap Signals**  
Emerging feature signals point toward enhanced **extensibility**, **long-term memory**, and **enterprise-grade governance**:

- **[#7878](https://github.com/agentscope-ai/QwenPaw/issues/7878)**: *Expose pre-tool-call policy hook for plugins* → Indicates growing need for **plugin-level decision-making** (e.g., compliance, cost control). Likely candidate for v2.3.
- **[#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884)**: *Chat history too short* → Strong user demand for **longer session retention**. Could drive future storage layer improvements (e.g., vector DB persistence).
- **[#7879](https://github.com/agentscope-ai/QwenPaw/issues/7879)**: *MCP OAuth fails for static Bearer keys (e.g., QCC)* → Highlights **interoperability gap** with enterprise APIs. May prompt official support for non-OAuth MCP types.
- **PR #7874 & #7875**: Redesign of PawApp control plane → Signals shift toward **production-ready AI applications** with durable workflows, approvals, and artifacts.

📈 **Roadmap Prediction**: Next major release (likely **v2.3**) will include:  
- Plugin policy hooks  
- Extended chat history  
- Enhanced PawApp lifecycle management  
- Better error recovery and fallback mechanisms

---

### **7. User Feedback Summary**  
Real-world user pain points reveal key friction areas:
- **Frustration with lost context**: Users report being unable to revisit past conversations, undermining trust in the assistant’s memory (Issue #7884).
- **Confusion between UI and reality**: Free-tier models marked as available fail silently (Issue #7882), leading to distrust.
- **Unrecoverable crashes**: Multiple reports of UI freezing after minor errors (Issues #7815, #7888), forcing full reloads — poor UX for daily use.
- **Lack of transparency**: Tools like `kimi-code` behave inconsistently (Issue #7881), raising concerns about safety and predictability.

💬 **Sentiment**: Mixed. Users appreciate advanced capabilities (MCP, plugins) but express dissatisfaction with **reliability**, **consistency**, and **state persistence**. The project is seen as powerful but fragile in production use.

---

### **8. Backlog Watch**  
High-priority, long-standing or under-addressed issues requiring maintainer attention:

| Issue | Link | Status | Why It Matters |
|------|------|--------|----------------|
| [#7879](https://github.com/agentscope-ai/QwenPaw/issues/7879) | MCP OAuth fails for static Bearer Key servers (e.g., QCC) | Open since 2026-09-19 | Blocks enterprise integrations; common in B2B scenarios |
| [#7881](https://github.com/agentscope-ai/QwenPaw/issues/7881) | kimi-code ACP bypasses safety checks unevenly | Open since 2026-09-19 | Security vulnerability — could allow destructive actions |
| [#7877](https://github.com/agentscope-ai/QwenPaw/issues/7877) | Session-level work directory panel broken (UI, empty "Recent Projects") | Open since 2026-09-19 | Hinders developer workflow; impacts productivity |
| [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) | Chat history too short | Open since 2026-09-19 | Core UX flaw affecting most users; needs immediate attention |

⚠️ **Urgent Call to Action**: Maintainers should prioritize triaging and reviewing PRs #7880, #7874, #7875, and #7881. These address both **user experience** and **system integrity** at scale.

---

✅ **Final Assessment**: QwenPaw is in a **high-growth, high-activity phase** with strong momentum in core reliability and extensibility. However, **stability and UX consistency** remain significant hurdles. With timely merges of existing PRs and focused backlog triage, the project is well-positioned for a major v2.3 release targeting enterprise readiness and long-term memory.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest**  
**Date:** 2026-09-20  
**Repository:** [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

### **1. Today's Overview**

ZeroClaw remains highly active with a strong momentum in both feature development and security hardening. In the last 24 hours, 32 issues and 50 pull requests were updated — indicating robust community engagement and ongoing architectural refinement. The project is focused on stabilizing core runtime behavior, enhancing agent delegation visibility, and expanding multi-channel support (especially WhatsApp Web and Telegram). High-severity security concerns are being prioritized, particularly around shell command policy enforcement and message provenance. Despite no new releases, significant progress is being made toward v0.8.6 and v0.9.0 milestones.

---

### **2. Releases**

**None**  
No new releases have been published in the past 24 hours or in recent weeks. The project continues to develop incrementally under active feature integration, with the next release expected to bundle key runtime improvements, security fixes, and channel enhancements.

---

### **3. Project Progress**

#### ✅ **Merged/Closed PRs (Today)**  
While no PRs were merged today, several high-impact PRs were closed with final review:

- **PR #9724** – Fixed `always_ask` approval gate persistence even under full autonomy, ensuring consistent security policies across agent states.  
  🔗 [GitHub PR #9724](https://github.com/zeroclaw-labs/zeroclaw/pull/9724)  
- **PR #9428** – Enforced sender authorization for Bluesky and Reddit channels to prevent unauthorized inbound messages.  
  🔗 [GitHub PR #9428](https://github.com/zeroclaw-labs/zeroclaw/pull/9428)  
- **PR #8561** – Added multi-message streaming mode to Telegram, enabling paced delivery via `multi_message_delay_ms`.  
  🔗 [GitHub PR #8561](https://github.com/zeroclaw-labs/zeroclaw/pull/8561)

These closures reflect progress in stability, security, and UX consistency across platforms.

---

### **4. Community Hot Topics**

The most active discussions center on **agent observability**, **channel-native functionality**, and **security policy enforcement**:

- **Issue #10531** – *Expose delegate sub-agent progress to parent* (4 comments, P2 priority)  
  🔗 [GitHub Issue #10531](https://github.com/zeroclaw-labs/zeroclaw/issues/10531)  
  **Need**: Users demand real-time insight into delegated tasks (e.g., intermediate outputs, partial results), critical for debugging complex workflows.

- **Issue #10977** & **#10983** – *WhatsApp Web group creation and native polls* (2–3 comments each)  
  🔗 [GitHub Issue #10977](https://github.com/zeroclaw-labs/zeroclaw/issues/10977)  
  🔗 [GitHub Issue #10983](https://github.com/zeroclaw-labs/zeroclaw/issues/10983)  
  **Need**: Native WhatsApp features are missing despite existing tooling; users expect full platform parity.

- **PR #10610** – *Implement unified shell permission policy (RFC #7155)* (5 commits, XL size)  
  🔗 [GitHub PR #10610](https://github.com/zeroclaw-labs/zeroclaw/pull/10610)  
  **Need**: A foundational security upgrade to prevent privilege escalation via git options and shell commands.

These topics highlight growing user demand for **transparency**, **native channel integration**, and **robust sandboxing**.

---

### **5. Bugs & Stability**

| Severity | Issue | Description | Fix PR? |
|---------|------|-------------|--------|
| **S0 (Critical)** | [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) | Unattended agents run without `ApprovalManager`, making risk profiling inert | ❌ No fix yet |
| **S0 (Critical)** | [#9627](https://github.com/zeroclaw-labs/zeroclaw/issues/9627) | Git write verbs bypass risk classifier via `-C`/`--git-dir` | ❌ No fix yet |
| **S0 (Critical)** | [#10966](https://github.com/zeroclaw-labs/zeroclaw/issues/10966) | `--attr-source` hides mutating git commands from approval classification | ❌ No fix yet |
| **S2 (Degraded)** | [#10972](https://github.com/zeroclaw-labs/zeroclaw/issues/10972) | WhatsApp inbound images delivered as literal `[Image]` text | ❌ No fix yet |
| **S2 (Degraded)** | [#10981](https://github.com/zeroclaw-labs/zeroclaw/issues/10981) | Outgoing WhatsApp images lack thumbnails/dimensions | ❌ No fix yet |

> ⚠️ **Note**: Three S0 bugs involve **shell/git command bypasses** — these pose serious data loss risks and require urgent attention. No PRs currently address them.

---

### **6. Feature Requests & Roadmap Signals**

Key upcoming features are emerging from user-driven needs:

- **Telegram Webhook Support** ([#8046](https://github.com/zeroclaw-labs/zeroclaw/issues/8046)) – Request for optional webhook ingress over long polling.  
  🔗 [GitHub Issue #8046](https://github.com/zeroclaw-labs/zeroclaw/issues/8046)  
  → *Signal*: Desire for scalable, low-latency bot deployment in cloud environments.

- **Anthropic Prompt Cache TTL Control** ([#10663](https://github.com/zeroclaw-labs/zeroclaw/issues/10663)) – Configurable 1-hour cache TTL.  
  🔗 [GitHub Issue #10663](https://github.com/zeroclaw-labs/zeroclaw/issues/10663)  
  → *Signal*: Growing use of Anthropic models requires finer control over caching behavior.

- **Delivery Receipts & Message Provenance** ([#10929](https://github.com/zeroclaw-labs/zeroclaw/issues/10929), [#10891](https://github.com/zeroclaw-labs/zeroclaw/issues/10891)) – Tracking message delivery and origin.  
  🔗 [GitHub Issue #10929](https://github.com/zeroclaw-labs/zeroclaw/issues/10929)  
  🔗 [GitHub Issue #10891](https://github.com/zeroclaw-labs/zeroclaw/issues/10891)  
  → *Signal*: Need for audit trails and reliable state tracking in enterprise-grade deployments.

These features suggest the next release (likely v0.8.6/v0.9.0) will emphasize **observability**, **security**, and **cross-platform fidelity**.

---

### **7. User Feedback Summary**

Users report the following pain points:
- **Lack of real-time delegation feedback** – Agents can’t monitor sub-agent progress mid-run, leading to uncertainty in long-running tasks.
- **Poor WhatsApp UX** – Missing image previews, broken mentions, and inability to create groups degrade usability.
- **Security blind spots** – Shell and Git commands can evade risk classification, raising trust concerns.
- **Inconsistent message handling** – No way to confirm if messages were delivered, especially in mission-critical flows.

Positive sentiment is expressed toward **modular design**, **RFC-driven governance**, and **active maintainer responsiveness** — particularly in addressing high-severity bugs and reviewing PRs.

---

### **8. Backlog Watch**

Several high-impact, long-standing issues remain open and need maintainer attention:

- **[Issue #8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627)** – WhatsApp Web device linking broken due to passkey/SHORTCAKE gate.  
  🟡 Status: Accepted, P1, Risk: High — **critical for WhatsApp channel viability**.

- **[Issue #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)** – Tracker for v0.8.6 and v0.9.0 runtime/gateway work.  
  🟡 Status: Accepted, P2, Risk: High — **central to roadmap planning**.

- **[Issue #10930](https://github.com/zeroclaw-labs/zeroclaw/issues/10930)** – RFC: One durable primitive for human questions (SOP gate).  
  🟡 Status: Needs-maintainer-review — **core to agent reliability**.

- **[Issue #10952](https://github.com/zeroclaw-labs/zeroclaw/issues/10952)** – Seam sanitizers rewrite reasoning, causing Anthropic rejection.  
  🟡 Status: In-progress, P2, Risk: High — **impacts multimodal reasoning integrity**.

> 🔍 **Recommendation**: Prioritize **S0 security bugs** and **high-risk RFCs** for immediate triage. These issues directly affect system safety and adoption.

---

**Final Note**: ZeroClaw is at a pivotal stage — balancing rapid feature expansion with rigorous security and stability. The project shows strong health indicators but must address critical vulnerabilities and backlog depth to maintain momentum.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*