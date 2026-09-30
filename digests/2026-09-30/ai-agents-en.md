# OpenClaw Ecosystem Digest 2026-09-30

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-09-30 01:29 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest – 2026-09-30**

---

### **1. Today's Overview**  
The OpenClaw project remains highly active, with **500 issues and 500 pull requests updated in the last 24 hours**, indicating intense development and community engagement. The ecosystem is under significant stress due to a cluster of high-severity stability and performance bugs—particularly around memory leaks, SQLite WAL corruption, and gateway crash loops—many marked as *P0* or *UX-release-blocker*. Despite this, momentum continues through a steady stream of PRs focused on core stability, UI polish, and infrastructure cleanup. The release of **v2026.8.33 (extended-stable)** signals ongoing commitment to long-term reliability, though users are already reporting critical issues in the current latest version, **2026.9.6**.

---

### **2. Releases**  
**New Release:** `v2026.8.33` — *Extended-Stable (LTS-equivalent)*  
- **Summary**: A maintenance-only release based on the end-of-August 2026 codebase, incorporating **critical security fixes**, **reliability improvements**, and **new model support**.  
- **Key Changes**:  
  - Patched SQLite WAL checkpointing logic (addressing #143524).  
  - Stabilized agent persistence and session state handling.  
  - Added support for new models (e.g., DeepSeek-v4-flash, Claude-Fable-5-1).  
- **Migration Note**: Users should expect minimal disruption; however, those on `2026.9.x` versions may experience regressions not present in this stable branch.  
- **Current Latest Version**: `2026.9.6` (eb377ac) — actively used despite known instability.  
🔗 [GitHub Release v2026.8.33](https://github.com/openclaw/openclaw/releases/tag/v2026.8.33)

---

### **3. Project Progress**  
**Merged/Closed PRs (Today)**: 149  
**Notable Fixes & Advancements**:  
- ✅ **PR #161449** – Reuse prepared model catalogs in extended-stable, resolving validation failures in `2026.8.34`.  
- ✅ **PR #157693** – Prevent failed idle DB cleanup from blocking all agents (directly addresses #157325).  
- ✅ **PR #161422** – Fix new session hang during model catalog load (critical UX blocker).  
- ✅ **PR #161060** – Correct Activity summary card time filter behavior.  
- ✅ **PR #161475** – Hide Git worktree settings for non-Git folders (improves clarity).  
- ✅ **PR #161488** – Preserve reclamation errors when token cleanup fails (prevents silent data loss).  

These fixes reflect a strong focus on **stability**, **user experience**, and **robust error propagation**—especially in edge cases involving database state and plugin lifecycle.

---

### **4. Community Hot Topics**  
Top 5 most commented Issues/PRs today:

| Issue/PR | Comment Count | Severity | Link |
|--------|---------------|----------|------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | 94 | P0 / UX-release-blocker | [SQLite WAL grows to 2.8 GB on Windows](https://github.com/openclaw/openclaw/issues/143524) |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 21 | P1 / Diamond Lobster | [Synchronous agent persistence blocks event loop at scale](https://github.com/openclaw/openclaw/issues/119720) |
| [#157325](https://github.com/openclaw/openclaw/issues/157325) | 15 | P0 / UX-release-blocker | [Stuck agent-DB resource blocks all replies until restart](https://github.com/openclaw/openclaw/issues/157325) |
| [#159612](https://github.com/openclaw/openclaw/issues/159612) | 12 | P0 / Platinum Hermit | [Subagent completion retries forever, re-injecting results](https://github.com/openclaw/openclaw/issues/159612) |
| [#159596](https://github.com/openclaw/openclaw/issues/159596) | 9 | P0 / Silver Shellfish | [Gateway memory sawtooth: 200 critical events/day](https://github.com/openclaw/openclaw/issues/159596) |

**Analysis**:  
- **Windows-specific instability** dominates discussion (#143524, #157325, #158936).  
- **Memory management** is a systemic issue: leaks in `prepared-model-catalog.worker.js` (multiple PRs), unbounded growth, and heap policy override bugs (#159596, #159662, #157575).  
- **Session consistency** is fragile: duplicated replies (#111897), stuck state locks (#159094), and race conditions in agent handoffs.  
- **Community is demanding robustness over new features**—this reflects mature adoption where reliability is now a top-tier requirement.

---

### **5. Bugs & Stability**  
**Critical Stability Issues Reported (P0/P1)**:

| Issue | Summary | Impact | Fix PR? |
|------|--------|--------|--------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | SQLite WAL grows to 2.8 GB on Windows, never checkpointed | Gateway startup blocked | ❌ Pending |
| [#157325](https://github.com/openclaw/openclaw/issues/157325) | Stuck DB resource blocks all agent replies until restart | Full service outage | ❌ Pending |
| [#159596](https://github.com/openclaw/openclaw/issues/159596) | Memory sawtooth pattern: RSS spikes → pressure → worker kill → cycle repeats | Frequent OOM, degraded performance | ❌ Pending |
| [#159662](https://github.com/openclaw/openclaw/issues/159662) | `prepared-model-catalog.worker.js` leaks ~4–5 GB/h | Idle system consumes 10+ GB/h | ❌ Pending |
| [#158095](https://github.com/openclaw/openclaw/issues/158095) | Worker fails to acquire state-lifecycle after one failure | All subsequent turns fail | ❌ Pending |
| [#157160](https://github.com/openclaw/openclaw/issues/157160) | Gateway crash-loop after schema migration | Startup failure | ❌ Pending |

> 🔥 **Pattern**: Multiple issues stem from **inadequate resource isolation**, **missing timeout guards**, and **flawed state ownership tracking**—especially in workers and database layers. These are not isolated but systemic risks affecting production deployments.

---

### **6. Feature Requests & Roadmap Signals**  
Top user-requested enhancements:

| Request | Priority | Use Case | Likely Next Version? |
|-------|----------|---------|---------------------|
| [#16670](https://github.com/openclaw/openclaw/issues/16670) | P2 | Make Memory/Embedding setup mandatory in Onboarding Wizard | ✅ Yes (post-2026.9.7) |
| [#156341](https://github.com/openclaw/openclaw/issues/156341) | P3 | Task-scoped decision models + inspection | ⚠️ Possible in Q4 2026 |
| [#122256](https://github.com/openclaw/openclaw/issues/122256) | P3 | Repeat provider auth setup without full re-onboarding | ✅ High priority |
| [#158231](https://github.com/openclaw/openclaw/issues/158231) | P0 | Update failure: managed-service-preflight (macOS) | 🚨 Critical fix needed |
| [#157531](https://github.com/openclaw/openclaw/issues/157531) | P0 | Tracker for 2026.9.7 fixes | ✅ Target: 2026.9.7 release |

> 💡 **Roadmap Signal**: Users want **predictable, safe upgrades** and **better configurability**. The demand for **non-disruptive updates** and **transparent state management** suggests a shift toward enterprise-grade deployment readiness.

---

### **7. User Feedback Summary**  
Real-world pain points reported by users across platforms:

- **Windows Users**:  
  - Persistent SQLite WAL growth (up to 2.8 GB) causes startup failures.  
  - Scheduled tasks fail silently due to environment cloning issues (#157067).  
  - App watchdog kills slow startups, causing restart loops (#158936).

- **MacOS Users**:  
  - `npm update` fails due to symlink mode fingerprinting (#145072).  
  - Memory leaks in `prepared-model-catalog` worker lead to 10+ GB usage.  
  - `openclaw status` delays port conflict detection (now fixed in #161121).

- **Linux/Container Users**:  
  - Plugin source capture creates massive disk I/O (~6.5 GB per start), wearing out SSDs (#157989).  
  - Gateway crashes after updates due to stale migrations (#157160).  
  - Docker/Synology NAS users hit `ENOSYS` on `openat2` (fix pending in #152839).

> ✅ **Satisfaction**: Users appreciate granular control and extensibility.  
> ❌ **Dissatisfaction**: High frustration with **unstable updates**, **silent failures**, and **resource exhaustion**.

---

### **8. Backlog Watch**  
Long-standing, high-impact Issues needing maintainer attention:

| Issue | Age | Severity | Status | Notes |
|------|-----|----------|--------|-------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | 21 days | P0 | OPEN | Core Windows stability issue; 94 comments |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 46 days | P1 | OPEN | Blocks scalability; no fix PR yet |
| [#157531](https://github.com/openclaw/openclaw/issues/157531) | 6 days | P0 | OPEN | 2026.9.7 fixes tracker — must be prioritized |
| [#157325](https://github.com/openclaw/openclaw/issues/157325) | 6 days | P0 | OPEN | Blocks all agent replies; urgent |
| [#157160](https://github.com/openclaw/openclaw/issues/157160) | 6 days | P0 | CLOSED (but unresolved) | Still crashing after fix applied |
| [#152839](https://github.com/openclaw/openclaw/issues/152839) | 11 days | P0 | OPEN | Docker/Synology compatibility risk |

> ⚠️ **Critical Need**: Maintainers must triage and assign ownership to these **P0 stability blockers** immediately to prevent further degradation in user trust and deployment viability.

---  
**Digest Generated**: 2026-09-30  
**Data Source**: GitHub (openclaw/openclaw) — Last 24h activity  
**Analyst**: AI Agent & Personal Assistant Open-Source Analyst

---

## Cross-Ecosystem Comparison

⚠️ Comparative analysis generation failed.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-09-30**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active with a robust influx of developer engagement: **50 issues and 50 pull requests updated in the last 24 hours**, indicating sustained momentum in both user-reported problems and engineering improvements. The absence of new releases suggests a focus on stabilization and feature refinement ahead of a potential v0.22 release. High activity in Windows, macOS, and remote/VPS use cases points to growing adoption across diverse deployment environments, particularly in desktop and SSH-connected workflows. Despite strong contributor participation, several critical stability issues—especially around session persistence, memory leaks, and crash handling—remain unresolved.

---

### **2. Releases**  
**None**  
No new releases were published as of 2026-09-30. The latest stable version remains v0.21.5+4743.gd23cc6b. Users are advised to stay on current builds due to ongoing instability in key areas (e.g., session state corruption, WebSocket reconnects), and no migration notes or breaking changes are applicable at this time.

---

### **3. Project Progress**  
**Merged/Closed PRs (Today):**  
- `PR #127011` – Fixed lazy Git enrichment in session rows, preventing missing metadata after session creation.  
- `PR #124805` – Resolved a live record corruption issue where session history was lost during rehydration from store.  
- `PR #85190` – Preserved SSH backend configuration after idle cleanup, preventing silent fallbacks.  

These fixes address core **session state integrity** and **profile consistency**, improving reliability for users relying on persistent, multi-session workflows. Notably, the merge of `PR #127011` resolves a long-standing defect (#108784) that impacted Git-integrated agent sessions.

---

### **4. Community Hot Topics**  
Top 3 most-commented issues reflect deep user frustration with **session stability**, **memory management**, and **platform-specific crashes**:

1. **[Issue #95189]** – *Gateway exits uncleanly every ~2 minutes on WSL2*, causing renderer OOM via reconnect churn  
   🔗 [GitHub #95189](https://github.com/NousResearch/hermes-agent/issues/95189)  
   *Underlying Need:* Reliable long-running agents in cloud/remote environments. Users expect seamless background operation without resource exhaustion.

2. **[Issue #121735]** – *Windows Desktop remote client hits ~3.6 GB RAM* despite isolated WSL backend  
   🔗 [GitHub #121735](https://github.com/NousResearch/hermes-agent/issues/121735)  
   *Underlying Need:* Efficient memory usage in desktop clients, especially when acting as remote UIs. This is a top-tier performance concern for Windows users.

3. **[Issue #84361]** – *Desktop MEDIA: file links dead due to regex absorption & URL concat flaws*  
   🔗 [GitHub #84361](https://github.com/NousResearch/hermes-agent/issues/84361)  
   *Underlying Need:* Functional media integration in chat—users expect clickable file links to open locally, not fail silently.

> **Trend Insight:** Users are increasingly deploying Hermes in **multi-machine, remote, or headless setups**, exposing edge cases in session lifecycle, network resilience, and platform compatibility.

---

### **5. Bugs & Stability**  
Critical bugs reported today highlight systemic weaknesses in **session management**, **WebSocket resilience**, and **platform-specific crashes**:

| Severity | Issue | Description | Fix PR? |
|--------|------|-------------|--------|
| P0 | [Issue #128720] | Slack slash commands drop channel/source context | ❌ No fix yet |
| P2 | [Issue #121735] | Windows Desktop renderer consumes ~3.6 GB RAM | ❌ No fix yet |
| P2 | [Issue #124255] | NVIDIA SwiftShader fallback causes silent CPU burn (up to 9 cores) | ✅ Partial fix in `PR #128267` (Electron bump + runtime gate) |
| P2 | [Issue #112961] | Windows `Hermes.exe` aborts with `FAST_FAIL_FATAL_APP_EXIT` at offset `0x5281f15` | ❌ No fix yet |
| P2 | [Issue #127621] | Assistant responses occasionally rendered twice | ❌ No fix yet |

> **Note:** While `PR #128267` addresses the root cause of the GPU/CPU burn, it’s still pending review and may require deeper validation across hardware configurations.

---

### **6. Feature Requests & Roadmap Signals**  
High-value feature requests suggest growing demand for **inter-agent coordination**, **enterprise-grade auth**, and **better observability**:

- **[Feature #103748]** – *Official way to deliver messages into an existing live session*  
  🔗 [GitHub #103748](https://github.com/NousResearch/hermes-agent/issues/103748)  
  *Signal:* Multi-agent orchestration is becoming a common use case. A stable inter-session messaging API could unlock complex automation pipelines.

- **[Feature #119678]** – *Support OpenRouter Decisions-API models for aux tasks (e.g., mcp_approval)*  
  🔗 [GitHub #119678](https://github.com/NousResearch/hermes-agent/issues/119678)  
  *Signal:* Integration with advanced AI governance models is desired. Likely candidate for inclusion in v0.22.

- **[Feature #128612]** – *Add local-primary plugin REST target*  
  🔗 [GitHub #117466](https://github.com/NousResearch/hermes-agent/pull/117466)  
  *Signal:* Plugin system maturity is rising. Local-first plugin routing will improve performance and reduce dependency on external gateways.

> **Prediction:** These features—especially session injection and OpenRouter support—are likely to be prioritized in the upcoming **v0.22 release**, pending community feedback and maintainer bandwidth.

---

### **7. User Feedback Summary**  
Real user pain points reveal three dominant themes:

- **Session Reliability:** Multiple users report losing chats due to WebSocket disconnects (code 1012), orphaned sessions, or incomplete reloads after reconnects ([#69940](https://github.com/NousResearch/hermes-agent/issues/69940), [#81512](https://github.com/NousResearch/hermes-agent/issues/81512)).  
- **Remote UX Friction:** Slow session loads (~20+ seconds), spinner flashes, and memory bloat on Windows remote clients ([#70445](https://github.com/NousResearch/hermes-agent/issues/70445), [#121735](https://github.com/NousResearch/hermes-agent/issues/121735)) degrade usability.  
- **Silent Failures:** Many bugs (e.g., file link failures, approval timeouts) lack visible error logs, leaving users confused and unable to debug ([#84361](https://github.com/NousResearch/hermes-agent/issues/84361), [#84395](https://github.com/NousResearch/hermes-agent/issues/84395)).

> **Satisfaction Level:** Mixed. Power users appreciate extensibility and multi-agent design but express frustration with stability in production-like environments.

---

### **8. Backlog Watch**  
Several high-impact, unanswered issues require urgent maintainer attention:

- **[Issue #123347]** – Group Chat hosted-room worker fails with `_frozen_importlib._DeadlockError` during startup  
  🔗 [GitHub #123347](https://github.com/NousResearch/hermes-agent/issues/123347)  
  *Why it matters:* Blocks group chat functionality on systemd-based deployments—critical for team collaboration.

- **[Issue #128697]** – Plugin publication intermittently fails with "Dependency inputs changed"  
  🔗 [GitHub #128697](https://github.com/NousResearch/hermes-agent/issues/128697)  
  *Why it matters:* Hinders community plugin development and updates; affects trust in the ecosystem.

- **[Issue #127469]** – Approval card dropdown always says "Always allow…" even when not applicable  
  🔗 [GitHub #127469](https://github.com/NousResearch/hermes-agent/issues/127469)  
  *Why it matters:* Misleading UI can lead to accidental permissions grants—security UX flaw.

> **Call to Action:** These issues represent preventable friction in core workflows. Prioritizing triage and assignation would significantly improve user trust and contributor retention.

---

**Project Health Score:** ⚠️ **Moderate–Low**  
While innovation and community engagement remain strong, **stability, error visibility, and memory/resource management** are pressing concerns. Without resolution of top-tier session and crash issues, adoption in production environments may stall. Maintainers should consider a focused **stability sprint** before the next major release.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026-09-30**

---

### **1. Today's Overview**  
The IronClaw project remains highly active with steady momentum in its development lifecycle. In the past 24 hours, five pull requests were opened or updated—including a critical release promotion—and two new issues were raised, indicating ongoing refinement and forward-looking design discussions. The team has successfully promoted `ironclaw-v1.4.1` from release candidate to stable, resolving key OAuth and security concerns. Activity is balanced across core infrastructure (CI, docs, dependencies), user-facing improvements (CLI, Web UI), and strategic feature exploration—suggesting strong internal coordination and sustained contributor engagement.

---

### **2. Releases**  
✅ **`ironclaw-v1.4.1` (2026-09-29)** – Stable release promoted from `1.4.1-rc.2`.  
- **Fixed**: Google OAuth activation now works correctly when the operator supplies credentials via the Web UI (previously required manual config).  
- **Security Update**: Wasmtime dependency upgraded to patch known vulnerabilities.  
- **Migration Note**: No breaking changes; users can upgrade safely via standard update channels. Existing deployments using Google extensions should now function without reconfiguration.  
🔗 [Release Notes](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.4.1)

---

### **3. Project Progress**  
🔹 **Merged PRs (Today):**  
- [#8120](https://github.com/nearai/ironclaw/pull/8120): *chore(release): promote 1.4.1-rc.2 to 1.4.1*  
  → Finalized the stable release process by updating package locks, changelogs, and version tagging. This marks the culmination of RC testing and enables downstream adoption.

🔹 **Key Features Advanced (Open PRs):**  
- [#8119](https://github.com/nearai/ironclaw/pull/8119): *feat(loop-host): opt-in tool selection with embeddings*  
  → Introduces pre-conversation tool ranking using BM25F + embeddings for faster, more accurate tool invocation. Opt-in by default—no impact on existing workflows.  
- [#8117](https://github.com/nearai/ironclaw/pull/8117): *fix(webui): restore focus after closing command palette*  
  → Resolves UX friction: restores input focus after using `Cmd/Ctrl+K`, improving usability during rapid interaction.  
- [#8118](https://github.com/nearai/ironclaw/pull/8118): *fix(cli): report effective config profile*  
  → CLI commands (`config path`, `doctor`, `status`) now correctly reflect the active profile even when `IRONCLAW_REBORN_PROFILE` is unset—enhancing transparency.

---

### **4. Community Hot Topics**  
🔥 **#7889** – *[RFC]: Extend scheduler/orchestrator with opt-in remote edge workers*  
- **Author**: kvnloo | **Updated**: 2026-09-29 | **Comments**: 1  
- **Summary**: Proposes enabling distributed worker pools across multiple hosts—critical for operators with idle compute capacity. Addresses scalability limits of single-host deployment.  
- **Analysis**: Signals growing demand for decentralized execution models. If adopted, this could unlock large-scale agent orchestration across edge networks.  

🔥 **#8113** – *Proposal: opt-in turn-0 tool selection (BM25F + embeddings)*  
- **Author**: CjS77 | **Created**: 2026-09-27 | **Comments**: 0 | **PR Open**: #8119  
- **Summary**: Before first model call, rank tools based on user message context and suggest top candidates—eliminating one round-trip to `tool_search`. Fully opt-in.  
- **Analysis**: High-priority UX and performance enhancement. Aligns with trends in LLM agent efficiency (e.g., tool-aware prompting). Likely to be prioritized in v1.5.

---

### **5. Bugs & Stability**  
⚠️ **No critical bugs or crashes reported today**.  
- All recent PRs are low-risk (XS–M) and focused on UX, configuration clarity, or dependency hygiene.  
- **Security note**: The Wasmtime update in v1.4.1 mitigates potential sandbox escape risks—important for production use.  
- No regressions reported post-release.  
👉 *Note*: Issue #7889 touches on stability at scale but is not a bug—it’s a forward-looking architectural proposal.

---

### **6. Feature Requests & Roadmap Signals**  
📈 **Emerging Themes for v1.5+**:  
- **Distributed Worker Pools** (#7889): Strong indication that users want to leverage idle hardware across networks—potentially enabling federated AI agents.  
- **Turn-0 Tool Selection** (#8113 / PR #8119): Could become a cornerstone of future agent efficiency, reducing latency and improving prompt fidelity.  
- **Enhanced Config Transparency** (#8118): Suggests growing need for visibility into runtime state—especially in complex multi-profile setups.  

These signals point toward a roadmap centered on **scalability**, **performance optimization**, and **user control**—not just security and sandboxing.

---

### **7. User Feedback Summary**  
💬 **Pain Points Identified**:  
- Operators struggle with Google OAuth setup when using Web UI (now fixed in v1.4.1).  
- Users find repeated `tool_search` calls inefficient—especially in conversational flows where early tool discovery matters.  
- CLI feedback about unclear config profiles causes confusion during debugging.  

💡 **Positive Signals**:  
- High interest in advanced features like embedding-based tool ranking suggests users are pushing beyond basic agent tasks into complex, multi-step workflows.  
- Contributors are actively proposing solutions rather than reporting failures—indicating strong confidence in the platform.

---

### **8. Backlog Watch**  
🔍 **Critical Long-Unanswered Items**:  
- **#7889** – *RFC: extend scheduler with remote edge workers*  
  - Open since 2026-08-25 (35 days), no maintainer response yet.  
  - High-impact idea with clear user demand. Should be reviewed for inclusion in next major milestone.  
  🔗 [Issue #7889](https://github.com/nearai/ironclaw/issues/7889)  

- **#7988** – *chore(agents): refresh codebase knowledge graph*  
  - Automatically triggered by CI bot; requires review and merge.  
  - Critical for maintaining up-to-date code understanding in agent reasoning—should not be delayed.  
  🔗 [PR #7988](https://github.com/nearai/ironclaw/pull/7988)  

> ✅ **Recommendation**: Assign maintainers to triage #7889 and approve #7988 promptly to sustain momentum.

---  
**Project Health Score**: 🟢 **Stable & Growing**  
IronClaw continues to evolve as a secure, extensible, and user-driven open-source AI agent platform—with clear signals of increasing maturity and community sophistication.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-09-30**

---

### **1. Today's Overview**  
The QwenPaw project remains highly active, with 36 pull requests and 11 open issues updated in the past 24 hours—indicating strong ongoing development momentum. The core team is focusing on stability improvements, especially around task tracking, model fallback logic, and desktop platform reliability. A surge in bug reports related to OpenAI integration, transcription configuration, and UI responsiveness suggests growing real-world usage across diverse environments. Despite no new releases, significant progress is being made in critical areas like session resilience, security hardening, and cross-platform compatibility.

---

### **2. Releases**  
*No new releases published as of 2026-09-30.*  
The latest stable version remains **v2.2.1** (PyPI), with `2.2.2b3` used in desktop builds. No breaking changes or migration notes are currently required. Maintainers are likely preparing for a patch release to address high-priority bugs reported today.

> 🔗 [GitHub Release Page](https://github.com/agentscope-ai/QwenPaw/releases)

---

### **3. Project Progress**  
**Merged/Closed PRs (Today):**
- ✅ **PR #8025** (`fix(desktop): disable NSIS solid compression`) — Resolves installer corruption risks on Windows.
- ✅ **PR #8026** (`fix(ci): address cross-platform paths, sandbox cleanup, and Windows terminal interrupts`) — Improves CI robustness across OSes.
- ✅ **PR #8024** (`fix(portability): reject invalid qoder timezones`) — Prevents crashes due to malformed timezone inputs.
- ✅ **PR #7773**, **#7765**, **#7718** — Fix Telegram-specific issues: handshake handling, command addressing, and markdown rendering.
- ✅ **PR #8007** (WIP merged) — Fixes TaskTracker race condition by registering runs only after producer tasks exist.

These fixes enhance system reliability, especially for desktop users and multi-platform deployments.

> 🔗 [PR #8025](https://github.com/agentscope-ai/QwenPaw/pull/8025) | [PR #8026](https://github.com/agentscope-ai/QwenPaw/pull/8026) | [PR #8024](https://github.com/agentscope-ai/QwenPaw/pull/8024)

---

### **4. Community Hot Topics**  
Top community concerns center on **integration stability**, **UI usability**, and **system resilience**:

- **Issue #8036** ([Open](https://github.com/agentscope-ai/QwenPaw/issues/8036)): *OpenAI image/model failures despite passing connection tests*.  
  ➤ **Underlying Need**: Users demand reliable error feedback—not generic “retry” messages—and better diagnostics for API credential validation.

- **Issue #8015** ([Open](https://github.com/agentscope-ai/QwenPaw/issues/8015)): *Request for self-hosted Skill/Plugin marketplace support*.  
  ➤ **Signal**: Growing interest in air-gapped/intranet deployments. This feature could unlock enterprise adoption.

- **PR #8034** ([Open](https://github.com/agentscope-ai/QwenPaw/pull/8034)): *Limit inline media per request (not just per file)*.  
  ➤ **High Impact**: Addresses potential DoS via massive image payloads; aligns with security best practices.

> 🔗 [Issue #8036](https://github.com/agentscope-ai/QwenPaw/issues/8036) | [Issue #8015](https://github.com/agentscope-ai/QwenPaw/issues/8015) | [PR #8034](https://github.com/agentscope-ai/QwenPaw/pull/8034)

---

### **5. Bugs & Stability**  
Critical stability issues reported today include:

| Severity | Issue | Summary | Fix PR? |
|--------|-------|--------|--------|
| ⚠️ High | [#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) | TaskTracker shows inconsistent "2 running tasks" vs actual API count | ❌ No fix yet |
| ⚠️ High | [#8030](https://github.com/agentscope-ai/QwenPaw/issues/8030) | Large skill download fails due to frontend timeout (30s) | ✅ **PR #8027** in progress (offloads to worker thread) |
| ⚠️ Medium | [#8035](https://github.com/agentscope-ai/QwenPaw/issues/8035) | Transcription settings cannot update `transcription_model` | ❌ Pending |
| ⚠️ Medium | [#8022](https://github.com/agentscope-ai/QwenPaw/issues/8022) | `send_file_to_user` pollutes context → persistent 400 errors | ❌ No fix yet |
| ⚠️ Low | [#8013](https://github.com/agentscope-ai/QwenPaw/issues/8013) | Large skill download times out in UI (30s) | ✅ **PR #8027** addresses root cause |

> 🔗 [Issue #7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) | [Issue #8030](https://github.com/agentscope-ai/QwenPaw/issues/8030) | [PR #8027](https://github.com/agentscope-ai/QwenPaw/pull/8027)

---

### **6. Feature Requests & Roadmap Signals**  
Emerging roadmap themes from user requests:

- **Self-hosted Plugin Marketplace** ([#8015](https://github.com/agentscope-ai/QwenPaw/issues/8015))  
  ➤ Strong signal for **enterprise/intranet deployment readiness**. Likely to be prioritized in v2.3.

- **Customizable Desktop Font Size** ([#7999](https://github.com/agentscope-ai/QwenPaw/issues/7999))  
  ➤ Simple but impactful UX improvement. Tagged as `good first issue`, suggesting early implementation.

- **HEARTBEAT_OK / CRON_OK Control** ([#2359](https://github.com/agentscope-ai/QwenPaw/issues/2359))  
  ➤ Indicates desire for **fine-grained control over automated agent behavior**, possibly for workflow orchestration.

- **Durable Paginated Transcript History** ([PR #7931](https://github.com/agentscope-ai/QwenPaw/pull/7931))  
  ➤ Suggests long-term chat persistence needs; may become core functionality in next major release.

> 🔗 [Feature #8015](https://github.com/agentscope-ai/QwenPaw/issues/8015) | [PR #7931](https://github.com/agentscope-ai/QwenPaw/pull/7931)

---

### **7. User Feedback Summary**  
Real user pain points reflect mature usage patterns:
- **Integration Fragility**: OpenAI image generation fails even when connectivity passes—users expect actionable error messages, not vague “retry” prompts ([#8036](https://github.com/agentscope-ai/QwenPaw/issues/8036)).
- **Desktop Experience Gaps**: Linux zoom shortcuts don’t work ([#6252](https://github.com/agentscope-ai/QwenPaw/issues/6252)), font size unchangeable ([#7999](https://github.com/agentscope-ai/QwenPaw/issues/7999)), and large downloads fail silently.
- **Context Pollution**: File sends + empty assistant messages break downstream models, causing persistent 400 errors ([#8022](https://github.com/agentscope-ai/QwenPaw/issues/8022))—a sign of deep context management challenges.
- **Security Awareness**: Users are sensitive to COM automation risks on Windows ([PR #8028](https://github.com/agentscope-ai/QwenPaw/pull/8028)).

Overall satisfaction appears mixed: powerful capabilities exist, but usability and reliability gaps hinder production use.

---

### **8. Backlog Watch**  
**Longstanding, high-impact issues needing maintainer attention:**

- 🔴 **[#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991)**: TaskTracker inconsistency between dashboard and API counts.  
  ➤ Critical for trust in system state. Has been open since 2026-09-26 with no fix PR yet.

- 🔴 **[#2359](https://github.com/agentscope-ai/QwenPaw/issues/2359)**: Request for HEARTBEAT_OK/CRON_OK control.  
  ➤ Over 6 months old; signals need for advanced automation control.

- 🔴 **[#7946](https://github.com/agentscope-ai/QwenPaw/issues/7946)**: QQ gateway replays events on resume → duplicate processing.  
  ➤ Closed but unresolved in practice—still affecting users on stable release.

> 🔗 [Issue #7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) | [Issue #2359](https://github.com/agentscope-ai/QwenPaw/issues/2359) | [Issue #7946](https://github.com/agentscope-ai/QwenPaw/issues/7946)

---

### **Conclusion**  
QwenPaw is in a phase of **intensive stabilization and usability refinement**. While no new releases have landed, the velocity of PRs and issue activity indicates a healthy, active development cycle. Priorities should focus on resolving high-severity bugs (especially TaskTracker inconsistency), enabling self-hosted plugin markets, and improving desktop UX. With strong community engagement and clear roadmap signals, **QwenPaw is poised for a major v2.3 release** focused on enterprise readiness and robustness.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest**  
**Date:** 2026-09-30  
**Repository:** [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

### **1. Today's Overview**

The ZeroClaw project remains highly active, with **27 new issues and 50 pull requests updated in the last 24 hours**, indicating strong momentum in both feature development and issue triage. The community is focused on **security hardening, memory architecture evolution, and CLI/tooling improvements**, particularly around identity access control (IAM), plugin management, and context handling. Despite no new releases, multiple high-severity fixes are being prioritized—especially for S0/S1 security risks related to session ownership and delegated memory. The project continues its aggressive refactoring phase, notably advancing Schema V4 cleanup and moving toward a more modular, secure agent runtime.

---

### **2. Releases**

> ❌ **No new releases** were published as of 2026-09-30.

There are **no release notes or breaking changes** to report. The team appears to be preparing for a major version bump (likely v0.10.x) post-schema V4 stabilization, though no official announcement has been made.

---

### **3. Project Progress**

#### ✅ **Merged / Closed PRs (Today)**

| PR | Summary | Link |
|----|--------|------|
| #11260 | Fixes context budget clamping at 32k tokens — now respects `max_context_tokens = 131072` | [PR #11260](https://github.com/zeroclaw-labs/zeroclaw/pull/11260) |
| #11238 | Resolves config editor inability to write declarative cron schedules (`cron.<alias>.schedule` as tagged object) | [PR #11238](https://github.com/zeroclaw-labs/zeroclaw/pull/11238) |
| #11261 | Implements staged package replacement for plugins — foundational step for `plugin update` | [PR #11261](https://github.com/zeroclaw-labs/zeroclaw/pull/11261) |
| #11262 | Adds `zeroclaw plugin update` CLI command with verified replacement and rollback | [PR #11262](https://github.com/zeroclaw-labs/zeroclaw/pull/11262) |

These merged PRs represent critical progress in:
- Fixing long-standing context window bugs.
- Enabling robust plugin lifecycle management.
- Improving configuration ergonomics (cron, schema).

---

### **4. Community Hot Topics**

#### 🔥 **Most Active Issue: #11235 – RFC: Knowledge corpus — document retrieval (RAG) for the agent**  
- Created: 2026-09-29 | Comments: 1 | Status: Open  
- **Link**: [Issue #11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235)  
- **Why it matters**: This RFC signals a strategic shift toward **agent-powered RAG (Retrieval-Augmented Generation)** as a core capability. It reflects growing demand for agents to reason over private documentation, policies, and technical references—essential for enterprise-grade AI assistants.

#### 🔥 **Most Active PR: #11218 – fix(config): migrate retired keys at schema V4 and warn on missing schema_version**  
- Created: 2026-09-28 | Comments: undefined | Status: Open  
- **Link**: [PR #11218](https://github.com/zeroclaw-labs/zeroclaw/pull/11218)  
- **Why it matters**: This is part of the **Schema V4 migration effort**, which aims to eliminate deprecated config surfaces. Its high visibility shows that the community is actively preparing for a breaking change—critical for long-term maintainability.

#### 🔥 **High-Impact Security PR: #11261 + #11262 (staged plugin replacement & update)**  
- Both PRs stacked and merged today; linked via dependency chain.  
- **Link**: [PR #11261](https://github.com/zeroclaw-labs/zeroclaw/pull/11261), [PR #11262](https://github.com/zeroclaw-labs/zeroclaw/pull/11262)  
- **Why it matters**: These address a **major usability gap**: no safe way to update plugins. The addition of verified replacement and rollback is a key step toward production-grade plugin safety.

---

### **5. Bugs & Stability**

| Severity | Issue | Summary | Fix PR? | Link |
|---------|------|--------|--------|------|
| **S0** | #11197 – Session resume restores forwarded environment after admin revocation | Security breach: revoked admins regain access | ❌ No fix yet | [Issue #11197](https://github.com/zeroclaw-labs/zeroclaw/issues/11197) |
| **S0** | #11198 – Delegated memory tools lose principal scope | Child agents access parent’s private memory | ❌ No fix yet | [Issue #11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) |
| **S0** | #11123 – SOP execution accepts wildcard tool selectors without `tools:execute` | Unauthorized tool access via policy bypass | ❌ No fix yet | [Issue #11123](https://github.com/zeroclaw-labs/zeroclaw/issues/11123) |
| **S0** | #11239 – Owned sessions reach shared memory plane through `spawn_subagent` | Memory isolation failure | ❌ No fix yet | [Issue #11239](https://github.com/zeroclaw-labs/zeroclaw/issues/11239) |
| **S1** | #11229 – Prevent session ownership migration from recreating deleted metadata | Race condition leads to orphaned sessions | ❌ No fix yet | [Issue #11229](https://github.com/zeroclaw-labs/zeroclaw/issues/11229) |
| **S2** | #11257 – WhatsApp Web drops inbound media captions | Loss of contextual metadata | ❌ No fix yet | [Issue #11257](https://github.com/zeroclaw-labs/zeroclaw/issues/11257) |
| **S2** | #11256 – `initial_prompt` not sent to transcription providers | Missing config behavior | ❌ No fix yet | [Issue #11256](https://github.com/zeroclaw-labs/zeroclaw/issues/11256) |
| **S2** | #11215 – Tool calling fails on OpenCode Go due to `"name"` field rejection | Incompatibility with OpenAI-compatible provider | ✅ Partial fix: PR #11215 pending review | [Issue #11215](https://github.com/zeroclaw-labs/zeroclaw/issues/11215) |

> ⚠️ **Critical Note**: **Five S0 security vulnerabilities remain open**—all related to **identity, access, and memory isolation**. This indicates urgent need for review and patching before next release.

---

### **6. Feature Requests & Roadmap Signals**

| Feature | Requested By | Status | Predicted Timeline |
|-------|--------------|--------|-------------------|
| **Knowledge Graph as First-Class Memory Layer** | RO-mix | Accepted, RFC | Likely Q4 2026 |
| **Document Retrieval (RAG) via Knowledge Corpus** | ConYel | New RFC | High priority for next sprint |
| **Plugin Update with Rollback** | JordanTheJet, IftekharUddin | Implemented | Ready for v0.10.x |
| **Standard Text Editing in ZeroCode Composer** | Audacity88 | In-progress | Late Q4 |
| **Wecom Proactive Messaging & Media Support** | jokewithme110 | Icebox | Post-v0.10 |
| **A2A Protocol Crate (zeroclaw-a2a)** | kingstar001 | RFC | Architecture phase |

> 📌 **Roadmap Signal**: The project is shifting from *tool integration* to *agent-centric intelligence*. Key themes:
> - **Memory-first design** (knowledge graph, RAG).
> - **Secure delegation and identity** (OIDC, SOP, session ownership).
> - **Developer experience** (ZeroCode, CLI, config UX).

---

### **7. User Feedback Summary**

- **Pain Points**:
  - Users struggle with **context limits** (32k cap despite config override) — affects long-form reasoning.
  - **Plugin management** is broken: no `update` command, risky re-installation.
  - **Media handling** (WhatsApp/Web) loses caption data, reducing agent understanding.
  - **Config editing** fails on declarative cron syntax — blocks automation setup.

- **Use Cases**:
  - Enterprise users need **document-aware agents** (e.g., compliance, internal docs).
  - Developers want **safe, auditable plugin updates**.
  - DevOps teams rely on **cron-triggered agents** but lack context about their own jobs.

- **Satisfaction**:
  - Positive sentiment around **schema cleanup** and **CLI improvements**.
  - High praise for **recent security-focused PRs** (e.g., staged plugin replacement).

---

### **8. Backlog Watch**

| Issue | Priority | Status | Why It Needs Attention |
|------|----------|--------|------------------------|
| #11197 – Session resume restores forwarded env after revocation | P0 | Open | Critical security risk; could enable privilege escalation |
| #11198 – Delegated memory tools lose principal scope | P0 | Open | Breaks privacy model; allows data leakage |
| #11239 – Owned sessions access shared memory | P0 | Open | Fundamental memory isolation flaw |
| #11257 – WhatsApp caption loss | P2 | Open | Degraded UX for media-rich workflows |
| #11255 – Save inbound WhatsApp images to workspace | P2 | Open | Needed for consistent agent memory |
| #11235 – RFC: Knowledge corpus (RAG) | P2 | Open | Core capability for knowledge-intensive agents |

> 🔔 **Action Required**: Maintainers must prioritize **S0 security issues** and **RFCs** shaping the future of agent memory and identity. These are not just bugs—they define the project’s trustworthiness and scalability.

---

### ✅ **Final Assessment: Project Health – High Activity, High Risk, High Potential**

ZeroClaw is in a **critical transition phase**: cleaning up legacy code (Schema V4), hardening security, and evolving toward a knowledge-aware, agent-native platform. While **development velocity is excellent**, the **open S0 bugs pose serious risks**. The project is well-positioned for a major v0.10 release if security and stability concerns are addressed promptly.

> 📊 **Recommendation**: Prioritize S0 bug fixes and RFCs (#11235, #11053) in the next sprint. Prepare release notes for Schema V4 migration. Consider a “security release” cycle for v0.9.5 to address critical vulnerabilities.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*