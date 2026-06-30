# OpenClaw Ecosystem Digest 2026-06-30

> Issues: 374 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-30 00:27 UTC

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

Here is the OpenClaw project digest for June 30, 2026.

---

## OpenClaw Project Digest: 2026-06-30

### 1. Today's Overview
OpenClaw is in a period of extremely high activity, processing 374 issues and 500 pull requests updated in the last 24 hours. The project maintains a strong forward momentum, evidenced by a large volume of open PRs (447) alongside a steady stream of closed/merged work (53). However, the sheer volume of open work and the density of new, critical bug reports suggest the project is currently in an intensive stabilization and beta-quality phase. The maintainer team is clearly under significant review load, as a majority of high-priority issues and PRs are tagged with labels like `needs-maintainer-review` or `waiting on author`.

### 2. Releases
**None.** No new releases were published on this date.

### 3. Project Progress
Today saw 53 pull requests closed or merged, indicating a healthy, continuous delivery cadence. Notable advances include:
- **Major Infrastructure:** PR [#96625](https://github.com/openclaw/openclaw/pull/96625) (by jalehman) is a massive, long-running refactor to flip sessions and transcripts to SQLite storage, a foundational change for performance and reliability.
- **Critical Bug Fixes:** PR [#97837](https://github.com/openclaw/openclaw/pull/97837) (by chenyangjun-xy) was merged to fix a critical deadlock where session write locks blocked overflow-recovery compaction, addressing issue [#97747](https://github.com/openclaw/openclaw/pull/97747).
- **Platform/Channel Improvements:** PR [#97713](https://github.com/openclaw/openclaw/pull/97713) (by zw-xysk) enhances `NO_PROXY` matching for the global HTTP dispatcher, fixing a bug where internal plugin requests were incorrectly routed through a proxy. PR [#95718](https://github.com/openclaw/openclaw/pull/95718) (by jesse-merhi) adds native reply quotes for the Signal channel.
- **Documentation & Tooling:** PR [#97959](https://github.com/openclaw/openclaw/pull/97959) (by hannesrudolph) adds a "Release Notes" page placeholder to the docs.

### 4. Community Hot Topics
The community is heavily focused on stability, security, and multi-platform support.
- **#75: "Linux/Windows Clawdbot Apps"** — With 110 comments and 81 👍, this is the most engaged issue. It is a long-running feature request for desktop applications on platforms other than macOS. This signals a strong community desire for a fully native, cross-platform experience.
- **#94518: "DeepSeek cache hit rate <10% after 6.x upgrade"** — With 8 👍 and 6 comments, this is a hot performance regression. Users relying on DeepSeek's caching for cost efficiency are being directly impacted by the new "boundary-aware caching" introduced in a recent upgrade. The underlying need is for predictable and efficient API usage.
- **#79077: "Support for Telegram bot-to-bot and guest-bot modes"** — With 8 👍 and 8 comments, this feature request is in direct response to Telegram's May 2026 platform release. The community is eager for OpenClaw to support the latest platform capabilities for interoperability and multi-bot setups.
- **#86538: "Session write-lock timeouts block subagent delivery lanes"** — This high-severity bug with 18 comments is a major pain point for users running complex multi-agent configurations, as it causes silent delivery failures. The underlying need is for robust, non-blocking concurrency in the agent runtime.

### 5. Bugs & Stability
The project is experiencing a high volume of incoming bug reports, including several critical regressions and blockages.

**Critical/Priority 1 (P1) Issues:**
- **Session & Message Loss:**
    - [#86538](https://github.com/openclaw/openclaw/issues/86538): "Session write-lock timeouts block subagent delivery lanes."
    - [#80520](https://github.com/openclaw/openclaw/issues/80520): "Telegram messages silently dropped, no sendMessage logged."
    - [#86572](https://github.com/openclaw/openclaw/issues/86572): "Hoist withOwnedSessionTranscriptWrites ALS scope" — A race condition causing `EmbeddedAttemptSessionTakeoverError`.
- **Authentication & Authorization Failures:**
    - [#74586](https://github.com/openclaw/openclaw/issues/74586): "AM embedded run aborts memory_search tool calls; classifies as timeout."
    - [#91363](https://github.com/openclaw/openclaw/issues/91363): "Isolated cron consistently fails with 'LLM request failed'."
    - [#82662](https://github.com/openclaw/openclaw/issues/82662): "Isolated cron agentTurn fails with 'setup timed out before runner start'."

**New Critical Bug:**
- **[#97877](https://github.com/openclaw/openclaw/issues/97877)** (created 2026-06-29): "empty-error-retry blocked by hadPotentialSideEffects — silent terminal failure on transient 5xx after any prior tool call." This appears to be a brand new, high-severity bug that prevents retrying transient server errors if a session has already used a tool, leading to silent failures.

**Regression Reports:**
- [#95121](https://github.com/openclaw/openclaw/issues/95121): "Codex OAuth/Appserver turns spend ~28s after prompt.submitted" — A significant performance regression for gpt-5.5 on the latest 6.6.8 version.
- [#94518](https://github.com/openclaw/openclaw/issues/94518): The DeepSeek cache degradation is another confirmed performance regression.

### 6. Feature Requests & Roadmap Signals
Based on active requests, the next version is likely to focus on:
- **Platform Expansion:** [#75](https://github.com/openclaw/openclaw/issues/75) (Linux/Windows apps) is a primary signal. Progress on this would be a major landmark.
- **Plugin SDK Maturation:** Multiple issues ([#80213](https://github.com/openclaw/openclaw/issues/80213), [#81913](https://github.com/openclaw/openclaw/issues/81913), [#80188](https://github.com/openclaw/openclaw/issues/80188)) request a stable, well-defined SDK for skill and plugin authors. This suggests the core team may be formalizing this surface.
- **Channel Feature Parity:** Requests for Telegram's new bot-to-bot mode ([#79077](https://github.com/openclaw/openclaw/issues/79077)) and Discord slash command i18n ([#79458](https://github.com/openclaw/openclaw/issues/79458)) show a focus on closing feature gaps with native platform capabilities.
- **Onboarding & Configuration:** [#81960](https://github.com/openclaw/openclaw/issues/81960) asks for multiple provider/model configuration during onboarding, indicating a need to streamline the first-time user experience for power users.

### 7. User Feedback Summary
User sentiment is mixed. There is strong enthusiasm for the project's capabilities, as seen in the many feature requests and long-standing discussions. However, there is significant frustration with stability, particularly around regressions in the latest releases.
- **Pain Points:** Silent message loss, non-deterministic job statuses, session timeouts, and performance regressions are the most common complaints. Users feel these issues degrade trust, especially for agent workflows that require reliability.
- **Dissatisfaction Drivers:** The prevalence of `regression`-tagged bugs indicates that updates are introducing instability. Many users are reporting issues like "worked before, now fails," which erodes confidence.
- **Use Cases:** The most vocal users are running complex, multi-agent systems, using Telegram/Discord bots, and leveraging DeepSeek models for cost efficiency. Cron jobs and automated background tasks are a major use case being impacted by bugs.

### 8. Backlog Watch
A significant number of high-priority issues and PRs have been stale for over a month, bottlenecked by `needs-maintainer-review` or `needs-product-decision` labels, indicating a strained review capacity.
- **High-Value Feature PRs Stalled:**
    - [#81397](https://github.com/openclaw/openclaw/pull/81397) (P1): "fix(agents): repair persisted tool result pairing" — Fixes data integrity in session files.
    - [#81164](https://github.com/openclaw/openclaw/pull/81164) (P2): "feat(context-engine): add interceptCompaction contract" — A key architectural feature for plugin developers.
- **Critical Bug Fix PRs Waiting for Review:**
    - [#97875](https://github.com/openclaw/openclaw/pull/97875): "fix(telegram): deliver durable reasoning when enabled" — A P2 PR that addresses user complaints of missing reasoning output.
    - [#89100](https://github.com/openclaw/openclaw/pull/89100): "fix(telegram): handle complex caption+media payloads" — Fixes a long-standing parsing issue.
    - [#78981](https://github.com/openclaw/openclaw/pull/78981) (P2): "Add su-backed user sandbox backend" — A major security enhancement that has been waiting on author review for nearly two months.
- **Legacy Stale Issues:**
    - [#81061](https://github.com/openclaw/openclaw/issues/81061) (P2): "Hook: before_route_inbound_message" — Still an open feature request from May 12, now marked as `stale`.
    - [#80176](https://github.com/openclaw/openclaw/issues/80176) (P3): "[Codex×Pi parity Phase 5] JSONL session-replay harness" — A significant testing infrastructure improvement that has not seen movement in over a month.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report
**Date:** 2026-06-30

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing a **concentrated maturation phase**, with major projects like OpenClaw, Hermes Agent, and ZeroClaw operating at extremely high velocity while addressing stabilization challenges from rapid prior growth. The landscape is bifurcating between **general-purpose agent frameworks** (OpenClaw, Hermes, ZeroClaw) that prioritize multi-channel, multi-model orchestration, and **specialized or lightweight alternatives** (NanoBot, PicoClaw, NullClaw) targeting specific niches like ultra-lightweight deployment or constrained hardware. A clear pattern emerges across all active projects: **reliability, cost optimization, and provider compatibility** have overtaken feature expansion as the dominant community concerns. The ecosystem shows healthy contributor diversity, with Chinese and Western maintainer teams both prominent, though review bottlenecks are a universal constraint.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Status | Health Score |
|---|---|---|---|---|
| **OpenClaw** | 374 | 500 | None (beta stabilization) | ⚠️ High activity, but critical regressions and review backlog |
| **Hermes Agent** | 50 | 50 | None (hardening phase) | ⚠️ Strong velocity, systemic unbounded-read vulnerabilities |
| **ZeroClaw** | 50 | 50 | None (v0.8.3 prep) | ✅ High output, structured milestone trackers |
| **LobsterAI** | 11 | 40 | **v2026.6.29 released** | ✅ Major release finalized, stabilization mode |
| **CoPaw** | 29 | 50 | None (v2.0.0-beta.1 checklist active) | ✅ Sprint phase, imminent major release |
| **NanoBot** | 7 | 32 | None (active dev) | ✅ Responsive security patches, focused progress |
| **NanoClaw** | 0 | 7 | None (steady dev) | ✅ Low noise, targeted improvements |
| **PicoClaw** | 3 | 3 | v0.2.9 (latest) | ⚠️ Low velocity, stale PRs accumulating |
| **IronClaw** | 14 | 50 | None (release staged) | ✅ Very high Reborn v2 migration activity |
| **NullClaw** | 0 | 4 | None (low activity) | ✅ Stable, zero open issues |
| **TinyClaw** | 0 | 0 | No activity | — |
| **Moltis** | 0 | 0 | No activity | — |
| **ZeptoClaw** | 0 | 0 | No activity | — |

**Notes:** Health Score considers activity volume, bug severity, backlog trends, and release cadence. OpenClaw's raw numbers are the highest, but the proportion of `needs-maintainer-review` labels and critical P1 regressions lowers its effective health.

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale and ecosystem breadth:** OpenClaw's 374 issues and 500 PRs updated in 24 hours surpasses every other project by an order of magnitude. It is the clear **center of gravity** for the ecosystem, with the largest contributor base and widest feature surface (Signal, Telegram, Discord, plugin SDK, SQLite storage refactor).
- **Community engagement:** The most-commented issue (#75, 110 comments) demonstrates sustained interest in platform expansion. No other project matches this depth of community discussion.
- **Architecture maturity:** The ongoing SQLite session storage refactor (PR #96625) and boundary-aware caching (DeepSeek, #94518) indicate investments in foundational performance that competitors have not yet attempted.

**Technical Approach Differences:**
- Unlike **NanoBot** (ultra-lightweight Python) or **NullClaw** (minimal CLI focus), OpenClaw is a **full-stack, multi-platform runtime** supporting desktop apps, multiple messaging channels, and complex subagent orchestration.
- Compared to **Hermes Agent**, OpenClaw's plugin SDK approach is more formalized (though still maturing, per issue #80213), while Hermes relies on MCP and tool-based extensibility.
- Unlike **ZeroClaw** (Rust-based, WASM plugin focus), OpenClaw is primarily Python/TypeScript, which affects performance characteristics and deployment footprint.

**Community Size Comparison:**
- OpenClaw's 81 👍 on issue #75 alone exceeds the total engagement on most other projects' top issues. However, **volume does not equal satisfaction**—the high regression rate (e.g., DeepSeek cache, session write-lock timeouts) indicates the community may be growing faster than the maintainer team can stabilize.

**Risk:** OpenClaw's biggest vulnerability is **review bottleneck fatigue**. The sheer volume of open work (447 open PRs) with many tagged `needs-maintainer-review` suggests contributor momentum could stall if the core team cannot scale.

---

## 4. Shared Technical Focus Areas

The following requirements are emerging consistently across multiple projects, signaling ecosystem-wide priorities:

| Focus Area | Affected Projects | Specific Needs |
|---|---|---|
| **Provider Reliability & Fallback** | OpenClaw, Hermes, CoPaw, ZeroClaw, PicoClaw | DeepSeek cache degradation (OpenClaw #94518, CoPaw #3891); vision fallback kwarg regression (Hermes #35876); automatic model fallback (CoPaw #5572); kimi-code streaming errors (ZeroClaw #5600) |
| **Multi-Channel & Platform Parity** | OpenClaw, NanoClaw, PicoClaw, ZeroClaw, IronClaw | Telegram bot-to-bot mode (OpenClaw #79077); Discord adapter (NanoClaw #2884); SimpleX/Tox gateways (PicoClaw #3093); Slack Socket Mode (NanoClaw #2885); WhatsApp Gateway (Hermes #49242); Inkbox channel (ZeroClaw PR #8384) |
| **Security Hardening** | Hermes, NanoBot, NanoClaw, ZeroClaw | Unbounded response body caps (Hermes, 5+ open issues); symlink container escape (NanoClaw #2828/2880); session file integrity (OpenClaw #81397); WASM plugin mutex safety (ZeroClaw #8149) |
| **Cost Optimization & Caching** | OpenClaw, NanoBot, CoPaw, PicoClaw | DeepSeek prefix caching (OpenClaw, CoPaw); context compaction (NanoBot PR #4581, #4588); AWS Bedrock prompt caching (PicoClaw #3163); per-turn token tracking (PicoClaw #3156) |
| **Cross-Platform Desktop Apps** | OpenClaw, NullClaw, IronClaw | Linux/Windows desktop apps (OpenClaw #75, 81 👍); CLI REPL polish (NullClaw #960/#970); WebUI v2 porting (IronClaw) |
| **Multi-Agent Orchestration** | OpenClaw, Hermes, NanoBot, ZeroClaw | A2A delegation (NanoBot #4571, ZeroClaw #7218); subagent configuration presets (NanoBot #4291); ACP client as universal orchestrator (Hermes #5257, 18 👍) |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target Users | Key Focus |
|---|---|---|---|
| **OpenClaw** | Largest ecosystem, widest channel support, plugin SDK | Power users, developers, multi-channel bot operators | Stability recovery, platform expansion |
| **Hermes Agent** | MCP-native, strong CLI/VS Code integration, i18n (15 languages) | Developers, coding agent orchestration | Multi-agent orchestrator (ACP client), UI polish |
| **ZeroClaw** | Rust-based, WASM-first plugin runtime, strong provider abstraction | Performance-sensitive users, plugin developers | WASM runtime (v0.8.3), computer-use feature |
| **NanoBot** | Ultra-lightweight Python, fast iteration, security-focused | Resource-constrained environments, cost-conscious users | Context compaction, subagent delegation |
| **CoPaw (QwenPaw)** | Alibaba ecosystem (Qwen, DingTalk, Feishu), strong Asian market | Asian enterprise users, Qwen model users | Model fallback, tool result hardening, v2.0.0 release |
| **LobsterAI** | Netease-backed, OpenClaw integration as UI layer | Chinese enterprise, subscription-based agent users | OpenClaw stability, cron job management |
| **IronClaw** | NEAR AI ecosystem, WebUI v2 (Reborn) | NEAR AI protocol users, WebUI-first experiences | Legacy test porting, automation features |
| **NanoClaw** | Lightweight channel integrations, voice features | Operators needing voice notify, Discord/Slack | Discord adapter, security, voice routing |
| **PicoClaw** | Embedded/edge deployment focus | IoT, Raspberry Pi, resource-constrained users | DeltaChat gateway, AWS Bedrock caching |
| **NullClaw** | Minimal CLI agent, zero dependencies | Terminal-centric power users, CI/CD pipelines | CLI REPL polish, streaming tool calls |

**Architecture Spectrum:**
- **Full-stack:** OpenClaw, Hermes, IronClaw, LobsterAI
- **Lightweight/micro:** NanoBot, NullClaw, PicoClaw
- **Ecosystem-locked:** CoPaw (Alibaba), IronClaw (NEAR AI), LobsterAI (Netease/OpenClaw)

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapid Iteration (High Velocity, High Risk):**
- **OpenClaw** — Extremely high activity but overwhelmed maintainers. Critical regressions (DeepSeek cache, session timeouts, write-lock deadlocks) undermine trust despite strong feature progress.
- **Hermes Agent** — Active hardening with systemic unbounded-response vulnerabilities being patched in real time (2 fixes merged today). Strong community filing detailed bugs.
- **ZeroClaw** — Very high output with structured milestone trackers (v0.8.3). Review queue is growing but organized. Computer-use and WASM initiatives signal forward-looking roadmap.

**Tier 2 — Stabilizing (Release Imminent):**
- **CoPaw** — v2.0.0-beta.1 checklist in final verification. Sprinting toward major release with focused bug fixes.
- **LobsterAI** — Just released v2026.6.29. Entering stabilization mode after a major push.
- **IronClaw** — Heavy migration to Reborn v2. Release PR staged for `ironclaw_common` 0.5.0. Integration-test framework being built in parallel.

**Tier 3 — Steady Development:**
- **NanoBot** — High-quality, security-conscious development. Immediate patch culture (critical bugs fixed same day). "Ultra-lightweight" identity debate is a friction point.
- **NanoClaw** — Focused channel feature development (Discord, Slack). Low noise, targeted improvements.
- **NullClaw** — Minimalist, stable. Zero open issues suggests either low usage or effective maintenance.

**Tier 4 — Low Activity:**
- **PicoClaw** — Stale PRs (DeltaChat gateway open 22 days without maintainer comment). Risk of contributor attrition.
- **TinyClaw, Moltis, ZeptoClaw** — No activity. These projects may be dormant or seasonal.

---

## 7. Trend Signals

**1. Provider Reliability is the #1 Pain Point (Ecosystem-wide)**
DeepSeek cache degradation (OpenClaw, CoPaw), vision fallback kwarg regression (Hermes), kimi-code streaming errors (ZeroClaw), and the "model not using tools" diagnosis (IronClaw, 70% of failures) all point to the same truth: **agent frameworks are only as reliable as their provider abstraction layers.** The ecosystem is shifting from "which features can we add?" to "how do we make the existing stack resilient to provider API changes?" This is a direct signal for agent developers to invest in **fallback chains, retry logic, and rigorous provider integration testing** before expanding features.

**2. Tool-Call Integrity and Context Management are Foundational**
Issues cross-cutting multiple projects include: tool call ID corruption (NanoBot #4595, fixed same day), tool card count display (CoPaw #5624), multi-tool workflow protocol violations (IronClaw #5415), and session write-lock deadlocks (OpenClaw #86538). **Tool call serialization and session state management are becoming the critical infrastructure layer**—more important than UI or channel features. Developers building on these frameworks should prioritize understanding how tool results flow through the system.

**3. Cost Observability is a Growing Expectation**
Users across OpenClaw, NanoBot, CoPaw, and PicoClaw are demanding **per-session token usage, cache hit-rate metrics, and cost optimization strategies.** The community is transitioning from "it works" to "how much does it cost?" This is a strong signal that production deployment is increasing, and cost management tooling will be a competitive differentiator in the next 6 months.

**4. Multi-Agent Orchestration is Becoming Mainstream**
Hermes (#5257, ACP client as orchestrator), NanoBot (#4571, A2A delegation), ZeroClaw (#7218, agent discovery), and OpenClaw (subagent delivery lanes) are all investing in **multi-agent workflows**. The demand is shifting from single-agent assistants to systems where agents delegate, escalate, and collaborate. This has implications for session management, error propagation, and observability.

**5. Security is Moving from Compliance to Core Architecture**
The simultaneous disclosure of unbounded response body vulnerabilities (Hermes, 7+ bugs) and a symlink container escape (NanoClaw #2828) is a wake-up call. The ecosystem is moving beyond API key management to **runtime containment, input validation, and memory safety** as first-class design requirements. For developers: audit any file-write paths, HTTP client wrappers, and tool output serialization in your agent stack.

**6. Chinese Ecosystem is a Major Independent Force**
CoPaw (Alibaba), LobsterAI (Netease), and PicoClaw (Sipeed) represent a significant, semi-independent development stream with its own priorities (WeChat/Feishu/DingTalk integration, subscription models, Chinese-language documentation). This is not a satellite of the Western ecosystem—it has distinct feature requirements (QQ plugins, Volcengine model support) and user dynamics (subscription credit confusion in LobsterAI). Developers targeting global audiences should account for these splits.

**7. CLI and Terminal Interfaces are Being Revisited**
NullClaw's arrow-key REPL fix (#960), Hermes' Ctrl+R fzf history search (#51391), and the general push for better terminal UX signal that **the CLI is not dead**—it's being professionalized for agent operators who manage clusters via SSH. This runs counter to the narrative that all agent interaction should be through chat UIs.

---

**Summary for Decision-Makers:**
- **If you need maximum community support and feature breadth:** OpenClaw is the ecosystem anchor, but budget for stability overhead.
- **If you value performance and modularity:** ZeroClaw (Rust/WASM) and NanoBot (Python, lightweight) are strong, modern alternatives.
- **If you target Asian enterprise:** CoPaw or LobsterAI are necessary for DingTalk/Feishu integration.
- **If you build multi-agent systems:** Watch Hermes' ACP client work and ZeroClaw's A2A discovery closely—these will define interoperability standards.
- **Universal investment:** Provider fallback, tool-call integrity, and security hardening are table stakes now, not differentiators.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the project digest for NanoBot, generated from the provided GitHub data.

---

## NanoBot Project Digest
**Date:** 2026-06-30

### 1. Today's Overview

The NanoBot project is in a phase of intense, high-quality development. With 32 pull requests updated in the last 24 hours and 7 issues active, the project shows significant contributor momentum focused on security hardening, performance optimization, and core architecture improvements. The community is actively addressing reported bugs with corresponding fix PRs often submitted on the same day, indicating a healthy and responsive maintenance cycle. However, an ongoing debate about the project's "ultra-lightweight" claim remains a point of friction with users.

### 2. Releases

No new releases were published today.

### 3. Project Progress

Today saw 10 pull requests merged or closed, signaling rapid progress on several fronts:
- **Security & Stability:** Two critical bug fixes were merged, including a fix for `apply_final_call_ids` corrupting tool call IDs (#4596) and a shell guard fix for path extraction bypass (#4594).
- **Infrastructure & Features:** A major feature for gateway webhook triggers was completed (#4502), enabling external integrations. New session-bound local triggers (#4591) were also added.
- **Performance:** An optimization PR (#4581) was merged, aiming to reduce context usage and costs by compacting oversized subagent announcements and compressed tool outputs. A follow-up PR (#4588) for more aggressive tool output compaction is also open.

### 4. Community Hot Topics

The most active discussion centers on the project's identity:
- **Issue #660: [CLOSED] Project claims to be 'ultra-lightweight' but includes bloated Node.js dependency** (👍: 5, Comments: 15). This issue, while closed, has sparked the most debate. The underlying sentiment is a desire for a truly minimal dependency footprint, with users questioning the justification for including Node.js in a Python-centric project. This signifies a strong user segment that prioritizes simplicity and resource efficiency above all else.

Other active discussions, while having fewer comments, target core functionality:
- **Issue #4419: [OPEN] Feature: Automatic reasoning effort escalation** (Comments: 4). This request for dynamic model tuning shows advanced users are pushing the agent to be more autonomous and context-aware in how it allocates "thinking" resources.
- **PR #4581 & #4588: context optimization and command-output compaction** (by hamb1y). These are generating interest as they directly address the top user pain point of LLM API costs and context windows.

### 5. Bugs & Stability

Five new issues were opened today, with **two critical security bugs** immediately patched:
- **CRITICAL: #4595: Bug: apply_final_call_ids overwrites correct tool_call ids** (Reported by MadSkittles). This causes permanent session poisoning by corrupting tool use IDs for all tools during streaming. **Fix PR #4596 was submitted and merged on the same day.**
- **HIGH: #4592: ExecTool path extraction misses absolute paths after equals sign** (Reported by axelray-dev). This allows commands like `curl --output=/etc/passwd` to bypass the workspace containment guard, posing a significant security risk. **Fix PR #4594 was submitted and merged on the same day.**
- **LOW: #4222: [CLOSED] max_messages truncation invalidates prompt caching.** A previously reported performance bug was resolved today.
- **LOW: #4580: [OPEN] Enhancement: Use conda environment for subprocesses.** A feature request for better virtual environment support.
- **LOW: #4597: [CLOSED] this is a test.** An apparent test or spam issue, closed without discussion.

### 6. Feature Requests & Roadmap Signals

User requests point towards making NanoBot more autonomous, secure, and developer-friendly. The following features are strong candidates for the next release:
- **Autonomous Model Tuning (#4419):** Automatic reasoning effort escalation. This is likely to be implemented soon as it aligns with the existing `reasoningEffort` config.
- **Enhanced Subprocess Sandboxing (#4580):** Using `conda` environments for subprocesses. With the recent focus on `exec` security, this is a logical next step.
- **Native A2A Delegation (#4571):** An open PR for a formal Agent-to-Agent delegation system. This signals a roadmap shift from simple subagents to a complex, collaborative multi-agent architecture.
- **Provider-Scoped Proxy Support (#4578):** An open PR adding proxy config per provider. This is essential for enterprise users behind corporate firewalls and is likely to be merged soon.

### 7. User Feedback Summary

User feedback this cycle is a mix of praise for performance and criticism of core design choices.
- **Pain Point:** The biggest source of dissatisfaction is the **"ultra-lightweight" branding vs. reality** (Issue #660). A user explicitly called this a contradiction, suggesting the project should either remove the claim or justify the bloat. This could harm trust if not addressed.
- **Pain Point:** **Cost and context window management** is a recurring theme. PRs #4581 and #4588 are direct responses to user demands for lower token usage. This is a key area of user satisfaction when improvements are made.
- **Use Case:** Users are clearly trying to use NanoBot for **complex, long-running tasks** that require reliable tool use, session persistence, and caching. The detailed bug reports on session poisoning (#4595) and caching invalidation (#4222) indicate heavy, production-like usage.

### 8. Backlog Watch

Several important PRs remain open and require maintainer review or intervention:
- **OP-4293: [OPEN] fix(agent): add pending_queue to process_direct for subagent result injection.** (Last updated: 2026-06-29). This fix for cron jobs and direct calls has been open since June 11. It is a critical bug fix for a core feature and is at risk of being a blocker for users relying on scheduled tasks.
- **OP-4291: [OPEN] feat(spawn): allow subagents to use configurable model presets.** (Last updated: 2026-06-29). Also open since June 11, this feature would be a significant quality-of-life improvement for power users and needs a decision to merge or reject.
- **Issue #4419: [OPEN] Feature: Automatic reasoning effort escalation.** (Comments: 4, Last updated: 2026-06-29). While not a bug, this is a popular feature request with direct user engagement. A maintainer response is needed to set expectations on implementation timeline.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-30

## Today's Overview

Hermes Agent continues to show strong development velocity with **50 updated issues and 50 updated PRs** in the past 24 hours, though the vast majority remain open (47 open issues, 45 open PRs), suggesting a widening backlog. Activity is concentrated on bug fixes, particularly around **memory/body-size safety boundaries** across multiple platform adapters, and incremental feature work. No new releases were cut today, and the project appears to be in a **consolidation and hardening phase** rather than shipping new capabilities at scale. The high number of low-P3 severity issues and duplicate/unbounded-response bugs indicates sustained community testing and security-conscious development.

## Releases

No new releases were published on this date.

## Project Progress

Five PRs were merged or closed today:
- **[PR #55266](https://github.com/NousResearch/hermes-agent/pull/55266)** — Fixed a Windows-specific test path normalization issue (`test_media_files_routed_by_type`) caused by 8.3 shortname generation (`Stoltemberg`)
- **[PR #55249](https://github.com/NousResearch/hermes-agent/pull/55249)** — Added a 16 MiB body cap to Signal JSON-RPC responses, closing a memory exhaustion vector (`Stoltemberg`)
- **[PR #55251](https://github.com/NousResearch/hermes-agent/pull/55251)** — Capped proxy error response bodies in gateway mode to prevent unbounded memory allocation (`Stoltemberg`)
- **[PR #55237](https://github.com/NousResearch/hermes-agent/issues/55237)** — Closed a long-standing Signal adapter unbounded read issue
- **[PR #55212](https://github.com/NousResearch/hermes-agent/pull/55212)** — Deleted; appears to have been a security-boundary–related cron change withdrawn for engineering review

Notable ongoing PRs that advanced today include: **handoff workflow** (#47320), **i18n support across 15 languages** (#38846), **dashboard session filtering** (#51128), and **Ctrl+R fzf input history search** (#51391).

## Community Hot Topics

The most active discussions this period center on **agent orchestration and spreadsheet tooling**:

- **[Issue #5257](https://github.com/NousResearch/hermes-agent/issues/5257)** — *Generalized ACP client for multi-agent CLI orchestration* (13 comments, 18 👍). The community is pushing hard for Hermes to act as a *universal orchestrator* over all ACP-compatible coding agents — not just Copilot. This suggests demand is growing for a **multi-agent CLI abstraction layer** where Hermes routes tasks to specialized agents (Claude Code, Copilot, GPT-Engineer) from one unified interface. The 18 reactions indicate broad, cross-community interest from power users building agentic workflows.

- **[Issue #4438](https://github.com/NousResearch/hermes-agent/issues/4438)** — *Rich Spreadsheet Skill (xlsx / csv)* (5 comments). Users want a structured spreadsheet abstraction so the agent doesn't have to raw-code `openpyxl`/`pandas` every time. This reflects a real pain point: the terminal tool is too low-level for data-table manipulation requiring row iteration, formatting, or multi-sheet operations.

- **[Issue #35876](https://github.com/NousResearch/hermes-agent/issues/35876)** — *Vision fallback chain silently fails on Gemini quota errors* (4 comments). A nuanced regression where explicitly configured fallback providers are skipped because kwargs forwarding is broken. This is destabilizing for users who rely on fallback chains for production resilience.

## Bugs & Stability

### P1 (Critical)

- **[#42405](https://github.com/NousResearch/hermes-agent/issues/42405)** — *Memory at capacity → 'replace' zero-match retry loop → silent hang.* When `USER.md`/`MEMORY.md` is full and the agent tries to consolidate via `replace`, a substring match failure sends the agent into an infinite retry loop with **no response to the user**. This is a fundamental reliability bug: the assistant becomes unresponsive without warning, and there is no timeout or escalation. **No fix PR exists yet.**

### P2 (High)

- **[#35876](https://github.com/NousResearch/hermes-agent/issues/35876)** — Vision fallback chain kwargs regression. Silently drops fallback providers when Gemini returns HTTP 429 quota errors. **No fix PR exists.** See also related fallback design issue **#24039** (3 comments) about duplicate hardcoded fallback lists.

- **[#49242](https://github.com/NousResearch/hermes-agent/issues/49242)** — Windows WhatsApp gateway prefers system Node/npm over Hermes-managed Node. Causes WhatsApp setup and QR generation to fail. **No fix PR exists.**

- **[#51560](https://github.com/NousResearch/hermes-agent/issues/51560)** — `fallback_providers` configured as JSON string via `hermes config set` silently empties the fallback chain. The parser drops string values, so users get **no fallback** without any warning. **No fix PR exists.**

- **[#55071](https://github.com/NousResearch/hermes-agent/issues/55071)** — Gateway chat sanitizer leaks `unexpected status 401 Unauthorized` auth envelopes to human-facing chat platforms (security/privacy issue). **No fix PR exists.**

- **[#55265](https://github.com/NousResearch/hermes-agent/issues/55265)** — Telegram cron deliveries to private forum topics land in General. The `direct_messages_topic_id` is silently ignored for forum-style private chats. Regression from PR #50023. **No fix PR exists.**

- **[#55268](https://github.com/NousResearch/hermes-agent/issues/55268)** — MoA (Mixture-of-Agents) aggregator returns HTTP 404 on unrecognized Anthropic Messages hosts. The `api_mode` is dropped. **Closed as duplicate** — relation to other fallback/provider handling bugs.

### P3 (Low/Medium)

- **[#55276](https://github.com/NousResearch/hermes-agent/issues/55276)** — `reasoning_effort` silently dropped for custom/zai providers. **Fix PR #55280** opened concurrently — the PR directly addresses this issue.
- **[#55296](https://github.com/NousResearch/hermes-agent/issues/55296)** — WhatsApp formatter leaves literal asterisks for bold-italic markdown. **Fix PR #55298** opened concurrently.
- **[#55274](https://github.com/NousResearch/hermes-agent/issues/55274)** — BlueBubbles adapter buffers JSON responses without size cap.
- **[#55279](https://github.com/NousResearch/hermes-agent/issues/55279)** — Microsoft Graph client buffers REST responses without body cap.
- **[#55284](https://github.com/NousResearch/hermes-agent/issues/55284)** — Discord server tool reads REST responses without body cap.
- **[#55287](https://github.com/NousResearch/hermes-agent/issues/55287)** — Desktop chat width not configurable (new feature request, but related to UI polish).

**Stability pattern**: A concerning number of **unbounded response body** bugs were filed today across Signal, BlueBubbles, Microsoft Graph, Discord tools, WeChat/iLink, and Azure detection. These are systemic — Hermes lacks a central `max_response_bytes` enforcement layer for third-party HTTP calls. The Signal (#55249) and proxy (#55251) fixes were already merged today, suggesting the maintainers recognize this as a high-priority security/stability gap.

## Feature Requests & Roadmap Signals

Several strong signals emerged today:

1. **Generalized ACP Client** (#5257) — Likely to land in v0.18/0.19. This would make Hermes a **universal multi-agent CLI orchestrator** able to spawn and manage any ACP-compatible coding agent (Claude Code, Copilot, GPT-Engineer). This is the most-requested feature by community engagement (18 👍).

2. **Configurable Chat Width** (#55287) — A small but popular UI fix for Desktop users who want wider conversations on large monitors. Likely a quick win for the next patch release.

3. **Worker-Lane Kanban CLI Handoff** (#55267) — External shell/MCP workers need a way to advance their Kanban cards from `running` to `review` without Hermes-native CLI access. This suggests an expanding ecosystem of **non-Hermes tooling** integrated via agents.

4. **Disable Trigram FTS Index Flag** (#55233) — A database performance tweak. The `messages_fts_trigram` index occupying 2+ GB for ~100K messages is a real operational pain point for long-running gateways.

5. **i18n Support** (PR #38846) — 15 languages, 861 keys. This large PR has been open since June 4 and could be close to merging given its recent activity.

**Near-term prediction**: The next release (v0.17.x patch or v0.18) will likely include the **body-cap fixes** (already merged), the **reasoning_effort pass-through** fix (#55280), and the **WhatsApp markdown fix** (#55298). The **Generalized ACP Client** (#5257) feels like a v0.19+ candidate given its scope.

## User Feedback Summary

**Pain points:**

- **Silent hangups** (#42405): Memory consolidation failures make the agent unresponsive without warning — the most severe user-facing issue. One commenter noted "the assistant just stops talking."
- **Configuration fragility** (#51560, #24039, #55268): Setting up fallback chains is error-prone, with silent drops of providers or fallback lists. Users are finding production issues only when primary providers fail.
- **Windows UX friction** (#49242): Hermes-managed Node/npm is installed but not used for WhatsApp. Windows users experience setup failures that work on macOS/Linux.
- **Visual quality** (#50775): "Ghosting" and "double-text" on Telegram macOS client since v0.17.0. Streaming updates leave rendering artifacts.
- **Dashboard stability** (#43196): Persistent dashboard service (systemd) wedges requiring SIGKILL, especially in PTY/Chat tab path.

**Satisfaction signals:**

- Active community filing **detailed structural bugs** (e.g., Signal adapter, Microsoft Graph body caps) — suggests power users trust Hermes for production workloads.
- Multiple contributors filing fix PRs alongside issues (Stoltemberg, liuhao1024, ooiuuii).
- The 18 👍 on #5257 suggests the orchestration direction resonates strongly with the community.

## Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Created | Age | Risk |
|-------|---------|-----|------|
| [#42405](https://github.com/NousResearch/hermes-agent/issues/42405) — Memory hang (P1) | 2026-06-08 | 22 days | **Critical** — no response to users |
| [#35876](https://github.com/NousResearch/hermes-agent/issues/35876) — Vision fallback kwarg regression (P2) | 2026-05-31 | 30 days | **High** — breaks production resilience |
| [#24039](https://github.com/NousResearch/hermes-agent/issues/24039) — Duplicate fallback systems (P2) | 2026-05-11 | 50 days | **High** — structural design debt |
| [#51560](https://github.com/NousResearch/hermes-agent/issues/51560) — JSON string fallback (P2) | 2026-06-23 | 7 days | **Medium** — new, but no fix |
| [#49242](https://github.com/NousResearch/hermes-agent/issues/49242) — Windows Node PATH (P2) | 2026-06-19 | 11 days | **Medium** — Windows onboarding |
| [#55071](https://github.com/NousResearch/hermes-agent/issues/55071) — Auth leak to chat (P2) | 2026-06-29 | 1 day | **High** — security/privacy |

### PRs Needing Maintainer Attention

- **[PR #38846](https://github.com/NousResearch/hermes-agent/pull/38846)** — i18n (15 languages), open since June 4. Needs review and likely a decision on how to merge alongside upstream's own i18n skeleton.
- **[PR #47320](https://github.com/NousResearch/hermes-agent/pull/47320)** — Handoff workflow, open 14 days. High value for users doing multi-session debugging.
- **[PR #51391](https://github.com/NousResearch/hermes-agent/pull/51391)** — Ctrl+R fuzzy history search, open 7 days. Simple UX win.
- **[PR #52136](https://github.com/NousResearch/hermes-agent/pull/52136)** — `/learn` progress steps, open 6 days. Small but user-visible improvement.

### Systemic Concern

The **unbounded response body** bugs are not isolated — they span Signal, BlueBubbles, Microsoft Graph, Discord, WeChat, and Azure detection. The two fixes merged today (#55249, #55251) suggest maintainers are prioritizing this, but at least **5 more unbounded-read vulnerabilities** remain open (#55274, #55279, #55284, #55257, #55205). A centralized HTTP client wrapper with built-in max body size enforcement would prevent these from recurring.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the project digest for PicoClaw, generated from the provided GitHub data for **2026-06-29/30**.

---

# PicoClaw Project Digest
**Date:** 2026-06-30  
**Data Snapshot:** 24-hour activity ending 2026-06-29

## 1. Today's Overview
Project activity remains steady but **low velocity**, with zero mergers or new releases in the last 24 hours. There are three open Pull Requests, two of which are significant feature additions (DeltaChat gateway and AWS Bedrock caching), but none have been integrated. The issue tracker shows a healthy triage cadence, with one bug closed and two open issues updated. However, the presence of several **stale** labels (applied to 3 of 6 tracked items) suggests that maintaining momentum on non-critical features may be a challenge. Overall, the project is stable but operating in a **maintenance-plus-feature-pipeline** mode.

## 2. Releases
**No new releases** were published in the last 24 hours. The latest available version remains **v0.2.9** (as referenced in Issue #3090).

## 3. Project Progress
**Merged/Closed PRs (24h):** 0  
**New PRs (24h):** 0  

Three open PRs continue to await review or further iteration:
- **#3063** (feat: add deltachat gateway) — A new communication channel integration.
- **#3163** (feat(bedrock): leverage Converse prompt caching) — Performance optimization for AWS Bedrock.
- **#3156** (feat(pico): emit per-turn LLM token usage) — Observability improvement for token tracking.

*No features advanced from PR to main branch today.*

## 4. Community Hot Topics
Most active discussions center on **integration breadth and model reliability**.

- **#3093** [OPEN] *[Feature] I need SimpleX or tox*  
  *Comments: 4 | Reactions: 1 👍*  
  **Link:** [Issue #3093](https://github.com/sipeed/picoclaw/issues/3093)  
  **Analysis:** The user is requesting gateways for decentralized messaging protocols (SimpleX, Tox, Wire). This reflects a growing demand among privacy-conscious users for non-centralized communication backends. The discussion likely involves trade-offs between protocol complexity and user adoption.

- **#3090** [CLOSED] *[BUG] Panel does not work on Safari on iOS < 16.4*  
  *Comments: 3*  
  **Link:** [Issue #3090](https://github.com/sipeed/picoclaw/issues/3090)  
  **Analysis:** A compatibility bug that was successfully closed. Indicates the maintainers are responsive to browser-specific issues, though the specific fix was not linked to a PR in this data window.

- **#3153** [OPEN] *[BUG] Volcengine Doubao Seed tool calls occasionally leak as `<seed:tool_call>` text*  
  *Comments: 1*  
  **Link:** [Issue #3153](https://github.com/sipeed/picoclaw/issues/3153)  
  **Analysis:** A reliability bug affecting tool-calling with the Volcengine/Doubao model. This is a moderate concern as raw text leaking breaks the agentic workflow.

## 5. Bugs & Stability
**No new bugs reported in the last 24 hours.** However, one open bug remains notable:

- **High Severity: #3153** — *Volcengine Doubao Seed tool calls leak raw XML.*  
  *Status:* **Stale** (last updated 7 days ago).  
  *Risk:* Users of Volcengine models risk broken agent executions with no fix PR in sight.  
  *Fix PR exists:* **No.**

- **Resolved: #3090** — *Panel fails on iOS Safari <16.4.*  
  *Status:* **Closed** successfully.

**Stability Verdict:** No regressions, but the Volcengine bug is an unaddressed threat to reliability for users of that provider.

## 6. Feature Requests & Roadmap Signals
- **#3093** *SimpleX / Tox / Wire gateway* — Indicates desire for **decentralized, E2E-encrypted** messaging backends. This is a recurring theme (see PR #3063 for DeltaChat). Likely part of a larger "Federated/Distributed Gateway" roadmap.

**Prediction for Next Minor Release (v0.3.0):**
- **DeltaChat Gateway** (PR #3063) has the highest chance of landing, as it has been open the longest.
- **Token usage per-turn** (PR #3156) is a low-risk, high-value observability feature that may slip into a patch.
- The **SimpleX/Tox** request will likely remain a discussion pending protocol library maturity.

## 7. User Feedback Summary
- **Pain Point #1 (Missing Gateways):** Users want more chat backend diversity. The request for SimpleX and Tox (#3093) signals that Proton/Wire/Matrix gateways are not sufficient for users in heavily censored or privacy-maximalist environments.
- **Pain Point #2 (Model Reliability):** Issue #3153 shows that even flagship models like Doubao Seed can produce malformed tool calls. Users expect the agent to gracefully handle or mask such leaks.
- **Satisfaction Signal:** The closure of #3090 (iOS Safari bug) shows maintainers are attentive to Web UI compatibility, which generally correlates with positive feedback from mobile-first users.

## 8. Backlog Watch
Items requiring maintainer attention due to age or lack of response:

1. **Issue #3153** — *Volcengine Doubao tool call leak* (Stale, 7 days, no assignee)
   - **Link:** [Issue #3153](https://github.com/sipeed/picoclaw/issues/3153)
   - **Risk:** Potential loss of user trust for the Volcengine provider path.

2. **PR #3063** — *feat: add deltachat gateway* (Open 22 days, 0 comments from maintainers)
   - **Link:** [PR #3063](https://github.com/sipeed/picoclaw/pull/3063)
   - **Risk:** Long-open feature PRs may go stale or require rebase; maintainers should provide review feedback.

3. **PR #3163** — *feat(bedrock): prompt caching* (Open 7 days, no review)
   - **Link:** [PR #3163](https://github.com/sipeed/picoclaw/pull/3163)
   - **Impact:** High-value cost-saving optimization for AWS Bedrock users; delay risks losing contributor momentum.

**Overall Health:** Green/Yellow. The project is stable but risks accumulating latency in PR reviews. The **stale** label being applied to multiple recent items suggests the maintainer team may be resource-constrained or prioritizing other work.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-30

## Today's Overview

The NanoClaw project shows moderate activity today with 7 PRs updated in the last 24 hours and no new issues or releases. Two PRs were merged/closed, while 5 remain open, indicating steady development momentum. The project is gaining notable channel integration features (Discord, Slack Socket Mode) and addressing several important bug fixes, particularly around security and provider configuration. No new issues were reported, which may reflect either a stable codebase or a lull in community reporting.

## Releases

No new releases were published today. The latest available version remains unchanged.

## Project Progress

Two pull requests were merged/closed today:

- **#2883 — `feat: voice-notify v3 意图分流 + kill-switch`** (merged): Adds voice notification intent routing across 5 categories (action, silent, navigate, tech_status, notify), skips long tables/code blocks, and introduces `VOICE_SUMMARY_VERSION=off` runtime kill-switch. 38/38 tests passing, has passed C1 three-round review.  
  [PR #2883](https://github.com/nanocoai/nanoclaw/pull/2883)

- **#2882 — `fix(ncl): default messaging-groups create instance to channel_type`** (merged): Fixes a `NOT NULL` constraint violation when using `ncl messaging-groups create`, caused by the `instance` column being required but omitted from the generic CRUD insert.  
  [PR #2882](https://github.com/nanocoai/nanoclaw/pull/2882)

## Community Hot Topics

All 7 PRs are relatively fresh (1–3 days old) with limited comments and reactions. The most notable items:

- **#2880 — `fix(security): contain inbox symlink escapes in attachment writes (#2828)`** (open, 0 comments): Addresses CWE-59 symlink-follow vulnerability where a compromised agent inside a container can pre-place symlinks in its writable session directory, leading to arbitrary host file writes. Fixes both inbound and outbound file-write paths. This is the highest-security PR in the batch.  
  [PR #2880](https://github.com/nanocoai/nanoclaw/pull/2880)

- **#2884 — `feat(discord): add Discord channel adapter + fix Gateway approval-button routing`** (open, 0 comments): A significant new channel integration that adds a Discord adapter and fixes approval-button routing errors in Gateway mode. This aligns with the broader "channels" branch work.  
  [PR #2884](https://github.com/nanocoai/nanoclaw/pull/2884)

- **#2886 — `fix: channel-registered new agents inherit the install's provider`** (open, 0 comments): Fixes a bug where newly created agent groups during channel registration always defaulted to Claude provider, causing 401 errors on single-provider installs.  
  [PR #2886](https://github.com/nanocoai/nanoclaw/pull/2886)

The underlying need across these PRs is consistent: users want reliable multi-channel support with correct provider configuration, and the community is actively building toward that.

## Bugs & Stability

| Severity | Bug | Fix PR Status |
|----------|-----|---------------|
| **Critical** | **Symlink-follow vulnerability (CWE-59)** — compromised agent inside container can achieve arbitrary host file writes via symlink in session directory. Exploitable on both inbound and outbound file-write paths. | Fix PR #2880 open |
| **High** | **Channel-registered new agents get wrong provider** — new agents created during channel approval flow always use default Claude provider, causing 401 errors on single-provider installs without Claude. | Fix PR #2886 open |
| **Medium** | **`ncl messaging-groups create` fails with NOT NULL constraint** — `instance` column required by migration 016 was missing from CRUD definition. | Fixed in PR #2882 (merged) |

The symlink vulnerability (#2828 → #2880) is the most concerning — it's a container escape that could compromise host systems. The fix is under review.

## Feature Requests & Roadmap Signals

Two major channel features landed or are in review:

- **Discord channel adapter** (PR #2884) — full Gateway mode integration via Chat SDK bridge
- **Slack Socket Mode guided setup** (PR #2885) — extends Slack support beyond webhook-only mode, which was previously merged to a `channels` branch but never reached `main`

Based on the `channels` branch activity and the PR descriptions, it appears NanoClaw is systematically building out multi-channel support (Discord, Slack Socket Mode). **Next likely version** may include:
- Discord channel adapter finalized
- Slack Socket Mode integrated into main (not just `channels` branch)
- Dashboard pusher with OpenCode support (PR #2871)

The dashboard pusher PR (#2871) also suggests internal tooling or observability is being improved.

## User Feedback Summary

No direct user issues or comments were reported today, so user feedback is inferred from PR motivations:

- **Pain:** Users on single-provider setups (e.g., only Anthropic or only OpenAI) hit 401 errors when channel-registering new agents, because the system forces Claude as the default provider. [PR #2886]
- **Pain:** Operators relying on `ncl` CLI for messaging group management encountered blocking `NOT NULL` errors. [PR #2882]
- **Desire:** Users want more channel options — Discord and Slack Socket Mode are clearly being requested, given the development focus.
- **Satisfaction signal:** The voice-notify v3 PR passed three rounds of code review and 38/38 tests, suggesting existing functionality is well-maintained and reviewed.

## Backlog Watch

No long-unanswered issues or PRs identified today — all items in the 24h window are recent (1–3 days old). However, the following item warrants attention:

- **PR #2871** — `feat(dashboard): add dashboard pusher with OpenCode support` (open since June 27, 3 days) has no comments but adds a `@nanoco/nanoclaw-dashboard` server dependency. It may benefit from maintainer review to confirm alignment with project roadmap.  
  [PR #2871](https://github.com/nanocoai/nanoclaw/pull/2871)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-30

## 1. Today's Overview
The NullClaw project shows low activity in the last 24 hours, with no new issues or releases but a moderate pulse from four pull requests updated. One PR (#960) was closed/merged, representing a tangible improvement to the CLI agent REPL. The open PRs indicate ongoing work on streaming tool calls and dependency maintenance. Overall, the project appears to be in a steady, low-velocity state with focused development on user-facing CLI quality-of-life features and streaming infrastructure.

## 2. Releases
No new releases were published today.

## 3. Project Progress
One pull request was closed/merged:
- **#960 (closed): fix(cli): handle arrow keys in agent REPL** — This PR, authored by vernonstinebaker, adds a lightweight, allocation-free line editor to the interactive `nullclaw agent` REPL. It enables POSIX raw-mode input for TTY sessions, properly handling arrow keys, history navigation, cursor movement, backspace/delete, Home/End, and common word-left/right sequences instead of printing them as control characters. This is a meaningful UX improvement for the CLI agent interface.

## 4. Community Hot Topics
Three open PRs are currently active. None have accumulated reactions or comment activity beyond the author, so there is no strong community discussion to highlight. The most notable topic is:

- **#971 (OPEN): feat(streaming): native tool calls during SSE streaming** — This PR addresses a core architectural limitation: decoupling native tool-call support from the streaming path so providers with native streaming tool support can emit them. Previously, the agent loop disabled native tools whenever a stream callback was attached, forcing tools into a prompt-injection format. This is technically significant but has no community engagement yet.

- **#970 (OPEN): fix(cli): handle arrow keys in agent REPL** — A near-duplicate of the now-closed #960, likely a reopened or updated version, indicating this fix went through iteration.

## 5. Bugs & Stability
No new bugs, crashes, or regressions were reported in the last 24 hours. The project has no open issues at all.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed. However, the following signals from PRs suggest near-term roadmap priorities:

- **PR #971** signals that better streaming/tool-call interoperability is being actively developed. This could be a candidate for inclusion in the next release as it fixes a known limitation.
- **PR #970/#960** shows that the CLI REPL is receiving UX polish, which may set the stage for broader agent interaction features.
- **PR #956** is a routine Docker base image bump (Alpine 3.23 → 3.24), indicating ongoing dependency hygiene.

Prediction: The next release will likely contain the streaming tool-call native support (#971) and the final version of the CLI REPL line editor.

## 7. User Feedback Summary
No new user feedback, complaints, or satisfaction signals were captured in the last 24 hours, as there are no open issues or comments on PRs. The absence of issue reports could indicate either low usage or stability, but given the quiet activity, it more likely reflects low engagement velocity.

## 8. Backlog Watch
No important issues or PRs are languishing without maintainer attention. The project has zero open issues, and the three open PRs are all recent (last updated within 24 hours). No backlog concerns at this time.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the IronClaw project digest for June 30, 2026.

---

## IronClaw Project Digest — 2026-06-30

### 1. Today's Overview
Project activity is very high, with 50 pull requests and 14 issues updated in the last 24 hours. The team is executing on a major "codex" initiative, porting legacy browser-test coverage to the new **Reborn WebUI v2** and hardening the integration-testing framework. While no new releases were cut today, the volume of merged code indicates a push toward stabilization. The primary risk zone is the **Reborn** engine (WebUI v2, Routines, and permissions), where a significant number of P1/P2 bugs were reported during QA sessions, though many have immediate fix PRs associated.

### 2. Releases
**None** — No new versions were published on 2026-06-30. A release PR (PR #5311) is currently open, staging breaking changes for `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0), suggesting a release is imminent but not yet cut.

### 3. Project Progress
**20 PRs merged or closed today**, driven primarily by the core team. Key advances include:
- **Reborn WebUI v2 Porting:** The "codex" series from `ilblackdragon` landed coverage for chat history (#5371), auth/approval UX (#5372), and channel pairing flows (#5373).
- **Integration-Test Framework:** The large-scale slices 3–9 of the in-process Reborn integration-test framework were merged (#5392, #5402), adding support for LibSql, egress HTTP matching, OAuth refresh, and cross-thread persistence tests.
- **Bug Fixes:** A fix for unselectable/copyable log entries in WebUI v2 was merged (#5414), and the inline OAuth refresh path was hardened to fail loudly (#5413).
- **CI & QA:** The `/canary` PR target validation was fixed (#5422), and the live QA runner was updated to use QA sheet prompts (#5406) and accept routine wording variants (#5423).
- **Dependencies:** Routine dependency bumps for `react-router`, `postcss`, and `@remotion` packages were kept current.

### 4. Community Hot Topics
- **PR #5362 — Harden Slack pairing activation flows (Open, XL size):** This is one of the most actively discussed PRs, aiming to fix broken pairing codes and thread-isolation issues in the Slack Extensions flow. It addresses a specific pain point that was causing user frustration during setup.
- **PR #5149 — Progressive tool disclosure (Open, XL size):** A flag-gated feature to reduce prompt size by sending only relevant tool schemas to the model. This is a performance-focused change targeting the "25.8k tokens per call" problem that has been causing NEAR AI model timeouts.
- **Issue #5411 — Daily failure taxonomy (Open):** A detailed analysis of the latest pinchbench run, noting that "agent doesn't use tools/tool correctly" is the dominant failure mode. This is a key diagnostic resource for the team.

### 5. Bugs & Stability
A significant number of bugs were filed today, mostly from a focused QA session (`bug_bash_P*`). Severity ranking:

- **🔴 Critical/P1:** "Multi-tool Google Sheets workflow fails with protocol violation" (#5415) — consistently fails on workflows requiring 18-25 tool calls. No fix PR yet.
- **🔴 Critical/P1:** "Daily ironclaw failure taxonomy" (#5411) reports that 70% of non-passing tasks are due to the agent not using tools correctly, with "multi-step sequence" tool failures as the dominant sub-pattern.
- **🟡 High/P2:** "Wrong skill activated for Hacker News search" (#5417) — the agent selects `tech-debt-tracker` instead of web search. No fix PR yet.
- **🟡 High/P2:** "Incorrect Google connection state" (#5416) — contradictory authentication flow confuses users.
- **🟢 Medium/P3:** "No option to rename an automation" (#5419), "Conversation messages appear in wrong order after tool activity" (#5418).
- **Other:** "Routine delivery target is a global per-user default, not per-routine" (#5420) — a significant design bug in the Automations system.
- **Regression of note:** Issue #5421 reports that `ironclaw-reborn` web search is not zero-config by default and re-prompts for auth even when chat works.

Fix PRs exist for the "log entry not selectable" bug (#5412, fixed by #5414) and the "OAuth refresh silent failure" bug (#5413, closed).

### 6. Feature Requests & Roadmap Signals
- **Global "Always Allow" setting:** Issue #4776 (closed) was resolved today, adding a per-user setting to auto-approve eligible tools. This is a direct response to the "Ask each time" approval flow failing (#5196).
- **Multi-user RBAC:** The design proposal in PR #5425 ("multi-user RBAC convergence") was merged, suggesting the team is planning for tenant isolation. This is likely for the next minor release.
- **Routine Delivery Per-Routine:** Issue #5420 (global default instead of per-routine) signals a strong user need for isolated delivery targets. Expect a fix in the next release.
- **Automation Renaming:** Issue #5419 requests the ability to edit auto-generated names. A likely small UX improvement for a follow-up.

### 7. User Feedback Summary
- **Pain Points:**
    - **Authentication confusion:** Users report contradictory messages from the agent regarding connection status (e.g., "Gmail is already connected" vs. "installed but not activated" — #5416).
    - **Tool failure on complex workflows:** The multi-tool Sheets workflow (#5415) and the "Ask each time" tool permission (#5196) are creating a perception that the agent is unreliable for multi-step tasks.
    - **Routine configuration friction:** The inability to rename automations (#5419) and the global delivery target (#5420) show that the new Automations feature has rough edges in personalization.
    - **Zero-config not working:** Users expect web search to work out of the box, but it requires manual API key entry (#5421).
- **Satisfaction Signals:** The active porting of legacy tests to Reborn v2 and the closure of #4776 (Always Allow) suggest the team is listening to feedback on permission fatigue and QA coverage gaps.

### 8. Backlog Watch
- **Issue #4108 — Nightly E2E failed (Open since 2026-05-27):** The nightly end-to-end test has been failing for over a month. This is a significant red flag for release confidence. Despite the team closing many related PRs today, this issue remains open and unassigned.
- **PR #3706 — `dependabot[bot]` bump for postcss/remotion (Open since 2026-05-16):** A stale dependency PR in the docs/architecture-video directory. Low risk, but indicates that dependency hygiene in auxiliary directories may be lagging.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the structured project digest for LobsterAI, generated from the provided GitHub data for 2026-06-30.

---

### LobsterAI Project Digest — 2026-06-30

### 1. Today's Overview
The project shows **very high activity**, driven primarily by the finalization of the **2026.6.29 release**. In the last 24 hours, 40 PRs were updated (39 of which were merged or closed), indicating a major push to stabilize the release branch. Complementing this, 11 issues were updated, with 8 remaining open and active. The core focus has been on **OpenClaw integration stability**—including plugin support, cron job history, and workspace management—alongside UI/UX fixes for the Cowork interface. The release was promoted to the `main` branch, suggesting this cycle is concluding.

### 2. Releases
**New Version:** [LobsterAI 2026.6.29](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.6.29)

**What's Changed:**
- **OpenClaw Integration Fixes:**
    - Route plugin approvals through permissions ([PR #2217](https://github.com/netease-youdao/LobsterAI/pull/2217))
    - Pre-installed QQ and Discord channel plugins ([PR #2198](https://github.com/netease-youdao/LobsterAI/pull/2198))
    - Fixed agent bootstrap workspace separation from task `cwd` (fixing identity/persona loading issues) ([PR #2227](https://github.com/netease-youdao/LobsterAI/pull/2227))
    - Preserved user turn cache stability and cron run follow-up history ([PR #2219](https://github.com/netease-youdao/LobsterAI/pull/2219), [PR #2220](https://github.com/netease-youdao/LobsterAI/pull/2220))
- **Cowork UI Fixes:**
    - Cleaned and aligned conversation rail tooltips (cleaned plan-mode tags, increased preview length) ([PR #2226](https://github.com/netease-youdao/LobsterAI/pull/2226), [PR #2222](https://github.com/netease-youdao/LobsterAI/pull/2222))

**Migration Notes:** Users upgrading from v2026.6.1 should be aware of patches that alter how the agent workspace and task directories are resolved. The fix in [PR #2227](https://github.com/netease-youdao/LobsterAI/pull/2227) is critical for maintaining agent identity and long-term memory files. No breaking changes were reported.

### 3. Project Progress
The bulk of progress today involved stabilizing the latest release, with significant work on OpenClaw and Cron features. Key merged PRs include:
- **OpenClaw Stability:** Patches to preserve user turn cache stability ([#2219](https://github.com/netease-youdao/LobsterAI/pull/2219)), correct workspace directory handling ([#2227](https://github.com/netease-youdao/LobsterAI/pull/2227)), and route OpenAI OAuth correctly ([#2221](https://github.com/netease-youdao/LobsterAI/pull/2221)).
- **Cron & Scheduling:** Major backend fixes were merged to properly sync cron run sessions and clarify task startup status in the UI ([#2190](https://github.com/netease-youdao/LobsterAI/pull/2190), [#2191](https://github.com/netease-youdao/LobsterAI/pull/2191), [#2202](https://github.com/netease-youdao/LobsterAI/pull/2202)).
- **Plugin Support:** Pre-installed QQ and Discord plugins were added ([#2198](https://github.com/netease-youdao/LobsterAI/pull/2198)), and support for upgraded IM plugin (DingTalk, Lark, WeCom) install layouts was merged ([#2182](https://github.com/netease-youdao/LobsterAI/pull/2182)).
- **Documentation:** The contributor guidance (`AGENTS.md`) was refreshed to reflect the current architecture and quality expectations ([#2184](https://github.com/netease-youdao/LobsterAI/pull/2184)).

### 4. Community Hot Topics
The most active issues indicate a mix of confusion over service policies and requests for more granular control over the runtime environment.

- **[Issue #2081: 订阅 (Subscription)**](https://github.com/netease-youdao/LobsterAI/issues/2081) (Closed)
    - **Context:** A user expressed strong dissatisfaction after their 5500 subscription credits were reset at the end of the month.
    - **Analysis:** This highlights a critical lack of clarity in the project’s subscription or credit usage policy. While closed, this signals a need for better UI/UX for displaying credit expiration and rollover rules.

- **[Issue #2121: 对一个现象的疑问（怀疑是bug）(Suspected Bug: Redundant Output)](https://github.com/netease-youdao/LobsterAI/issues/2121)** (Open)
    - **Context:** A user suspects that repeated text output from the "Claw" agent is wasting tokens.
    - **Analysis:** This suggests a UX/diagnostics issue where users cannot easily assess what is consuming their tokens. A future feature to display per-session token usage or provide a "non-repetition" switch for the agent could be warranted.

- **[Issue #2120: 建议 (Suggestions)](https://github.com/netease-youdao/LobsterAI/issues/2120)** (Open)
    - **Context:** A user provided three feature requests: (1) Task queuing in "Claw", (2) Longer single-task runtime (they got a "terminated" error), and (3) Better skill page layout for wide screens.
    - **Analysis:** This is a rich source of feature feedback. The "terminated" issue points to a stability bug (see Section 5), while the request for task queuing suggests a user workflow continuity problem.

### 5. Bugs & Stability
**Severity: High**
- **[Issue #2079: 执行结果窗口滚动到顶端会假死 (UI Freeze on Scroll)](https://github.com/netease-youdao/LobsterAI/issues/2079)**
    - **Date:** 2026-05-30 (Open)
    - **Description:** The result window freezes when scrolling to the top. User states it is easily reproducible.
    - **Analysis:** A high-priority bug that likely affects a core UI workflow. No fix PR has been linked yet.

**Severity: Medium**
- **[Issue #2121: Suspected Bug: Redundant Output](https://github.com/netease-youdao/LobsterAI/issues/2121)** (See Hot Topics above)
    - **Description:** Suspected token waste due to repeated text output.
- **[Issue #2120: Suggestion 2: "Terminated" Errors](https://github.com/netease-youdao/LobsterAI/issues/2120)** (See Hot Topics above)
    - **Description:** A user reported a `terminated` error during a long-running data fetch script, which stopped the Claw monitoring.

**Severity: Low (Stale)**
- Several stale issues remain open, including language display inconsistencies (e.g., English showing when Chinese is selected) and a share feature that cuts off long conversations. These remain unaddressed for >80 days.

### 6. Feature Requests & Roadmap Signals
Based on issue activity and recent PR merges, the following features are likely for the next version:
- **Task Queuing:** The suggestion to pre-input tasks while the "Claw" agent is running ([#2120](https://github.com/netease-youdao/LobsterAI/issues/2120)) is a clear productivity gap. Given the heavy investment in OpenClaw this cycle, this is a logical next step.
- **Hermes Agent Support:** A user explicitly asked for Hermes agent support ([#2131](https://github.com/netease-youdao/LobsterAI/issues/2131)). The project maintainers have not yet responded, but support for popular third-party agents is a typical growth path for open-source AI tools.
- **Extended Task Runtime:** The user request ([#2120](https://github.com/netease-youdao/LobsterAI/issues/2120)) and related "terminated" bugs suggest the project needs a configurable or significantly longer maximum execution time for script monitoring.

### 7. User Feedback Summary
- **Pain Points:**
    - *Token Consumption & Cost:* Users are concerned about opaque token usage (duplicate output, unclear costs) and a lack of intuitive credit/subscription management.
    - *Stability:* Users are experiencing UI freezes and premature task termination, which interrupts workflows.
    - *Documentation:* The "Claw" agent’s behavior (e.g., repeating text, timeouts) is not well documented, leading to user confusion and bug reports.
- **Use Cases:**
    - The project is being used for long-running data monitoring scripts, which indicates a "pro" or "power user" segment.
    - Users invest time in setting up custom agents and skills, indicating a desire for a personalized, reliable workspace.
- **Satisfaction:** While there is frustration with specific bugs and policy clarity, the fact that users are filing detailed feature requests suggests a strong, engaged community that sees potential in the product.

### 8. Backlog Watch
Several critical issues remain stale and require maintainer attention:
- **[Issue #1389: Language Display Bug (English Selected, Chinese Displayed)](https://github.com/netease-youdao/LobsterAI/issues/1389)** — Open since 2026-04-03. A basic consistency bug that impacts non-Chinese users.
- **[Issue #1388: Email Config - Test Connectivity Hangs](https://github.com/netease-youdao/LobsterAI/issues/1388)** — Open since 2026-04-03. A feature completely broken with no response.
- **[Issue #1390: Scheduled Task Update Not Responding](https://github.com/netease-youdao/LobsterAI/issues/1390)** — Open since 2026-04-03. A core feature (updating schedules) is sometimes broken.
- **[Issue #1386: Share Feature Truncates Long Conversations](https://github.com/netease-youdao/LobsterAI/issues/1386)** — Open since 2026-04-03. A data loss problem in a sharing feature.
- **Status:** These issues are over 80 days old, have been labeled `[stale]`, and have low comment engagement (0-1 comments). They represent a significant accumulation of technical debt that could degrade user trust over time if not resolved.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Based on the provided GitHub data for **CoPaw (github.com/agentscope-ai/CoPaw)** as of **2026-06-30**, here is the project digest.

---

## CoPaw Project Digest — 2026-06-30

### 1. Today's Overview
The CoPaw project exhibits very high activity with **29 issues** and **50 pull requests** updated in the last 24 hours. Of the issues, 20 are currently open, indicating a strong flow of incoming bug reports and feature suggestions. The PR activity is equally robust, with 31 open PRs and 19 merged/closed, signifying a concentrated push towards a new major version (v2.0.0-beta.1 is in final verification). While no new releases were published today, the release duty checklist for a beta is being actively completed, suggesting a significant release is imminent. Overall, the project is in a high-velocity sprint phase, balancing bug fixes with major architectural changes.

### 2. Releases
**None.** No new releases were published on this date. However, significant progress is being made on an upcoming major release: [Issue #5571](https://github.com/agentscope-ai/QwenPaw/issues/5571) is the release duty checklist for **QwenPaw v2.0.0-beta.1**, which is currently in the final installation verification phase.

### 3. Project Progress
The following key PRs were merged or closed, indicating advancement in several areas:
- **Frontend & UI:** [PR #5515](https://github.com/agentscope-ai/QwenPaw/pull/5515) (Closed) integrated the latest chat beta UI capabilities.
- **Documentation:** [PR #5614](https://github.com/agentscope-ai/QwenPaw/pull/5614) (Closed) updated context management documentation, replacing the "backpack" analogy with a new "scroll strategy" explanation for the upcoming architecture.
- **Channels & Notifications:** [PR #5601](https://github.com/agentscope-ai/QwenPaw/pull/5601) (Closed) fixed a critical bug where tool approval notifications were not being sent to IM channels (Feishu, WeCom, etc.) after a runtime refactoring.
- **Bug Fixes:** Multiple closed issues indicate fixes for tool card counts ([Issue #5625](https://github.com/agentscope-ai/QwenPaw/issues/5625)), schema handling for third-party model APIs ([Issue #5543](https://github.com/agentscope-ai/QwenPaw/pull/5515)), and a media caching bug for the MiniMax-M3 model ([Issue #5505](https://github.com/agentscope-ai/QwenPaw/issues/5505)).

### 4. Community Hot Topics
The most active discussions reveal key areas of user focus:

- **Cost Optimization via Caching:** [Issue #3891](https://github.com/agentscope-ai/QwenPaw/issues/3891) ("DeepSeek 前缀缓存命中率偏低") remains a top concern, with 5 comments. The user describes a massive cost difference between cache hits and misses for DeepSeek models and requests optimization to improve the current ~95% hit rate. This highlights a critical need for users to control API costs.
- **UI/UX Friction:** [Issue #5624](https://github.com/agentscope-ai/QwenPaw/issues/5624) ("工具调用结果卡片的计数始终显示 1") is a high-friction bug. Users are confused when the `glob_search` and `read_file` tools return many results, but the card title always says "1 file". This directly impacts user trust and usability.
- **Reliability & Timeouts:** [Issue #5573](https://github.com/agentscope-ai/QwenPaw/issues/5573) ("DeepSeek V4 thinking mode...400 errors") points to two specific compatibility bugs when using DeepSeek V4 via non-official endpoints. The community is actively discussing workarounds, indicating a strong reliance on third-party API gateways.
- **Feature Request for Error Resilience:** [Issue #5572](https://github.com/agentscope-ai/QwenPaw/issues/5572) ("支持模型自动降级") has strong support as it addresses a fundamental fragility: a single model failure breaking the entire agent session. The community strongly desires automatic fallback to backup models.

### 5. Bugs & Stability
Several bugs were reported, ranked by severity:

- **High:** [Issue #5573](https://github.com/agentscope-ai/QwenPaw/issues/5573) - **DeepSeek V4** **endpoint failures** (400 errors). Blocks the use of a popular model via non-official APIs. A fix is being discussed in the thread.
- **High:** [Issue #4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) - **Sub-agent infinite polling loop** when starting two subagents simultaneously. Serious reliability issue where the main agent gets stuck and cannot be interrupted via Feishu.
- **Medium:** [Issue #5624](https://github.com/agentscope-ai/QwenPaw/issues/5624) - **Tool card count always shows "1"**. A cosmetic but pervasive bug affecting multiple tools. A fix PR ([#5628](https://github.com/agentscope-ai/QwenPaw/pull/5628)) is already open.
- **Medium:** [Issue #5587](https://github.com/agentscope-ai/QwenPaw/issues/5587) - **Qwen-Image Tool install error**. Blocks new users from using the image generation tool.
- **Low/Medium:** [Issue #5561](https://github.com/agentscope-ai/QwenPaw/issues/5561) - **Feishu long replies delivered as file**. A UX degradation for users of the Feishu channel.

### 6. Feature Requests & Roadmap Signals
Strong signals indicate a major focus on resilience and user experience in the next version (2.0.0):

- **Likely Next Version:** **Automatic Model Fallback** ([Issue #5572](https://github.com/agentscope-ai/QwenPaw/issues/5572)). Given its high community support and alignment with "defense-in-depth" (see also #5342), this is a strong candidate.
- **Plausible Next Version:** **Tool Result Hard Cap** ([Issue #5342](https://github.com/agentscope-ai/QwenPaw/issues/5342)). A fix PR ([#5510](https://github.com/agentscope-ai/QwenPaw/pull/5510)) with the same name is already open, suggesting this is actively being implemented.
- **Under Consideration:** **Memory Search with Reranker** ([Issue #5588](https://github.com/agentscope-ai/QwenPaw/issues/5588)), **DingTalk Image Preview** ([Issue #5593](https://github.com/agentscope-ai/QwenPaw/issues/5593)), and **Custom Protocol Support** ([Issue #5609](https://github.com/agentscope-ai/QwenPaw/issues/5609)) are all feature requests with open discussions.

### 7. User Feedback Summary
- **Satisfaction:** High engagement and detailed bug reports suggest a dedicated user base that actively invests time in making the product better. The community is collaborative, with users verifying fixes before they are accepted.
- **Dissatisfaction & Pain Points:**
    1.  **Cost:** High API costs, specifically with DeepSeek caching.
    2.  **Fragility:** System is fragile to API failures, server reboots, and model timeouts, often losing work or getting stuck.
    3.  **Performance:** Users report the latest versions are "increasingly laggy" ([Issue #5555](https://github.com/agentscope-ai/QwenPaw/issues/5555)), and the DingTalk channel's streaming is "too slow" ([Issue #5603](https://github.com/agentscope-ai/QwenPaw/issues/5603)).
    4.  **Usability:** Resource management (cron jobs) is inflexible, requiring delete-and-recreate instead of update ([Issue #4939](https://github.com/agentscope-ai/QwenPaw/issues/4939)).

### 8. Backlog Watch
Two important, long-open issues require maintainer attention:

- **High Impact:** [Issue #3891](https://github.com/agentscope-ai/QwenPaw/issues/3891) (**DeepSeek Cache Hit Rate**). Created on 2026-04-27, this is over two months old with significant cost implications. The community expects a solution, but no clear fix PR has been linked. **This needs a status update or prioritization.**
- **Quality Assurance:** [Issue #4939](https://github.com/agentscope-ai/QwenPaw/issues/4939) (**Cron Job Update**). Created on 2026-06-03, this feature request for a simple `update` command was closed, but the underlying API already exists. The community might find the workaround acceptable, but an explanation in the issue would prevent confusion.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the ZeroClaw project digest for 2026-06-30.

---

## ZeroClaw Project Digest — 2026-06-30

### 1. Today's Overview

The ZeroClaw project shows **sustained, high-velocity activity**, with the standard 24-hour window saturated at the data-collection limit (50 issues and 50 PRs updated). The project is in an intense feature-development phase leading toward the **v0.8.3 milestone**, with three open trackers (`#7314`, `#8071`, `#8360`) coordinating work on the WASM plugin runtime, agent loop execution, and provider message serialization, respectively. While 7 issues were resolved and 10 PRs were merged/closed in the period, the open backlog remains heavy at 43 active issues and 40 open PRs, indicating a committed maintainer team but a growing review queue. No new releases were published in the last 24 hours.

### 2. Releases

**None.** No new releases were made in the 24-hour window ending 2026-06-30.

### 3. Project Progress

Ten PRs were merged or closed in the last day, demonstrating progress across several fronts:

- **MCP Resource & Prompt API (PR #8508, by tidux):** Merged; this builds on the foundational PR A (#8403) to add the agent-loop surface for MCP resources-as-context, pinning, and named-prompt rendering.
- **Documentation & Housekeeping (PR #8436, by Project516):** Merged; clarified the runtime’s dual history-management mechanisms (`max_history_messages` hard cap + whole-turn trim).
- **Provider Compatibility Fixes (PR #8441, by Project516):** Merged; added a `name` field to compatible-provider tool-result messages, fixing integration with Groq native tool calling.
- **SOP Procedural Memory (PR #8509, by Nillth):** Merged; added the opt-in SOP procedural-memory workshop, allowing agents to manage stored SOP proposals.
- **WhatsApp Location Pins (PR #8427, by Leuca):** Merged; added native location pin support to the WhatsApp Web channel.
- **Telegram Debounce (PR #8440, by Project516):** Closed (likely merged pending timing).
- **Other closed items:** Issues `#2128` (NO_REPLY sentinel text), `#8379` (WhatsApp passive group context), `#8327` (IMAGE markers in tool results), and `#6841` (vision_provider routing) were all closed, indicating a strong push to clear older bugs.

### 4. Community Hot Topics

The most active discussions reflect deep architectural concerns and user-facing blockers:

- **Issue #5600 (11 comments):** [Bug] "Use kimi-code provider in streaming chat call tools, provider API reports an error." This is a **critical S1 (workflow blocked)** issue. The kimi-code provider fails during streaming tool calls with a `400 Bad Request` error related to missing `reasoning_content`. This suggests an incompatibility with the provider's API spec for reasoning models, a pattern echoed in other open issues.
    - Link: [Issue #5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)

- **Issue #8054 (9 comments):** [Bug] "System prompt tool-availability should match per-turn effective tools across all entry points." This is an **S1 issue** tracking a fundamental mismatch: the system prompt tells a model "no tools are available" even when tools are present in the request. It has been identified across channels, gateway, WebSocket, and multimodal entry points. Fix PR #8496 is open to address the MCP surface of this bug.
    - Link: [Issue #8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054)

- **Issue #6909 (6 comments):** RFC "Computer-use support for desktop screen interaction and input control." A high-demand feature request for desktop GUI automation, referencing competition (OpenAI Codex, openclaw/hermes). This RFC has strong momentum and will likely enter the v0.8.3 or v0.9.0 roadmap.
    - Link: [Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)

The underlying need across these hot topics is **reliability of the provider/tool interface**, including proper tool availability signaling, correct serialization, and adherence to provider API specs.

### 5. Bugs & Stability

Several high-severity bugs were active in the last 24 hours. No new regressions were reported.

**S1 - Workflow Blocked:**
- **Issue #8505 (New):** "Telegram channel cannot be configured." A novel bug where `zeroclaw channels doctor` fails to detect a configured Telegram channel, and the bot is unresponsive on Telegram while still responding in CLI.
    - Link: [Issue #8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505)
- **Issue #7756:** Native/MCP tools unavailable on OpenAI Reasoning and Anthropic turns (2 comments). Fix PR #8053 (merged for the runtime path), but the broader issue (#8054) remains open.
    - Link: [Issue #7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756)
- **Issue #8334:** `skills install` targets a `data_dir` that multi-agent runtimes don't load, breaking the "pull and use a skill" flow.
    - Link: [Issue #8334](https://github.com/zeroclaw-labs/zeroclaw/issues/8334)

**S2 - Degraded Behavior:**
- **Issue #8410 (3 comments):** Channel tasks lack a first-class "no-reply" outcome, causing the bot to send unwanted replies.
    - Link: [Issue #8410](https://github.com/zeroclaw-labs/zeroclaw/issues/8410)
- **Issue #8312 (2 comments):** The `fill-translations` leak-repair leaves stale map entries that re-ship leaked text. Fix needed.
    - Link: [Issue #8312](https://github.com/zeroclaw-labs/zeroclaw/issues/8312)

**Stability Improvements:** New PRs were opened to fix potential panics: PR #8149 (`unwrap_or_else` for poisoned mutex in WASM plugin host) and PR #8148 (propagate serialization error instead of panicking in Anthropic provider).

### 6. Feature Requests & Roadmap Signals

The most significant feature signals are organized around the **v0.8.3 roadmap**:

- **High Likelihood for Next Release:**
    - **WASM-first Plugin Runtime (RFC #8135, #7497):** Making WASM the default plugin runtime, with OCI registries for distribution. These are core to v0.8.3.
    - **Computer Use (RFC #6909):** Desktop screen interaction. High community interest and a clear competitive feature.
    - **A2A Agent Discovery (RFC #7218):** `.well-known/agent-card.json` for multi-agent interoperability.
- **Medium Likelihood:**
    - **In-app Upgrade via Web Dashboard (RFC #8170):** Adds supervised restart from the web UI.
    - **Runtime Policy for OTel Content (RFC #8462):** Fine-grained control over what telemetry data is exported.
    - **Inkbox Channel (PR #8384):** A new native channel spanning email, SMS, voice, and iMessage.
    - **GitHub Channel (PR #8504):** A deep integration for engineering teams.

**User-requested features:** The Computer-use RFC (#6909) stands out as a direct user demand. The A2A discovery (#7218) is groundwork for the "claw" ecosystem.

### 7. User Feedback Summary

User pain points visible in the data are centered on **configuration friction** and **provider reliability**:

- **Configuration Friction:** Issue #8505 (Telegram unreachable) and Issue #8334 (skills install broken on multi-agent) reveal that the setup experience remains brittle for common use cases.
- **Provider Compatibility:** Issues #5600 (kimi-code streaming) and #7756 (tools missing on OpenAI/Anthropic) show that the provider abstraction layer has gaps, particularly with reasoning models and strict API specs.
- **Undesired Bot Behavior:** Issue #8410 (no-reply outcome still sends text) indicates agents are too "chatty" by default, frustrating users who want silent conditional execution.
- **Satisfaction Signals:** The rapid pace of issue resolution (7 closed bugs in 24h) and the existence of dedicated trackers for the v0.8.3 release indicate a responsive maintainer team that is actively addressing user pain.

### 8. Backlog Watch

Several important items are flagged as needing maintainer attention or have gone stale:

- **Issue #6074 (Audit, 2 comments, last updated 2026-06-29):** "Track 153 commits lost in bulk revert." This is a critical meta-issue for code recovery; it has no maintainer assignment and remains open after 2 months.
    - Link: [Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)
- **Issue #6140 (3 comments, `no-stale`):** "Hybrid skill plugins (SKILL.md + WASM tools)." This is a major architectural feature that has been accepted but is not yet in-progress.

**PRs needing author or maintainer action:**
- **PR #8149 (Needs author action):** Fix for poisoned mutex in WASM plugin host.
- **PR #8440 (Needs author action):** Telegram per-channel debounce.
- **PR #8496 (Needs author action):** Centralized deferred-MCP access policy (fix for #8054 Surface 1(b)). This is a high-risk fix for an S1 bug.

These items should be prioritized to prevent the backlog from stagnating, especially Issue #6074, which represents lost development effort.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*