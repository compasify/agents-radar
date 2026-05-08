# OpenClaw Ecosystem Digest 2026-05-08

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-08 00:20 UTC

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

# OpenClaw Project Digest — 2026-05-08

---

## 1. Today's Overview

OpenClaw shows **exceptionally high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a mature project under heavy development with an active maintainer community. The 285:215 open-to-closed issue ratio and 353:147 open-to-merged PR ratio suggest the team is processing work rapidly but accumulating backlog faster than it resolves. A single maintenance release (v2026.5.7) shipped with publishing pipeline fixes. The dominant themes are **Codex integration hardening**, **platform-specific channel reliability** (Discord, Telegram, Feishu, iMessage), and **performance/scaling concerns** as users push the system into production multi-agent workloads.

---

## 2. Releases

### [v2026.5.7](https://github.com/openclaw/openclaw/releases/tag/v2026.5.7)

| Aspect | Detail |
|--------|--------|
| **Type** | Maintenance / reliability |
| **Changes** | Retry transient ClawHub CLI dependency install failures; keep preview-passing plugins publishable when one preview cell flakes; verify every expected ClawHub package version after publish |
| **Breaking Changes** | None reported |
| **Migration Notes** | Faster recovery from failed maintenance releases; no user action required |

---

## 3. Project Progress

### Major Merged/Closed PRs Today

| PR | Author | Impact |
|----|--------|--------|
| [#78733](https://github.com/openclaw/openclaw/pull/78733) — **feat(codex): enable native plugin app support** | kevinslin | **XL-sized foundational work**: Eliminates extra thread semantics and duplicated activation paths for migrated Codex plugins; enables native Codex app capabilities in harness thread |
| [#79134](https://github.com/openclaw/openclaw/pull/79134) — **fix(codex): respect app-server workspace policy** | kevinslin | Codex security hardening: parses `/etc/codex/requirements.toml` sandbox allowlists, persists permission provenance, repairs legacy default-yolo bindings |
| [#79136](https://github.com/openclaw/openclaw/pull/79136) — **fix(infra/net): prefer bundled undici 8 fetch** | hclsys | Node 25+ compatibility fix for dispatcher mismatch in `fetchWithSsrFGuard` |
| [#79145](https://github.com/openclaw/openclaw/pull/79145) — **fix(update-check): respect npm_config_registry env var** | hclsys | Corporate npm mirror support (Verdaccio, Nexus, Artifactory, CNPM) |
| [#78595](https://github.com/openclaw/openclaw/pull/78595) — **Refactor runtime state into SQLite** | steipete | **XL-sized architectural refactor**: Moves from scattered JSON/JSONL/lock-files to typed SQLite storage; touches nearly every channel and extension |

### Advancing Features

- **Subagent tool allowlists**: [#78441](https://github.com/openclaw/openclaw/pull/78441) adds `toolsAllow` to `sessions_spawn` for native subagent runs
- **Performance optimization**: [#78852](https://github.com/openclaw/openclaw/pull/78852) reuses media tool availability; [#78664](https://github.com/openclaw/openclaw/pull/78664) caches provider tool schema normalization
- **Observability**: [#78381](https://github.com/openclaw/openclaw/pull/78381) exposes embedded runner prep stage timings
- **Workspace addressing**: [#78678](https://github.com/openclaw/openclaw/pull/78678) implements `oc://` universal addressing substrate with CLI

---

## 4. Community Hot Topics

| Issue/PR | Comments | 👍 | Analysis of Underlying Need |
|----------|----------|-----|----------------------------|
| [#9443](https://github.com/openclaw/openclaw/issues/9443) Prebuilt Android APK releases | 24 | 1 | **Mobile deployment friction**: Users want zero-build mobile companion access; current source-only distribution excludes non-developers |
| [#78407](https://github.com/openclaw/openclaw/issues/78407) `openclaw doctor --fix` rewrites `openai-codex/*` → `openai/*` | 16 | 3 | **Migration safety**: Auto-fix tooling destroying OAuth configurations; trust in automated maintenance operations |
| [#12602](https://github.com/openclaw/openclaw/issues/12602) Slack Block Kit support | 13 | 0 | **Rich messaging UX**: Plain text limits agent usefulness for business workflows (CRM, database results) |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) Masked secrets system | 12 | 4 | **Security hardening**: Prevent prompt injection credential extraction; enterprise adoption blocker |
| [#78402](https://github.com/openclaw/openclaw/issues/78402) Gateway WebSocket closures (1000/1005/1006) | 11 | 2 | **Production reliability**: Event-loop starvation from stuck tool calls breaks all connections |
| [#41494](https://github.com/openclaw/openclaw/issues/41494) Gemini reasoning leak regression | 11 | 0 | **Model output quality**: Internal chain-of-thought visible to end users |

**Key insight**: The most engaged topics cluster around **security/secrets** (enterprise readiness) and **channel-specific UX richness** (Slack Block Kit, Android APK). The high-comment, low-👍 pattern on #9443 and #12602 suggests vocal minority needs rather than broad consensus.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|----------|-------|--------|--------|---------|
| **Critical** | [#78402](https://github.com/openclaw/openclaw/issues/78402) Gateway WebSocket mass disconnections | CLOSED | Unknown | Event-loop starvation from stuck tool call; regression in 2026.5.5 |
| **Critical** | [#76562](https://github.com/openclaw/openclaw/issues/76562) High CPU + extreme RPC latency post-2026.4.29 | OPEN | None | Performance regression affecting control-plane; multiple versions impacted |
| **High** | [#78407](https://github.com/openclaw/openclaw/issues/78407) Doctor migration destroys Codex OAuth configs | CLOSED | None | Data loss on automated update; `openai-codex/*` → `openai/*` rewrite |
| **High** | [#78502](https://github.com/openclaw/openclaw/issues/78502) Gemini models hang/timeout on main sessions | OPEN | None | Works in subagents and direct API; session-specific deadlock |
| **High** | [#76315](https://github.com/openclaw/openclaw/issues/76315) Gateway instability under subagent load (Linux) | OPEN | None | WhatsApp 408s, deferred reloads, event-loop stalls |
| **High** | [#78604](https://github.com/openclaw/openclaw/issues/78604) Compaction every ~5min instead of ~30min | CLOSED | None | Context thrashing; unfixed in hotfix per reporter |
| **Medium** | [#78232](https://github.com/openclaw/openclaw/issues/78232) WeChat plugin incompatible with 2026.5.4 | CLOSED | None | `channelRuntime` API changes break inbound processing |
| **Medium** | [#77837](https://github.com/openclaw/openclaw/issues/77837) WeChat `getUpdates` fetch failed | CLOSED | None | `TypeError: fetch failed` post-2026.5.4 |
| **Medium** | [#76804](https://github.com/openclaw/openclaw/issues/76804) WebChat responses not persisted to transcript | CLOSED | None | 5.2 regression; agent runs lose history |
| **Medium** | [#78846](https://github.com/openclaw/openclaw/issues/78846) `[object Object]` in Mistral thinking output | CLOSED | None | Provider-specific object serialization bug |

**Stability assessment**: Concerning pattern of **regressions in core infrastructure** (gateway, compaction, WebSocket handling) across multiple recent versions. The #76562 performance regression spans 2026.4.29→2026.5.2 with no identified root cause yet. Multiple WeChat breakages suggest insufficient integration testing for Chinese market channels.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Likelihood Next Version | Rationale |
|---------|-------|------------------------|-----------|
| **Masked secrets / secret management** | [#10659](https://github.com/openclaw/openclaw/issues/10659), [#13610](https://github.com/openclaw/openclaw/issues/13610) | **High** | Enterprise blocker; security is roadmap priority per #8719; AWS Secrets Manager/Vault integration requested |
| **Channel-mediated MCP approval** | [#78308](https://github.com/openclaw/openclaw/issues/78308) | **High** | Extends existing shell-exec approval pattern; small standard envelope; aligns with security push |
| **Session snapshots (save/load)** | [#13700](https://github.com/openclaw/openclaw/issues/13700) | **Medium** | Strong workflow need; depends on SQLite refactor (#78595) landing |
| **Slack Block Kit** | [#12602](https://github.com/openclaw/openclaw/issues/12602) | **Medium** | Rich messaging is competitive feature; blocked by channel abstraction maturity |
| **Per-model usage logging** | [#13219](https://github.com/openclaw/openclaw/issues/13219) | **Medium** | Cost control is enterprise need; observability infrastructure improving |
| **Android APK releases** | [#9443](https://github.com/openclaw/openclaw/issues/9443) | **Low** | High effort, low 👍; mobile not stated priority; CI/CD complexity |
| **Voice Call Vapi provider** | [#13337](https://github.com/openclaw/openclaw/issues/13337) | **Low** | Niche; Japanese-language issue; voice call plugin experimental |
| **Multi-session architecture (RFC)** | [#48874](https://github.com/openclaw/openclaw/issues/48874) | **Low** | Architectural; needs RFC process; conflicts with current direction |

**Roadmap signal**: The [#78595](https://github.com/openclaw/openclaw/pull/78595) SQLite refactor is a **foundational enabler** for session snapshots, better observability, and state management. Security features (masked secrets, approval flows) are the clearest near-term deliverables.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Update fragility** | #78407, #78232, #77837, #76804 | High — multiple breakages across 2026.5.x series |
| **Production performance at scale** | #76562, #76315, #78402 | High — CPU pinning, event-loop starvation, memory pressure |
| **Context/compaction management** | #2597, #78604, #1210 | Medium-High — silent data loss, unexpected resets, base64 bloat |
| **Secrets handling insecurity** | #10659, #13610 | Medium-High — plaintext configs, version control risks |
| **Channel parity gaps** | #78285, #64752, #17840, #10737 | Medium — iMessage, Telegram reactions, auto-acknowledgment missing |

### Use Cases Driving Engagement

- **Multi-agent orchestration**: Subagent spawning with controlled tool access (#27445, #78441, #8299)
- **Enterprise Slack deployment**: Block Kit, progress rendering, mention handling (#12602, #79146, #79054)
- **Cost control**: Per-hour ceilings, per-model logging, failover limits (#38248, #13219, #35119)

### Satisfaction Signals

- Active plugin ecosystem (WeChat, Feishu, Discord, Telegram, iMessage all maintained)
- Rapid bug closure for high-visibility issues (most 2026.5.5 regressions closed within 24-48h)
- Strong maintainer response on security proposals (#8719)

### Dissatisfaction Signals

- "Regression (worked before, now fails" label appears repeatedly
- Users reporting same compaction bug "unfixed in hotfix" (#78604)
- Performance regression #76562 has no assignee or root cause after 5 days

---

## 8. Backlog Watch

| Issue | Age | Last Update | Risk | Needs |
|-------|-----|-------------|------|-------|
| [#2597](https://github.com/openclaw/openclaw/issues/2597) Context/state lost after compaction | ~3 months | 2026-05-07 | **High** | Architectural decision on context visibility; blocked on no clear owner |
| [#48874](https://github.com/openclaw/openclaw/issues/48874) Multi-Session Architecture RFC | ~2 months | 2026-05-07 | Medium | RFC review; may conflict with #78595 SQLite direction |
| [#71412](https://github.com/openclaw/openclaw/issues/71412) Zombie tasks after stopChannel abort | ~2 weeks | 2026-05-07 | **High** | Gateway reliability; health-monitor false positives |
| [#75739](https://github.com/openclaw/openclaw/issues/75739) Codex harness migration routing bugs | ~1 week | 2026-05-07 | **High** | Runtime routing logic; OAuth profile brokering |
| [#76562](https://github.com/openclaw/openclaw/issues/76562) High CPU/RPC latency regression | ~5 days | 2026-05-07 | **Critical** | Performance profiling; bisect to identify commit |
| [#77700](https://github.com/openclaw/openclaw/issues/77700) Prepared runtime resolution migration | ~3 days | 2026-05-07 | Medium | Tracking issue; staged performance improvement |
| [#78502](https://github.com/openclaw/openclaw/issues/78502) Gemini hang/timeout main sessions | ~2 days | 2026-05-08 | **High** | Provider-specific debugging; session vs. subagent differential |

**Maintainer attention needed**: #76562 (performance regression) and #71412 (zombie tasks) are production-impacting with no visible assignee. The #78595 SQLite refactor is XL-sized and touches 15+ extensions—needs careful review to avoid new regressions.

---

*Digest generated from GitHub activity 2026-05-07 to 2026-05-08. All links reference github.com/openclaw/openclaw.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source AI Agent Ecosystem
**Date:** 2026-05-08 | **Analyst:** Senior AI Agent Ecosystem Analyst

---

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is experiencing **intense parallel development** across 11+ active projects, with daily activity ranging from 13 to 500+ items per project. The space has bifurcated into two camps: **mature, production-hardened platforms** (OpenClaw, Hermes Agent, CoPaw) serving enterprise multi-channel deployments, and **emerging, architecture-innovative frameworks** (Moltis, NullClaw, IronClaw) pursuing decentralized identity, lightweight runtimes, and protocol interoperability. A critical tension pervades the ecosystem: users demand reliability and "agents that finish what they start" (Hermes's v0.13.0 theme), yet rapid iteration is introducing regressions across gateway, memory, and channel layers—particularly affecting Chinese-market platforms (WeChat, Feishu) and reasoning-model compatibility.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score | Assessment |
|:---|:---:|:---:|:---|:---:|:---|
| **OpenClaw** | 500 | 500 | v2026.5.7 (maintenance) | 🟡 B+ | Highest raw activity; backlog accumulating faster than resolution |
| **Hermes Agent** | 50 | 50 | **v0.13.0 "Tenacity"** (May 7) | 🟡 B+ | Major milestone shipped; 42:8 open:closed ratio signals strain |
| **NanoBot** | 9 | 27 | None (v0.1.5.post3) | 🟡 B | Stabilization phase; aggressive triage, review bottleneck (19 open PRs) |
| **PicoClaw** | 36 | 50 | v0.2.8-nightly | 🟡 B | Pre-release stabilization; 31 open PRs = review capacity constraint |
| **NanoClaw** | 9 | 32 | None | 🟡 B+ | Intensive stabilization; 23 merged PRs, strong maintainer bandwidth |
| **NullClaw** | 6 | 7 | None | 🟢 B | Healthy sustained; Zig-based, niche but growing enterprise interest |
| **IronClaw** | 23 | 50 | **v0.28.0 "Reborn"** (May 7) | 🟡 B | Architectural transition; high velocity, high risk; crates.io blocked |
| **LobsterAI** | 2 | 45 | **2026.5.7** (May 7) | 🟢 B+ | Clean release cycle; 80% merge rate; low issue volume |
| **Moltis** | 4 | 10 | **20260507.04/.05** (2 patches) | 🟢 B+ | Exceptional responsiveness; single-maintainer risk |
| **CoPaw** | 50 | 33 | None (v1.1.5.post2) | 🟡 B+ | Mature; 60% issue closure; strategic deadlock on skill ecosystem |
| **ZeroClaw** | 50 | 50 | **Blocked** (v0.7.5 pending) | 🔴 C+ | Zero merges in 24h; CI blocker; 0/8 S1+ bugs have PRs |
| **TinyClaw** | 0 | 0 | None | ⚪ — | No activity |
| **ZeptoClaw** | 0 | 0 | None | ⚪ — | No activity |

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Closest Peer |
|:---|:---|:---|
| **Scale** | 500 issues/PRs daily = 10× next busiest | Hermes Agent (50/50) |
| **Ecosystem breadth** | 15+ channel plugins maintained (Discord, Telegram, Feishu, iMessage, WeChat) | CoPaw (Feishu, WeChat, DingTalk) |
| **Codex integration depth** | Native plugin app support, OAuth, harness migration | IronClaw (Reborn/WIP), NanoClaw (skills) |
| **Architectural investment** | SQLite refactor (#78595) as foundational enabler | Hermes (observational memory in review) |

### Technical Approach Differences
- **OpenClaw**: TypeScript/Node runtime, JSON→SQLite migration, plugin-centric extensibility via ClawHub
- **Hermes**: Rust-core with Python bindings, "Tenacity" = task persistence engine, MCP-native tool ecosystem
- **IronClaw**: Rust/WASM "Reborn" substrate, capability-based security, libSQL/PostgreSQL durable stores
- **NullClaw**: Zig for 1MB binary targets, ACP protocol adapter, explicit rejection of heavy runtimes
- **Moltis**: Rust + WASMtime, Ed25519 TOFU identity, telephony as first-class channel

### Community Size Comparison
OpenClaw operates at **ecosystem-scale** (comparable to a Linux distribution's issue velocity), but this creates **governance challenges**: 285:215 open:closed issue ratio and explicit meta-issue #7335 in Hermes comparing to "OpenClaw's 11K issue backlog." Hermes (295 contributors in v0.13.0) and CoPaw (zhaozhuang521 as concentrated frontend maintainer) demonstrate more manageable contributor distribution. NanoClaw and Moltis show **single-maintainer dominance** (penso: 7/10 PRs; ddaniels/glifocat: A2A routing cluster).

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Gateway resilience / reconnect logic** | OpenClaw (#78402), Hermes (#17063, #18086), PicoClaw (#629), NanoClaw (#2333), ZeroClaw (#6472) | Event-loop starvation, "20 attempts then permanent death," WebSocket cascading failures, Telegram polling wedges |
| **Reasoning model compatibility** | OpenClaw (#41494), NanoBot (#3665), CoPaw (#4051, #4034, #4006), LobsterAI (#1819, #1847) | `reasoning_content` passthrough, `<think>` tag parsing, chain-of-thought leak prevention, DeepSeek/Claude thinking models |
| **Secrets / credential management** | OpenClaw (#10659, #13610), NanoClaw (#869), IronClaw (#3289), CoPaw (implicit) | Masked secrets system, per-group credentials, AWS Secrets Manager/Vault integration, OAuth config preservation |
| **Memory / state durability** | OpenClaw (#78595 SQLite, #2597 compaction), Hermes (#14420, #12583), NanoBot (#3660 dream cursor, 4 memory PRs), NanoClaw (#2318 mnemon, #2327 compaction routing) | Session snapshots, context compaction without data loss, persistent semantic memory, SQLite-backed state |
| **Multi-agent / subagent orchestration** | OpenClaw (#78441 `toolsAllow`), Hermes (#7517), NanoClaw (#2267 A2A routing, #2329), Moltis (#979 TOFU identity) | Native subagent spawning, A2A reply routing, cross-agent trust, tool allowlists |
| **Channel-specific UX richness** | OpenClaw (#12602 Slack Block Kit), Hermes (Feishu, Discord per-channel), PicoClaw (Telegram media groups), CoPaw (Feishu nickname propagation), LobsterAI (WeChat 2FA) | Rich messaging (Block Kit, cards), progress rendering, mention handling, verification flows |
| **Local / privacy-first inference** | NanoBot (#3513 Whisper local), Moltis (#981 whisper-local), NullClaw (#871 DuckDuckGo), Hermes (Ollama/vLLM timeouts) | Offline STT, local LLM provider resilience, no-API-key web search, reduced cloud dependency |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | **Plugin ecosystem maturity** — ClawHub as npm-like marketplace | Power users, multi-channel operators, Codex adopters | TS/Node, SQLite migration, universal `oc://` addressing |
| **Hermes Agent** | **Task persistence / "Tenacity"** — agents that finish workflows | Enterprise teams, reliability-focused deployers | Rust core, MCP-native, TUI-first |
| **NanoBot** | **Memory system sophistication** — Dream, GitStore, consolidation | Researchers, long-context users | Python, active memory layer experimentation |
| **PicoClaw** | **Go-based simplicity** — single binary, fast startup | Self-hosters, infrastructure-light deployments | Go 1.25, Seahorse history, exec sandbox hardening |
| **NanoClaw** | **A2A routing infrastructure** — multi-channel agent groups | Advanced orchestrators, Claude Code users | TS, OneCLI dynamic skills, persistent mnemon |
| **NullClaw** | **Extreme lightweight** — 1MB binary, Zig runtime | Embedded, edge, low-resource devices | Zig, ACP protocol, no heavy dependencies |
| **IronClaw** | **Capability-based security / Reborn WASM** | NEAR ecosystem, security-conscious enterprises | Rust/WASM, WIT interfaces, libSQL/Postgres stores |
| **LobsterAI** | **Desktop-native packaged app** — Windows-first reliability | Chinese market, non-technical users | Electron/Tauri, NetEase cloud integration |
| **Moltis** | **Decentralized identity + telephony** | Personal server operators, federation builders | Rust, Ed25519 TOFU, Twilio voice, remote sandboxes |
| **CoPaw** | **Enterprise channel depth** — Feishu/WeChat/DingTalk parity | Chinese enterprise, team collaboration | Python, web console, skill batch management |
| **ZeroClaw** | **Desktop OS control** — macOS AX/TCC integration | macOS power users, automation-heavy workflows | Rust/Tauri, screenshot/AppleScript/keyboard injection |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (Architectural Transition)
| Project | Signal | Risk |
|:---|:---|:---|
| **IronClaw** | 50 PRs/day, "Reborn" substrate landed, 864 commits since last release | "Fake seams" in new architecture (#3333); crates.io 3 versions behind; E2E cancelled |
| **OpenClaw** | 1000 items/day, XL-sized foundational PRs (#78595, #78733) | Backlog accumulation; regression pattern across versions; no root cause on #76562 performance regression |

### Tier 2: Active Stabilization (Post-Major Release)
| Project | Signal | Risk |
|:---|:---|:---|
| **Hermes** | v0.13.0 shipped, 588 PRs merged, "Tenacity" theme | 42:8 open:closed issue ratio; gateway debt (Telegram reconnect); issue growth anxiety |
| **NanoClaw** | 23/32 PRs merged, A2A routing audit in progress | Critical routing bugs (#2332/#2331) partially fixed; pnpm/container near-total outage just resolved |
| **PicoClaw** | 22/36 issues closed, nightly builds | 31 open PRs = review bottleneck; two critical unaddressed reliability issues (#629, #2721) |

### Tier 3: Steady-State / Concentrated Maintenance
| Project | Signal | Risk |
|:---|:---|:---|
| **LobsterAI** | 80% merge rate, clean release cycle, Windows focus | Low issue volume may mask user growth lag; auth as revenue-critical SPOF |
| **Moltis** | 9/10 PRs merged, same-day fixes, 2 patches/day | Single-maintainer (penso); zero community engagement on issues/PRs |
| **CoPaw** | 60% issue closure, multi-channel maturity | Strategic deadlock (#280); critical Docker regression (#4101); reasoning model gaps |
| **NanoBot** | 6/9 issues closed, memory system hardening | Review bottleneck (19 open PRs); critical WebSocket media drop (#3674) unassigned |

### Tier 4: Blocked / At Risk
| Project | Signal | Risk |
|:---|:---|:---|
| **ZeroClaw** | 0 merges in 24h, v0.7.5 blocked, 100 items active | 0/8 S1+ bugs have PRs; PR stagnation (23-41 days); contributor retention risk |
| **TinyClaw, ZeptoClaw** | Zero activity | Project abandonment or stealth mode |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Actionable Insight |
|:---|:---|:---|
| **"Agents must finish what they start"** | Hermes v0.13.0 branding; OpenClaw #76562 performance regression blocking production; NanoClaw A2A routing fixes | Task persistence is becoming table stakes, not differentiator. Implement checkpoint/resume, idempotent tool calls, and durable run-state before scaling. |
| **Reasoning models break existing abstractions** | DeepSeek v4, Claude thinking, Gemini reasoning leaks across 5+ projects | Design provider layers with explicit `reasoning_content` passthrough; don't assume "content" field is sufficient. Test against thinking models early. |
| **Chinese-market channels as complexity multiplier** | WeChat breakages in OpenClaw, NanoBot, CoPaw; Feishu mention detection, QR 2FA, message deduplication | If targeting China, dedicate **full-time platform maintainer** per channel. Protocol changes, auth flows, and rate limits differ fundamentally from Western APIs. |
| **Local-first / privacy as default** | Moltis whisper-local, NanoBot local Whisper, NullClaw DuckDuckGo, Hermes Ollama timeout fixes | Offer offline-capable paths for STT, search, and inference. Cloud-only architectures face growing regulatory and user preference headwinds. |
| **Identity and trust for multi-agent federation** | Moltis Ed25519 TOFU, NanoClaw per-group credentials (#869), IronClaw capability host | Agent-to-agent protocols (ACP, MCP) need cryptographic identity, not just API keys. Plan for decentralized trust models now. |
| **Desktop OS integration as new frontier** | ZeroClaw macOS TCC/AX, LobsterAI Windows path hardening, Moltis telephony | The "personal agent" is moving from chatbot to **system actor**. Permissions, sandbox escape, and OS-native capabilities are unmapped territory. |
| **Configuration→runtime trust gaps** | ZeroClaw `autonomy="full"` blocks shell; OpenClaw doctor destroys OAuth; Hermes settings silently ignored | User mental models of "allow" don't match implementation. Implement explicit capability grants with audit logging, not implicit defaults. |

---

*Report compiled from 13 project digests covering 2026-05-07/08 GitHub activity. Health scores synthesized from velocity, closure rates, bug severity distribution, and architectural risk factors.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-08

## 1. Today's Overview

NanoBot showed **high development velocity** with 27 PRs and 9 issues updated in the last 24 hours, indicating an active maintenance period. The project is in a **stabilization phase** with 6 of 9 issues closed and 8 of 27 PRs merged/closed, suggesting maintainers are aggressively triaging and resolving problems. No new release was cut, despite significant bug fixes landing. The community is actively expanding channel support (WhatsApp, WeChat, SimpleX, WebSocket) while core memory and agent architecture undergoes refactoring. The high open PR count (19) relative to merged (8) suggests a potential review bottleneck.

---

## 2. Releases

**No new releases** — Version remains at `v0.1.5.post3` (per issue reports).

---

## 3. Project Progress

### Merged/Closed PRs (8 total)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#3660](https://github.com/HKUDS/nanobot/pull/3660) | Jefsky | **Dream memory cursor restoration**: Tracks `.dream_cursor` in GitStore so memory restores roll back correctly; adds regression test | Fixes data loss in Dream feature |
| [#1835](https://github.com/HKUDS/nanobot/pull/1835) | alekwo | **Custom LLM arguments support**: Enables passing arbitrary args (e.g., `{"stream": false}` for Ollama) | Unlocks backend-specific optimizations |
| [#3677](https://github.com/HKUDS/nanobot/pull/3677) | zhw415876999-prog | **SSE streaming fix**: Removes `enable_compression` that batched SSE chunks, restoring real-time streaming | Critical UX fix for streaming users |
| [#3672](https://github.com/HKUDS/nanobot/pull/3672) | yorkhellen | **CI: Full Ruff F rules enabled**: Expands linting from 2 to all F rules, fixes F821/F841 errors | Code quality infrastructure |
| [#3678](https://github.com/HKUDS/nanobot/pull/3678) | chengyongru | **Logging traceback preservation**: Completes migration from `logger.error` to `logger.exception` | Debuggability improvement |

**Key architectural advances:**
- **Memory system refactoring**: Multiple PRs (#3686, #3687, #3685, #3680) address consolidation, archiving, and session persistence — indicating the memory layer is being actively hardened for production use.
- **Channel reliability**: WeChat and Matrix silent-failure fixes (#3684, #3664) improve messaging robustness.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Type | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|:---|
| [#3682](https://github.com/HKUDS/nanobot/issues/3682) | Closed Issue | **3** | WebSocket handshake failure | **Cross-platform deployment friction**: Linux server + Windows/Mac clients fail; mobile works. Suggests browser-specific WebSocket behavior or proxy/CORS issues in gateway. |
| [#3652](https://github.com/HKUDS/nanobot/issues/3652) | Open Issue | **2** | Disable Dream feature | **User control over autonomous behavior**: Users want opt-out for background "thinking" to save tokens/reduce unpredictability. |
| [#3665](https://github.com/HKUDS/nanobot/issues/3665) | Closed Issue | **2** | DeepSeek-v4-flash `reasoning_content` error | **Reasoning model compatibility**: API requires passing reasoning outputs back; NanoBot's abstraction layer breaks new model paradigms. |

### High-Impact Open PRs (no comments but significant scope)

| PR | Scope | Community Signal |
|:---|:---|:---|
| [#3513](https://github.com/HKUDS/nanobot/pull/3513) | Local Whisper + unified transcription | Privacy-conscious users want offline voice; 20+ days open suggests complex review |
| [#3486](https://github.com/HKUDS/nanobot/pull/3486) | SimpleX channel addition | Privacy-focused messenger integration; aligns with decentralized trend |
| [#1219](https://github.com/HKUDS/nanobot/pull/1219) | Stock market analysis skills | **Commercial use case demand** — longest-running open PR (70+ days); may need architectural alignment |

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#3674](https://github.com/HKUDS/nanobot/issues/3674) | **WebSocket drops media silently** — `media` field ignored in `_dispatch_envelope()` | **NO FIX PR** — Data loss bug, 0 comments, needs immediate attention |
| 🔴 **Critical** | [#3681](https://github.com/HKUDS/nanobot/issues/3681) | LLM timeout after 300s (intermittent) | Closed without code fix — may recur |
| 🟡 **High** | [#3682](https://github.com/HKUDS/nanobot/issues/3682), [#3683](https://github.com/HKUDS/nanobot/issues/3683) | WebSocket handshake failures, cross-platform access issues | Closed — may need follow-up for root cause |
| 🟡 **High** | [#3665](https://github.com/HKUDS/nanobot/issues/3665) | DeepSeek reasoning_content not passed back | Closed — fix likely in #3655 (reasoning display PR) |
| 🟡 **High** | [#3680](https://github.com/HKUDS/nanobot/pull/3680) | Corrupted session files cause total history loss | **PR open** — sanity check fix pending |
| 🟢 **Medium** | [#3604](https://github.com/HKUDS/nanobot/issues/3604) | WhatsApp voice messages not downloading | Closed — likely fixed by transcription work |
| 🟢 **Medium** | [#3684](https://github.com/HKUDS/nanobot/pull/3684) | WeChat silent message drops (3 causes) | **PR open** — comprehensive fix in review |

**Stability assessment**: Memory/session corruption and WebSocket media handling are the two most severe unaddressed risks. The flurry of memory-related PRs suggests maintainers recognize this.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **Bot name/icon customization** | [#3650](https://github.com/HKUDS/nanobot/issues/3650) | **High** | Simple config change; tagged "good first issue"; low complexity |
| **Dream disable toggle** | [#3652](https://github.com/HKUDS/nanobot/issues/3652) | **High** | Config flag pattern; user control theme aligns with stability push |
| **Reasoning content display** | [#3655](https://github.com/HKUDS/nanobot/pull/3655) | **High** | PR open; needed for DeepSeek/Claude thinking models |
| **Local Whisper support** | [#3513](https://github.com/HKUDS/nanobot/pull/3513) | **Medium** | Large PR, 10 days old; privacy demand strong |
| **SimpleX channel** | [#3486](https://github.com/HKUDS/nanobot/pull/3486) | **Medium** | New channel pattern established; may need security review |
| **Sandbox bind mounts** | [#3642](https://github.com/HKUDS/nanobot/pull/3642) | **Medium** | Security-sensitive; needs careful review |
| **Stock analysis skills** | [#1219](https://github.com/HKUDS/nanobot/pull/1219) | **Low** | 70+ days open; scope creep concerns; may need plugin system |
| **Heartbeat skip optimization** | [#1939](https://github.com/HKUDS/nanobot/pull/1939) | **Medium** | Token cost concern; simple logic change |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Silent failures** | [#3684](https://github.com/HKUDS/nanobot/issues/3684) (WeChat), [#3664](https://github.com/HKUDS/nanobot/pull/3664) (Matrix), [#3674](https://github.com/HKUDS/nanobot/issues/3674) (WebSocket media) | 🔴 Critical — debugging impossible |
| **Session/history loss** | [#3680](https://github.com/HKUDS/nanobot/pull/3680), [#3685](https://github.com/HKUDS/nanobot/pull/3685), [#3686](https://github.com/HKUDS/nanobot/pull/3686), [#3687](https://github.com/HKUDS/nanobot/pull/3687) | 🔴 Critical — erodes trust |
| **Cross-platform WebSocket issues** | [#3682](https://github.com/HKUDS/nanobot/issues/3682), [#3683](https://github.com/HKUDS/nanobot/issues/3683) | 🟡 High — deployment blocker |
| **LLM timeouts** | [#3681](https://github.com/HKUDS/nanobot/issues/3681) | 🟡 High — intermittent but frequent |
| **Reasoning model incompatibility** | [#3665](https://github.com/HKUDS/nanobot/issues/3665) | 🟡 High — blocks DeepSeek adoption |
| **No Dream opt-out** | [#3652](https://github.com/HKUDS/nanobot/issues/3652) | 🟢 Medium — user autonomy |

### Use Cases Emerging
- **Enterprise self-hosting**: Linux server + Windows/Mac clients (WebSocket pain)
- **Privacy-first messaging**: SimpleX, local Whisper demand
- **Financial analysis**: Stock skills PR suggests commercial vertical interest
- **Multi-channel operations**: WhatsApp Business with command sync, WeChat fixes

### Satisfaction Signals
- Rapid issue closure (6/9 in 24h) suggests responsive maintainers
- Active community contributions: 27 PRs in 24h from diverse authors

---

## 8. Backlog Watch

### Needs Maintainer Attention

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#3674](https://github.com/HKUDS/nanobot/issues/3674) **WebSocket media drops** | 1 day | 🔴 **Data loss** — zero comments | Triage, assign, likely quick fix |
| [#3513](https://github.com/HKUDS/nanobot/pull/3513) **Local Whisper** | 10 days | Large PR bit-rotting | Review or request changes |
| [#1219](https://github.com/HKUDS/nanobot/pull/1219) **Stock analysis** | 70+ days | Community interest, scope unclear | Close or scope into plugin RFC |
| [#1443](https://github.com/HKUDS/nanobot/pull/1443) **Heartbeat reasoning decouple** | 66 days | Architectural change | Rebase, review for merge |
| [#1939](https://github.com/HKUDS/nanobot/pull/1939) **Skip heartbeat** | 57 days | Token cost savings | Simple rebase + merge |
| [#3486](https://github.com/HKUDS/nanobot/pull/3486) **SimpleX channel** | 11 days | Security review needed | Assign security reviewer |

### Review Bottleneck Indicators
- 19 open PRs vs. 8 closed suggests ~2:1 ratio; #3513, #1443, #1219, #1939 all >50 days old
- Memory system has **4 competing PRs** (#3685-#3687, #3680) — risk of merge conflicts; needs coordination

---

*Digest generated from GitHub activity 2026-05-07 to 2026-05-08. All links: https://github.com/HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-08

## 1. Today's Overview

Hermes Agent shows **very high development velocity** with 50 issues and 50 PRs updated in the last 24 hours, reflecting an active but strained maintenance situation. The project just shipped **v0.13.0 "The Tenacity Release"** (May 7), a substantial milestone with 864 commits and 588 merged PRs since v0.12.0. However, the 42:8 open-to-closed issue ratio and 41:9 open-to-merged PR ratio indicate **backlog accumulation** — consistent with the community's concern about issue growth voiced in [#7335](https://github.com/NousResearch/hermes-agent/issues/7335). The release tagline "Hermes Agent now finishes what it starts" signals a deliberate focus on reliability and task completion, suggesting the team recognizes persistence as a competitive differentiator against alternatives like OpenClaw.

---

## 2. Releases

### [v2026.5.7: Hermes Agent v0.13.0 — "The Tenacity Release"](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.7)

| Metric | Value |
|--------|-------|
| **Release Date** | May 7, 2026 |
| **Commits since v0.12.0** | 864 |
| **Merged PRs** | 588 |
| **Files Changed** | 829 |
| **Insertions** | 128,366 |
| **Issues Closed** | 282 (13 P0, 36 P1) |
| **Community Contributors** | 295 |

**Key Theme:** Task persistence and completion reliability — the release emphasizes agents that "finish what they start," addressing a critical gap in autonomous agent behavior where tasks are abandoned mid-execution.

**Breaking Changes / Migration Notes:** Not explicitly detailed in available data; users should review full release notes for migration guidance given the large surface area (829 files changed).

---

## 3. Project Progress

### Merged/Closed PRs Today (9 total, highlights)

| PR | Author | Summary | Significance |
|----|--------|---------|------------|
| [#20710](https://github.com/NousResearch/hermes-agent/pull/20710) | yhwl8888 | **P0 fixes**: tool timeout, JSON deserialization, MCP handler change detection | Critical stability fixes for tool execution and state management |
| [#20421](https://github.com/NousResearch/hermes-agent/pull/20421) | Mind-Dragon | TUI: fix fast paste dropping characters; Cmd+C killing agent over SSH | UX fix for remote macOS users |
| [#15525](https://github.com/NousResearch/hermes-agent/pull/15525) | foreverxdord | Feishu `require_mention` toggle support | Platform parity completion |
| [#21538](https://github.com/NousResearch/hermes-agent/issues/21538) | — | *Closed as duplicate*: per-job `enabled_toolsets` for cron | Feature already tracked elsewhere |
| [#21559](https://github.com/NousResearch/hermes-agent/issues/21559) | — | *Closed*: MCP image content dropping + text truncation | Bug resolved |
| [#21558](https://github.com/NousResearch/hermes-agent/issues/21558) | — | *Closed*: MCP approvals subsystem non-functional (duplicate of #21563) | Consolidated tracking |
| [#21474](https://github.com/NousResearch/hermes-agent/issues/21474) | — | *Closed*: MCP `channels_list` returning 0 channels | Schema mismatch fixed |
| [#18086](https://github.com/NousResearch/hermes-agent/issues/18086) | — | *Closed*: Telegram silent after network blip | Reconnect ladder fixed |
| [#7335](https://github.com/NousResearch/hermes-agent/issues/7335) | — | *Closed*: "More than 1000 open issues" meta-discussion | Acknowledged; no immediate action |

**Active Development Areas:**
- **Gateway reliability**: Multiple Telegram reconnect fixes ([#21548](https://github.com/NousResearch/hermes-agent/pull/21548), [#18086](https://github.com/NousResearch/hermes-agent/issues/18086))
- **MCP ecosystem maturation**: Pre-connect hooks, async discovery, approval subsystem fixes
- **Platform expansion**: Feishu, Discord per-channel routing, Windows native support
- **Memory systems**: Observational memory provider in review

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Comments | 👍 | Topic | Underlying Need |
|-------|----------|-----|-------|---------------|
| [#7335](https://github.com/NousResearch/hermes-agent/issues/7335) | 13 | 0 | Issue growth control | **Project governance anxiety** — users comparing to OpenClaw's 11K issue backlog want proactive triage |
| [#14420](https://github.com/NousResearch/hermes-agent/issues/14420) | 11 | 0 | Memory/context failure | **Trust in agent continuity** — users expect persistent identity across sessions; current implementation fails with non-English contexts |
| [#7517](https://github.com/NousResearch/hermes-agent/issues/7517) | 8 | 7 | Native multi-agent support | **Operational scaling** — single gateway serving multiple isolated agents reduces infrastructure cost |
| [#20249](https://github.com/NousResearch/hermes-agent/issues/20249) | 6 | 0 | Per-turn model escalation | **Cost-performance optimization** — users want "expert on demand" without manual `/model` switching |
| [#21498](https://github.com/NousResearch/hermes-agent/issues/21498) | 5 | 0 | `max_output_tokens` silently dropped | **Configuration predictability** — silent normalization breaks user expectations |

### Most Active PRs by Engagement

| PR | Focus | Significance |
|----|-------|------------|
| [#21561](https://github.com/NousResearch/hermes-agent/pull/21561) | Native Windows support | **Market expansion** — removes WSL requirement, lowers barrier to entry |
| [#21548](https://github.com/NousResearch/hermes-agent/pull/21548) | Telegram polling wedge detection | **Production reliability** — fixes silent failures requiring manual restart |
| [#20096](https://github.com/NousResearch/hermes-agent/pull/20096) | Channel-based profile routing | **Multi-tenancy** — enables single instance to serve distinct personas |

**Community Sentiment:** Strong demand for **enterprise-grade reliability** (gateway reconnects, silent failures) and **cost optimization** (model routing, local inference support). The 7 upvotes on multi-agent support [#7517](https://github.com/NousResearch/hermes-agent/issues/7517) suggest this is a priority feature for production deployments.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **P1** | [#17063](https://github.com/NousResearch/hermes-agent/issues/17063) | Gateway reconnect watcher permanently stops after 20 failed attempts | [#21548](https://github.com/NousResearch/hermes-agent/pull/21548) in review |
| **P1** | [#18086](https://github.com/NousResearch/hermes-agent/issues/18086) | Telegram Updater silent forever after network blip | **Fixed in v0.13.0** |
| **P2** | [#21498](https://github.com/NousResearch/hermes-agent/issues/21498) | Custom `max_output_tokens` silently dropped — defaults to 2048 | None yet |
| **P2** | [#5729](https://github.com/NousResearch/hermes-agent/issues/5729) | Telegram resolver failure caching + missing degraded-state detection | [#21548](https://github.com/NousResearch/hermes-agent/pull/21548) addresses |
| **P2** | [#21026](https://github.com/NousResearch/hermes-agent/issues/21026) | Multi-platform WebSockets share single event loop → cascading disconnections | None yet |
| **P2** | [#21559](https://github.com/NousResearch/hermes-agent/issues/21559) | MCP: image content dropped, large text truncated | **Closed** |
| **P2** | [#21524](https://github.com/NousResearch/hermes-agent/issues/21524) | Ollama provider resolution issue on Windows/WSL2 | None yet |
| **P2** | [#12607](https://github.com/NousResearch/hermes-agent/issues/12607) | Retryable reconnects stop after prolonged network loss | Related to [#17063](https://github.com/NousResearch/hermes-agent/issues/17063) |
| **P2** | [#12534](https://github.com/NousResearch/hermes-agent/issues/12534) | Docker sandbox never receives env vars from `docker_forward_env` | None yet |
| **P3** | [#21512](https://github.com/NousResearch/hermes-agent/issues/21512) | TUI: Shift+Enter/Alt+Enter submit instead of newline in Warp terminal | None yet |
| **P3** | [#21481](https://github.com/NousResearch/hermes-agent/issues/21481) | `hermes doctor` falsely reports valid Gemini API key as invalid | None yet |

**Pattern:** **Gateway resilience** is the dominant stability theme — Telegram specifically has multiple interconnected reconnect issues suggesting architectural debt in the polling/retry design. The "20 attempts then permanent death" logic [#17063](https://github.com/NousResearch/hermes-agent/issues/17063) appears in multiple variants and needs systemic fix.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Signals for v0.14.0? | Rationale |
|---------|----------|----------------------|-----------|
| **Native Multi-Agent Support** | [#7517](https://github.com/NousResearch/hermes-agent/issues/7517) | **High probability** | High engagement (7👍), architectural foundation exists with profile routing PR [#20096](https://github.com/NousResearch/hermes-agent/pull/20096) |
| **Per-turn Model Escalation** | [#20249](https://github.com/NousResearch/hermes-agent/issues/20249) | Medium probability | Aligns with v0.13.0 "Tenacity" theme; technically complex |
| **Model Switch as Agent Tool** | [#16525](https://github.com/NousResearch/hermes-agent/issues/16525) | Medium probability | Enables autonomous version of [#20249](https://github.com/NousResearch/hermes-agent/issues/20249); lower UX friction |
| **Proactive Check-Ins** | [#9645](https://github.com/NousResearch/hermes-agent/issues/9645) | Medium probability | Differentiating UX feature; "off by default" design respects user control |
| **Brave Search Backend** | [#10644](https://github.com/NousResearch/hermes-agent/issues/10644) | **Likely soon** | 22👍, straightforward integration pattern; SearXNG precedent exists |
| **SearXNG Default Provider** | [#5941](https://github.com/NousResearch/hermes-agent/issues/5941) | **In progress** | 28👍, highest-voted feature; docs fix PR [#21572](https://github.com/NousResearch/hermes-agent/pull/21572) suggests active work |
| **Eden AI Provider** | [#21573](https://github.com/NousResearch/hermes-agent/pull/21573) | **v0.13.x patch likely** | PR open; meta-gateway reduces provider maintenance burden |
| **Observational Memory** | [#12583](https://github.com/NousResearch/hermes-agent/pull/12583) | Medium probability | Long-running PR; memory architecture critical for agent quality |
| **Telegram Business Mode** | [#21551](https://github.com/NousResearch/hermes-agent/issues/21551) | Lower probability | Niche use case; platform-specific |

**Emerging Theme:** **Autonomous self-optimization** — model routing, proactive behavior, and multi-agent orchestration suggest users want Hermes to require less manual intervention, extending the "Tenacity" narrative.

---

## 7. User Feedback Summary

### Pain Points

| Category | Specific Issue | Frequency Indicator |
|----------|---------------|---------------------|
| **Silent failures** | Gateway stops without error; tools fail invisibly | Multiple P1/P2 issues |
| **Configuration surprise** | Settings silently ignored or normalized away | [#21498](https://github.com/NousResearch/hermes-agent/issues/21498), [#21481](https://github.com/NousResearch/hermes-agent/issues/21481) |
| **Local inference friction** | Timeouts too aggressive for Ollama/llama.cpp/vLLM | [#21569](https://github.com/NousResearch/hermes-agent/pull/21569), [#21575](https://github.com/NousResearch/hermes-agent/pull/21575) |
| **Cross-platform inconsistency** | Windows, terminal emulators behave differently | [#21561](https://github.com/NousResearch/hermes-agent/pull/21561), [#21512](https://github.com/NousResearch/hermes-agent/issues/21512) |
| **Memory/context loss** | Agent forgets user identity, previous context | [#14420](https://github.com/NousResearch/hermes-agent/issues/14420) |

### Positive Signals

- **v0.13.0 reception**: "Tenacity" branding resonates — users want agents that complete tasks
- **MCP ecosystem investment**: Active development despite bugs shows commitment to open tool standards
- **Platform breadth**: Feishu, WeCom, QQBot, Telegram Business — strong international/enterprise messaging support

### Satisfaction/Dissatisfaction Ratio

Difficult to quantify precisely, but the **high issue-to-closure ratio** and explicit meta-issue about issue growth [#7335](https://github.com/NousResearch/hermes-agent/issues/7335) suggest **growing user base with rising expectations** rather than fundamental dissatisfaction. The 295 contributors in v0.13.0 indicates healthy community investment.

---

## 8. Backlog Watch

### Issues/PRs Needing Maintainer Attention

| Item | Age | Risk | Action Needed |
|------|-----|------|-------------|
| [#5941](https://github.com/NousResearch/hermes-agent/issues/5941) SearXNG default provider | ~1 month | **High** | 28👍 highest-voted feature; docs partially fixed but runtime integration incomplete |
| [#10644](https://github.com/NousResearch/hermes-agent/issues/10644) Brave Search backend | ~3 weeks | Medium | 22👍; blocked on maintainer decision to accept new search backend |
| [#7517](https://github.com/NousResearch/hermes-agent/issues/7517) Native multi-agent | ~1 month | **High** | 7👍, architectural; needs RFC or maintainer design input |
| [#12583](https://github.com/NousResearch/hermes-agent/pull/12583) Observational memory | ~3 weeks | Medium | Large PR; needs review bandwidth, potential merge conflict with v0.13.0 |
| [#21026](https://github.com/NousResearch/hermes-agent/issues/21026) Cascading WebSocket disconnections | New (May 7) | **High** | No fix PR; affects production multi-platform deployments |
| [#21563](https://github.com/NousResearch/hermes-agent/issues/21563) / [#21558](https://github.com/NousResearch/hermes-agent/issues/21558) MCP approvals subsystem non-functional | New | Medium | Two issues filed same day for same bug; needs consolidation and owner assignment |
| [#21374](https://github.com/NousResearch/hermes-agent/issues/21374) / [#21503](https://github.com/NousResearch/hermes-agent/issues/21503) Kanban migration race | New | Medium | Duplicate root cause; schema initialization needs idempotency design |

### Maintenance Concerns

- **Issue triage velocity**: 42 open vs. 8 closed in 24h suggests either backlog growth or deliberate prioritization of v0.13.0 release over triage
- **Duplicate detection**: Multiple same-day duplicates (#21558/#21563, #21374/#21503) indicate either search friction or rapid filing without verification
- **Platform-specific debt**: Telegram has disproportionate bug surface; may need dedicated platform maintainer

---

*Digest generated from GitHub activity data for NousResearch/hermes-agent on 2026-05-08.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-08

## 1. Today's Overview

PicoClaw shows **very high development velocity** with 86 items updated in 24 hours (36 issues, 50 PRs), indicating an active pre-release stabilization period for v0.2.8. The project is heavily focused on **channel reliability** (Telegram, Feishu, Discord), **tool execution safety**, and **provider API resilience**. Notably, 22 issues were closed versus 14 remaining open, suggesting effective triage, though 31 open PRs indicate substantial pending review backlog. A nightly build was published, signaling approaching stable release. The contributor base appears broad with multiple external PRs in flight.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| **[v0.2.8-nightly.20260507.788cda5c](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)** | Nightly | Automated build; unstable. Full changelog covers `v0.2.8...main` delta. No breaking changes documented for this nightly specifically. |

**Migration/Usage Note:** As an automated nightly, production use is discouraged. The changelog suggests incremental fixes toward v0.2.8 stable.

---

## 3. Project Progress

### Merged/Closed PRs Today (Selected)

| PR | Author | Impact |
|----|--------|--------|
| [#2821](https://github.com/sipeed/picoclaw/pull/2821) | bogdanovich | **Security:** Go toolchain bumped to 1.25.10 (CVE fixes GO-2026-4976, GO-2026-4971, GO-2026-4968) |
| [#2819](https://github.com/sipeed/picoclaw/pull/2819) | bogdanovich | **UX:** Non-destructive `/reset` command preserves Seahorse history while starting fresh sessions |
| [#2504](https://github.com/sipeed/picoclaw/pull/2504) | jacrify | **Bugfix:** Discord voice Opus frame corruption fixed (buffer reuse in OGG decoder) |
| [#2460](https://github.com/sipeed/picoclaw/pull/2460) | alexrexby | **MCP compatibility:** Empty object `{}` sent instead of `null` for parameterless tool calls (Zod validation fix) |
| [#2443](https://github.com/sipeed/picoclaw/pull/2443) | Pepelospalotes2005 | **Provider:** Codex OAuth empty response handling for `gpt-5.4` |
| [#2298](https://github.com/sipeed/picoclaw/pull/2298) | badgerbees | **Security:** Exec script preflight hardening — fail-closed on ambiguous interpreter commands |
| [#2240](https://github.com/sipeed/picoclaw/pull/2240) | badgerbees | **Provider:** GitHub Copilot stdio transport support |
| [#2091](https://github.com/sipeed/picoclaw/pull/2091) | badgerbees | **Channel:** Feishu group mention detection via live bot name probing |
| [#2090](https://github.com/sipeed/picoclaw/pull/2090) | badgerbees | **Channel:** Telegram streaming draft cleanup + forum topic routing fix |

**Key Themes:** Tool execution safety, channel message routing correctness, provider transport diversity, security hygiene.

---

## 4. Community Hot Topics

| Item | Comments | Analysis |
|------|----------|----------|
| [#629](https://github.com/sipeed/picoclaw/issues/629) — LLM call failure retry missing | **13** 🔥 | **Core reliability gap.** Long-running tasks hang on transient HTTP 500s. Users need circuit-breaker/retry logic for production workloads. |
| [#2408](https://github.com/sipeed/picoclaw/issues/2408) — LLM Account Stacking (Cartridge-Belt) | **11** | **Enterprise scaling need.** Rate limit/quota rotation for API keys. Closed but concept likely to resurface. |
| [#2171](https://github.com/sipeed/picoclaw/issues/2171) — OpenAI Responses API migration | **10** | **Technical debt/forward compatibility.** OpenAI's recommended API path; affects all OpenAI-derived providers. |
| [#2468](https://github.com/sipeed/picoclaw/issues/2468) — Scheduled task execution restricted | **8** | **Cron/tool boundary confusion.** Cron jobs blocked from "internal channels" — architecture/policy tension. |
| [#1763](https://github.com/sipeed/picoclaw/issues/1763) — aarch64 .deb install failure | **8** | **Platform packaging debt.** ARM64 Linux deployment blocked. |
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) — exec `guardCommand` over-blocking | **8**, 👍2 | **Safety/utility tradeoff.** Path guard misclassifies non-path commands like `curl` URLs. |

**Underlying Needs:** Production resilience (retry, rotation), platform packaging parity, tool sandbox precision without false positives.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| 🔴 **High** | [#629](https://github.com/sipeed/picoclaw/issues/629) — No retry on LLM call failure; tasks hang | Open | **None yet** |
| 🔴 **High** | [#2721](https://github.com/sipeed/picoclaw/issues/2721) — Session history race: `tool_use_id` 400 from Anthropic API | Open | Referenced #704 (closed without visible fix) |
| 🟡 **Medium** | [#1042](https://github.com/sipeed/picoclaw/issues/1042) — exec guard blocks valid commands | Open | [#2814](https://github.com/sipeed/picoclaw/pull/2814) in review |
| 🟡 **Medium** | [#2796](https://github.com/sipeed/picoclaw/issues/2796) — History only shows last user message in multi-turn conversations | Open | None yet |
| 🟡 **Medium** | [#2702](https://github.com/sipeed/picoclaw/issues/2702) — Multi-user groups lack sender attribution in history | Open | None yet |
| 🟢 **Low** | [#2472](https://github.com/sipeed/picoclaw/issues/2472) — `list_dir` Windows path separator mismatch | **Closed** | Fixed |
| 🟢 **Low** | [#2446](https://github.com/sipeed/picoclaw/issues/2446) — Cross-channel message echo | **Closed** | Fixed |
| 🟢 **Low** | [#2464](https://github.com/sipeed/picoclaw/issues/2464) — Feishu consecutive message handling | **Closed** | Fixed |

**Stability Assessment:** Two high-severity reliability issues remain unaddressed (LLM retry, Anthropic race). The Anthropic race is particularly concerning as it was reported "still reproducing" in v0.2.5 despite prior closure.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in v0.2.8+ | Signal Strength |
|---------|----------|----------------------|-----------------|
| General attachment support (files, media) | [#348](https://github.com/sipeed/picoclaw/issues/348) | Medium | High priority tag, long-running |
| SMTP email channel for cron/scheduled reports | [#2465](https://github.com/sipeed/picoclaw/issues/2465) | Medium | Closed but clear use case; may resurface |
| Multiple Feishu app instances | [#2493](https://github.com/sipeed/picoclaw/issues/2493) | Medium | Enterprise multi-tenant need |
| Non-destructive session reset | [#2820](https://github.com/sipeed/picoclaw/issues/2820) → [#2819](https://github.com/sipeed/picoclaw/pull/2819) | **High** | **Merged today** |
| Configurable tool feedback throttling | [#2789](https://github.com/sipeed/picoclaw/pull/2789) | High | In review |
| Telegram media group/album handling | [#2758](https://github.com/sipeed/picoclaw/pull/2758) | High | In review |
| MCP streamable HTTP + integration tests | [#2811](https://github.com/sipeed/picoclaw/pull/2811) | High | In review |
| OpenAI Responses API migration | [#2171](https://github.com/sipeed/picoclaw/issues/2171) | Medium | Technical debt, not user-facing |

**Prediction:** v0.2.8 stable will likely ship with Telegram reliability improvements, session management enhancements (`/reset`), and MCP transport maturity. Attachment support may slip to v0.3.0.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|-------|----------|----------|
| **Tasks hang/crash without recovery** | [#629](https://github.com/sipeed/picoclaw/issues/629), [#2721](https://github.com/sipeed/picoclaw/issues/2721) | Critical |
| **History integrity issues** | [#2796](https://github.com/sipeed/picoclaw/issues/2796), [#2702](https://github.com/sipeed/picoclaw/issues/2702) | High |
| **Platform packaging gaps** | [#1763](https://github.com/sipeed/picoclaw/issues/1763) (aarch64 .deb) | Medium |
| **Tool sandbox false positives** | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | Medium |
| **Documentation/undiscovered behavior** | [#2439](https://github.com/sipeed/picoclaw/issues/2439) (token override), [#2440](https://github.com/sipeed/picoclaw/issues/2440) (Docker readonly FS) | Medium |

### Positive Signals
- Active contributor responsiveness (multiple same-day PR merges)
- Security-conscious development (Go CVE patches, exec hardening)
- Multi-channel investment (Telegram, Feishu, Discord, QQ all receiving fixes)

### Satisfaction Risk
The [#2429](https://github.com/sipeed/picoclaw/issues/2429) outburst ("What kind of idiots give this one stars?") suggests **onboarding friction** and **console mode input bugs** may be driving away new users before they experience core value.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#348](https://github.com/sipeed/picoclaw/issues/348) General Attachment Support | ~2.5 months | **High** — blocks rich media workflows, tagged `priority: high` | Maintainer roadmap commitment |
| [#2171](https://github.com/sipeed/picoclaw/issues/2171) OpenAI Responses API | ~1 month | Medium — forward compatibility | Technical design review |
| [#629](https://github.com/sipeed/picoclaw/issues/629) LLM Retry Logic | ~2.5 months | **Critical** — production blocker | Assign owner, design retry policy |
| [#2721](https://github.com/sipeed/picoclaw/issues/2721) Anthropic Session Race | Reopened | **Critical** — regression, prior fix failed | Deep investigation, possibly API contract issue |
| [#2662](https://github.com/sipeed/picoclaw/pull/2662) Unify vendors documentation | ~2 weeks | Low — docs debt | Review/merge or close |
| [#2758](https://github.com/sipeed/picoclaw/pull/2758), [#2789](https://github.com/sipeed/picoclaw/pull/2789), [#2790](https://github.com/sipeed/picoclaw/pull/2790), [#2791](https://github.com/sipeed/picoclaw/pull/2791), [#2793](https://github.com/sipeed/picoclaw/pull/2793), [#2811](https://github.com/sipeed/picoclaw/pull/2811), [#2813](https://github.com/sipeed/picoclaw/pull/2813), [#2814](https://github.com/sipeed/picoclaw/pull/2814), [#2818](https://github.com/sipeed/picoclaw/pull/2818) | 1-4 days | Medium — review bottleneck | **31 open PRs vs 19 closed suggests reviewer capacity constraint** |

**Maintainer Attention Required:** The open PR backlog (31 items) is the highest risk to release velocity. Priority should be clearing Telegram/channel fixes for v0.2.8 stable, then addressing the two critical reliability issues (#629, #2721) before v0.3.0 feature work.

---

*Digest generated from GitHub activity data for 2026-05-07/08. All links reference https://github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-08

## 1. Today's Overview

NanoClaw saw **exceptionally high activity** on 2026-05-07 with **32 PRs updated** (23 merged/closed, 9 open) and **9 issues** (5 open, 4 closed). No new releases were cut. The project is in an **intensive stabilization phase**, with the majority of effort concentrated on fixing critical agent-to-agent (A2A) routing bugs, hardening Telegram bot security, and resolving container build failures caused by pnpm v11 incompatibilities. The high merge velocity suggests strong maintainer bandwidth, though the volume of open PRs and issues indicates significant technical debt being surfaced simultaneously.

---

## 2. Releases

**No new releases** — None published.

---

## 3. Project Progress

### Merged/Closed PRs (23 total, highlights by impact):

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#2002](https://github.com/qwibitai/nanoclaw/pull/2002) | jorgenclaw | Fix origin-session threading for A2A replies | **Critical routing fix** — closes session misrouting for multi-channel agent groups |
| [#2267](https://github.com/qwibitai/nanoclaw/pull/2267) | ddaniels | Route A2A replies back to originating session | **Core A2A infrastructure** — required `in_reply_to` field added to `RoutableAgentMessage` |
| [#2327](https://github.com/qwibitai/nanoclaw/pull/2327) | glifocat | Inject destination reminder after SDK auto-compaction | Prevents agent "amnesia" about multi-destination routing post-compaction |
| [#2328](https://github.com/qwibitai/nanoclaw/pull/2328) | glifocat | Default reply destination to message origin in multi-destination groups | Eliminates silent routing fallback bugs |
| [#2329](https://github.com/qwibitai/nanoclaw/pull/2329) | gavrielc | Require explicit destination addressing, fix per-destination threading | **Breaking behavioral change** — removes bare-text routing fallback entirely |
| [#2277](https://github.com/qwibitai/nanoclaw/pull/2277) | ddaniels | Refresh routing on follow-up messages mid-query | Fixes cron-to-chat handoff routing staleness |
| [#2333](https://github.com/qwibitai/nanoclaw/pull/2333) | krejov100 | Exponential backoff for gateway listener restarts | Prevents CPU-spin on `TokenInvalid` errors |
| [#2336](https://github.com/qwibitai/nanoclaw/pull/2336) | pthanopassakul | Repair claude-code install for pnpm v11 | **Unblocks all new container builds** — 500-byte stub binary fix |
| [#2335](https://github.com/qwibitai/nanoclaw/pull/2335) | adjohn | Pin pnpm to 10.33.0 to match host | Defensive fix to prevent pnpm 11 regression recurrence |
| [#2321](https://github.com/qwibitai/nanoclaw/pull/2321) | johnnyfish | OneCLI gateway container skill with auto-composed instructions | Dynamic skill loading without NanoClaw releases |
| [#2319](https://github.com/qwibitai/nanoclaw/pull/2319) | ira-at-work | AWS CLI access skill for agent containers | New cloud infrastructure integration |
| [#2318](https://github.com/qwibitai/nanoclaw/pull/2318) | ira-at-work | `/add-mnemon` persistent semantic memory skill | Agent knowledge graph survives restarts/compaction |

**Setup/UX improvements:** [#2324](https://github.com/qwibitai/nanoclaw/pull/2324) (skip auth option), [#2316](https://github.com/qwibitai/nanoclaw/pull/2316) (back navigation in channel picker), [#2320](https://github.com/qwibitai/nanoclaw/pull/2320) (6 skill docs updated)

---

## 4. Community Hot Topics

### Most Active Discussion Threads

| Item | Comments | Analysis |
|:---|:---|:---|
| [#869](https://github.com/qwibitai/nanoclaw/issues/869) Per-group credential management | **3 comments** | **Long-running architectural request** (opened 2026-03-09). Underlying need: multi-tenancy isolation for API quotas and authentication identities. Currently all groups share one Claude credential set via `.env`. High priority but complex — touches credential vault, group provisioning, and likely billing. |
| [#2343](https://github.com/qwibitai/nanoclaw/issues/2343) OAuth-sync alert delivery failure | 1 comment | Operational incident post-mortem. Alert policy failed during 45-minute credentials outage. Indicates observability gaps in credential refresh pipeline. |
| [#2341](https://github.com/qwibitai/nanoclaw/issues/2341) /restart and /build command security | 1 comment | Security escalation — any main-group Telegram user could execute host-level `launchctl` commands. Rapidly closed with fix. |

**Emerging pattern:** Three separate issues/PRs (#2340, #2341, #2343) around Telegram bot command security and OAuth reliability suggest the Telegram integration is undergoing **production hardening** under real attack/operational pressure.

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| **CRITICAL** | [#2332](https://github.com/qwibitai/nanoclaw/issues/2332) A2A reply misrouting | **OPEN** | Partial: [#2329](https://github.com/qwibitai/nanoclaw/pull/2329), [#2267](https://github.com/qwibitai/nanoclaw/pull/2267) | Deep audit found multiple bugs in `findSessionByAgentGroup`; wrong session selected via `ORDER BY created_at DESC LIMIT 1`. Causes split-brain conversations. |
| **CRITICAL** | [#2331](https://github.com/qwibitai/nanoclaw/issues/2331) Same A2A routing bug (duplicate?) | **OPEN** | See above | Appears to be overlapping report of #2332; may need deduplication. |
| **HIGH** | [#2336](https://github.com/qwibitai/nanoclaw/pull/2336) / [#2335](https://github.com/qwibitai/nanoclaw/pull/2335) pnpm v11 breaks container builds | **CLOSED** | Self-contained | `claude` binary was 500-byte stub; all new agents failed on first message. |
| **HIGH** | [#2343](https://github.com/qwibitai/nanoclaw/issues/2343) OAuth-sync alerts not firing | **CLOSED** | [#2343](https://github.com/qwibitai/nanoclaw/issues/2343) | Credential file unreadable for 45 min; `sendSystemAlert` never triggered despite 9 consecutive failures. |
| **HIGH** | [#2341](https://github.com/qwibitai/nanoclaw/issues/2341) / [#2340](https://github.com/qwibitai/nanoclaw/issues/2340) /restart and /build unauthenticated | **CLOSED/OPEN** | Fix merged (duplicate issue #2340 still open) | Host-level process restart exposed to any Telegram main-group user. |
| **MEDIUM** | [#2338](https://github.com/qwibitai/nanoclaw/pull/2338) Telegram Markdown mangling URLs with `_` | **OPEN** | Pending review | URLs with underscores silently corrupted by sanitizer stripping `*` and `_`. |
| **MEDIUM** | [#2330](https://github.com/qwibitai/nanoclaw/pull/2330) Axios MCP servers break through OneCLI proxy | **OPEN** | Pending review | `CONNECT-only` proxy rejects absolute-form HTTP requests from axios v1.x. |

**Stability assessment:** A2A routing is the **most fragile subsystem** — 4+ PRs/issues in 24h indicate fundamental architectural tension with multi-session, multi-channel agent groups. The pnpm/container build failure was a **near-total outage** for new deployments.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **Per-group credential management** | [#869](https://github.com/qwibitai/nanoclaw/issues/869) | Medium-High | 2+ months old, high priority, blocks true multi-tenancy. May depend on OneCLI vault integration. |
| **Web UI file attachments** | [#2334](https://github.com/qwibitai/nanoclaw/issues/2334) | Medium | New feature request with detailed scope; aligns with file-processing agent workflows. |
| **Claude Code skills for non-Claude providers** | [#2337](https://github.com/qwibitai/nanoclaw/pull/2337) | **High** | PR already open; provider abstraction work nearly complete. |
| **Persistent semantic memory (/add-mnemon)** | [#2318](https://github.com/qwibitai/nanoclaw/pull/2318) | **Shipped** | Merged; addresses core agent state survival. |
| **AWS CLI agent skill** | [#2319](https://github.com/qwibitai/nanoclaw/pull/2319) | **Shipped** | Merged; cloud infrastructure pattern likely to extend to GCP/Azure. |

**Architectural direction:** Strong push toward **provider-agnostic skills** (#2337), **dynamic skill loading** (#2321), and **state survival across restarts/compaction** (#2318, #2327). NanoClaw is evolving from Claude-centric to multi-provider platform.

---

## 7. User Feedback Summary

### Pain Points
- **Setup friction for non-technical users:** Auth picker had no escape hatch → addressed by [#2324](https://github.com/qwibitai/nanoclaw/pull/2324)
- **Channel picker dead-ends:** No back navigation → addressed by [#2316](https://github.com/qwibitai/nanoclaw/pull/2316)
- **Silent message corruption:** URLs with underscores mangled in Telegram → [#2338](https://github.com/qwibitai/nanoclaw/pull/2338) pending
- **Agent "forgetfulness" after long conversations:** Compaction drops routing discipline → [#2327](https://github.com/qwibitai/nanoclaw/pull/2327) fixed

### Use Cases Emerging
- **Multi-channel personal agents:** Single agent wired to Signal + email + web UI (stressing A2A routing)
- **Team/shared agent hosting:** Per-group credentials becoming essential (#869)
- **Cloud DevOps automation:** AWS skill, OneCLI gateway suggest infrastructure-as-agent pattern

### Satisfaction Signals
- Rapid fix turnaround for security (#2341) and build-breaking (#2336) issues
- Rich skill ecosystem expansion (6 skills updated, 3 new skills merged)

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|:---|:---|:---|:---|
| [#869](https://github.com/qwibitai/nanoclaw/issues/869) Per-group credential management | **60 days** | **High** | Architectural decision on credential vault integration; may need breaking changes to `.env` loading |
| [#2332](https://github.com/qwibitai/nanoclaw/issues/2332) / [#2331](https://github.com/qwibitai/nanoclaw/issues/2331) A2A routing audit | 1 day | **Critical** | Consolidation of duplicate issues; verification that #2329 fully addresses root causes |
| [#2340](https://github.com/qwibitai/nanoclaw/issues/2340) /restart security (duplicate of closed #2341) | 1 day | Medium | Issue hygiene — should be closed as duplicate |
| [#2334](https://github.com/qwibitai/nanoclaw/issues/2334) Web UI file attachments | 1 day | Low | Product prioritization; implementation appears straightforward |

**Maintainer attention needed:** 
1. **Deduplicate** #2331/#2332 and #2340/#2341 
2. **Verify completeness** of A2A routing fixes — #2332 claims "multiple bugs" but PRs address subsets
3. **Decision on #869 timeline** — oldest high-priority enhancement, blocking commercial multi-tenant use cases

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-05-08

## 1. Today's Overview

NullClaw shows **healthy sustained activity** with 13 items updated in the past 24 hours (6 issues, 7 PRs), indicating an engaged community around this Zig-based AI agent framework. The project is actively evolving across multiple fronts: platform compatibility (Zig v0.16), protocol standards (ACP/Codex), enterprise integrations (Lark), and infrastructure tooling (cron, data governance). Notably, two PRs were merged/closed today, suggesting maintainers are responsive. However, the absence of any releases and a critical open bug around low-resource device compatibility signal that stability and accessibility remain work in progress. The influx of hackathon-related contributions (#885) and same-day feature requests (#894, #895) suggests growing external interest but also potential maintainer bandwidth strain.

---

## 2. Releases

**No new releases** — NullClaw has not published a release as of this digest.

---

## 3. Project Progress

### Merged/Closed Today

| PR | Description | Impact |
|:---|:---|:---|
| [#790](https://github.com/nullclaw/nullclaw/pull/790) | **fix(providers): Responses API tool schema and null error handling** — Fixes tool schema format mismatch for OpenAI Responses API (`convertToolsOpenAI` produced Chat Completions-style nesting) and adds null-safe error handling for `tool_choice` | **Stability**: Critical fix for OpenAI-compatible provider path; prevents runtime crashes when using `api_mode=responses` |
| [#893](https://github.com/nullclaw/nullclaw/pull/893) | **feat(toolkit): integrate zig-qm-toolkit** — Closed (not merged); proposed 4-tier verification system with hooks/agents/skills via chezmoi-managed templates | **Experimental**: Closed without merge; suggests maintainer scrutiny of external toolkit integration approach |

### Active Open PRs Advancing

| PR | Description | Stage |
|:---|:---|:---|
| [#896](https://github.com/nullclaw/nullclaw/pull/896) | **Native ACP stdio adapter** (`nullclaw acp`) — Agent Client Protocol JSON-RPC implementation with session management, prompt translation | **Protocol expansion**: Positions NullClaw for MCP/ACP interoperability; submitted today |
| [#897](https://github.com/nullclaw/nullclaw/pull/897) | **Zig setup documentation for Debian** | **Docs**: Addresses recurring onboarding friction |
| [#887](https://github.com/nullclaw/nullclaw/pull/887) | **Zig v0.16 build fixes** (Windows/Linux) | **Compatibility**: Critical for Zig toolchain adoption |
| [#885](https://github.com/nullclaw/nullclaw/pull/885) | **Data Governance Layer** (hackathon entry) — RBAC, PII detection, audit logging, consent management | **Enterprise readiness**: Substantial scope; draft status |
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | **Cron subagent engine** with DB-backed scheduler, JSON output, security hardening | **Infrastructure**: Long-running PR (since April 7); actively maintained |

---

## 4. Community Hot Topics

### Most Active Discussions

| Item | Activity | Analysis |
|:---|:---|:---|
| [#167](https://github.com/nullclaw/nullclaw/issues/167) — *curl/wget hard-coding* | **10 comments**, closed | **Resolution pattern**: User confusion over shell command restrictions; closed with explanation. Underlying need: **clearer documentation of security sandboxing** — users expect standard Unix utilities to work verbatim |
| [#871](https://github.com/nullclaw/nullclaw/issues/871) — *web_search impractical on low-resource devices* | **7 comments**, open, `Critical` label | **Core tension**: NullClaw's "run on weak, cheap devices" value proposition vs. dependency on external APIs (Brave Search) or heavy scraping. Community seeking **native DuckDuckGo support** without API keys |

### Emerging Same-Day Requests

| Item | Signal |
|:---|:---|
| [#895](https://github.com/nullclaw/nullclaw/issues/895) — *Disable Lark typing placeholder* | UX polish for enterprise chat deployments |
| [#894](https://github.com/nullclaw/nullclaw/issues/894) — *Respond to all group messages in Lark* | **Proactive bot behavior** vs. reactive @mention model — indicates users want NullClaw as autonomous participant, not just assistant |

**Underlying need**: Lark channel is gaining production use; users need **fine-grained behavioral control** for different deployment contexts (internal team bot vs. public-facing assistant).

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix Available? |
|:---|:---|:---|:---|
| **🔴 Critical** | [#871](https://github.com/nullclaw/nullclaw/issues/871) — `web_search` broken on low-resource devices due to DuckDuckGo dependency gap | **Open** | ❌ No PR yet |
| 🟡 Medium | [#790](https://github.com/nullclaw/nullclaw/pull/790) (fixed) — Responses API tool schema crash | **Closed** | ✅ Merged today |
| 🟡 Medium | [#887](https://github.com/nullclaw/nullclaw/pull/887) — Zig v0.16 build breakage (win/linux) | **Open** | 🔄 PR pending review |

**Assessment**: The critical web_search bug strikes at NullClaw's core differentiation (lightweight deployment). Without resolution, users on Raspberry Pi, old servers, or constrained VPS environments cannot use web search — a major feature gap. No contributor has claimed this yet.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **Native DuckDuckGo web_search** | [#871](https://github.com/nullclaw/nullclaw/issues/871) | **High** | Blocks core use case; community-identified as "critical" |
| **ACP/MCP protocol adapter** | [#896](https://github.com/nullclaw/nullclaw/pull/896) | **High** | PR already submitted; aligns with industry standardization trend |
| **Lark config: typing placeholder control** | [#895](https://github.com/nullclaw/nullclaw/issues/895) | **Medium** | Small scope, clear use case, enterprise demand |
| **Lark config: group message auto-response** | [#894](https://github.com/nullclaw/nullclaw/issues/894) | **Medium** | Paired with #895; likely batch-implemented |
| **Data Governance Layer (RBAC, PII, audit)** | [#885](https://github.com/nullclaw/nullclaw/pull/885) | **Low-Medium** | Large scope; hackathon origin may need refinement for merge |
| **Cron subagent + run history** | [#783](https://github.com/nullclaw/nullclaw/pull/783) | **Medium** | Mature PR, 1+ month old; infrastructure investment |

**Prediction**: Next release likely focuses on **protocol interoperability** (ACP) + **platform stability** (Zig v0.16, DDoSGo search) with enterprise chat polish (Lark options).

---

## 7. User Feedback Summary

### Pain Points

| Issue | Frequency | User Impact |
|:---|:---|:---|
| **Onboarding friction: Zig installation** | Recurring ([#820](https://github.com/nullclaw/nullclaw/issues/820), [#897](https://github.com/nullclaw/nullclaw/pull/897)) | New contributors blocked before first build |
| **Misleading benchmark claims** | [#473](https://github.com/nullclaw/nullclaw/issues/473) | Erodes trust; binary/memory no longer match README |
| **Shell command restrictions opaque** | [#167](https://github.com/nullclaw/nullclaw/issues/167) | Users surprised `curl`/`wget` fail silently or with errors |

### Positive Signals

- **Enterprise adoption**: Lark-specific feature requests (#894, #895) indicate production deployments beyond hobbyist use
- **Hackathon participation**: [#885](https://github.com/nullclaw/nullclaw/pull/885) shows external teams building serious infrastructure on NullClaw
- **Cross-platform commitment**: Active Windows/Linux build fixes (#887)

### Satisfaction Gap

Users choosing NullClaw for its **"1MB binary, 1MB RAM"** promise ([per #473](https://github.com/nullclaw/nullclaw/issues/473)) are finding reality diverged. README maintenance is **technical debt with marketing consequences**.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#473](https://github.com/nullclaw/nullclaw/issues/473) README benchmark accuracy | **~2 months** (Mar 13) | **Trust erosion** | Maintainer decision: update numbers or remove claims |
| [#783](https://github.com/nullclaw/nullclaw/pull/783) Cron subagent | **~1 month** (Apr 7) | **Bitrot** | Review/merge or provide blocking feedback |
| [#820](https://github.com/nullclaw/nullclaw/issues/820) → [#897](https://github.com/nullclaw/nullclaw/pull/897) Zig on Debian | **~3 weeks** | **Onboarding barrier** | PR ready; quick win for docs |
| [#871](https://github.com/nullclaw/nullclaw/issues/871) Critical: low-resource web_search | **~2 weeks** | **Core value prop failure** | Needs assignee; highest priority unclaimed issue |

**Maintainer Attention Required**: The confluence of #473 (credibility), #871 (functionality), and #785/#897 (onboarding) suggests a **docs and stability sprint** would yield disproportionate community benefit before next feature release.

---

*Digest generated from GitHub activity 2026-05-07 to 2026-05-08. All links: https://github.com/nullclaw/nullclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-08

## 1. Today's Overview

IronClaw saw **exceptionally high activity** with 50 PRs and 23 issues updated in 24 hours, reflecting an intense development sprint around the **"Reborn" architectural overhaul** and v0.28.0 release. The project is in a **critical transition phase**: the Reborn integration substrate landed on `main` in v0.28.0, while the team simultaneously battles Telegram/Gmail OAuth bugs in production and builds out durable database-backed services for the new architecture. Activity is heavily concentrated among core maintainers (serrrfirat, ilblackdragon), with automated CI contributing significantly. The high volume of XL-sized PRs suggests major foundational work rather than incremental polish.

---

## 2. Releases

### [ironclaw-v0.28.0](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v0.28.0) — Released 2026-05-07

| Aspect | Detail |
|--------|--------|
| **Type** | Minor version (0.27.0 → 0.28.0) |
| **Breaking** | Likely yes — introduces new host foundation crates and WASM runtime boundaries |
| **Key Addition** | **Reborn-integration substrate on `main`** — host foundation crates, capability host, runtime dispatcher, process lifecycle, filesystem, secrets, network, and extension manifest registry boundaries |
| **Key Addition** | WIT-compatible WASM tool runtime |
| **Migration Notes** | Not explicitly documented; downstream consumers pinned to crates.io 0.24.0 remain blocked ([Issue #3259](https://github.com/nearai/ironclaw/issues/3259)) |

**Critical Gap**: crates.io remains at 0.24.0; v0.25.0–0.28.0 are **not published**, blocking downstream due to wasmtime 28.x CVEs.

---

## 3. Project Progress

### Merged/Closed PRs Today (30 total; highlighted subset)

| PR | Author | What Landed |
|----|--------|-------------|
| [#3376](https://github.com/nearai/ironclaw/pull/3376) | ironclaw-ci[bot] | **Release automation**: 0.27.0 → 0.28.0 |
| [#3351](https://github.com/nearai/ironclaw/pull/3351) | serrrfirat | **ProductAdapter contract crate** — core DTOs, auth evidence, egress traits (PR 1/7) |
| [#3352](https://github.com/nearai/ironclaw/pull/3352) | serrrfirat | **ProductAdapter auth/egress primitives** — HMAC verifiers, webhook auth, host egress policy (PR 2/7) |
| [#3377](https://github.com/nearai/ironclaw/pull/3377) | serrrfirat | **AgentLoopHost facade contract** — driver-facing ports for #3016 |
| [#3382](https://github.com/nearai/ironclaw/pull/3382) | serrrfirat | **Hardened agent loop host facade** — opaque refs, bounded cursors, narrowed prelude |
| [#3379](https://github.com/nearai/ironclaw/pull/3379) | serrrfirat | **Durable session thread stores** — libSQL/PostgreSQL `SessionThreadService` |
| [#3349](https://github.com/nearai/ironclaw/pull/3349) | serrrfirat | **Durable run-state DB stores** — atomic approval persistence + run blocking |
| [#3368](https://github.com/nearai/ironclaw/pull/3368) | serrrfirat | **Database capability lease stores** — libSQL/Postgres with validated JSON payloads |
| [#3369](https://github.com/nearai/ironclaw/pull/3369) | serrrfirat | **Durable conversation state backends** — normalized pairings, participants, event routes |
| [#3378](https://github.com/nearai/ironclaw/pull/3378) | serrrfirat | **Wire run-state store selection** — `HostRuntimeServices` helpers for PG/libSQL |
| [#3316](https://github.com/nearai/ironclaw/pull/3316) | nickpismenkov | **ProductAdapter + Telegram v2 tracer-bullet** — end-to-end fake services with recorded payloads |
| [#3364](https://github.com/nearai/ironclaw/pull/3364) | ilblackdragon | **Bug bash fixes**: restart modal recovery, approval clarity, HTTP defaults |
| [#3384](https://github.com/nearai/ironclaw/pull/3384) | nickpismenkov | **Canary fix**: seed `github_token_scopes` in auth-live-seeded |

**Pattern**: ~60% of merged PRs are **Reborn infrastructure** (durable stores, contracts, facades); ~30% are **production bug fixes**; remainder is automation.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Comments | Topic | Underlying Need |
|------|----------|-------|---------------|
| [#3067](https://github.com/nearai/ironclaw/issues/3067) | **28** | Reborn vertical-slice integration tests | **Confidence in architecture** — stakeholders want proof that Reborn works through public APIs, not just crate-local tests |
| [#3022](https://github.com/nearai/ironclaw/issues/3022) | 9 | Event substrate integration tests | **Cutover safety** — blocker for user-visible Reborn migration; needs cross-service, caller-level validation |
| [#3016](https://github.com/nearai/ironclaw/issues/3016) | 7 | AgentLoopHost facade | **Clean architecture boundary** — prevent v1 monolith from re-emerging in Reborn |

### Analysis

The **#3067 test suite issue** is the project's **critical path bottleneck**. With 28 comments, it reflects organizational pressure to validate Reborn before broader deployment. The comment density on test/planning issues vs. implementation PRs suggests the project is in a **"prove it works" phase** rather than "ship features fast."

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Description |
|----------|-------|--------|--------|-------------|
| **P1 — Critical** | [#3319](https://github.com/nearai/ironclaw/issues/3319) | Open | [#3381](https://github.com/nearai/ironclaw/pull/3381) | Gmail OAuth 400 from Telegram — blocks conversation flow |
| **P1 — Critical** | [#3320](https://github.com/nearai/ironclaw/issues/3320) | Open | [#3381](https://github.com/nearai/ironclaw/pull/3381) | Telegram conversation unrecoverable after Gmail auth failure |
| **P1 — Critical** | [#3317](https://github.com/nearai/ironclaw/issues/3317) | Open | [#3381](https://github.com/nearai/ironclaw/pull/3381) | Telegram setup fails locally |
| **P1 — Critical** | [#3229](https://github.com/nearai/ironclaw/issues/3229) | **Closed** | Merged | LLM provider fallback **persisted to DB**, permanently destroying user config |
| **P2 — High** | [#3225](https://github.com/nearai/ironclaw/issues/3225) | **Closed** | Merged | Gemini API-key backend fails tool-calling (missing `thought_signature`) |
| **P2 — High** | [#3201](https://github.com/nearai/ironclaw/issues/3201) | **Closed** | Merged | DeepSeek tool use broken |
| **P2 — High** | [#3082](https://github.com/nearai/ironclaw/issues/3082) | **Closed** | [#3364](https://github.com/nearai/ironclaw/pull/3364) | App hangs on "Restarting IronClaw" after enabling Auto Approvals |
| **P2 — High** | [#3274](https://github.com/nearai/ironclaw/issues/3274) | **Closed** | Merged | Data missing after 0.26→0.27 upgrade; Projects tab shows failed threads |

**Pattern**: Three **P1 Telegram/Gmail OAuth bugs** form a **single user journey failure** (setup → auth → recovery), all addressed by [#3381](https://github.com/nearai/ironclaw/pull/3381). Root cause: per-channel auth tested in isolation; cross-channel flows untested.

**Stability Signal**: Nightly E2E **cancelled** ([#3323](https://github.com/nearai/ironclaw/issues/3323)) — v2-engine job failed, indicating potential regression in test infrastructure or Reborn paths.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Signal Strength | Likelihood in Next Version |
|---------|----------|-----------------|---------------------------|
| **LLM reasoning content display** | [#3327](https://github.com/nearai/ironclaw/issues/3327) | Strong — detailed spec, UI + DB + debug panel | **High** — PR #3326 already plugs into rig-core |
| **Multi-workspace Slack support** | [#3334](https://github.com/nearai/ironclaw/issues/3334) | Medium — architectural proposal, no implementation | Medium — requires channel-relay coordination |
| **crates.io publishing** | [#3259](https://github.com/nearai/ironclaw/issues/3259) | Strong — blocking downstream, CVE-related | **High** — likely 0.28.1 or immediate follow-up |
| **Reborn production wiring** | [#3333](https://github.com/nearai/ironclaw/issues/3333) | Strong — audit found fake/no-op seams | **Critical path** — blocks Reborn cutover |
| **Mission/job/routine migration** | [#3290](https://github.com/nearai/ironclaw/issues/3290) | Medium — parented under #3031 | Medium — depends on #3016, #3107 |
| **Memory/workspace migration** | [#3287](https://github.com/nearai/ironclaw/issues/3287) | Medium — explicitly avoids v1 monolith | Medium |
| **Secrets/OAuth migration** | [#3289](https://github.com/nearai/ironclaw/issues/3289) | Medium — preserves current behavior | Medium |
| **Extension/skill/MCP migration** | [#3288](https://github.com/nearai/ironclaw/issues/3288) | Medium — large surface area | Lower — complex dependencies |

**Prediction**: Next release (0.28.1 or 0.29.0) will likely include: reasoning content surfacing, crates.io publishing fix, and incremental Reborn production wiring. Multi-workspace Slack is a dark horse if channel-relay prioritizes it.

---

## 7. User Feedback Summary

### Real Pain Points (from bug reports)

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **Telegram + OAuth = dead end** | [#3317](https://github.com/nearai/ironclaw/issues/3317), [#3319](https://github.com/nearai/ironclaw/issues/3319), [#3320](https://github.com/nearai/ironclaw/issues/3320) | Critical — complete flow failure |
| **Upgrades break data visibility** | [#3274](https://github.com/nearai/ironclaw/issues/3274) | High — trust erosion |
| **LLM provider configs destroyed silently** | [#3229](https://github.com/nearai/ironclaw/issues/3229) | Critical — data loss |
| **Settings changes hang forever** | [#3082](https://github.com/nearai/ironclaw/issues/3082) | High — UX broken |
| **Cannot use latest versions from crates.io** | [#3259](https://github.com/nearai/ironclaw/issues/3259) | High — ecosystem friction |

### Satisfaction Signals
- **Positive**: Rapid bug-fix turnaround (P1 bugs same-day PR #3381); active maintainer presence
- **Negative**: Quality gaps in cross-channel flows; upgrade reliability; release distribution (crates.io lag)

### Use Case Tensions
- **Power users** (self-hosting, local dev): Blocked by crates.io, need stable APIs
- **Enterprise/NEAR Foundation**: Need multi-tenant isolation ([#3374](https://github.com/nearai/ironclaw/pull/3374)), reliable Telegram/Slack bridges
- **Reborn early adopters**: Need proof architecture works end-to-end ([#3067](https://github.com/nearai/ironclaw/issues/3067))

---

## 8. Backlog Watch

| Issue | Age | Risk | Why It Needs Attention |
|-------|-----|------|------------------------|
| [#3259](https://github.com/nearai/ironclaw/issues/3259) | 3 days | **High** | Blocking downstream; CVE exposure; trivial fix (publish to crates.io) but organizational/process blocker |
| [#2902](https://github.com/nearai/ironclaw/issues/2902) | 15 days | Medium | NEAR Foundation instance Telegram broken — **customer-visible**, no recent activity despite P1-like impact |
| [#3323](https://github.com/nearai/ironclaw/issues/3323) | 1 day | **High** | Nightly E2E cancelled — if persistent, indicates test rot or Reborn instability |
| [#3333](https://github.com/nearai/ironclaw/issues/3333) | 1 day | **High** | Audit found fake/no-op seams in Reborn — **cutover blocker**, needs immediate triage into sub-issues |

### Maintainer Attention Needed
- **serrrfirat** is bottlenecked across ~8 Reborn issues — delegation or sequencing needed
- **ilblackdragon** handling production fires — risk of context-switching overhead
- **crates.io publishing** appears to be a **process/permissions issue** rather than technical — needs org-level resolution

---

## Project Health Assessment

| Metric | Score | Note |
|--------|-------|------|
| Velocity | ⭐⭐⭐⭐⭐ | 50 PRs/day is exceptional |
| Stability | ⭐⭐⭐☆☆ | P1 bugs in production, E2E cancelled, upgrade fragility |
| Architecture coherence | ⭐⭐⭐⭐☆ | Reborn direction clear, but "fake seams" risk |
| Community responsiveness | ⭐⭐⭐⭐⭐ | Same-day fixes for P1 bugs |
| Release hygiene | ⭐⭐⭐☆☆ | crates.io lag, migration notes sparse |
| Test confidence | ⭐⭐⭐☆☆ | Heavy investment in integration tests (#3067) but not yet proven |

**Overall**: IronClaw is a **high-velocity, high-risk project** in architectural transition. The team is executing well on Reborn foundations but carrying production debt in cross-channel reliability and release distribution. Success in the next 2–4 weeks depends on: (1) landing #3067 test suite to validate Reborn, (2) resolving crates.io publishing, (3) eliminating fake seams (#3333), and (4) stabilizing Telegram/OAuth flows.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-08

## 1. Today's Overview

LobsterAI shows **exceptionally high development velocity** with 45 PRs updated in 24 hours (36 merged/closed, 9 open) and a fresh release cut for 2026.5.7. The project is in active release-cycle mode, with the `release/2026.05.08` branch receiving concentrated integration work including pagination, artifact handling, and startup reliability improvements. Issue volume remains low (2 active), suggesting either strong triage discipline or user growth lagging behind development pace. The merge rate of 80% indicates healthy code review throughput.

---

## 2. Releases

### [LobsterAI 2026.5.7](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.5.7) (2026-05-07)

| Change | Author | PR |
|--------|--------|-----|
| **fix(skills)**: Improve Windows skill delete reliability and import feedback | @liuzhq1986 | [#1881](https://github.com/netease-youdao/LobsterAI/pull/1881) |
| **feat(skill)**: Upgrade YoudaoNote skill to 1.0.8 | @liuzhq1986 | [#1882](https://github.com/netease-youdao/LobsterAI/pull/1882) |
| **refactor**: *(details truncated in source data)* | — | — |

**Assessment**: Patch release focused on Windows-specific skill management stability and external service integration versioning. No breaking changes indicated. Users on Windows experiencing skill installation/deletion issues should upgrade.

---

## 3. Project Progress

### Major Merged PRs (2026-05-07)

| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#1910](https://github.com/netease-youdao/LobsterAI/pull/1910) | renderer, docs, main | **Startup resilience**: Reduces false initialization failures, adds in-app relaunch from error screen | Eliminates manual restart for cold-start timing issues |
| [#1909](https://github.com/netease-youdao/LobsterAI/pull/1909) | renderer, cowork, artifacts | **Windows file preview fixes**: Resolves duplicate cards, `D:\D:\path` ENOENT errors, inline link handling | Critical Windows UX fix |
| [#1908](https://github.com/netease-youdao/LobsterAI/pull/1908) | main | **Streaming text merge fix**: Removes buggy `computeSuffixPrefixOverlap` causing character swallowing (e.g., `.pptx` → `.ptx`) | Fixes token-boundary rendering artifacts |
| [#1907](https://github.com/netease-youdao/LobsterAI/pull/1907) | renderer, main, cowork | **Session/message pagination** (from [#924](https://github.com/netease-youdao/LobsterAI/pull/924)) | Memory/rendering performance for long conversations |
| [#1904](https://github.com/netease-youdao/LobsterAI/pull/1904) | renderer, docs, main, openclaw, cowork, im | **Per-Agent working directories** | Multi-agent isolation, security improvement |
| [#1905](https://github.com/netease-youdao/LobsterAI/pull/1905) | renderer, cowork | **Model preference persistence**: Last selected model survives restart | UX polish |
| [#1900](https://github.com/netease-youdao/LobsterAI/pull/1900) | docs, main | **Markdown table persistence hardening**: Prevents `chat.delta` overwriting agent segments, guards final-text picker | Fixes intermittent table corruption in concurrent sessions |

### Earlier PRs Updated Today (Integration/Triage)

| PR | Area | Summary |
|----|------|---------|
| [#1498](https://github.com/netease-youdao/LobsterAI/pull/1498) | renderer, main, openclaw, cowork, im | Mass ESLint error cleanup (165 errors → 0) |
| [#1818](https://github.com/netease-youdao/LobsterAI/pull/1818) | main, openclaw, cowork | Proxy compatibility for OpenAI official models |
| [#1819](https://github.com/netease-youdao/LobsterAI/pull/1819) | — | DeepSeek v4 reasoning_content enforcement with tool calls |
| [#1823](https://github.com/netease-youdao/LobsterAI/pull/1823) | renderer, main, openclaw, skills, cowork | Schema/payload fixes |
| [#1830](https://github.com/netease-youdao/LobsterAI/pull/1830) | renderer, docs, main, openclaw | ChatGPT OAuth login support |
| [#1847](https://github.com/netease-youdao/LobsterAI/pull/1847) | — | Custom provider DeepSeek V4 compatibility |
| [#1862](https://github.com/netease-youdao/LobsterAI/pull/1862) | renderer | Xiaomi mimo model coding plan support |

---

## 4. Community Hot Topics

> **Note**: No PRs/Issues show defined comment counts in source data (all display `undefined`). Analysis based on recency, cross-references, and symptom severity.

### Active Issues

| Issue | Age | Problem | Underlying Need |
|-------|-----|---------|---------------|
| [#1878](https://github.com/netease-youdao/LobsterAI/issues/1878) — IM机器人 微信接口 配置扫码后无法输入验证码 | 8 days | WeChat bot QR login: 6-digit verification code has no input UI after scan | **Critical onboarding blocker** for WeChat integration; suggests missing 2FA/verification flow in IM connector |
| [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) — 会员登录频繁失败 | 1 day | Paid member login failures blocking access to NetEase paid models | **Revenue-critical**: Authentication reliability for monetized tier; likely OAuth/token refresh or rate-limiting issue |

### Cross-Referenced PRs

| PR | Connection |
|----|-----------|
| [#1830](https://github.com/netease-youdao/LobsterAI/pull/1830) (ChatGPT OAuth) | May share auth infrastructure with #1903 fix |
| [#1818](https://github.com/netease-youdao/LobsterAI/pull/1818) (Proxy fix) | Could relate to #1903 if proxy interferes with auth |

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| 🔴 **Critical** | [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) Member login failures — paid users locked out | **OPEN**, no fix PR identified | None yet |
| 🟡 **High** | [#1878](https://github.com/netease-youdao/LobsterAI/issues/1878) WeChat QR verification UI missing | **OPEN** 8 days | None yet |
| 🟡 **High** | [#1908](https://github.com/netease-youdao/LobsterAI/pull/1908) Streaming text character swallowing (`.pptx`→`.ptx`) | **FIXED** in release | [#1908](https://github.com/netease-youdao/LobsterAI/pull/1908) |
| 🟡 **High** | [#1909](https://github.com/netease-youdao/LobsterAI/pull/1909) Windows file preview path corruption (`D:\D:\`) | **FIXED** in release | [#1909](https://github.com/netease-youdao/LobsterAI/pull/1909) |
| 🟢 **Medium** | [#1900](https://github.com/netease-youdao/LobsterAI/pull/1900) Markdown table truncation in concurrent sessions | **FIXED** | [#1900](https://github.com/netease-youdao/LobsterAI/pull/1900) |
| 🟢 **Medium** | [#1891](https://github.com/netease-youdao/LobsterAI/pull/1891) Windows EPERM on skill directory deletion | **FIXED** in 2026.5.7 | [#1891](https://github.com/netease-youdao/LobsterAI/pull/1891), [#1881](https://github.com/netease-youdao/LobsterAI/pull/1881) |
| 🟢 **Medium** | [#1888](https://github.com/netease-youdao/LobsterAI/pull/1888) ClawHub `/.clawhub` mkdir ENOENT in packaged builds | **FIXED** | [#1888](https://github.com/netease-youdao/LobsterAI/pull/1888) |
| 🟢 **Medium** | [#1910](https://github.com/netease-youdao/LobsterAI/pull/1910) False startup failures on slow systems | **FIXED** | [#1910](https://github.com/netease-youdao/LobsterAI/pull/1910) |

**Pattern**: Windows-specific path handling and packaged-app filesystem permissions are recurring themes. The project appears to be stabilizing cross-platform deployment.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likely Priority |
|--------|--------|---------------|
| **Pagination for sessions/messages** | [#924](https://github.com/netease-youdao/LobsterAI/pull/924) → [#1907](https://github.com/netease-youdao/LobsterAI/pull/1907) | ✅ **Shipped** — performance at scale |
| **Per-Agent working directories** | [#1904](https://github.com/netease-youdao/LobsterAI/pull/1904) | ✅ **Shipped** — security/isolation |
| **OAuth provider expansion** | [#1830](https://github.com/netease-youdao/LobsterAI/pull/1830) ChatGPT OAuth | 🔄 **In progress** — likely more providers |
| **Model ecosystem expansion** | [#1862](https://github.com/netease-youdao/LobsterAI/pull/1862) Xiaomi mimo; DeepSeek v4 fixes | 🔄 **Active** — Chinese model ecosystem focus |
| **IM platform robustness** | [#1878](https://github.com/netease-youdao/LobsterAI/issues/1878) WeChat flow gaps | 🔮 **Next** — complete 2FA/verification UI |
| **Auth reliability** | [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) | 🔮 **Urgent** — blocking monetization |

**Prediction**: Next release will likely include WeChat verification flow completion and member auth system hardening.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **"Cannot use paid models I paid for"** | [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) | 🔴 Critical — direct revenue impact |
| **WeChat bot setup broken** | [#1878](https://github.com/netease-youdao/LobsterAI/issues/1878) | 🟡 High — enterprise/ automation use case blocked |
| **Windows-specific fragility** | [#1881](https://github.com/netease-youdao/LobsterAI/pull/1881), [#1888](https://github.com/netease-youdao/LobsterAI/pull/1888), [#1891](https://github.com/netease-youdao/LobsterAI/pull/1891), [#1909](https://github.com/netease-youdao/LobsterAI/pull/1909) | 🟡 High — platform parity gap |
| **Startup flakiness on slower systems** | [#1910](https://github.com/netease-youdao/LobsterAI/pull/1910) | 🟢 Medium — addressed |
| **Long conversation performance** | [#924](https://github.com/netease-youdao/LobsterAI/pull/924) / [#1907](https://github.com/netease-youdao/LobsterAI/pull/1907) | 🟢 Medium — addressed |

**Satisfaction drivers**: Rapid iteration, broad model support (OpenAI, DeepSeek, Xiaomi, custom providers), active OAuth integration.

**Dissatisfaction drivers**: Authentication as single point of failure; Windows path handling feels immature for packaged desktop app.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|-------------|
| [#1878](https://github.com/netease-youdao/LobsterAI/issues/1878) WeChat QR verification | 8 days open | **Stalled onboarding** for IM feature | Assign IM area owner; verify if WeChat API changed requirements |
| [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) Member login failures | 1 day open | **Revenue leakage**, user churn | P0 investigation; likely needs auth service team coordination |
| [#924](https://github.com/netease-youdao/LobsterAI/pull/924) Original pagination PR | ~6 weeks to merge | Feature branch divergence | ✅ **Resolved** via [#1907](https://github.com/netease-youdao/LobsterAI/pull/1907) rebase |

**Maintainer attention**: The two open issues both concern **authentication/authorization flows** — one external (WeChat), one internal (membership). Suggests auth layer may need architectural review or dedicated owner.

---

*Digest generated from GitHub activity 2026-05-07 to 2026-05-08. Data source: netease-youdao/LobsterAI public repository.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-08

## 1. Today's Overview

Moltis demonstrated **exceptional velocity** on 2026-05-07 with 10 PRs updated (9 merged/closed, 1 open) and 4 issues resolved, accompanied by two rapid-fire patch releases (`20260507.04` and `20260507.05`). The project shows strong maintainer responsiveness with same-day turnaround on critical bug fixes and feature merges. Voice infrastructure, identity protocols, and sandbox reliability are the dominant themes, suggesting Moltis is maturing from a single-agent server toward an interoperable, multi-modal agent platform. The sole open PR indicates ongoing voice/AI model integration work. Release versioning patterns (timestamp-based, two patches in one day) suggest either hotfix urgency or automated CI/CD granularity.

---

## 2. Releases

| Version | Date | Notes |
|---------|------|-------|
| [20260507.05](https://github.com/moltis-org/moltis/releases/tag/20260507.05) | 2026-05-07 | Second patch of the day; likely incorporates late merges (#980-#984 range) |
| [20260507.04](https://github.com/moltis-org/moltis/releases/tag/20260507.04) | 2026-05-07 | First patch; likely bundles earlier same-day fixes |

**Assessment:** No detailed changelogs provided in source data. The rapid sequential releases suggest either: (a) hotfix deployment for the Docker/browser sandbox issue (#977), or (b) continuous deployment pipeline cutting releases per-merge. Users should verify which commits each release contains before upgrading production deployments.

---

## 3. Project Progress

### Merged/Closed PRs (9 items)

| PR | Author | Summary | Significance |
|----|--------|---------|------------|
| [#981](https://github.com/moltis-org/moltis/pull/981) | penso | **feat(voice): whisper-local STT provider** — Local OpenAI-compatible Whisper server support; changes voice provider defaults from allowlist to "show all" | Privacy-critical feature for self-hosters; reduces cloud dependency |
| [#983](https://github.com/moltis-org/moltis/pull/983) | penso | **fix(agents): preserve tool argument diagnostics** — Fixes #963; preserves malformed/empty argument decode provenance instead of collapsing to `{}` | Reliability fix for tool-calling robustness |
| [#982](https://github.com/moltis-org/moltis/pull/982) | penso | **Add Codex OAuth image generation** — `gpt-image-2` via OpenAI Responses API; new `generate_image` tool returning `screenshot`-compatible media | Closes #956; multimodal capability expansion |
| [#920](https://github.com/moltis-org/moltis/pull/920) | penso | **feat(telephony): Twilio phone call support** — Full `moltis-telephony` crate with call state machine, PCM↔μ-law, `ChannelPlugin` integration | Major new channel modality; enables voice agent use cases |
| [#980](https://github.com/moltis-org/moltis/pull/980) | penso | **fix(browser): resolve sandbox profile host mounts** — Fixes #977; profile bind mounts resolve through host-visible data directory | Docker deployment unblocker |
| [#979](https://github.com/moltis-org/moltis/pull/979) | penso | **feat(nodes): Ed25519 challenge-response node identity (TOFU)** — Replaces token auth with SSH-style TOFU for gateway-node verification | Foundational for decentralized agent federation |
| [#978](https://github.com/moltis-org/moltis/pull/978) | dependabot[bot] | **chore(deps): wasmtime 36.0.7→36.0.8** | Security/stability patch for WebAssembly runtime |
| [#976](https://github.com/moltis-org/moltis/pull/976) | vystartasv | **docs: Agent Identity + Onboarding Protocols guide** | Documentation for #973/#979 cross-server trust |
| [#942](https://github.com/moltis-org/moltis/pull/942) | penso | **feat(sandbox): remote & multi-backend sandbox support** — Vercel, Daytona, Firecracker backends for Docker-in-Docker-restricted environments | Cloud deployment scalability |

### Open PR

| PR | Author | Status | Risk/Watch |
|----|--------|--------|------------|
| [#984](https://github.com/moltis-org/moltis/pull/984) | penso | **OPEN** — OpenAI realtime model guidance in voice settings | Under active development; may require UI/UX validation before merge |

---

## 4. Community Hot Topics

**Note:** All issues/PRs show **0 comments and 0 reactions**, indicating either: (a) highly efficient maintainer-driven development with minimal community discussion, (b) early project stage with small user base, or (c) discussion happening off-platform (Discord, internal chat). No "hot" items by engagement metrics exist.

**Most Significant by Substance (not engagement):**

| Item | Link | Underlying Need |
|------|------|---------------|
| #973 / #979 / #976 — Agent Identity & Onboarding Protocols | [Issue #973](https://github.com/moltis-org/moltis/issues/973), [PR #979](https://github.com/moltis-org/moltis/pull/979), [PR #976](https://github.com/moltis-org/moltis/pull/976) | **Decentralized trust**: Users want Moltis agents to interoperate without central authority—critical for "personal agent server" vision vs. siloed assistant |
| #956 / #982 — Image generation via Codex OAuth | [Issue #956](https://github.com/moltis-org/moltis/issues/956), [PR #982](https://github.com/moltis-org/moltis/pull/982) | **Multimodal agent output**: Text-only agents insufficient; visual generation expected as standard capability |
| #920 — Telephony/Twilio integration | [PR #920](https://github.com/moltis-org/moltis/pull/920) | **Real-world voice interaction**: Phone calls as channel, not just app-based voice |

**Analysis:** The lack of community engagement is notable. Moltis appears **maintainer-driven** (penso authored 7/10 PRs). The project may benefit from encouraging user discussion to validate direction, especially for interoperability standards (#973) that require ecosystem adoption.

---

## 5. Bugs & Stability

| Severity | Issue | Fix PR | Details |
|----------|-------|--------|---------|
| **HIGH** | [#977](https://github.com/moltis-org/moltis/issues/977) — Browser sandbox fails in Docker | [#980](https://github.com/moltis-org/moltis/pull/980) | **Deployment blocker**: Docker containerized deployments (including LXC/Proxmox) completely broken for browser tool. Profile bind mount path resolution failed. Fixed via `host_data_dir` reuse + fallback inspection. |
| **MEDIUM** | [#963](https://github.com/moltis-org/moltis/issues/963) — Tool calls with malformed arguments collapse to missing fields | [#983](https://github.com/moltis-org/moltis/pull/983) | **Runtime reliability**: Intermittent `exec` failures due to schema validation rejecting valid-but-malformed payloads. Fix preserves diagnostic provenance (empty/missing/malformed/repaired). |

**Regression Risk:** The two-patch release sequence (`20260507.04` then `.05`) suggests possible post-merge issues or iterative fixes. Users on Docker should prioritize upgrading to capture #980.

---

## 6. Feature Requests & Roadmap Signals

| Source | Feature | Likelihood in Next Release | Rationale |
|--------|---------|---------------------------|-----------|
| #956 / #982 | Image generation (`gpt-image-2`) | **Shipped** | Already merged; Codex OAuth path established |
| #973 / #979 / #976 | Cross-agent identity/onboarding | **Shipped (MVP)** | TOFU identity merged; protocols documented |
| #920 | Telephony/voice calls | **Shipped** | Full Twilio integration merged |
| #984 (open) | OpenAI Realtime model guidance | **Imminent** | Active PR; voice settings UI completion needed |
| #981 | Local Whisper STT | **Shipped** | Privacy demand addressed |
| #942 | Remote sandbox backends | **Shipped** | Vercel/Daytona/Firecracker support merged |

**Predicted Next Features** (based on gaps):
- **Realtime API integration completion** (#984 merge + potential WebRTC/data channel work)
- **Agent-to-agent protocol implementation** beyond identity (capability negotiation, secure messaging)
- **Additional telephony providers** (pluggable architecture in #920 enables Vonage, etc.)
- **Expanded local AI providers** (pattern established with whisper-local, likely extends to LLM inference)

---

## 7. User Feedback Summary

### Explicit Pain Points (from issues)

| Issue | Pain Point | User Context |
|-------|-----------|--------------|
| #977 | "Browser tool consistently fails" in Docker | Self-hosting on Proxmox/LXC; Docker socket mounted; needs sandbox |
| #963 | Intermittent `exec` failures despite successful prior calls | Tool-calling reliability undermines trust in agent autonomy |
| #956 | No image generation capability | Wants `gpt-image-2` via existing Codex OAuth flow |

### Implicit Signals (from PRs addressing unreported needs)

| PR | Unmet Need | Target User |
|----|-----------|-------------|
| #981 | Privacy: cloud STT unacceptable | Security-conscious self-hosters |
| #942 | Docker-in-Docker unavailable on managed platforms | Cloud deployers (DigitalOcean, Fly.io, Render) |
| #979 | Token management burden for distributed nodes | Multi-node operators, potential federated deployments |

### Satisfaction Indicators
- **Rapid resolution**: All 4 issues closed same-day they were updated; #977 and #963 fixed within 24h of report
- **Feature-request-to-merge speed**: #956 (May 2) → #982 (May 7) = 5 days

### Dissatisfaction Risk
- **Zero community engagement** on issues/PRs may indicate: (a) users not feeling heard, (b) insufficient user base for network effects, or (c) discussion fragmentation to other platforms
- **No 👍 reactions** even on significant feature requests suggests low community participation or discoverability issues

---

## 8. Backlog Watch

**Critical Finding:** No long-unanswered important items are visible in this 24h snapshot. However, **systemic observations**:

| Concern | Evidence | Recommended Action |
|---------|----------|------------------|
| **Single-maintainer dependency** | penso authored 7/10 PRs; 0 external contributor PRs merged | Bus factor risk; community onboarding needed |
| **No open issues** | 0/4 issues active; all closed | May indicate aggressive closure or shallow issue tracking; monitor if bugs are being prematurely closed |
| **Missing: #984 follow-through** | Open PR with undefined comments count | Needs review/merge decision; blocks voice realtime feature completion |
| **Documentation gap** | #976 merged but no linked docs verification | Validate docs site deployment |

**Items to Monitor** (not in data but predicted from patterns):
- Whether agent identity protocol (#979) receives real-world interoperability testing
- Telephony provider expansion beyond Twilio (architecture supports it; community demand unknown)
- Sandbox backend operational maturity (Daytona/Firecracker less battle-tested than Docker)

---

## Project Health Assessment

| Metric | Rating | Notes |
|--------|--------|-------|
| Velocity | ⭐⭐⭐⭐⭐ | 9 PRs merged, 4 issues closed, 2 releases in 24h |
| Responsiveness | ⭐⭐⭐⭐⭐ | Same-day bug fixes |
| Code Quality Signals | ⭐⭐⭐⭐☆ | Structured PRs, issue linking, dependency updates |
| Community Diversity | ⭐⭐☆☆☆ | Single dominant maintainer, zero visible community engagement |
| Documentation | ⭐⭐⭐⭐☆ | Protocol docs merged; release notes minimal |
| Stability | ⭐⭐⭐⭐☆ | Rapid releases suggest possible iterative fixes needed |

**Overall:** Moltis is a **high-velocity, maintainer-driven project** executing ambitiously on personal agent server infrastructure. The technical direction (local-first, interoperable, multi-modal) is well-aligned with emerging AI agent paradigms. Critical need: **diversify contribution base** and **cultivate community discussion** to validate interoperability standards and reduce single-point-of-failure risk.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-05-08

## 1. Today's Overview

CoPaw (QwenPaw) shows **high community activity** with 50 issues and 33 PRs updated in the last 24 hours, indicating a mature, actively maintained project with substantial user engagement. The 60% issue closure rate (20/50) and 67% PR merge rate (22/33) suggest healthy maintainer responsiveness. No new release was published today, with the latest stable version remaining at **v1.1.5.post2**. The project continues to balance enterprise channel integrations (Feishu, WeChat, DingTalk) with core AI agent capabilities, though recurring themes around conversation management, model provider compatibility, and deployment stability indicate areas needing architectural attention.

---

## 2. Releases

**No new releases** were published on 2026-05-07/08. Current stable version remains **v1.1.5.post2**.

---

## 3. Project Progress

### Merged/Closed PRs (22 total; key items highlighted)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#4091](https://github.com/agentscope-ai/QwenPaw/pull/4091) | zhaozhuang521 | **Batch enable/disable buttons for skills** — adds "Enable" and "Disable" to skill batch operations | Fixes [#3503](https://github.com/agentscope-ai/QwenPaw/issues/3503); major UX improvement for workspace management |
| [#4094](https://github.com/agentscope-ai/QwenPaw/pull/4094) | zhaozhuang521 | **TokenUsage component refactor** — style optimization, date picker restrictions, chart filtering | Console quality-of-life improvements |
| [#4089](https://github.com/agentscope-ai/QwenPaw/pull/4089) | zhijianma | **Fix file preview URL stripping** — removes redundant path manipulation | Relates to [#4047](https://github.com/agentscope-ai/QwenPaw/issues/4047) expired attachment links |
| [#4073](https://github.com/agentscope-ai/QwenPaw/pull/4073) | CA-mambo | **Respect custom names for default agent** | Fixes [#3465](https://github.com/agentscope-ai/QwenPaw/issues/3465) |
| [#4085](https://github.com/agentscope-ai/QwenPaw/pull/4085) | zhaozhuang521 | **Language switching optimization** with new icons | Internationalization polish |
| [#4055](https://github.com/agentscope-ai/QwenPaw/pull/4055) | celestialhorse51D | **Propagate Feishu user display name to agent context** | Channel identity improvement (superseded by [#4098](https://github.com/agentscope-ai/QwenPaw/pull/4098)) |
| [#3605](https://github.com/agentscope-ai/QwenPaw/pull/3605) | celestialhorse51D | **Centralize WeChat legacy data migration** | Technical debt reduction for `weixin` → `wechat` rename |
| [#3911](https://github.com/agentscope-ai/QwenPaw/pull/3911) | rayrayraykk | **GPT Image 2 tool plugin** | New multimodal capability |
| [#4052](https://github.com/agentscope-ai/QwenPaw/pull/4052) | zhaozhuang521 | **Eliminate duplicate rendering via JSON comparison** | Fixes [#4023](https://github.com/agentscope-ai/QwenPaw/issues/4023); polling performance fix |
| [#3943](https://github.com/agentscope-ai/QwenPaw/pull/3943), [#3934](https://github.com/agentscope-ai/QwenPaw/pull/3934) | zhaozhuang521 | **Session list style fixes** — Chinese input in rename, persistent scroll position | Console UX hardening |

**Notable pattern:** zhaozhuang521 contributed ~6 merged PRs, indicating concentrated frontend/console maintenance effort.

---

## 4. Community Hot Topics

### Most Active Discussions (by comment count)

| Rank | Issue/PR | Comments | Status | Topic | Underlying Need |
|:---|:---|:---:|:---|:---|:---|
| 1 | [#280](https://github.com/agentscope-ai/QwenPaw/issues/280) | 27 | **OPEN** | Built-in Skills & MCPs debate | **Ecosystem strategy tension**: Users want batteries-included experience vs. maintainers' modular philosophy; 2+ months unresolved suggests roadmap-level decision needed |
| 2 | [#4059](https://github.com/agentscope-ai/QwenPaw/issues/4059) | 8 | CLOSED | Long conversation truncation | **Context window management** — `/compact` insufficient for production use; users need transparent context compression |
| 3 | [#3753](https://github.com/agentscope-ai/QwenPaw/issues/3753) | 8 | CLOSED | Volcano Coding Plan support timeline | **Vendor lock-in anxiety** — enterprise users betting on specific model providers need commitment signals |
| 4 | [#3350](https://github.com/agentscope-ai/QwenPaw/issues/3350) | 7 | CLOSED | Frontend scroll performance (200+ turns) | **Scale limits of web UI** — architectural ceiling for long-running sessions; needs virtualization or pagination |
| 5 | [#1502](https://github.com/agentscope-ai/QwenPaw/issues/1502) | 7 | CLOSED | Volcano engine "Answers have stopped" | **Provider-specific reliability** — streaming/timeout edge cases with third-party APIs |

**Key insight:** The [#280](https://github.com/agentscope-ai/QwenPaw/issues/280) discussion is the project's longest-running open thread, reflecting a fundamental product positioning question: whether CoPaw aims to be a **platform** (user brings everything) or a **product** (works out-of-box).

---

## 5. Bugs & Stability

| Severity | Issue | Status | Description | Fix PR? |
|:---|:---|:---|:---|:---:|
| 🔴 **Critical** | [#4101](https://github.com/agentscope-ai/QwenPaw/issues/4101) | **OPEN** | v1.1.5.post2 regression: agent session memory loss + config loss (Docker) | **No** — fresh report, needs triage |
| 🔴 **Critical** | [#3976](https://github.com/agentscope-ai/QwenPaw/issues/3976) | CLOSED | Session idle cleanup kills **running** tasks at 600s timeout | Fixed in unknown PR (closed without linked merge) |
| 🟡 **High** | [#4056](https://github.com/agentscope-ai/QwenPaw/issues/4056) | **OPEN** | WeChat channel **message loss** — agent stops responding mid-conversation | **No** |
| 🟡 **High** | [#4034](https://github.com/agentscope-ai/QwenPaw/issues/4034) | CLOSED | Streaming models (MiMo/DeepSeek) cause **ReAct loop repetition**, duplicate tool calls | Closed as `invalid` — suggests model-specific workaround needed, not core fix |
| 🟡 **High** | [#3988](https://github.com/agentscope-ai/QwenPaw/issues/3988) | **OPEN** | Windows packaging fails: `conda-pack` conflicts with pip setuptools upgrade | **Yes** — [#4093](https://github.com/agentscope-ai/QwenPaw/pull/4093) under review |
| 🟡 **High** | [#4006](https://github.com/agentscope-ai/QwenPaw/issues/4006) | **OPEN** | Reasoning content **not filtered** in OpenAI-compatible provider (MiniMax) | **No** |
| 🟢 **Medium** | [#4051](https://github.com/agentscope-ai/QwenPaw/issues/4051) | **OPEN** | DeepSeek V4 Flash `<think>` content **parsing failure** — empty responses | **No** |
| 🟢 **Medium** | [#4047](https://github.com/agentscope-ai/QwenPaw/issues/4047) | CLOSED | File attachment links **expire after 24h** with no UI handling | Partial — [#4089](https://github.com/agentscope-ai/QwenPaw/pull/4089) fixes path logic, not token lifecycle |
| 🟢 **Medium** | [#3573](https://github.com/agentscope-ai/QwenPaw/issues/3573) | CLOSED | Cron job `KeyError: weixin` — channel name mismatch | Fixed by [#3605](https://github.com/agentscope-ai/QwenPaw/pull/3605) migration |
| 🟢 **Medium** | [#1403](https://github.com/agentscope-ai/QwenPaw/issues/1403) | CLOSED | Feishu message **deduplication missing** | Fixed |

**Stability assessment:** Two critical open issues without fixes — [#4101](https://github.com/agentscope-ai/QwenPaw/issues/4101) (Docker data loss regression) and [#4056](https://github.com/agentscope-ai/QwenPaw/issues/4056) (WeChat message loss) — represent the highest risk to user trust. The DeepSeek/MiMo streaming issues suggest **reasoning model compatibility** is an emerging problem class.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Category | Likelihood in Next Release | Rationale |
|:---|:---|:---:|:---|
| [#4030](https://github.com/agentscope-ai/QwenPaw/issues/4030) — Vertex AI Gemini provider | **Cloud Enterprise** | 🔶 **High** | Fills explicit enterprise gap; clean provider addition pattern |
| [#2235](https://github.com/agentscope-ai/QwenPaw/issues/2235) — Web console self-upgrade | **Ops Automation** | 🔶 **Medium** | Long-standing request (since March); reduces support burden |
| [#4087](https://github.com/agentscope-ai/QwenPaw/issues/4087) — Enhanced File module (beyond `.md`) | **Core UX** | 🔶 **Medium** | "Unfinished" feeling; natural extension of existing module |
| [#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036) — Simplified model addition flow | **Onboarding** | 🔶 **Medium** | `good first issue` label; clear UX pain point |
| [#3997](https://github.com/agentscope-ai/QwenPaw/issues/3997) — Configurable MCP client timeout | **Integration Reliability** | 🔶 **High** | Simple Pydantic field addition; blocking production MCP use |
| [#4067](https://github.com/agentscope-ai/QwenPaw/issues/4067) / [#3967](https://github.com/agentscope-ai/QwenPaw/issues/3967) — Custom workspace storage path | **Deployment Flexibility** | 🔶 **Medium** | Docker/enterprise hygiene; two related requests suggest demand |
| [#4000](https://github.com/agentscope-ai/QwenPaw/issues/4000) — WeChat/browser sync + voice input | **Cross-platform Parity** | 🔶 **Low** | Architectural complexity; voice needs new infrastructure |
| [#4008](https://github.com/agentscope-ai/QwenPaw/issues/4008) — Agent evaluation/benchmarking | **Enterprise Maturity** | 🔶 **Low** | Strategic but large scope; likely post-v2 |

**Emerging theme:** Multiple requests for **workspace isolation** ([#3967](https://github.com/agentscope-ai/QwenPaw/issues/3967), [#4067](https://github.com/agentscope-ai/QwenPaw/issues/4067)) suggest CoPaw's single-directory model is hitting scaling limits for team/enterprise deployments.

---

## 7. User Feedback Summary

### 😤 Pain Points (with evidence)

| Theme | Source Issues | Severity |
|:---|:---|:---:|
| **Conversation breaks with length** | [#4059](https://github.com/agentscope-ai/QwenPaw/issues/4059), [#3350](https://github.com/agentscope-ai/QwenPaw/issues/3350) | 🔴 High |
| **Data loss in Docker** | [#4101](https://github.com/agentscope-ai/QwenPaw/issues/4101) | 🔴 Critical |
| **Channel reliability (WeChat especially)** | [#4056](https://github.com/agentscope-ai/QwenPaw/issues/4056), [#1403](https://github.com/agentscope-ai/QwenPaw/issues/1403), [#4050](https://github.com/agentscope-ai/QwenPaw/issues/4050) | 🟡 High |
| **Reasoning model compatibility** | [#4051](https://github.com/agentscope-ai/QwenPaw/issues/4051), [#4034](https://github.com/agentscope-ai/QwenPaw/issues/4034), [#4006](https://github.com/agentscope-ai/QwenPaw/issues/4006) | 🟡 High |
| **Complex model onboarding** | [#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036) | 🟢 Medium |
| **Workspace clutter/confusion** | [#3967](https://github.com/agentscope-ai/QwenPaw/issues/3967) | 🟢 Medium |

### 😊 Positive Signals

- **Skill system extensibility** praised; users actively building custom skills
- **Multi-channel support** (Feishu, WeChat, DingTalk) is core differentiator
- **Active maintainer response** — most issues closed within 1-2 days

### Use Case Evolution

Users are pushing CoPaw from **personal assistant** → **team production platform**:
- Project-level code iteration (200+ turn sessions) [#3350](https://github.com/agentscope-ai/QwenPaw/issues/3350)
- Agent evaluation for leadership reporting [#4008](https://github.com/agentscope-ai/QwenPaw/issues/4008)
- A2A (Agent-to-Agent) orchestration in single conversation [#3350](https://github.com/agentscope-ai/QwenPaw/issues/3350), [#4088](https://github.com/agentscope-ai/QwenPaw/issues/4088)

---

## 8. Backlog Watch

### Issues/PRs Needing Maintainer Attention (>1 month old, unresolved)

| Item | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#280](https://github.com/agentscope-ai/QwenPaw/issues/280) Built-in Skills & MCPs | **2+ months** | Strategic deadlock | Product decision: publish official skill registry or curated defaults |
| [#3238](https://github.com/agentscope-ai/QwenPaw/pull/3238) PlanNotebook (experimental) | ~4 weeks | Feature stagnation | Review experimental flag, merge or close |
| [#3916](https://github.com/agentscope-ai/QwenPaw/pull/3916) Docker volume mount backup restore | ~2 weeks | Deployment blocker | EBUSY fix needs review; affects production Docker users |
| [#3999](https://github.com/agentscope-ai/QwenPaw/pull/3999) CLI skill test command | ~1 week | Developer experience | First-time contributor; needs review cycle completion |
| [#4076](https://github.com/agentscope-ai/QwenPaw/pull/4076) Log rotation (all platforms) | ~2 days | Operations hygiene | Simple fix, should fast-track |

### Newly Opened, High-Urgency (no response yet)

- [#4101](https://github.com/agentscope-ai/QwenPaw/issues/4101) — Docker data loss regression (v1.1.5.post2)
- [#4098](https://github.com/agentscope-ai/QwenPaw/pull/4098) — Feishu nickname propagation (refines [#4055](https://github.com/agentscope-ai/QwenPaw/pull/4055))

---

**Project Health Score: 🟡 B+**

Strengths: Rapid PR turnaround, active community, multi-channel maturity
Risks: Critical Docker regression unaddressed, reasoning model compatibility gaps, strategic skill ecosystem decision overdue

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-08

## 1. Today's Overview

ZeroClaw shows **extremely high community activity** with 50 issues and 50 PRs updated in the last 24 hours, yet **zero releases and zero closed items**—indicating a project in active development flux but with a potential merge bottleneck. The activity is heavily concentrated in two areas: **desktop/Tauri client hardening** (macOS onboarding, permissions, offline capability) and **provider/channel reliability** (WhatsApp Web protocol breakage, Gemini CLI crashes, Llama.cpp compatibility). The absence of any merged PRs despite substantial review activity suggests either a strict review gate, CI blockers, or maintainer bandwidth constraints ahead of the pending v0.7.5 release.

---

## 2. Releases

**No new releases.** The v0.7.5 release remains blocked by CI failure (see PR #6502). Master is tagged at v0.7.5 (commit `44d38f8`) but no release artifacts have been published.

---

## 3. Project Progress

**No PRs were merged or closed in the last 24 hours.** However, several PRs show active development momentum:

| PR | Author | Status | Significance |
|---|---|---|---|
| [#6506](https://github.com/zeroclaw-labs/zeroclaw/pull/6506) | theonlyhennygod | Open, XL | macOS onboarding wizard with 8-step TCC permission flow—foundational for desktop agent control |
| [#6507](https://github.com/zeroclaw-labs/zeroclaw/pull/6507) | theonlyhennygod | Open, S, stacked on #6506 | First capability handlers: `take_screenshot` and `run_applescript` |
| [#6502](https://github.com/zeroclaw-labs/zeroclaw/pull/6502) | singlerider | Open, M, **needs-author-action** | **Release blocker**: fixes `gen-api` → `tsc` ordering in CI for v0.7.5 |
| [#4944](https://github.com/zeroclaw-labs/zeroclaw/pull/4944) | yijunyu | Open, S, **needs-author-action** | Large tool wrapper migration bundle (6 PRs consolidated) |
| [#6432](https://github.com/zeroclaw-labs/zeroclaw/pull/6432) | drbparadise | Open, S | SQLite concurrent migration safety fix |

**Notable**: The desktop stack is being built as a **layered PR series** (#6506 → #6507 → future capability handlers), suggesting deliberate architectural sequencing but also merge dependency risk.

---

## 4. Community Hot Topics

### Most Discussed Issues

| Rank | Issue | Comments | Core Tension |
|---|---|---|---|
| 1 | [#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) WhatsApp Web protocol bump breakage | **6** | External dependency volatility (WhatsApp server-side changes) vs. user expectation of channel stability |
| 2 | [#6516](https://github.com/zeroclaw-labs/zeroclaw/issues/6516) ACP `cwd` change locks agent from skill files | **2** | Security sandbox boundaries vs. agent self-reference needs |
| 3 | [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) Prompt caching fails on Telegram | **2** | Cross-channel feature parity—CLI works, Telegram doesn't |
| 4 | [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) Shell tool calls refused at `autonomy = "full"` | **2** | Configuration system trust model broken—"full" autonomy doesn't dispatch |

**Underlying pattern**: Users are hitting **boundary cases where configuration intent doesn't match runtime behavior**—whether sandbox paths, autonomy levels, or channel-specific implementations. This suggests architectural debt in the configuration→runtime dispatch pipeline.

---

## 5. Bugs & Stability

| Severity | Issue | Fix PR? | Description |
|---|---|---|---|
| **S0** | [#6500](https://github.com/zeroclaw-labs/zeroclaw/issues/6500) Missing `zeroclawlabs/tool-runner` Docker image | ❌ No | **Security risk**: documented sandbox image doesn't exist in registry |
| **S1** | [#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) WhatsApp Web dead after protocol bump | ❌ No | Server-side change broke `wa-rs` dependency; no workaround identified |
| **S1** | [#6516](https://github.com/zeroclaw-labs/zeroclaw/issues/6516) ACP `cwd` locks out skill files | ❌ No | Sandbox path resolution bug |
| **S1** | [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) `autonomy = "full"` blocks shell dispatch | ❌ No | Runtime autonomy check bug—config says allow, runtime says deny |
| **S1** | [#6399](https://github.com/zeroclaw-labs/zeroclaw/issues/6399) Custom provider sends local paths not data URLs | ❌ No | Multimodal broken on remote providers (Raspberry Pi → vLLM setup) |
| **S1** | [#6377](https://github.com/zeroclaw-labs/zeroclaw/issues/6377) Llama.cpp defaults wrong for tool usage | ❌ No | Onboarding sets incompatible mode, causes 500 errors |
| **S1** | [#6410](https://github.com/zeroclaw-labs/zeroclaw/issues/6410) `google_workspace` tool fails on Windows | ❌ No | `.cmd` extension not resolved, JSON mangled in shell fallback |
| **S2** | [#6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472) Gateway panics with PostgreSQL | ❌ No | "Cannot start a runtime from within a runtime"—async executor nesting |
| **S2** | [#6402](https://github.com/zeroclaw-labs/zeroclaw/issues/6402) Bash completion infinite recursion | ❌ No | Crashes SSH sessions—function name capture bug |

**Critical gap**: **Zero of the 8 S1/S0 bugs have associated fix PRs.** The v0.7.5 release blocker (#6502) is CI-only, not addressing runtime stability.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Predicted Priority | Rationale |
|---|---|---|
| [#6465](https://github.com/zeroclaw-labs/zeroclaw/issues/6465) Bundle chat-ui as static assets in desktop binary | **v0.7.6** | Required for offline desktop viability; PR #6506 lays groundwork |
| [#6499](https://github.com/zeroclaw-labs/zeroclaw/issues/6499) macOS UI control capabilities (screenshot, click, keys, AX) | **v0.8.0** | Large surface; #6507 is phase 1 proof-of-concept |
| [#6375](https://github.com/zeroclaw-labs/zeroclaw/issues/6375) V3 env-var override mechanism | **v0.7.6** | Regression from V1/V2 removal; blocking operator workflows |
| [#6371](https://github.com/zeroclaw-labs/zeroclaw/issues/6371) WhatsApp per-JID group allowlist | **v0.7.6** | Paired with #6246 fix; security hardening for multi-tenant deployments |
| [#6510](https://github.com/zeroclaw-labs/zeroclaw/issues/6510) Cron `delivery.mode = "announce"` final-message-only | **v0.7.6** | Small, well-scoped; reduces noise in automated workflows |
| [#6518](https://github.com/zeroclaw-labs/zeroclaw/issues/6518) First-class custom/OpenAI-compatible providers | **v0.8.0** | Ecosystem expansion; currently requires "long series of non-obvious workarounds" |

**Emerging theme**: The project is pivoting from **gateway-centric** to **desktop-native agent**, with macOS as the leading platform. Windows and Linux desktop parity may lag.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|---|---|---|
| **Provider onboarding fragility** | #6377 (Llama.cpp), #6373 (web_search broken), #6520 (Gemini CLI crash), #6399 (custom provider multimodal) | High—new users hit walls immediately |
| **Desktop "works on my Mac" gaps** | #6339 (no universal binary), #6349 (menu-bar chat tool rendering), #6340 (no crash reporting) | Medium—early adopter friction |
| **Documentation → reality mismatch** | #6500 (missing Docker image), #6393 (Chinese install docs wrong), #5075 (WhatsApp reinstall guidance incomplete) | High—trust erosion |
| **Configuration complexity** | #6434 (autonomy levels don't work as labeled), #6375 (env-var overrides removed without migration) | High—power user frustration |

### Satisfaction Signals

- Active **self-organized troubleshooting** in issues (users cross-referencing #6246, #5075)
- **Stacked PR contributions** from repeat contributors (theonlyhennygod's desktop series)
- **Platform diversity**: Raspberry Pi (#6399), Arduino Uno Q (#6172), Windows (#6410) — users stretching boundaries

---

## 8. Backlog Watch

### PRs at Risk of Stagnation

| PR | Age | Blocker | Risk |
|---|---|---|---|
| [#5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779) TOTP-gated shell commands | **23 days** | `needs-author-action`, `needs-maintainer-review` | Security feature stalled; author may have disengaged |
| [#5265](https://github.com/zeroclaw-labs/zeroclaw/pull/5265) Menu-bar chat agent (XL) | **35 days** | `needs-author-action` | Superseded by #6506/#6507? Or needs rebase? |
| [#4944](https://github.com/zeroclaw-labs/zeroclaw/pull/4944) Tool wrapper migration bundle | **41 days** | `needs-author-action` | Large refactor blocking other tool work |
| [#5300](https://github.com/zeroclaw-labs/zeroclaw/pull/5300) Empty cargo feature args guard | **33 days** | `needs-author-action` | Small fix, easy win if nudged |

### Issues Needing Maintainer Triage

| Issue | Days Open | Why Urgent |
|---|---|---|
| [#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) WhatsApp protocol bump | **8 days**, 6 comments | **Most-commented issue**, no maintainer response; breaks major channel |
| [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) Autonomy config broken | **2 days** | S1, core trust model—"full" autonomy is a lie |
| [#6500](https://github.com/zeroclaw-labs/zeroclaw/issues/6500) Missing security sandbox image | **1 day** | S0—documented security feature is vaporware |

---

## Project Health Assessment

| Metric | Status | Note |
|---|---|---|
| **Activity volume** | 🟢 Strong | 100 items updated/24h |
| **Merge velocity** | 🔴 Critical | 0 closed PRs; v0.7.5 blocked |
| **Bug fix responsiveness** | 🔴 Critical | 0/8 S1+ bugs have PRs |
| **Contributor retention** | 🟡 Watch | Repeat contributors active, but PRs stalling |
| **Release readiness** | 🔴 Blocked | CI fix in #6502 unmerged |

**Recommendation**: The project needs an **unblock sprint**—merge #6502 for v0.7.5, then triage the S1 bug queue with assignee commitments. The desktop onboarding work (#6506/#6507) is promising but shouldn't distract from core runtime stability.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*