# OpenClaw Ecosystem Digest 2026-05-21

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-21 00:26 UTC

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

# OpenClaw Project Digest — 2026-05-21

## 1. Today's Overview

OpenClaw shows **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a mature, fast-moving project with substantial community engagement. However, the **merge ratio is concerning**: only 23 of 500 PRs were merged or closed (4.6%), while 477 remain open, suggesting a significant review bottleneck. The 455:45 open-to-closed issue ratio similarly indicates accumulation rather than resolution. Three new releases shipped, including a beta with Discord voice improvements, showing continued platform expansion. Security and secrets management dominate the current discussion, with multiple high-priority issues and active PRs addressing API key exposure risks.

---

## 2. Releases

### v2026.5.20-beta.1
- **Discord voice enhancement**: Voice sessions now follow configured Discord users into voice channels with allowed-channel checks, multi-user handoff, bounded reconciliation, and DAVE recovery preservation ([#84264](https://github.com/openclaw/openclaw/pull/84264), thanks @fuller-stack-dev)
- Added bounded `IDENTITY.md`, `USER.md` documentation for Discord/voice

### v2026.5.19 (Stable)
- **Agent development guidance**: Fixes should default to clean bounded refactors, lean internals, and explicit plugin SDK/API deprecation paths
- **Dependencies**: Updated `@openclaw/proxyline` to 0.3.3; Pi packages to 0.75.1; raised minimum supported Node.js 22 line

### v2026.5.19-alpha.1
- Same changes as v2026.5.19 (alpha pre-release)

**Migration note**: Node.js 22 minimum is now enforced; verify environments before upgrading.

---

## 3. Project Progress

**Merged/Closed Today (23 PRs, partial list from visible data):**

| PR | Description | Impact |
|---|---|---|
| [#84592](https://github.com/openclaw/openclaw/pull/84592) | Suppress rolldown-plugin-dts CommonJS dts warnings | Build hygiene |
| [#84629](https://github.com/openclaw/openclaw/issues/84629) | Talk Mode TTS audio cutoffs (closed as resolved) | Voice UX fix |

**Notable advancing PRs ready for maintainer review:**

- [#84718](https://github.com/openclaw/openclaw/pull/84718): `doctor` security warning for plaintext secrets — **automerge armed**
- [#84739](https://github.com/openclaw/openclaw/pull/84739) / [#84738](https://github.com/openclaw/openclaw/pull/84738): Stop serializing provider API keys into `models.json` — dual PRs addressing critical security exposure
- [#84250](https://github.com/openclaw/openclaw/pull/84250): Fix `EmbeddedAttemptSessionTakeoverError` — session file race condition fix
- [#84728](https://github.com/openclaw/openclaw/pull/84728): Repair orphaned Codex custom tool outputs before resume

---

## 4. Community Hot Topics

| Item | Comments | Reactions | Underlying Need |
|---|---|---|---|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) Text between tool calls leaks to messaging channels | 26 | 0 | **Agent output hygiene** — users need clean separation between internal processing and user-facing messages; critical for professional deployments |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) Prebuilt Android APK releases | 24 | 1 | **Mobile accessibility** — barrier to entry for non-developer users; submitted by AI assistant QING on behalf of user |
| [#72808](https://github.com/openclaw/openclaw/issues/72808) Silently lost Slack connection | 18 | 2 | **Reliability transparency** — silent failures are worse than noisy ones; need health monitoring |
| [#22676](https://github.com/openclaw/openclaw/issues/22676) Signal daemon stop() race condition on SIGUSR1 restart | 17 | 0 | **Process lifecycle correctness** — gateway restart reliability affects production uptime |
| [#11829](https://github.com/openclaw/openclaw/issues/11829) Security Roadmap: Protecting API Keys from Agent Access | 17 | 0 | **Secrets governance** — foundational trust layer for enterprise adoption |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) Tiered bootstrap file loading | 16 | 0 | **Cost optimization** — token budget control for large workspaces |

**Analysis**: The community is prioritizing **production readiness** over novelty. Top issues cluster around: message delivery correctness, security/secrets, connection reliability, and operational cost control. The "diamond lobster" rating on 4 of 6 top issues indicates maintainer-recognized high impact.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|---|---|---|---|
| **P1** | [#25592](https://github.com/openclaw/openclaw/issues/25592) Text between tool calls leaks to channels | Open, needs review | [#84485](https://github.com/openclaw/openclaw/pull/84485) guards message-tool-only final delivery |
| **P1** | [#22676](https://github.com/openclaw/openclaw/issues/22676) Signal daemon race condition, orphaned processes | Open, linked PR open | — |
| **P1** | [#84059](https://github.com/openclaw/openclaw/issues/84059) `EmbeddedAttemptSessionTakeoverError` after 03.13→05.18 upgrade | Open, needs live repro | [#84250](https://github.com/openclaw/openclaw/pull/84250) fixes session write tolerance |
| **P1** | [#84038](https://github.com/openclaw/openclaw/issues/84038) `doctor --fix` silently migrates Codex config, breaking PI+OAuth | Open, linked PR open | — |
| **P1** | [#72015](https://github.com/openclaw/openclaw/issues/72015) active-memory blocks replies, overloads multi-agent gateways | Open | — |
| **P1** | [#71491](https://github.com/openclaw/openclaw/issues/71491) Kimi K2.6 `reasoning_content` 400 regression after LCM compaction | Open, queueable fix | — |
| P2 | [#72808](https://github.com/openclaw/openclaw/issues/72808) Silently lost Slack connection | Open | — |
| P2 | [#70628](https://github.com/openclaw/openclaw/issues/70628) Telegram DM fabricates silent-reply chatter | Open | — |
| P2 | [#84607](https://github.com/openclaw/openclaw/issues/84607) No automatic retry on `overloaded_error` | Open (new today) | — |

**Regression cluster**: Multiple issues trace to **v2026.5.18** (session takeover errors, Discord progress state persistence). The 03.13→05.18 upgrade path appears rocky.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Momentum | Prediction |
|---|---|---|---|
| **Masked secrets / API key protection** | [#10659](https://github.com/openclaw/openclaw/issues/10659), [#11829](https://github.com/openclaw/openclaw/issues/11829), [#13610](https://github.com/openclaw/openclaw/issues/13610) | 🔥 Active PRs: [#84718](https://github.com/openclaw/openclaw/pull/84718), [#84738](https://github.com/openclaw/openclaw/pull/84738), [#84739](https://github.com/openclaw/openclaw/pull/84739) | **v2026.5.21 or v2026.5.22** — multiple converging PRs |
| **Native secrets management** (AWS SM, Vault) | [#13610](https://github.com/openclaw/openclaw/issues/13610) | Medium interest (7 comments, 1 👍) | Post-security foundation |
| **Direct Exec Mode for Cron Jobs** | [#18160](https://github.com/openclaw/openclaw/issues/18160) | High 👍 (9), 11 comments | Likely next quarter — reduces LLM costs |
| **Slack Block Kit support** | [#12602](https://github.com/openclaw/openclaw/issues/12602) | 13 comments | Medium-term — rich UI demand |
| **Telegram Business Bot support** | [#20786](https://github.com/openclaw/openclaw/issues/20786) | 8 comments, 6 👍 | Near-term — enterprise messaging |
| **Tiered bootstrap loading** | [#22438](https://github.com/openclaw/openclaw/issues/22438) | 16 comments | Cost-control priority |
| **Pre-response enforcement hooks** | [#13583](https://github.com/openclaw/openclaw/issues/13583) | 10 comments, 2 👍 | Compliance-driven, slower path |
| **Per-model usage logging** | [#13219](https://github.com/openclaw/openclaw/issues/13219) | 5 comments, 1 👍 | Observability foundation |

**Strong signal**: Secrets/security infrastructure is the immediate roadmap focus, with execution efficiency (direct exec, tiered loading) following.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|---|---|---|
| **Silent failures** | Lost Slack connections, Discord progress state persistence, TTS audio cuts | 🔴 Critical — breaks trust |
| **Secrets exposure anxiety** | Multiple issues, security roadmap, plaintext in configs | 🔴 Critical — adoption blocker |
| **Upgrade fragility** | 03.13→05.18 session takeover errors, `doctor --fix` breaking configs | 🟡 High — operational risk |
| **Token/cost unpredictability** | Bootstrap loading, tool schema overhead (~3,500 tok/session) | 🟡 High — scaling concern |
| **Mobile gap** | No prebuilt Android APK | 🟢 Medium — accessibility |

### Satisfaction Signals
- Rich platform coverage (Discord voice, Telegram Business, Feishu, WhatsApp)
- Active community with AI-assisted contributions (QING, @samersaibot)
- Responsive beta cycle (daily releases)

### Use Case Evolution
- **Enterprise**: Security roadmaps, compliance hooks, secrets management
- **Cost-conscious**: Direct exec, tiered loading, per-model tracking
- **Mobile-first**: Android APK demand

---

## 8. Backlog Watch

| Issue/PR | Age | Status | Risk |
|---|---|---|---|
| [#9443](https://github.com/openclaw/openclaw/issues/9443) Prebuilt Android APK | ~3.5 months | Open, needs product decision | Community accessibility; competitor gap |
| [#6731](https://github.com/openclaw/openclaw/issues/6731) Safe/unsafe ClawdBot (Rust rewrite suggestion) | ~3.5 months | Open, security review needed | Unlikely to merge; distracts from incremental safety |
| [#13751](https://github.com/openclaw/openclaw/issues/13751) Feishu plugin: remove broad contact permission | ~3.5 months | Open, needs maintainer review | Enterprise China adoption |
| [#44202](https://github.com/openclaw/openclaw/issues/44202) Apple Silicon Metal/GPU guidance for local embeddings | ~2 months | Open, needs maintainer review | Local AI trend; Apple ecosystem |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) Reduce tool schema token overhead | ~3 months | Open, needs product decision | Daily cost tax on all users |
| [#52025](https://github.com/openclaw/openclaw/pull/52025) Render tool result images inline | ~2 months | Needs real-behavior-proof | UX polish backlog |

**Maintainer attention needed**: The `clawsweeper:needs-maintainer-review` label appears on **>30% of open issues**, indicating a structural review capacity constraint. Consider:
- Expanding maintainer team
- Automating more of the proof/verification pipeline
- Deprecating or batch-processing "off-meta tidepool" rated items

---

*Digest generated from GitHub data for openclaw/openclaw on 2026-05-21. All links: https://github.com/openclaw/openclaw*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source AI Agent Ecosystem
*Date: 2026-05-21*

---

## 1. Ecosystem Overview

The open-source AI agent ecosystem is experiencing **intense parallel development** across a dozen+ projects, with total daily activity exceeding 1,000 PR/issue updates. The landscape has bifurcated into **mature, production-hardened platforms** (OpenClaw, ZeroClaw, CoPaw) and **emerging specialized frameworks** (NanoBot, Hermes Agent, IronClaw's "Reborn" rewrite). A dominant theme is the **tension between rapid feature expansion and operational reliability**—every major project shows critical stability issues alongside ambitious multi-agent, multi-channel, and IDE-integration roadmaps. The sector is clearly **pre-consolidation**: no single project has achieved decisive technical or community dominance, though OpenClaw maintains the largest absolute scale.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Releases | Health Score* | Status |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| **OpenClaw** | 500 | 500 | 23 (4.6%) | 3 (beta+stable) | ⚠️ C+ | High volume, severe merge bottleneck |
| **NanoBot** | 11 | 40 | 27 (67.5%) | 0 | ✅ B+ | Healthy throughput, rapid iteration |
| **Hermes Agent** | 50 | 50 | 9 (18%) | 0 | ⚠️ C | Widening backlog, stability concerns |
| **PicoClaw** | 8 | 27 | 11 (40.7%) | 1 nightly | ⚠️ C+ | Stability hardening, stale fix unmerged |
| **NanoClaw** | 4 | 23 | 6 (26%) | 0 | ⚠️ C | Security PRs stalled, ACP emerging |
| **NullClaw** | 0 | 2 | 0 (0%) | 0 | 🔶 D | Minimal activity, maintenance mode |
| **IronClaw** | 18 | 45 | 6 (13.3%) | 0 | ⚠️ C | Reborn rewrite volatile, pre-release |
| **LobsterAI** | ~7 | 24 | 7 (29.2%) | 0 | ⚠️ C | Bursty merges, stale PR accumulation |
| **Moltis** | 3 | 3 | 3 (100%) | 0 | ✅ A- | Responsive, stable, low volume |
| **CoPaw** | 38 | 36 | 17 (47.2%) | 1 (v1.1.8.post1) | ✅ B | Active release cycle, scaling pains |
| **ZeptoClaw** | 0 | 1 | 0 (0%) | 0 | 🔶 D+ | Critical fix pending, near-dormant |
| **ZeroClaw** | 29 | 50 | 3 (6%) | 0 | 🔴 D+ | Severe merge crisis, 47 open PRs |
| **TinyClaw** | 0 | 0 | 0 | 0 | — | No activity |

*\*Health Score: Composite of merge ratio, issue resolution velocity, release cadence, and critical unmerged fixes*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Leading Peers |
|:---|:---|:---|
| **Absolute scale** | 500 issues/PRs daily | ZeroClaw (79), CoPaw (74) — 6-7× larger |
| **Platform coverage** | Discord voice, Telegram, Feishu, WhatsApp, Slack | NanoBot (Signal new), CoPaw (WeChat iLink, Feishu) |
| **Release velocity** | Daily beta/stable cycle | Most projects: no releases in 30+ days |
| **Security investment** | 3+ converging PRs on secrets protection | Hermes (TLS corruption), ZeroClaw (SecurityPolicy blocks heredocs) |

### Technical Approach Differences
- **Plugin SDK architecture**: OpenClaw emphasizes explicit deprecation paths and "clean bounded refactors" (v2026.5.19), contrasting with ZeroClaw's traumatic bulk revert (153 commits lost) and IronClaw's total "Reborn" rewrite
- **Multi-channel depth**: Discord voice channel *following* with DAVE recovery (#84264) demonstrates sophisticated real-time media handling absent from peers
- **Configuration model**: `IDENTITY.md`/`USER.md` bounded documentation vs. NanoClaw's `session/` directory multi-tenancy experiments

### Community Size Comparison
OpenClaw's **500 daily updates** likely represent 3-5× the active contributor base of any single peer. However, its **4.6% merge ratio** is the worst among major projects except ZeroClaw (6%), suggesting scale has outstripped governance capacity. NanoBot (67.5% merge ratio) and Moltis (100%) demonstrate that smaller communities can achieve healthier throughput.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Secrets / API key protection** | 🔥 OpenClaw, NanoBot, Hermes, ZeroClaw, IronClaw | OpenClaw: stop serializing keys to `models.json`; NanoBot: dangerous command confirmation; IronClaw: staged credentials; ZeroClaw: SecurityPolicy hardening |
| **Multi-tenancy / session isolation** | NanoBot, Hermes, ZeroClaw, NanoClaw | NanoBot #3744: per-session MEMORY; Hermes #5143: gateway profile routing; ZeroClaw #6272: per-alias workspaces; NanoClaw: shared WhatsApp number routing |
| **Streaming architecture** | PicoClaw, LobsterAI, CoPaw, NanoBot | PicoClaw #1950/#2404: SSE + provider streaming; LobsterAI #1576: SSE race condition; CoPaw: Feishu CardKit streaming; NanoBot: WebSocket delta streaming |
| **IDE / developer tool integration** | NanoClaw, IronClaw, ZeroClaw | NanoClaw #2542/#2575: ACP protocol bidirectional; IronClaw: Reborn CLI serve; ZeroClaw: skills-based tool replacement |
| **Cost optimization / token control** | OpenClaw, ZeroClaw, NanoClaw, NanoBot | OpenClaw #22438: tiered bootstrap; ZeroClaw #6165: "lighter ZeroClaw"; NanoClaw #2571: `/add-rtk` skill; NanoBot: per-model usage logging |
| **WhatsApp reliability** | OpenClaw, PicoClaw, NanoClaw, ZeroClaw | All show critical @-mention, group routing, or protocol parity bugs |
| **MCP tooling ecosystem** | IronClaw, ZeroClaw, OpenClaw | IronClaw #3805: Notion MCP; ZeroClaw #6699/#6721: MCP `tool_filter_groups`/`tool_search`; OpenClaw: Codex custom tool outputs |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Maximum platform breadth + voice media depth | Power users, multi-channel operators | Plugin SDK, bounded docs, daily release train |
| **NanoBot** | Rapid, healthy iteration; WebSocket-native | Developers, privacy-conscious users | Factory-based gateways, append-only transcripts |
| **Hermes Agent** | Gateway multi-tenancy at scale | Enterprise multi-team deployments | Profile routing, TUI + gateway dual mode |
| **PicoClaw** | Resource-constrained deployments | Raspberry Pi, Termux, edge hardware | Go-based, nightly builds, factory reset recovery |
| **NanoClaw** | IDE-native agent experience (ACP) | Developers in JetBrains/VS Code | TypeScript, skill branches, ACP protocol |
| **IronClaw** | TEE/security-hardened execution | Security-critical deployments | Rust, Reborn rewrite, runtime policy enforcement |
| **CoPaw** | Chinese enterprise IM integration | China-market teams, WeChat/Feishu users | Desktop + web hybrid, Pet plugin, CardKit |
| **ZeroClaw** | Explicit multi-agent orchestration | Agent swarm operators | Schema v3, per-alias workspaces, work lanes RFC |
| **Moltis** | Vault-backed security, QMD memory | Security-conscious self-hosters | Vault auth, nested memory subfolders |
| **LobsterAI** | NetEase ecosystem integration | NetEase enterprise customers | OpenClaw fork, cfmind runtime, browser automation |

**Key architectural divergence**: OpenClaw and LobsterAI represent **monolithic Node.js/TypeScript** stacks with rich platform adapters; IronClaw and PicoClaw pursue **systems-language performance** (Rust, Go) for constrained or security-critical environments; NanoBot and CoPaw occupy a **middle tier** with rapid feature iteration at some stability cost.

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (High Velocity, Variable Health)
| Project | Trajectory | Risk |
|:---|:---|:---|
| **OpenClaw** | Feature expansion + platform breadth | Merge bottleneck may drive contributor attrition |
| **NanoBot** | Infrastructure hardening + channel expansion | Sustained; best health-to-velocity ratio |
| **CoPaw** | Release-candidate stability + scaling | Performance ceiling (#4559), memory loss (#4581) |
| **IronClaw** | Reborn rewrite convergence | Pre-release volatility, E2E failures |

### Tier 2: Stabilization Phase (Lower Velocity, Hardening Focus)
| Project | Trajectory | Risk |
|:---|:---|:---|
| **PicoClaw** | Crash consistency, goroutine leaks | Unmerged critical fix (#2813) undermines trust |
| **Hermes Agent** | Gateway production readiness | Data loss bugs (#29522, #29507), doctor drift |
| **ZeroClaw** | v0.8.0 integration | Merge crisis threatens entire release |

### Tier 3: Maintenance / Niche (Minimal or Directed Activity)
| Project | Trajectory | Risk |
|:---|:---|:---|
| **NanoClaw** | ACP protocol + security hardening | Security PRs stalled 2-4 weeks |
| **Moltis** | Steady reliability improvements | Low risk, low visibility |
| **NullClaw** | Cron + Windows parity | Stagnation, contributor fatigue (#783 at 44 days) |
| **ZeptoClaw** | Surgical production fixes | Near-dormant, single-maintainer dependency |
| **TinyClaw** | — | Effectively inactive |

---

## 7. Trend Signals

| Trend | Evidence | Value for AI Agent Developers |
|:---|:---|:---|
| **"Production readiness" over novelty** | OpenClaw's top issues: silent failures, secrets exposure, upgrade fragility; ZeroClaw's #6060 merge crisis; universal focus on reliability | Developers should prioritize **observability, graceful degradation, and configuration validation** in agent designs |
| **Security as adoption gate** | Secrets governance (OpenClaw #11829), staged credentials (IronClaw), dangerous command confirmation (NanoBot #3937), SecurityPolicy (ZeroClaw) | **Treat secrets management as foundational**, not bolt-on; expect enterprise procurement to require audit trails |
| **Multi-modal, multi-channel as table stakes** | Voice (OpenClaw), Signal (NanoBot), WhatsApp (4 projects), Feishu/WeChat (CoPaw, LobsterAI), IDE embedding (NanoClaw ACP) | Design for **channel-agnostic core** with thin platform adapters; avoid channel-specific business logic |
| **Cost transparency and control** | Tiered loading, per-model logging, direct exec mode, token estimation optimization | **Instrument everything**; users increasingly treat agent token consumption as infrastructure cost requiring optimization |
| **MCP as emerging interoperability standard** | IronClaw Notion, ZeroClaw MCP bugs, OpenClaw Codex tools | Early adoption of MCP for tool ecosystem; expect standardization pressure |
| **Multi-agent orchestration demand** | ZeroClaw RFC #5890, Hermes #5143, OpenClaw multi-agent gateways | Prepare for **session isolation, workspace boundaries, and inter-agent communication patterns** |
| **"Lighter" agent stacks** | ZeroClaw #6165, skills-based replacement, PicoClaw edge focus | **Modularity and optional dependencies** will differentiate from bloated monoliths |
| **Governance tooling as project health predictor** | ZeroClaw #6808 work lanes, OpenClaw `clawsweeper` automation, IronClaw lane dependencies | Invest in **merge policies, stale bot tuning, and reviewer assignment** before scale |

---

*Report compiled from 12 project digests covering 1,000+ daily data points. All source links available in individual project digests.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-21

## 1. Today's Overview

NanoBot showed **very high development velocity** with 40 PRs updated in the last 24 hours (27 merged/closed, 13 open) and 11 active issues. The project is in a **rapid iteration phase** with no new releases, suggesting maintainers are batching changes toward a future version. Community interest is strong with multi-channel expansion (Signal, xAI Grok OAuth, Novita AI) and core stability fixes dominating the merge queue. The high merge-to-open ratio (27:13) indicates healthy code review throughput, though the backlog of open PRs suggests some feature proposals are awaiting deeper review.

---

## 2. Releases

**No new releases** — Version 0.2.0 remains the latest (referenced in issue #3907). No migration notes required.

---

## 3. Project Progress

### Merged/Closed PRs Today (27 total, key highlights)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#3935](https://github.com/HKUDS/nanobot/pull/3935) | chengyongru | **Signal channel support via signal-cli** — DMs, group chats, markdown conversion, typing indicators, attachments | Major channel expansion; closes duplicate #3852 |
| [#3930](https://github.com/HKUDS/nanobot/pull/3930) | chengyongru | Multi-language documentation site links (10 languages) | Internationalization |
| [#3179](https://github.com/HKUDS/nanobot/pull/3179) | JackLuguibin | WebSocket tooling, session lifecycle, reasoning, chat_id resumption | Core infrastructure |
| [#3748](https://github.com/HKUDS/nanobot/pull/3748) | JackLuguibin | `reraise` property for `AgentHook`, improved error handling | Reliability |
| [#3224](https://github.com/HKUDS/nanobot/pull/3224) | JackLuguibin | Append-only session transcripts with configurable tool result inclusion | Observability |
| [#3286](https://github.com/HKUDS/nanobot/pull/3286) | JackLuguibin | WebSocket delta streaming with chunked frame handling | Performance |
| [#2981](https://github.com/HKUDS/nanobot/pull/2981) | JackLuguibin | Inbound message deduplication per session | Stability |
| [#2932](https://github.com/HKUDS/nanobot/pull/2932) | JackLuguibin | LLM token usage recording to workspace JSONL | Cost/usage tracking |
| [#3026](https://github.com/HKUDS/nanobot/pull/3026) | JackLuguibin | Provider config list format (backward-compatible) | Scalability |
| [#2852](https://github.com/HKUDS/nanobot/pull/2852) | JackLuguibin | Factory-based gateway assembly for testability | Architecture |

**Pattern**: JackLuguibin authored 9 of 10 infrastructure PRs — core platform hardening (WebSocket, session management, telemetry, gateway architecture) is the dominant theme.

---

## 4. Community Hot Topics

### Most Active Issues

| Issue | Comments | 👍 | Analysis |
|:---|:---:|:---:|:---|
| [#49 — Signal channel support](https://github.com/HKUDS/nanobot/issues/49) | 4 | 5 | **Long-running community request** (created Feb 3, now resolved by #3935). High demand for privacy-focused messaging integration. Underlying need: users want NanoBot on platforms their contacts already use, especially in privacy-conscious communities. |
| [#3744 — Session-level MEMORY for multi-user agents](https://github.com/HKUDS/nanobot/issues/3744) | 4 | 0 | **Critical enterprise/team use case**. Users sharing one agent instance across IM platforms need isolation between `USER.md`/`MEMORY.md` files. Underlying need: true multi-tenancy without deploying separate agent instances. The `session/` directory question suggests documentation gap. |
| [#1123 — 163.com IMAP "Unsafe Login"](https://github.com/HKUDS/nanobot/issues/1123) | 4 | 1 | **China-specific email provider compatibility**. 163.com requires non-standard `ID` command before `SELECT`. Underlying need: broader Chinese market adoption requires handling local service quirks. |

### Most Active Open PRs

| PR | Focus | Risk/Opportunity |
|:---|:---|:---|
| [#3923 — `apply_patch` tool optimization](https://github.com/HKUDS/nanobot/pull/3923) | Structured multi-file code edits with rollback | High-impact for coding agent reliability; workspace path validation addresses safety concerns |
| [#3936 — xAI Grok OAuth](https://github.com/HKUDS/nanobot/pull/3936) | PKCE-based login without API key exposure | Strategic: positions NanoBot for Grok integration as xAI scales; manual fallback handles edge cases |
| [#3937 — Dangerous command confirmation](https://github.com/HKUDS/nanobot/pull/3937) | OpenClaw-style approval rules (auto/ask/deny) | **Security-critical**; closes #3887; addresses core trust barrier for autonomous agents |

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| 🔴 **High** | [#3939 — Moonshot API rejects kimi-k2.5/k2.6](https://github.com/HKUDS/nanobot/issues/3939) | Open | **[#3940](https://github.com/HKUDS/nanobot/pull/3940)** | `reasoning_effort` + `thinking` parameter conflict. Fix PR ready, needs merge. |
| 🔴 **High** | [#3931 — `restrictToWorkspace=true` blocks web requests](https://github.com/HKUDS/nanobot/issues/3931) | Open | None | Safety guard misclassifies `curl` to external URLs as "path outside working dir". **Regression in security policy logic** — breaks legitimate web tool use. |
| 🟡 **Medium** | [#3884 — WebUI conversation closes after first response](https://github.com/HKUDS/nanobot/issues/3884) | Open | None | WebSocket session termination bug; affects gateway-as-service deployments. Reproducible, needs investigation. |
| 🟡 **Medium** | [#3907 — Reasoning page rendering: word-per-line](https://github.com/HKUDS/nanobot/issues/3907) | **Closed** | Merged in 0.2.0+ | `IncrementalThinkExtractor` lacked line buffering. Fixed. |
| 🟡 **Medium** | [#3934 — `exec` tool can't `pip install`](https://github.com/HKUDS/nanobot/issues/3934) | Open | None | `$PATH` ordering puts system Python before virtualenv. Has proposed fix (prepend vs append). |
| 🟢 **Low** | [#3903 — Image generation MIME type hardcoding](https://github.com/HKUDS/nanobot/issues/3903) | Open | None | MiniMax/AIHubMix assume PNG; affects non-PNG outputs. |

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Ollama image generation** | [#3941](https://github.com/HKUDS/nanobot/issues/3941) | **High** | Natural extension of existing Ollama LLM support; local AI trend; clear implementation path proposed |
| **Signal channel** | [#49](https://github.com/HKUDS/nanobot/issues/49) / [#3935](https://github.com/HKUDS/nanobot/pull/3935) | **Merged** | Already in; will be in next release |
| **xAI Grok OAuth** | [#3936](https://github.com/HKUDS/nanobot/pull/3936) | **High** | Provider diversification strategy; PR complete |
| **Novita AI provider** | [#3927](https://github.com/HKUDS/nanobot/pull/3927) | **High** | Simple OpenAI-compatible path; low risk |
| **Group chat message buffering** | [#3938](https://github.com/HKUDS/nanobot/issues/3938) | **Medium** | Clear pain point with proposed debounce mechanism; affects scaling to team use |
| **Multi-user session memory isolation** | [#3744](https://github.com/HKUDS/nanobot/issues/3744) | **Medium** | Architectural change; may require design discussion |
| **Dangerous command confirmation** | [#3937](https://github.com/HKUDS/nanobot/pull/3937) | **High** | Security baseline; PR ready |

---

## 7. User Feedback Summary

### Pain Points
- **Security vs. functionality tension**: `restrictToWorkspace` (#3931) and `exec` pip restrictions (#3934) show users hitting safety guardrails designed for single-user local use, now scaling to multi-user/server deployments
- **Chinese market friction**: 163.com IMAP (#1123) and WeChat/Feishu memory isolation (#3744) indicate regional adoption blockers
- **WebSocket reliability**: Gateway deployments (#3884) less stable than CLI experience

### Use Cases Emerging
- **Team/enterprise multi-tenancy**: Multiple IM users → one agent instance (#3744, #3938)
- **Privacy-first deployments**: Signal channel demand (#49) for sensitive communications
- **Local AI stack completion**: Ollama image generation (#3941) to match local LLM inference

### Satisfaction Signals
- Strong contributor engagement (40 PRs/day, rapid issue response)
- Signal feature request fulfilled within 3 months of creation
- Active internationalization (#3930)

### Dissatisfaction Signals
- Some issues lack maintainer response for weeks (#1123: 3 months old)
- Closed duplicate PR #3852 (Signal) suggests coordination overhead; #3935 succeeded

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1123 — 163.com IMAP fix](https://github.com/HKUDS/nanobot/issues/1123) | ~3 months | **User churn in China market** | Maintainer review; proposed RFC-compliant `ID` command implementation ready |
| [#49 — Signal channel](https://github.com/HKUDS/nanobot/issues/49) | ~3.5 months | Resolved by #3935 | Close issue formally |
| [#3744 — Multi-user MEMORY isolation](https://github.com/HKUDS/nanobot/issues/3744) | ~10 days | **Enterprise adoption blocker** | Architectural decision on `session/` directory vs. per-user subdirectories |
| [#3931 — `restrictToWorkspace` web breakage](https://github.com/HKUDS/nanobot/issues/3931) | 1 day | **Regression severity unclear** | Confirm if affects all external commands or curl-specific; may need hotfix |

---

*Digest generated from HKUDS/nanobot GitHub activity 2026-05-20 to 2026-05-21. All links: https://github.com/HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-21

## 1. Today's Overview

Hermes Agent showed **extremely high community activity** with 50 issues and 50 PRs updated in the last 24 hours, though only 1 issue closure and 9 merged/closed PRs against 49 open issues and 41 open PRs indicates a **widening backlog**. No new releases were published. The project is in active feature development across gateway multi-tenancy, provider authentication, and platform integrations, but **stability concerns are mounting** with multiple P1-P2 bugs around data corruption, context loss, and auth state fragmentation. The maintainers appear stretched, with many fresh issues from May 20-21 still awaiting triage.

---

## 2. Releases

**No new releases** (v0.14.0 architecture referenced in #5143 as current target).

---

## 3. Project Progress

### Merged/Closed PRs Today (9 total, 3 shown with impact)

| PR | Author | Status | Impact |
|:---|:---|:---|:---|
| [#29238](https://github.com/NousResearch/hermes-agent/pull/29238) — fix: fall back to user config for vision capability on custom providers | JerryLiu369 | **Merged** | Unblocks vision on self-hosted providers (Ollama, CCTQ) when `supports_vision: true` is explicitly set |
| [#19803](https://github.com/NousResearch/hermes-agent/pull/19803) — fix(gateway): fail fast on undeliverable approval notifications | konsisumer | **Merged** | Eliminates 5-minute hangs when dangerous-command approvals can't reach users in gateway mode |
| [#28208](https://github.com/NousResearch/hermes-agent/issues/28208) — WhatsApp no-reply/no-op (related issue closed) | jacobburrell | **Closed** | Foundation for intentional silence in group chats; follow-up #18848 still open for explicit silent-skip path |

### Notable Open PRs Advancing

- **[#29544](https://github.com/NousResearch/hermes-agent/pull/29544)** — **Critical fix for TLS bytes written to `kanban.db`** (P1 data corruption; closes #29507)
- **[#29543](https://github.com/NousResearch/hermes-agent/pull/29543)** — Offloads `evaluate_after_turn` to thread executor, fixing Discord heartbeat timeouts from blocked event loop
- **[#29540](https://github.com/NousResearch/hermes-agent/pull/29540)** — New `hermes providers validate` deployment harness for real-world provider testing

---

## 4. Community Hot Topics

| Item | Engagement | Underlying Need |
|:---|:---|:---|
| [#5143](https://github.com/NousResearch/hermes-agent/issues/5143) Multi-Role Auto-Routing via Gateway Hooks | 4 comments, 👍12 | **Multi-tenancy at scale** — users need one gateway process to intelligently route to different agent personas without manual profile switching; v2 proposal aligned to v0.14.0 shows iterative community design |
| [#28419](https://github.com/NousResearch/hermes-agent/issues/28419) TUI ANSI escape sequence flooding after gateway pipe break | 4 comments | **Production TUI reliability** — terminal state recovery after crashes; affects unattended/long-running sessions |
| [#4438](https://github.com/NousResearch/hermes-agent/issues/4438) Rich Spreadsheet Skill | 4 comments | **Structured data abstraction** — users tired of agent reinventing `pandas`/`openpyxl` patterns; want first-class business document handling |
| [#29431](https://github.com/NousResearch/hermes-agent/issues/29431) 🌙 Dreaming Plugin Proposal | 1 comment | **Memory lifecycle management** — biological-inspired consolidation; signals community interest in autonomous agent cognition beyond reactive turns |

**Analysis:** The 👍12 on #5143 versus 0-4 on most others reveals **gateway multi-tenancy is the highest-demand architectural need**. The "Dreaming" plugin (#29431) and spreadsheet skill (#4438) show users want Hermes to be a **long-running knowledge worker**, not just a chat interface.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|:---|:---|:---|:---|
| **P1** | [#29522](https://github.com/NousResearch/hermes-agent/issues/29522) | **Context compaction hides completed assistant responses** — data loss in long sessions | None |
| **P1** | [#29507](https://github.com/NousResearch/hermes-agent/issues/29507) / [#29544](https://github.com/NousResearch/hermes-agent/pull/29544) | **TLS bytes written to `kanban.db`** — SQLite header corruption, persistent state loss | **PR #29544 open** |
| **P2** | [#29511](https://github.com/NousResearch/hermes-agent/issues/29511) | **DANGEROUS COMMAND warnings leak into agent output** in gateway auto-deny mode, contaminating downstream consumers | None |
| **P2** | [#28419](https://github.com/NousResearch/hermes-agent/issues/28419) | TUI ANSI flooding after pipe break | None |
| **P2** | [#5358](https://github.com/NousResearch/hermes-agent/issues/5358) | `model.provider` config ignored when `OPENROUTER_API_KEY` exists — unexpected provider routing | None |
| **P2** | [#29528](https://github.com/NousResearch/hermes-agent/issues/29528) | Discord slash-command suggestions not normalized (`</status:123>` vs `/status`) | None |
| **P2** | [#29529](https://github.com/NousResearch/hermes-agent/issues/29529) | Profile HOME isolation hides GitHub CLI auth from subprocesses | **PR #29530** (related feature request for shared auth home) |
| **P3** | [#29481](https://github.com/NousResearch/hermes-agent/issues/29481) | `hermes doctor` SSH check ignores configured user/port/key | None |
| **P3** | [#29442](https://github.com/NousResearch/hermes-agent/issues/29442) | `hermes doctor` false negative on Copilot `gh_cli` credentials | None |
| **P3** | [#29344](https://github.com/NousResearch/hermes-agent/issues/29344) | xAI 403 over-matched as entitlement failure, blocking token refresh | None |

**Critical pattern:** Two `hermes doctor` false negatives (#29481, #29442) suggest **diagnostic tooling is drifting from runtime reality**, eroding user trust in troubleshooting.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Gateway profile routing** | [#29535](https://github.com/NousResearch/hermes-agent/issues/29535) | **High** | Directly extends #5143 (👍12); multiple related PRs in flight; architectural priority for v0.14.0 |
| **Per-session working directory for gateway** | [#29531](https://github.com/NousResearch/hermes-agent/issues/29531) | **High** | Blocker for safe multi-tenant API deployments; paired with #29535 |
| **Rewind/edit-and-resubmit** | [#21910](https://github.com/NousResearch/hermes-agent/issues/21910) | **Medium** | 4 👍, clear UX precedent (Claude Code); session state complexity |
| **Persistent background task history** | [#16946](https://github.com/NousResearch/hermes-agent/issues/16946) | **Medium** | ProcessRegistry already has `_finished` dict; persistence layer gap |
| **Per-task model override for delegates** | [#18591](https://github.com/NousResearch/hermes-agent/issues/18591) | **Medium** | Rate-limit mitigation; config schema change needed |
| **Conversation context isolation** | [#14162](https://github.com/NousResearch/hermes-agent/issues/14162), [#27182](https://github.com/NousResearch/hermes-agent/issues/27182) | **Medium-High** | Multi-user deployment blocker; security/privacy demand |
| **Immutable/protected skills** | [#25083](https://github.com/NousResearch/hermes-agent/issues/25083) | **Lower** | Governance need but conflicts with current `skill_manage` design |
| **Title generation toggle** | [#29456](https://github.com/NousResearch/hermes-agent/issues/29456) | **Low** | Trivial config addition; local model user friction |

---

## 7. User Feedback Summary

### Pain Points
- **"It works but doctor says it's broken"** — SSH (#29481) and Copilot (#29442) diagnostics contradict functional runtime, creating confusion
- **Silent data loss** — context compaction (#29522) and kanban.db corruption (#29507) are **worst-case failures without user warning**
- **Gateway mode fragility** — ANSI leaks (#28419), approval text contamination (#29511), heartbeat timeouts (fixed by #29543) show production gateway is immature
- **Auth state fragmentation** — profile isolation (#29529, #29530) breaks OAuth flows; users need "isolated workspace + shared auth" hybrid

### Use Cases Emerging
- **Multi-platform deployments** (Slack/Discord/WhatsApp/Feishu simultaneously) with per-conversation isolation
- **Local model optimization** — title generation toggle (#29456), vision fallback (#29238)
- **Enterprise document workflows** — spreadsheet skill (#4438), Gmail attachments (#23465)

### Satisfaction Signals
- Active plugin ecosystem emerging (Dreaming #29431)
- Community contributing substantial PRs with test plans

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Needs |
|:---|:---|:---|:---|
| [#5143](https://github.com/NousResearch/hermes-agent/issues/5143) Multi-Role Auto-Routing | ~6 weeks | **High** | Maintainer review of v2 proposal; architectural decision before v0.14.0 freeze |
| [#4438](https://github.com/NousResearch/hermes-agent/issues/4438) Spreadsheet Skill | ~7 weeks | Medium | Scope decision — core vs. plugin vs. skill template |
| [#5358](https://github.com/NousResearch/hermes-agent/issues/5358) OpenRouter config override | ~6 weeks | **High** | Config precedence bug; affects provider portability |
| [#4922](https://github.com/NousResearch/hermes-agent/pull/4922) Docker network wiring | ~6 weeks | Medium | Backend review; straightforward but stalled |
| [#23465](https://github.com/NousResearch/hermes-agent/pull/23465) Gmail attachments | ~10 days | Low | Code review; feature-complete |
| [#27648](https://github.com/NousResearch/hermes-agent/pull/27648) Fallback provider management | ~4 days | Medium | Dashboard UI review |

**Concern:** 49 open issues with 1 closure in 24h suggests **triage bandwidth bottleneck**. The P1 data corruption fixes (#29544) need urgent merge; the 6-week-old config bugs (#5358) and routing proposals (#5143) risk becoming stale as architecture evolves.

---

*Digest generated from NousResearch/hermes-agent GitHub activity 2026-05-20/21.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-21

## 1. Today's Overview

PicoClaw shows **high development velocity** with 27 PRs and 8 issues updated in the last 24 hours, indicating an active release cycle around the v0.2.8-nightly build. The project is in a **stability-hardening phase**: five PRs from core contributor SiYue-ZO landed today targeting crash consistency, agent loop reliability, message bus backpressure, and fallback chain correctness. Security also received attention with CSRF protection and MQTT TLS verification fixes. However, the high stale issue/PR count (7 of 8 issues, 6+ PRs marked stale) suggests **review bandwidth may be constraining community contributions**. One authentication bug was resolved, but a critical PID reuse crash remains open despite an available fix.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| [v0.2.8-nightly.20260520.639b3270](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) | Nightly (automated) | Automated build from main; may be unstable. No manual changelog provided. Full diff: [v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) |

**No stable release** or migration notes today.

---

## 3. Project Progress

### Merged/Closed PRs (11 total, key items)

| PR | Author | Status | Impact |
|----|--------|--------|--------|
| [#2891](https://github.com/sipeed/picoclaw/pull/2891) | SiYue-ZO | **Merged** | Factory reset feature — recovery path for incompatible configs, preserves API keys |
| [#2725](https://github.com/sipeed/picoclaw/pull/2725) | dtapps | **Merged** | MCP init failure now non-fatal — prevents zombie gateway state when all MCP servers unreachable |
| [#2769](https://github.com/sipeed/picoclaw/issues/2769) | (issue closed) | **Resolved** | Authentication 401 bug fixed — API key handling across Groq/OpenRouter/Nvidia |

### Stability Hardening (5 open PRs from SiYue-ZO today)

| PR | Problem Fixed |
|----|---------------|
| [#2907](https://github.com/sipeed/picoclaw/pull/2907) | JSONL store metadata drift after crash (write ordering gap) |
| [#2906](https://github.com/sipeed/picoclaw/pull/2906) | Message bus backpressure — blocked goroutines under load |
| [#2905](https://github.com/sipeed/picoclaw/pull/2905) | Fallback chain wasted calls on expired contexts |
| [#2904](https://github.com/sipeed/picoclaw/pull/2904) | Agent loop reload leaks and panic cleanup |
| [#2908](https://github.com/sipeed/picoclaw/pull/2908) | Provider logo fallbacks broken after catalog refactor |

---

## 4. Community Hot Topics

### Most Active Issues (by comments)

| Issue | Comments | Core Tension |
|-------|----------|--------------|
| [#1950](https://github.com/sipeed/picoclaw/issues/1950) Streaming Output for Web Chat | **9 comments** | Long-standing enhancement (Mar 24); users want SSE-style UX for web interface. **Blocked on architectural decision?** Low priority label may indicate resource allocation tension. |
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) Configurable streaming HTTP to LLM backends | **7 comments** | Complements #1950 but at provider layer. Users expect `stream=True` parity with Python OpenAI client. Two streaming issues suggest **unified streaming architecture** is community priority. |
| [#2720](https://github.com/sipeed/picoclaw/issues/2720) Stale PID crash loop | **5 comments** | **High severity**; production reliability issue. Fix PR [#2813](https://github.com/sipeed/picoclaw/pull/2813) exists but unmerged since May 7. |

### Most Active PRs

| PR | Significance |
|----|--------------|
| [#2856](https://github.com/sipeed/picoclaw/pull/2856) Media attachments + Telegram rich delivery | Implements [#2855](https://github.com/sipeed/picoclaw/issues/2855); closes gap between text-only `message` tool and channel-native rich media. **Architecture signal**: moving toward unified outbound payload model. |
| [#2900](https://github.com/sipeed/picoclaw/pull/2900) CSRF/path traversal security hardening | External security contribution; indicates web UI attack surface growing as deployment model diversifies. |

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| **🔴 High** | [#2720](https://github.com/sipeed/picoclaw/issues/2720) | PID reuse causes infinite crash loop (singleton check only verifies PID exists, not process identity) | **Fix PR [#2813](https://github.com/sipeed/picoclaw/pull/2813) open since May 7; needs merge** |
| 🟡 Medium | [#2907](https://github.com/sipeed/picoclaw/pull/2907) | JSONL metadata drift after crash (consistency gap) | PR open today |
| 🟡 Medium | [#2906](https://github.com/sipeed/picoclaw/pull/2906) | Message bus backpressure → goroutine accumulation | PR open today |
| 🟡 Medium | [#2904](https://github.com/sipeed/picoclaw/pull/2904) | Agent loop resource leaks, panic cleanup failures | PR open today |
| 🟢 Low (resolved) | [#2769](https://github.com/sipeed/picoclaw/issues/2769) | 401 auth failures across providers | **Fixed** |

**Regression risk**: The five SiYue-ZO stability PRs all reference `improvement-report.md` — suggests internal audit found systemic reliability gaps. The concentration of fixes on a single day may indicate **coordinated hardening push** or **upcoming stable release preparation**.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in v0.2.8+ | Rationale |
|---------|----------|----------------------|-----------|
| **Streaming architecture** (web + provider layers) | #1950, #2404 | **High** | Two complementary issues, both marked roadmap-aligned. Core UX gap. |
| **DeepSeek native thinking controls** | [#2903](https://github.com/sipeed/picoclaw/issues/2903) | Medium | Provider-specific mapping; small scope, clear spec. Created today — fresh demand. |
| **GPT4Free/g4f provider** | [#2901](https://github.com/sipeed/picoclaw/issues/2901) | Low-Medium | "Nice-to-have" for cost-sensitive/homelab users; maintenance burden concern. |
| **WhatsApp in default arm64 builds** | [#2625](https://github.com/sipeed/picoclaw/issues/2625) | Low | Build config change, but "low priority" + licensing/complexity for compiled deps. |
| **Media attachments in `message` tool** | [#2856](https://github.com/sipeed/picoclaw/pull/2856) | **High** | PR exists, closes #2855. Architectural direction aligns with channel richness. |

**Prediction**: Streaming (#1950/#2404) and message tool media (#2856) are strongest candidates for next minor version. Both have clear user demand and architectural alignment.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Deployment fragility** | #2720 (PID crash loop), #2891 (factory reset needed) | High — production operations |
| **Auth/debuggability** | #2769 (401 mysteries), fixed but pattern suggests key handling is brittle | Medium |
| **Build/distribution gaps** | #2625 (WhatsApp missing from arm64), #2902 (Termux guide needed) | Medium — edge platform support |
| **Streaming UX lag** | #1950, #2404 | Medium — competitive parity |

### Use Case Signals

- **Resource-constrained deployments**: Raspberry Pi Zero 2 (#2625), Android Termux (#2902), GPT4Free interest (#2901) — users want PicoClaw on **low-cost, portable, or offline-capable hardware**
- **Multi-channel richness**: Telegram media (#2856), WhatsApp (#2625), Web Chat streaming (#1950) — **channel-native experience expected**, not lowest-common-denominator text

### Satisfaction/Dissatisfaction

- ✅ **Positive**: Active nightly builds, responsive security fixes (#2900), factory reset recovery (#2891)
- ❌ **Negative**: Stale bugfixes unmerged (#2813 for #2720), "stale" label overused — community may perceive **contributions ignored**

---

## 8. Backlog Watch

### Critical: Fix Available, Unmerged

| Item | Age | Risk |
|------|-----|------|
| [#2813](https://github.com/sipeed/picoclaw/pull/2813) Fix stale PID verification | **14 days** | Production crash loops; high-priority bug with ready solution |

### Long-Standing Enhancement Requests

| Item | Age | Blocker |
|------|-----|---------|
| [#1950](https://github.com/sipeed/picoclaw/issues/1950) Web Chat streaming | **58 days** | Needs architectural decision? Low priority label vs. high user interest |
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) Provider streaming config | **44 days** | Complementary to #1950; may need coordination |

### Stale PRs with Value

| PR | Age | Value |
|----|-----|-------|
| [#2768](https://github.com/sipeed/picoclaw/pull/2768) Retry transient LLM HTTP errors | 17 days | Reliability under provider instability |
| [#2858](https://github.com/sipeed/picoclaw/pull/2858) Quoted heredoc markdown | 9 days | Security/correctness for code execution tool |
| [#2693](https://github.com/sipeed/picoclaw/pull/2693) Sandbox bypass via `find /` | 24 days | **Security** — workspace isolation escape |

**Maintainer attention needed**: The "stale" automation appears aggressive — multiple PRs with clear value (including security fixes) are tagged stale within 1-2 weeks. Consider **tuning stale bot thresholds** or **prioritizing security/reliability PRs** for manual review before auto-labeling discourages contributors.

---

*Digest generated from GitHub activity 2026-05-20. All links: https://github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-21

## 1. Today's Overview

NanoClaw shows **high development velocity** with 23 PRs and 4 issues updated in the last 24 hours, indicating an active pre-release stabilization period. The project is currently **heavy on inbound contributions but light on maintainer merge activity**—17 PRs remain open versus 6 merged/closed, suggesting a potential review bottleneck. A significant cluster of WhatsApp-related bugs (#2560, #2570, #2565) and security hardening PRs (four from Hinotoi-agent alone) dominate the day's activity. The ACP (Agent Client Protocol) ecosystem is expanding rapidly with two complementary PRs (#2542, #2575) positioning NanoClaw as both client and server in IDE-agent integrations. No new releases were cut, implying the project is accumulating changes for a future version rather than shipping incrementally.

---

## 2. Releases

**No new releases** as of 2026-05-21.

---

## 3. Project Progress

### Merged/Closed PRs (6 items)

| PR | Author | Description | Significance |
|---|---|---|---|
| [#2565](https://github.com/nanocoai/nanoclaw/pull/2565) | glifocat | **fix(whatsapp): detect group @-mentions via `contextInfo.mentionedJid`** | Resolves critical WhatsApp onboarding blocker; closes #2560 |
| [#2143](https://github.com/nanocoai/nanoclaw/pull/2143) | bitloi | **fix: add admin cancel commands for active agent runs** | Operational safety—admins can now terminate runaway agents |
| [#2057](https://github.com/nanocoai/nanoclaw/pull/2057) | dooha333 | **fix(setup): make systemd installable on LXC + centralize host restart** | LXC/container hosting viability |
| [#2054](https://github.com/nanocoai/nanoclaw/pull/2054) | dooha333 | **fix(setup): prevent invisible-sudo hangs in spinner-driven setup** | UX fix for fresh installs |
| [#2052](https://github.com/nanocoai/nanoclaw/pull/2052) | dooha333 | **fix(setup): auto-bootstrap local OneCLI admin so first install completes** | Reduces first-run friction |
| [#2056](https://github.com/nanocoai/nanoclaw/pull/2056) | dooha333 | **fix(setup): detect LXC and quiet polkit linger noise** | Infrastructure polish |

**Key advancement:** The WhatsApp @-mention fix (#2565) unblocks a documented onboarding flow, directly addressing user acquisition friction. The four dooha333 setup fixes collectively mature NanoClaw's installation experience for non-standard environments (LXC, headless servers).

---

## 4. Community Hot Topics

### Most Active Discussions

| Item | Activity | Analysis |
|---|---|---|
| [#2560](https://github.com/nanocoai/nanoclaw/issues/2560) (now closed) | 1 comment, High priority bug | **WhatsApp as primary channel is validated**—users expect production-grade WhatsApp behavior. The rapid fix (#2565) suggests maintainer prioritization of onboarding-critical paths. |
| [#2542](https://github.com/nanocoai/nanoclaw/pull/2542) + [#2575](https://github.com/nanocoai/nanoclaw/pull/2575) | 2 PRs, same author (joka-7), zero comments each | **ACP protocol bidirectional support**—NanoClaw as ACP client (#2542) and ACP server bridge for IDE integration (#2575). The screenshot demo in #2575 shows WebStorm integration; underlying need is **developer workflow embedding**—users want agents inside their existing tools, not separate UIs. |
| [#2574](https://github.com/nanocoai/nanoclaw/issues/2574) | 0 comments, but structural risk | **Skill branch staleness**—the `/convert-to-apple-container` skill references a branch that would rollback infrastructure. Indicates **skill system technical debt**: skills as git branches may not scale. |

**Underlying needs identified:**
- **IDE-native agent experience** (ACP PRs) — developers want `@file` mentions and tool-use inside familiar editors
- **Reliable WhatsApp as default channel** — three related issues/PRs show this is load-bearing for user acquisition
- **Skill system maintainability** — branch-based skills create staleness hazards

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix Status |
|---|---|---|---|
| **High** | [#2560](https://github.com/nanocoai/nanoclaw/issues/2560) / [#2565](https://github.com/nanocoai/nanoclaw/pull/2565) | WhatsApp group @-mentions never set `isMention`, blocking onboarding | **FIXED** (merged 2026-05-20) |
| **High** | [#2570](https://github.com/nanocoai/nanoclaw/issues/2570) | Shared-number mode: @-mentioning **human operator** falsely triggers agent | **OPEN**, no linked PR |
| **Medium** | [#2569](https://github.com/nanocoai/nanoclaw/issues/2569) | `add_reaction` schema mismatch: shortcode names break WhatsApp + Discord | **OPEN**, no linked PR |
| **Medium** | [#2496](https://github.com/nanocoai/nanoclaw/pull/2496) | `writeOutboundDirect()` opens DB readonly, silently fails INSERTs | **PR open**, needs review |
| **Medium** | [#2572](https://github.com/nanocoai/nanoclaw/pull/2572) | Rootless Podman: two compounding bugs (user mapping + bind mount writes) | **PR open**, needs review |
| **Medium** | [#2531](https://github.com/nanocoai/nanoclaw/pull/2531) | Poll-loop duplicate text when `send_message` fires mid-turn | **PR open**, needs review |

**Stability assessment:** WhatsApp channel reliability remains the **highest-risk surface**—two distinct @-mention bugs in 48 hours suggest the routing logic (`src/router.ts:184`, `:211`) is fragile for group contexts. The `isMention: undefined` hardcoding pattern implies similar issues may exist in other channels.

---

## 6. Feature Requests & Roadmap Signals

| Item | Signal Strength | Prediction |
|---|---|---|
| [#2542](https://github.com/nanocoai/nanoclaw/pull/2542) + [#2575](https://github.com/nanocoai/nanoclaw/pull/2575) ACP protocol | **Strong** | ACP support likely in next minor version (v2.x); positions NanoClaw against Claude Code, Cursor |
| [#2571](https://github.com/nanocoai/nanoclaw/pull/2571) `/add-rtk` skill | **Moderate** | Token-cost optimization as first-class skill; signals cost-awareness as selling point |
| [#2573](https://github.com/nanocoai/nanoclaw/pull/2573) Context-window introspection | **Moderate** | Agent self-monitoring for context budget; aligns with "agent autonomy" theme |
| [#1723](https://github.com/nanocoai/nanoclaw/pull/1723) Pluggable central DB (SQLite + SeekDB) | **Moderate-Strong** | Long-running core refactor; v2 architecture enabler, likely blocking other DB work |

**Emerging theme:** NanoClaw is pivoting from "chatbot framework" to **"agent infrastructure layer"**—ACP for IDE embedding, context introspection for autonomous operation, cost optimization (rtk), and pluggable backends.

---

## 7. User Feedback Summary

### Pain Points

| Issue | User Impact | Root Cause |
|---|---|---|
| WhatsApp onboarding fails silently | New users can't activate bot in groups | `isMention` hardcoded `undefined` |
| Operator @-tags wake wrong agent | Shared business numbers cause confusion | Routing doesn't distinguish bot vs. operator JIDs |
| Emoji reactions fail cross-platform | Agent actions break on WhatsApp/Discord | Schema doc (shortcodes) ≠ handler implementation (verbatim pass) |
| Setup hangs on fresh install | Abandoned installations | Invisible sudo prompts in spinner UI |

### Use Cases Surfacing
- **Small business shared WhatsApp** (#2570): bot and human share number, need clean handoff
- **IDE-embedded coding agents** (#2575): developers want NanoClaw backend for WebStorm/VS Code AI features
- **Cost-sensitive operations** (#2571): rtk integration for 60-90% token savings on CLI workflows

### Satisfaction/Dissatisfaction
- **Positive:** Rapid fix for #2560 (19→20 May) shows responsive maintainer attention to onboarding blockers
- **Negative:** #2574 (stale skill branch) suggests **skill ecosystem maintenance is neglected**; users may encounter broken skills

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [#1723](https://github.com/nanocoai/nanoclaw/pull/1723) Pluggable central DB | ~6 weeks | **Architecture blocker** | Core maintainer review; touches v2 data layer |
| [#1999](https://github.com/nanocoai/nanoclaw/pull/1999) Reject symlinked host dirs | ~4 weeks | Security hardening | Review from security-focused maintainer |
| [#2004](https://github.com/nanocoai/nanoclaw/pull/2004) Trust only canonical channels remote | ~4 weeks | Supply-chain security | Policy decision needed on trusted remotes |
| [#2383](https://github.com/nanocoai/nanoclaw/pull/2383) Authorize `create_agent` actions | ~2 weeks | Multi-tenant safety | Authorization model review |
| [#2143](https://github.com/nanocoai/nanoclaw/pull/2143) Admin cancel commands | ~3 weeks | **CLOSED today** | — |

**Critical attention needed:** Four security PRs from Hinotoi-agent (#1999, #2004, #2383, #2566) form a **coordinated hardening campaign** but have been open 2-4 weeks without merge. The project appears to have **security review bandwidth constraints** relative to incoming security contributions.

---

*Digest generated from NanoClaw GitHub activity 2026-05-20 to 2026-05-21. All links: https://github.com/nanocoai/nanoclaw*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-05-21

## 1. Today's Overview

NullClaw shows **minimal daily activity** with zero issues updated and only two pull requests receiving updates in the past 24 hours—neither of which merged. The project appears to be in a **maintenance and stabilization phase** rather than active feature development, with contributor attention focused on hardening existing subsystems (cron scheduling, Windows networking compatibility) rather than expanding core AI agent capabilities. No releases have been cut recently, suggesting maintainers may be accumulating changes for a larger version bump or are resource-constrained. The zero open issues count is atypical for an active open-source project and may indicate either aggressive triage, low adoption, or issues being tracked elsewhere. Overall project health reads as **stable but potentially stagnant**—no critical fires, but also no visible momentum toward roadmap milestones.

---

## 2. Releases

**No new releases.** No version tags, changelogs, or migration notes to report.

---

## 3. Project Progress

**No PRs merged or closed today.** Both active pull requests remain in open state with recent updates:

| PR | Status | Last Activity | Progress Assessment |
|---|---|---|---|
| [#892](https://github.com/nullclaw/nullclaw/pull/892) | Open, updated 2026-05-20 | Windows networking regression tests | **Testing infrastructure**—validates fix for #890's `HostResolutionFailed` bug; blocked on review/merge |
| [#783](https://github.com/nullclaw/nullclaw/pull/892) | Open, updated 2026-05-20 | Cron subagent expansion | **Feature development**—substantial subsystem (scheduler, DB schema, CLI JSON output, security hardening); long-running (44 days since creation) |

**Net advancement:** Zero. Both PRs are in review limbo despite recent author activity.

---

## 4. Community Hot Topics

With **zero issues and zero comments/reactions** across all tracked items, there are no genuinely "hot" community topics. The closest to community-relevant activity:

- **[#892](https://github.com/nullclaw/nullclaw/pull/892)** — Windows compatibility regression tests: Underlying need is **cross-platform reliability** for AI agent deployments in enterprise Windows environments. The original #890 bug broke *every* provider chat completion that pre-resolved hostnames—this is infrastructure-critical for production use.

- **[#783](https://github.com/nullclaw/nullclaw/pull/892)** — Cron subagent: Underlying need is **observability and operational control** for scheduled AI workflows. The JSON output and run history features suggest users are trying to integrate NullClaw into external monitoring/CI systems rather than using it as a standalone tool.

**Analysis:** The absence of discussion (undefined comments, zero reactions) suggests either (a) small contributor base, (b) decisions happening off-GitHub (Discord, Slack, corporate channels), or (c) low external adoption of these specific features.

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix Status |
|---|---|---|---|
| **Medium (mitigated)** | [#890](https://github.com/nullclaw/nullclaw/issues/890) (referenced) | Windows `getAddressList` localhost-only stub caused `HostResolutionFailed` on all provider hostname pre-resolution | **Fixed on `main`** (commits 973bfa4, dfc9f3b, d3c7ef7); [#892](https://github.com/nullclaw/nullclaw/pull/892) adds regression tests pending merge |
| **Unconfirmed** | None reported today | — | — |

**No new bugs reported in last 24h.** The Windows networking fix is the only stability-relevant work visible, and it appears resolved in code but not yet protected by merged tests.

---

## 6. Feature Requests & Roadmap Signals

No explicit user feature requests exist in the dataset. **Inferred roadmap signals** from active PRs:

| Feature | Source | Likelihood in Next Version | Rationale |
|---|---|---|---|
| Production-grade cron scheduling | [#783](https://github.com/nullclaw/nullclaw/pull/892) | High | Large, complete PR; DB-backed design suggests architectural commitment |
| JSON CLI output for all subagents | [#783](https://github.com/nullclaw/nullclaw/pull/892) | High | Pattern established; enables automation/CI integration |
| Windows parity with Unix networking | [#892](https://github.com/nullclaw/nullclaw/pull/892) | High | Fix already on main; tests are merge blocker |
| Security hardening framework | [#783](https://github.com/nullclaw/nullclaw/pull/892) | Medium | Mentioned in PR but details sparse; may be foundational rather than user-visible |

**Prediction:** Next release likely emphasizes **operational maturity** (scheduling, observability, cross-platform stability) over core AI capabilities.

---

## 7. User Feedback Summary

**No direct user feedback available**—zero issues, zero discussions, zero reactions.

**Proxy indicators of pain points:**

| Inferred Pain Point | Evidence | User Scenario |
|---|---|---|
| Windows deployment fragility | #890 + #892 | Enterprise users running NullClaw on Windows servers for internal AI agents |
| Lack of machine-readable output | #783 JSON flags | DevOps teams integrating NullClaw into larger orchestration stacks |
| No execution visibility for scheduled tasks | #783 `cron_runs` history | Users needing audit trails and failure recovery for autonomous agent operations |

**Satisfaction/dissatisfaction:** Unmeasurable from data. The long-open #783 (44 days) may indicate either meticulous review standards or maintainer bandwidth constraints—either way, contributors are persisting, suggesting sufficient investment to tolerate delay.

---

## 8. Backlog Watch

| Item | Age | Risk | Recommended Action |
|---|---|---|---|
| [#783](https://github.com/nullclaw/nullclaw/pull/892) | **44 days** since creation | **High**—feature bit-rot, contributor fatigue, merge conflicts | Maintainer review or explicit timeline communication to author |
| [#892](https://github.com/nullclaw/nullclaw/pull/892) | **16 days** since creation | Low—test-only PR, narrow scope, recent activity | Routine review queue |

**Critical concern:** [#783](https://github.com/nullclaw/nullclaw/pull/892) represents substantial engineering effort (cron engine, DB migrations, security work) at risk of staleness. The pattern of large, long-running PRs without incremental merge suggests **trunk-based development challenges** or **review bottleneck**. No maintainer comments are visible—project would benefit from triage labels, review assignments, or explicit WIP/draft status to manage contributor expectations.

---

*Digest generated from github.com/nullclaw/nullclaw data as of 2026-05-21. All links: https://github.com/nullclaw/nullclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-21

## 1. Today's Overview

IronClaw shows **intense development velocity** with 45 PRs and 18 issues updated in the last 24 hours, reflecting a project in active architectural migration. The "Reborn" rewrite dominates all workstreams—nearly every tracked item carries the `reborn` label—with parallel efforts across auth services, WebUI porting, secrets/egress infrastructure, and capability composition. Zero new releases suggests the team is accumulating substantial changes before stabilization. The 27:18 open-to-merged PR ratio indicates healthy throughput, though the large volume of XL-sized PRs signals significant, risky changes in flight. Overall project health: **productive but pre-release volatile**.

---

## 2. Releases

**No new releases** (v0.28.2 remains latest).

Note: PR [#3708](https://github.com/nearai/ironclaw/pull/3708) (`chore: release`) is open with **breaking API changes** in `ironclaw_common` (0.4.2 → 0.5.0) and version bump for `ironclaw` (0.24.0 → 0.28.2). This release is pending merge.

---

## 3. Project Progress

### Merged/Closed PRs Today (6 items)

| PR | Description | Significance |
|:---|:---|:---|
| [#3835](https://github.com/nearai/ironclaw/pull/3835) | Fix CI permissions for `/benchmark` reactions | Infrastructure reliability |
| [#3808](https://github.com/nearai/ironclaw/pull/3808) | `/benchmark` slash-command dispatcher | Enables on-demand benchmarking workflow |
| [#3816](https://github.com/nearai/ironclaw/pull/3816) | Port shell to Reborn built-ins | Core capability: shell execution in new architecture |
| [#3820](https://github.com/nearai/ironclaw/pull/3820) | Enforce runtime policy before host capability dispatch | **Security hardening**—policy gating at dispatch boundary |
| [#3818](https://github.com/nearai/ironclaw/pull/3818) | Enforce staged credentials for production egress | **Security hardening**—credential staging for HTTP egress |
| [#3782](https://github.com/nearai/ironclaw/pull/3782) | Add CLI `serve` handoff | WebUI serving infrastructure |
| [#3825](https://github.com/nearai/ironclaw/pull/3825) | Require resolved runtime policy for Reborn live runtime | Fail-closed safety for local-dev |

### Key Advances

- **Security architecture maturing**: Staged credentials (#3818, #3831), runtime policy enforcement (#3820, #3825), and leak detection (#3767) show systematic hardening
- **Shell capability complete**: End-to-end shell support landed via #3816 → #3826 → #3832 → #3833 chain
- **Benchmarking infrastructure**: Live `/benchmark` command now functional after permission fix (#3835)
- **WebUI ingress forming**: #3828 delegates `serve` to WebUI ingress; #3815 provides gateway composition

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Comments | Topic | Analysis |
|:---|:---|:---|:---|
| [#3803](https://github.com/nearai/ironclaw/issues/3803) | 2 | Secrets/egress production composition | **Critical path blocker**: Finishing secrets injection for tool composition; depends on multiple in-flight PRs |
| [#3094](https://github.com/nearai/ironclaw/issues/3094) | 1 | Approval/auth interaction services | UX bridge for Reborn's permission model; P0 priority, long-running (created April 29) |
| [#3800](https://github.com/nearai/ironclaw/issues/3800) | 1 | REPL golden path | **Closed today**—REPL proven as thin shell over Reborn services |

### Underlying Needs

- **Tool ecosystem enablement**: Issues #3803, #3805 (Notion MCP), #3829 (Google Calendar/Gmail) all converge on making Reborn's capability catalog actually *usable* with real integrations
- **V1→Reborn parity**: WebUI port (#3580), auth migration (#3810-#3812), and routine surfaces (#3290) show users need functional equivalence before they can migrate

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix Status |
|:---|:---|:---|:---|
| **High** | [#3821](https://github.com/nearai/ironclaw/issues/3821) | `Thread::restore_from_messages` drops orphan assistant rows—breaks out-of-band context injection | **No fix PR**; reported today by nickz-t3 |
| **High** | [#3447](https://github.com/nearai/ironclaw/issues/3447) | Nightly E2E failing since May 10 | **No fix PR**; persistent CI instability |
| **Medium** | [#3734](https://github.com/nearai/ironclaw/issues/3734) | v0.28.2 regression: missing API Key and Fetch models controls in provider config | **Closed**—fixed in subsequent release |

### Stability Assessment

- **Data loss risk in #3821**: Orphan assistant rows being discarded could corrupt conversation state—this is a correctness bug in core session logic
- **E2E reliability gap**: 11-day ongoing nightly failure without resolution suggests test infrastructure debt
- **Regression pattern**: #3734 shows version-to-version UI breakage in non-TEE paths; testing coverage gaps for non-TEE configurations

---

## 6. Feature Requests & Roadmap Signals

### User-Requested / Design-Proposed

| Item | Category | Likelihood in Next Release |
|:---|:---|:---|
| [#3798](https://github.com/nearai/ironclaw/issues/3798) | Subagent spawn design for Reborn agent loop | **High**—formal design doc, scoped to multiple crates; enables core multi-agent scenarios |
| [#1519](https://github.com/nearai/ironclaw/issues/1519) | Routine notifications with chat context | **Medium**—UX polish; blocked on Mission/routine migration (#3290) |
| [#3829](https://github.com/nearai/ironclaw/issues/3829) | Native Google Calendar/Gmail extensions | **Medium**—depends on secrets/auth lanes completing |
| [#3805](https://github.com/nearai/ironclaw/issues/3805) | Notion MCP capability | **Medium**—first concrete MCP tool; signals ecosystem readiness |

### Predicted Next-Version Contents

Based on closed PRs and open dependencies:
- Reborn CLI serve/WebUI ingress (near completion)
- Staged credential enforcement for production
- Shell capability in local-dev
- Temperature control in Responses API (#3641, open but mature)

---

## 7. User Feedback Summary

### Explicit Pain Points

| Source | Pain Point | User Impact |
|:---|:---|:---|
| [#1519](https://github.com/nearai/ironclaw/issues/1519) | Routine notifications isolated from chat context | Users lose conversational continuity with automated agents |
| [#3734](https://github.com/nearai/ironclaw/issues/3734) | UI controls disappearing in patch releases | Configuration workflow breakage, trust erosion |
| [#3821](https://github.com/nearai/ironclaw/issues/3821) | Context injection failing silently | Developers cannot reliably manipulate conversation state |

### Satisfaction Signals

- Active `/benchmark` adoption (#3834 canary) indicates engagement with performance tooling
- Multiple "Lane" issues (#3803, #3805, #3807, #3829) show structured, communicated roadmap

### Dissatisfaction Signals

- **Zero 👍 reactions** across all 18 issues suggests either: (a) internal team tracking with no community voting, or (b) genuinely low community engagement with the issue tracker
- Long-running P0 issues (#3094, 22 days old) without closure

---

## 8. Backlog Watch

### Critical Attention Needed

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#3447](https://github.com/nearai/ironclaw/issues/3447) Nightly E2E failed | 11 days | **Release blocker** | Root cause analysis; likely flaky test or infrastructure dependency |
| [#3094](https://github.com/nearai/ironclaw/issues/3094) Approval/auth interaction services | 22 days | **P0 feature gap** | UX unblock for Reborn permission flows; no assignee progress visible |
| [#3290](https://github.com/nearai/ironclaw/issues/3290) Migrate missions, jobs, legacy routines | 15 days | **P2, but blocking #1519** | Decision on deprecation vs. migration path |
| [#3767](https://github.com/nearai/ironclaw/pull/3767) NoExposureGuard service | 3 days | **Security-critical, XL size** | Review bandwidth; risk of merge conflicts with parallel security PRs |

### Maintainer Bottleneck Indicators

- **serrrfirat** authored or is assigned to 8+ open issues/PRs—concentration risk
- **danielwpz** auth chain (#3810 → #3811 → #3812) is sequential-blocked on Step 1
- Multiple "Depends on #XXXX" PRs (#3826→#3827→#3830; #3815→#3828) create merge-order fragility

---

*Digest generated from GitHub activity 2026-05-20 to 2026-05-21. All links: https://github.com/nearai/ironclaw*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-21

## 1. Today's Overview

LobsterAI (NetEase Youdao's AI agent platform) shows **high engineering velocity** with 24 PRs updated in the last 24 hours and 7 merged/closed, indicating active development. However, **zero new releases** and a growing backlog of 17 open PRs (many stale since early April) suggest a focus on internal iteration over shipping. The project faces **critical runtime conflicts** with sibling product "Zhiqi Dìwángxiè" (智企帝王蟹) competing for gateway ports, and new users are hitting **blocker onboarding issues** with missing OpenClaw runtime detection. Community engagement appears muted with low reaction counts (0 👍 on most items), though the volume of code changes indicates healthy internal contribution.

---

## 2. Releases

**No new releases.** The project remains without recent tagged versions, despite substantial merged changes including browser stability improvements, model context window support, and thinking block display features.

---

## 3. Project Progress

### Merged/Closed PRs (7 items — 2026-05-20)

| PR | Author | Areas | Description | Link |
|:---|:---|:---|:---|:---|
| #2023 | fisherdaddy | renderer, docs, main, openclaw | **feat:** Improve browser/webfetch stability and success rate | [PR #2023](https://github.com/netease-youdao/LobsterAI/pull/2023) |
| #2022 | liugang519 | renderer, main, cowork, artifacts | **fix(artifacts):** Optimize HTML preview & source display — lazy loading, theme adaptation, file existence validation | [PR #2022](https://github.com/netease-youdao/LobsterAI/pull/2022) |
| #2021 | btc69m979y-dotcom | main, openclaw | **feat:** Package models support `contextWindow` configuration (backward compatible) | [PR #2021](https://github.com/netease-youdao/LobsterAI/pull/2021) |
| #2020 | btc69m979y-dotcom | main | **fix:** Prevent small window on Windows cross-DPI multi-monitor setups | [PR #2020](https://github.com/netease-youdao/LobsterAI/pull/2020) |
| #2019 | btc69m979y-dotcom | renderer, docs, main, openclaw, cowork | **feat:** Model custom params passthrough + thinking block display with streaming render | [PR #2019](https://github.com/netease-youdao/LobsterAI/pull/2019) |
| #2018 | fisherdaddy | main, openclaw | **fix(cowork):** Avoid OpenClaw gateway restart on token refresh | [PR #2018](https://github.com/netease-youdao/LobsterAI/pull/2018) |
| #2015 | fisherdaddy | renderer, docs, main, openclaw, cowork | **fix:** Handle OpenClaw compaction retries and tool result gaps | [PR #2015](https://github.com/netease-youdao/LobsterAI/pull/2015) |

**Key advances:** Core infrastructure hardened around OpenClaw gateway reliability (#2018, #2015), browser automation stability (#2023), and modern LLM features like reasoning/thinking blocks (#2019) and context window configuration (#2021). The thinking block implementation with `beforeMessageId` ordering suggests preparation for reasoning models (Claude-style extended thinking).

---

## 4. Community Hot Topics

### Most Active Discussions

| Item | Activity | Analysis |
|:---|:---|:---|
| **#1698** Gateway port conflict with Zhiqi Dìwángxiè | 2 comments, updated 2026-05-20 | [Issue #1698](https://github.com/netease-youdao/LobsterAI/issues/1698) — **Critical ecosystem conflict**: Two NetEase products (LobsterAI/有道龙虾 and Zhiqi Dìwángxiè/智企帝王蟹) cannot coexist due to hardcoded gateway port collision. User reports 100% reproduction. **Underlying need**: Enterprise users running multiple NetEase AI products need isolated runtime environments or configurable ports. |
| **#1568** DingTalk streaming message configuration | 1 comment, **closed** 2026-05-20 | [Issue #1568](https://github.com/netease-youdao/LobsterAI/issues/1568) — Documentation gap for connector installation; `openclaw` CLI not found. Resolved but indicates onboarding friction for IM integrations. |
| **#2017** Local runtime login failure — missing cfmind | 1 comment, opened 2026-05-20 | [Issue #2017](https://github.com/netease-youdao/LobsterAI/issues/2017) — **New user blocker**: Missing pre-build script execution prevents any local usage. Screenshots show UI completely non-functional. |

**Pattern:** Enterprise deployment scenarios (port conflicts, IM connectors, local runtime setup) dominate community issues, suggesting the project is transitioning from pure developer tool to enterprise infrastructure.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| **🔴 Critical** | #1698 | Gateway port conflict with sibling product — prevents multi-product deployment | **No fix PR**; workaround: uninstall competing product |
| **🔴 Critical** | #2017 | Local runtime completely non-functional without `cfmind` OpenClaw runtime; build script prerequisite undocumented | **No fix PR**; user blocked |
| **🟡 High** | #2015 (merged) | OpenClaw compaction retries and tool result gaps — could cause silent data loss in agent workflows | **Fixed** in #2015 |
| **🟡 High** | #2018 (merged) | Gateway restart on token refresh disrupts active cowork sessions | **Fixed** in #2018 |
| **🟡 High** | #2020 (merged) | Window sizing broken on Windows multi-DPI setups (400×300 instead of 800×600) | **Fixed** in #2020 |
| **🟢 Medium** | #1576 (open, stale) | SSE stream listener race condition — rapid stop/send causes silent message loss | **PR available** since April 8, unmerged |

**Stability assessment:** Today's merges address significant runtime reliability, but **two critical unpatched issues** block enterprise adoption and new user onboarding. The stale SSE race condition PR (#1576) represents a known production risk.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **OpenHuman engine support** | #2016 | **High** | Single-line feature request with no discussion, but "engine" terminology aligns with existing OpenClaw/cfmind architecture; likely internal roadmap item surfacing publicly |
| **Custom model parameters (temperature, thinking, etc.)** | #2019 (merged) | **Shipped** | Already implemented with per-model JSON passthrough |
| **Thinking block display** | #2019 (merged) | **Shipped** | Supports reasoning model UIs |
| **Context window configuration** | #2021 (merged) | **Shipped** | Backend-driven, backward compatible |
| **IM slash commands** | #1573 (stale PR) | **Medium** | Comprehensive implementation ready since April; blocked on review |
| **Skill usage analytics / "Recently Used"** | #1583 (stale PR) | **Medium** | Addresses real auto-routing visibility gap; PR complete |
| **Settings search/filter** | #1557 (stale PR) | **Low-Medium** | Polish feature; PR ready but lower priority |
| **Write tool file cards + split preview** | #1553 (stale PR) | **Medium** | Rich artifact UX; may be superseded by #2022's artifact improvements |

**Prediction:** The project is clearly investing in **enterprise reasoning capabilities** (thinking blocks, context windows, custom params) and **multi-model provider flexibility**. The unmerged #1573 (slash commands) and #1583 (skill analytics) would complete the enterprise feature set but require maintainer bandwidth.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Onboarding cliff** | #2017: "输入不了问题，也建不了任务" — complete functionality loss | Critical |
| **Product ecosystem conflicts** | #1698: Port collision with another NetEase AI product | Critical |
| **Documentation gaps** | #1568: Connector installation unclear; #2017: build script prerequisite missing | High |
| **Platform-specific build failures** | #1555: macOS `sha256sum` vs `shasum` incompatibility | Medium (PR available) |
| **Windows display issues** | #2020: Cross-DPI window sizing | Medium (fixed) |

### Use Cases & Satisfaction Signals

- **Enterprise multi-product deployment**: Frustrated (#1698)
- **Local development/POC**: Blocked (#2017)
- **IM integration (DingTalk)**: Confused but resolvable (#1568)
- **Artifact/HTML preview**: Improving (#2022)

**Overall sentiment:** Users encountering the project hit **sharp edges around environment setup and enterprise coexistence**. Core functionality appears solid once running (evidenced by detailed PRs improving edge cases), but the **activation funnel is leaking heavily**.

---

## 8. Backlog Watch

### Stale PRs Requiring Maintainer Attention (Updated 2026-05-20 but created early April)

| PR | Age | Value | Risk if Unmerged |
|:---|:---|:---|:---|
| **#1576** SSE race condition fix | ~6 weeks | Prevents silent message loss in streaming | Production data corruption |
| **#1573** IM slash commands | ~6 weeks | Major UX upgrade for Telegram/DingTalk/Lark/Discord/QQ/WeChat users | Competitors may offer better chatbot control |
| **#1583** Skill "Recently Used" with usage tracking | ~6 weeks | Critical visibility for auto-routing users | Users cannot optimize skill selection |
| **#1553** Write tool file cards + preview panel | ~6 weeks | Rich artifact interaction | Incomplete artifact UX vs. Cursor/Windsurf |
| **#1557** Settings search/filter | ~6 weeks | Accessibility for complex settings | Settings discoverability pain |
| **#1548** Streaming activity timer | ~6 weeks | Transparency for long-running tasks | User anxiety about hung operations |

### Long-Unanswered Issues

| Issue | Status | Action Needed |
|:---|:---|:---|
| **#1698** Port conflict | Open since April 15 | Architecture decision: configurable ports or process isolation |
| **#2016** OpenHuman engine | Open, no comments | Roadmap clarification or implementation commitment |

**Backlog health:** **Concerning accumulation.** 17 open PRs with many high-value features/fixes stalled since early April, while 7 PRs merged in a single day (May 20) suggests **bursty review patterns** rather than sustained throughput. The project would benefit from triage prioritization of #1576 (stability), #1573 (enterprise UX), and #1583 (analytics).

---

*Digest generated from GitHub activity data for netease-youdao/LobsterAI on 2026-05-21.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-21

## 1. Today's Overview

Moltis shows **steady maintenance activity** with three PRs closed in the past 24 hours and three issues receiving updates, indicating an active development cycle without new feature releases. The project appears focused on **stability and reliability improvements** rather than major feature expansion, with merged fixes addressing process leaks, password synchronization, and memory storage flexibility. Two new enhancement requests were filed today, suggesting growing community interest in expanding provider support and out-of-the-box documentation access. The 2:1 ratio of closed to open issue updates indicates maintainers are keeping pace with incoming work. Overall project health appears **stable and well-maintained** with responsive triage.

---

## 2. Releases

**No new releases** published today. The project remains on its last version with no migration notes required.

---

## 3. Project Progress

Three PRs were **merged/closed today**, all representing concrete engineering improvements:

| PR | Author | Focus | Impact |
|:---|:---|:---|:---|
| [#1026](https://github.com/moltis-org/moltis/pull/1026) | penso | **Vault-auth password atomicity** | Prevents security regressions where vault and auth passwords drift out of sync; blocks dangerous reset flows on sealed vaults |
| [#1009](https://github.com/moltis-org/moltis/pull/1009) | gmoigneu | **Process leak fix in QMD timeout** | Eliminates resource exhaustion from orphaned Node child processes when `run_with_timeout` fires |
| [#1010](https://github.com/moltis-org/moltis/pull/1010) | gmoigneu | **Nested memory subfolders & collection-aware writes** | Unlocks QMD's full directory potential for agent memory organization |

**Key advancement**: The memory subsystem is evolving from flat-file constraints toward **collection-native hierarchical storage**, aligning the write API with QMD's backend capabilities. The vault fix hardens security boundaries for enterprise deployments.

---

## 4. Community Hot Topics

| Item | Heat Signal | Analysis |
|:---|:---|:---|
| [#977](https://github.com/moltis-org/moltis/issues/977) [CLOSED] Browser sandbox Docker failure | 3 comments, resolved | **Infrastructure compatibility** — Docker-in-Docker / LXC nesting remains a friction point for self-hosters; fix validates the sandbox pattern but suggests documentation gaps for Proxmox users |
| [#1028](https://github.com/moltis-org/moltis/issues/1028) OOTB docs access for agents | 1 comment, **just filed** | **Onboarding velocity** — Users want zero-config agent awareness of Moltis's own documentation, reducing hallucination risk and setup time |
| [#1027](https://github.com/moltis-org/moltis/issues/1027) Google Antigravity SDK support | 0 comments, **just filed** | **Provider diversification** — Signals demand beyond current LLM/provider roster; "Antigravity" (likely Gemini-family or hypothetical Google branding) suggests enterprise users evaluating Google cloud AI stacks |

**Underlying needs**: Reduced configuration burden (#1028), broader enterprise cloud compatibility (#1027), and robust containerized deployment (#977).

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix Available |
|:---|:---|:---|:---|
| **Medium** | [#977](https://github.com/moltis-org/moltis/issues/977) Browser sandbox fails in Docker/LXC | **CLOSED** | ✅ Resolved (implied by closure; no explicit PR linked) |
| **Medium** | [#1009](https://github.com/moltis-org/moltis/pull/1009) QMD child process leak on timeout | **FIXED** | ✅ Merged — `kill_on_drop` pattern applied |

**No new critical crashes** reported today. The process leak fix (#1009) addresses a **resource exhaustion vector** that could degrade long-running Moltis instances under memory pressure. The vault password sync fix (#1026) prevents a **security consistency failure** that could lock users out of encrypted data.

---

## 6. Feature Requests & Roadmap Signals

| Request | Likelihood in Next Version | Rationale |
|:---|:---|:---|
| **OOTB Moltis docs access** (#1028) | **High** | Low implementation cost; aligns with "batteries included" UX trend; reduces support burden |
| **Google Antigravity SDK** (#1027) | **Moderate** | Depends on SDK maturity and Google partnership/availability; may require abstraction layer work if API diverges significantly |

**Emerging pattern**: Moltis users want **opinionated defaults** that reduce agent configuration overhead. The docs-access request mirrors patterns seen in Claude Code, Cursor, and other agentic tools that bundle first-party context.

---

## 7. User Feedback Summary

| Theme | Evidence | Sentiment |
|:---|:---|:---|
| **Container deployment friction** | #977 (Docker/LXC/Proxmox nesting) | 😐 Frustrated → relieved (fixed) |
| **Security rigor expected** | #1026's atomic password design | 🙂 Validated — users care about vault integrity |
| **"Just works" expectations** | #1028 (docs OOTB) | 😐 Impatient — setup complexity noted |
| **Provider flexibility demands** | #1027 (Google SDK) | 🤔 Evaluative — exploring alternatives |

**Real pain point**: Self-hosting Moltis in containerized environments requires **platform-specific knowledge** that casual users may lack. The project would benefit from reference Docker Compose stacks for common hypervisors.

---

## 8. Backlog Watch

| Risk | Item | Age | Action Needed |
|:---|:---|:---|:---|
| **Low** | No stale critical issues visible in today's data | — | — |

**Observation**: Today's dataset shows **responsive maintainer engagement** — all closed items resolved within 2 weeks of creation. However, the two enhancement requests filed today (#1027, #1028) have **zero maintainer comments** yet; early triage would signal roadmap openness. No long-unanswered PRs are present in the provided data.

**Recommendation for maintainers**: Acknowledge #1028 quickly — it's a popular "quick win" that competitors likely already offer.

---

*Digest generated from moltis-org/moltis GitHub activity for 2026-05-20/21.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-05-21

## 1. Today's Overview

CoPaw (QwenPaw) shows **high development velocity** with 38 issues and 36 PRs active in the last 24 hours, indicating a mature project with substantial community engagement. The release of v1.1.8.post1 addresses provider expansion and backup functionality, while the 19 open PRs suggest active feature development across multiple fronts. However, **stability concerns are emerging**: multiple critical bugs around the Pet plugin causing crashes, WeChat iLink token expiration failures, and performance degradation with 40+ agents indicate growing pains as the platform scales. The community is actively contributing first-time PRs, signaling healthy adoption, but maintainer bandwidth may be stretched given the volume of unresolved issues.

---

## 2. Releases

### [v1.1.8.post1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.8.post1)

| Change | PR | Author |
|--------|-----|--------|
| docs(install): add backup dir | [#4534](https://github.com/agentscope-ai/QwenPaw/pull/4534) | @xieyxclack |
| feat(provider): add OpenCode Go into opencode via meta.base_url_options | [#4536](https://github.com/agentscope-ai/QwenPaw/pull/4536) | @DICKQI |
| chore(version): bump patch version | — | — |

**Migration Notes:** No breaking changes. OpenCode Go users can now configure via `meta.base_url_options` similar to DashScope pattern. Backup directory documentation added for install workflows.

---

## 3. Project Progress

### Merged/Closed PRs (17 total, key highlights)

| PR | Description | Impact |
|----|-------------|--------|
| [#4536](https://github.com/agentscope-ai/QwenPaw/pull/4536) | OpenCode Go provider support via `meta.base_url_options` | **Provider expansion** — 12 models across two endpoints (Zen/Go) |
| [#4564](https://github.com/agentscope-ai/QwenPaw/pull/4564) | Pet plugin: Windows compatibility, lifecycle UX, bilingual UI | **Stability** — Fixes critical Windows crash issues |
| [#2862](https://github.com/agentscope-ai/QwenPaw/pull/2862) | Feishu streaming typewriter card via CardKit v1 API | **UX enhancement** — Real-time streaming cards with fallback |
| [#4563](https://github.com/agentscope-ai/QwenPaw/pull/4563) | Remove backup host gate (Docker localhost fix) | **Infrastructure** — Fixes [#4535](https://github.com/agentscope-ai/QwenPaw/issues/4535) HTTP 403 on `/backups` |
| [#4574](https://github.com/agentscope-ai/QwenPaw/pull/4574) | Normalize file name handling in message content | **Reliability** — Consistent file metadata processing |
| [#4573](https://github.com/agentscope-ai/QwenPaw/pull/4573) | Fix chatSession infinite loop (displayId/realId alternation) | **Critical fix** — Resolves [#4557](https://github.com/agentscope-ai/QwenPaw/issues/4557) rapid session switching crash |
| [#4570](https://github.com/agentscope-ai/QwenPaw/pull/4570) | Dark mode plan panel title visibility | **UI polish** — Fixes [#4568](https://github.com/agentscope-ai/QwenPaw/issues/4568) |
| [#4571](https://github.com/agentscope-ai/QwenPaw/pull/4571) | Test fixture for provider data isolation | **Quality** — Prevents test pollution |
| [#4298](https://github.com/agentscope-ai/QwenPaw/pull/4298) | Desktop external link handling (file://, http/https) | **Desktop UX** — Fixes [#3816](https://github.com/agentscope-ai/QwenPaw/issues/3816) |
| [#4288](https://github.com/agentscope-ai/QwenPaw/pull/4288) | Assistant file preview improvements | **UX** — Larger images, consistent URL resolution |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| # | Issue | Comments | Status | Underlying Need |
|---|-------|----------|--------|---------------|
| [#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) | WeChat iLink cron push fails: expired `context_token` with no retry; missing logs for image/file send | 13 | 🔴 OPEN | **Enterprise reliability** — Production WeChat integrations need resilient token management and observability |
| [#4496](https://github.com/agentscope-ai/QwenPaw/issues/4496) | AGENTS.md loads built-in template instead of workspace file after 1.1.7 upgrade | 13 | ✅ CLOSED (invalid) | **Configuration integrity** — Users expect workspace files to override defaults; confusion around template resolution order |
| [#4559](https://github.com/agentscope-ai/QwenPaw/issues/4559) | Performance degradation with 40+ agents | 7 | 🔴 OPEN | **Scalability** — UI architecture needs optimization for power users running many agents |
| [#4474](https://github.com/agentscope-ai/QwenPaw/issues/4474) | ChatGPT-5.5 support inquiry | 7 | 🔴 OPEN | **Model currency** — Users want latest OpenAI models; config validation may be too strict |
| [#4535](https://github.com/agentscope-ai/QwenPaw/issues/4535) | `/backups` returns HTTP 403 from localhost | 6 | ✅ CLOSED | **Docker deployment** — Auth middleware too restrictive for container bridge networking |

### Most Active PRs

| # | PR | Focus |
|---|-----|-------|
| [#4576](https://github.com/agentscope-ai/QwenPaw/pull/4576) | WeChat message dedup + infinite retry fix | Directly addresses [#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | Tauri 2.x desktop app support | **Major architectural** — Native desktop wrapper, under review since April |

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| 🔴 **Critical** | [#4541](https://github.com/agentscope-ai/QwenPaw/issues/4541) / [#4575](https://github.com/agentscope-ai/QwenPaw/issues/4575) | Pet plugin crashes main process on first message (ConnectTimeout/KeyboardInterrupt) | **Fixed** in [#4564](https://github.com/agentscope-ai/QwenPaw/pull/4564) |
| 🔴 **Critical** | [#4557](https://github.com/agentscope-ai/QwenPaw/issues/4557) | Rapid session switching causes infinite auto-switch loop | **Fixed** in [#4573](https://github.com/agentscope-ai/QwenPaw/pull/4573) |
| 🟡 **High** | [#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) | WeChat iLink token expiration without retry; silent image/file failures | **PR available**: [#4576](https://github.com/agentscope-ai/QwenPaw/pull/4576) |
| 🟡 **High** | [#4581](https://github.com/agentscope-ai/QwenPaw/issues/4581) | Model switch wipes long-term memory (MEMORY.md) | 🔴 **OPEN** — Data loss risk |
| 🟡 **High** | [#4559](https://github.com/agentscope-ai/QwenPaw/issues/4559) | 40+ agents cause severe UI slowdown | 🔴 **OPEN** — Performance regression |
| 🟡 **High** | [#4572](https://github.com/agentscope-ai/QwenPaw/issues/4572) | Feishu CardKit streaming broken (sequence=0 invalid) | 🔴 **OPEN** — API compliance bug |
| 🟢 **Medium** | [#4497](https://github.com/agentscope-ai/QwenPaw/issues/4497) | Markdown table line breaks (`<br>`) not rendered | 🔴 **OPEN** — 3rd report, user frustrated |
| 🟢 **Medium** | [#4543](https://github.com/agentscope-ai/QwenPaw/issues/4543) | API streaming incomplete on first session initialization | ✅ CLOSED |
| 🟢 **Medium** | [#4542](https://github.com/agentscope-ai/QwenPaw/issues/4542) | `max_tokens=1` breaks connection test on B.AI API | ✅ CLOSED |

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Version | Rationale |
|---------|----------|---------------------------|-----------|
| **Free multimodal auto-routing** (image→vision model, voice→ASR, etc.) | [#4539](https://github.com/agentscope-ai/QwenPaw/issues/4539) | ⭐⭐⭐⭐ High | Strong user demand (👍: 1); competitive parity with Doubao; aligns with provider expansion trend |
| **Coding Mode** (VS Code-like IDE in browser) | [#4578](https://github.com/agentscope-ai/QwenPaw/pull/4578) | ⭐⭐⭐⭐ High | PR already open; major differentiator for developer audience |
| **Browser automation stability** (Playwright priority over CDP) | [#4584](https://github.com/agentscope-ai/QwenPaw/issues/4584) | ⭐⭐⭐ Medium | Pain point for scheduled tasks; requires architectural decision |
| **Lightweight goal mode** (`/goal` commands) | [#4443](https://github.com/agentscope-ai/QwenPaw/pull/4443) | ⭐⭐⭐ Medium | PR open since May 16; session-scoped objectives useful for agent workflows |
| **Tauri 2.x desktop app** | [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | ⭐⭐ Medium | Under review since April; large surface area, may need more iteration |
| **Context token estimation optimization** | [#4463](https://github.com/agentscope-ai/QwenPaw/issues/4463) | ⭐⭐ Medium | Performance-focused; depends on core backend priority |
| **Skill Market + httpx refactor** | [#4518](https://github.com/agentscope-ai/QwenPaw/pull/4518) | ⭐⭐⭐⭐ High | PR open; modernizes skill discovery and installation UX |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Pet plugin instability** | 3 crash reports in 24h ([#4541](httpshttps://github.com/agentscope-ai/QwenPaw/issues/4541), [#4575](https://github.com/agentscope-ai/QwenPaw/issues/4575), [#4554](https://github.com/agentscope-ai/QwenPaw/issues/4554)) | Critical — affects Windows users, offline environments |
| **Memory/data loss on model switch** | [#4581](https://github.com/agentscope-ai/QwenPaw/issues/4581) | High — breaks trust in persistent agent memory |
| **Enterprise channel reliability** | WeChat iLink ([#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477)), Feishu CardKit ([#4572](https://github.com/agentscope-ai/QwenPaw/issues/4572)) | High — production deployments at risk |
| **Scaling limitations** | [#4559](https://github.com/agentscope-ai/QwenPaw/issues/4559) 40+ agents slowdown | Medium — power user ceiling |
| **Configuration confusion** | [#4496](https://github.com/agentscope-ai/QwenPaw/issues/4496) AGENTS.md resolution, [#4430](https://github.com/agentscope-ai/QwenPaw/issues/4430) upgrade data migration | Medium — onboarding friction |

### Positive Signals

- **Strong contributor growth**: Multiple first-time contributors ([#4580](https://github.com/agentscope-ai/QwenPaw/pull/4580), [#4577](https://github.com/agentscope-ai/QwenPaw/pull/4577), [#4578](https://github.com/agentscope-ai/QwenPaw/pull/4578))
- **Active provider ecosystem expansion**: OpenCode Go, model routing requests
- **Desktop experience investment**: Tauri, external links, file previews

---

## 8. Backlog Watch

| Item | Age | Issue/PR | Risk | Action Needed |
|------|-----|----------|------|---------------|
| Tauri 2.x desktop support | ~4 weeks | [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | Stalled major feature; contributor may disengage | Maintainer review/merge decision |
| Context token estimation optimization | ~4 days | [#4463](https://github.com/agentscope-ai/QwenPaw/issues/4463) | Performance debt accumulating | Core team assessment |
| Lightweight goal mode | ~5 days | [#4443](https://github.com/agentscope-ai/QwenPaw/pull/4443) | Feature ready but unmerged | Review for v1.2.0 inclusion |
| Sub-agent MCP/ACP config inheritance | ~3 days | [#4491](https://github.com/agentscope-ai/QwenPaw/issues/4491) | Architecture decision pending | Design doc or maintainer response |
| ChatGPT-5.5 support | ~3 days | [#4474](https://github.com/agentscope-ai/QwenPaw/issues/4474) | User blocked on model adoption | Config validation update or documentation |
| K8s deployment guidance | ~9 weeks | [#1740](https://github.com/agentscope-ai/QwenPaw/issues/1740) | Enterprise adoption barrier | Documentation or helm chart contribution |

---

*Digest generated from GitHub activity on 2026-05-20 to 2026-05-21. All links reference https://github.com/agentscope-ai/QwenPaw.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-05-21

**Repository:** [qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)

---

## 1. Today's Overview

ZeptoClaw exhibits **minimal daily activity** with only one open pull request updated in the past 24 hours and zero issues or releases. The project appears to be in a **stable maintenance phase** rather than active feature development. The sole open PR addresses a critical production bug affecting model provider resolution, suggesting the codebase is mature but still requires surgical fixes for edge cases in multi-provider environments. With no open issues and no community reactions on the active PR, community engagement appears **low to moderate**. Overall project health reads as **stable but quiet**—maintained but not rapidly evolving.

---

## 2. Releases

*No new releases today. No version tags or release notes to report.*

---

## 3. Project Progress

**No merged or closed PRs today.** 

The only active work item is an **open, unmerged fix**:

- **[PR #592](https://github.com/qhkm/zeptoclaw/pull/592)** — `fix(providers): keyword fallback must not claim unconfigured provider` by [Sisuthros](https://github.com/Sisuthros)
  - **Status:** Open since 2026-05-20, awaiting review/merge
  - **Impact:** Fixes production-critical bug where `infer_provider_name_for_model` could resolve to providers not in user's configuration
  - **Technical scope:** Narrows keyword-based fallback logic to respect `available_providers` set

No features advanced to completion today.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|------|----------|----------|
| [PR #592](https://github.com/qhkm/zeptoclaw/pull/592) | 0 comments, 0 reactions | Despite zero visible engagement, this PR addresses a **100% error rate production incident** on NIM-served Photon instances. The silence suggests either: (a) small reviewer pool, (b) confidence in the fix, or (c) limited community visibility into provider-resolution internals. |

**Underlying need:** Users running multi-provider setups (especially NVIDIA NIM + OpenAI model IDs like `openai/gpt-oss-120b`) need **predictable, configuration-bound provider resolution**. The implicit demand is for stricter validation boundaries between model identification and provider activation.

---

## 5. Bugs & Stability

| Severity | Item | Details | Fix Status |
|----------|------|---------|------------|
| **Critical** | [PR #592](https://github.com/qhkm/zeptoclaw/pull/592) | `infer_provider_name_for_model` returns unconfigured providers via keyword fallback; caused **100% error rate** on production NIM/Photon deployment | **Fix proposed, unmerged** |

**Regression pattern:** The bug represents a **configuration boundary violation**—the resolver's fallback logic operated on global keyword mappings without checking against the user's actual `available_providers`. This is a classic "works in dev, breaks in prod" issue where test environments likely had all providers configured.

**Risk:** Unmerged critical fix means other users may hit identical failures with model IDs containing provider-like keywords (e.g., `openai/*`, `anthropic/*`).

---

## 6. Feature Requests & Roadmap Signals

*No explicit feature requests today (zero open issues).*

**Inferred roadmap signals from PR #592:**

| Signal | Likely Priority | Rationale |
|--------|---------------|-----------|
| Stricter provider resolution governance | High | Production incidents drive architectural hardening |
| Runtime configuration validation | Medium | Gap between static keyword maps and dynamic provider sets |
| Observability for model-to-provider resolution | Medium | 100% error rate suggests poor pre-flight diagnostics |

**Prediction:** Next version likely includes provider resolution tightening plus possibly `--strict-provider-resolution` flag or similar opt-in enforcement.

---

## 7. User Feedback Summary

*No direct user feedback in issues/PRs today.*

**Indirect pain points extracted from PR #592:**

| Pain Point | Evidence | Satisfaction Impact |
|------------|----------|---------------------|
| Silent misconfiguration | Error only surfaces at 100% failure rate | **High dissatisfaction** — no graceful degradation |
| Opaque provider selection | Model ID `openai/gpt-oss-120b` resolves unexpectedly | **Confusion** — violates principle of least surprise |
| Multi-provider deployment fragility | NIM + Photon + keyword fallback interaction | **Operational risk** — enterprise blocker |

**Use case affected:** Organizations running **hybrid AI infrastructure** (self-hosted NIM + cloud API providers) with model ID aliases spanning provider namespaces.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [PR #592](https://github.com/qhkm/zeptoclaw/pull/592) | 1 day | **Critical fix unmerged** | Maintainer review and merge; consider expedited patch release |
| *General observation* | — | Zero open issues may indicate healthy codebase **or** low adoption/visibility | Monitor if issue absence reflects satisfaction or underreporting |

**Maintainer attention required:** PR #592 is a **production-critical fix with clear scope and zero merge conflicts**—ideal for fast-track review. Delay risks repeated incidents for users with similar NIM/OpenAI hybrid configurations.

---

*Digest generated from GitHub activity data for 2026-05-21. All links: [github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-21

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 79 total updates in the past 24 hours (29 issues, 50 PRs), though the **merge ratio remains critically poor** — only 3 of 50 PRs were merged/closed versus 47 still open, continuing the pattern noted in #6060 where PRs outpace issues 3:1. The project is in an **intensive v0.8.0 integration phase**, with multiple schema v3 and multi-agent runtime issues closing while new P1 bugs surface in provider compatibility, MCP tooling, and memory systems. Community governance activity is notable with a fresh RFC on work lanes (#6808) and ongoing audit of 153 commits lost to a March bulk revert (#6074). Overall health is **mixed**: active development but concerning merge bottlenecks and accumulating technical debt.

---

## 2. Releases

**No new releases** (0 today; latest release information not provided in dataset).

The project appears to be working toward **v0.8.0** via the `integration/v0.8.0` branch, with multiple merge-blocker issues tracked (#5947, #6805).

---

## 3. Project Progress

### Closed/Issues Accepted Today (10 items)

| Item | Type | Significance |
|------|------|------------|
| [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) | RFC accepted | **Multi-agent UX flow design** — major architecture decision approved by core team vote |
| [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) | Merge blocker closed | **Schema v3 batch migrations** — `CURRENT_SCHEMA_VERSION` bump unblocked |
| [#6272](https://github.com/zeroclaw-labs/zeroclaw/issues/6272) | Feature accepted | **Multi-agent runtime v3** — per-alias workspaces, permissions, shared resources |
| [#6270](https://github.com/zeroclaw-labs/zeroclaw/issues/6270) | Feature accepted | Configurable macro + onboarding for v3 nested configs |
| [#6053](https://github.com/zeroclaw-labs/zeroclaw/issues/6053) | Feature accepted | `config set/init` support for dynamic map entries |
| [#6375](https://github.com/zeroclaw-labs/zeroclaw/issues/6375) | Feature accepted | V3 env-var override mechanism restored |
| [#6273](https://github.com/zeroclaw-labs/zeroclaw/issues/6273) | Feature accepted | Typed-family split for model/TTS providers |
| [#6373](https://github.com/zeroclaw-labs/zeroclaw/issues/6373) | Bug closed | Web search tool fresh-install failure |
| [#5891](https://github.com/zeroclaw-labs/zeroclaw/issues/5891) | Tracker closed | Multi-agent v1 coordination tracker |
| [#6734](https://github.com/zeroclaw-labs/zeroclaw/issues/6734) | Bug closed | Qwen 3.6 tool-call leak into Matrix replies |

**Key advancement**: The **multi-agent architecture** (RFC #5890 → tracker #5891 → runtime #6272) has achieved full design approval and is now in implementation phase. Schema v3 migration infrastructure is complete.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | 🔥 Analysis |
|------|------|----------|-------------|
| 1 | [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) DeepSeek-V4 API incompatibility | **11 comments**, 4 👍 | **Critical provider fragmentation issue**. DeepSeek's thinking-mode API format breaks ZeroClaw's OpenAI-compatible provider abstraction. Underlying need: **robust provider adapter layer** that handles non-standard reasoning formats without per-provider hacks. |
| 2 | [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) Multi-agent UX RFC | 9 comments | Governance process working — full RFC lifecycle completed with core team vote. Signals community demand for **orchestrated agent swarms** with clear UX. |
| 3 | [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) Schema v3 migrations | 7 comments | **Infrastructure anxiety** — "no partial landings" policy reflects trauma from the c3ff635 bulk revert. Need for safer migration tooling. |

### Emerging Governance Discussion
- [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — New RFC proposing **work lanes, board automation, and label cleanup** to address the PR merge bottleneck. Directly responds to #6060's diagnosis of maintainer throughput crisis.

---

## 5. Bugs & Stability

### P1 (Critical) — Workflow Blocked or Severe Degradation

| Bug | Status | Fix PR? | Details |
|-----|--------|---------|---------|
| [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) DeepSeek-V4 API format break | 🔴 OPEN, in-progress | No | Thinking mode causes runtime errors; affects Pro + Flash |
| [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) MCP `tool_filter_groups` no-op | 🔴 OPEN, accepted | No | **Two bugs**: prefix-check failure + no deferred_loading integration |
| [#6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721) `tool_search` hangs 120s in webhook mode | 🔴 OPEN, accepted | No | **Silent failure cascade**: deferred_loading requires tool_search, but tool_search not in `default_auto_approve()` → auto-deny after timeout |
| [#6771](https://github.com/zeroclaw-labs/zeroclaw/issues/6771) Multiline heredocs blocked by SecurityPolicy | 🔴 OPEN, accepted | **[#6816](https://github.com/zeroclaw-labs/zeroclaw/pull/6816)** | **S1 — workflow blocked**; ZeroClaw cannot execute its own prescribed PR-creation skill |
| [#6801](https://github.com/zeroclaw-labs/zeroclaw/issues/6801) `purge_namespace` deletes wrong column | 🔴 OPEN, in-progress | **[#6777](https://github.com/zeroclaw-labs/zeroclaw/pull/6777)** | Deletes by `category` not `namespace` — data integrity risk |

### P2 (High) — Significant Degradation

| Bug | Status | Fix PR? | Details |
|-----|--------|---------|---------|
| [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) Channels supervisor crashloop | 🔴 OPEN | No | All channels `enabled=false` → restart loop every ~2s |
| [#6722](https://github.com/zeroclaw-labs/zeroclaw/issues/6722) `MemoryConfig.rerank_*` dead code | 🔴 OPEN, accepted | No | Scaffolded but unread — config schema drift |
| [#6720](https://github.com/zeroclaw-labs/zeroclaw/issues/6720) `context_aware_tools` dead code | 🔴 OPEN, accepted | No | Same pattern — documented but unimplemented |
| [#6723](https://github.com/zeroclaw-labs/zeroclaw/issues/6723) OpenAI provider ignores `timeout_secs` | 🔴 OPEN, accepted | No | Hardcoded 120s vs. user-configured values |

### Stability Assessment
**Concerning pattern**: Multiple "scaffolded but unread" config fields (#6720, #6722, #6723) suggest **rushed v3 schema design** with incomplete implementation. The MCP tooling surface has **three independent P1/P2 bugs** (#6699, #6721, #6724), indicating deferred loading feature was shipped without adequate integration testing.

---

## 6. Feature Requests & Roadmap Signals

### Likely in v0.8.0 (merge blockers / integration branch)

| Feature | Evidence | Confidence |
|---------|----------|------------|
| **Multi-agent runtime v3** | #5890 accepted, #6272 accepted, #5891 closed | **High** — core initiative |
| **Schema v3 with env-var overrides** | #5947 closed, #6375 closed | **High** — infrastructure complete |
| **Per-alias agent workspaces** | #6272 | **High** |
| **Strict tool parsing mode** | **[#6675](https://github.com/zeroclaw-labs/zeroclaw/pull/6675)** open | Medium |

### User-Requested (Post-v0.8.0?)

| Feature | Request | Signal Strength |
|---------|---------|-----------------|
| **Skills-based tool replacement** | [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) "prefer lighter ZeroClaw" — remove ad-hoc integrations for generic skills | Strong — aligns with "lighter" positioning |
| **Telegram custom API endpoint** | [#6807](https://github.com/zeroclaw-labs/zeroclaw/issues/6807) | Niche — self-hosted TG API users |
| **Feature/support matrix** | [#6810](https://github.com/zeroclaw-labs/zeroclaw/issues/6810) | Governance/docs need |
| **Work lanes / automation** | [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) RFC | Process improvement |

### Predicted Next Version Priorities
Based on issue clustering: **provider adapter robustness** (thinking-mode formats), **MCP tooling hardening**, and **config schema validation** (eliminate dead fields).

---

## 7. User Feedback Summary

### 😤 Pain Points

| Issue | User Impact | Root Cause |
|-------|-------------|------------|
| DeepSeek-V4 broken | Cannot use popular cheap model | Provider abstraction too brittle for reasoning formats |
| Web search fails on fresh install | First-run experience degraded | DuckDuckGo integration / network assumptions |
| SecurityPolicy blocks heredocs | Cannot use documented skills | Overly aggressive command parsing |
| 153 commits lost to revert | Features/bugfixes disappeared | Emergency bulk rollback without recovery path |
| PR merge bottleneck | Contributions stall | #6060: 286 open PRs, maintainer capacity crisis |

### 😊 Positive Signals
- **Multi-agent UX RFC passed** — community governance functioning
- **WhatsApp protocol parity** restored ([PR #6706](https://github.com/zeroclaw-labs/zeroclaw/pull/6706))
- **Skills management API** in progress ([PR #6700](https://github.com/zeroclaw-labs/zeroclaw/pull/6700)) — web dashboard for enable/disable

### Use Case Tensions
- **Power users** (custom providers, self-hosted): want flexibility → Telegram custom endpoints, env-var overrides
- **Casual users**: want reliability → fresh install web search, onboarding validation ([PR #6811](https://github.com/zeroclaw-labs/zeroclaw/pull/6811))
- **Enterprise/ops**: want auditability → commit recovery, work lanes, feature matrix

---

## 8. Backlog Watch

### Critical Items Needing Maintainer Action

| Item | Age | Risk | Why Stuck? |
|------|-----|------|-----------|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) Audit 153 lost commits | 27 days | **Data loss / feature regression** | No assignee; requires git archaeology + risk assessment |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) "Prefer lighter ZeroClaw" | 24 days | Architecture direction | `needs-maintainer-review`, `blocked` — strategic decision needed on skills vs. built-ins |
| [#6060](https://github.com/zeroclaw-labs/zeroclaw/issues/6060) 1.0 Refactor Tracking | 27 days | **Project health** | 286 open PRs; no merge policy enacted; author proposes pinning tracker |
| [#6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009) OTel tool spans | 29 days | Observability gap | Large PR, needs rebase/review |
| [#6512](https://github.com/zeroclaw-labs/zeroclaw/pull/6512) Email channel fixes | 14 days | Channel reliability | `needs-author-action` — may need maintainer ping |

### Merge Ratio Red Flag
With **47 open PRs updated today vs. 3 merged/closed**, the project continues the pattern #6060 identified. The new RFC #6808 on work lanes is a direct response, but **implementation of process changes is itself blocked on maintainer bandwidth**.

---

*Digest generated from 29 issues and 50 PRs updated 2026-05-20 to 2026-05-21.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*