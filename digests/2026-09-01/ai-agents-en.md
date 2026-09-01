# OpenClaw Ecosystem Digest 2026-09-01

> Issues: 448 | PRs: 500 | Projects covered: 5 | Generated: 2026-09-01 01:23 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest — 2026-09-01**

---

### **1. Today's Overview**  
The OpenClaw project remains highly active, with 448 issues and 500 pull requests updated in the last 24 hours—indicating intense development and community engagement. The ecosystem is experiencing a surge in stability-critical bug reports, particularly around memory leaks, session corruption, and upgrade failures. While the latest release (`v2026.8.1`) introduced improvements, it has also triggered significant post-upgrade breakage, especially on macOS LaunchAgent installs. This suggests a period of high friction during migration, requiring urgent maintainer attention to prevent user abandonment.

---

### **2. Releases**  
**✅ v2026.8.1** – Released today.  
- **Key Changes**: Enhanced cron job handling, improved plugin runtime isolation, and updates to native audio streaming support.
- **Breaking Changes & Migration Notes**:
  - **Critical Upgrade Risk**: Multiple users report that `2026.7.1-2 → 2026.8.1` upgrades brick the Gateway due to incomplete config migrations (see [#133813](https://github.com/openclaw/openclaw/issues/133813), [#133999](https://github.com/openclaw/openclaw/issues/133999)).
  - **Secret Redaction Bug**: Config migrations now replace *all* inline secrets (e.g., Discord tokens, API keys) with `__OPENCLAW_REDACTED__`, rendering some channels non-functional ([#134169](https://github.com/openclaw/openclaw/issues/134169)).
  - **Cron Job Quarantine**: Valid legacy cron jobs are incorrectly flagged as `invalid-schedule` and silently dropped ([#133347](https://github.com/openclaw/openclaw/issues/133347)).
- **Recovery Guidance**: If auto-update fails, use a local coding harness for diagnostics and manual verification. Always back up configuration before upgrading.

---

### **3. Project Progress**  
**🟢 Merged/Closed PRs (Today)**:  
- **[PR #134584](https://github.com/openclaw/openclaw/pull/134584)**: Refreshed native app locales (iOS/macOS) – minor but important for international users.  
- **[PR #134586](https://github.com/openclaw/openclaw/pull/134586)**: Pinned promotional pricing fixtures to avoid test failures post-September 1, 2026.  
- **[PR #134253](https://github.com/openclaw/openclaw/pull/134253)**: Fixed npm install recovery from stale launchers – improves installer resilience.  
- **[PR #126424](https://github.com/openclaw/openclaw/pull/126424)**: Ensured conversation delivery stays within agent bindings – fixes multi-agent misrouting.  
- **[PR #133358](https://github.com/openclaw/openclaw/pull/133358)**: Preserves grep matches with byte-form paths (e.g., non-UTF8 filenames) – crucial for robust file system tools.

These reflect ongoing efforts to stabilize core workflows, fix edge-case data handling, and improve tooling reliability.

---

### **4. Community Hot Topics**  
Top 5 most discussed issues today highlight systemic instability and user frustration:

1. **[#91588](https://github.com/openclaw/openclaw/issues/91588)**: **Critical Memory Leak** – RSS grows from 350MB to 15.5GB over days, causing OOM crashes. High comment count (23) and severity rating (🪞 diamond lobster). Affects long-running gateways; likely tied to event loop or cache management.
2. **[#133813](https://github.com/openclaw/openclaw/issues/133813)**: **Upgrade Crash Loop** – `2026.8.1` bricks macOS LaunchAgent installs; `doctor --fix` blocked by `ExecApprovalsMigrationRequiredError`. Reported by multiple users; indicates flawed migration path.
3. **[#134169](https://github.com/openclaw/openclaw/issues/134169)**: **Secrets Redaction Bug** – All inline secrets replaced with `__OPENCLAW_REDACTED__` after migration. High impact on production deployments using Discord, Slack, etc.
4. **[#133347](https://github.com/openclaw/openclaw/issues/133347)**: **Cron Job Data Loss** – Legacy automation inventory quarantined as invalid; active jobs silently dropped post-upgrade.
5. **[#134445](https://github.com/openclaw/openclaw/issues/134445)**: **Workspace Migration Hang** – Zero-byte attestation files block `doctor --fix`, forcing manual cleanup.

> 🔍 **Underlying Need**: Users demand **predictable, safe upgrades** with clear rollback paths. Current migration logic is fragile and opaque—especially for enterprise and multi-agent setups.

---

### **5. Bugs & Stability**  
Ranking by severity and impact:

| Issue | Severity | Impact | Status | Fix PR? |
|------|----------|--------|--------|--------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 🦞 Diamond Lobster (P1) | Memory leak → OOM → crash loops | Open | ❌ No PR |
| [#133813](https://github.com/openclaw/openclaw/issues/133813) | 🦞 Diamond Lobster (P1) | Upgrade breaks gateway startup | Open | ❌ No PR |
| [#134169](https://github.com/openclaw/openclaw/issues/134169) | 🦞 Diamond Lobster (P0) | Secrets redacted → channel failure | Open | ❌ No PR |
| [#133347](https://github.com/openclaw/openclaw/issues/133347) | 🦞 Diamond Lobster (P1) | Cron jobs lost silently | Open | ❌ No PR |
| [#134445](https://github.com/openclaw/openclaw/issues/134445) | 🦞 Diamond Lobster (P1) | Workspace migration hangs | Open | ❌ No PR |

> ⚠️ **Pattern**: 5+ P1/Diamond Lobster bugs reported today, all related to **upgrade/migration failures**, **state corruption**, or **resource leaks**. These are not isolated incidents—they point to systemic weaknesses in state management and backward compatibility.

---

### **6. Feature Requests & Roadmap Signals**  
High-priority feature signals emerging from user needs:

- **Telegram Guest/Bot-to-Bot Support** ([#79077](https://github.com/openclaw/openclaw/issues/79077)): 13 comments, 8 👍. Telegram’s new platform features are live; OpenClaw must catch up.
- **Built-in Headless Browser** ([#53763](https://github.com/openclaw/openclaw/issues/53763)): 7 comments, requested for reliable JS-rendered page access without external dependencies.
- **Topic Session Families** ([#90916](https://github.com/openclaw/openclaw/issues/90916)): 10 comments, seeks named context lanes for one assistant across topics—critical for professional workflow organization.
- **System-Agent Session Key Isolation** ([#131807](https://github.com/openclaw/openclaw/issues/131807)): 5 comments. Shared Codex session keys cause fresh turn rejection—highly relevant for multi-agent security.

> 💡 **Prediction**: These will be prioritized in **v2026.9.x** as they address core usability and scalability demands.

---

### **7. User Feedback Summary**  
Real-world pain points reported by users:

- **"I upgraded to 2026.8.1 and my gateway won’t start. `doctor --fix` says 'Legacy exec approvals exist' but I never ran that command."** – [User, #133999]
- **"My WhatsApp image messages take 3 minutes to process. It’s like the lane is wedged."** – [User, #96834]
- **"After upgrade, all my cron jobs vanished. No warning, no log. Just gone."** – [User, #133347]
- **"Discord bot stopped working. Token shows as missing even though it’s in config."** – [User, #134169]

> ✅ **Satisfaction**: Users appreciate deep customization, plugin extensibility, and multi-channel support.  
> ❌ **Dissatisfaction**: Upgrades feel risky; state corruption is common; debugging requires advanced CLI skills.

---

### **8. Backlog Watch**  
Critical long-standing issues needing maintainer attention:

- **[#65374](https://github.com/openclaw/openclaw/issues/65374)**: Dreaming system contaminates agent identity in multi-agent setups – 8 comments, 2 👍. Cross-agent memory pooling is a serious security risk.
- **[#102175](https://github.com/openclaw/openclaw/issues/102175)**: Embedded prompt cache breaks across session boundaries – 18 comments, 1 👍. Impacts performance and consistency in long sessions.
- **[#115424](https://github.com/openclaw/openclaw/issues/115424)**: Gateway V8 heap OOM → crash loop → 7-core-dump loop – 6 comments, 0 👍. High-risk regression affecting large-scale deployments.
- **[#131340](https://github.com/openclaw/openclaw/issues/131340)**: Code Mode mutation recovery lacks provenance contract – 6 comments. Post-failure uncertainty undermines trust in automated code actions.

> 🔔 **Action Required**: These are **not stale**—they are high-impact, recurring problems. Maintainers should triage and assign ownership to prevent further degradation.

---  
*Data source: GitHub repository openclaw/openclaw | Updated: 2026-09-01*

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Ecosystem – 2026-09-01**

---

### **1. Ecosystem Overview**  
The open-source personal AI assistant and agent ecosystem in Q3 2026 is marked by rapid evolution, architectural divergence, and increasing focus on reliability, multi-agent coordination, and enterprise readiness. Projects are moving beyond basic chat interfaces toward modular, composable systems with strong security boundaries, extensible plugin models, and robust state management. While innovation accelerates—especially in WASM integration, memory lifecycle control, and cross-platform parity—many projects face growing pains due to aggressive feature velocity without sufficient stabilization or migration safety. The landscape reflects a maturing industry where users demand predictable upgrades, data integrity, and seamless team collaboration.

---

### **2. Activity Comparison**

| Project | Issues (Last 24h) | Pull Requests (Last 24h) | Release Status | Health Score |
|--------|------------------|--------------------------|----------------|--------------|
| **OpenClaw** | 448 | 500 | ✅ v2026.8.1 (critical issues) | ⚠️ Moderate (high friction) |
| **Hermes Agent** | 50 | 50 | 🆕 v0.21.0 ("Pantheon Release") | 🔹 Mixed (strong momentum, UX gaps) |
| **IronClaw** | 12 | 20 | ❌ No new release | ✅ Strong (stable progress) |
| **QwenPaw** | 38 | 40 | 🆕 v2.2.0-beta.5 (beta iteration) | ✅ Strong (rapid development) |
| **ZeroClaw** | 39 | 50 | ❌ No new release | 🔴 High activity, moderate stability |

> *Note: OpenClaw’s high issue count signals instability; ZeroClaw and QwenPaw show intense internal refinement; IronClaw maintains steady, focused progress.*

---

### **3. OpenClaw's Position**  
OpenClaw stands out as the most **user-facing and widely adopted** project, with the largest community engagement and highest volume of real-world usage. Its **multi-channel support**, deep customization, and mature plugin ecosystem give it a significant edge over peers in production deployment scenarios. However, its technical approach—prioritizing backward compatibility and broad integrations—has led to **increasing architectural debt**, evident in today’s cascade of upgrade failures and state corruption bugs. Unlike ZeroClaw’s forward-looking modularity or QwenPaw’s team-centric design, OpenClaw remains **monolithic in core runtime behavior**, making migrations fragile and debugging complex. Despite this, its user base is larger than any other project, reflecting strong early-mover advantage and network effects.

---

### **4. Shared Technical Focus Areas**  
Across all five projects, several critical technical needs are emerging:

| Need | Projects Involved | Specific Requirements |
|------|-------------------|------------------------|
| **Safe & Predictable Upgrades** | OpenClaw, Hermes Agent, QwenPaw | Rollback paths, config migration safeguards, zero-downtime transitions |
| **Memory State Integrity** | OpenClaw, ZeroClaw, QwenPaw | Persistent session state, non-leaking caches, auditability |
| **Robust Tool Discovery & Failure Handling** | IronClaw, ZeroClaw, QwenPaw | Granular error reporting, partial catalog recovery, schema validation |
| **Cross-Platform Parity (esp. Windows)** | Hermes Agent, ZeroClaw | Native app stability, asyncio compatibility, no Unix-only assumptions |
| **Modular Plugin Architecture** | ZeroClaw, IronClaw, QwenPaw | WASM support, sandboxing, versioned contracts, dependency isolation |

> These shared concerns indicate a **convergence toward platform-level resilience**, signaling that future success will depend less on novelty and more on operational trustworthiness.

---

### **5. Differentiation Analysis**

| Dimension | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|---------|----------|--------------|----------|---------|----------|
| **Target User** | Power users, DIY builders | Advanced developers, teams | Enterprise workflows, scalability | Teams, collaborative ops | Architects, system designers |
| **Core Focus** | Multi-agent orchestration, extensibility | Cross-gateway transport, provider neutrality | UI consistency, performance optimization | Multi-tenancy, Hub-based collaboration | Modularity, composability, security |
| **Architecture** | Monolithic + plugins | Layered (runtime + gateway) | Rust-based, event-driven | Hybrid (agent + hub) | Modular (WASM, decoupled memory) |
| **Key Innovation** | Deep channel integrations | Bot Group Chats, ConnectRPC | Progressive replies, compact tool payloads | Hub multi-tenancy, side-questions | RFC-driven design, memory lifecycle separation |

> **Differentiating Insight**: OpenClaw leads in **deployment breadth**, while ZeroClaw pioneers **systemic design rigor**. QwenPaw is pivoting toward **team-scale operations**, IronClaw into **UI/UX maturity**, and Hermes Agent into **interoperability abstraction**.

---

### **6. Community Momentum & Maturity**  

- **Rapid Iteration (Beta/Release Phase):**  
  - **QwenPaw** (v2.2.0-beta.5), **Hermes Agent** (v0.21.0), and **OpenClaw** (v2026.8.1) are in **active release cycles**, driven by high community demand for new features.
  - **ZeroClaw** and **IronClaw** are in **stabilization mode**—fewer releases, deeper focus on internal architecture and long-term design.

- **Stabilization & Refinement:**  
  - **IronClaw** shows the most consistent, low-friction progress—ideal for projects prioritizing CI/CD health and sustainable development.
  - **ZeroClaw** is undergoing a **strategic pivot**, with RFCs dominating discussions—indicating a maturity phase focused on foundational decisions.

- **High Friction / Risk Zones:**  
  - **OpenClaw** and **Hermes Agent** suffer from **critical regression risks** post-release, suggesting under-resourced testing or inadequate rollback planning.

> **Trend**: The ecosystem is bifurcating between **feature-rich beta-stage projects** (QwenPaw, OpenClaw) and **architecturally mature, design-first platforms** (ZeroClaw, IronClaw).

---

### **7. Trend Signals**  
Based on community feedback and technical direction, the following industry trends are crystallizing:

1. **Shift from Individual to Team-Centric AI Workflows**  
   → Evident in QwenPaw’s Hub multi-tenancy push (#7318), Hermes Agent’s Bot Group Chats (#97681), and IronClaw’s unified session events.  
   *Value for developers: Build for collaboration, not just personal use.*

2. **Demand for Architectural Transparency & Governance**  
   → ZeroClaw’s RFC-heavy discourse, IronClaw’s `DESIGN.md` adoption, and OpenClaw’s need for clear migration paths signal rising expectations for **design documentation and change governance**.  
   *Value: Reduces onboarding friction and prevents "black box" state corruption.*

3. **Security-First Design Is Non-Negotiable**  
   → Multiple projects now prioritize **plugin allowlists**, **memory isolation**, **config integrity**, and **approval flows**.  
   *Value: Enables enterprise adoption and compliance-ready deployments.*

4. **WASM as the Future of Extensibility**  
   → ZeroClaw’s WASM plugin RFCs (#10076), IronClaw’s WebUI integration, and QwenPaw’s embedded tools point to WASM becoming the de facto standard for secure, portable extensions.  
   *Value: Developers can build plugins once, deploy anywhere.*

5. **AI-Augmented Development Practices Are Maturing**  
   → ZeroClaw’s AI-assisted PR review pilot (#9330) and QwenPaw’s Auto Fin memory source reflect a shift toward **AI-native dev workflows**.  
   *Value: Faster, safer code reviews and self-healing systems.*

---

### ✅ **Conclusion for Decision-Makers**  
- **Choose OpenClaw** for maximum flexibility and existing integrations—but expect upgrade risk.  
- **Choose QwenPaw** if building team-focused AI operations platforms.  
- **Choose ZeroClaw** for long-term system integrity and modular design.  
- **Choose IronClaw** for stable, performant UI/UX with strong engineering discipline.  
- **Watch Hermes Agent** closely: its cross-gateway model may define next-gen agent interoperability.

**The future belongs to systems that balance innovation with operational safety—where every upgrade is predictable, every failure is traceable, and every user feels in control.**

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-09-01**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active, with 50 issues and 50 pull requests updated in the last 24 hours—indicating robust community engagement and ongoing development momentum. The release of **v0.21.0 (v2026.8.31)** marks a major milestone: the "Pantheon Release," which closed ~2,100 issues and incorporated over 5,800 commits from more than 760 contributors. This reflects strong forward progress in stability, cross-platform support, and core agent capabilities. However, recent activity also reveals growing pains around session state integrity, message delivery reliability, and Windows-native compatibility.

---

### **2. Releases**  
**🆕 v2026.8.31 – Hermes Agent v0.21.0 ("The Pantheon Release")**  
- **Release Date:** August 31, 2026  
- **Key Highlights:**  
  - Over **~5,800 commits**, **~2,475 merged PRs**, and **~5,680 files changed** since v0.20.0.  
  - Closed **~2,100 issues**, including critical bugs in session management, compression, and platform integrations.  
  - Introduced foundational work for **Bot Group Chats**, **Desktop Bot Mode**, and **plugin-agnostic runtime APIs**.  
  - Enhanced **cross-gateway transport**, **provider neutrality**, and **security boundary enforcement**.  
- **Migration Notes:**  
  - No breaking changes explicitly documented; however, new `api_mode: grokbot` and `AgentRuntime plugin API` suggest future deprecation of legacy provider patterns.  
  - Users on Windows may encounter `AttributeError: module 'asyncio' has no attribute 'start_unix_server'` (#99895) — requires patching or environment isolation.  

🔗 [GitHub Release v0.21.0](https://github.com/nousresearch/hermes-agent/releases/tag/v2026.8.31)

---

### **3. Project Progress**  
Today saw **18 PRs merged/closed**, reflecting rapid stabilization post-v0.21.0 launch. Key advancements include:  
- ✅ **Session & State Management:** Fixes to prevent stale model pins (#99892), dead runtime focus stealing (#99891), and hidden pane interference (#99881).  
- ✅ **Security & Compatibility:** Patched `key_cmd` credential resolution (#99893), enforced plugin allowlists (#99894), and improved auth policy hooks (#99898).  
- ✅ **Platform Stability:** Resolved `launchd` plist misclassification (#99896), fixed `SIGTERM/SIGINT` handling in Electron (#98154), and stabilized drain marker polling (#99884).  
- ✅ **Feature Enablement:** Added `/m` mobile PWA route (#98866), read-only email mode (#99900), and `reopen` verb for Kanban boards (#99883).  

These merges signal strong post-release triage and a focus on user experience polish across desktop, CLI, and gateway layers.

---

### **4. Community Hot Topics**  
Top 3 most commented items reveal urgent pain points and innovation demand:

| Issue/PR | Comments | Link | Summary |
|--------|---------|------|--------|
| **#66616** `[skills-index-watchdog] Skills index is stale or degraded` | 132 | [Issue #66616](https://github.com/nousresearch/hermes-agent/issues/66616) | Critical degradation in documentation pipeline: skills index outdated by 29.8h (vs. 26h limit). Blocks tool discovery. |
| **#99887** `feat(providers): unofficial Grok Bot ConnectRPC transport` | 2 | [PR #99887](https://github.com/nousresearch/hermes-agent/pull/99887) | High-demand feature: direct support for Cursor’s Grok Bot via ConnectRPC, bypassing OpenAI proxy. |
| **#99895** `Windows: AttributeError: module 'asyncio' has no attribute 'start_unix_server'` | 1 | [Issue #99895](https://github.com/nousresearch/hermes-agent/issues/99895) | Regression in v0.21.0 affecting Windows users—critical for native app adoption. |

> 🔍 **Underlying Need:** Users are demanding **native Windows parity**, **real-time tool availability**, and **seamless integration with next-gen AI providers** (e.g., Grok Bot). The spike in comments on `skills-index` and `Grok Bot` suggests growing reliance on external tools and ecosystem discoverability.

---

### **5. Bugs & Stability**  
Critical stability issues reported today, ranked by severity:

| Severity | Issue | Description | Fix PR? |
|--------|-------|-------------|--------|
| **P1** | #99882 (`[Bug]: Queued follow-ups are silently orphaned`) | Messages lost during context compression; no logs or recovery. High risk of data loss. | ❌ No fix yet |
| **P1** | #99884 (`fix(gateway): keep the drain-marker read off the event loop`) | Blocking filesystem reads every second → ~86K/day on event loop → performance degradation. | ✅ **PR #99884 merged** |
| **P1** | #99895 (`Windows: AttributeError: start_unix_server`) | Gateway fails to start on Windows due to Unix-specific asyncio call. | ❌ Not yet patched |
| **P2** | #99864 (`[Bug][Desktop]: composer shows paid model while session serves free variant`) | UI misrepresentation leads to unexpected usage costs. | ❌ No fix |
| **P2** | #99854 (`[Bug]: second Slack message silently dropped`) | Message loss during long tool-call chains → silent failure. | ❌ No fix |

> ⚠️ **Risk Profile:** Session state corruption, message loss, and silent failures dominate. Desktop and Windows platforms remain unstable despite v0.21.0’s improvements.

---

### **6. Feature Requests & Roadmap Signals**  
Emerging signals for upcoming releases:

| Feature | Status | Signal Strength | Rationale |
|--------|--------|----------------|---------|
| **Bot Group Chats persist after Desktop close** (#97681) | Open | 🔥 High | Core use case for persistent automation teams. Already built-in gateways; needs UI/session glue. |
| **Emergency Preflight Compression** (#66390) | Open | 🔥 High | Direct response to token overflow edge cases. Likely to be prioritized post-stabilization. |
| **Sticky user message opt-out toggle** (#80146) | Open | 🟡 Medium | UX refinement requested repeatedly; likely to be included in next desktop update. |
| **Unofficial Grok Bot support** (#99886, #99887) | Open + PR | 🔥 High | Demonstrates strong community-driven demand. PR already submitted; likely to be accepted. |

> 📌 **Prediction:** v0.22.0 (Q4 2026) will prioritize **session resilience**, **Grok Bot integration**, and **Bot Group Chat persistence**, with desktop UX refinements.

---

### **7. User Feedback Summary**  
Real-world pain points emerging from issue reports:  
- **"I can’t trust what I see in the UI."**  
  Multiple users report **UI vs. actual model mismatch** (e.g., paid model shown but free one used — #99864), leading to billing surprises.  
- **"My messages disappear."**  
  Silent message drops in Slack/Discord (#99854, #99882) cause frustration and loss of context.  
- **"It breaks on Windows."**  
  Native app crashes and startup failures (#99895) hinder adoption among developers using Windows machines.  
- **"I lose my chat history when switching profiles."**  
  Lack of profile-aware session persistence (#77952) disrupts workflow continuity.  

> 💬 **Satisfaction Level:** Mixed. While power users appreciate depth and extensibility, usability and reliability gaps are creating friction—especially for non-technical or Windows users.

---

### **8. Backlog Watch**  
Long-standing, high-impact issues requiring maintainer attention:

| Issue | Age | Comments | Priority | Status |
|------|-----|----------|----------|--------|
| **#66616** `[skills-index-watchdog] Skills index is stale` | 13 weeks | 132 | **P3 (High)** | ⚠️ **Critical** — blocks tool discovery; affects all users. Needs automated monitoring. |
| **#97681** `Bot Group Chats should keep working after Desktop closes` | 32 days | 9 | **P2 (Medium)** | 🛠️ **Ready for implementation** — foundation exists; just needs UI binding. |
| **#99895** `Windows: AttributeError: start_unix_server` | 1 day | 1 | **P1 (Critical)** | 🚨 **Regression in v0.21.0** — must be patched immediately. |
| **#99882** `Queued follow-ups are silently orphaned` | 1 day | 1 | **P1 (Critical)** | 💣 **Data loss risk** — urgent fix needed. |
| **#94726** `Tracking: Desktop Bot Mode — open bugs and issue classes` | 1 month | 3 | **P3 (High)** | 📋 **Umbrella tracker** — indicates broader instability in Bot Mode. |

> 🔎 **Action Required:** Maintainers should prioritize **Windows compatibility fixes**, **message delivery reliability**, and **skills index health** before further feature rollouts.

---  
*Generated: 2026-09-01 | Data Source: [Hermes Agent GitHub](https://github.com/nousresearch/hermes-agent)*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# **IronClaw Project Digest — 2026-09-01**

---

### **1. Today's Overview**  
The IronClaw project remains highly active with a robust pace of development across UI, LLM tooling, and core infrastructure. Over the past 24 hours, 20 pull requests were updated (16 open, 4 merged/closed), alongside 12 new issues (10 open, 2 closed), indicating strong momentum in feature integration and issue triage. Key focus areas include the final phases of the WebUI Design System rollout (Phases 2–5), performance optimizations in GitHub integrations, and critical fixes for model capability discovery and tool catalog stability. The absence of new releases suggests that major changes are still in review or integration phase, with significant work progressing toward v1.4.0.

---

### **2. Releases**  
No new releases have been published as of 2026-09-01. The project is likely preparing for a v1.4.0 release, which will incorporate multiple Epic-level updates including DESIGN.md governance, M3 reskin, and enhanced progressive reply support. No breaking changes or migration notes are currently documented, but maintainers are actively integrating design system components via PRs like [#8005](https://github.com/nearai/ironclaw/pull/8005) and [#8011](https://github.com/nearai/ironclaw/pull/8011).

---

### **3. Project Progress**  
Several key PRs were merged or closed today, advancing core capabilities:

- **PR #7995** ([closed](https://github.com/nearai/ironclaw/pull/7995)): Stabilized main branch coverage checks, resolving stale inbox notifications and improving CI reliability.
- **PR #7992** ([closed](https://github.com/nearai/ironclaw/pull/7992)): Unified bounded integration execution, reducing test overhead by consolidating runs into a single `cargo nextest` invocation with fixed concurrency.
- **PR #7993** ([closed](https://github.com/nearai/ironclaw/pull/7993)) & **PR #7997** ([closed](https://github.com/nearai/ironclaw/pull/7997)): Dependent version bumps (via Dependabot) improved dependency hygiene across Rust crates and web assets.
- **PR #7988** ([closed](https://github.com/nearai/ironclaw/pull/7988)): Automated refresh of the codebase knowledge graph, ensuring agent memory stays current with latest source state.

These merges reflect ongoing efforts to stabilize CI/CD pipelines, improve observability, and keep dependencies up-to-date.

---

### **4. Community Hot Topics**  
Top-tier engagement centers on two high-impact themes:

#### 🔥 **Design System Evolution (Epic #7781 & #7782)**  
- **Issue #7781** ([open](https://github.com/nearai/ironclaw/issues/7781)): *Epic: Design System Phases 2–3* – Now tracking both `DESIGN.md` governance and theme reskin. High visibility due to its foundational role in future UI consistency.
- **PR #7994** ([open](https://github.com/nearai/ironclaw/pull/7994)): Adds `DESIGN.md` as source of truth with Storybook integration — critical for developer alignment.
- **PR #8011** ([open](https://github.com/nearai/ironclaw/pull/8011)): Implements M3 reskin with new color palette (`#6b4eff`, `#00e5ff`) and dark mode derived from OKLab — a major visual overhaul.

> 💬 **Underlying Need**: Teams require a unified, scalable design language to enable consistent, accessible, and maintainable UI across agents and tools.

#### ⚙️ **Tool Discovery & Performance Optimization**  
- **Issue #7986** ([open](https://github.com/nearai/ironclaw/issues/7986)): GitHub `list_repos` returns 81 raw fields per repo (~519 KB for 98 repos) — excessive data transfer.
- **PR #7996** ([open](https://github.com/nearai/ironclaw/pull/7996)): Addresses this by compacting responses to only model-relevant fields.
- **Issue #8008** ([open](https://github.com/nearai/ironclaw/issues/8008)): A single blocked tool causes entire hosted-MCP catalog to be discarded — a systemic risk.

> 💬 **Underlying Need**: Users demand efficient, resilient, and granular tool discovery — especially under load or network constraints.

---

### **5. Bugs & Stability**  
Critical stability issues reported today include:

| Severity | Issue | Summary | Fix PR? |
|---------|-------|--------|--------|
| 🟠 **High** | [Issue #8008](https://github.com/nearai/ironclaw/issues/8008) | Hosted-MCP discovery discards **entire catalog** if one tool triggers egress leak block | ❌ No fix yet |
| 🟠 **High** | [Issue #8009](https://github.com/nearai/ironclaw/issues/8009) | MCP egress errors collapse to generic `"response_error"` — hides root cause | ❌ No fix yet |
| 🔴 **Critical** | [Issue #7986](https://github.com/nearai/ironclaw/issues/7986) | `github.list_repos` returns 81 fields per repo → 519 KB payload | ✅ Partial fix in progress via [PR #7996](https://github.com/nearai/ironclaw/pull/7996) |
| 🟡 **Medium** | [Issue #7987](https://github.com/nearai/ironclaw/issues/7987) | `flatten_top_level` silently discards non-whitelisted schema constraints | ✅ Fixed in [PR #7999](https://github.com/nearai/ironclaw/pull/7999) |

> ⚠️ **Note**: Two high-severity bugs (#8008, #8009) remain unpatched and impact core agent functionality—particularly discovery and diagnostics.

---

### **6. Feature Requests & Roadmap Signals**  
Emerging roadmap signals point to three major upcoming enhancements:

1. **Progressive Reply Publication (v1.4.0)**  
   - Tracked via [Issue #8007](https://github.com/nearai/ironclaw/issues/8007) and [PR #8006](https://github.com/nearai/ironclaw/pull/8006).  
   - Enables durable, incremental replies with native Slack Agent UI support — critical for real-time user experience.

2. **Unified Session Event Transport**  
   - [PR #8010](https://github.com/nearai/ironclaw/pull/8010) implements typed stream contracts and multiplexed WebSocket for run-completion notifications — signaling deeper WebUI integration.

3. **Model Capability Preservation**  
   - [PR #7998](https://github.com/nearai/ironclaw/pull/7998) introduces `list_model_catalog()` to preserve NEAR AI model modalities (text/image input/output). This will enable smarter model selection in agent workflows.

> ✅ **Prediction**: These features are likely to ship in **v1.4.0**, pending review and testing.

---

### **7. User Feedback Summary**  
User pain points observed from recent issues reflect real-world usage challenges:

- **Excessive Data Transfer**: Users report bloated tool responses (e.g., `github.list_repos`) leading to latency and cost concerns — especially in low-bandwidth environments.
- **Opaque Failures**: Silent failures in tool discovery (e.g., #8008) frustrate debugging; users need better visibility into why catalogs fail to load.
- **Inconsistent Tool Behavior**: Schema flattening silently discards constraints (#7987), leading to unexpected LLM behavior — a direct usability risk.
- **Visual Inconsistency**: With the M3 reskin underway, users expect more cohesive, modern UI — feedback indicates demand for consistent styling and accessible icons (see [PR #7997](https://github.com/nearai/ironclaw/pull/7997)).

> ✅ **Satisfaction Signal**: Positive sentiment around design system maturity and documentation clarity (e.g., `DESIGN.md` adoption).

---

### **8. Backlog Watch**  
Key long-standing or high-priority items requiring maintainer attention:

| Issue | Status | Priority | Link |
|------|--------|----------|------|
| [Issue #7782](https://github.com/nearai/ironclaw/issues/7782) | Open (Epic) | 🔴 High | [Epic: Design System Phases 4–5](https://github.com/nearai/ironclaw/issues/7782) |
| [Issue #8008](https://github.com/nearai/ironclaw/issues/8008) | Open | 🔴 Critical | [Hosted-MCP discovery leaks discard whole catalog](https://github.com/nearai/ironclaw/issues/8008) |
| [Issue #8009](https://github.com/nearai/ironclaw/issues/8009) | Open | 🔴 Critical | [MCP egress errors flatten to "response_error"](https://github.com/nearai/ironclaw/issues/8009) |
| [Issue #7038](https://github.com/nearai/ironclaw/issues/7038) | Closed (re-scoped) | 🟡 Medium | [Phase 1: Storybook + design-system catalog](https://github.com/nearai/ironclaw/issues/7038) |

> ⚠️ **Urgent Attention Needed**: Two critical discovery-related bugs (#8008, #8009) remain unresolved despite clear impact on agent reliability. Maintainers should prioritize triage and mitigation.

--- 

**Next Update**: 2026-09-02  
*Data last refreshed: 2026-09-01, 00:00 UTC*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-09-01**

---

### **1. Today's Overview**  
QwenPaw is experiencing a high velocity of development activity, with **38 issues** and **40 pull requests** updated in the past 24 hours—indicating strong momentum ahead of the v2.2.0 stable release. The project is actively addressing critical stability issues, particularly around memory management, TLS stack compatibility, and agent loop behavior. A new beta version (v2.2.0-beta.5) was released today, reflecting rapid iteration on core functionality. Community engagement remains robust, especially around multi-tenant support and integration with third-party agents.

---

### **2. Releases**  
**New Releases: 2**  
- **[v2.2.0-beta.5](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.0-beta.5)**  
  - ✅ **Fixed**: Contract checks made portable and complete (`fix(channels)` via #7267)  
  - ✅ **Fixed**: Embedding reindex now explicit and scoped to avoid silent failures (`fix(memory)` via #7133)  
  - 📌 **Note**: This release includes incremental improvements from beta.4 but introduces a known issue with Hub connectivity to local model services (see Issue #7445).  

- **[v2.2.0-beta.4](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.0-beta.4)**  
  - ✅ **Fixed**: Oversized single-line tool results now bounded to prevent UI bloat (`fix(context)` via #7331)  
  - ✅ **Test alignment**: TC-AGT-06 test now matches current agent scope (`test(agent-stats)` via #7021)  
  - ✅ **Desktop fix**: Unified runtime handling for desktop environment (`fix(desktop)` via #7021)  

> 🔗 *Migration Note*: Users upgrading from `beta.1` to `beta.5` should expect changes in embedding index behavior—reindexing is now manual. Refer to PR #7133 for details.

---

### **3. Project Progress**  
**Merged/Closed PRs (Today):**  
- ✅ [#7444](https://github.com/agentscope-ai/QwenPaw/pull/7444): Unifies ReMe slash commands into `/reme <action>` — streamlining memory interaction  
- ✅ [#7441](https://github.com/agentscope-ai/QwenPaw/pull/7441): Adds Auto Fin as a scheduled long-term memory source; upgrades ReMe to `0.4.1.11`  
- ✅ [#7438](https://github.com/agentscope-ai/QwenPaw/pull/7438): Version bump to `2.2.0-beta.5`  
- ✅ [#7423](https://github.com/agentscope-ai/QwenPaw/pull/7423): Version bump to `2.2.0-beta.4`  
- ✅ [#7267](https://github.com/agentscope-ai/QwenPaw/pull/7267): Fixed portability and completeness of channel contract checks  
- ✅ [#7133](https://github.com/agentscope-ai/QwenPaw/pull/7133): Made embedding reindex explicit and scoped — major stability improvement  

These merges reflect focused efforts on **memory system reliability**, **agent lifecycle control**, and **toolchain consistency**.

---

### **4. Community Hot Topics**  
The most active discussions center on **multi-tenancy**, **integration flexibility**, and **UI/UX polish**:

- **[Issue #7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)**: *“QwenPaw Hub, the multi-tenant edition, is coming in 2.2.0: what should we build next?”*  
  → **15 comments**, 2 upvotes. The community is eager for team collaboration features. This signals a strategic pivot from personal AI assistant to **team-centric AI operations platform**.

- **[Issue #7445](https://github.com/agentscope-ai/QwenPaw/issues/7445)**: *Hub fails to connect to local model service (e.g., `http://127.0.0.1:8088/v1`)*  
  → Reported by multiple users; likely due to network or proxy misconfiguration. High visibility suggests early adopters are testing Hub’s edge cases.

- **[PR #7444](https://github.com/agentscope-ai/QwenPaw/pull/7444)**: Unified ReMe command interface  
  → Opened by core contributor jinliyl; reflects deep UX refinement in memory workflows. Community is likely to appreciate streamlined access.

> 💡 **Underlying Need**: Users want **predictable, scalable, and secure multi-user deployment**—not just individual tools.

---

### **5. Bugs & Stability**  
Critical stability issues reported today include:

| Severity | Issue | Summary | Fix PR? |
|---------|-------|--------|--------|
| 🔴 High | [#7420](https://github.com/agentscope-ai/QwenPaw/issues/7420) | Tool results lost + doom-loop protection triggered after `write_file` | ❌ No fix yet |
| 🔴 High | [#7445](https://github.com/agentscope-ai/QwenPaw/issues/7445) | QwenPaw Hub fails to connect to local model API (e.g., `127.0.0.1:8088`) | ❌ No fix yet |
| 🟡 Medium | [#7417](https://github.com/agentscope-ai/QwenPaw/issues/7417) | Console streams duplicate text chunks mid-stream | ✅ Partial fix in progress (PR #7417 not merged) |
| 🟡 Medium | [#7408](https://github.com/agentscope-ai/QwenPaw/issues/7408) | Feishu channel config unexpectedly cleared → `KeyError('channel not found: feishu')` | ⚠️ Possible race condition during config reload |

> ⚠️ **Notable Risk**: The `write_file` → loop stall bug may affect workflow integrity in production use. Immediate triage needed.

---

### **6. Feature Requests & Roadmap Signals**  
Top user-driven feature requests suggest future direction:

- **[Issue #7398](https://github.com/agentscope-ai/QwenPaw/issues/7398)**: Add `/btw [question]` side-question command (like Claude Code)  
  → 2 comments, no votes. Signal: users want **non-intrusive, ephemeral chat interactions** without cluttering history.

- **[Issue #7436](https://github.com/agentscope-ai/QwenPaw/issues/7436)**: Add `tool_call_format` config for compact display in IM channels (Feishu/DingTalk)  
  → 1 comment. Indicates demand for **cleaner channel output**, especially in enterprise comms.

- **[Issue #7396](https://github.com/agentscope-ai/QwenPaw/issues/7396)**: Status update on Claude Code as third-party agent harness  
  → 2 comments. Strong interest in **third-party agent integration**—suggests roadmap expansion beyond Codex/Qoder.

> 📈 **Prediction**: The next stable release (v2.2.0) will likely include **Hub multi-tenancy**, **side-question command**, and **enhanced channel formatting**.

---

### **7. User Feedback Summary**  
Real-world pain points emerging from issues:

- **Long startup times** (e.g., #7360: 4-minute desktop startup) → indicates performance bottlenecks in plugin loading or event loop blocking.
- **Silent failures in tool execution** (e.g., #7431: “empty response” with zero usage) → undermines trust in agent reliability.
- **Inconsistent state persistence** (e.g., #7377: Loop mode resets after task) → frustrates power users managing complex workflows.
- **Unintuitive file/path handling** (e.g., screenshots saved in wrong dir → #7439) → shows friction in developer experience.

> ✅ **Positive note**: Users are deeply engaged—many report detailed logs and repro steps, indicating high investment in the platform.

---

### **8. Backlog Watch**  
High-priority items requiring maintainer attention:

- **[Issue #7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)**: Multi-tenant Hub roadmap discussion — *community-led design input needed*  
- **[Issue #7420](https://github.com/agentscope-ai/QwenPaw/issues/7420)**: Agent loop protection triggered after `write_file` — *critical workflow blocker*  
- **[Issue #7445](https://github.com/agentscope-ai/QwenPaw/issues/7445)**: Hub cannot connect to local model — *blocks early adoption*  
- **[PR #7183](https://github.com/agentscope-ai/QwenPaw/pull/7183)**: Workspace-scoped preload configuration — *feature request with clear design intent*  
- **[PR #7435](https://github.com/agentscope-ai/QwenPaw/pull/7435)**: Reduce CI concurrency per PR — *improves dev workflow efficiency*

> 🔍 **Action Item**: Prioritize triage of Hub-related bugs and merge `preload` feature PR to support advanced workspace customization.

---

✅ **Overall Health Score**: **Strong** — Active development, responsive maintainers, growing community demand.  
🚀 **Next Milestone**: v2.2.0 stable release expected within 2–3 weeks, contingent on resolving Hub and loop stability issues.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest — 2026-09-01**

---

### **1. Today's Overview**  
ZeroClaw (github.com/zeroclaw-labs/zeroclaw) remains highly active with 39 open issues and 50 open pull requests updated in the past 24 hours, indicating strong momentum in architectural refinement and feature development. The project is focused on stabilizing core runtime behavior while advancing a major shift toward modular, composable architecture—particularly around WASM plugins, memory lifecycle decoupling, and AI-assisted code review. High-risk RFCs dominate the discussion, signaling deep investment in long-term system integrity and extensibility. No new releases were published today, but several critical fixes are nearing integration.

---

### **2. Releases**  
❌ **No new releases** were published as of 2026-09-01.  
The last release cycle concluded prior to this date, and current focus remains on internal stabilization and architectural validation before next versioning.

---

### **3. Project Progress**  
✅ **Merged/Closed PRs (Today):**  
- **PR #10497** ([fix: pairing-code lifetime controls](https://github.com/zeroclaw-labs/zeroclaw/pull/10497)) – Finalized startup pairing code TTL and dead dashboard fields after shared policy work.  
- **PR #10521** ([fix(config): honor ZEROCLAW_CONFIG_DIR](https://github.com/zeroclaw-labs/zeroclaw/pull/10521)) – Ensures `Config::default()` respects environment override for config directory.

🛠️ **Key Advancements:**  
- **PR #9324** ([feat(a2a): outbound client config, shared wire-model](https://github.com/zeroclaw-labs/zeroclaw/pull/9324)): First phase of A2A (Agent-to-Agent) communication completed with v1.0 wire model and default-closed client config. This sets foundation for secure, standardized agent interoperation.
- **PR #9220–9214** (eval stack): Cumulative improvements to evaluation framework now include live execution mode, comparable run receipts, and sandboxed tool surface enforcement—critical for reproducible testing and security validation.
- **PR #10358** ([feat(channels): add Mattermost approval prompts](https://github.com/zeroclaw-labs/zeroclaw/pull/10358)): Adds essential approval flow support to Mattermost, closing a long-standing gap in enterprise-ready channel integrations.

---

### **4. Community Hot Topics**  
🔥 **Most Active Issues (by comment count):**  

| Issue | Summary | Link |
|------|--------|------|
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | **RFC: Decouple memory lifecycle from storage backends** (24 comments) | [Issue #6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) |
| [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) | **RFC: Separate authoritative memory storage from optional enrichment connectors** (17 comments) | [Issue #9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | **RFC: Computer-use support for desktop screen interaction/input control** (15 comments) | [Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) |

🔍 **Analysis:**  
These top issues reflect a strategic pivot toward **modular, boundary-conscious design**. The community is deeply engaged in defining clear separation between *storage* (durable), *lifecycle* (policy), and *enrichment* (optional). Concurrently, there’s growing interest in **desktop automation capabilities**, suggesting user demand for ZeroClaw to evolve beyond chat into full UI interaction and workflow orchestration.

---

### **5. Bugs & Stability**  
🚨 **Critical Bugs (S0–S1) Reported Today:**  

| Bug | Severity | Description | Fix Status | Link |
|-----|----------|-------------|------------|------|
| [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) | **S0 - Data Loss / Security Risk** | `Config::save()` overwrites large `config.toml` (109KB) with near-empty file (702 bytes) | ❗ Open | [Issue #10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) |
| [#10501](https://github.com/zeroclaw-labs/zeroclaw/issues/10501) | **S1 - Workflow Blocked** | MCP tool-result images fail on OpenAI-compatible providers due to incorrect `role: "tool"` placement | ❗ Open | [Issue #10501](https://github.com/zeroclaw-labs/zeroclaw/issues/10501) |
| [#10513](https://github.com/zeroclaw-labs/zeroclaw/issues/10513) | **S2 - Degraded Behavior** | RPC `sops.run` returns run ID even when no step will execute | ❗ Open | [Issue #10513](https://github.com/zeroclaw-labs/zeroclaw/issues/10513) |

⚠️ **Other Notable Bugs:**  
- [#10505](https://github.com/zeroclaw-labs/zeroclaw/issues/10505): WASM plugin fails with `no matching implementation` due to WIT version skew — high risk for plugin ecosystem stability.  
- [#10506](https://github.com/zeroclaw-labs/zeroclaw/issues/10506): Sequential HTTP calls in WASM plugins intermittently fail due to stale connections — affects reliability of web-fetch tools.

📌 **Note:** Several fixes are in flight (e.g., PR #10521 addresses config path issue), but S0/S1 bugs remain unpatched.

---

### **6. Feature Requests & Roadmap Signals**  
📈 **Emerging Priorities from RFCs:**  

| Feature | RFC | Implication |
|--------|-----|-----------|
| **Decouple memory lifecycle from storage** ([#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)) | High-priority RFC | Foundation for future memory governance, compliance, and auditability. Likely to be in v0.9+ |
| **Composable WASM plugin runtime** ([#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076)) | High-risk RFC | Enables rich extension ecosystem; could define next-gen plugin model |
| **AI-assisted PR pre-review SOP** ([#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330)) | Adopted pilot | Sign of maturing CI/CD practices; may become standard review pipeline |
| **Verbatim channel send without agent turn** ([#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050)) | High-risk RFC | Supports real-time event injection; signals need for low-latency, direct routing |

🔮 **Prediction:** These RFCs suggest that **ZeroClaw’s next major version (v0.9)** will emphasize:  
- Modular, pluggable architecture (WASM + memory separation)  
- Enhanced security and auditability (config integrity, approval flows)  
- Developer experience upgrades (AI-powered reviews, better tooling)

---

### **7. User Feedback Summary**  
💬 **Real User Pain Points Identified:**  
- **Configuration corruption**: Users report losing 100KB+ configs due to `Config::save()` bug (#10495), causing frustration and data loss anxiety.  
- **Tool failures in vision sessions**: Image rejection poisoning later turns (e.g., #10061) breaks workflows, especially in visual reasoning tasks.  
- **Missing TTS in Matrix** (PR #10488): Users expect consistent audio feedback across channels, highlighting UX parity needs.  
- **Unintuitive first-run setup**: Despite progress, E2E coverage for onboarding remains incomplete (#8766), leading to confusion during initial adoption.

💡 **Positive Signals:**  
- High engagement in evaluation framework PRs indicates growing trust in ZeroClaw’s test-driven development culture.  
- New UI tool (PR #10520) suggests demand for simplified configuration management — likely to gain traction.

---

### **8. Backlog Watch**  
⏳ **High-Impact Issues Needing Maintainer Attention:**  

| Issue | Status | Why It Matters | Link |
|------|--------|----------------|------|
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | Open, P2, Needs Review | Core memory architecture decision; blocks future scalability | [Issue #6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) |
| [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) | Open, P2, Needs Review | Defines storage/enrichment contract — foundational for privacy and compliance | [Issue #9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) |
| [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) | Open, P2, Needs Review | Sets stage for composable plugin ecosystem; key for extensibility | [Issue #10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) |
| [#10366](https://github.com/zeroclaw-labs/zeroclaw/issues/10366) | Open, P2, Needs Review | Clarifies PR review evidence and author-action boundaries — vital for governance | [Issue #10366](https://github.com/zeroclaw-labs/zeroclaw/issues/10366) |

🔧 **Action Required:** Maintainers must prioritize triage and decisions on these high-risk, high-impact RFCs to prevent stagnation and enable forward momentum.

---

> ✅ **Project Health Score:** **High Activity, Moderate Stability**  
> ZeroClaw is in a pivotal phase: architecturally ambitious, community-engaged, and rapidly evolving—but with several critical bugs and unresolved RFCs delaying production readiness. Immediate attention to S0/S1 bugs and architectural consensus is recommended.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*