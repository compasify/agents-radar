# OpenClaw Ecosystem Digest 2026-05-28

> Issues: 382 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-28 00:27 UTC

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

# OpenClaw Project Digest — 2026-05-28

## 1. Today's Overview

OpenClaw shows **very high development velocity** with 382 issues and 500 PRs active in the last 24 hours, indicating a mature project with substantial maintenance burden. The project released **v2026.5.26** today with significant Gateway performance improvements, though the release appears to have introduced regressions around native hook relay availability and Docker stability that are driving urgent community reports. With 175 open/active issues against 207 closed, the team is slightly behind on closure rate, while PRs show a healthier 231 merged/closed versus 269 open. The community is particularly vocal about Windows beta stability, session isolation failures, and authentication routing edge cases in the 5.26 release cycle.

---

## 2. Releases

### [v2026.5.26](https://github.com/openclaw/openclaw/releases/tag/v2026.5.26) (stable)
**Released:** 2026-05-26/27

**Highlights:**
- **Faster Gateway and replies:** Startup avoids repeated plugin, channel, session, usage-cost, warning, scheduled-service, and filesystem scans
- **Visible replies optimization:** Separates user-facing sends from slower follow-up work
- **Gateway runtime/session caches:** Reduced churn under load

**Known issues from community:** Native hook relay intermittently unavailable ([#87395](https://github.com/openclaw/openclaw/issues/87395)), Docker container breakage post-upgrade ([#87302](https://github.com/openclaw/openclaw/issues/87302)), Telegram plugin-state cap hit ([#87357](https://github.com/openclaw/openclaw/issues/87357))

### [v2026.5.26-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.5.26-beta.2)
Same changelog as stable; likely a pre-release tag for the same commit.

---

## 3. Project Progress

### Merged/Closed PRs Today (notable)

| PR | Author | Summary | Impact |
|---|---|---|---|
| [#87374](https://github.com/openclaw/openclaw/pull/87374) | TurboTheTurtle | fix(diagnostics): clear stale session activity | Resolves stuck-session recovery gaps |
| [#87457](https://github.com/openclaw/openclaw/pull/87457) | IWhatsskill | [AI-assisted] fix(nostr): keep DM subscriptions alive until abort | Fixes [#53858](https://github.com/openclaw/openclaw/issues/53858) Nostr restart loop |
| [#87149](https://github.com/openclaw/openclaw/pull/87149) | eleqtrizit | fix(qqbot): validate direct media upload urls | Security boundary + compatibility |
| [#87458](https://github.com/openclaw/openclaw/pull/87458) | steipete | perf: dedupe persisted skill prompts | Large memory/perf improvement |
| [#87449](https://github.com/openclaw/openclaw/pull/87449) | yetval | fix(mattermost): preserve text-block boundaries in draft preview | Message delivery fix |
| [#87452](https://github.com/openclaw/openclaw/pull/87452) | steipete | fix(discord): backport recovered tool warning suppression | UX polish |
| [#85572](https://github.com/openclaw/openclaw/pull/85572) | giodl73-repo | Policy: add sandbox posture conformance checks | Security hardening |
| [#87456](https://github.com/openclaw/openclaw/pull/87456) | VACInc | Restore Codex Spark OAuth routes | Auth provider compatibility |
| [#87453](https://github.com/openclaw/openclaw/pull/87453) | moeedahmed | fix(plugin-state): preserve fresh writes at plugin cap | Telegram stability |
| [#87425](https://github.com/openclaw/openclaw/pull/87425) | giodl73-repo | fix(telegram): preserve /usage footer for tool-only replies | UX fix |

### Advanced Features
- **Goal session continuation** ([#85723](https://github.com/openclaw/openclaw/pull/85723)): New `/goal` command suite for structured task management
- **Runtime state SQLite migration** ([#81402](https://github.com/openclaw/openclaw/pull/81402)): Major refactor moving from scattered JSON/lock files to SQLite — *reopened after revert, high risk*

---

## 4. Community Hot Topics

| Item | Comments | Reactions | Analysis |
|---|---|---|---|
| [#48183](https://github.com/openclaw/openclaw/issues/48183) Feishu monitor state cleanup — memory leak | 17 | 0 | **Long-standing P2** with `clawsweeper:no-new-fix-pr`; enterprise Feishu deployments at risk. Underlying need: reliable resource lifecycle management in plugin monitors. |
| [#86702](https://github.com/openclaw/openclaw/issues/86702) MemoryIndexManager.close() race condition | 13 | 1 | **Closed** — race between embedding provider shutdown and in-flight sync. Underlying need: graceful degradation of memory services. |
| [#80380](https://github.com/openclaw/openclaw/issues/80380) Upgrade to gemini-3.1-flash-lite GA | 13 | 4 | **Popular enhancement** — users want stable model versions, not previews. Clear signal for model provider maintenance cadence. |
| [#86599](https://github.com/openclaw/openclaw/issues/86599) Windows beta: local model blocks event loop ~4min | 13 | 1 | **P1 beta blocker** — Windows platform parity critical for adoption. Underlying need: non-blocking I/O for local inference. |
| [#87331](https://github.com/openclaw/openclaw/issues/87331) 5.26 regression: "Native hook relay unavailable" | 11 | 8 | **Just closed** — high engagement indicates widespread impact. UUID staleness in relay re-registration. |

**Emerging pattern:** Native hook relay system (Codex integration) is fragile across releases — multiple related issues suggest architectural tension.

---

## 5. Bugs & Stability

### Critical/P1 (Beta Blockers / Crash-Loop Risks)

| Issue | Severity | Status | Fix PR? | Details |
|---|---|---|---|---|
| [#86599](https://github.com/openclaw/openclaw/issues/86599) Windows local model blocks gateway event loop | **P1** | Open | No | 4-minute inference hangs; `clawsweeper:needs-info` |
| [#86508](https://github.com/openclaw/openclaw/issues/86508) EmbeddedAttemptSessionTakeoverError (Discord) | **P1** | Open | No | Session file contention; `clawsweeper:needs-live-repro` |
| [#84903](https://github.com/openclaw/openclaw/issues/84903) Single stalled session blocks entire Gateway | **P1** | Open | No | **Isolation failure** — architectural concern |
| [#87016](https://github.com/openclaw/openclaw/issues/87016) Preflight compaction deadlock | **P1** | Open | No | Bot bounce loop after empty session edge case |
| [#87395](https://github.com/openclaw/openclaw/issues/87395) Native hook relay unavailable (5.26) | **P1** | Open | No | Intermittent; blocks memory/filesystem tools |

### P1 Regressions (Recently Closed)

| Issue | Fix Status | Notes |
|---|---|---|
| [#87331](https://github.com/openclaw/openclaw/issues/87331) Native hook relay UUID staleness | **Fixed** in release? | Closed rapidly |
| [#87317](https://github.com/openclaw/openclaw/issues/87317) Codex PreToolUse hook relay unavailable | **Closed** | Related to above |
| [#87302](https://github.com/openclaw/openclaw/issues/87302) Docker broken after 5.26 upgrade | **Closed** | Rapid fix expected |
| [#87357](https://github.com/openclaw/openclaw/issues/87357) Telegram plugin-state cap | **Closed** | [#87332](https://github.com/openclaw/openclaw/issues/87332) root cause also fixed |

### P2 Stability Issues

| Issue | Theme |
|---|---|
| [#48183](https://github.com/openclaw/openclaw/issues/48183) | Feishu memory leak |
| [#73148](https://github.com/openclaw/openclaw/issues/73148) | Image tool fails without `sharp` — poor error messaging |
| [#75378](https://github.com/openclaw/openclaw/issues/75378) | Gateway event loop saturation on subagent spawn |

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Version |
|---|---|---|
| [#86881](https://github.com/openclaw/openclaw/issues/86881) **Gateway-lite mode** without AI harness | High — deterministic deployments, webhooks, cron only | **Moderate** — large architectural change; aligns with "gateway-lite" deployment trends |
| [#34400](https://github.com/openclaw/openclaw/issues/34400) Recursive `memory_search` (`memory/**/*.md`) | Medium — daily memory file organization | **High** — small scope, clear use case, community demand |
| [#10142](https://github.com/openclaw/openclaw/issues/10142) `session:end` internal hook event | Medium — Temporal/workflow orchestration integration | **Moderate** — hooks system exists, just needs extension |
| [#80380](https://github.com/openclaw/openclaw/issues/80380) gemini-3.1-flash-lite GA upgrade | High — model deprecation pressure | **Very High** — trivial config change, time-sensitive |
| [#87362](https://github.com/openclaw/openclaw/issues/87362) Task flow lifecycle hook events | Medium — plugin observability | **Moderate** — builds on existing internal system |

**Signal:** Multiple requests for lighter deployments and better observability hooks suggest OpenClaw is being used in production orchestration contexts beyond interactive chat.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|---|---|---|
| **Windows second-class support** | [#86599](https://github.com/openclaw/openclaw/issues/86599) 4-min hangs, local model path issues | High |
| **Session isolation failures** | [#84903](https://github.com/openclaw/openclaw/issues/84903), [#85913](https://github.com/openclaw/openclaw/issues/85913), [#86508](https://github.com/openclaw/openclaw/issues/86508) | **Critical** — one bad session kills gateway |
| **Auth/OAuth routing fragility** | [#86820](https://github.com/openclaw/openclaw/issues/86820), [#81249](https://github.com/openclaw/openclaw/issues/81249), [#83425](https://github.com/openclaw/openclaw/issues/83425), [#84604](https://github.com/openclaw/openclaw/issues/84604) | High — upgrade migrations painful |
| **Opaque error messages** | [#73148](https://github.com/openclaw/openclaw/issues/73148) "Failed to optimize image", [#86599](https://github.com/openclaw/openclaw/issues/86599) no clear Windows diagnostics | Moderate |
| **Plugin-state limits** | [#87357](https://github.com/openclaw/openclaw/issues/87357), [#87332](https://github.com/openclaw/openclaw/issues/87332) Telegram 1000-row cap | Moderate — hit suddenly at scale |

### Positive Signals
- **Release cadence appreciated:** Users tracking beta closely
- **AI-assisted contributions:** Multiple PRs marked "AI-assisted" or "Claude Code" — community embracing AI-native development workflow
- **Rich plugin ecosystem:** 15+ channel integrations actively maintained

---

## 8. Backlog Watch

### Long-Unanswered Important Items

| Issue/PR | Age | Status | Risk |
|---|---|---|---|
| [#48183](https://github.com/openclaw/openclaw/issues/48183) Feishu memory leak | ~2.5 months | Open, `no-new-fix-pr` | Memory pressure in long-running Feishu deployments |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) A2A sessions_send duplicate messages | ~2.5 months | Open, `queueable-fix` | Agent-to-agent protocol reliability |
| [#75378](https://github.com/openclaw/openclaw/issues/75378) Gateway event loop saturation | ~4 weeks | Open | Production scalability ceiling |
| [#75621](https://github.com/openclaw/openclaw/issues/75621) Duplicate MCP child processes | ~4 weeks | Open | Resource leak |
| [#73182](https://github.com/openclaw/openclaw/issues/73182) Claude reasoning default flipped | ~4 weeks | Open | **Cost impact** — doubles Anthropic spend silently |
| [#81402](https://github.com/openclaw/openclaw/pull/81402) Runtime state → SQLite | ~2 weeks | Open, XL size, needs proof | **High-risk refactor** — blocked on verification, previous revert |
| [#62682](https://github.com/openclaw/openclaw/pull/62682) Terminal aborts vs retryable failures | ~7 weeks | Open | Reliability semantics |

### PRs Ready for Maintainer Review (👀 status)

| PR | Risk Level | Topic |
|---|---|---|
| [#87149](https://github.com/openclaw/openclaw/pull/87149) | 🚨 security-boundary + compatibility | QQBot media URL validation |
| [#85572](https://github.com/openclaw/openclaw/pull/85572) | 🚨 security-boundary | Sandbox posture conformance |
| [#85744](https://github.com/openclaw/openclaw/pull/85744) | 🚨 compatibility | Ingress channel conformance |
| [#87074](https://github.com/openclaw/openclaw/pull/87074) | 🚨 compatibility | Reject unsupported policy keys |

---

## Health Assessment

| Metric | Status |
|---|---|
| **Development velocity** | 🟢 Very high (882 items/24h) |
| **Issue closure rate** | 🟡 Slightly behind (46% open) |
| **PR merge rate** | 🟢 Healthy (46% merged/closed) |
| **Release stability** | 🔴 5.26 regressions active — hook relay, Docker, plugin-state |
| **Community engagement** | 🟢 Very high (detailed reports, AI-assisted PRs) |
| **Security posture** | 🟡 Active hardening in progress, some critical backlog |

**Recommendation:** The 5.26 release needs a rapid 5.26.1 or 5.27 patch focusing on native hook relay reliability, Windows event loop isolation, and plugin-state eviction. The runtime state SQLite refactor (#81402) should not merge until 5.26 stabilizes.

---

## Cross-Ecosystem Comparison

# AI Agent Open-Source Ecosystem Cross-Project Comparison Report

**Date:** 2026-05-28  
**Prepared for:** Technical decision-makers and developers evaluating the AI agent open-source landscape

---

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is experiencing **unprecedented velocity**, with all tracked projects showing daily active development. The landscape is bifurcating into two distinct tiers: **mature, high-maintenance platforms** (OpenClaw, ZeroClaw, Hermes Agent) carrying substantial architectural debt from rapid growth, and **leaner, focused projects** (NanoBot, PicoClaw, NullClaw, Moltis) iterating on specific capabilities with lower overhead. A common theme across all projects is the tension between **Anthropic-centric architectures** and community demand for multi-provider flexibility, with DeepSeek and OpenAI Codex compatibility emerging as flashpoints. Production deployment patterns—multi-tenancy, session persistence, memory management, and platform isolation—dominate the conversation, signaling a shift from experimental to operational use cases. The ecosystem is also seeing the emergence of **protocol standardization efforts** (MCP, GitAgent Protocol) and **third-party ecosystem growth** (desktop clients, WebUIs, managed hosting), indicating maturation beyond single-project silos.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Latest Release | Release Health | Community Engagement | Overall Health |
|---------|:-----------:|:---------:|:--------------:|:--------------:|:------------------:|:-------------:|
| **OpenClaw** | 382 (51% open) | 500 (46% open) | v2026.5.26 (May 26) | 🔴 Regressions active | 🟢 Very high (AI-assisted PRs) | 🟡 High velocity, stability concerns |
| **NanoBot** | 5 | 22 (73% open) | v0.2.0 (prior) | 🟡 Timeout regression | 🟢 Active, well-scoped | 🟡 Review bottleneck |
| **Hermes Agent** | 50 | 50 (88% open) | v0.14.0 (May 16) | 🔴 Multiple regressions | 🟢 Vocal community | 🔴 Low merge velocity, P1 data loss |
| **PicoClaw** | 4 | 6 (86% open) | v0.2.9 (prior) | ⚪ Nightly only | 🟡 Small but engaged | 🟡 Growing backlog |
| **NanoClaw** | 1 | 9 (56% open) | None in period | 🟡 Provider lock-in gap | 🟢 60👍 issue closed | 🟡 PR hygiene issues |
| **NullClaw** | 3 | 4 (50% open) | None in period | 🟢 Recent wins | 🟢 Responsive triage | 🟢 Stable, focused |
| **IronClaw** | 28 (82% open) | 50 (42% open) | None in period | 🟢 High throughput | 🟢 Core team active | 🟢 Excellent, migration phase |
| **LobsterAI** | 2 | 23 (78% open) | 2026.5.27 (May 27) | 🟢 Media gen launch | 🟡 3-week maintainer silence | 🟡 Stale PR bottleneck |
| **CoPaw** | 40 | 26 (42% open) | v1.1.9 (May 28) | 🔴 Desktop regressions | 🟢 First-time contributors | 🟡 Major release corrections |
| **Moltis** | 3 | 2 (0% open) | None in period | 🟢 Memory improvements | 🟢 Partnership inquiry | 🟢 Steady, low-volume |
| **TinyClaw** | 0 | 0 | N/A | N/A | N/A | ⚪ Inactive |
| **ZeptoClaw** | 0 | 0 | N/A | N/A | N/A | ⚪ Inactive |

**Key Insight:** OpenClaw's raw volume (882 items/24h) dwarfs all peers, but its issue closure rate (46% open) and active regressions indicate **maintenance debt commensurate with scale**. Hermes Agent's 88% open PR rate is the most concerning in the ecosystem, suggesting a serious review capacity crisis. IronClaw, despite a major architecture migration, maintains the healthiest PR throughput (58% merged/closed).

---

## 3. OpenClaw's Position

### Competitive Advantages

| Dimension | OpenClaw | Peers | Delta |
|-----------|----------|-------|-------|
| **Channel ecosystem** | 15+ integrations actively maintained | Average: 5-8 integrations | **2-3x broader** |
| **Community contributors** | AI-assisted PRs (Claude Code) | Manual contributions dominant | **First-mover in AI-native dev** |
| **Release cadence** | Multiple releases/month | 1-2 months typical | **5-10x faster** |
| **Plugin/skill marketplace** | Mature, with conformance checks | Ad-hoc or absent | **Only mature ecosystem** |
| **Tool security** | Sandbox posture conformance (#85572) | Basic allowlist models | **More mature security** |
| **Issue volume** | 382/day | Average: 10-50/day | **7-38x more community signal** |

### Technical Architecture Differences

- **Gateway-first design:** OpenClaw's session isolation and event-driven gateway is more production-oriented than NanoBot's simpler request-response model or Hermes' per-profile process architecture.
- **Plugin framework:** OpenClaw's plugin-state management (with known caps #87357) is more complex than peers, enabling richer integrations at the cost of maintenance surface.
- **Memory system:** While multiple projects (NanoBot, Hermes) are refactoring memory subsystems, OpenClaw's SQLite migration (#81402) represents the most ambitious data-layer modernization, albeit with high risk (previous revert).

### Community Size Comparison

| Metric | OpenClaw | Nearest Peer | Ratio |
|--------|----------|-------------|:-----:|
| Daily issue/PR volume | 882 | IronClaw: 78 | **11.3x** |
| Open PRs | 269 | IronClaw: 21 | **12.8x** |
| High-traffic issues (>10 reactions) | 5+ | All others: 0-2 each | **2.5-5x** |
| Distinct contributors (24h) | 15+ | Average: 3-6 | **3-5x** |

**Verdict:** OpenClaw is the undisputed **ecosystem anchor project** by every measure of scale, but this scale introduces unique challenges—release stability (5.26 regressions), maintainer burnout risk, and architectural lock-in pressure—that smaller peers can avoid.

---

## 4. Shared Technical Focus Areas

### Top 5 Cross-Project Requirements

| Focus Area | Affected Projects | Specific Needs |
|-----------|------------------|----------------|
| **Multi-Provider Support** | NanoClaw (#80), NullClaw (#936), ZeroClaw (#6059), IronClaw (#3436), OpenClaw (#80380) | DeepSeek-V4 compatibility, Gemini GA upgrade, OpenAI streaming format changes. **Community views Anthropic lock-in as existential risk.** |
| **Session Isolation & Multi-Tenancy** | OpenClaw (#84903), Hermes Agent (#9514), CoPaw (#4653), NanoBot (#3885) | One-bad-session-gateway issue, per-user/per-topic agent isolation, cron-session conflict. **Production deployment blocker.** |
| **Memory/Context Management** | Hermes Agent (#8457), CoPaw (#4652), Moltis (#1074), NanoBot (#3990), LobsterAI (#1499) | Cross-session memory, automatic summarization, context window pruning, configurable embeddings. **Memory as first-class subsystem.** |
| **Windows Platform Parity** | OpenClaw (#86599), NullClaw (#890), PicoClaw (#2954), CoPaw (#4724) | Event loop blocking, hostname resolution, 32-bit Android support, desktop build fixes. **Second-class Windows experience persists.** |
| **Auth/OAuth Infrastructure** | OpenClaw (native hooks), IronClaw (#4111), ZeroClaw (#6978), Hermes Agent (#33502) | GSuite OAuth, secret leakage in config, routing fragility, token refresh lifecycle. **Enterprise auth expectations rising.** |

### Emerging Cross-Cutting Themes

- **WebUI ecosystem demand:** NanoBot (community `nanobot-webui`, 10👍), IronClaw (desktop client blocked by missing endpoints), ZeroClaw (WebSocket agent param bug), OpenClaw (WebUI improvements)—all projects face pressure for visual management interfaces.
- **Protocol standardization impulses:** MCP notifications (NanoBot, PicoClaw, ZeroClaw), GitAgent Protocol (NanoBot, 3 attempts), "Everything is a plugin" (ZeroClaw #6489)—the ecosystem is converging on interoperability standards.
- **AI-native contribution workflows:** OpenClaw explicitly tags "AI-assisted" PRs; multiple projects accept Claude Code contributions. This is a **structural advantage** for velocity that smaller projects could leverage.

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architectural Distinction | Key Trade-off |
|---------|--------------|-------------|--------------------------|---------------|
| **OpenClaw** | Universal AI gateway | Power users, teams, enterprise | Plugin ecosystem, 15+ channels, sandbox security | Scale + complexity = maintenance burden |
| **NanoBot** | Extensible agent framework | Developers, integrators | MCP-native, GitAgent Protocol interest | Leaner but fewer integrations |
| **Hermes Agent** | Personal productivity | Individual power users | Per-profile process model | Simplicity → scaling ceiling |
| **ZeroClaw** | Secure enterprise agent | Security-conscious orgs | Defense-in-depth, IPv6, observability | Heavy configuration surface |
| **IronClaw** | Multi-protocol agent | Developers, NEAR ecosystem | "Reborn" architecture migration | Transition risk |
| **CoPaw** | Desktop-native assistant | Chinese-market users | Tauri desktop app, Coding Mode, Chinese providers | Desktop focus limits headless/cloud use |
| **PicoClaw** | Lightweight edge agent | Mobile/edge users | pico WebSocket, QQ channel, 32-bit relevance | Niche platform constraints |
| **NanoClaw** | Lightweight Claude Code alternative | Anthropic power users | Tight Claude integration | Provider lock-in (#80 closure) |
| **NullClaw** | Minimalist agent runtime | Zig enthusiasts | Zig toolchain, POSIX emphasis | Performance optimization focus |
| **LobsterAI** | Content creation agent | Chinese content creators | Media generation (Kling, Douyin), Kit marketplace | Stale PRs, paid tier friction |
| **Moltis** | Modular orchestration | Integrators | OpenAI-compatible provider extensibility | Low activity, small community |

### Architecture Spectrum

```
Minimalist ←------------------------------→ Feature-Complete
    NullClaw    NanoClaw    PicoClaw    Moltis    NanoBot    IronClaw    CoPaw    Hermes    ZeroClaw    OpenClaw
    Zig/toolchain  Claude-lite  Edge WebSocket  Provider extensibility  MCP-native  Multi-protocol  Desktop+Tauri  Personal  Security-hardened  Everything-channels
```

---

## 6. Community Momentum & Maturity

### Activity Tiers

| Tier | Projects | Characteristics | Velocity Direction |
|:----:|----------|----------------|-------------------|
| **Tier 1: Very High** | OpenClaw, ZeroClaw, IronClaw | 50-500 PRs/day, 3+ core contributors active daily, releases within 1-2 weeks | 🟢 Sustained but at stability cost |
| **Tier 2: High** | CoPaw, LobsterAI, Hermes Agent | 20-50 PRs/day, periodic releases, active but bottlenecked | 🟡 Positive churn but review constrained |
| **Tier 3: Moderate** | NanoBot, PicoClaw | 5-20 PRs/day, focused scope, growing | 🟢 Healthy trajectory |
| **Tier 4: Low/Steady** | NullClaw, NanoClaw, Moltis | <10 PRs/day, targeted fixes | 🟢 Stable, low noise |
| **Tier 5: Inactive** | TinyClaw, ZeptoClaw | 0 activity | 🔴 Stalled |

### Maturity Indicators

| Project | Release Cadence | PR Merge Rate | Issue Response | Security Hardening | Docs Quality |
|---------|:--------------:|:-------------:|:--------------:|:-----------------:|:-----------:|
| **OpenClaw** | 🟢 Weekly | 🟡 54% | 🟢 Same-day triage | 🟢 Active conformance checks | 🟡 Docs gaps |
| **ZeroClaw** | 🟡 Bi-weekly | 🟢 58% | 🟢 Same-day fix PRs | 🟢 Defense-in-depth | 🟡 TUI setup docs |
| **IronClaw** | 🔴 No release in period | 🟢 58% | 🟢 Core team daily | 🟢 Credential masking | 🟡 Migration docs |
| **CoPaw** | 🟢 Same-day (v1.1.9) | 🟡 58% | 🟢 First-time contributors | 🟡 Regressions active | 🟢 Release notes |
| **Hermes Agent** | 🟢 Monthly | 🔴 12% | 🟡 Slow on P1 bugs | 🟡 P1 data loss open | 🟡 Unknown |
| **NanoBot** | 🔴 No release in period | 🟡 27% | 🟢 Active PR discussions | 🟢 Timeout fixes | 🟡 Unknown |

### Which Projects Are Iterating vs. Stabilizing?

- **Rapidly iterating (pre-release/alpha phase):** IronClaw (Reborn migration), ZeroClaw (v0.8-beta corrections), CoPaw (v1.1.9 launch corrections)
- **Stabilizing after growth:** OpenClaw (5.26 patch needed), Hermes Agent (v0.14.0 regressions)
- **Steady-state maintenance:** NullClaw, NanoClaw, Moltis
- **Re-architecture phase:** NanoBot (Dream memory system, MCP stability), PicoClaw (streaming infrastructure)

---

## 7. Trend Signals for AI Agent Developers

### 1. Production Multi-Tenancy Is the #1 Unmet Need

Across OpenClaw, Hermes, CoPaw, and NanoBot, the single most demanded feature is **running multiple agents without multiple processes**. Current architectures impose linear resource scaling (one gateway/process per agent), which is unsustainable for personal+work use cases or small teams. **Opportunity:** Projects that ship namespaced multi-agent gateways first will capture the "prosumer" market.

### 2. Anthropic Lock-In Anxiety Is Real and Growing

NanoClaw's #80 (60👍, closed without implementation) and ZeroClaw's #6059 (34 days unfixed for DeepSeek-V4) reveal that **users view any single-provider dependency as a business continuity risk**. The community is actively seeking "escape hatches" from Anthropic-specific APIs. **Signal:** OpenAI-compatible providers (Novita AI, vLLM, Ollama) and native OpenAI Codex support are becoming table stakes, not differentiators.

### 3. Memory Systems Are Becoming First-Class Subsystems

NanoBot's Dream refactoring, Hermes' persistent memory request (#8457), CoPaw's "summarize-index-remind" proposal (#4652), and Moltis' configurable embeddings (#1074) all point to **memory evolving from chat history to structured knowledge infrastructure**. The next frontier: cross-session memory, automatic summarization, and context window optimization for long-running agents.

### 4. AI-Native Development Workflows Are Accelerating

OpenClaw's explicit "AI-assisted" PRs (Claude Code) and NanoBot's PRs tagged with AI tooling signal a **structural shift in how open-source contributions happen**. This is both an opportunity (higher contribution velocity) and a risk (quality inconsistency, review bottlenecks). Projects that integrate AI code review into their CI pipelines will have a competitive advantage.

### 5. Desktop + WebUI Convergence Is Inevitable

CoPaw's Tauri desktop app (v1.1.9), IronClaw's blocked desktop client endpoints (#4150-#4153), NanoBot's community WebUI, and ZeroClaw's WebSocket/Canvas issues all point to a **convergence on hybrid desktop-web architectures**. Pure CLI/headless agents are insufficient for mainstream adoption. The standard stack emerging: Tauri 2.x or Electron for desktop + WebSocket-based real-time UI + managed authentication.

### 6. Security Hardening Is Shifting from "Optional" to "Default"

ZeroClaw's defense-in-depth approach (allowed_tools enforcement, private host allowlists, secret redaction), OpenClaw's sandbox posture checks (#85572), and Hermes' per-user isolation requests (#21574) indicate that **enterprise security expectations are becoming baseline requirements**, even for open-source projects. The prompt injection risk (anecdotally demonstrated in #21574) is driving demand for identity-based access control and tool-level permission boundaries.

### 7. Chinese-Language Agent Market Is a Distinct Ecosystem

CoPaw (full Chinese UI/community), LobsterAI (NetEase-backed, Chinese providers), and PicoClaw (QQ-first) demonstrate a **parallel ecosystem with different platform priorities** (WeChat, Feishu, DingTalk, Douyin) and different model preferences (Qwen, DeepSeek, MiniMax, GLM). The Chinese community is highly engaged but operates with less overlap with the English-language ecosystem, suggesting opportunities for cross-pollination.

---

## Summary for Decision-Makers

| If You Need... | Consider... | Because... |
|----------------|------------|------------|
| **Maximum integration breadth + community** | **OpenClaw** | 15+ channels, 882 items/day velocity, richest plugin ecosystem—but prepare for release regressions |
| **Security-first production deployment** | **ZeroClaw** | Defense-in-depth architecture, IPv6, OTel observability—but heavier config surface |
| **Desktop-native experience** | **CoPaw** | Tauri 2.x app, Coding Mode IDE, Chinese market strengths—but Windows regressions |
| **Multi-provider flexibility** | **NanoBot** | MCP-native, active provider contributions, responsive community—but review bottleneck |
| **Minimalist, high-performance agent** | **NullClaw** | Zig-based, POSIX-optimized, low maintenance surface—but few integrations |
| **Content creation pipeline** | **LobsterAI** | Media generation (Kling, Douyin), Kit marketplace—but stale PR backlog |
| **Lightweight edge deployment** | **PicoClaw** | Mobile/Android support, pico WebSocket—but niche platform constraints |

**Bottom line:** No single project dominates all dimensions. OpenClaw has the ecosystem, ZeroClaw has the security posture, CoPaw has the desktop experience, and NanoBot has the protocol agility. The next 6 months will likely see **consolidation around protocols (MCP, GAP)** and **differentiation around memory systems and multi-tenancy architectures** as the key competitive battlegrounds.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-28

## 1. Today's Overview

NanoBot shows **high development velocity** with 22 PRs and 5 issues updated in the last 24 hours, indicating an active, well-maintained project. The community is driving significant architectural work around **MCP (Model Context Protocol) reliability**, **memory system refactoring**, and **protocol standardization** (GitAgent Protocol). However, the high ratio of open PRs (16 vs. 6 merged/closed) suggests a potential bottleneck in maintainer review capacity. Notably, three duplicate/closed GitAgent Protocol PRs indicate some coordination friction in community contributions.

---

## 2. Releases

**No new releases** — Version 0.2.0 remains the latest published release (released prior to this period).

---

## 3. Project Progress

### Merged/Closed PRs (6 items)

| PR | Author | Summary | Significance |
|:---|:---|:---|:---|
| [#4014](https://github.com/HKUDS/nanobot/pull/4014) | bjoshuanoah | MCP `tools/list_changed` notification support | **MCP ecosystem maturity** — dynamic tool reloading without connection drops |
| [#4012](https://github.com/HKUDS/nanobot/pull/4012) | bjoshuanoah | MCP reconnection bug fix — reset `_mcp_connected`, add reconnect callbacks | **Critical stability fix** for production MCP deployments |
| [#4026](https://github.com/HKUDS/nanobot/pull/4026) | msareposar | Add GitHub CLI (`gh`) and `gogcli` to Dockerfile | Expanded container tooling for GitHub/Google Workspace integrations |
| [#4018](https://github.com/HKUDS/nanobot/pull/4018) | yeounhyeok | Honor `NANOBOT_STREAM_IDLE_TIMEOUT_S` in Codex provider | **Consistency fix** — eliminates hardcoded 60s timeout, aligns with other providers |
| [#4024](https://github.com/HKUDS/nanobot/pull/4024) | computer-agent | *[Duplicate/Closed]* GitAgent Protocol support | Closed in favor of #4030 |
| [#4005](https://github.com/HKUDS/nanobot/pull/4005) | shreyas-lyzr | *[Invalid/Closed]* GitAgent Protocol support | Closed; superseded by later attempts |

**Key advancement**: MCP infrastructure is rapidly stabilizing with both notification handling and reconnection resilience landing. The Codex provider timeout fix addresses a configuration parity gap.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#1922](https://github.com/HKUDS/nanobot/issues/1922) — `nanobot-webui` community project | **10 comments, 10 👍**, closed 2026-05-27 | **Ecosystem maturity signal**: Third-party WebUI (`Good0007/nanobot-webui`) demonstrates strong community demand for visual management. The issue's closure suggests maintainer acknowledgment rather than core adoption. |
| [#3885](https://github.com/HKUDS/nanobot/issues/3885) — Global kill-switch for Dream system | 4 comments, active discussion | **Governance/control need**: Users want fine-grained control over background memory processes. The proposed `enabled: false` config reflects operational concerns about unwanted cron registration. |
| [#4030](https://github.com/HKUDS/nanobot/pull/4030) — GitAgent Protocol (GAP) support | Fresh PR, 3rd attempt | **Standardization push**: Multiple contributors (computer-agent, shreyas-lyzr) independently proposing GAP indicates external ecosystem interest in NanoBot as a reference implementation. |

**Underlying needs**: (1) **Official WebUI** — community filling gap with unofficial solution; (2) **Operational control** — users need to disable subsystems without hacky workarounds; (3) **Agent portability** — NanoBot's architecture makes it attractive for protocol standardization.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **High** | [#4013](https://github.com/HKUDS/nanobot/issues/4013) — "stream stalled for more than 90 seconds" | **Regression in v0.2.0**: Codex provider hardcodes 90s timeout, breaking long-running local LLM workloads (LM Studio, Ollama). User reports "renders any real work useless." | **Fix PRs open**: [#4018](https://github.com/HKUDS/nanobot/pull/4018) (closed, Codex-specific), [#4020](https://github.com/HKUDS/nanobot/pull/4020) (open, per-provider configurable timeout) |
| 🔴 **High** | [#4012](https://github.com/HKUDS/nanobot/pull/4012) / [#4027](https://github.com/HKUDS/nanobot/pull/4027) — MCP reconnection failure | `_mcp_connected` never resets after session drop; dead sessions invisible to connection manager | **Fixed in #4012**; #4027 open for additional review |
| 🟡 **Medium** | [#4021](https://github.com/HKUDS/nanobot/pull/4021) — Duplicate reasoning items in Codex | `400 Duplicate item found with id rs_…` breaks multi-turn conversations | **Fix PR open** — dedup pass before send + retry logic |
| 🟡 **Medium** | [#4011](https://github.com/HKUDS/nanobot/pull/4011) — Orphan tool results in session history | Stale `role: "tool"` messages rehydrate without matching `tool_call_id` | **Fix PR open** |
| 🟡 **Medium** | [#4017](https://github.com/HKUDS/nanobot/pull/4017) — Text-format tool_calls parsing | Xiaomi MiMo provider emits tool calls as plain text, not structured `tool_calls` | **Fix PR open** |
| 🟡 **Medium** | [#4025](https://github.com/HKUDS/nanobot/pull/4025) — Unprocessed history entries vulnerable to compaction | Data loss risk for pending memory operations | **Fix PR open** |

**Critical concern**: The v0.2.0 stream timeout regression (#4013) is actively blocking users. The per-provider timeout PR (#4020) is the more complete solution versus the closed Codex-specific fix.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **Per-provider stream timeout configuration** | [#4020](https://github.com/HKUDS/nanobot/pull/4020) | **High** | Addresses active regression, clean implementation, community need for local LLM support |
| **Dream system `enabled` toggle** | [#3885](https://github.com/HKUDS/nanobot/issues/3885) | **High** | Simple config change, backward compatible, clear operational demand |
| **Dream-specific model provider override** | [#4029](https://github.com/HKUDS/nanobot/issues/4029) | **Medium** | Natural extension of existing model override work in [#3990](https://github.com/HKUDS/nanobot/pull/3990) |
| **Modular system prompt components** | [#4022](https://github.com/HKUDS/nanobot/pull/4022) | **Medium** | Clean architecture, toggle-based, performance optimization potential |
| **WebUI project workspaces + access controls** | [#4007](https://github.com/HKUDS/nanobot/pull/4007) | **Medium** | Large feature; depends on maintainer prioritization of official vs. community WebUI |
| **DingTalk group user isolation** | [#4016](https://github.com/HKUDS/nanobot/pull/4016) | **Medium** | Enterprise feature, well-scoped, Chinese market relevance |
| **GitAgent Protocol support** | [#4030](https://github.com/HKUDS/nanobot/pull/4030) | **Uncertain** | Third attempt, coordination challenges; may need maintainer decision on protocol adoption strategy |
| **Heartbeat → cron migration** | [#4023](https://github.com/HKUDS/nanobot/pull/4023) | **Medium** | Internal refactoring, reduces infrastructure complexity |

**Architectural direction**: The [#3990](https://github.com/HKUDS/nanobot/pull/3990) Dream refactoring (single-phase consolidation via AgentLoop) represents significant memory system evolution — goal-state lifecycle, session persistence, and model override presets suggest memory is becoming a first-class subsystem.

---

## 7. User Feedback Summary

### Pain Points

| Issue | User Voice | Impact |
|:---|:---|:---|
| **v0.2.0 timeout regression** | "renders any real work useless" | **Workflow blocking** — forces users to downgrade or manually intervene |
| **Dream cron always-on** | "unconditionally registered" despite memory disable | **Operational surprise** — violates principle of least astonishment |
| **WeChat 10-message limit** | "有什么解决方法吗？" | **Platform limitation** — context window fragmentation on popular channel |
| **MCP reconnection failures** | Dead sessions require full restart | **Production reliability** for tool-heavy deployments |

### Positive Signals

- **WebUI ecosystem thriving**: Community-built `nanobot-webui` with 10 👍 validates project extensibility
- **MCP investment paying off**: Rapid fixes for notification handling and reconnection show responsive maintenance
- **Multi-channel depth**: DingTalk, WeChat, Feishu support indicates serious China-market commitment

### Satisfaction/Dissatisfaction Balance

| Satisfied | Dissatisfied |
|:---|:---|
| Extensibility, architecture, open-source | Configuration discoverability (env vars vs. structured config) |
| Multi-provider flexibility | Timeout defaults mismatched to local LLM use cases |
| Active development pace | Review bottleneck (16 open PRs) |

---

## 8. Backlog Watch

### Items Needing Maintainer Attention

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#2772](https://github.com/HKUDS/nanobot/issues/2772) — WeChat 10-message limit | **~8 weeks** (2026-04-03) | Platform capability gap; no documented workaround | Clarify if limit is WeChat API constraint or NanoBot implementation; document or fix |
| [#3990](https://github.com/HKUDS/nanobot/pull/3990) — Dream single-phase consolidation | **4 days**, complex | Large architectural PR; may conflict with #3885/#4029 | Review priority — blocks related Dream configuration work |
| [#4007](https://github.com/HKUDS/nanobot/pull/4007) — WebUI workspaces | **2 days**, large | Competes with community WebUI; strategic decision needed | Decide official WebUI roadmap vs. endorsing community solution |
| GitAgent Protocol PRs (#4005, #4024 closed; #4019, #4030 open) | **3 days** | Community coordination failure; reputation risk | Consolidate to single PR or explicitly decline protocol adoption |

### Review Bottleneck Indicator

**16 open PRs** with 6 closed in 24h suggests ~3:1 ratio. The duplicate GitAgent PRs specifically indicate contributors aren't seeing existing attempts, possibly due to rapid issue turnover or lack of triage labels.

---

*Digest generated from HKUDS/nanobot GitHub activity for 2026-05-28. All links: https://github.com/HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-28

## 1. Today's Overview

Hermes Agent shows **elevated community activity** with 50 issues and 50 PRs updated in the last 24 hours, though merge velocity remains low (only 6 PRs merged/closed versus 44 still open). The project is experiencing **growing pains around multi-tenancy and resource isolation** — multiple highly-commented issues converge on the same architectural limitation: running multiple agents requires multiple gateway processes. A **critical data-loss bug** (#30151) involving Kanban workspace cleanup deleting entire project directories highlights ongoing stability concerns. No new releases were published today, leaving users on v0.14.0 with known regressions. The maintainer bandwidth appears constrained given the backlog of unreviewed PRs and long-standing feature requests.

---

## 2. Releases

**No new releases** — None published today. The latest available version remains **v0.14.0** (released 2026-05-16 per issue #33502). Users are experiencing regressions in this version, including broken `openai-codex` provider (#33502) and vanished custom model configurations after v0.13.0→v0.14.0 upgrade (#25272).

---

## 3. Project Progress

### Merged/Closed PRs Today (3 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#33544](https://github.com/NousResearch/hermes-agent/pull/33544) | Panchux78 | Stabilizes Postgres Kanban gateway + preserves Opus/OGG voice replies on Telegram/WhatsApp | **Production stability** for Postgres-backed deployments; fixes media format regression |
| [#28633](https://github.com/NousResearch/hermes-agent/pull/28633) | JiehoonKwak | Makes `hermes gateway restart --all` atomic on macOS via launchd | Eliminates race condition causing **orphaned services** on macOS |
| [#33011](https://github.com/NousResearch/hermes-agent/issues/33011) | Drpshukla | Codex OAuth `NoneType` iteration crash — **closed as duplicate** | Referenced existing fix pattern |

### Notable Open PRs Advancing

| PR | Author | Feature | Status |
|:---|:---|:---|:---|
| [#33545](https://github.com/NousResearch/hermes-agent/pull/33545) | craigmather | **Platform tool profiles** — reusable named toolsets per platform | Fresh, needs review |
| [#9921](https://github.com/NousResearch/hermes-agent/pull/9921) | adam-tpb | Auto-rename Telegram forum topics on session title change | Long-running PR, updated today |
| [#33202](https://github.com/NousResearch/hermes-agent/pull/33202) | thecybro | Interactive `hermes skills audit` for manual curation | Addresses skill governance gap |
| [#14139](https://github.com/NousResearch/hermes-agent/pull/14139) | cortexuvula | Replace `python-olm` with Rust-backed `fresholm` for Matrix E2EE | Security modernization, 5+ weeks old |

---

## 4. Community Hot Topics

### Highest-Engagement Issues (by comments + reactions)

| Issue | Comments | 👍 | Core Need |
|:---|:---:|:---:|:---|
| [#9514](https://github.com/NousResearch/hermes-agent/issues/9514) — Single-Daemon Multi-Agent with Per-Topic Workspace & Memory Isolation | 11 | 5 | **Resource efficiency**: Eliminate per-agent process overhead; enable lightweight multi-tenancy |
| [#8457](https://github.com/NousResearch/hermes-agent/issues/8457) — Persistent Session Memory with Cross-Session Search & Auto-Compression | 10 | 0 | **Continuity**: Survive gateway restarts without context loss |
| [#10143](https://github.com/NousResearch/hermes-agent/issues/10143) — Topic-to-Profile routing for Telegram | 10 | 0 | **Operational simplicity**: One bot, many specialized agents |
| [#24186](https://github.com/NousResearch/hermes-agent/issues/24186) — Kanban 401 Unauthorized | 9 | 0 | **Auth regression from v0.14.0** |
| [#21574](https://github.com/NousResearch/hermes-agent/issues/21574) — Per-user agent isolation & identity-based permissions | 8 | 0 | **Security**: Prevent prompt injection impersonation (anecdote: girlfriend successfully impersonated user) |

### Underlying Pattern

Issues #9514, #10143, #10452, and #21574 form a **coherent theme**: users want to run **multiple differentiated agents without operational complexity**. The current "one profile = one process" model is unsustainable for personal and small-team deployments. The community is effectively designing a **multi-tenant gateway architecture** through fragmented feature requests.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|:---|:---|:---|:---:|
| **P1 — Critical** | [#30151](https://github.com/NousResearch/hermes-agent/issues/30151) | **Data loss**: Kanban "Scratch Workspace" cleanup recursively deleted entire `~/Projects/` directory | ❌ None |
| **P1 — Critical** | [#25272](https://github.com/NousResearch/hermes-agent/issues/25272) | All custom model configs vanished after v0.13.0 update | ❌ None |
| **P2 — High** | [#24186](https://github.com/NousResearch/hermes-agent/issues/24186) | Kanban 401 Unauthorized after update | ❌ None |
| **P2 — High** | [#31158](https://github.com/NousResearch/hermes-agent/issues/31158) | Kanban dispatcher wedges under concurrency (WAL/SHM cache poisoning) | ✅ **Closed** — fix merged in #33544? |
| **P2 — High** | [#26655](https://github.com/NousResearch/hermes-agent/issues/26655) | Curator uses `skill_manage delete` instead of `mv` to `.archive/` — permanent data loss | ❌ None |
| **P2 — High** | [#33367](https://github.com/NousResearch/hermes-agent/issues/33367) | `terminal_tool` cleanup thread raises recurring `FileNotFoundError` | ❌ None |
| **P2 — High** | [#33502](https://github.com/NousResearch/hermes-agent/issues/33502) | `openai-codex` provider broken after latest image — `NoneType` not iterable | ✅ **#33542** in review |
| **P3 — Medium** | [#32698](https://github.com/NousResearch/hermes-agent/issues/32698) | `web_extract` dead-end error with only SearXNG configured | ❌ None |
| **P3 — Medium** | [#6447](https://github.com/NousResearch/hermes-agent/issues/6447) | `/sethome` writes channel ID to `config.yaml` instead of `.env` | ❌ None (7+ weeks old) |
| **P3 — Medium** | [#33488](https://github.com/NousResearch/hermes-agent/issues/33488) | `hermes kanban dispatch` doesn't pass `max_in_progress` | ❌ None |

### Stability Assessment

**Concerning trend**: Two independent P1 bugs involve **destructive file operations** (#30151, #25272). The Kanban subsystem specifically has **4 active bugs** including data loss, auth failures, and concurrency deadlocks. The v0.14.0 release introduced multiple regressions without rapid point-release mitigation.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Predicted Priority for Next Version | Rationale |
|:---|:---|:---|
| [#9514](https://github.com/NousResearch/hermes-agent/issues/9514) Single-Daemon Multi-Agent | **High** | Most-commented issue; enables cost/ops reduction; aligns with #10143, #10452 |
| [#8457](https://github.com/NousResearch/hermes-agent/issues/8457) Persistent Session Memory | **High** | Foundational for "production-ready" claims; blocks enterprise adoption |
| [#30652](https://github.com/NousResearch/hermes-agent/issues/30652) Dynamic Model Routing | **Medium-High** | Cost optimization narrative; technically orthogonal to existing architecture |
| [#27997](https://github.com/NousResearch/hermes-agent/issues/27997) Declarative Skill Protection | **Medium** | Safety/correctness; scattered enforcement is technical debt |
| [#18092](https://github.com/NousResearch/hermes-agent/issues/18092) GASP Loop (Autonomous Evolution) | **Low-Medium** | Aspirational; depends on #8457 and memory infrastructure |
| [#508](https://github.com/NousResearch/hermes-agent/issues/508) Model-Family-Specific System Prompts | **Medium** | Quality win; referenced Kilocode as proven pattern |

**Emerging architectural direction**: The confluence of multi-agent (#9514), persistent memory (#8457), and per-user isolation (#21574) suggests the project needs a **gateway 2.0 redesign** with proper namespacing, pluggable identity/ACL, and durable state backends.

---

## 7. User Feedback Summary

### Pain Points (verbatim themes)

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Destructive operations without guardrails** | "Cleanup Silently Deleted My Entire Projects Directory" (#30151) | Critical |
| **Configuration fragility** | Custom models vanished on update (#25272); auth misrouted (#24186) | High |
| **Multi-agent operational overhead** | "three separate gateway processes... each eats memory" (#9514) | High |
| **Security theater** | "girlfriend played a very classic prompt injection... instantly work" (#21574) | High |
| **Opaque skill management** | "no version history, no diff capability, no rollback path" (#20352) | Medium |
| **Platform integration gaps** | Telegram topics not synced (#16255), Feishu template cards broken (#33534) | Medium |

### Use Case Evolution

Early adopters appear to be **power users and small teams** running personal + work agents simultaneously. The "one gateway per profile" model, designed for simplicity, has become a **scaling bottleneck**. Users are improvising multi-tenancy with process isolation, but want **first-class support**.

---

## 8. Backlog Watch

### Long-Unanswered Critical Items

| Issue/PR | Age | Blocker | Action Needed |
|:---|:---|:---|:---|
| [#9514](https://github.com/NousResearch/hermes-agent/issues/9514) Multi-Agent | 6+ weeks | Architecture decision | RFC response from maintainers |
| [#8457](https://github.com/NousResearch/hermes-agent/issues/8457) Persistent Memory | 6+ weeks | Storage backend design | Core team prioritization |
| [#508](https://github.com/NousResearch/hermes-agent/issues/508) Model-Specific Prompts | 11+ weeks | No maintainer engagement | Close or roadmap |
| [#14139](https://github.com/NousResearch/hermes-agent/pull/14139) fresholm Matrix | 5+ weeks | Security review | E2EE modernization |
| [#6447](https://github.com/NousResearch/hermes-agent/issues/6447) /sethome config bug | 7+ weeks | Trivial fix unmerged | Community PR welcome? |

### Maintainer Attention Required

- **#30151 (P1 data loss)**: No assignee, no fix PR — potential CVE-class issue
- **#25272 (P1 config loss)**: Regression from v0.13.0→v0.14.0, no point release
- **#33502/#33011 (Codex/NoneType)**: Duplicate reports suggest fix #33542 should be expedited

---

*Digest generated from 50 issues and 50 PRs updated 2026-05-27/28. All links reference `https://github.com/NousResearch/hermes-agent`.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-28

## 1. Today's Overview

PicoClaw shows **active development momentum** with 10 items updated in the last 24 hours (4 issues, 6 PRs) and a fresh nightly build. The project appears healthy with consistent community engagement, though the high open-to-closed ratio (9 open vs. 1 merged/closed) suggests a growing review backlog. A critical streaming bug fix was merged today, while several channel stability and security improvements remain in queue. The project is iterating rapidly on its pico WebSocket channel and MCP (Model Context Protocol) integrations.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| [v0.2.9-nightly.20260527.28ec5793](https://github.com/sipeed/picoclaw/compare/v0.2.9...main) | Nightly | Automated build from `main`; **unstable, use with caution**. No formal changelog; compare [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main) for commits since last stable. |

> ⚠️ **No stable release** since v0.2.9. Community issue [#2952](https://github.com/sipeed/picoclaw/issues/2952) explicitly requests a new stable release.

---

## 3. Project Progress

### Merged/Closed Today

| PR | Author | Summary |
|----|--------|---------|
| [#2853](https://github.com/sipeed/picoclaw/pull/2853) | [loafoe](https://github.com/loafoe) | **feat(pico): add ChatStream support for real-time token streaming** — Adds `ChatStream` integration to pico channel with streamer tracking in `turnState`; enables real-time token streaming over WebSocket. **Status: CLOSED/MERGED** |

### Key Advancement
- **Real-time streaming infrastructure** is now landed in the pico channel, laying groundwork for responsive UI experiences.

---

## 4. Community Hot Topics

| Item | Heat | Analysis |
|------|------|----------|
| [#2953](https://github.com/sipeed/picoclaw/issues/2953) — OpenAI/Codex OAuth empty response | 🔥 High | **Root cause identified by reporter**: `response.output_text.delta` stream events are ignored by PicoClaw's parser. Not an auth issue—**streaming event handling gap** with newer OpenAI/Codex API format. 1 comment. |
| [#2952](https://github.com/sipeed/picoclaw/issues/2952) — 好久没发新版本了 ("Long time no stable release") | 🔥 High | **Meta-issue bundling 3 pain points**: (1) `exec` command's `actions:run` not included in first-turn system prompt causing model errors; (2) QQ channel infinite restart loop on message after reboot; (3) UI/UX: model provider key management should show saved keys, dropdown selection, API test connection with `/models` auto-population. 1 comment. |
| [#2954](https://github.com/sipeed/picoclaw/issues/2954) — 32-bit Android unsupported | Medium | Platform compatibility gap for Termux/Android users. No response yet. |

**Underlying needs**: 
- **Streaming protocol compatibility** with evolving OpenAI API surface
- **Release cadence predictability** and stability
- **Channel reliability** (QQ restart loops, message dropping)
- **Mobile/edge deployment** (32-bit Android)

---

## 5. Bugs & Stability

| Severity | Issue / PR | Description | Fix Available? |
|----------|-----------|-------------|--------------|
| **Critical** | [#2958](https://github.com/sipeed/picoclaw/issues/2958) | `tool_calls` messages dropped during **consecutive requests** via pico channel—only first request's tool calls appear in UI | ✅ **Yes** — [#2957](https://github.com/sipeed/picoclaw/pull/2957) opened same day by same author |
| **Critical** | [#2953](https://github.com/sipeed/picoclaw/issues/2953) | OpenAI/Codex OAuth returns empty response due to unhandled `output_text.delta` stream events | ❌ No PR yet |
| **High** | [#2952 (pt.2)](https://github.com/sipeed/picoclaw/issues/2952) | QQ channel **infinite restart loop** after reboot unless history cleared | ❌ No PR yet |
| **High** | [#2956](https://github.com/sipeed/picoclaw/pull/2956) | Channels wrongly disabled after `.security.yml` merge when `enabled: true` only in `config.json` | ✅ **PR pending review** |
| **Medium** | [#2955](https://github.com/sipeed/picoclaw/pull/2955) | PID reuse causes false singleton detection—startup fails if unrelated process reuses PID | ✅ **PR pending review** |
| **Medium** | [#2954](https://github.com/sipeed/picoclaw/issues/2954) | 32-bit Android systems unsupported | ❌ No PR yet |

**Pattern**: Streaming and channel state management are **active fragility points**. The rapid fix for #2958→#2957 shows responsive triage for pico channel issues.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Version |
|---------|--------|---------------------------|
| **Dynamic MCP headers per request** | [#2696](https://github.com/sipeed/picoclaw/pull/2696) — *open since Apr 28* | High — Architecture-complete, needs review |
| **Configurable TLS verification for MQTT** | [#2899](https://github.com/sipeed/picoclaw/pull/2899) — *stale since May 20* | Medium — Security fix, may need rebase |
| **Improved model provider UX** (saved key display, dropdown, API test, `/models` auto-add) | [#2952](https://github.com/sipeed/picoclaw/issues/2952) | Medium — Clear user demand, UI work |
| **32-bit Android support** | [#2954](https://github.com/sipeed/picoclaw/issues/2954) | Low — Niche platform, resource tradeoff |

**Predicted v0.3.0 themes**: MCP hardening, channel reliability, release automation.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|-------|----------|----------|
| **"Model returned empty response" confusion** | [#2953](https://github.com/sipeed/picoclaw/issues/2953) — misdiagnosed as auth/token issue | High — User debugging time wasted |
| **QQ channel instability** | [#2952](https://github.com/sipeed/picoclaw/issues/2952) — restart loops break production use | High |
| **First-turn exec command failures** | [#2952](https://github.com/sipeed/picoclaw/issues/2952) — `actions:run` missing from initial prompt | Medium |
| **Release starvation** | [#2952](https://github.com/sipeed/picoclaw/issues/2952) title literally "long time no release" | Medium — Perceived project stagnation |

### Use Cases
- **Android/Termux edge deployment** (#2954)
- **Multi-channel bot operations** (QQ, pico WebSocket)
- **OpenAI/Codex latest API consumption** (#2953)

### Satisfaction Signals
- Active nightly builds show infrastructure health
- Same-day bug→PR for #2958 shows responsive maintenance (for pico channel)
- Community filing detailed, reproducible issues

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#2696](https://github.com/sipeed/picoclaw/pull/2696) — MCP dynamic headers | ~1 month | **High** — Core MCP architecture; blocking enterprise auth patterns | Maintainer review & merge |
| [#2899](https://github.com/sipeed/picoclaw/pull/2899) — MQTT TLS verification | ~1 week | **Medium** — Security fix, marked stale | Rebase, review, or close |
| [#2952](https://github.com/sipeed/picoclaw/issues/2952) — Release request + 3 bugs | 1 day | **Medium** — Will accumulate +1s rapidly | Maintainer response on release timeline; split into separate trackable issues |

**Recommendation**: #2696 and #2899 need maintainer attention to prevent contributor fatigue. The "stale" label on #2899 is a red flag for PR hygiene.

---

*Digest generated from GitHub activity 2026-05-27 to 2026-05-28. All links: [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-28

---

## 1. Today's Overview

NanoClaw showed **moderate development activity** on 2026-05-28 with 9 PRs updated (5 open, 4 merged/closed) and 1 issue closed, though no new releases were published. The project appears to be in active maintenance mode with a focus on **cross-platform compatibility fixes** (NixOS networking, Signal service handling) and **channel integration robustness** (Teams file support, reaction schema alignment across WhatsApp/Discord/Telegram/Slack). A single contributor, **eldar702**, dominated today's open PR submissions with 4 fixes targeting CLI behavior, MCP schema alignment, Signal error handling, and Teams manifest configuration—suggesting either a concentrated effort or potential maintainer sprint. The closure of the long-running multi-provider support issue (#80) signals a significant roadmap decision, though no replacement implementation is visible in today's merged PRs. Overall project health appears **stable but incremental**, with no critical security patches or major feature landings.

---

## 2. Releases

**No new releases** published in the last 24 hours.

---

## 3. Project Progress

### Merged/Closed PRs (4 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#5](https://github.com/nanocoai/nanoclaw/pull/5) | gavrielc | **Fixed cross-group scheduled tasks JID routing** — corrected IPC message handling where container-passed JIDs overrode target group identities | **Stability**: Fixes broken multi-group task delegation, critical for containerized deployments |
| [#2629](https://github.com/nanocoai/nanoclaw/pull/2629) | mois-ilya | **NixOS container networking compatibility** — replaces `host-gateway` magic with `--network=host` and `127.0.0.1` | **Platform support**: Unblocks NixOS users who previously had container runtime failures |
| [#2577](https://github.com/nanocoai/nanoclaw/pull/2577) | HokutoMorita | "miss pr" — no description | **Unknown**: Appears to be an accidental or placeholder PR, closed without merge context |
| [#2623](https://github.com/nanocoai/nanoclaw/pull/2623) | s1250026 | "miss pr" — no description | **Unknown**: Same pattern as #2577, suggests PR hygiene issues or automation misfires |

**Net advancement**: Two substantive platform fixes (container networking, group routing) landed. Two "miss pr" closures indicate **process noise** that may warrant contributor guideline reinforcement.

---

## 4. Community Hot Topics

### Most Active Discussion: Multi-Provider Support (#80)

| Metric | Value |
|:---|:---|
| **Issue** | [#80 — Support runtimes and providers other than Claude/Anthropic](https://github.com/nanocoai/nanoclaw/issues/80) |
| **Status** | CLOSED (2026-05-27) |
| **Comments** | 33 |
| **Reactions** | 👍 60 |
| **Created** | 2026-02-04 (114 days open) |

**Underlying need**: Community is **urgently concerned about vendor lock-in and account termination risk** with Anthropic. The issue opener ([jchadwick](https://github.com/jchadwick)) explicitly warns that "Anthropic is already shutting down peoples' subs for using them with OpenClaw"—framing this as a **business continuity risk**, not merely a preference. The 60 upvotes and 33 comments across 3.5 months demonstrate sustained demand.

**Analysis of closure without implementation**: The issue was closed without linked PR resolution, suggesting either: (a) maintainer rejection of scope, (b) migration to discussion/roadmap, or (c) implicit "won't fix" due to architectural coupling to Anthropic's toolchain. Given NanoClaw's apparent origin as a Claude Code alternative ("OpenClaw" naming), this closure may signal **strategic tension** between the project's identity and user demands for neutrality. The community need for OpenCode, Codex, Gemini support remains **unmet and potentially contentious**.

---

## 5. Bugs & Stability

| Severity | PR/Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **High** | [#2626](https://github.com/nanocoai/nanoclaw/pull/2626) | **Signal bridge silent failure**: `restartService()` uses `stdio: 'ignore'` with `launchctl kickstart -k`, masking failures when plist is unloaded; wizard reports false success | **PR open** — explicit error propagation proposed |
| **High** | [#2627](https://github.com/nanocoai/nanoclaw/pull/2627) | **MCP reaction schema broken across 5+ channels**: `add_reaction` expects shortcodes per docstring but passes verbatim; fails silently on WhatsApp/Discord/Telegram/Teams/GChat (unicode needed), only works on Slack | **PR open** — dual-path translation proposed |
| **Medium** | [#2625](https://github.com/nanocoai/nanoclaw/pull/2625) | **Teams file transfer disabled**: `supportsFiles: false` hardcoded in manifest blocks bidirectional file sharing; bot silently drops `send_file` | **PR open** — one-line manifest fix |
| **Medium** | [#2628](https://github.com/nanocoai/nanoclaw/pull/2628) | **CLI `--id` flag ignored**: `genericCreate` overrides user-supplied IDs with `randomUUID()`, breaking deterministic automation | **PR open** — honor user input proposed |
| **Medium** | [#5](https://github.com/nanocoai/nanoclaw/pull/5) *(fixed)* | Cross-group task JID misrouting | **Merged** |

**Stability assessment**: Four open PRs from a single contributor (eldar702) address **silent failures** (Signal, reactions, Teams files) and **CLI contract violations** (`--id`). Pattern suggests recent **quality assurance sweep** or user reporting surge. All fixes are surgical and ready for review.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Version |
|:---|:---|:---|
| **Per-server MCP tool disabling** | [#2624](https://github.com/nanocoai/nanoclaw/pull/2624) — `disabledTools` in `McpServerConfig` | **High** — PR open, follows guidelines, operational need for multi-server deployments |
| **Multi-LLM provider support** | [#80](https://github.com/nanocoai/nanoclaw/issues/80) — closed with 60 👍 | **Low/Uncertain** — Issue closed without implementation path; architectural lock-in to Anthropic likely |
| **NixOS first-class support** | [#2629](https://github.com/nanocoai/nanoclaw/pull/2629) — merged | **Shipped** — Container runtime now NixOS-compatible |
| **Teams file sharing** | [#2625](https://github.com/nanocoai/nanoclaw/pull/2625) | **High** — Trivial manifest fix, user-visible improvement |

**Predicted next release focus**: Infrastructure robustness (MCP schema, container networking, channel parity) rather than new capabilities. The closed #80 suggests **provider diversification is not currently prioritized**, despite community pressure.

---

## 7. User Feedback Summary

### Explicit Pain Points (from issue/PR descriptions)

| Pain Point | Evidence | Severity |
|:---|:---|:---|
| **Anthropic account termination risk** | [#80](https://github.com/nanocoai/nanoclaw/issues/80): "shutting down peoples' subs for using them with OpenClaw" | **Existential** for affected users |
| **Silent failures erode trust** | [#2626](https://github.com/nanocoai/nanoclaw/pull/2626) Signal restart, [#2627](https://github.com/nanocoai/nanoclaw/pull/2627) reactions — "silently fail," "silently drops" | **Operational** — debugging burden |
| **CLI promises broken** | [#2628](https://github.com/nanocoai/nanoclaw/pull/2628): documented `--id` flag discarded | **UX friction** — automation broken |
| **Platform support gaps** | [#2629](https://github.com/nanocoai/nanoclaw/pull/2629) NixOS networking failure | **Adoption barrier** for niche platforms |

### Satisfaction Signals
- Active PR response: 4 fixes submitted same-day suggest **responsive contributor base**
- Long issue resolution: #80 closed after 114 days with 33 comments suggests **engaged but potentially frustrated** community

### Dissatisfaction Signals
- "miss pr" noise (#2577, #2623): contributor experience may be **confusing or under-documented**
- #80 closure without alternative: **strategic disappointment** likely among multi-provider advocates

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| **#80 aftermath** | 114 days closed | **High** — 60-upvote demand unmet; community may fork or migrate | Maintainer communication on provider strategy; if rejected, explicit rationale |
| **#2624** (per-server `disabledTools`) | 1 day open | **Low** — well-formed, follows guidelines | Routine review |
| **#2626–2628** (eldar702 batch) | 1 day open | **Low** — surgical fixes | Batch review possible; all close related issues |
| **General PR hygiene** | Ongoing | **Medium** — "miss pr" pattern wastes CI/reviewer time | Contributor template enforcement; bot auto-close for empty PRs |

**Critical gap**: No visible tracking issue or discussion **replacing #80's scope**. If multi-provider support is deferred, a public roadmap document would mitigate community uncertainty. The 60 upvotes represent **significant social capital** that could convert to maintainer fatigue or fork energy if unaddressed.

---

*Digest generated from GitHub activity 2026-05-27 to 2026-05-28. All links reference `github.com/qwibitai/nanoclaw` (redirected to `nanocoai/nanoclaw` in project context).*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-05-28

## 1. Today's Overview

NullClaw saw moderate development activity over the past 24 hours with **3 issues updated** (2 open, 1 closed) and **4 pull requests** in motion (2 still open, 2 merged/closed). No new releases were published. The project appears to be in a stabilization phase, with community contributors actively addressing Windows compatibility issues and Zig toolchain updates. Notably, the closure of Issue #890 and its associated PR #892 suggests progress on long-standing Windows networking problems, while two fresh issues from user `weissfl` flag configuration and model discovery gaps that may impact user experience.

---

## 2. Releases

*No new releases published.*

---

## 3. Project Progress

### Merged/Closed PRs (2 items)

| PR | Description | Significance |
|:---|:---|:---|
| [#892](https://github.com/nullclaw/nullclaw/pull/892) | **test(compat/net): add Windows getAddressList regression tests** — Adds test coverage for the Windows hostname resolution fix (commits `973bfa4`, `dfc9f3b`, `d3c7ef7`) that replaced a localhost-only stub with `getAddressListWindows` resolver. | **Stability win**: Prevents regression of #890; closes the loop on a critical Windows connectivity bug. |
| [#891](https://github.com/nullclaw/nullclaw/pull/891) | **fix(providers): preserve curl probe transport failures** — Stops collapsing curl errors into generic `OpenRouterApiError`; now surfaces `CurlDnsError`, `CurlConnectError`, `CurlTimeout`, etc. directly. | **Observability win**: Enables faster root-cause analysis for provider health check failures; directly supports debugging scenarios like #890. |

### Open PRs Still Active (2 items)

| PR | Status | Risk/Note |
|:---|:---|:---|
| [#887](https://github.com/nullclaw/nullclaw/pull/887) | Fix build with Zig v0.16 for win/linux | **Toolchain critical**: Zig 0.16 breaking changes could block new contributors; stale since May 4 with no maintainer response. |
| [#878](https://github.com/nullclaw/nullclaw/pull/878) | Use `nanosleep` on POSIX for real thread suspension | **Performance/stability**: Fixes cooperative-yield busy-waiting; may affect scheduler behavior. |

---

## 4. Community Hot Topics

### Most Active Discussion

| Item | Heat | Analysis |
|:---|:---|:---|
| [#890](https://github.com/nullclaw/nullclaw/issues/890) — Windows `HostResolutionFailed` | 🔥🔥🔥 Closed with 1 comment, 1 👍 | **Resolved pain point**: Windows users were completely blocked from provider access. The fix involved deep runtime changes (`std.Io` → custom resolver) plus regression tests. Underlying need: **first-class Windows support** as a peer platform, not an afterthought. |

### Emerging Topics (Zero comments but fresh, same-day filing)

| Item | Significance |
|:---|:---|
| [#937](https://github.com/nullclaw/nullclaw/issues/937) — Dead `compact_context` flag | **Code quality / UX debt**: Configuration surface area exceeds actual functionality; users may expect context compaction that never occurs. Suggests need for config audit or feature completion. |
| [#936](https://github.com/nullclaw/nullclaw/issues/936) — Custom providers fall back to hardcoded Claude models | **Core functionality gap**: Breaks the OpenAI-compatible provider abstraction; users adding custom endpoints (Ollama, local vLLM, etc.) get silently redirected to Anthropic models. Underlying need: **dynamic model discovery** via `/v1/models` for all OpenAI-compatible providers. |

---

## 5. Bugs & Stability

| Severity | Issue | Fix Status | Details |
|:---|:---|:---|:---|
| **HIGH** (resolved) | [#890](https://github.com/nullclaw/nullclaw/issues/890) Windows `HostResolutionFailed` | ✅ Fixed in `main` via `getAddressListWindows`; tests in [#892](https://github.com/nullclaw/nullclaw/pull/892) | Complete provider failure on Windows for any hostname-based endpoint |
| **MEDIUM** | [#936](https://github.com/nullclaw/nullclaw/issues/936) Custom provider model fallback | ❌ No fix PR | Silent incorrect behavior; users cannot use custom OpenAI-compatible providers properly |
| **LOW** | [#937](https://github.com/nullclaw/nullclaw/issues/937) Dead `compact_context` flag | ❌ No fix PR | Config bloat; potential user confusion if documented feature is inert |

---

## 6. Feature Requests & Roadmap Signals

| Signal | Likelihood in Next Release | Rationale |
|:---|:---|:---|
| **Dynamic `/v1/models` discovery for all OpenAI-compatible providers** | **HIGH** | [#936](https://github.com/nullclaw/nullclaw/issues/936) is a clear bug report with obvious fix path; aligns with project's multi-provider architecture |
| **Config cleanup / dead flag removal** | **MEDIUM** | [#937](https://github.com/nullclaw/nullclaw/issues/937) is low-effort hygiene; may be bundled with other config work |
| **Zig 0.16 toolchain support** | **UNCERTAIN** | [#887](https://github.com/nullclaw/nullclaw/pull/887) exists but unmerged; depends on maintainer bandwidth and breaking change scope |
| **POSIX `nanosleep` thread sleep** | **MEDIUM-HIGH** | [#878](https://github.com/nullclaw/nullclaw/pull/878) is technically sound, improves efficiency; may need cross-platform validation |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Windows as second-class citizen** | #890, #892, #887 (win build fix) | 🔴 Critical — repeated pattern |
| **Provider abstraction leaks** | #936 (hardcoded fallbacks) | 🟡 High — breaks core value prop |
| **Configuration untrustworthiness** | #937 (dead flags) | 🟡 Medium — erodes user confidence |
| **Build/toolchain fragility** | #887 (Zig version lock-in) | 🟡 Medium — contributor friction |

### Use Cases Implied

- **Windows desktop users** running NullClaw as local agent (not WSL)
- **Self-hosters** with custom OpenAI-compatible endpoints (Ollama, LM Studio, local inference)
- **Power users** expecting config flags to have functional effects

### Satisfaction Signal

Positive: Rapid closure of #890 with test coverage suggests responsive maintenance for critical bugs.  
Negative: Same-day filing of #936/#937 by `weissfl` suggests a user actively hitting multiple rough edges, possibly evaluating or deploying the project.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#887](https://github.com/nullclaw/nullclaw/pull/887) — Zig v0.16 build fix | 24 days | **Contributor attrition**; toolchain PRs decay fast | Maintainer review/merge or explicit Zig version policy |
| [#878](https://github.com/nullclaw/nullclaw/pull/878) — POSIX `nanosleep` | 28 days | **Performance regression** on POSIX; may conflict with scheduler work | Review for merge or request benchmarks |
| *Implicit: No releases since unknown date* | Unknown | **User uncertainty** about project vitality | Consider tagging release to capture #890/#891 fixes |

---

*Digest generated from GitHub activity 2026-05-27 → 2026-05-28. All links: https://github.com/nullclaw/nullclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-28

## 1. Today's Overview

Very high development velocity. 28 issues were updated in the last 24 hours (23 open, 5 closed) and 50 PRs received updates (29 merged/closed, 21 still open). The project is deep in its **“Reborn”** architecture migration — a fundamental rewrite of the product workflow, OAuth, auth interaction, event streaming, and CLI/WebUI layers. A major **GSuite OAuth backend** (PR #4111) was merged alongside **context compaction Phase 1** (PR #4110). Community-driven desktop client development (abbyshekit/ironclaw-desktop) is blocked by four missing gateway endpoints, which surfaced as high-demand issue requests today.

## 2. Releases

**No new releases** were published in the last 24 hours.

## 3. Project Progress

### Merged/Closed PRs today (29 total, highlighted):

- **#4111 (CLOSED)** — Add GSuite OAuth backend (Google provider, token exchange, typed dispatch reasons) — *core contribution by henrypark133* — [nearai/ironclaw PR #4111](https://github.com/nearai/ironclaw/pull/4111)
- **#4110 (OPEN, under review)** — Reborn context compaction Phase 1: strategy slot, executor stage, host port, summary persistence — [nearai/ironclaw PR #4110](https://github.com/nearai/ironclaw/pull/4110)
- **#4089 (CLOSED)** — Fix background subagent completion notification (fix for #4084) — *zmanian* — [nearai/ironclaw PR #4089](https://github.com/nearai/ironclaw/pull/4089)
- **#4070 (CLOSED)** — Add auth refresh cleanup lifecycle — *hanakannzashi* — [nearai/ironclaw PR #4070](https://github.com/nearai/ironclaw/pull/4070)
- **#4139 (CLOSED)** — Fix reply completion stop strategy — *serrrfirat* — [nearai/ironclaw PR #4139](https://github.com/nearai/ironclaw/pull/4139)
- **#4140 (CLOSED)** — Separate model content from safe summaries — *serrrfirat* — [nearai/ironclaw PR #4140](https://github.com/nearai/ironclaw/pull/4140)
- **#4136 (CLOSED)** — Block missing runtime credentials on auth gate — *serrrfirat* — [nearai/ironclaw PR #4136](https://github.com/nearai/ironclaw/pull/4136)
- **#4148 (CLOSED)** — Disable background subagent mode — *henrypark133* — [nearai/ironclaw PR #4148](https://github.com/nearai/ironclaw/pull/4148)
- **#4105 (CLOSED)** — Fix HTTP save_to authority — *serrrfirat* — [nearai/ironclaw PR #4105](https://github.com/nearai/ironclaw/pull/4105)
- **#4141 (CLOSED)** — Type prompt text validation surfaces — *serrrfirat* — [nearai/ironclaw PR #4141](https://github.com/nearai/ironclaw/pull/4141)
- **#4159 (CLOSED)** — Remove display preview line cap — *serrrfirat* — [nearai/ironclaw PR #4159](https://github.com/nearai/ironclaw/pull/4159)

### Key progress themes:
- **Auth/OAuth stack**: GSuite backend landed; token refresh cleanup lifecycle merged
- **Reborn workflow facades**: Workflow, InboundTurnService, EventStreamManager issues remain open but advancing
- **Context compaction**: Phase 1 under review — critical for long-session LLM performance
- **Security hardening**: Credential masking, typed prompt validation, auth gate enforcement all merged today

## 4. Community Hot Topics

**Most active/engaged items today:**

- **Issue #3436 (👍: 1)** — DeepSeek API returns 400 (`reasoning_content must be passed back in thinking mode`) — affects users of DeepSeek with reasoning enabled. No fix PR yet. — [nearai/ironclaw Issue #3436](https://github.com/nearai/ironclaw/issues/3436)

- **Issue #1907 (👍: 1)** — Feature Request: Add conversation/thread delete functionality — 2-month-old request with visible demand. Unresolved. — [nearai/ironclaw Issue #1907](https://github.com/nearai/ironclaw/issues/1907)

- **Issue #4115** — UI/UX Issues in Channel Removal Flow — detailed bug report with screenshots about hidden/invisible Remove button in modals. — [nearai/ironclaw Issue #4115](https://github.com/nearai/ironclaw/issues/4115)

- **Issue #4108** — Nightly E2E failed — CI reliability concern, v2-engine job failing. — [nearai/ironclaw Issue #4108](https://github.com/nearai/ironclaw/issues/4108)

**Underlying needs**: The community needs stable API surfaces (especially for desktop client development), working provider integrations (DeepSeek), and polished WebUI flows. The cluster of four “blocks desktop client UX” issues (#4150–#4153) signals growing third-party ecosystem interest.

## 5. Bugs & Stability

**Critical/High Severity:**
- **Nightly E2E failure (#4108)** — Scheduled CI pipeline is breaking. No fix PR yet. [Issue #4108](https://github.com/nearai/ironclaw/issues/4108)
- **DeepSeek API 400 on reasoning mode (#3436)** — Blocks users of DeepSeek with thinking/reasoning. [Issue #3436](https://github.com/nearai/ironclaw/issues/3436)
- **Background subagent result delivery fixed (#4089)** — The fix for #4084 (stranded results) was merged today. Resolved.

**Medium Severity:**
- **Setup wizard sandbox image probe bypass (#4106)** — `SANDBOX_IMAGE` env variable is ignored by setup wizard. Not yet fixed. [Issue #4106](https://github.com/nearai/ironclaw/issues/4106)
- **Channel removal UI (#4115)** — Remove button invisible until hover. Minor UX but affects discoverability. No fix PR.

**Low Severity:**
- **UI polish issues** on channel removal flow — cosmetic but reported with screenshots.

**Fix PRs merged today:** #4089 (background subagent), #4136 (missing credentials), #4148 (disable broken background mode), #4139 (reply completion stop), #4140 (safe summaries), #4141 (prompt validation), #4159 (line cap removal), #4105 (HTTP save_to authority).

## 6. Feature Requests & Roadmap Signals

**User-requested features (from issues today):**
- **Conversation/thread delete (#1907)** — Long-standing request; likely needed for v2 WebChat product launch
- **Desktop client gateway endpoints** — `POST /api/auth/signout`, `DELETE /api/memory`, `POST /api/routines`, `GET /api/routines/recent-runs` (#4150–#4153) — high probability of inclusion in next release given community investment in desktop client
- **Declarative capability policy (#4120)** — Suggested P2, part of Configuration-as-Code epic. Roadmap item, not likely immediate.

**Predictions for next version:**
- Reborn OAuth E2E (#3881 → #4112) likely to close within 1–2 weeks
- Token refresh (Google) (#4113, #4160) will land soon after GSuite backend
- Context compaction Phase 1 (#4110) merges next
- Desktop client gateway endpoints likely added as community contributions

## 7. User Feedback Summary

**Pain points surfaced today:**
- **DeepSeek broken with reasoning**: “When using DeepSeek as a provider with thinking/reasoning mode enabled, the API returns a 400 Bad Request” — *Serhioromano*
- **Incomplete API surface for desktop clients**: Four missing endpoints block Tauri v2 macOS client development — *abbyshekit*
- **Missing conversation deletion**: “Users can create new conversations but cannot delete old ones” — *saga197410qq*
- **UI/UX friction**: “Remove button is barely visible until mouse hover” — *sunglow666*
- **Setup wizard misreads env**: “bypasses SANDBOX_IMAGE env precedence, always probes the hardcoded default” — *Gumbees*

**Satisfaction signals:**
- Rapid merging of critical fixes (background subagent, reply completion, credential handling)
- Active core team engagement (serrrfirat, henrypark133, hanakannzashi all contributed today)

**Key use case**: Desktop native client development via Tauri v2 + SvelteKit, OAuth integration for Google/GitHub/NEAR, multi-provider LLM support with reasoning models.

## 8. Backlog Watch

**Long-unanswered important issues needing maintainer attention:**
- **#1907 (2 months old, 1 👍)** — Conversation/thread delete functionality — zero developer activity since filing. Moderate demand. [Issue #1907](https://github.com/nearai/ironclaw/issues/1907)
- **#3436 (19 days old, 1 👍)** — DeepSeek 400 error on reasoning mode — only 1 comment, no assigned dev. Affects real users. [Issue #3436](https://github.com/nearai/ironclaw/issues/3436)
- **#4106 (1 day old)** — Setup wizard sandbox image env bypass — fresh but already reported with clear reproduction. No assignment. [Issue #4106](https://github.com/nearai/ironclaw/issues/4106)

**Stale high-severity risk:**
- **None today** — the team is actively processing new issues, though #3436 (DeepSeek) could escalate if more users adopt reasoning models.

**Health judgment:** Project is in excellent shape with very high throughput. The main risk is that ongoing Reborn architecture changes may delay resolution of older user-facing bugs (#1907, #3436) as core developers focus on infrastructure migration.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-28

## 1. Today's Overview

Project activity is **high**, with 23 PRs updated in the last 24 hours (5 merged/closed, 18 open) and one new release published. Two issues remain open, one of which (membership login failure) has been active for three weeks with no maintainer response. The release cycle is active, with version 2026.5.27 bringing major media generation capabilities. The PR queue shows significant community and core team contributions, though a substantial number of stale PRs (e.g., #1485-#1507, dating back 1-2 months) remain unmerged, indicating a potential bottleneck in review capacity.

## 2. Releases

**New: LobsterAI 2026.5.27 (released 2026-05-27)**  
[Full Release Notes](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.5.27)

Key changes:
- **Media generation support**: Integration of Kling V3 and Douyin video generation APIs, with quota-based entitlement system
- **Co-work UI improvements**: Click-to-preview for image attachments in input area (merged PR #2061)
- **Gateway stability fix**: Resolved restart crash issue

No breaking changes or migration notes were mentioned. This release appears to be a feature-minor release primarily expanding content generation capabilities.

## 3. Project Progress

**Merged/Closed PRs (5 total)**

| PR # | Description | Area |
|------|-------------|------|
| [#2064](https://github.com/netease-youdao/LobsterAI/pull/2064) | Release 2026.5.25 — major additions: media generation, HTML share service, OpenClaw bidirectional plugin/skill sync + stability fixes | Multi-area release |
| [#2061](https://github.com/netease-youdao/LobsterAI/pull/2061) | Image click-to-preview in cowork input (reuses ImagePreviewModal) | Co-work, Renderer |

The merged work advances two key vectors: **content creation** (media generation pipeline) and **UX refinement** (in-chat image preview). The release PR (#2064) bundles several smaller fixes and sync improvements.

## 4. Community Hot Topics

**Most Discussed Issues:**

1. **Issue #1903** — [会员登录频繁失败 (Recurring login failure for members)](https://github.com/netease-youdao/LobsterAI/issues/1903)  
   - Created: 2026-05-07 | Updated: 2026-05-27 | 2 comments | 👍: 0  
   - User reports inability to access paid NetEase models due to persistent login failures. Includes screenshot of error. **No maintainer response in 3 weeks** — a significant community concern.

2. **Issue #2062** — [任务超过最大时长 (Task exceeds maximum duration)](https://github.com/netease-youdao/LobsterAI/issues/2062)  
   - Created: 2026-05-27 | Updated: 2026-05-27 | 0 comments  
   - User attempting 24-hour continuous tasks hits the auto-stop timeout. Unclear whether task continues in background. This is a **usability blocker** for long-running automation use cases.

**Underlying needs**: Users are trying to use LobsterAI for production-grade workloads (long-running agents, continuous background operations) and hit built-in guardrails. The membership login issue suggests friction in the paid tier experience that could drive users away.

## 5. Bugs & Stability

**Open Issues (Severity: Medium-High)**

| Issue | Severity | Description | Fix PR Exists? |
|-------|----------|-------------|----------------|
| [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) | **High** — blocks paid feature access | Membership login failure prevents use of paid NetEase models | No |
| [#2062](https://github.com/netease-youdao/LobsterAI/issues/2062) | **Medium** — limits task scope | 24-hour task timeout with unclear status | No |

**No new crash or regression reports** in the last 24 hours. The release PR #2064 mentions a "gateway restart crash" fix, suggesting stability was a concern in the previous version.

## 6. Feature Requests & Roadmap Signals

**Hot Feature Requests (from open PRs):**

1. **Kit (Expert Suite) Market** ([PR #2060](https://github.com/netease-youdao/LobsterAI/pull/2060)) — A complete marketplace and conversation integration for bundling multiple skills into installable kits. This is a **significant platform expansion** that could land in the next major release.

2. **Windows Close Button Behavior** ([PR #1497](https://github.com/netease-youdao/LobsterAI/pull/1497)) — User-configurable minimize-to-tray vs. quit behavior on window close for Windows. A quality-of-life enhancement.

3. **Session Pruning** ([PR #1499](https://github.com/netease-youdao/LobsterAI/pull/1499)) — Automatic conversation trimming to prevent context window overflows. Directly addresses Issue #2062's timeout problem.

4. **Rich Markdown Editor for Agent Guide Files** ([PR #1503](https://github.com/netease-youdao/LobsterAI/pull/1503)) — WYSIWYG editing for IDENTITY.md, SOUL.md, USER.md files in settings.

5. **Test Task Button & UI Overhaul** ([PR #1486](https://github.com/netease-youdao/LobsterAI/pull/1486), [#1488](https://github.com/netease-youdao/LobsterAI/pull/1488)) — Improvements to scheduled task creation, including card grid layout and quick-test functionality.

**Prediction**: The Kit Market (#2060) and session pruning (#1499) are likely candidates for the next minor release (2026.6.x), as they address community pain points and expand platform capabilities.

## 7. User Feedback Summary

**Pain Points:**
- **Paid tier login friction** (Issue #1903): Users cannot access paid models they've subscribed to, causing dissatisfaction and potentially churn. No resolution in 3 weeks is concerning.
- **Task execution transparency** (Issue #2062): Users running long automation tasks are uncertain about task status after timeout — is the task killed or continuing? This undermines trust in scheduled task reliability.
- **Context window management** (unaddressed via PR #1499): Multiple users (across stale PRs) have reported issues with long conversations hitting model limitations.

**Use Cases Emerging:**
- **Production automation**: Users attempting 24-hour continuous tasks suggests LobsterAI is being used for business process automation, not just casual chat.
- **Team collaboration**: The Kit (expert suite) feature implies users want to package and share specialized skill configurations.

**Satisfaction Signals:**
- Media generation integration was shipped (release 2026.5.27), likely meeting user demand for richer output.
- Image preview in chat (PR #2061) was well-received enough to be merged.

## 8. Backlog Watch

**Issues/PRs Needing Maintainer Attention (by age):**

1. **[Issue #1903](https://github.com/netease-youdao/LobsterAI/issues/1903)** — **21 days without response**  
   Membership login failure. Highest-impact open issue; no comment from any maintainer.

2. **[PR #1485](https://github.com/netease-youdao/LobsterAI/pull/1485)** — **53 days stale**  
   Fix for disabled skills still being triggered in cowork chat. Core functionality bug.

3. **[PR #1486](https://github.com/netease-youdao/LobsterAI/pull/1486)**, **[#1488](https://github.com/netease-youdao/LobsterAI/pull/1488)**, **[#1489](https://github.com/netease-youdao/LobsterAI/pull/1489)**, **[#1490](https://github.com/netease-youdao/LobsterAI/pull/1490)** — **53-52 days stale**  
   A cluster of scheduled-task improvements from the same contributor that appear ready for review. The PRs address notification channels, UI overhaul, and test functionality — all quality-of-life improvements for the critical scheduled tasks module.

4. **[PR #1499](https://github.com/netease-youdao/LobsterAI/pull/1499)** — **51 days stale**  
   Session pruning feature. Directly related to Issue #2062 (task timeout) — merging this could resolve the user's problem.

5. **[PR #1501](https://github.com/netease-youdao/LobsterAI/pull/1501)** — **51 days stale**  
   Fix for disabled skills persisting in activeSkillIds. Another core UX bug that has been waiting over 7 weeks.

**Project Health Concern**: A significant number of PRs from April (stale for 50+ days) remain unmerged despite addressing real user-reported issues. This suggests a review bottleneck. The Kit Market PR (#2060) is fresh and substantial but adds scope while existing fixes languish.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-28

## 1. Today's Overview
Moltis shows **moderate activity** on 2026-05-28: 3 issues were updated in the last 24 hours (all open), and 2 pull requests were closed/merged. No new releases were published. The merged PRs contribute practical improvements to memory infrastructure and provider extensibility. A longstanding architectural issue (#235) concerning PTY-based Claude Code CLI control remains open, indicating continued interest in advanced multi-agent orchestration capabilities. The project also received a partnership inquiry and a newly reported bug (#1077), suggesting growing external engagement and user base.

## 2. Releases
**No new releases** as of this digest date.  
The latest available release remains unchanged; users should track the default branch for recent changes.

## 3. Project Progress
Two pull requests were merged/closed in the last 24 hours:

- **#1074 – Configurable embedding dimensions with safe auto-reindex** ([PR #1074](https://github.com/moltis-org/moltis/pull/1074))  
  Adds an optional `dimensions` config field for OpenAI-compatible embedding providers, along with automatic reindexing when dimensions change. Includes a legacy alias (`embedding_dimensions`) and a `reindex_on_dim_change` flag. This improves flexibility for users with custom embedding models.

- **#451 – Add Novita AI as OpenAI-compatible provider** ([PR #451](https://github.com/moltis-org/moltis/pull/451))  
  Integrates Novita AI as a new LLM provider via `https://api.novita.ai/openai`, registering three models: `moonshotai/kimi-k2.5`, `deepseek/deepseek-v3.2`, `zai-org/glm-5`. Uses `NOVITA_API_KEY` environment variable or config section. Follows the established provider pattern, increasing the ecosystem of supported backends.

## 4. Community Hot Topics
The most active discussion remains centered on:

- **#235 – PTY-based interactive Claude Code CLI control** ([Issue #235](https://github.com/moltis-org/moltis/issues/235))  
  *Comments: 4 | Reactions: 1*  
  This issue has been open since February 2026 and is the most-commented active thread. The core request involves enabling true interactive mode for Claude Code when spawned as a subprocess, which currently fails due to `isatty()` detection. The underlying need is **reliable multi-agent orchestration with interactive CLI tools**, a complex systems-level challenge. No PR or maintainer response is visible yet, suggesting this is a known architectural gap.

## 5. Bugs & Stability
One new bug was reported today:

- **#1077 – Error: invalid params, user name must be consistent (2013)** ([Issue #1077](https://github.com/moltis-org/moltis/issues/1077))  
  *Severity: Medium*  
  Reported by a user on the latest version. The error message suggests an inconsistency in user/identity handling—likely related to session management or database state. No fix PR exists yet. No other crashes or regressions were reported. This merits prompt investigation as it may affect core user authentication or data integrity.

## 6. Feature Requests & Roadmap Signals
- **Partnership inquiry (#1076)** from MyClaw.ai ([Issue #1076](https://github.com/moltis-org/moltis/issues/1076)) indicates external interest in managed hosting integrations, potentially expanding Moltis’s deployment options.
- **Configurable embedding dimensions (#1074)** was just merged, signaling that the memory subsystem is being actively enhanced for customization. Next likely additions: dynamic embedding model switching or advanced reindexing triggers.
- Based on recent activity, the next version may include:
  - Expanded LLM provider support (Novita AI already merged)
  - Memory dimension flexibility (merged)
  - Possibly a fix for the user name consistency bug (#1077)

## 7. User Feedback Summary
- **Pain points**: The PTY/interactive Claude Code issue (#235) remains a notable friction point for users wanting bidirectional interaction with subprocess agents. This is a genuine architectural limitation.
- **Use cases**: Users are deploying Moltis with OpenAI-compatible providers (evident from PR #451) and customizing embedding pipelines (#1074). The partnership inquiry (#1076) suggests a user segment interested in managed/hosted deployments.
- **Satisfaction**: No explicit complaints or negative feedback in recent issues. The steady stream of contributions and integrations indicates healthy community engagement.

## 8. Backlog Watch
- **#235 – PTY-based interactive Claude Code CLI control** ([Issue #235](https://github.com/moltis-org/moltis/issues/235))  
  *Last updated: 2026-05-27 | Open since: 2026-02-25*  
  This 3-month-old issue has no maintainer response or associated PR. It is a substantial technical challenge involving terminal emulation and subprocess interaction. As the most-commented and most-reacted issue, it likely represents the **highest-priority unresolved community need**. Maintainer attention or a design discussion would reduce uncertainty for users relying on multi-agent orchestration.

---

**Report generated: 2026-05-28**

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the project digest for CoPaw (GitHub: agentscope-ai/CoPaw) for **2026-05-28**.

---

### CoPaw Project Digest – May 28, 2026

### 1. Today's Overview
CoPaw has concluded a release cycle with the launch of **v1.1.9**, marking a significant milestone featuring a new Tauri-based native desktop app and a dedicated Coding Mode Web IDE. Activity is high: 40 issues and 26 PRs were updated in the last 24 hours, with a healthy merge/close rate of 15 for each category. The community is highly engaged, contributing numerous first-time-contributor PRs and filing detailed bug reports, though the project is currently navigating several regressions introduced in the pre-release and final builds.

### 2. Releases
Two new releases were published today:
- **v1.1.9**: The official stable release, featuring the **Tauri 2.x Desktop App** (macOS/Windows) and a new **Coding Mode** Web IDE with a three-panel layout (file tree, tabbed editor, and inline diff).
- **v1.1.9-beta.2**: A pre-release focusing on minor fixes, including redirecting the chat mode to coding mode when activated, enabling OAuth for MCP in the pywebview desktop, and provider-level enhancements.
- **Breaking Changes / Migration Notes**: None explicitly listed, but users upgrading from v1.1.8 to v1.1.9 should review the new desktop app dependencies (Tauri 2.x) and potential changes to per-hunk diff editing behavior.

### 3. Project Progress
Today saw 15 PRs merged or closed, representing progress across stability, frontend, and integrations:
- **Desktop & Platform fixes**: Multiple PRs addressed Windows compatibility, including hiding subprocess flags to avoid false-positive virus alerts ([#4724](https://github.com/agentscope-ai/QwenPaw/pull/4724), [#4723](https://github.com/agentscope-ai/QwenPaw/pull/4723)), and fixing SVG MIME type rendering on Windows ([#4718](https://github.com/agentscope-ai/QwenPaw/pull/4718)).
- **Console UI improvements**: Message timestamps were implemented (closing [#4662](https://github.com/agentscope-ai/QwenPaw/issues/4662) via [#4720](https://github.com/agentscope-ai/QwenPaw/pull/4720)), and the workspace download button received a proper loading state and spinner (fixing [#4670](https://github.com/agentscope-ai/QwenPaw/issues/4670) via [#4725](https://github.com/agentscope-ai/QwenPaw/pull/4725)).
- **Coding Mode**: A major UX win was merged for the diff editor: per-hunk Keep/Undo overlays and smart copy-to-chat ([#4716](https://github.com/agentscope-ai/QwenPaw/pull/4716)).
- **Schema & Providers**: A fix was merged for the boolean schema sanitizer to prevent corruption of valid annotations like `nullable` and `readOnly` ([#4690](https://github.com/agentscope-ai/QwenPaw/pull/4690)).
- **Testing**: A major testing milestone (Phase 0-2) was closed, covering security and agents/tools unit tests ([#4339](https://github.com/agentscope-ai/QwenPaw/issues/4339)).

### 4. Community Hot Topics
The most active discussions highlight community frustration with regressions and a strong desire for better memory management:
- **"HELP，我修改了技能名，重启后我的智能体不见了！"** ([#4680](https://github.com/agentscope-ai/QwenPaw/issues/4680)): A high-severity bug with 7 comments. User edited a custom skill name, received a "missing colon" error (which wasn't present in the file), and upon restart, the entire agent disappeared. The underlying need is for robust agent state persistence and safe skill editing.
- **"定时任务与用户消息共享session导致任务被中断"** ([#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653)): 5 comments, highlighting a critical design flaw where cron tasks are interrupted by user messages due to session sharing. The user requests session isolation for scheduled tasks.
- **"v1.1.9-beta.1版本，无法运行本地的一些CLI命令"** ([#4712](https://github.com/agentscope-ai/QwenPaw/issues/4712)): 6 comments, reporting that local CLI tools (e.g., Feishu CLI) fail due to WebSocket connectivity issues, suspected to be caused by subprocess isolation in the new desktop build.
- **"建议增强记忆系统的「总结-关联-提醒」机制"** ([#4652](https://github.com/agentscope-ai/QwenPaw/issues/4652)): This ongoing thread (3 comments) reflects a core user desire for an "intelligent" memory system that summarizes, indexes, and reminds, rather than just appending logs to files.

### 5. Bugs & Stability
Today's reports indicate several regressions affecting the v1.1.9 release:
**Critical:**
- **Desktop Crashes on macOS Tahoe 26.5** ([#4704](https://github.com/agentscope-ai/QwenPaw/issues/4704)): Immediate SIGSEGV crash when receiving messages via Feishu channel after OS upgrade. No fix PR yet.
- **Browser Launcher Fails on Windows 11** ([#4731](https://github.com/agentscope-ai/QwenPaw/issues/4731)): Edge exits with code 21, and Firefox also fails. Troubleshooting is ongoing.

**High:**
- **Session Loss after Restart** ([#4733](https://github.com/agentscope-ai/QwenPaw/issues/4733), [#4713](https://github.com/agentscope-ai/QwenPaw/issues/4713)): Multiple users report that the desktop app (v1.1.9) fails to restore the last active agent and its conversation session upon restart.
- **Orphaned Cron Jobs** ([#4649](https://github.com/agentscope-ai/QwenPaw/issues/4649)): APScheduler ghost tasks execute indefinitely after `jobs.json` is updated. Fix PR suspected to be in progress (no direct link).
- **Console Build Failure** ([#4700](https://github.com/agentscope-ai/QwenPaw/issues/4700)): `pnpm run build` fails due to missing monaco-editor type declarations, blocking development on the console.

### 6. Feature Requests & Roadmap Signals
Feature requests today cluster around enterprise features and specific platform integrations:
- **Enterprise/Gov**: Strong demand for RBAC and multi-user admin features ([#4702](https://github.com/agentscope-ai/QwenPaw/issues/4702)). A user noted CoPaw is a strong candidate for enterprise AI deployment but lacks user management.
- **Memory System Overhaul**: The "summarize-index-remind" proposal ([#4652](https://github.com/agentscope-ai/QwenPaw/issues/4652)) will likely influence the next minor release.
- **Provider Integrations**: A new pull request adds Xiaomi MiMo Token Plan as a built-in provider ([#4722](https://github.com/agentscope-ai/QwenPaw/pull/4722)), indicating a trend toward including more Chinese AI service providers.
- **Self-Learning/Hooks**: A user requested a built-in hook mechanism (similar to Claude Code) to allow the agent to self-correct and learn from executed tasks ([#4729](https://github.com/agentscope-ai/QwenPaw/issues/4729)).

### 7. User Feedback Summary
- **Pain Points**: The most vocal pain points are regressions in session persistence (agents and conversations disappearing after restart), disruption of cron tasks by user messages, and the inability to run local CLI commands in the new version.
- **Satisfaction**: The new Coding Mode and the "Approve All" feature for tool-guard cards ([#4701](https://github.com/agentscope-ai/QwenPaw/pull/4701)) are positively received, addressing workflow efficiency.
- **Use Cases**: Users are actively using CoPaw for enterprise automation (Feishu channels, cron jobs), personal productivity (baby care reminder), and software development (Coding Mode). A common theme is the desire for CoPaw to "remember" context across sessions better.

### 8. Backlog Watch
- **`#2291` – Help Wanted: Open Tasks** (Open since March 25): This "seeking contributors" issue remains the most commented-on issue (63 comments). While not a bug, its continued activity suggests a healthy community but also a potential signal that maintainers are stretched thin and need help churning the backlog of smaller tasks.
- **`#4625` – MiniMax-M2.5 Model XML format incompatibility** (Open since May 22): This issue, reporting that the thought process returns XML which breaks tool calls, has 5 comments but no linked fix PR in the last 24 hours. Users are calling this a critical experience blocker.
- **`#4655` – Chat V2 session panel and tool rendering** (Open): This large PR has been open for 3 days. It is a significant UX change and its lengthy review cycle may block other frontend improvements.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-28

## Today's Overview

ZeroClaw is in an **intensive maintenance and hardening phase**, processing 30 issues and 50 pull requests in the last 24 hours. The project shows **sustained high contributor velocity** with 20 open active issues and 39 open PRs, but also signals **critical security and stability refinements underway**. DeepSeek-V4 API incompatibility (#6059, open since April) remains the highest-priority unresolved bug affecting real users. Three new S1 (workflow-blocked) severity bugs were reported today — two related to Web UI failures and one Windows CI build breakage — alongside a rapid response with two related fix PRs already filed. The absence of new releases this period confirms the team is consolidating toward the next patch release.

---

## Releases

**No new releases in the last 24 hours.** The project last shipped v0.8-beta-1, and activity indicates preparation for either v0.8-beta-2 or v0.8.1. Notable: a [v0.8.1 integration/channel/provider/tool PR queue tracking issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) was created today, suggesting an imminent minor patch release.

---

## Project Progress

**11 PRs were merged or closed today**, advancing several key areas:

- **Security hardening:** [#6920](https://github.com/zeroclaw-labs/zeroclaw/issues/6920) (feat: enforce allowed_tools/denied_tools at execution time) merged — a defense-in-depth layer for MCP and built-in tools. Closes root cause of [#6959](https://github.com/zeroclaw-labs/zeroclaw/issues/6959).
- **HTTP request safety:** [#6981](https://github.com/zeroclaw-labs/zeroclaw/pull/6981) adds an `http_request.allowed_private_hosts` allowlist, aligning with the model already used by `web_fetch`.
- **Observability restoration:** [#6955](https://github.com/zeroclaw-labs/zeroclaw/pull/6955) re-records `LlmRequest`/`LlmResponse` events that were dropped during the 0.8.0-beta agent refactor.
- **Channel fixes:** [#6967](https://github.com/zeroclaw-labs/zeroclaw/pull/6967) (Matrix root session preservation), [#6973](https://github.com/zeroclaw-labs/zeroclaw/pull/6973) (WhatsApp LID JIDs with updated library), [#6979](https://github.com/zeroclaw-labs/zeroclaw/pull/6979) (email blank SMTP override handling).
- **Tool security:** [#6960](https://github.com/zeroclaw-labs/zeroclaw/pull/6960) applies the SecurityPolicy tool filter in `process_message()` — previously only `run()` was guarded.
- **CI and infrastructure:** [#6956](https://github.com/zeroclaw-labs/zeroclaw/pull/6956) removed marketplace deployment templates (Coolify, Dokploy), presumably simplifying the release workflow.

---

## Community Hot Topics

### Most Active Issues (by comments/reactions)

1. **[#6059 — Incompatible with DeepSeek-V4 API format](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)** — *14 comments, 4 👍*  
   Longest-running active conversation. The S2 degradation when using DeepSeek-V4-Pro and DeepSeek-V4-Flash remains unresolved after 34 days. Users report the error is linked to thinking-mode handling in the compatible-provider path. A fix PR [#6980](https://github.com/zeroclaw-labs/zeroclaw/pull/6980) filed today routes requests through `NativeChatRequest` — likely the resolution.

2. **[#6808 — RFC: Work Lanes, Board Automation, Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** — *7 comments*  
   Governance RFC proposing lightweight PR lanes and board automation. Reflects growing project maturity and need to scale maintainer processes. Open since May 20 with no PR yet.

3. **[#6074 — Track 153 commits lost in bulk revert](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)** — *2 comments*  
   Audit tracking lost commits from a March 2026 bulk revert. Several fixes filed today (e.g., [#6972](https://github.com/zeroclaw-labs/zeroclaw/pull/6972) re-recovers image_info path resolution) are explicitly tagged as recovering work from that revert.

### Most Active PRs

- **[#5450 — IPv6 support + reqwest.url](https://github.com/zeroclaw-labs/zeroclaw/pull/5450)** — *51 days open, multiple reviews* — Blocked on `needs-author-action`, one of the oldest open PRs.
- **[#6190 — Instrument runtime memory ops with OTel GenAI spans](https://github.com/zeroclaw-labs/zeroclaw/pull/6190)** — *Stacked on another PR, waiting for base merge.* Demonstrates observability as a major investment area.
- **[#6667 — Background review fork + skill_manage tool](https://github.com/zeroclaw-labs/zeroclaw/pull/6667)** — *XL-sized PR, also `needs-author-action`.* A major skills feature waiting on author follow-up.

### What the community needs most:
- **DeepSeek-V4 working** (top-voted issue, 34 days unresolved)
- **Better documentation for Web UI setup** (multiple issues around `web_dist_dir`, Matrix configuration)
- **Keyboard accessibility** in the TUI (compact keyboard support)

---

## Bugs & Stability

### S0 — Data loss / Security risk
- **[#6978](https://github.com/zeroclaw-labs/zeroclaw/issues/6978)** — `config: redact nested secrets in object-array property displays` — `Vec<T>` config fields with `#[secret]` annotations leak credentials via serialization. **No fix PR yet.**

### S1 — Workflow blocked (3 new today)
1. **[#6964](https://github.com/zeroclaw-labs/zeroclaw/issues/6964)** — Windows desktop build fails (duplicate MANIFEST resource, CVT1100/LNK1123). P1, blocks Tauri release builds. **No fix PR yet.**
2. **[#6965](https://github.com/zeroclaw-labs/zeroclaw/issues/6965)** — Canvas page never receives frames pushed by web-UI chat agent. `canvas` tool tool call doesn't propagate to the canvas page. **No fix PR yet.**
3. **[#6975](https://github.com/zeroclaw-labs/zeroclaw/issues/6975)** — `zeroclaw onboard` marks agents/profiles sections complete without writing any config to disk. **No fix PR yet.**

### S2 — Degraded behavior
- **[#6976](https://github.com/zeroclaw-labs/zeroclaw/issues/6976)** — Web UI WebSocket chat fails (code 1006) — missing `?agent=` query parameter in WebSocket URL construction.
- **[#6958](https://github.com/zeroclaw-labs/zeroclaw/issues/6958)** — Matrix channel session keyed on `event_id` causes amnesia between messages (each message creates a new isolated session). Fix PR [#6967](https://github.com/zeroclaw-labs/zeroclaw/pull/6967) filed same day.
- **[#6959](https://github.com/zeroclaw-labs/zeroclaw/issues/6959)** — `ToolAccessPolicy` not applied to eager built-in tools (only `tool_search` layer is gated). Fix PR [#6960](https://github.com/zeroclaw-labs/zeroclaw/pull/6960) filed same day.

### Fixed / Closed Today
- **Daemon channel exits in container** ([#6888](https://github.com/zeroclaw-labs/zeroclaw/issues/6888)) — Fixed for v0.8-beta-1 Podman issue.
- **OpenAI Codex OAuth fallback** ([#6923](https://github.com/zeroclaw-labs/zeroclaw/issues/6923)) — Typed config path not using OAuth auth at runtime.
- **Cron manual_run persistence** ([#6632](https://github.com/zeroclaw-labs/zeroclaw/issues/6632)) — Best-effort delivery failures mis-recorded as `ok`.
- **Streamed output during websocket steering** ([#6661](https://github.com/zeroclaw-labs/zeroclaw/issues/6661)) — Transcript integrity preserved.

---

## Feature Requests & Roadmap Signals

### Strong Signals (likely in v0.8.1)

| Issue | Feature | Likelihood |
|-------|---------|------------|
| [#6977](https://github.com/zeroclaw-labs/zeroclaw/issues/6977) | `http_request` private-host allowlist | **Very high** — PR [#6981](https://github.com/zeroclaw-labs/zeroclaw/pull/6981) filed same day |
| [#6966](https://github.com/zeroclaw-labs/zeroclaw/pull/6966) | Full prompt/completion capture on OTel spans | **Very high** — PR open, stacked on observability work |
| [#6957](https://github.com/zeroclaw-labs/zeroclaw/pull/6957) | `file_download` tool (remote file fetch) | **High** — PR filed today |
| [#6950](https://github.com/zeroclaw-labs/zeroclaw/issues/6950) | TUI Alt+1–5 keybindings for compact keyboards | **High** — Quick fix, `size: XS` |
| [#6886](https://github.com/zeroclaw-labs/zeroclaw/issues/686? — likely linked to the skills scope elevation work) | Skill-scoped tool activation (temporary elevation) | **Medium** — Complex, blocked on maintainer review |

### RFCs Under Consideration
- **[#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954)** — Route scheduled tasks through orchestrator message pipeline (fixes 5 related cron bugs at root cause)
- **[#6943](https://github.com/zeroclaw-labs/zeroclaw/issues/6943)** — Replace Extism with direct wasmtime component model host (deconflicting FND-001 plugin system goals)
- **[#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971)** — Security UX, runtime credential boundaries, isolation defaults

### Long-Term Architecture
- **[#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489)** — "Everything is a plugin" — unifying Integrations + Plugins into a single catalog. This is the v0.9+ direction but getting active PR queue support via [#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970).

---

## User Feedback Summary

### Real Pain Points (from issue descriptions)

- **"I recently migrated from Letta to ZeroClaw and one behaviour I relied on heavily is gone"** — [#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) — User frustrated that per-peer modality preference and `send_via` tool are missing, creating morning briefing and channel-routing workflow breakage.
- **"The bot has no access to prior conversation history — each reply starts cold"** — [#6958](https://github.com/zeroclaw-labs/zeroclaw/issues/6958) — Matrix user reporting the session model makes the bot effectively amnesiac.
- **"Even though the configuration was functioning correctly previously"** — [#6888](https://github.com/zeroclaw-labs/zeroclaw/issues/6888) — Regression in v0.8-beta-1 broke previously working Podman container setup.
- **"The Web UI JavaScript constructs the WebSocket URL with `token` and `session` but omits `agent`"** — [#6976](https://github.com/zeroclaw-labs/zeroclaw/issues/6976) — Fresh user hitting a broken default Web UI deployment path.

### Satisfaction Signals
- High community engagement: multiple contributors filing fix PRs (Audacity88, alex-nax, JordanTheJet, eldar702, drbparadise, tmigone — all active in the last 24h).
- Users proposing RFCs and architectural improvements (mov-xound-glitch, bheatwole) signals trust in the project's direction.

---

## Backlog Watch

### Critical: Unanswered Issues Needing Maintainer Attention

| Issue | Days Open | Status | Why It Matters |
|-------|-----------|--------|----------------|
| [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) — DeepSeek-V4 incompatible | **34 days** | `in-progress` | P1, 4 👍, top community pain point. Fix PR [#6980](https://github.com/zeroclaw-labs/zeroclaw/pull/6980) filed today — needs review. |
| [#5450](https://github.com/zeroclaw-labs/zeroclaw/pull/5450) — IPv6 support for tools | **51 days** | `needs-author-action` | Oldest open PR. Author unresponsive. IPv6 support is increasingly requested. |
| [#6190](https://github.com/zeroclaw-labs/zeroclaw/pull/6190) — OTel memory instrumentation | **30 days** | Blocked on #6009 | Significant observability work waiting on dependency merge. |
| [#6667](https://github.com/zeroclaw-labs/zeroclaw/pull/6667) — Background review fork + skill_manage | **14 days** | `needs-author-action` | XL PR, major skills feature — author needs to address feedback. |

### Stalled / Blocked Issues
- **[#6915](https://github.com/zeroclaw-labs/zeroclaw/issues/6915)** — Skill-scoped tool activation (blocked, needs-maintainer-review). This is a prerequisite for the entire skills power-user workflow.
- **[#6943](https://github.com/zeroclaw-labs/zeroclaw/issues/6943)** — Plugin system deconfliction (needs-maintainer-review). If unresolved, will block the "Everything is a plugin" roadmap (#6489).

### Risk: 153 Lost Commits Audit
- **[#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)** — Still open after 34 days. Two recovered today via [#6972](https://github.com/zeroclaw-labs/zeroclaw/pull/6972), but 151 commits remain unaudited. This is a latent risk for regressions the team doesn't know exist.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*