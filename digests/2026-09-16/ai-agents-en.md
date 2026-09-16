# OpenClaw Ecosystem Digest 2026-09-16

> Issues: 467 | PRs: 500 | Projects covered: 5 | Generated: 2026-09-16 00:45 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# **OpenClaw Project Digest – 2026-09-16**

---

### **1. Today's Overview**  
The OpenClaw project remains highly active, with **467 issues updated in the last 24 hours** (295 open, 172 closed) and **500 pull requests** (357 open, 143 merged/closed), indicating sustained development momentum. A surge in high-severity issues—particularly those labeled `P0`/`P1` and rated 🦞 diamond lobster or 🦪 silver shellfish—suggests ongoing stability challenges affecting core runtime behavior. Despite no new releases, multiple critical fixes are being proposed via PRs, especially around memory management, session state corruption, and gateway crash loops.

---

### **2. Releases**  
❌ **No new releases** were published today. The latest stable version remains **2026.9.4**, which has already triggered several regressions (e.g., #148866, #146637, #144739). Users on this version are experiencing update failures, restart loops, and memory leaks, underscoring urgency for a patch release.

---

### **3. Project Progress**  
✅ **143 PRs merged or closed** today, reflecting strong contributor engagement. Notable progress includes:
- **UI/UX refinements**: Multiple PRs improve web UI responsiveness and readability (#149351, #149384, #149141).
- **Stability fixes**: Critical improvements to SQLite handling (#149516), session cleanup reporting (#149546), and heartbeat fallback logic (#149549).
- **Performance optimization**: Reduction of CPU usage during cold catalog listings (#149533) and Codex session memory bloat (#149520).
- **Security & compatibility**: Fixes for credential storage (#149548), plugin manifest resolution (#146391), and database maintenance race conditions (#148941).

These changes collectively target **runtime reliability, UX clarity, and long-term maintainability**.

---

### **4. Community Hot Topics**  
The most discussed items reflect deep concerns about **core system integrity and user trust**:

| Issue | Comments | Severity | Link |
|------|----------|----------|------|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 40 | 🦞 diamond lobster (security) | Internal agent text leaking into public channels |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 31 | 🦞 diamond lobster (crash loop) | Zombie process accumulation from hooks/tools |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 25 | 🦞 diamond lobster (OOM) | Gateway memory leak from 350MB → 15.5GB |
| [#144739](https://github.com/openclaw/openclaw/issues/144739) | 6 | 🦪 silver shellfish (release blocker) | Update failure due to schema mismatch |

> 🔍 **Underlying Need**: Users demand **predictable, secure, and resilient execution environments**. Leaks, crashes, and silent data loss erode confidence in production use. These top issues signal that **system-level robustness is now the primary bottleneck**.

---

### **5. Bugs & Stability**  
Critical stability issues dominate today’s activity, with **12 P0/P1 bugs reported** and **no fix PRs yet available** for the top-tier ones:

| Bug | Impact | Status | Fix PR? | Link |
|-----|--------|--------|---------|------|
| [Issue #25592](https://github.com/openclaw/openclaw/issues/25592) | Security: internal text leaked to users | Open | ❌ No | Text between tool calls leaks to messaging channels |
| [Issue #97616](https://github.com/openclaw/openclaw/issues/97616) | Crash loop: zombie processes | Open | ❌ No | Hook/tool child processes not reaped |
| [Issue #91588](https://github.com/openclaw/openclaw/issues/91588) | OOM: RSS grows to 15.5GB | Open | ❌ No | Gateway memory leak |
| [Issue #144911](https://github.com/openclaw/openclaw/issues/144911) | Gateway crash on MCP init timeout | Open | ❌ No | Unhandled promise rejection |
| [Issue #139847](https://github.com/openclaw/openclaw/issues/139847) | Message dropped during reply run | Open | ❌ No | Regression in 2026.9.2 |
| [Issue #143524](https://github.com/openclaw/openclaw/issues/143524) | SQLite WAL grows to 2.8GB | Open | ❌ No | Blocks startup on Windows |

> ⚠️ **Trend**: Memory leaks, process zombies, and unhandled exceptions are recurring themes. **Without immediate triage, these will prevent adoption in production environments.**

---

### **6. Feature Requests & Roadmap Signals**  
User-driven feature requests reveal growing interest in **customization, observability, and cross-platform integration**:

| Request | Priority | Use Case | Link |
|--------|----------|----------|------|
| [Issue #51441](https://github.com/openclaw/openclaw/issues/51441) | P2 | Expose actual backend model used (not just alias) | Needed for agent decision-making |
| [Issue #51572](https://github.com/openclaw/openclaw/issues/51572) | P2 | Fire `session-memory` hook on reset/prune, not just compaction | Prevents context loss in idle sessions |
| [Issue #60602](https://github.com/openclaw/openclaw/issues/60602) | P3 | Per-agent Bedrock cost attribution via requestMetadata | Critical for multi-agent billing |
| [Issue #46058](https://github.com/openclaw/openclaw/issues/46058) | P3 | Chat-first Android surface | Mobile-first user base emerging |

> 📌 **Prediction**: The next release (likely **2026.9.5**) will include **backend model visibility**, **session lifecycle hooks**, and **Android surface support**, driven by community demand.

---

### **7. User Feedback Summary**  
Real-world pain points highlight **frustration with unreliability and poor error feedback**:

- **"Messages vanish silently"** – Telegram, Discord, and Web UI users report messages lost without logs (#80520, #139847).
- **"I can’t tell what’s broken"** – Generic errors like `"Reply operation has no active tool authority snapshot"` appear frequently, with no diagnostic guidance.
- **"My session dies after 2 days"** – Repeated OOM kills due to memory leaks (#91588) force manual restarts.
- **"Updates break my setup"** – Multiple users report failed npm updates post-2026.9.3 (#148866, #146637, #144739).
- **"Heartbeats leak internal logs"** – Background system output appears in user chat (#143278).

> ✅ **Satisfaction signals**: Users appreciate fine-grained control (CLI, cron jobs) and rich plugin ecosystem. However, **trust is eroding due to instability**.

---

### **8. Backlog Watch**  
Several **high-impact, long-standing issues** remain unresolved and require maintainer attention:

| Issue | Age | Severity | Status | Link |
|------|-----|----------|--------|------|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 24 Feb 2026 | 🦞 diamond lobster | Open, needs security review | Text leakage |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 9 Jun 2026 | 🦞 diamond lobster | Open, stale flag removed | Memory leak |
| [#115367](https://github.com/openclaw/openclaw/issues/115367) | 28 Jul 2026 | 🦞 diamond lobster | Closed, but not fixed | Read gate misbehavior |
| [#108395](https://github.com/openclaw/openclaw/issues/108395) | 15 Jul 2026 | 🦞 diamond lobster | Open, regression | Fake "Human:" message generation |
| [#137613](https://github.com/openclaw/openclaw/issues/137613) | 3 Sep 2026 | 🦞 diamond lobster | Open, needs fix strategy | CLI backends skip pre-compaction flush |

> 🔔 **Urgent Call to Action**: Maintainers must prioritize **security, memory safety, and session consistency**. These issues are not isolated—they indicate systemic weaknesses in state management and error handling.

---

**Project Health Score**: ⚠️ **Moderate Risk**  
While innovation and community engagement remain strong, **critical stability issues threaten deployment viability**. Immediate focus on core reliability is essential to maintain user trust and accelerate adoption.

---

## Cross-Ecosystem Comparison

# **Cross-Project Comparison Report: Personal AI Agent Ecosystem – 2026-09-16**

---

### **1. Ecosystem Overview**  
The open-source personal AI assistant and agent ecosystem in Q3 2026 is characterized by rapid maturation, shifting from individual productivity tools toward team-centric, enterprise-ready platforms. Projects are converging on core infrastructure needs—interoperability (MCP), security, memory safety, and observability—while diverging in target use cases: OpenClaw and ZeroClaw prioritize runtime reliability and multimodal execution, Hermes Agent emphasizes workflow automation and access control, and QwenPaw is actively building multi-tenant Hub capabilities. Despite strong community engagement across all projects, systemic stability challenges threaten production adoption, signaling a critical inflection point where robustness must outpace feature velocity.

---

### **2. Activity Comparison**

| Project         | Issues Updated (24h) | PRs Updated (24h) | Release Status       | Health Score (10) |
|----------------|----------------------|-------------------|----------------------|------------------|
| **OpenClaw**   | 467                  | 500               | ❌ No new release     | ⚠️ 6.0 (Moderate Risk) |
| **Hermes Agent** | 50                   | 50                | ❌ No new release     | ⚠️ 6.8 (Stable but Fragile) |
| **IronClaw**   | 0                    | 0                 | —                    | 🟨 4.0 (Inactive) |
| **QwenPaw**    | 28                   | 50                | ❌ No new release     | ✅ 8.2 (Improving) |
| **ZeroClaw**   | 50                   | 50                | ❌ No new release     | ✅ 8.5 (High Momentum) |

> *Note: High activity ≠ high health; OpenClaw’s volume reflects instability, while ZeroClaw and QwenPaw show productive momentum with focused engineering.*

---

### **3. OpenClaw's Position**  
OpenClaw remains the most active project in terms of issue and PR volume, but its leadership is under strain due to **critical stability failures** impacting core runtime behavior. Unlike peers that focus on incremental improvements or platform expansion, OpenClaw is grappling with **systemic issues**—memory leaks (OOM), session corruption, and process zombies—that undermine trust in production use. Its technical approach leans heavily on monolithic runtime integration, which amplifies risk when bugs propagate across components. While community size appears large (evidenced by comment volume), it also indicates widespread frustration rather than confidence. In contrast, QwenPaw and ZeroClaw demonstrate more disciplined development with fewer P0 bugs per contributor, suggesting better architectural discipline despite lower raw activity.

---

### **4. Shared Technical Focus Areas**  
Multiple projects are converging on several high-priority technical requirements:

- **Memory & Session Management**:  
  - OpenClaw (#91588, #149520), QwenPaw (#7678, #7764), and ZeroClaw (#10885) all report **session state corruption**, **memory bloat**, or **silent task termination**—indicating a cross-cutting challenge in async I/O and lifecycle handling.
  
- **Security Hardening**:  
  - OpenClaw (#25592), Hermes Agent (#112460), and ZeroClaw (#5869) highlight **credential exposure** during diagnostics, logging, or dependency chains—revealing a need for secure forensic practices and supply chain hygiene.

- **Error Visibility & Diagnostics**:  
  - Users across OpenClaw (“Messages vanish silently”), Hermes Agent (“No diagnostic guidance”), and QwenPaw (“File downloads invisible”) demand **actionable error feedback**, indicating poor UX in failure scenarios.

- **Inter-Agent & Tool Orchestration**:  
  - QwenPaw (#7778), ZeroClaw (#10885), and Hermes Agent (#103483) face challenges in **precise tool invocation**, **state persistence**, and **streaming reliability**, signaling a shared need for deterministic, observable workflows.

---

### **5. Differentiation Analysis**

| Aspect                     | OpenClaw                          | Hermes Agent                      | QwenPaw                            | ZeroClaw                           |
|----------------------------|-----------------------------------|-----------------------------------|------------------------------------|------------------------------------|
| **Target User**            | Power users, developers           | Teams, engineers, ops             | Enterprise teams, orgs             | Advanced developers, integrators   |
| **Feature Focus**          | Core runtime stability            | Workflow automation, access control | Multi-tenant Hub, UI flexibility   | A2A communication, multimodal      |
| **Architecture**           | Monolithic runtime                | Modular agents + gateways         | Plugin-driven, MCP-first           | WASM/OCI-based plugins             |
| **Key Differentiator**     | High-volume contributor base      | Native TLS, CLI security          | Hub mode, explicit tool syntax     | Inter-agent wire model, OCI support |

> *QwenPaw and ZeroClaw are leading in **platform scalability** and **extensibility**, while OpenClaw lags in these areas despite its scale. Hermes Agent stands out in **security posture** and **workflow governance**, though at the cost of user-facing polish.*

---

### **6. Community Momentum & Maturity**

- **Rapid Iteration (High Momentum)**:  
  - **ZeroClaw**: Highest technical maturity in architecture (RFCs, ADRs, OCI plans). Strong focus on long-term extensibility.
  - **QwenPaw**: Fast-moving toward enterprise readiness with clear roadmap signals (Hub, `//` syntax, config workspaces).

- **Stabilization Phase (Balancing Features & Reliability)**:  
  - **Hermes Agent**: Mature feature set but burdened by unresolved P1 bugs and unsigned releases—needs trust-building via security transparency.

- **Declining/Fragmented Activity**:  
  - **IronClaw**: No activity—potential stagnation or transition phase.
  - **OpenClaw**: High activity masked by **crisis-level stability issues**—momentum is reactive, not strategic.

> *Maturity is no longer measured by commit count alone. Projects like ZeroClaw and QwenPaw are demonstrating true maturity through structured RFCs, dependency hygiene, and forward-looking design—hallmarks of sustainable ecosystems.*

---

### **7. Trend Signals**  
Based on community feedback and project direction, key industry trends emerging include:

1. **Shift from Individual to Team-Centric AI Agents**:  
   - QwenPaw’s Hub discussions (#7318), Hermes Agent’s role-based delegation (#112369), and ZeroClaw’s A2A model signal that **multi-agent collaboration** is becoming the norm—not the exception.

2. **Demand for Predictable, Observable Workflows**:  
   - Repeated complaints about “messages vanishing,” “tasks not stopping,” and “no error logs” indicate a growing need for **audit trails**, **debuggability**, and **deterministic state management**—critical for production use.

3. **Security as a Non-Negotiable Requirement**:  
   - Credential leaks in shutdown logs (Hermes, OpenClaw), unsigned releases (Hermes), and outdated crypto deps (ZeroClaw) reveal that **security-by-default** is now a baseline expectation.

4. **Tool Precision Over Abstraction**:  
   - The push for `//` syntax in QwenPaw and fine-grained model visibility in OpenClaw shows users want **explicit control**, not black-box automation—favoring **orchestration clarity** over convenience.

5. **Enterprise Readiness = Extensibility + Governance**:  
   - OCI registries (ZeroClaw), role-based access (QwenPaw), and audit trails (Hermes) confirm that **supply chain integrity**, **access control**, and **compliance visibility** are now top priorities for adopters.

---

### **Conclusion for Developers & Decision-Makers**  
The ecosystem is entering a **quality-over-quantity phase**. While OpenClaw leads in activity, it risks being overtaken by QwenPaw and ZeroClaw—projects with clearer vision, stronger architectural foundations, and faster alignment with enterprise needs. For developers prioritizing **reliability, security, and scalability**, **QwenPaw v2.3** and **ZeroClaw v0.22+** represent higher-value bets. Meanwhile, **Hermes Agent** offers mature tooling but requires caution due to unaddressed security gaps. The future belongs not to the most active project—but to those who solve **predictability, trust, and governance** at scale.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **Hermes Agent Project Digest – 2026-09-16**

---

### **1. Today's Overview**  
The Hermes Agent project remains highly active, with 50 new issues and 50 pull requests updated in the past 24 hours—indicating strong community engagement and ongoing development momentum. No new releases were published, suggesting a focus on stabilization and feature refinement ahead of a potential v0.22 release. The volume of open issues reflects growing complexity in agent lifecycle management, security hardening, and cross-platform UX consistency. Critical bugs related to session state corruption, credential exposure, and model switching are receiving urgent attention.

---

### **2. Releases**  
❌ **No new releases** were published today.  
- The last release was v0.21.3 (August 2026), and no version updates have been tagged since v2026.8.13.  
- ⚠️ **Security concern**: Release tags have been unsigned since `v2026.8.13` (Issue #87948), raising questions about trust and downstream verification—this may impact enterprise adoption.

---

### **3. Project Progress**  
✅ **Merged PRs (Today):**  
- **PR #112455** (`feat(dashboard): support native TLS`) – Enables direct certificate serving via Uvicorn, eliminating need for reverse proxies (e.g., for OAuth providers like Notion).  
- **PR #50230** (`feat(sessions): add client-safe custom metadata`) – Allows external labeling of sessions (e.g., issue IDs) without modifying prompts or config.  
- **PR #97018** (`fix(gateway): resolve approvals.mode via canonical normalizer`) – Resolves false security warnings due to YAML boolean parsing quirks.  

🔧 **Key advancements:**  
- Native TLS support improves deployment flexibility.  
- Custom metadata enables better workflow integration.  
- Security posture improvements in startup checks.

---

### **4. Community Hot Topics**  
🔥 **Top Issue: #88584 – Automated Nous integration blocked**  
- **Comments:** 104 | **Created:** 2026-08-17 | **Updated:** 2026-09-15  
- **Link:** [GitHub #88584](https://github.com/NousResearch/hermes-agent/issues/88584)  
- **Summary:** Merge conflicts in `cron/jobs.py` block automated sync between Nous and Enterkey branches. Workflow failure impacts CI/CD pipeline.  
- **Underlying Need:** Robust, automated integration workflows for multi-repo agent ecosystems—critical for team-based AI agent development.

🔥 **Top PR: #112460 – Fix: Redact secrets from shutdown forensic argv dumps**  
- **Comments:** 0 | **Created:** 2026-09-16  
- **Link:** [GitHub #112460](https://github.com/NousResearch/hermes-agent/pull/112460)  
- **Summary:** Prevents live credentials (e.g., `LINEAR_API_KEY=...`) from being written to disk during shutdown diagnostics.  
- **Underlying Need:** Immediate security hardening of forensic logging—especially for production deployments.

🔥 **High-engagement Bug: #103483 – Muse Spark cuts off mid-task**  
- **Comments:** 15 | **Likes:** 11 | **Created:** 2026-09-05  
- **Link:** [GitHub #103483](https://github.com/NousResearch/hermes-agent/issues/103483)  
- **Summary:** Model returns `finish_reason=stop` but outputs a single unrelated word, breaking user experience.  
- **Underlying Need:** Stable streaming behavior and robust handling of edge cases in LLM response termination.

---

### **5. Bugs & Stability**  
🚨 **Critical (P1/P2):**  
| Issue | Description | Severity | Fix PR? |
|------|-------------|----------|--------|
| [#111761](https://github.com/NousResearch/hermes-agent/issues/111761) | Reasoning promoted into visible content even with empty `content` — pollutes chat history | P1 | ❌ No |
| [#111949](https://github.com/NousResearch/hermes-agent/issues/111949) | Desktop SSH mode fails on zsh login shells due to `set -m` fatal error | P2 | ❌ No |
| [#112387](https://github.com/NousResearch/hermes-agent/issues/112387) | Stall backoff suppresses fallback retry → "Context compression timed out" despite working fallback | P2 | ❌ No |
| [#111912](https://github.com/NousResearch/hermes-agent/issues/111912) | FATAL `DeletedWalGenerationError` on startup after manual update/SIGKILL | P2 | ❌ No |

⚠️ **Stability Risks:**  
- **Session state corruption** (e.g., #41225: background processes killed by SIGTERM; #86565: status dot stays blue during approval wait).  
- **Database integrity threats** (e.g., #111912 crash, #112378: lockfile desync leading to `npm 10 edgesOut` crash).

---

### **6. Feature Requests & Roadmap Signals**  
🎯 **High-potential features for v0.22+** based on demand and technical alignment:  
- **Self-tuning harness (#111237)** – Opt-in local evolver loop to auto-improve agent skills via statistical credit.  
- **Named sub-agent roles (#112369)** – Enable structured delegation (e.g., "implementer" vs "reviewer") in MoA workflows.  
- **Korean language support (#52532)** – Clear global accessibility need.  
- **Mermaid code view toggle (#52437)** – UX improvement for visual output users.  
- **Native TLS support (#112455)** – Already merged—signals infrastructure modernization push.

📌 **Trend:** Users are pushing for **more autonomous, auditable, and customizable agent behaviors**, especially in complex workflows (engineering, security audits).

---

### **7. User Feedback Summary**  
💬 **Real pain points reported:**  
- **UX Friction:**  
  - Model switch confirmation lacks "Cancel" button (Issue #112458).  
  - Sidebar shows "No sessions yet" despite existing sessions (Issue #106003).  
  - Command Center only searches loaded sessions (Issue #51694).  
- **Cost Transparency Issues:**  
  - 83% token consumption discrepancy with Anthropic API (Issue #105675) raises billing trust concerns.  
- **Security Concerns:**  
  - CLI can bypass system-config write protection (Issue #59293).  
  - Shutdown logs expose live credentials (Issue #112459).  
- **Workflow Gaps:**  
  - File attachments fail due to root path mismatch (Issue #98634).  
  - WhatsApp bridge uses outdated `body-parser` with 3 moderate vulnerabilities (Issue #112382).

➡️ **Overall sentiment:** High satisfaction with core functionality, but frustration with **stability, security hygiene, and UX polish** in advanced use cases.

---

### **8. Backlog Watch**  
🔍 **Long-standing, high-impact issues needing maintainer attention:**  
| Issue | Age | Comments | Status | Link |
|------|-----|---------|--------|------|
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | 30 days | 104 | Open, invalid | [GitHub #88584](https://github.com/NousResearch/hermes-agent/issues/88584) |
| [#59293](https://github.com/NousResearch/hermes-agent/issues/59293) | 102 days | 11 | Needs decision | [GitHub #59293](https://github.com/NousResearch/hermes-agent/issues/59293) |
| [#87948](https://github.com/NousResearch/hermes-agent/issues/87948) | 31 days | 4 | Needs decision | [GitHub #87948](https://github.com/NousResearch/hermes-agent/issues/87948) |
| [#111237](https://github.com/NousResearch/hermes-agent/issues/111237) | 2 days | 3 | P3, Feature | [GitHub #111237](https://github.com/NousResearch/hermes-agent/issues/111237) |

📌 **Actionable insight:** The team should prioritize resolving **security boundary gaps** (#59293, #112459) and **automation reliability** (#88584, #87948) to build trust in production-grade deployments.

---  
*Data compiled from GitHub activity as of 2026-09-16.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw Project Digest – 2026-09-16**

---

### **1. Today's Overview**  
QwenPaw remains highly active with a robust development pace: **50 pull requests** and **28 issues updated in the last 24 hours**, indicating strong community engagement and ongoing feature development. The project is transitioning from a personal AI assistant toward a team-oriented platform, as evidenced by the growing focus on multi-tenant capabilities, Hub governance, and enterprise-grade stability. While no new releases were published, significant progress is being made in core functionality, UI/UX refinement, and tooling reliability—particularly around MCP integration, model gateway management, and memory handling.

---

### **2. Releases**  
*No new releases were published today.*  
The latest stable version remains **2.2.1**, with ongoing improvements targeted for the upcoming **2.2.0–2.3.0** release cycle. Users are advised to monitor changelogs for updates related to Hub mode, model fallbacks, and enhanced security configurations.

> 🔗 [GitHub Releases Page](https://github.com/agentscope-ai/QwenPaw/releases)

---

### **3. Project Progress (Merged/Closed PRs)**  
Several high-impact fixes and enhancements were merged or closed today:

- ✅ **PR #7759**: Restored visible keyboard focus indicators in the console UI, improving accessibility.
- ✅ **PR #7758**: Aligned embedding timeout validation with backend constraints (0–300 seconds), now includes real-time feedback.
- ✅ **PR #7756**: Improved error notification clarity in memory systems by distinguishing empty success vs. failure states.
- ✅ **PR #7737 & #7736**: Expanded trigger keywords for multi-agent collaboration skills, enabling earlier recognition of team-based tasks.
- ✅ **PR #7735**: Fixed HTTP error response handling in MCP clients, preserving meaningful error details during failures.
- ✅ **PR #7636**: Patched PDF document block serialization for OpenAI-compatible endpoints—critical fix for `chat/completions` compatibility.

These changes collectively improve **stability**, **usability**, and **interoperability** across environments.

> 🔗 [PR #7759](https://github.com/agentscope-ai/QwenPaw/pull/7759) | [PR #7758](https://github.com/agentscope-ai/QwenPaw/pull/7758) | [PR #7756](https://github.com/agentscope-ai/QwenPaw/pull/7756) | [PR #7737](https://github.com/agentscope-ai/QwenPaw/pull/7737) | [PR #7636](https://github.com/agentscope-ai/QwenPaw/pull/7636)

---

### **4. Community Hot Topics**  
The most active discussions center on **Hub scalability**, **tool invocation precision**, and **UI/UX frustrations**:

- 🟡 **Issue #7318** – *“QwenPaw Hub, the multi-tenant edition, is coming in 2.2.0: what should we build next?”*  
  With **27 comments** and rising interest, this thread signals strong community demand for organizational features. Users want admin controls, role-based access, usage dashboards, and model governance—clearly shaping the roadmap for QwenPaw Hub.

  > 🔗 [Issue #7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)

- 🟡 **Issue #7778 / #7780 / #7777** – *Request for “//” syntax to explicitly invoke tools/MCPs*  
  Multiple users echo the same need: better control over tool selection when multiple similar tools exist. This suggests a growing reliance on precise tool orchestration, especially in complex workflows.

  > 🔗 [Issue #7778](https://github.com/agentscope-ai/QwenPaw/issues/7778) | [Issue #7780](https://github.com/agentscope-ai/QwenPaw/issues/7780)

- 🟡 **PR #7790** – *Add unified chat workbench shell*  
  A top-tier UI enhancement proposal that aims to replace fixed tabs with a resizable, configurable right-side panel—already attracting attention from power users seeking workspace flexibility.

  > 🔗 [PR #7790](https://github.com/agentscope-ai/QwenPaw/pull/7790)

---

### **5. Bugs & Stability**  
Critical stability and usability bugs continue to surface, particularly in **multi-agent execution**, **MCP connectivity**, and **file handling**:

| Issue | Severity | Summary | Fix PR? |
|------|----------|--------|--------|
| [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | ⚠️ High | `spawn subAgent` fails silently with timeouts even after increasing timeout duration | ❌ No fix yet |
| [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) | ⚠️ Medium | Stop button shows task ended but process continues | ❌ No fix |
| [#7716](https://github.com/agentscope-ai/QwenPaw/issues/7716) | ⚠️ High | MCP client fails to connect after upgrading to 2.2.x | ✅ [PR #7729](https://github.com/agentscope-ai/QwenPaw/pull/7729) – Fixes Java JSON-RPC envelope parsing |
| [#7764](https://github.com/agentscope-ai/QwenPaw/issues/7764) | ⚠️ High | Dagu MCP client stuck inactive due to `zlib incorrect header check` | ✅ [PR #7735](https://github.com/agentscope-ai/QwenPaw/pull/7735) – Preserves decoded error responses |
| [#7792](https://github.com/agentscope-ai/QwenPaw/issues/7792) | ⚠️ Medium | WeChat video/audio attachments become invalid `file://` URLs | ❌ No fix |
| [#7786](https://github.com/agentscope-ai/QwenPaw/issues/7786) | ⚠️ Critical | Cloud/NFS deployment freezes entire process during file browsing | ❌ No fix |

> ⚠️ **Note:** Several high-severity bugs persist despite recent fixes, suggesting deeper architectural challenges in async I/O and event loop handling under distributed storage.

---

### **6. Feature Requests & Roadmap Signals**  
User-driven feature requests reveal clear direction for future versions:

- ✅ **Multi-tenant Hub Mode (v2.2.0+)** – Explicitly requested via #7318; confirmed by PRs like #7779 (model gateway + member governance).
- ✅ **Explicit Tool Invocation (`//` syntax)** – Repeated across 3 issues (#7778, #7780, #7777); likely to be implemented in v2.3.
- ✅ **Configurable Workspaces & Multi-Folder Support** – Requested via #7789; aligns with developer effort on project directory flexibility.
- ✅ **File Preview & Direct Download Cards** – Suggested in #7744; tied to improved UX for file sharing.
- ✅ **Background Updates** – Requested in #7543; user experience will suffer if not addressed before v2.3.

These signals strongly indicate that **QwenPaw’s next major milestone (v2.3)** will prioritize **enterprise readiness**, **tool precision**, and **scalable UI**.

---

### **7. User Feedback Summary**  
Real-world pain points reflect advanced use cases and growing maturity:

- **Team Collaboration Needs**: Users report needing to run agents in shared environments (e.g., Slack/DingTalk channels), requiring role-based access and skill scoping per channel (#7746).
- **Model Fallback Configuration Confusion**: Despite being in v2.2.1, users cannot find model fault-tolerance settings—suggesting poor documentation or UI discoverability (#7749).
- **File Handling Friction**: Sending files via `send_file_to_user` results in invisible downloads unless users manually expand tool logs—this breaks user expectations (#7744).
- **Security Concerns**: In Hub mode, preview links return `401 Unauthorized`, indicating misaligned auth flows between frontend and backend (#7743).
- **Deployment Challenges**: Cloud/NFS users face long freezes when opening file browsers—highlighting performance bottlenecks in asynchronous file I/O (#7786).

> 💬 *"I just want to stop a task and know it actually stopped."* — rerbin, Issue #7567

---

### **8. Backlog Watch**  
Critical long-standing issues still awaiting maintainer attention:

- 🔴 **[Issue #7318]** – *What should we build next?* (27 comments, 4 likes)  
  This is the **most strategic issue**—it defines the product’s future. It needs official response from maintainers to guide community contributions and prioritization.

- 🔴 **[Issue #7771]** – *Context management generates meaningless blank tags*  
  A persistent UI bug affecting session clarity; affects both desktop and web users. Should be triaged immediately.

- 🔴 **[Issue #7767]** – *Guardrail plugin issues: stale blobs, cron misfires, `on_acting` never fires*  
  Indicates instability in middleware layer; could impact custom plugins and automation pipelines.

- 🔴 **[Issue #7775]** – *Max iterations end without final answer or warning*  
  A dangerous UX flaw—users may miss critical outputs without awareness.

> 🔗 [Issue #7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | [Issue #7771](https://github.com/agentscope-ai/QwenPaw/issues/7771) | [Issue #7767](https://github.com/agentscope-ai/QwenPaw/issues/7767) | [Issue #7775](https://github.com/agentscope-ai/QwenPaw/issues/7775)

---

### ✅ **Final Assessment**  
QwenPaw is maturing rapidly into a **team-centric, extensible AI agent platform**. The project exhibits strong momentum, with healthy contributor activity and user-driven innovation. However, **core stability issues in multi-agent execution, file handling, and authentication flow** must be prioritized to support enterprise adoption. Maintainers should respond to **Issue #7318** promptly to unify community vision and avoid fragmentation.

> 📊 **Health Score**: 8.2 / 10  
> 👥 Community Engagement: ✅ High  
> 🛠️ Technical Stability: ⚠️ Moderate (improving)  
> 🎯 Strategic Direction: ✅ Clear (Hub + Tools + UX)

---  
*Generated: 2026-09-16 | Source: GitHub Analytics – agentscope-ai/QwenPaw*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest – 2026-09-16**

---

### **1. Today's Overview**  
ZeroClaw continues strong momentum with high activity across both issues and pull requests, reflecting a mature and active development cycle. A total of 50 new issues and 50 PRs updated in the last 24 hours signals sustained engineering engagement, particularly around core runtime stability, security hardening, and agent-to-agent (A2A) interoperability. The project shows no signs of stagnation—new RFCs, critical bug fixes, and architectural refinements are being actively proposed and implemented. Despite no new releases, the depth and velocity of technical work suggest a major release is likely imminent.

---

### **2. Releases**  
No new releases were published today. The project remains on a stable `master` branch with ongoing feature integration and quality improvements. No breaking changes or migration notes are applicable at this time.

---

### **3. Project Progress**  
**Merged/Closed PRs (Today):**  
- **PR #10872** ([hmac](https://github.com/RustCrypto/MACs) bump to v0.13.0) – Security dependency update; resolves potential cryptographic weaknesses.  
- **PR #10870** (GitHub CodeQL Action upgrade from 3.36.2 to 4.38.0) – Enhances static analysis coverage for security vulnerabilities.  
- **PR #10840** (Generate `llms.txt` and `llms-full.txt` via mdBook) – Improves documentation discoverability and indexing.  
- **PR #10125** (Isolate environment fixtures in tests) – Removes unsafe environment mutations, improving test reliability.  
- **PR #9997** (Secure model picker for Telegram) – Adds paginated inline keyboard for `/model`, enhancing UX and security.  
- **PR #9324** (A2A outbound client v1.0 wire model + tools) – Finalizes Phase 1 of RFC #9106, enabling inter-agent calls.  

These merges indicate progress in **security hygiene**, **documentation maturity**, and **inter-agent communication infrastructure**.

---

### **4. Community Hot Topics**  
The most active discussions center on **runtime behavior under stress**, **image handling**, and **security boundaries**:

- **Issue #10885** ([Bug]: tool-returned images disappear after unrelated tool call) – *3 comments*  
  🔗 [Issue #10885](https://github.com/zeroclaw-labs/zeroclaw/issues/10885)  
  > *Underlying need:* Reliable state persistence of multimodal outputs across complex turn sequences — critical for ZeroCode workflows involving image tools.

- **Issue #10889** ([Bug]: native Anthropic provider drops cache breakpoint on image-end) – *2 comments*  
  🔗 [Issue #10889](https://github.com/zeroclaw-labs/zeroclaw/issues/10889)  
  > *Underlying need:* Consistent caching behavior even when responses end with non-text blocks — essential for cost control and performance.

- **Issue #10887** ([Bug]: Non-vision gate fails on marker-shaped prose) – *1 comment*  
  🔗 [Issue #10887](https://github.com/zeroclaw-labs/zeroclaw/issues/10887)  
  > *Underlying need:* Prevent false positives in capability gating — users expect strict vision detection, not syntactic heuristics.

- **PR #10886** (Fix: `timeout_secs` should raise streaming idle bound) – *0 comments*  
  🔗 [PR #10886](https://github.com/zeroclaw-labs/zeroclaw/pull/10886)  
  > *Significance:* Addresses a long-standing gap in stream timeout configuration, directly impacting user experience during slow API responses.

These threads reflect growing demand for **predictable, resilient multimodal execution** and **fine-grained control over session state**.

---

### **5. Bugs & Stability**  
Critical bugs reported today highlight instability in **multimodal context handling** and **provider error recovery**:

| Issue | Severity | Status | Fix PR? | Description |
|------|----------|--------|---------|-------------|
| [#10885](https://github.com/zeroclaw-labs/zeroclaw/issues/10885) | S2 (degraded behavior) | Open | ❌ | Tool-returned images vanish mid-turn after unrelated tool call |
| [#10889](https://github.com/zeroclaw-labs/zeroclaw/issues/10889) | S2 | Open | ❌ | Rolling cache breakpoint lost when last message ends with image |
| [#10887](https://github.com/zeroclaw-labs/zeroclaw/issues/10887) | S2 (turn lost) | Open | ❌ | Non-vision gate fails on text containing image markers |
| [#10736](https://github.com/zeroclaw-labs/zeroclaw/issues/10736) | S2 | In-progress | ✅ *(PR #10480)* | Streaming failure skips fallback to non-streaming mode |

> ✅ **Fix in progress:** PR #10480 addresses streaming fallback logic — a key stability fix for reliable providers.

These issues underscore risks in **session state management** and **error propagation**, especially under mixed modalities.

---

### **6. Feature Requests & Roadmap Signals**  
Several high-impact RFCs and proposals signal upcoming direction:

- **RFC #6909** ([Computer-use support for desktop interaction](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)) – *Accepted, P2, High risk*  
  🔗 [Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)  
  > *Signal:* Desktop automation via AI agents is a priority — implies future GUI control, input simulation, and human-in-the-loop workflows.

- **RFC #9346** ([Unified package/catalog contract](https://github.com/zeroclaw-labs/zeroclaw/issues/9346)) – *Accepted, P2, High risk*  
  🔗 [Issue #9346](https://github.com/zeroclaw-labs/zeroclaw/issues/9346)  
  > *Signal:* A unified plugin ecosystem is being architected — foundational for extensibility and third-party integrations.

- **RFC #7497** ([OCI-compliant registries for WASM plugins](https://github.com/zeroclaw-labs/zeroclaw/issues/7497)) – *Accepted, P3, High risk*  
  🔗 [Issue #7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497)  
  > *Signal:* Supply chain integrity and multi-architecture support are being prioritized — a move toward enterprise-grade plugin distribution.

These RFCs point to a **next-generation plugin architecture** based on OCI standards, secure WASM execution, and cross-platform compatibility.

---

### **7. User Feedback Summary**  
Real-world pain points emerging from issues and PRs include:

- **Image loss in turns** (e.g., #10885): Users report that generated images vanish unexpectedly, disrupting workflows in ZeroCode.
- **Inconsistent caching** (e.g., #10889): Cost-aware users complain about inaccurate budget tracking due to missed cache breakpoints.
- **Overly aggressive vision gates** (e.g., #10887): False negatives frustrate users who want to use image references in plain text.
- **Lack of granular memory sharing** (e.g., #8983): Multi-agent systems struggle with selective data exposure, limiting collaboration patterns.
- **Streaming fallback failures** (e.g., #10736): Reliability concerns in production deployments where network flakiness is common.

Users are increasingly focused on **workflow predictability**, **cost control**, and **multi-agent coordination** — indicating a maturing user base beyond experimentation.

---

### **8. Backlog Watch**  
Several high-priority items remain open without clear resolution paths:

- **Issue #5869** ([Security: rumqttc v0.25.1 pins outdated rustls-webpki](https://github.com/zeroclaw-labs/zeroclaw/issues/5869)) – *P1, High risk, Blocked*  
  🔗 [Issue #5869](https://github.com/zeroclaw-labs/zeroclaw/issues/5869)  
  > *Status:* Still blocked by transitive dependency lock. Requires upstream patch or version pinning.

- **Issue #9802** ([Emergency-stop enforcement for in-flight operations](https://github.com/zeroclaw-labs/zeroclaw/issues/9802)) – *P1, High risk, Blocked*  
  🔗 [Issue #9802](https://github.com/zeroclaw-labs/zeroclaw/issues/9802)  
  > *Status:* Critical safety feature delayed. Needs urgent maintainer attention for runtime interruption semantics.

- **Issue #8691** ([ADR inventory & RFC decision tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/8691)) – *P2, Low severity, but foundational*  
  🔗 [Issue #8691](https://github.com/zeroclaw-labs/zeroclaw/issues/8691)  
  > *Status:* Long-term architectural audit surface needs closure — vital for roadmap transparency.

These items represent **technical debt**, **security gaps**, and **governance risks** that could hinder future scalability if unaddressed.

---  
*Data sourced from GitHub: zeroclaw-labs/zeroclaw | Last updated: 2026-09-16*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*