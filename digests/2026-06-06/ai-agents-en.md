# OpenClaw Ecosystem Digest 2026-06-06

> Issues: 467 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-06 00:27 UTC

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

# OpenClaw Project Digest — 2026-06-06

## 1. Today's Overview

OpenClaw shows **extremely high development velocity** with 467 issues and 500 PRs updated in the last 24 hours, indicating a mature, actively maintained project at scale. However, the lopsided ratio of open to closed items (340 open issues, 376 open PRs vs. 127 closed issues, 124 merged/closed PRs) suggests a **growing backlog** that may strain maintainer capacity. No new release was cut today, leaving the recent 2026.6.1 release as the current baseline—a version already showing **significant stability regressions** in production. The community is intensely focused on session-state reliability, auth provider resilience, and channel-specific message delivery bugs.

---

## 2. Releases

**No new releases today.**

The most recent release remains **2026.6.1**, which has already generated multiple critical bug reports (see #90083, #90093, #90072, #90325, #90466). Users upgrading to 2026.6.1 should exercise caution; several data-loss and auth regressions are unpatched.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary | Link |
|:---|:---|:---|:---|
| #90785 | Yonge-Phonely | Ignore artifact files (`.toon`, `.wav`, `.xlsx`) in `.gitignore` | [PR #90785](https://github.com/openclaw/openclaw/pull/90785) |
| #90775 | jalehman | **Fix**: Refresh prompt fence after compaction writes—resolves false session takeover reports | [PR #90775](https://github.com/openclaw/openclaw/pull/90775) |
| #75167 | DevAbdullah90 | **Fix**: Suppress heartbeat poll prompt leakage in Telegram/Slack/Discord DMs | [PR #75167](https://github.com/openclaw/openclaw/pull/75167) |

### Notable Open PRs Advancing

| PR | Author | What It Addresses | Link |
|:---|:---|:---|:---|
| #89040 | Jerry-Xin | **Perf**: Eliminates 14–22 second event-loop stalls during `embedded_run` bootstrap by replacing sync file I/O | [PR #89040](https://github.com/openclaw/openclaw/pull/89040) |
| #78441 | guanbear | **Feat**: Forwards `toolsAllow` from `sessions_spawn` to subagents—closes major MCP tool injection gap | [PR #78441](https://github.com/openclaw/openclaw/pull/78441) |
| #90723 | joshp123 | **Feat**: Gmail Pub/Sub pull delivery mode for hooks | [PR #90723](https://github.com/openclaw/openclaw/pull/90723) |
| #85651 | karmafeast | **Feat**: Context-pressure-aware continuation (`continue_work`/`continue_delegate`/`request_compaction`)—major architectural enhancement | [PR #85651](https://github.com/openclaw/openclaw/pull/85651) |
| #90782 | RomneyDa | **Perf**: Prewarm runtime plugins before first send—reduces first-turn latency | [PR #90782](https://github.com/openclaw/openclaw/pull/90782) |

---

## 4. Community Hot Topics

### Most Active Issues (by Comment Count & Engagement)

| # | Title | Comments | 👍 | Status | Link |
|:---|:---|:---:|:---:|:---|:---|
| **#22438** | Tiered bootstrap file loading for progressive context control | 17 | 0 | OPEN | [Issue #22438](https://github.com/openclaw/openclaw/issues/22438) |
| **#62505** | Coding Agent never completes anything (regression from 2026.4.2) | 14 | 1 | OPEN, P1 | [Issue #62505](https://github.com/openclaw/openclaw/issues/62505) |
| **#76562** | High CPU, extreme RPC latency, unstable polling after 2026.4.24→2026.4.29/2026.5.2 | 13 | 5 | **CLOSED** | [Issue #76562](https://github.com/openclaw/openclaw/issues/76562) |
| **#78308** | Channel-mediated approval for MCP tool calls (consent envelope) | 12 | 1 | OPEN | [Issue #78308](https://github.com/openclaw/openclaw/issues/78308) |
| **#90083** | OpenAI ChatGPT Responses transport fails with `invalid_provider_content_type` for gpt-5.4/gpt-5.5 | 12 | 3 | OPEN, P1 | [Issue #90083](https://github.com/openclaw/openclaw/issues/90083) |

### Underlying Needs Analysis

- **#22438**: The community is desperate for **context window economics**—bootstrap files waste ~3,500 tokens/session. This reflects LLM cost pressure at scale.
- **#62505**: A **long-running P1 regression** destroying core value proposition (coding agent productivity). The "diamond lobster" rating and stale tags suggest maintainer bandwidth crisis.
- **#78308**: Security-conscious users want **MCP tool call parity with shell-exec approval flows**—extending trust boundaries to external tool ecosystems.
- **#90083**: **2026.6.1 release quality**—immediate breaking change for OpenAI users, blocking production deployments.

---

## 5. Bugs & Stability

### Critical/P1 Bugs (Production-Impacting)

| # | Title | Severity | Fix PR? | Link |
|:---|:---|:---|:---|:---|
| **#90083** | OpenAI gpt-5.4/5.5 transport fails: `invalid_provider_content_type` | **P1** | No known fix | [Issue #90083](https://github.com/openclaw/openclaw/issues/90083) |
| **#90093** | Native replay sends encrypted reasoning, breaks next turn with `invalid_encrypted_content` | **P1** | No known fix | [Issue #90093](https://github.com/openclaw/openclaw/issues/90093) |
| **#90072** | Cron state silently wiped during SQLite migration to 2026.6.1 | **P1** | **CLOSED** (resolved?) | [Issue #90072](https://github.com/openclaw/openclaw/issues/90072) |
| **#90325** | Matrix channel dispatch broken: `TypeError: Cannot read properties of undefined` | **Regression** | No known fix | [Issue #90325](https://github.com/openclaw/openclaw/issues/90325) |
| **#90466** | Memory-core dreaming writes fallback despite valid prose; includes deleted session paths | **P1** | No known fix | [Issue #90466](https://github.com/openclaw/openclaw/issues/90466) |
| **#85030** | MCP tools not injected into subagent (`sessions_spawn`) sessions | **P1** | **PR #78441** addresses | [Issue #85030](https://github.com/openclaw/openclaw/issues/85030) |
| **#77012** | WebChat transcript overwritten every turn (5.2 regression) | **P1** | No known fix | [Issue #77012](https://github.com/openclaw/openclaw/issues/77012) |
| **#62505** | Coding Agent never completes anything | **P1, stale** | No known fix | [Issue #62505](https://github.com/openclaw/openclaw/issues/62505) |

### P2 Bugs & Regressions

| # | Title | Link |
|:---|:---|:---|
| **#88929** | Feishu streaming card: abnormal typewriter effect, content truncated to last character | [Issue #88929](https://github.com/openclaw/openclaw/issues/88929) |
| **#90711** | launchd plist `StandardErrorPath` hardcoded to `/dev/null` hides gateway stderr (5.28 regression) | [Issue #90711](https://github.com/openclaw/openclaw/issues/90711) |
| **#87756** | Lobster workflow hangs on nested `/tools/invoke` when prompt-launched | [Issue #87756](https://github.com/openclaw/openclaw/issues/87756) |

### Stability Assessment

**2026.6.1 release quality is concerning**: 4 P1 bugs filed within 48 hours of release, including data loss (cron wipe), auth breakage (OpenAI transport), and encryption handling failures. The project appears to have **insufficient release validation** for migration paths and provider compatibility.

---

## 6. Feature Requests & Roadmap Signals

### High-Probability Near-Term Features

| # | Feature | Demand Signal | Likelihood | Link |
|:---|:---|:---|:---|:---|
| **#22438** | Tiered bootstrap file loading | 17 comments, "diamond lobster" rating, token cost focus | **High** | [Issue #22438](https://github.com/openclaw/openclaw/issues/22438) |
| **#63829** | Per-agent memory-wiki vault configuration | 9 👍, multi-agent setups growing | **High** | [Issue #63829](https://github.com/openclaw/openclaw/issues/63829) |
| **#78308** | MCP tool call approval envelope | Security-focused, extends existing pattern | **Medium-High** | [Issue #78308](https://github.com/openclaw/openclaw/issues/78308) |
| **#14785** | Reduce tool schema token overhead (~3,500 tok/session) | Performance/cost pressure, clear metric | **Medium-High** | [Issue #14785](https://github.com/openclaw/openclaw/issues/14785) |
| **#85651** | Context-pressure-aware continuation | Large PR in progress, architectural direction | **Medium** (complex) | [PR #85651](https://github.com/openclaw/openclaw/pull/85651) |

### Emerging Themes

- **Context economy**: Multiple issues converge on token efficiency (bootstrap loading, tool schema overhead, compaction behavior)
- **Multi-agent isolation**: Per-agent vaults, subagent tool injection, session boundaries
- **Security hardening**: MCP approvals, exec sandboxing (#58730), auth provider resilience

---

## 7. User Feedback Summary

### Real Pain Points

| Category | Evidence | Severity |
|:---|:---|:---|
| **Upgrade fragility** | #90072 (cron wipe), #90083 (OpenAI break), #90325 (Matrix break), #63101 (Feishu config break) | **Critical** |
| **Session state reliability** | #77012 (transcript loss), #64810 (heartbeat interrupts replies), #62505 (agent hangs) | **Critical** |
| **Auth/OAuth operational burden** | #86215 (Codex OAuth wedges for hours), #84252 (partial repair leaves runtime broken) | **High** |
| **Subagent/MCP tool ecosystem gaps** | #85030 (MCP tools missing in subagents), #70493 (Playwright missing in isolated sessions) | **High** |
| **Channel-specific polish** | #88929 (Feishu), #78016 (Matrix voice), #69572 (Feishu typing indicator) | **Medium** |

### Use Case Satisfaction

| Satisfied | Dissatisfied |
|:---|:---|
| Core chat functionality (when stable) | Long-running agent reliability |
| Multi-channel breadth (10+ channels) | Channel-specific edge cases |
| Extensibility (MCP, plugins) | Subagent tool propagation |
| Memory/wiki features | Upgrade migration safety |

---

## 8. Backlog Watch

### Stale Critical Issues Needing Maintainer Action

| # | Title | Age | Blockers | Link |
|:---|:---|:---|:---|:---|
| **#62505** | Coding Agent never completes anything | **~2 months** | `no-new-fix-pr`, `needs-maintainer-review`, `needs-product-decision` | [Issue #62505](https://github.com/openclaw/openclaw/issues/62505) |
| **#63101** | Feishu channel config validation fails (v4.5→v4.8) | **~2 months** | `stale`, `no-new-fix-pr`, crash-loop impact | [Issue #63101](https://github.com/openclaw/openclaw/issues/63101) |
| **#62985** | Telegram multi-account config error | **~2 months** | `stale`, `no-new-fix-pr`, `needs-product-decision` | [Issue #62985](https://github.com/openclaw/openclaw/issues/62985) |
| **#61005** | Android onboarding stuck when operator offline | **~2 months** | `stale`, `no-new-fix-pr`, 5 👍 | [Issue #61005](https://github.com/openclaw/openclaw/issues/61005) |
| **#58730** | Exec sandbox isolation (Claude Code lessons) | **~2 months** | `stale`, `needs-security-review`, `needs-live-repro` | [Issue #58730](https://github.com/openclaw/openclaw/issues/58730) |
| **#14785** | Reduce tool schema token overhead | **~4 months** | `no-new-fix-pr`, `needs-product-decision` | [Issue #14785](https://github.com/openclaw/openclaw/issues/14785) |

### PRs Ready for Maintainer Review (Unmerged)

| # | Title | Risk Flags | Link |
|:---|:---|:---|:---|
| **#89040** | Fix event-loop stall in embedded_run bootstrap | `session-state`, `message-delivery` | [PR #89040](https://github.com/openclaw/openclaw/pull/89040) |
| **#78441** | Forward toolsAllow from sessions_spawn | `compatibility`, `session-state` | [PR #78441](https://github.com/openclaw/openclaw/pull/78441) |
| **#90723** | Gmail Pub/Sub pull delivery mode | `compatibility`, `message-delivery` | [PR #90723](https://github.com/openclaw/openclaw/pull/90723) |
| **#88992** | Recover stranded replies in message_tool_only mode | `message-delivery`, `security-boundary` | [PR #88992](https://github.com/openclaw/openclaw/pull/88992) |
| **#90051** | Strip reasoning tags from chat replies | `message-delivery` | [PR #90051](https://github.com/openclaw/openclaw/pull/90051) |

---

## Project Health Assessment

| Metric | Status |
|:---|:---|
| **Development velocity** | 🟢 Excellent (967 items updated/24h) |
| **Release stability** | 🔴 Poor (2026.6.1 has multiple P1 regressions) |
| **Maintainer bandwidth** | 🟡 Strained (high open/close ratio, stale tags accumulating) |
| **Community engagement** | 🟢 Strong (active commenting, detailed reports) |
| **Backlog management** | 🔴 Concerning (2+ month stale P1s, "diamond lobster" issues unaddressed) |

**Recommendation**: OpenClaw should consider a **stability-focused release sprint** before adding features, with explicit migration testing and provider compatibility gates. The maintainer team may need to expand or implement more aggressive stale-issue triage to prevent critical bugs from languishing.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source AI Agent Ecosystem
**Date:** 2026-06-06 | **Analyst:** Senior AI Agent Ecosystem Analyst

---

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is experiencing **intense fragmentation alongside rapid capability convergence**. Ten active projects show divergent maturity levels—from NanoClaw's quiet stability to OpenClaw's 967-item daily churn—yet nearly all are grappling with identical production pressures: context window economics, multi-agent orchestration, MCP/tool ecosystem standardization, and enterprise security boundaries. The landscape reveals a **bifurcation between "chatbot-plus" platforms** (NanoBot, CoPaw, LobsterAI) **and runtime/agentic infrastructure** (OpenClaw, IronClaw, ZeroClaw), with the latter group investing heavily in WASM sandboxing, hook frameworks, and provider abstraction layers. Release stability has emerged as a critical differentiator, with OpenClaw's 2026.6.1 regressions demonstrating how velocity without validation erodes production trust.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | New Release | Health Score | Key Status |
|:---|:---:|:---:|:---:|:---|:---|
| **OpenClaw** | 467 | 500 | ❌ None | 🔴 Strained | 340 open issues, 376 open PRs; 2026.6.1 P1 regressions; backlog crisis |
| **NanoBot** | 10 | 28 | ❌ None | 🟡 Responsive | 2 critical bugs with same-day fix PRs; March CI failure red flag |
| **Hermes Agent** | 50 | 50 | ❌ None | 🟡 Maintenance-heavy | 46:4 open:closed PR ratio; concentrated zmanian load; security theater concerns |
| **PicoClaw** | 6 | 24 | ✅ Nightly (v0.2.9-nightly) | 🟢 Healthy | 22:2 merged:open ratio; active security hardening; platform-specific regressions |
| **NanoClaw** | 0 | 3 | ❌ None | 🟢 Stable | Zero issues; incremental HF/OneCLI polish; single resilience PR pending |
| **NullClaw** | 0 | 1 | ❌ None | 🟢 Quiet | Vendor-submitted provider PR only; engagement uncertainty |
| **IronClaw** | 13 | 50 | ❌ None (prep PR #3708) | 🟡 Pre-release strain | Hook framework shipped dark; Reborn migration active; WeCom blockers |
| **LobsterAI** | 3 (all stale) | 13 | ✅ 2026.6.5 | 🟡 Release-heavy, community-light | Team-driven velocity; 3 unaddressed April UX bugs; monetization focus |
| **Moltis** | 4 | 5 | ❌ None | 🟢 Stable-triage | Sandbox reliability focus; Telegram streaming fixed; growing open PR backlog |
| **CoPaw** | 24 | 25 | ❌ None | 🟡 Stabilizing | 15:10 merged:open ratio; 2 critical unpatched bugs; Yuanbao regression active |
| **ZeroClaw** | 50 | 50 | ❌ None | 🟡 Consolidation strain | 44:6 open:closed issue ratio; WASM plugin pivot; 6+ blocked RFCs |
| **TinyClaw** | — | — | — | ⚪ Inactive | No activity |
| **ZeptoClaw** | — | — | — | ⚪ Inactive | No activity |

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Peer Comparison |
|:---|:---|:---|
| **Scale** | 967 daily items; 500 PRs | 10-50× larger than NanoBot, CoPaw, IronClaw; only ZeroClaw matches in raw volume |
| **Channel breadth** | 10+ channels (Telegram, Slack, Discord, Matrix, Feishu, etc.) | Matches or exceeds all; PicoClaw's OneBot focus is narrower |
| **MCP ecosystem** | Native MCP tool injection, subagent spawn | IronClaw's WASM hooks are more secure; ZeroClaw's plugin architecture more extensible |
| **Community engagement** | Intense commenting, detailed reports | Hermes Agent comparable; LobsterAI's community is muted despite releases |

### Technical Approach Differences
- **vs. IronClaw**: OpenClaw prioritizes *breadth* (channels, providers, tools) over *depth* (WASM sandboxing, adversarial testing, fail-closed security). IronClaw's hook framework represents a generational leap in extension security that OpenClaw lacks.
- **vs. ZeroClaw**: Both high-velocity, but ZeroClaw is aggressively externalizing integrations via WASM/Extism plugins (#7060, #7280-7277) while OpenClaw maintains native implementations, accumulating technical debt.
- **vs. NanoBot/CoPaw**: OpenClaw lacks their desktop application surfaces and packaging polish; more server/gateway-oriented.

### Community Size Comparison
OpenClaw's contributor volume is **ecosystem-dominant** but **efficiency-poor**. Its 376 open PRs vs. PicoClaw's 2 or Moltis's 4 suggests either exceptional inclusiveness or **maintainer bandwidth collapse**. The "diamond lobster" stale P1s (#62505, 2+ months) indicate the latter—NanoBot's same-day critical fixes and PicoClaw's rapid turnaround demonstrate healthier triage at smaller scale.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Context window economics** | OpenClaw (#22438, #14785), NanoBot (#1089), IronClaw (#4311), ZeroClaw (#6165) | Token-efficient bootstraps, tool schema compression, compaction-aware continuation, content caps on tool results |
| **MCP/tool lifecycle & injection** | OpenClaw (#78441, #85030, #78308), NanoBot (#4211, #4216), CoPaw (#1347, #4934), IronClaw (hook framework), ZeroClaw (#6914, #6915) | stdio connection teardown, subagent tool propagation, approval envelopes, allowlist enforcement, auto-recovery |
| **Multi-agent isolation & orchestration** | OpenClaw (#85651, #63829), NanoBot (#3992), Hermes Agent (#40196, #40189), IronClaw (Reborn boundaries), ZeroClaw (#7218 A2A) | Session boundaries, cross-agent messaging, delegated roles, vault per-agent, cron isolation |
| **Enterprise security/SSO** | OpenClaw (auth resilience), IronClaw (#7141 OIDC, #7142 pluggable security), ZeroClaw (#7141, #7142, #6293 air-gapped), Hermes Agent (#21563, #35357 approval gaps) | OIDC/OAuth, auditability, sandbox escape hatches, human-in-the-loop verification, enclave support |
| **Provider compatibility & abstraction** | OpenClaw (#90083 OpenAI break), NanoBot (#4204, #4209), Hermes Agent (#40191 update path), NullClaw (#947 Evolink), IronClaw (gateway error taxonomy) | OpenAI-compatible adapters, custom `extra_query`, api-version params, graceful degradation under load |
| **State reliability & corruption resistance** | OpenClaw (#90072 cron wipe, #77012 transcript loss), NanoBot (#4210 token invalidation, #4203 message drop), CoPaw (#1240 SQLite migration, #4970 JSON corruption), PicoClaw (#2907 crash consistency) | SQLite over JSON, replay gaps, migration safety, compaction correctness, session integrity |
| **Channel-specific polish** | OpenClaw (#88929 Feishu, #90325 Matrix), NanoBot (#1946 Matrix tests, #4197 Weixin/Telegram DM), CoPaw (#4976-#4979 Yuanbao), IronClaw (#4502 WeCom), Moltis (#1097 Telegram streaming) | IME handling, streaming UX, approval flows in group chats, message routing, platform-specific edge cases |

---

## 5. Differentiation Analysis

| Project | Primary User Archetype | Technical Signature | Feature Focus | Risk Profile |
|:---|:---|:---|:---|:---|
| **OpenClaw** | Self-hosting power users, multi-channel bot operators | Python/Node gateway; plugin architecture; maximal channel coverage | Breadth, extensibility, chat ubiquity | Stability debt from velocity; upgrade fragility |
| **NanoBot** | Embedded AI developers, SDK consumers, enterprise integrators | Rust/TypeScript; SDK-first; desktop shell emerging | Integration DX, provider flexibility, cross-agent messaging | Message lifecycle fragility; test debt |
| **Hermes Agent** | Desktop-centric individual users, CLI power users | Rust TUI + Electron desktop; local-first | Session observability, update reliability, skill curation | Security theater (approval no-ops); WSL brokenness |
| **PicoClaw** | Chinese-language users, MiniMax/OneBot deployers, FreeBSD self-hosters | Go backend; React frontend; security-hardened | Cost control, platform compliance, rapid bugfix | Platform/provider niche fragility |
| **NanoClaw** | Hugging Face ecosystem users, gateway-proxied deployments | Minimal surface; OneCLI integration; resilience-focused | Authentication simplicity, error handling, HA automation | Low engagement visibility; feature sparsity |
| **NullClaw** | Aggregated provider users (Evolink) | Unknown; provider-adapter architecture | Provider compatibility | Stagnation risk; no community signal |
| **IronClaw** | Enterprise platform builders, security-conscious operators | Rust; WASM hooks; Reborn architectural migration; libSQL/Postgres backends | Runtime security, extension sandboxing, OpenAI API compatibility | Reborn migration complexity; WeCom blockers; bus factor |
| **LobsterAI** | NetEase Youdao consumers, voice/ASR users, monetized skill users | Proprietary (NetEase); closed-core with open components | Voice input, rich file previews, paywall integration, security hardening | Community neglect; local model execution gaps |
| **Moltis** | Self-hosting Docker/Podman operators, Telegram bot users | Unknown; container-native sandboxing | Sandbox reliability, provider preference management, mobile UX | Modest scale; contributor concentration |
| **CoPaw** | Chinese multi-channel bot operators, browser automation users, packaged app seekers | Python; browser_use integration; SQLite state; Tauri packaging | Browser automation, channel integration (Yuanbao), desktop packaging | Critical stability bugs; v1.1.10 regression |
| **ZeroClaw** | Enterprise security teams, plugin developers, Letta migrants | Rust; WASM/Extism plugins; WIT interfaces; OIDC | Plugin ecosystem, security governance, output routing, air-gapped mode | RFC backlog; bulk revert trauma; maintainer bandwidth |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (High Velocity, Pre-Stability)
| Project | Characteristics | Risk |
|:---|:---|:---|
| **OpenClaw** | 967 items/day; massive backlog; release regressions | Burnout, production flight |
| **ZeroClaw** | 100 items/day; WASM pivot; RFC accumulation | Architecture thrash, blocked decisions |
| **CoPaw** | 49 items/day; critical unpatched bugs; active patching | v1.1.10 trust erosion |

### Tier 2: Active Stabilization (Moderate Velocity, Quality Focus)
| Project | Characteristics | Trajectory |
|:---|:---|:---|
| **NanoBot** | 38 items/day; same-day critical fixes; CI debt | Improving if test infrastructure addressed |
| **IronClaw** | 63 items/day; pre-release consolidation; security maturity | v0.29.1→v0.30.0 Reborn milestone critical |
| **Hermes Agent** | 100 items/day; low merge ratio; maintenance mode | v0.15.1 stabilization; needs security credibility |
| **PicoClaw** | 30 items/day; excellent merge ratio; nightly cadence | v0.2.10 approaching; healthy |

### Tier 3: Controlled Maintenance (Low Velocity, Polish/Incremental)
| Project | Characteristics | Trajectory |
|:---|:---|:---|
| **Moltis** | 9 items/day; sandbox focus; responsive triage | Steady; needs backlog clearance |
| **NanoClaw** | 3 items/day; zero issues; resilience PR pending | Stable; risk is obscurity |
| **LobsterAI** | 16 items/day; team-driven; community-muted | Release velocity masks engagement gap |

### Tier 4: Dormant
| Project | Status |
|:---|:---|
| **TinyClaw, ZeptoClaw** | No activity; likely abandoned or paused |
| **NullClaw** | Minimal vendor-driven activity only |

---

## 7. Trend Signals

| Trend | Evidence | Value for AI Agent Developers |
|:---|:---|:---|
| **WASM/Extism as plugin standard** | ZeroClaw (#7060 WIT, #7280-7277 plugins); IronClaw (hook framework shipped dark) | **Architectural**: Externalize integrations without core bloat; security boundary via sandbox; multi-language plugin ecosystem |
| **Context economy as cost imperative** | OpenClaw (#22438, #14785, #85651); NanoBot (#1089); universal ~3,500 tok/session waste complaints | **Economic**: Token-aware bootstraps, tiered loading, and compaction-first design are now table stakes for scalable agents |
| **Security UX moving beyond binary allow/deny** | ZeroClaw (#7155 per-execution confirmation); IronClaw (runtime profile approval gates #4390); OpenClaw (#78308 MCP consent envelope) | **Product**: "Claude Code-style ask tier" becoming expected; human-in-the-loop needs granularity, not gates |
| **Enterprise identity federation (OIDC/SSO)** | IronClaw (#7141); ZeroClaw (#7141); OpenClaw (auth provider resilience) | **GTM**: Production deployments require standard identity; API-key-only is SMB ceiling |
| **Provider aggregation over direct integration** | NullClaw (#947 Evolink); ZeroClaw (#5601 OAuth for 4 providers); OpenClaw (#90083 breakage from provider change) | **Operational**: Abstract behind OpenAI-compatible gateways; reduce fragility from provider API drift |
| **State durability as reliability foundation** | CoPaw (#1240 SQLite migration); PicoClaw (#2907 crash consistency); OpenClaw (#90072 migration data loss) | **Engineering**: JSON state is technical debt; SQLite/Postgres with migration testing is minimum viable |
| **Cross-agent interoperability (A2A)** | ZeroClaw (#7218); NanoBot (#3992 cross-agent messaging); Hermes Agent (#40196 lineage viewer) | **Ecosystem**: Single-agent tools becoming insufficient; multi-agent choreography requires discovery, delegation, and observability standards |
| **Desktop packaging as adoption enabler** | CoPaw (#4754 Tauri vs Windows exe); NanoBot (#4195 desktop shell); Hermes Agent (Electron desktop) | **Distribution**: CLI-only limits audience; turnkey desktop with auto-update is consumer/enterprise prerequisite |

---

**Conclusion:** The ecosystem is simultaneously maturing and fragmenting. Projects that solve the **velocity-stability paradox** (PicoClaw's model) while investing in **WASM-native extensibility** (ZeroClaw, IronClaw) and **enterprise security boundaries** are best positioned for the next phase. OpenClaw's scale advantage is eroding under backlog pressure and release quality concerns—a stability sprint would be more strategically valuable than feature acceleration.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-06

## 1. Today's Overview

NanoBot shows **high development velocity** with 28 PRs and 10 issues updated in the last 24 hours, indicating an active, fast-moving project. The 17:11 open-to-merged/closed PR ratio suggests healthy throughput, though a growing backlog of open contributions may strain review capacity. Notably, **zero new releases** were cut despite substantial merge activity, suggesting maintainers are accumulating changes for a larger release or prioritizing stability over shipping. The day's work spans critical infrastructure (SDK lifecycle, session management), platform expansion (DingTalk, Exa search, desktop shell), and provider ecosystem flexibility (OpenAI-compatible customizations). Cross-cutting concerns around **memory correctness**, **MCP/tool lifecycle**, and **multi-platform deployment** dominate the technical agenda.

---

## 2. Releases

**None** — No releases published today. The last significant release activity remains prior to this period.

---

## 3. Project Progress

### Merged/Closed Today

| PR/Issue | Description | Significance |
|----------|-------------|--------------|
| [#4210](https://github.com/HKUDS/nanobot/pull/4210) | Fix desktop restart token and replay gaps | **Critical reliability fix** — resolves WebUI token invalidation on engine restart and WebSocket event loss during client reconnections; enables desktop notifications for streamed replies |
| [#3968](https://github.com/HKUDS/nanobot/pull/3968) | Add `/skill` slash command to list enabled skills | Closes [#3959](https://github.com/HKUDS/nanobot/issues/3959); addresses long-standing discoverability gap |
| [#4197](https://github.com/HKUDS/nanobot/pull/4197) | Fix DM pairing for Weixin and Telegram | Corrects channel routing logic for denied private senders, preserving security guards while fixing pairing flow |
| [#3959](https://github.com/HKUDS/nanobot/issues/3959) | [bug] `/skill` list disabled skills | **Closed** — root cause fixed by #3968 |
| [#4196](https://github.com/HKUDS/nanobot/issues/4196) | 建议支持火山引擎的图片生成功能 | **Closed as duplicate** — consolidated into broader image generation provider work |
| [#4132](https://github.com/HKUDS/nanobot/issues/4132) | Support custom image generation provider | **Closed** — likely addressed by parallel provider flexibility PRs |
| [#4200](https://github.com/HKUDS/nanobot/issues/4200) | User message loss when refresh browser | **Closed** — fixed by #4210's token/replay improvements |

### Features Advanced (Open PRs)

- **Cross-agent messaging**: [#3992](https://github.com/HKUDS/nanobot/pull/3992) — multi-instance agent collaboration via shared message bus, ready for merge
- **Desktop shell preparation**: [#4195](https://github.com/HKUDS/nanobot/pull/4195) — first open desktop surface with shared WebUI codebase
- **Exa web search**: [#4213](https://github.com/HKUDS/nanobot/pull/4213) — new search provider integration
- **DingTalk group allowlist**: [#4206](https://github.com/HKUDS/nanobot/pull/4206) — enterprise access control
- **Fork-from-here in WebUI**: [#4208](https://github.com/HKUDS/nanobot/pull/4208) — conversation branching with isolated composer prefill

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Comments | Analysis |
|------|----------|----------|
| [#3959](https://github.com/HKUDS/nanobot/issues/3959) → [#3968](https://github.com/HKUDS/nanobot/pull/3968) | 4 comments | **Skill discoverability** — users couldn't determine available capabilities; fix reveals demand for better agent introspection tools |
| [#4204](https://github.com/HKUDS/nanobot/issues/4204) | 1 comment | **Enterprise gateway compatibility** — Azure-style `api-version` query params; signals production deployments hitting real API surface mismatches |
| [#1946](https://github.com/HKUDS/nanobot/issues/1946) | 1 comment | **Test infrastructure debt** — matrix channel tests failing on `main` since March; indicates CI/test reliability concerns |

### Underlying Needs Analysis

- **Operational transparency**: Users need visibility into what skills are active, what memory the agent retains, and how subagents behave
- **Enterprise integration**: Multiple issues around Azure gateways, Volcengine, DingTalk reflect push into regulated/enterprise environments
- **Developer experience**: SDK embedding (#4211), test stability (#1946), and onboarding docs (#4177) show friction for contributors and embedders

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix Status |
|----------|------|-------------|------------|
| **Critical** | [#4211](https://github.com/HKUDS/nanobot/issues/4211) | SDK leaves stdio MCP open → `RuntimeError` at shutdown | **PR ready**: [#4216](https://github.com/HKUDS/nanobot/pull/4216) |
| **Critical** | [#4203](https://github.com/HKUDS/nanobot/issues/4203) | `find_legal_message_start` drops **all messages** on orphan tool results | **PR ready**: [#4215](https://github.com/HKUDS/nanobot/pull/4215) |
| **High** | [#4210](https://github.com/HKUDS/nanobot/pull/4210) *(merged)* | Desktop restart token invalidation + WebSocket replay gaps | **Fixed** |
| **High** | [#4200](https://github.com/HKUDS/nanobot/issues/4200) | User message loss on browser refresh | **Fixed** via #4210 |
| **Medium** | [#1946](https://github.com/HKUDS/nanobot/issues/1946) | Matrix test failure on `main` | **Open since March** — no fix PR identified |
| **Medium** | [#4209](https://github.com/HKUDS/nanobot/pull/4209) | OpenAI image params rejected by compatible APIs | **PR ready** |

### Stability Assessment

Two **critical data-loss/lifecycle bugs** surfaced today with immediate fix PRs, suggesting responsive maintainers but also indicating architectural fragility in:
- Message stream sanitization (tool result validation)
- SDK resource lifecycle (MCP connection teardown)

The March-persistent test failure (#1946) is a **red flag** for CI hygiene.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Version | Rationale |
|---------|--------|---------------------------|-----------|
| Custom image generation providers | [#4132](https://github.com/HKUDS/nanobot/issues/4132), [#4196](https://github.com/HKUDS/nanobot/issues/4196), [#4209](https://github.com/HKUDS/nanobot/pull/4209) | **High** | Multiple converging requests; PR #4209 addresses param flexibility |
| `extra_query` for OpenAI-compatible providers | [#4204](https://github.com/HKUDS/nanobot/issues/4204) | **High** | Single-issue with clear patch; enterprise blocker |
| Cross-agent messaging bus | [#3992](https://github.com/HKUDS/nanobot/pull/3992) | **Medium-High** | PR marked ready; complex feature may need soak time |
| Desktop application shell | [#4195](https://github.com/HKUDS/nanobot/pull/4195) | **Medium** | Large surface; "prepares" language suggests staged rollout |
| Subagent `fail_on_tool_error` config | [#4198](https://github.com/HKUDS/nanobot/issues/4198) | **Medium** | Clear user pain; needs design review for config schema |
| Memory inference correction | [#4212](https://github.com/HKUDS/nanobot/issues/4212) | **Medium** | Deep architectural concern; may require RFC |
| Gateway start/stop/restart CLI | [#3538](https://github.com/HKUDS/nanobot/pull/3538) | **Medium** | Stale since April; documentation-complete but unmerged |
| Exa search provider | [#4213](https://github.com/HKUDS/nanobot/pull/4213) | **High** | Clean addition; low risk |
| IMAP post-actions | [#4170](https://github.com/HKUDS/nanobot/pull/4170) | **Medium** | Niche but complete; maintainer bandwidth dependent |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Message/data loss** | [#4200](https://github.com/HKUDS/nanobot/issues/4200), [#4203](https://github.com/HKUDS/nanobot/issues/4203) | Critical — erodes trust in agent reliability |
| **Skill/tool opacity** | [#3959](https://github.com/HKUDS/nanobot/issues/3959) | High — users can't discover or verify capabilities |
| **Provider incompatibility** | [#4204](https://github.com/HKUDS/nanobot/issues/4204), [#4196](https://github.com/HKUDS/nanobot/issues/4196), [#4209](https://github.com/HKUDS/nanobot/pull/4209) | High — blocks enterprise adoption |
| **SDK embedding rough edges** | [#4211](https://github.com/HKUDS/nanobot/issues/4211) | High — prevents clean integration into larger apps |
| **Subagent rigidity** | [#4198](https://github.com/HKUDS/nanobot/issues/4198), [#4212](https://github.com/HKUDS/nanobot/issues/4212) | Medium — limits autonomous recovery and memory accuracy |
| **Onboarding friction** | [#4177](https://github.com/HKUDS/nanobot/pull/4177) | Medium — barriers to contributor growth |

### Use Cases Emerging

- **Enterprise deployment**: Azure gateways, DingTalk integration, desktop packaging
- **Autonomous agent teams**: Cross-instance messaging, subagent orchestration
- **Embedded AI**: SDK usage with proper lifecycle management
- **Multi-modal content**: Image generation via diverse providers

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#1946](https://github.com/HKUDS/nanobot/issues/1946) Matrix test error | **~3 months** | CI credibility erosion; may mask real regressions | Maintainer triage or assign `good first issue` |
| [#1408](https://github.com/HKUDS/nanobot/pull/1408) CI workflow with coverage | **~3 months** | Duplicate/overlaps with #1284; contributor confusion | Consolidate or close one; merge the other |
| [#1284](https://github.com/HKUDS/nanobot/pull/1284) Add CI workflow | **~3 months** | Same as above | See #1408 |
| [#3538](https://github.com/HKUDS/nanobot/pull/3538) Gateway CLI commands | **~5 weeks** | Complete but unmerged; documentation investment at risk | Final review or explicit deferral |
| [#3992](https://github.com/HKUDS/nanobot/pull/3992) Cross-agent messaging | **~2 weeks** | Large feature; may bit-rot if delayed | Merge decision or request changes |
| [#4170](https://github.com/HKUDS/nanobot/pull/4170) IMAP post-actions | **~3 days** | Niche but polished | Routine review |

### Maintainer Attention Recommended

**Immediate**: Consolidate competing CI PRs (#1408/#1284) — both claim to add foundational CI, creating confusion and diluting review effort.

**This week**: Decide on #3992 (cross-agent messaging) — it's a headline feature with significant architectural implications; clear merge/close/request-changes signal needed.

**This sprint**: Address #1946 or explicitly deprioritize — test failures on `main` for 3 months damages project health signaling.

---

*Digest generated from HKUDS/nanobot GitHub activity for 2026-06-05/06.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-06

## 1. Today's Overview

Hermes Agent shows **extremely high community activity** with 50 issues and 50 PRs updated in the last 24 hours, though merge velocity remains low (only 4 PRs merged/closed vs. 46 open). The project is in a **maintenance-heavy phase** with zero new releases, suggesting the team is stabilizing v0.15.1 rather than shipping new features. Critical pain points cluster around **desktop app reliability** (WSL integration, input handling, GPU crashes), **security gaps** in the approval system, and **configuration/env resolution** inconsistencies across CLI/desktop/gateway boundaries. The high open-to-closed ratio (45:5 issues, 46:4 PRs) indicates potential maintainer bandwidth constraints or rigorous review standards.

---

## 2. Releases

**No new releases.** Latest version remains **v0.15.1** (commit `66a66b9c`).

---

## 3. Project Progress

### Merged/Closed PRs Today (4 items)

| PR | Description | Impact |
|:---|:---|:---|
| [#40194](https://github.com/NousResearch/hermes-agent/pull/40194) | fix(update): resolve real source root for editable/git installs | Fixes `hermes update` falsely claiming "not a git repository" on git installs |
| [#40191](https://github.com/NousResearch/hermes-agent/pull/40191) | fix(cli): repair hermes update path (venv detection, uv arity, v25→v26 migration) | **P1 fix bundle** — resolves three interdependent update flow bugs (#39714, #39706, #39705) |
| [#20967](https://github.com/NousResearch/hermes-agent/pull/20967) | fix(session-search): add interrupt checks at all yield points | Eliminates 15-30s CLI freezes when interrupting session search |
| [#40188](https://github.com/NousResearch/hermes-agent/pull/40188) | fix(docs): clarify curator bundled-skill pruning behavior | Documentation correction for `prune_builtins: true` default |

**Key advancement:** The update/upgrade path received concentrated fixes, addressing a major friction point where `hermes update` was broken for git-based and venv-based installations.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Comments | Core Concern |
|:---|:---|:---|
| [#13944](https://github.com/NousResearch/hermes-agent/issues/13944) — Skill index truncates descriptions to 60 chars | 6 | **Model routing quality degraded** by over-aggressive prompt compression; skill selection becomes stochastic |
| [#40146](https://github.com/NousResearch/hermes-agent/issues/40146) — Chinese IME send button doesn't switch from voice | 3 | **CJK input UX broken** on Windows desktop; signals incomplete IME testing |
| [#21563](https://github.com/NousResearch/hermes-agent/issues/21563) — MCP approval tools are no-ops | 3 | **Security theater**: approval UI exists but has no IPC backend, making MCP tool gating non-functional |
| [#38963](https://github.com/NousResearch/hermes-agent/issues/38963) — Desktop setup fails "no git" | 2 | **Onboarding friction**: installer dependency on git not documented/bundled |
| [#39694](https://github.com/NousResearch/hermes-agent/issues/39694) — Telegram clarify prompts show wrong controls | 2 | **Platform-specific UX inconsistency** in gateway prompt rendering |

### Underlying Needs Analysis

- **Prompt engineering quality**: The 60-char truncation (#13944) reveals tension between context-window limits and functional skill descriptions — users need smarter compression, not hard truncation.
- **Internationalization maturity**: CJK input issues (#40146, #40145, #40142) suggest desktop testing is English-centric.
- **Security credibility**: The MCP approval no-op (#21563) and Tirith bypass (#35357) erode trust in "human-in-the-loop" marketing.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|:---|:---|:---|:---|
| **P2** | [#40139](https://github.com/NousResearch/hermes-agent/issues/40139) | Secret redaction **mutates actual commands**, breaking `printf`/`sed`/env expansion | ❌ None |
| **P2** | [#40137](https://github.com/NousResearch/hermes-agent/issues/40137) | Terminal wrapper injects Windows paths into WSL | ❌ None |
| **P2** | [#40138](https://github.com/NousResearch/hermes-agent/issues/40138) | File tools prepend Windows drive letters to Linux paths | ❌ None |
| **P2** | [#40103](https://github.com/NousResearch/hermes-agent/issues/40103) | ANSI escape sequences survive in session titles as garbage | ❌ None |
| **P2** | [#37589](https://github.com/NousResearch/hermes-agent/issues/37589) | Desktop misses MCP tools; `uvx` servers fail under macOS GUI PATH | ❌ None |
| **P3** | [#40077](https://github.com/NousResearch/hermes-agent/issues/40077) | Desktop crashes on NVIDIA 580+ drivers (Ubuntu 24.04) | ❌ None |
| **P3** | [#40069](https://github.com/NousResearch/hermes-agent/issues/40069) | OAuth settings save fails with `net::ERR_INVALID_ARGUMENT` | ❌ None |
| **P3** | [#39860](https://github.com/NousResearch/hermes-agent/issues/39860) | Desktop update fails on macOS (`EAGAIN` in `npm ci` postinstall) | ❌ None |

**Critical pattern:** WSL/Desktop path handling is fundamentally broken — three separate issues (#40137, #40138, #40140) show Windows desktop assumes native Windows backend even when configured for WSL. The secret redaction bug (#40139) is particularly dangerous as it **silently corrupts user commands** rather than just masking display.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Version |
|:---|:---|:---|
| [#40196](https://github.com/NousResearch/hermes-agent/issues/40196) | CLI/TUI session lineage tree viewer | **High** — builds on existing `parent_session_id` data; pure UI addition |
| [#40195](https://github.com/NousResearch/hermes-agent/issues/40195) | ByteDance/BytePlus ModelArk provider | **Medium** — OpenAI-compatible, low integration cost; market expansion driver |
| [#40189](https://github.com/NousResearch/hermes-agent/issues/40189) | `delegated_role` field for delegated sessions | **Medium** — metadata extension, useful for multi-agent observability |
| [#35573](https://github.com/NousResearch/hermes-agent/issues/35573) | ToolCallStormBreaker — suppress repeated tool-call loops | **Medium** — token-burn mitigation increasingly important for cost-conscious users |
| [#18726](https://github.com/NousResearch/hermes-agent/issues/18726) | Provider model config as whitelist in `/model` picker | **Closed** — implemented in today's merge |

**Emerging theme:** Session observability and agent orchestration tooling are becoming user priorities, suggesting the project is maturing from "single agent" to "multi-agent workflow" use cases.

---

## 7. User Feedback Summary

### Pain Points (verbatim patterns)

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Desktop-CLI data silo** | "Desktop installer ignores existing CLI ~/.hermes/ with sessions, creates fresh DB" (#40178) | 🔴 High |
| **Input truncation** | Multiple Chinese reports of "桌面端输入截断" (desktop input truncation) (#40145, #40142) | 🔴 High |
| **WSL second-class citizenship** | "creates separate HERMES_HOME instead of connecting to existing WSL installation" (#40140) | 🟡 Medium |
| **Approval system distrust** | "Tirith approval gate does not cover non-shell tools — send_message, write_file bypass human-in-the-loop entirely" (#35357) | 🔴 High |
| **Update fragility** | Multiple `hermes update` failures across platforms (#40194, #40191, #40187, #39860) | 🟡 Medium |

### Satisfaction Signals
- Active community filing detailed bug reports with reproduction steps
- Users contributing fixes (e.g., #40192 for Firecrawl env resolution)

### Dissatisfaction Signals
- "Internal server error" generic failures (#40041) — poor error transparency
- Documentation inaccuracies (#40183) causing user confusion about skill curation

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Needs |
|:---|:---|:---|:---|
| [#21563](https://github.com/NousResearch/hermes-agent/issues/21563) — MCP approval no-ops | ~1 month | 🔴 **Security theater** — approval UI deceives users | Architecture decision on IPC bridge design |
| [#35357](https://github.com/NousResearch/hermes-agent/issues/35357) — Tirith bypass for non-shell tools | ~1 week | 🔴 **Security boundary failure** | Policy decision: expand approval scope or document limitation |
| [#32247](https://github.com/NousResearch/hermes-agent/pull/32247) — "cyber" skill bundle | ~2 weeks | 🟡 Unclear scope, empty description | Author clarification or maintainer close |
| [#34760](https://github.com/NousResearch/hermes-agent/pull/34760) — Cerebras reasoning_content strip | ~1 week | 🟡 Provider compatibility gap | Review for multi-provider pattern generalization |
| [#34215](https://github.com/NousResearch/hermes-agent/pull/34215) — Memory context boundaries | ~1 week | 🟡 Privacy/data leakage risk | Review for prompt injection safety |

**Maintainer attention most needed:** The MCP approval (#21563) and Tirith bypass (#35357) issues constitute a **security narrative crisis** — the project markets human-in-the-loop controls that are demonstrably incomplete. Without maintainer response, this risks external security audit or user attrition to alternatives with verifiable sandboxing.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-06

## 1. Today's Overview

PicoClaw shows **high development velocity** with 24 PRs updated in the last 24 hours (22 merged/closed, 2 open) and 6 issues processed (4 closed, 2 active). The project released a new nightly build (v0.2.9-nightly.20260605.5224b9a4), indicating active iteration toward the next stable version. A significant portion of activity (10+ PRs) involves dependency maintenance and security hardening, suggesting mature project hygiene. However, two fresh bugs reported today—one involving token consumption drain and another regarding skill-creator workspace documentation—signal ongoing stability concerns in the v0.2.9 release cycle.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| [v0.2.9-nightly.20260605.5224b9a4](https://github.com/sipeed/picoclaw/compare/v0.2.9...main) | Nightly | Automated build; **unstable, use with caution**. Full changelog covers all commits since v0.2.9 stable. |

**No stable release today.** The nightly suggests v0.2.10 may be approaching, but no migration notes or breaking changes documented yet.

---

## 3. Project Progress

### Merged/Closed PRs Today (22 total — highlights by impact)

| PR | Author | Impact |
|----|--------|--------|
| [#3009](https://github.com/sipeed/picoclaw/pull/3009) | chengzhichao-xydt | **Fix OneBot group reply routing** — corrected `send_private_msg` → `send_group_msg` bug (closes [#3002](https://github.com/sipeed/picoclaw/issues/3002)) |
| [#2985](https://github.com/sipeed/picoclaw/pull/2985) | chengzhichao-xydt | **Fix `/context` display** — now shows both summarize and compress thresholds (closes [#2968](https://github.com/sipeed/picoclaw/issues/2968)) |
| [#3013](https://github.com/sipeed/picoclaw/pull/3013) | shenjiecode | **Docs fix** — removes missing `init_skill.py` references in skill-creator (addresses [#652](https://github.com/sipeed/picoclaw/issues/652)) |
| [#3010](https://github.com/sipeed/picoclaw/pull/3010) | chengzhichao-xydt | **Stability** — adds safe type assertions in `toChannelHashes` to prevent panics |
| [#3011](https://github.com/sipeed/picoclaw/pull/3011) | chengzhichao-xydt | **Stability** — adds `ok` check for `LoadAndDelete` type assertion in agent event unsub |
| [#2900](https://github.com/sipeed/picoclaw/pull/2900) | yangwenjie1231 | **Security** — CSRF protection, path traversal validation, security headers |
| [#2913](https://github.com/sipeed/picoclaw/pull/2913) | SiYue-ZO | **Performance** — fixes JSONL session index hot-path cloning and TTL refresh |
| [#2907](https://github.com/sipeed/picoclaw/pull/2907) | SiYue-ZO | **Crash consistency** — fixes JSONL store metadata drift after crash |
| [#2905](https://github.com/sipeed/picoclaw/pull/2905) | SiYue-ZO | **Reliability** — fixes fallback chain handling for expired contexts |
| [#2908](https://github.com/sipeed/picoclaw/pull/2908) | SiYue-ZO | **UI** — restores provider logo fallbacks on models page |

**Dependency updates (10 PRs):** React 19.2.5→19.2.6, shadcn 4.7.0→4.8.0, TanStack Router, TanStack Query, Tabler Icons, go.mau.fi/util, Anthropic SDK Go 1.26.0→1.46.0.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Comments | 👍 | Topic | Underlying Need |
|------|----------|-----|-------|---------------|
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) | **15** | 2 | `exec` tool `guardCommand` over-blocking | **Security vs. usability tension** — users need `restrict_to_workspace=true` without false positives on URL-like strings (e.g., `wttr.in/Beijing?T` parsed as path traversal). Regex-based path extraction is too aggressive. |
| [#2968](https://github.com/sipeed/picoclaw/issues/2968) | 5 | 1 | `/context` always shows "Compress at: 76800" | **Observability/UX** — users can't distinguish summarization vs. compression thresholds, leading to confusion about when context management triggers. Fixed by [#2985](https://github.com/sipeed/picoclaw/pull/2985). |

### Open PR with Potential High Impact
- [#2964](https://github.com/sipeed/picoclaw/pull/2964) — **Image input compression** (afjcjsbx): Configurable multi-level compression for vision pipeline. Addresses cost/performance for vision-enabled deployments. **Needs review** (open since May 28).

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|----------|-------|--------|--------|---------|
| 🔴 **High** | [#3012](https://github.com/sipeed/picoclaw/issues/3012) — Continuous token consumption with Evolution enabled | **OPEN** | None yet | **Cost impact**: Every minute token drain when Evolution=Draft + Code Path Trigger. Affects v0.2.9, MiniMax provider, FreeBSD. Reported today by xpader (same reporter as #2968). |
| 🟡 **Medium** | [#3002](https://github.com/sipeed/picoclaw/issues/3002) — OneBot group reply uses `send_private_msg` | **CLOSED** | [#3009](https://github.com/sipeed/picoclaw/pull/3009) | Routing bug caused by missing `group:` prefix in ChatID. |
| 🟡 **Medium** | [#2968](https://github.com/sipeed/picoclaw/issues/2968) — `/context` display misleading | **CLOSED** | [#2985](https://github.com/sipeed/picoclaw/pull/2985) | UI/UX bug, not functional. |
| 🟡 **Medium** | [#1042](https://github.com/sipeed/picoclaw/issues/1042) — `guardCommand` false positives | **CLOSED** | Unknown | Security guard over-blocks legitimate commands. |
| 🟢 **Low** | [#652](https://github.com/sipeed/picoclaw/issues/652) — skill-creator broken, missing `init_skill.py` | **OPEN** | Partial: [#3013](https://github.com/sipeed/picoclaw/pull/3013) | Documentation fixed, but skill may still need audit for full functionality. |

**Regression pattern**: xpader (FreeBSD/MiniMax) has reported 2 bugs in 7 days (#2968, #3012) — suggests **platform/provider-specific instability** in v0.2.9.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Version |
|--------|--------|---------------------------|
| **Image compression pipeline** | [#2964](https://github.com/sipeed/picoclaw/pull/2964) | High — open PR, addresses clear cost/performance need |
| **MiMo provider CommonModels** | [#2915](https://github.com/sipeed/picoclaw/pull/2915) | Medium — merged? (closed, likely merged) — improves WebUI model recommendations |
| **Channel identification refactor** | [#2551](https://github.com/sipeed/picoclaw/pull/2551) | Medium — **still open since Apr 16**, large refactor to decouple channel names from types. Critical for multi-instance deployments. |
| **CPU/Memory/IO optimizations** | [#2916](https://github.com/sipeed/picoclaw/issues/2916) | Low — closed without merge, author provided extensive analysis but no maintainer pickup |

**Predicted v0.2.10 contents**: Image compression (#2964), continued stability fixes, possibly channel refactor (#2551) if maintainer bandwidth allows.

---

## 7. User Feedback Summary

### Pain Points
| Issue | User Voice | Frequency |
|-------|-----------|-----------|
| **Unexpected costs** | "Continuous consumption of tokens every minutes" — Evolution feature drains API budget silently | New (v0.2.9) |
| **Platform-specific bugs** | FreeBSD + MiniMax combination showing fragility (2 reports from same user) | Emerging pattern |
| **Security guard too aggressive** | Legitimate commands blocked by path validation heuristic | Recurring (#1042) |
| **Broken onboarding** | skill-creator workspace skill non-functional, missing scripts | Long-standing (#652, Feb 22) |
| **Poor observability** | `/context` output confusing, doesn't match mental model | Fixed |

### Satisfaction Indicators
- Rapid fix turnaround for clear bugs (OneBot routing fixed same day, `/context` fixed within week)
- Active nightly builds show responsive development
- Security hardening (#2900) shows maturity

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|-------------|
| [#2551](https://github.com/sipeed/picoclaw/pull/2551) — Channel identification refactor | ~7 weeks (Apr 16) | **High** — blocks multi-instance provider configs; touches core architecture | Maintainer review/merge decision |
| [#652](https://github.com/sipeed/picoclaw/issues/652) — skill-creator audit | ~15 weeks (Feb 22) | Medium — broken onboarding for skill developers | Full skill audit beyond docs fix (#3013) |
| [#2964](https://github.com/sipeed/picoclaw/pull/2964) — Image compression | ~9 days | Medium — ready PR, user value clear | Final review, potential iteration |

**Maintainer attention priority**: #2551 (architectural debt), #3012 (active cost-impacting bug).

---

*Digest generated from GitHub activity 2026-06-05 to 2026-06-06. All links: https://github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-06

**Repository:** [github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)  
**Date:** 2026-06-06

---

## 1. Today's Overview

NanoClaw shows **low but focused activity** with 3 PRs updated in the past 24 hours and zero issues, indicating a mature, stable codebase with incremental refinement rather than active bug triage. The project appears to be in a **maintenance and polish phase** — two PRs merged/closed with one remaining open for review. No releases were cut, suggesting the team is accumulating changes for a future version rather than shipping continuously. The absence of any open issues (0 active) is notable and could reflect either excellent code health or potentially low community engagement/reporting volume. Overall project health appears **stable with controlled, quality-focused development**.

---

## 2. Releases

**No new releases** in the past 24 hours.  
*Latest release status unknown from provided data.*

---

## 3. Project Progress

### Merged/Closed PRs (2)

| PR | Description | Impact |
|---|---|---|
| [#2691](https://github.com/nanocoai/nanoclaw/pull/2691) | **feat: show OneCLI's own setup URL when HF token is missing** | **UX improvement** — Eliminates hardcoded URL assumptions by dynamically extracting the correct dashboard URL from gateway error responses (`credential_not_found → secret_url`). Reduces user confusion in multi-gateway deployments. |
| [#2690](https://github.com/nanocoai/nanoclaw/pull/2690) | **fix: simplify HF token setup + correct secret-mode docs** | **Developer experience + documentation accuracy** — Removes unnecessary per-agent `secretMode` assignment (default is already `"all"`); fixes misleading documentation. Streamlines agent creation workflow. |

**Technical theme:** Both merged PRs address **Hugging Face (HF) token integration friction** and **OneCLI gateway configuration complexity** — indicating recent focus on smoothing the authentication and secrets-management onboarding path.

---

## 4. Community Hot Topics

| PR/Issue | Activity | Analysis |
|---|---|---|
| [#2692](https://github.com/nanocoai/nanoclaw/pull/2692) **[OPEN]** — Retry transient 5xx API errors | 0 reactions, 0 comments, but **substantive technical scope** | This is the most significant active item. Addresses a **resilience gap**: when Claude Agent SDK exhausts internal retries on transient errors (HTTP 529 "Overloaded"), the failure currently surfaces as a terminal `result` message rather than triggering NanoClaw's own retry logic. |

**Underlying need:** Production operators need **graceful degradation** against upstream API instability. The PR proposes retrying these "result-wrapped" errors and notifying only on true exhaustion. This suggests users are running NanoClaw in **high-availability or automated scenarios** where silent failure is unacceptable.

---

## 5. Bugs & Stability

| Item | Severity | Status | Notes |
|---|---|---|---|
| Transient 5xx errors treated as terminal failures | **Medium-High** | Fix proposed in [#2692](https://github.com/nanocoai/nanoclaw/pull/2692) | Affects reliability under Claude API load spikes; currently requires manual intervention or external retry wrappers |

**No new crashes, regressions, or security issues reported today.**

---

## 6. Feature Requests & Roadmap Signals

**No explicit feature requests** in today's data (0 issues). However, inferred signals from PR content:

| Signal | Likelihood in Next Version | Rationale |
|---|---|---|
| **Enhanced retry/resilience framework** | High | [#2692](https://github.com/nanocoai/nanoclaw/pull/2692) is open and addresses a clear production gap |
| **OneCLI/HF integration simplification** | Shipped | Two PRs merged suggest this initiative is near completion |
| **Observability/notification hooks** | Medium | [#2692](https://github.com/nanocoai/nanoclaw/pull/2692) mentions "notify on exhaustion" — pattern may expand to broader alerting |

---

## 7. User Feedback Summary

**Direct user feedback unavailable** — no issues or comments in dataset. Inferred pain points from PR analysis:

| Pain Point | Evidence | Severity |
|---|---|---|
| **Confusing HF token setup flow** | [#2690](https://github.com/nanocoai/nanoclaw/pull/2690) doc fixes + simplification | Addressed |
| **Wrong dashboard URL shown in auth errors** | [#2691](https://github.com/nanocoai/nanoclaw/pull/2691) | Addressed |
| **Silent failures during API overload** | [#2692](https://github.com/nanocoai/nanoclaw/pull/2692) | **Pending** — most impactful open item |

**Use case signal:** NanoClaw is deployed in **gateway-proxied, multi-tenant, or CI/automation environments** where correct URL routing and retry behavior are critical.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [#2692](https://github.com/nanocoai/nanoclaw/pull/2692) | 1 day | **Low risk of staleness, high technical value** | Maintainer review for merge; no blockers apparent |
| *(No long-unanswered issues identified)* | — | — | — |

**Assessment:** No backlog accumulation. The single open PR is fresh and appears ready for review. Project maintainers should prioritize [#2692](https://github.com/nanocoai/nanoclaw/pull/2692) to complete the resilience improvement cycle initiated by this week's HF/OneCLI fixes.

---

*Digest generated from GitHub activity 2026-06-05 to 2026-06-06. Data source: qwibitai/nanoclaw repository metrics.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-06

**Repository:** [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

## 1. Today's Overview

NullClaw saw minimal activity over the past 24 hours, with **zero issues updated** and only **one open pull request** under review. No new releases were published. The single active contribution is a provider expansion PR adding Evolink as an OpenAI-compatible endpoint, suggesting steady but slow ecosystem growth. Overall project health appears stable but quiet — there are no active bug reports, regressions, or community disputes to surface. The lack of merged code today indicates the project is in a maintenance/review phase rather than active feature delivery.

---

## 2. Releases

No new releases published today.

---

## 3. Project Progress

No pull requests were merged or closed today.

The only active PR remains under review:

- **[#947 feat(providers): add Evolink as an OpenAI-compatible provider](https://github.com/nullclaw/nullclaw/pull/947)** — Opened 2026-06-05 by [@EvoLinkAI](https://github.com/EvoLinkAI). This PR would extend NullClaw's provider ecosystem by adding [Evolink](https://evolink.ai), a multi-model gateway exposing GPT-5, Gemini, DeepSeek, Doubao, and MiniMax through a unified OpenAI-compatible `/v1/chat/completions` endpoint. If merged, it reduces integration friction for users routing through aggregated model providers and reinforces NullClaw's strategy of broad provider compatibility via OpenAI-compatible adapters.

---

## 4. Community Hot Topics

With no open issues and only one PR, the sole hot topic is:

- **[#947 feat(providers): add Evolink as an OpenAI-compatible provider](https://github.com/nullclaw/nullclaw/pull/947)**
  - **Underlying need:** Users and providers want NullClaw to support aggregated AI model gateways, not just individual model providers. Evolink's value proposition — multiple models behind one OpenAI-compatible endpoint with Bearer-token auth — maps cleanly onto NullClaw's existing provider architecture. The PR signals demand for easier multi-model access without custom integrations per backend.

No comment activity or reactions recorded yet (`👍: 0`, comments: undefined).

---

## 5. Bugs & Stability

No bugs, crashes, or regressions reported today. The issue tracker is empty, and no fix PRs were submitted.

---

## 6. Feature Requests & Roadmap Signals

The only roadmap signal today is provider expansion:

| Signal | Source | Likelihood in Next Version |
|--------|--------|---------------------------|
| Add Evolink as OpenAI-compatible provider | PR #947 | High — if review passes, this is a straightforward provider addition with no architectural changes |

No user feature requests were filed as issues. The project may benefit from proactively soliciting roadmap input, as community demand is currently expressed only through external vendor contributions.

---

## 7. User Feedback Summary

No direct user feedback surfaced today. Inferred observations:

- **Positive signal:** Third-party providers (Evolink) are actively submitting integrations, indicating NullClaw is seen as a worthwhile platform to be compatible with.
- **Potential gap:** Zero issue activity could mean either (a) the project is mature and stable, or (b) user engagement and feedback loops are underactive. Without new issues or discussions, concrete pain points are not visible.

---

## 8. Backlog Watch

No long-unanswered issues or stale PRs are detectable from today's data. The only open PR, [#947](https://github.com/nullclaw/nullclaw/pull/947), was created yesterday and is awaiting maintainer review. Given it is vendor-submitted and adds a provider with no reported conflicts, maintainers should consider prioritizing review to keep ecosystem partnerships responsive.

---

*Digest generated from data available 2026-06-06. All links reference https://github.com/nullclaw/nullclaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-06

## 1. Today's Overview

IronClaw shows **high development velocity** with 63 total items updated in the last 24 hours (13 issues, 50 PRs), though the project is in a **pre-release stabilization phase** with zero new versions published. The dominant theme is the **"Reborn" architectural migration** — a major refactor of the agent runtime, gateway, and workflow boundaries — alongside **production hardening of the hook framework** and **WeCom channel stabilization** for enterprise messaging. The 29 open PRs versus 21 merged/closed suggests active feature branching with some merge backlog. Notably, the hook framework (security-critical, WASM-based) completed its 4-PR durable backend series and shipped dark to production, indicating mature engineering discipline.

---

## 2. Releases

**No new releases** (v0.29.1 remains current per staging references).

A release preparation PR is in flight: [PR #3708](https://github.com/nearai/ironclaw/pull/3708) (`chore: release`) targeting `ironclaw` 0.24.0 → 0.29.1 with breaking API changes in `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0). This appears blocked pending Reborn stabilization.

---

## 3. Project Progress

### Merged/Closed Today (6 PRs)

| PR | Author | Summary | Significance |
|---|---|---|---|
| [#3941](https://github.com/nearai/ironclaw/pull/3941) | zmanian | Hook framework maintainability fixes (dead API removal, test hardening, const exposure) | Code quality; addresses technical debt from #3918/#3919 |
| [#3938](https://github.com/nearai/ironclaw/pull/3938) | zmanian | **Hook framework production activation** behind `HOOKS_ENABLED` flag (default OFF) | Major milestone: WASM-based extension hooks now live in runtime, ships dark |
| [#3937](https://github.com/nearai/ironclaw/pull/3937) | zmanian | Cross-backend adversarial parity suite (durable backend PR 4/4) | Completes 4-PR backend split; proves Postgres/libSQL/in-memory behavioral equivalence |
| [#3936](https://github.com/nearai/ironclaw/pull/3936) | zmanian | LibSqlPredicateStateBackend in own crate (PR 3/4) | libSQL/edge deployment support for hooks |
| [#3933](https://github.com/nearai/ironclaw/pull/3933) | zmanian | PostgresPredicateStateBackend (PR 2/4) | Production-grade durable hook state |
| [#3931](https://github.com/nearai/ironclaw/pull/3931) | zmanian | **Security fixes**: cross-tenant leakage, replay attacks, provider spoofing in event-triggered hooks | Critical security hardening, fail-closed design |

### Key Feature Advances

- **Reborn ProductWorkflow boundary crystallization**: [PR #4506](https://github.com/nearai/ironclaw/pull/4506) splits monolithic workflow into explicit `submit_inbound` / `read_projection` / `subscribe_projection` doors — foundational for OpenAI-compatible API wiring
- **Slack channel infrastructure**: [PR #4510](https://github.com/nearai/ironclaw/pull/4510) adds durable route stores and admin WebUI wiring; [PR #4491](https://github.com/nearai/ironclaw/issues/4491) tracks streaming progress UX
- **Outbound preference contracts**: [PR #4511](https://github.com/nearai/ironclaw/pull/4511) adds delivery preference facade for Reborn services API
- **IronHub marketplace port**: [PR #4479](https://github.com/nearai/ironclaw/pull/4479) brings signed skill/tool installation to Reborn with Ed25519 verification and sha256 checks

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|---|---|---|
| [Issue #4311](https://github.com/nearai/ironclaw/issues/4311) | 2 comments | **Budget governance error classification bug**: Reborn model gateway conflates distinct failure modes (budget vs. context overflow), causing wrong recovery paths. Underlying need: **observability and precise error taxonomy** in LLM gateway layer; affects cost control and debugging |
| [Issue #4488](https://github.com/nearai/ironclaw/issues/4488) | 2 comments | **ProductWorkflow facade design**: Community validating explicit door architecture before OpenAI API commitment. Underlying need: **stable, versioned extension points** that don't break third-party integrations |
| [Issue #4502](https://github.com/nearai/ironclaw/issues/4502) | 1 comment | WeCom group chat approval UX broken — blocking enterprise adoption |

**Emerging pattern**: Reborn's new boundaries are actively being stress-tested by integrators. The 2-comment issues reveal **architectural review friction** — the team is gatekeeping breaking changes carefully, which slows velocity but protects downstream users.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Details |
|---|---|---|---|---|
| **High** | [#4502](https://github.com/nearai/ironclaw/issues/4502) — WeCom group chat approval replies ignored | Open | ❌ No | Tool approval loop infinite; `y`/`yes`/`always` not recognized. Blocks production WeCom group use |
| **High** | [#4512](https://github.com/nearai/ironclaw/issues/4512) — `job_semaphore` never acquired | Open | ❌ No | Dead code or **silent concurrency bug** in sandbox; semaphore defined at `src/tenant.rs:984` but unused. Potential resource exhaustion vector |
| **Medium** | [#4500](https://github.com/nearai/ironclaw/issues/4500) — Onboarding event written to wrong conversation | Open | ❌ No | Cross-channel (WeCom + Telegram); race condition in channel pairing flow |
| **Medium** | [#4311](https://github.com/nearai/ironclaw/issues/4311) — Budget/context error misclassification | Open | ❌ No | Wrong recovery semantics; could mask spend overruns |
| **Medium** | [#4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E failing since May 27 | Open | ❌ No | Chronic CI failure; erodes release confidence |
| **Low** | [#4505](https://github.com/nearai/ironclaw/issues/4505) — WeCom group titles indistinguishable in WebUI | Open | ❌ No | UX polish; needs group metadata in title derivation |

**Closed today**: [#4194](https://github.com/nearai/ironclaw/issues/4194) (WeCom group/DM merge bug), [#4198](https://github.com/nearai/ironclaw/issues/4198) (owner visibility), [#3934](https://github.com/nearai/ironclaw/issues/3934) (hook production activation) — all by zmanian, showing concentrated maintenance load.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Likely Version | Confidence |
|---|---|---|
| **OpenAI-compatible API wiring** ([#4488](https://github.com/nearai/ironclaw/issues/4488), [#4483](https://github.com/nearai/ironclaw/issues/4483), [#4506](https://github.com/nearai/ironclaw/pull/4506)) | v0.30.0 | High — explicit "blocks future OpenAI-compatible API wiring" |
| **Slack AI streaming progress** ([#4491](https://github.com/nearai/ironclaw/issues/4491)) | v0.29.2 or v0.30.0 | Medium — stopgap solution in place, proper streaming queued |
| **Third-party hook extensions** ([PR #3951](https://github.com/nearai/ironclaw/pull/3951)) | Post-v0.30.0 | Medium — ships dark, needs ecosystem readiness |
| **Runtime profile approval gates** ([PR #4390](https://github.com/nearai/ironclaw/pull/4390)) | v0.29.2 | High — security-critical, near completion |

**Prediction**: v0.29.1 will likely ship from [#3708](https://github.com/nearai/ironclaw/pull/3708) once WeCom fixes (#4502, #4500) land. v0.30.0 will be the Reborn/OpenAI API milestone.

---

## 7. User Feedback Summary

### Pain Points (Enterprise/Staging Users)

| Source | Pain | Severity |
|---|---|---|
| [sunglow666](https://github.com/sunglow666) WeCom validation pass (#4191, #4502, #4500, #4505, #4194) | **Approval UX broken in group chats** is the #1 blocker; also conversation hygiene (wrong events, indistinguishable titles) | Critical for WeCom enterprise adoption |
| [serrrfirat](https://github.com/serrrfirat) Slack integration | Need **streaming progress indicators** for long-running agent tasks; current "thinking..." delete pattern is poor UX | Moderate — competitive with modern Slack bots |
| [henrypark133](https://github.com/henrypark133) gateway review | **Error taxonomy must be precise** for budget governance; current collapse loses debugging information | Moderate — operational cost control |

### Satisfaction Signals

- Hook framework: **mature, security-first** engineering (4-PR split, adversarial testing, fail-closed fixes)
- WeCom core: "mostly stable" per #4191 — foundation is solid, edge cases remain

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|---|---|---|---|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) Nightly E2E failed | 10 days | **Release blocker** | CI/infrastructure owner; chronic failure suggests flaky test or environment drift |
| [#4311](https://github.com/nearai/ironclaw/issues/4311) Budget governance error mapping | 5 days | Architecture review | [henrypark133](https://github.com/henrypark133) + gateway owner; may need error taxonomy RFC |
| [#4512](https://github.com/nearai/ironclaw/issues/4512) Unacquired semaphore | New | **Potential security/stability** | [saketh-are](https://github.com/saketh-are) follow-up; needs owner assignment or intentional removal |
| [#3708](https://github.com/nearai/ironclaw/pull/3708) Release PR | 21 days | Release logistics | Merge conflict resolution, final Reborn feature cutoff decision |

**Maintainer attention**: zmanian is carrying disproportionate load (6 PRs merged today, all hook-related). Risk of bus factor on Reborn gateway architecture ([henrypark133](https://github.com/henrypark133)) and WeCom channel ([sunglow666](https://github.com/sunglow666) reporting, no clear owner responding to #4502/#4500).

---

*Digest generated from GitHub activity 2026-06-05 to 2026-06-06. All links: https://github.com/nearai/ironclaw*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-06

## 1. Today's Overview

LobsterAI shows **strong maintainer velocity** with 13 PRs closed in 24 hours and a fresh release (2026.6.5), indicating active development by NetEase Youdao. However, **community engagement remains thin**—all 3 active issues are stale (2+ months old) with zero reactions, and no new community issues were opened today. The project appears to be in a **release-heavy, community-light phase** where core team drives most progress while user-reported bugs accumulate without resolution. The security fixes merged today suggest growing attention to enterprise-readiness.

---

## 2. Releases

### [LobsterAI 2026.6.5](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.6.5) (2026-06-05)

| Aspect | Details |
|--------|---------|
| **Type** | Feature + bugfix release |
| **Key Changes** | • **Cowork channel session sync**: Improved synchronization and cleanup logic ([#2108](https://github.com/netease-youdao/LobsterAI/pull/2108))<br>• **Keyboard shortcuts overhaul**: Expanded actions with improved UX ([#2109](https://github.com/netease-youdao/LobsterAI/pull/2109)) |
| **Breaking Changes** | None documented |
| **Migration Notes** | None required; shortcuts changes are additive |

---

## 3. Project Progress

### Merged/Closed PRs Today (13 total)

| PR | Author | Area | Summary | Impact |
|:---|:---|:---|:---|:---|
| [#2119](https://github.com/netease-youdao/LobsterAI/pull/2119) | fisherdaddy | Multi-area release | **Release 2026.6.4** — ASR voice input, artifacts, shortcuts, update modules | Major feature delivery |
| [#2118](https://github.com/netease-youdao/LobsterAI/pull/2118) | fisherdaddy | Cowork, Artifacts | Clipboard copy with graceful fallback chain; login/subscribe gating for model access | UX reliability, monetization |
| [#2117](https://github.com/netease-youdao/LobsterAI/pull/2117) | liuzhq1986 | Config | Preserve user-deleted provider models after migration; prevent re-injection | Data integrity |
| [#2116](https://github.com/netease-youdao/LobsterAI/pull/2116) | fisherdaddy | Cowork | Error classification (quota exhaustion), deduplicated stream errors, empty-state guides | Error UX |
| [#2115](https://github.com/netease-youdao/LobsterAI/pull/2115) | fisherdaddy | IM | IM reply assembled from current-turn only; Windows update installer fix (PowerShell) | Correctness, security |
| [#2114](https://github.com/netease-youdao/LobsterAI/pull/2114) | liugang519 | Artifacts | **File preview overhaul**: Office/PDF/Excel/PPT improvements, expandable panel, compact input | Rich media UX |
| [#2113](https://github.com/netease-youdao/LobsterAI/pull/2113) | btc69m979y-dotcom | macOS, Voice | macOS microphone permission handling, ASR diagnostics | Platform compliance |
| [#2112](https://github.com/netease-youdao/LobsterAI/pull/2112) | fisherdaddy | OpenClaw, Main | Subscribe prompt for locked models; OpenClaw repair flow | Monetization, reliability |
| [#1531](https://github.com/netease-youdao/LobsterAI/pull/1531) | leedalei | Settings | Compact circle theme selector (stale PR, finally merged) | UI polish |
| [#1533](https://github.com/netease-youdao/LobsterAI/pull/1533) | MaoQianTu | Cowork | Local session usage stats panel in settings (stale PR) | User analytics |
| [#1534](https://github.com/netease-youdao/LobsterAI/pull/1534) | kayo5994 | Security | **Security**: Redact API keys from proxy logs | CVE-preventive |
| [#1535](https://github.com/netease-youdao/LobsterAI/pull/1535) | kayo5994 | Security | **Security**: Whitelist renderer kv store keys to prevent token exfiltration | Defense in depth |
| [#367](https://github.com/netease-youdao/LobsterAI/pull/367) | fancyboi999 | MCP | Import MCP JSON configs, normalize streamable_http transport | Protocol compatibility |

**Pattern**: Heavy focus on **monetization gating** (subscribe prompts, quota handling), **security hardening** (2 PRs), and **voice/ASR integration**—suggesting preparation for broader consumer or enterprise deployment.

---

## 4. Community Hot Topics

**No genuinely "hot" community topics exist.** All active issues are stale with minimal engagement. The most commented items:

| Item | Comments | Analysis |
|:---|:---|:---|
| [#1487](https://github.com/netease-youdao/LobsterAI/issues/1487) — Python script execution fails in sessions | 2 comments | **Local model compatibility gap**: User reports 30B local model fails where Claude Code CLI succeeds. Suggests LobsterAI's skill execution environment differs from standard MCP/CLI contexts. **Underlying need**: Reproducible skill runtime across model providers. |
| [#1471](https://github.com/netease-youdao/LobsterAI/issues/1471) — Draft loss on rapid navigation | 1 comment | **State management fragility**: 300ms debounce fails on unmount. **Underlying need**: Reliable auto-save with flush-on-unmount pattern. |
| [#1472](https://github.com/netease-youdao/LobsterAI/issues/1472) — Edit history overwrites unsent input silently | 1 comment | **Destructive UX without guardrails**: No confirmation on overwrite. **Underlying need**: Non-destructive editing with undo/confirmation. |

**Critical observation**: All three issues were opened by users in April, received minimal maintainer response, and were only "updated" yesterday (likely bot stale-marking). **Community health concern**: Users are reporting bugs but not being heard.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Risk |
|:---|:---|:---|:---|:---|
| **High** | [#1487](https://github.com/netease-youdao/LobsterAI/issues/1487) — Python skill execution broken on local 30B models | Open, stale | ❌ No | Blocks local/self-hosted use cases; skills ecosystem fragmentation |
| **Medium** | [#1471](https://github.com/netease-youdao/LobsterAI/issues/1471) — Draft content loss on navigation | Open, stale | ❌ No | Daily UX friction; data loss |
| **Medium** | [#1472](https://github.com/netease-youdao/LobsterAI/issues/1472) — Silent overwrite of unsent content | Open, stale | ❌ No | User trust erosion |
| **Low (fixed in release)** | Quota exhaustion errors poorly surfaced | Fixed in [#2116](https://github.com/netease-youdao/LobsterAI/pull/2116) | ✅ Yes | Previously poor error UX |

**Stability assessment**: No new crashes reported today, but **3 unaddressed UX bugs** from April remain open. The security fixes (#1534, #1535) prevent potential credential leaks but were stale PRs finally merged—suggesting reactive rather than proactive security posture.

---

## 6. Feature Requests & Roadmap Signals

**Explicit user requests** (from issues): None new today.

**Inferred roadmap from merged PRs**:

| Signal | Likely Near-Term Priority | Confidence |
|:---|:---|:---|
| Subscribe/paywall integration | **High** — Multiple PRs (#2112, #2116, #2118) add monetization gates | Very High |
| Voice/ASR as first-class input | **High** — Dedicated ASR auth, macOS permissions, feedback loops | Very High |
| Artifacts/rich file preview | **Medium-High** — Major overhaul in #2114, expandable panels | High |
| Enterprise security hardening | **Medium** — KV store whitelisting, log redaction merged | High |
| MCP ecosystem expansion | **Medium** — Streamable HTTP normalization (#367) | Medium |
| Local model reliability | **Unclear** — #1487 unaddressed despite local model mention | Low |

**Prediction for next version (2026.6.6 or 2026.7.x)**: Further monetization refinement (subscription tiers, usage analytics dashboard from #1533), voice input GA on all platforms, and possibly **local model execution fixes** if #1487 gains traction.

---

## 7. User Feedback Summary

### Pain Points
| Issue | Frequency Signal | User Impact |
|:---|:---|:---|
| **Data loss in input workflow** | 2/3 active issues (#1471, #1472) | High frustration — users lose work product |
| **Local model skill execution failures** | 1 issue, but blocking for self-hosters | Ecosystem lock-in or abandonment risk |
| **Silent failures / poor error surfacing** | Addressed in release, but historically poor | Confusion, support burden |

### Use Cases Represented
- **Local/self-hosted AI** (#1487): 30B local model user, comparing against Claude Code CLI
- **Heavy keyboard-driven workflow**: Shortcuts overhaul suggests power-user constituency
- **Voice-enabled productivity**: ASR investment indicates multimodal use cases

### Satisfaction/Dissatisfaction
- **Positive**: Regular releases, feature velocity, security attention
- **Negative**: Bug report neglect, stale issue management, destructive UX patterns without safeguards

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1487](https://github.com/netease-youdao/LobsterAI/issues/1487) — Python skill execution on local models | 62 days | **Critical** — Blocks local model adoption; skills ecosystem fragmentation | Maintainer triage, repro request with skill config |
| [#1471](https://github.com/netease-youdao/LobsterAI/issues/1471) — Draft loss on navigation | 63 days | **High** — Daily UX regression; fix is straightforward (flush debounce on unmount) | Good first issue or quick fix |
| [#1472](https://github.com/netease-youdao/LobsterAI/issues/1472) — Silent overwrite on history edit | 63 days | **High** — Add confirmation dialog | Straightforward UX fix |

**Recommendation**: All three issues have clear repro steps and are fixable. The project would benefit from a **community bug bash** or assigning these to new contributors. The stale-bot activity without human response risks signaling project neglect despite active development.

---

*Digest generated from GitHub activity 2026-06-05 to 2026-06-06. Data source: netease-youdao/LobsterAI*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-06

## 1. Today's Overview

Moltis saw moderate community activity over the past 24 hours, with **4 issues updated** (3 open, 1 closed) and **5 pull requests** in motion (4 open, 1 merged/closed). No new releases were published. Development momentum is concentrated in three areas: **sandbox reliability** (Docker/Podman), **UI/UX polish** (web and Telegram), and **provider model preference management**. The single merged PR resolves a notable Telegram streaming bug. Overall project health appears stable with active triage, though the open PR backlog is growing and would benefit from maintainer review.

---

## 2. Releases

No new releases.

---

## 3. Project Progress

### Merged/Closed PR

- **#1099 — [codex] Separate Telegram progress stream from final replies** by s-salamatov  
  [moltis-org/moltis#1099](https://github.com/moltis-org/moltis/pull/1099)  
  Fixes [#1097](https://github.com/moltis-org/moltis/issues/1097). Telegram streaming now uses temporary, throttled progress messages that are deleted before the final answer is delivered separately. This eliminates intermediate output leaking into the final reply and improves perceived bot reliability.

### Active Open PRs

- **#1089 — Cap persisted tool results before rehydration** by s-salamatov  
  [moltis-org/moltis#1088](https://github.com/moltis-org/moltis/pull/1089)  
  Applies content caps to `tool` / `tool_result` messages across chat, streaming, retry, inspection, memory, and compaction paths. Aims to reduce token bloat and context-window pressure.

- **#1106 — fix(sandbox): support Podman escape hatches** by penso  
  [moltis-org/moltis#1106](https://github.com/moltis-org/moltis/pull/1106)  
  Adds opt-in host socket passthrough and privileged nested Podman support, improves rootless Podman diagnostics, and documents systemd service/sandbox tracing.

- **#1105 — Fix Docker sandbox filesystem tool fallback** by penso  
  [moltis-org/moltis#1105](https://github.com/moltis-org/moltis/pull/1105)  
  Adds regression tests for sandboxed file tools and implements a fallback from translated Docker host paths to container copy when gateway access fails.

- **#1104 — fix(providers): allow replacing preferred models** by penso  
  [moltis-org/moltis#1104](https://github.com/moltis-org/moltis/pull/1104)  
  Fixes model preference dialog state and enables clearing or replacing saved preferred models, with backend and Playwright test coverage.

---

## 4. Community Hot Topics

No item has comments or reactions, so activity is measured by freshness and contributor concentration.

- **#1106 / #1105 — Sandbox hardening (Podman + Docker)** by penso  
  [moltis-org/moltis#1106](https://github.com/moltis-org/moltis/pull/1106) | [moltis-org/moltis#1105](https://github.com/moltis-org/moltis/pull/1105)  
  Two related PRs from the same author signal strong downstream investment in containerized deployments. Underlying need: **Moltis is being run in production-like, rootless/Podman and Docker sandbox environments**, and operators need clearer errors, escape hatches, and reliable file-tool behavior.

- **#1104 — Preferred-model replacement** by penso  
  [moltis-org/moltis#1104](https://github.com/moltis-org/moltis/pull/1104)  
  Suggests users are actively curating provider model lists and hitting UX friction around preference management. Underlying need: **predictable, reversible model selection** in multi-provider setups.

- **#1107 — Multiline text input in mobile web UI** by IlyaBizyaev  
  [moltis-org/moltis#1107](https://github.com/moltis-org/moltis/issues/1107)  
  A quality-of-life gap for mobile users. Underlying need: **mobile parity with desktop chat input**, especially for code or longer prompts.

---

## 5. Bugs & Stability

| Severity | Item | Fix PR? | Notes |
|---|---|---|---|
| **Medium** | **#1109** — Update banner does not account for Docker installs | None yet | UX bug; Docker users are incorrectly nudged to update. Could cause support noise. [moltis-org/moltis#1109](https://github.com/moltis-org/moltis/issues/1109) |
| **Medium** | **#1108** — Session list shows times but not dates for past-day sessions | None yet | Affects orientation in the web UI; low severity but visible daily. [moltis-org/moltis#1108](https://github.com/moltis-org/moltis/issues/1108) |
| **Low (fixed)** | **#1097** — Telegram edit-in-place streaming mixed intermediate output into final reply | **#1099 merged** | Resolved. [moltis-org/moltis/issues/1097](https://github.com/moltis-org/moltis/issues/1097) |

Stability work in flight: #1105 and #1106 address sandbox filesystem and container-runtime edge cases before they become production incidents.

---

## 6. Feature Requests & Roadmap Signals

- **#1107 — Multiline text input in the mobile web UI**  
  [moltis-org/moltis#1107](https://github.com/moltis-org/moltis/issues/1107)  
  A focused, well-scoped UI enhancement. Likely candidate for a near-term patch if a contributor picks it up.

- **#1104 — Replace/clear preferred models**  
  [moltis-org/moltis#1104](https://github.com/moltis-org/moltis/pull/1104)  
  Already implemented in PR form; probable merge in next release.

- **#1089 — Cap persisted tool results**  
  [moltis-org/moltis#1089](https://github.com/moltis-org/moltis/pull/1089)  
  Infrastructure-level optimization. If merged, it may unlock longer sessions and lower provider costs, making it a strong candidate for next minor release notes.

**Prediction for next version:** Provider preference fixes (#1104), sandbox reliability improvements (#1105, #1106), and possibly Telegram streaming cleanup (#1099) are the most likely inclusions.

---

## 7. User Feedback Summary

**Pain points:**
- **Deployment context awareness:** Docker installs are not recognized by the update banner (#1109), making self-hosted users feel the product is not tailored to their setup.
- **Mobile input friction:** Lack of multiline input on mobile web blocks a common chat pattern (#1107).
- **Temporal orientation:** Session history lacks dates, forcing users to infer when conversations occurred (#1108).
- **Sandbox reliability:** File tools and container runtime edge cases (Podman rootless errors, Docker host-path access) are real operational blockers for self-hosters (#1105, #1106).

**Satisfaction signals:**
- Rapid fix and merge of the Telegram streaming bug (#1099 / #1097).
- Active, same-day PR responses to reported gaps (penso and IlyaBizyaev both filing and fixing).

---

## 8. Backlog Watch

The following open items need maintainer review or risk stalling:

- **#1089 — Cap persisted tool results before rehydration**  
  [moltis-org/moltis#1089](https://github.com/moltis-org/moltis/pull/1089)  
  Open since 2026-06-01 with continued updates. Touches many code paths (chat, streaming, retry, compaction); needs architectural review.

- **#1105 / #1106 — Docker and Podman sandbox fixes**  
  [moltis-org/moltis#1105](https://github.com/moltis-org/moltis/pull/1105) | [moltis-org/moltis#1106](https://github.com/moltis-org/moltis/pull/1106)  
  Submitted same day by penso. Likely interdependent in documentation and testing; would benefit from coordinated review.

- **#1109 / #1108 / #1107 — Three fresh issues from IlyaBizyaev**  
  [moltis-org/moltis#1109](https://github.com/moltis-org/moltis/issues/1109) | [moltis-org/moltis#1108](https://github.com/moltis-org/moltis/issues/1108) | [moltis-org/moltis#1107](https://github.com/moltis-org/moltis/issues/1107)  
  All filed 2026-06-05, zero comments so far. Two are quick-fix UI bugs; one is a small feature request. Good candidates for `good first issue` labeling.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-06

## 1. Today's Overview

CoPaw (QwenPaw) shows **high community activity** with 49 total updates in the past 24 hours (24 issues, 25 PRs), indicating an actively maintained open-source AI agent platform. The project is in a **stabilization phase** with no new releases, but substantial bug-fixing and feature refinement ongoing. Notably, 15 PRs were merged/closed versus 10 remaining open, suggesting healthy maintainer throughput. The community is particularly engaged around **Yuanbao channel integration**, **browser automation stability**, and **UI/UX improvements** in the console. However, a cluster of critical bugs around memory exhaustion, infinite loops, and corrupted state files signals **production readiness concerns** that need attention.

---

## 2. Releases

**No new releases** (v1.1.10 remains current).

---

## 3. Project Progress

### Merged/Closed PRs Today (15 total)

| PR | Description | Impact |
|:---|:---|:---|
| [#4972](https://github.com/agentscope-ai/QwenPaw/pull/4972) | Enable LaTeX math formula rendering via KaTeX | Fixes formula display bug #4756; improves scientific/technical content presentation |
| [#4944](https://github.com/agentscope-ai/QwenPaw/pull/4944) | Browser CDP timeout + profile isolation | Resolves cross-browser switching crashes; adds `user_data_{type}` directories |
| [#4934](https://github.com/agentscope-ai/QwenPaw/pull/4934) | OpenSandbox plugin for sandboxed shell execution | New security-focused plugin; avoids invasive core changes |
| [#4905](https://github.com/agentscope-ai/QwenPaw/pull/4905) | Coordinate-based browser click support | Enhances browser automation precision |
| [#4026](https://github.com/agentscope-ai/QwenPaw/pull/4026) | Prevent `write_file` overwriting non-empty files | Security guard; first-time contributor |
| [#3403](https://github.com/agentscope-ai/QwenPaw/pull/3403) | Defer builtin provider instantiation (gunicorn fix) | Fixes production deployment crash |
| [#2079](https://github.com/agentscope-ai/QwenPaw/pull/2079) | Strip Anthropic tool-result media on replay | Fixes multi-turn Anthropic failures |
| [#1347](https://github.com/agentscope-ai/QwenPaw/pull/1347) | MCP client auto-recovery after crashes | Improves reliability of stdio-based MCP servers |
| [#1240](https://github.com/agentscope-ai/QwenPaw/pull/1240) | SQLite-backed state storage (hardens against corruption) | Replaces fragile JSON state; fixes #1217 |
| [#4765](https://github.com/agentscope-ai/QwenPaw/pull/4765), [#4766](https://github.com/agentscope-ai/QwenPaw/pull/4766) | UI polish (shield icon centering, scrollbar flicker fix) | Console UX refinements; first-time contributors |

**Key advancement**: The project is systematically replacing fragile JSON-based state management with SQLite (#1240, #4970), and hardening browser automation (#4944, #4905).

---

## 4. Community Hot Topics

### Most Active Issues (by comments)

| Issue | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|
| [#4754](https://github.com/agentscope-ai/QwenPaw/issues/4754) | 7 | Packaging: exe build options (Tauri vs standard Windows) | **Deployment simplicity** — users want turnkey desktop distribution without understanding technical stacks |
| [#4919](https://github.com/agentscope-ai/QwenPaw/issues/4919) | 6 | Browser CDP timeout + Chrome/Edge crash | **Reliable browser automation** — managed CDP is flaky; users need fallback strategies |
| [#4770](https://github.com/agentscope-ai/QwenPaw/issues/4770) | 5 | Session table column reordering | **Information density optimization** — timestamp visibility vs. internal ID clutter |
| [#4705](https://github.com/agentscope-ai/QwenPaw/issues/4705) | 4 | Mission Phase 2 iteration after user-block | **Workflow state machine correctness** — mission mode needs proper halting conditions |
| [#4967](https://github.com/agentscope-ai/QwenPaw/issues/4967) | 4 | Infinite loop, cannot exit execution | **Execution control & safety** — users need emergency brakes |

### Active PR Threads

| PR | Focus |
|:---|:---|
| [#4822](https://github.com/agentscope-ai/QwenPaw/pull/4822) | Cron session isolation — prevents trace pollution |
| [#4884](https://github.com/agentscope-ai/QwenPaw/pull/4884) | Channel lifecycle management (stop-before-start) |

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#4968](https://github.com/agentscope-ai/QwenPaw/issues/4968) | **Memory exhaustion**: subprocess fork fails with "Cannot allocate memory" due to virtual memory leak on Ubuntu 24.04 | ❌ No PR yet |
| 🔴 **Critical** | [#4967](https://github.com/agentscope-ai/QwenPaw/issues/4967) | **Infinite loop**: execution cannot be interrupted, requires process kill | ❌ No PR yet (related: #4961/#4964 for interrupt feature) |
| 🟡 **High** | [#4970](https://github.com/agentscope-ai/QwenPaw/issues/4970) | **State corruption**: `loop_config.json`/`prd.json` corruption crashes entire agent session | ✅ **Partial**: #1240 (SQLite migration) addresses similar pattern |
| 🟡 **High** | [#4976](https://github.com/agentscope-ai/QwenPaw/issues/4976) - [#4979](https://github.com/agentscope-ai/QwenPaw/issues/4979) | **Yuanbao channel broken in v1.1.10**: Missing proto files, protobuf compatibility, missing `connectId`, streaming replies dropped | ✅ **In progress**: #4983, #4982, #4981 |
| 🟡 **High** | [#4919](https://github.com/agentscope-ai/QwenPaw/issues/4919) | Browser automation: managed CDP timeout, Chrome/Edge crashes | ✅ **Fixed**: #4944 |
| 🟡 **High** | [#4962](https://github.com/agentscope-ai/QwenPaw/issues/4962) | DeepSeek API: content folded into reasoning block, requiring manual expand | ❌ No PR yet |
| 🟢 **Medium** | [#4832](https://github.com/agentscope-ai/QwenPaw/issues/4832) | Shell command flashes cmd window on Windows (missing `CREATE_NO_WINDOW`) | ✅ **In progress**: #4900 |
| 🟢 **Medium** | [#4959](https://github.com/agentscope-ai/QwenPaw/issues/4959) | LaTeX formula display abnormal | ✅ **Fixed**: #4972 |

**Stability assessment**: Two critical unpatched bugs (memory leak, infinite loop) pose **production deployment risks**. The Yuanbao channel cluster represents a **regression in v1.1.10** that is being actively patched.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Agent interrupt/abort** | [#4961](https://github.com/agentscope-ai/QwenPaw/issues/4961), [#4964](https://github.com/agentscope-ai/QwenPaw/issues/4964) | **High** | Critical UX gap; duplicate requests indicate strong demand |
| **Cron direct script/shell execution** | [#4963](https://github.com/agentscope-ai/QwenPaw/issues/4963), [#4950](https://github.com/agentscope-ai/QwenPaw/issues/4950) | **High** | Already had closed PR; being re-requested with refined scope |
| **Customizable session columns** | [#4770](https://github.com/agentscope-ai/QwenPaw/issues/4770), [#4975](https://github.com/agentscope-ai/QwenPaw/pull/4975) | **Very High** | PR already open and linked |
| **Per-agent avatars** | [#4974](https://github.com/agentscope-ai/QwenPaw/issues/4974) | **Medium** | Polishing feature; good first issue for contributors |
| **Session management sidebar** | [#4971](https://github.com/agentscope-ai/QwenPaw/issues/4971) | **Medium** | UX improvement; may be bundled with column customization |
| **Provider card merging** | [#4965](https://github.com/agentscope-ai/QwenPaw/issues/4965) | **Medium** | Backend+frontend change; reduces UI clutter |
| **macOS Tauri Intel support** | [#4744](https://github.com/agentscope-ai/QwenPaw/issues/4744) | **Unclear** | Platform-specific; may depend on Tauri upstream |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Intensity |
|:---|:---|:---|
| **Execution control anxiety** | Infinite loops (#4967), no interrupt (#4961), memory exhaustion (#4968) | 🔴 High |
| **Deployment friction** | Packaging confusion (#4754), LAN access blocked (#4960), macOS Intel unsupported (#4744) | 🟡 Medium-High |
| **State fragility** | JSON corruption crashes (#4970), browser profile conflicts (#4919) | 🟡 Medium-High |
| **Channel integration gaps** | Yuanbao broken out-of-box (#4976-#4979), DeepSeek UX issues (#4962) | 🟡 Medium |
| **Console information architecture** | Column order (#4770), session switching (#4971), visual identification (#4974) | 🟢 Medium |

### Use Cases Emerging

- **Personal automation desktop app**: Strong demand for exe packaging, Tauri builds
- **Multi-channel bot platform**: Yuanbao, DingTalk, Feishu integrations actively used
- **Scheduled task runner**: Cron feature heavily used; needs shell execution escape hatch
- **Browser-based agent workflows**: `browser_use` is core feature; stability critical

### Satisfaction Signals

- Active first-time contributions (#4026, #4765, #4766, #4905, #4934, #4973)
- Rapid maintainer response to critical bugs (Yuanbao patches same day as reports)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#4744](https://github.com/agentscope-ai/QwenPaw/issues/4744) macOS Tauri Intel support | 9 days | Platform exclusion; enterprise Mac users blocked | Maintainer decision on Tauri build matrix |
| [#4832](https://github.com/agentscope-ai/QwenPaw/issues/4832) Shell command window flash | 6 days | Windows UX polish; fix PR #4900 in progress | Review/merge #4900 |
| [#4822](https://github.com/agentscope-ai/QwenPaw/pull/4822) Cron session isolation fix | 8 days open | Trace pollution in shared sessions | Final review for merge |
| [#4884](https://github.com/agentscope-ai/QwenPaw/pull/4884) Channel replace lifecycle | 5 days open | Resource leak on channel reconfiguration | Final review for merge |
| [#4900](https://github.com/agentscope-ai/QwenPaw/pull/4900) Plugin loader decoupling | 4 days open | Frozen environment startup failures | Review; affects desktop distribution |
| [#4968](https://github.com/agentscope-ai/QwenPaw/issues/4968) Memory exhaustion | **New** | Production stability | Urgent: needs reproduction and root cause analysis |

---

**Project Health Score**: 🟡 **Moderate-High Activity, Stabilization Needed**

- **Strengths**: Rapid issue triage, welcoming contributor community, systematic hardening of state/browser subsystems
- **Concerns**: Two critical unpatched stability bugs, v1.1.10 regression in Yuanbao channel, accumulation of open UI/UX requests without clear prioritization

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-06

## 1. Today's Overview

ZeroClaw shows **intense development velocity** with 50 issues and 50 PRs active in the last 24 hours, though **no new releases** were cut. The project is in a heavy consolidation phase: five previously closed IoT/media integration PRs (Home Assistant, Philips Hue, 8Sleep, Spotify, Sonos) have been **re-batched into a single revival PR (#7278)**, suggesting architectural cleanup of stalled contributions. Security and governance RFCs dominate the issue backlog with multiple accepted proposals targeting v0.9.0, while the community is actively debating shell safety, observability, and plugin architecture. The high open-to-closed ratio (44:6 issues, 34:16 PRs) indicates a growing backlog requiring maintainer attention.

---

## 2. Releases

**No new releases** — None published.

---

## 3. Project Progress

### Merged/Closed PRs (16 total, notable items)

| PR | Status | Summary | Link |
|:---|:---|:---|:---|
| **#7278** | OPEN (revival) | **Batch revival of 5 IoT/media integrations**: Consolidates Home Assistant, Philips Hue, 8Sleep (v2), Spotify, and Sonos tools into current architecture | [PR #7278](https://github.com/zeroclaw-labs/zeroclaw/pull/7278) |
| #6480, #6478, #6857, #6470, #6464, #6479, #6471 | CLOSED (superseded) | Original individual integration PRs now closed in favor of #7278 batch | — |
| **#7261** | OPEN | **Security fix**: Redacts nested object-array secrets in config display | [PR #7261](https://github.com/zeroclaw-labs/zeroclaw/pull/7261) |
| **#7265** | OPEN | **5 new SMS channels** (Twilio, Plivo, Telnyx, Sinch, Vonage) with signature-verified webhooks | [PR #7265](https://github.com/zeroclaw-labs/zeroclaw/pull/7265) |
| **#7229** | OPEN | **Web dashboard expansion**: MCP, Skills, Plugins & Providers management tabs | [PR #7229](https://github.com/zeroclaw-labs/zeroclaw/pull/7229) |
| **#7123** | OPEN | **Bug fix**: UTF-8 char-boundary panics in text truncation (Bluesky, LinkedIn, dashboard) | [PR #7123](https://github.com/zeroclaw-labs/zeroclaw/pull/7123) |
| **#7060** | OPEN | **WASI plugin foundation**: WIT interface files for Tool, Channel, Memory plugins (FND-001 §5.2) | [PR #7060](https://github.com/zeroclaw-labs/zeroclaw/pull/7060) |
| **#7280, #7279, #7277** | OPEN | **Three new WASM plugins**: Replicate model-runner, Firecrawl web-scrape, Shazam (pilot) | [PR #7280](https://github.com/zeroclaw-labs/zeroclaw/pull/7280), [PR #7279](https://github.com/zeroclaw-labs/zeroclaw/pull/7279), [PR #7277](https://github.com/zeroclaw-labs/zeroclaw/pull/7277) |
| **#7276** | OPEN | **Docs quality**: Eliminates all rustdoc/mdBook build warnings (15 broken links, 8 invalid HTML tags) | [PR #7276](https://github.com/zeroclaw-labs/zeroclaw/pull/7276) |

**Key advancement**: The project is pivoting from **native built-in tools to WASM/Extism plugins** (3 new plugin PRs today + WIT interfaces), aligning with RFC #6165's "lighter core through external integrations" vision.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|
| **[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** | 9 | RFC: Work Lanes, Board Automation, and Label Cleanup | **Maintainer burnout prevention** — community wants self-routing work without manual board upkeep |
| **[#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969)** | 7 | RFC: Unified output routing model (per-peer modality preference + `send_via` tool) | **Migration friction from Letta** — users need persistent delivery preferences (e.g., "morning brief to Telegram") |
| **[#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601)** | 6 | OAuth support for Ollama Cloud, z.ai, Kimi, MiniMax | **API key fatigue** — subscription-native auth reduces credential management burden |
| **[#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)** | 4 | RFC: Prefer lighter core through external integrations | **Architectural sustainability** — stop maintaining ad-hoc integrations (Jira, GitHub) when skills/MCP suffice |
| **[#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)** | 4 | RFC: Per-execution confirmation tier for high-risk shell commands | **Safety UX gap** — binary allow/deny is insufficient; users want Claude Code-style "ask" middle tier |
| **[#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)** | 4 | Pluggable security provider interface (v0.9.0) | **Enterprise auditability** — security enforcement must be swappable/customizable |
| **[#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)** | 4 | OIDC Authentication Provider for RPC/WSS transport (v0.9.0) | **Enterprise SSO integration** — production deployments need standard identity federation |

**Community tension**: There's a clear split between **power users wanting more security/enterprise features** (OIDC, pluggable security, shell confirmation tiers) and **developers wanting lighter maintenance burden** (external integrations, WASM plugins, label automation).

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Details |
|:---|:---|:---|:---|:---|
| **S1** | **[#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120)** — Onboarding: OpenAI Codex prompts for API key instead of subscription | **CLOSED** today | ✅ Fixed | Workflow blocker for Codex users; resolved in last 24h |
| **S2** | **[#7059](https://github.com/zeroclaw-labs/zeroclaw/issues/7059)** — "Default model provider" fallback excised from channel orchestrator | In Progress | 🔄 In progress | **V3 schema compliance bug** — ambient default provider concept doesn't exist in V3, causes degraded behavior |
| **High** | **[#7123](https://github.com/zeroclaw-labs/zeroclaw/pull/7123)** — UTF-8 char-boundary panics in text truncation | **PR OPEN** | ✅ PR ready | **Crash-level bug** — CJK/multi-byte content panics Bluesky, LinkedIn, dashboard truncation |
| **High** | **[#7261](https://github.com/zeroclaw-labs/zeroclaw/pull/7261)** — Nested object-array secrets not redacted | **PR OPEN** | ✅ PR ready | **Security regression** — secrets leak in config display/readback |

**Stability concern**: The #6074 audit tracking **153 commits lost in bulk revert c3ff635** (March 28) remains open with ongoing recovery work — a significant historical wound affecting confidence in bulk operations.

---

## 6. Feature Requests & Roadmap Signals

### Likely for v0.9.0 (accepted RFCs, security-focused)

| Feature | Issue | Signal Strength | Rationale |
|:---|:---|:---|:---|
| **OIDC Authentication Provider** | [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | ⭐⭐⭐ Very High | Explicitly targets v0.9.0, tracking issue with DoD items |
| **Pluggable Security Provider Interface** | [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) | ⭐⭐⭐ Very High | Same v0.9.0 target, umbrella tracking issue |
| **Per-execution shell confirmation tier** | [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | ⭐⭐⭐ Very High | P1 priority, accepted RFC, addresses active user pain |
| **Air-gapped execution mode / enclave support** | [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) | ⭐⭐ High | Blocked, needs maintainer review — high enterprise demand |
| **A2A agent discovery** | [#7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218) | ⭐⭐ High | Just accepted, multi-agent interoperability foundation |

### Likely post-v0.9.0

| Feature | Issue | Blocker |
|:---|:---|:---|
| **LSP support for ZeroCode** | [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) | Blocked, needs maintainer review |
| **Unified output routing** | [#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) | Accepted but P2, complex cross-cutting change |

### Emerging trend: **WASM plugin ecosystem**
Three new plugin PRs in 24 hours (#7280, #7279, #7277) + WIT interfaces (#7060) suggests v0.10+ may be **plugin-native architecture**.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Migration friction from other agents** | [#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) (Letta user lost `send_via`), [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) (Codex onboarding broken) | High |
| **Security UX is binary and scary** | [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) (no "ask" middle tier), [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) (security posture hard to verify) | High |
| **Credential management fatigue** | [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) (want OAuth for 4 more providers) | Medium |
| **Integration maintenance burden** | [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) (don't maintain Jira/GitHub natively) | Medium |
| **Skill audit false positives** | [#6714](https://github.com/zeroclaw-labs/zeroclaw/issues/6714) (`.md` URLs blocked incorrectly) | Low-Medium |

### Satisfaction Signals
- **Strong plugin contributor activity**: `theonlyhennygod` single-handedly submitted SMS channels, dashboard tabs, 3 WASM plugins, and integration batch revival — indicates healthy extensibility
- **Responsive security culture**: Multiple accepted security RFCs, secret redaction fix in progress

---

## 8. Backlog Watch

### Critical items needing maintainer review (>24h stale, high impact)

| Issue/PR | Age | Blocker | Risk if neglected |
|:---|:---|:---|:---|
| **[#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601)** — OAuth for Ollama Cloud, z.ai, Kimi, MiniMax | ~8 weeks | `needs-maintainer-review`, `status:blocked` | **Provider parity gap** — competitors offer OAuth; user attrition risk |
| **[#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)** — Lighter core through external integrations | ~6 weeks | `needs-maintainer-review`, `status:blocked` | **Technical debt accumulation** — native integrations keep growing |
| **[#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293)** — Air-gapped execution mode | ~5 weeks | `needs-maintainer-review`, `status:blocked` | **Enterprise adoption blocker** — security-sensitive users need this |
| **[#6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914)** — Enforce `allowed_tools`/`denied_tools` in agent loop | ~2 weeks | `needs-maintainer-review`, `status:blocked` | **Security gap** — allowlist exists but isn't enforced at execution |
| **[#6915](https://github.com/zeroclaw-labs/zeroclaw/issues/6915)** — Skill-scoped tool activation | ~2 weeks | `needs-maintainer-review`, `status:blocked` | **Skill ecosystem growth** — skills can't elevate permissions temporarily |
| **[#6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715)** — Delete 200+ stale branches | ~3 weeks | `needs-maintainer-review`, `priority:p3` | **Repo hygiene** — contributor confusion, CI noise |

### Process concern
**RFC #6808** (Work Lanes, Board Automation) has 9 comments but **no maintainer decision** — the community is designing its own governance because current processes don't scale. The "needs-maintainer-review" label is applied to **6+ issues**, suggesting reviewer bandwidth is the primary bottleneck.

---

*Digest generated from 50 issues and 50 PRs active 2026-06-05 to 2026-06-06. All links: [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*