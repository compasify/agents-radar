# OpenClaw Ecosystem Digest 2026-09-29

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-09-29 02:15 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest — 2026-09-29**

---

### **1. Today's Overview**  
The OpenClaw project remains highly active, with **500 issues and 500 pull requests updated in the last 24 hours**, indicating intense development and community engagement. The volume of open issues—especially those labeled `P0` (critical) and `issue-rating: 🦞 diamond lobster` or `🪸 platinum hermit`—signals significant stability and reliability challenges across core components like the Gateway, model catalog, and session lifecycle management. While no new releases were published, the high number of PRs suggests ongoing efforts to address critical bugs ahead of an imminent update cycle.

---

### **2. Releases**  
❌ **No new releases** were published today.  
- The latest stable version remains **2026.9.6 (`eb377ac`)**, which has been associated with multiple severe regressions including memory leaks, crash loops, and state corruption.
- Users are advised to avoid upgrading to 2026.9.6 if experiencing instability, as several P0 issues (e.g., #158095, #159596, #156571) are directly tied to this release.
- No migration notes or breaking change announcements are currently available.

> 🔗 [Latest Releases (GitHub)](https://github.com/openclaw/openclaw/releases)

---

### **3. Project Progress**  
✅ **Merged/Closed PRs (today):** 176  
Several high-impact fixes were merged, focusing on **session integrity, security hardening, and performance optimization**:

- **PR #160885** – Fixes misleading `/health` error reporting when config is unreadable due to EIO/EACCES.
- **PR #160893** – Rejects async transcript writes from stale session owners, preventing data corruption.
- **PR #160892** – Removes redundant test suites, improving maintainability without behavioral change.
- **PR #160188** – Improves diagnostics for session-host setup failures, enhancing user guidance during node pairing.
- **PR #159525 & #159468** – Add granular Slack plugin approval controls and policy binding by app/tool, strengthening security boundaries.

These merges reflect a strong focus on **stability, security, and usability**, especially around session lifecycle and access control.

> 🔗 [Merged PRs (GitHub)](https://github.com/openclaw/openclaw/pulls?q=is%3Apr+is%3Aclosed+updated%3A%3E%3D2026-09-28)

---

### **4. Community Hot Topics**  
🔥 **Top Issues by Comment Count & Severity:**

| Issue | Summary | Comments | Severity | Link |
|------|--------|----------|----------|------|
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | Gateway reaches "ready" but never serves; event loop starved, RSS climbs, crashes under load | 22 | ⚠️ P0 / 🦐 gold shrimp | [Link](https://github.com/openclaw/openclaw/issues/149538) |
| [#157067](https://github.com/openclaw/openclaw/issues/157067) | Windows cron fails due to uncloneable Proxy passed to session worker | 17 | ⚠️ P1 / 🦞 diamond lobster | [Link](https://github.com/openclaw/openclaw/issues/157067) |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Persistent zombie processes from hook/tool execution cause memory degradation | 16 | ⚠️ P1 / 🦐 gold shrimp | [Link](https://github.com/openclaw/openclaw/issues/97616) |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | `write` tool overwrites shared files instead of appending → silent data loss | 16 | ⚠️ P0 / 🦞 diamond lobster | [Link](https://github.com/openclaw/openclaw/issues/40001) |
| [#157531](https://github.com/openclaw/openclaw/issues/157531) | Tracking tracker for 2026.9.7 fixes — 18/21 P1 candidates identified | 15 | 🛠️ Release blocker | [Link](https://github.com/openclaw/openclaw/issues/157531) |

📌 **Underlying Needs:**  
- **Stability at scale**: Gateways failing silently under load (#149538, #159596).  
- **Cross-platform reliability**: Windows-specific runtime issues (#157067, #156571).  
- **Data integrity**: File overwrite behavior causing irreversible data loss (#40001).  
- **Release readiness**: Active tracking of P1 blockers for next version (2026.9.7).

---

### **5. Bugs & Stability**  
🚨 **Critical Bugs Reported (P0, Crashes, Memory Leaks, Data Loss):**

| Issue | Description | Fix PR? | Status |
|------|-------------|---------|--------|
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | Gateway ready but unresponsive; event loop starved, RSS explodes | ❌ | P0 / 🦐 gold shrimp |
| [#157160](https://github.com/openclaw/openclaw/issues/157160) | Gateway crash-loop after schema migration (2026.9.6) | ❌ | P0 / 🦐 gold shrimp |
| [#158095](https://github.com/openclaw/openclaw/issues/158095) | State-lifecycle lease blocks gateway startup indefinitely | ❌ | P0 / 🦪 silver shellfish |
| [#159596](https://github.com/openclaw/openclaw/issues/159596) | Prepared-model-catalog worker grows to full heap ceiling (~200 critical events/day) | ❌ | P0 / 🦪 silver shellfish |
| [#159662](https://github.com/openclaw/openclaw/issues/159662) | Unbounded memory leak (~4–5 GB/h) in model-catalog worker | ❌ | P0 / 🦪 silver shellfish |
| [#156571](https://github.com/openclaw/openclaw/issues/156571) | Model-catalog worker fills disk with uncleaned source captures (1–3 GB/min) | ❌ | P0 / 🦪 silver shellfish |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) | Plugin source capture rewrites large binaries per CLI command → SSD wear | ❌ | P1 / 🦞 diamond lobster |
| [#156424](https://github.com/openclaw/openclaw/issues/156424) | Audit_events index corruption paralyzes gateway | ❌ | P0 / 🦪 silver shellfish |

💡 **Pattern:** Multiple P0 issues center on **memory exhaustion**, **state corruption**, and **unrecoverable startup failures**, primarily in the **model catalog**, **gateway lifecycle**, and **session persistence** layers.

---

### **6. Feature Requests & Roadmap Signals**  
📈 **High-Priority Feature Requests (with traction):**

| Request | Summary | Votes | Link |
|--------|--------|-------|------|
| [#16670](https://github.com/openclaw/openclaw/issues/16670) | Onboarding Wizard must include Memory/Embedding setup as mandatory step | 2 👍 | [Link](https://github.com/openclaw/openclaw/issues/16670) |
| [#155633](https://github.com/openclaw/openclaw/issues/155633) | Add Databricks Unity Gateway as official model provider | 0 👍 | [Link](https://github.com/openclaw/openclaw/issues/155633) |
| [#46844](https://github.com/openclaw/openclaw/issues/46844) | Talk Mode idle timeout after voice wake | 1 👍 | [Link](https://github.com/openclaw/openclaw/issues/46844) |
| [#157531](https://github.com/openclaw/openclaw/issues/157531) | 2026.9.7 Fixes Tracker (active planning) | 0 👍 | [Link](https://github.com/openclaw/openclaw/issues/157531) |

🔮 **Predicted Next Version (2026.9.7):**  
- **Likely to include:** Fix for model-catalog memory leaks (#159596), crash-loop fixes (#149538, #157160), and improved onboarding UX (#16670).
- **Unlikely to include:** Major new features — focus is clearly on **stability and reliability** post-2026.9.6.

---

### **7. User Feedback Summary**  
💬 **Real Pain Points from User Reports:**

- **Silent data loss** via `write` tool overwriting files (#40001) — users report losing work without warning.
- **Gateway uptime failure** — systems crash-looping after updates, requiring manual restarts (#149538, #157160).
- **Disk and SSD degradation** due to repeated plugin file copying (#157989), especially on low-end hardware.
- **Confusing error messages** during updates and health checks, masking underlying filesystem or auth issues (#154114, #160885).
- **Loss of visibility** in subagent workflows — detached agents run silently, no feedback to user (#101656).

✅ **Positive Signals:**  
- Users appreciate **fine-grained control** (e.g., per-agent tools, approval workflows).
- High engagement in testing and validation (e.g., Telegram/E2E proofs in PRs).

---

### **8. Backlog Watch**  
⚠️ **Long-Unanswered Critical Issues Requiring Maintainer Attention:**

| Issue | Age | Status | Notes |
|------|-----|--------|-------|
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | 13 days | ✅ Open | P0, 22 comments, no fix PR |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 120 days | ✅ Open | P1, 16 comments, no fix PR |
| [#157067](https://github.com/openclaw/openclaw/issues/157067) | 5 days | ✅ Open | P1, 17 comments, needs repro |
| [#156571](https://github.com/openclaw/openclaw/issues/156571) | 6 days | ✅ Open | P0, 13 comments, disk-filling bug |
| [#159596](https://github.com/openclaw/openclaw/issues/159596) | 2 days | ✅ Open | P0, 6 comments, high-impact memory leak |
| [#157531](https://github.com/openclaw/openclaw/issues/157531) | 5 days | ✅ Open | 18/21 P1 candidates flagged — **release blocker tracker** |

🔍 **Action Required:**  
Maintainers must prioritize **P0 stability fixes** before any new feature development. These issues are blocking production use cases and undermining trust in the platform’s reliability.

> 🔗 [Backlog Watch (GitHub)](https://github.com/openclaw/openclaw/issues?q=is%3Aopen+sort%3Aupdated-desc+label%3A%22P0%22+label%3A%22issue-rating%3A+%F0%9F%8C%9A+diamond+lobster%22)

---

### ✅ **Final Assessment**  
OpenClaw is **functionally rich but operationally fragile**. While innovation continues (e.g., ACP runtime contracts, plugin approvals), **core stability is under serious strain**. The next release (2026.9.7) must be treated as a **critical patch release**, not a feature update. Without urgent attention to memory leaks, crash loops, and data loss risks, adoption and trust will continue to erode.

> 🔗 [Project Dashboard (GitHub)](https://github.com/openclaw/openclaw)

---

## Cross-Ecosystem Comparison

⚠️ Comparative analysis generation failed.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

---

### **1. Today's Overview**  
As of 2026-09-29, the Hermes Agent project remains highly active with a robust pipeline of developer engagement: **50 issues and 50 pull requests updated in the last 24 hours**, indicating sustained momentum across core development, platform stability, and user-facing enhancements. No new releases were published today, suggesting that the team is prioritizing internal fixes and feature refinement ahead of a potential upcoming release. The workload is heavily skewed toward **platform-specific bugs (especially Windows/macOS desktop)** and **session/state management issues**, reflecting ongoing challenges in cross-platform consistency and reliability.

---

### **2. Releases**  
❌ **No new releases** were published as of 2026-09-29.  
The latest version remains at **v0.21.5+3934** (CLI), while the desktop app continues to lag behind with an outdated `package.json` version stuck at **0.17.0** (Issue #68783). This discrepancy highlights a known release process gap — **version bumps are not consistently propagated across components**, which may impact user trust and update clarity.

> 🔗 [Issue #68783 – Desktop version stuck at 0.17.0](https://github.com/nousresearch/hermes-agent/issues/68783)

---

### **3. Project Progress**  
**12 PRs merged/closed today**, primarily focused on **critical bug fixes** and **user experience polish**:

- ✅ **#119568**: Removed non-existent `GPT-6 Terra` models from catalogs — clean-up for model ecosystem integrity.
- ✅ **#79510**: Fixed model switching across compute-host boundaries (`dashboard.turn_isolation`) — critical for multi-host workflows.
- ✅ **#126960**: Prevented automatic model turns after user presses "Stop" — improves session control.
- ✅ **#75707**: Added recoverable, ID-based approval tracking — enhances resilience in interactive clients.
- ✅ **#74886**: Introduced declarative `run_start_event` for tools — improves auditability and client integration.
- ✅ **#41813**: Blocked ambiguous forced skills in Kanban — prevents invalid task spawns.

These merges indicate strong focus on **stability**, **security**, and **interoperability**, particularly around **session lifecycle**, **approval recovery**, and **tool orchestration**.

> 🔗 [PR #119568](https://github.com/nousresearch/hermes-agent/pull/119568) | [PR #79510](https://github.com/nousresearch/hermes-agent/pull/79510) | [PR #126960](https://github.com/nousresearch/hermes-agent/pull/126960)

---

### **4. Community Hot Topics**  
Top 5 most discussed items reflect deep user frustration and high-priority pain points:

1. **#123801** – macOS Desktop renders duplicate assistant reply despite one DB row  
   - **15 comments**, P1 severity  
   - Symptom: Verbatim duplication in UI, likely due to state misalignment between frontend and backend.  
   > 🔗 [Issue #123801](https://github.com/nousresearch/hermes-agent/issues/123801)

2. **#88858** – MCP trust gate fails to detect `readOnlyHint` (camelCase vs snake_case)  
   - **10 comments**, P2 severity  
   - Critical flaw: Untrusted servers treat *all* tools as write-capable, breaking usability.  
   > 🔗 [Issue #88858](https://github.com/nousresearch/hermes-agent/issues/88858)

3. **#126524** – Desktop assistant reply renders twice on fresh client  
   - **5 comments**, P2 severity  
   - Reproducible on macOS arm64; DB shows one row but UI duplicates output — strong sign of front-end rendering or message handling flaw.  
   > 🔗 [Issue #126524](https://github.com/nousresearch/hermes-agent/issues/126524)

4. **#124807** – Windows `hermes update` fails deleting `libcrypto.dll` (Access Denied)  
   - **5 comments**, P2 severity  
   - Indicates poor file-lock handling during updates — common in Windows environments.  
   > 🔗 [Issue #124807](https://github.com/nousresearch/hermes-agent/issues/124807)

5. **#126655** – Cron passes model pin literally (no alias resolution)  
   - **3 comments**, P2 severity  
   - Silent failure mode: users get 404s without context — hard to debug.  
   > 🔗 [Issue #126655](https://github.com/nousresearch/hermes-agent/issues/126655)

👉 **Underlying Need**: Users demand **predictable, consistent, and resilient behavior across platforms**, especially in **state synchronization**, **update mechanics**, and **configuration resolution**.

---

### **5. Bugs & Stability**  
High-severity bugs reported today highlight systemic risks:

| Severity | Issue | Description | Fix PR? |
|--------|-------|-------------|--------|
| **P0** | #123824 | V4A `Delete File` on symlink deletes target; `Move File` renames target | ❌ |
| **P1** | #123801 | macOS Desktop shows duplicate assistant replies (DB: 1 row) | ⚠️ Pending |
| **P2** | #88858 | MCP trust gate ignores `readOnlyHint` → untrusted server unusable | ❌ |
| **P2** | #126524 | Fresh client renders duplicate replies (adjacent, verbatim) | ⚠️ Pending |
| **P2** | #124807 | Windows update fails due to Access Denied on `libcrypto.dll` | ❌ |
| **P2** | #126470 | Multi-profile `hermes update` inherits wrong `HERMES_HOME`, gateway stays down | ❌ |

⚠️ **Critical Risk**: Multiple **Windows update failures** and **macOS UI rendering glitches** suggest instability in **cross-platform update flows** and **frontend state management**. These are not isolated incidents but recurring themes.

> 🔗 [P0: #123824 – Symlink patch issue](https://github.com/nousresearch/hermes-agent/issues/123824) | [P2: #88858 – MCP trust gate bug](https://github.com/nousresearch/hermes-agent/issues/88858)

---

### **6. Feature Requests & Roadmap Signals**  
Emerging signals point to growing interest in **structured identity**, **session reproducibility**, and **enhanced tooling**:

- **#126265** – Stable per-message identity (`message_uid`, `merge witness`)  
  - 2 comments, P3, needs decision  
  - **Signal**: Users want deterministic context tracking across sessions, backups, and AI agents — foundational for auditing and debugging. Likely to be prioritized in v0.22+.  
  > 🔗 [Issue #126265](https://github.com/nousresearch/hermes-agent/issues/126265)

- **#115081** – Kanban board: runtime cap badge, triage signal, card context menu  
  - 0 comments, P3  
  - Suggests increasing demand for **project visibility and operational awareness** in desktop workflows.  
  > 🔗 [PR #115081](https://github.com/nousresearch/hermes-agent/pull/115081)

- **#127254** – Forward snapshot tokens to legacy drivers  
  - WIP, P2  
  - Indicates ongoing effort to **support older accessibility drivers** — backward compatibility is a key concern.  
  > 🔗 [PR #127254](https://github.com/nousresearch/hermes-agent/pull/127254)

👉 **Predicted Next Release Focus**: **Session stability**, **identity tracking**, **cross-platform update reliability**, and **Kanban/Project UX polish**.

---

### **7. User Feedback Summary**  
Real-world user pain points reveal three dominant themes:

1. **Update Reliability**  
   - Windows users report **silent failures**, **file locks**, and **infinite loops** during updates (#77277, #124807).  
   - macOS users face **zombie processes** and **failed re-signing** after updates (#62128, #127225).

2. **UI/State Inconsistencies**  
   - macOS users see **duplicate assistant replies** (#123801, #126524) — undermines trust in AI output accuracy.  
   - Desktop file browser remains rooted at `~/.hermes` despite project config (#117890).

3. **Tool & Configuration Confusion**  
   - Hindsight plugin silently fails due to missing module (`hindsight-all`) despite correct config (#7718).  
   - Model aliases fail in cron jobs, returning cryptic 404s (#126655).

✅ **Satisfaction Indicators**:  
- Successful merge of `run_start_event` and `approval recovery` (PR #74886, #75707) — users appreciate improved auditability and resilience.

---

### **8. Backlog Watch**  
Several long-standing, high-impact issues remain open and under-discussed:

- **#126655** – Cron passes model pin literally (no alias resolution)  
  - Open since 2026-09-28, only 3 comments — **high risk of silent failure**, yet no assigned maintainer.  
  > 🔗 [Issue #126655](https://github.com/nousresearch/hermes-agent/issues/126655)

- **#121209** – About-panel Update button can trigger remote updates  
  - Closed but unresolved — dangerous UX antipattern.  
  > 🔗 [Issue #121209](https://github.com/nousresearch/hermes-agent/issues/121209)

- **#120882** – Missing docs on model update flow and SDK versioning  
  - Closed, but still a major knowledge gap for advanced users.  
  > 🔗 [Issue #120882](https://github.com/nousresearch/hermes-agent/issues/120882)

- **#117890** – Desktop file browser remains fixed at `~/.hermes`  
  - Open since 2026-09-21, 3 comments — basic project navigation broken.  
  > 🔗 [Issue #117890](https://github.com/nousresearch/hermes-agent/issues/117890)

🚨 **Urgent Action Needed**: These issues represent **friction points** that deter adoption by power users and enterprise teams. Maintainers should prioritize triage and assign ownership.

---

**Final Assessment**: Hermes Agent is in a **high-velocity development phase** with strong community participation, but **stability and update reliability remain weak spots**. The project is healthy in innovation and feature depth but must address **cross-platform consistency**, **session integrity**, and **developer transparency** to scale beyond early adopters.  

🎯 **Next Steps**: Prioritize fix PRs for P0/P1 bugs, stabilize update pipelines, and publish migration notes for version drift.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

---

### **1. Today's Overview**  
As of 2026-09-29, IronClaw maintains a steady but low-velocity development pace with minimal recent activity: two new issues opened in the past 24 hours and one PR merged, indicating ongoing refinement rather than active feature rollout. The project continues to prioritize infrastructure stability and documentation hygiene, as evidenced by automated bot-driven updates to the codebase knowledge graph and OpenWiki documentation. No new releases have been published, suggesting a focus on internal quality assurance and system reliability over public versioning. Overall, the project appears stable with a mature, well-documented core, though innovation velocity remains subdued.

---

### **2. Releases**  
❌ **No new releases** were published in the last 24 hours or since the previous release cycle.  
*Note:* The absence of a release suggests either a planned release delay or that recent changes are deemed non-breaking and suitable for incremental integration without version bumping.

---

### **3. Project Progress**  
✅ **Merged PR (Closed):**  
- **[PR #5132](https://github.com/nearai/ironclaw/pull/5132)** – *fix(webui-v2): redirect invalid chat thread routes*  
  - **Impact:** Improved UX stability in the Web UI by handling invalid deep links gracefully.  
  - **Fixes:** Prevents navigation errors when users access malformed `/chat/:threadId` routes; ensures proper fallback to `/chat` while preserving local thread state during async reloads.  
  - **Status:** Successfully closed and integrated—no regressions reported.

---

### **4. Community Hot Topics**  
🔥 **Top Issue:**  
- **[#8116](https://github.com/nearai/ironclaw/issues/8116) – Daily ironclaw failure taxonomy — 2026-09-28**  
  - **Focus:** Deep analysis of 31 failing tasks in `officeqa` benchmark run, primarily attributed to genuine model-quality issues (e.g., DeepSeek-V4-Flash behavior).  
  - **Implication:** Highlights growing need for systematic error classification to distinguish between model limitations and agent framework bugs—critical for benchmark transparency and AI evaluation trustworthiness.  
  - **Community Need:** Demand for structured diagnostics and failure categorization tools to improve reproducibility and feedback loops.

🔥 **Top Feature Request:**  
- **[#8115](https://github.com/nearai/ironclaw/issues/8115) – Add a Tsubasa registry entry with an explicit 32K context-budget path**  
  - **Need:** Users must manually configure Tsubasa endpoints and models, creating friction in setup.  
  - **Request:** Introduce a named, pre-configured provider (e.g., `tsubasa-32k`) to simplify credential management and reduce configuration errors.  
  - **Underlying Demand:** Enhanced usability and developer onboarding—especially for users leveraging high-context models via Tsubasa backend.

---

### **5. Bugs & Stability**  
⚠️ **No critical bugs or crashes reported today.**  
- All open issues are categorized as feature requests or diagnostic tracking, not runtime failures.  
- **Issue #8116** is more a diagnostic log than a crash report—no functional breakage observed.  
- **PR #5132** resolved a minor UI routing issue but was not a regression.  
👉 **Assessment:** System stability is strong; no urgent fixes required. The project is currently focused on observability and configurability improvements rather than bug remediation.

---

### **6. Feature Requests & Roadmap Signals**  
🚀 **Emerging Priorities from Community Input:**  
- **Tsubasa Backend Abstraction:** Explicit registry entries for model paths (e.g., `tsubasa-32k`) signal demand for first-class support of high-context models. This could lead to a future v1.7+ release with enhanced backend abstraction layers.  
- **Failure Taxonomy System:** The detailed breakdown in #8116 suggests interest in building a formalized error classification engine—potentially a new `diagnostics` module in next quarter’s roadmap.  
- **Documentation Automation:** Ongoing bot-driven updates (e.g., PR #6698, #7988) indicate a strategic shift toward self-maintaining knowledge systems, likely tied to future AI-assisted documentation workflows.

---

### **7. User Feedback Summary**  
💬 **Key Pain Points Identified:**  
- **Manual Configuration Friction:** Users struggle with setting up Tsubasa due to lack of pre-defined endpoints (per #8115).  
- **Opaque Failure Analysis:** Without standardized taxonomy, diagnosing model vs. agent-level failures is time-consuming (per #8116).  
- **UI Resilience Gaps:** Invalid route handling previously caused confusion—now partially addressed by PR #5132.  

💡 **Positive Signals:**  
- High engagement with benchmark data (officeqa) indicates active use in real-world evaluation scenarios.  
- Users are investing time in analyzing failure modes, reflecting deep involvement and trust in the framework.

---

### **8. Backlog Watch**  
🔍 **High-Priority Unresolved Items Requiring Attention:**  
- **[#8115](https://github.com/nearai/ironclaw/issues/8115)** – *Add a Tsubasa registry entry with an explicit 32K context-budget path*  
  - **Status:** Open for 1 day, zero comments/reactions.  
  - **Why It Matters:** Critical for lowering barrier-to-entry for advanced model usage. Should be prioritized for Q4 2026 release.  

- **[#8116](https://github.com/nearai/ironclaw/issues/8116)** – *Daily ironclaw failure taxonomy*  
  - **Status:** Newly opened, no discussion yet.  
  - **Why It Matters:** Represents a foundational need for AI agent evaluation maturity. Could evolve into a standard diagnostic pipeline if adopted.  

📌 **Recommendation:** Maintainers should triage these two issues within 48 hours to guide upcoming sprint planning and community alignment.

---  
*Data Source: GitHub Repository – nearai/ironclaw | Snapshot Date: 2026-09-29*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-09-29**

---

### **1. Today's Overview**  
The QwenPaw project remains highly active with a strong momentum in issue and pull request activity: 10 issues updated (7 open, 3 closed), and 17 PRs updated (13 open, 4 merged). The ecosystem is showing robust engagement from both core contributors and the community, particularly around stability fixes for media handling, session management, and desktop usability. While no new releases were published, significant progress was made on critical bugs related to context bloat, image processing, and UI/UX consistency—indicating a focus on reliability ahead of future feature rollouts.

---

### **2. Releases**  
No new releases were published as of 2026-09-29. The latest stable version remains **2.2.2b3** (desktop bundled backend). There are no breaking changes or migration notes to report at this time. The team appears to be prioritizing bug fixes and stability improvements before releasing a new tagged version.

> 🔗 [GitHub Releases](https://github.com/agentscope-ai/QwenPaw/releases)

---

### **3. Project Progress**  
Four pull requests were merged today, advancing key areas of stability and user experience:

- ✅ **PR #8005**: *Unify interface font scaling* – Added persistent font size settings (12px–20px) across Console UI components, improving accessibility and scalability. This directly addresses long-standing feedback from users with high-DPI screens or visual impairments.
- ✅ **PR #7956**: *Unify settings UX and smooth conversation transitions* – Improved design consistency, fixed welcome-screen flash during chat switching, and refined interaction feedback, enhancing overall polish.
- ✅ **PR #7965**: *Reclaim historical media in Scroll and align thinking omission with token counting* – Fixed context bloat caused by unpruned media blocks (especially images), ensuring older content is properly folded when exceeding text thresholds.
- ✅ **PR #7953**: *Preserve actionable per-asset import failures* – Now retains error details during asset imports, enabling better debugging for failed operations.

These merges reflect a focused effort on **context hygiene**, **UI consistency**, and **user-facing resilience**.

> 🔗 [PR #8005](https://github.com/agentscope-ai/QwenPaw/pull/8005) | [PR #7956](https://github.com/agentscope-ai/QwenPaw/pull/7956) | [PR #7965](https://github.com/agentscope-ai/QwenPaw/pull/7965) | [PR #7953](https://github.com/agentscope-ai/QwenPaw/pull/7953)

---

### **4. Community Hot Topics**  
Top community-driven discussions center on **critical stability issues** and **accessibility enhancements**:

- 📌 **Issue #7853** ([Closed](https://github.com/agentscope-ai/QwenPaw/issues/7853)): *ToolResultPruner skips media blocks → base64 accumulation → context overflow*. This was a major systemic flaw affecting session longevity. A fix (PR #7965) has been merged, resolving the root cause.
- 📌 **Issue #8013** ([Open](https://github.com/agentscope-ai/QwenPaw/issues/8013)): *Skill pool download timeout (30s) despite ongoing backend copy*. High-priority for large skill transfers; currently blocking usability in enterprise/intranet deployments.
- 📌 **Issue #8015** ([Open](https://github.com/agentscope-ai/QwenPaw/issues/8015)): *Request for configurable self-hosted Skill/Plugin marketplace sources*. Urgent for air-gapped or internal network environments—signals growing demand for deployment flexibility.

> 🔗 [Issue #7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) | [Issue #8013](https://github.com/agentscope-ai/QwenPaw/issues/8013) | [Issue #8015](https://github.com/agentscope-ai/QwenPaw/issues/8015)

**Underlying Need**: Users increasingly demand **enterprise-grade control** (self-hosting, offline access) and **robustness under load** (large files, long sessions).

---

### **5. Bugs & Stability**  
Critical stability concerns reported today include:

| Severity | Issue | Description | Fix Status |
|--------|-------|-------------|------------|
| 🔴 **High** | [#8009](https://github.com/agentscope-ai/QwenPaw/issues/8009) | Oversized image rejection kills entire session permanently due to stuck media payload | ✅ **Fix PR #8010** submitted (recovery logic added) |
| 🔴 **High** | [#8011](https://github.com/agentscope-ai/QwenPaw/issues/8011) | Telegram formatter breaks on `c++`, `objective-c`, nested fences | ✅ **Fix PR #8012** submitted |
| 🟡 **Medium** | [#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) | TaskTracker reports inconsistent running task counts vs API | ✅ **Fix PR #8007** submitted |
| 🟡 **Medium** | [#8002](https://github.com/agentscope-ai/QwenPaw/issues/8002) | Windows auto-mode sandbox off allows unsafe Office COM Quit() | ⚠️ No fix yet; security risk |

> 🔗 [Issue #8009](https://github.com/agentscope-ai/QwenPaw/issues/8009) | [PR #8010](https://github.com/agentscope-ai/QwenPaw/pull/8010)

**Trend**: Media handling and session state recovery are recurring pain points requiring architectural attention.

---

### **6. Feature Requests & Roadmap Signals**  
Key user-driven feature signals suggest upcoming priorities:

- 🛠️ **Self-hosted Skill/Plugin Marketplace** ([#8015](https://github.com/agentscope-ai/QwenPaw/issues/8015)) – Explicit demand for config-driven mirror support, indicating strong interest in **air-gapped and intranet deployments**.
- 🖼️ **Customizable Desktop Font Size** ([#7999](https://github.com/agentscope-ai/QwenPaw/issues/7999)) – Already implemented via PR #8005, confirming a focus on **accessibility and inclusive design**.
- 🧠 **Model-Specific Thinking Controls** ([#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990)) – Request to expose `thinking_param_style` for Aliyun Token Plan models, signaling need for **fine-grained model configuration** in agent workflows.

> 🔗 [Feature #8015](https://github.com/agentscope-ai/QwenPaw/issues/8015) | [Feature #7990](https://github.com/agentscope-ai/QwenPaw/issues/7990)

**Prediction**: The next release (likely v2.3.0) will likely include **custom marketplace sources**, **enhanced model tuning controls**, and **improved media recovery mechanisms**.

---

### **7. User Feedback Summary**  
Real-world pain points highlighted by users:

- **Enterprise Use Cases**: Air-gapped environments need self-hosted plugin markets (#8015); inability to configure sources is a blocker.
- **Large File Handling**: Downloading big skills (e.g., `ppt-master`, 80MB) times out after 30 seconds despite backend progress (#8013).
- **Accessibility**: Non-adjustable UI fonts hinder usability for elderly and high-DPI users (#7999).
- **Session Reliability**: Rejected media payloads permanently break conversations (#8009), frustrating users during complex workflows.
- **Cross-Platform Issues**: Linux desktop zoom shortcuts fail (#6252), impacting workflow efficiency.

Users express satisfaction with recent UI polish (font scaling, smooth transitions) but frustration with **unpredictable session crashes** and **lack of configurability**.

---

### **8. Backlog Watch**  
Important issues that remain open and require maintainer attention:

- 🔍 **[Issue #7991](https://github.com/agentscope-ai/QwenPaw/issues/7991)**: Inconsistent `running_task_count` between dashboard and API — impacts trust in system state. PR #8007 exists but not reviewed.
- 🔍 **[Issue #8013](https://github.com/agentscope-ai/QwenPaw/issues/8013)**: Persistent 30-second timeout during large skill downloads — critical for usability in production environments. PR pending.
- 🔍 **[Issue #8002](https://github.com/agentscope-ai/QwenPaw/issues/8002)**: Unsafe Office COM execution on Windows without sandbox — potential security vulnerability. No PR yet.
- 🔍 **[Issue #7990](https://github.com/agentscope-ai/QwenPaw/issues/7990)**: Missing `thinking_param_style` for Aliyun models — limits agent customization.

> 🔗 [Backlog Watch List](https://github.com/agentscope-ai/QwenPaw/issues?q=is%3Aopen+sort%3Aupdated-desc+label%3Abug+label%3Aenhancement)

---

### ✅ **Final Assessment**  
QwenPaw is in a healthy, maturing phase: rapid iteration on stability and UX, strong community contribution (especially first-time contributors), and clear roadmap signals toward enterprise readiness. The project is well-positioned for its next major release with enhanced configurability, robustness, and deployment flexibility. Maintainers should prioritize reviewing and merging high-impact PRs (e.g., #8007, #8010, #8012) to stabilize the platform ahead of wider adoption.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest – 2026-09-29**

---

### **1. Today's Overview**  
The ZeroClaw project remains highly active with a robust pace of development: **50 issues and 50 pull requests updated in the last 24 hours**, indicating sustained momentum across core infrastructure, security, and agent runtime enhancements. No new releases were published, suggesting the team is focused on stabilizing pre-release features rather than shipping updates. The volume of high-severity (S0/S1) bug reports—particularly around session resumption, cost tracking, and tool execution—highlights ongoing efforts to harden reliability and security in multi-agent deployments. Community engagement is strong, especially around identity access control, plugin architecture, and RFC process refinement.

---

### **2. Releases**  
❌ **No new releases** were published as of 2026-09-29.  
*Note:* The project continues to operate under an active development cycle leading up to v0.9.0, with release efficiency improvements tracked in [#10814](https://github.com/zeroclaw-labs/zeroclaw/issues/10814). The absence of a release suggests that critical stability and integration work (e.g., RPC parity, OIDC rollout) are still underway.

---

### **3. Project Progress**  
**Merged/Closed PRs (Today):**  
While no PRs were explicitly marked as *merged* in the provided data, several key contributions were recently completed or finalized:  
- ✅ **[#11131](https://github.com/zeroclaw-labs/zeroclaw/pull/11131)**: *feat(runtime): own the observer event firehose in the daemon* — Now fully integrated, ensuring `logs/subscribe` works even without gateway presence. Critical for TUI and zerocode resilience.  
- ✅ **[#11089](https://github.com/zeroclaw-labs/zeroclaw/pull/11089)**: *feat(enroll): relay enrollment page with link-prefill support* — Enables browser-based enrollment via dynamic links, removing hand-rolled TLS.  
- ✅ **[#10525](https://github.com/zeroclaw-labs/zeroclaw/pull/10525)**: *Replaced JavaScript TLS client with relay-terminated enrollment* — Security improvement aligned with zero-trust principles.

These advances signal progress toward **v0.9.0’s gateway separation** and **secure, self-service enrollment**.

---

### **4. Community Hot Topics**  
The most active discussions center on **security enforcement**, **identity management**, and **RFC process optimization**:

- 🔥 **[#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549)**: *RFC: Simplify RFC voting by removing mandatory discussion windows*  
  - **12 comments**, no likes — reflects deep community debate on governance efficiency.  
  - **Need:** Reduce friction in RFCs while maintaining quality review. Current 48–72hr wait times are seen as unproductive.  
  - **Implication:** Suggests growing maturity in contributor workflow; teams want faster iteration cycles.

- 🔥 **[#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)**: *Per-sender RBAC for multi-tenant agent deployments*  
  - **10 comments**, accepted since April 2026 — indicates long-standing demand for granular access control in enterprise-grade setups.  
  - **Need:** Secure delegation in shared environments where agents act on behalf of different users.  
  - **Signal:** Multi-tenancy is becoming a priority for production adoption.

- 🔥 **[#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832)**: *Plugin-owned Kanban board for agent work*  
  - **9 comments**, reclassified from RFC queue — shows interest in decentralized task management within plugins.  
  - **Need:** Plugins should manage their own lifecycle, not rely on central coordination.

---

### **5. Bugs & Stability**  
High-severity bugs dominate today’s activity list, pointing to stability challenges in core agent workflows:

| Issue | Severity | Summary | Fix Status |
|------|----------|--------|-----------|
| [#11136](https://github.com/zeroclaw-labs/zeroclaw/issues/11136) | **S0** – Data loss / security risk | Concurrent `file_edit`/`file_write` calls silently drop edits | ❌ Open (PR #11225 addresses root cause) |
| [#11197](https://github.com/zeroclaw-labs/zeroclaw/issues/11197) | **S0** – Data loss / security risk | Session resume restores forwarded env after admin revocation | ❌ Open (critical for privilege escalation prevention) |
| [#10785](https://github.com/zeroclaw-labs/zeroclaw/issues/10785) | **S1** – Turn cancellation | Notification lag cancels running turns | ❌ Open (impacts long-running ACP sessions) |
| [#10778](https://github.com/zeroclaw-labs/zeroclaw/issues/10778) | **S1** – History corruption | Multimodal image cap eviction invalidates cache prefix | ❌ Open (affects context integrity) |

> ⚠️ **Critical Risk**: Multiple S0/S1 bugs involve **session state leakage**, **data loss**, and **privilege escalation**, particularly around delegated sub-loops and environment handling. These suggest urgent need for deeper testing in agent lifecycle and sandboxing layers.

---

### **6. Feature Requests & Roadmap Signals**  
Key feature trends point toward **enterprise readiness**, **plugin autonomy**, and **user experience polish**:

- 🎯 **[Per-sender RBAC (#5982)](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)**: Already accepted — likely to be included in **v0.9.0** as part of multi-tenant support.
- 🎯 **[Plugin-owned Kanban Board (#8832)](https://github.com/zeroclaw-labs/zeroclaw/issues/8832)**: Re-classified out of RFC — signals intent to enable plugin self-governance; may appear in v0.9.0+.
- 🎯 **[Persistent Prompt Attachments (#10407)](https://github.com/zeroclaw-labs/zeroclaw/pull/10407)**: Implemented in PR — supports memory persistence and improved chat context fidelity; likely to ship in next minor release.
- 🎯 **[Self-Serve Relay Enrollment (`relay claim`)](https://github.com/zeroclaw-labs/zeroclaw/pull/10592)**: Integrated — enables operator-driven node onboarding; aligns with zero-trust deployment models.

> 📌 **Prediction**: The next major release (**v0.9.0**) will focus on **gateway separation**, **RPC parity**, **OIDC integration**, and **multi-tenant security** — all signaled by recent PRs and issue status.

---

### **7. User Feedback Summary**  
Real-world pain points emerging from issues and PRs include:

- **Security anxiety**: Users report concern over session state being restored post-revocation ([#11197](https://github.com/zeroclaw-labs/zeroclaw/issues/11197)), indicating trust issues in role-based access systems.
- **Tool instability**: Concurrent file operations dropping edits ([#11136](https://github.com/zeroclaw-labs/zeroclaw/issues/11136)) disrupt workflow continuity, especially for developers using agent-assisted coding.
- **Configuration fragility**: Users struggle with schema migration logic ([#11217](https://github.com/zeroclaw-labs/zeroclaw/pull/11217), [#11218](https://github.com/zeroclaw-labs/zeroclaw/pull/11218)) — hints at poor backward compatibility messaging.
- **Feature discoverability**: Many tools (e.g., Jira, Notion) are compiled in by default but require opt-in features ([#11221](https://github.com/zeroclaw-labs/zeroclaw/pull/11221)), suggesting confusion about available capabilities.

> ✅ **Positive sentiment**: High engagement in RFCs and PRs reflects strong user investment. Features like persistent prompts and self-service enrollment are well-received.

---

### **8. Backlog Watch**  
Several high-impact, long-standing issues remain unresolved despite acceptance:

- ⏳ **[#8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289)**: *Tracker: OIDC milestone: canonical principals and inbound authentication*  
  - **Status**: Accepted, core stack merged — yet still open as a "close-out tracker".  
  - **Risk**: Delayed finalization could block broader identity federation in v0.9.0.  
  - **Action needed**: Finalize migration paths and documentation.

- ⏳ **[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)**: *Runtime and gateway delivery - v0.8.6 and v0.9.0*  
  - **Status**: Accepted, foundational work done — but no clear timeline for completion.  
  - **Risk**: Blocks v0.9.0 release if Phase 3 gateway separation stalls.  
  - **Action needed**: Prioritize deliverable mapping and cross-team coordination.

- ⏳ **[#10573](https://github.com/zeroclaw-labs/zeroclaw/issues/10573)**: *Bind gateway pairing tokens to roster users*  
  - **Status**: Accepted, dependencies landed — yet no follow-up PRs in sight.  
  - **Risk**: Pairing tokens may remain loosely tied to nodes, undermining auditability.  
  - **Action needed**: Assign ownership to drive implementation.

---

### **Final Assessment**  
ZeroClaw is in a **high-intensity development phase** with strong technical direction, especially around security, identity, and extensibility. While the project shows excellent community engagement and rapid iteration, **critical S0/S1 bugs related to data integrity and access control** indicate that stability must be prioritized before v0.9.0 launch. The roadmap is clear: **enterprise-grade multi-tenancy, secure delegation, and self-service enrollment** are top priorities. Maintainers should focus on closing high-impact trackers and reducing friction in the RFC and PR processes to sustain momentum.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*