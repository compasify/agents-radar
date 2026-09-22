# OpenClaw Ecosystem Digest 2026-09-22

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-09-22 01:06 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest – 2026-09-22**

---

### **1. Today's Overview**  
OpenClaw is experiencing intense community activity with **500 new issues and 500 new pull requests** reported in the past 24 hours, indicating high engagement but also growing instability. The project is under significant pressure from critical runtime regressions—particularly around memory leaks, SQLite WAL bloat, and session state corruption—that are blocking stable operation for users. Despite this, a new **v2026.7.35 extended-stable release** has been issued as a gateway-only fix, emphasizing ongoing maintenance of core infrastructure. The volume of open PRs suggests active development momentum, though many remain unreviewed or lack proof-of-concept.

---

### **2. Releases**  
✅ **New Release**: `v2026.7.35` (extended-stable)  
- **Type**: Gateway-only, equivalent to LTS  
- **Scope**: Includes critical security patches, reliability fixes, performance improvements, and new model support.  
- **Notes**: This version represents OpenClaw’s state from late July 2026, with no breaking changes. It serves as a stable baseline for production environments.  
- **Migration Note**: Users on newer versions (e.g., 2026.9.5) should consider rolling back to v2026.7.35 if encountering crashes or stability issues.  
🔗 [Release Notes](https://github.com/openclaw/openclaw/releases/tag/v2026.7.35)

---

### **3. Project Progress**  
🔹 **Merged/Closed PRs Today**:  
- **PR #155311** (`fix: reduce QA bus media test overhead`) — Reduced CI load by optimizing media payload checks without behavioral change.  
- **PR #155297** (`fix: batch adjacent SQLite cache exit cleanup`) — Resolves misleading `MaxListenersExceededWarning` during startup.  
- **PR #152727** (`fix(update): bound interrupted-update settle probe`) — Prevents CLI stalls after failed updates; improves resilience.  
- **PR #155288** (`fix: prevent deleted session groups from reappearing`) — Addresses persistent UI state inconsistency.  
- **PR #155325** (`fix: avoid duplicate runtime loading in Doctor tests`) — Cuts CI time by eliminating redundant dependency loads.

➡️ **Key Advances**:  
- **Stability & Performance**: Multiple PRs focused on reducing noise in logs, cleaning up resource leaks (SQLite), and improving CI efficiency.  
- **UX Polish**: Several UI/UX refinements (e.g., task progress collapse, chat delivery clarity) improve user experience without altering core behavior.

---

### **4. Community Hot Topics**  
🔥 **Top Issues by Comment Count & Severity**:

| Issue | Comments | Severity | Link |
|------|--------|---------|------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | 50 | 🦐 Gold Shrimp (UX Release Blocker) | Agent SQLite WAL grows to 2.8 GB despite `wal_autocheckpoint=1000` on Windows |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 31 | 🦪 Silver Shellfish (OOM Crash Loop) | Gateway RSS grows from 350MB → 15.5GB over days, triggers OOM kills |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | 26 | 🦪 Silver Shellfish | Codex PreToolUse spawns CPU-bound `openclaw-hooks` processes |
| [#153257](https://github.com/openclaw/openclaw/issues/153257) | 19 | 🦐 Gold Shrimp | v2026.9.5 turned stable environment into 8-hour failure recovery session |

💡 **Underlying Needs**:  
- **Critical Stability Fixes**: Users report that recent releases (especially 2026.9.x) introduce severe regressions impacting uptime and reliability.  
- **Windows-Specific Hardening**: Multiple issues highlight Windows-specific failures (WAL growth, scheduled tasks, file access).  
- **Codex Integration Fragility**: Persistent issues with Codex app-server hangs, timeouts, and silent truncation suggest deep integration flaws.  
- **User Trust Erosion**: Reports like #153257 (“I regret upgrading”) signal declining confidence in release quality.

---

### **5. Bugs & Stability**  
🚨 **Critical Bugs Reported Today (P0/P1)**:  

| Bug | Impact | Status | Fix PR? |
|-----|--------|--------|--------|
| **Issue #143524** – SQLite WAL bloat (2.8 GB) | Crashes gateway on startup | Open | ❌ No fix PR |
| **Issue #91588** – Memory leak (350MB → 15.5GB) | OOM crashes, restart loops | Open | ❌ No fix PR |
| **Issue #91009** – CPU-bound `openclaw-hooks` processes | Stalls RPC, blocks sessions | Open | ❌ No fix PR |
| **Issue #153257** – 2026.9.5 causes 8-hour recovery loop | UX release blocker | Open | ❌ No fix PR |
| **Issue #154114** – `openclaw update` fails due to auth route error | Blocks upgrades | Open | ❌ No fix PR |

⚠️ **High-Risk Regressions**:  
- **Issue #89278**: OAuth refresh succeeds but cron/heartbeat fail due to 10s timeout — breaks automated workflows.  
- **Issue #84516**: Codex replies truncated at ~1000–1100 chars despite `aborted=false` — silent data loss.

🟢 **Positive Signal**:  
- **PR #154991** (`fix(gateway): keep session access and Stop bound to original caller`) — Addresses authority drift and session integrity issues.  
- **PR #155027** (`fix: observe mid-session store mutations`) — Fixes secret leakage across subagent runs.

---

### **6. Feature Requests & Roadmap Signals**  
🎯 **Top User-Requested Features**:

| Feature | Request Count | Use Case | Likely Inclusion |
|-------|--------------|---------|----------------|
| **Per-agent dreaming configuration** (#67413, 9 comments, 5 👍) | High demand | Prevent OOM spikes during cron jobs | ✅ Likely in next major release |
| **Slack Modal Support** (#88154, 8 comments, 1 👍) | Growing interest | Structured input via native modals | ⚠️ Possible in 2026.10 |
| **Per-agent TTS/STT overrides** (#66252, 8 comments, 1 👍) | Multi-language use cases | Enable different voices/languages per agent | ✅ Strong candidate |
| **Multi-Slot Memory Architecture** (#60572, 8 comments, 3 👍) | Core architecture need | Replace single memory slot with layered providers | 🔥 High priority for v2026.11 |

📌 **Emerging Themes**:  
- **Granular Control**: Users want per-agent settings (dreaming, TTS, memory, tools).  
- **Channel Enhancements**: Slack, WebChat, Telegram usability improvements.  
- **Production Readiness**: Feature request #73537 asks for “production-readiness stability label” — signals demand for clear release tiers.

---

### **7. User Feedback Summary**  
💬 **Real User Pain Points**:  
- **“I genuinely regret upgrading to 2026.9.5”** (#153257) — reflects widespread frustration with unstable releases.  
- **“My environment was stable before this update”** — indicates regression fatigue.  
- **“Silent data loss”** — multiple reports of truncated responses and overwritten files (e.g., `write` tool overwrites instead of appending).  
- **“Cron jobs saturate event loop”** (#84983) — breaks automation pipelines.  
- **“No usable, authenticated inference route”** despite working models — blocks updates and deployments.

✅ **Satisfaction Signals**:  
- Users appreciate **Codex-native tool parity**, **multi-agent workflows**, and **Telegram/Feishu integrations**.  
- Many report OpenClaw as part of their daily workflow (family/business assistant).

---

### **8. Backlog Watch**  
🔍 **Long-Unanswered Critical Issues Needing Attention**:

| Issue | Age | Priority | Status | Link |
|------|-----|--------|--------|------|
| **#143524** – SQLite WAL bloat on Windows | 13 days | P0 / 🦐 Gold Shrimp | Open, 50 comments | [Link](https://github.com/openclaw/openclaw/issues/143524) |
| **#91588** – Gateway memory leak (15.5GB) | 105 days | P1 / 🦪 Silver Shellfish | Open, 31 comments | [Link](https://github.com/openclaw/openclaw/issues/91588) |
| **#40001** – `write` tool lacks append mode | 217 days | P0 / 🦞 Diamond Lobster | Open, 15 comments | [Link](https://github.com/openclaw/openclaw/issues/40001) |
| **#67419** – Bootstrap files re-injected every turn | 187 days | P2 / 🦪 Silver Shellfish | Open, 12 comments | [Link](https://github.com/openclaw/openclaw/issues/67419) |
| **#153246** – Plugin build dirs grow to 7.5 GB/day | 3 days | P1 / 🐚 Platinum Hermit | Closed (but same issue persists in #154571) | [Link](https://github.com/openclaw/openclaw/issues/153246) |

🔧 **Maintainer Action Needed**:  
- **PR #155328** (`fix: prevent deleted session groups from reappearing`) — ready for review, but stalled.  
- **PR #155315** (`fix(codex): missing tasks after Code Mode follow-ups`) — waiting on author, needs triage.  
- **PR #153628** (`feat(swarm): bind exact candidate manifests`) — complex, needs deeper validation.

---

> **Final Assessment**: OpenClaw remains a powerful, innovative AI agent platform, but **release stability and long-term maintainability are under strain**. While technical depth and community engagement are strong, **critical bugs and delayed fixes threaten adoption**. Immediate focus should be on stabilizing the 2026.9.x line, auditing release hygiene, and prioritizing high-impact fixes from the backlog. Without intervention, trust erosion may accelerate.

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Ecosystem – 2026-09-22**

---

### **1. Ecosystem Overview**  
The open-source personal AI assistant and agent ecosystem is entering a phase of structural maturation, marked by divergent development trajectories across key projects. While some platforms like OpenClaw and ZeroClaw are grappling with stability regressions amid rapid feature expansion, others such as Hermes Agent and QwenPaw are consolidating around production readiness and security hardening. IronClaw stands apart in its focus on evaluation rigor and model quality diagnostics, signaling a shift toward data-driven agent improvement. Overall, the landscape reflects growing complexity in multi-agent orchestration, cross-platform integration, and operational reliability—driving demand for robust governance, transparent cost accounting, and secure session management.

---

### **2. Activity Comparison**

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score (1–10) |
|--------|--------------|-----------|----------------|----------------------|
| **OpenClaw** | 500 | 500 | v2026.7.35 (extended-stable) | **4.2** |
| **Hermes Agent** | 50 | 50 | v0.21.4 (patch release) | **6.8** |
| **IronClaw** | 1 | 1 | 1.4.1-rc.1 (pre-release) | **7.5** |
| **QwenPaw** | 17 | 33 | None (pending v2.3) | **8.0** |
| **ZeroClaw** | 50 | 50 | None | **5.5** |

> *Health Score: Based on stability, bug severity, fix velocity, community trust, and release hygiene (1 = critical instability; 10 = production-ready)*

---

### **3. OpenClaw's Position**  
OpenClaw remains the most technically ambitious project in the ecosystem, with unparalleled community engagement and a high-volume development pipeline. Its **deep integration with Codex**, **multi-agent workflows**, and **extensive tooling layer** set it apart from peers focused on lightweight or modular design. However, this ambition comes at a cost: **systemic stability issues** (e.g., memory leaks, SQLite WAL bloat, OOM crashes) have eroded user trust, particularly after the problematic 2026.9.x releases. Compared to Hermes Agent’s mature patching strategy or QwenPaw’s focused security fixes, OpenClaw’s **technical depth is unmatched but currently unbalanced by operational discipline**. Its large contributor base and active issue tracker indicate strong momentum, but without immediate stabilization, it risks becoming a cautionary tale of innovation outpacing maintainability.

---

### **4. Shared Technical Focus Areas**  
Across all five projects, recurring technical challenges reveal emerging industry-wide needs:

- **Memory & Resource Management**:  
  - OpenClaw (#91588), ZeroClaw (#10230), QwenPaw (#7882): Persistent memory leaks, stack overflows, and context budget miscalculations.
  - *Common Need*: Predictable, bounded resource usage across sessions and agents.

- **Security & Session Integrity**:  
  - QwenPaw (#7859): Persistent prompt injection across sessions.  
  - ZeroClaw (#10379): Inability to cancel running processes.  
  - OpenClaw (#155027): Secret leakage across subagent runs.  
  - *Common Need*: Isolated, auditable, and reversible agent state with input sanitization.

- **Cross-Platform Reliability**:  
  - OpenClaw (Windows-specific WAL bloat), QwenPaw (Windows console termination), ZeroClaw (macOS Seatbelt bypass).  
  - *Common Need*: Platform-agnostic execution environments with consistent behavior.

- **Context & Cost Transparency**:  
  - Hermes Agent (#110126), QwenPaw (#7628): Systemic truncation and inaccurate compaction cost estimation.  
  - *Common Need*: Real-time, provider-accurate cost tracking and output fidelity guarantees.

---

### **5. Differentiation Analysis**

| Dimension | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|---------|----------|--------------|----------|---------|----------|
| **Target Users** | Power users, developers, enterprise integrators | Home automation, workflow automation | Research-focused, QA/evaluation teams | Multi-agent builders, dev teams | DevOps, infrastructure engineers |
| **Feature Focus** | Full-stack agent platform with Codex integration | Lightweight, modular agent with HA/Telegram support | Model evaluation & failure taxonomy | Agent safety, SDK maturity | Governance, daemon resilience, Nix support |
| **Architecture** | Monolithic gateway + plugin-heavy | Microservices-based routing + lean core | Benchmark-centric testing framework | Modular PawApps + memory plugins | Channel-based, role-aware access control |
| **Deployment Model** | Self-hosted, Docker, cloud gateways | Docker, hosted, CLI | CI/CD benchmark runner | Desktop, CLI, API-first | Nix, systemd, containerized daemons |

> **Key Differentiator**:  
> - **OpenClaw** = "All-in-one agent OS"  
> - **Hermes Agent** = "Smart home orchestrator"  
> - **IronClaw** = "Model QA lab"  
> - **QwenPaw** = "Secure, testable agent SDK"  
> - **ZeroClaw** = "Governance-hardened deployment engine"

---

### **6. Community Momentum & Maturity**

- **High-Momentum Projects (Rapid Iteration)**:  
  - **OpenClaw**: 500+ issues/PRs daily — signs of explosive growth but also instability.  
  - **ZeroClaw**: High activity with strong RFC governance signals — moving from chaos to structure.  
  - **QwenPaw**: Rapid PR merge rate focused on security and UX polish — indicates strong engineering discipline.

- **Stabilizing / Consolidating Projects**:  
  - **Hermes Agent**: v0.21.4 consolidates 1,800+ PRs — clear sign of maturity and readiness for production use.  
  - **IronClaw**: Minimal activity, focused on release candidate prep — stable, maintenance-mode project.

- **Maturity Signal**:  
  The presence of **RFC tracking (#8692)**, **security waivers (#11038)**, and **cost attribution requests (#118595)** across multiple projects indicates that the ecosystem is transitioning from “feature sprint” to “operational excellence” mode.

---

### **7. Trend Signals**  
Based on community feedback and project evolution, the following trends are emerging for AI agent developers:

1. **Security-by-Design is Non-Negotiable**:  
   Prompt injection (#7859), credential leakage (#11026), and uncancelable processes (#10379) are top concerns — **no project can afford to treat security as an afterthought**.

2. **Cost & Context Transparency Are Critical for Production Use**:  
   Users demand accurate cost estimation (#7628, #118595) and predictable output length handling (#110126) — essential for commercial adoption.

3. **Multi-Agent Governance Is the Next Frontier**:  
   Features like per-task routing (#103965), host-scoped resource bounds (#10970), and agent-to-agent messaging (#11027) signal a move beyond single-agent tools toward **orchestration ecosystems**.

4. **DevOps Integration Is Now Expected**:  
   Nix packaging (#11041), reproducible builds, and CI/CD hardening reflect a shift toward **infrastructure-as-code** standards in agent platforms.

5. **Evaluation Rigor Drives Improvement**:  
   IronClaw’s focus on failure taxonomy (#8106) and OpenClaw’s long-term backlog analysis show that **benchmarking is evolving into diagnostic tooling** — not just pass/fail metrics.

---

> ✅ **Strategic Recommendation**: Developers should prioritize **QwenPaw** for secure, modular agent development; **Hermes Agent** for smart home automation; and **ZeroClaw** for enterprise-grade, governed deployments. **OpenClaw** remains powerful but requires caution until stability improves. **IronClaw** is ideal for research and model evaluation. The ecosystem is no longer about choice of model — it’s about **trust in the platform’s operational integrity**.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-09-22**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active, with 50 new issues and 50 updated pull requests in the past 24 hours—indicating strong community engagement and ongoing development momentum. A new patch release, **v0.21.4 (v2026.9.21)**, was published, rolling up ~1,800 PRs since the previous stable version, signaling a consolidation phase for downstream users. Despite this stability push, critical bugs related to session state, model routing, and context compression continue to surface across multiple subsystems. The project shows signs of maturing complexity: feature work is advancing, but systemic issues—especially around message delivery, state persistence, and cost attribution—are emerging as persistent pain points.

---

### **2. Releases**  
- **v2026.9.21**: [Hermes Agent v0.21.4](https://github.com/nousresearch/hermes-agent/releases/tag/v0.21.4)  
  - **Type**: Patch release  
  - **Summary**: Consolidates approximately 1,800 merged PRs into a stable, production-ready tag.  
  - **Target Users**: Docker users, Hermes Cloud, hosted deployments.  
  - **Notes**: No breaking changes reported. Full changelog deferred; expect curated summaries in upcoming documentation or release notes.  
  - **Migration**: No action required unless using unstable branches or custom builds.

---

### **3. Project Progress**  
**Merged/Completed PRs (Today):**  
- ✅ **PR #118651** ([fix(deps)](https://github.com/nousresearch/hermes-agent/pull/118651)): Remediated critical/high severity Python security advisories (`anyio`, `httpx`, `httpcore`) without behavioral change.  
- ✅ **PR #118655** ([approval]: only real WHERE clears DELETE rule) — Fixed SQL injection risk in deletion logic via proper syntax scanning.  
- ✅ **PR #118654** (issue closed by fix) — Addressed unintended deletions triggered by false positives in `WHERE` keyword detection.

**Key Advances:**  
- **PR #118390** (fix: preserve whole records in lean summary sampling): Improved data integrity during context compression by avoiding partial record truncation.  
- **PR #118645** (feat(router): fail-closed per-turn model routing): Introduces opt-in safety mechanism to prevent misrouting in delegated tasks—critical for multi-profile environments.  
- **PR #118299** (plugin-catalog: add hermes-lcm memory plugin): Expanded ecosystem with a lossless context manager plugin, enabling persistent, DAG-backed message retention even after compression.

---

### **4. Community Hot Topics**  
Top 5 most-commented items reflect deep user concerns:

| Issue | Comments | Link | Summary |
|------|--------|------|--------|
| [#110126](https://github.com/nousresearch/hermes-agent/issues/110126) | 4 | [Bug: Output-cap/truncation systemic failure](https://github.com/nousresearch/hermes-agent/issues/110126) | A recurring `finish_reason='length'` issue affecting 35+ open tickets across agents, gateways, and desktop. Indicates a fundamental flaw in handling output length limits. |
| [#96355](https://github.com/nousresearch/hermes-agent/issues/96355) | 8 | [Bug: delegate_task returns completed despite schema failure](https://github.com/nousresearch/hermes-agent/issues/96355) | Critical validation gap: task marked complete even when output fails schema checks—undermines reliability of automated workflows. |
| [#35060](https://github.com/nousresearch/hermes-agent/issues/35060) | 8 | [Feature: Configurable deliver target for Home Assistant watch_entities](https://github.com/nousresearch/hermes-agent/issues/35060) | High demand for redirecting state-change events from HA to external platforms (WhatsApp, Telegram). Suggests growing integration use cases beyond core AI. |
| [#70108](https://github.com/nousresearch/hermes-agent/issues/70108) | 7 | [Bug: Desktop renders duplicate replies](https://github.com/nousresearch/hermes-agent/issues/70108) | Persistent UI glitch impacting user trust in response fidelity—shows need for robust transcript rendering. |
| [#118538](https://github.com/nousresearch/hermes-agent/issues/118538) | 3 | [Bug: OMH pre_tool_call vetoes ALL tools on multiplex gateway](https://github.com/nousresearch/hermes-agent/issues/118538) | Affects all tool usage on multiplex setups—critical for power users managing multiple profiles. |

> 🔍 **Analysis**: The community is increasingly focused on **reliability**, **integration flexibility**, and **multi-profile governance**. High comment counts on bug reports suggest that users are actively testing edge cases in complex deployment scenarios.

---

### **5. Bugs & Stability**  
**Critical Bugs Reported (P2/P1):**  
| Issue | Severity | Status | Fix PR? | Notes |
|------|----------|--------|--------|------|
| [#110126](https://github.com/nousresearch/hermes-agent/issues/110126) | P2 | Open | ❌ | Systemic `length` truncation across 4 subsystems — requires architectural fix. |
| [#107516](https://github.com/nousresearch/hermes-agent/issues/107516) | P2 | Open | ❌ | Context compression retries indefinitely with no backoff — risks DoS on slow models. |
| [#118053](https://github.com/nousresearch/hermes-agent/issues/118053) | P1 | Closed | ✅ | Image rejection deletes entire session state — fixed in v0.21.3. |
| [#118628](https://github.com/nousresearch/hermes-agent/issues/118628) | P2 | Open | ❌ | Closing session tile kills mid-flight turn — breaks background execution. |
| [#118643](https://github.com/nousresearch/hermes-agent/issues/118643) | P2 | Open | ❌ | Update leaves stale gateway in `sys.modules` — causes ImportError on macOS. |

> ⚠️ **Stability Risk**: Multiple P2/P3 bugs stem from **state management**, **concurrency**, and **gateway lifecycle** issues—suggesting deeper architectural debt in agent orchestration.

---

### **6. Feature Requests & Roadmap Signals**  
Top user-driven features indicate future direction:

| Request | Link | Implication |
|--------|------|-----------|
| **Configurable `deliver` target for `watch_entities`** ([#35060](https://github.com/nousresearch/hermes-agent/issues/35060)) | [Issue #35060](https://github.com/nousresearch/hermes-agent/issues/35060) | Strong signal for **cross-platform automation**—users want to route HA events to messaging apps, not just notifications. Likely to be prioritized in next minor release. |
| **Background/Daemon Mode for Desktop** ([#47246](https://github.com/nousresearch/hermes-agent/issues/47246)) | [Issue #47246](https://github.com/nousresearch/hermes-agent/issues/47246) | Critical for Windows/macOS usability. Indicates demand for "always-on" agent operation without terminal window. |
| **Per-task profile routing** ([#103965](https://github.com/nousresearch/hermes-agent/pull/103965)) | [PR #103965](https://github.com/nousresearch/hermes-agent/pull/103965) | Advanced multi-persona use case—allows different models, credentials, and memory per delegation. Could become core to v0.22. |
| **Chinese localization plugin** ([#118322](https://github.com/nousresearch/hermes-agent/pull/118322)) | [PR #118322](https://github.com/nousresearch/hermes-agent/pull/118322) | Shows growing international adoption. Localization is now a community-driven priority. |

> 📈 **Prediction**: Next release (v0.22) will likely include **per-task routing**, **enhanced multi-profile support**, and **better cross-integration hooks**.

---

### **7. User Feedback Summary**  
Real-world pain points reveal key user behaviors and expectations:

- **Multi-profile users** (especially on macOS/Linux) report frustration with **inconsistent configuration updates** (e.g., Desktop Settings → Models applies to all profiles) ([#118431](https://github.com/nousresearch/hermes-agent/issues/118431)).  
- **Home Assistant integrators** want more control over event delivery paths, indicating a shift from passive monitoring to **active automation**.  
- **Desktop users** complain about **duplicate messages**, **crashes on session close**, and **lack of background mode**—highlighting UX maturity needs.  
- **Cost transparency** is a concern: users note that auxiliary tasks (e.g., `kanban_decomposer`) and custom providers are not properly attributed in billing logs ([#118595](https://github.com/nousresearch/hermes-agent/issues/118595), [#118594](https://github.com/nousresearch/hermes-agent/issues/118594)).  
- **Security-conscious users** appreciate dependency fixes ([#118651](https://github.com/nousresearch/hermes-agent/pull/118651)), but remain wary of silent credential inheritance ([#111724](https://github.com/nousresearch/hermes-agent/issues/111724)).

> 💬 **Sentiment**: Users are deeply invested in the platform but demand **greater reliability, configurability, and transparency**—especially in enterprise and multi-user contexts.

---

### **8. Backlog Watch**  
High-impact issues requiring maintainer attention:

| Issue | Link | Status | Why It Matters |
|------|------|--------|--------------|
| [#110126](https://github.com/nousresearch/hermes-agent/issues/110126) | [Systemic output truncation failure](https://github.com/nousresearch/hermes-agent/issues/110126) | Open (P2) | 35+ scattered issues point to a root cause needing unified resolution. Blocks reliable long-form generation. |
| [#118538](https://github.com/nousresearch/hermes-agent/issues/118538) | [OMH pre_tool_call blocks all tools](https://github.com/nousresearch/hermes-agent/issues/118538) | Open (P3) | Breaks functionality in multiplex gateways—prevents any tool use if profile scope is missing. |
| [#118643](https://github.com/nousresearch/hermes-agent/issues/118643) | [Update leaves stale gateway](https://github.com/nousresearch/hermes-agent/issues/118643) | Open (P2) | Permanent failure post-update on macOS—impacts upgrade reliability. |
| [#118595](https://github.com/nousresearch/hermes-agent/issues/118595) | [Auxiliary task cost unattributed](https://github.com/nousresearch/hermes-agent/issues/118595) | Open (P3) | Undermines cost tracking and budgeting—critical for commercial users. |
| [#118618](https://github.com/nousresearch/hermes-agent/issues/118618) | [get_default_hermes_root lets OSError escape](https://github.com/nousresearch/hermes-agent/issues/118618) | Open (P2) | Unhandled exception can crash startup—security and stability risk. |

> 🔎 **Call to Action**: Maintainers should prioritize triaging **[#110126](https://github.com/nousresearch/hermes-agent/issues/110126)** and **[#118643](https://github.com/nousresearch/hermes-agent/issues/118643)**—they represent systemic risks to usability and upgrade path integrity.

---  
*Data Source: GitHub Activity Dashboard – 2026-09-22*  
*Prepared by: AI Agent Analyst*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest – 2026-09-22**

---

### **1. Today's Overview**  
The IronClaw project remains in a stable, maintenance-focused state as of 2026-09-22. Activity is minimal: one pull request merged and one issue opened in the past 24 hours, with no new releases. The primary activity centers around release preparation for version `1.4.1-rc.1`, indicating a near-term stable release cycle. The open issue highlights recurring model evaluation failures in the `officeqa` benchmark suite, suggesting ongoing challenges in robustness testing rather than active development spikes.

---

### **2. Releases**  
**No new releases were published today.**  
However, PR #8105 (`chore(release): cut 1.4.1-rc.1`) has been successfully merged, marking the beginning of the release candidate phase for **v1.4.1**. This update bumps the package version to `1.4.1-rc.1`, enabling automated tagging via the `cut_ironclaw_release.py` workflow. No breaking changes or migration notes are documented yet; users should expect a standard patch release unless otherwise announced.

🔗 [PR #8105 – Release Candidate Preparation](https://github.com/nearai/ironclaw/pull/8105)

---

### **3. Project Progress**  
✅ **Merged PR:**  
- **#8105** – chore(release): cut 1.4.1-rc.1  
  *Impact:* Enables formal release pipeline execution. This is a preparatory step toward finalizing v1.4.1, ensuring version consistency between manifest and Git tag during CI/CD deployment. No functional code changes were introduced—this was purely infrastructure plumbing.

---

### **4. Community Hot Topics**  
🔥 **Most Active Issue:**  
- **#8106** – [OPEN] Daily ironclaw failure taxonomy — 2026-09-21  
  *Author:* pranavraja99 | *Created:* 2026-09-21 | *Comments:* 0 | *👍:* 0  
  🔗 [Issue #8106 – Failure Taxonomy Report](https://github.com/nearai/ironclaw/issues/8106)  

**Analysis:** This issue tracks a significant number of failing tasks (47 non-pass) in the `officeqa` benchmark using DeepSeek-V4-Flash. While it lacks community engagement (no comments or reactions), its existence signals a systemic concern: a high rate of genuine model-quality errors—not hallucinations or edge-case bugs—indicating potential gaps in reasoning, instruction-following, or task-specific training. This may reflect deeper model limitations rather than tooling flaws.

---

### **5. Bugs & Stability**  
⚠️ **Reported Bug:**  
- **#8106** – 47 non-pass tasks in `officeqa` benchmark run (DeepSeek-V4-Flash)  
  *Severity:* Medium-High (impacts evaluation reliability)  
  *Root Cause Indicator:* Overwhelmingly "genuine model-quality errors" — not transient failures or test infrastructure issues.  
  *Fix Status:* No associated PR or fix submitted yet.  
  *Implication:* Suggests that current agent behavior under real-world QA scenarios is inconsistent, possibly undermining trust in benchmark results.

No other stability issues or crashes were reported in the last 24 hours.

---

### **6. Feature Requests & Roadmap Signals**  
Currently, no new feature requests have emerged in the past 24 hours. However, the persistent focus on failure analysis in `officeqa` (as seen in #8106) suggests a growing demand for:  
- **Enhanced diagnostic reporting** (e.g., failure categorization by error type: logic flaw, data misalignment, etc.)  
- **Model-level performance dashboards** tied to specific benchmarks  
- **Automated root-cause triage pipelines** for evaluation runs  

These signals point toward an upcoming roadmap emphasis on **evaluation transparency and debugging tooling**, likely prioritized in v1.4.1+.

---

### **7. User Feedback Summary**  
User feedback is currently indirect but highly informative through benchmark data:  
- Users are observing **consistent model quality degradation** in complex, real-world tasks like office QA.  
- The fact that 47 out of many tasks fail due to “genuine model-quality errors” implies dissatisfaction with current agent reasoning fidelity.  
- There’s strong implicit demand for **better insight into why models fail**, beyond pass/fail metrics—suggesting a need for richer telemetry and explainability features.

This reflects mature usage: users aren’t just running tests—they’re diagnosing model weaknesses.

---

### **8. Backlog Watch**  
🔍 **Long-standing Critical Issue:**  
- **#8106** – Daily ironclaw failure taxonomy — 2026-09-21  
  *Status:* Open since 2026-09-21 (1 day old)  
  *Why it matters:* Despite being newly opened, it addresses a recurring pattern across multiple runs. It’s a foundational issue for improving evaluation rigor. Without structured failure taxonomy, long-term progress tracking becomes unreliable.  
  *Recommendation:* Assign to a maintainer for triage and initiate a standardized failure classification schema.

🔗 [Issue #8106 – Failure Taxonomy](https://github.com/nearai/ironclaw/issues/8106)

---

**Summary Assessment:**  
IronClaw is in a healthy, low-activity phase focused on release readiness. The absence of new bugs or regressions is positive, but the emergence of a high-impact failure pattern in `officeqa` warrants immediate attention. The project is poised for a minor release (v1.4.1-rc.1), but long-term sustainability depends on investing in evaluation diagnostics. Prioritize failure taxonomy (#8106) to enable data-driven improvements.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-09-22**

---

### **1. Today's Overview**  
QwenPaw remains highly active with a robust pace of development: **33 pull requests** and **17 issues** updated in the past 24 hours, indicating strong community engagement and ongoing refinement. While no new releases were issued, significant progress was made on core stability, UI/UX polish, and model provider integration. The project is clearly in a phase of deep technical iteration—particularly around agent safety, context management, and cross-platform reliability—suggesting readiness for a minor release (e.g., `2.2.3`) soon. The high volume of bug fixes and PRs focused on edge cases signals maturity in production use.

---

### **2. Releases**  
❌ **No new releases** were published as of 2026-09-22.  
*Note:* The last version available is `2.2.2b3` (beta), with several critical fixes pending merge into main. Users should expect an imminent patch release to address security-sensitive bugs like prompt injection and Windows console termination risks.

---

### **3. Project Progress**  
✅ **Merged & Closed PRs (Today):**  
- **PR #7919**: Fixed DoomLoopGate over-escalation by requiring *new tool-call evidence* before terminating — directly resolving **Issue #7905**.  
- **PR #7915**: Defaulted Responses API function tools to `strict: false`, fixing schema-related validation failures after nullable removal (**Issue #7907**).  
- **PR #7918**: Cleaned up accidental design docs from `main` (`docs/design/`), improving codebase hygiene.  
- **PR #7913**: Upgraded `agentscope` dependency to `2.0.8`, aligning with upstream improvements.  
- **PR #7911**: Expanded unit test coverage in `src/qwenpaw` by +3.28pp (+2720 test cases), enhancing long-term maintainability.  
- **PR #7906**: Prevented stale doom-loop escalation by resetting state on text-only rounds — resolved **Issue #7905**.  

These merges reflect a strong focus on **agent safety**, **API reliability**, and **test infrastructure**.

---

### **4. Community Hot Topics**  
🔥 **Top Issues by Activity:**  
- **[Issue #7859]**: Persistent prompt injection in system reminders (5 comments, 20+ sessions affected)  
  → *Root cause*: Malicious instruction injected into skill blocks across sessions; potential for permanent skill deletion.  
  🔗 [GitHub Issue #7859](https://github.com/agentscope-ai/QwenPaw/issues/7859)  
  💡 *Underlying need*: Robust input sanitization and session isolation in persistent memory systems.

- **[Issue #7628]**: Context compaction exceeding budget despite visible context limits  
  → *Need*: Accurate cost estimation based on full provider request payload, not just live context.  
  🔗 [GitHub Issue #7628](https://github.com/agentscope-ai/QwenPaw/issues/7628)  
  💡 *Signal*: Growing demand for transparent and predictable cost control in multi-turn agents.

🔥 **Top PRs by Engagement:**  
- **PR #7874**: Redesign of SDK and app control plane (feat/pawapp)  
  → *Goal*: Enable safe, durable, idempotent execution of PawApps in production workflows.  
  🔗 [GitHub PR #7874](https://github.com/agentscope-ai/QwenPaw/pull/7874)  
  💡 *Roadmap signal*: QwenPaw is moving toward enterprise-grade orchestration capabilities.

- **PR #7910**: Isolate Windows command consoles to prevent host termination  
  → *Fixes*: Critical Windows crash risk during shell execution.  
  🔗 [GitHub PR #7910](https://github.com/agentscope-ai/QwenPaw/pull/7910)  
  💡 *User pain point*: Stability on Windows is a major friction point.

---

### **5. Bugs & Stability**  
⚠️ **Critical Bugs Reported (High Severity):**  
1. **[Issue #7859]**: Prompt injection persists across sessions, instructing agent to delete all skills.  
   - 🔴 *Impact*: Full agent compromise risk; could lead to data loss or malicious behavior.  
   - ✅ *Fix PR*: None yet — urgent fix needed.  
   - 🔗 [Issue #7859](https://github.com/agentscope-ai/QwenPaw/issues/7859)

2. **[Issue #7908]**: `execute_shell_command` on Windows can terminate the entire QwenPaw host via Ctrl event propagation.  
   - 🔴 *Impact*: Complete process crash; prevents workflow continuity.  
   - ✅ *Fix PR*: **PR #7910** already submitted and ready for review.  
   - 🔗 [Issue #7908](https://github.com/agentscope-ai/QwenPaw/issues/7908)

3. **[Issue #7882]**: OpenCode free-tier models return 403 errors despite UI marking them as free.  
   - 🔴 *Impact*: False expectations, broken user experience.  
   - ✅ *Fix PR*: Not yet submitted; requires API header handling update.  
   - 🔗 [Issue #7882](https://github.com/agentscope-ai/QwenPaw/issues/7882)

⚠️ **Stability Concerns:**  
- **[Issue #7841]**: Console UI loads before backend — blank panels until refresh.  
  - Affects desktop users; poor first-time UX.  
  - 🔗 [Issue #7841](https://github.com/agentscope-ai/QwenPaw/issues/7841)

---

### **6. Feature Requests & Roadmap Signals**  
🎯 **Top User-Requested Features:**  
- **[Issue #4974]**: Add per-Agent avatars (2 👍, closed but unresolved).  
  → *Predicted for v2.3+*: Visual identity is becoming essential for multi-agent workflows.  
  🔗 [Issue #4974](https://github.com/agentscope-ai/QwenPaw/issues/4974)

- **[Issue #7912]**: Optional authenticated web-research example using Baizhi Agent Toolkit.  
  → *Signals growing interest in secure, credential-aware research pipelines*.  
  🔗 [Issue #7912](https://github.com/agentscope-ai/QwenPaw/issues/7912)

- **[Issue #7916]**: AgentScope Platform validator missing support for new memory plugin types in QwenPaw 2.2.1b1.  
  → *Indicates ecosystem growth*: More plugins = more validation needs.  
  🔗 [Issue #7916](https://github.com/agentscope-ai/QwenPaw/issues/7916)

💡 **Predicted Next Release (v2.3):**  
Likely to include:  
- Avatar support  
- Enhanced memory plugin validation  
- Improved Windows shell sandboxing  
- Better context cost estimation  
- Stable, non-blocking console startup

---

### **7. User Feedback Summary**  
💬 **Real Pain Points:**  
- **Windows instability**: Multiple users report crashes during shell execution (**#7908**) and delayed startup (**#7841**).  
- **Confusion around free tiers**: OpenCode’s misleading UI leads to failed requests (**#7882**).  
- **Session interruptions**: JD Cloud users report abrupt mid-task disconnections (**#3419**).  
- **Invisible failures**: Silent skill unavailability due to missing YAML frontmatter (**#7921**) frustrates developers.  

✅ **Positive Sentiment:**  
- High praise for modular design (PawApps, plugins).  
- Appreciation for detailed documentation and open issue tracking.  
- Satisfaction with recent test coverage gains (**#7911**).

---

### **8. Backlog Watch**  
📌 **Long-Unanswered Critical Issues Needing Attention:**  
- **[Issue #7859]**: Persistent prompt injection (8 days old, 5 comments, 0 reactions) — **urgent security risk**.  
  🔗 [Issue #7859](https://github.com/agentscope-ai/QwenPaw/issues/7859)  
  ⚠️ *Action required*: Immediate triage and patch.

- **[Issue #7628]**: Context compaction budget miscalculation (14 days old, 4 comments) — affects cost predictability.  
  🔗 [Issue #7628](https://github.com/agentscope-ai/QwenPaw/issues/7628)  
  ⚠️ *High priority*: Needed for production deployments.

- **[Issue #7921]**: Missing YAML frontmatter in `omp-roles` SKILL.md — silently breaks functionality.  
  🔗 [Issue #7921](https://github.com/agentscope-ai/QwenPaw/issues/7921)  
  ⚠️ *Low visibility but high impact*: Fix PR exists (**#7922**) — needs merging.

- **[Issue #4974]**: Avatar support requested since April 2026 — now 5 months old, 2 👍.  
  🔗 [Issue #4974](https://github.com/agentscope-ai/QwenPaw/issues/4974)  
  ⚠️ *Sign of growing UX maturity* — likely feature for next stable release.

---

> ✅ **Overall Project Health**: **Strong** — high activity, rapid iteration, and responsive maintainers.  
> ⚠️ **Risks**: Security-critical bugs (#7859) and Windows stability remain top concerns.  
> 📈 **Next Step**: Prepare for **v2.3 release** with focus on stability, security, and user-facing polish.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest**  
**Date:** 2026-09-22  
**Repository:** [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

### **1. Today's Overview**

The ZeroClaw project remains highly active with a surge in developer engagement: **50 issues and 50 pull requests updated in the last 24 hours**, indicating robust momentum in both bug triage and feature development. Despite no new releases, the ecosystem is stabilizing through focused PRs addressing critical security, context management, and agent concurrency concerns. High-severity bugs (S1/S0) are actively being addressed, particularly around daemon stability, memory safety, and session integrity. The community is deeply engaged in governance refinement via RFCs and architectural decisions, signaling a maturing project with growing operational rigor.

---

### **2. Releases**

**None**  
No new releases were published today. The project continues to operate on the current `master` branch with ongoing stabilization efforts via CI/CD improvements and dependency hardening.

---

### **3. Project Progress**

**Merged/Closed PRs (Today):**  
- **PR #11038**: *chore(security): ignore RUSTSEC-2026-0292 (imbl-sized-chunks double free)* – Addresses a false-positive security alert from `cargo deny`, enabling CI to pass despite non-exploitable vulnerability in a transitive dependency.  
- **PR #11025**: *fix(parser): normalize tool aliases across text formats* – Ensures consistent tool naming across JSON, XML, Markdown, and MiniMax formats, improving interoperability.  
- **PR #11026**: *fix(tools): redact proxy credentials from snapshots* – Enhances security by preventing sensitive data leakage in diagnostic outputs.  
- **PR #11032**: *refactor(channels): gate tools dependency by channel features* – Reduces bloat by making `zeroclaw-tools` optional outside core channels (`acp-server`, `email`, `matrix`).  

These changes reflect a focus on **security hygiene**, **dependency clarity**, and **cross-format consistency**, laying groundwork for future scalability.

---

### **4. Community Hot Topics**

| Issue/PR | Summary | Link | Activity |
|--------|--------|------|---------|
| **Issue #8692** – Maintainer decision queue for RFCs | Establishing a formalized tracker for RFCs and design decisions to prevent stagnation and improve transparency. | [GitHub #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 15 comments, high priority |
| **Issue #10970** – Host-scoped admission control & per-agent resource bounds | Urgent need for machine-level resource limits to prevent instability when running many agents. | [GitHub #10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970) | 4 comments, high risk |
| **PR #10263** – feat(security): compose principal tool selectors into agent sessions | A major security enhancement that enables fine-grained access control; depends on prior work (#10259). | [GitHub #10263](https://github.com/zeroclaw-labs/zeroclaw/pull/10263) | 0 comments, accepted, XL size |

**Analysis**: The community is prioritizing **governance maturity** (RFC tracking), **system resilience at scale** (resource bounding), and **granular security policy enforcement** (tool selector composition). These signals indicate the project is transitioning from rapid feature buildout to production-hardened deployment readiness.

---

### **5. Bugs & Stability**

| Severity | Issue | Summary | Status | Fix PR? |
|--------|------|--------|-------|--------|
| **S1 (Workflow Blocked)** | #9191 – Cron jobs have no wall-clock timeout | Jobs can hang indefinitely, risking system lockup. | Open | ❌ |
| **S1 (Workflow Blocked)** | #10230 – Daemon startup overflow during agent init | Stack overflow during Quickstart config apply blocks workflow. | Open | ❌ |
| **S1 (Workflow Blocked)** | #10231 – Channels supervisor retries stale config | Causes repeated failed attempts after valid config update. | Open | ❌ |
| **S0 (Security Risk)** | #10379 – Unable to cancel ongoing message in ZeroClaw Desktop | UI button disabled; process cannot be stopped. | Open | ❌ |
| **S0 (Data Loss)** | #10536 – macOS Seatbelt ignores allowed_roots | Security policy bypass on macOS; root-level access not enforced. | Open | ❌ |

**Critical Note**: Four S1/S0 bugs remain unresolved, impacting **workflow reliability**, **user control**, and **platform-specific security**. Immediate attention required—especially #10536 and #10379, which affect user trust and safety.

---

### **6. Feature Requests & Roadmap Signals**

| Feature Request | Description | Priority | Signal |
|----------------|------------|---------|--------|
| **Issue #10970** – Host-scoped resource bounds | Limit concurrent turns, tool execution, and memory per agent. | P2, High Risk | Indicates scaling needs beyond single-agent use cases. Likely in Q4 2026. |
| **Issue #11027** – Agent-to-agent messaging with receiver discretion | Enable secure, isolated coordination between agents without history merge. | P2, High Risk | Signals move toward multi-agent collaboration ecosystems. |
| **PR #11041** – Build web UI as Nix package | Enables reproducible, hermetic deployments. | Low Risk, Size:M | Reflects growing interest in DevOps integration and infrastructure-as-code. |
| **Issue #10975** – WhatsApp inbound image download support | Critical for vision-capable agents on WhatsApp. | P1, Medium Risk | User-driven demand for platform parity. |

**Prediction**: Next version will likely include **host-level resource limiting (Q4 2026)**, **agent-to-agent communication primitives**, and improved **Nix-based deployment support**.

---

### **7. User Feedback Summary**

- **Pain Points**:  
  - Users report **inability to stop long-running AI processes** (UI unresponsive) — a major UX failure.  
  - **WhatsApp images appear as `[Image]` text**, rendering vision models useless.  
  - **Config metadata remains English** even in localized interfaces — frustrates non-English users.  
  - **Session context capped at 32k tokens** despite higher `max_context_tokens` — undermines performance expectations.  

- **Satisfaction Signals**:  
  - Positive traction on **ZeroCode sidebar enhancements** (e.g., #9727) — users appreciate side-by-side agent monitoring.  
  - Appreciation for **security fixes** like credential redaction (#11026) and advisory waivers (#11038).  

**User Voice Theme**: Demand for **control**, **predictability**, and **multi-platform parity** is strong, especially on mobile (WhatsApp) and desktop (ZeroClaw Desktop).

---

### **8. Backlog Watch**

| Issue | Status | Why It Matters | Link |
|------|--------|---------------|------|
| **Issue #8692** – Maintainer decision queue | Accepted, No Stale | Critical for reducing RFC backlog and improving maintainability. Without this, innovation stalls. | [GitHub #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| **Issue #10970** – Host-scoped resource bounds | In-progress, Needs Review | Foundational for large-scale deployment. Blocking further growth in agent density. | [GitHub #10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970) |
| **PR #11011** – Restore Windows runner inventories | Open, Distinguished Contributor | Prevents CI failures on Windows; essential for cross-platform compatibility. | [GitHub #11011](https://github.com/zeroclaw-labs/zeroclaw/pull/11011) |
| **PR #10958** – Fix interruption scope key collision | Open, Experienced Contributor | Fixes potential race condition in channel lifecycle handling — subtle but high-risk. | [GitHub #10958](https://github.com/zeroclaw-labs/zeroclaw/pull/10958) |

**Call to Action**: Maintainers should prioritize **issue triage** (especially #8692) and **review high-risk PRs** (#10970, #10958) to prevent technical debt accumulation and ensure timely delivery of next-gen capabilities.

---  
✅ **Project Health**: **High activity, moderate stability, strong security focus, urgent need for leadership in governance and S1/S0 bug resolution.**

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*