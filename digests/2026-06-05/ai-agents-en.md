# OpenClaw Ecosystem Digest 2026-06-05

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-05 00:28 UTC

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

Here is the OpenClaw project digest for **2026-06-05**.

---

## OpenClaw Project Digest – 2026-06-05

### 1. Today's Overview
OpenClaw is experiencing a period of extremely high activity and significant churn, with **500 issues** and **500 PRs** updated in the last 24 hours. While the development velocity is immense, the project is struggling with a wave of regressions, data loss bugs, and integration failures following recent releases (2026.5.22 and 2026.6.1). The triage and maintainer teams are heavily loaded, as indicated by the high volume of items awaiting maintainer review and product decisions. The most critical active bugs involve data corruption during upgrades, session state loss, and provider integration failures.

### 2. Releases
**No new releases today.**

The last stable version was `2026.6.1`, which is the subject of several high-severity bug reports, including a silent cron state wipe and a broken OpenAI Responses transport.

### 3. Project Progress
The community is highly active in patching recent regressions. Notable closed/merged PRs and items advancing today:

- **Connection & Delivery Fixes:**
    - `#90490` (OPEN): Fix for gateway retry restart continuation recovery, addressing stranded sessions after startup.
    - `#85249` (OPEN): Guard against undefined `sourceDelivery` in the isolated cron executor to prevent `TypeError` crashes.
    - `#88992` (OPEN): Fix for recovering stranded replies in `message_tool_only` mode when the LLM forgets to call the message tool.
    - `#89975` (OPEN): Suppress direct tool-error progress leaks in chat channels.
- **UI & Polish:**
    - `#90484` (OPEN): Added tooltips to clarify the "Reasoning" and "Thinking" controls in the Web UI to resolve a naming collision.
- **Infrastructure & QA:**
    - `#90480` (OPEN): Expanding WhatsApp live QA coverage to catch regressions earlier.
    - `#90485` (CLOSED): Fix for usage dashboard ranges being inflated by untimestamped cache entries.
    - `#90482` (CLOSED): Auto-fix for current main CI failures.

### 4. Community Hot Topics
The most engaged conversations highlight deep frustration with data integrity and broken core features.

- **[Bug]: Silently lost connection to Slack** (`#72808`)
    - **Comments:** 20 | **Reactions:** 3 👍
    - **Summary:** A user's Slack connection silently dropped mid-demo, causing the bot to become unresponsive. This is a **Diamond Lobster** rated (critical) bug that undermines user trust.
    - **Link:** [Issue #72808](https://github.com/openclaw/openclaw/issues/72808)

- **[Bug]: 2026.6.1 OpenAI ChatGPT Responses transport fails** (`#90083`)
    - **Comments:** 11 | **Reactions:** 3 👍
    - **Summary:** Upgrading to 2026.6.1 breaks OpenAI inference for `gpt-5.4` and `gpt-5.5` with `invalid_provider_content_type`. This is a critical P1 blocker for users relying on the default runtime.
    - **Link:** [Issue #90083](https://github.com/openclaw/openclaw/issues/90083)

- **[Bug]: Stuck Session Recovery mechanism fails** (`#76038`)
    - **Comments:** 6 | **Reactions:** 2 👍
    - **Summary:** A detailed analysis shows that the Stuck Session Recovery is triggering incorrectly ("skipped, reason=active_reply_work") or taking too long in preprocessing, leading to gateway timeouts and systemd kills.
    - **Link:** [Issue #76038](https://github.com/openclaw/openclaw/issues/76038)

- **Cron state silently wiped during SQLite migration** (`#90072`)
    - **Comments:** 5 | **Reactions:** 3 👍
    - **Summary:** Upgrading to 2026.6.1 silently deleted 44 out of 45 cron jobs during a SQLite migration. This is a severe data loss bug that erases user automation.
    - **Link:** [Issue #90072](https://github.com/openclaw/openclaw/issues/90072)

- **[Bug]: active-memory circuit breaker too aggressive** (`#90082`)
    - **Comments:** 5 | **Reactions:** 2 👍
    - **Summary:** The circuit breaker for `active-memory` is flooding main sessions with a useless fallback prompt ("Agent couldn't generate a response..."), effectively breaking the memory system for many users.
    - **Link:** [Issue #90082](https://github.com/openclaw/openclaw/issues/90082)

### 5. Bugs & Stability
The `2026.6.1` release appears to have introduced several regressions that are actively degrading the user experience.

| Severity / Rating | Issue ID | Summary | Status |
| :--- | :--- | :--- | :--- |
| **🦞 Diamond Lobster** | #90083 | OpenAI Responses transport fails for `gpt-5.4/5.5` on 2026.6.1 | Open, P1 |
| **🦞 Diamond Lobster** | #90072 | Cron state silently wiped during SQLite migration on 2026.6.1 | Open |
| **🐚 Platinum Hermit** | #90082 | active-memory circuit breaker too aggressive; pollutes main session | Open, P1 |
| **🦞 Diamond Lobster** | #90093 | `openai-chatgpt-responses` native replay sends encrypted reasoning, breaking next turn | Open |
| **🦞 Diamond Lobster** | #90036 | Session model route drifts from `gpt-5.5` to `codex/gpt-5.5` with native Codex runtime | Open |

- **Fix PRs in progress:** PR `#90487` aims to harden ChatGPT Responses streams for missing content-types, a likely fix for `#90083`. PR `#90488` fixes env placeholder collection for managed services.
- **Regressions:** Issues #90083, #90072, and #90082 are confirmed regressions from the `2026.5.x` line to `2026.6.1`.

### 6. Feature Requests & Roadmap Signals
- **Feature: GitHub-backed ClawHub Skills** (`PR #90478`)
    - A large PR is open that introduces the ability to install skills directly from GitHub repos via the ClawHub API. This is a significant roadmap item for expanding the plugin ecosystem.
    - **Link:** [PR #90478](https://github.com/openclaw/openclaw/pull/90478)

- **Feature: Pre-auth Access Requests & Grouped DM Allowlists** (`PR #89569`)
    - A large feature is in review for Telegram and WhatsApp that allows silent access requests for blocked users and trust propagation via sender groups. This targets enterprise/business use cases.
    - **Link:** [PR #89569](https://github.com/openclaw/openclaw/pull/89569)

- **Feature: Persistent Hook Session Mode** (`PR #75918`)
    - A long-standing feature (revived from closed PR #27193) to add `sessionMode` support for webhooks, enabling multi-turn transcript reuse. This is a priority for integration workflows.
    - **Link:** [PR #75918](https://github.com/openclaw/openclaw/pull/75918)

### 7. User Feedback Summary
User sentiment is currently strained, dominated by frustration over **breaking changes and silent failures**.
- **Pain Points:**
    - **Silent Data Loss:** Upgrades deleting cron jobs (#90072) and lost Slack connections (#72808) are eroding trust.
    - **Provider Instability:** The OpenAI transport failure (#90083) and Codex runtime drift (#90036) are blocking core functionality.
    - **Context & Session Issues:** Users are experiencing session bloat, stuck sessions (#76038), and broken thread replies across Matrix (#87307), Telegram (#64810, #82002), and Discord (#73802).
- **Use Cases:** Users are heavily reliant on multi-channel communication (Slack, Discord, Matrix, Telegram) for both internal and external demos. The cron system is critical for automation, and its loss is a major setback.
- **Satisfaction/Dissatisfaction:** The overall tone is highly dissatisfied with the `2026.6.1` upgrade experience. Users appreciate rapid fixes (many PRs created today) but are frustrated by the high regression rate.

### 8. Backlog Watch
The following items, some stale for weeks, remain critical and lack clear forward motion.

- **#63216: Repeated hard resets on same session key** (Diamond Lobster, P1)
    - Open since April 8. Describes a fundamental context-overflow recovery loop. Requires product decision and live repro.
    - **Link:** [Issue #63216](https://github.com/openclaw/openclaw/issues/63216)

- **#67777: Subagent completion delivery can be lost** (Diamond Lobster, P1)
    - Open since April 16. A complex race condition in the subagent architecture. Requires product decision.
    - **Link:** [Issue #67777](https://github.com/openclaw/openclaw/issues/67777)

- **#67419: Session context bloat re-injecting bootstrap files every turn** (Platinum Hermit, P2)
    - Open since April 15. A significant token waste issue. Needs maintainer review and a live repro.
    - **Link:** [Issue #67419](https://github.com/openclaw/openclaw/issues/67419)

- **#65624: Mattermost slash commands expose cleartext reusable tokens** (Diamond Lobster, P1)
    - Open since April 13. A High severity security vulnerability (CVSS 8.6). Requires a security review and product decision.
    - **Link:** [Issue #65624](https://github.com/openclaw/openclaw/issues/65624)

- **#81864: Feat: Add plain-language plugin approvals** (PR)
    - Open since May 14. A large, cross-platform security feature that is waiting on an author response. It is rated **Gold Shrimp** (high priority for UX).
    - **Link:** [PR #81864](https://github.com/openclaw/openclaw/pull/81864)

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report.

---

### Cross-Project Ecosystem Report: AI Agent Open-Source Landscape
**Date:** 2026-06-05
**Audience:** Technical Decision-Makers & Developers

### 1. Ecosystem Overview

The open-source personal AI agent space is in a state of hyper-competitive, rapid iteration. Projects are converging on a core stack of features—multi-channel communication (Slack, Telegram, Discord, WhatsApp), Model Context Protocol (MCP) integration, and agent collaboration (subagents, loops)—while diverging in their target audiences and architectural philosophies. A critical tension has emerged between **stability and velocity**, with several projects (most notably OpenClaw and ZeroClaw) experiencing significant regressions from high-speed development. The ecosystem is maturing past the “demo” phase, with a strong user backlash against silent data loss and broken core features, signaling that reliability is becoming the key differentiator.

### 2. Activity Comparison

| Project | Issues (Updated/New) | PRs (Updated/Merged) | Release Today | Health Score | Primary State |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 / High | 500 / High | None | **Critical (Regressing)** | Firefighting Regressions |
| **IronClaw** | 40 / High | 50 / High | None | **Healthy** | Rapid Feature Integration |
| **ZeroClaw** | 35 / High | 50 / High | None | **Strained (High Risk)** | Pre-Release Push & Bug Fixing |
| **NanoBot** | 6 / Low | 77 / High | None | **Excellent** | Hardening & Polish |
| **Hermes Agent** | 50 / High | 50 / High | None | **Fair** | Feature-Rich but Unstable |
| **CoPaw (QwenPaw)** | 32 / High | 26 / High | **v1.1.11-beta.1** | **Good** | Active Feature Dev & Bug Fixing |
| **LobsterAI** | 1 / Low | 17 / High | None | **Healthy** | Consolidation & Stability |
| **PicoClaw** | 5 / Low | 19 / High | None | **Good** | Consolidation & Bug Fixing |
| **NanoClaw** | 1 / Low | 8 / Medium | None | **Good** | Channel Integration Fixes |
| **Moltis** | 2 / Low | 4 / Low | None | **Fair** | Slow Feature Dev |

**Analysis:** The ecosystem is divided into a "tier 1" of high-activity, high-risk projects (OpenClaw, ZeroClaw) and a "tier 2" of projects with healthier, more stable development cycles (NanoBot, PicoClaw, CoPaw). IronClaw is an outlier with high velocity and high health, likely due to strong architectural discipline.

### 3. OpenClaw's Position

- **Advantages:** The clear market leader in community size (500 issues/PRs daily) and feature surface area. It is the de-facto reference implementation, defining patterns for skills, channels, and agent workflows that others adopt.
- **Technical Approach:** A monolithic, high-velocity project that prioritizes rapid feature addition over process. This creates significant fragility.
- **Weaknesses:** Currently suffering a **crisis of confidence** due to severe regressions in the `2026.6.1` release (data loss, broken provider transport). The community is vocal and frustrated. Its position as the "default choice" is being challenged by more stable alternatives like **NanoBot** and **CoPaw**.
- **Community Size:** By an order of magnitude, it has the largest and most engaged community, but this also generates the highest noise-to-signal ratio and triage burden.

### 4. Shared Technical Focus Areas

The following are requirements emerging organically across multiple projects, highlighting core user needs.

| Requirement | Projects Affected | Specific Need |
| :--- | :--- | :--- |
| **Production-Grade Reliability** | OpenClaw, Hermes Agent, ZeroClaw | Silent data loss (cron jobs, sessions), broken provider integrations, and session corruption are the #1 source of user frustration across the board. **Reliability is the new feature.** |
| **MCP/Subagent Stability** | NanoBot, OpenClaw, LobsterAI, PicoClaw, CoPaw | MCP servers are universally fragile. Issues with reconnection, tool inheritance, session termination, and startup latency are being patched across all projects. |
| **Task-Specific Model Configuration** | NanoBot (#912), Hermes Agent, CoPaw (#4757) | Power users reject the "one model for everything" paradigm. They need separate models/concurrency for conversation, tools, and browser use. |
| **Enterprise & Multi-User Support** | Hermes Agent (#23717), IronClaw (Reborn), ZeroClaw (#7142), CoPaw (Feishu/QQ) | Projects are adding AAD/OIDC auth, pluggable session databases (PostgreSQL), and security hooks, signaling a push beyond individual developers. |
| **Automation & Cron/Cycle Reliability** | OpenClaw, Hermes Agent, CoPaw | Users depend on scheduled jobs and agent loops. Bugs in cron execution (OpenClaw, Hermes Agent) and loop termination (IronClaw) cause high-severity disruptions. |
| **Desktop UX & Streaming** | Hermes Agent, ZeroClaw, CoPaw | The desktop chat experience is a pain point. Issues include flickering transcripts, broken auto-scroll, and a lack of basic commands (slash commands, file upload). |

### 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | IronClaw | ZeroClaw | CoPaw |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Target User** | Power User / Hobbyist | Developer / Tinkerer | Enterprise / Platform | Power User / Hobbyist | Developer / Enterprise |
| **Primary Stack** | Python / Node.js | Python | Rust | Rust | Python |
| **Core Strength** | Ecosystem & Features | Clean, Stable Codebase | Architecture & Pluggability | Resource Efficiency & Speed | Plugin System (Skills) |
| **Key Weakness** | Regression Rate | Feature Velocity | Complexity | Build Stability | Desktop/LAN UX |
| **Unique Feature** | GitHub-backed ClawHub Skills | Agent Hook Lifecycle | Reborn Architecture (Lanes) | WASM Component Model | Desktop Pet Plugin |
| **Architecture** | Monolithic, High-Churn | Modular, Stable | Service-Oriented (Reborn) | Modular, Rapid Iteration | Plugin-Driven, Responsive |

**Summary:** The ecosystem is bifurcating into **“Expressive & Broad”** (OpenClaw, CoPaw) and **“Robust & Lean”** (NanoBot, ZeroClaw). IronClaw stands apart as the only architecturally ambitious enterprise-oriented project. The Rust-based projects (ZeroClaw, IronClaw) are gaining traction for their resource efficiency.

### 6. Community Momentum & Maturity

- **Rapid Iteration (High Risk):** **OpenClaw** and **ZeroClaw** are moving fastest but are sacrificing stability, creating a "boom or bust" cycle for their user bases.
- **Active Hardening (Healthy):** **NanoBot** and **CoPaw** are in a strong, productive phase. They maintain high merge velocity while actively addressing regressions and security issues, indicating mature development processes.
- **Stable & Consolidating:** **PicoClaw**, **LobsterAI**, and **NanoClaw** have lower activity but are focused on fixing existing bugs. They are reliable choices for users who don't need the latest edge features.
- **Feature-Rich but Fragile:** **Hermes Agent** has a large community and active development but is struggling with cross-platform (macOS, Windows, Linux) and remote deployment stability.
- **Slow Burn:** **Moltis** has low activity. It is a niche project focused on browser automation.

### 7. Trend Signals

Industry trends for AI agent developers extracted from community feedback:

1.  **"Reliability First" is the New Moat:** Users are vocal about not trusting agents with data. Projects that solve silent failures (OpenClaw's data loss, Hermes Agent's session corruption) will win long-term loyalty over those that ship the fastest.
2.  **From "Chat" to "Automation Engine":** The high demand for cron jobs, agent loops, and script execution signals that agents are no longer just chat interfaces; they are evolving into general-purpose automation runtimes. The **cron** (scheduled task) feature is now a primary requirement.
3.  **Agent-to-Agent is the Next Frontier:** The high engagement on A2A protocol support (**ZeroClaw #3566**, **IronClaw** subagents) and subagent features across the ecosystem indicates a strong industry push towards multi-agent interactions. This is a key area for differentiation.
4.  **The Desktop is Back:** Despite the cloud-era, there is strong dissatisfaction with remote-gateway complexity (**Hermes Agent**). Projects building robust desktop clients (terminal-based or GUI) have a clear advantage for the power user demographic.
5.  **Security is Becoming Unavoidable:** Features like SSRF guards, OIDC/OAuth support, shell command confirmation, and auth token protection are no longer "nice-to-haves". They are becoming baseline requirements for any production deployment, especially in enterprise.
6.  **MCP is the Standard, but Fragile:** The Model Context Protocol is the universal integration standard, but projects are spending significant engineering effort on making it stable and performant. It is a source of major bugs, not a solved problem.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-05

## 1. Today's Overview

NanoBot is experiencing **very high development velocity**, with 77 PRs updated in the last 24 hours, including 61 merged/closed and 16 open. Issue resolution is also strong, with 5 of 6 updated issues closed. The project shows no new releases but is clearly in an **intensive refinement and hardening phase**, focused on reliability (MCP reconnection, SSRF guards, tool call validation), WebUI polish (keyboard shortcuts, CLI app installation fixes), and new infrastructure (agent hook lifecycle, memory lifecycle testing, subagent MCP tool inheritance). The maintainer team is highly responsive, closing bugs quickly and reviewing contributions actively.

## 2. Releases

**No new releases** are available in the reporting window. The project is currently accumulating substantial improvements across multiple open PRs that will likely form a significant future release.

## 3. Project Progress

### Merged/Closed PRs Today (61 total — key highlights):

| PR | Description | Impact |
|---|---|---|
| [#4126](https://github.com/HKUDS/nanobot/pull/4126) | Azure AAD-based Auth for Azure OpenAI provider | Enterprise authentication support |
| [#4176](https://github.com/HKUDS/nanobot/pull/4176) | Run-level agent hook lifecycle (before_run, after_run, on_error, on_finally) | New extensibility framework |
| [#4164](https://github.com/HKUDS/nanobot/pull/4164) | Fix CLI pip install under `uv tool` | Critical usability fix (fixes #4158) |
| [#4027](https://github.com/HKUDS/nanobot/pull/4027) | Fix MCP reconnection (reset `_mcp_connected` on session drop) | Stability fix for MCP transport |
| [#3984](https://github.com/HKUDS/nanobot/pull/3984) | Preserve OpenAI-compatible tool call IDs | Interoperability fix for GLM-4.7, Kimi 2.6 |
| [#4189](https://github.com/HKUDS/nanobot/pull/4189) | Deterministic unit test improvements | CI reliability |
| [#3966](https://github.com/HKUDS/nanobot/pull/3966) | WebUI CLI-generated image artifact rendering | WebUI feature polish |
| [#4191](https://github.com/HKUDS/nanobot/pull/4191) | Memory management enhancement | Core memory system improvement |

### Notable Open PRs Advancing:
- [#4195](https://github.com/HKUDS/nanobot/pull/4195) — Desktop shell and shared WebUI surfaces (foundation for desktop client)
- [#4193](https://github.com/HKUDS/nanobot/pull/4193) — Memory lifecycle test harness
- [#4192](https://github.com/HKUDS/nanobot/pull/4192) — Subagent MCP tool inheritance

## 4. Community Hot Topics

### Most Active Discussions:

1. **[#912](https://github.com/HKUDS/nanobot/issues/912) — Task-Specific Model Configuration** (OPEN, 4 comments, 3 👍)
   - *Needs:* Users want separate models for conversational, tool-use, and browser-use tasks, not a single global model.
   - *Status:* Open since February, still undelivered despite community interest.

2. **[#1121](https://github.com/HKUDS/nanobot/issues/1121) — Fallback Models Not Triggered on LLM Timeout** (CLOSED, 3 comments, 3 👍)
   - *Needs:* Fallback models should activate on ServiceUnavailableError/503, not silently fail.
   - *Resolution:* Closed — likely addressed by related MCP reliability work.

3. **[#4125](https://github.com/HKUDS/nanobot/issues/4125) — Azure AAD Auth Support** (CLOSED, 1 comment, 0 👍)
   - *Underlying need:* Enterprise compliance — organizations requiring Azure Identity-based auth over API keys.
   - *Resolution:* Already implemented and merged in PR #4126 — fast turnaround.

4. **[#4168](https://github.com/HKUDS/nanobot/issues/4168) — MCP Server Unreachable After Random Time** (CLOSED)
   - *Underlying need:* MCP session lifecycle management — sessions terminated server-side are not properly reconnected.
   - *Resolution:* Addressed by the merged PR #4027 MCP reconnection fix.

### Analysis:
The community is most vocal about **model configuration flexibility** (separate models per task type) and **reliability** (fallback models, MCP reconnection). The Azure AAD request got the fastest turnaround (6 days from issue to merged PR).

## 5. Bugs & Stability

### Critical:
- **[#4168](https://github.com/HKUDS/nanobot/issues/4168) — MCP server unreachable after random time** (CLOSED)
  - Symptom: `McpError: Session terminated`, requires full restart.
  - Fix applied: PR [#4027](https://github.com/HKUDS/nanobot/pull/4027) merged — resets `_mcp_connected` flag and adds reconnect callbacks.

### High:
- **[#4158](https://github.com/HKUDS/nanobot/issues/4158) — WebUI CLI App pip install fails under `uv tool`** (CLOSED)
  - Symptom: `No module named pip` when installed via `uv tool`.
  - Fix: PR [#4164](https://github.com/HKUDS/nanobot/pull/4164) merges fallback to `uv pip`.

### Medium:
- **[#4119](https://github.com/HKUDS/nanobot/pull/4119) — Relative symlink workspace escape** (OPEN — fix PR exists)
  - Security bug: restricted exec can follow relative symlinks outside workspace.
  - Fix under review: blocks relative path symlink escapes.
- **[#4053](https://github.com/HKUDS/nanobot/pull/4053) — Read-only roots leaking into write paths** (OPEN — fix PR exists)
  - Security bug: extra allowed roots should be read-only but were writable.
  - Fix under review: restricts write/edit tools from inheriting media-dir access.

### Low:
- **[#1121](https://github.com/HKUDS/nanobot/issues/1121) — Fallback model not triggered on timeout** (CLOSED)
- **[#3980](https://github.com/HKUDS/nanobot/issues/3980) — Tool call ID mismatches for GLM-4.7/Kimi 2.6** (FIXED in PR #3984)

## 6. Feature Requests & Roadmap Signals

### High Likelihood for Next Release:
| Feature | Signal |
|---|---|
| **Desktop application shell** | [#4195](https://github.com/HKUDS/nanobot/pull/4195) — Open PR targeted at first desktop surface |
| **Subagent MCP tool inheritance** | [#4192](https://github.com/HKUDS/nanobot/pull/4192) — Open PR with fixes #4166 |
| **Agent hook lifecycle** | [#4176](https://github.com/HKUDS/nanobot/pull/4176) — Already merged |
| **Memory lifecycle testing** | [#4193](https://github.com/HKUDS/nanobot/pull/4193) — Open, foundational for memory reliability |
| **Task-specific model configuration** | [#912](https://github.com/HKUDS/nanobot/issues/912) — 3 months old, still open, high community demand |

### Medium Likelihood:
- **Azure AAD auth** ([#4125](https://github.com/HKUDS/nanobot/issues/4125)) — Already merged, will appear in next release
- **`/skill` slash command** ([#3968](https://github.com/HKUDS/nanobot/pull/3968)) — Open, addresses missing discoverability
- **WebUI keyboard shortcut for new chat** ([#4178](https://github.com/HKUDS/nanobot/issues/4178)) — Closed, needs PR

### Prediction:
The next release will likely include the desktop shell, MCP reliability improvements, Azure AAD auth, agent hook lifecycle, and the `/skill` command. Task-specific model configuration (#912) remains the most requested feature still unassigned.

## 7. User Feedback Summary

### Pain Points:
1. **MCP session instability** — Users report random disconnections requiring full restarts (#4168). The merged reconnection fix (#4027) will address this.
2. **UV tool compatibility** — Users installing via `uv tool` encounter broken WebUI plugin installation (#4158), now fixed.
3. **LLM fallback failure** — Timeout errors on primary model should trigger fallbacks but don't (#1121).
4. **Missing skill discovery** — Users cannot list available skills, requiring `#3959` to be addressed by `/skill` command PR.
5. **Single model for all tasks** — Power users want per-task-type model configuration (#912).

### Positive Signals:
- Fast response to Azure AAD request (6 days from request to merged PR)
- Active security review (symlink escape, SSRF guard PRs in review)
- Deterministic testing improvements suggest focus on CI stability
- Desktop surface development signals long-term investment

### Use Cases Emerging:
- **Enterprise deployment** → Azure AAD auth, workspace security
- **Multi-agent workflows** → Subagent MCP inheritance, agent hooks
- **Desktop usage** → Desktop shell PR suggests GUI client coming
- **Memory-heavy applications** → Memory lifecycle harness in testing

## 8. Backlog Watch

### Issues Needing Maintainer Attention:

| Issue | Age | Comments | 👍 | Status |
|---|---|---|---|---|
| [#912](https://github.com/HKUDS/nanobot/issues/912) — Task-specific model config | 106 days | 4 | 3 | **OPEN, no assignee** |
| [#3983](https://github.com/HKUDS/nanobot/pull/3983) — Runner blocked tool-call testing | 12 days | 0 | 0 | Open, needs review |
| [#3982](https://github.com/HKUDS/nanobot/pull/3982) — Scripted agent runner harness | 12 days | 0 | 0 | Open, needs review |
| [#4119](https://github.com/HKUDS/nanobot/pull/4119) — Symlink escape fix | 5 days | 0 | 0 | Open, security-critical |
| [#4053](https://github.com/HKUDS/nanobot/pull/4053) — Read-only root fix | 7 days | 0 | 0 | Open, security-critical |
| [#4123](https://github.com/HKUDS/nanobot/pull/4123) — SSRF guard for MCP URLs | 5 days | 0 | 0 | Open, security-critical |

### Most Critical Backlog Item:
**[Issue #912](https://github.com/HKUDS/nanobot/issues/912)** — Task-specific model configuration has been open for **3.5 months** with 3 upvotes and no assignee. This is the highest-community-demand feature not yet addressed. Given the project's current velocity, assigning someone to this would align with user expectations.

### Security Backlog:
Three open PRs (symlink escape, read-only root protection, SSRF guard) directly address security hardening. All are authored by `yu-xin-c` and appear to be part of a systematic security audit. These should be prioritized for review and merge to prevent potential vulnerabilities in production deployments.

---

*Generated from GitHub data for HKUDS/nanobot, snapshot 2026-06-05*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-05

## 1. Today's Overview

The Hermes Agent project shows **very high activity** with 50 issues and 50 pull requests updated in the last 24 hours, indicating a large and engaged community. Of the 44 open issues and 42 open PRs, activity is concentrated around **Desktop app stability**, **remote gateway connectivity**, and **user experience regressions**. No new releases were published today. The project maintainers have been responsive, merging several critical fixes, but the volume of open items suggests a growing maintenance burden, particularly around cross-platform compatibility (macOS, Windows) and the Desktop client's interaction with remote backends.

---

## 2. Releases

**None** — No new versions were released on 2026-06-05.

---

## 3. Project Progress

Eight pull requests were merged or closed today, addressing several long-standing bugs and regressions:

### Merged/Closed PRs

| PR | Description | Component |
|---|---|---|
| [#39402](https://github.com/NousResearch/hermes-agent/pull/39402) | **Closed** — `fix(desktop): offer remote sign-in on a gated-gateway boot failure` | Desktop / Gateway |
| [#39412](https://github.com/NousResearch/hermes-agent/pull/39412) | **Closed** — `fix(docker): clean up orphaned container when docker run fails` (salvage of #7440) | Docker / Backend |
| [#7440](https://github.com/NousResearch/hermes-agent/pull/7440) | **Closed** — Original fix for Docker orphaned container cleanup | Docker |
| [#9248](https://github.com/NousResearch/hermes-agent/pull/9248) | **Closed** — `fix(local): recognize unqualified hostnames as local endpoints` | Docker / Local LLM |
| [#37981](https://github.com/NousResearch/hermes-agent/pull/37981) | **Closed** — `fix(kanban): fail closed when dashboard token is missing` (security) | Gateway / Plugins |
| [#32609](https://github.com/NousResearch/hermes-agent/pull/32609) | **Closed** — `Improve media safety, logging, and Telegram formatting` | Gateway / Telegram |
| [#39419](https://github.com/NousResearch/hermes-agent/issues/39419) | **Closed** — Issue withdrawn by reporter (sensitive details) | N/A |
| [#23297](https://github.com/NousResearch/hermes-agent/issues/23297) | **Closed** — `RuntimeWarning "run_in_terminal... was never awaited"` | CLI |

### Key Fixes Advanced

- **Docker stability**: PRs [#39412](https://github.com/NousResearch/hermes-agent/pull/39412) / [#7440](https://github.com/NousResearch/hermes-agent/pull/7440) fix orphaned Docker containers left in "Created" state when `docker run` fails. PR [#9248](https://github.com/NousResearch/hermes-agent/pull/9248) allows `is_local_endpoint()` to recognize unqualified Docker Compose hostnames (e.g., `ollama`, `litellm`), fixing stale timeouts on local LLM proxies.
- **Security fix**: [#37981](https://github.com/NousResearch/hermes-agent/pull/37981) closes a **Medium-severity** (CVSS 5.8 / 6.9) vulnerability in the kanban plugin that would silently expose data when the dashboard token was missing — now fails closed.

---

## 4. Community Hot Topics

### Most Active Issues

#### [#23717](https://github.com/NousResearch/hermes-agent/issues/23717) — RFC: Pluggable SessionDB Provider (PostgreSQL, MySQL) *(7 comments)*
**Underlying need**: Large-scale deployments hit "Hot-Update Death Spiral" where concurrent `git pull` and active Hermes sessions corrupt the shared SQLite `state.db`. Users want **production-grade session persistence** that survives concurrent reads/writes. This RFC represents escalating demand for **enterprise-scale multi-user deployments**.

#### [#34120](https://github.com/NousResearch/hermes-agent/issues/34120) — "schedule is required for create" cronjob bug *(5 comments)*
**Underlying need**: Users orchestrating **automated recurring workflows** (e.g., daily news digests) via Discord commands are hitting API-level validation bugs where the cronjob tool rejects valid parameters. Signals a **gap in LLM-to-cron integration reliability**.

#### [#37549](https://github.com/NousResearch/hermes-agent/issues/37549) — Desktop chat transcript flickering *(5 comments, 5 👍)*
**Underlying need**: Heavy dissatisfaction with the Desktop chat UX — users **cannot maintain reading position** during streaming. This is a core usability regression affecting all streaming interactions.

#### [#39332](https://github.com/NousResearch/hermes-agent/issues/39332) — Mac Install Failure *(2 comments, 1 👍)*
**Underlying need**: macOS users are hitting installation failures in the Desktop app's Node/Electron build pipeline.

### Most Active Pull Requests

#### [#39402](https://github.com/NousResearch/hermes-agent/pull/39402) — Remote sign-in on gated-gateway boot failure *(Merged)*
**Underlying need**: Users with authenticated remote gateways were trapped in an infinite retry loop after a restart — now they see a "Sign in" option.

#### [#38206](https://github.com/NousResearch/hermes-agent/pull/38206) — Dependency-free i18n + Simplified Chinese *(Open)*
**Underlying need**: Chinese-speaking users pushing for **internationalization** — this PR adds a lightweight i18n foundation and full Simplified Chinese translation.

---

## 5. Bugs & Stability

### High-Severity (P1-P2)

| Issue | Severity | Description | Fix PR? |
|---|---|---|---|
| [#39345](https://github.com/NousResearch/hermes-agent/pull/39345) | **P1** | Agent crashes with `hermes -z: agent failed: 'final_response'` after stream drops | Yes — PR #39345 open |
| [#38115](https://github.com/NousResearch/hermes-agent/issues/38115) | **P2** | **macOS**: Remote gateway SIGTERM → WebSocket close 1012 loop; auto-updater corrupts install | No |
| [#39365](https://github.com/NousResearch/hermes-agent/issues/39365) | **P2** | Desktop shows **misleading** "OpenRouter API key missing" when real failure is gateway auth (401) | No |
| [#39333](https://github.com/NousResearch/hermes-agent/issues/39333) | **P2** | Desktop can strand managed install on detached HEAD, reports "cancelled by user" falsely | No |
| [#38078](https://github.com/NousResearch/hermes-agent/issues/38078) | **P3** | Pasted images fail with remote gateway — local paths sent instead of streamed | No |
| [#7905](https://github.com/NousResearch/hermes-agent/issues/7905) | **P2** | `is_local_endpoint` misses Docker DNS names — stale timeout on local LLM proxies | ✅ Fixed by PR #9248 (merged) |
| [#7439](https://github.com/NousResearch/hermes-agent/issues/7439) | **P2** | Docker containers leak in "Created" state on `docker run` failure | ✅ Fixed by PR #39412 (merged) |

### Medium-Severity (P3)

| Issue | Description |
|---|---|
| [#37549](https://github.com/NousResearch/hermes-agent/issues/37549) | Desktop chat transcript flickering / erratic auto-scroll (5 👍) |
| [#38272](https://github.com/NousResearch/hermes-agent/issues/38272) | Desktop auto-scroll fights user input during streaming |
| [#38858](https://github.com/NousResearch/hermes-agent/issues/38858) | Pinned sessions unpin after app restart |
| [#38901](https://github.com/NousResearch/hermes-agent/issues/38901) | Desktop model display stays stale when switching sessions |
| [#39231](https://github.com/NousResearch/hermes-agent/issues/39231) | Send button not shown during CJK IME composition |
| [#39292](https://github.com/NousResearch/hermes-agent/issues/39292) | Desktop "Read aloud" (TTS) times out intermittently |
| [#39339](https://github.com/NousResearch/hermes-agent/issues/39339) | Desktop app update loop on macOS — version unchanged after install |
| [#39349](https://github.com/NousResearch/hermes-agent/issues/39349) | `~/.hermes/.env` overrides session token, breaks WebSocket |
| [#39418](https://github.com/NousResearch/hermes-agent/issues/39418) | `/reload-mcp` freezes CLI terminal completely |
| [#38871](https://github.com/NousResearch/hermes-agent/issues/38871) | macOS packaging emits `xattr` usage error during build |

---

## 6. Feature Requests & Roadmap Signals

### Top User-Requested Features

| Issue | Feature | Likelihood for Next Version |
|---|---|---|
| [#23717](https://github.com/NousResearch/hermes-agent/issues/23717) | **Pluggable SessionDB** (PostgreSQL, MySQL) — production-grade persistence | **High** — growing enterprise demand, discussed at length |
| [#15621](https://github.com/NousResearch/hermes-agent/issues/15621) | **Split storage from LLM-invocation gate** ("observe but don't invoke" mode for group chats) | **Medium** — important for WhatsApp/Slack/Telegram moderation use cases |
| [#21172](https://github.com/NousResearch/hermes-agent/issues/21172) | **First-class Loop Contract** — declarative budget/stop/refresh for cron-backed agent loops | **Medium** — inspired by Claude Code workflows (dozens of persistent supervised loops) |
| [#38894](https://github.com/NousResearch/hermes-agent/issues/38894) | **Separate cron/autonomous sessions from manual chats** in Desktop | **Medium** — users report session list pollution |
| [#34390](https://github.com/NousResearch/hermes-agent/issues/34390) | **`--allowed-hosts` flag** for reverse-proxy / Tailscale access | **Medium** — deployment friction for remote teams |
| [#38849](https://github.com/NousResearch/hermes-agent/issues/38849) | **Quick workspace switcher** on Desktop status bar | **Low-Medium** — nice-to-have UX |
| [#6775](https://github.com/NousResearch/hermes-agent/issues/6775) | **ACP session token counts & cost data** in state.db | **Low-Medium** — developer/enterprise tooling |
| [#8337](https://github.com/NousResearch/hermes-agent/issues/8337) | **Token usage tracking for MiniMax provider** | **Low** — niche provider |

### Roadmap Signals

- **Internationalization**: PR [#38206](https://github.com/NousResearch/hermes-agent/pull/38206) adding Chinese i18n suggests growing **non-English user base**
- **YOLO mode defaults**: PR [#39375](https://github.com/NousResearch/hermes-agent/pull/39375) making YOLO (approval bypass) default-on for new Desktop sessions indicates a push toward **faster, less-interrupted agent workflows**
- **Remote-first**: Multiple issues around remote gateway connectivity (auth, WebSocket stability, update loops) signal that **remote/multi-device** is the primary deployment pattern being stress-tested

---

## 7. User Feedback Summary

### Pain Points (Repeated Complaints)

1. **Desktop chat streaming UX is broken** — Two separate issues ([#37549](https://github.com/NousResearch/hermes-agent/issues/37549), [#38272](https://github.com/NousResearch/hermes-agent/issues/38272)) describe the same core problem: *auto-scroll fights user input, loses reading position, flickers*. This is the most-upvoted complaint (5 👍).

2. **Remote gateway connectivity is fragile** — Six distinct issues describe desktop-to-remote-backend failures: WebSocket loops ([#38115](https://github.com/NousResearch/hermes-agent/issues/38115)), misleading auth errors ([#39365](https://github.com/NousResearch/hermes-agent/issues/39365)), session flaps ([#38873](https://github.com/NousResearch/hermes-agent/issues/38873)), image upload failures ([#38078](https://github.com/NousResearch/hermes-agent/issues/38078)). Users are **struggling with the remote-first experience**.

3. **macOS Desktop app update issues** — Update loops ([#39339](https://github.com/NousResearch/hermes-agent/issues/39339)), packaging errors ([#38871](https://github.com/NousResearch/hermes-agent/issues/38871)), detached HEAD installs ([#39333](https://github.com/NousResearch/hermes-agent/issues/39333)).

4. **Session state persistence** — Lost pinned sessions ([#38858](https://github.com/NousResearch/hermes-agent/issues/38858)), stale UI state ([#38901](https://github.com/NousResearch/hermes-agent/issues/38901)).

### Satisfaction Signals

- The **Docker fixes** merged today ([#9248](https://github.com/NousResearch/hermes-agent/pull/9248), [#39412](https://github.com/NousResearch/hermes-agent/pull/39412)) address long-standing issues for Docker Compose users — one from April 11 (backlog item #7905) now closed.
- The **kanban security fix** ([#37981](https://github.com/NousResearch/hermes-agent/pull/37981)) shows proactive security response.
- The **i18n PR** ([#38206](https://github.com/NousResearch/hermes-agent/pull/38206)) signals community investment in global accessibility.

---

## 8. Backlog Watch

### Long-Unanswered High-Impact Items

| Issue | Created | Days Open | Component | Priority | Notes |
|---|---|---|---|---|---|
| [#6775](https://github.com/NousResearch/hermes-agent/issues/6775) | 2026-04-09 | 57 | ACP / State | P3 (unlabelled) | **ACP session cost tracking** — no maintainer response. Important for enterprise billing. |
| [#8337](https://github.com/NousResearch/hermes-agent/issues/8337) | 2026-04-12 | 54 | MiniMax provider | P3 | **Token usage tracking missing** — no maintainer response. |
| [#8768](https://github.com/NousResearch/hermes-agent/pull/8768) | 2026-04-13 | 53 | Security / Agent | **P0** | **Authorization header leak in debug dumps** — open PR, no merge activity. Security-sensitive fix for exposure of credentials in debug logs. |
| [#11593](https://github.com/NousResearch/hermes-agent/pull/11593) | 2026-04-17 | 49 | STT / Tools | P2 | **`.silk` voice note preprocessing** — open PR, no merge activity. Blocks voice note support from some messaging platforms. |

### Notable

- **PR #8768** (P0 security fix for credential dump exposure) has been open for **53 days** without being merged — this should be a priority for maintainers.
- **Issue #6775** and **#8337** represent **enterprise/minor-provider feature gaps** that have received no maintainer attention for nearly two months, suggesting either low priority or resource constraints.

---

*Project health: High engagement, growing user base, but Desktop stability and remote connectivity are the most urgent quality-of-life blockers. The backlog of security-sensitive (P0) and enterprise-visible items warrants maintainer attention.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-05

## Today's Overview

The PicoClaw project shows high out-of-band activity, with 5 issues updated in the last 24 hours (1 open, 4 closed) and 19 pull requests updated (9 open, 10 merged/closed). No new releases are present, indicating the project is in a consolidation phase following v0.2.9. The merge velocity is strong, with several high-priority bug fixes landing today, including a singleton PID crash and a Codex OAuth tool-call drop. Seven dependabot dependency bumps are in flight, requiring human fixes for a breaking SDK change. Project health appears solid but maintenance-sensitive, with one critical bug remaining open and multiple long-lived PRs showing staleness.

## Releases

No new releases this period. The latest stable version remains v0.2.9. Release highlights for v0.2.5 through v0.2.9 were backfilled into the README News section via PR #2995 today (closed). Users seeking change logs should refer to the updated README.

## Project Progress

**10 PRs were merged or closed today**, reflecting strong forward motion:

- **#3000 (closed):** Fix singleton PID check — the `isProcessRunning()` function now verifies process identity via `/proc/pid/exe` (Linux) or `GetModuleFileNameEx` (Windows), preventing crash loops when stale PIDs are reused by unrelated processes like `systemd-resolved`. This closes high-priority bug #2720.
- **#3007 (closed):** Codex OAuth tool-call preservation — streamed `function_call` events from `gpt-5.5` are now preserved even when the final response's `output` array is empty. Closes #3006.
- **#2999 & #2976 (both closed):** Makefile fixes for Go 1.25.10 space in `go env GOVERSION` output (e.g., `go1.25.10 X:nodwarf5`). Build now uses `firstword` to extract the version.
- **#2996 (closed):** JSON marshal errors in `pkg/tools/shell.go` are now handled, returning `ErrorResult` instead of silent nil-to-empty-string conversions.
- **#2992 (closed):** Fixes Web UI session history corruption (#2972) — `PromoteAliasHistory` no longer copies `agent:main:main` alias content into new sessions after v0.2.9 upgrade.
- **#2995 (closed):** Documentation update — README News section expanded with v0.2.5–v0.2.9 highlights. Closes #2981.
- **#3004, #3003 (both closed):** Dependabot bumps for AWS Bedrock Runtime SDK (v1.50.6→v1.53.3) and modernc.org/sqlite (v1.50.1→v1.51.0).

## Community Hot Topics

1. **#2720 (closed, 8 comments)** — `[BUG] Singleton PID check doesn't verify process identity — stale PID causes crash loop`  
   *Link:* https://github.com/sipeed/picoclaw/issues/2720  
   **Analysis:** This was the highest-comment issue today. Users experienced gateway crash loops when restarting after `kill -9`. The fix (#3000) was merged same day, indicating strong maintainer responsiveness. Underlying need: production reliability guarantees.

2. **#2972 (closed, 2 comments)** — `[BUG] Web UI message chaos after v0.2.9 upgrade`  
   *Link:* https://github.com/sipeed/picoclaw/issues/2972  
   **Analysis:** New sessions leaking old history upset FreeBSD users. The fix (#2992) was merged, but the issue highlights the need for regression tests around session lifecycle, especially for migration paths.

3. **#3006 (closed, 0 comments)** — `[BUG] Codex OAuth GPT-5.5 drops tool calls`  
   *Link:* https://github.com/sipeed/picoclaw/issues/3006  
   **Analysis:** Reported and fixed within 24 hours. A streaming response edge case where `function_call` events exist in the stream but the final response's `output` is empty. Users relying on tool-use workflows (code generation, automation) were affected.

## Bugs & Stability

| Issue | Severity | Status | Fix PR | Description |
|-------|----------|--------|--------|-------------|
| #3006 | High | Closed | #3007 | Codex OAuth GPT-5.5 drops tool calls |
| #2720 | High | Closed | #3000 | Stale PID causes crash loop |
| #3002 | Medium | Open | — | OneBot group chat uses `send_private_msg` instead of `send_group_msg` |
| #2972 | Medium | Closed | #2992 | Web UI history corruption after v0.2.9 upgrade |
| #2996 fix | Low | Closed | #2996 | Unhandled JSON marshal errors in exec tool |

**Open bug to watch:**  
- **#3002 (open)** — OneBot group chat incorrectly calling `send_private_msg` with `user_id` set to group ID. Causes NapCat errors. No fix PR exists yet. Chinese-language issue; likely impacts QQ bot users.

## Feature Requests & Roadmap Signals

The current activity is overwhelmingly bug-fix oriented, not feature-driven. However, several signals point toward near-term roadmap items:

- **Codex OAuth improvements** (#3006/#3007) — The streaming tool-call fix for GPT-5.5 suggests PicoClaw is actively courting high-end model providers. Expect continued investment in streaming reliability.
- **LarkSuite SDK support** (#3005/#3008) — A Dependabot bump exposed breaking API changes. PR #3008 (open) adapts to the renamed constant `CreateMessageV1ReceiveIDTypeChatId`. This indicates active enterprise/Chinese-market userbase for Feishu/Lark integration.
- **Session context transparency** (#2985, open) — The `/context` command now shows both summarize and compress thresholds. This addresses user confusion (#2968) over token budgeting. Likely to land in v0.3.0.
- **WhatsApp native mode** (#2934, open, stale) — Users want `use_native: true` for whatsmeow without requiring a bridge URL. Has been open since May 24 — may need maintainer push.

## User Feedback Summary

**Pain points expressed today:**
- *Stale PID crashes* (#2720): Production users experiencing outage loops after crashes. Fix shipped same day — response time was excellent.
- *Web UI session corruption* (#2972): v0.2.9 upgrade broke chat history isolation. Fixed in #2992. User `xpader` on FreeBSD reported workflow disruption.
- *Empty tool calls from GPT-5.5* (#3006): Codex OAuth users (likely developers) saw assistant stall mid-conversation. Fixed in #3007.
- *OneBot group chat broken* (#3002): Chinese QQ bot users cannot use group chat; the code sends private message API instead. Unfixed. Language barrier may delay resolution.

**Satisfaction signals:**
- The three critical bugs (#2720, #2972, #3006) were all reported and closed within the same 24–48 hour window. This indicates extremely responsive maintainers.
- Documentation gaps (#2981) were backfilled within 3 days of filing.

## Backlog Watch

| Issue/PR | Age | Last Updated | Status | Why Watch |
|----------|-----|-------------|--------|-----------|
| #2813 (PR) fix(pid): verify gateway identity | 28 days (2026-05-07) | 2026-06-04 | Open | Superseded by merged PR #3000. Should be closed to avoid confusion. |
| #2934 (PR) fix(channels): allow whatsapp native mode | 12 days (2026-05-24) | 2026-06-04 | Open, stale | No maintainer review. WhatsApp users blocked from native mode. |
| #2947 (PR) fix: correct claude-sonnet-4.6 model ID | 10 days (2026-05-26) | 2026-06-04 | Open, stale | First-time Anthropic users get HTTP 404. Fix is a one-line string change. |
| #2956 (PR) fix: preserve channel enabled state | 9 days (2026-05-27) | 2026-06-04 | Open | Security.yml merge bug can silently disable channels. |
| #2962 (PR) bump anthropics-sdk-go v1.26→v1.46 | 8 days (2026-05-28) | 2026-06-04 | Open | Major SDK jump (20 versions). Risk of breaking changes needing human review. |
| #3002 (issue) OneBot group chat broken | 1 day (2026-06-04) | 2026-06-04 | Open | No fix PR yet. Affects Chinese QQ/OneBot ecosystem. |

**Maintainer attention needed:**  
- **#2934 (WhatsApp native mode)** and **#2947 (Claude model ID)** are low-risk, user-facing fixes that have been waiting 10+ days. They signal potential bottleneck in channel/model maintainer bandwidth.  
- **#2962 (Anthropic SDK bump)** is a large version jump that may introduce deprecations. Should be paired with a human review PR.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-05

## Today's Overview
The NanoClaw project shows healthy development activity today, with **8 pull requests updated** and **1 new issue** opened. A strong **3 PRs were merged/closed**, indicating active progress toward stabilizing channel integrations. The open issue count remains low (1), suggesting the community is largely focused on contributions rather than problem reporting. Overall, the project appears in a productive phase, with significant attention on **Signal and WhatsApp channel fixes**, as well as documentation improvements.

## Releases
**No new releases** were published today. The project hasn't pushed a versioned release in the recent window.

## Project Progress
Three Pull Requests were merged or closed today, representing meaningful improvements:

- **#2687 — [CLOSED] Trip agent**  
  A skill contribution described as a "trip agent" by contributor `dtanikella`. While the PR body follows the skill contribution template, the exact functionality is not detailed. This likely adds a new agent skill for travel planning use cases.

- **#2633 — [CLOSED] Fix/whatsapp self destruct and shutdown auth wipe**  
  Merged fix addressing two structural bugs in `src/channels/whatsapp.ts` that caused WhatsApp sessions on Baileys 7.x to self-destruct authentication data on shutdown and crash on pairing. This is a **critical stability fix** for WhatsApp channel reliability.

- **#104 — [CLOSED] fix: replace `as any` casts with proper BoomError type**  
  A housekeeping PR that improves type safety by replacing unsafe `as any` casts with a properly defined `BoomError` interface for Baileys disconnect error handling.

## Community Hot Topics
- **#2686 — [OPEN] Traveling**  
  *Author: drannyyoung007-max*  
  This is the only open issue and contains a simple statement: "I want to travel to Canada." While not a technical bug report, it may hint at user interest in travel-related agent capabilities. No comments or reactions yet.

- **#2689 — [OPEN] fix(signal): set isMention for DMs and use signal: prefix for platform IDs**  
  *Author: klingel* — 0 comments  
  A Signal integration fix that addresses a silent message drop bug: DMs weren't setting `isMention: true`, causing the router to fail to create `messaging_groups` rows, which meant first messages were lost without warning.

- **#2685 — [OPEN] docs(signal): group typing, outbound reactions, quote-reply fix**  
  *Author: ira-at-work* — 0 comments  
  Documentation updates covering new Signal features: group typing indicators, outbound reactions, and quote-reply formatting fixes.

## Bugs & Stability

| Severity | Bug | Status | Fix PR |
|----------|-----|--------|--------|
| **Critical** | WhatsApp sessions self-destruct auth on shutdown (Baileys 7.x) | **Fixed** ✅ | #2633 (merged) |
| **High** | Signal DMs silently drop first messages — `isMention` flag not set | Open (#2689) | PR #2689 |
| **High** | WhatsApp LID groups silently fail — ack error 421 on outbound sends | Open (#2688) | PR #2688 |
| **Medium** | Model drops XML wrapping after auto-compaction in poll-loop | Open (#2405) | PR #2405 |
| **Low** | Unsafe `as any` casts for Baileys disconnect errors | **Fixed** ✅ | PR #104 (merged) |

**Notable**: The WhatsApp channel had two critical bugs fixed today affecting session persistence and message delivery. However, a new LID group addressing bug (#2688) remains open for review.

## Feature Requests & Roadmap Signals
- **Voice transcription (on-device, cloud-free)** — PR #2459 proposes opt-in voice transcription for Discord and Chat SDK-bridged channels via local `whisper.cpp`, with no `OPENAI_API_KEY` required. This aligns with the growing "on-device AI" trend and may land in the next release if it passes review.
- **Signal group typing & reactions** — PR #2685 documents newly added support for group typing indicators, outbound reactions, and quote-reply fixes. These are likely already in `main` or very close to merge, making Signal parity with other channels a near-term feature.
- **Trip agent skill** — PR #2687 suggests user interest in travel-oriented agent capabilities (possibly tied to the "traveling" issue opened today).

## User Feedback Summary
- **Pain point (high):** WhatsApp users on Baileys 7.x experienced session destruction and silent message failures — now fixed via #2633.
- **Pain point (medium):** Signal DM users lose first messages because the router doesn't see them as mentions — addressed in open PR #2689.
- **User request:** "I want to travel to Canada" (Issue #2686) — likely a feature request for a travel-planning agent skill, though the issue lacks detail.
- **Developer experience:** The community continues to contribute substantive fixes (WhatsApp auth, type safety) indicating engaged, technically capable contributor base.

## Backlog Watch
- **#2405 — fix(poll-loop): deliver unwrapped output to sole destination after compaction**  
  *Open since: 2026-05-11 (25 days)*  
  Addresses a model reliability issue where dropped XML tags cause message delivery failures after automatic compaction. No recent maintainer activity. This issue may worsen with scaling and warrants review.
- **#2459 — feat(skill): add /add-voice-transcription-chat-sdk**  
  *Open since: 2026-05-13 (23 days)*  
  A substantial feature PR for on-device voice transcription. No maintainer comments yet. Could benefit from code review to avoid feature stagnation.

---

*Generated from GitHub activity for nanocoai/nanoclaw, snapshot 2026-06-05.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-05

## Today's Overview

High-intensity development day for IronClaw, with 40 issues and 50 PRs updated in the last 24 hours — well above the project's typical daily cadence. The Reborn architecture migration dominates activity, with 76% of today's issue volume and the majority of PRs targeting Reborn service layers, subagent durability, trigger lifecycle correctness, and WebUI v2 improvements. Six XL-sized PRs were merged today, indicating rapid feature closure across Slack integration, HTTP result budgeting, compaction handling, and trigger creator pairing. Cross-cutting concerns around security audit wiring, hook framework activation, and dependency updates also advanced. The project is in an active "Reborn production-hardening" phase with strong contributor momentum from both core team and regular contributors.

## Releases

No new releases today. The project continues to ship changes via PR merges into the `reborn-integration` branch without formal release tags.

## Project Progress

**Merged/Closed PRs (19 total):** Notable closures include:

- **#4476** [XL] — Wire Reborn Slack actor/subject journey (split Slack product bindings, subject-owned turn/thread scopes)
- **#4478** [XL] — Surface auth setup links in Slack prompts (shared auth prompt enrichment between WebUI and Slack)
- **#4480** [L] — fix(webui-v2): address provider grouping review feedback (provider disclosure controls, collapsed inactive cards)
- **#4467** [XL] — Fix model-visible HTTP result budgeting (host-runtime-local `ToolCallHttpEgress` path, capping inline results)
- **#4440** [XL] — Handle deferred compaction ranges (non-fatal `Deferred` outcome, UI-only preview skipping, backoff)
- **#4466** [XL] — Pair trigger creator during trigger create (lifecycle hooks, synthetic actor pairing, shared clock)
- **#4477** [XL] — feat(webui-v2): group LLM providers by setup status (progressive disclosure redesign)
- **#4473** — Support one-time trigger_create runs (closed, follow-up implementation expected)
- **#4472** — Add activation state for trigger create pairing (closed, foundation laid)
- **#4437** — Track durable idempotency for subagent completion delivery (closed, design settled)
- **#4438** — Define terminal cleanup policy for subagent rollback reservations (closed)
- **#4420** — TriggerCompletionPolicy::CompleteAfterFirstFire fix (closed, policy now consulted)
- **#4160** — Google OAuth refresh and durable token lifecycle cleanup (closed)
- **#3719** — Security advisory dependency bumps (rustls-webpki, tokio, h2)

**Key feature advancements:**
- Slack integration now operational with actor/subject distinction and auth prompt routing
- WebUI v2 LLM provider management redesigned with grouped, progressive disclosure
- Subagent completion delivery made durable with exactly-once guarantees
- Trigger lifecycle now supports one-time runs, activation states, and completion policies
- HTTP result budgeting prevents model-visible output overflow
- Compaction handles deferred ranges without hard errors

## Community Hot Topics

**Most Active Issues:**

1. **#3280** [OPEN] — "Add ProductWorkflow and InboundTurnService facade" (6 comments)  
   The root Reborn architecture issue connecting ProductAdapters to host-layer services. High-priority parent ticket with 14 related issues.  
   *Underlying need:* Architectural clarity for the Reborn migration's middle layer.  
   [Link](https://github.com/nearai/ironclaw/issues/3280)

2. **#3857** [CLOSED] — "Lane 10: add Slack ProductAdapter MVP" (6 comments)  
   Now merged via #4476/#4478, but attracted significant discussion around credential handling and auth flows.  
   *Underlying need:* Production Slack integration for enterprise users.  
   [Link](https://github.com/nearai/ironclaw/issues/3857)

3. **#4424** [CLOSED] — "builtin.spawn_subagent advertised but absent from tools array" (4 comments)  
   Critical model-calling bug that exposed a tool-definition parity gap. Prompted creation of regression test issue #4431.  
   *Underlying need:* Model-tool interface correctness and testing rigor.  
   [Link](https://github.com/nearai/ironclaw/issues/4424)

4. **#4479** [OPEN] — `feat(reborn-ironhub) port IronHub install flow to Reborn` (PR with significant discussion)  
   New signed catalog client with Ed25519 verification — represents major extension ecosystem development.  
   [Link](https://github.com/nearai/ironclaw/pull/4479)

5. **#4461** [OPEN] — "add canonical Reborn identity resolver for OAuth and external actors" (PR)  
   New identity crate replacing WebUI-specific user store — foundational for multi-provider auth.  
   [Link](https://github.com/nearai/ironclaw/pull/4461)

**Most Active PR:** **#3937** [OPEN] — `test(hooks): cross-backend adversarial parity suite` — 4th PR in durable hook backend series, proving three PredicateStateBackend implementations interchangeable. Security-critical work with CI and docs cross-references.  
[Link](https://github.com/nearai/ironclaw/pull/3937)

## Bugs & Stability

**Critical Bugs (fixed today):**

- **#4420** — `TriggerCompletionPolicy::CompleteAfterFirstFire` never consulted — triggers re-fired forever. **Fix merged in #4466**. Severity: High (data integrity, infinite firings).  
  [Issue](https://github.com/nearai/ironclaw/issues/4420)

- **#4084 / #4084** — Background subagent results silently lost (not delivered to parent). **Fix series merged (#4348, #4349, #4350, #4413)**. Severity: High (silent data loss).  
  [Issue](https://github.com/nearai/ironclaw/issues/4084)

- **#4424** — Model cannot call `builtin.spawn_subagent` despite surface text advertisement. **Fix shipped**. Severity: High (model-tool interface broken).  
  [Issue](https://github.com/nearai/ironclaw/issues/4424)

**Open Bugs (ranked):**

1. **#4427** — Loop exit reason invisible (never traced, only persisted to DB) — operators cannot debug loop termination. No fix PR yet.  
   [Issue](https://github.com/nearai/ironclaw/issues/4427)

2. **#4366** — Compaction hard-errors on UI-only/pending messages instead of deferring; checkpoint pre-size check missing. PR #4440 merged addressing main path.  
   [Issue](https://github.com/nearai/ironclaw/issues/4366)

3. **#4464** — Compaction retry needs status-only stabilization metadata (follow-up to #4366 fix). No fix PR yet.  
   [Issue](https://github.com/nearai/ironclaw/issues/4464)

4. **#4360** — Three orthogonal silent-bypass paths in capability validation ($ref skipping, schema leaks, recursion depth). No fix PR yet.  
   [Issue](https://github.com/nearai/ironclaw/issues/4360)

**Security advisories:** Dependency bumps shipped (#3719) for rustls-webpki (CRL parsing panic), tokio (TOCTOU), h2 (OOM/flooding). No active exploits reported.

## Feature Requests & Roadmap Signals

**Likely in next version:**

1. **IronHub extension ecosystem** — PR #4479 (signed catalog client, Ed25519 verification) porting IronHub install flow to Reborn. Already in active development.

2. **WebUI v2 provider onboarding** — PR #4481 (first-run provider experience, NEAR AI / Codex login) — stacked on merged #4441. Nears completion.

3. **Durable background subagent delivery** — Issue #4474 umbrella consolidating completion delivery, observable UX, extensible plumbing. Design doc completed; multiple PRs already merged.

4. **Trigger lifecycle completeness** — Issue #4475 umbrella covering one-time runs, activation states, completion policies. Implementation in progress after #4466.

**Longer-term signals:**

- **Reborn composition decomposition** — Issues #4469, #4470, #4471 tracking splitting of 3,000+ line files (`factory.rs`, `runtime.rs`, `ironclaw_reborn_composition`) into owned crates with CI-enforced boundaries. Architecture hygiene push.
- **OpenAI-compatible API migration** — Issue #3283 (parent) plus #4468 (verbatim `previous_response_id`) continuing migration of `/v1/chat/completions` and `/v1/responses` onto Reborn.

## User Feedback Summary

**Pain points addressed this week:**
- Model could not call advertised tools (spawn_subagent) — caused confused tool-calling loops (#4424)
- Background subagents silently dropped results — users see incomplete workflows without error (#4084)
- Triggers re-fired forever with CompleteAfterFirstFire — unusable for one-shot automation (#4420)
- WebUI v2 provider management was overwhelming — users needed a wall of config forms (#4477)
- Slack integration missing auth prompts — silent failures when credentials missing (#4478)

**Emerging needs:**
- Operators need visible loop termination reasons for debugging (#4427)
- Subagent cleanup semantics need clear documentation — "best-effort" vs "guaranteed" (#4465)
- Users expect one-time trigger runs to work with simple API calls (#4473)
- Compaction errors on new/conversations mid-turn frustrate UX (#4366)

**Satisfaction signals:** Rapid closure of high-impact bugs this week (subagent delivery, trigger policies, tool parity) indicates responsive maintainer team. Multiple design documents created for remaining gaps (subagent compaction, trigger lifecycle).

## Backlog Watch

**Long-unanswered issues needing maintainer attention:**

1. **#4238** [OPEN, 7 days] — "Project product-auth accounts into CredentialAccountStore (broker projection)". Status: still open with no fix PR. Links to credential broker refactoring that may block other auth work. Creator: serrrfirat (core).  
   [Link](https://github.com/nearai/ironclaw/issues/4238)

2. **#3283** [OPEN, 30 days] — "Migrate OpenAI-compatible chat and Responses APIs onto Reborn". Parent ticket with growing dependency chain (6 open sub-tickets). No recent activity from assignee serrrfirat.  
   [Link](https://github.com/nearai/ironclaw/issues/3283)

**Long-open PRs with no recent commits:**

3. **#3922** [OPEN, 13 days] — "Wire SecurityAuditSink into obligation handler + hook deny paths". 0 comments, no commits since opening. Security-critical path.  
   [Link](https://github.com/nearai/ironclaw/pull/3922)

4. **#3936** [OPEN, 13 days] — "LibSqlPredicateStateBackend in own crate" (durable hooks PR 3/4). Still open with sibling PRs (#3937, #3933, #3931) also stale. Blocking hooks production activation.  
   [Link](https://github.com/nearai/ironclaw/pull/3936)

5. **#3951** [OPEN, 13 days] — "Third-party extension hook activation via hook-only projection". Depends on #3938 (also open, stale). Third-party ecosystem feature blocked.  
   [Link](https://github.com/nearai/ironclaw/pull/3951)

**Risk assessment:** The hooks framework PR series (PRs #3922, #3931, #3933, #3936, #3937, #3938, #3941, #3951 — all from zmanian) has been open for 13 days with no recent commits. This represents a 8-PR dependency chain where progress on each depends on merges in sequence. The security audit wiring is the most critical blocker in this chain. Core team attention may be needed to unblock by merging #3922, #3938, and #3931 as they carry security fixes.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-05

## Today's Overview
LobsterAI shows **high development velocity** today with 17 PRs merged/closed in the last 24 hours and only 1 open issue. The project appears to be in a **consolidation phase** following the recent `2026.5.28` release (PR #2090), with teams focusing on Cowork stability, MCP reliability improvements, and cleanup of stale feature branches. No new releases were published today. The single open issue (#769) concerns OpenClaw gateway startup failures, suggesting edge-case configuration problems may still affect some users.

## Releases
**No new releases today.** The most recent release is `2026.5.28` (PR #2090), which brought Kit marketplace, Cowork session forking, and plugin manual updates. No migration notes are needed at this time.

## Project Progress

17 PRs were merged or closed today, reflecting significant engineering activity:

### Cowork & Collaboration
- **PR #2111** — Refactored voice input modules: extracted ASR IPC registration, WAV encoding, and error handling into dedicated modules; cleaned up CoworkPromptInput by removing state and button UI
- **PR #2110** — Fixed oversized OpenClaw image payloads: added detection before sending to gateway, classified `1009`/max-payload errors as message-size errors, added estimation tests
- **PR #2095** — Added subagent batch deletion support including sidebar selection, async gateway cleanup, and concurrency/retry limits
- **PR #2097** — Added title bar close button to the Cowork search modal
- **PR #2101** — Added artifact preview text selection: users can now select text from Markdown/plain text artifacts and add to cowork drafts; distinguished artifact sources from assistant messages
- **PR #1536** (stale) — System notifications for Cowork session completion/failure (merged from backlog)
- **PR #1538** (stale) — Bookmark/favorite feature for AI replies (merged from backlog)
- **PR #1542** (stale) — Session tag classification system with custom tags and filtering (merged from backlog)

### MCP & Plugins
- **PR #2091** — Optimized npx MCP launch: pre-resolves npm packages to stable node paths, avoiding slow npx on each session; added first-response timing logs for debugging startup bottlenecks
- **PR #2100** — Fixed managed MCP installs to remain node-aware: injects resolved Node toolchain path into npm install commands; preserves Electron node/npm shim env for fallback stdio; falls back gracefully instead of dropping MCP servers
- **PR #2103** — Added URL validation for remote MCP server configs with localized error messages and tests
- **PR #2096** — Hidden internal OpenClaw plugins from plugin management UI

### Model Support & i18n
- **PR #2093** — Fixed MiniMax-M3 image input support (was incorrectly hardcoded as `supportsImage: false` from M2.5/M2.7)
- **PR #1540** (stale) — Fixed i18n missing translation for "edit" button in memory module settings
- **PR #1543** (stale) — Fixed hardcoded Chinese strings in approval dialogs; now respects app language setting
- **PR #1544** (stale) — Fixed GitHub Copilot OAuth polling not canceling when Settings panel unmounts

## Community Hot Topics

**Most Active Issue:**
- **#769 [OPEN] — OpenClaw gateway fails to start within timeout** — Created 2026-03-24, updated 2026-06-04, 1 comment. User reports gateway startup failure with an attached screenshot but no detailed logs yet. The timing of activity suggests this may be related to recent payload size fixes (PR #2110) or gateway config changes. Maintainers should request system logs and OpenClaw configuration details.  
  [View Issue](https://github.com/netease-youdao/LobsterAI/issues/769)

**Notable Pattern:** Today's merged PRs included **4 stale PRs** from April 7 (PRs #1536, #1538, #1542, #1540) that had been languishing for nearly two months. Their sudden merge suggests a deliberate backlog cleanup effort, which is positive for community contributions. However, the long delay raises questions about PR review capacity.

## Bugs & Stability

| Severity | Issue | Status | Details |
|----------|-------|--------|---------|
| **High** | #769 — OpenClaw gateway startup timeout | Open | Gateway fails to start within expected time; no root cause identified yet. Screenshot attached but lacks error details. This could be a configuration issue or a regression from recent gateway changes. |
| **Medium** | PR #2110 — Oversized image payloads causing gateway failures | Fixed | OpenClaw `chat.send` payloads exceeding limits caused `1009` errors. Now classified correctly as message-size errors with user-facing prompts. |
| **Low** | PR #2093 — MiniMax-M3 image input | Fixed | Model incorrectly blocked image input due to stale hardcoded flag. |
| **Low** | PR #1544 — OAuth polling leak | Fixed | Settings panel unmount left background polling running, potentially causing 15-minute delays. |
| **Low** | PR #1543 — i18n hardcoded strings in dialogs | Fixed | Approval dialogs showed Chinese text in English mode. |

## Feature Requests & Roadmap Signals

**Implicit Feature Requests from Code Changes:**
- **Artifact text reuse** (PR #2101) — Users now can select text from artifacts and add to drafts. This addresses a workflow pain point where users had to manually retype or copy from previews.
- **Subagent batch operations** (PR #2095) — Deleting multiple subagents at once suggests users manage many subagents and need bulk actions.
- **Tag classification** (PR #1542, stale merged) — Custom tags and filtering for Cowork sessions indicate users want stronger organizational tools for large conversation histories.

**Predictions for Next Release:**
- Improved MCP launch reliability (npx optimization, URL validation, node-awareness) will likely be the headline stability improvement
- Cowork voice input modularization (PR #2111) may enable future voice-related features
- The artifact preview interaction (PR #2101) could expand to support more artifact types

## User Feedback Summary

**Pain Points Addressed:**
- **Slow MCP startup** — PR #2091's npx optimization directly addresses user complaints about MCP server launch times; QA logs mentioned startup delays as a known issue
- **Gateway payload errors** — PR #2110 fixes confusing `1009` failures when sending large images, which were likely frustrating users with opaque error messages
- **Missing image support** — MiniMax-M3 users expecting image input got silent failures (PR #2093)
- **i18n inconsistencies** — Multiple fixes (PRs #1540, #1543) address English-mode users encountering Chinese text

**Unresolved Pain Points:**
- OpenClaw gateway startup failures (#769) remain undiagnosed
- No feedback yet on the 2026.5.28 release's Kit marketplace or session forking features

## Backlog Watch

| Item | Age | Status | Concern |
|------|-----|--------|---------|
| **#769** — OpenClaw gateway startup timeout | 73 days | Open, 1 comment | Critical bug with no resolution; may affect users unable to use Cowork at all. Needs maintainer investigation and request for logs. |

**No long-unanswered PRs** — all 17 PRs from today were processed within 1-2 days of creation, indicating healthy review velocity. However, the "stale" batch of PRs (merged today but created 61 days ago) suggests some contributions can wait months for attention.

**Recommendation:** Request system information from #769 reporter and consider reproducing the issue with the latest `main` branch, as PR #2110's payload size fix may already address some gateway startup failures.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-05

## 1. Today's Overview
Moltis is in active development with a focus on browser automation robustness and communication channel expansion. Four open pull requests were updated in the last 24 hours, with two new issues filed. No releases were published today. The project is maintaining steady, contributor-driven momentum, with particular attention to shadow DOM handling, session history optimization, and Telegram integration quality. Activity is healthy but concentrated in open PRs and issues rather than merges.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
No PRs were merged or closed in the last 24 hours. All four updated PRs remain open. The active development areas reflected in open PRs include:

- **Browser shadow DOM piercing (#1100, #1103):** Two parallel PRs address the same core problem — the browser tool cannot interact with elements inside web components (e.g., Salesforce Lightning). PR #1100 by `resumeparseeval` proposes a flat `querySelectorAll` approach that misses shadow roots. PR #1103 by `s-salamatov` builds on #1100 with fixes and improvements. This indicates a coordinated effort toward a unified solution.
- **Session history compaction (#1089):** A week-old PR by `s-salamatov` caps persisted tool and tool results before rehydration into `ChatMessage`s. This applies across normal chat, streaming, retry-after-compaction, and LLM-backed compaction prompts — a broad stabilization effort for session management.
- **Telegram streaming separation (#1099, fixes #1097):** Treats Telegram progress updates as temporary messages (sent silently, edited, then deleted) rather than final answers, keeping final replies clean. This improves UX for Telegram users.

## 4. Community Hot Topics
Both new issues received zero comments and zero reactions as of data collection, so there are no "hot" discussions today. However, both represent meaningful community engagement:

- **Issue #1102 — Local STT engine request (SenseVoice/FunASR):** Author `LauraGPT` proposes adding ultra-fast local speech-to-text. SenseVoice-Small can transcribe 10s of audio in ~70ms. This taps into demand for offline-capable, low-latency voice interfaces.
- **Issue #1101 — SMS and LINE channel integration:** Author `joeblew999` requests adding SMS and LINE messaging channels (proposing `moltis-sms`, `moltis-line`). This signals growing interest in non-Telegram/WhatsApp messaging platforms for agent communication.

**Underlying need:** Users increasingly want Moltis to operate across diverse real-world communication channels, especially in Asia-Pacific markets (LINE) and for mobile-first use cases (SMS). Low-latency voice interfaces complement this mobility trend.

## 5. Bugs & Stability
No new bug reports were filed today. No crashes, regressions, or error-related issues were identified. The stability picture is quiet, though the open PRs suggest underlying issues:

- **Browser tool shadow DOM limitation (#1100, #1103):** Not a crash, but a functional gap — the browser tool silently fails to detect interactive elements inside web components. Severity: **Medium**. Fix PRs exist.
- **Session history bloat (#1089):** Addressed by the compaction PR, indicating that rehydration of large tool results into `ChatMessage`s could degrade performance. Severity: **Low-Medium**. Fix PR exists.

No urgent stability concerns are present.

## 6. Feature Requests & Roadmap Signals
Two notable feature requests emerged:

| Issue | Feature | Predictability |
|-------|---------|----------------|
| #1102 | FunASR/SenseVoice local STT engine | **Medium-High** — The project is a voice assistant; adding local, fast STT aligns with its core value proposition. Could appear in next minor release if maintainers prioritize offline capability. |
| #1101 | SMS and LINE channels | **Medium** — Feature-flag-gated channel addition is low risk. LINE has strong demand in Japan/SE Asia. SMS offers universal reach. More likely for v0.5 or later, depending on maintainer interest. |

Both signals suggest Moltis is being evaluated for production and geographically diverse deployments.

## 7. User Feedback Summary
Based on today's data only (limited to two new issues with zero comments):

- **Positive signal:** The STT request (#1102) opens with "Great voice assistant project!" — indicating user satisfaction with the core product.
- **Pain point — Browser interaction gaps:** While no user complaint was filed today, the two shadow DOM PRs (#1100, #1103) exist because users encountered elements (e.g., Salesforce Lightning) that Moltis could not interact with. This is an undiagnosed usability gap.
- **Pain point — Telegram UX:** PR #1099 addresses a real user complaint (#1097) about Telegram progress messages mixing with final replies — a quality-of-life bug that degrades the agent messaging experience.

## 8. Backlog Watch
- **PR #1089 (s-salamatov)** — "Cap persisted tool results before rehydration": **5 days old** without merge. This is the oldest open PR with recent updates. It touches session compaction across multiple code paths. Needs maintainer review and decision.
- **PR #1100 vs #1103 conflict:** Two competing PRs for the same shadow DOM fix may require reconciliation. No maintainer has signaled which direction is preferred. A decision or a unified PR would clarify direction.
- **No long-stale issues or PRs** beyond the above — the backlog is well-tended.

**Maintainer attention needed:** Resolve the shadow DOM PR pairing (merge one, or request a combined approach) and decide on PR #1089 to prevent session compaction changes from diverging further from main.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-05

## Today's Overview
CoPaw shows sustained high community engagement with 32 issues and 26 pull requests updated in the last 24 hours. The project remains in active development with a healthy balance of 13 open issues, 19 closed issues, 10 open PRs, and 16 merged/closed PRs. A new beta release v1.1.11-beta.1 shipped today, addressing configuration fallback logic and cron job behavior. Community-driven feature requests around agent interruption, cron script execution, and memory system enhancements continue to dominate discussions, while several stability-related bugs (context compaction failures, MCP tool name validation) have been actively addressed with fix PRs. Overall project health is **strong**, with responsive maintainers and a growing contributor base.

## Releases
**v1.1.11-beta.1** (released 2026-06-05)
- **Fix**: Added `ProviderManager` fallback for `get_model_max_input_length` to prevent crashes when model config incompletely specifies max input length
- **Refactor**: Disabled push bubble notifications for cron jobs of type 'agent' to reduce noise
- **Migration Notes**: No breaking changes; this is a hotfix release addressing critical stability issues

## Project Progress
**16 PRs merged/closed today** — key highlights:

- **[#4958](https://github.com/agentscope-ai/QwenPaw/pull/4958)** (CLOSED): Fix MCP tool name validation for OpenAI-style providers — tools containing "." (e.g., `pat.batch_plan`) were rejected; now sanitized via alias rewrite
- **[#4954](https://github.com/agentscope-ai/QwenPaw/pull/4954)** (CLOSED): Converted `write_file`/`append_file` to use `aiofiles` for non-blocking I/O, preventing event loop blocking
- **[#4956](https://github.com/agentscope-ai/QwenPaw/pull/4956)** (CLOSED): Fixed `'str' object has no attribute 'get'` error in `as_msg_handler.py` during context compaction
- **[#4806](https://github.com/agentscope-ai/QwenPaw/pull/4806)** (CLOSED): Added `spawn_subagent` tool for ephemeral in-workspace sub-agent execution, with three collaboration modes
- **[#4853](https://github.com/agentscope-ai/QwenPaw/pull/4853)** (CLOSED): Fixed browser process tree cleanup and temp directory lock persistence on Windows
- **[#4801](https://github.com/agentscope-ai/QwenPaw/pull/4801)** (CLOSED): Auto-install missing `pyside6-essentials` dependency for Desktop Pet plugin on Windows
- **[#4925](https://github.com/agentscope-ai/QwenPaw/pull/4925)** (CLOSED): Preserved `acl_sender_id` during native payload batch-merge across all channels
- **[#4879](https://github.com/agentscope-ai/QwenPaw/pull/4879)** (CLOSED): Added Feishu interactive card content extraction support
- **[#4848](https://github.com/agentscope-ai/QwenPaw/pull/4848)** (CLOSED): Added QR code authorization flow for QQ channel
- **[#4332](https://github.com/agentscope-ai/QwenPaw/pull/4332)** (CLOSED): Completed frontend unit test milestone (10 files, ~100 test cases)
- **[#4804](https://github.com/agentscope-ai/QwenPaw/pull/4804)** (CLOSED): Added Prompt Section Registry for plugin system prompt injection
- **[#4955](https://github.com/agentscope-ai/QwenPaw/pull/4955)** (OPEN): Adds lifecycle events for background subagents (heartbeat, cancellation propagation)

## Community Hot Topics
- **[#4644](https://github.com/agentscope-ai/QwenPaw/issues/4644)** (CLOSED, 20 comments): Tool calls not displaying in Console UI until page refresh — highest engagement issue, resolved without logging errors, indicating a persistent frontend rendering bug
- **[#4796](https://github.com/agentscope-ai/QwenPaw/issues/4796)** (CLOSED, 6 comments): Request for slash-command skill autocompletion (`/skills`) — reflects user desire for discoverability and workflow efficiency
- **[#4652](https://github.com/agentscope-ai/QwenPaw/issues/4652)** (CLOSED, 4 comments): Memory system enhancement request — users want "summarize, relate, remind" instead of "record-only" behavior
- **[#3891](https://github.com/agentscope-ai/QwenPaw/issues/3891)** (OPEN, 4 comments, 1 👍): DeepSeek prefix cache optimization — 95% hit rate causes significant cost inefficiency with variable pricing models
- **[#4937](https://github.com/agentscope-ai/QwenPaw/issues/4937)** (OPEN, 3 comments): `/compact` command ignores model-specific `max_input_length` — affects models with 512K context (MiniMax M3)
- **[#4757](https://github.com/agentscope-ai/QwenPaw/issues/4757)** (OPEN, 3 comments): Automatic provider degradation on token exhaustion — community wants built-in failover without manual configuration

**Underlying analysis**: The most active discussions reveal three core community demands: (1) **visibility & feedback** — users find it unacceptable when agent actions (tool calls, context usage, token counts) are invisible; (2) **proactive intelligence** — the memory system should learn and remind, not just store; (3) **configuration ergonomics** — users want automatic fallback/degradation rather than manual model switching.

## Bugs & Stability
| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **High** | [#4937](https://github.com/agentscope-ai/QwenPaw/issues/4937) (OPEN) | `/compact` command ignores model's `max_input_length`, always uses 128K default — may cause data loss for large-context models | None yet |
| **High** | [#4962](https://github.com/agentscope-ai/QwenPaw/issues/4962) (OPEN) | DeepSeek API response content folded into thinking process — requires manual expansion to view | None |
| **Medium** | [#4953](https://github.com/agentscope-ai/QwenPaw/issues/4953) (CLOSED) | `/compact` crashes with mixed-type list message content (`'str' object has no attribute 'get'`) | Fixed via [#4956](https://github.com/agentscope-ai/QwenPaw/pull/4956) |
| **Medium** | [#4957](https://github.com/agentscope-ai/QwenPaw/issues/4957) (OPEN) | Task Status API returns stale "running" state after completion — breaks API consumers | None |
| **Medium** | [#4959](https://github.com/agentscope-ai/QwenPaw/issues/4959) (OPEN) | Abnormal LaTeX formula rendering in console | None |
| **Low** | [#4928](https://github.com/agentscope-ai/QwenPaw/issues/4928) (CLOSED) | Skill marketplace download fails with "Response body too large" (5MB limit exceeded) | None yet |
| **Low** | [#4960](https://github.com/agentscope-ai/QwenPaw/issues/4960) (OPEN) | Desktop version inaccessible from LAN mobile devices despite firewall/whitelist config | None |

**Key regression**: The `'str' object has no attribute 'get'` error pattern appeared in multiple compaction scenarios ([#4953](https://github.com/agentscope-ai/QwenPaw/issues/4953), [#4956](https://github.com/agentscope-ai/QwenPaw/issues/4956)) — a root cause fix was merged today for the `as_msg_handler.py` path, but the model-level `max_input_length` override bug ([#4937](https://github.com/agentscope-ai/QwenPaw/issues/4937)) remains unaddressed.

## Feature Requests & Roadmap Signals
**Likely candidates for v1.1.12**:
- **Agent interruption mechanism** ([#4961](https://github.com/agentscope-ai/QwenPaw/issues/4961), [#4964](https://github.com/agentscope-ai/QwenPaw/issues/4964)): Two identical requests today from the same user — strong signal. PR [#4955](https://github.com/agentscope-ai/QwenPaw/pull/4955) adds lifecycle events for subagents, which could be the foundation.
- **Cron shell/script execution** ([#4950](https://github.com/agentscope-ai/QwenPaw/issues/4950), [#4963](https://github.com/agentscope-ai/QwenPaw/issues/4963)): Users want to run scheduled tasks (backups, health checks) without AI agent involvement.
- **Token/context usage visibility** ([#4767](https://github.com/agentscope-ai/QwenPaw/issues/4767), [#4782](https://github.com/agentscope-ai/QwenPaw/issues/4782)): Two requests for per-conversation token display. PR [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) (OPEN) already implements this but is under review.
- **Automatic provider degradation** ([#4757](https://github.com/agentscope-ai/QwenPaw/issues/4757)): Community-designed failover mechanism; closed issue [#4181](https://github.com/agentscope-ai/QwenPaw/issues/4181) previously requested similar functionality.

**Longer-term signals**:
- **Memory system overhaul** ([#4652](https://github.com/agentscope-ai/QwenPaw/issues/4652), [#4640](https://github.com/agentscope-ai/QwenPaw/issues/4640)): Users want proactive summarization, cross-session association, and status tracking for memory entries.
- **File preview/generation UX** ([#4786](https://github.com/agentscope-ai/QwenPaw/issues/4786)): Quick actions to open generated files and preview PPT content inline.

## User Feedback Summary
**Pain points**:
- **Context management confusion**: Users struggle with invisible token usage and compaction behavior that doesn't respect model limits ([#4937](https://github.com/agentscope-ai/QwenPaw/issues/4937), [#4953](https://github.com/agentscope-ai/QwenPaw/issues/4953))
- **Windows UX issues**: Desktop startup hangs ("Waiting for HTTP ready"), browser process leaks, pet plugin missing dependencies — all actively being patched ([#3555](https://github.com/agentscope-ai/QwenPaw/issues/3555), [#4853](https://github.com/agentscope-ai/QwenPaw/pull/4853), [#4801](https://github.com/agentscope-ai/QwenPaw/pull/4801))
- **Model integration friction**: DeepSeek thinking/reasoning content mixing ([#4962](https://github.com/agentscope-ai/QwenPaw/issues/4962)), MCP tool name validation failures ([#4918](https://github.com/agentscope-ai/QwenPaw/issues/4918))
- **Network access**: Docker containers and LAN mobile access pose configuration challenges ([#4960](https://github.com/agentscope-ai/QwenPaw/issues/4960))

**Satisfaction signals**:
- Active feature requests indicate users are deeply invested in the platform
- Multiple first-time contributors submitted meaningful PRs today (SnowTQ, splash-li, hxnan)
- Users are building plugins (DataPaw, OpenSandbox) and filing detailed enhancement RFCs — signs of a healthy ecosystem

## Backlog Watch
- **[#3891](https://github.com/agentscope-ai/QwenPaw/issues/3891)** (OPEN, 42 days, 4 comments, 1 👍): DeepSeek prefix cache optimization — financially significant bug (5% cache miss = 5x cost increase). No assignee or milestone despite clear cost implications.
- **[#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669)** (OPEN, 11 days): Tauri auto-updater PR — essential for desktop distribution but not yet merged. Requires review from core team.
- **[#4900](https://github.com/agentscope-ai/QwenPaw/pull/4900)** (OPEN, 3 days): Plugin loader decoupling for PyInstaller environment — critical for Windows Desktop stability. Author wangfei010313 filed related issues.
- **[#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622)** (OPEN, 14 days): DataPaw plugin with 12 BI skills — under review but no updates; needs maintainer attention for integration path.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-05

## Today's Overview

ZeroClaw is in an **intense period of rapid iteration**, with **50 PRs and 35 Issues updated in the last 24 hours** — a very high activity level indicating a major push toward the v0.8.0/v0.8.1 release lines. The project is juggling multiple priorities simultaneously: **compiler-breaking regressions on master**, **a large security/privacy feature slate**, **significant UI improvements to the gateway web interface**, and **ongoing channel/provider integration work**. Five bugs from today were closed, but several high-severity (S1) bugs remain open. The maintainers are actively merging fixes and reviewing RFCs, though a notable 153-commit revert audit (#6074) continues to track recovery work. No new releases were cut today.

## Releases

**None** — no new releases were published on 2026-06-05. The last release remains unidentified in this data. The project appears to be in the pre-release phase for v0.8.0, with a dedicated tracker issue (#7112) coordinating the release queue.

## Project Progress

**17 PRs were merged or closed** in the last 24 hours. Notable merged/closed pull requests:

- [#7231 — fix(ollama): restore compiling master build](https://github.com/zeroclaw-labs/zeroclaw/pull/7231) (closed) — A critical fix that restored `master` compilation after two build-breaking defects in the Ollama provider from PR #7095. This was merged promptly.
- [#7229 — feat(web): MCP, Skills, Plugins & Providers dashboard tabs](https://github.com/zeroclaw-labs/zeroclaw/pull/7229) (open) — Adds four first-class management tabs to the web UI, moving infrastructure management away from hand-editing config files.
- [#7223 — feat(web): support slash commands in gateway web chat input](https://github.com/zeroclaw-labs/zeroclaw/pull/7223) (open) — Implements `/help`, `/clear`, `/model`, `/status` slash commands for the web chat.
- [#7222 — fix(gateway): clear backend history on "Clear all"](https://github.com/zeroclaw-labs/zeroclaw/pull/7222) (open) — Fixes the bug where "Clear all" only wiped UI state without deleting the persisted session.
- [#7221 — fix(gateway): block observability telemetry from chat WS by default](https://github.com/zeroclaw-labs/zeroclaw/pull/7221) (open) — Root-cause fix for the "unknown" tool cards bug (#7151).
- [#7212 — docs(fnd): fully support WASM Component Model (FND-001)](https://github.com/zeroclaw-labs/zeroclaw/pull/7212) (open) — Commits to WASI Component Model with WIT files, replacing Extism with `wasmtime` for ARM32 target support.

Additional fixes merged/closed include docs link corrections (#7186, #7187), PO translation contamination audit (#7200), reasoning_effort handling corrections (#7194, #7203), and SKILL.md blank-line preservation (#7196).

## Community Hot Topics

The most active discussions by comment count and reactions:

1. **[#5962 — [Bug]: Ollama Provider call failed when tools are needed](https://github.com/zeroclaw-labs/zeroclaw/issues/5962)** (CLOSED, 6 comments) — An S1 bug blocking workflows with Ollama + tools. Now closed, indicating a fix was deployed. The underlying need: Ollama users need reliable tool-calling to use ZeroClaw as a practical local-agent runtime.

2. **[#6909 — [Feature]: computer-use support (screen interaction like Codex/Peekaboo)](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)** (OPEN, 5 comments, high risk) — Users are explicitly requesting desktop GUI automation (screenshots, mouse/keyboard events). This is a direct competitive parity request against OpenAI Codex and OpenClaw. Community interest is high; likely targeting v0.9.0+.

3. **[#3566 — [Feature][interop]: A2A (Agent-to-Agent) Protocol Support](https://github.com/zeroclaw-labs/zeroclaw/issues/3566)** (OPEN, 5 comments, 7 👍) — A long-running, high-interest feature for multi-agent interoperability. The 7 reactions (highest of any issue) signal strong community demand. A new well-known discovery sub-issue (#7218) was filed today, suggesting progress.

4. **[#7155 — [Feature]: Add a per-execution confirmation tier for high-risk shell commands](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)** (OPEN, 2 comments, priority:p1) — Users want a Claude Code-style allow/ask/deny policy for shell commands. This reflects a recurring theme: **users need granular control over agent autonomy**, especially for security-sensitive operations.

5. **[#7142 — [Feature]: Expose the security enforcement layer as a pluggable provider interface](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)** (OPEN, 3 comments) — A tracking issue for making security enforcement pluggable. Combined with #7141 (OIDC support), this suggests ZeroClaw is investing heavily in enterprise security infrastructure.

## Bugs & Stability

**High-severity bugs reported today (S1 - workflow blocked):**

- **[#7227 — zerocode Quickstart hardcodes model-provider alias to `default`](https://github.com/zeroclaw-labs/zeroclaw/issues/7227)** (S1) — New users with existing providers hit a collision because the TUI Quickstart hardcodes the alias to `default` with no editing UI. No fix PR yet.

- **[#7211 — The repo is huge as hell](https://github.com/zeroclaw-labs/zeroclaw/issues/7211)** (S3, CLOSED) — A sarcastic-but-legitimate complaint about repository size. Closed without action.

**Medium-severity bugs (S2 - degraded behavior):**

- **[#7225 — WhatsApp Web mention_only ignores replies to the bot](https://github.com/zeroclaw-labs/zeroclaw/issues/7225)** (S2) — In group chats with `mention_only=true`, replies to bot messages are dropped unless explicitly mentioned again. No fix PR yet.

- **[#7143 — Agent repeatedly runs near-duplicate shell discovery commands until max_tool_iterations exhausted](https://github.com/zeroclaw-labs/zeroclaw/issues/7143)** (S2) — Slack-connected coding agents waste tool iterations on duplicate discovery commands. This is a behavioral bug that degrades user experience and consumes rate limits.

**Regressions on master:** Two build-breaking regressions were introduced by #7095 (Ollama provider signature change conflicts with #6848). Both were fixed in #7231 and #7224, merged today. The `master` branch is now compiling again.

## Feature Requests & Roadmap Signals

**Likely for v0.8.0 (based on tracker #7112):**
- Config and tool-call-parser Stable-tier promotion
- Schema/config breaking-change cleanup
- Runtime/provider configuration correctness
- Shell command confirmation tiers (#7155)
- Per-model capability and context window config (#7100)

**Likely for v0.9.0 (based on tentative targets):**
- Pluggable security provider interface (#7142)
- OIDC authentication for RPC/WSS transport (#7141)
- Computer-use / desktop GUI interaction (#6909) — high community demand
- A2A protocol with well-known discovery (#3566, #7218)
- WASM Component Model support (#7212)

**New features filed today:**
- [#7228 — Wire reasoning_effort into Azure OpenAI provider](https://github.com/zeroclaw-labs/zeroclaw/issues/7228) (parity request)
- [#7229 — MCP/Skills/Plugins/Providers dashboard tabs](https://github.com/zeroclaw-labs/zeroclaw/pull/7229) (web UI management UX)
- [#7184 — i18n: move translated files into git submodule](https://github.com/zeroclaw-labs/zeroclaw/issues/7184) (repo structure improvement)
- [#7138 — File upload / path selection UI for web chat](https://github.com/zeroclaw-labs/zeroclaw/issues/7138) (UX gap)

## User Feedback Summary

**Positive signals:**
- "[ZeroClaw] is great to see a Rust-based agent runtime that is much lighter on resources than many other agent systems we have tried" (#7143) — A Slack user praising ZeroClaw's resource efficiency compared to alternatives.
- The community demonstrates high engagement: 7 👍 on A2A support, active participation across 50 PRs and 35 issues.

**Pain points expressed today:**
1. **Build stability frustration** — Multiple users reported master not compiling (#7231, #7213, #7224). This erodes trust in the development branch.
2. **TUI freezes on daemon disconnect** (#7125, S1) — Users forced to force-quit when the daemon terminates. This is a critical UX issue for production use.
3. **Web chat UX gaps** — Missing slash commands (#7137), file upload (#7138), broken "Clear all" (#7126), timestamp rendering inside bubble (#7157), i18n gaps (#7139). These are minor individually but cumulatively degrade the web interface experience.
4. **Windows shell tool breaks on double quotes** (#7083, S1) — Any shell command containing `"` fails on Windows. This makes ZeroClaw's Windows support practically unusable for coding agents.
5. **Repository bloat** (#7211) — The repo is "huge as hell," which affects clone times and CI performance.

**Underlying need: Users want ZeroClaw to work reliably out-of-the-box** without hand-editing config files, especially on Windows, and want the web UI to be a first-class interface — not just the TUI.

## Backlog Watch

**Long-unanswered issues needing maintainer attention:**

- **[#6074 — audit: track 153 commits lost in bulk revert](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)** (OPEN since 2026-04-24, 2 comments, in-progress) — A monumental recovery audit for 153 commits lost in a single revert. Last updated 2026-06-04, but this represents a significant code lineage gap that could cause silent regressions. Needs transparent tracking.

- **[#5907 — LSP support](https://github.com/zeroclaw-labs/zeroclaw/issues/5907)** (OPEN since 2026-04-19, 3 comments, blocked, needs maintainer review) — Language Server Protocol support for coding agents. This is a **differentiator** against Claude Code and OpenCode, both of which already support LSP. The `blocked` + `needs-maintainer-review` tags suggest it's waiting on architectural decisions.

- **[#3566 — A2A Protocol Support](https://github.com/zeroclaw-labs/zeroclaw/issues/3566)** (OPEN since 2026-03-15, needs-maintainer-review) — The highest-reacted issue (7 👍) is still `blocked`. With the new well-known discovery sub-issue (#7218) filed today, maintainers appear to be moving on this, but the parent issue remains in limbo.

- **[#6970 — v0.8.1 integration/channel/provider/tool PR queue](https://github.com/zeroclaw-labs/zeroclaw/issues/6970)** (OPEN since 2026-05-27) — A tracker with zero comments. The lack of discussion on an operational tracker may indicate coordination gaps or that it's being managed elsewhere.

**PRs awaiting maintainer review:**
- [#7019 — fix(channels): deliver non-opus TTS via sendAudio](https://github.com/zeroclaw-labs/zeroclaw/pull/7019) (OPEN since 2026-05-30, size:L, depends on #6968) — A large channel fix that is blocked by another PR. Review latency could delay Telegram/email audio improvements.
- [#7136 — add Kilo AI Gateway as first-class provider](https://github.com/zeroclaw-labs/zeroclaw/pull/7136) (OPEN since 2026-06-03, size:L, ci:high) — A significant new provider integration awaiting review.

**Overall backlog health:** The project is processing issues quickly (5 closed today), but 6 issues carry the `needs-maintainer-review` tag, indicating reviewer bandwidth is stretched. The v0.8.0/v0.8.1 release pressure is likely the primary cause.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*