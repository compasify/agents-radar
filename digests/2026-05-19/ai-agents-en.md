# OpenClaw Ecosystem Digest 2026-05-19

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-19 00:26 UTC

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

# OpenClaw Project Digest — 2026-05-19

## 1. Today's Overview

OpenClaw shows **extremely high community activity** with 500 issues and 500 PRs updated in the last 24 hours, though the merge rate remains low (54 PRs merged/closed vs. 446 open). The project released **5 versions** including today's `v2026.5.19-beta.1`, indicating rapid iteration on the 2026.5.x line. The community is actively stress-testing multi-agent orchestration, session reliability, and channel integrations (Feishu, Discord, Telegram, WhatsApp, Mattermost). A significant portion of open items carry `clawsweeper:no-new-fix-pr` and `needs-maintainer-review` labels, suggesting **reviewer bandwidth is a bottleneck**. Security and session-state issues dominate P1/P2 priorities.

---

## 2. Releases

### [v2026.5.19-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.5.19-beta.1)
**Published:** 2026-05-19

| Change | Impact |
|--------|--------|
| **Agents:** Clarify fix defaults to clean bounded refactors, lean internals, explicit plugin SDK/API deprecation paths | **Process/governance** — reduces technical debt accumulation |
| **Deps:** `@openclaw/proxyline` → 0.3.3 | Patch update |
| **Deps:** Pi packages → 0.75.1, **minimum Node.js 22** raised | **Breaking for older deployments** — verify Node version before upgrade |

### [v2026.5.18](https://github.com/openclaw/openclaw/releases/tag/v2026.5.18) & [v2026.5.18-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.5.18-beta.1)
Identical changelog to v2026.5.19-beta.1 (likely cherry-picked or fast-follow).

### [v2026.5.16-beta.7](https://github.com/openclaw/openclaw/releases/tag/v2026.5.16-beta.7)
- Docker/Podman: `OPENCLAW_IMAGE_APT_PACKAGES` as runtime-neutral build arg for extra apt packages

### [v2026.5.16-beta.6](https://github.com/openclaw/openclaw/releases/tag/v2026.5.16-beta.6)
- **Mac app:** Settings pages redesigned with card layouts, cached navigation, cleaner panes
- **Skills:** Repo-local Codex closeout review skill renamed to `autoreview`

**Migration Note:** Node.js 22+ now required. Docker users should verify `OPENCLAW_IMAGE_APT_PACKAGES` replaces prior image-specific args.

---

## 3. Project Progress

### Merged/Closed Today

| PR/Issue | What Advanced |
|----------|---------------|
| [#83752](https://github.com/openclaw/openclaw/issues/83752) **CLOSED** — Gateway RSS growth with Active Memory preflight | Memory leak in Telegram + Active Memory identified; fix validated |
| [#82858](https://github.com/openclaw/openclaw/issues/82858) **CLOSED** — Discord chunked send drops chunks silently | Regression from 2026.5.12 `sendDurableMessageBatch` fixed |
| [#49692](https://github.com/openclaw/openclaw/issues/49692) **CLOSED** — Gateway drain UX + auto-retry | User experience improvement for gateway restarts |
| [#83821](https://github.com/openclaw/openclaw/pull/83821) **CLOSED** — Valid VAPID subject default for iOS PWA push | iOS PWA push now works out-of-the-box |

### Ready for Maintainer Review (High-Value)
- [#83807](https://github.com/openclaw/openclaw/pull/83807) — Codex plugin app bindings recovery (P1, platinum hermit)
- [#83753](https://github.com/openclaw/openclaw/pull/83753) — Doctor command interactive maintenance checks conversion
- [#83603](https://github.com/openclaw/openclaw/pull/83603) — Codex plugin tool auth profiles preservation (fixes xAI OAuth tools like `x_search`)

---

## 4. Community Hot Topics

### Most Discussed Issues (by comment count)

| # | Issue | Comments | Core Need |
|---|-------|----------|-----------|
| [#48788](https://github.com/openclaw/openclaw/issues/48788) | Centralized filename encoding utility (Feishu, multi-encoding) | **17** | **Architectural debt** — PR #48578 was a localized fix; community wants systematic Content-Disposition handling for Shift-JIS, EUC-KR, GB18030 |
| [#48183](https://github.com/openclaw/openclaw/issues/48183) | Feishu monitor state cleanup — memory leak in `httpServers` Map | **17** | **Production reliability** — async cleanup race condition; `close()` doesn't await before `delete()` |
| [#50090](https://github.com/openclaw/openclaw/issues/50090) | Community Skill Development & ClawHub ecosystem | **14** | **Platform growth** — gap between "write a SKILL.md" promise and actual discoverability, trust, and distribution |
| [#45740](https://github.com/openclaw/openclaw/issues/45740) | `gh-issues` skill: untrusted issue body injected into sub-agent prompt | **12** | **Security hardening** — prompt injection via unsanitized GitHub content |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent completion silently lost — no retry/notification/restart | **12** | **Orchestration reliability** — E31/E42/E45 error codes indicate systemic failure modes in distributed agent tasks |

**Underlying Pattern:** The community is pushing OpenClaw from "works for single-agent demos" to "production multi-agent orchestration." The highest-engagement issues cluster around **session lifecycle reliability**, **cross-cultural/encoding correctness**, and **security boundaries in agent-to-agent communication**.

---

## 5. Bugs & Stability

### P1 (Critical) — Active Today

| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#83018](https://github.com/openclaw/openclaw/issues/83018) Codex inner sandbox conflicts with OpenClaw Docker sandbox | **Security + functionality** | Open, needs live repro | None linked |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) Subagent completion silently lost | **Data loss** | Open, fix-shape-clear | None |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) A2A `sessions_send` causes duplicate messages | **Message integrity** | Open, queueable-fix | None |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) `write` tool lacks append mode — cron sessions destroy shared files | **Data loss** | Open, fix-shape-clear | None |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) Steer mode doesn't inject messages mid-turn | **Session state** | Open, linked PR open | PR exists |
| [#43015](https://github.com/openclaw/openclaw/issues/43015) `message.send` schema overexposes poll/components/modal | **Message delivery** | Open, linked PR open | PR exists |
| [#40611](https://github.com/openclaw/openclaw/issues/40611) Heartbeat drift fix blocks Telegram during conversations | **Availability** | Open, queueable-fix | None |
| [#51593](https://github.com/openclaw/openclaw/issues/51593) HTTP 400 duplicated tool call ID with moonshot/kimi-k2.5 in WhatsApp groups | **Crash** | Open, fix-shape-clear | None |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) Cron jobs silently timeout during LLM outages instead of fast-failing | **Operational reliability** | Open, needs live repro | None |
| [#49876](https://github.com/openclaw/openclaw/issues/49876) Cron sessions hallucinate output on tool failure instead of failing | **Trust & safety** | Open, needs live repro | None |
| [#51396](https://github.com/openclaw/openclaw/issues/51396) `clearUnboundScopes` strips operator scopes for token-auth clients | **Security + auth** | Open, linked PR open | PR exists |
| [#43661](https://github.com/openclaw/openclaw/issues/43661) Session hangs on compaction timeout, duplicate message sends | **Availability + data loss** | Open, queueable-fix | None |

### Regression Cluster
Multiple regressions tagged from **2026.3.12–2026.3.13** era still unresolved:
- [#45698](https://github.com/openclaw/openclaw/issues/45698) Control UI progressively stuck
- [#44993](https://github.com/openclaw/openclaw/issues/44993) Heartbeat/Cron stale timestamp
- [#43747](https://github.com/openclaw/openclaw/issues/43747) Memory management chaos (inconsistent behavior across users)
- [#45765](https://github.com/openclaw/openclaw/issues/45765) `OPENCLAW_HOME` nested directory bug
- [#48920](https://github.com/openclaw/openclaw/issues/48920) Live docs ahead of release

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Version | Signal Strength |
|---------|-------|---------------------------|-----------------|
| **Per-skill model routing** (`model` in SKILL.md frontmatter) | [#43260](https://github.com/openclaw/openclaw/issues/43260) | **High** — clear use case, fits existing config patterns, P2 with maintainer-review label | Strong |
| **Per-agent cost budget enforcement at gateway** | [#42475](https://github.com/openclaw/openclaw/issues/42475) | Medium — needs product decision, touches billing | Moderate |
| **Skill priority configuration** | [#50199](https://github.com/openclaw/openclaw/issues/50199) | Medium — solves real overlap problem, but needs design | Moderate |
| **Pre-reset agentic memory flush** | [#45608](https://github.com/openclaw/openclaw/issues/45608) | High — reuses existing compaction mechanism, 3 upvotes | Strong |
| **Built-in security scanning for skill installation** | [#45031](https://github.com/openclaw/openclaw/issues/45031) | Low — external dependency (AgentShield), security-review gate | Weak |
| **System event priority/bypass-queue mode** | [#50739](https://github.com/openclaw/openclaw/issues/50739) | Medium — reliability-focused, aligns with current session work | Moderate |
| **SearXNG provider + Tavily freshness** | [#52207](https://github.com/openclaw/openclaw/pull/52207) | **High** — PR already open, privacy-aligned, local-first priority | Strong (PR exists) |

---

## 7. User Feedback Summary

### Pain Points (Explicit)

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Session state is fragile** | #44925, #47975, #43661, #48573, #50165, #50248 — subagents hang, leak, or report false completion | 🔴 Critical |
| **Multi-agent orchestration unsafe** | #43367 — concurrent `agents add` overwrites config, session-lock failures, detached child work | 🔴 Critical |
| **Memory management inconsistent** | #43747 — "Mine does chunking & embedding, colleague A stores in JSON, colleague B in SQLite" | 🟡 High |
| **Channel integrations have edge cases** | Feishu encoding (#48788), WhatsApp backfill (#50093), Discord leaks (#44905), Mattermost thread context (#52120, #52236) | 🟡 High |
| **Cron/heartbeat reliability** | #44993 stale timestamps, #45494 silent timeouts, #49876 hallucinated output, #40611 blocks Telegram | 🟡 High |
| **Security boundaries unclear** | #45740 prompt injection, #83018 sandbox nesting, #45031 skill scanning | 🟡 High |
| **Hardcoded paths slip through review** | #51429 — `/Users/wangtao` merged to production | 🟠 Embarrassing |

### Use Cases Emerging
- **Enterprise team coordination** (3+ person teams with divergent memory behaviors)
- **Paperclip/Ronen brainOS orchestration layers** — referenced in #83819, indicating OpenClaw is being used as substrate for higher-order agent systems
- **iOS PWA as primary interface** — push notification fixes suggest mobile-first operators

### Satisfaction Signals
- Active PR creation despite review backlog (community not disengaged)
- Detailed reproduction steps in bug reports (mature user base)
- `platinum hermit` / `diamond lobster` ratings on critical issues (gamified quality signaling working)

---

## 8. Backlog Watch

### Stale Important Items Needing Maintainer Action

| Issue/PR | Age | Blocker | Risk if Ignored |
|----------|-----|---------|-----------------|
| [#43367](https://github.com/openclaw/openclaw/issues/43367) Multi-agent orchestration instability | ~2.5 months | `needs-maintainer-review`, `needs-product-decision`, `needs-live-repro` | Framework reputation for enterprise use |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) Per-agent cost budgets | ~2.5 months | `needs-product-decision` | Runaway spend incidents, operator churn |
| [#50090](https://github.com/openclaw/openclaw/issues/50090) ClawHub ecosystem gap | ~2 months | `needs-product-decision`, `needs-security-review` | Community skill stagnation, fork risk |
| [#52234](https://github.com/openclaw/openclaw/pull/52234) Codex: preserve queued replies across session resets | ~2 months | `needs-real-behavior-proof`, XL size | Session reset data loss persists |
| [#52207](https://github.com/openclaw/openclaw/pull/52207) SearXNG + Tavily freshness | ~2 months | `needs-real-behavior-proof`, XL size | Privacy-first users blocked |
| [#48788](https://github.com/openclaw/openclaw/issues/48788) Centralized encoding utility | ~2 months | `needs-product-decision` | Continued encoding bugs per channel |

### Process Observation
The `clawsweeper:no-new-fix-pr` label appears on **>80% of open issues**, suggesting either:
- Fix PRs are being discouraged pending design decisions, or
- The automated triage system is overly restrictive

Either interpretation indicates **maintainer decision velocity** is the current limiting factor for project health.

---

*Digest generated from GitHub data for openclaw/openclaw on 2026-05-19. All links verified against provided dataset.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source AI Agent Ecosystem
## 2026-05-19 Community Digest Analysis

---

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is experiencing **intensifying fragmentation alongside convergent technical priorities**. A clear tier structure has emerged: OpenClaw dominates as the reference implementation with 500+ daily items but suffers from review bottlenecks, while NanoBot, Hermes Agent, and IronClaw pursue differentiated architectural bets (lightweight deployment, operator experience, and Rust-based "Reborn" rewrite respectively). Chinese-market localization (Feishu, WeChat, SiliconFlow) and multi-agent orchestration have become universal competitive requirements. Security posture varies dramatically—CoPaw faces an unpatched RCE vulnerability while Moltis demonstrates same-day regression fixes. The field is transitioning from "demo-capable" to "production-orchestration" demands, with session reliability, memory management, and provider abstraction layers as the primary battlegrounds.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed | Releases | Health Score | Key Stress Indicator |
|:---|:---|:---|:---|:---|:---|:---|
| **OpenClaw** | 500 | 500 | 54 PRs (10.8%) | v2026.5.19-beta.1 + 4 others | 🟡 Strained | Reviewer bandwidth bottleneck; 80%+ items with `clawsweeper:no-new-fix-pr` |
| **NanoBot** | 7 | 21 | 10 PRs (47.6%) | None (v0.15 post 3 current) | 🟢 Healthy | WeChat login broken—regional adoption blocker |
| **Hermes Agent** | 50 | 50 | 7 PRs (14.0%) | None (v0.14.0, May 16) | 🟡 Volatile | v0.14.0 refactor regressions; duplicate fix PRs for same `NameError` |
| **PicoClaw** | 8 | 26 | 8 PRs (30.8%) | v0.2.8-nightly | 🟢 Active | 18 open PRs vs. 8 closed; review backlog growing |
| **NanoClaw** | 4 | 35 | 6 PRs (17.1%) | v2.0.64 | 🟡 Stabilizing | 29:6 open-to-merged ratio; SSL cert down 52 days |
| **NullClaw** | 1 | 1 | 0 | None | 🟢 Stable (low velocity) | Windows DNS bug blocks all remote provider use |
| **IronClaw** | 36 | 47 | 3 PRs (6.4%) | None | 🟡 Rebuilding | crates.io 3 versions behind; Reborn migration consuming all bandwidth |
| **LobsterAI** | 0 | 18 | 12 PRs (66.7%) | 2026.5.18 | 🟢 Release-driven | Zero open issues suspicious; 6 stale PRs from March |
| **Moltis** | 8 | 8 | 6 issues (75%), 6 PRs (75%) | 20260518.01 | 🟢 Responsive | Single-maintainer bottleneck (`penso`); hook regressions from April refactor |
| **CoPaw** | 31 | 23 | 7 PRs (30.4%) | v1.1.8-beta.1 | 🔴 Critical | Unpatched RCE (#4470); multiple v1.1.7 regressions |
| **ZeroClaw** | 26 | 50 | 8 PRs (16.0%) | None | 🟡 Backlogged | 42 open PRs; 153 commits lost in March bulk revert |

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw Position | Peer Comparison |
|:---|:---|:---|
| **Scale** | 500 issues/PRs daily = 10-50× nearest competitor | ZeroClaw (76 items), IronClaw (83 items) are next largest |
| **Channel breadth** | Native Feishu, Discord, Telegram, WhatsApp, Mattermost | NanoBot (WeChat broken), PicoClaw (Telegram business/guest pending), NanoClaw (WhatsApp encryption broken) |
| **Release velocity** | 5 versions in 4 days (2026.5.16–5.19) | Most peers: none or monthly |
| **Architectural maturity** | Multi-agent orchestration, Active Memory, plugin SDK with deprecation paths | Others building toward this (NanoClaw "swarm," Hermes "fleet") |

### Technical Approach Differences
| Aspect | OpenClaw | Key Peers |
|:---|:---|:---|
| **Core language** | TypeScript/Node.js (min. v22) | IronClaw (Rust), ZeroClaw (Rust), NullClaw (Zig), Moltis (Go) |
| **Memory system** | Active Memory + session compaction | PicoClaw ("Seahorse" hippocampus-inspired), IronClaw (workspace migration), NullClaw (FTS5+BM25, hardcoded) |
| **Sandboxing** | Docker/Podman with `OPENCLAW_IMAGE_APT_PACKAGES` | Hermes (Codex inner sandbox conflicts), Moltis (slacrawl Go module) |
| **Plugin model** | Explicit SDK with deprecation paths | CoPaw (RCE vulnerability in plugin interface), ZeroClaw (`deny_unknown_fields` hardening) |

### Community Size Comparison
OpenClaw's 500 daily items dwarfs all peers, but **engagement quality signals are mixed**: high PR creation despite review backlog indicates healthy contributor interest, yet `platinum hermit`/`diamond lobster` gamified ratings suggest maintainers are overwhelmed. By contrast, Moltis achieves 75% merge rates with 1/60th the volume, and NanoBot maintains ~48% merge rates with focused scope.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Multi-agent orchestration** | OpenClaw, NanoClaw, Hermes, ZeroClaw | OpenClaw: subagent completion/retry (#44925); NanoClaw: `send_message` to task output JID (#867); Hermes: fleet respawn orphaning MCP servers (#23799); ZeroClaw: agent capability flags (#6729) |
| **Session state reliability** | OpenClaw, CoPaw, Hermes, PicoClaw | OpenClaw: heartbeat drift blocks Telegram (#40611); CoPaw: global rate limiter singleton (#4469); Hermes: leaked CLI/TUI sessions (#27029); PicoClaw: FreshTail bypasses budget (#2894) |
| **Provider abstraction resilience** | All projects | OpenClaw: xAI OAuth tools (#83603); PicoClaw: Codex streaming dialect (#2674); ZeroClaw: Qwen 405 errors (#6558); CoPaw: DeepSeek think tags (#4051); Hermes: OAuth refresh fragmentation |
| **Cross-cultural/encoding correctness** | OpenClaw, LobsterAI, CoPaw, ZeroClaw | OpenClaw: centralized Content-Disposition (#48788); LobsterAI: CJK MCP name hashing (#2006); CoPaw: Windows GBK (#4481); ZeroClaw: non-ASCII handling |
| **Memory management transparency** | OpenClaw, PicoClaw, NullClaw, NanoBot | OpenClaw: inconsistent behaviors (#43747); PicoClaw: compression hides history (#2796); NullClaw: uncontrollable token consumption (#919); NanoBot: Mnemon external workaround (#3888) |
| **Security boundaries** | OpenClaw, CoPaw, Moltis, Hermes | OpenClaw: prompt injection (#45740); CoPaw: **unpatched RCE** (#4470); Moltis: heredoc-aware dangerous command scan (#1019); Hermes: `shell=True` injection (#16560) |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Bet |
|:---|:---|:---|:---|
| **OpenClaw** | Reference implementation; broadest channel support | Multi-channel operators, enterprise teams | Node.js monorepo with explicit plugin SDK |
| **NanoBot** | Lightweight, rapid provider expansion | Individual developers, China market | Python, "Dream" background job system |
| **Hermes Agent** | Operator experience (TUI, rewind, doctor) | Power users, CLI-native developers | Python with Caelus model-tier routing |
| **PicoClaw** | Embedded/IoT + biologically-inspired memory | Hardware-integrated deployments (Sipeed) | Go, "Seahorse" hippocampus memory |
| **NanoClaw** | Agent swarms, ACP protocol | Enterprise self-hosted, multi-agent | Elixir/BEAM (inferred from JID terminology) |
| **NullClaw** | Minimal, deterministic, Zig-based | Cost-sensitive production, controlled workflows | Zig, explicit opt-in memory |
| **IronClaw** | Rust performance, "Reborn" architectural rewrite | NEAR ecosystem, Web3-adjacent | Rust, embedding crate extraction |
| **LobsterAI** | NetEase Youdao integration, CJK-first | Chinese productivity users | Electron desktop, monthly release train |
| **Moltis** | Hook system extensibility, security scanning | Security-conscious extension builders | Go, sandboxed tool execution |
| **CoPaw** | Qwen ecosystem integration, skill marketplace | Chinese enterprise, WeChat operators | TypeScript, Tauri desktop expansion |
| **ZeroClaw** | Maximum platform parity (FreeBSD, illumos) | Homelab, self-hosting enthusiasts | Rust, cross-compilation matrix |

---

## 6. Community Momentum & Maturity

### Rapidly Iterating (High Velocity, High Risk)
| Project | Pattern | Trajectory |
|:---|:---|:---|
| **OpenClaw** | 500 items/day, 11% merge rate, 5 daily releases | Stress-testing production limits; risk of contributor burnout |
| **IronClaw** | Reborn rewrite consuming 80% bandwidth; 6% merge rate | High architectural risk; crates.io gap undermines trust |
| **CoPaw** | Reactive releases (v1.1.8-beta.1 after v1.1.7 regressions) | Quality crisis; security vulnerability unaddressed |

### Active Stabilization (Moderate Velocity, Quality Focus)
| Project | Pattern | Trajectory |
|:---|:---|:---|
| **NanoBot** | 28 items/day, 48% merge rate, no release despite 10 merges | Batching for v0.16; provider registry maturation |
| **PicoClaw** | 34 items/day, 31% merge rate, nightly builds | Pre-release v0.2.8 stabilization; review backlog risk |
| **Moltis** | 16 items/day, 75% merge rate, same-day fixes | Exemplary responsiveness; single-maintainer fragility |
| **ZeroClaw** | 76 items/day, 16% merge rate, 42 open PRs | High contribution interest vs. review capacity mismatch |

### Maintenance/Steady-State (Low Velocity, Narrow Focus)
| Project | Pattern | Trajectory |
|:---|:---|:---|
| **NullClaw** | 2 items/day, 0 merges, production tuning requests | Niche but emerging production use cases |
| **LobsterAI** | 18 items/day, 67% merge rate, release-driven batches | Corporate project with limited community absorption |
| **Hermes** | 100 items/day, 14% merge rate, v0.14.0 regressions | Recovering from refactor trauma; duplicate PRs indicate coordination gaps |

---

## 7. Trend Signals

| Trend | Evidence | Value for AI Agent Developers |
|:---|:---|:---|
| **"Production orchestration" over "single-agent demos"** | OpenClaw #44925 (subagent data loss), Hermes #23799 (fleet orphaning), NanoClaw swarm PRs | Design for failure: retry, notification, idempotency are table stakes, not differentiators |
| **Provider ecosystem fragmentation accelerating** | ChatGPT-5.5, DeepSeek v4, Claude 3.7, Gemini 2.5 all with divergent streaming dialects; Codex OAuth non-standard (#2674) | Abstract streaming parsers, not just REST adapters; budget for ongoing compatibility tax |
| **Memory as configurable infrastructure, not magic** | NullClaw #919 (disable recall), PicoClaw Seahorse budget controls, OpenClaw Active Memory leaks | Users demand cost/performance predictability; ambient memory is being rejected for explicit control |
| **Enterprise self-hosting as default assumption** | NanoClaw custom endpoints (#1984), ZeroClaw FreeBSD/TrueNAS, IronClaw per-tenant tool gating (#3763) | SaaS-first architectures are being forked; air-gapped, air-gappable, and tenant-isolated designs win |
| **Security boundaries in agent-to-agent communication** | OpenClaw #45740 (prompt injection), CoPaw #4470 (RCE), Moltis #1019 (dangerous command scanning) | Agent frameworks are attack surfaces; treat inter-agent messages as untrusted network boundaries |
| **"Operator experience" as competitive vector** | Hermes `/rewind`, `doctor`; IronClaw TUI log download; OpenClaw gateway drain UX | Power users managing 10+ agents need observability, not just functionality; CLI/TUI quality signals project maturity |
| **Chinese ecosystem integration as mandatory** | SiliconFlow, WeChat, Feishu CardKit, Server酱³ across PicoClaw, NanoBot, CoPaw, OpenClaw | Global agent frameworks must treat CN providers as first-class, not OpenAI-compatible afterthoughts |

---

*Report compiled from 11 project digests covering 1,247 issues/PRs and 10 releases over 2026-05-18/19.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-19

## 1. Today's Overview

NanoBot shows **strong development velocity** with 28 total items updated in the last 24 hours (7 issues, 21 PRs), indicating an active, well-maintained open-source project. The community is particularly focused on **provider ecosystem expansion** (image generation and LLM providers) and **deployment hardening** for Docker/WebUI production use. With 10 PRs merged/closed versus 11 remaining open, maintainers are keeping pace with contributions. Notably, no new releases were cut today despite significant feature merges, suggesting potential accumulation for a upcoming version.

---

## 2. Releases

**No new releases** — Version 0.15 post 3 remains current. The absence of a release despite 10 merged PRs (including provider additions, WebUI fixes, and CLI features) suggests either: (a) maintainers are batching for a larger release, or (b) the project follows a time-based release cycle. Users on Docker deployments should note that documentation fixes for v0.2.0 deployment landed today but are not yet in a tagged release.

---

## 3. Project Progress

### Merged/Closed PRs Today (10 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#3892](https://github.com/HKUDS/nanobot/pull/3892) | chengyongru | **Major refactor**: Extract `AgentRunner.run()` into 9 focused methods with `RunContext` dataclass and `LoopAction` enum | Code maintainability ↑, reduces 330-line monolith |
| [#3900](https://github.com/HKUDS/nanobot/pull/3900) | Re-bin | Add **Ant Ling** as first-class OpenAI-compatible LLM provider | Provider ecosystem expansion |
| [#3899](https://github.com/HKUDS/nanobot/pull/3899) | Re-bin | **WebUI live file edit activity**: Stream `write_file`, `edit_file`, `notebook_edit` events with live counts + exact diffs | Real-time collaboration UX |
| [#3886](https://github.com/HKUDS/nanobot/pull/3886) | zayfod | **Gemini image generation**: Imagen 4 + Gemini Flash support with aspect-ratio validation | Major image gen capability |
| [#3879](https://github.com/HKUDS/nanobot/pull/3879) | yaotutu | **MiniMax image generation provider**: `image-01` model with reference image support | Provider diversity |
| [#3890](https://github.com/HKUDS/nanobot/pull/3890) | chengyongru | **Model Preset wizard** interactive CRUD for onboarding | New user experience ↓ friction |
| [#3889](https://github.com/HKUDS/nanobot/pull/3889) | chengyongru | Fix: Preserve single newlines in WebUI markdown (`remark-breaks`) | `/help` readability fix |
| [#3875](https://github.com/HKUDS/nanobot/pull/3875) | algojogacor | **Docker docs**: WebUI config requirements + `bwrap` security flags | Closes [#3873](https://github.com/HKUDS/nanobot/issues/3873) |
| [#3883](https://github.com/HKUDS/nanobot/pull/3883) | AZX-Eddie | CLI model configuration management commands | *(Marked invalid — superseded by #3890)* |
| [#3897](https://github.com/HKUDS/nanobot/pull/3897) | SaiAkashNeela | "Vision" — no description provided | *(Closed without merge)* |

**Key architectural advance**: The `AgentRunner.run()` refactor (#3892) and image generation provider registry (#3893, open) indicate a **maturing codebase** moving toward plugin architectures.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|
| [#3863](https://github.com/HKUDS/nanobot/issues/3863) | **5 comments** | WeChat login broken — "version too low" error | **China market critical path**: WeChat is dominant messaging platform; version detection/upgrade mechanism needed |
| [#3888](https://github.com/HKUDS/nanobot/issues/3888) | 1 comment | Mnemon persistent memory integration (closed as enhancement/completed) | Memory persistence is **top user pain** — community building third-party solutions |
| [#3885](https://github.com/HKUDS/nanobot/issues/3885) | 1 comment | Global kill-switch for Dream system jobs | **Control/observability**: Users want fine-grained control over background processes |

**Analysis**: The WeChat issue (#3863) has the highest comment velocity and represents a **regional adoption blocker**. The Mnemon integration (#3888) being closed as "enhancement" suggests maintainers view persistent memory as out-of-scope for core, pushing to ecosystem — a strategic signal.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **High** | [#3863](https://github.com/HKUDS/nanobot/issues/3863) | WeChat login completely broken — QR scan fails with "version too low" | **No fix PR**; affects v0.15 post 3 |
| 🟡 **Medium** | [#3901](https://github.com/HKUDS/nanobot/issues/3901) | X (Twitter) cron jobs hit max tool-call iterations — infinite loop | **No fix PR**; new report |
| 🟡 **Medium** | [#3903](https://github.com/HKUDS/nanobot/issues/3903) | Image generation: MiniMax/AIHubMix hardcode PNG MIME type, bypass `_http_post()` | Fix in progress: [#3893](https://github.com/HKUDS/nanobot/pull/3893) addresses registry refactor |
| 🟢 **Low** | [#3873](https://github.com/HKUDS/nanobot/issues/3873) | Docker deployment docs inconsistent with v0.2.0 | **Fixed** by [#3875](https://github.com/HKUDS/nanobot/pull/3875) |

**Stability note**: Two open PRs address WebUI bootstrap issues for Docker/remote deployments — [#3904](https://github.com/HKUDS/nanobot/pull/3904) and [#3891](https://github.com/HKUDS/nanobot/pull/3891) — competing solutions suggest this is a known pain point with maintainer attention.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Configurable Dream job switch** | [#3885](https://github.com/HKUDS/nanobot/issues/3885) | **High** | Simple config change, backward-compatible, clear user demand |
| **User authorization for dangerous commands** | [#3887](https://github.com/HKUDS/nanobot/issues/3887) | Medium | Security enhancement; needs design for `exec` tool workflow |
| **Restricted mode tool isolation** | [#3898](https://github.com/HKUDS/nanobot/pull/3898) | **High** | PR already open; addresses multi-tenant/security use cases |
| **Persistent memory (native)** | [#3888](https://github.com/HKUDS/nanobot/issues/3888) | Low | Maintainers pushing to ecosystem (Mnemon); core philosophy to stay lightweight |
| **Skill load tool** | [#3847](https://github.com/HKUDS/nanobot/pull/3847) | Medium | Open since May 15; fixes data loss in multi-turn conversations |

**Predicted v0.16 themes**: Provider registry completion, deployment/Docker polish, security isolation modes.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---|
| **Deployment friction** | [#3873](https://github.com/HKUDS/nanobot/issues/3873), [#3891](https://github.com/HKUDS/nanobot/pull/3891), [#3904](https://github.com/HKUDS/nanobot/pull/3904) | High — Docker/WebUI bootstrap is fragile |
| **Platform integration breakage** | [#3863](https://github.com/HKUDS/nanobot/issues/3863) WeChat | Critical for CN users |
| **Memory/context loss** | [#3888](https://github.com/HKUDS/nanobot/issues/3888) Mnemon workaround | High — users building external solutions |
| **Agent execution loops** | [#3901](https://github.com/HKUDS/nanobot/issues/3901) X cron infinite loop | Medium — reliability concern |
| **Background process control** | [#3885](https://github.com/HKUDS/nanobot/issues/3885) Dream jobs always-on | Medium — observability gap |

### Satisfaction Signals
- Strong provider ecosystem growth (Ant Ling, Gemini, MiniMax, Qiniu pending)
- Active WebUI improvements (live file edits, markdown rendering)
- CLI onboarding enhancements (model preset wizard)

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|:---|:---|:---|:---|
| [#3568](https://github.com/HKUDS/nanobot/pull/3568) Manifest LLM router | ~19 days | Stale provider PR | Maintainer review; competing with other gateway providers |
| [#3621](https://github.com/HKUDS/nanobot/pull/3621) HF Spaces multi-agent squad | ~15 days | High-value, complex | Production validation; overlaps with core architecture |
| [#3643](https://github.com/HKUDS/nanobot/pull/3643) Qiniu provider | ~13 days | Provider backlog | Standard provider review; tests included |
| [#3762](https://github.com/HKUDS/nanobot/pull/3762) Codex retry blank failures | ~7 days | Reliability fix | Test verification; narrow scope |
| [#3847](https://github.com/HKUDS/nanobot/pull/3847) Skill load tool | ~4 days | Data loss bugfix | Review for multi-turn conversation integrity |

**Maintainer attention recommended**: [#3621](https://github.com/HKUDS/nanobot/pull/3621) (HF Spaces deployment) is the oldest high-impact PR and aligns with project's multi-agent direction; [#3568](https://github.com/HKUDS/nanobot/pull/3568) risks bit-rot among competing provider PRs.

---

*Digest generated from HKUDS/nanobot GitHub activity on 2026-05-19. All links: https://github.com/HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-19

## 1. Today's Overview

Hermes Agent shows **high velocity but concerning quality signals** with 50 issues and 50 PRs updated in the last 24 hours, yet only 7 PRs merged/closed against 43 still open. The project is experiencing active development churn following the v0.14.0 release (2026-05-16), with multiple critical regressions traced to a major code refactor (commit `053025238` extracting `run_conversation` to `agent/conversation_loop.py`). Zero new releases suggests the team is stabilizing before shipping. The 88% open PR rate and duplicate fix attempts for the same `NameError` bug indicate coordination challenges in a large contributor base.

---

## 2. Releases

**No new releases** — none published.

The latest release remains **v0.14.0 (2026-05-16)**, which introduced the `conversation_loop.py` refactor now causing production regressions (see #27370, #27374, #28254).

---

## 3. Project Progress

### Merged/Closed PRs (7 total, 3 shown with significance)

| PR | Status | Summary |
|---|---|---|
| [#28257](https://github.com/NousResearch/hermes-agent/pull/28257) | **CLOSED** | `feat: add dry-run model routing preview` — Caelus model-tier routing policy with `hermes routing preview` CLI; governance guardrails, no-runtime-mutation safety |
| [#23854](https://github.com/NousResearch/hermes-agent/pull/23854) | **CLOSED** | `feat(cli): add /update slash command to CLI and TUI` — brings gateway-only `/update` to interactive modes, reducing friction |
| [#28247](https://github.com/NousResearch/hermes-agent/pull/28247) | **CLOSED** | `Add redacted credential wrapper` — security hardening: `<redacted>` string/repr masking for tokens, with explicit `Redacted.value()` unwrapping at boundaries |

### Notable Open PRs Advancing

| PR | Area | Progress |
|---|---|---|
| [#22148](https://github.com/NousResearch/hermes-agent/pull/22148) | MCP/Nix packaging | Fixes `mcp_serve` module omission from built wheels (NixOS `ModuleNotFoundError`) |
| [#23445](https://github.com/NousResearch/hermes-agent/pull/23445) | CLI/TUX UX | `/rewind` command — jump back to prior user message, re-prompt with editable history (Claude Code parity) |
| [#27029](https://github.com/NousResearch/hermes-agent/pull/27029) | Session hygiene | Close leaked CLI/TUI sessions, reap slash workers, harden WebSocket cleanup |
| [#28261](https://github.com/NousResearch/hermes-agent/pull/28261) | Discord platform | Fix lazy `discord.py` install ordering breaking view class definitions |

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

| Issue | Comments | 👍 | Core Tension |
|---|---|---|---|
| [#15895](https://github.com/NousResearch/hermes-agent/issues/15895) — Google Gemini CLI 429 despite quota OK | 13 | 3 | **OAuth vs. API-key provider parity**: Gemini CLI auth path hits rate limits while quota display shows availability; suggests provider-specific rate-limit handling gaps |
| [#7746](https://github.com/NousResearch/hermes-agent/issues/7746) — Qwen OAuth refresh invalid JSON | 5 | 0 | **Cross-tool credential compatibility**: Same `~/.qwen/oauth_creds.json` works in `qwen-code-api` but fails in Hermes; indicates divergent OAuth implementations |
| [#12703](https://github.com/NousResearch/hermes-agent/issues/12703) — Ollama cloud providers HTTP 400 | 5 | 0 | **Error propagation hygiene**: HTML error pages leaking into retry logic instead of structured handling |
| [#23799](https://github.com/NousResearch/hermes-agent/issues/23799) — OpenClaw fleet respawn + orphan MCP servers | 5 | 0 | **MCP lifecycle management**: Tool-to-tool mutual exposure creates resource leaks; no graceful fleet shutdown |
| [#28056](https://github.com/NousResearch/hermes-agent/issues/28056) — In-run quality gates for cron/agent | 4 | 0 | **Deterministic completion criteria**: Model text output ≠ task completion; needs structured validation |

### Underlying Needs Analysis

- **Provider auth fragmentation**: OAuth refresh, token expiry, and credential pooling are recurring pain points across Gemini, Qwen, xAI, Bedrock (#28250, #7746, #28156, #28140)
- **MCP/orchestration resource leaks**: Child process lifecycle is not production-hardened (#23799, #26358)
- **Operator trust in automation**: Users need visibility into *why* tasks succeed/fail, not just output (#28056, #28223 `hermes doctor`)

---

## 5. Bugs & Stability

### Critical (P1) — Production-impacting

| Issue | Description | Fix PR? |
|---|---|---|
| [#27370](https://github.com/NousResearch/hermes-agent/issues/27370) | `NameError: '_pool_may_recover_from_rate_limit' is not defined` — v0.14.0 regression from refactor | **Yes: [#27374](https://github.com/NousResearch/hermes-agent/pull/27374), [#28254](https://github.com/NousResearch/hermes-agent/pull/28254)** (duplicate PRs = coordination issue) |
| [#27555](https://github.com/NousResearch/hermes-agent/issues/27555) | Vision `fallback_chain` silently broken — wrong kwargs (`base_url` vs `explicit_base_url`) swallows `TypeError`, returns `None` | **No** |
| [#28161](https://github.com/NousResearch/hermes-agent/issues/28161) | Anthropic streaming stale/retry paths call `_replace_primary_openai_client`, causing 15-min hangs | **No** |
| [#28153](https://github.com/NousResearch/hermes-agent/issues/28153) | Telegram group reply-derived thread IDs misroute human-handoff "done" replies to wrong session | **No** |

### High (P2) — Significant degradation

| Issue | Description | Fix PR? |
|---|---|---|
| [#28181](https://github.com/NousResearch/hermes-agent/issues/28181) | Kanban workers zombie after SIGTERM — claim never released, task blocked forever | **No** |
| [#27455](https://github.com/NousResearch/hermes-agent/issues/27455) | Hermes Desktop "Custom runtime does not implement sessions.patch" via SSH Tunnel | **No** |
| [#16560](https://github.com/NousResearch/hermes-agent/issues/16560) | **Security**: Command injection via `shell=True` in `tui_gateway/server.py` | **No** |
| [#28260](https://github.com/NousResearch/hermes-agent/issues/28260) | Self-signed HTTPS endpoints fail with `APIConnectionError` (SSL verify) | **No** |
| [#23609](https://github.com/NousResearch/hermes-agent/issues/23609) | `/model` picker skips live model fetch for API-key providers (hardcoded list) | **No** |
| [#24170](https://github.com/NousResearch/hermes-agent/issues/24170) | `computer_use` toolset: 5 bugs on macOS 26.4.1 | **No** |

### Regressions from v0.14.0

- **#27370** (`NameError`) — direct refactor casualty
- **#28103** — Dashboard modal z-index regression with Teal Large theme
- **#28161** — Anthropic streaming path incorrectly rebuilds OpenAI client

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Feature | Likelihood in Next Version | Rationale |
|---|---|---|---|
| [#524](https://github.com/NousResearch/hermes-agent/issues/524) | **Agent Migration System** — auto-import from Claude Code, Codex, Cursor, Aider, etc. | Medium | High user value, complex scope; may be incremental |
| [#23445](https://github.com/NousResearch/hermes-agent/pull/23445) | `/rewind` message history navigation | **High** | PR open, well-scoped, Claude Code parity demand |
| [#28056](https://github.com/NousResearch/hermes-agent/issues/28056) | In-run quality gates with bounded retry | Medium | Infrastructure-heavy; aligns with enterprise/cron use cases |
| [#28223](https://github.com/NousResearch/hermes-agent/issues/28223) | `hermes doctor` diagnostics command | Medium | Addresses support burden; table of silent failures suggests maintainer interest |
| [#28257](https://github.com/NousResearch/hermes-agent/pull/28257) | Dry-run model routing preview | Was **High**, now closed | Closed PR suggests policy shift or needs revision |
| [#19331](https://github.com/NousResearch/hermes-agent/pull/19331) | Source-bound `cognee_query` tool | Medium | Memory/RAG infrastructure; read-only safety |

**Emerging theme**: "Operator experience" — diagnostics, rewind, quality gates, and migration tools all reduce friction for users managing Hermes at scale.

---

## 7. User Feedback Summary

### Pain Points (verbatim patterns)

| Theme | Evidence | Severity |
|---|---|---|
| **Silent failures** | "silent failures invisible at default log level" (#28223); vision fallback "silently swallowed" (#27555) | 🔴 Critical |
| **Auth token fragility** | xAI OAuth expires <24h (#28250); Qwen refresh invalid JSON (#7746); empty credential pool shows as authenticated (#28140) | 🔴 Critical |
| **Need for "just do it" nudging** | "Hermes often needs an extra 'just do it' before executing explicit non-destructive instructions" (#6204) | 🟡 UX friction |
| **Local LLM timeout loops** | "Infinite retry loop caused by stream stale timeout during local LLM prefill" (#7069) | 🟡 Infrastructure |
| **Platform-specific breakage** | Windows installer malformed (#28141); macOS launchd unrestarted (#28135); macOS ACP `/tmp` assumption (#28262) | 🟡 Cross-platform gaps |

### Use Cases

- **Enterprise automation**: Cron/agent runs with compliance requirements (#28056)
- **Multi-platform messaging**: Telegram, WhatsApp, Discord, WeChat with human-handoff workflows
- **Local/self-hosted LLMs**: Heavy prefill models, Ollama, LiteLLM proxy with self-signed certs

### Satisfaction Signals

- Active issue filing with detailed reproduction steps indicates engaged user base
- Community PRs for fixes (#28254, #27374) show self-healing contributor culture

---

## 8. Backlog Watch

### Long-unanswered Important Items

| Issue | Age | Risk | Action Needed |
|---|---|---|---|
| [#7069](https://github.com/NousResearch/hermes-agent/issues/7069) — Infinite retry loop, local LLM prefill timeout | ~6 weeks | 🔴 **User attrition** for local-LLM users | Architecture decision: exponential backoff vs. prefill-aware timeout |
| [#6204](https://github.com/NousResearch/hermes-agent/issues/6204) — Needs "just do it" nudge | ~6 weeks | 🟡 **Trust erosion** in agent reliability | Agent behavior tuning or explicit confirmation mode |
| [#524](https://github.com/NousResearch/hermes-agent/issues/524) — Migration system | ~10 weeks | 🟡 Competitive parity | Roadmap commitment or decomposition |
| [#16560](https://github.com/NousResearch/hermes-agent/issues/16560) — **Command injection security** | ~3 weeks | 🔴 **CVE risk** | Immediate maintainer triage; PR #28247 (credential redaction) is related but doesn't fix injection vector |

### PRs Needing Maintainer Decision

| PR | Status | Blocker |
|---|---|---|
| [#27374](https://github.com/NousResearch/hermes-agent/pull/27374) vs. [#28254](https://github.com/NousResearch/hermes-agent/pull/28254) | Both open, same fix | **Merge one, close duplicate** — coordination failure |
| [#18310](https://github.com/NousResearch/hermes-agent/pull/18310) | Open 18 days | TUI fallback chain preservation — TUI stability |
| [#22148](https://github.com/NousResearch/hermes-agent/pull/22148) | Open 10 days | NixOS packaging fix — blocked on review? |

---

*Digest generated from 50 issues and 50 PRs updated 2026-05-18/19. Hermes Agent: https://github.com/nousresearch/hermes-agent*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-19

## 1. Today's Overview

PicoClaw shows **high development velocity** with 26 PRs and 8 issues updated in the last 24 hours, indicating an active pre-release stabilization period for v0.2.8. The project is experiencing significant community contribution across channels (Telegram, Feishu, Server酱³), streaming infrastructure, and memory systems. A critical bug in the Seahorse memory system (#2894) was reported and already has a fix PR (#2895), demonstrating responsive maintenance. However, the large number of open PRs (18 vs. 8 merged/closed) suggests potential review bottleneck. The nightly build pipeline is active with automated builds tracking main branch closely.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| **[v0.2.8-nightly.20260518.0df050ff](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)** | Nightly | Automated build from `main` branch; marked unstable. No manual migration notes. |

**Changelog**: [Full diff since v0.2.8](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

> ⚠️ **Caution**: Nightly builds may contain unvetted changes. Not recommended for production deployments.

---

## 3. Project Progress

### Merged/Closed Today

| PR/Issue | Description | Impact |
|----------|-------------|--------|
| **[#2885](https://github.com/sipeed/picoclaw/pull/2885)** `feat(provider): add SiliconFlow provider support` | Native first-class integration for SiliconFlow (Chinese model hosting platform) | Eliminates need for manual OpenAI-compatible configuration; improves UX for Chinese users |
| **[#2886](https://github.com/sipeed/picoclaw/pull/2886)** `feat(chat): add chat detail visibility selector` | Four-state UI control for reasoning/tool-call visibility (neither/reasoning only/tools only/both) | Better user control over information density in web chat |
| **[#2882](https://github.com/sipeed/picoclaw/pull/2882)** `feat(chat): add independent code block copy and collapse controls` | Per-code-block copy/collapse with JSON highlighting for tool arguments | Polished developer experience, reduced UI clutter |
| **[#2884](https://github.com/sipeed/picoclaw/issues/2884)** `[Feature] Add siliconflow provider support` | Feature request closed as completed | Community-validated roadmap alignment |

### Infrastructure & Reliability Fixes

| PR | Description |
|----|-------------|
| **[#2890](https://github.com/sipeed/picoclaw/pull/2890)** | macOS path validation fix: resolves `/var` → `/private/var` symlink inconsistency in `cwdPath` |
| **[#2891](https://github.com/sipeed/picoclaw/pull/2891)** | Factory reset feature: recovery path for incompatible config migrations, preserves API keys |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | 🔍 Analysis |
|------|------|----------|-------------|
| 1 | **[#1919](https://github.com/sipeed/picoclaw/issues/1919)** `[CLOSED]` Seahorse — Biologically-inspired Memory System | 11 comments | **Foundational architecture discussion**. The hippocampus-inspired memory system (short-term lossless compaction + long-term consolidation) represents PicoClaw's differentiation in agent cognition. High comment count reflects design depth, not controversy. Now implemented; closure signals maturity. |
| 2 | **[#2674](https://github.com/sipeed/picoclaw/issues/2674)** `[OPEN]` Codex OAuth: empty assistant response | 4 comments, 👍×4 | **Provider compatibility crisis**. ChatGPT backend's non-standard streaming (`response.output_item.done`) breaks PicoClaw's OpenAI-compatible layer. Affects paying users; 4 upvotes indicate broader impact. **No fix PR yet.** |
| 3 | **[#2796](https://github.com/sipeed/picoclaw/issues/2796)** `[OPEN]` History shows only last user message | 3 comments | **UX regression in conversation compression**. Message compaction logic over-aggressively collapses user-visible history. Tension between "compress for LLM context window" vs. "preserve for human review." |

### Underlying Needs
- **Provider ecosystem resilience**: Users need robust handling of vendor-specific streaming dialects (OpenAI, ChatGPT, Codex all diverging)
- **Memory transparency**: Users want control over *what* gets compressed vs. preserved
- **Embedded/IoT deployment**: Yocto layer PR (#2851) signals professional embedded use cases

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR | Details |
|----------|------|--------|--------|---------|
| 🔴 **Critical** | **[#2894](https://github.com/sipeed/picoclaw/issues/2894)** Seahorse Assembler: FreshTail bypasses budget | **Fix in review** | **[#2895](https://github.com/sipeed/picoclaw/pull/2895)** | FreshTailCount=32 exempt from token budget → `400 BadRequestError` when exceeding context window. Core memory system failure. |
| 🟡 **High** | **[#2674](https://github.com/sipeed/picoclaw/issues/2674)** Codex OAuth empty responses | Open | None | ChatGPT backend streaming incompatibility. Blocks Codex provider usage. |
| 🟡 **High** | **[#2887](https://github.com/sipeed/picoclaw/issues/2887)** RISC-V .deb non-functional with OpenAI | Open | None | Architecture-specific packaging issue. Limits embedded/RISC-V adoption. |
| 🟠 **Medium** | **[#2796](https://github.com/sipeed/picoclaw/issues/2796)** History compression hides messages | Open | None | UX/data loss concern. No technical crash but breaks user trust. |
| 🟢 **Low** | **[#2878](https://github.com/sipeed/picoclaw/issues/2878)** `load_image` unconfigurable in config.json | **Closed** | N/A | Fixed via code change (tool registration logic). |

### Stability Assessment
- **Positive**: Critical memory bug (#2894) has same-day fix PR (#2895)
- **Concern**: Provider compatibility layer showing strain against multiple OpenAI API variants
- **Gap**: No assignee visible on RISC-V issue (#2887) — niche but strategically important for Sipeed's hardware focus

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in v0.2.8+ | Rationale |
|---------|--------|----------------------|-----------|
| **Streaming support (generic)** | **[#2892](https://github.com/sipeed/picoclaw/pull/2892)**, **[#2853](https://github.com/sipeed/picoclaw/pull/2853)** | 🔥 **High** | Two complementary PRs: generic provider streaming (#2892) + pico channel WebSocket streaming (#2853). Dual opt-in model (model + channel) suggests careful design. |
| **Telegram Business + Guest modes** | **[#2845](https://github.com/sipeed/picoclaw/pull/2845)**, **[#2849](https://github.com/sipeed/picoclaw/pull/2849)** | **Medium** | Mature PRs with tests, but "stale" label suggests review backlog. Enterprise Telegram use case. |
| **Server酱³ (SC3Bot) channel** | **[#2893](https://github.com/sipeed/picoclaw/pull/2893)** | **Medium-High** | New PR, Chinese notification service integration. Fits Sipeed's China market focus. |
| **Same-agent final render for steering** | **[#2844](https://github.com/sipeed/picoclaw/pull/2844)**, **[#2843](https://github.com/sipeed/picoclaw/issues/2843)** | **Medium** | Experimental `llm` render mode. Quality-of-life for multi-turn steering but adds latency. |
| **MCP dynamic headers** | **[#2696](https://github.com/sipeed/picoclaw/pull/2696)** | **Medium** | Per-request auth forwarding for MCP servers. Enterprise/security use case. |
| **Yocto embedded layer** | **[#2851](https://github.com/sipeed/picoclaw/pull/2851)** | **Low-Medium** | Community PR, external repo. Valuable but may remain community-maintained. |

### Predicted v0.2.9 Roadmap
1. Streaming GA (dual PR merge)
2. Seahorse budget enforcement hardening
3. SiliconFlow provider stabilization
4. Telegram channel modes (business/guest)

---

## 7. User Feedback Summary

### Pain Points 😤

| Issue | User Voice | Root Cause |
|-------|-----------|------------|
| "Empty response from Codex" | *"The model returned an empty response"* fallback triggers falsely | Streaming parser doesn't handle `response.output_item.done` events |
| "Lost my conversation history" | *"只能查看到最后一条用户消息"* | Compression algorithm conflates "LLM context" with "user-visible history" |
| "Can't run on my RISC-V board" | Debian package fails with OpenAI models | Architecture-specific build/packaging gap |
| "Config broke after update" | Implicit need (factory reset PR #2891) | Version-to-version config incompatibility |

### Positive Signals 😊

| Theme | Evidence |
|-------|----------|
| **Memory system excitement** | Seahorse named after hippocampus; 11-comment design discussion |
| **Embedded enthusiasm** | Yocto layer contribution, RISC-V attempted deployment |
| **Chinese ecosystem integration** | SiliconFlow native support, Server酱³ channel, Feishu fixes |
| **UI polish appreciation** | Chat visibility controls, code block interactions |

---

## 8. Backlog Watch

### Stale PRs Needing Maintainer Action

| PR | Age | Risk | Action Needed |
|----|-----|------|---------------|
| **[#2551](https://github.com/sipeed/picoclaw/pull/2551)** `refactor: standardize channel identification` | ~1 month | **High** | Core architecture change; blocks multi-instance deployments. Merge conflicts likely growing. |
| **[#2845](https://github.com/sipeed/picoclaw/pull/2845)** `feat(telegram): business mode` | ~1 week | Medium | Complete, tested. Review and merge before code drift. |
| **[#2849](https://github.com/sipeed/picoclaw/pull/2849)** `feat(telegram): guest mode` | ~1 week | Medium | Companion to #2845. Batch review recommended. |
| **[#2844](https://github.com/sipeed/picoclaw/pull/2844)** `same-agent final turn render` | ~1 week | Medium | Experimental feature; needs decision on inclusion vs. flag-gating. |
| **[#2750](https://github.com/sipeed/picoclaw/pull/2750)** `fix(tools): exec guard path resolution` | ~2.5 weeks | **High** | Security-related path traversal fix. Superseded by #2826? Dedupe needed. |
| **[#2826](https://github.com/sipeed/picoclaw/pull/2826)** `fix: resolve relative paths in exec tool` | ~1.5 weeks | **High** | Same domain as #2750. Potential duplicate effort. |

### Unanswered Issues

| Issue | Age | Concern |
|-------|-----|---------|
| **[#2674](https://github.com/sipeed/picoclaw/issues/2674)** Codex OAuth empty response | 3 weeks | No maintainer response, 4 upvotes |
| **[#2887](https://github.com/sipeed/picoclaw/issues/2887)** RISC-V .deb broken | 2 days | Strategic for Sipeed hardware; needs triage |

---

## Project Health Scorecard

| Metric | Assessment |
|--------|-----------|
| **Velocity** | ⭐⭐⭐⭐⭐ 26 PRs/day is exceptional |
| **Responsiveness** | ⭐⭐⭐⭐☆ Critical bugs get same-day fixes |
| **Review bandwidth** | ⭐⭐⭐☆☆ 18 open PRs vs. 8 closed; stale labels accumulating |
| **Community growth** | ⭐⭐⭐⭐⭐ Diverse channels, embedded, Chinese ecosystem |
| **Stability** | ⭐⭐⭐☆☆ Memory system bug + provider compatibility strain |

**Overall**: Healthy, fast-moving project approaching v0.2.8 release with active community. Risk: review backlog may demotivate contributors.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-19

## Today's Overview

NanoClaw shows **very high development velocity** with 35 PRs updated in the last 24 hours (29 still open, 6 merged/closed) and 4 active issues. The project is in an intense stabilization phase for v2.x, with heavy focus on security hardening, CLI reliability, and multi-channel adapter robustness. The v2.0.64 patch release indicates incremental but critical fixes to core messaging infrastructure. However, the high open-to-merged PR ratio (29:6) suggests potential review bottleneck risk.

---

## Releases

### [v2.0.64](https://github.com/nanocoai/nanoclaw/releases/tag/v2.0.64)

**Critical messaging infrastructure fix:**

- **`ncl destinations add` and `remove` through approval flow now reach receiver immediately** — Previously, approved destinations failed to project into the receiving agent's local session state, causing `send_message` to fail with "unknown destination" errors. This was a silent failure affecting multi-agent workflows.

*No breaking changes or migration notes required.*

---

## Project Progress

### Merged/Closed Today (6 items)

| PR/Issue | Description | Significance |
|----------|-------------|--------------|
| [#2536](https://github.com/nanocoai/nanoclaw/pull/2536) | Changelog entry for v2.0.64 | Release hygiene |
| [#2533](https://github.com/nanocoai/nanoclaw/issues/2533) | Reconcile stale `container_status` after deploy/restart | **Production reliability** — fixes Docker state drift |
| [#1310](https://github.com/nanocoai/nanoclaw/pull/1310) | Credentials and environment variables guide | Documentation completeness |
| [#867](https://github.com/nanocoai/nanoclaw/pull/867) | Allow scheduled-task agents to send_message to task output JID | **Agent swarm patterns** — unblocks coordinator architectures |
| [#2375](https://github.com/nanocoai/nanoclaw/pull/2375) | Exclude per-thread sessions from agent-shared lookup | **Routing correctness** — fixes cross-contamination between GitHub PR sessions and DMs |

### Key Advances

- **Security posture**: Multiple CSPRNG and injection-prevention PRs in flight
- **CLI hardening**: Group lifecycle (`create`/`delete`) receiving cascading fixes
- **Provider ecosystem**: ACP Client Protocol integration submitted; custom OpenAI-compatible endpoint support being actively discussed

---

## Community Hot Topics

### Most Active Discussions

| # | Topic | Comments | Analysis |
|---|-------|----------|----------|
| [#1503](https://github.com/nanocoai/nanoclaw/issues/1503) | nanoclaw.dev invalid SSL certificate | **19 comments** | Infrastructure trust issue; blocking new user onboarding since March 28. High comment count suggests repeated user reports without resolution. **Underlying need**: Reliable public documentation/landing presence. |
| [#1984](https://github.com/nanocoai/nanoclaw/issues/1984) | Custom/local OpenAI-compatible endpoints (Codex + OpenCode) | 6 comments | Gap between documented "experimental" path and actual working implementation. **Underlying need**: Vendor independence and local AI deployment (privacy, cost, compliance). |

### Emerging Patterns

- **Enterprise/self-hosted demand**: Custom endpoints, local SSL, configurable ports all point to non-SaaS deployments
- **Multi-channel complexity**: WhatsApp encryption, Telegram reactions, GitHub polling mode show platform-specific friction scaling with user base

---

## Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| **🔴 Critical** | [#2535](https://github.com/nanocoai/nanoclaw/issues/2535) | WhatsApp LID encryption desync — group messages unreadable | **No fix PR yet**; blocks WhatsApp group functionality entirely |
| **🟠 High** | [#2546](https://github.com/nanocoai/nanoclaw/pull/2546) | Webhook server binds to 0.0.0.0 by default — network exposure | PR open, ready for review |
| **🟠 High** | [#2545](https://github.com/nanocoai/nanoclaw/pull/2545) | `Math.random()` used for approval card IDs — predictable, bypassable | PR open |
| **🟡 Medium** | [#2541](https://github.com/nanocoai/nanoclaw/pull/2541) | `</message>` in body text breaks poll-loop parser | PR open |
| **🟡 Medium** | [#2539](https://github.com/nanocoai/nanoclaw/pull/2539) | Missing `container_configs` row on `ncl groups create` | PR open |
| **🟡 Medium** | [#2540](https://github.com/nanocoai/nanoclaw/pull/2540) | `ncl groups delete` fails with FOREIGN KEY constraint | PR open |
| **🟢 Low** | [#2533](https://github.com/nanocoai/nanoclaw/issues/2533) *(closed)* | Stale `container_status` after deploy | **Fixed** |

**Security theme**: Two PRs today (#2545, #2538) address injection and randomness vulnerabilities, suggesting proactive security audit or recent external report.

---

## Feature Requests & Roadmap Signals

| Feature | Evidence | Likelihood in Next Version |
|---------|----------|---------------------------|
| **ACP Client Protocol provider** | [#2542](https://github.com/nanocoai/nanoclaw/pull/2542) open | **High** — complete implementation submitted |
| **Per-message reasoning effort routing** | [#2406](https://github.com/nanocoai/nanoclaw/pull/2406) open | **Medium** — optimization for cost/quality tradeoffs |
| **GitHub polling mode (no inbound port)** | [#2301](https://github.com/nanocoai/nanoclaw/pull/2301) open | **Medium** — enterprise firewall/NAT scenario |
| **Agent network / swarm coordination** | [#2497](https://github.com/nanocoai/nanoclaw/pull/2497) open | **Medium** — architectural, may need iteration |
| **Custom OpenAI-compatible endpoints** | [#1984](https://github.com/nanocoai/nanoclaw/issues/1984) | **Medium** — demand clear, implementation gap exists |
| **Pre-commit hooks for contributors** | [#2537](https://github.com/nanocoai/nanoclaw/pull/2537) open | **High** — low risk, improves velocity |

**Prediction**: v2.0.65 will likely include ACP provider, security fixes (#2545, #2538), and CLI group lifecycle fixes (#2539, #2540, #2543). Reasoning-effort routing may land in v2.1.0.

---

## User Feedback Summary

### Pain Points

| Issue | User Impact | Frequency Signal |
|-------|-------------|----------------|
| SSL certificate down for 7+ weeks | Cannot trust/docs unreachable | 19 comments, unresolved |
| WhatsApp encryption broken | Complete channel failure for groups | New, no workaround |
| Port 3000 hardcoded | Deployment conflicts | Multiple PRs addressing |
| Group create/delete broken | Core CLI workflow fails | 3 related PRs today |
| Custom endpoints "experimental but broken" | Vendor lock-in concern | 6 comments, documentation gap |

### Satisfaction Indicators

- **Positive**: Rapid patch releases (v2.0.64), active security investment, expanding provider ecosystem
- **Negative**: Long-standing infrastructure issues (#1503), platform-specific bugs (WhatsApp) suggesting test coverage gaps

### Use Case Evolution

Users are pushing NanoClaw into **enterprise/self-hosted scenarios** (custom endpoints, loopback binding, configurable ports, polling modes) and **multi-agent orchestration** (swarms, scheduled tasks, coordinator patterns). The project is transitioning from "personal assistant" to "agent infrastructure platform."

---

## Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#1503](https://github.com/nanocoai/nanoclaw/issues/1503) nanoclaw.dev SSL | **52 days** | Reputational damage, onboarding friction | Infrastructure owner intervention; potentially rotate to community-hosted docs |
| [#1984](https://github.com/nanocoai/nanoclaw/issues/1984) Custom endpoints | **25 days** | Competitive gap vs. OpenCode, etc. | Product decision: promote from experimental or implement proper provider discovery |
| [#1845](https://github.com/nanocoai/nanoclaw/pull/1845) ISO 8601 timestamps | **31 days** | Data interoperability | Review pending; low conflict, should merge |
| [#2406](https://github.com/nanocoai/nanoclaw/pull/2406) Reasoning effort routing | **8 days** | Cost optimization demand | Architectural review for config schema |
| [#2301](https://github.com/nanocoai/nanoclaw/pull/2301) GitHub polling mode | **13 days** | Enterprise adoption blocker | Review for security implications of polling credentials |

**Maintainer attention recommended**: SSL issue (#1503) exceeds reasonable response time; custom endpoints (#1984) is becoming a narrative liability given project's "open" positioning.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-05-19

## 1. Today's Overview

NullClaw showed minimal but targeted activity over the past 24 hours, with **1 new issue** and **1 new pull request** both opened on 2026-05-18. No releases were published, and no items were closed or merged, indicating a steady-state development phase rather than active feature landing. The project appears to be in a maintenance and refinement period, with contributors addressing platform-specific networking bugs and raising architectural concerns about memory system configurability. Overall health is **stable** with low velocity but meaningful technical depth in active items.

---

## 2. Releases

*No new releases.*

---

## 3. Project Progress

**No merged or closed PRs today.**

The sole active PR addresses a critical Windows compatibility issue but remains unmerged:

- **PR #920** — [fix(net): fix Windows DNS resolution for non-localhost hostnames](https://github.com/nullclaw/nullclaw/pull/920) by `chenhlSH`
  - Fixes complete DNS resolution failure on Windows for remote providers
  - Changes conditional logic in `getAddressList()` within `net.zig`
  - **Status**: Awaiting review/merge — represents platform parity progress blocked on maintainer action

---

## 4. Community Hot Topics

With only two active items and zero comments/reactions on either, community engagement is currently **muted**. Both items are technically significant:

| Item | Link | Engagement | Underlying Need |
|------|------|-----------|---------------|
| Issue #919 | [Feature: Allow disabling automatic memory recall (FTS5) per-message](https://github.com/nullclaw/nullclaw/issues/919) | 0 comments, 0 👍 | **Runtime control over memory system overhead** — users need deterministic performance/cost tuning for production deployments where every LLM call with recalled context incurs token costs |
| PR #920 | [fix(net): fix Windows DNS resolution for non-localhost hostnames](https://github.com/nullclaw/nullclaw/pull/920) | undefined comments, 0 👍 | **Cross-platform reliability** — Windows developers cannot use NullClaw with remote AI providers at all |

**Analysis**: The memory recall issue (#919) signals growing production deployment concerns beyond hobbyist use. The hardcoded parameters (`DEFAULT_RECALL_LIMIT = 5`, `MAX_CONTEXT_BYTES = 4000`) suggest the memory subsystem was designed for demo scenarios and needs operational knobs.

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix Available? |
|----------|------|-------------|--------------|
| **Critical** | [PR #920](https://github.com/nullclaw/nullclaw/pull/920) | Windows: complete failure to resolve any non-localhost hostname → `error.HostResolutionFailed` for all remote providers | **Yes** — PR open, unmerged |
| **Moderate** | [Issue #919](https://github.com/nullclaw/nullclaw/issues/919) | Performance/cost regression: mandatory FTS5+BM25 recall on every message with no disable path; fixed parameters may cause context bloat | No — feature request stage |

**Risk Assessment**: The Windows DNS bug is a **platform-breaking regression** that effectively excludes Windows users from production use. The PR fix is straightforward (conditional logic fix in `net.zig`) and should be prioritized for merge.

---

## 6. Feature Requests & Roadmap Signals

**Issue #919** contains explicit roadmap signals for the memory subsystem:

| Requested Capability | Current State | Likelihood in Next Version |
|---------------------|-------------|---------------------------|
| Per-message disable flag for memory recall | Hardcoded always-on | **High** — minimal API surface change |
| Configurable `RECALL_LIMIT` | Fixed at 5 | Medium — requires configuration system expansion |
| Configurable `MAX_CONTEXT_BYTES` | Fixed at 4000 | Medium |
| Configurable candidate limits (`SCOPED`/`GLOBAL`) | Fixed at 64 each | Lower — internal tuning parameters |

**Prediction**: A `disableMemoryRecall` or `skipRecall` message option is the most probable near-term addition given its surgical scope and clear production use case.

---

## 7. User Feedback Summary

**Explicit Pain Points:**

| Source | Pain Point | Use Case Impact |
|--------|-----------|---------------|
| Issue #919 | Uncontrollable token consumption from forced memory recall | **Cost-sensitive production deployments** — users paying per-token for LLM APIs cannot predict or bound costs; also latency-sensitive applications where BM25 search adds overhead |
| PR #920 | Windows developers completely blocked from remote providers | **Cross-platform development teams** — Windows is unusable for any non-localhost workflow |

**Satisfaction Signal**: Low — no positive feedback items in 24h window; zero reactions on both items suggests either niche impact or insufficient community visibility.

**Emerging Use Case Pattern**: Issue #919 author `weissfl` is optimizing for **controlled, predictable AI agent behavior** — wanting memory as opt-in rather than ambient system, indicating NullClaw is being evaluated for deterministic/automated workflows rather than conversational assistants.

---

## 8. Backlog Watch

Both active items qualify for maintainer attention given their severity and clear resolution paths:

| Item | Age | Risk if Neglected | Recommended Action |
|------|-----|-------------------|-------------------|
| [PR #920](https://github.com/nullclaw/nullclaw/pull/920) | 1 day | Windows user attrition; reputation damage for Zig networking reliability | **Merge after CI pass** — fix is isolated to `builtin.os.tag == .windows` branch |
| [Issue #919](https://github.com/nullclaw/nullclaw/issues/919) | 1 day | Production users fork or abandon; competing agents (MemGPT, etc.) gain configurability advantage | Acknowledge with `enhancement` label; propose API shape for per-message `recall: false` option |

**No long-unanswered items** in this 24h window, but the project would benefit from explicit maintainer response time commitments given its emerging production use cases.

---

*Digest generated from NullClaw GitHub data as of 2026-05-19. All links: https://github.com/nullclaw/nullclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-19

## 1. Today's Overview

IronClaw shows **very high development velocity** with 36 issues and 47 PRs active in the last 24 hours, though release activity is paused (0 new releases). The project is dominated by the **"Reborn" architectural migration** — a comprehensive rewrite of the agent loop, composition system, and WebUI — which consumes the majority of engineering attention. Critical infrastructure work includes embedding provider extraction (#3739), credential injection preservation (#3068), and test harness construction (#3702, #3768). The crates.io publication gap (stuck at 0.24.0 vs. 0.27.0 tagged) remains unresolved, creating downstream security exposure due to wasmtime CVEs. Overall project health is **strong on engineering momentum but strained on release hygiene and user-facing stability**.

---

## 2. Releases

**No new releases today.**

**Outstanding release debt:** Issue [#3259](https://github.com/nearai/ironclaw/issues/3259) documents that crates.io remains pinned at `0.24.0` (March 31) despite tags through `v0.27.0` (April 29). Downstream consumers cannot access security fixes for wasmtime 28.x CVEs. PR [#3708](https://github.com/nearai/ironclaw/pull/3708) (release automation) was updated yesterday but remains open, suggesting release pipeline blockers persist.

---

## 3. Project Progress

### Merged/Closed PRs (Last 24h)

| PR | Author | Summary | Significance |
|:---|:---|:---|:---|
| [#3361](https://github.com/nearai/ironclaw/pull/3361) | dependabot[bot] | Dependency bump (43 updates, everything-else group) | Closed; superseded by [#3764](https://github.com/nearai/ironclaw/pull/3764) |
| [#3658](https://github.com/nearai/ironclaw/pull/3658) | zetyquickly | TUI: Ctrl-S downloads logs from Logs tab | Closed; user-facing debugging improvement |
| [#3730](https://github.com/nearai/ironclaw/pull/3730) | serrrfirat | Restack product-live AgentLoop tool harness | Closed; enables Reborn e2e testing on latest provider tool-call integration |

### Notable Open PRs Advancing

| PR | Author | What It Advances |
|:---|:---|:---|
| [#3739](https://github.com/nearai/ironclaw/pull/3739) | ilblackdragon | **Embeddings crate extraction** — major architectural refactor moving all embedding providers to dedicated crate; XL size, medium risk |
| [#3721](https://github.com/nearai/ironclaw/pull/3721) | henrypark133 | **Reborn personal context gating** — run-profile based policy for identity files; foundational for privacy/safety |
| [#3761](https://github.com/nearai/ironclaw/pull/3761) | serrrfirat | **EventStreamManager slice** — Reborn's product-facing streaming infrastructure |
| [#3759](https://github.com/nearai/ironclaw/pull/3759) | serrrfirat | **Durable product workflow ledger** — idempotency and recovery for Reborn workflows |
| [#3632](https://github.com/nearai/ironclaw/pull/3632) | serrrfirat | **Before-inbound policy seam** — message interception/rewriting for WebChat v2 |
| [#1378](https://github.com/nearai/ironclaw/pull/1378) | nick-stebbings | **Per-channel MCP/built-in tool filtering** — long-running feature for multi-channel deployments |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Comments | Core Tension |
|:---|:---|:---|
| [#3692](https://github.com/nearai/ironclaw/issues/3692) — Policy-gated personal identity and heartbeat prompt context | 6 | **Privacy vs. functionality**: How to include identity files in prompts without over-exposure; requires new "policy gate" abstraction |
| [#3259](https://github.com/nearai/ironclaw/issues/3259) — Publish 0.25.0–0.27.0 to crates.io | 5 | **Supply chain trust**: Downstream users blocked on security fixes; organizational/release process failure |
| [#3622](https://github.com/nearai/ironclaw/issues/3622) — Verify internal tool-result completion evidence | 3 | **Observability gap**: Reborn's reply-only completion path may lose tool-call evidence; affects auditability |
| [#3620](https://github.com/nearai/ironclaw/issues/3620) — Convert provider tool calls into `ParentLoopOutput::CapabilityCalls` | 3 | **Integration completeness**: Provider stack has types but production gateway rejects tool-finish reasons |

### Underlying Needs Analysis

- **Reborn confidence gap**: Multiple issues (#3622, #3620, #3702, #3698) center on "prove it works end-to-end." The team is building test infrastructure *while* building the system, suggesting architectural complexity has outpaced verification.
- **Identity/privacy as emergent design constraint**: [#3692](https://github.com/nearai/ironclaw/issues/3692) and [#3721](https://github.com/nearai/ironclaw/pull/3721) show personal context (USER.md, HEARTBEAT.md) requires new authorization primitives not present in V1.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **High** | [#3729](https://github.com/nearai/ironclaw/issues/3729) | **UI state corruption**: Failed `tool_install` calls display as successful after page refresh; false-positive UX erodes trust | **No fix PR identified** |
| **Medium** | [#3756](https://github.com/nearai/ironclaw/issues/3756) | **ANSI coloring breaks log parsing**: Byte arrays in structured logs due to ANSI codes; observability pipeline impact | **No fix PR identified** |
| **Medium** | [#3754](https://github.com/nearai/ironclaw/issues/3754) | **Double `/v1` in OpenAI embeddings URL**: `base_url` with `/v1` suffix produces `/v1/v1/embeddings` | Under review in [#3739](https://github.com/nearai/ironclaw/pull/3739) |
| **Medium** | [#3753](https://github.com/nearai/ironclaw/issues/3753) | **Bedrock credentials misrouted**: `ironclaw doctor` checks `OPENAI_API_KEY` for Bedrock | Under review in [#3739](https://github.com/nearai/ironclaw/pull/3739) |
| **Medium** | [#3752](https://github.com/nearai/ironclaw/issues/3752) | **Embedding length check bypassed**: `embed_batch` skips `max_input_length` per-item validation | Under review in [#3739](https://github.com/nearai/ironclaw/pull/3739) |
| **Low-Medium** | [#3751](https://github.com/nearai/ironclaw/issues/3751) | **Silent fallback to OpenAI**: Unknown embedding provider names default to OpenAI without error | Under review in [#3739](https://github.com/nearai/ironclaw/pull/3739) |
| **Low-Medium** | [#3750](https://github.com/nearai/ironclaw/issues/3750) | **Bedrock ignores DB/TOML model setting**: Config precedence violated | Under review in [#3739](https://github.com/nearai/ironclaw/pull/3739) |
| **Low** | [#3755](https://github.com/nearai/ironclaw/issues/3755) | **AuthFailed hint is OpenAI-specific**: Generic error shows OpenAI-specific message for NEAR AI/Bedrock failures | Under review in [#3739](https://github.com/nearai/ironclaw/pull/3739) |
| **Low** | [#3762](https://github.com/nearai/ironclaw/issues/3762) | **AGENTS.md edits don't propagate**: System prompt stale after identity file changes in WebUI | **No fix PR identified** |

**Critical pattern**: Six embedding-related bugs surfaced during [#3739](https://github.com/nearai/ironclaw/pull/3739) review, indicating the extraction PR is acting as **archaeological discovery** of pre-existing defects. The refactor is necessary but carries medium risk due to latent bug exposure.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| [#3763](https://github.com/nearai/ironclaw/issues/3763) — Per-user/per-tenant tool enable/disable | WebUI affordance for granular tool control | **High** | Customer-requested (suggested_P1); aligns with [#1378](https://github.com/nearai/ironclaw/pull/1378) channel routing work |
| [#3697](https://github.com/nearai/ironclaw/issues/3697) — Reborn milestones as web AppEvents | Browser-visible progress for product-live path | **High** | Blocked on [#3761](https://github.com/nearai/ironclaw/pull/3761) EventStreamManager; direct dependency |
| [#3696](https://github.com/nearai/ironclaw/issues/3696) — Wire run-profile resolver into factories | Production composition completeness | **High** | Blocks production Reborn cutover; PR [#3721](https://github.com/nearai/ironclaw/pull/3721) in progress |
| [#3699](https://github.com/nearai/ironclaw/issues/3699) — Roll product-live to CLI/Telegram/webhooks | Multi-channel parity | **Medium** | Explicitly deferred until web proves stable; gated on [#3700](https://github.com/nearai/ironclaw/issues/3700) |
| [#3289](https://github.com/nearai/ironclaw/issues/3289) — Migrate secrets/OAuth/auth flows | Credential system migration | **Medium** | P1 priority but large scope; depends on [#3068](https://github.com/nearai/ironclaw/issues/3068) |

**Predicted next release focus**: Reborn WebUI beta readiness (M1 milestone), not general availability. The "product-live" terminology in 5+ issues suggests internal milestone language for this cutoff.

---

## 7. User Feedback Summary

### Explicit Pain Points

| Source | Pain Point | Severity |
|:---|:---|:---|
| [#3762](https://github.com/nearai/ironclaw/issues/3762) | Identity file edits don't affect conversations — "save succeeds but no effect" | **Workflow-breaking** |
| [#3729](https://github.com/nearai/ironclaw/issues/3729) | Security-relevant state (tool install failure) misrepresented after refresh | **Trust-eroding** |
| [#3259](https://github.com/nearai/ironclaw/issues/3259) | Cannot consume security fixes via standard Rust dependency management | **Operational risk** |
| [#3763](https://github.com/nearai/ironclaw/issues/3763) | No self-service tool configuration for customer deployments | **Gating enterprise adoption** |

### Satisfaction Signals

- TUI log download ([#3658](https://github.com/nearai/ironclaw/pull/3658)) — quality-of-life improvement merged
- Temperature control in Responses API ([#3641](https://github.com/nearai/ironclaw/pull/3641)) — user-requested flexibility added

### Dissatisfaction Pattern

**Configuration propagation latency**: Multiple issues (#3762, identity context staleness) suggest a systemic gap between "edit config/identity" and "observe effect in running system." This may indicate missing invalidation hooks or async update pipelines.

---

## 8. Backlog Watch

### Critical Attention Needed

| Issue/PR | Age | Risk | Why It Needs Action |
|:---|:---|:---|:---|
| [#3259](https://github.com/nearai/ironclaw/issues/3259) — crates.io publication | 14 days | **Security exposure** | wasmtime CVEs affect downstream; organizational blocker, not technical |
| [#1378](https://github.com/nearai/ironclaw/pull/1378) — Per-channel tool filtering | 62 days | **Feature divergence** | Long-running PR; multi-channel deployments blocked; risk of rebase hell |
| [#3068](https://github.com/nearai/ironclaw/issues/3068) — Brokered HTTP credential injection | 20 days | **Cutover blocker** | Explicitly labeled "not a post-landing nice-to-have"; no visible PR |
| [#3287](https://github.com/nearai/ironclaw/issues/3287) — Memory/workspace migration | 13 days | **Data loss risk** | Large scope, no comments; may be understaffed relative to M1 webui focus |

### Maintainer Capacity Signal

The concentration of Reborn work in `henrypark133` and `serrrfirat` (15 of 36 issues, 8 of 20 top PRs) suggests **bus factor risk** on the architectural migration. `ilblackdragon`'s embedding extraction (#3739) and `zetyquickly`'s customer-facing issues (#3762, #3763, #3669) show broader contribution, but core Reborn design appears tightly held.

---

*Digest generated from GitHub activity 2026-05-18 to 2026-05-19. All links reference https://github.com/nearai/ironclaw.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-19

## 1. Today's Overview

LobsterAI (NetEase Youdao's AI agent/personal assistant project) shows **high engineering velocity** with 18 PRs updated in the last 24 hours and a fresh release cut. All activity was concentrated on May 18, suggesting a coordinated release push. Notably, **zero open issues** indicates either aggressive triage or limited external bug reporting. The 6 open PRs are all stale (last touched March 24-25), while 12 PRs were merged/closed yesterday—demonstrating a **release-driven workflow** where maintainers batch-merge for version cuts. The project appears healthy with active internal development, though community contribution throughput seems low.

---

## 2. Releases

### [LobsterAI 2026.5.18](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.5.18) — Released 2026-05-18

**Key Changes:**
- **feat(keyfrom):** Channel attribution packaging and request context ([PR #1991](https://github.com/netease-youdao/LobsterAI/pull/1991))
- **feat(models):** Per-model context window slider in model settings with scale adjustment and 2M token upper bound ([PR #2](https://github.com/netease-youdao/LobsterAI/pull/2), [PR #2001](https://github.com/netease-youdao/LobsterAI/pull/2001))

**Breaking Changes / Migration Notes:** None explicitly documented. The context window feature is additive with UI changes.

---

## 3. Project Progress

### Merged/Closed PRs (12 items)

| PR | Area | Description | Impact |
|:---|:---|:---|:---|
| [#2010](https://github.com/netease-youdao/LobsterAI/pull/2010) | Release | `release/2026.5.18` consolidation branch | **Shipped version** |
| [#2001](https://github.com/netease-youdao/LobsterAI/pull/2001) | renderer, main, openclaw | Per-model context window slider (non-linear scale, 2M max) | Major UX enhancement for power users |
| [#2004](https://github.com/netease-youdao/LobsterAI/pull/2004) | renderer | Extract model settings to `ModelSettingsSection.tsx` (5162→3502 lines) | Tech debt reduction; known modal overlay regression |
| [#2005](https://github.com/netease-youdao/LobsterAI/pull/2005) | renderer, cowork | Replace dreaming toggle with standard switch component | UI consistency |
| [#2006](https://github.com/netease-youdao/LobsterAI/pull/2006) | main, openclaw | Hash non-ASCII MCP server names for OpenClaw compatibility | **Critical fix for CJK users** |
| [#2007](https://github.com/netease-youdao/LobsterAI/pull/2007) | renderer, cowork | Restore new-task page background to theme color | Regression fix |
| [#2002](https://github.com/netease-youdao/LobsterAI/pull/2002) | renderer, artifacts | Fix Markdown preview local resource path resolution | Local image display fix |
| [#2003](https://github.com/netease-youdao/LobsterAI/pull/2003) | — | Upgrade moltbot-popo plugin 2.1.1→2.1.8 | IM channel maintenance |
| [#2009](https://github.com/netease-youdao/LobsterAI/pull/2009) | renderer, main | Update cron UI | Minor maintenance |
| [#2008](https://github.com/netease-youdao/LobsterAI/pull/2008) | renderer, cowork | Update icons | Minor maintenance |
| [#2000](https://github.com/netease-youdao/LobsterAI/pull/2000) | docs, openclaw | Fix Anthropic format compatibility for mimo model | Model compatibility |
| [#811](https://github.com/netease-youdao/LobsterAI/pull/811) | — | [Stale] perf(cowork): O(n)→O(1) message lookup via index table | Performance (finally merged) |

**Themes:** Release coordination, CJK/Chinese market localization, model configurability, UI polish, and long-overdue performance work (#811).

---

## 4. Community Hot Topics

**⚠️ Data Limitation:** All PRs show `Comments: undefined` and `👍: 0`, indicating either API data gaps or genuinely low community engagement. No issues exist to analyze.

**Most Notable Open PRs (by age/scope):**

| PR | Age | Topic | Underlying Need |
|:---|:---|:---|:---|
| [#752](https://github.com/netease-youdao/LobsterAI/pull/752) | ~8 weeks | `/compact` command + auto-compression for Cowork sessions | **Cost control** — managing token limits with long contexts; manual + automatic compression for Anthropic/OpenAI APIs |
| [#755](https://github.com/netease-youdao/LobsterAI/pull/755) | ~8 weeks | Export chat history as Markdown/JSON | **Data portability** — user ownership of conversation data, archiving, integration with external workflows |
| [#749](https://github.com/netease-youdao/LobsterAI/pull/749) | ~8 weeks | Memoize React components for streaming performance | **UX smoothness** — preventing jank during real-time AI responses |
| [#748](https://github.com/netease-youdao/LobsterAI/pull/748) | ~8 weeks | Extract platform config handlers via factory pattern | **Code maintainability** — reducing IM platform integration boilerplate |

**Analysis:** The stale PRs reveal strong community interest in **cost optimization** (#752), **data sovereignty** (#755), and **performance** (#749). The lack of maintainer response suggests either competing priorities or these needing rebase/revision.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| **High** | [#2006](https://github.com/netease-youdao/LobsterAI/pull/2006) | Non-ASCII MCP server names become `"------"` in OpenClaw, breaking CJK integrations | **Fixed in 2026.5.18** |
| **Medium** | [#2007](https://github.com/netease-youdao/LobsterAI/pull/2007) | New-task page background incorrectly white (regression from commit `822d0596`) | **Fixed in 2026.5.18** |
| **Medium** | [#2002](https://github.com/netease-youdao/LobsterAI/pull/2002) | Markdown preview fails to resolve relative local image paths | **Fixed in 2026.5.18** |
| **Medium** | [#2000](https://github.com/netease-youdao/LobsterAI/pull/2000) | Anthropic format compatibility broken for mimo model | **Fixed in 2026.5.18** |
| **Low** | [#2004](https://github.com/netease-youdao/LobsterAI/pull/2004) | Modal overlay scope regression after Settings refactor | Known issue, accepted trade-off |

**Stability Assessment:** No crashes or critical regressions reported. The CJK MCP naming bug was the most severe user-facing issue. All fixes landed in the release.

---

## 6. Feature Requests & Roadmap Signals

**Shipped in 2026.5.18:**
- Per-model context window configuration (2M tokens) — indicates **long-context model support** (Gemini, Claude 3, etc.)
- Channel attribution tracking — suggests **multi-channel deployment/AB testing**

**Likely Next Version (signals from stale PRs):**

| Feature | Evidence | Confidence |
|:---|:---|:---|
| Session compression (`/compact`) | [#752](https://github.com/netease-youdao/LobsterAI/pull/752) ready since March, critical for cost management | High |
| Chat export (Markdown/JSON) | [#755](https://github.com/netease-youdao/LobsterAI/pull/755) complete implementation | High |
| Streaming performance optimization | [#749](https://github.com/netease-youdao/LobsterAI/pull/749), [#811](https://github.com/netease-youdao/LobsterAI/pull/811) merged shows priority | Medium |
| IM platform extensibility refactor | [#748](https://github.com/netease-youdao/LobsterAI/pull/748) reduces integration cost | Medium |

---

## 7. User Feedback Summary

**Direct feedback unavailable** (no issues, no commented PRs). Inferred from PR content:

| Pain Point | Evidence | Severity |
|:---|:---|:---|
| CJK localization gaps | [#2006](https://github.com/netease-youdao/LobsterAI/pull/2006) — Chinese MCP names completely broken | Critical for CN market |
| Token cost anxiety | [#752](https://github.com/netease-youdao/LobsterAI/pull/752) — manual/auto compression desperately needed | High |
| Data lock-in concerns | [#755](https://github.com/netease-youdao/LobsterAI/pull/755) — export functionality | Moderate |
| UI inconsistency | [#2005](https://github.com/netease-youdao/LobsterAI/pull/2005), [#2007](https://github.com/netease-youdao/LobsterAI/pull/2007) — polish iterations | Low |
| Long-context model support | [#2001](https://github.com/netease-youdao/LobsterAI/pull/2001) — 2M slider suggests user demand | Moderate |

**Satisfaction signal:** Regular release cadence (monthly `.5.18` pattern) with focused polish.

---

## 8. Backlog Watch

**Stale PRs requiring maintainer attention** (all ~8 weeks old, updated yesterday but not merged):

| PR | Problem | Action Needed |
|:---|:---|:---|
| [#752](https://github.com/netease-youdao/LobsterAI/pull/752) | `/compact` — complete, large scope, may need rebase | Review for 2026.6.x; critical for cost-conscious users |
| [#755](https://github.com/netease-youdao/LobsterAI/pull/755) | Export — fully implemented, needs merge conflict resolution | Trivial to land, high user value |
| [#749](https://github.com/netease-youdao/LobsterAI/pull/749) | Memoization — performance fix, low risk | Rebase and merge |
| [#748](https://github.com/netease-youdao/LobsterAI/pull/748) | Factory refactor — code quality, reduces future bugs | Review for maintainability win |
| [#760](https://github.com/netease-youdao/LobsterAI/pull/760) | Remove duplicate DB write — simple, proven optimization | Trivial merge |

**Risk:** [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (Electron 40→42 major bump) has been open since April 2. Security and compatibility implications of staying on older Electron.

**Recommendation:** The project would benefit from a **community triage process** — the `undefined` comments/`0` reactions suggest either bot-driven activity or missing engagement metrics that obscure true community health.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-19

## 1. Today's Overview

Moltis demonstrated **exceptionally high development velocity** on 2026-05-18 with 16 total items updated (8 issues, 8 PRs) and a 7:1 closed-to-open issue ratio, indicating aggressive bug squashing. The project shipped one release (`20260518.01`) while maintaining only **2 open PRs and 1 open issue** — a remarkably clean backlog. All six merged PRs were authored by core maintainer `penso`, suggesting concentrated maintainer bandwidth with limited external contributor merge activity. The day's work centered on **hook system restoration**, **provider reasoning tag parsing**, and **sandbox security hardening** — all critical infrastructure layers for an AI agent framework.

---

## 2. Releases

### `20260518.01` (2026-05-18)
- **Release URL**: [moltis-org/moltis/releases/tag/20260518.01](https://github.com/moltis-org/moltis/releases/tag/20260518.01)
- **Notes**: No detailed changelog provided in release metadata. Based on merged PRs, this release likely bundles:
  - `BeforeAgentStart` hook restoration ([PR #1017](https://github.com/moltis-org/moltis/pull/1017))
  - `BeforeLLMCall` payload modification fix ([PR #1018](https://github.com/moltis-org/moltis/pull/1018))
  - Gemma-4 reasoning tag support ([PR #1016](https://github.com/moltis-org/moltis/pull/1016))
  - Heredoc-aware dangerous command scanning ([PR #1019](https://github.com/moltis-org/moltis/pull/1019))
  - Config default preservation ([PR #1015](https://github.com/moltis-org/moltis/pull/1015))
  - Sandbox module path fix ([PR #1021](https://github.com/moltis-org/moltis/pull/1021))
- **Breaking Changes**: None identified; all fixes appear backward-compatible.
- **Migration**: No action required for typical users. Custom hook implementations should verify `BeforeAgentStart` now fires as documented.

---

## 3. Project Progress

### Merged/Closed PRs (6 items — all by `penso`)

| PR | Title | Impact |
|:---|:---|:---|
| [#1021](https://github.com/moltis-org/moltis/pull/1021) | fix(sandbox): update slacrawl go module path | **Infrastructure** — Fixes stale Go module reference, prevents sandbox build failures |
| [#1019](https://github.com/moltis-org/moltis/pull/1019) | fix(tools): ignore heredoc bodies in dangerous command scan | **Security** — Eliminates false-positive `rm -r` blocks in heredocs; closes [#1014](https://github.com/moltis-org/moltis/issues/1014) |
| [#1018](https://github.com/moltis-org/moltis/pull/1018) | fix(agents): honor BeforeLLMCall hook modifications | **API Correctness** — Hooks can now actually modify payloads as documented; closes [#1013](https://github.com/moltis-org/moltis/issues/1013) |
| [#1017](https://github.com/moltis-org/moltis/pull/1017) | fix(agents): dispatch before agent start hooks | **Regression Fix** — Restores hook lost in April refactor `e9674b2a`; closes [#1012](https://github.com/moltis-org/moltis/issues/1012) |
| [#1016](https://github.com/moltis-org/moltis/pull/1016) | fix(providers): parse thought reasoning tags | **Model Support** — Enables Gemma-4-31b-it reasoning extraction; closes [#1007](https://github.com/moltis-org/moltis/issues/1007) |
| [#1015](https://github.com/moltis-org/moltis/pull/1015) | fix(config): preserve explicit defaults on startup | **UX** — Stops "disappearing" Coqui TTS config; closes [#1006](https://github.com/moltis-org/moltis/issues/1006) |

**Pattern**: All fixes are **regression resolutions** with explicit test coverage added — indicating a project prioritizing stability over new feature velocity.

---

## 4. Community Hot Topics

### Most Active Discussions

| Item | Comments | Analysis |
|:---|:---|:---|
| [#858](https://github.com/moltis-org/moltis/issues/858) Heartbeat re-fires in tight loop | **1 comment** | Longest-running issue (24 days old). Despite being closed, this **exec/heartbeat interaction** represents a subtle concurrency bug class. The fix likely landed without explicit linkage. |
| *All other items* | **0 comments** | Zero-comment resolution pattern suggests either: (a) maintainer self-reported bugs with immediate fixes, or (b) low community engagement on issue threads. |

**Underlying Need**: The `heartbeat` + `exec` interaction ([#858](https://github.com/moltis-org/moltis/issues/858)) reveals architectural tension in Moltis's **turn-based agent loop** — when tool execution overlaps with scheduled heartbeat checks, state machines can recurse. Users need clearer documentation on agent lifecycle boundaries.

---

## 5. Bugs & Stability

### Severity-Ranked Issues (Closed 2026-05-18)

| Severity | Issue | Fix PR | Description |
|:---|:---|:---|:---|
| **High** | [#1012](https://github.com/moltis-org/moltis/issues/1012) BeforeAgentStart hook never fires | [#1017](https://github.com/moltis-org/moltis/pull/1017) | **Broken contract** — documented hook silently absent since April refactor; breaks all hook-dependent extensions |
| **High** | [#1013](https://github.com/moltis-org/moltis/issues/1013) BeforeLLMCall ModifyPayload discarded | [#1018](https://github.com/moltis-org/moltis/pull/1018) | **Broken contract** — docs claim modification works, implementation ignored it |
| **Medium** | [#1014](https://github.com/moltis-org/moltis/issues/1014) DANGEROUS_PATTERN_DEFS regex false-positive | [#1019](https://github.com/moltis-org/moltis/pull/1019) | Security UX issue — over-blocking legitimate heredoc usage |
| **Medium** | [#1007](https://github.com/moltis-org/moltis/issues/1007) Gemma `<thought>` tags plain text | [#1016](https://github.com/moltis-org/moltis/pull/1016) | Model compatibility — reasoning leakage into visible output |
| **Medium** | [#1006](https://github.com/moltis-org/moltis/issues/1006) VoiceCoquiTtsConfig defaults stripped | [#1015](https://github.com/moltis-org/moltis/pull/1015) | Config UX — user settings "disappear" on restart |
| **Low** | [#1020](https://github.com/moltis-org/moltis/issues/1020) Docker sandbox image prebuilt failed | [#1021](https://github.com/moltis-org/moltis/pull/1021) | Build infrastructure |

**Critical Pattern**: Two **hook system regressions** (#1012, #1013) from a single April refactor (`e9674b2a`) suggest that refactoring introduced systemic lifecycle bugs. The rapid same-day fix indicates maintainer awareness but also **insufficient pre-merge testing** for hook contracts.

---

## 6. Feature Requests & Roadmap Signals

### Open Feature Request

| Issue | Description | Likelihood in Next Release |
|:---|:---|:---|
| [#1011](https://github.com/moltis-org/moltis/issues/1011) Per-turn `tool_choice` + `active_tools` filtering | **Drift-resistant routing** for small/cheap LLMs (Claude haiku-4-5 tier) that fail at complex tool selection | **High** — Aligns with current provider/model compatibility focus; author `dmitriikeler` has reported multiple bugs, indicating active user with clear needs |

**Technical Signal**: The request addresses **LLM capability tiering** — a growing need as Moltis supports more models. Implementation would require:
- Extending runner turn context with `tool_choice` override
- Filtering `tools` array per-turn without mutating global config
- Backward compatibility for existing agent definitions

**Prediction**: If `dmitriikeler` or community provides a PR draft, this merges within 1-2 releases given maintainer responsiveness pattern.

---

## 7. User Feedback Summary

### Pain Points (from issue text analysis)

| User | Pain Point | Severity | Context |
|:---|:---|:---|:---|
| `dmitriikeler` | Hook documentation ≠ reality | **High** | Three issues (#1011-#1013) in one day; invested user building on hook system |
| `maop` | Model-specific parsing failures | **Medium** | Gemma reasoning tags, TTS config — "latest version" doesn't guarantee model compatibility |
| `bsarkisov` | Docker sandbox build failures | **Medium** | Fresh install blocked |
| `Cstewart-HC` | Heartbeat/exec race conditions | **Medium** | Long-running agent sessions unstable |

### Satisfaction Indicators
- ✅ **Fast turnaround**: All bugs reported 2026-05-17/18 were fixed same day
- ⚠️ **Documentation drift**: Hooks docs claimed capabilities that were broken — trust erosion risk
- ⚠️ **Single maintainer bottleneck**: All fixes from `penso`; bus factor concern

### Use Case Signals
- **Multi-model deployments**: Users actively running Claude, Gemma, and local TTS simultaneously
- **Security-conscious tooling**: Dangerous pattern scanning actively used (and scrutinized)
- **Extension ecosystem**: Hook system is integration point for external tools

---

## 8. Backlog Watch

### Items Needing Attention

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1010](https://github.com/moltis-org/moltis/pull/1010) `memory_save` nested subfolders | **1 day** | **Low urgency, high value** | Community PR from `gmoigneu`; enables QMD collection flexibility. Needs maintainer review |
| [#1009](https://github.com/moltis-org/moltis/pull/1009) QMD child process leak on timeout | **1 day** | **High — resource leak** | Fixes zombie process accumulation. `tokio::time::timeout` + `Command::output()` anti-pattern. Should prioritize review |
| [#858](https://github.com/moltis-org/moltis/issues/858) Heartbeat loop (closed) | **24 days** | **Monitoring** | Verify fix actually landed; no linked PR. If unresolved, will resurface |

### Maintainer Attention Recommendation

**Immediate**: [#1009](https://github.com/moltis-org/moltis/pull/1009) — process leaks are production-impacting and accumulate silently.

**This week**: [#1010](https://github.com/moltis-org/moltis/pull/1010) — memory subsystem expansion aligns with roadmap; `gmoigneu` is repeat contributor (2 PRs), worth cultivating.

**Process**: Establish PR-to-issue linking requirement. Multiple fixes lacked explicit `Fixes #NNN` in merge commits, complicating traceability.

---

## Project Health Assessment

| Metric | Status |
|:---|:---|
| Issue resolution velocity | 🟢 **Excellent** — 87.5% close rate, same-day fixes |
| Backlog cleanliness | 🟢 **Excellent** — 1 open issue, 2 open PRs |
| Contributor diversity | 🟡 **Concern** — 6/6 merged PRs from single maintainer |
| Hook system reliability | 🟡 **Fragile** — 2 regressions from one refactor |
| Documentation accuracy | 🟡 **Drift detected** — docs claimed working features that were broken |
| Release cadence | 🟢 **Healthy** — Daily release matching active development |

**Overall**: Moltis is in **active stabilization mode** with responsive maintenance but exhibits **technical debt from rapid April refactoring**. The hook system requires audit for additional undiscovered regressions.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-05-19

## 1. Today's Overview

CoPaw (QwenPaw) shows **high development velocity** with 31 issues and 23 PRs updated in the last 24 hours, indicating an active community and responsive maintainer team. The project released **v1.1.8-beta.1**, focusing on plan mode enhancements and browser tool fixes. Critical stability work dominates: three major chat-unresponsiveness bugs were resolved, including a root-cause fix for the widespread "three dots spinning" issue caused by a global LLM rate limiter singleton. However, **security concerns emerged** with an unpatched RCE vulnerability in the plugin interface, and several regression reports against v1.1.7 suggest quality assurance gaps in recent releases. The community is actively expanding skills and platform support, with contributions spanning Feishu CardKit streaming, World Cup companion skills, and Tauri desktop packaging.

---

## 2. Releases

### [v1.1.8-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.8-beta.1)
| Aspect | Detail |
|--------|--------|
| **Type** | Beta pre-release |
| **Key Changes** | • **feat(plan mode)**: Strengthened plan reaffirmation from user messages — improves agent's ability to confirm understanding before execution ([#4198](https://github.com/agentscope-ai/QwenPaw/pull/4198))<br>• **fix(tool)**: Browser implementation fixes (truncated in release notes, likely related to stability) |
| **Breaking Changes** | None identified |
| **Migration Notes** | Standard beta upgrade path; plan mode behavior change may affect existing workflow automations relying on implicit plan acceptance |

---

## 3. Project Progress

### Merged/Closed PRs (7 total)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#4487](https://github.com/agentscope-ai/QwenPaw/pull/4487) | rayrayraykk | **fix(providers)**: Replace global LLM rate limiter with per-model instances | **Critical stability fix** — resolves root cause of widespread chat unresponsiveness ([#4469](https://github.com/agentscope-ai/QwenPaw/issues/4469)) |
| [#4488](https://github.com/agentscope-ai/QwenPaw/pull/4488) | zhijianma | **fix(console/chat)**: Upgrade `@agentscope-ai/chat` to 1.1.63 to fix SSE connection leak | Fixes browser connection exhaustion after 6+ page navigations |
| [#4489](https://github.com/agentscope-ai/QwenPaw/pull/4489) | qbc2016 | **fix(openai_provider)**: Increase `min max_tokens` to 20 for API compatibility | Prevents `qwen3.5-omni-plus` and similar models from rejecting requests |
| [#4476](https://github.com/agentscope-ai/QwenPaw/pull/4476) | zhijianma | **fix(token_usage)**: Add per-model token usage aggregation | Improves cost tracking granularity |
| [#4471](https://github.com/agentscope-ai/QwenPaw/pull/4471) | ekzhu | **feat(skill)**: Add built-in `html-video-demo` skill (en + zh) | New content generation capability for UI demonstration videos |
| [#4429](https://github.com/agentscope-ai/QwenPaw/pull/4429) | jinglinpeng | **Fix(backup)**: Backup restore trust follow-up | Security hardening for backup/restore operations |
| [#4479](https://github.com/agentscope-ai/QwenPaw/pull/4479) | xusuohan | ~~新增octoken模型供应山，删除其他供应商~~ | **Closed** — Appears to be a mistaken/destructive PR (deletes other providers) |

### Notable Open PRs in Progress

| PR | Status | Description |
|:---|:---|:---|
| [#4492](https://github.com/agentscope-ai/QwenPaw/pull/4492) | First-time contributor | Fix OpenAIProvider connection test missing `extra_headers` — fixes [#4484](https://github.com/agentscope-ai/QwenPaw/issues/4484) |
| [#4490](https://github.com/agentscope-ai/QwenPaw/pull/4490) | Open | WeChat graceful poll thread shutdown with exponential backoff |
| [#4480](https://github.com/agentscope-ai/QwenPaw/pull/4480) | Open | Feishu CardKit streaming card output for real-time responses |
| [#4482](https://github.com/agentscope-ai/QwenPaw/pull/4482) | Open | Official plugin distribution website with CDN publishing |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | Under Review | Tauri 2.x desktop app support — major platform expansion |
| [#4443](https://github.com/agentscope-ai/QwenPaw/pull/4443) | Open | Lightweight `/goal` mode for session-scoped objectives |

---

## 4. Community Hot Topics

### Most Active Discussions (by comment count)

| Rank | Issue/PR | Comments | Analysis |
|:---|:---|:---|:---|
| 1 | [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) 🐾 Help Wanted: Open Tasks | **62 comments** | **Perennial coordination hub** — Maintained by @cuiyuebing since March 25; serves as decentralized task board. High engagement indicates successful community onboarding strategy, but also signals maintainer bandwidth constraints (community self-organizing around gaps). |
| 2 | [#4469](https://github.com/agentscope-ai/QwenPaw/issues/4469) Chat window unresponsive (three dots spinning) | **17 comments** | **Critical user pain point** — Multiple users confirmed Docker restart, version rollback, and model switching failed. Root cause identified as global rate limiter singleton; fix merged in [#4487](https://github.com/agentscope-ai/QwenPaw/pull/4487). High comment volume reflects frustration with "unfixable" symptom. |
| 3 | [#4453](https://github.com/agentscope-ai/QwenPaw/issues/4453) Chat window unresponsive (duplicate) | **10 comments** | **Duplicate cluster** — Same symptom as #4469 but reported independently; users tried Docker restart, version rollback. Suggests issue was prevalent enough to generate multiple reports before root cause fix. |
| 4 | [#4051](https://github.com/agentscope-ai/QwenPaw/issues/4051) DeepSeek think content parsing issue | **8 comments** | **Model compatibility gap** — DeepSeek v4 flash's `<thinking>` tags not properly rendered; content hidden from user. Indicates lag in supporting latest model output formats. |
| 5 | [#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) WeChat iLink cron push failures | **7 comments** | **Enterprise reliability concern** — `context_token` expiration without retry logic, plus silent image/file send failures. Affects production deployments using WeChat for notifications. |

### Underlying Needs Analysis
- **Reliability over features**: Top issues center on "chat stops working" — users prioritize stable core over new capabilities
- **Enterprise WeChat deployment**: iLink integration gaps (token refresh, error visibility) block business use cases
- **Model ecosystem velocity**: Lag in supporting newest models (ChatGPT-5.5, DeepSeek v4) creates competitive pressure

---

## 5. Bugs & Stability

### Critical Severity

| Issue | Description | Fix Status |
|:---|:---|:---|
| [#4470](https://github.com/agentscope-ai/QwenPaw/issues/4470) | **Unauthorized RCE vulnerability in plugin interface** | 🚨 **OPEN — NO FIX PR** |
| [#4469](https://github.com/agentscope-ai/QwenPaw/issues/4469) | Chat completely unresponsive (three dots spinning) — global rate limiter | ✅ Fixed in [#4487](https://github.com/agentscope-ai/QwenPaw/pull/4487) |
| [#4494](https://github.com/agentscope-ai/QwenPaw/issues/4494) | Console stream stalls mid-generation with false "you interrupted me" message | 🚨 **OPEN — NO FIX PR** |

### High Severity

| Issue | Description | Fix Status |
|:---|:---|:---|
| [#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) | WeChat iLink cron push fails silently on token expiry; no retry | 🚨 **OPEN — NO FIX PR** |
| [#4448](https://github.com/agentscope-ai/QwenPaw/issues/4448) | Context compaction fails: "invalid format (missing ## header)" | 🚨 **OPEN — NO FIX PR** (duplicate #4447 closed without clear resolution) |
| [#4496](https://github.com/agentscope-ai/QwenPaw/issues/4496) | v1.1.7 regression: AGENTS.md loads built-in template instead of workspace file | 🚨 **OPEN — NO FIX PR** |
| [#4485](https://github.com/agentscope-ai/QwenPaw/issues/4485) | Plugin tools registered in agent.json but never injected into Agent Toolkit (function calling invisible) | 🚨 **OPEN — NO FIX PR** |

### Medium Severity

| Issue | Description | Fix Status |
|:---|:---|:---|
| [#4367](https://github.com/agentscope-ai/QwenPaw/issues/4367) | Assistant stuck showing only "Thinking" after tool_result | 🚨 **OPEN — NO FIX PR** |
| [#4051](https://github.com/agentscope-ai/QwenPaw/issues/4051) | DeepSeek think content parsing failure | 🚨 **OPEN — NO FIX PR** |
| [#4481](https://github.com/agentscope-ai/QwenPaw/issues/4481) | Windows GBK encoding errors (systemic fix needed) | 🚨 **OPEN — NO FIX PR** |

### Regressions in v1.1.7
- [#4496](https://github.com/agentscope-ai/QwenPaw/issues/4496): AGENTS.md loading broken
- [#4469](https://github.com/agentscope-ai/QwenPaw/issues/4469)/[#4453](https://github.com/agentscope-ai/QwenPaw/issues/4453): Chat unresponsiveness (rate limiter)
- [#4485](https://github.com/agentscope-ai/QwenPaw/issues/4485): Plugin toolkit injection failure

**Assessment**: v1.1.7 has **multiple confirmed regressions** suggesting insufficient pre-release testing. The v1.1.8-beta.1 release timing appears reactive to stability crises.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| [#4437](https://github.com/agentscope-ai/QwenPaw/issues/4437) | Delete individual chat turns | **High** | Small UI change; high user value for context management |
| [#4436](https://github.com/agentscope-ai/QwenPaw/issues/4436) | Split conversations into new sessions | **High** | Complements #4437; addresses token cost concerns |
| [#4435](https://github.com/agentscope-ai/QwenPaw/issues/4435) | Display turn count + token estimate | **Medium-High** | Diagnostic value; aligns with cost-conscious features above |
| [#4472](https://github.com/agentscope-ai/QwenPaw/issues/4472) | Replace `click` with `typer` for colored CLI | **Medium** | Developer experience; breaking change for CLI scripts |
| [#4486](https://github.com/agentscope-ai/QwenPaw/issues/4486) | Flathub/Flatpak isolated installer | **Low-Medium** | Niche Linux demand; Tauri desktop (#3813) higher priority |
| [#4491](https://github.com/agentscope-ai/QwenPaw/issues/4491) | Sub-agent MCP/ACP config inheritance semantics | **Medium** | Architectural decision needed before implementation |

**Emerging Themes**: Session lifecycle management (delete/split/count) is a clear user priority cluster. The three related issues (#4435-4437) from same author (@hyper0x) suggest power-user frustration with current all-or-nothing session handling.

---

## 7. User Feedback Summary

### Pain Points (Explicit Complaints)

| Theme | Evidence | Severity |
|:---|:---|:---|
| **"Chat just stops working"** | #4469, #4453, #4478, #4475 (frustrated rant) | 🔴 Critical |
| **Upgrades break existing functionality** | #4496 (AGENTS.md), #4485 (plugins) | 🔴 Critical |
| **Silent failures / poor error visibility** | #4477 (WeChat no logs), #4494 (false interrupt message) | 🟡 High |
| **Windows encoding hell** | #4481 (GBK errors daily) | 🟡 High |
| **Plugin system unreliable** | #4485 (registered but not loaded) | 🟡 High |

### Use Cases
- **WeChat enterprise notifications**: Cron-based scheduled pushes (#4477)
- **Multi-model fallback**: Users switching models when one fails (#4469)
- **Local network deployment**: CDN-dependent icons break air-gapped installs (#2908, fixed)
- **Content generation**: HTML video demos (#4471), World Cup companion (#4407)

### Satisfaction Signals
- Active contribution: Multiple first-time contributors (#4492, #4479, #4407)
- Skill ecosystem growth: Community-built skills (World Cup, video demo)
- Responsive fixes: #4469 root cause identified and fixed within 24h of peak reports

### Dissatisfaction Signals
- **"I'm writing this for the 3rd time"** — #4497 (Markdown table line breaks)
- **"受不了了，这阿里技术也不行啊"** — #4475 (fed up, suspects AI-generated code)
- Duplicate issues for same bug suggest search/discovery friction

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>2 weeks old, high value/impact)

| Issue | Age | Status | Risk |
|:---|:---|:---|:---|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) 🐾 Open Tasks | ~8 weeks | Active community self-management | **Low** — functioning but may need curator rotation |
| [#2908](https://github.com/agentscope-ai/QwenPaw/issues/2908) CDN icons in LAN | ~6 weeks | **Closed** | Resolved |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) Tauri desktop support | ~3 weeks | Under Review | **Medium** — Major platform expansion; review bandwidth |
| [#4332](https://github.com/agentscope-ai/QwenPaw/pull/4332) Frontend unit tests milestone | ~5 weeks | Under Review | **Medium** — Test infrastructure critical for v1.1.7-style regressions |
| [#4367](https://github.com/agentscope-ai/QwenPaw/issues/4367) "Thinking"-only assistant messages | ~5 days | Open, 3 comments | **High** — Core UX bug, no assigned fix |
| [#4051](https://github.com/agentscope-ai/QwenPaw/issues/4051) DeepSeek parsing | ~2 weeks | Open, 8 comments | **High** — Model compatibility, competitive gap |

### Critical Unassigned Security
| Issue | Age | Action Needed |
|:---|:---|:---|
| [#4470](https://github.com/agentscope-ai/QwenPaw/issues/4470) Plugin RCE vulnerability | 1 day | **Immediate security triage** — No comments from maintainers yet; unauthorized remote code execution in plugin interface is maximum severity |

---

## Project Health Assessment

| Metric | Score | Notes |
|:---|:---|:---|
| **Activity** | 🟢 Strong | 54 items updated in 24h |
| **Responsiveness** | 🟢 Good | Critical bugs fixed same-day (#4487) |
| **Stability** | 🔴 Concerning | Multiple v1.1.7 regressions; RCE unpatched |
| **Security Posture** | 🔴 Critical gap | Unacknowledged RCE; plugin trust model broken (#4470, #4485) |
| **Community Growth** | 🟢 Healthy | First-time contributors, skill contributions |
| **Release Quality** | 🟡 Declining | v1.1.7 regressions suggest QA gaps; beta release reactive |

**Recommendation**: Prioritize security response for #4470, establish regression test suite before v1.1.8 stable, and consider feature freeze until v1.1.7 issues are fully resolved.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-19

## 1. Today's Overview

ZeroClaw saw **high velocity activity** with 26 issues and 50 PRs updated in the last 24 hours, though the **merge rate remains low** (only 8 of 50 PRs merged/closed). The project is in an active development phase with significant backlog accumulation—42 open PRs suggest either rigorous review standards or potential maintainer bandwidth constraints. No new releases were published. The community is particularly focused on **provider ecosystem expansion**, **skill system hardening**, and **channel infrastructure stability**. Notably, several long-standing issues around cron behavior, skill installation, and provider compatibility saw closure, indicating progress on technical debt.

---

## 2. Releases

**No new releases.** The latest release remains prior to this period. The v0.7.6 milestone (tracked in [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253)) appears to be the next target, focused on skills UX improvements.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Description | Impact |
|:---|:---|:---|
| [#6749](https://github.com/zeroclaw-labs/zeroclaw/pull/6749) | Expanded manual cross-platform build matrix coverage (FreeBSD, illumos, NetBSD, musl targets) | **Platform parity** — closes gap between manual and release builds |
| [#6750](https://github.com/zeroclaw-labs/zeroclaw/pull/6750) | Fixed Windows snapshot TTL too short for polling interval | **Desktop stability** — reduces PowerShell spawning 5x |
| [#6758](https://github.com/zeroclaw-labs/zeroclaw/pull/6758) | Split MiniMax provider into Global/China entries | **Provider accuracy** — fixes region routing confusion |

### Closed Issues with Engineering Significance

| Issue | Resolution |
|:---|:---|
| [#1924](https://github.com/zeroclaw-labs/zeroclaw/issues/1924) | **FreeBSD platform support** — community-validated, binaries now buildable |
| [#6210](https://github.com/zeroclaw-labs/zeroclaw/issues/6210) | SkillForge auto-integrator schema compliance fixed (follow-up to [#6128](https://github.com/zeroclaw-labs/zeroclaw/issues/6128)) |
| [#6128](https://github.com/zeroclaw-labs/zeroclaw/issues/6128) | `deny_unknown_fields` on `SkillMeta` prevents silent config drops |
| [#6245](https://github.com/zeroclaw-labs/zeroclaw/issues/6245) | Tavily search provider **still unimplemented** — closed as known limitation (stub remains) |
| [#6742](https://github.com/zeroclaw-labs/zeroclaw/issues/6742) | Streaming payload tracing tests added for `--log-llm` |
| [#6681](https://github.com/zeroclaw-labs/zeroclaw/issues/6681) | **Critical panic fixed**: `reqwest::blocking` inside `tokio` runtime in `skills install` |
| [#6439](https://github.com/zeroclaw-labs/zeroclaw/issues/6439) | Morph (Fast Apply) provider added |
| [#6444](https://github.com/zeroclaw-labs/zeroclaw/issues/6444) | GitHub Models provider added |
| [#6739](https://github.com/zeroclaw-labs/zeroclaw/issues/6739) | Cron timezone contract inconsistency documented/tracked |
| [#6747](https://github.com/zeroclaw-labs/zeroclaw/issues/6747) | Semantic PR action allowlist issue (duplicate, org-level fix needed) |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | Analysis |
|:---|:---|:---|:---|
| 1 | [#1924 FreeBSD support](https://github.com/zeroclaw-labs/zeroclaw/issues/1924) | 7 comments, 👍1 | **Infrastructure diversity demand** — TrueNAS/jail users need first-class BSD support; compilation burden is adoption friction. Community-validated solution suggests maintainer merge is viable. |
| 2 | [#6210 SkillForge schema mismatch](https://github.com/zeroclaw-labs/zeroclaw/issues/6210) | 5 comments | **Quality at speed tension** — auto-generated TOML was emitting non-schema fields, indicating skill tooling outpaced runtime validation. Rapid follow-up to [#6128](https://github.com/zeroclaw-labs/zeroclaw/issues/6128) shows iterative hardening pattern. |
| 3 | [#6128 `deny_unknown_fields`](https://github.com/zeroclaw-labs/zeroclaw/issues/6128) | 4 comments | **Silent failure UX** — serde's default permissive parsing was causing config typos to vanish. Community values explicit errors over "works but wrong" behavior. |
| 4 | [#6558 Qwen provider error](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) | 3 comments | **OpenAI-compatible provider fragility** — custom endpoint + model combination fails with 405 Method Not Allowed, suggesting routing/URL construction issues in compatible provider layer. |

### Underlying Needs Analysis

- **Multi-platform parity**: FreeBSD, Windows, and cross-compilation targets are not "nice to have" for this community—they're deployment blockers for homelab and enterprise users.
- **Skill ecosystem trust**: The rapid sequence of #5972 → #6128 → #6210 shows skill configuration is a **complexity hotspot** where user-facing tooling and runtime validation must stay in lockstep.
- **Provider diversity vs. reliability**: Adding GitHub Models, Morph, MiniMax splits, while Qwen/GLM have active bugs, suggests the provider abstraction layer needs structural investment, not just more adapters.

---

## 5. Bugs & Stability

### Active Bugs by Severity

| Severity | Issue | Status | Fix PR? | Risk Assessment |
|:---|:---|:---|:---|:---|
| **S0** (data loss/security) | [#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) Qwen provider 405 errors | Open | ❌ No | **Blocking** — custom provider path completely broken for DashScope/Qwen users |
| **S0** | [#6751](https://github.com/zeroclaw-labs/zeroclaw/issues/6751) PR title workflow never runs | In Progress | ❌ No (identified) | **Process risk** — all PRs lack title validation since May 16; silent failure pattern |
| **S1** (workflow blocked) | [#6681](https://github.com/zeroclaw-labs/zeroclaw/issues/6681) `skills install` panic | **CLOSED** | ✅ Fixed | reqwest blocking inside tokio — classic async Rust footgun, now resolved |
| **S2** (degraded) | [#6632](https://github.com/zeroclaw-labs/zeroclaw/issues/6632) Cron manual run persists failures as `ok` | Open | ❌ No | Reliability gap between scheduled and manual cron paths |
| **S2** | [#6739](https://github.com/zeroclaw-labs/zeroclaw/issues/6739) Cron timezone inconsistency | Closed (tracked) | ❌ No | Contract ambiguity across tools/CLI/API surfaces |
| **S2** | [#6643](https://github.com/zeroclaw-labs/zeroclaw/issues/6643) GLM-5.1 thoughts merge into output | Open | ❌ No | Provider-specific reasoning format handling; regression of [#5285](https://github.com/zeroclaw-labs/zeroclaw/issues/5285) |
| **S2** | [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) Channels supervisor crashloop | Open | ❌ No | **Operational pain** — 2-second restart loops when all channels disabled; dashboard UX creates bad config state |

### Regressions & Infrastructure

| Issue | Description |
|:---|:---|
| [#6756](https://github.com/zeroclaw-labs/zeroclaw/issues/6756) | `models list` fails for custom providers — doctor path doesn't read stored `api_key`; **onboard flow works, listing doesn't** (inconsistent UX) |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | **153 commits lost in bulk revert** `c3ff635` (March 28) — ongoing audit for recovery; high-risk technical debt |

---

## 6. Feature Requests & Roadmap Signals

### Likely Near-Term (v0.7.6 / v0.8.0)

| Feature | Issue/PR | Confidence | Signal Strength |
|:---|:---|:---|:---|
| **Skills UX overhaul** | [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) | **High** | Explicit tracker with community call for input; multiple sub-issues closing |
| **PDF tool support** | [#5745](https://github.com/zeroclaw-labs/zeroclaw/issues/5745) | Medium | Long-standing; scholarly/research use case; no PR yet |
| **Agent capability flags** | [#6729](https://github.com/zeroclaw-labs/zeroclaw/issues/6729) | Medium | Security hardening for v0.8.0; replaces hardcoded behaviors |
| **ACP session persistence** | [#6649](https://github.com/zeroclaw-labs/zeroclaw/pull/6649) | Medium-High | Large PR open; editor reconnect context loss is acute pain |

### Ecosystem Expansion

| Feature | Issue/PR | Notes |
|:---|:---|:---|
| **Jira tool actions** | [#6481](https://github.com/zeroclaw-labs/zeroclaw/pull/6481) | XL PR open; enterprise workflow critical |
| **Home Assistant / Philips Hue / Eight Sleep** | [#6464](https://github.com/zeroclaw-labs/zeroclaw/pull/6464), [#6470](https://github.com/zeroclaw-labs/zeroclaw/pull/6470), [#6471](https://github.com/zeroclaw-labs/zeroclaw/pull/6471) | Smart home cluster; all from same contributor (`theonlyhennygod`) — potential maintainer emerging |
| **ACP bridge auto-pairing reliability** | [#6754](https://github.com/zeroclaw-labs/zeroclaw/issues/6754) | Infrastructure operator workflow; one-time code model too fragile |

### Structural/Architectural

| Feature | Issue | Implication |
|:---|:---|:---|
| `/api/events` SSE semantics | [#6637](https://github.com/zeroclaw-labs/zeroclaw/issues/6637) | Gateway contract ambiguity affects client implementations |
| Websocket steering output preservation | [#6661](https://github.com/zeroclaw-labs/zeroclaw/issues/6661) | Real-time collaboration feature; transcript integrity is trust-critical |
| File rotation crate | [#6611](https://github.com/zeroclaw-labs/zeroclaw/pull/6611) | Observability infrastructure; blocked status suggests dependency or design review needed |

---

## 7. User Feedback Summary

### Explicit Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **"It works in onboard, fails in normal use"** | [#6756](https://github.com/zeroclaw-labs/zeroclaw/issues/6756) models list vs. onboard; [#6681](https://github.com/zeroclaw-labs/zeroclaw/issues/6681) install panic | **High** — inconsistent path behavior destroys trust |
| **Silent failures** | [#6128](https://github.com/zeroclaw-labs/zeroclaw/issues/6128) config typos vanishing; [#6210](https://github.com/zeroclaw-labs/zeroclaw/issues/6210) auto-generated invalid TOML | **High** — users can't debug what they can't see |
| **Provider roulette** | [#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) Qwen 405; [#6643](https://github.com/zeroclaw-labs/zeroclaw/issues/6643) GLM thoughts leaking | **Medium-High** — "compatible" providers aren't reliably compatible |
| **Cron unpredictability** | [#6632](https://github.com/zeroclaw-labs/zeroclaw/issues/6632), [#6739](https://github.com/zeroclaw-labs/zeroclaw/issues/6739) | **Medium** — scheduling is core value prop, multiple contract issues |
| **Docker documentation gaps** | [#6760](https://github.com/zeroclaw-labs/zeroclaw/issues/6760) | **Low-Medium** — community filling in, but official docs lag tested configs |

### Use Case Signals

- **Homelab/self-hosting**: FreeBSD, TrueNAS, Docker rootless, Home Assistant integration — strong "run it myself" cohort
- **Enterprise ticketing**: Jira PR suggests IT workflow automation use case
- **Research/academic**: PDF support request, scholarly article ingestion
- **Real-time devtools**: ACP bridge, websocket steering — IDE/editor integration is strategic

### Satisfaction Indicators

- ✅ Rapid closure of [#6681](https://github.com/zeroclaw-labs/zeroclaw/issues/6681) panic (1 day turnaround)
- ✅ Community-contributed provider additions (Morph, GitHub Models)
- ⚠️ **Concern**: 42 open PRs vs. 8 merged suggests either quality bar or review bottleneck may frustrate contributors

---

## 8. Backlog Watch

### Critical Items Needing Maintainer Action

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 153 commits lost in bulk revert | ~7 weeks | **Extreme** | Commit archaeology for recovery; 2 comments, no visible progress |
| [#6481](https://github.com/zeroclaw-labs/zeroclaw/pull/6481) Jira tool (XL, needs-author-action) | ~2 weeks | High | Author response needed; enterprise feature stalled |
| [#6611](https://github.com/zeroclaw-labs/zeroclaw/pull/6611) File rotation crate (XL, blocked) | ~1 week | High | Blocked status — dependency or architectural decision needed |
| [#6303](https://github.com/zeroclaw-labs/zeroclaw/pull/6303) Provider turn ordering fix (XL) | ~2.5 weeks | High | Google Gemini compatibility; needs-author-action |
| [#6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715) Branch cleanup (200+ branches) | 3 days | Medium | Maintainer hygiene; "needs-maintainer-review" label explicit |
| [#6278](https://github.com/zeroclaw-labs/zeroclaw/pull/6278) Discord reply-as-mention | ~2.5 weeks | Medium | Small PR, author-action needed — low hanging fruit |

### Process Concerns

| Issue | Problem |
|:---|:---|
| [#6751](https://github.com/zeroclaw-labs/zeroclaw/issues/6751) | PR title validation **silently broken since merge** — process guardrail is inert |
| "needs-author-action" prevalence | 8 of 20 shown PRs — high rate of contributor/maintainer ping-pong suggests unclear expectations or review latency |

---

**Digest compiled from:** `zeroclaw-labs/zeroclaw` GitHub activity 2026-05-18 → 2026-05-19. Activity level: **High velocity, moderate throughput**. Health indicator: **Stable with backlog risk**.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*