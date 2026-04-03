# OpenClaw Ecosystem Digest 2026-03-29

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-03-29 00:10 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-03-29

## 1. Today's Overview

OpenClaw shows **extremely high development velocity** with 500 issues and 500 PRs updated in the last 24 hours, indicating an active, rapidly evolving codebase. The project released **v2026.3.28-beta.1** with breaking authentication changes for Qwen users. Critical regression fixes for embedded agent authentication dominated today's merged work, resolving a widespread "No API key for provider" failure that affected multiple providers. The community is actively engaged with 444 open issues, though the high volume suggests some triage challenges. Platform expansion (Linux/Windows apps) and provider stability remain top user priorities.

---

## 2. Releases

### v2026.3.28-beta.1 ([Release](https://github.com/openclaw/openclaw/releases/tag/v2026.3.28-beta.1))

| Aspect | Details |
|--------|---------|
| **Breaking Changes** | Qwen OAuth migration: deprecated `qwen-portal-auth` removed; users must run `openclaw onboard --auth-choice modelstudio-api-key` |
| **Config/Doctor** | Automatic config migrations for older versions dropped |
| **Migration** | [#52709](https://github.com/openclaw/openclaw/pull/52709) — thanks @pomelo-nwu |

**Action Required for Qwen Users:** Re-authenticate using Model Studio API key before this version.

---

## 3. Project Progress

### Critical Fixes Merged Today

| PR | Description | Impact |
|----|-------------|--------|
| [#55909](https://github.com/openclaw/openclaw/pull/55909) | Restore `getApiKey` callback after `streamFn` override | Fixes auth regression breaking custom/OAuth providers |
| [#55588](https://github.com/openclaw/openclaw/pull/55588) | Wire `agent.getApiKey` in embedded runner | Restores HTTP streaming for github-copilot, anthropic, google, openrouter, deepseek |
| [#55867](https://github.com/openclaw/openclaw/pull/55867) | **CRITICAL**: Embedded agent auth after pi-coding-agent 0.63.0 | Root cause fix for "No API key for provider" cascade failure |
| [#55898](https://github.com/openclaw/openclaw/pull/55898) | Restore embedded auth injection | Resolves main branch chat functionality breakage |
| [#55782](https://github.com/openclaw/openclaw/pull/55782) | Preserve auth in embedded stream overrides | Prevents auth drop on live gateway runs |

### Feature Advancement

| PR | Description | Status |
|----|-------------|--------|
| [#56673](https://github.com/openclaw/openclaw/pull/56673) | `sessions_await` tool for parallel sub-agent orchestration | **NEW** — Opt-in blocking wait for orchestrator agents |
| [#56672](https://github.com/openclaw/openclaw/pull/56672) | Extend `session_end` hook to subagent/cron completion | **NEW** — Plugin lifecycle improvement |
| [#56285](https://github.com/openclaw/openclaw/pull/56285) | Windows exec allowlist with argPattern | **MAJOR** — Windows security hardening, fixes [#50403](https://github.com/openclaw/openclaw/issues/50403) |
| [#56401](https://github.com/openclaw/openclaw/pull/56401) | CodeMirror 6 JSON editor for raw config | UI/UX improvement |
| [#56005](https://github.com/openclaw/openclaw/pull/56005) | Native Linux gateway client for companion app | Progress on [#75](https://github.com/openclaw/openclaw/issues/75) |

---

## 4. Community Hot Topics

### Highest Engagement Issues

| Issue | Comments | 👍 | Topic | Analysis |
|-------|----------|-----|-------|----------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | 58 | 66 | **Linux/Windows Clawdbot Apps** | Most-requested platform gap; macOS/iOS/Android exist, desktop Linux/Windows missing. PR [#56005](https://github.com/openclaw/openclaw/pull/56005) addresses Linux. |
| [#23538](https://github.com/openclaw/openclaw/issues/23538) | 25 | 0 | Anthropic 401 auth failure | Isolated profile reproduction confirms provider-specific auth bug; affects setup-token flow |
| [#13688](https://github.com/openclaw/openclaw/issues/13688) | 19 | 2 | Discord WebSocket disconnects | Unbounded backoff, 30+ min outages, silent DM loss — reliability crisis for Discord bots |
| [#34830](https://github.com/openclaw/openclaw/issues/34830) | 18 | 0 | OpenRouter 401 regression | Post-2026.3.2 auth header regression, fresh installs affected |
| [#14593](https://github.com/openclaw/openclaw/issues/14593) | 17 | 14 | Docker skill install fails (brew dependency) | Containerization gap — skills assume macOS package manager |

### Underlying Needs
- **Cross-platform parity**: Strong demand for desktop OS support beyond macOS
- **Provider auth reliability**: Multiple OAuth/token flows breaking across releases
- **Discord production stability**: WebSocket resilience critical for community bots
- **Container-native deployment**: Docker assumptions still leak host dependencies

---

## 5. Bugs & Stability

### Critical (Fix Merged or In Progress)

| Issue | Severity | Status | Fix PR |
|-------|----------|--------|--------|
| [#55672](https://github.com/openclaw/openclaw/issues/55672) | **RELEASE BLOCKER** — "No API key" despite probe success | ✅ Closed | [#55909](https://github.com/openclaw/openclaw/pull/55909), [#55588](https://github.com/openclaw/openclaw/pull/55588), [#55867](https://github.com/openclaw/openclaw/pull/55867) |
| [#56364](https://github.com/openclaw/openclaw/issues/56364) | OpenAI Codex OAuth token not passed | ✅ Closed | Same auth fix cascade |
| [#54931](https://github.com/openclaw/openclaw/issues/54931) | Discord health-monitor crash loop (v2026.3.24) | 🔄 Open | Related to [#54729](https://github.com/openclaw/openclaw/issues/54729) (closed) |
| [#55346](https://github.com/openclaw/openclaw/issues/55346) | Discord "Max reconnect attempts (0)" crash | 🔄 Open | No PR yet |

### High Severity

| Issue | Description | Repro | Fix Status |
|-------|-------------|-------|------------|
| [#13688](https://github.com/openclaw/openclaw/issues/13688) | Discord WebSocket 1005/1006, unbounded backoff | Confirmed | 🔄 Open, 19 comments |
| [#34830](https://github.com/openclaw/openclaw/issues/34830) | OpenRouter 401 missing auth header | Regression | 🔄 Open |
| [#53959](https://github.com/openclaw/openclaw/issues/53959) | GPT-5.3-Codex zero tool execution | Regression 2026.3.23-2 | 🔄 Open |
| [#53870](https://github.com/openclaw/openclaw/issues/53870) | Matrix plugin security scan blocking install | Regression | 🔄 Open, 13 comments |
| [#53353](https://github.com/openclaw/openclaw/issues/53353) | Matrix E2EE broken (missing WASM) | Post-2026.3.23 | 🔄 Open |

### Provider-Specific Regressions

| Provider | Issue | Symptom |
|----------|-------|---------|
| Mistral | [#47079](https://github.com/openclaw/openclaw/issues/47079), [#53363](https://github.com/openclaw/openclaw/issues/53363) | 422 on `max_completion_tokens` — PR [#56667](https://github.com/openclaw/openclaw/pull/56667) fixes |
| Gemini | [#41494](https://github.com/openclaw/openclaw/issues/41494) | Reasoning leaks into chat output |
| Anthropic | [#23538](https://github.com/openclaw/openclaw/issues/23538) | 401 on setup-token auth |

---

## 6. Feature Requests & Roadmap Signals

### Likely Near-Term (Active PRs or High Engagement)

| Feature | Signal | Confidence |
|---------|--------|------------|
| **Parallel sub-agent orchestration** | PR [#56673](https://github.com/openclaw/openclaw/pull/56673) merged pattern, `sessions_await` tool | HIGH — v2026.4.x |
| **Linux native companion app** | PR [#56005](https://github.com/openclaw/openclaw/pull/56005) in progress, [#75](https://github.com/openclaw/openclaw/issues/75) top issue | HIGH — v2026.4.x |
| **Agent identity/trust verification** | [#49971](https://github.com/openclaw/openclaw/issues/49971) RFC with 16 comments, ERC-8004/DID/VC standards | MEDIUM — architectural |
| **Memory v2 enhancements** | [#28930](https://github.com/openclaw/openclaw/issues/28930) (12 comments) — associative traversal, salience, forgetting | MEDIUM — research phase |
| **Baidu web search** | [#56304](https://github.com/openclaw/openclaw/issues/56304) (5 comments) — zh-CN retrieval | MEDIUM — plugin extension |

### Emerging Patterns
- **Multi-agent coordination**: `sessions_spawn` + `sessions_await` suggests orchestration as first-class primitive
- **Cryptographic identity**: [#49971](https://github.com/openclaw/openclaw/issues/49971) indicates interest in verifiable agent credentials
- **Windows parity**: [#56285](https://github.com/openclaw/openclaw/pull/56285) exec allowlist suggests Windows becoming tier-1 platform

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Authentication fragility** | 5+ provider auth issues, OAuth token handling regressions | 🔴 Critical |
| **Discord reliability** | 4 crash/disconnect issues, production bot outages | 🔴 Critical |
| **Platform gaps** | Linux/Windows apps missing, Docker skills broken | 🟡 High |
| **Silent failures** | Tool execution claims success but no action ([#40069](https://github.com/openclaw/openclaw/issues/40069)), TUI `/model` no-op ([#29572](https://github.com/openclaw/openclaw/issues/29572)) | 🟡 High |
| **Configuration complexity** | Doctor warnings, migration drops, config validation errors | 🟡 Medium |

### Positive Signals
- **Embedded/agent mode adoption**: High engagement with `sessions_spawn`, sub-agent patterns
- **Community plugin ecosystem**: Matrix, Telegram, Discord channels actively used
- **Self-hosting interest**: Docker, Raspberry Pi ([28930](https://github.com/openclaw/openclaw/issues/28930)), local LLM (Ollama) configurations

### Dissatisfaction Drivers
> "Every embedded run could fail with `No API key for provider`" — [#55867](https://github.com/openclaw/openclaw/pull/55867)

> "Discord WebSocket connections repeatedly drop... leaving the bot offline for 30+ minutes" — [#13688](https://github.com/openclaw/openclaw/issues/13688)

> "Agent claims to invoke tools but no tool calls appear in UI" — [#40069](https://github.com/openclaw/openclaw/issues/40069)

---

## 8. Backlog Watch

### Stale but Important (Updated but unresolved >30 days)

| Issue | Age | Comments | Risk |
|-------|-----|----------|------|
| [#28930](https://github.com/openclaw/openclaw/issues/28930) | ~30 days | 12 | Memory architecture — self-reported by running agent on Pi 5 |
| [#29348](https://github.com/openclaw/openclaw/issues/29348) | ~30 days | 11 | `google-antigravity-auth` plugin removal breaks workflows |
| [#29572](https://github.com/openclaw/openclaw/issues/29572) | ~30 days | 10 | TUI `/model` command silently fails — UX degradation |
| [#29254](https://github.com/openclaw/openclaw/issues/29254) | ~30 days | 9 | Skill eligibility checks wrong container — Docker broken |
| [#29129](https://github.com/openclaw/openclaw/issues/29129) | ~30 days | 7 | `thinking` parameter persistence breaks restarts |

### Needs Maintainer Decision

| Issue | Blocked On |
|-------|-----------|
| [#49971](https://github.com/openclaw/openclaw/issues/49971) | RFC review — agent identity standards (ERC-8004, DID, VC) |
| [#7598](https://github.com/openclaw/openclaw/issues/7598) | Session history backup — information loss in long sessions |
| [#29563](https://github.com/openclaw/openclaw/issues/29563) | Control UI session management redesign |

---

## Health Assessment

| Metric | Status |
|--------|--------|
| **Development Velocity** | 🟢 Excellent — 1000 items updated/24h |
| **Release Stability** | 🟡 Caution — beta with breaking changes, auth regressions fixed same-day |
| **Issue Triage** | 🔴 Concerning — 444 open, many stale labels, high noise ratio |
| **Community Engagement** | 🟢 Strong — detailed bug reports, RFC participation |
| **Cross-Platform** | 🟡 In Progress — Linux PR active, Windows security improving |

**Recommendation:** Prioritize Discord stability and provider auth test coverage to prevent regression cascades. Consider dedicated platform parity milestone given [#75](https://github.com/openclaw/openclaw/issues/75) dominance.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Ecosystem
## 2026-03-29 Community Digest Analysis

---

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem demonstrates **exceptional velocity** with 10+ active projects processing 1,000+ combined issues/PRs in 24 hours. The space is consolidating around three architectural patterns: **embedded agent runtimes** (OpenClaw, IronClaw), **channel-centric messaging bots** (NanoBot, Moltis, LobsterAI), and **control-plane orchestrators** (CoPaw, TinyClaw). A critical inflection point is emerging as projects race to solve **multi-agent orchestration**, **provider auth reliability**, and **cross-platform deployment**—with Windows/Linux parity now table stakes and Matrix/Discord/Telegram/WeChat forming the universal channel layer. Security hardening (HMAC receipts, credential vaults, SSRF controls) and local-first AI (Ollama, llama.cpp integration) are becoming differentiating capabilities rather than experimental features.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* | Key Indicator |
|---------|:----------:|:---------:|:--------------|:-----------:|:-------------|
| **OpenClaw** | 500 | 500 | v2026.3.28-beta.1 | 🟡 Caution | Auth regression cascade, 444 open issues |
| **NanoBot** | 21 | 38 | v0.1.4.post6 | 🟡 Unstable | Post6 regressions, high velocity/quality gap |
| **ZeroClaw** | 50 | 50 | v0.6.66 | 🟢 Healthy | 1:1 open/close ratio, HMAC security innovation |
| **PicoClaw** | 38 | 89 | v0.2.4-nightly | 🟢 Active | 35 open PRs = review bottleneck risk |
| **NanoClaw** | 6 | 32 | None | 🟡 Accumulating | OneCLI vault migration breaking change |
| **NullClaw** | 3 | 8 | None | 🟢 Responsive | 7:1 open/closed = review bottleneck |
| **IronClaw** | 9 | 50 | None | 🟡 Stabilizing | 37 open PRs, WASM complexity debt |
| **LobsterAI** | 3 | 18 | v2026.3.29 | 🟢 Releasing | Config persistence blocker (#1006) |
| **TinyClaw** | 0 | 15 | None | 🟢 Clean | Zero backlog post-rebrand |
| **Moltis** | 8 | 17 | 4 patches (2 days) | 🟢 Excellent | 100% issue resolution, same-day fixes |
| **CoPaw** | 39 | 24 | None | 🟡 Critical bugs | P0 infinite loops, CPU 100%, deadlocks |
| **ZeptoClaw** | 1 | 2 | None | 🟡 Bottlenecked | Single-contributor, unmerged fixes |
| **EasyClaw** | 2 | 0 | v1.7.8 | 🔴 Stalled | No code activity, critical API bug unassigned |

*\*Health Score: 🟢 Excellent/Healthy, 🟡 Caution/Unstable, 🔴 Critical/Stalled*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Peer Comparison |
|-----------|----------|-----------------|
| **Scale** | 10x activity volume (1,000 items/24h vs. 50-100 for peers) | Dominant reference implementation |
| **Multi-agent primitives** | `sessions_spawn` + `sessions_await` merged (#56673, #56672) | CoPaw planning, others absent |
| **Provider ecosystem** | 15+ providers with unified auth layer | Moltis catching up, NanoBot fragmented |
| **Embedded/agent mode** | Mature `pi-coding-agent` integration | IronClaw WASM alternative, others CLI-only |
| **Cross-platform apps** | macOS/iOS/Android shipping, Linux PR active (#56005) | PicoClaw OpenWrt, Moltis Matrix lead |

### Technical Approach Differences
- **OpenClaw**: Monolithic TypeScript/Node runtime with plugin architecture, heavy investment in IDE-like experiences (Clawdbot apps)
- **IronClaw**: WASM-first sandboxing for security, host-guest boundary complexity for stateful connections
- **Moltis**: Elixir/Phoenix for concurrency, rapid release cadence, GraphQL API layer
- **CoPaw**: Python/AgentScope foundation, academic research lineage, enterprise channel depth (DingTalk/Feishu)
- **ZeroClaw**: Rust performance, cryptographic verification (HMAC receipts), knowledge graph memory

### Community Size Comparison
OpenClaw's **444 open issues** exceeds total 24h activity of all other projects combined (excluding itself). However, this scale creates **triage debt**—stale labels, unresolved Discord stability issues (#13688, 19 comments), and regression cascades. Moltis demonstrates superior **signal-to-noise ratio** with 100% same-day resolution; TinyClaw shows **sustainable velocity** with zero backlog.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|--------------|
| **Provider Auth Reliability** | OpenClaw, NanoBot, ZeroClaw, LobsterAI, CoPaw | OAuth token refresh, API key injection, "No API key" regression prevention (OpenClaw #55867, NanoBot #2570, LobsterAI #1003) |
| **Discord Production Stability** | OpenClaw, IronClaw, NanoClaw, NullClaw | WebSocket 1005/1006 handling, unbounded backoff, silent DM loss (OpenClaw #13688, IronClaw #1676, NullClaw #739) |
| **Matrix E2EE/Reliability** | OpenClaw, ZeroClaw, Moltis, NanoBot | OTK retry loops, thread context, WASM crypto (OpenClaw #53353, ZeroClaw #4657, Moltis #331) |
| **Local LLM Integration** | OpenClaw, NanoBot, PicoClaw, Moltis, CoPaw | Ollama gateway binding, llama.cpp strict mode, context compaction (NanoBot #2570, PicoClaw #1161, Moltis #515) |
| **Configuration Persistence** | LobsterAI, PicoClaw, CoPaw, TinyClaw | Template vs. merge semantics, restart durability, workspace migration (LobsterAI #1006, PicoClaw #1941, CoPaw #2457) |
| **Multi-Agent Orchestration** | OpenClaw, CoPaw, PicoClaw, TinyClaw | Sub-agent spawning, parallel execution, session lifecycle hooks (OpenClaw #56673, CoPaw #2420, PicoClaw #1934) |
| **Windows Platform Parity** | OpenClaw, NullClaw, PicoClaw, EasyClaw | Native apps, WebSocket stability, binary distribution (OpenClaw #75, NullClaw #739, PicoClaw #2080) |
| **Security Hardening** | ZeroClaw, NanoClaw, IronClaw, PicoClaw | HMAC receipts, credential vaults, SSRF bypass, sandbox escapes (ZeroClaw #4921, NanoClaw #1500, IronClaw #1719, PicoClaw #1525-1529) |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|---------|------------------------|-------------|------------------------|
| **OpenClaw** | Reference implementation, embedded agent IDE | Developers, power users | TypeScript monolith, extensive provider abstractions |
| **IronClaw** | WASM sandboxed execution, security-first | Enterprise, untrusted code | Rust host + WASM guest, capability-based |
| **Moltis** | Operational excellence, rapid iteration | Production operators | Elixir/Phoenix, GraphQL, same-day bug resolution |
| **CoPaw** | Enterprise China messaging, research lineage | Enterprise IT, researchers | Python/AgentScope, DingTalk/Feishu depth |
| **ZeroClaw** | Cryptographic verification, knowledge graphs | Security-conscious, CRM use cases | Rust, HMAC receipts, Client/Contact/Interaction nodes |
| **NanoBot** | Deployment UX, setup wizard | Self-hosters, Docker users | Python, environment variable hardening, heartbeat system |
| **PicoClaw** | Edge/embedded deployment, OpenWrt | IoT, router-based AI | Go, LuCI web UI, multi-agent Phase 2 roadmap |
| **TinyClaw** | Post-rebrand stability, Claude Code integration | Claude power users | TypeScript, TinyOffice web onboarding, kill switches |
| **LobsterAI** | NetEase ecosystem, cowork UX | Chinese enterprise, team collaboration | Proprietary + open hybrid, xiaomifeng migration |
| **NanoClaw** | OneCLI credential vault, peer-to-peer | Privacy-first, infrastructure teams | Containerized, Signal/peer channels, review agents |
| **NullClaw** | Minimal footprint, WeChat focus | China/SEA market, lightweight deploy | Python, concentrated maintainer (`manelsen`) |
| **ZeptoClaw** | Research task specialization | Academic, open-ended research | Python, multi-layered context compaction |
| **EasyClaw** | Bailian (Alibaba Cloud) integration | China cloud users | Electron/macOS, stalled |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (Release-Ready)
| Project | Pattern | Risk |
|---------|---------|------|
| **Moltis** | 4 releases/2 days, 100% resolution | Velocity-induced regressions (mitigated by #509 tests) |
| **OpenClaw** | Daily beta releases, 500 PRs/24h | Triage debt, auth fragility |
| **PicoClaw** | Nightly builds, 89 PRs/24h | 35 open PRs = review bottleneck |

### Tier 2: Stabilization (Quality Focus)
| Project | Pattern | Blocker |
|---------|---------|---------|
| **TinyClaw** | Zero backlog post-rebrand | Release tagging (15 PRs unshipped) |
| **ZeroClaw** | 1:1 open/close ratio | None apparent |
| **LobsterAI** | Daily patch releases | Config persistence (#1006) |
| **IronClaw** | Staging promotion (#1732) | 37 open PRs, WASM complexity |

### Tier 3: Accumulating (Pre-Release)
| Project | Pattern | Risk |
|---------|---------|------|
| **NanoBot** | Post6 regressions, no release | Quality control gaps |
| **NanoClaw** | OneCLI migration breaking change | Fork divergence (JanusD25) |
| **CoPaw** | P0 bugs unassigned | Production deployment blockers |

### Tier 4: Bottlenecked/Stalled
| Project | Pattern | Concern |
|---------|---------|---------|
| **ZeptoClaw** | Single-contributor, unmerged fixes | Maintainer availability |
| **NullClaw** | 7:1 open/closed PR ratio | Review throughput |
| **EasyClaw** | No code activity, critical bug | Project viability |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Actionable Insight |
|-------|----------|------------------|
| **Multi-agent orchestration as primitive** | OpenClaw `sessions_await`, CoPaw inter-agent confusion, PicoClaw Phase 2 roadmap | Design for sub-agent lifecycle management early; blocking vs. async execution models diverging |
| **Provider auth as systemic risk** | 5+ projects with OAuth/token regressions same week | Invest in test matrices across provider auth flows; consider vault-based credential management (OneCLI pattern) |
| **Local-first AI demand surge** | Ollama issues in 6 projects, llama.cpp strict mode fixes | Assume 30-50% of users will run local models; design for context window variability |
| **Channel reliability > feature breadth** | Discord/Matrix stability dominates issue trackers | Prioritize WebSocket resilience, backoff strategies, and graceful degradation over new channel additions |
| **Cryptographic verification emerging** | ZeroClaw HMAC receipts (#4921), IronClaw WASM schema hardening | Prepare for "provable execution" requirements in enterprise/regulated deployments |
| **Configuration as liability** | LobsterAI #1006, PicoClaw #1941, CoPaw state fragility | Separate user config from system state; implement merge semantics, not template overwrite |
| **Windows/Linux parity as adoption gate** | OpenClaw #75 dominance, NullClaw #739, PicoClaw #2080 | Treat desktop OS support as tier-1 from project inception, not retrofit |
| **Privacy-preserving channels rising** | Signal (#1121 NanoClaw), peer-to-peer (#1516), Matrix E2EE | Privacy-conscious users are early adopters; Signal integration is competitive differentiator |

### Strategic Implications

1. **Reference implementation burden**: OpenClaw's scale creates ecosystem dependency—its auth regressions cascade to downstream projects (LobsterAI's OpenClaw gateway fixes in #894, #997)

2. **WASM security vs. complexity tradeoff**: IronClaw's sandboxing promises safety but complicates stateful integrations; observe if market prioritizes security over UX friction

3. **Regional platform divergence**: WeChat (NullClaw #714, LobsterAI #986), DingTalk/Feishu (CoPaw, LobsterAI) vs. Discord/Telegram (Western projects) suggests need for pluggable channel architectures

4. **Credential management consolidation**: OneCLI Agent Vault (NanoClaw), HMAC receipts (ZeroClaw), and environment variable hardening (NanoBot) signal move toward enterprise security standards

---

*Report generated from 2026-03-29 community digests across 13 active open-source personal AI assistant projects.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-03-29

## 1. Today's Overview

NanoBot shows **high development velocity** with 38 PRs and 21 issues updated in the last 24 hours, indicating an active community and rapid iteration cycle. The project is currently on **v0.1.4.post6** with no new release today, suggesting maintainers are accumulating fixes for a future version. Activity is heavily concentrated on **channel integrations** (Microsoft Teams, iMessage, WhatsApp, Telegram) and **provider stability** (Kimi, Ollama, Minimax, GitHub Copilot). Notably, 6 PRs were closed/merged today, including critical fixes for agent loop reliability and environment variable handling. The community is grappling with **regressions in the latest post6 build**, particularly around markdown rendering and provider authentication.

---

## 2. Releases

**No new releases** (v0.1.4.post6 remains current).

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Description | Impact |
|:---|:---|:---|
| [#2580](https://github.com/HKUDS/nanobot/pull/2580) | Repair empty final responses before falling back | Eliminates "I've completed processing but have no response to give." fallback by adding retry logic |
| [#2577](https://github.com/HKUDS/nanobot/pull/2577) | Send Telegram tool hints silently with code markers | Cleaner UX: tool hints now `disable_notification=True` with literal code markers |
| [#2425](https://github.com/HKUDS/nanobot/pull/2425) | Setup wizard + environment variable handling | Major onboarding improvement: browser-based config for deployments |
| [#2265](https://github.com/HKUDS/nanobot/pull/2265) | Harden env ref save/restore semantics | Prevents secret leakage in configs; change-aware placeholder restoration |
| [#2212](https://github.com/HKUDS/nanobot/pull/2212) | Runtime secret refs in tools/providers | Enables `{env:VAR}` syntax throughout config |
| [#2420](https://github.com/HKUDS/nanobot/pull/2420) | Make heartbeat runs ephemeral | Fixes token growth in scheduled jobs without breaking conversation state |
| [#2081](https://github.com/HKUDS/nanobot/pull/2081) | Microsoft Teams channel (superseded) | Closed in favor of [#2600](https://github.com/HKUDS/nanobot/pull/2600) |

**Key Advancements:**
- **Deployment UX**: Setup wizard + env var hardening makes NanoBot significantly more production-ready
- **Agent reliability**: Empty response repair and ephemeral heartbeats address core robustness issues
- **Channel polish**: Telegram tool hints and link preview controls improve messaging UX

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#2570](https://github.com/HKUDS/nanobot/issues/2570) Ollama 404/gateway port issue | 5 comments | **Critical local LLM breakage** — gateway not binding to 18790, blocking Raspberry Pi/edge deployments |
| [#2240](https://github.com/HKUDS/nanobot/issues/2240) Toggle thinking mode | 5 comments, closed | User demand for reasoning control surfaced; merged but indicates UX tension around "thinking" visibility |
| [#2590](https://github.com/HKUDS/nanobot/issues/2590) Minimax provider regression | 2 comments | **Post6 regression** — built-in provider broke, API base URL handling changed |
| [#2568](https://github.com/HKUDS/nanobot/issues/2568) Telegram markdown unreliable | 2 comments | **Post6 regression** — intermittent markdown parsing suggests async/streaming race condition |
| [#2572](https://github.com/HKUDS/nanobot/issues/2572) Search provider criteria discussion | 2 comments | Community asking for governance clarity before more provider PRs |

**Underlying Needs:**
- **Stability over features**: Multiple "worked in post5, broken in post6" reports
- **Local-first LLM support**: Ollama issues indicate strong self-hosting user base
- **Predictable channel behavior**: Telegram users need reliable formatting

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#2579](https://github.com/HKUDS/nanobot/issues/2579) Kimi K2.5 thinking mode crashes on tool calls | Open | [#2598](https://github.com/HKUDS/nanobot/pull/2598) ready |
| 🔴 **Critical** | [#2570](https://github.com/HKUDS/nanobot/issues/2570) Ollama local 404/gateway port binding | Open | None |
| 🟡 **High** | [#2590](https://github.com/HKUDS/nanobot/issues/2590) Minimax provider broken in post6 | Open | None |
| 🟡 **High** | [#2568](https://github.com/HKUDS/nanobot/issues/2568) Telegram markdown rendering flaky | Open | None |
| 🟡 **High** | [#2559](https://github.com/HKUDS/nanobot/issues/2559) Telegram streaming fails on long messages | Open | None |
| 🟡 **High** | [#2573](https://github.com/HKUDS/nanobot/issues/2573) GitHub Copilot login fails (OpenAI migration) | Open | None |
| 🟢 **Medium** | [#2583](https://github.com/HKUDS/nanobot/issues/2583) Off-by-one error in `_find_legal_start` | Open | [#2597](https://github.com/HKUDS/nanobot/pull/2597) ready |
| 🟢 **Medium** | [#2591](https://github.com/HKUDS/nanobot/issues/2591) CLI terminal escape sequence spam | Open | None |
| 🟢 **Medium** | [#1681](https://github.com/HKUDS/nanobot/issues/1681) Matrix E2EE auth failures | Open | [#2596](https://github.com/HKUDS/nanobot/pull/2596) ready |

**Pattern**: v0.1.4.post6 introduced **multiple provider regressions** (Minimax, GitHub Copilot, Kimi) and **Telegram formatting issues**, suggesting insufficient integration testing before release.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version |
|:---|:---|:---|
| **Microsoft Teams channel** | [#2600](https://github.com/HKUDS/nanobot/pull/2600) | **High** — rebuilt on nightly, clean commit history |
| **iMessage integration** | [#2539](https://github.com/HKUDS/nanobot/pull/2539) | **Medium** — depends on Photon dependency acceptance |
| **WhatsApp media + voice** | [#2010](https://github.com/HKUDS/nanobot/pull/2010), [#2152](https://github.com/HKUDS/nanobot/issues/2152) | **Medium** — community skill exists, needs core integration |
| **Pluggable memory framework** | [#2515](https://github.com/HKUDS/nanobot/pull/2515) | **Medium** — Mem0/Graphiti/Memobase backends, significant refactor |
| **Heartbeat reasoning decoupling** | [#1443](https://github.com/HKUDS/nanobot/pull/1443) | **Medium** — silent reasoning by default, opt-in verbose |
| **Subagent configuration docs** | [#2599](https://github.com/HKUDS/nanobot/issues/2599) | **High** — documentation gap, easy fix |
| **Cron command execution** | [#2309](https://github.com/HKUDS/nanobot/issues/2309) | **Medium** — system_event exists, needs wiring |

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---|
| **"It worked before" regressions** | Minimax, Telegram markdown, Kimi thinking | High |
| **Local LLM setup friction** | Ollama 404, port binding, gateway confusion | High |
| **Documentation gaps** | Subagent config, tool calling, Home Assistant integration | Medium |
| **CLI/terminal UX** | Escape sequence spam, thinking spinner noise | Low-Medium |

### Use Cases Emerging
- **Home automation**: [#2588](https://github.com/HKUDS/nanobot/issues/2588) — users comparing to OpenClaw, want seamless Home Assistant tool use
- **Edge/Pi deployment**: [#2570](https://github.com/HKUDS/nanobot/issues/2570) — lightweight local LLM on constrained hardware
- **Multi-channel ops**: Teams + Telegram + WhatsApp simultaneously for business

### Satisfaction Signals
- Active skill sharing (Fish Audio WhatsApp voice)
- Willingness to patch/rebuild (Microsoft Teams contributor persistence)
- Detailed bug reports with logs/screenshots

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1121](https://github.com/HKUDS/nanobot/issues/1121) Fallback models not triggered on timeout | 33 days | **High** — core reliability | Maintainer triage; affects production resilience |
| [#2152](https://github.com/HKUDS/nanobot/issues/2152) Native WhatsApp voice (STT+TTS) | 12 days | Medium | Evaluate [#2010](https://github.com/HKUDS/nanobot/pull/2010) vs. community skill for merge |
| [#1195](https://github.com/HKUDS/nanobot/pull/1195) Telegram forum threads | 32 days | Low | Rebase or close; may be superseded by other Telegram PRs |
| [#1443](https://github.com/HKUDS/nanobot/pull/1443) Heartbeat reasoning decoupling | 27 days | Medium | Review for merge — addresses [#2582](https://github.com/HKUDS/nanobot/issues/2582) complaints |

---

**Project Health Assessment**: 🟡 **Active but unstable** — High velocity with quality control gaps. Post6 release introduced multiple regressions. Strong community contribution (Teams, iMessage, memory framework) but needs maintainer bandwidth for review and stabilization before next release.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-03-29

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 50 issues and 50 PRs updated in the last 24 hours, split evenly between open/active and closed/merged items. No new release was cut today, suggesting the project is in an active development phase rather than stabilization. The community is particularly engaged around **Matrix channel reliability**, **memory system stability**, and **provider configuration documentation**. A significant theme emerging is **security hardening** (HMAC receipts, SSRF bypass controls) alongside **developer experience improvements** (hot config reload, secret management CLI). The 1:1 ratio of opened-to-closed items indicates healthy issue turnover without backlog accumulation.

---

## 2. Releases

**No new releases** (v0.6.66 remains latest).

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#4921](https://github.com/zeroclaw-labs/zeroclaw/pull/4921) | singlerider | **HMAC tool execution receipts** — cryptographic proof of tool execution to detect LLM hallucinations | Security foundation for agent trust |
| [#4937](https://github.com/zeroclaw-labs/zeroclaw/pull/4937) | ninenox | **Config key unification** — accepts `[channels.xxx]` as primary TOML key with `[channels_config.xxx]` alias | Fixes widespread config confusion; all README examples now work |
| [#4527](https://github.com/zeroclaw-labs/zeroclaw/pull/4527) | theredspoon | **Calendar-driven no-show detection** — `CalendarPoller` with configurable triggers | New SOP automation capability |
| [#4493](https://github.com/zeroclaw-labs/zeroclaw/pull/4493) | theredspoon | **Message delivery hooks** — `fire_message_sent` hook after successful channel delivery | Extensibility for integrations |
| [#4507](https://github.com/zeroclaw-labs/zeroclaw/pull/4507) | theredspoon | **Knowledge graph client relationships** — `Client`, `Contact`, `Interaction` nodes | CRM/agent memory use cases |
| [#4504](https://github.com/zeroclaw-labs/zeroclaw/pull/4504) | theredspoon | **Channel room management API** — `create_room()` and `invite_user()` for Matrix | Programmatic channel orchestration |
| [#4314](https://github.com/zeroclaw-labs/zeroclaw/pull/4314) | theredspoon | **Slack transcription centralization** — migrated to `TranscriptionManager` | Consistent provider selection, size limits |

**Key Advancement:** The HMAC receipts feature ([PR #4921](https://github.com/zeroclaw-labs/zeroclaw/pull/4921)) addresses a fundamental LLM reliability problem—agents claiming false tool execution—with cryptographic verification.

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

| Issue | Comments | 👍 | Topic | Underlying Need |
|:---|:---:|:---:|:---|:---|
| [#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) | 9 | 2 | **Matrix friction tracker** — E2EE OTK retry loops, thread context loss | **Enterprise Matrix adoption** requires production-grade E2EE and conversation persistence; competing PRs indicate community investment |
| [#4804](https://github.com/zeroclaw-labs/zeroclaw/issues/4804) | 5 | 0 | Matrix thread replies lack conversation context | Thread-aware UX for multi-turn interactions |
| [#4863](https://github.com/zeroclaw-labs/zeroclaw/issues/4863) | 4 | 0 | OpenAI Codex integration fails, missing docs | **Provider onboarding friction** — new models need validated config patterns |
| [#3513](https://github.com/zeroclaw-labs/zeroclaw/issues/3513) | 4 | 1 | Agent chat sends multiple messages | Response consolidation for professional UX |
| [#4810](https://github.com/zeroclaw-labs/zeroclaw/issues/4810) | 3 | 0 | History pruner breaks tool_use/tool_result pairs | **Anthropic API compatibility** — structural message integrity |

### Analysis
The **Matrix ecosystem** dominates community attention (3 of top 5 issues), reflecting either: (a) Matrix being a primary deployment target for privacy-conscious users, or (b) architectural instability in the Matrix channel implementation. The "friction tracker" umbrella issue suggests **coordinated community effort** to stabilize this channel.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Description |
|:---|:---|:---|:---|:---|
| **S1** — Workflow blocked | [#4851](https://github.com/zeroclaw-labs/zeroclaw/issues/4851) | OPEN | [#4941](https://github.com/zeroclaw-labs/zeroclaw/pull/4941) | GitHub Copilot provider undocumented — **fix in review** |
| **S1** — Workflow blocked | [#4946](https://github.com/zeroclaw-labs/zeroclaw/issues/4946) | OPEN | — | `rumqttc` missing from v0.6.66 requirements — **build breakage** |
| **S1** — Workflow blocked | [#4808](https://github.com/zeroclaw-labs/zeroclaw/issues/4808) | CLOSED | — | Discord image handling regression — fixed |
| **S1** — Workflow blocked | [#4644](https://github.com/zeroclaw-labs/zeroclaw/issues/4644) | CLOSED | — | Web chat memory loss — fixed |
| **S1** — Workflow blocked | [#4296](https://github.com/zeroclaw-labs/zeroclaw/issues/4296) | CLOSED | — | Custom OpenAI provider error post-0.5.6 — fixed |
| **S2** — Degraded behavior | [#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) | OPEN | See tracker | Matrix E2EE/OTK retry loops — **active development** |
| **S2** — Degraded behavior | [#4863](https://github.com/zeroclaw-labs/zeroclaw/issues/4863) | OPEN | — | OpenAI Codex rendering failures |
| **S2** — Degraded behavior | [#4810](https://github.com/zeroclaw-labs/zeroclaw/issues/4810) | CLOSED | — | History pruner Anthropic 400 errors — fixed |
| **S2** — Degraded behavior | [#4916](https://github.com/zeroclaw-labs/zeroclaw/issues/4916) | OPEN | [#4936](https://github.com/zeroclaw-labs/zeroclaw/pull/4936) | `auto_save` memory snowball — **fix in review** |
| **S2** — Degraded behavior | [#4918](https://github.com/zeroclaw-labs/zeroclaw/issues/4918) | OPEN | — | Dashboard session slice error |

**Critical Stability Issue:** [#4916](https://github.com/zeroclaw-labs/zeroclaw/issues/4916) describes a **recursive memory explosion** where `[Memory context]` blobs get re-saved, creating exponential growth. Fix PR [#4936](https://github.com/zeroclaw-labs/zeroclaw/pull/4936) is under review.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Release | Rationale |
|:---|:---|:---:|:---|
| **HMAC tool execution receipts** | [#4830](https://github.com/zeroclaw-labs/zeroclaw/issues/4830) / [#4943](https://github.com/zeroclaw-labs/zeroclaw/pull/4943) | **HIGH** | PR open, security-critical, addresses hallucination detection |
| **SSRF bypass for private hosts** (`http_request`) | [#4868](https://github.com/zeroclaw-labs/zeroclaw/issues/4868) / [#4945](https://github.com/zeroclaw-labs/zeroclaw/pull/4945) | **HIGH** | PR open, mirrors existing `web_fetch` pattern, enables home automation use cases |
| **Secret management CLI** | [#4920](https://github.com/zeroclaw-labs/zeroclaw/pull/4920) | **MEDIUM** | PR open, large surface area (proc macro + CLI), may need iteration |
| **Markdown memory cleanup** | [#4829](https://github.com/zeroclaw-labs/zeroclaw/issues/4829) | **MEDIUM** | Storage-constrained deployment need, no PR yet |
| **Multi-model fallback documentation** | [#4872](https://github.com/zeroclaw-labs/zeroclaw/issues/4872) | **LOW** | Documentation-only, lower priority than code features |
| **Raspberry Pi deployment guide** | [#4704](https://github.com/zeroclaw-labs/zeroclaw/issues/4704) | **LOW** | Documentation, build profile workaround exists |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Configuration discovery** | Copilot, Codex, custom providers all lack docs | HIGH |
| **Memory system instability** | #4916 snowball, #4644 web amnesia, #4829 unbounded growth | HIGH |
| **Matrix production readiness** | E2EE failures, thread context loss, daemon restart amnesia | HIGH |
| **Build/dependency issues** | #4946 missing `rumqttc`, #4704 Pi OOM kills | MEDIUM |

### Positive Signals
- **Tool system extensibility** praised (MCP, custom tools)
- **Multi-channel architecture** valued (Matrix, Discord, Slack, Feishu, MQTT)
- **Local-first deployment** on low-cost hardware remains differentiator

### Use Case Patterns
1. **Home automation/self-hosting** — Pi deployment, private network access (#4868)
2. **Enterprise team collaboration** — Matrix E2EE, thread persistence
3. **AI-assisted development** — Codex, Copilot integration attempts

---

## 8. Backlog Watch

| Issue | Age | Problem | Action Needed |
|:---|:---:|:---|:---|
| [#4656](https://github.com/zeroclaw-labs/zeroclaw/issues/4656) | 4 days | CI clippy skips optional features — Matrix warnings undetected | Maintainer review of [#4940](https://github.com/zeroclaw-labs/zeroclaw/pull/4940) |
| [#4646](https://github.com/zeroclaw-labs/zeroclaw/issues/4646) | 4 days | `stream=true` for custom providers undocumented | [#4942](https://github.com/zeroclaw-labs/zeroclaw/pull/4942) ready for merge |
| [#4704](https://github.com/zeroclaw-labs/zeroclaw/issues/4704) | 4 days | Raspberry Pi deployment guide — 3 👍 indicates demand | Documentation PR welcome |
| [#4832](https://github.com/zeroclaw-labs/zeroclaw/issues/4832) | 2 days | LeakDetector false positives on legitimate filenames | Needs triage — config toggle or heuristic refinement? |

**Maintainer Attention Recommended:** The CI lint gap ([#4656](https://github.com/zeroclaw-labs/zeroclaw/issues/4656)) has a ready fix ([#4940](https://github.com/zeroclaw-labs/zeroclaw/pull/4940)) that would prevent Matrix channel regressions from slipping into releases.

---

*Digest generated from 50 issues and 50 PRs updated 2026-03-28 to 2026-03-29.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-03-29

## 1. Today's Overview

PicoClaw shows **high development velocity** with 89 PRs and 38 issues updated in the last 24 hours, indicating an active pre-release stabilization period for v0.2.4. The project is experiencing a **security hardening phase** with multiple merged PRs addressing sandbox escapes, permission tightening, and authentication gaps. Community engagement is strong with 18-comment threads on configuration bugs, though the high open PR count (35) suggests potential maintainer bandwidth constraints. The nightly build pipeline is active with daily automated releases. Cross-platform support expansion (OpenWrt, Windows, Termux) is emerging as a key theme alongside core agent architecture improvements.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| [v0.2.4-nightly.20260328.60d7ec20](https://github.com/sipeed/picoclaw/compare/v0.2.4...main) | Nightly | Automated build from main branch; **marked unstable** — use with caution in production |

**No stable release** — v0.2.4 remains in nightly cycle. Changelog indicates ongoing work toward stable release.

---

## 3. Project Progress

### Merged/Closed PRs Today (Selected)

| PR | Author | Impact |
|----|--------|--------|
| [#2124](https://github.com/sipeed/picoclaw/pull/2124) | champly | **WeChat reliability**: Persist context tokens to disk — fixes restart data loss |
| [#1770](https://github.com/sipeed/picoclaw/pull/1770) | acapxasyraf | **i18n**: Malay language documentation added |
| [#2130](https://github.com/sipeed/picoclaw/pull/2130) | GennKann | **OpenWrt support**: LuCI web management interface for router deployments |
| [#2118](https://github.com/sipeed/picoclaw/pull/2118) | imalasong | **Web UI fix**: Secret field persistence regression resolved |

### Key Feature Advances

- **OpenWrt ecosystem integration** — PR #2130 delivers production-ready router deployment capability with real-time monitoring dashboard
- **Security infrastructure** — Multiple authentication layers being added (PID files, bearer tokens, dashboard protection)

---

## 4. Community Hot Topics

### Highest Engagement Issues

| Issue | Comments | Core Need |
|-------|----------|-----------|
| [#1161](https://github.com/sipeed/picoclaw/issues/1161) — Ollama local model configuration | **18** | **Local AI onboarding friction** — users struggle with silent failures when connecting to Ollama; documentation gap between "starts" and "works" |
| [#2107](https://github.com/sipeed/picoclaw/issues/2107) — "Fake security" tool blocking | **14** | **Safety guard UX** — false positives in command execution blocking erode trust; users need transparency on why commands are rejected |
| [#1941](https://github.com/sipeed/picoclaw/issues/1941) — Config wipe on Telegram channel enable | **12** | **Data durability anxiety** — configuration persistence bugs are high-severity for users investing setup time |

### Underlying Pattern
**Configuration management** dominates user pain — three top issues involve config durability, local provider setup, and security policy tuning. The project would benefit from a "configuration validator" diagnostic tool.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| 🔴 **High** | [#2001](https://github.com/sipeed/picoclaw/issues/2001) — v0.2.4 idle CPU regression | **OPEN** | None identified |
| 🔴 **High** | [#2136](https://github.com/sipeed/picoclaw/issues/2136) — Flawed tool call extraction | **OPEN** | Author submitted PR, conflicts pending |
| 🟡 **Medium** | [#2105](https://github.com/sipeed/picoclaw/issues/2105) — Gateway startup failure (no PID) | **OPEN** | [#2134](https://github.com/sipeed/picoclaw/pull/2134) addresses PID management |
| 🟡 **Medium** | [#1936](https://github.com/sipeed/picoclaw/issues/1936) — Telegram failure on Termux | **OPEN** | None |
| 🟡 **Medium** | [#2052](https://github.com/sipeed/picoclaw/issues/2052) — Feishu web config broken | **OPEN** | None |
| 🟡 **Medium** | [#2080](https://github.com/sipeed/picoclaw/issues/2080) — QQ channel Windows failure | **OPEN** | None |

### Security Fixes (Merged Yesterday)
- [#1529](https://github.com/sipeed/picoclaw/issues/1529) — Public web mode now refuses when no `allowed_cidrs` configured
- [#1527](https://github.com/sipeed/picoclaw/issues/1527) — Session store permissions tightened to 0700/0600
- [#1526](https://github.com/sipeed/picoclaw/issues/1526) — Symlink escape in restricted exec patched
- [#1525](https://github.com/sipeed/picoclaw/issues/1525) — `exec.allow_remote` now defaults to `false`

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in v0.2.4+ | Rationale |
|---------|----------|----------------------|-----------|
| **Multi-agent collaboration** | [#1934](https://github.com/sipeed/picoclaw/issues/1934), [#1940](https://github.com/sipeed/picoclaw/pull/1940) | **High** | Phase 2 roadmap item; PR #1940 in active development with SubTurn integration |
| **Live task progress UI** | [#2137](https://github.com/sipeed/picoclaw/issues/2137) | **Medium** | Strong user need (silent execution anxiety); requires message edit + reaction tool infrastructure |
| **Native Telegram reactions** | [#1328](https://github.com/sipeed/picoclaw/issues/1328) | **Medium** | Merged design pattern; low-noise UX aligns with agent efficiency goals |
| **Siliconflow provider** | [#2045](https://github.com/sipeed/picoclaw/issues/2045) | **Low-Medium** | Straightforward provider addition; Chinese market relevance |
| **Discord channel name context** | [#1451](https://github.com/sipeed/picoclaw/issues/1451) | **Low** | Nice-to-have; numeric IDs functional |

### Architecture Signals
- **Agent identity/orchestration** — [#1476](https://github.com/sipeed/picoclaw/issues/1476), [#1462](https://github.com/sipeed/picoclaw/issues/1462) indicate movement toward control-plane compatibility (Paperclip, OpenClaw gateway protocol)

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Intensity |
|-------|----------|-----------|
| **Silent failures** | Ollama no-response (#1161), cron scheduling failures (#528), idle CPU with no visibility (#2001) | High — users cannot debug without logs |
| **Platform fragility** | Termux (#1936), Windows QQ (#2080), mobile hotspot + Feishu (#1437) | Medium — edge case environments underserved |
| **Security vs. usability tension** | "Fake security" blocking (#2107), exec restrictions (#1526) | Medium — power users hit guardrails |
| **Config durability fear** | Wiped config (#1941), restart-required indicators missing (#1973) | High — undermines trust in production use |

### Positive Signals
- **Local AI enthusiasm**: Strong demand for Ollama integration (#1161, 18 comments)
- **Router/edge deployment interest**: OpenWrt PR (#2130) and issue (#1132) show IoT/embedded use case growth
- **Security appreciation**: Rapid response to security disclosures (#1525-#1529)

---

## 8. Backlog Watch

### Critical PRs Needing Review

| PR | Age | Risk | Action Needed |
|----|-----|------|---------------|
| [#1460](https://github.com/sipeed/picoclaw/pull/1460) — OpenAI strict provider tool call fix | 15 days | **High** — breaks LM Studio, other strict providers | Maintainer review; conflicts with #2128? |
| [#1814](https://github.com/sipeed/picoclaw/pull/1814) — Subagent provider routing | 8 days | **High** — core agent architecture | Security review for spawn allowlist |
| [#1953](https://github.com/sipeed/picoclaw/pull/1953) — Dashboard authentication | 5 days | **Medium** — security feature | Final review for token/Cookie implementation |

### Stale Important Issues

| Issue | Age | Concern |
|-------|-----|---------|
| [#1934](https://github.com/sipeed/picoclaw/issues/1934) — Multi-agent roadmap | 6 days | Active but needs maintainer commitment for Phase 2 timeline |
| [#1489](https://github.com/sipeed/picoclaw/issues/1489) — Documentation completeness | 16 days | Config drift between code and docs; technical debt accumulator |

---

**Project Health Assessment**: 🟢 **Active/Healthy** — High velocity, responsive security practices, expanding platform support. Risk factors: 35 open PRs may indicate review bottleneck; v0.2.4 stabilization needs CPU regression (#2001) and tool extraction (#2136) resolution before stable release.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-03-29

## 1. Today's Overview

NanoClaw shows **high development velocity** with 32 PRs updated in the last 24 hours (22 open, 10 merged/closed) and 6 active issues. The project is in a **feature expansion phase** with heavy focus on new messaging channels (Discord, Signal, peer-to-peer), media handling improvements, and operational tooling. No new releases were cut today, suggesting maintainers are accumulating changes before a version bump. Security and infrastructure hardening remain active concerns, with multiple credential-proxy related PRs in flight.

---

## 2. Releases

**No new releases** — latest release remains unlisted/none. The project appears to be accumulating changes toward a future release, with significant architectural shifts (OneCLI Agent Vault migration) still in progress.

---

## 3. Project Progress

### Merged/Closed PRs Today (10 total)

| PR | Description | Impact |
|:---|:---|:---|
| [#1525](https://github.com/qwibitai/nanoclaw/pull/1525) | Add `.claude/launch.json` with dev server configs | Developer experience |
| [#1523](https://github.com/qwibitai/nanoclaw/pull/1523) | Fix Apple Container networking and `.env` mount | **macOS/Apple Silicon compatibility** |
| [#1521](https://github.com/qwibitai/nanoclaw/pull/1521) | Add local-chat channel with PWA frontend | New channel: browser-based self-hosted chat |
| [#1513](https://github.com/qwibitai/nanoclaw/pull/1513) | Add LazyLibrarian skill for book search/management | New operational skill |
| [#1508](https://github.com/qwibitai/nanoclaw/pull/1508) | Close review agent containers on draft approve/reject | **Resource leak fix** (~240MB/container) |
| [#1115](https://github.com/qwibitai/nanoclaw/pull/1115) | Self-heal stale sessions and fix IPC file permissions | **Reliability for root/non-root container setups** |
| [#1512](https://github.com/qwibitai/nanoclaw/issues/1512) *(issue, closed)* | Cherry-pick 5 upstream security/stability fixes | **Security: command injection fix** |
| [#1511](https://github.com/qwibitai/nanoclaw/issues/1511) *(issue, closed)* | Evaluate OneCLI Agent Vault as credential-proxy replacement | Architecture decision made |
| [#1510](https://github.com/qwibitai/nanoclaw/issues/1511) *(issue, closed)* | Weekly upstream & dependency review | Operations |

**Key advances:**
- **Apple Silicon support** unblocked via bridge network detection
- **Resource management** improved with container cleanup on draft resolution
- **Self-hosted chat** now possible without external services

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) — Invalid SSL cert on nanoclaw.dev | 3 comments, OPEN | **Infrastructure reliability concern** — documentation/discovery site is broken, blocking new user onboarding |
| [#1121](https://github.com/qwibitai/nanoclaw/pull/1121) — Signal channel skill | 16 days old, actively updated | **Long-running community contribution** — Signal integration highly requested for privacy-conscious users; needs maintainer review |
| [#1527](https://github.com/qwibitai/nanoclaw/pull/1527) — Room API proxy for music-gen/facebook | New, no comments yet | Enterprise/self-hosted service integration pattern |

**Underlying needs:**
- **Trust/safety**: Users want privacy-preserving channels (Signal) and secure credential handling
- **Operational visibility**: Multiple dashboard PRs (#1514, #1524) suggest users struggle to monitor agent state
- **Media-rich messaging**: WhatsApp/Telegram media handling is actively being fixed

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| **High** | [#1500](https://github.com/qwibitai/nanoclaw/issues/1500) | Gmail/Calendar OAuth tokens mounted directly in containers — prompt injection could exfiltrate credentials | **Fix in progress**: [#1520](https://github.com/qwibitai/nanoclaw/pull/1520) adds OneCLI vault migration |
| **High** | [#1522](https://github.com/qwibitai/nanoclaw/issues/1522) | WhatsApp media messages (photos, voice) inaccessible to agents — agents silently fail | **Fix ready**: [#1526](https://github.com/qwibitai/nanoclaw/pull/1526) adds media fetcher utility |
| **Medium** | [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) | nanoclaw.dev SSL certificate invalid | No fix PR identified |
| **Medium** | [#1519](https://github.com/qwibitai/nanoclaw/pull/1519) | Duplicate task runs, orphaned tasks, IPC hardening | Fix PR open, under review |
| **Low** | [#1518](https://github.com/qwibitai/nanoclaw/pull/1518) | Bot messages not stored in DB for non-self-echoing channels (Telegram, Slack, Signal, etc.) | Fix PR open |

**Stability note**: The project is accumulating **technical debt** around credential management — the upstream migration to OneCLI Agent Vault represents a breaking change that forks (like JanusD25's) must navigate.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Evidence | Likelihood in Next Release |
|:---|:---|:---|
| **OneCLI Agent Vault integration** | [#1511](https://github.com/qwibitai/nanoclaw/issues/1511), [#1520](https://github.com/qwibitai/nanoclaw/pull/1520) | **High** — architectural decision made, migration PR open |
| **Discord channel** | [#1517](https://github.com/qwibitai/nanoclaw/pull/1517) | **High** — PR open with image attachment support |
| **Peer-to-peer NanoClaw messaging** | [#1516](https://github.com/qwibitai/nanoclaw/pull/1516) | **Medium** — novel architecture, may need review cycles |
| **Group-local MCP servers** | [#1515](https://github.com/qwibitai/nanoclaw/pull/1515) | **Medium** — enables Home Assistant, custom integrations |
| **Web dashboard (official)** | [#1514](https://github.com/qwibitai/nanoclaw/pull/1514), [#1524](https://github.com/qwibitai/nanoclaw/pull/1524) | **Medium** — two competing implementations, may converge |
| **Script tasks (/add-script-tasks)** | [#1190](https://github.com/qwibitai/nanoclaw/pull/1190) | **Medium** — 12 days old, maintenance use case clear |
| **Signal channel** | [#1121](https://github.com/qwibitai/nanoclaw/pull/1121) | **Uncertain** — mature but unmerged, needs maintainer bandwidth |

---

## 7. User Feedback Summary

### Pain Points
| Issue | User Impact |
|:---|:---|
| **SSL cert failure** [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) | Cannot access documentation; poor first impression |
| **Silent media failures** [#1522](https://github.com/qwibitai/nanoclaw/issues/1522) | Agents appear "blind" to user content — breaks trust |
| **Credential security anxiety** [#1500](https://github.com/qwibitai/nanoclaw/issues/1500) | Production deployment blocked by token exposure risk |
| **Missing message history** [#1518](https://github.com/qwibitai/nanoclaw/pull/1518) | `claw watch` and debugging tools incomplete |

### Positive Signals
- Strong **community contribution** (Signal, Discord, local-chat, LazyLibrarian)
- **Apple Silicon support** being actively fixed
- **Operational tooling** maturing (dashboards, script tasks, task scheduler hardening)

### Use Cases Emerging
- **Privacy-first deployments**: Signal + local-chat + peer channels
- **Home automation**: Group-local MCP servers for Home Assistant
- **Content/media workflows**: WhatsApp/Telegram media handling, Discord image attachments
- **Enterprise/team**: Web dashboards, review agent workflows, scheduled maintenance tasks

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1121](https://github.com/qwibitai/nanoclaw/pull/1121) Signal channel | 13 days | **High** — mature PR, privacy-focused users waiting | Maintainer review/merge decision |
| [#1190](https://github.com/qwibitai/nanoclaw/pull/1190) Script tasks | 12 days | Medium — maintenance automation use case | Review or feedback on implementation |
| [#1503](https://github.com/qwibitai/nanoclaw/issues/1503) SSL cert | 1 day | **High** — public site broken | Infrastructure/ops response |
| [#1500](https://github.com/qwibitai/nanoclaw/issues/1500) OAuth security | 1 day | **High** — security boundary issue | Coordinate with #1520 for merge |

**Maintainer attention recommended**: The Signal PR (#1121) represents significant community investment and addresses a clear differentiator (privacy). The SSL issue (#1503) is a public-facing reliability problem that undermines project credibility.

---

*Digest generated from 32 PRs and 6 issues updated 2026-03-28*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-03-29

## 1. Today's Overview

NullClaw shows **strong development velocity** with 8 PRs updated in the last 24 hours against 3 active issues. The project is actively addressing Windows platform stability while expanding cross-platform features. Notably, maintainer `manelsen` dominates contributions with 6 of 8 PRs, indicating concentrated but productive leadership. No releases were cut today, suggesting the team is accumulating changes for a larger release. The 7:1 open-to-merged PR ratio indicates a review bottleneck rather than rejection risk.

---

## 2. Releases

**No new releases** — Version remains unchanged from previous release.

---

## 3. Project Progress

### Merged/Closed Today

| PR | Description | Significance |
|:---|:---|:---|
| [#741](https://github.com/nullclaw/nullclaw/pull/741) | Feature/anthropic only onboarding | **CLOSED** — Appears abandoned or superseded; no merge details provided |

### Active Development (Open PRs with Recent Activity)

| PR | Description | Status |
|:---|:---|:---|
| [#742](https://github.com/nullclaw/nullclaw/pull/742) | Fix Windows WebSocket immediate disconnects (code 1006) | **Critical fix in review** — Vendors `websocket` dependency for version control |
| [#738](https://github.com/nullclaw/nullclaw/pull/738) | Package Windows binaries as `.zip` archives | **UX improvement** — Addresses #737 naming friction |
| [#676](https://github.com/nullclaw/nullclaw/pull/676) | Debounce rapid-fire text (Telegram/Discord/CLI) | **Stability feature** — 7-day-old PR, recently updated |
| [#736](https://github.com/nullclaw/nullclaw/pull/736) | Document async login for plugins | **Developer experience** |
| [#735](https://github.com/nullclaw/nullclaw/pull/735) | Web-discovered skill installs via `.well-known` | **Ecosystem expansion** |
| [#727](https://github.com/nullclaw/nullclaw/pull/727) | Interactive multi-provider model picker | **User experience** |
| [#725](https://github.com/nullclaw/nullclaw/pull/725) | Improved CLI onboarding with unlimited model catalog | **Onboarding flow** |

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#714 WeChat Plugin Integration](https://github.com/nullclaw/nullclaw/issues/714) | **7 comments**, created 2026-03-25 | **Highest engagement** — Represents massive China/SEA market opportunity; competitor forks already implemented. Underlying need: regional platform parity for adoption |
| [#739 Windows WebSocket disconnect](https://github.com/nullclaw/nullclaw/issues/739) | 0 comments, but **fix PR #742 exists** | Platform-specific regression blocking Windows users |
| [#737 Windows binary naming](https://github.com/nullclaw/nullclaw/issues/737) | 0 comments, **fix PR #738 exists** | CLI ergonomics friction for Windows developers |

**Key Insight:** WeChat integration (#714) is the only community-driven discussion with substantive engagement, suggesting either (a) maintainer responsiveness reduces prolonged debates, or (b) community size is small but focused. The author explicitly references competitive pressure ("other OpenClaw forks"), indicating **market urgency**.

---

## 5. Bugs & Stability

| Severity | Issue | Fix Status | Details |
|:---|:---|:---|:---|
| **HIGH** | [#739](https://github.com/nullclaw/nullclaw/issues/739) Windows WebSocket 1006 disconnect | **PR #742 pending** | Complete breakage of web channel on Windows native builds; fix vendors dependency for control |
| **MEDIUM** | [#737](https://github.com/nullclaw/nullclaw/issues/737) Windows binary naming friction | **PR #738 pending** | `eget` downloads require manual rename; impacts developer onboarding |
| **LOW** (preventive) | [#676](https://github.com/nullclaw/nullclaw/pull/676) Rapid-fire message debounce | In review | Prevents spam/loop scenarios across messaging platforms |

**Platform Risk Assessment:** Windows appears to be a **second-class citizen** with two active issues affecting native usability. The WebSocket regression (#739) suggests insufficient Windows CI coverage.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Release |
|:---|:---|:---|
| **WeChat plugin support** | [#714](https://github.com/nullclaw/nullclaw/issues/714) | **HIGH** — Community demand + competitive parity; may require external contributor |
| **Web-based skill discovery** | [#735](https://github.com/nullclaw/nullclaw/pull/735) | **HIGH** — PR already open, enables skill marketplace vision |
| **Interactive model picker** | [#727](https://github.com/nullclaw/nullclaw/pull/727) | **MEDIUM-HIGH** — Multi-provider UX improvement, PR active |
| **Async plugin auth patterns** | [#736](https://github.com/nullclaw/nullclaw/pull/736) | **MEDIUM** — Documentation + pattern establishment |

**Predicted vNext Focus:** Windows stability hardening + cross-platform messaging parity (WeChat) + skill ecosystem foundation.

---

## 7. User Feedback Summary

### Pain Points
| Issue | User Impact |
|:---|:---|
| Windows WebSocket failures | **Blocking** — Complete web channel unusability on native Windows |
| `eget` naming friction | **Annoyance** — Extra manual step in standard workflow |
| Model catalog truncation | **Resolved in #725** — Previously limited discovery to 20 models |

### Use Cases Emerging
- **Enterprise/China deployment:** WeChat integration request signals B2B messaging needs
- **Skill marketplace:** Web discovery PR (#735) suggests vision beyond git-based installation
- **Multi-tenant model selection:** Interactive picker (#727) indicates sophisticated user bases with multiple provider accounts

### Satisfaction Signals
- Rapid fix response for Windows issues (same-day PRs for #737, #739)
- No stale issues with maintainer silence

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#676](https://github.com/nullclaw/nullclaw/pull/676) Debounce feature | **7 days** | Medium — Merge conflicts possible | Reviewer bandwidth; touches multiple inbound handlers |
| [#714](https://github.com/nullclaw/nullclaw/issues/714) WeChat | **4 days** | **High** — Competitor advantage growing | Maintainer decision: accept scope expansion or document rejection |
| — | — | — | No critical stale items; maintainer `manelsen` appears responsive |

**Health Indicator:** ✅ No abandoned critical issues. Review velocity is the primary bottleneck, not maintainer engagement.

---

*Digest generated from GitHub activity 2026-03-28 to 2026-03-29*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-03-29

## 1. Today's Overview

IronClaw shows **high development velocity** with 50 PRs and 9 issues updated in the last 24 hours, though no new releases were cut. The project is in active stabilization mode: 13 PRs were merged/closed against 37 remaining open, with security hardening and reliability fixes dominating the merged work. A notable **frontend architecture extraction** (PR #1725) and **staging promotion** (PR #1732) indicate preparation for a significant release. The 5:1 open-to-closed PR ratio suggests a growing review backlog that may need maintainer attention.

---

## 2. Releases

**No new releases** — version unchanged.

---

## 3. Project Progress

### Merged/Closed PRs (13 total, key highlights)

| PR | Description | Impact |
|:---|:---|:---|
| [#1650](https://github.com/nearai/ironclaw/pull/1650) | **fix(routines): complete full_job execution reliability overhaul** — fixes self-dialogue loops, output capture failures, and silent job losses | Critical reliability fix for autonomous job execution |
| [#1702](https://github.com/nearai/ironclaw/issues/1702) *(closed as fixed)* | Database error details leaked to API clients — HIGH severity security fix | Prevents information disclosure attacks |
| [#1443](https://github.com/nearai/ironclaw/issues/1443) | Legacy OAuth state validation tightened | Security hardening |
| [#1303](https://github.com/nearai/ironclaw/issues/1303) | WASM tools now properly expose typed schemas instead of permissive `{}` | Improves LLM tool reliability |
| [#1444](https://github.com/nearai/ironclaw/issues/1444) | State parameter rewriting string fallback hardened | Defensive programming improvement |

**Architecture evolution:** PR [#1557](https://github.com/nearai/ironclaw/pull/1557) (Unified Thread-Capability-CodeAct execution engine v2) and PR [#1725](https://github.com/nearai/ironclaw/pull/1725) (frontend crate extraction with widget system) represent major structural investments for extensibility.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#1676](https://github.com/nearai/ironclaw/issues/1676) — HTTP tool routine errors, Telegram bot polling failures | **10 comments**, 0 👍 | **Highest engagement** — user frustration with tool reliability for channel integrations; comparison to "openclaw" suggests competitive pressure. Underlying need: robust, well-documented channel polling mechanisms |
| [#1673](https://github.com/nearai/ironclaw/issues/1673) — Feishu/Lark channel stuck in "Awaiting Pairing" | 1 comment, 1 👍 | Enterprise messaging integration pain point; pairing flow UX gap |
| [#1119](https://github.com/nearai/ironclaw/issues/1119) — Unify configuration sources before hot-reload | 1 comment | P2 infrastructure debt blocking multiple features (#86, channel enable/disable) |
| [#1350](https://github.com/nearai/ironclaw/issues/1350) — Hot-reload LLM provider without restart | 0 comments, 1 👍 | UX expectation mismatch; users expect immediate provider switching |

**Pattern:** Channel integrations (Telegram, Feishu/Lark, Discord in PR #944) are high-friction areas where host-WASM boundary complexity surfaces.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---|
| **HIGH** | [#1702](https://github.com/nearai/ironclaw/issues/1702) Database error details leaked to API | **CLOSED** | [#1719](https://github.com/nearai/ironclaw/pull/1719) — API response sanitization |
| **HIGH** (implicit) | [#1676](https://github.com/nearai/ironclaw/issues/1676) HTTP tool routine failures, Telegram polling broken | **OPEN**, active discussion | None linked; needs investigation |
| **MEDIUM** | [#1443](https://github.com/nearai/ironclaw/issues/1443) Loose OAuth state validation | **CLOSED** | Merged |
| **MEDIUM** | [#1303](https://github.com/nearai/ironclaw/issues/1303) WASM permissive schema exposure | **CLOSED** | Merged |
| **MEDIUM** | [#1673](https://github.com/nearai/ironclaw/issues/1673) Feishu/Lark pairing state machine stuck | **OPEN** | None linked |

**Security posture improving:** Two HIGH/MEDIUM security issues closed via staging CI automation. The remaining [#1676](https://github.com/nearai/ironclaw/issues/1676) Telegram/http tool issue represents the most visible stability risk.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Release |
|:---|:---|:---|
| **Configuration hot-reload** | [#1119](https://github.com/nearai/ironclaw/issues/1119) | High — P2 priority, blocks other features |
| **LLM provider hot-reload** | [#1350](https://github.com/nearai/ironclaw/issues/1350) | Medium — depends on #1119 |
| **pass@k / pass^k metrics** | [#1731](https://github.com/nearai/ironclaw/issues/1731) | Medium — evaluation infrastructure improvement |
| **Slack Socket Mode** | [#1549](https://github.com/nearai/ironclaw/pull/1549) | Medium — NAT-friendly connectivity, large PR |
| **Discord Gateway (WASM)** | [#944](https://github.com/nearai/ironclaw/pull/944) | Medium — long-running, needs final review |
| **Frontend widget system** | [#1725](https://github.com/nearai/ironclaw/pull/1725) | **High** — merged to staging, enables customization |
| **Unified execution engine v2** | [#1557](https://github.com/nearai/ironclaw/pull/1557) | Lower — parallel development, needs acceptance tests |

**Prediction:** The staging promotion (#1732) likely bundles reliability fixes (#1650), security patches (#1719), and frontend extraction (#1725) for imminent release.

---

## 7. User Feedback Summary

### Pain Points
| Source | Issue | Sentiment |
|:---|:---|:---|
| @jamieduk in [#1676](https://github.com/nearai/ironclaw/issues/1676) | "trying to pair telegram bot...still fails due to tool issue" — explicit comparison to competitor "openclaw" | **Frustrated** — repeated attempts, regression perception |
| @sunglow666 in [#1673](https://github.com/nearai/ironclaw/issues/1673) | Feishu pairing "indefinitely" stuck, no pairing code prompt | **Blocked** — enterprise deployment barrier |
| @italic-jinxin in [#1350](https://github.com/nearai/ironclaw/issues/1350) | LLM provider changes require restart — "poor UX" | **Expectation gap** — modern SaaS behavior expected |

### Positive Signals
- Staging CI automation catching security issues pre-merge (#1702, #1443, #1444)
- Active security investment: unified sensitive path protection (#1713), credential pattern blocking (#1675)

### Use Case Tension
Users want IronClaw as **always-on, multi-channel autonomous agent** — but channel integrations (Telegram, Feishu, Discord, Slack) require careful host-WASM boundary design that creates friction. The "WASM-first" architecture promises portability but complicates stateful connections (WebSocket polling, OAuth flows).

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1119](https://github.com/nearai/ironclaw/issues/1119) Configuration unification | 16 days | Blocks hot-reload, channel management | Maintainer prioritization decision |
| [#944](https://github.com/nearai/ironclaw/pull/944) Discord Gateway WASM | 18 days | Large feature, community contribution | Final review, merge or feedback |
| [#1549](https://github.com/nearai/ironclaw/pull/1549) Slack Socket Mode | 8 days | Enterprise connectivity, NAT-friendly | Review bandwidth |
| [#1243](https://github.com/nearai/ironclaw/pull/1243) Per-job MCP server filtering | 13 days | Security/isolation feature | Review |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) Aliyun Coding Plan | 9 days | China-market LLM provider | Review |

**Concern:** 37 open PRs with 13 merged suggests review throughput constraints. The XL-sized architectural PRs (#1557, #1723, #1725) consume significant review capacity, potentially starving smaller fixes.

---

*Digest generated from GitHub activity 2026-03-28 to 2026-03-29. All links: https://github.com/nearai/ironclaw*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-03-29

## 1. Today's Overview

LobsterAI shows **high development velocity** with 18 PRs updated in 24 hours (12 merged/closed, 6 open) and steady issue triage (3 open, 3 closed). The project released **version 2026.3.29** featuring UX refinements in the cowork module and critical log export fixes. Core focus areas include **MCP protocol stability**, **OpenClaw gateway reliability**, and **internationalization completeness**. The maintainer team (led by @liuzhq1986) is actively merging community contributions, with 4 PRs from external contributors in the pipeline. No critical security issues detected; stability concerns center on configuration persistence and gateway crash loops.

---

## 2. Releases

### [2026.3.29](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.3.29)

| Change | Author | PR |
|--------|--------|-----|
| **feat(cowork)**: `AskUserQuestion` plugin — remove confirmation dialog, enable structured user interaction | @liuzhq1986 | [#942](https://github.com/netease-youdao/LobsterAI/pull/942) |
| **refactor(cowork)**: Rebuild message navigation as mini-track style | @liuzhq1986 | [#988](https://github.com/netease-youdao/LobsterAI/pull/988) |
| **fix(log)**: Fix log export hang and "reply was never sent" error | — | — |

**Migration Notes**: The message navigation refactor (#988) changes cowork UI layout; users with custom CSS themes may need adjustments. No breaking API changes.

---

## 3. Project Progress

### Merged/Closed PRs (12 items)

| PR | Author | Impact |
|----|--------|--------|
| [#1004](https://github.com/netease-youdao/LobsterAI/pull/1004) fix: try to fix mcp & ask question | @liuzhq1986 | MCP protocol stability |
| [#1002](https://github.com/netease-youdao/LobsterAI/pull/1002) fix(cowork): Remove McpBridgeServer secret auth | @liuzhq1986 | Eliminates 401 errors on app restart by hardcoding `local` secret |
| [#894](https://github.com/netease-youdao/LobsterAI/pull/894) fix(openclaw): Fix model name loss & gateway infinite restart | @Aoxiang-001 | **Critical stability fix** — resolves cascading crash loop |
| [#851](https://github.com/netease-youdao/LobsterAI/pull/851) fix(renderer): Fix attachments disappearing on task switch | @johnnyhwa | UX bugfix for file uploads |
| [#1000](https://github.com/netease-youdao/LobsterAI/pull/1000) Release/2026.03.27 | @liuzhq1986 | Release management |
| [#997](https://github.com/netease-youdao/LobsterAI/pull/997) fix(openclaw): Exclude stream=error events from ActiveTurn rebuild | @liuzhq1986 | Fixes "still running" session errors |
| [#995](https://github.com/netease-youdao/LobsterAI/pull/995) optimize: Advanced email configuration | @fisherdaddy | Email integration UX |
| [#993](https://github.com/netease-youdao/LobsterAI/pull/993) [#992](https://github.com/netease-youdao/LobsterAI/pull/992) fix(cron): Prevent gateway crash during scheduled tasks | @nmgwddj | **Stability** — fixes SIGUSR1-triggered restarts |
| [#994](https://github.com/netease-youdao/LobsterAI/pull/994) [#984](https://github.com/netease-youdao/LobsterAI/pull/984) feat(im): Migrate xiaomifeng to OpenClaw plugin | @nmgwddj | Platform unification (NetEase Bee IM) |
| [#767](https://github.com/netease-youdao/LobsterAI/pull/767) feat: AI response timeout detection & error classification | @gongzhi-netease | Reliability enhancement with 60s first-response timeout |

**Key Advances**: OpenClaw gateway stability significantly improved; IM platform migration to plugin architecture completed; timeout handling now production-ready.

---

## 4. Community Hot Topics

| Rank | Item | Activity | Analysis |
|------|------|----------|----------|
| 1 | [#986](https://github.com/netease-youdao/LobsterAI/issues/986) WeChat replies not synchronized with client | 1 comment, open | **Core UX pain**: Batch-sending after full generation creates poor perceived latency. Users want streaming/progressive delivery. Signals need for real-time message flushing in WeChat channel adapter. |
| 2 | [#1005](https://github.com/netease-youdao/LobsterAI/issues/1005) Feishu streaming config not persisting | 1 comment, **closed** | Configuration persistence is **systemic issue** — closed as duplicate of #1006 but reveals user frustration with template-overwrite behavior. |
| 3 | [#1001](https://github.com/netease-youdao/LobsterAI/pull/1001) Hotfix: Add SSE & streaming HTTP MCP support | Open | **High community demand** — MCP transport diversity (beyond stdio) is blocking adoption. PR ready for review. |

**Underlying Needs**: 
- **Real-time UX**: Users expect streaming responses across all IM platforms, not just web client
- **Configuration sovereignty**: Template regeneration is too aggressive; users need merge/patch semantics
- **MCP ecosystem maturity**: SSE/HTTP transports essential for cloud-hosted MCP servers

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| 🔴 **Critical** | [#859](https://github.com/netease-youdao/LobsterAI/issues/859) Gateway infinite crash loop on invalid config | **Closed** | [#894](https://github.com/netease-youdao/LobsterAI/pull/894) |
| 🔴 **Critical** | [#858](https://github.com/netease-youdao/LobsterAI/issues/858) Model name field data loss | **Closed** | [#894](https://github.com/netease-youdao/LobsterAI/pull/894) |
| 🟡 **High** | [#1006](https://github.com/netease-youdao/LobsterAI/issues/1006) Config/workspace files reset on restart | **Open** | None — needs architectural decision |
| 🟡 **High** | [#993](https://github.com/netease-youdao/LobsterAI/issues/993)/[#992](https://github.com/netease-youdao/LobsterAI/pull/992) Gateway crash during cron tasks | **Fixed** | [#993](https://github.com/netease-youdao/LobsterAI/pull/993) |
| 🟡 **High** | [#1003](https://github.com/netease-youdao/LobsterAI/issues/1003) Notion MCP environment variables not passed | **Open** | [#1004](https://github.com/netease-youdao/LobsterAI/pull/1004) attempted fix |
| 🟢 **Medium** | [#986](https://github.com/netease-youdao/LobsterAI/issues/986) WeChat async reply batching | **Open** | None |

**Regression Risk**: The configuration reset issue (#1006) is **unfixed and actively reported** — users currently rely on cron workarounds. This is the top stability blocker.

---

## 6. Feature Requests & Roadmap Signals

| PR/Issue | Feature | Likelihood in Next Release |
|----------|---------|---------------------------|
| [#999](https://github.com/netease-youdao/LobsterAI/pull/999) Cmd+K command palette | **High** — Modular, complete implementation, follows modern UX patterns |
| [#998](https://github.com/netease-youdao/LobsterAI/pull/998) Floating toolbar on text selection | **High** — Complementary to #999, addresses core interaction friction |
| [#1001](https://github.com/netease-youdao/LobsterAI/pull/1001) SSE/streaming HTTP MCP support | **Medium-High** — Blocks cloud MCP adoption; community PR ready |
| [#991](https://github.com/netease-youdao/LobsterAI/pull/991) Preset agent i18n | **Medium** — Polish item, depends on release timing |
| [#996](https://github.com/netease-youdao/LobsterAI/pull/996) Agent skill selector i18n fix | **Medium** — Bugfix, likely to merge |
| [#990](https://github.com/netease-youdao/LobsterAI/pull/990) Delete confirmation dialog + i18n | **Medium** — UX safety improvement |

**Predicted v2026.4.x themes**: Command-driven interface (#999), MCP transport expansion (#1001), and configuration persistence architecture (#1006).

---

## 7. User Feedback Summary

### Pain Points
| Issue | Frequency | User Impact |
|-------|-----------|-------------|
| Configuration loss on restart | **Repeated reports** (#1005, #1006) | Forces cron workarounds, erodes trust |
| WeChat streaming/batching | Reported (#986) | "Terrible experience," long wait then message flood |
| Notion MCP 401 errors | Reported (#1003) | Integration completely non-functional |
| Gateway crash loops | Fixed but was severe | Required manual intervention, 10+ minute outages |

### Positive Signals
- **Active maintainer response**: Issues #858/#859 closed within 3 days with comprehensive fixes
- **Plugin architecture maturing**: Xiaomifeng migration shows platform extensibility working
- **Timeout handling**: #767 addresses "long-running silent failures" — previously unreported but likely widespread

### Use Cases Emerging
- **Multi-tenant deployments**: Config persistence needs suggest users running LobsterAI in containerized/restart-heavy environments
- **Enterprise IM integration**: Feishu, WeChat, WeCom issues dominate — clear enterprise adoption signal

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#1006](https://github.com/netease-youdao/LobsterAI/issues/1006) Config persistence | 1 day | **High** — Active user pain, no PR | Maintainer decision on template vs. merge strategy |
| [#1003](https://github.com/netease-youdao/LobsterAI/issues/1003) Notion MCP env vars | 1 day | Medium — Integration broken | Verify #1004 fix or escalate to MCP Bridge owner |
| [#986](https://github.com/netease-youdao/LobsterAI/issues/986) WeChat streaming | 2 days | Medium — UX degradation | Channel adapter architecture review |
| [#999](https://github.com/netease-youdao/LobsterAI/pull/999) Cmd+K | 1 day | Low — Feature complete | Code review for merge |
| [#998](https://github.com/netease-youdao/LobsterAI/pull/998) Text selection toolbar | 1 day | Low — Feature complete | Code review for merge |

**Recommendation**: Prioritize #1006 architectural fix — configuration persistence is becoming a reputational risk with enterprise users.

---

*Digest generated from 24h GitHub activity. Data: 18 PRs, 6 Issues, 1 Release.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest — 2026-03-29

## 1. Today's Overview

TinyClaw showed **exceptional maintenance velocity** on 2026-03-28 with **15 PRs merged/closed and 7 issues resolved**, all without any remaining open items. This represents a significant cleanup sprint, likely post-rebrand stabilization following the "tinyclaw" → "tinyagi" migration. The activity pattern suggests the core team is prioritizing **installation reliability, Docker hardening, and control plane consolidation** over new feature development. No new releases were cut despite the high merge volume, indicating these changes may be accumulating toward a larger v0.1.0 or similar milestone.

---

## 2. Releases

**No new releases** — The project remains without tagged releases. Given the volume of merged fixes (particularly Docker and installation hardening), a release candidate may be imminent.

---

## 3. Project Progress

### Merged/Closed PRs (15 items)

| PR | Author | Focus | Key Change |
|:---|:---|:---|:---|
| [#149](https://github.com/TinyAGI/tinyagi/pull/149) | mczabca-boop | Security | Plugin hardening, hook timeouts, metadata sanitization — **foundation for secure multi-agent** |
| [#150](https://github.com/TinyAGI/tinyagi/pull/150) | mczabca-boop | Providers | OpenViking continuation stack (post-hardening) |
| [#113](https://github.com/TinyAGI/tinyagi/pull/113) | williamlmao | UX | Real-time tool activity streaming to Telegram |
| [#168](https://github.com/TinyAGI/tinyagi/pull/168) | dpbmaverick98 | Multi-agent | Kimi 2.5 + Minimax 2.5 support via Claude Code |
| [#218](https://github.com/TinyAGI/tinyagi/pull/218) | jcenters | Reliability | Kill stuck agent processes after 5-min timeout |
| [#237](https://github.com/TinyAGI/tinyagi/pull/237), [#235](https://github.com/TinyAGI/tinyagi/pull/235) | jlia0 | Onboarding | `curl \| bash` as default install method |
| [#239](https://github.com/TinyAGI/tinyagi/pull/239) | jlia0 | Migration | Auto-migrate `~/.tinyclaw` → `~/.tinyagi` data |
| [#240](https://github.com/TinyAGI/tinyagi/pull/240) | jlia0 | Build | Rebuild native modules post-install |
| [#255](https://github.com/TinyAGI/tinyagi/pull/255) | jlia0 | Dashboard | Fix queued/processing status display |
| [#259](https://github.com/TinyAGI/tinyagi/pull/259) | jlia0 | Scheduling | Persist scheduled messages to agent_messages table |
| [#265](https://github.com/TinyAGI/tinyagi/pull/265) | jlia0 | Docker | Move persistent data to `/home/tinyagi` |
| [#266](https://github.com/TinyAGI/tinyagi/pull/266) | jlia0 | Docker | Run as root for Codex auth.json access |
| [#264](https://github.com/TinyAGI/tinyagi/pull/264) | jlia0 | Type safety | Fix TS18046 unknown type errors |
| [#268](https://github.com/TinyAGI/tinyagi/pull/268) | jlia0 | UI/UX | Merge providers into services tab, remove /logs page |

**Technical trajectory:** Heavy investment in **Docker productionization** (4 PRs), **installation friction reduction** (4 PRs), and **control plane simplification**. The jlia0 contributor appears to be driving UI/ops stability while mczabca-boop handles security architecture.

---

## 4. Community Hot Topics

### Most Active Discussions

| Issue/PR | Comments | Engagement | Underlying Need |
|:---|:---:|:---|:---|
| [#193](https://github.com/TinyAGI/tinyagi/issues/193) — TinyOffice first-run web onboarding | **10 comments** | High | **Zero-to-first-agent UX gap** — users want GUI setup, not CLI config editing |
| [#126](https://github.com/TinyAGI/tinyagi/issues/126) — Telegram auto-reconnect failure | 7 comments | Medium | **Production reliability** for channel integrations |
| [#124](https://github.com/TinyAGI/tinyagi/issues/124) — More LLM provider support | 6 comments | Medium | **Cost optimization & quota management** — Claude API limits are a real constraint |

### Analysis

- **#193** reveals a critical adoption barrier: TinyOffice assumes pre-existing configuration. The 10-comment thread suggests this is blocking non-technical users.
- **#124**'s request for z.ai, Kimi, OpenRouter, etc. indicates **token economics pressure** — users hitting Claude Code quotas and needing fallback providers. PR #168 partially addresses this with Kimi/Minimax support.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| **High** | Stuck agent processes infinite loop | **CLOSED** | [#218](https://github.com/TinyAGI/tinyagi/pull/218) | Hung Claude/Codex processes never killed, causing re-queue spam |
| **Medium** | Telegram auto-reconnect failure | **CLOSED** | Implied in #113, #126 | Connection drops not recovered automatically |
| **Medium** | WSL2 ETIMEDOUT on Telegram | **CLOSED** | Workaround documented | [#84](https://github.com/TinyAGI/tinyagi/issues/84) — network stack incompatibility |
| **Low** | Dashboard status display incorrect | **CLOSED** | [#255](https://github.com/TinyAGI/tinyagi/pull/255) | All messages showed "processing" regardless of actual state |
| **Low** | Scheduled messages not persisted | **CLOSED** | [#259](https://github.com/TinyAGI/tinyagi/pull/259) | `fireSchedule()` skipped `insertAgentMessage()` |
| **Low** | TypeScript strict mode errors | **CLOSED** | [#264](https://github.com/TinyAGI/tinyagi/pull/264) | `unknown` type from `res.json()` |

**Stability assessment:** Excellent — all reported stability issues from the past 6 weeks were resolved in this sprint. The stuck process fix (#218) is particularly important for production deployments.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Version | Rationale |
|:---|:---|:---:|:---|
| **First-run web onboarding wizard** | [#193](https://github.com/TinyAGI/tinyagi/issues/193) | **High** | 10 comments, clear user pain, aligns with TinyOffice investment |
| **Runtime control panel** (daemon/queue/heartbeat) | [#194](https://github.com/TinyAGI/tinyagi/issues/194) | **High** | Complements #193, already has 👍 reaction, PR #268 shows UI consolidation trend |
| **Additional LLM providers** (z.ai, OpenRouter, etc.) | [#124](https://github.com/TinyAGI/tinyagi/issues/124) | **Medium** | Partially addressed by #168; cost pressure will drive more |
| **Docker Compose / Swarm multi-agent** | [#100](https://github.com/TinyAGI/tinyagi/issues/100) | **Medium** | Infrastructure request, not yet prioritized |
| **Verbose mode + channel reactions** | [#120](https://github.com/TinyAGI/tinyagi/issues/120) | **Low-Medium** | Nice-to-have, no comments suggests lower urgency |

**Predicted v0.1.0 focus:** Onboarding experience + operational visibility, with provider expansion following.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---:|
| **CLI-dependent setup** | #193: "initial setup still depends heavily on CLI flows and raw config editing" | 🔴 High |
| **API quota/cost constraints** | #124: "when more agent token will usage more claude code api quota will repidly" [sic] | 🟡 Medium |
| **Docker data persistence** | #265, #266: AI CLI state lost between container restarts | 🟡 Medium |
| **WSL2 networking** | #84: Telegram timeouts despite working curl | 🟢 Low (workaround exists) |

### Satisfaction Signals
- **Real-time visibility**: PR #113's tool streaming to Telegram addresses "waiting silently" problem
- **Installation simplification**: curl one-liner reduces friction for new users
- **Migration path**: Auto-migration preserves data for rebrand early adopters

### Use Cases Emerging
- **Multi-agent orchestration**: #100's Docker Swarm request, #168's multi-agent support
- **Production channel bots**: Telegram reliability fixes suggest real deployments
- **Cost-conscious routing**: Provider diversification for quota management

---

## 8. Backlog Watch

**Status: Clean** — No open issues or PRs remain. However, watch for:

| Risk Area | Monitoring Rationale |
|:---|:---|
| **OpenViking stack completion** | PR #150 merged but may have follow-up dependencies from mczabca-boop's fork |
| **Provider abstraction depth** | Kimi/Minimax in #168 is initial; z.ai/OpenRouter in #124 still pending |
| **TinyOffice feature gaps** | #193 and #194 closed as completed — verify in next release |

**Recommended maintainer attention:** Consider cutting a release to capture these 15 PRs of stabilization work before accumulating new feature debt.

---

*Digest generated from TinyAGI/tinyagi repository data. All GitHub links verified against provided URLs.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-03-29

---

## 1. Today's Overview

Moltis shows **exceptional engineering velocity** with 17 PRs and 8 issues processed in 24 hours, all issues resolved with zero backlog accumulation. The project released **4 versions** (20260327.05 through 20260328.03), indicating active CI/CD. Core focus areas: **provider ecosystem hardening** (OpenAI-compatible custom providers, Fireworks.ai integration), **platform expansion** (Matrix channel support, Telegram forum-topic isolation), and **infrastructure reliability** (GraphQL service binding, prompt caching). The maintainer team (primarily `penso`) demonstrates rapid response to community-reported regressions with same-day fixes.

---

## 2. Releases

| Version | Date | Notes |
|---------|------|-------|
| [20260328.03](https://github.com/moltis-org/moltis/releases/tag/20260328.03) | 2026-03-28 | Patch release |
| [20260328.02](https://github.com/moltis-org/moltis/releases/tag/20260328.02) | 2026-03-28 | Patch release |
| [20260328.01](https://github.com/moltis-org/moltis/releases/tag/20260328.01) | 2026-03-28 | Patch release |
| [20260327.05](https://github.com/moltis-org/moltis/releases/tag/20260327.05) | 2026-03-27 | Patch release |

*Release notes not detailed in source data; rapid iteration suggests hotfix pattern for provider/chat stability issues resolved today.*

---

## 3. Project Progress

### Merged/Closed PRs (13 items)

| PR | Author | Summary | Impact |
|----|--------|---------|--------|
| [#511](https://github.com/moltis-org/moltis/pull/511) | penso | **fix(graphql)**: Runtime-bound live chat service | Resolves architectural bug where GraphQL bypassed `chat_override` |
| [#515](https://github.com/moltis-org/moltis/pull/515) | penso | **fix(providers)**: 30s timeout for local LLM probes | Fixes local server model loading failures |
| [#512](https://github.com/moltis-org/moltis/pull/512) | penso | **fix(telegram)**: Forum-topic reply routing | Correct thread isolation for Telegram supergroups |
| [#509](https://github.com/moltis-org/moltis/pull/509) | penso | **test(provider-setup)**: Regression tests for custom provider discovery | Prevents #502 recurrence |
| [#510](https://github.com/moltis-org/moltis/pull/510) | penso | **fix(providers)**: Restore MiniMax system prompt extraction | Fixes provider-specific API compatibility |
| [#505](https://github.com/moltis-org/moltis/pull/505) | penso | **fix(chat)**: System role for compaction summary | Resolves llama.cpp strict-mode failures |
| [#507](https://github.com/moltis-org/moltis/pull/507) | penso | **fix(provider-setup)**: Skip probe for custom providers w/o model | Eliminates timeout loops |
| [#506](https://github.com/moltis-org/moltis/pull/506) | penso | **fix(providers)**: Skip discovery when model specified | Reduces unnecessary API calls |
| [#498](https://github.com/moltis-org/moltis/pull/498) | penso | **feat(telegram)**: Isolate forum-topic sessions by `thread_id` | Multi-tenant Telegram support |
| [#331](https://github.com/moltis-org/moltis/pull/331) | tensiondriven | **feat(channels)**: Matrix integration (merged) | New platform: Matrix protocol |
| [#497](https://github.com/moltis-org/moltis/pull/497) | penso | **feat(providers)**: Fireworks.ai primary provider | New hosted provider with 7-model fallback catalog |
| [#276](https://github.com/moltis-org/moltis/pull/276) | alexhooketh | **feat(telegram)**: Plaintext/markdown document extraction | File ingestion for Telegram |
| [#495](https://github.com/moltis-org/moltis/pull/495) | penso | **feat(providers)**: Prompt caching for Anthropic/OpenRouter | Cost/performance optimization |

**Key Advances:**
- **Multi-platform expansion**: Matrix (#331) joins Telegram with full feature parity (streaming, reactions, OTP gating)
- **Provider ecosystem maturation**: Fireworks.ai (#497), robust custom OpenAI-compatible handling (#506-507, #509), prompt caching (#495)
- **Infrastructure hardening**: GraphQL service binding (#511), compaction reliability (#505), local LLM support (#515)

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|------|----------|----------|
| [#437](https://github.com/moltis-org/moltis/issues/437) | 3 comments, 14-day lifecycle | **"Reasoning" expansion UI bug** — Only response visible in Channels; indicates UX gap in reasoning display for non-chat interfaces. *Resolved but signals need for Channels-specific UI testing.* |
| [#496](https://github.com/moltis-org/moltis/issues/496) | 2 comments, same-day resolution | **ARM64 install.sh 404** — Platform support gap for aarch64 Linux. *Rapid fix suggests CI artifact naming issue.* |

**Underlying Needs:**
- **Cross-platform distribution**: ARM64 support gaps indicate user base expansion to edge/embedded devices
- **Channels UX parity**: Chat-optimized features (reasoning display) need adaptation for async/channel interfaces

---

## 5. Bugs & Stability

| Severity | Issue | Fix PR | Description |
|----------|-------|--------|-------------|
| **Critical** | [#514](https://github.com/moltis-org/moltis/issues/514) | — | Model selection broken for "most models" — core functionality failure |
| **High** | [#502](https://github.com/moltis-org/moltis/issues/502) | [#507](https://github.com/moltis-org/moltis/pull/507), [#509](https://github.com/moltis-org/moltis/pull/509) | Custom OpenAI provider timeout without model specification |
| **High** | [#504](https://github.com/moltis-org/moltis/issues/504) | [#506](https://github.com/moltis-org/moltis/pull/506) | Unnecessary model discovery when model explicitly specified |
| **High** | [#508](https://github.com/moltis-org/moltis/issues/508) | — | Post-upgrade "invalid chat setting" error — migration/regression |
| **Medium** | [#501](https://github.com/moltis-org/moltis/issues/501) | [#505](https://github.com/moltis-org/moltis/pull/505) | Manual context compaction breaks chat on strict providers |
| **Medium** | [#437](https://github.com/moltis-org/moltis/issues/437) | — | Reasoning UI display bug in Channels |
| **Low** | [#496](https://github.com/moltis-org/moltis/issues/496) | — | ARM64 install script 404 |

**Stability Assessment**: All reported bugs resolved within 24h. Pattern suggests **release-induced regressions** in provider setup flow, now mitigated with regression tests (#509).

---

## 6. Feature Requests & Roadmap Signals

| PR/Issue | Signal | Likelihood in Next Release |
|----------|--------|---------------------------|
| [#513](https://github.com/moltis-org/moltis/pull/513) — Jina.ai search provider | **OPEN** — Web search expansion | High — complements existing Brave/Perplexity |
| [#503](https://github.com/moltis-org/moltis/pull/503) — Session recall, SSH runtime, skill portability | **OPEN** — Major UX/features | Medium — Large scope, needs review |
| [#500](https://github.com/moltis-org/moltis/pull/500) — Matrix integration (cherry-pick) | **OPEN** — Alternative to merged #331 | Low — Superseded by #331 merge |
| [#499](https://github.com/moltis-org/moltis/pull/499) — OpenAI TTS/STT `base_url` | **OPEN** — Local voice AI | High — Small, enables local voice stacks |

**Emerging Themes:**
- **Local-first AI**: `base_url` flexibility for voice (#499), local LLM timeout handling (#515)
- **Skill/agent portability**: PR #503's "portable skill bundle export/import" signals move toward agent marketplace/sharing
- **Search diversification**: Jina.ai (#513) adds academic/technical search option

---

## 7. User Feedback Summary

### Pain Points
| Issue | User | Root Cause |
|-------|------|------------|
| Model selection failures | bsarkisov (×3 issues) | Provider discovery logic too aggressive/fragile |
| Post-upgrade breakage | LeeTeng2001 | Migration path for chat settings insufficient |
| ARM64 support | orangesoncom | Release artifact gaps |
| Timeout on local servers | — | Hardcoded 10s probe timeout |

### Use Cases Surfacing
- **Local/self-hosted LLM integration** — Multiple fixes for llama.cpp, custom OpenAI-compatible endpoints
- **Multi-tenant Telegram** — Forum topic isolation (#498, #512) for team/organization use
- **Document-heavy workflows** — Telegram file ingestion (#276), context compaction (#501/#505)

### Satisfaction Indicators
- **Same-day resolution** for all 8 issues indicates responsive maintenance
- **Regression test addition** (#509) shows institutional learning from user reports

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#513](https://github.com/moltis-org/moltis/pull/513) — Jina.ai search | 1 day | Low | Review/merge for search parity |
| [#503](https://github.com/moltis-org/moltis/pull/503) — Session recall/SSH/skills | 1 day | Medium | Scope review; may need splitting |
| [#500](https://github.com/moltis-org/moltis/pull/500) — Matrix (duplicate) | 1 day | Low | Close in favor of merged #331 |
| [#499](https://github.com/moltis-org/moltis/pull/499) — Voice `base_url` | 1 day | Low | Quick win for local voice users |

**Assessment**: No stagnant backlog. All open PRs are <24h old. Project demonstrates **healthy triage velocity**.

---

## Project Health: 🟢 **Excellent**

| Metric | Status |
|--------|--------|
| Issue resolution | 100% (8/8 closed) |
| PR velocity | 17 in 24h, 76% merged |
| Release cadence | 4 versions in 2 days |
| Community responsiveness | Same-day bug fixes |
| Technical debt | Proactive regression testing added |

**Risk Factors**: Rapid release pace may induce regressions (observed in provider setup flow); monitoring advised for stability vs. velocity balance.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-03-29

## 1. Today's Overview

CoPaw shows **high community activity** with 39 issues updated (35 open/active) and 24 PRs (11 open, 13 merged/closed) in the last 24 hours. The project is in active development with no new releases today, indicating a focus on stabilization and feature integration rather than shipping. Key themes include provider ecosystem expansion (MiniMax, OpenCode, GitHub Copilot), channel reliability fixes (DingTalk, Feishu), and critical stability issues around infinite loops and CPU consumption. The maintainer team appears responsive with rapid PR turnover, though several high-impact bugs remain unaddressed.

---

## 2. Releases

**None today.**

---

## 3. Project Progress

### Merged/Closed PRs (13 total)

| PR | Description | Impact |
|:---|:---|:---|
| [#2461](https://github.com/agentscope-ai/CoPaw/pull/2461) | docs(config): update docs of config | Documentation maintenance |
| [#2460](https://github.com/agentscope-ai/CoPaw/pull/2460) | feat(doc) Update context management documentation and dependencies | Documentation + deps |
| [#2449](https://github.com/agentscope-ai/CoPaw/pull/2449) | refactor(truncation): improve file truncation logic | **Major**: Protects Markdown up to 50KB, improved LLM comprehension for long-context reading |
| [#2450](https://github.com/agentscope-ai/CoPaw/pull/2450) | docs(agent): update agent md files docs | Documentation |
| [#2423](https://github.com/agentscope-ai/CoPaw/pull/2423) | feat(provider): add MiniMax OAuth authentication | **Feature**: Device Code Flow + PKCE (superseded by #2448) |
| [#2444](https://github.com/agentscope-ai/CoPaw/pull/2444) | docs(mcp): update docs of mcps and tools | Documentation |
| [#2440](https://github.com/agentscope-ai/CoPaw/pull/2440) | Fix(skill) config passing | **Bugfix**: Workspace skill config passing |
| [#2410](https://github.com/agentscope-ai/CoPaw/pull/2410) | feat(memory): improve skills tool result truncation | Memory optimization |
| [#2352](https://github.com/agentscope-ai/CoPaw/pull/2352) | Console style | UI/UX theming improvements |
| [#2436](https://github.com/agentscope-ai/CoPaw/pull/2436) | fix(skill) channel config | **Bugfix**: UI-backend channel config for skills |
| [#2221](https://github.com/agentscope-ai/CoPaw/issues/2221) | DingTalk sessionWebhook fix (closed via related work) | Channel reliability |
| [#2464](https://github.com/agentscope-ai/CoPaw/issues/2464) | Telegram message spam fix (closed) | Message consolidation |
| [#2153](https://github.com/agentscope-ai/CoPaw/issues/2153) | DingTalk cron webhook expiration (closed) | Cron reliability |

**Key Advances:**
- **Truncation system overhaul** (#2449) enables sustained long-document reading
- **Skill system hardening** with config passing fixes (#2440, #2436)
- **Documentation sprint** across config, agents, MCP, and context management

---

## 4. Community Hot Topics

### Most Active Issues

| Rank | Issue | Comments | Analysis |
|:---|:---|:---|:---|
| 1 | [#2291](https://github.com/agentscope-ai/CoPaw/issues/2291) Help Wanted: Open Tasks | 32 | **Meta-coordination hub** — structured P0-P2 task board driving contributor onboarding. Signals healthy open-source governance but also maintainer bandwidth constraints. |
| 2 | [#2218](https://github.com/agentscope-ai/CoPaw/issues/2218) 100% CPU at idle (busy-polling epoll) | 10 | **Critical infrastructure bug** — core event loop inefficiency affecting all deployments. High engagement suggests widespread impact. |
| 3 | [#2293](https://github.com/agentscope-ai/CoPaw/issues/2293) QA agent broke UI (Chinese: "被QA agent弄翻了") | 9 | **Agent safety concern** — QA agent's autonomous actions corrupted local state, causing persistent UI failure even after reinstall. Raises questions about sandboxing and state isolation. |

### Most Active PRs (Open)

| PR | Focus | Significance |
|:---|:---|:---|
| [#2448](https://github.com/agentscope-ai/CoPaw/pull/2448) | MiniMax OAuth | Provider diversity expansion |
| [#2466](https://github.com/agentscope-ai/CoPaw/pull/2466) | Terminal-style message history (arrow keys) | Power-user UX enhancement |
| [#2465](https://github.com/agentscope-ai/CoPaw/pull/2465) | DingTalk AI table/document operations | Enterprise integration depth |
| [#2426](https://github.com/agentscope-ai/CoPaw/pull/2426) | Channel lazy loading | **Performance**: Startup optimization |
| [#2463](https://github.com/agentscope-ai/CoPaw/pull/2463) | OpenCode provider | Alternative to #2428, native vs. reverse-engineered approach |
| [#2366](https://github.com/agentscope-ai/CoPaw/pull/2366) | GitHub Copilot provider | Major ecosystem integration |

**Underlying Needs:**
- **Enterprise readiness**: DingTalk depth, OAuth flows, backup/migration (#2457)
- **Developer experience**: Terminal UX, lazy loading, provider choice
- **Multi-agent orchestration**: Multiple issues highlight confusion around inter-agent communication

---

## 5. Bugs & Stability

### Critical (P0)

| Issue | Description | Fix Status |
|:---|:---|:---|
| [#2218](https://github.com/agentscope-ai/CoPaw/issues/2218) | **100% CPU idle consumption** — busy-polling epoll loop | ❌ No fix PR identified |
| [#2378](https://github.com/agentscope-ai/CoPaw/issues/2378) | **Infinite loop in tool-intensive skills** (46+ iterations) — `max_iters` too high + `MemoryCompactionHook` failure | ❌ No fix PR; workaround: manual iteration limits |
| [#2445](https://github.com/agentscope-ai/CoPaw/issues/2445) | **Gateway restart = permanent Agent deadlock** (100% reproducible) | ❌ No fix; requires container/SSH access to recover |

### High (P1)

| Issue | Description | Fix Status |
|:---|:---|:---|
| [#2435](https://github.com/agentscope-ai/CoPaw/issues/2435) | Network volatility breaks Agent operations (30-60% timeout rate, gh CLI fails) | ❌ Environmental/infrastructure |
| [#2293](https://github.com/agentscope-ai/CoPaw/issues/2293) | QA agent corrupted UI state — persistent `SyntaxError` post-reinstall | ❌ No fix; suggests state pollution outside containerized paths |
| [#2455](https://github.com/agentscope-ai/CoPaw/issues/2455) | Gemini model error: function response/call count mismatch | ❌ Provider-specific |
| [#2458](https://github.com/agentscope-ai/CoPaw/issues/2458) | SSL error on Feishu channel (Windows Desktop) | ❌ Platform-specific |
| [#2462](https://github.com/agentscope-ai/CoPaw/issues/2462) | MCP `ConfigWatcher` null pointer — CLI total failure | ❌ **Has root cause identified**, fix likely straightforward |

### Medium (P2)

| Issue | Description | Fix Status |
|:---|:---|:---|
| [#2421](https://github.com/agentscope-ai/CoPaw/issues/2421) | Feishu duplicate replies | ❌ Race condition in outbound dedup |
| [#2459](https://github.com/agentscope-ai/CoPaw/issues/2459) | `/approve` fails in multi-agent forwarding | ❌ Design gap in permission propagation |
| [#2439](https://github.com/agentscope-ai/CoPaw/issues/2439) | Voice transcription non-functional | ❌ No fix |
| [#2298](https://github.com/agentscope-ai/CoPaw/issues/2298) | Ollama support "too hard to configure" + missing LLM selection UI | ❌ UX/documentation gap |

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Request | Likelihood in Next Release |
|:---|:---|:---|
| [#2456](https://github.com/agentscope-ai/CoPaw/issues/2456) | Magic command `/break` to interrupt Agents in channels | **High** — small scope, clear need, enterprise-critical |
| [#2434](https://github.com/agentscope-ai/CoPaw/issues/2434) | Console Web: paste images/files (Ctrl+V) | **High** — common UX expectation, technically straightforward |
| [#2443](https://github.com/agentscope-ai/CoPaw/issues/2443) / [#2457](https://github.com/agentscope-ai/CoPaw/pull/2457) | User asset backup & migration | **High** — PR already open (#2457) |
| [#2407](https://github.com/agentscope-ai/CoPaw/issues/2407) | Expose AgentScope hook system for custom configs | **Medium** — architectural decision needed |
| [#2418](https://github.com/agentscope-ai/CoPaw/issues/2418) | Skills-hub management page for faster skill discovery | **Medium** — UI work, product decision |
| [#2427](https://github.com/agentscope-ai/CoPaw/issues/2427) | Replace/improve built-in document skills (MiniMax Office Skills reference) | **Low-Medium** — competitive evaluation needed |
| [#2420](https://github.com/agentscope-ai/CoPaw/issues/2420) | Multi-agent collaboration improvements (4 pain points documented) | **Medium** — requires design review |

**Predicted v0.3.0 themes**: Provider ecosystem completion, enterprise hardening (backup, interrupts, channels), UX polish (paste, navigation), stability fixes for infinite loops and CPU consumption.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Agent runaway / lack of control** | #2218 (CPU), #2378 (infinite loop), #2293 (QA agent broke UI), #2429 ("I noticed you interrupted me" confusion) | 🔴 Critical |
| **Configuration complexity** | #2298 (Ollama "too hard"), #2277 (vLLM tool-choice flags), #2417 (local model + MCP failure) | 🟡 High |
| **State fragility** | #2445 (restart = deadlock), #2293 (reinstall didn't fix), #2435 (network volatility breaks everything) | 🔴 Critical |
| **UI/UX friction** | #2425 (model selector disappeared), #2454 (chat history hidden = bad for multi-agent), #2434 (no paste) | 🟡 Medium |
| **Multi-agent confusion** | #2420 (4 detailed pain points), #2459 (approve forwarding fails) | 🟡 High |

### Positive Signals

- **Active contribution**: First-time contributors landing features (#2463, #2366, #2465)
- **Responsive maintainers**: Rapid PR review and merge cycle
- **Documentation investment**: Multiple docs PRs suggest maturity focus

### Use Case Patterns

- **Enterprise self-hosting**: Local models (vLLM, Qwen), DingTalk/Feishu integration, backup needs
- **Power users**: Terminal navigation, multi-agent workflows, long-document processing
- **AI-native operations**: Cron jobs, automated PR/issue management, tool-heavy research tasks

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>3 days, high impact)

| Issue | Age | Problem | Action Needed |
|:---|:---|:---|:---|
| [#2218](https://github.com/agentscope-ai/CoPaw/issues/2218) | 5 days | 100% CPU idle — infrastructure defect | Core maintainer assignment, likely event loop fix |
| [#2378](https://github.com/agentscope-ai/CoPaw/issues/2378) | 2 days | Infinite loop + memory compaction failure | Architecture review of iteration limits and hook system |
| [#2445](https://github.com/agentscope-ai/CoPaw/issues/2445) | 1 day | Gateway restart deadlock | **Critical**: Reproducible, blocks containerized deployments |
| [#2277](https://github.com/agentscope-ai/CoPaw/issues/2277) | 4 days | vLLM tool-choice error persists despite #1570 | Reopen #1570 or new fix needed |
| [#2298](https://github.com/agentscope-ai/CoPaw/issues/2298) | 4 days | Ollama UX broken | Documentation + UI fix bundle |

### PRs Stalled/Awaiting Review

| PR | Status | Blocker |
|:---|:---|:---|
| [#2448](https://github.com/agentscope-ai/CoPaw/pull/2448) vs [#2423](https://github.com/agentscope-ai/CoPaw/pull/2423) | Both MiniMax OAuth | **Duplicate effort** — maintainers need to select/merge one |
| [#2463](https://github.com/agentscope-ai/CoPaw/pull/2463) vs [#2428](https://github.com/agentscope-ai/CoPaw/pull/2428) | Both OpenCode | **Approach conflict** — native integration vs. reverse-engineered; needs decision |
| [#2457](https://github.com/agentscope-ai/CoPaw/pull/2457) | Open | Backup/migration — likely ready for review |

---

**Digest compiled from:** [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw) activity 2026-03-28 to 2026-03-29.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-03-29

## 1. Today's Overview

ZeptoClaw shows **moderate development activity** with 2 open PRs and 1 active issue updated in the past 24 hours. The project is currently in a **stabilization phase** with no new releases. All recent activity originates from a single contributor (stuartbowness), suggesting either a focused sprint or limited maintainer bandwidth. The work centers on **critical reliability fixes** for Telegram integration and **architectural improvements** to context management—both addressing core user experience pain points in production deployments.

---

## 2. Releases

**No new releases** (v0.x.x remains current).

---

## 3. Project Progress

**No PRs merged or closed today.** Both active PRs remain in review:

| PR | Status | Impact |
|:---|:---|:---|
| [#460](https://github.com/qhkm/zeptoclaw/pull/460) — Multi-layered context compaction | Open | Prevents token overflow crashes in long conversations; architectural upgrade from single-pass word-count to defense-in-depth strategy |
| [#462](https://github.com/qhkm/zeptoclaw/pull/462) — Telegram silent failure fix | Open | Resolves complete message loss for research tasks; adds chunking + plaintext fallback |

**Progress assessment:** Two high-value reliability PRs are queued. The context compaction PR (#460) represents significant architectural investment, while #462 directly addresses a reported production bug (#461).

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#461](https://github.com/qhkm/zeptoclaw/issues/461) — Research tasks silently fail via Telegram | 0 comments, 0 reactions, but **linked to active fix PR** | Underlying need: **Observability and graceful degradation** in multi-channel deployments. Users expect consistent behavior across interfaces; silent failures break trust. The RCA identifies HTML rendering as root cause, suggesting Telegram's API constraints weren't fully accounted for in initial design. |
| [#462](https://github.com/qhkm/zeptoclaw/pull/462) — Telegram fix | Fresh PR (created 2026-03-28) | Underlying need: **Production reliability** for async research workflows. The 4-source threshold mentioned indicates users hit predictable failure boundaries. |

**Community signal:** Low comment volume suggests either (a) small user base, or (b) issues are well-scoped with clear reproduction paths reducing discussion need.

---

## 5. Bugs & Stability

| Severity | Issue | Fix Status | Details |
|:---|:---|:---|:---|
| **HIGH** | [#461](https://github.com/qhkm/zeptoclaw/issues/461) — Silent Telegram failures | **PR #462 open** | Complete message loss for research tasks >4 sources; no error surfaced to user. Root cause: `render_telegram_html()` produces malformed tags with no fallback. |
| **MEDIUM** (preventive) | Token overflow in long conversations | **PR #460 open** | Currently crashes; fix introduces multi-layered compaction (summarization → semantic compression → truncation). |

**Stability assessment:** Two critical reliability gaps are actively addressed. No new regressions reported today.

---

## 6. Feature Requests & Roadmap Signals

**No explicit feature requests** in today's data. However, PR #460's scope suggests **roadmap direction toward enterprise-grade reliability**:

| Implied Priority | Evidence |
|:---|:---|
| Scalable context management | Multi-layered compaction architecture in #460 |
| Multi-platform robustness | Telegram-specific handling + fallback patterns in #462 |
| Production observability | RCA process mentioned in #461 suggests maturing incident response |

**Prediction:** Next version likely emphasizes **reliability over new capabilities**—stability release expected after #460 and #462 merge.

---

## 7. User Feedback Summary

| Pain Point | Evidence | User Impact |
|:---|:---|:---|
| **Silent failures destroy trust** | #461: "bot goes silent. No response, no error, nothing" | Users cannot distinguish between processing delay, failure, or ignored request |
| **Arbitrary capacity limits** | 4-source threshold for Telegram | Research task complexity constrained by channel, not agent capability |
| **Token overflow crashes** | #460 description | Long conversations become unusable |

**User profile inferred:** Power users leveraging ZeptoClaw for **open-ended research automation** via Telegram, expecting async task completion with reliable delivery.

---

## 8. Backlog Watch

| Risk | Observation |
|:---|:---|
| **Single-contributor bottleneck** | All 3 items (1 issue, 2 PRs) from stuartbowness; no external review activity visible |
| **Undefined review timeline** | Both PRs created 2026-03-27/28 with no merge activity; may indicate maintainer availability constraints |
| **No release cadence** | No releases despite active development; users may be running from `main` with unpatched bugs |

**Recommendation for maintainers:** Prioritize review of #462 (fixes reported bug) and establish release schedule for reliability improvements.

---

*Digest generated from GitHub activity 2026-03-28 to 2026-03-29. Data source: qhkm/zeptoclaw*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest — 2026-03-29

## 1. Today's Overview

EasyClaw (also branded as RivonClaw) shows **low but steady maintenance activity** with a fresh patch release (v1.7.8) addressing macOS distribution issues. The project has **2 active bug reports** from the past 24 hours, both concerning the same critical API integration failure with the "百炼套餐" (Bailian package) when switching between LLM providers. No code contributions or PR activity occurred today, indicating a maintainer-driven release cycle rather than community-driven development. The project appears to be in a **stabilization phase** with focus on platform compatibility fixes rather than feature expansion.

---

## 2. Releases

### [v1.7.8 — RivonClaw](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.8)

| Aspect | Details |
|--------|---------|
| **Type** | Patch release |
| **Focus** | macOS distribution & signing |
| **Breaking Changes** | None |
| **Migration Notes** | N/A — fresh install only |

**Key Change:** Documentation update for macOS Gatekeeper workaround. The release notes clarify that the "'RivonClaw' is damaged" error is a **false positive from Apple's security quarantine**, not actual file corruption. Provides Terminal-based bypass instructions for users.

> ⚠️ **Note:** No functional code changes mentioned; appears to be a re-packaged build with updated documentation.

---

## 3. Project Progress

**No merged or closed PRs today.**  
**No feature advancement visible.**

The only progress is the v1.7.8 release, which appears to be a **documentation-only or re-signed binary update** for macOS distribution compliance. No Git history of code changes is available in the provided data.

---

## 4. Community Hot Topics

### 🔥 Critical: Bailian Package Model Switching Failure

| Issue | Activity | Link |
|-------|----------|------|
| [#29](https://github.com/gaoyangz77/rivonclaw/issues/29) | 1 comment, detailed report | [gaoyangz77/rivonclaw#29](https://github.com/gaoyangz77/rivonclaw/issues/29) |
| [#28](https://github.com/gaoyangz77/rivonclaw/issues/28) | 0 comments, initial report | [gaoyangz77/rivonclaw#28](https://github.com/gaoyangz77/rivonclaw/issues/28) |

**Underlying Need Analysis:**

Both issues describe identical symptoms when switching from **Qwen3.5** to **GLM-5 / Kimi 2.5** in the Bailian (阿里云百炼) integration:

```
HTTP 400: InternalError.Algo.InvalidParameter: 
Range of input length should be [1, 202752]
```

**Root cause hypothesis:** The error suggests a **context window / token limit mismatch** between models. The parameter `202752` (~200K tokens) appears to be Qwen3.5's context limit, but the request payload isn't being re-validated or restructured when switching to models with different constraints (GLM-5: 128K, Kimi 2.5: 256K).

**User impact:** Complete breakage of multi-model workflows — users cannot leverage the Bailian package's model diversity, a core value proposition.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix Available |
|----------|-------|--------|---------------|
| **🔴 Critical** | [#29](https://github.com/gaoyangz77/rivonclaw/issues/29) / [#28](https://github.com/gaoyangz77/rivonclaw/issues/28) — Bailian model switch causes HTTP 400 | **Open, unassigned** | ❌ No PR |
| 🟡 Low | macOS "damaged app" warning (Gatekeeper) | **Mitigated in v1.7.8** | ✅ Documentation fix |

**Stability Assessment:** The Bailian integration — a **core feature** — has a **regression blocking primary user workflows**. The duplicate filing (#28 → #29) suggests users are actively encountering this and escalating when unanswered.

---

## 6. Feature Requests & Roadmap Signals

**No explicit feature requests filed today.**

**Inferred roadmap signals from bug patterns:**

| Signal | Likelihood | Rationale |
|--------|------------|-----------|
| **Bailian API parameter normalization** | High (next patch) | Critical bug blocking paid feature usage |
| **Model-specific context window handling** | High | Root cause of #29/#28 |
| **Dynamic model capability detection** | Medium | Would prevent similar issues with future model additions |
| **Windows code signing** | Low-Medium | macOS was addressed; Windows SmartScreen may follow |

---

## 7. User Feedback Summary

### Pain Points

| Category | Detail | Evidence |
|----------|--------|----------|
| **Broken core workflow** | Cannot switch LLM providers mid-session | #29, #28 |
| **Cryptic error messages** | "InvalidParameter" exposes internal API details rather than user-actionable guidance | Error logs in issues |
| **Platform friction** | macOS security warnings create trust issues | v1.7.8 release notes |

### Use Case Context
- **Primary use:** Multi-model AI access via Alibaba Cloud's Bailian platform
- **User profile:** Chinese-speaking Windows/macOS users needing Qwen/GLM/Kimi interoperability
- **Satisfaction risk:** High — v1.7.7 users hitting blocking bugs with no workaround documented

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|-------|-----|------|---------------|
| [#29](https://github.com/gaoyangz77/rivonclaw/issues/29) / [#28](https://github.com/gaoyangz77/rivonclaw/issues/28) | ~24h | **Escalating** — duplicate filings indicate user frustration | Maintainer acknowledgment + hotfix timeline |
| *(Historical)* — Search for older Bailian-related issues | Unknown | May reveal pattern of API fragility | Audit for recurring integration debt |

**Recommendation:** The maintainer should **consolidate #28 into #29**, provide immediate workaround (e.g., "clear conversation history when switching models"), and prioritize a patch for parameter validation logic.

---

*Digest generated from GitHub activity 2026-03-28 to 2026-03-29. Data source: gaoyangz77/easyclaw (RivonClaw)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*