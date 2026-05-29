# OpenClaw Ecosystem Digest 2026-05-29

> Issues: 375 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-29 00:28 UTC

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

# OpenClaw Project Digest — 2026-05-29

## Today's Overview

OpenClaw shows **very high activity** on 2026-05-29, with 375 issues and 500 PRs updated in the last 24 hours. The project shipped two releases today (v2026.5.27 stable and v2026.5.27-beta.1), both focused on **hardening security boundaries** — blocking unsafe runtime overrides, no-auth Tailscale exposure, and group prompt leakage. The community is actively converging around a **major native hook relay regression** that broke native/local tool execution on v2026.5.26, with multiple reporters and ongoing investigation. The maintainer-led **Policy conformance framework** is making steady progress through a series of large PRs (feed discovery, data handling, ingress channel checks), signaling a growing emphasis on enterprise-grade configuration governance.

## Releases

**Two releases published today:**
- **v2026.5.27** (stable) — [Release notes](https://github.com/openclaw/openclaw/releases/tag/v2026.5.27)
- **v2026.5.27-beta.1** (beta) — [Release notes](https://github.com/openclaw/openclaw/releases/tag/v2026.5.27-beta.1)

**Both share the same highlights:**
- **Stronger security and content boundaries:** Group prompt text is kept out of the system prompt; repeated-dot hostnames are normalized; side-effecting command wrappers and unsafe Node runtime env overrides are blocked; no-auth Tailscale exposure is rejected; node/device-role approval tightened.
- **No breaking changes or migration notes** in either release.

## Project Progress

Today's merged/closed PR activity (143 merged/closed of 500) includes these notable completions:

- **`#87810`** — `fix(gateway): clear completed session active runs` — ClawSweeper-automerged fix for session-state cleanup, ready for automerge. [PR #87810](https://github.com/openclaw/openclaw/pull/87810)
- **`#87819`** — `fix: remove reset hint from pinned model status` — Corrects `/reset` status message; reset preserves explicit user model selections. [PR #87819](https://github.com/openclaw/openclaw/pull/87819)
- **`#87673`** — `fix(control-ui): prevent blur/click race that breaks session-picker buttons` — Fixes a Lit reactivity race in the web UI session picker. [PR #87673](https://github.com/openclaw/openclaw/pull/87673)
- **`#87736`** — Regression fix: preflight compaction still surfaces missing Codex thread failure; closed but root cause may persist. [Issue #87736](https://github.com/openclaw/openclaw/issues/87736)
- **`#87767`** — Underlying PR for the automerge-fix above; likely merged to staging.

**Policy conformance framework** continues to advance with large maintainer PRs ready for review:
- `#87824` — Read-only feed discovery (XL, needs proof) [PR #87824](https://github.com/openclaw/openclaw/pull/87824)
- `#87074` — Reject unsupported policy keys [PR #87074](https://github.com/openclaw/openclaw/pull/87074)
- `#87056` — Data handling conformance checks [PR #87056](https://github.com/openclaw/openclaw/pull/87056)

## Community Hot Topics

### Most Active Issues (by comment count)

1. **#87331** — `[CLOSED] 5.26 regression: "Native hook relay unavailable" after relay re-register due to generation UUID staleness` — 17 comments, 10 👍. The most active issue. Users report intermittent failure of native tool calls after gateway restart. Root cause identified as stale generation UUID during relay re-registration. [Issue #87331](https://github.com/openclaw/openclaw/issues/87331)

2. **#87395** — `[CLOSED] Native hook relay intermittently becomes unavailable on 2026.5.26` — 14 comments, 8 👍. Similar regression reported by separate user; same root cause suspected. [Issue #87395](https://github.com/openclaw/openclaw/issues/87395)

3. **#86599** — `[OPEN] Local model provider calls thread block gateway event loop on Windows beta` — 13 comments, 1 👍. Long-standing P1 issue where local model inference starves the event loop on Windows; persists across beta releases. [Issue #86599](https://github.com/openclaw/openclaw/issues/86599)

4. **#69208** — `[OPEN] Umbrella: duplicate transcript, replay, and context assembly across channels` — 12 comments. Maintainer umbrella tracking a class of message-delivery bugs affecting MSTeams, webchat, Telegram, and more. [Issue #69208](https://github.com/openclaw/openclaw/issues/69208)

5. **#73148** — `[OPEN] Image tool: opaque "Failed to optimize image" when sharp is not installed` — 11 comments, 3 👍. Users frustrated by missing dependency feedback when `sharp` package is absent. [Issue #73148](https://github.com/openclaw/openclaw/issues/73148)

### Underlying Needs
The community is signaling **two critical needs**: (1) urgent stabilization of the native hook relay bridge, which broke the core native/local tool execution path in v2026.5.26, and (2) better error messaging and dependency detection for optional native packages like `sharp` and `node-llama-cpp`.

## Bugs & Stability

### P1 Regressions (High Severity)
- **Native hook relay bridge never spawns** — `#87536` (OPEN, 6 comments): On v2026.5.26, all native/local tool calls return "Native hook relay unavailable". This is the most severe active bug; no fix PR identified yet. [Issue #87536](https://github.com/openclaw/openclaw/issues/87536)
- **WhatsApp group @mentions silently dropped** — `#87609` (OPEN, P1): Regression in v2026.5.26 where only first @mention registers in WhatsApp groups. [Issue #87609](https://github.com/openclaw/openclaw/issues/87609)
- **Agent repeats identical replies 2-10x on Telegram** — `#86519` (OPEN, P1): Regression from 5.20; severity reduced but not fixed in 5.22. [Issue #86519](https://github.com/openclaw/openclaw/issues/86519)
- **Preflight compaction deadlock on empty sessions** — `#87016` (CLOSED): Discord deadlock bot bounces every message; fix applied. [Issue #87016](https://github.com/openclaw/openclaw/issues/87016)
- **Webchat tool turns hang post-tool-result** — `#86895` (CLOSED): ~365s abort on successful tool results; closed but underlying event-loop starvation pattern may persist. [Issue #86895](https://github.com/openclaw/openclaw/issues/86895)

### New Today
- **`#87736`** — Preflight compaction regression still surfaces after #86602 fix (CLOSED, but root cause may need deeper work). [Issue #87736](https://github.com/openclaw/openclaw/issues/87736)
- **Matrix thread replies sent as normal replies** — `#87307` (OPEN, P1): Regression in 5.22; `/status` and `/model` commands also silent. [Issue #87307](https://github.com/openclaw/openclaw/issues/87307)

### Fix PRs in Progress
- **`#87812`** — `fix: preserve embedded base system prompts` — Fixes agent runtime prompt regression where active tool selection replaced system prompts. [PR #87812](https://github.com/openclaw/openclaw/pull/87812)
- **`#87810`** — `fix(gateway): clear completed session active runs` — Automerge-armed session-state fix.

## Feature Requests & Roadmap Signals

### Notable Feature Requests
- **Cost dashboard omitting archive files** — `#46252` (OPEN, P2, 6 comments): Users running `/new` session resets find costs severely undercounted because archived `.jsonl.reset.*` files are excluded from aggregation. Likely candidate for next release given P2 diamond-lobster rating. [Issue #46252](https://github.com/openclaw/openclaw/issues/46252)
- **Workboard plugin** — `#85367` (OPEN, XL PR): Adds agent work queue cards, card editing, and execution handoff. Default-off plugin; signals roadmap interest in task management. [PR #85367](https://github.com/openclaw/openclaw/pull/85367)
- **KaTeX math rendering** — `#87568` (OPEN, XL PR): Adds KaTeX support for LaTeX math in chat messages. Signs of demand for academic/technical use cases. [PR #87568](https://github.com/openclaw/openclaw/pull/87568)
- **TTS voice model catalog refactor** — `#87794` (OPEN, XL PR): Catalog voice models through providers; unify speaker selection. Suggests growing interest in voice/video agent interactions. [PR #87794](https://github.com/openclaw/openclaw/pull/87794)

### Predicted Next-Release Candidates
Given current velocity and the Policy conformance framework gaining maintainer attention, **feed discovery and policy conformance** features (PRs #87824, #87825, #87826, #87827) could land within 1-2 releases. The **native hook relay fix** is urgent and likely to ship as a hotfix (2026.5.28 or patch).

## User Feedback Summary

### Pain Points
- **Stability regression in v2026.5.26** is the dominant theme: native hook relay failures, WhatsApp @mention drops, and Telegram duplicate replies are causing operational issues for production users.
- **Windows event-loop blocking** (#86599) continues as a beta-release blocker, making local model inference nearly unusable on Windows.
- **Missing dependency errors** (#73148, #44202) frustrate users; opaque `Failed to optimize image` and `ggml-metal` crashes are recurring.
- **Session state persistence bugs** are common; users report duplicate transcriptions, stale auth states after update (#83935), and deadlocked sessions after compaction.

### Satisfaction Signals
- Users actively contributing to **policy conformance** and **feed discovery** features suggest a sophisticated operator base that values configuration governance.
- The **ClawSweeper automation bot** handling automerge (#87810) indicates maturing CI/automation practices.
- Multiple closed issues today show responsive fix velocity, though regressions suggest test coverage gaps.

## Backlog Watch

### Issues Needing Maintainer Attention (Priority + Age)
- **`#54155`** — Gateway memory leak: 389MB → 14.7GB over 4 days (OPEN since March 25; P1 diamond lobster). No recent maintainer comments. Severe but unaddressed for two months. [Issue #54155](https://github.com/openclaw/openclaw/issues/54155)
- **`#69208`** — Umbrella duplicate transcript issue (OPEN since April 20). Critical P1 umbrella but slow progress despite encompassing many high-severity sub-issues. [Issue #69208](https://github.com/openclaw/openclaw/issues/69208)
- **`#72015`** — Active-memory blocks replies; QMD boot initialization overload (OPEN since April 26; P1 diamond lobster). No fix PR linked. [Issue #72015](https://github.com/openclaw/openclaw/issues/72015)
- **`#48003`** — Steer mode does not inject messages mid-turn (OPEN since March 16; P1 diamond lobster). No maintainer activity in 2+ months. [Issue #48003](https://github.com/openclaw/openclaw/issues/48003)
- **`#46252`** — Cost dashboard omits archive files (OPEN since March 14; P2 diamond lobster). User-visible data accuracy issue with no fix. [Issue #46252](https://github.com/openclaw/openclaw/issues/46252)

### PRs Needing Review
- **`#81135`** — `fix(telegram): allow inline button sends in group prompts` (OPEN since May 12; needs proof). Important Telegram UX fix stalled for 17 days. [PR #81135](https://github.com/openclaw/openclaw/pull/81135)
- **`#84224`** — `fix(doctor): handle gateway SecretRefs in auth checks` (OPEN since May 19; waiting on author). Long-standing Doctor improvement; author unresponsive for 10 days. [PR #84224](https://github.com/openclaw/openclaw/pull/84224)

---

**Project Health Assessment:** 🔴 **Stressed but actively maintained.** The native hook relay regression in v2026.5.26 represents a critical stability event for production users relying on native/local tool execution. The community response is fast (multiple duplicates filed, investigation ongoing), and the maintainer team is shipping security-focused releases. However, the backlog contains several P1 diamond-lobster issues that have remained open for 2+ months with no fix PR, indicating capacity constraints on deeper architectural problems. The Policy conformance workstream signals continued investment in enterprise readiness.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — AI Agent Open-Source Ecosystem
**Date:** 2026-05-29

---

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is experiencing a **sustained, high-velocity development phase**, with nine of eleven tracked projects showing activity in the last 24 hours. The ecosystem spans from reference implementations (OpenClaw) and lightweight embeddable agents (PicoClaw, NanoBot) to enterprise-focused platforms (IronClaw, Hermes Agent) and specialized forks targeting specific deployment scenarios (NullClaw, NanoClaw). A clear architecture divergence is emerging between **monolithic, feature-complete platforms** (OpenClaw, Hermes Agent) and **modular, plugin-extensible frameworks** (NanoBot, CoPaw, ZeroClaw). Security hardening, provider compatibility, and multi-channel reliability are universal concerns, while advanced agent-loop improvements (tool execution, memory management, feedback mechanisms) are becoming competitive differentiators. The ecosystem remains highly responsive to community feedback, with significant issue and PR churn across all active projects.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Merged/Closed PRs (24h) | New Release (24h) | Health Score | Notes |
|---------|----------------------|-------------------|------------------------|-------------------|--------------|-------|
| **OpenClaw** | 375 | 500 | 143 | ✅ v2026.5.27 + beta | 🔴 Stressed | Regression-heavy; high volume but critical bugs |
| **NanoBot** | 11 | 19 | 7 | ❌ | 🟢 Healthy | Focused stability push; high maintainer responsiveness |
| **Hermes Agent** | 50 | 50 | 14 | ✅ v0.15.0 (May 28) | 🟡 Active | Post-release stabilization; Kanban corruption concern |
| **PicoClaw** | 6 | 30 | 8 | ✅ Nightly | 🟢 Healthy | Dependabot-heavy; security hardening underway |
| **NanoClaw** | 3 | 6 | 3 | ❌ | 🟡 Moderate | Vendor dependency anxiety (#80); focused fixes |
| **NullClaw** | 0 | 6 | 5 | ❌ | 🟢 Healthy | Clean, low-bug day; significant improvements landed |
| **IronClaw** | 46 | 50 | 35 | ❌ | 🟢 Healthy | High-velocity Reborn architecture track |
| **LobsterAI** | 1 | 29 | 9 | ❌ | 🟡 Moderate | Plugin/KIT focus; scheduled task bug open |
| **CoPaw** | 43 | 40 | 22 | ❌ | 🟡 Active | Windows UX pain points; high community engagement |
| **ZeptoClaw** | 0 | 0 | 0 | ❌ | ⚪ Dormant | No activity |
| **TinyClaw** | 0 | 0 | 0 | ❌ | ⚪ Dormant | No activity |
| **Moltis** | 8 | 5 | 4 | ❌ | 🟢 Healthy | Clean stabilization; all bugs fixed same-day |

---

## 3. OpenClaw's Position

**Community Size & Velocity:** OpenClaw dominates the ecosystem in raw activity metrics (375 issues, 500 PRs updated in 24h — an order of magnitude more than any peer), reflecting its role as the primary reference implementation. Its community is the largest and most diverse, generating both the most broad feature work and the most duplicate regression reports.

**Technical Approach Differences:**
- **Policy conformance framework** (PRs #87824, #87074, #87056) — OpenClaw is uniquely investing in enterprise-grade configuration governance at the platform level, a differentiator absent in peer projects like NanoBot or PicoClaw.
- **Security-first release cadence** — The v2026.5.27 release focused exclusively on security boundaries (group prompt leakage, Tailscale exposure, Node runtime overrides). This posture is more aggressive than any peer's current release cycle.
- **ClawSweeper automation bot** — Indicates maturing CI/automation; unique among tracked projects for automerge capability.

**Advantages vs. Peers:**
- Largest provider/channel ecosystem coverage
- Most sophisticated policy governance (enterprise readiness)
- Fastest fix velocity for critical regressions (143 merged/closed PRs/day)

**Disadvantages vs. Peers:**
- **Most regressions per release** — The v2026.5.26 native hook relay failure (#87536) is the most severe active bug across all tracked projects
- **Backlog burden** — P1 diamond-lobster issues open 2+ months (#54155 memory leak) indicate capacity constraints
- **Testing coverage gaps** — Regressions suggest insufficient integration test coverage despite high automation

**Comparison to Peers:**
- vs. **NanoBot**: OpenClaw is more feature-complete but has more breaking regressions; NanoBot's batch-fix approach (#4041) demonstrates better stability management
- vs. **Hermes Agent**: Comparable scale, but Hermes Agent's v0.15.0 shipped 321 contributors — broader community involvement. OpenClaw has more channels/providers but less contributor diversity
- vs. **IronClaw**: IronClaw is moving faster on architecture (Reborn track) but has smaller community; OpenClaw's policy work is ahead of IronClaw's credential injection debates

---

## 4. Shared Technical Focus Areas

### 4.1 Provider Compatibility & Multi-Model Support
| Project | Specific Need | Evidence |
|---------|---------------|----------|
| **NanoClaw** | Alternative LLM providers beyond Anthropic | Issue #80 (60 👍, top issue in project) |
| **ZeroClaw** | DeepSeek V4 API compatibility | Issue #6059 (P1, in-progress) |
| **Hermes Agent** | codex /responses streaming fix | Issue #33439 (blocking upgrade) |
| **NullClaw** | NEAR AI Cloud + Atlas Cloud providers | PR #922 (merged) |
| **IronClaw** | WeCom channel stabilization | Issue #4191 (10 sub-issues, unfixed) |

**Emerging requirement:** All projects need to support **non-OpenAI, non-Anthropic providers** and **rapidly adapt to API changes** (DeepSeek V4, NEAR, MiniMax). Vendor lock-in anxiety is the dominant ecosystem-level concern.

### 4.2 Multi-Channel Reliability & Platform-Specific UX
| Project | Specific Need | Evidence |
|---------|---------------|----------|
| **OpenClaw** | WhatsApp @mention drops, Telegram duplicates | Issues #87609, #86519 (both P1) |
| **NanoBot** | WeChat 10-msg limit, Matrix E2EE | Issues #2772, #4042 |
| **Hermes Agent** | BlueBubbles DM misrouting (privacy leak) | Issue #24157 (P2) |
| **CoPaw** | Windows desktop CMD popups, macOS crashes | Issues #4777, #4704 |
| **ZeroClaw** | Slack Socket Mode auth failure | Issue #6992 (S1, blocked) |

**Emerging requirement:** Platform-specific UX (iMessage, WeChat, Matrix E2EE, Slack Socket Mode) is the largest source of regressions and user frustration. Cross-project trend: **channel reliability is the #1 adoption blocker for production deployments.**

### 4.3 Memory, Context Management & Agent Loop
| Project | Specific Need | Evidence |
|---------|---------------|----------|
| **NanoBot** | Short-term memory loss, orphaned tool results | Issues #4044, #4006 |
| **OpenClaw** | Duplicate transcripts, session state persistence | Issue #69208 (umbrella, 12 comments) |
| **CoPaw** | "Accumulate without learning" memory critique | Issue #4652 (4 comments, detailed proposal) |
| **Hermes Agent** | Kanban SQLite corruption under concurrent access | Multiple issues (#33334 et al.) |

**Emerging requirement:** **Memory systems are failing users** — agents forget context mid-conversation, tool/feedback loops are broken, and state persistence is unreliable. The community is demanding "learning" rather than "accumulation."

### 4.4 Security Hardening
| Project | Specific Need | Evidence |
|---------|---------------|----------|
| **OpenClaw** | Group prompt leakage, Tailscale exposure | v2026.5.27 release highlights |
| **PicoClaw** | CSRF protection, path traversal | PR #2900 (open 9 days) |
| **NullClaw** | Credential leakage in webhooks | PR #907 (merged) |
| **IronClaw** | Credential zeroization in HTTP requests | Issue #4222 (filed today) |
| **ZeroClaw** | Token rotation doesn't revoke tokens | Issue #6984 (S1, fix PR exists) |
| **NanoClaw** | Symlink path traversal in inbox | PR #2630 (open) |

**Emerging requirement:** **Security is not an afterthought** — every active project is investing in credential hygiene, path validation, and session isolation. The industry is maturing toward production-grade security defaults.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes Agent | IronClaw | CoPaw | PicoClaw | NullClaw | ZeroClaw |
|-----------|----------|---------|--------------|----------|-------|----------|----------|----------|
| **Target User** | Enterprise/advanced | Developer/CICD | Power user/self-host | Cloud infra/Web3 | Desktop consumer | Edge/embedded | Zig-native | Full-stack/plugin |
| **Primary Lang** | Go/TypeScript | Go | Go | Rust | Python | Go | Zig | Go |
| **Architecture** | Monolithic + policy framework | Modular with plugins | Plugin-based (A2A, MCP) | Microservice (Reborn) | Modular with skill kits | Lightweight embeddable | Minimal reference | Plugin-first with sandbox |
| **Key Differentiator** | Enterprise policy governance | High-velocity bug fixes | Broadest contributor base | Web3/NEAR ecosystem | Desktop-first UX | RISC-V/edge support | Zig performance | Sandboxed execution |
| **Release Cadence** | Daily stable + beta | Burst (no release today) | Major releases (v0.15.0) | Continuous (no release today) | Burst (no release today) | Nightly + minor | Sparse | Beta-track (v0.8.0-beta-2) |
| **Channel Count** | Highest | Moderate | High | Moderate | Moderate | Low | Low | High |
| **Provider Count** | Highest | High | High | Growing | Moderate | Moderate | Growing | High |

**Key Differentiation Insights:**

- **IronClaw** is the only project invested in **Web3/blockchain-adjacent AI infrastructure** (NEAR Protocol, TEE-capable providers) — a unique positioning with no direct competitor in the tracked set.
- **PicoClaw** targets **edge and alternative architectures** (RISC-V, Termux) — a niche no other project serves.
- **NullClaw** (Zig) is the **only non-Go/Rust/Python** project, appealing to Zig-native developers seeking minimal footprint.
- **CoPaw** is the **only desktop-first project** with significant Windows/Mac UX investment, albeit with numerous pain points.
- **NanoClaw** is uniquely vulnerable to **vendor lock-in** — it's the only project where provider dependency is the #1 community concern.

---

## 6. Community Momentum & Maturity

### Tier 1: High Velocity, High Maturity (Production-Ready with Issues)
| Project | Velocity Signal | Maturity Indicator | Risk Factor |
|---------|----------------|-------------------|-------------|
| **OpenClaw** | 643 combined issues+PRs/day | Daily releases, policy framework | Regression rate highest |
| **IronClaw** | 96 combined issues+PRs/day | Reborn architecture progressing | WeCom validation findings critical |
| **Hermes Agent** | 100 combined issues+PRs/day | v0.15.0 shipped with 321 contributors | Kanban corruption systemic |
| **ZeroClaw** | 70 combined issues+PRs/day | Beta-2 integration PR | Slack auth, DeepSeek V4 blockers |

### Tier 2: Active Iteration (Stabilizing, Feature Addition)
| Project | Velocity Signal | Maturity Indicator | Risk Factor |
|---------|----------------|-------------------|-------------|
| **CoPaw** | 83 combined issues+PRs/day | Desktop packaging maturing | Windows UX breaks core workflow |
| **NanoBot** | 30 combined issues+PRs/day | Mega-fix PR #4041 shows discipline | Memory loss still open |
| **PicoClaw** | 36 combined issues+PRs/day | Dependabot volume high | Security fix #2900 stalled 9 days |
| **LobsterAI** | 30 combined issues+PRs/day | KIT plugin system merged | Scheduled task bug open |

### Tier 3: Moderate Activity (Low-Frequency Contributors)
| Project | Velocity Signal | Notes |
|---------|----------------|-------|
| **NanoClaw** | 9 combined issues+PRs/day | Vendor lock-in anxiety (#80) unresolved |
| **NullClaw** | 6 combined issues+PRs/day | Telegram bug fixed; cron subagent pending |
| **Moltis** | 13 combined issues+PRs/day | Clean stabilization; all bugs fixed same-day |

### Tier 4: Dormant
| Project | Velocity Signal | Notes |
|---------|----------------|-------|
| **ZeptoClaw** | 0 | No activity for 24h+ |
| **TinyClaw** | 0 | No activity for 24h+ |

---

## 7. Trend Signals

### Signal 1: **The Stability-Reliability Wall**
The dominant user sentiment across all active projects is **regression fatigue**. Users report that each release fixes old bugs but introduces new, equally disruptive ones. The native hook relay regression in OpenClaw (#87536), the Kanban corruption in Hermes Agent (#33334), and the memory loss in NanoBot (#4044) all share a pattern: **core agent-loop functionality breaks in ways that make the product non-functional for production use**. 

**Value for developers:** Prioritize integration testing suites that simulate real-world multi-turn conversations across channels, not just unit tests for isolated components. Consider adopting "stability sprint" cycles where no new features are added and only bugs are fixed.

### Signal 2: **Channel Proliferation Without Reliability Standard**
Projects are racing to add channels (Slack, Discord, WeChat, Telegram, Matrix, iMessage/BlueBubbles, WhatsApp, DingTalk, Feishu, WeCom), but **none has achieved universal reliability**. Every active project has a P1 or S1 channel bug. The community is signaling that **depth > breadth**: users prefer fewer, bulletproof channels over many fragile ones.

**Value for developers:** Standardize on 3-4 high-quality channels rather than attempting universal coverage. Invest in channel-specific integration test harnesses.

### Signal 3: **Memory Architecture Is the Next Frontier**
The "accumulate without learning" critique (CoPaw #4652) captures a systemic failing. Current memory systems store conversation history but do not synthesize, summarize, or prioritize. The observation-reflection loop (NanoBot #4015, merged) is an early attempt at fixing this. Expect **summarization-based memory, reflection loops, and cross-session learning** to be the major feature battleground in the next 3-6 months.

**Value for developers:** Invest in memory system architecture now. The projects that solve "learning" rather than "recording" will win the next wave of adoption.

### Signal 4: **Security as a Competitive Differentiator**
The ecosystem has moved beyond "add authentication" to **granular security features**: credential zeroization (IronClaw #4222), policy conformance frameworks (OpenClaw), sandbox policies (ZeroClaw #6996), and path traversal prevention (PicoClaw #2900). Enterprise adoption depends on these capabilities.

**Value for developers:** Ship security features early. Security-hardened projects (OpenClaw's release focus, IronClaw's credential lifecycle) are improving faster than those treating security as an afterthought.

### Signal 5: **Plug-in Ecosystems Are Immature but Inevitable**
Multiple projects are building plugin/extension systems (Hermes Agent A2A/MCP, LobsterAI KIT, NanoBot skill system, ZeroClaw plugin-first architecture). However, **no project has a functional third-party plugin ecosystem** — all are still in the infrastructure-building phase.

**Value for developers:** The first project to ship a production-quality plugin registry with security vetting, versioning, and dependency management will capture significant ecosystem mindshare.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-29

## 1. Today's Overview
NanoBot is experiencing a period of **high maintenance and feature development velocity**, with 19 PRs and 11 Issues updated in the last 24 hours. The core team (notably **hamb1y**) closed 6 bugs in a single batch fix PR (#4041), suggesting a focused stability push. However, 7 new open Issues and 6 open PRs indicate the project's scope is expanding rapidly. Community contributions are strong, with new features like **Discord model slash commands**, **DingTalk user isolation**, and a **GitAgent Protocol integration** being proposed. The project appears healthy and well-maintained, with maintainer responsiveness being high.

## 2. Releases
**No new releases.** The last release version remains unchanged. Given the volume of merged PRs (7) today, a release may be imminent to bundle the bug fixes and new features.

## 3. Project Progress (Merged/Closed PRs Today)
7 PRs were merged or closed today:

- **[#4041] [bug, valid] Fix session, goal, streaming, and context-budget bugs** (hamb1y) — A single mega-fix PR addressing 5 critical bugs: pending queue overwrite, shared mutable request context, streaming retry duplication, context budget miscalculation, and `/stop` cancellation failure. This is the most impactful fix of the day.
- **[#4015] feat(agent): add observation-reflection prompt after tool execution** (Felix8568) — Adds an "Observation → Reflection → Verify → Act" loop into the agent runner, teaching the agent to introspect after tool calls.
- **[#4031] [valid] feature: Add Discord model slash command** (hamb1y) — Enables switching model presets via `/model` in Discord, improving UX for multi-model setups.
- **[#4023] [valid] refactor(heartbeat): migrate heartbeat service to cron-based auto-registration** (chengyongru) — Simplifies infrastructure by replacing a dedicated background loop with a cron job.
- **[#4007] feat(webui): add project workspaces and access controls** (Re-bin) — Adds Codex-style workspace management, project-scoped chats, and composer access controls to the WebUI.
- **[#3937] feat(exec): implement user confirmation mechanism for dangerous commands** (yorkhellen) — Security enhancement that requires user confirmation before executing high-risk shell commands.
- **[#4030] Add GitAgent Protocol support (agent.yaml + SOUL.md)** (computer-agent) — First attempt at GAP support, later superseded by PR #4034.

## 4. Community Hot Topics

| Issue/PR | Activity | Key Insight |
|----------|----------|-------------|
| **[#1922] [CLOSED] nanobot-webui panel** (Good0007) | 12 comments, 10 👍 | **Hottest item.** A community member built a full self-hosted WebUI. The high reaction count signals strong demand for better UI management, especially for non-technical users. |
| **[#2772] WeChat message limit (10 msg max)** (dancing-monkey) | 4 comments, open since April 3 | **Long-running frustration.** Chinese users hitting platform-imposed context limits. No maintainer response yet. |
| **[#4044] Short-term memory loss** (bjoshuanoah) | 0 comments, just opened | **Potentially severe UX bug** — agent forgets context mid-conversation. Root cause suspected to be context window pressure or system prompt bloat. |
| **[#3992] Cross-agent message bus** (ysofologis) | Open, multi-day discussion | **Ambitious architecture proposal** for running multiple agent instances that communicate. Signals demand for agent swarms / multi-agent setups. |
| **[#4034] GitAgent Protocol support** (computer-agent) | Recently opened, supersedes #4030 | **Standardization signal.** Community pushing for portable agent definitions (agent.yaml + SOUL.md). Could become a major ecosystem feature. |

**Underlying needs:**
- **UI abstraction** (#1922): Users want control without CLI.
- **Platform-specific limits** (#2772): WeChat's tight API constraints are a pain point for Chinese users.
- **Memory/context management** (#4044, #4006): Users are frustrated by agents that forget context or mix up tool calls.
- **Multi-agent collaboration** (#3992): Advanced users want to build agent networks.

## 5. Bugs & Stability

### High Severity (Fix PR Exists or Fixed Today)
| Bug | Issue | Fix PR | Details |
|-----|-------|--------|---------|
| **Pending queue overwrite** | [#4036] → **CLOSED** | [#4041] | Follow-up messages could be rerouted away from active turn under queue pressure. **Fixed.** |
| **Shared mutable request context** | [#4037] → **CLOSED** | [#4041] | Concurrent sessions overwrite each other's goal/context. **Fixed.** |
| **Streaming retry duplication** | [#4038] → **CLOSED** | [#4041] | After partial stream failure, retry emits duplicate content. **Fixed.** |
| **Context budget ignores tool schemas** | [#4039] → **CLOSED** | [#4041] | Context snipping under-reserves space for tool definitions. **Fixed.** |
| **/stop fails with unified_session** | [#4040] → **CLOSED** | [#4041] | Cancellation uses wrong session key. **Fixed.** |

### Medium Severity (Still Open)
| Bug | Issue | Status |
|-----|-------|--------|
| **Orphaned tool results in history** | [#4006] [OPEN] | After #3984 fix, tool results still sometimes lack matching `tool_calls`. Violates OpenAI/Anthropic spec. **No fix PR yet.** |
| **Short-term memory loss** | [#4044] [OPEN] | Agent doesn't remember the previous turn. Community suspects context pressure or SOUL.md bloat. **No fix PR yet.** |
| **MCP reconnection deadlock** | [#4027] [OPEN] (PR itself) | `_mcp_connected` flag never resets, preventing reconnection on transient errors. **Fix PR is the same Issue.** |

### Low Severity (Still Open)
| Bug | Issue | Status |
|-----|-------|--------|
| **Matrix E2EE device verification** | [#4042] [OPEN] | Element X shows "unverified device" for all bot messages. **No fix PR. Niche (Matrix) but growing platform.** |
| **WeChat 10-message limit** | [#2772] [OPEN] | Hardcoded platform limit. **No maintainer response in 8 weeks.** |

## 6. Feature Requests & Roadmap Signals

### Likely in Next Minor Version
- **GitAgent Protocol support** (#4034) — Two PRs submitted in 24 hours; clearly a priority for some contributors.
- **Observation-reflection loop** (#4015, merged) — Agent self-reflection post-tool-call is now core behavior.
- **Discord native slash commands** (#4031, merged) — Adopted quickly; other platforms likely to follow.
- **Project workspaces in WebUI** (#4007, merged) — Aligns with Codex-style UX trend.

### Possible in Future
- **Extension registry** (#4046) — External plugin registry for apps/skills. Third party ecosystem potential.
- **Cross-agent messaging bus** (#3992) — Multi-agent collaboration; architectural, likely needs more design.
- **Chat sender identity** (#4033) — Distinguishing users in shared channels (Discord, etc.). Useful for enterprise.
- **Config to disable document auto-extraction** (#4043) — User wants control over when PDF/images are parsed.

## 7. User Feedback Summary

### Pain Points
- **"Memory loss is killing my workflow"** (#4044) — Core agent loop drops context, making conversation impossible.
- **"Tool call IDs still broken after fix"** (#4006) — Even after the big tool_call_id fix (#3984), orphaned tool results remain.
- **"WeChat only returns 10 messages"** (#2772) — Platform limit severely hampers Chinese-language usage.
- **"Document extraction is forced, I have my own OCR pipeline"** (#4043) — Power users want opt-out for built-in document processing.
- **"Matrix E2EE makes bot unusable on Element X"** (#4042) — Security UI friction; users must manually trust devices.

### Satisfaction Signals
- **Community member built complete WebUI** (#1922) — Strong engagement (10 👍) shows enthusiasm for the project's direction.
- **Multiple contributors filing detailed bugs** (hamb1y's 5-bug batch) — Indicates a mature QA/testing community.
- **GitAgent Protocol integration** (#4034, #4030) — Users see NanoBot as a standard to bet on.

## 8. Backlog Watch

### Stale Feature Requests / Issues Needing Maintainer Attention
| Issue | Age | Last Maintainer Activity | Risk |
|-------|-----|--------------------------|------|
| **[#2772] WeChat 10-message limit** | 8 weeks | None | **HIGH.** Chinese user base may be silently churning. Platform-specific config could be a quick win. |
| **[#4006] Orphaned tool results** | 3 days | None beyond bug report | **MEDIUM.** Violates strict API checkers; could cause silent failures in production. |
| **[#4042] Matrix E2EE** | 1 day | None | **LOW.** Niche but growing. If Matrix usage increases, this becomes a blocker for privacy-conscious users. |
| **[#3992] Cross-agent messaging** | 5 days | None from core maintainers | **LOW.** Ambitious; needs design review. But author invested significant effort. |

**Recommendation:** The #2772 WeChat issue is the most pressing backlog item — it's been open since April 3 with no maintainer acknowledgment. A simple "we're aware, platform limitation, consider using a different channel" or a configurable message cap would improve user sentiment. The #4006 tool result bug is the second priority, as it affects API compliance.

---

*Digest generated from GitHub data on 2026-05-29. All links: https://github.com/HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-05-29

---

## Today's Overview

Hermes Agent v0.15.0 ("The Velocity Release") shipped yesterday, marking a major milestone with 1,302 commits and contributions from 321 community members. Today's activity is extremely high, with 50 updated issues and 50 updated PRs in the last 24 hours, suggesting a post-release stabilization and hotfix cycle. The community is actively reporting regressions from the new release, particularly around Kanban database corruption, gateway provider compatibility, and TUI rendering issues. The project maintainers are rapidly closing issues (24 closed today) and merging fixes, indicating strong responsiveness.

---

## Releases

### v2026.5.28 — Hermes Agent v0.15.0 (The Velocity Release)

**Release Date:** May 28, 2026
**Since v0.14.0:** 1,302 commits · 747 merged PRs · 1,746 files changed · 282,712 insertions · 36,699 deletions · 560+ issues closed (15 P0, 65 P1, 19 security-tagged) · 321 community contributors

**Key Themes:**
- Major performance improvements (the "Velocity" namesake)
- Significant codebase growth—nearly 300K lines added
- Heavy security focus with 19 security-tagged issues resolved

**Migration Notes:** Users upgrading from v0.14.0 should be aware that the Kanban database has undergone schema changes and may require migration. The release notes (truncated in source) hint at breaking changes in the gateway API, particularly around streaming requirements.

---

## Project Progress

**Merged/Closed PRs (14 today):**

| PR | Title | Impact |
|----|-------|--------|
| [#34194](https://github.com/NousResearch/hermes-agent/pull/34194) | fix(skills-page): restore per-source pills and category sidebar | Critical UX fix for skills page regression from lazy-fetch refactor |
| [#34186](https://github.com/NousResearch/hermes-agent/pull/34186) | fix(mcp): resolve bare npx/npm/node against /usr/local/bin | Docker image fix for Node-based MCP servers |
| [#34188](https://github.com/NousResearch/hermes-agent/pull/34188) | docker: opt in to dashboard --insecure via env var | Security hardening for Docker dashboards |
| [#33994](https://github.com/NousResearch/hermes-agent/pull/33994) | fix(dashboard): add capture-phase wheel listener | Dashboard scrolling reliability |
| [#33988](https://github.com/NousResearch/hermes-agent/pull/33988) | fix(curator): add post-archive safety guard | Skill curation safety |
| Multiple a2a_fleet PRs (#34160-#34167) | Security + correctness fixes for A2A fleet plugin | Critical security hardening and dead-code removal |

**Key Fixes Advanced Today:**
- **A2A Fleet Plugin Overhaul:** 8 PRs closed addressing CRITICAL (insecure defaults, server never auto-starts) and HIGH severity issues (missing manifest fields, port leaks, namespace collisions)
- **MCP Lazy Plugin Fixes:** 6 PRs closed addressing race conditions, state leaks, and namespace collisions
- **Skills Page Recovery:** Stale `useMemo` dependencies in React frontend fixed

---

## Community Hot Topics

### Most Active Issues (by comments and reactions)

**1. [#33334](https://github.com/NousResearch/hermes-agent/issues/33334) — Database corruption with Kanban causing system crash**
- 13 comments, 1 👍 (CLOSED)
- User @hugme spent 3 days debugging crashes on large tasks
- **Underlying need:** Kanban SQLite database is not resilient to concurrent access or large workloads
- **Status:** Closed, likely fixed in v0.15.0 or pending hotfix

**2. [#33439](https://github.com/NousResearch/hermes-agent/issues/33439) — v0.14.0 broken on codex /responses endpoint**
- 5 comments, 6 👍 (OPEN, P2)
- User @carrgust reports gateway crashes when ChatGPT backend requires `stream: true`
- **Underlying need:** Users relying on codex backend are blocked from upgrading; fix exists on main but unreleased
- **Status:** Open, awaiting release

**3. [#10567](https://github.com/NousResearch/hermes-agent/issues/10567) — Add --host and CORS config for dashboard VPN access**
- 4 comments, 8 👍 (OPEN, P3)
- **Underlying need:** Self-hosted users need remote access to dashboard via Tailscale/VPN
- **Status:** Open since April, no PR linked

**4. [#18658](https://github.com/NousResearch/hermes-agent/issues/18658) — SGR mouse sequence leakage in tmux TUI**
- 2 comments, 4 👍 (OPEN, P2)
- **Underlying need:** TUI users in tmux experience visual garbage in composer
- **Status:** Open, competing fix in PR [#34172](https://github.com/NousResearch/hermes-agent/pull/34172) (open today)

---

## Bugs & Stability

### Critical Severity

| Issue | Title | Status | Notes |
|-------|-------|--------|-------|
| [#34163](https://github.com/NousResearch/hermes-agent/issues/34163) | [a2a_fleet] CRITICAL: auth_required defaults to false | CLOSED | Insecure default on cross-machine surface—fixed in same batch |
| [#34161](https://github.com/NousResearch/hermes-agent/issues/34161) | [a2a_fleet] CRITICAL: server never auto-starts | CLOSED | Feature dead on normal launch—fixed |

### High Severity

| Issue | Title | Status | Notes |
|-------|-------|--------|-------|
| [#34165](https://github.com/NousResearch/hermes-agent/issues/34165) | [a2a_fleet] HIGH: plugin.yaml missing kind/provides_tools/requires_env | CLOSED | Convention violations, secrets undeclared |
| [#34164](https://github.com/NousResearch/hermes-agent/issues/34164) | [a2a_fleet] HIGH: remove invented disable() hook | CLOSED | Port leak on reload |
| [#34155](https://github.com/NousResearch/hermes-agent/issues/34155) | [mcp_lazy] HIGH: synthetic stub collides with real server named 'server' | CLOSED | Namespace collision |
| [#34156](https://github.com/NousResearch/hermes-agent/issues/34156) | [mcp_lazy] HIGH: promote_server eager flag never persisted | CLOSED | Silent state loss |

### P2 Regressions

| Issue | Title | Status |
|-------|-------|--------|
| [#33439](https://github.com/NousResearch/hermes-agent/issues/33439) | v0.14.0 broken on codex /responses | OPEN |
| [#30896](https://github.com/NousResearch/hermes-agent/issues/30896) | Kanban rapid worker spawn-crash loop corrupts SQLite B-tree | OPEN |
| [#24157](https://github.com/NousResearch/hermes-agent/issues/24157) | BlueBubbles DM replies misrouted to group chats (privacy leak) | OPEN |
| [#18658](https://github.com/NousResearch/hermes-agent/issues/18658) | SGR mouse leakage in tmux TUI | OPEN |
| [#34070](https://github.com/NousResearch/hermes-agent/issues/34070) | Honcho memory prefetch hang on fresh CLI subprocess (v0.15.0 regression) | OPEN |
| [#32722](https://github.com/NousResearch/hermes-agent/pull/32722) | WSL /mnt/ timeout when ripgrep missing | OPEN PR |

### Notable Kanban Corruption Pattern
Multiple issues ([#33334](https://github.com/NousResearch/hermes-agent/issues/33334), [#33169](https://github.com/NousResearch/hermes-agent/issues/33169), [#32543](https://github.com/NousResearch/hermes-agent/issues/32543), [#32749](https://github.com/NousResearch/hermes-agent/issues/32749), [#30896](https://github.com/NousResearch/hermes-agent/issues/30896)) describe Kanban SQLite database corruption under concurrent access. Root cause identified as missing `busy_timeout` PRAGMA in WAL mode. Fix proposed in [#32532](https://github.com/NousResearch/hermes-agent/issues/32532) and PR [#34193](https://github.com/NousResearch/hermes-agent/pull/34193) addresses checkpoint reminder protocol violations.

---

## Feature Requests & Roadmap Signals

### Top User-Requested Features

1. **Dashboard Remote Access** ([#10567](https://github.com/NousResearch/hermes-agent/issues/10567), 8 👍)
   - `--host` flag and CORS config for Tailscale/VPN access
   - Long-standing request (since April); likely targets next minor release

2. **Telegram Emoji Reaction Learning** ([#18408](https://github.com/NousResearch/hermes-agent/issues/18408))
   - Implicit feedback from message reactions
   - Rich feature for user engagement metrics

3. **Discord message deletion** ([#21889](https://github.com/NousResearch/hermes-agent/issues/21889))
   - `delete_message` for progress cleanup
   - Low complexity, high UX value

4. **BlueBubbles group chat filtering** ([#33489](https://github.com/NousResearch/hermes-agent/issues/33489))
   - `IGNORE_GROUP_CHATS` or `ALLOWED_CHATS` config
   - Privacy-conscious users need this for deployment

5. **Generic event bus for plugins** ([#34195](https://github.com/NousResearch/hermes-agent/pull/34195))
   - New `hermes_events` pub/sub system landed as open PR today
   - Signals a major architectural direction: plugin interoperability

### Prediction for v0.16.0
Based on PR [#34195](https://github.com/NousResearch/hermes-agent/pull/34195), the next release will likely include the `hermes_events` event bus as a foundation for plugin ecosystems. The remote dashboard access ([#10567](https://github.com/NousResearch/hermes-agent/issues/10567)) could also land given sustained demand.

---

## User Feedback Summary

### Pain Points (High Frequency)

1. **Kanban Database Corruption** — Multiple users (hugme, julio-cloudvisor, baofuen, NextDoorLaoHuang-HF, culdise) report crashes and data loss. One user spent 3 days debugging. Core issue is concurrent SQLite access with WAL mode and no busy timeout.

2. **BlueBubbles Integration Fragility** — Three issues ([#8514](https://github.com/NousResearch/hermes-agent/issues/8514), [#23409](https://github.com/NousResearch/hermes-agent/issues/23409), [#24157](https://github.com/NousResearch/hermes-agent/issues/24157)) report misrouted messages, missing targets, and privacy leaks. Community members (BukeLy, earchibald, mvrius) are deeply invested in iMessage integration.

3. **TUI Regressions** — Users report raw JSON/symbol leaks ([#34191](https://github.com/NousResearch/hermes-agent/issues/34191)) and mouse sequence garbage ([#18658](https://github.com/NousResearch/hermes-agent/issues/18658)). One user (Nicolas-Formenton) provided detailed tmux reproduction.

### Satisfaction Signals

- High reaction counts on issues (6 👍 on codex fix request) indicate strong community engagement
- 321 contributors to v0.15.0 demonstrates healthy contributing community
- Users like @carrgust providing detailed repro steps show sophisticated user base

---

## Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Created | Type | Why Critical |
|-------|---------|------|--------------|
| [#10567](https://github.com/NousResearch/hermes-agent/issues/10567) | Apr 15 | Feature | 8 👍, 6 weeks open, no progress |
| [#8514](https://github.com/NousResearch/hermes-agent/issues/8514) | Apr 12 | Bug | BlueBubbles chat misrouting, 7 weeks open |
| [#24157](https://github.com/NousResearch/hermes-agent/issues/24157) | May 12 | Security | Privacy leak (DM sent to group chat), 17 days open |
| [#30896](https://github.com/NousResearch/hermes-agent/issues/30896) | May 23 | Bug | Kanban corruption, no fix PR linked |

### PRs Stalled

| PR | Title | Last Update |
|----|-------|-------------|
| [#31569](https://github.com/NousResearch/hermes-agent/pull/31569) | Skip Ollama probe for non-Ollama providers | May 24 |
| [#30384](https://github.com/NousResearch/hermes-agent/pull/30384) | Enqueue leftover /steer before interrupt | May 22 |
| [#26281](https://github.com/NousResearch/hermes-agent/pull/26281) | Skip auto-install on Termux native | May 15 |

### Notable Unresolved regressions in v0.15.0
- **Honcho memory prefetch hang** ([#34070](https://github.com/NousResearch/hermes-agent/issues/34070)) — fresh CLI subprocess hangs indefinitely; reported as regression from #27190
- **codex /responses crash** ([#33439](https://github.com/NousResearch/hermes-agent/issues/33439)) — fix exists on main but unreleased, blocking users from upgrading to v0.14.0+

---

*Digest generated from GitHub data. All links follow `https://github.com/NousResearch/hermes-agent/{type}/{number}` pattern.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-29

## Today's Overview

PicoClaw shows a **high-activity day** with 30 pull requests and 6 issues updated in the last 24 hours, including one new nightly release. The project's dependency ecosystem is undergoing a significant batch of automated updates (18 PRs from Dependabot), while the community has submitted several meaningful feature and bug-fix contributions. A **notable security-focused PR** — adding CSRF protection and path traversal validation — is among the open contributions, suggesting a tightening of the web backend. The project maintains a healthy pulse with a new nightly build (**v0.2.9-nightly.20260528**) but remains in a "sharpening" phase, with many open PRs focused on stability, memory consistency, and provider ecosystem expansion.

---

## Releases

**New release:** **nightly** — *Nightly Build v0.2.9-nightly.20260528.28ec5793*

- Automated build; may be unstable.
- Full changelog: [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)
- No breaking changes or migration notes provided.
- This release appears to catch up to the latest `main` branch commits, which likely include the recent spate of fixes and dependency updates.

---

## Project Progress

**Merged/closed PRs today: 8** (of 30 total updated PRs). Key merged contributions:

- **[#2918] build(deps): larksuite/oapi-sdk-go v3.7.5 → v3.9.2** — Dependency bump for Lark (Feishu) integration.
- **[#2920] build(deps): anthropic-sdk-go v1.26.0 → v1.45.0** — Major jump in Anthropic SDK, likely improving Claude API compatibility.
- **[#2944] Termux X509 certificate fix** (closed, no PR linked) — Issue resolved by explicitly setting `SSL_CERT_FILE`.

**Notable open PRs with material changes (not Dependabot):**

- **[#2964] Feature/image input compression** (afjcjsbx) — Adds configurable multi-level compression before building vision model payloads. Reduces bandwidth/overhead for image-heavy channels.
- **[#2917] feat(provider): add NEAR AI Cloud provider** (PierreLeGuen) — Adds TEE-capable LLM provider using the `nearai` protocol, with auto-fetch of model catalog.
- **[#2915] feat(providers): add CommonModels for MiMo provider** (SiYue-ZO) — Adds `mimo-v2.5` (multimodal) and `mimo-v2.5-pro` (text-only) to provider models, enabling vision-capable defaults in WebUI.
- **[#2913] Fix JSONL session index hot-path cloning and TTL refresh semantics** (SiYue-ZO) — Performance fix: eliminates full-index clone on every cache hit.
- **[#2907] Fix JSONL store metadata drift after crash** (SiYue-ZO) — Crash-consistency fix: closes gap between JSONL append and `.meta.json` update.
- **[#2905] Fix fallback chain handling for expired contexts** (SiYue-ZO) — Stops useless retries when request deadline already passed.
- **[#2900] fix: add CSRF protection, path traversal validation, and security headers** (yangwenjie1231) — Security hardening for web backend.

---

## Community Hot Topics

**Most active issues (by comments):**

1. **[#2887] [BUG] .deb version on RISC-V is not functional with OpenAI model** — *7 comments, 0 reactions*  
   *Link:* [Issue #2887](https://github.com/sipeed/picoclaw/issues/2887)  
   User reports that the `.deb` package on a RISC-V Debian system cannot connect to OpenAI's GPT-5.4 model. The issue has been open since May 17 with no PR attached. The lack of platform-specific testing signals a gap in QA for non-x86 architectures.

2. **[#1738] [CLOSED] Feature: 添加OpenAI API格式的channel支持** — *3 comments, 1 reaction*  
   *Link:* [Issue #1738](https://github.com/sipeed/picoclaw/issues/1738)  
   Now closed. This is the Chinese-language feature request for an OpenAI API-compatible channel. Its closure (with no visible PR in the list) suggests it may have been implemented or de-prioritized.

3. **[#2916] CPU, Memory and IO optimizations** — *3 comments, 0 reactions*  
   *Link:* [Issue #2916](https://github.com/sipeed/picoclaw/issues/2916)  
   A vague but ambitious optimization proposal. The submitter mentions fetching source files and examining the skills system and bus pages. The lack of specificity makes it hard to prioritize, but it reflects growing interest in performance.

4. **[#2855] [CLOSED] Feature: Extend message tool to support media attachments** — *2 comments, 0 reactions*  
   *Link:* [Issue #2855](https://github.com/sipeed/picoclaw/issues/2855)  
   User points out that rich outbound delivery already exists in channel/bus layers, but the `message` tool is still text-only. This implies developer frustration: features are in the stack but not exposed to agents.

**Underlying need:** The RISC-V compatibility issue (#2887) and the media attachment gap (#2855) both point to **platform maturity and feature completeness** as recurring themes. Users want the project to work reliably across architectures and to expose all capabilities at the agent tool level, not just at the low-level bus/API layer.

---

## Bugs & Stability

| Severity | Issue | Status | Fix PR? | Summary |
|----------|-------|--------|---------|---------|
| **High** | [#2887] .deb on RISC-V broken with OpenAI | Open, stale since May 17 | No | Platform-specific failure. User reports error when connecting to OpenAI GPT-5.4. Likely a TLS/SSL or binary architecture mismatch. |
| **Medium** | [#2944] Termux X509 certificate error | Closed | No PR, user fix | HTTPS fails in Termux due to missing `SSL_CERT_FILE`. User found workaround. Possibly indicates a broader issue with CA bundle detection in Go binaries. |
| **Low** | [#2916] CPU/Memory/IO optimizations | Open, stale | No | General performance discussion, not a concrete crash. |

**Note:** Several stability-focused PRs are open but not yet merged:
- [#2913] JSONL hot-path cloning fix (performance/memory)
- [#2907] JSONL metadata drift after crash (crash consistency)
- [#2905] Expired context fallback chain (latency/error handling)
- [#2900] CSRF + path traversal + security headers (security/stability)

These suggest the project is **actively addressing known stability gaps**, especially in the memory store and web backend.

---

## Feature Requests & Roadmap Signals

**Likely for next stable release (v0.3.0 or v0.2.10):**

1. **Image input compression pipeline** (#2964) — *Configurable compression before vision model payload.* High value for bandwidth-constrained environments and mobile use.
2. **NEAR AI Cloud provider** (#2917) — *Adds TEE-capable LLM provider.* Aligns with growing interest in confidential computing.
3. **MiMo vision-capable models** (#2915) — *Default multimodal model for WebUI.* Directly fixes user confusion when sending images to text-only models.
4. **Security hardening** (#2900) — *CSRF, path traversal, security headers.* Will likely be merged urgently given security implications.

**Longer-term signals:**
- *Media attachments in message tool* (closed #2855) — Community expects this; may appear soon as a follow-up.
- *CPU/Memory/IO optimization* (open #2916) — Unlikely to land as one big PR, but may spawn smaller targeted improvements.
- *Funding.yml* (closed #2912) — User suggested adding GitHub Sponsors support. No PR merged yet.

---

## User Feedback Summary

**Pain points expressed:**
- *RISC-V users* feel left behind — the `.deb` package is non-functional with the most popular provider (OpenAI).
- *Termux users* hit TLS certificate errors that require manual workarounds.
- *Agent developers* find the `message` tool incomplete: rich media delivery exists in the stack but is not exposed to agents.
- *Chinese-language users* requested OpenAI API-format channel support (now closed, but satisfaction unclear).

**Use cases:**
- Embedding PicoClaw into existing systems via OpenAI-compatible API (seen in #1738).
- Running PicoClaw on mobile/limited environments (Termux, RISC-V).
- Multimodal workflows (image + text in single message).

**Satisfaction indicators:**
- Active community submitting PRs: 3 contributors (afjcjsbx, PierreLeGuen, SiYue-ZO) made non-Dependabot changes.
- High dependency update velocity suggests maintainers are responsive to security/compatibility needs.

**Dissatisfaction indicators:**
- #2887 has 7 comments and zero reactions/low engagement, implying frustration without broader support.
- No visible response from maintainers on RISC-V issue (last update May 28, but no maintainer activity tagged).

---

## Backlog Watch

**Issues and PRs needing maintainer attention:**

| Item | Age | Reason for Concern | Link |
|------|-----|-------------------|------|
| [#2887] .deb RISC-V failure | 12 days | No maintainer response; platform-specific bug affects real users | [Issue](https://github.com/sipeed/picoclaw/issues/2887) |
| [#2916] CPU/Memory/IO optimization | 8 days | Stale, no clear path forward; may need maintainer to refine scope | [Issue](https://github.com/sipeed/picoclaw/issues/2916) |
| [#2917] NEAR AI Cloud provider | 8 days | Potentially high-value feature; no reviewer assigned | [PR](https://github.com/sipeed/picoclaw/pull/2917) |
| [#2915] MiMo CommonModels | 8 days | Same contributor has multiple stale PRs; may need batch review | [PR](https://github.com/sipeed/picoclaw/pull/2915) |
| [#2900] Security hardening (CSRF/path traversal) | 9 days | **Security-sensitive** — delayed merge exposes users to potential attacks | [PR](https://github.com/sipeed/picoclaw/pull/2900) |
| [#2919] go.mau.fi/util dependency bump | 8 days | Low risk, but shows Dependabot PRs piling up unmerged | [PR](https://github.com/sipeed/picoclaw/pull/2919) |

**Recommendation:** The 8–12 day staleness of these items is concerning for a project with this level of daily activity. The security fix (#2900) in particular should be prioritized for review and merge to avoid accumulating technical debt and risk.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-29

## Today's Overview
NanoClaw is in a period of **moderate activity** with 3 open issues and 6 PRs updated in the last 24 hours. The project's maintainer team is actively processing contributions — half of today's PRs were merged or closed, indicating a healthy review cadence. No new releases were published today, but the codebase is seeing both **stability hardening** (WhatsApp session fixes, security patches) and **feature growth** (AWS credential proxying, bridge self-mod capability). Notably, a long-standing skill PR (#102, Notion integration) was finally closed after more than 3 months, suggesting backlog cleanup is underway.

## Releases
*No new releases today.* The latest version remains the prior release; no migration notes or breaking changes to report.

## Project Progress
Three PRs were merged or closed today:

- **#2637 (chore: bump claude-code to 2.1.154 and claude-agent-sdk to 0.3.154)** — Merged. Updates dependency versions, including a major SDK shift (0.2→0.3) that moves `@anthropic-ai/sdk` and `@modelcontextprotocol/sdk` to peer dependencies. Necessary `@anthropic-ai/sdk ^0.100.0` added as direct dependency.
- **#2635 (feat(self-mod): patch_bridge — agents can propose host-bridge source patches)** — Merged. Extends the self-mod approval framework so agents (specifically Pero) can propose patches to the host-side `taskosaur-mcp` bridge without manual root intervention. Flow: agent calls `patch_bridge({description, diff})` → host validates → applies.
- **#102 (Add Notion integration skill)** — Closed (pending closure status). Adds a skill teaching agents to connect NanoClaw to the Notion API via MCP server for read/create/update operations on pages and databases. Closed after more than 3 months open — likely accepted or superseded.

## Community Hot Topics
The most active discussion by far is **#80 (Support runtimes and providers other than Claude/Anthropic)** with **60 👍 and 34 comments**. Author notes Anthropic is shutting down subs for API use with OpenClaw, argues for supporting alternatives like OpenCode (an open-source Claude Code CLI competitor). This has been open since February 2026 and remains the highest-reaction issue in the project — a clear signal of **vendor-dependency anxiety** among the user base and a strategic priority.

Other active items are all very recent (opened yesterday) and have not yet accumulated discussion:
- **#2632 (Clarify status of Telegram agent-swarm / multi-bot identity in v2)** — User planning v1→v2 migration asks about the old `/add-telegram-swarm` feature, noting ambiguity in the repo about whether it's still supported. This reflects real migration friction.
- **#2634 (feat: add add-paws4claws skill)** — Open PR for AWS credential proxy integration, likely to attract interest from enterprise/cloud users.

## Bugs & Stability
| Issue | Severity | Description | Fix Status |
|-------|----------|-------------|------------|
| **#2638** (engage_mode=mention engages on every WhatsApp 1-on-1) | **High** — WhatsApp `mention` mode treats human-to-human chats as bot DMs, engaging on every message. Makes the default unusable for non-trivial WhatsApp setups. | Reported yesterday, no comments yet. |
| **#2633** (Fix/whatsapp self destruct and shutdown auth wipe) | **Critical** — Open PR fixing two structural bugs in `src/channels/whatsapp.ts` that cause WhatsApp sessions on Baileys 7.x to self-destruct auth files on shutdown, making installs with `WHATSAPP_PHONE_NUMBER` unreliable. | Fix PR **#2633** submitted by maschenborn, open. |
| **#2630** (fix(session-manager): confine target inbox roots) | **Medium** — Open PR hardens inbound attachment sink against symlink-based path traversal attacks. Prevents writing through symlinked `inbox` roots. | Fix PR **#2630** submitted, open. |

## Feature Requests & Roadmap Signals
- **Multi-provider support (#80)** — The most popular request. If Anthropic continues restricting API usage with third-party clients, support for OpenCode, Codex, Gemini, etc. becomes a survival feature. Likely candidates for the next minor version.
- **AWS credential proxy integration (#2634)** — New `add-paws4claws` skill PR for integrating an AWS credential daemon. Suggests growing enterprise/cloud deployment use case.
- **OneCLI credential injection for MCP servers (#2636)** — User reports MCP servers pass placeholder strings (`"onecli-managed"`) literally when they should inject real credentials. Current proxy only covers agent's own HTTP calls, not MCP server env vars. A design gap likely to be addressed.
- **Telegram swarm status clarification (#2632)** — Not a feature request per se, but signals need for better v1→v2 migration documentation around multi-bot identity features.

## User Feedback Summary
- **Vendor lock-in anxiety (#80)** — 60 users upvoted the request for alternative LLM providers, with explicit mention of Anthropic account suspensions. This is the project's most pressing user-facing concern.
- **WhatsApp reliability frustration (#2638, #2633)** — Two separate reports of WhatsApp sessions breaking: the `mention` mode bug makes 1-on-1 chats unusable in multi-human groups; auth files are being wiped on shutdown. These are **real pain points** for users who rely on WhatsApp as their primary agent channel.
- **Migration confusion (#2632)** — One user struggling to plan v1→v2 migration due to unclear status of Telegram swarm features. Suggests documentation gaps around deprecated vs. supported features.
- **Security consciousness (implicit in #2630)** — The symlink traversal fix mentioned in PR #2630 indicates users are deploying NanoClaw in environments where session isolation matters (multi-tenant, CI/CD).
- **General satisfaction signal** — High PR volume (6 today, 3 merged) and a long-dormant skill PR finally closed suggests contributors still find the project worth building on.

## Backlog Watch
- **#80 (Support runtimes and providers other than Claude/Anthropic)** — Opened 2026-02-04, 60 👍, 34 comments, no maintainer response visible in summary. This is the **most important unresolved issue** in the project. If maintainers are waiting for a strategic decision, the community would benefit from at least a status update or a pinned RFC.
- **#102 (Notion integration skill)** — Finally closed after 3+ months, but unclear whether it was accepted or rejected. If accepted, the Notion skill would be a welcome addition for productivity-focused users.

*No long-unanswered security reports or critical bugs were found in the backlog beyond the active items listed above.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-05-29

## 1. Today's Overview
NullClaw shows high code velocity with **6 pull requests updated** in the last 24 hours, of which **5 were merged or closed** and 1 remains open. Two long-standing bugs were finally fixed via a targeted PR, and security hardening was completed across multiple channels. No new releases were tagged today, but the project is clearly in a sustained development phase with significant stability and security improvements landing. Community engagement is moderate, with no new issues filed today and the open PR count dropping.

## 2. Releases
No new releases were published today. The latest stable release remains **v2026.4.17**, which users are still testing against (see Issues #901, #869). No migration notes are applicable at this time.

## 3. Project Progress
Five PRs were merged or closed today, representing substantial quality improvements:

- **[PR #924 — fix(config): tolerate numeric items in channel allow-lists](https://github.com/nullclaw/nullclaw/pull/924)** — Closes two bugs (#869, #901) where Telegram channel configuration silently failed when `allow_from` contained numeric user IDs (as Telegram returns them). This was the root cause of "Telegram: not configured" errors despite correct `config.json`.
- **[PR #922 — feat(providers): add NEAR AI Cloud and Atlas Cloud providers](https://github.com/nullclaw/nullclaw/pull/922)** — Adds two new OpenAI-compatible inference providers with environment- variable-based API key configuration.
- **[PR #878 — fix(compat): use nanosleep on POSIX in thread.sleep](https://github.com/nullclaw/nullclaw/pull/878)** — Switches to real POSIX nanosleep for managed threads, fixing performance issues with cooperative yield under `std.Io.Threaded`.
- **[PR #907 — Security harden webhooks, HTTP secrets, and cron shell jobs](https://github.com/nullclaw/nullclaw/pull/907)** — Removes credentialed curl subprocess usage, enforces explicit `allow_from` trust for Telegram/Discord/LINE, and rejects credential-bearing headers/token query params.
- **[PR #887 — Fix build with zig v0.16 for win/linux](https://github.com/nullclaw/nullclaw/pull/887)** — Build compatibility fix for the latest Zig compiler version.

The remaining **open PR #783** (cron subagent) continues to be active with no new blocking issues reported.

## 4. Community Hot Topics
The most significant community activity centers on the **Telegram channel configuration bugs**, which were the only issues updated in the last 24 hours:

- **[Issue #901 — `channel list` always shows "not configured" for telegram](https://github.com/nullclaw/nullclaw/issues/901)** and **[Issue #869 — Telegram channel not loading from config.json](https://github.com/nullclaw/nullclaw/issues/869)** — both filed by the same user (`NOTJuangamer10`), both now closed via PR #924.

Both issues were filed weeks apart but describe the same root cause: numeric vs. string type mismatch in `allow_from`. This suggests a testing blind spot — the config validation path handled string IDs correctly but silently dropped numeric IDs. The fact that only one user reported both duplicates indicates either low community size or a narrow use case (Telegram bots managing channels with numeric UIDs). The user expressed no frustration in comments (0 comments total), which is unusual for a bug that persisted across two versions. The analysis is that the user may have been waiting for a fix rather than escalating.

## 5. Bugs & Stability
No new bugs were reported today, but the following existing bugs were **fixed**:

| Severity | Bug | Status | Fix PR |
|----------|-----|--------|--------|
| **High** | Telegram channel configuration silently fails with numeric `allow_from` IDs | Fixed | [#924](https://github.com/nullclaw/nullclaw/pull/924) |
| **Medium** | `thread.sleep()` causing performance issues on POSIX via cooperative yield | Fixed | [#878](https://github.com/nullclaw/nullclaw/pull/878) |
| **Medium** | Credential leakage risk in subprocess curl calls for webhooks | Fixed | [#907](https://github.com/nullclaw/nullclaw/pull/907) |
| **Low** | Build failure with zig v0.16 on Windows/Linux | Fixed | [#887](https://github.com/nullclaw/nullclaw/pull/887) |

The Telegram bug was the highest-impact user-facing issue, as it made the Telegram channel completely non-functional for users with numeric Telegram IDs. The fix is a type-coercion change during config loading.

## 6. Feature Requests & Roadmap Signals
The major feature landing today — **NEAR AI Cloud and Atlas Cloud providers** (PR #922) — signals growing interest in decentralized/blockchain-adjacent AI infrastructure. NEAR Protocol and Atlas Cloud both offer cloud AI compute with crypto-native billing, suggesting NullClaw is positioning for Web3 AI agent deployment.

The still-open **[PR #783 — cron subagent](https://github.com/nullclaw/nullclaw/pull/783)** represents the largest pending feature. With DB-backed scheduling, job history, JSON CLI output, and security hardening, this is likely targeted for the next minor/major release. Given the open status since April 7 and continued updates, it may be close to landing.

Predictions for next release:
1. Cron subagent engine (PR #783) — high probability
2. NEAR AI Cloud / Atlas Cloud provider support (already merged) 
3. Improved Telegram configuration validation (already merged)
4. Thread.sleep compatibility fix for broader OS support

## 7. User Feedback Summary
The only actionable user pain point surfaced in the last 24 hours is the **Telegram "not configured" bug**, which degraded the core experience for users of Telegram channels. The user repoted the issue, waited nearly a month (Issue #869 filed April 23, fixed May 28), and filed a duplicate (Issue #901) likely out of frustration that the first issue wasn't resolved. 

**User satisfaction signals**: No complaints about the fix, which suggests the resolution (PR #924) is clean. The PR description explicitly thanks the reporter, indicating good maintainer-community rapport.

**Dissatisfaction signals**: The delay in fixing a simple type-coercion bug across two releases suggests testing gaps in config parsing — especially for numeric types that are common in Telegram's API.

**Use cases visible**: Primary use case is Telegram-connected AI agents with user-restricted access (allow-lists). The NEAR/Atlas additions suggest an emerging use case of AI agents running on decentralized compute.

## 8. Backlog Watch
No long-unanswered issues or PRs were identified in the current data window. All tracked items have seen activity in the last 30 days. Open items to monitor:

- **[PR #783 — cron subagent](https://github.com/nullclaw/nullclaw/pull/783)** (open since April 7) — Not stale (last updated May 28), but has been open **52 days**. Given its scope (DB-backed scheduler, security hardening, JSON output), this is a significant feature and delays may be due to thorough review. Maintainers should assess whether it needs smaller incremental merges.

No other items in the backlog require immediate maintainer attention. The project appears well-maintained with active merging of both features and bugfixes.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-29

## 1. Today's Overview

IronClaw is in a period of **high-intensity engineering activity**, with 46 issues and 50 PRs updated in the last 24 hours. The "Reborn" architecture track dominates development, particularly around **production authentication wiring**, **credential lifecycle management**, and **HTTP egress pipeline decomposition**. The team closed 11 issues and merged/closed 35 PRs today, indicating strong delivery velocity. No new releases were published. The project is actively refactoring large monolithic modules (e.g., `host_runtime/src/lib.rs` at 1,828 lines) into smaller, typed pipelines, while simultaneously shipping new features like **Web Access extension support**, **WeCom (WeChat Work) channel validation**, and **subagent flavors**. Security-sensitive discussions around credential injection primitives and zeroization practices suggest a maturing security posture.

## 2. Releases

**None.** No new releases were published in the last 24 hours. The last release activity appears to be the pending `v0.24.0 → v0.29.0` release tracked in PR #3708, which remains open with API-breaking changes to `ironclaw_common`.

## 3. Project Progress

**35 PRs merged/closed today** across several workstreams:

### Reborn Auth & Credential Infrastructure
- **PR #4213 / #4214** – Refactored host-runtime HTTP egress into a typed pipeline (`egress/` module), splitting from the monolithic `lib.rs` (fixes #4209)
- **PR #4216** – Consolidated duplicated PKCE math into `ironclaw_common::pkce` (Track A of auth consolidation)
- **PR #3903** – Closed production credential boundary gaps including `RuntimeCredentialTarget::PathPlaceholder` and durable broker wiring (merged after extensive review)
- **PR #4218** – Allowed extension search without query parameter (list-all behavior)

### Agent Loop & Execution
- **PR #4207** – Fixed deterministic reply admission in agent loops (empty/tool-history echo replies stay loop-private)
- **PR #4210** – Classified invalid tool input as model error instead of recovery/protocol failure
- **PR #4211** – Fixed glob scan budget truncation (return results instead of failure on budget exhaustion)

### WebUI & Projections
- **PR #4212** – Projected skill activations to WebUI v2 chat events
- **PR #4196** – Exposed work summary projections for live driver progress
- **PR #4219** (open) – Added Web Access extension with Exa MCP search

### CI/Benchmark
- **PR #4217** – Updated benchmark CI to track `@main` instead of pinned SHA
- **PR #4220** – Fixed `id-token: write` permissions for benchmark jobs
- **PR #4221** – Further CI permission scoping fix for bench job

### Factory & Builder Architecture
- **PR #3887** – Merged: routed Reborn production builders through factory pattern

## 4. Community Hot Topics

- **#3917 – `RuntimeCredentialTarget::PathPlaceholder` security concern** (4 comments)
  - *Link:* [Issue #3917](https://github.com/nearai/ironclaw/issues/3917)
  - *Analysis:* A credential-injection primitive that places secrets into URL path segments. The author (zmanian) argues this is a "strictly worse channel" than header or query injection due to leakage in server logs, referrer headers, and browser history. This is a **high-signal security debate** about whether to ship or kill a feature before it enters production. The PR #3903 that introduced it was just merged—so this concern remains unresolved.

- **#4176 – Wiring auth consumers through staged credentials** (3 comments)
  - *Link:* [Issue #4176](https://github.com/nearai/ironclaw/issues/4176)
  - *Analysis:* Follow-up from production auth status review. This issue coordinates first-party, WASM, and MCP auth consumers through a staged credential pipeline. It's part of a 6-issue auth epic (#4174, #4175, #4201-4205) that collectively represents the **biggest active workstream**.

- **#4085 – Production builders now require TenantSandboxProcessPort** (3 comments, closed)
  - *Link:* [Issue #4085](https://github.com/nearai/ironclaw/issues/4085)
  - *Analysis:* Resolved by PR #3887. This issue documented CI test failures caused by missing port requirements in production builders—a good example of the team closing the loop on regression investigations.

- **#4202 – OAuth callback token cleanup hardening** (1 comment)
  - *Link:* [Issue #4202](https://github.com/nearai/ironclaw/issues/4202)
  - *Analysis:* Filed while PR #4174 was still open. The issue was rescoped to track remaining work after #4174 shipped its compensating-cleanup approach. Shows careful **change management**: filing issues concurrently with PRs to track residual scope.

## 5. Bugs & Stability

### High Severity
- **#4191 – WeCom Channel Validation Findings** (new, 10 sub-issues)
  - *Link:* [Issue #4191](https://github.com/nearai/ironclaw/issues/4191)
  - *Description:* Deep validation of the new WeCom channel in v0.29.0 staging finds **multiple critical issues**:
    - **#4195**: Image attachments unstable/inconsistent (HEIF failures, large image drops)
    - **#4197**: Vision analysis resolves stale/incorrect images
    - **#4194**: Group chat and private DM merged into same WebUI conversation
    - **#4198**: Owner cannot see unpaired user conversations
  - *Fix status:* No fix PRs yet; these are validation findings

- **#4202 – OAuth callback token cleanup not crash-safe**
  - *Link:* [Issue #4202](https://github.com/nearai/ironclaw/issues/4202)
  - *Description:* Token cleanup state can leave dangling state after crash/restart. PR #4174 partially addressed this with compensating-cleanup; the issue tracks what remains: durable cleanup, restart-safe replay dedup, and shutdown ordering.
  - *Fix status:* In progress (tracked alongside #4174)

### Medium Severity
- **#4222 – Credential material not zeroized in HTTP requests**
  - *Link:* [Issue #4222](https://github.com/nearai/ironclaw/issues/4222)
  - *Description:* Credentials copied into URL/header fields during injection remain in memory until GC. No zeroization after use.
  - *Fix status:* No PR yet—filed today

- **#4206 – Runtime HTTP egress is synchronous**
  - *Link:* [Issue #4206](https://github.com/nearai/ironclaw/issues/4206)
  - *Description:* Entire HTTP egress pipeline (`RuntimeHttpEgress::execute` → concrete transport) is synchronous. Blocks async progress and prevents cancellation.
  - *Fix status:* No PR yet—filed today as architectural debt

### Closed / Fixed Today
- **#4085** – CI test failures from missing `TenantSandboxProcessPort` (resolved by PR #3887)
- **#4113** – Google token refresh implementation (resolved by PR #4174)
- **#4161** – Google OAuth adapter boundary refactoring (resolved)
- **#4208** – Builtin HTTP input diagnostics tightened (PR #4208 merged)
- **#4211** – Glob scan budget reached causing failures (PR #4211 merged)

## 6. Feature Requests & Roadmap Signals

### Likely Shipping in Next Release (v0.29.0 / v0.30.0)

| Feature | Evidence | Status |
|---------|----------|--------|
| **Web Access Extension** (Exa MCP search) | PR #4219 open with XL size, low risk | Likely next release |
| **Typed diff display previews** | PR #4184 open (XL, low risk) | Likely next release |
| **Local-dev approval gates** | PR #4186 open (XL, low risk) | Likely next release |
| **WeCom channel stabilization** | Issues #4191-#4199 filed from staging validation | Must fix before v0.29.0 ships |
| **SSO for WebChat v2** (GitHub + NEAR) | Issue #4204 filed as follow-up to #4116 | In queue |
| **PKCE consolidation** | PR #4216 merged today | Shipped to `reborn-integration` |
| **Subagent flavors** (coder/explorer/planner) | Issue #4086 closed, PR merged | Shipped |

### Longer-Range Roadmap Signals
- **Async HTTP egress** (#4206): Major architecture change, likely v0.30+
- **Credential zeroization** (#4222): Security hardening, likely v0.29.0 if prioritized, else v0.30+
- **Host runtime lib.rs decomposition** (#4209): PR #4214 merged, follow-up extraction expected
- **Durable product-auth ports** (#4175): Blocking production auth completeness
- **OAuth callback cleanup hardening** (#4202): Remaining work after #4174

## 7. User Feedback Summary

### Positive Indicators
- **WeCom channel**: Core text messaging, pairing, persistence, markdown, emoji, and multilingual support are **all working well** (✅ in issue #4191)
- **Subagent design**: The subagent spawn design (#3798 received 3 comments, mostly technical discussion—no fundamental objections)
- **CI velocity**: Team is actively fixing benchmark pipeline issues (#4220, #4221 merged same day as filed)

### Pain Points
- **WeCom channel stability**: Image handling is "highly unstable" (HEIF failures, dropped images, stale vision analysis). This is **the biggest user-facing quality issue** right now.
- **Setup UX**: WeCom onboarding lacks prerequisite guidance—users don't know they need enterprise/admin credentials. "Settings → Channels → WeCom" shows only Bot ID/Bot Secret with no instructions.
- **Conversation merging**: Group and private DMs merge in WebUI, breaking the expected separation of conversations.
- **Owner visibility gap**: Cannot see unpaired user conversations—unclear if intentional.

### Satisfaction Indicators
- The active issue count (46 in 24h) and PR velocity (50 in 24h) suggest a **healthy, responsive development community**.
- No user complaints about regressions in existing functionality (v1 auth, v1 channels).
- The benchmark CI fixes (#3834 canary PR) show the team **investing in developer experience**.

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Description | Why It Matters |
|-------|-----|-------------|----------------|
| [#3289](https://github.com/nearai/ironclaw/issues/3289) | 23 days | Migrate secrets, OAuth, and auth setup product flows (parent epic) | This is the **root epic** for the entire Reborn auth migration. Last updated 2026-05-28 with 1 comment—needs status update or checkpoint. |
| [#3917](https://github.com/nearai/ironclaw/issues/3917) | 6 days | Kill or harden `PathPlaceholder` credential injection | Filed by zmanian with clear security concerns. PR #3903 that introduced this just merged. **Needs a maintainer decision**: ship as-is, remove, or harden. |
| [#4116](https://github.com/nearai/ironclaw/issues/4116) | 2 days | Carry v1 SSO into WebChat v2 (high risk) | Tagged `risk: high`. Google SSO slice landed (#4182) but GitHub/NEAR remain. **No PRs yet** for remaining providers. |
| [#4191](https://github.com/nearai/ironclaw/issues/4191) | 1 day | WeCom channel validation (10 sub-issues) | Filed today with ✅/⚠️/❌ grading. **Needs triage assignment**—no fix PRs yet for any sub-issue. |

### PRs Waiting for Review
- **#3708** – Release PR (pending since May 16, 12 days old): Contains breaking changes for `ironclaw_common`. **Blocking v0.29.0** from shipping.
- **#3834** – Benchmark canary PR (8 days old): `/benchmark` slash command test, blocked on CI fixes that just landed (#4220, #4221). May be ready to close.
- **#4184** – Typed diff display previews (1 day, XL size): Low risk, no comments yet.
- **#4186** – Local-dev approval gates (1 day, XL size): Low risk, no comments yet.
- **#4219** – Web Access extension (1 day, XL size): Low risk, no comments yet.

### Aging Inactive Items
- No issues older than 30 days appear in the top 30 by comment count, suggesting the team **tends issues quickly**.
- The longest-open tracked issue (#3289 at 23 days) is actively being worked (multiple child issues closed this week).

---

**Project Health Summary:** 💚 **Healthy, high velocity.** The Reborn architecture migration is progressing on multiple fronts simultaneously. Security posture is improving with credential zeroization discussions. The WeCom channel validation findings represent the most significant quality risk (10 sub-issues, all unfixed). The release pipeline appears blocked on PR #3708 (breaking changes). Overall, IronClaw shows strong engineering discipline with clear issue tracking, layered decomposition, and prompt regression fixes.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-29

## Today's Overview
LobsterAI shows **moderate-to-high activity** with 29 PRs updated in the last 24 hours and 9 merged/closed, indicating a productive development cycle. The team is focusing on plugin infrastructure improvements, Kit (expert suite) integration, and artifact detection refinements. One new open issue reports a timed task creation error, but no critical regressions were filed. The project also carries a backlog of older PRs (dating back to April) that remain open, suggesting some feature branches are maturing slowly.

## Releases
**No new releases** were published in the last 24 hours. The latest available version remains **2026.5.27** (referenced in Issue #2071).

## Project Progress
**9 PRs were merged/closed today**, advancing several feature areas:

- **Plugin System Upgrades** — PR [#2069](https://github.com/netease-youdao/LobsterAI/pull/2069) added a manual "Check Updates" button for plugins from npm and ClawHub sources, with version detection and inline update confirmation. PR [#2068](https://github.com/netease-youdao/LobsterAI/pull/2068) introduced deferred plugin settings saving with batch writes and a dirty guard, reducing unnecessary gateway restarts.
- **Kit (Expert Suite) Store & Chat Integration** — PR [#2060](https://github.com/netease-youdao/LobsterAI/pull/2060) (merged) delivers the full Kit feature: browsing, installing/uninstalling kits, chat popover selection, and automatic skill injection into session context.
- **Artifact Detection Fix** — PR [#2070](https://github.com/netease-youdao/LobsterAI/pull/2070) scoped `parseFilePathsFromText` to only run on `image_generate` or `lobsterai_image_generate` tool results, preventing command output from incorrectly triggering artifact detection.
- **Image Preview in Input** — PR [#2061](https://github.com/netease-youdao/LobsterAI/pull/2061) added click-to-preview for image attachments in the prompt input by reusing the ImagePreviewModal.
- **Kit "Try Asking" Fix** — PR [#2067](https://github.com/netease-youdao/LobsterAI/pull/2067) resolved a bug where Kit installation/uninstallation did not sync to Redux store, causing "try-asking" navigation to fail expanding Kits into skills.
- **MCP Stdio Process Cleanup** — PR [#2066](https://github.com/netease-youdao/LobsterAI/pull/2066) (merged) introduced process-tree killing (via `taskkill /T` on Windows) for MCP stdio transports and shared runtime across sessions.

## Community Hot Topics
- **Issue #2071 — Timed task creation error** ([link](https://github.com/netease-youdao/LobsterAI/issues/2071)): User reports an error when creating scheduled tasks on version 2026.5.27. Includes a screenshot but no comments yet. This is the only open issue updated today, suggesting potential user experience friction with the scheduled task module.
- **PR #1488 — Scheduled Task UI overhaul** ([link](https://github.com/netease-youdao/LobsterAI/pull/1488)): This long-open PR (since April 5) proposes a complete UX upgrade — card grid layout, search, history grouping by date, and date range filtering. High activity in the scheduled task area (Issue #2071 + PR #1488) signals strong community interest in improving this module.
- **PR #2060 — Kit store integration** ([link](https://github.com/netease-youdao/LobsterAI/pull/2060)): With 1 comment, this merged PR represents a major new feature — expert skill kits. The community appears engaged with the "try asking" and cross-session persistence behavior.

## Bugs & Stability

| Severity | Issue | Status | Details |
|----------|-------|--------|---------|
| **High** | #2071 — Timed task creation error | Open, no fix PR | Error creating scheduled tasks on v2026.5.27. No reproduction steps provided. |
| **Medium** | #2065 — Agent ID uses short UUID (open) | Open | PR addresses data resurrection bug when deleting then recreating agents with same name. Several related cleanup tasks remain TODO. |
| **Low** | #2067 — Kit try-asking not expanding skills | Fixed via PR #2067 | Redux sync issue on Kit install/uninstall, now resolved. |
| **Low** | #2070 — Artifact detection false positives | Fixed via PR #2070 | Non-image tool results (e.g., `find` command output) were incorrectly detected as artifacts. |

## Feature Requests & Roadmap Signals
- **Kit (Expert Suite) System** (PR #2060) — This major feature is now merged. Likely to appear in the next release, enabling users to package multiple skills into one-click installable kits from a store.
- **Plugin Update Checks** (PR #2069) — Adds manual update checking for plugins. With batch-save (PR #2068) also merged, the plugin infrastructure is maturing rapidly.
- **Automated Model Failover** (PR #1483, open since April 5) — Automatic retry with fallback model on transient errors. Still open but could indicate future reliability improvements.
- **Gmail Email Trigger** (PR #1484, open since April 5) — Gmail polling agent trigger for automatic activation. Suggests expanding automation triggers beyond current built-in options.
- **AI Message Read-Aloud** (PR #1682, open since April 14) — TTS via Web Speech API for AI responses. Community interest in accessibility features.
- **Per-Session Skill State** (PR #1494, open since April 6) — Users want skills active per conversation, not globally. This addresses a common UX complaint.

## User Feedback Summary
- **Scheduled task creation** is error-prone on the latest version (Issue #2071), suggesting recent refactoring may have introduced a regression.
- **Kit "try asking" workflow** was broken (PR #2067), indicating that the new Kit feature had a significant UX gap where installed kits weren't reflected in chat sessions after navigation — now fixed.
- **Agent data resurrection** (PR #2065) remains partially unresolved; while ID generation is fixed, orphaned session data is not yet cleaned up on agent deletion, which could confuse users who delete and recreate agents.
- **Positive signals**: Image preview in input (PR #2061) and artifact detection fixes (PR #2070) address real user pain points around media handling and false positives in chat.

## Backlog Watch
| Item | Age | Status | Notes |
|------|-----|--------|-------|
| [PR #1478](https://github.com/netease-youdao/LobsterAI/pull/1478) — CopyButton timer memory leak | Since Apr 4 | Open, stale | Fix for React "update on unmounted component" warning. Requires maintainer review. |
| [PR #1479](https://github.com/netease-youdao/LobsterAI/pull/1479) — Duplicate skill folder rejection | Since Apr 4 | Open, stale | Prevents installing same local skill with `-1`, `-2` suffixes. Simple fix. |
| [PR #1480](https://github.com/netease-youdao/LobsterAI/pull/1480) — Toast and refresh after skill install | Since Apr 4 | Open, stale | UX improvement for skill installation feedback. |
| [PR #1481](https://github.com/netease-youdao/LobsterAI/pull/1481) — Scroll-friendly active skill chips | Since Apr 4 | Open, stale | Overflow fix for long skill lists in prompt bar. |
| [PR #1482](https://github.com/netease-youdao/LobsterAI/pull/1482) — Scheduled task edit clears description | Since Apr 5 | Open, stale | Description and enabled state get overwritten on edit — directly related to Issue #2071. |
| [PR #1484](https://github.com/netease-youdao/LobsterAI/pull/1484) — Gmail email trigger | Since Apr 5 | Open, stale | Large feature with architecture changes. May need design review. |
| [PR #1682](https://github.com/netease-youdao/LobsterAI/pull/1682) — AI message read-aloud (TTS) | Since Apr 14 | Open, stale | Pure frontend, zero-dependency TTS feature. |
| [PR #1707](https://github.com/netease-youdao/LobsterAI/pull/1707) — Clear input on agent switch | Since Apr 16 | Open, stale | Fixes shared draft state across agents on home page. |

**Attention needed**: Four stale PRs from April 4-5 (PRs #1478-#1482) remain unreviewed for over 7 weeks, including a scheduled task edit bug (PR #1482) that is now matched by a fresh user bug report (Issue #2071). Prioritizing PR #1482 could prevent duplicate investigation.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the Moltis project digest for 2026-05-29.

---

## Moltis Project Digest – 2026-05-29

### 1. Today's Overview
The Moltis project saw a moderate burst of activity, with significant cleanup of open bugs and a focused batch of feature enhancements. Eight issues were updated in the last 24 hours, but only one remains open, indicating a healthy rate of bug resolution. A single new Pull Request was opened, while four were merged or closed, including several targeted fixes for Discord integration, cron job behavior, and provider compatibility. This suggests the maintainers are currently in a stabilization and polish phase rather than shipping major new features.

### 2. Releases
No new releases were published today.

### 3. Project Progress – Merged/Closed PRs
Four Pull Requests were merged/closed today, all authored by **penso**:

- **fix(discord): log silent voice message drops** (PR [#1081](https://github.com/moltis-org/moltis/pull/1081)): Adds diagnostic logging to differentiate gateway drops from handler drops, and includes regression tests for voice-attachment-only messages. This resolves the underlying bug reported in Issue #817.

- **fix(providers): strip MiniMax user names** (PR [#1078](https://github.com/moltis-org/moltis/pull/1078)): Fixes the MiniMax 2013 error by moving provider-specific request quirks into the catalog metadata, stripping user `name` fields for MiniMax endpoints.

- **fix(web): include clicked response in message forks** (PR [#1080](https://github.com/moltis-org/moltis/pull/1080)): Corrects the fork behavior to use the exclusive boundary after the clicked assistant response, fixing Issue #1075. Includes Playwright regression coverage.

- **fix(cron): preserve host execution target** (PR [#1079](https://github.com/moltis-org/moltis/pull/1079)): Ensures that cron jobs explicitly configured with "Execution Target: Host" are not overridden by agent preset sandbox policies. Fixes Issue #1072.

### 4. Community Hot Topics
The sole open issue drew the most attention:

- **Issue #235 – PTY-based interactive Claude Code CLI control** ([Link](https://github.com/moltis-org/moltis/issues/235))
  - *Status:* Open (since Feb 2026)
  - *Comments:* 5 | *Reactions:* 1 👍
  - *Analysis:* This long-standing issue addresses a fundamental architectural limitation: when agent frameworks spawn Claude Code as a subprocess, the lack of a real TTY disables interactive mode, preventing multi-agent orchestration from receiving mid-task requests or handling human-in-the-loop workflows. The high comment count relative to its age suggests significant community interest in enabling deeper agent-to-agent and human-agent interactions beyond simple pipe-based I/O. This is a feature with high potential value for advanced orchestration scenarios.

### 5. Bugs & Stability
Today’s closed bugs were all resolved by merged PRs, indicating strong maintainer responsiveness. Ranked by severity:

- **High: Discord voice messages silently dropped (Issue #817)** ([Link](https://github.com/moltis-org/moltis/issues/817)): Silent data loss; voice messages received by the gateway were never passed to handlers. **Resolved** by PR [#1081](https://github.com/moltis-org/moltis/pull/1081).

- **Medium: "fork" forks at prompt, not response (Issue #1075)** ([Link](https://github.com/moltis-org/moltis/issues/1075)): A UI bug that caused message forks to include the wrong context boundary, potentially confusing users. **Resolved** by PR [#1080](https://github.com/moltis-org/moltis/pull/1080).

- **Medium: MiniMax user name error (Issue #1077)** ([Link](https://github.com/moltis-org/moltis/issues/1077)): A provider-level compatibility bug blocking group-chat usage. **Resolved** by PR [#1078](https://github.com/moltis-org/moltis/pull/1078).

- **Medium: Cron host execution target ignored (Issue #1072)** ([Link](https://github.com/moltis-org/moltis/issues/1072)): A regression where "Execution Target: Host" cron jobs were run in sandboxes. **Resolved** by PR [#1079](https://github.com/moltis-org/moltis/pull/1079).

- **Low: Webapp Won't Connect (Issue #385)** ([Link](https://github.com/moltis-org/moltis/issues/385)):
  - *Note:* Issue was already closed prior to today’s digest window.

### 6. Feature Requests & Roadmap Signals
- **Feature Request: Sub-agents configurable in WebUI (Issue #906)** ([Link](https://github.com/moltis-org/moltis/issues/906)): A closed request to make sub-agent configuration accessible through the Web UI rather than requiring direct API or config file manipulation. Anticipating the next minor release, this is a strong candidate for inclusion as the project matures its UX layer.

- **Open Feature: PTY-based interactive CLI control (Issue #235)** ([Link](https://github.com/moltis-org/moltis/issues/235)): While not a traditional feature request, this open issue functions as one. The proposed solution (PTY-based control) is a significant architectural change. Given its age and the fact that a new PR [#1082](https://github.com/moltis-org/moltis/pull/1082) introduces a gated tmux control command (an adjacent capability), the maintainers may be incrementally building the infrastructure needed for full interactive subprocess orchestration.

### 7. User Feedback Summary
- **Satisfaction:** The high rate of bug fix turnaround (4 fixes, all by the same contributor, within 24 hours of the bugs being reported) suggests a responsive maintenance cycle that users will appreciate. The explicit documentation and regression tests included in PR descriptions indicate a mature engineering culture.
- **Pain Points:** User **vvuk** (Issue #1075) experienced confusion with the "fork" feature's boundary behavior, which was quickly addressed. User **dmitriikeler** (Issue #817) reported a silent data loss scenario (voice messages), which was likely frustrating given the lack of error feedback. Both issues were resolved promptly.
- **Emerging Needs:** The continued attention on Issue #235 (PTY control) and the new `/tmux` command (PR [#1082](https://github.com/moltis-org/moltis/pull/1082)) signal a growing user desire for deeper, more interactive control over subprocesses and the host terminal environment.

### 8. Backlog Watch
- **Issue #235 – PTY-based interactive Claude Code CLI control** ([Link](https://github.com/moltis-org/moltis/issues/235))
  - *Age:* 3 months
  - *Risk:* Stale. Despite being the only open issue updated today, it has been open since February with only 5 comments and 1 reaction. The new PR [#1082](https://github.com/moltis-org/moltis/pull/1082) (a gated tmux command) may be a stepping stone, but the core issue lacks an assigned owner or recent maintainer comment. Without explicit maintainer attention, this issue risks becoming a "wontfix" or "future" candidate, which may frustrate community members looking for multi-agent orchestration capabilities.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-05-29

## Today's Overview

CoPaw shows very high activity today, with 43 issues and 40 PRs updated in the last 24 hours, indicating an intense development sprint. The project is in a highly responsive maintenance and feature development phase, with 11 issues closed and 22 PRs merged/closed out of the total. No new releases were published today, but the volume of merged PRs suggests a release candidate may be forming. The community is highly engaged, submitting detailed bug reports and feature suggestions, particularly focused on the Windows desktop experience and UX polish. A notable "Breaking Change" issue (#4727) signals a major backend migration is being planned.

## Releases

No new releases were published on 2026-05-29. The latest version remains v1.1.9 (referenced in many issues).

## Project Progress

**22 PRs were merged or closed today**, reflecting significant progress in both bug fixes and feature work:

- **Desktop & Packaging Fixes:** PR #4779 (bundled desktop CLI for Tauri/PyInstaller) addresses a critical issue where desktop cron creation failed due to missing `qwenpaw` CLI path. PR #4683 fixes Tauri desktop external links and download regressions.

- **UI/UX Improvements:** PR #4755 fixes the "draft refill" bug where sent messages reappeared in the input box after navigation. PR #4763 enhances message timestamp handling with user timezone support. PR #4725 adds loading states to workspace download buttons.

- **Console Styling & Plugin UX:** PR #4657 improves Environments & Security page styling. PR #4588 adds auto-reload after plugin install/uninstall, removing the need for manual page refresh. PR #3875 adds a demo page link to header navigation.

- **Integration Testing:** PR #4745 (Sprint 1.3) adds 39 integration test cases with seeded data scenarios, strengthening the test harness.

- **Tooling & Automation:** PR #4692 adds a GitHub Actions workflow to automatically maintain contributors data.

## Community Hot Topics

1. **[#4754 - Packaging Question (7 comments)]** — User asks about differences between Windows Desktop and Windows Desktop Tauri versions, and the official EXE packaging method. This reflects confusion around distribution channels.

2. **[#4739 - Tool Call Hangs Agent (6 comments)]** — Critical bug: after a tool call (browser snapshot, shell) completes or times out, the agent enters "waiting for user input" instead of continuing. User must send a new message to wake it up.

3. **[#4746 - Conversation Sort Order (4 comments)]** — User requests conversations be sorted by latest message time, noting all mainstream apps use this pattern. A duplicate (#4732) was closed, suggesting maintainers are aware.

4. **[#4773 - Desktop Cron Pip Installation (4 comments)]** — Windows desktop version keeps trying to `pip install qwenpaw` when creating cron tasks, likely because the bundled CLI isn't in PATH. Related to PR #4779.

5. **[#4652 - Memory Enhancement Request (4 comments)]** — Detailed proposal for a "summarize-link-remind" memory system, criticizing current "accumulate without learning" behavior.

## Bugs & Stability

**High Severity:**
- **#4739 — Agent hangs after tool call** (open): Agent silently enters waiting state after tool completion. No fix PR yet.
- **#4704 — macOS Tahoe crash** (open): Desktop app crashes with SIGSEGV on Feishu channel messages after macOS upgrade. Only console channel works.
- **#4773 — Desktop cron pip loop** (open): Windows desktop keeps re-installing qwenpaw instead of using bundled CLI. Fix PR #4779 is open.

**Medium Severity:**
- **#4764 — Desktop browser lockout** (open): After opening a webpage, user cannot return to the app.
- **#4784 — /skills command fails** (closed): First invocation in new session doesn't trigger, second invocation errors with YAML indentation issue. Closed as bug.
- **#4775 — Cron task can't edit/delete** (closed): Buttons grayed out after creating cron tasks in v1.19. Closed.
- **#4774 — Input draft persists** (open): After navigating away and back, previous input is restored. Fix PR #4755 is already merged.

**Low Severity:**
- **#4781 — Tool result pruning fails** (open): Oversized shell output can exceed `recent_max_bytes` by 20x. PR #4787 offers a fix.
- **#4783 — Desktop pet not opening** (open): Terminal loops but pet window never appears.
- **#4777 — Shell CMD popups** (open): Desktop version shows cmd.exe windows for every shell command.
- **#4756 — LaTeX rendering poor** (open): Math formulas render incorrectly compared to standard markdown editors.

## Feature Requests & Roadmap Signals

**Likely in next version (based on open PRs and maintainer attention):**
- **Configuration refactoring** (#4758): Separate global/agent scopes, add versioning and comparison playground. 2 comments, author is active on PRs.
- **Provider auto-fallback** (#4757): Seamless failover when token quotas exhausted, with a detailed mockup image.
- **AgentScope 2.0 migration** (#4727): Breaking Change issue with 1 like, marked as planned major shift.
- **Memory system overhaul** (#4652): Detailed community proposal with 4 comments over 4 days, touches core architecture.
- **Token/context usage display** (PR #4433 under review): Per-turn provider usage and context window indicator.

**High-request UX features:**
- **Skill tab-completion** (#4785, closed): Input `/skills` should show autocomplete, similar to mainstream agents.
- **Conversation list sorting** (#4746): Sort by latest message time. Closed as enhancement, likely planned.
- **File download from workspace** (#1492, reopened/updated 2026-05-28): Users want to see/download files generated by agents directly in UI.
- **Desktop task execution controls** (#4776, #4778): Mute notifications, show session names in cron, allow clicking notifications to jump to conversation.

## User Feedback Summary

**Pain Points (dissatisfaction):**
1. **Windows desktop UX is frustrating**: Users report multiple issues — CMD popups (#4777), cron tasks not finding CLI (#4773), input draft persistence (#4774), pet not launching (#4783), and inability to navigate back from browser (#4764).
2. **Memory system is "information hoarding"**: The core critique in #4652 that the memory system "records without learning" resonates with users who want intelligent summarization.
3. **Conversation management is inadequate**: Sorting, session naming, and multi-config handling complaints (#4746, #4778, #4786) show users find basic chat UX below mainstream competitors.
4. **Tool execution reliability issues**: Agent hangs after tool calls (#4739) erodes trust in autonomous operation.

**Positive Signals:**
- Users are actively deploying cron tasks and skills, indicating deep engagement.
- Detailed feature requests show advanced users who understand the product and want it to improve.
- Multiple first-time contributors submitted PRs today (#4772, #4766, #4765), showing healthy community growth.

## Backlog Watch

| Issue | Age | Status | Priority Signal |
|-------|-----|--------|-----------------|
| **#1492 — Workspace file management** | 76 days (since Mar 14) | Updated today (May 28) | High: Reopened and discussed today, basic workflow blocker |
| **#3942 — Full multimodal support (audio/video)** | 30 days | Closed (no solution) | Medium: Closed without resolution, may be deferred |
| **#4652 — Memory system overhaul** | 5 days | Open, 4 comments | High: Detailed proposal from active community member |
| **#4727 — AgentScope 2.0 migration** | 2 days | Open, Breaking Change label | Very High: Architectural change, will affect all users |
| **#4704 — macOS Tahoe crash** | 3 days | Open | High: App unusable on latest macOS, no maintainer response yet |

**PRs needing maintainer attention:**
- **#4787** (against #4781): Fix for oversized shell output blowing context — opened today, no comments.
- **#4762** (Coding Mode open directory): Feature PR from `rayrayraykk` — 2 days open, under review label but no activity.
- **#4745** (Integration tests): Sprint 1.3 with 39 test cases — opened yesterday, no maintainer engagement yet.

*Note: All links follow pattern `agentscope-ai/QwenPaw Issue #<number>` or `PR #<number>`.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-29

## Today's Overview

ZeroClaw is in a highly active development phase, driven by a major integration branch (#6848) and a surge of user-submitted bug reports. With 22 issues and 48 PRs updated in the last 24 hours, the project is processing significant community contributions and critical fixes. The team is preparing a v0.8.0-beta-2 pre-release while simultaneously addressing security regressions, provider compatibility issues, and upcoming channel integrations. Activity levels are very high, indicating a healthy, responsive open-source ecosystem.

## Releases

No new releases were published today. The last tagged release remains **v0.8.0-beta-1**, though the large integration PR #6848 explicitly targets a v0.8.0-beta-2 pre-release. Users on beta-1 should expect breaking changes in beta-2, including reworked model-provider fallback behaviors and the deprecation of legacy delegate wiring.

## Project Progress

**6 PRs were merged or closed today:**
- **#6994** (closed, merged) — `fix(slack): default strict_mention_in_thread to true`. Changes the default Slack channel behavior so @-mention rules apply uniformly to top-level messages and thread replies. A targeted quality-of-life fix for Slack users.
- **#6908** (closed, merged) — `fix(onboard): add Codex subscription auth for OpenAI provider`. Unblocks OpenAI onboarding for users who rely on Codex subscription OAuth (ChatGPT Plus/Pro) rather than a raw API key.
- **#6147** (closed) — Bug report about Anthropic's native API potentially rejecting `temp=0` for opus-4-7 was closed. The maintainers determined it was a non-issue because Anthropic's native API is more permissive than Bedrock.
- **#5650** (closed, merged) — `feat(provider): add native extended thinking for Anthropic provider`. Adds dedicated reasoning chains via `budget_tokens` for Anthropic's thinking levels High and Max. This had been open since April 11 and is a significant provider enhancement.

Three additional PRs were closed without merge, suggesting they were superseded or withdrawn.

## Community Hot Topics

**Most active Issues (by comments/reactions):**
- **#6059** — `[Bug]: Incompatible with DeepSeek-V4 API format` (14 comments, 4 👍). The highest-activity issue. Users report the thinking mode in DeepSeek-V4-Pro and V4-Flash APIs is broken, causing provider calls to fail with a "degraded behavior" severity. This is marked `priority:p1` and `status:in-progress`, indicating active work.
- **#5674** — `[Feature]: Make classify_channel_reply_intent configurable` (4 comments, 3 👍). A persistent user request — the "should I reply" gate breaks 1:1 chats by causing the assistant to ignore the user. The author is frustrated ("causing the assistant to ignore me"), and the project has **already produced PR #6945** to address this with a per-agent `classifier_provider` option.

**Most active PRs:**
- **#6848** — `feat(integration): introduce zerocode TUI, RPC socket transport, DenyWithEdit approval, and beta-2 integration`. This is the largest PR in the queue (size: XL, annotated with 40+ labels). It seeks "first round feedback" and holds known issues (delegates need re-introduction, fallback behaviors need rewiring). It is the key integration branch for v0.8.0-beta-2.
- **#6987** — `fix(tauri): remove manual MANIFEST linker flags to fix CVT1100/LNK1123 on Windows`. A build-fix PR addressing a Windows-only linker crash that blocks Tauri compilation. High urgency for Windows developers.

**Underlying needs:** The community is primarily demanding (a) provider compatibility with bleeding-edge models (DeepSeek V4, opus-4-7), (b) granular reply-control configuration for 1:1 versus group chats, and (c) stable Windows and macOS builds for the Tauri desktop app.

## Bugs & Stability

**Bugs reported today (7 new, ranked by severity):**

**S1 - Workflow blocked (3):**
1. **#6992** — `[Bug]: Slack Socket Mode rejects all messages as "unauthorized user"`. ALL incoming Slack messages fail with a 403-like authorization error. No fix PR exists yet. A critical blocker for Slack users.
2. **#6984** — `bug(gateway): token rotation does not revoke existing bearer tokens`. Both documented rotation surfaces (CLI and API) mint a new pairing code but leave old bearer tokens valid, meaning token rotation provides no actual security. **A fix PR (#6988) exists** and was opened same-day.
3. **#6975** — `[Bug]: zeroclaw onboard marks agents/profiles sections complete without writing config`. The onboarding CLI completes interactively but writes no actual config to disk, so agents and risk-profiles are never created. Fix PR is not yet filed.

**S2 - Degraded behavior (3):**
4. **#6991** — `bug(runtime): Native tool serialization ignores Risk Profile and Tool Filter restrictions in v0.8.0-beta-1`. A regression: tool access controls defined in config are silently bypassed. No fix PR yet.
5. **#6995** — `[Bug]: Backspace in zeroclaw agent CLI deletes byte-by-byte instead of character-by-character (UTF-8 CJK chars need 3 backspaces)`. An internationalization UX bug affecting CJK users.
6. **#6976** — `[Bug]: Web UI WebSocket chat fails with 1006 — missing ?agent= query parameter`. The Web UI immediately disconnects on page load. No fix PR yet.

**S3 - Minor issue (1):**
7. **#6990** — `i18n: bring new file_download tool strings under the fl!() / Fluent contract`. Not a crash, but a localization compliance gap introduced by PR #6957.

**Previously reported bugs with activity today:**
- **#6361** (S1, MiniMax tool loops) — marked `status:in-progress`. The context compression bug that drops tool_calls entirely for OpenAI-compatible providers remains unresolved.
- **#5470** (Multiple safety issues) — still `status:stale, status:blocked`. No progress toward a reproducer.

## Feature Requests & Roadmap Signals

**Noteworthy new feature requests from May 28:**
1. **#6996** — `RFC: Granular sandbox policy — filesystem and network restrictions`. Proposes config-driven sandbox policies for the three OS backends (Landlock, Bubblewrap, Seatbelt). If adopted, this would be the first step toward enterprise-grade security controls.
2. **#6989** — `config: extend #[secret] so headers maps redact bearer tokens`. Addresses a configuration security gap where `[mcp.servers.*.headers]` and `[file_upload].headers` cannot mark bearer tokens as secrets.

**Prediction for v0.8.1 (based on #6970 tracker and PR queue):**
- The `classify_channel_reply_intent` configurable (PR #6945) is almost certain for v0.8.1, given high community demand and a completed PR.
- Per-recipient reply pacing across 9 channels (PR #6389) is likely to land.
- The `file_download` tool (PR #6957) is a strong candidate.
- The `--ephemeral` daemon mode (#6818) and session-scoped runtime overrides (#6817) are noted as `status:in-progress` with priority p2.

## User Feedback Summary

**Pain points expressed:**
- **Provider friction**: DeepSeek V4 incompatibility (#6059), Anthropic/Bedrock temperature conflicts (#6147), and MiniMax tool loop regressions (#6361) are blocking real user workflows.
- **1:1 chat ignored**: Multiple users report frustration with the "should I reply" gate in private chats (#5674, author says "causing the assistant to ignore me").
- **Onboarding broken**: The UI-based onboarding (#6975) is a paper cut — it gives a false sense of completion by marking sections done without writing config.
- **I18n gaps**: CJK users face byte-level backspace deletion (#6995), and tool/response localization is incomplete (#6990, #6548).

**Satisfaction signals:**
- The rapid closure of #6147 and #5650 shows maintainers are responsive to provider bugs.
- The community is actively contributing: new authors (NiuBlibing, rarean, phildetof) opened issues today, and the Slack thread context backfill PR (#6428) has been in active discussion since May 6.

## Backlog Watch

**Issues needing maintainer attention:**
1. **#5570** — `Faster SQLite memory vector search` (Opened: 2026-04-09, Updated: 2026-05-28). Status: `stale, blocked, needs-author-action`. The author has not provided requested clarification for 7 weeks. This is a significant performance enhancement that could unblock users with large memory backends, but it is stalled.
2. **#5470** — `Multiple issues when running safely` (Opened: 2026-04-07, Updated: 2026-05-28). Status: `stale, blocked`. A comprehensive bug report with no reproducer. Labeled `r:needs-repro` — maintainers appear to be waiting for a reproducible test case.
3. **#5187** — `feat(ci): add arm64 docker target` (Opened: 2026-04-02, Updated: 2026-05-28). Status: `needs-author-action` but has no CI pipeline contributions from the author for nearly 2 months. ARM64 Docker support is a common request; this PR is at risk of going stale.
4. **#5450** — `fix(tools): add ipv6 support and use reqwest.url` (Opened: 2026-04-07, Updated: 2026-05-28). Status: `needs-author-action`. Another long-open PR awaiting author response. IPv6 support is increasingly important for enterprise deployments.

**PRs needing maintainer feedback:**
- **#6428** — `feat(channels/slack): backfill thread context on first agent encounter`. Open since May 6, still awaiting maintainer review. This is a high-value Slack UX improvement.
- **#6389** — `feat(channels): per-recipient reply pacing across 9 channels`. Open since May 5, labeled `needs-author-action`. A well-architected feature that could prevent rate-limit abuse across all major channels.

---

*Generated from ZeroClaw GitHub data (github.com/zeroclaw-labs/zeroclaw) as of 2026-05-28 23:59 UTC.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*