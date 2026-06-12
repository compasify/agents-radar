# OpenClaw Ecosystem Digest 2026-06-12

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-12 00:32 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

Here is the OpenClaw project digest for June 12, 2026.

---

## OpenClaw Project Digest: 2026-06-12

### 1. Today's Overview
The OpenClaw project is exhibiting extremely high activity, with **500 issues and 500 pull requests updated in the last 24 hours**. However, the volume of new contributions is low, with only **110 PRs merged/closed** and **0 new releases**. Activity is dominated by prolonged discussions and reviews on existing items, suggesting a significant bottleneck in maintainer capacity. The vast majority of issues (478) remain open, indicating a growing backlog. The community is highly engaged but clearly frustrated by a lack of progress on critical bugs and much-needed features.

### 2. Releases
No new releases were published today.

### 3. Project Progress
Today saw the merging of **110 pull requests**. Key highlights from the day's merged and active work include:
- **Cron Job Reliability:** Two PRs (#92250, #92277) were merged to fix a specific bug where stale cron jobs could replay old schedule slots after an update.
- **Model Catalog Fixes:** An open PR (#92292) addresses a common user pain point by making the `openclaw doctor` command warn when the default model has been de-listed from the provider catalog.
- **Memory System Fixes:** A fix is in progress (#90727) to resolve persistent `index metadata is missing` errors in the memory search path after a rebuild, a critical stability fix.
- **Telegram & WhatsApp Features:** A large feature PR (#89569) adds pre-auth access request workflows and grouped DM allowlists for Telegram and WhatsApp channels, moving toward better access control.
- **Security Matrix:** A significant PR (#92086) introduces a "Security Matrix" runtime-fact evaluator, aiming to model and audit security decisions within the agent runtime.

### 4. Community Hot Topics
The community is intensely focused on core stability, security, and platform expansion.

- **[#75 - Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)**: This feature request has garnered **109 comments and 79 upvotes**, making it the most active issue in the project. The desire for Linux and Windows desktop clients, equivalent to the existing macOS app, represents the single strongest community demand for platform expansion.
- **[#85888 - Cron Jobs Fail with MiniMax 503](https://github.com/openclaw/openclaw/issues/85888)**: A very specific but frustrating bug where cron jobs consistently fail during early morning hours in China (CST). This suggests a potential timezone-related scheduling or API availability logic flaw within OpenClaw's cron executor.
- **[#39604 - Private Network Access for web_fetch](https://github.com/openclaw/openclaw/issues/39604)**: With **13 comments and 9 reactions**, the community is strongly requesting an opt-in configuration to allow the `web_fetch` tool to access private/internal networks (e.g., localhost, 10.x). This is critical for users who want to integrate OpenClaw with self-hosted internal services.
- **[#40611 - Heartbeat Drift Fix Blocks Telegram](https://github.com/openclaw/openclaw/issues/40611)**: A recent fix for heartbeat scheduling (PR #39182) is causing severe regressions where the heartbeat mechanism actively blocks message handling on Telegram and other channels during conversations. This has created a major user experience problem.
- **[#6623 - Add Denylist for Exec Approvals](https://github.com/openclaw/openclaw/issues/6615)**: With **7 upvotes**, the request for a command denylist (rather than just an allowlist) for `exec-approvals` is a popular security feature request, enabling policies like "allow all commands except `rm -rf /`".

### 5. Bugs & Stability
**Overall Severity: High**

The project is dealing with several critical and widespread regressions and stability issues:

- **Critical (P1)**: The **heartbeat drift fix blocking Telegram conversations** (#40611) is breaking real-time interactivity for a major channel.
- **Critical (P1)**: **Isolated cron jobs failing** with "LLM request failed" (#91363) and "TypeError" from `undefined` source delivery (#85249) are rendering a core feature of the platform unusable for many.
- **High (P1/P2)**:
    - A **serialization regression** (#32473) prevents the control UI from working on anything but HTTPS or localhost, locking out users behind proxies or simple VPS setups.
    - A **race condition on gateway restart** (#22676) leads to orphaned signal-cli processes and failures in sending messages.
    - **Session context confusion** (#32296) where the agent replies to the wrong user message is a fundamental failure in conversation logic.
    - A **regression with Google Vertex AI** (#38327) is causing "Cannot convert undefined or null to object" errors for an entire provider, breaking users who have updated.
    - **Concurrent multi-agent orchestration is unstable** (#43367), with race conditions on agent configuration overwrites and session locks.
    - A **`git clone` vulnerability** are surfaced in multiple issues (#29736, #31331, #37634) where isolated sandbox environments are either impossible to configure properly or are mounted read-only.

### 6. Feature Requests & Roadmap Signals
The project's roadmap appears to be driven by security and enterprise readiness, but is currently blocked by stability issues.

- **Short-Term Predictions:** Expect to see expedited fixes for the **Telegram blocking** (#40611) and **cron failures** (#91363) as these are critical P1 regressions.
- **Medium-Term Predictions:** The push for **masked secrets** (#10659) and a **filesystem sandboxing framework** (#7722, #39979) is likely to be the next major feature narrative, driven by high community demand and maintainer engagement. The **denylist for exec-approvals** (#6615) is a natural, smaller-scope part of this.
- **Long-Term Signals:** The massive demand for **Linux/Windows native apps** (#75) is a clear signal for cross-platform desktop support.

### 7. User Feedback Summary
The prevailing sentiment is a mix of enthusiasm for the platform's potential and frustration with its instability and lack of progress on long-standing issues.

- **Pain Points:**
    - **Recurring Regressions:** Users are encountering repeated regressions that break core functionality (e.g., heartbeat blocking, model resolution failures, control UI serialization).
    - **Stalled Development:** High-engagement issues like #10659 (masked secrets) and #29387 (bootstrap files ignored) have been open for months with no fix PRs, leading to user fatigue.
    - **Poor Developer Experience:** Users running on VPS or Docker are hitting consistent blockers related to secure contexts (#32473) and workspace mounting (#31331, #37634).
- **Use Cases:**
    - **Enterprise/Production:** Users are trying to deploy OpenClaw in multi-user environments (#56263), with cron-based automation for business intelligence (#85888), and with internal network services (#39604).
    - **Complex Orchestration:** Power users are pushing the boundaries of multi-agent systems and are hitting hard walls with session management and instability (#43367, #39476).
- **Satisfaction:** Users are highly satisfied with the *concept* of the project, but satisfaction with the *current product* is low due to the severity of the regressions and the sheer size of the open bug backlog.

### 8. Backlog Watch
Several important issues are languishing without maintainer review or fix PRs, blocking significant value for the community.

- **#10659 - Masked Secrets:** A **P1, diamond lobster** issue for 4 months with a detailed design. This is a major security feature requested by the community. No fix PR. **Needs maintainer decision.**
- **#29387 - Bootstrap files ignored:** A **P1, diamond lobster** bug for 3.5 months that silently breaks per-agent configuration. A foundational feature is not working. **Needs maintainer review.**
- **#32296 - Session Context Confusion:** A **P1, platinum hermit** bug for 3 months that causes the agent to reply to the wrong message. This is a critical conversational experience bug. **Needs a fix.**
- **#39604 - Private Network Access:** A **P2, diamond lobster** feature request for 3 months. This would unlock a huge use case for self-hosted environments. **Needs product decision.**
- **#43367 - Multi-agent Orchestration Unstable:** A **P1, platinum hermit** bug for 3 months that describes a cluster of failures making a key feature unusable. **Needs maintainer review and a holistic fix strategy.**

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the community digest summaries provided.

---

## Cross-Project Comparison: AI Agent Open-Source Ecosystem
**Date:** 2026-06-12

### 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is experiencing a phase of **intense, bifurcated development**. A cohort of "core" projects (OpenClaw, IronClaw, CoPaw) are wrestling with the challenges of scaling from single-agent demos to stable, multi-agent, production-grade systems, characterized by large backlogs and critical regressions. A second, more agile group (NanoBot, PicoClaw, LobsterAI) is shipping features rapidly with high PR throughput, focusing on specific integrations (Slack, WhatsApp, voice) and developer experience. Across the board, the community is demanding **reliability, security maturity (e.g., secrets management, sandboxing), and advanced orchestration capabilities (e.g., multi-agent collaboration, cron job reliability)**, but user satisfaction is often hampered by regressions introduced during rapid feature development.

### 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score (Qualitative) |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | No new release | **Stressed** - Backlog critical, core regressions |
| **NanoBot** | 5 | 19 | No new release | **Healthy** - High velocity, focused scope |
| **Hermes Agent** | 50 | 50 | No new release | **Stable/Busy** - Heavy maintenance, good throughput |
| **PicoClaw** | 6 | 32 | Nightly build (unstable) | **Strong Momentum** - High merge rate, community engaged |
| **NanoClaw** | ~2 | 18 | No new release | **Mature** - Protocol-level fixes, new features |
| **NullClaw** | 1 | 0 | No new release | **Idle** - Minimal activity, single open bug |
| **IronClaw** | 31 | 49 | No new release | **Intense** - Stabilization cycle, high PR throughput |
| **LobsterAI** | 2 | 19 | No new release | **Feature-Packed** - Sprint mode, high engineering output |
| **Moltis** | 1 | 1 | No new release | **Light** - Focused on specific fixes, healthy but quiet |
| **CoPaw** | 31 | 40 | **2 Patch Releases** | **Moderately Stressed** - Regressions vs. new features |
| **ZeroClaw** | 50 | 49 | **v0.8.0 (Major)** | **Post-Launch Strain** - High discussion volume, low merge rate |
| **TinyClaw** | 0 | 0 | - | **Inactive** |
| **ZeptoClaw** | 0 | 0 | - | **Inactive** |

### 3. OpenClaw's Position

OpenClaw is the **reference implementation and most heavily used project** in the ecosystem, as evidenced by its colossal issue/PR volume. Its advantages are a *de facto* standard architecture and a massive, engaged user base. However, this size is its primary weakness. Technical debt and a maintainer bottleneck are causing a **severe regression in product stability**, with critical bugs (Telegram blocking, cursor regression) eroding user trust. Its peers (e.g., ZeroClaw's v0.8.0, CoPaw's AgentScope migration) are taking more aggressive architectural leaps. OpenClaw's community is larger and more vocal, but its **frustration with stalled development** is higher than in smaller, more agile projects like NanoBot or LobsterAI. It remains the ecosystem's core, but its leadership is being challenged by more rapidly iterating alternatives.

### 4. Shared Technical Focus Areas

Several requirements are emerging across multiple projects, indicating an industry-wide roadmap:

- **Multi-Agent Orchestration:** High demand for stable, feature-rich multi-agent systems.
    - *Projects:* OpenClaw, LobsterAI, ZeroClaw, CoPaw (via Manager/Room model requests), PicoClaw (Agent Collaboration Bus).
    - *Specific Need:* Reliable sub-agent spawning, session context management, and team-level coordination.

- **Security & Sandboxing:** A critical and largely unmet need for production deployment.
    - *Projects:* OpenClaw (masked secrets, exec denylist, sandboxing), ZeroClaw (tool filtering), Hermes Agent (approval UX), CoPaw (keychain isolation).
    - *Specific Need:* Graceful handling of unsupported model capabilities (e.g., vision), egress lockdown without breaking host services.

- **Cron & Automation Reliability:** Foundational feature for agent-as-service use cases.
    - *Projects:* OpenClaw, NanoBot, ZeroClaw, CoPaw, LobsterAI.
    - *Specific Need:* Fixing timezone-related failures, parallel execution conflicts, and context injection for scheduled tasks.

- **Model Capability Awareness:** Graceful handling of unsupported model capabilities (e.g., vision).
    - *Projects:* PicoClaw, OpenClaw.
    - *Specific Need:* Preventing hallucination when a text-only model is asked to describe an image.

- **Desktop CLI/TUI vs. Platform Parity:** Users expect consistent features across all interfaces.
    - *Projects:* Hermes Agent (MCP tools missing in TUI/Desktop), CoPaw (Desktop stability regressions).
    - *Specific Need:* Eliminating feature gaps between CLI, Desktop, and WebUI versions.

### 5. Differentiation Analysis

| Project | Primary Focus | Target User | Key Architecture |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | Core reference, platform stability | Enterprise/Self-hosting crowd | Monolithic agent runtime, large plugin API |
| **NanoBot** | Developer experience, ease of use | Individual developers, tinkerers | Lightweight, Python-dominant, fast iteration |
| **Hermes** | User-facing app polish | Power users, cross-platform | Heavy focus on Desktop/TUI, MCP, channel integrations |
| **PicoClaw** | Channel integration, distribution | Go ecosystem users, **mobile/edge** | Go-based (golang), cross-compile friendly (ARM) |
| **NanoClaw** | Hardened infrastructure, MCP/ACS | Production ops, **enterprise** | Protocol-level correctness, egress control |
| **IronClaw** | QA, automation, observability | Developers, **CI/CD** teams | Heavy investment in test harnesses, Reborn binary |
| **LobsterAI** | Product features, specific integrations | End-users, **Windows/Desktop** users | Feature-rich UI (ASR, file sharing), China market |
| **CoPaw** | Core platform, AI model ecosystem | **AI model co-development**, research | Deep integration with Qwen models, AgentScope |
| **ZeroClaw** | Multi-instance fleet management | Sysadmins, large-scale deployments | Named agents per daemon, fleet management |
| **Moltis** | Niche communication use cases | Single-platform users | Lightweight, specialized for specific chat bots |
| **NullClaw** | Minimalist, local-first | Privacy-focused, low-resource | Stable but slow-moving, minimal dependencies |

### 6. Community Momentum & Maturity

- **Tier 1: Rapidly Iterating (High Feature Velocity, Mature)**
    - **IronClaw, PicoClaw, LobsterAI, NanoBot.** These projects have high PR merge rates, clear release cycles (or near-release), and strong maintainer response. They are focused on hardening features and expanding integrations, signaling a move towards production readiness.

- **Tier 2: High Activity, Under Strain (Large Backlog, Regressions)**
    - **OpenClaw, ZeroClaw, CoPaw, Hermes Agent.** These projects have massive feature sets and user bases but are currently burdened by regressions and a scaling challenge in maintainer capacity. Their "stressed" state is a sign of rapid growth rather than decline, but stability-focused cleanup is the immediate priority.

- **Tier 3: Stabilizing / Low Activity (Mature, Niche)**
    - **NanoClaw, Moltis.** These projects are moving at a controlled pace, focusing on deep technical fixes rather than surface features. They serve a specific, satisfied user base.

- **Tier 4: Inactive**
    - **NullClaw, TinyClaw, ZeptoClaw.** Minimal to no recent activity. These projects represent either completed or abandoned initiatives.

### 7. Trend Signals

The community feedback across all projects reveals several key trends for AI agent developers:

1.  **“Agentic Self-Improvement” is the Next Frontier:** The high demand for features like **Dream Mode** (ZeroClaw) and **automated context compression** shows a clear consumer desire for agents that are not just reactive, but proactively *maintain their own state and improve over time*. This is a shift from "agent as a tool" to "agent as a persistent entity."

2.  **Security Maturity is a Gate for Enterprise:** The constant requests for **masked secrets, sandboxing, denylists, and OIDC** demonstrate that hobby projects are now being deployed in sensitive contexts. The ability to prove a secure credential pipeline and a robust execution sandbox will be a key differentiator for enterprise adoption in the next 6-12 months.

3.  **Multi-Agent is the New Single-Agent:** A single agent is no longer the aspirational goal. The ecosystem is converging on a reality where **orchestration (manager/room, sub-agent spawning) and delegation** are the core challenges. The batch of bugs around session context confusion, delegation failures, and sub-agent messaging all point to this being the hardest unsolved problem.

4.  **The Cost of Infrastructure is a Top-of-Mind Concern:** Bugs related to **token wastage (repeated text, uncapped context), memory leaks, and process leaks** are not just stability issues—they are seen as *cost* issues directly impacting user budgets (especially with API-based models). Features like context compression are increasingly valued as "cost-saving features."

5.  **Platform Parity is a Critical KPI:** The frustration in **Hermes Agent** over MCP tools working in CLI but not the Desktop is a leading indicator. As these tools become full-fledged applications, users expect a consistent, 100% feature-equivalent experience across all interfaces (Desktop, TUI, Web, Mobile). Any deviation is perceived as a serious bug, not a feature gap.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-12

## Today's Overview
NanoBot is in a period of **high development velocity**, with 19 pull requests updated in the last 24 hours and 5 issues receiving attention. The project shows strong community engagement and active maintainer response, as evidenced by the balanced mix of newly opened features and bug fixes alongside closed items. Core stability efforts are focused on cron job lifecycle management, MCP reconnection reliability, and sandbox compatibility with modern Linux distributions. Two closed PRs and two closed issues mark steady progress toward a more robust release candidate.

## Releases
No new releases today. The last tagged version remains unchanged; users are running development builds from `main`. Given the volume of merged bugfixes (particularly around cron, MCP, and Slack channel behavior), a patch release may be expected in the near term.

## Project Progress
**Merged/Closed PRs (6 total):**

- **#4289** (closed/valid) — `feat(slack): add groupRequireMention` — Adds a Slack channel option to restrict bot responses to allowlisted channels *only* when @-mentioned. Offers more granular control for teams wanting both public and mention-only behavior.
- **#4020** (closed) — `feat(providers): make stream-idle timeout configurable per-provider` — Resolves #4013 by making the stream-idle watchdog timeout adjustable per provider, addressing issues with local LLMs (LM Studio, Ollama) that need longer timeouts.
- **#4281** (closed) — `feat(transcription): add SiliconFlow as transcription provider` — Registers SiliconFlow in the transcription registry with default model `FunAudioLLM/SenseVoiceSmall`, reusing the existing OpenAI-compatible adapter.
- **#4257** (closed) — `fix(utils): make split_message fenced-code-block-aware` — Prevents broken HTML rendering when message splitting lands inside a code block fence.
- **#4298, #4297** (both closed) — Research documentation PRs for Worktree feature and Hermes integration (no code changes).

**Key progress signals:** Cron subagent lifecycle (PR #4293, #4304) and MCP reconnection stability (PR #4303) are receiving direct fixes. The Slack mention-gating feature shows real-world configuration flexibility improvements.

## Community Hot Topics
- **#4233 — Show version in WebUI** (closed, 2 comments) — Closed as implemented? The version display feature appears to have been accepted and resolved quickly, indicating strong maintainer alignment with this UX improvement.
- **#4302 — Gateway crash on MCP reconnect** (open, 0 comments) — Referenced by PR #4303 (open, fix in progress). This is a "hot" bug because it correlates with a duplicate report and has a targeted fix already submitted.
- **#4290 — Cron job ends early with subagent** (open, 0 comments) — Directly generating two fix PRs (#4293, #4304), making this the most action-driving issue of the day.

## Bugs & Stability
**High Severity:**
- **#4302 — Gateway crash on MCP reconnect** — RuntimeError in cancel scope task mismatch when `streamableHttp` sessions terminate. Fix PR #4303 submitted.
- **#4290 — Cron job completes prematurely when subagents spawned** — Main agent cannot inject subagent results, breaking workflow. Dual fix approach: PR #4293 (pending_queue injection) and PR #4304 (subagent wait).

**Medium Severity:**
- **#4236 — Bubblewrap sandbox fails on Ubuntu 24.04** (closed) — Root cause: restricted user namespaces. Fix likely involved fallback or detection logic.

**Low/Note:**
- **#4021** (open, fix) — OpenAI Codex provider duplicate reasoning items causing 400 errors. Dedup logic being added.

**No new regressions** were reported today.

## Feature Requests & Roadmap Signals
- **#4305 — Multiple custom/OpenAI providers** (open, 0 comments) — User needs more than one custom provider entry. Related PR #3239 (open from April) proposes a "template" parameter to clone provider configs. Likely candidates for next release given community demand.
- **#4291 — Subagent model presets** (open PR, feature) — Allows LLM-specified model selection for subagents via `spawnPresets` config. Signals growing interest in multi-model orchestration.
- **#4296 — Expanded Python SDK runtime controls** (open PR) — Adding session/memory/runtime metadata to `bot.run()` output. Indicates developer tooling maturity push.
- **#4299 — Cron bound to sessions** (open PR) — Scheduled automations execute as session turns, deferring until idle. Signals production-grade automation patterns.

**Likely for next version:** Multiple custom providers (#4305/#3239), subagent presets (#4291), and SDK expansion (#4296) are all actively PR'd and non-breaking.

## User Feedback Summary
- **Positive:** Fast resolution on version display (#4233), Slack channel controls (#4289) praised for flexibility, transcription provider expansion (#4281) welcome.
- **Pain points:** Cron subagent timing (#4290) is blocking workflow-heavy users. MCP reconnection crashes (#4302) affect reliability for streamable HTTP deployments. Multiple users report wanting **multiple custom provider configs** (#4305, plus related PR #3239 from April).
- **Dissatisfaction signals:** The `bwrap` sandbox issue (#4236) on modern Ubuntu indicates ongoing friction with Linux distribution security hardening — may need broader compatibility testing.

## Backlog Watch
- **PR #3239 — Multiple custom OpenAI providers** (open since 2026-04-17, 54 days) — No activity in last 24h, but related issue #4305 just opened. This feature is clearly desired but may need maintainer rebase or reprioritization.
- **PR #3538 — Gateway start/stop/restart commands** (open since 2026-04-29, 44 days) — CLI improvement for gateway management. Requires maintainer review — could conflict with PR #4294 (desktop app removal) if gateway bootstrap commands are affected.
- **PR #4021 — Codex dedup fix** (open since 2026-05-27, 16 days) — AI-assisted patch for a production-impacting bug (400 errors). The fix is well-documented; lack of merge suggests maintainer caution or testing backlog.

These items represent the highest-impact, longest-unreviewed contributions awaiting maintainer attention.

---

*Generated from GitHub data for HKUDS/nanobot | Activity period: 2026-06-11 to 2026-06-12*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-06-12

---

## 1. Today's Overview

Hermes Agent shows **heavy maintenance velocity** with 50 issues and 50 PRs updated in the last 24 hours, though the ratio of open/active items (42 issues open, 40 PRs open) suggests **moderate resolution throughput** against a substantial backlog. No new releases were published today. The project remains in a **stable but busy** state, with significant bug-fixing momentum across the CLI, Desktop/TUI, gateway, and MCP integration layers. Several critical usability regressions (image content blocks dropped in ACP, MCP tools not exposed in TUI, Desktop profile management failures) were reported and are seeing active PR fixes. The community is very engaged, filing detailed bug reports with reproduction steps and root-cause analysis.

---

## 2. Releases

**No new releases today.** The last release remains Hermes v0.15.1 (2026-05-29) as referenced in issues.

---

## 3. Project Progress

**Merged/closed PRs today (10 total):**

| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#43720](https://github.com/NousResearch/hermes-agent/pull/43720) | Fix desktop WebSocket auth with served dashboard token | Bug fix, merged | Resolves desktop startup auth failures when dashboard serves a different session token than Electron |
| [#23594](https://github.com/NousResearch/hermes-agent/pull/23594) | feat: add profile MCP sync and session sidecars | Feature, merged | Enables shared MCP server definitions across profiles, session sidecar publishing, and in-session skill command map refresh |
| [#25997](https://github.com/NousResearch/hermes-agent/pull/25997) | feat: add cron test-run and profile sidecars | Feature, merged | Adds cron `test-run` safe verification flow, profile MCP sync, and update branch-switch guard |

**Notable open PRs with strong traction:**
- [#44067](https://github.com/NousResearch/hermes-agent/pull/44067) (Rust-backed install manager) — foundational infrastructure work
- [#44550](https://github.com/NousResearch/hermes-agent/pull/44550) (MCP capability-gated `tools/list`) — unblocks prompt-only MCP servers
- [#44542](https://github.com/NousResearch/hermes-agent/pull/44542) (Discord 429 retry) — fixes silent message truncation

---

## 4. Community Hot Topics

### Most Active Discussions (by comment count)

1. **[#38240](https://github.com/NousResearch/hermes-agent/issues/38240) — Skills index watchdog degraded** (9 comments)
   - Automated freshness probe flagged stale skills index at `/docs/api/skills-index.json`. The cron rebuild (`skills-index.yml`) and deploy pipeline (`deploy-site.yml`) are not keeping the index current. **Underlying need:** CI/CD reliability and documentation freshness guarantee.

2. **[#37812](https://github.com/NousResearch/hermes-agent/issues/37812) — Desktop app: approvals/manual confirmation prompts don't render** (7 comments, 4 👍)
   - Closed, but heavily upvoted. macOS users on Hermes v0.15.1 cannot approve/deny terminal/execute_code commands when `approvals.mode: manual` is set. **Reflects:** critical security UX gap — users cannot review or approve privileged operations.

3. **[#38945](https://github.com/NousResearch/hermes-agent/issues/38945) — Desktop/TUI sessions don't expose enabled MCP tools (Todoist)** (6 comments)
   - Configured MCP tools work from CLI but are invisible to the agent in Desktop/TUI sessions. **User pain:** Workflow incompatibility with Claude Code/Codex where these tools work — users may abandon Hermes for competing tools.

4. **[#44121](https://github.com/NousResearch/hermes-agent/issues/44121) — `npm ci` fails on clean checkout under npm 11** (6 comments)
   - Lock file `@types/node@24.13.1` does not satisfy `24.13.2`. Blocks new contributors from building. **Need:** Pinned dependency hygiene and CI matrix testing.

### Community Engagement Signals
- Users are filing **detailed, well-scoped bug reports** with reproduction scripts and root-cause analysis (e.g., [#44242](https://github.com/NousResearch/hermes-agent/issues/44242) includes code-level analysis of the ACP image block drop path)
- Feature requests show **production deployment concerns** (e.g., [#44072](https://github.com/NousResearch/hermes-agent/issues/44072) — skill validation to avoid worker crashes)
- Internationalization interest: PR [#44531](https://github.com/NousResearch/hermes-agent/pull/44531) adds complete Arabic localization (dashboard, gateway, desktop)

---

## 5. Bugs & Stability

### Critical Severity (P2, functional impact)

| Issue | Description | Fix PR Exists? |
|-------|-------------|----------------|
| [#44242](https://github.com/NousResearch/hermes-agent/issues/44242) | ACP image content blocks dropped before API call — `persist_user_message override` clobbers multimodal content | No PR identified |
| [#44499](https://github.com/NousResearch/hermes-agent/issues/44499) | Desktop agent ignores configured BrowserOS MCP, uses built-in browser tools instead | No PR identified |
| [#44497](https://github.com/NousResearch/hermes-agent/issues/44497) | WeChat gateway generates duplicate responses — context not cleared or thread cross-fire | No PR identified |
| [#44530](https://github.com/NousResearch/hermes-agent/issues/44530) | Windows desktop GUI cannot start non-default profiles after EXE reinstall (0xC0000005 crashes) | No PR identified |
| [#43657](https://github.com/NousResearch/hermes-agent/issues/43657) | aiohttp ClientSession leak after auxiliary tasks — memory leak on every title_generation | No PR identified |
| [#44468](https://github.com/NousResearch/hermes-agent/issues/44468) | Discord `hermes send` drops remaining chunks on 429 — no retry | **Yes:** [#44542](https://github.com/NousResearch/hermes-agent/pull/44542) |
| [#44518](https://github.com/NousResearch/hermes-agent/issues/44327) | Gateway cached agent reuse skips message persistence — produces transcripts with consecutive user messages | **Yes:** [#44518](https://github.com/NousResearch/hermes-agent/pull/44518) |
| [#38945](https://github.com/NousResearch/hermes-agent/issues/38945) | Desktop/TUI MCP tools not exposed to agent tool schema | **Yes (inferred):** MCP fix PRs in progress |

### Medium Severity (P3, degraded experience)

| Issue | Description | Fix PR Exists? |
|-------|-------------|----------------|
| [#43900](https://github.com/NousResearch/hermes-agent/issues/43900) | Ollama local models silently capped at 4096-token context — `num_ctx` not forwarded to model | No PR identified |
| [#44456](https://github.com/NousResearch/hermes-agent/issues/44456) | Desktop `/compress` returns "not a quick/plugin/skill command: compress" — TUI dispatch broken | No PR identified |
| [#44515](https://github.com/NousResearch/hermes-agent/issues/44515) | Desktop update stuck at 1/3 unless background processes stopped | **Yes:** [#44540](https://github.com/NousResearch/hermes-agent/pull/44540) |
| [#44523](https://github.com/NousResearch/hermes-agent/issues/44523) | Desktop remote mode: file links are silent dead ends (file:// fallback broken) | No PR identified |
| [#44522](https://github.com/NousResearch/hermes-agent/issues/44522) | Desktop remote folder picker: long lists clipped, no scrollbar | No PR identified |
| [#44101](https://github.com/NousResearch/hermes-agent/issues/44072) | `kanban create --skill` accepts invalid skill names, workers crash on startup | **Yes:** [#44101](https://github.com/NousResearch/hermes-agent/pull/44101) |
| [#43982](https://github.com/NousResearch/hermes-agent/issues/43982) | Custom provider `base_url` auto-modified by model selection commands | Closed (fix merged) |

### Long-standing Issues
- [#20476](https://github.com/NousResearch/hermes-agent/issues/20476) (Created May 6) — Camofox browser: all operations fail with 403 when `CAMOFOX_API_KEY` is set. **No activity from maintainers** since filing.
- [#26670](https://github.com/NousResearch/hermes-agent/issues/26670) (Created May 16) — Windows update fails to quarantine running hermes.exe. Closed today but with only 2 comments — resolution details unclear.

---

## 6. Feature Requests & Roadmap Signals

### High-Community-Interest Requests

1. **MCP Tool Reliability (cross-cutting):** [#38945](https://github.com/NousResearch/hermes-agent/issues/38945) (Todoist), [#44499](https://github.com/NousResearch/hermes-agent/issues/44499) (BrowserOS) — Users are hitting MCP integration issues in Desktop/TUI that work in CLI. **Likely v0.16.0 target** given multiple fix PRs in flight.

2. **Skills Validation at Dispatch Time:** [#44072](https://github.com/NousResearch/hermes-agent/issues/44072) — Request for `kanban create --skill` to validate against installed registry. PR [#44101](https://github.com/NousResearch/hermes-agent/pull/44101) is open. **Likely merges soon** as it's a straightforward validation fix.

3. **Internationalization (Arabic/RTL):** PR [#44531](https://github.com/NousResearch/hermes-agent/pull/44531) adds complete Arabic locale. Combined with the existing i18n skeleton in PR [#38846](https://github.com/NousResearch/hermes-agent/pull/38846) (15 languages), Hermes is positioning for global deployment. **Likely v0.16.0 feature.**

4. **Idle Session Pre-compression:** PR [#38956](https://github.com/NousResearch/hermes-agent/pull/38956) — TUI Gateway optimization to reduce next-turn latency by background compaction. **Performance-focused feature for power users.**

5. **OIDC/WebAuthn Login Support:** [#42448](https://github.com/NousResearch/hermes-agent/issues/42448) — Passwordless authentication (Touch ID, Passkeys) fails in Desktop's embedded login window. **Enterprise deployment blocker** — keep watching.

### Roadmap Signals
- **Rust install manager** (PR [#44067](https://github.com/NousResearch/hermes-agent/pull/44067)) suggests moving core infrastructure to Rust for reliability
- **Code testing culture growing:** PR [#44551](https://github.com/NousResearch/hermes-agent/pull/44551) brings `slash_worker.py` coverage from 0% to 92%
- **Kanban mission hardening:** PR [#44547](https://github.com/NousResearch/hermes-agent/pull/44547) suggests Kanban workflows are being productionized

---

## 7. User Feedback Summary

### Pain Points (High Frequency)

| Pain Point | Frequency (issues today) | User Sentiment |
|------------|--------------------------|----------------|
| Desktop/TUI vs CLI inconsistency (MCP tools, slash commands, file handling) | 6+ issues | **Frustrated** — users expect feature parity; several mention switching to Claude Code/Codex |
| Installation/update failures (npm, Windows EXE, Linux setup gaps) | 5 issues | **Blocked** — new contributors and Windows users disproportionately affected |
| Gateway platform issues (Discord 429, WeChat duplicates, Telegram model selection) | 3 issues | **Moderate** — affects production multi-platform deployments |
| Configuration confusion (Ollama cap, providers slug, base_url auto-modification) | 4 issues | **Confused** — configuration semantics are not intuitive |
| Auth/security UX (approvals not rendering, Camofox 403, OIDC WebAuthn) | 3 issues | **Critical** — security-sensitive workflows are broken |

### Positive Signals
- Users are providing **high-quality bug reports** with code-level root cause analysis
- The TUI and Desktop are **receiving more usage** (50% of bugs are Desktop-specific), indicating adoption growth
- International community engagement (Arabic, Chinese-localized bug reports like [#44544](https://github.com/NousResearch/hermes-agent/pull/44544))

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Priority | Reason for Watch |
|-------|-----|----------|------------------|
| [#20476](https://github.com/NousResearch/hermes-agent/issues/20476) — Camofox browser 403 with API key | 37 days | P2 | No maintainer response; affects all Camofox users with auth enabled |
| [#38445](https://github.com/NousResearch/hermes-agent/issues/38445) — `api_call_count` not refunded on all retries exhausted | 9 days | P3 | Billing/cost accuracy issue; no PR linked |
| [#43240](https://github.com/NousResearch/hermes-agent/issues/43240) — Desktop new profile creation fails | 2 days | P3 | Profile management is core to multi-user/team workflows |
| [#42448](https://github.com/NousResearch/hermes-agent/issues/42448) — OIDC WebAuthn login failure | 4 days | P3 | Enterprise security feature gap |
| [#43967](https://github.com/NousResearch/hermes-agent/issues/43967) — Dashboard model selector UI/UX broken | 1 day | P3 | Nested scrollable sections — basic usability issue |

### PRs Nearing Staleness

| PR | Age | Status | Risk |
|----|-----|--------|------|
| [#37096](https://github.com/NousResearch/hermes-agent/pull/37096) — MCP auto-recover from invalid_client | 10 days | Open, no review | OAuth flow recovery is important for enterprise MCP users |
| [#38846](https://github.com/NousResearch/hermes-agent/pull/38846) — Multilingual i18n with 15 languages | 8 days | Open, needs conflict resolution | Will conflict with [#44531](https://github.com/NousResearch/hermes-agent/pull/44531) if both don't merge |

### Project Health Indicators
- **Issue closure rate today:** 8/50 (16%) — moderate
- **PR merge rate today:** 3/50 (6%) — low, but many PRs are very fresh (<24h)
- **No stale PRs past 14 days** — maintainers are active but reviewers may be bottlenecked
- **Deployment blockers:** npm 11 lockfile incompatibility ([#44121](https://github.com/NousResearch/hermes-agent/issues/44121)) blocks new contributors from building from source

---

*Digest generated 2026-06-12. Data sourced from NousResearch/hermes-agent GitHub repository.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-12

## 1. Today's Overview

PicoClaw shows **high activity today** with 32 PRs updated and 6 issues touched in the last 24 hours. The project shipped a **nightly build (v0.2.9-nightly.20260611)** and closed 19 PRs, indicating strong momentum in both bug fixing and dependency maintenance. However, three open bugs remain active, including a significant image hallucination issue and a duplicate message problem in asynchronous sub-agent workflows. Community engagement remains healthy, with 13 open PRs awaiting review and several dependency upgrades in the pipeline.

---

## 2. Releases

### Nightly Build Available

**Release**: `v0.2.9-nightly.20260611.d955d5bb`
- **Type**: Automated nightly build (may be unstable)
- **Full Changelog**: [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

**⚠️ Warning**: This is an automated build intended for testing. No breaking changes or migration notes have been formally documented for this release.

---

## 3. Project Progress

**19 PRs merged/closed today**, covering several important areas:

### Critical Bug Fixes (Merged)
- **`fix(channels): prevent tool_calls from being dropped during streaming`** ([#2957](https://github.com/sipeed/picoclaw/pull/2957)) — Tool calls were being filtered as auxiliary messages during streaming; now correctly excluded from filtering.
- **`fix: verify process identity in singleton PID check`** ([#2955](https://github.com/sipeed/picoclaw/pull/2955)) — Prevents false singleton detection when PID file contains a reused PID from an unrelated process (e.g. `systemd-resolved`).
- **`fix: correct claude-sonnet-4.6 model ID to use hyphens`** ([#2947](https://github.com/sipeed/picoclaw/pull/2947)) — Resolves HTTP 404 errors for Anthropic users using the default config.
- **`fix: use %w for error wrapping and handle json.MarshalIndent error`** ([#3060](https://github.com/sipeed/picoclaw/pull/3060)) — Fixes broken `errors.Is`/`errors.As` chains in skills helper.
- **`fix: add DmScope field to SessionConfig to persist dm_scope setting`** ([#3067](https://github.com/sipeed/picoclaw/pull/3067)) — Enables saving the "Session Scope" configuration that previously always reverted to default.

### Channel & Integration Fixes (Merged)
- **`fix(channels): allow whatsapp native mode with use_native flag`** ([#2934](https://github.com/sipeed/picoclaw/pull/2934)) — Enables WhatsApp native mode via whatsmeow when `bridge_url` is not set.
- **`fix: preserve channel enabled state when merging security.yml`** ([#2956](https://github.com/sipeed/picoclaw/pull/2956), open) — Fixes channels being silently disabled after credential configuration.

### MCP Improvements (Merged)
- **`feat(mcp): support per-request dynamic headers from channel context`** ([#2696](https://github.com/sipeed/picoclaw/pull/2696)) — Channels can now forward HTTP headers to MCP servers per-request via `mcp:` prefixed keys in `InboundContext.Raw`.

### Dependency Updates (Dependabot)
- AWS SDK config/v2, `golang.org/x/sync`, MCP Go SDK (`1.5.0` → `1.6.1`), ESLint (`10.2.1` → `10.4.1`), shadcn (`4.7.0` → `4.11.0`), `typescript-eslint`, Vite (`8.0.13` → `8.0.16`), `@vitejs/plugin-react`.

**Open / In-Review**
- **`Feat/agent collaboration`** ([#2937](https://github.com/sipeed/picoclaw/pull/2937)) — Introduces a first-class Agent Collaboration Bus with per-agent mailboxes, collaboration threads, and structured message envelopes. This is a major feature addition still open for review.
- **`fix(mcp): reject unknown pre-positional flags in add`** ([#3048](https://github.com/sipeed/picoclaw/pull/3048)) — Prevents `--no-color` and similar root flags from leaking into `mcp add` argument parsing.

---

## 4. Community Hot Topics

| Issue/PR | Type | Comments | 👍 | Summary |
|---|---|---|---|---|
| [#2472](https://github.com/sipeed/picoclaw/issues/2472) | Bug (Open) | 5 | 1 | `list_dir` fails on Windows due to path separator mismatch with `os.Root` |
| [#2954](https://github.com/sipeed/picoclaw/issues/2954) | Bug (Closed) | 3 | 0 | "不支持32位Android系统" — 32-bit Android not supported |
| [#2958](https://github.com/sipeed/picoclaw/issues/2958) | Bug (Closed) | 2 | 0 | Tool calls dropped during consecutive pico channel requests |
| [#3094](https://github.com/sipeed/picoclaw/issues/3094) | Bug (Open) | 1 | 0 | Duplicate messages from async sub-agent (`spawn`) completion |
| [#3108](https://github.com/sipeed/picoclaw/issues/3108) | Bug (Open) | 0 | 0 | Image description requests hallucinate when model lacks vision support |

**Analysis**: The most active discussion (5 comments) centers on **#2472 — Windows path separator compatibility**—a longstanding issue (created April 10) that remains unresolved. This reflects a broader need for better cross-platform support, particularly as PicoClaw gains Windows users. The **#3094 duplicate sub-agent messages** issue also signals growing usage of async agent workflows, where the community expects cleaner message delivery.

---

## 5. Bugs & Stability

### Active Bugs (Ranked by Severity)

| Severity | Issue | Description | Fix Available? |
|---|---|---|---|
| 🔴 **High** | [#3108](https://github.com/sipeed/picoclaw/issues/3108) | **Image hallucination**: When a text-only model (e.g. `deepseek/deepseek-v4-flash`) is asked to describe an image, it loads the image but produces unrelated, hallucinated content. | No fix PR yet |
| 🔴 **High** | [#3094](https://github.com/sipeed/picoclaw/issues/3094) | **Duplicate messages from async sub-agents**: Both raw direct push and summarized output sent simultaneously. | No fix PR yet |
| 🟡 **Medium** | [#2472](https://github.com/sipeed/picoclaw/issues/2472) | **`list_dir` fails on Windows** due to backslash vs forward slash conflict with `os.Root`. | No fix PR yet (open since April) |
| 🟡 **Medium** | [#3080](https://github.com/sipeed/picoclaw/issues/3080) (Closed) | **Security bypass**: `allowed_cidrs` can be bypassed via loopback proxying during first-run setup. Closed without public fix details visible. | Closed, likely addressed |

### Recently Fixed (Today)
- Tool calls dropped during streaming ([#2957](https://github.com/sipeed/picoclaw/pull/2957)) — **fixed**
- False singleton detection ([#2955](https://github.com/sipeed/picoclaw/pull/2955)) — **fixed**
- Claude Sonnet 4.6 model ID mismatch → 404 errors ([#2947](https://github.com/sipeed/picoclaw/pull/2947)) — **fixed**
- Broken error chain wrapping ([#3060](https://github.com/sipeed/picoclaw/pull/3060)) — **fixed**
- Session scope setting not persisted ([#3067](https://github.com/sipeed/picoclaw/pull/3067)) — **fixed**

---

## 6. Feature Requests & Roadmap Signals

### Emerging Feature Work
- **Agent Collaboration Bus** ([#2937](https://github.com/sipeed/picoclaw/pull/2937)) — This is the most significant feature in review. If merged, it would enable durable inter-agent communication with mailboxes and collaboration threads. **Prediction**: Likely to land in v0.3.0 given the scope.
- **Per-request MCP dynamic headers** ([#2696](https://github.com/sipeed/picoclaw/pull/2696), merged today) — Enables channel-context-aware MCP authentication. **Already shipped** in nightly.

### User-Requested Capabilities (Inferred from Issues)
- **Windows native support** (#2472) — Path separator compatibility remains a friction point.
- **Async agent deduplication** (#3094) — Users want cleaner message routing for `spawn`-based workflows.
- **Vision model support awareness** (#3108) — Need for graceful fallback or model capability detection when active model lacks vision.

**Next version prediction (v0.3.0?)**: The Agent Collaboration Bus + MCP dynamic headers + the multiple bug fixes from this cycle suggest a stability + collaboration-focused release.

---

## 7. User Feedback Summary

### Pain Points
- **Windows path issues** (Issue #2472) — "invalid argument" error on `list_dir` due to `\` vs `/` mismatch. Unresolved for 2+ months.
- **Message duplication in async workflows** (Issue #3094) — Sub-agent outputs appear twice on messaging channels (Feishu/Telegram), annoying for users relying on clean agent collaboration.
- **Model hallucination on unsupported capabilities** (Issue #3108) — Users expect graceful handling when a text-only model is asked to describe an image, not fabricated responses.
- **Configuration persistence** (PR #3067) — "Session Scope" setting could not be saved, frustrating users who needed isolation.

### Satisfaction Signals
- **Active maintainer engagement** — 19 PRs closed in 24h signals responsiveness.
- **WhatsApp native mode** (PR #2934) — Users wanting native WhatsApp integration now have a working path.
- **Security-conscious users** (Issue #3080) — Security researchers actively testing and reporting bypass vectors, indicating mature community.

---

## 8. Backlog Watch

| Item | Issue/PR | Age | Status | What's Needed |
|---|---|---|---|---|
| **Windows path separator bug** | [#2472](https://github.com/sipeed/picoclaw/issues/2472) | 63 days (since April 10) | Open | Maintainer to implement forward-slash normalization for `os.Root` on Windows |
| **32-bit Android support** | [#2954](https://github.com/sipeed/picoclaw/issues/2954) | 16 days | Closed (stale) | Closed without resolution — users on 32-bit Android devices may need community guidance |
| **Tool calls dropped (pico channel)** | [#2958](https://github.com/sipeed/picoclaw/issues/2958) | 16 days | Closed | **Fixed** by PR #2957 (merged today) ✅ |
| **Agent Collaboration Bus** | [#2937](https://github.com/sipeed/picoclaw/pull/2937) | 19 days | Open (stale) | Needs maintainer review and merge decision — major architectural addition |
| **MCP `add` flag parsing** | [#3048](https://github.com/sipeed/picoclaw/pull/3048) | 5 days | Open | Awaiting review for a targeted UX fix |

### Maintainer Attention Priority
1. **Immediate**: Review and merge `mcp add` flag parsing fix ([#3048](https://github.com/sipeed/picoclaw/pull/3048))
2. **Short-term**: Address Windows path bug ([#2472](https://github.com/sipeed/picoclaw/issues/2472)) — oldest open bug with active user impact
3. **Medium-term**: Evaluate the Agent Collaboration Bus ([#2937](https://github.com/sipeed/picoclaw/pull/2937)) — could be the next major feature milestone
4. **Ongoing**: Monitor the new image hallucination ([#3108](https://github.com/sipeed/picoclaw/issues/3108)) and sub-agent duplication ([#3094](https://github.com/sipeed/picoclaw/issues/3094)) bugs

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-12

## Today's Overview
NanoClaw experienced a high-velocity development day, with 18 pull requests updated in the last 24 hours and 9 merged or closed. The project remains in a mature, actively maintained state, with a clear focus on fixing protocol-level bugs (Signal reactions, Telegram pairing, egress lockdown), hardening infrastructure (container lifecycle, approval callbacks), and laying groundwork for multi-agent scaling (native channel instances, per-group idle timeouts). Two open issues highlight ongoing architectural concerns around memory system scalability and Docker networking isolation. Community contributor gavrielc drove the bulk of today's fixes and features, signaling strong external engagement and a well-functioning PR review pipeline.

## Releases
No new releases were published in the last 24 hours. The project is in a rapid development phase between releases.

## Project Progress
**9 PRs merged/closed today**, spanning fixes, features, and infrastructure:

**Key Merged Fixes:**
- **#2738** — `fix(session-manager): writeOutboundDirect opens outbound.db read-only — command-gate denials never deliver` (closed) — Fixes a critical bug where outbound command-gate denial responses were silently dropped because the database was opened in read-only mode.
- **#2736** — `fix(host-sweep): grace period for freshly-woken containers with stale processing claims` (closed) — Prevents false-positive reaping of containers that just came online but still have stale processing claims.
- **#2735** — `fix(chat-sdk-bridge): record the acting user on resolved approval cards` (closed) — Adds audit trail for who resolved an approval.
- **#2741** — `fix(setup): auto-submit handoff context as Claude's first prompt` (closed) — Fixes interactive setup handoff where context was passed but never automatically submitted.

**Key Merged Features:**
- **#2740** — `feat(container): per-group idle timeout — clean exit for ephemeral sessions` (closed) — Enables automatic cleanup of idle agent containers.
- **#2739** — `feat(webhook-server): raw-route registry — non-Chat-SDK webhooks become an append` (closed) — Extends webhook support beyond the standard Chat SDK.
- **#2737** — `feat(approvals): approval-resolved callback registry — modules observe resolution additively` (closed) — Pluggable observer pattern for approval lifecycle.
- **#2734** — `feat(delivery): getDeliveryAction read side for the action registry` (closed) — Read-side API for the delivery action registry.
- **#2733** — `feat(channels): native channel-instance dimension — multi-bot substrate` (closed) — Foundational work enabling multiple bot instances per channel.

## Community Hot Topics
**Most Active Issue:**
- **#1356** (Agent memory system redesign) — 6 👍, 2 comments, open since March 2026. This is the highest-reaction item in the tracker. The discussion centers on the current markdown-file-based memory system hitting scaling limits at ~54 files/~83 KB. The underlying need is for a durable, queryable memory substrate that supports multi-agent persistence at scale — a clear roadmap signal for a v2 memory architecture.

**Most Active PRs:**
- **#2744** (fix(signal): deliver agent reactions and forward inbound reactions) — Open, authored by WormyOne. Addresses a silent failure in the Signal adapter where agent reactions (like `add_reaction` MCP tool output) are never delivered and inbound reactions are ignored. High priority for Signal-channel users.
- **#2742** (feat(recipes): the PR Factory — a published recipe for PR review, triage & testing) — Open, authored by gavrielc. A complete recipe for spinning up a dedicated agent to triage, review, and test every PR, posting results to Slack. This is a meta-contribution — a recipe for more efficient project maintenance itself.

## Bugs & Stability
**Critical Severity:**
- **#2731** (Egress lockdown hijacks host.docker.internal) — **New, open, no fix PR yet**. When `NANOCLAW_EGRESS_LOCKDOWN=true` is set, the gateway container is attached to a network that blocks agents from reaching host-local services (Ollama endpoints, bridge proxies). This is a **design flaw** in the egress lockdown implementation — it doesn't account for host-local dependencies that agents legitimately need. **No fix PR exists**; contributors will need to add a host-local exception mechanism.

**High Severity:**
- **#2495** (writeOutboundDirect opens outbound DB in read-only mode) — **Closed** as of today's merged PR #2738. Fix shipped.
- **#2743** (wirings create silently skips agent_destinations side effect) — **Open, fix PR exists** (PR #2743). The CLI's `ncl wirings create` performs a raw INSERT instead of going through the proper creation function, so agents never receive messages from new chats. Straightforward fix pending review.

**Medium Severity:**
- **#2730** (NANOCLAW_* flags set in .env never reach process.env under launchd/systemd) — **Open, fix PR exists** (PR #2730). Operational flags read directly from `process.env` at top-level eval time, but `.env` is never loaded under systemd or launchd. This means egress lockdown and other environment-based configs silently fail in production deployments.
- **#2728** (Telegram pairing with wire-to intent never creates the messaging_group_agents row) — **Open, fix PR exists** (PR #2728). Pairing succeeds in all visible ways but leaves agents unconnected to the group.

## Feature Requests & Roadmap Signals
**Coming in next release (strong signals from merged PRs):**
- **Multi-bot per channel** — PR #2733 (merged) provides the substrate for running multiple bot instances on the same channel, enabling team-style agent deployments.
- **Approval-resolved callbacks** — PR #2737 (merged) enables modules to plug into approval resolution, opening the door for audit logging, notification, and policy engines.
- **Raw webhook registry** — PR #2739 (merged) allows non-Chat-SDK webhooks to be registered, expanding integration possibilities (GitHub, custom services).
- **Per-group idle timeout** — PR #2740 (merged) enables clean exit for ephemeral agent sessions, critical for resource management in multi-tenant deployments.

**Likely next (from open issues and PRs):**
- **Memory system v2** — Issue #1356 is the highest-community-interest item. Expect a design proposal or experimental implementation in the next 2-3 releases.
- **Egress lockdown host-local exception** — Issue #2731 will likely be addressed with a `NANOCLAW_EGRESS_LOCKDOWN_ALLOW_HOST` or similar config.
- **PR Factory recipe** — PR #2742 is a recipe, not a core code change, so it may land quickly as a `.claude/skills/` addition.

**Longer-term signals:**
- **Agent-runner health hardening** — PR #2732 (open) from a multi-agent health audit adds circuit breakers, `MAX_CONCURRENT_CONTAINERS`, and crash-loop detection. Signals growing operational maturity for production deployments.

## User Feedback Summary
**Pain points:**
- Signal adapter users cannot send or receive message reactions (PR #2744, Issue #2731's comment thread). The feature is offered to agents but silently fails.
- Users running NanoClaw under systemd/launchd find that `.env` is never loaded, causing egress lockdown and other confiurational flags to silently be ignored (PR #2730).
- Telegram pairing with `--intent wire-to:<folder>` appears to succeed but leaves agents unconnected (PR #2728).
- Egress lockdown breaks legitimate host-local dependencies (Issue #2731), forcing users to choose between security and functional access to Ollama or local proxies.

**Satisfactions (implied from merged PRs):**
- Approval workflow audit trail (PR #2735) addresses a common enterprise requirement.
- Container lifecycle hardening (PR #2736) and per-group idle timeouts (PR #2740) were likely driven by user complaints about resource leaks and zombie containers.
- The PR Factory recipe (PR #2742) suggests a sophisticated power user automating their own maintenance workflow.

## Backlog Watch
**Long-unanswered issues needing attention:**
- **#1356** (Agent memory system redesign) — Created 2026-03-23, 6 👍, 2 comments. This is the highest-community-interest open item. While actively discussed, no PR or design document has been linked. Maintainers should consider posting a design RFC to guide contributor interest.

**Open PRs needing review:**
- **#2611** (fix(cli): preserve caller context after approval) — Open since 2026-05-25 (18 days). This is a **security fix** — without it, approved commands replay with a default context rather than the original caller's context, which could lead to privilege escalation. High priority for review.
- **#2685** (docs(signal): group typing, outbound reactions, quote-reply fix) — Open since 2026-06-04 (8 days). Updates Signal documentation to match recently fixed behavior. Low-risk, should be merged.
- **#2732** (Harden host + agent-runner from health audit findings) — Open, 2026-06-11. Multi-fix PR from an adversarial health audit. High value but large scope — should be broken into smaller reviewable pieces or assigned a dedicated reviewer.

**Observations:**
- Contributor gavrielc is the most prolific today (7 PRs, all merged). This is a strong positive signal for community health, but the project should ensure the maintainer team has bandwidth to review external contributions promptly.
- The Signal ecosystem (PRs #2744, #2685) and Telegram ecosystem (PRs #2728, #2729) both have outstanding unmerged fixes, suggesting channel adapters may be under-tested or under-maintained relative to core.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-12

## Today's Overview
Project activity is minimal today, with only one open issue updated in the last 24 hours and no new pull requests or releases. The single active issue reports a potentially significant bug concerning incomplete answers from local models via Ollama, which could affect users relying on self-hosted inference. No maintenance activity (merges, closures, or new code contributions) was observed, suggesting a low-activity day for the NullClaw project. The project appears stable in terms of release cadence but may require attention to the reported local model behavior.

## Releases
No new releases were published today. The latest available release remains unchanged.

## Project Progress
No pull requests were merged or closed today. No feature advancements or bug fixes were introduced in the last 24 hours.

## Community Hot Topics
The only active issue today is the most significant community concern:

- **Issue #952** — [bug] Local model using ollama returns incomplete answers  
  *Author: bloodgroup-cplusplus | Updated: 2026-06-11 | 0 comments*  
  *Link: [nullclaw/nullclaw Issue #952](https://github.com/nullclaw/nullclaw/issues/952)*  
  *Analysis:* This issue reports that when using a local Gemma model pulled via Ollama, the agent fails to produce complete sentences—responses are truncated or partial. The reporter included a screenshot showing the problem. The underlying need is for reliable, complete responses when using local models, which is critical for users who prefer on-premise inference over cloud APIs. The lack of comments or reactions suggests this is either a niche configuration issue or has not yet gained visibility in the community.

## Bugs & Stability
### Bug Report (1 active, severity: medium-high)

- **Issue #952** — Incomplete answers from local Ollama model  
  *Severity:* **Medium-High** — Users relying on local models (a key feature of open-source agents) may experience functionally broken output. If the truncation occurs consistently, it could render the agent unusable for serious tasks.  
  *Status:* Open, no associated fix PR.  
  *Possible cause:* Could be related to token limit settings, Ollama context window configuration, or a bug in NullClaw’s response parsing when handling streaming output from Ollama.  
  *Action required:* Maintainer investigation is needed; a reproduction attempt and logging would help narrow down the issue.

No crashes, regressions, or other stability issues were reported today.

## Feature Requests & Roadmap Signals
No explicit feature requests were filed today. However, the incomplete answers bug indirectly signals a desire for:

1. **Better local model integration** — Users want seamless, reliable local inference.
2. **Explicit token/context length controls** — Allowing users to set maximum output length could mitigate truncation.
3. **Ollama compatibility improvements** — More robust handling of different Ollama model outputs.

**Prediction:** If this issue gains traction, the next minor release may include fixes to Ollama response handling, possibly adding configurable max tokens or improved streaming parser logic. No breaking changes are anticipated from this alone.

## User Feedback Summary
**Pain point (1 reported):** A user (bloodgroup-cplusplus) reports that using a local Gemma model via Ollama produces incomplete answers—the agent “doesn’t answer in complete sentences.” This is a clear dissatisfaction point for users who prefer local models for privacy or cost reasons.

**Use case highlighted:** Running NullClaw with self-hosted LLMs (Ollama) for environments where cloud APIs are not desirable or available.

**Satisfaction:** No positive feedback was recorded today. The sole interaction is a support/bug report, indicating a potential friction point in the local model experience.

## Backlog Watch
No long-standing unanswered issues or PRs were identified in today’s data. The only active issue (#952) was created on 2026-06-11 and is only one day old, so it does not yet qualify as a backlog item. Maintainers should prioritize responding to this issue within 48 hours to prevent user frustration and gather reproduction details.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-12

## Today's Overview

IronClaw remains in an intense development phase, with 31 issues updated and 49 PRs updated in the last 24 hours — indicating a highly active project. The core focus continues to be the **Reborn** binary, with 13 closed issues and 26 merged/closed PRs showing strong forward momentum across QA automation, WebUI improvements, and Slack integration. No new releases were published today. The team appears to be in a stabilization and hardening cycle following significant feature work, with particular attention to tool reliability, credential handling, and operator observability.

## Releases

No new releases were published in the last 24 hours. The previous release candidate at PR #3708 (`ironclaw`: 0.24.0 → 0.29.1, `ironclaw_common`: 0.4.2 → 0.5.0 with breaking changes) remains open and unmerged.

## Project Progress

**26 PRs were merged or closed today**, indicating substantial forward progress.

**Key merged/closed PRs:**
- **#4786** — Promote main to QA branch (branch management)
- **#4757** — Fix WebUI automations page navigation for triggered runs (bug fix)
- **#4784** — Handle capability runtime unavailability as tool failure instead of aborting the agent loop (stability improvement)
- **#4782** — Unify outbound state store so WebUI delivery defaults reach Slack delivery (integration fix)
- **#4753** — Slack gate routing: conversation-keyed delivered-gate routes for bare "approve" resolution (Slack approval flow fix)
- **#4781** — Add Reborn autonomous loop commands (build/deslop/review) for Claude (developer tooling)
- **#4744** — Gate extension activation and harden GSuite OAuth runtime (security + integration)

**Notable open PRs with active development:**
- **#4780** — Steer routine delivery through outbound targets (open)
- **#4777** — Persist Slack connected state in WebUI (open)
- **#4774** — Add CodeRabbit configuration for AI-review trial (open)
- **#4588** — Observability seams: trajectory observer + LLM provider injection (open)
- **#4772** — Fix batch of Reborn WebChat v2 UI bugs plus model-picker bug (open)
- **#4778** — Represent Slack as a product-adapter extension (open)

## Community Hot Topics

**Most commented issues (top by engagement):**

1. **#3036** [EPIC] Configuration-as-Code for IronClaw Reborn — *7 comments, 1 👍*  
   [nearai/ironclaw Issue #3036](https://github.com/nearai/ironclaw/issues/3036)  
   *Long-running epic with sustained interest; declarative config remains a high-impact unmet need*

2. **#4766** [CLOSED] Chat runtime does not use UI-saved NEAR AI credentials after restart — *2 comments*  
   [nearai/ironclaw Issue #4766](https://github.com/nearai/ironclaw/issues/4766)  
   *Critical UX bug resolved quickly; credential persistence was blocking local development*

3. **#4703** [OPEN] NEAR AI model picker saves display name instead of model ID — *2 comments*  
   [nearai/ironclaw Issue #4703](https://github.com/nearai/ironclaw/issues/4703)  
   *Backend bug affecting provider configuration; fix appears in PR #4772*

4. **#4761** [OPEN] Agent stops after repeated tool failures instead of recovering — *1 comment*  
   [nearai/ironclaw Issue #4761](https://github.com/nearai/ironclaw/issues/4761)  
   *Resilience gap: agent loop termination on tool failure is a significant reliability concern*

**Most active PRs (by comment count — all display "undefined" but have clear activity signals):**
- **#4769** — 22 new Reborn test suites on binary-E2E harness (22 tests, no external deps)
- **#4772** — Batch WebChat v2 UI bug fixes + model-picker fix (frontend + backend)
- **#4774** — CodeRabbit AI-review trial configuration (CI/tooling)
- **#4780** — Outbound delivery target steering (model-visible guidance)

**Underlying community needs:**
- **Credential persistence and provider configuration** still cause friction for new users
- **Tool reliability and recovery** is a top concern — users expect agents to handle failures gracefully
- **Observability and debugging** (logs, workspace file discovery, tool approval context) are unmet UX needs
- **Declarative configuration** (#3036) shows long-standing demand for schema-driven setup

## Bugs & Stability

**High Severity (active blocker):**
- **#4783** [OPEN] Credential-less WASM extension capabilities fail dispatch with network obligation error before execution  
  [nearai/ironclaw Issue #4783](https://github.com/nearai/ironclaw/issues/4783)  
  *Pure-compute extensions are un-invocable — significant architectural bug in capability dispatch*
- **#4761** [OPEN] Agent stops after repeated tool failures instead of recovering  
  [nearai/ironclaw Issue #4761](https://github.com/nearai/ironclaw/issues/4761)  
  *Agent loop termination on tool failure; no recovery path exists*
- **#4764** [OPEN] Denying shell approval leaves tool invocation pending with no user feedback  
  [nearai/ironclaw Issue #4764](https://github.com/nearai/ironclaw/issues/4764)  
  *UX dead-end: deny action has no effect on state*

**Medium Severity:**
- **#4770** [OPEN] Tool activity may stop updating after refresh (SSE reconnect issue)  
  [nearai/ironclaw Issue #4770](https://github.com/nearai/ironclaw/issues/4770)  
  *Intermittent — likely SSE reconnection bug*
- **#4762** [OPEN] Failed tool workflow causes follow-up messages and activity ordering to become inconsistent  
  [nearai/ironclaw Issue #4762](https://github.com/nearai/ironclaw/issues/4762)  
  *State corruption after tool failure cascades to subsequent interactions*
- **#4759** [OPEN] Workspace path is duplicated when using workspace-relative paths  
  [nearai/ironclaw Issue #4759](https://github.com/nearai/ironclaw/issues/4759)  
  *Path construction bug causing `workspace/workspace/demo/a.txt`*
- **#4751** [OPEN] Large response request fails with provider tool arguments exceed 16384 bytes  
  [nearai/ironclaw Issue #4751](https://github.com/nearai/ironclaw/issues/4751)  
  *Size limit issue for large responses; no truncation/error handling*

**Low Severity / UX:**
- **#4703** Model picker saves display name instead of model ID (fix in PR #4772)  
- **#4748** Wrap/No Wrap toggle appears to have no effect in code blocks  
- **#4750** Workspace files are not discoverable from WebUI

**Bug fixes merged today:**
- PR #4757: Fix automations page navigation for triggered runs
- PR #4784: Handle capability runtime unavailability as tool failure (fixes abort behavior)
- PR #4782: Fix Slack delivery default routing
- PR #4753: Fix Slack bare "approve" command routing

## Feature Requests & Roadmap Signals

**Requests with clear user demand:**

1. **Configuration-as-Code** (#3036) — Epic with 7 comments; declarative tenant blueprints and harnesses. Likely for next major release given sustained interest.

2. **Global "Always Allow" setting for eligible tools** (#4776) — User request to avoid repeated approvals. Simple UX improvement likely to ship soon.

3. **Workspace file discoverability** (#4750) — Users want to browse files created by agents in WebUI. Likely near-term UX enhancement.

4. **Thread-scoped operator log filtering** (#4771) — Follow-up to log page wiring. Already in progress (PR #4758).

5. **Reborn persistent tenant sandbox & agent-built extension promotion** (#4785) — Design document for hosted deployment. Important for platform evolution but longer-term.

6. **Automated QA for Reborn binary** (#4775) — Epic with 22 tests already written in PR #4769. Close to shipping.

**Prediction for next release:**
- #4700 style credential auto-configuration (NEAR AI MCP auto-enable)
- #4776 global tool allow setting
- #4750 workspace file browsing
- #4771/#4758 operator log filtering
- #4783 WASM capability dispatch fix (blocker)

## User Feedback Summary

**Real pain points from user reports (sunglow666, think-in-universe, zetyquickly):**

- **Credential friction:** Users report setup failures with SSO (#4705) and credential persistence after restart (#4766). Local development is still not seamless.
- **Tool approval UX:** Denying a tool shows no feedback (#4764); approval context is insufficient (#4701). Users want more control and transparency.
- **Resilience gaps:** Agent termination on tool failure (#4761), inconsistent message ordering after failures (#4762), and SSE reconnection issues (#4770) erode trust in reliability.
- **Discoverability:** Users cannot browse workspace files from WebUI (#4750) — created files feel "lost."
- **Configuration complexity:** Operators must hand-edit multiple config files with no schema or audit trail (#3036).

**Satisfaction signals:**
- The Reborn binary is actively receiving 22 automated tests (#4769) — QA confidence is rising.
- Slack integration is being systematically fixed (multiple PRs on delivery routing, gate approval).
- Observability is improving (PR #4588: trajectory observer, operator log injection).

## Backlog Watch

**Issues needing maintainer attention:**

1. **#4108** — Nightly E2E failed (created 2026-05-27, updated 2026-06-11, 0 comments)  
   [nearai/ironclaw Issue #4108](https://github.com/nearai/ironclaw/issues/4108)  
   *Scheduled CI failure has been open for 16 days without resolution or follow-up. Could indicate flaky tests or infrastructure issues.*

2. **#3036** — Configuration-as-Code Epic (created 2026-04-28, 7 comments)  
   [nearai/ironclaw Issue #3036](https://github.com/nearai/ironclaw/issues/3036)  
   *Long-running epic with high community interest; no recent PRs assigned. May need prioritization or scoping.*

3. **#3708** — Release PR (created 2026-05-16, still open)  
   [nearai/ironclaw PR #3708](https://github.com/nearai/ironclaw/pull/3708)  
   *Release candidate with breaking changes has been open for 27 days. Blocked on unresolved issues or coordination.*

**PRs needing review/ merge attention:**
- **#4588** — Observability seams (PR #4588, created 2026-06-09, no comments) — important for benchmarking
- **#4676** — Document text extraction on inbound landing path (PR #4676, created 2026-06-10) — foundational for attachment support
- **#4672** — Inline attachment uploads on WebChat v2 (PR #4672, created 2026-06-10) — completes attachment pipeline

**Overall assessment:** The project is in a healthy, high-velocity state with strong focus on bug fixes and integration hardening around the Reborn binary. The backlog contains a mix of long-standing architectural issues and recent UX regressions. CI stability (nightly E2E failures) and the stalled release pipeline are the two most prominent risks.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-12

## 1. Today's Overview
LobsterAI saw a **high-activity day** with 19 PRs updated in the last 24 hours, of which 18 were merged/closed — reflecting strong engineering throughput. Two new issues were updated but remain open, with no new releases published. The project is clearly in a **feature-packed sprint phase**, shipping significant improvements across Cowork (ASR voice, context continuity, model failover), artifacts (HTML sharing), Computer Use MVP, and Windows installation stability. Community engagement is moderate, with the most discussed issue being a request for per-agent model binding and multi-agent orchestration.

## 2. Releases
**None** — No new releases were published on this date. The current stable version remains unchanged.

## 3. Project Progress (Merged/Closed PRs Today)
**18 merged/closed PRs** advanced the project. Key feature deliveries and fixes:

| PR | Area | Summary |
|----|------|---------|
| [#2148](https://github.com/netease-youdao/LobsterAI/pull/2148) | Cowork | **Realtime ASR voice input** — WebSocket streaming of microphone PCM audio with real-time text backfill; settings toggle between streaming & one-shot modes |
| [#2143](https://github.com/netease-youdao/LobsterAI/pull/2143) | Skills | **Computer Use MVP** — Windows x64 built-in kit with MCP server bridge for app/window listing, launching, screenshot capture |
| [#2145](https://github.com/netease-youdao/LobsterAI/pull/2145) | Cowork | **Post-compaction context continuity** — improves agent reliability after OpenClaw chat history compression |
| [#2146](https://github.com/netease-youdao/LobsterAI/pull/2146) | Artifacts | **HTML share access mode selection** — share code or public access with switching support |
| [#2151](https://github.com/netease-youdao/LobsterAI/pull/2151) | Artifacts | **File sharing** — new feature for sharing files through the artifact system |
| [#2147](https://github.com/netease-youdao/LobsterAI/pull/2147) | Cowork | **Prevent stopped startup turns from sending chat** — race condition fix with renderer diagnostics |
| [#2152](https://github.com/netease-youdao/LobsterAI/pull/2152) | Cowork | **Extend pre-send model sync timeout to 90s** — fixes cold-start message dropping on slow gateways |
| [#2149](https://github.com/netease-youdao/LobsterAI/pull/2149) | OpenClaw | **Raise gateway heap limit** — reduces OOM crashes under multi-channel workloads |
| [#2150](https://github.com/netease-youdao/LobsterAI/pull/2150) | Kits | **Keep expert suite controls sticky** — UI polish for Skills/MCP alignment |
| [#2142](https://github.com/netease-youdao/LobsterAI/pull/2142) | Windows | **Fix NSIS destructive init, redesign engine loading page** — platform stability |
| [#2144](https://github.com/netease-youdao/LobsterAI/pull/2144) | Auth | **Update portal fallback URLs** — production domain migration |
| [#1483](https://github.com/netease-youdao/LobsterAI/pull/1483) | Models | **Automatic model failover** — fallback model on transient errors (rate limit, timeout, server error) |
| [#1484](https://github.com/netease-youdao/LobsterAI/pull/1484) | Automation | **Gmail email trigger** — polls Gmail API for new messages to trigger agent sessions |
| [#1459](https://github.com/netease-youdao/LobsterAI/pull/1459) | Skills | **Skill hover tooltip** — rich tooltip with full name, description, smart direction detection |
| [#1481](https://github.com/netease-youdao/LobsterAI/pull/1481) | Cowork | **Scroll-friendly active skill badges** — horizontal scroll for overflow chips |
| [#1478](https://github.com/netease-youdao/LobsterAI/pull/1478) | Cowork | **CopyButton memory leak fix** — timer cleanup on unmount |
| [#1479](https://github.com/netease-youdao/LobsterAI/pull/1479) | Skills | **Reject duplicate skill folders** — prevents `name-1`, `name-2` duplicates |
| [#1480](https://github.com/netease-youdao/LobsterAI/pull/1480) | Skills | **Toast & refresh after skill add** — better install UX |
| [#1482](https://github.com/netease-youdao/LobsterAI/pull/1482) | Scheduled Tasks | **Fix description/enabled state loss on edit** |

## 4. Community Hot Topics

**Most Active Issue:**
- [#1462](https://github.com/netease-youdao/LobsterAI/issues/1462) — *"许愿：期望每个agent能够单独绑定模型、期望有正式的多agent协作能力"* (2 comments) — User wants: (1) per-agent model binding, (2) multi-agent orchestration with manager/room concept. The user mentions they tried Alibaba's Hiclaw but found LobsterAI's interaction experience superior. This is a **long-standing feature request** (created April 4) with no official response yet.

**Most Active PR (by recency/impact):**
- [#2148](https://github.com/netease-youdao/LobsterAI/pull/2148) — Realtime ASR voice input was the highest-impact feature merge today.

## 5. Bugs & Stability

| Bug | Severity | Status | Fix PR |
|-----|----------|--------|--------|
| **Context compaction breaks agent continuity** | High | Fixed | [#2145](https://github.com/netease-youdao/LobsterAI/pull/2145) |
| **Pre-send model sync timeout drops messages** (35-107s stalls) | High | Fixed | [#2152](https://github.com/netease-youdao/LobsterAI/pull/2152) |
| **OpenClaw gateway OOM under multi-channel workloads** | High | Fixed | [#2149](https://github.com/netease-youdao/LobsterAI/pull/2149) |
| **Stopped startup turns still send messages** | Medium | Fixed | [#2147](https://github.com/netease-youdao/LobsterAI/pull/2147) |
| **Windows NSIS destructive initialization** | Medium | Fixed | [#2142](https://github.com/netease-youdao/LobsterAI/pull/2142) |
| [#2121](https://github.com/netease-youdao/LobsterAI/issues/2121) — *"重复输出的文字是不是在大量吃我的token"* (Repeated text consuming tokens, suspected bug) | Medium | **Open** | None yet |
| **Scheduled task description/enabled state lost on edit** | Low | Fixed | [#1482](https://github.com/netease-youdao/LobsterAI/pull/1482) |
| **CopyButton memory leak on unmount** | Low | Fixed | [#1478](https://github.com/netease-youdao/LobsterAI/pull/1478) |
| **Skill install creates duplicate folders** | Low | Fixed | [#1479](https://github.com/netease-youdao/LobsterAI/pull/1479) |

**Top concern:** Issue #2121 (repeated text output) remains unresolved — user suspects token waste and asks if it's a Claude issue. No assignee or PR yet.

## 6. Feature Requests & Roadmap Signals

Based on merged PRs and community requests, the following features are likely for the next version:

| Feature | Signal | Likelihood |
|---------|--------|------------|
| **Per-agent model binding** | [#1462](https://github.com/netease-youdao/LobsterAI/issues/1462) — highly requested | Medium — foundational architectural change |
| **Multi-agent orchestration (manager/room)** | [#1462](https://github.com/netease-youdao/LobsterAI/issues/1462) — user explicitly wants room-based agent teams | Medium — aligns with enterprise use cases |
| **Computer Use (Windows x64)** | [#2143](https://github.com/netease-youdao/LobsterAI/pull/2143) — merged MVP | **High** — already in this sprint |
| **Realtime ASR voice input** | [#2148](https://github.com/netease-youdao/LobsterAI/pull/2148) — merged | **High** — ready for next release |
| **HTML/file sharing with access control** | [#2146](https://github.com/netease-youdao/LobsterAI/pull/2146), [#2151](https://github.com/netease-youdao/LobsterAI/pull/2151) — merged | **High** — ready for next release |
| **Gmail email trigger** | [#1484](https://github.com/netease-youdao/LobsterAI/pull/1484) — merged | Medium — automation parity with OpenClaw |
| **Automatic model failover** | [#1483](https://github.com/netease-youdao/LobsterAI/pull/1483) — merged | Medium — reliability improvement |

## 7. User Feedback Summary

**Satisfaction signals:**
- User in [#1462](https://github.com/netease-youdao/LobsterAI/issues/1462) explicitly states LobsterAI's interaction experience is superior to Alibaba's Hiclaw
- High PR merge velocity (18/19 today) suggests active maintainer responsiveness

**Pain points:**
- Users want **per-agent model assignment** for fine-grained control
- Users want **multi-agent orchestration** (manager/room model) for complex workflows
- Issue [#2121](https://github.com/netease-youdao/LobsterAI/issues/2121) reports **repeated text output** — user suspects token waste, causing direct cost concern
- The 4.3 multi-instance feature is praised, but users want more granular agent control

## 8. Backlog Watch

| Issue/PR | Days Stale | Importance | Action Needed |
|----------|------------|------------|---------------|
| [#1462](https://github.com/netease-youdao/LobsterAI/issues/1462) — Multi-agent/Per-model binding | 69 days | **High** (active community request) | Maintainer response or roadmap commitment |
| [#1459](https://github.com/netease-youdao/LobsterAI/pull/1459) — Skill hover tooltip (OPEN stale PR) | 70 days | Low/Medium (now obsolete? PR #2148 etc delivered) | Re-evaluate or close |
| [#2121](https://github.com/netease-youdao/LobsterAI/issues/2121) — Repeated text output (token waste) | 5 days | **Medium** (reported as potential bug) | Assign maintainer, request reproduction steps, or confirm if Claude issue |

**Notable:** The project is shipping aggressively on features (Computer Use, ASR, file sharing) but has a **69-day-old high-value feature request** (#1462) with no official response. The repeated text output bug (#2121) also needs resolution before it escalates into trust/cost issues for users.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the Moltis project digest for **2026-06-12**.

---

## Moltis Project Digest – 2026-06-12

### 1. Today's Overview
Activity on the Moltis repository was light but focused, with one active bug report and one open pull request arriving in the last 24 hours. No new releases were cut today, indicating the project is currently in a stabilization or review phase rather than a release cycle. The single open bug (#1115) regarding Fastmail MCP authorization represents a potential integration blocker for email-dependent users, while the open PR (#1116) addresses a silent delivery failure on WhatsApp, suggesting the team is prioritizing reliability for high-volume messaging channels. Overall, the project appears to be healthy but could benefit from increased maintainer engagement on the open items.

### 2. Releases
*No new releases were published in the last 24 hours.*

---

### 3. Project Progress
No pull requests were merged or closed today.

**Open PR (awaiting review/merge):**
- **[#1116](https://github.com/moltis-org/moltis/pull/1116) – fix(whatsapp): deliver replies to @lid chats via PN JID rewrite**  
  *Author: juanlotito* – This PR fixes a critical messaging reliability bug where replies sent to a privacy-enabled sender’s `@lid` chat on WhatsApp were silently dropped. Although the agent reply was generated and visible in the web UI, the outbound message never reached the user. The fix rewrites the JID for privacy-enabled notifications, ensuring delivery receipts are returned.

---

### 4. Community Hot Topics
The most active discussion today centers on an integration issue with Fastmail.

- **Issue [#1115](https://github.com/moltis-org/moltis/issues/1115) – [Bug]: Fastmail MCP Authorisation** (1 comment, reported by kmath313)  
  *Underlying need:* Users integrating Moltis with Fastmail (a popular email provider) are hitting an authorization wall, likely related to OAuth flow or MCP configuration. This is a fundamental connectivity issue that could prevent email-based workflows from functioning for Fastmail users. The single comment suggests a workaround or clarification was provided, but no resolution has been confirmed.

---

### 5. Bugs & Stability
One bug was reported today. It is ranked as **medium-high severity** due to its potential to block core communication functionality.

| Issue | Title | Severity | Fix PR Exists? |
|-------|-------|----------|----------------|
| [#1115](https://github.com/moltis-org/moltis/issues/1115) | Fastmail MCP Authorisation | Medium-High | No |

**Analysis:** Authorization failures in MCP (Model Context Protocol) integrations typically prevent agents from reading or sending emails. Since email is a primary agent input/output channel, this bug could render the Fastmail provider unusable for affected users. No fix PR has been submitted yet.

---

### 6. Feature Requests & Roadmap Signals
No explicit feature requests were opened today. However, the activity signals two implied roadmap priorities:

1. **WhatsApp delivery reliability (PR #1116):** The team is actively investing in making privacy-preserving chat modes work reliably. This signals a roadmap focus on end-to-end delivery guarantees for encrypted or privacy-scrubbed message channels.

2. **Email provider parity (Issue #1115):** The existence of a Fastmail-specific bug suggests the project supports multiple MCP email providers, and users expect equal compatibility. Closing this gap will likely be a near-term goal before the next release.

---

### 7. User Feedback Summary
- **Pain Point:** Fastmail users report being unable to complete authorization, effectively blocking any email-based agent workflows with that provider. This is a friction point for power users who rely on Fastmail for privacy.
- **Use Case:** Users want to run autonomous agents that can read and respond to emails through their Fastmail accounts.
- **Satisfaction/Dissatisfaction:** The reporter appears methodical (completed the preflight checklist), indicating a proactive user who is frustrated but engaged. However, the lack of a quick resolution or maintainer response may increase dissatisfaction.

---

### 8. Backlog Watch
No long-unanswered items are currently flagged. However, **Issue #1115** (Fastmail authorization) has been open for less than 24 hours with no maintainer response yet. While not yet a "backlog" item, it should be watched closely—if it remains unaddressed for 48+ hours, it could signal a support gap for third-party email integrations.

**Items to monitor:**
- **[Issue #1115](https://github.com/moltis-org/moltis/issues/1115)** – Awaiting maintainer triage/response.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest
**Date:** 2026-06-12  
**Repository:** [github.com/agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)

## 1. Today's Overview

CoPaw (QwenPaw) is in a period of **intense, high-velocity activity** with 31 issues and 40 PRs updated in the last 24 hours. Two patch releases (v1.1.11.post1 and v1.1.11.post2) were published, signaling rapid bug-fix iteration following the v1.1.11 launch. The project is **simultaneously managing critical desktop stability regressions** (OpenSSL 3.5 crash, infinite process spawning), while also advancing major architectural changes including a Runtime 2.0 modular refactor, an Agent OS Driver abstraction for MCP/A2A integration, and a planned migration from AgentScope 1.x to AgentScope 2.0. Community engagement is high, with users reporting both blocking bugs and ambitious feature requests. The project appears **moderately stressed** due to the confluence of breaking changes and regressions, but development momentum remains very strong.

## 2. Releases

Two new patch versions were released:
- **[v1.1.11.post2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.11.post2)** – UI style fix: truncate tool card titles to single line with ellipsis; version bump.
- **[v1.1.11.post1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.11.post1)** – Revert of a pack fix; release duty checklist addition.

**Migration Notes:** These are patch releases with no breaking changes. Users on v1.1.11 should upgrade to .post2 for the UI fix. **Users experiencing desktop startup failures (see Bugs section) should not upgrade until the OpenSSL regression is confirmed resolved in a future release.**

## 3. Project Progress

**Merged/Closed PRs today (19 total):** Includes both patch releases and several focused fixes:
- **[#5119 – style: truncate tool card titles to single line with ellipsis](https://github.com/agentscope-ai/QwenPaw/pull/5119)** – Improved tool card UI rendering.
- **[#5118 – chore: add news for agentscope platform](https://github.com/agentscope-ai/QwenPaw/pull/5118)** – Platform news addition.
- **[#5133 – feat(ui): apply AionUi design language to Console layout](https://github.com/agentscope-ai/QwenPaw/pull/5133)** – CSS-only visual refresh for the Console.
- **[#5134 – feat(.claude): qwenpaw-changelog historian agent](https://github.com/agentscope-ai/QwenPaw/pull/5134)** – A new dev-team pipeline phase for automated changelog generation.
- **[#5136 – feat(i18n): pt-BR complete workspace translation](https://github.com/agentscope-ai/QwenPaw/pull/5136)** – Full Brazilian Portuguese locale support.

**Major open PRs under active review** signal significant architectural work:
- **[#5078 – feat(runtime): Runtime 2.0 modular architecture](https://github.com/agentscope-ai/QwenPaw/pull/5078)** – Decomposes the monolithic runner into composable units with ToolCoordinator layer.
- **[#5067 – feat(driver): Agent OS Driver for MCP/A2A/ACP](https://github.com/agentscope-ai/QwenPaw/pull/5067)** – Unifying abstraction for external capability invocation.
- **[#5028 – fix(security): isolate keychain master key per install](https://github.com/agentscope-ai/QwenPaw/pull/5028)** – Security hardening for credential storage.

## 4. Community Hot Topics

| Issue/PR | Type | Comments | Topic |
|----------|------|----------|-------|
| [#4727 – Migrate backend from AgentScope 1.x to 2.0](https://github.com/agentscope-ai/QwenPaw/issues/4727) | Breaking Change | 9 | Core architecture migration |
| [#5064 – Scheduled tasks created by agent don't trigger](https://github.com/agentscope-ai/QwenPaw/issues/5064) | Bug | 8 | Agent-created cron jobs broken |
| [#5106 – SSL certificate error + infinite process crash](https://github.com/agentscope-ai/QwenPaw/issues/5106) | Bug | 7 | Desktop app crashes system |
| [#4989 – v1.1.9/1.1.10 local Qwen model no response](https://github.com/agentscope-ai/QwenPaw/issues/4989) | Bug | 6 | Local model integration regression |
| [#3817 – Long-term memory vector model config resets on restart](https://github.com/agentscope-ai/QwenPaw/issues/3817) | Bug | 5 | Configuration persistence failure |
| [#5086 – OpenSSL 3.5 regression bug](https://github.com/agentscope-ai/QwenPaw/issues/5086) | Bug | 5 | Desktop launch failure |

**Underlying Needs Analysis:** The most commented issues reveal **two dominant user pain points**: (1) **Desktop stability and launch failures** – multiple users report that the latest versions are completely unusable on Windows, with SSL errors and infinite processes crashing their systems. (2) **Model integration regressions** – users hosting local models report that conversation responses are silently broken after upgrading, with no error logs. The high engagement on these issues suggests significant frustration and urgency.

## 5. Bugs & Stability

**Critical Severity:**
- **[#5106 – SSL certificate error + infinite process crash on Tauri Desktop](https://github.com/agentscope-ai/QwenPaw/issues/5106)** – Newest Tauri desktop app throws SSL error, then forks infinite processes consuming all memory, causing system black screen. **No fix PR identified.** Old PyInstaller version also broken after attempting upgrade.
- **[#5086 – OpenSSL 3.5 regression blocking Desktop launch](https://github.com/agentscope-ai/QwenPaw/issues/5086)** – `ssl.SSLError: [ASN1: NOT_ENOUGH_DATA]` on DER certificate parsing. Python 3.10 bundled with OpenSSL 3.5.7. **Potentially related to #5106.** No fix PR yet.

**High Severity:**
- **[#4989 – Local model (Qwen 3.6-27B via vLLM) no response in v1.1.9/1.1.10](https://github.com/agentscope-ai/QwenPaw/issues/4989)** – Regression from v1.1.5.post2. Model connects successfully but chat returns nothing. Six comments, no fix yet.
- **[#5064 – Agent-created scheduled tasks don't trigger](https://github.com/agentscope-ai/QwenPaw/issues/5064)** – Tasks created via conversation appear normal but never execute.
- **[#5095 – Windows Desktop v1.1.11 won't start](https://github.com/agentscope-ai/QwenPaw/issues/5095)** – Likely same root cause as #5086.

**Medium Severity:**
- **[#5098 – Memory search results display empty in UI](https://github.com/agentscope-ai/QwenPaw/issues/5098)** – `auto_memory_search` works functionally but UI table shows empty/wrong data.
- **[#5122 – Context compression stats don't match actual API input size](https://github.com/agentscope-ai/QwenPaw/issues/5122)** – Skills and MCP may be inflating context beyond compressed measurement.
- **[#5127 – Langfuse traces fragmented across agent ReAct loop](https://github.com/agentscope-ai/QwenPaw/issues/5127)** – Each LLM call appears as separate trace. Fix PR [#5128](https://github.com/agentscope-ai/QwenPaw/pull/5128) submitted.

**Low Severity / UI:**
- [#5120](https://github.com/agentscope-ai/QwenPaw/issues/5120), [#5126](https://github.com/agentscope-ai/QwenPaw/issues/5126) – Release verification duties (closed).
- [#5091](https://github.com/agentscope-ai/QwenPaw/issues/5091) – Agent JSON file modification causes crash on format error.
- [#5053](https://github.com/agentscope-ai/QwenPaw/issues/5053) – 10-second lag switching between 4+ conversation tabs on Tauri desktop.

## 6. Feature Requests & Roadmap Signals

**High Signal (likely in next version):**
- **[#4727 – Migrate backend to AgentScope 2.0](https://github.com/agentscope-ai/QwenPaw/issues/4727)** – Labeled "Breaking Change", planned for next major release. This is the largest pending architectural shift.
- **[#5063 – Integrate Headroom context compression (60-95% token savings)](https://github.com/agentscope-ai/QwenPaw/issues/5063)** – Strong user demand for reducing LLM costs.
- **[#5116 – Configurable chat interaction modes (interrupt, steering, queueing)](https://github.com/agentscope-ai/QwenPaw/issues/5116)** – Addresses core UX friction on third-party channels.
- **[#5103 – Conversation queue, token stats, accurate timestamps](https://github.com/agentscope-ai/QwenPaw/issues/5103)** – Competing with OpenClaw's UX features.

**Medium Signal:**
- **[#5131 – Coding mode code autocomplete](https://github.com/agentscope-ai/QwenPaw/issues/5131)** – Developer workflow enhancement.
- **[#5110 – Quote/reference text from responses for follow-up context](https://github.com/agentscope-ai/QwenPaw/issues/5110)** – Perplexity-style feature request.
- **[#5107 – Collapse and persist tool guard approval block after decision](https://github.com/agentscope-ai/QwenPaw/issues/5107)** – UI polish for security reviews.
- **[#4887 – Custom endpoint support for DingTalk private deployment](https://github.com/agentscope-ai/QwenPaw/issues/4887)** – Enterprise channel requirement.

**Prediction for v1.12:** The AgentScope 2.0 migration (#4727) combined with Runtime 2.0 (#5078) suggests a major version architectural overhaul is imminent. Context compression (#5063) and conversation queueing (#5103) are high-impact user-facing features likely to ship soon.

## 7. User Feedback Summary

**Pain Points (Frustration):**
- **Desktop app is broken** – Multiple users report that installing the latest version causes system-wide crashes (SSL error → infinite processes → black screen). This is the most severe negative feedback.
- **Local model users feel abandoned** – Qwen 3.6-27B via vLLM worked in v1.1.5 but silently broke in v1.1.9+. One user had to downgrade.
- **Configuration persistence failures** – Long-term memory vector model settings and workspace configurations reset on restart. Users must reconfigure every time.
- **New UI regressions** – Attachment downloads broken in v1.1.11 (#5102), memory search results display empty (#5098), thinking mode cannot be disabled (#5132).

**Positive Signals:**
- **High feature demand** – Users are actively requesting advanced features (context compression, queueing, token stats), indicating deep engagement with the platform.
- **Community localization** – First-time contributor submitted complete pt-BR translation (#5136), showing growing international community.
- **Plugin ecosystem** – DataPaw plugin with 12 BI skills (#4622) under review, plus skill market improvements (#5123), suggests the plugin system is gaining traction.

**Use Cases:**
- Agent-based scheduled task automation
- Local model hosting (vLLM, Ollama) for privacy
- Multi-session conversational workflows
- Enterprise DingTalk integration
- Long-running autonomous task execution

## 8. Backlog Watch

**Critical Issues Needing Maintainer Attention:**
- **[#5106 – Tauri Desktop SSL + infinite process crash](https://github.com/agentscope-ai/QwenPaw/issues/5106)** – 7 comments, 0 responses from maintainers. Users report system instability. **No fix PR.**
- **[#5086 – OpenSSL 3.5 regression](https://github.com/agentscope-ai/QwenPaw/issues/5086)** – Root cause identified for desktop launch failure. **No fix PR.**
- **[#5064 – Agent-created scheduled tasks not triggering](https://github.com/agentscope-ai/QwenPaw/issues/5064)** – 8 comments, functionality completely broken.

**Stale Issues Needing Triage:**
- **[#3817 – Long-term memory vector model config resets on restart](https://github.com/agentscope-ai/QwenPaw/issues/3817)** – Created April 24, 5 comments. User provided root cause analysis but no maintainer acknowledgment.
- **[#1533 – install.sh hangs on curl command](https://github.com/agentscope-ai/QwenPaw/issues/1533)** – Created March 15, 2 comments. Simple fix suggested by user but never addressed.

**Long-Open PRs Under Review:**
- **[#4622 – DataPaw data-analysis plugin](https://github.com/agentscope-ai/QwenPaw/pull/4622)** – 12 BI skills, opened May 22, still under review. High-value plugin for enterprise users.
- **[#4669 – Tauri auto updater](https://github.com/agentscope-ai/QwenPaw/pull/4669)** – Opened May 25, critical for desktop distribution but still open.
- **[#5028 – Keychain master key isolation](https://github.com/agentscope-ai/QwenPaw/pull/5028)** – Security fix, open since June 8, under review.

**Recommendation:** The desktop crash issues (#5106, #5086) should be the highest priority – they represent a **complete loss of usability** for Windows users and are generating the most negative community sentiment. The scheduled tasks bug (#5064) and local model regression (#4989) follow closely as core functionality regressions.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the **ZeroClaw Project Digest** for **2026-06-12**, based on the provided GitHub data.

---

## ZeroClaw Project Digest – 2026-06-12

### 1. Today's Overview
Project activity is **extremely high**, signaling a peak post-release stabilization and feature push following the **v0.8.0** launch. The project is currently processing a massive backlog of **50 open issues** and **49 open pull requests** updated in the last 24 hours, indicating a very healthy but strained maintainer capacity. While there was only **1 PR merge** today (a CI fix), the volume of discussion suggests the community is actively testing the new multi-agent architecture and encountering edge cases. The primary focus remains on **security**, **tool execution**, and **provider compatibility** fixes.

### 2. Releases
**v0.8.0** was released (spanning the data window).
- **Key Changes:** This is a major architectural shift. A single daemon now manages **multiple named agents**, each with its own workspace, memory, model provider, security policy, channels, and personality.
- **Breaking Changes:** The release includes a **rewritten configuration schema**.
- **Migration Notes:** A migration path is advertised as automatic; however, the high volume of config-related bugs (e.g., #5808, #7470) suggests users may still need to manually review their `tool_filter_groups` and `risk_profile` settings.
- **CI Fix:** A quick follow-up PR (#7520) was merged to fix ARM glibc release builds that failed during the v0.8.0 release run.

### 3. Project Progress
Only **1 PR** was merged/closed today:
- **[#7520] fix(ci): install cross g++ for ARM glibc release builds** – A critical CI fix unblocking the release pipeline for ARM targets (aarch64, armv7). *Author: singlerider*

While no major features were merged, the sheer number of open PRs suggests pending merges are likely imminent. PRs like #7522 (rejecting binary files in `file_read`) and #6578 (localization) appear ready for review.

### 4. Community Hot Topics
The community is deeply engaged in security and reliability discussions.
- **[#5849] Dream Mode — Periodic Memory Consolidation** (17 comments): This is the most discussed feature request. Users want idle-time background processing for memory optimization. This indicates a strong desire for long-term autonomy and "agentic" self-improvement. [Link](zeroclaw-labs/zeroclaw Issue #5849)
- **[#6699] tool_filter_groups is a no-op for real MCP tools** (7 comments): A high-priority bug where the documented tool filtering system doesn't actually work for MCP servers. This is a critical blocker for users relying on security-by-filtering. [Link](zeroclaw-labs/zeroclaw Issue #6699)
- **[#7470] Delegate agentic mode rejects empty risk_profile** (7 comments): A brand-new, severe bug (S1) blocking multi-agent workflows. It prevents delegation when a target agent has an empty tool list, likely breaking common "reviewer/research" patterns. [Link](zeroclaw-labs/zeroclaw Issue #7470)

### 5. Bugs & Stability
Stability is the dominant theme, with several **S1 (workflow blocked)** and **S2 (degraded behavior)** bugs active.

**Severity S1 (Workflow Blocked):**
- **[#7470] Delegate agentic mode rejects empty risk_profile** – Blocks multi-agent collaboration. No fix PR present yet. [Link](zeroclaw-labs/zeroclaw Issue #7470)
- **[#6699] tool_filter_groups is a no-op for MCP tools** – Security settings ignored for MCP tools. A fix is likely required before enterprise adoption. [Link](zeroclaw-labs/zeroclaw Issue #6699)
- **[#5542] Consecutive OOM in WSL2** – Daemon is being killed by the OS kernel. This is a critical resource leak issue for users on limited-memory systems. [Link](zeroclaw-labs/zeroclaw Issue #5542)
- **[#5808] Default 32k context budget exceeded on iteration 1** – The system prompt alone blows the token budget, forcing perpetual trimming. This impacts the quality of every conversation. [Link](zeroclaw-labs/zeroclaw Issue #5808)
- **[#6361] Context compression drops tool calls for OpenAI-compatible providers** – Breaks tool loops for providers like MiniMax. A fix PR (#6362) exists but is in `needs-author-action`. [Link](zeroclaw-labs/zeroclaw Issue #6361)

**Severity S2 (Degraded Behavior):**
- **[#6302] Gemini 400 on history ordering** – A strict validation error with Gemini. A fix PR (#6303) exists. [Link](zeroclaw-labs/zeroclaw Issue #6302)
- **[#6350] WhatsApp allowed-numbers bypassed for LID contacts** – Silent message drops for specific contact types. [Link](zeroclaw-labs/zeroclaw Issue #6350)
- **[#6173] model_switch tool does not persist** – The switch is ephemeral, breaking the core promise of the feature. [Link](zeroclaw-labs/zeroclaw Issue #6173)

### 6. Feature Requests & Roadmap Signals
Users are pushing for deeper **multi-instance management** and **intelligent agent behavior**.
- **Dream Mode (#5849):** This is the most popular request. It suggests users want agents that "think" in the background. Predict it will be scheduled for **v0.9.0** as a major runtime enhancement.
- **Fleet Management:** Several related issues signal a push for multi-machine orchestration:
    - **[#6391] Real heartbeat tracking** for daemon nodes. [Link](zeroclaw-labs/zeroclaw Issue #6391)
    - **[#6390] `zeroclaw node add <url>` CLI** for remote registration. [Link](zeroclaw-labs/zeroclaw Issue #6390)
- **Dashboard UI Upgrades:**
    - **[#6365] "Update ZeroClaw" button** in the dashboard. [Link](zeroclaw-labs/zeroclaw Issue #6365)
    - **[#6312] Per-alias webhook path routing** for multi-channel instances. [Link](zeroclaw-labs/zeroclaw Issue #6312)
- **Config Management:** The community is asking for better tooling around the new V3 config, specifically **typed delete-with-cascade for aliased entries** (#7175).

### 7. User Feedback Summary
- **Pain Points (High):** Security configuration is confusing and buggy. Users are frustrated that `tool_filter_groups` (#6699) and `allowed_tools` (#6914) don't work as documented, effectively breaking their security posture.
- **Pain Points (Medium):** The new multi-agent delegation model (#7470) is difficult to set up for simple workflows. Cron job scheduling is unreliable with parallel execution (#6037) and broken WhatsApp delivery (#6224).
- **Satisfaction Signals:** The heavy engagement on "Dream Mode" (#5849) and fleet management features suggests users are **satisfied with the core v0.8.0 architecture** and are now eager to extend its capabilities. There is clear interest in making agents more autonomous and connected.
- **Docker Issue:** One user (#6760) contributed a working Docker YAML, indicating that the default Docker experience may still be non-trivial for users.

### 8. Backlog Watch
Several important issues and PRs are languishing in `needs-author-action` or `stale-candidate`, risking becoming blocker bugs for future releases.

- **[#5903] MCP stdio child processes accumulate on daemon** (1 comment, last updated 2026-06-11): This is an S1 bug causing process leaks (one orphan per heartbeat tick). It has been open since April and needs urgent attention. [Link](zeroclaw-labs/zeroclaw Issue #5903)
- **[#5892] Three production blockers for providers** (1 comment, stale-candidate): A large L-sized PR fixing `tool_choice`, orphaned `tool_use`, and vision capability. Blocked on author action. [Link](zeroclaw-labs/zeroclaw PR #5892)
- **[#6085] Fix default session_ttl_hours to 168h** (XS, stale-candidate): A simple fix to prevent unbounded session accumulation. If merged, it would solve a silent resource leak. [Link](zeroclaw-labs/zeroclaw PR #6085)
- **[#6143] Universal skill registry support** (XL, stale-candidate): A massive feature PR to support external skill registries like `agentskills.io`. This is a high-value feature that is rotting. [Link](zeroclaw-labs/zeroclaw PR #6143)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*