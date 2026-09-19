# OpenClaw Ecosystem Digest 2026-09-19

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-09-19 00:35 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest – 2026-09-19**

---

### **1. Today's Overview**  
The OpenClaw project remains highly active, with **500 issues and 500 pull requests updated in the last 24 hours**, indicating intense development and community engagement. The volume of activity suggests a mature but under significant stress—particularly around stability, memory management, and session integrity. While no new releases were published, the number of high-severity bugs (P0/P1) reported today underscores ongoing challenges in production readiness. The influx of PRs focused on core infrastructure (gateway, memory, file handling) reflects a concerted effort to stabilize the platform ahead of potential future releases.

---

### **2. Releases**  
❌ **No new releases** were published today.  
The most recent stable version remains **2026.9.3**, which has already been flagged for multiple critical failures:
- **Issue #150201**: Update failure on Windows due to SQLite check timeout.
- **Issue #152252**: Gateway hard-fails startup after config write with unrecognized key (`utilityModelSeparation`), blocking upgrades.
- **Issue #151467**: Self-upgrade deadlock during v6.33 → v9.4 transition, leading to rollback.

> 🔗 *See [2026.9.3 release notes](https://github.com/openclaw/openclaw/releases/tag/2026.9.3)*

---

### **3. Project Progress**  
✅ **248 PRs merged or closed** today — a strong signal of rapid progress in stabilizing core components. Key advancements include:

- **Memory & File System Optimization**:  
  - `PR #152232`: Refactored Memory file watching to be reusable across host and Gateway.  
  - `PR #152249`, `#152265`, `#152282`: Enabled workspace-hosted Skill lifecycle operations (install, run, read), improving scalability for distributed setups.  
  - `PR #152261`: Reduced command output processing allocations, easing memory pressure.

- **Gateway & Service Stability**:  
  - `PR #152120`: Repairs stale service definitions during updates (critical for systemd/WIN).  
  - `PR #152195`: Preserves LaunchAgent permissions on macOS rollbacks.  
  - `PR #152287`: Ensures background watcher results are delivered even when agents are busy.

- **UI & UX Improvements**:  
  - `PR #152299`: Fixes queued messages remaining blocked after conversation ends.  
  - `PR #152295`: Adds host and thread CPU metrics to compact status tile for observability.

> 🔗 *Browse merged PRs: [GitHub PRs (last 24h)](https://github.com/openclaw/openclaw/pulls?q=is%3Amerged+updated%3A2026-09-18..2026-09-19)*

---

### **4. Community Hot Topics**  
The most active discussions center on **systemic instability and user-facing regressions**, particularly affecting long-running deployments:

| Issue | Comments | Severity | Link |
|------|----------|----------|------|
| **#97616** – Zombie process leak from hooks/tools | 30 | 🦪 Silver Shellfish (P1) | [Link](https://github.com/openclaw/openclaw/issues/97616) |
| **#91588** – Gateway memory leak (350MB → 15.5GB) | 26 | 🦪 Silver Shellfish (P1) | [Link](https://github.com/openclaw/openclaw/issues/91588) |
| **#149361** – Umbrella: WebUI performance/stability | 22 | 🌊 Off-meta Tidepool (P2) | [Link](https://github.com/openclaw/openclaw/issues/149361) |
| **#149538** – Gateway ready but unresponsive; event loop starved | 19 | 🦐 Gold Shrimp (P0) | [Link](https://github.com/openclaw/openclaw/issues/149538) |

🔹 **Underlying Need**: Users demand **predictable, low-latency, memory-efficient operation** in production fleets. These issues collectively suggest that the gateway is struggling under load, especially with large agent fleets and persistent sessions.

---

### **5. Bugs & Stability**  
🚨 **Critical stability concerns dominate today’s issue list**, with **11 P0/P1 bugs** reported in the past 24 hours. Top threats to uptime:

| Bug ID | Summary | Impact | Fix PR? |
|-------|--------|--------|--------|
| **#149538** | Gateway reaches "ready" but never serves; `/health` times out | Crash-loop, OOM | ❌ No fix yet |
| **#143524** | Agent SQLite WAL grows to 2.8GB despite `wal_autocheckpoint=1000` | Startup block, disk exhaustion | ❌ No fix yet |
| **#152252** | Config write causes hard fail on older gateways | Upgrade blocker | ❌ No fix yet |
| **#151467** | Self-upgrade deadlocks, auto-reverts to old version | Rollback risk | ❌ No fix yet |
| **#148529** | Boot time jumps from ~2s to 12 minutes (632-agent fleet) | UX, deployment delay | ❌ Closed without resolution |
| **#134993** | CPU pegged by filesystem discovery after 2026.8.1 upgrade | Performance degradation | ❌ No fix yet |

> 🔥 **High Risk**: Multiple bugs indicate **event loop starvation**, **memory leaks**, and **unrecoverable state corruption**, all of which threaten long-term reliability.

---

### **6. Feature Requests & Roadmap Signals**  
Users are requesting features that address **control, safety, and flexibility** in complex environments:

| Request | Priority | Key Themes |
|--------|----------|-----------|
| **#9912** – Add `maxTurns` / `maxToolCalls` config | P2 | Prevent runaway agent loops |
| **#10687** – Dynamic model discovery (OpenRouter + others) | P1 | Adapt to fast-moving model catalogs |
| **#9637** – Disable emojis/Unicode in TUI for accessibility | P2 | Inclusive design, screenreader support |
| **#9986** – Trigger fallback on context length exceeded | P1 | Better error handling beyond API errors |
| **#151962** – Phantom user messages leaking internal runtime strings | P2 | Session integrity, privacy |

🔹 **Prediction**: Features like **dynamic model discovery (#10687)** and **context-length fallback (#9986)** are likely candidates for inclusion in **2026.9.5 or 2026.10.0**, given their high relevance to real-world usage and frequent mention.

---

### **7. User Feedback Summary**  
Real users report **frustrating, unrecoverable failures** in production systems:

- **Memory & Performance**: “Gateway crashes daily due to 15GB RSS growth” (#91588).
- **Session Integrity**: “Lost replies when second run displaces an in-flight turn” (#148707).
- **Upgrade Hell**: “Self-upgrade fails, reverts to old version — no recovery path” (#151467).
- **UX Friction**: “WebUI hangs when scrolling history” (#149727); “Messages stuck after conversation finishes” (#152299).
- **Security Concerns**: “Internal context leaked into Feishu messages” (#115978).

👉 **Overall sentiment**: High frustration with **stability, recoverability, and predictability**. Users are actively testing edge cases and reporting deep system flaws — a sign of serious adoption but also high risk.

---

### **8. Backlog Watch**  
These **high-impact, long-standing issues require maintainer attention**:

| Issue | Status | Why It Matters |
|------|--------|----------------|
| **#112423** – Large transcript cleanup blocks event loop | Open, P1 | Critical for session longevity |
| **#137332** – Mixed requester-settle batches retry forever | Open, P1 | Can cause infinite loops |
| **#139710** – Mid-turn plugin supersede kills planner fallback | Open, P1 | Breaks agent reliability |
| **#143334** – Lost subagent completion parks requester in settle-yield | Open, P0 | Blocks entire workflow |
| **#126821** – SQLite corruption recurs in pristine DBs | Open, P0 | Data loss risk, fatal for production |
| **#77886** – Add owner-approved flow for protected config changes | Open, P2 | Security gap in admin access |

> 🔔 **Urgent**: Several of these are **data-loss or crash-loop risks** with no assigned fix PRs. Maintainers must prioritize triage and assign ownership.

---

### ✅ **Conclusion**  
OpenClaw is in a **high-stress phase of scaling** — massive community engagement, but systemic instability threatening production use. While technical progress is strong (especially in memory, file system, and gateway resilience), **critical bugs remain unresolved** and **upgrade paths are fragile**. The project is at a crossroads: either it stabilizes rapidly and earns trust, or it risks losing credibility among early adopters.  

> 📌 **Recommendation**: Prioritize **P0 stability fixes** (#149538, #143524, #152252) and **release a patch version (2026.9.5)** with security and reliability improvements before major feature work continues.

---  
*Data source: GitHub (openclaw/openclaw) – 2026-09-19*  
*Generated by AI Analyst*

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Ecosystem – 2026-09-19**

---

### **1. Ecosystem Overview**  
The open-source personal AI assistant and agent ecosystem in September 2026 is characterized by rapid evolution, divergent technical paths, and growing maturity in production readiness. Projects are transitioning from experimental prototypes to real-world deployment platforms, with increasing focus on stability, security, and composability. While OpenClaw leads in community volume and infrastructure depth, QwenPaw and ZeroClaw are emerging as strong contenders with modular, secure architectures tailored for team use and enterprise workflows. The landscape reflects a clear bifurcation: **high-velocity innovation** (OpenClaw, QwenPaw) versus **security-first, composable design** (ZeroClaw, Hermes Agent), signaling a maturing market where reliability and trust are becoming primary differentiators.

---

### **2. Activity Comparison**

| Project | Issues (Last 24h) | PRs (Last 24h) | Release Status | Health Score (1–5) |
|--------|-------------------|----------------|----------------|--------------------|
| **OpenClaw** | 500 | 500 | ❌ None | ⭐⭐☆☆☆ (Critical instability) |
| **Hermes Agent** | 50 | 50 | ❌ None | ⭐⭐⭐☆☆ (Stable core, fragile upgrade) |
| **QwenPaw** | 24 | 50 | ✅ v2.2.2-beta.1 | ⭐⭐⭐⭐☆ (Rapid iteration, security focus) |
| **ZeroClaw** | 14 | 50 | ❌ None | ⭐⭐⭐⭐☆ (High-quality, strategic direction) |

> 🔍 *Health Score based on: Stability, security posture, release cadence, backlog triage, user sentiment.*

---

### **3. OpenClaw's Position**  
OpenClaw stands out as the most active project in terms of developer engagement—**500 issues and 500 PRs daily**—indicating massive community involvement and high development velocity. Its advantage lies in **deep infrastructure control**, particularly around memory management, file system handling, and gateway resilience, which positions it as a foundational platform for large-scale agent fleets. However, this comes at the cost of systemic instability: **11 P0/P1 bugs today**, including critical event loop starvation and self-upgrade deadlocks. Compared to peers, OpenClaw’s approach is **monolithic and infrastructure-heavy**, while others (e.g., ZeroClaw) emphasize modularity and provenance. Community size appears largest, but so does frustration—users report unrecoverable crashes and session corruption, suggesting **early adopter fatigue** despite technical ambition.

---

### **4. Shared Technical Focus Areas**  
Across all projects, several recurring technical needs are emerging:

| Need | Projects Involved | Specific Requirements |
|------|-------------------|------------------------|
| **Session Integrity & Persistence** | OpenClaw, QwenPaw, Hermes Agent | Prevent data loss during compaction, handle WAL corruption, preserve user turns across reloads |
| **Security Hardening** | QwenPaw, ZeroClaw, OpenClaw | Mitigate prompt injection (#7859), prevent tool result leakage, enforce identity provenance |
| **Event Loop & Concurrency Safety** | OpenClaw, QwenPaw, ZeroClaw | Avoid blocking I/O (e.g., #7840), isolate plugins, prevent starvation |
| **Upgrade & Rollback Reliability** | OpenClaw, Hermes Agent | Fix failed updates, avoid auto-reverts, ensure config compatibility |
| **Cross-Platform Consistency** | Hermes Agent, OpenClaw | Resolve Windows file locks, macOS permission issues, mobile input glitches |

> 📌 These signals reflect a shift from "does it work?" to "**does it stay working?**"—a hallmark of production-grade maturity.

---

### **5. Differentiation Analysis**

| Dimension | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|---------|----------|--------------|---------|----------|
| **Target User** | DevOps, power users, fleet operators | Individual agents, cross-platform users | Teams, creators, multi-user environments | Enterprises, auditable systems |
| **Architecture** | Monolithic, centralized gateway | Modular, profile-based | Plugin-driven, memory-centric | Runtime-segregated, WASM-ready |
| **Core Focus** | Infrastructure resilience, scalability | UX polish, deployment ease | Security, context integrity | Provenance, identity, extensibility |
| **Key Strength** | Massive community, deep infra control | High usability, Telegram integration | Strong security model, Hub roadmap | ADR-driven governance, auditability |
| **Differentiator** | Scale and scale-testing pressure | Cross-platform consistency | Team collaboration features | End-to-end traceability and zero-trust design |

> ✅ **Key Insight**: OpenClaw is building a **platform**, while ZeroClaw is building a **protocol layer**, QwenPaw a **team workspace**, and Hermes Agent a **user-facing assistant**.

---

### **6. Community Momentum & Maturity**

| Tier | Project(s) | Characteristics |
|------|------------|-----------------|
| **High Velocity / Rapid Iteration** | OpenClaw, QwenPaw | 50+ PRs/day; beta releases; feature-rich but unstable |
| **Stabilizing / Production-Ready Push** | Hermes Agent, ZeroClaw | Focused on bug fixes, security patches, upgrade reliability; low release frequency but high impact |
| **Early Stage / Niche Adoption** | — | Not applicable; all projects have active communities |

> 🔁 **Trend**: OpenClaw and QwenPaw are in **"scaling chaos" phase**—rapid growth with systemic risks. Hermes Agent and ZeroClaw are in **"stabilization phase"**, prioritizing reliability over new features—signaling readiness for production use.

---

### **7. Trend Signals**  
Based on community feedback and PR/issue patterns, key industry trends for AI agent developers include:

1. **From Feature-Centric to Reliability-Centric Development**  
   > Users no longer tolerate “cool” features if they break sessions or crash gateways. **Stability is now a product requirement**, not a nice-to-have.

2. **Demand for Team & Enterprise Capabilities**  
   > QwenPaw Hub, ZeroClaw delegation, and Hermes profile multiplexing signal rising demand for **multi-user, role-based, and audit-capable** agent systems.

3. **Security-by-Design Is Non-Negotiable**  
   > Prompt injection (#7859), identity leaks, and plugin sandboxing are top concerns. **Input sanitization and runtime isolation** are now baseline expectations.

4. **Modularity Over Monoliths**  
   > ZeroClaw’s WASM plans, QwenPaw’s plugin safety, and Hermes’ skill indexing show a clear move toward **pluggable, composable agent components**—not bundled binaries.

5. **Developer Experience (DX) as Competitive Edge**  
   > Issues like "WebUI hangs", "messages stuck", "input duplicates" reveal that **UX parity with consumer apps** is essential for adoption beyond early adopters.

> 💡 **Value for Developers**: Build with **provenance tracking**, **atomic config updates**, **event loop isolation**, and **end-to-end observability**—these are now the foundation of trustworthy AI agents.

---

### ✅ **Final Recommendation**  
For developers and organizations choosing an open-source agent stack:
- **Choose OpenClaw only if you have in-house infrastructure teams** to manage its instability.
- **Select QwenPaw** for team-based, creator-focused workflows with strong security.
- **Opt for ZeroClaw** when building auditable, composable, enterprise-grade systems.
- **Use Hermes Agent** for reliable, cross-platform personal assistants with polished UX.

> 🔚 **Bottom Line**: The ecosystem is no longer about raw capability—it’s about **trust, sustainability, and operational control**. The future belongs to platforms that prioritize **predictability over novelty**.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-09-19**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active with a robust 50 open issues and 50 open pull requests updated in the last 24 hours, indicating strong community engagement and ongoing development momentum. The ecosystem is focused on stability improvements, particularly around session state management, authentication leakage, and platform-specific regressions (especially Windows). While no new releases were issued, several critical fixes are being actively merged—most notably for Telegram message delivery, Windows update reliability, and session persistence. This reflects a mature project under heavy real-world testing, with a clear emphasis on production-grade resilience.

---

### **2. Releases**  
*No new releases were published in the last 24 hours.*  
There has been no release since v0.21.3 (2026.9.14), and the current state suggests that pending PRs may be preparing for a minor patch release to address high-severity bugs such as `stream: True` leaking DSML markup into Telegram (#115475) and gateway relaunch failures post-update on Windows (#115495).

> 🔗 [GitHub Release History](https://github.com/nousresearch/hermes-agent/releases)

---

### **3. Project Progress**  
**Merged/Closed PRs (Today):**  
- ✅ **PR #115507**: Fixes delisting of retired `x-preview-f-free` model from OpenCode Zen picker — closes #115496.  
- ✅ **PR #115498**: Addresses telemetry scope validation failure during concurrent task closure — resolves #115471.  
- ✅ **PR #115497**: Proposes bounded skill loading logic to prevent speculative workflow expansion — *pending decision*.  
- ✅ **PR #115412**: Fixes Desktop TTS speech not flushing at narration boundaries — improves voice feedback fidelity.  
- ✅ **PR #109202**: Disables AsyncDns in Electron to prevent SIGTRAP crashes on macOS and Linux — addresses long-standing instability.  

These updates reflect a focus on **user experience polish**, **platform stability**, and **security hardening**.

---

### **4. Community Hot Topics**  
Top 3 most discussed items highlight urgent user pain points:

1. **[Issue #115475] Bug: hardcoded `stream: True` leaks DSML tool-call markup into Telegram**  
   - **Comments:** 1 | **Severity:** High (breaks all Telegram interactions)  
   - **Impact:** Every response now shows raw DSML tags instead of executing tools.  
   - **Status:** Immediate fix PR #115495 underway.  
   > 🔗 [Issue #115475](https://github.com/nousresearch/hermes-agent/issues/115475) | [PR #115495](https://github.com/nousresearch/hermes-agent/pull/115495)

2. **[Issue #115311] `hermes update` exits 1 despite successful code update**  
   - **Comments:** 3 | **Severity:** Medium-High (blocks automated upgrades)  
   - **Root Cause:** Empty `fleet_restart_pending` obligation can never be discharged.  
   - **Note:** Fix PR #115495 includes self-healing relaunch logic.  
   > 🔗 [Issue #115311](https://github.com/nousresearch/hermes-agent/issues/115311)

3. **[Issue #115366] Skills index stale (49.5h old)**  
   - **Comments:** 1 | **Severity:** Medium (impacts developer discovery)  
   - **Cause:** Cron job failed; index outdated beyond 26h limit.  
   - **Action:** Automated watchdog triggered — requires pipeline review.  
   > 🔗 [Issue #115366](https://github.com/nousresearch/hermes-agent/issues/115366)

> 💡 **Underlying Need:** Users demand **reliable, zero-friction deployment and upgrade paths**, especially on Windows and mobile platforms.

---

### **5. Bugs & Stability**  
Critical bugs reported today include:

| Issue | Severity | Description | Fix Status |
|------|----------|-------------|------------|
| [#115475](https://github.com/nousresearch/hermes-agent/issues/115475) | ⚠️ **High** | Hardcoded `stream: True` breaks Telegram tool execution | ✅ PR #115495 in progress |
| [#115311](https://github.com/nousresearch/hermes-agent/issues/115311) | ⚠️ **Medium-High** | Update fails with false "Fleet restart incomplete" error | ✅ PR #115495 in progress |
| [#115462](https://github.com/nousresearch/hermes-agent/issues/115462) | ⚠️ **Medium** | Desktop prompt clip collapses instantly on mouse move | ❌ No PR yet |
| [#115342](https://github.com/nousresearch/hermes-agent/issues/115342) | ⚠️ **Medium** | `write_file` returns false `[Errno 2]` after cwd deletion | ❌ No PR yet |
| [#115499](https://github.com/nousresearch/hermes-agent/issues/115499) | ⚠️ **Medium** | `hindsight_reflect` ignores tag filters, scans entire memory bank | ✅ PR #115501 in progress |

> 🛠 **Stability Note:** Multiple issues point to **session state corruption**, **environment inheritance flaws**, and **resource cleanup timing** — core concerns in multi-profile and desktop environments.

---

### **6. Feature Requests & Roadmap Signals**  
Emerging signals suggest roadmap priorities:

- **Profile Multiplexing (Issue #109417)**: Being tracked as a major campaign. Goal: single gateway serving all profiles seamlessly.  
  > 🔗 [Issue #109417](https://github.com/nousresearch/hermes-agent/issues/109417)  
  → *Likely feature in next v0.22.0 release.*

- **Mobile Input UX (Issue #115505)**: Android IME duplicates words and reverts backspace.  
  > 🔗 [Issue #115505](https://github.com/nousresearch/hermes-agent/issues/115505)  
  → *Signal for improved mobile-first UI layer in upcoming dashboard updates.*

- **Plugin Enhancements**:  
  - New plugin `session-ref` (PR #115510): Live session suggestions via `@session`.  
  - `Hermes Talk` added to catalog (PR #108798): Voice interfaces across Discord/Dashboard.  
  > 🔗 [PR #115510](https://github.com/nousresearch/hermes-agent/pull/115510) | [PR #108798](https://github.com/nousresearch/hermes-agent/pull/108798)  
  → *Indicates growing interest in ambient, conversational interaction modes.*

---

### **7. User Feedback Summary**  
Real-world pain points dominate recent activity:

- **Windows users report frequent update failures** due to file locks (e.g., SogouCloud.exe blocking rename) — affects automation and CI pipelines.
- **Desktop users struggle with session recovery after WAL corruption** — multiple threads and GitHub issues indicate widespread frustration with "deleted-WAL" errors (#110054).
- **Telegram users are blocked entirely** by DSML markup leakage — a regression that renders the platform unusable.
- **Mobile users face input glitches** that degrade usability — particularly on Android.
- **Users want better feedback on rate limits** — free-tier users currently see only “HTTP 429” without actionable hints (#101445).

> 📊 **Sentiment Trend:** High satisfaction with core AI capabilities but declining trust in **system reliability**, **upgrade stability**, and **cross-platform consistency**.

---

### **8. Backlog Watch**  
Several high-impact, long-standing issues require maintainer attention:

- **[Issue #109417]** Profile multiplexing tracking issue — central to future scalability but stalled in planning phase.  
  > 🔗 [Issue #109417](https://github.com/nousresearch/hermes-agent/issues/109417)

- **[Issue #110054]** Pain cluster: no in-product recovery after deleted-WAL guard fires — 13 GitHub issues + 4 Discord threads in one week.  
  > 🔗 [Issue #110054](https://github.com/nousresearch/hermes-agent/issues/110054)

- **[Issue #99251]** Kanban review dispatch force-injects `sdlc-review` even when disabled — contradicts config, leads to silent or crashing behavior.  
  > 🔗 [Issue #99251](https://github.com/nousresearch/hermes-agent/issues/99251)

- **[Issue #115366]** Skills index degraded — automated freshness probe failed. Requires pipeline audit.  
  > 🔗 [Issue #115366](https://github.com/nousresearch/hermes-agent/issues/115366)

> ⚠️ **Priority Recommendation:** These should be triaged for sprint planning — they represent systemic risks to user retention and adoption.

---

**📌 Final Assessment:**  
Hermes Agent is in a **high-velocity development phase** with excellent community participation. The project is stable in core AI functions but faces **critical challenges in cross-platform reliability, upgrade mechanics, and session integrity**. With 50+ open issues and PRs daily, it's clear that the team is prioritizing **production readiness** over feature velocity. The next release must address the top 5 high-severity bugs to restore user confidence.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-09-19**

---

### **1. Today's Overview**  
QwenPaw shows strong momentum with a vibrant development pace: **50 pull requests** and **24 issues** updated in the past 24 hours, indicating active community engagement and rapid iteration. The release of **v2.2.2-beta.1** signals a focus on stabilizing new features ahead of broader adoption. Key improvements center around memory management, console streaming robustness, and security hardening—particularly around prompt injection and tool result pruning. While core functionality remains stable, several critical bugs related to context persistence, event loop isolation, and session corruption have emerged, suggesting growing complexity in long-running agent workflows.

---

### **2. Releases**  
✅ **New Release**: `v2.2.2-beta.1` (GitHub Release)[https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.2-beta.1]  
#### **What’s Changed**  
- **feat(console)**: Improved grouped chat history display — enhances UX for multi-turn conversations ([PR #7665](https://github.com/agentscope-ai/QwenPaw/pull/7665))  
- **feat(memory)**: Unified ReMe slash commands across agents — improves consistency in memory interaction ([PR #7444](https://github.com/agentscope-ai/QwenPaw/pull/7444))  
- **chore**: Version bumped to `2.2.2b1` — preparatory step for final release cycle  

> 🔧 **Migration Note**: This is a beta release intended for early adopters and testing. No breaking changes reported, but users should expect instability in edge cases involving tool results, streaming, or plugin behavior.

---

### **3. Project Progress**  
**Merged/Closed PRs (Today):** 17  
These PRs address critical stability, security, and UX issues:

| PR | Summary | Impact |
|----|--------|--------|
| [PR #7864](https://github.com/agentscope-ai/QwenPaw/pull/7864) | Adds integrity protection against prompt-injected skill deletion | High-security fix for #7859 |
| [PR #7854](https://github.com/agentscope-ai/QwenPaw/pull/7854) | Prevents concurrent policy write loss during driver reload | Fixes #7850 — critical race condition |
| [PR #7872](https://github.com/agentscope-ai/QwenPaw/pull/7872) | Preserves interrupted user requests across compaction | Addresses #7836 — prevents data loss in long tasks |
| [PR #7873](https://github.com/agentscope-ai/QwenPaw/pull/7873) | Explains why advanced recall is disabled without sandbox | Improves transparency for users |
| [PR #7871](https://github.com/agentscope-ai/QwenPaw/pull/7871) | Stops literal `<<<TRUNCATED>>>` from bypassing output truncation | Security + stability fix |
| [PR #7869](https://github.com/agentscope-ai/QwenPaw/pull/7869) | Adds OpenCode session header for proper API authentication | Enables functional use of OpenCode Go provider |
| [PR #7867](https://github.com/agentscope-ai/QwenPaw/pull/7867) | Revalidates file-area tab content on activation | Fixes #7866 — UI sync issue |

> 📌 **Key Trend**: Focus on **context integrity**, **streaming reliability**, and **plugin safety** — especially in high-load or long-running scenarios.

---

### **4. Community Hot Topics**  
Top 3 most active issues today reflect deep user concerns about **multi-user scalability**, **security**, and **long-term stability**:

1. **[Issue #7318] QwenPaw Hub: Multi-tenant edition roadmap**  
   - 🔥 **30 comments**, 4 upvotes — most discussed issue  
   - Users are eager for team-based deployment options.  
   - Signals demand for **enterprise-grade collaboration** beyond personal assistant use.  
   > Link: [GitHub #7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)

2. **[Issue #7859] Persistent prompt injection in system reminders**  
   - Critical security vulnerability: malicious instructions persistently appended to agent skills list  
   - Could lead to permanent deletion of all user skills  
   - Fix PR already merged ([#7864](https://github.com/agentscope-ai/QwenPaw/pull/7864)) — highlights urgency of input sanitization  
   > Link: [GitHub #7859](https://github.com/agentscope-ai/QwenPaw/issues/7859)

3. **[Issue #7840] Plugins freeze entire instance due to synchronous I/O**  
   - High-severity bug: one poorly written plugin can hang the whole agent runtime  
   - Reveals need for **event loop isolation** and **plugin sandboxing**  
   - Fix PR submitted ([#7842](https://github.com/agentscope-ai/QwenPaw/pull/7842))  
   > Link: [GitHub #7840](https://github.com/agentscope-ai/QwenPaw/issues/7840)

> 💡 **Underlying Need**: Users want **stable, secure, team-capable AI assistants** — not just powerful individual tools.

---

### **5. Bugs & Stability**  
Critical bugs reported today, ranked by severity:

| Severity | Issue | Description | Fix PR? |
|---------|-------|-------------|--------|
| 🔴 **Critical** | [Issue #7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) | `ToolResultPruner` skips media blocks (`type="data"`), causing base64 image payloads to accumulate endlessly → context overflow | ❌ No fix yet |
| 🔴 **Critical** | [Issue #7859](https://github.com/agentscope-ai/QwenPaw/issues/7859) | Persistent prompt injection leads to permanent skill deletion | ✅ Fixed in [#7864](https://github.com/agentscope-ai/QwenPaw/pull/7864) |
| 🔴 **Critical** | [Issue #7840](https://github.com/agentscope-ai/QwenPaw/issues/7840) | Synchronous plugin calls freeze entire event loop | ✅ Fixed in [#7842](https://github.com/agentscope-ai/QwenPaw/pull/7842) |
| 🟡 **High** | [Issue #7839](https://github.com/agentscope-ai/QwenPaw/issues/7839) | Session-sync skips orphaned files; retention purge fails with DB corruption | ❌ No fix yet |
| 🟡 **High** | [Issue #7850](https://github.com/agentscope-ai/QwenPaw/issues/7850) | Driver card policy lost update due to stale reload | ✅ Fixed in [#7854](https://github.com/agentscope-ai/QwenPaw/pull/7854) |
| 🟡 **Medium** | [Issue #7866](https://github.com/agentscope-ai/QwenPaw/issues/7866) | File-area tab shows old content after agent rewrites file | ✅ Fixed in [#7867](https://github.com/agentscope-ai/QwenPaw/pull/7867) |

> ⚠️ **Red Flag**: The `base64` accumulation bug (#7853) is particularly dangerous — it can crash any long-running session silently. Immediate attention required.

---

### **6. Feature Requests & Roadmap Signals**  
User-driven feature trends point toward **team collaboration**, **autonomous context management**, and **enhanced extensibility**:

- **QwenPaw Hub (Multi-tenant Edition)**: Requested repeatedly ([#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)), likely the next major milestone.  
- **Agent-Autonomous Context Management** ([#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733)): Users want agents to *decide* when to evict context, not be forced by token limits.  
- **Cron Jobs with Custom Models** ([#6316](https://github.com/agentscope-ai/QwenPaw/issues/6316)): A niche but important request — indicates users are building scheduled automation pipelines.  
- **Creator Video Control Plane** ([#7875](https://github.com/agentscope-ai/QwenPaw/issues/7875), [#7874](https://github.com/agentscope-ai/QwenPaw/issues/7874)): New feature area emerging — suggests expansion into **AI-powered creative workflows**.

> 🎯 **Prediction**: v2.3 will likely introduce **Hub multi-tenancy**, **agent-aware context eviction**, and **creator workflow integration**.

---

### **7. User Feedback Summary**  
Real-world pain points revealed through issues:

- **"I’ve been using QwenPaw for weeks, and suddenly my agent started deleting skills"** → Confirms #7859 is not isolated.  
- **"After a 30-minute task, my file edits were gone from the tab but visible in the history"** → Direct feedback on #7866.  
- **"The app freezes for 40 seconds when I install a plugin"** → Validates #7840 as a real usability blocker.  
- **"I can’t use OpenCode Go because of MissingSessionID"** → Points to missing auth headers ([#7869](https://github.com/agentscope-ai/QwenPaw/pull/7869)).  
- **"Why does my console show blank panels at startup?"** → Highlights poor startup synchronization ([#7841](https://github.com/agentscope-ai/QwenPaw/issues/7841)).

> ✅ **Satisfaction**: Users appreciate the power and flexibility of the platform.  
> ❌ **Dissatisfaction**: Frustration with instability, security risks, and lack of team support.

---

### **8. Backlog Watch**  
Long-standing, high-impact issues needing maintainer attention:

| Issue | Status | Why It Matters | Link |
|------|--------|----------------|------|
| [Issue #7318] QwenPaw Hub multi-tenant roadmap | Open (created 2026-08-26) | Core strategic direction — future of team use | [GitHub #7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) |
| [Issue #7733] Agent-autonomous context management | Open (created 2026-09-13) | Critical for long-running agents — lacks user agency | [GitHub #7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) |
| [Issue #7853] Base64 image accumulation bug | Open (created 2026-09-18) | High-risk regression — could break production sessions | [GitHub #7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) |
| [Issue #7836] Scroll eviction drops user turns | Open (created 2026-09-17) | Data loss risk in complex workflows | [GitHub #7836](https://github.com/agentscope-ai/QwenPaw/issues/7836) |

> ⏳ **Recommendation**: Prioritize #7853 and #7318 — they represent both immediate technical risk and long-term product vision.

---

**📊 Project Health Scorecard**:  
- **Development Velocity**: ⭐⭐⭐⭐⭐ (High activity)  
- **Stability**: ⭐⭐⭐☆☆ (Good fixes, but critical bugs remain)  
- **Security**: ⭐⭐⭐⭐☆ (Strong response to injection threats)  
- **Community Engagement**: ⭐⭐⭐⭐⭐ (Active, vocal, constructive)  
- **Roadmap Clarity**: ⭐⭐⭐⭐☆ (Clear direction via Hub and Creator features)

> ✅ **Overall**: QwenPaw is maturing rapidly from a personal assistant into a **collaborative, enterprise-ready AI agent platform** — but must stabilize core context and security systems before full-scale adoption.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest**  
**Date:** 2026-09-19  
**Source:** [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

### **1. Today's Overview**

The ZeroClaw project remains highly active, with **50 pull requests updated in the last 24 hours** and **14 new issues opened or updated**, indicating strong momentum in both development and community engagement. The activity is concentrated around core architectural improvements—particularly runtime modularity, security hardening, and plugin-based extensibility—with a focus on reducing binary bloat and enhancing operational control. Despite no new releases, multiple high-priority PRs are advancing toward merge, especially those related to runtime security boundaries, identity management, and provider flexibility. The ecosystem is clearly shifting toward a more modular, secure, and composable agent architecture.

---

### **2. Releases**

> ❌ **No new releases** were published in the last 24 hours.  
> 📦 **Latest release**: v0.8.5 (as of 2026-08-15) — no changelog available for recent updates.  
> 🔜 **Next expected version**: v0.8.6 (Phase 2 runtime work) and v0.9.0 (gateway separation), tracked via [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432).

---

### **3. Project Progress**

**Merged/Closed PRs (Today):**
- ✅ **PR #10772** – *Make `zeroclaw-eval` archive tests independent of workspace fixtures*  
  → Ensures test reproducibility and reduces dependency pollution in CI.
- ✅ **PR #10809** – *Restore macOS Control shortcut aliases*  
  → Fixes UX inconsistency introduced by prior platform-specific changes.
- ✅ **PR #10831** – *Record inbound authentication principal authority (ADR-017)*  
  → Formalizes trust model for incoming identities; part of broader security provenance tracking.
- ✅ **PR #10834** – *Record runtime security provenance boundaries (ADR-018)*  
  → Documents critical security boundaries from RFCs #6971, #6954, and #7142.

**Key Advancements:**
- **Runtime security enforcement** is being codified through ADRs and test parity checks (e.g., [#10910](https://github.com/zeroclaw-labs/zeroclaw/pull/10910)).
- **Plugin system maturity** continues with egress-grant ceremonies ([#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584)) and WASM plugin migration planning ([#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850)).
- **Configuration robustness** improved via atomic batch writes ([#10823](https://github.com/zeroclaw-labs/zeroclaw/pull/10823), [#10824](https://github.com/zeroclaw-labs/zeroclaw/pull/10824)).

---

### **4. Community Hot Topics**

| Issue/PR | Activity | Link | Analysis |
|--------|--------|------|---------|
| **[Issue #10929]**(https://github.com/zeroclaw-labs/zeroclaw/issues/10929) | 2 comments, RFC status | `[RFC] Delivery receipts for outbound messages` | High demand for message delivery confirmation—critical for enterprise-grade reliability and auditability. Signals need for end-to-end traceability. |
| **[PR #9809]**(https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | 0 comments, XL size | `feat(providers): support multiple models per provider profile` | Major feature enabling multi-model routing under one credential—highly requested for cost optimization and redundancy. Likely to be prioritized for v0.8.6. |
| **[Issue #10962]**(https://github.com/zeroclaw-labs/zeroclaw/issues/10962) | 0 comments | `Forward tool result payloads over /ws/chat stream` | Critical UX gap: clients receive tool lifecycle events but no results. A top-tier client-side integration blocker. |
| **[Issue #10963]**(https://github.com/zeroclaw-labs/zeroclaw/issues/10963) | 0 comments | `Forward session identity to delegate sub-agents` | Enables context-aware delegation—essential for privacy-preserving multi-agent workflows. |

> 💡 **Underlying Need**: Users are demanding **end-to-end visibility, composability, and configurability**—especially in delegation, messaging, and provider orchestration. There’s a clear shift from monolithic agents to **modular, auditable, and pluggable systems**.

---

### **5. Bugs & Stability**

| Severity | Issue | Summary | Fix Status |
|--------|------|--------|-----------|
| **S2 (High)** | [#10908](https://github.com/zeroclaw-labs/zeroclaw/issues/10908) | Image markers promoted to attachments without provenance; source text stripped | Open – No fix PR yet |
| **S2 (High)** | [#10952](https://github.com/zeroclaw-labs/zeroclaw/issues/10952) | Anthropic rejects replayed reasoning due to sanitization rewrite | Open – Blocks multimodal tooling with Anthropic |
| **S2 (High)** | [#10736](https://github.com/zeroclaw-labs/zeroclaw/issues/10736) | Streaming error skips fallback to non-streaming chat | Closed – Patch merged in PR #10736 |
| **S2 (High)** | [#10643](https://github.com/zeroclaw-labs/zeroclaw/issues/10643) | Bounded child loops bypass approval enforcement | Open – Follow-up to #10601; security-critical |

> ⚠️ **Stability Note**: While several S2 bugs remain open, the team is actively addressing them. The fact that **only 3 issues were closed today** suggests ongoing triage pressure—especially on security-sensitive paths.

---

### **6. Feature Requests & Roadmap Signals**

| Feature Request | Priority | Signal | Predicted Release |
|----------------|----------|-------|------------------|
| Install skills via `.well-known` discovery index ([#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853)) | P2 | Standardization effort underway in Agent Skills WG | v0.8.6+ |
| Move channels/tools to runtime WASM plugins ([#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850)) | P2 | Core to future modularity; enables zero-recompile upgrades | v0.9.0 |
| Multiple models per provider profile ([#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809)) | P2 | High-demand feature for cost and resiliency | v0.8.6 |
| Forward tool results over `/ws/chat` stream ([#10962](https://github.com/zeroclaw-labs/zeroclaw/issues/10962)) | P2 | Client-facing UX blocker; likely urgent | v0.8.6 |
| Session identity forwarding to delegates ([#10963](https://github.com/zeroclaw-labs/zeroclaw/issues/10963)) | P2 | Enabler for stateful, privacy-aware agents | v0.9.0 |

> 📈 **Roadmap Trend**: The project is clearly moving toward **runtime extensibility**, **secure identity propagation**, and **decentralized skill discovery**—aligning with long-term goals of agent autonomy and composability.

---

### **7. User Feedback Summary**

- **Pain Points:**
  - Clients cannot see tool results in real time due to missing payloads in WebSocket streams ([#10962](https://github.com/zeroclaw-labs/zeroclaw/issues/10962)).
  - Image markers are treated as attachments without provenance, leading to data loss or misinterpretation ([#10908](https://github.com/zeroclaw-labs/zeroclaw/issues/10908)).
  - Lack of delivery receipts makes it impossible to confirm if messages reached recipients ([#10929](https://github.com/zeroclaw-labs/zeroclaw/issues/10929)).

- **Use Cases:**
  - Enterprise agents requiring audit trails and message delivery guarantees.
  - Developers building multi-agent systems where delegation must preserve session context.
  - Teams using multiple LLM providers under shared credentials for cost control.

- **Satisfaction:**
  - Positive sentiment around **security rigor**, **ADR documentation**, and **config atomicity**.
  - Users appreciate the growing emphasis on **provenance**, **authorization**, and **non-widening upgrades**.

---

### **8. Backlog Watch**

| Issue | Age | Status | Risk | Notes |
|------|-----|--------|------|------|
| [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) | 2026-03-27 | In-progress, accepted, no stale | High | Waiting on standardization from Agent Skills group. |
| [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | 2026-07-08 | In-progress, accepted | High | Foundational for modularity—needs maintainer review. |
| [#10963](https://github.com/zeroclaw-labs/zeroclaw/issues/10963) | 2026-09-18 | Accepted, no stale | Medium | Simple but impactful—should be fast-tracked. |
| [#8691](https://github.com/zeroclaw-labs/zeroclaw/issues/8691) | 2026-07-04 | In-progress, accepted | Low | Long-running ADR tracker—requires periodic audit. |

> 🔔 **Maintenance Alert**: Several high-value trackers and features remain unreviewed despite acceptance. **Maintainers should prioritize review of [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) and [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853)** to unlock next-gen extensibility.

---

✅ **Project Health Score**: **Strong** – Active development, high-quality PRs, mature governance (ADR/RFC), and strategic direction.  
⚠️ **Risks**: Delayed fixes on security-critical bugs; backlog congestion in key areas.  
🚀 **Next Focus**: v0.8.6 (runtime stability + multi-model support) and v0.9.0 (gateway separation + plugin runtime).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*