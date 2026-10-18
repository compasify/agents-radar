# OpenClaw Ecosystem Digest 2026-10-18

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-10-18 00:14 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest – 2026-10-18**

---

### **1. Today's Overview**  
OpenClaw remains highly active with a robust momentum in both issue and pull request activity—500 issues and 500 PRs updated in the last 24 hours, reflecting sustained community engagement and intense development focus. The project is currently experiencing a critical phase of stability and performance refinement, particularly around session state integrity, memory management, and Gateway event-loop responsiveness. While no new releases were issued, significant progress is being made on high-severity bugs affecting core agent behavior, disk usage, and system reliability across multiple platforms.

---

### **2. Releases**  
❌ **No new releases** were published today.  
The latest stable version remains **2026.9.7 (c074824)**, with ongoing patching focused on crash loops, startup stalls, and persistent state corruption. No breaking changes or migration notes are currently in effect, but users should monitor for upcoming fixes to critical issues such as #162211 (startup blocking) and #157989 (plugin SSD wear).

---

### **3. Project Progress**  
✅ **16 PRs merged/closed** today, primarily focused on infrastructure cleanup, test maintenance, and minor feature polish:  
- **#175930**: Refactored plugin bundle inspection to trust cached file stats — improves load efficiency.  
- **#175934**: Simplified A2A dispatch failure ownership — reduces redundant error handling.  
- **#175556**: Optimized inbound reply capture for agents with many deliveries — faster response routing.  
- **#175911**: Simplified config restart ownership — enhances clarity during reloads.  
- **#175879**: Consolidated normalization logic — reduces code duplication across modules.  

These merges reflect a shift toward **technical debt reduction** and **systemic resilience**, preparing the foundation for larger architectural improvements.

---

### **4. Community Hot Topics**  
🔥 **Top Issues by Engagement (Last 24h):**  
| Issue | Comments | Severity | Link |
|------|----------|----------|------|
| [#99241](https://github.com/openclaw/openclaw/issues/99241) | 26 | 🐚 Platinum Hermit (P1) | Tool outputs rendered as unreadable image attachments |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 24 | 🦞 Diamond Lobster (P1) | Synchronous persistence blocks Gateway event loop |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) | 19 | 🐚 Platinum Hermit (P1) | Plugin captures cause severe SSD wear (6.5GB per start) |

🔍 **Key Needs Identified:**  
- **Preservation of raw tool output** in long-running workflows (e.g., `exec`, `web_fetch`) — currently lost when wrapped as images.  
- **Asynchronous state persistence** to prevent event-loop blocking at scale.  
- **Disk hygiene** — plugin capture directories must be cleaned post-build; current design leads to indefinite storage bloat.

---

### **5. Bugs & Stability**  
🚨 **Critical Stability Issues Reported (P0/P1):**  
| Issue | Summary | Fix PR? | Impact |
|------|--------|---------|--------|
| [#162211](https://github.com/openclaw/openclaw/issues/162211) | Startup blocks event loop 40–200s → triggers false health check → restart loop | ❌ | UX-release blocker |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | Sync agent persistence blocks Gateway loop at scale | ❌ | Crash-loop, scalability risk |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) | Plugin captures consume 1.1–6.5 GB per run → SSD wear | ❌ | Hardware degradation risk |
| [#164294](https://github.com/openclaw/openclaw/issues/164294) | WAL checkpoint never completes (pinned by reader) | ❌ | Persistent DB lock |
| [#114612](https://github.com/openclaw/openclaw/issues/114612) | SQLite tables grow unbounded → disk fill | ❌ | Long-term session instability |

📌 **Note:** These represent **core systemic risks** — not isolated edge cases. They threaten usability, durability, and deployment viability in production environments.

---

### **6. Feature Requests & Roadmap Signals**  
💡 **Emerging Priorities from User Feedback:**  
- **Personal identity opt-in (iOS/macOS)** – #162164 requests explicit sign-in while preserving shared owner. Signals growing demand for **device-level personalization**.  
- **Per-turn send budget for message tool** – #119992 highlights abuse potential via repeated `message` calls. Indicates need for **output rate limiting**.  
- **Android Talk session reuse bug** – #175027 shows real-time voice fails due to archived session binding. Implies **session lifecycle enforcement** is under stress.  
- **Telegram sticker handling** – #120735: stickers arrive as raw refs, not staged. Suggests **media processing pipeline gaps** in non-text channels.

🔮 **Predicted Next Version Additions:**  
- **Session retention policies** (per #114612)  
- **Plugin capture GC automation** (per #158390)  
- **Improved media staging and preview** across all channels  
- **Enhanced CLI/agent resource accounting** (from #166665)

---

### **7. User Feedback Summary**  
👥 **Real User Pain Points Observed:**  
- **"I can't read tool output anymore — it’s just an image."** (#99241) — common in long workflows using `exec`, `web_fetch`.  
- **"My SSD is dying after every gateway restart."** (#157989) — directly tied to plugin capture behavior.  
- **"My Android Talk drops mid-conversation."** (#131768, #175027) — impacts mobile-first use cases.  
- **"After a version update, agents won’t start — health says green, but nothing works."** (#164799) — indicates misaligned readiness signals.  

✅ **Positive Signals:**  
- Users actively report repro steps and logs (e.g., #162211, #164294), suggesting strong engagement and diagnostic maturity.  
- Many fixes are being proposed via PRs (e.g., #175932, #175707), showing contributor confidence.

---

### **8. Backlog Watch**  
⏳ **Long-Unanswered High-Impact Issues Needing Maintainer Attention:**  
| Issue | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#114612](https://github.com/openclaw/openclaw/issues/114612) | Open since 2026-07-27 | P2, needs-maintainer-review | Unbounded SQLite growth → guaranteed disk exhaustion |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) | Open since 2026-09-25 | P1, needs-live-repro | Critical hardware risk — requires urgent fix |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | Open since 2026-08-05 | P1, needs-maintainer-review | Blocks scaling — affects all large deployments |
| [#164294](https://github.com/openclaw/openclaw/issues/164294) | Open since 2026-10-03 | P2, needs-maintainer-review | WAL deadlock prevents DB consistency |
| [#118839](https://github.com/openclaw/openclaw/issues/118839) | Open since 2026-08-03 | P1, needs-live-repro | Regression reappearing despite prior fixes |

🛑 **Urgent Call to Action:** These issues have been open for weeks/months, often with detailed evidence. Maintainers should prioritize triage and assign owners to avoid further erosion of user trust.

---  
*Data source: GitHub — openclaw/openclaw (2026-10-18)*

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Ecosystem – 2026-10-18**

---

### **1. Ecosystem Overview**  
The open-source personal AI agent landscape in Q4 2026 is characterized by rapid architectural evolution, intense focus on runtime stability, and growing maturity in user-facing reliability. Projects are converging on core challenges: session integrity, memory/disk management, media handling, and secure credential lifecycle. While innovation remains strong—especially in modularity and cross-platform support—many projects are now prioritizing post-merge stabilization over feature expansion, signaling a shift from early experimentation to production readiness.

---

### **2. Activity Comparison**

| Project        | Issues (Last 24h) | PRs (Last 24h) | Releases (Today) | Health Score* |
|----------------|-------------------|----------------|------------------|---------------|
| **OpenClaw**   | 500               | 500            | ❌ No            | ⭐⭐⭐⭐☆ (4.5/5) |
| **Hermes Agent** | 50              | 50             | ❌ No            | ⭐⭐⭐☆☆ (3.5/5) |
| **QwenPaw**    | 9                 | 15             | ❌ No            | ⭐⭐☆☆☆ (2.5/5) |
| **ZeroClaw**   | 49                | 50             | ❌ No            | ⭐⭐⭐☆☆ (3.5/5) |
| **IronClaw**   | 0                 | 0              | —                | ⭐☆☆☆☆ (1.0/5) |

> *Health Score: Based on activity intensity, issue severity, fix velocity, community engagement, and stability signals (1–5 scale).*

---

### **3. OpenClaw's Position**  
OpenClaw stands as the most mature and technically ambitious project in the ecosystem, with **unparalleled developer momentum** (500 issues & PRs/day), indicating deep internal investment and broad contributor involvement. Its technical approach emphasizes **systemic resilience**, with active refactoring of core components like session state, plugin inspection, and event-loop design. Compared to peers, OpenClaw demonstrates stronger **infrastructure hygiene**—evidenced by consistent PRs focused on reducing code duplication and improving ownership clarity. Community size appears larger than average, with high-quality, reproducible bug reports and proactive PR contributions. This positions OpenClaw not just as a tool, but as a **reference implementation** for robust agent architecture.

---

### **4. Shared Technical Focus Areas**  
Across all active projects, several critical technical needs are emerging:

| Requirement                          | Projects Involved                     | Specific Needs |
|--------------------------------------|----------------------------------------|----------------|
| **Asynchronous persistence**         | OpenClaw, Hermes Agent, ZeroClaw      | Prevent sync I/O from blocking event loops at scale |
| **Session state integrity**          | OpenClaw, Hermes Agent, QwenPaw       | Avoid corruption during restarts, profile switches, or crashes |
| **Media handling & fallbacks**       | QwenPaw, OpenClaw, ZeroClaw           | Handle audio/video gracefully across backends; prevent UI wedges |
| **Disk hygiene & cleanup**           | OpenClaw, QwenPaw                     | Auto-GC plugin captures; prevent SSD wear and disk exhaustion |
| **Config reliability & validation**  | ZeroClaw, QwenPaw, Hermes Agent       | Prevent silent config drops; enforce schema checks |
| **Security hardening**               | ZeroClaw, Hermes Agent, OpenClaw      | Sanitize inputs, avoid credential leaks, prevent command injection |

These recurring themes reflect a maturing ecosystem where **reliability and operational safety** are now top priorities over novelty.

---

### **5. Differentiation Analysis**

| Dimension               | **OpenClaw**                                  | **Hermes Agent**                             | **QwenPaw**                              | **ZeroClaw**                              |
|-------------------------|------------------------------------------------|----------------------------------------------|------------------------------------------|-------------------------------------------|
| **Feature Focus**       | Systemic stability, infrastructure polish      | Unified gateway, session ownership           | Media handling, UX polish                | Security, modular runtime, CLI trust     |
| **Target Users**        | DevOps, power users, enterprise deployments    | Desktop-first, local-first workflows         | Mobile/web integrations (DingTalk, HarmonyOS) | Developers, embedded agents, WSL users |
| **Architecture**        | High-throughput, multi-agent, persistent state | Monolithic gateway with multiplexed sessions | Stream-based, rich-media aware           | Modular, WASM-enabled, daemon-driven     |
| **Key Innovation**      | Session state normalization, A2A dispatch cleanups | Gateway ownership tracking system          | Plugin refactor for extensibility        | Opt-in minimal tools, verified plugin updates |

OpenClaw leads in **scale and resilience**; Hermes Agent in **session orchestration complexity**; QwenPaw in **cross-channel media fidelity**; ZeroClaw in **security-by-design and embeddability**.

---

### **6. Community Momentum & Maturity**

- **Rapid Iteration Tier (High Velocity):**  
  - ✅ **OpenClaw**: 500 issues/PRs/day — indicative of a **high-momentum, actively developed reference stack**.  
  - ✅ **Hermes Agent**: 50 issues/PRs/day — strong post-merge stabilization phase after major merge (#106742).

- **Stabilization Phase (Focus on Quality):**  
  - ✅ **ZeroClaw**: High activity with security and config fixes — preparing for v0.8.7/v0.9.0.  
  - ✅ **QwenPaw**: 15 PRs in 24h, but many address regressions — stabilizing v2.2.2 post-release.

- **Low/Moribund Activity:**  
  - ❌ **IronClaw**: No activity in 24h — likely stalled or inactive.

This tiering reflects a **mature ecosystem split**: some projects are building foundational systems (OpenClaw, ZeroClaw), others are refining user experience (QwenPaw), and one (Hermes Agent) is navigating post-architectural integration.

---

### **7. Trend Signals**  
Based on community feedback and PR patterns, key industry trends emerge:

1. **From Feature-Centric to Operationally Resilient**  
   The shift from adding new tools to fixing crash loops, disk bloat, and startup stalls signals that **production-grade deployment is now the priority**.

2. **Media Handling as a Core Capability**  
   Persistent bugs around audio/video rendering (QwenPaw, OpenClaw) and formatting loss (DingTalk) highlight that **rich media is no longer optional**—it’s central to real-world workflows.

3. **Modularity and Extensibility Demand**  
   Requests for plugin refactors (QwenPaw #8289), verified plugin updates (ZeroClaw #11262), and opt-in tools (ZeroClaw #11221) indicate a move toward **modular, pluggable agent architectures**.

4. **Trust Through Transparency**  
   Users demand clear error messages, visible config states, and diagnostic visibility (e.g., #11418 copy failure, #9786 config drop). This points to a **rising expectation for observability and self-troubleshooting**.

5. **Security as a Foundational Layer**  
   Input sanitization, credential leak prevention, and identity verification are no longer add-ons—they’re **non-negotiable requirements** in v0.9+ designs.

---

### **Conclusion**  
The personal AI agent ecosystem is transitioning from **exploration to engineering excellence**. OpenClaw leads in technical depth and community scale, while ZeroClaw and Hermes Agent push boundaries in security and session control. QwenPaw excels in cross-platform UX. For developers, the message is clear: **build for reliability, not novelty**. The future belongs to agents that don’t crash, don’t corrupt data, and don’t lose your output—regardless of platform or media type.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-10-18**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active with a surge in developer engagement: **50 open issues and 50 open pull requests** updated within the last 24 hours, indicating intense development momentum. The core focus centers on post-merge stabilization of the **unified gateway runtime (PR #106742)**, which was merged on October 14 and is now being rigorously tested via a cascade of tracking issues (e.g., #134889, #140719). Critical stability concerns span session state management, credential handling, and cross-platform compatibility—especially on Windows and macOS. Despite no new releases, the volume of PRs suggests imminent patch-level updates are likely.

---

### **2. Releases**  
❌ **No new releases** were published as of 2026-10-18.  
The last release, **v0.22.2+948.ge31c674**, continues to be the baseline for reported regressions (e.g., OpenCode Go key misrouting in #140751). Users are advised to monitor GitHub closely for an upcoming patch release addressing multiple P0/P1 bugs related to gateway ownership, session persistence, and credential leaks.

---

### **3. Project Progress**  
✅ **Merged/Completed PRs (Today):**  
- **[PR #129076](https://github.com/NousResearch/hermes-agent/pull/129076)**: Fixed vision capability probe from auto-loading models during detection—critical for local model performance and startup time.  
- **[PR #140752](https://github.com/NousResearch/hermes-agent/pull/140752)**: Resolved model menu truncation by dynamically sizing it based on content, improving UX for long model names (follow-up to #132212).  
- **[PR #129343](https://github.com/NousResearch/hermes-agent/pull/129343)**: Prevented infinite router watchdog restart loops after crashes or port conflicts—improves system resilience.  

🔧 **Key Advancements:**  
- The **unified gateway runtime** (#106742) is now actively being stabilized through over 40 post-merge tracking issues (e.g., #134889, #140719), signaling progress toward a robust, multiplexed session architecture.  
- Security fixes are gaining traction: **PR #140755** redirects OpenCode Go keys to the correct inference endpoint, resolving auth failures for service accounts.

---

### **4. Community Hot Topics**  
🔥 **Top Issues by Engagement:**  
- **[#134889](https://github.com/NousResearch/hermes-agent/issues/134889)** – *Tracking: one gateway owns every local session* (173 comments)  
  → **Critical post-merge bug**: Multiple systems (desktop, CLI, TUI) are failing due to improper session ownership logic after the unified gateway merge. This is the most urgent issue in the backlog.  
- **[#138934](https://github.com/NousResearch/hermes-agent/issues/138934)** – *Desktop composer queue duplicates and won’t delete* (4 comments)  
  → Affects daily workflow; users cannot clean up queued prompts, leading to UI clutter and potential logic errors.  
- **[#140719](https://github.com/NousResearch/hermes-agent/issues/140719)** – *Gateway fixes package 10: client sync, credentials, messaging order* (1 comment)  
  → Part of the large #134889 series; consolidates 41 open findings across session lifecycle, authentication, and desktop sync—shows coordinated effort to stabilize the core runtime.

💡 **Underlying Needs:**  
Users demand **predictable session lifecycle control**, **stable local-first operation**, and **seamless cross-client synchronization**—especially on desktop. The high comment count on #134889 reflects frustration with instability introduced by a major architectural change.

---

### **5. Bugs & Stability**  
🚨 **High Severity (P0–P2):**  
| Issue | Description | Fix PR? |  
|------|-------------|--------|  
| [#134889](https://github.com/NousResearch/hermes-agent/issues/134889) | Gateway fails to manage local sessions correctly post-merge | ✅ Yes (`#140719` ongoing) |  
| [#135392](https://github.com/NousResearch/hermes-agent/issues/135392) | Fresh Nous Cloud instance enters ownership restart loop | ❌ No |  
| [#140706](https://github.com/NousResearch/hermes-agent/issues/140706) | Elevated gateway on Windows fails to verify peer — Desktop boot fails | ❌ No |  
| [#140744](https://github.com/NousResearch/hermes-agent/issues/140744) | Deleting a session in a secondary profile blocks its ID in launch profile | ❌ No |  
| [#140758](https://github.com/NousResearch/hermes-agent/issues/140758) | Same-model background review loses 98% cache hit → 4% → 4% | ❌ No |

⚠️ **Medium Severity (P3):**  
- [#140803](https://github.com/NousResearch/hermes-agent/issues/140803): `/kanban` and `/curator` crash with uncaught `shlex ValueError` when argument contains quotes.  
- [#133179](https://github.com/NousResearch/hermes-agent/issues/133179): Stale `model.base_url` causes credential leakage to third-party hosts (security risk).

---

### **6. Feature Requests & Roadmap Signals**  
🎯 **High-Value Features Requested:**  
- **[#134024](https://github.com/NousResearch/hermes-agent/issues/134024)** – Optional max-width cap for chat messages on ultrawide monitors (P3, 3 comments)  
  → Strong UX signal: users report readability issues (>200 chars per line). Likely to be included in next minor release.  
- **[#140697](https://github.com/NousResearch/hermes-agent/issues/140697)** – Self-evolving decision-prior skill for long-running tasks (P3, 1 comment)  
  → Indicates growing need for autonomous task progression beyond static planning. Could inform future agent autonomy roadmap.  
- **[#127836](https://github.com/NousResearch/hermes-agent/pull/127836)** – `/creds` command + encrypted credential store (P3, 10+ comments)  
  → Highly requested for secure secret management. Already under review; may become a flagship feature in v0.23.

---

### **7. User Feedback Summary**  
💬 **Pain Points:**  
- **Session chaos** on desktop: duplicate queue entries (#138934), inability to delete, and persistent data corruption.  
- **Windows-specific failures**: Elevated gateway processes cannot authenticate with Desktop app (#140706), blocking adoption in enterprise environments.  
- **Unreliable model selection**: New models added to Nous Portal not visible in Desktop dropdown due to stale cache (#140702).  
- **Cache inefficiency**: Background reviews cause massive warm cache loss (~400k tokens), impacting cost and performance (#140758).  

👍 **Satisfaction Signals:**  
- Positive feedback on **PR #140752** (dynamic model menu sizing) indicates strong user appreciation for refined UX details.  
- Ongoing community collaboration on security fixes (e.g., OpenCode endpoints) shows trust in the project’s responsiveness.

---

### **8. Backlog Watch**  
🔍 **Critical Long-Term Items Needing Attention:**  
- **[#134889](https://github.com/NousResearch/hermes-agent/issues/134889)** – *Tracking: one gateway owns every local session* (173 comments, 5 days old)  
  → **Blocked issue**: Core to post-merge stability. Requires dedicated maintainer attention to resolve cascading failures.  
- **[#133179](https://github.com/NousResearch/hermes-agent/issues/133179)** – *Stale base_url causes credential leak* (2 comments, P3)  
  → High-severity security risk with minimal traction. Should be prioritized despite low comment count.  
- **[#140751](https://github.com/NousResearch/hermes-agent/issues/140751)** – *OpenCode Go keys use legacy endpoint* (0 comments, P2)  
  → Regression affecting real users; fix PR exists ([#140755](https://github.com/NousResearch/hermes-agent/pull/140755)) but needs merging.  

📌 **Action Item**: Maintain a triage sprint focused on **gateway ownership**, **session lifecycle**, and **credential security** to prevent further erosion of trust.

---  
*Data source: [Hermes Agent GitHub](https://github.com/NousResearch/hermes-agent)*  
*Digest generated: 2026-10-18*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-10-18**

---

### **1. Today's Overview**  
The QwenPaw project remains highly active with a strong influx of new issues (9 in the last 24 hours) and pull requests (15), indicating ongoing development and real-world usage challenges. No new releases were published, suggesting the current v2.2.2 (released October 15, 2026) is still under evaluation or stabilization. The high volume of bug reports—particularly around media handling, UI freezing, and session wedging—points to stability concerns in high-load or rich-media scenarios. Meanwhile, community contributions are accelerating, especially in areas like HarmonyOS support, memory management, and UX polish.

---

### **2. Releases**  
❌ **No new releases** in the past 24 hours.  
The latest stable version remains **v2.2.2**, released on **2026-10-15**.  
There are no release notes or migration guides available for this update, though it has already introduced regressions (e.g., #8288, #8300). Users should expect potential instability when upgrading from v2.2.1.

---

### **3. Project Progress**  
✅ **Merged/Closed PRs (1):**  
- [#8296](https://github.com/agentscope-ai/QwenPaw/pull/8296) – *Fix: Treat stale-pid probe `SystemError` as 'peer not alive'*  
  - Resolves #8194 by improving error resilience in `qwenpaw-creator` startup logic on Windows CPython.  
  - Improves reliability during agent runtime checks and prevents false crashes due to PID probing.

📌 **Other notable PRs in progress:**  
- [#8299](https://github.com/agentscope-ai/QwenPaw/pull/8299): Fixes video URL rejection in non-video-capable endpoints (e.g., DeepSeek).  
- [#8295](https://github.com/agentscope-ai/QwenPaw/pull/8295): Hides injected system context blocks from being rendered as assistant text (fixes #8293).  
- [#8287](https://github.com/agentscope-ai/QwenPaw/pull/8287): Fixes misleading slider fill and flickering save behavior in thinking strength control.  
- [#8291](https://github.com/agentscope-ai/QwenPaw/pull/8291): Requires non-empty `api_key` to enable ReMe reranker (security + config hygiene).

These fixes reflect a shift toward **robustness in edge cases**, **UX consistency**, and **configuration safety**.

---

### **4. Community Hot Topics**  
🔥 **Top Issues (by engagement):**  

1. **[#8278](https://github.com/agentscope-ai/QwenPaw/issues/8278)** – *DingTalk channel drops Markdown/table formatting above 3500 chars*  
   - **Impact**: High — breaks data-heavy workflows (reports, tables).  
   - **Root Cause**: Silent degradation to plain text; no feedback signal to agent.  
   - **Community Need**: Reliable content delivery with fallback strategies for large payloads.

2. **[#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171)** – *Audio file send causes session wedge via LM Studio 400 error*  
   - **Engagement**: 5 comments, multiple references to prior similar bugs (#7015, #7654).  
   - **Pattern**: Recurring issue in audio/media handling across OpenAI-compatible backends.  
   - **Underlying Need**: Predictable media fallbacks and graceful degradation.

3. **[#8288](https://github.com/agentscope-ai/QwenPaw/issues/8288)** – *Switching to large stream-output conversation freezes UI and may crash backend*  
   - **Severity**: Critical — affects usability in long-running agents.  
   - **Note**: Regression from v2.2.1 (confirmed side-by-side).  
   - **Implication**: Memory or rendering bottleneck in streaming logic.

🔧 **Top PRs (by impact & activity):**  
- [#8299](https://github.com/agentscope-ai/QwenPaw/pull/8299): Fixes video wedge — directly addresses #8298.  
- [#8295](https://github.com/agentscope-ai/QwenPaw/pull/8295): Prevents system markers from leaking into user view — fixes core UX flaw.  
- [#8287](https://github.com/agentscope-ai/QwenPaw/pull/8287): Fixes UI flicker and visual misalignment — improves trust in settings.

---

### **5. Bugs & Stability**  
⚠️ **Critical Bugs (High Severity):**  
1. **[#8288](https://github.com/agentscope-ai/QwenPaw/issues/8288)** – UI freeze and potential SIGBUS crash on switching to large stream conversations  
   - **Impact**: Full application hang or crash.  
   - **Status**: Unresolved; regression from v2.2.1.  
   - **Fix PR**: None yet. Urgent attention needed.

2. **[#8298](https://github.com/agentscope-ai/QwenPaw/issues/8298)** – Video file triggers `422 unknown variant `video_url`` → session permanently wedged  
   - **Impact**: Complete session lockup.  
   - **Fix PR**: [#8299](https://github.com/agentscope-ai/QwenPaw/pull/8299) exists and is ready for review.

3. **[#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171)** – Audio file send causes persistent wedge due to unhandled LM Studio rejection  
   - **Impact**: Session hangs after audio delivery.  
   - **Fix PR**: [#8215](https://github.com/agentscope-ai/QwenPaw/pull/8215) targets this specific case.

🟡 **Moderate Bugs:**  
- **[#8300](https://github.com/agentscope-ai/QwenPaw/issues/8300)** – Input box not cleared after sending message  
- **[#8293](https://github.com/agentscope-ai/QwenPaw/issues/8293)** – System markers visible in chat output  
- **[#8286](https://github.com/agentscope-ai/QwenPaw/issues/8286)** – Thinking strength slider visual glitch

---

### **6. Feature Requests & Roadmap Signals**  
🚀 **Upcoming Features (v2.3.0 signals):**  
- **[#8289](https://github.com/agentscope-ai/QwenPaw/issues/8289)** – *Making QwenPaw lighter and more extensible via plugin refactor*  
  - **Signals**: Core refactoring effort underway.  
  - **Expected Impact**: Better modularity, easier third-party integration, reduced bundle size.  
  - **Roadmap Indicator**: v2.3.0 likely to focus on architecture and performance.

📱 **New Platform Support:**  
- **[#8164](https://github.com/agentscope-ai/QwenPaw/pull/8164)** – Native HarmonyOS ArkUI client  
  - **Significance**: Expands reach to Huawei ecosystem.  
  - **Status**: In progress (size/XXXL), likely to be included in next major release.

⚙️ **User-Driven Enhancements:**  
- Persistent plugin provenance tracking ([#8231](https://github.com/agentscope-ai/QwenPaw/pull/8231))  
- Proper workspace hook firing on reload ([#8294](https://github.com/agentscope-ai/QwenPaw/pull/8294))

---

### **7. User Feedback Summary**  
🔍 **Key Pain Points:**  
- **Media Handling Frailty**: Users report consistent failures when sending audio/video files, especially with non-OpenAI backends (LM Studio, DeepSeek, DashScope).  
- **Content Delivery Reliability**: DingTalk users frustrated by silent degradation of Markdown/table formatting beyond 3500 characters.  
- **UI Responsiveness**: Freezing during large stream transitions impacts productivity and trust.  
- **Configuration Clarity**: Missing `api_key` warning leads to failed reranker activation — hints at poor error messaging.

✅ **Positive Signals:**  
- Active community contribution (15 PRs in 24h) shows strong developer engagement.  
- Clear demand for extensibility and lightweight design suggests growing maturity.  
- Users are reporting nuanced, use-case-specific issues (e.g., data reporting, table rendering), indicating real-world deployment.

---

### **8. Backlog Watch**  
🚨 **Long-standing, high-impact issues needing attention:**  
- **[#7015](https://github.com/agentscope-ai/QwenPaw/issues/7015)** – Original audio/wedge issue (fixed by #7024, but partial fix only)  
  - Still referenced in #8171, #8215, #7654 — indicates incomplete resolution.  
  - **Action Required**: Unified media rejection handler across all providers.

- **[#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211)** – *Prevent injected context from persisting in history*  
  - **Status**: Open since August 2026, under review.  
  - **Risk**: Injected context leaks into conversation history, violating privacy and traceability norms.  
  - **Urgency**: High — foundational for secure agent operation.

- **[#8278](https://github.com/agentscope-ai/QwenPaw/issues/8278)** – DingTalk content degradation  
  - **Note**: No PR submitted yet despite 4 comments.  
  - **Recommendation**: Prioritize solution involving `split_text` reuse and fallback signaling.

---

> ✅ **Overall Project Health**: **Active but unstable**.  
> Strong community involvement and architectural vision (v2.3.0 roadmap), but critical bugs in media handling and UI responsiveness threaten usability. Immediate triage of session-wedge issues and UI regressions is recommended.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest – 2026-10-18**

---

### **1. Today's Overview**  
The ZeroClaw project remains highly active, with 49 open issues and 50 open pull requests updated in the last 24 hours—indicating strong developer engagement and rapid iteration. Activity is concentrated in core runtime stability, security hardening, and plugin/gateway integration, particularly around v0.8.7 and v0.9.0 milestones. High-severity bugs (S0–S2) are being addressed urgently, including credential prompts blocking startup, loop detection failures, and silent configuration drops. The absence of new releases suggests a focus on stabilizing existing features ahead of upcoming versioning.

---

### **2. Releases**  
*No new releases published.*  
The project continues to prepare for **v0.8.7** (targeted for imminent release), with multiple PRs focused on finalizing gateways, plugin updates, and config lifecycle fixes. No breaking changes have been announced, but users should monitor `CHANGELOG.md` for updates related to plugin migration (`plugin migrate`), WASM host shipping (#11347), and enhanced security checks.

> 🔗 [GitHub Release Tracking](https://github.com/zeroclaw-labs/zeroclaw/releases)

---

### **3. Project Progress**  
**Merged/Closed PRs (Today):**  
- ✅ **PR #11221** – *feat(tools): add an opt-in minimal built-in tool setting* — Enabled selective tool loading via `[tools].optional`, improving performance and reducing attack surface. This foundational change supports future modular runtime designs.
- ✅ **PR #11262** – *feat(cli): add zeroclaw plugin update with verified replacement* — Adds safe, rollback-capable plugin updates, addressing long-standing gap in plugin management (#10995).
- ✅ **PR #10446** – *fix(runtime): reject tool-call envelopes leaked into prose* — Prevents malicious or malformed tool calls from being rendered as text, closing a critical security vector.

These merges signal progress toward a more secure, configurable, and resilient agent runtime.

---

### **4. Community Hot Topics**  
Top community concerns center on **security**, **config reliability**, and **cross-platform stability**:

- **Issue #11777** – *Loop detector threshold too low* (2 comments, S1)  
  > 📌 [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11777)  
  Users report agents halting mid-task due to overly aggressive loop detection. This indicates a need for tunable thresholds in production workflows.

- **Issue #11796** – *Daemon suddenly prompts for GitHub credentials at startup* (2 comments, S0)  
  > 📌 [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11796)  
  A sudden regression affecting user trust and workflow continuity—likely tied to auth state corruption or misconfigured credential caching.

- **PR #11822** – *fix(security): split POSIX commands at substitution boundaries* (1 comment, size:L)  
  > 📌 [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/11822)  
  Addresses command injection risks by better parsing shell syntax, showing growing emphasis on input sanitization.

These reflect a community demanding **predictability**, **transparency**, and **hardened defaults**.

---

### **5. Bugs & Stability**  
Critical stability issues reported today include:

| Issue | Severity | Description | Fix PR? |
|------|----------|-------------|--------|
| [#11777](https://github.com/zeroclaw-labs/zeroclaw/issues/11777) | S1 – Workflow Blocked | Loop detector aborts agent after 6 cycles; no retry or override | ❌ No fix yet |
| [#11796](https://github.com/zeroclaw-labs/zeroclaw/issues/11796) | S0 – Security Risk | Daemon blocks startup with unexpected GitHub prompt | ❌ No fix yet |
| [#11087](https://github.com/zeroclaw-labs/zeroclaw/issues/11087) | S1 – Workflow Blocked | Windows app hangs after window close | ❌ No fix yet |
| [#11706](https://github.com/zeroclaw-labs/zeroclaw/issues/11706) | S2 – Degraded Behavior | Vision provider stays pinned even after image limit reached | ✅ PR #11716 merged |
| [#9902](https://github.com/zeroclaw-labs/zeroclaw/issues/9902) | S2 – Degraded Behavior | `sop.max_concurrent_total` silently overrides per-SOP limits | ❌ Not fixed |

> ⚠️ **Note:** While PR #11716 resolves the vision route issue, others remain unresolved and may block user adoption.

---

### **6. Feature Requests & Roadmap Signals**  
Key feature signals point toward **modular runtime design**, **identity verification**, and **multiplatform resilience**:

- **Feature #11324 / #11325** – *Verify daemon identity and named-pipe server on Windows*  
  > 📌 [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11324)  
  Indicates push for **secure CLI-daemon communication** across platforms, especially Windows.

- **Feature #11794** – *Per-user fallback for config lock on non-Unix FS (WSL, CIFS)*  
  > 📌 [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/11794)  
  Signals demand for **better cross-platform compatibility**, likely driven by WSL and remote development use cases.

- **Tracker #7432** – *Runtime and gateway delivery: v0.8.6 + v0.9.0*  
  > 📌 [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)  
  The ongoing phase 2/3 work shows the team is building toward **modular, embeddable agent runtimes**—a clear roadmap direction.

These suggest **v0.9.0** will be a major architectural shift toward flexibility and security-by-design.

---

### **7. User Feedback Summary**  
Real-world pain points revealed through issues:

- **Config unreliability**: Users report that malformed `SOP.toml` files are silently dropped (#9786), causing confusion when tools disappear without warning.
- **Plugin confusion**: Skill bundles fail to appear in review tools (#11333), indicating poor visibility into runtime state.
- **UI/UX friction**: "Copy" button fails to copy to clipboard (#11418), suggesting basic TUI functionality is broken.
- **Platform-specific instability**: Slack thread status ("is thinking…") vanished since v0.8.5 (#11416), undermining user confidence in real-time interaction.

Users value **predictability**, **diagnostics**, and **consistent behavior across channels**—but many features still feel experimental.

---

### **8. Backlog Watch**  
High-impact, long-standing issues requiring maintainer attention:

- **Issue #7432** – *Runtime and gateway delivery tracker* (10 comments, P2, high risk)  
  > 📌 [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)  
  Critical for v0.8.6/v0.9.0 delivery; currently blocked on sequencing and gap closure. Needs ownership.

- **Issue #10999** – *Publish and prove Discord plugin installation from release binary* (4 comments, blocked)  
  > 📌 [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10999)  
  Required for official plugin support. Still waiting on end-to-end proof and documentation.

- **Issue #9624** – *Registry WIT pin diverges from master* (2 comments, P1, high risk)  
  > 📌 [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9624)  
  Breaks component compatibility—urgent fix needed before wider deployment.

> 💡 These represent **project-critical bottlenecks**. Prioritization here will determine release readiness.

---

### **Conclusion**  
ZeroClaw is in a high-intensity stabilization phase ahead of v0.8.7 and v0.9.0. While technical depth and security focus are strong, user-facing reliability and diagnostics remain inconsistent. Immediate priorities should be resolving S0/S1 bugs, tightening config validation, and accelerating modular runtime delivery. With solid contributor momentum and clear roadmap signals, ZeroClaw is poised to become a robust, embeddable AI agent platform—but only if current stability gaps are closed swiftly.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*