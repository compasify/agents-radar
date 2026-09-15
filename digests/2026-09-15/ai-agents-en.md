# OpenClaw Ecosystem Digest 2026-09-15

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-09-15 00:52 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest – 2026-09-15**

---

### **1. Today's Overview**  
The OpenClaw project remains highly active with **500 new issues and 500 PRs updated in the last 24 hours**, indicating intense development momentum and community engagement. The issue tracker shows a sharp focus on **critical stability, security, and UX flaws**, particularly around session state integrity, process management, and message delivery reliability. While no new releases have been published, the volume of merged PRs suggests significant progress toward stabilizing the 2026.9.x release cycle. The high number of P0/P1 issues flagged as "needs-maintainer-review" or "needs-product-decision" signals that core team prioritization is under pressure.

---

### **2. Releases**  
❌ **No new releases** were published today.  
*Note:* The most recent stable version remains **2026.9.4**, which has already triggered multiple critical regressions (e.g., #145510, #146860). Users are advised to avoid upgrading until stability fixes are confirmed via patch releases.

---

### **3. Project Progress**  
✅ **12 merged/closed PRs** were finalized today, primarily focused on UI polish, performance optimization, and minor bug fixes:

- **PR #148640** – Fixed slow sidebar hover scrolling (Web UI)  
  [GitHub Link](https://github.com/openclaw/openclaw/pull/148640)
- **PR #148635** – Resolved chat metadata spin after plugin retirement  
  [GitHub Link](https://github.com/openclaw/openclaw/pull/148635)
- **PR #148655** – Moved task progress indicator to upper-right corner for better visibility  
  [GitHub Link](https://github.com/openclaw/openclaw/pull/148655)
- **PR #148537** – Preserved client attribution (`via CLI`, `via RPC`) in unloaded replies  
  [GitHub Link](https://github.com/openclaw/openclaw/pull/148537)
- **PR #148619** – Fixed incorrect timeout classification in private continuations  
  [GitHub Link](https://github.com/openclaw/openclaw/pull/148619)
- **PR #148551** – Reduced metadata reads during Logbook card revisions  
  [GitHub Link](https://github.com/openclaw/openclaw/pull/148551)

These updates reflect ongoing refinement of user experience and internal consistency, though they do not address major systemic failures.

---

### **4. Community Hot Topics**  
The top 5 most commented issues reveal deep concerns about system reliability and security:

| Issue | Summary | Comments | Severity | GitHub Link |
|------|--------|----------|----------|------------|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | Internal agent text leaks into messaging channels (security/UX risk) | 40 | 🦞 Diamond Lobster (P1) | [Link](https://github.com/openclaw/openclaw/issues/25592) |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Zombie child processes accumulate due to un-reaped hooks/tools | 30 | 🦪 Silver Shellfish (P1) | [Link](https://github.com/openclaw/openclaw/issues/97616) |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | Synchronous persistence blocks Gateway event loop at scale | 20 | 🦞 Diamond Lobster (P1) | [Link](https://github.com/openclaw/openclaw/issues/119720) |
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | MCP server init timeout crashes Gateway via unhandled rejection | 16 | 🦞 Diamond Lobster (P1) | [Link](https://github.com/openclaw/openclaw/issues/144911) |
| [#146860](https://github.com/openclaw/openclaw/issues/146860) | Windows managed update fails to obtain process identity (update stalls) | 10 | 🦪 Silver Shellfish (P0) | [Link](https://github.com/openclaw/openclaw/issues/146860) |

**Analysis:** These issues point to **critical architectural debt**—especially around async lifecycle management, process isolation, and cross-channel data leakage. The recurring theme: *internal processing logic is leaking into user-facing surfaces*, risking both privacy and system stability.

---

### **5. Bugs & Stability**  
**Top 5 Stability-Focused Bugs (Rank by Severity):**

1. **[#25592](https://github.com/openclaw/openclaw/issues/25592)** – Text between tool calls leaks into messages → **Security breach risk** (session-state + security impact). *No fix PR yet.*
2. **[#97616](https://github.com/openclaw/openclaw/issues/97616)** – Child process zombie accumulation → **Runtime degradation & crash loops**. *Fix PR pending.*
3. **[#119720](https://github.com/openclaw/openclaw/issues/119720)** – Sync persistence blocks event loop → **Scalability killer**. *No fix PR.*
4. **[#144911](https://github.com/openclaw/openclaw/issues/144911)** – Unhandled promise rejection during MCP init → **Gateway crash on timeout**. *Fix PR pending.*
5. **[#146860](https://github.com/openclaw/openclaw/issues/146860)** – Windows update handoff fails silently → **Update blocker**. *Fix PR pending.*

> 🔴 **Critical Risk**: Several P0/P1 bugs directly impact **release readiness**, including update failure (#145510), crash loops (#123326), and silent data loss (#125570).

---

### **6. Feature Requests & Roadmap Signals**  
High-priority feature requests show strong demand for **better control, observability, and flexibility**:

- **Persistent task-status surface** (#52640): Users want real-time status for long-running turns (Discord-first).
- **Slash command for streaming mode toggle** (#74077): On-the-fly preview control without config restart.
- **Centralized filename encoding utility** (#48788): Critical for multi-encoding support (GB18030, Shift-JIS, etc.).
- **Skill Graph – on-demand dependency loading** (#74100): Reduce token overhead in large skill chains.
- **Sort sessions by last meaningful activity, not last message** (#51028): Combat heartbeat noise.

> 📌 **Prediction**: The next release (likely **2026.9.5**) will likely include **streaming control via slash commands**, **task status UI improvements**, and **enhanced plugin metadata handling** based on PRs like #148655 and #148537.

---

### **7. User Feedback Summary**  
Real-world pain points from users across platforms (Slack, Telegram, Discord, Feishu):

- **Telegram**: Silent dead-lettering of messages after network failure (#125764) — high-value content lost.
- **Windows**: Update failures due to identity probe issues (#146860) — deployment workflows broken.
- **MacOS**: Gateway hangs on SMB-mounted volumes (#75767) — common in enterprise environments.
- **Feishu**: Interactive card messages not searchable (#74767) — undermines archival utility.
- **Codex**: Turn completions fail silently after upgrades (#88312) — regression impacting reliability.

> 💬 **Sentiment**: High frustration over **silent failures**, **unreliable updates**, and **lack of observability**. Users report losing context, jobs failing mid-turn, and being unable to debug.

---

### **8. Backlog Watch**  
**Critical Issues Waiting for Maintainer Attention**:

| Issue | Status | Why It Matters | GitHub Link |
|------|--------|----------------|------------|
| [#125570](https://github.com/openclaw/openclaw/issues/125570) | P1, clawsweeper:needs-maintainer-review | Skill description overwritten → routing breaks silently | [Link](https://github.com/openclaw/openclaw/issues/125570) |
| [#144809](https://github.com/openclaw/openclaw/issues/144809) | P1, clawsweeper:needs-info | Long turns lose entire reply — causes data loss | [Link](https://github.com/openclaw/openclaw/issues/144809) |
| [#145152](https://github.com/openclaw/openclaw/issues/145152) | P1, clawsweeper:source-repro | Stuck-session recovery reports abort but names no run ID | [Link](https://github.com/openclaw/openclaw/issues/145152) |
| [#148135](https://github.com/openclaw/openclaw/pull/148135) | P2, needs proof | Thread runtime identity missing in recall assembly → potential context loss | [Link](https://github.com/openclaw/openclaw/pull/148135) |
| [#115670](https://github.com/openclaw/openclaw/pull/115670) | P2, ⏳ waiting on author | Adopt existing workspace in `claws add` — essential for migration | [Link](https://github.com/openclaw/openclaw/pull/115670) |

> ⚠️ **Warning**: These items represent **latent risks**—if not addressed soon, they could block future releases or cause widespread user instability.

---

### ✅ **Final Assessment**  
**Project Health**: **Moderate to High Risk**  
While OpenClaw continues to grow rapidly with strong community input, **critical stability and security gaps are emerging**. The project is at a **tipping point**—urgent triage of P0/P1 issues is required before the next release. Without coordinated maintainer intervention, the current trajectory risks **user attrition, trust erosion, and release delays**.

**Recommendation**: Prioritize fixing #25592, #97616, and #144911 immediately. Establish a **weekly release stabilization sprint** to close the backlog of "needs-maintainer-review" issues.

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Ecosystem – 2026-09-15**

---

### **1. Ecosystem Overview**  
The open-source personal AI assistant and agent ecosystem in Q3 2026 is marked by **rapid innovation, divergent maturity stages, and growing focus on production-grade reliability**. Projects are transitioning from experimental prototyping toward real-world deployment, with strong community engagement across multiple platforms (Discord, Slack, Telegram). While some projects like OpenClaw face critical stability challenges, others such as Hermes Agent and ZeroClaw demonstrate structured release cycles and security-first design. The landscape reflects a maturing field where **observability, session integrity, and cross-platform consistency** have become non-negotiable requirements for adoption.

---

### **2. Activity Comparison**

| Project       | Issues (Last 24h) | PRs (Last 24h) | Release Status         | Health Score (1–10) |
|---------------|-------------------|------------------|------------------------|----------------------|
| **OpenClaw**   | 500               | 500              | ❌ No new release       | 4.5                  |
| **Hermes Agent** | 50                | 50               | ✅ v0.21.3 (patch)      | 7.8                  |
| **IronClaw**   | 1                 | 1                | ❌ No new release       | 6.0                  |
| **QwenPaw**    | 45                | 50               | ❌ No new release       | 5.2                  |
| **ZeroClaw**   | 22                | 50               | ❌ No new release       | 7.5                  |

> *Health Score: Based on stability, release cadence, bug severity, community engagement, and backlog triage.*

---

### **3. OpenClaw's Position**  
OpenClaw stands out as the **most active project in terms of contributor volume**, but also the most at risk due to unaddressed systemic flaws. Its **high issue/PR throughput** signals aggressive development velocity—likely driven by a large, vocal community—but this comes at the cost of technical debt accumulation. Unlike peers that prioritize incremental stability (e.g., Hermes Agent’s patch release), OpenClaw operates in a **"feature-at-all-costs" mode**, with critical bugs like session state leaks (#25592) and process zombies (#97616) remaining unresolved. Compared to Hermes Agent (enterprise-ready) or ZeroClaw (security-hardened), OpenClaw’s architecture appears less disciplined around async lifecycle management and data isolation—making it better suited for early adopters and researchers than production systems.

---

### **4. Shared Technical Focus Areas**  

| Focus Area                          | Projects Involved                   | Key Requirements & Signals |
|-------------------------------------|-------------------------------------|----------------------------|
| **Session State Integrity**         | OpenClaw, Hermes Agent, QwenPaw     | Persistent state recovery, anti-loss mechanisms, crash resilience |
| **Memory & Resource Management**    | QwenPaw, OpenClaw, ZeroClaw         | OOM prevention, unbounded buffer control, lifecycle cleanup |
| **Multimodal Safety & Validation**  | ZeroClaw, Hermes Agent, QwenPaw     | Pre-validation of image/audio inputs; model capability checks |
| **Error Visibility & Diagnostics**  | All five projects                   | Transparent logging, failure categorization, actionable error messages |
| **Cross-Channel Consistency**       | OpenClaw, ZeroClaw, Hermes Agent    | Unified HTTP routing, consistent message handling, header compliance |

> 📌 *Emerging consensus*: **Failure attribution**—distinguishing between model, prompt, orchestration, and platform issues—is becoming a foundational need (e.g., IronClaw’s #8100).

---

### **5. Differentiation Analysis**

| Dimension             | OpenClaw                          | Hermes Agent                      | IronClaw                         | QwenPaw                          | ZeroClaw                           |
|-----------------------|-----------------------------------|-----------------------------------|----------------------------------|----------------------------------|------------------------------------|
| **Feature Focus**     | Rapid UI/UX iteration             | Voice, multi-profile, billing     | Diagnostic rigor, benchmarking   | Plugin integration, UX polish    | Security hardening, channel extensibility |
| **Target Users**      | Early adopters, researchers       | Enterprises, developers           | Benchmark evaluators             | Dev teams, power users           | Privacy-conscious, self-hosters    |
| **Architecture**      | High-level orchestration          | Modular, ABC-based extensibility  | Minimalist, safety-first         | Flexible agent composition       | Proxy-driven, secure runtime       |
| **Stability Model**   | High risk, high activity          | Patch-stabilized, predictable     | Stable, low-activity             | Experimental, memory-heavy       | Active stabilization (v0.8.5)      |

> 🔍 *Key Insight*: ZeroClaw and Hermes Agent are building **secure, auditable platforms**; OpenClaw and QwenPaw prioritize **flexibility and speed**; IronClaw focuses on **evaluation fidelity**.

---

### **6. Community Momentum & Maturity**  

- **High-Momentum Iterators (Rapid Development)**:  
  - **OpenClaw**: Highest activity (500 issues/PRs/day), but chaotic. Requires urgent triage.
  - **QwenPaw**: Strong contributions, but stability concerns threaten usability.
  - **ZeroClaw**: Agile, focused on security and governance refinement.

- **Stabilizing & Mature Platforms**:  
  - **Hermes Agent**: Delivered a stable patch release (v0.21.3), balanced feature + stability focus.
  - **IronClaw**: Low activity but strategic depth—focused on diagnostics and quality measurement.

> 💡 *Trend*: Projects with **structured release cycles and backlog triage** (Hermes, ZeroClaw) are gaining trust faster than those with unchecked velocity (OpenClaw, QwenPaw).

---

### **7. Trend Signals**  
Based on community feedback and PR activity, key industry trends emerging:

1. **Observability as a Core Feature**  
   > Demand for failure taxonomy (IronClaw #8100), real-time task status (OpenClaw #52640), and debug visibility (QwenPaw #7715) indicates that **debuggability is now a competitive differentiator**.

2. **Security-by-Default Architecture**  
   > ZeroClaw’s focus on proxy routing, pairing codes, and input validation reflects a shift toward **hardened defaults**—a must for enterprise and self-hosted deployments.

3. **Enterprise-Grade Controls**  
   > Per-session budgeting (Hermes #91713), role-based skill access (QwenPaw #7746), and approval prompts (ZeroClaw #10358) signal growing demand for **compliance, auditability, and operational control**.

4. **User-Centric UX Refinements**  
   > Requests for spellcheck (#48375), right-side chat panels (#7739), and streaming toggles (#74077) show that **polish matters more than ever**—especially for non-technical users.

5. **Cross-Platform Resilience**  
   > Windows update failures (#146860), macOS SMB hangs (#75767), and Linux profile conflicts highlight the need for **platform-agnostic testing and deployment pipelines**.

---

### ✅ **Final Recommendation for Developers & Decision-Makers**  
- **For production use**: Prioritize **Hermes Agent** (stable, secure, well-documented) or **ZeroClaw** (security-focused, governed).
- **For experimentation/research**: OpenClaw and QwenPaw offer rich APIs and fast iteration—but **avoid long-running tasks without monitoring**.
- **For evaluation/benchmarking**: **IronClaw** provides unmatched diagnostic depth.
- **Critical Path**: Invest in **failure telemetry, session persistence, and memory safety**—these are now table stakes for any serious AI agent platform.

> 📈 *The future belongs not to the fastest-moving project, but to the one that builds with observability, security, and user trust at its core.*

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-09-15**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active, with 50 new issues and 50 pull requests updated in the past 24 hours — a strong signal of sustained community engagement and rapid development momentum. The release of **v0.21.3 (v2026.9.14)** consolidates ~338 merged PRs into a stable tag for downstream users, indicating a focus on stability and production readiness. Critical session state corruption and WAL management bugs are under active investigation, while voice interface and multi-profile support features show growing traction. Overall, the project demonstrates robust health, with a balanced mix of stability fixes, feature innovation, and infrastructure hardening.

---

### **2. Releases**  
✅ **New Release: `v0.21.3` (v2026.9.14)**  
- **Type**: Patch release  
- **Purpose**: Stabilizes upstream changes from ~338 merged PRs since `v0.21.2`, targeting Docker images, Hermes Cloud, and hosted deployments.  
- **Key Fixes Included**:  
  - Remote-gateway sign-in reliability improvements  
  - Resolves persistent WAL hand-off issues after fleet restarts (see #109966)  
- **Migration Note**: No breaking changes reported; users should update to maintain compatibility with latest security and stability patches.  
🔗 [Release v0.21.3 on GitHub](https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.3)

---

### **3. Project Progress**  
**Merged/Closed PRs (Today):** 15  
Notable advancements include:  
- ✅ **PR #111337**: Fixed `llama-server` startup by replacing deprecated `-dio` flag with `--load-mode dio` — critical for local LLM runtime compatibility.  
- ✅ **PR #111336**: Slack adapter now respects 4,000-character edit limit, preventing silent failures during message updates.  
- ✅ **PR #111332**: Preserves actual provider-reported costs across auxiliary and Codex usage paths — improves billing transparency.  
- ✅ **PR #111331**: Corrected shell tool-name mismatch (`shell` → `terminal`) to prevent infinite retry loops.  
- ✅ **PR #111329**: Auto-formats JS code via CI workflow — reduces manual cleanup burden.  
- ✅ **PR #111245**: Prevents Matrix reply fallback pills from being stripped prematurely — preserves context integrity.  

These fixes collectively enhance reliability, security, and developer experience across CLI, desktop, and integration layers.

---

### **4. Community Hot Topics**  
Top 5 most commented Issues/PRs reveal key user concerns and architectural debates:

1. **[RFC] RealtimeVoiceProvider ABC (#77111)** – *25 comments*  
   - **Need**: Unification of four competing duplex voice implementations into a single ABC contract.  
   - **Implication**: High demand for standardized real-time voice sessions (TUI + Desktop), signaling roadmap shift toward multimodal agent interaction.  
   🔗 [Issue #77111](https://github.com/NousResearch/hermes-agent/issues/77111)

2. **state.db corruption x4 in 5 weeks (#100896)** – *13 comments*  
   - **Criticality**: Recurring SQLite WAL corruption in multi-writer environments (gateway + dashboard).  
   - **Root Cause**: Race conditions during concurrent writes; upstream guards are "fail-open" — requires deep session-state redesign.  
   🔗 [Issue #100896](https://github.com/NousResearch/hermes-agent/issues/100896)

3. **Streaming hangs after upstream main update (#110769)** – *8 comments*  
   - **Impact**: Users report streaming stalls post-update despite prior fix claims. Indicates regression risk in core pipeline.  
   - **Action**: Reopened; needs immediate triage.  
   🔗 [Issue #110769](https://github.com/NousResearch/hermes-agent/issues/110769)

4. **skills_guard false-positive blocks community skill install (#37036)** – *6 comments*  
   - **User Pain**: Legitimate documentation blocked due to regex over-matching in `.md` files.  
   - **Fix PR**: #37040 already exists — awaiting merge.  
   🔗 [Issue #37036](https://github.com/NousResearch/hermes-agent/issues/37036)

5. **Add spellcheck to prompt input (#48375)** – *6 comments, 7 👍*  
   - **Demand Signal**: Clear UX improvement request from desktop users. Low-hanging fruit with high satisfaction potential.  
   🔗 [Issue #48375](https://github.com/NousResearch/hermes-agent/issues/48375)

---

### **5. Bugs & Stability**  
High-severity bugs reported today reflect ongoing challenges in state consistency and cross-platform compatibility:

| Severity | Issue | Description | Fix Status |
|---------|-------|-------------|------------|
| P1 | [#100896](https://github.com/NousResearch/hermes-agent/issues/100896) | `state.db` corruption in multi-writer WAL mode (x4 incidents in 5 weeks) | ❌ Open – urgent |
| P1 | [#110769](https://github.com/NousResearch/hermes-agent/issues/110769) | Streaming hangs after upstream main update (reopening closed issue) | ❌ Open – regression |
| P1 | [#110850](https://github.com/NousResearch/hermes-agent/issues/110850) | `hermes gateway migrate --multiplex` leaves no running gateway | ❌ Open – critical |
| P2 | [#111294](https://github.com/NousResearch/hermes-agent/issues/111294) | Desktop turn stuck on spinner after tool results (silent compression gap) | ❌ Open – UX blocker |
| P2 | [#109982](https://github.com/NousResearch/hermes-agent/issues/109982) | Wake word crashes entire gateway on Windows (access violation) | ❌ Open – platform-specific |

> ⚠️ **Note**: Multiple P1/P2 bugs involve session state, WAL, and multi-process safety — suggests systemic risk in database handling that may require deeper refactoring.

---

### **6. Feature Requests & Roadmap Signals**  
Emerging themes point to next-phase evolution:

- **Real-Time Voice Interface** (PR #101034, #95147): Strong momentum toward native voice sessions via TUI and Desktop — likely in v0.22+.  
- **Per-Session Token Budgeting** (#91713): Request for cost control after 18.7M-token incident — signals need for enterprise-grade monitoring.  
- **Configurable `deliver` targets** (#35060): Users want Home Assistant events routed to WhatsApp/Telegram — indicates expanding ecosystem integration.  
- **Bot Screen Streaming** (#108914): “Let me log in to the bot’s desktop” use case highlights demand for hybrid human-agent collaboration.  
- **Spellcheck in Prompt Input** (#48375): Simple but impactful UX upgrade — could be prioritized in v0.21.4.

> 📌 **Prediction**: v0.22 will likely focus on **voice capabilities**, **session resilience**, and **multi-platform integration**.

---

### **7. User Feedback Summary**  
Real-world pain points emerge clearly from open issues:

- **Trust in Stability**: Users report repeated `state.db` corruption and silent crashes — eroding confidence in long-running gateways.  
- **Developer Experience**: False positives in `skills_guard` and missing spellcheck frustrate both contributors and end-users.  
- **Cross-Platform Friction**: Windows crashes (wake word), macOS test failures, and Linux profile conflicts indicate inconsistent deployment support.  
- **Transparency Gaps**: Missing cost tracking in auxiliary paths (#111332) and unexplained streaming hangs reduce trust in observability.  
- **Positive Signals**: High engagement in documentation (e.g., Indonesian translation #92192) and feature design (RFCs) shows strong community investment.

---

### **8. Backlog Watch**  
Critical long-standing issues needing maintainer attention:

- **[RFC] RealtimeVoiceProvider ABC (#77111)** – 25 comments, 2 👍, 2026-08-02 created  
  - **Status**: Needs decision — multiple PRs in queue without clear direction.  
  - **Risk**: Delay risks fragmentation of voice implementation.  
  🔗 [Issue #77111](https://github.com/NousResearch/hermes-agent/issues/77111)

- **State.db corruption class (#100896, #90837, #100313)** – 4 incidents in 5 weeks  
  - **Pattern**: Multi-writer WAL corruption persists despite fixes.  
  - **Urgency**: Requires architectural review of session state lifecycle.  
  🔗 [Issue #100896](https://github.com/NousResearch/hermes-agent/issues/100896)

- **Stale duplicates batch-close (#111084)** – 18 open dups pointing to completed canonicals  
  - **Risk**: Noise in backlog undermines triage efficiency.  
  - **Action Needed**: Batch close or label as `wontfix` to clean up.  
  🔗 [Issue #111084](https://github.com/NousResearch/hermes-agent/issues/111084)

- **False positive path traversal in README.md (#111294)** – 2 comments, 2 👍  
  - **Security vs. Usability Conflict**: Overly aggressive scanner blocks legitimate docs.  
  - **Action**: Merge #111294 (already proposed fix).  
  🔗 [Issue #111294](https://github.com/NousResearch/hermes-agent/issues/111294)

---

**Summary**: Hermes Agent is in a phase of intense stabilization and feature expansion. While the project shows strong technical momentum and community engagement, underlying database and session-state fragility remain significant risks. Immediate focus should be on resolving P1 corruption bugs, unifying voice interfaces, and reducing false positives in security checks. With v0.21.3 released, the next 3–6 months will likely define the agent’s maturity in production environments.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026-09-15**

---

### **1. Today's Overview**  
The IronClaw project remains in a stable but low-activity phase as of 2026-09-15, with no new releases and minimal recent contributions. Only one issue and one pull request were updated in the past 24 hours, indicating subdued development momentum. The primary activity centers on diagnostics refinement rather than feature expansion, suggesting a focus on stability and observability. The ecosystem continues to prioritize robustness in AI agent execution, particularly around error classification and response leakage prevention.

---

### **2. Releases**  
*No new releases detected.*  
There are no version updates or changelogs published in the last 7 days. The latest release remains unchanged from prior weeks, with no breaking changes or migration notes to report.

---

### **3. Project Progress**  
*No pull requests were merged today.*  
However, **PR #8077** ([fix(mcp): classify response leak diagnostics](https://github.com/nearai/ironclaw/pull/8077)) is actively under review and represents a key progress item:  
- Addresses critical safety concerns in the MCP (Model Control Plane) egress layer by refining how response leaks are diagnosed.  
- Centralizes the `response_leak_blocked` sentinel in `ironclaw_host_api::http`, improving maintainability and consistency.  
- Ensures that while host-level leak blocking remains secure, the MCP receives clear, distinct diagnostic signals—enhancing debuggability without compromising security.

This PR is expected to improve system reliability and transparency during failure analysis.

---

### **4. Community Hot Topics**  
**Issue #8100**: [Daily ironclaw failure taxonomy — 2026-09-14](https://github.com/nearai/ironclaw/issues/8100)  
- **Status**: Open, recently created (2026-09-14), no comments yet.  
- **Context**: Focuses on analyzing failures in the *officeqa* benchmark suite, where 43 tasks failed.  
- **Key Insight**: The failures are predominantly due to genuine model-quality issues (e.g., DeepSeek-V4-Flash navigation errors), not infrastructure or pipeline flaws.  
- **Underlying Need**: There is growing demand for granular, actionable failure categorization to distinguish between model limitations, prompt design flaws, and systemic bugs. This issue signals a strategic shift toward data-driven diagnostics and quality attribution.

This issue is likely to become a focal point for future roadmap planning and could drive enhancements in failure telemetry and reporting.

---

### **5. Bugs & Stability**  
*No crash reports or regressions reported today.*  
However, **Issue #8100** highlights a recurring stability concern: high failure rates in production-like benchmarks due to model behavior rather than framework defects. While not a bug per se, it underscores the need for better failure classification mechanisms—especially to prevent misattribution of errors to the agent platform when they originate from underlying models.  
- **Fix Status**: No dedicated fix PRs exist yet, but **PR #8077** contributes indirectly by improving diagnostic clarity for similar edge cases.

---

### **6. Feature Requests & Roadmap Signals**  
While no formal feature requests are open today, **Issue #8100** serves as a strong signal for upcoming priorities:  
- **Predicted Inclusion in Next Version**: Enhanced failure taxonomy engine with automated categorization (model quality vs. orchestration vs. prompt).  
- **Expected Features**:  
  - Automated tagging of failures based on root cause (via ML or rule-based inference).  
  - Dashboard integration for real-time failure trend analysis across benchmarks.  
  - Exportable failure logs for compliance and audit purposes.  
These features align with IronClaw’s long-term goal of becoming a transparent, auditable agent execution platform.

---

### **7. User Feedback Summary**  
User feedback, though limited in volume, reflects deep engagement with real-world performance testing:  
- Users are observing significant model-level failures (e.g., DeepSeek-V4-Flash struggling with office automation tasks), which suggests high fidelity in benchmarking but also reveals model-specific brittleness.  
- Satisfaction appears moderate: users appreciate the detailed run data (e.g., [officeqa run link](https://nearai.github.io/benchmarks/#/runs/ironclaw/officeqa/0d6098bf-de9c-4d1a-8d92-c5e6f6fd80a5)), but desire clearer insights into *why* models fail.  
- Dissatisfaction stems from ambiguity in failure attribution—users want to know if a failure is due to the agent logic, the model, or the prompt—not just a "non-pass" status.

---

### **8. Backlog Watch**  
**Issue #8100** — [Daily ironclaw failure taxonomy — 2026-09-14](https://github.com/nearai/ironclaw/issues/8100)  
- **Age**: 1 day old (created 2026-09-14)  
- **Criticality**: High — this issue identifies a core gap in observability and debugging capability.  
- **Action Required**: Needs immediate triage and assignment. It has the potential to shape future diagnostic tooling and may influence benchmarking standards.  
- **Risk of Neglect**: If unaddressed, the lack of structured failure taxonomy could hinder reproducibility, model evaluation, and trust in the platform.

> 🔗 *Recommendation*: Assign a maintainer to initiate a failure classification schema proposal within 72 hours.

---  
*Data Source: GitHub (nearai/ironclaw), 2026-09-15 | Last Updated: 2026-09-15*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-09-15**

---

### **1. Today's Overview**  
The QwenPaw project remains highly active with a robust influx of community contributions: **45 new issues** and **50 pull requests** updated in the past 24 hours, indicating strong momentum in both bug reporting and feature development. Despite no new releases, the ecosystem is undergoing significant refinement—particularly around stability, memory management, and UI/UX improvements. The high volume of open issues suggests ongoing challenges with core reliability (e.g., memory exhaustion, session loss), while the surge in PRs reflects targeted efforts to resolve them. Overall, QwenPaw shows signs of a mature but still evolving agent platform under active development.

---

### **2. Releases**  
*No new releases were published today.*  
The latest stable version remains **v2.2.1**, with a beta release (`v2.2.1-beta.2`) available for testing. No breaking changes or migration notes are currently documented. Users should expect updates to be rolled out incrementally via patch fixes and feature enhancements rather than major version bumps.

---

### **3. Project Progress**  
**Merged/Closed PRs (Today):** None reported in the last 24h.  
**Key Merged Features/Fixes (from recent history):**
- ✅ **PR #7732** – Fixed ACP permission matching logic to prevent fallback to interactive prompts when `trusted: true` is set.
- ✅ **PR #7729** – Resolved MCP server discovery failure due to non-standard `jsonRpcError` envelope from Java/Kotlin SDKs.
- ✅ **PR #7761** – Enabled brace expansion (`{csv,xlsx}`) in glob file searches using `wcmatch`.
- ✅ **PR #7763** – Improved plugin catalog resilience by handling connection reset and incomplete read errors.

These fixes address critical integration points with external tools and enhance usability in complex workflows.

---

### **4. Community Hot Topics**  
Top 5 most commented issues reflect deep user frustration with **system stability** and **UI/UX design**:

| Issue | Comments | Link | Summary |
|------|----------|------|--------|
| [#7709](https://github.com/agentscope-ai/QwenPaw/issues/7709) | 6 | [Issue #7709](https://github.com/agentscope-ai/QwenPaw/issues/7709) | Timed tasks frequently produce no output; results are hidden in `thinking` or lost entirely. |
| [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | 6 | [Issue #7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | `spawn subAgent` consistently fails with timeouts—even with extended timeouts. |
| [#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571) | 6 | [Issue #7571](https://github.com/agentscope-ai/QwenPaw/issues/7571) | Persistent memory loss: users forget configuration paths and accidentally overwrite code across environments. |
| [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | 4 | [Issue #7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | Memory exhaustion caused by three compounding issues: unbounded buffers, keep-alive stacking, and loop evasion. |
| [#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715) | 4 | [Issue #7715](https://github.com/agentscope-ai/QwenPaw/issues/7715) | Daily Paper plugin fails silently when arXiv is unreachable—no error visibility. |

> 🔍 **Underlying Needs:** Users demand **predictable execution**, **resilient state persistence**, and **transparent error logging**. The recurring theme is *loss of control*—users lose sessions, configurations, and outputs without clear feedback.

---

### **5. Bugs & Stability**  
Critical bugs reported today highlight systemic instability:

| Severity | Issue | Link | Description |
|---------|-------|------|------------|
| ⚠️ High | [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | [Issue #7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | Memory grows uncontrollably (~1MB/s), leading to OOM crashes after ~2 days of runtime. Multiple root causes identified. |
| ⚠️ High | [#7709](https://github.com/agentscope-ai/QwenPaw/issues/7709) | [Issue #7709](https://github.com/agentscope-ai/QwenPaw/issues/7709) | Output suppression during task execution — results vanish into `thinking`, breaking workflow transparency. |
| ⚠️ High | [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) | [Issue #7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) | Session data disappears after restart/shutdown; users cannot recover previous conversations. |
| ⚠️ Medium | [#7708](https://github.com/agentscope-ai/QwenPaw/issues/7708) | [Issue #7708](https://github.com/agentscope-ai/QwenPaw/issues/7708) | Model selection resets unexpectedly during use — requires reconfiguration. |
| ⚠️ Medium | [#7772](https://github.com/agentscope-ai/QwenPaw/issues/7772) | [Issue #7772](https://github.com/agentscope-ai/QwenPaw/issues/7772) | Unable to connect to models behind `newapi` proxy despite correct config. |

> ✅ **Fix Status:**  
> - PR #7729 addresses a related MCP error envelope issue (partially mitigating #7728).  
> - No PRs yet target memory growth (#7722) or session loss (#7724), indicating these remain unresolved.

---

### **6. Feature Requests & Roadmap Signals**  
User-driven feature requests reveal strategic direction:

| Request | Link | Notes |
|--------|------|------|
| [#7739](https://github.com/agentscope-ai/QwenPaw/issues/7739) | [Issue #7739](https://github.com/agentscope-ai/QwenPaw/issues/7739) | Move chat history panel to the right — directly addresses UX pain on small screens. |
| [#7746](https://github.com/agentscope-ai/QwenPaw/issues/7746) | [Issue #7746](https://github.com/agentscope-ai/QwenPaw/issues/7746) | Skill access restricted to specific channels (e.g., Discord, Feishu). Suggests growing need for channel-specific permissions. |
| [#7745](https://github.com/agentscope-ai/QwenPaw/issues/7745) | [Issue #7745](https://github.com/agentscope-ai/QwenPaw/issues/7745) | Agent switching deletes last session — indicates need for persistent session tracking. |
| [#7750](https://github.com/agentscope-ai/QwenPaw/pull/7750) | [PR #7750](https://github.com/agentscope-ai/QwenPaw/pull/7750) | Show `send_file_to_user` files in response artifact list — already in review, likely to ship soon. |

> 📌 **Predicted Next Version Features:**  
> - Right-side chat drawer (based on PR #7704 and Issue #7739)  
> - Enhanced skill/channel binding controls  
> - Persistent session state across agent switches  
> - More granular error visibility in plugins (e.g., Daily Paper)

---

### **7. User Feedback Summary**  
Real-world usage reveals key pain points:

- **Loss of trust in system reliability**: Users report losing models, sessions, and outputs without warning — undermining confidence in long-running tasks.
- **Configuration drift**: Even experienced developers struggle to maintain consistent project paths (e.g., A → B → C), leading to accidental overwrites.
- **Poor debugging visibility**: Silent failures (e.g., Daily Paper, model connections) leave users guessing; lack of logs or error messages increases cognitive load.
- **UX friction on small devices**: Left-aligned UI forces scrolling on 14" laptops, reducing productivity.
- **Tooling confusion**: Users don’t know where to configure workspace paths or which folder defines a project session.

> 💬 *“I thought I was being smart by letting the agent manage my code path… turns out it just went rogue.”* — User comment on #7571

---

### **8. Backlog Watch**  
High-priority, long-standing issues requiring maintainer attention:

| Issue | Link | Status | Why It Matters |
|------|------|--------|----------------|
| [#7222](https://github.com/agentscope-ai/QwenPaw/issues/7222) | [Issue #7222](https://github.com/agentscope-ai/QwenPaw/issues/7222) | Open since 2026-08-23 | Memory growth to 20GB+ over 2 days — a showstopper for production use. |
| [#3995](https://github.com/agentscope-ai/QwenPaw/issues/3995) | [Issue #3995](https://github.com/agentscope-ai/QwenPaw/issues/3995) | Closed (but unresolved) | Lack of memory lifecycle management (archiving, cleanup) leads to bloated storage. |
| [#7666](https://github.com/agentscope-ai/QwenPaw/issues/7666) | [Issue #7666](https://github.com/agentscope-ai/QwenPaw/issues/7666) | Closed | Local model download fails from Hugging Face — blocks offline/local deployment. |
| [#7749](https://github.com/agentscope-ai/QwenPaw/issues/7749) | [Issue #7749](https://github.com/agentscope-ai/QwenPaw/issues/7749) | Open | Model fault tolerance settings missing from UI — users can't configure failover. |

> 🛠️ **Action Required:** Prioritize fixing memory leaks (#7222, #7722) and restoring model fault tolerance configuration. These are foundational to enterprise-grade agent systems.

---

**Final Assessment:**  
QwenPaw is at a critical juncture — vibrant community engagement masks underlying technical debt in memory, state, and error handling. While UX refinements and tool integrations progress well, **stability and reliability must become top priorities** to transition from experimental to production-ready status. Immediate focus on memory exhaustion and session persistence will determine long-term adoption.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest – 2026-09-15**

---

### **1. Today's Overview**  
ZeroClaw remains in a high-velocity development phase, with **50 pull requests and 22 issues updated in the last 24 hours**, indicating strong contributor engagement and active iteration. The project is focused on **security hardening, stability fixes, and refining core agent lifecycle and channel behavior**, particularly around authentication, token accounting, and multimodal handling. Despite no new releases, momentum is building toward a stabilization milestone (v0.8.5), with critical bugs in OpenCode session headers and Telegram message blocking addressed or under review. The community is actively shaping RFCs for process improvements and feature expansion.

---

### **2. Releases**  
❌ **No new releases** reported as of 2026-09-15.  
The v0.8.5 finite stabilization line (tracked in [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459)) remains active, with intake frozen and weekly cuts progressing. No breaking changes or migration notes are pending at this time.

---

### **3. Project Progress**  
✅ **Merged/Closed PRs (today)**:  
- [#10748](https://github.com/zeroclaw-labs/zeroclaw/pull/10748): Fixed routing of all outbound HTTP clients through runtime proxy — improves security consistency across channels.  
- [#10747](https://github.com/zeroclaw-labs/zeroclaw/pull/10747): Refactored transcription manager logic across 8 native channels — resolves drift-induced bugs and standardizes behavior.  
- [#10745](https://github.com/zeroclaw-labs/zeroclaw/pull/10745): Made Docker sandbox image configurable — enhances deployment flexibility and transparency.  
- [#10589](https://github.com/zeroclaw-labs/zeroclaw/pull/10589): Defaulted `multimodal.max_image_size_mb` to 20 MiB — aligns with API limits and user expectations.  
- [#10307](https://github.com/zeroclaw-labs/zeroclaw/pull/10307): Unified pairing code policy with stronger default (configurable length) — addresses long-standing security concerns.

These reflect ongoing efforts to **consolidate configuration, improve security posture, and eliminate inconsistencies** across components.

---

### **4. Community Hot Topics**  
🔥 **Most Active Issues & PRs (by comments/reactions)**:

| Issue/PR | Link | Activity | Key Insight |
|--------|------|--------|-----------|
| [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) | RFC: Simplify RFC voting | 10 comments, 0 👍 | Advocates removing fixed discussion windows to accelerate decision-making — signals demand for agile governance. |
| [#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603) | Bug: OpenCode missing `x-opencode-session` header | 3 comments, 3 👍 | High-severity workflow blocker; affects Go models and risks account flags — urgent fix underway via PR [#10864](https://github.com/zeroclaw-labs/zeroclaw/pull/10864). |
| [#10858](https://github.com/zeroclaw-labs/zeroclaw/issues/10858) | Bug: `DateTimeSection` invalidates cached session prefixes | 1 comment | Critical performance issue: forces full prompt re-evaluation daily — impacts scalability. |
| [#10857](https://github.com/zeroclaw-labs/zeroclaw/issues/10857) | Bug: ZeroCode sends images to text-only models | 1 comment | Security risk: model misconfiguration leads to provider 400 errors — requires immediate validation layer. |
| [#10864](https://github.com/zeroclaw-labs/zeroclaw/pull/10864) | Fix: Close OpenCode session header follow-ups | 0 comments | Direct follow-up to #10603 — shows attention to edge cases in header handling. |

> **Analysis**: The community is prioritizing **security, reliability, and efficiency** — especially around session integrity, multimodal safety, and cross-channel consistency. RFC process refinement reflects growing maturity in governance.

---

### **5. Bugs & Stability**  
🚨 **Critical Bugs Reported (S1 - Workflow Blocked)**:
- [#10863](https://github.com/zeroclaw-labs/zeroclaw/issues/10863): Telegram retries rejected voice updates indefinitely, blocking later messages — **fix PR in progress** ([#10863](https://github.com/zeroclaw-labs/zeroclaw/issues/10863)).
- [#10857](https://github.com/zeroclaw-labs/zeroclaw/issues/10857): ZeroCode sends image attachments to non-vision-capable models → provider 400 errors — **high-risk regression**.
- [#10858](https://github.com/zeroclaw-labs/zeroclaw/issues/10858): `DateTimeSection` invalidates cached prompt prefixes every midnight — causes performance degradation at scale.

🛠️ **High-Risk (S2/S3) Bugs**:
- [#10625](https://github.com/zeroclaw-labs/zeroclaw/issues/10625): Non-vision models deliver `[media attachment]` placeholder — degraded UX.
- [#10854](https://github.com/zeroclaw-labs/zeroclaw/issues/10854): Literal image markers promoted to malformed provider images — security flaw.
- [#10585](https://github.com/zeroclaw-labs/zeroclaw/issues/10585): Log sink race condition in migration tests — blocks CI pipeline.

> ✅ **Fixes in flight**: Multiple PRs address high-severity issues, including [#10864](https://github.com/zeroclaw-labs/zeroclaw/pull/10864) for OpenCode headers and [#10813](https://github.com/zeroclaw-labs/zeroclaw/pull/10813) for SOP headless turn corruption.

---

### **6. Feature Requests & Roadmap Signals**  
🚀 **Top User-Requested Features**:
- **Native XMPP / Prosody Channel** ([#9814](https://github.com/zeroclaw-labs/zeroclaw/issues/9814)): Enable lightweight, self-hosted chat integration — indicates interest in low-resource, privacy-focused deployments.
- **Stronger Pairing Codes** ([#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613)): Extend from 6-digit numeric to alphanumeric (e.g., 32 chars) — now accepted and being implemented via config.
- **AnySearch as Built-in Web Search Provider** ([#10336](https://github.com/zeroclaw-labs/zeroclaw/issues/10336)): Add alternative search backend — signals desire for vendor diversity and resilience.
- **Mattermost Approval Prompts** ([#10358](https://github.com/zeroclaw-labs/zeroclaw/pull/10358)): Adds workflow control to Mattermost — shows enterprise adoption trend.

> 📌 **Prediction**: These features — especially XMPP support, enhanced pairing, and AnySearch — are likely candidates for inclusion in **v0.8.6 or v0.9.0**, given their acceptance status and active implementation.

---

### **7. User Feedback Summary**  
🗣️ **Real User Pain Points & Use Cases**:
- **Security Concerns**: Users report frustration with insecure defaults (e.g., weak pairing codes, missing session headers) that could lead to account flags or data leaks.
- **Multimodal Safety**: Several users note that image uploads fail silently when sent to text-only models, breaking workflows — need for pre-validation.
- **UX Friction**: Delete key not working in ZeroCode TUI ([#10796](https://github.com/zeroclaw-labs/zeroclaw/issues/10796)) and lack of localized startup diagnostics ([#10789](https://github.com/zeroclaw-labs/zeroclaw/issues/10789)) indicate polish gaps in CLI tools.
- **Stability in Production**: Incidents like Telegram message blocking due to retry loops suggest real-world impact — users expect robustness in high-load scenarios.

> ✅ **Satisfaction Signal**: Positive sentiment around recent refactors (e.g., unified HTTP client routing, improved proxy handling) shows confidence in architectural direction.

---

### **8. Backlog Watch**  
🔍 **Long-Unanswered Important Items Needing Maintainer Attention**:
- [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549): *RFC: Simplify RFC voting* — accepted, in-progress, but no final decision yet. Could delay future governance if unresolved.
- [#9814](https://github.com/zeroclaw-labs/zeroclaw/issues/9814): *Native XMPP / Prosody channel* — accepted, p2 priority, but stalled since August 2026. High-value for home-lab users.
- [#10358](https://github.com/zeroclaw-labs/zeroclaw/pull/10358): *Add Mattermost approval prompts* — needs maintainer review despite being ready. Blocks enterprise adoption.
- [#10853](https://github.com/zeroclaw-labs/zeroclaw/issues/10853): *OpenCode session header follow-ups* — deferred from #10604, now open, needs closure.

> ⚠️ **Action Required**: Maintain a triage cadence for these high-impact, accepted items to avoid stagnation and maintain trust in the roadmap.

---  
**Digest generated on 2026-09-15 | Source: GitHub (zeroclaw-labs/zeroclaw)**

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*