# OpenClaw Ecosystem Digest 2026-07-31

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-07-31 01:46 UTC

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

# OpenClaw Project Digest — 2026-07-31

## 1. Today's Overview

OpenClaw remains a high-velocity project: **500 issues** and **500 PRs** were updated in the last 24 hours (17 issues closed; **84 PRs merged/closed** vs. 416 still open), with **no new releases** published. Activity skews heavily toward stability and security triage: the most-commented items include a P1 "text leakage between tool calls" vulnerability ([#25592](https://github.com/openclaw/openclaw/issues/25592)), a P0 gateway memory-leak/OOM crash report ([#91588](https://github.com/openclaw/openclaw/issues/91588)), and a crash-loop breaker permanently suppressing Discord/WhatsApp ([#115326](https://github.com/openclaw/openclaw/issues/115326)). A large share of open issues carry `clawsweeper:needs-maintainer-review` and `needs-product-decision` labels, indicating a bottleneck in maintainer capacity rather than a lack of incoming bug reports. On the positive side, 84 PRs landed today, with fresh fixes across the gateway upgrade path, Codex/WebSocket handling, Android lifecycle, and the edit tool — suggesting steady throughput once PRs clear review.

## 2. Releases

**No new releases** in this window. Note: issue [#48920](https://github.com/openclaw/openclaw/issues/48920) (P0, `impact:ux-release-blocker`) reports that live docs are already ahead of the latest shipped version (`IsolatedSessions` documented but absent in 2026.3.13), which may complicate release communication until the next cut.

## 3. Project Progress

Of the 84 merged/closed PRs today, two are visible in the top-30 sample:

- [PR #116216](https://github.com/openclaw/openclaw/pull/116216) — `fix(ai): prevent websocket cache clobber on concurrent acquire` (closed; prevents orphaned `previous_response_id` continuation in Codex WebSocket sessions).
- [PR #116613](https://github.com/openclaw/openclaw/pull/116613) — `fix(ci): settle custodian mobile layout assertions` (closed; fixes E2E flake on 390px viewport sampling).

High-value fixes currently open and awaiting review/merge:

- [PR #116558](https://github.com/openclaw/openclaw/pull/116558) — Gateway wedges on **every startup** when legacy runtime-state files conflict with SQLite (closes [#112867](https://github.com/openclaw/openclaw/issues/112867); P1, diamond lobster).
- [PR #116600](https://github.com/openclaw/openclaw/pull/116600) — P0 fix: edit tool's fuzzy matching silently normalizes CJK punctuation / smart quotes / NBSP on non-targeted line segments; preserves original bytes outside the replacement span.
- [PR #116604](https://github.com/openclaw/openclaw/pull/116604) — Codex app-server turns lose the real answer when a trailing `NO_REPLY` consumes a late duplicate subagent completion event.
- [PR #116616](https://github.com/openclaw/openclaw/pull/116616) — Approved async `exec` resumes with mangled output (newlines/indentation collapsed, ~400-char truncation); fix preserves the full command view.
- [PR #116579](https://github.com/openclaw/openclaw/pull/116579) — False "port 18789 in use" errors behind Tailscale Serve are now diagnosed correctly.
- [PR #116593](https://github.com/openclaw/openclaw/pull/116593) — Android phone + Wear OS device work preserved across Activity lifecycle changes.
- [PR #116614](https://github.com/openclaw/openclaw/pull/116614) — WhatsApp `resolveTurn` now declares `runDispatchLifecycle`, fixing dispatch assertion failures.
- [PR #116584](https://github.com/openclaw/openclaw/pull/116584) — Preserves valid non-off thinking levels for runtime-selected Ollama models (automerge armed).
- [PR #116223](https://github.com/openclaw/openclaw/pull/116223) — Sandboxed skills now honor the configured agent workspace instead of `~/.openclaw/workspace` defaults.

Feature-side: [PR #116606](https://github.com/openclaw/openclaw/pull/116606) improves local-model onboarding (adds LM Studio to the guided provider flow), [PR #116611](https://github.com/openclaw/openclaw/pull/116611) stops offering unsupported Gemini/Antigravity CLI OAuth setups, and [PR #116618](https://github.com/openclaw/openclaw/pull/116618) sends private Slack notices for allowlist-denied mentions.

## 4. Community Hot Topics

| Issue | Comments | Signal |
|---|---|---|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) — Text between tool calls leaks to messaging channels (P1, diamond lobster) | 38 | Top concern: internal narration/error handling becomes visible user-facing messages in Slack/iMessage; also carries `impact:security`. |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) — Gateway memory leak: RSS 350MB → 15.5GB over days, OOM crash loops (P0, platinum hermit) | 22 | Long-running production operators are hitting repeated `launchd-handoff` restart cycles. |
| [#115326](https://github.com/openclaw/openclaw/issues/115326) — Crash-loop breaker permanently suppresses Discord/WhatsApp; `channels.start` recovery fails with WebSocket 1006 (P1) | 20 | Reported Jul 28 — a regression that strands channels with no working documented recovery. |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) — Feat: tiered bootstrap file loading (P2) | 17 | Token-budget pain for large workspaces; sub-agents/cron load files they never use. |
| [#102175](https://github.com/openclaw/openclaw/issues/102175) — Embedded prompt cache breaks across room-event/policy/Responses boundaries (P1 regression) | 16 | Cost/latency impact on long-lived embedded sessions; `impact:auth-provider`. |
| [#99551](https://github.com/openclaw/openclaw/issues/99551) — Codex worker runaway hardening sprint (tracker) | 15 | Cross-cutting stability tracker spawned from an incident; multiple child issues. |
| [#50090](https://github.com/openclaw/openclaw/issues/50090) — Community Skill Development & ClawHub ecosystem gap (P2) | 15 | 2 👍; users want a living skill ecosystem, cite "Driftnet" disconnect. |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) — `steer` mode does not inject messages mid-turn (P1) | 15 | 4 👍; blamed on `KeyedAsyncQueue` regression from commit `9889c6da5`. |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) — Bootstrap files in `agentDir` silently ignored (P1) | 14 | 5 👍; only workspace-level bootstrap files are injected into the system prompt. |

Underlying needs: **(1)** reliability of message delivery and session-state integrity (leaks, suppression, drops), **(2)** memory/context cost governance (OOM leaks, prompt-cache breaks, bootstrap token waste), and **(3)** ecosystem extensibility (ClawHub skills, sub-agent orchestration hooks, cost budgets).

## 5. Bugs & Stability

Ranked by severity (P0 → P1), with fix status:

- **[P0] [#91588](https://github.com/openclaw/openclaw/issues/91588)** — Gateway RSS grows unboundedly to 15.5GB; OOM kills trigger repeated restart cycles. *No fix PR visible yet.*
- **[P0] [#48920](https://github.com/openclaw/openclaw/issues/48920)** — Live docs ahead of release (`IsolatedSessions` missing in 2026.3.13); marked release-blocking UX impact.
- **[P0] [PR #116600](https://github.com/openclaw/openclaw/pull/116600)** *(fix ready)* — Edit tool fuzzy match corrupts non-targeted Unicode on the same line (CJK punctuation, half-width katakana, smart quotes, NBSP).
- **[P1] [#25592](https://github.com/openclaw/openclaw/issues/25592)** — Text between tool calls leaks to messaging channels (security/UX); 38 comments; awaiting maintainer review + product decision.
- **[P1] [#115326](https://github.com/openclaw/openclaw/issues/115326)** — Crash-loop breaker permanently suppresses Discord/WhatsApp; documented recovery (WebSocket 1006) fails.
- **[P1] [#29387](https://github.com/openclaw/openclaw/issues/29387)** — Per-agent `agentDir` bootstrap files (SOUL.md/AGENTS.md/TOOLS.md/USER.md) silently ignored.
- **[P1] [#51396](https://github.com/openclaw/openclaw/issues/51396)** — Regression: `clearUnboundScopes()` strips operator scopes for non-local token-auth clients, breaking `chat.send`.
- **[P1] [#51429](https://github.com/openclaw/openclaw/issues/51429)** — A developer's hardcoded path (`/Users/wangtao`) was merged and shipped; OpenClaw created the folder and set it as workspace.
- **[P1] [#116525](https://github.com/openclaw/openclaw/issues/116525)** *(new Jul 30)* — Unrelated plugin-host cleanup permanently stops the shared GPT-Live browser broker; `talk.catalog` still reports ready.
- **[P1] [#116201](https://github.com/openclaw/openclaw/issues/116201)** *(new Jul 30)* — Realtime voice retains unbounded provider/consult state under slow/bursty behavior.
- **[P1] [#99586](https://github.com/openclaw/openclaw/issues/99586)** — Runtime tool surface returns blank body after gateway-touching operations; container restart only briefly clears it.

Additional regressions tracked: [#102175](https://github.com/openclaw/openclaw/issues/102175) (prompt cache breaks across boundaries), [#82662](https://github.com/openclaw/openclaw/issues/82662) (isolated cron timed out before runner start), [#100778](https://github.com/openclaw/openclaw/issues/100778) (preflight compaction failure locks Composer into "terminated"). Fix PRs exist for several adjacent items — see §3 (`#116558`, `#116604`, `#116616`, `#116579`, `#116593`, `#116614`).

## 6. Feature Requests & Roadmap Signals

Most-voted / most-linked feature signals:

- **Cost governance**: [#42475](https://github.com/openclaw/openclaw/issues/42475) per-agent cost budgets enforced at gateway (`linked-pr-open`) — likely candidate for next release given the P0 memory/Prompt-cache cost complaints.
- **Skills ecosystem**: [#50090](https://github.com/openclaw/openclaw/issues/50090) ClawHub/community skills (15 comments, 2 👍); [#80213](https://github.com/openclaw/openclaw/issues/80213) skill author-defined `setup.script` hook (4 👍, linked PR); [#50199](https://github.com/openclaw/openclaw/issues/50199) skill priority configuration (P3, stale).
- **Multi-agent orchestration**: [#27445](https://github.com/openclaw/openclaw/issues/27445) `announceTarget` for sub-agent completion routing (5 👍, linked PR); [#22358](https://github.com/openclaw/openclaw/issues/22358) post-subagent completion hook (linked PR); [#35203](https://github.com/openclaw/openclaw/issues/35203) and [#48874](https://github.com/openclaw/openclaw/issues/48874) — two competing multi-agent architecture RFCs (capability profiling/blackboard vs. shared-LLM + isolated sessions + public KB).
- **Context/token efficiency**: [#22438](https://github.com/openclaw/openclaw/issues/22438) tiered bootstrap loading (linked PR, 17 comments).
- **Channel improvements**: [#20786](https://github.com/openclaw/openclaw/issues/20786) Telegram Business Bot support (6 👍, linked PR); [#33413](https://github.com/openclaw/openclaw/issues/33413) Slack tool-level progress in thread status (3 👍); [#50739](https://github.com/openclaw/openclaw/issues/50739) system-event bypass-queue mode.
- **Session hygiene**: [#49259](https://github.com/openclaw/openclaw/issues/49259) prune stale orphaned Dashboard sessions; [#67413](https://github.com/openclaw/openclaw/issues/67413) per-agent dreaming config (5 👍, stale).
- **Governance**: [#96675](https://github.com/openclaw/openclaw/issues/96675) owner-signed responsibility gates for assistant memory/actions (2 👍).

**Prediction**: cost-budget enforcement (#42475) and tiered bootstrap loading (#22438) are the most "next-release-ready" features (both have open linked PRs and address the dominant token/cost pain in the tracker). `announceTarget`/post-subagent hooks (#27445/#22358) could land together as one orchestration improvement.

## 7. User Feedback Summary

- **Stability is the #1 pain point**: repeated OOM crashes from the gateway leak ([#91588](https://github.com/openclaw/openclaw/issues/91588)), permanent channel suppression ([#115326](https://github.com/openclaw/openclaw/issues/115326)), and crash-looping multi-agent gateways ([#72015](https://github.com/openclaw/openclaw/issues/72015)).
- **Message loss / misrouting is widespread**: Feishu image media dropped before outbound payload ([#41744](https://github.com/openclaw/openclaw/issues/41744)), WhatsApp missed-message backfill gap ([#50093](https://github.com/openclaw/openclaw/issues/50093)), Telegram group media saved only as placeholder text ([#40440](https://github.com/openclaw/openclaw/issues/40440)), replies never reaching originating channels ([#54531](https://github.com/openclaw/openclaw/issues/54531)).
- **Trust & safety concerns**: cron sessions hallucinate and deliver fabricated output on tool failure ([#49876](https://github.com/openclaw/openclaw/issues/49876)); internal text leaking to channels ([#25592](https://github.com/openclaw/openclaw/issues/25592)).
- **Config/documentation friction**: XDG_CONFIG_HOME not expanded during skill install ([#53628](https://github.com/openclaw/openclaw/issues/53628)); live docs ahead of release ([#48920](https://github.com/openclaw/openclaw/issues/48920)); a developer's personal path shipped in prod ([#51429](https://github.com/openclaw/openclaw/issues/51429) — notable anger from a Chinese-speaking user).
- **Satisfaction signals**: high 👍 counts on fixes (e.g., 7 👍 on sandbox workspace-access fix [#37634](https://github.com/openclaw/openclaw/issues/37634), 6 👍 on Telegram Business) and an active community submitting 84 merged PRs/day; automation like ClawSweeper and `automerge`-armed PRs indicate a maturing contribution pipeline.

## 8. Backlog Watch

Items needing maintainer/product-decision attention (oldest first):

- [#22438](https://github.com/openclaw/openclaw/issues/22438) — Tiered bootstrap loading (Feb 21, P2, linked PR open, needs product decision).
- [#25592](https://github.com/openclaw/openclaw/issues/25592) — Text leakage to channels (Feb 24, P1, security, **38 comments**, needs maintainer review + security review + product decision).
- [#29387](https://github.com/openclaw/openclaw/issues/29387) — Bootstrap files in `agentDir` ignored (Feb 28, P1, 5 👍, needs security review).
- [#41744](https://github.com/openclaw/openclaw/issues/41744) — Feishu read-image media loss (Mar 10, P1, stale).
- [#47975](https://github.com/openclaw/openclaw/issues/47975) — Subagent sessions persist; main session unresponsive (Mar 16, P1, stale).
- [#48810](https://github.com/openclaw/openclaw/issues/48810) — Compaction retry creates orphan fork in parentId chain (Mar 17, P1, needs live repro).
- [#49876](https://github.com/openclaw/openclaw/issues/49876) — Cron sessions hallucinate output on tool failure (Mar 18, P1, stale, trust/safety).
- [#53540](https://github.com/openclaw/openclaw/issues/53540) — Embedded runner "Network connection lost" on large tool-call params (Mar 24, P1, stale).
- [#54531](https://github.com/openclaw/openclaw/issues/54531) — Force-reply-to-originating-channel feature/regression (Mar 25, P1, stale).
- [#50090](https://github.com/openclaw/openclaw/issues/50090) — ClawHub/community skills gap (Mar 19, P2, 15 comments, needs info + security review).
- [PR #102300](https://github.com/openclaw/openclaw/pull/102300) — Docs fix for `googlechat groups allow` (stale, awaiting ClawSweeper human review/automerge).

**Health note**: the volume of `clawsweeper:needs-maintainer-review` and `needs-product-decision` tags on P1 issues — several 4–5 months old — suggests review capacity, not discovery, is the binding constraint. The 84-PR-merge day shows execution is strong once items reach review; clearing the stale P1 backlog above would meaningfully reduce community friction.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-07-31 | **Data window:** last 24 hours

---

## 1. Ecosystem Overview

The personal AI assistant open-source landscape is dominated by high-velocity forks and derivatives of the OpenClaw architecture, with the "Claw" family (OpenClaw, PicoClaw, NanoClaw, IronClaw, CoPaw, ZeroClaw, ZeptoClaw, NullClaw) representing roughly two-thirds of tracked activity. The ecosystem is in a **stability-hardening phase**: across all projects, the most-discussed issues are channel reliability failures, memory/context integrity, security boundary violations, and cost governance — not new feature surface. Merge throughput remains strong (roughly 180+ PRs merged across projects in 24h), but maintainer review bandwidth is the binding constraint, evidenced by stale P1 issues and `needs-maintainer-review` backlogs in nearly every project. Notably, **no major new releases** landed this window except Hermes Agent's v0.19.1 stabilization rollup and LobsterAI's 2026.7.29 patch, suggesting projects are consolidating rather than shipping new capability.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed (24h) | Release | Health Score* | Key Signal |
|---|---|---|---|---|---|---|
| **OpenClaw** (core ref) | 500 updated (17 closed) | 500 updated (84 merged) | 84 | None | ⚠️ 6/10 | Massive throughput; P0 memory leak + security leak; maintainer bottleneck |
| **Hermes Agent** (NousResearch) | 50 updated (0 closed) | 50 updated (2 merged) | 2 | **v0.19.1** ✅ | 🟢 7.5/10 | ~1,000+ PRs rolled into patch release; updater reliability P1 |
| **CoPaw / QwenPaw** | 25 updated (7 closed) | 48 updated (26 merged) | 26 | None | 🟢 7/10 | Strong merge velocity; v2.0 performance regression top complaint |
| **IronClaw** (Near AI) | 40 updated (6 closed) | 50 updated (21 merged) | 21 | None | 🟡 6.5/10 | Architecture refactor on track; cross-user memory leak (P0) unaddressed |
| **NanoBot** (HKUDS) | 7 updated (2 closed) | 48 updated (31 merged) | 31 | None | 🟢 7.5/10 | Fastest fix cycle; WhatsApp audio + Telegram polling gaps remain |
| **NanoClaw** | 2 new | 18 updated (6 merged) | 6 | None | 🟡 6.5/10 | Image hardening progress; Slack reactions/edits broken (no fix yet) |
| **LobsterAI** (NetEase Youdao) | 0 | 10 updated (8 merged) | 8 | **2026.7.29** ✅ | 🟢 8/10 | Cleanest release: security fix + features + Windows packaging |
| **ZeroClaw** | 14 open | 50 open | **0** | None | ⚠️ 5/10 | S0 webhook auth bug + zero merges; review bottleneck |
| **PicoClaw** (Sipeed) | 7 updated | 17 updated (5 closed) | 5 | None | 🟡 5/10 | Community PRs stale; OAuth demand reopened |
| **Moltis** | 2 updated | 4 updated (1 merged) | 1 | None | ⚠️ 5.5/10 | Critical unauthenticated vault endpoints; security PR open |
| **ZeptoClaw** | 0 | 1 open | 0 | None | 🟡 5/10 | Low activity; critical secret-leak fix pending review |
| **NullClaw** | 0 | 0 | 0 | None | ⚫ 1/10 | Inactive |

*\*Health score is a qualitative composite of merge throughput, backlog cleanliness, critical-bug load, release cadence, and community engagement.*

---

## 3. OpenClaw's Position

**Advantages:**
- **Scale leader by a wide margin:** 500 issues + 500 PRs touched daily and 84 merges/day dwarfs every peer (next closest: NanoBot at 31, CoPaw at 26). It is the de-facto reference architecture and the upstream that most "Claw" derivatives fork.
- **Broadest channel surface:** Discord, WhatsApp, Slack, iMessage, Telegram, Feishu, plus gateway/embedded/cron/Codex modes. Feature PRs like sandboxed workspace access and local-model onboarding (LM Studio) show continued capability expansion.
- **Strongest contributor pipeline:** ClawSweeper automation, `automerge`-armed PRs, and 84-PR merge days indicate a maturing, semi-automated contribution process.

**Technical approach differences:**
- Monolithic omnichannel **gateway architecture** with a plugin-host and skill system, versus NanoBot's lightweight bot framework, IronClaw's crate-based Rust modularization, and ZeroClaw's Rust security-first design.
- Extremely **large issue surface** (500 open PRs) creates a "many eyes" effect but also the ecosystem's worst maintainer bottleneck — P1 issues from February remain unaddressed.

**Community size comparison:** OpenClaw's comment counts (38 on a single security issue) and issue velocity exceed all peers combined, confirming it as the ecosystem's center of gravity. However, Hermes Agent's v0.19.1 consolidating ~1,000+ PRs signals a similarly large (if quieter) contributor base. OpenClaw's vulnerability is **review latency**: Hermes, NanoBot, and CoPaw all close P1 regressions within days; OpenClaw carries 4–5-month-old P1s.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **Channel reliability** | OpenClaw, NanoBot, PicoClaw, NanoClaw, Moltis, IronClaw, CoPaw | WhatsApp audio send (NanoBot), Telegram polling stalls (NanoBot), crash-loop channel suppression (OpenClaw), Slack reaction/edit failures (NanoClaw), IRCv3 long messages (PicoClaw), Telegram inline buttons (Moltis) |
| **Security hardening** | All active projects | Webhook fail-closed (ZeroClaw S0), vault endpoint auth (Moltis), cross-user memory leak (IronClaw), subprocess secret scrubbing (ZeptoClaw), path traversal (LobsterAI), text leakage to channels (OpenClaw) |
| **Memory/context trust boundaries** | OpenClaw, Hermes, IronClaw, ZeroClaw, CoPaw | Memory as background context vs. authoritative user content (Hermes #31584), memory data loss in compaction (CoPaw), history vs. curated memory separation (ZeroClaw RFC), cross-user namespace collapse (IronClaw) |
| **Cost/token governance** | OpenClaw, Hermes, ZeroClaw, PicoClaw | Per-agent cost budgets (OpenClaw #42475), prompt-cache breakage (OpenClaw), avoiding billing for empty responses (Hermes), tiered bootstrap loading (OpenClaw), local-small prompt profiles (ZeroClaw), Bedrock prompt caching (PicoClaw) |
| **MCP lifecycle & auth** | Hermes, PicoClaw, IronClaw, CoPaw | OAuth 2.1 + PKCE server onboarding (PicoClaw), stale session recovery after restart (CoPaw), tool-name validation for strict LLM APIs (CoPaw), MCP HTTP auth (Hermes), MCP server availability reporting (NanoClaw) |
| **Session lifecycle/hygiene** | OpenClaw, Hermes, CoPaw, LobsterAI, NanoClaw | Hide background/cron sessions from user lists (Hermes), session forking/grouping (CoPaw), orphaned session pruning (OpenClaw), cross-account stale-response isolation (LobsterAI), stateless gateway mode (PicoClaw) |
| **Update/install reliability** | Hermes, OpenClaw, LobsterAI, NanoClaw | Updater false-positive PID (Hermes), stale binary bricks macOS updates (Hermes), docs ahead of release (OpenClaw), NSIS survivor processes (LobsterAI), hardened image repin (NanoClaw) |
| **Skills ecosystem** | OpenClaw, NanoClaw, IronClaw, Hermes | ClawHub/community skill registry (OpenClaw #50090), skill install registry drift (NanoClaw), reliable skill discovery/routing (IronClaw epic), skill retrieval token overhead (Hermes) |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target Users | Architectural Identity |
|---|---|---|---|
| **OpenClaw** | Omnichannel personal agent gateway | Power users, self-hosters, developers | Monolithic TypeScript gateway + plugin-host + skill system; largest channel matrix |
| **Hermes Agent** | Research-grade daily-driver agent | NousResearch users, developers, desktop-first | Python; TUI + desktop app + gateway + cron; deep memory-provider integration (Honcho) |
| **IronClaw** | Hosted/product-grade agent platform | Near AI ecosystem, enterprise Slack teams | Rust crates; Slack-native product UX; heavy architecture-refactor program |
| **CoPaw / QwenPaw** | Qwen-optimized desktop agent | Chinese-speaking desktop users, AgentScope platform | Python/Tauri; native Computer Use GUI automation; desktop Console UI |
| **NanoBot** | Lightweight LLM bot framework | HKUDS community, hobbyists, quick deployments | Python; minimal bot core, strong WebUI; emphasis on speed of iteration |
| **LobsterAI** | Enterprise desktop assistant | NetEase Youdao customers, enterprise | Electron-style desktop; cowork side-chat, account-scoped isolation, gamified check-in |
| **NanoClaw** | Containerized operator skills | DevOps/cloud operators | Container-runner architecture; skill-based extensibility (`/add-*` commands) |
| **ZeroClaw** | Rust security-first agent | Rust enthusiasts, security-conscious local users | Rust; RFC-driven governance; strict fail-closed design philosophy |
| **PicoClaw** | Lightweight Go agent | Go developers, embedded/edge users | Go; MCP-first integration; minimal footprint |
| **Moltis** | Secure multi-tenant agent gateway | Small teams, security-audited deployments | Middleware-style access control; observability infrastructure |
| **ZeptoClaw** | Minimal Rust runtime | Rust minimalists, embedded experiments | Lean Rust core; no issue backlog; hardening-focused |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapid iteration (weekly releases / 20+ merges per day):**
- **OpenClaw** — highest raw throughput; velocity constrained by review capacity; effectively the ecosystem's "Linux kernel."
- **NanoBot** — fastest bug-to-fix cycle (31 merges/day); ideal hygiene despite small team.
- **CoPaw/QwenPaw** — 26 merges/day; still absorbing v2.0 regression fallout; contributor CI friction is a current weakness.
- **Hermes Agent** — large merge pipeline consolidated into patch releases; ~1,000+ PRs between versions signals a very large but less public contributor base.
- **IronClaw** — strong execution on architecture groundwork (21 merges); user-facing security bugs lag behind.

**Tier 2 — Steady (intermittent merges, feature work visible):**
- **LobsterAI** — healthiest release discipline (shipped a clean patch with security fixes); low issue volume suggests a more controlled/user-tested product.
- **NanoClaw** — consistent small-batch merges; two high-severity bugs lacking fixes.
- **PicoClaw** — activity is mostly dependabot bumps; meaningful community PRs sit unreviewed, signaling waning maintainer attention.
- **ZeroClaw** — high discussion energy (RFCs) but **zero merges in 24h**; process bottleneck phase.

**Tier 3 — Stabilizing / low activity:**
- **Moltis** — security-critical work in progress; small but focused team.
- **ZeptoClaw** — near-idle; one critical security PR pending.
- **NullClaw** — inactive; no development signal.

---

## 7. Trend Signals

1. **Stability is the new feature.** Every project's top-commented item is a reliability or security defect, not a feature request. v2.0 launches (CoPaw) and gateway architectures (OpenClaw) are being judged on failure recovery, not capability. Vendors should prioritize error-recoverability and crash-loop resilience as differentiating guarantees. — *OpenClaw, CoPaw, Hermes, IronClaw*

2. **Memory trust is the next security boundary.** Multiple projects now treat "what the agent remembers" as a threat surface: memory contexts impersonating user instructions (Hermes), memory leaking across users (IronClaw), and memory loss during compression (CoPaw). The ecosystem is converging on *memory as background context, never authoritative user content* as a design principle. — *Hermes, IronClaw, CoPaw, ZeroClaw*

3. **OpenAI-compatible APIs are becoming mandatory for interop.** ZeroClaw's accepted RFC for a Chat Completions adapter — driven by Open WebUI/LobeChat lockout — mirrors demand across the ecosystem. Projects that expose standard OpenAI-compatible endpoints will win client-ecosystem compatibility. — *ZeroClaw (also relevant to OpenClaw, CoPaw, NanoBot)*

4. **Channel failures remain the #1 user-visible pain.** WhatsApp audio, Telegram polling, Slack reactions/edits, Discord suppression, IRC long-messages — every channel has a critical defect in at least one project this week. Channel integration is the ecosystem's Achilles heel; reliability tooling (reconnect supervision, fail-closed webhooks, ack tracking) is the highest-value investment.

5. **Cost governance is moving from nice-to-have to core.** Per-agent budgets (OpenClaw), empty-response billing (Hermes), prompt caching (PicoClaw, OpenClaw), and local-model prompt compaction (ZeroClaw) all point to the same need: **explicit, enforceable token economics** for agents, especially as embedded/cron/background usage grows.

6. **MCP is the integration standard, but its lifecycle is immature.** Stale sessions, tool-name validation, missing OAuth onboarding, and unavailable-server reporting appear across four projects. Early adopters are hitting the same rough edges; investment in MCP session/auth tooling will be rewarded.

7. **Local/offline models are a growing requirement.** LM Studio onboarding (OpenClaw), local whisper transcription (NanoClaw), local-small profiles (ZeroClaw), and Termux/timezone support (NanoBot) indicate a privacy-driven segment that expects first-class (not fallback) treatment.

8. **Agent-authored contributions are arriving.** Hermes users are filing issues *with their agents*, and CoPaw's first-time contributors are submitting multi-bug fix PRs. The pipeline of "agents filing bugs about agents" will accelerate — projects need templates, CI gates that don't block forks, and clear contributor guidelines now. — *Hermes, CoPaw, NanoClaw*

---

*Report compiled from 2026-07-31 community digest data. Health scores are qualitative analyst assessments based on merge velocity, backlog hygiene, critical-bug load, and release discipline.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-31

## 1. Today's Overview

NanoBot is in a high-activity, fix-heavy cycle: **7 issues were updated** (5 open, 2 closed) and **48 PRs were updated** (17 open, 31 merged/closed) in the last 24 hours. No new releases were published. The project is seeing strong contributor momentum around stability, WebUI features, and platform compatibility, with several P1 regression fixes either merged or under review. At the same time, persistent channel reliability issues — especially WhatsApp audio and Telegram polling — remain open concerns. Overall project health is active but stressed by a growing backlog of open feature PRs and difficult integration bugs.

## 2. Releases

No new releases were published in this digest window.

## 3. Project Progress

In the last 24 hours, **31 PRs were merged/closed**. Sampled highlights include:

- **CI stability and speedup** — [PR #5145](https://github.com/HKUDS/nanobot/pull/5145) replaced timing-dependent tests and batched dependency installs to make CI more reliable.
- **WebUI Quick Chat and shared sidebar highlight** — [PR #5181](https://github.com/HKUDS/nanobot/pull/5181) and [PR #5182](https://github.com/HKUDS/nanobot/pull/5182) were closed, adding a persistent Quick Chat entry and consolidating sidebar selection behavior. A follow-up [PR #5184](https://github.com/HKUDS/nanobot/pull/5184) remains open with Quick Chat plus Temporary Chat.
- **Responses API reasoning preservation** — [PR #5172](https://github.com/HKUDS/nanobot/pull/5172) was closed, adopting preservation/replay of the complete Responses output-item chain for tool calls and context compaction.
- **`finish_reason='length'` recovery** — [PR #5136](https://github.com/HKUDS/nanobot/pull/5136) fixed misrouting of blank-content tool-call responses to the length-recovery path.
- **Session lock cleanup** — [PR #5151](https://github.com/HKUDS/nanobot/pull/5151) released idle `AgentLoop` session locks using weak references.
- **Bounded exec session output** — [PR #5150](https://github.com/HKUDS/nanobot/pull/5150) fixed unbounded buffering in exec sessions.
- **Pairing approval robustness** — [PR #5147](https://github.com/HKUDS/nanobot/pull/5147) stopped transient `pairing.json` read failures from erasing approved senders.

## 4. Community Hot Topics

The most active issue was:

- **[#5149 — no audio on WhatsApp](https://github.com/HKUDS/nanobot/issues/5149)** with 3 comments. Users report NanoBot can receive audio messages but fails to send them. This is a core channel integration concern with active community discussion.

Other issues with comments:

- **[#5185 — tool calls code returned in responses](https://github.com/HKUDS/nanobot/issues/5185)** — 1 comment; models are leaking tool-call syntax into visible assistant output.
- **[#4791 — DoS: no channel-level rate limiting](https://github.com/HKUDS/nanobot/issues/4791)** — 1 comment; closed, but the underlying security concern about missing per-user throttling remains relevant.

PRs dominate the discussion volume, but most listed PRs show no comment count in the provided data. The overall signal is that **channel robustness and output-correctness bugs are the main community pain points**.

## 5. Bugs & Stability

Bugs updated in the last 24 hours, ranked roughly by severity:

- **Critical: Telegram polling can stall permanently** — [Issue #5171](https://github.com/HKUDS/nanobot/issues/5171): after a transient network failure, the bot stops receiving messages while the process stays alive and logs stay silent. A fix is proposed in open [PR #5156](https://github.com/HKUDS/nanobot/pull/5156).
- **High: WhatsApp audio messages are not sent** — [Issue #5149](https://github.com/HKUDS/nanobot/issues/5149): core media functionality is broken for the WhatsApp channel. No fix PR is visible yet.
- **High: Tool-call code appears in assistant responses** — [Issue #5185](https://github.com/HKUDS/nanobot/issues/5185): users see raw tool-call snippets in replies, indicating a response rendering/serialization regression. No fix PR is visible yet.
- **Medium: Termux startup fails due to timezone data** — [Issue #5187](https://github.com/HKUDS/nanobot/issues/5187): config validation fails because no system timezone database is available. Open [PR #5189](https://github.com/HKUDS/nanobot/pull/5189) adds `tzdata` as a fallback.
- **Medium: Scheduled GPT tasks sometimes produce no final answer** — [Issue #3106](https://github.com/HKUDS/nanobot/issues/3106): tool steps complete but no final answer is generated; appears model-dependent.
- **Fixed in window:** [Issue #5133](https://github.com/HKUDS/nanobot/issues/5133) — `finish_reason='length'` with blank content and tool calls is now routed to length recovery via [PR #5136](https://github.com/HKUDS/nanobot/pull/5136).
- **Closed security issue:** [Issue #4791](https://github.com/HKUDS/nanobot/issues/4791) — no per-channel rate limiting; closed, but the risk of paired users flooding the agent remains notable.

## 6. Feature Requests & Roadmap Signals

Several open PRs point toward near-term feature priorities:

- **WebUI Quick Chat + Temporary Chat** — [PR #5184](https://github.com/HKUDS/nanobot/pull/5184) adds first-class Quick Chat and in-memory Temporary Chat, building on the merged Quick Chat groundwork.
- **Session storage migration from JSONL to SQLite** — [PR #5173](https://github.com/HKUDS/nanobot/pull/5173) would make SQLite the only runtime session store, with JSONL retained as rollback backup.
- **Custom Telegram Bot API base URL and headers** — [PR #4919](https://github.com/HKUDS/nanobot/pull/4919) supports self-hosted Bot API servers and enterprise gateways.
- **Subagents with configurable model presets** — [PR #4291](https://github.com/HKUDS/nanobot/pull/4291) would let subagents run on different model presets selected by the LLM.
- **Cron manual-run completion state preservation** — [PR #5183](https://github.com/HKUDS/nanobot/pull/5183) addresses lifecycle races in cron stores.
- **Skills.sh well-known source support** — [PR #5186](https://github.com/HKUDS/nanobot/pull/5186) prevents filtering of trustworthy skills sources.

These suggest the next NanoBot version will likely include **WebUI enhancements, SQLite session persistence, more flexible Telegram hosting, and improved subagent model control**.

## 7. User Feedback Summary

Users are reporting real-world reliability gaps:

- Channel integrations are fragile: **WhatsApp media sending is broken**, and **Telegram polling can silently die** after network changes.
- LLM output quality regressions are visible: **tool-call code is leaking into normal replies**, and some scheduled tasks finish tool use without producing a final answer.
- Minimal environments like **Termux** are not supported well due to missing timezone data.
- Security-conscious users are concerned about **lack of rate limiting** on paired channels, even after the issue was closed.

Positive signals are indirect: the volume of contributor activity and quick P1 regression fixes suggest the maintainer community is responsive, but the data contains no explicit user praise or satisfaction metrics.

## 8. Backlog Watch

Several issues/PRs appear to need maintainer attention:

- **[Issue #3106](https://github.com/HKUDS/nanobot/issues/3106)** — opened 2026-04-13, still open with 0 comments. Users report GPT scheduled tasks failing to produce final answers. This is the oldest open issue in the sampled data and has no visible maintainer response.
- **[PR #4021](https://github.com/HKUDS/nanobot/pull/4021)** — opened 2026-05-27, conflict status, AI-assisted Codex reasoning dedup fix. Needs rebase/resolution.
- **[PR #4551](https://github.com/HKUDS/nanobot/pull/4551)** — opened 2026-06-26, conflict status, adds `isolated_session` config for heartbeat. Needs merge conflict resolution.
- **[PR #4819](https://github.com/HKUDS/nanobot/pull/4819)** — opened 2026-07-06, conflict status, fixes `WeakValueDictionary` consolidation-lock collection. Needs maintainer review.
- **[Issue #4791](https://github.com/HKUDS/nanobot/issues/4791)** — closed, but the underlying rate-limiting/DoS concern may warrant a tracked follow-up feature.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-31

## 1. Today's Overview

Hermes Agent is in an extremely high-activity state: 50 issues and 50 pull requests were updated in the last 24 hours, and a new patch release (v0.19.1 / v2026.7.30) was cut as a stable rollup of the ~1,000+ PRs merged since v0.19.0. All 50 updated issues remain open (zero closed), while 2 of the 50 updated PRs were merged/closed, leaving 48 open. Activity is concentrated across the desktop app, gateway, CLI, cron/session handling, memory providers, and security boundaries. The release cadence and large open-PR pipeline indicate a healthy, fast-moving project, though the entirely-open issue backlog and recurring SIGABRT/crash reports suggest stability work remains a priority.

## 2. Releases

**v2026.7.30 — Hermes Agent v0.19.1** ([release](https://github.com/NousResearch/hermes-agent/releases))

- Released July 30, 2026 as a **patch release**.
- Rolls up **~1,000+ PRs merged since v0.19.0** into a stable tagged release for downstream consumers (Docker images, hosted deployments, fresh installs).
- No breaking changes or migration notes are documented; this is a stabilization/tagging release rather than a feature release.

## 3. Project Progress

- **Merged/closed PRs:** 2 of the 50 updated PRs were merged or closed in the last 24h; the specific PRs are not enumerated in the top-20 sample, all of which remain open.
- **Release progress:** v0.19.1 consolidates over a thousand merged PRs, confirming a sustained merge pipeline even though many items sit open.
- **Feature/advancement PRs active today:**
  - [PR #72792](https://github.com/NousResearch/hermes-agent/pull/72792) — Feishu adapter history backfill for group @mention context (modeled on Discord adapter).
  - [PR #43633](https://github.com/NousResearch/hermes-agent/pull/43633) — `hermes mcp serve` gains Streamable HTTP with shared-token auth and optional tool exposure.
  - [PR #75116](https://github.com/NousResearch/hermes-agent/pull/75116) — TUI `/resume` picker hides cron sessions by default with an `Alt+C` opt-in.
  - [PR #75102](https://github.com/NousResearch/hermes-agent/pull/75102) — Token estimator stops double-counting `api_content` (perf fix).
  - [PR #75115](https://github.com/NousResearch/hermes-agent/pull/75115) — Stops re-billing deterministic empty responses (NS-503).
  - [PR #75117](https://github.com/NousResearch/hermes-agent/pull/75117) — Persists async task origins (background delegation/terminal) across restart.
- **Desktop-app fix cluster:** [PR #75126](https://github.com/NousResearch/hermes-agent/pull/75126) (open links in integrated terminal), [PR #75127](https://github.com/NousResearch/hermes-agent/pull/75127) (closing last main tab / middle-click), [PR #75110](https://github.com/NousResearch/hermes-agent/pull/75110) (preserve URLs in Markdown code), [PR #75114](https://github.com/NousResearch/hermes-agent/pull/75114) (profile-scoped project RPCs), [PR #75112](https://github.com/NousResearch/hermes-agent/pull/75112) (adopt saved primary profile before gateway boot).
- **Security/robustness:** [PR #75037](https://github.com/NousResearch/hermes-agent/pull/75037) patches vulnerable deps and adds publication-age floors plus npm script allow-listing; [PR #75106](https://github.com/NousResearch/hermes-agent/pull/75106) prevents cloud API keys from being sent to config-overridden private `base_url`; [PR #75109](https://github.com/NousResearch/hermes-agent/pull/75109) fixes `python -m` double-import profile rehoming; [PR #75125](https://github.com/NousResearch/hermes-agent/pull/75125) clears stale `__pycache__` before gateway restart.

## 4. Community Hot Topics

Most-commented issues (top of the 50-item issue list):

- **[#31584 — Treat memory-context as background context, not authoritative user-message content](https://github.com/NousResearch/hermes-agent/issues/31584)** (10 comments) — Users are worried that memory context can be confused with genuine user instructions, framing it as both a confusion source and a potential threat surface. Notably, the issue was drafted by the user's agent, showing agents are being used to file issues against Hermes itself.
- **[#37968 — fix(cron): isolate gateway approvals from environment pollution](https://github.com/NousResearch/hermes-agent/issues/37968)** (8 comments) — Includes a full CVSS assessment (6.3 medium v3.1 / 7.0 high v4.0) for an integrity-flavored cron/gateway approval issue; needs a maintainer decision.
- **[#74942 — Desktop app updater detects itself as "another instance" (false positive PID check)](https://github.com/NousResearch/hermes-agent/issues/74942)** (5 comments, 2 👍) — Installed-update bootstrap fails on its own PID; a P1 desktop blocker affecting Windows updater reliability.
- **[#72269 — Self-improvement review can write a task's unresolved failure up as a confident, validated skill](https://github.com/NousResearch/hermes-agent/issues/72269)** (4 comments) — Agent skill-formation pipeline can encode failures as skills, undermining the self-improvement loop's trustworthiness.
- **[#33485 — Honcho hybrid memory can leave daemon dialectic threads alive during CLI shutdown, causing intermittent CPython abort](https://github.com/NousResearch/hermes-agent/issues/33485)** (4 comments) — Sporadic SIGABRT on process exit, a recurring stability theme.

Underlying needs: users are prioritizing update reliability, agent-memory trust boundaries, session/context hygiene, and cost-control guarantees over new feature surface.

## 5. Bugs & Stability

Ranked by severity/attention:

- **[#74942 (P1) — Desktop updater false-positive PID check](https://github.com/NousResearch/hermes-agent/issues/74942)** — Update bootstrap aborts because it mistakes itself for another instance. 5 comments, 2 👍, active; no explicit fix PR in the sample.
- **[#74836 (P2) — macOS in-app update permanently broken by stale `~/.hermes/hermes-setup`](https://github.com/NousResearch/hermes-agent/issues/74836)** — `resolveUpdaterBinary()` gates on existence only, with no version/staleness check; `hermes update` cannot repair it.
- **[#74570 (P2) — Desktop pin/unpin silently reverted by `pullRemotePins` race](https://github.com/NousResearch/hermes-agent/issues/74570)** — All pin entry points affected; regression from commit `8ce8b70dc`.
- **[#75018 (P2) — Gateway exports `PYTHONPATH`/`VIRTUAL_ENV` to no_agent cron children](https://github.com/NousResearch/hermes-agent/issues/75018)** — Poisoning non-venv Python interpreters; environment-pollution class already flagged by #37968.
- **[#72935-related #62935 (P2) — `microsoft-teams-apps` import side effect loads foreign `.env` into every gateway process](https://github.com/NousResearch/hermes-agent/issues/62935)** — Breaks profile secret isolation via plugin discovery side effects.
- **[#54354 (P2) — Docker backend: first tool call before image pull runs on host](https://github.com/NousResearch/hermes-agent/issues/54354)** — Lazy container creation executes the first tool call locally, returning host paths; a security-boundary bug.
- **[#72269 (P2) — Self-improvement review validates unresolved failures as skills](https://github.com/NousResearch/hermes-agent/issues/72269)** — Corrupts the skill library with false positives.
- **SIGABRT/crash cluster:** [#33485](https://github.com/NousResearch/hermes-agent/issues/33485) and [#43186](https://github.com/NousResearch/hermes-agent/issues/43186) — both involve clean exit paths aborting with core dumps after successful turns, likely sharing a teardown root cause.
- **[#31987 (P2) — MCP HTTP transport `anyio` RuntimeError causes reconnect failure loop](https://github.com/NousResearch/hermes-agent/issues/31987)** — Cleanup-path error consumes retries and breaks reconnects.
- **[#55274 (P3) — BlueBubbles REST helpers buffer JSON without a cap](https://github.com/NousResearch/hermes-agent/issues/55274)** — Unbounded allocation risk against a faulty/proxied server.

**Existing fix PRs (encouraging signal):** [#75125](https://github.com/NousResearch/hermes-agent/pull/75125) (stale pycache on restart), [#75109](https://github.com/NousResearch/hermes-agent/pull/75109) (double-import rehoming), [#75117](https://github.com/NousResearch/hermes-agent/pull/75117) (async origin persistence), [#75106](https://github.com/NousResearch/hermes-agent/pull/75106) (cloud keys to private base_url), [#75120](https://github.com/NousResearch/hermes-agent/pull/75120) (BlueBubbles target resolution), [#67779](https://github.com/NousResearch/hermes-agent/pull/67779) (Windows drive letters in `file://` URIs).

## 6. Feature Requests & Roadmap Signals

- **Background/session hygiene is the strongest roadmap signal.** [#39372](https://github.com/NousResearch/hermes-agent/issues/39372) asks that background/integration runs not pollute user-visible session lists; [PR #75116](https://github.com/NousResearch/hermes-agent/pull/75116) (hide cron sessions from TUI resume) is a direct partial response — more is likely coming for Desktop/dashboard.
- **Memory-context distinction:** [#31584](https://github.com/NousResearch/hermes-agent/issues/31584) wants memory treated as background context, not authoritative user content.
- **Smarter skill retrieval:** [#34823](https://github.com/NousResearch/hermes-agent/issues/34823) requests semantic/per-message skill retrieval to cut ~800-token system-prompt overhead and work across long sessions.
- **Memory control:** [#33436](https://github.com/NousResearch/hermes-agent/issues/33436) requests observation-pruning controls for the Honcho provider (agent-authored issue, human-approved).
- **Platform polish:** [#46467](https://github.com/NousResearch/hermes-agent/issues/46467) macOS TUI copy-on-select toggle; [#29041](https://github.com/NousResearch/hermes-agent/issues/29041) Windows elevated execution; [#45119](https://github.com/NousResearch/hermes-agent/issues/45119) config-field descriptions in Web Dashboard.
- **Cron/context plumbing:** [#26004](https://github.com/NousResearch/hermes-agent/issues/26004) requests structured cron metadata (`job_id`, `response_id`) via `metadata=` in `BasePlatformAdapter.send`.
- **Dev-workflow skills:** [#48683](https://github.com/NousResearch/hermes-agent/issues/48683) asks skills to respect repository issue/PR templates.

**Prediction:** the next minor release is likely to include MCP HTTP auth ([PR #43633](https://github.com/NousResearch/hermes-agent/pull/43633), open since June), Feishu history backfill ([PR #72792](https://github.com/NousResearch/hermes-agent/pull/72792)), session-hygiene filtering, and the current security-fix batch ([PR #75037](https://github.com/NousResearch/hermes-agent/pull/75037), [#75106](https://github.com/NousResearch/hermes-agent/pull/75106)).

## 7. User Feedback Summary

- **Update/install reliability is the biggest satisfaction drain:** Windows users hit a P1 updater false-positive ([#74942](https://github.com/NousResearch/hermes-agent/issues/74942)); macOS users report in-app updates permanently bricked by a stale binary ([#74836](https://github.com/NousResearch/hermes-agent/issues/74836)). These are "no amount of `hermes update` can repair it" class failures.
- **Cost sensitivity is real:** [PR #75115](https://github.com/NousResearch/hermes-agent/pull/75115) documents a customer charged ~$2.33 for a turn that produced no answer, and [#32827](https://github.com/NousResearch/hermes-agent/issues/32827) warns of unbounded retry-loop cost amplification from `same_tool_failure_warning`.
- **Self-hosters care about secret isolation:** issues around foreign `.env` loading ([#62935](https://github.com/NousResearch/hermes-agent/issues/62935)), env pollution of cron children ([#75018](https://github.com/NousResearch/hermes-agent/issues/75018)), and API keys leaking to overridden base URLs (addressed by [PR #75106](https://github.com/NousResearch/hermes-agent/pull/75106)) show security-conscious deployment patterns.
- **Power users are delegating issue-writing to their agents** ([#31584](https://github.com/NousResearch/hermes-agent/issues/31584), [#33436](https://github.com/NousResearch/hermes-agent/issues/33436)) — evidence that Hermes is being used as a daily driver, but also that memory/context behavior must be trustworthy enough for agent-authored submissions.
- **Windows remains a friction point:** drive-letter URI handling ([#67779](https://github.com/NousResearch/hermes-agent/pull/67779)), `ignore-scripts=true` build failures ([#53082](https://github.com/NousResearch/hermes-agent/issues/53082)), and elevation ([#29041](https://github.com/NousResearch/hermes-agent/issues/29041)).

## 8. Backlog Watch

Items open for extended periods that need maintainer attention:

- **[#31584](https://github.com/NousResearch/hermes-agent/issues/31584)** — opened 2026-05-24, 10 comments; memory-context trust boundary. Oldest and most-discussed open issue in the sample.
- **[#37968](https://github.com/NousResearch/hermes-agent/issues/37968)** — opened 2026-06-03, 8 comments; cron/gateway approval isolation with CVSS detail; tagged `needs-decision`.
- **[#33485](https://github.com/NousResearch/hermes-agent/issues/33485)** — opened 2026-05-27; SIGABRT on CLI teardown with Honcho hybrid memory.
- **[#31987](https://github.com/NousResearch/hermes-agent/issues/31987)** — opened 2026-05-25; MCP HTTP reconnect failure loop.
- **[#32827](https://github.com/NousResearch/hermes-agent/issues/32827)** — opened 2026-05-26; unbounded retry-loop cost amplification, no resolution visible.
- **[#34823](https://github.com/NousResearch/hermes-agent/issues/34823)** — opened 2026-05-29; semantic skill retrieval, flagged experimental but incomplete.
- **[#26004](https://github.com/NousResearch/hermes-agent/issues/26004)** — opened 2026-05-14; cron metadata passthrough, filed by a maintainer account (GiorgioRegni) — a signal it was accepted as a real gap.
- **[PR #43633](https://github.com/NousResearch/hermes-agent/pull/43633)** — opened 2026-06-10; MCP HTTP auth feature, still unmerged after ~7 weeks.
- **[PR #43024](https://github.com/NousResearch/hermes-agent/pull/43024)** — opened 2026-06-09; docs for liteparse PDF fallback, awaiting merge.
- **[PR #67779](https://github.com/NousResearch/hermes-agent/pull/67779)** — opened 2026-07-20; Windows `file://` drive-letter vision fix, queued with multiple risk sweeper labels.

*Data source: GitHub issues/PRs for NousResearch/hermes-agent, updated 2026-07-31.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-31

## Today's Overview

Project activity is moderate and steady: 7 issues and 17 PRs were updated in the last 24 hours, with no new releases published. Contribution activity is mostly dependabot-driven dependency bumps, but several meaningful community PRs remain open — notably DashScope TTS/WeChat audio, seahorse summary fixes, and DingTalk image support. Two feature-request threads around OAuth 2.1 for MCP servers signal continued user demand, and the presence of stale/open PRs and issues suggests maintainer review capacity may be a bottleneck. Overall, the project appears healthy in contributor interest but light on merge/release momentum in this window.

## Releases

No new releases were published in the 2026-07-31 update window, so there are no changelog, breaking-change, or migration notes to report.

## Project Progress

Five PRs moved to closed state in the last 24 hours:

- [#3163](https://github.com/sipeed/picoclaw/pull/3163) — `feat(bedrock): leverage Converse prompt caching via cache points` — the most substantive closed PR; if merged, it would reduce Bedrock input costs via prompt caching.
- [#3262](https://github.com/sipeed/picoclaw/pull/3262) — `build(deps): bump actions/setup-go from 6 to 7` (CI maintenance)
- [#3263](https://github.com/sipeed/picoclaw/pull/3263) — `build(deps): bump actions/setup-node from 6 to 7` (CI maintenance)
- [#3290](https://github.com/sipeed/picoclaw/pull/3290) — `build(deps): bump aws-sdk-go-v2/config` — likely superseded by newer [#3306](https://github.com/sipeed/picoclaw/pull/3306)
- [#3288](https://github.com/sipeed/picoclaw/pull/3288) — `build(deps): bump bedrockruntime` — likely superseded by newer [#3305](https://github.com/sipeed/picoclaw/pull/3305)

No new features or fix PRs were merged in the window. Still open and awaiting review: [#3270](https://github.com/sipeed/picoclaw/pull/3270) (DashScope TTS + WeChat audio), [#3279](https://github.com/sipeed/picoclaw/pull/3279) (seahorse tool-call leakage fix), [#3283](https://github.com/sipeed/picoclaw/pull/3283) (DingTalk image messages), and [#3200](https://github.com/sipeed/picoclaw/pull/3200) (configurable model fallback chain).

## Community Hot Topics

The most active issue by comment count is **#2546**, which was closed but still generated discussion:

- [#2546](https://github.com/sipeed/picoclaw/issues/2546) — *Support OAuth 2.1 + PKCE for MCP servers, addable from dashboard* — 6 comments. This was closed, but a new issue [#3302](https://github.com/sipeed/picoclaw/issues/3302) was opened asking for the same capability, indicating the underlying demand was not satisfied.
- [#3287](https://github.com/sipeed/picoclaw/issues/3287) — *Better support long messages in IRC* — 2 comments. Users need IRCv3 long messages to be handled as one cohesive message rather than split fragments.
- [#3258](https://github.com/sipeed/picoclaw/issues/3258) — *before_tool hook modify not working* — 2 comments, closed. Deserialization defect caused the decision field to be discarded and args misparsed.
- [#3257](https://github.com/sipeed/picoclaw/issues/3257) — *Add stateless/no-history mode for gateway sessions* — 2 comments, closed. Users want fresh conversations in gateway mode without channel/chat-derived session keys.

A common thread: users are asking for better management UX (**OAuth connectors, session switching**) and more reliable channel behavior (**IRC long messages, hook processing**).

## Bugs & Stability

Ranked by potential impact:

1. **#3308 — Concurrency hazards, goroutine leaks, and memory/speed optimizations**  
   [Issue #3308](https://github.com/sipeed/picoclaw/issues/3308) — New code-review-style BUG report covering SeaHorse, Channel Manager, and Hooks. It is open with no comments and no associated fix PR yet. This should be triaged by maintainers as it may point to real concurrency and resource-leak risks.

2. **#3279 — seahorse tool-call format leakage**  
   [PR #3279](https://github.com/sipeed/picoclaw/pull/3279) — A fix exists but is still open. The PR addresses tool-call format leaking into LLM summaries via `partsToReadableContent`. This is a correctness bug that should be reviewed and merged soon.

3. **#3258 — before_tool hook deserialization defect**  
   [Issue #3258](https://github.com/sipeed/picoclaw/issues/3258) — Closed/stale, but the root cause was serious: the `decision` field was discarded and `args` misparsed. No visible associated fix PR is listed in the data, so closure status is unclear.

4. **#3283 — DingTalk image message inbound support**  
   [PR #3283](https://github.com/sipeed/picoclaw/pull/3283) — More of an inbound-channel fix than a stability bug, but it addresses missing media handling for DingTalk. A fix PR is open.

No crash-level regressions were explicitly reported in the last 24 hours.

## Feature Requests & Roadmap Signals

Several user-driven feature signals emerged or continued:

- **OAuth 2.1 + PKCE for MCP servers** — [#2546](https://github.com/sipeed/picoclaw/issues/2546) closed, but [#3302](https://github.com/sipeed/picoclaw/issues/3302) reopened the request. This looks like a likely roadmap item given repeated demand.
- **Session list/switch for Telegram and other chat channels** — [#3307](https://github.com/sipeed/picoclaw/issues/3307) — Web UI has full session management, but chat-channel users want parity.
- **IRCv3 long-message support** — [#3287](https://github.com/sipeed/picoclaw/issues/3287) — open and stale; needs maintainer response.
- **Stateless/no-history gateway mode** — [#3257](https://github.com/sipeed/picoclaw/issues/3257) — closed, but the use case remains valid for automation via gateway mode.
- **Open PRs likely to land next**: [#3270](https://github.com/sipeed/picoclaw/pull/3270) (DashScope TTS provider + WeChat audio sending), [#3283](https://github.com/sipeed/picoclaw/pull/3283) (DingTalk image messages), [#3271](https://github.com/sipeed/picoclaw/pull/3271) (provider default model name refresh), and [#3200](https://github.com/sipeed/picoclaw/pull/3200) (configurable model fallback chain).

If these PRs are merged, the next PicoClaw release could include multi-provider TTS/audio support, DingTalk media handling, updated default model names, and a more robust model fallback UI.

## User Feedback Summary

Real user pain points visible in the data:

- Non-technical users and cloud-VM operators want to add OAuth-protected MCP servers by pasting a URL into the dashboard, with no shell and no Node.js dependency.
- Gateway users need stateless sessions so automated or repeated calls do not accumulate history.
- IRC users expect IRCv3 long-message semantics to be preserved, not split by the 512-byte legacy limit.
- Telegram users are missing the session-management abilities that already exist in the Web UI.
- The duplicate OAuth issue (#3302 referencing #2546) suggests users do not feel the original closed issue was resolved.

The most positive signal is the volume of external contributors: MrTreasure alone has three open PRs covering seahorse fixes, DashScope TTS, and DingTalk images. This indicates strong community investment in channel and media capabilities.

## Backlog Watch

Items that need maintainer attention:

- **#3222 — `refactor(deltachat): cleanup implementation, documentation -200LOC`**  
  [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) — Open since July 3, now stale, with no visible maintainer comments. A 200-line reduction plus security-friendlier config handling deserves review.

- **#3200 — `feat(models): add configurable default fallback chain`**  
  [PR #3200](https://github.com/sipeed/picoclaw/pull/3200) — Open since July 1, stale. This is a user-facing feature tied to model reliability and should not be dropped.

- **#3287 — IRC long-message support**  
  [Issue #3287](https://github.com/sipeed/picoclaw/issues/3287) — Open but stale after 8 days with only 2 comments. Needs maintainer acknowledgment or roadmap label.

- **#2546 / #3302 — OAuth 2.1 MCP server onboarding**  
  [#2546](https://github.com/sipeed/picoclaw/issues/2546) was closed, [#3302](https://github.com/sipeed/picoclaw/issues/3302) reopened it. Maintainers should clarify whether this is planned, rejected, or waiting for design.

- **Open community PRs without visible review**:  
  [#3279](https://github.com/sipeed/picoclaw/pull/3279), [#3270](https://github.com/sipeed/picoclaw/pull/3270), and [#3283](https://github.com/sipeed/picoclaw/pull/3283) all appear to have no maintainer comments or activity. These are high-value fixes/features and risk becoming stale.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-31

## Today's Overview

NanoClaw saw moderate-to-high activity over the past 24 hours: **18 PRs were updated** (12 open, 6 closed/merged), **2 new issues remain open**, and no releases were published. Work centered on agent-runner reliability, container image hardening, and expanding the operator skill ecosystem. The core team landed several infrastructure and security-oriented changes, while community contributors continued pushing fixes for message handling, scheduling, and skill installation. Overall project health looks stable, though two newly reported bugs — one breaking Slack reactions/edits and one breaking skill installs — have not yet received fix PRs.

## Releases

**No new releases** were published in this window.

The next release will likely incorporate several recently closed/merged PRs, including the agent image repin, Vercel CLI opt-in, and opencode compatibility fixes.

---

## Project Progress

Six PRs were **closed/merged** in the last 24 hours:

- **[#3160 — versions: repin the agent image to hardened-2026-07-30](https://github.com/nanocoai/nanoclaw/pull/3160)**  
  Repins the agent image to the new hardened build: **611 MB / 8 layers** vs the old **781 MB / 18 layers**, with a smaller largest layer to improve pull gating.

- **[#3159 — container: make the Vercel CLI opt-in rather than baked into every image](https://github.com/nanocoai/nanoclaw/pull/3159)**  
  Removes Vercel CLI from the default image; it is now installed by the `/add-vercel` skill. Reduces image surface and default credential exposure.

- **[#3122 — fix(opencode): main compatibility, custom-endpoint transport, memory parity](https://github.com/nanocoai/nanoclaw/pull/3122)**  
  Fixes OpenCode integration compatibility with main, adds custom-endpoint transport support, and restores memory parity.

- **[#2682 — fix(update-skills): skip v1-only skill branches](https://github.com/nanocoai/nanoclaw/pull/2682)**  
  Adds a v2 compatibility check in `update-skills`, skipping upstream branches whose package version starts with `1.` and reporting them separately.

- **[#3152 — docs: link architecture docs from README](https://github.com/nanocoai/nanoclaw/pull/3152)**  
  Adds links to `docs/REQUIREMENTS.md` and `docs/SECURITY.md` from the README Architecture section.

- **[#2476 — Feat/restart no nanoclaw](https://github.com/nanocoai/nanoclaw/pull/2476)**  
  Closed after following contributing guidelines; relates to restart behavior without NanoClaw.

---

## Community Hot Topics

The most active issue by engagement is:

- **[#3153 — add_reaction / edit_message on inbound messages always fail](https://github.com/nanocoai/nanoclaw/issues/3153)**  
  *1 comment, 0 reactions*  
  Author reports that Slack reactions and message edits always fail on inbound messages because the agent-group suffix is not stripped from the platform message ID. Every attempt returns `message_not_found`, retries 3×, and ends as `failed`.

Also new and relevant:

- **[#3155 — registry branches have drifted from main; provider payloads fail their own install gates](https://github.com/nanocoai/nanoclaw/issues/3155)**  
  Running `/add-codex` on `main` fails at the skill’s own build/typecheck step because provider registry branches have diverged from `main`.

No PR comment data was available, but several open PRs received updates today, notably the container orphan reconciliation fix ([#3119](https://github.com/nanocoai/nanoclaw/pull/3119)) and image verification hardening ([#3158](https://github.com/nanocoai/nanoclaw/pull/3158)).

---

## Bugs & Stability

Ranked by severity:

- **High — [#3153: Inbound message reactions/edits always fail on Slack](https://github.com/nanocoai/nanoclaw/issues/3153)**  
  Agent-group suffix not stripped from platform message IDs, causing `message_not_found` for every inbound message. No fix PR exists yet.

- **High — [#3155: Provider registry drift breaks skill installs](https://github.com/nanocoai/nanoclaw/issues/3155)**  
  `/add-codex` on `main` fails at the skill’s own build gate because registry branches have drifted. This breaks reproducibility for skill installation. No fix PR exists yet.

- **Medium — [#3158: Signature verification is silently skipped](https://github.com/nanocoai/nanoclaw/pull/3158)**  
  The verification gate reads two environment variables that do not exist, so signature verification never fires and auto-merge cannot activate. A fix PR is open.

- **Medium — [#3119: Duplicate containers per agent group](https://github.com/nanocoai/nanoclaw/pull/3119)**  
  Untracked orphan containers can lead to multiple containers polling the same session DB. A reconciliation fix is open.

- **Fix PRs in progress**  
  - [#3156 — carry channel attachments to providers as structured parts](https://github.com/nanocoai/nanoclaw/pull/3156)  
  - [#3154 — give scheduled tasks current run time](https://github.com/nanocoai/nanoclaw/pull/3154)  
  - [#3157 — don’t follow dangling symlinks when materializing template skills](https://github.com/nanocoai/nanoclaw/pull/3157)  
  - [#3145 — backfill destinations for existing wirings via migration 021](https://github.com/nanocoai/nanoclaw/pull/3145)

---

## Feature Requests & Roadmap Signals

Several open PRs indicate likely roadmap direction:

- **Operator skills**  
  - [#2317 — `/add-voice-transcription-free-whisper`](https://github.com/nanocoai/nanoclaw/pull/2317): local voice transcription via `openai-whisper` or `whisper.cpp`.  
  - [#2634 — `/add-paws4claws`](https://github.com/nanocoai/nanoclaw/pull/2634): AWS credential proxy daemon integration.  
  - [#2301 — GitHub polling mode for NAT/firewall environments](https://github.com/nanocoai/nanoclaw/pull/2301).  
  - [#3159 — Vercel CLI as opt-in skill](https://github.com/nanocoai/nanoclaw/pull/3159): already closed, lands in next image releases.

- **Developer experience**  
  - [#2537 — pre-commit hooks for prettier, eslint, typecheck, vitest](https://github.com/nanocoai/nanoclaw/pull/2537).

- **Scheduled tasks & time handling**  
  - [#3154 — render scheduled tasks with effective run time and current_time](https://github.com/nanocoai/nanoclaw/pull/3154).

- **Channel/message capabilities**  
  - [#2685 — Signal group typing, outbound reactions, quote-reply docs](https://github.com/nanocoai/nanoclaw/pull/2685).  
  - [#3156 — structured channel attachments for providers](https://github.com/nanocoai/nanoclaw/pull/3156).

**Prediction:** The next NanoClaw release will likely include the hardened agent image, opt-in Vercel CLI, scheduled task current-time fix, symlink-safe template skill materialization, and channel attachment support.

---

## User Feedback Summary

Real user pain points expressed in issues and PRs:

- **Slack reactions/edits are broken for inbound messages** — every attempt fails with `message_not_found` after retries. This is a core UX blocker for agents that react to or edit user messages.  
  → [#3153](https://github.com/nanocoai/nanoclaw/issues/3153)

- **Skill installs fail due registry drift** — operators cannot reliably install `codex` from `main` because provider payloads do not pass their own build gates.  
  → [#3155](https://github.com/nanocoai/nanoclaw/issues/3155)

- **Container duplication observed on long-running hosts** — one agent group accumulated 3 concurrent containers polling the same session DB, suggesting reliability gaps in long-running deployments.  
  → [#3119](https://github.com/nanocoai/nanoclaw/pull/3119)

On the positive side, the high volume of community-submitted PRs and fixes indicates active adoption and contributor engagement, especially around skills, database migrations, and provider integration.

---

## Backlog Watch

Several long-open PRs may need maintainer attention:

- **[#2301 — feat(add-github): polling mode, git access question, safe OneCLI secret merge](https://github.com/nanocoai/nanoclaw/pull/2301)**  
  Open since **May 6**. Adds a NAT/firewall-friendly polling GitHub integration. Still updated as recently as today.

- **[#2317 — feat(skills): add /add-voice-transcription-free-whisper skill](https://github.com/nanocoai/nanoclaw/pull/2317)**  
  Open since **May 7**. Local voice transcription; potentially valuable for offline/private setups.

- **[#2537 — ci: add pre-commit hooks](https://github.com/nanocoai/nanoclaw/pull/2537)**  
  Open since **May 18**. Would improve contributor workflow and code quality.

- **[#2634 — feat: add add-paws4claws skill](https://github.com/nanocoai/nanoclaw/pull/2634)**  
  Open since **May 28**. AWS credential proxy integration with a mount-from-outside pattern.

- **[#2685 — docs(signal): group typing, outbound reactions, quote-reply fix](https://github.com/nanocoai/nanoclaw/pull/2685)**  
  Open since **June 4**. Documentation-only PR, but updated today; may need review.

- **[#3119 — fix(container-runner): reconcile untracked orphan containers](https://github.com/nanocoai/nanoclaw/pull/3119)**  
  Open since **July 23**. Addresses a real reliability issue on long-running hosts; updated today.

- **[#3124 — fix: report unavailable MCP servers](https://github.com/nanocoai/nanoclaw/pull/3124)**  
  Open since **July 24**. Improves visibility into MCP server availability.

These older PRs have multiple updates but have not yet been merged, suggesting they may need maintainer prioritization or additional reviews.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-31

## 1. Today's Overview

IronClaw is in a period of very high development activity: 40 issues and 50 PRs were updated in the last 24 hours, with 6 issues closed and 21 PRs merged/closed. The project is currently dominated by two large initiatives: the target crate architecture program (epic #3773 and its WS0 workstreams #6919–#6927) and the skills reliability epic #6565. No new releases were published, and a long-standing release PR (#5598) remains open with breaking changes pending. Overall health is mixed: execution on architecture, CI, and test stabilization is strong, but a cluster of user-facing bugs and security/privacy reports — including a cross-user memory leak (#6900) and shared home directory exposure (#6866) — needs maintainer attention.

## 2. Releases

No new releases were published in this window.

The closest release-related activity is the still-open `chore: release` PR [#5598](https://github.com/nearai/ironclaw/pull/5598), which would bump:
- `ironclaw_common`: 0.4.2 → 0.5.0 (breaking changes)
- `ironclaw_skills`: 0.3.0 → 0.4.0 (breaking changes)
- `ironclaw_safety`: 0.2.2 → 0.2.3 (compatible changes)

Since no release has landed, there are no migration notes available yet.

## 3. Project Progress

Visible merged/closed PRs in the last 24h:

- [#6934](https://github.com/nearai/ironclaw/pull/6934) — `refactor(host_api): de-wildcard the contract prelude` (WS0 item 1 of the target-architecture epic). Removes the flat `pub use <mod>::*;` prelude so consumers use explicit contract paths.
- [#6931](https://github.com/nearai/ironclaw/pull/6931) — `feat(slack): native /ironclaw slash commands`, final PR of the product command train.
- [#6874](https://github.com/nearai/ironclaw/pull/6874) — dependency-group bump (`everything-else`, 34 updates).

Closed issues in the same window:

- [#6771](https://github.com/nearai/ironclaw/issues/6771) — Stabilized the Reborn Playwright runtime and served-API coverage.
- [#4636](https://github.com/nearai/ironclaw/issues/4636) — Added standalone SSO session and multi-user isolation E2E coverage.

This indicates clear progress on architecture groundwork, Slack/command UX, dependency hygiene, and E2E test stability. Open PRs also advanced feature work: skill activation/routing fixes ([#6937](https://github.com/nearai/ironclaw/pull/6937), [#6938](https://github.com/nearai/ironclaw/pull/6938)), hosted MCP server registration ([#6930](https://github.com/nearai/ironclaw/pull/6930)), and architecture baseline ratchets ([#6936](https://github.com/nearai/ironclaw/pull/6936)).

## 4. Community Hot Topics

Most-discussed issues by comment count:

- [#6284](https://github.com/nearai/ironclaw/issues/6284) — **15 comments** · [EPIC] Error-recoverability endgame: every mid-run error must be survivable, visible, and actionable by the model. This is the clearest signal that the community/team is prioritizing self-healing agent behavior.
- [#6524](https://github.com/nearai/ironclaw/issues/6524) — **4 comments** · Epic: Hermetic capability and journey testing platform. Users/contributors want deterministic, mechanical answers to “is every capability covered?”
- [#6752](https://github.com/nearai/ironclaw/issues/6752) — **1 comment** · Instance deletion fails and re-login hangs, reported from product feedback Slack.
- [#6834](https://github.com/nearai/ironclaw/issues/6834) — **1 comment** · Slack setup fails in a near.foundation account.
- [#6565](https://github.com/nearai/ironclaw/issues/6565) — **1 comment** · Epic: Reliable Skill Discovery, Routing, and Activation.

The underlying needs are consistent: reliability, determinism, and trust in the agent’s ability to recover, discover skills, and isolate users correctly.

## 5. Bugs & Stability

Ranked by severity:

**Critical / security**
- [#6900](https://github.com/nearai/ironclaw/issues/6900) — Shared-channel default subject binding collapses all users into the operator’s memory namespace (cross-user memory leak). Suggested P0, security-sensitive. No visible fix PR yet.
- [#6866](https://github.com/nearai/ironclaw/issues/6866) — Same home directory shared across all users; all workspaces visible to other users. Privacy violation.

**High impact**
- [#6752](https://github.com/nearai/ironclaw/issues/6752) — Instance deletion fails with an error; “Loading your agents...” stuck on re-login. Marked for the v1 launch checklist.
- [#6834](https://github.com/nearai/ironclaw/issues/6834) — Slack integration setup/auth flow fails, leaving the extension unusable.

**Medium impact**
- [#6940](https://github.com/nearai/ironclaw/issues/6940) — IronHub skill CTA returns 404 across all skills.
- [#6915](https://github.com/nearai/ironclaw/issues/6915) — Workspace file links in assistant messages do not open the referenced file.

**Lower impact / UX**
- [#6916](https://github.com/nearai/ironclaw/issues/6916) — Markdown files rendered as plain text in the file preview modal.
- [#6904](https://github.com/nearai/ironclaw/issues/6904) — Logs page cannot load entries beyond the latest page (pagination bug).
- [#6903](https://github.com/nearai/ironclaw/issues/6903) — Admin users list cannot load users beyond the first page (pagination bug).
- [#6902](https://github.com/nearai/ironclaw/issues/6902) — Projects page displays fabricated metrics as real data.

No dedicated fix PRs for these bugs were visible among the sampled updated PRs, so regression risk remains until those land.

## 6. Feature Requests & Roadmap Signals

User-facing feature requests:

- [#6939](https://github.com/nearai/ironclaw/issues/6939) — Migration tool to port legacy agent setup and memory (Hermes/Openclaw) into IronClaw. Addresses switching costs for existing users.
- [#6905](https://github.com/nearai/ironclaw/issues/6905) — Sign releases with keyless cosign for easier verification, including AUR packaging.
- [#6839](https://github.com/nearai/ironclaw/issues/6839) — Add immutable caching for content-hashed JS/CSS bundles in the embedded WebUI.

Roadmap signals from active epics:

- [#6565](https://github.com/nearai/ironclaw/issues/6565) — Reliable Skill Discovery, Routing, and Activation; active PRs [#6937](https://github.com/nearai/ironclaw/pull/6937) and [#6938](https://github.com/nearai/ironclaw/pull/6938) are likely to land soon.
- [#6284](https://github.com/nearai/ironclaw/issues/6284) — Error-recoverability endgame.
- [#6524](https://github.com/nearai/ironclaw/issues/6524) — Hermetic capability and journey testing platform.
- [#3773](https://github.com/nearai/ironclaw/issues/3773) — Target crate architecture program, with multiple WS0 workstreams underway.

Prediction for the next version: skill activation/routing fixes, Slack native slash commands, hosted MCP server registration ([#6930](https://github.com/nearai/ironclaw/pull/6930)), and the first wave of physical crate-layout moves ([#6926](https://github.com/nearai/ironclaw/issues/6926)).

## 7. User Feedback Summary

Real user pain points reported in this window:

- [#6752](https://github.com/nearai/ironclaw/issues/6752) — Instance deletion fails and re-login gets stuck; reported via x-ai-product-feedback Slack.
- [#6834](https://github.com/nearai/ironclaw/issues/6834) — Slack setup fails, leaving the integration unusable.
- [#6940](https://github.com/nearai/ironclaw/issues/6940) — IronHub skill CTA is broken for every skill, leading to 404 pages.
- [#6939](https://github.com/nearai/ironclaw/issues/6939) — Legacy users resist switching because there is no migration path for setup, configuration, and memory.
- [#6866](https://github.com/nearai/ironclaw/issues/6866) — Multiple users share one home directory; all users can see each other’s workspaces.
- [#6900](https://github.com/nearai/ironclaw/issues/6900) — Shared-channel conversations can leak memory across users via the operator’s namespace.

Overall, users are hitting setup, deletion, privacy, and migration friction. The team appears responsive — architectural work and E2E test improvements are moving — but several of these reports remain unaddressed.

## 8. Backlog Watch

Items that need maintainer attention due to age or importance:

- [#5598](https://github.com/nearai/ironclaw/pull/5598) — `chore: release` PR open since **2026-07-03**, containing breaking changes for `ironclaw_common` and `ironclaw_skills`. No release has landed in almost four weeks.
- [#5664](https://github.com/nearai/ironclaw/pull/5664) — `chore(deps): bump the actions group` open since **2026-07-05**, with 16 action updates including checkout and claude-code-action.
- [#6364](https://github.com/nearai/ironclaw/pull/6364) — `feat(attachments): add durable cross-channel file flows`, open since **2026-07-20**, XL-size and risk-medium; central to cross-channel file support.
- [#3773](https://github.com/nearai/ironclaw/issues/3773) — Epic for the target crate architecture, open since **2026-05-19**; actively referenced by new workstreams but without direct comments/maintainer check-ins on the epic itself.
- [#6428](https://github.com/nearai/ironclaw/pull/6428) / [#6361](https://github.com/nearai/ironclaw/pull/6361) — Rust dependency-group PRs open since **July 20–21**, awaiting merge or conflict resolution.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-31

## 1. Today's Overview

LobsterAI is showing solid engineering momentum: **10 PRs were touched in the last 24 hours**, of which **8 are closed/merged** and **2 remain open**, while issue activity was quiet with **0 issues updated**. A new release, **2026.7.29**, shipped with cowork text-tagging, Kimi K3 support, and auth hardening. The closed/merged PRs span renderer, main process, OpenClaw, cowork, enterprise flows, skills, and Windows packaging. The project appears healthy, with a balanced mix of new features, UI polish, security fixes, and reliability improvements.

## 2. Releases

- **[LobsterAI 2026.7.29](https://github.com/netease-youdao/LobsterAI/releases)** — released 2026-07-29

### What changed

- **feat(cowork):** add selected text tags to side chat — [PR #2405](https://github.com/netease-youdao/LobsterAI/pull/2405)
- **feat:** support Kimi K3 — [PR #2381](https://github.com/netease-youdao/LobsterAI/pull/2381)
- **fix(auth):** harden session lifecycle and token refresh

No breaking changes or migration notes were included in the provided release data.

## 3. Project Progress

Eight PRs were closed/merged in the last 24h:

- **[PR #2412](https://github.com/netease-youdao/LobsterAI/pull/2412)** — `fix(nsis): re-kill survivor processes on every stop poll round`  
  Improves Windows installer reliability by re-issuing `Stop-Process` during every poll round and logging survivor process details.

- **[PR #2411](https://github.com/netease-youdao/LobsterAI/pull/2411)** — `feat(sidebar): support check-in and banner carousel`  
  Adds a unified sidebar carousel for daily check-in and banner content.

- **[PR #2410](https://github.com/netease-youdao/LobsterAI/pull/2410)** — `style(sites): align page layout with management views`  
  Matches Sites page width, spacing, and search styling with Skills and MCP views.

- **[PR #2389](https://github.com/netease-youdao/LobsterAI/pull/2389)** — `fix(email): prevent attachment path traversal`  
  Sanitizes attachment filenames, enforces download directory boundaries, and adds cross-platform security tests.

- **[PR #2397](https://github.com/netease-youdao/LobsterAI/pull/2397)** — `feat(cowork): add isolated /btw side chat`  
  Adds an editable floating side-chat panel for selected assistant text, with dragging/resizing/stop/follow-ups, isolated from the main conversation.

- **[PR #2406](https://github.com/netease-youdao/LobsterAI/pull/2406)** — `fix(cowork): improve side chat input handling`  
  Accumulates selected text excerpts, removes product-level question length limits, and keeps bounded context/transport safety checks.

- **[PR #2409](https://github.com/netease-youdao/LobsterAI/pull/2409)** — `feat(enterprise): isolate account-scoped auth and service flows`  
  Isolates auth, media, queued follow-up, sharing, and deployment state per account; prevents stale async responses from leaking across accounts.

- **[PR #2408](https://github.com/netease-youdao/LobsterAI/pull/2408)** — `feat(activity): add native daily check-in experience`  
  Adds server-driven daily check-in in the desktop sidebar/account menu, with login flow for signed-out users and credit claiming for signed-in users.

## 4. Community Hot Topics

There were **no issue updates** and **no tracked comments/reactions** on PRs in the last 24h. However, two PRs stand out as the most active by scope and cross-cutting impact:

- **[PR #2397](https://github.com/netease-youdao/LobsterAI/pull/2397) — isolated `/btw` side chat**  
  Touches renderer, docs, main, OpenClaw, and cowork. It reflects strong demand for a lightweight way to follow up on selected assistant output without polluting the main conversation.

- **[PR #2409](https://github.com/netease-youdao/LobsterAI/pull/2409) — enterprise account-scoped isolation**  
  Touches renderer, docs, main, OpenClaw, cowork, and artifacts. It addresses enterprise needs for secure multi-account state separation and prevention of stale async account cross-talk.

Underlying signal: maintainers are prioritizing **conversation UX** and **enterprise-grade isolation** in parallel.

## 5. Bugs & Stability

No new issues or bug reports were opened in the last 24h. The following fixes were merged/closed, ranked by severity:

- **High — Email attachment path traversal** — [PR #2389](https://github.com/netease-youdao/LobsterAI/pull/2389)  
  Security vulnerability: attachment filenames could potentially escape the download directory. Fixed with sanitization, boundary enforcement, and cross-platform tests.

- **Medium/High — Account state cross-talk / stale async responses** — [PR #2409](https://github.com/netease-youdao/LobsterAI/pull/2409)  
  Enterprise accounts could be affected by stale async responses after switching accounts. Fixed via account-scoped isolation and failure rollback/cleanup.

- **Medium — Windows uninstaller survivor processes** — [PR #2412](https://github.com/netease-youdao/LobsterAI/pull/2412)  
  NSIS stop-poll could let processes survive teardown. Fixed by re-killing on every poll round.

- **Low/Medium — Side chat input handling** — [PR #2406](https://github.com/netease-youdao/LobsterAI/pull/2406)  
  Improved selected-text accumulation and bounded context/transport checks.

## 6. Feature Requests & Roadmap Signals

Recently merged/closed features point to an active roadmap around:

- **Cowork side-chat / `/btw` isolation** — [PR #2397](https://github.com/netease-youdao/LobsterAI/pull/2397), [PR #2406](https://github.com/netease-youdao/LobsterAI/pull/2406), [PR #2405](https://github.com/netease-youdao/LobsterAI/pull/2405)
- **Daily check-in & banner carousel** — [PR #2408](https://github.com/netease-youdao/LobsterAI/pull/2408), [PR #2411](https://github.com/netease-youdao/LobsterAI/pull/2411)
- **Enterprise account isolation** — [PR #2409](https://github.com/netease-youdao/LobsterAI/pull/2409)

Open community-authored feature PRs that may land next:

- **[PR #1228](https://github.com/netease-youdao/LobsterAI/pull/1228)** — Add “mark session as unread” in cowork conversation list/details
- **[PR #1231](https://github.com/netease-youdao/LobsterAI/pull/1231)** — Support Escape key close and form reset on `AgentCreateModal`

If current velocity continues, the next version will likely include further cowork side-chat polish, daily check-in refinements, and the two pending UX improvements above.

## 7. User Feedback Summary

Direct issue comments/reactions are unavailable in this window, so feedback is inferred from PR motivations and fixes:

- Users want to **follow up on selected assistant text** without disrupting the main chat — addressed by `/btw` side chat ([PR #2397](https://github.com/netease-youdao/LobsterAI/pull/2397), [PR #2406](https://github.com/netease-youdao/LobsterAI/pull/2406)).
- Users want **daily engagement incentives** inside the desktop app — addressed by check-in and banner carousel ([PR #2408](https://github.com/netease-youdao/LobsterAI/pull/2408), [PR #2411](https://github.com/netease-youdao/LobsterAI/pull/2411)).
- Users expect **consistent modal UX** — Escape key support and form reset are still missing ([PR #1231](https://github.com/netease-youdao/LobsterAI/pull/1231)).
- Users need **explicit conversation triage** — marking sessions as unread remains an open request ([PR #1228](https://github.com/netease-youdao/LobsterAI/pull/1228)).
- Security-conscious users benefit from **safer email attachment handling** ([PR #2389](https://github.com/netease-youdao/LobsterAI/pull/2389)).

Overall, maintainers appear responsive to user-facing pain points, especially around cowork workflows and account safety.

## 8. Backlog Watch

Two stale open PRs have been waiting since **2026-04-01** and were last touched on **2026-07-30** without being closed or merged:

- **[PR #1228](https://github.com/netease-youdao/LobsterAI/pull/1228)** — `feat(cowork): add “mark as unread” session feature`  
  A UX feature for marking cowork sessions as unread. Needs maintainer attention: review, merge, or close with direction.

- **[PR #1231](https://github.com/netease-youdao/LobsterAI/pull/1231)** — `fix(agent): AgentCreateModal Escape key close & form reset`  
  Small, well-scoped UX fix that aligns `AgentCreateModal` with other modals in the project. Also needs maintainer decision.

No long-unanswered issues are present in the tracked dataset.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-31

## 1. Today's Overview

Moltis showed a moderate 24-hour activity window: 2 issues were updated and remain open, 4 pull requests received updates, and 1 PR was closed/merged. No new releases were published. The busiest areas were security hardening, agent/channel interaction features, and observability infrastructure. The single closed PR (#1166) indicates continued progress on Slack integration reliability. Overall, the project appears healthy and active, with maintainer attention focused on access control, instrumentation, and web UX improvements.

## 2. Releases

None.

No new Moltis releases or release notes were published in this 24-hour window.

## 3. Project Progress

- **PR #1166 — [CLOSED] feat(slack): per-message acknowledgment reactions, phases, reconnect supervision, and Block Kit**  
  [moltis-org/moltis PR #1166](https://github.com/moltis-org/moltis/pull/1166)  
  This was the only closed/merged PR updated today. It builds on earlier Slack acknowledgment reaction work (#1165) and adds a safer lifecycle for message acknowledgments under queueing, cancellation, retries, callback bursts, and delivery failures. It also adds phase tracking, reconnect supervision, and Block Kit support.

No other PRs were merged/closed in this window.

## 4. Community Hot Topics

No comment or reaction counts were included in the available data, so activity is inferred from update recency and issue/PR type.

- **Issue #1178 — [Feature]: Let agents send Telegram inline buttons and receive structured callback responses**  
  [moltis-org/moltis Issue #1178](https://github.com/moltis-org/moltis/issues/1178)  
  A user request to let agents create Telegram inline buttons and handle structured callback responses. This signals demand for richer interactive agent output beyond plain messaging.

- **Issue #1177 — [Bug]: Vault Unlock/Recovery Endpoints Missing Authentication (CWE-306)**  
  [moltis-org/moltis Issue #1177](https://github.com/moltis-org/moltis/issues/1177)  
  A security-focused bug report. The underlying need is clear: sensitive vault and recovery endpoints must not be reachable without authentication.

- **PR #1174 — Add instrumentation and feedback collection infrastructure**  
  [moltis-org/moltis PR #1174](https://github.com/moltis-org/moltis/pull/1174)  
  Open PR adding backend-neutral agent instrumentation, Langfuse v4 export, OTLP backend support, and end-user reaction feedback. This indicates maintainer focus on observability and feedback loops.

- **PR #1170 — fix(channels): gate /sh and privileged tools behind a per-account operators list**  
  [moltis-org/moltis PR #1170](https://github.com/moltis-org/moltis/pull/1170)  
  Open security fix to separate channel access from privileged account operations. This directly addresses a privilege-boundary concern.

## 5. Bugs & Stability

- **High severity — Issue #1177: Vault Unlock/Recovery Endpoints Missing Authentication (CWE-306)**  
  [moltis-org/moltis Issue #1177](https://github.com/moltis-org/moltis/issues/1177)  
  Reported July 30, still open, no linked fix PR identified. Missing authentication on vault unlock/recovery endpoints is a critical security issue and should be prioritized.

- **Security hardening — PR #1170: Privileged tools not fully gated behind operators list**  
  [moltis-org/moltis PR #1170](https://github.com/moltis-org/moltis/pull/1170)  
  Not a new bug report, but an open fix that closes a security gap: channel senders who passed an access allowlist could previously reach privileged commands and host tools. This PR enforces a separate per-account `operators` boundary.

- **Stability improvement — PR #1166 (closed)**  
  [moltis-org/moltis PR #1166](https://github.com/moltis-org/moltis/pull/1166)  
  Improves Slack acknowledgment and message lifecycle safety under queueing, retries, callback bursts, and delivery failures.

## 6. Feature Requests & Roadmap Signals

- **Telegram inline buttons and structured callbacks** — Issue #1178  
  [moltis-org/moltis Issue #1178](https://github.com/moltis-org/moltis/issues/1178)  
  This is the clearest new feature request. If accepted, it would likely appear in a future release focused on richer channel interactivity.

- **Markdown copy and session export** — PR #1176 (open)  
  [moltis-org/moltis PR #1176](https://github.com/moltis-org/moltis/pull/1176)  
  Adds Markdown-preserving copy for assistant replies and a session-level **Save as Markdown** action. This is a UX/data-portability feature and could land soon if reviews pass.

- **Instrumentation, feedback collection, OTLP/Langfuse export** — PR #1174 (open)  
  [moltis-org/moltis PR #1174](https://github.com/moltis-org/moltis/pull/1174)  
  Suggests the project is moving toward production-grade observability and user feedback infrastructure.

Prediction for the next release: if #1170 and #1176 are merged, the next version will likely include privileged-command gating and improved web Markdown/export support. Telegram inline buttons are more likely to appear in a later release after design and maintainer review.

## 7. User Feedback Summary

No explicit satisfaction/dissatisfaction metrics (e.g., 👍 counts or comment sentiment) were available in this window. The active issues and PRs reveal several real user needs:

- **Security**: A user found vault unlock/recovery endpoints unauthenticated, indicating deployments may be exposed if those endpoints are reachable.
- **Channel interactivity**: Users want agents to send Telegram inline buttons and receive structured callbacks, not just plain text messages.
- **Data portability**: A contributor/user is addressing the need to copy and export session history as Markdown, preserving formatting and full history.
- **Reliability**: Slack acknowledgment reactions and reconnect supervision were treated as important enough to merge, suggesting real-world usage of async Slack interactions.

Overall, feedback centers on security assurance, richer interactive surfaces, and better export/observability capabilities.

## 8. Backlog Watch

No truly stale or long-unanswered issues were visible in the 24-hour data window. However, two open PRs deserve maintainer attention:

- **PR #1170 — Privileged tools/operators gating fix**  
  [moltis-org/moltis PR #1170](https://github.com/moltis-org/moltis/pull/1170)  
  Open since 2026-07-26. This is a security-relevant fix and should be reviewed/merged promptly.

- **PR #1174 — Instrumentation and feedback collection infrastructure**  
  [moltis-org/moltis PR #1174](https://github.com/moltis-org/moltis/pull/1174)  
  Open since 2026-07-27. Large infrastructure PR, likely needs thorough review but signals important roadmap direction.

In addition, Issue #1177 is new but critical enough that it should be triaged immediately, even though it has not yet been waiting long.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-31

Data source: agentscope-ai/CoPaw tracking `agentscope-ai/QwenPaw`

---

## 1. Today's Overview

CoPaw-tracked QwenPaw saw high-velocity activity in the last 24 hours: 25 issues were updated (18 open/active, 7 closed) and 48 PRs were updated (22 open, 26 closed/merged), with no new releases. The day was dominated by v2.0 stability follow-ups: MCP session recovery and tool-name validation, shell command output handling, memory-compression data loss, and multiple desktop UX issues. Several notable PRs were closed/merged, including native Computer Use support and Matrix E2EE fixes. Community sentiment remains engaged but heavily tilted toward bug reports and regressions from v2.0. Overall project health is mixed-positive: velocity is strong, but maintainer attention is needed on performance regressions and contributor-facing CI friction.

---

## 2. Releases

**None.**

No new releases were published in the last 24 hours. User-reported versions in issues remain `v2.0.1` and `v2.0.0.post3`.

---

## 3. Project Progress

26 PRs were closed/merged in the window. Highlights include:

- **[PR #6424](https://github.com/agentscope-ai/QwenPaw/pull/6424) — feat(computer-use): native desktop GUI automation for Windows and macOS**  
  Closed/merged. Adds accessibility-first native desktop automation plus Tauri control mode.

- **[PR #6486](https://github.com/agentscope-ai/QwenPaw/pull/6486) — fix(matrix): probe vodozemac E2EE backend**  
  Closed/merged. Fixes Matrix encryption on Python 3.12 by falling back to/using `vodozemac` when legacy `olm` is unavailable. Resolves [#6476](https://github.com/agentscope-ai/QwenPaw/issues/6476).

- **[PR #6562](https://github.com/agentscope-ai/QwenPaw/pull/6562) — Fix Bug #6533, #6506, and #60...**  
  Closed/merged. First-time contributor PR fixing `/mission` TypeError, `spawn_subagent` approval-level inheritance, and another related bug.

- **[PR #6256](https://github.com/agentscope-ai/QwenPaw/pull/6256) — feat(governance): make sandbox-unavailable fallback action configurable**  
  Closed/merged. Resolves [#6250](https://github.com/agentscope-ai/QwenPaw/issues/6250); improves operator control when sandbox is unavailable.

- **[PR #6582](https://github.com/agentscope-ai/QwenPaw/pull/6582) — fix(sandbox): fix sandbox cleanup handling**  
  Closed/merged.

- **[PR #6584](https://github.com/agentscope-ai/QwenPaw/pull/6584) — fix(ci): ensure changes be detected in next reload()**  
  Closed/merged. CI reliability fix.

- **[PR #6556](https://github.com/agentscope-ai/QwenPaw/pull/6556) — feat(creator): creation checkpoints, home redesign, media recovery, export/import, bilingual guide**  
  Closed/merged. Large iteration on the QwenPaw Creator plugin.

Still-open work receiving updates includes provider unification ([PR #6302](https://github.com/agentscope-ai/QwenPaw/pull/6302)), macOS Computer Use identity fix ([PR #6590](https://github.com/agentscope-ai/QwenPaw/pull/6590)), MCP session recovery ([PR #6586](https://github.com/agentscope-ai/QwenPaw/pull/6586)), and uploaded filename preservation ([PR #6567](https://github.com/agentscope-ai/QwenPaw/pull/6567)).

---

## 4. Community Hot Topics

Most-commented issues in the last 24h:

- **[#6307 — [Performance] v2.0 introduces ~2s fixed overhead per simple conversational reply vs v1.x](https://github.com/agentscope-ai/QwenPaw/issues/6307)** — 7 comments  
  Users report a constant ~2s latency penalty in v2.0 independent of model time. This is the single most important community pain point right now.

- **[#6524 — [Bug] MCP backend restart: client cannot auto-recover until `list mcp`](https://github.com/agentscope-ai/QwenPaw/issues/6524)** — 5 comments  
  Stale `mcp-session-id` after server restart breaks tool querying. A fix PR now exists: [#6586](https://github.com/agentscope-ai/QwenPaw/pull/6586).

- **[#6563 — CI bug: 'Real behavior proof' workflow blocks all fork PRs](https://github.com/agentscope-ai/QwenPaw/issues/6563)** — 4 comments  
  `real-behavior-proof.yml` fails on every fork PR with `Resource not accessible by integration`, blocking external contributors. This is likely scaring away first-time contributors.

- **[#6464 — [Bug] Connection test fails: API error when connecting to model 'xxx'](https://github.com/agentscope-ai/QwenPaw/issues/6464)** — 3 comments  
  Deployment on AgentScope Platform shows empty model list and failed model connection tests.

Underlying needs: users are asking for **lower v2.0 overhead**, **robust MCP session lifecycle**, **better session tree organization**, and **a smoother open-source contribution experience**.

Also active:

- [#6559 — Unwanted session forking during main conversation, no parent-child grouping](https://github.com/agentscope-ai/QwenPaw/issues/6559)
- [#6512 — `execute_shell_command` large output truncation](https://github.com/agentscope-ai/QwenPaw/issues/6512)
- [#6555 — Dream/memory compression misses early-session events](https://github.com/agentscope-ai/QwenPaw/issues/6555)

---

## 5. Bugs & Stability

Ranked by severity:

1. **High — [#6307: v2.0 ~2s fixed overhead per simple reply](https://github.com/agentscope-ai/QwenPaw/issues/6307)**  
   Architectural regression in v2.0. No linked fix PR yet. Likely affecting perceived product quality broadly.

2. **High — [#6555: Dream/memory compression permanently loses early-session events](https://github.com/agentscope-ai/QwenPaw/issues/6555)**  
   Important user operations can never be written to daily memory if they scroll out before the Dream process runs. Data-loss class bug.

3. **High — [#6589: `execute_shell_command` huge output freezes the UI](https://github.com/agentscope-ai/QwenPaw/issues/6589)**  
   Frontend renders tens of thousands of lines at once, blocking the main thread on Windows. Related to [#6512](https://github.com/agentscope-ai/QwenPaw/issues/6512).

4. **Medium-High — [#6565: `execute_shell_command` multi-line collapse + PIPE background hang](https://github.com/agentscope-ai/QwenPaw/issues/6565)**  
   Newlines outside quotes are collapsed into spaces, breaking multi-line commands; Linux PIPE mode can hang on background processes.

5. **Medium — [#6524: MCP backend restart leaves stale session](https://github.com/agentscope-ai/QwenPaw/issues/6524)**  
   Requires manual `list mcp`. Fix PR open: [#6586](https://github.com/agentscope-ai/QwenPaw/pull/6586).

6. **Medium — [#6557: MCP tool names starting with `-` break strict LLM APIs](https://github.com/agentscope-ai/QwenPaw/issues/6557)**  
   Kimi/Moonshot rejects requests with `invalid_function_name`. Fix PR open: [#6561](https://github.com/agentscope-ai/QwenPaw/pull/6561).

7. **Medium — [#6588: `spawn_subagent` single-task mode unusable because `batch` is required](https://github.com/agentscope-ai/QwenPaw/issues/6588)**  
   Schema exposes `batch` as required even in single-task mode, blocking legitimate use.

8. **Medium — [#6578: Cron `dispatch.mode: "final"` not honored](https://github.com/agentscope-ai/QwenPaw/issues/6578)**  
   Intermediate events are all pushed to the channel instead of only the final response.

9. **Medium — [#6563: CI blocks all fork PRs](https://github.com/agentscope-ai/QwenPaw/issues/6563)**  
   Process failure in `real-behavior-proof.yml` affects every external contributor.

10. **Low/Closed — [#6533: `/mission` command TypeError](https://github.com/agentscope-ai/QwenPaw/issues/6533)**  
    Fixed by [#6562](https://github.com/agentscope-ai/QwenPaw/pull/6562).

11. **Fixed/Closed — [#6476: Matrix E2EE unavailable on Python 3.12](https://github.com/agentscope-ai/QwenPaw/issues/6476)**  
    Fixed by [#6486](https://github.com/agentscope-ai/QwenPaw/pull/6486).

---

## 6. Feature Requests & Roadmap Signals

Strong signals for near-term roadmap:

- **Session hierarchy for forks** — [#6559](https://github.com/agentscope-ai/QwenPaw/issues/6559) asks for tree-like parent-child grouping, collapsible sub-sessions, and automatic fork reason labels. This is a major UX gap for heavy users.

- **Chat session UX improvements** — [#6560](https://github.com/agentscope-ai/QwenPaw/issues/6560) requests copy, ESC-stop, undo, mission mode, scroll performance, session ID, and context transfer. Combined with [#6558](https://github.com/agentscope-ai/QwenPaw/issues/6558) (message loss on switching sessions/UI state corruption), this is a cluster of frontend reliability work.

- **Shell command output handling** — [#6512](https://github.com/agentscope-ai/QwenPaw/issues/6512) and [#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589) both push for automatic file output or streaming mechanisms instead of rendering/truncating huge strings.

- **Global hotkey quick input (豆包/Raycast style)** — [#6568](https://github.com/agentscope-ai/QwenPaw/issues/6568) is a strong product-quality addition for desktop users.

- **Workflows / strong logical flows** — [#6571](https://github.com/agentscope-ai/QwenPaw/issues/6571) asks for Dify-like workflows to enforce permission-based logic; skill-based prompting is considered insufficiently strong for authorization checks.

- **Preserve original uploaded filenames, especially CJK** — [#6453](https://github.com/agentscope-ai/QwenPaw/issues/6453) already has two open PRs: [#6567](https://github.com/agentscope-ai/QwenPaw/pull/6567) and [#6492](https://github.com/agentscope-ai/QwenPaw/pull/6492). High chance of landing soon.

- **Undo / re-edit previous turn** — [#6408](https://github.com/agentscope-ai/QwenPaw/issues/6408) was closed, suggesting an accepted direction or already-planned `/undo` mechanism.

Likely next-version items: MCP tool-name sanitization, MCP stale-session recovery, uploaded filename display, shell output streaming/truncation improvements, and continued Console UI stability work.

---

## 7. User Feedback Summary

Users are reporting both enthusiasm and frustration. One issue explicitly starts with "非常不错的项目" ("very good project"), but the surrounding feedback shows real v2.0 friction:

- **Performance regressions matter**: the ~2s fixed overhead ([#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307)) is the top complaint and likely affects every conversational interaction.
- **Data integrity concerns are accumulating**: lost messages when switching sessions ([#6558](https://github.com/agentscope-ai/QwenPaw/issues/6558)), lost memory events ([#6555](https://github.com/agentscope-ai/QwenPaw/issues/6555)), and chaotic session forking ([#6559](https://github.com/agentscope-ai/QwenPaw/issues/6559)) undermine trust for daily power users.
- **Desktop UX polish is desired**: dynamic character count flicker ([#6585](https://github.com/agentscope-ai/QwenPaw/issues/6585)), multi-file upload display ([#6583](https://github.com/agentscope-ai/QwenPaw/issues/6583)), app naming ([#6587](https://github.com/agentscope-ai/QwenPaw/issues/6587)), and modal warnings ([#6452](https://github.com/agentscope-ai/QwenPaw/issues/6452)).
- **Contributor experience is currently painful**: fork PRs being blocked by CI ([#6563](https://github.com/agentscope-ai/QwenPaw/issues/6563)) is sending a negative signal to first-time contributors.

Overall, users see strong potential but are asking for stability-first hardening of v2.0.

---

## 8. Backlog Watch

Items needing maintainer attention:

- **[#6307: v2.0 ~2s fixed overhead](https://github.com/agentscope-ai/QwenPaw/issues/6307)**  
  High-impact performance regression, 7 comments, no linked fix PR. This should be prioritized.

- **[#6302: feat: unify provider discovery, model metadata, routing, and agent controls](https://github.com/agentscope-ai/QwenPaw/pull/6302)**  
  Large provider-platform PR open since 2026-07-21. No visible review comments in the data; may need maintainer review or scope guidance.

- **[#6563: CI blocks all fork PRs](https://github.com/agentscope-ai/QwenPaw/issues/6563)**  
  Directly blocks external contributions. Needs urgent CI fix and perhaps a companion PR.

- **[#6312: feat(console): configurable theme/skin module (Task 1 draft)](https://github.com/agentscope-ai/QwenPaw/pull/6312)**  
  Draft PR from 2026-07-21 with no recent maintainer response; needs direction.

- **[#6528: fix: resolve agent.json corruption](https://github.com/agentscope-ai/QwenPaw/pull/6528)**  
  First-time contributor fix for Windows agent.json BOM/corruption issues, open since 2026-07-28.

- **[#6531: fix(acp): add models field to new_session response](https://github.com/agentscope-ai/QwenPaw/pull/6531)**  
  Needed for external ACP clients (Multica, OpenCode, Zed); open and under review.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-07-31

## 1. Today's Overview
ZeptoClaw had a very low-activity day: no issues were updated, no issues are open/active, and no new releases were published. The only activity is one open pull request, [#645](https://github.com/qhkm/zeptoclaw/pull/645), which was last updated on 2026-07-30 and targets runtime security and process cleanup. The zero-issue backlog is positive, but the absence of a release means the pending fix is not yet shipped to users. Overall, the project appears stable, with maintainer attention focused on hardening runtime behavior rather than adding new features.

## 2. Releases
No new releases were published for ZeptoClaw in this reporting window. There are no release notes, breaking changes, or migration steps to report.

## 3. Project Progress
No pull requests were merged or closed today. The sole item of progress is the ongoing work in [#645](https://github.com/qhkm/zeptoclaw/pull/645), titled **“fix(runtime): scrub subprocess secrets and reap timed-out process trees.”** This PR remains open, but its recent update indicates active development. It addresses two important runtime concerns:

- Preventing model-authored shell commands from inheriting ZeptoClaw’s full process environment, which could expose provider keys and other credentials.
- Ensuring timed-out subprocess trees are terminated and reaped consistently instead of being orphaned.

These fixes have not yet been merged or released.

## 4. Community Hot Topics
There are no GitHub Issues in the current dataset, and [#645](https://github.com/qhkm/zeptoclaw/pull/645) has no reported comments or reactions. Therefore, there are no identifiable community hot topics in this window. The only community-facing signal is the content of PR #645 itself, which reflects user-facing concerns around secret leakage and timeout behavior.

## 5. Bugs & Stability
No new bugs were reported as GitHub Issues today. However, PR #645 implies two stability/security bugs are known and being addressed. Ranked by severity:

1. **Critical — Credential exposure via subprocess environment**: Runtime shell commands inherited ZeptoClaw’s full process environment, allowing provider keys and unrelated credentials to reach model-authored commands.  
   Fix PR: [#645](https://github.com/qhkm/zeptoclaw/pull/645)

2. **High — Orphaned subprocess trees on timeout**: Timeouts dropped `Command::output()` futures without reliably terminating and reaping descendant processes, potentially leaving background processes running.  
   Fix PR: [#645](https://github.com/qhkm/zeptoclaw/pull/645)

3. **Unclear — Docker container cleanup**: The PR description also references Docker containers, likely tied to timeout cleanup, but the dataset is truncated. This is presumably addressed in the same PR.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed or updated in this window. The main roadmap signal is maintainer-driven: a focus on runtime hardening, secret hygiene, and process-lifecycle guarantees. If merged, PR [#645](https://github.com/qhkm/zeptoclaw/pull/645) could set the stage for a security- or reliability-focused release. Future versions may emphasize safer default behavior for model-authored subprocess execution.

## 7. User Feedback Summary
No direct user feedback is available in this window — there are no issue comments, PR comments, or reactions in the dataset. Implicit user pain points can be inferred from PR [#645](https://github.com/qhkm/zeptoclaw/pull/645): users likely want assurance that model-authored commands cannot access sensitive credentials and that timed-out commands do not leave stray processes behind. No satisfaction or dissatisfaction data is available.

## 8. Backlog Watch
There are no long-unanswered GitHub Issues requiring maintainer attention. The most important item in the backlog is PR [#645](https://github.com/qhkm/zeptoclaw/pull/645), open since 2026-07-23 and last updated 2026-07-30. Because it addresses a critical security issue and runtime stability, it should remain a priority for review and merge.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-31

## Today’s Overview

ZeroClaw saw sustained issue and PR activity in the last 24 hours: 14 issues are open/active, 50 PRs are open, and no issues or PRs were closed/merged. The activity is concentrated around two newly reported security bugs, several high-risk architecture RFCs, and local-model/API-compatibility work. The quick follow-up fix PRs for the gateway webhook and command-allowlist bugs indicate a responsive contributor pipeline. However, the zero-merge day and many `needs-author-action` PRs suggest review bandwidth or author follow-up is a current bottleneck. No new release was published.

## Releases

No new releases were published in this window. No changelog, breaking changes, or migration notes are available.

## Project Progress

- **Merged/closed PRs today:** 0  
- **Merged/closed issues today:** 0  

No completed feature work is reportable from merged PRs. The following notable open PRs were updated and represent in-flight progress:

- [PR #9569](https://github.com/zeroclaw-labs/zeroclaw/pull/9569): Fail closed when WhatsApp Cloud or Linq webhooks cannot be verified.
- [PR #9568](https://github.com/zeroclaw-labs/zeroclaw/pull/9568): Match command allowlist entries case-insensitively on Unix.
- [PR #9571](https://github.com/zeroclaw-labs/zeroclaw/pull/9571): Remove the WATI channel entirely.
- [PR #9410](https://github.com/zeroclaw-labs/zeroclaw/pull/9410): Default command audit logging to disabled, matching the security-honesty direction.
- [PR #9325](https://github.com/zeroclaw-labs/zeroclaw/pull/9325): Make streamed user turns read as conversation content, not log payloads.
- [PR #8937](https://github.com/zeroclaw-labs/zeroclaw/pull/8937): Stream-hash tool args in `loop_detector` to avoid per-call deep clones.
- [PR #8928](https://github.com/zeroclaw-labs/zeroclaw/pull/8928): Show active resolved log path in Doctor diagnostics.

## Community Hot Topics

Most active issues by comment/reaction count:

- [Issue #9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) — RFC: Separate conversation history from agent-curated long-term memory  
  **12 comments** · High-risk memory lifecycle architecture discussion.

- [Issue #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) — RFC: OpenAI Chat Completions compatibility adapter  
  **7 comments** · Strong demand for OpenAI-compatible client support.

- [Issue #8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) — RFC: Add cross-turn conversation correlation to OTel export  
  **7 comments** · Observability scoping and conversation correlation.

- [Issue #5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) — Feature: compact `local_small` runtime profile and prompt-budget contract  
  **7 comments, 2 👍** · Local-first users want less prompt bloat and stricter output boundaries.

- [Issue #8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) — RFC: Realtime speech-to-speech channel for Gemini Live  
  **5 comments** · Multimodal realtime channel interest.

- [Issue #8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) — Feature: OpenAI-compatible chat completions endpoint  
  **5 comments** · Companion/overlapping request with #8603.

Underlying needs: interconnect with existing OpenAI-compatible frontends, improve local-model usability, separate memory lifecycles, and strengthen observability.

## Bugs & Stability

| Severity | Issue | Summary | Fix PR |
|---|---|---|---|
| **S0** | [Issue #9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) | Gateway webhook handlers for WhatsApp Cloud, Linq, and WATI do not fail closed when no verification secret is configured. | [PR #9569](https://github.com/zeroclaw-labs/zeroclaw/pull/9569) and [PR #9571](https://github.com/zeroclaw-labs/zeroclaw/pull/9571) |
| **S2** | [Issue #9566](https://github.com/zeroclaw-labs/zeroclaw/issues/9566) | Uppercase `allowed_commands` entries never match on Unix, silently denying valid commands. Regressed from #4552. | [PR #9568](https://github.com/zeroclaw-labs/zeroclaw/pull/9568) |
| **S3** | [Issue #8847](https://github.com/zeroclaw-labs/zeroclaw/issues/8847) | `cargo test --doc` fails under Rust 1.96 due to duplicated rustdoc `default-theme` flag. | No direct fix yet; [PR #9545](https://github.com/zeroclaw-labs/zeroclaw/issues/9545) adds a rustdoc warning gate. |

The two highest-severity bugs both have open fix PRs, which is a positive signal.

## Feature Requests & Roadmap Signals

- **OpenAI-compatible endpoint** — [Issue #8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) and [Issue #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)  
  Status: `accepted` / `in-progress`. Strong candidate for the next release.

- **Compact local model profile** — [Issue #5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)  
  Status: `accepted`. Likely near-term, especially paired with [Issue #7951](https://github.com/zeroclaw-labs/zeroclaw/issues/7951) on effort-based local/cloud routing.

- **Memory lifecycle separation** — [Issue #9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)  
  High-risk RFC, still under discussion.

- **OTel cross-turn correlation** — [Issue #8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933)  
  High-risk RFC, awaiting maintainer review.

- **Gemini Live realtime channel** — [Issue #8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780)  
  High-risk RFC, early stage.

- **Mixture-of-Agents virtual provider** — [Issue #8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568)  
  High-risk RFC.

- **CI automation** — [Issue #9345](https://github.com/zeroclaw-labs/zeroclaw/issues/9345) and [Issue #9545](https://github.com/zeroclaw-labs/zeroclaw/issues/9545) are `accepted` and likely to land as process improvements.

Prediction: the OpenAI-compatible endpoint work and local-model profile work are the most likely next-version features. Most high-risk RFCs still need maintainer sign-off.

## User Feedback Summary

- **WebChat auto-scroll frustration** — [Issue #9562](https://github.com/zeroclaw-labs/zeroclaw/issues/9562): Auto-scroll overrides manual scroll during streaming, making history hard to read while the agent is replying.
- **Local-model prompt bloat** — [Issue #5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287): Users report prompt bloat, permissive fallback parsing, and internal tool instructions leaking into output on local models.
- **Client ecosystem lockout** — [Issue #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) / [Issue #8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550): Open WebUI, LobeChat, and custom integrations cannot connect without a custom adapter.
- **Security concerns from source inspection** — [Issue #9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565): Webhook handlers can dispatch unauthenticated messages into the agent.
- **Silent policy breakage** — [Issue #9566](https://github.com/zeroclaw-labs/zeroclaw/issues/9566): Uppercase allowlist commands are silently denied, which is confusing for Unix users.
- No explicit satisfaction data was available in this window; the above are direct pain-point signals.

## Backlog Watch

These items have been open for a while and appear to need maintainer attention:

- [Issue #9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) — RFC on memory separation, 17 days old, 12 comments, `needs-maintainer-review`, `risk:high`.
- [Issue #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) — OpenAI-compatible adapter RFC, 29 days old, `in-progress`, `needs-maintainer-review`.
- [Issue #8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) — OTel correlation RFC, 21 days old, `needs-maintainer-review`.
- [Issue #8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) — Gemini Live realtime channel RFC, 25 days old, `needs-maintainer-review`.
- [Issue #8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) — Mixture-of-Agents provider RFC, 30 days old, `needs-maintainer-review`.
- [Issue #5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) — `local_small` profile request, 118 days old, `accepted` but still open.
- [PR #8953](https://github.com/zeroclaw-labs/zeroclaw/pull/8953) — Ollama endpoint placement fix in dev templates, marked `stale-candidate` and `needs-author-action`.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*