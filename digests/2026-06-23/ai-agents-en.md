# OpenClaw Ecosystem Digest 2026-06-23

> Issues: 265 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-23 00:28 UTC

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

# OpenClaw Project Digest — 2026-06-23

## Today's Overview

OpenClaw exhibits **high-velocity development** with 265 issues and 500 PRs updated in the last 24 hours. The project is in an intense maintenance phase following the v2026.6.10-beta.2 release, with 78 PRs merged/closed and 422 still open. Activity is dominated by **session-state and message-loss regressions** (multiple P0/P1 reports), a critical **gateway memory leak**, and ongoing work on the **core SQLite migration** (Path 3 seam-adoption). Community engagement is strong, with Chinese-language feature requests and bug reports indicating a growing international user base. The maintainer team is actively triaging but several high-severity items remain blocked on product decisions.

---

## Releases

### v2026.6.10-beta.2 (released 2026-06-22)

**Highlights:**
- **Automatic fast mode for talks:** OpenClaw now enables fast mode for short conversational turns, reverting to normal mode for longer runs with bounded fallback and delivery behavior. (PR #85104) — Thanks @alexph-dev and @vincentkoc.
- **More reliable model routing:** Improvements to the Zai provider routing path (continued from prior beta).

**No breaking changes or migration notes documented.**

---

## Project Progress

### Merged/Closed PRs Today (78 total): Key Highlights

| PR | Description | Author |
|----|-------------|--------|
| [#95570](https://github.com/openclaw/openclaw/pull/95570) | **fix(cli):** Resolve trajectory export stores consistently — fixes session export missing data | @youngting520 |
| [#95765](https://github.com/openclaw/openclaw/issues/95765) | **bug(onboard):** External provider plugin install loops and skips selected auth flow (closed, fix merged) | @snowzlmbot |
| [#95248](https://github.com/openclaw/openclaw/issues/95248) | **release_lane no-op fix:** Stuck Telegram inbound events now recoverable without gateway restart (closed) | @kriegerbangerz-ship-it |
| [#93375](https://github.com/openclaw/openclaw/issues/93375) | **Telegram crash loop fix:** Silent crash loop after network timeout — health monitor could not recover (closed) | @Yachiyo1680 |
| [#92141](https://github.com/openclaw/openclaw/issues/92141) | **WebChat/Codex node exposure:** Windows node now exposes host=node exec in Codex sessions (closed) | @JPKay-AI |
| [#93041](https://github.com/openclaw/openclaw/issues/93041) | **Codex usage UI regression:** Usage/limit UI restored in Control UI Chat (closed) | @jazzroutine |
| [#92302](https://github.com/openclaw/openclaw/issues/92302) | **Windows QMD path fix:** Memory backend now functional on Windows (closed) | @Ardooken |
| [#78396](https://github.com/openclaw/openclaw/issues/78396) | **E2EE state destruction fix:** `--force-reset-cross-signing` no longer double-fires bootstrap (closed) | @jteddy |
| [#65355](https://github.com/openclaw/openclaw/issues/65355) | **Gateway probe false-negative fix:** Remote configRemote targets no longer capped at 1500ms (closed) | @gozzbb2 |
| [#56979](https://github.com/openclaw/openclaw/issues/56979) | **Auth token expiry logging fix:** Excessive fallback logs when token expires — reduced (closed) | @yanan1991 |

### Notable Open PRs with Forward Progress:
- **#95697** (Open, P2, size:XL): Reduces hot-path linear scans and redundant I/O across transcript, stream, media, and memory paths — impactful performance improvement from @vincentkoc.
- **#95722** (Open, size:S): Normalizes provider keys during model config merge to prevent duplicate provider entries — fixes a subtle config corruption bug.
- **#95883** (Open, size:S): Denies same-provider cross-context message sends by default, with explicit opt-in — important security hardening.
- **#93187** (Open, P2): Fixes dreaming corpus dominated by archive transcripts (67%+) and propagates cron parentage to subagents — significant quality-of-life fix for heavy cron users.

---

## Community Hot Topics

### Most Active Issues

| Issue | Title | Comments | Reactions | Summary |
|-------|-------|----------|-----------|---------|
| [#88838](https://github.com/openclaw/openclaw/issues/88838) | Track core session/transcript SQLite migration via accessor seam | **34** | 1 👍 | Path 3 seam-adoption nearly complete; remaining work in transcript/plugin-adjacent identity tail and SQLite foundation |
| [#88312](https://github.com/openclaw/openclaw/issues/88312) | [Regression] Codex app-server turn-completion stall | **17** | 4 👍 | Multi-tool agent turns fail with "stopped before confirming turn was complete" in 2026.5.27+; regression of #84076 |
| [#86538](https://github.com/openclaw/openclaw/issues/86538) | Session write-lock timeouts block subagent delivery lanes | **13** | 1 👍 | JSONL write-lock timeouts cascade into delivery failures without diagnostics |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | **Critical: Gateway Memory Leak** (P0) | **13** | 1 👍 | RSS grows from 350MB to 15.5GB over 2-3 days → OOM crashes → repeated restart cycles |
| [#92201](https://github.com/openclaw/openclaw/issues/92201) | Thinking signatures invalid on replay (Anthropic) | **12** | 1 👍 | Slack plugin embedded runner persists invalid thinking blocks; recovery wrapper never fires |
| [#90370](https://github.com/openclaw/openclaw/issues/90370) | [Feature] 支持PostgreSQL替代SQLite (Chinese) | **11** | 2 👍 | Strong demand for PostgreSQL support as alternative to hardcoded SQLite |
| [#88657](https://github.com/openclaw/openclaw/issues/88657) | DeepSeek V4 Flash incomplete turn (2026.5.27/28) | **8** | 1 👍 | Model regression: DeepSeek via OpenRouter produces payloads=0, tools=2, replaySafe=no |
| [#91363](https://github.com/openclaw/openclaw/issues/91363) | Isolated cron "LLM request failed" consistently (P1) | **7** | 4 👍 | Cron jobs never reach provider; usage.input=0; manual `cron run` succeeds |
| [#95495](https://github.com/openclaw/openclaw/issues/95495) | 2026.6.9 silently relocates memory store (no migration) | **7** | 1 👍 | Upgrade forces full re-embed of 1499 files with zero warning |
| [#95623](https://github.com/openclaw/openclaw/issues/95623) | tool_use.id sanitizer misses OpenAI-responses composite id | **7** | 1 👍 | Cross-provider failover → `|` in composite id causes Anthropic 400 error, bricking session |

### Underlying Needs Analysis:
1. **Session-state integrity is the #1 pain point** — 6 of the top 10 issues involve `impact:session-state` or `impact:message-loss`. Users need **guaranteed delivery and state recovery** across provider failovers, cron jobs, and subagent spawns.
2. **Provider-specific regressions** are eroding trust — DeepSeek, Anthropic, OpenAI, and Bedrock all have active regression reports. The community needs **better regression testing across all supported providers**.
3. **The PostgreSQL feature request** (11 comments, 2 👍) signals that **enterprise users** are hitting SQLite's concurrency limits. This is a clear roadmap signal.

---

## Bugs & Stability

### Critical (P0)
| Issue | Description | Fix PR Exists? |
|-------|-------------|----------------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | **Gateway Memory Leak** — RSS 350MB→15.5GB over days, repeated OOM crashes, `launchd-handoff` restart cycles | ❌ No fix PR yet |
| [#95623](https://github.com/openclaw/openclaw/issues/95623) | **tool_use.id sanitizer misses OpenAI-responses composite id** — cross-provider failover → `\|` in composite id → Anthropic 400 → session bricked | ❌ No fix PR yet |

### High Severity (P1)
| Issue | Description | Fix PR Exists? |
|-------|-------------|----------------|
| [#88312](https://github.com/openclaw/openclaw/issues/88312) | Codex app-server turn-completion stall (regression of #84076) | ❌ Needs product decision |
| [#86538](https://github.com/openclaw/openclaw/issues/86538) | Session write-lock timeouts block subagent lanes | ❌ Linked PR open |
| [#92201](https://github.com/openclaw/openclaw/issues/92201) | Anthropic thinking signatures invalid on replay (Slack plugin) | ❌ Needs product decision |
| [#91363](https://github.com/openclaw/openclaw/issues/91363) | Isolated cron "LLM request failed" — never reaches provider | ❌ Needs live repro |
| [#95495](https://github.com/openclaw/openclaw/issues/95495) | 2026.6.9 silently relocates memory store, forces full re-embed | ❌ Linked PR open |
| [#93858](https://github.com/openclaw/openclaw/issues/93858) | Foreground fence deferral to prevent interleaving (lazy fence) | ❌ Linked PR open |
| [#89095](https://github.com/openclaw/openclaw/issues/89095) | Sub-agent run timeout notifies neither session nor user | ❌ Needs maintainer review |
| [#95833](https://github.com/openclaw/openclaw/issues/95833) | Subagent abort-settle fails to release .jsonl.lock, permanently breaks session | ❌ No fix PR yet |
| [#85743](https://github.com/openclaw/openclaw/issues/85743) | pendingFinalDelivery heartbeat replay loops forever — no TTL | ❌ Linked PR open |
| [#94251](https://github.com/openclaw/openclaw/issues/94251) | Ollama remote provider streaming not consumed — model_call:started never progresses | ❌ Needs live repro |
| [#95612](https://github.com/openclaw/openclaw/issues/95612) | cli-backend agent returns 401 authentication_failed via Anthropic while shell works | ❌ Needs live repro |

### New Today (2026-06-22)
| Issue | Severity | Description |
|-------|----------|-------------|
| [#95833](https://github.com/openclaw/openclaw/issues/95833) | **P1** | Subagent abort-settle fails to release .jsonl.lock, permanently breaks session |
| [#95760](https://github.com/openclaw/openclaw/issues/95760) | **Bug** | NVIDIA Build provider (GLM 5.1, MiniMax M2.7): stream cuts mid-tool-calls, session enters zombie state |
| [#95489](https://github.com/openclaw/openclaw/issues/95489) | **P1** | claude-cli out-of-credits error bypasses model fallback chain — error text delivered as final response |

### Important Regression Alerts
- **v2026.6.9 → memory store relocation** (#95495): Full re-embed forced without upgrade warning.
- **v2026.6.8 → /usage no longer works in Telegram** (#93905): Usage footer disappeared.
- **v2026.5.27 → Codex turn-completion stall** (#88312): Regression of previously fixed #84076.
- **v2026.5.27/28 → DeepSeek V4 Flash incomplete turns** (#88657): Payloads=0 despite tools=2.

---

## Feature Requests & Roadmap Signals

### Top Community Requests

| Issue | Request | Comments | 👍 | Likely Next Version? |
|-------|---------|----------|----|---------------------|
| [#90370](https://github.com/openclaw/openclaw/issues/90370) | **PostgreSQL as alternative to SQLite** (Chinese) | 11 | 2 | Possible — multiple users hitting SQLite limits |
| [#8299](https://github.com/openclaw/openclaw/issues/8299) | Config option to suppress sub-agent announce | 7 | 1 | Likely — clean UX gap |
| [#54794](https://github.com/openclaw/openclaw/issues/54794) | **Telegram Inline Query Support** (@botname in any chat) | 6 | 2 | Possible — Telegram power-user need |
| [#43564](https://github.com/openclaw/openclaw/issues/43564) | ACP Session Skill Context Injection | 4 | 1 | Low — complex architectural change |
| [#53638](https://github.com/openclaw/openclaw/issues/53638) | Per-channel/per-group model override in config | 6 | 2 | Likely — highly requested, already has linked PR |
| [#95724](https://github.com/openclaw/openclaw/issues/95724) | Index memory by source directory, not by agent | 5 | 0 | Possible — eliminates duplicate vector stores |
| [#92516](https://github.com/openclaw/openclaw/issues/92516) | Self-hosted channel plugin trust model | 6 | 1 | Likely — blocks containerized deploys |
| [#93884](https://github.com/openclaw/openclaw/issues/93884) | Document gateway host agent runtime boundary | 5 | 1 | Already in progress — security boundary doc |

### Roadmap Predictions
1. **Per-channel model overrides** (#53638) — Multiple linked PRs open, strong demand. Shipping soon.
2. **PostgreSQL backend** (#90370) — Growing enterprise demand; likely a v2026.7 milestone candidate.
3. **Self-hosted channel plugin trust** (#92516) — Blocking containerized deployments; high priority for ops teams.
4. **Memory deduplication by workspace** (#95724) — Low-hanging fruit with significant operational benefit.

---

## User Feedback Summary

### Pain Points
1. **Session reliability is inconsistent**: "Something went wrong" errors (e.g., #95833, #86538) with no diagnostics, forcing gateway restarts.
2. **Upgrade regressions without warnings**: Memory store relocation (#95495) forced 1499-file re-embed — "zero upgrade-time warning" is a recurring complaint pattern.
3. **Provider failover is broken**: DeepSeek (#88657), Anthropic (#95623), and Ollama (#94251) all have active reports where fallback chains don't fire or produce worse errors.
4. **Cron reliability degraded**: "LLM request failed" on isolated cron (#91363) with usage.input=0 — model requests never reach provider.
5. **Chinese-language users' needs**: Growing Chinese community requests PostgreSQL support (#90370) and macOS TCC permission bugs (#94147).

### Satisfactions
- **"It works without issues in 2026.5.26"** — Users frequently reference prior versions as baseline; v2026.5.26 is the "golden build" against which regressions are measured.
- **External plugin ecosystem expanding** — PRs adding Signal reply quotes (#95718), native IRC markdown (#55901), and iOS push sandbox (#95893) show active community plugin development.
- **Performance improvements welcomed** — PR #95697 (reducing hot-path linear scans) received maintainer interest; users appreciate latency-focused work.

---

## Backlog Watch

### Issues Needing Maintainer Attention (Long-Unanswered / Stale)

| Issue | Age | Type | Problem |
|-------|-----|------|---------|
| [#54794](https://github.com/openclaw/openclaw/issues/54794) | 88 days (since Mar 26) | Feature | Telegram Inline Query — marked `stale`, @M-Lietz awaiting maintainer decision |
| [#43564](https://github.com/openclaw/openclaw/issues/43564) | 102 days (since Mar 12) | Feature | ACP Session Skill Context Injection — `needs-product-decision` |
| [#8299](https://github.com/openclaw/openclaw/issues/8299) | 140 days (since Feb 3) | Feature | Config option to suppress sub-agent announce — `needs-product-decision` |
| [ PR #68112](https://github.com/openclaw/openclaw/pull/68112) | 67 days (since Apr 17) | Fix | Prevent cron scheduler death on startup catch-up failure — `needs-real-behavior-proof` |
| [ PR #58373](https://github.com/openclaw/openclaw/pull/58373) | 84 days (since Mar 31) | Fix | Bootstrap non-main models.json — P1, `waiting on author` since April |

### Critical Items Stuck on Product Decision
- **#86538** (P1, session write-lock timeouts) — `needs-product-decision`
- **#88312** (P1, Codex turn-completion stall) — `needs-product-decision`
- **#85623** (P1, cross-provider tool_use.id sanitizer) — `needs-product-decision`
- **#87996** (P1, Vertex beta INVALID_ARGUMENT wedge) — `needs-product-decision`

### Security Items Awaiting Review
- **#92516** (P1) — Self-hosted channel plugin trust model — `needs-security-review`
- **#92522** (P2) — Secrets audit misses LaunchAgent plaintext — `needs-security-review`
- **#93807** (P2) — web_fetch NO_PROXY ignored — `needs-security-review`
- **#94147** (P2) — macOS CLLocationManager TCC permission spam — `needs-security-review`
- **#87058** (P1) — Android node advertises zero commands — `needs-security-review`

---

*Generated from OpenClaw GitHub data as of 2026-06-23. Data sources: Issues, PRs, and Releases with activity in the last 24 hours.*

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the provided digests.

---

### Cross-Project Comparison Report: Personal AI Agent Ecosystem

**Date:** 2026-06-23
**Analyst:** Senior Analyst, AI Agent & Personal AI Assistant OSS Ecosystem

---

### 1. Ecosystem Overview

The open-source personal AI agent ecosystem is experiencing a period of intense, polarized activity. A small number of "core" projects, primarily **OpenClaw** and its immediate derivatives, are driving the majority of development velocity, while many smaller or secondary projects see minimal to no daily activity. The dominant theme is a struggle between rapid feature iteration and the resulting instability, as evidenced by the high volume of P0/P1 regressions across the most active projects. There is a clear and growing trend toward enterprise-ready features (PostgreSQL support, Wasm plugin sandboxing, supply-chain security), but the core user base remains focused on reliability, session-state integrity, and provider interoperability. A significant portion of the ecosystem is still grappling with fundamental architectural challenges, such as context window management and graceful session recovery.

### 2. Activity Comparison

| Project | Active Issues (24h) | Active PRs (24h) | Release Status | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 265 | 500 | Recent beta (v2026.6.10) | **🔴 High Intensity / Stressed** |
| **IronClaw** | 18 | 23 | No release today | **🟡 High Intensity / Bleeding Edge** |
| **ZeroClaw** | 50 | 50 | No release today | **🟡 High Intensity / Transforming** |
| **CoPaw** | 23 | 50 | v1.1.12.post1 | **🟡 High Activity / Stabilizing** |
| **Hermes Agent** | 50 | 50 | v0.17.0 | **🟡 High Activity / Responsive** |
| **PicoClaw** | 2 | 44 | Nightly Build | **🟢 High Velocity / Rapid Iteration** |
| **NanoBot** | 4 | 27 | Recent (v0.2.2) | **🟢 Healthy / Focused** |
| **NanoClaw** | 0 | 6 | No release today | **🟢 Moderate / Consolidating** |
| **NullClaw** | 0 | 2 | No release today | **🟢 Low Activity / Stable** |
| **LobsterAI** | 5 (Stale) | 8 (Stale) | No release today | **🟡 Stale Backlog / Moderate Dev** |
| **TinyClaw, Moltis, ZeptoClaw** | 0 | 0 | No activity | **⚪ Dormant / No Activity** |

**Key Observations:**
- **OpenClaw** is by far the most active but is struggling with a block of P0/P1 regressions and a massive PR backlog.
- **IronClaw** and **ZeroClaw** show high-intensity focus on major architectural rewrites (Reborn runtime, Wasm-first plugin system), accepting temporary instability for long-term gains.
- **PicoClaw** and **NanoBot** demonstrate a healthier balance of high velocity and stable, merged fixes.
- A significant number of projects (NullClaw, TinyClaw, etc.) are effectively dormant, suggesting consolidation around a few key codebases.

### 3. OpenClaw's Position

- **Advantages vs. Peers:** OpenClaw remains the core reference implementation and has the largest community, contributor base, and feature surface. Its primary advantage is **ubiquity and integration breadth**, supporting the widest array of providers, channels, and plugins. The rapid merging of community PRs, even for Chinese-language features, demonstrates a strong culture of contribution.

- **Technical Approach Differences:** Unlike **IronClaw**'s ground-up "Reborn" rewrite or **ZeroClaw**'s aggressive Wasm-first pivot, OpenClaw's strategy is **evolutionary**. The "Path 3 seam-adoption" for SQLite migration and the session-state fix focus are attempts to refactor the core while maintaining backward compatibility. This contrasts with **Hermes Agent**, which appears more tightly integrated with specific platforms (desktop app, Telegram).

- **Community Size Comparison:** OpenClaw's raw activity numbers (265 issues, 500 PRs) dwarf all other projects. This is both a strength (massive talent pool, rapid bug identification) and a weakness (maintainer bottleneck, high noise-to-signal ratio). **PicoClaw** and **NanoBot** have smaller but more focused communities where PRs are reviewed and merged quickly. OpenClaw's community is also characterized by a strong Chinese-language contingent, a demographic not as visible in other projects.

### 4. Shared Technical Focus Areas

The following needs are emerging across multiple projects, representing clear requirements for the ecosystem:

| Technical Focus Area | Affected Projects | Specific Need(s) |
| :--- | :--- | :--- |
| **Session-State Durability** | OpenClaw, Hermes Agent, IronClaw, CoPaw, NanoBot | Preventing data loss on crash/restart, fixing tool-loop state persistence, improving `.lock` file handling. |
| **Provider Reliability & Failover** | OpenClaw, Hermes Agent, CoPaw, ZeroClaw | Fixing broken provider-specific features (Anthropic thinking, DeepSeek streaming), ensuring fallback chains work correctly, avoiding session-bricking errors from cross-provider issues. |
| **Enterprise Backend Support** | OpenClaw, IronClaw, ZeroClaw | Demand for PostgreSQL as an alternative to SQLite, driven by concurrency and data integrity requirements. |
| **Plugin/Security Sandboxing** | ZeroClaw, OpenClaw (via `tool_use` PR), Hermes Agent | Need for stricter plugin capability isolation, Wasm-based sandboxing, preventing token/session leaks across profiles. |
| **WebSocket / Remote Agent Mode** | PicoClaw, ZeroClaw | Enabling agents to run as remote, network-accessible services via WebSocket or other protocols. |
| **Mobile & Touch UX** | CoPaw, NanoBot, Hermes Agent | Community-driven PRs for mobile responsiveness, PWA support, and touch-friendly interfaces indicate a significant UX gap. |

### 5. Differentiation Analysis

| Dimension | OpenClaw | IronClaw | ZeroClaw | Hermes Agent | PicoClaw/CoPaw |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Target User** | General developer / power user | Research & development teams | Security-conscious / ops-heavy users | Desktop app users (macOS, Windows) | Embedded / mobile / narrow AI (Qwen-focused) |
| **Key Feature** | Breadth of agents & channels | Advanced agent runtime (Reborn) | Wasm sandbox & supply chain security | Tight desktop & Telegram integration | Lightweight, single-provider focus |
| **Architectural Trend** | Evolution via seams & refactoring | Ground-up rewrite (Reborn) | Wasm-first, eliminate Node.js | Platform-specific optimization | Rapid iteration & community plugin fixes |
| **Biggest Risk** | Maintainer burnout & regression creep | Instability from rapid `main` HEAD | Architectural churn & feature latency | Platform lock-in & niche appeal | Limited scope & stagnation |

### 6. Community Momentum & Maturity

- **Tier 1: Rapid & Unstable Iteration:** **OpenClaw** and **IronClaw** are in a constant state of high-risk, high-reward development. They are the source of most innovation but also most breakage. These are not projects for users requiring a "set it and forget it" experience.

- **Tier 2: Rapid & Stable Iteration:** **PicoClaw** and **NanoBot** demonstrate the ideal balance for most users. They are actively shipping features and fixes with a high merge-to-PR ratio and are not suffering from severe regressions. **Hermes Agent** fits here as well, with responsive maintainers closing 17 PRs in a day.

- **Tier 3: Plateau & Transformation:** **ZeroClaw** has high activity but it is currently focused on RFCs and architectural design, not user-facing features. It is in a necessary but risky transformation phase. **CoPaw** is stabilizing after a feature push, handling a surge of community bug fixes.

- **Tier 4: Mature & Low Activity:** **NullClaw** and **NanoClaw** appear stable and are receiving targeted, necessary fixes. This is not a negative sign but indicates a project that is feature-complete for its scope. **LobsterAI** is a concern, with a stale backlog suggesting a potential abandonment of community-maintained features.

- **Tier 5: Dormant:** **TinyClaw**, **Moltis**, and **ZeptoClaw** show zero activity, indicating they are likely not viable for new adopters.

### 7. Trend Signals

1.  **The "SQLite Ceiling" is Here:** The repeated demand for PostgreSQL support (OpenClaw, IronClaw) signals that the most popular projects have hit the concurrency and durability limits of SQLite for production-grade agent deployments. This is a definitive market signal.

2.  **Session-State is the New Frontier:** As agents become more autonomous (cron, sub-agents), the reliability of their internal state has become the #1 pain point. The ecosystem is moving from "can it talk?" to "can it remember what it was doing after a crash?".

3.  **Wasm is the Future of Plugin Security:** **ZeroClaw**'s RFC to make Wasm the default plugin runtime is a leading indicator. Expect other major projects to follow suit to solve the security and portability problems of native or interpreted plugins.

4.  **From Chat to Platform:** The focus on enterprise backends, channel plugins (Mattermost, DingTalk), and remote agent modes shows that agents are maturing from simple chat bots into platform-level applications that require proper auth, logging, and observability.

5.  **The Great Consolidation:** A significant portion of the ecosystem (TinyClaw, Moltis, ZeptoClaw, LobsterAI) is effectively dead or on life support. Developer attention is coalescing around a few dominant codebases, a natural and necessary market evolution.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-23

## 1. Today's Overview
Activity remains high entering the week, with 27 pull requests updated in the last 24 hours and 4 issues touched. The team maintains a healthy close ratio: 12 of the 27 PRs were merged or closed (44%), including a `v0.2.2` release preparation and several WebUI stability fixes. Two new open issues were filed (PWA support, Telegram rich messages), while the community's broader attention centers on platform channel expansion (Mattermost, DingTalk) and user onboarding UX. No new releases were published today; the `v0.2.2` release PR was merged and published on 2026-06-22.

## 2. Releases
No new releases were cut today. The most recent release, `v0.2.2`, was prepared and merged on 2026-06-22 (PR [#4445](https://github.com/HKUDS/nanobot/pull/4445)). That release includes WebUI fork-replay fixes, gateway shutdown stabilization, and bumped default context window to 200K tokens. No breaking changes or migration notes have been announced.

## 3. Project Progress — Merged/Closed PRs (12 today)
The following key changes were merged or closed today:

- **Gateway shutdown & WebUI stability bundle** (PR [#4454](https://github.com/HKUDS/nanobot/pull/4454)) — Stabilized foreground gateway `SIGINT`/`SIGTERM` handling and fixed WebUI fork replay during history refresh.
- **WebUI sent-turn anchoring** (PR [#4451](https://github.com/HKUDS/nanobot/pull/4451)) — Routes explicit sends through a latest-user-prompt anchor, prevents short fresh turns from flex-aligning to the bottom.
- **WebUI active-turn follow** (PR [#4453](https://github.com/HKUDS/nanobot/pull/4453)) — Keeps streaming output visible without overriding user manual scroll.
- **Cancelled channel task fix** (PR [#4456](https://github.com/HKUDS/nanobot/pull/4456)) — Tolerates cancelled WebSocket channel tasks during shutdown on Python 3.11+.
- **MCP transport cleanup from agent task** (PR [#4450](https://github.com/HKUDS/nanobot/pull/4450)) — Closes MCP stdio transports from the agent loop task, avoiding AnyIO cancel-scope errors.
- **Default context window → 200K** (PR [#4448](https://github.com/HKUDS/nanobot/pull/4448)) — Upgraded default from 65K to 200K tokens across agent defaults and model presets.
- **Release prep v0.2.2** (PR [#4445](https://github.com/HKUDS/nanobot/pull/4445)) — Version bump, README update, import-order cleanup.
- **MCP `enabledTools` enforcement** (PR [#4452](https://github.com/HKUDS/nanobot/pull/4452)) — Applies tool allowlists to MCP resources and prompts, not just tools.
- **WebUI fork reply preservation** (PR [#4455](https://github.com/HKUDS/nanobot/pull/4455)) — Prevents already-rendered assistant replies from disappearing on history refresh.

## 4. Community Hot Topics
- **Mattermost channel support** (PR [#4459](https://github.com/HKUDS/nanobot/pull/4459)) — A new, feature-rich integration for Mattermost workspaces with WebSocket auto-reconnect and streaming responses. This is among the most substantial channel additions in weeks, indicating community demand for enterprise collaboration platforms.
- **Duplicate `tool_use` ID guard** (PR [#4443](https://github.com/HKUDS/nanobot/pull/4443)) — Addresses a permanent session bricking issue when streaming Anthropic-family providers yield duplicate tool blocks. High-severity correctness fix with 9 comments across related tickets.
- **MCP `enabledTools` enforcement for resources/prompts** (PR [#4436](https://github.com/HKUDS/nanobot/pull/4436) + PR [#4452](https://github.com/HKUDS/nanobot/pull/4452)) — Two overlapping PRs tackling the same security-boundary issue (allowlist leakage). Community attention suggests users are deploying multiple MCP servers and need strict capability isolation.
- **User-friendly wizard** (Issue [#4376](https://github.com/HKUDS/nanobot/issues/4376), now closed) — Received 1 👍 and a single comment, yet the underlying problem (overly technical onboarding for non-technical users) resonated and was resolved in the same ticket.

## 5. Bugs & Stability
**Medium severity:**
- **Duplicate `tool_use` IDs from streaming providers** (PR [#4443](https://github.com/HKUDS/nanobot/pull/4443)) — Permanently bricked sessions with HTTP 400. A guard PR is open and active; fix still under review.

**Low severity (fixed today):**
- **Foreground gateway crash on shutdown** (PR [#4454](https://github.com/HKUDS/nanobot/pull/4454)) — `SIGINT`/`SIGTERM` handling previously relied on fragile `asyncio.run()` teardown. Fix merged.
- **Cancelled WebSocket tasks causing shutdown panics** (PR [#4456](https://github.com/HKUDS/nanobot/pull/4456)) — `asyncio.CancelledError` not caught on Python 3.11. Fix merged.
- **MCP `streamable_http` reconnection task-scope error** (PR [#4441](https://github.com/HKUDS/nanobot/pull/4441)) — `RuntimeError` on reconnect failure. Fix still open.
- **WebUI fork reply disappearance** (PR [#4455](https://github.com/HKUDS/nanobot/pull/4455)) — Race condition on history refresh. Fix merged.
- **Pairing store sender ID type coercion** (PR [#4433](https://github.com/HKUDS/nanobot/pull/4433)) — Silent denial of pairing requests due to int vs. str mismatch. Fix still open.

## 6. Feature Requests & Roadmap Signals
- **Telegram Bot API 10.1 rich messages** (Issue [#4413](https://github.com/HKUDS/nanobot/issues/4413), open) — User requests standard markdown-to-Telegram conversion for the newly supported rich message format. Likely to land if Telegram support is prioritized.
- **PWA mobile home-screen installation** (Issue [#4457](https://github.com/HKUDS/nanobot/pull/4458), open) — WebUI enhancement with manifest and service worker. PR #4458 already submitted. High chance of inclusion in next release.
- **Unified daemon gateway semantic layer** (Issue [#1461](https://github.com/HKUDS/nanobot/issues/1461), now closed) — Grand architecture vision for running gateway as a background daemon with unified control. Closed without merge; may inform future roadmap.
- **Subagent model presets** (PR [#4291](https://github.com/HKUDS/nanobot/pull/4291), open since June 11) — Allows `spawn` to use configurable LLM presets. Requires maintainer review; could be a v0.3 candidate.
- **DingTalk channel enhancements** (PR [#4446](https://github.com/HKUDS/nanobot/pull/4446), open) — Adds `disable_private_chat` flag and sender mention in group replies. Ready for review; moderate inclusion probability.

## 7. User Feedback Summary
- **New user onboarding friction** remains the single most upvoted pain point (Issue [#4376](https://github.com/HKUDS/nanobot/issues/4376), 1 👍 closed). While fixed for wizard mode, users still report that `nanobot onboard --wizard` requires too much prior technical knowledge.
- **Context window frustration** was addressed by yesterday's default increase to 200K (PR [#4448](https://github.com/HKUDS/nanobot/pull/4448)), reflecting a common complaint that 65K was insufficient for long agent conversations.
- **Enterprise channel demand** is strong — the Mattermost PR garnered immediate interest, and the DingTalk enhancement suggests Asian-market users are actively deploying NanoBot in workplace group chats.
- **Stability improvements** (gateway shutdown, MCP reconnection, WebUI scroll) indicate users are running NanoBot in production or long-lived agent sessions where reliability matters.

## 8. Backlog Watch
- **Subagent model presets (PR [#4291](https://github.com/HKUDS/nanobot/pull/4291))** — Open since June 11, no maintainer comments. This feature enables multi-model spawn trees, an important capability for complex agent hierarchies. Needs review or explicit deferral.
- **Node 24 bump (PR [#4460](https://github.com/HKUDS/nanobot/pull/4460))** — Created today, already has 2 open items. Likely needed for CI/CD compatibility but no movement yet.
- **Search history tool (PR [#4439](https://github.com/HKUDS/nanobot/pull/4439))** — Open since June 21, adds memory recall capability. No maintainer interaction. Potentially significant for long-running agents.
- **MCP `enabledTools` resource/prompt enforcement (PR [#4436](https://github.com/HKUDS/nanobot/pull/4436))** — Open since June 21, has a competing PR (#4452) that was merged today. Likely superseded.

**Observation:** The backlog contains several high-value features (subagent presets, search history, PWA) with no maintainer comments. This may signal maintainer bandwidth constraints, as the team is prioritizing bug fixes and release-preparation work. Community contributors should expect longer review cycles for non-critical enhancements.

---
*Generated from GitHub data as of 2026-06-23 00:00 UTC*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-23

## Today's Overview

Hermes Agent is experiencing a sustained high level of community activity, with 50 issues and 50 PRs updated in the last 24 hours. The project remains in a stable release cadence with no new versions shipped today. Bug reports and fixes dominate the conversation, with several critical (P1) and high-priority (P2) items around state corruption, session durability, and platform integration regressions. The community is actively contributing PRs addressing Telegram, Slack, and MCP issues, while maintainers have merged 17 PRs today, indicating responsive stewardship.

## Releases

No new releases today. The latest available version remains v0.17.0 (implied by PR references and desktop package version alignment).

## Project Progress

**17 PRs were merged or closed today**, representing meaningful progress across multiple subsystems:

- **Agent Core**: `#51088` (ruslanvasylev) fixes session persistence gaps where assistant tool-call turns and compression results could be lost on restart. `#51051` (kshitijk4poor) addresses a $7.73 spend incident via fall-closed cron job provider pinning.
- **Plugins & Platform**: `#44335` (erosika) brings Honcho OAuth connect with desktop/CLI flows and token refresh. `#50469` (libre-7) unblocks `hermes update` for git/pip installs inside containers.
- **Testing**: `#51104` (tdesravi-art) adds regression coverage for split web backend routing (SearXNG + Firecrawl).
- **CLI/Desktop**: PRs addressing Warp terminal flicker (`#51095`), API key delete env-seeded auth cleanup (`#51086`), and Slack timestamp cache eviction (`#51097`) were merged.
- **Telegram**: `#51085` (r266-tech) extends stale DM topic binding pruning to the media/anchor-retry fallback path.

## Community Hot Topics

1. **`#30636` — state.db corruption from SIGTERM during launchd shutdown** (4 comments, 0 👍)
   - *Issue*: Critical data loss under high load on macOS. Reproducible cause identified in logs. Maintainers are actively investigating.
   - *Link*: [Issue #30636](https://github.com/NousResearch/hermes-agent/issues/30636)

2. **`#46515` — Telegram rich message fallback to MarkdownV2** (1 comment, 2 👍)
   - *Issue*: Rich preview renders correctly during streaming, but the final persistent message falls back to plain MarkdownV2. Community upvoted, indicating broad impact.
   - *Link*: [Issue #46515](https://github.com/NousResearch/hermes-agent/issues/46515)

3. **`#23370` — Anthropic provider sends `Bearer None` to /chat/completions** (4 comments, closed)
   - *Issue*: OAuth credential resolution bug when `model.provider: anthropic` is set. Resolved and closed, but serves as a cautionary tale for OAuth configuration.
   - *Link*: [Issue #23370](https://github.com/NousResearch/hermes-agent/issues/23370)

## Bugs & Stability

### Critical (P1)

- **`#30636` — state.db corruption from SIGTERM during launchd shutdown** (OPEN, 4 comments)
  - Repeated data corruption on macOS under high load. Root cause identified in logs. No fix PR yet.
  - *Link*: [Issue #30636](https://github.com/NousResearch/hermes-agent/issues/30636)

- **`#50090` — Windows bootstrap-installer kills Gateway without respawning** (CLOSED)
  - Telegram bot permanently dead after skill updates. Fix PR `#50469` merged.
  - *Link*: [Issue #50090](https://github.com/NousResearch/hermes-agent/issues/50090)

### High Priority (P2)

- **`#51089` — Session resume loses in-progress tool-loop or compression state** (OPEN, 1 comment)
  - Tool-call turns and tool results remain in memory until next response is persisted. Fix PR `#51088` merged today.
  - *Link*: [Issue #51089](https://github.com/NousResearch/hermes-agent/issues/51089)

- **`#51029` — Multiplexer leaks secondary profile's platform token** (OPEN, 1 comment)
  - Telegram token from default profile pollutes secondary profile adapters. No fix PR yet.
  - *Link*: [Issue #51029](https://github.com/NousResearch/hermes-agent/issues/51029)

- **`#51030` — Telegram same-token collision detection broken** (OPEN, 1 comment)
  - `_adapter_credential_fingerprint` fails to find token at `adapter.config.token`. No fix PR yet.
  - *Link*: [Issue #51030](https://github.com/NousResearch/hermes-agent/issues/51030)

- **`#38488` — MCP server permanently gives up after transient backend outage** (OPEN, 3 comments)
  - Streamable-HTTP MCP servers are permanently marked dead. Only recovery is full gateway restart. No fix PR yet.
  - *Link*: [Issue #38488](https://github.com/NousResearch/hermes-agent/issues/38488)

- **`#51053` — Image turns lose visual context on Codex app-server** (OPEN, 0 comments)
  - Screenshots attached but not persisted; agent drifts to unrelated context. No fix PR yet.
  - *Link*: [Issue #51053](https://github.com/NousResearch/hermes-agent/issues/51053)

- **`#51083` — Auxiliary vision sends unsupported temperature to OpenAI gpt-5.5** (OPEN, 0 comments)
  - Vision tools default temperature to 0.1, which OpenAI rejects. No fix PR yet.
  - *Link*: [Issue #51083](https://github.com/NousResearch/hermes-agent/issues/51083)

## Feature Requests & Roadmap Signals

1. **`#51069` — Support project-local `.mcp.json` MCP server configs** (OPEN, 1 comment)
   - Users want Hermes to read MCP servers from existing `.mcp.json` files instead of duplicating in `config.yaml`. Likely to land in v0.18.0.
   - *Link*: [Issue #51069](https://github.com/NousResearch/hermes-agent/issues/51069)

2. **`#50885` — Button to create/delete workspace folders remotely** (OPEN, 1 comment)
   - Desktop app users want remote workspace management without prompting the agent. A common quality-of-life request.
   - *Link*: [Issue #50885](https://github.com/NousResearch/hermes-agent/issues/50885)

3. **`#51040` — `/resume-last` slash command** (CLOSED, 1 comment)
   - Community proposed one-step session resume. Closed as feature request, likely under consideration.
   - *Link*: [Issue #51040](https://github.com/NousResearch/hermes-agent/issues/51040)

4. **`#48644` — Cross-profile subagent support in `delegate_task`** (OPEN PR, 0 comments)
   - Adds `profile` parameter to delegate tasks, enabling worker models on different hosts. Poised to address multiple bugs around multi-profile setups.
   - *Link*: [PR #48644](https://github.com/NousResearch/hermes-agent/pull/48644)

5. **`#51092` — Tool prioritization with weighted selection** (OPEN PR, 0 comments)
   - Community PR introducing weighted tool selection to resolve non-deterministic LLM tool choice. May appear in v0.18.0.
   - *Link*: [PR #51092](https://github.com/NousResearch/hermes-agent/pull/51092)

## User Feedback Summary

- **Pain Points**: Session persistence is the #1 pain point this week — tool-loop state loss (`#51089`), missing chat text after reopening (`#50713`), and compression state loss (`#51088` fix) all point to durability gaps.
- **Platform Regression**: Telegram users are frustrated by rich message formatting regressions (`#46515`), persistent typing indicators after cache eviction (`#50991`), and token collisions in multiplexed setups (`#51029`, `#51030`).
- **Configuration Friction**: Users report confusion when memory providers fail silently due to missing dependencies (`#51099`) and when delegation settings are overridden at runtime (`#50199`).
- **Satisfaction Signals**: The community is actively contributing PRs (10+ today) and upvoting bug reports, indicating strong engagement despite the bugs.

## Backlog Watch

1. **`#20866` — Qwen3.6-27B "System message must be at the beginning"** (OPEN since May 6, 4 comments)
   - Unresolved 400 error from auxiliary tasks using Qwen models. No PR activity.
   - *Link*: [Issue #20866](https://github.com/NousResearch/hermes-agent/issues/20866)

2. **`#42448` — Hermes Desktop OIDC login fails to trigger WebAuthn/Passkey** (OPEN since June 8, 3 comments)
   - Embedded login window doesn't support WebAuthn popups. No fix PR yet.
   - *Link*: [Issue #42448](https://github.com/NousResearch/hermes-agent/issues/42448)

3. **`#38053` — macOS launchd `hermes update` does not restart all profile gateways** (OPEN since June 3, 3 comments)
   - Multi-profile users must manually restart services after update. No fix PR yet.
   - *Link*: [Issue #38053](https://github.com/NousResearch/hermes-agent/issues/38053)

4. **`#44183` — Desktop session lost after sleep/wake — WS orphan reap too short** (OPEN since June 11, 2 comments)
   - 20-second reuse grace period insufficient; stale session IDs cause 404 errors. No fix PR yet.
   - *Link*: [Issue #44183](https://github.com/NousResearch/hermes-agent/issues/44183)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-23

## Today's Overview

PicoClaw shows **very high development activity** today with 44 PRs updated in the last 24 hours, including 34 merged or closed—suggesting a significant push toward the `v0.3.0` milestone. The project released a new nightly build (`v0.3.0-nightly.20260622.287853ab`), continuing its rapid iteration cycle. Only 2 open issues were updated, both relatively recent, indicating active triage with no backlog buildup. The project remains in a **healthy, high-velocity state** with strong contributor throughput and clear focus on both bug fixes and feature expansion.

---

## Releases

**New**: `v0.3.0-nightly.20260622.287853ab` — Nightly Build

- Automated nightly build, potentially unstable
- Full changelog between `v0.3.0` and `main`: https://github.com/sipeed/picoclaw/compare/v0.3.0...main
- No version bump beyond nightly; no migration notes provided

The lack of a stable release cadence (only nightlies since `v0.3.0`) suggests the team is prioritizing rapid feature integration over stabilization. Users relying on stable builds should pin to `v0.3.0`.

---

## Project Progress

**34 PRs merged/closed today**, spanning several key areas:

### Stability & Code Quality Fixes
- **#2906** — Fix message bus backpressure handling and health visibility (SiYue-ZO) — Bounded waiting on queue saturation, per-stream drop stats
- **#2907** — Fix JSONL store metadata drift after crash (SiYue-ZO) — Crash-consistency gap in memory store
- **#2913** — Fix JSONL session index hot-path cloning and TTL refresh semantics (SiYue-ZO) — Performance optimization on hot path
- **#2915** — Add CommonModels for MiMo provider (SiYue-ZO) — Vision-capable model defaults
- **#3053** — Add `ok` check for `LoadOrStore` type assertion in `lockStoreFile` (chengzhichao-xydt) — Panic fix
- **#3091** — Add `ok` check for `native_search` type assertion in OpenAI compat provider (chengzhichao-xydt) — Silent failure fix

### New Features
- **#3152** — Add installation instructions to picoclaw skills search (phoeagon) — UX enhancement
- **#3155** — Add `direct_reply` parameter with `SkipInboundTurn` support for spawn (v2up-32mb) — Async callback fix, resolves duplicate message issue #3094

### Dependencies
- **#3101** — Bump vite 8.0.13 → 8.0.16
- **#3105** — Bump eslint 10.2.1 → 10.4.1

> *Note: Several older PRs (#2906–#2915) were closed today but originated in May/early June—possibly re-reviewed or merged after CI fixes.*

---

## Community Hot Topics

### Most Active: Issue #3093 — SimpleX / Tox / Wire Gateway Request
- **Created**: 2026-06-10 | **Comments**: 3 | **👍**: 1
- **URL**: https://github.com/sipeed/picoclaw/issues/3093
- **Underlying Need**: User desires decentralized, privacy-preserving messaging integrations beyond standard LLM providers. This signals demand for **peer-to-peer communication channels** as agent interfaces, likely for autonomous or offline-capable use cases.

### Most Active Open PR: #3118 — Remote Pico WebSocket Mode
- **Created**: 2026-06-12 | **Updated**: 2026-06-22 | **Comments**: 0 but long-lived
- **URL**: https://github.com/sipeed/picoclaw/pull/3118
- **Analysis**: Adds `picoclaw agent --remote ws://...` mode. Remains open for 11 days, suggesting substantial review or rework needed. This is a **foundational networking feature** that could unlock distributed agent deployments.

---

## Bugs & Stability

### High Severity — Fixed (PR #3155 merged)
**#3153** — Volcengine Doubao Seed tool calls leak as `<seed:tool_call>` text
- **Created**: 2026-06-22 | **Comments**: 0
- **URL**: https://github.com/sipeed/picoclaw/issues/3153
- **Impact**: Raw XML tool call text leaked to users instead of execution; occurs during long/tool-heavy sessions
- **Fix**: PR #3154 (hanZeng-08, opened same day)—parses `<seed:tool_call>` from `message.content` when standard `tool_calls` field is empty. **Already available for review.**

### Medium Severity — Open PRs
- **#3131** — Missing `ok` checks for tool schema type assertions in registry — Fallback to zero values needed
- **#3128** — Unhandled `resp.Body.Close()` errors in four search providers (Bing, Tavily, Sogou, Perplexity) — Low risk but noisy

### Medium Severity — Recently Merged Fixes
- **#3053** — Unchecked type assertion in `lockStoreFile` could panic
- **#3091** — Silent disable of native search on non-bool config value
- **#2906** — Message bus unbounded blocking on saturation (now bounded with drops)

---

## Feature Requests & Roadmap Signals

### Likely Next-Version Candidates
| Feature | Source | Likelihood |
|---|---|---|
| **Android ADB remote operations** | PR #3157 (danmobot, opened today) | High — first-class tool |
| **Per-turn LLM token usage emission** | PR #3156 (loafoe, opened today) | High — useful for monitoring/billing |
| **Remote agent WebSocket mode** | PR #3118 (jp39, 11 days open) | Medium — waiting for review |
| **SimpleX / Tox / Wire gateways** | Issue #3093 | Low — only 1 upvote, small demand signal |

### Emerging Patterns
- **Telemetry & Observability**: Token usage emission (#3156) aligns with enterprise readiness
- **Mobile/Touch**: ADB tool (#3157) suggests interest in mobile device control
- **Decentralization**: Gateway request (#3093) + WebSocket remote mode (#3118) = push toward **distributed agent architectures**

---

## User Feedback Summary

### Pain Points
1. **Volcengine Doubao Seed incompatibility** (Issue #3153) — Critical for users of this provider; raw XML leakage breaks workflows
2. **No decentralized gateway support** (Issue #3093) — Niche but vocal user wants privacy-focused channels
3. **Spawn async callback duplication** (PR #3155, Issue #3094) — Fixed today via `SkipInboundTurn`; previously caused duplicate messages in async workflows

### Satisfaction Signals
- **High contributor throughput** (44 PRs updated, 34 closed) indicates strong maintainer responsiveness
- **Installation instructions enhancement** (PR #3152) shows UX polish for skill discovery
- **No user complaints about instability** despite nightly builds — community appears tolerant of rapid iteration

---

## Backlog Watch

### Issues Needing Maintainer Attention
| Item | Age | Status | Action Needed |
|---|---|---|---|
| **Issue #3093** — SimpleX/Tox gateway | 13 days | Open, 1 👍 | Low priority; no maintainer response yet. Consider labeling `help wanted` or `discussion` |
| **PR #3118** — Remote WebSocket mode | 11 days | Open, no comments | Needs review — foundational feature, but no feedback from maintainers |
| **Dependabot PRs** (#3100, #3103, #3104) | 12 days | Open, stale | Low risk but should merge to keep dependencies current |

### Recommended Actions
- Respond to Issue #3093 to set community expectations on privacy/gateway roadmap
- Review PR #3118 (Remote WebSocket) before it accumulates more merge conflicts
- Merge stale dependency PRs to reduce the open PR count

---

*Digest generated from PicoClaw GitHub data (sipeed/picoclaw) dated 2026-06-23. All links are to `github.com/sipeed/picoclaw`.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-23

## Today's Overview

NanoClaw shows moderate development activity today with 6 pull requests updated in the last 24 hours, though no new issues were opened or closed during that period. The project maintains a healthy PR pipeline with 5 open proposals and 1 merged/closed item, suggesting active community and maintainer engagement. No new releases were published, indicating the project may be in a consolidation phase between version cycles. The absence of open issues suggests either efficient triage or a temporary lull in bug reporting, though the presence of a cleanup fix and quality-of-life enhancements points to ongoing maintenance focus. Overall project health appears stable, with contributions spanning email integration, approval workflow improvements, and platform-specific fixes.

## Releases

No new releases were published today. The latest available release remains the previously tagged version; contributors are working against the main branch for feature development.

## Project Progress

One pull request was merged or closed today:

- **#2831 — Telegram Integration (verified working on v2.1.1)** — Closed/merged
  *Author: aarchh* | [PR #2831](https://github.com/nanocoai/nanoclaw/pull/2831)
  - Adds verified Telegram integration as a channel/skill for NanoClaw v2.1.1, enabling agents to communicate via Telegram messaging platform.
  - Includes source code changes and SKILL.md documentation, indicating a fully supported integration rather than a standalone utility.

## Community Hot Topics

The most active pull requests by update frequency and discussion potential:

- **#2795 — CLI-derived dashboard skill (`/add-clidash`)** — Open
  *Author: leetwito* | [PR #2795](https://github.com/nanocoai/nanoclaw/pull/2795)
  - Proposes a read-only utility skill that exposes system CLI commands as a dashboard, targeting power users who want real-time system telemetry through NanoClaw.
  - The long-standing nature (since June 17) with no comments suggests maintainers may be evaluating scope or technical approach before merging.

- **#1235 — IMAP/SMTP email integration** — Open
  *Author: aronjanosch* | [PR #1235](https://github.com/nanocoai/nanoclaw/pull/1235)
  - Comprehensive email channel/toolset adding 6 MCP tools via subprocess, enabling bidirectional email interaction for agents.
  - Created March 18 and still open after 3+ months; this suggests either a complex review process or potential blockers. The lack of comments or reactions may indicate it is awaiting prioritization.

**Underlying need**: Both PRs (#2795 and #1235) reflect a community demand for expanding NanoClaw's interface channels beyond the core Slack/Discord implementations — users want agent access through email (enterprise use) and native CLI dashboards (developer/ops use).

## Bugs & Stability

One bug-fix pull request was active today:

- **#2830 — `fix(setup): reap dead peer service registrations`** — Open
  *Author: amit-shafnir* | [PR #2830](https://github.com/nanocoai/nanoclaw/pull/2830)
  - **Severity: Medium** — Addresses accumulation of orphaned launchd plists and systemd units when a NanoClaw checkout is deleted without running the uninstaller. On one test machine, 6 stale registrations accumulated.
  - The bug causes persistent OS-level launch attempts for missing binaries, impacting system cleanliness and potentially causing minor resource waste or confusion.
  - A fix PR exists and is open, awaiting review/merge. This is a reliability improvement rather than a crash bug.

- **#2531 — `fix(poll-loop): suppress duplicate text when send_message fires mid-turn`** — Open
  *Author: cfis* | [PR #2531](https://github.com/nanocoai/nanoclaw/pull/2531)
  - **Severity: Low-Medium** — A quality-of-life fix preventing duplicate message text in agent conversations when polling overlaps with message sending.
  - Open since May 18, still awaiting maintainer attention.

No new bugs, crashes, or regressions were reported in the last 24 hours.

## Feature Requests & Roadmap Signals

Active feature development directions visible from today's PRs:

- **Email integration** (PR #1235) — IMAP/SMTP as both channel and toolset, heavily requested for enterprise deployments where email remains the primary communication protocol.
- **Telegram integration** (PR #2831) — Now merged, expanding messaging platform support beyond the existing Slack/Discord.
- **CLI dashboard skill** (PR #2795) — Read-only system monitoring from within NanoClaw, appealing to DevOps and admin users.
- **Approval workflow enhancement** (PR #2832) — "Reject with reason" capability for approval cards, addressing agent adaptability when human-in-the-loop decisions are made.

**Prediction for next version**: The approved Telegram integration (#2831) is likely to appear in the next release. The email integration (#1235), if reviewed and merged, would be a major feature for v2.2.0. The approval reason enhancement (#2832) is small and well-scoped, making it a strong candidate for the next minor release.

## User Feedback Summary

Based on PR descriptions and activity patterns:

- **Pain point**: Users report accumulation of orphaned service registrations when deleting NanoClaw checkouts without proper uninstall procedures (#2830) — a friction point for developers who frequently test or switch versions.
- **Pain point**: Duplicate message text in agent conversations during polling (#2531) degrades the user experience, particularly in real-time chat interfaces.
- **Satisfaction signal**: The Telegram integration was verified working on v2.1.1 by the contributor (#2831), suggesting a positive testing experience. The PR was quickly closed, indicating maintainer confidence.
- **Use case expansion**: Contributors are actively building toward enterprise-grade features (email) and developer tools (CLI dashboard), reflecting a growing user base beyond casual chatbot deployment.

## Backlog Watch

Two long-standing open pull requests require maintainer attention:

- **#1235 — IMAP/SMTP email integration** — Open since **March 18, 2026** (3+ months)
  *Author: aronjanosch* | [PR #1235](https://github.com/nanocoai/nanoclaw/pull/1235)
  - No comments or reactions. Major feature with 6 MCP tools. Risk of becoming stale or requiring rebase against main branch changes. Needs maintainer review to decide on inclusion or request modifications.

- **#2531 — poll-loop duplicate text fix** — Open since **May 18, 2026** (1+ month)
  *Author: cfis* | [PR #2531](https://github.com/nanocoai/nanoclaw/pull/2531)
  - A straightforward bug fix with no comments. Low risk, high user-facing benefit. Should be prioritized for merge to improve core user experience.

Both PRs risk developer frustration if left unaddressed for extended periods. The project would benefit from a triage pass on these older items, even if the decision is to close with explanation.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the NullClaw project digest for **2026-06-23**.

---

## NullClaw Project Digest — 2026-06-23

**Project Health:** 🟡 **Low Activity** (No new releases or closed issues in the last 24 hours, but two open PRs show ongoing development and maintenance.)

### 1. Today's Overview
The NullClaw project experienced a quiet day with no new releases and closed zero issues or pull requests. Activity was limited to two open PRs: a critical bugfix for the Matrix bridge and a routine dependency update. The lack of user-reported issues (0 total) suggests a stable current release, though the absence of feedback also limits visibility into user experience. The single active feature PR indicates targeted, focused development rather than broad changes.

### 2. Releases
**None.** No new versions were published in the last 24 hours. The last known release remains prior to this digest window.

### 3. Project Progress
No pull requests were merged or closed today. The following PRs remain open and under review:
- **PR #968** *fix(matrix): persist next_batch across restart + test env isolation* – Fixes a critical data loss bug in the Matrix bridge (see Bugs section).
- **PR #956** *ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group* – Automated security/dependency update by Dependabot.

### 4. Community Hot Topics
**No issues or PRs received comments or reactions in the last 24 hours.** The only items with any engagement were:
- **[PR #968 – fix(matrix): persist next_batch across restart](https://github.com/nullclaw/nullclaw/pull/968)** – The most substantive activity. The underlying need is clear: users expect chat continuity across restarts without forced full re-syncs, which can be slow and bandwidth-intensive.
- **[PR #956 – chore: bump alpine 3.23→3.24](https://github.com/nullclaw/nullclaw/pull/956)** – Standard maintenance to keep container builds secure and up-to-date.

**Analysis:** The low community engagement (0 thumbs-up, 0 comments) may indicate a small or quiet user base, or that the project is primarily developer-driven at this stage.

### 5. Bugs & Stability
- **Severity: High** – **[PR #968](https://github.com/nullclaw/nullclaw/pull/968)** addresses a critical bug where the Matrix bridge does not persist the `next_batch` sync cursor across restarts. This causes every restart to trigger a full initial sync, resulting in:
  - **Significant performance impact** (long start times on large rooms/accounts)
  - **Potential data loss** (missed messages during the sync gap)
  - **Increased server load** (homeserver may rate-limit)
  - **Fix exists:** Yes, in the same open PR.

**No other bugs, crashes, or regressions were reported in the last 24 hours.**

### 6. Feature Requests & Roadmap Signals
- No feature requests were filed in the last 24 hours.
- The Matrix persistence fix (PR #968) is a **stability/quality-of-life improvement** rather than a new feature, though it resolves a user-facing pain point that could be perceived as a missing feature (reliable resume behavior).
- **Prediction:** The next minor version will likely include the Matrix persistence fix and the Alpine 3.24 base image update. No new feature additions are signaled.

### 7. User Feedback Summary
**No direct user feedback (comments, reactions, or issue descriptions) was recorded in this period.** However, the existence of PR #968 implies a known user pain point: **unreliable Matrix bridge state across restarts.** The lack of complaints may either mean the bug was caught internally first, or the user base is small enough that the issue hasn't triggered public reports.

### 8. Backlog Watch
**No long-unanswered issues or PRs were identified.** All open items (2 PRs) are recent, the oldest being PR #956 (created 8 days ago, no maintainer response yet). This PR is a routine Dependabot update that likely only needs a quick review and merge. No issues remain open.

**Action Item:** PR #956 (Alpine bump) is low-risk and should be merged soon to keep the Docker builds secure. PR #968 (Matrix fix) is high-value and deserves priority review to prevent user-facing data loss.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-23

## 1. Today's Overview

IronClaw remains in a period of extremely high development velocity, with 18 updated issues and 23 updated pull requests in the last 24 hours. The project's focus has shifted heavily toward **Reborn** — the next-generation agent runtime — with dedicated performance tracking, automation support, and approval system redesigns consuming most of the active work. A significant regression on `main` HEAD (#5139) zeroed 21 of 147 tasks in the daily PinchBench benchmark, indicating that active development is introducing instability alongside rapid feature work. No new releases were published today. Project activity is **very high**, with the core team and new contributors both showing strong engagement.

## 2. Releases

**No new releases today.** The last visible release predates the current digest window.

## 3. Project Progress — Merged/Closed PRs

| PR | Title | Type | Contributor |
|----|-------|------|-------------|
| #5140 | fix(triggers): surface trigger input errors | Bug fix | core |
| #5085 | feat(reborn): concurrent turn execution via TurnRunScheduler | Feature | core |
| #5063 | feat(reborn): per-turn auto-approve resolution + never-auto-approve hard floor (#4959) | Feature | core |
| #5062 | feat(approvals): per-tool permission override model for Reborn (#4958) | Feature | core |
| #5116 | build(deps): bump everything-else group (44 updates) | Maintenance | dependabot |
| #5081 | Add hosted single-tenant Postgres profile | Infrastructure | core |
| #5135 | refactor(reborn): decompose composition god-crate | Refactoring | core |
| #4985 | Engine V2: persist LLM usage so /api/admin/usage returns data | Bug fix | core |

**Key advances:**
- **Concurrent turn execution** (#5085, merged) — Reborn now runs agent turns concurrently instead of serially, with per-user/per-type caps. This is a major throughput improvement.
- **Approval system overhaul** — Two foundational PRs merged:
  - #5063: global auto-approve toggle with DB-backed settings (no restart required)
  - #5062: per-tool `always_allow`/`ask_each_time`/`disabled` permission overrides
- **Trigger system UX improvement** (#5140) — Error messages for invalid `trigger_create` inputs are now structured and informative instead of opaque failures.
- **Decomposition of god-crate** (#5135) — A 132k-line monolith broken into 6 focused crates, improving build times and maintainability.

## 4. Community Hot Topics

| Issue/PR | Type | Significance | Link |
|----------|------|--------------|------|
| #4879 Reborn Local Dogfooding 06/15-06/21 | Issue (Open) | Core dogfooding tracker, 2 comments | [Link](https://github.com/nearai/ironclaw/issues/4879) |
| #5139 Reb/web research tasks hang at init (0 LLM calls) | Issue (Open) | **Critical regression** — zeroed 21/147 PinchBench tasks | [Link](https://github.com/nearai/ironclaw/issues/5139) |
| #5129 /Alway approve not working for outbound_delivery_target_set | Issue (Open) | Approval UX bug needing reproduction | [Link](https://github.com/nearai/ironclaw/issues/5129) |
| #5138 build(deps): bump everything-else group (45 updates) | PR (Open) | Large dependency update from new contributor | [Link](https://github.com/nearai/ironclaw/pull/5138) |
| #5061 feat: skill extraction & self-evolution | PR (Open) | Major new feature — autocurating skills from conversations | [Link](https://github.com/nearai/ironclaw/pull/5061) |
| #5120 Unify gate declined semantics | Issue (Open) | Naming inconsistency: Declined/Deny/Canceled | [Link](https://github.com/nearai/ironclaw/issues/5120) |

**Analysis:** The approval system redesign (#5129, #5120) and performance work (#5125-5128) dominate active discussions. #5139's regression is the most urgent — a 14% daily benchmark collapse at HEAD. The skill extraction PR (#5061) from a new contributor represents a bold feature addition with potentially high user value.

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **CRITICAL** | [#5139](https://github.com/nearai/ironclaw/issues/5139) | Reborn tasks wedge at init with zero LLM/tool calls after 10-commit move on `main`. 21/147 PinchBench tasks failed with `reborn turn timed out`. Controlled experiment pinpoints commits `2b2ccc55→704fcd43`. | No fix PR yet — **actively blocking daily testing** |
| HIGH | [#5129](https://github.com/nearai/ironclaw/issues/5129) | "Always approve" not working for `outbound_delivery_target_set`. Needs reproduction. | No fix PR yet |
| MEDIUM | [#4925](https://github.com/nearai/ironclaw/issues/4925) | NEAR AI MCP shows "SETUP NEEDED" despite being ready. Closed — was UI miscommunication. | Closed with fix |
| MEDIUM | [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E failing continuously (engine v2). Open for 27 days. | No fix attributed |

**Most alarming:** #5139's regression is a blocking issue for CI/CD, affecting every Reborn web/research task. No mitigations have landed yet.

## 6. Feature Requests & Roadmap Signals

| Feature | Tracked By | Likely Version Impact |
|---------|------------|----------------------|
| Telegram channel support for Reborn | [#5124](https://github.com/nearai/ironclaw/issues/5124) | Near-term — already has parent tracker infrastructure |
| Automation delete and pause/resume | [#5122](https://github.com/nearai/ironclaw/issues/5122), [#5121](https://github.com/nearai/ironclaw/issues/5121) | **Imminent** — companion PRs #5133 and #5131 already open |
| Skill extraction & self-evolution | [#5061](https://github.com/nearai/ironclaw/pull/5061) (PR) | Next minor release — major feature under review |
| Latency logging & performance attribution | [#5126](https://github.com/nearai/ironclaw/issues/5126) | This week — spawned from performance tracker #5125 |
| GitHub bug workflow MVP as Reborn app | [#5134](https://github.com/nearai/ironclaw/pull/5134) (docs PR) | Experimental — design docs submitted, no implementation yet |
| `/v1/models` + OpenAI-compatible surface | [#5094](https://github.com/nearai/ironclaw/pull/5094) (PR) | Medium-term — external-tool catalog foundation |

**Prediction:** Automation CRUD (delete, pause, resume) will land within 1-2 days given #5133 and #5131 are already open. Performance improvements (#5126-5128) will follow shortly after the regression #5139 is resolved.

## 7. User Feedback Summary

**Pain Points:**
- **Slowness is the dominant user complaint.** The performance tracker (#5125) explicitly calls out users feeling that local Reborn is "slow" during daily dogfooding. No specific data on what "slow" means is yet available.
- **Approval system confusion** — The "Always approve" feature not working for certain tools (#5129) and the generic "SETUP NEEDED" UI for MCPs (#4925, now closed) indicate onboarding friction around tool permissions.
- **Telegram channel gap** (#5124) — Telegram users cannot yet use Reborn's channel architecture, remaining on legacy v1.

**Use Cases:**
- **Daily dogfooding**: Core team uses IronClaw Reborn as their primary agent while developing it — this is the primary feedback mechanism tracked in #4879 and #5119.
- **PinchBench evaluation**: #5139's regression shows PinchBench daily scoring is used as an automated regression detector.
- **Hackathon stability**: PR #4787 (Barcelona Hackathon fork) indicates IronClaw is being used externally in high-stakes settings where stability is paramount.

**Satisfaction Signals:**
- The concurrent turn execution (#5085) and approval system redesign were closed positively with core-team review, suggesting internal satisfaction with these improvements.

## 8. Backlog Watch

| Issue/PR | Age | Status | Risk |
|----------|-----|--------|------|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E failed | 27 days | Open, 0 comments | **HIGH** — Continuous CI failure unaddressed for nearly a month |
| [#4032](https://github.com/nearai/ironclaw/pull/4032) — build(deps): bump wasm group | 29 days | Open | **MEDIUM** — Stale dependency bump, inactive |
| [#4787](https://github.com/nearai/ironclaw/pull/4787) — Barcelona Hackathon fork | 11 days | Open | **MEDIUM** — Hackathon may have ended; needs maintainer merge or close |
| [#4712](https://github.com/nearai/ironclaw/pull/4712) — Move Slack setup into WebUI | 13 days | Open | **MEDIUM** — Feature PR, core contributor, needs review |
| [#4969](https://github.com/nearai/ironclaw/pull/4969) — fix(google-wasm): auth required errors | 7 days | Open | **LOW** — Small bugfix waiting for merge |

**Most concerning:** Issue #4108's Nightly E2E has been failing for 27 days without any discussion or comments, suggesting either the failure is accepted as noise or there is a gap in CI monitoring that needs attention. This should be investigated, especially given the current regression sensitivity on `main`.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Based on the provided GitHub data for **LobsterAI (netease-youdao/LobsterAI)**, here is the project digest for **2026-06-23**.

---

# LobsterAI Project Digest – 2026-06-23

### 1. Today's Overview
Project activity is **moderate**, with a significant spike in Pull Request velocity. While there are **no new releases**, the team merged **6 PRs** in the last 24 hours, signalling active development on the `cowork` and `openclaw` subsystems. However, the project carries a high volume of **stale open issues (5)** and **stale open PRs (8)** , indicating a potential bottleneck in the review pipeline for older contributions. The maintainer focus appears to be on stabilizing the **Plan Mode** workflow and aligning the **OpenClaw plugin ecosystem** with recent upstream changes.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Project Progress
The following **6 PRs were merged/closed** today, indicating advancement in testing infrastructure, documentation, and plugin architecture:

- **[PR #2187]** **[area: renderer, area: main]** **test: align OpenClaw metadata expectations** — Updated renderer tests to handle reasoning-capable model metadata and message history reconciliation. (Merged)
- **[PR #2186]** **[area: docs, area: openclaw]** **fix(openclaw): compile NIM plugin runtime entry** — Extracted shared plugin preparation scripts to support the NIM channel. (Merged)
- **[PR #2185]** **fix(openclaw): include cwd in reply options patch** — Fixed a missing field in the plugin SDK creation patch for OpenClaw v2026.6.1. (Merged)
- **[PR #2184]** **[area: docs]** **docs(agents): update repository guidance** — Refreshed `AGENTS.md` with new architecture documentation and code quality gates. (Closed, no testing run)
- **[PR #2183]** **[area: renderer, area: docs, area: main, area: cowork, area: artifacts]** **feat(cowork): add plan mode workflow** — A major feature addition. Adds a "Plan Mode" to the composer menu, renders proposals as interactive blocks, and prevents mutating tools until approval. (Merged)
- **[PR #2182]** **[area: docs, area: openclaw]** **fix(openclaw): support upgraded im plugin installs** — Upgraded preinstalled IM plugins (DingTalk, Lark, WeCom, POPO) and fixed plugin installation path handling for OpenClaw 2026.6.1. (Merged)

### 4. Community Hot Topics
No Issues or PRs received new comments in the last 24h. However, the **stale** PRs from April represent the **most significant backlog** in terms of potential community impact:

- **[PR #1407]** **fix: OpenClaw Token Proxy 无请求体大小限制** — Critical security/stability fix pending review.
- **[PR #1421]** **perf: buildUserMemoriesXml() 全量查询** — High-impact performance improvement for prompt building.

### 5. Bugs & Stability
Five stale bugs remain open on the Profile/Overview page, all reported on **2026-04-03**. While no new bugs were reported today, the lack of updates on these issues suggests they are not being actively triaged:

| Issue | Title | Impact | Fix PR Exists? |
| :--- | :--- | :--- | :--- |
| [#1416] | UI layout broken when switching to English | **Medium** (Visual/UX regression) | No |
| [#1411] | Time dimension filter ("Last 30 days") unclickable | **Medium** (Feature broken) | No |
| [#1414] | Total session count always shows 0 | **High** (Data integrity/display) | No |
| [#1409] | Scheduled task triggered, no history generated | **High** (Functionality loss) | No |
| [#1413] | Skills UI overflow with many items | **Low** (Visual polish) | No |

### 6. Feature Requests & Roadmap Signals
The **Plan Mode** workflow (PR #2183) is the strongest roadmap signal. This feature introduces a "plan-then-execute" paradigm, suggesting the team is investing in **structured reasoning and safety** for multi-step AI tasks. Given the high velocity in the `cowork` area, this is likely a candidate for the next minor or patch release.

### 7. User Feedback Summary
Based on the open issues, user dissatisfaction is concentrated on the **Profile/Overview (`#/profile`) page**. Users report that key metrics (total sessions) are incorrect, time filters are broken, and the page breaks entirely when switching to English. This suggests a lack of QA coverage on this specific viewport, particularly for international users.

### 8. Backlog Watch
The following items require urgent maintainer attention due to age and criticality:

- **[Issue #1409]** **Scheduled task not generating history** — 81 days stale. No assignee. High impact for users relying on cron features.
- **[Issue #1414]** **Total session count always 0** — 81 days stale. No assignee. Directly undermines user trust in usage statistics.
- **[Issue #1416]** **UI broken in English locale** — 81 days stale. Blocks international usability.
- **[PR #1407]** **OpenClaw Token Proxy OOM risk** — 81 days stale. A security/stability fix that has not been merged or reviewed.
- **[PR #1410]** **SqliteStore sync write performance fix** — 81 days stale. A high-impact performance patch for streamed responses.

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

# CoPaw Project Digest — 2026-06-23

## 1. Today's Overview

CoPaw shows **high development activity** with 50 PRs updated and 23 issues updated in the last 24 hours. The project is in a **stabilization phase driven by community contributions**, as evidenced by multiple first-time contributors submitting mobile responsiveness adaptations across at least 7 different console pages. A core platform issue persists: **sub-agent context compression freezes the QwenPaw process entirely** (#5218), requiring manual restart. Meanwhile, the maintainer team is shipping infrastructure fixes, including a runtime fix for workspace prompt file loading (#5396) and security isolation of keychain master keys per install (#5028, merged). **5 issues were closed** and **20 PRs were merged/closed**, indicating active resolution of reported problems.

## 2. Releases

**No new releases** in the last 24 hours. The latest available version remains `v1.1.12.post1`.

## 3. Project Progress

**Merged/Closed PRs (20 total):**

- **Security**: #5028 — Keychain master key isolation per install (merged). Fix: OS keychain is a global namespace; previously every install on the same machine shared the same master key. Now each install uses its own `SECRET_DIR`-scoped account. **This is a security fix.**
- **Session Management**: #5027 — Backend-warmup sessions no longer pollute `chats.json`; session resume support added (merged).
- **Bug Fixes**: #5354 — Session switch lock release in embedded mode (merged); #5370 — `send_file_to_user` HTTP 404 fix for file preview URLs (closed); #5320 — Image display regression in chat after v1.1.12 upgrade (closed); #4889 — Tauri plugin loader not starting (closed).
- **Feature Requests**: #5322 — Real-time UI update and voice notification for API messages (closed, likely implemented).
- **Community Contributions**: Multiple first-time-contributor PRs under review for mobile adaptations of Settings-Models (#5397), Environments (#5385), Workspace (#5384), CronJobs (#5362), Sessions (#5364), Channels (#5369), MCP (#5381), and ACP (#5382) pages.

## 4. Community Hot Topics

**Most Active Issues (by comment count):**

1. **#5218 — Sub-agent context compression freezes QwenPaw** [17 comments] — The highest-signal bug. [https://github.com/agentscope-ai/CoPaw/issues/5218](https://github.com/agentscope-ai/CoPaw/issues/5218)
   - User pain: App becomes completely unresponsive when sub-agent triggers memory compaction. Only recovery is manual restart. No fix PR exists yet.

2. **#5262 — Upgrades re-enable disabled built-in skills** [9 comments] — Regression reported across multiple versions. [https://github.com/agentscope-ai/CoPaw/issues/5262](https://github.com/agentscope-ai/CoPaw/issues/5262)
   - User frustration: "I don't need docx/xlsx skills; I disable them every upgrade." This is a **second report** of the same bug (previous: #4807). Persistence is not maintained across upgrades.

3. **#5345 — Custom OpenAI-compatible providers (OMLX) don't support function calling** [4 comments] — Provider compatibility gap. [https://github.com/agentscope-ai/CoPaw/issues/5345](https://github.com/agentscope-ai/CoPaw/issues/5345)
   - User verified OMLX works with other frameworks (Reasonix) but not QwenPaw. Surface-level integration lacking function calling support.

**Most Active PRs:**
- #5321 (scroll context manager) and #5297 (batch model test/delete) both have maintained attention with latest updates today, indicating active review.

## 5. Bugs & Stability

**Critical (no workaround, process freeze):**
- **#5218**: Sub-agent context compaction → QwenPaw process freeze. **No fix PR exists.** Should be top priority.
- **#5344**: `/api/console/chat` silently drops messages (HTTP 200 but no delivery) when agent is busy. **No fix PR.** API reliability issue.

**High (functional impairment, workaround available):**
- **#5262**: Upgrade resets disabled skills. **Second occurrence.** Workaround: re-disable manually.
- **#5354**: Message queue cross-talk between agents; session switch stuck. **Fix PR #5357 open** — session switch lock fix.
- **#5370**: `send_file_to_user` HTTP 404 for file preview. **Closed** — fix shipped.
- **#5333**: Agent stalls after instruction submission (especially with DeepSeek). **No fix PR.** User reports both conda and Tauri versions affected.
- **#5330**: Zhipu provider passes API test but all model tests fail. **No fix PR.** Suspected model routing/name resolution bug.

**Medium (usability degradation):**
- **#5378**: Custom model endpoint auto-fills query box causing blank page. **No fix PR.**
- **#5379**: Fresh pip install → Internal Server Error on first access (`get_remote_addr` failure). **No fix PR.**
- **#5373**: Shell command tool fails on pipes, redirects, stderr. **No fix PR.**
- **#5358**: UI vendor bundle null pointer on session switch. **No fix PR.**
- **#5398**: Cron scheduler stops dispatching jobs while app stays alive. **No fix PR.**

**Closed Bugs Today:**
- #5370 (send_file_to_user 404), #5320 (image display regression), #5354 (session switch), #4889 (Tauri plugin loader), #5322 (real-time UI update feature).

## 6. Feature Requests & Roadmap Signals

**Likely for v1.1.13 (high activity, PRs under review):**
- **Mobile responsiveness overhaul** — 7+ pages being adapted (Models, Environments, Workspace, CronJobs, Sessions, Channels, MCP, ACP). Strong community contributor `yaozy2020` driving this.
- **Batch model test/delete** (#5297) — PR open, under review. Addresses model management UX gap.
- **Custom model reordering** (#5399) — Drag-and-drop model sorting within providers. PR open.
- **Scroll context manager** (#5321) — Retrieval-driven context management with SQLite persistence. Alternative to compression. Review in progress.

**Longer-term signals:**
- **Personal knowledge base integration** (#2969, 2 thumbs-up) — Long-standing request (since April). Core/backend + console affected. No PR yet.
- **Agent-workspace decoupling** (#5392) — Enable reuse of same agent across workspaces. Filed today, likely early exploration.
- **Dream memory recall-aware consolidation** (#5387) — Advanced memory feature using repeated recall as consolidation signal.

**Tooling/Integration:**
- **Import from OpenClaw/Hermes** (#5254) — Config migration path requested. No PR yet.
- **Zhipu provider function calling support** — Underlying #5330 blocks this.

## 7. User Feedback Summary

**Satisfaction signals:**
- Message queue feature praised (#5354: "excellent improvement, greatly improves efficiency") despite cross-talk bug.
- Community contributors actively investing in mobile UX — indicates investment in the platform.
- Feedback loop visible: #5320 (image regression) filed → closed within same release cycle.

**Dissatisfaction signals:**
- **Upgrade friction**: #5262 (skills re-enabled) is the second report — user fatigue evident ("I disabled them every upgrade").
- **Process reliability gaps**: #5218 (freeze) and #5344 (silent message drops) erode trust in production use.
- **Provider integration incomplete**: OMLX (#5345) and Zhipu (#5330) users hitting walls. "Works in other frameworks, not in QwenPaw" is a recurring pattern.
- **Shell tool limitations**: #5373 shows basic shell syntax unsupported — surprises power users.
- **Mobile experience**: Community is proactively fixing, but the *existence* of 8 mobile-adaptation PRs implies current mobile UX is poor.

## 8. Backlog Watch

**Critical unaddressed:**
- **#5218**: Sub-agent context freeze (17 comments, 6 days old). No fix PR. **Highest risk.**
- **#5344**: Silent message drops via API (3 comments, 3 days old). No fix PR.

**Important but stalled:**
- **#2969**: Personal knowledge base (2 thumbs-up, 78 days old). Filed April 5. No PR, no maintainer response visible.
- **#5254**: OpenClaw/Hermes config import (2 comments, 6 days old). No PR.
- **#5317**: Tauri desktop can't find Python after conda internal removal (3 comments, 5 days old). No PR. Affects custom skills execution.

**Community PRs needing review/maintainer attention:**
- **#5097**: Shield icon centering fix (11 days open, no reviewer activity).
- **#5301**: ToolGuard/Policy engine merge (5 days open).
- **#5321**: Scroll context manager (high complexity, 4 days open).
- **#5297**: Batch model test/delete (5 days open).
- **#5357, #5355, #5362, #5364, #5369, #5381, #5382, #5384, #5385**: Series of mobile adaptation PRs from `yaozy2020` (most 1-2 days old, clustered, need review bandwidth).

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-23

## Today's Overview

ZeroClaw is experiencing high-velocity development with 50 issues and 50 PRs updated in the last 24 hours, indicating an intensely active project on track for a v0.9.0 milestone. The community is deeply engaged in architectural transformation, with multiple RFCs advancing plans to eliminate Node.js dependencies, adopt a WebAssembly-first plugin runtime, and implement supply-chain security provenance. The project has 42 active issues and 49 open PRs, reflecting a focus on security hardening, CI improvements, and a major refactor of history context management. No new releases were published today, but the volume of merged and closing PR activity suggests significant progress toward the next version.

## Releases

No new releases were published in the last 24 hours.

## Project Progress

One PR was merged or closed today: **#7999** (`fix(zerocode): surface active config directory in Config header`) by MaHaoHao-ch, a XS-sized fix that displays the active config directory on the ZeroCode Config header so users can identify which on-disk state is being edited when running with `--config-dir` or `$ZEROCLAW_CONFIG_DIR` environment variable.

Several critical open PRs have received recent commits or approvals, including:
- **#8128**: SSRF guard for `zc_http_request` plugin host function
- **#8009**: Wiring HMAC tool receipts through agent turn paths
- **#7853**: Windows self-update repair and pipeline hardening
- **#8137**: Plugin config scoped per-alias with removal of raw environment variable access

## Community Hot Topics

The most active discussions in the last 24 hours revolve around ZeroClaw's architectural future and security posture:

1. **#7420 — RFC: Native Dynamic-Library Plugin System** (6 comments, closed): Proposed by Vitaly567, this addresses the "monolithic pain" of ZeroClaw's microkernel architecture by defining a native plugin system using shared libraries (.so/.dylib/.dll). The high-risk RFC has been closed, suggesting maintainers have reached a decision or superseded it with the Wasm-first approach in #8135.

2. **#7674 — RFC: WebAssembly-first, eliminate Node.js from build and runtime** (5 comments, closed): ConYel's ambitious proposal to eliminate all npm ecosystem dependencies from ZeroClaw's two remaining surfaces—the web UI (build-time) and plugins (runtime). This closed RFC has spawned two split child RFCs: #8132 (replace React/Vite with Rust→Wasm framework) and #8135 (Wasm-first plugin runtime).

3. **#5808 — Bug: Default 32k context budget exceeded by system prompt + tool definitions** (4 comments, open, P1): A persistent S1 workflow blocker where even the first LLM iteration exceeds context budget by ~3.3x. JordanTheJet reported this two months ago; the companion PR #8196 (history trim refactor, XL size, high risk) is now open and may be the resolution vehicle.

4. **#8193 — Bug: MCP tools missing from TUI sessions** (3 comments, open, P1): Audacity88 reports that MCP servers connect and expose tools, but ZeroCode TUI sessions don't receive them, while the gateway sees them. PR #8199 by OmkumarSolanki directly addresses this by initializing MCP for Chat TUI sessions.

## Bugs & Stability

**S1—Workflow Blocked:**
- **#8193 — MCP tools/tool_search missing from TUI sessions**: Gateway sees MCP tools, ZeroCode TUI does not. PR #8199 (fix: initialize MCP for Chat TUI) is open and directly addresses this.
- **#7756 — Native/MCP tools unavailable on OpenAI Responses/reasoning and Anthropic turns**: MCP tools register but models may not receive them depending on provider. Still open after 7 days.
- **#8154 — Kimi Code (Moonshot) endpoint returns 404**: Dead endpoint URL `https://api.moonshot.cn/coder/v1`; working URL is `https://api.kimi.com/coding/v1`. PR not yet filed.

**S2—Degraded Behavior / S3—Minor:**
- **#7462 — 74 test failures on Windows**: Unix-only test commands, path semantics, console encoding issues. CI doesn't catch because tests only run on Linux. Open since June 10.
- **#7269 — Docs build warning noise**: Non-blocking but noisy rustdoc and mdBook warnings. Minor priority.
- **#6360 — Prompt caching broken with Telegram**: Works on CLI but not Telegram channel ("forcing full prompt re-processing"). Open since May 4.

**Security-Related Fixes in Progress:**
- **#8127** — Telegram bot token leaked in error logs via URL display (fix PR open)
- **#8128** — SSRF guard for plugin HTTP host function (fix PR open)
- **#8013** — Disabling agent doesn't stop bound Discord channel (closed, PR likely merged)

## Feature Requests & Roadmap Signals

The v0.9.0 milestone is increasingly defined by architectural transformation, with several high-priority features likely to ship:

**Likely for v0.9.0:**
- **Wasm-first plugin runtime** (#8135): RFC for making Wasm the default plugin runtime with capability enforcement and signed distribution. This is a split from #7674 and has strong maintainer engagement.
- **Web UI replacement with Rust→Wasm** (#8132): Replace React/Vite with Dioxus, Leptos, or Yew. High-risk, high-reward architectural change.
- **Supply chain signing** (#8177): Hardware PGP, hermetic builds, SLSA provenance for container images and release binaries.
- **Local username/password AuthProvider** (#8076): IdP-less browser login for remote administration, part of the auth milestone.
- **In-app upgrade with supervised restart** (#8170): Web dashboard upgrade flow without leaving the UI.
- **Session TTL auto-truncation** (#8134): Already has config parameter `session_ttl_hours` but lacks implementation.

**Experimental/Stretch:**
- **OpenRouter model fallbacks** (#8138): Support `fallback_models` array for automatic failover.
- **Telegram webhook mode** (#8046): Alternative to long-polling for better responsiveness.
- **Per-turn output routing** (#7361, XL PR): `send_via` feature for directing outputs to specific channels.

## User Feedback Summary

**Pain Points:**
- The default 32K context budget is too small—users hit the cap on the very first iteration due to system prompts and tool definitions (#5808).
- MCP tools frequently fail to propagate to the correct runtime surfaces (#8193, #7756), creating a confusing experience where tools work in one context but not another.
- Windows users face 74 test failures and a broken self-update mechanism (#7462, #7853), though PR #7853 is actively addressing the update issue.
- Discord operators report that disabling an agent doesn't reliably stop channel activity (#8013, fixed/closed).
- Quickstart users "report bad experiences" when unintentionally limiting themselves with restrictive risk profiles (#8125), suggesting onboarding friction.

**Satisfaction Signals:**
- The community is actively engaging in RFC discussions about ZeroClaw's architectural future, indicating invested, technically sophisticated users.
- Multiple contributors are filing well-structured PRs with thorough testing sections, suggesting a healthy contributor ecosystem.
- The ZeroCode TUI continues to receive polish (config directory display, UI distinguishability improvements), indicating the project values UX for power users.

**Use Cases Represented:**
- Multi-channel deployments (Discord, Telegram, WhatsApp, Slack, Matrix)
- Privacy/security-conscious operators (supply chain signing, Wasm sandboxing, local auth)
- Windows enterprise environments (self-update, cross-platform testing)
- AI agent teams using context window management tools

## Backlog Watch

Issues needing maintainer attention due to age or lack of response:

1. **#6360 — Prompt caching broken with Telegram** (open 49 days, 3 comments): P2, accepted but no PR assigned. Users on Telegram get degraded performance with full reprocessing every turn.

2. **#7462 — 74 test failures on Windows** (open 13 days, 2 comments): P1, accepted. No maintainer response or PR assigned despite being a significant platform parity issue.

3. **#5808 — Default context budget overflow** (open 68 days, 4 comments): P1, in-progress/accepted. The companion PR #8196 (history trim refactor) is now open, but the issue itself has been unresolved for over two months with no explicit maintainer comment on timeline.

4. **#6943 — Deconflict Plugin System Goals in FND-001** (open 28 days, 2 comments): P2, accepted RFC. No visible PRs. This RFC identifies mutually exclusive commitments in the foundational design document that need resolution before plugin system implementation advances.

**Maintainer attention needed on:** #8059, #8057, #8056 (CI policy cleanup and security job PR gates) — these three issues were split from #7675 and have `in-progress` status but have received no new commits in the last 24 hours, potentially blocking the broader security CI pipeline work.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*