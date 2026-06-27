# OpenClaw Ecosystem Digest 2026-06-27

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-27 00:27 UTC

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

Based on the provided GitHub data for OpenClaw on 2026-06-27, here is the structured project digest.

---

### 1. Today's Overview

The OpenClaw project is experiencing an exceptionally high level of activity, with 500 issues and 500 pull requests updated in the last 24 hours. Despite this high volume, there are no new releases today, indicating a focus on bug fixing and feature development rather than cutting new stable builds. Notably, community engagement is intense, with 81 reactions and 109 comments on a long-standing platform feature request. The bulk of the activity appears to be concentrated on critical bugs and stability issues, particularly regarding session state management and multi-agent orchestration.

### 2. Releases

**No new releases were published today.**

The last available data shows no releases. The project is in a heavy development phase with a large backlog of open PRs and issues awaiting review and integration.

### 3. Project Progress

Today, 51 PRs were either merged or closed. While the specific contents of these closed PRs are not detailed in the provided data, a review of the open PRs suggests the team is actively working on several critical areas:

- **Security Hardening:** A significant number of open PRs focus on security, including bounding response bodies in various providers (OpenRouter, Fal, Inworld) to prevent OOM attacks (PR #96873, #96886, #95416), hardening the gateway for public network exposure (PR #44884), improving session directory permissions (PR #45901), and scanning Markdown skill definitions for injection threats (PR #43469).
- **Native App Localization:** A maintainer is actively pushing a large batch of localization PRs for Android and Apple (iOS/macOS) apps, expanding language support and adding locale inventories (PR #97111, #97110, #97113, #97112).
- **Stability Fixes:** A merged/closed PR (#96963) fixes a critical bug where exec command details were truncated on non-character boundaries, potentially causing errors. Other open PRs aim to serialize outbound message deliveries (PR #44143) and fix subagent session event forwarding (PR #39386).

### 4. Community Hot Topics

The community is most engaged with long-standing feature requests and critical bugs.

- **Linux/Windows Desktop Client (Issue #75):** With 109 comments and 81 👍, this is by far the most active issue. The community is eagerly awaiting parity with the macOS, iOS, and Android offerings. The underlying need is for a seamless, non-technical end-user experience on all major desktop platforms.
    - Link: openclaw/openclaw Issue #75

- **Live Dev Agent Tracker (Issue #77598):** This issue acts as a live log for observing a developer’s AI agent's behavior. With 22 comments, it shows the community's intense interest in agent reliability, observability, and debugging real-world agent trajectories.
    - Link: openclaw/openclaw Issue #77598

- **Track Live Dev Agent Behavior (Issue #77598):** This is a running commentary on Pash's dev agent, showing a community-driven desire to understand and improve agent behavior in real-time.
    - Link: openclaw/openclaw Issue #77598

- **Prebuilt Android APK Downloads (Issue #9443):** With 25 comments, users are expressing frustration with the lack of prebuilt APKs, requesting a lower-friction way to run the Android companion app without building from source.
    - Link: openclaw/openclaw Issue #9443

### 5. Bugs & Stability

Today's activity is heavily dominated by critical bugs, many classified as "Platinum Hermit" (P1) severity. A few patterns emerge:

- **Session State & Message Loss (Highest Severity):**
    - **#86538:** Session write-lock timeouts blocking subagent delivery lanes. (P1, Diamond Lobster)
    - **#94228:** Native Anthropic `thinking` blocks bricking long tool-use threads. (P1, Platinum Hermit)
    - **#77642:** Duplicate answers and "missing tool result" synthetic errors (5.3 regression). (P1, Platinum Hermit)
    - **#77012:** WebChat session transcript overwritten on every turn (5.2 regression). (P1, Platinum Hermit)

- **Crash Loops & Instability:**
    - **#76171:** Stale worker processes accumulating, causing high host load and slow responses. (P1, Diamond Lobster)
    - **#76038:** Stuck Session Recovery mechanism failing doubly, causing event loop blocking. (P1, Platinum Hermit)
    - **#75621:** Gateway lazy-spawning duplicate MCP children, causing memory/CPU leaks. (P1, Platinum Hermit)

- **Security & Authentication:**
    - **#76042:** Clean installs of new versions failing to complete. (P1, Platinum Hermit)
    - **#73182:** Reasoning default silently flipped on for Claude models, doubling costs. (P1, Diamond Lobster)
    - **#69799:** macOS TCC permissions being scoped to the shared Node binary instead of OpenClaw. (P1, Platinum Hermit)

- **Regressions:** Multiple P1 and P2 bugs are explicitly marked as regressions from version `2026.5.x`, including issues with Discord channels (#77930), `/new` and `/reset` commands (#77733), and WebChat rendering (#77012).

### 6. Feature Requests & Roadmap Signals

User requests are focused on security, control, and client maturity.

- **Near-Term Predictions (Likely Next Version):**
    - **Masked Secrets (#10659):** A system to prevent agents from seeing raw API keys. This has high priority (P1) and strong community support (4 👍).
    - **Channel-Mediated MCP Approval (#78308):** Extending the existing approval pipeline to MCP tool calls. This is a natural extension of the security model.
    - **Per-Job `acceptSilentStop` Flag (#76159):** A config option for cron jobs that intentionally produce no output, preventing them from being marked as errors.

- **Longer-Term Predictions:**
    - **Filesystem Sandboxing (#7722):** A configurable `tools.fileAccess` system. This is a major feature requiring significant architectural change.
    - **Dynamic Model Discovery (#10687):** Automatically fetching available models from providers like OpenRouter, moving away from static catalogs.
    - **Linux/Windows Apps (#75):** This remains the top requested feature by the community, but its P2 priority suggests it is not the immediate focus.
    - **Runtime Trust Verification (#33106 - Closed):** While this specific issue was closed as stale, the desire for agent-to-agent verification is a strong signal for future features like credential verification or audit trails.

### 7. User Feedback Summary

The data reveals a community that is actively using the software but experiencing significant friction.

- **High Dissatisfaction with Stability:** The sheer volume of P1 "bug" and "regression" labels, especially around session management and message loss, indicates a major stability problem in the `2026.5.x` releases. Users report that "clean installs are not possible" and "response times degrade to minutes."
- **Strong Demand for Security & Control:** Users are proactively requesting more granular control over agent behavior, including masking secrets, denylists for command execution (#6615), and configurable unpaired DM responses.
- **Pain Points with Multi-Agent Systems:** Issues like #43367 and #77598 show that multi-agent orchestration is a core use case but is perceived as "unstable." Users are tracking agent behavior and reporting concurrency bugs, suggesting they are pushing the boundaries of the current architecture.
- **Desire for Polish:** Feature requests like Shift+Enter for newlines in TUI (#10118), no-emoji accessibility mode (#9637), and image tool call failures with Bedrock (#72031) show a demand for a more polished, user-friendly experience.

### 8. Backlog Watch

Several critical issues and pull requests are languishing, requiring maintainer attention.

- **High-Priority Issues Needing Product Decision:**
    - **#76038 (Stuck Session Recovery Mechanism Failure):** This Platinum Hermit bug is blocking users with systemd timeouts but is stuck waiting on a product decision and maintainer review.
    - **#74484 (Gateway Pairing Scope Deadlock):** A Platinum Hermit authentication lockout bug that requires a product decision.
    - **#73182 (Silent Reasoning Cost Increase):** A Diamond Lobster bug causing doubled Anthropic costs, waiting on multiple reviews and a product decision.
    - **#75593 (Subagents list still empty after spawn):** A regression that was supposedly fixed and is now broken again, awaiting maintainer review.

- **Long-Open PRs Needing Proof:**
    - **#44884 (Gateway Public Network Hardening):** A massive P1 security PR that has been open since March and still needs a "real-behavior-proof" triage label.
    - **#43951 (Fix/hooks agent accountid normalization):** Another P1 PR from March that needs proof of behavior.
    - **#39065 (Security: configurable unpaired DM responses):** A major P1 security update from March affecting many channels, waiting for proof.
    - **#41067 (Fix dashboard chat run recovery across reconnects):** A P1 fix for a highly visible feature that has been open for months.

These items represent a significant portion of the project's technical debt and risk. Their age and open status suggest they are either complex, contentious, or low on the priority list despite their high stated severity.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the June 27, 2026, ecosystem digests.

---

## Cross-Project Ecosystem Report: Personal AI Agent & Assistant Landscape
**Date:** 2026-06-27

### 1. Ecosystem Overview

The open-source personal AI agent ecosystem is experiencing a **hyperactive, stabilization-heavy phase**. While no major architectural breakthroughs were released today, the landscape is defined by a furious sprint to harden existing multi-agent systems, fix critical session and state management bugs, and close security gaps across the stack. Activity is overwhelmingly driven by **bug fixing** and **security patching**, rather than novel features, indicating a collective push toward production-readiness following rapid feature development earlier in the quarter. There is a clear architectural schism emerging between projects that treat the agent as a local utility (e.g., NanoBot, NullClaw) versus those building orchestration platforms for complex, multi-agent workflows (e.g., OpenClaw, IronClaw, ZeroClaw). Cross-cutting concerns—tool approval UX, MCP integration, and persistent state management—are consuming developer mindshare across nearly every project.

### 2. Activity Comparison

The following table captures activity across all tracked projects for the last 24 hours.

| Project | Issues Updated | PRs Updated | Merged/Closed PRs | New Release | Health Signal |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | 51 | No | **Strained:** High velocity, but dominated by P1/P2 regressions and backlog |
| **NanoBot** | 28 | 46 | 7 | No | **High Momentum:** Rapid response to security flaws; strong feature PR pipeline |
| **Hermes Agent** | 50 | 50 | 6 | No | **Stabilizing:** High maintenance velocity, dashboard fixes, growing P2 backlog |
| **PicoClaw** | 4 | 18 | 14 | No | **Healthy:** High completion rate (14/18 PRs merged), systematic clean-up |
| **NanoClaw** | 3 | 11 | 2 | No | **Active:** Focused on channel-specific bugs and operational skill development |
| **NullClaw** | 1 | 0 | 0 | No | **Idle:** Single unresolved critical bug (Android build) for over 2 months |
| **IronClaw** | 29 | 50 | 15 | No | **Stable but Strained:** High feature velocity in Reborn architecture; CI/CD fragility |
| **LobsterAI** | N/A* | 8 | 8 | **Yes (2026.6.26)** | **High Velocity:** Coordinated release window; new critical desktop bug |
| **TinyClaw** | 0 | 0 | 0 | No | **Dormant:** No activity recorded |
| **Moltis** | 0 | 1 | 0 | No | **Low Activity:** Quiet development; single observability PR |
| **CoPaw** | 30 | 50 | 24 | **Yes (v2.0.0-beta.1)** | **Sprint Mode:** High volume of bugs and features; pre-release instability |
| **ZeptoClaw** | 0 | 0 | 0 | No | **Dormant:** No activity recorded |
| **ZeroClaw** | 50 | 50 | 11 | **Yes (v0.8.2)** | **High Velocity:** Strong release cadence; A2A interop and security focus |

*Note: LobsterAI primarily uses GitHub issues (#id) different from standard trackers; count inferred from PRs.

### 3. OpenClaw's Position

OpenClaw remains the **dominant "core reference" project** in the ecosystem, evidenced by its sheer scale of activity (500 issues/PRs updated). However, this volume is a double-edged sword.

- **Advantages vs. Peers:** OpenClaw has the largest community and most diverse ecosystem. Its breadth of supported providers and channels is unmatched, and it serves as the upstream target for several derivative projects (e.g., LobsterAI upgrades its OpenClaw runtime).
- **Technical Approach Differences:** OpenClaw appears more "batteries-included" but this leads to significant architectural complexity and brittleness, as seen in the high number of P1 session-state bugs. In contrast, projects like **NanoBot** and **ZeroClaw** are more modular, with NanoBot emphasizing a lightweight "ultra-lightweight" (though debated) footprint and ZeroClaw pushing a Wasm-first security model.
- **Community Size Comparison:** OpenClaw has the most vocal community, but much of that voice is expressing **frustration with stability** (e.g., 109 comments on a desktop client issue). While its community is larger than **Hermes Agent** or **IronClaw**, those projects show higher satisfaction signals, with users submitting detailed RFCs and actively developing plugins.

### 4. Shared Technical Focus Areas

The following requirements are emerging across multiple projects, indicating industry-wide pain points.

| Focus Area | Affected Projects | Key Specific Needs |
| :--- | :--- | :--- |
| **Multi-Agent Orchestration Stability** | **OpenClaw**, **Hermes**, **IronClaw**, **LobsterAI**, **ZeroClaw** | Subagent progress tracking, session state isolation, preventing message loss/deadlocks |
| **Security & Authentication** | **NanoBot**, **PicoClaw**, **ZeroClaw**, **OpenClaw** | SSRF guard bypasses (PicoClaw), MCP scope enforcement (ZeroClaw), API key masking (OpenClaw), memory context leaks (Hermes) |
| **Windows & Desktop Parity** | **OpenClaw**, **NanoBot**, **Hermes**, **LobsterAI** | Android builds (NullClaw), macOS segfaults, Linux/Windows desktop clients, command shell inconsistencies |
| **Tool Approval & UX** | **IronClaw**, **OpenClaw** | "Always allow" persistence, blocking prompt loops, cross-conversation blocking, silent model cost increases |
| **Supply Chain Security** | **ZeroClaw**, **PicoClaw**, **NanoBot** | SBOM generation, dependency replacements (libolm → vodozemac), malicious PyPI package alerts |
| **Platform Portability** | **Hermes**, **NullClaw**, **NanoBot**, **CoPaw** | Android/Termux builds, Python/Node.js dual-requirement friction, mobile app reliability |

### 5. Differentiation Analysis

The projects are diverging along clear architectural and user-target lines.

- **Feature Focus:**
    - **OpenClaw, IronClaw, ZeroClaw** are **Enterprise-Ready Orchestrators**: They focus on complex state machines, multi-agent with tool approval, capability policies, and large-scale deployment. Their feature requests are for governance, observability, and audit trails.
    - **NanoBot, PicoClaw, NullClaw** are **Personal Utility Agents**: They emphasize lightweight operation, CLI-first interaction, and deep integration with personal messaging channels (WhatsApp, Telegram, Discord). Their users want simplicity, low resource usage, and reliable execution.
- **Target Users:**
    - **Technical Power Users**: NanoBot, NullClaw, and ZeptoClaw cater to developers comfortable with CLI, `make` builds, and debugging Go/Python internals.
    - **Enthusiast / Prosumer**: Hermes Agent, PicoClaw, and NanoClaw offer GUI dashboards and mobile clients, aiming for a broader user base but still requiring technical setup.
    - **Enterprise Experimenters**: OpenClaw, IronClaw, and ZeroClaw are the closest to an internal tool that a company might deploy, with features like SSO (in request), capability policies, and role-based access.
- **Technical Architecture:**
    - **Runtime Monoliths vs. Modular Stacks**: OpenClaw and Hermes are large monoliths with numerous integrations that can break. ZeroClaw and NanoBot are moving toward modular, plugin-based architectures (Wasm-first, MCP).
    - **State Management**: OpenClaw’s severe session state bugs contrast with IronClaw's more structured approach (e.g., `AuthorizedDispatchRequest`).

### 6. Community Momentum & Maturity

The projects can be organized into three tiers based on current activity and lifecycle stage.

- **Tier 1: Rapidly Iterating (Sprint/Feature-Heavy)**
    - **ZeroClaw**: Highest maturity. v0.8.2 release plus strong RFC culture for governance and security.
    - **CoPaw**: High risk/reward. v2.0.0-beta.1 is a major refactor, generating significant instability and user engagement.
    - **IronClaw**: High engineering velocity. Deeply engaged in a "Reborn" architecture migration, with a focus on tool approval and capability policy.

- **Tier 2: High Maintenance / Stabilizing**
    - **OpenClaw**: Extreme volume but regression-heavy. The project is "hot" but fragile, likely going through a painful stabilization phase.
    - **Hermes Agent**: Mature project in a stabilization phase. High PR count but low merge rate, indicating careful review and a focus on quality-of-life fixes.
    - **NanoBot**: Resurgent. A burst of security and feature PRs after a period of quiet suggests renewed development focus.

- **Tier 3: Low Activity / Dormant**
    - **TinyClaw**, **ZeptoClaw**: No activity, indicating stalled or abandoned development.
    - **NullClaw**: Critically idle. An unresolved critical build bug for a key platform (Android) with no maintainer response is a red flag for project health.
    - **Moltis**: Quiet but alive. Single observability PR suggests a focused, feature-specific development cycle.

### 7. Trend Signals

Several industry trends are confirmed by the community feedback and development priorities expressed today.

1.  **The "Approval Bottleneck" is Unsolved:** The biggest user friction point across the ecosystem is **tool approval UX**. IronClaw, OpenClaw, and Hermes all have active, high-traffic issues about approval prompts being non-persistent, blocking other conversations, or creating confusing loops. The move toward "auto-approve" defaults (PR #5366 in IronClaw) is a strong signal that the current state of the art is failing.

2.  **Multi-Agent is the Killer App, but Brittle:** Multi-agent orchestration is the primary use case driving many projects, but the technology is not yet ready for primetime. The highest-severity bugs across OpenClaw, Hermes, and LobsterAI are related to session state corruption, subagent progress tracking, and message loss in complex workflows.

3.  **Security Fatigue and Near-Miss Events:** The ecosystem is in a "security cleanup" phase. NanoBot’s response to a malicious PyPI package and ZeroClaw’s focus on supply-chain signing indicate a shift from "move fast and break things" to "trust is a feature." The **SSRF guard bypass** fixed by PicoClaw (ISATAP IPv6 literals) and the **memory context leak** in Hermes Agent show that these are not theoretical risks but live vulnerabilities.

4.  **Desktop Remains the "Third Rail":** The overwhelming demand for stable desktop clients, especially on Linux and Windows, remains the #1 community pain point. Users are willing to tolerate CLI, but the desire for a polished, first-class desktop experience is a massive unmet need across the entire landscape.

5.  **The Rise of the "Developer Agent":** Features like **Live Dev Agent Tracker** (OpenClaw) and requests for **agent-to-agent delegation** (CoPaw) signal a shift from "personal assistant" to "developer augmentation tool." Users are not just asking for answers; they want to observe, debug, and orchestrate agents that write code and manage infrastructure.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the project digest for NanoBot based on the provided GitHub data for 2026-06-27.

---

## NanoBot Project Digest
**Date:** 2026-06-27

### 1. Today's Overview
NanoBot is experiencing a day of exceptionally high activity. The project saw 28 issues updated and a massive 46 pull requests updated, indicating a significant push from the development team. While no new releases were cut today, the focus is clearly on merging a backlog of features, critical security patches, and stability fixes. The community is also highly engaged, particularly around security vulnerabilities and core feature requests.

### 2. Releases
No new releases were recorded for today. The last known version appears to be v0.2.2 (referenced in a bug report), with several security advisories targeting versions `<= 0.2.1`.

### 3. Project Progress
Seven pull requests were merged or closed today, indicating significant forward momentum on bug fixes and feature development.
- **Security Hardening (Critical):** Multiple security fixes were merged to address a series of `exec.allowPatterns` bypasses and MCP scope bypasses discovered by the same researcher. See PRs [#4561](https://github.com/HKUDS/nanobot/pull/4561) (closed), along with closed issues #4519, #4514, #4515, #4516, and #4520.
- **Bug Fixes:** A fix for a Telegram rendering bug on the web was merged (Issue #4539).
- **Feature Advancement:** PR [#4561](https://github.com/HKUDS/nanobot/pull/4561) added optional [Crawl4AI](https://github.com/unclecode/crawl4ai) support for web fetching, addressing a long-standing feature request.

### 4. Community Hot Topics
The most active discussions reveal a community deeply concerned with security and eager for extensibility.
- **Security Alert (Issue #2439):** The most reacted-to item, a critical security report about malicious data-exfiltration code in a PyPI package (`litellm_init.pth`). This has likely been a major driver for the flurry of security fixes today. [Link](https://github.com/HKUDS/nanobot/issues/2439)
- **"Ultra-lightweight" Contradiction (Issue #660):** A "good first issue" with 5 upvotes and 12 comments. Users are challenging the project's core claim, noting the Dockerfile requires both Python and Node.js. This is a persistent source of user friction regarding the project's identity. [Link](https://github.com/HKUDS/nanobot/issues/660)
- **Plugin System (Issue #2231):** A highly requested feature for extensibility, suggesting a move towards a Copilot/Claude Code-like plugin architecture. Multiple PRs created today address related extensibility, suggesting this feedback is being directly acted upon. [Link](https://github.com/HKUDS/nanobot/issues/2231)

### 5. Bugs & Stability
Today’s reports focus on platform-specific issues and long-standing stability problems.
- **High Severity Windows Bugs:**
    - **Inconsistent Shell Semantics (Issue #4544):** The `exec` tool routes single-line commands to `cmd.exe` and multi-line to `PowerShell`, causing cross-platform command failures. A fix PR [#4545](https://github.com/HKUDS/nanobot/pull/4545) is open.
    - **System Service / Restart Failure (Issues #4511, #4513):** Bugs involving `/restart` failing under `nssm` and incorrect PID tracking in the gateway state file on Windows. Fix PRs [#4547](https://github.com/HKUDS/nanobot/pull/4547) and [#4546](https://github.com/HKUDS/nanobot/pull/4546) are open.
- **Medium Severity - Context Leaks:**
    - **Cron Context Sharing (Issue #4082):** Repeated cron jobs reuse the same session, leading to context bleeding between runs. A fix PR [#4550](https://github.com/HKUDS/nanobot/pull/4550) is open.
    - **Heartbeat Delivery (Issue #4418):** Heartbeat task results are delivered to the most recently active channel, not the one that scheduled the task. A fix PR [#4553](https://github.com/HKUDS/nanobot/pull/4553) is open.

### 6. Feature Requests & Roadmap Signals
Today’s activity strongly signals the next major version's direction, with dedicated PRs created for many feature requests.
- **Strong Roadmap Signal (Likely in next release):** A vast number of PRs have been created to address feature requests from the last few months. These include:
    - **Plugin System (PR #4558):** Addressing #2231.
    - **Voice Output / TTS (PR #4560):** Addressing #4010.
    - **Per-Session Model Override (PR #4555):** Addressing #4253.
    - **External Agent Delegation (PR #4559):** Addressing #3436.
    - **Reasoning Effort Escalation (PR #4552):** Addressing #4419.
- **Future Possibilities:**
    - **Voice Clarification Tool (Issue #4508):** A proposal for an `ask_clarification` tool to handle ambiguous user requests, suggesting a move towards more interactive and safe agent behavior.
    - **OpenAI API Auth (Issue #4490):** A request for authentication on the API server for security, which is already addressed in an open fix PR [#4548](https://github.com/HKUDS/nanobot/pull/4548).

### 7. User Feedback Summary
- **Satisfaction Drivers:** Users appreciate the project’s goal of becoming a powerful, extensible personal AI assistant. The rapid response to feature requests and security reports (evidenced by today’s PRs) likely boosts satisfaction among active community members.
- **Pain Points:**
    - **Platform Inconsistency (Windows):** Windows users are clearly experiencing significant friction, particularly with command execution and service management.
    - **Misleading "Ultra-lightweight" Claim:** There is ongoing dissatisfaction with the project's self-description, as the technical reality (dual Python/Node.js requirement) contradicts it.
    - **Configuration Complexity:** Requests for model overrides per conversation, per heartbeat, and per dream service indicate that the current global configuration model is not flexible enough for advanced users with complex workflows.

### 8. Backlog Watch
- **Issue #143 (Security):** An old, closed issue regarding filesystem tools not enforcing workspace restrictions. With today's focus on security bypasses, the maintainers should re-verify this is fully addressed to prevent regression. [Link](https://github.com/HKUDS/nanobot/issues/143)
- **Crawl4AI Support (Issue #2700):** This long-standing feature request was just resolved today via a merged PR, moving it off the backlog. [Link](https://github.com/HKUDS/nanobot/issues/2700)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-06-27  
**Data Source:** GitHub (NousResearch/hermes-agent)

---

## 1. Today's Overview

Hermes Agent is in a period of **high maintenance velocity**, with 50 issues and 50 PRs updated in the last 24 hours, though only **6 PRs were merged/closed** and **14 issues resolved**. Activity is concentrated on **quality-of-life fixes** for the dashboard, gateway, and desktop GUI, rather than major feature work. The `sweeper` bot is actively labeling and closing stale items, but several **P1/P2 bugs** persist around authentication (Anthropic OAuth), session delivery failures (Telegram/WeChat), and security concerns (memory context leaks). No new releases were published, suggesting the team is in a stabilization phase ahead of a minor version bump.

---

## 2. Releases

**No new releases** in the last 24 hours. The most recent known stable version is **v0.16.0** (2026-06-05). The project appears to be accumulating fixes and features on `main` for a future v0.17.0 release.

---

## 3. Project Progress

**Merged/Closed PRs (6 total) — Notable changes:**

- **[#53340] fix(dashboard): allow declared public websocket origins** — *Closed/merged today.* Allows dashboard WebSocket Origin checks to accept operator-declared public URLs (`dashboard.public_url` / `HERMES_DASHBOARD_PUBLIC_URL`) while preserving DNS-rebinding protection. [Link](https://github.com/NousResearch/hermes-agent/pull/53340)

**Open but advancing PRs (highest signal):**

| PR | Focus | Status |
|----|-------|--------|
| [#51024] | Faster Docker builds (docker CI removed from PRs due to slowness) | Open, 0 comments |
| [#21104] | Support proxied dashboard chat sessions + TUI build freshness fix | Open, ongoing |
| [#38846] | Multilingual i18n support (15 languages, 861 keys) | Open, synced with upstream |
| [#44766] | New **Chutes decentralized provider** (TDX Trusted Execution) | Open, new provider |
| [#50337] | Photon plugin: fix iMessage rich links in sidecar | Open, platform fix |

**Notable trends in merged PRs:** The dashboard continues to consume disproportionate developer attention — 6 of the 20 top PRs are dashboard-specific fixes.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Comments | Type | Theme |
|-------|----------|------|-------|
| [#487] Cryptographic Audit Trail — SHA-256 Hash-Chained Action Log *(CLOSED)* | **25** | Feature | Tamper-proof agent accountability |
| [#42006] macOS: launchd_restart fails, gateway falls back to detached *(OPEN)* | **7** | Bug | macOS update/restart loop |
| [#44147] Web dashboard cannot load messages for non-default profile *(OPEN)* | **5** | Bug | Profile routing confusion |
| [#31668] Anthropic models ratelimit/extra usage *(OPEN)* | **5** | Bug | OAuth & billing |
| [#12020] How to suppress `hermes.tool.progress` events *(OPEN)* | **5** | Feature | API compatibility |

### Most Upvoted (👍)

| Issue | 👍 | Request |
|-------|----|---------|
| [#44140] Desktop GUI — auto-scroll, sidebar fix, custom session groups | **4** | UI/UX dashboard fixes |
| [#31668] Anthropic ratelimit/extra usage | **1** | Provider auth |
| [#4445] Telegram Gateway: message chunking/splitting during streaming | **1** | Platform UX |
| [#52318] `/agents` TUI shows subagents stuck on "running" | **1** | Delegate task monitoring |

**Analysis:** The community is driving **three core themes**:
1. **Auth/Billing friction** — Anthropic and Claude team plan OAuth is a consistent pain point
2. **Platform UX gaps** — Discord tables, Telegram message splitting, dashboard non-profile sessions
3. **Protocol compatibility** — OpenAI-API consumers break on Hermes-specific events (`tool.progress`)

---

## 5. Bugs & Stability

### Critical (P1) — Active

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#46789] *(CLOSED)* | macOS Desktop: process execution segfaults (exit code -11) on terminal/execute_code | **Closed without merge** — likely won't fix |
| [#40170] | **Honcho memory provider leaks customer recall context into API calls** (security) | No known fix |
| [#24100] *(CLOSED)* | Discord: command approval prompts route to wrong thread due to `os.environ` session key leak | Closed |
| [#27715] *(CLOSED)* | `get_hermes_dir` backward-compat masks new-path data with empty old-path dirs | Closed |

### High (P2) — Active

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#31668] | Anthropic models ratelimit/extra usage — OAuth failure | No |
| [#37363] | Claude team plan OAuth fails ("Authentication failed" after "Configured successfully") | No |
| [#22010] *(PR)* | Dashboard sessions break after token rotation | Open |
| [#22873] *(PR)* | Dashboard WebSocket blocks event loop on slow hosts | Open |
| [#46082] | Hermes Dashboard memory leak (grows to 5.2GB, OOM-killed) | No |
| [#53273] | Windows Desktop GUI: cmd windows flash on every `terminal()` call | No |
| [#52805] | Gateway: responses not delivered to WeChat/Telegram after processing | No |

### Medium (P3) — Active

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#44147] | Dashboard non-default profile session transcript loading | No |
| [#52318] | `/agents` TUI subagent status stuck on "running" | No |
| [#53259] | TTS tool fails when packages installed via PYTHONPATH | No |
| [#9705] | Azure AI Foundry: `include_usage: true` causes HTTP 422 | No |

**Security Alert:** [#40170] — Honcho memory provider injects `<memory-context>` with literal "[System note: The following is recalled..." into API calls. This is a **customer-facing data leak** risk for multi-tenant gateway deployments.

---

## 6. Feature Requests & Roadmap Signals

### High Signal (likely next release)

| Issue/PR | Request | Priority Signal |
|----------|---------|-----------------|
| [#44140] | Desktop GUI: auto-scroll, sidebar overlap fix, custom session groups | 4 👍, 3 comments |
| [#38846] *(PR)* | Multilingual i18n (15 languages) — already code-ready | Mergable |
| [#44766] *(PR)* | **Chutes decentralized provider** — new inference option | Open, functional |
| [#22835] *(PR)* | MiniMax AI unified integration (OAuth, vision, web search) | Open, large PR |
| [#22881] *(PR)* | Stable plugin inventory JSON contract | Open, infrastructure |

### Medium Signal

| Issue | Feature | Notes |
|-------|---------|-------|
| [#487] *(CLOSED)* | Cryptographic Audit Trail (SHA-256 Hash-Chained) | Closed — possibly deferred to dedicated security plugin |
| [#12020] | Toggle for `hermes.tool.progress` SSE events | Needed for OpenAI-API compatibility |
| [#4445] | Telegram message chunking during streaming | UX improvement for long responses |
| [#9404] | Honcho dedup and platform metadata stripping | Plugin stability |
| [#53341] | CLI `!` prefix for direct shell passthrough | Power-user feature |
| [#52857] | CLI session browser sort by latest activity | UX improvement |
| [#46285] | Smart model routing plugin (cost optimization) | Enterprise need |
| [#53320] | Vestige memory provider integration | New provider |

### Prediction for v0.17.0
- **Likely:** i18n support, Chutes provider, dashboard WebSocket fixes, profile session fix
- **Possible:** Honcho security patch ([#40170]), Discord table code-fence workaround
- **Deferred:** Cryptographic audit trail, smart model routing, Toggle for progress events

---

## 7. User Feedback Summary

### Pain Points (most vocal)

1. **Anthropic OAuth is broken for team plans** — [#37363] `Pratikprodas` reports "Configured successfully" but every message fails with "Authentication failed." A second user [#31668] reports Claude Sonnet 4-6 calls fail with "Third-party apps now draw from your extra usage" — suggesting Hermes is not handling Anthropic's new billing model (extra usage vs. plan limits).

2. **macOS Desktop is unreliable** — [#46789] *(now closed without resolution)*: `javierobcn` reports segfaults on every process execution tool in the desktop app (terminal, execute_code, read_file all fail with exit code -11). CLI works fine. Workaround: use CLI on same machine.

3. **Dashboard session/profile confusion** — Multiple users ([#44147], [#21104], [#21773]) report that the dashboard fails to load/display sessions from non-default profiles, and analytics undercount for multi-profile users.

4. **Windows usability gaps** — [#53273] `drbronson`: cmd windows flash on every terminal call in GUI. [#38122] `hellasleeper108`: Windows Desktop can get stuck in recovery loop after failed update.

### Satisfactions (implied)

- **High plugin ecosystem engagement** — Users are actively developing and submitting plugins (Vestige memory, Chutes provider, MiniMax support), indicating a healthy developer community.
- **Active participation in bug reporting** — Detailed reproduction steps, logs, and configuration dumps suggest users are invested and technical.

### Dissatisfaction Signals
- Long-standing P2 bugs (Anthropic auth, Dashboard memory leak) with no merged fix
- Windows/macOS desktop app quality below CLI standard
- Gateway reliability issues on Telegram/WeChat delivery ([#52805])

---

## 8. Backlog Watch

### Stale High-Severity Issues Needing Maintainer Attention

| Issue | Opened | Age | Priority | Summary | Last Maintainer Activity |
|-------|--------|-----|----------|---------|-------------------------|
| [#31668] | May 24 | 34 days | **P2** | Anthropic ratelimit/extra usage — billing incompatibility | None visible |
| [#37363] | Jun 2 | 25 days | **P2** | Claude team plan OAuth broken | None visible |
| [#40170] | Jun 5 | 22 days | **P1** | **Honcho memory context leak (security)** | None visible |
| [#46082] | Jun 14 | 13 days | **P2** | Dashboard OOM leak (5.2GB) | None visible |
| [#9705] | Apr 14 | 74 days | **P2** | Azure AI Foundry HTTP 422 on `include_usage` | None visible |
| [#13965] | Apr 22 | 66 days | **P2** | Provider config corrupted by agent's own incorrect edits | None visible |

### Stale PRs Needing Review

| PR | Opened | Age | Focus | Status |
|----|--------|-----|-------|--------|
| [#21104] | May 7 | 51 days | Dashboard proxied sessions | Open, no recent review |
| [#21702] | May 8 | 50 days | `/api/local-token` + `/health` endpoints | Open, no recent review |
| [#21745] | May 8 | 50 days | Cross-container gateway health detection | Open, no recent review |
| [#21769] | May 8 | 50 days | Dashboard chat tab outside nix containers | Open, no recent review |
| [#22010] | May 8 | 50 days | Recover sessions after token rotation | Open, no recent review |

### Risk Assessment

The **Honcho memory leak** ([#40170], P1, 22 days stale) is the most concerning unaddressed item. It exposes customer conversation context in API responses when Honcho is used as the memory provider — a **data privacy/compliance risk** for production deployments. The issue has only 2 comments and no maintainer response.

The **Anthropic auth cluster** ([#31668], [#37363]) affects an unknown number of paid Claude users and has no merged fix after 25-34 days. This should be a P1 candidate given the project's emphasis on Anthropic as a supported provider.

---

**Summary:** Hermes Agent is in a **high-activity stabilization phase** with strong community engagement but a growing backlog of P2 bugs and one unaddressed P1 security issue. The dashboard fix cluster (6+ PRs) suggests a v0.17.0 release focused on dashboard reliability is imminent. Maintainer attention is needed on Honcho security, Anthropic authentication, and the stale PR backlog from early May.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-27

## Today's Overview
PicoClaw saw a high day of activity on June 26, driven primarily by a large batch of code hygiene and error-handling PRs rather than major feature work. 18 pull requests were updated in the last 24 hours, with 14 merged or closed—a strong completion rate. The issue tracker shows 4 open and 1 closed issue, with two new bug reports filed today (Android runtime failure and WhatsApp websocket timeout). No new releases were published. Overall, the project is in a maintenance-heavy phase, with contributors systematically addressing lint warnings and edge-case crashes across the gateway, CLI, agent, health, and channel subsystems.

## Releases
**None.** No new releases were recorded in this window. The current stable version remains at v0.2.9, as referenced in the WhatsApp bug report (Issue #3178).

## Project Progress
The following notable changes were merged or closed today:

- **Fix: Gateway startup info guard** ([PR #3181](https://github.com/sipeed/picoclaw/pull/3181)) — Prevents crashes when `GetStartupInfo()` returns missing or malformed sections; keeps console output stable with fallback defaults.
- **Fix: SSRF guard bypass for ISATAP IPv6 literals** ([PR #3143](https://github.com/sipeed/picoclaw/pull/3143)) — Closes a security bypass reported in Issue #3074 by teaching the shared IP classifier to recognize ISATAP literals embedding private IPv4 addresses.
- **Fix: Explicitly ignore Close() errors in error paths & retry loops** ([PR #3172](https://github.com/sipeed/picoclaw/pull/3172), #3170, #3183–#3188) — A coordinated series of 8 clean-up PRs from contributor `chengzhichao-xydt` improves Go lint compliance by explicitly discarding secondary `resp.Body.Close()` and `json.Encode` errors in test helpers, health server, membench, updater, channels (Pico, WhatsApp, OneBot), and base64 encoder paths.
- **Dependency bumps** — Six Dependabot PRs merged across `telego`, `systray`, `line-bot-sdk-go`, `modernc.org/sqlite`, and the GitHub Copilot SDK (from v0.2.0 to v1.0.4, a major version jump).

An open PR introduces **WhatsApp websocket reconnection logic** ([PR #3179](https://github.com/sipeed/picoclaw/pull/3179)), adding read deadlines, ping/pong handlers, and async message dispatching to recover from stale bridge connections.

## Community Hot Topics
- **Feature: Switch from libolm to vodozemac** ([Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)) — 2 👍 and 3 comments. This request to replace the unmaintained libolm with the official vodozemac library has remained open for 18 days with a `priority: high` label. No assignee or linked PR yet. The community clearly wants improved security in the Matrix/E2EE stack.
- **Bug: Duplicate messages from async sub-agents** ([Issue #3094](https://github.com/sipeed/picoclaw/issues/3094)) — Now closed, this issue received 3 comments and described a UX annoyance where `spawn` tool results were pushed both raw and summarized. The closure suggests a fix was deployed, though no explicit PR link is visible in the data.
- **New Bug: Android service launch failure** ([Issue #3182](https://github.com/sipeed/picoclaw/issues/3182)) — Filed hours ago with a screenshot showing path configuration issues; 0 comments yet but represents a significant platform regression for Android users.

## Bugs & Stability
**High Severity:**
- **Android version fails to launch service** ([Issue #3182](https://github.com/sipeed/picoclaw/issues/3182)) — User reports inability to start the Android service, with a screenshot showing configuration path refusal. No fix PR exists yet. This is a critical platform-blocking bug.

**Medium Severity:**
- **WhatsApp websocket timeout** ([Issue #3178](https://github.com/sipeed/picoclaw/issues/3178)) — Connection drops on WhatsApp channel when using scheduled tasks on Docker with `launchpad`. A corresponding fix PR ([#3179](https://github.com/sipeed/picoclaw/pull/3179)) is already open and adds reconnection logic.
- **"Memory loss" / context forgetting** ([Issue #3150](https://github.com/sipeed/picoclaw/issues/3150)) — Chinese-language report of the agent forgetting context mid-conversation. Marked `[stale]` after 7 days of inactivity. Potentially a serious UX issue, but unconfirmed.

**Low Severity / Fixed Today:**
- Several error-handling gaps (missing `Close()`, unhandled `Encode()` errors) were patched across the codebase by PRs #3170, #3172, #3183–#3188.

## Feature Requests & Roadmap Signals
- **vodozemac migration** ([Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)) — The most popular feature request currently. Given its `priority: high` label and 2 weeks of open status, it is a strong candidate for the next release.
- **DeltaChat gateway** ([PR #3063](https://github.com/sipeed/picoclaw/pull/3063)) — An open, unmerged feature PR adding a new channel. Stalled for 19 days with no recent commits. This could land in the next minor version if maintainers review it.
- **GitHub Copilot SDK major bump** ([PR #3177](https://github.com/sipeed/picoclaw/pull/3177)) — Still open; the bump from v0.2.0 to v1.0.4 likely contains breaking changes that require careful migration work.

## User Feedback Summary
- **Pain Points:** Android release quality is a recurring theme—Issue #3182 suggests the Android build may have a critical path-setting bug. WhatsApp reliability (Issue #3178) also frustrates Docker users. The stale "memory loss" issue (#3150) hints at possible context window management problems for non-English users.
- **Satisfaction:** The quick closure of the duplicate message bug (Issue #3094) and the volume of clean-up PRs suggest a responsive maintainership. Users appreciate the systematic improvements to error handling and SSRF security.
- **Use Cases:** Deployment via Docker with `launchpad` and Android mobile use are clearly important to the community, as both have dedicated bug reports today.

## Backlog Watch
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#3088 — Use vodozemac instead of libolm](https://github.com/sipeed/picoclaw/issues/3088) | 18 days | Open, `priority: high`, 2 👍 | Security-critical dependency replacement; no assignee |
| [#3150 — "Memory loss" bug](https://github.com/sipeed/picoclaw/issues/3150) | 7 days | Stale, open | Potentially serious context loss issue; no maintainer response yet |
| [#3063 — DeltaChat gateway PR](https://github.com/sipeed/picoclaw/pull/3063) | 19 days | Open, no recent activity | Large feature addition stalled with no review feedback |
| [#3177 — Copilot SDK v1.0.4 bump](https://github.com/sipeed/picoclaw/pull/3177) | 2 days | Open, Dependabot | Major version bump may introduce breaking changes needing manual check |

**Top concern:** Issue #3088 (vodozemac migration) has been a high-priority feature request for 18 days without visible progress. Given that libolm is explicitly unmaintained and insecure, this should be escalated for maintainer action in the near term.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-27

## Today's Overview

NanoClaw saw elevated activity with 11 pull requests updated in the last 24 hours, heavily clustered around bug fixes and skill development. Nine of those PRs remain open, indicating active work-in-progress across multiple focus areas. The project's issue tracker was quieter, with 3 issues updated (1 open, 2 closed), including one mistakenly filed against the wrong repository. No new releases were cut today, but the volume and consistency of PRs suggest a major maintenance and feature push is underway, particularly around channel adapter fixes, session management, and new operational skills.

## Releases

No new releases were published today. The repository shows no version tags or artifacts matching the current date.

## Project Progress

Two PRs were merged or closed today:

- **[#2859](https://github.com/nanocoai/nanoclaw/pull/2859) [merged]** — `fix(migrate-v2): don't SELECT is_main from v1 registered_groups` — This is a critical migration fix for v2 upgrades. The v2 seed query incorrectly referenced a `is_main` column that only exists in later v1 versions, causing the entire `1b-db` step to crash with `no such column: is_main`. Older v1 installs (e.g., 1.1.0) would fail to create `v2.db`, cascading into session and task setup failures. This fix restores forward migration compatibility.
- **[#2867](https://github.com/nanocoai/nanoclaw/pull/2867) [closed]** — `test. finding` — A test issue, likely a trial or placeholder submission that was closed without merge.

The remaining 9 open PRs are in active development, with several clusters of related work (see Community Hot Topics and Bugs & Stability).

## Community Hot Topics

- **[#2868](https://github.com/nanocoai/nanoclaw/issues/2868) [OPEN]** — `/update-skills is a silent no-op for already-installed channels` — This is the only open issue updated today. User `glifocat` reports that running `/update-skills` on an already-installed channel does nothing—the adapter code and pinned dependencies are not refreshed. This directly undermines the `[Unreleased]` CHANGELOG migration that asks users to "re-run `/add-<channel>`" to pick up 4.29+ changes. Zero comments yet, but this is a high-impact user-facing bug that likely blocks skill upgrades for existing installations.

- **[#2870](https://github.com/nanocoai/nanoclaw/pull/2870) [OPEN]** — `fix(whatsapp): keep native participant addressing for group encryption` — Author `elancode` reports a WhatsApp group delivery failure: replies log as delivered but never appear in the group (DMs work fine). Root cause is that `getNormalizedGroupMetadata()` is the sole provider for Baileys' `cachedGroupMetadata` socket hook, but Baileys needs native participant addressing to encrypt group messages correctly. This PR is the most technically involved fix in today's batch.

- **[#2861](https://github.com/nanocoai/nanoclaw/pull/2861) [OPEN]** — `feat(host): expand ${VAR_NAME} refs in MCP server env at spawn time` — A feature PR from `grantland` that enables environment variable expansion at MCP server spawn time. This addresses a common pain point for users who need dynamic configuration in MCP environments without hardcoding secrets or paths.

## Bugs & Stability

**Critical severity:**

1. **WhatsApp group reply delivery failure** — [PR #2870](https://github.com/nanocoai/nanoclaw/pull/2870) — WhatsApp group messages log as delivered but never appear. Affects all group encryption scenarios. A fix PR exists and is under review. **Severity: High**

2. **`/update-skills` silent no-op on installed channels** — [Issue #2868](https://github.com/nanocoai/nanoclaw/issues/2868) — Running `/update-skills` on an already-installed channel silently skips refreshing adapter code or pinned dependencies. This makes the `[Unreleased]` CHANGELOG migration step ("re-run `/add-<channel>`") impossible to execute correctly via the update channel. No fix PR yet. **Severity: High**

3. **Discord inbound attachments unreachable by agent** — [PR #2752](https://github.com/nanocoai/nanoclaw/pull/2752) — Pasted text (converted to `message.txt`) and images are downloaded by the chat-sdk bridge but never exposed to the agent in a readable form (no bytes, no path). Fix PR has been open since June 12 but remains unmerged. **Severity: Medium**

**Medium severity:**

4. **libsignal session debug log spam** — [PR #2860](https://github.com/nanocoai/nanoclaw/pull/2860) — The bundled `libsignal` dependency prints `console.info()` logs with session key material on every open/close. This is a privacy concern and log bloat. Fix PR exists and silences upstream debug output.

5. **Telegram legacy markdown sanitizer** — [PR #2866](https://github.com/nanocoai/nanoclaw/pull/2866) — The Telegram adapter still uses a legacy markdown sanitizer despite having moved to MarkdownV2 formatting. This likely causes rendering inconsistencies. Fix PR is open.

6. **Stale session rotation for OpenCode and provider** — [PRs #2865](https://github.com/nanocoai/nanoclaw/pull/2865) and [#2864](https://github.com/nanocoai/nanoclaw/pull/2864) — Both fix issues where stale sessions are not rotated on ceiling-kill signals or when results are empty. These are reliability improvements for session lifecycle management.

**Fixed today:** The v2 migration crash ([PR #2859](https://github.com/nanocoai/nanoclaw/pull/2859)) was merged, fixing a blocker for older v1 users upgrading to v2.

## Feature Requests & Roadmap Signals

Today's activity shows three clear feature themes likely to land in the next release:

1. **Operational skill suite** — [PR #2863](https://github.com/nanocoai/nanoclaw/pull/2863) adds `/setup-system-digest` and `/system-digest` skills (utility skills). [PR #2862](https://github.com/nanocoai/nanoclaw/pull/2862) adds `/manage-agents` and `/manage-schedules` operational skills. These are standalone tools that give users system observability and agent lifecycle management directly from chat. This suggests a push toward production-grade operational tooling within NanoClaw.

2. **MCP environment variable expansion** — [PR #2861](https://github.com/nanocoai/nanoclaw/pull/2861) enables `${VAR_NAME}` expansion in MCP server environment configs at spawn time. This is a pragmatic feature that reduces friction for users deploying MCP servers with dynamic secrets or per-deployment configuration.

3. **Auto-registration on group add** — [Issue #1275](https://github.com/nanocoai/nanoclaw/issues/1275) (closed, but still relevant) — When the bot is added to a new Telegram group, it should auto-detect and prompt for registration. While today's data shows no new activity on this, the community signal remains strong. It is a candidate for a future utility skill or channel enhancement.

## User Feedback Summary

- **Skill update friction**: The `/update-skills` no-op bug ([#2868](https://github.com/nanocoai/nanoclaw/issues/2868)) is a real pain point—users who follow the CHANGELOG migration instructions find themselves stuck because the recommended command does nothing for already-installed channels. This erodes trust in the update workflow.

- **WhatsApp group reliability**: The WhatsApp group delivery failure ([PR #2870](https://github.com/nanocoai/nanoclaw/pull/2870)) is a hard blocker for any user relying on group chat for multi-party agent interactions. That DMs work but groups don't is especially frustrating.

- **Migration pain for old v1 users**: The fixed v2 migration crash ([PR #2859](https://github.com/nanocoai/nanoclaw/pull/2859)) shows that users on older v1 versions (1.1.0) are hitting blocking errors during upgrade. The fix is merged, so this should be resolved in the next release cycle.

- **Log hygiene concern**: The libsignal debug spam ([PR #2860](https://github.com/nanocoai/nanoclaw/pull/2860)) exposing session key material in logs is both a privacy concern and operational noise. Users running in production environments will appreciate this fix.

## Backlog Watch

- **[PR #2752](https://github.com/nanocoai/nanoclaw/pull/2752)** — Discord inbound attachments fix — Open since June 12 with no merge and no maintainer comments. This is the longest-standing open fix PR today. It blocks the agent from seeing any Discord attachments (text or images), which is a significant feature gap for Discord integrations. **Needs maintainer review.**

- **[Issue #1275](https://github.com/nanocoai/nanoclaw/issues/1275)** — Auto-prompt registration when added to new group — Closed since June 26, but the underlying user experience gap remains: new Telegram users who add the bot to a group get zero feedback. The issue was closed without a resolution noted. This may have been triaged as out of scope or deferred, but the usability gap persists.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the NullClaw project digest for June 27, 2026.

---

## NullClaw Project Digest – 2026-06-27

### 1. Today's Overview
NullClaw is in a **low-activity period** today, with no new releases, no pull request activity, and only a single open issue updated in the last 24 hours. The project appears to be in a stable plateau, with maintainers focusing on long-standing bugs rather than shipping new features. The sole active discussion concerns a critical platform build failure on Android/Termux, which remains unresolved since its filing in April. While no recent merges or commits are visible, the sustained attention on Issue #868 suggests that cross-platform compatibility, specifically for mobile Linux environments, is a key friction point for the community.

### 2. Releases
**None.** No new releases were published in the last 24 hours. The last known release is **v2026.4.17**, as referenced in the open bug report.

### 3. Project Progress
**No pull requests were merged or closed today.** There are zero open PRs, indicating that no feature branches or bug fixes are currently being actively integrated.

### 4. Community Hot Topics
The only active discussion is:
- **[#868 [OPEN] [bug] zig build fails on Android/Termux (aarch64) with AccessDenied on options.zig linkat](https://github.com/nullclaw/nullclaw/issues/868)**
  - *Author:* NOTJuangamer10
  - *Comments:* 3
  - *Context:* A user building NullClaw on an Android device (LineageOS, Termux) using Zig 0.16.0 encounters a filesystem permission error during the link step (`AccessDenied` on `options.zig`). The error prevents a release build.

**Analysis:** The underlying need here is **reliable support for building on mobile/constrained environments**. The user is attempting to produce a size-optimized binary (`-Doptimize=ReleaseSmall`), a use case typical for low-resource devices. The fact that this issue has been open for over two months (since April 23) with only three comments suggests either a low maintainer priority for this platform or a hard-to-replicate environment dependency.

### 5. Bugs & Stability
- **High Severity:** **Issue #868** – Build failure on Android/Termux (aarch64). This is a **blocker** for any user wanting to run NullClaw on modern Android devices via Termux. The specific error (`AccessDenied` on `linkat`) points to a potential permissions model mismatch between Zig's linker and Termux's file system sandbox. **No fix PR exists** as of today.

### 6. Feature Requests & Roadmap Signals
**No explicit feature requests were filed today.** However, the existence of Issue #868 implies a latent demand for:
- **Official Android/Termux build support** or documentation workarounds.
- **Build system hardening** against filesystem permission errors in non-standard environments.

Given the lack of recent releases, the next version may prioritize platform compatibility fixes over new features.

### 7. User Feedback Summary
The single data point is **negative user experience** from a technical user:
- **Pain Point:** Inability to compile the project for an aarch64 Android environment.
- **Use Case:** Running an optimized (ReleaseSmall) binary on a Redmi Note 9, likely for resource-constrained or offline AI agent deployment.
- **Satisfaction:** Low. The issue has been open for 65 days with no resolution or comment by maintainers.

### 8. Backlog Watch
The following item deserves immediate maintainer attention:

- **[Issue #868 (linkat AccessDenied)](https://github.com/nullclaw/nullclaw/issues/868)** – Two-month-old critical build failure with zero maintainer response. If the project aims to support mobile or non-traditional Linux environments, this issue is a growing risk to adoption. It may be a simple configuration fix (e.g., adding a Termux-specific build flag or fallback linker logic) or a deeper filesystem abstraction issue. **This should be triaged for the next patch release.**

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-27

## 1. Today's Overview

IronClaw is experiencing a period of high activity, with **50 PRs** and **29 issues** updated in the last 24 hours. The project shows strong forward momentum in its **Reborn** architecture migration, particularly around capability policy and tool approval workflows, which dominate the issue tracker. A significant **CI/code coverage** bug affecting feature-gate semantics was identified (Issue #5332), representing a structural risk. While no new releases were published today, 15 PRs were closed/merged, indicating steady progress. The overall project health is **stable but strained** — engineering velocity is high, but user-facing regressions in the Reborn WebUI and tool approval system suggest the migration is still maturing.

## 2. Releases

**No new releases today.** The most recent tagged release remains ironclaw 0.29.1 (PR #5311 from yesterday). A release attempt (#5311) is visible in the PR list but appears to still be in review/merge process.

## 3. Project Progress

**15 PRs were closed or merged today**, advancing several major areas:

**Security & Authentication:**
- **#5009 (CLOSED)** — Security fix bringing live Slack OAuth to structural DM-parity, closing a p3 security gap where non-triggered Slack OAuth lacked proper DM enforcement
- **#3766 (CLOSED)** — Introduced `AuthorizedDispatchRequest` + `DispatchAuthorityProof`, sealing dispatch authority so raw capability payloads are no longer accepted
- **#3767 (CLOSED)** — Added lean NoExposureGuard host service wrapping `ironclaw_safety::LeakDetector` for text, JSON, and HTTP request sanitization

**Reborn Architecture:**
- **#3890 (CLOSED)** — Added multi-tenant isolation contract tests covering filesystem workspace/project isolation, attachment paths, and event cursor isolation
- **#3703 (CLOSED)** — Futureproofed `RebornRuntime` surface for Configuration-as-Code epic (#3036)
- **#2854 (CLOSED)** — Added CodeAct host shims with gated rich result objects for engine-v2

**Core Infrastructure:**
- **#5265 (CLOSED)** — Environment-configurable turn-runner concurrency (0 = unlimited) for stress-testing libSQL backend
- **#3277 (CLOSED)** — Telegram `allowed_chat_ids` group filter salvaged from earlier PR
- **#4934 (CLOSED)** — `js-yaml` dependency bump (4.1.1→4.2.0) for docs video tooling

**Bug Fixes:**
- **#5283 (CLOSED)** — "Approve & always allow" persistence fix for `nearai.web_search`
- **#5197 (CLOSED)** — Disabled tools no longer trigger unrelated tool invocations
- **#5227 (CLOSED)** — Run failure messages now attach to correct conversation turn
- **#5282 (CLOSED)** — "Logs" entry no longer appears inside the composer during agent runs

## 4. Community Hot Topics

The most active discussions center on **tool approval UX friction** and **automation reliability**.

**🔴 Issue #5331 — Tool-approval 'always' may not auto-approve next same-tool call (engine v2)**
- Comments: 1 | [Link](https://github.com/nearai/ironclaw/issues/5331)
- A suspected product bug where the first "always allow" auto-approves correctly, but the *second* same-tool call in the same conversation re-prompts for approval. This undermines the core approval persistence UX. An engine/approval owner confirmation is pending.

**🔴 Issue #5319 — Automation created with UTC schedule without timezone confirmation**
- Comments: 0 | [Link](https://github.com/nearai/ironclaw/issues/5319)
- Automations default to UTC without asking users for timezone, leading to confusing "Next Run" displays. User reports this makes the Automations page "confusing" — schedule shows `Weekdays at 6:00 PM (UTC)` but Next Run shows `Jun 27, 02:00 AM`.

**🔴 Issue #5196 — "Ask each time" tool permission may fail with authorization error + duplicate approval flow**
- Comments: 1 | [Link](https://github.com/nearai/ironclaw/issues/5196)
- A double-failure pattern: "Ask each time" tools trigger approval, but after approval the tool fails with an `authorization` error, then the assistant asks for authorization *again* in chat instead of executing. This creates a confusing loop for users.

**🔴 Issue #5302 — Pending approval in one conversation blocks sending messages in other conversations**
- Comments: 0 | [Link](https://github.com/nearai/ironclaw/issues/5302)
- A cross-conversation blocking bug where leaving a tool approval dialog unresolved in Conversation A prevents the user from sending any messages in Conversation B or C until a page refresh. This is a significant UX regression for multi-tasking users.

**🟡 Issue #5364 — Make "Always allow eligible tools" the default** (with matching PR #5366)
- [Issue](https://github.com/nearai/ironclaw/issues/5364) | [PR](https://github.com/nearai/ironclaw/pull/5366)
- Simple, high-impact request: flip the `AUTO_APPROVE_ELIGIBLE` default from off to on. Current behavior forces new users through 5+ approval prompts for a single "connect to gmail" workflow. PR #5366 already implements the fix.

## 5. Bugs & Stability

**Severity: Critical**

| Issue | Description | Fix Status |
|-------|-------------|------------|
| [#5332](https://github.com/nearai/ironclaw/issues/5332) | `--all-features` coverage auto-enables forward-feature gates, causing memory isolation tests to fail because `pr7-ready`/`pr3180-ready` flags activate deferred-work security invariants before they're ready | No fix PR yet; structural gating bug |
| [#5330](https://github.com/nearai/ironclaw/issues/5330) | E2E skills-tab tests assert v2 SPA but harness serves legacy gateway — 5 tests completely broken by environment mismatch | No fix PR yet |

**Severity: High**

| Issue | Description | Fix Status |
|-------|-------------|------------|
| [#5331](https://github.com/nearai/ironclaw/issues/5331) | Tool "always allow" doesn't persist beyond first use (engine v2) | Under investigation |
| [#5322](https://github.com/nearai/ironclaw/issues/5322) | Automation creation times out before completion | No fix PR yet |
| [#5323](https://github.com/nearai/ironclaw/issues/5323) | Automation creation fails because runner lease expires | No fix PR yet |
| [#5289](https://github.com/nearai/ironclaw/issues/5289) | Generic "driver protocol error" hides actual `invalid_input` failures from users | No fix PR yet |

**Severity: Medium**

| Issue | Description | Fix Status |
|-------|-------------|------------|
| [#5302](https://github.com/nearai/ironclaw/issues/5302) | Pending approval blocks all other conversations | No fix PR yet |
| [#5196](https://github.com/nearai/ironclaw/issues/5196) | "Ask each time" approval → authorization error → duplicate flow | No fix PR yet |
| [#5337](https://github.com/nearai/ironclaw/issues/5337) | Wasm-channel OAuth can't reach auth_url on first-time configure (channel auth descriptor never seeded) | No fix PR yet |
| [#5329](https://github.com/nearai/ironclaw/issues/5329) | 10+ E2E tests fail due to mock-LLM matcher too broad / stale test assertions | No fix PR yet — test-side, not product |
| [#5333](https://github.com/nearai/ironclaw/issues/5333) | Composer keeps submitted message visible briefly after sending | No fix PR yet |

**Resolved Today:**
- [#5283](https://github.com/nearai/ironclaw/issues/5283) — "Approve & always allow" persistence for `nearai.web_search` (CLOSED)
- [#5197](https://github.com/nearai/ironclaw/issues/5197) — Disabled tools triggering unrelated tools (CLOSED)
- [#5227](https://github.com/nearai/ironclaw/issues/5227) — Run failure messages on wrong turn (CLOSED)
- [#5282](https://github.com/nearai/ironclaw/issues/5282) — "Logs" entry in composer (CLOSED)

## 6. Feature Requests & Roadmap Signals

**Likely to land in next release:**

1. **🔵 #5364 / PR #5366 — "Always allow eligible tools" default ON** — Simple toggle flip, already PR'd. High user-impact. Expected in next patch.

2. **🔵 #5261 / PR #5349 / PR #5355 — Capability policy availability + control plane** — Large architectural feature (epic #5261) spanning REST user management, admin grants, and four-dimension capability model. Multiple XL PRs queued for review. This is the dominant roadmap item.

3. **🔵 #5280 — Trace Commons: instance-wide enrollment and per-user profiles** — XL PR adding client-side trace submission infrastructure alongside existing personal-invite flow. Indicates ongoing investment in observability/telemetry.

4. **🔵 #5365 — WebUI v2 Retry button dead fix** — Small but visible UX fix (Retry button rendered but did nothing). Likely hotfix candidate.

**Predictions:**
- The **capability policy epic** (#5261) is the most significant architectural change in flight — expect it to roll out over 2-3 releases
- **Tool approval UX** is getting intense scrutiny — PR #5366 (default "always allow") is a direct response to user friction
- **Automation reliability** (timeouts, lease expiration, UTC timezone) is emerging as a cluster of issues that may need an epic-level fix

## 7. User Feedback Summary

Based on issues from the **Reborn Web UI v2** dogfooding campaign (#5119), user pain points cluster around:

**Dissatisfaction Areas:**
- **Tool approval friction is the #1 pain point.** 4 of the top issues (5331, 5196, 5302, 5364) involve tool approval UX — including non-persistence of preferences, authorization errors after approval, cross-conversation blocking, and excessive prompts for new users.
- **Automation creation is unreliable.** Users report timeouts (#5322), runner lease expiration (#5323), and confusing UTC-only schedules (#5319) when trying to create automated workflows.
- **Error messages are opaque.** Generic "driver protocol error" (#5289) hides actionable failure details, making debugging impossible without server-side logs.
- **Gmail/OAuth setup is inconsistent.** Issue #5316: same prompt sometimes reports "no email extension available" and sometimes succeeds, with no environment changes.

**Satisfaction Areas:**
- The **"Approve & always allow" fix** (#5283, CLOSED) addresses a specific user-reported persistence bug
- **Disabled tools no longer triggering unrelated tools** (#5197, CLOSED) resolves a significant UX violation
- **Conversation timeline accuracy** improved (#5227, CLOSED) — run failures now attach to correct turns

**Notable user voices:**
- *sunglow666* — Filed 9 issues today alone, primarily in Reborn WebUI v2. Appears to be a dedicated dogfooder. Issues are well-structured with clear reproduction steps.
- *loopstring* — Filed #5364 with a blunt, one-line request ("That's it — flip the default"), indicating frustration with current defaults.

## 8. Backlog Watch

**Critical backlog items needing maintainer attention:**

| Issue | Age | Last Updated | Description |
|-------|-----|-------------|-------------|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | 31 days | 2026-06-26 | Nightly E2E failing — automated report, no human response in 31 days. Indicates possible alert fatigue. |
| [#2355](https://github.com/nearai/ironclaw/issues/2355) | 76 days | 2026-06-26 | Epic: persistent multi-identity Chrome/CDP browsing. No activity from maintainers despite being a major feature. |
| [#5221](https://github.com/nearai/ironclaw/issues/5221) | 2 days | 2026-06-26 | Harness backlog for deepseek-v4-flash — 8 hillclimb steps spent, 9 candidates. Active but needs owner. |

**PRs needing attention:**
- **#5271** (dependabot, XL, 47 updates) — Bumping `refinery` 0.8.16→0.9.2 and `rustls` 0.23.40→0.23.41. Risk: high (DB migration tool + TLS stack). Should be reviewed promptly but carefully.
- **#5361** (XL, ratatui 0.29→0.30, drops lru 0.12 with UB bug) — Fixes a CVE-level Stacked Borrows UB. Priority review needed.

**Pattern note:** The nightly E2E failure (#4108) has received no human follow-up in a month. Combined with the `--all-features` coverage bug (#5332) and the leaky feature-gate test (#5332), the CI stability signal is concerning — automated failures may be getting tuned out.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-27

## Today's Overview
Project activity is **very high** today, driven by a coordinated batch of 8 PRs — all merged/closed — and a new release. The team appears to have consolidated several weeks of work into a single deploy window, with a strong focus on **OpenClaw runtime upgrades**, **Cowork (multi-agent) stability**, and **Mermaid artifact rendering fixes**. One critical bug (desktop backup freeze) was opened and remains unaddressed. Overall project health is good, with rapid PR throughput and a clear release cadence, though the severity of the new bug warrants immediate attention.

## Releases
### LobsterAI 2026.6.26
- **Changelog Highlights:**
  - **OpenClaw runtime upgrade** from v2026.4.14 to v2026.6.1 — includes required runtime patches, plugin upgrades, and build script updates.
  - **Cowork: plan mode workflow** — adds a new workflow for coordinating multiple agents in planning/task decomposition mode.
  - **OpenClaw IM plugin support** — fixes compatibility with upgraded instant messaging plugin interface.
- **Breaking Changes:** None documented.
- **Migration Notes:** Users on OpenClaw-based features should update to this release to maintain plugin compatibility. No database migration steps mentioned.

## Project Progress
All 8 PRs from today were merged or closed:

| Area | PR | Summary |
|------|----|---------|
| **Cowork (multi-agent)** | [#2207](https://github.com/netease-youdao/LobsterAI/pull/2207) | Stable subagent progress tracking — derives progress from local `subagent_runs` instead of model-authored text; fixes stale `5/5` showing as `3/5`. |
| **Cowork (multi-agent)** | [#2208](https://github.com/netease-youdao/LobsterAI/pull/2208) | Freezes duration display for terminal subagents — uses `endedAt - createdAt` for completed runs, stops live updating. |
| **Cowork (multi-agent)** | [#2211](https://github.com/netease-youdao/LobsterAI/pull/2211) | Cleanup: sorts imports in OpenClaw patch test file. |
| **Mermaid/Artifacts** | [#2210](https://github.com/netease-youdao/LobsterAI/pull/2210) | Prevents Mermaid error SVG leaking — validates syntax with `mermaid.parse()` before rendering. |
| **Mermaid/Artifacts** | [#2213](https://github.com/netease-youdao/LobsterAI/pull/2213) | Broader fix: prevents hidden/error SVG artifacts from leaking; cleans up render containers on unmount; stabilizes skill search popover. |
| **Skill UI** | [#2212](https://github.com/netease-youdao/LobsterAI/pull/2212) | Keeps skill submenu open while focus is inside; stabilizes list height on search results change. |
| **Skill UI** | [#1459](https://github.com/netease-youdao/LobsterAI/pull/1459) | Rich tooltip on skill hover — shows full name, official ID, and complete description; smart directional positioning. |
| **Infrastructure** | [#2209](https://github.com/netease-youdao/LobsterAI/pull/2209) | Core release PR: OpenClaw runtime upgrade + app version bump to 2026.6.26. |

**Key takeaway:** The Cowork (multi-agent) subsystem received two significant stability fixes today — subagent progress tracking and duration display. These address user-visible inconsistencies in multi-agent workflows.

## Community Hot Topics
1. **Issue #1462 (CLOSED)** — ["Feature request: each agent should have its own model binding; multi-agent collaboration"](https://github.com/netease-youdao/LobsterAI/issues/1462)
   - *Comments: 3 | 👎: 0 | Status: Closed as stale*
   - **Analysis:** User wants per-agent model assignment and a manager/room concept for orchestrating subagents. The closure as stale is notable — the user specifically praised LobsterAI over a competitor. This is now partially addressed by today's Cowork plan mode PR (#2183), though per-agent model binding remains unaddressed.

2. **PR #2207** — [Subagent progress tracking fix](https://github.com/netease-youdao/LobsterAI/pull/2207)
   - *Comments: 0 (technical PR, likely reviewed internally)*
   - **Underlying need:** Users seeing "5/5" local state but "3/5" rendered display was a real usability bug in multi-agent workflows. This fix directly addresses trust in agent progress reporting.

## Bugs & Stability
| Severity | Issue | Summary | Fix Status |
|----------|-------|---------|------------|
| **Critical** | [#2214 (OPEN)](https://github.com/netease-youdao/LobsterAI/issues/2214) | "Desktop backup" feature causes main process to freeze (100% reproducible on large DB). User must force-kill. Affects Windows 11, 71.6MB SQLite WAL database. | No fix PR yet. Reported today. |
| **Medium** | #2213 (merged) | Mermaid error SVGs leaking into document — UI pollution. | Fixed in today's release. |
| **Low** | #2210 (merged) | Mermaid parse errors showing raw error SVG instead of controlled error UI. | Fixed in today's release. |
| **Low** | #2207 (merged) | Subagent progress inconsistency (5/5 → 3/5 display). | Fixed in today's release. |

**Critical bug warning:** Issue #2214 is the most serious — it's a hard freeze with no recovery outside force-kill. The user reports "hundreds of messages daily" with a rapidly growing WAL database, suggesting this will affect heavy users. No workaround provided.

## Feature Requests & Roadmap Signals
1. **Per-agent model binding** (from #1462) — Strong community demand. Not yet implemented. This would be a significant architectural change (each agent instance gets its own model config). **Prediction:** Could arrive in 2-3 releases if prioritised; likely requires model config refactoring.

2. **Multi-agent room/manager pattern** (from #1462) — Partially addressed by today's "plan mode workflow" (#2183). The user wants a dedicated room with a manager agent coordinating others. Today's PR adds a `plan` workflow type — this is likely step one toward that vision.

3. **Skill tooltip enhancement** (PR #1459 merged today) — User-facing feature: rich tooltips on skill hover. This indicates the team is investing in UX polish alongside core stability.

## User Feedback Summary
- **Positive signals:** Users actively comparing LobsterAI to competitors (directly name-checking "阿里云的 hiclaw") and preferring LobsterAI's interaction model. The stale/closed issue #1462 contains genuine praise.
- **Pain points:**
  - Desktop backup freeze (#2214) is a critical operational risk for heavy users.
  - Multi-agent progress display was confusing (now fixed in #2207).
  - Mermaid chart rendering could produce broken visual artifacts (now fixed in #2210/#2213).
- **Missing feature gap:** Users want per-agent model assignment — a common request in multi-agent systems where different agents handle different domains/tasks.

## Backlog Watch
| Issue | Age | Last Update | Priority Signal |
|-------|------|-------------|-----------------|
| [#1462 (CLOSED as stale)](https://github.com/netease-youdao/LobsterAI/issues/1462) | Created 2026-04-04, closed 2026-06-26 | 2 months in backlog before closing | **High:** User-requested multi-agent features are now being built (plan mode today). Consider reopening tracking this as a feature epic. |

**Observation:** The `stale` label appears twice (Issues #1462 and PR #1459). The team appears to be actively closing old stale items. No other long-unanswered issues were found in today's data — this suggests maintainers are keeping up with the queue.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-27

## Today's Overview
The Moltis project had a low-activity day, with no new issues and no releases. One pull request remains open, reflecting steady but quiet development. The single open PR (#1135) introduces a notable browser automation enhancement, suggesting focused work on the agent's observability layer. Overall project health appears stable, though the absence of closed issues or merged PRs indicates a potential slowdown in throughput.

## Releases
No new releases were published today. The most recent release remains unchanged.

## Project Progress
No pull requests were merged or closed today. The only activity is the ongoing review of a single open PR (see below). No features or fixes landed in the codebase.

## Community Hot Topics
The sole active discussion is around **PR #1135: "browser: optional auto-screenshot after each action"** ([link](https://github.com/moltis-org/moltis/pull/1135)). This PR proposes automatic screenshot capture after each state-changing browser action, attaching the screenshot to the action's tool result for per-step timeline rendering. The PR was authored by resumeparseeval and has no comments or reactions yet. Underlying needs appear to be improving agent observability and debugging — users want to visually trace browser agent decisions step-by-step, which is critical for trust and auditing in production deployments.

## Bugs & Stability
No bugs, crashes, or regressions were reported today. The repository shows zero open issues, indicating no outstanding stability concerns at this time.

## Feature Requests & Roadmap Signals
The only signal is the auto-screenshot feature in PR #1135. This is a medium-complexity enhancement that adds optional observability without breaking existing behavior. Given its uncontroversial nature and clear utility, it is likely to be merged into the next minor release. No other feature requests surfaced today.

## User Feedback Summary
No user feedback was recorded today via issues or PR comments. The project's low engagement suggests either a satisfied user base or low active usage. The one PR from a new contributor (resumeparseeval) may indicate growing community interest in improving browser agent transparency.

## Backlog Watch
No issues or PRs are currently backlogged. The single open PR (#1135) is fresh (updated 24 hours ago) and does not yet require maintainer attention beyond standard review. The backlog is effectively empty, which may indicate either efficient triage or low community engagement.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the CoPaw project digest for June 27, 2026, generated from the provided GitHub data.

---

## CoPaw Project Digest
**Date:** 2026-06-27

### 1. Today's Overview
The project is currently in a highly active development phase, marked by the tagging of the **v2.0.0-beta.1** pre-release. Activity surged significantly today with 30 issues and **50 pull requests** updated in the last 24 hours, indicating a sprint-like push towards stability. While many PRs are being merged, a high volume of open bugs (21 open issues) suggests that the beta stability is still a major area of focus. The community is very engaged, reporting a wide range of bugs and proposing substantial feature enhancements.

### 2. Releases
- **[v2.0.0-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0-beta.1):** This is an early beta release for the upcoming QwenPaw 2.0.0.
    - **Changes:** Includes a major refactor to migrate the agent subsystem.
    - **⚠️ Breaking Changes & Instability:** This release is explicitly marked as unstable and is intended for developers and early adopters only. It is **not recommended for production use**.
    - **Migration Notes:** Due to the "migrate agent" refactor, configurations or custom agents developed for v1.x may require manual adjustments.

### 3. Project Progress
The project closed/merged 24 pull requests today. Key advancements include:
- **User Experience & Frontend:** A major improvement to chat input was merged, enabling **drag-and-drop file upload** ([PR #5436](https://github.com/agentscope-ai/QwenPaw/pull/5436)). The desktop client also received a fix for graceful shutdown, improving the Tauri lifecycle ([PR #5265](https://github.com/agentscope-ai/QwenPaw/pull/5265)).
- **Backend & Models:** A significant feature for **batch testing and batch deleting models** was merged ([PR #5297](https://github.com/agentscope-ai/QwenPaw/pull/5297)), enhancing model management in the provider dialog.
- **Stability Fixes:** A critical cleanup PR ([PR #5440](https://github.com/agentscope-ai/QwenPaw/pull/5440)) targeted "post-merge bugs" related to the AgentScope 2.0 migration, removing over 1,400 lines of obsolete code and fixing `CancelledError` handling. The pywebview client also received instant-window startup optimization, replicating the Tauri experience ([PR #5153](https://github.com/agentscope-ai/QwenPaw/pull/5153)).

### 4. Community Hot Topics
- **[Issue #5563](https://github.com/agentscope-ai/QwenPaw/issues/5563) (Open, 5 comments):** **Aggregate Multi-Step Agent Responses.** Users are strongly requesting an option to aggregate fragmented agent responses to avoid "message spam" in the chat UI during multi-step tasks. A fix is already in progress via [PR #5577](https://github.com/agentscope-ai/QwenPaw/pull/5577).
- **[Issue #5379](https://github.com/agentscope-ai/QwenPaw/issues/5379) (Open, 7 comments):** **Python Install - Internal Server Error.** A user reports a fresh installation fails with an `Internal Server Error` linked to a `get_remote_addr` call. This is a high-impact onboarding bug.
- **[Issue #5262](https://github.com/agentscope-ai/QwenPaw/issues/5262) (Closed, 12 comments):** **Built-in Skills Re-enabling After Update.** This recurring bug has been a major pain point, where users must manually disable skills like `docx` and `xlsx` after each upgrade.
- **[Issue #5550](https://github.com/agentscope-ai/QwenPaw/issues/5550) (Open, 4 comments):** **Remote SSH Plugin Loop & Orphan Backends.** A complex bug involving a "fork-bomb" of `pip install` processes and leftover backend processes that can exhaust memory on macOS. A fix is in progress ([PR #5570](https://github.com/agentscope-ai/QwenPaw/pull/5570)).

### 5. Bugs & Stability
- **Critical:**
    - **Remote SSH Plugin Crash Loop** ([Issue #5550](https://github.com/agentscope-ai/QwenPaw/issues/5550)): Can cause a "fork-bomb"-like system resource exhaustion. (Fix: [PR #5570](https://github.com/agentscope-ai/QwenPaw/pull/5570))
    - **Chrome Memory Leak** ([Issue #5520](https://github.com/agentscope-ai/QwenPaw/issues/5520)): `browser_use stop()` fails to kill Chrome renderer processes, leading to memory accumulation. (Fix: [PR #5536](https://github.com/agentscope-ai/QwenPaw/pull/5536))
    - **Console Crash from Large Tool-Use History** ([Issue #5401](https://github.com/agentscope-ai/QwenPaw/issues/5401), Closed): Frontend crashed on sessions containing `type: "data"` content blocks, rendering the app useless for complex sessions.
- **High:**
    - **Python Install Failure** ([Issue #5379](https://github.com/agentscope-ai/QwenPaw/issues/5379)): Blocks new users from starting.
    - **DeepSeek Thinking Mode Hang** ([Issue #5328](https://github.com/agentscope-ai/QwenPaw/issues/5328)): Agents get stuck in a "thinking" state, requiring manual intervention.
    - **Heartbeat Timeout** ([Issue #5539](https://github.com/agentscope-ai/QwenPaw/issues/5539)): Hard-coded 120-second timeout causes background tasks to fail. (Fix: [PR #5557](https://github.com/agentscope-ai/QwenPaw/pull/5557))
    - **WeChat Work (Enterprise) File Handling** ([Issue #5554](https://github.com/agentscope-ai/QwenPaw/issues/5554)): Bot does not respond to sent files, breaking a core channel feature.
- **Medium/Low:**
    - **Console Formatting Recalc** ([Issue #5480](https://github.com/agentscope-ai/QwenPaw/issues/5480), Closed): Markdown rendering breaks on long messages.
    - **GLM Model Errors** ([Issue #5472](https://github.com/agentscope-ai/QwenPaw/issues/5472), Closed): Incompatible schema with `opencode go` GLM models.

### 6. Feature Requests & Roadmap Signals
Several user-requested features point to a maturing agent platform:
- **Model Fallback / Auto-Degradation** ([Issue #5572](https://github.com/agentscope-ai/QwenPaw/issues/5572)): A request for automatic failover when a primary model hits rate limits or fails. Given the project's focus on multi-provider support, this is a strong candidate for v2.0.
- **Computer Use Support** ([Issue #5551](https://github.com/agentscope-ai/QwenPaw/issues/5551)): A user is asking if the project will support "computer use" (likely agentic GUI automation), signaling a desire for more advanced agent capabilities.
- **DingTalk @Mention Support** ([Issue #5564](https://github.com/agentscope-ai/QwenPaw/issues/5564)): A feature to enable agent-to-agent mentions in DingTalk channels. This is a deep collaboration feature for enterprise users.
- **No-Text File Upload in WeChat** ([Issue #5558](https://github.com/agentscope-ai/QwenPaw/issues/5558)): Users want to send files without requiring accompanying text.
- **Streaming for File Tools** ([Issue #4865](https://github.com/agentscope-ai/QwenPaw/issues/4865), Open since June 1): Users want to see content generated by `write_file` in real-time, rather than a loading spinner.

### 7. User Feedback Summary
The user base is highly technical and relies on CoPaw for daily automation and complex agent workflows. Key sentiments include:
- **Frustration with Stability:** The release of v2.0.0-beta.1 has introduced significant instability, causing crashes (memory leaks), hangs (DeepSeek thinking), and install errors. Users are vocal about their dissatisfaction.
- **Pain with "Message Spam":** The lack of response aggregation is a major UX pain point, with users describing the current behavior as "刷屏" (screen flooding) and a poor experience.
- **Demand for Reliable Channels:** Features like WeChat Work and DingTalk are critical for enterprise users, and bugs disrupting these channels are treated with high urgency.
- **Desire for Granular Control:** Users consistently request more configuration options, such as making heartbeats and plugin setups configurable to avoid hard-coded limits.

### 8. Backlog Watch
- **[Issue #4865](https://github.com/agentscope-ai/QwenPaw/issues/4865) (Open since June 1):** **Streaming for write_file content.** This is a long-standing UX enhancement that has been open for nearly a month. Despite 2 upvotes and a clear description, it remains unaddressed.
- **[Issue #5328](https://github.com/agentscope-ai/QwenPaw/issues/5328) (Open since June 19):** **DeepSeek thinking mode hang.** This bug severely impacts usability for users of popular DeepSeek models and has not yet been assigned or linked to a fix PR.
- **[Issue #5571](https://github.com/agentscope-ai/QwenPaw/issues/5571) (Release Duty):** This is a high-priority release checklist item for v2.0.0-beta.1 that requires immediate maintainer action to verify the installation across platforms. It has no comments, indicating it may require prompt attention.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-27

## Today's Overview
ZeroClaw v0.8.2 shipped today, introducing A2A agent discovery and enriched skills configuration, reflecting sustained high-velocity development. Activity remains intense: 50 issues and 50 PRs were updated in the last 24 hours, with 2 issues closed and 11 PRs merged or closed. The project shows strong forward momentum across security, runtime stability, and channel parity, though the volume of open work (48 active issues, 39 open PRs) signals a backlog that may pressure maintainers. The release also sharpens security posture across plugins and channels, aligning with a clear trajectory toward hardened supply-chain and Wasm-first architecture.

## Releases
**v0.8.2** — released 2026-06-27  
- **New capabilities:** A2A agent discovery for agent-to-agent interoperability; user-configured extra registries for skills; typed slash-command options.
- **Security hardening:** Sharpened plugin and channel security posture.
- **Breaking changes:** None documented.
- **Migration notes:** Users with custom skills registries should review the new extra-registries configuration format. A2A discovery requires no migration but enables new interop features.

## Project Progress
11 PRs were merged or closed today:

- **🔒 Security & Supply Chain:**
  - [#8158](https://github.com/zeroclaw-labs/zeroclaw/pull/8158) [merged] — Added CycloneDX SBOM generation for Rust and npm, implementing Phase 2 of the supply-chain transparency RFC.

- **🔧 Bug Fixes:**
  - [#8146](https://github.com/zeroclaw-labs/zeroclaw/pull/8146) [merged] — Fixed CLI one-shot mode losing telemetry and token totals on exit.
  - [#8007](https://github.com/zeroclaw-labs/zeroclaw/pull/8007) [open] — `cron_update` and `cron_remove` now accept job names directly, eliminating an extra round-trip for agents.

- **🧪 Testing:**
  - [#8299](https://github.com/zeroclaw-labs/zeroclaw/pull/8299) [merged] — Regression test for channel allowlist wildcard matcher short-circuit.
  - [#8300](https://github.com/zeroclaw-labs/zeroclaw/pull/8300) [merged] — Regression test for Discord custom-id kind separator escaping.
  - [#8241](https://github.com/zeroclaw-labs/zeroclaw/pull/8241) [open] — Unit coverage for China-provider alias predicates.

- **✨ Features:**
  - [#8337](https://github.com/zeroclaw-labs/zeroclaw/pull/8337) [open] — herdr agent status reporting integration (agent lifecycle sidebar).
  - [#8336](https://github.com/zeroclaw-labs/zeroclaw/pull/8336) [open] — Nix build repairs and hash update automation for releases.
  - [#8343](https://github.com/zeroclaw-labs/zeroclaw/pull/8343) [open] — Release artifacts now built from canonical feature registry.

- **📚 Documentation & Configuration:**
  - [#8311](https://github.com/zeroclaw-labs/zeroclaw/pull/8311) [open] — Configurable native runtime shell (`[runtime].shell` option).
  - [#8346](https://github.com/zeroclaw-labs/zeroclaw/pull/8346) [open] — Test coverage for email_imap TLS close_notify detection.

## Community Hot Topics
Most active discussions (highest comment count):

1. **[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — RFC: Work Lanes, Board Automation, and Label Cleanup** (11 comments)  
   *Status: Accepted, rollout in progress*  
   A governance RFC proposing automated work routing lanes to reduce maintainer overhead. Signals a push toward sustainable project management as contributor volume grows.

2. **[#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) — RFC: Supply chain signing (hardware PGP, hermetic builds, SLSA provenance)** (9 comments)  
   *Status: Blocked, needs maintainer review*  
   High-risk proposal to add hardware-backed PGP, multi-party quorum, and offline signing for container images and binaries. Underlying need: enterprise-grade trust for distribution.

3. **[#8238](https://github.com/zeroclaw-labs/zeroclaw/issues/8238) — Feature: Independent delegate mode for specialist handoffs** (4 comments)  
   *Status: In progress*  
   Requests explicit delegation mode for specialist agents to run under their own policy and toolset. Related to earlier cross-profile delegation work.

4. **[#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) — Feature: Per-agent custom environment variables** (4 comments)  
   *Status: Open*  
   Proposes `runtime_context` and `runtime_secrets` blocks for multi-tenancy across process lanes and shared MCP instances.

## Bugs & Stability
**High-severity bugs reported today:**

- **(P1)** [#8312](https://github.com/zeroclaw-labs/zeroclaw/issues/8312) — fill-translations leak-repair leaves stale translation-map entries that re-ship leaked text via `write_po`. S2 severity, narrow trigger but silent data-loss path. No fix PR yet.

- **(P2)** [#8366](https://github.com/zeroclaw-labs/zeroclaw/issues/8366) — Heartbeat engine reads `HEARTBEAT.md` from `data_dir` instead of agent workspace. S2 severity, degraded behavior. No fix PR yet.

- **(P1)** [#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947) — `execute_pipeline` bypasses per-agent tool gating (confused deputy). S0 severity (data loss / security risk). Status: accepted, no fix PR yet.

- **(P1)** [#7809](https://github.com/zeroclaw-labs/zeroclaw/issues/7809) — Channel turns ignore runtime-profile strict/parallel tool flags. S2 severity. Status: in progress, accepted.

**Fix PRs in progress:**
- [#8370](https://github.com/zeroclaw-labs/zeroclaw/pull/8370) — Regression tests for `mcp_bundles` enforcement (#7733), with production fix already landed.
- [#7440](https://github.com/zeroclaw-labs/zeroclaw/pull/7440) — Fix for context budget exhaustion when system prompt exceeds window.

## Feature Requests & Roadmap Signals
High-traffic feature requests suggesting near-term direction:

1. **Goal mode** ([#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)) — Bounded autonomous session work until completion or budget exhaustion. Likely for v0.9.0 given traction and accepted status.

2. **DingTalk streaming** ([#8228](https://github.com/zeroclaw-labs/zeroclaw/issues/8228)) — Streaming message support for DingTalk channel. Accepted, likely v0.8.3.

3. **OpenRouter fallback models** ([#8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138)) — Model fallback array support. Needs maintainer review but low implementation complexity.

4. **Discord mention-triggered threads** ([#7849](https://github.com/zeroclaw-labs/zeroclaw/issues/7849)) — Opt-in thread creation on bot mention. Accepted, likely v0.8.3.

5. **Session TTL auto-truncation** ([#8134](https://github.com/zeroclaw-labs/zeroclaw/issues/8134)) — Auto-truncate stale session history to reduce token consumption. In progress, likely v0.8.3.

**Roadmap signals:** The cluster of Wasm-first RFCs ([#8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135), [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132), [#8187](https://github.com/zeroclaw-labs/zeroclaw/issues/8187)) and supply-chain signing ([#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)) suggest ZeroClaw is positioning for enterprise and regulated environments.

## User Feedback Summary
- **Pain points:** Users report silent failures when MCP scoping (`mcp_bundles`) is configured but not enforced ([#7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733)). CLI secret paste provides no visual feedback ([#7808](https://github.com/zeroclaw-labs/zeroclaw/issues/7808)). ZeroCode keybindings are misleading on macOS ([#7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800)).
- **Use cases:** Multi-tenant deployments needing per-agent environment isolation ([#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)); specialist agent handoffs with independent tool policies ([#8238](https://github.com/zeroclaw-labs/zeroclaw/issues/8238)); Discord power users wanting thread-based conversations ([#7849](https://github.com/zeroclaw-labs/zeroclaw/issues/7849)).
- **Satisfaction:** Community remains engaged with detailed RFCs and PRs; the rapid release cadence (v0.8.2 today) suggests maintainers are responsive. However, the 39 open PRs and 48 active issues indicate the project may be growing faster than its review bandwidth.

## Backlog Watch
Issues and PRs needing maintainer attention:

1. **[#8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135) — Wasm-first plugin runtime RFC**  
   *Blocked, needs maintainer review* — High-risk architectural decision that affects plugin distribution and signing. Unreviewed since 2026-06-22.

2. **[#8309](https://github.com/zeroclaw-labs/zeroclaw/issues/8309) — SkillForge orphaned (wired to nothing)**  
   *Blocked, needs maintainer review* — Feature from #144 (merged 2026-02-15) is non-functional. Decision needed: wire with safe defaults or remove.

3. **[#8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170) — In-app upgrade with supervised restart from web dashboard**  
   *Needs maintainer review* — Accepted RFC but no implementation PR. Affects all web dashboard users.

4. **[#8078](https://github.com/zeroclaw-labs/zeroclaw/issues/8078) — zerocode local pre-submission gate**  
   *Accepted* — Adds contributor bar enforcement before PR submission. Accepted but no movement since 2026-06-21.

5. **[#6754](https://github.com/zeroclaw-labs/zeroclaw/issues/6754) — ACP bridge auto-pairing fails silently after first use**  
   *Accepted, no-stale* — Opened 2026-05-18, accepted but no fix PR. Affects operator workflows for ACP bridge users.

---

*Generated from GitHub data for zeroclaw-labs/zeroclaw. Data snapshot: 2026-06-27.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*