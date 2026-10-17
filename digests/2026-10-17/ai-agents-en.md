# OpenClaw Ecosystem Digest 2026-10-17

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-10-17 00:44 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest**  
**Date:** 2026-10-17  
**Repository:** [github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)  

---

### **1. Today's Overview**  
The OpenClaw project remains highly active with **500 issues and 500 pull requests updated in the last 24 hours**, indicating intense development and user-driven troubleshooting. Despite no new releases, the ecosystem is undergoing significant internal refactoring and stability fixes, particularly around database consistency, startup reliability, and session state integrity. High-severity bugs (P0/P1) related to SQLite WAL growth, crash loops, and message loss are dominating the issue tracker, suggesting ongoing challenges with long-lived agent persistence and system resilience under load. The PR activity reflects a strong focus on architectural cleanup and performance optimization, especially in gateway lifecycle and UI rendering.

---

### **2. Releases**  
❌ **No new releases** were published in the past 24 hours.  
The last stable version remains **2026.9.9**, with recent beta candidates (e.g., `2026.10.1`, `2026.10.5-beta.2`) introducing notable regressions — most critically, **startup delays of up to 1030 seconds** and **infinite hangs during update steps** (see #168955, #173764). No migration notes or breaking change announcements are currently available.

---

### **3. Project Progress**  
✅ **10 merged/closed PRs** in the last 24h, primarily focused on:  
- **Database & State Integrity**:  
  - #174579: Restores incognito child history via worker reads ([PR #174579](https://github.com/openclaw/openclaw/pull/174579))  
  - #174140: Fixes UTF-8 corruption in wiki pages before rewrite ([PR #174140](https://github.com/openclaw/openclaw/pull/174140))  
- **UI & UX Refactorings**:  
  - #174866: Loads expanded tool details on demand, reducing boot payload by **6.5 KB** ([PR #174866](https://github.com/openclaw/openclaw/pull/174866))  
  - #173773: Adds avatar selection presets (bundled + generated + uploaded) for agents ([PR #173773](https://github.com/openclaw/openclaw/pull/173773))  
- **Security & Configuration**:  
  - #157806: Preserves requester identity across delegated work execution ([PR #157806](https://github.com/openclaw/openclaw/pull/157806))  
  - #174885: Fixes QA test failure due to deleted progress card file ([PR #174885](https://github.com/openclaw/openclaw/pull/174885))  

These reflect a shift toward **architectural consolidation**, **performance tuning**, and **user-facing polish** ahead of next release.

---

### **4. Community Hot Topics**  
🔥 **Top 5 Most Active Issues (by comment count)**:  
| Issue | Summary | Comments | Link |
|------|--------|---------|------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | Agent SQLite WAL grows to 2.8 GB; blocks startup despite `wal_autocheckpoint=1000` | 131 | [View Issue](https://github.com/openclaw/openclaw/issues/143524) |
| [#159356](https://github.com/openclaw/openclaw/issues/159356) | llama.cpp manager reports ready while embedding exits → HTTP 500 | 28 | [View Issue](https://github.com/openclaw/openclaw/issues/159356) |
| [#112423](https://github.com/openclaw/openclaw/issues/112423) | Large transcript cleanup blocks gateway event loop | 22 | [View Issue](https://github.com/openclaw/openclaw/issues/112423) |
| [#148707](https://github.com/openclaw/openclaw/issues/148707) | Reply lost due to missing tool authority snapshot after turn displacement | 21 | [View Issue](https://github.com/openclaw/openclaw/issues/148707) |
| [#111897](https://github.com/openclaw/openclaw/issues/111897) | Concurrent runs deliver duplicate replies under load | 19 | [View Issue](https://github.com/openclaw/openclaw/issues/111897) |

🔍 **Underlying Needs**:  
- **Persistence Stability**: Unchecked WAL growth (#143524, #164294) suggests fundamental flaws in SQLite checkpointing logic.  
- **Session Consistency**: Multiple issues (#148707, #111897, #151962) point to race conditions and state mismanagement in concurrent/long-running sessions.  
- **Startup Reliability**: Regression in startup time (#168955) and infinite hangs (#173764) indicate critical path bottlenecks in initialization.

---

### **5. Bugs & Stability**  
🚨 **Critical Bugs (P0/P1) Reported Today**:  
| Issue | Severity | Symptom | Fix PR? | Link |
|------|----------|--------|--------|------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | P0 / 🦪 silver shellfish | WAL grows to 2.8 GB; blocks startup | ❌ No | [View Issue](https://github.com/openclaw/openclaw/issues/143524) |
| [#168955](https://github.com/openclaw/openclaw/issues/168955) | P1 / 🦪 silver shellfish | Startup time increases from 410s → 1030s | ❌ No | [View Issue](https://github.com/openclaw/openclaw/issues/168955) |
| [#173764](https://github.com/openclaw/openclaw/issues/173764) | P1 / 🦪 silver shellfish | `openclaw update` hangs forever in doctor step | ❌ No | [View Issue](https://github.com/openclaw/openclaw/issues/173764) |
| [#162211](https://github.com/openclaw/openclaw/issues/162211) | P0 / 🐚 platinum hermit | Startup stalls 40–200s → health monitor triggers restart loop | ❌ No | [View Issue](https://github.com/openclaw/openclaw/issues/162211) |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) | P1 / 🐚 platinum hermit | Plugin capture rewrites 6.5 GB per start → SSD wear | ❌ No | [View Issue](https://github.com/openclaw/openclaw/issues/157989) |

⚠️ **Stability Signals**:  
- **Crash Loops**: Multiple P0 issues linked to `crash-loop` and `health monitor escalation`.  
- **Message Loss**: Critical for production use — e.g., #148707 causes **complete reply loss**.  
- **Platform-Specific Failures**: Windows (`#168955`, `#170956`) and Linux (`#167557`) show divergent startup/shutdown behavior.

---

### **6. Feature Requests & Roadmap Signals**  
📌 **High-Value Feature Requests**:  
- **[Feature] Output Guards** – Prevent infinite repetition and pseudo-tool calls from poisoning history ([#44965](https://github.com/openclaw/openclaw/issues/44965), 10 comments, ✅ closed but not implemented).  
- **[Feature] SecretRef in MCP Env** – Allow secure secrets in `mcp.servers[].env` ([#76493](https://github.com/openclaw/openclaw/issues/76493), 10 comments, 4 👍).  
- **[Feature] Avatar Selection** – Unified preset/generated/uploaded avatar chooser ([#173773](https://github.com/openclaw/openclaw/pull/173773), merged).  

🔮 **Predicted Next Release Inclusions**:  
- Session state consistency fixes (especially around `sessions_yield` and `reply lost` cases).  
- Enhanced plugin caching and source capture deduplication.  
- More robust startup timeouts and update step safeguards.  
- Improved memory-wiki fallback and search indexing.

---

### **7. User Feedback Summary**  
💬 **Real Pain Points Expressed by Users**:  
- **"My agent crashes every few days due to 2.8GB SQLite WAL"** — Windows users report frequent restarts.  
- **"I sent a message, but the agent never replied — no error, no log"** — Reproducible in multiple channels (WeChat, WhatsApp).  
- **"After updating, my gateway won’t start — it hangs at `doctor` step"** — Seen across macOS and Windows.  
- **"Plugins take 20+ minutes to install and consume 6GB of disk space"** — Highlighting SSD wear concerns.  
- **"Cron jobs fail even when fallback models are available"** — Suggests poor fallback logic in automated workflows.

✅ **Positive Signals**:  
- Users appreciate UI improvements like avatar selection and delayed tool loading.  
- Many report successful recovery via RAM upgrades (e.g., #159356), indicating **memory pressure as a key factor**.

---

### **8. Backlog Watch**  
⏳ **Long-Unanswered, High-Impact Items Needing Maintainer Attention**:  
| Issue | Age | Status | Why It Matters | Link |
|------|-----|--------|----------------|------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | 8 days old | Open, P0 | Blocks gateway startup; 131 comments, no fix PR | [View Issue](https://github.com/openclaw/openclaw/issues/143524) |
| [#168955](https://github.com/openclaw/openclaw/issues/168955) | 6 days old | Open, P1 | Startup regression — 2.5× slower boot | [View Issue](https://github.com/openclaw/openclaw/issues/168955) |
| [#173764](https://github.com/openclaw/openclaw/issues/173764) | 1 day old | Open, P1 | Update hangs indefinitely — UX blocker | [View Issue](https://github.com/openclaw/openclaw/issues/173764) |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) | 18 days old | Open, P1 | SSD wear from plugin rewrites | [View Issue](https://github.com/openclaw/openclaw/issues/157989) |
| [#111897](https://github.com/openclaw/openclaw/issues/111897) | 110 days old | Open, P1 | Duplicate replies under load | [View Issue](https://github.com/openclaw/openclaw/issues/111897) |

📌 **Action Needed**: These represent systemic risks to **production usability, reliability, and longevity**. Immediate triage and fix prioritization are recommended.

---  
*Data Snapshot: 2026-10-17 | Source: GitHub API (openclaw/openclaw)*

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Ecosystem (2026-10-17)**

---

### **1. Ecosystem Overview**  
The open-source personal AI assistant and agent ecosystem in Q4 2026 is characterized by rapid technical maturation, intense post-architecture stabilization efforts, and growing user demands for reliability, scalability, and enterprise readiness. Projects are increasingly focused on session persistence, message integrity, and cross-platform consistency—critical for production use. While innovation remains strong, a recurring theme is the tension between aggressive feature development and foundational stability, with several projects experiencing regression in core workflows due to architectural complexity.

---

### **2. Activity Comparison**

| Project        | Issues (Last 24h) | PRs (Last 24h) | Releases (Last 24h) | Health Score¹ (Est.) |
|----------------|-------------------|-----------------|----------------------|------------------------|
| **OpenClaw**   | 500               | 500             | ❌ No                | ⚠️ Low (P0/P1 backlog) |
| **Hermes Agent** | 50              | 50              | ❌ No                | ✅ Medium (Stabilizing) |
| **QwenPaw**    | 14                | 30              | ❌ No                | ✅ Medium (Growing)    |
| **ZeroClaw**   | 33                | 50              | ❌ No                | ⚠️ Low (Critical bugs) |
| **IronClaw**   | 0                 | 0               | —                    | ❌ Dormant             |

> **¹ Health Score**: Based on release cadence, critical bug density, community engagement, and PR/issue balance (1–5 scale).  
> *Note: OpenClaw and ZeroClaw show high activity but low health due to unresolved P0/P1 issues.*

---

### **3. OpenClaw's Position**  
OpenClaw stands out as the most technically active project, with the highest volume of issues and PRs—indicating deep developer involvement and complex internal challenges. Its architecture emphasizes **persistent agent state**, **SQLite-based session storage**, and **multi-tool orchestration**, making it ideal for long-running, autonomous agents. Compared to peers:
- **Advantages**: Strongest UI/UX refinement momentum (e.g., avatar presets, lazy tool loading), largest contributor base, and most mature plugin ecosystem.
- **Technical Differentiation**: Heavy reliance on SQLite WAL with poor checkpointing logic, leading to systemic instability—unlike Hermes Agent’s more modular gateway or QwenPaw’s event-driven design.
- **Community Size**: Significantly larger than others (based on comment volume, issue count), but also faces higher churn due to instability.

Despite its leadership in activity, OpenClaw lags behind in reliability—its health score reflects this gap, despite being the de facto reference implementation.

---

### **4. Shared Technical Focus Areas**  
Multiple projects are converging on **core resilience and data integrity** challenges:

| Requirement                          | Projects Affected                         | Specific Needs |
|--------------------------------------|-------------------------------------------|----------------|
| **Session State Consistency**        | OpenClaw, Hermes Agent, ZeroClaw          | Fix race conditions, prevent reply loss, handle cold starts |
| **Startup Reliability & Performance**| OpenClaw, Hermes Agent, ZeroClaw          | Reduce boot time, eliminate infinite hangs, fix `update` stalls |
| **Memory/Data Bloat Management**     | OpenClaw, QwenPaw, ZeroClaw              | Prevent WAL growth (>2GB), avoid unbounded history, optimize caching |
| **Cross-Platform Stability**         | All active projects (esp. Windows/macOS) | Fix path handling, credential flows, GUI rendering |
| **Plugin & Tool Execution Safety**   | OpenClaw, QwenPaw, ZeroClaw              | Prevent crashes, ensure secure config handling, support cancellable operations |

These shared pain points suggest a **common underlying challenge**: managing long-lived, stateful agent workloads across diverse environments without introducing fragility.

---

### **5. Differentiation Analysis**

| Dimension               | **OpenClaw**                            | **Hermes Agent**                       | **QwenPaw**                           | **ZeroClaw**                          |
|-------------------------|------------------------------------------|----------------------------------------|----------------------------------------|----------------------------------------|
| **Feature Focus**       | Persistent agent sessions, UI polish    | Unified gateway, cross-channel routing | Skill sharing, cancellable jobs        | Runtime separation, config safety     |
| **Target Users**        | Power users, developers, researchers     | Teams, enterprises, multi-channel ops  | Developers, data analysts, teams      | DevOps, embedded systems, security-focused |
| **Architecture**        | Monolithic + SQLite state              | Modular gateway + ADR-driven design    | Componentized UI + async pipelines     | Micro-runtime + WASM plugin support   |
| **Security Emphasis**   | Session isolation, identity preservation | Auth flow transparency, policy enforcement | API key surface visibility            | Credential gatekeeping, WASM sandboxing |

> **Key Insight**: OpenClaw prioritizes user experience at scale; ZeroClaw focuses on runtime hardening; QwenPaw targets team collaboration; Hermes Agent aims for platform interoperability.

---

### **6. Community Momentum & Maturity**  

| Tier                     | Projects                             | Characteristics |
|--------------------------|---------------------------------------|-----------------|
| **High-Momentum Iterators** | OpenClaw, ZeroClaw, QwenPaw         | High PR/issue volume, frequent UX improvements, active contributor base |
| **Stabilization Phase**   | Hermes Agent                          | Focused on post-merge fixes (Package 7), resolving legacy issues |
| **Dormant / Low Activity**| IronClaw                              | No updates in 24h; possible project pause or reorganization |

> **Maturity Signal**: OpenClaw and QwenPaw are in **growth maturity**—high velocity with clear roadmap signals. Hermes Agent is entering **post-architectural stabilization**. ZeroClaw is in **transition phase**—balancing v0.8.6 release with v0.9.0 planning.

---

### **7. Trend Signals**  
From community feedback and PR patterns, the following industry trends emerge:

- **Shift to Production-Ready Agents**: Users demand **reliable startup**, **no message loss**, and **predictable memory behavior**—signaling move from prototyping to real-world deployment.
- **Need for Cancellable Operations**: Multiple requests for **cancellable skill downloads**, **plugin installs**, and **long-running tasks** indicate rising use in resource-constrained or interactive environments.
- **Enterprise Collaboration Demand**: Features like **global skill/MCP sharing** (QwenPaw #8275) and **remote supervision** (Hermes #133601) reflect growing interest in team-based agent workflows.
- **Security & Privacy Awareness**: Increased scrutiny over **credential handling**, **API key surfaces**, and **silent failures** shows users expect auditability and transparency.
- **Cross-Platform Consistency**: Persistent issues on **Windows**, **macOS**, and **WSL** highlight the need for robust OS abstraction layers and testing infrastructure.

> **Value for Developers**: These trends point to a market-ready future where **stability, control, and collaboration** will be as important as model performance. Projects that prioritize these areas will lead adoption.

---

**✅ Conclusion**: The personal AI agent ecosystem is transitioning from experimentation to operational use. OpenClaw leads in activity and user-facing polish but suffers from systemic stability issues. Hermes Agent and QwenPaw are rapidly iterating toward production-grade reliability. ZeroClaw is building a hardened foundation. The next wave of innovation will not be in models—but in **agent resilience, configurability, and collaborative governance**.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-10-17**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active, with 50 issues and 50 pull requests updated in the past 24 hours—indicating robust development momentum. The core focus centers on post-merge stabilization of the unified gateway runtime (`feat/unified-gateway-runtime`, #106742), now tracked via issue #134889, which has become a central hub for dozens of follow-up fixes. Despite no new releases, significant progress was made in resolving session state integrity, message delivery reliability, and cross-platform compatibility (especially Windows/macOS). Security and stability are top priorities, with multiple high-severity bugs reported and addressed through coordinated PR packages.

---

### **2. Releases**  
❌ **No new releases** were published today.  
There have been **no releases in the last 7 days**, and the latest stable version remains **v0.22.1** (released earlier in October). Users on `main` branch (git installs) continue to face update challenges, as seen in #139099 where the updater offers an incompatible version and fails silently.

> 🔗 [Latest Release](https://github.com/NousResearch/hermes-agent/releases) | 🔗 [Stable Channel Issue #136281](https://github.com/NousResearch/hermes-agent/issues/136281)

---

### **3. Project Progress**  
✅ **1 merged PR today** (out of 50 open):  
- [#139523](https://github.com/NousResearch/hermes-agent/pull/139523): *Gateway fixes (#134889), package 5: plugins, and config the gateway reads once* — completed on Oct 16, marking the end of a major fix package tied to the unified gateway rollout. All five lanes resolved and documented.

🔥 **Major activity in post-merge stabilization packages**:  
- **Package 7** (tracked via #140138) is actively being developed across 5 parallel lanes:
  - **Lane 1 (ACP)**: Fixing command handling, event streaming, and prompt consistency.
  - **Lane 2 (DB/Session Writes)**: Ensuring session updates reach correct owners and fail gracefully.
  - **Lane 3 (Session Resume & State)**: Handling cold starts, compressed sessions, and pinned session persistence.
  - **Lane 4 (Multiplexed Messaging)**: Fixing WhatsApp, Discord, Feishu, and Telegram delivery logic.
  - **Lane 5 (Plugins & Config)**: Resolving plugin loading and configuration read errors.

> 🔗 [Package 7 Tracking Issue #140138](https://github.com/NousResearch/hermes-agent/issues/140138)

---

### **4. Community Hot Topics**  
Top 3 most commented issues reflect systemic pain points:

| Issue | Comments | Summary | Link |
|------|---------|--------|------|
| [#134889](https://github.com/NousResearch/hermes-agent/issues/134889) | 131 | **Post-merge tracking for unified gateway** — critical path for session ownership, local gateway coordination, and desktop integration. | [View Issue](https://github.com/NousResearch/hermes-agent/issues/134889) |
| [#107402](https://github.com/NousResearch/hermes-agent/issues/107402) | 23 | `hermes update` leaves persistent "did not restart" warnings even after deferred restarts — impacts user trust in auto-updates. | [View Issue](https://github.com/NousResearch/hermes-agent/issues/107402) |
| [#136281](https://github.com/NousResearch/hermes-agent/issues/136281) | 9 | Update check fails due to `hermes-assets.nousresearch.com/stable.json` returning 404 — breaks update availability. | [View Issue](https://github.com/NousResearch/hermes-agent/issues/136281) |

📌 **Underlying Need**: Users demand **reliable, transparent, and non-disruptive updates**. The failure of `stable.json` access suggests infrastructure fragility; the stuck warning indicates poor UX feedback loops.

---

### **5. Bugs & Stability**  
High-priority bugs reported today highlight instability in session management, message delivery, and system resilience:

| Severity | Issue | Description | Status | Fix PR? |
|---------|------|-------------|--------|--------|
| P1 | [#140041](https://github.com/NousResearch/hermes-agent/issues/140041) | Gateway crash-loop after reboot due to PID reuse and permissive start-time drift tolerance. | Open | ❌ No PR yet |
| P1 | [#134889](https://github.com/NousResearch/hermes-agent/issues/134889) | One gateway owns every local session — broken session isolation leading to conflicts. | Open | ✅ Multiple PRs in progress (Package 7) |
| P2 | [#140189](https://github.com/NousResearch/hermes-agent/issues/140189) | Undeliverable process-completion notifications retried every 5 seconds forever — silent loop, no backoff. | Open | ❌ No PR yet |
| P2 | [#133744](https://github.com/NousResearch/hermes-agent/issues/133744) | Post-reboot PID reuse causes supervised gateway to crash-loop. | Closed | ✅ Fixed in #133744 |
| P2 | [#139236](https://github.com/NousResearch/hermes-agent/issues/139236) | Desktop sessions route via generic local platform after update — breaks expected TUI behavior. | Closed | ✅ Fixed in #139236 |

⚠️ **Critical Risk**: Persistent crash loops (#140041) and infinite retry loops (#140189) suggest deeper issues in lifecycle management and error recovery mechanisms.

---

### **6. Feature Requests & Roadmap Signals**  
User-driven feature requests show growing demand for **integration flexibility** and **enhanced search**:

| Request | Priority | Summary | Link |
|-------|--------|--------|------|
| [#50148](https://github.com/NousResearch/hermes-agent/issues/50148) | P3 | Add **Nextcloud Talk** as a messaging platform adapter — fully functional, ready to merge. | [View Request](https://github.com/NousResearch/hermes-agent/issues/50148) |
| [#44075](https://github.com/NousResearch/hermes-agent/issues/44075) | P3 | **Semantic search** for session history using hybrid BM25 + vector matching — addresses keyword-only FTS5 limitations. | [View Request](https://github.com/NousResearch/hermes-agent/issues/44075) |
| [#133601](https://github.com/NousResearch/hermes-agent/issues/133601) | P3 | Expose local Desktop/CLI sessions via `hermes mcp serve` for read-only supervision — enables remote monitoring. | [View Request](https://github.com/NousResearch/hermes-agent/issues/133601) |

🔮 **Prediction**: Next version (likely v0.23.0) will include **Nextcloud Talk support**, **semantic search prototype**, and **MCP-based session supervision** based on current traction and PR readiness.

---

### **7. User Feedback Summary**  
Real user pain points emerging from issues and PRs:

- **Update Experience**: Users report opaque failures during `hermes update`, especially when running inside gateway process tree (#107402). The “did not restart” warning persists despite successful restart — erodes trust.
- **Desktop Reliability**: macOS users report silent network denial due to missing `NSLocalNetworkUsageDescription` (#81563), while others see sessions routed incorrectly after updates (#139236).
- **Windows Issues**: Path rewriting in SSH mode (#140204) and browser profile decryption failures (#133659) indicate deep OS-specific edge cases.
- **Security Concerns**: Users are alarmed by credential leakage in terminal snapshots (#62336) and outdated dependencies with CVEs (#127791).

💬 **Sentiment**: High frustration around **update reliability**, **session persistence**, and **cross-platform consistency** — but strong engagement in contributing fixes.

---

### **8. Backlog Watch**  
Critical long-standing issues requiring maintainer attention:

| Issue | Age | Priority | Status | Notes |
|------|-----|--------|--------|------|
| [#110126](https://github.com/NousResearch/hermes-agent/issues/110126) | 2026-09-13 (over 1 month) | P1 | Open | Systemic `finish_reason='length'` truncation across 35+ issues — needs architectural fix, not patchwork. |
| [#133659](https://github.com/NousResearch/hermes-agent/issues/133659) | 2026-10-06 | P3 | Open | Windows/Edge real-profile snapshot launches signed-out — security and usability risk. |
| [#138949](https://github.com/NousResearch/hermes-agent/issues/138949) | 2026-10-15 | P4 | Open | `session/new` fails with "Gateway inaccessible: not_ready" on 0.22.1 — regression in multi-home setup. |
| [#123864](https://github.com/NousResearch/hermes-agent/issues/123864) | 2026-09-26 | P3 | Open | `hermes update` fails due to conflicting plugin dev deps — blocks all updates. |

📌 **Recommendation**: Prioritize #110126 (truncation) and #133659 (Windows auth) as they impact core agent functionality and user security.

---

**📊 Final Assessment**:  
Hermes Agent is in a **high-intensity stabilization phase** post-unified gateway merge. While technical progress is strong, user-facing reliability and update experience remain fragile. The project is healthy but under pressure — success hinges on completing Package 7 and addressing critical P1/P2 bugs before the next release.  

> 🛠️ **Next Steps**: Focus on finishing Package 7, fixing crash loops, and improving update transparency.  
> 🔗 [GitHub Repository](https://github.com/nousresearch/hermes-agent)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-10-17**

---

### **1. Today's Overview**  
The QwenPaw project remains highly active with a strong momentum in both development and community engagement. Over the past 24 hours, 30 pull requests were updated (18 open, 12 merged/closed), and 14 issues were updated (11 open, 3 closed), indicating sustained engineering velocity. No new releases were published, but recent PRs suggest ongoing stabilization of core UX and backend services. The focus is shifting toward improving reliability, scalability, and user experience—especially around long-running sessions, file handling, and external API integration.

---

### **2. Releases**  
*No new releases were published in the last 24 hours.*  
The most recent stable release is **v2.2.2**, released on October 15, 2026, and currently under verification (see [Issue #8262](https://github.com/agentscope-ai/QwenPaw/issues/8262)). This version includes critical fixes for chat history bloat, deep link resolution, and plugin hot reload safety. Users are advised to upgrade to v2.2.2 if not already on it, especially those encountering session timeouts or UI glitches.

---

### **3. Project Progress**  
Several high-impact PRs were merged or closed today, advancing key areas:

- ✅ **[PR #8273](https://github.com/agentscope-ai/QwenPaw/pull/8273)**: Fixed message navigation positioning in long conversations by updating `@agentscope-ai/chat` dependency.
- ✅ **[PR #8271](https://github.com/agentscope-ai/QwenPaw/pull/8271)**: Refactored web search config guards and improved error icon visibility.
- ✅ **[PR #8272](https://github.com/agentscope-ai/QwenPaw/pull/8272)**: Fixed delayed clearing of chat input after message submission—now immediate post-validation.
- ✅ **[PR #8263](https://github.com/agentscope-ai/QwenPaw/pull/8263)**: Improved configuration editor behavior—users can now safely discard unsaved changes or continue editing.
- ✅ **[PR #8205](https://github.com/agentscope-ai/QwenPaw/pull/8205)**: Added TypeSafe decision model configuration with support for separate global defaults for chat and decision models.

These updates collectively enhance stability, usability, and developer ergonomics in the console interface.

---

### **4. Community Hot Topics**  
Top community discussions reflect growing demand for extensibility, control, and performance at scale:

- 🔥 **[Issue #8126](https://github.com/agentscope-ai/QwenPaw/issues/8126)**: *Make skill-pool download a cancellable background job* — 7 comments, highlighting pain points in large skill downloads blocking UI and clients.  
  → **Underlying Need**: Users need real-time feedback and interruption capability during long operations. A follow-up PR ([#8285](https://github.com/agentscope-ai/QwenPaw/pull/8285)) has been opened to address this.

- 🔥 **[Issue #8275](https://github.com/agentscope-ai/QwenPaw/issues/8275)**: *Suggest global Skill and MCP management in QwenPaw Hub* — 1 upvote, 1 comment.  
  → **Underlying Need**: Teams require centralized, shared access to reusable agents and tools without redundant setup. This signals a strategic shift toward enterprise-grade collaboration features.

- 🔥 **[Issue #8284](https://github.com/agentscope-ai/QwenPaw/issues/8284)**: *Wheel scrolling stuck in long chats due to transcript re-estimation* — 1 comment, but high severity.  
  → **Underlying Need**: Smooth interaction in long conversation histories is essential for analytical workflows. This may be linked to #8228 (chat bloat).

- 🔥 **[PR #8283](https://github.com/agentscope-ai/QwenPaw/pull/8283)**: *Add decision-model-backed tool approval mode* — high impact, XL size.  
  → **Underlying Need**: Users want auditable, policy-driven agent behavior—critical for production use cases.

---

### **5. Bugs & Stability**  
Critical bugs reported today affect core usability and system stability:

| Severity | Issue | Description | Fix Status |
|--------|------|-------------|------------|
| ⚠️ High | [#8278](https://github.com/agentscope-ai/QwenPaw/issues/8278) | DingTalk messages >3500 chars degrade to plain text, breaking Markdown/table rendering | Open |
| ⚠️ High | [#8228](https://github.com/agentscope-ai/QwenPaw/issues/8228) | Base64-encoded tool outputs cause chat history >10MB, triggering 30s timeout | Open; PR #8229 submitted |
| ⚠️ High | [#8279](https://github.com/agentscope-ai/QwenPaw/issues/8279) | Long-lived ReMe watchers exhaust AnyIO thread limiter, stalling HTTP endpoints | Open |
| ⚠️ Medium | [#8280](https://github.com/agentscope-ai/QwenPaw/issues/8280) | Missing `file_id/file_data` causes 400 errors on OpenAI-compatible providers | Open |
| ⚠️ Medium | [#8276](https://github.com/agentscope-ai/QwenPaw/issues/8276) | ReMe reranker accepts empty `api_key`, fails silently | Open |
| ⚠️ Low | [#8270](https://github.com/agentscope-ai/QwenPaw/issues/8270) | ZIP decompression on Windows results in encoding/character corruption | Open; root cause identified |

> 💡 **Note**: Several bugs stem from poor error handling, lack of cancellation, and unbounded data persistence—common themes in scaling challenges.

---

### **6. Feature Requests & Roadmap Signals**  
User-driven feature requests point to future roadmap priorities:

- 🌐 **Global Skill/MCP Sharing** ([#8275](https://github.com/agentscope-ai/QwenPaw/issues/8275)): Clear signal for **enterprise collaboration features**—likely to appear in v2.3+.
- 🛠️ **Cancellable Skill Downloads** ([#8126](https://github.com/agentscope-ai/QwenPaw/issues/8126)): Expected to be implemented in next minor release as part of UX overhaul.
- 🔍 **Multiple Web Search Providers** (via PRs #7712, #8200): Already in progress—Serply and Firecrawl integration suggests expansion beyond Tavily.
- 🧩 **Inline OpenUI Support** (PRs #8248, #8239): Indicates growing interest in **rich, interactive agent responses**—could evolve into a full UI plugin framework.

> 📌 **Prediction**: Next major version (v2.3) will likely introduce **centralized hub management**, **cancellable async jobs**, and **enhanced UI interactivity**.

---

### **7. User Feedback Summary**  
Real user pain points reveal emerging usage patterns:

- **Team Collaboration**: Users managing multiple agents report frustration with per-user skill installation and configuration drift ([#8275]).
- **Long-Form Output Handling**: Data-heavy agents (e.g., reports, tables) fail silently when exceeding 3500 characters in DingTalk ([#8278]).
- **Performance & Reliability**: Slow networks trigger failures due to oversized base64 payloads ([#8228]) and unresponsive UI during long downloads.
- **Configuration Friction**: Missing API key surfaces for paid providers like Tavily ([#8174]) frustrate users with subscriptions.
- **Platform Usability**: Inconsistent behavior in scroll, input clear, and config saving reduces trust in the system.

> ✅ **Positive Feedback**: Users appreciate the modular architecture, extensible tooling, and rapid iteration—especially the ability to add custom providers.

---

### **8. Backlog Watch**  
Critical long-standing issues requiring maintainer attention:

- 🔴 **[Issue #8174](https://github.com/agentscope-ai/QwenPaw/issues/8174)**: *Tavily provider lacks API key config surface* — 4 comments, no fix yet. Blocks paid quota usage. **High priority.**
- 🔴 **[Issue #8278](https://github.com/agentscope-ai/QwenPaw/issues/8278)**: *DingTalk message degradation above 3500 chars* — affects team reporting workflows. Needs urgent UI/data-layer fix.
- 🔴 **[Issue #8281](https://github.com/agentscope-ai/QwenPaw/issues/8281)**: *`reload_agent()` drops runtime hooks* — breaks dynamic plugin logic. Critical for live environments.
- 🔴 **[Issue #8279](https://github.com/agentscope-ai/QwenPaw/issues/8279)**: *ReMe watchers exhaust thread pool* — risk of service freeze in long-running deployments.
- 🔴 **[Issue #8270](https://github.com/agentscope-ai/QwenPaw/issues/8270)**: *ZIP decoding issue on Windows* — widespread UX barrier for non-technical users.

> 🔄 **Recommendation**: Prioritize these 5 issues in next sprint—each impacts core usability and adoption across teams and production systems.

---

✅ **Final Assessment**: QwenPaw is in a robust phase of growth, with strong community participation and technical maturity. However, several stability and UX bottlenecks threaten scalability. Immediate focus should be on **cancellation mechanisms, data bloat, and cross-platform compatibility** to ensure readiness for enterprise use.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest**  
**Date:** 2026-10-17  
**Source:** [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

### **1. Today's Overview**  
The ZeroClaw project remains highly active with 33 new issues and 50 PRs updated in the last 24 hours, indicating strong momentum in both development and community engagement. The ecosystem is focused on stabilizing v0.8.6 (with a hard deadline for release gating) and advancing core architecture work toward v0.9.0, particularly around runtime integrity, gateway separation, and plugin security. Critical bugs related to memory corruption, credential handling, and agent state management are emerging, suggesting growing complexity in distributed agent workflows. Despite no new releases, the pipeline shows significant progress in config resilience, tool execution safety, and cross-channel consistency.

---

### **2. Releases**  
❌ **No new releases** in the past 24 hours.  
- **v0.8.6** remains pending due to unresolved release gate concerns: the x86_64 Linux binary is under 0.7 MB (~1% of the 64 MiB cap), but there’s ongoing debate about whether to raise the size limit with a documented headroom policy ([Issue #11580](https://github.com/zeroclaw-labs/zeroclaw/issues/11580)).  
- No breaking changes or migration notes applicable at this time.

---

### **3. Project Progress**  
✅ **Merged/Closed PRs (Today):**  
- **[PR #11693](https://github.com/zeroclaw-labs/zeroclaw/pull/11693)**: Fixed `model_routing_config upsert_agent` to preserve existing agent fields and risk profiles instead of overwriting them — critical for config stability.  
- **[PR #11697](https://github.com/zeroclaw-labs/zeroclaw/pull/11697)**: Proposed holding-crate exceptions for cost limits, message times, prompt snapshots, and delegate activity — advancing ADR-016 compliance.  
- **[PR #11573](https://github.com/zeroclaw-labs/zeroclaw/pull/11573)**: Added drag-and-drop session reordering in ZeroCode UI; improved UX for multi-session workflows.  
- **[PR #11467](https://github.com/zeroclaw-labs/zeroclaw/pull/11467)**: Implemented opt-in single-tool provider rounds per #10222 — a major step toward controlled, deterministic tool execution.  

🔹 **Key Advancements:**  
- Runtime config lifecycle robustness via `upsert_agent` fix.  
- Improved user control over session management and tool behavior.  
- Forward momentum on **Phase 3 gateway separation** (tracked in [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)).

---

### **4. Community Hot Topics**  
🔥 **Most Active Issues (by comments/reactions):**  
| Issue | Title | Comments | Link |
|------|-------|----------|------|
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | [Tracker]: Runtime and gateway delivery - v0.8.6 and v0.9.0 | 8 | [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) |
| [#11655](https://github.com/zeroclaw-labs/zeroclaw/issues/11655) | Core conflict supersede hides unrelated memories when recall has no vector scores | 4 | [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11655) |
| [#11657](https://github.com/zeroclaw-labs/zeroclaw/issues/11657) | Configurable target category for turn consolidation | 3 | [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11657) |

🔍 **Underlying Needs:**  
- Users demand **predictable memory behavior** and **configurable consolidation targets**, indicating frustration with opaque memory updates and lack of control over knowledge persistence.  
- High comment volume on [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) reflects community reliance on clear roadmap visibility for v0.8.6/v0.9.0 milestones.  
- These issues signal a growing need for **transparency in internal state changes** and **user-driven configuration flexibility**.

---

### **5. Bugs & Stability**  
⚠️ **Critical Bugs Reported (2026-10-16–17):**  
| Severity | Issue | Summary | Link |
|---------|-------|--------|------|
| **S0 – Data Loss / Security Risk** | [#11796](https://github.com/zeroclaw-labs/zeroclaw/issues/11796) | Daemon suddenly prompts for GitHub credentials and blocks startup — likely a regression in auth flow. | [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11796) |
| **S1 – Workflow Blocked** | [#11777](https://github.com/zeroclaw-labs/zeroclaw/issues/11777) | Loop detector threshold too low (6 cycles); causes premature abort of valid tool sequences. | [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11777) |
| **S2 – Degraded Behavior** | [#11655](https://github.com/zeroclaw-labs/zeroclaw/issues/11655) | Memory conflicts silently hide unrelated facts when embedding provider = "none". | [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11655) |
| **S2 – Degraded Behavior** | [#11760](https://github.com/zeroclaw-labs/zeroclaw/issues/11760) | Email channel reprocesses same mail after restart due to missing `\Seen` flag. | [View Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11760) |

🔧 **Fix PRs in Progress:**  
- **[PR #11693](https://github.com/zeroclaw-labs/zeroclaw/pull/11693)** addresses `upsert_agent` config overwrite bug.  
- **[PR #11732](https://github.com/zeroclaw-labs/zeroclaw/pull/11732)** proposes fixes for memory recall and status placement edge cases.

---

### **6. Feature Requests & Roadmap Signals**  
🚀 **High-Value User-Requested Features:**  
| Request | Significance | Likely Inclusion? | Link |
|--------|--------------|------------------|------|
| Configurable consolidation category (`consolidation_category`) | Enables granular memory organization beyond “Core” | ✅ v0.8.6+ | [Issue #11657](https://github.com/zeroclaw-labs/zeroclaw/issues/11657) |
| Per-user runtime directory fallback for config lock | Essential for WSL/CIFS/FAT filesystems | ✅ v0.8.6 | [Issue #11794](https://github.com/zeroclaw-labs/zeroclaw/issues/11794) |
| Shell policy refusals should explain why + accept hints | Improves debuggability and operator trust | ⚠️ v0.9.0 | [Issue #11799](https://github.com/zeroclaw-labs/zeroclaw/issues/11799) |
| WASM plugin runtime artifact support | Critical for plugin portability and security | ✅ v0.8.6 | [Issue #10994](https://github.com/zeroclaw-labs/zeroclaw/issues/10994) |

💡 **Roadmap Signals:**  
- **v0.8.6** is nearing completion with focus on **release gates**, **plugin stability**, and **config reliability**.  
- **v0.9.0** will prioritize **gateway separation**, **security hardening**, and **cross-platform compatibility** (e.g., Windows plugin pinning).

---

### **7. User Feedback Summary**  
🛠️ **Pain Points Identified:**  
- **Memory unpredictability**: Users report that non-vector-based memory updates can silently drop unrelated facts, leading to lost context.  
- **UI/UX friction**: macOS users face keybinding conflicts (e.g., `⌥P` typing π), and ZeroCode loses open sessions on restart.  
- **Channel-specific regressions**: WhatsApp Web drops captions, voice notes, and QR codes persistently; email channels miss messages during fetches.  
- **Security anxiety**: Sudden GitHub credential prompts without context cause distrust and workflow interruption.  

🎉 **Positive Signals:**  
- High engagement with ZeroCode enhancements (drag sessions, per-pane caps) suggests strong adoption.  
- Multiple contributors actively fixing complex issues (e.g., `model_routing_config`, WASM plugin recovery) indicates healthy contributor ecosystem.

---

### **8. Backlog Watch**  
⏳ **Long-Unanswered Critical Issues Needing Attention:**  
| Issue | Status | Priority | Link |
|------|--------|----------|------|
| [#11771](https://github.com/zeroclaw-labs/zeroclaw/issues/11771) | Open | P1 | [Bootstrap file cap mismatch between turns](https://github.com/zeroclaw-labs/zeroclaw/issues/11771) |
| [#11710](https://github.com/zeroclaw-labs/zeroclaw/issues/11710) | Open | P1 | [Truncated workspace file contradicts prompt header](https://github.com/zeroclaw-labs/zeroclaw/issues/11710) |
| [#11761](https://github.com/zeroclaw-labs/zeroclaw/issues/11761) | Open | P2 | [Email channel misses mail during fetch until IDLE timeout](https://github.com/zeroclaw-labs/zeroclaw/issues/11761) |
| [#11764](https://github.com/zeroclaw-labs/zeroclaw/issues/11764) | Open | P2 | [WhatsApp Web drops untranscribed voice notes silently](https://github.com/zeroclaw-labs/zeroclaw/issues/11764) |

📌 **Note:** These issues represent systemic challenges in **prompt consistency**, **channel reliability**, and **data integrity across turn types**. They require immediate triage and architectural review to prevent cascading failures in production deployments.

---

**📊 Summary Outlook:**  
ZeroClaw is in a high-growth phase with strong community participation, but faces rising complexity in **state management**, **cross-platform stability**, and **security boundaries**. With v0.8.6 nearing release and v0.9.0 in sight, maintaining forward momentum while resolving critical regressions will be key. Prioritize backlog items affecting **memory integrity**, **authentication flows**, and **channel reliability** to ensure user trust and long-term sustainability.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*