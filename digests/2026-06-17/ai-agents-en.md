# OpenClaw Ecosystem Digest 2026-06-17

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-17 00:32 UTC

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

# OpenClaw Project Digest — 2026-06-17

## Today's Overview

OpenClaw continues to show extremely high community engagement with **500 updated issues and 500 updated PRs in the last 24 hours**, though this volume may partly reflect automated labeling/fetching rather than all-new activity. The project has **466 open/active issues** and **362 open pull requests**, indicating a substantial maintenance backlog. Two new releases were published today (v2026.6.8 and v2026.6.8-beta.2), both focused on Telegram and WhatsApp channel delivery improvements. The most pressing patterns visible today are **persistent session-state and message-loss bugs** across multiple subsystems, ongoing **multi-agent orchestration instability**, and a large number of **security-related feature requests and fixes** awaiting maintainer review. The sheer volume of open items suggests the project may be struggling with maintainer bandwidth relative to community contribution velocity.

## Releases

### v2026.6.8 — openclaw 2026.6.8
- **Highlights:** Telegram and WhatsApp channel delivery improvements — richer structured text (tables, lists, expandable blockquotes), preserved line breaks, CLI backend delivery enhancements, and safer retry/fallback behavior.
- **Type:** Stable release
- **Migration Notes:** None explicitly mentioned beyond standard upgrade path.

### v2026.6.8-beta.2 — openclaw 2026.6.8-beta.2
- **Highlights:** Identical changelog to the stable v2026.6.8 release; likely a re-cut or patch iteration at the same version number.
- **Type:** Beta/prerelease

**No breaking changes or data migration requirements noted for either release.**

## Project Progress

Today saw **138 closed/merged PRs** and **34 closed issues**, indicating active resolution velocity. Notable merged/closed PRs today include:

- **[PR #93773]** fix(ui): Scope Skill Workshop proposals to selected agent — resolves agent-scoping bugs in the Control UI workshop interface.
- **[PR #93779]** fix(webchat): Skip textarea resize during IME composition to eliminate typing lag — fixes a reported latency issue (#90800) for CJK IME users.
- **[PR #93788]** docs: Add ClawHub trust pages to sidebar (security audits, moderation, plugin validation) — improves documentation discoverability.
- **[PR #68936]** Autofix: Add PR review autofix pipeline + Windows daemon — a large (XL) script addition that was closed/merged after review.

Other in-progress fix PRs that advanced today include:
- **[PR #93821]** fix(qmd): Strip mcporter daemon startup logs from stdout before JSON.parse — resolves a JSON parse crash on gateway restart.
- **[PR #93819]** fix: Show 0 instead of ? for context tokens on fresh session — small UX fix for `/status` output.
- **[PR #93814]** fix(trajectory): Export legacy v1 sessions without entry timestamps — fixes silent empty transcript export bug.

## Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Title | Comments | Reactions | Status |
|-------|-------|----------|-----------|--------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps | **109** | 👍79 | OPEN |
| [#88838](https://github.com/openclaw/openclaw/issues/88838) | Track core session/transcript SQLite migration via accessor seam | **30** | 👍1 | OPEN |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent completion silently lost — no retry, no notification | **19** | 👍1 | OPEN |
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | Signal daemon stop() race condition on SIGUSR1 restart | **17** | 👍0 | OPEN |
| [#32296](https://github.com/openclaw/openclaw/issues/32296) | Agent replies to previous message (session context confusion) | **16** | 👍1 | CLOSED |

### Underlying Needs Analysis

1. **Cross-platform support (#75, 109 comments, 79 👍):** The highest-engagement item remains the demand for Linux and Windows Clawdbot apps. Users clearly want parity with the macOS/iOS/Android experience, and the strong upvote count signals this is a **top community priority**.

2. **Session reliability (#88838, #44925, #22676, #32296):** Four of the top five issues relate to **session state management failures** — subagent completions lost, context confusion, race conditions in signal handling, and migration to SQLite. The consistent thread is that users **cannot trust agent conversations to persist and deliver reliably**, which undermines confidence in production deployment.

3. **Telegram/messaging delivery failures (#54531, 10 comments; #64810, 9 comments):** Issues around messages not reaching originating channels and heartbeat interruptions swallowing replies point to a **core pain point in outgoing delivery pipeline reliability**.

### Most Active PRs

Top PRs by comment count include:
- **[#58823](https://github.com/openclaw/openclaw/pull/58823)** fix(agents): Restore global subagent model default priority — **open since April 1**
- **[#55596](https://github.com/openclaw/openclaw/pull/55596)** fix(CLI): Markdown table columns misaligned with CJK characters — **waiting on author for 82 days**
- **[#39065](https://github.com/openclaw/openclaw/pull/39065)** Security: Add configurable unpaired DM responses — **waiting on author for 102 days**

## Bugs & Stability

### Critical (P0)
- **[#88838](https://github.com/openclaw/openclaw/issues/88838)** — Track core session/transcript SQLite migration. While not a bug per se, this tracks a high-risk rewrite that could introduce regressions. No fix PR linked.

### High Severity (P1)
- **[#44925](https://github.com/openclaw/openclaw/issues/44925)** — Subagent completion silently lost on timeout, no retry. **19 comments.** No fix PR identified. Addresses core reliability of agent orchestration.
- **[#22676](https://github.com/openclaw/openclaw/issues/22676)** — Signal daemon SIGUSR1 restart race condition orphans processes. **17 comments.** No fix PR identified. Impacts Signal channel reliability.
- **[#62505](https://github.com/openclaw/openclaw/issues/62505)** — Coding Agent regression: never completes anything (worked in 2026.4.2). **14 comments.** Regression reported across versions. Linked PR [#58373](https://github.com/openclaw/openclaw/pull/58373) may partially address.
- **[#48003](https://github.com/openclaw/openclaw/issues/48003)** — Steer mode does not inject messages mid-turn. **12 comments.** Linked PR mentioned but not identified. Impacts real-time steering feature.
- **[#40001](https://github.com/openclaw/openclaw/issues/40001)** — Write tool lacks append mode, cron sessions overwrite shared files. **11 comments.** Data-loss scenario for isolated cron users. No fix PR.
- **[#63216](https://github.com/openclaw/openclaw/issues/63216)** — Repeated hard resets on same session despite high reserveTokensFloor. **11 comments.** Suggest context compaction algorithm issues. No fix PR.
- **[#54155](https://github.com/openclaw/openclaw/issues/54155)** — Gateway memory leak: 389MB → 14.7GB over 4 days. **7 comments.** Memory accumulation crash risk.
- **[#66443](https://github.com/openclaw/openclaw/issues/66443)** — Overflow recovery duplicates role=user messages in JSONL. **6 comments.** Amplifies transcript growth. Linked PR possible.

### Regressions
- **[#62505](https://github.com/openclaw/openclaw/issues/62505)** — Coding Agent regression (worked in 2026.4.2, broken now)
- **[#59330](https://github.com/openclaw/openclaw/issues/59330)** — Control UI Raw mode permanently disabled since 2026.3.31 (fix PR [#59336](https://github.com/openclaw/openclaw/pull/59336) open)
- **[#45765](https://github.com/openclaw/openclaw/issues/45765)** — OPENCLAW_HOME nested directory regression when set to `~/.openclaw`

### Stability Assessment
The bug landscape reveals **systemic session reliability issues** spanning subagent orchestration, signal handling, context management, and output delivery. Multiple P1 bugs with 10+ comments have been open for 1-3 months without evident fix PRs, suggesting a **maintainer capacity bottleneck** for complex reliability fixes.

## Feature Requests & Roadmap Signals

### Trending Features (high community interest)

| Feature | Issue | Comments | 👍 | Category |
|---------|-------|----------|----|----------|
| Linux/Windows Clawdbot Apps | [#75](https://github.com/openclaw/openclaw/issues/75) | 109 | 79 | Platform support |
| Per-agent memory-wiki vault | [#63829](https://github.com/openclaw/openclaw/issues/63829) | 9 | 9 | Multi-agent |
| Private network web_fetch access | [#39604](https://github.com/openclaw/openclaw/issues/39604) | 13 | 9 | Security/config |
| Channel-mediated MCP approval | [#78308](https://github.com/openclaw/openclaw/issues/78308) | 13 | 1 | Security/approval |
| Persistent task-status surface | [#52640](https://github.com/openclaw/openclaw/issues/52640) | 7 | 2 | UX/feedback |
| Force reply to originating channel | [#54531](https://github.com/openclaw/openclaw/issues/54531) | 10 | 1 | Channel delivery |
| Sensitive data masking | [#64046](https://github.com/openclaw/openclaw/issues/64046) | 8 | 0 | Security |
| Anthropic advisor tool support | [#63930](https://github.com/openclaw/openclaw/issues/63930) | 6 | 1 | Model integration |

### Next-Release Predictions
Based on maturing PRs and recent merges:
1. **Per-agent dreaming control** ([#67420](https://github.com/openclaw/openclaw/pull/67420)) — Addresses OOM crashes from simultaneous agent dreaming; proof-supplied, likely next minor release.
2. **Control UI Raw mode fix** ([#59336](https://github.com/openclaw/openclaw/pull/59336)) — Regression fix, proof-supplied, waiting on author; could land soon.
3. **Subagent model precedence fix** ([#58823](https://github.com/openclaw/openclaw/pull/58823)) — Script fix with sufficient proof; ready for maintainer look.
4. **Provider circuit breaker** ([#64127](https://github.com/openclaw/openclaw/pull/64127)) — Addresses quota exhaustion; proof-supplied, may land in next release.

## User Feedback Summary

### Pain Points (recurring themes)
1. **Broken core functionality:** Multiple users report that agents "never complete anything" (#62505), "reply to previous messages" (#32296, now closed), and fail to deliver responses to originating channels (#54531).
2. **Multi-agent unreliability:** [#43367](https://github.com/openclaw/openclaw/issues/43367) details concurrent agent failures, config overwrites, and detached child work. Users attempting orchestration hit "a cluster of failures."
3. **Data loss anxiety:** The combination of silent completion loss (#44925), overwriting shared files (#40001), lost approval state on restart (#64664), and cron session transcript pruning (#50248) erodes trust in production use.
4. **CI/CD for AI agents:** Users like the reporter of [#43367](https://github.com/openclaw/openclaw/issues/43367) are attempting "parallel coding batches" — advanced usage patterns that stress the orchestration layer beyond its current reliability envelope.

### Satisfaction Signals
- The two v2026.6.8 releases indicate the team is shipping Telegram/WhatsApp delivery fixes — a response to previously reported channel pain points.
- Active community contributions: 500 PRs updated, with substantive fixes flowing in (accessibility, IME typing, CJK display).
- Users continue investing in advanced workflows (cron jobs, multi-agent setups, skill development), suggesting strong product conviction despite reliability issues.

## Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Title | Age (days) | Comments | Stale? |
|-------|-------|------------|----------|--------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps | **168** | 109 | No (high activity) |
| [#52640](https://github.com/openclaw/openclaw/issues/52640) | Persistent task-status surface | **86** | 7 | Marked stale |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) | Webhook session reuse for multi-turn | **130** | 8 | No (recent update) |
| [#50093](https://github.com/openclaw/openclaw/issues/50093) | WhatsApp backfill missed messages | **90** | 10 | Marked stale |
| [#50248](https://github.com/openclaw/openclaw/issues/50248) | Session cleanup prunes fresh cron sessions | **90** | 9 | Marked stale |

### PRs Waiting Longest for Maintainer Review

| PR | Title | Days open | Status | Risk |
|----|-------|-----------|--------|------|
| [#39065](https://github.com/openclaw/openclaw/pull/39065) | Configurable unpaired DM responses | **102** | Waiting on author | Security |
| [#46502](https://github.com/openclaw/openclaw/pull/46502) | Watchdog core service and cron engine | **95** | Needs proof | Compatibility |
| [#85505](https://github.com/openclaw/openclaw/pull/85505) | Host-only CLI auth epoch mode | **26** | Waiting on author | Auth/session |
| [#86360](https://github.com/openclaw/openclaw/pull/86360) | Honor bound agent exec host policy (Codex) | **23** | Waiting on author | Security boundary |
| [#65655](https://github.com/openclaw/openclaw/pull/65655) | Harden Mattermost slash callback auth | **65** | Needs proof | Security |

### Summary of Backlog Concerns
- **14 open PRs** have been waiting on author response or maintainer review for over 60 days.
- **7 stale issues** with high community engagement (P1-P2) lack maintainer responses.
- **Security-critical PRs** (#39065 on unpaired DM, #65655 on Mattermost auth, #86360 on Codex policy) are languishing.
- The **#58823** subagent model precedence fix (ready for maintainer) has been waiting since April 1.

---

*Generated 2026-06-17 from OpenClaw project data at github.com/openclaw/openclaw*

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report
**Date:** 2026-06-17  
**Scope:** OpenClaw, NanoBot, Hermes Agent, PicoClaw, NanoClaw, NullClaw, IronClaw, LobsterAI, TinyClaw, Moltis, CoPaw, ZeptoClaw, ZeroClaw

---

## 1. Ecosystem Overview

The personal AI agent open-source landscape is maturing rapidly, with **13 actively maintained projects** spanning reference implementations (OpenClaw), lightweight embeddable agents (NanoBot, TinyClaw), specialized orchestration frameworks (CoPaw, Hermes Agent, IronClaw), and messaging-first assistants (PicoClaw, ZeroClaw). The ecosystem exhibits a **two-speed dynamic**: established projects like OpenClaw (500 daily PRs) and Hermes Agent (50 issues/50 PRs daily) operate at industrial scale with significant maintenance backlogs, while smaller projects like Moltis (2 PRs) and ZeptoClaw (0 issues) show focused, stable iteration. Cross-cutting themes dominate the community discourse: **session reliability, multi-agent orchestration stability, cross-platform deployment flexibility, and channel integration robustness** appear as recurring pain points across all active projects. The week's data reveals a shared ecosystem-wide pivot toward **production hardening**—projects are shipping beta releases, fixing crash-causing regressions, and responding to security audit reports—rather than chasing novel features.

---

## 2. Activity Comparison

| Project | Open Issues | Open PRs | Releases (24h) | Merged PRs (24h) | Closed Issues (24h) | Health Score |
|---------|------------|----------|----------------|-------------------|---------------------|--------------|
| **OpenClaw** | 466 | 362 | 2 (stable + beta) | 138 | 34 | 🟡 Moderate (maintenance overload) |
| **NanoBot** | 5 | 9 | 0 | 14 | 4 | 🟢 Healthy (balanced velocity) |
| **Hermes Agent** | 46 | 39 | 0 | 11 | ~5 | 🟡 Moderate (high backlog vs merges) |
| **PicoClaw** | ~15 | ~10 | 1 (nightly) | 13 | ~10 | 🟢 Healthy (rapid fix cycle) |
| **NanoClaw** | ~6 | ~3 | 0 | 4 | ~2 | 🟢 Healthy (focused, responsive) |
| **NullClaw** | ~15 | 3 | 0 | 0 | 0 | 🟡 Moderate (fixes pending) |
| **IronClaw** | ~50 | ~30 | 0 | 15 | 22 | 🟢 Healthy (high resolution rate) |
| **LobsterAI** | ~3 | ~3 | 0 | 3 | 0 | 🟢 Healthy (stable, focused) |
| **TinyClaw** | 0 | 1 | 0 | 0 | 0 | 🟢 Healthy (low activity, no issues) |
| **Moltis** | 1 | 2 | 0 | 0 | 0 | 🟢 Healthy (stable development) |
| **CoPaw** | ~20 | ~20 | 1 (beta) | 20 | 22 | 🟡 Moderate (crash crisis on macOS) |
| **ZeptoClaw** | 0 | 1 | 0 | 0 | 0 | 🟢 Healthy (maintenance mode) |
| **ZeroClaw** | ~36 | 38 | 0 | 12 | ~10 | 🟡 Moderate (v0.8.0 regression) |

**Key observations:**
- OpenClaw's 500+ daily updates likely include automated activity but still indicate a backlog 10-40x larger than any peer
- 6 of 13 projects (46%) have a **healthy balance** of issue resolution and feature velocity
- **CoPaw** and **ZeroClaw** show high activity but with critical stability regressions dragging down their effective health
- **NullClaw** is the only project with zero merged PRs today, signaling a review bottleneck
- **ZeptoClaw** and **TinyClaw** are effectively idle this period—lowest activity in the ecosystem

---

## 3. OpenClaw's Position

### Advantages vs Peers
- **Scale of community engagement**: 466 open issues and 362 open PRs—despite maintenance strain, this reflects an order-of-magnitude larger contributor base than any other project in the ecosystem. The closest competitor (Hermes Agent: 46 issues) has ~10% of OpenClaw's volume.
- **Release velocity**: Two releases in a single day (stable + beta) while most peers release weekly or monthly. This cadence allows rapid channel delivery fixes (Telegram, WhatsApp) that competitors address as singular PRs.
- **Feature breadth**: Linux/Windows Clawdbot apps (issue #75, 109 comments, 79 👍) represents a cross-platform demand no other project in the ecosystem has matched or exceeded in community traction.

### Technical Approach Differences
- **Reference architecture**: OpenClaw positions itself as the "core reference" implementation, meaning architectural decisions (ClawHub trust model, agent skill workshop, SQLite session migration) set patterns that downstream forks like NanoClaw and NullClaw often follow.
- **Multi-agent orchestration**: OpenClaw's subagent model (with bugs like #44925—silent completion loss) is more ambitious than peer approaches. IronClaw's Engine V2, CoPaw's sub-agent compaction, and PicoClaw's remote cron commands each solve subsets of the same problem with different architectural trade-offs.
- **Maintenance debt burden**: OpenClaw carries 14 open PRs waiting >60 days for review (including security-critical items like #39065 on unpaired DM responses and #86360 on Codex policy). No other project has more than 2-3 such stalled items, suggesting OpenClaw's maintainer bandwidth is insufficient for its community scale.

### Community Size Comparison
| Metric | OpenClaw | Next Largest (Hermes/CoPaw) | Ratio |
|--------|----------|-----------------------------|-------|
| Open Issues | 466 | 50 | **9.3x** |
| Open PRs | 362 | 40 | **9.1x** |
| Top Issue Comments | 109 (#75) | 14 (#5218, CoPaw) | **7.8x** |
| Top Issue Reactions | 79 | 9 (Hermes #8552) | **8.8x** |

**Verdict**: OpenClaw is an order of magnitude larger than any peer, but its maintenance infrastructure has not scaled proportionally. The project is at risk of contributor churn if security and reliability PRs continue to languish for 60-100+ days.

---

## 4. Shared Technical Focus Areas

The following requirements cut across **4+ projects**, representing ecosystem-wide priorities:

| Focus Area | Affected Projects | Specific Needs |
|------------|------------------|----------------|
| **Multi-Agent Orchestration Reliability** | OpenClaw, CoPaw, IronClaw, ZeroClaw | Subagent completion loss (OpenClaw #44925), context compaction freezes (CoPaw #5218), tool failure cascades (IronClaw #4761), no-progress detection across tool calls (ZeroClaw #7681) |
| **Session Persistence & Delivery** | OpenClaw, NanoBot, Hermes Agent, PicoClaw, ZeroClaw | Message loss on slow channels (OpenClaw #54531), transcript pruning of fresh sessions (OpenClaw #50248), streaming/stale-state bugs (Hermes #47134, NanoBot #4366), WebSocket lifecycle coupling (ZeroClaw #7759) |
| **Cross-Platform Desktop/CLI** | OpenClaw, PicoClaw, TinyClaw, CoPaw | Windows/Linux parity (OpenClaw #75, 79 👍), native Windows CLI (TinyClaw #281), macOS ARM64 crash loops (CoPaw #5209, #5243) |
| **Channel Integration Robustness** | OpenClaw, Hermes Agent, PicoClaw, ZeroClaw, NanoClaw | Telegram forum routing (PicoClaw #3135), Slack Block Kit markdown (Hermes #8552), WhatsApp group routing (Hermes #41407), Slack @handle URL mangling (NanoClaw #2779), email channel missing message IDs (ZeroClaw #7767) |
| **Security Hardening** | OpenClaw, PicoClaw, ZeroClaw | SSRF bypasses (PicoClaw #3078), symlink race in approval hooks (PicoClaw #3081), Codex exec host policy (OpenClaw #86360), sandbox isolation bypass (Hermes #47494) |
| **Cron/Scheduler Automation** | OpenClaw, CoPaw, ZeroClaw, NullClaw | Misfire handling (CoPaw #5241), session-target isolation (ZeroClaw #6648), token persistence (NullClaw #839), cron subagent engine (NullClaw #783) |
| **Config Management & UX** | OpenClaw, ZeroClaw, NanoClaw, CoPaw | Config file writing help (ZeroClaw #7758), enum boolean coercion (Hermes #47515), i18n code literal corruption (ZeroClaw #6407), settings cache pollution (CoPaw #5206) |

**Takeaway**: These 7 focus areas represent a **shared ecosystem roadmap**. Any project that solves one well (e.g., CoPaw's timeout-protected compaction via PR #5242) creates a pattern others can adopt. The community's collective investment in session reliability and multi-agent orchestration dwarfs individual feature requests.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes Agent | PicoClaw | CoPaw | ZeroClaw | IronClaw |
|-----------|----------|---------|--------------|----------|-------|----------|----------|
| **Target User** | Power users, enterprise | Developers, CI/CD | Multi-platform users | Sysadmins, tinkerers | Research, orchestration | Ops, gateway-first | NEAR AI cloud users |
| **Primary Interface** | CLI, Control UI, messaging channels | CLI, WebUI, API | Desktop, TUI, messaging channels | CLI, Telegram, Signal | Console, Feishu, DingTalk, desktop | Gateway, WebSocket, messaging | WebUI, automation, extensions |
| **Architecture** | Monorepo, skill-based | Python, plugin system | Desktop + platform adapters | Golang, lightweight | Sub-agent orchestration | Gateway-centric, A2A | Engine V2, WASM extensions |
| **Strength** | Scale, feature breadth, community | Low overhead, fast iteration | Desktop richness, subscription integration | Safety, security responsiveness | Orchestration reliability, beta velocity | Gateway flexibility, A2A discovery | Cloud integration, automation |
| **Weakness** | Maintainer bottleneck, session bugs | ML focus, limited channels | Desktop stability, backlog management | Small community, security batch | macOS crash crisis, model compatibility | v0.8.0 regressions, docs quality | Over-reliance on NEAR AI cloud |
| **Unique Feature** | ClawHub trust pages, skill workshop | A2A/MCP integration, streaming optimization | Claude Code OAuth/Pro plan pass-through | Remote cron commands, channel hooks | Headroom compression, self-evolution | Gateway WebSocket lifecycle decoupling | Preview deployments, multi-route execution |
| **Release Cadence** | Weekly (stable + beta) | Ad-hoc per feature set | Irregular | Nightlies + ad-hoc | Beta cycles (v1.1.12-beta) | Milestone-based (v0.8.2) | Accumulation before major |

**Key insight**: The ecosystem is fragmenting along **deployment model** (self-hosted vs cloud-dependent vs desktop-native) and **user persona** (developer tooling vs system administration vs collaborative research). Projects that prioritize **cloud-agnostic, self-hosted reliability** (OpenClaw, PicoClaw, NanoClaw, NullClaw) share more user expectations than projects tied to specific cloud ecosystems (IronClaw/NEAR AI, Hermes/Claude Code).

---

## 6. Community Momentum & Maturity

### Tier 1: High-Velocity Rapid Iteration
- **OpenClaw** — Massive scale, constant shipping, but maintenance debt threatens sustainability
- **CoPaw** — Fastest fix cycle in the ecosystem (crash-to-fix in <24 hours for critical bugs), v1.1.12-beta out the door
- **ZeroClaw** — Post-v0.8.0 firefighting mode; 12 merged PRs/day but significant regression management
- **IronClaw** — High resolution rate (22 closed issues/day), aggressively adopting user feedback through dogfooding trackers

### Tier 2: Steady, Healthy Development
- **NanoBot** — Best ratio of merges-to-backlog in the ecosystem; 14 PRs merged with only 5 open issues
- **PicoClaw** — Strong security responsiveness, nightly builds, but security advisory pile-up needs attention
- **Hermes Agent** — High community engagement (50 issues/50 PRs) but 39 open PRs vs 11 merged signals a growing review bottleneck
- **LobsterAI** — Focused UX polish; stable, predictable releases

### Tier 3: Stable Maintenance / Low Activity
- **NanoClaw** — Small focused team, responsive on direct bugs, but limited feature velocity
- **NullClaw** — Zero merged PRs today, major features (cron subagent PR #783: 71 days open) stalling
- **Moltis** — Quiet but healthy; 2 open PRs being actively iterated
- **TinyClaw** — Single PR awaiting review; effectively dormant this period
- **ZeptoClaw** — Bot-only activity (dependency PR); project in maintenance-only mode

### Maturity Signals
- **Stabilizing projects**: PicoClaw (post-security audit response), LobsterAI (UX polish phase), IronClaw (Engine V2 milestone evaluation)
- **Growing pains**: OpenClaw (scale vs capacity), CoPaw (crash bugs post-bloat), ZeroClaw (v0.8.0 regression cycle)
- **At risk of stalling**: NullClaw (71-day unmerged feature PR, zero merges today), TinyClaw (single PR, no issues), ZeptoClaw (zero community activity)

---

## 7. Trend Signals

### 1. Production Reliability Is the New Feature
**Evidence**: Every project with >10 daily issues has "session persistence" or "silent failure" as a top-3 pain point. OpenClaw's #44925 (silent subagent completion loss), CoPaw's #5218 (process freeze), ZeroClaw's #7803 (blank transcript on resume) all describe the same class of failure: **users cannot trust agents to complete work without manual verification**.

**Implication for developers**: Invest in observability (turn-level logging, failure notification, retry/rollback) before adding new skills or channels. The feature that matters most in 2026 is **"it just works every time."**

### 2. Cross-Platform Parity Is Non-Negotiable
**Evidence**: OpenClaw's #75 (Linux/Windows Clawdbot, 79 👍) dwarfs all other feature requests by reaction count. CoPaw has two concurrent macOS crash issues (#5209, #5243). TinyClaw's only active PR is Windows compatibility. ZeroClaw's v0.8.0 regressions include missing prebuilt binary features.

**Implication for developers**: Supporting only Linux/macOS is a competitive disadvantage. Projects that offer first-class Windows and ARM64 support (PicoClaw's Go binary approach, NanoBot's Python cross-platform) will capture market share.

### 3. Channel Integration Is Becoming Commoditized
**Evidence**: 6+ projects share the same channel support issues—Telegram forum routing, WhatsApp media markers, Slack Block Kit formatting, Signal approval routing. These are not differentiating features; they are **mandatory infrastructure**. Projects that innovate on channel abstraction (PicoClaw's `RegisterChannelSettings` hook, zeroClaw's Gateway WebSocket decoupling) are more interesting than those fighting individual channel bugs.

**Implication for developers**: Build a channel abstraction layer (plugin/hook system) before adding channel-specific UI. The competitive advantage is **how many channels you support with consistent reliability**, not which channels you support.

### 4. Multi-Agent Orchestration Remains Unsolved
**Evidence**: OpenClaw (#44925 subagent loss), CoPaw (#5218 compaction freeze), IronClaw (#4761 tool failure cascade), ZeroClaw (#7681 no-progress detection)—four projects independently fighting the same class of bugs with no shared solution. The sub-agent model requires **orchestrator-level reliability guarantees** (timeout monitoring, retry policies, dead-letter queues) that most projects have not yet implemented.

**Implication for developers**: If your architecture uses sub-agents, invest in **circuit breakers, graceful degradation, and distributed tracing** from day one. The absence of these patterns is the single largest source of user frustration across the entire ecosystem.

### 5. Security Is a Growing Differentiator
**Evidence**: PicoClaw's dedicated 10-issue security audit batch, OpenClaw's stalled security PRs (#39065, #86360), Hermes Agent's sandbox isolation bypass (#47494), ZeroClaw's pairing code fix (#5266/7798). The community is increasingly aware of OAuth reverse-proxy risks (NanoClaw #1669, 72 days unanswered), SSRF vectors, and token leakage.

**Implication for developers**: Users are becoming security-conscious. Projects that can demonstrate a proactive security posture (PicoClaw's rapid response to YLChen-007's advisories) will earn trust. Those with unanswered security compliance questions (NanoClaw #1669) risk user defection.

### 6. The "Just Works" Installation Experience Is a Barrier
**Evidence**: NanoBot's #4360 (installer crash on Debian:13), ZeroClaw's #7758 (can't write config file), TinyClaw's Windows path resolution bug, CoPaw's macOS crash loop. Even experienced developers are hitting **first-run friction**.

**Implication for developers**: A 3-command install (download → configure → run) with sensible defaults and clear error messages is a moat. Projects that invest in onboarding UX (NanoBot's curl-to-pipe installer improvements, ZeroClaw's planned docs overhaul) will convert more trial users to regular users.

---

*Report generated from 2026-06-17 community digest data across 13 open-source AI agent projects. Metrics reflect 24-hour window only and should be contextualized with long-term trend data for strategic decisions.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-17

## Today's Overview

The NanoBot project shows **high activity** over the past 24 hours, with 23 PRs updated (14 merged/closed) and 9 issues updated (4 closed). No new releases were published today. The community is actively contributing bug fixes and enhancements, particularly around streaming stability, context management, and WebUI improvements. The project maintainers are processing contributions at a healthy pace, with multiple PRs moving from review to merge in a single day. Currently, 5 open issues and 9 open PRs indicate ongoing development work that may land in the next release.

## Releases

**No new releases** today. The last release date is not specified in the data.

## Project Progress

**14 PRs were merged or closed today**, representing substantial progress across several areas:

### Context & Memory Improvements
- **[#4352 (merged)](https://github.com/HKUDS/nanobot/pull/4352)** — `fix(context): cap recent-history digest by tokens, not characters` — Critical fix replacing character-count limits with token-count limits, preventing context overflow in CJK/code-heavy conversations
- **[#4358 (merged)](https://github.com/HKUDS/nanobot/pull/4358)** — `fix(api): avoid duplicate user turn on empty-response retry (#4079)` — Closes a long-standing bug where API retries duplicated user messages
- **[#4369 (merged)](https://github.com/HKUDS/nanobot/pull/4369)** — `Explain empty Dream runs` — Makes the Dream history feature more user-friendly with actionable error messages

### Provider & Streaming Fixes
- **[#4363 (merged)](https://github.com/HKUDS/nanobot/pull/4363)** — `fix(providers): validate stream idle timeout config` — Centralized timeout validation preventing crashes from malformed `NANOBOT_STREAM_IDLE_TIMEOUT_S` values
- **[#4361 (merged)](https://github.com/HKUDS/nanobot/pull/4361)** — `fix(providers): enable thinking for Kimi K2.7 models` — Adds new model support with proper temperature overrides
- **[#3401 (merged)](https://github.com/HKUDS/nanobot/pull/3401)** — `feat(api): add embeddings support for OpenAI-compatible providers` — New `/v1/embeddings` endpoint for vector use cases

### Automation & WebUI
- **[#4330 (merged)](https://github.com/HKUDS/nanobot/pull/4330)** — `feat(webui): add automation management view` — Major WebUI enhancement adding full automation CRUD with filtering, pausing, and system job protection
- **[#4364 (merged)](https://github.com/HKUDS/nanobot/pull/4364)** — `fix(webui): override wsUrl with local LAN IP when on dev server port 5173` — Fixes WebUI connectivity issues on LAN networks

### Installation & Configuration
- **[#4368 (merged)](https://github.com/HKUDS/nanobot/pull/4368)** — `Fix macOS installer for externally managed Python` — PEP 668 compliance for macOS one-command install
- **[#4370 (merged)](https://github.com/HKUDS/nanobot/pull/4370)** — `Enable idle auto-compact by default` — Changes default `idleCompactAfterMinutes` from 0 to 15
- **[#4365 (merged)](https://github.com/HKUDS/nanobot/pull/4365)** — `docs: use pipe pattern for curl installer commands` — Docker-friendly installation documentation

### Infrastructure
- **[#4355 (merged)](https://github.com/HKUDS/nanobot/pull/4355)** — `chore: ignore bridge/node_modules` — Git hygiene improvement
- **[#4247 (merged)](https://github.com/HKUDS/nanobot/pull/4247)** — `fix(webui): auto-compact transcript when file exceeds size limit` — Prevents WebUI chat history disappearance on large transcripts

## Community Hot Topics

### Most Active Issues
1. **[#4360 — "end of file unexpected" during installer](https://github.com/HKUDS/nanobot/issues/4360)** — 6 comments, still open. A Docker/installer issue on fresh `debian:13` containers, possibly related to shell syntax expansion in the curl-to-pipe installer pattern. The community is actively investigating.

2. **[#4242 — Disabling dream.enabled still injects all chat history](https://github.com/HKUDS/nanobot/issues/4242)** — 1 comment, still open. A nuanced bug where disabling Dream mode doesn't stop the Dream cursor from reading history into the system prompt. Users want clear separation between disabled and enabled Dream features.

3. **[#4375 — Git Command Execution Blocked by Workspace Security Policy](https://github.com/HKUDS/nanobot/issues/4375)** — New today, 0 comments. Git operations in subdirectories fail despite being within allowed workspace — indicates a workspace boundary detection issue.

### Most Active PRs
- **[#4371 (open)](https://github.com/HKUDS/nanobot/pull/4371)** — `fix(cache): add breakpoint before Recent History` — Proposes a cache stability improvement by separating the growing "Recent History" section from the stable system prompt prefix, enabling better caching behavior.

- **[#4353 (open)](https://github.com/HKUDS/nanobot/pull/4353)** — `fix(transcription): convert audio to WAV 16k mono before STT` — Addresses real-world WhatsApp voice note failures by normalizing audio format before speech-to-text processing.

### Underlying Needs
The volume of activity around streaming timeout handling, context building, and memory management reflects a community pushing NanoBot toward **production reliability**. The Dream/Dream cursor issues suggest growing adoption of the "sleep-and-consolidate" workflow, while the installer bugs indicate expanding user diversity beyond expert Python developers.

## Bugs & Stability

### High Severity
- **[#4360 — Installer crash on Debian:13](https://github.com/HKUDS/nanobot/issues/4360)** — `pip: 20: Syntax error: end of file unexpected` blocks fresh Docker installations. **No fix PR yet.** This may affect new users on modern base images. The recently merged [#4365](https://github.com/HKUDS/nanobot/pull/4365) (pipe pattern docs) partially addresses the underlying shell expansion issue but may not fully resolve Docker-specific cases.

- **[#4375 — Git commands blocked by workspace security](https://github.com/HKUDS/nanobot/issues/4375)** — Blocks core development workflow (add/commit/push) in subdirectories within allowed workspace. **Fix PR needed.** This is a regression-level issue for users relying on NanoBot's Git tooling.

### Medium Severity
- **[#4374 — SOUL.md/USER.md read/write asymmetry](https://github.com/HKUDS/nanobot/issues/4374)** — Project workspaces read configuration from project root but write back to default workspace. This causes workspace drift and configuration loss across turns. **No fix PR yet.**

- **[#4366 — Local model servers need proxy settings](https://github.com/HKUDS/nanobot/issues/4366)** — System proxy env vars break local model server connections. **Fix PR [#4367](https://github.com/HKUDS/nanobot/pull/4367) is open** with a proposed solution to bypass proxy for local endpoints.

### Resolved Today
- **[#4065 — Invalid NANOBOT_STREAM_IDLE_TIMEOUT_S crashes](https://github.com/HKUDS/nanobot/issues/4065)** — Closed via [#4363](https://github.com/HKUDS/nanobot/pull/4363) (merged)
- **[#4079 — API empty-response retry duplicates user turns](https://github.com/HKUDS/nanobot/issues/4079)** — Closed via [#4358](https://github.com/HKUDS/nanobot/pull/4358) (merged)
- **[#4286 — Missing "sustained goal" context](https://github.com/HKUDS/nanobot/issues/4286)** — Closed, user reported the agent losing track of long-running task context

## Feature Requests & Roadmap Signals

### Likely to Land Next
1. **Automation Management UI** ([#4330](https://github.com/HKUDS/nanobot/pull/4330), merged) — Just landed; expect documentation and refinement in coming days
2. **Idle Auto-Compact by Default** ([#4370](https://github.com/HKUDS/nanobot/pull/4370), merged) — Global default change to 15-minute compaction
3. **Embeddings API** ([#3401](https://github.com/HKUDS/nanobot/pull/3401), merged) — New `/v1/embeddings` endpoint for vector database and RAG use cases
4. **Cache Breakpoint for System Prompt** ([#4371](https://github.com/HKUDS/nanobot/pull/4371), open) — Performance optimization likely to merge soon given the active review

### Emerging User Demands
- **Proxy-aware local model serving** ([#4366](https://github.com/HKUDS/nanobot/issues/4366)) — Users deploying NanoBot in corporate/proxy environments need smart proxy bypass for local endpoints
- **Project workspace consistency** ([#4374](https://github.com/HKUDS/nanobot/issues/4374)) — Project-based agent workspaces need proper read/write symmetry for configuration files
- **Multi-format audio transcription** ([#4353](https://github.com/HKUDS/nanobot/pull/4353)) — WhatsApp voice notes (OGG/Opus) need format normalization

### Predictions for Next Release
Given the volume of recently merged features, the next release (likely v0.x) will probably include: automation UI, embeddings API, idle auto-compact by default, token-based history digest limiting, proxy-aware HTTP clients, and expanded model support (Kimi K2.7, Moonshot).

## User Feedback Summary

### Pain Points (Negative Signals)
1. **Installation friction** — Docker users hit shell expansion bugs ([#4360](https://github.com/HKUDS/nanobot/issues/4360)); macOS users face PEP 668 conflicts (resolved via [#4368](https://github.com/HKUDS/nanobot/pull/4368))
2. **Workspace security over-blocking** — Users report legitimate Git operations being blocked ([#4375](https://github.com/HKUDS/nanobot/issues/4375))
3. **Project workspace drift** — SOUL.md/USER.md asymmetry causes confusion in multi-project setups ([#4374](https://github.com/HKUDS/nanobot/issues/4374))
4. **Proxy conflicts** — Users can't run local models when network proxy is configured ([#4366](https://github.com/HKUDS/nanobot/issues/4366))

### Satisfaction Signals (Positive)
1. **Dream explanation improvement** ([#4369](https://github.com/HKUDS/nanobot/pull/4369) merged) — Users wanted actionable Dream feedback; PR addresses the opaque "no history" response
2. **A2A/MCP integration enthusiasm** ([#4362](https://github.com/HKUDS/nanobot/issues/4362)) — External teams voluntarily announcing compatibility with NanoBot's agent protocol
3. **Embeddings API demand** ([#3401](https://github.com/HKUDS/nanobot/pull/3401) merged) — A popular feature for RAG developers, now available
4. **Idle auto-compact** — Changing the default from 0 to 15 minutes indicates user demand for better resource management without manual configuration

### Third-Party Integrations
- **[#4362](https://github.com/HKUDS/nanobot/issues/4362)** — MetaVision AI Studio announced NanoBot-compatible A2A/MCP endpoints (7 tools: story generation, SEO analysis, scripting, content generation, code generation, image generation, text-to-speech), indicating growing ecosystem adoption

## Backlog Watch

### Issues Needing Maintainer Attention
1. **[#3662 (open, since May 6)](https://github.com/HKUDS/nanobot/pull/3662)** — `fix(tokens): avoid network loads during estimation` — 42 days open. A promising performance optimization that avoids network calls for token estimation. Needs review and potentially merge.

2. **[#4053 (open, since May 29)](https://github.com/HKUDS/nanobot/pull/4053)** — `fix(tools): keep read-only roots out of write paths` — 19 days open. Security hardening that prevents write tools from accessing read-only media directories. Important for workspace security model.

3. **[#4242 (open, since June 8)](https://github.com/HKUDS/nanobot/issues/4242)** — `Disabling dream.enabled still injects all chat history` — 9 days open. A confusing behavioral bug that may be affecting many users who disable Dream mode.

4. **[#4374 (open, since yesterday)](https://github.com/HKUDS/nanobot/issues/4374)** — Project workspace read/write asymmetry — Fresh but potentially high-impact for the new project workspaces feature (#4007).

5. **[#4375 (open, today)](https://github.com/HKUDS/nanobot/issues/4375)** — Git command blocking — Fresh regression-level bug needing prompt triage.

### Stale with No Activity
- None in the 24-hour window; the project appears well-maintained with no truly stale critical items.

---

*Generated 2026-06-17. Data source: GitHub API for HKUDS/nanobot.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the Hermes Agent project digest for June 17, 2026.

---

## Hermes Agent Project Digest: 2026-06-17

### 1. Today's Overview
Project activity is **very high** today, with 50 Issues and 50 PRs updated in the last 24 hours. The majority of issues remain active (46 open), and there is a significant number of open PRs (39) awaiting merge or review. While no new releases were cut, the community is highly engaged, submitting a large volume of bug reports and feature requests, particularly around platform integrations (WhatsApp, Slack, Signal) and the TUI/Desktop experience. Several critical bug fixes are in the pipeline, indicating a strong focus on stability and addressing regressions.

### 2. Releases
**None.** No new versions of Hermes Agent were released in the reporting period.

### 3. Project Progress
A total of **11 PRs were merged or closed** today. Notable progress includes:
- **Anthropic Fix:** PR [#47518](https://github.com/NousResearch/hermes-agent/pull/47518) was closed, salvaging text-invoked tool calls from the Anthropic API, preventing agent loops.
- **Documentation & Housekeeping:** Three PRs from user `pranjalbhatia710` were merged, improving documentation for the auxiliary client fallback chain ([#36284](https://github.com/NousResearch/hermes-agent/pull/36284)), fixing invalid config examples ([#36628](https://github.com/NousResearch/hermes-agent/pull/36628)), and adding a contributor PR workflow guide ([#36630](https://github.com/NousResearch/hermes-agent/pull/36630)).
- **Anthropic Client Stability:** A fix was merged to skip unnecessary OpenAI client rebuilds for Anthropic clients, improving stability ([#36832](https://github.com/NousResearch/hermes-agent/pull/36832)).
- **Declarative Workflows:** PR [#41388](https://github.com/NousResearch/hermes-agent/pull/41388) was closed, adding a declarative `workflow` tool for multi-phase agent workflows backed by SQLite.

### 4. Community Hot Topics
The most active discussions reveal a focus on **billing and subscription integration** and **critical stability fixes**.
- **Anthropic Billing Bug:** Issue [#40014](https://github.com/NousResearch/hermes-agent/pull/40014) ("Claude Code OAuth (Max/Pro plan) still hits pay-per-token API endpoint") has 4 comments and 0 reactions, but is a high-stakes discussion for users on paid plans. The underlying need is for Hermes to respect subscription quotas to avoid unexpected costs.
- **MCP Tool Crashes:** Issue [#47134](https://github.com/NousResearch/hermes-agent/pull/47134) ("fix(mcp): /reload-mcp crashes gateway") is a P1 discussion, with the underlying problem being a process group signal leak that kills the entire gateway session. A fix is being actively discussed.
- **Slack Block Kit:** Issue [#8552](https://github.com/NousResearch/hermes-agent/pull/8552) ("Slack platform: use Block Kit markdown block type") has 7 comments and 9 👍 reactions, showing strong demand for rich markdown rendering (tables, etc.) on Slack. The related PR [#47051](https://github.com/NousResearch/hermes-agent/pull/47051) has been opened to address this.

### 5. Bugs & Stability
A significant number of bugs were reported today, with a focus on gateway and platform-specific issues.
- **P0 (Critical):** **Sandbox Isolation Bypass:** PR [#47494](https://github.com/NousResearch/hermes-agent/pull/47494) fixes a security flaw where `enabled_tools` logic could be bypassed, allowing sandbox tool execution outside of intended restrictions. This is the highest severity item of the day.
- **P1 (High):**
    - **Telegram Gateway Outage:** PR [#47508](https://github.com/NousResearch/hermes-agent/pull/47508) addresses a bug where Telegram polling would fail and not recover from transient network errors, effectively killing the gateway.
    - **MCP Gateway Crash:** Issue [#47134](https://github.com/NousResearch/hermes-agent/pull/47134) (as above) is a confirmed P1 crash.
- **P2 (Medium):**
    - **WhatsApp Group Routing:** Issue [#41407](https://github.com/NousResearch/hermes-agent/pull/41407) and PRs [#47505](https://github.com/NousResearch/hermes-agent/pull/47505) & [#47495](https://github.com/NousResearch/hermes-agent/pull/47495) address WhatsApp group target routing failures and wake-word stripping issues.
    - **Signal Approval Routing:** Issue [#46866](https://github.com/NousResearch/hermes-agent/pull/46866) reports that approval responses on Signal are misrouted.
    - **Config Corruption:** Issue [#47515](https://github.com/NousResearch/hermes-agent/pull/47515) describes `hermes config set` silently coercing string enums, corrupting config files.
- **Desktop/TUI Crashes:** Several P3 crashes were reported: a Maximum call stack size exceeded when sending a photo ([#47498](https://github.com/NousResearch/hermes-agent/pull/47498)) and an external link handler triggering unwanted system popups ([#47500](https://github.com/NousResearch/hermes-agent/pull/47500)).

### 6. Feature Requests & Roadmap Signals
User feature requests signal a desire for **better subscription integration**, **improved UX**, and **more platform support**.
- **Claude Code Subscription MCP:** Issue [#47199](https://github.com/NousResearch/hermes-agent/pull/47199) requests an MCP provider that allows agents to access a user's Claude Max/Pro subscription directly, bypassing API billing. This is a highly requested integration.
- **Desktop Enhancements:**
    - A "Workspace Switcher" on the status bar ([#38849](https://github.com/NousResearch/hermes-agent/pull/38849)).
    - "UI Zoom/Scale Controls" for high-DPI displays ([#47499](https://github.com/NousResearch/hermes-agent/pull/47499)).
    - A dedicated "Providers" settings section for API key management ([#39020](https://github.com/NousResearch/hermes-agent/pull/39020)).
- **Platform Expansion:** Issue [#8950](https://github.com/NousResearch/hermes-agent/pull/8950) requests adding 6 new messaging channels, including IRC, Google Chat, and Twitch.
- **Agent Workflow Hooks:** A request for an agent-level pre-response hook ([#47446](https://github.com/NousResearch/hermes-agent/pull/47446)) and a "Profile Temperature Adjustment" config ([#47512](https://github.com/NousResearch/hermes-agent/pull/47512)) point to demand for finer-grained control over agent behavior.

### 7. User Feedback Summary
User feedback today highlights the pain of **integration friction** and **unexpected costs**.
- **Billing Pain:** The Anthropic billing issue ([#40014](https://github.com/NousResearch/hermes-agent/pull/40014)) is a clear dissatisfaction point, where users feel their subscriptions are being ignored.
- **Platform Frustration:** Users on WhatsApp are frustrated by broken group routing ([#41407](https://github.com/NousResearch/hermes-agent/pull/41407)), while Slack users desire better formatting ([#8552](https://github.com/NousResearch/hermes-agent/pull/8552)).
- **Config Management:** Users want a more intuitive GUI for managing complex config, as shown by requests for a provider settings section ([#39020](https://github.com/NousResearch/hermes-agent/pull/39020)) and frustration with the config set command's boolean coercion ([#47515](https://github.com/NousResearch/hermes-agent/pull/47515)).
- **Desktop UX:** New desktop users report crashes on photo uploads ([#47498](https://github.com/NousResearch/hermes-agent/pull/47498)) and a lack of integration with WSL ([#40140](https://github.com/NousResearch/hermes-agent/pull/40140)).

### 8. Backlog Watch
Several older, important items remain open without maintainer traction, signaling potential gaps in coverage.
- **JMAP Email Support:** Issue [#11424](https://github.com/NousResearch/hermes-agent/pull/11424) (created April 2026) requesting JMAP support for the email integration has 2 comments and 1 👍. This remains a stuck feature request for users of services like Fastmail.
- **Canvas Mode:** Issue [#29379](https://github.com/NousResearch/hermes-agent/pull/29379) (created May 2026) for a native collaborative "Canvas Mode" is a popular vision feature (2 👍) but has seen no maintainer engagement.
- **MiniMax-M3 Context Window Bug:** Issue [#37289](https://github.com/NousResearch/hermes-agent/pull/37289) (created June 2026) regarding an inconsistent context window size is a P3 but has been open for over two weeks with no resolution.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the PicoClaw project digest for **June 17, 2026**.

---

### PicoClaw Project Digest — 2026-06-17

### 1. Today's Overview
The PicoClaw project is in an intense cycle of **stability hardening and security remediation**. On June 16-17, the team processed **16 Pull Requests** (13 merged) and addressed **15 Issues**, while shipping a **nightly build (v0.2.9-nightly)**. Activity is dominated by a wave of **10 high-severity security advisories** filed by an external researcher (YLChen-007) covering SSRF bypasses, command injection vectors, and authorization flaws across multiple channels. The project is responding aggressively, with maintainers merging critical fixes for Telegram forum topics, goroutine panic crashes, and provider compatibility (Gemini 3.5). Despite the high volume of open security items, the project displays rapid iteration and strong community contribution.

### 2. Releases
**Nightly Build v0.2.9-nightly.20260616**
- **Status:** Automated build, marked as potentially unstable.
- **Changelog:** [Compare v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)
- **Note:** Contains all fixes merged up to June 16. No stable release or migration notes provided.

### 3. Project Progress (Merged PRs)
Thirteen PRs were merged/closed in the last 24 hours, indicating a **high-velocity patch cycle**.

- **Security & Stability:**
    - **Goroutine Panic Recovery** (`#3132`): Added `defer-recover` to core execution paths to prevent process crashes.
    - **Input Handling Fixes:** Fixes for Telegram forum topic routing (`#3135`), Gemini thought_signature format (`#3136`), session history display (`#2990`), and context compression config (`#2988`).
- **Features:**
    - **Remote Cron Commands** (`#3137`): Adds `tools.cron.command_allowed_remotes` to allow remote channels to trigger cron tasks.
    - **Extensible Channels** (`#3120`): Introduces a `RegisterChannelSettings` hook, allowing third-party (out-of-tree) channels to integrate cleanly.
- **Infrastructure:**
    - **Error Handling:** Explicitly handled `Close()` errors in file descriptors and TTS (`#3127`, `#3129`), and fixed silent JSON marshaling failures in Seahorse tools (`#3130`).

### 4. Community Hot Topics
- **[Issue #2404] Streaming HTTP Request Support** (12 comments, 1 👍): The most active discussion remains a feature request to add `"streaming": true` to config for OpenAI-style streaming. This reflects a core user desire for real-time responses.
    - *Link:* [Issue #2404](https://github.com/sipeed/picoclaw/issues/2404)
- **[Security Cluster #3070-#3082] (10 Issues):** While low on comments (1 each), these 10 security advisories represent the most critical conversation. All are tagged `stale` and touch on fundamental architecture flaws (SSRF, command injection, auth bypass). The researcher YLChen-007 is driving a significant security audit.
    - *Example:* [Issue #3078](https://github.com/sipeed/picoclaw/issues/3078) (SSRF Proxy Bypass)

### 5. Bugs & Stability

| Severity | Issue | Summary | Status |
| :--- | :--- | :--- | :--- |
| **Critical** | `#3081` | Symlink race in `exec` approval hook allows running in wrong directory. | Open; no fix PR yet. |
| **Critical** | `#3078` | SSRF protection on `web_fetch` bypassed via HTTP proxy config. | Open; no fix PR yet. |
| **High** | `#3072` | CSRF in Launcher first-run password setup allows local takeover. | Open; no fix PR yet. |
| **Medium** | `#3134` | `su -c 'echo OK'` command fails in agent gateway ("No daemon running"). | Closed (Bug report, likely duplicate/known). |
| **Medium** | `#3110` | Telegram adapter replies to #General instead of specific forum topics. | Closed via fix PR `#3135`. |

**Trend:** The backlog is heavily weighted toward security bugs. The Telegram Forum topic bug was resolved quickly (`#3135`).

### 6. Feature Requests & Roadmap Signals
- **Streaming HTTP Requests (`#2404`):** The highest-voted feature. Likely to land in **v0.3.0** as it is a core UX improvement for latency-sensitive users.
- **Remote Cron Commands (`#3137`):** *Just merged.* This signals the roadmap is prioritizing **agent automation** (scheduling) and **multi-channel orchestration**.
- **Out-of-tree Channel Hooks (`#3120`):** *Just merged.* This architecture change indicates a strategic shift toward an **ecosystem/plugin model**, reducing the friction for custom integrations.

### 7. User Feedback Summary
- **Pain Points:**
    - **Telegram Forum Compatibility:** Users report broken thread routing (typing indicator works, message sends wrong).
    - **Session History Visibility:** Users were frustrated by only seeing the last message in a multi-turn Web UI session (fixed in `#2990`).
    - **Gemini 3.5 Incompatibility:** Users hitting deployment issues due to field name format (fixed in `#3136`).
- **Use Cases:**
    - **System Administration:** Users (nongwoluanlai666) are pushing the agent to execute complex shell commands (`su -c`), indicating production server use.
    - **Content Generation & Data Handling:** Requests for streaming support and fixes for `json.Marshal` errors point to users integrating with LLMs for data processing.

### 8. Backlog Watch
- **[Issue #2404] Streaming HTTP Request (Stale, +70 days):** Despite being the most active feature request, it has received no direct assignment or milestone. Without maintainer attention, this could become a source of user frustration.
    - *Link:* [Issue #2404](https://github.com/sipeed/picoclaw/issues/2404)
- **[Security Batch #3070-#3082] (Stale, +7 days):** While "stale" is due to the template, these **10 critical security issues** remain open without associated fix PRs. This is a significant **project health risk**. The velocity on these is concerningly slow compared to the rapid merging of other fixes.
    - *Link:* [Issue #3070](https://github.com/sipeed/picoclaw/issues/3070) (example)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-17

## Today's Overview
Project activity is moderate, with 6 issues and 5 pull requests updated in the last 24 hours, indicating a healthy but not hyperactive development cycle. Four PRs were merged or closed, including a significant fix for budget-exhausted LLM turns that had been causing silent user-facing failures. One new open feature request and a security documentation drift issue suggest growing community concerns around deployment flexibility and documentation accuracy. No new releases were published today, but the merged PRs may signal an impending patch release.

## Releases
No new releases were published today. The project remains at its previous version; however, several merged fixes (budget error delivery, Tailscale self-healing) are likely candidates for a point release in the near future.

## Project Progress
Four PRs were merged/closed today:
- **#2759 [CLOSED] fix(agent-runner): deliver budget/billing error turns instead of dropping them** — This fix addresses a critical user-facing bug (#2751) where token/spend-budget exhausted LLM turns were silently dropped, leaving users with no reply. The PR ensures the error is delivered to the user rather than swallowed. (https://github.com/nanocoai/nanoclaw/pull/2759)
- **#2069 [CLOSED] Skill/webchat v1** — A long-running feature skill that adds a webchat channel integration, updated today after nearly two months. (https://github.com/nanocoai/nanoclaw/pull/2069)
- **#2782 [CLOSED] fix: make tailscale-docker routing service self-healing** — An operational fix converting a `Type=oneshot` systemd unit to a self-healing service that reapplies Docker bridge ip rules mid-session when Tailscale flushes them (e.g., on exit-node reconnect). (https://github.com/nanocoai/nanoclaw/pull/2782)
- **#2775 [CLOSED] docs(changelog): clarify the OneCLI gateway is a separate, operator-driven upgrade** — A documentation fix clarifying that the OneCLI gateway pinning is only enforced for fresh installs, not for existing deployments. (https://github.com/nanocoai/nanoclaw/pull/2775)

## Community Hot Topics
- **#1669 [OPEN] Does Credential Proxy implementation risk Anthropic account bans?** — This issue, now over two months old with one comment, questions whether NanoClaw's Credential Proxy violates Anthropic's OAuth reverse-proxy prohibition. It has not yet received a maintainer response, suggesting either careful internal deliberation or an oversight. The underlying need is for explicit compliance assurance from the project. (https://github.com/nanocoai/nanoclaw/issues/1669)
- **#2780 [OPEN] feat(upgrade-state): env opt-out for the startup tripwire (managed fleets)** — A new PR proposing `NANOCLAW_DISABLE_UPGRADE_TRIPWIRE=1` for immutable-image deployments. This addresses a real operational pain point for managed fleets. (https://github.com/nanocoai/nanoclaw/pull/2780)
- **#2779 [OPEN] Slack: @handles inside URLs get mangled into broken mentions** — A clear, well-documented bug where Slack rewrites `@handle` in URLs into broken Slack mentions. This affects any agent sending links to HackMD, Mastodon, or similar services. The user has linked to similar Chromium bug reports, showing thorough investigation. (https://github.com/nanocoai/nanoclaw/issues/2779)

## Bugs & Stability
Ranked by severity:
1. **Medium-High: #2784 [OPEN] container-runner: session source staleness check only watches index.ts** — A staleness-check bug in the container-runner where only `index.ts` is used as the staleness signal, meaning changes to files like `ipc-mcp-stdio.ts` may not trigger a re-sync. No fix PR has been opened yet. (https://github.com/nanocoai/nanoclaw/issues/2784)
2. **Medium: #2779 [OPEN] Slack @handle URL mangling** — A reliable reproduction with concrete examples. No fix PR exists yet. The fix likely involves URL escaping or custom Slack message formatting. (https://github.com/nanocoai/nanoclaw/issues/2779)
3. **Low-Medium: #2751 [CLOSED] Budget-exhausted LLM turns silently dropped** — Closed with the merge of PR #2759, which now delivers the error to the user. This is now resolved. (https://github.com/nanocoai/nanoclaw/issues/2751)
4. **Low-Medium: #2783 [OPEN] docs/SECURITY.md describes retired v1 trust model** — Documentation drift, not a code bug, but the canonical security doc is misleading for new users. No fix PR yet. (https://github.com/nanocoai/nanoclaw/issues/2783)

## Feature Requests & Roadmap Signals
- **#2781 [OPEN] Support NANOCLAW_NATIVE_CREDENTIALS to bypass OneCLI** — A clear user story from a downstream packager needing to skip OneCLI authentication in sandbox environments. This is likely to be picked up soon given its simplicity and strong use case. (https://github.com/nanocoai/nanoclaw/issues/2781)
- **#2780 [PR] Managed fleet upgrade tripwire opt-out** — While this is a PR, the underlying feature request was for immutable-image deployments. Likely to be merged quickly as it's a small, non-breaking env-var addition. (https://github.com/nanocoai/nanoclaw/pull/2780)

**Prediction for next version:** The `NANOCLAW_NATIVE_CREDENTIALS` feature and the `NANOCLAW_DISABLE_UPGRADE_TRIPWIRE` env var are both small, well-scoped features that could ship together in a minor release.

## User Feedback Summary
- **Positive:** The budget-exhausted turn fix (#2759) directly addresses a previously frustrating "silent failure" experience, which users like `assapin` reported clearly. The community's thorough issue reporting (e.g., #2779 with linked Chromium bugs, #2784 with code snippets) indicates engaged, technically competent users.
- **Pain Points:** 
  - **Documentation drift** (#2783) — Long-time users may not notice, but new users are at risk of acting on outdated security advice.
  - **Deployment inflexibility** (#2781) — Sandbox packagers cannot easily integrate NanoClaw without OneCLI.
  - **Slack integration fragility** (#2779) — URL links are a core use case for agent chat outputs; this bug likely affects many users.
- **Satisfaction:** The quick turnaround on #2751 (4 days from report to fix) suggests responsive maintainers for bugs with clear reproduction steps.

## Backlog Watch
- **#1669 [OPEN, 72 days] Credential Proxy and Anthropic account bans** — Created 2026-04-06, last updated 2026-06-16 (after our bot update?), but no maintainer comment. This is a high-risk, compliance-related question that could affect user trust and legal exposure. The community needs a definitive answer. (https://github.com/nanocoai/nanoclaw/issues/1669)
- **#2783 [OPEN, 1 day] docs/SECURITY.md drift** — While only a day old, the documentation describes a "retired v1 trust model" and references a non-existent skill. Given that `SECURITY.md` is linked from `docs/README.md` and `docs/build-and-runtime.md`, this should be prioritized as a documentation bug affecting new-user onboarding. (https://github.com/nanocoai/nanoclaw/issues/2783)
- **#2779 [OPEN, 1 day] Slack @handle URL mangling** — With clear reproduction and user investment (linked similar Chromium bugs), this warrants a fix in the next patch cycle. (https://github.com/nanocoai/nanoclaw/issues/2779)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the NullClaw project digest for **2026-06-17**.

---

## NullClaw Project Digest — 2026-06-17

### 1. Today's Overview
The NullClaw project is in a **moderate activity state** today, driven entirely by community contributions to open issues and pull requests. No new releases were published, and no pull requests were merged or closed in the last 24 hours. The three open PRs are actively being updated, indicating ongoing development work, particularly around the cron/scheduler subsystem and Microsoft Teams authentication. The most critical open bug (incomplete answers from local Ollama models) has been dormant for nearly a week, suggesting a potential bottleneck in maintainer review or debugging resources.

### 2. Releases
**No new releases.** The latest stable version remains the release tagged `v2026.4.17`, published on 2026-04-17.

### 3. Project Progress
No pull requests were merged or closed in the last 24 hours. The three currently open PRs (all last updated today) represent the project's active development front:
- **#959** – `fix(cron): persist paired token for scheduler tool access` – Aims to resolve the scheduler authentication gap identified in Issue #839.
- **#958** – `fix(teams): accept lowercase serviceurl JWT claim and raise JWKS fetch cap` – Addresses 403 errors in MS Bot Framework connector-token validation.
- **#783** – `feat(cron): cron subagent, run history, JSON output, security hardening` – A major feature PR that has been open since April, adding a full cron subagent engine with database-backed scheduling and operator alerts.

### 4. Community Hot Topics
The most active discussion items currently are:
- **Issue #952** – [bug] Local model using ollama returns incomplete answers  
  *2 comments, last activity 1 day ago*  
  👤 Author: bloodgroup-cplusplus  
  **URL:** [Issue #952](https://github.com/nullclaw/nullclaw/issues/952)  
  **Analysis:** Users report that the agent truncates responses when using locally pulled Gemma models via Ollama. The attached screenshot shows incomplete sentences. No maintainer or fix PR has been linked yet. This is affecting local-model-first users, a key use case for the project.

- **Issue #839** – [bug] bit has no access to scheduler!?  
  *1 comment, last activity 1 day ago*  
  👤 Author: ats-bcon  
  **URL:** [Issue #839](https://github.com/nullclaw/nullclaw/issues/839)  
  **Analysis:** A long-standing authentication/permission gap where the `/pair` token is not available to the cron/schedule tool. The fix is already in PR #959 (authored by vernonstinebaker), which was updated today — the community and author are aligned on a solution.

### 5. Bugs & Stability
Two open bugs were updated in the last 24 hours. No new bugs were filed today.

| Severity | Issue | Description | Fix PR Exists? |
|----------|-------|-------------|----------------|
| **High** | #952 | Ollama (Gemma) returns truncated/incomplete answers affecting core agent output | No |
| **Medium** | #839 | `/pair` token not persisted for cron/scheduler tool access | Yes (#959) |

**Assessment:** Issue #952 is the single highest-impact bug for local-first users, but lacks a fix. Issue #839 has a clear path to resolution via PR #959.

### 6. Feature Requests & Roadmap Signals
No new feature requests were filed today. However, the long-standing **PR #783** (`feat(cron): cron subagent, run history, JSON output, security hardening`) continues to be updated, signaling that the maintainer or contributor is still actively working on integrating a full cron subagent engine. This feature is likely to land in the next minor version (`v2026.5.x` or `v2026.6.x`). It includes:
- DB-backed scheduler with history tables
- Support for skill, agent, and shell job types
- Per-job timezone offsets
- Structured JSON CLI output (`--json` flag)

### 7. User Feedback Summary
- **Pain point (Ollama integration):** A user is frustrated that the agent cannot provide complete sentences when using a local Gemma model via Ollama, which undermines trust in local-first workflows.
- **Pain point (authentication/permissions):** A user found that the `/pair` command fails to pass tokens to the scheduler tool, effectively breaking cron-based automation for paired instances.
- **Satisfaction:** No positive feedback or testimonials were recorded in the last 24 hours.

### 8. Backlog Watch
The following items require maintainer attention due to age and lack of resolution:

- **Issue #839** – [bug] bit has no access to scheduler!?  
  *Age: 60 days (opened April 18)*  
  **URL:** [Issue #839](https://github.com/nullclaw/nullclaw/issues/839)  
  **Status:** Fix PR #959 exists but is not yet merged. This is the longest-standing open bug with a known fix.

- **PR #783** – feat(cron): cron subagent, run history, JSON output, security hardening  
  *Age: 71 days (opened April 7)*  
  **URL:** [PR #783](https://github.com/nullclaw/nullclaw/pull/783)  
  **Status:** A major feature PR that is close to release-ready but has not been reviewed or merged. Unmerged for over two months — risk of bitrot if not addressed soon.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-17

## Today's Overview

The IronClaw project is in a high-velocity engineering sprint, with 50 issues and 50 PRs updated in the last 24 hours. Activity is heavily concentrated on the **Reborn WebUI v2** and **Engine V2** tracks, with a strong emphasis on fixing automation reliability, OAuth/authorization persistence, and tool-approval UX. The project closed 22 issues and merged 15 PRs in the past day, indicating a healthy cycle of discovery and resolution. No new releases were cut today, suggesting the team is consolidating features before a version bump.

## Releases

No new releases were published today. The most recent release remains the previous version. The absence of a release tag suggests the team is accumulating fixes and features on `main` for a planned cut.

## Project Progress

**15 PRs merged/closed** today. Key advances:

- **[#5003](https://github.com/nearai/ironclaw/issues/5003)** — Fix for stranded local-dev SSO automations on Railway, addressing the root cause of scheduled fires failing before thread creation. Merged.
- **[#4902](https://github.com/nearai/ironclaw/issues/4902)** — Vision support landed for OpenAI-compatible inline images (`/v1/chat/completions`), a major step in the attachments epic (#4644). Merged.
- **[#4858](https://github.com/nearai/ironclaw/issues/4858)** — Shell command details now visible in approval dialogs and activity history, fixing a long-standing UX gap where operators saw only "builtin.shell" with no context. Merged.
- **[#4954](https://github.com/nearai/ironclaw/issues/4954)** — Approval-gate denial now surfaces to the model instead of cancelling the run, preventing infinite re-block loops for automated workflows. Merged.
- **[#4995](https://github.com/nearai/ironclaw/issues/4995)** — Benchmarks now forward `NEARAI_API_KEY` to route Reborn runs through NEAR AI cloud instead of OpenRouter. Merged.

## Community Hot Topics

**Most active ongoing discussions (by comment count):**

| Issue/PR | Comments | Theme |
|----------|----------|-------|
| [#2721](https://github.com/nearai/ironclaw/issues/2721) — Engine V2: Milestone 0 + multi-route execution | 3 | Core architecture — single CodeAct path is too costly for simple tasks |
| [#4908](https://github.com/nearai/ironclaw/issues/4908) — Google Calendar shows "Activate" after active | 3 | UX confusion — state mismatch in extension management |
| [#4942](https://github.com/nearai/ironclaw/issues/4942) — Tool call failures not visible without refresh | 2 | SSE/state freshness — tool failure visibility gap |
| [#4764](https://github.com/nearai/ironclaw/issues/4764) — Denying shell approval leaves pending invocation | 2 | Approval UX — no feedback loop on denial |
| [#4761](https://github.com/nearai/ironclaw/issues/4761) — Agent stops after repeated tool failures | 2 | Resilience — no recovery from cascading tool failures |

**Underlying needs:** The community is signaling strong demand for **predictable agent behavior recovery** (tool failure handling, approval UX consistency) and **clearer state feedback** (when something is authorized, running, or blocked). The Engine V2 milestone (#2721) remains the structural root cause — many simple-task UX issues stem from one-size-fits-all orchestrator routing.

## Bugs & Stability

**New bugs reported today, ranked by severity:**

1. **[#4992](https://github.com/nearai/ironclaw/issues/4992)** **[HIGH]** — Local-dev SSO access mismatch causes Railway automations to fail before run/thread creation. *Fix merged in #5003.*
2. **[#4991](https://github.com/nearai/ironclaw/issues/4991)** **[HIGH]** — WASM Google Drive auth failures dead-end as `operation_failed` with no refresh-retry or `AuthRequired` gate.
3. **[#4986](https://github.com/nearai/ironclaw/issues/4986)** **[MEDIUM]** — Recurring automations can become permanently blocked waiting for tool approval (auth gate loop).
4. **[#4977](https://github.com/nearai/ironclaw/issues/4977)** **[MEDIUM]** — Approval-deny tool activity remains displayed as `RUN` until manual refresh.
5. **[#4972](https://github.com/nearai/ironclaw/issues/4972)** **[LOW]** — "New" button font size is larger than neighboring sidebar labels (visual inconsistency).

**Pattern:** The highest-severity bugs all involve **automation failure paths** — either the agent doesn't recover from tool/auth failures, or it cycles indefinitely because the execution loop doesn't propagate denial/failure signals correctly. The flurry of fix PRs (#4998, #5001, #4993, #4954) suggests the team is aggressively addressing these.

## Feature Requests & Roadmap Signals

**Top user-requested features emerging from today's data:**

- **OAuth token refresh for WASM extensions** — [#4991](https://github.com/nearai/ironclaw/issues/4991) requests that expired Google Drive tokens trigger refresh-retry or an `AuthRequired` gate instead of failing silently.
- **Preview deployments for PRs** — [#4881](https://github.com/nearai/ironclaw/issues/4881) asks for Vercel-like preview URLs so reviewers can test changes without local setup.
- **Binary document extraction >1 MB** — [#4999](https://github.com/nearai/ironclaw/issues/4999) requests scaling `google-drive.download_file` beyond the current WASM 1 MB round-trip cap after [#4997](https://github.com/nearai/ironclaw/issues/4997) added support for PDF/PPTX/DOCX/XLSX.
- **LLM usage persistence for Engine V2** — [#4985](https://github.com/nearai/ironclaw/issues/4985) requests that `/api/admin/usage` return non-empty data on `ENGINE_V2=true` deployments.

**Roadmap signal:** The Engine V2 multi-route execution epic (#2721) is progressing through its milestone evaluation phase (closed issue #2725). The team is measuring outcomes of orchestrator-first sprint before deciding on larger architecture changes.

## User Feedback Summary

**Real pain points observed:**

- **"Why won't this automation start?"** — Users creating scheduled automations encounter silent failures where the run never creates a thread or shows an error (`#4986`, `#4992`).
- **"Is this extension working or not?"** — State mismatch (active vs. "Activate" button, `#4908`; non-reusable OAuth across conversations, `#4913`) erodes trust in extension management.
- **"The tool failed — now what?"** — Agents that encounter tool failures stop without recovery (`#4761`), or the failure isn't visible until manual refresh (`#4942`, `#4977`).
- **"How do I create automations?"** — The empty state gives no guidance on starting automations via chat (`#4980`).
- **"Those dots make no sense"** — Recent run visualization (colored dots) lacks labels, tooltips, or explanation (`#4988`).

**Satisfaction signals:** The rapid-fix cadence on reported issues (most get a PR within 1–2 days) and the detailed "dogfooding" tracking issues (`#4692`, `#4879`) suggest the team is deeply engaged with user experience quality.

## Backlog Watch

**Issues needing maintainer attention:**

- **[#4692](https://github.com/nearai/ironclaw/issues/4692)** — Reborn Local Dogfooding (06/08–06/14): tracking issue with 0 comments, likely contains sub-issues that should be pulled out individually.
- **[#4876](https://github.com/nearai/ironclaw/issues/4876)** — Dependabot PR bumping 43 dependencies (including `rustls` and `refinery`): open since 2026-06-14, risk of merge conflicts accruing.
- **[#3890](https://github.com/nearai/ironclaw/issues/3890)** — Multi-tenant isolation contract tests (Opened 2026-05-22, still open): important for production readiness but seems deprioritized.
- **[#4518](https://github.com/nearai/ironclaw/issues/4518)** — Extension lifecycle E2E coverage (opened 2026-06-06): stalled while UI-focused work proceeded.

**Notable open PR close to merge:** [#5002](https://github.com/nearai/ironclaw/issues/5002) (order Recent threads by last interaction) — a simple UX fix that received no comments but addresses a widely noticed quirk.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for **2026-06-17**, generated from the provided GitHub data.

---

## LobsterAI Project Digest | 2026-06-17

### 1. Today's Overview

LobsterAI showed moderate development activity today, with a strong focus on closing out feature work. Four Pull Requests (PRs) were updated, three of which were merged or closed, indicating a healthy merge cadence. The single open issue remains stale (last updated over two months ago), but the active PR queue suggests the team is prioritizing functional improvements and bug fixes. No new releases were published, meaning the latest available version remains **v2026.4.1**. Overall, the project is in a stable state with key features like the *Cowork* task search and *Artifacts* preview system being refined.

### 2. Releases

**None.** No new versions were released in the last 24 hours. The latest version remains v2026.4.1.

### 3. Project Progress

Three PRs were successfully closed today, advancing several key areas of the application:

- **[#2170] fix(cowork): search tasks from database** — *Merged.* This is a significant UX improvement for the Cowork feature. Instead of only filtering a local cache of recent sessions, the system now queries the underlying SQLite database directly when a search term is provided. The existing session list behavior (home sidebar, pagination) remains unchanged when no query is active.
    - **Impact:** Faster and more accurate task search for users with many Cowork sessions.
- **[#2169] feat(artifacts): optimize preview card & browser preview experience** — *Merged.* A comprehensive update to the artifacts preview system. It unifies card styles, adds hover effects and sub-titles (e.g., "Open in Youdao Lobster Browser" for HTML), and reworks the "open with" menu to prioritize the internal browser.
    - **Impact:** A cleaner, more consistent user interface for viewing generated content.
- **[#2168] feat(cowork): add scroll-to-bottom control** — *Merged.* Adds a compact, floating button to scroll to the bottom of a Cowork conversation thread. Includes support for smooth scrolling, i18n, and mouse wheel passthrough.
    - **Impact:** Small but highly requested UX ergonomic fix for long conversation threads.

### 4. Community Hot Topics

- **[Issue #1425] [Open] 快捷键重复无校验** — This is the only issue updated today and has been open since April 3rd. It reports that the shortcut key settings allow duplicate bindings to be saved without any validation. The issue received a comment (likely a stale bot marking it as stale) but no official maintainer response. While it has minimal reactions (0 👍), the underlying need is clear: **users expect standard input validation in settings to prevent accidental overwrites of keyboard shortcuts.** This is a basic usability and data integrity issue.

### 5. Bugs & Stability

**Severity Level: Medium**

- **[PR #1424] [Open] fix(scheduledTasks): "Stop" IPC handler returns `{ success: true }` but does nothing** — *Status: Open since April 3rd, marked as stale.* This is a significant functional bug. The backend handler for stopping a scheduled task returns a success message to the UI without actually performing any action. The user also notes that failures for other scheduled task operations (create, update, delete) are written to Redux state but never displayed to the user.
    - **Risk:** Users will believe their scheduled tasks are stopped when they are not, leading to unexpected behavior and data corruption.
    - **Fix Status:** No fix is in flight. The PR requires maintainer review and a UI component to display errors.

### 6. Feature Requests & Roadmap Signals

The merged PRs today provide strong signals for the next minor release:

- **Improved Background Search:** The shift to database-backed search for Cowork tasks (PR #2170) is a clear response to scaling needs as users accumulate more sessions.
- **Richer Artifact Display:** The polish on preview cards and the internal browser experience (PR #2169) suggests the team is doubling down on the "All-in-One" workspace vision, making the app less reliant on external tools.
- **UX Micro-Interactions:** The scroll-to-bottom control (PR #2168) is a low-effort, high-value ergonomic fix.

**Prediction:** The next version (likely `v2026.6.x`) will focus on **polish and reliability** rather than new headline features, addressing these UX gaps and the scheduled tasks bug.

### 7. User Feedback Summary

- **Pain Point: Scheduled Tasks Reliability.** The detailed bug report in PR #1424 highlights a significant trust issue: users cannot rely on the scheduled task system to stop or confirm operations due to silent failures and misleading success messages.
- **Pain Point: Shortcut Key Validation.** Issue #1425 shows user frustration with a lack of basic input validation in a core settings feature.
- **Satisfaction Signal:** The swift merging of three PRs today (especially the Cowork search and Artifact UI improvements) indicates a team that is responsive to improving workflow efficiency and visual quality.

### 8. Backlog Watch

- **[PR #1424] [Open - Stale] fix(scheduledTasks): silent failures** — *Waiting: 75 days.* This is the most critical item in the backlog. It is a functional bug that renders a core feature (scheduled tasks) unreliable. It requires both a backend fix (the `stop` handler) and a frontend fix (displaying errors from Redux state). **This needs immediate maintainer attention.**
- **[Issue #1425] [Open - Stale] 快捷键重复无校验** — *Waiting: 75 days.* While less critical than the scheduled tasks bug, this is a basic UX issue. A simple validation check in the settings form would resolve it. The previous "stale" label may need to be removed if a maintainer plans to address it.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

Here is the **TinyClaw Project Digest** for **2026-06-17**.

---

## 1. Today's Overview
The TinyClaw project is in a **low-activity maintenance state** today. No issues were updated in the last 24 hours, and no new releases were published. The sole piece of activity is a single open Pull Request (#281) focused on fixing critical Windows compatibility issues. While the core repository appears stable, the lack of any community-reported bugs or feature discussions suggests a quiet development sprint, likely with maintainers focusing on quality-of-life improvements rather than new features.

## 2. Releases
**None.** No new releases were published today. The project remains on its last stable version.

## 3. Project Progress
**No PRs were merged or closed today.** The only open PR remains under review:
- **PR #281** (Open): *fix: Windows cross-platform support in CLI* – Targets three specific Windows-native bugs preventing the CLI from running outside of WSL.

## 4. Community Hot Topics
Only one item is active, generating the bulk of the discussion focus today:
- **PR #281: fix: Windows cross-platform support in CLI** – [GitHub Link](https://github.com/TinyAGI/tinyagi/pull/281)
  - *Author:* mperkins0155
  - *Analysis:* This PR addresses a clear pain point for Windows developers. The primary fix involves patching how `import.meta.url` handles Windows paths (where drive letters are doubled, e.g., `/C:/Users/`), which caused `MODULE_NOT_FOUND` errors. This is a high-value community contribution because it lowers the barrier to entry for a significant segment of the developer base. The lack of comments or reactions suggests the community is waiting for maintainer review rather than debating the implementation.

## 5. Bugs & Stability
**No new bugs were reported today.** However, the single open PR highlights a **medium-to-high severity** existing bug affecting Windows users:
- **Bug:** CLI crashes on native Windows due to path resolution errors (doubled drive letters).
- **Severity:** High (prevents CLI from running entirely).
- **Fix Status:** A fix exists in **PR #281**, currently awaiting review and merge.

## 6. Feature Requests & Roadmap Signals
**No new feature requests were made today.** The current signal points strongly toward **cross-platform stability** as the immediate roadmap priority. Given the nature of the open PR, the next minor patch release is likely to focus entirely on Windows compatibility fixes, with no new architectural features on the horizon.

## 7. User Feedback Summary
**No direct user feedback (issues, comments, or reactions) was recorded today.** The only implicit feedback comes from the author of PR #281, who identified that the CLI is effectively broken on native Windows (outside of WSL). This indicates a satisfaction gap for users operating in that environment. The lack of complaints may also suggest high satisfaction among Linux/macOS users, or simply low overall project engagement this period.

## 8. Backlog Watch
**No stale or long-unanswered issues or PRs were identified** in today’s data. The project backlog is clean, with zero open/unanswered items requiring maintainer attention. This is a healthy sign for project hygiene, though it may also indicate a small user base or a recent cleanup of old tickets. **PR #281** is the only open item and should be monitored for timely merging to avoid becoming stale.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-17

## Today's Overview
Activity is **low but focused**: 1 open enhancement issue and 2 open pull requests were updated in the last 24 hours, with no new releases or merged changes. The project remains in a **stable development phase**, with maintainers actively iterating on two feature branches — one for context command injection and one for agent model/effort selection. The community signal is quiet but constructive, with one new feature request for TTS format configurability. Overall, the project shows steady, incremental progress without signs of stagnation or urgent issues.

## Releases
No new releases today. The latest available release remains the previous version; no changelog or migration notes are applicable.

## Project Progress
No pull requests were merged or closed today. Two open PRs saw recent updates but remain unmerged:

- **PR #1124** — _Add context command support for chat turns_ ([link](https://github.com/moltis-org/moltis/pull/1124))  
  Author: gptme-thomas. This feature lets deployments define a `chat.context_command` that runs before each turn, injecting stdout into the prompt context — useful for dynamic runtime context injection without manual pasting. Still open.

- **PR #1125** — _Support model and effort selection for external agents_ ([link](https://github.com/moltis-org/moltis/pull/1125))  
  Author: gptme-thomas. Adds `/model` command support for external agents, including configurable `models` and `efforts` lists. Still open.

## Community Hot Topics
Only one active issue and two PRs were updated; none have accumulated high comment counts or reaction scores.

**Most notable discussion:**
- **Issue #1126** — _[Feature]: allow to choose the format of tts output_ ([link](https://github.com/moltis-org/moltis/issues/1126))  
  Author: khimaros | Created & updated 2026-06-16 | 1 comment  
  Requests the ability to select TTS output format (e.g., WAV vs MP3 vs raw PCM). The single comment indicates initial interest but no broader debate yet. This reflects a **user need for flexibility in voice output pipelines**, possibly for integration with different downstream systems or storage constraints.

## Bugs & Stability
No bugs, crashes, or regressions were reported or updated in the last 24 hours. The project appears stable with no active stability concerns.

## Feature Requests & Roadmap Signals
The only new feature request is **Issue #1126** — TTS output format selection. Given the low complexity of this change (likely a config parameter + format conversion logic), it could be a candidate for the next minor release if the maintainer prioritizes it. The two open PRs (#1124 and #1125) are more likely to land first, as they are already implemented and under review.

**Likely next-version features:**
1. Context command support (PR #1124)
2. External agent model/effort selection (PR #1125)
3. Possibly TTS format configurability (Issue #1126)

## User Feedback Summary
The only direct user feedback is from the author of Issue #1126, who explicitly searched existing requests before creating the enhancement. This suggests a **thoughtful user who values prior art** but found a gap in TTS output customization. No satisfaction/dissatisfaction signals (e.g., complaints, praise) were present in other updates. The project lacks active user discussion this period, which could indicate either low engagement or general satisfaction.

## Backlog Watch
- **No long-unanswered issues or PRs** require maintainer attention at this time. All open items have recent activity (last update within 24 hours) and are being actively reviewed.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-17

## Today's Overview
CoPaw shows **high activity** today with 41 issues and 40 PRs updated in the last 24 hours, alongside one new beta release. The project is actively addressing stability concerns — particularly around macOS SIGSEGV crashes, context compaction freezes, and cron scheduling bugs. A strong wave of **first-time contributor PRs** (6 today) signals growing community engagement, though the project faces pressure from multiple concurrent bug reports affecting core reliability. The maintainer team is responsive, with 22 issues and 20 PRs closed/merged in the period.

## Releases
**New: v1.1.12-beta.1**
- **Security fix:** Keychain master key isolation per install
- **Desktop hardening:** Tauri Windows CI robustness against crates.io fetch failures
- **Refactoring:** Ongoing internal improvements

*No breaking changes or migration notes reported. This is a beta release; users on stable should evaluate before upgrading.*

## Project Progress
**20 PRs merged/closed today**, advancing multiple areas:

**Core & Backend Fixes:**
- Fixed Gemini tool schema validation (PR #5226) — `additionalProperties` and `anyOf` patterns causing 400 errors
- Fixed message formatter for non-OpenAI providers in title generation and skill optimization (PR #5228)
- Deep copy fix for cached agent configurations to prevent runtime pollution (PR #5229, #5240)
- Added timeout protection to context compaction to prevent process freeze (PR #5242)
- Increased cron misfire grace window from 60s to 3600s (PR #5241)
- Fixed Tauri Desktop plugin dependency startup loop (PR #5238)

**Console & UI Improvements:**
- Added session filter by title (PR #5178)
- Added simple mode with flat navigation (PR #5222)
- Added clickable OSC 8 hyperlinks in ConsoleChannel (PR #5248)
- Empty response fallback message in chat (PR #5232)
- Vietnamese README translation (PR #5245)
- SEO and documentation page optimization (PR #5202)

**Testing:**
- Sprint 2.4 integration tests for cron execution and tool API (PR #5201)

## Community Hot Topics
**Most Discussed Issues:**

1. **[#5218 — Sub-agent context compaction process freeze](https://github.com/agentscope-ai/CoPaw/issues/5218)** (14 comments)
   - Critical: entire QwenPaw freezes when sub-agents trigger context compaction
   - Underlying need: synchronous blocking LLM call inside compaction routine
   - Fix PR #5242 now submitted

2. **[#5063 — Integrate Headroom for 60-95% token reduction](https://github.com/agentscope-ai/CoPaw/issues/5063)** (6 comments)
   - Feature request for reversible context compression layer
   - PR #5244 now submitted by the same author

3. **[#4625 — MiniMax-M2.5 XML thinking format incompatibility](https://github.com/agentscope-ai/CoPaw/issues/4625)** (6 comments)
   - Long-running issue (since May 22) — model returns XML-formatted thinking content that QwenPaw cannot parse

4. **[#5167 — Feishu CardKit streaming slow for long replies](https://github.com/agentscope-ai/CoPaw/issues/5167)** (5 comments, closed)
   - Community member provided detailed UX feedback on character-by-character rendering

5. **[#5161 — Long conversation unresponsiveness](https://github.com/agentscope-ai/CoPaw/issues/5161)** (5 comments)
   - Related to #5218 — context accumulation causes complete stall

## Bugs & Stability

**Critical (process crash/unresponsive):**
| Bug | Impact | Fix Status |
|-----|--------|------------|
| **#5243** — ChromaDB Rust binding SIGSEGV on macOS (48 crashes/2 days) | Process crash loop | PR #5246 submitted (config overrides) |
| **#5209** — Tauri Desktop crash loop on macOS ARM64 | Desktop app unusable | PR #5238 merged |
| **#5218** — Context compaction process freeze | Complete unresponsiveness | PR #5242 submitted |
| **#5235** — Cron tasks not executing | Scheduled automation broken | Under investigation |
| **#5214** — DingTalk Stream silent after sleep | Channel permanently dead | Needs maintainer attention |

**High (data loss/incorrect behavior):**
| Bug | Impact | Fix Status |
|-----|--------|------------|
| **#5206** — Agent config cache pollution | `agent.json` silently overwritten | PR #5229/#5240 merged |
| **#5250** — Cron tasks interrupt main conversation | Workflow corruption | Reported today |
| **#5208** — Assistant message count mismatch | Models with `reasoning` blocks break | Under investigation |
| **#5207** — Inconsistent path resolution | Workspace tools return different results | Open |

**Medium (functionality degradation):**
| Bug | Impact | Fix Status |
|-----|--------|------------|
| **#5184** — Local model providers not showing | UI regression in v1.1.11.post2 | Closed |
| **#4988** — Windows MAX_PATH overflow | Session file creation fails | Closed |
| **#5233** — Ollama model switch missing | UI regression | Closed |

## Feature Requests & Roadmap Signals
**High-community-interest features submitted this period:**

1. **Headroom Context Compression** (#5063) — PR #5244 submitted by requester; could land in v1.1.13
2. **Agent Self-Evolution Mechanism** (#5205) — Learning from mistakes with auto-correction; ambitious but aligns with long-term agent improvement
3. **Enterprise WeChat mixed media** (#5217) — Image+text combined messages; channel-specific enhancement
4. **Workspace temporary file optimization** (#5225) — Storage location for model-generated files
5. **Ponytail coding philosophy** — PR #5247 introduces formalized coding rules and zero-dep code indexer

**Likely in next release (v1.1.13):**
- Headroom compression (PR #5244)
- ChromaDB macOS crash mitigation (PR #5246)
- Cron misfire grace window increase (PR #5241)
- Console UX improvements (simple mode, session filter, clickable links)

## User Feedback Summary
**Satisfaction signals:**
- Active community submitting detailed UX improvement suggestions (Feishu streaming, sidebar simplification, UI proportions)
- Multiple first-time contributors demonstrating low barrier to entry
- Vietnamese translation submission shows international community growth

**Key pain points:**
- **Stability crisis on macOS:** "48 restarts in 2 days" (#5243) and "crash loop" (#5209) indicate serious platform-specific issues
- **Reliability under load:** Long conversations consistently cause freezes, cron tasks silently fail, channel connections die after sleep
- **Model compatibility:** MiniMax XML output, Gemini tool schema, reasoning block parsing — each new model provider exposes integration gaps
- **Configuration integrity:** Cache pollution bugs erode user trust in persistent settings

## Backlog Watch
**Issues needing maintainer attention:**

| Issue | Age | Reason |
|-------|-----|--------|
| **[#4625](https://github.com/agentscope-ai/CoPaw/issues/4625) — MiniMax-M2.5 XML format** | 26 days | Mentioned in PR discussion but no fix merged; affects paying users of MiniMax |
| **[#5161](https://github.com/agentscope-ai/CoPaw/issues/5161) — Long conversation unresponsiveness** | 5 days | Core UX issue, related to #5218 but distinct |
| **[#5208](https://github.com/agentscope-ai/CoPaw/issues/5208) — Reasoning block format mismatch** | 2 days | Blocks all models using `reasoning` content type |
| **[#4622](https://github.com/agentscope-ai/CoPaw/pull/4622) — DataPaw plugin PR** | 26 days | Large plugin submission under review, may need core team feedback |
| **[#5088](https://github.com/agentscope-ai/CoPaw/pull/5088) — Governance & sandbox interface** | 7 days | Breaking change discussion; requires architectural decision |

---

**Project Health Assessment:** 🔴 High activity with significant stability challenges. The v1.1.12-beta.1 release addresses security and desktop CI, but the volume of crash-related issues (especially macOS-specific) suggests this should be a priority for the next stable release. Community growth is strong, with increasing international contributions.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

Based on the provided GitHub data for ZeptoClaw (github.com/qhkm/zeptoclaw) as of 2026-06-17, here is the project digest.

---

## ZeptoClaw Project Digest: 2026-06-17

### 1. Today's Overview
The project experienced minimal activity in the last 24 hours, with zero issues updated or created and no new releases. The sole piece of activity is an open automated dependency pull request (PR #630) to update the Debian base image. While the low volume suggests a stable phase, the complete lack of user-reported issues or community interaction indicates the project may be in a maintenance lull or waiting for maintainer input on pending tasks.

### 2. Releases
None. No new releases were made in the last 24 hours.

### 3. Project Progress
No pull requests were merged or closed today. There are no features advanced or bugs fixed to report from the last 24 hours.

### 4. Community Hot Topics
The only active item is a single, automated pull request:
- **PR #630** (Open): chore(deps): bump debian from `b6e2a15` to `4e401d9`. This is a routine dependency update triggered by Dependabot to update the Docker base image from one `trixie-slim` version to another. It has no comments or reactions. The underlying need is to maintain supply chain security and stability by using the latest available base image, but it requires a maintainer to review and merge.

### 5. Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours. The project appears stable based on available data.

### 6. Feature Requests & Roadmap Signals
No new feature requests were submitted in the last 24 hours. There is no data to suggest upcoming features for the next version.

### 7. User Feedback Summary
No user feedback (issues, comments, or reactions) was recorded in the last 24 hours. There is no data to gauge user satisfaction, pain points, or use cases at this time.

### 8. Backlog Watch
No items are currently identified as backlog watch candidates. There are no long-unanswered issues or PRs that require immediate maintainer attention, though open PR #630 may become a candidate if it remains unmerged for an extended period.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-17

## Today's Overview
ZeroClaw is in a period of **high-intensity development and bug-fixing following the v0.8.0 release**, with 50 PRs and 36 issues updated in the last 24 hours. Activity is concentrated across three fronts: stabilizing core runtime issues (particularly around tool execution, WebSocket lifecycle, and channel session persistence), advancing the Gateway/A2A agent discovery surface for v0.8.2, and addressing documentation and onboarding regressions reported by users of the freshly shipped v0.8.0 binaries. The project maintains a balanced open/closed ratio with 38 open PRs and 12 recently merged or closed. No new releases were published today, but the v0.8.2 milestone is visibly in flight with draft PRs and tracker issues.

## Releases
**No new releases today.** The latest published version remains v0.8.0. However, a significant regression in the v0.8.0 prebuilt binaries has been identified (see Bugs & Stability section), and the v0.8.2 milestone is actively under development with draft PRs and tracker issues visible.

## Project Progress
**12 PRs merged or closed today** across several areas:

- **CI/Labeling**: `fix(ci): narrow Kilo provider path label` (#7812) — fixes the labeler to avoid false positives on schema files
- **Testing & Quality**: Multiple test improvements including Windows shell code page decoding tests (#7670), gateway public event history filtering tests (#7719), and coverage for retrieval cache key boundaries (#7656)
- **Documentation**: `fix(docs): preserve protected literals in translations` (#7774) — addresses i18n quality by ensuring product/provider/protocol names aren't mistranslated
- **Channel stability**: Fixes for Discord slash-command reconciliation persistence (#7784), WhatsApp Web media markers (#7811), Matrix room management recovery (#7661), and email channel missing message IDs (#7767)
- **Runtime fixes**: Fixed native tool narration routing from stdout to stderr (#7773), heartbeat run listing for zero limits (#7721), and agent turn no-progress loop detection across interleaved tool calls (#7681)
- **Integration polish**: Global channel settings exposed in the dashboard (#7651), doctor validation fix for custom/openai-compatible providers (#7793), and pairing code recovery for alternate ports (#7798)

## Community Hot Topics
The most active discussions this period reveal **three deep user needs**:

1. **Documentation and onboarding barriers** — Issue #7758 ("It doesn't matter how good the code is if the documentation is crap") closed with 2 comments but captures a widespread frustration. User `t-cc` reports being unable to write a configuration file or find correct syntax. This ties directly to Issue #7762 (Cron documentation missing) and the consensus in #7758 that Quickstart guidance is inadequate.

2. **MCP tool availability inconsistency** — Issue #7756 (native/MCP tools unavailable on OpenAI Responses/reasoning and Anthropic turns) with 1 comment, rated S1 (workflow blocked). User `perlowja` reports that MCP server tools register correctly but are not actually delivered to the model depending on the provider, making the feature unreliable across the most popular model families.

3. **WebSocket lifecycle coupling** — Issue #7759 (Decouple gateway WebSocket lifetime from agent turn lifecycle) by `NiuBlibing` with 2 comments, tagged P1. Users want the ability to resume an agent turn after a WebSocket disconnect rather than having the turn cancelled, a critical UX issue for the gateway web chat.

- 🔗 Issue #7758: [It doesn't matter how good the code is if the documentation is crap](https://github.com/zeroclaw-labs/zeroclaw/issues/7758)
- 🔗 Issue #7756: [native/MCP tools unavailable on OpenAI Responses/reasoning and Anthropic turns](https://github.com/zeroclaw-labs/zeroclaw/issues/7756)
- 🔗 Issue #7759: [Decouple gateway WebSocket lifetime from agent turn lifecycle](https://github.com/zeroclaw-labs/zeroclaw/issues/7759)

## Bugs & Stability
**Ten new bugs reported today**, ranked by severity:

**S1 — Workflow blocked (critical):**
- `#7756`: MCP tools unavailable on OpenAI/Anthropic turns (fix likely requires provider-layer changes)
- `#7796`: Runtime profile `max_tool_iterations` ignored by direct agent turns (fix PR #7778 in progress)
- `#7804`: Code history sends non-alternating Anthropic messages causing 400 errors
- `#7787`: Prebuilt v0.8.0 binaries ship without Slack/Discord channel features (regression from 0.7.x)

**S2 — Degraded behavior (high):**
- `#7809`: Channel turns ignore runtime-profile strict/parallel tool flags
- `#7810`: `git_operations` tool returns unhelpful "Not in a git repository" with no recovery hint
- `#7799`: Resumed Code sessions reopen with blank transcript
- `#7803`: Active Code sessions cannot switch agents directly
- `#7800`: macOS keybindings misleading/unreachable in Code/Chat
- `#7808`: CLI secret prompts give no feedback after paste
- `#7753`: Channel session persistence ordering race across concurrent same-sender workers

Several bugs have corresponding fix PRs already submitted: #7796 has #7778 (emitting pending tool calls earlier), #7798 (pairing code recovery) has PR #7798, and #7787 (missing Slack/Discord features) has a discussion thread but no direct fix noted yet.

## Feature Requests & Roadmap Signals
**Notable user-requested features filed today:**

- **Per-agent Dream Mode opt-in** (#7794 by `JordanTheJet`): Request to make Dream Mode per-agent and add `/dream` chat command + gateway Dreams view. Already tied to tracker #6693 for base Dream Mode.
- **Free-form ask_user over Gateway WebSocket** (#7776 by `NiuBlibing`): Users need proper interactive approval flows, not just fast-fail behavior.
- **Cron documentation and per-task model selection** (#7762 by `touhidurrr`): Users want to run cron jobs with specific (cheaper) models for low-priority tasks.

**Roadmap signals** (items likely for v0.8.1 or v0.8.2):
- A2A agent discovery surface (PR #7763, intentionally targeted at v0.8.2)
- WASM plugin program tracker (#7314, milestone v0.8.2)
- v0.8.1 integration/channel/provider/tool queue (#6970) actively tracked

🔗 Issue #7794: [Per-agent opt-in Dream Mode](https://github.com/zeroclaw-labs/zeroclaw/issues/7794)
🔗 Issue #7776: [Free-form ask_user over gateway WebSocket](https://github.com/zeroclaw-labs/zeroclaw/issues/7776)
🔗 PR #7763: [A2A agent discovery surface (v0.8.2)](https://github.com/zeroclaw-labs/zeroclaw/pull/7763)

## User Feedback Summary
**Clear dissatisfaction patterns** are emerging, concentrated on:

1. **Documentation quality** — Multiple users report being unable to configure ZeroClaw after installing v0.8.0. Issue #7758 explicitly states "It's impossible to write a configuration file." This is the most urgent UX pain point.

2. **Feature regressions in prebuilt binaries** — The v0.8.0 prebuilt release removed Slack and Discord channel support that worked in v0.7.x. Users who don't compile from source lose critical channel features.

3. **Inconsistent tool execution** — MCP tools and runtime profiles behave differently depending on which provider is used, causing unpredictable agent behavior.

4. **Session management fragility** — Lost sessions on reconnect, blank transcripts on resume, inability to switch agents mid-session — users working with persistent agent interactions are hitting multiple state management bugs.

**Satisfaction signals**: The Gateway WebSocket decoupling (#7759) and A2A discovery (PR #7763) features indicate the project is investing in areas users want; the community is actively contributing with 10 unique authors in today's PRs and issues.

## Backlog Watch
**Items requiring maintainer attention:**

- 🔗 Issue #5266 (created Apr 3, 2026): [Pairing code not shown on alternate port](https://github.com/zeroclaw-labs/zeroclaw/issues/5266) — Open for 75 days, P1 security issue, 2 comments. A fix PR #7798 was submitted today, but the issue remains unassigned and unresolved after over two months.

- 🔗 Issue #6407 (created May 5, 2026): [Generated i18n catalogs translate code literals](https://github.com/zeroclaw-labs/zeroclaw/issues/6407) — Open for 43 days, P2 docs bug, status "accepted" and "in-progress" but no fix PR yet. With new documentation complaints surfacing, this i18n quality issue compounds the broader docs problem.

- 🔗 Issue #6648 (created May 14, 2026): [Cron `session_target=main` still runs isolated](https://github.com/zeroclaw-labs/zeroclaw/issues/6648) — Open for 34 days, P2 runtime bug, described as S2 severity but blocking crucial cron+session interaction. No assignee.

- 🔗 PR #7661 (created Jun 14, 2026): [recover Matrix room management](https://github.com/zeroclaw-labs/zeroclaw/pull/7661) — Open 3 days, the PR itself is moving but the base functionality was missing from the channel API since the v0.8.0 refactor, creating a Matrix parity gap that affects real users.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*