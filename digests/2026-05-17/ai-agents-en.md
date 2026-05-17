# OpenClaw Ecosystem Digest 2026-05-17

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-17 00:21 UTC

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

# OpenClaw Project Digest — 2026-05-17

## 1. Today's Overview

OpenClaw shows **extremely high development velocity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a mature, actively maintained project approaching or in a major release cycle. The 430 open/active issues against 70 closed suggests a growing backlog requiring triage attention, while 414 open PRs against 86 merged/closed indicates substantial community contribution but potential review bottleneck. Three beta releases shipped on 2026-05-16 (beta.1 through beta.3), signaling rapid iteration on the 2026.5.x release train. The project demonstrates strong multi-channel integration breadth (Discord, Telegram, WhatsApp, Slack, Matrix, Feishu, etc.) with ongoing hardening for production deployments. Security and reliability remain focal points, with multiple active PRs addressing gateway hardening, tool-policy enforcement, and LLM sentinel sanitization.

---

## 2. Releases

### v2026.5.16-beta.3 | v2026.5.16-beta.2 | v2026.5.16-beta.1

| Version | Key Changes |
|---------|-------------|
| **beta.3 / beta.2** (identical changelogs) | • **xAI Grok OAuth**: SuperGrok subscribers can now authenticate `xai/*` models and xAI media/tool providers without explicit `XAI_API_KEY` — streamlines enterprise xAI adoption<br>• **CLI/cron enhancement**: `openclaw cron run --wait` with configurable timeout and poll interval; exact `cron.runs --run-id` filtering for precise job inspection |
| **beta.1** | • **Maintainer tooling**: Crabbox skill defaults now route through repo-brokered AWS config; Blacksmith Testbox becomes explicit opt-in (security posture improvement)<br>• **Onboarding i18n**: Setup wizard and bundled channel setup flows localized for English, Simplified Chinese |

**Breaking/Migration Notes**: Blacksmith Testbox users must now explicitly opt in; previous implicit default behavior removed. xAI OAuth users should verify SuperGrok subscription status before removing `XAI_API_KEY`.

---

## 3. Project Progress

### Merged/Closed PRs (2026-05-17)

| PR | Author | Summary | Impact |
|----|--------|---------|--------|
| [#82795](https://github.com/openclaw/openclaw/pull/82795) | steipete | **macOS pairing approval prompt UX** — friendly copy, proper button ordering (Approve primary, "Not Now", destructive Reject) | Platform polish |
| [#82756](https://github.com/openclaw/openclaw/pull/82756) | IWhatsskill | **Telegram catch-all mentions for captionless media** — image-only group messages now trigger with `mentionPatterns: [".*"]` | Channel reliability |
| [#80721](https://github.com/openclaw/openclaw/issues/80721) | islandpreneur007 | **`config unset --dry-run` parity** — closed with implementation | CLI consistency |

### Significant Open PRs Advancing

| PR | Author | Focus Area |
|----|--------|------------|
| [#81864](https://github.com/openclaw/openclaw/pull/81864) | kennykankush | **Plain-language plugin approvals** — replaces debug-style approval prompts with human-readable copy; touches all major channels |
| [#81729](https://github.com/openclaw/openclaw/pull/81729) | jesse-merhi | **Remove system event trust metadata** from model-visible context; preserves security via runtime metadata |
| [#44884](https://github.com/openclaw/openclaw/pull/44884) | yeyanle6 | **Gateway public network hardening** — IP allowlists, enhanced CORS, rate limiting gaps |
| [#82770](https://github.com/openclaw/openclaw/pull/82770) | steipete | **Abort timed-out embedding requests** — threads AbortSignal through memory pipeline, prevents gateway stalls |
| [#45290](https://github.com/openclaw/openclaw/pull/45290) | haiyuzhong1980 | **Delivery fallback/outbound recovery hardening** — fixes leaked tool-call artifacts, context overflow signaling |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Comments | Category | Core Need |
|-------|----------|----------|-----------|
| [#71127](https://github.com/openclaw/openclaw/issues/71127) — Stuck processing sessions never abort | 14 | **Reliability** | Self-healing gateway; automated recovery without external restart |
| [#45740](https://github.com/openclaw/openclaw/issues/45740) — Untrusted issue body injected into sub-agent prompt | 12 | **Security** | Input sanitization for agent-to-agent workflows; prevent prompt injection |
| [#39604](https://github.com/openclaw/openclaw/issues/39604) — `tools.web.fetch.allowPrivateNetwork` | 12 (+7 👍) | **Feature** | Enterprise network segmentation; opt-in private network access |
| [#41744](https://github.com/openclaw/openclaw/issues/41744) — Feishu image tool result loses media | 11 | **Bug** | Reliable media pipeline for Chinese enterprise messaging |
| [#45326](https://github.com/openclaw/openclaw/issues/45326) — TUI input swallowed during generation | 10 | **UX** | Proper interrupt handling; real-time interaction feedback |

**Underlying Pattern**: Users are pushing OpenClaw into production multi-agent, multi-channel deployments where **reliability automation**, **security boundaries**, and **media fidelity** are non-negotiable. The high comment counts reflect operational urgency, not just feature interest.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **P1/Crash** | [#71127](https://github.com/openclaw/openclaw/issues/71127) | Gateway requires external restart for stuck sessions | ❌ No — needs maintainer priority |
| **P1** | [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent completion silently lost on timeout | [#82804](https://github.com/openclaw/openclaw/pull/82804) — **open, fixes announcement path** |
| **P1** | [#63216](https://github.com/openclaw/openclaw/issues/63216) | Repeated hard resets despite `reserveTokensFloor`; bootstrap re-injected | ❌ No |
| **P1** | [#44905](https://github.com/openclaw/openclaw/issues/44905) | Discord leaks internal tool-call traces to channel | ❌ No — security exposure |
| **P1** | [#43661](https://github.com/openclaw/openclaw/issues/43661) | Compaction timeout → infinite hang + duplicate message spam | ❌ No |
| **P1** | [#81114](https://github.com/openclaw/openclaw/issues/81114) | Codex app-server timeout/fallback during near-window turns | ❌ No |
| **P2/Regression** | [#43747](https://github.com/openclaw/openclaw/issues/43747) | Memory management chaos — inconsistent behavior across users | ❌ No — architectural concern |
| **P2/Regression** | [#44993](https://github.com/openclaw/openclaw/issues/44993) | Heartbeat/Cron "Current time" stale between runs | ❌ No |
| **P2/Regression** | [#45765](https://github.com/openclaw/openclaw/issues/45765) | `OPENCLAW_HOME=~/.openclaw` creates nested `~/.openclaw/.openclaw` | ❌ No |

**Stability Assessment**: Multiple P1 issues without linked fix PRs indicate **production reliability gaps** in session lifecycle management, subagent orchestration, and memory compaction. The stuck session bug (#71127) is particularly critical as it defeats automated operations.

---

## 6. Feature Requests & Roadmap Signals

| Issue | 👍 | Predicted Priority | Rationale |
|-------|-----|-------------------|-----------|
| [#39604](https://github.com/openclaw/openclaw/issues/39604) — `allowPrivateNetwork` | 7 | **High** | Enterprise blocker; security-opt-in pattern aligns with project direction |
| [#63829](https://github.com/openclaw/openclaw/issues/63829) — Per-agent memory-wiki vault | 7 | High | Multi-agent isolation is architectural theme |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) — MathJax/LaTeX in Control UI | 4 | Medium | Academic/technical user segment |
| [#45608](https://github.com/openclaw/openclaw/issues/45608) — Pre-reset memory flush | 3 | Medium | Memory reliability companion to compaction fixes |
| [#43015](https://github.com/openclaw/openclaw/issues/43015) — `message.send` schema simplification | 3 | High | GPT auto-population breakage affects all users |
| [#45550](https://github.com/openclaw/openclaw/issues/45550) — Anthropic 1M context GA migration | 1 | **Immediate** | Provider API alignment; likely in next beta |
| [#45758](https://github.com/openclaw/openclaw/issues/45758) — YAML config format | 2 | Low | DevOps convenience; JSON5 is entrenched |

**Likely Next Version**: Anthropic 1M GA support (#45550), xAI OAuth completion (already in beta), and plain-language approvals (#81864) are strong candidates for 2026.5.16 stable or 2026.5.17-beta.1.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Session lifecycle fragility** | #71127, #44925, #63216, #43661 | 🔴 Critical — production blocking |
| **Memory system inconsistency** | #43747, #45608, #44202 | 🔴 Critical — data loss risk |
| **Security boundary leaks** | #45740, #44905, #45269 (`apply_patch` policy) | 🟡 High — trust erosion |
| **TUI/Control UI degradation** | #45326, #45698, #41201 | 🟡 High — daily friction |
| **Cron/delivery reliability** | #44993, #45494, #45778 | 🟡 High — automation fails |
| **Multi-agent race conditions** | #43367 | 🟡 High — scaling blocker |

### Use Cases Emerging
- **Enterprise xAI/Grok adoption**: OAuth removes key management friction
- **Headless/server deployments**: macOS VM auto-login (#44673), cron robustness
- **Multi-tenant/agent isolation**: Per-agent vaults, per-agent budgets (#42475), per-skill model routing (#43260)

### Satisfaction Signals
- Active contribution volume (500 PRs/24h) indicates healthy community investment
- Localization efforts (Chinese onboarding) show global user base commitment
- Security hardening PRs (#44884, #82797) demonstrate responsible maintenance

---

## 8. Backlog Watch

### Issues Needing Maintainer Decision/Review (stale, high-impact, or label-burdened)

| Issue | Age | Blockers | Action Needed |
|-------|-----|----------|---------------|
| [#45740](https://github.com/openclaw/openclaw/issues/45740) — Prompt injection via `gh-issues` | ~2 mo | `needs-security-review`, `needs-product-decision`, `needs-maintainer-review` | **Security triage** — prompt injection in agent workflows is CWE-78 class |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) — Multi-agent orchestration unstable | ~2 mo | `needs-maintainer-review`, `needs-product-decision`, `needs-live-repro` | Architecture review — concurrent config overwrites are fundamental |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) — Per-agent cost budgets | ~2 mo | `needs-maintainer-review`, `needs-product-decision` | Product decision — cost governance for SaaS/operators |
| [#43260](https://github.com/openclaw/openclaw/issues/43260) — Per-skill model routing | ~2 mo | `needs-security-review`, `needs-maintainer-review`, `needs-product-decision` | Design approval — affects cost/performance tradeoffs |
| [#45031](https://github.com/openclaw/openclaw/issues/45031) — Built-in security scanning for skills | ~2 mo | `needs-security-review`, `needs-product-decision` | Evaluate AgentShield integration or alternative |

### PR Review Bottleneck Indicators
- 414 open PRs vs. 86 merged/closed suggests **~5:1 open/close ratio**
- Multiple `triage: needs-real-behavior-proof` labels indicate testing infrastructure gaps
- `clawsweeper:*` labels on many issues suggest automated triage is active but human review lags

---

*Digest generated from GitHub data for openclaw/openclaw on 2026-05-17. All links: https://github.com/openclaw/openclaw*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem
## 2026-05-17 Community Digest Analysis

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source ecosystem is experiencing **unprecedented development velocity** across multiple mature projects, with OpenClaw and ZeroClaw each processing 100+ tracked items daily and Hermes Agent shipping v0.14.0 with 808 commits in a single release cycle. The landscape has bifurcated between **production-hardened platforms** (OpenClaw, NanoClaw, ZeroClaw) optimizing for enterprise multi-channel deployments and **research-forward architectures** (Hermes Agent, IronClaw) exploring self-modifying agents and staged runtime migrations. A critical tension pervades: feature ambition is outpacing stability, with all major projects showing clusters of P1 bugs around session lifecycle, memory corruption, and silent configuration failures that threaten production adoption despite sophisticated capabilities.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* | Assessment |
|:---|:---|:---|:---|:---|:---|
| **OpenClaw** | 500 (430 open / 70 closed) | 500 (414 open / 86 merged) | 3 betas shipped (2026.5.16-beta.1–3) | 🟡 Moderate-High | Extreme velocity with review bottleneck; approaching major release |
| **ZeroClaw** | 50 (45 open / 5 closed) | 50 (39 open / 11 merged) | None; v0.8.0 in heavy dev | 🟡 Moderate | Pre-release consolidation; maintainer bandwidth strain |
| **Hermes Agent** | 50 (21 open / 29 closed) | 50 (21 open / 29 merged) | **v0.14.0 "Foundation Release"** shipped | 🟡 Moderate-High | Aggressive post-release stabilization; P1 cluster concerning |
| **IronClaw** | 15 | 32 | None; 0.28.2 release PR open | 🟡 Moderate | Pre-release stabilization; macOS blocker risk |
| **NanoBot** | 7 | 26 (16 merged / 10 open) | **v0.2.0** major release | 🟢 Good | Healthy governance; same-day merges; WebUI instability emerging |
| **CoPaw** | 14 | 12 (1 merged / 11 open) | None | 🟡 Moderate | High contribution volume; low merge rate; review backlog |
| **LobsterAI** | 1 active | 22 (10 merged / 12 open) | None; release train merged | 🟡 Moderate | Core-team driven; 8 stale PRs from March; security debt |
| **NanoClaw** | 6 | 9 (2 merged / 7 open) | None; v2.0.63 current | 🟡 Moderate | Infrastructure focus; silent failure bugs critical |
| **Moltis** | 1 | 3 (1 merged / 2 open) | None | 🟢 Good | Stable incremental; no fires; emerging concurrency needs |
| **PicoClaw** | 5 | 4 (1 closed / 3 open) | Nightly only | 🟡 Moderate | Moderate activity; stale labels; WeChat focus |
| **NullClaw** | — | — | — | ⚪ Inactive | No activity |
| **TinyClaw** | — | — | — | ⚪ Inactive | No activity |
| **ZeptoClaw** | — | — | — | ⚪ Inactive | No activity |

*\*Health Score considers velocity, merge ratio, bug severity distribution, and release cadence*

---

## 3. OpenClaw's Position

### Advantages vs. Peers

| Dimension | OpenClaw Position | Peer Comparison |
|:---|:---|:---|
| **Channel breadth** | 8+ production channels (Discord, Telegram, WhatsApp, Slack, Matrix, Feishu, etc.) | Widest in ecosystem; ZeroClaw (~6), NanoBot (~5), Hermes (~4) |
| **Enterprise hardening** | Gateway IP allowlists, CORS, rate limiting, tool-policy enforcement | Leading; IronClaw catching up with "Reborn" security facade |
| **Localization** | English + Simplified Chinese onboarding | Matches NanoBot (Chinese market focus); ahead of Western-only projects |
| **Provider integration velocity** | xAI Grok OAuth same-day with SuperGrok launch | Fastest provider parity; ZeroClaw OAuth blocked, Hermes headless OAuth broken |
| **Release cadence** | Daily beta iterations | Most aggressive; NanoBot v0.2.0 took longer cycle, Hermes v0.14.0 was 808-commit marathon |

### Technical Approach Differences

| Aspect | OpenClaw | Key Peers |
|:---|:---|:---|
| **Architecture** | Modular gateway + channel brokers + skill runtime | Hermes: self-modifying monolith; IronClaw: "Reborn" capability adapter pattern; ZeroClaw: multi-agent runtime schema V3 |
| **Configuration** | JSON5 entrenched, CLI-first | IronClaw pushing TOML + provider catalog; NanoClaw YAML request (#45758, low priority) |
| **Memory model** | Runtime metadata + compaction with `reserveTokensFloor` | Hermes: persistent JSON + external plugins (honcho/mem0/supermemory); ZeroClaw: "Dream mode" consolidation |
| **Security model** | Explicit opt-in for test environments (Blacksmith Testbox) | Hermes: implicit trust with recent per-user isolation PR; ZeroClaw: per-skill permissions blocked |
| **Context handling** | System event trust metadata stripped from model context (#81729) | NanoBot: `/goal` persistent pinning; Hermes: DAG context engine (beta); IronClaw: product-live workflow maturation |

### Community Size Comparison

OpenClaw demonstrates **largest absolute contributor volume** (500 PRs/24h implies 1000+ active contributors) but suffers from **worst open/close ratio** (~5:1 for both issues and PRs). By contrast:
- **NanoBot**: Smaller but most *efficient* (16/26 merged same-day, maintainer `chengyongru` highly responsive)
- **Hermes Agent**: 215 contributors in v0.14.0 cycle, but concentrated around Nous Research core team
- **ZeroClaw**: Similar velocity to OpenClaw but more distributed authorship (JordanTheJet, Stealinglight, etc. showing sustained investment)

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Session lifecycle resilience** | OpenClaw, Hermes, NanoClaw, CoPaw, ZeroClaw | Stuck session recovery (#71127), zombie session soft delete (#4223), compaction timeout hangs (#43661), queue wipe on 429 (#4449), SIGKILL journal corruption (#2516) |
| **Context compression correctness** | OpenClaw, Hermes, NanoBot, ZeroClaw, CoPaw | Preserve `reasoning_content` (#6269, #24443), media stripping safety (#27189), format header fragility (#4447/#4448), token floor management (#63216) |
| **Multi-agent orchestration** | ZeroClaw, Moltis, NanoBot, OpenClaw | Non-blocking `spawn_agent` (#1004), concurrent config overwrites (#43367), per-agent vaults (#63829), multi-agent mailbox (#3461) |
| **Provider OAuth modernization** | OpenClaw, CoPaw, ZeroClaw, Hermes | xAI/SuperGrok OAuth (shipped in OpenClaw beta, PR #4444 in CoPaw), headless OAuth impossible (#26563), 4 Chinese providers blocked (#5601) |
| **Gateway hardening** | OpenClaw, IronClaw, NanoClaw, ZeroClaw | Public network IP allowlists (#44884), CORS, rate limiting, notification API gaps (#6659), macOS binding failures (#3701) |
| **Silent failure elimination** | NanoClaw, CoPaw, ZeroClaw, Hermes | Dedup logic dropping responses (#2506), timeout ignores config (#6723), auto-approve defaults wrong (#6721), `.env` stripped on upgrade (#26804) |
| **Reasoning model support** | NanoBot, Hermes, LobsterAI, ZeroClaw | MiMo `thinking_style` (#3851), `reasoning_content` preservation (#24443, #6269), `reasoning_effort` control (#1005) |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Universal channel integration + enterprise security | Multi-channel operators, SaaS deployers | Gateway-brokered, policy-enforced, CLI-centric |
| **Hermes Agent** | Self-improving skills + persistent memory | Power users, developers, single-user productivity | Self-modifying monolith, ACP protocol, TUI-first |
| **IronClaw** | "Reborn" product-live workflow + capability adapters | Enterprise platform builders, NEAR ecosystem | Staged migration, manifest-driven, web-first rollout |
| **ZeroClaw** | Multi-agent runtime schema V3 + skill ecosystem | Agent framework developers, multi-tenant SaaS | Schema-versioned, skill-centric, MCP-shift |
| **NanoBot** | `/goal` persistent objectives + lightweight runtime | Long-task automation, research workflows | Context-optimized, same-day merge governance |
| **NanoClaw** | Health monitoring + OAuth auto-refresh stack | Production operators, containerized deployments | Three-layer observability, Bun/SQLite core |
| **CoPaw** | Cron subsystem + Chinese IM ecosystem (QQ/WeChat) | Scheduled automation, China-market users | Heavy cron investment, system tray Win32 |
| **LobsterAI** | Dream UI + MiMo/Xiaomi partnership | Consumer desktop, Chinese model ecosystem | Electron app, release train CI, Cowork module |
| **Moltis** | Agent system builder skill + secure networking | Distributed multi-agent architects | Skill-formalized patterns, NetBird/Cloudflare |
| **PicoClaw** | Embedded/edge focus (Sipeed hardware) | IoT/edge developers, WeChat mini-programs | Go-based, nightly builds, Android legacy |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (Velocity ≥25 items/day, release-active)

| Project | Phase | Risk Factor |
|:---|:---|:---|
| **OpenClaw** | Pre-major-release sprint | Review bottleneck (5:1 open/close) may destabilize |
| **Hermes Agent** | Post-release stabilization | P1 cluster threatens "Foundation" branding credibility |
| **ZeroClaw** | v0.8.0 pre-release integration | Maintainer bandwidth; 8+ items blocked on review |
| **IronClaw** | Reborn architecture cutover | macOS release blocker (#3701); E2E CI failures |

### Tier 2: Healthy Consolidation (Velocity 10–25 items/day, recent release or stable)

| Project | Phase | Strength |
|:---|:---|:---|
| **NanoBot** | v0.2.0 post-release | Same-day merges; responsive governance; WebUI debt emerging |
| **NanoClaw** | Active integration | Clean infrastructure focus; production observability investment |
| **CoPaw** | Feature accumulation | Strong first-time contributor stream; cron/state management needs coordination |

### Tier 3: Steady/Constrained (Velocity <10 items/day or stalled)

| Project | Phase | Concern |
|:---|:---|:---|
| **LobsterAI** | Core-team maintenance | 8 stale PRs (52+ days), security debt unmerged, zero external engagement |
| **Moltis** | Incremental maturation | Small community; decisions may be opaque (external channels) |
| **PicoClaw** | Nightly maintenance | Stale labels; strategic decision needed on email/enterprise expansion |

### Tier 4: Dormant

| Project | Last Activity |
|:---|:---|
| NullClaw, TinyClaw, ZeptoClaw | No activity 2026-05-17 |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Actionable Insight |
|:---|:---|:---|
| **Production reliability > feature velocity** | Every Tier 1 project has critical P1 clusters around silent failures, session corruption, memory inconsistency | Prioritize deterministic state machines, crash-consistent journaling, and observable failure modes over new capabilities |
| **Reasoning model native support** | MiMo, DeepSeek, Claude thinking, o3 all require `reasoning_content` preservation and `thinking_style` control | Design context pipelines that treat reasoning traces as first-class content, not debug output |
| **OAuth-over-API-key** | xAI SuperGrok, Chinese provider ecosystem (#5601), headless deployment friction (#26563) | Build provider abstractions assuming OAuth flows, refresh token rotation, and subscription-gated feature detection |
| **Configuration-as-Code** | IronClaw #3036, NanoClaw unattended install hang (#2514), Hermes `.env` stripping (#26804) | Move from imperative setup wizards to declarative, version-controlled, validated configuration with migration safety |
| **Multi-agent concurrency** | Moltis #1004, ZeroClaw #6398, OpenClaw #43367, NanoBot #3461 | Agent runtimes must support non-blocking spawn, mailbox-based IPC, and per-agent resource isolation |
| **Container runtime diversity** | NanoClaw Podman (#957), Colima (#2513), IronClaw macOS prebuilt (#3701), PicoClaw Android (#2880) | Test beyond Docker Desktop; assume rootless, daemonless, and cross-platform packaging |
| **Governance for self-modifying systems** | Hermes #11692 (receipts/provenance), OpenClaw #45740 (prompt injection), ZeroClaw #5775 (per-skill permissions) | If agents modify skills or configuration, implement cryptographic provenance, approval workflows, and audit logging |
| **Chinese market integration depth** | MiMo/V2 Pro/Omni (LobsterAI #813), WeChat multi-account (PicoClaw #2883), QQ acknowledgments (CoPaw #3246), 4-provider OAuth (ZeroClaw #5601) | Global agent platforms require dedicated Chinese channel/provider investment; cannot be adapter afterthought |

---

*Report generated from 13 project digests dated 2026-05-17. Health scores synthesize velocity, merge efficiency, bug severity distribution, and release cadence.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-17

## 1. Today's Overview

NanoBot shows **very high development velocity** with 26 PRs updated in 24 hours (16 merged/closed, 10 open) and 7 active issues. The project just shipped **v0.2.0**, a major milestone with 105 merged PRs and 20 new contributors, introducing persistent goal state (`/goal`) as a headline feature. Activity is concentrated around provider hardening (DeepSeek, MiMo via OpenRouter), runtime context optimization, and new channel integrations (Signal). The maintainer team (particularly `chengyongru`) is highly responsive with same-day merges, indicating healthy governance. However, WebUI stability issues and WeChat login breakage suggest growing pains from rapid feature expansion.

---

## 2. Releases

### [v0.2.0](https://github.com/HKUDS/nanobot/releases/tag/v0.2.0) — Major Release

| Attribute | Detail |
|-----------|--------|
| **Version** | v0.2.0 |
| **Scope** | 105 PRs merged, 20 new contributors |
| **Headline Feature** | `/goal` — sustained objective system |

**Key Changes:**
- **`/goal` command**: Mark any thread as a `long_task`; the active goal stays pinned in Runtime Context every turn, surviving both context compaction and long tool executions
- Persistent goal state across the full agent lifecycle

**Migration Notes:** No breaking changes noted; upgrade path appears straightforward from v0.1.5.x builds.

---

## 3. Project Progress

### Merged/Closed PRs Today (16 total — selected significant items)

| PR | Author | Summary | Impact |
|----|--------|---------|--------|
| [#3851](https://github.com/HKUDS/nanobot/pull/3851) | olgagaga | **MiMo thinking control via gateway providers** — wires `ProviderSpec.thinking_style` through gateway routing (fixes [#3845](https://github.com/HKUDS/nanobot/issues/3845)) | Critical provider fix; enables proper reasoning control for MiMo on OpenRouter |
| [#3859](https://github.com/HKUDS/nanobot/pull/3859) | chengyongru | **Remove duplicate runtime context injection** — eliminates ~4000 char goal state duplication in mid-turn drain | Token efficiency; prevents context window waste |
| [#3861](https://github.com/HKUDS/nanobot/pull/3861) | chengyongru | **Dynamic LLM timeout re-evaluation for goals** — `llm_timeout_s` now recalculates when `long_task` activates mid-run | Enables v0.2.0 goal feature to work correctly with disabled timeouts |
| [#3853](https://github.com/HKUDS/nanobot/pull/3853) | Endeavour-Yuan | **Fix `format` URL parameter false positive** — allows `&format=json` in curl URLs while still blocking shell `format` command | Security/usability balance |
| [#3856](https://github.com/HKUDS/nanobot/pull/3856) | chengyongru | **Extract checkpoint.py and turn_writer.py** from monolithic loop.py | Code health; 3 new dedicated modules |
| [#3858](https://github.com/HKUDS/nanobot/pull/3858) | chengyongru | **Extract `ContextBuilder.build_user_content()`** as public API | Refactoring for testability |
| [#3860](https://github.com/HKUDS/nanobot/pull/3860) | chengyongru | **Update CLAUDE.md** — syncs documentation with actual codebase (WeCom, DingTalk, Email, MoChat, MS Teams, Bedrock, Codex, etc.) | Docs accuracy |
| [#3516](https://github.com/HKUDS/nanobot/pull/3516) | Zozi96 | **Automatic session cleanup** — idle session deletion with human-readable duration config (`"15d"`, `"24h"`) | Operational hygiene |
| [#3223](https://github.com/HKUDS/nanobot/pull/3223) | MuataSr | **Spawn management tools** — `spawn_status`, `spawn_cancel`, enhanced spawn params | Subagent observability |
| [#3461](https://github.com/HKUDS/nanobot/pull/3461) | chengyongru | **Multi-agent mailbox channel** — filesystem-based inter-agent communication | Zero-mod plugin architecture |

**Architecture Trend:** Heavy focus on runtime context optimization (3 PRs), provider abstraction hardening (2 PRs), and modularization of the agent loop.

---

## 4. Community Hot Topics

### Most Active Discussion: [#3790](https://github.com/HKUDS/nanobot/issues/3790) — WebUI Session Content Display Corruption
| Metric | Value |
|--------|-------|
| Comments | **12** (highest in dataset) |
| Status | OPEN |
| Reporter | kxsk-git |
| Affected Version | 0.1.5.post3.2026.05.13 |

**Issue:** After updating to latest 5.13 source, WebUI session content prints garbled/corrupted; requires page refresh to recover.

**Underlying Need:** WebUI reliability is critical for production deployments. The 12-comment thread suggests active troubleshooting but no confirmed fix yet. This correlates with [#3857](https://github.com/HKUDS/nanobot/issues/3857) (bootstrap HTTP 500), indicating **frontend infrastructure instability** in recent builds.

### Emerging: [#3728](https://github.com/HKUDS/nanobot/pull/3728) — Agent Self-Correction Hooks
| Metric | Value |
|--------|-------|
| Open Since | 2026-05-10 |
| Last Updated | 2026-05-16 |

**LoopDetectHook + ReflectRetryHook** addresses two failure modes: tool-call loops and blind retries. This PR has survived 6 days of review — relatively long for this project's velocity — suggesting architectural deliberation. The feature signals community priority on **agent reliability at scale**.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|----------|-------|--------|--------|---------|
| **🔴 High** | [#3790](https://github.com/HKUDS/nanobot/issues/3790) WebUI display corruption | OPEN | None | 12 comments, no resolution; affects daily use |
| **🔴 High** | [#3857](https://github.com/HKUDS/nanobot/issues/3857) Bootstrap failed: HTTP 500 | OPEN | None | Gateway running but FE inaccessible; may relate to [#3790](https://github.com/HKUDS/nanobot/issues/3790) |
| **🟡 Medium** | [#3863](https://github.com/HKUDS/nanobot/issues/3863) WeChat login broken ("version too low") | OPEN | None | China-market critical; WeChat QR scan rejects nanobot's client version |
| **🟡 Medium** | [#3845](https://github.com/HKUDS/nanobot/issues/3845) MiMo thinking via OpenRouter | **CLOSED** | [#3851](https://github.com/HKUDS/nanobot/pull/3851) | Fixed; follow-up [#3867](https://github.com/HKUDS/nanobot/pull/3867) addresses residual issue |
| **🟢 Low** | [#3849](https://github.com/HKUDS/nanobot/issues/3849) CONTRIBUTING.md ruff format drift | CLOSED | N/A | Docs fixed |

**Follow-up Risk:** [#3867](https://github.com/HKUDS/nanobot/pull/3867) reports MiMo **still thinks** despite `reasoning_effort="none"` after [#3851](https://github.com/HKUDS/nanobot/pull/3851) merged — provider abstraction leakage persists.

---

## 6. Feature Requests & Roadmap Signals

| PR/Issue | Feature | Signal Strength | Likely Version |
|----------|---------|-----------------|--------------|
| [#3852](https://github.com/HKUDS/nanobot/pull/3852) | **Signal channel support** (signal-cli via JSON-RPC) | ⭐⭐⭐ High | v0.2.1 or v0.3.0 |
| [#3865](https://github.com/HKUDS/nanobot/pull/3865) | **BM25-lite skill router** — ~60% system prompt reduction | ⭐⭐⭐ High | v0.2.1 |
| [#3846](https://github.com/HKUDS/nanobot/issues/3846) | **Keep skill content in multi-turn conversations** | ⭐⭐⭐ High | Near-term |
| [#3854](https://github.com/HKUDS/nanobot/pull/3854) | **Peer roster exposure** for multi-instance orchestration | ⭐⭐ Medium | v0.3.0 |
| [#3864](https://github.com/HKUDS/nanobot/pull/3864) | **Chinese rate-limit marker recognition** (`访问量过大`) | ⭐⭐ Medium | v0.2.1 |
| [#2172](https://github.com/HKUDS/nanobot/issues/2172) | **Secret reference support** (env files, 1Password, exec) | ⭐⭐⭐ High (closed, implemented) | **Shipped** |

**Predicted v0.2.1 Themes:** Provider resilience (DeepSeek hardening, rate limits), cost/performance optimization (BM25 routing, context deduplication), and channel expansion (Signal).

---

## 7. User Feedback Summary

### Pain Points
| Issue | Frequency | User Profile |
|-------|-----------|--------------|
| WebUI instability (display corruption, bootstrap 500) | 2 open issues | Self-hosters, frontend users |
| WeChat login breakage | 1 issue | China users, enterprise deployments |
| DeepSeek/MiMo provider quirks | 2 PRs + 1 follow-up | API-router users (OpenRouter) |
| Secret management anxiety | 1 issue (resolved) | Security-conscious operators |

### Positive Signals
- **v0.2.0 goal persistence** well-received for long-running tasks
- **Multi-agent mailbox** (#3461) shows demand for orchestration primitives
- **Signal integration** (#3852) indicates community-driven channel expansion

### Satisfaction Gap
Documentation drift ([#3849](https://github.com/HKUDS/nanobot/issues/3849), [#3860](https://github.com/HKUDS/nanobot/pull/3860)) suggests rapid development outpaces docs — mitigated by active maintenance but risks onboarding friction.

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|------|-----|------|-------|
| [#3728](https://github.com/HKUDS/nanobot/pull/3728) LoopDetectHook/ReflectRetryHook | 7 days open | **Architectural review** | Maintainer decision on hook API design |
| [#3846](https://github.com/HKUDS/nanobot/issues/3846) Skill content in multi-turn | 2 days open, 1 👍 | **Design consensus** | Response on skill loading architecture |
| [#3863](https://github.com/HKUDS/nanobot/issues/3863) WeChat login | 1 day open | **External dependency** | WeChat API version update or workaround |
| [#3867](https://github.com/HKUDS/nanobot/pull/3867) OpenRouter reasoning.effort follow-up | 1 day open | **Regression risk** | Verification against ClearPlume's reported failure mode |

**Maintainer Attention Recommended:** [#3728](https://github.com/HKUDS/nanobot/pull/3728) has been open longest relative to project's typical same-day merge velocity — may indicate unresolved design questions about agent self-correction hooks.

---

*Digest generated from HKUDS/nanobot GitHub activity on 2026-05-17. All links: https://github.com/HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-17

## 1. Today's Overview

Hermes Agent shows **very high development velocity** with 50 issues and 50 PRs touched in the last 24 hours, alongside the release of v0.14.0 — a major milestone dubbed "The Foundation Release." The project is in an **active stabilization phase** post-release: 29 PRs were merged/closed versus 21 remaining open, indicating aggressive triage. However, **P1 bugs are clustering around memory persistence, session management, and provider fallbacks**, suggesting the self-modifying agent architecture is encountering production-scale edge cases. The community is notably engaged with deeply technical feature discussions around agent identity, provenance, and multi-user isolation.

---

## 2. Releases

### [v0.14.0 — "The Foundation Release"](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.16) (2026-05-16)

| Metric | Value |
|--------|-------|
| Commits since v0.13.0 | 808 |
| Merged PRs | 633 |
| Files changed | 1,393 |
| Lines inserted | 165,061 |
| Issues closed | 545 (12 P0, 50 P1) |
| Community contributors | 215 |

**Key theme:** Hermes now "installs and runs an" [incomplete in source — likely referring to self-installing/self-improving capabilities]

**Breaking changes / migration notes:** Not explicitly documented in release notes, but [Issue #26804](https://github.com/NousResearch/hermes-agent/issues/26804) reveals that `hermes update` and `hermes config migrate` **silently strip custom `.env` variables** — users should back up `~/.hermes/.env` before upgrading.

---

## 3. Project Progress

### Merged/Closed PRs Today (29 total; notable items)

| PR | Author | Summary | Impact |
|----|--------|---------|--------|
| [#27185](https://github.com/NousResearch/hermes-agent/pull/27185) | teknium1 | **Fix interactive CLI fallback on Codex 429** — resets `_fallback_index` at turn start | Fixes P1 bug [#20465](https://github.com/NousResearch/hermes-agent/issues/20465); interactive sessions now match cron behavior |
| [#27184](https://github.com/NousResearch/hermes-agent/pull/27184) | teknium1 | **Surface xAI error SSE frames** in Codex fallback stream | Eliminates cryptic `RuntimeError` retries for Grok 4.3/4.20 quota failures |
| [#27181](https://github.com/NousResearch/hermes-agent/pull/27181) | cat-thats-fat | **Handle Codex auxiliary stream read failures** (`Bad file descriptor`) | Adds retry with non-streaming fallback |
| [#27189](https://github.com/NousResearch/hermes-agent/pull/27189) / [#19951](https://github.com/NousResearch/hermes-agent/pull/19951) | teknium1 | **Strip historical media after context compression** | Fixes image-heavy conversations wedging after compression; port from Kilo-Org/kilocode |
| [#27188](https://github.com/NousResearch/hermes-agent/pull/27188) / [#19631](https://github.com/NousResearch/hermes-agent/pull/19631) | teknium1 | **New `hermes send` CLI subcommand** | Pipes script/CI output to any configured messaging platform |
| [#27187](https://github.com/NousResearch/hermes-agent/pull/27187) / [#27161](https://github.com/NousResearch/hermes-agent/pull/27161) | teknium1 / guillaumemeyer | **Surface 46 hidden plugins** in `hermes plugins list` | Fixes CLI discoverability for namespaced plugins (langfuse, model-providers, etc.) |
| [#27130](https://github.com/NousResearch/hermes-agent/pull/27130) / [#27173](https://github.com/NousResearch/hermes-agent/pull/27173) | zccyman | **ACP `/model` flag parsing** (`--provider`, `--global`) | Fixes silently ignored flags in ACP clients (Scarf, Zed) |
| [#26362](https://github.com/NousResearch/hermes-agent/pull/26362) | Jesse-Rogers-0852 | **Summarize persisted JSON tool previews** | Reduces token waste from oversized JSON results while preserving metadata |
| [#27190](https://github.com/NousResearch/hermes-agent/pull/27190) | teknium1 | **Isolate background review fork from external memory plugins** | Prevents honcho/mem0/supermemory from ingesting harness prompts |

**Pattern:** Heavy focus on **fallback reliability**, **CLI discoverability**, and **context compression safety** — all v0.14.0 stabilization work.

---

## 4. Community Hot Topics

### Most Active Issues by Discussion Depth

| Issue | Comments | Topic | Underlying Need |
|-------|----------|-------|---------------|
| [#11692](https://github.com/NousResearch/hermes-agent/issues/11692) | 11 | **Receipts for self-improving agents**: provenance/attribution of skill versions | **Governance and auditability** — users need to trust what a self-modifying system has changed and why; touches on AI safety, reproducibility, and liability |
| [#21574](https://github.com/NousResearch/hermes-agent/issues/21574) | 6 | **Per-user agent isolation and identity-based permissions** | **Multi-tenant security** — real incident of prompt injection via Telegram gateway impersonation; need for sandboxing in shared deployments |
| [#20465](https://github.com/NousResearch/hermes-agent/issues/20465) | 4 | ~~Codex 429 fallback inconsistency~~ **FIXED** | Reliability parity between interactive and batch modes |
| [#13484](https://github.com/NousResearch/hermes-agent/issues/13484) | 4 | **Native Google Cloud Vertex AI provider** | Enterprise GCP adoption blocked by missing OAuth/service-account auth machinery |
| [#24443](https://github.com/NousResearch/hermes-agent/issues/24443) | 4 | **MiMo reasoning model `reasoning_content` preservation** | Support for Chinese reasoning models' chat-history requirements |
| [#5563](https://github.com/NousResearch/hermes-agent/issues/5563) | 4 | **Production memory corruption field report** | Heavy user's comprehensive critique: token waste, `state.db` corruption, environment hallucination — **systemic memory architecture concerns** |

**Analysis:** The community is pushing Hermes from "powerful single-user tool" toward **enterprise-ready, multi-user, auditable platform** — but the self-modification feature that differentiates Hermes is creating novel governance demands.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **P1** | [#5563](https://github.com/NousResearch/hermes-agent/issues/5563) | Memory persistence, token waste, `state.db` corruption, environment hallucination — production field report | **Open** — long-running, needs architectural response |
| **P1** | [#25585](https://github.com/NousResearch/hermes-agent/issues/25585) | Failed summaries discard conversation context (destructive compression) | **Open** — related to [#27189](https://github.com/NousResearch/hermes-agent/pull/27189) fix for media stripping, but core issue remains |
| **P1** | [#27033](https://github.com/NousResearch/hermes-agent/issues/27033) | Tool result contamination causes persistent HTTP 400 error loops | **Open** — error persistence poisons session database |
| **P1** | [#26804](https://github.com/NousResearch/hermes-agent/issues/26804) | `.env` file silently stripped during `hermes update` | **Open** — data loss on upgrade |
| **P1** | [#27004](https://github.com/NousResearch/hermes-agent/issues/27004) | Full test suite broken on main: cascading failures + 600s timeout | **Open** — CI/CD reliability compromised |
| **P1** | [#27166](https://github.com/NousResearch/hermes-agent/issues/27166) | Telegram DM topic response routed to "All Messages" after session split | **Open** — gateway routing regression |
| **P1** | [#27100](https://github.com/NousResearch/hermes-agent/issues/27100) | v0.14.0 Docker: Telegram bot fails with `--user` flag | **Open** — containerization regression |
| **P1** | [#27012](https://github.com/NousResearch/hermes-agent/issues/27012) | `send_message` fails to deliver to Telegram forum topics | **Open** — gateway addressing bug |
| **P2** | [#27038](https://github.com/NousResearch/hermes-agent/issues/27038) | Codex Responses API rejects replayed assistant messages with long `id` fields | **Open** — API compatibility |
| **P2** | [#24443](https://github.com/NousResearch/hermes-agent/issues/24443) | MiMo reasoning content not preserved in chat history | **Open** — model support gap |
| **P2** | [#27020](https://github.com/NousResearch/hermes-agent/issues/27020) | Gateway `/v1/chat/completions` bypasses `image_routing.py` | **Closed** — fixed in today's triage |

**Stability assessment:** **Concerning cluster of P1s** around session lifecycle (compression, splitting, restart), Telegram gateway routing, and upgrade safety. The v0.14.0 release appears to have introduced or exposed **Docker/container regressions** and **session state fragility**. Test suite failures compound verification difficulty.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Feature | Likelihood in Next Version | Rationale |
|----------|---------|---------------------------|-----------|
| [#27155](https://github.com/NousResearch/hermes-agent/pull/27155) | **DAG context engine** (opt-in beta) | **High** — already in PR | Major architectural addition for context management; opt-in safety |
| [#27183](https://github.com/NousResearch/hermes-agent/pull/27183) | **Per-user `USER.md` isolation in MemoryStore** | **High** — PR open | Directly addresses [#11430](https://github.com/NousResearch/hermes-agent/issues/11430), [#21574](https://github.com/NousResearch/hermes-agent/issues/21574) multi-user demand |
| [#27174](https://github.com/NousResearch/hermes-agent/pull/27174) | **Live TUI session switcher** | **Medium-High** — PR open | Quality-of-life for power users; complements v0.14.0 foundation |
| [#27177](https://github.com/NousResearch/hermes-agent/pull/27177) | **Smart `busy_input_mode` with LLM intent routing** | **Medium** — PR open | Interesting but adds complexity; may defer for stability |
| [#13484](https://github.com/NousResearch/hermes-agent/issues/13484) | **Google Cloud Vertex AI native support** | **Medium** — enterprise demand | Blocked on OAuth machinery; significant auth work |
| [#11692](https://github.com/NousResearch/hermes-agent/issues/11692) | **Receipts/provenance for self-improving skills** | **Lower** — architectural | Fundamental to Hermes differentiation but requires design consensus |
| [#21574](https://github.com/NousResearch/hermes-agent/issues/21574) | **Full per-user agent isolation + identity permissions** | **Medium** — security critical | Partial via [#27183](https://github.com/NousResearch/hermes-agent/pull/27183); full isolation is larger |

---

## 7. User Feedback Summary

### Pain Points (verbatim themes)

| Theme | Evidence | Severity |
|-------|----------|----------|
| **"My girlfriend prompt-injected me"** — identity spoofing via Telegram | [#21574](https://github.com/NousResearch/hermes-agent/issues/21574) | 🔴 Critical — trust/safety |
| **Memory corruption and hallucination in production** | [#5563](https://github.com/NousResearch/hermes-agent/issues/5563) | 🔴 Critical — data integrity |
| **Silent data loss on upgrade** | [#26804](https://github.com/NousResearch/hermes-agent/issues/26804) | 🔴 Critical — operational |
| **Inconsistent fallback behavior** (interactive vs. cron) | [#20465](https://github.com/NousResearch/hermes-agent/issues/20465) | 🟡 High — reliability |
| **Model switching changes behavior unpredictably** | [#27103](https://github.com/NousResearch/hermes-agent/issues/27103) | 🟡 High — determinism |
| **Redundant skill proliferation** | [#27103](https://github.com/NousResearch/hermes-agent/issues/27103) | 🟡 High — maintainability |
| **Headless OAuth impossible** (Supergrok/xAI) | [#26563](https://github.com/NousResearch/hermes-agent/issues/26563) | 🟡 High — deployment flexibility |

### Positive Signals
- [#5563](https://github.com/NousResearch/hermes-agent/issues/5563) author calls Hermes "the most capable CLI AI agent I've used" despite extensive critique
- Heavy daily production use for software development
- Skill system, persistent memory, session search, delegate_task subagents, gateway architecture praised as differentiated

**Satisfaction paradox:** Users are **deeply committed** to Hermes' unique capabilities but **frustrated by reliability at scale**. The project has achieved "best-in-class" feature perception but risks losing production users to stability issues.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (long-unanswered or structurally important)

| Issue | Age | Why It Needs Attention |
|-------|-----|------------------------|
| [#11692](https://github.com/NousResearch/hermes-agent/issues/11692) | ~1 month (Apr 17) | **Foundational governance question** for self-improving AI; 11 comments, no maintainer roadmap response; blocks enterprise adoption |
| [#5563](https://github.com/NousResearch/hermes-agent/issues/5563) | ~6 weeks (Apr 6) | **Most detailed production field report**; author invested significant time; no visible architectural response; memory system credibility |
| [#11430](https://github.com/NousResearch/hermes-agent/issues/11430) | ~1 month (Apr 17) | Per-user memory isolation; partially addressed by new PR [#27183](https://github.com/NousResearch/hermes-agent/pull/27183) but needs integration plan |
| [#13484](https://github.com/NousResearch/hermes-agent/issues/13484) | ~4 weeks (Apr 21) | Enterprise GCP blocker; 4 👍; auth architecture decision needed |
| [#14907](https://github.com/NousResearch/hermes-agent/issues/14907) | ~3 weeks (Apr 24) | TUI usability regression; affects core interaction mode |

### PRs At Risk of Stagnation

| PR | Risk |
|----|------|
| [#27155](https://github.com/NousResearch/hermes-agent/pull/27155) DAG context engine | Large architectural PR; needs review bandwidth to avoid bit-rot |
| [#27028](https://github.com/NousResearch/hermes-agent/issues/27028) Runtime god object refactor | Structural "smell" audit; no assignee; high leverage but disruptive |

---

**Overall Project Health:** 🟡 **Strong momentum, stabilization stress**

Hermes Agent is executing at **top-tier open-source velocity** (215 contributors, 808 commits in one cycle) with genuinely novel capabilities. However, v0.14.0's "Foundation Release" branding is being tested by **foundational stability issues**: memory corruption, session lifecycle fragility, and upgrade safety. The project needs a **stability sprint** to match its feature ambition, particularly for multi-user and production deployments.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-17

## 1. Today's Overview

PicoClaw shows **moderate community activity** with 5 issues and 4 PRs updated in the last 24 hours, plus a new nightly release. The project appears healthy with ongoing development: a significant WeChat multi-account feature is being actively iterated (original PR closed, refined version opened same day), UI improvements for code blocks are proposed, and a messaging bug fix is pending review. However, **stale labels on multiple items** suggest some community contributions may be awaiting maintainer bandwidth. The nightly build cadence indicates continuous integration is active.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| [v0.2.8-nightly.20260516.0df050ff](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) | Nightly | Automated build from `main` branch; may be unstable. No specific changelog beyond commit comparison. |

**⚠️ Caution:** Nightly builds are explicitly marked unstable. Production users should remain on v0.2.8 stable.

---

## 3. Project Progress

### Merged/Closed Today

| PR | Status | Summary |
|----|--------|---------|
| [#2881](https://github.com/sipeed/picoclaw/pull/2881) | **CLOSED** | Initial WeChat multi-account support — superseded by [#2883](https://github.com/sipeed/picoclaw/pull/2883) |

### Key Advancement
- **WeChat multi-account configuration** is being actively refined. The closed PR [#2881](https://github.com/sipeed/picoclaw/pull/2881) (AI-generated with Claude Code, contributor-modified) was replaced by [#2883](https://github.com/sipeed/picoclaw/pull/2883) same-day, suggesting rapid iteration based on review feedback. The new implementation uses dynamic `weixin_*` config key pattern matching.

---

## 4. Community Hot Topics

| Rank | Item | Activity | Analysis |
|------|------|----------|----------|
| 🔥 1 | [#2421](https://github.com/sipeed/picoclaw/issues/2421) Email as native channel | 6 comments, 1 👍, stale | **Longest-running active request** (created April 8). Corporate/scientific users need email as primary channel — indicates PicoClaw's chat-centric design may exclude enterprise environments where Telegram/Discord are blocked. Underlying need: **universal communication accessibility**. |
| 🔥 2 | [#2742](https://github.com/sipeed/picoclaw/issues/2742) Gateway starts with no channels in v0.2.8 | 4 comments | **Active regression** — Telegram config parsing failure on fresh installs. User provided detailed environment data; no fix PR yet. |
| 🔥 3 | [#2782](https://github.com/sipeed/picoclaw/issues/2782) MCP Streamable HTTP transport | 3 comments, **CLOSED** | Protocol compatibility issue resolved or deemed out of scope? Closure without merge suggests may need follow-up. |

---

## 5. Bugs & Stability

| Severity | Issue | Details | Fix Status |
|----------|-------|---------|------------|
| 🔴 **High** | [#2742](https://github.com/sipeed/picoclaw/issues/2742) Gateway starts with no channels | v0.2.8 regression: Telegram enabled in config but gateway reports zero channels. Go 1.25.9, Ubuntu 22.04. Blocks basic functionality. | **NO FIX PR** — 15 days old |
| 🟡 **Medium** | [#2880](https://github.com/sipeed/picoclaw/issues/2880) Android permission denied on "Start Service" | v0.1.3 on Android 10: `Downloads/picoclaw` directory creation fails despite storage permissions. Likely scoped storage (Android 10+ policy) incompatibility in legacy version. | **NO FIX PR** — fresh report |
| 🟡 **Medium** | [#2835](https://github.com/sipeed/picoclaw/pull/2835) Final reply suppressed after interim message | Agent messaging logic bug: progress updates via `message` tool prevent final reply delivery. | **PR OPEN** — pending review (stale) |

**Stability Assessment:** v0.2.8 has a confirmed channel initialization regression affecting new deployments. Android legacy version (0.1.3) shows storage API debt. The messaging fix PR [#2835](https://github.com/sipeed/picoclaw/pull/2835) addresses UX-breaking behavior but has stalled.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Version | Rationale |
|---------|----------|---------------------------|-----------|
| **WeChat multi-account support** | [#2883](https://github.com/sipeed/picoclaw/pull/2883) | **HIGH** | Active same-day iteration, contributor responsive to feedback, large Chinese user base |
| **Chat UI code block enhancements** | [#2882](https://github.com/sipeed/picoclaw/pull/2882) | **MEDIUM** | Clean UI polish, low risk, same-day submission |
| **Email native channel** | [#2421](https://github.com/sipeed/picoclaw/issues/2421) | **LOW-MEDIUM** | 6-week-old request, stale label, but unique enterprise use case; may require significant channel architecture work |
| **MCP Streamable HTTP** | [#2782](https://github.com/sipeed/picoclaw/issues/2782) | **UNCERTAIN** | Closed without clear resolution; protocol evolution pressure from MCP ecosystem |

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|-------|----------|----------|
| **Deployment fragility** | [#2742](https://github.com/sipeed/picoclaw/issues/2742) — zero channels on startup | Blocks new users |
| **Upgrade path unclear** | [#2834](https://github.com/sipeed/picoclaw/issues/2834) — "need tutorial how upgrade to new version (remove old)" | Documentation gap |
| **Android legacy support** | [#2880](https://github.com/sipeed/picoclaw/issues/2880) — permission model outdated | Platform debt |
| **Enterprise accessibility** | [#2421](https://github.com/sipeed/picoclaw/issues/2421) — email dependency for restricted environments | Market expansion blocker |

### Satisfaction Signals
- **WeChat ecosystem investment**: Multiple PRs for WeChat indicate strong Chinese community engagement
- **Active nightly builds**: Maintained CI/CD suggests project sustainability

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#2421](https://github.com/sipeed/picoclaw/issues/2421) Email channel | 39 days | **High** — enterprise segment blocked | Maintainer decision: accept/reject/roadmap |
| [#2835](https://github.com/sipeed/picoclaw/pull/2835) Fix final reply suppression | 8 days, stale | **Medium** — UX regression | Code review and merge |
| [#2834](https://github.com/sipeed/picoclaw/issues/2834) Upgrade tutorial | 8 days, stale | **Medium** — onboarding friction | Documentation PR or wiki update |

**Maintainer Attention Required:** Three stale-tagged items suggest either label automation or genuine review backlog. The email channel request in particular represents a strategic decision point for PicoClaw's target market scope.

---

*Digest generated from GitHub activity 2026-05-16. All links: [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-17

## 1. Today's Overview

NanoClaw experienced **elevated activity** on 2026-05-16 with **15 tracked items** (6 issues, 9 PRs) updated in a 24-hour period, indicating sustained development momentum. No new release was cut, suggesting the project is in an active integration phase rather than a shipping cadence. The contributor base appears broad with **9 distinct authors** across issues and PRs, reflecting healthy community distribution. However, the **5:1 open-to-closed ratio** for PRs and **5:1 open-to-closed ratio** for issues signals a growing review backlog that may strain maintainer bandwidth. The dominant themes are **container infrastructure resilience**, **messaging reliability**, and **health monitoring/observability**—core concerns for a production AI agent platform.

---

## 2. Releases

**None** — No releases published in the last 24 hours. The most recent merged PR (#2509) was a changelog documentation fix, suggesting v2.0.63 may be the current stable or a pending release candidate.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary | Link |
|:---|:---|:---|:---|
| **#2515** | mkeizer | **feat(telegram): add inline keyboard buttons support** — Adds `InlineButton`/`SendMessageOptions` types, extends `send_message` MCP tool with optional `buttons` parameter, pipes through IPC to Telegram channel using Grammy's `InlineKeyboard` | [PR #2515](https://github.com/nanocoai/nanoclaw/pull/2515) |
| **#2509** | glifocat | **docs(changelog): align v2.0.63 rollup line with RELEASING.md voice** — Minor documentation formatting fix | [PR #2509](https://github.com/nanocoai/nanoclaw/pull/2509) |

### Features Advanced (Open PRs)

- **Health monitoring system maturation** (PRs #2498, #2505, #2508): alexli-77 is building a three-layer observability stack—silent-fail detection → OAuth auto-refresh → persistent token status table with proactive 5-minute sweeps. This represents a significant investment in production reliability.
- **CLI infrastructure hardening** (PR #2510): glifocat fixing inbound.db hydration on approval-path destination adds, addressing a bootstrapping edge case.
- **Skill system version safety** (PR #2507): meeech preventing v1 skill branches from appearing as merge candidates on v2 installs, reducing operator footguns.
- **WhatsApp adapter UX** (PR #2469): dwudwu improving recovery guidance for decrypt failures and 401 logout scenarios.

---

## 4. Community Hot Topics

### Most Active Discussion

| Rank | Item | Comments/👍 | Analysis |
|:---|:---|:---|:---|
| **#1** | **Issue #957** — Podman as Docker alternative | **8 comments, 6 👍** | [Issue #957](https://github.com/nanocoai/nanoclaw/issues/957) |

**Underlying need:** Container runtime diversity for security-conscious and macOS/Linux users. The high engagement (8 comments, 6 reactions) over a 2+ month period indicates sustained demand. Podman's daemonless, rootless model appeals to enterprise deployments where Docker's privileged daemon is a security barrier. **Signal for maintainers:** Documentation-only fix with high community value; low implementation cost, high goodwill return.

### Emerging High-Impact Threads (Zero Comments but Critical)

| Item | Risk Level | Link |
|:---|:---|:---|
| **Issue #2506** — `send_message` dedup silently drops responses | **Critical** | [Issue #2506](https://github.com/nanocoai/nanoclaw/issues/2506) |
| **Issue #2516** — Stale `outbound.db-journal` after SIGKILL | **High** | [Issue #2516](https://github.com/nanocoai/nanoclaw/issues/2516) |

Both filed by **mshirel** with detailed root-cause analysis. The dedup bug (#2506) has a **60-second timing window** affecting core messaging reliability—silent failures are worst-case for operator trust. The journal recovery issue (#2516) exposes a crash-consistency gap in Bun/SQLite integration under container orchestration kills.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? | Link |
|:---|:---|:---|:---|:---|
| **🔴 Critical** | **#2506** | `send_message` dedup logic silently drops agent responses when turns complete <60s apart or during streaming follow-ups; client timeout with no error surface | **No** | [Issue #2506](https://github.com/nanocoai/nanoclaw/issues/2506) |
| **🟠 High** | **#2516** | SIGKILL at ceiling threshold leaves `outbound.db-journal`; host opens DB read-only, causing permanent message queue stall until manual intervention | **No** | [Issue #2516](https://github.com/nanocoai/nanoclaw/issues/2516) |
| **🟠 High** | **#2513** | Colima + OneCLI CA cert bind-mount becomes empty dir; all HTTPS fails with false "self-signed certificate" error, agent runs to completion with empty output | **No** | [Issue #2513](https://github.com/nanocoai/nanoclaw/issues/2513) |
| **🟡 Medium** | **#2514** | Setup hangs on `needrestart` whiptail dialog waiting for interactive confirmation; breaks unattended/automated installs | **No** | [Issue #2514](https://github.com/nanocoai/nanoclaw/issues/2514) |
| **🟡 Medium** | **#2512** | Default Ubuntu install: OneCLI container cannot resolve `postgres:5432` on Docker bridge network; bootstrap migration fails | **No** | [Issue #2512](https://github.com/nanocoai/nanoclaw/issues/2512) |

**Stability assessment:** Five infrastructure-related bugs filed in a single day, all without linked fix PRs, suggests **container/platform hardening is the current critical path**. The dedup bug (#2506) is particularly concerning as it represents a **regression in core messaging semantics**—silent data loss violates the platform's core value proposition.

---

## 6. Feature Requests & Roadmap Signals

| Source | Feature | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **PR #2515** (merged) | Telegram inline keyboard buttons | **Shipped** | Already merged; enables richer interactive agent UIs |
| **PR #2498, #2505, #2508** (stack) | Health monitor + OAuth refresh + token status | **High** | Three-layer PR stack by same author, actively rebased; addresses production readiness gap |
| **PR #2497** | Agent network feature | **Medium** | Marked as feature skill, follows guidelines; significant scope, may need review cycles |
| **Issue #957** | Podman documentation support | **High** | Low cost, high demand, 6+ months of community interest |
| **PR #2510** | CLI inbound.db hydration fix | **Medium-High** | Bugfix with clear scope, follows guidelines |

**Predicted v2.0.64 or v2.1.0 themes:** Production observability (health monitor stack), messaging reliability fixes (dedup, journal recovery), and platform runtime diversity (Podman, Colima compatibility).

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Silent failures** | #2506 (dropped responses), #2498 motivation (missed failures) | Critical — breaks trust in agent reliability |
| **Container/platform fragility** | #2512 (DNS resolution), #2513 (Colima certs), #2514 (setup hang), #2516 (SIGKILL corruption) | High — deployment experience is rough on non-Docker Desktop environments |
| **Recovery complexity** | #2516 (manual journal cleanup), #2469 (bad recovery guidance for WhatsApp) | Medium — operators lack self-healing paths |

### Use Cases Emerging

- **Enterprise/secure environments:** Podman preference (#957), CA certificate injection (#2513)
- **Unattended/automated deployment:** Needrestart hang (#2514) blocks CI/CD pipelines
- **High-throughput messaging:** Sub-60s turnarounds (#2506) indicate latency-sensitive workloads

### Satisfaction Signals

- Issue #957's opening: *"thank you for maintaining this project. It is very useful and well designed"* — baseline goodwill exists
- Active PR contributions from 9+ authors suggest engaged contributor base

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| **Issue #957** | **67 days** (2026-03-11) | Documentation debt eroding enterprise adoption | Maintainer decision: accept docs PR or close with rationale |
| **PR #2497** (Agent Network) | 2 days, but **significant scope** | Large feature PR may stall in review queue | Early maintainer triage to scope review commitment |
| **PR #2469** (WhatsApp fixes) | 2 days | Small, targeted fix; risk of being buried | Quick win available if prioritized |

**Review bottleneck indicator:** 7 open PRs vs. 2 closed suggests **~3.5:1 review demand ratio**. The health monitor stack (PRs #2498→#2505→#2508) by alexli-77 is particularly at risk of cascading rebase conflicts if not merged sequentially.

---

*Digest generated from NanoClaw GitHub activity 2026-05-16. All links reference `github.com/nanocoai/nanoclaw`.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-17

## 1. Today's Overview

IronClaw shows **very high development velocity** with 32 PRs and 15 issues updated in the last 24 hours, indicating active sprint execution toward the "Reborn" architecture cutover. The project is in a **pre-release stabilization phase** with zero new releases today, but a release PR (#3708) is open bumping `ironclaw` from 0.24.0 to 0.28.2 and `ironclaw_common` from 0.4.2 to 0.5.0 with noted API breaking changes. The dominant theme is **Reborn product-live workflow maturation** — stacked PRs from core contributors are systematically building test harnesses, capability adapters, and composition roots to enable the new runtime. Community engagement is moderate with limited external reactions (most issues/PRs at 0-1 👍), suggesting this remains a core-team-driven effort with limited external contributor adoption yet.

---

## 2. Releases

**No new releases published today.**

However, release preparation is active:
- **[PR #3708](https://github.com/nearai/ironclaw/pull/3708)** (open): Automated release PR targeting `ironclaw` **0.28.2** and `ironclaw_common` **0.5.0**
  - **Breaking change in `ironclaw_common`**: Enum variant discriminant changes detected
  - Full changelog pending merge

---

## 3. Project Progress

### Merged/Closed PRs (15 total, key items):

| PR | Description | Significance |
|:---|:---|:---|
| **[#3712](https://github.com/nearai/ironclaw/pull/3712)** | fix(reborn): trust result refs with durable replies | **Critical loop-exit fix** — prevents valid completions from being rejected when tool result refs accompany assistant replies |
| **[#3710](https://github.com/nearai/ironclaw/pull/3710)** | test(reborn): add product-live planned AgentLoop harness | Test infrastructure for product-live path (superseded by #3711) |
| **[#3709](https://github.com/nearai/ironclaw/pull/3709)** | docs(api): document the Responses API end-to-end | Major documentation coverage for external API consumers |
| **[#3122](https://github.com/nearai/ironclaw/pull/3122)** | feat(web): support externally-provided tools in Responses API | **Engine v2 native tool calls** — replaces prompt-level fence protocol |
| **[#3588](https://github.com/nearai/ironclaw/pull/3588)** | feat(gateway): add logs download button | UX improvement; closes related issue #3534 |
| **[#3688](https://github.com/nearai/ironclaw/pull/3688)** | refactor(reborn): project ProductAdapter from single ExtensionManifestV2 | Manifest consolidation — reduces configuration surface |
| **[#3691](https://github.com/nearai/ironclaw/pull/3691)** | feat(product-workflow): add WebUI service facade | Security-hardened facade consolidation |

### Key Feature Advancement:

The **Reborn product-live runtime** is approaching production readiness through a carefully stacked PR series:
- **Foundation**: [#3714](https://github.com/nearai/ironclaw/pull/3714) (adapter bundle) → [#3715](https://github.com/nearai/ironclaw/pull/3715) (capability IO adapters) → [#3716](https://github.com/nearai/ironclaw/pull/3716) (builtin tool path test)
- **Testing**: [#3713](https://github.com/nearai/ironclaw/pull/3713) adds first capability/tool path coverage through product-live harness

---

## 4. Community Hot Topics

### Most Active by Engagement:

| Item | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|
| **[#3692](https://github.com/nearai/ironclaw/issues/3692)** | 4 comments | Policy-gated personal identity and heartbeat prompt context | **Governance/control**: Operators need configurable identity boundaries for compliance and safety |
| **[#3036](https://github.com/nearai/ironclaw/issues/3036)** | 4 comments, 1 👍 | Configuration-as-Code: tenant blueprints and use-case harnesses | **Operational scalability**: Eliminate manual env/file editing; enable GitOps-style deployments |
| **[#3616](https://github.com/nearai/ironclaw/issues/3616)** | 4 comments | Wire production app/gateway/channel ingress to product live workflow | **Production cutover confidence**: Need validated path from test harness to real traffic |
| **[#3698](https://github.com/nearai/ironclaw/issues/3698)** | 2 comments | Build test/dry-run product-live runtime harness | **Risk reduction**: Prove system before cutting over live traffic |

### Analysis:

The conversation cluster around **issues #3616 → #3698 → #3700 → #3699** reveals a **deliberate staged rollout strategy** — web first, then CLI/Telegram/webhooks. This suggests mature engineering discipline but also indicates **channel parity will lag**, potentially fragmenting user experience across platforms.

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix Status |
|:---|:---|:---|:---|
| **🔴 High** | **[#3701](https://github.com/nearai/ironclaw/issues/3701)** | v0.28.2 macOS prebuilt: gateway never binds despite config + doctor reporting enabled | **No fix PR identified** — affects release candidate |
| **🟡 Medium** | **[#3447](https://github.com/nearai/ironclaw/issues/3447)** | Nightly E2E failed (ongoing since 2026-05-10) | **No fix PR identified** — CI reliability concern |
| **🟡 Medium** | **[#3620](https://github.com/nearai/ironclaw/issues/3620)** | Reborn: convert provider tool calls into ParentLoopOutput::CapabilityCalls — production gateway rejects tool calls | Fix in progress via stacked PRs (#3715, #3716) |
| **🟢 Low** | **[#3622](https://github.com/nearai/ironclaw/issues/3622)** | Verify internal tool-result completion evidence and result refs | Fix likely in #3712 (merged) |

### Stability Assessment:

- **Release blocker risk**: #3701 (macOS gateway binding failure) directly impacts the 0.28.2 release PR (#3708)
- **CI health**: Persistent nightly E2E failures (#3447) with no visible resolution effort undermines release confidence
- **Reborn loop evidence**: #3712's merge addresses a rejection bug, but the broader evidence adapter needs validation (#3622)

---

## 6. Feature Requests & Roadmap Signals

### From Open Issues (likely near-term):

| Feature | Issue | Predicted Version | Rationale |
|:---|:---|:---|:---|
| **TOML + provider catalog boot config** | [#3704](https://github.com/nearai/ironclaw/pull/3704) (PR open) | 0.29.0 or next | Binary bootstrapping essential for standalone Reborn deployment |
| **Configuration-as-Code substrate** | [#3036](https://github.com/nearai/ironclaw/issues/3036), [#3703](https://github.com/nearai/ironclaw/pull/3703) | 0.30.0+ | PR #3703 explicitly futureproofs surface for this epic |
| **Web chat → product-live routing** | [#3700](https://github.com/nearai/ironclaw/issues/3700) [Deferred] | Post-0.28.2 | Deferred pending #3698/#3616 completion |
| **Multi-channel product-live roll** | [#3699](https://github.com/nearai/ironclaw/issues/3699) [Deferred] | Post-web validation | CLI/Telegram/webhooks explicitly sequenced after web proves out |

### Architectural Signals:

- **Universal FS dispatch** (#3679, +15K/-929 LOC): Major infrastructure investment for cross-platform file operations
- **Host-owned ingress contracts** (#3683): Formalized API boundaries suggest enterprise/multi-tenant preparation

---

## 7. User Feedback Summary

### Explicit Pain Points:

| Issue | Reporter | Pain Point | Use Case Impact |
|:---|:---|:---|:---|
| **[#3701](https://github.com/nearai/ironclaw/issues/3701)** | sergeiest | macOS prebuilt completely non-functional for gateway | **macOS developers/operators blocked** |
| **[#3534](https://github.com/nearai/ironclaw/issues/3534)** → closed | sergeiest | No log download tool for debugging | **Operational troubleshooting friction** (addressed in #3588) |

### Inferred from Issue Patterns:

- **Configuration complexity**: #3036's motivation statement — "hand-edit a mix of `.env`, workspace docs, settings JSON, extension installs, and runtime flags" — reveals **significant operator burden** in current system
- **Reborn migration anxiety**: Multiple "deferred" issues (#3699, #3700) with explicit sequencing suggests **fear of production regression** driving conservative rollout
- **Limited external validation**: Near-zero 👍 reactions on most issues suggests **small active user base** or issues not yet reaching users

---

## 8. Backlog Watch

### Needs Maintainer Attention:

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| **[#3447](https://github.com/nearai/ironclaw/issues/3447)** Nightly E2E failed | 7 days | **Release confidence** | Investigate failure root cause; may block 0.28.2 |
| **[#3026](https://github.com/nearai/ironclaw/issues/3026)** Config-driven production composition root | 19 days | **Reborn cutover blocker** | P0-labeled; needs resolution for production readiness |
| **[#3036](https://github.com/nearai/ironclaw/issues/3036)** Configuration-as-Code epic | 19 days | **Operational scalability** | Has active PR (#3703) but needs epic-level tracking visibility |
| **[#3701](https://github.com/nearai/ironclaw/issues/3701)** macOS gateway binding | 1 day | **Platform parity** | Urgent investigation before 0.28.2 release |

### PRs Stalled/Risking Conflict:

- **[#3679](https://github.com/nearai/ironclaw/pull/3679)** (XL, DB migration): 15K+ LOC change with "undefined" comments — high review burden, merge conflict risk with ongoing Reborn stack
- **[#3683](https://github.com/nearai/ironclaw/pull/3683)** (XL, external contributor): Host ingress contracts — may need maintainer bandwidth for review given scope

---

## Project Health Summary

| Metric | Assessment |
|:---|:---|
| **Velocity** | ⬆️ Very high (47 items updated/24h) |
| **Release readiness** | ⚠️ At risk — macOS blocker (#3701), persistent E2E failures (#3447) |
| **Code quality investment** | ⬆️ Strong — extensive test harnesses, boundary tests, staged PRs |
| **External contribution** | ⬇️ Low — dominated by core team (serrrfirat, henrypark133, ilblackdragon) |
| **Documentation** | ⬆️ Improving — Responses API docs merged (#3709) |
| **Operational maturity** | ⬆️ Advancing — config-as-code, ingress contracts, manifest consolidation in flight |

**Bottom line**: IronClaw is executing a complex architectural migration with professional discipline, but release confidence for 0.28.2 depends on resolving the macOS gateway binding failure and nightly E2E instability before merge of #3708.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-17

## 1. Today's Overview

LobsterAI shows **moderate-to-high development velocity** with 22 PRs updated in the last 24 hours and a 10/12 merged-to-open ratio, indicating active integration work. The project is in a **release consolidation phase** following the 2026.5.15 release train merge, with multiple UI optimization and model-specific fixes landing. However, **community engagement remains low** — zero reactions on all items and minimal comment activity suggests limited external contributor participation. A single active issue regarding desktop app connectivity problems highlights potential stability concerns in the packaged application versus the IM Bot deployment mode. The presence of 8 stale PRs from March 25 still awaiting review indicates a **backlog accumulation risk** that may need maintainer attention.

---

## 2. Releases

**No new releases** published today.

The most recent release activity was **PR #1998** ([`netease-youdao/LobsterAI#1998`](https://github.com/netease-youdao/LobsterAI/pull/1998)), a release train merge for **app version 2026.5.16** (from integration branch `release/2026.5.15`), which was closed today. This bundled multiple area changes including artifacts UX improvements, IM onboarding, and Cowork/OpenClaw updates — but no standalone release was cut.

---

## 3. Project Progress

### Merged/Closed PRs Today (10 items)

| PR | Author | Areas | Description |
|:---|:---|:---|:---|
| [#1999](https://github.com/netease-youdao/LobsterAI/pull/1999) | fisherdaddy | docs | Fixed `reasoning_content` returned in multi-turn sessions for MiMo model |
| [#1998](https://github.com/netease-youdao/LobsterAI/pull/1998) | liuzhq1986 | renderer, build, docs, main, openclaw, cowork, im, artifacts | **Release train 2026.5.15 → main** (app v2026.5.16); includes artifacts right-side preview multi-view, Keyfrom/channel build attribution, IM onboarding |
| [#1997](https://github.com/netease-youdao/LobsterAI/pull/1997) | fisherdaddy | renderer | Updated default models for providers |
| [#1996](https://github.com/netease-youdao/LobsterAI/pull/1996) | fisherdaddy | renderer, cowork | Optimized Dream UI |
| [#1995](https://github.com/netease-youdao/LobsterAI/pull/1995) | fisherdaddy | renderer, main, openclaw, cowork | Optimized Dream UI (broader scope) |
| [#1994](https://github.com/netease-youdao/LobsterAI/pull/1994) | fisherdaddy | renderer, docs, main, openclaw, cowork | Fixed reasoning content for MiMo model |
| [#1992](https://github.com/netease-youdao/LobsterAI/pull/1992) | fisherdaddy | renderer, docs | Fixed bug where default model option existed in model list |
| [#813](https://github.com/netease-youdao/LobsterAI/pull/813) | swuzjb | config | Added MiMo V2 Pro and MiMo V2 Omni models for Xiaomi channel |

**Key advances:**
- **MiMo model ecosystem maturation**: Three PRs (#1999, #1994, #813) focused on Xiaomi's MiMo models, indicating strategic partnership or platform priority
- **Dream UI optimization**: Two coordinated PRs (#1995, #1996) suggest iterative refinement of a core UI paradigm
- **Release infrastructure**: Successful multi-area release train demonstrates mature CI/CD for complex cross-module changes

---

## 4. Community Hot Topics

**No genuinely "hot" topics by engagement metrics** — all items show **zero reactions and zero/undefined comments**. However, ranking by **development significance and potential user impact**:

| Item | Link | Significance | Underlying Need |
|:---|:---|:---|:---|
| PR #789 — Cowork session export (Markdown/PDF) | [`#789`](https://github.com/netease-youdao/LobsterAI/pull/789) | **Highest user-value stale PR** | Users need **data portability and offline access**; current Cowork module traps conversation history in-app. The detailed implementation (right-click menu, format switching, serialization) shows strong product thinking but 52 days without merge suggests review bottleneck. |
| Issue #1993 — AI engine connection lost | [`#1993`](https://github.com/netease-youdao/LobsterAI/issues/1993) | **Only active issue, desktop-specific** | Critical **reliability gap between deployment modes**: IM Bot stable, desktop app unstable. Suggests Electron/main process networking or lifecycle management bug, not core AI engine failure. User explicitly notes the dichotomy, indicating diagnostic confusion. |
| PR #790 — Remove hardcoded export password | [`#790`](https://github.com/netease-youdao/LobsterAI/pull/790) | **Security-sensitive stale PR** | Addresses **credential exposure risk** (`lobsterai-APP` hardcoded). The `window.prompt()` replacement is pragmatic but may need UX refinement for production. 52 days stale despite P0-class security concern. |

**Community health signal**: Near-zero external participation. All merged PRs from core team (`fisherdaddy`, `liuzhq1986`); all stale PRs from March appear to be community contributions awaiting review.

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix Available? | Details |
|:---|:---|:---|:---|:---|
| **P1 — High** | Issue #1993: AI engine connection lost (desktop) | **Open, active** | ❌ No linked PR | Desktop app **persistent connectivity failure** vs. stable IM Bot. Likely Electron main process ↔ renderer IPC, proxy configuration, or heartbeat mechanism. User blocked from core functionality. |
| **P1 — High** | PR #793 / PR #801: Disabled skills still invoked | Stale PRs | ✅ Two competing fixes | **P0 bug per author description**: Gateway config hot-reload failure. PR #793 (comprehensive gateway+renderer fix) and PR #801 (narrower `restartGatewayIfRunning` flag) both address. **Risk**: Unmerged for 52 days, users may have disabled skills executing unexpectedly. |
| **P2 — Medium** | PR #794: URL scheme allowlist for `shell.openExternal` | Stale PR | ✅ Awaiting review | **Security hardening**: Prevents arbitrary protocol execution from rendered content or agent output. Limited to `https:`, `http:`, `mailto:`. |
| **P2 — Medium** | PR #798: Ali BaiLian API key 401 (DashScope auth) | Stale PR | ✅ Awaiting review | **Provider compatibility regression**: v0.2.2 → later broke Anthropic-compatible endpoint auth header (`x-api-key` vs `Bearer`). Affects multiple Chinese providers (DashScope, Volcengine, Zhipu). |
| **P2 — Medium** | PR #799 / PR #804: Continue session streaming state & double-submit | Stale PRs | ✅ Awaiting review | UX bugs: missing stop button during continue, rapid-click message duplication. |
| **P2 — Medium** | PR #805: Deleting running session doesn't abort backend | Stale PR | ✅ Awaiting review | **Resource leak**: Token consumption continues after UI deletion. |

**Stability assessment**: Multiple **high-impact fixes ready but unmerged** for 52+ days. The active Issue #1993 represents a **new regression surface** in desktop packaging.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Session export (Markdown/PDF)** | PR #789 | **High** | Complete implementation, strong user value, only blocked on review |
| **Security hardening (export password, URL allowlist)** | PR #790, #794 | **High** | Security debt; low implementation risk |
| **MiMo V3 / expanded Xiaomi partnership** | PR #813, #1994, #1999, #1997 | **High** | Concentrated investment in MiMo model support suggests roadmap priority |
| **Dream UI v2 / workspace redesign** | PR #1995, #1996 | **Medium-High** | Iterative optimization pattern suggests ongoing investment |
| **Provider auth compatibility layer** | PR #798 | **Medium** | Needed for Chinese cloud provider ecosystem expansion |
| **Cowork memory & format test coverage** | PR #800 | **Medium** | Quality infrastructure, may align with reliability goals |

**Predicted next release themes**: MiMo model expansion, security hardening merge, session data portability, and Cowork reliability fixes.

---

## 7. User Feedback Summary

### Explicit Pain Points (from Issue #1993)
- **Desktop app reliability < IM Bot reliability**: User perceives core engine as broken when it's actually a **client packaging issue**
- **Error message quality**: "Please retry. If the issue persists, try restarting the app" is **generic and unactionable** — no diagnostics, no network status, no logs guidance

### Inferred Pain Points (from stale PR descriptions)
- **Data lock-in**: No export path for Cowork sessions (PR #789)
- **Security anxiety**: Hardcoded passwords visible in open source (PR #790)
- **Skill control unpredictability**: Toggle UI doesn't match actual behavior (PR #793/#801)
- **Provider fragility**: API auth breaks across versions (PR #798)
- **Session lifecycle confusion**: UI state diverges from backend execution (PR #799, #805)

### Satisfaction/Dissatisfaction Pattern
| Satisfied | Dissatisfied |
|:---|:---|
| IM Bot users (stable connection) | Desktop app users (connection failures) |
| Users on standard providers | Users on Chinese provider compatible endpoints |
| Basic session flow | Power users needing export, security control |

---

## 8. Backlog Watch

### Critical Stale PRs Requiring Maintainer Action (>52 days old)

| PR | Link | Why Urgent | Risk if Unmerged |
|:---|:---|:---|:---|
| **#793** | [`#793`](https://github.com/netease-youdao/LobsterAI/pull/793) | **P0 security/functional bug**: disabled skills execute | Users cannot trust skill toggle; potential for unintended tool execution |
| **#790** | [`#790`](https://github.com/netease-youdao/LobsterAI/pull/790) | Hardcoded export password in source | Credential exposure, compliance risk |
| **#794** | [`#794`](https://github.com/netease-youdao/LobsterAI/pull/794) | Arbitrary URL execution from rendered content | RCE/SSRF vector via agent output or malicious content |
| **#798** | [`#798`](https://github.com/netease-youdao/LobsterAI/pull/798) | Major provider ecosystem broken | User churn to competitors supporting Ali BaiLian/DashScope |
| **#789** | [`#789`](https://github.com/netease-youdao/LobsterAI/pull/789) | Most complete community feature contribution | Contributor discouragement, missed user value |

### Maintainer Attention Needed
- **Review bandwidth bottleneck**: 8 stale PRs from single date (2026-03-25) suggests batch that may have been overlooked during release crunch
- **Security triage gap**: Three security PRs (#790, #793, #794) unmerged for 52+ days despite clear risk descriptions
- **Community health**: Zero comments on any stale PR from maintainers — silent rejection risks contributor attrition

---

*Digest generated from GitHub activity data for netease-youdao/LobsterAI on 2026-05-17.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-17

## 1. Today's Overview

Moltis shows **moderate development velocity** with 3 PRs and 1 issue active in the past 24 hours, though no new releases were cut. The project appears focused on **infrastructure hardening** (remote access, AI provider integrations) and **developer experience improvements** (agent system building tools). Notably, one skill-building PR was merged while two feature PRs remain under review, suggesting maintainers are actively merging but gatekeeping larger features. The single open issue signals a mature core with users now pushing edge-case concurrency needs. Overall health: **stable, incremental progress** with no critical fires.

---

## 2. Releases

**No new releases** — version unchanged.

---

## 3. Project Progress

### Merged/Closed Today

| PR | Description | Significance |
|:---|:---|:---|
| [#1003](https://github.com/moltis-org/moltis/pull/1003) | `feat(skills): add agent system builder skill` | **Merged** — Bundles institutional knowledge for designing distributed multi-agent systems; includes progressive-disclosure templates lowering barrier for skill authors |

This PR captures **Moltis-derived agentic patterns** into reusable blueprints, indicating the project is formalizing its architectural opinions and investing in **ecosystem growth** through developer tooling.

### In Review

| PR | Description | Status |
|:---|:---|:---|
| [#1002](https://github.com/moltis-org/moltis/pull/1002) | NetBird + Cloudflare Tunnel remote access | Open, 2 days old |
| [#1005](https://github.com/moltis-org/moltis/pull/1005) | OpenAI Codex reasoning effort support | Open, 1 day old |

---

## 4. Community Hot Topics

| Item | Heat | Analysis |
|:---|:---|:---|
| [#1002](https://github.com/moltis-org/moltis/pull/1002) NetBird/Cloudflare Tunnel | 🔥🔥🔥 | **Highest complexity PR** — Addresses enterprise deployment pain: private mesh networking + managed tunneling. The loopback-preserving TCP forwarder and WebAuthn hostname updates suggest production hardening for on-premise/edge scenarios. **Underlying need**: Secure agent-to-agent communication without public IPs. |
| [#1005](https://github.com/moltis-org/moltis/pull/1005) Codex reasoning effort | 🔥🔥 | **AI capability parity** — Keeps Moltis current with OpenAI's Responses API evolution. The careful handling of `reasoning.encrypted_content` backward-compatibility shows mature provider abstraction. **Underlying need**: Cost/quality control for reasoning-heavy workflows. |
| [#1004](https://github.com/moltis-org/moltis/issues/1004) Non-blocking `spawn_agent` | 🔥 | **Architecture limitation surfacing** — Parent session paralysis during sub-agent runs blocks real-time use cases (streaming, UI responsiveness, parallel tool use). **Underlying need**: Agent orchestration at scale; suggests users are hitting concurrency ceilings in production. |

**Comment/reaction counts are uniformly low** (0 across all items), indicating either: (a) small but focused contributor base, (b) decisions happening in external channels (Discord/Slack), or (c) PRs fresh enough that review cycles haven't accumulated.

---

## 5. Bugs & Stability

| Severity | Item | Details | Fix Status |
|:---|:---|:---|:---|
| — | **None reported today** | No crash reports, regressions, or security disclosures in 24h window | — |

**Stability assessment**: Clean day. The closed PR #1003's skill-builder addition is **additive-only** with no core runtime changes. Open PRs touch networking (#1002) and provider serialization (#1005) — potential merge risks but no incidents yet.

---

## 6. Feature Requests & Roadmap Signals

| Source | Feature | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| [#1004](https://github.com/moltis-org/moltis/issues/1004) | Async/non-blocking `spawn_agent` | **High** | Filed by `dmitriikeler` (core contributor pattern); blocks production scaling; aligns with multi-agent roadmap |
| [#1005](https://github.com/moltis-org/moltis/pull/1005) | Codex reasoning effort control | **Very High** | Small, scoped provider update; backward-compatible; OpenAI feature parity is typically fast-tracked |
| [#1002](https://github.com/moltis-org/moltis/pull/1002) | NetBird/Cloudflare Tunnel | **Medium** | Large surface area (config, CLI, REST, runtime controller); may need security review cycle |

**Emerging theme**: Moltis is **bifurcating** between (1) *agent runtime* improvements (concurrency, reasoning control) and (2) *deployment infrastructure* (networking, access). This suggests the project is maturing from framework to **platform**.

---

## 7. User Feedback Summary

| Pain Point | Evidence | User Segment |
|:---|:---|:---|
| Parent agent blocking | [#1004](https://github.com/moltis-org/moltis/issues/1004) explicit problem statement | Power users building complex agent hierarchies |
| Secure remote access gaps | [#1002](https://github.com/moltis-org/moltis/pull/1002) implementation scope | Enterprise/self-hosted operators |
| AI provider feature lag | [#1005](https://github.com/moltis-org/moltis/pull/1005) chasing OpenAI's latest API | AI-integrated application developers |

**Satisfaction signals**: Skill-builder PR (#1003) merged smoothly — users who invest in Moltis patterns are rewarded with tooling.

**Dissatisfaction signals**: Zero comments on #1004 may indicate frustration fatigue (reported, no engagement) or the issue being self-evident enough to not need debate.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1004](https://github.com/moltis-org/moltis/issues/1004) Non-blocking spawn_agent | 1 day | **Medium** — young but architecturally significant | Maintainer triage: classify as bug vs. feature; assign to runtime team |
| [#1002](https://github.com/moltis-org/moltis/pull/1002) Remote access | 2 days | **Low-Medium** | Security review; docs completeness check; merge decision before drift |

**No stale items** detected in this window — all activity is ≤2 days old. Healthy review velocity.

---

*Digest generated from github.com/moltis-org/moltis public data. Links verified as of 2026-05-17.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-05-17

## 1. Today's Overview

CoPaw (QwenPaw) shows **high community activity** with 14 issues and 12 PRs updated in the last 24 hours, though the merge rate remains low (only 1 closed PR vs. 11 open). The project appears to be in an active development phase with significant community contribution, particularly around **cron job stability**, **context management**, and **multi-channel UX improvements**. No new releases were published today, suggesting the team is accumulating changes for a future version. The high volume of first-time contributors indicates growing adoption, but the backlog of open PRs may signal review bandwidth constraints.

---

## 2. Releases

**No new releases** published today. Latest release remains prior to 2026-05-17.

---

## 3. Project Progress

### Merged/Closed Today

| PR/Issue | Description | Link |
|---------|-------------|------|
| **#4452 [CLOSED]** | Test issue for tool calls — intentionally not merged | [Issue #4452](https://github.com/agentscope-ai/QwenPaw/issues/4452) |
| **#3246 [CLOSED]** | QQ channel: configurable instant acknowledgment message (first-time contributor) | [PR #3246](https://github.com/agentscope-ai/QwenPaw/pull/3246) |

### Notable Advances in Open PRs

| PR | Author | Progress | Link |
|---|--------|----------|------|
| **#4446** | suntp | **Runner package decoupling** — fixes eager import chain making dev/test environments fail | [PR #4446](https://github.com/agentscope-ai/QwenPaw/pull/4446) |
| **#4443** | suntp | **Lightweight `/goal` mode** — session-scoped objectives without `/mission` overhead | [PR #4443](https://github.com/agentscope-ai/QwenPaw/pull/4443) |
| **#4444** | joe2643 | **xAI OAuth + Grok provider** — major new model integration with image/video tools | [PR #4444](https://github.com/agentscope-ai/QwenPaw/pull/4444) |
| **#4303, #4084, #4223, #4434** | Multiple | **Cron subsystem stabilization** — concurrent state leaks, zombie sessions, soft delete, context clearing | [PR #4303](https://github.com/agentscope-ai/QwenPaw/pull/4303), [PR #4084](https://github.com/agentscope-ai/QwenPaw/pull/4084), [PR #4223](https://github.com/agentscope-ai/QwenPaw/pull/4223), [PR #4434](https://github.com/agentscope-ai/QwenPaw/pull/4434) |
| **#4041** | wfeng007 | **System tray startup** (Win32) — background operation for long-running agents | [PR #4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) |
| **#4173** | Lin928rain | **Shell timeout fix** — Unix temp file redirect for background process hang | [PR #4173](https://github.com/agentscope-ai/QwenPaw/pull/4173) |
| **#4438** | weixizi | **Browser tabs enrichment** — URL/title in response metadata | [PR #4438](https://github.com/agentscope-ai/QwenPaw/pull/4438) |
| **#4331** | aqilaziz | **Shell auditability** — request context injection via env vars | [PR #4331](https://github.com/agentscope-ai/QwenPaw/pull/4331) |

---

## 4. Community Hot Topics

### Most Active Discussions (by comment count)

| Rank | Issue/PR | Comments | Topic | Link |
|------|----------|----------|-------|------|
| 1 | **#4452** | 2 | Tool call test (closed) | [Issue #4452](https://github.com/agentscope-ai/QwenPaw/issues/4452) |
| 2 | **#4448** | 2 | **Context compaction format bug** — duplicate of #4447 | [Issue #4448](https://github.com/agentscope-ai/QwenPaw/issues/4448) |
| 3 | **#4447** | 1 | Context compaction format bug (original) | [Issue #4447](https://github.com/agentscope-ai/QwenPaw/issues/4447) |

### Underlying Needs Analysis

- **Context compaction failures (#4447/#4448)**: Users hitting `## header` format errors during long conversations — indicates the compaction heuristic is fragile and needs robust parsing or a format specification update. **No fix PR linked yet.**
- **Approval UX friction (#4450, #4451)**: Users want streamlined command interfaces (`/approve`, `/deny` aliases) and interactive buttons (Telegram/QQ inline keyboards) — signals that text-based approval is a bottleneck in multi-channel deployments.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? | Link |
|----------|-------|-------------|---------|------|
| **🔴 Critical** | **#4449** | **429 Rate-Limit → zero-downtime reload permanently clears message queue** — Agent "freezes" from user perspective, unrecoverable by model switch | **No** — needs immediate attention | [Issue #4449](https://github.com/agentscope-ai/QwenPaw/issues/4449) |
| **🟠 High** | **#4448/#4447** | Context compaction fails with "missing ## header" in long conversations | **No** | [Issue #4448](https://github.com/agentscope-ai/QwenPaw/issues/4448), [Issue #4447](https://github.com/agentscope-ai/QwenPaw/issues/4447) |
| **🟠 High** | **#4453** | Chat window unresponsive — "three dots" infinite loading, event loop crash | **No** | [Issue #4453](https://github.com/agentscope-ai/QwenPaw/issues/4453) |
| **🟡 Medium** | **#4445** | Runner package imports are heavy, break dev/test environments | **Yes: #4446** | [Issue #4445](https://github.com/agentscope-ai/QwenPaw/issues/4445), [PR #4446](https://github.com/agentscope-ai/QwenPaw/pull/4446) |
| **🟡 Medium** | Shell command hangs (Unix background processes) | Timeout on inherited pipe FDs | **Yes: #4173** | [PR #4173](https://github.com/agentscope-ai/QwenPaw/pull/4173) |

**Critical concern**: Issue #4449 describes a **cascading failure mode** where rate-limiting triggers infrastructure recovery that destroys user state — this is a reliability regression that could affect production deployments.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Requester | Likelihood in Next Version | Rationale | Link |
|---------|-----------|---------------------------|-----------|------|
| **Interactive approval buttons** (Telegram/QQ) | xielevi | **High** | Complements existing WebUI buttons (#3436); PR #4451 likely to follow | [Issue #4451](https://github.com/agentscope-ai/QwenPaw/issues/4451) |
| **Approval scope commands** (`/session`, `/always`, `/reset`) | xielevi | **High** | Builds on existing `/approve`/`/deny` in v1.1.7; low-risk UX polish | [Issue #4450](https://github.com/agentscope-ai/QwenPaw/issues/4450) |
| **`/goal` mode** | suntp | **Very High** | PR #4443 already open, matches lightweight objective pattern | [Issue #4442](https://github.com/agentscope-ai/QwenPaw/issues/4442), [PR #4443](https://github.com/agentscope-ai/QwenPaw/pull/4443) |
| **Grok/xAI integration** | joe2643 | **Very High** | Complete PR #4444 with OAuth, image/video tools — net additive, no breaking changes | [PR #4444](https://github.com/agentscope-ai/QwenPaw/pull/4444) |
| **Conversation management** (delete turns, split sessions, turn counter) | hyper0x | **Medium** | Three related issues (#4435, #4436, #4437) show systematic Console UX gap; may batch | [Issue #4435](https://github.com/agentscope-ai/QwenPaw/issues/4435), [Issue #4436](https://github.com/agentscope-ai/QwenPaw/issues/4436), [Issue #4437](https://github.com/agentscope-ai/QwenPaw/issues/4437) |
| **External memory system plugins** (Hindsight) | liying1989 | **Low-Medium** | Architectural question; likely post-modularization | [Issue #4439](https://github.com/agentscope-ai/QwenPaw/issues/4439) |
| **OpenCode Go one-click config** | doMySelfZy | **Unclear** | Vendor-specific request; depends on partnership/provider abstraction | [Issue #4441](https://github.com/agentscope-ai/QwenPaw/issues/4441) |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Silent failures / "frozen" agents** | #4449 (queue wipe), #4453 (infinite loading) | Critical |
| **Context management opacity** | #4447/#4448 (compaction errors), #4435-#4437 (no turn count, can't delete/split) | High |
| **Approval friction** | #4450, #4451 (text commands in chat apps) | Medium |
| **Dev environment fragility** | #4445 (heavy imports) | Medium |

### Use Cases Emerging

- **Long-running autonomous agents**: System tray (#4041), cron stability fixes (#4084, #4303, #4223, #4434)
- **Multi-channel production deployments**: Telegram/QQ button support (#4451), QQ acknowledgments (#3246)
- **Cost-conscious users**: Context splitting (#4436), turn counters (#4435), compaction (#4447)

### Satisfaction Signals

- Active first-time contributor stream (4 PRs tagged)
- Rich feature proposals with detailed implementation sketches (hyper0x's three issues, xielevi's approval UX)

---

## 8. Backlog Watch

### PRs/Issues Needing Maintainer Attention

| Item | Age | Issue | Action Needed | Link |
|------|-----|-------|---------------|------|
| **#4041** | 12 days | System tray startup (Win32) | Review stalled; independent entry point needs architecture sign-off | [PR #4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) |
| **#4173** | 7 days | Shell timeout fix | Unix-specific fix, needs platform testing validation | [PR #4173](https://github.com/agentscope-ai/QwenPaw/pull/4173) |
| **#4084** | 10 days | CronManager concurrency leaks | Stability-critical, multiple symptom fixes bundled | [PR #4084](https://github.com/agentscope-ai/QwenPaw/pull/4084) |
| **#4223** | 6 days | Zombie session soft delete | Relates to #4449's broader queue/state management issues | [PR #4223](https://github.com/agentscope-ai/QwenPaw/pull/4223) |
| **#4449** | 1 day | **Critical: Queue wipe on 429** | **No fix PR; needs immediate triage** | [Issue #4449](https://github.com/agentscope-ai/QwenPaw/issues/4449) |

### Recommendation

The **cron/state management subsystem** requires coordinated review: PRs #4084, #4223, #4303, #4434 and issue #4449 all touch overlapping lifecycle concerns. A maintainer sprint on this area would prevent fragmented fixes and address the critical user-visible "frozen agent" symptom.

---

*Digest generated from GitHub activity data for agentscope-ai/QwenPaw (CoPaw) on 2026-05-17.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-17

## 1. Today's Overview

ZeroClaw shows **exceptionally high development velocity** with 50 issues and 50 PRs updated in the last 24 hours, though the 45:5 open-to-closed issue ratio and 39:11 open-to-merged PR ratio indicate a growing backlog. No new releases were cut, suggesting the team is consolidating toward the massive **v0.8.0 multi-agent runtime** (PR #6398). The project is in an active pre-release integration phase with significant contributor energy around skills, gateway hardening, and provider reliability—though maintainer bandwidth appears strained with many items marked `needs-maintainer-review` or `status:blocked`.

---

## 2. Releases

**None today.** The project remains on v0.7.4 (per issue #6659 reference) with v0.8.0 in heavy development. No migration notes or breaking change advisories issued.

---

## 3. Project Progress

### Closed Issues (5)
| Issue | Description | Significance |
|-------|-------------|------------|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | `default_model` bug on fresh install resolved | S1 blocker for new users |
| [#3542](https://github.com/zeroclaw-labs/zeroclaw/issues/3542) | Webhook agent mode support delivered | Enables full agent workflows via webhooks |
| [#6399](https://github.com/zeroclaw-labs/zeroclaw/issues/6399) | Custom remote provider multimodal image path bug fixed | Raspberry Pi + vLLM edge case |
| [#6659](https://github.com/zeroclaw-labs/zeroclaw/issues/6659) | Gateway notification API gap closed | Plugin ecosystem unblocked |
| [#6132](https://github.com/zeroclaw-labs/zeroclaw/issues/6132) | Skill prompt audit extension merged | Security follow-through on #5972 |

### Notable PR Activity
| PR | Author | Focus |
|----|--------|-------|
| [#6719](https://github.com/zeroclaw-labs/zeroclaw/pull/6719) | JordanTheJet | **Fixes `model_switch` persistence** across turns—closes #6173 |
| [#6684](https://github.com/zeroclaw-labs/zeroclaw/pull/6684) / [#6725](https://github.com/zeroclaw-labs/zeroclaw/pull/6725) | JordanTheJet | **Wires skill patch cooldown** (fixes #6683) |
| [#6728](https://github.com/zeroclaw-labs/zeroclaw/pull/6728) | Stealinglight | Web dashboard Overview page + SectionNav *(closed, likely superseded)* |
| [#6710](https://github.com/zeroclaw-labs/zeroclaw/pull/6710) | Project516 | **Desktop app Windows/Linux support** |
| [#6700](https://github.com/zeroclaw-labs/zeroclaw/pull/6700) | ilteoood | Skills management API + dashboard toggle |
| [#6693](https://github.com/zeroclaw-labs/zeroclaw/pull/6693) | JordanTheJet | **"Dream mode" memory consolidation** |
| [#6649](https://github.com/zeroclaw-labs/zeroclaw/pull/6649) | tidux | ACP session persistence for editor integration |

---

## 4. Community Hot Topics

### Most Discussed Issues

| Issue | Comments | Core Tension |
|-------|----------|------------|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) *(closed)* | **18** | Fresh install UX fragility—onboarding is a retention cliff |
| [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) | **5** | Webhook transforms for generic payload inspection—**blocked**, gateway extensibility vs. security |
| [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) | **5** | OAuth-native auth for 4 Chinese providers (Zhipu, Moonshot, MiniMax, Ollama Cloud)—**blocked**, subscription economy integration |
| [#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) | **4** | `reasoning_content` lost in context compression—**in-progress**, DeepSeek provider reliability |

### Underlying Needs Analysis
- **Webhook flexibility** (#2467, #3542): Users want ZeroClaw as a programmable ingress hub, not just chat endpoint
- **Provider auth modernization** (#5601): API key fatigue; users expect OAuth flows matching SaaS conventions
- **Reasoning preservation** (#6269): Growing reliance on reasoning models (DeepSeek, o3, Claude thinking) makes this a correctness issue

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **S1** | [#6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721): `tool_search` missing from `default_auto_approve` → webhook hangs 120s | **NEW** (0 comments) | ❌ None |
| **S1** | [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724): Channels supervisor crashloop when all channels disabled | **NEW** (0 comments) | ❌ None |
| **S1** | [#6723](https://github.com/zeroclaw-labs/zeroclaw/issues/6723): OpenAI provider hardcodes 120s timeout, ignores config | **NEW** (0 comments) | ❌ None |
| **S2** | [#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269): Context compressor drops `reasoning_content` | In-progress | ❌ None |
| **S2** | [#6173](https://github.com/zeroclaw-labs/zeroclaw/issues/6173): `model_switch` not persisting | In-progress | ✅ [#6719](https://github.com/zeroclaw-labs/zeroclaw/pull/6719) |
| **S2** | [#6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683): `skill_manage patch` ignores cooldown | In-progress | ✅ [#6684](https://github.com/zeroclaw-labs/zeroclaw/pull/6684), [#6725](https://github.com/zeroclaw-labs/zeroclaw/pull/6725) |

**Critical pattern**: Three zero-comment S1 bugs filed today by `nick-pape` suggest either coordinated testing or a single incident surface. All involve **configuration being silently ignored** (timeouts, auto-approve defaults, enabled flags)—a systemic reliability concern.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in v0.8.0 | Rationale |
|---------|----------|----------------------|-----------|
| **Multi-Agent Runtime + Schema V3** | [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) | **Certain** | XL PR, core release theme |
| **Memory "Dream Mode"** | [#6693](https://github.com/zeroclaw-labs/zeroclaw/pull/6693) | High | Merged PR pattern, addresses context bloat |
| **ACP Session Persistence** | [#6649](https://github.com/zeroclaw-labs/zeroclaw/pull/6649) | High | Editor integration critical path |
| **Native Extended Thinking** (Anthropic/Bedrock) | [#5652](https://github.com/zeroclaw-labs/zeroclaw/pull/5652) | Medium | Large PR, needs review bandwidth |
| **LSP Support** | [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) | Medium | Competitive parity (Claude Code, OpenCode) |
| **Ratatui Agent REPL** | [#5882](https://github.com/zeroclaw-labs/zeroclaw/issues/5882) | Medium | Blocked, needs maintainer |
| **Per-skill Security Permissions** | [#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775) | Low | Blocked, architectural; post-v0.8.0 |
| **PDF Tool Support** | [#5745](https://github.com/zeroclaw-labs/zeroclaw/issues/5745) | Low | Blocked, no assignee |

**Architecture signal**: [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) ("prefer lighter ZeroClaw") and skills-for-MCP shift suggest a **modularity push**—moving from built-in integrations to skill/MCP-based extensibility.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|-------|----------|----------|
| **Silent failures / ignored config** | #6721, #6723, #6724 | Critical—erodes trust |
| **Onboarding fragility** | #6123 (18 comments) | High—churn risk |
| **Context compression correctness** | #6269 | High—breaks reasoning models |
| **Webhook non-interactive gaps** | #3542, #2467, #6721 | High—limits automation use cases |
| **Desktop platform parity** | #6710 | Medium—Windows/Linux users excluded |

### Use Cases Emerging
- **Edge deployment**: Raspberry Pi + remote vLLM (#6399)
- **Enterprise notification pipelines**: Gateway → operator push (#6659)
- **Scheduled reporting**: SMTP channel + cron (#5573)
- **Multi-tenant skill isolation**: Per-skill permissions (#5775)

### Satisfaction Signals
- Active skill authoring community (#6253 tracker, multiple skill PRs)
- Contributor depth: JordanTheJet, Stealinglight, Audacity88 showing sustained investment

---

## 8. Backlog Watch

### Blocked / Needs Maintainer Review (High Risk of Stagnation)

| Issue/PR | Age | Blocker | Action Needed |
|----------|-----|---------|---------------|
| [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) Webhook transforms | ~2.5 months | `status:blocked` | Security review for payload inspection |
| [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) OAuth providers | ~1 month | `needs-maintainer-review` | Auth architecture decision |
| [#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) Cron pre-hook gates | ~1 month | `needs-maintainer-review` | SOP/cron security model |
| [#5908](https://github.com/zeroclaw-labs/zeroclaw/issues/5908) CI/CD container builds | ~1 month | `needs-maintainer-review` | Infrastructure ownership |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) Lighter ZeroClaw (MCP shift) | ~3 weeks | `needs-maintainer-review`, `type:rfc` | RFC process, breaking change decision |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 153-commit recovery audit | ~3 weeks | `status:in-progress` | Git archaeology, risk of permanent loss |

### Maintainer Bandwidth Concern
The **"needs-maintainer-review"** label appears on 8+ open issues, and the v0.8.0 XL PR (#6398) is consuming review cycles. The project may need:
- Expanded maintainer team, or
- Staged review process for v0.8.0 to unblock parallel feature work

---

*Digest generated from 50 issues and 50 PRs updated 2026-05-16 → 2026-05-17. All links: https://github.com/zeroclaw-labs/zeroclaw*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*