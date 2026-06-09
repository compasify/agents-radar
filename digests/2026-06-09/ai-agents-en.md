# OpenClaw Ecosystem Digest 2026-06-09

> Issues: 500 | PRs: 494 | Projects covered: 13 | Generated: 2026-06-09 00:24 UTC

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

# OpenClaw Project Digest — 2026-06-09

## 1. Today's Overview

OpenClaw shows **extremely high velocity** with 500 issues and 494 PRs active in the last 24 hours, indicating a large, bustling open-source community. The project released two beta versions (v2026.6.5-beta.5 and beta.3) focusing on channel-specific polish and MCP tooling robustness. However, the **open-to-closed ratio is concerning**: 89% of issues remain open (447/500) and 67% of PRs are unmerged (332/494), suggesting either a backlog accumulation or maintainer bandwidth constraints. The community is actively engaged around session state reliability, multi-channel adapter quality, and security hardening.

---

## 2. Releases

### [v2026.6.5-beta.5](https://github.com/openclaw/openclaw/releases/tag/v2026.6.5-beta.5)
| Aspect | Detail |
|--------|--------|
| **Focus** | Channel output sanitization, MCP tool result coercion |
| **Key Changes** | • QQBot now strips `<thinking>` reasoning scaffolding before delivery ([#89913](https://github.com/openclaw/openclaw/issues/89913), [#90132](https://github.com/openclaw/openclaw/issues/90132)) — prevents raw model internals from leaking to users<br>• MCP tool results now coerce `resource_link`, `resource`, `audio`, malformed image, and future content types |
| **Breaking Changes** | None noted |
| **Migration Notes** | No action required; QQBot behavior change is automatic |

### [v2026.6.5-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.6.5-beta.3)
Same highlights as beta.5 (likely beta.3 was promoted to beta.5 with additional MCP coercion coverage).

---

## 3. Project Progress

### Merged/Closed PRs (Selected)

| PR | Author | Status | Impact |
|----|--------|--------|--------|
| [#90666](https://github.com/openclaw/openclaw/pull/90666) — fix(cron): cancel active cron task runs | ai-hpc | **CLOSED** | Cron task lifecycle management; allows aborting stuck cron runs |
| [#79386](https://github.com/openclaw/openclaw/pull/79386) — discard poisoned resume id after FailoverError | draix | **CLOSED** | Breaks watchdog cascade loops in failover scenarios |
| [#90507](https://github.com/openclaw/openclaw/pull/90507) — fix(doctor): preserve codex context metadata | sahibzada-allahyar | **CLOSED** | Migration fix for `openai-codex` → `openai` provider folding |
| [#91496](https://github.com/openclaw/openclaw/pull/91496) — chore: bump Codex app-server to 0.137.0 | RomneyDa | **CLOSED** | Dependency refresh with protocol updates |
| [#91365](https://github.com/openclaw/openclaw/pull/91365) — build(deps): bump android-deps group | dependabot[bot] | **CLOSED** | Routine Android dependency maintenance |

### Notable Open PRs Advancing

| PR | Author | Status | Feature |
|----|--------|--------|---------|
| [#88245](https://github.com/openclaw/openclaw/pull/88245) — refactor(whatsapp): introduce inbound message contexts | mcaxtr | Ready for maintainer | Major WhatsApp architecture refactor (XL size) |
| [#83600](https://github.com/openclaw/openclaw/pull/83600) — feat(whatsapp): support list reply actions | rc125 | Ready for maintainer | Interactive WhatsApp business flows |
| [#85104](https://github.com/openclaw/openclaw/pull/85104) — feat: fast talks auto mode | alexph-dev | Needs proof | Dynamic priority tiering for voice conversations |
| [#91308](https://github.com/openclaw/openclaw/pull/91308) — feat(xai): add realtime voice provider | jsi-tross | Waiting on author | xAI Grok realtime voice integration |
| [#88815](https://github.com/openclaw/openclaw/pull/88815) — feat: channel echo / session pinning | anagnorisis2peripeteia | Waiting on author | Cross-channel session mirroring |

---

## 4. Community Hot Topics

### Most Active Issues (by Comment Count)

| Issue | Comments | Reactions | Core Need |
|-------|----------|-----------|-----------|
| [#48788](https://github.com/openclaw/openclaw/issues/48788) — Centralized filename encoding utility | 18 | 0 | **Cross-channel internationalization** — Feishu Chinese filenames are broken; community wants Shift-JIS, EUC-KR, GB18030 support in a unified Content-Disposition handler |
| [#32473](https://github.com/openclaw/openclaw/issues/32473) — Control UI requires device identity/HTTPS | 17 | 4 | **Self-hosted deployment friction** — VPS users (Hostinger, Docker) blocked by secure context requirements; authentication regression |
| [#90083](https://github.com/openclaw/openclaw/issues/90083) — OpenAI ChatGPT Responses transport fails for gpt-5.4/5.5 | 15 | 3 | **Cutting-edge model support** — `invalid_provider_content_type` on latest OpenAI models post-migration; blocking production upgrades |
| [#50090](https://github.com/openclaw/openclaw/issues/50090) — Community Skill Development & ClawHub | 15 | 2 | **Ecosystem growth** — Gap between "write a SKILL.md" promise and discoverable, installable, maintained community skills |
| [#32296](https://github.com/openclaw/openclaw/issues/32296) — Agent replies to previous message | 14 | 1 | **Session correctness** — Fundamental conversation alignment bug; agent responds to stale context |

**Underlying Pattern**: The community is straining against OpenClaw's **multi-channel adapter complexity** and **session state reliability**. The most engaged issues span encoding, auth, model compatibility, and conversation correctness — all core to "it just works" user experience.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Summary |
|----------|-------|--------|---------|---------|
| **P1** | [#90083](https://github.com/openclaw/openclaw/issues/90083) — gpt-5.4/5.5 transport failure | Open, needs live repro | ❌ No | Blocks latest OpenAI model adoption; migration regression |
| **P1** | [#32296](https://github.com/openclaw/openclaw/issues/32296) — Session context confusion | Open, needs maintainer review | ❌ No | Agent replies to wrong message; fundamental session bug |
| **P1** | [#48003](https://github.com/openclaw/openclaw/issues/48003) — Steer mode doesn't inject mid-turn | Open, linked PR open | ✅ [#48003-linked](https://github.com/openclaw/openclaw/issues/48003) | `messages.queue.mode: "steer"` broken since March 3 |
| **P1** | [#51396](https://github.com/openclaw/openclaw/issues/51396) — clearUnboundScopes strips operator scopes | Open, needs security review | ❌ No | Auth regression breaking backend clients |
| **P1** | [#41744](https://github.com/openclaw/openclaw/issues/41744) — Feishu image tool result lost | Open, linked PR open | ✅ Yes | Media attachment drop before outbound delivery |
| **P1** | [#43367](https://github.com/openclaw/openclaw/issues/43367) — Multi-agent orchestration unstable | Open, needs live repro | ❌ No | Concurrent agent overwrites, session-lock failures |
| **P1** | [#49876](https://github.com/openclaw/openclaw/issues/49876) — Cron hallucinates on tool failure | Open, needs security review | ❌ No | **Trust/safety**: LLM fabricates output instead of failing |
| P2 | [#32473](https://github.com/openclaw/openclaw/issues/32473) — Control UI HTTPS/localhost requirement | Open, needs security review | ❌ No | Self-hosting regression |
| P2 | [#45740](https://github.com/openclaw/openclaw/issues/45740) — gh-issues skill prompt injection | Open, linked PR open | ✅ Yes | Untrusted issue body → sub-agent prompt; security boundary |
| P2 | [#51429](https://github.com/openclaw/openclaw/issues/51429) — Hardcoded path `/Users/wangtao` | Open, source repro | ❌ No | Developer artifact shipped to production |

**Regression Cluster**: Multiple issues tagged `regression` suggest **quality control gaps in release process** — particularly around session state, auth, and model transport layers.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Likelihood in Next Version | Rationale |
|---------|-------|---------------------------|-----------|
| **Per-skill model routing** | [#43260](https://github.com/openclaw/openclaw/issues/43260) | High | Clear architectural gap; SKIL.md frontmatter extension is natural fit |
| **Skill priority configuration** | [#50199](https://github.com/openclaw/openclaw/issues/50199) | Medium | Community skill ecosystem maturation need; overlaps with #50090 |
| **YAML config format** | [#45758](https://github.com/openclaw/openclaw/issues/45758) | Medium | DevOps alignment; low implementation cost |
| **MathJax/LaTeX in Control UI** | [#42840](https://github.com/openclaw/openclaw/issues/42840) | Medium-High | 5 upvotes; scientific/educational use case growth |
| **Per-agent cost budgets** | [#42475](https://github.com/openclaw/openclaw/issues/42475) | Medium | Gateway-level enforcement; operational necessity at scale |
| **Built-in skill security scanning** | [#45031](https://github.com/openclaw/openclaw/issues/45031) | Low-Medium | Security-conscious but requires external integration (AgentShield) |
| **Multi-session architecture (RFC)** | [#48874](https://github.com/openclaw/openclaw/issues/48874) | Low | Architectural RFC; long-term design discussion |
| **Channel echo / session pinning** | [#88815](https://github.com/openclaw/openclaw/pull/88815) | High | PR already open (XL size); cross-channel UX demand |

---

## 7. User Feedback Summary

### Pain Points (High Frequency)

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Session state reliability** | #32296, #48003, #48573, #47975, #50165, #44993 | 🔴 Critical |
| **Multi-channel adapter bugs** | #48788, #41744, #88929, #87326, #44905 | 🔴 Critical |
| **Self-hosting / deployment friction** | #32473, #45765, #51429 | 🟡 High |
| **Auth/security regressions** | #32473, #51396, #45740, #44905 | 🟡 High |
| **Cron/scheduled job reliability** | #85888, #49876, #44993, #50248 | 🟡 High |
| **Documentation drift** | #48920 — "Live Docs are ahead of release" | 🟢 Medium |

### Use Cases Emerging
- **Business messaging** (WhatsApp list replies, Feishu cards) — enterprise adoption signal
- **Voice/realtime** — fast talks, xAI realtime provider PRs indicate platform expansion beyond text
- **Multi-agent coding batches** — #43367, #78441 show developer tooling use case
- **Autonomous operations** — cron, heartbeat, memory management for "always-on" agents

### Satisfaction Signals
- Active community skill proposals (#50090, #43260, #50199)
- Enthusiastic reaction to QoL fixes (QQBot thinking-stripping)
- Deep engagement with architectural RFCs

### Dissatisfaction Signals
- "Memory management is in chaos" — #43747 (colleagues see 3 different behaviors)
- "Someone hardcoded their workspace" — #51429 (trust/quality perception hit)
- Stale issues accumulating `clawsweeper:no-new-fix-pr` labels — maintainer bandwidth concern

---

## 8. Backlog Watch

### Critical Issues Needing Maintainer Attention (>3 months old, high impact, no fix PR)

| Issue | Age | Blockers | Risk |
|-------|-----|----------|------|
| [#48788](https://github.com/openclaw/openclaw/issues/48788) — Centralized filename encoding | 84 days | needs-product-decision, needs-maintainer-review | Data loss for international users; fragmented per-channel fixes |
| [#32473](https://github.com/openclaw/openclaw/issues/32473) — Control UI secure context | 98 days | needs-security-review, needs-product-decision | Self-hosting barrier; 4 upvotes |
| [#50090](https://github.com/openclaw/openclaw/issues/50090) — ClawHub ecosystem | 82 days | needs-product-decision | Platform growth bottleneck |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) — Cost budgets | 91 days | needs-product-decision | Operational necessity for production deployments |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) — Multi-agent orchestration | 90 days | needs-live-repro, needs-product-decision | Core architecture for advanced use cases |

### PRs Ready for Review But Unmerged

| PR | Age | Risk Flags |
|----|-----|-----------|
| [#88245](https://github.com/openclaw/openclaw/pull/88245) — WhatsApp contexts | 10 days | 🚨 compatibility, 🚨 message-delivery |
| [#83600](https://github.com/openclaw/openclaw/pull/83600) — WhatsApp list replies | 22 days | 🚨 compatibility, 🚨 message-delivery, 🚨 security-boundary |
| [#78441](https://github.com/openclaw/openclaw/pull/78441) — Subagent toolsAllow | 34 days | 🚨 compatibility, 🚨 session-state, 🚨 security-boundary |
| [#89040](https://github.com/openclaw/openclaw/pull/89040) — Event-loop stall fix | 8 days | 🚨 session-state |

**Recommendation**: The project would benefit from a **maintainer sprint focused on session state and multi-channel adapter stability** — these two areas dominate P1 issues and user complaints. The high open/close ratio suggests either triage backlog or deliberate cautious merging; clarity on review priorities would help contributor retention.

---

*Digest generated from GitHub activity data for openclaw/openclaw on 2026-06-09.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source Personal AI Assistant Ecosystem
**Date:** 2026-06-09 | **Analyst:** Senior AI Agent Ecosystem Analyst

---

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is experiencing **intense fragmentation and parallel evolution**, with at least 10 active projects pursuing similar core architectures—multi-channel adapters, MCP tool integration, and session-based agent orchestration—yet diverging sharply in target users and maturity. **OpenClaw remains the velocity leader** by an order of magnitude (500 issues/PRs daily vs. 45–100 for others), but exhibits classic hypergrowth pathologies: maintainer bandwidth gaps, regression clusters, and accumulating technical debt. The field is consolidating around three distinct strata: **enterprise-grade platforms** (IronClaw, ZeroClaw, Hermes Agent), **geographically-localized forks** (CoPaw/QwenPaw for China, LobsterAI as NetEase's commercial wrapper), and **embedded/hardware-native variants** (PicoClaw for RISC-V, NanoBot for privacy-tiered workflows). A critical inflection point is emerging around **Reborn-style architectural migrations** (IronClaw) versus **incremental hardening** (most others), with session state reliability and security boundaries universally identified as the highest-risk technical debt.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score | Assessment |
|:---|:---|:---|:---|:---|:---|
| **OpenClaw** | 500 | 494 | v2026.6.5-beta.5, beta.3 | 🟡 **Stressed** | Extreme velocity, 89% issue backlog, 67% unmerged PRs; maintainer bandwidth critical constraint |
| **NanoBot** | 8 | 37 | None | 🟢 **Healthy** | Balanced throughput (15 closed/22 open PRs); transcription subsystem refactor completing |
| **Hermes Agent** | 50 | 50 | None (v0.16.0 current) | 🟡 **Stressed Growth** | 90% open rate; unmerged P1 security fix; Desktop/Docker regression cluster post-release |
| **PicoClaw** | 3 | 18 | Nightly only | 🟡 **Constrained** | Defensive hardening focus; RISC-V release blocker 23 days stale; low issue volume masks platform risk |
| **NanoClaw** | 1 | 3 | None | 🟢 **Stable** | Reactive maintenance mode; security hardening active; WhatsApp v2 regression unaddressed |
| **IronClaw** | 33 | 50 | None (0.29.1 pending) | 🟡 **Transition Risk** | Reborn architecture cutover; 24 PRs merged but 2 production regressions open; release PR stalled 3+ weeks |
| **LobsterAI** | 0 | 18 (1 open) | None | 🟢 **Controlled** | Internal team-driven; zero issues unusual; backlog cleanup sprint completed; limited external engagement |
| **TinyClaw** | 0 | 1 | None | 🟢 **Dormant** | Single DX PR open; zero issues; stable but potentially disengaged |
| **CoPaw (QwenPaw)** | 49 | 45 | None (v1.1.10) | 🟡 **Caution-Progressing** | AgentScope 2.0 migration uncertainty; enterprise channel reliability gaps; contributor review bottleneck |
| **ZeroClaw** | 50 | 50 | None (v0.8.0-beta-1) | 🟡 **Constrained** | 22% merge rate; 2× S0 bugs open; v0.9.0 security architecture gating release |
| **NullClaw** | 0 | 0 | — | ⚫ **Inactive** | No activity |
| **Moltis** | 0 | 0 | — | ⚫ **Inactive** | No activity |
| **ZeptoClaw** | 0 | 0 | — | ⚫ **Inactive** | No activity |

---

## 3. OpenClaw's Position

### Advantages vs. Peers

| Dimension | OpenClaw | Peer Comparison |
|:---|:---|:---|
| **Scale** | 500 issues/PRs daily | 10–100× higher than nearest active competitor (ZeroClaw, CoPaw at ~50) |
| **Channel breadth** | QQ, Feishu, WhatsApp, Telegram, Discord, etc. | Matched only by Hermes Agent (15+); exceeds most by 3–5× |
| **Release cadence** | Two betas in 24 hours | Most projects: none; IronClaw: stalled major release |
| **Ecosystem infrastructure** | ClawHub proposed (#50090), SKIL.md format | Hermes Agent has more mature skill marketplace; others lack equivalent |
| **MCP integration depth** | Tool result coercion, multiple content types | NanoBot, ZeroClaw comparable; IronClaw building ProductWorkflow abstraction |

### Technical Approach Differences

- **OpenClaw**: Channel-adapter-centric architecture with heavy Chinese-market platform investment (QQ, Feishu); session state as persistent queue with failover watchdogs; SKIL.md declarative skill format
- **Hermes Agent**: Plugin-centric with desktop-first UX (Tauri/Electron); cron as standalone daemon; Langfuse observability integration
- **IronClaw**: "Reborn" event-sourced architecture with ProductWorkflow routing; OpenAI-compatible API layer; NEAR blockchain identity integration
- **ZeroClaw**: Security-first with pluggable providers, OIDC, TOTP gating; MemoryStrategy decoupling; explicit S0/S1 severity classification
- **CoPaw**: AgentScope 2.0 backend migration; Qwen model optimization; WeChat/WeCom enterprise depth

### Community Size Comparison

OpenClaw's contributor surface is **qualitatively larger but potentially thinner**—high volume with 89% open issue rate suggests many drive-by contributors versus Hermes Agent's more focused 50-item daily with established plugin authors. IronClaw and ZeroClaw show comparable per-capita engagement with more enterprise-directed discussion. LobsterAI demonstrates that **commercial backing (NetEase)** can match velocity without community breadth.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Session state reliability** | OpenClaw, NanoBot, Hermes Agent, CoPaw, ZeroClaw | Context confusion (#32296 OpenClaw), orphan tool results (#4219 NanoBot), memory compaction crashes (#5019 CoPaw), trim_history cascade (#7403 ZeroClaw) |
| **Multi-channel adapter robustness** | OpenClaw, NanoBot, Hermes Agent, PicoClaw, CoPaw, ZeroClaw | Encoding (Feishu #48788 OpenClaw), message splitting (Telegram #4250 NanoBot), session token expiry (WeChat #4223 NanoBot, iLink #4477 CoPaw), location handling (#3052 PicoClaw) |
| **Security hardening** | NanoClaw, ZeroClaw, IronClaw, CoPaw, OpenClaw | Egress lockdown (#2713 NanoClaw), OIDC/pluggable providers (#7141/#7142 ZeroClaw), webhook binding (#2714 NanoClaw), audit sinks (#3959 IronClaw), skill protection (#27997 Hermes) |
| **MCP ecosystem completion** | OpenClaw, NanoBot, ZeroClaw, CoPaw | Tool result coercion (OpenClaw beta.5), resources/prompts not just tools (#4467 ZeroClaw), server lifecycle (#5014 CoPaw), `tool_filter_groups` no-op (#6699 ZeroClaw) |
| **Voice/realtime expansion** | OpenClaw, NanoBot | xAI Grok realtime (#91308 OpenClaw), fast talks auto mode (#85104 OpenClaw), transcription provider diversity (4 PRs NanoBot) |
| **Enterprise auth/SSO** | IronClaw, ZeroClaw, Hermes Agent, CoPaw | OAuth PKCE HA (#4175 IronClaw), NEAR wallet (#4181 IronClaw), Discord allowlist (#42362 Hermes), Teams gateway (#9512 Hermes) |
| **Observability/ops** | Hermes Agent, ZeroClaw, OpenClaw, LobsterAI | Cron false-healthy status (#36845 Hermes), structured logging (#3050 PicoClaw, #3051), gateway status UI (#2123 LobsterAI), Langfuse gaps (#42306 Hermes) |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Extreme velocity + Chinese platform depth | Technical builders, CN market | Channel-adapter mesh, SKIL.md, queue-based sessions |
| **Hermes Agent** | Desktop-native experience + plugin maturity | Power users, small teams | Tauri desktop, plugin marketplace, standalone cron |
| **IronClaw** | Reborn event-sourced + blockchain identity | Enterprise, NEAR ecosystem | ProductWorkflow, OpenAI-compatible API, multi-tenancy |
| **ZeroClaw** | Security architecture + local-first readiness | Privacy-conscious, enterprise teams | Pluggable security providers, MemoryStrategy decoupling, explicit severity tiers |
| **CoPaw (QwenPaw)** | AgentScope integration + Chinese localization | CN developers, Qwen users | AgentScope 2.0 migration, WeChat enterprise depth |
| **NanoBot** | Transcription subsystem + privacy-tiered workflows | Voice-heavy users, local/cloud hybrid | Unified STT config, per-conversation model override |
| **PicoClaw** | RISC-V hardware alignment | Embedded, edge, Sipeed hardware | Go-based, minimal footprint, hardware-native |
| **LobsterAI** | Commercial polish + OpenClaw gateway wrapper | End users, non-technical | Electron shell, backup/restore, auth simplification |
| **NanoClaw** | Container isolation + security defaults | DevOps, container-first | Docker-internal networking, egress lockdown |

**Critical architectural fork**: OpenClaw, Hermes, CoPaw pursue **broad channel coverage with adapter complexity**; IronClaw and ZeroClaw are investing in **abstraction layers** (ProductWorkflow, MemoryStrategy) to manage that complexity; NanoClaw and PicoClaw are **narrowing scope** to specific deployment targets (containers, RISC-V).

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (High Velocity, High Risk)

| Project | Velocity | Merge Rate | Risk Profile |
|:---|:---|:---|:---|
| **OpenClaw** | Extreme (1000+ items/day touch) | 33% PR merge | Regression clusters, maintainer burnout |
| **IronClaw** | Very high (83 items/day) | 48% PR merge | Reborn cutover production incidents |
| **ZeroClaw** | Very high (100 items/day) | 22% PR merge | S0 bugs, review bottleneck |

### Tier 2: Active Consolidation (Moderate Velocity, Stabilizing)

| Project | Velocity | Merge Rate | Risk Profile |
|:---|:---|:---|:---|
| **CoPaw** | High (94 items/day) | 51% PR merge | Migration uncertainty, review backlog |
| **Hermes Agent** | High (100 items/day) | 10% PR merge | Desktop regression cluster, unmerged security |
| **NanoBot** | Moderate (45 items/day) | 41% PR merge | Healthy; transcription refactor completing |

### Tier 3: Maintenance Mode (Low Velocity, Reactive)

| Project | Velocity | Merge Rate | Risk Profile |
|:---|:---|:---|:---|
| **PicoClaw** | Low (21 items/day) | 50% PR merge | RISC-V platform abandonment risk |
| **NanoClaw** | Minimal (4 items/day) | 67% PR merge | WhatsApp v2 breakage, low visibility |
| **LobsterAI** | Moderate (18 items/day) | 95% PR merge | Internal team only, no community resilience |

### Tier 4: Dormant/Inactive

| Project | Status |
|:---|:---|
| **TinyClaw** | Single PR, zero issues; possible disengagement |
| **NullClaw, Moltis, ZeptoClaw** | No activity |

---

## 7. Trend Signals

| Trend | Evidence | Value for Developers |
|:---|:---|:---|
| **"Reborn" architectural migrations** | IronClaw #3283, CoPaw #4727 (AgentScope 2.0) | Event-sourced/product-workflow patterns are emerging as the answer to session state chaos; early adoption of these abstractions may reduce future migration pain |
| **Security as first-class architecture** | ZeroClaw v0.9.0 OIDC/pluggable providers (#7141/#7142), NanoClaw egress lockdown (#2713), OpenClaw auth regressions (#51396) | Enterprise deployment is no longer "add auth later"—pluggable security provider interfaces are becoming table stakes |
| **MCP depth over breadth** | ZeroClaw #4467 (resources/prompts), #6699 (tool_filter_groups no-op), OpenClaw coercion expansion | MCP integration is moving from "list tools" to full spec compliance including resources, prompts, and proper lifecycle management |
| **Per-conversation/per-skill model routing** | NanoBot #4253, OpenClaw #43260, Hermes #42447 | Cost/performance optimization is pushing beyond global model selection to dynamic, context-aware routing |
| **Computer-use / desktop automation** | ZeroClaw #6909 (RFC), OpenClaw channel echo (#88815) | The next competitive frontier after chat is GUI manipulation; security confirmation tiers (#7155 ZeroClaw) are prerequisite infrastructure |
| **Transcription as standard input** | NanoBot 4 PRs, OpenClaw xAI realtime (#91308), fast talks (#85104) | Voice is becoming as fundamental as text; unified STT configuration across WebUI/desktop is pattern to emulate |
| **Cron/scheduled execution reliability** | Hermes standalone daemon (#41363), OpenClaw hallucination on failure (#49876), ZeroClaw duplicate launches (#6037) | "Always-on" agent use cases are exposing cron as a critical subsystem, not an afterthought |
| **i18n and market localization as technical requirement** | CoPaw's CN advantage, OpenClaw filename encoding (#48788), IronClaw hardcoded English (#4554) | Global deployment requires encoding, locale, and platform-specific auth flows to be designed in, not patched |

---

**Strategic Recommendation for AI Agent Developers**: The ecosystem is in a **pre-consolidation phase** with no clear winner. OpenClaw offers maximum feature velocity but requires tolerance for instability; ZeroClaw and IronClaw are building more sustainable enterprise architectures but with higher immediate complexity; NanoBot and PicoClaw represent **focused bets** on specific deployment modalities. For production deployments, prioritize projects with explicit security architecture (ZeroClaw, IronClaw Reborn) over those with channel breadth alone. Monitor the Reborn/AgentScope 2.0 migrations as indicators of which architectural patterns will dominate the next 12–18 months.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-09

**Repository:** [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. Today's Overview

NanoBot showed **strong development velocity** on 2026-06-08 with 45 total items updated (8 issues, 37 PRs), indicating an active maintenance and feature expansion phase. The project is in a **consolidation period** with zero new releases, focusing instead on merging transcription infrastructure improvements, security hardening, and WebUI polish. Closed items outpaced new opens in issues (4:4), while PRs show healthy review throughput with 15 merged/closed against 22 open. The community is particularly engaged around multi-model workflows and channel reliability, suggesting NanoBot is maturing from experimental tool to daily-driver assistant for technical users.

---

## 2. Releases

**No new releases** (v0.x.x remains current).

---

## 3. Project Progress

### Merged/Closed PRs (15 total — key highlights)

| PR | Description | Significance |
|:---|:---|:---|
| [#4217](https://github.com/HKUDS/nanobot/pull/4217) | `feat(providers): add extra_query config for OpenAI-compatible providers` | **Infrastructure flexibility** — enables Azure-style API gateways, enterprise adoption unblocker |
| [#4175](https://github.com/HKUDS/nanobot/pull/4175) | `feat(transcription): add Xiaomi MiMo ASR provider` | **Transcription ecosystem expansion** — third STT backend added this cycle |
| [#4224](https://github.com/HKUDS/nanobot/pull/4224) | `feat(transcription): add AssemblyAI as transcription provider` | **Conservative/low-latency STT option** for cost-sensitive deployments |
| [#4113](https://github.com/HKUDS/nanobot/pull/4113) | `feat(transcription): configurable STT model + OpenRouter transcription provider` | **Unified credential routing** — reduces config duplication across interfaces |
| [#4232](https://github.com/HKUDS/nanobot/pull/4232) | `feat(transcription): add shared voice input support` | **Cross-platform voice UX** — WebUI + desktop now use top-level transcription config |
| [#4235](https://github.com/HKUDS/nanobot/pull/4235) | `feat(webui): show nanobot version in Settings Overview` | **Operational visibility** — closes user request #4233 |
| [#4219](https://github.com/HKUDS/nanobot/pull/4219) | `fix(session): drop orphan tool results before trimming history` | **Reliability** — prevents context corruption in long sessions |
| [#4221](https://github.com/HKUDS/nanobot/pull/4221) | `fix(exec): block relative symlink workspace escapes` | **Security** — sandbox escape vulnerability patched |

**Thematic progress:** The project is completing a **major transcription subsystem refactor** (4 merged PRs) that centralizes voice input configuration and expands provider choice. Simultaneously, security hardening continues with symlink traversal fixes and SSRF validation improvements.

---

## 4. Community Hot Topics

### Most Active Discussions

| Item | Activity | Underlying Need |
|:---|:---|:---|
| [#4253](https://github.com/HKUDS/nanobot/issues/4253) — *support overriding model per conversation* | Open, 1 comment, created 2026-06-08 | **Dynamic model selection** — users want privacy/cost/latency tradeoffs *per task*, not globally. Indicates NanoBot is used for both sensitive (local) and routine (cloud) workflows |
| [#4204](https://github.com/HKUDS/nanobot/issues/4204) / [#4217](https://github.com/HKUDS/nanobot/pull/4217) — *extra_query for OpenAI-compatible providers* | Closed, 1 comment | **Enterprise gateway compatibility** — Azure/OpenAI hybrid deployments need query parameter injection |
| [#4170](https://github.com/HKUDS/nanobot/pull/4170) — *configurable IMAP post-actions for processed messages* | Open, highest-comment PR | **Agent-managed mailbox automation** — users deploying NanoBot as *primary email operator* need inbox hygiene without manual intervention |

**Analysis:** The community is pushing NanoBot toward **multi-tenant, multi-model operational deployments** — from personal assistant to infrastructure component. The IMAP PR signals emerging "agent-as-service" use cases.

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix Status |
|:---|:---|:---|:---|
| **High** | [#4250](https://github.com/HKUDS/nanobot/issues/4250) | `split_message` breaks fenced code blocks across Telegram chunks — renders broken HTML, degrades code-sharing UX | **Fix PR open:** [#4257](https://github.com/HKUDS/nanobot/pull/4257) |
| **High** | [#4242](https://github.com/HKUDS/nanobot/issues/4242) | `dream.enabled=false` still injects full chat history via stale cursor — unexpected token consumption, potential privacy leak | **Fix PR open:** [#4256](https://github.com/HKUDS/nanobot/pull/4256) |
| **Medium** | [#4223](https://github.com/HKUDS/nanobot/pull/4223) | WeChat channel: expired session token causes permanent 60-minute pause loop without recovery | **Fix PR open** — reloads state after pause expiry |
| **Medium** | [#4074](https://github.com/HKUDS/nanobot/issues/4074) | MCP HTTP/SSE SSRF validation inconsistency — loopback connection attempted before rejection | Closed (security fix merged) |

**Stability assessment:** Two high-severity rendering/memory bugs have active fixes pending merge. The WeChat channel reliability issue affects long-running deployments. Overall risk is **moderate** with responsive fix velocity.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Per-conversation model override** | [#4253](https://github.com/HKUDS/nanobot/issues/4253) | **High** | Clear user need, aligns with existing preset system, minimal architectural change |
| **WebUI version badge + update notifications** | [#4255](https://github.com/HKUDS/nanobot/pull/4255) | **Very High** | PR already open, closes #4233, pattern borrowed from established projects |
| **Cross-agent messaging bus** | [#3992](https://github.com/HKUDS/nanobot/pull/3992) | **Medium** | Large architectural PR (open since May 24), needs review bandwidth |
| **Context-pressure-gated microcompaction** | [#4238](https://github.com/HKUDS/nanobot/pull/4238) | **Medium** | Refactors AgentRunner internals — significant but improves cost/performance |
| **File/image upload in chat input** | [#4251](https://github.com/HKUDS/nanobot/issues/4251) | **Medium** | Common request (PDF summarization, image analysis), may depend on RAG infrastructure |

---

## 7. User Feedback Summary

### Pain Points
- **Configuration opacity:** Users struggle to discover running version ([#4233](https://github.com/HKUDS/nanobot/issues/4233)) — addressed by #4235/#4255
- **Model rigidity:** Global model setting forces context-switching friction for privacy-conscious users ([#4253](https://github.com/HKUDS/nanobot/issues/4253))
- **Channel reliability:** WeChat session management and Telegram message formatting break production workflows ([#4223](https://github.com/HKUDS/nanobot/pull/4223), [#4250](https://github.com/HKUDS/nanobot/issues/4250))

### Use Cases Emerging
| Pattern | Evidence |
|:---|:---|
| **Privacy-tiered workflows** | Local LLM for sensitive tasks, cloud for speed ([#4253](https://github.com/HKUDS/nanobot/issues/4253)) |
| **Document-heavy automation** | PDF upload requests ([#4251](https://github.com/HKUDS/nanobot/issues/4251)), IMAP inbox management ([#4170](https://github.com/HKUDS/nanobot/pull/4170)) |
| **Multi-modal channel deployment** | Voice input standardization across WebUI/desktop, transcription provider diversity |

### Satisfaction Signals
- Responsive maintainer merge velocity (same-day closure for #4217, #4235)
- Proactive security patching (SSRF, symlink escapes)

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|:---|:---|:---|:---|
| [#3992](https://github.com/HKUDS/nanobot/pull/3992) — *cross-agent messaging* | 16 days open | **Architecture review** | Maintainer decision on multi-instance scope; large test surface |
| [#4193](https://github.com/HKUDS/nanobot/pull/4193) — *memory lifecycle harness* | 5 days open | **Test infrastructure** | Review for test coverage expansion |
| [#4053](https://github.com/HKUDS/nanobot/pull/4053) — *read-only roots in write paths* | 11 days open | **Security completeness** | May overlap with #4221; needs merge coordination |
| [#3982](https://github.com/HKUDS/nanobot/pull/3982), [#3983](https://github.com/HKUDS/nanobot/pull/3983) — *test harnesses* | 16 days open | **Quality infrastructure** | Bulk test PRs may need prioritized review to prevent staleness |

**Recommendation:** The cross-agent messaging PR (#3992) represents significant architectural expansion and should receive explicit maintainer triage to avoid contributor fatigue. Test infrastructure PRs (#3982, #3983, #4193) are low-risk, high-value for project health.

---

*Digest generated from GitHub activity 2026-06-08. All links verified against HKUDS/nanobot repository.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-09

## 1. Today's Overview

Hermes Agent saw **high activity** with 50 issues and 50 PRs updated in the last 24 hours, yielding a 9:1 open-to-closed ratio that indicates a growing backlog. **Zero new releases** suggest the project is in a stabilization phase between versions. The community is actively stress-testing v0.16.0 (released 2026-06-05), with particular intensity around gateway reliability, desktop UX friction, and security hardening. Cross-cutting concerns include session management integrity, plugin observability gaps, and platform-specific Docker/auth issues. Maintainer bandwidth appears stretched given the volume of unreviewed PRs and unanswered P2 bugs.

---

## 2. Releases

**No new releases** — v0.16.0 (2026-06-05) remains current.

---

## 3. Project Progress

### Merged/Closed PRs (5 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#41372](https://github.com/NousResearch/hermes-agent/pull/41372) | alaamohanad169-ship-it | Fix: Prevent `hermes model` wizard from overwriting `model.base_url` when adding providers | **Stability** — eliminates config corruption during provider onboarding |
| [#40882](https://github.com/NousResearch/hermes-agent/pull/40882) | alaamohanad169-ship-it | Same fix as #41372 (duplicate/parallel PR) | Config safety |
| [#41363](https://github.com/NousResearch/hermes-agent/pull/41363) | alaamohanad169-ship-it | **Standalone cron daemon** (`hermes cron daemon`) | **Feature** — enables cron on headless servers/Windows without gateway |
| [#41167](https://github.com/NousResearch/hermes-agent/pull/41167) | alaamohanad169-ship-it | Same standalone cron feature (duplicate/parallel PR) | Deployment flexibility |
| [#42308](https://github.com/NousResearch/hermes-agent/pull/42308) | ruangraung | Fix Telegram MarkdownV2 fallback + progress edit finalize flag | **Reliability** — closes [#41955](https://github.com/NousResearch/hermes-agent/issues/41955), [#41732](https://github.com/NousResearch/hermes-agent/issues/41732) security/UX regressions |

**Notable advancement**: The standalone cron daemon addresses a long-standing architectural limitation where cron depended on gateway lifecycle. This unblocks enterprise/headless deployments.

---

## 4. Community Hot Topics

### Most Discussed Issues

| Issue | Comments | 👍 | Core Tension |
|:---|:---|:---|:---|
| [#27997](https://github.com/NousResearch/hermes-agent/issues/27997) — Declarative Skill Protection Policy | 7 | 0 | **Technical debt vs. safety**: Scattered skill protection rules across 6+ files create inconsistent enforcement; community wants centralized, auditable policy before broader skill marketplace |
| [#34457](https://github.com/NousResearch/hermes-agent/issues/34457) — s6-log lock collision in gateway+dashboard shared volumes | 6 | 3 | **Docker production reliability**: Official stack fails under shared-volume setups; affects SQLite state sync use case |
| [#30399](https://github.com/NousResearch/hermes-agent/issues/30399) — Matrix gateway missing `mautrix[encryption]` in Docker | 6 | 3 | **Container image completeness**: Encryption-required platforms broken by default; read-only rootfs blocks workaround |
| [#9512](https://github.com/NousResearch/hermes-agent/issues/9512) — Microsoft Teams gateway support | 6 | 0 | **Enterprise platform gap**: Teams is conspicuously absent among 15+ supported platforms; blocks Microsoft-centric orgs |

### Underlying Needs Analysis

- **#27997** signals maturation pressure: as third-party skills proliferate, the project needs governance infrastructure (policy-as-code) before a trust/safety incident
- **#34457 + #30399** reveal Docker image maintenance as a **critical path bottleneck** — platform-specific dependencies are inconsistently packaged
- **#9512** represents **enterprise sales blocker**; Teams integration is table-stakes for Fortune 500 deployments

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Risk |
|:---|:---|:---|:---|:---|
| **P2** | [#34457](https://github.com/NousResearch/hermes-agent/issues/34457) — s6-log infinite crash loop | Open | ❌ No | **Production outage**: Gateway+dashboard stack unusable with shared volumes |
| **P2** | [#30399](https://github.com/NousResearch/hermes-agent/issues/30399) — Matrix gateway Docker broken | Open | ❌ No | **Platform regression**: Complete feature unavailability in containerized deploys |
| **P2** | [#36845](https://github.com/NousResearch/hermes-agent/issues/36845) — Cron timeout masked as `last_status=ok` | Open | ❌ No | **Silent automation failure**: Production jobs appear healthy when broken |
| **P2** | [#42376](https://github.com/NousResearch/hermes-agent/issues/42376) — macOS 26.5.1 `launchctl bootstrap` broken by plist | Open | ❌ No | **macOS compatibility**: Gateway service installation fails on latest OS |
| **P2** | [#42362](https://github.com/NousResearch/hermes-agent/issues/42362) — Discord auth dead-end without allowlist | Open | ❌ No | **Security/UX trap**: Users can invoke but never complete slash commands |
| **P2** | [#42405](https://github.com/NousResearch/hermes-agent/issues/42405) — Memory capacity → silent hang | Open | ❌ No | **Agent liveness**: No user response when memory consolidation fails |
| **P1** | [#41446](https://github.com/NousResearch/hermes-agent/pull/41446) — tirith SIGSEGV security fix | **Open PR** | ✅ [#41446](https://github.com/NousResearch/hermes-agent/pull/41446) | **Security**: Signal-killed sandbox binary bypassed safety checks |
| **P3** | [#41898](https://github.com/NousResearch/hermes-agent/issues/41898) — NVIDIA NIM response flash/disappear | Open | ❌ No | **Desktop UX**: Provider-specific rendering regression |
| **P3** | [#42256](https://github.com/NousResearch/hermes-agent/issues/42256) — Excel paste inserts tabs in composer | Open | ❌ No | **Polish**: Contenteditable sanitization gap |
| **P3** | [#42409](https://github.com/NousResearch/hermes-agent/issues/42409) — Epoch timestamps in Artifacts view | Open | ❌ No | **Data integrity**: Seconds passed as milliseconds |

**Critical pattern**: 6 open P2 bugs with **zero fix PRs** indicates either maintainer capacity constraint or complexity blocking rapid resolution. The [#41446](https://github.com/NousResearch/hermes-agent/pull/41446) security fix is unmerged despite P1 severity.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **Declarative Skill Protection Policy** | [#27997](https://github.com/NousResearch/hermes-agent/issues/27997) | Medium-High | Safety-critical; blocks skill ecosystem scaling; has detailed technical proposal |
| **Microsoft Teams Gateway** | [#9512](https://github.com/NousResearch/hermes-agent/issues/9512) | Medium | Enterprise demand; high implementation complexity (Graph API, bot framework) |
| **Outlook/Graph API Skill** | [#25979](https://github.com/NousResearch/hermes-agent/issues/25979) | **High** | Author has working production implementation; mirrors existing Google Workspace skill |
| **Per-entry `reasoning_effort` in fallback chain** | [#42447](https://github.com/NousResearch/hermes-agent/pull/42447) | **High** | PR already open; addresses clear operational need for tiered model costs |
| **Cross-profile session sidebar** | [#38357](https://github.com/NousResearch/hermes-agent/issues/38357) | Medium | Desktop UX improvement; moderate complexity |
| **Gateway attachment persistence** | [#41979](https://github.com/NousResearch/hermes-agent/issues/41979) | Medium | Clear gap vs. documented behavior; affects 15+ platforms |
| **Default sampling params for custom providers** | [#41988](https://github.com/NousResearch/hermes-agent/issues/41988) | Medium | Local/self-hosted deployment blocker; small surface area |

**Predicted v0.17.0 themes**: Plugin session propagation ([#42416](https://github.com/NousResearch/hermes-agent/pull/42416), [#42451](https://github.com/NousResearch/hermes-agent/pull/42451)), API server multi-tenancy ([#42460](https://github.com/NousResearch/hermes-agent/pull/42460), [#42459](https://github.com/NousResearch/hermes-agent/pull/42459)), and reasoning_effort granularity.

---

## 7. User Feedback Summary

### Pain Points (verbatim themes)

| Category | Evidence | Severity |
|:---|:---|:---|
| **Config fragility** | "wizard overwrote model.base_url" (resolved), OpenRouter auth header missing ([#42130](https://github.com/NousResearch/hermes-agent/issues/42130)), custom provider sampling params ignored ([#41988](https://github.com/NousResearch/hermes-agent/issues/41988)) | High |
| **Desktop state loss** | Prompts discarded on navigation ([#42401](https://github.com/NousResearch/hermes-agent/issues/42401)), Excel paste mangled ([#42256](https://github.com/NousResearch/hermes-agent/issues/42256)), session delete resurrected for gateway sessions ([#42422](https://github.com/NousResearch/hermes-agent/issues/42422)) | High |
| **Docker image gaps** | Matrix encryption missing, s6-log crashes, read-only rootfs blocks workarounds | Critical for container-first users |
| **Observability blind spots** | Langfuse missing token counts ([#42306](https://github.com/NousResearch/hermes-agent/issues/42306)), cron false-healthy status | Production trust erosion |
| **Platform auth edge cases** | Discord allowlist dead-ends, OpenAI Codex OAuth pool limits ([#42102](https://github.com/NousResearch/hermes-agent/issues/42102)) | Moderate |

### Use Cases Emerging

- **Multi-profile orchestration**: Users running "orchestrator + specialist" profiles need cross-visibility ([#38357](https://github.com/NousResearch/hermes-agent/issues/38357))
- **Decision-making partner in groups**: Telegram clarify UX optimization for mobile ([#40259](https://github.com/NousResearch/hermes-agent/issues/40259))
- **Email→Discord approval workflows**: Enterprise routing flexibility ([#42439](https://github.com/NousResearch/hermes-agent/pull/42439))

### Satisfaction/Dissatisfaction

- **Positive**: Standalone cron daemon finally unblocks Windows/headless; community skill contributions (Outlook, Windows env diagnosis)
- **Negative**: v0.16.0 Desktop feels "rushed" — multiple epoch/date bugs, paste issues, state loss; gateway security regressions ([#41955](https://github.com/NousResearch/hermes-agent/issues/41955)) required rapid post-release patches

---

## 8. Backlog Watch

### Long-Unanswered Critical Items

| Issue/PR | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#27997](https://github.com/NousResearch/hermes-agent/issues/27997) Skill Protection Policy | 22 days | **Safety incident precursor** | Maintainer RFC response; assign security label |
| [#9512](https://github.com/NousResearch/hermes-agent/issues/9512) Teams Gateway | 56 days | Enterprise revenue blocker | Product prioritization decision |
| [#4581](https://github.com/NousResearch/hermes-agent/issues/4581) `read_file` raw content option | 68 days | Developer UX friction | Small surface area; good first issue? |
| [#41446](https://github.com/NousResearch/hermes-agent/pull/41446) tirith SIGSEGV fix | 2 days (PR) | **Unmerged P1 security** | Immediate review/merge |
| [#34457](https://github.com/NousResearch/hermes-agent/issues/34457) s6-log crash | 11 days | Production stability | Docker maintainer assignment |
| [#30399](https://github.com/NousResearch/hermes-agent/issues/30399) Matrix Docker | 18 days | Platform completeness | Image build pipeline fix |

### Stalled PRs Needing Attention

| PR | Blocker |
|:---|:---|
| [#39639](https://github.com/NousResearch/hermes-agent/pull/39639) Desktop Enter-to-send fix | Core UX bug; 4 days old, unreviewed |
| [#35677](https://github.com/NousResearch/hermes-agent/pull/35677) TUI historical sessions | 9 days old; completes half-implemented feature |
| [#42444](https://github.com/NousResearch/hermes-agent/pull/42444) "Ryan/photon fix" | Vague title/description; needs author clarification |

---

**Overall Health Assessment**: 🟡 **Stressed Growth**

Hermes Agent demonstrates strong community momentum (50 issues/PRs daily) but exhibits classic signs of rapid scaling without proportional maintainer bandwidth. The 90% open rate on daily activity, unmerged P1 security fix, and cluster of Docker/Desktop regressions in a fresh release suggest **quality assurance and triage processes need reinforcement** before v0.17.0.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-09

## 1. Today's Overview

PicoClaw shows **high development velocity** with 18 PRs updated in 24 hours (9 merged/closed, 9 open), indicating active code refinement ahead of the v0.2.9 release cycle. The project released a nightly build (`v0.2.9-nightly.20260608.875cf4a2`) but remains in pre-release stabilization. Community activity is moderate with 3 issues updated, though one critical RISC-V compatibility bug has been stale for 23 days without resolution. The dominant theme today is **defensive code hardening**—a sustained effort to eliminate panic vectors through type assertion checks and proper error handling across channels, tools, and agent core.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| [v0.2.9-nightly.20260608.875cf4a2](https://github.com/sipeed/picoclaw/compare/v0.2.9...main) | Nightly | Automated build; **unstable**. Full changelog compares against v0.2.9 tag. No breaking changes documented; use with caution in production. |

**Migration Note:** No migration required for nightly testers; however, the [agent loop reload fix](https://github.com/sipeed/picoclaw/pull/2904) (still open) may warrant waiting for next stable if you rely on hot-reload functionality.

---

## 3. Project Progress

### Merged/Closed PRs (9 items)

| PR | Author | Summary | Impact |
|----|--------|---------|--------|
| [#3062](https://github.com/sipeed/picoclaw/pull/3062) | trufae | Fix health check always returning not ready | **Reliability** — Corrects false-negative readiness signals for orchestrators |
| [#3058](https://github.com/sipeed/picoclaw/pull/3058) | chengzhichao-xydt | Add `ok` check for type assertion in `isAllowedFirstHopHost` | Hardening — Prevents silent failure in web fetch allowlist |
| [#3057](https://github.com/sipeed/picoclaw/pull/3057) | chengzhichao-xydt | Add `ok` checks in subagent/spawn tools | Hardening — Eliminates panic risk in tool argument parsing |
| [#3056](https://github.com/sipeed/picoclaw/pull/3056) | chengzhichao-xydt | Add `ok` checks to 7 `Tool*` helpers in `base.go` | Hardening — Defensive context value retrieval |
| [#3055](https://github.com/sipeed/picoclaw/pull/3055) | chengzhichao-xydt | Handle `os.Getwd` error in `NewContextBuilder` | Hardening — Graceful degradation when CWD unavailable |
| [#3052](https://github.com/sipeed/picoclaw/pull/3052) | wzg-gie | Handle Telegram location messages | **Feature fix** — Location pins now convert to text and reach agent pipeline |
| [#3018](https://github.com/sipeed/picoclaw/pull/3018) | chengzhichao-xydt | Batch fix: LINE channel + evolution store type assertions + `os.Getwd` | Hardening — Addresses same patterns as later PRs, merged early |
| [#3051](https://github.com/sipeed/picoclaw/pull/3051) | chengzhichao-xydt | Use `%w` for error wrapping in channels and MCP | **Observability** — Enables `errors.Is`/`errors.As` for callers |
| [#3050](https://github.com/sipeed/picoclaw/pull/3050) | chengzhichao-xydt | Replace `log.Printf`/`fmt.Printf` with structured logger | **Observability** — Unifies logging infrastructure, aids production monitoring |

**Key Advancement:** The [Telegram location fix](https://github.com/sipeed/picoclaw/pull/3052) closes [Issue #3049](https://github.com/sipeed/picoclaw/issues/3049), resolving a complete message-type blackout for a major channel.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|------|----------|----------|
| [#2887](https://github.com/sipeed/picoclaw/issues/2887) — RISC-V .deb non-functional with OpenAI | 9 comments, stale since May 17 | **Highest engagement, zero resolution.** Underlying need: Sipeed's hardware identity is RISC-V-centric (Maix series); this breakage undermines core value proposition. Users need either static binaries, better cross-compilation docs, or CI coverage for `riscv64` |
| [#3015](https://github.com/sipeed/picoclaw/issues/3015) — QQ channel timeout on Windows | 2 comments, fresh (June 6) | Platform-specific gateway auth failure; suggests QQ's token endpoint has Windows-specific network stack or firewall interaction issues |
| [#2904](https://github.com/sipeed/picoclaw/pull/2904) — Agent loop reload and panic cleanup | Open since May 20, no comments | **Silent but critical.** Fixes goroutine leaks and panic recovery in core agent lifecycle; lack of maintainer review despite complexity suggests bandwidth constraint |

**Community Signal:** The RISC-V issue's stagnation despite high engagement indicates a **platform support gap** that risks alienating PicoClaw's hardware-native audience.

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| 🔴 **Critical** | [#2887](https://github.com/sipeed/picoclaw/issues/2887) — RISC-V release completely non-functional with OpenAI models | Open, 23 days stale | **None** — No PR linked |
| 🟡 **High** | [#3015](https://github.com/sipeed/picoclaw/issues/3015) — QQ gateway token timeout on Windows | Open, 2 days | **None identified** |
| 🟢 **Medium** | [#3049](https://github.com/sipeed/picoclaw/issues/3049) — Telegram location messages ignored | **Closed** | [#3052](https://github.com/sipeed/picoclaw/pull/3052) merged |
| 🟢 **Medium** | [#3062](https://github.com/sipeed/picoclaw/pull/3062) — Health check permanently "not ready" | **Closed** | Self-contained fix merged |
| 🟢 **Low (panic risk)** | Multiple type assertion panics across LINE, evolution store, tools, webfetch | **6 PRs merged today** | [#3053](https://github.com/sipeed/picoclaw/pull/3053)-[#3058](https://github.com/sipeed/picoclaw/pull/3058), [#3018](https://github.com/sipeed/picoclaw/pull/3018) |

**Stability Assessment:** Today's merge wave eliminates ~10 panic vectors, significantly improving robustness. However, the **unfixed RISC-V breakage** remains a release blocker for v0.2.9 stable.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in v0.2.9+ |
|--------|--------|----------------------|
| **DeltaChat gateway** | [#3063](https://github.com/sipeed/picoclaw/pull/3063) — Open PR by trufae | High — New channel adapter, aligns with multi-channel strategy |
| **Windows GUI launcher polish** | [#3061](https://github.com/sipeed/picoclaw/pull/3061) — Hide console flashes | Medium — Follow-up to #2654, indicates sustained Windows desktop investment |
| **Matrix identity parsing fix** | [#3045](https://github.com/sipeed/picoclaw/pull/3045) — `allow_from` colon handling | High — Small fix, fixes #3044, blocked on review |
| **Structured logging completion** | [#3050](https://github.com/sipeed/picoclaw/pull/3050) merged | **Done** — Foundation for future observability features |

**Prediction:** DeltaChat support and Matrix identity fixes are likely v0.2.9 inclusions. The Windows launcher work suggests longer-term GUI mode aspirations beyond CLI-first design.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **RISC-V users completely blocked** | [#2887](https://github.com/sipeed/picoclaw/issues/2887) — "No compiler on-site", `.deb` non-functional | 🔴 Critical — Core platform abandonment risk |
| **Windows desktop experience rough** | [#3015](https://github.com/sipeed/picoclaw/issues/3015) gateway issues + [#3061](https://github.com/sipeed/picoclaw/pull/3061) console flashes | 🟡 Moderate — Workable but unpolished |
| **Telegram location messages silently dropped** | [#3049](https://github.com/sipeed/picoclaw/issues/3049) | 🟢 Resolved — User confirmed no logs, complete blackout |
| **Error introspection difficult** | [#3051](https://github.com/sipeed/picoclaw/pull/3051) motivation — `%v` wrapping breaks `errors.Is` | 🟢 Improving — Merged fix enables better debugging |

**Satisfaction Pattern:** Users appreciate multi-channel breadth (QQ, Telegram, LINE, Matrix, now DeltaChat) but report **platform-specific fragility** and **opaque failures**. The logging infrastructure improvements address a root cause of debuggability complaints.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#2887](https://github.com/sipeed/picoclaw/issues/2887) — RISC-V .deb failure | 23 days | 🔴 **Release blocker** — Hardware-native platform broken; high comment count with no maintainer response | Assign to core maintainer; need RISC-V CI runner or manual validation; consider shipping static binary alternative |
| [#2904](https://github.com/sipeed/picoclaw/pull/2904) — Agent loop reload/panic cleanup | 20 days | 🟡 **Stability risk** — Core agent lifecycle fix; goroutine leak and panic recovery | Code review by agent subsystem owner; complex but well-scoped |
| [#3063](https://github.com/sipeed/picoclaw/pull/3063) — DeltaChat gateway | 1 day | 🟢 Low risk — Feature addition | Standard review queue |
| [#3045](https://github.com/sipeed/picoclaw/pull/3045) — Matrix `allow_from` fix | 2 days | 🟢 Low risk — Small bugfix with linked issue | Quick review; merge-ready |

**Maintainer Attention Required:** The RISC-V issue demands **immediate triage** given Sipeed's hardware brand alignment. The agent reload PR (#2904) is technically complex and has sat unreviewed for 20 days despite touching critical path code.

---

*Digest generated from GitHub activity 2026-06-08 to 2026-06-09. All links point to `https://github.com/sipeed/picoclaw`.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-09

## 1. Today's Overview

NanoClaw shows **moderate maintenance activity** with 3 PRs and 1 issue updated in the past 24 hours, though no new releases. The project appears focused on **security hardening** and **container infrastructure fixes** rather than feature expansion. Two PRs were closed (one merged security feature, one likely rejected template PR), while one substantial security fix remains open for review. The single active issue reveals a **critical functional gap in WhatsApp media handling** in v2, suggesting container volume mounting architecture needs attention. Overall project health is **stable but reactive**—addressing security debt and operational bugs without forward-looking roadmap visibility.

---

## 2. Releases

*No new releases today.*

---

## 3. Project Progress

### Merged/Closed PRs

| PR | Status | Description | Link |
|---|---|---|---|
| #2713 | **CLOSED** (likely merged) | **Egress lockdown (opt-in)**: Adds Docker `--internal` network isolation per agent container, forcing all outbound traffic through OneCLI gateway proxy. Off by default for backward compatibility. | [nanocoai/nanoclaw#2713](https://github.com/nanocoai/nanoclaw/pull/2713) |
| #2712 | **CLOSED** | Template/placeholder PR following contribution guidelines; no substantive changes. Appears to have been closed without merge. | [nanocoai/nanoclaw#2712](https://github.com/nanocoai/nanoclaw/pull/2712) |

**Security infrastructure advanced** with opt-in network sandboxing. The egress lockdown addresses a fundamental isolation gap—previously agents had unrestricted internet access. However, the "off by default" posture suggests cautious rollout due to potential breakage with user workflows requiring direct outbound connectivity.

---

## 4. Community Hot Topics

### Most Active Discussion: Security Fix Bundle (#2714)
- **Status**: OPEN | **Author**: JorellDacasin | **Updated**: 2026-06-08
- **Link**: [nanocoai/nanoclaw#2714](https://github.com/nanocoai/nanoclaw/pull/2714)

**Four bundled security fixes:**
1. **Webhook server binding**: Default to `127.0.0.1` (was `0.0.0.0`), with `WEBHOOK_BIND_HOST` override
2. **Sender approval IDs**: Replace `Math.random()` with `crypto.randomUUID()`—mitigates timing/prediction attacks
3. *(two additional fixes implied but truncated in data)*

**Underlying need**: Community is actively **auditing and hardening** NanoClaw's security posture. The rapid sequential security PRs (#2713, #2714) suggest either external security review, proactive hardening push, or response to undisclosed vulnerabilities. The `Math.random()` fix indicates attention to **cryptographic hygiene at implementation detail level**.

### Critical Operational Issue: WhatsApp Media Unreachability (#2715)
- **Status**: OPEN | **Author**: jon-ruth | **Zero engagement** (0 comments, 0 reactions)
- **Link**: [nanocoai/nanoclaw#2715](https://github.com/nanocoai/nanoclaw/issues/2715)

**Underlying need**: **v2 container architecture has a volume mounting regression**—attachments land on host filesystem but agent containers receive paths to non-existent `/workspace/attachments/` directories. This breaks a **core messaging use case** (media-rich WhatsApp interactions) and indicates insufficient integration testing for multi-channel containerized deployments.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Available? |
|---|---|---|---|
| **🔴 HIGH** | [#2715](https://github.com/nanocoai/nanoclaw/issues/2715) | WhatsApp media completely unreachable by agents in v2—broken volume mount path | ❌ No PR; needs immediate maintainer triage |
| **🟡 MEDIUM** | [#2714](https://github.com/nanocoai/nanoclaw/pull/2714) (partial) | `Math.random()` for security-sensitive approval IDs—predictable, exploitable | ✅ Fix in open PR, unmerged |
| **🟡 MEDIUM** | [#2714](https://github.com/nanocoai/nanoclaw/pull/2714) (partial) | Webhook server defaults to `0.0.0.0`—exposure risk in shared/multi-tenant environments | ✅ Fix in open PR, unmerged |

**Stability assessment**: The WhatsApp media bug is a **regression in v2's container orchestration**—likely introduced when refactoring data directory handling. The zero community engagement (0 comments since creation 2026-06-08) suggests either low WhatsApp user volume or poor issue visibility.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Version |
|---|---|---|
| **Network egress controls as default-on** | #2713 implementation pattern | Medium — requires migration path and documentation |
| **Container volume mount standardization** | #2715 root cause | **High** — blocking core functionality, affects v2 architecture |
| **Security audit completion** | Concentration of security PRs | High — appears to be active initiative |
| **Webhook configuration flexibility** | `WEBHOOK_BIND_HOST` env var pattern | Medium — establishes configurable binding precedent |

**No explicit feature requests** in today's data. The project appears in **maintenance/security mode** rather than feature expansion.

---

## 7. User Feedback Summary

### Explicit Pain Points
| Source | Pain Point | Use Case Impact |
|---|---|---|
| [#2715](https://github.com/nanocoai/nanoclaw/issues/2715) | Agent cannot process any WhatsApp media (images, documents, audio) | **Broken**: Customer support, document processing, multimodal agent workflows via WhatsApp |
| — | *(no additional user feedback in data)* | — |

### Inferred Satisfaction/Dissatisfaction
- **Dissatisfied**: WhatsApp users on v2 (complete feature breakage)
- **Cautiously positive**: Security-conscious operators (egress lockdown available, auth fixes pending)
- **Unknown**: General v2 adoption sentiment—no release notes or community discussion visible

**Critical gap**: The WhatsApp issue has **zero community engagement**—no "+1"s, no workarounds shared, no maintainer response. This either indicates:
- Very small WhatsApp user base, or
- Issue discovery/distribution problems (users may abandon rather than report)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [#2715](https://github.com/nanocoai/nanoclaw/issues/2715) WhatsApp media unreachable | 1 day (new but **critical**) | 🔴 **Escalate** — core channel broken in v2 | Maintainer triage; likely needs `DATA_DIR` mount fix in docker-compose or agent startup |
| [#2714](https://github.com/nanocoai/nanoclaw/pull/2714) Security fix bundle | 1 day | 🟡 Review — multiple security improvements pending merge | Code review; consider splitting if scope too broad for single PR |
| — | — | — | — |

**No long-unanswered items** in today's data, but [#2715](https://github.com/nanocoai/nanoclaw/issues/2715) requires **immediate attention** to prevent v2 WhatsApp adoption churn. The security PR [#2714](https://github.com/nanocoai/nanoclaw/pull/2714) should be prioritized given the project's apparent security focus.

---

*Digest generated from NanoClaw GitHub activity 2026-06-08 to 2026-06-09. Data source: github.com/qwibitai/nanoclaw (redirects to nanocoai/nanoclaw).*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-09

## 1. Today's Overview

IronClaw saw very high development velocity in the last 24 hours with **33 issues updated** and **50 pull requests updated**, indicating an active push toward the Reborn architecture cutover. No new releases were published, though a release PR (#3708) remains open, preparing a major version bump from 0.24.0 to **0.29.1** with breaking API changes in `ironclaw_common` and `ironclaw_skills`. The dominant theme is **Reborn productionization**: OpenAI-compatible API migration, ProductWorkflow-based routing, auth parity, and operator tooling. WebChat v2 and channel stability also received significant attention, with several production-facing bugs closed.

---

## 2. Releases

**No new releases** were published today.

However, [PR #3708](https://github.com/nearai/ironclaw/pull/3708) remains open as a release preparation PR:
- `ironclaw`: 0.24.0 → **0.29.1**
- `ironclaw_common`: 0.4.2 → **0.5.0** (⚠️ breaking changes)
- `ironclaw_skills`: 0.3.0 → **0.4.0** (⚠️ breaking changes)
- `ironclaw_safety`: 0.2.2 → 0.2.3 (compatible)

---

## 3. Project Progress

### Merged/Closed PRs Today (24)

Key advancements:

| PR | Description | Significance |
|---|---|---|
| [#4576](https://github.com/nearai/ironclaw/pull/4576) | `ToolCall.arguments_parse_error` field added across 21 files | Foundation for LLM output normalization (RC3/M9 Phase B) |
| [#4572](https://github.com/nearai/ironclaw/pull/4572) | `planner` subagent flavor replaces `researcher`; `spawn_subagent` schema redesign | Major subagent architecture evolution |
| [#4578](https://github.com/nearai/ironclaw/pull/4578) | Google Calendar `list_events` defaults `timeMin` to now | Fixes long-standing UX bug |
| [#4579](https://github.com/nearai/ironclaw/pull/4579) | Replaced superseded trigger delivery plan with scoped-default E2E plan | Documentation/roadmap alignment |
| [#4523](https://github.com/nearai/ironclaw/pull/4523) | Fixed `TenantId`/`UserId` sentinel deserialization | Unblocks LLM settings in WebChat v2 |
| [#4528](https://github.com/nearai/ironclaw/pull/4528) | Persist Slack host-beta workflow state | Major channel reliability improvement |
| [#4566](https://github.com/nearai/ironclaw/pull/4566) | Auto-detect Codex `client_version` to unlock newer models (e.g., gpt-5.5) | Fixes model discovery gating |
| [#4574](https://github.com/nearai/ironclaw/pull/4574) | Scoped outbound delivery defaults | Trigger delivery infrastructure |
| [#4546](https://github.com/nearai/ironclaw/pull/4546) | Route Responses through `ProductWorkflow` | Core Reborn OpenAI-compatible API progress |
| [#4495](https://github.com/nearai/ironclaw/pull/4495) | Route chat completions through `ProductWorkflow` | Same — foundational for #3283 |

Also closed: issues [#4116](https://github.com/nearai/ironclaw/issues/4116), [#4488](https://github.com/nearai/ironclaw/issues/4488), [#4560](https://github.com/nearai/ironclaw/issues/4560), [#3613](https://github.com/nearai/ironclaw/issues/3613), [#4201](https://github.com/nearai/ironclaw/issues/4201), [#4577](https://github.com/nearai/ironclaw/issues/4577), [#4564](https://github.com/nearai/ironclaw/issues/4564), [#4536](https://github.com/nearai/ironclaw/issues/4536), [#4443](https://github.com/nearai/ironclaw/issues/4443), [#4442](https://github.com/nearai/ironclaw/issues/4442), [#4180](https://github.com/nearai/ironclaw/issues/4180), [#3958](https://github.com/nearai/ironclaw/issues/3958).

---

## 4. Community Hot Topics

Most active by comment count:

### Issues

| Issue | Comments | Topic |
|---|---|---|
| [#3283](https://github.com/nearai/ironclaw/issues/3283) | 3 | **[Reborn] Migrate OpenAI-compatible chat and Responses APIs onto Reborn** — the central epic for API compatibility layer |
| [#4175](https://github.com/nearai/ironclaw/issues/4175) | 3 | **ProductAuth production backend parity and OAuth PKCE HA safety** |
| [#3957](https://github.com/nearai/ironclaw/issues/3957) | 2 | Third-party hook activation hardening |
| [#3959](https://github.com/nearai/ironclaw/issues/3959) | 2 | `SecurityAuditSink` adoption at boundary call sites |
| [#3288](https://github.com/nearai/ironclaw/issues/3288) | 2 | Production/scoped capability lifecycle admin parity |
| [#3026](https://github.com/nearai/ironclaw/issues/3026) | 2 | Epic: Reborn production wiring and cutover readiness |

**Underlying needs:** The community is intensely focused on **production readiness of Reborn** — not just feature parity, but operability (auth, audit, lifecycle, diagnostics), API compatibility (OpenAI surface), and security boundaries (hooks, audit sinks, quarantine). The high comment count on foundational epics suggests architectural review is ongoing and consensus-building is needed before cutover.

### PRs

Large open PRs driving discussion:
- [#4552](https://github.com/nearai/ironclaw/pull/4552): OpenAI SSE translation for projection streams
- [#4546](https://github.com/nearai/ironclaw/pull/4546): Responses routed through ProductWorkflow
- [#4495](https://github.com/nearai/ironclaw/pull/4495): Chat completions routed through ProductWorkflow
- [#4559](https://github.com/nearai/ironclaw/pull/4559): Agent-driven Trace Commons onboarding

---

## 5. Bugs & Stability

| Severity | Issue | Status | Notes |
|---|---|---|---|
| 🔴 **High** | [#4557](https://github.com/nearai/ironclaw/issues/4557) Hosted agents return 403 while instance running | **Open** | Production availability issue; auto-recovered for some agents but root cause unclear |
| 🔴 **High** | [#4556](https://github.com/nearai/ironclaw/issues/4556) Telegram creates new conversation after 0.28.2→0.29.1 upgrade | **Open** | Data continuity regression in production |
| 🟡 **Medium** | [#4548](https://github.com/nearai/ironclaw/issues/4548) Duplicate `model` field in DeepSeek requests with tools → 400 | **Open** | Provider compatibility bug |
| 🟡 **Medium** | [#4191](https://github.com/nearai/ironclaw/issues/4191) WeCom channel validation findings (staging) | **Open** | Multiple sub-issues flagged in v0.29.0 staging |
| 🟡 **Medium** | [#4108](https://github.com/nearai/ironclaw/issues/4108) Nightly E2E failed | **Open** | CI reliability signal |
| 🟢 **Low** | [#4577](https://github.com/nearai/ironclaw/issues/4577) Google Calendar returns oldest events | **Closed** via [#4578](https://github.com/nearai/ironclaw/pull/4578) | Fix merged |
| 🟢 **Low** | [#4564](https://github.com/nearai/ironclaw/issues/4564) Codex hardcoded `client_version` hides gpt-5.5 | **Closed** via [#4566](https://github.com/nearai/ironclaw/pull/4566) | Fix merged |
| 🟢 **Low** | [#4536](https://github.com/nearai/ironclaw/issues/4536) OAuth users can't chat | **Closed** | SSO/chat flow regression resolved |

**Stability assessment:** Two production regressions (#4557, #4556) are open and unaddressed. These should be prioritized. The closed bugs show responsive fixing of discrete issues.

---

## 6. Feature Requests & Roadmap Signals

Strong signals for **next version / near-term roadmap**:

| Item | Likely Priority | Signal Strength |
|---|---|---|
| **Reborn OpenAI-compatible API completion** (#3283, #4495, #4546, #4552, #4442, #4443) | P0 | Very high — multiple PRs in flight |
| **Reborn operator setup & diagnostics** (#4533) | P0 | High — blocker for V1 replacement |
| **Reborn approvals parity** (#4539) | P1 | High — user workflow essential |
| **Self-serve secrets for user-generated tools** (#4545) | P1 | High — security + UX enabler |
| **Runtime service profiles for credentialed HTTP** (#4543) | P1 | High — extends skill ecosystem |
| **Scoped outbound delivery defaults** (#4574, #4581) | P1 | In progress |
| **Automation run history UI** (#4580) | P2 | In progress |
| **Subagent durability / compaction** (#4582) | P2 | Design locked, implementation pending |
| **Trace Commons onboarding** (#4559) | P1 | Large PR open |

**Prediction:** The next release (0.29.1 or 0.30.0) will likely ship with Reborn ProductWorkflow-backed OpenAI-compatible chat/completions and Responses routes, plus scoped trigger delivery defaults. Operator tooling and approvals parity may follow in 0.30.x.

---

## 7. User Feedback Summary

**Real pain points from production/staging users:**

- **Upgrade continuity:** Telegram conversation history broke across 0.28.2→0.29.1 (#4556) — users expect seamless upgrades.
- **Hosted agent availability:** 403 errors on running instances (#4557) erode trust in the hosted offering.
- **Channel quality:** WeCom staging validation surfaced multiple polish issues (#4191); Telegram and Slack are actively being hardened.
- **SSO/chat flow:** OAuth users were completely blocked from chat (#4536) — now fixed, but indicates integration-test gaps.
- **Tool UX:** Google Calendar returning 2017 meetings instead of upcoming ones (#4577) and Codex missing new models (#4564) show provider-edge roughness.
- **i18n:** Hardcoded English strings and translator crashes in WebUI v2 (#4554) block global rollout.

**Satisfaction signals:** Rapid closure of discrete bugs; active Reborn architecture investment; auth and channel parity progressing.

---

## 8. Backlog Watch

Issues/PRs needing maintainer attention or at risk of stalling:

| Item | Age | Concern |
|---|---|---|
| [#3283](https://github.com/nearai/ironclaw/issues/3283) OpenAI-compatible API Reborn migration | ~1 month | Central epic; many child PRs now open, needs coordination |
| [#3026](https://github.com/nearai/ironclaw/issues/3026) Reborn production wiring and cutover readiness | ~1 month | P0 epic with only 2 comments — may need explicit milestone check-in |
| [#3288](https://github.com/nearai/ironclaw/issues/3288) Capability lifecycle admin parity | ~1 month | P2 but blocks full V1 parity |
| [#4108](https://github.com/nearai/ironclaw/issues/4108) Nightly E2E failed | 12 days | Repeated CI failure; no assignee visible |
| [#3708](https://github.com/nearai/ironclaw/pull/3708) Release PR | 3+ weeks | Stuck open despite version bump urgency; may be blocked on Reborn readiness |
| [#4186](https://github.com/nearai/ironclaw/pull/4186) Codex local-dev approval gates | 12 days | XL PR open, may need review bandwidth |
| [#4181](https://github.com/nearai/ironclaw/issues/4181) Carry v1 NEAR wallet login into WebChat v2 | 12 days | SSO parity gap; sibling GitHub closed, NEAR still pending |

**Recommendation:** Prioritize #4557 and #4556 as live production incidents; accelerate review of #4495/#4546/#4552 to unblock #3283; and schedule a maintainer triage on #3026/#4533 for cutover planning.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-09

**Repository:** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. Today's Overview

LobsterAI demonstrated **strong engineering velocity** on 2026-06-08 with **18 merged/closed PRs** against **1 open dependency update PR**. Zero active issues and zero new issues indicate either robust stability or limited external bug reporting. The day's activity concentrated heavily on **authentication reliability**, **data migration infrastructure**, and **OpenClaw gateway operability**—core platform capabilities rather than peripheral features. Notably, the team merged a significant batch of previously stale PRs (dated April 7, 2026), suggesting a backlog cleanup sprint. Overall project health appears **solid with active maintenance**, though the absence of community engagement metrics (all PRs show 0 reactions/comments) raises questions about external contributor participation.

---

## 2. Releases

**No new releases** published.

---

## 3. Project Progress

### Merged/Closed PRs (18 total)

| PR | Author | Focus | Key Advancement |
|:---|:---|:---|:---|
| [#2128](https://github.com/netease-youdao/LobsterAI/pull/2128) | fisherdaddy | Data migration | Excludes Network directory from backup; preserves on restore |
| [#2129](https://github.com/netease-youdao/LobsterAI/pull/2129) | liuzhq1986 | Auth diagnostics | Adds logging for login callback path detection (overmind vs. fallback portal) |
| [#2127](https://github.com/netease-youdao/LobsterAI/pull/2127) | liuzhq1986 | Auth/Windows UX | Fixes window focus after callback login via always-on-top toggle + taskbar flash stop |
| [#2126](https://github.com/netease-youdao/LobsterAI/pull/2126) | fisherdaddy | Data migration | In-place restore preserving runtime locks (SingletonLock/Socket/Cookie); rollback safety |
| [#2125](https://github.com/netease-youdao/LobsterAI/pull/2125) | fisherdaddy | Data migration | **Major feature**: Full user data backup/restore with tar archiving, scheduled restart, localized UI |
| [#1510](https://github.com/netease-youdao/LobsterAI/pull/1510) | MaoQianTu | Scheduled tasks | Validates IM notification session selection; prevents silent delivery failures |
| [#1514](https://github.com/netease-youdao/LobsterAI/pull/1514) | MaoQianTu | QQ Bot settings | Adds missing UI for group allowlist configuration |
| [#1515](https://github.com/netease-youdao/LobsterAI/pull/1515) | swuzjb | Log export | Fixes 30s timeout via compression optimization and parallelization |
| [#1517](https://github.com/netease-youdao/LobsterAI/pull/1517) | MaoQianTu | GitHub Copilot auth | Cancels OAuth polling on Settings close; prevents token loss |
| [#1521](https://github.com/netease-youdao/LobsterAI/pull/1521) | wowiscrazy | OpenClaw stability | Prevents spurious gateway restart on `skills-changed` events |
| [#1522](https://github.com/netease-youdao/LobsterAI/pull/1522) | leedalei | Model management | Dynamic model list fetching from provider APIs (`GET /v1/models`) |
| [#1524](https://github.com/netease-youdao/LobsterAI/pull/1524) | swuzjb | Diagnostics | Granular error messages for connection test failures (13 i18n keys) |
| [#1526](https://github.com/netease-youdao/LobsterAI/pull/1526) | MaoQianTu | Cowork UX | Session color tagging (7 colors) for visual organization |
| [#2124](https://github.com/netease-youdao/LobsterAI/pull/2124) | fisherdaddy | Testing | Test mode enhancements |
| [#2123](https://github.com/netease-youdao/LobsterAI/pull/2123) | fisherdaddy | OpenClaw visibility | Exposes gateway URL with copyable address card, status badges, progress indicator |
| [#2122](https://github.com/netease-youdao/LobsterAI/pull/2122) | liuzhq1986 | Auth architecture | **Major feature**: Localhost callback server eliminating browser confirmation dialogs |
| [#2110](https://github.com/netease-youdao/LobsterAI/pull/2110) | liuzhq1986 | OpenClaw reliability | Payload size guarding for image uploads; error classification improvements |
| [#2117](https://github.com/netease-youdao/LobsterAI/pull/2117) | liuzhq1986 | Config stability | Preserves user-deleted provider models across migrations |

### Open PR

| PR | Author | Status | Note |
|:---|:---|:---|:---|
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | dependabot[bot] | **OPEN** since Apr 2 | Electron 40.2.1 → 42.3.3 and electron-builder bump; last updated June 8 |

---

## 4. Community Hot Topics

**No active community discussion detected.** All 18 merged PRs and 1 open PR show **0 comments and 0 reactions**. This indicates:

- **Internal/team-driven development**: Authors (fisherdaddy, liuzhq1986, MaoQianTu, swuzjb, wowiscrazy, leedalei) appear to be core maintainers or NetEase Youdao employees
- **Limited external contributor engagement**: No community PRs, no discussion threads
- **Process maturity**: Rapid self-review and merge without public deliberation

**Underlying need**: The project would benefit from community-building initiatives—good first issues, contributor guidelines, or public roadmap discussions—to diversify participation.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| **Critical (fixed)** | [#2125](https://github.com/netease-youdao/LobsterAI/pull/2125) + [#2126](https://github.com/netease-youdao/LobsterAI/pull/2126) + [#2128](https://github.com/netease-youdao/LobsterAI/pull/2128) | Data migration system with rollback safety and lock preservation | **Merged** — comprehensive backup/restore infrastructure |
| **High (fixed)** | [#2122](https://github.com/netease-youdao/LobsterAI/pull/2122) + [#2127](https://github.com/netease-youdao/LobsterAI/pull/2127) + [#2129](https://github.com/netease-youdao/LobsterAI/pull/2129) | Windows auth flow: browser confirmation dialogs, focus loss, callback diagnostics | **Merged** — complete local callback server implementation |
| **High (fixed)** | [#1515](https://github.com/netease-youdao/LobsterAI/pull/1515) | Log export timeout (30s) on large files due to DEFLATE compression | **Merged** — compression level reduction + parallelization |
| **Medium (fixed)** | [#1517](https://github.com/netease-youdao/LobsterAI/pull/1517) | GitHub Copilot OAuth token loss on Settings close | **Merged** — cleanup effect added |
| **Medium (fixed)** | [#1510](https://github.com/netease-youdao/LobsterAI/pull/1510) | Silent IM notification failure when session unselected | **Merged** — form validation enforced |
| **Medium (fixed)** | [#2110](https://github.com/netease-youdao/LobsterAI/pull/2110) | Oversized OpenClaw image payload crashes | **Merged** — pre-send detection + error classification |
| **Medium (fixed)** | [#2117](https://github.com/netease-youdao/LobsterAI/pull/2117) | User-deleted models reappearing after migration | **Merged** — migration versioning + deletion tracking |

**No unaddressed bugs reported today.**

---

## 6. Feature Requests & Roadmap Signals

| Feature | Evidence | Likelihood in Next Release |
|:---|:---|:---|
| **Dynamic model discovery** | [#1522](https://github.com/netease-youdao/LobsterAI/pull/1522) merged — fetches from `GET /v1/models` | **Shipped** |
| **Session color organization** | [#1526](https://github.com/netease-youdao/LobsterAI/pull/1526) merged — 7-color tagging | **Shipped** |
| **Enhanced connection diagnostics** | [#1524](https://github.com/netease-youdao/LobsterAI/pull/1524) merged — 13 localized error types | **Shipped** |
| **Electron 42 upgrade** | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) pending since April | **High** — blocked on compatibility validation |
| **Cross-platform data portability** | [#2125](https://github.com/netease-youdao/LobsterAI/pull/2125) merged — tar-based backup/restore | **Shipped** |
| **OpenClaw gateway observability** | [#2123](https://github.com/netease-youdao/LobsterAI/pull/2123) merged — URL exposure, status UI | **Shipped** |

**Predicted next focus areas**: Mobile companion support, cloud sync for backups, plugin marketplace for OpenClaw skills.

---

## 7. User Feedback Summary

**Inferred pain points from merged fixes:**

| Pain Point | Evidence PR | User Impact |
|:---|:---|:---|
| **Windows login friction** | [#2122](https://github.com/netease-youdao/LobsterAI/pull/2122), [#2127](https://github.com/netease-youdao/LobsterAI/pull/2127) | Browser confirmation dialogs, app not surfacing after auth — **critical workflow blocker** |
| **Data loss anxiety** | [#2125](https://github.com/netease-youdao/LobsterAI/pull/2125), [#2126](https://github.com/netease-youdao/LobsterAI/pull/2126), [#2128](https://github.com/netease-youdao/LobsterAI/pull/2128) | No migration path between devices/ reinstalls — **now resolved** |
| **Silent failures** | [#1510](https://github.com/netease-youdao/LobsterAI/pull/1510), [#1517](https://github.com/netease-youdao/LobsterAI/pull/1517) | Tasks fail without notice, tokens disappear — **trust erosion** |
| **Debugging difficulty** | [#1524](https://github.com/netease-youdao/LobsterAI/pull/1524), [#2129](https://github.com/netease-youdao/LobsterAI/pull/2129), [#2123](https://github.com/netease-youdao/LobsterAI/pull/2123) | Opaque errors, hidden gateway status — **improved transparency** |
| **Manual model maintenance** | [#1522](https://github.com/netease-youdao/LobsterAI/pull/1522) | Chasing new model releases manually — **automated** |

**Satisfaction signals**: Rapid resolution of April backlog (6 stale PRs merged) suggests responsive maintenance.

**Dissatisfaction risk**: Dependabot PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) open for 2+ months may indicate upgrade blocking issues.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) — Electron 42 upgrade | **67 days** | Security/performance debt; Electron 40 EOL approaching | Maintainer review for breaking changes in native modules |
| Stale PR batch (Apr 7) | **62 days** | ✅ **Resolved** — all 6 merged June 8 | None; demonstrates backlog capacity |

**No critical unanswered issues** currently open. The zero-issue state is unusual—recommend verifying issue templates and community reporting channels are functional.

---

*Digest generated from GitHub activity data for 2026-06-08 (reported 2026-06-09).*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw Project Digest — 2026-06-09

**Project:** [TinyAGI/tinyagi](https://github.com/TinyAGI/tinyagi) | **Date:** 2026-06-09

---

## 1. Today's Overview

TinyClaw exhibits **minimal activity** over the past 24 hours, with only a single open pull request addressing a developer-experience pain point in the installation process. The project shows zero open issues and no closed activity, suggesting either a stable maintenance phase or reduced community engagement. With no releases and no issue traffic, this appears to be a quiet period for the codebase. The sole active contribution focuses on smoothing the native dependency installation for `better-sqlite3`, indicating ongoing attention to onboarding friction. Overall project health reads as **stable but dormant**—no regressions or urgent matters require attention, yet the lack of broader activity may signal a need for maintainer visibility or roadmap communication.

---

## 2. Releases

*No new releases.*

---

## 3. Project Progress

**No merged or closed PRs today.**

The only active contribution remains open:

| PR | Status | Description |
|---|---|---|
| [#280 fix(install): add postinstall script to auto-rebuild better-sqlite3](https://github.com/TinyAGI/tinyagi/pull/280) | 🟡 Open | Adds automatic native module rebuild after `npm install` |

**Technical significance:** The `better-sqlite3` dependency requires platform-specific compilation via node-gyp. Currently, fresh installs fail silently or throw runtime errors until users manually run `npm rebuild better-sqlite3`. The proposed `postinstall` hook would eliminate this friction entirely—a small but high-impact quality-of-life improvement for new contributors and end users.

---

## 4. Community Hot Topics

*No active discussions to analyze.*

The sole PR (#280) has **zero comments and zero reactions**, indicating limited community engagement despite its practical value. The underlying need here is **reduced barrier to entry** for Node.js-native addon workflows, particularly relevant as TinyClaw likely targets developers building local-first AI agents where SQLite serves as embedded datastore.

**Link:** [PR #280](https://github.com/TinyAGI/tinyagi/pull/280)

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix Available? |
|---|---|---|---|
| **Medium** (UX degradation) | `better-sqlite3` native module fails on fresh install without manual rebuild | Known, unreported as Issue | ✅ PR #280 pending review |

**Assessment:** No new bugs reported today. The installation friction documented in PR #280 represents a **latent stability risk**—users encountering cryptic native module errors may abandon setup entirely. No crashes or regressions in runtime behavior reported.

---

## 6. Feature Requests & Roadmap Signals

*No explicit feature requests in today's data.*

**Inferred signals from PR #280:**

| Signal | Likelihood in Next Version |
|---|---|
| Improved installation / onboarding experience | **High** — actively being addressed |
| Broader native dependency management automation | Medium — pattern could extend to other addons |
| Prebuilt binaries distribution | Low — not mentioned, but would eliminate compile step entirely |

The focus on build tooling over core AI functionality suggests the project may be in a **polish phase** rather than active feature expansion.

---

## 7. User Feedback Summary

*No direct user feedback captured in issues or PR comments today.*

**Derived pain points from PR #280 description:**

| Pain Point | Evidence | User Segment Affected |
|---|---|---|
| Manual rebuild step breaks automated deployments | "On fresh installs, users encounter errors" | DevOps/self-hosters |
| Native compilation complexity | "must be compiled for the current Node.js runtime" | New contributors, non-Node developers |
| Unclear error messages | Implicit in "users encounter errors" | All users |

**Satisfaction note:** The PR author's proactive fix suggests this pain point was significant enough to warrant intervention, yet not severe enough to generate issue reports—possibly indicating user attrition before feedback stage.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [PR #280](https://github.com/TinyAGI/tinyagi/pull/280) | 1 day | Low (fresh) | **Maintainer review required** — straightforward DX improvement with clear scope |

**Broader concern:** With **zero open issues** and only one open PR, the project lacks visible backlog items. This could indicate:
- Exceptional code health and completeness
- **Or:** Underreporting due to low community engagement, insufficient issue templates, or maintainer unavailability discouraging submissions

**Recommendation:** Maintainers should consider triaging PR #280 promptly to signal responsiveness, and audit whether the empty issues list reflects genuine stability or a participation barrier.

---

*Digest compiled from GitHub activity 2026-06-08 to 2026-06-09. Data source: TinyAGI/tinyagi public repository.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-09

## 1. Today's Overview

CoPaw (QwenPaw) shows **high development velocity** with 49 issues and 45 PRs updated in the last 24 hours, indicating an active maintenance cycle. The project is in a **stabilization phase** with no new releases, focusing on bug fixes and infrastructure improvements rather than feature launches. The 26:23 open-to-closed issue ratio and 22:23 open-to-merged PR ratio suggest balanced throughput but lingering backlog accumulation. Notable activity centers on **AgentScope 2.0 migration preparation**, **MCP server lifecycle fixes**, and **desktop/frontend stability improvements**. Security and architectural debt are receiving attention, with key PRs addressing keychain isolation and workspace path validation.

---

## 2. Releases

**No new releases** (v1.1.10 remains latest).

---

## 3. Project Progress

### Merged/Closed PRs (23 total, key items)

| PR | Description | Significance |
|:---|:---|:---|
| [#5018](https://github.com/agentscope-ai/QwenPaw/pull/5018) | Propagate `ModelInfo.max_input_length` to AgentScope `context_size` for auto-compaction | **Critical fix** — bridges config gap causing silent context window misconfiguration |
| [#5014](https://github.com/agentscope-ai/QwenPaw/pull/5014) | Fix MCP server subprocess accumulation across restarts | Resolves [#4834](https://github.com/agentscope-ai/QwenPaw/issues/4834) — production stability issue |
| [#4949](https://github.com/agentscope-ai/QwenPaw/pull/4949) | ACP protocol extensions: commands, errors, tool params, metadata | **Closed** — enhances TUI client experience; merged after review |
| [#4286](https://github.com/agentscope-ai/QwenPaw/pull/4286) | Localize session and cron job controls (Indonesia, etc.) | i18n completeness |
| [#2771](https://github.com/agentscope-ai/QwenPaw/pull/2771) | Restrict `mlx-lm` to Apple Silicon macOS | Prevents installation failures on incompatible hardware |

### Key Open PRs Advancing

| PR | Description | Stage |
|:---|:---|:---|
| [#5028](https://github.com/agentscope-ai/QwenPaw/pull/5028) | **Security**: Isolate keychain master key per install | Open — critical security hardening |
| [#5027](https://github.com/agentscope-ai/QwenPaw/pull/5027) | Stop backend-warmup sessions polluting console + session resume | Open — UX cleanup |
| [#5023](https://github.com/agentscope-ai/QwenPaw/pull/5023) | Plugin Market tab with AgentScope Platform integration | Open — ecosystem expansion |
| [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) | Tauri desktop auto-updater | Open — long-running, needs completion |
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) | DataPaw plugin (12 BI skills) | Open since May 22 — **stalled review** |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|
| [#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) | 15 | WeChat iLink cron push failures — `context_token` expiry, no retry | **Enterprise reliability**: Users need 24/7 bot operation without manual intervention; token refresh logic is immature |
| [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) | 9 | Windows shell command flashes console window | **Desktop polish**: Windows UX quality bar for mainstream adoption |
| [#5017](https://github.com/agentscope-ai/QwenPaw/issues/5017) | 7, 👍1 | Feature: Learn from Hermes Agent's "Learning Loop" | **Competitive positioning**: Community sees Hermes (46k⭐) as benchmark; wants skill auto-evolution to avoid obsolescence |
| [#4408](https://github.com/agentscope-ai/QwenPaw/issues/4408) | 7 | Default workspace files in `.qwenpaw/` folder | **Developer experience**: Cluttered CWD frustrates power users; convention-over-configuration expected |
| [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) | 6, 👍2 | **Breaking Change**: Migrate to AgentScope 2.0 | **Strategic migration**: Community wants timeline clarity; this is a major architectural bet |

### Analysis

The Hermes Agent comparison ([#5017](https://github.com/agentscope-ai/QwenPaw/issues/5017)) signals **ecosystem anxiety** — QwenPaw's localization advantage (Chinese market fit, WeChat/WeCom integration) is recognized, but technical differentiation beyond "fork of OpenClaw" needs reinforcement. The AgentScope 2.0 migration ([#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)) is the critical path to address this.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#4834](https://github.com/agentscope-ai/QwenPaw/issues/4834) / [#5014](https://github.com/agentscope-ai/QwenPaw/pull/5014) | MCP server process accumulation → slow console/CPU exhaustion | **PR open** — root cause: `start_new_session=True` prevents cleanup on Docker restart |
| 🔴 **Critical** | [#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) | Dual subagent → infinite polling, Feishu can't interrupt | **No fix PR** — architecture flaw in task scheduling |
| 🟡 **High** | [#4895](https://github.com/agentscope-ai/QwenPaw/issues/4895) | Infinite image compression loop → hallucination | **No fix PR** — recursive injection bug |
| 🟡 **High** | [#5019](https://github.com/agentscope-ai/QwenPaw/issues/5019) | Memory compaction crash: `AttributeError` on string `source` | **Closed today** — type safety gap in `as_msg_handler` |
| 🟡 **High** | [#4926](https://github.com/agentscope-ai/QwenPaw/issues/4926) | OneBot WebSocket port not released on reload → channel death | **No fix PR** — aiohtt server lifecycle bug |
| 🟡 **High** | [#4970](https://github.com/agentscope-ai/QwenPaw/issues/4970) | Corrupted `loop_config.json`/`prd.json` crashes entire agent session | **No fix PR** — needs graceful degradation + backup recovery |
| 🟢 **Medium** | [#5015](https://github.com/agentscope-ai/QwenPaw/issues/5015) | Windows desktop frontend lag, CPU spike during tasks | **No fix PR** — likely React rendering/ state management |
| 🟢 **Medium** | [#5016](https://github.com/agentscope-ai/QwenPaw/issues/5016) | Web Console multi-agent chat: new chats not registered | **No fix PR** — race condition in agent import flow |
| 🟢 **Medium** | [#4993](https://github.com/agentscope-ai/QwenPaw/issues/4993) | Image preview jitter on zoom+drag (macOS) | **No fix PR** — frontend CSS/transform issue |

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **AgentScope 2.0 backend** | [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) | High | Explicitly planned; blocking other architectural work |
| **Plugin Market / AgentScope Platform integration** | [#5023](https://github.com/agentscope-ai/QwenPaw/pull/5023) | High | PR open; ecosystem moat strategy |
| **Visual model fallback** | [#4992](https://github.com/agentscope-ai/QwenPaw/issues/4992) | Medium | Common pattern (see OpenRouter, etc.); moderate complexity |
| **Memory system self-evolution** | [#4994](https://github.com/agentscope-ai/QwenPaw/issues/4994) | Medium | "Absorb mainstream agent frameworks" — vague, needs scoping |
| **Silent tool execution (suppress final text)** | [#4838](https://github.com/agentscope-ai/QwenPaw/issues/4838) | Medium | Channel config extension; straightforward |
| **Learning Loop / auto-skill creation** | [#5017](https://github.com/agentscope-ai/QwenPaw/issues/5017) | Low | Research-level feature; Hermes hasn't proven scalability |
| **PRD management tool (built-in)** | [#4902](https://github.com/agentscope-ai/QwenPaw/pull/4902) | Medium | PR open from first-time contributor; needs review bandwidth |
| **Tauri auto-updater** | [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) | Medium | Long-running; dependency on release infrastructure |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Enterprise channel reliability** | WeChat iLink token expiry ([#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477)), WeCom tool discovery ([#4585](https://github.com/agentscope-ai/QwenPaw/issues/4585)), Feishu polling ([#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873)) | 🔴 Critical |
| **Desktop performance** | Windows lag ([#5015](https://github.com/agentscope-ai/QwenPaw/issues/5015)), macOS orphaned processes ([#4587](https://github.com/agentscope-ai/QwenPaw/issues/4587)), image preview bugs ([#4993](https://github.com/agentscope-ai/QwenPaw/issues/4993)) | 🟡 High |
| **Configuration fragility** | JSON corruption crashes ([#4970](https://github.com/agentscope-ai/QwenPaw/issues/4970)), MCP process leaks ([#4834](https://github.com/agentscope-ai/QwenPaw/issues/4834)) | 🟡 High |
| **Model compatibility gaps** | KimiCode thinking not shown ([#5013](https://github.com/agentscope-ai/QwenPaw/issues/5013)), 9router support ([#5001](https://github.com/agentscope-ai/QwenPaw/issues/5001)), visual model fallback needed ([#4992](https://github.com/agentscope-ai/QwenPaw/issues/4992)) | 🟢 Medium |

### Satisfaction

- **Localization praised**: "国内用起来特别舒服——本地化做得很到位，设置清晰无门槛，开箱即用" ([#5017](https://github.com/agentscope-ai/QwenPaw/issues/5017))
- **Plugin ecosystem potential recognized**: DataPaw BI plugin ([#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622)), Plugin Market ([#5023](https://github.com/agentscope-ai/QwenPaw/pull/5023))

### Dissatisfaction

- **Memory system "薄弱" (weak)** — direct user characterization ([#4994](https://github.com/agentscope-ai/QwenPaw/issues/4994))
- **Skill evolution lag vs. competitors** — Hermes comparison stings ([#5017](https://github.com/agentscope-ai/QwenPaw/issues/5017))

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) DataPaw plugin | 18 days | **Contributor attrition** — first-time contributor, no maintainer response since May 22 | Review or provide feedback timeline |
| [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) Tauri auto-updater | 15 days | **Release infrastructure gap** — desktop users lack update path | Rebase and merge decision |
| [#4443](https://github.com/agentscope-ai/QwenPaw/pull/4443) Lightweight goal mode | 24 days | **Feature competition** — simple vs. full goal system | Scope decision: MVP merge or close |
| [#4345](https://github.com/agentscope-ai/QwenPaw/pull/4345) Collapsible code blocks | 26 days | **UX polish backlog** | Low risk; merge when CI passes |
| [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) AgentScope 2.0 migration | 13 days | **Strategic blocker** — no maintainer ETA provided | Publish migration timeline and deprecation policy |
| [#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) Subagent infinite polling | 8 days | **Production incident potential** | Prioritize fix; affects Feishu enterprise users |

---

**Project Health Assessment**: 🟡 **Caution-Progressing**

- **Strengths**: High throughput, security awareness, ecosystem integration (AgentScope Platform), strong Chinese market fit
- **Risks**: AgentScope 2.0 migration uncertainty, enterprise channel reliability gaps, contributor review bottleneck (multiple PRs >2 weeks stale), memory architecture debt

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-09

## 1. Today's Overview

ZeroClaw shows **intense development velocity** with 50 issues and 50 PRs updated in the last 24 hours, though the merge rate remains low (11 closed/merged PRs vs. 39 open). No new releases were cut. The project is in a **heavy consolidation phase** ahead of the v0.9.0 milestone, with security architecture refactoring (OIDC, pluggable security providers), MCP ecosystem expansion, and channel reliability fixes dominating the queue. The high open-to-closed ratio suggests either a bottleneck in review capacity or deliberate batching for a larger release. Critical S0/S1 bugs persist in runtime memory management, filesystem isolation, and provider compatibility.

---

## 2. Releases

**No new releases** — None published. The project remains on v0.8.0-beta-1 (per issue #6877 verification).

---

## 3. Project Progress

### Merged/Closed PRs (11 total, notable items):

| PR | Author | Status | Impact |
|---|---|---|---|
| [#7403](https://github.com/zeroclaw-labs/zeroclaw/pull/7403) | tidux | **CLOSED** | Runtime guard: prevents `trim_history` from orphan-cascading to empty conversation history |
| [#6701](https://github.com/zeroclaw-labs/zeroclaw/pull/6701) | Alix-007 | **CLOSED** | Telegram: preserves markdown fences when splitting long messages (closes #6225) |
| [#7129](https://github.com/zeroclaw-labs/zeroclaw/pull/7129) | IftekharUddin | **OPEN** (closes #4627) | File tools now **fail loudly** on ephemeral workspaces — addresses S0 data loss risk |
| [#7234](https://github.com/zeroclaw-labs/zeroclaw/pull/7234) | fanchanghu | **OPEN** | Final slice of MemoryStrategy decoupling (#6850): gateway + channel consolidation wired |
| [#7367](https://github.com/zeroclaw-labs/zeroclaw/pull/7367) | IftekharUddin | **OPEN** | Gateway webhook routing now respects **per-channel alias** instead of first-match |
| [#7388](https://github.com/zeroclaw-labs/zeroclaw/pull/7388) | singlerider | **OPEN** | Matrix: per-alias session isolation + key backup repair |
| [#7402](https://github.com/zeroclaw-labs/zeroclaw/pull/7402) | perlowja | **OPEN** | Gateway survives transient `accept()` errors (EMFILE) instead of crashing (#7042) |
| [#7399](https://github.com/zeroclaw-labs/zeroclaw/pull/7399) | perlowja | **OPEN** | Sanitizes skill tool names for provider regex compliance (#6678) |

**Key advancement:** The runtime/agent core is receiving hardening against cascade failures (#7403, #7402), while the channel layer sees multi-instance correctness fixes (#7367, #7388).

---

## 4. Community Hot Topics

### Most Active Issues (by comment count + engagement):

| Issue | Comments | 👍 | Topic | Link |
|---|---|---|---|---|
| **#6699** — `tool_filter_groups` no-op for real MCP tools + deferred_loading gap | 7 | 0 | MCP tool dispatch bug | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) |
| **#6909** — RFC: Computer-use support (screenshot, input control) | 6 | 0 | Desktop automation parity | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) |
| **#7184** — RFC: Move i18n files to git submodule | 5 | 0 | Repo architecture | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7184) |
| **#4832** — Config to disable LeakDetector false positives | 4 | 0 | Security UX | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/4832) |
| **#7142** — Pluggable security provider interface (v0.9.0) | 4 | 0 | Security architecture | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) |
| **#7155** — Per-execution confirmation tier for shell commands | 4 | 0 | Safety/UX | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) |
| **#7141** — OIDC Authentication Provider (v0.9.0) | 4 | 0 | Enterprise auth | [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) |

**Underlying needs analysis:**

- **#6699** reveals a **documentation-reality gap**: `tool_filter_groups` parses but doesn't execute for MCP tools, indicating MCP integration is still "surface-deep" in places.
- **#6909** signals competitive pressure: users want OpenAI Codex / Claude-style computer-use, not just API chat.
- **#7141 + #7142 + #7155** form a **security hardening cluster** — enterprise/team deployment readiness is the unifying theme for v0.9.0.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Description |
|---|---|---|---|---|
| **S0** | [#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) | In progress | **#7129** | `file_write` silent failure — files invisible on host (Docker/fs isolation) |
| **S0** | [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) | In progress | None | Consecutive OOM kills in WSL2 (8GB+ RSS) |
| **S1** | [#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) | In progress | None | Gemini 400: assistant tool_call before first user turn |
| **S1** | [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) | In progress | None | Gemini CLI OAuth non-functional |
| **S1** | [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) | In progress | None | `context_compression` drops tool messages for OpenAI-compatible providers (MiniMax) |
| **S1** | [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) | In progress | None | Shell tool refused at `autonomy = "full"` — no dispatch reaches runtime |
| **S1** | [#6224](https://github.com/zeroclaw-labs/zeroclaw/issues/6224) | In progress | None | Cron→WhatsApp dispatch missing channel |
| **S1** | [#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037) | In progress | None | Cron jobs launch repeatedly while still running |
| **S2** | [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) | In progress | **#6973** | WhatsApp LID-based contacts bypass allowed-numbers, silent drops |
| **S2** | [#5795](https://github.com/zeroclaw-labs/zeroclaw/issues/5795) | In progress | **#5796** | XML `<tool_result>` leaks into channel responses |

**Stability assessment:** Two S0 bugs threaten data integrity and system survival. The OOM issue (#5542) is particularly concerning for long-running daemon deployments. The cron subsystem has **two independent S1 bugs** (#6037, #6224) suggesting architectural fragility in scheduled execution.

---

## 6. Feature Requests & Roadmap Signals

### v0.9.0 Tracking Issues (explicitly tagged):

| Issue | Feature | Likelihood in v0.9.0 |
|---|---|---|
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | OIDC Authentication Provider | **High** — tracking issue, accepted |
| [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) | Pluggable security provider interface | **High** — tracking issue, accepted |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | MemoryStrategy decoupling | **High** — PR #7234 in final slice |

### Strong user-demand features:

| Issue | Feature | Competitive Parity | Complexity |
|---|---|---|---|
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | Computer-use / desktop control | OpenAI Codex, Claude | Very High |
| [#4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467) | MCP resources + prompts (not just tools) | MCP spec completeness | Medium |
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | Local-First Mode (small models, no prompt leakage) | Ollama ecosystem | Medium |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | Claude Code-style shell policy (allow/ask/deny) | Claude Code | Medium |

**Prediction:** Computer-use (#6909) is the highest-risk/reward bet — if implemented, it would differentiate ZeroClaw in the local-agent market, but the security surface is enormous (see #7155's confirmation-tier work as prerequisite).

---

## 7. User Feedback Summary

### Pain Points (direct quotes / summaries):

| Theme | Evidence | Severity |
|---|---|---|
| **"It says success but files disappear"** | #4627 — `file_write` reports success, host fs empty | Critical trust erosion |
| **"Gemini simply not working"** | #4879, #6302, #6361 — OAuth, history serialization, compression | Provider reliability gap |
| **"False positives redact legitimate content"** | #4832 — MD5 filenames, WeChat media flagged as secrets | Operational friction |
| **"Only LLM called, not Agent"** | #4873 — Feishu integration misroutes to bare LLM | Integration completeness |
| **"20 cron executions in 3 minutes"** | #6037 — scheduling logic broken | Automation reliability |
| **"Translation churn pollutes git history"** | #7184 — i18n files need submodule extraction | Maintainer burden |

### Use cases emerging:

- **Enterprise team deployment**: OIDC + pluggable security + TOTP gating (#7141, #7142, #3767)
- **Local/privacy-first**: Ollama small-model mode (#5287), no cloud dependency
- **Multi-channel operations**: WhatsApp Business + Telegram + Matrix + Feishu simultaneously

### Satisfaction signals:
- Strong engagement (50 issues/PRs daily) indicates **active user investment**
- #4467 (MCP resources) has **4 👍** — highest community endorsement

---

## 8. Backlog Watch

### Issues needing maintainer attention (high importance, stalled or long-running):

| Issue | Age | Status | Risk |
|---|---|---|---|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | ~2 months | "help wanted" | **153 commits lost in bulk revert** — recovery audit incomplete; blocks historical bugfix verification |
| [#3767](https://github.com/zeroclaw-labs/zeroclaw/issues/3767) | ~3 months | In progress | Cross-channel TOTP — security-critical, but no recent PR linkage |
| [#4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467) | ~2.5 months | In progress | MCP resources/prompts — **highest community demand** (4👍), but no assignee visible |
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | ~2 months | In progress | Local-First Mode — aligns with market trend, needs RFC finalization |
| [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) | ~2.5 months | In progress | Gemini OAuth broken — **S1 workflow blocked**, no fix PR identified |

### Review bottleneck indicators:
- 39 open PRs vs. 11 merged/closed suggests **~3.5:1 submission-to-merge ratio**
- Multiple "status:accepted" issues lack assignees or linked PRs

---

## Project Health Summary

| Metric | Assessment |
|---|---|
| **Velocity** | High (100 items/day touch rate) |
| **Merge throughput** | Constrained (22% close rate) |
| **Critical bug backlog** | Elevated (2× S0, 7× S1 open) |
| **Security maturity** | Advancing (v0.9.0 tracking: OIDC, pluggable providers, TOTP) |
| **Ecosystem completeness** | Gaps in MCP depth (#6699, #4467), provider parity (Gemini) |
| **Community health** | Engaged, with clear enterprise/local-user segmentation |

**Recommendation for observers:** Watch for v0.9.0 alpha/beta tagging — the security architecture PRs (#7141, #7142) and MemoryStrategy completion (#7234) are likely gating that release. The computer-use RFC (#6909) could be a v0.10.0 headline feature if security hardening lands first.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*