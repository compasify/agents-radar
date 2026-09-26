# OpenClaw Ecosystem Digest 2026-09-26

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-09-26 00:49 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest – 2026-09-26**

---

### **1. Today's Overview**  
The OpenClaw project remains highly active, with **500 issues and 500 pull requests updated in the last 24 hours**, indicating intense development momentum and community engagement. The ecosystem is currently under significant stress: multiple critical bugs (P0) are disrupting stable operation, including persistent crash loops, memory leaks, and update failures across recent releases (2026.9.5–9.6). Despite no new releases, a strong focus on stability and recovery is evident in both issue triage and PRs targeting rollback safety, session data preservation, and gateway resilience. The high volume of activity reflects a mature but strained system undergoing urgent patching cycles.

---

### **2. Releases**  
❌ **No new releases published today.**  
- The latest stable version remains **2026.9.6**, which has introduced several regression issues, notably:
  - `prepared-model-catalog.worker.js` leaking ~77 MB per agent turn (Issue #157842)
  - Update failures due to stalled candidate validation and global install timeouts (e.g., #155290, #156986)
- No migration notes or breaking changes are documented for 2026.9.6, though users report widespread instability post-upgrade.

---

### **3. Project Progress**  
✅ **Merged/Closed PRs (Today):**  
- **PR #158498** – Chore: refresh UI locales (automated sync via bot)  
- **PR #158496** – Fix: reject history-bearing QA requests without session affinity  
- **PR #158493** – Refactor: remove duplicate JSON syntax test in Deepgram provider  

🛠️ **Key Fixes & Advancements:**  
- **PR #158396** – *fix: keep native sessions responsive during database contention* (P1, 🦐 gold shrimp)  
  → Addresses race conditions blocking Codex turns under load. Critical for session reliability.  
- **PR #158491** – *fix: preserve newer data across failed update rollback*  
  → Ensures state integrity even if an update fails mid-rollout. Vital for recovery workflows.  
- **PR #158445** – *perf(gateway): serve profile avatars without blocking SQLite reads*  
  → Improves responsiveness during concurrent avatar fetches.  
- **PR #158489** – *perf(gateway): keep long chat streams responsive*  
  → Reduces main-thread overhead in streaming replies, preventing session lag.

> 🔗 [PR #158396](https://github.com/openclaw/openclaw/pull/158396) | 🔗 [PR #158491](https://github.com/openclaw/openclaw/pull/158491)

---

### **4. Community Hot Topics**  
🔥 **Most Active Issues (by comments/reactions):**  
| Issue | Comments | Severity | Summary |
|------|----------|----------|--------|
| [#153257](https://github.com/openclaw/openclaw/issues/153257) | 34 | P0 🐚 platinum hermit | 2026.9.5 caused 8-hour failure recovery — crash loop after upgrade |
| [#155753](https://github.com/openclaw/openclaw/issues/155753) | 29 | P0 🦪 silver shellfish | Model catalog refresh loop burns CPU core indefinitely |
| [#157842](https://github.com/openclaw/openclaw/issues/157842) | 14 | P0 🦞 diamond lobster | 77MB heap leak per agent turn — exceeds 512MB limit |
| [#157531](https://github.com/openclaw/openclaw/issues/157531) | 13 | P2 🌊 off-meta tidepool | Tracker for fixes between 9.6 and 9.7 |
| [#154114](https://github.com/openclaw/openclaw/issues/154114) | 11 | P0 🦪 silver shellfish | Update fails with "No usable inference route" despite working auth |

📌 **Underlying Needs:**  
- **Stability over speed**: Users demand reliable upgrades and predictable runtime behavior.  
- **Resource control**: Persistent memory and CPU leaks indicate growing concern about scalability.  
- **Update trust**: Multiple update failures suggest confidence erosion in the release pipeline.

---

### **5. Bugs & Stability**  
🚨 **Critical Bugs (P0, UX Release Blockers):**  
| Issue | Description | Fix PR? |
|------|-------------|--------|
| [#153257](https://github.com/openclaw/openclaw/issues/153257) | Crash loop after 2026.9.5 upgrade — unstable environment | ❌ No fix yet |
| [#155753](https://github.com/openclaw/openclaw/issues/155753) | CPU burn from infinite model catalog refresh loop | ❌ No fix yet |
| [#157842](https://github.com/openclaw/openclaw/issues/157842) | Heap leak (~77MB per turn) in `prepared-model-catalog.worker.js` | ❌ No fix yet |
| [#155720](https://github.com/openclaw/openclaw/issues/155720) | macOS gateway exits silently, stays down for ~24h | ❌ No fix yet |
| [#156986](https://github.com/openclaw/openclaw/issues/156986) | `openclaw update` hangs with 233MB+ worker output | ❌ No fix yet |

⚠️ **High-Impact Regressions:**  
- [#152804](https://github.com/openclaw/openclaw/issues/152804): Minimax-portal loses model catalog after upgrade  
- [#154572](https://github.com/openclaw/openclaw/issues/154572): `sessions_spawn` fails with `SessionTranscriptWriterClaimReboundError`  
- [#154180](https://github.com/openclaw/openclaw/issues/154180): Telegram polling worker cannot find module in source-checkout mode

> 🔗 All issues linked above.

---

### **6. Feature Requests & Roadmap Signals**  
💡 **Top User-Requested Features (High Engagement):**  
| Feature | Requested By | Comments | Status |
|-------|--------------|--------|--------|
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | hkochar | Per-agent cost budget enforcement at gateway level | P2, needs product decision |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | aaronwong1989 | Per-agent dreaming configuration | P2, needs maintainer review |
| [#45508](https://github.com/openclaw/openclaw/issues/45508) | mcfex | Self-hosted STT/TTS support in webchat | P2, needs review |
| [#13219](https://github.com/openclaw/openclaw/issues/13219) | duckshrug | Per-model usage logging for cost tracking | P2, needs review |

📈 **Predicted Inclusion in 2026.9.7:**  
- **Per-agent cost budgets (#42475)** and **per-model usage logging (#13219)** are likely candidates due to strong user demand and alignment with cost governance trends.  
- **Self-hosted TTS/STT (#45508)** may be delayed until Q4 due to complexity and security implications.

---

### **7. User Feedback Summary**  
🗣️ **Real Pain Points Reported:**  
- **“I upgraded to 2026.9.5 and now my entire workflow is broken — 8 hours to recover.”** (Issue #153257)  
- **“My gateway runs at 50% CPU idle with Matrix enabled — this didn’t happen before.”** (Issue #154104)  
- **“I can’t update anymore — every attempt fails at ‘candidate rehearsal’.”** (Issue #154114)  
- **“Plugins won’t install — it’s a silent failure.”** (Issue #137177)  

✅ **Positive Signals:**  
- High engagement in PR reviews and bug reports indicates **strong user investment** and **trust in the project’s transparency**.  
- Many contributors are providing detailed reproduction steps and logs (e.g., update failure reports), showing advanced technical maturity.

---

### **8. Backlog Watch**  
🔍 **Long-Standing Issues Needing Maintainer Attention:**  
| Issue | Age | Status | Priority | Notes |
|------|-----|--------|----------|-------|
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | 6 months | P2, clawsweeper:needs-product-decision | High | Cost control is a major pain point |
| [#114414](https://github.com/openclaw/openclaw/issues/114414) | 2 months | Dated TODO sweep | Medium | Overdue cleanup tasks |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | 5 months | P2, needs maintainer review | High | Memory spikes from shared dreaming |
| [#42276](https://github.com/openclaw/openclaw/issues/42276) | 6 months | P3, needs proof | Medium | “Reasoning stream” feature requested |
| [#158421](https://github.com/openclaw/openclaw/issues/158421) | 1 day | P1, needs security review | Critical | Default model pinning blocks fallbacks |

> ⏳ **Note:** Several high-priority issues (e.g., #158421, #157842) have been open <2 days but lack assigned maintainers or fix PRs, suggesting resource strain.

---

**Final Assessment:**  
OpenClaw is in a **critical phase of stability recovery** following recent releases. While the community remains highly engaged and technically sophisticated, **systemic regressions and resource leaks threaten usability**. Immediate focus should be on **patching P0 crashes, stabilizing updates, and addressing heap/memory leaks**. Long-term, features like **cost budgeting and self-hosted voice** reflect a maturing user base demanding enterprise-grade control. Maintainers must prioritize triage and communication to restore trust.

👉 **Project Health Score:** ⚠️ **Red (High Risk)** — Urgent attention required.

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Ecosystem – 2026-09-26**

---

### **1. Ecosystem Overview**  
The open-source personal AI assistant and agent ecosystem is entering a phase of **intense stabilization and architectural refinement**, marked by growing complexity in runtime composition, security, and multi-agent coordination. While early-stage projects focused on core inference and UI, current momentum centers on **systemic reliability**, **enterprise-grade control**, and **cross-platform resilience**. Projects are diverging in maturity: some (e.g., OpenClaw, ZeroClaw) are undergoing critical recovery cycles, while others (e.g., QwenPaw, IronClaw) show strong incremental progress. The convergence of user demands—cost governance, session continuity, and identity management—signals a maturing ecosystem ready for production adoption.

---

### **2. Activity Comparison**

| Project       | Issues (Last 24h) | PRs (Last 24h) | Release Status       | Health Score (Today) |
|---------------|-------------------|------------------|------------------------|-----------------------|
| **OpenClaw**  | 500               | 500              | ❌ No new release      | ⚠️ Red (High Risk)     |
| **Hermes Agent** | 50             | 50               | ❌ No tagged release   | ⚠️ Yellow (Moderate Risk) |
| **IronClaw**  | 0                 | 0                | ❌ No update           | ✅ Green (Stable)      |
| **QwenPaw**   | 12                | 13               | ❌ No new release      | ⚠️ Yellow (Stable but Risky) |
| **ZeroClaw**  | 50                | 50               | ❌ No new release      | ⚠️ Yellow (High Activity, Some Risk) |

> *Note: OpenClaw’s activity volume is exceptional—orders of magnitude higher than peers—indicating either high-scale usage or systemic instability.*

---

### **3. OpenClaw's Position**  
OpenClaw stands as the **most active and highest-stakes project** in the ecosystem, with unparalleled engagement and severity of issues. Its technical approach emphasizes **deep integration across agents, gateways, and session state**, but this has led to cascading failures from recent regressions (e.g., memory leaks, update crashes). Compared to peers:
- **vs. Hermes Agent**: OpenClaw shows broader impact (500+ PRs/issues), but Hermes focuses on platform-specific stability (Windows/macOS).
- **vs. QwenPaw**: Both prioritize UX and context management, but OpenClaw’s scale amplifies risk; QwenPaw has more refined UI/UX fixes.
- **vs. ZeroClaw**: OpenClaw lacks ZeroClaw’s structured RFC governance and plugin vision, relying instead on reactive triage.
- **Community Size**: Likely the largest—judged by issue volume and contributor activity—but burdened by instability eroding trust.

OpenClaw is currently **a high-risk, high-reward anchor**—critical for infrastructure but under strain.

---

### **4. Shared Technical Focus Areas**  

| Requirement                        | Projects Involved                     | Specific Needs                                                                 |
|------------------------------------|----------------------------------------|---------------------------------------------------------------------------------|
| **Session & State Integrity**      | OpenClaw, Hermes Agent, QwenPaw        | Prevent loss during compaction, rollback, or upgrade; preserve history across restarts |
| **Memory & CPU Efficiency**        | OpenClaw, QwenPaw, ZeroClaw            | Fix heap leaks (~77MB per turn), reduce streaming overhead, avoid infinite loops |
| **Update & Rollback Reliability**  | OpenClaw, Hermes Agent, QwenPaw        | Handle failed updates gracefully; prevent silent data loss or crash loops |
| **Security Hardening**             | Hermes Agent, ZeroClaw, OpenClaw       | Prevent credential leakage, enforce access boundaries, secure OIDC/identity flows |
| **Cross-Platform Stability**       | Hermes Agent, OpenClaw                 | Resolve Windows/macOS-specific crashes, venv conflicts, and process lifecycle bugs |
| **Cost & Resource Governance**     | OpenClaw, QwenPaw                      | Enforce per-agent budgets, model-level logging, and resource caps |

> 📌 **Pattern**: Across projects, **trust in system predictability** is now a top-tier requirement—more critical than new features.

---

### **5. Differentiation Analysis**

| Dimension             | OpenClaw                            | Hermes Agent                         | IronClaw                             | QwenPaw                              | ZeroClaw                               |
|------------------------|--------------------------------------|---------------------------------------|---------------------------------------|----------------------------------------|-----------------------------------------|
| **Feature Focus**      | Runtime stability, gateway resilience | Voice subsystems, desktop UX          | Core utilities (time, code graph)    | UI/UX, context handling               | Security, plugin architecture, identity |
| **Target Users**       | Enterprise/self-hosted agents        | Power users, developers, desktop      | Developers, research-oriented users | Creative professionals, researchers  | DevOps, SREs, secure deployment teams  |
| **Technical Architecture** | Monolithic gateway + session layer | PM-managed installs, desktop-native  | Lightweight, declarative tooling     | Browser SDK, Markdown-rich UI         | Plugin-based, WASM-enabled, RPC-driven |
| **Deployment Model**   | Self-hosted, multi-agent orchestration | Desktop-first, hybrid source/package | CLI/Script-based, low-friction       | Web/desktop, browser-integrated       | Host-level, daemon-driven, scalable    |
| **Innovation Signal**  | Recovery under pressure              | Cross-profile security & voice        | Code-aware reasoning                 | Context budgeting, UI customization   | Runtime composition, OIDC, host controls |

> 🔍 **Key Insight**: OpenClaw and ZeroClaw represent **infrastructure evolution**; QwenPaw and Hermes Agent focus on **user experience**; IronClaw excels in **low-level developer tooling**.

---

### **6. Community Momentum & Maturity**

| Tier                  | Projects                                | Indicators                                                                 |
|------------------------|------------------------------------------|----------------------------------------------------------------------------|
| **Rapid Iteration**    | OpenClaw, Hermes Agent, ZeroClaw         | 50+ daily PRs/issues; high-severity bugs open; frequent security patches |
| **Active Refinement**  | QwenPaw                                  | 10–15 PRs/day; first-time contributors; UX-focused improvements           |
| **Stabilizing / Quiet**| IronClaw                                 | 0 activity; two open PRs indicating internal polish, not public feature push |

> 📈 **Trend**: High activity ≠ instability. OpenClaw’s massive volume reflects **community investment amid crisis**, while IronClaw’s silence signals **mature, low-maintenance operation**.

---

### **7. Trend Signals**  
From community feedback and PR patterns, key industry trends emerge:

1. **Cost Control is Now a Core Feature**  
   - Per-agent budgeting (#42475, OpenClaw), model-level logging (#13219), and memory bounds (#10970, ZeroClaw) reflect a shift toward **accountability and operational cost governance**—essential for enterprise adoption.

2. **Trust in Updates is Breaking Down**  
   - Multiple projects report update failures (OpenClaw #154114, Hermes #122656, QwenPaw #7981). This signals a **critical need for deterministic, auditable, and rollback-safe release pipelines**.

3. **User Demand for Customization & Minimalism**  
   - Requests to hide tools (#7357, QwenPaw), disable unused models (#7957), and control chat verbosity indicate **growing preference for personalized, clutter-free interfaces**—especially among power users.

4. **Security Must Be Built-In, Not Patched**  
   - Over half of P0/P1 bugs involve security or identity (OpenClaw, Hermes, ZeroClaw). The trend is clear: **security-by-design is non-negotiable** for self-hosted AI systems.

5. **Runtime Composition Is the Next Frontier**  
   - ZeroClaw’s plugin system (#8850), IronClaw’s knowledge graph (#7988), and QwenPaw’s tool call toggles signal that **modularity and extensibility** will define next-gen agent platforms.

---

### **Conclusion**  
The personal AI agent ecosystem is no longer about building "smarter" assistants—it’s about building **reliable, secure, and governable** ones. OpenClaw leads in scale but faces existential stability challenges. Hermes Agent and QwenPaw excel in user-centric refinement. ZeroClaw is pioneering secure, composable architectures. IronClaw demonstrates how quiet, focused development can yield robust foundational tools. For developers and decision-makers: **prioritize projects with proven stability and strong security posture**, and treat **cost control, update integrity, and session persistence** as non-negotiable requirements in any deployment.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-09-26**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active, with 50 new issues and 50 pull requests updated in the past 24 hours—indicating strong developer engagement and ongoing stabilization efforts. A significant number of open issues center on platform-specific regressions (especially Windows and macOS), session state integrity, and authentication reliability under multiplexed profiles. Despite no new releases, several critical fixes were merged today, particularly around security boundaries, TTS streaming, and dependency compatibility. The project continues to evolve rapidly, with a focus on robustness across complex deployment scenarios.

---

### **2. Releases**  
*No new releases published.*  
There are currently **no tagged releases** for `hermes-agent` as of 2026-09-26. Users should expect upcoming updates to address the stability and compatibility issues highlighted in recent PRs and issues.

---

### **3. Project Progress**  
**Merged/Resolved PRs (Today):**  
- ✅ **[PR #121741]**: Fixed xAI streaming TTS audio output, removed Gemini API key from URLs, and resolved macOS wake-word recorder stream leaks. *Critical fix for voice features.*  
  🔗 [https://github.com/nousresearch/hermes-agent/pull/121741](https://github.com/nousresearch/hermes-agent/pull/121741)  
- ✅ **[PR #121508]**: Secured custom Codex base URL usage by preventing credential leakage to `chatgpt.com`. *High-severity security patch.*  
  🔗 [https://github.com/nousresearch/hermes-agent/pull/121508](https://github.com/nousresearch/hermes-agent/pull/121508)  
- ✅ **[PR #121497]**: Ensured Codex image generation uses configured gateway base URL instead of hard-coded `chatgpt.com`. *Fixes misrouting in proxy setups.*  
  🔗 [https://github.com/nousresearch/hermes-agent/pull/121497](https://github.com/nousresearch/hermes-agent/pull/121497)  
- ✅ **[PR #121360]**: Closed WAL-generation gap in `state.db` to prevent recurring `DeletedWalGenerationError`. *Improves database resilience.*  
  🔗 [https://github.com/nousresearch/hermes-agent/pull/121360](https://github.com/nousresearch/hermes-agent/pull/121360)  

These merges reflect a strong focus on **security hardening**, **voice subsystem reliability**, and **core data integrity**.

---

### **4. Community Hot Topics**  
#### 🔥 Most Active Issues (by comment count & severity):
| Issue | Summary | Link |
|------|--------|------|
| [#122183](https://github.com/nousresearch/hermes-agent/issues/122183) | **Windows PM runtime crash**: Pre-PM venv interferes with post-PM Python 3.14 install → `pydantic_core` ABI mismatch | [Issue #122183](https://github.com/nousresearch/hermes-agent/issues/122183) |
| [#122656](https://github.com/nousresearch/hermes-agent/issues/122656) | Desktop re-runs no-op updater on every boot → endless chat loop | [Issue #122656](https://github.com/nousresearch/hermes-agent/issues/122656) |
| [#122783](https://github.com/nousresearch/hermes-agent/issues/122783) | PM-managed install fails to re-exec into venv → gateway runs on bare interpreter | [Issue #122783](https://github.com/nousresearch/hermes-agent/issues/122783) |

> **Underlying Need**: Users are hitting **platform-specific deployment instability**, especially when migrating between legacy and PM-managed environments. These bugs suggest gaps in installer logic, environment isolation, and process lifecycle management—critical for enterprise-grade reliability.

#### 🔥 Most Active PRs:
| PR | Summary | Link |
|----|--------|------|
| [#123230](https://github.com/nousresearch/hermes-agent/pull/123230) | Fix clipboard paste forwarding in Bot Screen mode (Desktop) | [PR #123230](https://github.com/nousresearch/hermes-agent/pull/123230) |
| [#123240](https://github.com/nousresearch/hermes-agent/pull/123240) | Validate backup restore sources; report refused restores honestly | [PR #123240](https://github.com/nousresearch/hermes-agent/pull/123240) |
| [#123233](https://github.com/nousresearch/hermes-agent/pull/123233) | Secure MCP connection adoption across profiles via effective input comparison | [PR #123233](https://github.com/nousresearch/hermes-agent/pull/123233) |

> **Trend**: Community is pushing for **better user experience in desktop workflows**, **data safety during recovery**, and **secure cross-profile integration**—key signals for future product maturity.

---

### **5. Bugs & Stability**  
| Severity | Issue | Symptom | Fix Status |
|---------|------|--------|-----------|
| ⚠️ P1 (Critical) | [#122183](https://github.com/nousresearch/hermes-agent/issues/122183) | Windows PM runtime crashes due to conflicting venv paths (`pydantic_core` missing) | ❌ Open — high impact on Windows users |
| ⚠️ P1 (Critical) | [#122783](https://github.com/nousresearch/hermes-agent/issues/122783) | Gateway runs on bare interpreter → missing deps (memory provider dead) | ❌ Open — breaks core functionality |
| ⚠️ P2 (High) | [#122656](https://github.com/nousresearch/hermes-agent/issues/122656) | Desktop triggers infinite update loop → kills active chats | ❌ Open — severely impacts usability |
| ⚠️ P2 (High) | [#122490](https://github.com/nousresearch/hermes-agent/issues/122490) | Bot-to-bot DM fails due to missing `ruamel` in delivery runner | ❌ Open — affects internal bot communication |
| ⚠️ P2 (High) | [#123210](https://github.com/nousresearch/hermes-agent/issues/123210) | OpenAI Codex OAuth returns 401 after successful login | ❌ Open — blocks access to AI code generation |

> **Pattern**: Multiple **environment isolation failures** and **authentication persistence issues**—suggesting systemic weaknesses in state management and dependency resolution across platforms.

---

### **6. Feature Requests & Roadmap Signals**  
| Request | Priority | Signal for Next Version |
|-------|----------|------------------------|
| [#88891](https://github.com/nousresearch/hermes-agent/issues/88891) | P3 | First-class per-task model/effort override for `delegate_task` — enables dynamic orchestration. Likely candidate for v0.22+ |
| [#68680](https://github.com/nousresearch/hermes-agent/issues/68680) | P3 | Add pt-BR locale for Docusaurus docs — shows growing international demand |
| [#118381](https://github.com/nousresearch/hermes-agent/issues/118381) | P3 | Surface `initialize_result.instructions` from MCP server to model — crucial for advanced agent contracts |
| [#122609](https://github.com/nousresearch/hermes-agent/issues/122609) | P3 | Skills index stale/degraded — indicates need for automated freshness monitoring |

> **Prediction**: The next release will likely include **enhanced delegation control**, **improved localization support**, and **better error diagnostics** for tool execution and skill indexing.

---

### **7. User Feedback Summary**  
Users report **frustration with frequent crashes on Windows**, especially after upgrades or `hermes update`. Many describe **endless restart loops** and **session loss** due to mismanaged environment transitions. Desktop users highlight **poor clipboard handling**, **unreliable backups**, and **inconsistent behavior** when switching between source and package installs. Security-conscious users appreciate recent OAuth fixes but remain concerned about credential exposure (e.g., API keys in URLs). Overall satisfaction is mixed—functional in stable configurations, but fragile under migration or multi-profile use.

---

### **8. Backlog Watch**  
These long-standing or high-impact issues require maintainer attention:

| Issue | Status | Why It Matters |
|------|--------|---------------|
| [#122183](https://github.com/nousresearch/hermes-agent/issues/122183) | Open (P1) | Blocks PM migration on Windows — major platform regression |
| [#122783](https://github.com/nousresearch/hermes-agent/issues/122783) | Open (P2) | Core gateway instability in PM-managed installs — breaks dependency isolation |
| [#122656](https://github.com/nousresearch/hermes-agent/issues/122656) | Open (P2) | Kills active chats on every boot — UX disaster for daily users |
| [#73985](https://github.com/nousresearch/hermes-agent/issues/73985) | Closed but reported again | xAI TTS still broken — multiple users confirm failure |
| [#112646](https://github.com/nousresearch/hermes-agent/issues/112646) | Open (P3) | Tracking contributions from managed multi-profile deployments — signals growing enterprise use |

> **Recommendation**: Prioritize **Windows stability** and **multiplexed profile security** in the next sprint. These are the top pain points driving user churn and adoption barriers.

---  
**Digest generated:** 2026-09-26  
**Data Source:** GitHub Activity (Issues & PRs) — [nousresearch/hermes-agent](https://github.com/nousresearch/hermes-agent)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026-09-26**

---

### **1. Today's Overview**  
The IronClaw project exhibits low activity in the last 24 hours, with no new issues or releases and no merged pull requests. Two open pull requests are active, indicating ongoing development momentum despite minimal surface-level engagement. The absence of recent updates suggests a period of quiet refinement or internal workflow execution rather than public-facing feature pushes. The project remains stable and operationally healthy, with no signs of critical regressions or urgent community concerns.

---

### **2. Releases**  
*No new releases published today.*  
There are currently no release notes or version updates to report. The latest stable release remains unchanged from prior iterations. No breaking changes, migration steps, or deprecation warnings are applicable at this time.

---

### **3. Project Progress**  
*No PRs were merged or closed today.*  
However, two notable open PRs indicate progress in core functionality and infrastructure:
- **PR #8108**: Adds `operation: "shift"` support to `builtin.time`, enabling signed temporal shifts (seconds, minutes, hours, days, weeks) relative to a timestamp or `now`. This enhances precision in time-based agent operations.
- **PR #7988**: A CI/infrastructure chore that refreshes the codebase knowledge graph via an automated nightly workflow. This improves the agent’s contextual awareness of source code structure and dependencies.

These PRs reflect continued investment in both runtime capabilities and internal developer tooling.

---

### **4. Community Hot Topics**  
*No issues have been opened recently, so no active discussions are visible.*  
The most relevant community-driven developments are the two open PRs:
- **[PR #8108](https://github.com/nearai/ironclaw/pull/8108)**: Focused on expanding `builtin.time` functionality for more expressive time manipulation. This is likely driven by user needs for accurate scheduling and event triggering in AI agents.
- **[PR #7988](https://github.com/nearai/ironclaw/pull/7988)**: A foundational infrastructure update. While technical in nature, it signals growing emphasis on long-term maintainability and agent reasoning accuracy through improved codebase modeling.

Both PRs are low-risk and well-scoped, suggesting mature contributor practices and a focus on incremental quality improvements.

---

### **5. Bugs & Stability**  
*No bugs, crashes, or regressions reported in the last 24 hours.*  
The lack of open issues indicates strong current stability. No fix-related PRs were submitted or merged, confirming that no known production-breaking problems exist at this time. The project’s dependency on automated workflows (e.g., codebase graph refresh) further supports reliability in dynamic environments.

---

### **6. Feature Requests & Roadmap Signals**  
While no formal feature requests are open, the content of **PR #8108** reveals emerging demand for:
- More granular and flexible time manipulation (e.g., negative shifts, mixed units).
- Typed input validation for time operations to prevent runtime errors.

This suggests a roadmap trend toward richer built-in utilities for temporal logic—critical for autonomous agents handling deadlines, recurring tasks, and time-sensitive decision-making. Future versions may include extended `time` API variants or declarative scheduling primitives.

---

### **7. User Feedback Summary**  
*No direct user feedback is available in the issue tracker.*  
However, the presence of a PR adding `shift` semantics to `builtin.time` implies that users or developers have encountered limitations in existing time handling (e.g., inability to express “3 days ago” or “in 2 weeks”). The request for typed inputs further reflects a desire for safer, more predictable agent behavior—especially when integrating time into workflows or APIs.

This points to real-world use cases involving scheduling, audit trails, and state transitions where precise temporal logic is essential.

---

### **8. Backlog Watch**  
*No high-priority unaddressed issues are present.*  
However, **PR #7988** (codebase knowledge graph refresh) has been open since August 29, 2026, and while labeled as a routine CI task, its prolonged status may indicate backlog pressure on core team bandwidth. Though not urgent, timely review and merging are recommended to ensure the knowledge graph remains aligned with current codebase state—particularly important for agents relying on context-aware code understanding.

> 🔗 [PR #7988 – Refresh Codebase Knowledge Graph](https://github.com/nearai/ironclaw/pull/7988)

---

**Summary Assessment**: IronClaw shows steady, low-visibility maintenance with strong internal health. No immediate risks, but proactive attention to open infrastructural PRs like #7988 will help sustain long-term agent intelligence quality. The project remains on track for incremental, high-impact evolution.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-09-26**

---

### **1. Today's Overview**  
QwenPaw remains highly active with a surge in developer engagement: **12 open issues** and **13 open pull requests** updated within the last 24 hours, indicating strong momentum in both bug triage and feature development. The project is currently focused on **UI/UX refinement**, **context management stability**, and **tooling robustness**, particularly around session persistence, browser SDK behavior, and Markdown rendering. No new releases have been published, suggesting the team is prioritizing quality over velocity ahead of a potential patch or minor release. The high volume of first-time contributor PRs signals growing community adoption.

---

### **2. Releases**  
❌ **No new releases** in the past 24 hours.  
The latest stable version remains `2.2.1` (PyPI), with the most recent pre-release `2.2.0b7`. No changelogs or migration notes are available for upcoming updates.

---

### **3. Project Progress**  
✅ **13 PRs opened today**, with **5 directly addressing critical bugs**:
- [PR #7988](https://github.com/agentscope-ai/QwenPaw/pull/7988): Fixes `grep_search` to skip binary/internal files (e.g., `history.db-wal`) — prevents state poisoning.
- [PR #7987](https://github.com/agentscope-ai/QwenPaw/pull/7987): Adds `browser.ignore_default_args` support to allow disabling Playwright’s `--disable-extensions`.
- [PR #7986](https://github.com/agentscope-ai/QwenPaw/pull/7986): Prevents incorrect context window inference for custom providers by bypassing static pattern matching.
- [PR #7983](https://github.com/agentscope-ai/QwenPaw/pull/7983): Resolves QQ bot message replay duplication after session resume.
- [PR #7982](https://github.com/agentscope-ai/QwenPaw/pull/7982): Fixes missing `thought_signature` in Gemini provider tool calls — critical for multi-turn reasoning.

🔧 **UX & Workflow Enhancements**:
- [PR #7989](https://github.com/agentscope-ai/QwenPaw/pull/7989): Makes long Markdown tables scrollable *within* chat bubbles and keeps horizontal scrollbar accessible.
- [PR #7985](https://github.com/agentscope-ai/QwenPaw/pull/7985): Adds pluralization support in i18n labels for code snippet chips.
- [PR #7956](https://github.com/agentscope-ai/QwenPaw/pull/7956): Improves console settings navigation and sidebar interactions.
- [PR #7357](https://github.com/agentscope-ai/QwenPaw/pull/7357): Introduces toggle for hiding tool call cards in chat (debugging vs. readability trade-off).
- [PR #7923](https://github.com/agentscope-ai/QwenPaw/pull/7923): Implements retention policy for `tool_result` blocks via `blocks_retention_days`.

---

### **4. Community Hot Topics**  
🔥 **Top 3 Most Active Issues (by comments)**:

1. **[Issue #7628](https://github.com/agentscope-ai/QwenPaw/issues/7628)** – *Context compaction exceeding budget*:  
   - 7 comments, discusses fundamental flaw in context budgeting logic.  
   - **Need**: Accurate pre-emptive budget estimation based on full request (not just visible context).  
   - 🔗 *Critical for scaling agent sessions without unexpected failures.*

2. **[Issue #7884](https://github.com/agentscope-ai/QwenPaw/issues/7884)** – *Historical chat not loading fully post-compaction*:  
   - 5 comments, user frustration over lost conversation history.  
   - **Need**: Persistent storage of full history; better user control over compaction.  
   - 🔗 *High usability impact; suggests current compaction is too aggressive.*

3. **[Issue #7957](https://github.com/agentscope-ai/QwenPaw/issues/7957)** – *Request to disable unused pre-made models/channels*:  
   - 3 comments, highlights UX anxiety for users with OCD-like preferences.  
   - **Need**: Granular control over UI clutter — reflects desire for customization and minimalism.

💡 These issues reveal **three core community concerns**:  
- **Reliability under load** (budgeting)  
- **Memory and continuity** (history preservation)  
- **Personalized UI control** (clutter reduction)

---

### **5. Bugs & Stability**  
🚨 **High Severity Bugs Reported (with fix PRs in progress)**:
| Issue | Description | Fix PR | Status |
|------|-------------|--------|--------|
| [Issue #7980](https://github.com/agentscope-ai/QwenPaw/issues/7980) | `grep_search` matches internal SQLite WAL files → session corruption | [PR #7988](https://github.com/agentscope-ai/QwenPaw/pull/7988) ✅ | Fixed |
| [Issue #7984](https://github.com/agentscope-ai/QwenPaw/issues/7984) | Browser SDK disables extensions due to Playwright defaults | [PR #7987](https://github.com/agentscope-ai/QwenPaw/pull/7987) ✅ | Fixed |
| [Issue #7946](https://github.com/agentscope-ai/QwenPaw/issues/7946) | QQ gateway replays events → duplicate processing | [PR #7983](https://github.com/agentscope-ai/QwenPaw/pull/7983) ✅ | Fixed |
| [Issue #7979](https://github.com/agentscope-ai/QwenPaw/issues/7979) | Local `llama.cpp` treated as 1M context due to wrong catalog match | [PR #7986](https://github.com/agentscope-ai/QwenPaw/pull/7986) ✅ | Fixed |
| [Issue #7981](https://github.com/agentscope-ai/QwenPaw/issues/7981) | Foreground `chat_with_agent` timeout misreports "interrupted by user" | ❌ No PR yet | **Blocking** |

⚠️ **Medium Severity UX Bugs**:
- [Issue #7948](https://github.com/agentscope-ai/QwenPaw/issues/7948): Web console breaks input — likely layout/rendering issue.
- [Issue #7924](https://github.com/agentscope-ai/QwenPaw/issues/7924): Markdown tables overflow and scrollbars sink — poor mobile experience.

---

### **6. Feature Requests & Roadmap Signals**  
🎯 **Emerging Themes from User Feedback**:
- **Cross-agent session monitoring** ([Issue #7978](https://github.com/agentscope-ai/QwenPaw/issues/7978)): A “Recent Sessions” panel across all agents — indicates need for **multi-agent workflow visibility**.
- **Manual deactivation of unused models/channels** ([Issue #7957](https://github.com/agentscope-ai/QwenPaw/issues/7957)): Suggests demand for **customizable interface hygiene**.
- **Model-specific thinking controls** ([Issue #7990](https://github.com/agentscope-ai/QwenPaw/issues/7990)): Request to expose `thinking_param_style` for Aliyun Token Plan models — implies **increasing use of hybrid cloud/local inference**.
- **Tool call visibility toggle** ([PR #7357](https://github.com/agentscope-ai/QwenPaw/pull/7357)): Already implemented — shows strong interest in **user-controlled noise filtering**.

🔮 **Predicted Next Version Features**:
- Enhanced context budgeting engine (from #7628)
- Persistent history + scroll-back pagination (from #7542)
- Cross-agent session dashboard
- Advanced model/channel management UI

---

### **7. User Feedback Summary**  
💬 **Key Pain Points Expressed**:
- **“I can’t see my old messages!”** – [Issue #7884](https://github.com/agentscope-ai/QwenPaw/issues/7884): Users feel conversations vanish after compaction, leading to **frustration and loss of trust**.
- **“Why does it keep reprocessing messages?”** – [Issue #7946](https://github.com/agentscope-ai/QwenPaw/issues/7946): Indicates instability in long-running bots (especially QQ).
- **“It breaks when I try to do X”** – Multiple reports about `grep_search`, `browser SDK`, and `llama.cpp` integration suggest **fragile tooling layer**.
- **“I don’t want to see every tool call”** – Clear demand for **cleaner chat surfaces** and **configurable verbosity**.

✅ **Positive Signals**:
- High number of **first-time contributor PRs** (5+), indicating healthy ecosystem growth.
- Specific, well-documented issues with reproduction steps — reflects mature user base.

---

### **8. Backlog Watch**  
🔍 **Long-standing or Critical Issues Needing Attention**:
- [Issue #7628](https://github.com/agentscope-ai/QwenPaw/issues/7628) – Context compaction budgeting flaw (7 comments, no PR)  
  → **High risk**: Can cause silent failure during active turns. Must be addressed before scale-up.
- [Issue #7981](https://github.com/agentscope-ai/QwenPaw/issues/7981) – Timeout misreporting (1 comment, no fix)  
  → **Critical UX flaw**: Misleads users into thinking they interrupted the agent.
- [Issue #7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) – History not retained after refresh (5 comments, no action)  
  → **Core usability issue**: Fundamental to trust and continuity.
- [Issue #7978](https://github.com/agentscope-ai/QwenPaw/issues/7978) – Cross-agent session panel (1 comment, no milestone)  
  → **Strategic roadmap item**: Could differentiate QwenPaw in multi-agent environments.

📌 **Recommendation**: Prioritize **#7628** and **#7981** in next sprint — they directly impact reliability and user perception.

---

✅ **Final Assessment**:  
QwenPaw is in a **strong, active phase** — technically robust with many fixes underway, but faces **critical UX and reliability challenges** that could hinder adoption if unresolved. The project is poised for a **major usability upgrade** in the next 1–2 months, driven by community feedback and first-time contributions. Monitor #7628 and #7981 closely — they represent systemic risks.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest – 2026-09-26**

---

### **1. Today's Overview**  
The ZeroClaw project remains highly active with a robust momentum in both issue and pull request activity—50 updates in the last 24 hours across issues and PRs, indicating sustained engineering focus and community engagement. The project is in a critical phase of architectural refinement, particularly around security hardening, runtime composition, and plugin system evolution. High-priority RFCs and bug fixes are progressing rapidly, especially in agent lifecycle control, identity access, and cross-channel reliability. While no new releases have been published, the pipeline is rich with implementation-ready features and security-critical fixes.

---

### **2. Releases**  
*No new releases were published today.*  
There are currently **no pending or recent releases**, suggesting that the team is prioritizing stabilization and integration over version shipping. The next release (likely v0.9.0) is expected to bundle major components like ZeroRelay readiness (#8358), OIDC authentication (#10259, #10321), and plugin migration (#8850).

---

### **3. Project Progress**  
**Merged/Closed PRs (Today):**  
- ✅ **PR #11133** (`fix(rpc): revalidate forwarded environment on session reuse`) – Addresses a high-risk security vulnerability where reused sessions could inherit invalid environment permissions.  
- ✅ **PR #10480** (`fix(runtime): recover from rejected image requests`) – Improves resilience in image-heavy agent workflows by enabling retry logic for failed HTTP 400s.  
- ✅ **PR #10397** (`fix(mcp): send tool result text blocks, not the whole CallToolResult envelope`) – Optimizes streaming protocol efficiency and reduces payload bloat.  
- ✅ **PR #11072** (`fix(nix): set meta.mainProgram on flake packages`) – Resolves Nix build warnings affecting deployment consistency.  

These merged changes reflect strong focus on **security hygiene**, **protocol optimization**, and **cross-platform stability**.

---

### **4. Community Hot Topics**  
The most active and discussion-rich items center on **security architecture**, **agent lifecycle control**, and **plugin flexibility**:

- 🔥 **[Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** – *Maintainer decision queue for RFCs and design issues* (15 comments)  
  → Highlights growing need for **structured governance** as the project scales. This tracker signals demand for transparency in RFC triage and accountability in decision-making.

- 🔥 **[Issue #6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489)** – *Unified capability catalog and plugin migration roadmap* (9 comments)  
  → Central to the "Everything is a plugin" vision. The community is pushing for a single source of truth across built-ins, plugins, and runtime observations—key for future extensibility.

- 🔥 **[PR #11082](https://github.com/zeroclaw-labs/zeroclaw/pull/11082)** – *feat(security): OIDC principals, enrollment and the gateway auth surface* (merged)  
  → Represents a major shift toward **enterprise-grade identity management**, consolidating eight prior slices into one cohesive implementation. This is a foundational step for secure multi-agent environments.

> 💡 **Underlying Need**: Users and contributors are demanding **predictable, auditable, and scalable systems**—especially around access control, runtime composition, and extensibility.

---

### **5. Bugs & Stability**  
Critical bugs reported today reflect deep concerns in **agent coordination**, **channel delivery**, and **security boundaries**:

| Severity | Issue | Summary | Fix Status |
|--------|------|---------|------------|
| ⚠️ **S0 (Security Risk)** | [#11110](https://github.com/zeroclaw-labs/zeroclaw/issues/11110) | RPC workspace confinement retains retargetable symlink | ❌ Open, needs immediate attention |
| ⚠️ **S1 (High Impact)** | [#11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055) | Daemon fails to register channel-map factory → webhook/cron/SOP turns fail | ❌ Open, breaks core functionality |
| ⚠️ **S2 (Degraded Behavior)** | [#11059](https://github.com/zeroclaw-labs/zeroclaw/issues/11059) | WhatsApp Web ignores `force_voice` flag | ❌ Open |
| ⚠️ **S2 (Degraded Behavior)** | [#11093](https://github.com/zeroclaw-labs/zeroclaw/issues/11093) | Stable docs promotion leaves `llms.txt` out of sync | ❌ Open |

> 📌 **Note**: Several high-severity bugs remain open despite active development. The lack of fix PRs suggests either complex root causes or prioritization trade-offs.

---

### **6. Feature Requests & Roadmap Signals**  
Key emerging themes point to the next major release cycle:

- 🛠️ **Runtime Plugin System**  
  - [Issue #8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) – Move optional channels/tools to runtime WASM plugins  
  → **Signal**: A shift from compile-time feature flags to dynamic plugin loading. Expected in v0.9.0+.

- 🔐 **Host-Level Resource Controls**  
  - [Issue #10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970) – Host-scoped admission control and per-agent memory bounds  
  → **Signal**: Scaling agents on shared machines requires resource isolation. Likely a top priority for v0.9.0.

- 🔄 **Agent-to-Agent Messaging**  
  - [Issue #11027](https://github.com/zeroclaw-labs/zeroclaw/issues/11027) – Agent-to-agent session messaging with receiver discretion  
  → **Signal**: Enabling coordinated multi-agent workflows without history merging—critical for advanced agent collaboration.

- 🌐 **New Provider Integration**  
  - [Issue #11103](https://github.com/zeroclaw-labs/zeroclaw/issues/11103) – Add Cheaper Inference as typed OpenAI-compatible provider  
  → **Signal**: Growing demand for cost-effective, high-throughput LLM gateways.

---

### **7. User Feedback Summary**  
Real-world pain points from issues and PRs reveal key user experiences:

- **Frustration with delivery reliability**: Multiple users report messages sent via WhatsApp or cron never arriving due to missing delivery receipts ([#10929](https://github.com/zeroclaw-labs/zeroclaw/issues/10929)) or missing channel registration ([#11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055)).  
- **Confusion around tool behavior**: Legacy tool aliasing (`browser_open` → `shell`) breaks intended semantics ([#11108](https://github.com/zeroclaw-labs/zeroclaw/issues/11108)), causing unexpected behavior.  
- **Need for clearer feedback**: Users want confirmation that actions (e.g., sending messages, running SOPs) actually succeeded—not just logged.  
- **Desire for easier customization**: The push to move tools/plugins to runtime (vs. compile-time) shows users want **flexible, non-recompilation-based extensions**.

> ✅ **Positive Note**: High-quality RFCs and PRs suggest strong contributor confidence in the project’s direction.

---

### **8. Backlog Watch**  
Several high-impact, long-standing issues require maintainer attention:

- 🔔 **[Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** – *Maintainer decision queue for RFCs and design issues*  
  → Still open since July 2026. Needs formal tracking to prevent RFC stagnation.

- 🔔 **[Issue #10993](https://github.com/zeroclaw-labs/zeroclaw/issues/10993)** – *Complete the public runtime composition boundary*  
  → Critical for embeddability; stalled after initial split work.

- 🔔 **[Issue #11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055)** – *Daemon never registers channel-map factory*  
  → Blocks core functionality (webhook, cron, SOP); has been open for 4 days with no fix PR.

- 🔔 **[Issue #11110](https://github.com/zeroclaw-labs/zeroclaw/issues/11110)** – *RPC workspace confinement retains retargetable symlink*  
  → S0 severity; poses real data loss risk. No fix PR yet.

> 📌 **Recommendation**: Prioritize these high-severity, high-impact items for triage and assign owners to prevent technical debt accumulation.

---

✅ **Project Health Snapshot**:  
- **Activity Level**: ⭐⭐⭐⭐⭐ (Very High)  
- **Stability**: ⭐⭐⭐☆☆ (Moderate – several S0/S1 bugs open)  
- **Roadmap Clarity**: ⭐⭐⭐⭐☆ (Strong, but governance bottlenecks exist)  
- **Community Engagement**: ⭐⭐⭐⭐⭐ (Active, thoughtful, and technically rigorous)

> 🔗 *All links lead directly to GitHub issues/PRs for transparency and traceability.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*