# OpenClaw Ecosystem Digest 2026-09-24

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-09-24 00:50 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest — 2026-09-24**

---

### **1. Today's Overview**  
The OpenClaw project remains highly active with a surge in developer engagement: **500 issues and 500 pull requests updated in the last 24 hours**, indicating intense community involvement and ongoing development pressure. The ecosystem is grappling with critical stability issues, particularly around **memory leaks, crash loops, and update failures**, while also advancing UI/UX refinements and cross-platform support. A recent **v2026.9.6 release** has been withdrawn for macOS due to severe launch crashes, highlighting urgent platform-specific risks. Despite this, progress continues on core reliability fixes and feature enhancements, suggesting a mature but stressed codebase under active maintenance.

---

### **2. Releases**  
- **New Release**: `v2026.9.6` (released 2026-09-23)  
  - **⚠️ Critical Warning**: The **macOS app build is currently broken** and **must not be used**. It triggers a crash loop on every launch after in-app update ([#156861](https://github.com/openclaw/openclaw/issues/156861)).  
  - The release has been **withdrawn from Sparkle feed**; users are advised to **reinstall v2026.9.5** until a hotfix (v2026.9.7) is available.  
  - No other platforms are reported affected at this time.  
  - [Release Notes (Flat Changelog)](https://github.com/openclaw/openclaw/pull/156875)

---

### **3. Project Progress**  
**Merged/Closed PRs (Today)**: 100  
- **UI/UX Improvements**:  
  - [#144730](https://github.com/openclaw/openclaw/pull/144730): Fixes duplicate assistant replies in terminal UI (P2).  
  - [#145093](https://github.com/openclaw/openclaw/pull/145093): Adds drag-to-resize for chat composer and column in Control UI (P2).  
  - [#137754](https://github.com/openclaw/openclaw/pull/137754): Restores Archive option for iOS active sessions (P2).  
- **Core Stability & Fixups**:  
  - [#156824](https://github.com/openclaw/openclaw/pull/156824): Fixes missing foreign DB commits during SQLite reads (P2).  
  - [#107921](https://github.com/openclaw/openclaw/pull/107921): Re-throws non-ENOENT/ENOTDIR errors in memory file lookup (P2).  
  - [#156667](https://github.com/openclaw/openclaw/pull/156667): Cleans up leftover memory-core dreaming jobs after sidecar unload (P2).  
- **Documentation & Tooling**:  
  - [#156875](https://github.com/openclaw/openclaw/pull/156875): Adds flat changelog for v2026.9.6 (P2).  
  - [#155743](https://github.com/openclaw/openclaw/pull/155743): Limits security review checkout scope (P2).  

> ✅ **Key Advances**: Improved session state consistency, enhanced CLI/UI usability, and better error propagation in critical subsystems.

---

### **4. Community Hot Topics**  
Top 5 most commented issues reflect deep user pain points:

| Issue | Comments | Severity | Key Insight |
|------|---------|----------|------------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 39 | P0 (Critical) | Gateway memory leak from 350MB → 15.5GB over days; causes OOM kills and restart loops. |
| [#126360](https://github.com/openclaw/openclaw/issues/126360) | 19 | P1 | `AgentSelectionRequiredError` floods logs when agents lack `agentId` targets—critical for multi-agent workflows. |
| [#148707](https://github.com/openclaw/openclaw/issues/148707) | 16 | P1 | Reply lost due to "no active tool authority snapshot" in 2026.9.4 regression—impacts message fidelity. |
| [#152981](https://github.com/openclaw/openclaw/issues/152981) | 15 | P0 | Gateway startup hangs 17+ minutes due to model runtime timeout—blocks release. |
| [#156861](https://github.com/openclaw/openclaw/issues/156861) | 6 | P0 | Update to v2026.9.6 leaves macOS app unlaunchable—**user-facing crisis**. |

> 🔥 **Underlying Need**: Users demand **stable, predictable performance** across long-running sessions, especially in production or multi-agent setups. Crashes and silent data loss erode trust.

---

### **5. Bugs & Stability**  
Ranked by severity and impact:

| Issue | Severity | Impact | Status | Fix PR? |
|------|----------|--------|--------|--------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | P0 | Crash-loop (OOM) | Open | ❌ |
| [#152981](https://github.com/openclaw/openclaw/issues/152981) | P0 | Startup hang (17min), UX blocker | Open | ❌ |
| [#156861](https://github.com/openclaw/openclaw/issues/156861) | P0 | Mac app unlaunchable | Open | ❌ (hotfix in progress) |
| [#148707](https://github.com/openclaw/openclaw/issues/148707) | P1 | Message loss (regression) | Open | ❌ |
| [#146887](https://github.com/openclaw/openclaw/issues/146887) | P0 | Update failure across 4 stages | Open | ❌ |
| [#140010](https://github.com/openclaw/openclaw/issues/140010) | P1 | Sleep/resume WebSocket failure (Windows) | Open | ❌ |

> ⚠️ **Critical Risk**: Multiple **P0 bugs** affect **core stability**, **update flow**, and **platform compatibility**. The macOS issue (#156861) is now a **release blocker** for all Mac users.

---

### **6. Feature Requests & Roadmap Signals**  
High-priority user-driven features emerging from issue activity:

| Request | Link | Signal | Priority |
|--------|------|--------|----------|
| One-way dispatch mode (no reply ping-pong) | [#44309](https://github.com/openclaw/openclaw/issues/44309) | Enables lightweight agent handoffs | P2 |
| Support multiple Teams bots per gateway | [#71058](https://github.com/openclaw/openclaw/issues/71058) | Needed for enterprise deployments | P2 |
| Linux aarch64 companion builds (deb + AppImage) | [#138279](https://github.com/openclaw/openclaw/issues/138279) | Growing ARM user base needs native support | P3 |
| Stream repetition safeguard (halt & confirm) | [#44965](https://github.com/openclaw/openclaw/issues/44965) | Prevents infinite loops in model output | P2 |
| Retain discussion audience & reply authorship | [#156839](https://github.com/openclaw/openclaw/pull/156839) | Improves clarity in shared contexts | P2 |

> 📌 **Predicted Next Version Focus**: **Stability fixes (especially macOS & memory)** will dominate v2026.9.7. Long-term roadmap likely includes **multi-bot support, ARM Linux builds, and AI safety guards**.

---

### **7. User Feedback Summary**  
Real-world pain points from open issues:

- **MacOS users**: Completely unable to launch after update → **loss of access**.
- **Enterprise/production users**: Report **session corruption**, **message loss**, and **unreliable auto-compaction** in long-lived workflows (>13 days).
- **Multi-agent operators**: Struggle with **missing agentId context**, **flooded logs**, and **silent tool injection failures**.
- **Mobile users (Android/iOS)**: Face **voice call drops**, **inconsistent session recovery**, and **broken UI states**.
- **Developers**: Express frustration with **opaque error messages**, **lack of debugging visibility**, and **undocumented edge cases** in tooling.

> 💬 **Satisfaction Level**: Low. Users report **crucial workflow interruptions** and **high cognitive load** managing workarounds.

---

### **8. Backlog Watch**  
Critical Issues/PRs requiring maintainer attention:

| Issue/PR | Reason | Status | Action Required |
|--------|--------|--------|----------------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Memory leak → OOM crashes | Open (P0) | Immediate fix needed |
| [#156861](https://github.com/openclaw/openclaw/issues/156861) | macOS app unlaunchable | Open (P0) | Hotfix priority |
| [#152981](https://github.com/openclaw/openclaw/issues/152981) | 17-min startup hang | Open (P0) | Release blocker |
| [#126360](https://github.com/openclaw/openclaw/issues/126360) | Agent selection flood | Open (P1) | Design decision needed |
| [#156875](https://github.com/openclaw/openclaw/pull/156875) | Flat changelog missing | Merged | Documentation follow-up |
| [#156867](https://github.com/openclaw/openclaw/pull/156867) | Memory-core refactoring | Open (P3) | Review pending |

> 🧩 **Call to Maintainers**: Prioritize **P0 stability fixes** and **macOS emergency patch**. Clear triage path for high-comment issues to prevent stagnation.

---  
*Data Source: GitHub — openclaw/openclaw | Updated: 2026-09-24*

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem (2026-09-24)**

---

### **1. Ecosystem Overview**  
The personal AI assistant and agent open-source ecosystem in Q3 2026 is characterized by rapid iteration, divergent maturity stages, and growing focus on enterprise readiness. While foundational projects like OpenClaw and QwenPaw are pushing the boundaries of multi-agent workflows and long-running session stability, others such as IronClaw and ZeroClaw are stabilizing around secure, production-grade runtime environments. A clear trend toward **platform-specific reliability**, **cross-channel integration**, and **security-hardened execution** is emerging across the landscape. The community is increasingly demanding predictable behavior, auditability, and resilience—signaling a shift from experimental prototyping to real-world deployment.

---

### **2. Activity Comparison**

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* |
|--------|--------------|-----------|----------------|---------------|
| **OpenClaw** | 500 | 500 | v2026.9.6 withdrawn (macOS crash loop) | ⚠️ Critical |
| **Hermes Agent** | 50 | 50 | None | ✅ Stable |
| **IronClaw** | 0 | 0 | `1.4.1-rc.1` → preparing `rc.2` | ✅ Healthy |
| **QwenPaw** | 37 | 24 | v2.2.0 stable; beta builds active | ⚠️ Active |
| **ZeroClaw** | 11 | 50 | None (v0.8.5 current) | ⚠️ High Pressure |

> *Health Score: Based on stability, release integrity, bug severity, and community sentiment (✅ = healthy, ⚠️ = under pressure, ❌ = critical risk)*

---

### **3. OpenClaw's Position**  
OpenClaw stands out as the most **high-velocity and high-risk project** in the ecosystem. With 500 issues and 500 PRs updated daily, it exhibits the largest community engagement and development intensity—far exceeding peers. Its technical approach centers on **deep system-level integration** with SQLite persistence, memory-core sidecar management, and aggressive UI/UX refinement, enabling complex multi-agent orchestration but at the cost of heightened instability. Compared to Hermes Agent’s mature security focus or IronClaw’s stability-first model, OpenClaw operates in a “bleeding edge” mode, attracting early adopters and developers seeking maximum feature depth—but also facing severe P0 bugs like memory leaks and macOS crashes. Community size appears largest, driven by its role as a core reference implementation.

---

### **4. Shared Technical Focus Areas**  
Across all five projects, recurring technical needs reflect systemic challenges in scaling AI agents:

- **Memory & Context Management**:  
  - *OpenClaw* (#91588): Memory leak → OOM crashes  
  - *QwenPaw* (#7853): Base64 media bloating due to poor tool output pruning  
  - *Hermes Agent* (#120582): Proactive pruning causes data loss  
  > 🔗 **Need**: Reliable context compaction, safe eviction policies, and transparent memory accounting.

- **Security & Access Control**:  
  - *ZeroClaw* (#10968): Unattended agents bypass ApprovalManager  
  - *Hermes Agent* (#59293): CLI config bypasses system protection  
  - *OpenClaw* (#156867): Memory-core refactoring pending review  
  > 🔗 **Need**: Unified security enforcement across CLI/GUI, sandboxed execution, and audit trails.

- **Cross-Platform Stability**:  
  - *OpenClaw* (macOS crash loop)  
  - *Hermes Agent* (Windows `FAST_FAIL_FATAL_APP_EXIT`)  
  - *ZeroClaw* (WhatsApp voice routing failure)  
  > 🔗 **Need**: Platform-specific testing, dependency alignment, and crash reporting.

- **Error Visibility & Debuggability**:  
  - *QwenPaw* (#7715): Silent Daily Paper failure  
  - *ZeroClaw* (#10985): Dashboard tools fail silently  
  > 🔗 **Need**: Diagnostic feedback, user-facing error messages, and observability layers.

---

### **5. Differentiation Analysis**

| Dimension | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|---------|----------|--------------|----------|---------|----------|
| **Target Users** | Advanced developers, multi-agent researchers | Enterprise users, privacy-conscious teams | Production-grade deployments, regulated environments | Teams, Hub-based collaboration | Automation engineers, channel integrators |
| **Feature Focus** | Core engine, session fidelity, UI polish | Security, i18n, plugin ecosystem | Runtime safety, dependency hygiene | Multi-tenancy, A2A protocol, autonomy | Channel integration, SOP automation |
| **Technical Architecture** | Monolithic core + sidecar agents | Plugin-driven, modular desktop agent | WASM-based virtual skill roots, minimal runtime | Modular hub architecture, extensible memory systems | Headless workflow engine, sandboxed WASM plugins |
| **Deployment Model** | Local-first, self-hosted | Desktop + local models | Cloud-edge hybrid | Multi-tenant Hub | WhatsApp/Webhook-centric |

> 📌 **Key Differentiator**:  
> - **OpenClaw** leads in *complexity and customization*.  
> - **IronClaw** excels in *trust-by-design and compliance*.  
> - **ZeroClaw** dominates in *channel-native automation*.  
> - **QwenPaw** is pivoting toward *enterprise collaboration*.  
> - **Hermes Agent** emphasizes *global accessibility and security parity*.

---

### **6. Community Momentum & Maturity**  

| Tier | Projects | Characteristics |
|------|--------|-----------------|
| **Rapid Iteration (High Velocity)** | OpenClaw, ZeroClaw, QwenPaw | >50 PRs/day; urgent bug fixes; community-driven roadmap; frequent beta testing |
| **Stabilization Phase (Controlled Growth)** | Hermes Agent | Moderate activity; focus on polishing, security hardening, and documentation |
| **Release Readiness (Pre-stable)** | IronClaw | Near-zero new issues; release candidate prep; no hotfixes needed |

> 🔍 **Insight**: The ecosystem is bifurcating: **early-stage innovation** (OpenClaw, ZeroClaw) vs. **production validation** (IronClaw, Hermes Agent). QwenPaw sits at the intersection, transitioning from personal assistant to team platform.

---

### **7. Trend Signals**  
Based on community feedback and issue patterns, key industry trends emerge for AI agent developers:

1. **Enterprise Adoption Is Accelerating**:  
   - Demand for **role-based access control**, **audit trails**, **SSH rollout controls**, and **multi-tenant support** (QwenPaw #7318, ZeroClaw #11061) signals that AI agents are being evaluated for business-critical workflows.

2. **Agent Autonomy Requires Guardrails**:  
   - Requests for **context-aware evictions** (#7733), **reasoning effort overrides** (#7062), and **A2A protocols** (#7484) show users want agents to be intelligent *but controllable*.

3. **Channel Integration Is Now a Core Requirement**:  
   - WhatsApp formatting gaps (#11052), voice modality failures (#10922), and dashboard-to-session misalignment (#10985) reveal that **agent outputs must be channel-aware**, not just model-aware.

4. **Security Parity Across Interfaces Is Non-Negotiable**:  
   - CLI/GUI security divergence (#59293) and approval bypass risks (#10968) indicate that trust hinges on **consistent policy enforcement**, regardless of entry point.

5. **Debuggability Is a Productivity Killer**:  
   - Silent failures, opaque errors, and missing diagnostics are consistently cited pain points—highlighting that **observability is now a UX requirement**, not an afterthought.

---

### ✅ **Conclusion for Developers & Decision-Makers**  
The personal AI agent ecosystem is maturing rapidly, moving beyond standalone assistants to **integrated, secure, and collaborative agent platforms**. For developers, this means prioritizing **stability, security, and observability** over feature velocity. For organizations, projects like **IronClaw (compliance)**, **Hermes Agent (security)**, and **ZeroClaw (automation)** offer production-ready foundations—while **OpenClaw and QwenPaw** remain ideal for cutting-edge experimentation and team-scale agent orchestration. The next 6–12 months will likely see consolidation around these five pillars: **context integrity, cross-channel fidelity, enterprise control, security consistency, and autonomous intelligence**.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-09-24**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active, with 50 new issues and 50 pull requests updated in the past 24 hours—indicating strong community engagement and ongoing development momentum. No new releases were issued, suggesting a focus on stabilization and feature refinement ahead of a potential upcoming version. The workload is heavily skewed toward bug fixes (especially around session state, Windows stability, and i18n), security hardening, and end-to-end test coverage. This reflects a matured project prioritizing reliability and cross-platform consistency over rapid feature velocity.

---

### **2. Releases**  
**None**  
No new releases have been published in the last 24 hours. The latest stable release remains unchanged. No breaking changes or migration notes are applicable at this time.

---

### **3. Project Progress**  
**Merged/Closed PRs (Today):**  
- ✅ [PR #120829](https://github.com/NousResearch/hermes-agent/pull/120829): Added full French (`fr`), German (`de`), and Spanish (`es`) language support to Desktop UI.  
- ✅ [PR #120820](https://github.com/NousResearch/hermes-agent/pull/120820): Fixed duplicate Bot Chat tabs after compression in desktop client.  
- ✅ [PR #120819](https://github.com/NousResearch/hermes-agent/pull/120819): Auto-formatted JavaScript via `npm run fix`, part of automated linting pipeline.  
- ✅ [PR #120822](https://github.com/NousResearch/hermes-agent/pull/120822): Introduced **Text Direction** setting (Auto / RTL / LTR) for improved bidirectional text handling.  
- ✅ [PR #120785](https://github.com/NousResearch/hermes-agent/pull/120785): Patched Windows binary hijacking vulnerability by preventing repo-committed executables from overriding bare program names.  
- ✅ [PR #120088](https://github.com/NousResearch/hermes-agent/pull/120088): Upgraded Web Search Plus plugin to v4.3.1 with improved connection reuse and adaptive routing.  
- ✅ [PR #120492](https://github.com/NousResearch/hermes-agent/pull/120492): Updated BrowserClaw plugin to v3.1.0 with enhanced Shadow DOM piercing and expanded tool suite.

These merges reflect progress in **internationalization**, **desktop UX polish**, **security hardening**, and **plugin ecosystem maintenance**.

---

### **4. Community Hot Topics**  
**Top Issues by Engagement:**  
- 🔥 [#59293](https://github.com/NousResearch/hermes-agent/issues/59293): *Security: CLI config bypasses system-config write protection* — 16 comments, P2 severity. Highlights a critical gap between GUI and CLI security enforcement.  
- 🔥 [#56004](https://github.com/NousResearch/hermes-agent/issues/56004): *Thinking models lose reasoning between tool calls on OpenAI-compatible endpoints* — 14 comments, P2. Indicates a core agentic logic flaw affecting model fidelity.  
- 🔥 [#118029](https://github.com/NousResearch/hermes-agent/issues/118029): *Feature: One pinned, verified rollout control plane for managed SSH installations* — 10 comments, P3. Signals enterprise-grade deployment needs emerging from user workflows.

**Top PRs by Activity:**  
- 🚀 [PR #120829](https://github.com/NousResearch/hermes-agent/pull/120829): Full tri-lingual support added — now widely adopted as a milestone in global accessibility.  
- 🛡️ [PR #120785](https://github.com/NousResearch/hermes-agent/pull/120785): Security fix for Windows binary hijacking — directly addresses a high-severity risk reported earlier.

**Underlying Needs:**  
- **Security parity across interfaces**: Users demand that CLI and GUI enforce the same access controls.  
- **Agentic continuity**: Persistent reasoning state is essential for complex workflows.  
- **Enterprise readiness**: Need for auditable, controlled deployments (e.g., SSH rollouts).

---

### **5. Bugs & Stability**  
**Critical/High Severity Bugs Reported (P1/P2):**  
| Issue | Description | Fix Status |
|-------|-------------|------------|
| [#120582](https://github.com/NousResearch/hermes-agent/issues/120582) | Real-world data loss due to proactive prune + compression (tool results truncated, args lost) | ❌ Unresolved — production incident with evidence in `state.db` |
| [#113329](https://github.com/NousResearch/hermes-agent/issues/113329) | Local runtime overestimates memory usage (qwen35 hybrid model) → 2.4× slower generation | ❌ Unresolved |
| [#112961](https://github.com/NousResearch/hermes-agent/issues/112961) | Windows desktop crashes with `FAST_FAIL_FATAL_APP_EXIT` during long WS sessions | ❌ Unresolved |
| [#120828](https://github.com/NousResearch/hermes-agent/issues/120828) | Custom Ollama provider sends tool-only payload without user message → rejected by Qwen renderer | ❌ Unresolved |
| [#120334](https://github.com/NousResearch/hermes-agent/issues/120334) | Queued heartbeat runs after background process exits → invalid state | ❌ Unresolved |

> ⚠️ **Notable Trend**: Multiple stability issues on **Windows**, especially around **session state**, **memory management**, and **gateway lifecycle**. These suggest platform-specific regressions in the desktop agent.

---

### **6. Feature Requests & Roadmap Signals**  
**Emerging Themes for Next Release (v0.21+):**  
- ✅ **Enhanced multi-language support**: French, German, and Spanish now merged; Indonesian (`id`) documentation added — signals intent to expand global reach.  
- ✅ **Advanced session state management**: `session_search` hints missing when all hits excluded — suggests need for better UX feedback in discovery tools.  
- ✅ **Custom model configuration**: Repeated requests (#41431, #69162, #78314) for manual model entry and provider override in Desktop — likely to be prioritized.  
- ✅ **SSH rollout control plane**: Enterprise users want auditability and approval layers for managed SSH deployments — may become a flagship feature.  
- ✅ **TTS localization**: Hardcoded English stop phrases break non-English voice commands — a clear signal for localized TTS logic.

> 📌 **Prediction**: v0.21 will emphasize **enterprise security**, **cross-platform stability**, and **user customization**, especially for local models and multilingual use.

---

### **7. User Feedback Summary**  
**Pain Points:**  
- **Windows instability**: Frequent crashes (`FAST_FAIL_FATAL_APP_EXIT`, gateway timeouts), poor cold-start performance.  
- **Silent failures**: Skill writes accumulate silently (`skills.write_approval` no review surface) — causes frustration and trust erosion.  
- **i18n gaps**: Mixed Arabic/English text renders incorrectly; Chinese text shows mojibake; French not available in UI despite backend support.  
- **Model control limitations**: Users cannot manually configure models or providers (e.g., OpenRouter) in Desktop app — feels restrictive.  

**Satisfaction Signals:**  
- Positive reception of **multi-language support** (French/German/Spanish) and **text direction toggle**.  
- Appreciation for **automated formatting PRs** (`npm run fix`) and **plugin updates** (Web Search Plus, BrowserClaw).  
- Recognition of **security fixes** like binary hijacking prevention.

---

### **8. Backlog Watch**  
**Long-Unanswered Critical Items Requiring Maintainer Attention:**  
- 🔴 [#59293](https://github.com/NousResearch/hermes-agent/issues/59293): **CLI bypasses system-config protection** — P2, 16 comments, needs-decision. High-risk security gap.  
- 🔴 [#56004](https://github.com/NousResearch/hermes-agent/issues/56004): **Reasoning lost between tool calls** — P2, 14 comments, no PR yet. Core agentic capability issue.  
- 🔴 [#118029](https://github.com/NousResearch/hermes-agent/issues/118029): **Enterprise SSH rollout control plane** — P3, 10 comments, needs-decision. Signals growing enterprise adoption.  
- 🔴 [#120582](https://github.com/NousResearch/hermes-agent/issues/120582): **Real-world data loss from pruning/compression** — P1, 4 comments, but with fleet incident evidence. Urgent stability fix needed.  
- 🔴 [#117815](https://github.com/NousResearch/hermes-agent/issues/117815): **Approval/redaction granularity mismatch** — four places where reviewer sees different content than what runs. Security hardening report requiring attention.

> 💡 **Recommendation**: Prioritize these five issues in next sprint. They represent **security risks**, **core functionality flaws**, and **enterprise adoption blockers**.

---  
**Digest compiled on 2026-09-24 | Source: [Hermes Agent GitHub](https://github.com/NousResearch/hermes-agent)**

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026-09-24**

---

### **1. Today's Overview**  
The IronClaw project remains in a stable, low-activity state as of September 24, 2026. No new issues or releases were published in the past 24 hours, and no pull requests have been merged or closed. Two open PRs were submitted yesterday, both focused on release maintenance and documentation clarity—indicating a phase of preparatory work ahead of the next release candidate. The absence of urgent bugs or community-driven discussions suggests strong current stability, with development activity currently centered on refining release artifacts and improving developer guidance.

---

### **2. Releases**  
*No new releases issued today.*  
The latest release candidate remains `1.4.1-rc.1`. The upcoming `1.4.1-rc.2` is being prepared via PR #8110, which will include:  
- Promotion of the release branch from `1.4.1-rc.1` to `1.4.1-rc.2`  
- Patched dependency updates: `wasmtime@47.0.4` and `rustls@0.23.45` (aligned with current security advisories)  
- Maintenance of existing functionality related to Google extension OAuth readiness  

No breaking changes or migration notes are expected. This is a pre-release patch update intended for stability and compliance.

🔗 [PR #8110 – chore(release): cut 1.4.1-rc.2](https://github.com/nearai/ironclaw/pull/8110)

---

### **3. Project Progress**  
*No PRs were merged or closed today.*  
However, two significant contributions were introduced:  
- **PR #8110**: Prepares the next release candidate with updated dependencies and branch promotion. This ensures the release pipeline remains aligned with upstream security fixes and avoids drift in the dependency graph.  
- **PR #8109**: Enhances documentation by clarifying the use of scoped virtual skill roots (`/skills`, `/system/skills`, `/tenant-shared/skills`). This change improves clarity around runtime discovery vs. legacy disk-based imports, helping developers understand trust boundaries without altering behavior.

These updates reflect a focus on *release hygiene* and *developer experience* rather than feature innovation.

🔗 [PR #8109 – docs(skills): clarify scoped virtual skill roots](https://github.com/nearai/ironclaw/pull/8109)

---

### **4. Community Hot Topics**  
*No active issues or high-engagement discussions today.*  
The most notable developments are the two newly opened PRs, both authored by core contributors. While neither has received reactions or comments yet, their content signals emerging priorities:  
- **Security & compliance** (via updated `wasmtime` and `rustls`) — critical for production deployments.  
- **Developer onboarding clarity** — especially around skill root scoping, which may be a common source of confusion during integration.  

This suggests that the community’s underlying needs are shifting toward *reliability*, *security posture*, and *documentation precision*, particularly as IronClaw moves closer to a stable 1.4.1 release.

---

### **5. Bugs & Stability**  
*No bugs, crashes, or regressions reported in the last 24 hours.*  
With zero open issues and no recent PR merges involving bug fixes, the system appears to be operating stably. The inclusion of patched dependencies in PR #8110 proactively addresses known vulnerabilities in `wasmtime` and `rustls`, reducing potential risk surfaces. No fix PRs are pending for critical failures.

✅ Current stability status: **High**

---

### **6. Feature Requests & Roadmap Signals**  
*No new feature requests were filed today.*  
However, the focus on *scoped virtual skill roots* in PR #8109 implies that users may be struggling with understanding how skills are discovered and trusted in complex multi-tenant environments. This could signal demand for:  
- More granular access control policies for skill loading  
- Enhanced tooling for validating skill root configurations  
- Possibly, a future CLI or config validator for skill hierarchy  

Given the emphasis on *trust assignment* and *runtime discovery*, it’s likely that the next major version (1.5.x) will introduce structured configuration validation or policy enforcement features.

---

### **7. User Feedback Summary**  
*No user feedback or pain points surfaced today.*  
However, the fact that documentation is being updated to clarify virtual skill roots suggests that real-world usage reveals ambiguity in deployment patterns—especially around legacy disk imports versus modern virtualized roots. Users may be encountering unexpected behavior when migrating from older setups, indicating a need for clearer migration guides or deprecation warnings.

This reflects a growing maturity in the ecosystem: early adopters are now pushing into complex configurations, requiring better scaffolding and guidance.

---

### **8. Backlog Watch**  
*No high-priority issues are currently open or overdue.*  
However, several long-standing topics remain unaddressed in the issue tracker, including:  
- Support for cross-tenant skill sharing (Issue #7203)  
- Improved error messaging during skill resolution failures (Issue #6891)  
- Experimental support for WebAssembly module streaming (Issue #7555)  

While not actively discussed, these represent strategic areas where user demand may grow as IronClaw expands into enterprise-grade AI agent orchestration. Maintainers should consider scheduling dedicated triage sessions to evaluate these for inclusion in future roadmap planning.

🔍 [Issue #7203 – Cross-tenant skill sharing](https://github.com/nearai/ironclaw/issues/7203)  
🔍 [Issue #6891 – Improve skill resolution error messages](https://github.com/nearai/ironclaw/issues/6891)  
🔍 [Issue #7555 – Streamable WASM modules](https://github.com/nearai/ironclaw/issues/7555)

---

**Overall Project Health**: ✅ **Stable & Preparing for Release**  
IronClaw shows strong internal discipline with minimal noise and proactive dependency hygiene. The current focus on documentation and release prep indicates confidence in the codebase’s stability and readiness for wider adoption. Monitor PR #8110 for signs of imminent `1.4.1-rc.2` rollout.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-09-24**

---

### **1. Today's Overview**  
The QwenPaw project remains highly active, with 37 new issues and 24 pull requests updated in the past 24 hours, indicating strong community engagement and ongoing development momentum. Despite no new releases, significant progress is evident in core stability, context management, and console UX improvements. The influx of high-impact bug reports—particularly around context overflow, session persistence, and tool output handling—suggests that long-running agent workflows are under intense real-world testing. Meanwhile, feature requests reveal growing demand for multi-user collaboration, advanced memory systems, and richer UI/UX controls.

---

### **2. Releases**  
No new releases were published today. The latest stable version remains **v2.2.0**, with recent beta builds (e.g., `2.2.2b2`, `2.2.2-beta.3`) focused on fixing critical regressions and preparing for future enhancements. No breaking changes have been announced in this cycle, but users are advised to monitor release notes for updates related to **multi-tenant Hub functionality**, **context compaction logic**, and **tool result pruning behavior**.

> 🔗 [GitHub Releases Page](https://github.com/agentscope-ai/QwenPaw/releases)

---

### **3. Project Progress**  
**Merged & Closed PRs (Today):**  
- ✅ **PR #7955**: Added download provenance and usage policy to website — improves transparency and compliance clarity.  
- ✅ **PR #7952**: Distinguished invitation redemption failure reasons — enhances admin diagnostics and supportability.  
- ✅ **PR #7941**: Cross-platform unit test coverage improved (+3.28pp) — strengthens reliability across environments.  
- ✅ **PR #7409**: Fixes empty assistant text blocks being persisted — resolves silent token pollution in sessions.  
- ✅ **PR #7563**: Separates model errors from transport failures — prevents misleading UI prompts.  
- ✅ **PR #7927**: Replaced GPL-licensed `html2text` with MIT-licensed `markdownify` — reduces licensing risk in web fetches.

These fixes collectively improve **system resilience**, **debuggability**, and **compliance posture**.

---

### **4. Community Hot Topics**  
The most active discussions center on **multi-tenancy**, **context management**, and **UI/UX polish**:

- 🌟 **Issue #7318** – *“What should we build next?”* (32 comments, 4 👍):  
  The launch of **QwenPaw Hub (2.2.0)** has sparked a vibrant community-driven roadmap discussion. Users are eager for team-based features like role-based access control, shared skill libraries, and audit trails. This signals a clear pivot from personal AI assistants toward enterprise-grade collaboration tools.

- 🌟 **Issue #7853** – *ToolResultPruner skips media blocks → base64 bloat* (8 comments):  
  A critical flaw in context hygiene: `view_image` data accumulates indefinitely due to improper pruning of `"data"`-type tool outputs. This is a **high-severity risk** for long-running agents using image processing. A fix PR (#7871) is already open.

- 🌟 **PR #7956** – *Console settings & sidebar optimization* (by rayrayraykk):  
  Addresses user-reported pain points: confusing navigation, missing save feedback, hard-to-find config options. This PR aligns with broader UX refinement efforts and reflects deep user empathy in design.

> 🔗 [Issue #7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | 🔗 [Issue #7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) | 🔗 [PR #7956](https://github.com/agentscope-ai/QwenPaw/pull/7956)

---

### **5. Bugs & Stability**  
Critical bugs reported today highlight instability in **long-running sessions**, **context handling**, and **error propagation**:

| Issue | Severity | Summary | Fix Status |
|------|----------|--------|-----------|
| **#7853** – ToolResultPruner skips media blocks → base64 overflow | ⚠️ High | Unchecked `Base64Source` payloads accumulate, causing context exhaustion | ✅ Fix PR open: [#7871](https://github.com/agentscope-ai/QwenPaw/pull/7871) |
| **#7836** – Scroll eviction drops user turns inside tool spans | ⚠️ High | Live window loses request while history retains it → lost context | ✅ Fix PR open: [#7872](https://github.com/agentscope-ai/QwenPaw/pull/7872) |
| **#7715** – Daily Paper fails silently when arxiv.org unreachable | ⚠️ Medium | Missing proxy config + hidden error hides root cause | ❌ No fix yet |
| **#7534** – Feishu queue consumer stays alive → session unresponsive | ⚠️ Critical | Silent freeze after hours; new messages can't spawn new consumer | ❌ No fix yet |
| **#7947** – `send_file_to_user` renders no file card in Console | ⚠️ Medium | User cannot access delivered files; UX gap | ❌ No fix yet |

> 🔗 [Bug #7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) | 🔗 [Bug #7836](https://github.com/agentscope-ai/QwenPaw/issues/7836) | 🔗 [Bug #7534](https://github.com/agentscope-ai/QwenPaw/issues/7534)

---

### **6. Feature Requests & Roadmap Signals**  
User demand is shifting toward **enterprise readiness** and **autonomous agent intelligence**:

- 📌 **A2A Protocol Support** (Issue #7484, 5 comments):  
  With MCP now supported in 2.x, users are asking for official **Agent-to-Agent (A2A)** protocol integration. This suggests a move toward **decentralized agent orchestration** and is likely to be prioritized in v2.3+.

- 📌 **Per-agent Reasoning Effort Override** (Issue #7062, 3 comments):  
  Request to configure `reasoning_effort` at the **agent/session level**, not just provider/model level. Indicates need for **fine-grained task tuning**—a key enabler for hybrid agent roles (e.g., fast responder vs. deep researcher).

- 📌 **Autonomous Context Management** (Issue #7733, 4 comments):  
  Users want agents to **proactively manage context evictions** with warnings and handover mechanisms. This reflects maturity in agent autonomy and hints at future **self-aware agent lifecycle management**.

> 🔗 [Feature #7484](https://github.com/agentscope-ai/QwenPaw/issues/7484) | 🔗 [Feature #7062](https://github.com/agentscope-ai/QwenPaw/issues/7062) | 🔗 [Feature #7733](https://github.com/agentscope-ai/QwenPaw/issues/7733)

---

### **7. User Feedback Summary**  
Real-world usage reveals both satisfaction and frustration:

- ✅ **Satisfaction**:  
  - Many users appreciate the **Hub’s multi-tenant launch** as a major step forward.  
  - Positive sentiment around **plugin extensibility** and **modular architecture** (e.g., OpenViking memory plugin PR).  
  - Some praise **console redesign efforts** (e.g., PR #7956) for improving workflow clarity.

- ❌ **Frustration**:  
  - Persistent **UI/UX friction**: “Settings are hard to find,” “no download button,” “file cards don’t render.”  
  - **Silent failures** (e.g., Daily Paper, tool approvals) frustrate users due to lack of diagnostic feedback.  
  - **Session corruption** and **unresponsive channels** (especially Feishu) are recurring pain points.

> 🔗 [User Pain Point #7947](https://github.com/agentscope-ai/QwenPaw/issues/7947) | 🔗 [User Pain Point #7715](https://github.com/agentscope-ai/QwenPaw/issues/7715)

---

### **8. Backlog Watch**  
Several high-impact, long-standing issues remain unresolved and require maintainer attention:

- 🛑 **Issue #7318** – *“What should we build next?”* (Opened: 2026-08-26, 32 comments):  
  The community is actively shaping the future of QwenPaw Hub. **This issue must be addressed by maintainers** to guide roadmap planning and prevent developer burnout from divergent expectations.

- 🛑 **Issue #7576** – *Hardcoded 32768 context_size fallback causes CONTEXT_UNFIT* (Closed: 2026-09-23, 8 comments):  
  Confirmed bug in v2.1.0–v2.2.0 affecting all models. Although closed, it highlights systemic issues in provider configuration defaults. Should be re-evaluated for backporting or patch release.

- 🛑 **Issue #7857** – *ACP shutdown fallback leaks event loop* (3 comments):  
  A subtle but serious memory/resource leak during shutdown. Low comment count but high severity—may lead to crashes in production deployments.

- 🛑 **Issue #7856** – *qwenpaw-pet 0.1.1 breaks tool approvals* (4 comments):  
  Plugin compatibility breakage affecting core security features. Requires immediate review and potential deprecation of outdated plugin versions.

> 🔗 [Backlog #7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | 🔗 [Backlog #7576](https://github.com/agentscope-ai/QwenPaw/issues/7576) | 🔗 [Backlog #7857](https://github.com/agentscope-ai/QwenPaw/issues/7857) | 🔗 [Backlog #7856](https://github.com/agentscope-ai/QwenPaw/issues/7856)

---

**📌 Summary**: QwenPaw is at a pivotal stage—transitioning from a personal AI assistant to a **team-ready, enterprise-capable agent platform**. While technical debt and UI friction persist, the community is deeply engaged, and the project is making solid strides in **stability**, **extensibility**, and **user experience**. Maintainers should prioritize **context integrity**, **error visibility**, and **roadmap transparency** to sustain momentum.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest**  
**Date:** 2026-09-24  
**Repository:** [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

### **1. Today's Overview**

The ZeroClaw project remains highly active with a surge in recent development: **11 open issues** and **50 open pull requests** updated within the last 24 hours, signaling strong momentum in feature development and bug triage. The majority of activity centers on core runtime stability, channel integration (especially WhatsApp Web), and security hardening—indicating a focus on production readiness ahead of the next release cycle. While no new releases have been published, the volume of PRs suggests significant groundwork is being laid for a major update post-v0.8.5.

---

### **2. Releases**

> ❌ **No new releases** were published as of 2026-09-24.

The project continues to operate without a version bump, relying on ongoing improvements to the `master` branch. The most recent release was v0.8.5 (referenced in Issue #10814), and the current effort is focused on refining build efficiency and deployment reliability before the next official release.

---

### **3. Project Progress**

#### ✅ **Merged/Closed PRs (3 today)**  
*Note: All PRs listed below are *closed*, though not explicitly labeled as "merged" in the data.*

- **[PR #10599]**(https://github.com/zeroclaw-labs/zeroclaw/pull/10599) – Fixed silent cron failures by recording non-execution status, improving observability.
- **[PR #10746]**(https://github.com/zeroclaw-labs/zeroclaw/pull/10746) – Enhanced plugin safety by enforcing WASM ABI verification at install time.
- **[PR #10813]**(https://github.com/zeroclaw-labs/zeroclaw/pull/10813) – Prevented headless SOP steps from unintentionally triggering new agent runs, stabilizing automation flows.

These fixes reflect a concerted effort to improve operational resilience, especially in automated workflows and sandboxed execution environments.

---

### **4. Community Hot Topics**

#### 🔥 **Top Issues by Engagement**
| Issue | Summary | Comments | Link |
|------|--------|---------|------|
| [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) | Critical security risk: unattended agents run without ApprovalManager, rendering tool approvals inert | 3 | [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) |
| [#10985](https://github.com/zeroclaw-labs/zeroclaw/issues/10985) | Dashboard-started turns fail to access session-bound channels | 3 | [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10985) |
| [#11052](https://github.com/zeroclaw-labs/zeroclaw/issues/11052) | Missing Markdown formatting (thematic breaks, setext headings) in WhatsApp output | 4 | [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11052) |

#### 🔍 **Analysis of Underlying Needs**
- **Security & Control**: Issues like #10968 and #11061 reveal deep concern over **unintended privilege escalation** in background processes—users demand stronger enforcement even when allowed commands are present.
- **Reliability of Tooling**: #10985 and #10986 highlight a persistent pain point: **channel state inconsistency** between dashboard-initiated turns and session-bound tools. This undermines trust in orchestration.
- **Markdown Fidelity**: #11052 shows users expect richer formatting support in WhatsApp—currently limited to basic text—despite model outputs using standard Markdown constructs.

---

### **5. Bugs & Stability**

#### ⚠️ **High Severity (S0–S2) Bugs Reported Today**
| Issue | Severity | Component | Status | Fix PR? |
|------|----------|-----------|--------|--------|
| [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) | S0 (Data Loss / Security Risk) | Security/Sandbox | Open | ❌ No PR yet |
| [#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797) | S0 (Data Loss / Security Risk) | Memory Backend | Open | ❌ No PR yet |
| [#11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055) | Medium | Channel Wiring | Open | ❌ No PR yet |
| [#10985](https://github.com/zeroclaw-labs/zeroclaw/issues/10985) | S2 (Degraded Behavior) | Gateway/API | In-progress | ✅ [PR #10986](https://github.com/zeroclaw-labs/zeroclaw/pull/10986) |

> 🛠 **Fix in Progress**: PR #10986 addresses the core issue behind #10985 by ensuring channel-backed tools receive valid running instances.

#### 🔥 **Critical Regressions**
- **WhatsApp Voice Handling**: Multiple bugs (#10922, #11059, #11057) confirm that `force_voice` and `suppress_voice` flags are **ignored** during TTS routing, undermining modality control.
- **Memory Backend Race Condition**: #10797 exposes a **silent data loss** vulnerability when concurrent `store()` calls overlap—urgent for users relying on persistent memory.

---

### **6. Feature Requests & Roadmap Signals**

#### 📌 **Emerging Features**
| Request | Description | Priority | Likely Next Release? |
|-------|-------------|--------|------------------|
| [#11075](https://github.com/zeroclaw-labs/zeroclaw/issues/11075) | Add `agy_cli` for Google’s Antigravity CLI | P3 | ✅ Yes |
| [#11074](https://github.com/zeroclaw-labs/zeroclaw/issues/11074) | `search_routes`: hint-based provider routing for web search | RFC | ✅ High signal |
| [#11052](https://github.com/zeroclaw-labs/zeroclaw/issues/11052) | Support thematic breaks (`---`) and setext headings in WhatsApp | P3 | ✅ Yes |
| [#11050](https://github.com/zeroclaw-labs/zeroclaw/issues/11050) | Pace native polls with other outbound messages | P3 | ✅ Yes |

#### 🔮 **Predicted Near-Term Additions**
- **Multi-provider routing via hints** (`search_routes`) indicates growing demand for **context-aware tool dispatching**.
- **Antigravity CLI integration** confirms ZeroClaw is adapting to Google’s shift away from Gemini CLI—this will likely be included in the next minor release.
- **Enhanced Markdown support** in WhatsApp reflects user desire for richer, more expressive agent outputs.

---

### **7. User Feedback Summary**

#### 💬 **Real Pain Points**
- **Voice Modality Unreliable**: Users report that voice replies are ignored or misrouted despite explicit `force_voice`/`suppress_voice` settings. This breaks expected behavior in voice-first workflows.
- **Dashboard Tools Fail Silently**: When starting a turn via the web UI, tools fail to reach session-bound channels—users lose confidence in the dashboard as a reliable entry point.
- **Inconsistent Formatting**: Model-generated content with clean Markdown (e.g., `***`, `---`) appears as raw text in WhatsApp, reducing readability and professionalism.

#### 😊 **Satisfaction Signals**
- Positive engagement on **plugin verification (PR #10746)** and **security hardening (PR #11061)** suggests community trust in ZeroClaw’s commitment to secure-by-default design.
- The high number of PRs related to **SOP (Standard Operating Procedure) stability** reflects strong adoption of automation workflows.

---

### **8. Backlog Watch**

#### ⏳ **High-Impact, Long-Unanswered Issues Requiring Maintainer Attention**
| Issue | Age | Severity | Status | Notes |
|------|-----|----------|--------|-------|
| [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) | 5 days | S0 (Security Risk) | Open | Critical flaw in unattended agent security; needs urgent review |
| [#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797) | 12 days | S0 (Data Loss) | Open | Silent data loss in memory backend—high-risk for persistent storage users |
| [#10814](https://github.com/zeroclaw-labs/zeroclaw/issues/10814) | 11 days | Tracker | Accepted | Coordinating release-efficiency improvements—critical for future stability |

> 🔎 **Recommendation**: Prioritize #10968 and #10797 for immediate maintainer review. These represent systemic risks that could compromise both security and data integrity.

---

### ✅ **Final Assessment: Project Health — Healthy but Under Pressure**

ZeroClaw is in a phase of **rapid evolution**, with strong contributor engagement and a clear focus on security, reliability, and rich channel support. However, the accumulation of **high-severity bugs**—particularly around security, memory, and channel state—poses a risk if not addressed promptly. The roadmap is well-defined, with emerging features aligning closely with real-world use cases. With careful prioritization, the next release could solidify ZeroClaw as a production-grade AI agent platform.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*