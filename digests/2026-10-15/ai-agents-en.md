# OpenClaw Ecosystem Digest 2026-10-15

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-10-15 00:48 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest – 2026-10-15**

---

### **1. Today's Overview**  
The OpenClaw project remains highly active with **500 issues and 500 pull requests updated in the last 24 hours**, indicating intense development and community engagement. The ecosystem is experiencing significant strain, particularly around stability and performance—P0 and P1 bugs related to SQLite WAL growth, plugin loading stalls, and gateway startup hangs dominate the issue tracker. Despite no new releases, the momentum in PRs suggests a wave of fixes and refactors are nearing integration. High-severity crashes and UX blockers (e.g., uninformative error messages) highlight ongoing challenges in reliability and diagnostics.

---

### **2. Releases**  
⚠️ **No new releases** were published in the past 24 hours. The most recent stable version remains **2026.9.8**, with beta candidates (2026.10.5-beta.1/2) under testing. No release notes or migration guidance have been issued for these updates.

> 🔗 [GitHub Release History](https://github.com/openclaw/openclaw/releases)

---

### **3. Project Progress**  
✅ **Merged/Closed PRs**:  
- **PR #172527** (`fix(cron): restore owner app reauthorization on October`) – Restores missing Codex app authorization after tool changes; critical for automation reliability.  
- **PR #172659** (`fix(novita): send max_tokens on chat completions`) – Resolves Novita API rejection due to malformed request shape.  
- **PR #172630** (`fix(memory): accept limit as the memory_search result cap`) – Fixes validation failure when `limit` is passed to `memory_search`.  

🔧 **Key Advances**:  
- Refactoring of UI rendering (Lit → Solid) continues across multiple components (**PRs #171979, #171558, #171846, #171942**), reducing dependency overhead and improving maintainability.  
- Security hardening: **PR #172669** removes verbose logging of private reply text and deslopes infra paths, enhancing data privacy.

---

### **4. Community Hot Topics**  
🔥 **Top Issues by Engagement**:
| Issue | Summary | Comments | Severity | Link |
|------|--------|----------|----------|------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | Agent SQLite WAL grows to 2.8 GB, blocks startup (Windows) | 125 | 🦞 Diamond Lobster (P0) | [View Issue](https://github.com/openclaw/openclaw/issues/143524) |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway blocks for minutes during large plugin capture (2026.9.6 regression) | 22 | 🦞 Diamond Lobster (P0) | [View Issue](https://github.com/openclaw/openclaw/issues/160959) |
| [#152981](https://github.com/openclaw/openclaw/issues/152981) | Gateway startup hangs (~17 min) at model runtime publish | 19 | 🦞 Diamond Lobster (P0) | [View Issue](https://github.com/openclaw/openclaw/issues/152981) |

💡 **Underlying Needs**:  
- **Critical stability** in database handling (WAL checkpointing, autocheckpoint failures).  
- **Performance isolation** during plugin loading and model initialization.  
- **Reliable state management** under high-load scenarios (crash loops, session loss).

🔥 **Top PRs by Engagement**:
| PR | Summary | Comments | Status | Link |
|----|--------|----------|--------|------|
| [#172608](https://github.com/openclaw/openclaw/pull/172608) | Stabilize Models page load (no flicker/reload) | — | ⏳ Waiting on author | [View PR](https://github.com/openclaw/openclaw/pull/172608) |
| [#172607](https://github.com/openclaw/openclaw/pull/172607) | Remember native runtime consent per agent | — | ⏳ Waiting on author | [View PR](https://github.com/openclaw/openclaw/pull/172607) |

➡️ **Signal**: Users demand **persistent UX decisions** (consent, settings) and **predictable UI behavior**—indicating maturity in user expectations beyond core functionality.

---

### **5. Bugs & Stability**  
🚨 **Critical Bugs (P0)**:
- **[#143524](https://github.com/openclaw/openclaw/issues/143524)**: SQLite WAL grows unchecked (2.8 GB), blocking startup. *No fix PR yet*.  
- **[#152981](https://github.com/openclaw/openclaw/issues/152981)**: 17-minute hang during model runtime publish. *Regression from 2026.9.5*.  
- **[#160959](https://github.com/openclaw/openclaw/issues/160959)**: Plugin capture causes 1–2 minute main-thread block. *Regression from 2026.9.6*.

🛠️ **High-Impact P1 Bugs**:
- **[#157989](https://github.com/openclaw/openclaw/issues/157989)**: Plugin source capture rewrites 1.1–1.4 GB per CLI command → severe SSD wear. *No fix PR*.  
- **[#163029](https://github.com/openclaw/openclaw/issues/163029)**: External plugin reloads mid-turn (40–70 s stalls) despite prior fix (#160658). *Still reproducible*.  
- **[#164294](https://github.com/openclaw/openclaw/issues/164294)**: Gateway state DB WAL auto-checkpoint never completes (blocked by reader).

❌ **Crashes & Failures**:
- **[#166221](https://github.com/openclaw/openclaw/issues/166221)**: Update from 2026.9.4 → 2026.9.8 fails during preflight snapshot. *Standalone worker works*.  
- **[#168895](https://github.com/openclaw/openclaw/issues/168895)**: Update failure: retired-state-format (2026.9.9). *Confirmed in OpenClaw*.  
- **[#172395](https://github.com/openclaw/openclaw/issues/172395)**: Update failure: package-swap (2026.9.9). *Confirmed in OpenClaw*.

📌 **Fix PRs Exist For**:  
- ✅ `#164294` – Fix pending review.  
- ✅ `#157989` – Fix PR exists but not merged.  
- ✅ `#166221` – Root cause unresolved; no fix PR submitted.

---

### **6. Feature Requests & Roadmap Signals**  
🎯 **Top Feature Requests**:
| Feature | User Need | Priority | Link |
|--------|-----------|----------|------|
| **Configurable memory recall eligibility & index exclusion paths** | Exclude generated artifacts from search/recall in markdown-first workspaces | P2 | [#101422](https://github.com/openclaw/openclaw/issues/101422) |
| **Allow pinning plugin tabs in Control UI sidebar** | Persistent access to frequently used plugin surfaces | P3 | [#111143](https://github.com/openclaw/openclaw/issues/111143) |
| **Use assistant avatar in macOS Talk Mode overlay** | Consistent identity display across platforms | P3 | [#70266](https://github.com/openclaw/openclaw/issues/70266) |

📈 **Predicted Inclusion in Next Version (2026.10.x)**:
- Native runtime consent persistence (**PR #172607**) – high signal from maintainer attention.
- Plugin tab pinning (**Issue #111143**) – low-hanging fruit, aligns with UI polish phase.
- Memory search `limit` acceptance (**PR #172630**) – already fixed, likely backported.

---

### **7. User Feedback Summary**  
💬 **Real Pain Points**:
- **"The CLI command failed."** with no reason (Issue #172053) → **undetectable systemd crash loops**. Users cannot diagnose startup failures without `doctor`.
- **Plugin capture consumes 6.5 GB per start** (Issue #157989) → users report **SSD wear** and storage exhaustion.
- **Agent prompts appear out of nowhere** (Issue #151962) → internal runtime strings misclassified as user input → breaks trust in session history.
- **Android/Termux fails with EACCES** on SQLite snapshot creation (Issue #167791) → limits mobile adoption.

🎉 **Satisfaction Signals**:
- Users appreciate **refactor progress** (UI, dependency cleanup).
- Confirmed fixes like `#172527` (cron reauth) and `#172659` (Novita) indicate responsive maintenance.
- **Active contributor engagement** (e.g., PRs with proof, screenshots) signals healthy collaboration.

---

### **8. Backlog Watch**  
🔍 **Long-Unanswered Critical Issues**:
| Issue | Age | Status | Notes |
|------|-----|--------|-------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | 6 days | Open, P0 | WAL growth blocks startup; no fix PR. |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) | 19 days | Open, P1 | Severe SSD wear; no fix PR merged. |
| [#164294](https://github.com/openclaw/openclaw/issues/164294) | 11 days | Open, P1 | WAL checkpoint permanently blocked. |
| [#166221](https://github.com/openclaw/openclaw/issues/166221) | 8 days | Open, P0 | Update failure with no root cause. |

🔍 **High-Value PRs Needing Attention**:
| PR | Age | Status | Notes |
|----|-----|--------|-------|
| [#172607](https://github.com/openclaw/openclaw/pull/172607) | 1 day | ⏳ Waiting on author | Native consent persistence – key UX win. |
| [#172608](https://github.com/openclaw/openclaw/pull/172608) | 1 day | ⏳ Waiting on author | Stable Models page – visual polish. |
| [#172664](https://github.com/openclaw/openclaw/pull/172664) | 1 day | 📣 Needs proof | Security advisories on MCP & source-map. |

---

> ✅ **Final Assessment**: OpenClaw is **functionally powerful but operationally fragile**. While UI and architecture improvements are advancing, **core stability and diagnostic clarity remain major hurdles**. Immediate focus should be on **SQLite WAL corruption, plugin loading performance, and update reliability**. The community is vocal and engaged—but patience is wearing thin. A **hotfix release targeting P0 regressions** is urgently needed.

🔗 **Project Dashboard**: [github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Ecosystem – 2026-10-15**

---

### **1. Ecosystem Overview**  
The open-source personal AI assistant and agent ecosystem is entering a maturity phase marked by architectural consolidation, cross-project convergence on core runtime patterns, and growing pressure to deliver stability at scale. Projects are shifting from rapid feature development toward reliability, diagnostics, and enterprise-grade operational resilience. While innovation in agent orchestration, multi-channel integration, and human-in-the-loop workflows continues, the dominant theme across all major projects is **operational fragility**—manifested in database corruption, silent task failures, and session instability. This signals that the community has outgrown early experimentation and now demands production-grade trust.

---

### **2. Activity Comparison**

| Project        | Issues (24h) | PRs (24h) | Releases (24h) | Health Score (10) | Status         |
|----------------|--------------|-----------|------------------|--------------------|----------------|
| **OpenClaw**   | 500          | 500       | ❌ No            | 6.8                | High stress    |
| **Hermes Agent** | 50           | 50        | ✅ v0.22.1       | 7.9                | Milestone phase|
| **QwenPaw**    | 13           | 34        | ✅ v2.2.2-beta.6 | 8.4                | Stabilization  |
| **ZeroClaw**   | 28           | 50        | ❌ No            | 7.2                | Pre-release    |
| **IronClaw**   | 0            | 0         | ❌ No            | —                  | Dormant        |

> *Note: OpenClaw and ZeroClaw show extreme activity but with high risk; QwenPaw and Hermes represent stable momentum with focused improvement.*

---

### **3. OpenClaw's Position**  
OpenClaw stands as the most technically ambitious project in the ecosystem, with aggressive refactoring (Lit → Solid UI), deep plugin architecture, and broad API surface. Its **core differentiator** lies in its focus on **agent autonomy and long-term memory management**, enabling complex automation chains via codex apps and cron-driven workflows. However, this comes at the cost of **operational fragility**: its P0 issues (e.g., SQLite WAL growth, startup hangs) indicate a systemic failure to manage state and resource isolation—unlike peers who have stabilized their runtimes. Community size appears largest (500+ daily PRs/issues), but engagement is increasingly strained due to unrecoverable crashes and poor error messaging. Compared to Hermes (mature gateway), QwenPaw (focused UX), or ZeroClaw (channel-first), OpenClaw is **pushing boundaries at the expense of reliability**—a classic “early mover” risk.

---

### **4. Shared Technical Focus Areas**  
Across all active projects, the following technical requirements are emerging as **cross-cutting pain points**:

| Requirement                          | Projects Affected               | Specific Needs                                                                 |
|--------------------------------------|----------------------------------|--------------------------------------------------------------------------------|
| **SQLite/WAL Management & Autocheckpoints** | OpenClaw, ZeroClaw              | Prevent unbounded WAL growth; ensure checkpoint completion under load.         |
| **Silent Task Cancellation / Session Loss** | QwenPaw, OpenClaw, ZeroClaw     | Avoid abrupt termination of cron jobs, inter-agent calls, or long-running turns. |
| **Plugin/Agent State Persistence**   | OpenClaw, Hermes, QwenPaw, ZeroClaw | Maintain consent, settings, and execution context across restarts.             |
| **Cross-Platform Stability (Windows/macOS)** | Hermes, OpenClaw, QwenPaw      | Fix file system access, path resolution, and process lifecycle bugs.           |
| **Secure, Configurable Channel Integration** | ZeroClaw, Hermes, QwenPaw       | Support private CA, STARTTLS, attachment storage, auto-reply filtering.        |

> 🔍 **Pattern**: The ecosystem is converging on **runtime-level consistency**—not just features, but predictable behavior under load, restarts, and network changes.

---

### **5. Differentiation Analysis**

| Dimension                 | **OpenClaw**                            | **Hermes Agent**                        | **QwenPaw**                             | **ZeroClaw**                              |
|----------------------------|------------------------------------------|------------------------------------------|------------------------------------------|---------------------------------------------|
| **Feature Focus**          | Full-stack automation, agent persistence | Multi-platform chat agents, CLI tools   | Human-in-the-loop, Python scripting     | Email/messaging channel fidelity            |
| **Target Users**           | DevOps, researchers, builders            | Developers, community bots              | Enterprise automation, workflow designers | Ops teams, IT integrators                   |
| **Technical Architecture** | Monolithic + plugin-heavy                | Unified gateway runtime (v0.22.0+)      | Modular toolset, config-driven          | A2A protocol RFC, modular channels          |
| **Stability Priority**     | Low (high-risk P0 backlog)               | Medium (post-v0.22.0 regressions)       | High (beta stabilization)               | High (S1/S2 data loss risks)                |
| **Deployment Model**       | Local + self-hosted                      | Cross-platform (desktop, Docker)        | Desktop/console, Docker Hub support     | On-prem, email gateways                     |

> ✅ **Key Insight**: OpenClaw leads in **capability breadth**, while ZeroClaw and QwenPaw prioritize **integration depth and usability**. Hermes is bridging both worlds with a unified runtime—but at the cost of complexity.

---

### **6. Community Momentum & Maturity**  

| Tier                  | Projects                                  | Indicators                                                                 |
|-----------------------|--------------------------------------------|----------------------------------------------------------------------------|
| **Rapid Iteration**   | OpenClaw, ZeroClaw                         | 500+ PRs/issues/day; active RFCs, frequent experimental merges.            |
| **Stabilization Phase** | QwenPaw, Hermes Agent                    | Beta releases with clear fix focus; fewer critical regressions.            |
| **Dormant/Declining** | IronClaw                                   | No activity for 24h; no recent commits or issues.                          |

> 📈 **Maturity Signal**: Projects with **stable release cadences** (Hermes v0.22.1, QwenPaw beta.6) and **low P0 bug counts** are transitioning from “innovation mode” to “production readiness.” OpenClaw remains in **high-stress iteration**, indicating unresolved foundational flaws.

---

### **7. Trend Signals**  
Based on community feedback and project trajectory, the following industry trends are emerging:

1. **Operational Reliability > Feature Velocity**  
   - Users are rejecting new features if they break existing workflows (e.g., QwenPaw’s silent agent cancellation).  
   - **Value for developers**: Prioritize observability, crash recovery, and deterministic state.

2. **Human-in-the-Loop (HITL) Workflows Are Mainstream**  
   - QwenPaw’s `ask_user_question` and ZeroClaw’s streaming reasoning reflect demand for **transparency and control** during AI decision-making.  
   - **Value for developers**: Design for explainability—expose model thinking, allow interruptions.

3. **Enterprise-Grade Data Portability & Security**  
   - External DB paths (QwenPaw), private CA trust (ZeroClaw), and secure credential handling (Hermes) signal that **data ownership and compliance** are non-negotiable.  
   - **Value for developers**: Build first-class support for audits, backups, and isolated environments.

4. **Runtime-Level Abstraction Is the Next Frontier**  
   - ZeroClaw’s A2A protocol RFC and Hermes’ unified gateway indicate a shift toward **modular, composable agent systems**.  
   - **Value for developers**: Invest in clean APIs, versioned contracts, and backward compatibility.

---

### ✅ **Final Recommendation**  
For developers and technical decision-makers:  
- **Adopt QwenPaw or Hermes** for near-term production use—both offer stable, well-documented runtimes.  
- **Monitor OpenClaw cautiously**—its power is undeniable, but only for advanced users willing to manage instability.  
- **Prioritize stability and diagnostics** over novelty—community feedback clearly shows that **reliability is the new competitive moat**.  
- **Design for auditability, portability, and transparency**—these are now baseline expectations, not add-ons.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-10-15**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active, with 50 issues and 50 pull requests updated in the past 24 hours—indicating robust community engagement and ongoing development momentum. The release of **v0.22.1 (rc.5-v0.22.1)** and **v0.22.0** marks a pivotal moment: v0.22.0 is officially labeled “The Threshold Release,” signaling architectural maturity after ~7,180 issues closed and over 6,000 merged PRs since v0.21.0. Despite this progress, stability concerns persist across platforms (especially Windows/macOS), particularly around session state, message delivery, and plugin compatibility.

---

### **2. Releases**  
#### ✅ **v0.22.1** (October 14, 2026)  
- **Type**: Patch release  
- **Focus**: Hotfixes for **Windows Store**, **plugin updates**, and minor runtime stability.  
- **Key Fixes**:  
  - Resolves `creds.json` corruption on WhatsApp Baileys bridge (Issue #138627).  
  - Addresses Telegram init hang pre-socket (Issue #138649).  
  - Fixes Docker image sync issue (`uv.lock` vs `venv`) affecting plugins like `hermes-telemetry` (Issue #138220).  
- **Migration Note**: No breaking changes; users should update immediately to avoid session instability or plugin failures.

#### ✅ **v0.22.0** (October 13, 2026) — *The Threshold Release*  
- **Significance**: Milestone release following massive refactor: **unified gateway runtime** (#106742).  
- **Impact**: All local sessions now share a single gateway instance → improved performance but introduced new edge cases in session routing, message delivery, and state handling.  
- **Legacy Note**: Users may experience subtle behavioral shifts (e.g., session recovery logic, `member_id` handling).  
- **GitHub Link**: [Release v0.22.0](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.0)

---

### **3. Project Progress**  
**Merged/Resolved PRs (Today):**  
- **PR #138668** – Fix: CLI commands now fetch state from the gateway (not local process), resolving empty env/state in classic CLI workflows.  
- **PR #138667** – Fix: Routes Ink/Desktop requests previously refused by shared gateway.  
- **PR #138666** – Restores session metadata, commands, and usage on `GatewayACPAgent`.  
- **PR #138665** – Fixes path resolution: now uses session folder instead of daemon working dir.  
- **PR #138664** – Re-enables allowlist removals and plugin gates on shared gateway (security fix).  
- **PR #138707** – Auto-formatting PR via CI bot (non-functional, cleanup only).  

> 🔧 These fixes collectively address critical **session integrity**, **cross-surface consistency**, and **security boundary enforcement** post-unified gateway merge.

---

### **4. Community Hot Topics**  
| Issue | Comments | Severity | Summary & Implication |
|------|----------|----------|------------------------|
| [#136567](https://github.com/NousResearch/hermes-agent/issues/136567) | 23 | P2 | Telegram DM topic opening messages arrive thread-less → misrouted to prior topic. Affects forum-based bots. Needs urgent fix for UX integrity. |
| [#134889](https://github.com/NousResearch/hermes-agent/issues/134889) | 12 | P1 | Tracking post-merge bugs from unified gateway runtime. Indicates deep-rooted session ownership issues. High risk for data loss or stale state. |
| [#105758](https://github.com/NousResearch/hermes-agent/issues/105758) | 8 | P2 | Lifecycle guard falsely blocks Node.js CLIs (e.g., `obsidian-headless`). Real-world automation breakage. Critical for developers using CLI tools. |
| [#138660](https://github.com/NousResearch/hermes-agent/issues/138660) | 3 | P2 | Hosted group room member turns never run due to missing `member_id` in `submit()`. Blocks multi-user collaboration. |

> 📌 **Trend**: Post-v0.22.0, **session state**, **message routing**, and **multi-user consistency** dominate discussion. These are not isolated bugs—they reflect systemic challenges in the new unified runtime architecture.

---

### **5. Bugs & Stability**  
| Bug | Severity | Status | Fix PR? | Notes |
|-----|----------|--------|---------|-------|
| [#138649](https://github.com/NousResearch/hermes-agent/issues/138649) | P1 | Open | ❌ | Telegram init hangs pre-socket after network blip. Recurring issue family. High impact on uptime. |
| [#138627](https://github.com/NousResearch/hermes-agent/issues/138627) | P3 | Open | ❌ | WhatsApp `creds.json` can be truncated to 0 bytes → timeout loop + file lock contention. Risky for persistent use. |
| [#138220](https://github.com/NousResearch/hermes-agent/issues/138220) | P2 | Open | ❌ | Docker image `venv` out of sync with `uv.lock` → breaks PyYAML-dependent plugins. Major deployment blocker. |
| [#138689](https://github.com/NousResearch/hermes-agent/issues/138689) | P2 | Open | ❌ | Desktop app wipes bundled Python site-packages on every launch → loses third-party deps (e.g., `spacy`, `tokenizers`). Devastating for plugin reliability. |

> ⚠️ **Critical Concern**: Multiple **platform-specific regressions** (Windows/macOS) and **plugin dependency instability** suggest that post-v0.22.0 rollout is not yet stable for production use without manual intervention.

---

### **6. Feature Requests & Roadmap Signals**  
| Request | Priority | Status | Signal for Next Version |
|--------|----------|--------|--------------------------|
| [#52554](https://github.com/NousResearch/hermes-agent/issues/52554) | P3 | Open | Floating "Quote" button in chat pane → improves text interaction workflow. Likely in v0.23. |
| [#138671](https://github.com/NousResearch/hermes-agent/issues/138671) | P3 | Open | Desktop hover cards anchored at (0,0) → UI regression. May be fixed in v0.23 patch. |
| [#134024](https://github.com/NousResearch/hermes-agent/issues/134024) | P3 | Open | Optional max-width for chat column on ultrawide monitors → readability focus. Strong user demand. |
| [#138575](https://github.com/NousResearch/hermes-agent/issues/138575) | P3 | Open | `/sessions` and `/resume` hardcoded to 10 entries → no pagination/config. Suggests need for API/UI extensibility. |

> 📈 **Prediction**: v0.23 will likely include **UI polish** (hover tooltips, quoting, layout caps) and **configurable session listing**—responding to user pain points in high-res environments and multi-session workflows.

---

### **7. User Feedback Summary**  
- **Pain Points**:  
  - **Desktop app instability** (plugins lost on restart, broken clipboard behavior).  
  - **Telegram/Slack message delivery flaws** (missing text, routing errors).  
  - **CLI usability friction** (falsely blocked commands, empty state).  
- **Satisfaction Indicators**:  
  - Positive sentiment around **new features** like `nemotron super 3.5` default params (v0.22.1).  
  - Appreciation for **rapid bug triage** and frequent releases.  
- **Use Cases**:  
  - Multi-user collaboration (Slack/Telegram groups).  
  - Developer automation (CLI tool integration).  
  - Long-running agent sessions (research, writing, coding).  

> 💬 *"I use Hermes daily for research. Since v0.22.0, my team’s shared sessions keep failing during resumption. This needs fixing."* – @HenryQW

---

### **8. Backlog Watch**  
| Issue | Age | Comments | Why It Matters |
|------|-----|----------|----------------|
| [#134889](https://github.com/NousResearch/hermes-agent/issues/134889) | 7 days | 12 | Tracking post-merge fixes for unified gateway runtime. **Critical** for long-term stability. Needs assignee. |
| [#138660](https://github.com/NousResearch/hermes-agent/issues/138660) | 1 day | 3 | Hosted rooms don’t run member turns → blocks collaboration. **High visibility**, low priority tagging. |
| [#138702](https://github.com/NousResearch/hermes-agent/issues/138702) | 1 day | 1 | Plugin collision in `uv.lock` when same name exists in multiple profile homes. **Hidden but dangerous** for advanced users. |
| [#138606](https://github.com/NousResearch/hermes-agent/issues/138606) | 1 day | 1 | OAuth login fails on Stytch-backed MCP servers → breaks integrations. **Security-sensitive**, needs investigation. |

> 🔎 **Call to Action**: Maintainers should prioritize **post-merge validation** and **user-facing stability** before pushing feature-heavy updates.

---

**Final Assessment**: Hermes Agent is in a **high-growth, high-risk phase**. The v0.22.0 release was a technical milestone, but it has exposed deep architectural fragilities in session management and cross-platform consistency. While innovation continues (AI model support, plugin ecosystem), **stability and developer experience must become top priorities** in the next 2–3 months. The project remains healthy—but only if the core runtime is stabilized.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-10-15**

---

### **1. Today's Overview**  
QwenPaw exhibits strong development momentum with 34 pull requests and 13 issues updated in the past 24 hours, indicating active contributor engagement and a responsive issue triage process. Two new beta releases (v2.2.2-beta.6 and v2.2.2-beta.5) were published, primarily focused on UI/UX fixes, database portability, and provider integration. The project is clearly entering a stabilization phase ahead of a potential v2.2.2 final release, with a focus on improving reliability, configuration flexibility, and user experience across desktop and console environments.

---

### **2. Releases**  
**v2.2.2-beta.6** ([Release Page](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.2-beta.6))  
*   **Fixes:**  
    - `e2e`: Aligns test selectors with current Console UI (`#8247`) — critical for CI stability.  
    - `history`: Adds support for external database paths and portable backups (`#8246`).  
*   **Chore:** Bumps version to `2.2.2b6` (`#8250`).  

**v2.2.2-beta.5** ([Release Page](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.2-beta.5))  
*   **Fixes:**  
    - `console`: Preserves draft content when pasting long text (`#8119`).  
    - `providers`: Recognizes newer GPT token limit parameters (`#8090`).  
    - `console`: Refactors internal state handling (`#8119`).  

> ✅ **Migration Note:** No breaking changes reported. Users on v2.2.1 or earlier should update to leverage improved stability and feature parity. The `history` path fix enables better data portability across devices.

---

### **3. Project Progress**  
**Merged PRs (Today):**  
- `#8247` (`fix(e2e)`): Ensures end-to-end tests reflect current UI structure — prevents false negatives in CI.  
- `#8246` (`fix(history)`): Enables external DB paths and backup portability — key for enterprise/data migration use cases.  
- `#8250` (`chore`): Version bump to `2.2.2b6` — preparatory step for next release cycle.  

**Notable Features Advanced:**  
- `#8259` (`feat(tools)`): Introduces structured human-in-the-loop questions via `ask_user_question` tool — enabling interactive agent workflows.  
- `#8224` (`feat: Python Code Mode`): Experimental Python orchestration interface — opens doors for advanced scripting and automation.  
- `#8253` (`feat(website)`): JSON-driven evaluation index for public SDK benchmarking — signals commitment to transparency and performance tracking.

---

### **4. Community Hot Topics**  
**Top Issues by Engagement:**  
- **#8174** [Enhancement]: *Tavily provider lacks API key config surface* — **4 comments**, urgent need from paid users unable to utilize their quota.  
  → **PR #8204** (merged) directly addresses this, adding Tavily key support via credential store.  
- **#8252** [Bug]: *Agent inter-call sessions silently cancelled* — **2 comments**, severe impact on multi-agent orchestration.  
  → High severity; no fix PR yet. Critical for fleet-based AI systems.  
- **#8225** [Bug]: *Hot reload cancels running cron jobs without warning* — **2 comments**, disruptive for scheduled automation.  
  → Requires immediate attention; affects production-like workflows.

**Top PRs by Activity:**  
- `#8259` (`feat(tools)`): First-time contributor adds human-in-the-loop capability — highly requested UX improvement.  
- `#8224` (`feat: Python Code Mode`): Experimental but ambitious; suggests growing demand for code-level agent control.  
- `#8253` (`feat(website)`): Builds public evaluation index — reflects community interest in verifiable performance metrics.

---

### **5. Bugs & Stability**  
| Severity | Issue | Description | Fix PR? | Link |
|---------|-------|-------------|--------|------|
| 🔴 High | #8252 | Agent inter-call sessions silently cancelled (`CancelledError`) | ❌ No | [Issue #8252](https://github.com/agentscope-ai/QwenPaw/issues/8252) |
| 🔴 High | #8225 | Hot reload kills running cron tasks without warning | ❌ No | [Issue #8225](https://github.com/agentscope-ai/QwenPaw/issues/8225) |
| 🟡 Medium | #8120 | Frequent page load failures (network/UI instability) | ⚠️ Partial (fixed in beta.5) | [Issue #8120](https://github.com/agentscope-ai/QwenPaw/issues/8120) |
| 🟡 Medium | #8249 | Cron job time reset to 0:00 on edit | ❌ No | [Issue #8249](https://github.com/agentscope-ai/QwenPaw/issues/8249) |
| 🟡 Medium | #8251 | Message navigation directory misplaces anchor | ❌ No | [Issue #8251](https://github.com/agentscope-ai/QwenPaw/issues/8251) |

> ⚠️ **Critical Note**: Silent cancellation of agent calls and cron jobs are high-risk regressions that could break automated workflows.

---

### **6. Feature Requests & Roadmap Signals**  
- **Tavily Key Support** (`#8174`, resolved via `#8204`): Confirms demand for paid provider integration.  
- **Claude Code Harness** (`#7396`): Still pending despite "Coming Soon" status — likely a top priority for enterprise users.  
- **Hugging Face & CommandCode Presets** (`#8233`): Request to add official icons and presets — signals desire for first-party tool discoverability.  
- **Docker Hub Mode Docs** (`#8256`, `#8255`): Repeated documentation gap — indicates confusion around deployment options.  
- **Python Code Mode** (`#8224`): Experimental but well-received — likely to become a core feature in v2.3.

> 📌 **Prediction**: v2.3 will likely include:  
> - Official Claude Code integration  
> - Enhanced Python Code Mode  
> - Full Docker Hub deployment docs  
> - Improved cron/hot reload resilience

---

### **7. User Feedback Summary**  
- **Pain Points:**  
  - **Reliability**: Frequent page load failures and silent task cancellations degrade trust in production use.  
  - **Configuration Clarity**: Users struggle with cron behavior during hot reload and lack visibility into why agents fail.  
  - **Tool Access**: Paid providers like Tavily remain unusable without manual workarounds.  
- **Satisfaction Indicators:**  
  - Positive reception of `ask_user_question` and `Python Code Mode` features — early adopters appreciate deeper control.  
  - High engagement on bug reports shows users are invested in platform stability.  
- **Use Cases Highlighted:**  
  - Multi-agent fleets (Orchestrator/Executor/Defender)  
  - Scheduled automation (cron jobs)  
  - Enterprise-grade data portability (external DB paths)

---

### **8. Backlog Watch**  
**Long-Unanswered Critical Issues:**  
- **#7396** [Question]: *Status and roadmap for Claude Code harness* — created Aug 28, 2026 (over 6 weeks), no official response.  
  → High visibility; delays adoption by teams relying on Anthropic models.  
- **#8254** [Bug]: *Settings Center ignores menu visibility overrides* — opened Oct 14, unresolved.  
  → Affects plugin developers who want to hide built-in entries.  
- **#8256 / #8255** [Docs]: *Missing Docker Hub mode instructions* — duplicate issues, both opened Oct 14.  
  → Indicates poor documentation coverage for a key deployment method.

> 🛠 **Recommendation**: Maintainers should prioritize:  
> 1. Clarify Claude Code status in #7396  
> 2. Merge #8257 to fix Settings Center visibility  
> 3. Update docs with Docker Hub startup guide (per #8256)

---

**Project Health Score: 8.4/10**  
✅ Active dev velocity, strong contributor base, clear roadmap signals  
⚠️ Silent failures and documentation gaps pose risks for enterprise adoption  
🎯 Next focus: Stabilize agent orchestration, finalize v2.2.2, and expand plugin ecosystem.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest – 2026-10-15**

---

### **1. Today's Overview**  
The ZeroClaw project remains highly active, with 28 issues and 50 pull requests updated in the past 24 hours—indicating robust developer engagement and ongoing feature development. The core focus centers on runtime stability, agent loop efficiency, security hardening, and channel integrations (especially email and messaging platforms). No new releases were published, suggesting a pre-release stabilization phase or a deliberate delay for critical fixes. High-priority bugs affecting session persistence, memory handling, and message timing are being actively addressed, while architectural RFCs signal long-term design shifts.

---

### **2. Releases**  
*No new releases published today.*  
There are no release notes or changelogs to report. The project appears to be in a pre-release cycle, likely preparing for v0.8.6 or v0.9.0, as tracked in [Issue #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432).

---

### **3. Project Progress**  
**Merged/Closed PRs & Fixes:**  
- ✅ **[PR #11752](https://github.com/zeroclaw-labs/zeroclaw/pull/11752)**: Adds `tls_ca_cert_path` support to the email channel for private CA trust—critical for enterprise mail integrations.  
- ✅ **[PR #11750](https://github.com/zeroclaw-labs/zeroclaw/pull/11750)**: Prevents auto-reply loops by filtering out automatic emails (bounces, out-of-office) from triggering agent turns.  
- ✅ **[PR #11748](https://github.com/zeroclaw-labs/zeroclaw/pull/11748)**: Enables SMTP STARTTLS on port 587 (e.g., Office 365), expanding email provider compatibility.  
- ✅ **[PR #11746](https://github.com/zeroclaw-labs/zeroclaw/pull/11746)**: Implements proper storage of inbound email attachments under `<workspace>/attachments/`, resolving a documentation vs. behavior gap.  
- ✅ **[PR #11744](https://github.com/zeroclaw-labs/zeroclaw/pull/11744)**: Introduces streaming model reasoning in Telegram and Slack drafts—aligning with Matrix’s existing capability.  

These updates reflect strong momentum in **channel reliability**, **security hygiene**, and **user experience parity** across platforms.

---

### **4. Community Hot Topics**  
The most active discussions center around **agent loop performance**, **session state integrity**, and **architectural scalability**:

- 🔥 **[Issue #5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)**: *Defer built-in tool schemas to reduce fixed prompt floor* — 10 comments, high risk. This is a **critical S1 workflow blocker** where initial context exceeds budget by 3.3x even before user input. The proposed fix targets foundational efficiency.
  
- 🔥 **[Issue #11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254)**: *RFC: A2A protocol crate (zeroclaw-a2a)* — 10 comments, accepted, high risk. This signals a major architectural shift toward modular, secure inter-agent communication. It’s a cross-cutting refactor that will impact future extensibility.

- 🔥 **[PR #11744](https://github.com/zeroclaw-labs/zeroclaw/pull/11744)**: *Stream model reasoning in Telegram/Slack* — 1 comment, but high visibility due to its UX implications. Users demand real-time insight into AI thinking during long replies.

> **Underlying Need**: Developers are pushing for **predictable, efficient, and transparent agent behavior**, especially under load or in complex workflows involving multiple channels and tools.

---

### **5. Bugs & Stability**  
Critical bugs reported today highlight risks in **data persistence**, **resource management**, and **state consistency**:

| Issue | Severity | Summary | Fix Status |
|------|----------|--------|------------|
| [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) | S2 | SQLite rewrites `created_at` on every turn → loses per-message timestamps | ❌ Open |
| [#11711](https://github.com/zeroclaw-labs/zeroclaw/issues/11711) | S2 | Trimming long conversations permanently deletes older turns | ❌ Open |
| [#11706](https://github.com/zeroclaw-labs/zeroclaw/issues/11706) | S2 | `max_image_turns` never releases vision route → model stays pinned | ❌ Open |
| [#11709](https://github.com/zeroclaw-labs/zeroclaw/issues/11709) | S2 | Upgraded sockets outlive gateway reload → serve retired instance | ❌ Open |
| [#11708](https://github.com/zeroclaw-labs/zeroclaw/issues/11708) | S2 | `model_routing_config` omits required args in tool schema | ❌ Open |

> ⚠️ **High-risk pattern**: Multiple S2/S1 issues involve **data loss**, **state corruption**, or **infinite resource consumption** (e.g., CPU spin in [#11481](https://github.com/zeroclaw-labs/zeroclaw/issues/11481)). These require urgent attention to prevent production instability.

---

### **6. Feature Requests & Roadmap Signals**  
Emerging themes suggest the next version (likely v0.9.0) will emphasize **extensibility**, **security**, and **enterprise readiness**:

- 📌 **Email Channel Enhancements**:  
  - Add CA trust (`#11751`)  
  - Support STARTTLS (`#11747`)  
  - Store attachments (`#11745`)  
  - Avoid auto-replies (`#11749`)  
  → **Signal**: Email is becoming a first-class, secure, and reliable integration path.

- 📌 **Agent Loop & Tool Management**:  
  - Defer tool schemas (`#5808`)  
  - Bounded tool results at turn boundary (`#11735`)  
  → **Signal**: Moving toward **bounded, predictable execution**—critical for safety and cost control.

- 📌 **Architecture**:  
  - A2A protocol crate (`#11254`)  
  - Gateway separation (`#7432`)  
  → **Signal**: Major refactoring underway to enable **modular, scalable, and secure agent ecosystems**.

---

### **7. User Feedback Summary**  
Real-world pain points reveal clear user expectations:

- **"I need to see what the model is thinking"** — Seen in [#11743](https://github.com/zeroclaw-labs/zeroclaw/issues/11743), users want transparency during long responses (especially in Slack/Telegram).
- **"My sessions disappear after reconnect"** — Long-standing issue (#9734), now echoed in new PRs like #11737, indicating frustration with session durability.
- **"Why does my email channel reply to bounces?"** — Immediate usability issue; users expect intelligent filtering, not blind automation.
- **"Why do I lose message timestamps?"** — Critical for audit trails and debugging; current SQLite behavior undermines trust in logs.

> 💬 **Overall sentiment**: Users value **reliability**, **transparency**, and **enterprise-grade features**—but are frustrated by silent data loss, unexplained crashes, and poor error feedback.

---

### **8. Backlog Watch**  
Several high-impact, long-standing issues require maintainer attention:

- 🔴 **[Issue #5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)**: *Defer built-in tool schemas* — High risk, accepted, no PR yet. This is a **foundational performance bottleneck**.
- 🔴 **[Issue #11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254)**: *A2A protocol RFC* — Accepted, but no implementation plan. Critical for future extensibility.
- 🔴 **[Issue #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)**: *Runtime/gateway delivery tracker* — Holds v0.8.6/v0.9.0 roadmap; needs active progress tracking.
- 🔴 **[Issue #11735](https://github.com/zeroclaw-labs/zeroclaw/issues/11735)**: *Bounded tool results* — Accepting this would prevent runaway context growth; essential for stable deployments.

> ⏳ **Call to Action**: Maintainers should prioritize triaging and assigning these **high-impact, accepted, and time-sensitive** items to prevent further technical debt accumulation.

---

**Project Health Score**: ⚠️ **Stable but Under Pressure**  
While innovation and community activity are strong, several **S1/S2 bugs** and **unresolved architectural decisions** pose risks to reliability. Immediate focus on **data integrity**, **agent loop safety**, and **security-by-design** is critical ahead of the next release.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*