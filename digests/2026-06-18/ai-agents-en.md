# OpenClaw Ecosystem Digest 2026-06-18

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-18 00:33 UTC

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

Here is the project digest for OpenClaw, generated from the provided GitHub data snapshot.

---

**Project Digest: OpenClaw**
**Date:** 2026-06-18

### 1. Today's Overview

OpenClaw is exhibiting **extreme activity**, with 500 issues and 500 PRs updated in the last 24 hours, signaling a highly vibrant open-source project. While the activity level is high, the sheer volume suggests a significant maintenance burden, as only 22 issues and 61 PRs reached a terminal state (closed/merged). The focus appears to be on a large volume of in-progress work and community triage rather than on rapid release cycles, as there have been no new releases. Despite the churn, the project is tackling complex, high-impact problems related to reliability, security, and multi-agent orchestration.

### 2. Releases

No new releases were published for this date.

### 3. Project Progress

Despite the high volume of open items, several critical fixes and features have advanced through the pull request pipeline. Key merged/closed areas of progress include:

- **Subagent Model Resolution:** PR [#72984](https://github.com/openclaw/openclaw/pull/72984) fixes a critical bug where subagents were using the parent agent's primary model instead of their own configured default model, a key fix for correct multi-agent orchestration.
- **Bootstrap File Integrity:** PR [#91988](https://github.com/openclaw/openclaw/pull/91988) addresses a major pain point by ensuring that user-provided `BOOTSTRAP.md` files are no longer silently deleted during workspace preseed and onboarding.
- **Secret Management Robustness:** PR [#77213](https://github.com/openclaw/openclaw/pull/77213) improves gateway resilience by gracefully degrading auth profiles with stale secret references, preventing startup failures.
- **Cron Reliability:** Multiple PRs (e.g., #85249, #93944) are in the pipeline to harden the cron job execution path, including guarding against `undefined` delivery contexts and suppressing self-debug error messages from being sent as normal output.
- **Security Foundation:** PR [#92086](https://github.com/openclaw/openclaw/pull/92086) introduces a new security matrix runtime-fact evaluator, laying groundwork for more granular and auditable security policies.

### 4. Community Hot Topics

The community is most engaged with foundational architectural changes and complex, multi-faceted bugs.

- **Architecture & Data-Loss Prevention:** The most active issue is [#75: "Linux/Windows Clawdbot Apps"](https://github.com/openclaw/openclaw/issues/75) (109 comments, 79 👍), showing a strong demand for cross-platform desktop clients. This indicates a desire for a more integrated, first-class user experience beyond the CLI/web.
- **State Migration Risk:** Issue [#88838: "Track core session/transcript SQLite migration via accessor seam"](https://github.com/openclaw/openclaw/issues/88838) (30 comments) is a high-priority (P0) maintainer discussion about a risky database migration. The underlying need is careful, incremental changes to prevent data loss, reflecting a maturing project's concern for stability.
- **Silent Connection Failures:** Issue [#72808: "Silently lost connection to Slack"](https://github.com/openclaw/openclaw/issues/72808) (20 comments, 3 👍) highlights a frustrating user experience where the agent fails silently, a critical reliability issue for production users.
- **Cron Data Destruction:** Issue [#40001: "Write tool lacks append mode"](https://github.com/openclaw/openclaw/issues/40001) (11 comments) reveals a severe data-loss scenario where isolated cron jobs are overwriting shared workspace files. This has sparked discussion about session isolation and tool capabilities.

### 5. Bugs & Stability

The repository has seen a high volume of bug reports, with "regression" and "behavior bug" being common classifications. The most severe (P0/P1) issues are summarized below.

- **(P0) Data Migration Risk:** [#88838](https://github.com/openclaw/openclaw/issues/88838) - SQLite migration for session/transcript state. No fix PR linked, but a maintainer-driven strategy is being discussed.
- **(P1) Regression - Agent Deactivation:** [#62505](https://github.com/openclaw/openclaw/issues/62505) - Coding Agent stopped completing tasks after a recent update. A linked PR suggests a fix is in progress.
- **(P1) Data Loss - Cron Overwrites:** [#40001](https://github.com/openclaw/openclaw/issues/40001) - `write` tool overwrites files in shared workspaces, causing data loss in cron jobs. A linked PR is open.
- **(P1) Cron Session Pruning:** [#50248](https://github.com/openclaw/openclaw/issues/50248) - Session cleanup tool (`--fix-missing`) is falsely pruning valid cron sessions. A linked PR is open.
- **(P1) Security - Sandbox Isolation:** [#37634](https://github.com/openclaw/openclaw/issues/37634) and [#31331](https://github.com/openclaw/openclaw/issues/31331) - Sandboxed sessions have read-only workspaces or fail to mount, breaking core functionality. Both have linked PRs.

### 6. Feature Requests & Roadmap Signals

The community is actively shaping the project's future, with requests focusing heavily on security, permission models, and advanced multi-agent features.

- **Enhanced Security & Permissions:** Multiple requests (e.g., #39604, #39979, #12678, #6615) ask for path-scoped RWX permissions, capability-based tool permissions, and private network access controls. This signals a strong desire for a more granular, Unix-like security model beyond simple allow/deny lists.
- **Agent Observability & Control:** Requests like [#35203](https://github.com/openclaw/openclaw/issues/35203) (Multi-Agent Collaboration) and [#38626](https://github.com/openclaw/openclaw/issues/38626) (Subagent Lifecycle) call for capability profiling, shared blackboards, and deterministic supervision of sub-agents.
- **Platform Expansion:** [#75](https://github.com/openclaw/openclaw/issues/75) (Linux/Windows Desktop Apps) is the most popular feature request, suggesting a native desktop app is a high-value target for the next major release.
- **Immediate Likely Additions:** Features with clear scope and linked PRs, such as the path-scoped permissions (#39979) or the `tools.web.fetch.allowPrivateNetwork` option (#39604), appear likely to land in an upcoming minor release.

### 7. User Feedback Summary

Real users are reporting significant, production-impacting issues that erode trust.

- **Dissatisfaction - Reliability:** The highest friction comes from silent failures (e.g., [#72808: Slack disconnection](https://github.com/openclaw/openclaw/issues/72808)) and regressions (e.g., [#62505: Coding Agent stops working](https://github.com/openclaw/openclaw/issues/62505), [#38327: Gemini 3.1 error](https://github.com/openclaw/openclaw/issues/38327)). Users are frustrated that recent updates break previously working workflows.
- **Dissatisfaction - Data Integrity:** The potential for data loss is a major pain point. Issues like [#40001](https://github.com/openclaw/openclaw/issues/40001) (cron file overwrite) and [#50248](https://github.com/openclaw/openclaw/issues/50248) (session cleanup) describe scenarios where the agent actively destroys user data or state.
- **Pain Point - Sandbox Configuration:** Users struggle with Docker and sandboxing, often finding the workspace either completely inaccessible ([#31331](https://github.com/openclaw/openclaw/issues/31331)) or read-only ([#37634](https://github.com/openclaw/openclaw/issues/37634)).

### 8. Backlog Watch

Several high-importance issues that have been open for months are still awaiting maintainer review or product decisions.

- **(P1, Opened Feb 28) Bootstrap File Ignored:** Issue [#29387](https://github.com/openclaw/openclaw/issues/29387) - Agent-specific bootstrap files are silently ignored. This has 5 👍 and is a core feature that appears broken.
- **(P1, Opened Mar 6) Subagent Metadata Missing:** Issue [#75593](https://github.com/openclaw/openclaw/issues/75593) - Spawned subagents do not appear in the `/subagents list`. This is a continuation of a previously "fixed" bug.
- **(P1, Opened Mar 6) Gemini Crash:** Issue [#38327](https://github.com/openclaw/openclaw/issues/38327) - A regression in version 2026.3.2 breaks compatibility with Google Vertex's Gemini models, crashing the agent on every message.
- **(P1, Opened Jun 17) Cron Hot Reload Race:** Issue [#93895](https://github.com/openclaw/openclaw/issues/93895) - A recently reported critical bug where cron jobs are silently dropped during gateway hot-reload. This is a high-severity issue requiring immediate attention.

---

## Cross-Ecosystem Comparison

# AI Agent Open-Source Ecosystem: Cross-Project Comparison Report
**Date:** 2026-06-18

---

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is experiencing an intense period of maturation and scaling, characterized by high-volume issue tracking, rapid patch cycles, and growing production deployment demands. Across nine tracked projects, we observe a clear bifurcation between **feature-velocity leaders** (OpenClaw, ZeroClaw, CoPaw, IronClaw) processing 45-500 daily updates and **niche/specialized tools** (Moltis, NullClaw, PicoClaw) focusing on specific integration layers. The ecosystem's primary growing pains center on reliability—silent failures, data integrity risks, and build stability crises—indicating a shift from prototype excitement to production-grade expectations. Multi-agent orchestration, sandbox security, and cross-platform desktop clients emerge as the three dominant architectural battlegrounds defining the next 6-12 months of development.

---

## 2. Activity Comparison

| Project | Open Issues | Open PRs | 24h Issues Updated | 24h PRs Updated | Releases (24h) | Health Signal |
|---------|-------------|----------|-------------------|-----------------|----------------|---------------|
| **OpenClaw** | 500+ | 500+ | 500 | 500 | None | **Very High** — Massive throughput, high maintenance burden |
| **NanoBot** | ~10 | ~18 | 10 | 18 | None | **High** — Focused, responsive maintenance |
| **Hermes Agent** | 50 | 50 | 50 | 50 | None | **High but Crisis** — Build stability regression |
| **PicoClaw** | ~10 | ~6 | 2 | 6 | 1 nightly | **High** — Active with security focus |
| **NanoClaw** | 5 | 16 | 5 | 19 | 2 rollups | **Very High** — Breaking changes, critical fixes |
| **NullClaw** | 3 | 1 | 3 | 1 | None | **Low** — Maintenance phase, awaiting review |
| **IronClaw** | 47 | 50 | 47 | 50 | None | **Very High** — Architectural additions |
| **LobsterAI** | ~5 | ~15 | 0 | 13 | 1 stable | **High** — Polish & stabilization |
| **CoPaw** | 26 | 34 | 45 | 50 | 2 releases | **Very High** — Dual-track v1.x + v2.0 alpha |
| **TinyClaw** | 0 | 0 | 0 | 0 | None | **Dormant** |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | None | **Dormant** |
| **ZeroClaw** | 49 | 41 | 50 | 50 | None | **Very High** — Intense sprint, stacked PRs |
| **Moltis** | 4 | 1 | 5 | 1 | None | **Moderate** — Stable, audio-focused |

**Note:** "Health Signal" reflects **velocity and responsiveness**, not absence of issues. High-activity projects also show higher bug volumes.

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale leader:** 500+ daily updates dwarfs all peers (next highest: ZeroClaw/CoPaw at ~50). This reflects both a larger community and a higher bug surface.
- **Architectural maturity:** Active discussion on database migration accessor seams (#88838), security matrix runtime evaluators (#92086), and session isolation — topics peers have not yet reached.
- **Multi-agent depth:** Subagent model resolution (#72984) and subagent lifecycle control (#38626) are more advanced than NanoBot's or IronClaw's multi-instance support.

**Technical Approach Differences:**
- **Where others are Python/TypeScript focused** (NanoBot: Python; NanoClaw: TypeScript; Hermes: TypeScript), OpenClaw's repo structure suggests a **polyglot or Rust-leaning core**, which may explain both its high PR volume and build stability challenges.
- **Peer comparison:**
  - vs. **ZeroClaw**: OpenClaw has more community contributors but fewer structured release tracks (ZeroClaw targets v0.8.1/2/3 + v0.9.0 explicitly).
  - vs. **CoPaw**: OpenClaw lacks a v2.0 migration plan like CoPaw's AgentScope 2.0, suggesting longer-term architectural debt.
  - vs. **Hermes Agent**: Both suffer build issues, but OpenClaw's are chronic (500 open PRs) vs. Hermes' acute desktop client crisis.

**Community Size:**
- Issue/PR comment counts (e.g., #75: 109 comments) exceed any single peer issue, indicating the largest user base in the ecosystem. However, this also means **higher expectation for stability**.

---

## 4. Shared Technical Focus Areas

The following requirements emerge across **three or more projects**, representing ecosystem-wide priorities:

| Requirement | Projects Affected | Specific Manifestations |
|-------------|------------------|------------------------|
| **Multi-Agent Orchestration & Isolation** | OpenClaw, NanoClaw, CoPaw, ZeroClaw | Session isolation (NanoClaw #2796), subagent lifecycle (OpenClaw #38626), cron context pipelines (ZeroClaw #6954), freezes during compaction (CoPaw #5218) |
| **Sandbox Security & File Access Control** | OpenClaw, NanoBot, PicoClaw, NanoClaw | Path-scoped permissions (OpenClaw #39979), SSRF blocking (PicoClaw #3140), read-only workspace hardening (NanoBot #4053), CVE-2026-29611 path traversal (NanoClaw #2799) |
| **Desktop Client / Cross-Platform UX** | OpenClaw, Hermes, CoPaw, LobsterAI | Native desktop apps (OpenClaw #75, 79 👍), Electron build failures (Hermes #40187/#47917), Tauri port config (CoPaw #5272), computer-use feature (LobsterAI v2026.6.15) |
| **Cron/Scheduling Reliability** | OpenClaw, NanoClaw, CoPaw, ZeroClaw | Data destruction via writes (OpenClaw #40001), session pruning bugs (OpenClaw #50248), misfire grace windows (CoPaw #5241), NO_REPLY sentinel text (ZeroClaw #2128) |
| **A2A / Inter-Agent Protocols** | Hermes, ZeroClaw, CoPaw | A2A protocol support (Hermes #514, 18 👍), agent-to-agent approval policies (NanoClaw #2793), A2A agent discovery (ZeroClaw #7763), XiaoYi implementation (CoPaw #3839) |
| **LLM Provider Compatibility** | Hermes, PicoClaw, IronClaw, CoPaw | Gemini 3.5 schema fix (PicoClaw #3136), MiniMax tool serialization (Hermes #48123), Xiaomi/MiMo vision (Hermes #48074), NEAR AI Cloud provider (PicoClaw #2917) |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | CoPaw | NanoBot | Hermes Agent | PicoClaw |
|-----------|----------|----------|-------|---------|-------------|----------|
| **Primary Language** | Polyglot/Rust-core | Rust | Python (AgentScope) | Python | TypeScript | Rust |
| **Target User** | Advanced developers, multi-agent deployers | Power users, self-hosters | Enterprise (Huawei ecosystem) | Mid-range, quick-start | Developer productivity | Security-focused, minimal deployments |
| **Key Differentiator** | Largest community, deepest multi-agent | Structured release tracks, WASM plugins | AgentScope 2.0 migration, channel breadth | Fastest bug turnaround (hours) | Build complexity, A2A focus | SSRF prevention, TEE-capable models |
| **Architecture Strength** | Security evaluators, DB migration seams | Config cascade, evaluation harness | Desktop Tauri integration | Proxy-aware HTTP client, Mistral support | OAuth enforcement, provider diversity | OneBot security, DeltaChat gateway |
| **Architecture Weakness** | 500 open PRs, maintenance burnout risk | Cron pipeline gaps, Windows friction | Context compaction freezes, SIGSEGV crashes | No multi-tenant gateway, mobile WebUI gaps | Desktop build crisis, macOS/Win instability | Low community velocity for feature discovery |
| **Unique Features** | Bootstrapped file integrity, subagent model resolution | Canvas-store, WASM plugin hooks, MCP dashboard | XiaoYi dual WebSocket, Cron update CLI | Keenable search, Feishu QR enrollment | A2A protocol, reasoning_effort constraint fix | Vodozemac migration, NEAR TEE support |

**Emerging Tripwire:** Projects with **highest community activity** (OpenClaw, ZeroClaw, CoPaw) are also the ones with the most **high-severity, unpatched security vulnerabilities** (CVE-2026-29611 in NanoClaw, prompt-injection-to-RCE in CoPaw #5234). Immediate attention needed.

---

## 6. Community Momentum & Maturity

**Tier 1: Rapid Iteration / Feature Velocity**
- **OpenClaw, ZeroClaw, CoPaw, IronClaw** — 45–500 daily updates, stacked PR series, concurrent milestone targeting. These are the ecosystem's innovation engines but carry the highest regression risk. CoPaw's dual-track (v1.1.12 + v2.0.0a1) is the most ambitious.

**Tier 2: Stabilization & Polish**
- **NanoBot, LobsterAI, PicoClaw, NanoClaw** — Focused on bug fixes, security patches, and incremental features. NanoBot's same-day fix turnaround (#4366 closed → #4367 merged) and PicoClaw's SSRF response (#3070 closed → #3140 merged) exemplify best-in-class maintenance discipline.

**Tier 3: Low Activity / Maintenance Phase**
- **NullClaw, Moltis** — Stable but awaiting maintainer attention on open PRs/issues. NullClaw's PR #960 (CLI arrow key fix) has been open unreviewed, despite resolving a 54-day-old bug (#865).
- **TinyClaw, ZeptoClaw** — Dormant. No activity indicators suggest active development has paused.

**Key Maturity Signal:** The ecosystem is producing **peer-reviewed security vulnerabilities** (CVE-2026-29611) and **structured release trackers** (ZeroClaw's v0.8.x/v0.9.0 milestones) — hallmarks of a maturing open-source landscape transitioning from hobbyist to production-critical deployments.

---

## 7. Trend Signals

**Signal 1: Security is Becoming a Differentiator — Not an Afterthought**
- Multiple CVEs and prompt-injection-to-RCE reports (#CoPaw #5234) are surfacing simultaneously. Projects with dedicated security evaluators (OpenClaw #92086) and sandbox path confinement (NanoClaw #2799) will win enterprise trust. Expect **zero-trust agent architectures** to become a baseline requirement within 12 months.

**Signal 2: The Desktop Client Is the New Battleground**
- Three of the top-voted feature requests across projects involve native desktop clients (#OpenClaw #75: 79 👍, #Hermes #38602: 17 👍, #CoPaw #5272). The failure of Hermes' Electron build (#40187) and the success of LobsterAI's "computer use" feature suggest **Tauri-based lightweight clients** (CoPaw's approach) may win over Electron-heavy ones. Cross-platform reliability is table stakes.

**Signal 3: Multi-Agent Orchestration Is Moving from "Nice-to-Have" to "Must-Have"**
- Subagent model resolution (OpenClaw), agent-to-agent approval policies (NanoClaw), A2A protocol support (Hermes, ZeroClaw), and session isolation (NanoClaw #2796) indicate that **single-agent deployments are becoming insufficient**. The ecosystem is converging on a model where agents spawn and manage sub-agents with independent configurations.

**Signal 4: Asian Market Integration Is Driving Channel Development**
- Feishu/Lark (NanoBot #4391), DingTalk (CoPaw #5237), XiaoYi/Huawei (CoPaw #1911, #3839), WeChat/WeCom (IronClaw #1584), and Mistral (NanoBot #4351) — the most active channel development targets are for Asian enterprise platforms. Western-only messaging integration is no longer sufficient for global relevance.

**Signal 5: The "Fallback Model" Pattern Is Emerging as a Critical UX Feature**
- NanoBot (#4389), Hermes (#27555), and PicoClaw (#3111) all touch on fallback model chains, vision model fallbacks, and provider degradation handling. As LLM providers experience outages and deprecations, **graceful fallback is becoming a core reliability requirement**, not a nice-to-have.

**Value for AI Agent Developers:**
- Invest in **sandbox file I/O** and **session isolation** now — these are clear adoption blockers for production deployments.
- Prioritize **desktop client support** if targeting power users; if Web-first, ensure **mobile Safari CSS compatibility** (NanoBot #4388 is a warning sign).
- Build **multi-agent orchestration** with explicit subagent configuration (model, permissions, lifecycle) — the ecosystem is standardizing on this model.
- Prepare for **Chinese/Asian enterprise platforms** — the fastest-growing channel demand is for Feishu, DingTalk, and WeChat, not Slack or Discord.
- Implement **fallback chains** for every provider integration — single-provider dependencies are becoming untenable.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-18

## Today's Overview
NanoBot saw an extremely productive day with **18 pull requests merged or closed** against **10 updated issues**, indicating a high-maintenance cadence and strong contributor momentum. No new releases were published today, but the codebase received significant fixes across memory, provider compatibility, UI, and filesystem security domains. Open issues remain concentrated on multi-instance support, fallback model configurability, and onboarding UX — signaling that the project is actively addressing both technical debt and user experience gaps as it approaches its next version milestone.

## Releases
**None** — No new releases were published today. The latest available release remains the previously published version.

## Project Progress
Eighteen PRs were merged or closed today, reflecting strong community and core team velocity. Key advances:

- **Agent & Memory Reliability** — `#4373` preserves delivery context during memory consolidation, preventing loss of channel delivery state across replay windows. `#4349` fixes replay-window history trimming so LLM replay does not start mid-turn during long user messages.
- **Provider Ecosystem Expansion** — `#4350` adds **Keenable** as a new web search provider. `#4351` delivers dedicated Mistral support, fixing `reasoning_effort` value constraints, tool-call streaming, and JSON-mode identification. `#4367` disables proxy routing for local endpoints while respecting environment proxy for cloud providers, resolving a key regression for local model servers.
- **Channel & Bridge Improvements** — `#4354` sends WhatsApp read receipts (blue ticks) for incoming messages. `#4381` recovers failed Feishu streaming updates by reopening `streaming_mode` before retrying. `#4391` (open) adds QR scan-to-create bot login for the Feishu channel.
- **Security & Filesystem** — `#4053` (closed) keeps read-only roots out of write paths, hardening workspace access policy. `#4380` fixes git command execution in workspace subdirectories. `#4202` clarifies filesystem write policy with explicit read/write allowed directory separation.
- **DX & Logging** — `#4385` logs the primary model error text before fallback attempts. `#4386` silences unroutable CLI progress noise. `#4322` (closed) fixed a `NameError` in `context.py` after a branch merge.
- **CLI & WebUI** — `#4283` corrects activity duration display in WebUI. `#4347` fixes `my tool` model preset switching with clearer output.

## Community Hot Topics

- **#4360** (closed, 9 comments) — *"end of file unexpected" during installer*: Affected fresh Debian 13 Docker containers. The high comment count suggests a systemic installer issue for certain base images, now resolved.

- **#4388** (open, 1 comment) — *iOS Safari WebUI input field zoom bug*: User reports that even after mobile UI fixes, tapping the input box on iPhone Air (iOS 26.5) triggers automatic page zoom and UI deformation on WebUI.

- **#4376** (open, 1 comment, 1 👍) — *User-friendly wizard*: Community member stresses that `nanobot onboard --wizard` is too technical for non-expert users, requesting a simplified onboarding flow.

- **#936** (open, 1 comment) — *Multi-Tenant Gateway*: Long-standing issue (since February) requesting a single gateway instance to manage multiple agents, reducing container overhead.

- **#4389** (open, 1 comment) — *Per-model contextWindowTokens for fallback models*: User points out that fallback models with smaller context windows cause prompt overflow, as `contextWindowTokens` is currently global-only.

Analyzing these patterns, the community is pressing on three fronts: **improving installation reliability** (Docker/env issues), **mobile WebUI polish**, and **multi-agent resource efficiency** — all indicating a growing base of production users running multiple agents.

## Bugs & Stability
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | #4388 — iOS Safari WebUI zoom/UI break | Open | None yet |
| **Medium** | #4389 — Fallback model context window overflow | Open | None yet |
| **Medium** | #4366 (closed) — Local model servers broken by proxy settings | Closed | #4367 (merged) |
| **Low** | #4322 (closed) — `session_key` NameError after merge | Closed | Included in merge |
| **Low** | #4360 (closed) — Installer EOF in Debian 13 Docker | Closed | Fix merged |

The most impactful regression was **#4366** (local model servers silently failing under system proxy), which was fixed and merged the same day via `#4367`. The iOS WebUI issue (#4388) remains unaddressed but is likely a CSS/`viewport` meta-tag issue common to many Safari responsive UIs.

## Feature Requests & Roadmap Signals

- **#4392** (open PR) — Adds `agents.defaults.microcompactToolResults` to make tool-result microcompaction configurable. This is a strong candidate for the next release, as it addresses cache-sensitive deployments.
- **#4391** (open PR) — Feishu QR scan-to-create bot flow. Likely to land soon given it's a fully implemented PR.
- **#4390** — "Multi-instances for normies": Hiding UI settings for multiple instances on one machine. Signals demand for simpler multi-instance management.
- **#4378** — Cron-level model/preset switching: User wants a scheduler to swap models/presets at specific times. Could evolve into a cron configuration feature.
- **#3437** (open since April) — On-demand heartbeat trigger for debugging. Still open but low activity; may be deprioritized.

**Predictions for next release:** Keenable search provider (#4350), Mistral provider fixes (#4351), proxy-aware HTTP client (#4367), and microcompaction configurability (#4392) are all mature PRs likely to ship together.

## User Feedback Summary
- **Pain point clarity:** Users are frustrated by technical barriers to entry (#4376) and lack of multi-instance simplicity (#4390). One user explicitly called the wizard "not user-friendly for new or non-technical users."
- **Use case alignment:** Strong interest in running multiple agents on single machines (#936, #4390) and managing fallback models gracefully (#4389). This suggests users are deploying agents in production and need resource-efficiency features.
- **Satisfaction signals:** The quick turnaround on #4366 (proxy bug reported and fixed same day) and #4360 (installer crash fixed) demonstrates responsive maintenance. The single comment on #4322 shows users are actively tracking merges.
- **Dissatisfaction:** The iOS Safari WebUI bug (#4388) is a second occurrence, suggesting the previous "mobile UI fix" was incomplete — a source of user frustration for mobile-first users.

## Backlog Watch
- **#3437** (April 25, open) — *On-demand heartbeat trigger for debugging*: Unanswered for 54 days. No maintainer response. While not critical, this RFC could improve developer experience for agent behavior debugging.
- **#936** (February 21, open) — *Multi-Tenant Gateway*: 117 days without a maintainer comment. This is a frequently referenced feature request (#4390 also references multi-agent use cases). Given community interest, a maintainer update on feasibility would be valuable.
- **#4021** (May 27, open) — *Dedup reasoning items in OpenAI Codex provider*: Waiting 22 days. AI-assisted PR with a clear regression fix; likely waiting on review bandwidth.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the Hermes Agent project digest for 2026-06-18.

---

## Hermes Agent Project Digest — 2026-06-18

### 1. Today's Overview
The Hermes Agent project is experiencing a period of **very high activity**, with 50 issues and 50 PRs updated in the last 24 hours. The community is extremely engaged, but the project is struggling with a significant **build and installation stability crisis**, particularly on macOS and Windows. A large volume of duplicate bug reports regarding desktop build failures, Electron binary caching, and Windows installer permissions indicates a critical regression in the release pipeline. Despite this, core development continues with fixes to the agent loop, gateway, and provider compatibility, suggesting the team is actively firefighting.

### 2. Releases
**None.** No new versions were published today. The latest reported user version is v0.16.0 (mentioned in issue #48061).

### 3. Project Progress
Today saw **11 PRs merged or closed**. Key advances and fixes include:

- **Phantom Tool-Call Loop Fix:** **PR #48109** (merged) dampens the empty-name phantom tool-call loop that was causing 3-4x token burn and context corruption in weak models (related to Issue #47967). This is a critical stability fix for the agent core.
- **Safety & Auth:** **PR #47532** (open) proposes removing the legacy dashboard session token to enforce OAuth as the single identity gate.
- **Provider Fixes:** **PR #48123** (open) fixes serialization of `MiniMax` tool results to comply with Anthropic schema requirements. **PR #48074** (open) promotes `reasoning_content` to visible content for Xiaomi MiMo vision models.
- **Gateway & CLI:** **PR #48127** (open) fixes a bug where long-lived gateway processes could ignore updated `agent.max_turns` config. **PR #48036** (open) fixes `/model` switches being silently wiped after a session auto-reset.
- **UI Polish:** **PR #48129** (open) suppresses redundant "preparing execute_code…" status lines for a cleaner UX during coding tasks.

### 4. Community Hot Topics
- **A2A Protocol Support (#514):** (22 comments, 18 👍) Still the most popular feature request. The community is eagerly awaiting inter-agent interoperability using the open standard.
- **Rocket Chat Support (#3725):** (10 comments, 8 👍) A clear demand for a new gateway/messaging channel, indicating users want to deploy Hermes in enterprise collaboration tools.
- **Desktop Client-Only Installation (#38602):** (5 comments, 17 👍) High demand for a thin-client mode where the desktop app connects to a remote Hermes backend, rather than bootstrapping the full runtime locally.
- **Desktop Build Fails on macOS (#40187, #47917):** (9+7 comments) Two of the most active bug threads highlight the severe community frustration with the broken build pipeline on macOS.

### 5. Bugs & Stability
The project is currently facing a **stability crisis** with its build and deployment system.

- **Priority 1: Hermes sends empty runtime model/provider on Linux pipx install (#48061).** This breaks core functionality on installation.
- **Priority 2: Desktop Build Failure on macOS/Windows (Multiple Duplicates).** Issues #47917, #40187, #48084, #48059, #48021 all describe the same root cause: the `electronDist` path is misconfigured after updates, causing `electron-builder` to fail. While **PR #48122** (open) attempts a self-heal retry for the desktop, the volume of duplicates suggests the fix is incomplete.
- **Priority 2: Windows Installer Fails with "Access Denied" on `pythonw.exe` (#48100).** A Windows-specific regression in the installer or auto-update mechanism is causing critical failures.
- **Priority 2: `/new` does not reset model to config default (#48055).** A UX regression affecting all users who switch models mid-session.
- **Priority 1: Vision fallback chain broken (#27555).** A `TypeError` caused by mismatched keyword arguments in the vision provider resolver silently breaks the entire fallback chain.

### 6. Feature Requests & Roadmap Signals
- **Strong Signal:** **Agent-to-Agent (A2A) Protocol (#514)** is the single most requested feature and represents the key strategic direction for the project.
- **Moderate Signal:** **Desktop Client-Only Mode (#38602)** is a highly requested architecture change, likely to be considered for the next major version.
- **Emerging Trend:** Users are requesting more granular control over the agent, including **per-turn provider/model overrides** (#41190, #23739) and **cross-profile subagent spawning** (#41889). This signals a need for advanced agent orchestration capabilities.
- **Integration Mindset:** Users are actively building and requesting integrations with **Rocket Chat** (#3725), **WhatsApp** (#47477), **Claude Code** (#47199), and the **A2A protocol** (#514), indicating a strong desire for an interoperable, platform-agnostic agent.

### 7. User Feedback Summary
- **Satisfaction:** Users are highly engaged, contributing feature requests, detailed bug reports (often with root cause analysis), and even custom memory provider integrations (like `agentmemory` in #6715). The community is technically proficient.
- **Dissatisfaction:** The **primary pain point is installation and update stability.** Repeated failures on macOS and Windows are causing significant frustration. The "summary" in #47917 ("Desktop build fails again") perfectly captures the user sentiment of recurring regression.
- **Use Cases:** The community is heavily focused on coding (with deep workstation integration), local deployment, and enterprise/business messaging (Slack, Rocket Chat, WhatsApp).
- **Unique Concerns:** One user reported a **security-critical UX issue** (#46371) where the "YOLO" approval-bypass toggle in the desktop GUI is an unlabeled, easily-accidentally-activated button. This was flagged as a safety concern.

### 8. Backlog Watch
- **Issue #6715 (Integration: agentmemory):** (3 comments, 5 👍) A high-quality proposal for a new memory provider. Created 2026-04-09, it remains open with no maintainer response, blocking a potentially valuable plugin.
- **Issue #22931 (AES-256-GCM Nonce Reuse Risk):** (Closed by a "sweeper:cannot-reproduce" bot, not a human). The user raised a serious architectural security concern about the local long-term memory encryption. A closed status without thorough human review could be a security risk.
- **Issue #27555 (Vision fallback broken):** (P1, open since May 17). Despite being high severity, this bug has not been directly addressed by a PR. The fact that it is silently swallowing errors makes it a ticking time bomb for users relying on vision capabilities.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the PicoClaw project digest for **2026-06-18**.

---

## PicoClaw Project Digest | 2026-06-18

### 1. Today's Overview
PicoClaw shows a high level of development velocity today, with 6 merged or closed Pull Requests and 2 closed Issues in the last 24 hours. The team is actively responding to critical security vulnerabilities (OneBot SSRF) and compatibility issues (Gemini 3.5), while also pushing forward major integration features like the NEAR AI Cloud provider and a DeltaChat gateway. The release of a new nightly build (`v0.3.0-nightly.20260617`) indicates continuous iteration, though stability warnings on the nightly channel remain in effect. Overall, the project is in a strong maintenance and feature-adding phase.

### 2. Releases
- **New Release:** `nightly` — **v0.3.0-nightly.20260617.a16a1e15**
  - This is an automated nightly build containing the latest commits on the `main` branch.
  - **Status:** Unstable; use with caution.
  - **No migration notes or breaking changes** are explicitly documented for this release.
  - **Full Changelog:** [v0.3.0...main](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)

### 3. Project Progress
Six Pull Requests were merged or closed in the last 24 hours, representing significant progress in stability, security, and new integrations:

- **Critical Security Fix:** [PR #3140](https://github.com/sipeed/picoclaw/pull/3140) — *fix(onebot): block private inbound media fetches* — Closed/merged. Prevents SSRF attacks by blocking fetches to private/localhost addresses from attacker-controlled media URLs.
- **Gemini Compatibility Fix:** [PR #3136](https://github.com/sipeed/picoclaw/pull/3136) — *fix(gemini): set both camelCase and snake_case thought_signature* — Closed/merged. Resolves tool execution failures with Gemini 3.5 Flash.
- **New Provider:** [PR #2917](https://github.com/sipeed/picoclaw/pull/2917) — *feat(provider): add NEAR AI Cloud provider* — Closed/merged. Adds a first-class OpenAI-compatible provider for TEE-capable models.
- **Web Scraper Fix:** [PR #3139](https://github.com/sipeed/picoclaw/pull/3139) — *fix(web): update sogou search regex* — Closed/merged. Fixes Sogou search parsing after HTML structure changes.
- **UI Fix:** [PR #2990](https://github.com/sipeed/picoclaw/pull/2990) — *fix(web): read full session history for Web UI display* — Closed/merged. Fixes bug where users only saw the last user message in history.
- **New Feature (Korean UI):** [PR #3138](https://github.com/sipeed/picoclaw/pull/3138) — *리뷰기능 추가* — Closed/merged. Adds a review feature (likely for the Web UI).

### 4. Community Hot Topics
- **#3088 [Feature] Use vodozemac instead of libolm** — *Open, High Priority*
  - **Link:** [Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)
  - **Activity:** 2 👍, 1 comment. Author: pbsds.
  - **Analysis:** This is the most reacted-to item. The community is pushing for migration away from the unmaintained and insecure `libolm` to the official replacement `vodozemac`. This is a critical dependency modernization request that affects all users of the matrix/olm protocol layer.
- **#3093 [Feature] Request for SimpleX or Tox gateway** — *Open, Stale*
  - **Link:** [Issue #3093](https://github.com/sipeed/picoclaw/issues/3093)
  - **Activity:** 1 comment. Author: Damian-o2.
  - **Analysis:** A user is requesting support for alternative decentralized communication protocols (SimpleX, Tox, Wire). While stale, it signals a desire for less centralized messaging backends.

### 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
| -------- | ----- | ----------- | ---------- |
| **Critical** | [#3070](https://github.com/sipeed/picoclaw/issues/3070) (Closed) | **OneBot SSRF:** Attacker-controlled media URLs could make the host fetch private network resources. | **FIXED** by [PR #3140](https://github.com/sipeed/picoclaw/pull/3140) |
| **High** | [#3111](https://github.com/sipeed/picoclaw/issues/3111) (Closed) | **Gemini 3.5 Flash Tool Failure:** 400 Bad Request due to missing `thought_signature` in schema. | **FIXED** by [PR #3136](https://github.com/sipeed/picoclaw/pull/3136) |
| **Medium** | Newly opened [PR #3142](https://github.com/sipeed/picoclaw/pull/3142) | **Spawn Duplicate Messages:** Sub-agent `ToolResult` was duplicated to users. | Fix proposed (Open) |
| **Low** | [PR #3092](https://github.com/sipeed/picoclaw/pull/3092) (Open, Stale) | **Skills Install Silent Failures:** Type assertions discarded `ok` checks, causing silent zero-value behavior. | Fix proposed (Stale, awaiting review) |

### 6. Feature Requests & Roadmap Signals
- **Cryptography Upgrade (Likely v0.4.0):** The request to replace `libolm` with `vodozemac` [#3088](https://github.com/sipeed/picoclaw/issues/3088) is labeled "priority: high" and is critical for security. This is likely scheduled for the next major stable release.
- **NEAR AI Cloud Integration (Landing now):** The merge of [PR #2917](https://github.com/sipeed/picoclaw/pull/2917) means TEE-capable LLM support is here. Expect documentation and configuration examples to follow.
- **DeltaChat Gateway (In progress):** [PR #3063](https://github.com/sipeed/picoclaw/pull/3063) is still open, adding a decentralized messaging backend. This aligns with community requests for more privacy-focused gateways (Tox/SimpleX).

### 7. User Feedback Summary
- **Satisfaction (Security):** Users reporting the SSRF vulnerability [#3070](https://github.com/sipeed/picoclaw/issues/3070) were responded to quickly with a fix, demonstrating strong security hygiene.
- **Dissatisfaction (Compatibility):** The Gemini 3.5 Flash failure [#3111](https://github.com/sipeed/picoclaw/issues/3111) caused a temporary regression for users on the latest model. The rapid fix ([PR #3136](https://github.com/sipeed/picoclaw/pull/3136)) suggests the team prioritizes LLM provider compatibility.
- **Pain Point (History UI):** Users reported they could only see the last user message in session history [#2796](https://github.com/sipeed/picoclaw/issues/2796). This was fixed in [PR #2990](https://github.com/sipeed/picoclaw/pull/2990), a long-standing user experience bug.

### 8. Backlog Watch
- **High Priority:** [Issue #3088](https://github.com/sipeed/picoclaw/issues/3088) — *Use vodozemac instead of libolm*: This is the most critical open issue. It has high community interest (2 👍) and a clear security mandate. Maintainer attention is needed to begin the deprecation planning.
- **Stale PR:** [PR #3092](https://github.com/sipeed/picoclaw/pull/3092) — *fix(skills_install): add ok checks*: Opened 8 days ago without maintainer comment. This fix prevents silent installation failures and should be reviewed.
- **Stale Issue:** [Issue #3093](https://github.com/sipeed/picoclaw/issues/3093) — *Request for SimpleX or Tox*: Despite being a feature request, it has been marked stale without any maintainer acknowledgment of the roadmap for decentralized gateways.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-06-18

## Today's Overview

NanoClaw saw heavy development activity over the past 24 hours, with **19 pull requests** updated (16 open, 3 merged/closed) and **5 issues** updated (4 open, 1 closed). Two new rollup releases — **v2.1.17** and **v2.1.0** — were published, each containing breaking changes that require migration attention. The project's maintainers and community contributors are actively addressing critical security vulnerabilities (CVE-2026-29611) and delivery-stability bugs that affect all agents in a deployment. Overall, this is a high-velocity day with a strong focus on hardening the codebase after recent architectural changes.

---

## Releases

### v2.1.17
**Rollup release covering v2.1.1 through v2.1.17** — every `package.json` bump merged since the v2.1.0 tag.

**Breaking Changes:**
- **`@onecli-sh/sdk` 0.5.0 → 2.2.1** — This upgrade **requires a OneCLI server with the `/v1` API**. Older servers will return 404 on every SDK call. The sanctioned gateway and CLI versions are now pinned to ensure compatibility.
- **Migration note:** Users must upgrade their OneCLI server to a version supporting the `/v1` API before updating NanoClaw.

### v2.1.0
**Rollup release covering v2.0.65 through v2.1.0** — all `package.json` bumps since v2.0.64.

**Breaking Changes:**
- **Startup now requires an upgrade marker.** The host refuses to boot unless `data/upgrade-state.json` records that this install reached the current version through a sanctioned upgrade path.

**Migration note:** Fresh installs or backup restores that lack the upgrade marker will fail to start until they run through a proper upgrade sequence or set the opt-out environment variable `NANOCLAW_DISABLE_UPGRADE_TRIPWIRE=1` (available via PR #2780, merged today).

---

## Project Progress

### Merged/Closed PRs Today

| PR | Title | Type |
|----|-------|------|
| [#2797](https://github.com/nanocoai/nanoclaw/pull/2797) | fix(delivery): isolate per-session failures so one bad session can't stall delivery for all | **Bug fix** — resolves Issue #2796 |
| [#2794](https://github.com/nanocoai/nanoclaw/pull/2794) | fix(providers): restore env-var gateway auth for managed fleets | **Bug fix** — critical regression in v2.1.17 |
| [#2780](https://github.com/nanocoai/nanoclaw/pull/2780) | feat(upgrade-state): env opt-out for the startup tripwire (managed fleets) | **Feature** — env variable bypass for immutable VM deployments |
| [#2798](https://github.com/nanocoai/nanoclaw/pull/2798) | chore(release): expand CHANGELOG for v2.1.17 | **Documentation/Release** |

### Key Feature Advances
- **Per-session delivery isolation** (PR #2797) — A major stability improvement that prevents one corrupted session from halting message delivery for all agents. This is now merged and closes Issue #2796.
- **Managed fleet auth restoration** (PR #2794) — Fixed a regression where v2.1.17 broke LLM authentication for immutable VM images. Agents in managed-fleet deployments now authenticate via environment variables again.
- **Upgrade tripwire opt-out** (PR #2780) — Added `NANOCLAW_DISABLE_UPGRADE_TRIPWIRE=1` environment variable for managed fleets that cannot maintain upgrade-state.json across boots.

---

## Community Hot Topics

### Most Active Discussions

1. **[Issue #2796](https://github.com/nanocoai/nanoclaw/issues/2796) — One unhealthy session stalls message delivery for all agents** (CLOSED)
   - **Why it matters:** This was the highest-severity bug today. A single session whose `outbound.db` momentarily can't be read would take down message delivery for every agent until daemon restart. The fix (PR #2797) is now merged.
   - **Underlying need:** Users need fault isolation — one bad session should never impact others.

2. **[PR #2799](https://github.com/nanocoai/nanoclaw/pull/2799) — fix(security): confine send_file reads to /workspace (CVE-2026-29611)**
   - **Why it matters:** A prompt-injected or compromised agent could read any container-visible file (credential state, files under `/workspace/extra/*` mounts) and exfiltrate data via `send_file`. This is a security vulnerability being actively patched.
   - **Underlying need:** Users working with sensitive data need assurance that agent file access is sandboxed.

3. **[PR #2793](https://github.com/nanocoai/nanoclaw/pull/2793) — feat(agent-to-agent): per-message approval policies on connected agents**
   - **Why it matters:** This adds optional per-message approval gates for agent-to-agent connections — a governance feature that lets users control what one agent can send to another. Fully backward compatible.
   - **Underlying need:** Enterprise users need control over autonomous agent-to-agent communication workflows.

4. **[Issue #2791](https://github.com/nanocoai/nanoclaw/issues/2791) — add-imessage: Step 2 redirection fails if src/channels/ doesn't exist**
   - **Underlying need:** New users hitting setup friction due to missing directory checks in skill scripts — indicates onboarding documentation needs hardening.

---

## Bugs & Stability

### Critical
- **[Issue #2796](https://github.com/nanocoai/nanoclaw/issues/2796)** — One unhealthy session stalls message delivery for all agents. **FIXED** in PR #2797 (merged). Severity: **Critical** — affects all multi-agent deployments.

### High
- **[PR #2799](https://github.com/nanocoai/nanoclaw/pull/2799)** — `send_file` path traversal (CVE-2026-29611). A prompt-injected agent can read any container-visible file. **Fix PR open**, not yet merged. Severity: **High** — security vulnerability.

### Medium
- **[PR #2804](https://github.com/nanocoai/nanoclaw/pull/2804)** — `ncl messaging-groups create` always throws a NOT NULL constraint error. CLI create path is completely dead. **Fix PR open**.
- **[PR #2802](https://github.com/nanocoai/nanoclaw/pull/2802)** — Socket client has no request timeout and no response-size cap. Host that never writes a response leaves promise unsettled forever; host that streams without newline grows buffer without limit. **Fix PR open**.
- **[PR #2801](https://github.com/nanocoai/nanoclaw/pull/2801)** — `safeParseContent` fails on non-object JSON (bare strings, numbers). Callers get `undefined` instead of raw-text fallback. **Fix PR open**.

### Low
- **[Issue #2791](https://github.com/nanocoai/nanoclaw/issues/2791)** — `add-imessage` skill fails on fresh checkout due to missing `src/channels/` directory. **Fix PR open** (PR #2792).
- **[Issue #2789](https://github.com/nanocoai/nanoclaw/issues/2789)** — Setup skill is a 600-byte stub with no concrete recovery steps. **Fix PR open** (PR #2790).
- **[Issue #2787](https://github.com/nanocoai/nanoclaw/issues/2787)** — OneCLI port 10254 mentioned only in troubleshooting, never declared. **Fix PR open** (PR #2788).
- **[Issue #2785](https://github.com/nanocoai/nanoclaw/issues/2785)** — Migration skill has generic `# Context` H1 with no descriptive title. **Fix PR open** (PR #2786).

---

## Feature Requests & Roadmap Signals

### In Progress (Open PRs)
1. **[PR #2793](https://github.com/nanocoai/nanoclaw/pull/2793) — Per-message approval policies** for agent-to-agent connections. Likely to land in v2.2.x given its backward-compatible design and enterprise demand.
2. **[PR #2750](https://github.com/nanocoai/nanoclaw/pull/2750) — Stale outbound.db journal recovery** after container kills. Open since June 12; fixes two related failure modes. May land soon as it fixes documented bugs (#2516, #2640).
3. **[PR #2717](https://github.com/nanocoai/nanoclaw/pull/2717) — Atlas Cloud LLM backend** documentation. Open since June 9, still pending review. Signals demand for more third-party LLM provider options.

### Predictions for Next Release
- Security fixes (PR #2799) and timeout handling (PR #2802) are likely to land as hotfixes in v2.1.18 given their severity.
- CLI dead-ends (PR #2804, PR #2800) and parsing issues (PR #2801) may follow in a subsequent patch.
- The per-message approval feature (PR #2793) may debut in v2.2.0 as a major feature addition.

---

## User Feedback Summary

### Pain Points (from issues)
1. **Delivery stagnation:** One bad session halting all agent communication (#2796) — the most impactful user-facing bug today.
2. **Setup friction:** Missing directory checks in skill scripts (#2791), stub setup guide (#2789), under-documented port configurations (#2787) — new users are hitting multiple onboarding blockers.
3. **CLI dead ends:** `messaging-groups create` completely broken (#2804) — users cannot create messaging groups via CLI.
4. **Auth regression:** Managed-fleet agents failing authentication after v2.1.17 upgrade (#2794, already fixed).

### Use Cases (from PRs)
- **Enterprise/governance:** Per-message approval policies for agent-to-agent communication (#2793)
- **Managed fleets/immutable VMs:** Upgrade tripwire opt-out for production deployments (#2780)
- **Third-party LLM integrations:** Atlas Cloud as an OpenAI-compatible backend (#2717)
- **Dashboard/monitoring:** Read-only CLI-derived dashboard skill (#2795)

### Satisfaction Signals
- Rapid fix turnaround on Issue #2796 (opened and closed same day) shows responsive maintenance.
- Community contributors like `sturdy4days`, `specterslient95-lgtm`, and `amit-shafnir` are actively filing bugs and providing fix PRs — a sign of engaged, committed user base.

---

## Backlog Watch

### PRs Needing Attention
- **[PR #2717](https://github.com/nanocoai/nanoclaw/pull/2717) — Atlas Cloud LLM backend docs** (open since June 9). Hasn't received maintainer review in 9 days. This is a low-risk documentation addition that could reduce workload by attracting third-party LLM questions to documented answers.
- **[PR #2750](https://github.com/nanocoai/nanoclaw/pull/2750) — Stale outbound.db journal recovery** (open since June 12). Fixes two long-standing bugs (#2516, #2640). This is a complex fix that addresses production-critical journal corruption after container kills. Hasn't seen a review update in 6 days.

### Issues Needing Attention
- No long-unanswered issues identified — all open issues were updated today. The project's maintainers appear responsive to new reports. The oldest open issue in today's data is only 6 days old (PR #2717), suggesting the maintenance cadence is healthy.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the NullClaw project digest for June 18, 2026.

---

### NullClaw Project Digest – 2026-06-18

**Data Snapshot:** 3 open Issues, 1 open PR, 0 new releases in the last 24 hours.

---

### 1. Today’s Overview

The NullClaw project is currently in a low-activity maintenance phase with no new releases and no code merged in the past 24 hours. While the volume of new activity is low, a single high-impact Pull Request (#960) has been opened to fix a long-standing CLI usability issue, suggesting the maintainers or community are focusing on quality-of-life improvements. The three open Issues cover a mix of configuration confusion and functional bugs, with the scheduler problem being the most technically complex. Overall, the project appears stable but is awaiting maintainer attention on several open items.

### 2. Releases

No new releases have been published. The latest available version remains unchanged.

### 3. Project Progress

No Pull Requests were merged or closed today.

**Open Pull Request:**
- **PR #960** – *fix(cli): handle arrow keys in agent REPL*
  - **Author:** vernonstinebaker
  - **Summary:** Introduces a lightweight, allocation-free line editor for the interactive `nullclaw agent` REPL. It enables POSIX raw-mode input for TTY sessions, properly handling arrow keys, history navigation, cursor movement, backspace, Home/End, and word-left/right sequences.
  - **Status:** Open, no comments yet.

### 4. Community Hot Topics

The most active discussions this week revolve around two persistent Issues:

- **Issue #915** – *[bug] Problem with scheduler unauthorized* (2 comments)
  - **Link:** [Issue #915](https://github.com/nullclaw/nullclaw/issues/915)
  - **Context:** A user running NullClaw on Ubuntu with an external Ollama host (Qwen3.6:27b on RTX 3090) reports that the scheduler feature fails entirely, both in Telegram chat and CLI. The LLM and general tool calling work fine.
  - **Underlying Need:** The scheduler is a core autonomous feature; this bug suggests an authorization or session-handling gap between the scheduler module and the external LLM host. Users need reliable recurring task execution.

- **Issue #865** – *[bug] CLI shows ctrl characters for up/down/left/right keys* (2 comments)
  - **Link:** [Issue #865](https://github.com/nullclaw/nullclaw/issues/865)
  - **Context:** The CLI prints raw control characters instead of navigating through command history or moving the cursor.
  - **Underlying Need:** A critical UX pain point for developers and power users using the CLI daily. **PR #960 directly addresses this issue**, making it likely to be closed soon if reviewed.

### 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **High** | #915 – Scheduler unauthorized | Scheduler fails to execute tasks. Involves authentication with external LLM host. No workaround documented. | No fix PR yet. |
| **Medium** | #865 – CLI control characters | Arrow and navigation keys broken in terminal. Makes REPL nearly unusable. | **Fix exists in open PR #960** |
| **Low** | #861 – Web UI setup confusion | Not a code bug, but documentation gap causing configuration failures on headless servers. | No fix PR; documentation needed. |

**No new bugs were reported today.**

### 6. Feature Requests & Roadmap Signals

There are no explicit feature requests filed today. However, two signals point toward near-term roadmap priorities:

1. **CLI REPL usability (PR #960):** The fact that a community contributor wrote a custom line editor strongly indicates that the text-based interface is under heavy use. This is likely to be merged soon and will likely be included in the next minor release.
2. **Headless/Remote deployment (Issue #861):** The request for clear “human terms” instructions on running the Web UI via a tunnel on a VPS suggests growing demand for pure-server deployments. A future release may include simplified setup scripts or an official reverse-proxy guide.

### 7. User Feedback Summary

- **Pain Point (High):** The scheduler is unusable for a user with a mainstream setup (Ubuntu + Ollama + RTX 3090). This suggests the bug may affect a wider user base than just the reporter.
- **Pain Point (Medium):** The CLI REPL is essentially broken for keyboard navigation, frustrating developers who rely on terminal interfaces.
- **Dissatisfaction (Medium):** The Web UI documentation is described as “jargon-heavy” and unintelligible to the reporter. This is a documentation quality issue that discourages adoption on headless servers.
- **Satisfaction (Neutral):** General LLM and tool-calling functionality is reported to work “mostly fine,” indicating core features are stable.

### 8. Backlog Watch

The following items have been open for over a month with no response from maintainers:

- **Issue #861** – *How to enable the Web UI on headless VPS server?* (Created 2026-04-22, 1 comment)
  - **Link:** [Issue #861](https://github.com/nullclaw/nullclaw/issues/861)
  - **Risk:** A simple documentation request that is gathering dust. Inactivity risks frustrating new users who find the project hard to deploy remotely.

- **Issue #865** – *CLI shows ctrl characters* (Created 2026-04-23, 2 comments)
  - **Link:** [Issue #865](https://github.com/nullclaw/nullclaw/issues/865)
  - **Status:** A fix exists in PR #960. This issue should be closed once that PR is reviewed and merged.

**Maintainer Action Required:** Review and merge PR #960, and provide an answer or documentation update for Issue #861 to prevent new-user churn.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-18

## Today's Overview

IronClaw shows very high activity with 47 updated issues and 50 updated PRs in the last 24 hours, indicating intense development velocity. The team has closed 22 issues and merged/closed 18 PRs in this period, with major focus on the Reborn platform transition, automation stability, and infrastructure for the new Projects feature. A five-PR stack for "Reborn Projects" (PRs #5015–#5019) is now open and under review, representing a significant architectural addition. The project continues to ship multiple bug fixes daily across agent-loop, OAuth, WebUI, and Slack integration domains, while community testing from contributor `sunglow666` continues to surface UX regressions in the Reborn WebUI.

## Releases

No new releases today. The most recent release was v0.29.1 (PR #3708, closed 2026-06-17).

## Project Progress

**Merged/Closed PRs Today (selected):**
- [#5052](https://github.com/nearai/ironclaw/pull/5052) — Fix: Live Slack OAuth path structural DM-parity (closes #5009)
- [#5051](https://github.com/nearai/ironclaw/pull/5051) — Fix: Gmail auth-resume failure — stop run-borking + restore persistent-approval grant
- [#5035](https://github.com/nearai/ironclaw/pull/5035) — Feat: Show tool arguments live while the tool is running (closes #4852)
- [#5022](https://github.com/nearai/ironclaw/pull/5022) — Feat: Output-aware no-progress detection (PR3 of agent-loop redesign)
- [#5000](https://github.com/nearai/ironclaw/pull/5000) — Feat: Content-digest plumbing for output-aware progress (PR2)
- [#4977](https://github.com/nearai/ironclaw/pull/4977) — Fix: Approval-deny tool activity stays visible and ordered (closed)
- [#4983](https://github.com/nearai/ironclaw/pull/4983) — Remove NEAR AI tool-message flattening compatibility path (closed)

**Key Feature Advancements:**
- The **Reborn Projects** feature (5-PR stack, #5015–#5019) introduces a first-class `Project` entity, role-based access, HTTP endpoints, and WebUI frontend integration — a major architectural addition.
- **Agent-loop no-progress detection** (PR3 of 3, #5022) has been merged, completing the content-digest-based redesign for detecting stuck agents.
- **Live tool arguments** (#5035) now display while the tool is still running, improving real-time visibility.
- A **read-only agent filesystem viewer** (#5057) is proposed for WebChat v2, adding memory and home directory browsing.

## Community Hot Topics

**Most Active Issues (by comments):**
- [#1584](https://github.com/nearai/ironclaw/issues/1584) (3 comments) — WeChat channel: plugin available for OpenClaw, pending IronClaw port. Active for 3 months.
- [#3026](https://github.com/nearai/ironclaw/issues/3026) (3 comments, closed) — Epic: Reborn production wiring and cutover readiness — core infrastructure topic.
- [#4764](https://github.com/nearai/ironclaw/issues/4764) (2 comments, closed) — Shell approval denial leaves tool invocation pending with no user feedback.
- [#5009](https://github.com/nearai/ironclaw/issues/5009) (1 comment, open) — Slack OAuth structural DM-parity for live (non-triggered) path — security follow-up.

**Underlying Needs:**
- **Channel parity**: Users and developers need WeChat and Slack channels fully functional under Reborn, with proper OAuth and authorization flows.
- **Approval UX consistency**: Multiple issues (denied approvals, stale activity state) point to a need for production-grade approval workflow handling.
- **Onboarding clarity**: New users struggle with understanding automations, extensions, and the Reborn interface — indicating a need for guided onboarding.

## Bugs & Stability

**High Severity:**
- [#5007](https://github.com/nearai/ironclaw/issues/5007) (open) — Skills validation error does not clear after required fields are filled. UX blocker for skill management.
- [#5044](https://github.com/nearai/ironclaw/issues/5044) (open) — `NEARAI_MODEL=auto` rejected (HTTP 400) by cloud API — fix PR [#5045](https://github.com/nearai/ironclaw/pull/5045) proposed to resolve `auto` to `z-ai/glm-5.2`.
- [#4824](https://github.com/nearai/ironclaw/issues/4824) (open) — `cargo-deny` fails repo-wide: new RUSTSEC advisories against postgres crates. CI blocker for all PRs.

**Medium Severity:**
- [#5031](https://github.com/nearai/ironclaw/issues/5031) (open) — Slack connect card can be invoked after pairing and is English-only (i18n gap).
- [#3729](https://github.com/nearai/ironclaw/issues/3729) (open) — Failed `tool_install` calls shown as successful after page refresh (stale UI state).
- [#5009](https://github.com/nearai/ironclaw/issues/5009) (open) — Live Slack OAuth path lacks structural DM-parity (fix PR #5052 now merged).

**Lower Severity (UX polish):**
- [#4988](https://github.com/nearai/ironclaw/issues/4988) (closed) — Recent runs visualization (colored dots) is difficult to understand.
- [#4980](https://github.com/nearai/ironclaw/issues/4980) (closed) — Automations empty state doesn't explain how to create automations.
- [#5004](https://github.com/nearai/ironclaw/issues/5004) (closed) — Automations failure summary card is not actionable.
- [#4961](https://github.com/nearai/ironclaw/issues/4961) (closed) — "Working" indicator remains visible after agent finishes.

**Multiple bugs have matching fix PRs already open or merged**, indicating a responsive engineering team.

## Feature Requests & Roadmap Signals

**Likely for Next Release (v0.30.x):**
- **Reborn Projects** — The 5-PR stack (#5015–#5019) is under active review; this is a major feature for collaborative agent development.
- **Read-only agent filesystem viewer** (#5057) — A new WebChat v2 UI feature for browsing agent memory and project directories.
- **Headless routine creation** (#5041) — Fixes for automation persistence with `trigger_create`/`trigger_remove` under headless WebChat v2.
- **Scalable Agent Task Service** (#5036) — Infrastructure for automated engineering tasks (CI triage, code review, merge-conflict resolution).
- **Engineering productivity** (#4878) — Dogfooding IronClaw for its own development workflows.

**Longer-term signals:**
- **WeChat/WeCom channel porting** to Reborn ProductAdapter (#3582, #4191).
- **Improved automations UX** — dashboard improvements, visual explanations, actionable failure cards (from multiple UX issues).
- **Multi-language support** for Slack connect card and other UI elements (from #5031).

## User Feedback Summary

**Pain Points:**
- **Approval workflow confusion**: Denied tool approvals leave actions pending (#4764), activity ordering breaks (#4762), and denied tools show incorrectly as successful after refresh (#3729).
- **Automations usability gap**: Users cannot easily understand or act on automation failures (#5004), cannot create automations from the UI (#4980), and the visualization is opaque (#4988).
- **Onboarding friction**: New users get redirected to Welcome page when trying to access Extensions/Automations (#4793), Skills validation is unclear (#5007).
- **OAuth frustration**: Gmail connection fails with misleading errors (#5051), Google tokens expire without guidance (#5054), Slack OAuth paths are inconsistent (#5009).

**Satisfaction Signals:**
- Active community testing by `sunglow666` who filed 10+ detailed UX issues with reproduction steps and expected behavior — indicating engaged testers.
- Multiple bugs are being fixed within 1–2 days of filing (e.g., #4779 activity ordering fixed in #4977, #4961 working indicator fixed).
- The team is responsive: OAuth refresh fixes (#5053, #5054), Slack DM-parity (#5052), and Gmail auth-resume (#5051) all merged same-day as the issues were filed.

## Backlog Watch

**Issues Needing Maintainer Attention:**

- [#1584](https://github.com/nearai/ironclaw/issues/1584) — WeChat channel for IronClaw (open since March, 3 comments). The npm package exists for OpenClaw; porting to Reborn is tracked in #3582 but no PR yet.
- [#4824](https://github.com/nearai/ironclaw/issues/4824) — `cargo-deny` failing repo-wide (RUSTSEC advisories, open 6 days). CI blocker for all PRs — should be high priority.
- [#3729](https://github.com/nearai/ironclaw/issues/3729) — Failed `tool_install` shown as successful after refresh (open 1 month). No linked fix PR yet.
- [#4191](https://github.com/nearai/ironclaw/issues/4191) — WeCom Channel Validation Findings (open 3 weeks, comprehensive bug list). No resolution or fix PRs visible.
- [#4115](https://github.com/nearai/ironclaw/issues/4115) — UI/UX issues in channel removal flow (open 3 weeks). Minor but stale — likely needs UI polish pass.

**PRs Stalled or Waiting for Review:**
- [#4876](https://github.com/nearai/ironclaw/pull/4876) — Dependency bump (43 updates, open 4 days). Could be blocked by the `cargo-deny` failure (#4824).
- [#5015–#5019](https://github.com/nearai/ironclaw/pull/5015) — Reborn Projects stack (all open, awaiting review). This is the largest pending feature addition.

---

*Data sourced from github.com/nearai/ironclaw — snapshot taken 2026-06-18T00:00:00Z*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for 2026-06-18.

---

## LobsterAI Project Digest — 2026-06-18

### 1. Today's Overview
Project activity is very high, with 13 pull requests merged in the last 24 hours, indicating a strong push toward a stable release candidate. The latest release (2026.6.15) introduced major features including computer use and real-time voice input, while the current batch of merges focuses heavily on bug fixes and polish for the Cowork feature area. No new issues were reported, suggesting the team is successfully closing out work items from the previous sprint. Overall, project health is strong with a clear emphasis on stability and UX refinement.

### 2. Releases
- **New Version:** LobsterAI 2026.6.15
- **Key Changes:**
    - **Feature:** Added "computer use" capability.
    - **Feature (Cowork):** Added real-time ASR voice input.
    - **Feature (Cowork):** Improved post-compaction context continuity.
- **Breaking Changes:** None documented.
- **Migration Notes:** No specific migration steps required.

### 3. Project Progress
Today's work was dominated by bug fixes and incremental improvements across the Cowork, Renderer, and Docs areas. Key advances include:
- **Stability & Performance:** Fixed a startup-stop race condition in Cowork, raised the heap limit in the OpenClaw gateway to prevent OOM crashes, and reduced UI jank for long sessions.
- **User Experience:** User messages now render as plain text (preserving line breaks), model metadata is correctly displayed after stopping a stream, and the scroll-to-bottom behavior is now more reliable.
- **Feature Polish:** Resolved a merge conflict causing voice input cancellation guards to be lost, and preserved model selection state for packages with identical names.
- **Infrastructure:** Updated portal fallback URLs to new domains and optimized the README documentation.

### 4. Community Hot Topics
There are no highly active issues or PRs with significant commentary today. The project's development is currently driven entirely by the core team. The most structurally interesting PRs indicate a deep focus on the Cowork real-time features (ASR, streaming, context management) and the underlying OpenClaw infrastructure.

### 5. Bugs & Stability
No new bugs were explicitly reported in the last 24 hours. However, the high volume of merged fixes today addresses pre-existing stability concerns:
- **High Severity:** OpenClaw gateway Out-of-Memory (OOM) crashes (PR#2149).
- **Medium Severity:** Race condition where a user stop signal was ignored during session startup (PR#2147), and a merge conflict that broke voice input cancellation (PR#2162).
- **Low Severity:** UI jitter from long-distance smooth scrolling in the rail (PR#2171), and incorrect rendering of user line breaks (PR#2173).

### 6. Feature Requests & Roadmap Signals
No new feature requests were filed today. The roadmap signals are clear from the release and recent merges:
- **Next likely features:** The "computer use" and "realtime ASR voice input" features from the 2026.6.15 release are likely to receive further polish and bug fixes in the next point release.
- **Medium-term focus:** The continued investment in the `cowork` and `openclaw` areas suggests a roadmap focus on agent task continuation, context management, and real-time collaboration capabilities.

### 7. User Feedback Summary
No direct user feedback was recorded in the form of issues today. Based on the fixes applied, inferred user pain points include:
- **Pain Points:** Crashes during long workloads (OOM), frustration from losing voice input state during sessions, and poor visual feedback when a message stream is stopped.
- **Satisfaction:** Likely positive response to the new "computer use" feature and real-time voice input. The fix for preserving user line breaks in messages addresses a common UX complaint.

### 8. Backlog Watch
- **PR #1463 ([CLOSED])** - *fix long modal titles*: This PR from 2026-04-04 was finally closed today after being marked as stale. While closed, it required over two months to merge.
- **Pending Action:** No critical issues or PRs remain open and unattended. The maintainers are actively clearing the backlog.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Date:** 2026-06-18

---

## 1. Today's Overview
Project activity is **moderate** today, with 5 issues updated in the last 24 hours and a single pull request (PR) opened. While no new releases have been cut, the team is actively addressing a cluster of bugs and feature requests—particularly around audio, configuration, and RPC settings. One bug (#1128) was closed, signaling a quick turnaround on a resolved transcription issue, but four new or active issues remain open, indicating sustained community use and ongoing refinement.

## 2. Releases
**None.** No new versions or releases were published in the last 24 hours.

## 3. Project Progress
- **Closed PRs today:** **0 merged/closed**
- **Open PRs:** 1 (not yet merged)
  - [#1130 – feat: make webui rpc timeout configurable](https://github.com/moltis-org/moltis/pull/1130)  
    Author: khimaros. This PR addresses issue #1127 by adding a configurable RPC timeout for the WebUI. It remains open and under review.

**Summary:** No code was merged today. The only PR is in review, and no feature branches have been finalized into the main branch.

## 4. Community Hot Topics
- **#1126** (OPEN) – *[Feature]: allow to configure the format of tts output*  
  [GitHub](https://github.com/moltis-org/moltis/issues/1126)  
  Comments: 3 | 👍: 0  
  The most active issue by comment count. Users are requesting flexibility in TTS output format (e.g., audio codec, sample rate). This signals a need for greater audio pipeline customization, likely driven by diverse downstream integration use cases (voice assistants, accessibility tools, etc.).

- **#1128** (CLOSED) – *[Bug]: transcription errors with self-hosted whisper.cpp*  
  [GitHub](https://github.com/moltis-org/moltis/issues/1128)  
  Closed quickly after being reported; likely a known or duplicate issue with a straightforward fix.

**Underlying need:** Users are pushing for more configuration knobs in both audio input (transcription) and output (TTS) paths, indicating Moltis is being used in varied hardware/software environments that require tuning.

## 5. Bugs & Stability
**Total bugs reported today:** 2 (both open)

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **High** | [#1129](https://github.com/moltis-org/moltis/issues/1129) | **Lack of echo cancellation causes agent to retrigger itself in live mode** – a serious usability bug that breaks hands-free or always-listening modes. | No PR linked |
| **Low** | [#1128 (now closed)](https://github.com/moltis-org/moltis/issues/1128) | Transcription errors with self-hosted whisper.cpp – resolved. | N/A (closed) |

**Assessment:** The echo cancellation bug (#1129) is the most critical stability issue, as it directly impairs the core live-agent experience. It has no fix PR yet and should be prioritized.

## 6. Feature Requests & Roadmap Signals
| Issue | Request | Likely for Next Version? |
|-------|---------|--------------------------|
| [#1126](https://github.com/moltis-org/moltis/issues/1126) | Configure TTS output format | Moderate – configurable audio format is a common need; might land if TTS subsystem is being refactored. |
| [#1127](https://github.com/moltis-org/moltis/issues/1127) | Configure RPC timeout | **High** – a fix PR (#1130) already exists; this will likely be in the next release. |
| [#1131](https://github.com/moltis-org/moltis/issues/1131) | Copy + export as Markdown | Moderate – a quality-of-life feature for chat users; depends on UI team bandwidth. |

**Prediction:** The RPC timeout configuration (#1127/PR #1130) is the most likely near-term addition. TTS format and Markdown export are further out but represent real user demand.

## 7. User Feedback Summary
- **Pain points:**
  - Live mode users are experiencing self-triggering due to missing echo cancellation (#1129) – a clear sign of audio feedback loop issues.
  - Self-hosted whisper.cpp users hit transcription errors (#1128), although that was resolved quickly.
- **Desired capabilities:**
  - More control over audio pipeline (TTS output format, #1126).
  - Better integration with external tools (Markdown export, #1131).
- **Satisfaction signals:** The fast closure of #1128 suggests responsive maintainership on confirmed bugs, which is a positive indicator of project health.

## 8. Backlog Watch
No long-unanswered issues or PRs were identified in today’s data. All active items were created or updated in the last 48 hours, indicating a healthy, recent engagement cadence. The team appears responsive, and no items are languishing unattended.

**Overall Project Health:** Stable and moderately active. The community is engaged, bugs are being closed promptly, and the maintainers are working on important configuration improvements (RPC timeout). The echo cancellation bug (#1129) is the primary risk to user experience at this time.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-18

## Today's Overview

CoPaw is in an intensive development and bug-fixing cycle, with **45 issues** and **50 pull requests** updated in the last 24 hours. Activity is high, driven by the release of **v1.1.12** and parallel work on the major **v2.0.0a1** alpha milestone (AgentScope 2.0 migration). **26 open issues** remain active, and **34 PRs** were merged or closed today, indicating strong community engagement and maintainer responsiveness. The project is balancing feature work (console redesign, channel architecture improvements) with critical stability patches (SIGSEGV crashes, context compaction freezes, backup failures). Two new releases were cut today, signaling a rapid iteration cadence.

## Releases

**Two releases published on 2026-06-17:**

### v1.1.12
[View release](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.12)
- **Console Models Page Overhaul**: Provider aggregation, unified card UI, layout redesign
- **Simple Mode**: Flat navigation with sorted session list by updated time
- Numerous stability and UX fixes
- *No breaking changes noted*

### v1.1.12-beta.2
[View release](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.12-beta.2)
- Perf: removed unnecessary deep copy operations in agent config processing
- Feat: added session filter by title
- Chore: dependency bumps
- *Pre-release — users should upgrade to v1.1.12*

**In parallel**, PR [#5281](https://github.com/agentscope-ai/QwenPaw/pull/5281) bumps version to `2.0.0a1` for the AgentScope 2.0 alpha milestone, though this is likely a preparatory commit.

## Project Progress

### Merged/Closed PRs Today (34 total — selected highlights)

| PR | Description | Impact |
|---|---|---|
| [#5280](https://github.com/agentscope-ai/QwenPaw/pull/5280) | Release v1.1.12 | Public release |
| [#5281](https://github.com/agentscope-ai/QwenPaw/pull/5281) | Bump version to 2.0.0a1 | AgentScope 2.0 alpha |
| [#5274](https://github.com/agentscope-ai/QwenPaw/pull/5274) | Refactor XiaoYi channel to dual WebSocket | Fixes unusable channel |
| [#5272](https://github.com/agentscope-ai/QwenPaw/pull/5272) | Desktop port configuration | Environment variable support |
| [#5260](https://github.com/agentscope-ai/QwenPaw/pull/5260) | Fix Tauri plugin dependency installs | Fixes crash loop on startup |
| [#5271](https://github.com/agentscope-ai/QwenPaw/pull/5271) | Add async runtime probe for ChromaDB Rust bindings | Addresses SIGSEGV crashes |
| [#5277](https://github.com/agentscope-ai/QwenPaw/pull/5277) | Update project roadmap | Strategic planning |
| [#5041](https://github.com/agentscope-ai/QwenPaw/pull/5041) | Skip unreadable files in backup | Fixes whole-backup failure |
| [#5026](https://github.com/agentscope-ai/QwenPaw/pull/5026) | Fix duplicated session_id in filenames | Inter-agent task bug |
| [#4995](https://github.com/agentscope-ai/QwenPaw/pull/4995) | Preserve renderer tool output | Channel display fix |
| [#5176](https://github.com/agentscope-ai/QwenPaw/pull/5176) | Word-break for approval command text | UI overflow fix |
| [#3839](https://github.com/agentscope-ai/QwenPaw/pull/3839) | XiaoYi A2A protocol implementation | Long-standing channel fix |

### Features Advanced
- **Desktop UX**: Fixed port configuration, plugin dependency installation for Tauri sidecar
- **Agent UI**: Avatar upload/display support ([#5263](https://github.com/agentscope-ai/QwenPaw/pull/5263) — open)
- **CLI**: Cron job update command ([#5210](https://github.com/agentscope-ai/QwenPaw/pull/5210) — open)
- **Website**: SEO, contributor carousel improvements ([#5202](https://github.com/agentscope-ai/QwenPaw/pull/5202) — open)

## Community Hot Topics

### Most Active Issues

1. **[#1911](https://github.com/agentscope-ai/QwenPaw/issues/1911) — [CLOSED] Huawei XiaoYi channel not returning replies** (22 comments)  
   *Underlying need*: Users integrating CoPaw with Huawei XiaoYi ecosystem expect full two-way communication; the channel historically had protocol/connection issues. Recent PR [#5274](https://github.com/agentscope-ai/QwenPaw/pull/5274) and [#3839](https://github.com/agentscope-ai/QwenPaw/pull/3839) address this with dual WebSocket architecture.

2. **[#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) — [OPEN] Context compaction freezes process** (16 comments)  
   *Underlying need*: Sub-agent context compression causes unrecoverable freeze. This is a **critical stability issue** for multi-agent workflows. PR [#5242](https://github.com/agentscope-ai/QwenPaw/pull/5242) adds timeout protection.

3. **[#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064) — [OPEN] Agent-generated cron tasks not triggering** (12 comments)  
   *Underlying need*: Scheduled task reliability is broken — tasks appear created but never fire. PR [#5241](https://github.com/agentscope-ai/QwenPaw/pull/5241) increases misfire grace period from 60s to 3600s.

4. **[#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) — [OPEN] AgentScope 2.0 backend migration** (11 comments, 2 👍)  
   *Underlying need*: Community eagerly awaits the architectural upgrade. Version bump to 2.0.0a1 was committed today.

### Most Active PRs

- **[#5287](https://github.com/agentscope-ai/QwenPaw/pull/5287) — [OPEN] Fix context compaction summary exceeding schema maxLength** (first-time contributor)
- **[#5276](https://github.com/agentscope-ai/QwenPaw/pull/5276) — [OPEN] OpenClaw config migration CLI** (new ecosystem interoperability)
- **[#5241](https://github.com/agentscope-ai/QwenPaw/pull/5241) — [OPEN] Increase cron misfire grace window** (addresses #5064)
- **[#5242](https://github.com/agentscope-ai/QwenPaw/pull/5242) — [OPEN] Add timeout protection to context compaction** (addresses #5218)

## Bugs & Stability

### Critical/High Severity

| Issue | Description | Severity | Status | Fix PR |
|---|---|---|---|---|
| [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) | Context compaction freezes process | **Critical** — process unresponsive until restart | Open | [#5242](https://github.com/agentscope-ai/QwenPaw/pull/5242) (open) |
| [#5209](https://github.com/agentscope-ai/QwenPaw/issues/5209) | Desktop (macOS ARM64) crash loop — SIGSEGV | **Critical** — unusable on macOS | Closed (reproduced upstream ChromaDB issue) | [#5271](https://github.com/agentscope-ai/QwenPaw/pull/5271) (merged) |
| [#5243](https://github.com/agentscope-ai/QwenPaw/issues/5243) | ChromaDB Rust bindings SIGSEGV | **Critical** — 48 restarts in 2 days | Closed | [#5271](https://github.com/agentscope-ai/QwenPaw/pull/5271) (merged) |
| [#5266](https://github.com/agentscope-ai/QwenPaw/issues/5266) | MCP/ACP config not persisting to agent.json | **High** — configuration corruption | Closed | (implicitly fixed) |
| [#5234](https://github.com/agentscope-ai/QwenPaw/issues/5234) | Prompt injection → full RCE in cloud deployment | **Critical** — security vulnerability | Open | No PR yet |
| [#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140) | File download 404 for non-text files (docx/pdf) | **High** — core download feature broken | Open | No PR yet |
| [#5259](https://github.com/agentscope-ai/QwenPaw/issues/5259) | Vector index not persisted on Windows | **High** — memory_search broken on restart | Open | No PR yet |
| [#5162](https://github.com/agentscope-ai/QwenPaw/issues/5162) | Conversation thinking loop enters infinite loop | **High** — agent stalls | Open | No PR yet |
| [#4967](https://github.com/agentscope-ai/QwenPaw/issues/4967) | Process stuck in infinite loop during execution | **High** — cannot exit | Open | No PR yet |
| [#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171) | Context compression retains 0 tokens, loses all context | **High** — task failure | Open | No PR yet |
| [#5284](https://github.com/agentscope-ai/QwenPaw/issues/5284) | ChromaDB runtime probe fails due to invalid collection name | **Medium** — auto-degradation to local backend | Open | No PR yet |

### Regressions in v1.1.11/v1.1.12

- [#5258](https://github.com/agentscope-ai/QwenPaw/issues/5258) — `send_file_to_user` no longer provides download links (worked in v1.1.6b1)
- [#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262) — Disabled built-in skills re-enable on every upgrade (persistent issue)
- [#5181](https://github.com/agentscope-ai/QwenPaw/issues/5181) — Plugin dependency install spawns visible cmd windows

### Notable Stability Fixes Merged Today

- ChromaDB probe for SIGSEGV detection ([#5271](https://github.com/agentscope-ai/QwenPaw/pull/5271))
- Tauri plugin dependency install fixing crash loops ([#5260](https://github.com/agentscope-ai/QwenPaw/pull/5260))
- Backup skipping unreadable files instead of failing ([#5041](https://github.com/agentscope-ai/QwenPaw/pull/5041))

## Feature Requests & Roadmap Signals

### User-Requested Features (Highest Activity)

| Feature | Issue | Comments | Likelihood for Next Release |
|---|---|---|---|
| AgentScope 2.0 migration | [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) | 11 | ✅ **In progress** — v2.0.0a1 committed |
| UI Font Scaling & File Links | [#4077](https://github.com/agentscope-ai/QwenPaw/issues/4077) | 2 | 🟡 Medium — UX improvement |
| OpenClaw config migration | [#5254](https://github.com/agentscope-ai/QwenPaw/issues/5254) | (PR #5276) | ✅ **In PR** — CLI tool |
| Agent avatar upload | [#5263](https://github.com/agentscope-ai/QwenPaw/pull/5263) | (open PR) | ✅ **In PR** — likely v1.1.13 |
| AgentScope tracing initialization | [#4057](https://github.com/agentscope-ai/QwenPaw/issues/4057) | 5 | 🟡 Medium — observability demand |
| Cron job update CLI | [#4939](https://github.com/agentscope-ai/QwenPaw/issues/4939) | (PR #5210) | ✅ **In PR** |

### Predictions for Next Minor Release (v1.1.13)

- Agent avatar upload support
- OpenClaw migration CLI
- Cron misfire grace increase
- Context compaction timeout protection
- Desktop port configuration (already merged)

## User Feedback Summary

### Satisfaction Signals
- **High engagement**: 2 new releases, 50 PRs updated, 34 merged in 24 hours — maintainers are responsive
- **First-time contributors**: Multiple PRs from new contributors (niceIrene, lecheng2018, ly-wang19, AbbyJL) — healthy community onboarding
- **Ecosystem growth**: OpenClaw migration tool shows demand for interop with other agent platforms

### Pain Points (Most Vocal)

1. **Stability on macOS**: "SIGSEGV crashes 48 times in 2 days" — ChromaDB Rust bindings are the primary culprit. **Partially fixed** with probe [#5271](https://github.com/agentscope-ai/QwenPaw/pull/5271).

2. **Context compaction reliability**: Process freezes and token loss are blocking multi-agent use cases. **Multiple PRs in flight** ([#5242](https://github.com/agentscope-ai/QwenPaw/pull/5242), [#5287](https://github.com/agentscope-ai/QwenPaw/pull/5287)).

3. **Scheduled tasks broken**: "Agent-generated cron tasks cannot trigger" — undermines autonomy use cases. **Fix in review** ([#5241](https://github.com/agentscope-ai/QwenPaw/pull/5241)).

4. **Channel integration fragility**: XiaoYi (Huawei), Feishu, DingTalk channels have persistent issues. **Positive progress** with dual WebSocket refactor.

5. **Upgrade friction**: Skills re-enable, bug regressions in new versions — users request better upgrade stability testing.

6. **Windows vector persistence**: Memory search cannot survive restart — critical for long-term memory workflows.

7. **Security concern**: Reported prompt injection leading to RCE in cloud deployments ([#5234](https://github.com/agentscope-ai/QwenPaw/issues/5234)) — requires immediate maintainer attention.

## Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Priority | Stuck Reason |
|---|---|---|---|
| [#5234](https://github.com/agentscope-ai/QwenPaw/issues/5234) — Prompt injection → RCE | 1 day | **Critical** | Security — needs triage and fix |
| [#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140) — File download 404 | 6 days | **High** | No PR yet — affects core functionality |
| [#5259](https://github.com/agentscope-ai/QwenPaw/issues/5259) — Vector index not persisted on Windows | 1 day | **High** | No PR yet — Windows-specific |
| [#5162](https://github.com/agentscope-ai/QwenPaw/issues/5162) — Infinite thinking loop | 6 days | **High** | No PR yet |
| [#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171) — Context compression loses all context | 5 days | **High** | No PR yet (related to #5218) |
| [#4077](https://github.com/agentscope-ai/QwenPaw/issues/4077) — UI Font Scaling & File Links | 43 days | **Medium** | No PR yet — UX improvement |
| [#5264](https://github.com/agentscope-ai/QwenPaw/issues/5264) — Feishu group reply sent to private chat | 1 day | **High** | No PR yet — channel routing bug |
| [#4057](https://github.com/agentscope-ai/QwenPaw/issues/4057) — AgentScope tracing init | 43 days | **Medium** | No PR yet — observability |
| [#5237](https://github.com/agentscope-ai/QwenPaw/issues/5237) — DingTalk channel broken on uv install | 2 days | **High** | No PR yet — installation-specific |

### Open PRs Requiring Review

| PR | Age | Impact |
|---|---|---|
| [#5287](https://github.com/agentscope-ai/QwenPaw/pull/5287) — Context compaction summary overflow | 1 day | Prevents crash on schema validation |
| [#5276](https://github.com/agentscope-ai/QwenPaw/pull/5276) — OpenClaw migration CLI | 1 day | New feature — ecosystem bridging |
| [#5241](https://github.com/agentscope-ai/QwenPaw/pull/5241) — Cron misfire grace increase | 2 days | Fixes cron task reliability |
| [#5242](https://github.com/agentscope-ai/QwenPaw/pull/5242) — Context compaction timeout | 2 days | Fixes process freeze |
| [#5210](https://github.com/agentscope-ai/QwenPaw/pull/5210) — Cron update CLI command | 3 days | New CLI feature |
| [#5263](https://github.com/agentscope-ai/QwenPaw/pull/5263) — Agent avatar upload | 1 day | New UI feature |
| [#5275](https://github.com/agentscope-ai/QwenPaw/pull/5275) — Prevent cache pollution in proactive responder | 1 day | Stability fix |

**Overall Assessment**: The project is healthy with high community activity and responsive maintainers. The parallel work on v1.1.12 stabilization and v2.0.0a1 shows strategic momentum. However, the accumulation of high-severity open bugs (context compaction, infinite loops, file downloads, vector persistence) and the critical security report require prioritized attention. The next 1-2 weeks will be crucial for consolidating stability before the AgentScope 2.0 migration gains full speed.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-18

## Today's Overview

The ZeroClaw project shows exceptionally high activity today, with 50 issues and 50 pull requests updated in the last 24 hours—indicating a mature project in an intense development sprint. The project maintains 49 open issues and 41 open PRs, with 9 PRs merged or closed today and only 1 issue resolved, suggesting a heavy feature-development pace with limited bug-fix throughput. No new releases were cut today, though the active work targets several concurrent milestones (v0.8.1 through v0.9.0). The community is deeply engaged around architectural topics like computer-use desktop interaction, channel infrastructure improvements, and WASM plugin lifecycle management.

## Releases

No new releases today. The project is between releases, with active development targeting v0.8.1 (integration/channel/provider/tool queue), v0.8.2 (skills platform and WASM plugins), v0.8.3 (MCP dashboard), and v0.9.0 (auth/security/breaking changes). See issue trackers #6970, #7852, #7314, #7320, and #7432.

## Project Progress

**9 PRs merged/closed today**, covering several important fixes:

- **Canvas regression fix**: [PR #7678](https://github.com/zeroclaw-labs/zeroclaw/pull/7678) (closed) threads a shared CanvasStore into WS chat and ACP agent sessions, fixing the critical `/canvas` page regression from PR #6986
- **ACP event visibility**: [PR #7684](https://github.com/zeroclaw-labs/zeroclaw/pull/7684) (closed) surfaces history-pruner and turn-cancel as visible styled system events instead of raw assistant messages
- **Docs infrastructure**: [PR #7754](https://github.com/zeroclaw-labs/zeroclaw/pull/7754) (closed) deduplicates per-locale assets and drops print pages from rustdoc publishing, reducing gh-pages clone size by hundreds of MB
- **Config cascade work**: [PR #7839](https://github.com/zeroclaw-labs/zeroclaw/pull/7839) and [PR #7838](https://github.com/zeroclaw-labs/zeroclaw/pull/7838) (both closed) add `delete_with_cascade` for channels and agent owned-state on delete, part of the 8-PR stacked series for config management improvements
- **Provider validation**: [PR #7793](https://github.com/zeroclaw-labs/zeroclaw/pull/7793) (closed) fixes doctor validation for `custom`/`openai-compatible` providers that were always failing due to passing `None` endpoint
- **Heartbeat channels**: [PR #7718](https://github.com/zeroclaw-labs/zeroclaw/pull/7718) (closed) adds Matrix to the supported heartbeat target channel list
- **Telegram mention fix**: [PR #7843](https://github.com/zeroclaw-labs/zeroclaw/pull/7843) (closed) bypasses the `mention_only` gate for replies to bot messages in Telegram groups

## Community Hot Topics

- **#6909 — Computer-use desktop interaction RFC** ([Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)): 6 comments. The highest-comment issue proposes adding desktop screen capture and mouse/keyboard control, comparing with OpenAI Codex and openclaw/hermes. Users want ZeroClaw to compete on full computer-use capability.

- **#2079 — Native GitHub channel** ([Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/2079)): 6 comments. Community strongly desires first-class GitHub integration rather than custom webhook glue, wanting agents to observe and act on repos (issues, PRs, reviews) natively.

- **#6067 — Configurable reply-intent precheck** ([Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6067)): 5 comments. Users want smaller/faster models for channel reply-intent classification with hard timeout and timing logs, to avoid blocking the main agent turn.

- **#6954 — Route scheduled tasks through orchestrator** ([Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6954)): 4 comments. RFC addressing a cluster of related bugs (#6037, #6105, #6648, etc.) where cron bypasses the orchestrator message pipeline, causing safety and context issues.

- **#2128 — Cron/heartbeat NO_REPLY sentinel bug** ([Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/2128)): 4 comments. Persistent issue where "NO_REPLY" string is sent as literal text to channels instead of suppressing delivery.

- **#6970 — v0.8.1 integration tracker** ([Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6970)): 3 comments. Operational tracker for the current milestone, with active PRs across channels, providers, and tools.

**Active PR discussions**: PR #7833 (Discord rich embeds) and PR #7840 (config rename_with_cascade) are large contributions from a stacked series receiving review attention today.

## Bugs & Stability

**CRITICAL (S1 - blocked):**
- **[#7563 — Canvas-store regression**](https://github.com/zeroclaw-labs/zeroclaw/issues/7563) — **CLOSED today**. Web UI `/canvas` remained empty after WS chat sessions using the `canvas` tool. Fixed by PR [#7678](https://github.com/zeroclaw-labs/zeroclaw/pull/7678) which threaded shared CanvasStore into sessions. This was a regression from PR #6986.

**HIGH (S2 - degraded behavior):**
- **[#6105 — Missing cron job context**](https://github.com/zeroclaw-labs/zeroclaw/issues/6105): Agent has no reference to the message it sent when responding based on cron triggers. Related to the broader cron pipeline issue tracked in RFC #6954.
- **[#2128 — NO_REPLY sentinel text sent to channels**](https://github.com/zeroclaw-labs/zeroclaw/issues/2128): Active bug where cron/heartbeat systems send "NO_REPLY" as literal text to Telegram and other channels.
- **[#7904 — SKILL.md always-inject broken in compact mode**](https://github.com/zeroclaw-labs/zeroclaw/issues/7904): New bug filed today—the `always: true` frontmatter flag no longer forces skill instruction injection when runtime uses compact skill prompt mode.
- **[#6698 — Fluent locale files lag English sources**](https://github.com/zeroclaw-labs/zeroclaw/issues/6698): Non-English locale files are out of sync; e.g., `zh-CN` missing `tools.ftl`.

**Fix PRs in progress:**
- **[PR #7901](https://github.com/zeroclaw-labs/zeroclaw/pull/7901)**: Bounds repeated shell approval loops with a turn-local guard
- **[PR #7893](https://github.com/zeroclaw-labs/zeroclaw/pull/7893)**: Persists manual cron trigger results, fixing a gap where manual trigger history was lost
- **[PR #7903](https://github.com/zeroclaw-labs/zeroclaw/pull/7903)**: Fixes ACP session history replay in `session/messages` endpoint
- **[PR #7906](https://github.com/zeroclaw-labs/zeroclaw/pull/7906)**: Covers Windows path and shell portability in tests

## Feature Requests & Roadmap Signals

**Strong signals for next release (v0.8.1/v0.8.2):**
- **Computer-use desktop interaction** (#6909, RFC accepted): Likely targeted for v0.9.0 given the high-risk classification, but generates strong community interest
- **WASM plugin lifecycle hooks** ([#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822)): New RFC filed today proposing `PluginCapability::Hook` for sandboxed lifecycle event subscriptions
- **A2A agent discovery** ([PR #7763](https://github.com/zeroclaw-labs/zeroclaw/pull/7763), open): Adding agent-to-agent discovery surface to gateway; intentionally delayed for v0.8.2
- **Discord rich embeds** ([PR #7833](https://github.com/zeroclaw-labs/zeroclaw/pull/7833), open): Outbound rich embed rendering from `[EMBED:{…}]` markers; under active review
- **Agent evaluation harness** ([#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065)): First-class `zeroclaw eval` with replay and live modes, pluggable graders; accepted for future milestone
- **Config cascade/rename** ([PR #7840-7842](https://github.com/zeroclaw-labs/zeroclaw/pull/7840), stacked 6-8 of 8): Complete CRUD for agents, providers, channels with cascade deletes and alias rename; nearing final review

**Longer-term signals (v0.8.3/v0.9.0):**
- **Security policy hot-reload** ([#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897)): Zero-downtime reload for security policies and channel config without full daemon restart
- **llama.cpp model router** ([#7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539)): Quick model switching in local deployments
- **RunPod/ComfyUI image generation** ([#7875](https://github.com/zeroclaw-labs/zeroclaw/issues/7875)): Provider-scoped config for image generation
- **Date-range conditional cron schedules** ([#7887](https://github.com/zeroclaw-labs/zeroclaw/issues/7887)): More flexible scheduling for cron jobs
- **Auth/security milestone** ([#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)): v0.9.0 tracker including per-principal authorization, gateway boundaries, breaking changes

## User Feedback Summary

**Pain points surfacing through issues:**
- **Windows support gaps**: Issue #7089 asks for PowerShell/Git Bash evaluation as Windows shell host; PR #7906 addresses test portability. Windows users are experiencing real friction with `cmd.exe`.
- **Cron usability problems**: Multiple users (#6105, #2128, #6510, #6954) report that cron jobs lack context, send unwanted text, and don't support final-message-only delivery. This is clearly a high-friction area affecting real users.
- **Configuration complexity**: Users want better validation (#6416, config doctor), schema structs for security policy (#7821), and provider-specific config scoping (#7875). The quickstart validation improvement is a direct response to this pain.
- **Local deployment friction**: The llama.cpp model router request (#7539) specifically mentions difficulty switching models for different tasks on local deployments.
- **Telegram group interaction**: PR #7843 fixes a real-world pain where bot replies in `mention_only` mode were silently ignored because users reply without @-mentioning.

**Satisfaction signals:**
- Active community submitting large stacked PR series (Nillth's 8-PR config cascade series, Audacity88's multiple tracker/maintenance PRs)
- Feature-request maturity: users are requesting production-grade capabilities (WASM hooks, security hot-reload, evaluation harnesses)

## Backlog Watch

**Issues needing maintainer attention:**
- **[#2079 — Native GitHub channel](https://github.com/zeroclaw-labs/zeroclaw/issues/2079)** (created 2026-02-27): Open 112 days with 6 comments and no PR. Highly requested feature for agent-repo interaction. Could become a differentiator.
- **[#2128 — NO_REPLY sentinel text](https://github.com/zeroclaw-labs/zeroclaw/issues/2128)** (created 2026-02-27): Open 112 days with 4 comments. Long-standing bug affecting real cron/heartbeat users. Partially addressed by broader RFC #6954.
- **[#6653 — Host-architecture policy](https://github.com/zeroclaw-labs/zeroclaw/issues/6653)** (created 2026-05-14): Open 35 days, 1 comment. Needs decision on whether `zeroclaw update` should detect physical host architecture. Blocking downstream PR.

**Stale PRs:**
- The stacked PR series #7175/#7468 (PRs #7833-#7842) from Nillth is large and cumulative; the 6-8 of 8 PRs are opened as drafts and need final review and sequential merging.
- [PR #7763](https://github.com/zeroclaw-labs/zeroclaw/pull/7763) (A2A agent discovery, 2 days open) is marked DO NOT MERGE, targeting v0.8.2, and will need shepherd attention once the v0.8.1 queue clears.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*