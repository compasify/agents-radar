# OpenClaw Ecosystem Digest 2026-07-18

> Issues: 403 | PRs: 500 | Projects covered: 12 | Generated: 2026-07-18 01:21 UTC

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

Here is the OpenClaw project digest for **2026-07-18**.

---

## 1. Today's Overview
OpenClaw remains in a high-velocity maintenance phase following the **v2026.7.2-beta.2** release. Activity is extremely high today, with **403 issues** and **500 PRs** updated in the last 24 hours, indicating a focused push to stabilize the codebase after recent regressions. While the core team appears busy closing out PRs (201 merged/closed), the community is surfacing significant friction regarding **remote session tooling** and **provider compatibility**. The beta release introduces exciting features like remote coding sessions, but the project is currently wrestling with a wave of **P0 and P1 regressions** tied to session state, provider schema changes, and the new Codex integration.

## 2. Releases
- **Version:** [v2026.7.2-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.7.2-beta.2)
- **Highlights:**
    - **Remote Coding Sessions:** Users can now run Control UI sessions on cloud workers, open Codex and Claude catalog sessions in terminals on their owning hosts, and resume OpenCode/Pi sessions directly in a terminal.
- **Known Issues / Regressions:**
    - A **critical migration bug** ([#109867](https://github.com/openclaw/openclaw/issues/109867)) in this beta creates a SQLite index before adding the required column (`agent_id` in `managed_outgoing_image_records`), blocking gateway startup. A fix PR is likely in progress.
    - A **crash-loop** ([#108435](https://github.com/openclaw/openclaw/issues/108435)) related to gateway startup on v2026.7.1 remains unresolved for some users.

## 3. Project Progress
- **Security & Hardening:** Multiple PRs landed to harden input validation across the stack, including guarding against malformed numeric strings in **Anthropic** ([#110240](https://github.com/openclaw/openclaw/pull/110240)), **Baseten** ([#110175](https://github.com/openclaw/openclaw/pull/110175)), and **Gemini** ([#106420](https://github.com/openclaw/openclaw/pull/106420)).
- **Sandbox & MXC:** Significant work on the **MXC Plugin** and **CSP (Content Security Policy)** validation, with a PR ([#110267](https://github.com/openclaw/openclaw/pull/110267)) fixing a fail-closed security boundary in the MCP sandbox decoder.
- **Gateway Stability:** A key fix ([#110239](https://github.com/openclaw/openclaw/pull/110239)) ensures the gateway boots even when a configured plugin payload is broken, improving resilience against partial configuration errors.
- **SQLite Performance:** A "perf" PR ([#110271](https://github.com/openclaw/openclaw/pull/110271)) introduces fast schema gates and background integrity verification to prevent long startup delays during schema migrations.

## 4. Community Hot Topics
The highest engagement revolves around **session state integrity** and **provider support**.

- **[#75: Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75):** The all-time top issue (114 comments, 81 👍). The community remains vocal about the lack of desktop app support for non-Apple platforms. This is a long-standing pain point with high demand.
- **[#7707: Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707):** (18 comments) A strong feature request driven by security concerns. Users are worried about "memory poisoning" from untrusted web scrapes and third-party integrations. This signals a need for more granular agent memory hygiene.
- **[#88312: Codex Turn-Completion Stall](https://github.com/openclaw/openclaw/issues/88312):** (20 comments, 5 👍) A **P1 regression** where the new Codex app-server integration stalls on multi-tool turns. This is a critical blocker for users relying on the "remote coding" features touted in the latest release.
- **[#87744: Codex-backed Telegram Turns Timeout](https://github.com/openclaw/openclaw/issues/87744):** (16 comments) A parallel regression to #88312, specifically impacting Telegram users. The Codex integration appears to have introduced fragility in cross-platform session delivery.

## 5. Bugs & Stability
The project has a high number of **regressions** (P0/P1) today, largely centered on the new **Codex sidecar** and **session management**.

| Severity | Issue | Title / Context | Fix PR Exists? |
| :--- | :--- | :--- | :--- |
| **P0** | [#109867](https://github.com/openclaw/openclaw/issues/109867) | **beta.2 migration blocks gateway startup** (SQLite index) | No (open) |
| **P0** | [#108435](https://github.com/openclaw/openclaw/issues/108435) | **Gateway fails to start** (Error on launch) | No (open) |
| **P0** | [#101763](https://github.com/openclaw/openclaw/issues/101763) | **Hosted Molty (usemolty.com) model selector persists dotted ids** (API failure) | No (open) |
| **P1** | [#88312](https://github.com/openclaw/openclaw/issues/88312) | **Codex app-server turn-completion stall** (regression) | No (open) |
| **P1** | [#108075](https://github.com/openclaw/openclaw/issues/108075) | **LLM request failed: provider rejected schema** (regression in 2026.7.1) | No (open) |
| **P1** | [#87744](https://github.com/openclaw/openclaw/issues/87744) | **Codex-backed Telegram turns time out** | No (open) |

**Stability Trend:** The project is experiencing **"2-step forward, 1-step back"** dynamics. While new remote session features are shipping, the agent session state management (compaction, Cron job lifecycle, and Codex handoffs) are generating a high volume of regressions, frustrating power users.

## 6. Feature Requests & Roadmap Signals
- **Likely for v2026.8:**
    - **Session Security:** The "Masked Secrets" ([#10659](https://github.com/openclaw/openclaw/issues/10659), 14 comments) and "Memory Trust Tagging" ([#7707](https://github.com/openclaw/openclaw/issues/7707)) requests are gaining traction. Given the focus on enterprise readiness, expect a "secret masking" system soon.
    - **Filesystem Sandboxing:** The `tools.fileAccess` config ([#7722](https://github.com/openclaw/openclaw/issues/7722), 10 comments) is a natural extension of the security hardening trend.
- **Potential Future:**
    - **Multi-lane Topic Sessions:** The "Topic-session families" ([#90916](https://github.com/openclaw/openclaw/issues/90916)) request is a complex architectural change for chat-native assistants, indicating long-term roadmap thinking but unlikely in the next minor release.
    - **Voice/Streaming TTS:** The streaming TTS pipeline request ([#8355](https://github.com/openclaw/openclaw/issues/8355)) is seeing renewed interest as real-time voice use cases mature.

## 7. User Feedback Summary
- **Pain Points:**
    - **Regression Fatigue:** Users are frustrated by the rapid release cycle introducing regressions that break existing workflows, particularly around Telegram/Codex integrations ([#87744](https://github.com/openclaw/openclaw/issues/87744)).
    - **Plugin Version Drift:** A user flagged that upgrading core does not update plugins, leading to silent channel failures ([#83337](https://github.com/openclaw/openclaw/issues/83337)).
    - **Loop Detection:** A user reports that loop detection blocks tool execution but does not kill the agent process, leaving it running for hours and burning API credits ([#106231](https://github.com/openclaw/openclaw/issues/106231)).
- **Satisfaction:**
    - The remote coding session feature in the beta is well-received as a power-user capability.
    - The community appreciates the quick turnaround on security hardening patches (e.g., malformed input guards).

## 8. Backlog Watch
Several critical issues are languishing despite high impact or maintainer labels:

- **[#75: Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75):** The highest-voted issue, open since Jan 1, 2026. It has been labeled `clawsweeper:needs-product-decision` for 6+ months. The community is awaiting a roadmap decision on cross-platform desktop app support.
- **[#7707: Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707):** Despite being explicitly raised for security and having significant community engagement, it remains stuck in `clawsweeper:needs-security-review`.
- **[#101763: Hosted Molty Model Selector Broken](https://github.com/openclaw/openclaw/issues/101763):** This **P0** issue (broken API calls) against a hosted service has been open for over a week with no fix PR yet. This represents a major reliability concern for hosted deployments.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the provided community digest summaries.

**Date of Analysis:** 2026-07-18

---

### 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is in a period of **intense, high-velocity maturation**, characterized by a "build and stabilize" cycle. Projects are rapidly shipping new features—particularly around remote coding, multi-agent orchestration, and cross-platform messaging—while simultaneously wrestling with a wave of regressions and integration bugs. The community is demanding greater reliability, better enterprise security (supply-chain signing, OIDC, memory hygiene), and improved cross-platform desktop support. A clear signal is the push for **interoperability standards** like the A2A protocol and the emergence of MCP (Model Context Protocol) as a core plugin mechanism, indicating a shift from isolated agents to a more composable, networked ecosystem.

### 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Status | Health / Risk Level |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 403 | 500 | **Active (Beta)** | **High Risk:** Bug regressions & migration issues |
| **Hermes Agent** | 50 | 50 | **Stable (v0.18.x)** | **Moderate Risk:** Bottleneck in review, high bug volume |
| **IronClaw** | 50 | 50 | **Pre-v1 Sprint** | **Moderate Risk:** Intense churn, but active fix pipeline |
| **CoPaw** | 25 | 42 | **Active (v2.0.0.post3)** | **Moderate Risk:** Patch release addressing key bugs |
| **NanoClaw** | 4 | 15 | **Stable (No Release)** | **Low Risk:** High contributor engagement, focused fixes |
| **ZeroClaw** | 50 | 50 | **Pre-v0.9.0** | **Moderate Risk:** Growling backlog, maintainer transition |
| **ZeptoClaw** | 8 | 0 | **Stable** | **Low Risk:** Maintenance phase, zero open issues |
| **PicoClaw** | 4 | 12 | **Stable (v0.2.9)** | **Moderate Risk:** Stale PRs, maintainer bottleneck |
| **NullClaw** | 1 | 0 | **Stable (v2026.5.29)** | **Critical Risk:** Single critical crash bug, no fixes |
| **LobsterAI** | 5 | 13 | **Active (2026.7.16)** | **Low Risk:** Rapid iteration, high PR throughput |
| **Moltis** | 1 | 2 | **Active (Patch)** | **Low Risk:** Low activity, stable, feature-focused |
| **NanoBot** | 2 | 11 | **Active** | **Low Risk:** Steady PRs, responsive to bug fixes |

### 3. OpenClaw's Position

As the core reference implementation, **OpenClaw occupies a unique and dominant position** in the ecosystem, which comes with both advantages and significant pressure.

- **Advantages:** It is the most feature-rich and ambitious project, pioneering capabilities like "Remote Coding Sessions" and integrating with Codex. Its sheer volume of community engagement (403 issues, 500 PRs) far exceeds all other projects, indicating a massive user base and a powerful network effect.
- **Technical Approach Difference:** OpenClaw’s architecture is more monolithic and tightly coupled to specific providers (e.g., Codex sidecar). This enables rapid innovation but creates a "2-steps-forward, 1-step-back" dynamic with high regression risk, as seen in session state and migration bugs.
- **Community Size & Pain:** OpenClaw’s community is the largest and most vocal, creating intense pressure for stability. The demand for **Linux/Windows desktop apps** (Issue #75) and concerns over **memory poisoning** (Issue #7707) are unique to its scale and enterprise-adjacent user base.

### 4. Shared Technical Focus Areas

| Focus Area | Affected Projects | Specific Community Needs |
| :--- | :--- | :--- |
| **Session State & Reliability** | OpenClaw, Hermes, CoPaw, NanoClaw | Preventing silent message drops, fixing session stalling, ensuring gracefull shutdowns, and handling loop detection properly. |
| **Provider API Fragility** | OpenClaw, Hermes, NanoBot, NanoClaw | Fixing regressions from provider schema changes (e.g., Anthropic, Gemini, Moonshot), handling rate limits, and supporting custom API endpoints (OpenRouter). |
| **Security Hardening** | OpenClaw, PicoClaw, ZeroClaw, IronClaw | Memory tagging by source, supply-chain signing, OIDC auth, MCP sandboxing, and preventing file system access on multi-tenant instances. |
| **Cross-Platform Desktop Support** | OpenClaw, Hermes, ZeptoClaw | The lack of Windows/Linux desktop apps (OpenClaw #75) and macOS app failures (ZeptoClaw #7527) are critical pain points for wider adoption. |
| **Plugin & Channel Parity** | PicoClaw, NanoClaw, CoPaw | Users demand feature parity across messaging channels (e.g., streaming for QQ, typing presence for WhatsApp) and better MCP tool management. |

### 5. Differentiation Analysis

| Project | Core Focus & Differentiator | Target User / Use Case |
| :--- | :--- | :--- |
| **OpenClaw** | **The reference platform.** Focus on cutting-edge features, remote sessions, and broad ecosystem integration. | Power users, developers wanting latest features, enterprise testers. |
| **NanoBot / NanoClaw** | **Modularity & provider expansion.** Focus on adding new providers (Kimi, Moonshot), channel parity, and flexible cron scheduling. | Users who want a lightweight, multi-provider agent with high configurability. |
| **Hermes Agent** | **Agent sub-process & configuration management.** Focus on deep reliability (subprocess timeouts, config file encoding) and fixing regressions in `hermes update`. | Users needing a highly stable, process-isolated agent for automation and scripting. |
| **IronClaw** | **Architectural purity & pre-v1 cleanup.** A massive refactoring sprint to consolidate stores, rename types, and ship the Reborn architecture. | Developers and integrators building on IronClaw's core framework. |
| **CoPaw (QwenPaw)** | **Desktop & Windows integration.** Focus on per-chat MCP controls, reasoning depth, and addressing Windows-specific permission and startup issues. | Desktop-focused users, especially on Windows, who need granular control. |
| **ZeroClaw** | **Enterprise security & multi-tenancy.** Leading the charge on OIDC, supply-chain signing, RBAC, and air-gapped execution. | Enterprise teams requiring compliance, access control, and secure deployments. |
| **PicoClaw** | **Stability & incremental improvement.** Focus on OAuth fixes, dependency management, and performance refactoring. | Users wanting a reliable, no-fuss agent experience. |
| **LobsterAI** | **UI/UX & desktop client polish.** Focus on client-side features like AI-generated skins, resizable sidebars, and campaign reward systems. | Users who prioritize a polished and customizable desktop client. |
| **Moltis / NullClaw / ZeptoClaw** | **Niche / Maintenance mode.** Moltis is early stage (model routing); NullClaw has a single critical crash bug; ZeptoClaw is in quiet data maintenance. | Users with specific, niche requirements or those needing a very stable, low-change project. |

### 6. Community Momentum & Maturity

- **Tier 1: High-Velocity Iteration (Rapidly Iterating)**
    - **OpenClaw:** Extremely high activity but equally high regression risk. Momentum is strong but volatile.
    - **IronClaw:** In a pre-v1 cleanup sprint. High churn but clearly converging on a stable release. Strong maintainer engagement.
    - **CoPaw:** Active patch releases with a high PR merge rate. Shows strong responsiveness to community bug reports.

- **Tier 2: Steady Growth & Stabilization**
    - **NanoBot / NanoClaw:** Healthy, steady throughput with a focus on fixes and provider integration. Good contributor health.
    - **Hermes Agent:** Very high issue/PR count, but with signs of a review bottleneck. Satisfies a complex, demanding user base.
    - **ZeroClaw:** Strong feature signal (A2A, OIDC), but a growing backlog and a recent maintainer departure create risk.

- **Tier 3: Stable & Niche (Stabilizing)**
    - **LobsterAI:** Fast iteration on client features. Stable core.
    - **PicoClaw:** Stable but facing a maintainer bottleneck with stale PRs.
    - **Moltis:** Early and stable, with a clear future feature direction (model routing).

- **Tier 4: Critical & Maintenance (Lull)**
    - **NullClaw:** A single critical bug renders the project unusable on aarch64. Critical risk to its user base.
    - **ZeptoClaw:** Effectively in a data maintenance phase, with zero new features or community interaction.

### 7. Trend Signals

1.  **From Agent to Ecosystem (A2A):** The strong community support for the A2A protocol in ZeroClaw and the focus on agent routing (CoPaw, Moltis) indicates a clear shift from building a single smart agent to orchestrating a network of specialized agents.
2.  **Enterprise Security is Table Stakes:** The intense focus on OIDC, supply-chain signing, RBAC, and memory tagging across ZeroClaw, OpenClaw, and PicoClaw signals that enterprise demands are driving the roadmap. Security is no longer a "nice-to-have" but a core requirement for survival.
3.  **Platform-As-A-Service Pressure:** The demand for one-click deploys (NanoBot, Render), bundled desktop apps (OpenClaw), and non-Linux support (Hermes, OpenClaw) shows users want a polished, SaaS-like experience, not just a CLI tool. The pain around desktop app support is a significant competitive lever.
4.  **Provider Fatigue & Fragility:** The constant churn around provider API compatibility (Moonshot, Anthropic, OpenRouter) is a major community pain point. Users want robust, abstracted provider layers that can handle schema changes and rate limits gracefully without crashing the agent.
5.  **Memory & Data Hygiene as a Feature:** The rise of requests for memory tagging (OpenClaw), memory receipts (NanoClaw), and context overflow handling (NanoBot) shows growing user awareness and concern about their data's lifecycle within the agent. "Agent memory transparency" is becoming a key UX requirement.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-18

## 1. Today's Overview

NanoBot saw moderate activity in the past 24 hours, with 2 closed issues and 11 updated pull requests (7 open, 4 merged/closed). No new releases were published. The project remains in an active development phase, with significant work focused on Moonshot provider compatibility fixes (a rapidly evolving API), WebUI polish, and infrastructure improvements like Render deployment support. The core team maintained steady PR throughput, although the open PR count (7) suggests some review bottlenecks may be forming.

## 2. Releases

No new releases were published today. The latest available release remains unchanged from prior days.

## 3. Project Progress

Four pull requests were merged or closed today, showing concrete progress:

- **#4962 [CLOSED]** — `fix(providers): correct Moonshot kimi-k2.6 temperature override to 0.6`  
  Critical fix for Moonshot API compatibility. The registry previously hardcoded temperature=1.0 for kimi-k2.6, but Moonshot now requires exactly 0.6 for this model. This PR updates the override and includes tests.  
  (URL: HKUDS/nanobot PR #4962)

- **#4967 [CLOSED]** — `fix(providers): omit temperature for Moonshot Kimi K2.5/K2.6`  
  A follow-up refinement that stops sending any temperature parameter for K2.5/K2.6, letting Moonshot select the correct value based on thinking mode (1.0 for thinking, 0.6 for non-thinking). This is a more robust approach than hardcoding.  
  (URL: HKUDS/nanobot PR #4967)

- **#4958 [CLOSED]** — `Improve zh-TW Traditional Chinese locale`  
  Community-driven translation quality improvement for Traditional Chinese (Taiwan) locale.  
  (URL: HKUDS/nanobot PR #4958)

- **#4953 [CLOSED]** — `feat(webui): support native folder picker bridges`  
  Allows external native hosts to advertise a folder-picker bridge through the WebUI bootstrap, with loopback security and token-based authentication.  
  (URL: HKUDS/nanobot PR #4953)

## 4. Community Hot Topics

The most active discussions today centered on a single issue:

- **Issue #4968** — `[enhancement] Unbound cron jobs` (4 comments, closed today)  
  Author wzrayyy questioned why NanoBot forbids creating "unbound" cron jobs—jobs not tied to a specific agent. The discussion explored use cases like system maintenance tasks that don't require an agent context. The underlying need is for more flexible scheduling that separates job execution from agent lifecycle.  
  (URL: HKUDS/nanobot Issue #4968)

No other issues or PRs received significant comment volume (undefined comment counts on most PRs suggest GitHub API metadata limitations). The provider compatibility discussions (Moonshot temperature fixes) generated multiple PRs but little public debate—the fixes were applied cleanly.

## 5. Bugs & Stability

**High Severity:**

- **Bug #4961** — `Moonshot kimi-k2.6 requires temperature=0.6, but registry hardcodes 1.0`  
  **Fix PRs exist:** #4962 (merged) and #4967 (merged).  
  This bug caused every request to kimi-k2.6 to fail with `invalid temperature: only 0.6 is allowed for this model`. The root cause was a stale `model_overrides` entry in the provider registry. Fixed in two merged PRs that first correct the override and then entirely omit temperature for K2.5/K2.6 to avoid future mismatches.  
  (URL: HKUDS/nanobot Issue #4961)

**Medium Severity:**

- **PR #4925 (open)** — `fix(agent): report hard context overflow clearly`  
  Aims to normalize provider-confirmed context overflow errors, stop retry/model fallback for deterministic input-size failures, and return clear user-facing responses with `stop_reason="context_overflow"`. This improves error handling for large conversations.  
  (URL: HKUDS/nanobot PR #4925)

No regressions or crashes were reported today. The Moonshot temperature issue was the only confirmed bug, and it was fully resolved within hours.

## 6. Feature Requests & Roadmap Signals

Key user-requested features visible in today's activity:

- **Unbound cron jobs (Issue #4968)** — The request to allow cron jobs without mandatory agent binding suggests users want system-level automation. This is likely to appear in a future release as a configuration option or as a fallback when no agent is specified.

- **ModelScope provider support (PR #4965, open)** — Adds support for ModelScope's OpenAI-compatible API, giving users access to Qwen, DeepSeek, Kimi, GLM, MiniMax, and other open-source models. This would significantly expand the provider ecosystem and is a strong candidate for the next minor release.

- **Kimi K3 support (PR #4966, open)** — Native support for Kimi K3's `reasoning_effort="max"` contract, including legacy reasoning preset normalization. Follows the Moonshot provider fixes and indicates the team is actively tracking Moonshot's model lineup.

- **One-click Render deploy (PR #4937, open)** — Deployment to Render via blueprint, bundling gateway and WebUI with persistent session history and memory. Targets easier self-hosting for non-technical users.

**Predictions for next release:** Moonshot compatibility fixes are already merged. ModelScope provider and Kimi K3 support are nearing completion and could be bundled together in a provider-expansion release.

## 7. User Feedback Summary

Direct user feedback was limited today, but patterns emerge from issues and PRs:

- **Pain point: Provider API instability** — The Moonshot temperature bug (#4961) highlights frustration when upstream providers change requirements without notice, and hardcoded defaults silently fail. Users want provider overrides to be more permissive or configurable, not hardcoded in the registry.

- **Use case: Flexible job scheduling** — The unbound cron jobs request (#4968) suggests users run NanoBot for operations beyond agent-based interactions—system monitoring, data cleanup, or periodic tasks that don't require an agent context.

- **Satisfaction indicator** — The Moonshot fixes were submitted, reviewed, and merged within hours, demonstrating responsive maintainers. This rapid turnaround is likely to reassure users concerned about provider lock-in.

- **One-click deployment interest** — PR #4937 (Render deploy) indicates demand for simpler self-hosting options, especially for users who want to try NanoBot without infrastructure expertise.

## 8. Backlog Watch

No long-unanswered important issues or PRs were identified in today's data. The oldest open PRs are:

- **PR #4908** (open since 2026-07-13) — `refactor(channels): make built-in channels self-contained`  
  A significant architectural change to decouple channel discovery, setup, and runtime loading. Still open after 5 days with no reviewer comments logged. This may need maintainer attention to avoid blocking other channel-related work.  
  (URL: HKUDS/nanobot PR #4908)

- **PR #4925** (open since 2026-07-14) — Context overflow error handling fix. Stalled for 4 days without feedback.  
  (URL: HKUDS/nanobot PR #4925)

No abandoned issues (zero comments, no maintainer response) were detected in the last 24 hours. The project appears to have healthy maintainer attention overall.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-18

## 1. Today's Overview

Hermes Agent continues to show very high activity with 50 issues and 50 PRs updated in the last 24 hours, indicating a healthy and actively maintained open-source project. The project has 42 open/active issues and 47 open PRs, with 8 issues and 3 PRs resolved today — a moderate closure rate that suggests some bottlenecks in review capacity. The majority of recent PRs focus on hardening against hangs, timeouts, and edge-case crashes (particularly in subprocess management and configuration file handling), reflecting a project deep in a stability and reliability phase. No new releases were cut today, meaning these fixes are accumulating in `main` ahead of the next version.

## 2. Releases

**No new releases today.** The latest available version remains 0.18.2 (referenced in issue #66045). The accumulation of fixes and features in open PRs suggests a 0.19.0 release may be forthcoming.

## 3. Project Progress

Three PRs were merged or closed today:

- **[PR #17186]** (closed) — `fix(memory): align Honcho routing and memory guidance` — Fixes memory/profile routing in the Honcho memory backend, ensuring read/write operations target the same peer-card routes. Merged after a lengthy draft phase (created April 29).

- **[PR #66559]** (closed) — `CI-sensitive file review fails on every fork PR: label fetch cannot read AUTOFIX_BOT_PAT` — A CI infrastructure fix for fork PR label fetching. Closed as a quick resolution to a blocking CI issue.

- **[PR #66588]** (closed, invalid) — `Helen Meta/Baileys control plane scaffold` — Closed as invalid; appears to be a non-English, out-of-scope issue.

**Notable open PRs making progress today** (updated but unmerged):
- **#62598** (persist `[System:]` markers with `role=system`) — addresses a long-standing rendering problem on Desktop
- **#62676** (persist agent response during verification stop loop) — critical for user-facing message delivery
- **#62492** (auto-migrate stale profile config on serve/dashboard startup) — profile config consistency fix

## 4. Community Hot Topics

The most active discussions this week reveal significant user frustration in three areas:

1. **Regression in `hermes update` (#3523, 6 comments)** — A user tracked two regressions after a merge: silent git output and unnecessary stashes on every update. Despite being opened in March, this issue remains open with a `needs-decision` label, suggesting maintainer disagreement or prioritization conflict.

2. **CLI dispatcher drops exit statuses (#62810, 5 comments)** — A critical shell interoperability bug where commands returning exit code 1 or 2 always report exit code 0, breaking `set -e`, CI pipelines, and automation. This affects all CLI users and has `P2` priority.

3. **Infinite retry loop on vision/context compaction (#66267, 5 comments, P1)** — After an image turn, the agent enters an effectively infinite API-call retry loop until the budget is exhausted, caused by `expected string or bytes-like object` errors. This is the highest-severity active bug (`P1`) and likely causing significant token waste and user frustration.

**Other notable active discussions:**
- CVEs surviving pip-audit across reboots (#60841, 4 comments) — Security vulnerability that re-emerges after `uv sync`
- Event loop is closed on `/exit` (#60197, 4 comments) — Affects clean shutdown with MCP servers
- KDE Plasma session crash from `computer_use` (#66392, 3 comments) — A dramatic UX failure

## 5. Bugs & Stability

**Critical (P1) bugs reported today:**
- **#66587** — Gemini HTTP 400: `Function call is missing thought_signature` — Blocks all Gemini provider function calls. **No fix PR yet.**
- **#66267** (updated) — Multimodal infinite retry loop exhausting API budget. **No fix PR yet.** This P1 bug is the top priority stability concern.

**High (P2) bugs reported today:**
- **#66574** — Windows Desktop/TUI with local reasoning models: two issues (reasoning-field exhaustion not surfaced; stale runtime state). Affects Windows users with local models. **No fix PR yet.**
- **#66589** — Telegram startup notification fails after planned restart — race condition between degradation clear and notification sending. **No fix PR yet.**
- **#66629** — Desktop cron ticker degrades Feishu interactive cards to plain text. **No fix PR yet.**
- **#66631** (PR) — Browser CDP `_run_async` hangs indefinitely without timeout — fix submitted as PR #66631.
- **#66518** — WSL2 stdio MCP watchdog kills healthy children due to clock drift. **No fix PR yet** (tagged duplicate).
- **#66572** — LM Studio initialization hardcodes 64000 context tokens, ignoring user config. **No fix PR yet.**

**Medium (P3) bugs reported today:**
- **#66543** — Custom providers don't map reasoning effort to per-model supported levels.
- **#66541** — Kanban workers inherit dispatcher terminal settings instead of assignee profile.

**Fix PRs in progress (all by user x7peeps):**
- Multiple PRs adding timeouts to `subprocess.run()` calls across the codebase (#62461, #62735, #62902, #63483, #63646, #63811) — a systematic reliability improvement campaign.
- **#66623, #66625, #66627** (by AlexFucuson9) — Three fixes for configuration file encoding issues (UTF-8 BOM crashes, UTF-16 corruption, unquoted whitespace).

## 6. Feature Requests & Roadmap Signals

**High-requested features from today:**
- **#66536** — Per-call model/provider override for `delegate_task` — Users want subagents to use different models than the parent session. `P3` priority.
- **#66621** — Custom icons for Desktop profiles — Users find colored initials insufficiently distinctive. `P3` priority.
- **#66628** (PR) — Self-hosted/OpenAI-compatible STT/TTS servers — Would enable offline/local speech processing with `llama.cpp`/`whisper.cpp`. `P2`, `needs-decision`.
- **#9978** — Interactive card format for Feishu gateway messages — Long-standing feature request (April) with continued interest.
- **#11442** — GitHub Enterprise Server Copilot support — Blocks enterprise users.
- **#50748** — Display token generation speed in Desktop — User experience improvement for model comparison.

**Likely candidates for next release:**
- The config file encoding fixes (#66623, #66625, #66627) are small, well-scoped, and target common user pain points — high probability.
- The "auto-migrate stale profile config" (#62492) is a quality-of-life improvement that's been in PR for a week with active updates.
- The timeout-hardening campaign (x7peeps PRs) is systematic and likely to be landed in batches.

## 7. User Feedback Summary

**Pain points from today's issues:**
- **Windows users face disproportionate problems** — Multiple issues exclusively affect Windows Desktop/TUI (#66574, #62734, #51448), suggesting a need for more Windows-specific testing and CI.
- **Configuration persistence is fragile** — Users report settings being silently ignored or reverted across restarts, profile switches, and version updates (multiple issues in `area/config`).
- **API budget exhaustion without user awareness** — The infinite retry loop bug (#66267) means users may burn through paid API credits before realizing something is wrong. The related "reasoning-field exhaustion not surfaced" issue (#66574) suggests this is a systemic UX gap.
- **Local model users feel second-class** — Issues with LM Studio context length overrides (#66572) and Ollama reasoning model handling (#66574) indicate local/offline use cases need more testing attention.

**Satisfaction signals:**
- The community is actively contributing PRs — 50 open PRs with varied contributors (x7peeps alone contributed 10+ reliability fixes).
- Users are filing detailed, well-researched bug reports with root-cause analysis (e.g., #3523, #66518), indicating a technically sophisticated user base invested in the project.

## 8. Backlog Watch

**Long-unanswered issues needing maintainer attention:**

| Issue | Age | Summary | Risk |
|-------|-----|---------|------|
| **#3523** (OPEN) | Since Mar 28, 2026 | `hermes update` regressions — silent git output, unnecessary stashes | `needs-decision` — maintainer disagreement unresolved for 3.5 months |
| **#9978** (OPEN) | Since Apr 15, 2026 | Feishu interactive card format — 4 comments, `P3` | Likely to be deprioritized but requested |
| **#11442** (OPEN) | Since Apr 17, 2026 | GitHub Enterprise Server Copilot support | Blocks enterprise adoption; 2 comments in 3 months |
| **#14859** (OPEN) | Since Apr 24, 2026 | Show session title in status bar | Simple UX improvement with no maintainer response |
| **#60841** (OPEN) | Since Jul 8, 2026 | CVEs survive pip-audit — uv.lock pins vulnerable packages | **Security risk** — vulnerable packages persist across reboots |
| **#51448** (OPEN) | Since Jun 23, 2026 | Desktop + LM Studio fails on native Windows, works on WSL | `needs-repro` — two community reports, no progress |
| **#60197** (OPEN) | Since Jul 7, 2026 | Event loop closed on `/exit` with MCP servers | `P2` — impacts graceful shutdown |

The most concerning backlog item is **#60841** (CVE persistence), as it represents a security vulnerability that actively resists remediation due to toolchain behavior. The `needs-decision` label on #3523 from March suggests a process bottleneck where maintainers cannot reach consensus on a fix approach.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-18

## Today's Overview
Project activity remains at a moderate level. **4 issues** were updated in the last 24 hours (3 still open), and **12 PRs** saw updates (10 open, 2 merged/closed). Notably, the bulk of PR activity comes from three distinct contributors—`corporatepiyush` (three PRs), `As-tsaqib` (two PRs), and `Alix-007`/`gezhengbin888` (each with a merged PR)—suggesting focused community contributions across security, performance, and channel integration domains. However, zero new releases were cut, and many updated items have remained stale for several days, indicating a potential maintainer bottleneck or a deliberate stabilization period. The oldest open PR (#1951) has been awaiting action for nearly four months. Overall, the project is in a **sustained but not rushed** development phase, with an emphasis on hardening and incremental improvements.

---

## Releases
No new releases were published. The latest tagged release remains v0.2.9 (git 2992…), as referenced in a stale migration bug (#3206). There is no release candidate or pre-release to note.

---

## Project Progress
**Merged/Closed PRs today (2 total):**

- **#3204** (closed) — *fix(deps): restore Azure dependency freeze baseline* — This PR reverted Azure SDK modules (`azcore`, `azidentity`, MSAL) to their frozen baseline versions (`v1.21.1`, `v1.13.1`, `v1.6.0`), addressing a dependency drift issue flagged by downstream supply-chain checks. Done by `gezhengbin888`.  
  [https://github.com/sipeed/picoclaw/pull/3204](https://github.com/sipeed/picoclaw/pull/3204)

- **#3180** (merged) — *fix(cli): skip tool calls with invalid arguments* — This PR improves CLI robustness by skipping malformed JSON `function.arguments` instead of dropping the entire tool-call batch. It adds regression coverage for invalid and mixed-valid scenarios. Contributed by `Alix-007`.  
  [https://github.com/sipeed/picoclaw/pull/3180](https://github.com/sipeed/picoclaw/pull/3180)

**Notable open PRs with active work (no merge yet):**
- Multiple refactoring PRs from `corporatepiyush` (#3245, #3244, #3243) targeting allocation reduction in XML/string assembly paths.
- A security hardening PR (#3246) addressing MQTT TLS verification, OAuth timeouts, and bounded search reads.
- A WhatsApp typing presence feature PR (#3242) implementing `channels.TypingCapable`.
- An OAuth provider-specific refresh fix PR (#3241).

---

## Community Hot Topics
**Most discussed issue:**  
- **#3201** (OPEN) — *[Feature] Support streaming output for QQ channel* — 3 comments. Users are requesting real-time token-by-token output for the QQ channel, mirroring capabilities already present in Telegram and WebSocket channels. The underlying need is clear: parity of user experience across all supported messaging platforms.  
  [https://github.com/sipeed/picoclaw/issues/3201](https://github.com/sipeed/picoclaw/issues/3201)

**Most reaction-active PRs:**  
No PRs have received reactions this period. Comments are absent for all open PRs, suggesting limited public discussion or that discussions are happening off-GitHub.

**Notable user conversation:**  
The **#3206** closed issue (v2→v3 config migration failure) had 2 comments, indicating the bug was acknowledged and possibly resolved (closed). The user encountered the error on a fresh install of v0.2.9, which suggests a systemic migration code path issue.

---

## Bugs & Stability
**High severity:**
| Issue | Status | Description |
|---|---|---|
| #3206 | CLOSED | v2→v3 config migration fails with false `unknown field(s): build_info, session.dm_scope` on the latest release. This blocks any user attempting to upgrade from v2 to v3. *Fix exists (issue closed), but no associated merged PR seen today.* |
| #3239 | OPEN | OAuth token refresh uses incompatible provider semantics (JSON vs. form encoding) and can race under concurrent access. This affects users of OpenAI OAuth (among others) and can cause silent auth failures. A fix PR (#3241) is open and pending review. |

**Medium severity:**
| Issue | Status | Description |
|---|---|---|
| #3201 | OPEN | Streaming output missing for QQ channel—not a crash but a UX regression compared to other channels. |

**Low severity:**
| Issue | Status | Description |
|---|---|---|
| #3240 | OPEN | WhatsApp channel lacks typing presence indicator (no visual feedback to users during processing). A fix PR (#3242) is open. |

The most critical active bug is the OAuth refresh issue (#3239), as it can cause service disruption for users relying on OAuth-based integrations. The v2→v3 migration bug (#3206) appears to have been acknowledged and closed, but no commit SHA or merge was published today—users may need to wait for the next release.

---

## Feature Requests & Roadmap Signals
**New feature requests (last 24h):**
- **Streaming for QQ channel** (#3201) — requested by YsLtr. This is a concrete, implementable feature with clear precedent (Telegram, WebSocket already support it).
- **WhatsApp typing presence** (#3240) — requested by As-tsaqib. This is a UX improvement, not a core functionality gap.
- **OAuth provider-specific refresh** (implicit from #3239, though filed as bug) — the underlying need is to make auth tolerant of provider-specific API differences.

**Prediction for next version:**
Based on the open PRs from `As-tsaqib` and `corporatepiyush`, the next release is likely to include:
- WhatsApp native typing presence
- OAuth refresh fix (provider-correct + concurrent-safe)
- Performance improvements in seahorse/compaction and skill loading (fewer allocations)
- Security hardening (MQTT TLS, timeouts)
- Czech locale updates

The QQ streaming feature, while requested, has no associated PR yet and may slip to a subsequent version.

---

## User Feedback Summary
**Real user pain points expressed:**
- *Config migration failure* (#3206): A fresh install of the latest release cannot load config until v2→v3 migration is fixed. This is a **blocking onboarding issue** for new or upgrading users.
- *OAuth refresh races* (#3239): Users using OpenAI OAuth integration may experience intermittent token refresh failures. This suggests the auth system lacks adequate testing across providers.
- *Missing WhatsApp feedback* (#3240): Users waiting 2+ seconds for a bot reply on WhatsApp receive no visual cue that the bot is working.

**Satisfaction signals:**
- The fact that users are filing UX enhancements (streaming, typing presence) suggests core functionality is reliable enough for users to focus on polish.
- Multiple contributors are submitting performance refactoring PRs, indicating code quality is valued.

**Dissatisfaction signals:**
- The stale-label tagging on all updated items (all 4 issues, all 10 open PRs) may indicate that community effort is not being reviewed or merged promptly.
- The 4-month-old PR #1951 (installation scripts) being ignored suggests process bottlenecks for non-critical but helpful contributions.

---

## Backlog Watch
**Long-unanswered items needing maintainer attention:**

1. **PR #1951** (OPEN, since 2026-03-24) — *chore: move installation scripts from docs repo to here* — This low-complexity, non-breaking PR has sat for nearly 4 months with zero comments. It is already linked to a docs-side PR (sipeed/picoclaw_docs#14). This signals a potential maintainer bandwidth issue or decision to defer.  
  [https://github.com/sipeed/picoclaw/pull/1951](https://github.com/sipeed/picoclaw/pull/1951)

2. **Issue #3201** (OPEN, since 2026-07-01) — Streaming for QQ channel — No response from maintainers despite 3 comments. While not critical, it is the most-discussed open item and a clear feature parity gap.

3. **Issue #3240** (OPEN, since 2026-07-10) — WhatsApp typing presence — Has a companion PR (#3242) but no sign of code review or CI status.

**Recommendation:**
The project maintainers should review and merge PR #1951 (a trivial, no-risk change) to clear the oldest backlog item and set a positive tone for contributors. The OAuth fix PR #3241 should also be prioritized, as it addresses a medium-severity bug that can cause silent service degradation.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-07-18

---

## 1. Today's Overview

NanoClaw shows **high activity** over the last 24 hours with 15 pull requests updated (12 open, 3 merged/closed) and 4 issues updated (3 open, 1 closed). The project is in a **heavy development cycle** focused on core reliability: session routing fixes, rate limit handling corrections, webhook security hardening, and cross-platform integration improvements (Matrix, iMessage, OpenCode). No new releases were cut today, but the volume of merged PRs and the closeness of several open PRs to completion suggest a release may be imminent. The maintainer team is actively engaging with community contributions, particularly around infrastructure and security.

---

## 2. Releases

**No new releases today.** The last release remains the one prior to this digest date.

---

## 3. Project Progress

**Merged/Closed PRs (3 total):**

- **#3063** (`docs(changelog): drop duplicated Unreleased bullets`) — closed. Cleanup of a merge artifact that left duplicate changelog entries. *Author: glifocat*
- **#2952** (`[follows-guidelines] Skill/add opencode stack`) — closed. Adds an operational/container skill for the OpenCode stack. *Author: javexed*
- **#2951** (`[follows-guidelines] fix(opencode): dedicated OPENCODE_BASE_URL...`) — closed. Fixes OpenCode proxy and environment variable handling. *Author: javexed*

**Summary of progress:** The merged PRs represent **infrastructure hardening** (OpenCode deployment improvements) and **documentation hygiene** (changelog deduplication). The high count of open PRs (12) indicates the project is in a **busy integration phase** with multiple parallel fixes and features being refined.

---

## 4. Community Hot Topics

- **#3071** (`Discord: bare URLs posted by the agent arrive as literal [url](url)`) — **Closed, 1 comment.** This issue was quickly resolved, indicating the maintainers are responsive to high-impact UX bugs. *Link: [Issue #3071](https://github.com/nanocoai/nanoclaw/issues/3071)*
- **#2999** (`feat(channels): unify iMessage into a single imessage channel`) — **Open, 0 comments.** A significant feature PR sitting for 8 days with no maintainer feedback. *Link: [PR #2999](https://github.com/nanocoai/nanoclaw/pull/2999)*
- **#3076** (`feat(imessage): unified local+hosted adapter targeting spectrum-ts v11`) — **Open, 0 comments.** An alternative/overlapping approach to iMessage unification from a different contributor, opened yesterday. **Potential conflict with #2999.** *Link: [PR #3076](https://github.com/nanocoai/nanoclaw/pull/3076)*
- **#3074** (`claude provider with custom ANTHROPIC_BASE_URL (OpenRouter): turns silently dropped`) — **Open, 0 comments.** A subtle integration bug affecting OpenRouter users; silent data loss is high-severity. *Link: [Issue #3074](https://github.com/nanocoai/nanoclaw/issues/3074)*

**Underlying needs:** The community is demanding **cross-provider reliability** (OpenRouter, custom endpoints) and **messaging platform completeness** (iMessage unification). The two iMessage PRs suggest confusion or disagreement about implementation approach — a maintainer decision is needed.

---

## 5. Bugs & Stability

**High Severity:**

- **#3075** (`Silent log loss + inbound message duplicate-insert errors after long uptime`) — **Open, no fix PR.** Affects Matrix channels. Could cause data integrity issues and message duplication. Needs systemd integration for automatic restart. *Link: [Issue #3075](https://github.com/nanocoai/nanoclaw/issues/3075)*
- **#3074** (`claude provider with OpenRouter: turns silently dropped when SDK result event is empty`) — **Open, no fix PR.** Silent data loss for users of OpenRouter/Custom Anthropic endpoints. *Link: [Issue #3074](https://github.com/nanocoai/nanoclaw/issues/3074)*

**Medium Severity:**

- **#3071** (`Discord bare URLs unclickable`) — **Closed.** Now fixed.
- **#3072** (`Skill docs only document /name syntax, but Codex uses $name`) — **Open, no fix PR.** Documentation drift affecting Codex users. *Link: [Issue #3072](https://github.com/nanocoai/nanoclaw/issues/3072)*

**Fix PRs that address stability issues:**
- **#3077** (`fix(claude): only abort on a rejected rate_limit_event; split rate_limit vs quota`) — directly addresses a false-positive abort on rate limit telemetry. *Link: [PR #3077](https://github.com/nanocoai/nanoclaw/pull/3077)*
- **#3081** (`fix(agent-runner): route per-turn results by turn generation`) — fixes stale routing that can cause message misdelivery. *Link: [PR #3081](https://github.com/nanocoai/nanoclaw/pull/3081)*
- **#3079** (`fix(agent-runner): gate mid-turn follow-up push on trigger=1`) — prevents infinite self-sustaining conversations between co-located agents. *Link: [PR #3079](https://github.com/nanocoai/nanoclaw/pull/3079)*
- **#3078** (`fix(session): pin agent-shared resolution to an anchor session`) — prevents session fork when multiple sessions exist for the same agent group. *Link: [PR #3078](https://github.com/nanocoai/nanoclaw/pull/3078)*
- **#3065** (`fix(security): authenticate loopback webhook to prevent action forgery`) — closes a CWE-306 vulnerability. *Link: [PR #3065](https://github.com/nanocoai/nanoclaw/pull/3065)*

**Verdict:** The project has a healthy **parallel fix pipeline** — multiple critical session-routing and stability bugs have open PRs ready for review/merge. The silent data loss issues (#3075, #3074) are the most urgent gaps.

---

## 6. Feature Requests & Roadmap Signals

**Immature but visible requests:**
- **iMessage unification** — Two competing PRs (#2999, #3076) aim to unify local and hosted iMessage backends. This is the most active feature area.
- **Adoption Companion Pack** (#3073) — A utility skill adding "Memory Receipts + Knowledge Inventory" for onboarding/auditing. Signals demand for **agent memory transparency** and **adoption tooling**.
- **OpenCode stack** (#2952, merged) — Indicates growing interest in OpenCode as an alternative to Claude Code / Codex.

**Predictions for next version:**
- Likely: Session routing fix (#3078), mid-turn follow-up gate (#3079), per-turn result routing (#3081) — these are **stability prerequisites** and have strong community support.
- Possibly: iMessage unification (one of #2999 or #3076) — maintainer decision required.
- Possibly: Rate limit handling fix (#3077) — low-risk, high-value.

---

## 7. User Feedback Summary

**Pain points:**
- **Cross-platform silence** — Users on Matrix (#3075) and OpenRouter (#3074) experience **silent message drops or duplication** with no clear error feedback. This erodes trust in the agent's reliability.
- **Platform-specific quirks** — Discord users encountered broken URL formatting (#3071); Codex users cannot invoke skills as documented (#3072). These are **friction points** that make NanoClaw feel unfinished on non-primary platforms.
- **Documentation gaps** — `#3072` explicitly calls out doc-only support for `/name` syntax, alienating Codex users. User *glifocat* is actively contributing fixes, indicating **frustration plus initiative**.

**Satisfaction signals:**
- High contributor engagement: 5 unique authors (mymac80, javexed, invisicat, jliurner, QuantumBreakz) opened PRs today.
- The Discord URL issue (#3071) was **closed quickly** — rapid bug fixes build goodwill.

**Overall sentiment:** The community is **engaged but encountering real reliability barriers** in multi-platform deployments. Users are willing to contribute fixes (high PR count) but are also hitting cases where the project "works well on the main path, fails silently on edge cases."

---

## 8. Backlog Watch

**Items requiring maintainer attention:**

| ID | Type | Age | Issue | Risk |
|---|---|---|---|---|
| #2999 | PR | 8 days | iMessage unification — no maintainer feedback | High — duplicate PR (#3076) now exists; drift between approaches |
| #3075 | Issue | 1 day | Silent log loss + duplicate inserts on Matrix | High — can cause data corruption |
| #3074 | Issue | 1 day | OpenRouter silent turn drops | High — silent data loss |
| #3072 | Issue | 1 day | Doc inconsistency for skill invocation | Medium — UX issue for Codex users |
| #3065 | PR | 2 days | Security fix (webhook action forgery) | High — vulnerability fix awaiting merge |

**Most urgent:** **#2999** needs a maintainer decision before effort is wasted on the competing #3076 approach. **#3065** (security vulnerability fix) should be merged promptly. The two silent-data-loss bugs (#3074, #3075) are critical but new; they need acknowledgment and triage.

---

*Generated from GitHub data for nanocoai/nanoclaw, snapshot 2026-07-18. Data freshness: last 24 hours.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-18

## 1. Today's Overview
The NullClaw project is in a **quiet state** with no pull request activity and no new releases in the past 24 hours. A single open issue (#976) was updated yesterday and represents a **critical crash bug** affecting aarch64 Linux deployments. The project appears to be in a maintenance lull, with zero community engagement through reactions and only moderate comment activity on the single active issue. The lack of PR activity or merged fixes suggests the core team may be investigating the reported crash or working on longer-term solutions.

## 2. Releases
No new releases were published today. The latest available release remains **v2026.5.29**, which is specifically referenced in the crash report below.

## 3. Project Progress
**No pull requests were merged or closed today.** There is no evidence of any feature advancement, bug fix, or code change making it into the codebase in the past 24 hours.

## 4. Community Hot Topics
The only active discussion is around **Issue #976** (SIGSEGV crash), which has 2 comments and zero reactions. Despite low engagement metrics, this is the community's primary concern — a crash that renders the Telegram gateway unusable on aarch64 Linux systems. The issue author @wonhotoss reports the crash occurs on **every** inbound message, making the gateway effectively non-functional in a systemd service context with `Restart=always`.

- **#976** [OPEN] SIGSEGV on every inbound Telegram message — [Link](https://github.com/nullclaw/nullclaw/issues/976)

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR Exists? |
|----------|-------|-------------|----------------|
| **CRITICAL** | #976 | Repeated SIGSEGV on aarch64 Linux; inbound worker thread with ~512KB stack overflows on every Telegram message. Crash-loop renders gateway inoperable. | No |

This is a **critical stability issue** affecting all aarch64 users of the Telegram gateway. The root cause appears to be an insufficiently sized stack (512 KB) for the inbound worker thread, which overflows on standard message processing. No fix PR has been identified.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were raised in today's activity. However, the nature of Issue #976 implicitly requests:
- **Stack size configurability** for worker threads
- **Graceful error handling** instead of SIGSEGV
- **Possibly aarch64-specific CI testing** to catch platform differences

Given the severity of the crash, the **next minor release (v2026.6.x or v2026.7.x) should include a stack size increase or configurable stack sizes** as a hotfix, likely before any new features are added.

## 7. User Feedback Summary
The sole user (@wonhotoss) is reporting a **severe pain point**: the Telegram gateway is entirely unusable on aarch64 Linux. The user's setup (systemd service with `Restart=always`) means the process crash-loops silently, consuming resources while never delivering replies. This indicates:
- **High dissatisfaction** with the Telegram gateway reliability
- **Effective manual workaround**: None currently available (no configuration option to increase stack size)
- The user has taken the time to report detailed crash information, suggesting they value the project but are frustrated by the regression

## 8. Backlog Watch
No long-unanswered issues or PRs were identified in today's data. The only active issue (#976) is recent (2 days old) and has received a comment thread, indicating it has maintainer attention. However, given the critical nature of the bug, **maintainer response on a fix timeline would be valuable** to the affected user base.

**No PRs are awaiting maintainer review or merge.**

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-18

## Today's Overview

IronClaw is in an intense **pre-v1 release cleanup and refactoring sprint**, with **50 issues and 50 PRs updated in the last 24 hours** — a very high activity level. The team is systematically consolidating in-memory stores to filesystem-backed implementations (architectural simplification §4.3), renaming deployment-mode-prefixed types to deployment-neutral names (§4.4), and shipping the Telegram channel extension for the Reborn architecture. A significant binary rename (`ironclaw-reborn` → `ironclaw`, legacy → `ironclaw-v1`) is in progress via PR #6185. The project also fixed one security bug (filesystem access via shell on multi-tenant instances, #6170). Key stability risks include a just-reported regression (#6215) where the model cost table is not rebuilt on LLM reload, and several lingering Engine V2 bugs around UI rendering and tool approval.

## Releases

**No new releases today.** The last release PR (#5598) from July 3 remains open, proposing version bumps: `ironclaw_common` 0.4.2→0.5.0, `ironclaw_skills` 0.3.0→0.4.0 (both with API-breaking changes), and `ironclaw` 0.24.0→0.29.1.

---

## Project Progress

**Merged/closed in last 24h: 27 PRs, 24 issues closed.** Key advances:

- **Telegram channel for Reborn:** PR #6159 merged — ships admin bot setup, WebGeneratedCode pairing, DM entrypoint. Follow-up fix PR #6217 ensures Telegram compiles in production image.
- **Store consolidation (§4.3) nearing completion:** Multiple PRs deleted hand-written in-memory stores and switched to `RootFilesystem`-backed implementations:
  - Outbound-state store: PR #6212
  - Triggered-run-delivery store: PR #6213
  - Delivered-gate-route store: PR #6214
  - Budget-gate store: PR #6210 (merged)
- **Architecture cleanup (§4.4):**
  - `LocalFilesystem` → `DiskFilesystem` rename: PR #6209 (merged)
  - `LocalDevRootFilesystem` alias inlined: PR #6218 (open)
  - `LocalDevOutboundStores` → `OutboundStores`: PR #6220 (open)
  - `LocalTraceSubmission*` → `NodeTraceSubmission*`: PR #6207 (merged)
- **Reborn CLI onboarding:** PR #6174 (open) delivers a standalone onboarding journey — keychain, model setup, background service — making `ironclaw` usable from source build.
- **GitHub CI triage for Reborn:** PR #6140 (merged) — `github.get_job_logs` capability, SSRF-safe redirect egress, auth-install nudge.
- **Reborn coverage exemptions:** Issue #5657 closed — 4 v1-only crates formally exempted from Reborn coverage denominator.
- **Artifact description tracking:** Issue #6200 closed — enforces artifact ref/verification hash flow in `ctx.message` tool.

---

## Community Hot Topics

**Most active issues (by comment count):**

1. **#2767** — *Epic: Separate engine v2 capability background from callable tool schemas* (**7 comments**) — Epic for the foundational Engine V2 architectural split; closed today. Underlying need: clean separation of LLM-facing tool schemas from internal execution logic.
   [nearai/ironclaw Issue #2767](https://github.com/nearai/ironclaw/issues/2767)

2. **#2813** — *engine-v2: add typed assistant content model for final vs internal tool-use text* (**6 comments**) — Addresses flattening of assistant tool-use text; closed today. Core need: proper distinction between visible vs. internal messages in Engine V2.
   [nearai/ironclaw Issue #2813](https://github.com/nearai/ironclaw/issues/2813)

3. **#2835, #2834, #6170** — each with **2-3 comments**:
   - **#2835**: Tool discovery summaries for core built-ins — closed today.
   - **#2834**: Compact tool-use action cards (Engine V2) — closed today.
   - **#6170**: Security bug — users can access filesystem via shell on multi-tenant instances — **critical**, closed today.
   - **#4644** (open): Universal attachments across all channels — 2 comments, actively discussed for Reborn.

**Most active PRs:**
- **#6212** (outbound-state store refactor, XL) — stacked with #6213, #6214 forming the core store consolidation wave.
- **#6185** (binary rename) — touches 20+ scopes, the most impactful structural change in flight.
- **#6174** (onboarding journey) — foundational for standalone usability.

---

## Bugs & Stability

| Severity | Issue | Status | Notes |
|----------|-------|--------|-------|
| **Critical** | #6170 — Users access filesystem via shell on multi-tenant instances | **CLOSED** | Fix merged; high urgency for hosted deployments |
| **High** | #6215 — Reborn: model cost table not rebuilt on LLM reload (regression from #6174) | **OPEN** (filed today) | Breaks budget accounting when LLM config changes; root cause identified |
| **Medium** | #5331 — Tool-approval 'always' may not auto-approve next same-tool call (Engine V2) | **CLOSED** | Intermittent bug; suspected flaky test |
| **Medium** | #4278 — Potential performance issue: unbounded conversation growth in ENGINE_V2 | **CLOSED** | Context window exhaustion risk; fix verified |
| **Low** | #3618 — Debug panel stats stuck at 0 on Engine V2 | **CLOSED** | Only Tool Calls tab updates; other stats broken |
| **Low** | #3465, #3464, #3463 — Engine V2 UI rendering bugs (repeated `tool_info`, failed tool card rendering, missing image cards) | **CLOSED** | All part of Engine V2 UI polish batch |

**Regression alert:** PR #6174 (onboarding journey, still open) introduced the LLM reload chokepoint that broke model cost table rebuilding. Issue #6215 filed same day tracking the fix.

---

## Feature Requests & Roadmap Signals

**Hard signals (in active PRs/issues):**
- **Telegram channel for Reborn (#5124)** — Merged PR #6159 ships this. Now live but gated behind `telegram-v2-host-beta` feature flag.
- **Universal attachments (#4644)** — OPEN, labeled `suggested_P1`. Wires legacy attachment pipeline into v1 + extensible format registry + polished Web UX. Likely candidate for next minor release.
- **Reborn CLI onboarding (#6174)** — OPEN, XL size. Makes `ironclaw-reborn` usable standalone. High priority for developer adoption.

**Soft signals (lower priority, open):**
- **Track Engine V2 LLM usage in admin API (#4822)** — Closed today. Parity with V1 admin usage endpoints. Likely to land in next release.
- **v1 refactoring & legacy cleanup epic (#6198)** — OPEN, filed yesterday. Tracks pre-v1 release tech debt. Strong indicator that 1.0 is being prepared.
- **Crate renames (#6201)** — OPEN. Renaming `ironclaw_reborn_*` crates to `ironclaw_*`. Blocked until after 1.0 cut.

**Prediction:** The next release (likely 0.30.x) will include: the binary rename (#6185), Telegram channel support, the §4.3/§4.4 store/type cleanup, and the standalone onboarding CLI. Engine V2 bugs from April-May appear fully closed.

---

## User Feedback Summary

**Pain points (from closed issues):**
- **Security:** Multi-tenant users could `ls -all` beyond their workspace via shell (#6170) — fixed same day.
- **UI/UX:** Engine V2 rendering broken for images (#3463), failed tool calls (#3464), repeated `tool_info` calls (#3465) — all confirmed and closed. Users on `ENGINE_V2=true` were getting text-only "image generated successfully" without seeing the actual image.
- **Performance:** Context window exhaustion risk from unbounded conversation growth (#4278) — reported by community; fix confirmed.
- **Tool approval inconsistency:** "Always" auto-approve not persisting across calls (#5331) — intermittent, may still affect some users.

**Satisfaction signals:**
- High engagement with the architectural cleanup effort: 8+ PRs in flight simultaneously on store/type refactoring.
- Reborn onboarding journey (#6174) directly addresses the top developer pain point of getting started from source.

---

## Backlog Watch

**Open issues needing maintainer attention:**

1. **#4644** (Universal attachments) — OPEN since June 9, labeled `suggested_P1`. 2 comments. Last update July 17. No PR yet. Blocks a cross-cutting user experience improvement (attachments silently dropped on Reborn).
   [nearai/ironclaw Issue #4644](https://github.com/nearai/ironclaw/issues/4644)

2. **#3577** (Track v1 channel ports for Reborn) — OPEN since May 13. 1 comment. Last update July 17. Tracking issue, but 11+ channels remain unported — signals potential scope risk.
   [nearai/ironclaw Issue #3577](https://github.com/nearai/ironclaw/issues/3577)

3. **#5219** (Harden activity identity invariants after gate lifecycle refactor) — OPEN since June 25. 1 comment. Follow-up from merged PR #5145. Prevents identity splitting/silent loss in future batching paths.
   [nearai/ironclaw Issue #5219](https://github.com/nearai/ironclaw/issues/5219)

4. **#6198** (Pre-v1 refactoring & legacy cleanup epic) — OPEN since July 17. Filed as the tracking epic for all pre-1.0 cleanup. If this closes without children resolved, that's a risk.
   [nearai/ironclaw Issue #6198](https://github.com/nearai/ironclaw/issues/6198)

**No PRs appear blocked or maintainer-unanswered for more than 3 days** — the team is actively reviewing and merging across the board.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for 2026-07-18.

---

## LobsterAI Project Digest: 2026-07-18

### 1. Today's Overview
LobsterAI shows **very high activity** today, driven by the release of version **2026.7.16** and a massive batch of merges preparing for the next patch. A total of **13 PRs were merged/closed** and **5 issues were resolved**, indicating a strong push toward stability and feature completion. The project is clearly in a **rapid iteration phase**, balancing new feature work (e.g., AI-generated skins, campaign rewards) with targeted bug fixes and UI polish. The high volume of `area: renderer` labels suggests a focus on the desktop client experience.

### 2. Releases
**Version 2026.7.16** was released on 2026-07-16.

- **Key Changes:**
    - **Refactor:** Extracted clipboard attachment file extraction into a testable helper (`fisherdaddy`).
    - **Feature:** Added a "campaign final reward claim" feature (`Mind-Hand`).
- **Breaking Changes / Migration:** None noted in the provided data.
- **Link:** [LobsterAI 2026.7.16 Release](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.7.16)

### 3. Project Progress (Merged/Closed PRs Today)
The majority of work today was focused on the **renderer**, **cowork**, and **artifacts** modules, with a significant push on UI/UX improvements and stability.

- **UI Polish & Stability:**
    - [#2357 - `fix(artifacts)`](https://github.com/netease-youdao/LobsterAI/pull/2357): Fixed layout instability in the artifacts panel to prevent flickering during preview expansion.
    - [#2355 - `fix(window)`](https://github.com/netease-youdao/LobsterAI/pull/2355): Aligned Windows caption button hover colors for visual consistency.
    - [#2351 - `style(renderer)`](https://github.com/netease-youdao/LobsterAI/pull/2351): Refined Windows caption icon sizing and hover states.
    - [#2350 - `chore`](https://github.com/netease-youdao/LobsterAI/pull/2350): Optimized the sidebar ad banner.
    - [#2353 - `chore`](https://github.com/netease-youdao/LobsterAI/pull/2353): General main UI updates.

- **Core Features & Cowork:**
    - [#2348 - `feat(cowork)`](https://github.com/netease-youdao/LobsterAI/pull/2348): Surface structured run failure details in the error UI (provider, model, error code) to give users more technical insight.
    - [#2346 - `fix(cowork)`](https://github.com/netease-youdao/LobsterAI/pull/2346): Fixed email diagnostics opening in stale history instead of a new chat.
    - [#2352 - `feat(skin)`](https://github.com/netease-youdao/LobsterAI/pull/2352): Introduced a major new feature: **AI-generated app skin experience** (appearance customization, skin management).

- **Infrastructure & Build:**
    - [#2345 - `fix(build)`](https://github.com/netease-youdao/LobsterAI/pull/2345): Fixed NSIS web installer progress bar overlap and localized download prompts.
    - [#2347 - `chore(updater)`](https://github.com/netease-youdao/LobsterAI/pull/2347): Reduced automatic update check interval from 12 to 2 hours.
    - [#2354 - `fix(openclaw)`](https://github.com/netease-youdao/LobsterAI/pull/2354): Fixed a stale chat error after a successful deferred final action.

### 4. Community Hot Topics
- **Feature: Resizable Sidebar**
    - **Issue:** [#1314](https://github.com/netease-youdao/LobsterAI/issues/1314) (Open, 1 comment)
    - **PR:** [#1315](https://github.com/netease-youdao/LobsterAI/pull/1315) (Open, 0 comments)
    - **Analysis:** This is a long-standing (since April) user request for a resizable sidebar. The user explicitly provides technical constraints (min 180px, max 480px) and a clear use case. While a corresponding PR exists, it has been **stale for over 3 months**, indicating a bottleneck in review or merge. This is a high-value, low-complexity UX improvement.
- **Stale Issues Batch**
    - Issues like [#1354](https://github.com/netease-youdao/LobsterAI/issues/1354) (BSOD), [#1357](https://github.com/netease-youdao/LobsterAI/issues/1357) (Pageant not starting), and [#1359](https://github.com/netease-youdao/LobsterAI/issues/1359) (Tasks reappearing after deletion) were all closed today but have **zero user reaction** (👍: 0). This suggests maintainers are actively cleaning the backlog, but the lack of community engagement may indicate these are either edge-case bugs or the user base is small.

### 5. Bugs & Stability
No new critical, high-severity bugs were reported in the last 24 hours.

- **Bugs Resolved Today (Lower Severity):**
    - **Issue #1359 (Closed):** Deleted tasks reappearing after restart. (Data persistence consistency)
    - **Issue #1358 (Closed):** No visual feedback when clicking a scheduled task. (UI feedback)
    - **Issue #1354 (Closed):** BSOD when launching Pageant. (System stability - likely user environment issue)
- **Fix PRs Merged Today (No issues linked):**
    - [PR #2346](https://github.com/netease-youdao/LobsterAI/pull/2346): Email diagnostics opening in wrong chat.
    - [PR #2354](https://github.com/netease-youdao/LobsterAI/pull/2354): Stale chat error during deferred final actions.

### 6. Feature Requests & Roadmap Signals
- **High Likelihood (Next Version):**
    - **Resizable Sidebar (Issue #1314 & PR #1315):** The PR has been open for months. The recent activity on UI polish (caption buttons, skinning) suggests the team is in a "beautification" phase, making it an ideal time to merge this UX improvement.
    - **Scheduled Task UX (Issue #1358):** The lack of feedback for scheduled tasks is a clear pain point. A fix is likely to be prioritized.
- **Medium Likelihood:**
    - **Table Rendering Improvements (Issue #1311):** Handling raw tags in table content and implementing "hover to show full text" for truncated cells. This is a specific UI polish that could be bundled with other rendering fixes.
    - **Agent Name Validation (Issue #1360):** Preventing duplicate agent names. This is a low-effort, high-quality-of-life fix likely to be addressed soon.

### 7. User Feedback Summary
- **Satisfaction Signals:** The team is moving fast, merging PRs and fixing issues daily. The new AI-skin feature is a significant positive signal for user customization.
- **Dissatisfaction / Pain Points:**
    - **Inconsistent Feature State:** A user reported that while a task was deleted, it reappeared after restart (Issue #1359), highlighting a data persistence bug that erodes trust in automation.
    - **Hardware/Software Conflicts:** Reports of BSODs (Issue #1354) and silent failures of commands (Issue #1357) suggest instability when interacting with legacy Windows software (Pageant).
    - **Silent Operations:** The lack of visual feedback for scheduled tasks (Issue #1358) creates confusion about whether an action was taken.

### 8. Backlog Watch
- **Critical Stalled PR:**
    - **[PR #1308: `feat(cowork)`](https://github.com/netease-youdao/LobsterAI/pull/1308):** Isolates input draft per agent on the home screen. This has been **open and stale since April 2, 2026** (over 3 months). This is a significant UX feature that prevents context leakage between agents. It needs maintainer attention.
- **Critical Stalled Issue with Open PR:**
    - **[Issue #1314 / PR #1315: Resizable Sidebar](https://github.com/netease-youdao/LobsterAI/issues/1314):** As noted in "Community Hot Topics," this has a ready-to-merge PR but has been awaiting review for months. This is the most actionable item in the backlog.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-18

## 1. Today's Overview
Moltis shows moderate activity today with 1 open issue and 2 open pull requests updated in the last 24 hours, alongside 2 new releases. The project is in a steady development phase, with work focused on memory backend expansion and ACP (Agent Communication Protocol) integration improvements. No bugs or regressions were reported, and no PRs were merged or closed today, indicating a review/iteration phase. The community remains engaged around feature requests, particularly model routing capabilities.

## 2. Releases
Two patch releases were published today:
- **20260717.03** — likely a hotfix or minor iteration over the previous release.
- **20260717.02** — likely contains the changes merged from recent PRs (memory backend and ACP fixes).

No release notes or changelogs were provided in the data. No breaking changes or migration notes are available. The short revision gap suggests incremental improvements rather than major overhauls.

## 3. Project Progress
No PRs were merged or closed today. Two PRs remain open and under review:
- **PR #1158** (`feat(memory): add zvec vector database memory backend`) — experimental Zvec + redb-based memory backend, gated behind a `zvec` feature. This expands Moltis's storage options beyond the default backend.
- **PR #1157** (`fix(web): support ACP-only chat setup`) — improves UX for ACP-only configurations, including filtering session pickers and auto-selecting ACP agents when no LLM models are configured.

Both PRs were authored yesterday and are awaiting review or additional work.

## 4. Community Hot Topics
**Most active issue:**
- **#574** — `[Feature]: Model Routing Per topic` (open since Apr 6, 3 comments, 1 reaction, last updated today)
  - URL: [Issue #574](https://github.com/moltis-org/moltis/issues/574)
  - Underlying need: Users want intelligent routing of queries to different models based on topic/domain (e.g., code vs. creative writing). This reflects a desire for multi-model orchestration without manual selection—indicating Moltis's user base is moving toward complex, specialized workflows.

**No PRs had comments or reactions recorded.**

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported today. The project appears stable in the current release. The active PRs are feature additions and UX fixes rather than bug patches. No severity assessment applicable.

## 6. Feature Requests & Roadmap Signals
- **Model Routing Per Topic (Issue #574)** — The most prominent feature request. This would allow Moltis to automatically select the best LLM for a given query context. Given sustained interest (3 comments, 1 👍, updated over 3 months), this may appear in a future minor release once the core infrastructure (multi-model support, plugin architecture) matures.
- **Zvec memory backend (PR #1158)** — Experimental; if accepted, signals interest in alternative lightweight vector storage. Likely to remain feature-gated and experimental for one or two releases.

Prediction: Model routing is a mid-term roadmap item; Zvec backend could land in next release if review passes.

## 7. User Feedback Summary
- **Pain point (ACP-only setups)**: PR #1157 addresses a scenario where users want to use Moltis without any LLM models configured, relying solely on ACP agents. This suggests some users are using Moltis as an agent orchestration layer rather than a standalone LLM interface.
- **Use case (experimental memory)**: PR #1158 indicates power users are experimenting with custom infrastructure (llama-cpp server + Zvec) for embeddings and memory, showing a preference for self-hosted, composable stacks.
- **Feature demand**: The model routing request (Issue #574) highlights dissatisfaction with manual model switching—users want smarter defaults.

No explicit satisfaction/dissatisfaction signals beyond the feature requests themselves.

## 8. Backlog Watch
- **Issue #574 (Model Routing Per Topic)** — Open since Apr 6, 2026, updated today by the author. No maintainer response recorded. With 1 👍 and active discussion, this deserves an acknowledgement or roadmap placement from the team to signal whether it's under consideration.
  
No other long-unanswered issues were noted in the 24-hour window.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-18

## 1. Today's Overview

CoPaw (QwenPaw) shows **very high activity** today with 42 PRs and 25 Issues updated in the last 24 hours. A new patch release **v2.0.0.post3** shipped, primarily fixing an MCP driver migration issue and hardening CI workflows. The project merged/closed **25 PRs** (a high throughput rate), with significant progress on startup concurrency, graceful shutdown, and memory management. Community engagement is strong, with several multi-comment bug reports and feature discussions, particularly around Windows permissions, MCP performance, and per-chat agent controls. The backlog shows healthy maintainer response, with most critical bugs receiving fix PRs or being closed within 24–48 hours.

## 2. Releases

### v2.0.0.post3 — Patch Release
- **Published:** 2026-07-17
- **Tag:** [v2.0.0.post3](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0.post3)

**What's Changed:**
- **fix(mcp):** Migrate `${VAR}` headers to env credential refs during driver migration (PR [#6091](https://github.com/agentscope-ai/QwenPaw/pull/6091))
- **refactor(ci):** Harden desktop workflows and drop legacy verify dead code

**Breaking Changes:** None reported.

**Migration Notes:** No migration steps required for existing users; this is a bugfix-only patch.

## 3. Project Progress

**25 PRs merged/closed today** (24 closed + 1 already merged). Key advancements:

### Merged Highlights:
| PR | Title | Area |
|---|---|---|
| [#6198](https://github.com/agentscope-ai/QwenPaw/pull/6198) | Bound multi-agent startup and improve readiness UX | **Startup Performance** — replaces unbounded `asyncio.gather()` with concurrency limits + visible progress |
| [#6220](https://github.com/agentscope-ai/QwenPaw/pull/6220) | Don't persist unseeded token cache on shutdown | **Stability** — prevents corrupt `token_usage` cache files when shutdown occurs before cache is seeded |
| [#6218](https://github.com/agentscope-ai/QwenPaw/pull/6218) | Pass `model_slot_override` from HTTP request to model factory | **Runtime** — enables dynamic model overrides via API |
| [#6217](https://github.com/agentscope-ai/QwenPaw/pull/6217) | Treat unprobed multimodal as fail-open | **Bugfix** — prevents image stripping for models where multimodal support hasn't been probed yet |
| [#6204](https://github.com/agentscope-ai/QwenPaw/pull/6204) | Drop redundant nvidia-smi probe | **Performance** — eliminates duplicate GPU probe on every VRAM check |
| [#6234](https://github.com/agentscope-ai/QwenPaw/pull/6234) | Use absolute import in Tauri entry point | **Desktop** — fixes PyInstaller sandbox startup |
| [#6170](https://github.com/agentscope-ai/QwenPaw/pull/6170) | Add MAX_WAITTIME for browser use | **Safety** — caps model-supplied wait durations to prevent indefinite blocking |

### In-Progress/Open PRs (notable):
- [#6225](https://github.com/agentscope-ai/QwenPaw/pull/6225) — Graceful Desktop shutdown (fixes force-kill)
- [#6232](https://github.com/agentscope-ai/QwenPaw/pull/6232) — Cache and compress Console static assets
- [#6233](https://github.com/agentscope-ai/QwenPaw/pull/6233) — Separate tool call/result display controls
- [#6235](https://github.com/agentscope-ai/QwenPaw/pull/6235) — Manual memory index rebuild for ReMe Light
- [#6237](https://github.com/agentscope-ai/QwenPaw/pull/6237) — Improve Scroll history recall

## 4. Community Hot Topics

| Issue/PR | Comments | Subject |
|---|---|---|
| [#6161](https://github.com/agentscope-ai/QwenPaw/issues/6161) [CLOSED] | 7 | **Windows permission crash** — `v2.0.0.post2` fails under normal user after Win Update |
| [#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995) [OPEN] | 6 | **Silent message drops** — session-busy messages never queued (Feishu channel) |
| [#6155](https://github.com/agentscope-ai/QwenPaw/issues/6155) [OPEN] | 5 | **1.x → 2.0 migration regression** — embedding config, auto-memo, portrait issues |
| [#6221](https://github.com/agentscope-ai/QwenPaw/issues/6221) [CLOSED] | 5 | Test notification bot |

**Analysis:**
- **Windows permission issues are a top pain point** (3 related threads today). Users report **Run as Admin** is required post-Windows Update, and the `v2.0.0.post2` release forced UAC elevation. This suggests a regression in how the Desktop sidecar launches the backend.
- **Silent message drops** ([#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995)) in busy sessions is a **reliability concern** — users cannot trust the agent to handle concurrent input.
- **Migration fatigue** ([#6155](https://github.com/agentscope-ai/QwenPaw/issues/6155)) from 1.x to 2.0 surfaces multiple configuration regressions, suggesting insufficient backward-compatibility testing.

## 5. Bugs & Stability

### Critical / High Severity
| Issue | Severity | Status | Description |
|---|---|---|---|
| [#6161](https://github.com/agentscope-ai/QwenPaw/issues/6161) | **Critical** | **CLOSED** | Windows normal user can't launch `.bat` or `.vbs` after Win Update — stuck at `Waiting for HTTP ready...` |
| [#6169](https://github.com/agentscope-ai/QwenPaw/issues/6169) | **Critical** | **CLOSED** | `v2.0.0.post2` forces UAC elevation; exits if user declines — related to [#6161] |
| [#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995) | **High** | **OPEN** | Messages silently dropped when session busy — no queue, no error |
| [#6219](https://github.com/agentscope-ai/QwenPaw/issues/6219) | **High** | **OPEN** | Desktop force-kills backend instead of graceful shutdown — risks data loss |
| [#6155](https://github.com/agentscope-ai/QwenPaw/issues/6155) | **High** | **OPEN** | 1.x → 2.0 migration causes embedding, auto-memo, and portrait regressions |

### Medium Severity
| Issue | Severity | Status | Description |
|---|---|---|---|
| [#6003](https://github.com/agentscope-ai/QwenPaw/issues/6003) | **Medium** | **CLOSED** | Console doesn't display some Feishu-sent messages (executes silently) |
| [#6193](https://github.com/agentscope-ai/QwenPaw/issues/6193) | **Medium** | **OPEN** | MCP drivers start sequentially (8 MCP = ~40s) — could be parallel (~5s) |
| [#6202](https://github.com/agentscope-ai/QwenPaw/issues/6202) | **Medium** | **CLOSED** | Desktop progressive rendering broken for >20 skills |
| [#6201](https://github.com/agentscope-ai/QwenPaw/issues/6201) | **Medium** | **CLOSED** | PubMed MCP causes llama.cpp error |
| [#5934](https://github.com/agentscope-ai/QwenPaw/issues/5934) | **Medium** | **CLOSED** | Windows `file:///C:/...` URI converted to invalid `/C:/...` path |
| [#6144](https://github.com/agentscope-ai/QwenPaw/issues/6144) | **Medium** | **CLOSED** | Multi-agent startup memory peak from concurrent ReMe init |
| [#6199](https://github.com/agentscope-ai/QwenPaw/issues/6199) | **Low** | **OPEN** | Telegram link intermittently broken after v2.0 |

**Fixes in Progress:** PR [#6225](https://github.com/agentscope-ai/QwenPaw/pull/6225) directly addresses the graceful shutdown issue [#6219]. The MCP sequential startup [#6193] is acknowledged but no fix PR yet. The migration regression [#6155] remains open.

## 6. Feature Requests & Roadmap Signals

### High Engagement / Likely for Next Release

| Issue | Area | Request |
|---|---|---|
| [#6227](https://github.com/agentscope-ai/QwenPaw/issues/6227) | **MCP / Per-Chat** | Per-chat MCP server selection + granular tool-level enable/disable (👍1) |
| [#6229](https://github.com/agentscope-ai/QwenPaw/issues/6229) | **Reasoning** | User-controlled reasoning depth (Light/Medium/Deep/Auto) |
| [#6228](https://github.com/agentscope-ai/QwenPaw/issues/6228) | **Search** | Per-chat toggle to enable/disable internet search |
| [#6230](https://github.com/agentscope-ai/QwenPaw/issues/6230) | **Model Support** | Hermes model family as secondary reasoning engine |
| [#5976](https://github.com/agentscope-ai/QwenPaw/issues/5976) | **Channels** | Separate control for tool call params vs. results in channel output |
| [#6231](https://github.com/agentscope-ai/QwenPaw/issues/6231) | **Config** | Multiple configurations for same model ID (e.g., thinking vs. non-thinking) |
| [#6205](https://github.com/agentscope-ai/QwenPaw/issues/6205) | **Console** | Cache and compress static assets for low-bandwidth hosts |
| [#5919](https://github.com/agentscope-ai/QwenPaw/issues/5919) | **Config** | Global runtime configuration (avoid per-agent repeat setup) |
| [#6162](https://github.com/agentscope-ai/QwenPaw/issues/6162) | **Config** | Auto-detect model context window instead of manual `max_input_length` |

**Prediction:** **Per-chat MCP/tool control** ([#6227](https://github.com/agentscope-ai/QwenPaw/issues/6227)) and **console asset caching** ([#6205](https://github.com/agentscope-ai/QwenPaw/issues/6205)) have associated PRs already ([#6233](https://github.com/agentscope-ai/QwenPaw/pull/6233), [#6232](https://github.com/agentscope-ai/QwenPaw/pull/6232)) and are likely for the next minor release. The **reasoning depth** feature ([#6229](https://github.com/agentscope-ai/QwenPaw/issues/6229)) aligns with the `DefaultMode` refactor in PR [#6210](https://github.com/agentscope-ai/QwenPaw/pull/6210).

## 7. User Feedback Summary

**Pain Points:**
1. **Windows permission hell** (3 issues): "Cannot start without Admin rights after Windows update" — this is the #1 user frustration today, affecting both `.bat` and `.vbs` launchers.
2. **Migration friction** ([#6155](https://github.com/agentscope-ai/QwenPaw/issues/6155)): "Upgrading from 1.x to 2.0 broke embedding, auto-memo, and portrait" — user feels the migration was not smooth.
3. **Silent failures** ([#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995)): "New messages are silently dropped when session busy — no queue, no error" — undermines trust in reliability.
4. **Agent configuration fatigue** ([#5919](https://github.com/agentscope-ai/QwenPaw/issues/5919)): "Every new agent requires reconfiguring everything" — users want global defaults.

**Satisfaction Signals:**
- Users are actively requesting advanced features (per-chat MCP, reasoning depth, Hermes support) — indicates confidence in the platform's future.
- Multiple users contributed detailed bug reports with root cause analysis and fix suggestions, showing a technically engaged community.

**Use Cases Emergent:**
- **Multi-agent deployments** with 36+ agents, triggering startup memory concerns ([#6144](https://github.com/agentscope-ai/QwenPaw/issues/6144))
- **Low-bandwidth hosting** of the Console frontend ([#6205](https://github.com/agentscope-ai/QwenPaw/issues/6205))
- **Mixed reasoning models** with user-controlled depth ([#6229](https://github.com/agentscope-ai/QwenPaw/issues/6229))

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Subject | Status |
|---|---|---|---|
| [#5187](https://github.com/agentscope-ai/QwenPaw/pull/5187) | **33 days** | Windows desktop GUI automation (UIA + Tauri control mode) | Open PR, no recent updates — large feature, may need review cycle |
| [#5698](https://github.com/agentscope-ai/QwenPaw/pull/5698) | **17 days** | `run_tool_batch` adaptation for agentscope 2.0 + control-flow | Open PR, last activity today but no merge yet |
| [#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995) | **6 days** | Silent message drops when session busy | **OPEN** — no fix PR exists despite 6 comments; high severity |
| [#6155](https://github.com/agentscope-ai/QwenPaw/issues/6155) | **3 days** | 1.x → 2.0 migration regression | **OPEN** — 5 comments, detailed bug report with reproduction, no fix PR yet |
| [#5919](https://github.com/agentscope-ai/QwenPaw/issues/5919) | **8 days** | Request for global runtime configuration | **OPEN** — 1 comment, no maintainer response |

**Notable:** PR [#5187](https://github.com/agentscope-ai/QwenPaw/pull/5187) (Windows computer-use automation) has been open for 33 days and is a significant feature. It received updates today (2026-07-17) but has not been merged. This may be a strategic feature for Desktop v2.1.

### Recently Closed Issues (avoid re-opening)
- 10 issues closed today, including Windows permission bugs ([#6161](https://github.com/agentscope-ai/QwenPaw/issues/6161), [#6169](https://github.com/agentscope-ai/QwenPaw/issues/6169)) and desktop rendering ([#6202](https://github.com/agentscope-ai/QwenPaw/issues/6202)). Good maintainer response time.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest – 2026-07-18

## Today's Overview
ZeptoClaw is in a **stable, low-activity maintenance phase** today, with no pull requests merged or opened and no new releases published. The project's entire activity over the past 24 hours consisted of **8 issues being closed** without any remaining open items. All closed issues were routine, batch-processed metadata updates centered on the "D5 gate-point" reanalysis workflow for a subset of known vulnerabilities (Issues #263, #264, #268, #329, #466). This pattern indicates that the maintainer team is focused on backfilling structured security metadata rather than introducing new features or addressing bugs. The project's pulse is calm, with no signs of tension or unresolved community concerns.

## Releases
*No new releases today.* The latest release remains the previously published version; no changelog or migration notes are required.

## Project Progress
- **Merged/Closed PRs:** None. No pull requests were updated, merged, or closed in the last 24 hours.
- **Feature Advancement:** No features were advanced today. The eight closed issues represent chore-level data maintenance, not code changes. Specifically, the team processed D5 gate-point and cross-component metadata for six distinct vulnerability issues (Issue-zeptoclaw-263, 264, 268, 329, 466) across two series of tickets: the `chore(analysis)` series (Issues #637–#640) and the `chore(llm-enhance)` series (Issues #641–#643). These are essentially "bookkeeping" updates that bring structured analysis data in line with the project's gate-based security review methodology.

## Community Hot Topics
*No highly active discussions or reactions were observed today.* Each of the eight closed issues received exactly **1 comment** (likely an automated workflow confirmation or a single reviewer response) and **zero thumbs-up reactions**. With no open issues and no PR conversation threads, the community's engagement is effectively silent. The only notable pattern is the *task chain* nature of the work—issues were created, processed, and closed in rapid succession, suggesting a bot or script-driven workflow rather than organic community discussion. If you track the underlying security data, the most relevant linked threads are:
- Issue [#640](https://github.com/qhkm/zeptoclaw/issues/640) (row 38, issue-466) – comments on final data shape
- Issue [#642](https://github.com/qhkm/zeptoclaw/issues/642) (row 37, issue-329) – receipt-writing step
  
These are not "hot topics" in the traditional sense, but they represent the current focus of the project's analysis pipeline.

## Bugs & Stability
- **Bugs Reported:** None. No new bug, crash, or regression reports were filed today.
- **Stability Assessment:** The project appears stable. The absence of any open bugs, regressions, or failures in the closing of 8 processing tasks suggests the D5 gate-point workflow is executing without issues.

## Feature Requests & Roadmap Signals
- **New Feature Requests:** None were posted today.
- **Roadmap Prediction:** Given the sustained pattern of D5 metadata backfilling across multiple issue numbers (263, 264, 268, 329, 466) and two ticket series, it is reasonable to predict that **the next release** will include a consolidated data release or a refreshed vulnerability analysis dataset. No code features (e.g., new LLM enhancements, API changes, or UI updates) appear to be in the pipeline based on this day's data.

## User Feedback Summary
- **Pain Points:** No user-reported pain points surfaced today.
- **Use Cases:** All observed use cases are internal/project-driven data-enrichment tasks, not end-user interactions. There is no evidence of satisfaction or dissatisfaction from external users.
- **Overall Sentiment:** Neutral. The project is operating in a "quiet maintenance" mode with no friction.

## Backlog Watch
- **Long-unanswered Issues:** There are **zero open issues** at this time. The entire issue tracker was cleared today with the closing of 8 items. No PRs are awaiting attention. The backlog is effectively empty, meaning the maintainers have fully addressed all known work items as of this date. No items require maintainer attention.

---

*This digest was generated from data available on 2026-07-18. All links point to the ZeptoClaw repository at [github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw).*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-18

## Today's Overview
ZeroClaw shows **sustained high activity** with 50 issues and 50 PRs updated in the last 24 hours, though no new releases were cut. The project maintains a **healthy open/closed ratio** of ~6:1 across both issues (43 open vs 7 closed) and PRs (41 open vs 9 merged/closed), indicating active development with a growing backlog. Security and architecture work dominates the conversation, with several high-priority RFCs around supply-chain signing, OIDC authentication, and air-gapped execution modes moving toward acceptance. Community engagement remains strong, with the A2A protocol feature (#3566) and multi-agent routing (#2767) continuing to attract the most reactions and sustained discussion.

## Releases
**No new releases** were published in the last 24 hours. The last release (not shown in this digest window) predates the current activity spike.

## Project Progress
Nine PRs were merged or closed today, representing a **mix of bug fixes, documentation improvements, and feature work**:

| PR | Summary | Type |
|----|---------|------|
| [#9045](https://github.com/zeroclaw-labs/zeroclaw/pull/9045) | Document generated docs and localization lifecycles | docs |
| [#8974](https://github.com/zeroclaw-labs/zeroclaw/pull/8974) | Fix ESP32 hardware design link | docs |
| [#8896](https://github.com/zeroclaw-labs/zeroclaw/pull/8896) | Narrow benchmark compile experiment in CI | CI |
| [#8882](https://github.com/zeroclaw-labs/zeroclaw/pull/8882) | Cover escaped schema refs in properties | test |
| [#8768](https://github.com/zeroclaw-labs/zeroclaw/pull/8768) | Expose channel root settings (ZeroCode TUI) | bug fix |
| [#8743](https://github.com/zeroclaw-labs/zeroclaw/pull/8743) | Cover LinkedIn Schema V4 removal scope | test |
| [#8742](https://github.com/zeroclaw-labs/zeroclaw/pull/8742) | Add no-toml syntax examples for SOP docs | docs |
| [#8558](https://github.com/zeroclaw-labs/zeroclaw/pull/8558) | Link skills to editor in web dashboard | feature |
| [#8426](https://github.com/zeroclaw-labs/zeroclaw/pull/8426) | Allow `ZEROCLAW_GATEWAY_HOST` env override in Vite dev server | enhancement |

Notable progress: the **ZeroCode TUI** received a quality-of-life fix (channel root settings now visible), the **web dashboard** gained skill editor linking, and SOP documentation was improved with working examples. The ESP32 firmware documentation link fix suggests ongoing hardware integration work.

## Community Hot Topics

### Most Active Discussions (by comments)

1. **[#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) — Supply chain signing & SLSA provenance** (11 comments)
   - RFC for hardware-backed PGP keys, multi-party quorum, and offline signing
   - Expands hardened CI pipeline phase, blocked on upstream decisions

2. **[#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) — Per-sender RBAC for multi-tenant deployments** (10 comments)
   - Strong demand for isolating user classes (customers, operators, developers)
   - Accepted status indicates maintainers see this as a v0.9.0 priority

3. **[#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) — A2A (Agent-to-Agent) Protocol Support** (8 comments, 7 👍)
   - Highest-reaction issue, community strongly wants interop with other agent frameworks
   - Tied to #2767 (multi-agent routing) and #7218 (agent discovery)

4. **[#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) — Discord channel filtering** (7 comments)
   - Request to restrict bot to specific channels, consistent with Matrix/Nextcloud patterns
   - Simple config addition with broad operator appeal

5. **[#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) — OIDC authentication provider support** (7 comments)
   - Umbrella RFC for pluggable auth providers, target v0.9.0
   - Part of a coordinated security architecture push alongside #7142 and #6293

### Underlying Needs
The community is clearly signaling a **three-phase maturity path**: (1) **multi-tenant isolation** (RBAC, channel filtering, multi-agent routing), (2) **security hardening** (supply-chain signing, OIDC, air-gapped mode), and (3) **interoperability** (A2A protocol, LAN discovery). The recurring theme is enterprises wanting to deploy ZeroClaw in production with proper access controls and compliance.

## Bugs & Stability

### Critical (S1) Issues
| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) | SOPs not detected through web dashboard chat session | No |
| [#8560](https://github.com/zeroclaw-labs/zeroclaw/issues/8560) | `browser_open` hangs agent turn on headless hosts (also affects TTS, ffmpeg) | In progress |
| [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) | macOS app fails after install — permissions/crash loop | Blocked |

### High Severity (S2)
| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#5628](https://github.com/zeroclaw-labs/zeroclaw/issues/5628) | Daemon service auto-start causes port conflict with manual runs | No |
| [#5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269) | Installation documentation/methods need improvement | No |
| [#5869](https://github.com/zeroclaw-labs/zeroclaw/issues/5869) | `rumqttc` v0.25.1 pins vulnerable TLS dependencies (4 RUSTSEC advisories) | Blocked on upstream |

### Notable Stability Risks
- **macOS desktop app** (#7527) — complete failure path with zero recovery, blocked and needs domain expert
- **`browser_open` hang** (#8560) — affects multiple subsystems (browser, TTS, ffmpeg), amplification effect on channel reliability
- **Dependency vulnerability** (#5869) — P1 priority but blocked on MQTT library upstream, affects all MQTT users

## Feature Requests & Roadmap Signals

### Strong Candidate for Next Release (v0.9.0)
Based on acceptance status and maintainer engagement:

1. **OIDC provider support** ([#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)) — Pluggable authentication, umbrella for security architecture
2. **Pluggable security enforcement** ([#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)) — Trait-based security enforcement surface
3. **Memory lifecycle decoupling** ([#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)) — `MemoryStrategy` trait for pluggable policies
4. **A2A protocol support** ([#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566)) — Agent-to-agent interoperability with A2A-compliant systems
5. **Multi-agent routing** ([#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767)) — Isolated agents with separate workspaces/sessions

### Emerging Trends
- **Wasm-first plugin runtime** ([#8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135)) — Eliminate Node.js dependency, signed distribution
- **Air-gapped execution** ([#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293)) — Split online/offline daemons for enclave support
- **Granular sandbox policy** ([#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)) — Config-driven filesystem/network restrictions across Landlock, Bubblewrap, Seatbelt

## User Feedback Summary

### Pain Points
- **Documentation gaps**: Missing cron documentation (#7762), installation docs need overhaul (#5269), SOP tool is under-documented
- **macOS support broken**: Desktop app unusable (#7527), likely losing macOS users
- **Multi-tenancy friction**: Single security profile prevents serving different user classes (#5982)
- **Tool reliability**: `browser_open` hangs on headless systems (#8560), file_read fails on non-UTF-8 text (#7521)
- **Configuration discoverability**: ZeroCode TUI hides channel-level settings (#8768 fix merged today)

### Positive Signals
- **Strong community engagement**: 7 👍 on A2A protocol feature, 9 👍 on multi-agent routing
- **Contributor growth**: PRs from 8 distinct authors in this digest (Audacity88, JordanTheJet, vrurg, dimavrem22, tzy-17, Rhoahndur, perlowja, Alix-007)
- **Quickstart improvements**: Inkbox channel PR (#8384) includes schema-walked onboarding, showing UX focus

### Satisfaction Indicators
- High number of accepted RFCs indicates maintainers are responsive to community proposals
- No "stale" issues in top 30 despite some being 4+ months old (#2767, #3566, #5628 all have no-stale label)

## Backlog Watch

### Critical Issues Needing Maintainer Attention

| Issue | Age | Priority | Why Blocked |
|-------|-----|----------|-------------|
| [#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) — Supply chain signing | 26 days | P2 | Blocked status, needs upstream decisions |
| [#5869](https://github.com/zeroclaw-labs/zeroclaw/issues/5869) — rumqttc vulnerability | 91 days | P1 | Blocked on `rumqttc` upstream release with fixed deps |
| [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) — macOS app broken | 36 days | P1 | Blocked, no fix PR, needs mac domain expert |
| [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) — Air-gapped mode RFC | 76 days | P2 | Needs author action, blocked on design decisions |
| [#7521](https://github.com/zeroclaw-labs/zeroclaw/issues/7521) — file_read non-UTF-8 text | 37 days | P2 | Accepted but no PR yet |

### PRs Needing Author Action
- [#8996](https://github.com/zeroclaw-labs/zeroclaw/pull/8996) — Goal preservation across daemon reload (11 days stale)
- [#8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384) — Inkbox channel (21 days stale)
- [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) — Matrix progress drafts (20 days stale)
- [#8866](https://github.com/zeroclaw-labs/zeroclaw/pull/8866) — MCP registry sharing (10 days stale)

### Notable Maintainer Transition
PR [#9107](https://github.com/zeroclaw-labs/zeroclaw/pull/9107) announces that **@singlerider** left the project on 2026-07-15, with @JordanTheJet taking over as successor on all 44 CODEOWNERS entries. This is a significant maintainer change that may affect review velocity on security/architecture RFCs (singlerider authored #7141, #7142, #6293, #7218).

---

**Overall Assessment**: ZeroClaw is in an **active growth phase** with strong community signals and ambitious architectural work. The main risks are (1) maintainer bandwidth after singlerider's departure, (2) several P1 bugs without fix paths (especially macOS), and (3) a growing blocklist that could stall the next release cycle. The security architecture push (OIDC, supply-chain signing, air-gapped mode) positions the project well for enterprise adoption but adds complexity.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*