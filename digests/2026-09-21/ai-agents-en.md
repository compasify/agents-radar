# OpenClaw Ecosystem Digest 2026-09-21

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-09-21 00:36 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest — 2026-09-21**

---

### **1. Today's Overview**  
The OpenClaw project remains highly active with **500 new issues and 500 PRs updated in the last 24 hours**, indicating intense development and user-driven feedback. The ecosystem is experiencing a surge in stability-critical bugs, particularly around memory management, SQLite WAL growth, process leaks, and update failures—many marked as P0 or UX-release-blockers. Despite no new releases, significant progress is being made on core reliability fixes, especially in Gateway startup, session state handling, and plugin lifecycle management. The community is deeply engaged, with many high-comment issues signaling systemic concerns across agent persistence, crash loops, and upgrade resilience.

---

### **2. Releases**  
✅ **No new releases published today.**  
- The latest stable version remains **2026.9.5**, which has already triggered multiple critical regressions (see #153257, #152981, #153704).  
- **No release notes or migration guides** are available for recent updates, contributing to confusion among users attempting upgrades.  
- Several users report silent failure during `openclaw update` (e.g., #152759, #153704), suggesting that the current release cycle lacks robust rollback validation and error visibility.

> 🔗 [Latest Release: 2026.9.5](https://github.com/openclaw/openclaw/releases/tag/2026.9.5)

---

### **3. Project Progress**  
**212 PRs merged/closed in the last 24h**, reflecting strong momentum in stabilizing core infrastructure:

- ✅ **Critical fix for SQLite inspection instability**: #153839 resolves intermittent `SQLite source did not stabilize` errors during updates and config writes, directly addressing #145995.
- ✅ **Improved update finalization logic**: #153178 ensures proper recovery checks after updates, fixing false `runtime-verification-failed` states.
- ✅ **Enhanced plugin lifecycle safety**: #154126 reserves plugin jobs before CI admission, preventing resource exhaustion in hosted PRs.
- ✅ **UI/UX refinements**: Multiple PRs improve web UI responsiveness (#154179), layout performance (#154179), and panel positioning (#154207).
- ✅ **Security & policy enforcement**: #153756 prevents ACP model identifiers from leaking into native calls, reducing misrouting risks.

These changes reflect a focused effort to **stabilize the upgrade path, reduce runtime flakiness, and improve developer experience**.

> 🔗 [PR #153839: Fix live SQLite inspection aborts](https://github.com/openclaw/openclaw/pull/153839)  
> 🔗 [PR #153178: Verify Gateway recovery post-update](https://github.com/openclaw/openclaw/pull/153178)

---

### **4. Community Hot Topics**  
Top 5 most commented issues (≥10 comments) reveal deep user frustration with system stability and upgrade reliability:

| Issue | Comments | Severity | Key Concern |
|------|----------|----------|------------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | 35 | P0 (Crash Loop) | SQLite WAL grows to 2.8 GB → blocks gateway startup (Windows) |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 31 | P1 (Memory Leak) | Child processes leak → zombie accumulation → OOM |
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | 31 | P1 (Crash) | Unhandled rejection in MCP cleanup → crashes Gateway |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 29 | P1 (OOM Crash) | RSS grows from 350MB → 15.5GB over days |
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | 20 | P0 (Crash Loop) | Gateway reaches "ready" but never serves; event loop starved |

> 🔗 [Top 5 Issues Summary](https://github.com/openclaw/openclaw/issues?q=is%3Aissue+is%3Aopen+sort%3Acomments-desc+label%3A%22P0%22+label%3A%22impact%3Acrash-loop%22)

**Underlying Need**: Users are reporting **systemic degradation under sustained load**, especially on Windows and macOS. The recurring theme is **unmanaged state growth (memory, disk, processes)** leading to full system failure—indicating a need for stronger resource governance, automatic cleanup, and proactive monitoring.

---

### **5. Bugs & Stability**  
**Critical stability issues dominate the backlog**, all with high impact and urgent fix priority:

| Bug | Impact | Status | Fix PR? |
|-----|--------|--------|--------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) – WAL grows to 2.8 GB | Crash Loop, UX Blocker | Open (P0) | ❌ No fix yet |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) – Zombie child processes | Memory Leak, OOM | Open (P1) | ❌ No fix yet |
| [#144911](https://github.com/openclaw/openclaw/issues/144911) – Unhandled promise in cleanup | Gateway Crash | Open (P1) | ❌ No fix yet |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) – RSS climbs to 15.5GB | OOM Kill, Restart Loop | Open (P1) | ❌ No fix yet |
| [#153704](https://github.com/openclaw/openclaw/issues/153704) – Update fails at 299s | Silent Upgrade Failure | Closed (P0) | ✅ Fixed in #153839 |
| [#153257](https://github.com/openclaw/openclaw/issues/153257) – 2026.9.5 causes 8-hour recovery | UX Release Blocker | Open (P0) | ❌ No fix yet |

> ⚠️ **Key Pattern**: All major crashes stem from **asynchronous state corruption**, **incomplete cleanup**, or **resource exhaustion under load**. While some fixes are underway (e.g., #153839), the root cause of persistent memory/disk leaks remains unaddressed.

---

### **6. Feature Requests & Roadmap Signals**  
High-priority feature requests suggest growing demand for **scalability, security, and configurability**:

| Request | User Need | Priority | Signal |
|--------|-----------|----------|--------|
| [#151176](https://github.com/openclaw/openclaw/issues/151176) – OpenAI Agents API MVP | Unified backend coordination | P2 | Stacked on existing work; signals future expansion |
| [#110950](https://github.com/openclaw/openclaw/issues/110950) – Everything is a cron | Unified automation layer | P2 | Long-standing request; indicates desire for declarative workflows |
| [#131457](https://github.com/openclaw/openclaw/issues/131457) – Progress streaming for Feishu | Real-time output delivery | P3 | Niche but high-impact for enterprise users |
| [#153067](https://github.com/openclaw/openclaw/issues/153067) – DB re-copying every 5s | Performance optimization | P0 | Steady-state bottleneck; likely to be prioritized |
| [#119401](https://github.com/openclaw/openclaw/issues/119401) – Force visible replies on small models | Visibility control | P2 | Reflects need for granular response policies |

> 📌 **Prediction**: The next stable release (2026.10.x) will likely include **enhanced session state durability**, **improved update rollback**, and **better resource limits**—driven by the top bugs and feature demands.

---

### **7. User Feedback Summary**  
Real-world pain points highlight the **tension between innovation and stability**:

- **“I upgraded to 2026.9.5 and spent 8 hours recovering my environment.”** – #153257  
  → Users trust updates but are penalized by silent failures and lack of rollback transparency.

- **“My agent’s WAL file grew to 2.8 GB overnight.”** – #143524  
  → Data integrity and disk usage are critical concerns, especially on Windows.

- **“My gateway keeps crashing due to memory bloat.”** – #91588  
  → Users run long-lived agents; current behavior makes this unsustainable.

- **“Plugins keep building temp dirs that grow 7.5 GB/day.”** – #153246  
  → System hygiene is neglected; users expect automatic cleanup.

> 💬 **Sentiment**: High frustration with **release quality**, **lack of upgrade feedback**, and **silent state corruption**. Users want predictable, resilient systems—not just powerful features.

---

### **8. Backlog Watch**  
**Critical long-unanswered issues requiring maintainer attention**:

| Issue | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | 12 days | Open (P0) | Blocks production use on Windows; WAL checkpointing broken |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 83 days | Open (P1) | Zombie accumulation → system-level instability |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 55 days | Open (P1) | Synchronous persistence stalls event loop at scale |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | 62 days | Open (P1) | Livelock under sustained writes → total stall |
| [#153882](https://github.com/openclaw/openclaw/issues/153882) | 1 day | Closed (P0) | Deadlock in plugin migration — fix PR exists, but rollout unclear |

> 🔍 **Action Needed**: Maintainers should prioritize **#143524, #97616, and #119720**—these represent fundamental architectural risks. The fact that **fixes exist for some P0 issues but remain unmerged** suggests pipeline bottlenecks.

---

### ✅ **Final Assessment**  
OpenClaw is **technically ambitious and highly active**, but **production readiness is compromised** by unresolved stability issues. The project is at a crossroads: rapid feature development must now be balanced with **rigorous testing, release hygiene, and proactive diagnostics**. Without addressing core memory/disk/process leaks, even advanced features will fail in real-world deployments.

> 🛠️ **Recommendation**: Prioritize **P0 stability fixes**, enforce **pre-release health checks**, and implement **automated regression testing for upgrade paths**. Transparency in release notes and rollback behavior is urgently needed.

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Ecosystem (2026-09-21)**

---

### **1. Ecosystem Overview**  
The open-source personal AI assistant and agent ecosystem in Q3 2026 is marked by **rapid architectural maturation**, with projects shifting from feature-driven innovation toward **stability, security, and interoperability**. While OpenClaw leads in activity volume, ZeroClaw and QwenPaw are advancing toward production-grade reliability through rigorous design governance. The landscape reflects a growing consensus that **agent persistence, resource hygiene, and standardized APIs** are no longer optional but foundational. Cross-project signals indicate a collective pivot toward enterprise readiness—evident in multi-tenancy demands, audit trails, and secure plugin execution.

---

### **2. Activity Comparison**

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score¹ |
|-------|--------------|-----------|----------------|---------------|
| **OpenClaw** | 500 | 500 | ❌ No new release | ⚠️ Low (Critical bugs unresolved) |
| **Hermes Agent** | 50 | 50 | ❌ No new release | ✅ Medium (Stable fixes, active UX focus) |
| **IronClaw** | 0 | 7 | ❌ No new release | ✅ High (Proactive dependency hygiene) |
| **QwenPaw** | 24 | 37 | ✅ v2.2.2-beta.3 | 🟡 Medium (Beta stability concerns) |
| **ZeroClaw** | 50 | 50 | ❌ Pre-release (v0.9.0 pending) | ✅ High (Architectural rigor, RFC discipline) |

> **¹ Health Score**: Based on critical bug resolution rate, release transparency, community feedback sentiment, and technical debt indicators.  
> *Score range: ✅ High (≥8/10), 🟡 Medium (5–7), ⚠️ Low (≤4)*

---

### **3. OpenClaw's Position**  
OpenClaw stands as the **most active project in the ecosystem**, with 500 issues and 500 PRs updated daily—indicating intense user engagement and development velocity. Its advantage lies in **early-mover momentum and deep integration with real-world workflows**, particularly in session state management and plugin lifecycle control. However, this comes at the cost of **systemic stability risks**, with P0 crashes tied to memory/disk leaks and silent update failures. Unlike peers focusing on security or standardization, OpenClaw’s technical approach prioritizes **flexibility and extensibility**, often at the expense of runtime predictability. Community size is largest among the five, but its high frustration levels (per user feedback) suggest **burnout risk due to inconsistent release quality**.

---

### **4. Shared Technical Focus Areas**  
Multiple projects are converging on **critical infrastructure needs**:

| Requirement | Projects Involved | Specific Needs |
|------------|-------------------|----------------|
| **Resource Governance & Cleanup** | OpenClaw, Hermes Agent, QwenPaw, ZeroClaw | Prevent process leaks (Hermes #64488), memory bloat (OpenClaw #91588), base64 accumulation (QwenPaw #7853), and disk growth (OpenClaw #143524) |
| **Session Persistence & Recovery** | OpenClaw, QwenPaw, ZeroClaw | Avoid session loss after restart (QwenPaw #7724), ensure state durability under pruning (ZeroClaw #10696), prevent crash loops (OpenClaw #149538) |
| **Standardized Protocols** | ZeroClaw, QwenPaw, Hermes Agent | OpenAI Chat Completions alignment (ZeroClaw #8603), unified model selection (QwenPaw #7899), tool fidelity (Hermes #117729) |
| **Security & Isolation** | ZeroClaw, IronClaw, QwenPaw | Plugin integrity (ZeroClaw #9134), shell command gating (#7155), OAuth safety (IronClaw #8102), prompt injection prevention (#7859) |

This convergence signals a **shared recognition that agent reliability hinges on cross-cutting systems engineering**, not just model performance.

---

### **5. Differentiation Analysis**  

| Dimension | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|---------|----------|--------------|----------|---------|----------|
| **Feature Focus** | Plugin ecosystems, workflow automation | Social UX, desktop polish | Dependency hygiene, WASM foundation | Team collaboration, UI stability | Security, protocol standards |
| **Target Users** | Power users, dev teams | Creators, chat-first adopters | Enterprise admins, GUI-first users | Teams, multi-user workspaces | Developers, system architects |
| **Architecture** | Monolithic core + dynamic plugins | Modular agents + TUI | Rust-based, minimal footprint | Hybrid frontend/backend | WASM + live-config authority |
| **Key Differentiator** | Scale of community and integrations | Emotional expressiveness & social cues | Proactive security patching | Multi-tenant roadmap | RFC-driven governance & compliance |

> 🔍 **Notable Contrast**: While OpenClaw and QwenPaw push for **collaborative, team-oriented AI assistants**, ZeroClaw and IronClaw emphasize **secure, isolated execution environments**—reflecting divergent visions of agent trust models.

---

### **6. Community Momentum & Maturity**  

- **Rapid Iteration Tier** (High activity, high instability):  
  - **OpenClaw** – 500+ issues/PRs/day; unstable releases; urgent fix backlog.  
  - **QwenPaw** – Beta churn; rapid UI/UX fixes; strong community-driven feature planning (#7318).  
  - **ZeroClaw** – Deep architectural debates; RFC-heavy; pre-release stabilization phase.  

- **Stabilizing Tier** (Focused maintenance, low bug volume):  
  - **Hermes Agent** – Balanced progress; consistent fixes; mature TUI.  
  - **IronClaw** – Minimal user issues; automated dependency updates dominate; quiet but healthy.  

> 💬 **Insight**: The ecosystem is bifurcating: **"innovation engines" (OpenClaw, QwenPaw)** vs. **"infrastructure enablers" (ZeroClaw, IronClaw)**. This suggests a maturing market where specialization will drive adoption.

---

### **7. Trend Signals**  
From community feedback and project direction, key industry trends emerge:

1. **Trust > Features**: Users demand **predictable behavior** over flashy capabilities. Silent failures (OpenClaw #153704) and session loss (QwenPaw #7724) are top pain points—proving that **reliability is the new competitive moat**.

2. **Enterprise Readiness is Non-Negotiable**: Multi-tenancy (QwenPaw #7318), OIDC (ZeroClaw #7141), audit trails (ZeroClaw #10621), and role-based access are no longer niche—they’re expected.

3. **Standardization Enables Ecosystem Growth**: Alignment with OpenAI Chat Completions (ZeroClaw #8603), unified model config (QwenPaw #7899), and stable tool interfaces (Hermes #117729) show that **interoperability is now a primary value driver**.

4. **Security-by-Design is Mandatory**: From SHA-256 pinning (ZeroClaw #9134) to per-execution confirmation (ZeroClaw #7155), projects are embedding security into their DNA—not as an add-on.

5. **DevOps for Agents**: Automated testing (QwenPaw #7862), CI/CD hygiene (IronClaw), and AI-assisted PR review (ZeroClaw #9330) signal that **agent development now requires DevOps maturity**.

---

### ✅ **Strategic Implications for AI Agent Developers**  
- Prioritize **release health and rollback visibility**—users won’t tolerate silent failures.
- Invest in **resource monitoring and automatic cleanup**—even powerful agents fail without it.
- Design for **standardization and composability**—interoperability drives adoption.
- Treat **security and isolation** as first-class concerns—especially for team or enterprise use.
- Leverage **RFCs and transparent governance** (like ZeroClaw) to build long-term trust and contributor engagement.

> **Final Note**: The next 6 months will determine whether these projects become **platforms or prototypes**. The winners will be those who balance innovation with **engineered resilience**.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-09-21**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active, with 50 new issues and 50 updated pull requests in the past 24 hours—indicating strong community engagement and ongoing development momentum. Despite no new releases, the pipeline is rich with critical fixes and feature enhancements focused on stability, cross-platform compatibility (especially Windows), and user experience refinement. Key areas of focus include session lifecycle management, memory handling, vision tooling, and desktop UX polish. The high volume of open issues reflects both rapid iteration and a growing user base pushing edge cases.

---

### **2. Releases**  
No new releases were published today. The latest stable version remains **v0.21.3** (`v2026.9.14`, image digest `sha256:99641e57ec762c59e54cb44aa6746b7fc68c18b3c5ddb088af54234c613d9294`). No breaking changes or migration notes are pending at this time.

---

### **3. Project Progress**  
Several high-priority PRs were merged or advanced today, addressing core stability and functionality:

- ✅ **PR #117732** (*fix: LLM JSON replies with trailing prose parse correctly*) – Resolves parsing failures in `delegate_task`, goal judge, and Kanban workflows when models return JSON wrapped in prose.
- ✅ **PR #117729** (*fix(bedrock): tool-result images as Converse image blocks*) – Ensures Bedrock Vision tools now send actual image blocks instead of base64-injected text, fixing multi-screenshot sessions.
- ✅ **PR #117728** (*fix(sessions): unarchive resumed compression lineages*) – Fixes visibility regression where live chats become permanently hidden after auto-archive sweeps.
- ✅ **PR #117726** (*fix(moa): make Desktop preset deletion durable*) – Ensures deleted MoA presets are persistently removed across restarts and config loads.
- ✅ **PR #91099** (*fix(gateway): supervise Windows watchdog exits*) – Addresses a long-standing Windows reliability gap by ensuring the gateway process is properly monitored and restarted.

These fixes collectively improve **session integrity**, **tool fidelity**, and **platform reliability**, especially for Linux and Windows users.

---

### **4. Community Hot Topics**  
Top-tier discussions reflect deep user engagement with core workflow and platform-specific pain points:

- 🔥 **Issue #84361** – *Desktop MEDIA: file links dead due to regex & URL construction*  
  [Link](https://github.com/nousresearch/hermes-agent/issues/84361)  
  > **Why it matters**: Users can’t click on embedded media links in chat. Silent failure with no debug info reduces trust and usability. A fix is urgently needed for local file navigation.

- 🔥 **Issue #64488** – *Dashboard TUI sessions leak processes, memory, DB rows (Linux native)*  
  [Link](https://github.com/nousresearch/hermes-agent/issues/64488)  
  > **Why it matters**: Persistent resource leaks undermine long-term usability, especially in server environments. This signals a need for better session lifecycle management.

- 🔥 **PR #117732** – *Fix JSON parsing of LLM replies with trailing prose*  
  [Link](https://github.com/nousresearch/hermes-agent/pull/117732)  
  > **Why it matters**: High comment count (implied via activity) shows widespread impact on structured output workflows. Developers rely on clean JSON extraction for automation.

- 🔥 **Issue #117520** – *Bot Mode should feel like a real chat (friend-group vibe)*  
  [Link](https://github.com/nousresearch/hermes-agent/issues/117520)  
  > **Why it matters**: Reflects a growing desire for social affordances in AI interactions. Users want bots to feel less like tools and more like conversational partners.

---

### **5. Bugs & Stability**  
Critical stability issues reported today require urgent attention:

| Severity | Issue ID | Description | Fix PR? |
|--------|---------|-------------|--------|
| P1 (High) | #117725 | **Nous Portal LongCat 2.0 exhausts output budget without answering** | ❌ No fix yet; may involve model routing or cost control logic |
| P2 | #117710 | **Custom provider session model drops on second turn → 500 error** | ❌ No fix yet; affects custom providers like Bedrock |
| P2 | #117713 | **Live gateway chat becomes invisible after auto-archive sweep** | ✅ **PR #117728** (merged) – Now fixed |
| P2 | #94381 | **Pooled SSH backend never dropped → stuck at (1/3)** | ❌ No fix yet; liveness window shorter than revalidation tick |
| P2 | #84361 | **Desktop MEDIA links fail silently** | ❌ No fix yet; impacts local file access |

> ⚠️ **Note**: While several fixes are underway, lingering issues in **custom providers**, **SSH backends**, and **memory/session state** suggest deeper architectural challenges in managing external dependencies and lifecycle states.

---

### **6. Feature Requests & Roadmap Signals**  
User-driven feature requests indicate a shift toward **social interaction**, **personalization**, and **UX control**:

- 📌 **PR #117724** (*emoji reactions on room messages*) – Adds emotional expressiveness to Bot Mode chats.  
  [Link](https://github.com/nousresearch/hermes-agent/pull/117724)
- 📌 **PR #117730** (*quote a room message in reply*) – Enables granular responses, improving clarity in group discussions.  
  [Link](https://github.com/nousresearch/hermes-agent/pull/117730)
- 📌 **Issue #117520** (*Bot Mode should feel like a real chat*) – Calls for lightweight, social-rich interactions beyond structured reports.  
  [Link](https://github.com/nousresearch/hermes-agent/issues/117520)
- 📌 **Issue #117715** (*Custom link handlers & inline local-file navigation*) – Requests greater control over how links and files are rendered in desktop UI.  
  [Link](https://github.com/nousresearch/hermes-agent/issues/117715)

> 🎯 **Prediction**: These features are likely candidates for inclusion in **v0.22.0**, expected Q4 2026, as they align with the project’s move toward a “leaner core” and enhanced UX.

---

### **7. User Feedback Summary**  
Real user pain points dominate the issue tracker:

- **Silent failures** (e.g., media links doing nothing) erode trust and hinder troubleshooting.
- **Resource leaks** (processes, memory, DB rows) are unacceptable in production or long-running setups.
- **Poor feedback loops** — e.g., `HERMES_DESKTOP_IGNORE_EXISTING` not working — show confusion around configuration semantics.
- **Inconsistent behavior** across platforms (Windows vs. Linux) highlights a need for cross-platform testing rigor.
- **Lack of social cues** in bot conversations makes them feel mechanical rather than collaborative.

> 💬 **Satisfaction signal**: Users are actively contributing solutions (e.g., PRs #117729, #117732), indicating strong investment and satisfaction with the project’s direction.

---

### **8. Backlog Watch**  
Important long-standing issues requiring maintainer review:

- 🟡 **Issue #117487** – *Hindsight auto-recall runs on synthetic turns (not just user input)*  
  [Link](https://github.com/nousresearch/hermes-agent/issues/117487)  
  > **Status**: On HOLD due to upstream memory-provider refactoring. Needs follow-up once core architecture stabilizes.

- 🟡 **Issue #117693** – *Google Meet realtime v2 is dead (OpenAI beta API shape deprecated)*  
  [Link](https://github.com/nousresearch/hermes-agent/issues/117693)  
  > **Status**: Plugin uses retired API; requires migration to current OpenAI Realtime API shape.

- 🟡 **Issue #117717** – *Telegram inline picker accepts negative offsets*  
  [Link](https://github.com/nousresearch/hermes-agent/issues/117717)  
  > **Status**: Critical input validation bug affecting usability.

- 🟡 **Issue #117722** – *Web build fails due to TS18048 in vite.config.ts*  
  [Link](https://github.com/nousresearch/hermes-agent/issues/117722)  
  > **Status**: Blocks UI development; PR #117723 already submitted but needs merge.

> 🛠️ **Action Item**: Maintainers should prioritize reviewing **HOLD** and **needs-repro** issues, especially those tied to core stability and platform compatibility.

---  
*Data source: GitHub Activity (2026-09-21) | Project: [Hermes Agent](https://github.com/nousresearch/hermes-agent)*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026-09-21**

---

### **1. Today's Overview**  
The IronClaw project shows a low-activity day with no new issues or releases. However, seven pull requests were updated within the past 24 hours, indicating ongoing maintenance and dependency hygiene efforts. Of these, three were merged (PRs #8102, #8099, #8079), while four remain open—primarily automated dependency updates driven by Dependabot. The absence of user-reported bugs or feature requests suggests stability in core functionality, but continued focus on dependency management reflects proactive risk mitigation.

---

### **2. Releases**  
*No new releases were published in the last 24 hours.*  
There are currently no tagged versions or changelogs available for this date. All recent changes are in-flight via PRs and not yet released.

---

### **3. Project Progress**  
Three pull requests were successfully merged today:  
- **PR #8102**: Fixed a critical activation failure for Gmail/Google Calendar integrations when OAuth credentials were configured via the Web UI instead of environment variables. This resolves a usability barrier for administrators using the GUI-based setup flow. [View PR](https://github.com/nearai/ironclaw/pull/8102)  
- **PR #8099**: Completed a bulk dependency update across the `/` directory, including `uuid`, `base64`, and `rust_decimal`. These updates improve security and compatibility. [View PR](https://github.com/nearai/ironclaw/pull/8099)  
- **PR #8079**: Bumped GitHub Actions dependencies, including `anthropics/claude-code-action` and `actions/setup-node`, aligning CI/CD pipelines with latest versions. [View PR](https://github.com/nearai/ironclaw/pull/8079)  

These merges reflect a strong focus on dependency health and integration reliability.

---

### **4. Community Hot Topics**  
While no high-engagement issues exist, the most active PRs are all automated dependency updates from **Dependabot[bot]**, suggesting a community-wide shift toward continuous security patching. Notable open PRs include:  
- **PR #8104**: Bumps 29 non-critical Rust dependencies in `/` directory ([link](https://github.com/nearai/ironclaw/pull/8104))  
- **PR #8103**: Updates 8 GitHub Actions workflows, including `setup-node` to v7.0.0 ([link](https://github.com/nearai/ironclaw/pull/8103))  
- **PR #7834**: Updates Wasm runtime components (`wasmtime`, `wit-parser`, etc.) — important for future WASM-based agent execution ([link](https://github.com/nearai/ironclaw/pull/7834))  

These signals indicate growing emphasis on infrastructure modernization and long-term maintainability, especially around WASM and CI tooling.

---

### **5. Bugs & Stability**  
No new bug reports or crashes were filed today. The only notable issue resolved was in **PR #8102**, which addressed a latent configuration mismatch between Web UI and backend logic that prevented Google service activation despite successful OAuth flow. This fix improves platform reliability for enterprise users relying on admin-driven setups. No regression or crash reports have surfaced recently.

---

### **6. Feature Requests & Roadmap Signals**  
No direct feature requests were submitted today. However, the sustained momentum in dependency upgrades—especially around **WASM** (PR #7834) and **Tokio ecosystem** (PR #8078)—suggests the roadmap is prioritizing:  
- Enhanced agent isolation and portability via WebAssembly  
- Improved async I/O performance and networking stack  
- Better support for AI-native workflows (e.g., Claude code action integration)

These technical investments likely point toward upcoming features like sandboxed agent execution, multi-provider orchestration, and deeper AI toolchain integration in the next major release.

---

### **7. User Feedback Summary**  
User feedback remains implicit but strongly inferred from PR activity. The resolution of the **Web UI OAuth activation issue (PR #8102)** indicates prior user frustration when configuring Google services through the admin interface. This suggests real-world adoption among teams preferring GUI over CLI/env-var workflows. Additionally, frequent dependency updates imply users value security and stability—particularly in production deployments where outdated libraries pose risks.

---

### **8. Backlog Watch**  
Several high-priority, long-standing PRs remain open and require maintainer attention:  
- **PR #7834** ([WASM group updates](https://github.com/nearai/ironclaw/pull/7834)): 3 weeks old; impacts future agent extensibility. Requires review due to potential breaking changes in `wasmtime` and `wit-component`.  
- **PR #8078** ([Tokio ecosystem updates](https://github.com/nearai/ironclaw/pull/8078)): 15 days old; includes `tower-http` and `tokio-tungstenite` upgrades. Critical for maintaining network resilience in distributed agents.  

Both are flagged as medium-risk but essential for forward compatibility. They should be prioritized ahead of the next release cycle.

---  
*Data sourced from GitHub: https://github.com/nearai/ironclaw | Updated: 2026-09-21*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-09-21**

---

### **1. Today's Overview**  
QwenPaw continues to exhibit strong momentum in its development lifecycle, with **37 pull requests and 24 issues updated in the last 24 hours**, indicating active community engagement and rapid iteration. The release of **v2.2.2-beta.3** signals a focus on stabilizing core functionality ahead of the upcoming stable 2.2.0 release. Key areas under scrutiny include session persistence, tool result pruning, model integration, and UI reliability—particularly around file handling, audio processing, and multi-user support. The project is clearly transitioning from feature expansion toward quality assurance and edge-case hardening.

---

### **2. Releases**  
**v2.2.2-beta.3** (Released: 2026-09-20)  
[Release Page](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.2-beta.3)  

#### ✅ What’s Changed:
- **Fix (console):** Restored assistant response actions after recent redesign (`#7851`)  
- **Fix (e2e):** Re-anchor broken console selectors; hardened session-list assertions (`#7851`)  

> 🔧 **Note:** This beta release addresses critical frontend stability issues introduced during the `#7502` redesign. No breaking changes reported—users should expect improved consistency in UI state management and session rendering.

---

### **3. Project Progress**  
**Merged & Closed PRs (Today):**
- ✅ `#7904`: Fixes `qwenpaw-pet` plugin crash by forwarding `actor` argument to approval service — resolves **#7856** ([PR #7904](https://github.com/agentscope-ai/QwenPaw/pull/7904))
- ✅ `#7887`, `#7886`: Adds fallback handling for `input_audio` rejections with unknown variants — prevents permanent conversation failure (`#7876`)  
- ✅ `#7894`: Increases frontend unit test coverage by +1,027 statements (+543 cases) — improves long-term maintainability  
- ✅ `#7862`: Makes E2E test gate blocking in release pipeline — reduces risk of undetected regressions  
- ✅ `#7345`: Fixes stuck "tool calling" UI state post-cancellation — restores proper stop behavior  
- ✅ `#5836`: Adds auto-detection of local file paths in chat output with clickable links (desktop only)

> 🚀 **Progress Summary:** Critical UI/UX fixes are being prioritized, especially around tool execution states, audio handling, and test coverage. The team is actively tightening release gates and improving resilience.

---

### **4. Community Hot Topics**  
#### 🔥 Most Active Issue:  
**#7318 [OPEN] QwenPaw Hub – Multi-tenant Edition Roadmap Discussion**  
[Issue #7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)  
- **31 comments**, **4 upvotes**  
- A major community-driven initiative: users are demanding team collaboration features (multi-user access, admin-managed skills).  
- This reflects a clear shift from personal AI assistant to **team-enabled agent orchestration platform** — likely shaping the next phase of QwenPaw’s evolution.

#### 🔥 Most Active PR:  
**#7899 [OPEN] feat(providers): unify model discovery, pricing, selection and thinking controls**  
[PR #7899](https://github.com/agentscope-ai/QwenPaw/pull/7899)  
- Proposed overhaul of model management across providers — aims to reduce configuration fragmentation.  
- Directly responds to user pain points around inconsistent model selection logic and unclear pricing visibility.

> 💡 **Insight:** Users want **predictable, unified model experiences** across diverse providers (OpenCode, DeepSeek, Kimi, etc.). The community is pushing for a more cohesive, enterprise-ready model interface.

---

### **5. Bugs & Stability**  
| Severity | Issue | Description | Fix PR? |
|---------|------|-------------|--------|
| ⚠️ High | **#7853** [Bug]: ToolResultPruner skips media blocks → base64 bloat | `view_image` data accumulates indefinitely due to unpruned `type="data"` blocks, causing context overflow | ✅ **PR #7906** in review (fixes stale DoomLoop escalation) |
| ⚠️ High | **#7724** [Bug]: Session loss after restart | Users lose entire chat history and config after reboot — reproducible on Windows 10/11 | ❌ No fix yet; urgent for UX trust |
| ⚠️ High | **#7888** [Bug]: Chat page crashes with React `commitPlacement` error | Browser-level UI corruption when opening `/chat` route | ❌ No fix; impacts usability |
| ⚠️ Medium | **#7882** [Bug]: OpenCode free-tier models return 403 | Despite UI labeling them as “free,” API calls fail due to missing session headers | ✅ **PR #7869** in progress — sends required `x-opencode-session` header |
| ⚠️ Medium | **#7883** [Bug]: PDFs sent via OpenAI format rejected by DeepSeek | DeepSeek expects `file_id` or `file_data`, but receives nested structure | ❌ No fix; breaks file sharing workflow |

> 🛑 **Critical Risk:** Persistent session loss and base64 accumulation threaten both usability and model performance. These must be addressed before v2.2.0 finalization.

---

### **6. Feature Requests & Roadmap Signals**  
Top user-requested features:
- **Multi-tenant Hub / Team Collaboration** (via #7318) — already being discussed as core v2.2.0 feature
- **Customizable webpage title** (#7648): Simple but impactful UX improvement for power users managing multiple instances
- **Unified model configuration** (#5182): Enable consistent setup for multimodal models (text/audio/video)
- **Persistent prompt injection detection** (#7859): Highlights growing concern about security integrity in agent memory
- **Zero-downtime reload consistency** (#7890): Plugin hooks lost during reload — indicates advanced use case maturity

> 📈 **Prediction:** v2.2.0 will prioritize **team collaboration**, **model configuration unification**, and **UI stability** — laying groundwork for future enterprise adoption.

---

### **7. User Feedback Summary**  
- **Frustration:** Multiple users report **session loss** after system sleep/restart — undermines trust in persistent workflows.
- **Confusion:** Users find it difficult to distinguish between “free” models and those requiring auth (e.g., OpenCode), leading to failed expectations.
- **Desire for Control:** Demand for **custom tabs, titles, and file preview sync** shows users are building complex workflows.
- **Security Concerns:** Prompt injection via system reminders (e.g., delete all skills) raises alarm — suggests need for stronger input sanitization and audit trails.
- **Satisfaction:** Positive feedback on new features like clickable file paths (`#5836`) and embedded community feed (`#7903`).

> 🎯 **User Sentiment:** Highly engaged, technically sophisticated, but frustrated by instability and inconsistent UX — they want **reliability** and **predictability** above all.

---

### **8. Backlog Watch**  
These issues remain open and high-impact without assigned fix PRs:

- **#7724**: Session loss after reboot — affects core usability; needs immediate triage  
  [Link](https://github.com/agentscope-ai/QwenPaw/issues/7724)
- **#7853**: Base64 image accumulation → context overflow — high-risk regression  
  [Link](https://github.com/agentscope-ai/QwenPaw/issues/7853)
- **#7888**: React `commitPlacement` crash — browser-level UI failure  
  [Link](https://github.com/agentscope-ai/QwenPaw/issues/7888)
- **#7879**: MCP OAuth failure with static Bearer keys (e.g., QCC) — blocks integrations  
  [Link](https://github.com/agentscope-ai/QwenPaw/issues/7879)
- **#7895**: Idle cleanup drops messages during consumer shutdown — race condition  
  [Link](https://github.com/agentscope-ai/QwenPaw/issues/7895)

> ⏳ **Call to Maintainers:** These represent systemic risks to stability and user retention. Immediate investigation and priority assignment recommended before final v2.2.0 release.

---  
*Digest generated: 2026-09-21 | Data source: GitHub – agentscope-ai/QwenPaw*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest**  
**Date:** 2026-09-21  
**Repository:** [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

### **1. Today's Overview**

The ZeroClaw project remains highly active and architecturally focused, with a strong momentum in design decisions and security hardening. Over the past 24 hours, 50 issues and 50 pull requests were updated — indicating intense community engagement and developer activity across core components. The absence of new releases suggests that the team is prioritizing deep architectural refinements ahead of a major v0.9.0 milestone. Most recent work centers on memory separation, agent lifecycle control, security policy enforcement, and protocol standardization (especially around OpenAI Chat Completions), signaling a shift toward production-grade reliability and interoperability.

---

### **2. Releases**

> ❌ **No new releases** in the last 24 hours.

There are no release announcements or version updates reported. The project appears to be in a pre-release stabilization phase, with focus on finalizing RFCs and resolving high-risk PRs before packaging a new version.

---

### **3. Project Progress**

#### ✅ **Merged/Closed PRs (Today):**
While no PRs were merged today, several critical fixes were closed and integrated into the codebase:

- **[PR #9134](https://github.com/zeroclaw-labs/zeroclaw/pull/9134)**: Fixed WASM plugin admission by preserving exact payload bytes and adding optional SHA-256 pinning — improving plugin integrity.
- **[PR #9830](https://github.com/zeroclaw-labs/zeroclaw/pull/9830)**: Made full browser automation opt-in, separating it from `browser_open` — enhancing security and user control.
- **[PR #9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713)**: Added token accounting to history-trim events — enabling better cost visibility during session pruning.

These fixes improve security, correctness, and observability in key runtime paths.

#### 🔧 **Ongoing Development Highlights:**
- **[PR #10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621)**: Coordinating agent lifecycle mutations via shared live-config authority — a foundational change for dynamic config management.
- **[PR #10351](https://github.com/zeroclaw-labs/zeroclaw/pull/10351)**: Enforcing execution-tree iteration budgets — preventing runaway agent loops.
- **[PR #10596](https://github.com/zeroclaw-labs/zeroclaw/pull/10596)**: Introducing pagination for persisted ACP transcripts — enabling scalable interaction history access.

---

### **4. Community Hot Topics**

The most active and commented issues reflect deep architectural debates shaping ZeroClaw’s future:

| Issue | Comments | Summary | Link |
|------|--------|--------|------|
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | 26 | **Decouple memory lifecycle from storage backends** — a pivotal move to separate durable storage from policy logic. | [Issue #6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) |
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | 25 | **ZeroClaw Chat Completions profile** — aligning with OpenAI’s protocol to enable integration with tools like LobeChat, LangChain, and Open WebUI. | [Issue #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | 24 | **Per-execution confirmation tier for shell commands** — implementing Claude Code-style allow/ask/deny policies for high-risk operations. | [Issue #7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) |
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | 23 | **Goal mode v1 — bounded foreground Matrix work** — enabling persistent pursuit of user objectives across multiple agent turns. | [Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) |

🔍 **Underlying Needs:**  
These top issues reveal a clear trend: **ZeroClaw is evolving from an experimental agent framework into a secure, composable, and interoperable AI orchestration platform**. Users demand:
- Standardized APIs (OpenAI compatibility)
- Stronger security boundaries (shell command gating, credential isolation)
- Persistent state and goal tracking
- Clear separation between data storage and operational policy

---

### **5. Bugs & Stability**

#### ⚠️ **Critical Bugs Reported (High Risk):**
| Bug | Description | Fix Status |
|-----|-------------|----------|
| [#10904](https://github.com/zeroclaw-labs/zeroclaw/issues/10904) | No-vision error triggered prematurely on image markers even if resolved — breaks vision-capable model use. | 🛠️ **PR #10904** submitted (open) – fixes gate logic to only fail on unresolved markers. |
| [#10696](https://github.com/zeroclaw-labs/zeroclaw/issues/10696) | History trimming uses cap as refill target → causes repeated overflows after trimming. | 🛠️ **PR #10696** submitted (open) – now trims to a low-water mark instead. |
| [#10337](https://github.com/zeroclaw-labs/zeroclaw/issues/10337) | Git operations not respecting allowed roots — potential privilege escalation risk. | 🛠️ **PR #10337** submitted (open) – enforces root-bound discovery and metadata. |
| [#10935](https://github.com/zeroclaw-labs/zeroclaw/issues/10935) | StreamTextGuard suppresses entire reply when quoting tool-result objects in code spans. | 🛠️ **PR #10935** submitted (open) – fixes guard to preserve quoted prose. |

🟢 **Stability Note**: Despite multiple high-severity bugs, all have fix PRs open and under review — indicating strong responsiveness and engineering rigor.

---

### **6. Feature Requests & Roadmap Signals**

Key feature requests suggest the next release will emphasize **interoperability**, **security**, and **long-term agent persistence**:

| Feature | Priority | Expected In | Rationale |
|-------|--------|------------|---------|
| **OpenAI Chat Completions Profile** ([#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)) | P2 | v0.9.0 | Critical for ecosystem adoption (LobeChat, Continue.dev, etc.). |
| **Goal Mode v1** ([#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)) | P1 | v0.9.0 | Enables complex, multi-turn tasks — core to "agent" identity. |
| **Verbatim Channel Send Without Agent Turn** ([#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050)) | P2 | v0.9.0 | Needed for direct message injection (e.g., alert systems). |
| **A2A Outbound Client (A2ATool)** ([#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106)) | P2 | v0.9.0 | Enables proactive inter-agent collaboration — long-awaited. |
| **Pluggable Inbound Authentication** ([#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)) | P1 | v0.9.0 | Required for enterprise and OIDC integration. |

📌 **Prediction**: The upcoming **v0.9.0 release** will be a major architectural milestone focused on **security, stability, and interoperability**, likely shipping with Chat Completions support, Goal Mode, and enhanced authentication.

---

### **7. User Feedback Summary**

Based on issue discussions and PR comments, user feedback reveals:

- ✅ **Satisfaction**: Users appreciate the transparency of RFCs, detailed documentation, and active maintainer involvement (e.g., Audacity88, JordanTheJet).
- ⚠️ **Pain Points**:
  - Difficulty in managing **high-risk tool execution** without granular confirmation (driving #7155).
  - Lack of **persistent context retention** after restarts or trimming (motivating #9998).
  - Need for **standardized protocols** to avoid custom integrations (fueling #8603).
  - Frustration with **overlapping or unclear configuration** (e.g., `web_dist_dir`, `context_window` defaults — see #7100).

💡 **Use Cases Emerging**:
- Enterprise agents requiring audit trails and role-based access.
- Developers building AI-powered workflows (e.g., coding assistants, task automation).
- Users running local models who want consistent UX across platforms.

---

### **8. Backlog Watch**

Several high-impact, accepted RFCs remain pending decision or implementation:

| Issue | Status | Why It Matters | Link |
|------|--------|----------------|------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Accepted, Open | **Maintainer Decision Queue** — tracks all RFCs needing final approval. Critical for process health. | [Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) | Accepted, Icebox | **WASM Plugin Lifecycle Observers** — enables event-driven plugin behavior. Key for extensibility. | [Issue #7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) |
| [#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) | Accepted, Parking Lot | **AI-assisted PR Pre-review** — already in pilot; needs formal adoption. | [Issue #9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) |
| [#9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621) | Accepted, Parking Lot | **Staged Opt-in Telemetry** — essential for product decisions but sensitive. | [Issue #9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621) |

⚠️ **Action Required**: Maintainers should prioritize reviewing these accepted RFCs to prevent stagnation and maintain momentum.

---

### ✅ **Final Assessment**

ZeroClaw is in a **critical growth phase** — transitioning from prototype to production-ready AI agent platform. The project exhibits **strong technical discipline**, **transparent governance**, and **user-centric design**. With a backlog of high-value features and robust security improvements underway, **v0.9.0 is poised to be a landmark release**. However, maintaining momentum on the RFC decision queue and reducing friction in contributor onboarding will be key to sustaining this energy.

> 📌 **Recommended Next Steps**:
> - Prioritize review of accepted RFCs in the maintainer queue (#8692).
> - Formalize AI-assisted PR review (PR #9330) as a standard practice.
> - Begin drafting v0.9.0 release notes and migration guide.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*