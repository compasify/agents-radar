# OpenClaw Ecosystem Digest 2026-09-03

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-09-03 01:56 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest — 2026-09-03**

---

### **1. Today's Overview**  
The OpenClaw project remains highly active, with **500 issues and 500 pull requests updated in the last 24 hours**, indicating intense development momentum. A surge in high-severity bug reports—particularly around session state corruption, API auth failures, and agent crash loops—signals ongoing stability challenges despite robust community engagement. The absence of new releases suggests that the team is prioritizing internal fixes and stabilization ahead of a potential patch or minor version rollout. This level of activity reflects both rapid iteration and growing pains in a mature, multi-agent AI assistant ecosystem.

---

### **2. Releases**  
**No new releases were published today.**  
The most recent stable release remains `2026.8.1`, which has already triggered several critical post-upgrade issues (e.g., #134570, #134608), including gateway crash loops and irreversible auth migration failures. Maintainers are likely preparing for a hotfix release to address these regressions, particularly around state migration and credential recovery.

> 🔗 [GitHub Release History](https://github.com/openclaw/openclaw/releases)

---

### **3. Project Progress**  
**35 merged/closed PRs** were processed today, primarily focused on UI polish, observability, and infrastructure improvements:

- ✅ **UI/UX Refinements**:  
  - #136736: Fixes display of primary user in multi-agent profile hero ([PR Link](https://github.com/openclaw/openclaw/pull/136736))  
  - #136612: Removes redundant session naming text below composer ([PR Link](https://github.com/openclaw/openclaw/pull/136612))  
  - #135499: Stabilizes Tasks panel during session activity ([PR Link](https://github.com/openclaw/openclaw/pull/135499))

- ✅ **Infrastructure & Build Improvements**:  
  - #136790: Enables npm publishing without waiting for app assets ([PR Link](https://github.com/openclaw/openclaw/pull/136790))  
  - #134057: Adds retries for Kova archive fetch in CI ([PR Link](https://github.com/openclaw/openclaw/pull/134057))  
  - #136334: Pins iOS screenshot evidence to workflow revision ([PR Link](https://github.com/openclaw/openclaw/pull/136334))

- ✅ **Agent & Model Layer Fixes**:  
  - #122023: Resolves auto-compaction failure due to fixed context overhead ([PR Link](https://github.com/openclaw/openclaw/pull/122023))  
  - #122022: Fixes missing reasoning output in self-hosted DeepSeek via vLLM ([PR Link](https://github.com/openclaw/openclaw/pull/122022))

These updates reflect a focus on usability, maintainability, and reducing friction in CI/CD and deployment workflows.

---

### **4. Community Hot Topics**  
Top 5 most commented/engaged issues highlight urgent pain points:

| Issue | Summary | Comments | Severity | Link |
|------|--------|---------|----------|------|
| [#135835](https://github.com/openclaw/openclaw/issues/135835) | API key recharge fails to restore service after upgrade | 8 | 🦞 Diamond Lobster | [Issue](https://github.com/openclaw/openclaw/issues/135835) |
| [#134570](https://github.com/openclaw/openclaw/issues/134570) | Gateway crash loop after 2026.8.1 upgrade due to incomplete migrations | 6 | 🦞 Diamond Lobster | [Issue](https://github.com/openclaw/openclaw/issues/134570) |
| [#134608](https://github.com/openclaw/openclaw/issues/134608) | Auth migration archives credentials but writes success receipt without them | 6 | 🦞 Diamond Lobster | [Issue](https://github.com/openclaw/openclaw/issues/134608) |
| [#121953](https://github.com/openclaw/openclaw/issues/121953) | Cron agent stalls on DeepSeek due to `[cron:<jobId>]` prefix deprioritization | 13 | 🦞 Diamond Lobster | [Issue](https://github.com/openclaw/openclaw/issues/121953) |
| [#99551](https://github.com/openclaw/openclaw/issues/99551) | Codex worker runaway hardening sprint (security-critical) | 17 | 🌊 Off-meta Tidepool | [Issue](https://github.com/openclaw/openclaw/issues/99551) |

**Analysis**: These issues reveal a cluster of **critical path failures post-upgrade**, especially around **authentication**, **state migration**, and **API provider compatibility**. Users are encountering unexplained crashes and silent data loss, suggesting instability in the upgrade pipeline and state management layer.

---

### **5. Bugs & Stability**  
High-priority bugs reported today indicate systemic risks:

| Bug | Impact | Status | Fix PR? | Link |
|-----|--------|--------|--------|------|
| #135835: Token recharge fails after upgrade | Auth-provider, data-loss | Open | ❌ | [Issue](https://github.com/openclaw/openclaw/issues/135835) |
| #134570: Crash loop after 2026.8.1 upgrade | Session-state, crash-loop | Open | ❌ | [Issue](https://github.com/openclaw/openclaw/issues/134570) |
| #134608: Auth migration loses credentials | Auth-provider, security | Closed | ❌ | [Issue](https://github.com/openclaw/openclaw/issues/134608) |
| #121953: Cron agent stalls on DeepSeek | Message-loss, UX-friction | Open | ❌ | [Issue](https://github.com/openclaw/openclaw/issues/121953) |
| #123327: WAL checkpoint corrupts SQLite header | Data-loss, regression | Open | ❌ | [Issue](https://github.com/openclaw/openclaw/issues/123327) |
| #115424: Heap OOM → 7-core-dump crash loop | Crash, system degradation | Open | ❌ | [Issue](https://github.com/openclaw/openclaw/issues/115424) |

**Severity Note**: Multiple P1/P2 bugs involve **data corruption**, **crash loops**, and **silent failure modes**—indicating serious stability concerns. No fix PRs exist for the top-tier issues, signaling that critical patches may be pending.

---

### **6. Feature Requests & Roadmap Signals**  
User-driven feature requests point to emerging priorities:

- **Spending Controls**: #121729 proposes daily spending allowances—directly addressing cost anxiety in long-running agents.
- **Better Session Management**: #135889 seeks richer cron job provenance (run origin, token budget, completion cause)—a clear demand for observability and auditability.
- **Improved Agent Identity**: #65374 highlights cross-agent memory contamination—suggesting a need for stronger isolation in multi-agent environments.
- **Robustness in Tooling**: #119992 calls for per-turn send budget to prevent duplicate-answer storms—indicating users are pushing tool orchestration beyond basic use.

**Prediction**: The next minor release (likely `2026.9.0`) will likely include **enhanced monitoring**, **spending limits**, and **improved session metadata**, driven by these high-engagement feature requests.

---

### **7. User Feedback Summary**  
Real-world feedback reveals three core themes:

- **Frustration with Upgrades**: Multiple users report that upgrading from `2026.8.1` leads to **unrecoverable states**, including crash loops and lost credentials (#134570, #134608).
- **Trust in State Integrity**: Users are alarmed by data corruption (e.g., SQLite header overwritten #123327), indicating deep concern about long-term reliability.
- **Need for Predictability**: Agents failing silently (e.g., #121953, #120735) suggest users want more transparent error handling and fewer “black box” failures.

> *“I upgraded yesterday and now my gateway won’t start—no logs, no error message.”* – User comment on #134570

This reflects a shift from novelty to **production readiness expectations**—users now demand reliability over new features.

---

### **8. Backlog Watch**  
Critical long-standing issues requiring maintainer attention:

| Issue | Age | Status | Priority | Link |
|------|-----|--------|----------|------|
| [#85030](https://github.com/openclaw/openclaw/issues/85030) | 12 weeks | Open | 🦞 Diamond Lobster | [Issue](https://github.com/openclaw/openclaw/issues/85030) |
| [#65374](https://github.com/openclaw/openclaw/issues/65374) | 14 weeks | Open | 🐚 Platinum Hermit | [Issue](https://github.com/openclaw/openclaw/issues/65374) |
| [#77886](https://github.com/openclaw/openclaw/issues/77886) | 13 weeks | Open | 🌊 Off-meta Tidepool | [Issue](https://github.com/openclaw/openclaw/issues/77886) |
| [#116615](https://github.com/openclaw/openclaw/issues/116615) | 11 weeks | Open | 🌊 Off-meta Tidepool | [Issue](https://github.com/openclaw/openclaw/issues/116615) |

These issues span **security**, **agent isolation**, **config safety**, and **filesystem mutation control**—core pillars of a secure, production-grade AI assistant. Their prolonged status signals either complexity or low priority relative to immediate stability fixes.

> 🔔 **Recommendation**: Maintain a dedicated triage board for "Guardrail" issues (security, state, identity) to prevent erosion of trust.

---  
*Data compiled from GitHub: openclaw/openclaw • Updated: 2026-09-03*

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Assistant Open-Source Ecosystem – 2026-09-03**

---

### **1. Ecosystem Overview**  
The personal AI assistant and multi-agent open-source ecosystem is entering a phase of **mature technical consolidation**, shifting from rapid feature iteration toward **production readiness, stability, and trust**. Projects are increasingly focused on session integrity, state management, security hardening, and observability—reflecting real-world deployment demands. While innovation remains strong, the priority has pivoted from novelty to **reliability, data consistency, and long-term operational sustainability**. This evolution is driven by growing user base complexity, enterprise adoption signals, and rising expectations around autonomous agent behavior.

---

### **2. Activity Comparison**

| Project | Issues (Last 24h) | PRs (Last 24h) | Release Status | Health Score* |
|--------|-------------------|----------------|----------------|---------------|
| **OpenClaw** | 500 | 500 | ❌ None | ⚠️ Low (Critical bugs, upgrade regressions) |
| **Hermes Agent** | 50 | 50 | ❌ None | ⚠️ Medium (Stability issues, UX gaps) |
| **IronClaw** | 10 | 28 | ❌ None | ✅ High (Strong engineering focus, clean PRs) |
| **QwenPaw** | 27 | 38 | ✅ v2.2.0-beta.7 | ⚠️ Medium (Security risks, memory instability) |
| **ZeroClaw** | 50 | 50 | ❌ None | ✅ High (Deep architectural refinement, RFC-driven) |

> *Health Score: Based on bug severity, fix velocity, release cadence, community trust signals, and structural maturity (scale: Low / Medium / High)*

---

### **3. OpenClaw's Position**  
OpenClaw leads in **development velocity and community engagement**, with unmatched activity levels across issues and PRs—indicating high momentum and broad contributor involvement. However, this intensity comes at the cost of **systemic stability**: its P1/P2 bugs around auth migration, session corruption, and crash loops suggest a **fragile upgrade pipeline** and underdeveloped state migration safeguards. In contrast to peers like IronClaw and ZeroClaw, which prioritize type safety and architectural clarity, OpenClaw’s approach leans toward **rapid iteration over correctness**, making it more suitable for early adopters and contributors than production deployments. Its community size appears largest, but trust erosion due to silent failures and data loss is emerging as a critical risk.

---

### **4. Shared Technical Focus Areas**  
Multiple projects are converging on core infrastructure challenges:

| Focus Area | Projects Involved | Specific Needs |
|-----------|------------------|----------------|
| **Session & State Integrity** | OpenClaw, Hermes, QwenPaw, ZeroClaw | Prevent crash loops, silent data loss, context truncation; ensure consistent state across upgrades |
| **Authentication & Credential Management** | OpenClaw, Hermes, QwenPaw | Fix migration failures, prevent credential leakage, enforce secure storage |
| **Agent Isolation & Security Sandboxing** | QwenPaw, ZeroClaw, IronClaw | Enforce granular policy controls, prevent delegate bypasses, support RCE mitigation |
| **Memory & Context Management** | QwenPaw, OpenClaw, ZeroClaw | Prevent context loss in long sessions, normalize embeddings, manage retention policies |
| **Multimodal Tooling & Output Fidelity** | ZeroClaw, IronClaw | Enable image/audio materialization, proper tool result handling |
| **Error Signaling & Observability** | All projects | Improve failure semantics, add traceability, reduce "black box" behavior |

This convergence reflects a **unified industry need**: reliable, observable, and secure agent execution—not just capability.

---

### **5. Differentiation Analysis**

| Project | Feature Focus | Target Users | Technical Architecture |
|--------|----------------|--------------|-------------------------|
| **OpenClaw** | Multi-agent orchestration, UI polish, fast iteration | Dev teams, power users, integrators | Monolithic frontend + distributed agents; high coupling in state layer |
| **Hermes Agent** | Desktop experience, platform compatibility, skill discovery | End-users, desktop-first deployers | Modular runtime design; strong Discord/Slack integration |
| **IronClaw** | Type safety, test rigor, error resilience | Engineering teams, CI/CD-heavy workflows | TypeScript-first, provider-neutral APIs, strong component abstraction |
| **QwenPaw** | Memory normalization, security hardening, A2A protocol prep | Research, legal, document processing | ReMe memory system, script-based skills, governance-aware design |
| **ZeroClaw** | Architectural purity, session ownership, sandboxing | Enterprise, high-risk environments | RFC-driven design, decoupled lifecycle/storage, transport abstraction |

> **Key Differentiator**: ZeroClaw and IronClaw represent **architectural maturity**; OpenClaw and QwenPaw emphasize **feature velocity**; Hermes prioritizes **user experience**.

---

### **6. Community Momentum & Maturity**

- **Rapid Iteration Tier** (High activity, high risk):  
  - **OpenClaw** (500 issues/PRs/day) — fastest pace, but stability concerns indicate immature release practices.
  - **QwenPaw** (38 PRs/day) — active development, but security and memory bugs signal growing pains.

- **Stabilization & Refinement Tier** (Focused improvements, low churn):  
  - **IronClaw** (28 PRs/day) — engineering excellence, minimal breaking changes, strong CI/CD hygiene.
  - **ZeroClaw** (50 issues/PRs/day) — deep design work via RFCs, indicating strategic planning over feature delivery.

- **Mature Governance Tier** (Balanced activity, decision-driven):  
  - **Hermes Agent** — steady progress, strong user feedback loop, clear roadmap signals.

> **Trend**: The ecosystem is bifurcating into **fast-moving prototypes** (OpenClaw, QwenPaw) and **production-grade platforms** (IronClaw, ZeroClaw), with Hermes bridging the gap in usability.

---

### **7. Trend Signals**  
Based on community feedback and project direction, key industry trends emerge:

- **Trust > Features**: Users now demand **predictable behavior** and **data integrity** over new capabilities. Silent failures and upgrade regressions are major trust killers (OpenClaw, QwenPaw).
- **Observability is Non-Negotiable**: Users request richer session provenance, audit trails, and real-time event streaming—indicating a move toward **debuggable, auditable agent systems** (ZeroClaw, QwenPaw).
- **Security as First-Class Concern**: Sandbox breaches, credential leaks, and policy bypasses are no longer edge cases—they are top-tier priorities (QwenPaw, ZeroClaw).
- **Agent Identity & Isolation**: Cross-agent memory contamination and subagent visibility are recurring pain points, signaling demand for **stronger isolation and governance models** (QwenPaw, ZeroClaw).
- **Tooling as Code**: Script-based skill creation and approval-driven workflows (e.g., QwenPaw’s Make-Skill v2) reflect a shift toward **composable, version-controlled agent systems**.

> 💡 **Value for Developers**: Prioritize **engineering discipline, testing rigor, and secure-by-design patterns**. The next wave of successful agent platforms will be defined not by features, but by **reliability, transparency, and maintainability**.

--- 

*Prepared for technical decision-makers, architects, and open-source developers.*  
*Data source: GitHub repositories • Updated: 2026-09-03*

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-09-03**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active with a robust pipeline of development: **50 issues and 50 pull requests updated in the last 24 hours**, indicating sustained momentum across core infrastructure, stability, and user-facing features. The ecosystem is particularly focused on session state integrity, gateway reliability, and desktop experience polish. Despite no new releases, several high-severity bugs—especially around SQLite corruption, message delivery, and authentication leakage—are being actively addressed. Community engagement is strong, with deep technical discussions emerging from real-world deployment challenges.

---

### **2. Releases**  
**No new releases** were published today. The most recent stable version (v0.21.0) continues to surface critical regressions, including duplicated conversation history (`#101644`) and persistent Discord typing indicators (`#101783`). Users are advised to monitor `main` for fixes or consider rolling back if stability issues impact workflows.

---

### **3. Project Progress**  
**Merged/Closed PRs (Today):**  
- ✅ **PR #101749** ([feat(desktop): add per-bot conversation history](https://github.com/nousresearch/hermes-agent/pull/101749)) — Adds searchable, timestamped history browser for individual bots, enhancing long-term session traceability.  
- ✅ **PR #101797** ([fix(gateway): stop Discord typing from persisting after idle](https://github.com/nousresearch/hermes-agent/pull/101797)) — Resolves a persistent UI artifact that misled users into thinking bots were still active.  
- ✅ **PR #101798** ([fix(photon): mirror all runtime sidecar modules to writable dir](https://github.com/nousresearch/hermes-agent/pull/101798)) — Critical fix for Kubernetes/managed-image deployments where `/opt/hermes` is read-only.  
- ✅ **PR #101792** ([fix(auxiliary): keep absent fallbacks out of health cache](https://github.com/nousresearch/hermes-agent/pull/101792)) — Prevents false failure states during provider availability checks.  

These updates reflect prioritization of **production stability**, **platform compatibility**, and **desktop usability**.

---

### **4. Community Hot Topics**  
Top community-driven concerns center on **systemic reliability** and **security hygiene**:

- 🔥 **Issue #66616**: *Skills index is stale or degraded* (144 comments)  
  → **Status:** Degraded. Index is 29.8h old (threshold: 26h).  
  → **Root cause:** Cron job failure in `.github/workflows/skills-index.yml`.  
  → **Implication:** Users cannot access up-to-date skill definitions via `/docs/skills`.  
  → **Urgency:** High. Blocks discovery and usage of new skills.  
  [View Issue](https://github.com/nousresearch/hermes-agent/issues/66616)

- 🔥 **Issue #98077**: *state.db physical cross-B-tree corruption under SQLite 3.50.4 WAL* (8 comments)  
  → **Severity:** P1. Confirmed production incident involving irreversible database corruption.  
  → **Impact:** Data loss risk for users relying on local state persistence.  
  → **Fix Status:** Closed but requires deeper investigation into WAL mode edge cases.  
  [View Issue](https://github.com/nousresearch/hermes-agent/issues/98077)

- 🚀 **PR #101052**: *feat(runtime): add provider-neutral AgentRuntime plugin API* (no comments yet)  
  → **Significance:** Enables third-party turn-level runtimes without hardcoding providers.  
  → **Future-proofing:** Signals intent to support modular, extensible agent architectures.  
  [View PR](https://github.com/nousresearch/hermes-agent/pull/101052)

These represent **core trust signals**: users demand predictable state management, secure data handling, and open extensibility.

---

### **5. Bugs & Stability**  
Critical bugs reported today highlight instability in **session lifecycle**, **message delivery**, and **authentication security**:

| Bug ID | Title | Severity | Status | Fix PR? |
|--------|------|----------|--------|---------|
| [#101644](https://github.com/nousresearch/hermes-agent/issues/101644) | Named `/v1/responses` conversations duplicate history | P2 | Open | ❌ |
| [#101783](https://github.com/nousresearch/hermes-agent/issues/101783) | Discord typing indicator persists after idle | P2 | Open | ✅ **PR #101797** merged |
| [#101756](https://github.com/nousresearch/hermes-agent/issues/101756) | MCP OAuth: async_auth_flow drops generator without aclose() | P2 | Open | ❌ |
| [#101741](https://github.com/nousresearch/hermes-agent/issues/101741) | Revoking permanent command approval has no effect | P2 | Open | ❌ |
| [#101742](https://github.com/nousresearch/hermes-agent/issues/101742) | Opening session lands in sub-agent branch silently | P2 | Open | ❌ |

> ⚠️ **Critical Risk**: Multiple P2/P1 issues involve **state inconsistency**, **infinite task accumulation** (`#81880`), and **memory leaks** (`#81880`, `#101783`), posing risks to long-running agents and desktop performance.

---

### **6. Feature Requests & Roadmap Signals**  
User-driven feature requests indicate growing demand for **multi-agent collaboration**, **cross-platform consistency**, and **enterprise-grade tooling**:

- 💡 **Feature: Shared Memory Pools Between Sub-Agents** (`#377`)  
  → Inspired by CAMEL-AI. Request to allow sub-agents to share memory/state.  
  → **Signal:** Users want coordinated multi-agent workflows beyond isolation.  
  → Likely candidate for v0.22.0.

- 💡 **Bot Group Chats Should Keep Working After Desktop Closes** (`#97681`)  
  → Requires backend coordination between gateways.  
  → **Signal:** Push toward resilient, background-capable AI agents.  
  → May be foundational for future "always-on" bot networks.

- 💡 **Full-Featured Bug Hunt Browser (Chromium DevTools)** (`#89388`)  
  → Developer-centric request for debugging web prototypes.  
  → **Signal:** Growing use of Hermes as a dev environment.  
  → Could become a key differentiator in future desktop versions.

---

### **7. User Feedback Summary**  
Real-world user pain points reveal friction in **installation**, **configuration**, and **cross-device continuity**:

- **Installation failures**: `hermes update` corrupts Git repos (`#32384`, `#48721`) and fails silently on macOS/Homebrew Python (`#48721`).  
- **Configuration leakage**: API keys written directly into `config.yaml` (`#57547`, fixed in PR `#80927`) raises security concerns.  
- **Desktop UX gaps**:  
  - Session confusion due to hidden child branches (`#101742`)  
  - Inconsistent frontend loading when Desktop spawns Dashboard (`#101748`, `#52945`)  
  - Typing indicators mislead users about bot activity (`#101783`)  
- **Platform-specific breakage**: Windows rebuilds fail silently due to locked files (`#101789`, addressed in PR `#101793`).

Users are increasingly deploying Hermes in complex, persistent environments — demanding resilience, security, and transparency.

---

### **8. Backlog Watch**  
Several high-impact, long-standing issues require maintainer attention:

- 📌 **Issue #66616** – Skills index staleness: **144 comments**, **degraded status**, **critical for usability**. No fix PR yet.  
- 📌 **Issue #377** – Shared memory pools: **7 comments**, **P3**, **needs decision**. A major architectural shift.  
- 📌 **Issue #97681** – Bot group chats persist after Desktop close: **23 comments**, **P3**, **innovation**, **high value**.  
- 📌 **Issue #101786** – Project-level skills not callable in project sessions: **1 comment**, **duplicate**, **still unpatched** despite partial fix.  
- 📌 **Issue #60932** – ZDR passthrough transparency: **1 comment**, **P3**, **reputational risk**. Must be resolved to maintain credibility.

> 🔎 **Priority Call**: These should be triaged and assigned to sprint planning. Especially **#66616** and **#377**, which affect core functionality and future extensibility.

---

**Conclusion**: Hermes Agent is in a phase of **intensive stabilization and platform refinement**. While innovation continues, the team must prioritize **data integrity**, **security**, and **user workflow consistency** to retain trust. The next release cycle will likely focus on **bug closure**, **session reliability**, and **desktop UX polish**.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# **IronClaw Project Digest – 2026-09-03**

---

### **1. Today's Overview**  
IronClaw shows strong momentum in code quality and infrastructure refinement, with 28 pull requests and 10 new issues raised in the last 24 hours. The project is undergoing a major TypeScript modernization effort across the WebUI v2 frontend, targeting over 170 files with `@ts-nocheck` directives. High-priority fixes related to model failure handling, CI stability, and LLM caching are being addressed by core contributors. While no new releases were published, the pipeline remains active with critical bug fixes and architectural improvements advancing steadily.

---

### **2. Releases**  
None  
No new versions released as of 2026-09-03. Development continues at an intense pace focused on internal quality, testing rigor, and foundational reliability—no user-facing changes or breaking updates have been packaged into a release yet.

---

### **3. Project Progress**  
**Merged & Closed PRs (Today):**  
- ✅ **[PR #8051](https://github.com/nearai/ironclaw/pull/8051)**: Fixed Live QA reply logic — now correctly isolates the *current* model call’s output instead of concatenating all prior deltas. This ensures accurate, non-repetitive responses in Slack/Telegram integrations.  
- ✅ **[PR #8045](https://github.com/nearai/ironclaw/pull/8045)**: Stabilized CLI smoke tests by enforcing real TCP loopback connection checks, replacing fragile banner-based waits. Improves test reliability.  
- ✅ **[PR #8042](https://github.com/nearai/ironclaw/pull/8042)**: Resolved two merge-queue flakiness issues by fixing server lifecycle management and improving gate judgment criteria. Critical for CI throughput.  
- ✅ **[PR #8006](https://github.com/nearai/ironclaw/pull/8006)**: Introduced **durable progressive replies** and native Slack Agent UI support via a unified, provider-neutral `ReplyDocument`. A key step toward richer agent interaction.  
- ✅ **[PR #8018](https://github.com/nearai/ironclaw/pull/8018)**: Replaced native `<input>` and `<select>` fields with shared `Input` and `SelectMenu` components — improves consistency and accessibility.  
- ✅ **[PR #8020](https://github.com/nearai/ironclaw/pull/8020)**: Unified Workspace and Logs filters under the shared `SearchField`, enhancing UX uniformity.  
- ✅ **[PR #8019](https://github.com/nearai/ironclaw/pull/8019)**: Migrated Automations status banners to `InlineNotice`, aligning with design system standards.  
- ✅ **[PR #8017](https://github.com/nearai/ironclaw/pull/8017)**: Adopted shared form components in Extension Configure flow, reducing duplication and improving feedback clarity.

These merges reflect a strong focus on **UI consistency**, **CI reliability**, and **model response fidelity**.

---

### **4. Community Hot Topics**  
The most active discussions center around **type safety** and **error resilience**:

- 🔥 **[Issue #8041](https://github.com/nearai/ironclaw/issues/8041)**: *A tool failure whose kind is wrong sends the model somewhere it cannot recover*  
  → Core concern: Misclassified `FailureKind` variants (e.g., `InputEncode` vs `UnknownCapability`) lead to unresolvable states. This has implications for autonomous agent recovery and workflow integrity.  
  → *Underlying need*: Clear, deterministic failure semantics to enable safe retry logic and agent self-correction.

- 🔥 **[PR #8039](https://github.com/nearai/ironclaw/pull/8039)**: *Refactor WebUI: type production components and hooks*  
  → Part of a larger initiative to eliminate `@ts-nocheck` debt across 64 production components.  
  → *Underlying need*: Long-term maintainability, reduced runtime errors, and better developer confidence in component contracts.

- 🔥 **[PR #8040](https://github.com/nearai/ironclaw/pull/8040)**: *Test infrastructure typing*  
  → Addresses 94 test-side `@ts-nocheck` directives and introduces typed mocks for browser globals and VM exports.  
  → *Underlying need*: Robust, reliable testing that scales with growing complexity.

These top items signal a **shift from feature velocity to engineering excellence**, prioritizing correctness and sustainability.

---

### **5. Bugs & Stability**  
| Severity | Issue | Summary | Fix PR? |
|--------|-------|--------|--------|
| ⚠️ High | [Issue #8041](https://github.com/nearai/ironclaw/issues/8041) | Incorrect `FailureKind` leads to irreversible model state — e.g., treating missing document as input error | ❌ No fix yet; high-risk regression if not resolved |
| ⚠️ Medium | [PR #7985](https://github.com/nearai/ironclaw/pull/7985) | Missing document reported as `InputEncode` instead of domain failure | ✅ Fix merged — prevents misrouting of model intent |
| ⚠️ Medium | [PR #8044](https://github.com/nearai/ironclaw/pull/8044) | New Claude families incorrectly downgraded due to cache denylist oversight | ✅ Fix merged — restores prompt caching for future models |
| ⚠️ Low | [PR #7991](https://github.com/nearai/ironclaw/pull/7991) | Pre-push gate fails on macOS due to `readlink -m` GNU extension usage | ✅ Fix merged — resolves cross-platform CI blocker |

> **Note**: The `FailureKind` issue (#8041) stands out as the only open high-severity bug with no fix pending. It poses a risk to agent autonomy and should be prioritized.

---

### **6. Feature Requests & Roadmap Signals**  
- 🎯 **[PR #8010](https://github.com/nearai/ironclaw/pull/8010)**: *Session-event transport unification + web-app run-completion notifications*  
  → Implements durable, authenticated SSE streaming for real-time agent outcomes.  
  → Signals the roadmap is moving toward **persistent, observable agent runs** with end-of-task notifications — likely a foundation for future "agent dashboards" or audit trails.

- 🎯 **[PR #8046](https://github.com/nearai/ironclaw/pull/8046)**: *Subagent approval gates reach owner inbox (R3 slice 3a)*  
  → Enables visibility into child subagent decisions — critical for trust and governance in multi-agent systems.  
  → Suggests upcoming focus on **agent hierarchy transparency** and **approval workflows**.

- 🎯 **[PR #8038](https://github.com/nearai/ironclaw/pull/8038)**: *Typed API boundaries*  
  → Implies formalization of backend/frontend contracts — a precursor to stable SDKs or public APIs.

> These signals indicate IronClaw is evolving from a prototype-grade agent framework into a **production-ready, observability-first AI orchestration platform**.

---

### **7. User Feedback Summary**  
While direct user feedback isn’t visible in this data set, patterns in issues reveal pain points:

- **Model confusion due to poor error signaling** (e.g., #8041): Users experience agents “stuck” or looping because they’re given incorrect failure context.
- **Inconsistent UI controls** (e.g., native inputs vs shared components): Leads to fragmented user experience across settings and flows.
- **Lack of visibility into subagent actions**: As seen in #8046, users want to know when child agents require approval — indicating demand for **transparency in complex workflows**.
- **Slow or repetitive responses** (evident in #8043): Performance bottlenecks in text streaming suggest laggy interactions during long-form reasoning.

Overall, users appear frustrated by **opaque failures**, **inconsistent interfaces**, and **lack of control** — all of which are being actively addressed through recent PRs.

---

### **8. Backlog Watch**  
The following high-impact, unresolved issues require maintainer attention:

- 🔴 **[Issue #8041](https://github.com/nearai/ironclaw/issues/8041)**: *Tool failure with wrong `FailureKind` causes irrecoverable model state*  
  → Currently open, no fix in progress. **High risk** to agent autonomy and reliability. Should be escalated.

- 🔴 **[Issue #8036](https://github.com/nearai/ironclaw/issues/8036)**: *Type WebUI Test Infrastructure and Remove Remaining Test Suppressions*  
  → Part of the broader `@ts-nocheck` cleanup. Still open despite significant progress in related PRs. May delay future testing scalability.

- 🔴 **[PR #7985](https://github.com/nearai/ironclaw/pull/7985)**: *Missing document treated as malformed input*  
  → Already fixed but highlights systemic risk in error classification. Should be reviewed for broader impact.

- 🔴 **[PR #8043](https://github.com/nearai/ironclaw/pull/8043)**: *Coalesce streamed text updates to avoid re-sanitization*  
  → Fix merged, but performance gains depend on downstream adoption. Monitor for regression.

> These items represent **critical technical debt** and **systemic risk areas** that could hinder future development if left unaddressed.

---

**Conclusion**: IronClaw is in a phase of **deep technical maturation**, with a clear emphasis on **type safety**, **error resilience**, and **observability**. The project is healthy, well-maintained, and strategically evolving toward a robust, production-grade AI agent platform. Immediate attention to #8041 and backlog consolidation will ensure continued momentum.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-09-03**

---

### **1. Today's Overview**  
QwenPaw remains highly active with a robust development pulse: **27 issues updated in the last 24 hours (19 open, 8 closed)** and **38 pull requests (25 open, 13 merged/closed)**, reflecting strong community engagement and ongoing feature refinement. The release of **v2.2.0-beta.7** signals continued progress toward a stable 2.2.0 final release, focusing on memory normalization, UI polish, and security hardening. Despite this momentum, critical stability concerns—especially around long-term memory, agent state management, and session handling—are emerging as recurring pain points across multiple user reports.

---

### **2. Releases**  
✅ **New Release**: `v2.2.0-beta.7` (2026-09-02)  
**Summary of Changes**:  
- ✅ **Fix (memory)**: Normalized backend-specific embedding dimensions (`#7465`) — crucial for consistent vector storage across providers.  
- ✅ **Chore**: Version bump to `v2.2.0b7` (`#7485`).  
- ✅ **Fix (UI)**: Added dark-mode overrides for MCP section containers (`#7473`, now merged).  

**Migration Notes**: No breaking changes reported; users upgrading from `beta.6` or earlier should verify ReMe memory configurations and custom provider JSON schemas (see #7474).  

🔗 [Release Page](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.0-beta.7)

---

### **3. Project Progress**  
**Merged PRs (13 today)**:  
- `#7473`: Fixed dark-mode rendering of MCP client cards (`#7473`) — improves accessibility and visual consistency.  
- `#7489`: Preserved PyInstaller multiprocessing runtime hook on macOS — resolves backend restarts during StdIO MCP tool execution.  
- `#7497`: Enforced sensitive path denial in *OFF* governance mode — enhances security by preventing bypasses.  
- `#7498`: Returns HTTP 404 instead of 500 when updating config for unknown tools — improves error clarity.  
- `#7508`: Merged Make-Skill v2 prototype (`#7508`) — marks early adoption of script-based skill creation workflow.  

These PRs reflect focused improvements in **security**, **cross-platform reliability**, and **developer experience**.

---

### **4. Community Hot Topics**  
🔥 **Top Issues by Activity & Severity**:  
1. **#7450** – *Main agent fails to query sub-agent status unless prompted*:  
   - 7 comments, raised by user rerbin.  
   - **Core Issue**: Asynchronous task coordination breaks without explicit user prompting.  
   - **Underlying Need**: Proactive state monitoring in multi-agent workflows — critical for complex GPT-Sol-style tasks.  
   🔗 [Issue #7450](https://github.com/agentscope-ai/QwenPaw/issues/7450)

2. **#7447** – *Early context lost in long sessions*:  
   - 2 comments, same user (rerbin).  
   - **Critical UX Flaw**: Long-running sessions (>1 day) lose historical context despite token limits.  
   - **Root Cause**: Likely memory management or persistence layer issue.  
   🔗 [Issue #7447](https://github.com/agentscope-ai/QwenPaw/issues/7447)

3. **#7511** – *Security sandbox breached*:  
   - 1 comment, high severity.  
   - Links to public post suggesting potential RCE or privilege escalation risk.  
   - **Urgent Action Needed**: Requires immediate investigation and disclosure.  
   🔗 [Issue #7511](https://github.com/agentscope-ai/QwenPaw/issues/7511)

🔥 **Top PRs by Engagement**:  
- `#7509` – *Make-Skill v2 (DO NOT MERGE)*:  
   - Proposed approval-driven, script-based skill creation — a major shift toward structured, reusable agent capabilities.  
   - Indicates roadmap shift toward **agent composition as code**.  
   🔗 [PR #7509](https://github.com/agentscope-ai/QwenPaw/pull/7509)

---

### **5. Bugs & Stability**  
Ranked by severity and impact:

| Severity | Issue | Description | Fix PR? |
|--------|------|-------------|--------|
| ⚠️ Critical | #7511 | Security sandbox breach reported | ❌ None yet |
| ⚠️ High | #7450 | Main agent ignores sub-agent status unless asked | ❌ No fix PR |
| ⚠️ High | #7447 | Early context lost in long sessions | ❌ No fix PR |
| ⚠️ High | #7469 | ReMe background job fails silently | ❌ No fix PR |
| ⚠️ Medium | #7510 | `/memory/status` returns 500 on desktop | ❌ No fix PR |
| ⚠️ Medium | #7505 | Frequent LLM disconnects on LAN servers | ❌ No fix PR |

> **Pattern**: Persistent instability in **long-term memory**, **multi-agent coordination**, and **network resilience**. Several bugs are silent failures (no logs), increasing debugging difficulty.

---

### **6. Feature Requests & Roadmap Signals**  
Key user-driven signals shaping future development:  

- **A2A Protocol Support** (`#7484`):  
   - User explicitly asks: *"When will A2A be officially supported?"*  
   - Suggests strong demand for **inter-agent communication** beyond MCP.  
   🔗 [Feature Request #7484](https://github.com/agentscope-ai/QwenPaw/issues/7484)

- **Custom Theme & Styling Support** (`#7406`):  
   - Users request accent color, font, and spacing customization.  
   - Indicates growing adoption beyond dev teams — **end-user experience is maturing**.  
   🔗 [Enhancement #7406](https://github.com/agentscope-ai/QwenPaw/issues/7406)

- **Improved Agent Model Routing** (`#7501`):  
   - New PR adds fallback model selection and sub-agent model configuration.  
   - Signals focus on **dynamic model orchestration** in v2.2+.  
   🔗 [PR #7501](https://github.com/agentscope-ai/QwenPaw/pull/7501)

---

### **7. User Feedback Summary**  
Real-world pain points from production use:  
- **Agent Coordination**: Users report "dead air" in multi-agent tasks — no proactive status updates unless prompted (`#7450`, `#7447`).  
- **Long-Term Session Reliability**: Critical for document processing, legal, or research workflows — context loss undermines trust.  
- **LAN/Locally Hosted LLMs**: Frequent disconnects and retries degrade performance (`#7505`).  
- **Security Concerns**: Public reports of sandbox breaches (`#7511`) indicate trust erosion if not addressed swiftly.  
- **UX Friction**: Inability to switch sessions mid-thought (`#7512`), poor WeCom streaming speed (`#7507`) — detract from usability.

> ✅ **Positive Note**: Users are deeply engaged — reporting nuanced, real-world edge cases, indicating **mature usage patterns** beyond PoCs.

---

### **8. Backlog Watch**  
**High-Priority Unresolved Items Requiring Maintainer Attention**:  

- **#7450** – Multi-agent state polling failure: **critical for task reliability**.  
- **#7447** – Context loss in long sessions: **directly impacts core functionality**.  
- **#7511** – Security sandbox breach: **urgent, potentially exploitable**.  
- **#7484** – A2A support roadmap: **user demand is clear**; needs official statement.  
- **#7474** – Custom provider loading failure post-PR merge: **breaks extensibility**.  

> 🔔 **Recommendation**: Prioritize triage of these five items in next sprint. The security issue (#7511) must be investigated immediately.

--- 

**Project Health Assessment**: ✅ **Active & Growing**, but **stability and security risks are rising**. Strong momentum in core features, but user-reported regressions and architectural gaps in agent coordination and memory require urgent attention. V2.2.0-beta.7 is a solid step forward — but not yet production-ready for mission-critical deployments.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest – 2026-09-03**

---

### **1. Today's Overview**  
The ZeroClaw project remains highly active with a robust pace of development: **50 issues and 50 pull requests updated in the last 24 hours**, indicating sustained momentum across architecture, security, and core runtime improvements. The ecosystem is focused on deep structural refinements—particularly around session management, memory lifecycle, sandboxing, and protocol ownership—with strong engagement from maintainers and contributors. No new releases have been published, suggesting ongoing stabilization before a major update. The high volume of RFCs (17 open, 8 accepted) reflects an intense design phase aimed at long-term system integrity.

---

### **2. Releases**  
❌ **No new releases** were published as of 2026-09-03.  
All recent activity centers on internal architectural refinement and bug fixes rather than feature delivery to users. This indicates a pre-release or maintenance window focused on foundational stability ahead of future versioning.

---

### **3. Project Progress**  
✅ **Merged/Closed PRs (Today):**  
- **PR #10564**: Fixes image eviction logic to respect `max_images` per-image, not per-message — improves memory safety in multimodal workflows. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/10564)  
- **PR #10565**: Pins local Code sessions to process `cwd`, resolving workspace drift in Zerocode. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/10565)  
- **PR #10566**: Enables materialization of `type:image/audio` tool results into multimodal pipeline — critical for visual/audio agent output fidelity. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/10566)  
- **PR #10524**: Caps root `config_schema.properties` at 256 entries to prevent performance degradation during schema validation. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/10524)  

These changes reflect continued investment in **performance, security, and multimodal capability**, particularly in tool handling and configuration validation.

---

### **4. Community Hot Topics**  
🔥 **Top Issues by Comment Count & Strategic Impact:**  
1. **[Issue #9487]**: *RFC: Runtime-owned conversation sessions and transport surface adapters* (32 comments)  
   → Core architectural debate over session ownership and transport abstraction. High-risk, high-impact; signals need for a unified, secure session contract. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)  
2. **[Issue #6850]**: *RFC: Decouple memory lifecycle policy from storage backends* (25 comments)  
   → Addresses fundamental separation between durable storage and dynamic lifecycle control. Critical for scalability and modularity. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)  
3. **[Issue #6996]**: *RFC: Granular sandbox policy — filesystem and network restrictions* (22 comments)  
   → Highlights growing concern over agent isolation and risk mitigation. Aligns with increasing use of independent delegates. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)  
4. **[Issue #9103]**: *RFC: Separate authoritative memory storage from optional enrichment connectors* (19 comments)  
   → Reinforces the theme of modular, decoupled data layers. Maintainer-led revision shows active governance. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9103)  

👉 **Underlying Need**: Clear architectural boundaries between storage, lifecycle, security, and execution layers are being prioritized to enable safe, scalable, and extensible agent behavior.

---

### **5. Bugs & Stability**  
🚨 **Critical Bugs (S0–S1)**  
- **[Bug #10165]**: Independent delegate bypasses `block_high_risk_commands` despite profile settings (**S0 - Security Risk**)  
  → Fix PR: **[PR #10188]** (approved, needs review) addresses approval policy enforcement. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10165)  
- **[Bug #8559]**: Agent stops work when exiting web chat window (**S1 - Workflow Blocked**)  
  → Requires UX + state persistence fix; currently in progress. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8559)  

🟡 **High-Impact Degraded Behavior (S2)**  
- **[Bug #10523]**: Bootstrap file truncation at 6,000 chars is invisible — breaks context integrity. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10523)  
- **[Bug #10068]**: Interactive agent caps context at 32k tokens regardless of `max_context_tokens=131072`. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10068)  
- **[Bug #10501]**: MCP tool images fail on OpenAI-compatible providers due to incorrect `role:tool` placement. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10501)  

📌 **Fix PRs in Flight**: Multiple PRs address these bugs, but some remain unreviewed or require maintainer input.

---

### **6. Feature Requests & Roadmap Signals**  
🚀 **Emerging Themes in Feature Requests:**  
- **Session Persistence & Replay**:  
  - [Issue #9600] Tracker for session-persistence contract ownership (15 comments).  
  - [Issue #10526] RFC: Append-only event history for deterministic replay.  
  → Signals demand for auditability, reproducibility, and debugging support. Likely to be part of next major release.  
- **Enhanced Tooling & Multimodality**:  
  - [PR #10566]: Full image/audio materialization via MCP.  
  - [PR #9740]: VoiceHost WebSocket bridge for real-time audio interaction.  
  → Indicates roadmap push toward rich media agents and voice-enabled interfaces.  
- **Configuration & Governance**:  
  - [PR #10288]: Define deferred RFC vote cycles — formalizing decision-making.  
  - [PR #10514]: CI validation of PR head history — improving code quality gates.  
  → Reflects maturing governance and operational discipline.

➡️ **Predicted Next Version Focus**: A stable release incorporating **session-layer rearchitecture**, **enhanced sandboxing**, **multimodal support**, and **robust config governance**.

---

### **7. User Feedback Summary**  
💡 **Key Pain Points Expressed by Users:**  
- **Context Truncation**: Users report losing critical context due to silent limits (e.g., 6K bootstrap truncation, 32K session cap). [Issue #10523, #10068]  
- **Security Gaps in Delegates**: Users express concern about high-risk commands executing through independent delegates despite policy settings. [Issue #10165]  
- **Workflow Interruptions**: Agents halting when switching tabs or closing windows disrupts long-running tasks. [Issue #8559]  
- **Invisible Configuration Limits**: Users struggle to debug why certain features (like large schemas) fail silently. [PR #10524]  

✅ **Positive Signals**:  
- Strong community engagement in RFCs and PR reviews suggests trust in the project’s direction.  
- Contributors actively propose solutions (e.g., AI-assisted PR reviews, CI improvements), indicating maturity.

---

### **8. Backlog Watch**  
⚠️ **High-Priority Issues Requiring Maintainer Attention:**  
- **[Issue #9487]**: RFC on runtime-owned sessions — 32 comments, high risk, no maintainer action since Aug 2026. Needs vote restart and design alignment. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)  
- **[Issue #8692]**: Maintainer decision tracker — central queue for RFCs and design decisions. Currently inactive despite 14 comments. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)  
- **[Issue #9600]**: Session-persistence contract ownership — tracker issue with 15 comments, blocking multiple parallel streams. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9600)  
- **[Issue #6996]**: Granular sandbox policies — accepted but pending implementation. Needs follow-through. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)  

🔔 **Urgent Note**: These issues represent **critical bottlenecks** in architectural coherence and decision velocity. Immediate maintainer triage recommended to avoid stagnation.

---

> ✅ **Final Assessment**: ZeroClaw is in a **high-intensity design and stabilization phase**, with strong technical depth and community engagement. The project is healthy but faces governance and coordination challenges. Prioritizing maintainer-led RFC decisions and backlog triage will be key to unlocking the next release cycle.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*