# OpenClaw Ecosystem Digest 2026-07-21

> Issues: 352 | PRs: 500 | Projects covered: 12 | Generated: 2026-07-21 01:27 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

Here is the project digest for **OpenClaw** for **2026-07-21**.

---

## OpenClaw Project Digest — 2026-07-21

### 1. Today's Overview
OpenClaw is experiencing high activity, with 500 PRs and 352 Issues updated in the last 24 hours. However, the health of the repository is concerning: only 112 (22%) of those PRs were merged or closed, and 128 (36%) of updated Issues were resolved. The backlog of open, high-severity bugs (P1/P2) remains substantial, with 14 top-tier Issues tagged with the critical "platinum hermit" rating. The community is heavily focused on message loss, session state corruption, and agent reliability, indicating a period of significant stabilization work rather than feature velocity.

### 2. Releases
**None.** No new releases were published in the last 24 hours.

### 3. Project Progress
**Merged/Closed PRs Today:** 112. Notable merges in the rolling window include:
- **UX Polish:** Control UI now dismisses the new-session model picker on outside click ([PR #111988](https://github.com/openclaw/openclaw/pull/111988)) and fixes responsive browser test flakiness ([PR #111997](https://github.com/openclaw/openclaw/pull/111997)).
- **Internationalization:** The `chore(i18n): refresh native locales` PR ([PR #111671](https://github.com/openclaw/openclaw/pull/111671)) auto-synchronizes native app locales.
- **Logging Fix:** A fix ensures JSON console output remains structured when `logging.consoleStyle: "json"` is set ([PR #111908](https://github.com/openclaw/openclaw/pull/111908)).

### 4. Community Hot Topics
The most active discussions reveal deep frustration with runtime reliability.

- **[Issue #99241](https://github.com/openclaw/openclaw/issues/99241) — Tool outputs rendered as unreadable images** (23 comments, 🐚 Platinum Hermit): A critical P1 bug where long-running terminal output collapses into image placeholders, making the text invisible to the agent. This directly breaks the core feedback loop for tool-heavy use cases.
- **[Issue #88312](https://github.com/openclaw/openclaw/issues/88312) — Codex "turn-completion stall" regression** (22 comments, 🐚 Platinum Hermit): A reopened regression (related to #84076) where Codex-backed agents stall on completion. Users report it breaks the fundamental contract of "agent finishes its turn."
- **[Issue #7707](https://github.com/openclaw/openclaw/issues/7707) — Memory Trust Tagging by Source** (19 comments, 🦞 Diamond Lobster): A strong demand for security guardrails. Users want to tag memory entries by origin (web scrape vs. user command) to prevent prompt injection and memory poisoning.
- **[Issue #87744](https://github.com/openclaw/openclaw/issues/87744) — Codex Telegram turns timing out** (17 comments, 🦞 Diamond Lobster): Another regression on 2026.5.27, rendering Telegram sessions unreliable by failing to deliver final answers.

### 5. Bugs & Stability
Stability remains the top concern. Many P1/P2 issues involve **message loss** and **session state corruption**.

- **Critical (P0/P1, 🐚 Platinum Hermit):**
    - **Tool output image collapse** ([#99241](https://github.com/openclaw/openclaw/issues/99241)): Agent cannot read own tool results. No fix PR attached.
    - **Codex turn-completion stall** ([#88312](https://github.com/openclaw/openclaw/issues/88312)): A key regression in the agent lifecycle.
    - **"Aborted exec" wedges session** ([#102006](https://github.com/openclaw/openclaw/issues/102006), P1): A regression from PR #94412 where canceling an `exec` call hangs all future calls in that session.
    - **Configless gateway rebind failure** ([PR #111841](https://github.com/openclaw/openclaw/pull/111841), 🐚 Platinum Hermit): Fix pending for users stuck on the setup screen when no explicit model is configured.
- **Key Regressions:** Issues #88312 (Codex stall) and #87744 (Telegram timeouts) are identified as regressions introduced in the 2026.5.27 release.
- **Security:** PR #111801 ([fix(security): audit symlinked workspace skill roots](https://github.com/openclaw/openclaw/pull/111801)) addresses a vulnerability where the security audit could skip trusted workspace skills if they were symlinks.

### 6. Feature Requests & Roadmap Signals
Two general trends are visible in user requests: **Security/Trust** and **Agent Control**.

- **Security Trust:** Requests for "Masked Secrets" ([#10659](https://github.com/openclaw/openclaw/issues/10659)) and "Skill Permission Manifests" ([#12219](https://github.com/openclaw/openclaw/issues/12219)) show the community wants a formal permission model for agents and plugins, indicating a push toward enterprise readiness.
- **Agent Control:** Requests like `maxTurns`/`maxToolCalls` config ([#9912](https://github.com/openclaw/openclaw/issues/9912)) and suppression of sub-agent announcements ([#8299](https://github.com/openclaw/openclaw/issues/8299)) suggest users need tighter operational boundaries to prevent runaway or noisy agents.
- **Platform Upgrades:** Issue #[84527](https://github.com/openclaw/openclaw/issues/84527) requesting support for the new "Antigravity CLI" (`agy`) shows the project must adapt to Google's deprecation of Gemini CLI to avoid a broken provider integration.

### 7. User Feedback Summary
- **Dissatisfaction:** The dominant theme is **reliability regression**. Users are frustrated by regressions in the 2026.5.27 release (issues #88312, #87744, #63216). The phrase "worked before, now fails" appears frequently. The tool output image collapse ([#99241](https://github.com/openclaw/openclaw/issues/99241)) is particularly damaging as it breaks the agent's ability to self-correct.
- **Pain Points:** "Silent failure" is a recurring pain point—agents promising follow-ups without starting them ([#58450](https://github.com/openclaw/openclaw/issues/58450)), messages being silently ignored on Google Chat ([#58514](https://github.com/openclaw/openclaw/issues/58514)), and Slack multi-workspace inbound message loss ([#58523](https://github.com/openclaw/openclaw/issues/58523)).
- **Satisfaction:** User engagement is high, with many issues receiving thoughtful, detailed reproductions and feature proposals, indicating a technically sophisticated and invested user base.

### 8. Backlog Watch
The backlog is heavy with stale but critical issues. The "clawsweeper:needs-maintainer-review" label appears on the vast majority of top issues, signaling a bottleneck.

- **Stale Critical Issues:** Issue [#58450](https://github.com/openclaw/openclaw/issues/58450) (Agent promises fake follow-ups, 🐚 Platinum Hermit) and [#64810](https://github.com/openclaw/openclaw/issues/64810) (Heartbeat swallows Telegram replies, 🐚 Platinum Hermit) have been open since March/April and require a live repro or product decision.
- **Security in Limbo:** Issue [#6615](https://github.com/openclaw/openclaw/issues/6615) (exec-approvals denylist) has high community demand (8 👍) and a linked open PR, but is stalled on maintainer review. Similarly, PR [#81185](https://github.com/openclaw/openclaw/pull/81185) ("Redact exec tool result payloads," 🐚 Platinum Hermit) is ready for maintainer look but has a high-risk compatibility tag.
- **Data Loss Concern:** Issue [#71326](https://github.com/openclaw/openclaw/issues/71326) (Cross-exec stale file reads) is a closed P1, but its existence highlights a historical data corruption risk that must be guarded against.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the provided community digest summaries.

---

## Cross-Project Comparison Report: Personal AI Agent Ecosystem
**Date:** 2026-07-21

### 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is characterized by intense, concurrent development across a suite of projects that share a common architectural heritage (the “Claw” lineage) but are diverging in target user, deployment model, and technical specialization. The landscape is bifurcated between projects undergoing major architectural rewrites or refactoring (IronClaw, OpenClaw) and those at the peak of incremental feature velocity (NanoClaw, NanoBot, CoPaw). A universal theme across the entire ecosystem is a deep, community-driven focus on **reliability**, **security**, and **multi-modal support** as the core baseline, with significant innovation emerging in evaluation tooling, cross-platform session continuity, and standardized protocols for multi-agent collaboration.

### 2. Activity Comparison

| Project | Issues (Updated/Active) | PRs (Updated/Active) | Release Status | Health Score & Sentiment |
|---|---|---|---|---|
| **OpenClaw** | 352 updated, 128 resolved | 500 updated, 112 merged | No new release | **Low.** High activity but 22% merge rate, high backlog of P1/P2 bugs, user sentiment dominated by "reliability regression." |
| **NanoBot** | 6 updated, 3 resolved | 30 updated, 11 merged | No new release | **High.** Strong velocity, quick turnaround on critical bugs (infinite loops, multi-image loss), active contributor pipeline. |
| **Hermes Agent** | 50 updated, 7 resolved | 50 updated, 8 merged | **v0.19.0 "Quicksilver"** released Jul 20 | **Moderate-High.** Major release triggered bug influx, but rapid post-release patching and strong contributor health (450+ contributors for v0.19). |
| **PicoClaw** | 11 updated | 10 updated, 5 merged | No new release | **Moderate.** High bug report volume, but responsive triage of critical regressions. OAuth and provider issues are a key weakness. |
| **NanoClaw** | 6 updated | 20 updated, 6 merged | No new release | **High.** Excellent security response (same-day fix PRs for 4 vulnerabilities), strong community engagement for channel expansion. |
| **NullClaw** | 0 updated | 1 open, 0 merged | No new release | **Low.** Stalled. Single open PR (Alpine bump) has been awaiting review for 36 days. |
| **IronClaw** | 43 updated | 50 updated, 28 merged | **rc.1** candidate (build failed) | **Very High.** Intense “Tier B” rewrite phase, high velocity with controlled risk. Bug bash is surfacing UX friction. |
| **LobsterAI** | 0 updated | 15 updated, 10 merged | No new release | **Moderate-High.** Strong feature delivery (Cowork, Windows build). Blocked on critical dependency upgrades (Electron, React). |
| **CoPaw** | 30 updated, 8 resolved | 42 updated, 10 merged | No new release (v2.0.1b1) | **High.** Mature project with steady progress. Reasoning/tool-call reliability is a top community pain point. |
| **Moltis** | 0 | 0 | N/A | **Dormant.** No activity. |
| **ZeptoClaw** | 0 | 0 | N/A | **Dormant.** No activity. |
| **ZeroClaw** | 39 updated, 9 resolved | 50 updated, 13 merged | No new release (v0.9.0 milestone) | **High.** Major eval harness contributor (IftekharUddin) driving feature velocity. Cross-platform (Windows, Landlock) gaps are key risks. |

### 3. OpenClaw’s Position

OpenClaw serves as the foundational reference implementation, which gives it a unique but challenging position.

- **Advantages vs. Peers:** OpenClaw has the largest community engagement by raw numbers (500 PRs, 352 issues) and the most mature feature surface. Its status as the core reference means that architectural decisions and bug fixes here have downstream implications for the entire ecosystem (e.g., PicoClaw, NanoClaw, IronClaw).
- **Technical Approach Differences:** While projects like **NanoBot** and **CoPaw** are aggressively adding new features (multi-agent, reasoning support), OpenClaw is in a stabilization and bug-fix cycle. The community is demanding reliability over new features, which contrasts with the "build fast" pace of **Hermes Agent** or the security-first approach of **NanoClaw**.
- **Community Size Comparison:** OpenClaw’s raw activity numbers dwarf all others, but its **22% merge rate** is the lowest among active projects, indicating a significant processing bottleneck. In contrast, **IronClaw** (56% merge rate) and **NanoBot** (37% merge rate) are more efficient in converting activity into progress. The volume of "clawsweeper:needs-maintainer-review" labels on critical issues is a unique OpenClaw problem suggesting a need for more core maintainers.
- **Strategic Risk:** The community's deep frustration with reliability regressions (#99241, tool output as images) is eroding trust in the reference implementation. If **IronClaw**, **CoPaw**, or **NanoClaw** can provide a more stable and reliable agent runtime, they could attract core users away from OpenClaw.

### 4. Shared Technical Focus Areas

The following technical requirements are emerging as universal needs across the ecosystem, transcending individual project boundaries.

| Focus Area | Projects Involved | Specific Community Needs |
|---|---|---|
| **Reliability & Error Resilience** | OpenClaw, Hermes Agent, PicoClaw, CoPaw, ZeroClaw | Silent message loss, session state corruption, non-recoverable tool call hang, streamed response loops, and confusing error banners. This is the #1 pain point. |
| **Cross-Platform / Session Continuity** | Hermes Agent, OpenClaw, PicoClaw, ZeroClaw | Users want seamless experience across desktop, CLI, Telegram, Web. Fragmentation of session state and message routing between platforms is a critical failing. |
| **Security & Trust (Permissions, VCage)** | OpenClaw, NanoClaw, ZeroClaw, NanoBot | Formal permission models for agents (e.g., grants/skills/approvals), memory tagging, credential management (env vars, Keyring). **NanoClaw** is the leader with fast vulnerability patching. |
| **Evaluation & Testing Harnesses** | ZeroClaw, IronClaw, CoPaw | Need for standardized evaluation of agent behavior (LLM-as-judge, regression suites, baseline files). **ZeroClaw** is investing heavily here. |
| **Multi-Agent Orchestration (ACP/A2A)** | ZeroClaw, Hermes Agent, CoPaw, OpenClaw | Standardized protocols for agent-to-agent communication and task delegation. Community signals (like A2A and ACP) are strong, but implementation is nascent. |
| **Localization & Language Support** | OpenClaw, PicoClaw, NanoClaw | Strong community-driven demand for Japanese, Traditional Chinese, and other non-English locale support, suggesting growing international adoption. |

### 5. Differentiation Analysis

While the projects share a core set of architectural concepts, their strategic differentiation is clear:

- **Feature Focus:**
    - **OpenClaw:** The foundational "operating system" for agents. Focus on low-level agent lifecycle, memory management, and provider integration.
    - **NanoBot:** Rapid feature iteration and channel expansion. Focus on multi-user chat, subagent management, and deployment templates.
    - **Hermes Agent:** The "Community Edition" with a massive skill ecosystem. Focus on extensibility, skills (e.g., `qodercli` for coding), and cross-platform session bridging.
    - **IronClaw:** The enterprise-grade rewrite. Focus on a highly opinionated, secure, and testable codebase (Reborn stack) with explicit policy for authorization and deployment.
    - **CoPaw:** The mature "AI productivity suite." Focus on reasoning, memory (ReMe Light), agent modes (ReAct, Code), and rich UI (Kanban, apps).
    - **ZeroClaw:** The "developer tooling" project. Focus on evaluation harnesses, protocol support (SOP, A2A), and sandbox security.
    - **NanoClaw:** The "security and channel" specialist. Focus on fast vulnerability response, role-based access control, and expanding channel adapters (LINE, Dial).

- **Target Users:**
    - **OpenClaw & IronClaw:** Developers building custom agent solutions or integrating AI into existing products.
    - **NanoBot, Hermes Agent, CoPaw:** Power users and teams looking for a ready-to-use, feature-rich personal assistant.
    - **ZeroClaw:** Developers evaluating and testing agent models; teams requiring rigorous agent quality assurance.
    - **PicoClaw, NanoClaw:** Users on lightweight or embedded hardware, or those needing specific communication channels and security features.

- **Technical Architecture:**
    - **Reborn vs. Legacy:** **IronClaw** is actively deleting its v1 monolith, differentiating with a clean, modular architecture. Others (like **OpenClaw**) are carrying substantial technical debt.
    - **Rust vs. Python/JS:** **PicoClaw** (Rust/Golang) targets a different runtime profile than the Python/JS-dominated OpenClaw ecosystem.
    - **Dependency & Ecosystem:** **LobsterAI** relies on a heavy Electron/Desktop stack, while projects like **NullClaw** are minimal Docker-focused builds.

### 6. Community Momentum & Maturity

Based on activity velocity, release cadence, and community growth signals, three tiers are apparent:

- **Tier 1 (Peak Velocity & High Momentum):** **IronClaw**, **ZeroClaw**, and **NanoBot**. These projects show the highest ratio of merged PRs to open PRs, are executing on major architectural milestones, and have strong, visible contributor pipelines (IronClaw's Tier B rewrite, ZeroClaw's eval harness, NanoBot's channel expansion).
- **Tier 2 (Sustained Mature Iteration):** **CoPaw**, **Hermes Agent**, **OpenClaw**, and **LobsterAI**. These are large, established codebases with high throughput but are either dealing with legacy complexity (OpenClaw) or are in a post-release bug-fix cycle (Hermes Agent). Their momentum is substantial but their direction is more like a mature ship changing course.
- **Tier 3 (Low Activity / Stalled / Niche):** **NullClaw**, **Moltis**, **ZeptoClaw**. These projects show near-zero development activity with no new releases. They are either stable and complete, or have lost community maintainer engagement. **NullClaw's** single stalled dependency PR is a clear risk signal.

### 7. Trend Signals

Analysis of community feedback and issue content suggests the following key trends for AI agent developers:

1.  **Reliability is the New Feature:** The dominant theme across all projects is not a lack of features but a crisis of reliability. **Silent failures** (message loss, session corruption, tool output collapse) are the #1 user pain point. The value proposition of any new agent OS is now measured by its ability to *not break* rather than what it can do.
2.  **The "Bootstrap" Phase is Ending:** The ecosystem is transitioning from "can it do something?" to "can we trust it in production?" This is driving investment in evaluation harnesses (**ZeroClaw**), formal security policies (**IronClaw**, **NanoClaw**), and observability (**CoPaw's** Langfuse integration).
3.  **Cross-Session, Cross-Platform is a Minimum Requirement:** Users no longer accept a single-platform tool. The demand for **session bridging** (Hermes Agent #4335, #68301) and **persistent memory** (ZeroClaw #8891) signals that agents need to be a persistent, identity-based service, not a one-off conversation.
4.  **Security is a Bottleneck, Not an Add-on:** The rise of dedicated security-focused PRs (NanoClaw’s privilege escalation fixes, ZeroClaw’s Landlock issue, OpenClaw’s trust tagging) shows that security is the primary inhibitor of enterprise adoption. Developers are prioritizing permission manifests and credential management as a core architectural requirement, not a feature flag.
5.  **Agent-to-Agent is the Next Horizon:** The community is actively planning for a world of non-monolithic agents. Feature requests for **ACP** (IronClaw #2277) and **A2A** (ZeroClaw #3566) indicate a clear market pull for standardized inter-agent protocols, mirroring the emergence of MCP for tool standardization.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-21

## 1. Today's Overview
NanoBot shows **high activity** over the past 24 hours with 30 PRs updated and 6 issues touched. The project closed 11 PRs (merged or closed) and resolved 3 issues, while maintaining 19 open PRs and 3 active open issues. Development momentum is strong across multiple fronts: subagent lifecycle refactoring, security hardening, new deployment templates, and bug fixes in chat channels. No new releases were published today, but the volume of merged changes suggests a release may be imminent.

## 2. Releases
**No new releases today.** The last release date is not specified in the data; however, given the high PR merge activity, a release candidate may be forthcoming.

## 3. Project Progress
**11 PRs were merged or closed today**, advancing several key areas:

- **Core Agent Refactoring:** PR #4993 (chengyongru) merged — unified the internal turn lifecycle by integrating subagent results into the normal `TurnContext` state machine, eliminating a duplicate mini-loop. This is a foundational change that enables cleaner multi-agent behavior.

- **Multi-Image Fix:** PR #5008 (bllackhu) merged — fixed OpenAI-compatible providers losing all but the last image when consecutive multimodal user turns were merged. Critical for album/multi-image workflows.

- **Deployment & Infrastructure:** PR #4937 (Ho1yShif) merged — added one-click Render deployment via Blueprint. PR #4768 (gola) merged — added exponential backoff to QQ channel WebSocket reconnect loop, fixing excessive error logging.

- **Channel Bug Fixes:** PR #4982 (santhreal) merged — fixed Feishu channel hang when `limit <= 0` in text chunking. PR #4981 (santhreal) merged — fixed same infinite-loop bug in Telegram markdown splitting.

- **Documentation & Security:** PR #4998 (chengyongru) merged — added Ollama prompt-cache diagnostics guide. PR #5010 (cms19859230182-lang) opened — recommends env-var references over plaintext API keys.

- **Subagent WebUI Delivery:** PR #4992 (chengyongru) and #4954 (yu-xin-c) remain open but represent ongoing work to ensure late subagent results appear as new turns in the WebUI.

## 4. Community Hot Topics
**Most Active Issues:**

- **#4867 [CLOSED] — Prompt prefix caching for Ollama** (15 comments) — The-Markitecht reported that NanoBot adds 60 seconds per turn with Ollama due to cache invalidation. This high-pain performance issue generated the most discussion of any issue, now closed. The PR #4998 (diagnostics guide) and ongoing prompt engineering work directly address this.

- **#5000 [OPEN] — Multi-agent collaboration proposal** (1 comment, milestone issue #5000) — bingqilinweimaotai proposes evolving subagents into true multi-agent system with persistent identities and shared state. This is a visionary feature request at a round-number issue milestone, indicating maintainer interest.

- **#4803 [OPEN] — Plaintext API key storage** (1 comment) — Security concern about API keys in `config.json` even with `repr=False`. PR #5010 directly addresses this by documenting env-var references as the recommended approach.

**Most Active PRs (by discussion):**
- **#4988 [OPEN] — Keep background turns silent on empty model output** — benlenarts fixes a regression where cron/local triggers emit unwanted placeholder text. Critical for automation users.

## 5. Bugs & Stability
**High Severity:**
- **QQ channel WebSocket reconnect flood** (Issue #4767, closed; PR #4768 merged) — Fixed with exponential backoff. Was causing "excessive error logs" every 5 seconds on DNS failure. ✅ Resolved

- **Subagent results not appearing in WebUI** (PR #4954, #4992 — both open) — Late subagent results were being lost in WebUI sessions. PR #4992 builds on the recently merged #4993 refactor. High priority (p1), actively being worked.

- **Session directory fsync failure** (PR #5004 — open) — amplifierplus fixes `EINVAL` errors on shared filesystems that don't support directory sync. Previously caused silent data integrity issues. Medium severity.

**Medium Severity:**
- **Feishu/Telegram infinite loops on chunking** (PRs #4982, #4981 — both merged) — Both channels would hang forever if `limit` or `max_len` was <= 0. ✅ Resolved

- **Multi-image album loss** (PR #5008 — merged) — Consecutive image messages lost all but last image. ✅ Resolved

- **Background turns emitting unwanted placeholder text** (PR #4988 — open) — Cron/local triggers substitute "I completed the tool steps but couldn't produce a final answer" which is inappropriate for silent automation.

## 6. Feature Requests & Roadmap Signals
**Likely in Next Version:**
- **Multi-agent collaboration** (Issue #5000) — The refactored turn lifecycle (#4993) is a prerequisite. With PR #5000 at the milestone issue 5000, this signals a strategic priority for the next major release.

- **Dokploy one-click deploy** (PR #5007 — open from cms19859230182-lang) — Complements the just-merged Render deployment. Non-technical users have been asking (Issue #1503 from March 2026).

- **Guarded tool gateway** (PR #5006 — open) — Adds a security layer for channel plugins to intercept and gate tool calls. Likely to land soon given security focus.

- **Telegram custom Bot API** (PR #4919 — open) — Self-hosted Telegram Bot API support for enterprise users.

**Further Out:**
- **Feishu "listen" mode** (PR #5009 — open) — Group context accumulation without LLM turn, then reply on @mention. Useful for channel monitoring.

- **Heartbeat routing to last channel** (PR #4928 — open) — Fixes unified sessions delivering heartbeats to wrong channels. Important for multi-channel users.

## 7. User Feedback Summary
**Pain Points:**
- **Ollama performance is "totally unusable"** with 32GB VRAM (Issue #4867) — 60-second latency per turn. The community strongly values prompt caching; closed with diagnostic documentation rather than a full fix, which may leave some users unsatisfied.

- **API key security concerns** (Issue #4803) — Plaintext storage is a real risk. PR #5010 mitigates via documentation, but actual encryption is not implemented. Users may want keyring integration.

- **Non-technical users want easier deployment** (Issue #1503 from March) — Dokploy template request has been open for 4.5 months. PR #5007 finally addresses this.

**Positive Signals:**
- The multi-agent proposal (#5000) from a community member suggests advanced users are pushing the project toward production-grade agent orchestration.

- Quick resolution of chunking infinite loops (PRs #4981, #4982) shows maintainers respond rapidly to stability bugs.

## 8. Backlog Watch
**Long-unanswered Issues Requiring Attention:**
- **#1503 [OPEN] — Dokploy template** (created March 4, 2026; 1 comment) — Now addressed by PR #5007, but the issue itself has no maintainer response. Monitor for closure.

- **#4803 [OPEN] — Plaintext API keys** (created July 6, 2026; 1 comment) — PR #5010 exists but is not merged. If maintainers consider this a real security vulnerability, a code fix (not just docs) would be preferable.

**Open PRs with Conflicts:**
- **#4954** (webui subagent visibility), **#4928** (heartbeat routing), **#4963** (webui polish), **#4982/#4981** (already merged) — all have merge conflicts. These represent the highest-risk items as they block valuable features from landing.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the Hermes Agent project digest for July 21, 2026.

---

## Hermes Agent Project Digest
**Date:** 2026-07-21

### 1. Today's Overview
Project activity is **very high**, with a massive influx of 50 updated issues and 50 updated pull requests in the last 24 hours, signaling a highly engaged community and rapid development cycle. The release of **v0.19.0 "The Quicksilver Release"** yesterday (July 20) has likely triggered a wave of post-release bug reports and feature requests, as well as a surge in community contributions. While the number of open items (43 issues, 42 PRs) remains large, the core team and external contributors are actively resolving them, with 7 issues and 8 PRs closed or merged today. The project's health appears strong, though the high volume of new issues, particularly around desktop and session management, suggests the latest release may have introduced some regressions.

### 2. Releases
**v2026.7.20 / Hermes Agent v0.19.0 — The Quicksilver Release**
- **Changes:** This is a major release incorporating approximately 2,245 commits, 1,065 merged PRs, and closing roughly 3,300 issues since v0.18.0. It features contributions from over 450 community members.
- **Breaking Changes:** Not explicitly detailed in the release notes, but the high volume of post-release bugs (see Section 5) suggests potential breaking changes in session management, the desktop app UI, and plugin behavior.
- **Migration Notes:** Users are advised to review changelogs from the last ~2,200 commits. The release notes cryptically state "Hermes is the mess," implying significant internal restructuring that may require configuration updates.

### 3. Project Progress
Today, **8 PRs were merged or closed**, indicating steady forward momentum. Key advancements include:
- **Bug Fixes:** Resolved a critical issue where cron jobs failed to fallback when OAuth credential pools were exhausted ([#46511](https://github.com/NousResearch/hermes-agent/issues/46511)). Fixed a Telegram connectivity crash caused by a version compatibility issue with the `HTTPXRequest` library ([#67817](https://github.com/NousResearch/hermes-agent/issues/67817)).
- **Desktop & UI:** Merged a PR to fix a desktop UI glitch where the "Already up to date" overlay was unresponsive ([#66611](https://github.com/NousResearch/hermes-agent/issues/66611)). A fix for the Kanban board allows cards in triage lanes to be completed or blocked ([#67652](https://github.com/NousResearch/hermes-agent/pull/67652)).
- **Housekeeping:** Automated formatting fixes were applied to the JavaScript codebase ([#68305](https://github.com/NousResearch/hermes-agent/pull/68305)).
- **Community Skills:** A new skill, `qodercli`, was submitted for multi-file coding delegation, demonstrating continued community-driven skill development ([#68314](https://github.com/NousResearch/hermes-agent/pull/68314)).

### 4. Community Hot Topics
The most active discussions reveal a deep desire for **unified, cross-platform user experiences**.
- **Session Context Sharing ([#4335](https://github.com/NousResearch/hermes-agent/issues/4335)):** With 2 upvotes and 7 comments, this long-standing feature request asks for sessions to be shared across platforms (CLI, Telegram, Discord). Users want their conversations to be portable and continuous.
- **Cross-Surface Session Mirroring ([#68301](https://github.com/NousResearch/hermes-agent/issues/68301)):** A new duplicate issue (3 comments) explicitly requests a "native session bridging" feature to mirror a conversation between the desktop app and Telegram, highlighting a strong desire for seamless multi-device workflows.
- **MCP Server Management ([#690](https://github.com/NousResearch/hermes-agent/issues/690)):** This continues to be a hot topic, with users requesting a command-line interface for discovering, selecting, and managing MCP servers interactively instead of via raw YAML.

**Underlying Need:** The community is signaling a strong desire for Hermes to become a **persistent, cross-platform personal AI operating system** rather than a collection of isolated tools.

### 5. Bugs & Stability
Post-release bug reports are concentrated in the Desktop app and session management, indicating potential regressions in v0.19.0.
- **P0 (Critical):** A user reported the Windows installer is completely broken ([#67194](https://github.com/NousResearch/hermes-agent/issues/67194)). *Note: This was closed as a duplicate.*
- **P1 (High):**
    - **brew upgrade breaks all messaging platforms** due to a missing TLS CA certificate bundle in the virtual environment ([#29866](https://github.com/NousResearch/hermes-agent/issues/29866)). This is a critical blocker for macOS users.
    - **Cron jobs fail with 401** on their primary model call due to a provider collapsing to "custom" outside the runtime session ([#66868](https://github.com/NousResearch/hermes-agent/issues/66868)).
- **P2 (Medium):**
    - A **packaging flaw** means all published sdists (v0.13.0–0.19.0) ship a test file that, if run directly, executes `os.kill(-1, SIGTERM)`, killing the user's entire session ([#68311](https://github.com/NousResearch/hermes-agent/issues/68311)). Fix PR [#68310](https://github.com/NousResearch/hermes-agent/pull/68310) addresses this.
    - **Desktop sidebar is empty** for the default profile after updating ([#67600](https://github.com/NousResearch/hermes-agent/issues/67600)).
    - **TUI skill credential prompts** can be routed to the wrong session when multiple sessions are active ([#68261](https://github.com/NousResearch/hermes-agent/issues/68261)).
    - **Message delivery to wrong session:** A message queued in a busy desktop session was delivered to an unrelated idle session ([#61573](https://github.com/NousResearch/hermes-agent/issues/61573)). Fix PR [#68229](https://github.com/NousResearch/hermes-agent/pull/68229) addresses this broader category.
- **P3 (Low):** Multiple P3 bugs include duplicate sidebar entries ([#52811](https://github.com/NousResearch/hermes-agent/issues/52811)), and an unresponsive "Already up to date" dialog (already fixed).

### 6. Feature Requests & Roadmap Signals
The recent feature requests suggest the next minor release (v0.20.0) may focus on:
- **Cross-Platform Session Continuity:** The demand for session context sharing ([#4335](https://github.com/NousResearch/hermes-agent/issues/4335)) and session bridging ([#68301](https://github.com/NousResearch/hermes-agent/issues/68301)) is high and may be prioritized.
- **Advanced Session Management:** The request for `hermes sessions archive` and `hermes sessions compress` ([#41075](https://github.com/NousResearch/hermes-agent/issues/41075)) points to a need for better lifecycle management as local databases grow.
- **Improved Skills and Delegation:**
    - A proposed PR for **named delegation routes** ([#68304](https://github.com/NousResearch/hermes-agent/pull/68304)) would allow admins to create pre-configured paths for specific tasks (e.g., "architect," "debugger").
    - A new **Widget App SDK** for the TUI ([#68306](https://github.com/NousResearch/hermes-agent/pull/68306)) could enable users to create custom mini-applications within the terminal.
    - A large proposal for a **user-bot Telegram connector** (implied by related issues) is in progress.

### 7. User Feedback Summary
- **Pain Points:**
    - **Fragmented Experience:** Users are frustrated that conversations are isolated to a single platform, with no way to continue a chat from their desktop on their phone.
    - **Instability on macOS:** The `brew upgrade` breaking all messaging is a major source of dissatisfaction.
    - **Desktop Bugs:** The sidebar emptiness and duplicate entries ruin the core navigation experience on desktop.
    - **Confusing Updates:** A user reported that responding "No" to "Restore local changes now?" after an update caused the entire application to break ([#68244](https://github.com/NousResearch/hermes-agent/issues/68244)), indicating the update flow is brittle.
- **Use Cases & Satisfaction:**
    - Users are actively contributing skills (e.g., `qodercli`) and tool integrations (e.g., Matrix, Google Workspace), indicating high satisfaction with the extensibility model.
    - The large number of community contributors (450+) is a strong signal of project health and developer satisfaction.

### 8. Backlog Watch
The following long-standing, important items require maintainer attention:
- [**#2788**](https://github.com/NousResearch/hermes-agent/issues/2788) (Opened Mar 24): Cron jobs fail silently with no logging. This is a P2 bug from over four months ago that erodes trust in a core feature.
- [**#3944**](https://github.com/NousResearch/hermes-agent/issues/3944) (Opened Mar 30): Slack integration fails to install via the standard curl command. This is a critical onboarding issue for Slack users.
- [**#690**](https://github.com/NousResearch/hermes-agent/issues/690) (Opened Mar 8): The request for an MCP server management CLI has been open for over four months without a resolution.
- [**#52811**](https://github.com/NousResearch/hermes-agent/issues/52811) (Opened Jun 26): A user-facing desktop bug causing duplicate sidebar entries has gone without an official solution for nearly a month.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Based on the GitHub activity data from PicoClaw (github.com/sipeed/picoclaw) for 2026-07-21, here is the project digest.

---

### PicoClaw Project Digest — 2026-07-21

**1. Today's Overview**
PicoClaw is experiencing a high-volume day of activity with 11 Issues updated and 10 Pull Requests (PRs) updated in the last 24 hours, indicating a very active development cycle. The project is currently processing a significant number of bug reports (particularly around provider integrations and OAuth) alongside feature contributions, including major localization and TTS provider additions. While no new releases were cut today, the pace of merged PRs and the depth of ongoing conversations suggest the team is pushing towards a stable v0.3.2 or a subsequent minor release. Overall, project health is robust, with rapid triage and resolution of critical regressions, but the volume of open issues (7) signals a need for sustained maintainer focus.

**2. Releases**
None.

**3. Project Progress**
This period shows strong feature and fix velocity with 5 merged/closed PRs:
- **Core Fixes:** **[PR #3277](https://github.com/sipeed/picoclaw/pull/3277)** (Merged) provides a critical fix for the tool system, addressing deferred-tool visibility, a sliding TTL, and an SSE tool-call index bug. This resolves a problem where tool discovery promotions were lost on process restart or TTL expiry.
- **Infrastructure & Maintenance:** **[PR #3192](https://github.com/sipeed/picoclaw/pull/3192)** and **[PR #3191](https://github.com/sipeed/picoclaw/pull/3191)** (both merged) performed infrastructure cleanup, bumping goreleaser base Docker images from Alpine 3.21 to 3.23 and removing a duplicate entry in `.gitignore`.
- **Documentation:** **[PR #276](https://github.com/sipeed/picoclaw/pull/276)** (Merged) improved the readability and consistency of the main `README.md`.
- **Dependency Management:** **[PR #277](https://github.com/sipeed/picoclaw/pull/277)** (Merged) updated the `make deps` logic to prevent the project from frequently updating dependency package versions, improving build stability.

**4. Community Hot Topics**
- **Google OAuth Policy Compliance (#3278):** The open issue [Issue #3278](https://github.com/sipeed/picoclaw/issues/3278) is a high-impact blocker, reporting that the Antigravity provider's OAuth login is now blocked by Google for non-compliance with OAuth 2.0 policy. This affects all users relying on this provider and will require a significant update to the OAuth implementation or app verification process.
- **Provider Regression (Antigravity) (#3274):** Issue [Issue #3274](https://github.com/sipeed/picoclaw/issues/3274) reports a regression on the main branch where the Antigravity provider fails with `INVALID_ARGUMENT`, citing a change in tool schema requirements. This signals a need for immediate backward-compatibility checks.
- **Japanese Localization (#3272 / #3273):** A feature request for Japanese localization [Issue #3272](https://github.com/sipeed/picoclaw/issues/3272) was met with an immediate, comprehensive PR [PR #3273](https://github.com/sipeed/picoclaw/pull/3273) that adds a full 968-line translation. This demonstrates strong community engagement and a developer’s proactive response to a specific user need.

**5. Bugs & Stability**
- **Critical:**
    - **Google OAuth Blocked (Antigravity) (#3278):** Login is completely non-functional. No fix PR exists yet. (Severity: Critical)
    - **Regression in Antigravity Provider (#3274):** Breaks functionality for all users on the main branch. No fix PR exists yet. (Severity: High)
- **High:**
    - **MCP Server Connection Hang (#3269):** If an MCP server connection fails, the agent loop hangs, making the chat interface unresponsive. This is a blocking issue for users integrating MCP tools. No fix PR exists yet.
    - **Config Rewrite Destroys Fields (#3275):** The Launcher WebUI overwrites `model_list` entries, losing fields like `api_keys`. This was closed today, implying a fix has been implemented.
    - **Matrix Sync No Reconnection (#3203):** The Matrix sync loop dies silently after network disruption. This is a stale issue but remains open with a high reaction count (1 thumbs up).
- **Medium:**
    - **Android Version Failure (#3182):** Core launch failure on Android. Still open with 4 comments.
    - **Gemini `thought_signature` Error (#3230):** Closed, likely resolved.

**6. Feature Requests & Roadmap Signals**
- **Next Version Likely:**
    - **Japanese Localization (WebUI):** [PR #3273](https://github.com/sipeed/picoclaw/pull/3273) is open and ready for review, making it a strong candidate for the next release.
    - **DashScope TTS & WeChat Audio:** [PR #3270](https://github.com/sipeed/picoclaw/pull/3270) adds a major new TTS provider and audio file sending for WeChat, signaling a push toward richer multimodal and messaging features.
    - **Updated Model Names:** [PR #3271](https://github.com/sipeed/picoclaw/pull/3271) refreshes model names across 9 providers to 2026-07 latest, which is essential for compatibility.
    - **Launcher Lifecycle Improvements:** [Issue #3276](https://github.com/sipeed/picoclaw/issues/3276) requests support for externally-managed gateways and more robust config handling, critical for server deployments.
- **Future Candidate:**
    - **Anthropic Cache Breakpoints:** [Issue #3229](https://github.com/sipeed/picoclaw/issues/3229) proposes a sophisticated rolling cache optimization for Anthropic providers, indicating advanced feature planning from the community.

**7. User Feedback Summary**
- **Positive Signals:** The quick community response to the Japanese localization request shows high satisfaction with contributor responsiveness. The concurrent work on MCP fixes ([PR #3277]) and model updates [PR #3271] suggests users trust the project to fix core stability issues.
- **Pain Points:**
    - **Provider Reliability:** The two major Antigravity bugs (#3274, #3278) are creating significant friction for users relying on Google-based AI models.
    - **Agent Loop Hang (#3269):** This is a critical stability issue directly impacting the user experience, making the agent effectively unusable when MCP servers are unreliable.
    - **Configuration Management (#3275):** The WebUI rewriting configs is a workflow-breaking bug for users managing complex setups.
    - **Server Deployment Friction (#3276):** Users running headless server deployments are experiencing friction with the launcher's lifecycle management.

**8. Backlog Watch**
- **[Issue #3203](https://github.com/sipeed/picoclaw/issues/3203):** "Matrix sync loop has no reconnection logic — silent death after network/server disruption." This is 19 days old, marked as stale, and has a user upvote. While not critical, it represents a silent failure mode for Matrix users that could lead to data loss or missed messages. It needs maintainer triage to determine priority.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date: 2026-07-21**

---

## 1. Today's Overview

NanoClaw shows **elevated development activity** with 20 pull requests and 6 issues updated in the last 24 hours, indicating a strong push from both core team and community contributors. The project processed **6 merged/closed PRs** today, including critical bug fixes for WhatsApp Cloud channel migration and container runtime improvements. A notable **security-focused patch series** from contributor `k-fls` addresses four related privilege-escalation vulnerabilities in the roles and approvals system, demonstrating proactive security hardening. The project also advanced two significant channel integrations (LINE Official Accounts and Dial SMS/voice), signaling ongoing expansion of the multi-channel architecture. Overall project health appears robust, though the volume of open PRs (14) suggests maintainer bandwidth may be under pressure.

---

## 2. Releases

**No new releases today.** The latest tagged release remains the previous version; no version bumps, changelogs, or migration notes were published in the last 24 hours.

---

## 3. Project Progress

**Merged/Closed PRs (6 total):**

- **[#3110]** `feat(container): bake caldav-mcp into the agent image` — Pins `caldav-mcp` version 0.8.0 into the base Docker image, enabling calendar integration via the `/add-caldav-tool` skill without requiring users to install it separately.
- **[#3108]** `fix(chat-sdk-bridge): rehydrate inbound attachments when adapters carry no fetchData` — Fixes a core bridge bug where attachments arriving without `fetchData()` (e.g., local file stores) were silently dropped; now correctly rehydrates bytes on the agent side.
- **[#3107]** `fix(add-whatsapp-cloud): copy the adoption module and document the row re-key` — Companion fix to #3106; provides migration documentation and adoption scripts for existing installations.
- **[#3087]** `fix(whatsapp): engage mention-mode wirings on typed @-mentions in groups` — Fixes WhatsApp group chat mention handling, ensuring the agent correctly responds to typed `@` mentions.
- **[#2642]** `fix(add-telegram): pin chat-adapter to 4.26.0 to match installed chat` — Resolves peer dependency conflict by pinning Telegram adapter version to match the root `chat` dependency.
- **[#1110]** `fix: update container-runtime tests to match implementation` — Test maintenance PR updating assertions to match current container runtime behavior.

**Key Takeaway:** Today's merges cluster around **attachment handling reliability** and **container/WhatsApp operational fixes**, with no major feature PRs promoted to mainline.

---

## 4. Community Hot Topics

### Most Active Issues

- **[#3096]** `feat: Add /add-line skill for LINE Official Account channel support` (1 comment) — #2918
  - **Need:** Community member is proposing a native LINE channel adapter, citing coverage gaps for Japan, Taiwan, and Thailand markets. The issue links to an existing PR (#2918) that is still open. Represents one of the most requested channels lacking official support.
  
- **[#3105]** `[bug] whatsapp-cloud: upgrading an existing install strands its messaging_groups rows` (0 comments)
  - **Need:** Reports a data migration failure where existing WhatsApp installations silently mute after schema changes from the instance re-key fix (#2913). This is a **production-impacting bug** for users upgrading rather than clean-installing.

### Most Active Pull Requests

- **[#2918]** `feat(channels): add LINE Official Account channel` (last updated today, open since July 3)
  - **Vibe:** Long-running feature PR that has attracted community attention, paired with the Traditional Chinese translation PR (#2950). Signal: strong community desire for East Asian market support.
  
- **[#3106/#3107]** WhatsApp Cloud fix pair (core-team label, merged today)
  - **Vibe:** Core team is prioritizing WhatsApp stability; these represent an urgent response to a regression introduced by a previous fix, suggesting the project's testing coverage for upgrade paths may be thin.

**Pattern:** Community energy is concentrated around **channel expansion** (LINE, Dial) and **bug fixes for production reliability** (WhatsApp Cloud, attachments).

---

## 5. Bugs & Stability

### Critical Severity
| Issue | Description | Fix Status |
|-------|-------------|------------|
| [#3100] Revoking sole remaining owner not prevented | No root-of-trust guard; `ncl roles revoke` can orphan the system permanently | **PR #3104 open** (refuses last-owner revoke) |
| [#3097] Role grant silently confers GLOBAL admin when `--group` omitted | Accidental privilege escalation via default scope behavior | **PR #3101 open** (requires explicit `--scope`) |
| [#3105] WhatsApp Cloud upgrade strands messaging_groups rows | Existing installations silently lose WhatsApp connectivity after migration | **PR #3106/#3107 merged** (fix deployed) |

### High Severity
| Issue | Description | Fix Status |
|-------|-------------|------------|
| [#3099] Approval routing ignores privilege, can self-approve role changes | Lower-privileged user can approve admin revocation against themselves | **PR #3103 open** (privilege-proportional routing) |
| [#3098] Approval cards echo raw command line, not effect description | Admin cannot meaningfully evaluate approval requests | **PR #3102 open** (structured approval cards) |

### Medium Severity
| Issue | Description | Fix Status |
|-------|-------------|------------|
| [#3044/#3108/#3109] Inbound attachment bytes lost from Telegram voice/audio, iMessage | Silent data loss for non-text messages on multiple channels | **PR #3108 merged**, #3109 open |

**Assessment:** Four security-related issues from `k-fls` were filed and patched in the same day — demonstrating responsive vulnerability management. The WhatsApp Cloud migration bug (#3105) is the most operationally urgent for existing deployments.

---

## 6. Feature Requests & Roadmap Signals

### High-Confidence Incoming Features (active PRs or committed issues)

1. **LINE Official Account Channel** (`/add-line` skill) — PR #2918, Issue #3096
   - **Status:** Open since July 3, actively reviewed. Likely candidate for next minor release given the paired documentation PR (#2950, Traditional Chinese README).
   - **Prediction:** 80% probability of merging within 2 weeks.

2. **Dial Channel Adapter** (SMS + AI voice calls) — PR #3041, PR #3050
   - **Status:** New channel skill from `OmriBenShoham`. Includes channel picker integration. Less community traction than LINE.
   - **Prediction:** Moderate probability; depends on maintainer bandwidth for review.

3. **On-device Voice Transcription** (`/add-voice-transcription-chat-sdk`) — PR #2459
   - **Status:** Long-running open PR (since May 13) for whisper.cpp-based local transcription. Attracts community interest but stalled.
   - **Prediction:** Low probability unless core team actively picks it up.

### Moderate-Confidence Signals

4. **CalDAV MCP Server** — PR #3110 (merged today) enables calendar tools via `/add-caldav-tool`
   - **Signal:** Container integration is now baked in; expect skill documentation and user-facing tutorials to follow.

5. **Traditional Chinese Localization** — PR #2950 (open since July 4)
   - **Signal:** Paired with LINE channel work; indicates preparation for East Asian market expansion.

### Feature Request Backlog Indicators
- No new feature requests filed today; all new issues are bugs or the LINE proposal. This suggests the community is currently more focused on **stability and security** than new capabilities.

---

## 7. User Feedback Summary

### Pain Points Expressed

- **Upgrade regression anxiety:** Issue #3105 highlights that upgrading can silently break WhatsApp functionality without error messages. Users must be aware of migration scripts.
- **Invisible privilege escalation:** Issues #3097–#3100 reveal that admin users can accidentally orphan the system or grant unintended global permissions due to missing guards. Community contributor `k-fls` explicitly calls these "accidental privilege escalation" vectors.
- **Attachment handling unreliability:** Telegram voice notes and iMessage attachments may arrive without content. This is a UX gap for non-text communication.
- **Approval card opacity:** Administrators cannot meaningfully approve role changes because cards show raw CLI commands instead of human-readable effects (#3098).

### Positive Signals

- **Fast security response:** The same contributor who reported four security issues (#3097–#3100) also provided fix PRs (#3101–#3104) on the same day — indicating a healthy security researcher community.
- **East Asian community engagement:** The Traditional Chinese README PR (#2950) and LINE channel work suggest growing international adoption.
- **Core-team responsiveness:** WhatsApp Cloud fix (#3105) was identified and resolved within 24 hours (PRs #3106/#3107 merged today).

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Topic | Concern |
|-------|-----|-------|---------|
| [#3096] /add-line skill proposal | 1 day | LINE channel | Already has an open PR (#2918, 18 days old); issue acceptance would signal maintainers are reviewing |
| [#2459] Voice transcription PR | 69 days | whisper.cpp integration | Stale; community investment may wane without review signals |

### Stale PRs with No Recent Activity

| PR | Age | Last Update | Concern |
|----|-----|-------------|---------|
| [#2459] `feat(skill): add /add-voice-transcription-chat-sdk` | Jul 2026 | Jul 20 (unrelated activity) | 69 days open; contributor may be awaiting maintainer decision |
| [#2918] `feat(channels): add LINE Official Account channel` | 18 days | Jul 20 (comments) | Actively maintained but no merge signal; could benefit from explicit maintainer feedback |
| [#2950] Traditional Chinese README | 17 days | Jul 20 | Low-risk docs PR; quick win for community goodwill |

### Risk Flag: Security Fix Pipeline
- PRs #3101–#3104 (role/approval security fixes) were filed on July 20 but **not yet merged**. Given the severity of the vulnerabilities (self-approval, no root-of-trust), delayed merging is a security risk for production deployments.

---

## Summary Assessment

| Metric | Status |
|--------|--------|
| Activity level | 🔴 Very High (26 updated items) |
| Bug fix velocity | 🟢 Excellent (security issues: same-day fix PRs) |
| Feature velocity | 🟡 Moderate (LINE, Dial in review; no new merges) |
| Security posture | 🟡 Good (proactive patching; unmerged fixes are risk) |
| Community health | 🟢 Strong (core-team + external contributors active) |
| Backlog risk | 🟡 Moderate (few stale items; maintainer bandwidth is bottleneck) |

NanoClaw is in a **productive but reactive** phase: core team is prioritizing stability patches (WhatsApp, attachments, security) over new feature promotion. The project would benefit from merging the outstanding security fix PRs (#3101–#3104) and providing clearer roadmapping for the LINE and voice transcription features that have strong community investment.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-21

## 1. Today's Overview
The NullClaw project is currently in a **low-activity maintenance phase** with no new issues, no new releases, and no merged pull requests in the last 24 hours. A single open pull request (#956) targeting an Alpine base image upgrade from 3.23 to 3.24 continues to await review or merge after more than a month since creation. With zero active or closed issues and zero new releases, development velocity appears stalled, though ongoing dependency maintenance signals the project is at least being kept alive. Project health is neutral but warrants close monitoring to ensure the single open PR does not become stale.

## 2. Releases
**No new releases** have been published. The latest available release remains undefined, with no changelog or version tag updates detected.

## 3. Project Progress
- **Merged/Closed PRs today:** 0
- **Features advanced or fixed:** None. No code changes were merged in the reporting period.

**Active PR awaiting attention:**
- [#956 [OPEN] ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group](https://github.com/nullclaw/nullclaw/pull/956) — A Dependabot-generated PR that would update the base Docker image from Alpine 3.23 to 3.24. This is a routine dependency bump with no breaking changes indicated. Created on 2026-06-15, last updated 2026-07-20. No comments or reviews to date.

## 4. Community Hot Topics
There are **no highly active Issues** and only **one open PR**. The sole topic of community interest is:

- [#956 — Dependency bump: Alpine 3.23 → 3.24](https://github.com/nullclaw/nullclaw/pull/956) — Although it has zero comments and zero reactions, this PR represents the only open discussion point. The underlying need is straightforward: keeping the Docker build environment up-to-date with the latest Alpine LTS patch to avoid security vulnerabilities and compatibility issues. The lack of any community engagement may indicate either a small user base or that users are waiting for maintainer action.

## 5. Bugs & Stability
**No bugs, crashes, or regressions** were reported in the last 24 hours. The issue tracker is empty, suggesting either a mature and stable codebase or underreporting of problems. No fix PRs are in progress.

## 6. Feature Requests & Roadmap Signals
**No new feature requests** were submitted in the reporting period. There are no roadmap signals visible from issues, PRs, or releases. The project's direction is currently opaque. Given the absence of user-requested features, the next version (if any) will likely be a maintenance release focused on dependency updates.

## 7. User Feedback Summary
**No user feedback** was captured in the last 24 hours. There are no complaints, praise, use-case descriptions, or satisfaction indicators available in the tracked GitHub artifact's data. Community sentiment cannot be assessed.

## 8. Backlog Watch
**Potentially at-risk item:**
- [#956 — Alpine 3.24 bump PR](https://github.com/nullclaw/nullclaw/pull/956) — This PR has been open for **36 days** without any maintainer response or review. If left unanswered much longer, the Alpine 3.23 base image may become unsupported, introducing security and stability risks. The Dependabot automation will likely close the PR if it becomes stale. **Recommendation:** A maintainer should review, approve, and merge this PR, or at minimum provide a comment to acknowledge its existence.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-21

## 1. Today's Overview

IronClaw remains in an intense **"Tier B" transition phase**, with the team aggressively deleting the legacy v1 monolith (`src/`) and cutting production deployments over to the Reborn stack. Activity is at a sustained peak: **43 issues** and **50 pull requests** were updated in the last 24 hours, with **28 PRs merged or closed** and **40 open issues actively tracked**. The project is simultaneously shipping its **1.0.0-rc.1 release candidate**, executing major refactors (store consolidation, security policy centralization, deployment mode simplification), and absorbing a heavy bug bash (14+ P1/P2 issues reported yesterday alone). Dependabot activity is also elevated, with 5 bulk dependency PRs in flight. The overall health signal is **high velocity with controlled risk** — the team is executing on architectural cleanup while maintaining a rapid bug-fix cadence.

## 2. Releases

**No new releases today.** The `ironclaw-v1.0.0-rc.1` tag was pushed to commit `40ae7200` (changelog prep PR #6370 merged), but the release build failed at the `cargo-dist` step due to MSI blockers and "Reborn" codename references (PR #6383 is the targeted fix, opened today). A broader release PR (#5598) is still open, proposing version bumps for `ironclaw_common` (0.4.2 → 0.5.0, breaking) and `ironclaw_skills` (0.3.0 → 0.4.0, breaking).

## 3. Project Progress

**28 PRs were merged or closed today.** Key advances:

- **🔴 v1 Monolith Deletion Complete (Tier B milestone):** PR #6375 (`refactor(tier-b): delete v1 legacy monolith`) — a **high-risk, 22-scope-tagged XL PR** that cuts all production deploy configs over to the Reborn stack. Merged.

- **🔴 Authorization Policy Centralization (§5.3.2/§9 security milestone):** PR #6386 consolidates all pre-flight policy into a single `authorize()` site, fulfilling the architecture simplification goal. Currently open.

- **🔴 Deployment Mode Branching Ratchet (5→3):** PR #6387 shrinks the allowlist toward §4.4 target. Open.

- **🔴 FilesystemStore Simplification:** PR #6382 retires the production-dead blob store, deduplicates crash-safety-critical transition code, and decomposes giant files. Open.

- **🔴 dead code removal:** PR #6374 (`eliminate local_trigger_access`) and PR #6377/#6378 (remove `libsql-secrets` and `filesystem-goal-store` feature flags) all merged.

- **🔴 Chat Stream Resilience:** PR #6337 (merged) keeps streams alive with inactivity timeouts, requires real provider terminal markers, and preserves per-thread progress.

- **🔴 Streaming Retry Resilience Coverage:** PR #6376 (open) adds programmable Python mock LLM faults and coverage for WebUI v2 streaming/retry/cancel behavior.

- **🔴 Fix post-merge red main:** PR #6379 fixed `release-plz` and replay-gate references that broke CI after v1 deletion. Merged.

## 4. Community Hot Topics

1. **#6263 — `InMemoryTurnStateStore` retirement (9 comments)**
   [Issue](https://github.com/nearai/ironclaw/issues/6263)
   The last remaining `InMemory*Store` debt. Commenters are debating whether Slice 0 oracle evidence + no-livelock proof is sufficient to retire the ~4,260-line store. This is the final ratchet before a completely in-memory-free Reborn stack.

2. **#6274 — Finish `DeploymentConfig` (4 comments)**
   [Issue](https://github.com/nearai/ironclaw/issues/6274)
   `DeploymentConfig` landed but is missing profile-materialization DTO conversion and enum-gated branching on unknown profile names. PR #6387 is the active Track 1 fix.

3. **#6190 / #6189 — Bug bash error display (4 comments each)**
   [Issue #6190](https://github.com/nearai/ironclaw/issues/6190) / [Issue #6189](https://github.com/nearai/ironclaw/issues/6189)
   Multiple conflicting error banners and "retryable error" false positives on completed responses. Users are confused about whether requests succeeded. Fix PR #6337 (merged) addresses the replay-gate aspect.

4. **#2277 — ACP-backed child threads (2 comments, 1 👍)**
   [Issue](https://github.com/nearai/ironclaw/issues/2277)
   Long-standing feature request for external coding agent delegation via Agent Communication Protocol. Still open since April 2026 with 1 upvote.

5. **#6384 — In-chat command coverage backlog (opened today, 0 comments)**
   [Issue](https://github.com/nearai/ironclaw/issues/6384)
   A survey of commands Reborn is missing vs. v1 legacy. Prioritized for planning — signals that Reborn v2 parity is being actively tracked.

## 5. Bugs & Stability

### Critical/P1 Bugs (reported today)

- **#6360 — Provider onboarding no back navigation**: `[bug_bash_P1]` — local CLI flow cannot navigate back after selecting a provider. No fix PR yet.
- **#6348 — Gmail extension auto-authorizes after reinstall**: `[bug_bash_P1]` — no OAuth prompt, assistant can read emails without user consent. **Security concern.** No fix PR yet.

### P2 Bugs (reported today)

- **#6350 — Assistant switches language unexpectedly** (replied in Ukrainian to English prompt)
- **#6351 — Run fails with checkpoint unavailable/unreachable errors**
- **#6353 — Long assistant messages truncated without expansion**
- **#6352 — Streamed response replays in a loop after page return**
- **#6349 — Telegram chat history rendered inconsistently in WebUI**
- **#6362 — Duplicate "Test connection" and "Fetch models" flows**

### Other Notable Issues

- **#6369 — Tier B follow-up: gaps from v1 retirement** (3 comments) — tracks capabilities lost with v1 deletion (in-chat commands, configuration surfaces, etc.)
- **#6335 — Host-authored capability remediation silently placeholder'd** (closed) — fix merged; now delivering correct setup instructions to users
- **#6359 — `reborn_trace_first_party_tool_coverage` reads real `$HOME` state** — test that passes in CI but fails locally; developer ergonomics issue
- **#6347 — Slack instance-readiness has no caller-level test coverage** — harness forces Slack configured, can't test unconfigured state

## 6. Feature Requests & Roadmap Signals

### High-Confidence for Next Release (1.0.0-rc.1 or imminent)

- **Reborn extension install flow** (#6320) — Native IronHub extension discovery/install/activate via CLI and composition surfaces
- **Thread-scoped MCP sessions** (#6325) — Programmatic MCP config scoped to correct thread/run context
- **WebUI workspace redesign + chat-first onboarding** (#6324) — Reborn-native UX, making first screen align with product model

### Medium-Term Candidates

- **ACP-backed child threads** (#2277) — External coding agent delegation via Agent Communication Protocol (still open since April)
- **In-chat command coverage** (#6384) — Parody v1's command surface in Reborn (feeds #3286)
- **Extension lifecycle decomposition** (#6329) — Breaking up the 8,789-line `extension_lifecycle.rs`

## 7. User Feedback Summary

The **bug bash (2026-07-20)** surfaced significant UX friction points from real users:

- **Confusion from error handling**: Multiple conflicting error banners (#6190), false "retryable error" on completed responses (#6189), and raw API errors in automation banners (#6178, closed) all erode user trust in request success/failure states.
- **Onboarding friction**: Provider onboarding with no back navigation (#6360 — P1) and redundant "Test connection"/"Fetch models" flows (#6362) make first-run experiences frustrating.
- **Cross-channel inconsistency**: Telegram messages rendered incorrectly in WebUI (#6349) creates a jarring experience for users on multiple surfaces.
- **Security concern**: Gmail extension auto-authorizing after reinstall (#6348 — P1) without user consent is a significant trust issue.
- **Language unexpectedness**: Assistant spontaneously switching languages (#6350) breaks user expectations for conversation coherence.
- **Positive signal**: The v1→Reborn cutover is happening deliberately (#6369 tracks gaps) — users should expect a period of capability parity catch-up.

## 8. Backlog Watch

| Issue | Age | Status | Notes |
|-------|-----|--------|-------|
| **#2277 — ACP child threads** | ~103 days (since Apr 10) | Open, 1 👍 | No activity since Jul 20; needs maintainer re-evaluation for 1.0.0 inclusion |
| **#6190 — Conflicting error messages** | ~4 days | Open, P2 | No fix PR; user-reported confusion, high UX impact |
| **#6189 — Retryable stream error** | ~4 days | Open, P2 | Partially addressed by #6337 (merged), but issue remains open |
| **#6369 — Tier B gaps** | ~1 day | Open, 3 comments | Core tracking issue — needs resolution before 1.0.0-rc.1 ships |
| **#5598 — Release PR** | ~18 days | Open | Stalled on RC timeline; likely superseded by 1.0.0-rc.1 process |
| **#5664 — Dependabot actions bump** | ~16 days | Open | Blocked on CI/CD changes; actions/checkout bump from v4→v7 may break workflows |

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for **2026-07-21**, based on the provided GitHub data.

---

## LobsterAI Project Digest – 2026-07-21

### 1. Today's Overview
The project is experiencing a **high-velocity development sprint**, with **15 pull requests (PRs) updated** in the last 24 hours, of which **10 were merged or closed**. This indicates a strong focus on closing out feature branches and bug fixes. Activity is concentrated on the **Cowork** subsystem, **Windows build/update tooling**, and **UI stability**. There were **no new releases or open issues** reported today, suggesting the maintainers are in a consolidation phase rather than responding to new external bug reports. Despite being mid-week, the team is pushing significant changes across the main, renderer, and build pipelines.

### 2. Releases
**None.** No new versions were tagged or released on this date.

### 3. Project Progress (Merged/Closed PRs)
The following significant improvements were merged or closed today, indicating active feature delivery and bug fixing:

- **🚀 Cowork & Browser Annotations (PR #2366):** A major feature (merged) adding multi-annotation support for the built-in browser. This includes a new browser annotation protocol, screenshot asset storage via IPC, and structured annotation context in Cowork message metadata. This expands the assistant’s ability to collaborate visually on web content.
- **🖥️ Windows Silent Updates (PR #2368 - Open):** A new feature to silently install Windows updates via the NSIS installer, including localized error handling for UAC prompts. This is still open but represents a major UX improvement for Windows desktop users.
- **🟢 Windows Build Channels (PR #2367 - Merged):** Refactored Windows distribution builds to use explicit entry points (`dist-win-channel.cjs`, `dist-win-web.cjs`), preventing environment variable leaks between builds and improving CI reliability.
- **🎨 AI Skin Creation Flow (PR #2361 - Merged):** Improved the AI skin creation flow with a persistent entry in Appearance settings, a first-use onboarding step, and better workflow continuity across turns.
- **🛠️ Config Hot-Reload Fix (PR #2365 - Merged):** Fixed OpenClaw configuration hot-reloading to use an RPC acknowledgment mechanism instead of file polling, improving performance and consistency.
- **🔄 Scroll Position & Flicker Fixes (PR #2364, #2363 - Merged):** Two critical fixes for the Cowork UI: preventing scroll jumps during session refresh and preventing periodic IM message flicker by better history window reconciliation.
- **🔐 Auth Stability (PR #2360 - Merged):** Fixed authentication callback handling to reuse active callback servers across login retries, improving reliability and adding regression tests.
- **🎨 Artifacts Layout Stability (PR #2359 - Merged):** Stabilized the artifact preview panel and input area layout to prevent flickering and DOM reconstruction during expansion/collapse.
- **🐞 Cron UI Bug (PR #2362 - Merged):** Fixed a UI bug related to the cron scheduler component.

### 4. Community Hot Topics
- **PR #1277 – Electron Dependencies Bump (Open):** This PR, opened on April 2nd, attempts to bump Electron from v40 to v43 and electron-builder. It has remained open for ~4 months, likely due to breaking changes or dependency conflicts. This is a critical maintenance task that is blocking the core framework upgrade.
    - **Link:** [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)
- **PR #1282, #1283, #1284 – Core Dependency Bumps (Open/Stale):** These dependency bumps (`@headlessui/react`, `react`, `react-syntax-highlighter`) are all stale (opened April 2nd). They indicate the project is lagging significantly on critical front-end dependencies, which could be a source of technical debt or security vulnerabilities.
    - **Link:** [PR #1282](https://github.com/netease-youdao/LobsterAI/pull/1282), [PR #1283](https://github.com/netease-youdao/LobsterAI/pull/1283), [PR #1284](https://github.com/netease-youdao/LobsterAI/pull/1284)

### 5. Bugs & Stability
No new bugs were directly reported as Issues today, but the following bug-fix PRs were merged, indicating the following regressions were addressed:

- **Medium – Cowork UI Flicker & Scroll Jumps:** PR #2364 (scroll jumps) and PR #2363 (message flicker) resolved significant usability bugs in the Cowork IM interface.
- **Low – Artifacts Layout Jitter:** PR #2359 fixed visual instability in the artifact preview panel.
- **Low – Cron UI Bug:** PR #2362 fixed a visual bug in the cron scheduler UI.
- **Critical – Login Auth/Callback Failure:** PR #2360 fixed a scenario where login attempts would fail if the callback server was not properly reused across retries.

### 6. Feature Requests & Roadmap Signals
- **UI/UX Direction:** The work on "AI Skin Creation" (PR #2361) and "Browser Multi-Annotation" (PR #2366) signals a clear roadmap push toward **personalization and rich-context collaboration**. The next minor version will likely feature deeper AI-assisted customization and the ability to annotate web pages for conversations.
- **Windows Platform Maturation:** The focus on silent installers and build channel isolation (PR #2367, #2368) suggests the team is preparing for a **more polished desktop experience** and potentially a broader Windows distribution (e.g., Microsoft Store or a business installer).
- **Dependency Upgrades (Stale):** The long-open dependency bump PRs (React 19, Electron 43) are a roadmap signal that the team *intends* to upgrade but may be blocked by breaking changes or internal testing. This is a strong candidate for the next major release cycle.

### 7. User Feedback Summary
Based on the PR descriptions and fixes, the following user pain points were addressed today:
- **Pain Point: Unreliable Login.** Users likely experienced unpredictable login failures when retrying. *Resolved by PR #2360.*
- **Pain Point: Cowork UI Jitter.** Users were likely frustrated by the Cowork message list jumping or flickering when new messages arrived or sessions refreshed. *Resolved by PRs #2363 & #2364.*
- **Pain Point: Clunky AI Skinning.** The previous skin creation flow may have been hard to find or non-persistent. *Improved by PR #2361.*
- **Pain Point: Noisy Windows Updates.** The current Windows update flow likely shows a full installer wizard, which is disruptive. *Proactively addressed by PR #2368.*

### 8. Backlog Watch
The following long-standing PRs require urgent maintainer attention:

1.  **PR #1277 – Electron 40 to 43 Bump (Stale, ~4 months old):** This is the highest-risk item. Blocking this upgrade means the project is running on an outdated Electron framework, missing security patches and performance improvements.
    - **Link:** [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)
2.  **PR #1283 – React 18 to 19 Bump (Stale, ~4 months old):** Falling two major versions behind on React is a significant technical liability for the renderer performance and ecosystem compatibility.
    - **Link:** [PR #1283](https://github.com/netease-youdao/LobsterAI/pull/1283)
3.  **PR #1284 – react-syntax-highlighter Bump (Stale, ~4 months old):** While less critical, this blocks improvements to code rendering (a core feature for an AI assistant).
    - **Link:** [PR #1284](https://github.com/netease-youdao/LobsterAI/pull/1284)

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-21

## Today's Overview

High activity with **30 issues** and **42 PRs** updated in the last 24 hours, reflecting a mature project under active development. The **8 closed issues** and **10 merged/closed PRs** indicate steady progress toward *v2.0.1* (currently at *2.0.1b1*). No new releases were published today. The majority of activity centers around **reasoning/tool-call reliability**, **embedding configuration correctness**, and **desktop/Tauri platform bugs**, with several first-time contributors submitting meaningful fixes. Community engagement is strong, with detailed bug reports and feature requests receiving prompt maintainer attention.

## Releases

**No new releases** for CoPaw in the last 24 hours. The latest published versions remain:
- *QwenPaw `2.0.0.post3`* (stable)
- *ReMe `0.4.1.1`* / *`0.4.1.3`* (from PR #6235)

Users on `v1.1.12.post3` still report upgrade difficulties (#5959).

## Project Progress

**10 PRs were merged/closed** today, highlighting several feature advancements:

- **Memory & Indexing (#6235):** `jinliyl` merged ReMe Light stability enhancements — index rebuild moved from auto-start to explicit maintenance, with concurrent write protection, Markdown chunking improvements, and staggered dream task timing.
- **Agent Mode Refactor (#6210):** `rayrayraykk` merged making the default ReAct loop a first-class `DefaultMode`, giving each mode explicit ownership of its stop handler and lifecycle state.
- **Observability (#5922, #6277):** Two merged PRs from first-time contributors (`alvinlee518`, `splash-li`) fix Langfuse trace IDs and propagate user/session/version metadata.
- **PawApp SDK & Kanban (#6150):** `zhijianma` merged the foundational PawApp SDK and Kanban app plugin.
- **Background Tool Calls (#6151):** `XiuShenAl` merged a dual-deadline architecture (`offload_deadline` + `kill_deadline`) to fix cancel-signal timing bugs.

Notable **open PRs** under review: *Unified Browser (#6276)*, *Chrome Extension Plugin (#6157)*, *Windows UIA Computer Use (#5187)*, and *AIOnly Provider (#6271)*.

## Community Hot Topics

### Most Active Issues
| Issue | Comments | Summary |
|-------|----------|---------|
| [#6257](https://github.com/agentscope-ai/CoPaw/issues/6257) — Recurring thinking output | 13 | Agent repeats identical thinking blocks across multiple tool calls in one turn |
| [#5961](https://github.com/agentscope-ai/CoPaw/issues/5961) (CLOSED) — v2.0.0 write/delete loop | 8 | Agent stuck in infinite write/delete cycle with qwen3.7-plus |
| [#4873](https://github.com/agentscope-ai/CoPaw/issues/4873) — Subagent infinite polling | 5 | Two subagents cause main agent to poll indefinitely; Feishu cannot interrupt |
| [#6242](https://github.com/agentscope-ai/CoPaw/issues/6242) — Embedding dimensions not sent | 3 | Console's `use_dimensions` setting not exposed to APIs |
| [#6250](https://github.com/agentscope-ai/CoPaw/issues/6250) (CLOSED) — Sandbox fallback hardcoded | 2 | `SANDBOX_FALLBACK` always asks for approval; no config to bypass |

**Underlying needs**: The community is struggling with **reasoning duplication bugs** (multiple tool calls sharing one thinking block), **agent loop/deadlock scenarios** (write/delete, subagent polling), and **configuration gaps** (embedding dimensions, sandbox fallback). Users want more granular control and better interruption mechanisms.

## Bugs & Stability

### Critical / High Severity
- **Reasoning relay corrupts thinking blocks (#6282, #6257)** — QwenPaw's shared formatter copies the first `ThinkingBlock` onto every tool-call segment, duplicating reasoning. **Fix PR #6280** (`wananing`) is under review, aligning reasoning with tool segments.
- **Agent write/delete infinite loop (#5961)** — Closed, but similar patterns persist in **#6241** (repeated output + `memory_search` deadloop). Community notes the loop-detection warning doesn't *prevent* further cycles.
- **Desktop hangs on startup when `nvidia-smi` hangs (#6197)** — Frozen binary blocks indefinitely on Windows. No fix PR yet.

### Medium Severity
- **`_saved_tool_refs` crashes `recall_history` (#6246)** — Closed. OSError from too-long filenames when `tool_result` matches regex pattern.
- **OpenAI max tokens not respected (#6258)** — Parameter not passed correctly for OpenAI models.
- **Windows PATH drops semicolon (#6239)** — Child processes lose npm globals due to incorrect PATH concatenation.

### Low / Environment-Specific
- **Ctrl+zoom not working on Linux Desktop (#6252)** — Only Tauri/Linux affected.
- **`allow_unsandboxed` doesn't control approval dialog (#6250)** — Closed, but bypass requires overly broad `approval_level: NONE`.
- **Code mode offline preview broken (#6261)** — Uses online resources for file preview.

## Feature Requests & Roadmap Signals

**High-likelihood for next release (2.0.1):**
- **AIOnly model provider** — `Z2Rikka` submitted both an issue **(#6268)** and a PR **(#6271)** with 190+ models aggregated. First-time contributor, looking for review.
- **Per-session model overrides** — PR **#5992** (`mango8853`) allows different LLMs per conversation. Under review.
- **User-editable agent modes** — PR **#6270** (`rayrayraykk`) proposes making agent gates/modes configurable by users.

**Growing community demand:**
- **Session grouping/folders (#6287)** — Desktop console needs organizational features for history.
- **Collapsible thinking/tool-call blocks (#6260)** — Multiple users want tool calls folded to focus on final results.
- **`ask_user_question` Human-in-the-Loop tool (#6274)** — Structured multi-choice intervention for fuzzy/high-risk requests.
- **Auto-attach real timestamps (#6283)** — Prevents confusion when resuming old sessions after days.
- **Mobile-adaptive Web console (#6281)** — Requested by `ook826092-cloud`.

**Likely roadmap items**: AIOnly provider, per-session overrides, and the unified browser stack (#6276) are closest to merge. The Creator app (#6284) and Chrome extension (#6157) signal deeper plugin/system integration.

## User Feedback Summary

**Positive signals**: Users appreciate the ReMe memory system and the ongoing stability work. The PawApp SDK and plugin architecture (Kanban, Creator) show ecosystem expansion.

**Pain points:**
- **Installation/upgrade friction**: Users on `v1.1.12.post3` cannot upgrade to `v2.0.0` via script (#5959).
- **Agent loop/deadlock**: Frequently reported across models, tasks, and entry points (subagent, single-agent, Feishu).
- **Token waste**: Built-in tools consume 8,000–10,000 tokens per request even when unused (#6286).
- **No tray minimize (#6264)**: Desktop mode lacks system-tray integration.
- **Mobile and offline limitations**: Web console not mobile-friendly; code-mode requires online resources.

**Dissatisfaction signals**: Multiple "聊天报错" (chat error) reports with `BadRequestError` and `OSError` suggest production stability gaps.

## Backlog Watch

### Issues Needing Maintainer Attention
- **#5688** — CSS prefix mismatch (`ant-` vs `qwenpaw-`) — open since **2026-07-01**. User reports layout selectors may not apply. *20 days dormant.*
- **#5688** (continued) — No maintainer response on whether `ant-` selectors in `layout.css` are dead code.
- **#6239** — Windows PATH semicolon drop — user disclosed AI-assisted drafting. Needs maintainer verification.
- **#6197** — Desktop startup hang on `nvidia-smi` timeout — no PR, no workaround documented.
- **#6260** — Collapsible thinking blocks — received 1 👍 but no maintainer comment. Growing user demand.

### Stale PRs
- **#5187** — Windows UIA computer use (open since **2026-06-14**) — 36 days, no recent updates from author. Needs reviewer bandwidth.
- **#6157** — Chrome extension plugin — depends on #6276 (unified browser) which itself is recent. May stall if `unified_browser` takes long.
- **#5992** — Per-session overrides — first-time contributor, under review but no merge since 2026-07-12.

**Recommendation**: Prioritize review of #5688 (likely trivial CSS fix) and #6197 (startup blocker for Windows desktop users). The two first-time contributor PRs (#5992, #6203) deserve timely review to encourage sustained contribution.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-21

## Today's Overview

The ZeroClaw project remains in an intense development cycle with **39 issues and 50 pull requests** updated in the last 24 hours, indicating sustained high activity. Of these, 30 issues remain open/active and 9 were closed, while 37 PRs are still open with 13 merged or closed. No new releases were published today, suggesting the team is heads-down on the **v0.9.0 milestone** and the evaluation harness (zeroclaw eval) foundation. The most significant signals are a major **Windows test failure** bug (74 failures), a new **Landlock sandbox self-lock** vulnerability, and a concentrated push from contributor **IftekharUddin** delivering a series of interlocking PRs for the eval harness, including regression suites, JUnit reporting, baseline files, and LLM-judge tooling. Overall, the project is in a **high-velocity, stabilization and capability-expansion phase** with substantial contributor engagement.

## Releases

No new releases published today.

## Project Progress

**13 pull requests were merged or closed** in the last 24 hours. Notable advances include:

- **#8931** (CLOSED, merged) — `fix(providers): sanitize outbound tool-call arguments to prevent 400 (#8675)` — A contributor resolved a critical S1 blocker where malformed tool-call arguments from reasoning models caused HTTP 400 errors on OpenRouter/OpenAI-format providers, silently producing empty replies.
- **#9201** (OPEN) — `fix(runtime): prevent shared iteration budget underflow` — Fixes a TOCTOU race condition where concurrent parent/subagent turns could overflow `AtomicUsize` and cause runtime panics.
- **#9203** (OPEN) — `fix(sop): wire authenticated HTTP fan-in` — Delivers the long-promised `POST /sop/{*rest}` endpoint, enabling authenticated SOP-only webhook dispatching.
- **#9205** (OPEN) — `feat(sop): centralize fan-in ingress adapters` — Implements a shared `SopIngress` adapter layer for external deliveries, addressing the architectural debt tracked in #8581.
- **#9221, #9220, #9223, #9224, #9225** (all OPEN) — A coordinated series of eval harness PRs from IftekharUddin adding baseline files with regression diffing, comparable run receipts, JUnit XML output, repeated live runs with `pass@k`/`pass^k` metrics, and a seeded regression suite — all part of the Agent Evaluation Harness (#7065).

## Community Hot Topics

The most active discussions this period highlight platform parity, protocol interoperability, and governance:

- **#6808 — RFC: Work Lanes, Board Automation, and Label Cleanup** (14 comments) — A governance RFC from Audacity88 proposing automated work routing and label hygiene. Now in "accepted / rollout in progress" status since May, it reflects ongoing maintainer efforts to scale project management alongside code growth.
- **#7462 — 74 test failures on Windows** (10 comments, 0 👍) — Contributor NiuBlibing filed a S2 bug revealing that the entire test suite is Linux-only in CI, causing 74 failures on Windows 11 (Simplified Chinese locale). This is a **cross-platform parity gap** that has been open for over a month, with no fix PR yet.
- **#3566 — A2A (Agent-to-Agent) Protocol Support** (9 comments, 7 👍) — The most-liked open feature request, this proposal adds native Agent2Agent protocol support for inter-instance communication. With 7 reactions, it signals strong community demand for multi-agent orchestration capabilities.
- **#8891 — Persistent Memory Tracker** (6 comments) — A roadmap tracker for bringing persistent (cross-session) memory to parity with mature agent runtimes, with 18 open items across 3 issues and 15 PRs. This is a foundational architectural component.

## Bugs & Stability

### Critical / S0
- **#9206** — *Cron job with `job_type = "agent"` resolves `workspace_dir` to `/` instead of agent's real workspace* — **S0 data loss/security risk**. Jobs can execute with root filesystem permissions, potentially overwriting system files. No fix PR yet.

### High Severity (S1)
- **#7462** — *74 test failures on Windows* — CI only runs on Linux; Windows users get degraded behavior. No fix PR; open since June 10.
- **#8675** (CLOSED) — *Malformed tool-call arguments → provider 400* — **Fixed** by PR #8931, merged today.
- **#9204** — *Landlock sandbox locks zeroclaw itself into landlock* — Shell commands trigger Landlock restrictions that break SQLite memory access and other runtime capabilities. No fix PR yet.
- **#9207** — *`web_fetch` returns garbage for compressed responses (gzip, brotli, deflate)* — Agents cannot parse binary data from compressed HTTP responses. No fix PR yet.
- **#9192** — *`shared_budget` TOCTOU wraps `AtomicUsize`* — Concurrent parent/subagent iterations can overflow the turn budget. Fix PR #9201 exists (open).
- **#9216** — *Comment-hygiene gate fails on master* — CI lint failing on production branch due to issue-ref patterns in comments. No fix PR yet.

### Medium Severity (S2)
- **#9078** (CLOSED) — *Serial transport desynchronized after non-matching response ID* — Fixed.
- **#8837** (CLOSED) — *History trimming occurs silently with pruning disabled* — Fixed.
- **#9079** (CLOSED) — *Missing CI for firmware protocol crate* — Fixed.
- **#9202** — *`zeroclaw desktop` uses dead download URL* — The in-product download link is outdated and fails to detect installed AppImages on Linux.

### Other Notable
- **#9198** — Discord typing indicator stuck indefinitely after daemon reload from web dashboard (S3, no fix PR).
- **#9206** (already noted S0) — Requires immediate attention from security team.

## Feature Requests & Roadmap Signals

The most forward-looking signals come from the **eval harness milestone** (#7065), which saw five new follow-up issues filed today:

- **#9228** — *Eval harness: results dashboard / trend tracking* — Requests a longitudinal view over baseline plus receipt history for pass-rate trends and error bars.
- **#9227** — *LLM-judge calibration tooling* — Requests tooling to generate calibration files for the LLM-as-judge grader.
- **#9226** — *Memory seeding + memory side-effect graders* — Requests a real memory backend in the eval sandbox so agents can be tested with seeded memory state.

These follow-ups, combined with the persistent memory tracker (#8891) and A2A protocol support (#3566), point toward **v0.9.0 being a major capability release** with evaluation infrastructure, multi-agent interoperability, and production-grade memory. The A2A feature (#3566) has the strongest community demand and is likely to land in the next milestone given its placement in the v0.9.0 auth/security tracker (#7432).

## User Feedback Summary

**Pain points (explicit):**
- *Windows users*: The platform is effectively second-class; 74 test failures go undetected by CI (#7462), and ZeroCode won't start without manual `ZEROCLAW_SOCKET` env var (#9117, fixed).
- *Cross-platform breakage*: The Landlock sandbox self-lock (#9204) and broken compressed-content handling (#9207) block real-world workflows.
- *Context loss*: Silent history trimming (#8837, fixed) caused users to lose mid-session context arbitrarily until they directly asked the agent what it remembered.
- *UX friction*: ZeroCode's copy behavior is broken (#8664, fixed), theme inheritance in overlays (#8765, fixed), and mouse selection (#8944, fixed) — all fixed this cycle, indicating the team is responsive to usability complaints.
- *Tool reliability*: The `web_fetch` tool returning garbage for compressed responses (#9207) and the Discord typing indicator getting stuck (#9198) degrade the user experience in real-time channels.

**Positive signals:**
- The **eval harness** (#7065) is overwhelmingly the most actively developed feature this period, with 5 PRs and 3 follow-ups filed today alone, indicating strong contributor investment in agent quality tooling.
- Community member **IftekharUddin** has emerged as a major contributor, delivering most of the eval harness features and SOP fixes.

## Backlog Watch

| Issue | Age | Status | Notes |
|-------|-----|--------|-------|
| **#7462** — 74 Windows test failures | 41 days (Jun 10) | OPEN, P1, accepted | No fix PR; CI gap is known and accepted but blocks Windows adoption. Requires significant CI infrastructure change. |
| **#3566** — A2A Protocol Support | 128 days (Mar 15) | OPEN, P2, accepted | Most-liked feature (7 👍) but no PR yet. Placed in v0.9.0 tracker but no visible implementation work. |
| **#6685** — SOP HTTP fan-in documented but not wired | 67 days (May 15) | OPEN, P2, in-progress | PR #9203 (wiring) opened today by IftekharUddin — **long-awaited fix arriving now**. |
| **#7065** — Agent evaluation harness | 50 days (Jun 1) | OPEN, P2, accepted | Today saw massive progress with 5 new PRs and 3 follow-up issues. No longer stuck. |
| **#8581** — Centralize SOP ingress adapters | 20 days (Jul 1) | OPEN, P2, in-progress | PR #9205 opened today — moving quickly. |

**Items needing maintainer attention:**
- **#7462** (Windows CI) is the longest-standing S2 bug without a fix in sight. Despite being "accepted," it represents a **fundamental platform parity gap** that will block Windows-centric teams from adopting ZeroClaw.
- **#3566** (A2A protocol) has high community engagement but no implementation momentum. If the maintainers plan to include it in v0.9.0, scoping work should begin soon.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*