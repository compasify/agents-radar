# OpenClaw Ecosystem Digest 2026-09-19

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-09-19 13:11 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest — 2026-09-19**

---

### **1. Today's Overview**  
The OpenClaw project remains highly active, with over **500 issues and 500 pull requests updated in the last 24 hours**, indicating sustained momentum across development, triage, and community engagement. The release of **v2026.9.5** marks a critical stability milestone, addressing several high-severity regressions affecting gateway startup, memory management, and session integrity. Despite strong contributor participation (503 contributors, 4,179 PRs), the issue backlog reflects ongoing challenges with system stability, especially around process lifecycle, state persistence, and cross-platform compatibility—particularly on Windows and Linux systems.

---

### **2. Releases**  
**OpenClaw v2026.9.5** was released today as part of the `linux-stable` update channel. This version includes targeted fixes for multiple critical production issues reported in prior releases.

#### 🔧 Key Changes:
- Resolved **zombie process leakage** from hook/tool execution ([#97616](https://github.com/openclaw/openclaw/issues/97616)).
- Fixed **gateway crash-loop** due to event loop starvation after reaching "ready" state ([#149538](https://github.com/openclaw/openclaw/issues/149538)).
- Addressed **SQLite WAL file bloat** on Windows agents leading to startup blockages ([#143524](https://github.com/openclaw/openclaw/issues/143524)).
- Patched **Codex retained-state migration failure** causing empty session lists post-upgrade ([#152744](https://github.com/openclaw/openclaw/issues/152744)).

#### 📦 Distribution:
- [AppImage](https://github.com/openclaw/openclaw/releases/download/v2026.9.5/OpenClaw-2026.9.5-amd64.AppImage)
- [Debian package](https://github.com/openclaw/openclaw/releases/download/v2026.9.5/OpenClaw-2026.9.5-amd64.deb)

> ✅ **Migration Note**: Users upgrading from `2026.9.3` or `2026.9.4` should expect improved boot times and reduced memory pressure. No breaking changes were introduced.

---

### **3. Project Progress**  
Today saw **220 pull requests merged or closed**, including key stability and UX improvements:

- ✅ **[PR #152848](https://github.com/openclaw/openclaw/pull/152848)**: Fixes false Windows lifecycle failures caused by PID reuse.
- ✅ **[PR #152862](https://github.com/openclaw/openclaw/pull/152862)**: Ensures explicit JavaScript launchers are correctly validated on Windows.
- ✅ **[PR #152837](https://github.com/openclaw/openclaw/pull/152837)**: Offloads iMessage startup database reads from the Gateway thread to prevent event loop blocking.
- ✅ **[PR #152706](https://github.com/openclaw/openclaw/pull/152706)**: Gracefully degrades when transcript anchors are missing instead of throwing errors.
- ✅ **[PR #152528](https://github.com/openclaw/openclaw/pull/152528)**: Restores full usage history and adds breakdowns by creator in the Web UI.

These PRs collectively improve reliability, reduce latency, and enhance developer experience across platforms.

---

### **4. Community Hot Topics**  
Top Issues by comment count reveal urgent pain points:

| Issue | Comments | Severity | Link |
|------|----------|----------|------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 30 | 🦐 Gold Shrimp (P1) | Zombie processes from hooks/tools |
| [#149361](https://github.com/openclaw/openclaw/issues/149361) | 23 | 🌊 Off-meta Tidepool (P2) | Umbrella: WebUI performance & stability |
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | 19 | 🦐 Gold Shrimp (P0) | Gateway “ready” but unresponsive; event loop starved |
| [#143632](https://github.com/openclaw/openclaw/issues/143632) | 13 | 🦪 Silver Shellfish | Duplicate iMessage delivery with context envelope |

#### 🔍 Analysis:
- **Process/resource exhaustion** is a recurring theme: zombie processes, SQLite WAL growth, and event loop starvation point to deep-rooted lifecycle and concurrency issues.
- **WebUI performance** is a growing concern, with users reporting lag and instability even on modern hardware.
- **Message deduplication failures** indicate fragile session state handling, risking data consistency and user trust.

---

### **5. Bugs & Stability**  
Critical bugs reported today include:

| Bug ID | Title | Severity | Status | Fix PR? |
|--------|-------|----------|--------|---------|
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | Gateway reaches ready but never serves; `/health` timeouts | 🦐 Gold Shrimp (P0) | Open | ❌ No fix yet |
| [#152744](https://github.com/openclaw/openclaw/issues/152744) | Codex retained-state migration never settles; sessions stuck cold | 🦪 Silver Shellfish (P0) | Open | ❌ No fix yet |
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | Agent SQLite WAL grows to 2.8 GB despite checkpointing | 🦐 Gold Shrimp (P0) | Open | ❌ No fix yet |
| [#148529](https://github.com/openclaw/openclaw/issues/148529) | Boot time increases from 2s to 12min (632-agent fleet) | 🐚 Platinum Hermit (P1) | Closed | ✅ Fixed in v2026.9.5 |
| [#126821](https://github.com/openclaw/openclaw/issues/126821) | SQLite corruption recurs on pristine rebuilt DBs | 🦪 Silver Shellfish (P0) | Open | ❌ No fix yet |

> ⚠️ **Note**: While v2026.9.5 addresses several P0/P1 bugs, **three remain open with no PRs**, indicating unresolved systemic risks in state management and process isolation.

---

### **6. Feature Requests & Roadmap Signals**  
User-driven feature requests show clear demand for:

- **Configurable agent iteration limits** ([#9912](https://github.com/openclaw/openclaw/issues/9912)): Max turns/tool calls to prevent infinite loops.
- **Dynamic model discovery** ([#10687](https://github.com/openclaw/openclaw/issues/10687)): Support real-time updates from providers like OpenRouter.
- **Security enhancements**:
  - `.gitignore`-style exclude patterns in backup CLI ([#40786](https://github.com/openclaw/openclaw/issues/40786))
  - Owner-approved flow for protected config changes ([#77886](https://github.com/openclaw/openclaw/issues/77886))

#### 📈 Prediction:
The next major release (v2026.10.x) will likely focus on:
- **Enhanced security boundaries** (config validation, audit trails)
- **Improved agent control** (iteration limits, fallback models)
- **Better state durability** (persistent storage resilience, migration tooling)

---

### **7. User Feedback Summary**  
Real-world pain points from issue reports highlight:

- **Windows users** report severe instability: crashes, startup hangs, disk bloat (WAL files), and PID reuse conflicts.
- **macOS/iMessage users** face duplicate message delivery and ghost context injection.
- **Discord/WhatsApp users** struggle with message loss, malformed payloads, and auto-reply failures.
- **Enterprise users** emphasize need for secure, auditable configuration workflows and fine-grained access controls.
- **Developers** cite poor error messages and lack of diagnostic clarity during upgrades and migrations.

Despite robust technical capabilities, **user trust is eroding due to unreliability in core workflows**—especially session continuity, message fidelity, and upgrade safety.

---

### **8. Backlog Watch**  
High-impact, long-standing issues requiring maintainer attention:

| Issue | Age | Status | Priority | Notes |
|------|-----|--------|----------|-------|
| [#149361](https://github.com/openclaw/openclaw/issues/149361) | 4 days | Open | 🌊 Off-meta Tidepool (P2) | Umbrella for WebUI perf/stability – needs prioritization |
| [#143632](https://github.com/openclaw/openclaw/issues/143632) | 9 days | Open | 🦪 Silver Shellfish | Duplicate iMessages persist despite dedupe logic |
| [#126821](https://github.com/openclaw/openclaw/issues/126821) | 30+ days | Open | 🦪 Silver Shellfish | SQLite corruption reoccurs even after rebuild |
| [#152744](https://github.com/openclaw/openclaw/issues/152744) | 0 days | Open | 🦪 Silver Shellfish | Post-upgrade session catalog failure – blocker for v2026.9.5 adopters |
| [#115988](https://github.com/openclaw/openclaw/issues/115988) | 2 months | Open | 🌊 Off-meta Tidepool | Plugin-level LLM interception needed for compliance |

> 🔴 **Urgent Call to Action**: These issues represent **critical barriers to adoption**. Immediate triage and dedicated engineering effort are required to stabilize the platform ahead of the next major release cycle.

---

*Generated: 2026-09-19 | Source: [GitHub OpenClaw Repository](https://github.com/openclaw/openclaw)*

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Ecosystem – 2026-09-19**

---

### **1. Ecosystem Overview**  
The open-source personal AI agent landscape in Q3 2026 is marked by rapid architectural evolution, with projects converging on core themes of reliability, security, and composability. While foundational capabilities (agent execution, tool integration, session management) are mature across most projects, systemic challenges in **state persistence**, **cross-platform stability**, and **secure delegation** have become the dominant focus. A clear shift is underway from monolithic frameworks toward modular, observable, and auditable agent systems—evident in WASM plugin ambitions, runtime isolation, and policy-driven governance. The ecosystem shows strong momentum, but user trust remains fragile due to recurring stability regressions and inconsistent UX.

---

### **2. Activity Comparison**

| Project | Issues (Last 24h) | PRs (Last 24h) | Releases (Today) | Health Score (2026-09-19) |
|--------|-------------------|----------------|------------------|----------------------------|
| **OpenClaw** | 500+ | 500+ | ✅ v2026.9.5 | ⭐⭐⭐⭐☆ (High) |
| **Hermes Agent** | 50 | 50 | ❌ None | ⭐⭐⭐☆☆ (Moderate) |
| **IronClaw** | 0 | 3 | ❌ None | ⭐⭐⭐⭐☆ (High) |
| **QwenPaw** | 15 | 22 | ❌ None | ⭐⭐⭐⭐☆ (High) |
| **ZeroClaw** | 32 | 50 | ❌ None | ⚠️ ⭐⭐☆☆☆ (Moderate-Risky) |

> 🔍 *Health Score Rationale*: Based on release velocity, bug severity, PR-to-issue ratio, and triage responsiveness.

---

### **3. OpenClaw's Position**  
**OpenClaw stands as the most mature and actively releasing project** in the ecosystem, with a clear advantage in **scale, stability, and production readiness**. Its daily volume of 500+ issues and PRs reflects a large, engaged contributor base (503 contributors, 4,179 PRs), far exceeding peers in activity density. Unlike others, it maintains a consistent release cadence (v2026.9.5 today), signaling operational discipline. Technically, it leans into **system-level resilience**—fixing event loop starvation, WAL bloat, and zombie processes—making it a preferred choice for enterprise or high-uptime deployments. Compared to Hermes and ZeroClaw, which prioritize feature innovation over stability, OpenClaw’s focus on **core workflow reliability** positions it as the de facto standard for mission-critical agent operations.

---

### **4. Shared Technical Focus Areas**  
Across all five projects, four critical technical needs emerge:

| Focus Area | Projects Involved | Specific Requirements |
|----------|-------------------|------------------------|
| **Persistent State Integrity** | OpenClaw, Hermes Agent, QwenPaw, ZeroClaw | Prevent `state.db`/WAL corruption; fix migration failures; ensure crash-resistant session persistence |
| **Secure & Auditable Delegation** | ZeroClaw, Hermes Agent, IronClaw, QwenPaw | Enforce approval boundaries; expose sub-agent progress; prevent silent bypasses (e.g., `--attr-source`) |
| **Cross-Platform Reliability** | OpenClaw, QwenPaw, ZeroClaw, Hermes Agent | Fix encoding (UTF-8) issues; resolve Windows PID reuse; stabilize PowerShell/shell output |
| **Context Management & Retention** | QwenPaw, OpenClaw, ZeroClaw | Prevent context overflow; delay eviction; support longer sessions; improve scroll sandbox clarity |

> 💡 These shared pain points indicate a **common failure mode**: complex stateful workflows under high concurrency or cross-environment execution. Solving them requires deeper OS-level coordination and standardized storage contracts.

---

### **5. Differentiation Analysis**

| Dimension | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|---------|----------|--------------|----------|---------|----------|
| **Target Users** | Enterprise, DevOps, Production Agents | Developers, Power Users, Research | Practitioners, Edge Deployments | Builders, Tool Integrators | Orchestrators, System Architects |
| **Feature Focus** | Stability, uptime, system resilience | Session continuity, CLI safety, sandboxing | Identity mediation, agentless deployment | Governance, security hardening | Modularity, observability, runtime flexibility |
| **Architecture** | Monolithic gateway + agents | Event-loop-optimized core | Identity-first, Passport-mediated | Context-aware, policy-extensible | WASM-plugin driven, runtime-modular |
| **Security Model** | Process lifecycle control, SQLite integrity | `bubblewrap` sandboxing, config validation | Host-mediated identity (Passport) | File path guards, output truncation checks | ApprovalManager enforcement, attribute masking |

> 🎯 **Key Insight**: While OpenClaw leads in stability, **ZeroClaw and IronClaw represent the future of agent autonomy**—with ZeroClaw pushing modularity via WASM and IronClaw enabling zero-install identity flows. QwenPaw and Hermes Agent occupy the middle ground, balancing usability with security.

---

### **6. Community Momentum & Maturity**

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Iteration (High Velocity)** | OpenClaw, ZeroClaw, QwenPaw | >50 PRs/day; frequent patch releases; active triage; community-driven fixes |
| **Stabilization Phase (Refinement)** | Hermes Agent, IronClaw | No new releases; focus on fixing P0/P1 bugs; architectural cleanup; low surface noise |
| **Emergent Innovation (Early Stage)** | IronClaw (PR #7499), ZeroClaw (WASM plugins) | High-risk, high-reward features in flight; early adopter testing |

> 🔁 **Trend**: Projects like OpenClaw and ZeroClaw are **scaling rapidly**, while Hermes and IronClaw are **entering stabilization cycles**—a sign of maturing ecosystems. IronClaw’s quiet activity belies deep infrastructure work, suggesting it may soon re-emerge as a major player.

---

### **7. Trend Signals**  
Based on community feedback and development patterns, three industry-wide trends are emerging:

1. **From "Agent" to "Orchestrator"**: Users demand **observable, composable workflows**—evidenced by requests for delegate progress exposure (#10531, ZeroClaw), policy hooks (#7878, QwenPaw), and delivery receipts (#10929, ZeroClaw). This signals a move beyond autonomous agents toward **manageable, audit-ready workflows**.

2. **Security-by-Design is Non-Negotiable**: Silent data loss (Hermes #109687), unapproved code execution (ZeroClaw #10968), and bypassable safeguards (QwenPaw #7871) are no longer edge cases—they’re **blocking adoption**. Future success hinges on **transparent, verifiable security boundaries**.

3. **User-Centric Resilience > Feature Velocity**: Despite robust feature pipelines, users consistently cite **session loss, message duplication, and upgrade failures** as dealbreakers. This indicates that **reliability and trust** now outweigh novelty. Projects that prioritize stability (OpenClaw, IronClaw) will lead adoption.

> ✅ **Value for Developers**: Prioritize **context durability**, **delegation visibility**, and **config consistency**—these are the new must-haves for building trusted, production-grade agents.

---

### ✅ **Final Assessment**  
The personal AI agent ecosystem is at a pivotal inflection point: **innovation is accelerating, but reliability is the gatekeeper**. OpenClaw leads in maturity and scale, while ZeroClaw and IronClaw are shaping the next generation of secure, modular agents. For developers, the takeaway is clear: **build with resilience first**. The era of “working prototype” agents is ending—users now demand **auditable, persistent, and trustworthy** systems. Those who align with these trends will define the future of open-source AI agents.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-09-19**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active, with 50 issues and 50 pull requests updated in the past 24 hours—indicating robust developer engagement and ongoing feature development. The absence of new releases suggests a focus on stabilizing core functionality ahead of a potential patch or minor version rollout. High-priority bugs related to session state corruption, message delivery failures, and authentication edge cases dominate discussions, signaling that stability and reliability are top concerns. Concurrently, community-driven feature requests reflect growing demand for cross-platform continuity, enhanced security boundaries, and user-centric workflows.

---

### **2. Releases**  
**No new releases** were published in the last 24 hours. The latest stable release remains **v0.21.2 (2026.9.11)**, which includes fixes for CLI-induced `state.db` orphaning (see #109687). No breaking changes or migration notes are currently available. Maintainers appear to be prioritizing bug resolution over incremental release cycles.

> 🔗 [Latest Release: v0.21.2](https://github.com/nousresearch/hermes-agent/releases/tag/v0.21.2)

---

### **3. Project Progress**  
**Merged/Closed PRs:**  
- ✅ **#85001** (`fix(acp): build sessions off the event loop with async single-flight`) — Resolves race conditions in session creation, improving stability under high concurrency. Closes #78205.  
- ✅ **#116088**, **#116089**, **#116096**, **#116097**, **#116098**, **#116093**, **#116095**, **#116094**, **#116092**, **#116084** — A cluster of small but impactful fixes and refactorings focused on terminal behavior, LSP stability, dependency hygiene, and code organization. These collectively improve maintainability and reduce technical debt.

**Key Advancements:**  
- **Security & Isolation:** PR #102875 introduces a `bubblewrap` backend for Linux terminal commands, enabling per-command sandboxing—a major step toward secure local execution.
- **Plugin Ecosystem Growth:** New plugin entries added via PRs #115972 (RSS Reader) and #115945 (VK Messenger), expanding Hermes’s platform reach.
- **Code Quality & Maintainability:** Refactoring efforts (#116098, #116095, #116084) demonstrate intentional architectural cleanup, especially around profile handling and error parsing.

> 🔗 [PR #85001 – Session Event Loop Fix](https://github.com/nousresearch/hermes-agent/pull/85001)  
> 🔗 [PR #102875 – Bubblewrap Terminal Backend](https://github.com/nousresearch/hermes-agent/pull/102875)

---

### **4. Community Hot Topics**  
Top Issues by comment count reveal critical pain points:

| Issue | Summary | Comments | Severity | Link |
|------|--------|----------|----------|------|
| [#88584](https://github.com/nousresearch/hermes-agent/issues/88584) | Automated Nous integration blocked due to merge conflicts in `cron/jobs.py` | 118 | P3 (Critical) | [View Issue](https://github.com/nousresearch/hermes-agent/issues/88584) |
| [#100896](https://github.com/nousresearch/hermes-agent/issues/100896) | Recurring `state.db` corruption across 4 incidents in 5 weeks (WAL multi-writer conflict) | 16 | P1 (High) | [View Issue](https://github.com/nousresearch/hermes-agent/issues/100896) |
| [#109687](https://github.com/nousresearch/hermes-agent/issues/109687) | CLI invocation silently orphaned `state.db` WAL generation — gateway keeps serving while dropping writes | 14 | P0 (Critical) | [View Issue](https://github.com/nousresearch/hermes-agent/issues/109687) |

**Underlying Needs:**  
- **Reliability of Core State Management**: Persistent `state.db` corruption and WAL handling flaws indicate systemic risks in concurrent access patterns. Users expect persistent, crash-resistant session state.
- **Automated Integration Pipeline Health**: The stalled Nous-to-Enterkey merge highlights fragility in CI/CD and dependency integration workflows.
- **CLI Safety**: Silent data loss from CLI operations undermines trust in command-line tools—users need explicit warnings or safeguards.

---

### **5. Bugs & Stability**  
**Critical Stability Risks (P0–P1):**  
- ⚠️ **[#109687]**: Single CLI call can **orphan `state.db` WAL**, leading to silent session write loss. *No fix PR yet*, but reproducible on `main` post-v0.21.2.  
- ⚠️ **[#100896]**: Repeated `state.db` corruption in production environment (multi-writer WAL mode). *Linked to prior known issues* (#90837, #100313). Suggests unresolved race condition.  
- ⚠️ **[#116053]**: Gemini keys from Google AI Studio (`AQ.*`) incorrectly routed to Vertex AI endpoint — breaks auth flow. *Regression confirmed* after recent update.  
- ⚠️ **[#116059]**: `whatsapp.reply_prefix` setting ignored in config → no control over self-chat headers.  
- ⚠️ **[#115638]**: `fleet_restart_pending` marker becomes undischargeable if `hermes update` crashes mid-cleanup — blocks future restarts.

**Fix PRs in Progress:**  
- ✅ **#116088**, **#116089**, **#116096**, **#116097**, **#116093**, **#116082**, **#116083**, **#116084**, **#116086**, **#116087** — Address specific bugs in terminal, LSP, provider routing, and session clearing.  

> 🔗 [Critical Bug: CLI Orphans WAL](https://github.com/nousresearch/hermes-agent/issues/109687)  
> 🔗 [Persistent DB Corruption: #100896](https://github.com/nousresearch/hermes-agent/issues/100896)

---

### **6. Feature Requests & Roadmap Signals**  
Emerging themes suggest roadmap priorities:

| Feature | Requester | Priority | Implication |
|-------|----------|----------|-------------|
| **Bot Group Chats Persist After Desktop Close** ([#97681](https://github.com/nousresearch/hermes-agent/issues/97681)) | dokterdok | P2 | Demand for true multi-device continuity; signals shift from desktop-first to mobile/cloud-native agent use. |
| **ADHD-Friendly Thought Capture Workflow** ([#116019](https://github.com/nousresearch/hermes-agent/issues/116019)) | TrailblazerSR | P3 | Human-centered design trend — users want low-friction, interruption-tolerant workflows. |
| **One-Click IM Bot Onboarding (Telegram/Feishu/Lark)** ([#105683](https://github.com/nousresearch/hermes-agent/issues/105683)) | shao-zhijie | P3 | Reducing friction in bot setup aligns with broader adoption goals. |
| **Vault: registrable-domain (eTLD+1) credential matching** ([#116085](https://github.com/nousresearch/hermes-agent/issues/116085)) | lifeporterlab | P3 | Security + usability convergence — better UX for login management across subdomains. |
| **Clear Conversation Context In-Place** ([#116086](https://github.com/nousresearch/hermes-agent/pull/116086)) | pepestal | P3 | Direct response to user desire for clean context resets without session reset. |

**Prediction:** The next minor release (likely v0.22.x) will include:  
- Session persistence improvements (group chats, cross-device sync)  
- Enhanced security boundaries (eTLD+1 vault support, bubblewrap sandboxing)  
- Improved onboarding flows (one-click bots, clearer error messaging)

---

### **7. User Feedback Summary**  
Real-world pain points revealed through issue comments:

- **“I lost 2 hours of work because the CLI silently dropped my session.”** — *User experience failure due to #109687*  
- **“My Gemini key stopped working after an update — I had to roll back.”** — *Frustration with regression in auth flow*  
- **“I can’t start a group chat between bots and pick it up later on another device.”** — *Core workflow gap in collaboration*  
- **“The background curator is filling up my `/skills pending` list with 40+ items in 12 hours.”** — *Unbounded queue = unusable interface*  
- **“Why can’t I save a login for `naver.com` and use it on `news.naver.com`?”** — *Usability barrier in credential handling*

Users value **reliability**, **continuity**, and **low-friction interaction**, but current instability in state management and configuration handling erodes trust.

---

### **8. Backlog Watch**  
Long-standing, high-impact issues needing attention:

| Issue | Status | Duration | Why It Matters |
|------|--------|----------|----------------|
| [#88584](https://github.com/nousresearch/hermes-agent/issues/88584) | Open, P3 | 2 months | Blocks automated integration pipeline; delays ecosystem upgrades. |
| [#100896](https://github.com/nousresearch/hermes-agent/issues/100896) | Open, P1 | 1 week | Recurring DB corruption threatens production deployments. |
| [#105574](https://github.com/nousresearch/hermes-agent/issues/105574) | Open, P1 | 1 week | Corrupted tool-call args during long sessions → task failures. |
| [#76795](https://github.com/nousresearch/hermes-agent/issues/76795) | Open, P3 | 1 month | Unbounded `/skills pending` queue renders UI unusable. |
| [#115306](https://github.com/nousresearch/hermes-agent/issues/115306) | Open, P2 | 1 day | Regression in Gemini auth — urgent fix needed for user adoption. |

> 🔗 [Backlog Watch: #88584 – Blocked Integration](https://github.com/nousresearch/hermes-agent/issues/88584)  
> 🔗 [Backlog Watch: #100896 – Persistent DB Corruption](https://github.com/nousresearch/hermes-agent/issues/100896)

---

**Conclusion:**  
Hermes Agent is in a phase of intense engineering refinement. While the project shows strong momentum in features and contributions, **core stability issues**—particularly around session state integrity and authentication—are becoming increasingly visible and disruptive. The community is actively demanding more resilient, user-friendly, and interoperable behavior. Immediate focus should shift toward resolving P0/P1 bugs before introducing new features. With proper triage and prioritization, Hermes has the potential to emerge as a trusted, production-grade AI agent framework by Q4 2026.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

---

### **1. Today's Overview**  
As of 2026-09-19, the IronClaw project shows low immediate activity: no new issues or releases were published in the past 24 hours. However, three pull requests remain open, indicating ongoing development momentum despite a quiet surface-level status. The most notable work centers on enhancing identity mediation for agentless workflows (PR #7499), resolving critical OAuth readiness issues in extensions (PR #8102), and improving Reborn’s storage resilience across profiles (PR #7456). These developments suggest a focus on foundational reliability, security isolation, and usability for practitioners—particularly around deployment flexibility and provider integration.

---

### **2. Releases**  
No new releases have been published as of 2026-09-19. There are no release notes, breaking changes, or migration guides to report at this time.

---

### **3. Project Progress**  
Three pull requests are currently open with no merges or closures reported today. Key progress includes:  
- **PR #7499**: Introduces `builtin.idcp` and policy-based Passport mediation to enable processless IronClaw agents to interact with IdentyClaw Passport without requiring shell access or installable extensions. A practitioner host kit will be shipped under `deploy/identyclaw/`. This is a significant step toward agent autonomy and reduced friction in deployment.  
- **PR #8102**: Addresses a critical regression where Gmail/Google Calendar providers failed to activate when configured via Web UI instead of environment variables. Fixes live readiness checks to respect administrator configuration order, ensuring consistent OAuth lifecycle handling.  
- **PR #7456**: Refactors Reborn’s durable storage architecture to be profile-agnostic, centralizing state directories under `IRONCLAW_REBORN_HOME` while preserving security envelopes across restarts. This improves long-term stability and tenancy integrity.

---

### **4. Community Hot Topics**  
The most active PRs reflect deep architectural concerns around identity, deployment flexibility, and system resilience:  

- **[PR #7499](https://github.com/nearai/ironclaw/pull/7499)** – *feat(identyclaw): host-mediated Passport for practitioners*  
  - **Why it matters**: Enables agentless execution with minimal setup, targeting developers and operators who want to run AI agents without installing extensions or managing shells. This signals growing demand for lightweight, secure, and embeddable identity flows in decentralized agent ecosystems.

- **[PR #8102](https://github.com/nearai/ironclaw/pull/8102)** – *fix(extensions): resolve provider-instance readiness live, administrator configuration first*  
  - **Why it matters**: Highlights real-world deployment pain points when using GUI-based admin configurations. Users expect consistency regardless of configuration method—this fix bridges a gap between UX and backend logic, crucial for enterprise adoption.

- **[PR #7456](https://github.com/nearai/ironclaw/pull/7456)** – *fix(reborn): make durable storage profile-agnostic*  
  - **Why it matters**: Points to long-term concerns about persistence, restart safety, and multi-profile isolation. This change reflects a maturing understanding of operational durability in persistent agent environments.

> 🔗 *All PRs linked above are actively being developed and represent core infrastructure improvements.*

---

### **5. Bugs & Stability**  
No crash reports or regressions were reported in the last 24 hours. However, two high-impact bugs are currently addressed in open PRs:

- **Critical**: Google OAuth provider activation failure when using Web UI config (PR #8102)  
  - **Severity**: High — breaks functionality for users relying on web-based admin tools.  
  - **Status**: Fix in progress; expected to resolve after review. No known workaround.

- **Medium**: Profile-specific storage dependencies leading to potential tenancy weakening post-restart (PR #7456)  
  - **Severity**: Medium (risk of data corruption or cross-profile leakage if not fixed).  
  - **Status**: Under active development; fix involves re-architecting root paths and enforcing typed security envelopes.

> ✅ Both issues have corresponding fix PRs in flight, suggesting strong internal responsiveness.

---

### **6. Feature Requests & Roadmap Signals**  
While no formal feature requests were opened today, the following trends emerge from open PRs and contributor patterns:  

- **Agentless Identity Mediation**: PR #7499 indicates rising demand for "zero-install" agent workflows, especially for edge deployments or embedded systems.  
- **Flexible Configuration Paths**: PR #8102 suggests that future versions may prioritize configuration parity across UI/env var/methods, possibly introducing a unified config layer.  
- **Persistent, Isolated Workspaces**: PR #7456 reveals interest in robust, reusable agent environments that survive restarts without compromising security. This aligns with roadmap goals for "Reborn" as a stable, production-grade runtime.

> 🚀 Likely next version features:  
> - Hosted Passport mediation (`builtin.idcp`)  
> - Unified provider readiness validation  
> - Profile-agnostic durable storage with audit-safe restarts

---

### **7. User Feedback Summary**  
Although direct user comments are absent in recent issues, indirect feedback is evident through PR content:  

- **Pain Point**: Difficulty configuring OAuth providers via Web UI despite successful token exchange. Users expect configuration to persist and function identically regardless of input method.  
- **Use Case**: Practitioners want to deploy agents in constrained environments (e.g., CI/CD, serverless) without needing shell access or extension installs—highlighted by the `host-mediated Passport` proposal.  
- **Satisfaction Signal**: Core contributors are addressing complex, systemic issues (e.g., storage isolation, security envelopes), indicating alignment with user expectations for robustness and security.

> 👥 Feedback is largely encoded in technical design decisions rather than explicit issue threads—suggesting mature, self-aware development culture.

---

### **8. Backlog Watch**  
No new issues were opened recently, but several important PRs remain unmerged and warrant maintainer attention:  

- **[PR #7499](https://github.com/nearai/ironclaw/pull/7499)** – *XL scope, low risk, new contributor*: This is a foundational feature for agent accessibility. Its delay could hinder adoption among non-technical practitioners.  
- **[PR #7456](https://github.com/nearai/ironclaw/pull/7456)** – *XL scope, medium risk, core contributor*: Critical for long-term system stability. Should be prioritized due to implications for data integrity and tenant isolation.  
- **[PR #8102](https://github.com/nearai/ironclaw/pull/8102)** – *Fix with clear impact*: Urgent fix for a broken workflow affecting real users. Needs timely review to avoid user frustration.

> ⏳ **Recommendation**: Maintainers should triage these three PRs for review within the next 72 hours to sustain momentum and prevent bottlenecks.

--- 

✅ **Project Health Summary (2026-09-19)**:  
IronClaw demonstrates strong internal engineering focus and proactive resolution of deep-system issues. Despite low visible activity, the project is advancing meaningfully in security, identity, and persistence layers. With key fixes and features in flight, the project is well-positioned for a stable, impactful release in Q4 2026.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-09-19**

---

### **1. Today's Overview**  
QwenPaw (v2.2.x) remains highly active with a strong influx of developer engagement: **15 new issues** and **22 pull requests** opened in the past 24 hours, indicating robust momentum in feature development and issue triage. The project shows clear signs of maturity—complex system-level fixes dominate, especially around context management, security, and cross-provider compatibility. No new releases were published today, suggesting the team is prioritizing internal stabilization over version churn. Despite this, the community is vocal about critical UX pain points, particularly around session history retention and model access.

---

### **2. Releases**  
❌ **No new releases** were published on 2026-09-19.  
The latest stable version remains **v2.2.1**, which has already seen multiple hotfixes via PRs (e.g., #7869 for OpenCode headers, #7873 for scroll sandbox clarity). Users are advised to upgrade to v2.2.1+ to avoid known regressions like `MissingSessionID` (Issue #7599) or PDF serialization errors (Issue #7883).

---

### **3. Project Progress**  
✅ **Merged/Closed PRs (Today):**  
- **#7873** (`fix(scroll): explain advanced recall sandbox limitations`) – Adds explicit model-facing notice when `recall_history_python` is unavailable due to kernel/sandbox constraints. Improves transparency for users on older systems. [PR #7873](https://github.com/agentscope-ai/QwenPaw/pull/7873)  
- **#7872** (`fix(scroll): preserve interrupted requests across follow-up compaction`) – Addresses Issue #7836 by ensuring user turns bracketing long tool chains aren’t lost during context eviction. Critical for long-running tasks. [PR #7872](https://github.com/agentscope-ai/QwenPaw/pull/7872)  
- **#7871** (`fix(tools): prevent literal markers from bypassing output truncation`) – Fixes a security-sensitive bypass where `<<<TRUNCATED>>>` in tool output evaded size limits. Prevents potential context overflow attacks. [PR #7871](https://github.com/agentscope-ai/QwenPaw/pull/7871)  
- **#7864** (`fix(security): protect skill directories against prompt-injected deletion`) – Implements integrity checks in `FilePathToolGuardian` to block destructive operations. Direct response to vulnerability reports. [PR #7864](https://github.com/agentscope-ai/QwenPaw/pull/7864)  
- **#7869** (`fix(providers): send OpenCode session header`) – Resolves `MissingSessionID` error by injecting required `x-opencode-session-id` header. Fixes broken API access for OpenCode Go users. [PR #7869](https://github.com/agentscope-ai/QwenPaw/pull/7869)

These PRs collectively reinforce **security hardening**, **context stability**, and **cross-provider reliability**—hallmarks of a mature agent framework.

---

### **4. Community Hot Topics**  
🔥 **Most Active Issues & PRs (by comments/reactions):**  

| Issue / PR | Type | Comments | Link | Key Insight |
|-----------|------|---------|------|------------|
| [#7878](https://github.com/agentscope-ai/QwenPaw/issues/7878) | Feature Request | 3 | [Issue #7878](https://github.com/agentscope-ai/QwenPaw/issues/7878) | User demands plugin-visible pre-tool-call policy hooks — signals growing need for **custom governance integrations** (e.g., enterprise compliance, AI safety checks). |
| [#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) | Bug | 1 | [Issue #7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) | Persistent PDF serialization bug after fix was thought resolved — indicates **deep integration testing gaps** between providers and tool adapters. |
| [#7880](https://github.com/agentscope-ai/QwenPaw/pull/7880) | Feature PR | undefined | [PR #7880](https://github.com/agentscope-ai/QwenPaw/pull/7880) | First-time contributor adds escalation-only tool policy hooks — aligns with #7878; suggests **modular governance** is becoming a core user expectation. |
| [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) | User Feedback | 1 | [Issue #7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) | "Chat history too short!" — reflects **user frustration with context retention**, likely tied to aggressive scroll eviction logic. |

💡 **Underlying Need:** Users want **longer, more reliable sessions** with **predictable context behavior** and **greater control over policy enforcement**—especially in enterprise or production settings.

---

### **5. Bugs & Stability**  
🚨 **Critical Bugs Reported (Rank by Severity):**

1. **#7853** – *ToolResultPruner skips media blocks (type="data"), causing base64 image data to accumulate indefinitely → context overflow.*  
   - 🔥 **Severity**: High (breaks model input beyond threshold)  
   - 🛠️ **Fix Status**: Pending — no PR yet. This is a systemic flaw in context pruning.  
   - [Issue #7853](https://github.com/agentscope-ai/QwenPaw/issues/7853)

2. **#7881** – *Kimi-code ACP runner bypasses boundary checks unevenly: edit blocked, but write/new file/Bash fully blind.*  
   - 🔥 **Severity**: High (security risk — uncontrolled code execution)  
   - 🛠️ **Fix Status**: Under review — requires careful design adjustments.  
   - [Issue #7881](https://github.com/agentscope-ai/QwenPaw/issues/7881)

3. **#7882** – *OpenCode free-tier models reject API calls (403 FreeTierError), despite UI marking them as free.*  
   - 🔥 **Severity**: Medium-High (misleading UX, breaks user trust)  
   - 🛠️ **Fix Status**: Fix PR exists (#7869) — pending merge.  
   - [Issue #7882](https://github.com/agentscope-ai/QwenPaw/issues/7882)

4. **#7876** – *DeepSeek rejects audio content part (422 "unknown variant") → conversation permanently broken.*  
   - 🔥 **Severity**: Medium (functional regression for voice/audio use cases)  
   - 🛠️ **Fix Status**: No PR yet. Requires format normalization.  
   - [Issue #7876](https://github.com/agentscope-ai/QwenPaw/issues/7876)

⚠️ **Note**: Multiple bugs involve **provider-specific edge cases** (OpenCode, DeepSeek, Kimi), highlighting the challenge of maintaining broad compatibility.

---

### **6. Feature Requests & Roadmap Signals**  
🚀 **Emerging Priorities from User Feedback:**

- **Agent-autonomous context management** ([#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733)) – Users want agents to **influence or delay context eviction**, not just react to it. This suggests a shift toward **adaptive, intelligent state management**.
- **Plugin-visible pre-tool-call policy hooks** ([#7878](https://github.com/agentscope-ai/QwenPaw/issues/7878)) – Indicates demand for **extensible governance pipelines**. Likely to be a cornerstone of v2.3.
- **Longer chat history retention** ([#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884)) – Reflects a gap in UX design. Users expect persistent memory, not ephemeral sessions.
- **Creator video creation control plane** ([#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874)) – Shows interest in **higher-level orchestration tools** (beyond raw API calls).

🔮 **Predicted Next Version (v2.3)** will likely include:
- Enhanced context lifecycle controls
- Plugin-extensible policy hooks
- Improved provider abstraction layer
- Long-term session persistence features

---

### **7. User Feedback Summary**  
💬 **Real Pain Points Expressed:**

- **"Chat history is too short"** ([#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884)): Users feel they lose context after a few turns — impacts productivity in long tasks.
- **"Free models don’t work"** ([#7882](https://github.com/agentscope-ai/QwenPaw/issues/7882)): Frustration with misleading UI vs. actual API behavior erodes trust.
- **"Tools break conversations"** ([#7881](https://github.com/agentscope-ai/QwenPaw/issues/7881), [#7876](https://github.com/agentscope-ai/QwenPaw/issues/7876)): Security and compatibility issues undermine reliability.
- **"File tabs don’t update"** ([#7866](https://github.com/agentscope-ai/QwenPaw/issues/7866)): Basic UX inconsistency reduces confidence in the editor.

✅ **Satisfaction Indicators**:  
- First-time contributors are actively submitting high-quality PRs (e.g., #7870, #7868).  
- Merged fixes show responsiveness to real-world issues (e.g., OpenCode, sandbox warnings).

---

### **8. Backlog Watch**  
🔍 **Important Issues Requiring Maintainer Attention:**

| Issue | Priority | Reason |
|------|----------|--------|
| [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) | ⚠️ **High** | Systemic context overflow bug — could cause crashes at scale. No fix PR yet. |
| [#7878](https://github.com/agentscope-ai/QwenPaw/issues/7878) | ✅ **High** | Critical for extensibility. Already has a related PR (#7880). Should be prioritized. |
| [#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) | ⚠️ **High** | Recurring bug — users report it’s still broken post-fix. Needs deeper investigation. |
| [#7879](https://github.com/agentscope-ai/QwenPaw/issues/7879) | ⚠️ **Medium** | OAuth failure with static Bearer Key MCP servers (e.g., QCC). Blocks integration with key enterprise tools. |

📌 **Recommendation**: Assign maintainers to triage these issues within 48 hours to prevent user attrition and ensure roadmap alignment.

---

> ✅ **Overall Project Health**: **Strong**. High contribution velocity, mature bug triage, and growing demand for advanced governance and context control suggest QwenPaw is transitioning from early adoption to production-grade agent orchestration. However, **context management and provider reliability remain Achilles’ heels** requiring focused attention.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest**  
**Date:** 2026-09-19  
**Repository:** [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

### **1. Today's Overview**

ZeroClaw continues to exhibit strong momentum with high engagement across issues and pull requests: **32 new issue updates** and **50 PR updates** in the last 24 hours, reflecting active development on core infrastructure, security hardening, and agent orchestration. The project is in a critical phase of architectural refinement—particularly around runtime modularity, provenance tracking, and secure delegation—evident in numerous high-risk, high-priority enhancements and bug fixes. Despite no new releases, the pipeline remains rich with feature delivery and stability improvements, indicating that v0.8.6 and v0.9.0 are nearing completion.

---

### **2. Releases**

> ❌ **No new releases** observed today or in the past 7 days.

The project remains in a pre-release state for **v0.8.6 (Phase 2 runtime)** and **v0.9.0 (Phase 3 gateway separation)**, as tracked in [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432). No breaking changes or migration notes are currently applicable.

---

### **3. Project Progress**

#### ✅ **Merged/Closed PRs (Today)**
While only **2 PRs were merged/closed** in the last 24h, several significant contributions advanced:

- **[PR #10955](https://github.com/zeroclaw-labs/zeroclaw/pull/10955)**: *feat(runtime): detect encoding for shell output*  
  → Adds intelligent UTF-8 + `chardetng` fallback for shell outputs, improving cross-platform reliability.
  
- **[PR #10954](https://github.com/zeroclaw-labs/zeroclaw/pull/10954)**: *feat(shell): initialize PowerShell output as UTF-8*  
  → Ensures consistent UTF-8 handling in PowerShell across platforms, preventing encoding corruption.

These two PRs represent progress in **runtime robustness and cross-platform compatibility**, particularly for Windows users relying on shell tools.

---

### **4. Community Hot Topics**

#### 🔥 **Most Active Issues (by comment count & priority)**

| Issue | Summary | Link | Comments | Priority |
|------|--------|------|---------|----------|
| [#8046](https://github.com/zeroclaw-labs/zeroclaw/issues/8046) | Optional Telegram webhook mode (alternative to long polling) | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8046) | 5 | P2 (High Risk) |
| [#10531](https://github.com/zeroclaw-labs/zeroclaw/issues/10531) | Expose delegate sub-agent progress to parent (tool receipts, partial output) | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10531) | 4 | P2 (High Risk) |
| [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | Move channels/tools from compile-time features to runtime WASM plugins | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | 4 | P2 (High Risk) |

#### 📊 **Analysis of Underlying Needs**
- **Flexibility in Ingress**: Developers demand **Telegram webhook support** to bypass long-polling limitations in cloud environments (e.g., serverless, reverse proxies).
- **Agent Transparency**: Users need **intermediate visibility into delegated tasks**—a critical gap in agent autonomy and debugging.
- **Modular Extensibility**: The push to move features to **WASM plugins** signals a desire for **lightweight, hot-swappable components** without recompilation—aligning with ZeroClaw’s modular architecture vision.

> These top issues reflect a maturing ecosystem where users are moving beyond basic functionality toward **orchestration, observability, and deployment flexibility**.

---

### **5. Bugs & Stability**

#### ⚠️ **Critical Bugs Reported (Severity S0–S2)**

| Issue | Severity | Description | Fix PR? |
|------|----------|-------------|--------|
| [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) | **S0** (Data Loss / Security Risk) | Unattended agents run without `ApprovalManager`, making tool approvals inert | ❌ No fix yet |
| [#10966](https://github.com/zeroclaw-labs/zeroclaw/issues/10966) | **S0** (Security Risk) | `--attr-source` hides mutating Git commands from approval classification | ❌ No fix yet |
| [#10973](https://github.com/zeroclaw-labs/zeroclaw/issues/10973) | **S3** (Degraded Behavior) | WhatsApp Web mentions broken inbound/outbound | ❌ No fix yet |
| [#10972](https://github.com/zeroclaw-labs/zeroclaw/issues/10972) | **S2** (Major Feature Broken) | Inbound images delivered as literal `[Image]` text — vision unusable | ❌ No fix yet |
| [#10948](https://github.com/zeroclaw-labs/zeroclaw/issues/10948) | **S2** (Degraded Behavior) | `interruption_scope_key` collisions across component boundaries | ❌ No fix yet |

> **Note**: Several high-severity bugs remain open despite being marked "accepted" or "in-progress", suggesting potential delays in triage or implementation. The lack of associated PRs for S0/S1 bugs raises concern about risk exposure.

---

### **6. Feature Requests & Roadmap Signals**

#### 🚀 **Top Feature Requests (Predicted for v0.8.6/v0.9.0)**

| Feature | Expected Release | Rationale |
|--------|------------------|---------|
| **Telegram Webhook Mode** ([#8046](https://github.com/zeroclaw-labs/zeroclaw/issues/8046)) | v0.8.6 | Directly addresses ingress flexibility; aligns with current gateway evolution. |
| **Runtime Plugin System** ([#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850)) | v0.9.0 | Core to zero-compile-time-bloat philosophy; enables extensible, secure plugin ecosystem. |
| **Delegate Sub-Agent Progress Exposure** ([#10531](https://github.com/zeroclaw-labs/zeroclaw/issues/10531)) | v0.9.0 | Critical for complex agent workflows; matches RFC #6954 and #7155 roadmap. |
| **Delivery Receipts for Outbound Messages** ([#10929](https://github.com/zeroclaw-labs/zeroclaw/issues/10929)) | v0.9.0 | Needed for auditability and human-agent interaction integrity. |
| **Configurable Anthropic Cache TTL** ([#10663](https://github.com/zeroclaw-labs/zeroclaw/issues/10663)) | v0.8.6 | Fine-grained control over cost/performance trade-offs; low-risk, high-value. |

> **Roadmap Signal**: The project is clearly shifting from **monolithic execution** to **modular, observable, and composable agent systems**—with v0.9.0 likely serving as a major architectural milestone.

---

### **7. User Feedback Summary**

#### 💬 **Real User Pain Points**
- **WhatsApp Web Channel**: Users report **broken image and mention handling** ([#10972](https://github.com/zeroclaw-labs/zeroclaw/issues/10972), [#10973](https://github.com/zeroclaw-labs/zeroclaw/issues/10973)), severely limiting its utility for vision-enabled or social interactions.
- **Shell Tool Reliability**: Encoding issues (UTF-8 vs. system default) cause **data corruption**, especially in PowerShell on Windows ([#10955](https://github.com/zeroclaw-labs/zeroclaw/issues/10955)).
- **Delegation Obscurity**: Users cannot track **sub-agent progress mid-run**, leading to uncertainty in long-running agent workflows ([#10531](https://github.com/zeroclaw-labs/zeroclaw/issues/10531)).
- **Security Blind Spots**: Git command bypasses (`-C`, `--attr-source`) expose **unapproved code execution risks**, undermining trust in sandboxing ([#9627](https://github.com/zeroclaw-labs/zeroclaw/issues/9627), [#10966](https://github.com/zeroclaw-labs/zeroclaw/issues/10966)).

> **Overall Sentiment**: High satisfaction with core agent logic and extensibility, but growing frustration with **channel reliability, security transparency, and debugging capabilities**.

---

### **8. Backlog Watch**

#### ⏳ **Long-Unanswered High-Impact Items**

| Issue | Status | Why It Matters |
|------|--------|----------------|
| [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) | Open, P1, S0 | Unattended agents running without approval manager = **critical security flaw**. Must be addressed immediately. |
| [#10966](https://github.com/zeroclaw-labs/zeroclaw/issues/10966) | Open, P1, S0 | Git command bypass via `--attr-source` undermines **entire risk classification system**. High severity. |
| [#10973](https://github.com/zeroclaw-labs/zeroclaw/issues/10973) | Open, S3 | WhatsApp Web channel is **non-functional for key use cases**. Blocks real-world adoption. |
| [#10531](https://github.com/zeroclaw-labs/zeroclaw/issues/10531) | Open, P2, High Risk | Lack of sub-agent progress feedback breaks **complex agent design patterns**. |
| [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | In-Progress, P2, High Risk | Delay in plugin migration may **block future extensibility** and increase binary size. |

> **Call to Action**: Maintainers should prioritize **security-critical issues (#10968, #10966)** and **user-facing channel bugs (#10973, #10972)**. The backlog shows strong technical ambition but needs better triage discipline.

---

### ✅ **Final Assessment**

ZeroClaw is in a **high-growth, high-complexity phase**—architecturally ambitious, technically sophisticated, and user-driven. However, **security vulnerabilities and channel regressions are not being resolved fast enough**, risking credibility and adoption. The team must balance innovation with **risk mitigation and user experience** to ensure v0.8.6/v0.9.0 deliver on both promise and safety.

> 🔗 **Project Health Score**: ⚠️ **Moderate (Growing but Risky)**  
> **Recommendation**: Prioritize S0/S1 bugs, accelerate PR reviews, and improve issue triage visibility.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*