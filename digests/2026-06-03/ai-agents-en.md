# OpenClaw Ecosystem Digest 2026-06-03

> Issues: 456 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-03 00:36 UTC

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

# OpenClaw Project Digest — 2026-06-03

## 1. Today's Overview

OpenClaw shows **extremely high community activity** with 456 issues and 500 PRs updated in the last 24 hours, indicating a project in active crisis management and rapid iteration. The 390 open PRs against 110 merged/closed suggests a significant backlog bottleneck, with many fixes queued but not yet landed. **No new release** was cut today, despite multiple critical regressions in recent versions (2026.5.26–2026.5.28) affecting core session state, message delivery, and provider authentication. The project appears to be in a stabilization sprint following a turbulent May release cycle, with heavy focus on session reliability, Codex integration, and cross-channel message delivery. Maintainer review capacity is the clear constraint, as numerous PRs are marked "ready for maintainer look" while critical bugs await triage.

---

## 2. Releases

**No new releases** (0).

The absence of a release despite active P1 regression fixes suggests maintainers are accumulating critical patches before cutting 2026.6.x. Notable unshipped fixes include session-state corruption, Slack/Telegram message loss, and Codex turn-completion stalls.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#89601](https://github.com/openclaw/openclaw/pull/89601) | codezz | Fix: stop schema-padded poll modifiers from blocking send | Unblocks Telegram/Discord poll+send interactions |
| [#71203](https://github.com/openclaw/openclaw/pull/71203) | FtlC-ian | Refresh configured agent models.json caches during startup warmup | Reduces cold-start provider discovery failures |

### Key Open PRs Advancing

| PR | Author | Status | What It Fixes |
|:---|:---|:---|:---|
| [#89590](https://github.com/openclaw/openclaw/pull/89590) | amittell | Needs proof | Forwards turn-source for embedded plugin approvals to originating chat (Telegram, Discord, Slack) — fixes silent approval failures |
| [#89290](https://github.com/openclaw/openclaw/pull/89290) | amittell | Needs proof | Prevents Codex premature turn termination after raw reasoning progress |
| [#89038](https://github.com/openclaw/openclaw/pull/89038) | Jerry-Xin | Ready for maintainer look | Fixes qqbot reconnect message loss; drains pending deliveries |
| [#89039](https://github.com/openclaw/openclaw/pull/89039) | Jerry-Xin | Needs proof | Prevents silent message loss from `EmbeddedAttemptSessionTakeoverError` |
| [#89045](https://github.com/openclaw/openclaw/pull/89045) | Jerry-Xin | Needs proof | Recovers terminal session status (`failed`/`timeout`/`killed`) on visible inbound turns |
| [#88992](https://github.com/openclaw/openclaw/pull/88992) | Jerry-Xin | Needs proof | Recovers stranded replies when LLM forgets `message` tool in `message_tool_only` mode |
| [#88968](https://github.com/openclaw/openclaw/pull/88968) | Jerry-Xin | Needs proof | Prevents memory flush failure from aborting user reply |
| [#89640](https://github.com/openclaw/openclaw/pull/89640) | harjothkhara | Needs proof | Keeps channel send durable when transcript mirror fails |
| [#89644](https://github.com/openclaw/openclaw/pull/89644) | vincentkoc | Ready for maintainer look | Skips unreadable catalog records instead of crashing normalization |
| [#89638](https://github.com/openclaw/openclaw/pull/89638) | vincentkoc | Ready for maintainer look | Guards message action schema discovery against malformed plugins |

**Pattern**: Jerry-Xin is the dominant contributor for session-state and message-delivery hardening, with 6 PRs in flight addressing cascading failure modes.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count + engagement)

| # | Title | Comments | 👍 | Status | Underlying Need |
|:---|:---|:---:|:---:|:---|:---|
| [#52875](https://github.com/openclaw/openclaw/issues/52875) | Session_send gives no session found (regression) | 21 | 1 | Open, stale, P2 | **Session discovery reliability** — agents cannot locate peer sessions after upgrade, breaking multi-agent workflows |
| [#88838](https://github.com/openclaw/openclaw/issues/88838) | Track core session/transcript SQLite migration via accessor seam | 17 | 1 | Open, needs maintainer review | **Technical debt reduction** — community wants incremental, reviewable migration instead of risky big-bang rewrites |
| [#63918](https://github.com/openclaw/openclaw/issues/63918) | Cron agentTurn sends thinking=none to OpenAI (gpt-5-nano 400) | 17 | 1 | Open, P2 | **Model compatibility hygiene** — OpenAI API drift not caught in test matrix |
| [#67035](https://github.com/openclaw/openclaw/issues/67035) | Windows chat UI regression: input swallowed, replies invisible | 14 | 0 | Open, needs live repro, P1 | **Cross-platform UI parity** — Windows users effectively blocked from basic chat |
| [#39604](https://github.com/openclaw/openclaw/issues/39604) | Add tools.web.fetch.allowPrivateNetwork | 13 | 9 | Open, needs security review, P2 | **Enterprise/self-hosted flexibility** — high 👍 signals strong demand; security review is blocker |

### Analysis

- **#52875** and **#88838** reveal architectural tension: the session system is simultaneously brittle (breaks on upgrade) and undergoing risky migration (SQLite rewrite). Users need stability *and* evolution.
- **#39604** (9 👍, security-blocked) is a classic "enterprise feature" — high demand, low maintainer priority due to security surface area.
- **#67035** is a P1 with zero 👍 but high severity, suggesting Windows users are a minority voice with outsized impact when their platform breaks.

---

## 5. Bugs & Stability

### Critical (P1) Regressions & Crashes

| # | Title | Regression? | Fix PR? | Channel/Component | Risk |
|:---|:---|:---:|:---:|:---|:---|
| [#67035](https://github.com/openclaw/openclaw/issues/67035) | Windows chat UI: input swallowed, streamed replies invisible | ✅ 2026.4.14 | ❌ No | Web UI / Windows | **Platform usability collapse** |
| [#88312](https://github.com/openclaw/openclaw/issues/88312) | Codex turn-completion stall returns ("stopped before confirming") | ✅ 2026.5.27, re-regression of #84076 | ❌ No | Codex app-server | **Multi-tool agent failure** |
| [#86519](https://github.com/openclaw/openclaw/issues/86519) | Agent repeats identical replies 2-10x on Telegram after 5.20 | ✅ 2026.5.20 | Partial (reduced 8-10x → 2-3x in 5.22) | Telegram | **Spam/UX degradation** |
| [#86047](https://github.com/openclaw/openclaw/issues/86047) | Codex plugin approval stalls, interrupted turns, timeouts | ✅ 2026.5.22 | ❌ No | Nextcloud Talk / Codex | **Live session corruption** |
| [#88369](https://github.com/openclaw/openclaw/issues/88369) | Isolated cron self-conflicts with EmbeddedAttemptSessionTakeoverError | ✅ 2026.5.28-beta.3 | ❌ No | Cron / session isolation | **Scheduled job reliability** |
| [#89549](https://github.com/openclaw/openclaw/issues/89549) | sessions_spawn child runs fail with HTTP 401 Missing scopes | ❌ New | ❌ No | sessions_spawn / OAuth | **Subagent auth propagation** |
| [#80715](https://github.com/openclaw/openclaw/issues/80715) | Slack replies silently dropped (composed, never posted) | ❌ Pattern (2x this week) | ❌ No | Slack | **Silent message loss — worst UX** |
| [#86090](https://github.com/openclaw/openclaw/issues/86090) | runHeartbeatOnce phantom run, no model turn executed | ❌ New | ❌ No | Core scheduling | **False positive "ran" status** |
| [#89374](https://github.com/openclaw/openclaw/issues/89374) | Timeout compaction reports success but leaves session unrecoverable | ❌ New | ❌ No | Codex / compaction | **Context limit death spiral** |

### Stability Themes

1. **Session state is the single largest reliability surface**: ~60% of P1s involve session corruption, stale state, or state-machine desynchronization.
2. **Codex integration is a recurring regression vector**: Three separate P1s trace to Codex app-server/harness behavior changes in 2026.5.22–2026.5.28.
3. **"Silent loss" dominates over "loud crash"**: Slack drops, phantom heartbeats, and swallowed replies are harder to detect and debug than stack traces.

---

## 6. Feature Requests & Roadmap Signals

| # | Title | 👍 | Likelihood in Next Version | Signal |
|:---|:---|:---:|:---|:---|
| [#39604](https://github.com/openclaw/openclaw/issues/39604) | `tools.web.fetch.allowPrivateNetwork` | 9 | Medium | Security review is gate; high demand may force prioritization |
| [#86169](https://github.com/openclaw/openclaw/issues/86169) | Xiaomi MiMo Token Plan provider support | 1 | Low | Closed without merge; niche provider, low traction |
| [#76159](https://github.com/openclaw/openclaw/issues/76159) | Per-job `acceptSilentStop` flag for cron | 1 | Medium | Well-scoped, solves real cron false-error problem; needs product decision |
| [#84216](https://github.com/openclaw/openclaw/issues/84216) | Dropdown to minimize recent sessions in control menu | 3 | High | Small UI fix, clear UX win, low risk |
| [#81061](https://github.com/openclaw/openclaw/issues/81061) | `before_route_inbound_message` hook | 2 | Medium | Architectural enabler for bridging/proxying; aligns with multi-agent direction |

**Predicted for 2026.6.x**: #84216 (UI), #76159 (cron), and likely a narrowed version of #39604 (private network opt-in with strict CIDR allowlisting).

---

## 7. User Feedback Summary

### Pain Points (Verbatim Themes)

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Upgrade fragility** | "after upgrading to 2026-3-22 my main agent is not able to contact other agents" (#52875); "After updating from v2026.5.26 to v2026.5.27, the feishu channel fails" (#87646) | Critical — trust erosion |
| **Silent data/message loss** | "Slack channel and DM replies composed by the runtime are silently dropped" (#80715); "memory-core Dreaming...silently deletes daily memory files" (#84882) | Critical — undetectable failures |
| **Codex reliability decay** | "same user workflow had worked for weeks" now "interrupted turns and tool-execution timeouts" (#86047) | High — paying ChatGPT Plus users affected |
| **Platform inequality** | Windows UI "regressed badly" (#67035); Android node events lost (#79552) | High — accessibility barrier |
| **Auth/configuration drift** | "doctor --fix did not recover Codex provider/runtime mismatch" (#87650); "agents only provide generic replies, completely ignoring workspace files" (#85773) | High — operational burden |

### Satisfaction Signals

- **#76952** (closed): "Now that Realtime Talk is working, I love the feature. It feels genuinely useful and low-latency" — rare positive feedback, but note it required user to figure it out themselves ("docs and feature improvements would make it easier").
- **#87072** (PR): Interleaved Telegram progress lane — community contributor investing in polish for "CLI ergonomics without changing execution semantics."

### Use Case Evolution

Users are pushing OpenClaw into **multi-agent orchestration** (ACP parent/child sessions, agent-to-agent communication tools) and **enterprise deployment** (private network access, install policy enforcement, operator controls). The project is being pulled from "personal AI assistant" toward "team/organization AI infrastructure" faster than its architecture may support.

---

## 8. Backlog Watch

### Critical Issues Stalled >2 Weeks

| # | Age | Blocker | Risk |
|:---|:---|:---|:---|
| [#52875](https://github.com/openclaw/openclaw/issues/52875) | ~10 weeks | Stale, no fix PR, regression | Multi-agent communication broken since March |
| [#55334](https://github.com/openclaw/openclaw/issues/55334) | ~10 weeks | Needs maintainer review, product decision, source repro | Gateway OOM — production stability |
| [#52249](https://github.com/openclaw/openclaw/issues/52249) | ~11 weeks | Needs maintainer review, product decision | ACP parent session stuck — core orchestration |
| [#41199](https://github.com/openclaw/openclaw/issues/41199) | ~12 weeks | Linked PR open | Agent-to-agent tool parameter conflicts — systematic LLM/schema mismatch |
| [#77136](https://github.com/openclaw/openclaw/issues/77136) | ~4 weeks | Needs maintainer review, live repro | WebChat message rendering — data intact, UI fails |
| [#80036](https://github.com/openclaw/openclaw/issues/80036) | ~4 weeks | Needs maintainer review, live repro | Chrome MCP timeout — macOS-specific browser automation |

### PRs Ready for Maintainer Review (Unmerged)

| # | Age | What It Does | Risk of Staleness |
|:---|:---|:---|:---|
| [#89613](https://github.com/openclaw/openclaw/pull/89613) | 1 day | Document auth profile failure policy | Low — docs, but blocks understanding |
| [#89644](https://github.com/openclaw/openclaw/pull/89644) | <1 day | Skip unreadable catalog records | Low — crash prevention |
| [#89638](https://github.com/openclaw/openclaw/pull/89638) | <1 day | Guard message action schema discovery | Low — crash prevention |
| [#72314](https://github.com/openclaw/openclaw/pull/72314) | ~5 weeks | Dedupe idless inbound retries | Medium — message loss fix, needs rebase risk |
| [#89038](https://github.com/openclaw/openclaw/pull/89038) | 2 days | qqbot reconnect + pending delivery drain | Medium — high merge conflict with other channel PRs |

### Maintainer Capacity Assessment

**Bottleneck confirmed**: 390 open PRs, many marked "ready for maintainer look" for days, while P1 regressions accumulate without assigned owners. The `clawsweeper:no-new-fix-pr` and `clawsweeper:needs-maintainer-review` labels are heavily overrepresented. Consider:

- Expanding maintainer rotation or delegation
- Automated merge for `automerge`-labeled PRs with passing CI (#89601 pattern)
- Triage sprint to clear `stale` + `P1` intersection

---

*Digest generated from openclaw/openclaw GitHub data as of 2026-06-03. All links: https://github.com/openclaw/openclaw*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem
**Date: 2026-06-03**

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source ecosystem is experiencing intense stabilization pressure as projects transition from experimental prototypes to production infrastructure. A clear bifurcation has emerged between **reference implementations** (OpenClaw, IronClaw) pursuing enterprise-grade multi-agent orchestration and **application-layer projects** (LobsterAI, CoPaw, ZeroClaw) optimizing for specific deployment contexts (desktop, terminal, enterprise messaging). All major projects are currently in pre-release stabilization sprints with elevated bug velocity, particularly around session state reliability, provider API drift, and security hardening. The ecosystem is collectively grappling with the tension between "batteries-included" convenience and "bring your own provider" flexibility, with MCP (Model Context Protocol) emerging as a de facto but still immature integration standard.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score | Assessment |
|:---|:---:|:---:|:---|:---|
| **OpenClaw** | 456 | 500 (390 open, 110 merged) | None | ⚠️ **Strained** | Extreme velocity with severe review bottleneck; 78% open PR rate indicates maintainer capacity crisis |
| **NanoBot** | 10 | 28 (18 merged, 10 open) | None | 🟢 **Healthy** | Balanced merge rate (64%); focused stabilization with clear progress |
| **Hermes Agent** | 50 | 50 (13 merged, 37 open) | None | ⚠️ **Stressed** | Growing backlog (74% open PR rate); new P1s outpacing fixes |
| **PicoClaw** | 3 | 14 (5 merged, 9 open) | v0.2.9-nightly | 🟢 **Healthy** | Nightly cadence with rapid turnaround; some stale PR accumulation |
| **NanoClaw** | 1 | 7 (4 merged, 3 open) | None | 🟡 **Stable** | Moderate velocity; security fix merged; review bottleneck emerging (31-day stale PR) |
| **NullClaw** | 1 | 1 (0 merged, 1 open) | None | 🟡 **Stable** | Minimal activity; single focused regression fix pending review |
| **IronClaw** | 29 | 50 (31 merged, 19 open) | None | 🟡 **Stabilizing** | High throughput (62% merge rate); systematic "Reborn" hardening offset by model-fragility bugs |
| **LobsterAI** | 0 | 50 (47 merged, 3 open) | None | 🟢 **Strong** | Exceptional merge rate (94%); corporate-team velocity; low external community engagement |
| **CoPaw** | 48 | 32 (9 merged, 23 open) | None | ⚠️ **Strained** | Security audit surge; AgentScope 2.0 migration uncertainty; 72% open PR rate |
| **ZeroClaw** | 49 | 50 (17+ merged, 20 open) | v0.8.0-beta-2 | 🟡 **Stabilizing** | Largest release since v0.7.5; terminal-first pivot; provider compatibility debt |

*Health scoring considers: merge ratio, issue resolution velocity, release cadence, backlog age, and critical bug accumulation.*

---

## 3. OpenClaw's Position

### Advantages vs. Peers

| Dimension | OpenClaw Position | Peer Comparison |
|:---|:---|:---|
| **Community scale** | Largest absolute contributor base (456 issues/500 PRs in 24h) | 10-50x higher raw activity than NanoBot, PicoClaw, NanoClaw, NullClaw |
| **Multi-agent architecture** | Most mature ACP parent/child session system | IronClaw approaching parity; ZeroClaw building multi-agent runtime; others single-agent focused |
| **Channel breadth** | Native Slack, Telegram, Discord, Feishu, QQ, WebChat, email | Matched by CoPaw; LobsterAI enterprise-IM heavy; ZeroClaw terminal-first |
| **Provider abstraction** | Deepest provider ecosystem with dynamic discovery | IronClaw, ZeroClaw comparable; NanoBot lightweight RAG alternative |

### Technical Approach Differences

- **OpenClaw**: Session-centric architecture with SQLite-backed transcript persistence; heavy investment in cross-channel message delivery guarantees; Codex integration as first-class citizen
- **IronClaw**: "Reborn" cooperative-multitasking runtime with WASM capability sandboxing; trigger-based autonomous execution; enterprise OAuth integration depth
- **ZeroClaw**: Rust-based performance-critical path; `zerocode` TUI for terminal-native workflows; ACP protocol extensions for diff/file-proposal workflows
- **LobsterAI**: Electron/desktop-first with embedded OpenClaw runtime; thinking-level controls for reasoning transparency; artifacts collaboration system
- **NanoBot**: Lightweight Python with local embedding RAG; WebUI hash-routing; `uv` toolchain modernism

### Community Size Reality

OpenClaw's **absolute activity dominance masks relative inefficiency**: its 78% open PR rate and 10-week stale issues (#52875, #55334) indicate a **contributor-to-maintainer ratio crisis**. LobsterAI achieves 94% merge rate with comparable daily PR volume through corporate team concentration. ZeroClaw and PicoClaw demonstrate healthier **signal-to-noise ratios** with smaller but more focused communities.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Session state reliability** | OpenClaw, IronClaw, ZeroClaw, CoPaw, PicoClaw | OpenClaw: session corruption, `EmbeddedAttemptSessionTakeoverError`; IronClaw: subagent durable completion; ZeroClaw: real heartbeat tracking; CoPaw: model config lost on session creation; PicoClaw: session history pollution |
| **Provider API drift / reasoning-content handling** | OpenClaw, IronClaw, ZeroClaw, NanoBot, CoPaw | OpenClaw: Codex turn-completion stalls; IronClaw: Claude Opus temperature rejection, Qwen/MiniMax fragility; ZeroClaw: DeepSeek-V4, Kimi `reasoning_content` missing; NanoBot: OpenAI-compatible `response_format`; CoPaw: DeepSeek `reasoning_content` multi-turn |
| **MCP (Model Context Protocol) robustness** | NanoBot, IronClaw, NanoClaw, ZeroClaw | NanoBot: session termination requiring restart; IronClaw: driver failure acknowledged but unusable; NanoClaw: union type evolution, HTTP-only transport; ZeroClaw: tool allowlist bypass |
| **Silent message/data loss** | OpenClaw, Hermes Agent, ZeroClaw | OpenClaw: Slack drops, phantom heartbeats; Hermes: disk-cleanup deletes cron jobs; ZeroClaw: `<think>` blocks leak to webhooks, XML `tool_result` tags to channels |
| **Security hardening** | CoPaw, ZeroClaw, NullClaw, Hermes Agent | CoPaw: 6 CVEs disclosed in one day (auth bypass, path traversal, secret leaks); ZeroClaw: channel tool bypass, weak pairing codes; NullClaw: PII redaction false positives; Hermes: API error information disclosure |
| **Desktop/installer reliability** | Hermes Agent, LobsterAI, CoPaw | Hermes: Windows "Access denied", Linux sandbox helper, macOS microphone entitlement; LobsterAI: Electron upgrade lag; CoPaw: Tauri auto-updater, Windows browser crashes |
| **Configuration/observability** | OpenClaw, ZeroClaw, PicoClaw, Hermes Agent | OpenClaw: auth/config drift; ZeroClaw: config UX parity across CLI/TUI/web; PicoClaw: `summarize_token_percent` opacity; Hermes: cloud sync demand (9 👍) |

---

## 5. Differentiation Analysis

| Project | Primary User | Feature Focus | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Multi-agent orchestrators, integration engineers | Cross-channel message delivery, session state machine, Codex integration | TypeScript/Node.js; SQLite transcript persistence; plugin-based provider discovery |
| **IronClaw** | Enterprise SaaS builders, autonomous agent developers | Trigger scheduling, WASM sandboxing, OAuth integration depth, subagent safety | Rust + TypeScript; "Reborn" cooperative-multitasking; capability-based security |
| **ZeroClaw** | Terminal-native developers, DevOps/SRE, fleet operators | `zerocode` TUI, multi-agent daemon runtime, ACP protocol, air-gapped execution | Rust; Ratatui terminal UI; WebSocket gateway; WASI plugin foundation |
| **LobsterAI** | Corporate teams, knowledge workers | Desktop artifacts collaboration, thinking-level controls, IM management (DingTalk/Feishu/QQ) | Electron + embedded OpenClaw; NetEase Youdao product integration |
| **CoPaw** | Chinese market, AgentScope ecosystem, plugin developers | WeChat/WeCom integration, browser automation, plugin marketplace | Python; Tauri desktop; AgentScope 1.x→2.0 migration |
| **NanoBot** | Lightweight self-hosters, local-embedding preference | Local RAG memory, WebUI simplicity, modern Python toolchain | Python; `uv`/`ruff`; no external vector DB required |
| **PicoClaw** | WeChat bot operators, Chinese vision-API users | Streaming HTTP, WebSocket protocol, `picoclaw-tracer` observability | Go; Pico Protocol; nightly release cadence |
| **Hermes Agent** | Cross-device professionals, context-window power users | Per-model compression, inline model picker, cloud sync | TypeScript/Electron; gateway daemon; tmp file management |
| **NanoClaw** | Container-first deployers, extensible platform builders | Plugin hook system (`onStartup`/`onShutdown`), WebChat channel, container security | TypeScript; container runner; skill-based architecture |
| **NullClaw** | Security-conscious minimalists | PII redaction, Zig performance, small attack surface | Zig; deterministic redaction rules; default-on security |

---

## 6. Community Momentum & Maturity

### Activity Tiers

| Tier | Projects | Characteristics |
|:---|:---|:---|
| **🔥 Hyper-velocity** | OpenClaw, IronClaw, LobsterAI, ZeroClaw | 50+ PRs/day; pre-release stabilization; enterprise/infra scale; risk of maintainer burnout |
| **⚡ Active growth** | CoPaw, Hermes Agent, NanoBot | 30-50 items/day; security or architectural transition stress; community scaling challenges |
| **🌱 Focused iteration** | PicoClaw, NanoClaw | 7-14 PRs/day; clear scope; rapid bug turnaround; review bandwidth constraints emerging |
| **💤 Maintenance mode** | NullClaw, TinyAGI, Moltis, ZeptoClaw | Minimal or zero activity; targeted fixes; stable but limited ecosystem energy |

### Stabilization vs. Iteration Posture

| Stabilizing (bugfix-heavy) | Rapidly Iterating (feature + architecture) |
|:---|:---|
| OpenClaw (post-May regression crisis) | IronClaw ("Reborn" production readiness) |
| NanoBot (MCP + memory hardening) | ZeroClaw (zerocode TUI, multi-agent runtime) |
| Hermes Agent (gateway FD leaks, installer) | LobsterAI (artifacts GA, thinking controls) |
| NullClaw (single regression fix) | CoPaw (AgentScope 2.0 migration, plugin system) |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Actionable Insight |
|:---|:---|:---|
| **"Reasoning-content" as compatibility hazard** | DeepSeek, Kimi, Qwen, Claude all diverge on thinking/reasoning format; 7+ P2 bugs across IronClaw, ZeroClaw, CoPaw, NanoBot | **Abstract reasoning-content handling** with provider-specific adapters; never assume OpenAI format universality |
| **Terminal-native UX emergence** | ZeroClaw's `zerocode`, IronClaw's trigger CLI, NanoBot's WebUI CLI apps | **CLI/TUI parity with web** is becoming table stakes for developer adoption |
| **Enterprise security as release blocker** | CoPaw's 6 CVE day, ZeroClaw's tool-bypass fix, IronClaw's DISABLE_TOOLS_LIST flag | **Shift-left security**: auth gates, tool allowlists, and PII redaction must be architected in, not bolted on |
| **Session state as hardest problem** | ~60% of OpenClaw P1s; IronClaw's 17-issue Reborn loop series; PicoClaw's history pollution | **Invest in durable execution patterns**: idempotency keys, checkpointing, and crash recovery before scaling features |
| **MCP as leaky abstraction** | NanoBot's session termination, IronClaw's driver failure, NanoClaw's union type breakage | **Treat MCP as beta**: maintain HTTP fallback paths, expect breaking changes, invest in diagnostics |
| **Configuration as user experience** | ZeroClaw's config parity initiative, OpenClaw's auth drift, Hermes' cloud sync demand (9 👍) | **Configuration portability** across devices and environments is a retention feature, not infrastructure detail |
| **Non-OpenAI model fragility** | 7 P2 bugs on Qwen3.6/MiniMax in IronClaw; DeepSeek-V4 breakage in ZeroClaw; Claude Opus temperature rejection | **Provider conformance testing** must be automated and expanded beyond OpenAI/Anthropic; "works on GPT-4" is insufficient |
| **Multi-agent orchestration maturation** | OpenClaw's ACP sessions, IronClaw's subagent safety, ZeroClaw's daemon nodes, CoPaw's `spawn_subagent` | **Agent-to-agent protocols** (ACP, A2A) need standardization; expect fragmentation before consolidation |

---

*Report generated from 2026-06-03 community digest data across 12 projects. Health assessments are directional and based on single-day snapshots; trend confidence increases with longitudinal observation.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-03

## 1. Today's Overview

NanoBot shows **strong development velocity** with 28 PRs updated in the last 24 hours (18 merged/closed, 10 open) and 10 issues active. The project is in a **stabilization and platform expansion phase** — today's merged work focuses on WebUI reliability fixes, email channel enhancements, MCP security hardening, and memory system concurrency bugs. No new release was cut, suggesting maintainers are accumulating changes for a larger version bump. Community activity is healthy with cross-cutting contributions spanning channels, deployment, and core agent infrastructure.

---

## 2. Releases

**None** — No new releases published.

---

## 3. Project Progress

### Merged/Closed PRs (18 total, key items)

| PR | Author | Summary | Impact |
|---|---|---|---|
| [#3990](https://github.com/HKUDS/nanobot/pull/3990) | chengyongru | **Refactored Dream class**: Replaced two-phase Dream with cron + `process_direct()` using ephemeral `dream:*` sessions | Simplifies background memory processing architecture |
| [#4109](https://github.com/HKUDS/nanobot/pull/4109) | gqcao | **Lightweight RAG for memory retrieval** with local embeddings | Enables semantic memory without external vector DB |
| [#4115](https://github.com/HKUDS/nanobot/pull/4115) | chengyongru | **Split WebUI gateway dependencies** — extracted HTTP routing from `WebSocketChannel`, avoiding shared state bag | Critical architectural cleanup for WebUI maintainability |
| [#4146](https://github.com/HKUDS/nanobot/pull/4146) | chengyongru | **Napcat (QQ) channel** — OneBot v11 Forward WebSocket for private/group QQ chats | Major platform expansion for Chinese market |
| [#4150](https://github.com/HKUDS/nanobot/pull/4150) | chengyongru | **WebUI hash-based routing** — persists location across refresh, restores active chat from URL | Fixes long-standing UX breakage on page reload |
| [#4151](https://github.com/HKUDS/nanobot/pull/4151) | chengyongru | **Sort Chats group by recency** in sidebar | Fixes "Chats always at bottom" UX bug |
| [#4155](https://github.com/HKUDS/nanobot/pull/4155) | jiehaoZ | **Prevent `read_file` offload loop** — exempts `read_file` from generic tool-result offloading, keeps 128K char limit | Fixes critical tool execution loop |
| [#4157](https://github.com/HKUDS/nanobot/pull/4157) | chengyongru | **Bounded startup fetch waits** in WebUI with `fetchWithTimeout` | Prevents infinite loading states |
| [#4159](https://github.com/HKUDS/nanobot/pull/4159) | huazi-007 | Auto-fix for uv tool pip install issue (#4158) | Quick-fix, superseded by [#4164](https://github.com/HKUDS/nanobot/pull/4164) |
| [#4160](https://github.com/HKUDS/nanobot/pull/4160) / [#4162](https://github.com/HKUDS/nanobot/pull/4162) | Pringlas / chengyongru | **Email file attachment support** — dual implementation, chengyongru's merged with size limits & graceful fallback | Production-ready email channel enhancement |
| [#4081](https://github.com/HKUDS/nanobot/issues/4081) | hamb1y | **Fixed**: `MemoryStore.append_history` duplicate cursors under concurrent writes | Data integrity fix for memory subsystem |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Comments | Topic | Underlying Need |
|---|---|---|---|
| [#4167](https://github.com/HKUDS/nanobot/issues/4167) | 2 | OpenAI-compatible API `response_format` parameter incompatibility | **Ecosystem interoperability**: Users want to plug in non-OpenAI providers (Agnes AI) without parameter negotiation failures |
| [#4006](https://github.com/HKUDS/nanobot/issues/4006) | 2 | Orphaned tool results in conversation history post-#3984 | **Spec compliance**: OpenAI/Anthropic strict validation rejects unpaired tool_call/tool result; affects production reliability |
| [#4158](https://github.com/HKUDS/nanobot/issues/4158) | 1 | `uv tool` pip install failure in WebUI CLI apps | **Modern Python toolchain support**: `uv` is gaining adoption; nanobot needs first-class support beyond `pip` |

### Analysis

The top issues reveal a **tension between "batteries included" and "bring your own provider"**:
- Image generation (#4167, #4132) and LLM providers both need generic parameter passthrough or provider-specific adapters
- The `uv` toolchain issue (#4158) signals the user base is technically sophisticated and early-adopts modern Python tooling

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| **High** | [#4168](https://github.com/HKUDS/nanobot/issues/4168) | MCP server unreachable after random time — "Session terminated", requires nanobot restart | ❌ None yet |
| **High** | [#4006](https://github.com/HKUDS/nanobot/issues/4006) | Orphaned tool results violate API specs, cause request rejections | ❌ None yet (regression from #3984) |
| **Medium** | [#4167](https://github.com/HKUDS/nanobot/issues/4167) | `response_format` breaks OpenAI-compatible image APIs | ❌ None yet |
| **Medium** | [#4158](https://github.com/HKUDS/nanobot/issues/4158) | WebUI CLI app pip installs fail under `uv tool` | ✅ [#4164](https://github.com/HKUDS/nanobot/pull/4164) open, [#4159](https://github.com/HKUDS/nanobot/pull/4159) closed (auto-fix) |
| **Medium** | [#4153](https://github.com/HKUDS/nanobot/issues/4153) | `read_file` cannot recover persisted tool results after offloading | ✅ Fixed by [#4155](https://github.com/HKUDS/nanobot/pull/4155) |
| **Low** | [#4081](https://github.com/HKUDS/nanobot/issues/4081) | MemoryStore duplicate cursors under concurrent writes | ✅ Fixed (closed) |

### Stability Assessment

**Two high-severity issues lack fixes**: MCP session termination (#4168) and conversation history corruption (#4006). The MCP issue is particularly concerning as it requires full process restart and affects production deployments. The orphaned tool result issue is a **regression from a previous fix** (#3984), indicating incomplete root cause analysis.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Request | Likelihood in Next Version |
|---|---|---|
| [#4166](https://github.com/HKUDS/nanobot/issues/4166) | Subagent access to MCP services | **High** — Small scope, clear use case, author has adjacent PRs |
| [#4132](https://github.com/HKUDS/nanobot/issues/4132) | Custom image generation provider (Agnes AI) | **High** — Complements #4167 fix, configuration-driven |
| [#4139](https://github.com/HKUDS/nanobot/pull/4139) | Cloud deployment layer (HF Spaces, ModelScope) | **Medium-High** — Large PR (+851 lines), needs review bandwidth |
| [#4163](https://github.com/HKUDS/nanobot/pull/4163) | WebUI "fork from here" for user messages | **Medium** — UX enhancement, needs design review |
| [#4169](https://github.com/HKUDS/nanobot/pull/4169) | Recover hidden history from corrupt `last_consolidated` | **Medium** — Data recovery, edge case |

### Predicted Next Version Themes

1. **MCP robustness** (session recovery, subagent access)
2. **Provider pluggability** (image generation, generic API compatibility)
3. **Deployment ergonomics** (cloud platforms, `uv` toolchain)

---

## 7. User Feedback Summary

### Pain Points

| Issue | User Scenario | Frustration Level |
|---|---|---|
| [#1168](https://github.com/HKUDS/nanobot/issues/1168) | Notion MCP connection fails despite verified API keys, works in Claude | **High** — "核查了好几次API" (checked API multiple times); suggests poor error diagnostics |
| [#4168](https://github.com/HKUDS/nanobot/issues/4168) | MCP servers randomly disconnect in production | **High** — Requires restart, no workaround |
| [#4142](https://github.com/HKUDS/nanobot/issues/4142) | Cache miss token costs with DeepSeek v4 Flash/Pro | **Medium** — Cost optimization discussion, no immediate fix |

### Satisfaction Signals

- Active WebUI polish (#4150, #4151, #4149) shows responsive UX iteration
- Multiple channel expansions (email attachments, QQ) indicate healthy ecosystem growth
- Quick turnaround on `uv` issue (#4158 → #4159/#4164 within 24h)

### Dissatisfaction Signals

- **MCP reliability** is emerging as a systemic concern (#1168, #4168, #4166)
- **Debugging experience** for integrations is weak — users cannot diagnose Notion/connection failures
- **Tool result handling** has had multiple regressions (#3984 → #4006, #4153 → #4155)

---

## 8. Backlog Watch

| Issue | Age | Last Activity | Risk | Action Needed |
|---|---|---|---|---|
| [#1168](https://github.com/HKUDS/nanobot/issues/1168) | ~3 months (2026-02-25) | 2026-06-02 | **Stale but bumped** | Needs maintainer diagnosis; Notion MCP is popular integration |
| [#4006](https://github.com/HKUDS/nanobot/issues/4006) | ~1 week | 2026-06-02 | **Regression, no assignee** | Requires investigation of #3984 fix completeness |
| [#3983](https://github.com/HKUDS/nanobot/pull/3983) | ~10 days | 2026-06-02 | Test coverage PR, unmerged | Runner-level testing for edge cases; low risk to merge |
| [#4139](https://github.com/HKUDS/nanobot/pull/4139) | 2 days | 2026-06-02 | Large feature PR, unreviewed | Needs architectural review for cloud abstraction |

### Maintainer Attention Required

1. **#1168** — Long-neglected integration issue with recent activity bump; assign or request debug logs
2. **#4006** — Regression from previous fix; needs root cause analysis before next release
3. **#4168** — Production-impacting MCP stability; no fix PR despite clear reproduction steps

---

*Digest generated from HKUDS/nanobot GitHub activity for 2026-06-03. All links: https://github.com/HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-03

---

## 1. Today's Overview

Hermes Agent shows **very high development velocity** with 100 items updated in the last 24 hours (50 issues, 50 PRs), though the 44:6 open-to-closed issue ratio and 37:13 open-to-merged PR ratio indicates a **growing backlog**. No new release was cut today despite significant bugfix activity. The project is in an **intensive stabilization phase** — today's work focused heavily on desktop installer reliability, gateway file-descriptor leaks, and WebSocket connectivity issues. Multiple P1 bugs were closed, but several new P1s and P2s were opened, suggesting the codebase is under stress from scaling usage. The community is notably engaged with cross-device sync and per-model configuration features gaining traction.

---

## 2. Releases

**No new releases today.**

The project remains without a recent tagged release despite substantial bugfix merge activity. Users on v0.15.0/v0.15.1 continue to experience known gateway stability issues (see #37011, #37679).

---

## 3. Project Progress

### Merged/Closed PRs Today (13 total, selected highlights):

| PR | Description | Impact |
|---|---|---|
| [#37679](https://github.com/NousResearch/hermes-agent/pull/37679) | **fix(gateway): close ResponseStore + dispose unowned adapter on reconnect failure** | **P1 fix** — resolves file descriptor exhaustion crash after ~12h uptime; directly addresses [#37011](https://github.com/NousResearch/hermes-agent/issues/37011) |
| [#37660](https://github.com/NousResearch/hermes-agent/pull/37660) | **refactor(uv): single managed-uv path, delete fts5 installer escalation** | Major installer simplification; eliminates PATH resolution bugs |
| [#37622](https://github.com/NousResearch/hermes-agent/pull/37622) | **fix(installer): prefer a trusted uv over a bare PATH uv in bootstrap** | Fixes Windows Anaconda/conda uv conflicts |
| [#37691](https://github.com/NousResearch/hermes-agent/pull/37691) / [#37529](https://github.com/NousResearch/hermes-agent/pull/37529) | **fix(desktop): configure Linux Electron sandbox helper** | Fixes Linux desktop startup failure (chrome-sandbox permissions) |
| [#36101](https://github.com/NousResearch/hermes-agent/pull/36101) | chore(deps): bump tmp from 0.2.5 to 0.2.7 in /apps/desktop | Dependency maintenance |

### Significant Open PRs in Review:

| PR | Description | Status |
|---|---|---|
| [#37734](https://github.com/NousResearch/hermes-agent/pull/37734) | **Gateway reliability hardening** — streaming stall watchdog, Telegram poll heartbeat, supervised tasks, launchd respawn throttle | **P1**, awaiting review |
| [#37748](https://github.com/NousResearch/hermes-agent/pull/37748) | **Harden desktop updater handoff** — validates staged updater, catches spawn failures, falls back to POSIX path | Addresses [#37522](https://github.com/NousResearch/hermes-agent/issues/37522) |
| [#37747](https://github.com/NousResearch/hermes-agent/pull/37747) | **Allow desktop websocket origins on remote binds** (Tailscale/LAN) | Salvages [#37405](https://github.com/NousResearch/hermes-agent/pull/37405), fixes [#37399](https://github.com/NousResearch/hermes-agent/issues/37399) |
| [#37745](https://github.com/NousResearch/hermes-agent/pull/37745) | **Inherit microphone entitlement for macOS helpers** | Fixes [#37718](https://github.com/NousResearch/hermes-agent/issues/37718) |
| [#37738](https://github.com/NousResearch/hermes-agent/pull/37738) | **Inline model picker in status bar** (Cursor-style dropdown) | UX enhancement |
| [#37548](https://github.com/NousResearch/hermes-agent/pull/37548) | **Respect model.context_length config** | Fixes [#8430](https://github.com/NousResearch/hermes-agent/issues/8430) |

---

## 4. Community Hot Topics

### Most Active Issues by Engagement:

| Issue | Comments | 👍 | Topic | Underlying Need |
|---|---|---|---|---|
| [#20510](https://github.com/NousResearch/hermes-agent/issues/20510) | 5 | 9 | **Cloud Sync for All Configurations** | Users want seamless multi-device workflows; local-only storage is friction point for professionals using Hermes across workstations |
| [#18733](https://github.com/NousResearch/hermes-agent/issues/18733) | 5 | 3 | **Per-model/per-provider compression threshold overrides** | 1M+ context models (DeepSeek V4, Gemini 2.5 Pro) break single-threshold assumptions; users need granular cost/quality tradeoffs |
| [#7725](https://github.com/NousResearch/hermes-agent/issues/7725) | 4 | 0 | **session_search hangs 5+ minutes, bypasses timeout** | Core reliability — search subsystem lacks proper cancellation propagation |
| [#13260](https://github.com/NousResearch/hermes-agent/issues/13260) | 4 | 0 | **Gemini Code Assist 404: "Requested entity was not found"** | Google provider integration fragility; unclear if config or API drift |
| [#36934](https://github.com/NousResearch/hermes-agent/issues/36934) | 3 | 0 | **`/steer` flagged as prompt injection by Opus 4.8** | **Architecture tension**: tool-channel delivery collides with model safety filters; needs protocol redesign |

### Analysis:

The **cloud sync feature (#20510)** has the highest community demand (9 👍) but remains P3-prioritized — this misalignment between user priority and project prioritization risks contributor frustration. The **compression threshold (#18733)** and **/steer injection false-positive (#36934)** both reveal architectural strain as Hermes scales to larger context windows and more safety-filtered models.

---

## 5. Bugs & Stability

### Critical (P1) — Active or New Today:

| Issue | Description | Fix PR? | Risk |
|---|---|---|---|
| [#37677](https://github.com/NousResearch/hermes-agent/issues/37677) | **Oversized image (>8000px) permanently bricks conversation thread** — image guards check bytes, never pixel dimensions | **None** | **Data loss**: entire conversation unrecoverable; affects Anthropic users |
| [#37733](https://github.com/NousResearch/hermes-agent/issues/37733) | **Security: API server relays unredacted provider errors to authenticated clients** (CVSS 6.5) | **None** | Information disclosure of provider internals |
| [#37721](https://github.com/NousResearch/hermes-agent/issues/37721) | **disk-cleanup deletes cron/jobs.json from stale tracked.json entries** | **None** | Registry corruption, job loss |
| [#37731](https://github.com/NousResearch/hermes-agent/issues/37731) | **Windows installer "Access denied" — wipes venv while child processes hold files open** | **None** | Update failure, potential data loss |
| [#37011](https://github.com/NousResearch/hermes-agent/issues/37011) | ~~File descriptor leak in gateway reconnect loop~~ | **[#37679](https://github.com/NousResearch/hermes-agent/pull/37679) MERGED** | ✅ **FIXED** |

### High (P2) — Notable:

| Issue | Description | Fix PR? |
|---|---|---|
| [#7725](https://github.com/NousResearch/hermes-agent/issues/7725) | session_search hangs, bypasses timeout/cancellation | None |
| [#36934](https://github.com/NousResearch/hermes-agent/issues/36934) | `/steer` prompt injection false-positive with Opus 4.8 | None |
| [#37662](https://github.com/NousResearch/hermes-agent/issues/37662) | httpx/OpenAI SDK hangs on IPv6 (happy-eyeballs needed) | None |
| [#37399](https://github.com/NousResearch/hermes-agent/issues/37399) | Desktop remote mode rejects Electron WebSocket origins | **[#37747](https://github.com/NousResearch/hermes-agent/pull/37747)** |
| [#37609](https://github.com/NousResearch/hermes-agent/issues/37609) | Desktop Skills & Tools toggle silently fails for platform-restricted toolsets | None |

### Stability Assessment:

**Mixed.** The gateway FD leak fix is a major reliability win, but **four new P1s opened today** — including a security issue and a data-loss bug — outpace fixes. The image dimension guard failure (#37677, #25837) is a **regression-class bug** affecting core vision functionality.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Feature | Likelihood in Next Release | Rationale |
|---|---|---|---|
| [#20510](https://github.com/NousResearch/hermes-agent/issues/20510) | Cloud/cross-device config sync | Medium | High demand (9 👍), but P3; may need community PR |
| [#18733](https://github.com/NousResearch/hermes-agent/issues/18733) | Per-model compression thresholds | **High** | Blocks 1M+ context model adoption; aligns with active context-length work (#37548) |
| [#37709](https://github.com/NousResearch/hermes-agent/issues/37709) | Strict-confinement Snap package | Medium | Linux packaging gap; snap is increasingly standard |
| [#37719](https://github.com/NousResearch/hermes-agent/issues/37719) | Re-budget context compressor per router backend | Medium | Follow-on to #18733; needed for router reliability |
| [#36196](https://github.com/NousResearch/hermes-agent/issues/36196) | Minimax M3 model support | **High** | 1M context multimodal; provider expansion is active area |
| [#37663](https://github.com/NousResearch/hermes-agent/issues/37663) | Desktop → existing VPS Hermes instance | Medium | Common use case; UX gap in onboarding |

**Predicted next-release themes**: Context window intelligence (compression, routing), desktop installer robustness, and expanded model provider support.

---

## 7. User Feedback Summary

### Pain Points:

| Theme | Evidence | Severity |
|---|---|---|
| **Desktop installer/updater fragility** | [#37522](https://github.com/NousResearch/hermes-agent/issues/37522), [#37731](https://github.com/NousResearch/hermes-agent/issues/37731), [#37718](https://github.com/NousResearch/hermes-agent/issues/37718), [#37691](https://github.com/NousResearch/hermes-agent/issues/37691) | **Critical** — multiple platform-specific failures |
| **Gateway "zombie" states** | [#37011](https://github.com/NousResearch/hermes-agent/issues/37011), [#37734](https://github.com/NousResearch/hermes-agent/pull/37734) | **High** — daemon alive but non-functional |
| **Vision/image handling crashes** | [#37677](https://github.com/NousResearch/hermes-agent/issues/37677), [#25837](https://github.com/NousResearch/hermes-agent/issues/25837) | **High** — permanent thread corruption |
| **Configuration not respected** | [#37548](https://github.com/NousResearch/hermes-agent/pull/37548), [#8515](https://github.com/NousResearch/hermes-agent/issues/8515), [#18733](https://github.com/NousResearch/hermes-agent/issues/18733) | Medium — `model.context_length`, `api_mode` dropped |
| **Multi-device workflow friction** | [#20510](https://github.com/NousResearch/hermes-agent/issues/20510), [#37663](https://github.com/NousResearch/hermes-agent/issues/37663) | Medium — manual config replication |

### Positive Signals:

- Active community contribution (multiple PRs from non-core contributors: @vivganes, @alaamohanad169-ship-it, @OutThisLife)
- Rapid response to gateway stability issues (FD leak fixed within ~24h of report)
- Desktop UX improvements in progress (inline model picker #37738)

### Satisfaction/Dissatisfaction Ratio:

**Tilted negative** — the volume of P1/P2 bugs opened today, especially around desktop installation and gateway reliability, suggests users are hitting friction in core workflows. The lack of a release despite fixes may exacerbate this.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (long-unanswered or at-risk):

| Issue | Age | Risk | Action Needed |
|---|---|---|---|
| [#20510](https://github.com/NousResearch/hermes-agent/issues/20510) Cloud Sync | ~28 days | **Highest community demand** (9 👍), P3 mis-prioritized | Re-triage to P2; assign owner or mark "help wanted" |
| [#7725](https://github.com/NousResearch/hermes-agent/issues/7725) session_search hangs | ~53 days | Core functionality broken; no fix PR | Root cause analysis; may relate to [#37734](https://github.com/NousResearch/hermes-agent/pull/37734) streaming work |
| [#18733](https://github.com/NousResearch/hermes-agent/issues/18733) Per-model compression | ~32 days | Blocks modern model adoption | Link to [#37548](https://github.com/NousResearch/hermes-agent/pull/37548) context_length work; consider bundling |
| [#18158](https://github.com/NousResearch/hermes-agent/issues/18158) hermes doctor / browser tool can't find Node | ~33 days | Environment detection fragility | Needs cross-platform shell env investigation |
| [#8515](https://github.com/NousResearch/hermes-agent/issues/8515) Smart routing drops api_mode | ~52 days | Silent config corruption | Small fix likely; needs routing code owner review |

### PRs at Risk of Stagnation:

| PR | Status | Risk |
|---|---|---|
| [#37734](https://github.com/NousResearch/hermes-agent/pull/37734) Gateway reliability hardening | Open, P1 | Critical fix for production deployments; needs expedited review |
| [#37548](https://github.com/NousResearch/hermes-agent/pull/37548) Respect model.context_length | Open, P2 | Fixes long-standing #8430; may conflict with #18733 approach |

---

**Overall Project Health: ⚠️ Stabilizing**

High velocity with active bugfixing, but **new critical issues are emerging faster than they're being closed**. The gateway and desktop subsystems are under particular stress. Recommend prioritizing: (1) image dimension guards (#37677), (2) security review of #37733, (3) expedited merge of #37734, and (4) re-triaging cloud sync (#20510) to reflect actual user demand.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-03

## 1. Today's Overview

PicoClaw shows **high development velocity** with 14 PRs updated in the last 24 hours (9 open, 5 merged/closed) alongside 3 active issues. The project released a new nightly build (v0.2.9-nightly.20260602) indicating active iteration toward a stable v0.2.9 release. Community contributions remain robust with multiple first-time contributors landing fixes. The dominant themes are **provider compatibility fixes** (Zhipu, OpenAI, Claude), **session management stability**, and **WebSocket protocol enhancements**. Overall project health appears strong with rapid bug turnaround, though some PRs are accumulating "stale" labels suggesting potential review bottleneck.

---

## 2. Releases

### [v0.2.9-nightly.20260602.426046fc](https://github.com/sipeed/picoclaw/compare/v0.2.9...main) (Nightly)
- **Type**: Automated nightly build
- **Status**: ⚠️ Unstable — use with caution
- **Scope**: Pre-release snapshot from main branch ahead of v0.2.9
- **Notable inclusions** (based on merged PRs): Session manager goroutine leak fix, Zhipu API error classification, LLM retry logic for transient HTTP errors, Web UI session history display fix
- **Migration**: No breaking changes expected; standard nightly precautions apply

---

## 3. Project Progress

### Merged/Closed PRs Today (5 items)

| PR | Author | Description | Impact |
|:---|:---|:---|:---|
| [#2993](https://github.com/sipeed/picoclaw/pull/2993) → **CLOSED** (superseded) | afjcjsbx | Self-describing PicoClaw agent skill documentation | Docs — replaced by #2994 |
| [#2991](https://github.com/sipeed/picoclaw/pull/2991) | chengzhichao-xydt | **Retry transient LLM HTTP errors** using provider error classifier | 🔧 Reliability — prevents agent turn failures on 500 errors |
| [#2989](https://github.com/sipeed/picoclaw/pull/2989) | yuxuan-7814 | **Zhipu API error code 1210** added to format error patterns | 🔧 Fixes WeChat vision API failures (resolves #2943) |
| [#2986](https://github.com/sipeed/picoclaw/pull/2986) | chengzhichao-xydt | **Add Stop() to SessionManager** to prevent goroutine leak | 🔧 Stability — fixes resource leak in tests/multi-instance |
| [#2239](https://github.com/sipeed/picoclaw/pull/2239) | thanhtantran | Docker compose `privileged` mode modification | 🔧 Deployment — hardware access support |

**Key advances**: Core infrastructure hardened with proper goroutine lifecycle management; provider error handling now covers Zhipu's vision API edge case; LLM resilience improved against transient failures.

---

## 4. Community Hot Topics

### Most Active Discussions

| Item | Activity | Analysis |
|:---|:---|:---|
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) — Streaming HTTP requests | 10 comments, 👍1 | **Long-running enhancement** (Apr 7 → now). Users want OpenAI-compatible `stream=True` config option. Underlying need: **latency reduction** for interactive use cases. Blocked on architectural decisions about event streaming vs. HTTP streaming. |
| [#2984](https://github.com/sipeed/picoclaw/issues/2984) — WebSocket turn completion signal | 👍1, created today | **Fresh protocol request**. External Pico Protocol clients need deterministic turn-end signaling. Current `typing.stop` is insufficient. Underlying need: **reliable client state machines** for UI synchronization. Likely prerequisite for third-party client ecosystem. |
| [#2945](https://github.com/sipeed/picoclaw/pull/2945) — `picoclaw-tracer` debug UI | stale label | **Developer experience gap**. Standalone LLM trace visualization tool. Community wants observability into multi-turn agent reasoning. High implementation quality but may need maintainer bandwidth for review. |

**Pattern**: Strong demand for **observability** (tracing, explicit signals) and **streaming performance** — signs of production deployment maturity.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **High** | [#2972](https://github.com/sipeed/picoclaw/issues/2972) → [#2992](https://github.com/sipeed/picoclaw/pull/2992) | **Session history pollution**: v0.2.9 upgrade causes new Web UI sessions to inherit old messages via `PromoteAliasHistory` | **Fix PR open** — root cause identified (main-session alias always first) |
| 🟡 **Medium** | [#2943](https://github.com/sipeed/picoclaw/issues/2943) → [#2989](https://github.com/sipeed/picoclaw/pull/2989) | Zhipu GLM-5-Turbo vision API error 1210 on WeChat image messages | **Fixed** — error classifier updated |
| 🟡 **Medium** | [#2796](https://github.com/sipeed/picoclaw/issues/2796) → [#2990](https://github.com/sipeed/picoclaw/pull/2990) | Web UI shows only last user message in multi-message sessions | **Fix PR open** — `Skip` parameter misused in `readJSONLSession()` |
| 🟡 **Medium** | [#2958](https://github.com/sipeed/picoclaw/issues/2958) → [#2987](https://github.com/sipeed/picoclaw/pull/2987) | `tool_calls` messages dropped during streaming sessions | **Fix PR open** — auxiliary message filtering too aggressive |
| 🟢 **Low** | Goroutine leak | SessionManager cleanup ticker never stops | **Fixed** in [#2986](https://github.com/sipeed/picoclaw/pull/2986) |
| 🟢 **Low** | [#2968](https://github.com/sipeed/picoclaw/issues/2968) → [#2988](https://github.com/sipeed/picoclaw/pull/2988), [#2985](https://github.com/sipeed/picoclaw/pull/2985) | `/context` command ignores `summarize_token_percent` config | **Fix PRs open** — both config wiring and UI display |

**Regression alert**: v0.2.9 upgrade introduced session history pollution — recommend prioritizing #2992 review before stable release.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in v0.2.9+ | Rationale |
|:---|:---|:---|:---|
| **Streaming HTTP config** (`"streaming": true`) | [#2404](https://github.com/sipeed/picoclaw/issues/2404) | Medium | High comment activity, clear use case; may require protocol changes |
| **WebSocket turn completion signal** | [#2984](https://github.com/sipeed/picoclaw/issues/2984) | High | Clean protocol addition, enables external client ecosystem |
| **`picoclaw-tracer` debug UI** | [#2945](https://github.com/sipeed/picoclaw/pull/2945) | Medium | Self-contained, but maintainer review bandwidth needed |
| **Agent self-documentation skill** | [#2994](https://github.com/sipeed/picoclaw/pull/2994) | High | Low-risk docs PR, improves onboarding |
| **Context compression visibility** | [#2985](https://github.com/sipeed/picoclaw/pull/2985) | High | Small UX fix, addresses user confusion |

**Predicted v0.2.9 stable blockers**: #2992 (session pollution), #2991/#2989 (merged reliability fixes). Streaming HTTP likely deferred to v0.3.0.

---

## 7. User Feedback Summary

### Pain Points
- **Configuration opacity**: Users can't verify `summarize_token_percent` is working ([#2968](https://github.com/sipeed/picoclaw/issues/2968))
- **Provider fragility**: Model-specific parameter quirks (Claude temperature, Zhipu vision) cause hard failures
- **Session management confusion**: Post-upgrade message leakage breaks user trust in conversation isolation

### Use Cases Emerging
- **WeChat bot integrations** (vision-heavy, Chinese market)
- **External WebSocket clients** building on Pico Protocol (ecosystem play)
- **Production debugging** at scale (trace viewer demand)

### Satisfaction Signals
- Rapid fix turnaround for reported issues (same-day PRs for #2943, #2972)
- Active nightly release cadence shows responsiveness

### Dissatisfaction Signals
- "Stale" labels accumulating on valid PRs (#2951, #2948, #2945) suggest review backlog
- Nightly instability disclaimer may deter production users

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) Streaming HTTP | ~8 weeks | Medium — user workaround exists | Maintainer decision on architecture; assign milestone |
| [#2951](https://github.com/sipeed/picoclaw/pull/2951) `web_search` function type | ~1 week, stale | Low — niche endpoint compatibility | Review: one-line change, low risk |
| [#2948](https://github.com/sipeed/picoclaw/pull/2948) Claude temperature skip | ~1 week, stale | Medium — blocks Claude-opus-4-7 users | Review: model-specific quirk pattern to maintain |
| [#2945](https://github.com/sipeed/picoclaw/pull/2945) picoclaw-tracer | ~1 week, stale | Low — additive, not blocking | Review: significant new component, needs architecture review |

**Recommendation**: Clear stale labels with batch review session; #2404 needs explicit milestone assignment or closure to manage expectations.

---

*Digest generated from GitHub activity 2026-06-02 → 2026-06-03. All links: [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-03

---

## 1. Today's Overview

NanoClaw showed **moderate development velocity** on 2026-06-02 with **7 PRs updated** (4 closed/merged, 3 open) and **1 new issue** opened. No releases were published. Activity concentrated on infrastructure hardening—container security, plugin extensibility, and runtime message standardization—suggesting the project is in a **stabilization phase** rather than feature expansion. The single issue appears to be AI-generated content (video prompt for a grading system scenario), indicating potential spam or off-topic submission that may require community moderation attention. Overall project health appears **stable with active maintenance**, though maintainer review bandwidth may be stretched with 3 open PRs awaiting resolution.

---

## 2. Releases

**No new releases** published.

---

## 3. Project Progress

### Merged/Closed PRs (4 items)

| PR | Author | Description | Impact |
|:---|:---|:---|:---|
| [#2674](https://github.com/nanocoai/nanoclaw/pull/2674) | [pinetreelic](https://github.com/pinetreelic) | Standardize runtime status messages as mechanical labels; add metadata and internal-channel guards to prevent self-loops | **Runtime reliability** — eliminates potential infinite feedback loops in status reporting |
| [#1193](https://github.com/nanocoai/nanoclaw/pull/1193) | [cyber-rye](https://github.com/cyber-rye) | Host-side plugin hook system (`onStartup`/`onShutdown`) via `src/plugin-loader.ts` | **Extensibility milestone** — enables third-party plugins to launch long-running services (HTTP servers, etc.) |
| [#2069](https://github.com/nanocoai/nanoclaw/pull/2069) | [javexed](https://github.com/javexed) | Skill: WebChat v1 channel/integration | **New communication channel** — expands multi-channel architecture |
| [#2538](https://github.com/nanocoai/nanoclaw/pull/2538) | [sebastiondev](https://github.com/sebastiondev) | Container runner: validate package names before Dockerfile interpolation | **Security fix** — prevents OS command injection (CWE-78) |

**Key advancement:** The plugin hook system (#1193) represents a significant architectural evolution, transforming NanoClaw from a closed-loop agent into an **extensible platform** that can host persistent services. Combined with the WebChat skill (#2069), the project is clearly positioning for broader integration scenarios.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#2673](https://github.com/nanocoai/nanoclaw/issues/2673) — "Automated Student Grading System" | 0 comments, 0 reactions | **Likely spam/AI-generated content.** Contains only a video generation prompt with no actual feature request, bug report, or technical discussion. No community engagement. |

**Underlying need:** None discernible from this submission. The issue tracker may benefit from **issue templates or triage automation** to filter generative AI spam, which is consuming maintainer attention.

**Active PRs awaiting review:**
- [#2187](https://github.com/nanocoai/nanoclaw/pull/2187) — CLI platform ID namespacing fix (open since 2026-05-02, **31 days old**)
- [#2672](https://github.com/nanocoai/nanoclaw/pull/2672) — Codex MCP union compatibility + HTTP transport (fresh, same-day)
- [#2671](https://github.com/nanocoai/nanoclaw/pull/2671) — Attachment directory mount fix (fresh, same-day)

---

## 5. Bugs & Stability

| Severity | Item | Status | Details |
|:---|:---|:---|:---|
| **Critical** (fixed) | [#2538](https://github.com/nanocoai/nanoclaw/pull/2538) | **Merged** | OS command injection (CWE-78) in container runner via crafted package names — Dockerfile interpolation vulnerability |
| **High** (fix pending) | [#2671](https://github.com/nanocoai/nanoclaw/pull/2671) | **Open PR** | Missing bind mount for inbound attachments directory breaks formatter references in agent containers |
| **Medium** (fix pending) | [#2672](https://github.com/nanocoai/nanoclaw/pull/2672) | **Open PR** | Codex provider MCP config incompatibility with union type evolution; HTTP-only transport failures behind proxies |
| **Medium** (fix pending) | [#2187](https://github.com/nanocoai/nanoclaw/pull/2187) | **Open PR** | CLI bare platform IDs incorrectly namespaced, breaking CLI channel functionality |

**Stability assessment:** The merged security fix (#2538) addresses a critical supply-chain attack vector. Two same-day PRs (#2671, #2672) suggest **active breakage in containerized agent workflows** and Codex provider integration—likely regressions from recent architectural changes on the `providers` branch.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Version |
|:---|:---|:---|
| **Plugin ecosystem** | [#1193](https://github.com/nanocoai/nanoclaw/pull/1193) merged | **High** — foundation laid; expect plugin marketplace/docs next |
| **WebChat channel** | [#2069](https://github.com/nanocoai/nanoclaw/pull/2069) merged | **High** — v1 shipped; v2 likely for group/thread support |
| **MCP (Model Context Protocol) expansion** | [#2672](https://github.com/nanocoai/nanoclaw/pull/2672) | **High** — actively fixing union types; SSE transport likely next |
| **HTTP-only/proxy-aware transports** | [#2672](https://github.com/nanocoai/nanoclaw/pull/2672) | **Medium** — enterprise deployment requirement |
| **Student/education vertical** | [#2673](https://github.com/nanocoai/nanoclaw/issues/2673) | **Low** — no genuine community interest; spam issue |

**Predicted next release focus:** Container security hardening + plugin API stabilization + MCP protocol completion.

---

## 7. User Feedback Summary

**Pain points identified:**

| Issue | Evidence | Severity |
|:---|:---|:---|
| **Container attachment handling broken** | [#2671](https://github.com/nanocoai/nanoclaw/pull/2671) | High — blocks file-based agent workflows |
| **Codex provider regressions on `providers` branch** | [#2672](https://github.com/nanocoai/nanoclaw/pull/2672) | High — MCP integration unstable |
| **CLI platform identification unreliable** | [#2187](https://github.com/nanocoai/nanoclaw/pull/2187) | Medium — affects 31+ days without resolution |

**Use case signals:** The WebChat skill (#2069) and plugin hooks (#1193) suggest users are deploying NanoClaw as a **long-running service platform** rather than ephemeral task runner, with needs for persistent HTTP endpoints and multi-channel presence.

**Satisfaction concern:** 31-day-old PR #2187 without merge or clear rejection indicates **review bottleneck** that may frustrate contributors.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#2187](https://github.com/nanocoai/nanoclaw/pull/2187) — CLI platform ID fix | **31 days** | Contributor attrition; CLI channel broken | Maintainer review/merge or explicit closure with feedback |
| [#1193](https://github.com/nanocoai/nanoclaw/pull/1193) | ~77 days (created 2026-03-17, merged 2026-06-02) | *Resolved* | Was backlog; now merged — good sign for long-running PRs |

**Emerging risk:** No other stale issues visible in today's data, but the pattern of 30+ day PRs suggests **review throughput is the primary bottleneck**. With 3 new open PRs added today, maintainer capacity will be tested.

**Recommendation:** Project would benefit from **additional maintainer delegation** or **stale-bot automation** with explicit SLA communications to contributors.

---

*Digest generated from NanoClaw GitHub activity on 2026-06-02. All links: https://github.com/nanocoai/nanoclaw*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-03

## 1. Today's Overview

NullClaw shows minimal but focused activity today with one open issue and its corresponding fix PR both filed by the same contributor. The project appears stable with no releases and no merged changes, suggesting either a deliberate code-freeze period or typical development velocity between feature cycles. The single active thread indicates a well-scoped, recently-introduced regression in PII redaction behavior that the community is moving quickly to address. Overall project health appears **stable with targeted maintenance needs**—no critical systemic issues, but attention required on a default-enabled feature that affects core agent output readability.

---

## 2. Releases

**No new releases** today. The project has no published releases in the tracked period.

---

## 3. Project Progress

**No merged or closed PRs today.**

The only active PR remains open and unmerged:
- **[PR #945](https://github.com/nullclaw/nullclaw/pull/945)** — `fix(redaction): reject ISO date/time patterns as false-positive phone matches` by [vernonstinebaker](https://github.com/vernonstinebaker)

This PR proposes a surgical fix to a regression introduced in commit `41cdb493` (May 2026) where `enable_pii_redaction=true` became the default. The fix adds an `isDateLike()` guard to `matchPhone` in `src/redaction.zig`, specifically targeting the system prompt's `appendDateTimeSection` output format (`YYYY-MM-DD hh` and `DD-MM-YYYY hh` patterns). No features advanced today; this is purely defensive maintenance.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|------|----------|----------|
| **[Issue #944](https://github.com/nullclaw/nullclaw/issues/944)** — PII redactor falsely matches date/time output as phone numbers | 0 comments, 0 reactions | **Underlying need**: Reliable PII redaction that doesn't degrade core system observability. Users need to trust that enabling security features won't break debugging/auditing workflows. |
| **[PR #945](https://github.com/nullclaw/nullclaw/pull/945)** | 0 comments, 0 reactions | Same-day PR response suggests active contributor engagement; however, zero maintainer/community review activity indicates potential bottleneck in merge velocity. |

**Key insight**: The rapid issue-to-PR turnaround (same author, same day) demonstrates good individual contributor responsiveness, but the lack of any discussion or review suggests either (a) maintainer bandwidth constraints, (b) confidence in self-merging that hasn't executed yet, or (c) a small review pool for Zig-based security code.

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix Available? |
|----------|------|--------|---------------|
| **Medium** | **[#944](https://github.com/nullclaw/nullclaw/issues/944)** — PII redactor false positives on date/time output | Open | **Yes** — [PR #945](https://github.com/nullclaw/nullclaw/pull/945) |

**Impact assessment**: This is a **regression in default behavior** affecting all users with `enable_pii_redaction` enabled (now default since May 2026). The bug corrupts `date` command output with `[PHONE_X]` placeholders, degrading agent observability and potentially breaking time-dependent automation. Not critical (no crashes/data loss), but affects daily operations and trust in security defaults. The fix PR is narrow and well-targeted to the specific false-positive pattern.

---

## 6. Feature Requests & Roadmap Signals

**No explicit feature requests** surfaced today. However, the redaction architecture reveals implicit roadmap needs:

| Signal | Likely Near-Term Priority |
|--------|--------------------------|
| `isDateLike()` is hardcoded to two specific patterns | **Configurable redaction rules** or pluggable matchers may be needed for internationalization |
| `appendDateTimeSection` format is fixed in system prompt | **Redaction-aware formatting** or semantic tagging of system vs. user content could prevent class of bugs |
| Single contributor owning both issue and fix | **Code ownership expansion** for security-critical paths |

**Prediction for next version**: If PR #945 merges, expect a patch release (e.g., `2026.06.x` or semver equivalent) specifically for this regression. No major feature signals detected.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Satisfaction Indicator |
|------------|----------|------------------------|
| **Security defaults breaking observability** | Issue #944 description: "output shows redacted placeholders instead of the actual timestamp" | 😠 Negative — default feature degrades core functionality |
| **Workaround friction** | Reporter notes `enable_pii_redaction` can be disabled, but this is "undesirable for security" | 😐 Frustrated — forced trade-off between security and usability |
| **Recent regression** | Explicitly tied to commit `41cdb493` / May 2026 | 😠 Trust erosion in new defaults |

**Use case affected**: Agent debugging, log auditing, and any workflow where accurate timestamp capture is essential (CI/CD, scheduled tasks, event correlation). The user's ideal state is "secure by default without false positives"—a classic precision/recall tension in PII detection.

---

## 8. Backlog Watch

| Risk Level | Item | Days Open | Action Needed |
|------------|------|-----------|---------------|
| **Elevated** | **[PR #945](https://github.com/nullclaw/nullclaw/pull/945)** | 1 day | Maintainer review and merge; this is a same-day fix for a default-on regression with clear user impact |
| **Monitor** | **[Issue #944](https://github.com/nullclaw/nullclaw/issues/944)** | 1 day | Close upon PR merge; verify no additional false-positive patterns (UUIDs, version strings, IP addresses) |

**No long-unanswered items** detected in today's data, but the **zero-comment, zero-reaction state on both issue and PR** after 24 hours warrants attention. For a security-related regression in default behavior, maintainer acknowledgment within 48 hours would signal healthy project governance. If unmerged by 2026-06-05, this should escalate to explicit maintainer ping or community discussion.

---

*Digest generated from GitHub activity data for nullclaw/nullclaw on 2026-06-03.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-03

## 1. Today's Overview

IronClaw shows **exceptionally high development velocity** with 79 total items updated in the last 24 hours (29 issues, 50 PRs), indicating an active push toward production readiness. The project is dominated by two parallel workstreams: a **massive "Reborn" architectural hardening initiative** (11 sequential lanes L1-L11 plus 6 subagent correctness clusters C1-C6) and **urgent QA bug triage** from a staged bug bash against Qwen3.6-35B and MiniMax-M2.7 models. With 31 PRs merged/closed versus 19 open and 27 active issues, the team is successfully landing changes while accumulating technical debt documentation. No new releases were cut, suggesting the team is stabilizing toward a milestone rather than shipping incrementally.

---

## 2. Releases

**No new releases** — none published in the tracked period.

---

## 3. Project Progress

### Merged/Closed PRs (31 total; key highlights)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#4355](https://github.com/nearai/ironclaw/issues/4355) (issue closed via PR) | zetyquickly | Engine v2 newtype `client_thread_id` / `client_response_id` on `ThreadExecutionContext` | **Core runtime**: Restores v1's tool correlation contract for outbound side-effects |
| [#3806](https://github.com/nearai/ironclaw/issues/3806) (issue closed) | serrrfirat | GitHub WASM read/write capability path | **Capability ecosystem**: First concrete WASM tool package for extension catalog |
| [#4369](https://github.com/nearai/ironclaw/pull/4369) | henrypark133 | Harden skill context budget contract tests | **Test reliability**: Fixes stale assertions from #4171 |
| [#4374](https://github.com/nearai/ironclaw/pull/4374) | serrrfirat | Accept `memory_search` query aliases (`q`, `text`, `pattern`) | **UX**: Reduces model friction with common query field names |
| [#4357](https://github.com/nearai/ironclaw/pull/4357) | serrrfirat | Fix local-dev Reborn memory mount | **DevEx**: Structured memory backend now works in local development |
| [#4371](https://github.com/nearai/ironclaw/pull/4371) | serrrfirat | Fix Codex ChatGPT Reborn empty responses | **Provider compat**: Hardens SSE parsing for OpenAI's event stream formats |
| [#4347](https://github.com/nearai/ironclaw/pull/4347) | serrrfirat | Fix Reborn Gmail OAuth auth gate scopes | **Auth reliability**: Least-privilege Google scopes for OAuth flows |
| [#4345](https://github.com/nearai/ironclaw/pull/4345) | serrrfirat | Wire Notion DCR OAuth for Reborn WebUI | **Integration**: Product-auth DCR provider for Notion |
| [#4346](https://github.com/nearai/ironclaw/pull/4346) | serrrfirat | Fix Gmail OAuth auth gate requirements | **Auth mapping**: Preserves credential requirements across failures |
| [#4337](https://github.com/nearai/ironclaw/pull/4337) | serrrfirat | Fix Google OAuth prompts for runtime auth gates | **Auth UX**: Eliminates manual-token fallback for Google gates |

**Key advancement**: The "Reborn" architecture is receiving **intensive correctness investment** — 11 sequential loop-hardening PRs (L1-L11) and 6 subagent correctness clusters (C1-C6) were filed as issues with corresponding PRs in flight. This represents a systematic audit-to-fix pipeline.

---

## 4. Community Hot Topics

### Most Active Items by Engagement

| Item | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|
| [#4355](https://github.com/nearai/ironclaw/issues/4355) | 1 | Engine v2 correlation ID newtypes | **Observability**: Tools need stable conversation-turn identity for side-effect correlation |
| [#3806](https://github.com/nearai/ironclaw/issues/3806) | 1 | GitHub WASM capability | **Extensibility**: First-party WASM tooling proves the extension-v2 catalog/runtime |

### Silent but Significant (0 comments, high structural importance)

The **henrypark133 "Reborn-loop" issue series** (#4358–#4368, #4348–#4353) represents a **coordinated architectural audit with 17 filed issues** — zero comments because they're tightly scoped implementation tickets for a known roadmap. The underlying pattern: **production-hardening a cooperative-multitasking agent runtime** against cancellation, budget, persistence, and safety failures.

### Open PRs with Broad Scope

- **[#4354](https://github.com/nearai/ironclaw/pull/4354)** (XL, serrrfirat): Hosted MCP negotiation + Notion/GSuite OAuth credential reuse — **unblocks enterprise SaaS integrations**
- **[#4373](https://github.com/nearai/ironclaw/pull/4373)** (XL, henrypark133): Subagent safety and capability gating — **closes safety bypass paths**
- **[#4375](https://github.com/nearai/ironclaw/pull/4375)** (XL, henrypark133): Trigger poller lifecycle — **enables scheduled/autonomous agent execution**

---

## 5. Bugs & Stability

### Critical/High Severity

| Issue | Model/Area | Severity | Fix Status |
|:---|:---|:---|:---|
| [#4334](https://github.com/nearai/ironclaw/issues/4334) Claude Opus 4.7/4.8 unusable: `temperature` always sent, models reject (400) | **Anthropic API** | 🔴 **Critical** | **No fix PR yet** — blocks latest Claude models entirely |
| [#4108](https://github.com/nearai/ironclaw/issues/4108) Nightly E2E failed | CI/CD | 🟡 High | **No fix PR yet** — failing since 2026-05-27, last updated today |

### Bug Bash P2 Issues (Qwen3.6-35B-A3B-FP8, MiniMax-M2.7)

| Issue | Area | Severity | Fix PR? |
|:---|:---|:---|:---|
| [#4341](https://github.com/nearai/ironclaw/issues/4341) THINKING chain-of-thought exposed to user, stuck in thinking state | UI/Model output | 🟡 High | No — UX corruption + hang |
| [#4344](https://github.com/nearai/ironclaw/issues/4344) Agent mirrors user message as its own response while loading | UI/Rendering | 🟡 High | No — identity confusion in chat |
| [#4343](https://github.com/nearai/ironclaw/issues/4343) MCP integration acknowledged but unusable due to driver failure | Integrations | 🟡 High | No — Notion/GitHub extensions broken |
| [#4342](https://github.com/nearai/ironclaw/issues/4342) Auth modal persists after refresh, blocks chat | Auth/UI | 🟡 High | No — session recovery failure |
| [#4340](https://github.com/nearai/ironclaw/issues/4340) Content field blank validation error blocks submission | Chat/Validation | 🟡 High | No — form validation regression |
| [#4339](https://github.com/nearai/ironclaw/issues/4339) Provider tool calls rejected as InvalidInvocation | Runtime/Validator | 🟡 High | No — schema validation mismatch |
| [#4338](https://github.com/nearai/ironclaw/issues/4338) Disconnected state shows misleading execution driver error | UI/Error handling | 🟢 Medium | No — poor error taxonomy |

**Assessment**: 7 fresh P2 bugs from a single QA pass, all against **non-OpenAI models** (Qwen3.6, MiniMax-M2.7). This signals **provider-fragility in the runtime and UI layers** — the system appears optimized for OpenAI/Anthropic and degrades on alternative model families. The THINKING state hang (#4341) and message mirroring (#4344) suggest **streaming parser state machines** need model-specific hardening.

---

## 6. Feature Requests & Roadmap Signals

### In-Flight (PRs open, likely next release)

| Feature | PR | Signal Strength |
|:---|:---|:---|
| **Scheduled triggers / autonomous agent execution** | [#4375](https://github.com/nearai/ironclaw/pull/4375) | ⭐⭐⭐ High — PR18 trigger poller lifecycle |
| **First-party trigger capabilities** (create/list/remove) | [#4318](https://github.com/nearai/ironclaw/pull/4318) — *merged* | ⭐⭐⭐ High — PR17 already landed |
| **Feishu/Lark enterprise messaging** | [#4178](https://github.com/nearai/ironclaw/pull/4178) | ⭐⭐⭐ High — websocket intake for Chinese enterprise |
| **Slack Reborn final reply delivery** | [#4321](https://github.com/nearai/ironclaw/pull/4321) | ⭐⭐⭐ High — completes #3857 |
| **Engine v2 channel correlation IDs** | [#3669](https://github.com/nearai/ironclaw/pull/3669) | ⭐⭐⭐ High — long-running, near completion |
| **DISABLE_TOOLS_LIST security flag** | [#3548](https://github.com/nearai/ironclaw/pull/3548) | ⭐⭐⭐ High — security hardening, broad scope |

### Architectural (Issue-defined, future releases)

| Feature | Issue | ETA Signal |
|:---|:---|:---|
| Subagent durable completion delivery + restart reconciliation | [#4348](https://github.com/nearai/ironclaw/issues/4348) | Near-term — blocks production subagent reliability |
| Capability validation hardening ($ref rejection, depth guards) | [#4360](https://github.com/nearai/ironclaw/issues/4360) | Near-term — audit-verified correctness gap |
| Budget accuracy (wall-clock, CJK tokens, cost coverage) | [#4364](https://github.com/nearai/ironclaw/issues/4364) | Medium-term — operational necessity |

**Prediction**: The next release will likely be a **"Reborn Production Readiness" milestone** combining trigger scheduling, hardened subagent lifecycle, and expanded OAuth integrations (Notion, GSuite, Gmail fully wired).

---

## 7. User Feedback Summary

### Pain Points (from bug bash + issues)

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Non-OpenAI model fragility** | 7 P2 bugs on Qwen3.6, MiniMax-M2.7; #4334 Claude Opus broken | 🔴 Critical gap |
| **Authentication flow brittleness** | #4342 modal persistence, #4338 misleading disconnect errors, multiple OAuth fix PRs | 🟡 High |
| **UI state corruption** | #4341 thinking hang, #4344 message mirroring, #4336 pending message echo | 🟡 High |
| **MCP/integrations failing silently** | #4343 driver failure acknowledged but unusable | 🟡 High |
| **Validation over-strictness** | #4340 blank content rejection, #4339 valid calls rejected | 🟡 High |

### Satisfaction Indicators

- **Positive**: Rapid OAuth fix velocity (4 Google/Gmail/Notion PRs merged in 24h)
- **Positive**: Systematic Reborn hardening shows engineering maturity
- **Negative**: No release in recent period — users may perceive stagnation
- **Negative**: Nightly E2E failing for 7+ days (#4108) without resolution

---

## 8. Backlog Watch

### Long-Running Items Needing Attention

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#3669](https://github.com/nearai/ironclaw/pull/3669) Engine v2: expose channel-supplied thread/response IDs | 20 days | Medium | Merge-ready? Last updated today, conflicts with #4355 closure pattern |
| [#3548](https://github.com/nearai/ironclaw/pull/3548) DISABLE_TOOLS_LIST flag | 22 days | Medium | Security feature, broad scope, needs final review |
| [#4178](https://github.com/nearai/ironclaw/pull/4178) Feishu websocket intake | 6 days | Low | Enterprise feature, awaiting review |
| [#4108](https://github.com/nearai/ironclaw/issues/4108) Nightly E2E failed | 7 days | **High** | **CI health blocker** — failing tests prevent release confidence |

### Maintainer Attention Required

- **henrypark133's 17-issue Reborn series** (#4348–#4368, #4353–#4358): Needs prioritization/routing — some may be quick wins, others (L8 cancellation propagation, L11 architecture hygiene) are substantial engineering.
- **#4334 Claude Opus temperature rejection**: Simple fix (conditional parameter omission), but no PR after 24h despite being a total breakage. Suggests either model provider coordination lag or deprioritization.

---

## Project Health Assessment

| Dimension | Score | Rationale |
|:---|:---|:---|
| **Velocity** | 🟢 Strong | 79 items/day, 31 PRs landed |
| **Quality** | 🟡 Mixed | Systematic hardening in progress, but 7 fresh P2 bugs and failing CI |
| **Responsiveness** | 🟢 Strong | Same-day OAuth fixes, rapid bug bash PRs |
| **Stability** | 🟡 At risk | No release, failing E2E, model-specific fragility |
| **Roadmap Clarity** | 🟢 Strong | Reborn lanes L1-L11 provide transparent progression |

**Overall**: IronClaw is in a **pre-release stabilization sprint** with high engineering throughput directed at production hardening. The risk is that model-provider fragility and UI state bugs could delay the Reborn milestone if not parallelized with the architectural work.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-03

## 1. Today's Overview

LobsterAI shows **exceptionally high development velocity** with 50 PRs updated in the last 24 hours (47 merged/closed, 3 remaining open). Despite zero issues activity and no new releases, the project demonstrates robust engineering throughput focused on stability refinements, model integration updates, and user experience polish. The merge rate of 94% indicates strong code review efficiency and mature CI/CD practices. The project appears to be in a **pre-release stabilization phase** following the May 2026 feature sprint, with emphasis on bug fixes over new feature development.

---

## 2. Releases

**No new releases** — None published.

---

## 3. Project Progress

### Merged/Closed PRs Today (47 total)

| PR | Area | Description | Link |
|:---|:---|:---|:---|
| #2096 | main | **Plugin system hardening**: Hide internal OpenClaw runtime plugins from plugin management UI; filter hidden IDs from user config sync | [PR #2096](https://github.com/netease-youdao/LobsterAI/pull/2096) |
| #2095 | renderer, main | **Cowork subagent reliability**: Batch deletion support for subagent sessions with async gateway cleanup, concurrency limiting, and retry capping | [PR #2095](https://github.com/netease-youdao/LobsterAI/pull/2095) |
| #2094 | renderer, artifacts | **UX polish**: Share success modal information hierarchy optimization (share link/code styling, redundant state removal) | [PR #2094](https://github.com/netease-youdao/LobsterAI/pull/2094) |
| #2093 | renderer | **MiniMax-M3 vision enablement**: Fix hardcoded `supportsImage: false` to unlock native image input capability | [PR #2093](https://github.com/netease-youdao/LobsterAI/pull/2093) |
| #2092 | renderer, docs, main, artifacts | **Artifacts feature rollout** (2026.5.28 release branch merge) | [PR #2092](https://github.com/netease-youdao/LobsterAI/pull/2092) |
| #2091 | renderer, docs, main | **MCP performance**: npx launch resolution optimization with pre-installation to stable `node <path>`; first-response timing telemetry; stale `installing` recovery | [PR #2091](https://github.com/netease-youdao/LobsterAI/pull/2091) |
| #1952 | renderer, docs, main, cowork | **macOS accessibility**: Voice input permission denial toast guidance (System Settings → Privacy → Accessibility) | [PR #1952](https://github.com/netease-youdao/LobsterAI/pull/1952) |
| #1962 | renderer, main, openclaw, cowork | **Security**: nsp-clawguard hot-toggle in Settings with config persistence | [PR #1962](https://github.com/netease-youdao/LobsterAI/pull/1962) |
| #1985 | renderer, main, cowork | **Chat intelligence**: Thinking level control (Off/Minimal/Low/Medium/High/Adaptive) with full stack integration | [PR #1985](https://github.com/netease-youdao/LobsterAI/pull/1985) |
| #2015 | renderer, docs, main, openclaw, cowork | **OpenClaw resilience**: Compaction retry handling and tool result gap fixes | [PR #2015](https://github.com/netease-youdao/LobsterAI/pull/2015) |
| #2022 | renderer, main, cowork, artifacts | **Artifacts UX**: Lazy-loaded source preview, theme-aware code view, HTML preview file existence validation | [PR #2022](https://github.com/netease-youdao/LobsterAI/pull/2022) |
| #2018 | main, openclaw | **Gateway stability**: Eliminate unnecessary OpenClaw gateway restart on token refresh | [PR #2018](https://github.com/netease-youdao/LobsterAI/pull/2018) |
| #2023 | renderer, docs, main, openclaw | **Tool reliability**: Browser/webfetch stability and success rate improvements | [PR #2023](https://github.com/netease-youdao/LobsterAI/pull/2023) |
| #2024 | renderer, docs, main, openclaw, im | **Settings performance**: Gateway restart optimization | [PR #2024](https://github.com/netease-youdao/LobsterAI/pull/2024) |
| #2031 | renderer, main, openclaw | **Browser config fix**: Invalid browser configuration handling | [PR #2031](https://github.com/netease-youdao/LobsterAI/pull/2031) |
| #2025 | renderer, main, openclaw, im | **IM management**: Bot management UI redesign | [PR #2025](https://github.com/netease-youdao/LobsterAI/pull/2025) |
| #2028 | renderer, im | **UI refresh**: General interface updates | [PR #2028](https://github.com/netease-youdao/LobsterAI/pull/2028) |

**Key advancement**: The project completed integration of the **May 28, 2026 artifacts feature branch** (#2092) alongside critical stability work for the OpenClaw runtime engine and MiniMax-M3 model support.

---

## 4. Community Hot Topics

| PR/Issue | Activity Signal | Analysis | Link |
|:---|:---|:---|:---|
| #388 MiniMax-M3 upgrade | **Stale open PR** (created 2026-03-12, last updated 2026-06-02) | Underlying need: Rapid model vendor iteration tracking. The 3-month staleness suggests upstream model release cadence outpaces review bandwidth. Partially superseded by #2093 (image support fix). | [PR #388](https://github.com/netease-youdao/LobsterAI/pull/388) |
| #1277 Electron dependency bump | **Dependabot staleness** (created 2026-04-02, 2+ months open) | Underlying need: Security-conscious Electron base maintenance. Version jump 40.2.1→42.3.1 indicates significant Chromium upgrade; may be blocked by QA validation. | [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) |
| #1464 IM duplicate validation | **Open since 2026-04-04** | Underlying need: Enterprise multi-tenant IM governance. DingTalk/Feishu/QQ duplicate instance prevention critical for B2B deployments. | [PR #1464](https://github.com/netease-youdao/LobsterAI/pull/1464) |

**Community dynamic**: Low comment/reaction counts across all PRs suggest either (a) internal team-driven development with limited external contributor engagement, or (b) efficient async review culture without noisy discussion. The three open PRs all represent **integration validation bottlenecks** rather than technical disagreements.

---

## 5. Bugs & Stability

| Severity | Item | Status | Details | Link |
|:---|:---|:---|:---|:---|
| 🔴 **High** | MiniMax-M3 image support broken | **Fixed** (#2093) | Hardcoded `supportsImage: false` from legacy models blocked vision capability despite M3 native support | [PR #2093](https://github.com/netease-youdao/LobsterAI/pull/2093) |
| 🔴 **High** | OpenClaw gateway restart storms | **Fixed** (#2018, #2024) | Token refresh triggered unnecessary gateway restarts; settings changes optimized | [PR #2018](https://github.com/netease-youdao/LobsterAI/pull/2018), [PR #2024](https://github.com/netease-youdao/LobsterAI/pull/2024) |
| 🟡 **Medium** | Browser/webfetch reliability | **Fixed** (#2023) | Intermittent tool execution failures | [PR #2023](https://github.com/netease-youdao/LobsterAI/pull/2023) |
| 🟡 **Medium** | OpenClaw compaction/tool result gaps | **Fixed** (#2015) | Retry logic and missing result handling | [PR #2015](https://github.com/netease-youdao/LobsterAI/pull/2015) |
| 🟡 **Medium** | Browser config invalid state | **Fixed** (#2031) | Configuration parsing edge case | [PR #2031](https://github.com/netease-youdao/LobsterAI/pull/2031) |
| 🟢 **Low** | macOS voice input permission UX | **Fixed** (#1952) | Silent failure on accessibility denial; now guided toast | [PR #1952](https://github.com/netease-youdao/LobsterAI/pull/1952) |
| 🟢 **Low** | Share modal visual hierarchy | **Fixed** (#2094) | Information architecture polish | [PR #2094](https://github.com/netease-youdao/LobsterAI/pull/2094) |

**Stability assessment**: Zero **new** bug reports today; all fixes address **previously identified** technical debt. The concentrated OpenClaw fixes (#2015, #2018, #2023, #2024, #2031) indicate a **dedicated reliability sprint** for the agent runtime engine.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **MiniMax-M3 full integration** | #388, #2093 | **High** | Model config upgrade + vision fix merged; likely complete in imminent release |
| **Thinking level controls** | #1985 (merged) | **Shipped** | Full end-to-end implementation with DB migration complete |
| **Artifacts system GA** | #2092, #2022 (merged) | **Shipped** | Major feature branch merged with performance optimizations |
| **nsp-clawguard security monitoring** | #1962 (merged) | **Shipped** | Toggleable enterprise security feature |
| **MCP performance optimization** | #2091 (merged) | **Shipped** | npx resolution caching and telemetry |
| **Electron 42/Chromium upgrade** | #1277 (pending) | **Medium** | Dependabot PR stale 2 months; may merge for security patches |
| **IM multi-instance governance** | #1464 (pending) | **Medium** | Enterprise requirement; implementation complete pending review |

**Predicted next release focus**: The merged features suggest a **v2026.6.x** release emphasizing: (1) MiniMax-M3 as primary model, (2) Artifacts collaboration system, (3) Thinking level controls for reasoning transparency, (4) Enterprise security/IM management.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Satisfaction Indicator |
|:---|:---|:---|
| **MCP startup latency** | #2091: "avoid each session startup repeating npx slow path" | 😐 Neutral → improving |
| **macOS permission confusion** | #1952: "no feedback after denying permission" | 😞 Dissatisfied → fixed |
| **Subagent management at scale** | #2095: batch deletion, async cleanup with concurrency limits | 😐 Neutral → improving |
| **Share output clarity** | #2094: redundant status indicators removed | 😐 Neutral → improving |
| **Gateway instability** | #2018, #2024: restart on token refresh | 😞 Dissatisfied → fixed |
| **Artifacts performance** | #2022: lazy loading for large files | 😐 Neutral → improving |

**Meta-pattern**: Feedback signals are **internally captured** (no external issue reports), suggesting either (a) dogfooding by NetEase Youdao teams, or (b) closed beta user channels. No explicit user satisfaction metrics available.

---

## 8. Backlog Watch

| Item | Age | Risk | Recommended Action |
|:---|:---|:---|:---|
| **#388 MiniMax-M3 default model upgrade** | 84 days | Medium | Superseded by #2093 for image support; either merge model list reordering or close as partial duplicate | [PR #388](https://github.com/netease-youdao/LobsterAI/pull/388) |
| **#1277 Electron 40→42 upgrade** | 62 days | **High** (security) | Chromium/Node.js security patches; schedule QA validation or pin to next release milestone | [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) |
| **#1464 IM duplicate validation** | 60 days | Medium | Enterprise feature complete; needs maintainer review for merge | [PR #1464](https://github.com/netease-youdao/LobsterAI/pull/1464) |

**Maintainer attention needed**: The Electron dependency upgrade (#1277) represents the highest backlog risk due to security patch lag. The two-month staleness suggests either (a) compatibility blockers with native modules, or (b) release timing coordination with the artifacts feature branch (now merged, unblocking this).

---

## Project Health Summary

| Metric | Status |
|:---|:---|
| Development velocity | 🟢 Excellent (50 PRs/day) |
| Merge rate | 🟢 Excellent (94%) |
| Issue triage | ⚪ N/A (0 issues) |
| Release cadence | 🟡 Stagnant (no releases, but heavy pre-release activity) |
| Dependency maintenance | 🔴 At risk (Electron 2 months behind) |
| External community | 🟡 Limited (internal-team dominated) |

**Overall**: LobsterAI demonstrates **mature engineering execution** with high throughput and quality focus. The absence of external issues and low community engagement metrics suggest a **corporate-backed, product-driven open source model** rather than community-governed development. Near-term priority should be unblocking the Electron upgrade and shipping the accumulated May-June feature payload.

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

# CoPaw Project Digest — 2026-06-03

## 1. Today's Overview

CoPaw (QwenPaw) shows **high community activity** with 48 issues and 32 PRs updated in the last 24 hours, indicating an active development cycle despite no new release. The project is currently in a **critical migration phase** from AgentScope 1.x to 2.0, with significant security hardening underway following multiple vulnerability disclosures. A notable pattern is the concentrated security research by contributor `YLChen-007`, who reported and had 6 security issues closed in a single day, suggesting either a coordinated security audit or bug bounty activity. The high open-to-closed ratio (26 open issues, 23 open PRs) indicates the maintainers are processing contributions but backlog is accumulating.

---

## 2. Releases

**No new releases** (v1.1.10 remains current; v1.1.11b1 bump PR [#4907](https://github.com/agentscope-ai/QwenPaw/pull/4907) was closed without merge).

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Description | Significance |
|:---|:---|:---|
| [#4907](https://github.com/agentscope-ai/QwenPaw/pull/4907) | Version bump to v1.1.11b1 (closed, not merged) | Release preparation halted; may indicate blocking issues |
| [#4899](https://github.com/agentscope-ai/QwenPaw/pull/4899) | Fix: Include Yuanbao proto JSON files in package data | **Production fix** — resolves channel authentication failure |
| [#4883](https://github.com/agentscope-ai/QwenPaw/pull/4883) | Fix: Cron message delivery to WeChat/WeCom | Fixes core scheduling functionality |
| [#4853](https://github.com/agentscope-ai/QwenPaw/pull/4853) | Fix: Kill browser process tree on Windows | Stability improvement for Windows users |
| [#4689](https://github.com/agentscope-ai/QwenPaw/pull/4689) | Feat: Route non-standard generate_kwargs into extra_body | Provider compatibility (DashScope, etc.) |
| [#1317](https://github.com/agentscope-ai/QwenPaw/pull/1317) | Feat: Cloudflared download status notifications | UX improvement for tunnel setup |

### Key Advancements

- **AgentScope 2.0 migration**: Active work in [#4846](https://github.com/agentscope-ai/QwenPaw/pull/4846) (open, breaking change) — this is the largest architectural shift in progress
- **Plugin system maturation**: Multiple PRs extending plugin APIs (uninstall hooks, prompt section registry, skill provider API)
- **Desktop experience**: Tauri auto-updater ([#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669)) and external link fixes ([#4683](https://github.com/agentscope-ai/QwenPaw/pull/4683)) in progress

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Comments | Status | Topic | Underlying Need |
|:---|:---|:---|:---|:---|
| [#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666) | 6 | **OPEN** | Model config lost after new session | **Data persistence reliability** — users cannot trust configuration state |
| [#4878](https://github.com/agentscope-ai/QwenPaw/issues/4878) | 5 | CLOSED | WeChat cron message delivery failure | Channel integration robustness for home automation |
| [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) | 5 | **OPEN** | Migrate to AgentScope 2.0 | **Technical debt / future-proofing** — community wants clarity on timeline |
| [#4908](https://github.com/agentscope-ai/QwenPaw/issues/4908) | 4 | CLOSED | Unauthenticated settings modification | Security posture (API auth gaps) |
| [#3985](https://github.com/agentscope-ai/QwenPaw/issues/3985) | 4 | CLOSED | DeepSeek reasoning_content not passed in multi-turn | **LLM provider compatibility** — reasoning models are increasingly used |
| [#4893](https://github.com/agentscope-ai/QwenPaw/issues/4893) | 4 | CLOSED | Windows file upload size limits | **Desktop-native experience** — Windows users expect local-first behavior |

### Analysis

The top open issue [#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666) represents a **critical reliability gap**: state management between sessions is fundamentally broken for some users. The AgentScope 2.0 migration [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) has community attention (2 👍, active discussion) but no committed timeline, creating uncertainty.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Description |
|:---|:---|:---|:---|:---|
| **Critical** | [#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666) | **OPEN** | None | Session creation destroys model configs — requires restart |
| **High** | [#4903](https://github.com/agentscope-ai/QwenPaw/issues/4903) | **OPEN** | None | Loading states broken in chat switching — UI becomes unresponsive |
| **High** | [#4895](https://github.com/agentscope-ai/QwenPaw/issues/4895) | **OPEN** | None | Infinite image compression loop causes hallucination/cost explosion |
| **High** | [#4919](https://github.com/agentscope-ai/QwenPaw/issues/4919) | **OPEN** | None | browser_use fails on Windows — managed CDP timeout, browser crashes |
| **Medium** | [#4837](https://github.com/agentscope-ai/QwenPaw/issues/4837) | **OPEN** | None | v1.1.9 frequent fallback "无法处理您的问题" — false degradation |
| **Medium** | [#4877](https://github.com/agentscope-ai/QwenPaw/issues/4877) | **OPEN** | None | Custom channel save stops listener (port conflict in replace logic) |
| **Medium** | [#4898](https://github.com/agentscope-ai/QwenPaw/issues/4898) | CLOSED | [#4899](https://github.com/agentscope-ai/QwenPaw/pull/4899) | Yuanbao missing proto files — fixed in package data |
| **Medium** | [#4878](https://github.com/agentscope-ai/QwenPaw/issues/4878) | CLOSED | [#4883](https://github.com/agentscope-ai/QwenPaw/pull/4883) | WeChat cron delivery with shared_session=false |

### Security Vulnerabilities (All Closed Today)

Six security issues by `YLChen-007` were disclosed and closed, indicating rapid response:
- [#4908](https://github.com/agentscope-ai/QwenPaw/issues/4908): Auth bypass on settings API
- [#4909](https://github.com/agentscope-ai/QwenPaw/issues/4909): ToolGuard bypass via request_context
- [#4910](https://github.com/agentscope-ai/QwenPaw/issues/4910): Session ID injection causing persistent failures
- [#4911](https://github.com/agentscope-ai/QwenPaw/issues/4911): MCP config 500 errors instead of validation
- [#4912](https://github.com/agentscope-ai/QwenPaw/issues/4912): Timezone handling crashes
- [#4913](https://github.com/agentscope-ai/QwenPaw/issues/4913): Path traversal in system_prompt_files
- [#4914](https://github.com/agentscope-ai/QwenPaw/issues/4914): Workspace export leaks secrets

**Assessment**: The security response velocity is excellent, but the volume of vulnerabilities suggests **systematic API hardening is needed** before v1.1.11 stable release.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **AgentScope 2.0 backend** | [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727), [#4846](https://github.com/agentscope-ai/QwenPaw/pull/4846) | High (planned) | Breaking change PR active; community pressure |
| **Multi-model collaboration (spawn_subagent)** | [#4901](https://github.com/agentscope-ai/QwenPaw/issues/4901) | Medium | Cost optimization trend; matches Claude Code pattern |
| **On-demand tool loading** | [#4836](https://github.com/agentscope-ai/QwenPaw/issues/4836) | Medium | 55-65% token reduction — clear performance win |
| **Lossless context compression** | [#4551](https://github.com/agentscope-ai/QwenPaw/issues/4551) | Low-Medium | Complex architectural change; long-term need |
| **Windows drive browsing** | [#4906](https://github.com/agentscope-ai/QwenPaw/pull/4906) | High | PR open, under review; small scope |
| **Browser coordinate clicking** | [#4905](https://github.com/agentscope-ai/QwenPaw/pull/4905) | Medium | First-time contributor; narrow use case |
| **Built-in PRD management** | [#4902](https://github.com/agentscope-ai/QwenPaw/pull/4902) | Medium | Replaces plugin with core tool; product direction signal |
| **Data analysis plugin (DataPaw)** | [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) | Medium | Large contribution (12 BI skills); review pending |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Windows experience gaps** | [#4906](https://github.com/agentscope-ai/QwenPaw/pull/4906), [#4893](https://github.com/agentscope-ai/QwenPaw/issues/4893), [#4894](https://github.com/agentscope-ai/QwenPaw/issues/4894), [#4919](https://github.com/agentscope-ai/QwenPaw/issues/4919), [#4853](https://github.com/agentscope-ai/QwenPaw/pull/4853) | **High** — Platform parity not achieved |
| **UI complexity** | [#4904](https://github.com/agentscope-ai/QwenPaw/issues/4904) | Medium — Sidebar navigation criticized vs. competitors (Codex, Claude Desktop) |
| **State/reliability** | [#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666), [#4903](https://github.com/agentscope-ai/QwenPaw/issues/4903), [#4837](https://github.com/agentscope-ai/QwenPaw/issues/4837) | **High** — Users cannot trust session persistence |
| **Update mechanism fragility** | [#4875](https://github.com/agentscope-ai/QwenPaw/issues/4875) | Medium — uv venv reset loses packages |
| **Font/accessibility** | [#4154](https://github.com/agentscope-ai/QwenPaw/issues/4154) | Low — Long-standing, unaddressed |

### Positive Signals

- Active plugin ecosystem development (DataPaw, Before You Build Skill)
- Security responsiveness builds trust
- Desktop auto-updater in progress ([#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669))

---

## 8. Backlog Watch

| Item | Age | Issue/PR | Risk | Action Needed |
|:---|:---|:---|:---|:---|
| **Font size / accessibility** | 25 days | [#4154](https://github.com/agentscope-ai/QwenPaw/issues/4154) | User retention for desktop | Simple fix; should be triaged |
| **Lossless context compression** | 14 days | [#4551](https://github.com/agentscope-ai/QwenPaw/issues/4551) | Competitive parity (long-context agents) | Architectural review; may depend on AS 2.0 |
| **Tauri auto-updater** | 9 days | [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) | Desktop distribution | Under review; blocking v1.1.11? |
| **Plugin loader decoupling** | 1 day | [#4900](https://github.com/agentscope-ai/QwenPaw/pull/4900) | Desktop plugin functionality | Critical for v1.1.10 users |
| **AgentScope 2.0 migration** | 7 days | [#4846](https://github.com/agentscope-ai/QwenPaw/pull/4846) | **Project direction** | Needs maintainer decision on timeline |
| **Xiaomi MiMo provider** | 7 days | [#4722](https://github.com/agentscope-ai/QwenPaw/pull/4722) | Provider ecosystem expansion | Straightforward; review pending |

### Maintainer Attention Required

1. **Decide v1.1.11 scope**: Whether to ship security fixes without AS 2.0, or hold for migration
2. **Windows stability**: Multiple open issues suggest platform-specific QA gap
3. **Plugin system architecture**: Three concurrent PRs (#4794, #4804, #4900) need coordination to avoid conflicts
4. **Security disclosure process**: [#4863](https://github.com/agentscope-ai/QwenPaw/issues/4863) indicates ASRC doesn't list QwenPaw — needs official channel establishment

---

*Digest generated from GitHub activity 2026-06-02. All links: https://github.com/agentscope-ai/QwenPaw*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-03

## 1. Today's Overview

ZeroClaw shows **high-velocity development** with 49 issues and 50 PRs active in the last 24 hours, indicating a mature project in active stabilization mode for its v0.8.0 release line. The project shipped **v0.8.0-beta-2**, its largest release since v0.7.5, headlined by the new `zerocode` terminal UI and multi-agent runtime capabilities. Community engagement remains strong with 34 open/active issues and 33 open PRs, though the high volume of P1-priority items and security-related fixes suggests the team is prioritizing stability over feature expansion. Notably, multiple provider compatibility bugs (DeepSeek, Kimi) and channel security issues were resolved, while infrastructure work (versioned docs, WASI plugin interfaces, Nix support) indicates long-term architectural investment.

---

## 2. Releases

### [v0.8.0-beta-2](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.0-beta-2)

**Headline changes:**
- **`zerocode`**: New full-featured terminal UI for running and operating agents without leaving the terminal
- **Multi-agent runtime**: Expanded runtime capabilities for concurrent agent execution

**Context:** This is the second beta of the v0.8.0 line and the largest release since v0.7.5. The release signals a shift toward terminal-first UX parity with the web dashboard.

**Migration notes:** Not explicitly documented in release notes; users on v0.8.0-beta-1 should upgrade for TUI stability fixes.

---

## 3. Project Progress

### Merged/Closed PRs (17 total merged/closed; key items highlighted)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#7070](https://github.com/zeroclaw-labs/zeroclaw/pull/7070) | theonlyhennygod | Fixed Twitter/X channel exclusion from default build features | **Unblocks** social channel users; closes [#7069](https://github.com/zeroclaw-labs/zeroclaw/issues/7069) |

*Note: PR list shows 20 open PRs in detail; closed PRs beyond #7070 not fully itemized in source data. Issue closures indicate additional merges.*

### Features Advanced

| Issue/PR | Status | Progress |
|:---|:---|:---|
| [#6824](https://github.com/zeroclaw-labs/zeroclaw/issues/6824) | **CLOSED** | TUI Agent Chat tracker completed — streaming display, tool calls, approval prompts in Ratatui UI shipped |
| [#6820](https://github.com/zeroclaw-labs/zeroclaw/issues/6820) | **CLOSED** | `zeroclaw-tui` crate moved to `apps/zerocode`, completing project layout reorganization |
| [#6821](https://github.com/zeroclaw-labs/zeroclaw/issues/6821) | **CLOSED** | ACP protocol extensions for diff/file-proposal message types — enables TUI/web dashboard side-by-side diffs |

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Rank | Issue | Comments | 👍 | Analysis |
|:---|:---|:---:|:---:|:---|
| 1 | [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) DeepSeek-V4 API incompatibility | **15** | 4 | **CLOSED** — High-severity provider compatibility bug. Root cause: thinking/reasoning mode format mismatch. **Signal:** Provider API drift is a major operational risk; community needs automated provider conformance testing. |
| 2 | [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) Kimi streaming chat tool errors | **9** | 1 | **OPEN** — S1 workflow-blocked. Same `reasoning_content` missing pattern as DeepSeek. **Underlying need:** Unified reasoning-content handling across all Chinese providers (DeepSeek, Kimi, Moonshot). |
| 3 | [#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) Real heartbeat tracking for daemon nodes | **4** | 0 | **OPEN, BLOCKED** — Infrastructure reliability gap. Half-open TCP connections create false "Online" status. **Underlying need:** Production-grade node liveness for multi-machine fleets. |
| 4 | [#7069](https://github.com/zeroclaw-labs/zeroclaw/issues/7069) Twitter/X missing from pre-built binary | **3** | 0 | **CLOSED** — Feature flag vs. documentation mismatch. **Underlying need:** Clearer feature bundling communication. |

### Active PRs with Architectural Significance

| PR | Focus | Signal |
|:---|:---|:---|
| [#7023](https://github.com/zeroclaw-labs/zeroclaw/pull/7023) | Versioned documentation deployment | Long-term maintainability; reduces support burden |
| [#7060](https://github.com/zeroclaw-labs/zeroclaw/pull/7060) | WIT interface files for WASI plugins (FND-001) | **Strategic:** Plugin architecture foundation for third-party extensibility |
| [#5987](https://github.com/zeroclaw-labs/zeroclaw/pull/5987) | Nix flake support | Developer experience, reproducible builds |

---

## 5. Bugs & Stability

### Critical/High Severity (P1/S1-S2)

| Issue | Severity | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) Kimi streaming 400 Bad Request | **S1 — workflow blocked** | OPEN | None linked | `reasoning_content` missing when thinking enabled; affects streaming tool calls |
| [#7068](https://github.com/zeroclaw-labs/zeroclaw/issues/7068) Telegram receives Codex scratchpad as final response | **S? — high risk** | OPEN | None linked | Agent delegation to Codex leaks internal tool transcripts to end users |
| [#7063](https://github.com/zeroclaw-labs/zeroclaw/issues/7063) Channel agents bypass tool allowlist | **S? — high risk, security** | **CLOSED** | Fixed | `start_channels` skipped `apply_policy_tool_filter`; security policy enforcement gap |
| [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) DeepSeek-V4 API format | **S2 — degraded** | **CLOSED** | Fixed | Thinking mode incompatibility |
| [#6040](https://github.com/zeroclaw-labs/zeroclaw/issues/6040) `<think>` blocks leak to webhook channels | **S2 — degraded, security** | **CLOSED** | Fixed | Reasoning content not sanitized in `sanitize_channel_response` |
| [#5795](https://github.com/zeroclaw-labs/zeroclaw/issues/5795) XML `tool_result` tags leak to channels | **S2 — degraded** | OPEN | [#5796](https://github.com/zeroclaw-labs/zeroclaw/pull/5796) open | Gemini-3 returns XML tool results; strip logic missing |

### Medium Severity

| Issue | Status | Notes |
|:---|:---|:---|
| [#7038](https://github.com/zeroclaw-labs/zeroclaw/issues/7038) WebSocket 401 despite valid auth | OPEN, needs-repro | `zeroclaw check` false negative |
| [#7001](https://github.com/zeroclaw-labs/zeroclaw/issues/7001) TTS resolves wrong agent's provider | **CLOSED** | Multi-agent config resolution bug |

**Stability assessment:** Two provider reasoning-content bugs (#5600, #6059 pattern) suggest systemic issue with "thinking mode" providers. Security fix for channel tool bypass (#7063) was critical and promptly closed.

---

## 6. Feature Requests & Roadmap Signals

### Likely v0.8.1 / Near-term (tracked in [#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970))

| Feature | Issue/PR | Confidence | Rationale |
|:---|:---|:---:|:---|
| Slack lifecycle progress indicators | [#7113](https://github.com/zeroclaw-labs/zeroclaw/issues/7113) | **High** | Fresh request, aligns with v0.8.1 channel improvements |
| Config UX parity (CLI/Quickstart/zerocode/web) | [#7117](https://github.com/zeroclaw-labs/zeroclaw/issues/7117) | **High** | Created today; explicit "reference-grade UX bar" goal |
| NEAR AI Cloud provider | [#6842](https://github.com/zeroclaw-labs/zeroclaw/pull/6842) | **Medium** | Open PR, TEE-backed inference niche |
| ACP console in web UI | [#7036](https://github.com/zeroclaw-labs/zeroclaw/pull/7036) | **Medium** | Large PR open, web feature |

### v0.8.0 Stable Blockers ([#7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112))

| Blocker | Status |
|:---|:---|
| Config/tool-call-parser Stable-tier promotion | In progress |
| Schema/config breaking-change cleanup | In progress |
| Runtime/provider configuration correctness | In progress |

### Long-term / Strategic

| Feature | Issue | Signal Strength |
|:---|:---|:---:|
| Air-gapped execution (enclave support) | [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) | Strong — security-focused enterprise need |
| WASI plugin system | [#7060](https://github.com/zeroclaw-labs/zeroclaw/pull/7060) | Strong — FND-001 architecture foundation |
| Skills ecosystem (v0.7.6 theme) | [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) | Moderate — tracker open, community input solicited |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Provider compatibility fragility** | #6059, #5600, #5795, #7095 | 🔴 High |
| Chinese providers (DeepSeek, Kimi) repeatedly break on reasoning-content handling; Ollama tool support misadvertised (#7095) | | |
| **Configuration complexity** | #6975, #7005, #6079, #7117 | 🟡 Medium |
| Onboarding writes state but not config; bare strings in CLI; tilde/`$HOME` paths fail silently; config surfaces inconsistent | | |
| **Security policy gaps** | #7063, #6613, #6977 | 🟡 Medium |
| Channel bypass of tool allowlists; weak 6-digit pairing codes; http_request private-host alignment | | |
| **Multi-agent runtime edge cases** | #7001, #6391, #6390 | 🟡 Medium |
| TTS provider resolution wrong; no real node heartbeat; no CLI to register remote daemons | | |

### Positive Signals

- **zerocode TUI enthusiasm**: #6824 completion, #6821 reorganization show investment in terminal UX
- **Documentation responsiveness**: #7070 Twitter fix, #7115 feature-availability notes, #7116 Codex docs, #7114 Podman docs
- **Security responsiveness**: #7063 closed same day it was opened (June 1→2)

### Use Case Evolution

Users are pushing ZeroClaw into **production multi-agent deployments** (daemon nodes, fleet management) and **enterprise security contexts** (air-gapped, enclaves, stronger auth). The project is transitioning from "personal AI assistant" to "team/organization agent platform."

---

## 8. Backlog Watch

### Long-unanswered Important Items

| Issue | Age | Blocker | Risk |
|:---|:---|:---|:---|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) Audit: 153 commits lost in bulk revert | ~2 months | **Help wanted**, in-progress | 🔴 **High** |
| 153 commits of bug fixes/features reverted in March; recovery tracker stalled. Risk: permanent loss of reviewed work. | | | |
| [#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) Real heartbeat tracking | ~1 month | **Blocked** | 🟡 Medium |
| Depends on WebSocket infrastructure; blocks reliable fleet management | | | |
| [#6390](https://github.com/zeroclaw-labs/zeroclaw/issues/6390) `zeroclaw node add` CLI | ~1 month | **Blocked** | 🟡 Medium |
| CLI side of multi-machine fleet; blocked by #6391 or related gateway work | | | |
| [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) Air-gapped execution mode | ~1 month | **Blocked**, needs-maintainer-review | 🟡 Medium |
| RFC-type feature; no maintainer engagement visible; high enterprise value | | | |
| [#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613) Stronger pairing codes | ~3 weeks | **Accepted** | 🟡 Medium |
| Security enhancement accepted but no implementation visible | | | |

### PRs Needing Maintainer Attention

| PR | Age | Issue |
|:---|:---|:---|
| [#5796](https://github.com/zeroclaw-labs/zeroclaw/pull/5796) Strip XML tool_result | ~7 weeks | Simple fix, long review queue |
| [#5987](https://github.com/zeroclaw-labs/zeroclaw/pull/5987) Nix flake | ~6 weeks | Community packaging, low maintainer priority |

---

*Digest generated from GitHub activity 2026-06-02 to 2026-06-03. All links: https://github.com/zeroclaw-labs/zeroclaw*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*