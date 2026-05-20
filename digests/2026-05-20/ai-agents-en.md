# OpenClaw Ecosystem Digest 2026-05-20

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-20 00:27 UTC

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

# OpenClaw Project Digest — 2026-05-20

## 1. Today's Overview

OpenClaw shows **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a large, active contributor base and potentially a backlog management challenge. The project released **v2026.5.19-beta.2** yesterday with dependency updates and agent refactoring guidelines. However, the **merge ratio is concerning**: only 35 of 500 PRs were merged/closed (7%), with 465 remaining open, suggesting either rigorous review standards or potential bottlenecks. The ClawSweeper bot automation system is actively managing many PRs, with several marked "automerge armed." Critical stability issues persist around **session state management**, **message delivery reliability**, and **Windows UI regressions** that are generating significant user reports.

---

## 2. Releases

### [v2026.5.19-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.5.19-beta.2)

| Aspect | Details |
|--------|---------|
| **Type** | Beta pre-release |
| **Key Changes** | • **Agents**: Established guidelines that fixes should default to clean bounded refactors with lean internals and explicit plugin SDK/API deprecation paths<br>• **Dependencies**: Updated `@openclaw/proxyline` to 0.3.3<br>• **Dependencies**: Updated Pi packages to 0.75.1 and raised minimum supported Node.js version |
| **Breaking Changes** | Node.js minimum version increase (migration required for older deployments) |
| **Migration Notes** | Verify Node.js version compatibility before upgrading; Pi package updates may require lockfile refresh |

---

## 3. Project Progress

### Merged/Closed Today (35 total — selective highlights from visible data)

| PR | Description | Status |
|----|-------------|--------|
| [#84309](https://github.com/openclaw/openclaw/pull/84309) | fix(twitch): export `clearRegistryForTest` for cross-test isolation | **Merged** (ClawSweeper automerge) |
| [#84348](https://github.com/openclaw/openclaw/issues/84348) | UI token usage regression | **Closed** (appears to be noise/invalid) |

### Active PRs with Significant Progress

| PR | Author | Focus | Status |
|----|--------|-------|--------|
| [#84311](https://github.com/openclaw/openclaw/pull/84311) | clawsweeper[bot] | fix(cron): structured denial signals | 🚀 Automerge armed |
| [#84169](https://github.com/openclaw/openclaw/pull/84169) | clawsweeper[bot] | fix(discord): preserve streamed replies after tool warnings | 🚀 Automerge armed |
| [#84267](https://github.com/openclaw/openclaw/pull/84267) | tianxiaochannel-oss88 | fix(agents): recover invalid OpenAI Responses reasoning replay | 👀 Ready for maintainer look |
| [#19328](https://github.com/openclaw/openclaw/pull/19328) | CodeReclaimers | Fix: preserve modelOverride in agent handler (race condition) | 👀 Ready for maintainer look |
| [#83753](https://github.com/openclaw/openclaw/pull/83753) | giodl73-repo | Doctor: convert interactive maintenance checks | 👀 Ready for maintainer look |

### Feature Advancement Areas
- **Discord reliability**: Multiple fixes for streamed reply preservation and voice channel user following
- **Agent reasoning recovery**: OpenAI/Codex encrypted reasoning replay failures being addressed
- **Cron system**: Structured denial signals and diagnostic event emission improvements
- **Doctor command**: Major refactoring toward structured health-check contracts

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Rank | Issue | Comments | 👍 | Underlying Need |
|------|-------|----------|-----|-----------------|
| 1 | [#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) | **105** | 75 | **Platform parity**: macOS/iOS/Android have native apps; Linux/Windows users feel second-class. Long-standing request (since Jan 1) with massive pent-up demand for desktop Linux and Windows native experiences. |
| 2 | [#18677 Security Scan Hook API for skill:install](https://github.com/openclaw/openclaw/issues/18677) | 16 | 0 | **Supply chain security**: Users want to intercept and vet third-party skills before execution—critical for enterprise adoption. |
| 3 | [#11829 Protecting API Keys from Agent Access](https://github.com/openclaw/openclaw/issues/11829) | 16 | 0 | **Secret management**: Multi-layered API key leak vectors (LLM prompt serialization, chat exposure) threaten production deployments. |
| 4 | [#67035 Windows chat UI regression](https://github.com/openclaw/openclaw/issues/67035) | 13 | 0 | **Windows stability**: Input swallowing, invisible streamed replies, broken typing indicators—core UX broken on major platform. |
| 5 | [#42475 Per-agent cost budget enforcement](https://github.com/openclaw/openclaw/issues/42475) | 13 | 0 | **Cost governance**: Runaway LLM spend is a real operational fear; gateway-level enforcement needed for multi-tenant/team use. |

### Analysis of Underlying Needs
- **Enterprise readiness** dominates: security hooks, secret protection, cost controls, and data masking (#64046) all point to organizational deployment blockers
- **Cross-platform parity** is the #1 user-facing gap (105 comments on #75)
- **Reliability at scale**: Session state, message delivery, and heartbeat issues suggest the architecture is being stressed by real production workloads

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR Status |
|----------|-------|-------------|---------------|
| **P1 — Critical** | [#67035](https://github.com/openclaw/openclaw/issues/67035) | Windows chat UI regression: input swallowed, streamed replies invisible, typing indicator broken | No fix PR identified; needs live repro |
| **P1 — Critical** | [#84038](https://github.com/openclaw/openclaw/issues/84038) | `doctor --fix` silently migrates `openai-codex/` → `openai/`, breaking PI+OAuth runtime, 3-4x token inflation | **Fix PRs in flight**: [#84362](https://github.com/openclaw/openclaw/pull/84362) (preserve agentRuntime pin), [#84358](https://github.com/openclaw/openclaw/pull/84358) (invalidate auth cache) |
| **P1 — Critical** | [#80520](https://github.com/openclaw/openclaw/issues/80520) | Telegram messages silently dropped, no sendMessage logged | No fix PR identified |
| **P1 — Critical** | [#84059](https://github.com/openclaw/openclaw/issues/84059) | `EmbeddedAttemptSessionTakeoverError`: session file changed while embedded prompt lock released — **all embedded runs fail** after 2026.5.18 upgrade | No fix PR identified; reported today |
| **P1 — Critical** | [#63216](https://github.com/openclaw/openclaw/issues/63216) | Repeated hard resets despite high reserveTokensFloor; retry loop re-injects bootstrap context | No fix PR identified |
| **P1 — Critical** | [#55334](https://github.com/openclaw/openclaw/issues/55334) | `sessions.json` unbounded growth causes gateway OOM — skillsSnapshot duplicated per session | No fix PR identified |
| **P1 — Critical** | [#40611](https://github.com/openclaw/openclaw/issues/40611) | Heartbeat drift fix causes aggressive retry blocking Telegram during active conversations | No fix PR identified |
| **P1 — Critical** | [#63892](https://github.com/openclaw/openclaw/issues/63892) | Proactive compaction scheduler never re-fires after first checkpoint | No fix PR identified |
| **P1 — Critical** | [#63612](https://github.com/openclaw/openclaw/issues/63612) | Main session prompt crash: `Cannot read properties of undefined` in compaction token estimation | No fix PR identified |
| **P2 — High** | [#67793](https://github.com/openclaw/openclaw/issues/67793) | `queue.mode "collect"` not batching messages despite debounce | No fix PR identified |
| **P2 — High** | [#67288](https://github.com/openclaw/openclaw/issues/67288) | amazon-bedrock-mantle lacks `config.discovery.enabled` gate, unnecessary discovery runs | No fix PR identified |
| **P2 — High** | [#68113](https://github.com/openclaw/openclaw/issues/68113) | Mattermost slash commands return 503 "not yet initialized" in v2026.4.15 | No fix PR identified |
| **Regression** | [#38327](https://github.com/openclaw/openclaw/issues/38327) | "Cannot convert undefined or null to object" with google-vertex/gemini-3.1-pro-preview | **Fix PR**: [#84267](https://github.com/openclaw/openclaw/pull/84267) (reasoning replay recovery) |

### Stability Assessment
**Concerning pattern**: Multiple P1 bugs involve **session state corruption**, **compaction failures**, and **heartbeat/Telegram interference**—suggesting architectural tension between background maintenance tasks and real-time message handling. The [#84059](https://github.com/openclaw/openclaw/issues/84059) embedded session takeover error is particularly alarming as it appears to be a **new regression in the latest release** affecting all embedded agent runs.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Feature | Predicted Priority for Next Version | Rationale |
|-------|---------|-------------------------------------|-----------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps | **High** | 105 comments, 75 👍, oldest unfulfilled platform gap; likely driving user churn |
| [#64046](https://github.com/openclaw/openclaw/issues/64046) | Sensitive data masking (脱敏) | **High** | P1, security-critical, Chinese enterprise market signal, 8 comments |
| [#8719](https://github.com/openclaw/openclaw/issues/8719) | OpenClaw Security Profile v1.1 | **High** | Comprehensive security framework proposal; aligns with multiple security issues |
| [#66944](https://github.com/openclaw/openclaw/issues/66944) | Plugin UI Extension System | **Medium-High** | 8 comments, 4 👍; enables ecosystem growth, matches "lean internals + explicit plugin SDK" direction in latest release |
| [#63829](https://github.com/openclaw/openclaw/issues/63829) | Per-agent memory-wiki vault configuration | **Medium** | 8 comments, 7 👍; multi-agent isolation is architectural trend |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | Per-agent cost budget enforcement | **Medium** | Operational necessity for teams; gateway-level enforcement fits architecture |
| [#39604](https://github.com/openclaw/openclaw/issues/39604) | `tools.web.fetch.allowPrivateNetwork` | **Medium** | Security-sensitive but opt-in; enterprise/self-hosted need |
| [#43260](https://github.com/openclaw/openclaw/issues/43260) | Per-skill model routing in SKILL.md | **Medium** | Cost/quality optimization; natural extension of existing model config |
| [#66252](https://github.com/openclaw/openclaw/issues/66252) | Per-Agent TTS/STT Configuration Overrides | **Lower-Medium** | Niche but growing multi-language use case |

### Roadmap Prediction
The **v2026.6.x** release will likely prioritize: (1) **platform expansion** (Linux/Windows apps), (2) **security hardening** (data masking, secret protection, security profiles), and (3) **multi-agent isolation improvements** (memory vaults, cost controls). The release notes emphasis on "explicit plugin SDK/API deprecation paths" suggests a **plugin ecosystem maturation phase** is beginning.

---

## 7. User Feedback Summary

### Pain Points (Explicit Complaints)

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Windows is broken** | [#67035](https://github.com/openclaw/openclaw/issues/67035): "input text swallowed, streamed replies often invisible until refresh" | 🔴 Critical |
| **Embedded agents completely fail after upgrade** | [#84059](https://github.com/openclaw/openclaw/issues/84059): "all embedded agent runs fail" after 2026.5.18 | 🔴 Critical |
| **Silent message loss** | [#80520](https://github.com/openclaw/openclaw/issues/80520): Telegram drops; [#64810](https://github.com/openclaw/openclaw/issues/64810): heartbeat interrupts replies | 🔴 Critical |
| **Cost/runaway spend fear** | [#42475](https://github.com/openclaw/openclaw/issues/42475): "prevent runaway spend without external monitoring" | 🟡 High |
| **Doctor tool dangerous** | [#84038](https://github.com/openclaw/openclaw/issues/84038): `doctor --fix` silently breaks configs, causes token inflation | 🟡 High |
| **Secrets exposed everywhere** | [#64046](https://github.com/openclaw/openclaw/issues/64046): API keys plaintext in config, logs, UI | 🟡 High |
| **Memory/session bloat** | [#55334](https://github.com/openclaw/openclaw/issues/55334): OOM from unbounded sessions.json; [#67419](https://github.com/openclaw/openclaw/issues/67419): 20-30% token waste from bootstrap re-injection | 🟡 High |

### Positive Signals
- **Strong community engagement**: 105 comments on platform request shows invested user base
- **Active automation**: ClawSweeper bot handling routine merges reduces maintainer load
- **Responsive to security**: Multiple security proposals in active discussion

### Satisfaction/Dissatisfaction Ratio
**Tilted negative on stability**, positive on vision/engagement. Users appear committed to the project but are hitting **production-readiness blockers** that prevent reliable daily use.

---

## 8. Backlog Watch

### Long-Unanswered Critical Items Needing Maintainer Attention

| Issue | Age | Blockers | Action Needed |
|-------|-----|----------|---------------|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Apps | **139 days** (Jan 1) | `clawsweeper:needs-product-decision`, `clawsweeper:needs-maintainer-review`, `clawsweeper:needs-security-review` | Product decision on platform prioritization; security review of desktop packaging |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) Dynamic model discovery | **103 days** (Feb 6) | `maintainer` label but no clear owner | Architecture decision on catalog generation vs. runtime discovery |
| [#7227](https://github.com/openclaw/openclaw/issues/7227) Accessibility permissions security risk | **107 days** (Feb 2) | `stale`, `security` | Security review of macOS GUI automation architecture |
| [#18677](https://github.com/openclaw/openclaw/issues/18677) Security Scan Hook API | **93 days** (Feb 16) | `stale`, multiple review labels | Security team engagement; API design review |
| [#26250](https://github.com/openclaw/openclaw/issues/26250) SSH transport security check | **84 days** (Feb 25) | `security`, no fix PR | Network security architecture review |

### PRs Stalled Despite Being "Ready"

| PR | Age | Status | Risk |
|----|-----|--------|------|
| [#19328](https://github.com/openclaw/openclaw/pull/19328) | **92 days** | 👀 Ready for maintainer look; fixes 3% race condition in model overrides | Fix for production reliability issue languishing |
| [#70864](https://github.com/openclaw/openclaw/pull/70864) | **26 days** | 📣 Needs proof; massive scope (all channels) | Scoped mention pattern policy blocked on behavioral proof |

### Maintainer Bottleneck Indicators
- **"clawsweeper:needs-maintainer-review"** appears on 10+ top issues
- **"clawsweeper:needs-product-decision"** appears on 8+ issues, indicating product management capacity constraint
- Multiple P1 bugs have **no linked fix PR** despite being known for weeks

---

## Project Health Assessment

| Metric | Status |
|--------|--------|
| **Activity** | 🟢 Very High (1000 items/day) |
| **Merge Velocity** | 🟡 Low (7% closure rate) |
| **Release Cadence** | 🟢 Regular (beta.2 yesterday) |
| **Critical Bug Backlog** | 🔴 Growing (multiple P1s unaddressed) |
| **Community Engagement** | 🟢 Strong (high comment counts, detailed reports) |
| **Automation Maturity** | 🟢 Advanced (ClawSweeper managing routine merges) |
| **Platform Coverage** | 🔴 Incomplete (Linux/Windows apps missing) |
| **Enterprise Readiness** | 🟡 In Progress (security features proposed but not shipped) |

**Overall**: OpenClaw is a **high-momentum project with architectural growing pains**. The automation infrastructure is sophisticated, but the core runtime is experiencing **session management and message delivery reliability issues** that threaten user trust. Prioritizing stability fixes over new features, and resolving the maintainer review bottleneck, would improve health indicators significantly.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem
**Date: 2026-05-20**

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing intense, fragmented development across at least 10 active projects, with total daily activity exceeding 1,000 tracked items. The space has bifurcated into **reference-scale platforms** (OpenClaw, IronClaw) handling 500+ daily updates with complex governance challenges, and **focused alternatives** (NanoBot, PicoClaw, NullClaw) prioritizing specific deployment contexts—edge hardware, academic research, or Zig-based minimalism. A critical maturity gap persists: no project has achieved reliable production stability, with every major codebase reporting critical regressions in session management, message delivery, or platform-specific breakages within the latest release cycle. Multi-agent orchestration and enterprise security hardening have emerged as the dominant competitive vectors for 2026 H2.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Release Status | Health Score* |
|:---|:---:|:---:|:---:|:---|:---:|
| **OpenClaw** | 500 | 500 | 35 (7%) | v2026.5.19-beta.2 (yesterday) | 🟡 Moderate-High |
| **NanoBot** | 31 | 36 | 22 (61%) | None (0.1.5.post3 current) | 🟢 Healthy |
| **Hermes Agent** | 50 | 50 | 17 (34%) | v0.14.0 (May 16); hotfix needed | 🟡 Stabilizing |
| **PicoClaw** | 9 | 16 | 7 (44%) | v0.2.8-nightly (May 19) | 🟢 Healthy |
| **NanoClaw** | 4 | 18 | 5 (28%) | None | 🟡 Intensive stabilization |
| **NullClaw** | 1 | 13 | 7 (54%) | v2026.4.17 (33 days stale) | 🟡 Moderate |
| **IronClaw** | 23 | 50 | 25 (50%) | Pending: 0.28.2 (unpublished) | 🟡 Migration-critical |
| **LobsterAI** | 0 | 50 | 24 (48%) | None (accumulating for release) | 🟢 High-velocity internal |
| **CoPaw (QwenPaw)** | 38 | 44 | 31 (70%) | v1.1.8 + v1.1.8-beta.2 (today) | 🟡 Release-stressed |
| **Moltis** | 4 | 4 | 2 (50%) | None | 🟢 Stable maintenance |
| **ZeptoClaw** | 0 | 2 | 1 (50%) | None | 🔴 Stagnant |
| **ZeroClaw** | 8 | 47 | 2 (4%) | v0.8.0 beta pending | 🟡 Pre-release bottleneck |
| **TinyClaw** | 0 | 0 | 0 | None | ⚪ Inactive |

*\*Health score synthesizes merge velocity, critical bug backlog, release cadence, and community responsiveness*

---

## 3. OpenClaw's Position

### Advantages
- **Scale dominance**: 10× the daily activity of nearest competitors; established as the de facto reference implementation
- **Automation maturity**: ClawSweeper bot manages routine merges at scale unmatched in ecosystem
- **Ecosystem network effects**: LobsterAI (#680), CoPaw, and others explicitly build on OpenClaw compatibility; upstream changes cascade downstream
- **Provider breadth**: Most comprehensive gateway coverage (Discord, Telegram, Slack, WeChat, Feishu, with native apps for macOS/iOS/Android)

### Disadvantages vs. Peers
- **Stability crisis**: 8+ P1-critical bugs unaddressed, including day-zero regression (#84059) breaking all embedded runs; merge velocity (7%) suggests review paralysis
- **Platform equity gap**: Linux/Windows native apps missing despite 105-comment, 139-day demand (#75)—longest unfulfilled request in ecosystem
- **Enterprise readiness lag**: Security hooks (#18677), secret protection (#11829), cost controls (#42475) all proposed but unshipped; NanoClaw (#911) and IronClaw (#3795) have shipped comparable features

### Technical Approach Differences
| Dimension | OpenClaw | Key Alternatives |
|:---|:---|:---|
| **Core language** | TypeScript/Node.js | NanoBot (Python), NullClaw (Zig), IronClaw (Rust) |
| **Architecture** | Monolithic with plugin SDK | IronClaw (micro-crate: 47 crates), PicoClaw (modular providers) |
| **Session model** | File-based (`sessions.json`) with compaction | NanoBot (async GC proposed #2604), ZeroClaw (SQLite namespaces) |
| **Multi-agent** | Early (Clawdbot apps) | LobsterAI (shipped: tree-observable subagents #680), ZeroClaw (v0.8.0 imminent #6398) |

### Community Size
OpenClaw's contributor base is likely 5–10× larger than any peer (500 items/day vs. 50 for next tier), but engagement quality is diluted: 93% PR backlog, maintainer labels blocking 18+ issues, and user satisfaction "tilted negative on stability."

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Evidence |
|:---|:---|:---|
| **Multi-agent orchestration** | LobsterAI, ZeroClaw, PicoClaw, NanoBot, CoPaw | LobsterAI #680 (tree-observable subagents); ZeroClaw #6398 (Schema V3 runtime); PicoClaw #1934 (Phase 2 collaboration); NanoBot #3913 ("Legion"); CoPaw #4530 (fork workspace) |
| **Enterprise security/secret management** | OpenClaw, NanoClaw, NullClaw, IronClaw, CoPaw | OpenClaw #11829/#18677 (API key protection, scan hooks); NanoClaw #911 (privacy-preserving audit); NullClaw #911 (envelope triage); IronClaw #3767 (`NoExposureGuard`); CoPaw #4532 (OAuth 2.1 for MCP) |
| **Session state reliability** | OpenClaw, NanoBot, PicoClaw, CoPaw | OpenClaw #84059/#55334 (takeover errors, OOM); NanoBot #3790/#3884 (WebUI corruption); PicoClaw #2720 (PID crash loop); CoPaw #4494 (stream stalls) |
| **Cost governance/token optimization** | OpenClaw, NanoBot, ZeroClaw, CoPaw | OpenClaw #42475 (per-agent budgets); NanoBot #3735 (`/insights` tracking); ZeroClaw implicit; CoPaw #4463 (caching estimation) |
| **Cross-platform native deployment** | OpenClaw, NanoBot, NullClaw, CoPaw | OpenClaw #75 (Linux/Windows apps); NanoBot #3891 (Docker remote access); NullClaw #868/#920 (Android/Windows fixes); CoPaw #3813 (Tauri desktop) |
| **MCP (Model Context Protocol) integration** | LobsterAI, CoPaw, Moltis | LobsterAI #1631 (quick-start templates); CoPaw #4428/#4532 (multi-MCP + OAuth); Moltis #850 (MCP `client_secret`) |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Reference-scale ecosystem; gateway breadth | Power users, multi-channel operators | Node.js monolith, file sessions, ClawSweeper automation |
| **NanoBot** | Academic roots; provider diversity; HF Spaces deployment | Researchers, cost-conscious builders, China market | Python, compaction benchmarks, peer roster for squads |
| **Hermes Agent** | Kanban task orchestration; marketing agent factory | Business automation, workflow teams | Python, SOUL.md persona system, Slack thread subscriptions |
| **PicoClaw** | Edge/IoT hardware flexibility (Pi Zero, Intel NPU) | Embedded deployers, hardware hackers | Modular providers, SeaHorse history, session slash commands |
| **NanoClaw** | Claude-native; containerized code execution | Claude power users, X bot operators | TypeScript, `<messages>` envelope (fragile), bash/python tools |
| **NullClaw** | Zig minimalism; privacy-first; multi-arch soak testing | Security-conscious self-hosters, systems programmers | Zig, curl→`std.http` migration, no runtime dependencies |
| **IronClaw** | Rust safety; Extension Manifest v2 marketplace; composition architecture | Enterprise platform builders, WASM integrators | 47 micro-crates, `ironclaw_reborn_composition`, capability catalog |
| **LobsterAI** | Subagent observability; desktop-native UX (Explorer integration) | Mainstream personal assistant users, China market | Electron/Tauri, OpenClaw runtime dependency, artifacts system |
| **CoPaw** | Plugin marketplace; desktop pet; Qwen integration | Consumer China market, casual AI users | Python, PySide6, Snowpaw pet, WeChat iLink |
| **ZeroClaw** | Dream Mode (reflective learning); air-gapped enclaves | Persistent companion seekers, security enterprises | Rust, ACP protocol, SQLite memory, schema versioning |
| **Moltis** | Docker sandbox hardening; vault auth sync | DevOps, containerized deployments | Rust, Playwright testing, sealed vault operations |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (Risk of Instability)
| Project | Velocity Signal | Risk Profile |
|:---|:---|:---|
| **OpenClaw** | 1000 items/day, beta daily | Merge paralysis, critical bug accumulation |
| **IronClaw** | 73 items/day, 50 PRs | Nightly E2E red 10 days, crates.io gap erodes trust |
| **CoPaw** | 82 items/day, dual-channel release | Day-zero critical bugs (#4540/#4541) post-v1.1.8; Pet plugin crashes |
| **ZeroClaw** | 55 items/day, mega-PR pending | 45 open PRs, 4% merge rate; pre-release bottleneck |

### Tier 2: Healthy Growth
| Project | Velocity Signal | Maturity Indicator |
|:---|:---|:---|
| **NanoBot** | 67 items/day, 61% merge | Benchmark framework (#3920), gateway cold start 94% improvement |
| **LobsterAI** | 50 PRs/day, zero issues | Internal sprint discipline; 13 stale UX PRs suggest review gap |
| **PicoClaw** | 25 items/day, nightly builds | Rapid security response (#2688 sandbox fix), hardware validation |

### Tier 3: Stabilization/Maintenance
| Project | Velocity Signal | Trajectory |
|:---|:---|:---|
| **Hermes Agent** | 100 items/day, v0.14.0 stabilization | Windows regression (#28920) needs hotfix; kanban fixes landed |
| **NanoClaw** | 22 items/day, WhatsApp focus | Reactive bug-fixing; architectural debt (#1723 database layer stalled 6 weeks) |
| **NullClaw** | 14 items/day, hackathon cleanup | Windows unblocked (#920), Android broken (#868 ignored 27 days) |
| **Moltis** | 8 items/day, same-day fixes | Responsive but small; no deep backlog |

### Tier 4: Stagnant/At Risk
| Project | Velocity Signal | Concern |
|:---|:---|:---|
| **ZeptoClaw** | 2 automated PRs, zero issues | Possible maintainer abandonment; no functional changes |
| **TinyClaw** | Zero activity | Confirmed inactive |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Actionable Insight |
|:---|:---|:---|
| **Multi-agent is becoming table stakes, not differentiator** | Every Tier 1–2 project has active multi-agent work; LobsterAI already shipped observability | Focus on *debuggability* and *cost attribution* across agent hierarchies, not just existence |
| **Session/state management is the universal scaling bottleneck** | OpenClaw OOM/compaction, NanoBot WebUI corruption, PicoClaw PID loops, CoPaw stream stalls | Invest in database-backed sessions (ZeroClaw SQLite, NanoClaw #1723) over file-based approaches early |
| **Enterprise security features are accelerating from "nice-to-have" to blocker** | NullClaw #911 (privacy envelopes), IronClaw #3795 (legacy manifest rejection), CoPaw #4532 (MCP OAuth 2.1) | Design secret handling, audit logging, and supply-chain verification into core architecture, not as plugins |
| **Platform parity pressure intensifying** | OpenClaw #75 (139 days, 105 comments), NanoBot Docker remote access, NullClaw Windows/Android splits | Desktop Linux and Windows native are now *expected* for any project claiming "personal assistant"; Electron/Tauri migration (CoPaw #3813, LobsterAI) is viable path |
| **"Companion" vs. "tool" positioning emerging** | ZeroClaw Dream Mode (#5849, 10 comments), CoPaw Pet plugin | Users increasingly want persistent, learning agents; this requires memory architecture beyond simple context windows |
| **MCP is consolidating as the interoperability standard** | LobsterAI, CoPaw, Moltis all investing; quick-start templates lowering friction | Build MCP server compatibility into skills/tools from day one |
| **Rate limiting and cost controls are production-critical** | OpenClaw #42475, CoPaw #4515 (429 cascade freeze), NanoBot #3735 | Implement circuit breakers and per-entity budgets at gateway level, not per-request |
| **Automation bot maturity correlates with maintainer bandwidth** | ClawSweeper (OpenClaw) manages scale but 93% backlog; NanoBot manual 61% merge healthier | Evaluate whether heavy automation masks review capacity constraints |

---

*Report compiled from 12 project digests totaling 2,847 tracked items (2026-05-19/20). All metrics derived from public GitHub activity.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-20

## 1. Today's Overview

NanoBot showed **extremely high development velocity** with 67 total items updated in the past 24 hours (31 issues, 36 PRs), indicating an actively maintained, fast-moving project. The merge rate is healthy at 61% (22/36 PRs merged or closed), though 14 open PRs suggest some backlog accumulation. No new release was cut despite significant feature merges, suggesting either a pending release or deliberate hold for stability. The project continues its strong China/Hong Kong academic roots (HKUDS) with growing international adoption, evidenced by multilingual issues and provider expansions.

---

## 2. Releases

**None** — No new version released today. The latest referenced version in issues is `0.1.5.post3.2026.05.13`.

---

## 3. Project Progress

### Merged/Closed PRs Today (22 total, selected highlights)

| PR | Description | Impact |
|---|---|---|
| [#3916](https://github.com/HKUDS/nanobot/pull/3916) | **Skywork first-level provider support** | Major LLM provider expansion (Chinese model) |
| [#3915](https://github.com/HKUDS/nanobot/pull/3915) / [#3917](https://github.com/HKUDS/nanobot/pull/3917) | **APIFree provider support** | Agent-optimized models via `api.apifree.ai` |
| [#3910](https://github.com/HKUDS/nanobot/pull/3910) | **StepFun image generation** | New image gen provider (阶跃星辰) |
| [#3914](https://github.com/HKUDS/nanobot/pull/3914) | **Image generation provider refactor** | Technical debt reduction — split 766-line monolith into per-file modules |
| [#3918](https://github.com/HKUDS/nanobot/pull/3918) | **Gateway cold start optimization: ~6.9s → ~385ms (94% improvement)** | Critical performance win for serverless/edge deployments |
| [#3920](https://github.com/HKUDS/nanobot/pull/3920) | **Compaction benchmark + consolidator prompt optimization** | Memory management quality improvements |
| [#3906](https://github.com/HKUDS/nanobot/pull/3906) | **WebUI settings overhaul** | App-style settings center with 7 sections, search, sidebar controls |
| [#3894](https://github.com/HKUDS/nanobot/pull/3894) | **Tool trace rendering fix** | WebUI now shows end/error phases, not just start |
| [#3891](https://github.com/HKUDS/nanobot/pull/3891) | **Bootstrap remote access for Docker** | CIDR-based allowlist solves remote deployment blocker |
| [#3854](https://github.com/HKUDS/nanobot/pull/3854) | **Peer roster via bootstrap endpoint** | Foundation for multi-agent orchestration |
| [#3621](https://github.com/HKUDS/nanobot/pull/3621) | **Production multi-role agent squad for HF Spaces** | Enterprise deployment pattern validated |

**Key trajectory**: Heavy investment in **provider diversity** (Skywork, APIFree, StepFun), **performance** (cold start), **WebUI polish**, and **multi-agent infrastructure**.

---

## 4. Community Hot Topics

| Item | Comments | Analysis |
|---|---|---|
| [#193](https://github.com/HKUDS/nanobot/issues/193) Ollama API support? (CLOSED, 14 comments) | 14 | **Resolved but representative**: Users want local model flexibility. Closed after Ollama support was added, but continues to attract attention as local/edge deployment grows. |
| [#3790](https://github.com/HKUDS/nanobot/issues/3790) WebUI session printing content display错乱 (OPEN, stale, 14 comments) | 14 | **Critical UI regression** in v0.1.5.post3.2026.05.13 — Chinese users reporting garbled output requiring page refresh. No fix PR visible. |
| [#2463](https://github.com/HKUDS/nanobot/issues/2463) Architectural issue: prompt prefix preservation (CLOSED, 11 comments) | 11 | **Deep architectural concern** — conversation history divergence from actual prompts breaks OpenAI compatibility. Closed but signals core protocol fragility. |
| [#1692](https://github.com/HKUDS/nanobot/issues/1692) Telegram bot answers twice (CLOSED, 9 comments, 4 👍) | 9 | **High-user-impact bug** — double rendering (markdown + raw). Most upvoted issue, indicating Telegram channel polish gaps. |
| [#74](https://github.com/HKUDS/nanobot/issues/74) Telegram messages no reply (CLOSED, 9 comments, 2 👍) | 9 | **Onboarding friction** — configuration complexity for Telegram gateway. |

**Underlying needs**: (1) **WebUI stability** as primary interface matures, (2) **Channel reliability** (Telegram, WeChat, Feishu), (3) **Architectural correctness** for LLM protocol compliance.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Details |
|---|---|---|---|---|
| **🔴 High** | [#3790](https://github.com/HKUDS/nanobot/issues/3790) WebUI display corruption | OPEN | ❌ No | v0.1.5.post3 regression; garbled content in sessions |
| **🔴 High** | [#3884](https://github.com/HKUDS/nanobot/issues/3884) WebUI conversation closes after first response | OPEN | ❌ No | WebSocket channel breakage; Debian gateway |
| **🟡 Medium** | [#3863](https://github.com/HKUDS/nanobot/issues/3863) WeChat login fails — "version too low" | CLOSED | ✅ Likely | WeChat protocol deprecation; no explicit fix PR cited |
| **🟡 Medium** | [#3901](https://github.com/HKUDS/nanobot/issues/3901) X checking job infinite loop | CLOSED | ❌ Unclear | Tool call iteration limit hit; cron/job system fragility |
| **🟡 Medium** | [#3869](https://github.com/HKUDS/nanobot/pull/3869) DeepSeek null/empty content hardening | OPEN PR | 🔄 Pending | DeepSeek v4-pro/v4-flash API compatibility; preserves content, sanitizes nulls |
| **🟡 Medium** | [#3857](https://github.com/HKUDS/nanobot/issues/3857) Bootstrap HTTP 500 | CLOSED | ❌ Unclear | Gateway FE connectivity; generic error masking |
| **🟢 Low** | [#3919](https://github.com/HKUDS/nanobot/pull/3919) `restrictToWorkspace` subfolder bug | OPEN PR | 🔄 Pending | Shell tool path guard fix |

**Stability assessment**: Two **unfixed WebUI regressions** are the top risk. The project is accumulating technical debt in channel integrations (WeChat, Telegram, Feishu) due to third-party API drift.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Release | Rationale |
|---|---|---|---|
| **Signal channel support** | [#3852](https://github.com/HKUDS/nanobot/pull/3852) OPEN | **High** | Complete PR ready; signal-cli integration with DMs, groups, attachments |
| **Multi-agent squad / "Nanobot Legion"** | [#3913](https://github.com/HKUDS/nanobot/pull/3913) OPEN, [#3621](https://github.com/HKUDS/nanobot/pull/3621) CLOSED | **High** | HF Spaces deployment validated; WebUI peer discovery merged |
| **Persistent memory (Mnemon integration)** | [#3888](https://github.com/HKUDS/nanobot/issues/3888) CLOSED | **Medium** | Third-party solution promoted; may become official or inspire native implementation |
| **Historical token usage (`/insights`)** | [#3735](https://github.com/HKUDS/nanobot/pull/3735) OPEN | **Medium** | Cost management critical for pay-per-token users; PR ready since May 11 |
| **Async memory consolidation / proactive GC** | [#2604](https://github.com/HKUDS/nanobot/issues/2604) OPEN | **Medium** | Performance/architectural improvement; blocks scaling |
| **Human takeover / bot pause commands** | [#3322](https://github.com/HKUDS/nanobot/issues/3322) CLOSED | **Low-Medium** | WhatsApp enterprise need; closed without visible implementation |
| **MPP (Machine Payments Protocol)** | [#2845](https://github.com/HKUDS/nanobot/issues/2845) CLOSED | **Low** | Speculative; no follow-up activity |

**Predicted next release focus**: Signal channel + multi-agent squad GA, WebUI stability fixes, provider expansion (APIFree/Skywork/StepFun).

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|---|---|---|
| **WebUI reliability** | #3790, #3884, #3894 | Critical — primary interface unstable |
| **Channel integration fragility** | #3863 (WeChat), #1692, #74 (Telegram), #2970, #1607 (Feishu) | High — breaks core "omnichannel" value prop |
| **Memory/session management** | #2638, #3029, #2463, #923 | High — silent failures, unbounded growth, repetition loops |
| **Configuration complexity** | #74, #1826, #87, #1699 | Medium — Docker, SSH, npm build issues |
| **Tool discovery/update lag** | #2325, #1552, #2442 | Medium — MCP tools stale, no hot reload |

### Use Cases Emerging
- **Solo operator + AI team**: "1-2 people + AI agents on single HF Space container" (#3913)
- **Cost-conscious API users**: Tracking spend across providers (#3735)
- **Local/edge deployment**: Ollama, vLLM, Atomic Chat demand (#193, #3912)

### Satisfaction Signals
- Active contribution of provider integrations (Skywork, StepFun, APIFree) indicates healthy ecosystem
- Benchmark framework added (#3920) suggests engineering maturity

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [#3790](https://github.com/HKUDS/nanobot/issues/3790) WebUI display corruption | 6 days | **🔴 Escalating** | Assign frontend maintainer; blocking v0.1.5 adoption |
| [#3884](https://github.com/HKUDS/nanobot/issues/3884) WebUI conversation closes | 3 days | **🔴 Escalating** | Same as above; may share root cause with #3790 |
| [#2604](https://github.com/HKUDS/nanobot/issues/2604) Async memory consolidation | 52 days | **🟡 Stalled** | Performance-critical; has detailed technical proposal |
| [#3735](https://github.com/HKUDS/nanobot/pull/3735) `/insights` token tracking | 9 days | **🟡 Stalled** | Ready PR; needs review/merge |
| [#3852](https://github.com/HKUDS/nanobot/pull/3852) Signal channel | 4 days | **🟢 On track** | Complete implementation; likely merge pending review |
| [#3913](https://github.com/HKUDS/nanobot/pull/3913) Nanobot Legion multi-agent | 1 day | **🟢 On track** | Showcase PR; depends on multiple merged PRs |

**Maintainer attention priority**: The two open WebUI bugs (#3790, #3884) are the highest risk to user retention and should be triaged immediately. The stalled async memory consolidation issue (#2604) represents a scalability ceiling that will compound as multi-agent features land.

---

*Digest generated from HKUDS/nanobot GitHub activity on 2026-05-19 (reported 2026-05-20).*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-20

## 1. Today's Overview

Hermes Agent shows **high-velocity development** with 100 items updated in the last 24 hours (50 issues, 50 PRs), indicating an active, growing open-source community. The project is currently in a **bug-fix and stabilization phase** following the v0.14.0 release (tagged 2026-05-16), with zero new releases today. Notably, 17 PRs were merged/closed versus 33 remaining open, suggesting maintainers are actively landing fixes but facing a growing review backlog. The activity is concentrated in **gateway platform adapters**, **kanban task orchestration**, and **Windows compatibility** — areas critical to production deployments.

---

## 2. Releases

**No new releases** (v0.14.0 remains current as of 2026-05-16).

---

## 3. Project Progress

### Merged/Closed PRs Today (17 total; key items highlighted)

| PR | Author | Summary | Impact |
|---|---|---|---|
| [#28990](https://github.com/NousResearch/hermes-agent/pull/28990) | tsrines | **fix(discord)**: respect pairing store in `_is_allowed_user` | Security fix: Discord gateway now honors `hermes pairing approve` flow instead of env-var allowlists only |
| [#28993](https://github.com/NousResearch/hermes-agent/pull/28993) | teknium1 | **fix(gateway)**: transcribe native voice notes (Discord + DingTalk) | Voice message STT parity across platforms; salvages [#28918](https://github.com/NousResearch/hermes-agent/pull/28918) |
| [#28726](https://github.com/NousResearch/hermes-agent/pull/28726) / [#28994](https://github.com/NousResearch/hermes-agent/pull/28994) | xxxigm / teknium1 | **fix(kanban)**: worker-initiated block must not be auto-promoted | Critical infinite-loop fix in task orchestration (see [#28712](https://github.com/NousResearch/hermes-agent/issues/28712)) |
| [#28988](https://github.com/NousResearch/hermes-agent/pull/28988) | zccyman | **fix**: read `max_tokens` from `custom_providers` per-model config | Corrects silent 4096-token fallback for custom providers |
| [#28986](https://github.com/NousResearch/hermes-agent/pull/28986) | sumsun-dev | **feat(gateway)**: harden Slack agent collaboration flow | Production-grade Slack integration with Kanban, thread subscriptions, persona-aware notifications |

**Features advancing**: Config-Runtime Contract Registry (Phase 1) in [#28995](https://github.com/NousResearch/hermes-agent/pull/28995), marketing agent factory MVP in [#28483](https://github.com/NousResearch/hermes-agent/pull/28483), Fireworks AI provider in [#28983](https://github.com/NousResearch/hermes-agent/pull/28983), Nostr NIP-17 adapter in [#16769](https://github.com/NousResearch/hermes-agent/pull/16769).

---

## 4. Community Hot Topics

| Item | Comments | Analysis of Underlying Need |
|---|---|---|
| [#18482](https://github.com/NousResearch/hermes-agent/issues/18482) Docker HOME permission denied | 5 | **Container UX gap**: Users expect Docker to "just work" with custom HOME; unclear docs or missing init script for volume permissions |
| [#8965](https://github.com/NousResearch/hermes-agent/issues/8965) Tool calls rendered as raw XML (Ollama cloud) | 3 | **Provider abstraction leak**: Ollama proxy path bypasses Hermes's tool-execution parser; users need transparent routing regardless of backend |
| [#24523](https://github.com/NousResearch/hermes-agent/issues/24523) `custom:llmgateway` streaming tool failures | 3 | **Streaming reliability**: Production users hitting upstream OpenAI Python SDK bug; need either workaround or documented pinning |
| [#11195](https://github.com/NousResearch/hermes-agent/issues/11195) Add Codex as image generation backend | 3, 👍2 | **Unified auth/routing**: Users want single-provider credential flow for all modalities |
| [#28823](https://github.com/NousResearch/hermes-agent/issues/28823) WhatsApp reply context lost | 3 | **Conversational fidelity**: Business users need thread-aware agents for customer support |

**Pattern**: Gateway/platform adapter issues dominate top activity — signal that Hermes is being deployed to **multi-channel production environments** where message metadata fidelity matters.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|---|---|---|---|
| **P1** | [#28920](https://github.com/NousResearch/hermes-agent/issues/28920) Windows: All tools fail with duplicate `creationflags` | **OPEN** — 0.14.0 completely broken on Windows | None yet; likely regression from subprocess refactoring |
| **P1** | [#8965](https://github.com/NousResearch/hermes-agent/issues/8965) Ollama cloud tool calls as raw XML | OPEN | None |
| **P1** | [#24523](https://github.com/NousResearch/hermes-agent/issues/24523) `custom:llmgateway` streaming failures | OPEN — root cause identified upstream | None; blocked on [openai-python#2722](https://github.com/openai/openai-python/issues/2722) |
| **P1** | [#28902](https://github.com/NousResearch/hermes-agent/issues/28902) Anthropic Max OAuth "out of extra usage" with skills | OPEN | None — system prompt injection cost model issue |
| **P2** | [#18482](https://github.com/NousResearch/hermes-agent/issues/18482) Docker HOME permission denied | OPEN | None |
| **P2** | [#28863](https://github.com/NousResearch/hermes-agent/issues/28863) `terminal.docker_extra_args` silently dropped | OPEN | **Yes**: [#28995](https://github.com/NousResearch/hermes-agent/pull/28995) (Phase 1 registry) |
| **P2** | [#28886](https://github.com/NousResearch/hermes-agent/issues/28886) Gateway model picker ignores Portal API dynamic recs | OPEN | None |
| **P2** | [#28960](https://github.com/NousResearch/hermes-agent/issues/28960) Missing browser deps in non-root containers | OPEN | None |
| **P2** | [#28876](https://github.com/NousResearch/hermes-agent/issues/28876) API system prompt blocks markdown override | OPEN | None |

**Regression alert**: v0.14.0 introduced **critical Windows breakage** ([#28920](https://github.com/NousResearch/hermes-agent/issues/28920)) and **kanban infinite loops** (fixed in [#28726](https://github.com/NousResearch/hermes-agent/pull/28726)/[#28994](https://github.com/NousResearch/hermes-agent/pull/28994)). Recommend hotfix release.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Version | Rationale |
|---|---|---|---|
| **Config-Runtime Contract Registry** | [#28995](https://github.com/NousResearch/hermes-agent/pull/28995) | **High** | Phase 1 PR open; fixes two live bugs; architectural debt priority |
| **SerpApi web search** | [#27723](https://github.com/NousResearch/hermes-agent/issues/27723) | Medium | Straightforward provider addition; follows Exa/Tavily pattern |
| **Generic webhooks** | [#28913](https://github.com/NousResearch/hermes-agent/issues/28913) | Medium | High demand for non-GitHub integrations; gateway extensibility |
| **Session List REST API** | [#28859](https://github.com/NousResearch/hermes-agent/issues/28859) | Medium | Blocked on API design; needed for IDE plugins |
| **Fireworks AI provider** | [#28983](https://github.com/NousResearch/hermes-agent/pull/28983) | **High** | PR open, clean ProviderProfile integration |
| **Nostr gateway** | [#16769](https://github.com/NousResearch/hermes-agent/pull/16769) | Low-Medium | Niche but complete; pending security review |
| **Marketing agent factory** | [#28483](https://github.com/NousResearch/hermes-agent/pull/28483) | Low | Large MVP scope; likely incubates as plugin |
| **Codex image generation backend** | [#11195](https://github.com/NousResearch/hermes-agent/issues/11195) | Medium | Small surface; unified auth argument |

---

## 7. User Feedback Summary

### Pain Points
- **Windows users**: v0.14.0 is unusable — subprocess `creationflags` regression is a **production blocker** ([#28920](https://github.com/NousResearch/hermes-agent/issues/28920))
- **Docker/container deployers**: Permission errors, missing browser deps, and silently dropped config keys create "works on my machine" friction ([#18482](https://github.com/NousResearch/hermes-agent/issues/18482), [#28960](https://github.com/NousResearch/hermes-agent/issues/28960), [#28863](https://github.com/NousResearch/hermes-agent/issues/28863))
- **Remote server users**: OAuth flows hardcoded to `127.0.0.1` break headless/VM workflows ([#28971](https://github.com/NousResearch/hermes-agent/issues/28971))
- **Kanban operators**: Auto-unblock logic too aggressive, causing worker storms ([#28944](https://github.com/NousResearch/hermes-agent/issues/28944), [#28903](https://github.com/NousResearch/hermes-agent/issues/28903)) — **partially fixed today**

### Positive Signals
- **Slack/Discord/Telegram gateway users** actively building production integrations (high PR quality in [#28986](https://github.com/NousResearch/hermes-agent/pull/28986), [#28990](https://github.com/NousResearch/hermes-agent/pull/28990))
- **Plugin ecosystem emerging**: TokenTelemetry dashboard plugin ([#28858](https://github.com/NousResearch/hermes-agent/issues/28858)), marketing factory ([#28483](https://github.com/NousResearch/hermes-agent/pull/28483))
- **Skills directory** generating creative use (though IP audit needed — [#28890](https://github.com/NousResearch/hermes-agent/issues/28890))

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|---|---|---|---|
| [#16769](https://github.com/NousResearch/hermes-agent/pull/16769) Nostr NIP-17 adapter | ~22 days | Stale review | Security audit for cryptographic operations; rebase |
| [#26129](https://github.com/NousResearch/hermes-agent/pull/26129) Performance: cache tool hot paths | ~5 days | Performance regression risk | Benchmark validation; potential v0.15.0 candidate |
| [#28078](https://github.com/NousResearch/hermes-agent/pull/28078) Refresh gateway prompts on SOUL.md change | ~2 days | User confusion | Merge ready; SOUL.md editing is core UX |
| [#25345](https://github.com/NousResearch/hermes-agent/pull/25345) Android/Termux HTML browser handoff | ~6 days | Mobile platform gap | Testing on physical devices; small scope |
| [#21798](https://github.com/NousResearch/hermes-agent/issues/21798) Python <3.10 crash | ~12 days | Compatibility | Small fix (`from __future__ import annotations` or `typing.Optional`); unassigned |
| [#26847](https://github.com/NousResearch/hermes-agent/issues/26847) xAI OAuth 403 for standard subscribers | ~4 days | Provider relationship | xAI backend policy clarification; docs update |

**Maintainer attention needed**: Python 3.9 compatibility ([#21798](https://github.com/NousResearch/hermes-agent/issues/21798)) is a one-line fix languishing; xAI tier policy ([#26847](https://github.com/NousResearch/hermes-agent/issues/26847)) needs vendor coordination. Nostr PR ([#16769](https://github.com/NousResearch/hermes-agent/pull/16769)) risks bit-rot without review prioritization.

---

*Digest generated from 50 issues and 50 PRs updated 2026-05-19/20. Project health: **active but stabilization-critical** — recommend v0.14.1 hotfix for Windows and kanban regressions.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-20

## 1. Today's Overview

PicoClaw shows **moderate-to-high activity** with 25 tracked items updated in the last 24 hours (9 issues, 16 PRs), indicating an active development cycle. The project maintains a healthy merge rate with 7 PRs closed/merged against 9 remaining open, though the open PR backlog suggests some review bottleneck. A new nightly build was published, signaling continuous integration is operational. The community is particularly engaged around provider compatibility (OpenAI Codex, DeepSeek, Xiaomi Mimo), multi-agent architecture, and security hardening. Notably, several high-priority bugs received attention today, including a critical PID stale-file crash loop and a sandbox escape vulnerability.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| **[v0.2.8-nightly.20260519.941bac23](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)** | Nightly | Automated build from `main` branch; marked unstable. Full changelog available [here](https://github.com/sipeed/picoclaw/compare/v0.2.8...main). |

**⚠️ Caution:** Nightly builds may be unstable; production deployments should use stable releases.

---

## 3. Project Progress

### Merged/Closed PRs Today (7 items)

| PR | Author | Summary | Impact |
|----|--------|---------|--------|
| [#2892](https://github.com/sipeed/picoclaw/pull/2892) | lxowalle | **Streaming support** — Dual opt-in streaming (model + channel config), generic agent streaming eligibility, provider-specific implementations | **Major feature**: Foundation for real-time agent responses |
| [#2896](https://github.com/sipeed/picoclaw/pull/2896) | lc6464 | **Provider metadata unification** — Backend catalog as single source of truth for provider metadata; reduces UI/backend drift | **Architecture**: Long-term maintainability improvement |
| [#2897](https://github.com/sipeed/picoclaw/pull/2897) | lc6464 | **Model name persistence** — `model_name` preserved across SeaHorse history, transcripts, realtime payloads, Web UI | **UX**: Full audit trail of which model handled each message |
| [#2755](https://github.com/sipeed/picoclaw/pull/2755) | BeaconCat | **Xiaomi Mimo provider** — Streaming `reasoning_content` + video media support for OpenAI-compatible layer | **Provider expansion**: Multimodal AI integration |
| [#2740](https://github.com/sipeed/picoclaw/pull/2740) | cjkihl | **DeepSeek reasoning fix** — Captures `reasoning_content` from streaming deltas (was silently dropped) | **Bugfix**: Thinking-mode now functional |
| [#2703](https://github.com/sipeed/picoclaw/pull/2703) | JohnLeFeng | **Intel OpenVINO Model Server** — Local LLM inference on Intel CPU/GPU/NPU | **Deployment**: Edge/enterprise on-premise option |
| [#2491](https://github.com/sipeed/picoclaw/pull/2491) | linknightmap | **Session management commands** — `/status`, `/compact`, `/new` slash commands for manual context management | **UX**: User-controlled memory/compression |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Type | Comments/Reactions | Topic | Underlying Need |
|------|------|-------------------|-------|---------------|
| [#1757](https://github.com/sipeed/picoclaw/issues/1757) | Issue (closed) | 9 comments | Cron-triggered channel errors | **Reliability of scheduled agent tasks** — users need persistent, fault-tolerant automation |
| [#1934](https://github.com/sipeed/picoclaw/issues/1934) | Issue (open) | 7 comments | Multi-Agent Collaboration Phase 2 | **Scalable agent orchestration** — from single-agent to swarm architectures |
| [#2674](https://github.com/sipeed/picoclaw/issues/2674) | Issue (open) | 5 comments, 👍×4 | Codex OAuth empty responses | **Enterprise OpenAI compatibility** — ChatGPT backend integration is broken for paying users |
| [#2720](https://github.com/sipeed/picoclaw/issues/2720) | Issue (open) | 4 comments | Stale PID crash loop | **Production stability** — deployment on resource-constrained devices (Pi Zero) |
| [#2688](https://github.com/sipeed/picoclaw/issues/2688) | Issue (closed) | 4 comments | Sandbox escape via `find /` | **Security hardening** — workspace isolation is incomplete |

**Analysis:** The community is pushing PicoClaw from "functional prototype" toward "production-grade platform." The 👍×4 on #2674 indicates real user pain with OpenAI enterprise integrations. Multi-agent (#1934) and security (#2688, #2720) represent maturity demands.

---

## 5. Bugs & Stability

| Severity | Item | Status | Description | Fix PR? |
|----------|------|--------|-------------|---------|
| 🔴 **Critical** | [#2720](https://github.com/sipeed/picoclaw/issues/2720) | Open | **Stale PID crash loop**: Gateway won't start if OS reuses PID for unrelated process (e.g., `systemd-resolved`). Singleton check lacks process identity verification. | **Yes**: [#2813](https://github.com/sipeed/picoclaw/pull/2813) (open, updated today) |
| 🟡 **High** | [#2688](https://github.com/sipeed/picoclaw/issues/2688) | Closed | **Sandbox escape**: `find /` enumerates filesystem outside workspace despite `cat`/`ls` being blocked. | Fixed (closed 2026-05-19) |
| 🟡 **High** | [#2674](https://github.com/sipeed/picoclaw/issues/2674) | Open | **Codex OAuth empty responses**: ChatGPT backend streams via `response.output_item.done` not handled; fallback error triggered falsely. | No dedicated PR yet |
| 🟢 **Medium** | [#1757](https://github.com/sipeed/picoclaw/issues/1757) | Closed | Cron hourly tasks cause channel errors | Fixed (closed 2026-05-19) |
| 🟢 **Medium** | [#2753](https://github.com/sipeed/picoclaw/issues/2753) | Closed | Build from source: `picoclaw-launcher` missing | Fixed (closed 2026-05-19) |

**Stability Assessment:** Two critical-path fixes landed today (sandbox, cron). The stale PID issue (#2720/#2813) is the outstanding production blocker — affects headless/IoT deployments where unclean shutdowns are common.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Maturity Signal | Likelihood in v0.3.x |
|---------|--------|---------------|----------------------|
| **Multi-Agent Collaboration** | [#1934](https://github.com/sipeed/picoclaw/issues/1934) | Phase 1 complete (#1894); Phase 2 drafted; 7 comments | **High** — core architectural priority |
| **Async result delivery policy** | [#2829](https://github.com/sipeed/picoclaw/issues/2829) + [#2830](https://github.com/sipeed/picoclaw/pull/2830) | PR open, implements `delivery_mode` override | **High** — PR ready for review |
| **Context/memory management (infinite context, compression)** | [#2774](https://github.com/sipeed/picoclaw/issues/2774) | Referenced external plugin; 2 comments; no PR | **Medium** — architectural, needs design |
| **Per-message timestamps** | [#2788](https://github.com/sipeed/picoclaw/pull/2788) | PR open, frontend-ready | **High** — small, UX-improving |
| **Skill catalog token optimization** | [#2781](https://github.com/sipeed/picoclaw/pull/2781) | PR open, performance-focused | **Medium** — provider-dependent benefit |
| **Channel identification refactor** | [#2551](https://github.com/sipeed/picoclaw/pull/2551) | PR open since April 16, multi-domain impact | **Medium** — breaking change risk |

**Prediction:** v0.2.8 stable will likely include streaming (#2892), DeepSeek fixes (#2740), and session commands (#2491). v0.3.0 may target multi-agent (#1934) + async delivery (#2830) as headline features.

---

## 7. User Feedback Summary

### Pain Points
| Issue | User Context | Severity |
|-------|-----------|----------|
| **OpenAI Codex broken for ChatGPT backend** | Enterprise/users paying for ChatGPT Plus integration | 🔴 Blocks adoption |
| **Build/launch friction** | Source builders confused by missing launcher (#2753) | 🟡 Onboarding friction |
| **Config migration UX** | Example configs outdated; backup chain works but discovery poor (#2771) | 🟢 Annoyance |
| **Context budget overflow** | Seahorse protects "fresh tail" over budget (#2895) | 🟡 Silent degradation |

### Positive Signals
- **Hardware flexibility**: Raspberry Pi Zero W deployment (#1757), Intel NPU support (#2703) show edge/IoT traction
- **Provider diversity**: Xiaomi Mimo, DeepSeek, Ollama, OpenVINO — community is not locked to OpenAI
- **Security responsiveness**: Sandbox escape (#2688) closed quickly

### Satisfaction/Dissatisfaction Ratio
- **Satisfied**: Users with working setups praise flexibility and hardware range
- **Dissatisfied**: Enterprise OpenAI integrators, source builders, and anyone hitting edge-case stability (PID, cron)

---

## 8. Backlog Watch

### Stale Items Needing Maintainer Attention

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#2551](https://github.com/sipeed/picoclaw/pull/2551) | ~5 weeks | **High** — Channel refactor touches agent, tool, cron, config; merge conflicts likely | Review for v0.3.0 inclusion or close |
| [#2647](https://github.com/sipeed/picoclaw/pull/2647) | ~4 weeks | Medium — Web search YAML config + DuckDuckGo default | Simple fix; rebase and merge |
| [#2781](https://github.com/sipeed/picoclaw/pull/2781) | ~2 weeks | Medium — Token optimization | Benchmark review needed |
| [#2788](https://github.com/sipeed/picoclaw/pull/2788) | ~2 weeks | Low — Per-message timestamps | Quick win; approve |
| [#2813](https://github.com/sipeed/picoclaw/pull/2813) | ~2 weeks | **Critical** — Fixes #2720 production crash | **Urgent review required** |
| [#2830](https://github.com/sipeed/picoclaw/pull/2830) | ~2 weeks | Medium — Async delivery policy | Align with #1934 roadmap |

**Maintainer Recommendation:** Prioritize [#2813](https://github.com/sipeed/picoclaw/pull/2813) (PID fix) for immediate merge. Schedule [#2551](https://github.com/sipeed/picoclaw/pull/2551) review for architectural decision — it's the oldest open PR and blocks clean multi-instance channel support.

---

*Digest generated from GitHub activity 2026-05-19. All links: https://github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-20

## 1. Today's Overview

NanoClaw showed **elevated development activity** with 22 tracked items (4 issues, 18 PRs) updated in the past 24 hours, though no new releases were cut. The project is in an **intensive stabilization phase** for its WhatsApp channel integration, with multiple contributors converging on mention handling, auth flows, and message formatting bugs. The high open-to-closed ratio (13 open PRs vs. 5 merged/closed) suggests a backlog building, while the rapid same-day turnaround on several PRs indicates active contributor engagement. A critical architectural concern emerged around the `<messages>` batch envelope pattern causing Claude Agent SDK to emit synthetic responses rather than calling the API.

---

## 2. Releases

**No new releases** (v0 or maintenance releases) were published on 2026-05-19.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Description | Significance |
|:---|:---|:---|
| [#2559](https://github.com/nanocoai/nanoclaw/pull/2559) | Fix/compact boundary progress event | Resolves progress reporting during context compaction; follows contribution guidelines |
| [#2549](https://github.com/nanocoai/nanoclaw/pull/2549) | Phase 4: bash_tool + python_tool | **Major capability addition** — adds code execution tools to agent-runner; already deployed to production X bot |
| [#2547](https://github.com/nanocoai/nanoclaw/pull/2547) | Default webhook server to loopback (127.0.0.1) | **Security hardening** — prevents unintended LAN exposure; opt-in via `WEBHOOK_BIND` |
| [#815](https://github.com/nanocoai/nanoclaw/pull/815) | Progressive message streaming (draft stream) | **Closed as blocked** — Telegram live-edit feature stalled; architectural dependency unresolved |
| [#61](https://github.com/nanocoai/nanoclaw/pull/61) | WhatsApp auth retry + Anthropic env vars | Legacy PR finally closed; auth resilience improvements |

**Key advancement**: The `bash_tool` + `python_tool` merge represents a significant expansion of agent capabilities, enabling code execution within the containerized runner environment with telemetry propagation and MCP socket bind-mounts.

---

## 4. Community Hot Topics

| Item | Activity | Underlying Need |
|:---|:---|:---|
| [#2555](https://github.com/nanocoai/nanoclaw/issues/2555) / [#2556](https://github.com/nanocoai/nanoclaw/pull/2556) | Issue + same-day fix PR | **Core messaging reliability**: The `<messages>` batch envelope pattern breaks Claude Agent SDK contract; community needs deterministic API invocation |
| [#2560](https://github.com/nanocoai/nanoclaw/issues/2560) | High-priority bug, 0 comments | **WhatsApp onboarding friction**: `@`-mention detection blocks documented channel-approval flow; business-critical for group deployments |
| [#2552](https://github.com/nanocoai/nanoclaw/pull/2552) + [#2554](https://github.com/nanocoai/nanoclaw/pull/2554) + [#2553](https://github.com/nanocoai/nanoclaw/pull/2553) | 3 competing/fix PRs same day | **WhatsApp mention ecosystem**: Fragmented fixes for render, parsing, and agent-side formatting; indicates rushed integration |

**Analysis**: The WhatsApp channel (on `channels` branch) is experiencing **integration turbulence** — multiple contributors independently patching related bugs suggests insufficient end-to-end testing before merge. The rapid same-day PR #2556 for issue #2555 shows healthy responsiveness but also reactive rather than preventive development.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| **Critical** | [#2555](https://github.com/nanocoai/nanoclaw/issues/2555) | `<messages>` envelope causes synthetic "No response requested." — **API call suppressed entirely** | [PR #2556](https://github.com/nanocoai/nanoclaw/pull/2556) open, same author |
| **High** | [#2560](https://github.com/nanocoai/nanoclaw/issues/2560) | WhatsApp `isMention` hardcoded `undefined`; breaks router, blocks onboarding | No dedicated fix PR; may be covered by [#2552](https://github.com/nanocoai/nanoclaw/pull/2552) or [#2554](https://github.com/nanocoai/nanoclaw/pull/2554) |
| **High** | [#2561](https://github.com/nanocoai/nanoclaw/issues/2561) | **CLOSED** — Context compaction infinite retry loop without circuit breaker | Fixed via compaction boundary progress event (#2559) |
| **Medium** | [#2552](https://github.com/nanocoai/nanoclaw/pull/2552) | WhatsApp shutdown race wipes credentials; outbound mentions plain text | PR open, comprehensive fix |
| **Medium** | [#2548](https://github.com/nanocoai/nanoclaw/pull/2548) | Keychain read rolls back fresher OAuth token; silent task prompt failures | PR open |

**Regression risk**: The #2555/#2556 pair reveals a **contract mismatch** between NanoClaw's formatter and Claude Agent SDK v2.1.128. The `<messages>` XML envelope pattern appears to be an undocumented/unsupported batching mechanism that triggers synthetic stub behavior rather than API invocation.

---

## 6. Feature Requests & Roadmap Signals

| Item | Signal | Likelihood in Next Release |
|:---|:---|:---|
| [#2550](https://github.com/nanocoai/nanoclaw/issues/2550) | Two-tier project context: lightweight index + on-demand `STATUS` files | **High** — Addresses scaling pain for multi-project power users; no PR yet but well-specified |
| [#2490](https://github.com/nanocoai/nanoclaw/pull/2490) | LiteLLM provider integration | **Medium-High** — Operational/container skill, follows guidelines; broad model provider support |
| [#1723](https://github.com/nanocoai/nanoclaw/pull/1723) | Database adapter layer with SQLite | **Medium** — Large refactor (since April 10); may slip if stability priorities dominate |
| [#2553](https://github.com/nanocoai/nanoclaw/pull/2553) | WhatsApp-formatting container skill | **High** — Small, targeted; blocks proper WhatsApp UX |

**Predicted next release focus**: WhatsApp channel stabilization + LiteLLM provider expansion, with context loading architecture (#2550) as a dark-horse candidate if a contributor picks it up.

---

## 7. User Feedback Summary

### Pain Points
| Source | Issue | User Impact |
|:---|:---|:---|
| #2550 | Monolithic context loading | Power users with 5+ projects experience "context bloat"; current `CLAUDE.local.md` pattern doesn't scale |
| #2560 | Broken WhatsApp group onboarding | **Business-critical**: Documented channel-approval flow fails silently; users can't @-mention bot to authorize |
| #2551 | CLI help text out of sync with implementation | `--method qr-browser` recommended but unsupported; confusing first-run experience |
| #2555 | Silent API failures | Agents appear to "ignore" users when batched messages trigger synthetic responses |

### Satisfaction Indicators
- Rapid bug-to-PR turnaround (#2555 → #2556 in <24h) suggests responsive maintainers
- Production deployment of bash/python tools (#2549) indicates confidence in container isolation

---

## 8. Backlog Watch

| PR/Issue | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1723](https://github.com/nanocoai/nanoclaw/pull/1723) Database adapter | ~6 weeks | **High** — Core architecture; blocking other data-layer work | Maintainer review; large diff likely needs segmentation |
| [#2416](https://github.com/nanocoai/nanoclaw/pull/2416) CLI companion provisioning | ~9 days | Medium | Follows guidelines; CLI completeness |
| [#2403](https://github.com/nanocoai/nanoclaw/pull/2403) CI release workflow | ~10 days | Medium | Concurrency guard important for release safety |
| [#815](https://github.com/nanocoai/nanoclaw/pull/815) Progressive streaming | ~10 weeks | **Blocked** — Draft stream abstraction needs resolution | Close or unblock; unclear if Telegram edit API limitations are surmountable |

**Critical attention**: [#1723](https://github.com/nanocoai/nanoclaw/pull/1723) has been open since April 10 with no visible maintainer engagement. A database abstraction layer is foundational for multi-backend support and testability; prolonged stall risks contributor attrition and technical debt accumulation.

---

*Digest generated from NanoClaw GitHub activity on 2026-05-19. All links: https://github.com/nanocoai/nanoclaw*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-05-20

---

## 1. Today's Overview

NullClaw shows **moderate-to-high development velocity** with 13 PRs updated in the last 24 hours (6 open, 7 merged/closed) and 1 active issue, though no new releases were cut. The project is in an active stabilization phase focused on **cross-platform compatibility** (Windows DNS, Zig 0.16 builds, POSIX thread sleep) and **networking stack modernization** (migrating from curl subprocesses to native `std.http`). Notably, multiple hackathon-related PRs were closed, suggesting recent community event activity that may need cleanup attention. The single open issue indicates a **Termux/Android build blocker** affecting mobile users.

---

## 2. Releases

**No new releases** (v2026.4.17 remains latest as of data).

---

## 3. Project Progress

### Merged/Closed PRs (7 items)

| PR | Author | Summary | Link |
|:---|:---|:---|:---|
| #911 | gosIX22 | **Privacy-preserving secret triage** for `nullclaw workspace audit` — LLM classifies findings using metadata envelopes without exposing raw secrets | [nullclaw/nullclaw#911](https://github.com/nullclaw/nullclaw/pull/911) |
| #885 | sleep3r | **Data Governance Layer** (hackathon entry) — Russian-language PR for WB×OpenSource Hackathon | [nullclaw/nullclaw#885](https://github.com/nullclaw/nullclaw/pull/885) |
| #908 | ShEvVl | **Hackathon infrastructure bundle** — DNS fixes, reasoning stream, cost tracking, DDG search enhancements | [nullclaw/nullclaw#908](https://github.com/nullclaw/nullclaw/pull/908) |
| #910 | vernonstinebaker | **Discord gateway stability** — watchdog, exponential backoff, interrupt-safe stop, TLS leak fix; soak-tested 12h across 4 nodes (macOS arm64, Linux aarch64/riscv64, Android aarch64) | [nullclaw/nullclaw#910](https://github.com/nullclaw/nullclaw/pull/910) |
| #883 | mark-os | **Probe executable resolution** — pre-spawn PATH verification prevents Zig stdlib `execve` bug from leaving zombie file descriptors | [nullclaw/nullclaw#883](https://github.com/nullclaw/nullclaw/pull/883) |
| #912 | Kures | **Synchronous `/webhook` endpoint** for paired-token worker dispatch, closing integration gap for nullboiler | [nullclaw/nullclaw#912](https://github.com/nullclaw/nullclaw/pull/912) |
| #920 | chenhlSH | **Windows DNS resolution fix** — `getAddressList()` unconditionally returned `UnknownHostName` for all non-localhost hostnames | [nullclaw/nullclaw#920](https://github.com/nullclaw/nullclaw/pull/920) |

**Key advancements:** Production-grade Discord reliability (#910); security audit automation (#911); Windows networking unblocked (#920); webhook infrastructure for worker scaling (#912).

---

## 4. Community Hot Topics

| Item | Heat | Analysis | Link |
|:---|:---|:---|:---|
| #920 Windows DNS fix | **Critical fix, fast merge** | Merged same-day (May 18→19); indicates Windows users completely blocked from provider access. Root cause: `getAddressList()` had broken conditional logic for Windows path. **Need:** Better CI coverage for Windows networking paths. | [nullclaw/nullclaw#920](https://github.com/nullclaw/nullclaw/pull/920) |
| #910 Discord stability | **Production validation** | Extensive soak-testing narrative suggests this was a pain point for self-hosters. Multi-arch testing is unusual and welcome. **Need:** Confidence in long-running gateway connections for chatbot deployments. | [nullclaw/nullclaw#910](https://github.com/nullclaw/nullclaw/pull/910) |
| #881 Remove runtime curl | **Architectural debate** | Open since May 1; touches 8+ subsystems. Likely contentious due to risk of regressions in provider integrations. **Need:** Modern, dependency-free HTTP stack without sacrificing compatibility. | [nullclaw/nullclaw#881](https://github.com/nullclaw/nullclaw/pull/881) |
| #911 Privacy-preserving audit | **Security innovation** | Novel "envelope" approach to LLM secret triage. **Need:** Compliance-friendly AI automation that doesn't leak secrets to cloud LLMs. | [nullclaw/nullclaw#911](https://github.com/nullclaw/nullclaw/pull/911) |

**Underlying pattern:** Community is pushing NullClaw toward **production self-hosting reliability** (Discord stability, Windows fixes, HTTP stack independence) and **enterprise-ready security** (audit privacy, data governance).

---

## 5. Bugs & Stability

| Severity | Item | Status | Details | Link |
|:---|:---|:---|:---|:---|
| **🔴 High** | #868 Android/Termux build failure | **Open, unassigned** | `zig build` fails on aarch64 with `AccessDenied` on `options.zig` `linkat` syscall. Blocks mobile/Termux users entirely. No fix PR yet. | [nullclaw/nullclaw#868](https://github.com/nullclaw/nullclaw/issues/868) |
| **🟡 Medium** | #892 Windows DNS (real resolution) | **Open, has competing fix** | PR #920 closed a related symptom, but #892 targets deeper "real DNS resolution" vs. bundled `curl.exe` shim. May be partially addressed. | [nullclaw/nullclaw#892](https://github.com/nullclaw/nullclaw/pull/892) |
| **🟡 Medium** | #887 Zig 0.16 build (win/linux) | **Open** | Build system breakage with latest Zig compiler. Blocks users on bleeding-edge toolchain. | [nullclaw/nullclaw#887](https://github.com/nullclaw/nullclaw/pull/887) |
| **🟢 Low** | #891 curl probe transport failures | **Open** | Diagnostic improvement — preserves specific curl error codes in provider health probes rather than collapsing to generic failure. | [nullclaw/nullclaw#891](https://github.com/nullclaw/nullclaw/pull/891) |

**Stability assessment:** The closed #920 and #910 address critical Windows and Discord issues, but **Android/Termux remains completely broken** (#868) with no maintainer response since April 23. This is a growing platform for self-hosters and should be prioritized.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **Native HTTP stack (no curl)** | #881 | **High** | Large refactor touching all providers; active updates through May 19. Major architectural milestone. |
| **Cron subagent system** | #783 | **Moderate** | Substantial feature (DB scheduler, history, JSON output, security hardening); open since April 7 but recently updated. |
| **POSIX real thread sleep** | #878 | **Moderate** | Performance/correctness fix for managed runtime; straightforward but needs cross-platform validation. |
| **Synchronous webhook workers** | #912 | **Shipped** | Already merged; enables nullboiler integration. |
| **Privacy-preserving audit LLM** | #911 | **Shipped** | Already merged; signals enterprise/security direction. |

**Predicted next release themes:** HTTP stack modernization, cron automation, cross-platform runtime correctness.

---

## 7. User Feedback Summary

### Pain Points
| Issue | Evidence | User Segment |
|:---|:---|:---|
| **Windows completely broken for remote providers** | #920 merged same-day; #892 still open | Windows self-hosters |
| **Android/Termux unsupported** | #868 open since April, no response | Mobile/power users, security-conscious |
| **Zig version fragility** | #887, #868 both compiler-version sensitive | Early adopters, contributors |
| **Discord gateway crashes** | #910's extensive fix narrative | Chatbot operators, 24/7 deployments |

### Positive Signals
- **Strong multi-arch testing culture** (#910: macOS/Linux/Android across arm64/riscv64/aarch64)
- **Security-conscious design** (#911's privacy envelopes, #885's data governance)
- **Hackathon engagement** — 3 PRs from WB×OpenSource event indicates community growth

### Satisfaction/Dissatisfaction
- ✅ **Satisfied:** Users needing Discord reliability, security audit automation, Windows fixes
- ❌ **Dissatisfied:** Android/Termux users (no path forward), Zig 0.16 early adopters (build breaks), Windows users wanting *native* DNS (#892 vs. #920 shim fix)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| #868 Android/Termux build failure | **27 days** | 🔴 **Platform abandonment** | Maintainer triage; likely `linkat` syscall incompatibility with Android's FUSE/SELinux. Needs Android dev environment or community patch review. | [nullclaw/nullclaw#868](https://github.com/nullclaw/nullclaw/issues/868) |
| #783 Cron subagent | **43 days** | 🟡 Feature stagnation | Large PR; needs review bandwidth or decomposition into smaller merges. | [nullclaw/nullclaw#783](https://github.com/nullclaw/nullclaw/pull/783) |
| #878 POSIX nanosleep | **20 days** | 🟡 Performance correctness | Straightforward; may be waiting for #881 HTTP refactor to avoid merge conflicts. | [nullclaw/nullclaw#878](https://github.com/nullclaw/nullclaw/pull/878) |
| #892 vs. #920 Windows DNS | **Concurrent** | 🟡 Redundant effort? | #920 merged a narrow fix; #892 aims deeper. Needs maintainer clarity on whether #920 supersedes or #892 should rebase. | [nullclaw/nullclaw#892](https://github.com/nullclaw/nullclaw/pull/892) |

**Critical concern:** #868 is the oldest open item with **zero maintainer engagement** (only 1 comment total). Termux is a significant vector for privacy-focused users who cannot run traditional servers. Ignoring this risks ceding the mobile self-hosting market to competitors.

---

## Project Health Score

| Metric | Rating |
|:---|:---|
| Velocity | ⭐⭐⭐⭐☆ (13 PRs/24h is strong) |
| Responsiveness | ⭐⭐⭐☆☆ (fast on Windows #920, silent on Android #868) |
| Release cadence | ⭐⭐☆☆☆ (no release since April 17; 33 days) |
| Community growth | ⭐⭐⭐⭐☆ (hackathon participation, multi-arch testing) |
| Platform coverage | ⭐⭐⭐☆☆ (good desktop/server, poor mobile) |

**Overall:** Healthy development momentum with concerning gaps in platform equity and release discipline. Recommend addressing #868 and cutting a release that includes #910, #920, and #911.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-20

---

## 1. Today's Overview

IronClaw shows **very high development velocity** with 50 PRs and 23 issues updated in the last 24 hours—split evenly between open/active (25/17) and merged/closed (25/6). The project is in an intensive **"Reborn" migration phase**, with the majority of activity focused on replacing legacy infrastructure with a modular, composition-driven architecture. No new releases were published today, though a release PR (#3708) is pending that would bump `ironclaw` from 0.24.0 to 0.28.2 and `ironclaw_common` from 0.4.2 to 0.5.0 with breaking API changes. The team is prioritizing internal architectural consolidation over external releases, as evidenced by crates.io still lagging at 0.24.0 despite tags through 0.27.0.

---

## 2. Releases

**No new releases published today.**

A pending release PR exists:
- **[#3708 — chore: release](https://github.com/nearai/ironclaw/pull/3708)** (OPEN): Proposes `ironclaw` 0.28.2 and `ironclaw_common` 0.5.0 with **breaking API changes** (enum discriminant changes). However, this does not resolve the [crates.io publication gap](https://github.com/nearai/ironclaw/issues/3259)—the underlying issue of versions 0.25.0–0.27.0 never being published remains unaddressed.

---

## 3. Project Progress

### Merged/Closed PRs Today (9 items)

| PR | Description | Significance |
|:---|:---|:---|
| [#3797](https://github.com/nearai/ironclaw/pull/3797) | Wire REPL tools through live adapters | **REPL golden path milestone**—Reborn REPL now uses real tool composition, not direct `AgentLoop`/`HostRuntime` calls |
| [#3792](https://github.com/nearai/ironclaw/pull/3792) | Route REPL LLM auth through composition | Decouples LLM resolution from CLI; enables opaque provider state passing |
| [#3790](https://github.com/nearai/ironclaw/pull/3790) | Hot capability catalog publication | Runtime capability discovery for Extension Manifest v2—foundation for tool marketplace |
| [#3791](https://github.com/nearai/ironclaw/pull/3791) | Convert runtime fixtures to host API manifests | Migration of legacy fixtures to new `ironclaw.capability_provider/v1` schema |
| [#3788](https://github.com/nearai/ironclaw/pull/3788) | Wire default HostPortCatalog into extension discovery | Establishes `host.runtime.http_egress` as first standardized host port |
| [#3794](https://github.com/nearai/ironclaw/pull/3794) | Extension v2 lifecycle E2E coverage | Validates discover→install→publish→dispatch pipeline |
| [#3795](https://github.com/nearai/ironclaw/pull/3795) | Tighten legacy extension v2 capability manifests | Security hardening: rejects third-party legacy manifests in production |
| [#3739](https://github.com/nearai/ironclaw/pull/3739) | Extract embeddings into `ironclaw_embeddings` crate | **Major refactor**: embeddings system fully modularized |
| [#3632](https://github.com/nearai/ironclaw/pull/3632) | Add before-inbound policy seam | WebUI/WebChat v2 message interception/rewriting capability |

### Key Architectural Advances

- **Reborn composition pattern maturing**: Multiple PRs (#3792, #3797, #3790) demonstrate the "composition over direct access" philosophy taking hold—LLM resolution, tool execution, and runtime capabilities all now flow through `ironclaw_reborn_composition`
- **Extension Manifest v2 ecosystem**: Host API manifests, hot catalog publication, and lifecycle E2E coverage create a complete loop for third-party capability providers
- **Security hardening**: `NoExposureGuard` service (#3767, open) and legacy manifest restrictions (#3795) show proactive leak prevention

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | Analysis |
|:---|:---|:---|:---|
| 1 | [#3259 — Publish 0.25.0–0.27.0 to crates.io](https://github.com/nearai/ironclaw/issues/3259) | 6 comments | **Downstream blocking issue**: wasmtime 28.x CVEs pin consumers to outdated 0.24.0. Tension between rapid internal iteration and external distribution promises. |
| 2 | [#3702 — Reborn binary-E2E test framework plan](https://github.com/nearai/ironclaw/issues/3702) | 4 comments | **Quality infrastructure investment**: Deep audit of 88 test files, 29 core agent-loop files. Shows recognition that Reborn needs parity testing before legacy replacement. |
| 3 | [#3630–#3612 cluster](https://github.com/nearai/ironclaw/issues/3630) | 1 comment each (5 closed) | **WebUI Beta sprint completion**: M2 facade contract, error taxonomy, DTO lifecycle, and service methods all landed together—coordinated feature delivery. |

### Underlying Needs

- **Distribution reliability** (#3259): The crates.io gap signals either CI/CD pipeline failures, intentional release gating, or organizational friction between "tagged" and "published" artifacts
- **Test confidence** (#3702): The binary-E2E framework is a prerequisite for declaring Reborn production-ready; without it, the team risks regression blindness during legacy migration

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR? |
|:---|:---|:---|:---|
| **High** | [#3447 — Nightly E2E failed](https://github.com/nearai/ironclaw/issues/3447) | OPEN, recurring since 2026-05-10 | Unknown—no linked fix; run [8a12959](https://github.com/nearai/ironclaw/commit/8a12959afa333de6e87cb1a32131e7d51a0bf24a) |
| Medium | [#3610 — Preserve typed filesystem errors in ProcessError](https://github.com/nearai/ironclaw/issues/3610) | OPEN | None yet; P0 priority |
| Medium | [#3771 — Configure UI broken for non-API-key providers, AWS Bedrock](https://github.com/nearai/ironclaw/issues/3771) | OPEN | None yet |

### Assessment

The **nightly E2E failure** is the most concerning stability signal—persisting for 10 days without resolution suggests either flaky infrastructure or deeper integration issues in the v2-engine path. The typed filesystem error issue (#3610) being marked P0 without a fix PR indicates it's either recently escalated or resource-constrained.

---

## 6. Feature Requests & Roadmap Signals

### New Design/Planning Issues (Strong Next-Version Signals)

| Issue | Description | Likelihood in v0.29+ |
|:---|:---|:---|
| [#3798 — Subagent spawn design](https://github.com/nearai/ironclaw/issues/3798) | **3-phase implementation plan** with contracts, mechanisms, integration docs | **Very high** — complete design doc already on branch |
| [#3796 — Tenant-scoped groups and project ACLs](https://github.com/nearai/ironclaw/issues/3796) | Multi-user project sharing without global visibility | High — fills identity model gap |
| [#3800–#3809 "Lane" issues](https://github.com/nearai/ironclaw/issues/3800) | 8 parallel capability implementation tracks (REPL golden path, extension catalog, secrets/egress, Native Memory, Notion MCP, GitHub WASM, WebUI routes, EventStream timeline) | **Very high** — structured as post-merge follow-ups, indicating queued work |

### Predicted v0.29 Themes

1. **Subagent orchestration** (#3798) — hierarchical agent delegation
2. **Capability marketplace completion** — Notion MCP, GitHub WASM, Memory as reference implementations
3. **WebUI Beta general availability** — M2 facade + M5 streaming + M3 agent loop integration

---

## 7. User Feedback Summary

### Explicit Pain Points

| Source | Issue | Severity |
|:---|:---|:---|
| Downstream consumers | [#3259](https://github.com/nearai/ironclaw/issues/3259): CVE exposure from unpinned crates.io version | **Critical** — security and dependency hygiene |
| UI/CLI users | [#3771](https://github.com/nearai/ironclaw/issues/3771): Provider configuration UX gaps (Gemini CLI, Bedrock) | Moderate — onboarding friction |
| Contributors | [#3773](https://github.com/nearai/ironclaw/issues/3773): Crate boundary ambiguity across 47 crates | Moderate — maintainability risk |

### Implicit Signals

- **No user-reported issues in last 24h** — all activity is internal/core team, suggesting either (a) limited external adoption of Reborn beta, or (b) effective internal issue triage absorbing problems before user exposure
- **Contributor-only CLI pruning** (#3738) indicates strategic narrowing of IronClaw's scope—operator/admin functions moving to separate binaries suggests organizational scaling or product line separation

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#3259 — crates.io publication gap](https://github.com/nearai/ironclaw/issues/3259) | 15 days | **High** — downstream security exposure, trust erosion | Maintainer decision: automate crates.io publish or document intentional delay |
| [#3447 — Nightly E2E failure](https://github.com/nearai/ironclaw/issues/3447) | 10 days | **High** — regression detection blind | Investigate v2-engine test flakiness or real breakage |
| [#3094 — Approval/auth interaction services](https://github.com/nearai/ironclaw/issues/3094) | 21 days | Medium — M4 host kernel blocker | Implementation PR not yet linked |
| [#3548 — DISABLE_TOOLS_LIST flag](https://github.com/nearai/ironclaw/pull/3548) | 8 days, XL size | Medium — security feature, test plan incomplete | Reviewer bandwidth; author needs to complete test validation |
| [#3738 — Trace client migration + CLI pruning](https://github.com/nearai/ironclaw/pull/3738) | 2 days, XL size | Medium — cross-repo coordination | Merge decision affects separate `nearai/operator` binaries |

---

## Project Health Assessment

| Dimension | Score | Notes |
|:---|:---|:---|
| Velocity | ⭐⭐⭐⭐⭐ | 50 PRs/23 issues in 24h is exceptional |
| Stability | ⭐⭐⭐☆☆ | Nightly E2E red for 10 days; typed error regression unaddressed |
| Release Hygiene | ⭐⭐☆☆☆ | crates.io severely lagging tagged versions |
| Architecture Maturity | ⭐⭐⭐⭐☆ | Reborn composition pattern solidifying; extension v2 ecosystem emerging |
| Community Responsiveness | ⭐⭐⭐⭐☆ | Internal issues well-scoped; external distribution needs attention |

**Bottom line**: IronClaw is executing a complex architectural migration with impressive throughput, but needs to resolve its **release pipeline reliability** and **regression test stability** before Reborn can be confidently recommended to external users.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-20

## 1. Today's Overview

LobsterAI shows **exceptionally high development velocity** with 50 PRs updated in the last 24 hours—split evenly between 26 still open and 24 merged/closed. No new issues were opened or active, and no releases were cut, indicating the team is in a concentrated **feature integration and stabilization phase** rather than a shipping cycle. The activity pattern suggests aggressive sprint work, likely targeting a near-term milestone, with heavy focus on the renderer and cowork (collaboration) subsystems. The zero issue count is notable: either the project maintains excellent issue hygiene with rapid triage, or community feedback channels may be underutilized relative to internal development throughput.

---

## 2. Releases

**None.** No new releases published. The project appears to be accumulating changes for a future version bump rather than continuous deployment.

---

## 3. Project Progress

### Merged/Closed PRs (24 total, key highlights)

| PR | Author | Focus | Significance |
|:---|:---|:---|:---|
| [#2013](https://github.com/netease-youdao/LobsterAI/pull/2013) | btc69m979y-dotcom | Context window UX | Slider snap-to-preset (32K/64K/200K/1M/2M) + K/M shorthand text input |
| [#2014](https://github.com/netease-youdao/LobsterAI/pull/2014) | fisherdaddy | WeChat QR gateway | Fixes gateway restart stability for IM integration |
| [#2012](https://github.com/netease-youdao/LobsterAI/pull/2012) | liugang519 | Artifacts system | Feature completion for artifacts (likely file/code artifact rendering) |
| [#2011](https://github.com/netease-youdao/LobsterAI/pull/2011) | btc69m979y-dotcom | Subagent UX | Sidebar tree display + detail view for subagent sessions |
| [#680](https://github.com/netease-youdao/LobsterAI/pull/680) | Aoxiang-001 | Multi-agent orchestration | **Major foundational feature**—OpenClaw multi-agent orchestration with full observability |

**Key advances:**
- **Subagent system maturation**: PRs #2011 and #680 together represent the completion of a multi-agent orchestration architecture—moving from "black box" to transparent, tree-browsable subagent execution with real-time progress and full conversation history.
- **Context window UX polish**: Professional-grade token budget controls with intuitive K/M shorthand and preset snapping.
- **IM reliability**: WeChat gateway stability fixes suggest production hardening of external integrations.

---

## 4. Community Hot Topics

**No commented or reacted items exist**—all PRs show `Comments: undefined` and `👍: 0`. This indicates either:
- Internal team development with minimal external community engagement
- GitHub data truncation in the source feed
- Heavy reliance on other communication channels (WeChat, internal tools)

**Most structurally significant open PRs by scope:**

| PR | Link | Underlying Need |
|:---|:---|:---|
| #2015 — OpenClaw compaction retries & tool result gaps | [PR #2015](https://github.com/netease-youdao/LobsterAI/pull/2015) | **Reliability of long-running agent sessions**—handling OpenClaw state compaction failures and ensuring tool execution results aren't lost in retry loops. Critical for production multi-agent stability. |
| #1628 — Model selector UI refactor | [PR #1628](https://github.com/netease-youdao/LobsterAI/pull/1628) | **Model ecosystem scalability**—as LLM provider landscape fragments, users need clear vendor identification and usable selection at scale. |
| #1663 — OpenClaw v2026.4.12 upgrade | [PR #1663](https://github.com/netease-youdao/LobsterAI/pull/1663) | **Runtime currency**—keeping pace with OpenClaw evolution; removes deprecated config keys, fixes plugin compatibility. |

---

## 5. Bugs & Stability

| Severity | Item | Status | Details |
|:---|:---|:---|:---|
| **High** | [#2015](https://github.com/netease-youdao/LobsterAI/pull/2015) — OpenClaw compaction retries & tool result gaps | **OPEN, under fix** | Core runtime reliability: compaction failures in long sessions could corrupt state or lose tool outputs. Fix PR active. |
| **High** | [#1661](https://github.com/netease-youdao/LobsterAI/pull/1661) — Log sanitization | **OPEN** | Security: exported logs leak API keys, Bearer tokens, OAuth tokens, request/response bodies. Fix implemented, pending merge. |
| **Medium** | [#2014](https://github.com/netease-youdao/LobsterAI/pull/2014) — WeChat QR gateway restart | **CLOSED** | IM integration stability; fix merged. |
| **Medium** | [#1634](https://github.com/netease-youdao/LobsterAI/pull/1634) — Global search scope bug | **OPEN** | Search incorrectly filtered to current agent, breaking user expectation of global retrieval. Fix + UX upgrade pending. |
| **Low** | [#1639](https://github.com/netease-youdao/LobsterAI/pull/1639) — i18n tooltip hardcoding | **OPEN** | Polish: English tooltips in Chinese UI. Non-blocking. |

**Stability assessment**: Two high-severity items (runtime state integrity, security) are actively addressed. No crash reports or regressions in today's data. The concentration of fixes around OpenClaw compaction and log sanitization suggests production deployment feedback driving prioritization.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Version |
|:---|:---|:---|
| **MCP (Model Context Protocol) quick-start templates** | [PR #1631](https://github.com/netease-youdao/LobsterAI/pull/1631) | **High** — File System, SQLite, Brave Search presets lower MCP onboarding friction |
| **User avatar system** | [PR #1629](https://github.com/netease-youdao/LobsterAI/pull/1629) | **High** — Complete implementation with 6 presets, local upload, storage service |
| **Right-click Explorer integration** | [PR #1642](https://github.com/netease-youdao/LobsterAI/pull/1642) | **Medium-High** — Windows shell registry integration for "Open in LobsterAI" |
| **Scroll-to-bottom + regenerate buttons** | [PR #1636](https://github.com/netease-youdao/LobsterAI/pull/1636), [#1637](https://github.com/netease-youdao/LobsterAI/pull/1637) | **High** — Standard chat UX parity, implementation complete |
| **Esc-to-close modal standardization** | [PR #1641](https://github.com/netease-youdao/LobsterAI/pull/1641) | **High** — Accessibility/consistency fix, low risk |
| **Per-agent welcome personalization** | [PR #1660](https://github.com/netease-youdao/LobsterAI/pull/1660) | **Medium** — Agent marketplace/differentiation enabler |

**Emerging theme**: Heavy investment in **first-run experience** (avatars, MCP templates, welcome screens) and **desktop-native integration** (Explorer right-click, window chrome polish). Suggests positioning shift from power-user tool to mainstream personal AI assistant.

---

## 7. User Feedback Summary

**Inferred pain points from PR descriptions** (no direct issue feedback available):

| Pain Point | Evidence | Severity |
|:---|:---|:---|
| **Multi-agent execution opacity** | #680, #2011 extensive descriptions of "black box" problem | **Resolved** — now fully observable |
| **Context window configuration friction** | #2013 detailed test plan for K/M input, slider precision | **Resolved** |
| **Search discoverability failures** | #1634: "搜索只能搜到当前 Agent 的任务" (search only finds current agent tasks) | **In progress** |
| **Security anxiety (log leaks)** | #1661 screenshot of exposed API key | **Fix pending** |
| **Chat UX gaps vs. competitors** | #1636, #1637 explicitly reference WeChat, Slack, Discord, ChatGPT as benchmarks | **In progress** |
| **MCP setup complexity** | #1631: quick templates for "commonly used MCP services" | **In progress** |

**Satisfaction indicators**: Team is responsive to competitive parity (matching ChatGPT/Discord UX patterns) and proactive on security. No uninstall or migration complaints visible.

---

## 8. Backlog Watch

**Stale PRs requiring maintainer attention** (all marked `stale`, last updated 2026-05-19 but created 5-6 weeks prior):

| PR | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1628](https://github.com/netease-youdao/LobsterAI/pull/1628) Model selector UI | ~40 days | **Medium** — UI refactor may conflict with ongoing work | Review for merge or rebase; blocks model ecosystem expansion |
| [#1629](https://github.com/netease-youdao/LobsterAI/pull/1629) Avatar settings | ~39 days | **Low** — self-contained feature | Final review, likely ready |
| [#1631](https://github.com/netease-youdao/LobsterAI/pull/1631) MCP quick templates | ~39 days | **Medium** — MCP is strategic priority | Merge to support MCP adoption metrics |
| [#1634](https://github.com/netease-youdao/LobsterAI/pull/1634) Global search fix | ~39 days | **High** — bug fix with UX upgrade | Prioritize: search is core daily workflow |
| [#1636](https://github.com/netease-youdao/LobsterAI/pull/1636), [#1637](https://github.com/netease-youdao/LobsterAI/pull/1637) Chat UX buttons | ~38 days | **Low** — complete, low risk | Batch review and merge |
| [#1639](https://github.com/netease-youdao/LobsterAI/pull/1639) i18n tooltips | ~38 days | **Low** | Trivial review |
| [#1640](https://github.com/netease-youdao/LobsterAI/pull/1640) Tool result copy | ~38 days | **Low** | Trivial review |
| [#1641](https://github.com/netease-youdao/LobsterAI/pull/1641) Esc modal close | ~38 days | **Low** | Trivial review |
| [#1642](https://github.com/netease-youdao/LobsterAI/pull/1642) Right-click menu | ~38 days | **Medium** — registry manipulation needs security review | Security audit, then merge |
| [#1660](https://github.com/netease-youdao/LobsterAI/pull/1660) Agent welcome | ~37 days | **Low** | Final review |
| [#1661](https://github.com/netease-youdao/LobsterAI/pull/1661) Log sanitization | ~37 days | **High** — security | **Urgent review and merge** |
| [#1663](https://github.com/netease-youdao/LobsterAI/pull/1663) OpenClaw upgrade | ~36 days | **High** — runtime compatibility | Merge to prevent version drift |
| [#1667](https://github.com/netease-youdao/LobsterAI/pull/1667) Qwen console link | ~36 days | **Low** — docs-only | Trivial merge |

**Backlog health concern**: 13 open PRs averaging 38 days stale with no comments or reactions suggests either:
- Bottleneck in maintainer review capacity
- Internal quality gates or release branch coordination blocking merge
- Possible mislabeling (stale tag may be automated, not accurate)

**Recommended priority**: Security (#1661), search fix (#1634), runtime upgrade (#1663) should be fast-tracked. The remaining UX polish PRs represent low-risk, high-user-value batch that could clear the queue quickly.

---

*Digest generated from GitHub activity data for netease-youdao/LobsterAI on 2026-05-20.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-20

## 1. Today's Overview

Moltis showed **healthy maintenance velocity** with 8 items updated in the last 24 hours—4 issues and 4 PRs split evenly between open and closed states. The project demonstrates active triage with same-day closure of 2 bugs and 2 PRs, including a quick fix for a WebSocket disconnection issue that had just been reported. No new releases were cut, suggesting the team is in a stabilization phase rather than feature-shipping mode. The activity pattern indicates a responsive core team (notably contributor `penso` landing 3 PRs in one day) with emerging community reports around runtime configuration and LLM integration stability.

---

## 2. Releases

**No new releases** (v0.0.0 or latest unchanged).

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#1025](https://github.com/moltis-org/moltis/pull/1025) | `penso` | **fix(sandbox): reap docker sandbox zombies** — Adds `--init` flag to Docker sandbox containers to prevent zombie process accumulation; preserves Podman hardening args | **Reliability/Security** — Fixes resource leak in containerized execution environment |
| [#1023](https://github.com/moltis-org/moltis/pull/1023) | `penso` | **fix(web): avoid false websocket disconnect timeouts** — Distinguishes actual WebSocket disconnections from RPC timeouts; surfaces timed-out method names for debugging | **UX/Debuggability** — Reduces false alarms, improves observability |

### Open PRs in Flight

| PR | Author | Summary | Status |
|:---|:---|:---|:---|
| [#1026](https://github.com/moltis-org/moltis/pull/1026) | `penso` | **fix(vault): keep auth password changes in sync** — Atomic auth/vault password rotation; rejects flows that would create mismatches on sealed vaults | **Under review** — Security-critical, regression tests included |
| [#1005](https://github.com/moltis-org/moltis/pull/1005) | `PeterDaveHello` | **feat(openai-codex): add reasoning effort support** — Propagates `reasoning_effort` through Codex provider clones; serializes GPT-5 Codex effort in Responses API | **Under review** — OpenAI Codex integration enhancement |

---

## 4. Community Hot Topics

### Most Active Items by Engagement

| Item | Engagement | Analysis |
|:---|:---|:---|
| [#423](https://github.com/moltis-org/moltis/issues/423) — Docker + sandbox issues | **5 👍, 1 comment** | **Highest community validation.** Despite being closed in March, this bug report continues to attract reactions, suggesting Docker sandbox reliability remains a **persistent concern** for users. The fix in PR #1025 (zombie reaping) may partially address this lineage of issues. |
| [#850](https://github.com/moltis-org/moltis/issues/850) — MCP OAuth `client_secret` support | 0 👍, 1 comment | Closed enhancement for Model Context Protocol server authentication; indicates enterprise/self-hosted deployment needs for secure MCP integrations. |

### Underlying Needs Analysis

- **Container execution reliability**: Users running Moltis in Docker environments need production-grade process lifecycle management (addressed by #1025).
- **Enterprise auth flexibility**: MCP server configurations need OAuth override parity with standard client credentials flows.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Details |
|:---|:---|:---|:---|:---|
| **Medium** | [#1022](https://github.com/moltis-org/moltis/issues/1022) — "WebSocket disconnected" during LLM modes update | **OPEN** | **Yes — #1023** (related fix landed) | Reported 2026-05-19; may be mitigated by #1023's timeout/disconnect distinction, though root cause in "LLM modes update" path unclear |
| **Medium-High** | [#1024](https://github.com/moltis-org/moltis/issues/1024) — `[hooks]` config parsed but never registered at runtime | **OPEN** | **None yet** | Configuration system bug: validation passes but runtime registration fails, breaking hook-based extensibility; **regression risk for custom integrations** |
| **Low** (resolved) | [#423](https://github.com/moltis-org/moltis/issues/423) — Docker + sandbox issues | **CLOSED** | #1025 (related) | Legacy issue; zombie reaping fix suggests ongoing hardening |

**Stability Assessment**: Two fresh bugs reported same-day suggest some fragility in runtime configuration (#1024) and LLM-mode WebSocket handling (#1022). The team's same-day fix for WebSocket timeouts (#1023) shows responsive triage, but #1024 lacks a fix PR and affects a core extensibility mechanism.

---

## 6. Feature Requests & Roadmap Signals

| Item | Signal | Next-Version Likelihood |
|:---|:---|:---|
| [#1005](https://github.com/moltis-org/moltis/pull/1005) — OpenAI Codex `reasoning_effort` support | **Active PR, well-scoped** | **High** — Codex integration is competitive feature; PR carries regression tests |
| [#850](https://github.com/moltis-org/moltis/issues/850) — MCP OAuth `client_secret` | **Closed without PR reference** | **Unclear** — May have been addressed in separate commit or deprioritized; needs verification |

**Emerging Pattern**: Investment in OpenAI Codex provider (GPT-5 reasoning effort) signals Moltis is tracking frontier model capabilities closely. MCP auth enhancements suggest enterprise-readiness push.

---

## 7. User Feedback Summary

### Pain Points
- **Runtime configuration surprises**: [#1024](https://github.com/moltis-org/moltis/issues/1024) exposes a "silent failure" pattern where config validates but doesn't execute—frustrating for developers building on hooks.
- **Observability gaps in WebSocket layer**: [#1022](https://github.com/moltis-org/moltis/issues/1022) + [#1023](https://github.com/moltis-org/moltis/pull/1023) show users hitting opaque disconnect errors; the fix improves messaging but doesn't eliminate the timeout itself.
- **Container environment edge cases**: Docker sandbox zombies (#423 lineage) indicate deployment-environment-specific bugs that are hard to reproduce locally.

### Satisfaction Indicators
- **Responsive maintainer**: `penso`'s triple-PR day with same-day bugfix turnaround builds contributor trust.
- **Test discipline**: Multiple PRs include regression tests (Playwright, cargo test), suggesting quality bar for merges.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1024](https://github.com/moltis-org/moltis/issues/1024) — Hooks config registration failure | **1 day** (fresh) | **High** — Breaks documented extensibility; no workaround mentioned | Triage for fix PR assignment; likely needs core runtime team attention |
| [#1005](https://github.com/moltis-org/moltis/pull/1005) — Codex reasoning effort | **4 days open** | **Low** — Feature PR, not blocking | Review/merge decision; author is external contributor (`PeterDaveHello`) |
| [#1026](https://github.com/moltis-org/moltis/pull/1026) — Vault auth sync | **1 day** | **Medium** — Security-related, affects sealed vault UX | Security review; tests present, needs maintainer approval |

**No stale items detected** — all active items are ≤4 days old, indicating healthy backlog turnover. The absence of long-unanswered critical issues suggests either effective triage or a young project without deep technical debt.

---

*Digest generated from github.com/moltis-org/moltis activity on 2026-05-19/20.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-05-20

## 1. Today's Overview

CoPaw (QwenPaw) shows **very high activity** with 38 issues and 44 PRs updated in the last 24 hours, indicating a rapidly evolving project with active community engagement. The v1.1.8 stable release alongside v1.1.8-beta.2 suggests an accelerated release cadence, though this pace introduces stability concerns with multiple critical bugs emerging immediately post-release. The project is experiencing growing pains typical of a maturing AI assistant platform: plugin ecosystem expansion (official plugin distribution, desktop pet), enterprise channel integrations (Feishu, WeChat), and infrastructure scaling challenges (token estimation, rate limiting, session management). Notably, several first-time contributors are actively submitting PRs, signaling broadening community adoption. However, the high volume of same-day bug reports—particularly around the new Pet plugin and backup functionality—suggests quality assurance gaps in the release process.

---

## 2. Releases

### [v1.1.8](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.8) (Stable)
**Key Changes:**
- **Official Plugin Distribution**: Centralized plugin marketplace enabling one-click installation via console Plugin Manager ([#4482](https://github.com/agentscope-ai/QwenPaw/pull/4482))
- **QwenPaw Pet**: Desktop pet companion plugin (Snowpaw)

**Migration Notes:** Users upgrading from 1.1.6 must uninstall and reinstall desktop applications, raising data migration concerns documented in [#4430](https://github.com/agentscope-ai/QwenPaw/issues/4430).

### [v1.1.8-beta.2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.8-beta.2)
**Key Changes:**
- **Performance**: Model performance optimization in console ([#4502](https://github.com/agentscope-ai/QwenPaw/pull/4502))
- **I/O Optimization**: Batch append inbox trace events to reduce file I/O ([#4493](https://github.com/agentscope-ai/QwenPaw/pull/4493))
- Pet plugin additions

**Breaking Changes:** None documented; beta channel users can test via `qwenpaw update --channel beta` (requested in [#4500](https://github.com/agentscope-ai/QwenPaw/issues/4500), now available).

---

## 3. Project Progress

### Merged/Closed PRs (31 total; key items)

| PR | Description | Significance |
|:---|:---|:---|
| [#4534](https://github.com/agentscope-ai/QwenPaw/pull/4534) | docs(install): add backup dir | Addresses v1.1.8 `/backups` 403 issue |
| [#4531](https://github.com/agentscope-ai/QwenPaw/pull/4531) | chore(version): update release note of v1.1.8 | Release documentation |
| [#4533](https://github.com/agentscope-ai/QwenPaw/pull/4533) | supplement qwenpaw pet zh descriptions | i18n for new Pet feature |
| [#4527](https://github.com/agentscope-ai/QwenPaw/pull/4527) | Introduce `QWENPAW_AUTO_INITIALIZATION` in deploy/entrypoint.sh | Infrastructure flexibility for containerized deployments |
| [#4529](https://github.com/agentscope-ai/QwenPaw/pull/4529) | fix(model): hotfix for model setting | **Critical model configuration fix** |
| [#4523](https://github.com/agentscope-ai/QwenPaw/pull/4523) | fix(runner): persist `/mission` and `/skill` info responses to session | Fixes UI flash/disappearing messages bug |
| [#4524](https://github.com/agentscope-ai/QwenPaw/pull/4524) | plugin(cloudpaw): bump version to 0.0.2 | Plugin ecosystem maintenance |
| [#4526](https://github.com/agentscope-ai/QwenPaw/pull/4526) | feat(provider_manager): add new free models to opencode list | Expanding free model availability |
| [#4522](https://github.com/agentscope-ai/QwenPaw/pull/4522) | fix(cli): correct typo in `tool_results` directory reference | Resolves `tool_result` vs `tool_results` confusion (see [#4512](https://github.com/agentscope-ai/QwenPaw/issues/4512)) |
| [#3875](https://github.com/agentscope-ai/QwenPaw/pull/3875) | feat(console): add link to demo page in header url | UI navigation improvement |

### Active Development (Open PRs)

| PR | Description | Stage |
|:---|:---|:---|
| [#4536](https://github.com/agentscope-ai/QwenPaw/pull/4536) | Add OpenCode Go built-in provider | **First-time contributor**; addresses long-standing request [#4441](https://github.com/agentscope-ai/QwenPaw/issues/4441) |
| [#4537](https://github.com/agentscope-ai/QwenPaw/pull/4537) | Feishu group session shared mode | **First-time contributor**; enterprise collaboration feature |
| [#4518](https://github.com/agentscope-ai/QwenPaw/pull/4518) | Skill Market with async `httpx` refactor | Major architectural improvement for plugin discovery |
| [#4532](https://github.com/agentscope-ai/QwenPaw/pull/4532) | OAuth 2.1 for remote MCP servers | Security-critical for enterprise MCP adoption |
| [#4530](https://github.com/agentscope-ai/QwenPaw/pull/4530) | Spawn subagent (fork) within workspace | Core agent orchestration capability |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | Tauri 2.x desktop app support | **Under review**; major platform expansion |
| [#4428](https://github.com/agentscope-ai/QwenPaw/pull/4428) | Prefix MCP tool names with client key | **Under review**; collision resolution for multi-MCP setups |
| [#4520](https://github.com/agentscope-ai/QwenPaw/pull/4520) | Persist chat input draft across page navigation | **First-time contributor**; UX polish |

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Comments | Status | Core Concern |
|:---|:---:|:---|:---|
| [#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) WeChat iLink cron push failures | 11 | **OPEN** | Production reliability for business-critical WeChat integrations; `context_token` expiration without retry logic |
| [#4496](https://github.com/agentscope-ai/QwenPaw/issues/4496) AGENTS.md loads built-in template not workspace file | 9 | **OPEN** | **Regression in v1.1.7**; breaks custom agent configurations |
| [#4497](https://github.com/agentscope-ai/QwenPaw/issues/4497) Markdown table line breaks don't work | 4 | **OPEN** | Recurring UI/UX issue (3rd report by same user; see also [#2983](https://github.com/agentscope-ai/QwenPaw/issues/2983), [#3528](https://github.com/agentscope-ai/QwenPaw/issues/3528)) |
| [#3570](https://github.com/agentscope-ai/QwenPaw/issues/3570) "All Chats" pagination | 4 | **OPEN** | Performance at scale; pagination in `control-sessions` also broken |
| [#4499](https://github.com/agentscope-ai/QwenPaw/issues/4499) Plugin marketplace & pet system timeline | 4 | **CLOSED** | User anticipation for ecosystem features; answered by v1.1.8 release |

### Underlying Needs Analysis

- **Enterprise reliability**: WeChat iLink cron failures (#4477) and 429 rate-limit cascading freezes (#4515, [#4449](https://github.com/agentscope-ai/QwenPaw/issues/4449)) reveal insufficient production hardening for business automation
- **Configuration integrity**: AGENTS.md regression (#4496) suggests workspace file resolution logic is fragile across upgrades
- **Markdown rendering quality**: Persistent table line-break issues indicate frontend debt in the chat message renderer
- **Ecosystem discoverability**: Plugin marketplace release closes a major capability gap vs. competitors (OpenClaw, Codex)

---

## 5. Bugs & Stability

### Critical Severity

| Issue | Description | Fix Status |
|:---|:---|:---|
| [#4541](https://github.com/agentscope-ai/QwenPaw/issues/4541) / [#4540](https://github.com/agentscope-ai/QwenPaw/issues/4540) | **Pet plugin crashes main app on first message** (ConnectTimeout / PySide6) — Windows 11, v1.1.8 | **NO FIX PR**; reported same day as release |
| [#4515](https://github.com/agentscope-ai/QwenPaw/issues/4515) | **429 rate-limit freezes ALL model calls** — zero-downtime reload destroys message queue | **NO FIX PR**; architectural flaw in error recovery |
| [#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) | WeChat iLink cron push fails silently — no retry, no logging for image/file sends | **NO FIX PR** |
| [#4496](https://github.com/agentscope-ai/QwenPaw/issues/4496) | AGENTS.md workspace override broken in v1.1.7 | **NO FIX PR** |

### High Severity

| Issue | Description | Fix Status |
|:---|:---|:---|
| [#4535](https://github.com/agentscope-ai/QwenPaw/issues/4535) | `/backups` returns HTTP 403 on localhost in v1.1.8 | Docs PR [#4534](https://github.com/agentscope-ai/QwenPaw/pull/4534) merged; may need backend fix |
| [#4454](https://github.com/agentscope-ai/QwenPaw/issues/4454) | `/mission` command freezes Console completely — persists after directory cleanup | **NO FIX PR** |
| [#4494](https://github.com/agentscope-ai/QwenPaw/issues/4494) | Console stream stalls with false "you interrupted me" message | **CLOSED**; fix in [#4523](https://github.com/agentscope-ai/QwenPaw/pull/4523)? |
| [#4542](https://github.com/agentscope-ai/QwenPaw/issues/4542) | Model connection test fails on B.AI due to `max_tokens=1` hardcoding | **NO FIX PR** |

### Medium Severity

| Issue | Description | Fix Status |
|:---|:---|:---|
| [#4497](https://github.com/agentscope-ai/QwenPaw/issues/4497) | Markdown table `<br>` line breaks (3rd report) | **NO FIX PR**; chronic issue |
| [#4481](https://github.com/agentscope-ai/QwenPaw/issues/4481) | Windows GBK encoding — systemic fix needed vs. patches | **NO FIX PR** |
| [#4505](https://github.com/agentscope-ai/QwenPaw/issues/4505) | Agent stats page shows global token usage for new agents | **NO FIX PR** |

---

## 6. Feature Requests & Roadmap Signals

### Likely in Next Version (v1.1.9 or v1.2.0)

| Feature | Evidence | Confidence |
|:---|:---|:---:|
| **OpenCode Go native provider** | PR [#4536](https://github.com/agentscope-ai/QwenPaw/pull/4536) ready; addresses [#4441](https://github.com/agentscope-ai/QwenPaw/issues/4441) | **High** |
| **Feishu group shared sessions** | PR [#4537](https://github.com/agentscope-ai/QwenPaw/pull/4537) ready; enterprise demand | **High** |
| **OAuth 2.1 for MCP servers** | PR [#4532](https://github.com/agentscope-ai/QwenPaw/pull/4532) in progress; security-critical | **High** |
| **Skill Market with async architecture** | PR [#4518](https://github.com/agentscope-ai/QwenPaw/pull/4518) substantial; replaces blocking HTTP | **Medium-High** |
| **Subagent spawning (fork)** | PR [#4530](https://github.com/agentscope-ai/QwenPaw/pull/4530) ready; core agent capability | **Medium-High** |

### Medium-Term (v1.2.x+)

| Feature | Evidence | Confidence |
|:---|:---|:---:|
| **Tauri desktop app** | PR [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) under review since April; major platform | **Medium** |
| **Source tracing / citations** | [#4514](https://github.com/agentscope-ai/QwenPaw/issues/4514) requested; RAG maturity signal | **Medium** |
| **Improved token estimation with caching** | [#4463](https://github.com/agentscope-ai/QwenPaw/issues/4463) open; performance optimization | **Medium** |
| **"All Chats" pagination + performance** | [#3570](https://github.com/agentscope-ai/QwenPaw/issues/3570) open since April; scale blocker | **Medium** |

---

## 7. User Feedback Summary

### Pain Points

| Category | Specific Issues | Severity |
|:---|:---|:---:|
| **Upgrade fragility** | Data loss fears (#4430), AGENTS.md regression (#4496), config migration unclear | High |
| **Windows-specific instability** | GBK encoding (#4481), Pet plugin crashes (#4540/#4541), desktop client issues | High |
| **Production reliability** | WeChat cron failures (#4477), 429 cascading failures (#4515, #4449), mission freeze (#4454) | Critical |
| **UI/UX polish** | Markdown rendering (#4497), stream stalls (#4494), chat draft loss (addressed in #4520) | Medium |
| **Debugging opacity** | Image/file send failures unlogged (#4477), model errors flash by (#4090) | Medium |

### Positive Signals

- **Plugin ecosystem enthusiasm**: Users actively asking about marketplace timeline (#4499), building pet systems via monkey-patch
- **Enterprise adoption**: Feishu CardKit streaming (#3001), group session modes (#4537), multi-MCP configurations (#4428)
- **Community contribution**: Multiple first-time contributors submitting production-quality PRs

### Competitive Positioning

Users explicitly compare to **OpenClaw** (update channels, #4500) and **Codex** (pet system, #4499), indicating CoPaw is positioned in the "open AI assistant platform" market with feature parity expectations.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>1 month old, unresolved)

| Issue | Age | Blocker | Action Needed |
|:---|:---:|:---|:---|
| [#3570](https://github.com/agentscope-ai/QwenPaw/issues/3570) All Chats pagination | ~1 month | Performance at scale | Architecture decision on lazy loading vs. pagination |
| [#2660](https://github.com/agentscope-ai/QwenPaw/issues/2660) `AGENT_ERROR: Task has been cancelled!` | ~2 months | Core stability | Root cause analysis; may relate to #4515 |
| [#2983](https://github.com/agentscope-ai/QwenPaw/issues/2983) / [#3528](https://github.com/agentscope-ai/QwenPaw/issues/3528) Markdown table breaks | ~1.5 months | Chronic UI debt | Assign frontend owner; 3rd duplicate filed |

### PRs Stalled in Review

| PR | Age | Blocker | Risk |
|:---|:---:|:---|:---|
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) Tauri 2.x desktop | ~1 month | Under review | Platform expansion delayed; contributor may disengage |
| [#4428](https://github.com/agentscope-ai/QwenPaw/pull/4428) MCP tool name prefixing | ~5 days | Under review | Multi-MCP adoption blocked; community workaround needed |
| [#4337](https://github.com/agentscope-ai/QwenPaw/pull/4337) Shell local bin discovery | ~5 days | Under review | Developer experience for local tool use |

### Recommended Maintainer Actions

1. **Immediate**: Hotfix for Pet plugin crashes (#4540/#4541) — consider temporary rollback or patch release
2. **This week**: Resolve AGENTS.md regression (#4496) — breaks user trust in upgrades
3. **Sprint planning**: Assign owner to chronic Markdown rendering issues (#4497 et al.)
4. **Process**: Implement beta-to-stable promotion criteria given v1.1.8's day-zero critical bugs

---

*Digest generated from GitHub activity 2026-05-19 to 2026-05-20. All links reference github.com/agentscope-ai/QwenPaw.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-05-20

## 1. Today's Overview

ZeptoClaw exhibited minimal development activity over the past 24 hours, with zero issues updated and only two pull requests in motion—one closed and one newly opened. Both PRs are automated dependency bumps from Dependabot targeting the same GitHub Action (`taiki-e/install-action`), indicating routine maintenance rather than active feature development. The project shows no open issues, suggesting either effective issue resolution or limited community engagement. No releases were published. Overall project health appears stable but stagnant, with maintenance-focused automation dominating the contribution pipeline.

---

## 2. Releases

**No new releases** for 2026-05-20.

---

## 3. Project Progress

### Merged/Closed PR

| PR | Status | Summary | Link |
|---|---|---|---|
| #586 | **Closed** | Bump `taiki-e/install-action` from 2.75.17 to 2.75.29 | [qhkm/zeptoclaw#586](https://github.com/qhkm/zeptoclaw/pull/586) |

**Analysis:** This dependency update was merged/closed on 2026-05-19 after being created on 2026-05-12. The week-long lifecycle suggests standard CI verification for a patch-level GitHub Action update. No functional changes to ZeptoClaw itself.

### Open PR

| PR | Status | Summary | Link |
|---|---|---|---|
| #591 | **Open** | Bump `taiki-e/install-action` from 2.75.17 to 2.77.3 | [qhkm/zeptoclaw#591](https://github.com/qhkm/zeptoclaw/pull/591) |

**Analysis:** Opened 2026-05-19, this PR supersedes #586 with a more recent version (2.77.3 vs. 2.75.29). The overlapping version ranges suggest Dependabot may have regenerated before #586's closure propagated, or the bot is creating redundant PRs. Maintainer action needed to close as duplicate or merge.

---

## 4. Community Hot Topics

**No active community discussions identified.** Both PRs have:
- **0 comments**
- **0 reactions (👍)**

The complete absence of human engagement on PRs indicates:
- Low contributor/maintainer bandwidth for review
- Automated dependency management without community oversight
- Possible risk of dependency drift if PRs accumulate unreviewed

**Underlying need:** Establishing maintainer rotation or auto-merge policies for trusted dependency bumps to reduce noise.

---

## 5. Bugs & Stability

| Severity | Item | Status | Notes |
|---|---|---|---|
| N/A | — | — | No bugs, crashes, or regressions reported in last 24h |

**Stability assessment:** No active stability concerns. However, the lack of any issue activity (open or closed) warrants monitoring—healthy projects typically exhibit some bug reports or user questions.

---

## 6. Feature Requests & Roadmap Signals

**No feature requests or roadmap discussions detected** in the past 24 hours.

**Inference:** With zero issues and only automated dependency PRs, the project appears in maintenance mode without visible feature development. If this pattern persists, consider:
- Checking for discussions in other channels (Discord, mailing lists)
- Reviewing whether project scope is complete or seeking new maintainers

---

## 7. User Feedback Summary

| Metric | Value |
|---|---|
| User-reported issues (24h) | 0 |
| User comments on PRs (24h) | 0 |
| Explicit satisfaction/dissatisfaction signals | None |

**Assessment:** No direct user feedback available in GitHub data. The complete silence may indicate:
- Small or non-existent active user base
- Users satisfied with current functionality (no issues to report)
- Users abandoning project due to perceived inactivity

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| PR #591 (duplicate/superseding bump) | 1 day | **Low** — merge conflict with #586's closure | Maintainer should close as superseded or merge if #586 was closed without merge |
| General issue backlog | N/A | **Medium** — zero open issues is atypical for active projects | Verify issue templates are functional; consider outreach for user testing |

**Critical gap:** No long-unanswered items exist, but the *absence* of backlog items itself signals potential community disengagement rather than project health.

---

*Digest generated from GitHub activity data for qhkm/zeptoclaw on 2026-05-20.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-20

## 1. Today's Overview

ZeroClaw shows **extremely high development velocity** with 47 PRs updated in the last 24 hours against only 8 issues, indicating a major integration push. The project is in an active **v0.8.0 release cycle** with the massive PR #6398 ("Multi-Agent Runtime and Schema V3") seeking final approval for beta. A coordinated **channel allowlist migration** effort is underway, with 15+ PRs from contributor `yijunyu` standardizing security predicates across 16+ messaging integrations. Two bugs were reported today including one S1 severity workflow blocker, with an immediate fix PR already submitted for the S2 memory bug. No new releases were published today.

---

## 2. Releases

**No new releases** — v0.8.0 remains in beta preparation pending PR #6398 merge.

---

## 3. Project Progress

### Closed Issues (2)
| Issue | Description | Significance |
|-------|-------------|------------|
| [#1458](https://github.com/zeroclaw-labs/zeroclaw/issues/1458) | **Local CA certificates for custom inference providers** — Closed | Enables enterprise/self-hosted SSL deployments; security infrastructure |
| [#6543](https://github.com/zeroclaw-labs/zeroclaw/issues/6543) | **ACP session restore (ACP v1 protocol)** — Closed | Core protocol compliance; enables session resumption for agent communication |

### Active Development
- **[PR #6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398)**: The v0.8.0 mega-PR (XL size, 30+ component tags) continues integration work for Multi-Agent Runtime and Schema V3 — **seeking maintainer approval for beta**
- **[PR #6777](https://github.com/zeroclaw-labs/zeroclaw/pull/6777)**: Fix for `purge_namespace` bug submitted same day as issue report — rapid response

---

## 4. Community Hot Topics

### Most Discussed Issues

| Rank | Issue | Comments | Analysis |
|------|-------|----------|----------|
| 1 | [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) **Dream Mode — Periodic Memory Consolidation & Reflective Learning** | 10 comments | **Highest community interest**. Request for autonomous "idle-time" learning reflects demand for more agentic, self-improving AI. High risk, P1 priority, accepted. Underlying need: users want ZeroClaw to feel less transactional and more like a persistent, learning assistant. |
| 2 | [#1458](https://github.com/zeroclaw-labs/zeroclaw/issues/1458) Local CA certificates | 5 comments | Enterprise deployment blocker; now resolved |
| 3 | [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) Air-gapped execution mode with companion daemon | 2 comments | **Security-critical architecture** for enclave/isolated deployments. Blocked, needs maintainer review. Signals strong demand from security-conscious/enterprise users. |

### Active PR Discussion
- **[PR #6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398)**: Explicitly requesting large-context model reviews with screenshots — indicates complexity and need for careful validation before beta

---

## 5. Bugs & Stability

| Severity | Issue | Component | Status | Fix PR |
|----------|-------|-----------|--------|--------|
| **S1 — Workflow Blocked** | [#6771](https://github.com/zeroclaw-labs/zeroclaw/issues/6771) Multiline Heredocs incorrectly blocked by SecurityPolicy | security/sandbox | **Open**, 0 comments | ❌ None yet |
| **S2 — Degraded Behavior** | [#6801](https://github.com/zeroclaw-labs/zeroclaw/issues/6801) `SqliteMemory::purge_namespace` deletes by wrong column | memory | **Open**, created today | ✅ [#6777](https://github.com/zeroclaw-labs/zeroclaw/pull/6777) (already submitted) |

**Analysis**: The S1 bug is **self-dogfooding pain** — ZeroClaw's own security policy prevents its prescribed PR-raising skill from working. This suggests the sandbox rules are overly aggressive against legitimate shell patterns. The rapid fix for #6801 (PR submitted same day) shows responsive maintenance for data-layer bugs.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Likelihood in Next Version | Rationale |
|---------|-------|---------------------------|-----------|
| **Multi-Agent Runtime (v0.8.0)** | [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) | **Imminent** | PR seeking approval; core of v0.8.0 |
| **Skills UX overhaul (v0.7.6)** | [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) | High | P1, accepted, tracking issue with community input requested |
| **Dream Mode / Memory Consolidation** | [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) | Medium | P1 accepted but high complexity; may slip to v0.9.0 |
| **Air-gapped/Enclave Mode** | [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) | Medium | Blocked on architecture review; security-sensitive |
| **Compile-time channel filtering** | [#6770](https://github.com/zeroclaw-labs/zeroclaw/issues/6770) | High | Simple, targeted; fits v0.8.0 cleanup |

**Architectural signal**: The 15-channel allowlist migration (#6786–#6800) indicates **v0.8.0 is standardizing security aspects** across all integrations, reducing technical debt before release.

---

## 7. User Feedback Summary

### Pain Points
| Issue | Pain Point | User Segment |
|-------|-----------|------------|
| [#6771](https://github.com/zeroclaw-labs/zeroclaw/issues/6771) | Security policy too aggressive — blocks legitimate automation workflows | Power users, skill authors |
| [#6770](https://github.com/zeroclaw-labs/zeroclaw/issues/6770) | CLI shows unavailable channels, confusing custom builds | Custom/embedded deployers |
| [#6801](https://github.com/zeroclaw-labs/zeroclaw/issues/6801) | Data integrity — namespace purge operates on wrong column | All users with memory namespaces |

### Positive Signals
- **Dream Mode (#5849)**: Users envisioning ZeroClaw as *persistent companion*, not just tool
- **Air-gapped mode (#6293)**: Security/enterprise users investing in deployment
- **Rapid bug fix (#6777)**: Community trust in responsive maintenance

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Action Needed |
|----------|-----|------|---------------|
| [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) Air-gapped execution mode | 17 days | **High** — security feature, enterprise blocker | Maintainer architecture review; currently `status:blocked` |
| [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) Dream Mode | 32 days | Medium — accepted but unstaffed? | Implementation planning; 10 comments show demand |
| [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) Skills v0.7.6 tracker | 19 days | Low — P1 accepted, likely active | Continue community input collection |

**Concerns**: 
- 45 open PRs vs 2 merged/closed suggests **review bottleneck** or deliberate batching for v0.8.0
- The yijunyu allowlist migration (15 PRs) may need coordinated merge to avoid conflicts

---

*Digest generated from github.com/zeroclaw-labs/zeroclaw activity through 2026-05-20.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*