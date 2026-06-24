# OpenClaw Ecosystem Digest 2026-06-24

> Issues: 188 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-24 00:23 UTC

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

Here is the OpenClaw project digest for June 24, 2026.

---

## OpenClaw Project Digest - 2026-06-24

### 1. Today's Overview

The OpenClaw project is experiencing a period of high community activity and significant maintenance focus. With 188 issues and 500 pull requests (PRs) updated in the last 24 hours, the ecosystem is vibrant but also contending with a substantial backlog of critical bug reports. A large portion of activity is centered around a "Path 3" migration to refactor the session store, stabilizing message delivery across channels, and squashing regressions introduced in recent releases. Key maintainers are actively reviewing issues and pushing fixes, though the sheer volume of open PRs (469) indicates a bottleneck in the review process. The primary stability signals are mixed: while there are no new releases today, a high number of "diamond lobster" rated (critical) bugs remain open.

### 2. Releases

No new releases were published today.

### 3. Project Progress (Merged/Closed PRs)

Of the 500 updated PRs, 31 were merged or closed today, indicating a steady pace of fix integration. Notable progress includes:
- **Session State Migration (Path 3):** PR [#96225](https://github.com/openclaw/openclaw/pull/96225) (by jalehman) moved boot session mapping through an accessor, furthering the architectural work tracked in Issue [#88838](https://github.com/openclaw/openclaw/issues/88838) to reduce direct database calls.
- **Channel Delivery Fixes:**
    - PR [#89790](https://github.com/openclaw/openclaw/pull/89790) (clawsweeper[bot]) fixed Google Chat reply delivery by ensuring thread targets are preserved across text chunks.
    - PR [#95822](https://github.com/openclaw/openclaw/pull/95822) addressed a high-priority regression (`v2026.6.9`) where rich message formatting was broken in Telegram.
- **Security & Observability:**
    - PR [#96224](https://github.com/openclaw/openclaw/pull/96224) (by eleqtrizit) added a cap to the gateway authentication rate limiter to prevent resource exhaustion from failed auth attempts.
    - PR [#96227](https://github.com/openclaw/openclaw/pull/96227) extended diagnostic `model.usage` events to the HTTP ingress API (`/v1/responses`), improving cost tracking and observability.
- **Codex Integration:** PR [#96212](https://github.com/openclaw/openclaw/pull/96212) fixed a bug where image generation on remote Codex app-servers would incorrectly report "Media failed."
- **Maintenance:** PR [#96226](https://github.com/openclaw/openclaw/pull/96226) removed a deprecated Textual dependency from the macOS chat packaging.

### 4. Community Hot Topics

The most heated discussions are clustered around state loss and provider-specific regressions.

- **#88838 (Diamond Lobster): Track core session/transcript SQLite migration via accessor seam**
    - [Link](https://github.com/openclaw/openclaw/issues/88838)
    - **Comments:** 35 | **Reactions:** 1
    - **Analysis:** This is the most active issue, serving as the tracking bug for a major internal refactoring ("Path 3"). The community is deeply invested in the stability implications of moving from file-backed storage to a SQLite accessor pattern, as it directly impacts session state integrity.

- **#92201 (Diamond Lobster): Embedded runner intermittently invalidates Anthropic thinking signatures**
    - [Link](https://github.com/openclaw/openclaw/issues/92201)
    - **Comments:** 14 | **Reactions:** 1
    - **Analysis:** A critical, hard-to-reproduce bug causing agent failures on replay for users of the Slack plugin with Anthropic models. The error is masked by generic error handling, making debugging a nightmare for operators.

- **#90991 (Closed - Platinum Hermit): Cron trigger contaminates global runtime state**
    - [Link](https://github.com/openclaw/openclaw/issues/90991)
    - **Comments:** 14 | **Reactions:** 1
    - **Analysis:** Though closed, this issue garnered significant attention as it described a systemic failure where a scheduled cron job could overload the entire system. The closure suggests a root cause was identified and fixed, likely contributing to recent stability improvements.

### 5. Bugs & Stability

Recent releases (particularly v2026.6.9) have introduced significant regressions. The project is currently in a high-stability-risk phase.

- **Critical (Diamond/P1 – Active Conversation Impact):**
    - **Telegram Rich Text Regression (`#95554`):** Paragraph breaks and table rendering are broken in v2026.6.9. Fix PR ([#95822](https://github.com/openclaw/openclaw/pull/95822)) is under review. [Link](https://github.com/openclaw/openclaw/issues/95554)
    - **Session Lock/Abort Loop (`#95833`):** Subagent abort fails to release a file lock, permanently breaking a session until manual intervention. [Link](https://github.com/openclaw/openclaw/issues/95833)
    - **Gateway Timeout Under Load (`#92057`):** Gateway becomes slow and times out under multi-session load, causing message loss. [Link](https://github.com/openclaw/openclaw/issues/92057)
    - **Ollama Streaming Blocked (`#94251`):** Remote Ollama provider connection fails to progress, preventing chat sessions from starting. [Link](https://github.com/openclaw/openclaw/issues/94251)
- **High (Platinum/P1 – Provider or Session Impact):**
    - **DeepSeek Cache Hit Rate <10% (`#94518`):** A regression in 6.x has destroyed cache efficiency for DeepSeek users, increasing latency and cost. [Link](https://github.com/openclaw/openclaw/issues/94518)
    - **Conversation Store Orphaned (`#94939`):** State migration in 6.8 can create an empty SQLite database, breaking proactive messages (e.g., MS Teams Bot Framework). [Link](https://github.com/openclaw/openclaw/issues/94939)
    - **Model Provider ID Migration (`#95136`):** Renaming a provider ID (e.g., `openai-codex` -> `openai`) silently orphans user OAuth profiles with no warning or migration path. [Link](https://github.com/openclaw/openclaw/issues/95136)

### 6. Feature Requests & Roadmap Signals

Several user-requested features have gained traction and community support.

- **High Likelihood for Next Version:**
    - **MCP as Compaction Provider (`#96156`):** Allowing any MCP server to serve as the compaction engine would add immense flexibility. Given the current focus on the session store and compaction, this is a strong candidate. [Link](https://github.com/openclaw/openclaw/issues/96156)
    - **Global SSRF Policy (`#93068`):** A unified policy for private network access is a clear security win. With 2 reactions and an active PR context, this is likely on the roadmap. [Link](https://github.com/openclaw/openclaw/issues/93068)
- **Moderate Likelihood:**
    - **Agent Scheduling API (`#71712`):** This RFC for allowing agents to manage their own cron jobs is a major feature. It's been open since April but remains a high-value request. [Link](https://github.com/openclaw/openclaw/issues/71712)
    - **Session Naming (`/label` command) (`#93422`):** A simple UX improvement for the Webchat UI that has received 2 reactions. [Link](https://github.com/openclaw/openclaw/issues/93422)

### 7. User Feedback Summary

Users are expressing several clear pain points:

- **"I'm hitting regressions after every update."** The high volume of Diamond Lobster issues, particularly around state, streaming, and formatting in v2026.6.9, suggests users are experiencing a frustrating cycle of fixing one bug only to have another appear.
- **"Local model support feels fragile."** The Ollama streaming bug (`#94251`), DeepSeek cache failure (`#94518`), and issues with local models outputting raw text instead of tool calls (`#90288`) indicate a significant gap in reliability for users who prefer or require local or non-Anthropic providers.
- **"My agent goes silent or breaks, and I can't figure out why."** Issues like the generic error messages in `#92201` and the misleading "aborted by user" message in `#88870` show that error handling often obfuscates the true problem, making self-service debugging difficult.
- **Satisfaction:** The rapid creation of fix PRs (e.g., for Telegram and Google Chat) shows the community appreciates the maintainers' responsiveness to critical regressions.

### 8. Backlog Watch

The following items are high-signal but appear to be stalled or lacking maintainer action.

| Issue Title | Link | Status & Concern |
| :--- | :--- | :--- |
| **Feature Request: Add MathJax/LaTeX Support** (`#42840`) | [Link](https://github.com/openclaw/openclaw/issues/42840) | Open since March with 7 reactions, tagged `P2`. A popular request for math/science users, but remains in `needs-maintainer-review`. |
| **Bug: Tool error messages lack failure reason** (`#46548`) | [Link](https://github.com/openclaw/openclaw/issues/46548) | Stale `P2` since March. Critical for UX, as users are left guessing why a tool call failed. Filed as a Diamond Lobster. |
| **Plugin allowlist warning is unactionable** (`#68780`) | [Link](https://github.com/openclaw/openclaw/issues/68780) | Closed, but the underlying user experience issue (alarming first-time warnings) is a persistent onboarding friction point. |
| **Tool Search Silent Failure (`#92273`)** | [Link](https://github.com/openclaw/openclaw/issues/92273) | A Diamond Lobster bug that can cause complete data loss of durable memories. Though it has a linked PR, the issue is closed and requires verification that the fix is comprehensive. |

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the provided community digest summaries.

---

## Cross-Project Comparison Report: Personal AI Agent Ecosystem
**Date:** 2026-06-24

### 1. Ecosystem Overview

The personal AI agent open-source ecosystem is experiencing a bifurcation between high-velocity development and growing maintenance debt. While flagship projects like OpenClaw and IronClaw are pushing major architectural refactors (“Path 3” session migration, Reborn v2), they are simultaneously contending with critical regressions and review bottlenecks. Projects like ZeroClaw and CoPaw are in intense patch cycles focused on platform parity, mobile responsiveness, and security hardening after major migrations (AgentScope 2.0, the bulk revert). A long tail of smaller projects (Moltis, TinyClaw, ZeptoClaw) shows little to no activity, signaling consolidation. The dominant themes across the ecosystem are **channel reliability** (Telegram, Matrix, Slack), **provider compatibility** (especially for non-Anthropic models), and a user demand for **robust, persistent agent memory and scheduled automation**.

### 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Today? | Health Score & Notes |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 188 | 500 | No | **6/10** – High activity but saturated with critical (Diamond Lobster) bugs and PR review bottlenecks. |
| **NanoBot** | ~104 | 39 | Yes (v0.2.2) | **8/10** – High velocity with a focus on quality-of-life and integration. |
| **Hermes Agent** | 50 | 50 | No | **7/10** – Healthy triage, active community, but several high-impact security and platform bugs. |
| **PicoClaw** | 3 | 17 | No | **8/10** – Strong stability sprint with key channel and security fixes. |
| **NanoClaw** | 1 | 12 | No | **8/10** – Focused maintenance and feature work (Slack Socket Mode, SDK bump). |
| **NullClaw** | 1 | 1 | No | **5/10** – Low activity, a long-standing CRON feature PR remains unmerged. |
| **IronClaw** | ~42* | 42 | No | **8/10** – Very high velocity focused on Reborn v2 architecture stabilization. |
| **LobsterAI** | 0 | 11 | No | **3/10** – Moderate code changes, but **crippled by a critical 82-day-old unaddressed crash bug**. |
| **Moltis** | 0 | 1 | No | **2/10** – Near dormant; one PR merged after a 4-month gap. |
| **CoPaw** | 38 | 50 | Yes (v1.1.12.post2) | **7/10** – Intense development with good maintainer responsiveness, but numerous post-migration bugs. |
| **TinyClaw** | - | - | No | **0/10** – No activity. |
| **ZeptoClaw** | - | - | No | **0/10** – No activity. |
| **ZeroClaw** | 32 | 50 | No | **8/10** – High-activity patch cycle with significant security and platform progress. |

*Note: See IronClaw digest for details. Health Score is a qualitative assessment based on the balance of activity, bug severity, and backlog health.

### 3. OpenClaw's Position

- **Advantages:** OpenClaw remains the core reference implementation and *de facto* standard. It has the largest contributor base, the most ambitious architectural roadmap (“Path 3” session store migration), and the deepest integrations. Its diagnostic enhancements (e.g., PR #96227 for `model.usage` events) signal a focus on observability, which is critical for production deployments.
- **Technical Approach Differences:** Unlike Hermes Agent which is rebooting its entire architecture (Reborn v2), or IronClaw which is refactoring its memory layer into a provider-neutral contract, OpenClaw’s approach is more evolutionary, using an “accessor seam” to migrate the session store from file-backed to SQLite. This is lower-risk but creates a complex migration path.
- **Community Size Comparison:** OpenClaw’s volume (500 PRs/188 issues in 24h) dwarfs all other projects, confirming its position as the ecosystem's center of gravity. However, this volume is also its weakness, leading to a massive review backlog.

### 4. Shared Technical Focus Areas

The following needs are emerging across multiple projects:

- **Channel & Delivery Reliability:**
    - **OpenClaw:** Google Chat fix (#89790), Telegram regression (#95822).
    - **NanoBot:** Telegram UI regression (#4470).
    - **Hermes Agent:** Telegram infinite loop (#48648), connection leaks (#31599).
    - **PicoClaw:** WhatsApp reconnection (#3162), QQ channel token timeout (#3015).
    - *Shared Need:* The Telegram integration is a specific pain point for the ecosystem. A standardized, robust Telegram adapter module that could be reused across projects would be valuable.

- **Provider Compatibility (Non-Anthropic):**
    - **OpenClaw:** Ollama streaming (#94251), DeepSeek cache hit rate (#94518).
    - **NanoBot:** Endless tool loops on local models (#2298).
    - **PicoClaw:** Doubao Seed tool call corruption (#3154).
    - **IronClaw:** Schema mismatch and provider crashes.
    - **CoPaw:** Custom OpenAI compatibility (#5345), DeepSeek freeze (#5328).
    - *Shared Need:* The ecosystem is still heavily optimized for Anthropic/OpenAI providers. There is a clear and widespread user demand for robust, cost-effective local and third-party provider support.

- **Security Hardening:**
    - **OpenClaw:** Gateway auth rate limiter (#96224).
    - **IronClaw:** Background skill file modification fix (#51581).
    - **PicoClaw:** Cross-site request protection (#3160), exec sandboxing (#3161).
    - **ZeroClaw:** Plugin env_read allowlist (#5919), SSRF protection.
    - *Shared Need:* As agents become more autonomous, the community is rapidly investing in guardrails to prevent resource exhaustion, data leaks, and malicious modifications.

- **Memory & State Persistence:**
    - **OpenClaw:** Path 3 SQLite migration (#88838).
    - **NanoBot:** Memory consolidation and wiki writing (#4477).
    - **IronClaw:** Memory layer refactored into a provider-agnostic contract (#5163).
    - **CoPaw:** Memory lifecycle management (#3995), high idle memory usage (#5441).
    - *Shared Need:* A tier-1 priority. Projects are evolving from simple, fragile file-based storage to robust, migratable database and extension-based architectures.

### 5. Differentiation Analysis

| Feature Focus | Projects & Profile |
| :--- | :--- |
| **Reference Platform / "Hub"** | **OpenClaw** – Broadest integration, largest dev community, but also the most complexity and stability overhead. |
| **Developer & TUI-First** | **Hermes Agent** & **ZeroClaw** – Heavy focus on terminal experience, developer workflows (ACP), and low-code controls. |
| **Lightweight / Mobile** | **NanoBot, NanoClaw, PicoClaw** – Optimized for resource-constrained environments (Android, web mobile). PicoClaw specifically targets low-cost hardware (SiPEED). |
| **Enterprise & Stability** | **IronClaw** – Focused on a stable, production-ready Reborn (v2) architecture with a strong emphasis on testing and security. |
| **Consumer / UX Polish** | **CoPaw** – Strong emphasis on mobile responsiveness, UI/UX, and Chinese market integrations (DingTalk, QQ, WeChat). |
| **Inactive / Niche** | **Moltis, TinyClaw, ZeptoClaw, NullClaw** – Low activity suggests these are either stable, abandoned, or niche experiments. |

### 6. Community Momentum & Maturity

- **Tier 1 (Rapidly Iterating / High Momentum):** **OpenClaw, IronClaw, ZeroClaw, CoPaw.** These projects see hundreds of PRs and issues daily. They are pushing major architectural changes but also dealing with significant regressions. IronClaw's "Reborn v2" is a major example of this high-risk, high-reward state.
- **Tier 2 (Stabilizing / Focused Maintenance):** **NanoBot, PicoClaw, NanoClaw.** These projects are shipping focused patches and features. They have less overall activity but a higher ratio of fixes to bugs, suggesting they are approaching a stable milestone.
- **Tier 3 (Stuck / Low Activity):** **LobsterAI, NullClaw.** These projects have critical user issues or long-standing feature PRs with no maintainer action, risking contributor burnout and user churn. LobsterAI is the most acute case with an 82-day-old crash.
- **Tier 4 (Inactive):** **Moltis, TinyClaw, ZeptoClaw.** No activity suggests these are effectively in a dormant or abandoned state.

### 7. Trend Signals

1.  **The "Provider Lock-in" Backlash:** User feedback overwhelmingly points to frustration with model provider fragility. The ecosystem is actively working to de-risk Anthropic/OpenAI dependency by improving local model support (Ollama, DeepSeek, Groq) and building provider-agnostic gateways (LiteLLM in LobsterAI). This trend **increases value for developers**, as it means OpenClaw, IronClaw, etc., are being architected for choice.

2.  **The Rise of the Autonomous Cron Agent:** Multiple projects (OpenClaw #71712, IronClaw #5122/783, CoPaw #5064) are investing heavily in scheduled, agent-controlled tasks. This moves agents from "chatbots" to "digital workers." The ability for an agent to set its own cron jobs is a **key value driver for developers** building automation and self-organizing AI systems.

3.  **Security is Shifting from "User-Denied" to "Kernel-Prevented":** Early security models relied on user approval gates (e.g., "Allow command?"). The new trend is proactive, kernel-level prevention: env_read allowlists (ZeroClaw), SSRF policies (OpenClaw, ZeroClaw), and background process quarantine (IronClaw). This is **critical for AI agent developers** deploying agents in production or untrusted environments, as it provides a safety net beyond user vigilance.

4.  **Platform Parity 2.0 (Windows & Mobile):** While Linux and macOS were default targets, the community is now demanding robust Windows (scheduled task stability in Hermes #38387, shell quoting in ZeroClaw) and mobile support (PWA in NanoBot, Termux issues in PicoClaw, mobile CSS in CoPaw). This is a **clear signal for developer consideration**, ensuring their infrastructure plays well with a wider user base.

5.  **The Memory/State Singularity:** Every major project is refactoring how agent state is stored. The move from file-based to SQLite to pluggable memory extensions (IronClaw) points to a future where agent memory is as robust and queryable as a database. For AI agent developers, this means they can build agents with genuine long-term knowledge and context, rather than fragile context windows.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the **NanoBot Project Digest** structured from the provided GitHub data for **2026-06-24**.

---

# NanoBot Project Digest | 2026-06-24

## 1. Today's Overview
NanoBot is showing **very high development velocity** today, with **39 Pull Requests** updated and **1 new release** (v0.2.2) going live. The project is in a **heavy integration and polish phase**, with a strong focus on **providers** (adding support for Kimi Coding and OpenCode), **WebUI** (PWA support and mobile gestures), **memory systems** (consolidation and wiki writing), and **stability fixes**. The close of **4 bugs** today alongside the new release suggests the team is addressing real user friction. The open issue count remains manageable, though attention is needed on a few long-standing design problems (e.g., endless tool loops).

## 2. Releases
- **v0.2.2** (New, updated 2026-06-23)
  - **Headline:** **Durability**. WebUI conversations now survive real-world interruptions better.
  - **Details:** Transcripts are segmented instead of living in a single fragile file; forked chats preserve replies more reliably.
  - **PR Count:** 140 PRs merged since last release.
  - **Contributors:** 21 new contributors.
  - **Migration Notes:** No breaking changes or migration steps disclosed in the summary; the release appears to be a stability and quality-of-life upgrade.
  - ⚠️ Note: Users have reported regressions in Telegram (line breaks, flickering) post-upgrade (see Bugs section).

## 3. Project Progress
Merged/Closed PRs today (7 total) indicate strong forward momentum:
- **🛠 Provider Fix:** `#4474` (zpljd258) – [PR](https://github.com/HKUDS/nanobot/pull/4474) – Fixed duplicate `tool_use` IDs in AnthropicProvider when hitting Kimi Coding endpoints.
- **🧪 Testing:** `#4393` (yu-xin-c) – [PR](https://github.com/HKUDS/nanobot/pull/4393) – Added end-to-end regression tests for git commands in workspace subdirectories.
- **🧠 Memory:** `#4387` (yu-xin-c) – [PR](https://github.com/HKUDS/nanobot/pull/4387) – Fixed context fallback to default memory bootstrap when project-local files (SOUL.md/USER.md) are missing.
- **🌐 WebUI:** `#4458` (zpljd258) – [PR](https://github.com/HKUDS/nanobot/pull/4458) – PWA support (marked invalid/closed, likely superseded by `#4480`).
- **CI/CD:** `#4417` (yu-xin-c) – [PR](https://github.com/HKUDS/nanobot/pull/4417) – Fixed flaky MCP timeout test by using a resolvable URL.

## 4. Community Hot Topics
- **#2298 – Breaking endless tool calling loops** ([Issue](https://github.com/HKUDS/nanobot/issues/2298)) – Still open after 3 months, with 5 comments. This is the **most active open issue**.
  - *Underlying need:* Smaller/local models frequently get stuck repeating the same tool call. The community wants a circuit-breaker or loop-detection heuristic.

- **#4470 – Telegram display bug** ([Issue](https://github.com/HKUDS/nanobot/issues/4470)) – Opened today, already has a fix PR (#4472).
  - *Underlying need:* Users rely on Telegram as a primary interface; post-v0.2.2, formatting regressions are hurting UX significantly.

- **#4463 – Kimi Coding Plan support** ([Issue](https://github.com/HKUDS/nanobot/issues/4463)) – A feature request for subscription users. Triggered a cascade of fixes (PR #4474) and new provider work.
  - *Signal:* The community wants deeper integration with **paid, coding-specific API endpoints**.

## 5. Bugs & Stability
| Severity | Issue | Summary | Fix Status |
|----------|-------|---------|------------|
| 🔴 **High** | [#4470](https://github.com/HKUDS/nanobot/issues/4470) | Telegram v0.2.2 regression: line breaks ignored, message flickering. | Fix PR [#4472](https://github.com/HKUDS/nanobot/pull/4472) open. |
| 🟠 **Medium** | [#4465](https://github.com/HKUDS/nanobot/issues/4465) | `<thinking/>` tags rendered as visible text in WebUI. | No fix PR yet. |
| 🟠 **Medium** | [#4442](https://github.com/HKUDS/nanobot/issues/4442) (via #4444) | Duplicate `tool_use` IDs causing Anthropic 400 errors. | Fix PR [#4444](https://github.com/HKUDS/nanobot/pull/4444) open. |
| 🟡 **Low** | [#4410](https://github.com/HKUDS/nanobot/issues/4410) | Heartbeat cron sending messages even when instructed not to. | Closed, likely fixed. |
| 🟢 **Closed** | [#4473](https://github.com/HKUDS/nanobot/issues/4473) | Duplicate tool_use IDs (Kimi Coding). | Fixed in PR [#4474](https://github.com/HKUDS/nanobot/pull/4474). |

## 6. Feature Requests & Roadmap Signals
- **PWA & Mobile Native Feel** – [#4479](https://github.com/HKUDS/nanobot/issues/4479) / PR [#4480](https://github.com/HKUDS/nanobot/pull/4480): Service worker, manifest, and mobile swipe gestures. **Likely for next release** (high contributor activity).
- **OpenCode Provider Additions** – [#4475](https://github.com/HKUDS/nanobot/issues/4475) / PR [#4476](https://github.com/HKUDS/nanobot/pull/4476): Zen & Go tiers. **Likely for next release** (low complexity).
- **Memory Wiki / Lifecycle Writer** – PR [#4477](https://github.com/HKUDS/nanobot/pull/4477): Adds a persistent wiki under `memory/wiki/`. Signals a push toward **long-term, curated memory**.
- **Cron Job Model Presets** – PR [#4416](https://github.com/HKUDS/nanobot/pull/4416): Per-job model overrides without mutating the agent. High priority for advanced automation users.
- **Subagent Model Override** – PR [#4415](https://github.com/HKUDS/nanobot/pull/4415): Allows `spawn` to specify a different model. Signals growing **multi-agent architecture** maturity.

## 7. User Feedback Summary
- **Pain Points:**
  - **Telegram UX degraded** post-v0.2.2 (#4470): Users are annoyed by formatting regressions and flickering.
  - **Endless tool loops** (#2298): Persistent pain for users of smaller/local models—many upvotes expected but low engagement from maintainers.
  - **Dream skill duplication** (#4467): Users who manually curate skills find `Dream` overwriting work each run, indicating a lack of "upsert/merge" logic.
- **Use Cases:**
  - **Mobile-first users** are pushing for PWA and swipe gestures (#4479).
  - **Subscription API users** want dedicated supports for Kimi Coding (#4463) and OpenCode (#4475).
- **Satisfaction:** The "durability" focus of v0.2.2 is appreciated, though the Telegram regression dampens sentiment.

## 8. Backlog Watch
| Item | Type | Last Updated | Days Stale | Risk |
|------|------|-------------|------------|------|
| [#2298](https://github.com/HKUDS/nanobot/issues/2298) – Endless tool loops | Issue | 2026-06-23 | **96 days** | 🔴 High – No maintainer response; ongoing user frustration with local models. |
| [#2305](https://github.com/HKUDS/nanobot/issues/2305) – Hide reasoning steps display | Issue (Closed) | 2026-06-23 | N/A (closed) | 🟢 Resolved or superseded. |
| [#4402](https://github.com/HKUDS/nanobot/pull/4402) – Eager memory consolidation | PR | 2026-06-23 | 6 days | 🟡 Medium – Large feature PR; waiting for review/merge. |

**Maintainer attention needed:** **Issue #2298** is the most critical backlog item—no maintainer comment in 3 months despite being a top usability blocker. The community may perceive this as a blind spot.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — June 24, 2026

## Today's Overview

Hermes Agent is experiencing an intense period of development and maintenance, with **50 issues and 50 PRs updated in the last 24 hours** — significantly above the project's normal activity level. The project maintains a healthy **open-to-closed ratio** of roughly 3:1 for issues and 2.8:1 for PRs, indicating active triage alongside new work. No new releases were published today, suggesting the team is focusing on bug fixes and feature branches ahead of the next version. The issue tracker shows substantial community engagement, particularly around gateway stability and security boundaries.

## Releases

No new releases were published today.

## Project Progress

**13 PRs were merged or closed today**, including several high-priority fixes and feature work:

- **#14** — Closed: General stability and speed improvements for the web tool (teknium1)
- **#46464** — Merged: Animated pet mascots now available across CLI, TUI, and desktop — a significant UX feature
- **#45599** — Closed: Windows gateway scheduled task fix — the `.cmd` wrapper and schtasks XML settings now properly survive reboot
- **#31599** — Closed: Telegram adapter HTTPX connection pool leak fix
- **#51572** — Closed: Gateway-side implementation of the Phase 5 going-idle/buffered-flip primitive for scale-to-zero support
- **#51575** — Closed: Desktop stop-button popup now corrected to reference the proper `/stop` command instead of non-existent `/interrupt`

Feature work advancing today includes security hardening (#51581 quarantining background self-modification), gateway telemetry improvements (#51590), and a new Turso memory backend (#51591).

## Community Hot Topics

The following issues and PRs generated the most discussion and engagement:

1. **[#5257: Generalized ACP client for multi-agent CLI orchestration](https://github.com/NousResearch/hermes-agent/issues/5257)** — 11 comments, 16 👍
   *A long-standing feature request (since April) that remains the most-upvoted open issue. The community is eager for Hermes to orchestrate third-party ACP agents beyond just Copilot, including Claude Code and Cursor. This reflects a strategic desire for Hermes to become an agent orchestration hub.*

2. **[#43083: Password masking breaks when model reads own conversation history](https://github.com/NousResearch/hermes-agent/issues/43083)** — 8 comments
   *A security-sensitive bug where `***` replacement of credentials happens too late — the model sees its own prior redacted calls and fails on subsequent tool invocations. This is a "needs-decision" tagged issue, indicating the maintainers are evaluating the architectural approach.*

3. **[#38387: Windows gateway blank console window](https://github.com/NousResearch/hermes-agent/issues/38387)** — 8 comments, 1 👍
   *A recurring Windows usability issue where Scheduled Task leaves a blank terminal visible. The community is actively diagnosing the `pythonw` -> `python.exe` redirect behavior — a critical issue for Windows production deployments.*

4. **[#19566: OpenAI-Codex credential pool drops newly added credentials during rotation](https://github.com/NousResearch/hermes-agent/issues/19566)** — 8 comments, 1 👍
   *A persistent auth stability issue where concurrent credential rotation can silently lose credentials. Tagged P1 and security-boundary — this is a high-impact reliability concern for multi-process deployments.*

5. **[#48648: Telegram infinite streamed message duplication loop](https://github.com/NousResearch/hermes-agent/issues/48648)** — 6 comments, 1 👍
   *A critical Telegram bug where messages exceeding 4096 characters trigger an infinite reply loop. The community has identified the root cause in the gateway's overflow-split logic.*

## Bugs & Stability

**P0/Critical:**
- **[#51585](https://github.com/NousResearch/hermes-agent/pull/51585)**: Content-address `prompt_cache_key` fix for cron jobs — currently open as a P0 fix PR. Cron job sessions used `session_id` as cache key, causing providers to miss prefix cache and waste tokens on every execution.

**P1/High:**
- **[#19566](https://github.com/NousResearch/hermes-agent/issues/19566)**: OpenAI-Codex credential pool loses recently added credentials during rotation — security-boundary risk, no fix PR yet
- **[#48648](https://github.com/NousResearch/hermes-agent/issues/48648)**: Telegram infinite message duplication on 4096-char overflow — no fix PR yet, root cause identified
- **[#51579](https://github.com/NousResearch/hermes-agent/issues/51579)**: Docker gateway config migration strips `.env` on every container start — regression of #26804, critical for Telegram deployment
- **[#49106](https://github.com/NousResearch/hermes-agent/issues/49106)**: Web/WeChat sessions leak history across different sessions — requires full app restart to clear
- **[#51587](https://github.com/NousResearch/hermes-agent/issues/51587)**: MCP server tools connect but never surface into agent's session toolset — "needs-repro" tagged

**P2/Medium (with active fixes):**
- **[#43083](https://github.com/NousResearch/hermes-agent/issues/43083)**: Password redaction timing bug in conversation history
- **[#51581](https://github.com/NousResearch/hermes-agent/pull/51581)**: Fix for background-review daemon directly modifying skill files without approval — a security incident response PR
- **[#51560](https://github.com/NousResearch/hermes-agent/issues/51560)**: `fallback_providers` as JSON string silently empties fallback chain
- **[#51588](https://github.com/NousResearch/hermes-agent/pull/51588)**: Desktop memory provider config not scoped to active profile — fix PR open

**P3/Low:**
- Desktop build fails on Windows with 389 TypeScript errors (#38146)
- `computer_use` cannot find Qt6 apps like FreeCAD (#51578)
- Kanban worker on Windows exits before completing, causing false crash reports (#42289)
- Desktop stop-button popup references non-existent `/interrupt` (#51575 — fix PR merged today)

## Feature Requests & Roadmap Signals

**High-signal feature requests:**

1. **[#5257](https://github.com/NousResearch/hermes-agent/issues/5257)**: Generalized ACP client (16 👍) — Extending ACP orchestration beyond Copilot to support Claude Code, Cursor, and custom ACP agents. Expect this in the next release; the concept aligns with Hermes's positioning as an agent hub.

2. **[#29299](https://github.com/NousResearch/hermes-agent/issues/29299)**: HTTPS OAuth callback URL support (1 👍) — Critical for enterprise MCP integrations where OAuth providers reject `http://localhost` callbacks. Salesforce MCP specifically blocks it.

3. **[#46464](https://github.com/NousResearch/hermes-agent/pull/46464)**: Animated pet mascots — Just merged today. This UX feature brings animated sprites to CLI/TUI/Desktop that react to agent state.

4. **[#47959](https://github.com/NousResearch/hermes-agent/pull/47959)**: Pet generation guide — Extends the pet system with a GUI generation flow from Cmd+K. Still open; likely follow-up to #46464.

5. **[#8427](https://github.com/NousResearch/hermes-agent/pull/8427)**: Vertex AI provider for Gemini — Open since April, still awaiting merge. Enterprise Google Cloud users are blocked on this.

6. **[#22648](https://github.com/NousResearch/hermes-agent/pull/22648)**: Ollama Cloud as plugin-based web search provider — A major architectural addition still open after rebase.

**Next-version predictions:** The ACP client generalization (#5257) and HTTPS OAuth (#29299) are the strongest signals for the next release. The pet system (#46464) is likely to ship soon as it just merged. Gateway crash-loop telemetry (#51590) suggests infrastructure reliability is a priority.

## User Feedback Summary

**Pain points (recurring themes):**

- **Platform reliability**: Windows users repeatedly report scheduled task failures (#45599, #38387), and macOS/Linux users report connection leaks (#31599)
- **Security gaps**: Users express frustration that Tirith's approval gate only covers shell commands, not `write_file` or `send_message` (#35357)
- **Telegram gateway instability**: Multiple high-impact bugs (infinite loops #48648, stuck typing indicators #28004, duplicate messages #47237) indicate the Telegram integration is fragile
- **MCP tool integration**: Tools connect and enable but never appear in sessions (#51587) — a fundamental integration failure
- **Provider auth issues**: Anthropic OAuth 404 (#51559), credential pool corruption (#19566), and Nous Portal Azure backend errors (#51045)

**Positive signals:**
- Community is actively investing in features like pets (#46464, #47959) and Docker container optimization (#51024, #51592)
- Users are providing detailed root cause analyses with reproduction steps on complex bugs
- Several users expressing interest in enterprise-grade features (OAuth, credential pools, deployment reliability)

## Backlog Watch

**Long-unanswered or neglected items needing maintainer attention:**

1. **[#5257](https://github.com/NousResearch/hermes-agent/issues/5257)**: Generalized ACP client feature — Created April 5, 2026 (80 days open). 16 upvotes, active discussion, no milestone assigned. *Highest-value community feature request.*

2. **[#8427](https://github.com/NousResearch/hermes-agent/pull/8427)**: Vertex AI provider — Created April 12 (73 days open). No reviewer assigned. *Enterprise Google Cloud users are blocked.*

3. **[#22648](https://github.com/NousResearch/hermes-agent/pull/22648)**: Ollama Cloud plugin — Created May 9 (46 days open). Rebasing resolved conflicts, but still awaiting review.

4. **[#25758](https://github.com/NousResearch/hermes-agent/issues/25758)**: Ollama `reasoning_effort: none` ignored — Created May 14 (41 days open). Causes 65k token/28-minute spirals. *Serious performance bug for local deployments.*

5. **[#35357](https://github.com/NousResearch/hermes-agent/issues/35357)**: Tirith approval gate bypass for non-shell tools — Created May 30 (25 days open). *Security boundary concern with no assignee.*

6. **[#26044](https://github.com/NousResearch/hermes-agent/issues/26044)**: Tirith fails to install on Windows — Created May 15 (40 days open). Blocks security scanning on the platform.

7. **[#38146](https://github.com/NousResearch/hermes-agent/issues/38146)**: Desktop installer fails with 389 TS errors — Created June 3 (21 days open). *Blocks new Windows desktop adopters.*

**Maintainer attention summary:** The project is actively triaging new issues, but several high-value feature PRs (#8427, #22648) remain unreviewed for 6+ weeks. Security-related issues (#35357, #26044) lack assignees despite being tagged as security risks. The generalized ACP client (#5257) is the most-voted community request but has no milestone, which may lead to contributor frustration.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Date:** 2026-06-24  
**Analysis Period:** Last 24 hours (2026-06-23 to 2026-06-24)

---

## 1. Today's Overview

PicoClaw saw **moderately high activity** in the past 24 hours, with 17 pull requests updated, 6 of which were merged or closed, and 3 issues updated (2 open, 1 closed). The project's pulse is strong, driven by both community contributors and maintainers. Key themes include **platform stability improvements** (Windows, Android/Termux), **security hardening** (cross-site request protection, exec sandboxing), and **platform integration expansions** (AWS Bedrock, Android ADB). No new releases were cut today, but the volume of merged fixes suggests a new patch release may be imminent.

---

## 2. Releases

**No new releases** were published in the last 24 hours. The latest available version remains **v0.2.9**.

*Maintainer signal:* The project has 6 merged/closed PRs today and several open ones nearing completion. A v0.2.10 or v0.3.0 release is likely in the coming days.

---

## 3. Project Progress

**6 pull requests were merged or closed today**, including several significant fixes:

| Status | PR | Scope |
|--------|-----|-------|
| 🟢 Merged | [#3162](https://github.com/sipeed/picoclaw/pull/3162) **fix(whatsapp): add reconnection and async message processing** | **WhatsApp channel stability overhaul**: added goroutine-based message handling, keepalive pong responses, read deadlines, and exponential backoff auto-reconnection. Fixes persistent WebSocket disconnection issues. |
| 🟢 Merged | [#3154](https://github.com/sipeed/picoclaw/pull/3154) **fix(openai_compat): recover Doubao Seed tool calls leaked as XML** | Fixed LLM compatibility for Volcengine Doubao Seed model, where tool calls were embedded as raw XML in `message.content` instead of using standard `tool_calls` field. |
| 🟢 Merged | [#3059](https://github.com/sipeed/picoclaw/pull/3059) **fix: explicitly ignore Close() errors** | Cleaned up linter warnings across `shell.go`, `http_retry.go`, and other resource handling paths. |
| 🟢 Merged | [#3054](https://github.com/sipeed/picoclaw/pull/3054) **fix(line): add ok checks for sync.Map type assertions** | Fixed potential panic in LINE channel's `Send` method by adding safe type assertion guards. |
| 🟢 Merged | [#3047](https://github.com/sipeed/picoclaw/pull/3047) **fix(web): restore full JSONL history for session detail** | Fixed session detail endpoint to show archived messages (previously hidden by `meta.Skip`). |
| 🟢 Merged | [#2888](https://github.com/sipeed/picoclaw/pull/2888) **Fix/tool config load image reaction** | Older branch merged—fixes image reaction loading in tool config. |

**Key feature advancement:** The WhatsApp channel now has robust reconnection logic—a major quality-of-life improvement for users relying on WhatsApp as a primary interface.

---

## 4. Community Hot Topics

### Most Active Discussions

1. **[#3015 [CLOSED] QQ Channel Connection Failure on Windows](https://github.com/sipeed/picoclaw/issues/3015)** — *4 comments*
   - *Root need:* Windows users of the QQ channel (popular in China) are unable to connect due to token retrieval timeouts. The issue was resolved after community discussion but highlights a gap in Windows-specific testing for Chinese platform integrations.

2. **[#3159 [OPEN] Frequent Task Repetition Bug](https://github.com/sipeed/picoclaw/issues/3159)** — *0 comments but potentially viral*
   - *Root need:* User on Debian 13 with DeepSeek-v4 reports the agent re-executes previous tasks when asked new questions. This suggests a context/caching issue in the conversation management loop—could affect all users doing multi-turn tasks.

3. **[#3164 [OPEN] Process Hooks Crash on Android/Termux](https://github.com/sipeed/picoclaw/issues/3164)** — *0 comments, filed today*
   - *Root need:* Android users are unable to use process hooks (JSON-RPC over stdio), a core extensibility feature. Even minimal hooks crash the gateway within 2 seconds. This is a showstopper for Android power users.

### PR with Strong Signal
- **[#3157 [OPEN] feat: add Android ADB remote operations tool](https://github.com/sipeed/picoclaw/pull/3157)** by danmobot — This experimental tool (device listing, screenshots, UI hierarchy, tap/swipe) signals growing interest in **device automation** use cases beyond pure chat.

---

## 5. Bugs & Stability

### High Severity

| Issue | Description | Status | Fix PR? |
|-------|-------------|--------|---------|
| [#3164](https://github.com/sipeed/picoclaw/pull/3164) | **Process hooks crash gateway on Android/Termux (v0.2.9)** — Even "hello world" hooks die within 2s | 🔴 Open, no fix | None yet |
| [#3159](https://github.com/sipeed/picoclaw/pull/3159) | **Frequent task repetition** — Agent redoes previous tasks during new conversations | 🔴 Open, no fix | None yet |

### Medium Severity
- **[#3015](https://github.com/sipeed/picoclaw/issues/3015)** — QQ channel token timeout on Windows *(closed today, presumably resolved)*

### Fixed Today
- **[#3154](https://github.com/sipeed/picoclaw/pull/3154)** — Doubao Seed tool calls leaking as raw XML (tool-call corruption in LLM output)
- **[#3162](https://github.com/sipeed/picoclaw/pull/3162)** — WhatsApp WebSocket disconnections (now has auto-reconnection)
- **[#3059](https://github.com/sipeed/picoclaw/pull/3059), [#3054](https://github.com/sipeed/picoclaw/pull/3054)** — Linter warnings and potential panics in LINE channel

---

## 6. Feature Requests & Roadmap Signals

### New Features in Development (Open PRs)

| PR | Feature | Maturity | Likely for Next Release? |
|----|---------|----------|--------------------------|
| [#3163](https://github.com/sipeed/picoclaw/pull/3163) | **AWS Bedrock prompt caching** via cache points — reduces LLM costs 10x on cached prompts | ✅ Ready, authored by maintainer | **Yes** |
| [#3157](https://github.com/sipeed/picoclaw/pull/3157) | **Android ADB remote operations tool** — device management via ADB | 🧪 Experimental | Unlikely (needs testing) |
| [#3118](https://github.com/sipeed/picoclaw/pull/3118) | **Remote Pico WebSocket mode** for `picoclaw agent` | 🧪 In review | **Likely** |
| [#3115](https://github.com/sipeed/picoclaw/pull/3115) | **Fix inline data URL media extraction** — prevents corrupted session history from tools like `exec` | ✅ Ready | **Yes** |
| [#2975](https://github.com/sipeed/picoclaw/pull/2975) | **Telegram: treat reply to bot as mention** in group chats | 🧪 Stale, since May 30 | Unclear |

### Predicted Roadmap Items
- **Cost optimization** — Bedrock caching (#3163) points to enterprise demand for cheaper LLM usage
- **Device control** — ADB tool (#3157) suggests a "AI agent for device QA/testing" use case
- **Platform resilience** — Three platform-specific fixes in one day (Windows QQ, Android hooks, WhatsApp reconnection) indicate a push toward v1.0-grade stability

---

## 7. User Feedback Summary

### Pain Points
- **Android users are blocked** — The process hooks crash (#3164) is a "cannot use at all" bug for the Termux community
- **Task repetition is confusing** — User [#3159](https://github.com/sipeed/picoclaw/issues/3159) asks for news about France, gets the US task repeated first—this undermines trust in the agent's memory
- **Chinese platform integration is fragile** — QQ channel on Windows required a closed issue with multiple comments to resolve
- **WhatsApp users were silently losing connections** — Until today's fix, disconnections were invisible

### Satisfaction Signals
- **WhatsApp channel stability fix** (#3162) directly addresses a long-standing user complaint
- **Session history restoration** (#3047) means users can now access archived transcripts
- **Security posture** — Cross-site request protection (#3160) and exec sandbox deny-pattern hardening (#3161) show proactive security work

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Problem |
|-------|-----|---------|
| [#3164](https://github.com/sipeed/picoclaw/issues/3164) | 1 day | **Android hooks crash** — no response yet from maintainers |
| [#3159](https://github.com/sipeed/picoclaw/issues/3159) | 1 day | **Task repetition bug** — no response yet |
| [#2975](https://github.com/sipeed/picoclaw/pull/2975) | **25 days** | **Telegram "reply as mention" feature** — open since May 30, no merge. This is a simple, non-breaking UX improvement that increases bot usability in group chats. |

### Stale Items Recently Closed
- [#3015](https://github.com/sipeed/picoclaw/issues/3015) — QQ channel Windows bug (closed today, ~18 days old)
- [#3059](https://github.com/sipeed/picoclaw/pull/3059), [#3054](https://github.com/sipeed/picoclaw/pull/3054) — Code cleanup PRs (merged, ~15 days old)

### Observation
The project has a healthy **closed-to-open ratio** today (6 closed vs 11 open PRs), suggesting active maintenance. However, the two new issues (#3164, #3159) are both "broken core functionality" bugs that should receive a maintainer response within 24 hours.

---

**Verdict:** PicoClaw is in a **stability sprint** phase—multiple platform-specific bugs are being fixed, security is being hardened, and cost-optimization features are being added. The project remains actively maintained but faces a growing debt of Android compatibility issues.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-24

## 1. Today's Overview

NanoClaw saw moderately high activity today with **12 pull requests** updated in the last 24 hours (8 merged/closed, 4 open) and **1 open issue** reported. The project is in a **healthy development cycle** with focused work across three fronts: a major Chat SDK version bump to 4.29.0 across all branches, the addition of Slack Socket Mode for improved deployment flexibility, and foundational extension-point architecture for downstream forks. Security-conscious container improvements and a new provider router skill also moved forward. With zero new releases, these merged changes are expected to land in the next version increment.

## 2. Releases

**No new releases** were published in the last 24 hours. The flurry of dependency bumps and feature work appears targeted at a future 4.29.0-compatible release.

## 3. Project Progress

**8 pull requests were merged or closed today**, spanning infrastructure, features, and dependency hygiene:

- **Chat SDK 4.29.0 Migration (complete across all branches):**
  - [#2834](https://github.com/nanocoai/nanoclaw/pull/2834) — Core `main` branch moved to Chat SDK 4.29.0, including all channel-adapter pins
  - [#2835](https://github.com/nanocoai/nanoclaw/pull/2835) — Companion channels branch bump to matched 4.29.0
  - [#2836](https://github.com/nanocoai/nanoclaw/pull/2836) — Providers registry branch also bumped to 4.29.0
  - [#2839](https://github.com/nanocoai/nanoclaw/pull/2839) — Clean rebase of Slack Socket Mode onto channels after the SDK bump merge timing

- **New Feature — Slack Socket Mode:**
  - [#2837](https://github.com/nanocoai/nanoclaw/pull/2837) — Entirely new Slack adapter mode using outbound WebSocket (`SLACK_APP_TOKEN`), enabling local dev and NAT-friendly setups *without a public endpoint*. This is a significant deployment UX improvement.

- **Extension-Point Architecture (discarded duplicate):**
  - [#2841](https://github.com/nanocoai/nanoclaw/pull/2841) — First attempt at `registerX()/applyX()` seams (closed, superseded by #2842)

- **Skill Update User Experience:**
  - [#2826](https://github.com/nanocoai/nanoclaw/pull/2826) — Fixes `/update-nanoclaw` flow: skill updates are no longer optional/skippable, and container rebuild is enforced on re-apply

- **PR Guideline Compliance Cleanup:**
  - [#2833](https://github.com/nanocoai/nanoclaw/pull/2833) — Closed as a follow-guidelines hygiene PR

## 4. Community Hot Topics

*No issues or PRs received significant comments or reactions today.* Activity is primarily maintainer-driven rather than community discussion. The most notable items by nature:

- **#2840 (Issue — Slack Port Conflict):** The only open issue this period flags a real deployment pain point: when using NanoClaw's Slack integration, port 3000 is already bound on the external IP, defeating the purpose of tunneling for secure setup. This signals a design tension between the legacy HTTPS webhook path and the **new Socket Mode** (just merged in #2837) which renders this issue moot by eliminating the need for public endpoints entirely.

## 5. Bugs & Stability

**1 bug reported, low-to-medium severity:**

- **#2840** [OPEN] — **Slack tunnel port conflict (port 3000 pre-bound):** When following the Slack setup instructions, users create a tunnel to port 3000 for secure inbound communication, but NanoClaw v2 already binds port 3000 on the external host IP. This breaks the security model of tunneling.  
  *Severity: Medium for Slack deployments in production.*  
  *Fix status:* **Mitigated by design** — the newly merged Slack Socket Mode (#2837) eliminates the need for public port binding + tunneling entirely.

No crashes, regressions, or other stability issues reported today.

## 6. Feature Requests & Roadmap Signals

**Likely to appear in next release (based on merged/reviewed PRs):**

- **Slack Socket Mode (merged #2837)** — Outbound WebSocket adapter bypassing NAT/public endpoint requirements; likely default in 4.29.0 release
- **Reject-with-reason for approvals (open #2832)** — Module approval cards get a third "Reject with reason…" button, improving agent adaptation to human feedback
- **Extension-point seams (open #2842)** — Generic `registerX()/applyX()` hooks across host + container runtime, enabling downstream forks without modifying upstream code
- **Manifest model router provider (open #2838)** — New provider skill for model routing via manifest-based configuration
- **Container performance (open #2771)** — `--shm-size=1g` and `--init` for agent Docker containers to stabilize headless Chromium in agent-browser integration

**Prediction:** The next release will be a **4.29.0 compatibility release** bundling the SDK bump, Slack Socket Mode, and the extension-point seam infrastructure.

## 7. User Feedback Summary

**Detected pain points:**

- **Slack setup friction (#2840):** User `sirpy` reports that the recommended tunnel-based Slack security setup is invalidated by port 3000 being bound on the external interface. This is a real deployment usability bug for anyone following documentation. The Socket Mode merge (same session) is a direct fix.

**No positive feedback, feature requests, or usability reports were posted today.**

## 8. Backlog Watch

**1 open PR requiring ongoing maintainer attention due to age:**

- **#2771** [OPEN, 9 days old] — `perf(container): --shm-size=1g + --init for agent containers` by `ankushchadha`. This is a straightforward performance/stability improvement for browsers in agent containers. Last updated 2026-06-23 with no comments from maintainers. Low risk, high reward for any deployment running agent-browser. Likely blocked awaiting final review or merge conflicts with container infrastructure changes.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-24

## Today's Overview
Activity on NullClaw was moderate over the past 24 hours. One issue was closed, and one pull request received an update but remains open. No new releases were published. The project is in a steady maintenance and feature-development phase, with a long-running PR (#783) still awaiting merge and a significant bug affecting Windows users recently resolved. Overall project health appears stable, though community engagement on open items is low.

## Releases
No new releases were published in the last 24 hours. The latest available release remains **v2026.5.29**.

## Project Progress
No pull requests were merged or closed in the last 24 hours. The only PR activity is an update to **#783 [OPEN] feat(cron): cron subagent, run history, JSON output, security hardening** by yanggf8 (last updated 2026-06-23). This long-standing PR adds a substantial cron subagent engine with DB-backed scheduling, JSON CLI output, and security hardening. It has been open since April 2026 and continues to see updates, suggesting active development but no final integration yet.

## Community Hot Topics
- **Issue #967 [CLOSED] — [bug] error: NoResponseContent**  
  *[Link](nullclaw/nullclaw Issue #967)*  
  Created by svier0 on 2026-06-20, closed on 2026-06-23, with 2 comments. This issue reported a high-frequency error (>50% occurrence) on Windows 11 when using the Agnes-2.0-Flash model. The user noted the same model worked correctly with picocla. The issue has been resolved, likely addressing a critical Windows-specific interaction problem. It received no reactions, but its closure suggests maintainer attention to stability.

## Bugs & Stability
- **Resolved**  
  - **#967** — `NoResponseContent` error on Windows 11 with Agnes-2.0-Flash model, occurring >50% of interactions. Severity: **High** (frequent failures). Fix was applied and issue closed. No related open PRs were identified, suggesting the fix was either committed directly or merged quickly.

No new bugs were reported in the last 24 hours. The resolution of this high-frequency Windows bug is a positive sign for stability improvements.

## Feature Requests & Roadmap Signals
No new feature requests were submitted in the last 24 hours. The most notable upcoming feature signal is **PR #783** (cron subagent engine), which, if merged, would introduce robust scheduled task capabilities. Given its maturity (open since April, still actively updated), it may be a candidate for the next release.

## User Feedback Summary
- **Pain point (resolved):** Windows 11 users experienced frequent `NoResponseContent` errors with certain models. The user reported >50% failure rate over 21 conversations, indicating a serious reliability concern. The issue’s closure suggests this is now addressed.
- **Use case:** The affected user was running `nullclaw agent` interactively with a local model (Agnes-2.0-Flash). Their satisfaction likely improved with the fix.
- **No other explicit user satisfaction/dissatisfaction signals** were recorded in the last 24 hours.

## Backlog Watch
- **PR #783** *(open since 2026-04-07, last updated 2026-06-23)* — This substantial cron engine feature has been awaiting review and merge for over two months. Despite regular updates, no maintainer activity (comments, approvals) is visible. This is a potential bottleneck for users needing cron capabilities.
- **No long-unanswered issues** are currently outstanding; all open items appear recent or actively maintained.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the **IronClaw Project Digest** for **2026-06-24**.

---

## IronClaw Project Digest: 2026-06-24

### 1. Today's Overview
The project is in a period of **very high activity**, driven largely by "Reborn" (v2) development and bugfixing. 42 pull requests were updated in the last 24 hours, indicating a significant velocity of code changes. While there are no new releases, the focus is on stabilizing the Reborn architecture, with major PRs addressing authentication, context management, and automation support. Community engagement is moderate, with several high-quality bug reports highlighting critical UX friction points in the Reborn beta.

### 2. Releases
**None.** No new releases were published in the last 24 hours.

### 3. Project Progress
Major features and fixes that were merged or closed today include:

- **Automation Lifecycle** (PR #5133, #5122): Merged support for deleting Reborn automations via the WebUI v2 API. Pause/resume support (Issue #5121) was also closed.
- **Slack Integration (WebUI Migration)** (PR #5152, #5166, #5164): The Slack setup process has been moved from TOML configuration into the WebUI, with dynamic routine delivery now wired up. Legacy config fields have been removed (PR #5161).
- **WASM Auth Recovery** (PR #4969): Google Workspace WASM tools (Drive, Docs, etc.) now return structured `auth_required` errors instead of generic failures when OAuth tokens are invalid.
- **E2E Testing Harness** (PR #5155): A new full-path E2E harness using an "Emulate" provider was added for testing calendar and other extensions.
- **Memory Layer Refactor** (PR #5163): The memory layer has been lifted out of the kernel into a provider-neutral contract crate, paving the way for alternative memory backends.

### 4. Community Hot Topics
The most important discussions and contributions focused on **authentication and configuration friction** in the Reborn environment.

- **Gmail Token Validation (Issue #3733)** [👍 0, Comments: 1]: A long-standing bug where entering an invalid Gmail OAuth token shows a "success" toast before immediately failing again. This points to a lack of front-end validation and misleading user feedback. *(Link: `nearai/ironclaw Issue #3733`)*
- **Inconsistent Gmail Auth UX (Issue #3732)** [👍 0, Comments: 1]: Users report seeing different authentication UIs (OAuth link vs. manual token input) for Gmail depending on the conversation thread, presenting a confusing and inconsistent experience. *(Link: `nearai/ironclaw Issue #3732`)*
- **"Always Approve" for Outbound Delivery (Issue #5129)** [👍 0, Comments: 1]: A core contributor reported that the "Always approve" feature is non-functional for `outbound_delivery_target_set`, forcing users to manually approve every delivery attempt despite opting for automation. *(Link: `nearai/ironclaw Issue #5129`)*

### 5. Bugs & Stability
Several new bugs were reported, with **auth and state management issues** being the most critical.

- **Critical: Skills Trigger Vocabulary Denylist (Issue #5169)** [High Severity]: A clean setup of Reborn is broken because a *bundled* skill's documentation contains standard API terms ("Authorization", "Bearer") that trip the safety denylist, causing benign requests to fail as a "temporary system issue." This creates a false positive that breaks core functionality. *(Link: `nearai/ironclaw Issue #5169`)*
- **Critical: Scheduler Heartbeat Self-Deadlock (Issue #5148)** [High Severity]: A running agent turn can get stuck forever (deadlock) when the scheduler heartbeat fires while the executor holds an async store lock. This is a concurrency issue that can completely halt an agent. *(Link: `nearai/ironclaw Issue #5148`)*
- **High: Google Calendar Returns Wrong Events (Issue #4640)** [Medium Severity]: The `list_events` tool lacks a `timeMin` parameter and ordering, so a request for "upcoming meetings" returns the oldest events instead of the newest. *(Link: `nearai/ironclaw Issue #4640`)*
- **Medium: No "Deactivate" Button for Extensions (Issue #5146)** [Medium Severity]: Users on the Extensions page cannot deactivate an active extension, lacking basic lifecycle management in the UI. *(Link: `nearai/ironclaw Issue #5146`)*
- **Flaky Test Blocking CI (Issue #5147)** [Medium Severity]: A test (`trigger_poller_does_not_submit_turn_for_unpaired_actor`) is consistently flaky, blocking PRs from merging. This appears to be a logic error in the test itself, not a regression. *(Link: `nearai/ironclaw Issue #5147`)*
- **Fix in Progress for WASM Auth (PR #5172):** A PR is open to fix the underlying credential delete and reauth logic for Reborn, which should address a class of related auth bugs.

### 6. Feature Requests & Roadmap Signals
The roadmap is clearly focused on **Reborn maturity and developer experience**.

- **Context Management (PR #5149):** A significant PR (XL size) introduces progressive tool disclosure to reduce token usage and latency. This is flag-gated and off by default, but will be a major performance improvement for the next release.
- **Skill Learning with Approval Gate (PR #5156):** This PR lands a safety feature that prevents untrusted transcripts from silently becoming skills. A freshly learned skill will be saved as `pending_review` and require human approval. This is a strong signal of a focus on user security.
- **Model Memory as Extension (PR #5163):** Refactoring memory into a "userland extension" suggests a future where external memory backends (vector databases, etc.) could be pluggable.
- **Prediction for Next Release:** We predict the next minor release will include the **context management system**, the **skill learning approval gate**, and the **automation pause/delete lifecycle features**.

### 7. User Feedback Summary
- **Pain Point #1 (Auth & Credential Handling):** Users are experiencing a fragmented and unreliable authentication experience in Reborn. Input validation is poor (Issue #3733), UIs are inconsistent (Issue #3732), and the "Always Approve" setting is broken (Issue #5129).
- **Pain Point #2 (Data Accuracy):** The Google Calendar tool's default behavior of returning old, unordered events (Issue #4640) is directly counter to the user's primary use case of checking "what's next." This undermines trust in the tool.
- **Pain Point #3 (Tool Reliability):** The scheduler deadlock (Issue #5148) and the false-positive safety denylist (Issue #5169) represent existential blockers for users trying to run autonomous agents reliably.
- **Satisfaction Signal:** The high volume of PRs and the quick closure of automation issues suggest the core team is responsive to internal dogfooding and external feedback on the Reborn architecture.

### 8. Backlog Watch
These items are older but remain unfixed and important:

- **Nightly E2E Continues to Fail (Issue #4108 - Opened 2026-05-27)**: A recurring nightly E2E test has been failing for nearly a month. This indicates a chronic instability in the E2E suite that may be masking regressions. *(Link: `nearai/ironclaw Issue #4108`)*
- **Gmail Token & Auth UX Bugs (Issues #3733 & #3732 - Opened 2026-05-17)**: Both of these bugs have been open for over a month. The fact that they remain open despite being high-friction UX issues suggests they are considered lower priority than the core Reborn architecture work, or are difficult to reproduce/fix. They require maintainer attention.
- **`dist` Tracking in Git (Issue #5167 - Opened 2026-06-23)**: While brand new, this issue highlights a significant developer workflow inefficiency where build artifacts are committed to the repo, causing PR churn. It is a sign of a CI/CD pipeline that needs maturity. *(Link: `nearai/ironclaw Issue #5167`)*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-24

## 1. Today's Overview
Project activity remains **moderate**, with 11 PRs updated in the last 24 hours—a healthy mix of 5 closed/merged and 6 still open. No new releases were published today. The development velocity is concentrated on the **OpenClaw gateway subsystem and Cowork session management**, with several merged fixes targeting cron storage migration, session synchronization, and state clarification. However, the project is carrying **one high-severity open issue (#1400)** from early April that reports a total startup failure after an upgrade, and **six stale PRs** that have not been merged for over two months. Overall, the team is shipping incremental fixes and features but may need to prioritize the blocking regression affecting a user's production environment.

---

## 2. Releases
**None** — no new releases were published today or in the recent period covered by the data.

---

## 3. Project Progress (Merged/Closed PRs Today)
Five PRs were closed or merged today, all from the same contributor (btc69m979y-dotcom) and one from liuzhq1986:

- **PR #2192** (merged) — [feat(cowork): add persistent plan confirmation flow](https://github.com/netease-youdao/LobsterAI/pull/2192)  
  Keeps Plan Mode active per draft/session until user confirms or disables; adds “Confirm execution” and “Adjust plan” actions; routes confirmed execution through default mode with normal skill/kit context restored.

- **PR #2191** (merged) — [fix(scheduled-task): clarify startup state](https://github.com/netease-youdao/LobsterAI/pull/2191)  
  Distinguishes startup/loading/ready/error states in task and history tabs; refreshes cron data immediately after OpenClaw gateway handshake instead of next polling interval.

- **PR #2190** (merged) — [fix(openclaw): sync cron run sessions](https://github.com/netease-youdao/LobsterAI/pull/2190)  
  Recognizes run-scoped cron session keys; normalizes to stable per-agent/per-job cache key; resolves scheduled-task conversation views via normalized cron keys.

- **PR #2189** (merged) — [fix(openclaw): migrate legacy cron storage on startup](https://github.com/netease-youdao/LobsterAI/pull/2189)  
  Detects legacy OpenClaw cron JSON/run-log storage before gateway startup; runs official migration with minimal temporary cron config; syncs cron.store.

- **PR #2188** (merged) — [Liuzhq/rlog](https://github.com/netease-youdao/LobsterAI/pull/2188)  
  (Summary not provided; likely a related OpenClaw/Cowork fix from the same contributor.)

**Key theme**: OpenClaw cron infrastructure is being stabilized with clean migration paths, session key normalization, and clearer UI states.

---

## 4. Community Hot Topics

### Most Active Issue
- **#1400** — [4.1版本严重bug，网关反复启动失败，反复重启，无限循环！](https://github.com/netease-youdao/LobsterAI/issues/1400)  
  *6 comments, no reactions*  
  **Analysis**: This is the **single most critical unresolved issue** in the project. The user reports a total system crash after upgrading from 3.30 to 4.1, with the gateway entering an infinite restart loop. Additionally, the user describes a secondary bug where a custom LLM (qwen3.5-plus) fails with a confusing error about web-extractor. The user provided contact info and is apparently a paying or power user who is completely blocked. The issue has been open since April 3 (82 days) with no maintainer response visible in the digest. **Underlying need**: A clear migration path from v3.30 to v4.1 is missing, and the startup sequence seems to lack proper failure handling for misconfigured or incompatible states.

### Most Active PRs (by implication)
- **PR #2193** (open) — [feat: add LiteLLM as AI gateway provider](https://github.com/netease-youdao/LobsterAI/pull/2193)  
  New feature adding support for 100+ LLM providers through LiteLLM proxy. Freshly created today, no comments yet. High potential interest for users who want to switch providers without code changes.

- **PR #1401** (open, stale) — [fix: 修复请求安全性问题](https://github.com/netease-youdao/LobsterAI/pull/1401)  
  Addresses a security vulnerability where Math.random() is used for SSE request IDs, making them predictable. Proposes switching to crypto.randomUUID(). **No maintainer response for 82 days** despite being a security fix.

---

## 5. Bugs & Stability

| Severity | Bug | Status | Fix PR? |
|----------|-----|--------|---------|
| **CRITICAL** | [#1400] Gateway infinite restart loop after upgrade to v4.1; custom LLM (qwen3.5-plus) cannot be invoked due to web-extractor dependency issue | **Open for 82 days** | None |
| HIGH | [#1401] Predictable SSE request IDs (Math.random()) — security vulnerability allowing data stream hijacking | **Open for 82 days** | PR #1401 (open, stale) |
| MEDIUM | [#1402] Multi-select file attachment only keeps last file in Cowork sessions | **Open for 82 days** | PR #1402 (open, stale) |
| LOW | [#1403] i18n missing `delete` key causes English word to appear in Chinese UI | **Open for 82 days** | PR #1403 (open, stale) |
| LOW | [#1406] Scheduled-task notify dropdown shows no IM entries when no platform is toggled on | **Open for 82 days** | PR #1406 (open, stale) |

**Today's bugs (from merged PRs)**:  
- Legacy cron storage migration was missing on startup (PR #2189).  
- OpenClaw cron sessions were not properly scoped per run, causing session key collisions (PR #2190).  
- Scheduled-task UI did not distinguish startup/ready/error states (PR #2191).  
- Plan Mode did not persist across drafts (PR #2192).  

All four of today's bugs were fixed and merged.

---

## 6. Feature Requests & Roadmap Signals

### New Feature (Merged Today)
- **Persistent Plan Mode** (PR #2192) — Users can now keep Plan Mode active across a session, with explicit confirm/execute/adjust flows. This suggests the team is investing in **structured multi-step task workflows**.

### New Feature (Open PR)
- **LiteLLM as AI Gateway Provider** (PR #2193) — If merged, this would allow users to point to any LiteLLM proxy and access 100+ LLM providers through a single OpenAI-compatible endpoint. This signals a **strategic move toward provider-agnostic architecture**.

### User-Requested Feature (From Issue #1400)
- **Clear upgrade migration path from v3.30 to v4.1** — The user's crash likely stems from incompatible config or missing migration steps. Expect a migration guide or auto-migration script in the next release.

### Stale Feature PR
- **#1404** — [定时任务创建界面时间控件优化](https://github.com/netease-youdao/LobsterAI/pull/1404)  
  Improves the scheduled-task creation UI with custom time pickers and styled dropdowns instead of native OS controls. This is a UX polish request that has been waiting 82 days for review.

### Prediction for Next Version
- Auto-migration of pre-v4.0 cron storage (PR #2189 style)
- LiteLLM provider support (PR #2193)
- Persistent Plan Mode (PR #2192)
- Potential security fix for SSE request IDs (PR #1401) — if maintainers respond

---

## 7. User Feedback Summary

### Satisfied Users
- **PR #2191/#2190 submitters** (btc69m979y-dotcom) — Multiple cron-related fixes were merged today, suggesting the team is responsive to internal or beta-user feedback about scheduled-task reliability.

### Dissatisfied Users
- **danielmonlite** (Issue #1400) — **Completely blocked** from using the application after upgrade. No maintainer response in 82 days. User provided personal contact—this is a high-touch user who is probably a customer or community advocate—and has received no acknowledgement. This is a **relationship risk** for the project.

### Unaddressed Pain Points (Stale PRs)
- **Multiple users** submitted fixes (PRs #1401, #1402, #1403, #1406) over two months ago but none have been reviewed or merged. This could discourage future contributions if contributors feel ignored.

---

## 8. Backlog Watch

### Critical Untouched Issues (82+ days without maintainer response)
1. **Issue #1400** (Gateway crash on v4.1 upgrade) — **Urgent.** The user is blocked and has provided contact info. No maintainer comment. This is the highest-priority item in the entire project.
2. **PR #1401** (Security: predictable request IDs) — Security fix open for 82 days with no review. Potential vulnerability in production deployments.
3. **PR #1402** (Multi-file attachment bug) — UI regression open for 82 days.
4. **PR #1404** (Time picker UX improvement) — Valid UX enhancement waiting 82 days.

### New PRs Needing Initial Review
- **PR #2193** (LiteLLM gateway support) — Fresh today, no comments yet. Should be prioritized given its strategic value.

### Recommendation
The **single most impactful action** for project health today would be **acknowledging and starting a resolution path for Issue #1400**. Even a comment asking for logs or offering a rollback workaround would defuse a user who is likely to abandon the project or post negative reviews. Second, reviewing the **security fix PR #1401** would demonstrate that the maintainers take vulnerability reports seriously.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-24

## 1. Today's Overview

The Moltis project is currently in a low-activity period, with no new issues, no releases, and no open pull requests updated in the last 24 hours. A single PR (#215) was merged on June 23, representing the project's most recent code change. The repository appears stable with no open bug reports or active feature discussions, suggesting the maintainers may be in a consolidation phase following the merge of a notable tooling feature. While zero activity in a day is not alarming, the extended gap between PR creation (February 23) and merge (June 23) warrants attention to project velocity.

## 2. Releases

No new releases were published today. There are no releases on record for the Moltis repository.

## 3. Project Progress

**Merged/Closed PRs (1):**
- **#215 [CLOSED] feat(tools): add send_image tool for channel image delivery** — *Author: [maximilize](https://github.com/maximilize)*  
  Merged on 2026-06-23. This PR introduces a new `send_image` tool that enables skills to send local image files (PNG, JPEG, GIF, WebP) to channel targets such as Telegram. The implementation reuses the existing screenshot pipeline, returning a `data:` URI in the `screenshot` key that the chat runner automatically processes. An optional `caption` parameter is supported.  
  [GitHub Link](https://github.com/moltis-org/moltis/pull/215)

## 4. Community Hot Topics

No issues or PRs with significant comment or reaction activity were observed today. The only PR (#215) received 0 comments and 0 reactions beyond its authors. No underlying community needs can be inferred from the available data.

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported in the last 24 hours. The repository currently has zero open issues, indicating no known stability problems affecting users.

## 6. Feature Requests & Roadmap Signals

No feature requests were submitted today. Based on the trajectory of PR #215, the Moltis team appears focused on expanding skill-to-channel media delivery capabilities. The inclusion of `send_image` suggests future releases may add support for additional media types (video, audio, documents) or extend the tool to more chat platforms beyond Telegram.

## 7. User Feedback Summary

No user feedback, pain points, or use-case descriptions were recorded in the last 24 hours. The absence of open issues and discussion activity makes it impossible to assess user satisfaction or dissatisfaction.

## 8. Backlog Watch

- **PR #215** (merged yesterday) had a 4-month gap between creation (Feb 23) and merge (Jun 23). While now resolved, this extended timeline for a single-tool feature may indicate maintainer bandwidth constraints or review bottlenecks. No other items currently require maintainer attention.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-24

## Today's Overview

CoPaw (formerly QwenPaw) is in an intense development phase with high activity across all dimensions. Today saw **38 issues updated** (28 open, 10 closed) and **50 pull requests updated** (29 open, 21 merged/closed), indicating a strong contributor base and responsive maintainer team. A patch release **v1.1.12.post2** was published. The community is actively filing bugs and feature requests, with particular focus on mobile responsiveness, memory management, stability after migration to AgentScope 2.0, and the experience of non-Chinese users. The frontend testing coverage initiative is making visible progress with dedicated test-only PRs.

---

## Releases

### v1.1.12.post2 — Published 2026-06-23/24
- **Fix:** Navigate to new chat after deleting the current session ([#5376](https://github.com/agentscope-ai/QwenPaw/pull/5376))
- **Feature:** Enhanced file preview to support relative paths in console and chat ([#5377](https://github.com/agentscope-ai/QwenPaw/pull/5377))
- **Fix:** *(changelog truncated in source; additional fixes expected per context)*

**Migration notes:** Hotfix release; no breaking changes or migration steps required.

---

## Project Progress

### Merged/Closed PRs Today (21 closed/merged)

**Mobile Responsiveness (major theme):**
- [#5350](https://github.com/agentscope-ai/QwenPaw/pull/5350) — Chat header mobile responsive improvements (secondary actions collapse into dropdown below 700px)
- [#5366](https://github.com/agentscope-ai/QwenPaw/pull/5366) — Agent Config page mobile CSS layout
- [#5397](https://github.com/agentscope-ai/QwenPaw/pull/5397) — Settings → Models page mobile adaptation (cards, provider display)

**Frontend Testing Coverage (M3 initiative):**
- [#5437](https://github.com/agentscope-ai/QwenPaw/pull/5437) — 14 test files / 171 test cases for Inbox + 11 API modules (zero source changes)
- [#5433](https://github.com/agentscope-ai/QwenPaw/pull/5433) — 19 test files / ~135 test cases for M1 Agent hooks, Settings pure functions and hooks (zero source changes)

**Core/Memory:**
- [#5435](https://github.com/agentscope-ai/QwenPaw/pull/5435) — Memory refactor: removed `language` parameter from `get_memory_prompt()`

**Bug Fixes (AgentScope 2.0 migration):**
- **None today** — but several open PRs target post-merge bugs (see Bugs & Stability section)

---

## Community Hot Topics

### Most Active Issues (by comment count, *last 24h*)

1. **[#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262)** *(Open, 12 comments)* — **[Bug] Upgrades re-enable disabled built-in skills**  
   Recurring pain point for multiple release cycles. User reports skills like `docx`/`xlsx` must be manually disabled after every update. **Underlying need:** Persistent user-settings that survive upgrades.

2. **[#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064)** *(Closed, 12 comments)* — **[Bug] Agent-created cron jobs fail to trigger**  
   Agent-scheduled tasks appear to be created successfully but never execute; also cannot be edited manually. **Underlying need:** Reliable agent-orchestrated timer workflows.

3. **[#5317](https://github.com/agentscope-ai/QwenPaw/issues/5317)** *(Open, 6 comments)* — **[Question] Python not found on Windows Tauri after conda removal**  
   Existing custom skills fail because the environment's Python path is no longer discoverable. **Underlying need:** Robust runtime dependency discovery outside embedded distributions.

4. **[#5345](https://github.com/agentscope-ai/QwenPaw/issues/5345)** *(Open, 6 comments)* — **[Bug] Custom OpenAI-compatible providers don't support function calling**  
   OMLX and other third-party OpenAI API clones work in other tools but not in CoPaw for tool-calling. **Underlying need:** True OpenAI API compatibility for custom providers.

5. **[#5398](https://github.com/agentscope-ai/QwenPaw/issues/5398)** *(Closed, 5 comments)* — **[Bug] Cron scheduler stops dispatching enabled jobs while app lives**  
   Cron jobs for a running agent stopped firing despite process alive and jobs enabled. **Underlying need:** Cron scheduler robustness and observability.

### Most Active PRs (undefined comment count; top by discussion engagement)

- **[#5443](https://github.com/agentscope-ai/QwenPaw/pull/5443)** — Restore TUI ACP commands, status, approvals, diagnostics after AgentScope 2.0 migration
- **[#5321](https://github.com/agentscope-ai/QwenPaw/pull/5321)** — "Scroll" context management strategy (SQLite-backed full conversation persistence + REPL recall)
- **[#5440](https://github.com/agentscope-ai/QwenPaw/pull/5440)** — Post-2.0 migration bug cleanup (CancelledError, unused imports, base exception)
- **[#5368](https://github.com/agentscope-ai/QwenPaw/pull/5368)** — SkillPool mobile responsive layout *(under review)*

---

## Bugs & Stability

### Critical/Severe (likely blocking normal operation)

| Issue | Description | Priority | Fix PR? |
|-------|-------------|----------|---------|
| [#5416](https://github.com/agentscope-ai/QwenPaw/issues/5416) | Models putting response in `thinking`/`reasoning_content` with empty `content` → users see nothing | 🔴 High | None yet |
| [#5328](https://github.com/agentscope-ai/QwenPaw/issues/5328) | DeepSeek agent freezes during thinking — requires manual stop + "continue" | 🔴 High | None yet |
| [#5398](https://github.com/agentscope-ai/QwenPaw/issues/5398) | Cron scheduler stops dispatching enabled jobs while app lives *(Closed as fixed?)* | 🔴 High | ([Closed](https://github.com/agentscope-ai/QwenPaw/issues/5398)) |
| [#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064) | Agent-created cron tasks not triggering *(Closed, invalid?)* | 🔴 High | ([Closed](https://github.com/agentscope-ai/QwenPaw/issues/5064)) |

### Moderate (affecting specific features/environments)

| Issue | Description | Priority | Fix PR? |
|-------|-------------|----------|---------|
| [#5402](https://github.com/agentscope-ai/QwenPaw/issues/5402) | Dream task execution failed for all 3 agents *(Closed)* | 🟡 Medium | ([Closed](https://github.com/agentscope-ai/QwenPaw/issues/5402)) |
| [#5345](https://github.com/agentscope-ai/QwenPaw/issues/5345) | Custom OpenAI providers don't support function calling | 🟡 Medium | None yet |
| [#5373](https://github.com/agentscope-ai/QwenPaw/issues/5373) | Shell command tool fails on pipes, redirection, logical operators | 🟡 Medium | None yet |
| [#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) | Console crashes when opening sessions with large tool-use history | 🟡 Medium | None yet |
| [#5403](https://github.com/agentscope-ai/QwenPaw/issues/5403) | Browser autofill hijacks search input on Model Configuration page | 🟡 Medium | None yet |

### Minor/Nuisance

| Issue | Description |
|-------|-------------|
| [#5421](https://github.com/agentscope-ai/QwenPaw/issues/5421) | Severe lag switching between agents and chat windows |
| [#5379](https://github.com/agentscope-ai/QwenPaw/issues/5379) | `get_remote_addr` error causing "Internal Server Error" on startup after pip install |
| [#5441](https://github.com/agentscope-ai/QwenPaw/issues/5441) | Memory usage 1.4GB at idle startup |
| [#5378](https://github.com/agentscope-ai/QwenPaw/issues/5378) | Custom model endpoint auto-writes into search box, cannot clear |

### Stability Trends

- **AgentScope 2.0 migration cleanup continues** — #5440 removes 1493 lines of dead code and fixes 3 bugs (CancelledError, unused imports, base exception inheritance). Multiple post-merge issues (#5456, #5447) suggest the migration surface is still being polished.
- **Cron/scheduler reliability has had recurring reports** — three related cron issues (#5064, #5235, #5398) involve non-execution of scheduled tasks. This was hot in the last 48 hours.
- **TUI restoration after 2.0 migration** is the subject of [#5443](https://github.com/agentscope-ai/QwenPaw/pull/5443) — ACP commands, inline approvals, diagnostics were lost and are being re-integrated.

---

## Feature Requests & Roadmap Signals

### Top user-requested features (by recency + community weight)

1. **Mobile/web responsiveness** (multiple issues: [#4635](https://github.com/agentscope-ai/QwenPaw/issues/4635), [#5360](https://github.com/agentscope-ai/QwenPaw/issues/5360))  
   *Signal:* Strongest current theme. Community member [Jailtonfonseca](https://github.com/agentscope-ai/QwenPaw/issues/5360) asks to "stabilize core before adding new features." **Likely for next version:** Already 6+ mobile adaptation PRs are in flight or merged.

2. **Memory management enhancements** ([#3995](https://github.com/agentscope-ai/QwenPaw/issues/3995), [#5316](https://github.com/agentscope-ai/QwenPaw/issues/5316))  
   - Daily notes lifecycle (auto-archive old notes, compression policies)  
   - Memory write conflict detection  
   - Recency-aware ranking for `memory_search`  
   *Signal:* Memory refactor PRs (#5450, #5435) are active — likely in next 1-2 releases.

3. **KaTeX/LaTeX rendering** ([#5453](https://github.com/agentscope-ai/QwenPaw/issues/5453))  
   *Signal:* Single comment but from a Western user; suggests specialized academic/professional use case.

4. **Memory/footprint optimization** ([#5441](https://github.com/agentscope-ai/QwenPaw/issues/5441), [#5439](https://github.com/agentscope-ai/QwenPaw/issues/5439))  
   *Signal:* Two duplicate issues filed by the same user — indicates strong dissatisfaction with 1.4GB baseline.

5. **Better custom provider support** ([#5345](https://github.com/agentscope-ai/QwenPaw/issues/5345), [#5427](https://github.com/agentscope-ai/QwenPaw/issues/5427))  
   - OpenAI-compatible custom providers need full function calling  
   - Anthropic-compatible endpoints (Kimi) not supported  
   *Signal:* Growing as CoPaw gains international users with provider diversity.

### Prediction for v1.1.13+ / v2.0
- **Definite:** Continued mobile responsive push (6+ PRs in progress or merged)
- **Likely:** Memory system refactor (lifecycle management, deduplication)
- **Possible:** Per-message timestamps in user context ([#5455](https://github.com/agentscope-ai/QwenPaw/issues/5455))
- **Speculative:** Shared browser instance with session isolation ([#5413](https://github.com/agentscope-ai/QwenPaw/pull/5413))

---

## User Feedback Summary

### Pain Points (from issues and PRs)

| Theme | Representative Feedback | Frequency |
|-------|------------------------|-----------|
| **Mobile usability** | "The UI should work reliably on mobile devices" (#5360), Chat header overflows, sidebar takes full screen | Very High (≥10 issues/PRs) |
| **Upgrade persistence** | "After every upgrade, disabled skills re-enable" (#5262) — recurring since v1.1.9 | High (2 cycles) |
| **Memory bloat** | "1.4GB at idle after launch" (#5441, #5439) | High (duplicate) |
| **Model behavior** | "DeepSeek agent freezes mid-think, needs manual resume" (#5328), "thinking_content empty = invisible response" (#5416) | Medium |
| **Cron reliability** | "Tasks in pending with last_run_at: null" (#5235, #5064, #5398) | Medium (3 reports) |
| **International provider gaps** | OMLX / Kimi / custom OpenAI providers not working for function calling (#5345, #5427) | Medium (2 reports) |

### Satisfaction Signals
- Favorable user sentiment in feature requests: users are investing in custom skills, agent-based automation, and third-party integrations — indicating platform stickiness.
- Community member [Jailtonfonseca](https://github.com/agentscope-ai/QwenPaw/issues/5360) explicitly says "make the app fully functional" before adding features — constructive criticism, not abandonment.

### Notable Use Cases Emerging
- **Agent-orchestrated cron workflows**: Users trying to build daily memory summarization agents (#5402) and periodic reminders
- **Coding Mode as a daily driver**: Multiple PRs (#5448, #5452) and issues mention Coding Mode project scoping
- **Western/European users**: Issues in English mentioning KaTeX, OMLX, Kimi — CoPaw's user base is diversifying beyond China

---

## Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Last Activity | Concern |
|-------|-----|---------------|---------|
| [#3995](https://github.com/agentscope-ai/QwenPaw/issues/3995) — Memory management enhancements | 54 days | 2026-06-23 | High-value feature request with 3 comments, no maintainer response. Memory refactor PRs exist but don't address lifecycle/dedup. |
| [#5166](https://github.com/agentscope-ai/QwenPaw/issues/5166) — Python 3.13 `imghdr` module removed, breaks TeamChat plugin | 11 days | 2026-06-23 | Python 3.13 compatibility gap with no response. |
| [#5295](https://github.com/agentscope-ai/QwenPaw/issues/5295) — Subagent approval requests not pushed to external channels | 5 days | 2026-06-23 | Security-relevant multi-channel interaction bug with 2 comments. |
| [#5328](https://github.com/agentscope-ai/QwenPaw/issues/5328) — DeepSeek agent freeze mid-thinking | 4 days | 2026-06-23 | Cross-platform (web/console/Tauri) blocking bug with no fix PR. |
| [#5345](https://github.com/agentscope-ai/QwenPaw/issues/5345) — Custom OpenAI providers missing function calling | 3 days | 2026-06-23 | Affects international provider ecosystem — no maintainer response. |

### Stale PRs Needing Review
- **None identified in top 20** — maintainer review velocity appears strong.

---

*Report generated 2026-06-24. Data source: github.com/agentscope-ai/CoPaw (also known as agentscope-ai/QwenPaw). All links point to the GitHub repository.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the ZeroClaw project digest for **2026-06-24**.

---

## ZeroClaw Project Digest – 2026-06-24

### 1. Today's Overview
The project is in a high-activity patch cycle driven by v0.8.3 (runtime/tools) and v0.9.0 (auth/security). In the last 24 hours, 50 PRs were updated (19 merged/closed) and 32 issues tracked activity (13 closed). The maintainers focused heavily on **security hardening** (env-read allowlist, SSRF protection), **platform parity** (Windows shell quoting, macOS keybind conflicts), and **test coverage** across JSON-RPC, media classification, and eval grading. A significant architectural RFC to retire the standalone `aardvark-sys` crate was opened, signaling ongoing consolidation work.

### 2. Releases
**No new releases** were published in this period. The project is between releases, with active stabilization targeting v0.8.3 and v0.9.0.

### 3. Project Progress (Merged/Closed PRs)
19 PRs were merged or closed today, representing substantial feature and fix delivery:

- **Matrix Room Management Restored** – PR #8068 (merged) re-introduced Matrix room creation and invite support on current `master`, including typed visibility mappings. This unblocks community use of the Matrix channel.
- **Provider Fixes** – PR #8011 restored per-sender `/thinking` overrides. PR #8074 fixed a critical bug where gateway config deletes for provider/channel aliases left dangling references.
- **Documentation & CI** – PR #8195 added a docs link gate to PR checks. PR #8143 implemented RFC #7184 (move `.po` translations to a submodule). PR #8105 made Node container-base major selection explicit.
- **Bug Fixes** – PR #7742 fixed stale system prompts after tool dispatcher swaps. PR #7964 resolved cross-provider failures due to context compression model specificity.

### 4. Community Hot Topics
The most active discussions this period centered on security and architecture:

- **`#5919` – [CLOSED] Plugin env_read allowlist** (6 comments) – A high-priority security enhancement to restrict WASM plugin environment variable access. JordanTheJet shepherded this from April to acceptance, reflecting strong maintainer attention to the plugin security model.
- **`#8193` – [CLOSED] MCP tools missing from TUI sessions** (4 comments) – A severity-1 bug where the Gateway saw MCP tools but the TUI did not. Community user @Audacity88 reported the workflow-blocking shape. Accepted and closed, indicating a fix is in.
- **`#8043` – [OPEN] RFC: Retire aardvark-sys crate** (3 comments) – An architectural proposal to fold the standalone hardware crate into the main repo. JordanTheJet sponsored, but the `needs-maintainer-review` label suggests it is awaiting senior approval.
- **`#8226` – [OPEN] Per-agent custom environment variables** (2 comments) – User @susyabashti requested granular env injection. With `needs-author-action` and a reply from the author, this may resolve soon.

### 5. Bugs & Stability
New or active bugs ranked by severity:

| Severity | Issue # | Description | Fix PR Exists? |
|----------|---------|-------------|----------------|
| S1 | `#8151` | Matrix: deferred image attachment loses re-loadable reference; bot later denies seeing it | No |
| S1 | `#8202` | New sessions missing bundled_skill loading (channel) | No (in-progress) |
| S1 | `#8219` | Groq `gpt-oss-120b` fails multi-turn tool loops (tool_call_id null) | No (in-progress) |
| S2 | `#8236` | `voice_wake.rs` missing `subject` field breaks `--all-features` build | No |
| S2 | `#8186` | zerocode should detect daemon/TUI version mismatch (PR #8186 closed – likely fixed) | Yes |
| High risk | `#8228` | DingTalk channel lacks streaming message support | No (RFC) |

Notable: **Three S1 bugs** remain open with no fix PR yet, all affecting channel or provider interaction stability. The Groq provider issue (`#8219`) is particularly concerning for community users of that lower-cost inference path.

### 6. Feature Requests & Roadmap Signals
Strong signals for next releases:

- **v0.8.3 (runtime/tools)** – Tracker `#8071` includes work on agent loop memory, daemon stability, cron, and skills. Expect fixes for tool_call_id serialization and system prompt tool availability across all entry points (`#8054`). The `#8226` per-agent env config could land here if authors respond.
- **v0.9.0 (auth/security)** – Tracker `#7432` shows 134 open items. Key items: per-sender thinking overrides (PR #8011 merged), unified slash-command registries (`#7929`), and zero-downtime policy reload (`#7897`). The v0.9.0 release will likely include the plugin SSRF protection (`#5918`) and env allowlist (`#5919`) now that both are accepted.
- **Long-term architectural signal** – The RFC to retire `aardvark-sys` (`#8043`) and the RFC to switch from Extism to direct wasmtime (`#6943`) point to major plugin system simplification. These may not land until v0.10 or later.

### 7. User Feedback Summary
- **Pain Points:** Users report that **MCP tools are invisible in TUI sessions** (fixed in #8193), **Matrix images get lost in deferred workflows** (`#8151`), and **keybind conflicts on macOS** (`#8075`) degrade the TUI experience. Chinese market users (@jokewithme110) repeatedly request **streaming card messages** for DingTalk/QQ/WeChat to reduce perceived latency.
- **Dissatisfaction:** The Groq provider bug (`#8219`) blocking multi-turn tool loops on low-cost models is a silent workflow killer. A user expressed frustration that the daemon/TUI version mismatch is silently ignored (`#8186`).
- **Satisfaction:** The community applauded the **/thinking** override restoration (`#8011`) and the **Matrix room management** re-introduction (`#8068`). Both were direct responses to issues from the bulk revert (tracked in `#6074`).

### 8. Backlog Watch
Items requiring maintainer attention:

- **`#6074` – [OPEN] Track 153 commits lost in bulk revert** – Last updated 2026-06-23. 2 comments. This audit is crucial for identifying what was lost and what needs re-application. Has `help wanted` but no recent maintainer action.
- **`#8043` – [OPEN] RFC: Retire aardvark-sys crate** – Labeled `needs-maintainer-review`. JordanTheJet sponsored, but a `maintainer:domain:hardware` reviewer should signal acceptance or pushback.
- **`#6943` – [OPEN] RFC: Deconflict Plugin System Goals** – Accepted but with `needs-maintainer-review`. The decision to drop Extism for wasmtime has far-reaching consequences on existing plugin users.
- **`#7897` – [OPEN] Zero-downtime policy reload RFC** – Accepted with `priority:p3`, but no maintainer has assigned a milestone. This is a gateway into the v0.9.0 critical path.
- **Zero-long-reviews on PRs** – PR #7931 (compatible provider history fixes) and PR #8037 (OpenAI responses wire tests) have been open for 6 days and 4 days respectively with no reviewer activity.

---

*Generated from ZeroClaw GitHub data for 2026-06-24. Links: [Issues](https://github.com/zeroclaw-labs/zeroclaw/issues) | [PRs](https://github.com/zeroclaw-labs/zeroclaw/pulls)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*