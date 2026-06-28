# OpenClaw Ecosystem Digest 2026-06-28

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-28 00:25 UTC

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

Here is the OpenClaw project digest for 2026-06-28.

---

### OpenClaw Project Digest: 2026-06-28

#### 1. Today's Overview
OpenClaw activity today is extremely high but shows a significant bottleneck in governance. The project saw **500 issues and 500 PRs updated in the last 24 hours**, yet only **14 issues** and **53 PRs** were closed or merged, indicating that new work is vastly outpacing completion. This suggests a critical review capacity bottleneck among maintainers, or a collective block on deployment. The most active updates focus on long-standing problems with session state, agent reliability, and the developer ecosystem (ClawHub), rather than new features. No new releases were published today.

#### 2. Releases
**None.** No new releases were created in the last 24 hours. The last release remains an undated version, which is a potential concern given the volume of reported bugs and regressions.

#### 3. Project Progress
Today saw 53 merged or closed PRs. Key areas of progress include:
- **Gateway Stability:** PR [#97075](https://github.com/openclaw/openclaw/pull/97075) (closed) introduced structured health checks (`Doctor: expose gateway runtime findings`), improving diagnostic capabilities for gateway issues like memory leaks and lock files.
- **Session Robustness:** PR [#95833](https://github.com/openclaw/openclaw/issues/95833) (closed) fixed a critical lock file issue where subagent aborts could permanently lock a session, leaving it non-functional until manual intervention.
- **Tooling & Automation:** PR [#68936](https://github.com/openclaw/openclaw/pull/68936) (closed) added a "PR review autofix pipeline" and a Windows daemon, showcasing progress in operational automation.

#### 4. Community Hot Topics
The community is most engaged with issues related to agent reliability and the skill ecosystem.

1.  **[Feature/Issue: Community Skill Development & ClawHub (#50090)](https://github.com/openclaw/openclaw/issues/50090)** (15 comments, 2 👍)
    - *Underlying Need:* Users are eager for a thriving ecosystem of community-built "skills." The current state is frustrating, described as having a "wide gap between promise and practice," with poor discoverability and tooling. This reflects a deep desire for OpenClaw to evolve from a solo tool into a platform.
2.  **[Bug: Agent promises follow-up but never acts (#58450)](https://github.com/openclaw/openclaw/issues/58450)** (15 comments, 3 👍)
    - *Underlying Need:* Users are frustrated by a "hallucination of action" where the agent claims it will perform a task (e.g., "I'll check the logs and follow up") but has actually scheduled nothing. This erodes user trust and is perceived as an agent lying about its state.
3.  **[Bug: Embedded runner fails with invalid Anthropic thinking signatures (#92201)](https://github.com/openclaw/openclaw/issues/92201)** (15 comments, 1 👍)
    - *Underlying Need:* Users running self-hosted or embedded agents (e.g., in Slack) are facing silent failures with Anthropic's "thinking" feature. The error messages are generic, making debugging impossible. This shows a need for better error transparency and provider-specific handling.

#### 5. Bugs & Stability
The project is grappling with a significant volume of regressions and stability issues, many of which are high-priority (P1).

- **Critical / P1 Regressions:**
    - **[Coding Agent Regression (#62505)](https://github.com/openclaw/openclaw/issues/62505)** - A critical bug causing the coding agent to be completely non-functional. The agent provides "vague status updates" but never executes code. This is a major workflow blocker for developers.
    - **[Embedded Runner Network Loss (#92201)](https://github.com/openclaw/openclaw/issues/92201)** - As noted above, a critical bug causing silent failures and session corruption with Anthropic.
    - **[Gateway Crash on Playwright Error (#45224)](https://github.com/openclaw/openclaw/issues/45224)** - An unhandled assertion error from Playwright crashes the whole gateway process, requiring a restart. This is a crash-loop, availability issue.

- **High Volume (P2) Transient Bugs:**
    - Many issues relate to **session state corruption/message loss** (e.g., #52249, #47975, #50165). Subagents appear to complete before their underlying tasks are done, or parent sessions become "stuck."
    - **Silent failures** are a recurring theme: model switches can fail silently (#58957), Google Chat messages are silently ignored (#58514), and lock files are not cleaned up (#49603).

**Summary:** The project has a heavy bug load. The most severe are regressions in the core coding and reasoning logic (*complete inaction*), followed by silent state corruption and process crashes.

#### 6. Feature Requests & Roadmap Signals
New feature requests are primarily focused on control, isolation, and reliability.

- **Per-Agent Configuration:** High engagement on issues like per-agent memory-wiki vaults ([#63829](https://github.com/openclaw/openclaw/issues/63829), 9 👍) and per-agent sandbox visibility ([PR#53821](https://github.com/openclaw/openclaw/pull/53821)). This indicates a clear user need for multi-tenancy and stronger isolation between different agents.
- **Unbypassable Policy Enforcement:** A request for a mandatory pre-send validation boundary ([#56349](https://github.com/openclaw/openclaw/issues/56349)) suggests that operators need hard guarantees to prevent data leaks or policy violations, especially in enterprise/regulated settings.
- **Context Provenance:** [Issue #54373](https://github.com/openclaw/openclaw/issues/54373) proposes adding metadata to context segments to help the agent understand the source and reliability of its information. This is a sophisticated request for improving agent reasoning quality.

**Prediction for next version:** Given the criticality of the coding agent regression, a hotfix or patch release is imminent. Longer-term, features around multi-agent isolation and ecosystem development (ClawHub) are likely to be prioritized.

#### 7. User Feedback Summary
- **Positive Signals:** Users are successfully running multi-agent setups and using the agent for complex coding tasks, demonstrating a high level of trust in its capabilities.
- **Pain Points:** The top pain points are **unreliability** ("agent just... doesn't do anything"), **lack of transparency** (silent failures, generic errors), and **ecosystem friction** (ClawHub not working as advertised).
- **Dissatisfaction:** There is clear frustration that previously working features (coding, Discord routing, Chrome extension relay) have regressed in recent releases. This suggests a need for a more stable release cycle and better regression testing.

#### 8. Backlog Watch
The following items are critical or high-value and have been languishing for months without maintainer resolution.

- **[High Priority] Community Skill Development & ClawHub (#50090)** – Created March 19, 2026. Over 3 months old. This is a strategic initiative, and its stagnation is blocking the community from growing.
- **[Critical/P1] Coding Agent Regression (#62505)** – Created April 7, 2026. The primary workflow of a coding-focused agent is broken. Despite being flagged as a "Regression" and `needs-maintainer-review`, no fix has been merged.
- **[High Priority] CLI Dispatch Bypass (#57326)** – Created March 29, 2026. A security issue where CLI-backed helpers bypass the intended dispatch system persists on `main`. It is tagged `needs-security-review` and has a linked open PR, indicating a known fix is pending review.
- **[Medium, 9 👍] Per-Agent Memory-Wiki (#63829)** – Created April 9, 2026. A highly requested feature with significant support (9 thumbs up) that has not seen maintainer engagement.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Report — June 28, 2026

## 1. Ecosystem Overview

The personal AI agent open-source ecosystem is undergoing a **polarization phase**, where a handful of flagship projects (OpenClaw, ZeroClaw, IronClaw) drive massive throughput (50+ PRs/Issues daily) while smaller projects (NullClaw, TinyClaw, ZeptoClaw) show near-zero activity. The dominant themes across the ecosystem are **agent reliability** (session state corruption, silent failures, context budgeting), **multi-agent orchestration** (inter-agent communication buses, SOP enforcement, approval workflows), and **security hardening** (supply chain signing, permission models, credential isolation). No project has achieved production-grade stability, but the collective investment in test infrastructure (CoPaw adding 500+ test cases, Hermes expanding QA matrices) signals a maturation push.

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | New Release | Health Score | Primary Activity Type |
|---------|----------------------|-------------------|-------------|--------------|-----------------------|
| **OpenClaw** | 500 | 500 | ❌ | ⚠️ **Critical** (bottleneck) | Bug reports >> fixes |
| **ZeroClaw** | 46 | 50 | ❌ | ✅ **Strong** | Feature implementation |
| **IronClaw** | 12 | 50 | ❌ (PR ready) | ✅ **Strong** | Epic merge chain |
| **Hermes Agent** | 50 | 50 | ❌ | ⚠️ **Moderate** (backlog) | Bug triage & fixes |
| **NanoBot** | 8 | 47 | ❌ | ✅ **Strong** | Bug fixes merged |
| **CoPaw** | 5 | 15 | ❌ | ✅ **Strong** | Test coverage + fixes |
| **LobsterAI** | 2 | 8 | ❌ | ⚠️ **Moderate** | Backlog cleanup |
| **PicoClaw** | 3 | 7 | ❌ | ✅ **Moderate** | Maintenance |
| **NanoClaw** | 1 | 8 | ❌ | ⚠️ **Moderate** | Bug-fix sprint |
| **Moltis** | 1 | 2 | ❌ | ✅ **Stable** | Refinement |
| **NullClaw** | 1 | 1 | ❌ | ⚠️ **Low** | Stalled |
| **TinyClaw** | 0 | 0 | ❌ | ❌ **Inactive** | — |
| **ZeptoClaw** | 0 | 0 | ❌ | ❌ **Inactive** | — |

**Key observation:** OpenClaw's **500:53 closure ratio** (only 10% resolved) is a systemic risk—it dominates mindshare but cannot keep pace with user reports. ZeroClaw and IronClaw show the healthiest velocity and closure discipline.

## 3. OpenClaw's Position

**Advantages:**
- **Unmatched community scale:** 500 daily issues vs. next highest (Hermes, ZeroClaw at ~50) — 10x more user engagement
- **Ecosystem cornerstone:** ClawHub (skill marketplace), subagent architecture, multi-channel gateway are industry reference implementations
- **Deep LLM integration:** Thinking signatures, provider-specific handling (Anthropic, OpenAI) — more battle-tested than peers

**Technical Approach Differences:**
- **Rust vs Python:** OpenClaw (Rust) vs. CoPaw, LobsterAI, NanoBot (Python)—Rust offers performance but slower feature iteration
- **Monolithic vs modular:** OpenClaw's single repo handles gateway, agents, skills vs. ZeroClaw's milestone-tracker separation; OpenClaw's approach creates dependency hell (core regression in #62505 blocks all downstream)
- **Governance model:** Single maintainer bottleneck; IronClaw and ZeroClaw have clearer delegation (RFC process, test-owner assignments)

**Critical Weakness:** OpenClaw's **10% fix rate** and **P1 coding agent regression (#62505) unfixed for 3 months** erodes trust. Competitors are rapidly closing feature gaps while OpenClaw's community is frustrated with "agent just doesn't do anything."

## 4. Shared Technical Focus Areas

| Focus Area | Projects Affected | Specific Needs |
|-----------|-------------------|----------------|
| **Session State Reliability** | OpenClaw, NanoBot, Hermes, CoPaw | Lock files not releasing, message duplication, crash-induced data loss, subagent state corruption |
| **Security & Permission Models** | ZeroClaw, IronClaw, PicoClaw, Hermes | Supply chain signing (SLSA), shell command approval flows, per-channel permissions, MCP auth |
| **Multi-Agent Orchestration** | OpenClaw, PicoClaw, ZeroClaw, IronClaw | Inter-agent buses, SOP execution, role-based delegation, capability policies |
| **Context & Memory Management** | ZeroClaw, Hermes, OpenClaw | Context budget overflow, memory emphasis bugs, prompt caching gaps, semantic search |
| **Model Provider Compatibility** | CoPaw, Moltis, NanoBot, Hermes | DeepSeek V4 streaming fixes, stringified tool args, Anthropic thinking signatures, fallback models |
| **Test & QA Infrastructure** | CoPaw, IronClaw, ZeroClaw | Unit test expansion, E2E canaries, integration frameworks, flaky test resolution |
| **Internationalization & UX** | Hermes, PicoClaw | 15-language support, theme quality, UI freeze on backup, installer reliability |

**Strongest convergence:** Session reliability and security permissions appear across **6+ projects** each, representing the ecosystem's top pain points for production readiness.

## 5. Differentiation Analysis

| Project | Target User | Key Differentiator | Architecture |
|---------|-------------|-------------------|--------------|
| **OpenClaw** | Developers/ power users | Largest skill ecosystem, deepest LLM integration | Monolithic Rust |
| **ZeroClaw** | DevOps/ security-focused | Milestone-tracked, RFC-driven, WASM plugins | Modular with SLA |
| **IronClaw** | Enterprise teams | Capability policy engine, OAuth/SSO, admin REST | Rust + DB-backed |
| **Hermes Agent** | Telegram/ Discord users | Strongest chat platform integration, themes | Python hybrid |
| **NanoBot** | Lightweight deployment | "Ultra-lightweight" claim, rapid bug turnaround | Python + Node |
| **CoPaw** | Chinese-market users | DeepSeek/ QwenPaw focus, plugin ecosystem | Python (AgentScope) |
| **PicoClaw** | Raspberry Pi/ edge | Low-resource target, simplex channels | Rust (embedded) |
| **LobsterAI** | Desktop productivity | Backup/ cowork features, scheduled tasks | .NET/ Electron |
| **Moltis** | LLM researchers | Post-hoc model output normalization | Python (research) |
| **NullClaw** | Mobile/Termux | Zig/Build optimization, Android target | Zig |

**Strategic gap:** No project targets enterprise compliance (audit trails, data residency) systematically—IronClaw is closest with its capability policy but lacks audit logging. This is a greenfield opportunity.

## 6. Community Momentum & Maturity

**Tier 1 — High Velocity (50+ daily updates):**
- **ZeroClaw, IronClaw** — Strong closure discipline, RFC-driven, systematic QA expansion. Both are converging on production-grade features (SOP enforcement, supply chain security, admin REST APIs).
- **Hermes Agent** — High engagement but lower fix rate (47/50 issues open); community energy is ahead of maintainer capacity.

**Tier 2 — Moderate Momentum (5-50 daily):**
- **NanoBot** — Rapid bug turnaround (5 core bugs merged in 3 days); security disclosures handled well; "ultra-lightweight" identity tension unresolved.
- **CoPaw** — 500+ tests added, strong contributor diversity; DeepSeek V4 fixes in review; data loss bug (#5579) is a reputational risk.
- **LobsterAI** — Backlog cleanup cycle (7 stale PRs merged); still has 31-day-old PR #2065 and 2-day-old freeze bug (#2214) with no response.

**Tier 3 — Stabilizing / Stalled:**
- **PicoClaw, NanoClaw** — Maintenance mode; PRs aging 8+ days without review.
- **Moltis** — Refinement of model output parsing; no growth signals.
- **NullClaw** — 66-day-old build bug (#868) unanswered; PR #969 (approval flow) is only meaningful activity.
- **TinyClaw, ZeptoClaw** — **Inactive** — zero updates.

## 7. Trend Signals

**For AI agent developers:**

1. **"Reliability is the new feature."** Across all active projects, users are not asking for more capabilities—they want agents that **actually execute** what they promise. Silent failures, session corruption, and "hallucination of action" (OpenClaw #58450) are the #1 friction points. Developers should prioritize **idempotent actions, state checkpoints, and explicit failure reporting** over new tool integrations.

2. **Multi-agent safety is the next bottleneck.** The convergence on approval flows (NullClaw PR #969, IronClaw capability policy, ZeroClaw SOP execution) signals that **single-agent orchestration is solved**; the hard problems are permission boundaries between agents, audit trails, and revocation. Expect **policy-as-code** frameworks to emerge as a standard layer.

3. **Model provider diversity is a liability.** Every project is fighting the same battles: DeepSeek streaming, Anthropic thinking signatures, OpenAI tool call deduplication, local model output normalization. The ecosystem needs a **provider-agnostic normalization layer**—Moltis is closest but narrowly focused. Without it, each project will keep reinventing the same workarounds.

4. **Ultra-lightweight is a brand, not a reality.** NanoBot (#660) and PicoClaw's Windows path issues highlight that "lightweight" comes at the cost of platform support. Users increasingly expect **multi-platform parity** (macOS, Windows, Linux, Docker, embedded). Projects that prioritize cross-platform testing (IronClaw's QA matrices, CoPaw's Tauri packaging) will win adoption.

5. **The skill marketplace is failing.** OpenClaw's ClawHub (#50090) and CoPaw's plugin catalog (#5568) both face discoverability and installation friction. The ecosystem lacks a **standardized skill packaging format** with dependency resolution. Until this is addressed, users will continue to write inline scripts rather than browsing skill stores.

6. **Security is moving from optional to required.** Supply chain signing (ZeroClaw #8177, #8058), credential isolation (NanoBot #4518), and approval-locked commands (Hermes #5528) are being implemented proactively—not in response to breaches. **SLSA Build L3** and **hardware PGP signing** signal that enterprise-grade security is becoming table stakes, not differentiators.

**Bottom line for decision-makers:** The personal AI agent space is in a **stability winter**—capabilities have outpaced reliability. The winning projects in 2026-Q3 will be those that **close the gap between feature promises and actual execution**, not those shipping the most novel tools. ZeroClaw and IronClaw show the strongest trajectory; OpenClaw remains the dominant platform but risks user exodus if its regression backlog is not addressed within the next release cycle.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-28

## 1. Today's Overview

NanoBot shows robust activity with **47 pull requests** updated in the last 24 hours and **8 issues** receiving attention. The project closed 29 PRs (merged) while keeping 18 open for ongoing review, indicating strong maintainer engagement. Two security issues (shell-chain bypass and login-shell secrets exposure) were disclosed and closed with corresponding fix PRs already submitted. Notably, a major batch of five related infrastructure bugs (session key collisions, Anthropic provider type validation, stream coalescing, tool call deduplication) were all reported and fixed within the last three days by the same contributor, reflecting rapid response to foundational stability problems. The project remains without a new tagged release.

## 2. Releases

**No new releases** in the past 24 hours. The latest available version remains untagged or at prior release. Security patches from #4521 and #4518 are present on `main` but have not been cut into a release branch.

## 3. Project Progress

**29 merged/closed PRs** reflect significant progress across multiple subsystems:

- **Session Key Collision Fix** (#4533 by axelray-dev) — Resolves #4057 where distinct session keys like `telegram:a_b` and `telegram:a:b` both mapped to `telegram_a_b` on disk, causing data loss.
- **Anthropic Provider Validation** (#4532 by axelray-dev) — Fixes #4060 by normalizing `type` fields on assistant content blocks before sending to the Anthropic API.
- **Stream Coalescing Fix** (#4531 by axelray-dev) — Fixes #4063 by including `_stream_id` in the coalescing key, preventing cross-stream interference in the same chat.
- **Non-Stream Tool Call Deduplication** (#4530 by axelray-dev) — Fixes #4059 by normalizing duplicate tool call IDs in the non-stream parsing path.
- **Flaky Test Fix** (#4523 by primit1v0) — Resolves a test flake caused by identical sub-millisecond file timestamps affecting session pruning order.
- **Cron Silent Mode** (#4225, #4357 both merged) — Adds `silent` and `lock_recipient` options to scheduled jobs, enabling background monitoring tasks that only respond conditionally.
- **Codex Provider Reliability** (#4534 open) — A general-purpose agent loop recovery layer with verification gates, still in open review.

## 4. Community Hot Topics

The most active discussion centered on:

- **#660** — "Project claims to be 'ultra-lightweight' but includes bloated Node.js dependency" — 14 comments, 5 👍. The critique targets the Dockerfile's dual Python+Node.js requirement. While closed, the core tension between feature richness and the "ultra-lightweight" tag persists as an unsettled project identity question.

- **#4500** — "WebUI:self-restart leaves stuck streaming, stop button reports 'No active task to stop'" — 2 comments, 0 👍. Despite low engagement, this bug directly impacts daily usability. A fix PR (#4565) was submitted 24 hours later.

- **#4565** (open PR) — "fix(webui): clear stuck streaming after reconnect and improve stop reliability" — Author is responding directly to the #4500 user report, making this the highest-value community-facing reaction.

- **Security disclosures #4521 and #4518** — Both filed by security researcher YLChen-007, these received immediate closure and fix PRs, but the underlying severity (shell command injection, credential leaks) makes them the project's most critical recent topics by impact.

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | #4521 — `exec.allowPatterns` shell-chain bypass (prefix matching allows `echo safe && rm -rf /`) | Closed | #4562 (open) |
| **Critical** | #4518 — Login-shell execution exposes `.bashrc`/`.profile` secrets | Closed | Included in pipeline |
| **High** | #4500 — WebUI stuck in "processing" after self-restart | Open | #4565 (open) |
| **High** | #4063 — Stream delta coalescing merging distinct streams (loss of tool responses) | Closed | #4531 (merged) |
| **High** | #4057 — Session key collisions on disk from filename sanitization | Closed | #4533 (merged) |
| **Medium** | #4060 — Anthropic provider sends typeless content blocks (API rejection) | Closed | #4532 (merged) |
| **Medium** | #4059 — Non-stream parser preserves duplicate tool call IDs (spam/exceptions) | Closed | #4530 (merged) |

The 24-hour window shows zero new bug reports, suggesting the recent burst of fixes (#4530–#4533) may be clearing a backlog.

## 6. Feature Requests & Roadmap Signals

Several enhancements are in open review with high likelihood of inclusion in the next release:

- **Serper.dev web search provider** (#4406) — Adds Google Search API support, likely fast-tracked as it follows an existing provider pattern.
- **Per-session model preset** (#4555) — Lets conversations retain their own model selection, addressing a long-standing UX gap.
- **Dream duplicate skill guard** (#4554) — Prevents the memory-consolidation ("Dream") system from creating duplicate skill directories.
- **Audio transcription normalization** (#4353) — Converts OGG/Opus to WAV 16k mono before STT, fixing failures with AssemblyAI.
- **System prompt caching breakpoint** (#4371) — Adds a cache breakpoint before the growing 'Recent History' block to improve provider cost and latency.
- **Ask clarification tool** (#4527) — A built-in tool for agent-to-user clarification, short-circuiting the turn cycle when ambiguous input is detected.

The `silent` cron mode (#4225, #4357) just landed, indicating strong community interest in **background monitoring** use cases.

## 7. User Feedback Summary

**Pain Points:**
- **"Ultra-lightweight" contradiction** — Issue #660's 14-comment debate and 5 upvotes shows community sensitivity to the project's claim vs. the reality of a Python+Node.js stack.
- **WebUI reconnection state** — User zpljd258 (#4500) describes a broken experience where the UI falsely shows "processing" after server restart, making the stop button nonfunctional.
- **Security boundary leaks** — The two security disclosures (#4521, #4518) reveal that `exec` command restrictions and environment sanitization have gaps, which undermines trust for production deployments.

**Satisfaction Signals:**
- Rapid fix turnaround — The batch of five bugs (#4057–#4063) was reported May 29, fixed by axelray-dev on June 25, and merged within days. The user hamb1y's thorough bug reports were taken seriously.
- Security disclosures were handled publicly and promptly, with clear advisory details.

## 8. Backlog Watch

- **#4534** (open, 2 days old) — Agent reliability layer with verification gates. No maintainer commentary yet; this is a substantial architectural change that needs review bandwidth.
- **#4371** (open, 12 days) — System prompt caching breakpoint. Low comment count but high value for reducing API costs. May be blocked by architectural disagreement on cache invalidation.
- **#4353** (open, 13 days) — Audio pre-processing for STT. Waiting on review despite being a straightforward ffmpeg pipeline addition.
- **#4406** (open, 10 days) — Serper.dev web search provider. No maintainer activity; follows a well-established pattern and should be an easy merge.

No issues older than 2 weeks remain unanswered among active items, but the **50+ open PRs** (18 open + 29 closed in 24h) suggest the maintainer team may be strained between merging fixes and reviewing new features.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-06-28

---

## Today's Overview

Hermes Agent is experiencing a period of extremely high activity, with **50 issues and 50 pull requests** updated in the last 24 hours, signaling a project under heavy development and community engagement. The vast majority of issues remain open (47/50), indicating a growing backlog of reports and feature requests that the maintainers are actively triaging. While no new releases were published today, the project's pulse is strong, with 9 PRs being merged or closed and significant focus on fixing bugs across core components like the Telegram gateway, CLI, and desktop application. The density of reports, particularly around message delivery on Telegram and platform-specific crashes on Windows and Linux, suggests that stability is the community's primary concern, but feature development—especially around localization and profile isolation—continues at pace.

## Releases

**No new releases were published in the last 24 hours.** The project remains at its last tagged version (v0.15.x / v0.16.0 post-history). Users should monitor activity around PR #53869, which addresses a post-update gateway restart issue on macOS, suggesting a potential hotfix release may be imminent.

## Project Progress

The following PRs were **closed or merged** today (9 total, with 7 merged and 2 closed without merge), indicating tangible progress:

- **PR #29622 (Merged):** Fix honoring DeepSeek config `api_key` – ensures the built-in DeepSeek provider respects `config.yaml` API keys when no runtime or environment key is available. This was a long-standing config gap (opened 2026-05-21).
- **PR #19506 (Merged):** `feat(cli): add --show-commits flag to hermes update` – provides users visibility into what commits are being pulled before/during updates, addressing a top user pain point about opaque update processes.
- **PR #17297 (Merged):** Add `on-this-day-art-trivia` – a Telegram-native skill/plugin art history guessing game, demonstrating continued platform-specific plugin ecosystem growth.
- **PR #53869 (Open, Review):** Fix CLI gateway liveness verification after macOS `launchd` restart – critical fix for users on macOS where `hermes update` could silently leave the gateway down after display sleep.
- **PR #53873 (Open, Review):** Fix MCP login for servers returning 200 on initialize without auth – fixes silent authentication failures with servers like Blynk that allow unauthenticated `initialize` but require auth for subsequent tool calls.
- **PR #53875 (Open, Review):** Lower MoA auxiliary default timeouts from 600s to 120s/180s – improves responsiveness and resource usage for Mixture-of-Agents patterns.

## Community Hot Topics

The following issues and PRs generated the most discussion and reactions in the last 24 hours, reflecting deep community engagement:

| Item | Comments | Reactions | Analysis |
|------|----------|-----------|----------|
| **#18080** [OPEN] [Feature]: Improved Themes for Dashboard | 25 | 44 👍 | **Highest engagement.** Users are actively dissatisfied with current theme quality. The issue criticizes non-standard font/color choices and poor contrast, especially with serif fonts. With 44 upvotes and sustained discussion across 2 months, this is a clear UX priority. |
| **#40187** [OPEN] [Bug]: Windows desktop app fails to compile during update | 14 | 1 👍 | High frustration around compilation failures during `hermes update` on macOS (despite Windows-labeled bug) – likely affecting many users on desktop. |
| **#5528** [OPEN] [Feature]: Configurable approval-locked command patterns | 4 | 11 👍 | Strong demand for customizable security boundaries. Users want to mark installation-specific commands as approval-required without patching source code. |
| **#35166** [OPEN] [Bug]: Installation stuck at "Installing Playwright Chromium" | 6 | 5 👍 | Repeated user experience issue where installer hangs on Kubuntu 26.04, with Ctrl+C failing to interrupt. |

**Key insight:** The community is signaling a strong desire for **better UX polish** (themes #18080, installation UX #35166, command approval #5528) and **platform parity** (Windows compilation #40187). These are not just cosmetic issues – they directly impact adoption and daily usage satisfaction.

## Bugs & Stability

### High Severity (P1-P2)

- **#53874 (P2)** – [Bug]: Discord voice input crashes on Linux. `windows_hide_flags` is not defined (line 682 in `adapter.py` for `pcm_to_wav`). **Fix available:** PR #53864 addresses Discord command registration but not this specific crash. **No fix PR yet.** *Risk: High – completely breaks Discord voice on Linux.*
- **#38216 (P2)** – Hermes Desktop v40.9.3 crashes on startup on Windows 11 with `0x80000003` breakpoint exception. **No fix PR yet.** *Risk: High – prevents desktop app from launching on affected systems.*
- **#50703 (P2)** – Hermes translation of `extra_body` strips top-level `chat_template_kwargs` for NVIDIA NIM, preventing `thinking_mode` from reaching M3 model. **No fix PR yet.** *Risk: High – breaks thinking mode for users of NVIDIA NIM.*
- **#53449 (P2)** – Telegram message duplication bug: short/medium replies delivered twice when stream consumer's `final_*` delivery flags are lost. **Fix exists:** PR #53865 addresses the root cause (draft-failure cascade). *Priority: Very High – actively confusing Telegram users.*
- **#53834 (P2)** – `user_char_limit` / `memory_char_limit` config changes do not take effect after gateway restart. **No fix PR yet.** *Risk: Medium – config management inconsistency.*
- **#53781 (P2)** – Windows: Copilot token auto-detection via `gh auth token` causes console flashes/focus stealing. **No fix PR yet.** *Risk: Medium – bad UX for Windows users not using Copilot.*
- **#53869 (P2)** – macOS `launchd_restart()` defers gateway respawn when display is asleep. **Fix exists:** PR #53869 adds liveness verification. *Risk: Medium – only affects macOS with display sleep.*
- **#41176 (P2)** – `hermes skills update` does not refresh `content_hash`, causing permanent false `update_available`. **No fix PR yet.** *Risk: Medium – persistent false positive for skill updates.*
- **#53833 (P3)** – Memory tool crashes with `UnicodeDecodeError` on legacy non-UTF-8 bytes in MEMORY.md/USER.md. **No fix PR yet.**

### Regressions Reported Today

- **#53875 (PR, Open):** Lower MoA auxiliary default timeouts – suggests prior timeouts (600s) were causing resource exhaustion.
- **#52919 (CLOSED):** Nix build broken by `package-lock.json` update – was hot-fixed (closed within 1 day). Good response time from maintainers.

## Feature Requests & Roadmap Signals

The following features, based on community demand and maintainer engagement, are strong candidates for the **next minor version (v0.17.x)**:

| Feature | Issue # | Community Demand | Predictability |
|---------|---------|-----------------|----------------|
| **Improved Themes for Dashboard** | #18080 | 44 👍, 25 comments | **High** – UX is a common complaint; maintainers likely to prioritize. |
| **Russian locale for Desktop app** | #40347 | 5 comments, installer ready | **Medium** – PR #38846 adds 15 languages including ru; likely merged soon. |
| **Configurable approval-locked commands** | #5528 | 11 👍, security-focused | **Medium** – addresses security hardening; likely in roadmap. |
| **Semantic Search for Session History** | #44075 | 1 comment, well-specified | **Medium** – hybrid BM25+Vector search; strong QoL improvement. |
| **Per-topic profile isolation for Telegram** | PR #53048 | In review | **High** – PR already open, well-reviewed; likely to merge soon. |
| **Ambient / Blend-In Agent for Gateway** | #31061 | 1 comment, 1 👍 | **Low-Medium** – niche but could enable new use cases. |
| **First-Class Claim Verification & Audit** | #26742 | 2 comments | **Low-Medium** – enterprise/security feature; not urgent. |
| **Self-created skills mechanism guarantees** | #25833 | 5 comments | **Low** – P3, well-specified but no PR yet. |

**Predicted for v0.17.0 (next minor):** Improved themes (#18080), Russian/15-language i18n (PR #38846), per-topic Telegram profiles (PR #53048), and likely the Ctrl+R fzf history search (PR #51391).

## User Feedback Summary

### Pain Points (Explicit and Implicit)

1. **Desktop UX is problematic:**
   - Dashboard themes are "hard to read" with non-standard fonts/colors (#18080).
   - Windows desktop app crashes on startup with breakpoint exception (#38216).
   - Windows terminal tool flashes cmd window on every command (#42544).
   - Desktop file browser intermittently shows "UNREADABLE – ENOENT" (#43042).

2. **Platform issues degrade reliability:**
   - Telegram message duplication (#53449) – "terrible UX" when context compaction visually deletes messages (#40416).
   - Discord voice input completely broken on Linux (#53874).
   - Telegram non-overflow replies duplicated (#53449).

3. **Installation and configuration friction:**
   - Installer hangs on Kubuntu 26.04 with frozen Playwright install (#35166).
   - "Chaotic, poorly documented, constantly breaking" (user quote from #32817).
   - Config changes (char limits) not taking effect after restart (#53834).

4. **Security and control concerns:**
   - Cannot customize approval-triggering command patterns without patching source (#5528).
   - Windows Copilot token detection steals focus (#53781).

### Satisfaction Signals

- The **15-language i18n PR** (#38846) received positive attention, showing the global community is engaged.
- **Poetry/art skills** (PR #17297 merged) and **improved MCP login** (PR #53873) show ecosystem growth.
- The **subagent event ledger** (PR #53872) indicates enterprise/observability features advancing.

## Backlog Watch

The following issues and PRs have been open for extended periods without maintainer attention or resolution:

| Item | Age | Priority | Why It Matters |
|------|-----|----------|----------------|
| **#53846** [OPEN] `delegate_task` model parameter not honored | 1 day | P3 | Documentation quirk; PR #48644 already in review for cross-profile delegation. |
| **#53834** [OPEN] Config char limits don't take effect | 1 day | P2 | Basic configuration inconsistency – should be an easy fix. |
| **#53449** [OPEN] Telegram message duplication | 1 day | P2 | Fix exists in PR #53865; needs review/merge. |
| **#44075** [OPEN] Semantic search for session history | 17 days | P3 | Clear spec, strong QoL improvement, but no PR yet. |
| **#43042** [OPEN] Desktop file browser ENOENT | 19 days | P3 | Root cause identified (`session.info` overwriting CWD). No PR yet. |
| **#38216** [OPEN] Windows desktop app crash on startup | 25 days | P2 | 0x80000003 breakpoint exception – no response from maintainers? |
| **#35166** [OPEN] Installation stuck at Playwright install | 29 days | P1 | Hangs on Kubuntu; Ctrl+C doesn't work. **Needs immediate attention.** |
| **#26742** [OPEN] First-Class Claim Verification & Audit | 42 days | P3 | Security-centric feature request; maintainers may deprioritize. |
| **#25833** [OPEN] Self-created skills lack correctness guarantees | 45 days | P3 | Long-open feature request with detailed analysis; no maintainer acknowledgment. |
| **#5528** [OPEN] Configurable approval-locked commands | 83 days | P3 | 11 upvotes, significant security utility; no movement. |

**Critical watch items:**
- **#35166** (P1, 29 days) – Installer hang on Kubuntu; this is a first-impression blocker for new users.
- **#38216** (P2, 25 days) – Windows desktop crash; affects desktop adoption on the #2 OS.
- **#53449** (P2, 1 day) – Telegram duplicate messages; fix PR #53865 is open and ready for review. **Should be priority-merged.**

---

*Generated from GitHub data as of 2026-06-28 23:59 UTC. All links point to NousResearch/hermes-agent.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the project digest for **PicoClaw** (github.com/sipeed/picoclaw) for **2026-06-28**.

---

### 1. Today's Overview
The PicoClaw project shows **moderate activity** today, with 3 issues updated and 7 pull requests (PRs) touched in the last 24 hours. Two long-running issues were finally closed after a period of inactivity, signaling progress on backlogs, though no new release was cut. Activity is concentrated on **code quality improvements** (i18n, config cleanup, Docker bumps) and one potential new feature (a "simplex" channel type). No critical regressions or major feature PRs were merged today, indicating a maintenance-focused period for the maintainers.

### 2. Releases
**None.** No new versions were released in the last 24 hours. The latest stable release remains **v0.2.6** (referenced in bug report #2472).

### 3. Project Progress
Two PRs were merged/closed today, reflecting a **mix of feature work and bug fixes**:
- **PR #2937 (closed/merged) – Agent Collaboration Bus:** This major feature introduces a first-class internal bus for inter-agent communication with mailboxes, session history, and permission-aware message envelopes. This is a foundational upgrade for multi-agent workflows. [Link](https://github.com/sipeed/picoclaw/pull/2937)
- **PR #3048 (closed/merged) – MCP Flag Parsing Fix:** Fixes a bug where root-level flags (e.g., `--no-color`) were mis-parsed by the `mcp add` subcommand, preventing incorrect positional arguments. [Link](https://github.com/sipeed/picoclaw/pull/3048)

### 4. Community Hot Topics
The most engaged issue today is **#2472** (7 comments, 1 reaction), which was finally closed after more than 2 months. The core discussion centered on Windows path compatibility—a persistent pain point for cross-platform users. The community demanded a robust path normalization layer. [Link](https://github.com/sipeed/picoclaw/issues/2472)

The other actively updated issue, **#3114** (2 comments), requested granular Telegram permission control by chat type (private/group/channel). The lack of such controls poses a security risk, especially in group settings where users could trigger dangerous tools like `exec` or `write_file`. This remains a popular feature request even though the issue is closed. [Link](https://github.com/sipeed/picoclaw/issues/3114)

### 5. Bugs & Stability
One new bug was reported today, categorized as **medium severity**:
- **#3194 – Crypto error without encryption enabled:** A user on the Matrix channel received a `Received encrypted message but crypto is not enabled` warning. This appears to be a display/logging issue rather than a data loss bug, but it is confusing for users with encrypted rooms. No fix PR exists yet. [Link](https://github.com/sipeed/picoclaw/issues/3194)

Existing fixes merged today include a **minor stability fix** in the LINE channel (`PR #3189`) that explicitly ignores harmless `body.Close()` errors to prevent false-positive logs. [Link](https://github.com/sipeed/picoclaw/pull/3189)

### 6. Feature Requests & Roadmap Signals
Two feature signals stand out:
- **Simplex Channel (PR #3193):** A new PR proposes a "simplex" channel type, likely a unidirectional communication mode. This could be designed for alerting or logging use cases. If accepted, this will likely appear in the next minor version. [Link](https://github.com/sipeed/picoclaw/pull/3193)
- **Telegram Permission Granularity (Issue #3114):** The idea of controlling tool access per Telegram conversation type (private vs. group vs. channel) is still a high-demand item. Given the security implications, it is a strong candidate for the next release roadmap. [Link](https://github.com/sipeed/picoclaw/issues/3114)

### 7. User Feedback Summary
- **Cross-platform Frustration:** The Windows path bug (#2472) highlights recurring friction for users on non-Linux platforms. The user expressed visible satisfaction with the closure of this issue.
- **Security Concern:** A user (v2up-32mb) clearly identified a risky gap in Telegram channel security, noting that group members could execute dangerous commands without restrictions. This is a high-priority pain point for community safety and enterprise adoption.
- **Encryption Transparency:** The Matrix crypto warning (#3194) shows a user confusion point—users expect clear error guidance when a feature (E2EE) is not enabled, rather than internal debug logs.

### 8. Backlog Watch
The current backlog is relatively healthy, with no critical issues left unattended for an extreme stretch. However, **Issue #3114** (Telegram permission control) and **Issue #2472** (Windows path) were both closed today, removing two of the longest-standing community concerns.

**Item to watch:**
- **Issue #3194** is only 1 day old but has zero comments and no assignee. If left uncommented by the maintainers for more than 72 hours, it should be flagged for triage to avoid it becoming a stale support ticket. [Link](https://github.com/sipeed/picoclaw/issues/3194)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-28

## Today's Overview
NanoClaw is in a **moderate activity phase** today, with **8 open pull requests** updated in the last 24 hours, suggesting active development but no immediate merges. A single open bug issue (#2868) is the focus of one of the new PRs (#2873), indicating responsive maintainer engagement. No new releases are recorded. The project appears to be in a **stabilization and bug-fix sprint**, with several cleanup and refactoring PRs from multiple contributors aging 7–8 days, hinting at potential review bottlenecks.

## Releases
**None** — No new versions published in the last 24 hours.

## Project Progress
No PRs were merged or closed in the last 24 hours. However, notable open PRs advancing the project include:
- **#2873** ([link](https://github.com/nanocoai/nanoclaw/pull/2873)) — Fix for `/update-skills` not refreshing code/deps, directly addressing bug #2868.
- **#2874** ([link](https://github.com/nanocoai/nanoclaw/pull/2874)) — Signal channel resilience improvement to prevent crash-looping during boot flaps.
- **#2872** ([link](https://github.com/nanocoai/nanoclaw/pull/2872)) — New feature: per-group model override for OpenCode agents via `container_configs.model`.
- **#2871** ([link](https://github.com/nanocoai/nanoclaw/pull/2871)) — New feature: dashboard pusher that sends state snapshots to a monitoring server.
- **#2822–#2824** ([link1](https://github.com/nanocoai/nanoclaw/pull/2822), [link2](https://github.com/nanocoai/nanoclaw/pull/2823), [link3](https://github.com/nanocoai/nanoclaw/pull/2824)) — Cleanup PRs removing stale mounts, startup-deleted CLAUDE.md, and outdated seed prompt instructions.

## Community Hot Topics
The only issue with activity is:
- **#2868** ([link](https://github.com/nanocoai/nanoclaw/issues/2868)) — *"/update-skills is a silent no-op for already-installed channels"* — **1 comment, 0 reactions**. Filed by `glifocat`, this bug breaks the documented migration path. It has attracted a fix PR (#2873) from the same author, indicating deep domain knowledge and a contributor-driven resolution path.

No other issues or PRs have comments or reactions today. Community engagement appears low, with no visible discussion outside the bug-fix track.

## Bugs & Stability
**Moderate severity** — One active bug:
- **#2868** (OPEN, updated 2026-06-27) — `/update-skills` silently skips code/dependency refresh for already-installed channels. This makes CHANGELOG migration instructions ("re-run `/add-<channel>`") ineffective. **PR #2873** provides a fix by splitting pre-flight checks from credential validation. No workaround documented.

No crashes, regressions, or other stability issues reported today.

## Feature Requests & Roadmap Signals
No explicit feature requests were filed today. However, two new capability PRs signal roadmap direction:
- **PR #2872** — Per-group model override for OpenCode agents, pointing to growing multi-model orchestration use cases.
- **PR #2871** — Dashboard pusher for real-time monitoring, suggesting a nascent observability/ops layer.

Given the age of the cleanup PRs (#2822–#2824, 8 days old) and the presence of new features, the next minor release may bundle these fixes with the OpenCode model override and dashboard features.

## User Feedback Summary
No direct user feedback or satisfaction signals were recorded in issues or PRs today. The single bug report (#2868) indicates **dissatisfaction with skill update reliability**, but it has been promptly addressed by a contributor. The lack of complaints about other features suggests general stability for most use cases.

## Backlog Watch
Three open PRs requiring maintainer attention due to age:
- **#2822** ([link](https://github.com/nanocoai/nanoclaw/pull/2822)) — `refactor(container-runner): drop dead /workspace/global mount` — **8 days old** (since 2026-06-20), updated 2026-06-27.
- **#2823** ([link](https://github.com/nanocoai/nanoclaw/pull/2823)) — `fix: remove groups/global/CLAUDE.md (host deletes it on every startup)` — **8 days old**, updated 2026-06-27.
- **#2824** ([link](https://github.com/nanocoai/nanoclaw/pull/2824)) — `fix: drop stale "Global Memory" instruction from main seed prompt` — **8 days old**, updated 2026-06-27.

These PRs have been reviewed twice (last update 7 days after initial creation) but remain unmerged. They address long-standing pain points (stale config, deleted files) and should be prioritized to unblock the cleanup trajectory.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-28

## 1. Today’s Overview
The project shows very low activity in the past 24 hours: one open issue from April remains without a maintainer response, and one new pull request was opened today. No new releases are available, and no PRs were merged or closed. The single new PR introduces a structured two-turn approval flow for agent tools, which is a significant architectural improvement, but overall the project appears to be in a maintenance-lull phase with low contributor engagement.

## 2. Releases
**None** — No new versions were published today. The latest known tag remains `v2026.4.17`.

## 3. Project Progress
- **No PRs were merged or closed today.**
- The only PR activity was a new submission, #969, which is still open.

## 4. Community Hot Topics
- **#968 [OPEN] — feat(agent): structured approval_request / approval_response flow** *(1 comment, 0 reactions)*  
  **URL:** https://github.com/nullclaw/nullclaw/pull/969  
  **Analysis:** This PR proposes a concrete two-turn mechanism for tools (starting with the shell tool) to request user approval via an SSE channel and await a structured response. The discussion is about the implementation pattern and UX. The underlying need is for safer execution of dangerous shell commands, a long-requested feature in personal AI assistants.

- **#868 [OPEN] — [bug] zig build fails on Android/Termux (aarch64) with AccessDenied on options.zig linkat** *(4 comments, 0 reactions)*  
  **URL:** https://github.com/nullclaw/nullclaw/issues/868  
  **Analysis:** This issue has been open for over two months with four comments, but no maintainer response yet. The user reports an `AccessDenied` error during Zig linking on Android ARM64. This indicates unmet demand for Android/Termux support, a growing platform for mobile AI agent usage.

## 5. Bugs & Stability
- **No new bugs were reported in the last 24 hours.**  
  The only active bug (issue #868) remains unresolved, with no fix PR linked.  
  **Severity:** Medium — blocks full usage on Android Termux, but limited to specific platform/environment combination.

## 6. Feature Requests & Roadmap Signals
- **Structured approval flow for tools** (PR #969) is the only feature request in active development.  
  **Prediction:** Likely to be included in the next minor release (v2026.5.x or v2026.6.x) as it addresses a core safety and usability concern. If merged, it will likely expand to cover all `ApprovalRequired`-raising tools.

- **No new feature requests were filed today.** User discussion is centered on refining the approval workflow rather than proposing new features.

## 7. User Feedback Summary
- **Pain point:** Android/Termux users (particularly on aarch64) cannot build or run NullClaw, as reported in issue #868. The lack of maintainer reply suggests frustration and potential abandonment of this use case.
- **Use case:** The PR #969 contributor is building a safe shell execution pattern, which aligns with a common user need — AI agents that can ask for human confirmation before running destructive commands.
- **Satisfaction/Dissatisfaction:** No positive or negative reactions on any items today. The community appears quiet, with no expressions of strong satisfaction or dissatisfaction observed in the last 24h.

## 8. Backlog Watch
- **Issue #868** — [bug] zig build fails on Android/Termux (aarch64)  
  **URL:** https://github.com/nullclaw/nullclaw/issues/868  
  **Status:** Open for 66 days (since 2026-04-23), no maintainer comment, 4 user comments, 0 reactions.  
  **Action needed:** This issue represents a significant backlog item that, if addressed, would improve platform coverage and community trust. A maintainer triage or workaround suggestion would be valuable.

- **Note:** No other long-unanswered issues or PRs were identified in today’s data.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the IronClaw project digest for 2026-06-28.

---

## IronClaw Project Digest — 2026-06-28

### 1. Today's Overview

The IronClaw project is experiencing **very high activity**, primarily driven by the final merge-chain for the "Reborn capability policy" epic (#5261). Over the last 24 hours, 50 pull requests were updated, with 22 being merged or closed, and 12 issues were updated, with 9 being closed. The core team is executing a focused push to land the four-dimension policy model (configuration, identity, approval, availability), which includes a new crate, DB-backed user roles, and admin REST surfaces. While no new releases were cut today, a pending release PR (#5311) signals an imminent version bump for several core crates.

### 2. Releases

**No new releases were published today.** However, a release PR ( [#5311](nearai/ironclaw PR #5311) ) is currently open, proposing the following version bumps:
- `ironclaw_common`: 0.4.2 -> 0.5.0 (⚠ API breaking changes)
- `ironclaw`: 0.24.0 -> 0.29.1
- `ironclaw_skills`: 0.3.0 -> 0.4.0 (⚠ API breaking changes)

This release will likely land shortly after the capability-policy merge chain is finalized.

### 3. Project Progress

Today saw the successful merge of the **complete capability-policy feature chain** for the Reborn stack (Epic #5261). This represents a major architectural milestone. The closed PRs in the merge chain include:

- [#5262](nearai/ironclaw PR #5262) (Merged): The core `ironclaw_capability_policy` crate, defining the four-dimension policy vocabulary and precedence cascade.
- [#5270](nearai/ironclaw PR #5270) (Merged): DB-backed user roles (Owner/Admin/Member) and an admin gate on the WebChat-v2 caller, a prerequisite for permission granting.
- [#5344](nearai/ironclaw PR #5344) (Merged): The policy engine including a durable delta store (`FilesystemCapabilityPolicyDeltaStore`) and resolvers for identity, config, and approval.
- [#5349](nearai/ironclaw PR #5349) (Merged): The "availability" dimension resolver, which makes per-user availability grants observable at the model dispatch point.
- [#5355](nearai/ironclaw PR #5355) (Merged): The control plane, adding REST routes for admin user creation and permission grants.

Other significant merges include a fix for hosted volume runtime startup ( [#5382](nearai/ironclaw PR #5382) ) and a pin of WebUI v2 frontend Node tooling to Node 22 ( [#5370](nearai/ironclaw PR #5370) ). A massive dependency update PR ( [#5271](nearai/ironclaw PR #5271) ) with 47 updates was also merged.

### 4. Community Hot Topics

- **Core Feature: Capability Policy (Epic #5261):** This is the dominant topic, with 8 related issues and 5 PRs all closed in the last 24 hours by author `zetyquickly`. This represents a massive, coordinated push to deliver fine-grained per-user authorization. The community (primarily core contributors) is deeply engaged in the design and implementation of this critical governance feature.
- **QA & Test Infrastructure:** Two large, open PRs from `serrrfirat` are building out the project's quality assurance framework: [#5380](nearai/ironclaw PR #5380) (expanding Reborn WebUIv2 QA matrix coverage) and [#5354](nearai/ironclaw PR #5354) (adding a live QA canary). This indicates a strong focus on ensuring stability ahead of a broader release.
- **Integration Test Framework:** PR [#5381](nearai/ironclaw PR #5381) from `henrypark133` introduces a new Reborn integration-test framework that runs in-process with real LLM and filesystem layers. This is a significant infrastructure improvement for preventing regressions.

### 5. Bugs & Stability

- **[HIGH] Google OAuth Token Refresh Failure** (Issue [#5378](nearai/ironclaw Issue #5378)): On `hosted-single-tenant` and `local-dev` profiles, Google OAuth tokens fail to refresh, forcing users to re-authenticate roughly every hour. This is a severe user-experience bug for any user of Gmail or Google Calendar tools. It is currently open with no linked fix PR.
- **[HIGH] Nightly E2E Test Failure** (Issue [#4108](nearai/ironclaw Issue #4108)): A long-standing issue noting a failure in the nightly end-to-end test suite, specifically in the "extensions" job. The issue has been open for a month and was last updated today, indicating it may be a recurring or ongoing stability problem.
- **[MEDIUM] Notion OAuth Redirect Bug in Railway** (Issue [#4928](nearai/ironclaw Issue #4928)): Notion MCP authorization generates a localhost callback URL when deployed on Railway, breaking the OAuth flow for users. This is closed, suggesting a fix has been identified or merged (likely as part of the broader Slack/OAuth pairing work in PR [#5362](nearai/ironclaw PR #5362)).
- **[LOW] Chat Retry Button Non-Functional** (PR [#5365](nearai/ironclaw PR #5365)): An open fix PR addresses the WebUI v2 chat Retry button, which was wired to a no-op stub and did not actually resend failed messages. The PR is open and under review.

### 6. Feature Requests & Roadmap Signals

- **Next Version:** The pending release PR ([#5311](nearai/ironclaw PR #5311)) indicates that the just-merged capability-policy model ([#5262](nearai/ironclaw PR #5262)) will be in the next release of `ironclaw_common`. This forms the foundation for the admin-grant features that follow.
- **Imminent Features:**
    - **Wire non-Slack channel pairing** (Issue [#5368](nearai/ironclaw Issue #5368)): A follow-up to the Slack pairing PR, this task aims to make the generic channel-onboarding UI work for non-Slack channels. This is likely to appear in a very near-future version.
    - **"Always allow eligible tools" as default** (Issue [#5364](nearai/ironclaw Issue #5364)): A simple feature request to flip the default toggle to "on," reducing friction for new users. This is a trivial change and could land in any upcoming hotfix or release.
    - **Add Capability Policy** (Issue [#5385](nearai/ironclaw Issue #5385)): A new open issue summarizing the state of the user role system (Owner/Admin/Member). This consolidates the requirements and serves as a roadmap item for the post-epic cleanup.

### 7. User Feedback Summary

While formal user feedback is sparse in the data, the **bugs** and **feature requests** reveal real pain points:
- **Pain Point: Frequent Re-authentication:** The Google OAuth failure (Issue [#5378](nearai/ironclaw Issue #5378)) is a clear source of user dissatisfaction on hosted deployments.
- **Pain Point: Broken OAuth Flow:** The Notion OAuth bug in Railway (Issue [#4928](nearai/ironclaw Issue #4928)) shows that third-party MCP server authorization still has rough edges in non-local environments.
- **User Preference: Reduced Prompts:** The feature request to make "Always allow eligible tools" the default (Issue [#5364](nearai/ironclaw Issue #5364)) signals a strong user desire for a less interruptive, more streamlined experience.
- **Correction/Clarification on Slack Pairing:** The large PR for Slack pairing ( [#5362](nearai/ironclaw PR #5362) ) hardens copy and error handling, suggesting the initial implementation had confusing or incomplete activation flows that users were reporting.

### 8. Backlog Watch

- **[HIGH PRIORITY] Issue #4108: Nightly E2E failed** (Updated 2026-06-27): This automated issue has been open for a month. A consistently failing nightly test (specifically in the "extensions" job) represents an ongoing stability risk. It requires investigation to determine if it is a flaky test or a genuine regression.
- **[MEDIUM PRIORITY] PR #4498: build(deps): bump serde_yml** (Updated 2026-06-27): A simple dependency bump that has been open for 23 days. While low risk, stale dependency PRs can accumulate and cause merge conflicts or block CI.
- **[MEDIUM PRIORITY] Issue #4928: Notion OAuth redirects to localhost** (Updated 2026-06-27): While this issue is marked as "CLOSED," a clear link to a fix PR is not present in the data. It would be prudent to verify that the fix is indeed merged and will be part of the next release.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — June 28, 2026

## 1. Today's Overview
LobsterAI shows moderate maintenance activity with 2 new issues and 8 PRs updated in the last 24 hours. The most noteworthy signal is that 7 of 8 PRs were closed (all stale PRs merged after months of inactivity), suggesting a backlog cleanup cycle is in progress. No new releases were published today. Two high‑severity issues were filed by the same reporter, one involving a 100% reproducible UI freeze during backup and another detailing an installation failure on Windows. The single open PR (#2065) remains under review for 31 days, which may indicate capacity constraints or slow decision-making.

## 2. Releases
**None.** No new versions or tags were published on June 28, 2026.

## 3. Project Progress — Merged/Closed PRs Today
Seven stale PRs were closed/merged, all from March–April 2026. These represent long-overdue fixes finally landing:

| PR # | Title | Area | Impact |
|------|-------|------|--------|
| #1001 | hotfix: add SSE & streaming HTTP MCP support | MCP Transport | Fixes MCP config not applying for non‑stdio transports |
| #1446 | fix(openclaw): gateway infinite restart loop | Gateway | Resolves race condition causing app‑level hang (issue #1400) |
| #1448 | fix(i18n): Agent page delete button & skill selector text in English | i18n | Internationalization gap in Agent settings |
| #1449 | feat(cowork): group recurring task session records | Cowork | Collapses repetitive scheduled task sessions in sidebar |
| #1453 | fix(skills): disabled skill still injected into prompts | Skills | Stops disabled skills from being invoked in dialogue |
| #1454 | fix(scheduled-tasks): no‑repeat mode date clear unresponsive | UI/Scheduled Tasks | Silent failure when clearing date field (issue #1437) |
| #1456 | fix(shortcuts): add duplicate keybinding detection | Shortcuts | Prevents silent overriding of keyboard shortcuts |

## 4. Community Hot Topics
No issues or PRs received any comments or reactions in the last 24 hours. The two open issues have 0 comments and 0 👍 each. The most commented PRs are all stale / already closed.

The open PR #2065 (`fix(agent): use short UUID for Agent ID`) has been active for 31 days without community interaction — it addresses a data‑resurrection bug where deleting an agent leaves orphan files that can be picked up by a new agent with the same name.

## 5. Bugs & Stability

| Issue | Severity | Description | Fix Status |
|-------|----------|-------------|------------|
| #2214 | **High** | Backup feature causes main process to freeze (100% reproducible on Windows 11 24H2 with a 71 MB WAL‑mode SQLite database). User must force‑kill the process. | No fix PR yet |
| #2215 | **Medium** | Installer fails with exit code `-2147450726` (ERROR_BAD_ENVIRONMENT). Root cause traced to a misleading installation path (C:\ vs G:\). User resolved via manual cleanup/relocation. | No fix PR yet |

**#2214** is particularly concerning: a built‑in “data backup” operation in the Settings → Data Migration panel makes the entire application unresponsive, requiring a forced termination — a stability regression.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests or roadmap items were filed today. Signals can be inferred from the merged PRs:

- **SSE and Streaming HTTP MCP support** (PR #1001) — MCP transport layer is being extended beyond stdio. Likely to appear in next minor release.
- **Scheduled task session folding** (PR #1449) — UI/UX improvement for recurring tasks. Suggests the team is polishing the scheduled‑task experience.
- **Agent ID via UUID** (PR #2065) — If merged, this breaking change would alter Agent ID semantics and affect data migration. It may land in a 2026.7.x release.

## 7. User Feedback Summary
The single reporter (woxinsj) submitted both issues today. Their pain points are concrete and indicate real‑world usage on heavily loaded systems:

- **Backup UI freeze (#2214):** “100% reproducible, user can only force‑kill the process.” The reporter has ~several hundred messages daily and uses a WAL‑mode database. The backup UI is clearly not designed for production‑scale data.
- **Installation failure (#2215):** A multi‑step investigation by the user revealed that NSIS installer placed files in a secondary drive (G:\) while C:\ contained an old, incomplete copy. The user had to manually read NSIS scripts to diagnose — indicating insufficient installation diagnostics.

No positive feedback or satisfaction signals were recorded.

## 8. Backlog Watch
The following items require maintainer attention:

| Item | Age | Why it matters |
|------|-----|----------------|
| **PR #2065** (open) | 31 days | Agent ID redesign — data resurrection bug, but also a potential breaking change. No reviewer comments since May 28. |
| **Issue #2214** (open) | 2 days | High‑severity UI freeze — no response from maintainers yet. |
| **Issue #2215** (open) | 1 day | Medium‑severity install failure — no response from maintainers yet. |

The organization merged 7 stale PRs today (fast), but the open PR #2065 has been blocked for a month. The imbalance suggests either the team prioritizes backlog cleanup over new‑feature review, or the UUID change is controversial.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Project Digest for Moltis – 2026-06-28**

---

### 1. Today's Overview
Activity on the Moltis repository remains moderate, with one new bug report and two open pull requests updated in the last 24 hours. No new releases were published today, indicating the project is in a steady refinement phase rather than a major launch window. The two open PRs both focus on improving robustness against non-standard model outputs, particularly from smaller local models, which aligns with ongoing efforts to support diverse inference backends. Overall, project health appears stable, with maintainers actively engaging with edge-case fixes.

---

### 2. Releases
No new releases were published today.

---

### 3. Project Progress
No PRs were merged or closed in the last 24 hours. However, two open pull requests saw updates:

- **PR #1136** [fix(agents): coerce stringified scalar tool args before validation](https://github.com/moltis-org/moltis/pull/1136) – Addresses an issue where smaller local models (e.g., Gemma 4, oMLX) output scalar tool arguments as JSON strings (e.g., `"true"` instead of `true`, `"5000"` instead of `5000`), causing pre-dispatch validation failures. The fix coerces these stringified values before validation.
- **PR #1098** [fix(browser): tolerate null optional params in browser tool calls](https://github.com/moltis-org/moltis/pull/1098) – Handles cases where smaller models explicitly set optional browser parameters to `null`, which `serde(default)` does not cover. This PR strips `null` values before deserialization to prevent validation errors.

Both PRs were authored by `resumeparseeval` and target the same underlying theme: hardening model output parsing for weaker or non-compliant LLMs.

---

### 4. Community Hot Topics
The most notable item today is the single new issue:

- **Issue #1137** [Bug: Apple Container ID exceeds name limit](https://github.com/moltis-org/moltis/issues/1137) – Logged by `holgzn`, this bug reports that Apple’s container identifier exceeds allowed name length limits, likely causing installation or runtime failures on macOS. The issue has 0 comments and no reactions yet, but it touches a core platform concern for macOS users.

No PRs have accumulated significant comments or reactions in the past 24 hours.

---

### 5. Bugs & Stability
One new bug was reported today:

- **Severity: Medium-High** – **Issue #1137** ([Apple Container ID exceeds name limit](https://github.com/moltis-org/moltis/issues/1137)): This bug could prevent Moltis from running or installing correctly on macOS environments that use long Apple container paths (e.g., sandboxed applications, managed devices). No fix PR exists yet. The bug affects platform compatibility and may impact a non-trivial macOS user base.

No crashes or regressions were reported today.

---

### 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed today. However, the two active PRs (#1136 and #1098) signal a strong roadmap focus on **post-hoc model output normalization** for smaller/weaker LLMs. This suggests that future versions of Moltis are likely to include a more robust inference-time data cleaning layer, potentially as a configurable middleware or pre-validator. Expect this to be a recurring theme in upcoming minor releases.

---

### 7. User Feedback Summary
The only direct user feedback today comes from the bug reporter in Issue #1137, who highlights a platform-specific pain point on macOS. The user filed a preflight checklist confirming they are on the latest version and searched for duplicates, indicating a reasonably engaged and conscientious user. The lack of comments suggests this may be an isolated edge case, but it points to a gap in platform testing for sandboxed macOS environments.

Overall sentiment appears neutral to positive, with users reporting edge-case issues rather than fundamental dissatisfaction.

---

### 8. Backlog Watch
No long-unanswered issues or PRs were identified in the current data window. The oldest open PR (#1098, filed June 3) has been updated today, indicating active maintainer attention. No items appear to be critically stalled.

---

*Generated from GitHub data for moltis-org/moltis on 2026-06-28.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-28

**Project:** CoPaw (github.com/agentscope-ai/CoPaw)  
**Analysis Date:** 2026-06-28  
**Overall Activity Level:** HIGH — 20 total items updated in last 24h (5 Issues, 15 PRs), indicating strong development momentum across bug fixes, testing, and feature work.

## Today's Overview

CoPaw remains in a period of intense development activity, with 15 Pull Requests updated in the last 24 hours and 5 Issues receiving attention. The project’s activity is concentrated in three key areas: **systematic unit-test coverage expansion** (7 test-focused PRs across backend and frontend, totaling an estimated 500+ test cases), **bug fixes for critical integration points** (DeepSeek V4 streaming errors, plugin installation failures on 2.0, Tauri desktop packaging), and **generalized platform infrastructure improvements** (governance policy patterns, Matrix channel streaming). Notably, 4 of the 5 open Issues are bug or question reports reflecting real user pain points with model connectivity and data persistence, while only 1 Issue was closed (a test-tracking feature). The project has **no new releases** in this window, suggesting the team is consolidating a stable 2.0 baseline before cutting a new version. The volume of test-only PRs (7 from contributor `hanson-hex` alone) signals a deliberate quality-assurance push.

## Releases

**No new releases in this reporting window.** The last available version context from Issues suggests `QwenPaw 1.1.12.post2` (agentscope 1.0.20, openai SDK 2.33.0) is the current deployed baseline, with a 2.0 migration in progress (#4846).

## Project Progress

**Merged/Closed PRs Today:** 1 PR was closed/merged.

- **#5213 [CLOSED] fix(console): improve MCP access policy layout** — *Author: xiaoming-qxm* — A UI fix improving MCP client card action alignment across viewports and enhancing responsive behavior for permission modals. Includes source-scoped access principal discovery. This matches overall UX polish efforts.

**Active PRs Showing Significant Advancement:**

- **#5582 [OPEN] fix(providers): recover streaming reasoning_content errors** — *Author: wananing* — Directly addresses #5573 (DeepSeek V4 streaming bug). Extends error handling for `reasoning_content` 400 errors from the non-streaming path into the streaming `_wrap_stream` path. Critical for DeepSeek V4 compatibility on third-party endpoints.

- **#5568 [OPEN] fix(plugins): fix official plugin installation failures on QwenPaw 2.0** — *Author: wangfei010313* — Fixes all 5 official plugins failing to install from CDN catalog due to agentscope 2.x breaking changes post-migration (#4846). A hard blocker for plugin ecosystem on 2.0.

- **#5585 [OPEN] feat(channels): matrix Add Streaming Mode Like Discord in Matrix** — *Author: Morxi* — Adds TTFT-based streaming reply behavior to the Matrix channel, reducing perceived latency.

- **#5581 [OPEN] test(unit): app-infra backend unit tests (W3 sprint, 11 cases)** — *Author: hanson-hex* — Adds tests for `agent_context`, `console_push_store`, `workspace_migration`. Closes #5580.

- **#5578 [OPEN] fix(ci): remove bootstrap after Tauri initialization** — *Author: jinglinpeng* — Fixes Tauri desktop verification flow on Windows and macOS by removing `BOOTSTRAP.md` after sidecar initialization completes. Addresses CI packaging bugs.

## Community Hot Topics

### Most Active Issues

1. **#5573 [BUG] DeepSeek V4 thinking mode 400 errors** — *Author: Zhanyuan23333* — **2 comments.** The user reports streaming `reasoning_content` missing and tool Schema null type failures on OpenAI-compatible proxy endpoints for DeepSeek V4 Flash/Pro. User provided a fix suggestion (non-Python programmer) that worked in their setup. **PR #5582 directly addresses this.** This is the most technically significant bug report due to DeepSeek V4’s popularity.

2. **#5584 [QUESTION] Cannot connect custom ascend-vllm model** — *Author: nysand-py* — **1 comment.** Model worked in v1.1.7 but fails in later versions for custom vLLM endpoints. User reports `APIConnectionError` despite tests passing in model configuration UI. Regression signal.

3. **#5579 [BUG] Conversation records lost under abnormal interruption** — *Author: tecgic* — **1 comment.** Two critical scenarios: (1) Agent executing `reboot`/`shutdown` causes full conversation loss; (2) Service crash leads to data loss. User describes system as "very fragile." No existing fix PR.

4. **#5583 [QUESTION] Chat interface right-side popup default selection background unclear** — *Author: gy23rm* — **1 comment.** Minor UI complaint, low complexity to fix.

### Most Active PRs (by comments)

All PRs have `undefined` comment counts in the data, but the most discussed are likely:

- **#5582** (fix for #5573) — drawing attention from affected DeepSeek V4 users.
- **#5568** (plugin installation fix) — affecting all users trying to install official plugins on 2.0.
- **#5321** (scroll context manager) — a higher-risk feature with reviewer discussion likely.

### Underlying Needs
- **DeepSeek V4 third-party proxy compatibility** is the most urgent community need, touching both streaming and tool-calling paths.
- **Plugin ecosystem restoration on 2.0** is a silent blocker; users cannot install plugins from the official catalog.
- **Data persistence guarantees** are a fundamental trust issue — users losing conversations on reboot or crash is a high-friction UX failure.

## Bugs & Stability

### High Severity

| Issue | Description | Status | Fix PR Exists? |
|-------|------------|--------|----------------|
| **#5573** | DeepSeek V4 streaming 400 errors on third-party proxies (reasoning_content missing, null tool Schema) | **OPEN** | ✅ **PR #5582** open |
| **#5579** | Full conversation loss on agent-triggered reboot or service crash — no checkpoint persistence | **OPEN** | ❌ No fix PR |
| **#5584** | Custom ascend-vLLM model connection broken since v1.1.7 on QwenPaw 2.0 | **OPEN** | ❌ No fix PR |

### Medium Severity

| Issue | Description | Status | Fix PR Exists? |
|-------|------------|--------|----------------|
| **#5568** (PR) | All 5 official plugins fail to install from CDN on QwenPaw 2.0 | PR **OPEN** | ✅ Self-referencing fix |
| **#5578** (PR) | Tauri desktop packaging broken on Windows/macOS clean runners | PR **OPEN** | ✅ Self-referencing fix |

### Low Severity

| Issue | Description | Status |
|-------|------------|--------|
| **#5583** | Chat UI popup default selection background lacks contrast | **OPEN** |

**Stability Assessment:** The DeepSeek V4 issue (#5573) has a fix in review (#5582), which is good. However, the conversation data loss (#5579) and ascend-vLLM regression (#5584) have **no active fix PRs**, representing gaps in stability response. The plugin installation failure (#5568) is being addressed but hasn't merged.

## Feature Requests & Roadmap Signals

### User-Requested Features (from Issues)

1. **Conversation checkpoint/save-on-interrupt mechanism** (#5579) — The user explicitly requests a "断点保存机制" (checkpoint persistence) to survive crashes, reboots, and service restarts. Given the severity, this could become a **2.1 priority**.

2. **Model provider flexibility for custom vLLM / ascend endpoints** (#5584) — Multiple users rely on non-standard endpoints. The regression indicates the new model configuration system may have lost backward compatibility for custom provider configurations.

### Active Feature Work (from PRs)

3. **Matrix streaming support** (#5585) — Adding Discord-like streaming to Matrix. Likely targeting next minor release.

4. **Scroll context manager** (#5321) — A durable SQLite-backed conversation history with Python REPL recall. This is a major architectural feature, possibly targeting **2.1** given its scope and review duration.

5. **Generalized governance policy pattern** (#5546) — Infrastructure-level abstraction for access control policies. Suggests enterprise/compliance roadmap.

6. **DataPaw plugin** (#4622) — 12 BI skill data-analysis plugin, under review since May 22, 2026. Could ship in next release if finalized.

### Prediction for Next Version
- **Definite:** Fixes for DeepSeek V4 streaming, plugin installation on 2.0, Tauri packaging.
- **Likely:** Matrix streaming, accumulated test-coverage improvements.
- **Possible (but pending review):** DataPaw plugin, scroll context manager (larger risk, may slip).

## User Feedback Summary

### Real Pain Points

1. **"Conversation records disappear entirely"** — tecgic (#5579) describes two failure modes (reboot + crash) as making the system "非常脆弱" (very fragile). This is a **trust-damaging** issue — users cannot rely on conversation continuity.

2. **"I am not a Python programmer"** — Zhanyuan23333 (#5573) worked around a DeepSeek streaming bug using documentation from doubao2.1pro (a Chinese LLM). This indicates **user-side debugging effort** that should not be necessary — the project needs better error handling for third-party proxies.

3. **"QwenPaw always reports model connection error"** — nysand-py (#5584) tested successfully in model config UI but gets runtime `APIConnectionError`. The configuration testing **gives false confidence** — it passes but runtime fails.

4. **"Official plugins cannot be installed"** — Implicit in PR #5568, affecting all users upgrading to 2.0 who try to add tools from the catalog.

### Satisfaction Signals
- The high number of test PRs (7 from `hanson-hex`) suggests **internal investment in quality**, a positive signal for long-term stability.
- No negative release feedback, as there were no new releases.
- Active community contributions (first-time contributors: `hellozhouuu`, `niceIrene`, `EliasMei`) indicate a **healthy open-source community**.

## Backlog Watch

### Issues Needing Maintainer Attention

| Issue | ID | Age | Status | Risk |
|-------|----|-----|--------|------|
| **User cannot connect custom vLLM endpoint** | #5584 | 1 day | **No response from maintainers** | ⚠️ User blocked; functionality regression |
| **Conversation data lost on crash/reboot** | #5579 | 1 day | **No fix PR, no maintainer comment beyond user** | 🔴 Data loss escalates to project reliability reputation |
| **DeepSeek V4 third-party streaming broken** | #5573 | 2 days | PR #5582 open but no merge yet | 🟡 Popular model; community trust at risk |
| **Plugin installation on 2.0 broken** | PR #5568 | 2 days | Open PR, no merge | 🟡 Blocks plugin ecosystem adoption |

### PRs That May Need Review

| PR | ID | Age | Status | Concern |
|----|----|-----|--------|---------|
| **DataPaw plugin — 12 BI skills** | #4622 | **37 days** | Open, "Under Review" | Longest-open non-test PR; may have scope/design blockers |
| **Scroll context manager** | #5321 | **9 days** | Open, "Under Review" | Large feature; may need architectural sign-off |
| **Governance policy pattern** | #5546 | 2 days | Open, no reviewer comments yet | Infrastructure change; needs security review |

**Notable:** The **DataPaw** plugin (#4622) has been open for over a month ("Under Review" since May 22). If it’s stuck due to scope or API design disagreements, maintainers should communicate timeline expectations to the contributor.

*End of digest.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-28

## Today's Overview

ZeroClaw is experiencing a high-activity day with **46 updated issues** (34 open/active, 12 closed) and **50 updated pull requests** (47 open, 3 merged/closed), indicating strong development momentum. No new releases were published today. The project is actively executing against two major milestone tracks — **v0.8.3** (runtime execution, agent loop, WASM plugins, skills) and **v0.9.0** (auth, security, gateway, breaking changes) — with significant RFC activity around supply chain security, plugin architecture, and goal-mode agent behavior. The community is engaged with several high-comment threads on memory management, context budgeting, and Telegram prompt caching issues. Overall project health appears robust with systematic tracker-driven development.

## Releases

No new releases were published today. The latest tracked releases remain focused on the v0.8.x and v0.9.0 milestone trains.

## Project Progress

**Merged/Closed PRs (3 total):**
- No specific PR merges were identified in detail from the top 20 items; the 3 closed/merged PRs are not captured in the top-comment subset.

**Key PRs advancing today:**
- **[PR #8389](https://github.com/zeroclaw-labs/zeroclaw/pull/8389)** — Adds passive WhatsApp group context, implementing the feature requested in issue #8379, with first-class channel message fields for history-only message handling
- **[PR #8400](https://github.com/zeroclaw-labs/zeroclaw/pull/8400)** — Wires SOP cron triggers into the daemon maintenance tick, giving configured SOP cron triggers a production caller
- **[PR #8391](https://github.com/zeroclaw-labs/zeroclaw/pull/8391)** — Adds daemon SOP maintenance tick (EPIC A1), activating the fail-closed approval timeout
- **[PR #8399](https://github.com/zeroclaw-labs/zeroclaw/pull/8399)** — Implements live SOP action executor for `ExecuteStep`, `sop_advance`, and audited approvals
- **[PR #8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384)** — Adds Inkbox as a native channel (email, SMS, voice, iMessage) with Quickstart onboarding
- **[PR #8343](https://github.com/zeroclaw-labs/zeroclaw/pull/8343)** — Fixes release workflow to use canonical cargo registry instead of hardcoded feature payloads
- **[PR #8335](https://github.com/zeroclaw-labs/zeroclaw/pull/8335)** — Makes skills install/list/remove bundle-aware, fixing multi-agent runtime path resolution
- **[PR #8277](https://github.com/zeroclaw-labs/zeroclaw/pull/8277)** — Adds SLSA Build L3 provenance attestation to release pipeline
- **[PR #8176](https://github.com/zeroclaw-labs/zeroclaw/pull/8176)** — Adds monthly cargo outdated dependency scan workflow

**Closed Issues (12 total, all from `arun-raze19`):**
- Issues [#8371](https://github.com/zeroclaw-labs/zeroclaw/issues/8371) through [#8378](https://github.com/zeroclaw-labs/zeroclaw/issues/8378) — All closed as `invalid` and represent the complete bootstrap and user story implementation for a `dms-gst-agent` subsidiary project (GST extraction from DMS systems), comprising Phase 1/2 bootstrap and User Stories 1-6 plus documentation.

## Community Hot Topics

**Most Active Issues by Comment Count:**

1. **[Issue #8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)** (10 comments) — **RFC: Supply chain signing** — Proposes hardware PGP keys, multi-party quorum, offline signing, and SLSA provenance for container images and release binaries. This is a high-risk, high-importance RFC expanding Phase 3 of the hardened CI pipeline. Reflects community demand for enterprise-grade security.

2. **[Issue #5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844)** (7 comments, CLOSED) — **Memory emphasis bug** — Users report the system prompt gives too much priority to memories over current context, especially in cron jobs. Closed with accepted status, indicating resolution was reached.

3. **[Issue #5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)** (6 comments, OPEN) — **Context budget exceeded** — Default 32K context budget is overwhelmed by system prompt + tool definitions on first iteration, causing perpetual preemptive trimming. Severity S1 (workflow blocked) — a critical usability issue.

4. **[Issue #6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360)** (4 comments, OPEN) — **Prompt caching broken on Telegram** — Works over CLI but not Telegram channel, forcing full re-processing. Indicates channel-specific caching implementation gaps.

5. **[Issue #8058](https://github.com/zeroclaw-labs/zeroclaw/issues/8058)** (4 comments, OPEN) — **CI: cosign signing, SLSA provenance, SBOM** — Split from RFC #7675, focusing on release-tag-only supply chain hardening. Aligns with #8177 discussion.

**Most Active PRs:**
- **[PR #8389](https://github.com/zeroclaw-labs/zeroclaw/pull/8389)** — Large passive WhatsApp group context feature; highest PR visibility today
- **[PR #8344](https://github.com/zeroclaw-labs/zeroclaw/pull/8344)** — Fixes stable-pointer tag check in CI, preventing deploy failures on version bumps
- **[PR #8343](https://github.com/zeroclaw-labs/zeroclaw/pull/8343)** — Release artifact build from canonical registry; addresses configuration drift

**Underlying Needs:** The community is signaling strong demand for (1) **supply chain security** (SLSA, signing, provenance), (2) **prompt/memory system fixes** (context budgeting, memory prioritization, prompt caching), and (3) **channel-specific feature parity** (Telegram caching, WhatsApp group context).

## Bugs & Stability

**S1 - Workflow Blocked (Critical):**
- **[Issue #5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)** — Default 32K context budget exceeded by 3.3x on first iteration. No fix PR identified yet. This is a systemic blocking issue for all new users with default config.

**S2 - Degraded Behavior (High):**
- **[Issue #6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360)** — Telegram prompt caching broken, forcing full re-processing. Open, accepted, no fix PR yet.
- **[Issue #8047](https://github.com/zeroclaw-labs/zeroclaw/issues/8047)** (CLOSED) — `ReadSkillTool` looked in wrong directory (`data_dir` vs agent workspace). Closed with resolution.
- **[Issue #6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434)** (CLOSED) — Shell tool calls refused at `autonomy level = "full"` — never reaching runtime. Closed with accepted status.

**Today's New Bugs:**
- No new critical/blocking bugs were filed today; the bug queue shows continued progress on existing issues.

## Feature Requests & Roadmap Signals

**High-Impact RFCs and Feature Requests:**

1. **[Issue #8398](https://github.com/zeroclaw-labs/zeroclaw/issues/8398)** — **RFC: Plugin permission, config, and secrets model** — Filed today, addresses coarse-grained `PluginPermission` enum with open questions on fine-grained capabilities. Likely for v0.8.3 WASM plugin program.

2. **[Issue #8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396)** — **RFC: Wire-Protocol-First Provider Model** — Filed today, proposes restructuring provider architecture around wire API as primary organizing axis. Potentially for v0.9.0 milestone.

3. **[Issue #8397](https://github.com/zeroclaw-labs/zeroclaw/issues/8397)** — **Per-cron-job `uses_memory` flag** — Expose existing but undocumented flag in CLI and tools. Small enhancement, likely fast-tracked.

4. **[Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)** — **RFC: Goal mode** — First-class durable mode for pursuing one objective until completion/budget exhaustion. Supported by companion ADR [PR #8393](https://github.com/zeroclaw-labs/zeroclaw/pull/8393).

5. **[Issue #8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138)** — **OpenRouter model fallbacks** — Add `fallback_models` config field for automatic failover. In-progress, likely v0.8.3.

6. **[Issue #8379](https://github.com/zeroclaw-labs/zeroclaw/issues/8379)** — **WhatsApp passive group context** — Filed yesterday, already implemented in [PR #8389](https://github.com/zeroclaw-labs/zeroclaw/pull/8389) today. Rapid turnaround.

**Prediction for Next Version (v0.8.3):** Goal mode, OpenRouter fallbacks, WASM component-model host, passive WhatsApp context, SOP maintenance infrastructure, and skills bundle-awareness are strong candidates.

## User Feedback Summary

**Pain Points:**
- **Context budget management** (#5808): Default 32K tokens is insufficient for first iteration — users are blocked out of the box.
- **Memory system** (#5844): Excessive memory emphasis over current prompt context, especially in cron jobs — degrades output quality.
- **Channel inconsistency** (#6360): Telegram vs CLI experience differs significantly due to missing prompt caching.
- **Installation/documentation** (#8378, closed): Operator documentation polish was needed for quickstart flow — addressed in `dms-gst-agent`.
- **Skills management** (#8047, #8335): Skills installed via CLI couldn't be found by multi-agent runtime — path resolution bugs.

**Satisfaction Signals:**
- Active RFC engagement with well-structured proposals indicates a mature, engaged community.
- Rapid implementation turnaround (WhatsApp feature issue → PR same day) shows responsive maintainers.
- Systematic tracker-based milestone management (v0.8.3 and v0.9.0 trackers) suggests organized development.

## Backlog Watch

**Issues Needing Maintainer Attention:**

1. **[Issue #5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)** — **Default 32K context budget exceeded** (S1, 6 comments, open since April 16). No fix PR attached. This is a first-run blocker for all new users — priority escalation recommended.

2. **[Issue #5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844)** — **Memory emphasis bug** (CLOSED, but was high-risk P1). Verify the fix is effective and documented.

3. **[Issue #4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879)** — **Gemini CLI OAuth** (CLOSED, but was S1 workflow blocked). Verify the fix prevented recurrence.

4. **[Issue #6966](https://github.com/zeroclaw-labs/zeroclaw/pull/6966)** — **Prompt/completion capture on LLM spans** (OPEN PR, needs-author-action, stale-candidate). Community contributor's work awaits upstream review.

5. **[Issue #5187](https://github.com/zeroclaw-labs/zeroclaw/pull/5187)** — **arm64 Docker target** (OPEN PR, needs-author-action, since April 2). Long-standing feature request without resolution.

6. **[Issue #4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467)** — **MCP resource and prompt support** (OPEN, 3 comments, since March 24). In-progress but has high community interest (4 thumbs up).

---

*Digest generated from GitHub data for 2026-06-28. All links point to zeroclaw-labs/zeroclaw on GitHub.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*