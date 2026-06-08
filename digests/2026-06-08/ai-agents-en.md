# OpenClaw Ecosystem Digest 2026-06-08

> Issues: 296 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-08 00:29 UTC

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

# OpenClaw Project Digest — 2026-06-08

## 1. Today's Overview

OpenClaw shows **extremely high development velocity** with 296 issues and 500 PRs touched in the last 24 hours—among the most active days in the project's recent history. The open-to-closed ratio is concerning: **177 active issues vs. 119 closed** and **374 open PRs vs. 126 merged/closed**, indicating a growing backlog and potential maintainer bottleneck. No new releases were published today, suggesting the project is in a heavy development phase rather than a stabilization window. The activity is concentrated in messaging reliability, session state management, and multi-channel gateway fixes, with significant contributions from community members across Telegram, Feishu, Discord, and iMessage integrations.

---

## 2. Releases

**No new releases** (0 published today).

The project appears to be between release cycles, with active work targeting the next version. Notable version references in issues include `2026.6.1`, `2026.6.2-beta.1`, and `2026.5.27`, suggesting a monthly release cadence with patch releases.

---

## 3. Project Progress

### Recently Merged/Closed PRs (Selected)

| PR | Author | Focus | Status |
|:---|:---|:---|:---|
| [#91252](https://github.com/openclaw/openclaw/pull/91252) | XuZehan-iCenter | Fix leaked file descriptors in skill watcher (chokidar) | **Merged** |
| [#88234](https://github.com/openclaw/openclaw/issues/88234) | aym9999 | Feishu dispatch crash fix | **Closed** |
| [#84216](https://github.com/openclaw/openclaw/issues/84216) | alexbainbridge | UI dropdown for recent sessions | **Closed** |
| [#71932](https://github.com/openclaw/openclaw/issues/71932) | soumoucookie | Google Gemini sub-agent 404 fix | **Closed** |
| [#70253](https://github.com/openclaw/openclaw/issues/70253) | AlexStephenLytton | Mattermost streaming/bot-to-bot regression fix | **Closed** |
| [#70164](https://github.com/openclaw/openclaw/issues/70164) | itotk | WebSocket event skip fix | **Closed** |
| [#74822](https://github.com/openclaw/openclaw/issues/74822) | braddelong | Telegram gateway crash loop fix | **Closed** |
| [#73802](https://github.com/openclaw/openclaw/issues/73802) | sanchezm86 | Discord exec approval card regression fix | **Closed** |
| [#70330](https://github.com/openclaw/openclaw/issues/70330) | Squirbie | WebChat session rotation fix | **Closed** |
| [#70005](https://github.com/openclaw/openclaw/issues/70005) | bbj375767338-arch | Dreaming/summarization quality feedback (closed) | **Closed** |
| [#69778](https://github.com/openclaw/openclaw/issues/69778) | FelixRen-FY | Gateway restart resurrects old CLI subagent tasks | **Closed** |
| [#76724](https://github.com/openclaw/openclaw/issues/76724) | profgnpenatieri-sudo | MCP tools discovery regression fix | **Closed** |

### Key Advancements

- **Memory system hardening**: Multiple PRs targeting QMD collection management, local model path indexing, and dreaming corpus quality ([91274](https://github.com/openclaw/openclaw/pull/91274), [91170](https://github.com/openclaw/openclaw/pull/91170), [91267](https://github.com/openclaw/openclaw/pull/91267))
- **Gateway resilience**: Fixes for session recovery after crashes, terminal status handling, and delivery recovery timing ([89045](https://github.com/openclaw/openclaw/pull/89045), [91212](https://github.com/openclaw/openclaw/issues/91212))
- **Multi-channel reliability**: Telegram TTS churn, iMessage coalescing, Feishu rate-limit retry, Discord search guild resolution ([83988](https://github.com/openclaw/openclaw/pull/83988), [90858](https://github.com/openclaw/openclaw/pull/90858), [89659](https://github.com/openclaw/openclaw/pull/89659), [88796](https://github.com/openclaw/openclaw/pull/88796))
- **Security boundaries**: Trusted-proxy auth proof for doctor, exec approval recovery guidance ([91268](https://github.com/openclaw/openclaw/pull/91268), [91280](https://github.com/openclaw/openclaw/pull/91280))

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| # | Issue | Comments | 👍 | Core Concern |
|:---|:---|:---:|:---:|:---|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | Text between tool calls leaks to messaging channels | 27 | 1 | **Security/UX**: Internal processing exposed to users |
| [#88838](https://github.com/openclaw/openclaw/issues/88838) | Track core session/transcript SQLite migration via accessor seam | 18 | 1 | **Architecture**: Avoiding big-bang rewrites |
| [#88312](https://github.com/openclaw/openclaw/issues/88312) | Codex app-server turn-completion stall regression | 14 | 3 | **Reliability**: ChatGPT Plus integration broken |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) | Bootstrap files in agentDir silently ignored | 14 | 5 | **Config**: Per-agent customization broken |
| [#90991](https://github.com/openclaw/openclaw/issues/90991) | Cron scheduled trigger contaminates global runtime state | 13 | 1 | **Stability**: System-wide overload from cron |

### Underlying Needs Analysis

- **Tool-call UX boundary** ([#25592](https://github.com/openclaw/openclaw/issues/25592)): Users need clear separation between "agent thinking" and "agent speaking"—the current leaky abstraction damages trust in production deployments
- **Incremental architecture** ([#88838](https://github.com/openclaw/openclaw/issues/88838)): The community is pushing back against high-risk migrations; the accessor seam pattern suggests maturing engineering practices
- **Provider reliability** ([#88312](https://github.com/openclaw/openclaw/issues/88312)): OpenAI API changes continue to cause regressions, indicating need for better abstraction over provider-specific behaviors

---

## 5. Bugs & Stability

### Critical (P1) Open Bugs

| Issue | Severity | Status | Fix PR? | Description |
|:---|:---|:---|:---|:---|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 🔴 **Security+UX** | Stale, needs review | ❌ No | Tool call interstitial text leaks to channels |
| [#88312](https://github.com/openclaw/openclaw/issues/88312) | 🔴 **Regression** | Needs live repro | ❌ No | Codex turn-completion stall (regression of prior fix) |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) | 🔴 **Config** | Stale, needs review | ❌ No | agentDir bootstrap files ignored |
| [#90991](https://github.com/openclaw/openclaw/issues/90991) | 🔴 **Stability** | Needs live repro | ❌ No | Cron triggers cause system-wide overload |
| [#91212](https://github.com/openclaw/openclaw/issues/91212) | 🔴 **Message Loss** | Fresh (today) | ❌ No | Delivery recovery fails after gateway restart |
| [#90639](https://github.com/openclaw/openclaw/issues/90639) | 🔴 **Cost+Availability** | Fresh | ❌ No | Compaction safeguard mode lets sessions hit context ceiling |
| [#31583](https://github.com/openclaw/openclaw/issues/31583) | 🔴 **Security** | Stale, linked PR open | ✅ # linked | `exec` tool doesn't inherit skill env vars (secrets leak risk) |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | 🔴 **Data Loss** | Stale, linked PR open | ✅ # linked | `write` tool lacks append mode—cron overwrites shared files |
| [#37634](https://github.com/openclaw/openclaw/issues/37634) | 🔴 **Sandbox** | Stale | ❌ No | `workspaceAccess: none` workspaces mounted read-only |
| [#29736](https://github.com/openclaw/openclaw/issues/29736) | 🔴 **Security** | Stale | ❌ No | Exec approvals write to `~/.openclaw` ignoring state root |
| [#90428](https://github.com/openclaw/openclaw/issues/90428) | 🟡 **Regression** | Fresh | ❌ No | `exec` tool triggers SIGTERM on WSL2/Node 24 |

### Regressions This Week

- **Codex turn-completion** ([#88312](https://github.com/openclaw/openclaw/issues/88312)): Second regression of same issue (#84076 → #85107 → now #88312)—suggests fragile test coverage for OpenAI integration
- **MCP tool discovery** ([#76724](https://github.com/openclaw/openclaw/issues/76724)): Fixed, but pattern of "handshake succeeds, tools invisible" indicates protocol-level brittleness

---

## 6. Feature Requests & Roadmap Signals

### High-Signal Feature Requests

| Issue | Signal Strength | Prediction |
|:---|:---|:---|
| [#86881](https://github.com/openclaw/openclaw/issues/86881): Gateway-lite mode without AI harness | ⭐⭐⭐ Strong | **Likely v2026.7**—enables edge/IoT deployments, reduces attack surface |
| [#90916](https://github.com/openclaw/openclaw/issues/90916): Topic-session families | ⭐⭐⭐ Strong | **Architecture direction**—matches multi-tenant SaaS needs |
| [#45501](https://github.com/openclaw/openclaw/issues/45501): `session.resetPrompt` configurable | ⭐⭐⭐ Strong | **Easy win**, high community demand |
| [#40215](https://github.com/openclaw/openclaw/issues/40215): Cumulative context usage in `/usage` | ⭐⭐⭐ Strong | **Likely near-term**—cost management is top user concern |
| [#22358](https://github.com/openclaw/openclaw/issues/22358): Post-subagent completion extension hook | ⭐⭐ Medium | Ecosystem play, needs API design |
| [#33413](https://github.com/openclaw/openclaw/issues/33413): Slack tool-level progress status | ⭐⭐ Medium | UX polish, channel-specific |
| [#33962](https://github.com/openclaw/openclaw/issues/33962): Lightweight model for slug generation | ⭐⭐ Medium | Cost optimization, infrastructure |

### Roadmap Indicators from PRs

- **Runtime Self Context** ([90101](https://github.com/openclaw/openclaw/pull/90101)): Major infrastructure feature for "runtime/offload/scale/cost-awareness"—flagship v2026.7 material
- **Subagent tool forwarding** ([78441](https://github.com/openclaw/openclaw/pull/78441)): `toolsAllow` for `sessions_spawn`—security hardening for multi-agent workflows

---

## 7. User Feedback Summary

### Pain Points (Frequency-ranked)

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Message loss/corruption** | [#91212](https://github.com/openclaw/openclaw/issues/91212), [#87326](https://github.com/openclaw/openclaw/issues/87326), [#40001](https://github.com/openclaw/openclaw/issues/40001), [#38603](https://github.com/openclaw/openclaw/issues/38603) | 🔴 Critical |
| **Gateway crashes/restarts** | [#90428](https://github.com/openclaw/openclaw/issues/90428), [#74822](https://github.com/openclaw/openclaw/issues/74822), [#38091](https://github.com/openclaw/openclaw/issues/38091) | 🔴 Critical |
| **Session state confusion** | [#38966](https://github.com/openclaw/openclaw/issues/38966), [#70330](https://github.com/openclaw/openclaw/issues/70330), [#69778](https://github.com/openclaw/openclaw/issues/69778) | 🟡 High |
| **Configuration not respected** | [#29387](https://github.com/openclaw/openclaw/issues/29387), [#29736](https://github.com/openclaw/openclaw/issues/29736), [#38657](https://github.com/openclaw/openclaw/issues/38657) | 🟡 High |
| **Cost/opacity** | [#90639](https://github.com/openclaw/openclaw/issues/90639), [#40215](https://github.com/openclaw/openclaw/issues/40215), [#33962](https://github.com/openclaw/openclaw/issues/33962) | 🟡 High |
| **Provider-specific breakage** | [#88312](https://github.com/openclaw/openclaw/issues/88312), [#71932](https://github.com/openclaw/openclaw/issues/71932), [#87136](https://github.com/openclaw/openclaw/issues/87136) | 🟡 High |

### Satisfaction Signals

- Strong community contribution (500 PRs/24h)
- Responsive fixes for channel-specific issues (Feishu, Telegram, Discord all had recent closures)
- Active memory system investment (dreaming, QMD, compaction)

### Dissatisfaction Signals

- "Stale" label epidemic: many P1 issues untouched for months
- Repeated regressions on same features (Codex completion, MCP discovery)
- "Something went wrong" as generic failure mode with poor recovery guidance ([#90639](https://github.com/openclaw/openclaw/issues/90639), [#74822](https://github.com/openclaw/openclaw/issues/74822))

---

## 8. Backlog Watch

### Critical Issues Needing Maintainer Attention

| Issue | Age | Blockers | Risk |
|:---|:---|:---|:---|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | ~3.5 months | Security review, product decision, source repro | **Security leak in production** |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) | ~3 months | Same as above | **Per-agent config broken** |
| [#31583](https://github.com/openclaw/openclaw/issues/31583) | ~3 months | Same + linked PR open | **Secrets not passed to exec** |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | ~3 months | Product decision, source repro | **Data loss in cron workflows** |
| [#37634](https://github.com/openclaw/openclaw/issues/37634) | ~3 months | Needs maintainer review | **Sandbox isolation broken** |
| [#29736](https://github.com/openclaw/openclaw/issues/29736) | ~3 months | Security review, product decision | **State root bypass** |
| [#38622](https://github.com/openclaw/openclaw/issues/38622) | ~3 months | Security review, linked PR | **Symlinks not followed** |

### PRs Ready for Maintainer Look (but unmerged)

| PR | Waiting Since | Risk Flags |
|:---|:---|:---|
| [#78441](https://github.com/openclaw/openclaw/pull/78441) | ~1 month | Security boundary, compatibility |
| [#89045](https://github.com/openclaw/openclaw/pull/89045) | ~1 week | Session state, message delivery |
| [#90101](https://github.com/openclaw/openclaw/pull/90101) | ~4 days | Security boundary, session state, compatibility |
| [#90480](https://github.com/openclaw/openclaw/pull/90480) | ~4 days | Automation, message delivery |
| [#88953](https://github.com/openclaw/openclaw/pull/88953) | ~1 week | Security boundary, compatibility |

### Assessment

The **"clawsweeper" triage system** is showing strain: labels like `no-new-fix-pr`, `needs-maintainer-review`, `needs-product-decision`, and `needs-security-review` cluster heavily on old P1 issues. The project would benefit from:
1. A maintainer sprint on security-review backlog
2. Product decision cadence for config/UX issues
3. Automated stale-P1 escalation given the 3+ month accumulation

---

*Digest generated from OpenClaw GitHub activity on 2026-06-08. All links reference `https://github.com/openclaw/openclaw`.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem
**Date: 2026-06-08**

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing **intense parallel development** across at least 10 actively tracked projects, with daily issue/PR volumes ranging from 5 to 500+ across the top contributors. The space is bifurcating between **mature, infrastructure-heavy frameworks** (OpenClaw, ZeroClaw, IronClaw) optimizing for production deployments and **lighter, more focused implementations** (NanoBot, PicoClaw, NanoClaw) prioritizing specific use cases or deployment constraints. A critical tension pervades: projects are racing to support multi-agent orchestration, A2A protocol interoperability, and enterprise channel integrations while struggling with fundamental stability issues—message loss, session state corruption, and sandbox security—that threaten production readiness.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score* | Status |
|:---|:---:|:---:|:---:|:---:|:---|
| **OpenClaw** | 296 | 500 | None | ⚠️ **Strained** | Extreme velocity, growing backlog, maintainer bottleneck |
| **ZeroClaw** | 50 | 50 | None (v0.8.0 prep) | ✅ **Strong** | High merge ratio, release discipline, active triage |
| **IronClaw** | 50 | 38 | None (Reborn pending) | ⚠️ **Blocked** | Major architecture overhaul, 4 cutover blockers |
| **Hermes Agent** | 50 | 50 | None | ⚠️ **Backlogged** | 48:2 open-to-merged PR ratio, possible release freeze |
| **PicoClaw** | 21 | 19 | Nightly only | ✅ **Healthy** | Good close rate, systematic hardening |
| **NanoBot** | 7 | 18 | None | ✅ **Responsive** | Same-day merges, focused scope |
| **NanoClaw** | 3 | 9 | None | ⚠️ **Fragile** | Security gaps, setup friction, aging PRs |
| **Moltis** | 1 | 3 | None | ✅ **Stable** | Low churn, deliberate pace, no fires |
| **CoPaw/QwenPaw** | 5 | 2 | None (v1.1.10) | ❌ **Stalled** | Zero merges, production regression unaddressed |
| **LobsterAI** | 1 | 0 | None | ❌ **Dormant** | Maintenance lull, 2-month stale issues |
| **NullClaw** | 0 | 0 | — | — | Inactive |
| **TinyClaw** | 0 | 0 | — | — | Inactive |
| **ZeptoClaw** | 0 | 0 | — | — | Inactive |

*\*Health Score: Composite of merge velocity, issue resolution rate, backlog growth, and critical unaddressed bugs*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Peer Comparison |
|:---|:---|:---|
| **Scale** | 500 PRs/24h = **10× nearest active peer** | ZeroClaw, Hermes at ~50; ecosystem dominance in raw activity |
| **Channel breadth** | 8+ production IM integrations (Telegram, Feishu, Discord, iMessage, Mattermost, WebChat) | NanoBot matches some; ZeroClaw expanding; IronClaw rebuilding |
| **Memory system depth** | QMD collections, dreaming/summarization, compaction with active investment | Unique sophistication; others lack comparable corpus management |
| **Community contribution** | External PRs from 10+ distinct contributors daily | Strongest distributed contribution pattern |

### Technical Approach Differences
- **OpenClaw**: Monolithic Python/Node runtime with heavy gateway abstraction, session-centric architecture, aggressive feature accumulation
- **ZeroClaw**: Rust-based TUI-first with schema-v3 provider abstraction, explicit per-alias configuration, compilation-time feature flags
- **IronClaw**: Rust "Reborn" rewrite with WASM-isolated adapters, formal capability model, tenant-scoped composition
- **NanoBot**: Python, Bubblewrap sandboxing, WebUI + multi-channel parity, focused on reasoning model compatibility
- **PicoClaw**: Go-based, edge-deployment oriented, embedded/Termux support, emerging finance module

### Community Size
OpenClaw operates at **ecosystem-defining scale**—its daily activity exceeds the combined total of all other active projects. However, this scale creates a **coordination tax**: 374 open PRs vs. 126 merged indicates review bandwidth is the binding constraint, whereas ZeroClaw (39:11) and PicoClaw (7:12) maintain healthier integration rates.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **A2A Protocol Support** | Hermes (#514), ZeroClaw (#3566), IronClaw (implicit) | Google's Agent-to-Agent standard; interop with MCP; federation beyond single-instance |
| **Sandbox Security Hardening** | NanoBot (#4236, #4237), ZeroClaw (#5127), IronClaw (#4042, #3956), OpenClaw (#37634) | Bubblewrap on modern Linux (Ubuntu 24.04 namespaces); WASM isolation; fs containment with RESOLVE_NO_XDEV |
| **Session State Integrity** | OpenClaw (#91212, #70330), NanoBot (#4203), Hermes (#41517, #41355), NanoClaw (#2531) | Recovery after gateway restart; message history corruption; profile isolation; dirty working tree |
| **Multi-Channel Reliability** | OpenClaw (Telegram TTS, Feishu rate-limit, Discord search), NanoBot (Feishu mentions, WhatsApp LID), ZeroClaw (Feishu routing, napcat/OneBot), PicoClaw (Matrix ACL, QQ loops) | Platform-specific protocol drift; enterprise IM parity; JID/normalization edge cases |
| **Provider Abstraction Resilience** | OpenClaw (#88312 Codex regressions, #71932 Gemini 404), CoPaw (#4989 vLLM silent failure), ZeroClaw (#4879 Gemini OAuth), PicoClaw (#2674 Codex OAuth, #2941 Anthropic ID) | OpenAI API churn; reasoning model compatibility; OAuth lifecycle; model ID canonicalization |
| **Cost/Context Management** | OpenClaw (#90639 compaction, #40215 usage visibility), ZeroClaw (#5146 skill compilation, #4880 compression), NanoBot (#4238 microcompaction) | Context ceiling avoidance; token transparency; skill prompt minimization; cumulative billing |
| **Configuration-as-Code / Declarative Management** | IronClaw (#3036, #3044), OpenClaw (#29387 bootstrap files), ZeroClaw (schema-v3 providers) | Schema-validated configs; tenant blueprints; local dev batteries-included; migration safety |

---

## 5. Differentiation Analysis

| Project | Primary User | Feature Focus | Architecture Signature | Maturity Stage |
|:---|:---|:---|:---|:---|
| **OpenClaw** | Power users, multi-channel operators | Maximum integration breadth, memory depth, channel coverage | Monolithic, session-centric, gateway-pattern | Feature-complete, stabilizing |
| **ZeroClaw** | Developers, TUI-preferring operators | Provider ecosystem, explicit configuration, TUI quality | Rust, schema-v3 providers, compilation flags | Rapidly iterating toward infrastructure |
| **IronClaw** | Enterprise, security-conscious deployers | Tenant isolation, WASM sandboxing, formal capabilities | Rust "Reborn", composition root, capability model | Major rewrite, pre-beta |
| **Hermes Agent** | Desktop users, multi-agent experimenters | Desktop stability, A2A federation, plugin ecosystem | Electron desktop + gateway, hooks architecture | Feature expansion, backlog accumulation |
| **NanoBot** | Self-hosters, reasoning model users | WebUI polish, enterprise channel parity, sandbox safety | Python, Bubblewrap, WebUI + multi-channel | Maintenance, hardening |
| **PicoClaw** | Edge/embedded deployers, Chinese market | Low-resource operation, mobile/Termux, finance module | Go, message bus backpressure, goroutine discipline | Pre-1.0, scope expanding |
| **NanoClaw** | Container-native deployers | Upgrade safety, multi-LLM rotation, DB-backed config | Container-first, tripwire enforcement, Codex/Gemini/Anthropic | Operational maturity, security gaps |
| **Moltis** | Privacy-conscious operators | Observability controls, resource bounds, Telegram focus | Deliberate, hierarchical config, activity logging | Stable, conservative |
| **CoPaw/QwenPaw** | Local vLLM deployers, vision users | Qwen model optimization, visual model flexibility | ACP protocol, renderer pipeline | Stalled, regression unaddressed |
| **LobsterAI** | Individual power users, team IM | Session organization, skill creation UI | React/Redux, Electron, IM bot config | Dormant, debt accumulating |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating (High Velocity, Healthy Integration)
| Project | Evidence | Trajectory |
|:---|:---|:---|
| **ZeroClaw** | 11:39 merged:open PR ratio, release prep active, same-day merges | 📈 Shipping v0.8.0, strongest momentum-to-health ratio |
| **PicoClaw** | 12:7 merged:open, systematic defensive coding, nightly builds | 📈 Approaching v0.2.9 stability, scope expanding to finance |
| **NanoBot** | Same-day critical fixes, 4:14 merged:open but focused | 📈 Responsive maintenance, production reliability focus |

### Tier 2: High Velocity, Strained Integration
| Project | Evidence | Trajectory |
|:---|:---|:---|
| **OpenClaw** | 126:374 merged:open, 3+ month P1 stale issues, "clawsweeper" triage strain | 📊 Scale without proportional maintainer growth; risk of contributor attrition |
| **Hermes Agent** | 2:48 merged:open, possible release freeze or rigorous standards | 📊 Accumulating changes for future version; unclear when integration unlocks |
| **IronClaw** | 16:22 merged:open, but 4 cutover blockers holding release PR 23 days | 📊 Reborn architecture is all-consuming; release blocked on structural issues |

### Tier 3: Maintenance/Stabilization Mode
| Project | Evidence | Trajectory |
|:---|:---|:---|
| **NanoClaw** | Aging PRs (#1626 at 65 days), security gaps with zero engagement | 📉 Operational maturity masks integration/decision paralysis |
| **Moltis** | 3 PRs updated, no merges, single issue, deliberate pace | ➡️ Stable but not accelerating; review bottleneck or caution |
| **CoPaw/QwenPaw** | Zero merges, production regression unaddressed 2+ days | 📉 Maintainer absence or concentrated unobserved work; trust erosion risk |

### Tier 4: Dormant / Declining
| Project | Evidence | Trajectory |
|:---|:---|:---|
| **LobsterAI** | Zero PR activity, 14 stale issues with uniform 2-month age, CI broken | 📉 Resource constraints or prioritization freeze; community communication needed |
| **NullClaw, TinyClaw, ZeptoClaw** | No activity | — Inactive or abandoned |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Strategic Implication |
|:---|:---|:---|
| **A2A protocol as interoperability standard** | Hermes (#514, 18👍, 3 months), ZeroClaw (#3566, 7👍), industry Google/Linux Foundation backing | Multi-agent systems require protocol-level federation; MCP is necessary but insufficient for agent-to-agent negotiation |
| **Reasoning model compatibility as table stakes** | NanoBot (#4105, #4227 empty reasoning_content), CoPaw (#4992 visual model decoupling), OpenClaw (DeepSeek, Kimi K2.5/2.6 mentions) | Agent frameworks must handle `reasoning_content`, `thinking` blocks, and vision-text model separation natively |
| **Sandbox security on modern Linux as crisis point** | NanoBot (#4236 Ubuntu 24.04 breakage, #4237 $HOME leak), ZeroClaw (#5127), IronClaw (#4042, #3956) | Bubblewrap's assumptions are breaking; projects need namespace fallback strategies, alternative sandboxes, or kernel parameter documentation |
| **Cost transparency as user requirement** | OpenClaw (#40215 cumulative usage, #90639 context ceiling), ZeroClaw (#5146 400-line skill prompts), LobsterAI (#2121 token waste suspicion) | Token economics are user-visible; agents must self-optimize prompt size and expose accounting |
| **Edge/embedded deployment demand** | PicoClaw (#286 Termux, #2902 Android docs), OpenClaw (#86881 gateway-lite), ZeroClaw (#3642 full Docker simplicity) | "Works on my laptop" is insufficient; ARM64, container-minimal, and air-gapped modes are growth markets |
| **Configuration complexity as adoption barrier** | IronClaw (#3036, #3044 manual wiring complaints), OpenClaw (#29387 bootstrap ignored), ZeroClaw (#4866 web dashboard build) | Declarative, schema-validated, batteries-included defaults are competitive differentiators |
| **Silent failures as trust destroyers** | NanoBot (#4203 history loss), OpenClaw (#90639 "something went wrong"), CoPaw (#4989 silent vLLM failure), Hermes (#41377 undisclosed model fallback) | Observability—explicit error classification, audit trails, progress indication—is becoming as important as correctness |
| **Enterprise IM as hard market requirement** | Feishu fixes across OpenClaw, NanoBot, PicoClaw, ZeroClaw; WeChat (#29144 Hermes), QQ (#2503 ZeroClaw, #2952 PicoClaw) | Western-centric Telegram/Discord coverage is insufficient; Chinese enterprise messaging requires dedicated investment |

---

*Report generated from community digest data dated 2026-06-08. Health scores reflect qualitative assessment of velocity, integration rate, critical bug backlog, and maintainer responsiveness.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-08

## 1. Today's Overview

NanoBot shows **high development velocity** with 18 PRs and 7 issues updated in the last 24 hours, indicating an active maintenance and feature expansion phase. The project has **no new releases** but substantial community contribution with 14 open PRs awaiting review versus 4 merged/closed. A notable concentration of activity centers on **sandbox security hardening** (Bubblewrap fixes), **session history integrity**, and **WebUI polish**. The maintainer team appears responsive with same-day turnaround on several PRs, though the growing backlog of open PRs suggests review bandwidth may become a constraint.

---

## 2. Releases

**None** — No new releases published.

---

## 3. Project Progress

### Merged/Closed PRs (4 items)

| PR | Description | Significance |
|:---|:---|:---|
| [#4240](https://github.com/HKUDS/nanobot/pull/4240) | **feat(webui): render ANSI output in code blocks** — ANSI SGR parser with color/styling support; clean-text copy | WebUX polish for terminal output readability |
| [#4227](https://github.com/HKUDS/nanobot/pull/4227) | **fix: preserve empty-string reasoning_content** — Stops coercing `""` to `None` for custom providers (DeepSeek, Kimi K2.5/2.6) | **Compatibility fix** for reasoning model providers |
| [#2885](https://github.com/HKUDS/nanobot/pull/2885) | **fix(feishu): resolve mentions data and access token init** — `@_user_n` placeholder resolution, accurate bot mention detection | Enterprise messaging reliability |
| [#2663](https://github.com/HKUDS/nanobot/pull/2663) | **fix(whatsapp): handle LID group mentions** — JID normalization, swipe reply routing | Cross-platform messaging robustness |

**Key advances:** Custom provider ecosystem maturing (reasoning content handling), enterprise channel stability (Feishu, WhatsApp), and WebUI terminal experience improvements.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#4203](https://github.com/HKUDS/nanobot/issues/4203) — `find_legal_message_start` drops all messages on orphan tool results | **2 comments**, has fix PR [#4219](https://github.com/HKUDS/nanobot/pull/4219) | **Critical session integrity bug** — message history corruption affects all users with tool loops; community actively patching |
| [#2256](https://github.com/HKUDS/nanobot/issues/2256) — 飞书话题群bot回复问题 | 4 comments, **closed today** | Long-standing enterprise UX issue (Feishu thread replies); resolved via [#2885](https://github.com/HKUDS/nanobot/pull/2885) |

**Underlying needs:** Session reliability under tool-call edge cases is paramount for production deployments. Enterprise users (China market especially) need native platform UX parity.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **🔴 Critical** | [#4203](https://github.com/HKUDS/nanobot/issues/4203) | `find_legal_message_start` **silently drops entire message history** when orphan tool results follow user messages | **PR [#4219](https://github.com/HKUDS/nanobot/pull/4219) open** — regression test included |
| **🟠 High** | [#4237](https://github.com/HKUDS/nanobot/issues/4237) | `bwrap` sandbox leaks `$HOME` to host path, breaking tool writes | **PR [#4239](https://github.com/HKUDS/nanobot/pull/4239) open** |
| **🟠 High** | [#4236](https://github.com/HKUDS/nanobot/issues/4236) | `bwrap` fails on Ubuntu 24.04+ due to restricted unprivileged user namespaces | **No fix PR yet** — affects modern Linux default installs |
| **🟡 Medium** | [#4105](https://github.com/HKUDS/nanobot/issues/4105) | Custom provider drops empty `reasoning_content` | **Fixed in [#4227](https://github.com/HKUDS/nanobot/pull/4227)** |

**Pattern:** Bubblewrap sandbox emerging as **stability risk area** — two related bugs in 24h on modern Linux distributions. The session history bug (#4203) is the most severe due to silent data loss behavior.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Release |
|:---|:---|:---|
| **WebUI version display** with update check | [#4233](https://github.com/HKUDS/nanobot/issues/4233) → **PR [#4235](https://github.com/HKUDS/nanobot/pull/4235)** | **High** — complete implementation, closes tagged issue |
| **Shared voice input** (cross-channel transcription) | **PR [#4232](https://github.com/HKUDS/nanobot/pull/4232)** | High — architectural improvement with legacy fallback |
| **Subagent model override** (`spawn` tool `model` param) | [#4231](https://github.com/HKUDS/nanobot/issues/4231) | Medium — clear use case, needs implementation |
| **Context-pressure-gated microcompaction** | **PR [#4238](https://github.com/HKUDS/nanobot/pull/4238)** | Medium — performance optimization, architectural refactor |

**Roadmap signal:** Strong push toward **multi-modal input** (voice) and **agent orchestration** (subagent model selection) suggests NanoBot positioning for complex multi-agent workflows.

---

## 7. User Feedback Summary

| Pain Point | Evidence | User Segment |
|:---|:---|:---|
| **Silent failures are dangerous** | #4203 history loss, #4236 silent bwrap abort | Production/self-host users |
| **Sandbox UX on modern Linux** | #4236, #4237 Ubuntu 24.04 breakage | Linux desktop/server users |
| **Version visibility** | #4233 "easier to find than `/status`" | WebUI-preferring users |
| **Provider ecosystem fragility** | #4105 reasoning content handling | Custom/self-hosted model users |
| **Enterprise platform parity** | #2256 Feishu threads | China enterprise market |

**Satisfaction:** Responsive maintainer team, same-day PR merges for critical fixes.
**Dissatisfaction:** Bubblewrap sandbox reliability regressing on modern distributions; session history integrity bugs erode trust.

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|:---|:---|:---|:---|
| [#4236](https://github.com/HKUDS/nanobot/issues/4236) — bwrap Ubuntu 24.04 namespace restriction | **New (1 day)** | High — blocks modern Linux adoption | Kernel parameter workaround docs or alternative sandbox strategy |
| [#4190](https://github.com/HKUDS/nanobot/pull/4190) — Improve tool call validation strictness | 4 days | Medium — security/stability | Review; touches core execution path |
| [#4123](https://github.com/HKUDS/nanobot/pull/4123) — MCP SSRF URL validation | 8 days | Medium — security | Review; MCP security hardening |
| [#3982](https://github.com/HKUDS/nanobot/pull/3982) — Scripted agent runner harness | 15 days | Low — testing infrastructure | Review; enables future test coverage |
| [#3983](https://github.com/HKUDS/nanobot/pull/3983) — Runner blocked tool-call finish reasons | 15 days | Low — edge case coverage | Review; pairs with #3982 |

**Critical attention needed:** [#4236](https://github.com/HKUDS/nanobot/issues/4236) lacks a fix PR and affects default Ubuntu 24.04 installations — this is becoming a **support burden** as users upgrade distributions. The testing infrastructure PRs (#3982, #3983, #4193) are valuable but aging; merging them would accelerate future development velocity.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-08

## 1. Today's Overview

Hermes Agent shows **extremely high development velocity** with 50 issues and 50 PRs updated in the last 24 hours, though merge throughput remains low (only 2 PRs merged/closed versus 48 open). The project is in active feature expansion mode with significant work on agent-to-agent protocols, desktop stability, and gateway platform integrations, but the severe backlog imbalance suggests either a release freeze, maintainer bandwidth constraints, or rigorous review standards. No new releases were published today, indicating the project is accumulating changes for a future version rather than shipping incrementally.

---

## 2. Releases

**None** — No new releases published on 2026-06-08.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Description | Significance |
|:---|:---|:---|
| [#41350](https://github.com/NousResearch/hermes-agent/pull/41350) | fix(desktop): recover chat after sleep/wake by revalidating stale remote backend | **User-facing reliability fix** — reduces "Starting Hermes…" lockups from 63 lines vs. previous 555-line attempt; merged by teknium1 |
| [#41595](https://github.com/NousResearch/hermes-agent/pull/41595) | fix: align plugins list with nested bundled plugin enablement | **Superseded by #41613** — closed in favor of cleaner implementation |

### Notable Open PRs Advancing

| PR | Area | Progress |
|:---|:---|:---|
| [#41624](https://github.com/NousResearch/hermes-agent/pull/41624) | Session lifecycle hooks | Adds `session:compress` event for external integrations |
| [#41626](https://github.com/NousResearch/hermes-agent/pull/41626) | Mixture-of-Agents routing | Provider-aware expert clients, reasoning-disable preservation |
| [#41627](https://github.com/NousResearch/hermes-agent/pull/41627) | Cron scheduler hardening | Type safety against LLM-generated malformed `repeat` values |
| [#41630](https://github.com/NousResearch/hermes-agent/pull/41630) | MCP discovery reliability | Timeout increase 0.75s→3.0s for HTTP-based MCP servers |
| [#41526](https://github.com/NousResearch/hermes-agent/pull/41526) | Profile propagation to workers | Fixes Desktop/Dashboard profile isolation (addresses #41517) |

---

## 4. Community Hot Topics

### Most Active Discussion: A2A Protocol Support
**[#514 — Feature: A2A (Agent-to-Agent) Protocol Support](https://github.com/NousResearch/hermes-agent/issues/514)**
- **19 comments, 18 👍** | Open since 2026-03-06, actively updated today
- **Core need**: Interoperability — users want Hermes to participate in multi-agent ecosystems using Google's open standard (Linux Foundation/Apache 2.0), complementary to existing MCP tool-use
- **Strategic signal**: This is the project's **longest-running and most-engaged feature request**, suggesting strong demand for agent federation capabilities beyond single-instance operation

### Emerging Platform Tensions

| Issue | Engagement | Underlying Need |
|:---|:---|:---|
| [#29144 — Weixin multi-account gateway architecture](https://github.com/NousResearch/hermes-agent/issues/29144) | 2 comments, 4 👍 | Enterprise deployment in China — WeChat's single-account limitation is a **hard blocker** for team use, fundamentally different from Telegram/Discord's multi-user model |
| [#38602 — Desktop Client-Only Installation](https://github.com/NousResearch/hermes-agent/issues/38602) | 2 comments, 8 👍 | Thin-client/remote-server deployment pattern for managed environments |

---

## 5. Bugs & Stability

### Critical (P1)

| Issue | Description | Fix PR? |
|:---|:---|:---|
| [#38798](https://github.com/NousResearch/hermes-agent/issues/38798) | **Config migration v25→v26 corrupts `platform_toolsets`**, silently disables all tools — `hermes-cli` rewritten to nonexistent `hermes` | ❌ **No fix PR identified** |
| [#41355](https://github.com/NousResearch/hermes-agent/issues/41355) | **Gateway ignores `--profile` flag**, loads default config/context — breaks multi-profile deployments | ❌ No fix PR |
| [#41311](https://github.com/NousResearch/hermes-agent/issues/41311) | Kanban dispatcher injects archived skill, crashes workers — availability check vs. loader mismatch | ❌ No fix PR |

### High (P2)

| Issue | Description | Fix PR? |
|:---|:---|:---|
| [#41457](https://github.com/NousResearch/hermes-agent/issues/41457) | **Security**: Shell hooks (`pre_tool_call`) silently ignored in Desktop/TUI gateway and ACP adapter — hooks that should veto tool calls are bypassed | ❌ No fix PR |
| [#41517](https://github.com/NousResearch/hermes-agent/issues/41517) | Desktop chat worker loses selected profile, falls back to default | ✅ **#41526** open |
| [#41296](https://github.com/NousResearch/hermes-agent/issues/41296) | Bedrock regional inference profiles fail mid-session `/model` switch — `_bedrock_region` never set | ❌ No fix PR |
| [#41534](https://github.com/NousResearch/hermes-agent/issues/41534) | `managed_uv` has single hardcoded path, no fallback — `hermes update` breaks if binary corrupted | ❌ No fix PR |
| [#41539](https://github.com/NousResearch/hermes-agent/issues/41539) | Discord connect timeout on Windows (30s) | ❌ Marked duplicate |
| [#41331](https://github.com/NousResearch/hermes-agent/issues/41331) | Email IMAP/SMTP login user hardcoded to `EMAIL_ADDRESS` — breaks custom domain setups | ❌ No fix PR |
| [#41366](https://github.com/NousResearch/hermes-agent/issues/41366) | Telegram video messages cached but never exposed to AI — multimodal gap | ❌ No fix PR |
| [#41327](https://github.com/NousResearch/hermes-agent/issues/41327) | Desktop dashboard HTTP 404 — `dist/` packed in asar, never unpacked | ❌ No fix PR |
| [#41407](https://github.com/NousResearch/hermes-agent/issues/41407) | WhatsApp group/LID JIDs misrouted to home channel | ❌ No fix PR |
| [#41377](https://github.com/NousResearch/hermes-agent/issues/41377) | Cron job model fallback on 404 not disclosed — silent substitution, no audit trail | ❌ No fix PR |
| [#41392](https://github.com/NousResearch/hermes-agent/issues/41392) | `hermes cron list` crashes with `TypeError` when `deliver: null` | ❌ No fix PR |
| [#41630](https://github.com/NousResearch/hermes-agent/pull/41630) | MCP discovery race condition in TUI (PR fix open) | ✅ **#41630** open |

### Medium (P3) — Notable Regressions

| Issue | Description | Fix PR? |
|:---|:---|:---|
| [#41518](https://github.com/NousResearch/hermes-agent/issues/41518) | **Regression**: macOS auto-place to `/Applications` + Dock pin removed by OAuth refactor (commit `9d07927a2`) | ❌ No fix PR |
| [#41092](https://github.com/NousResearch/hermes-agent/issues/41092) | Desktop auxiliary model switch preserves stale `base_url` | ❌ No fix PR |
| [#38015](https://github.com/NousResearch/hermes-agent/issues/38015) | Desktop flickering on native Linux Wayland — no workaround | ❌ No fix PR (related #37997 closed) |
| [#37997](https://github.com/NousResearch/hermes-agent/issues/37997) | ~~Desktop chat scrollbar jumps backward~~ | ✅ **Closed** |

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Feature | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| [#514](https://github.com/NousResearch/hermes-agent/issues/514) | A2A Protocol Support | **High** | 3+ months active, 18 👍, ecosystem alignment with Google/Linux Foundation standard |
| [#41190](https://github.com/NousResearch/hermes-agent/issues/41190) | Unified plugin route selector for per-turn provider/model override | Medium | Architectural debt — fragmented routing is acknowledged technical limitation |
| [#41553](https://github.com/NousResearch/hermes-agent/issues/41553) | Hermes Workspace integration in Desktop | Medium | Community tool adoption, official Desktop launch creates natural integration point |
| [#41574](https://github.com/NousResearch/hermes-agent/pull/41574) | Entropy guard pre-tool-use hook | Medium-Low | Reference implementation, security-adjacent, follows hooks pattern |
| [#41632](https://github.com/NousResearch/hermes-agent/pull/41632) | Provider-safe `inject_image` vision tool | Medium | Multimodal gap fill, follows existing tool patterns |
| [#41633](https://github.com/NousResearch/hermes-agent/pull/41633) | Optional message timestamps for LLM context | Medium | Clean implementation, opt-in config |
| [#41314](https://github.com/NousResearch/hermes-agent/issues/41314) | Classify tool errors by type for smarter recovery | Medium | Agent reliability, precedented by #41313 stall detector |
| [#41313](https://github.com/NousResearch/hermes-agent/issues/41313) | Stall detector — stop on N consecutive no-progress tool calls | Medium | Directly addresses observed agent looping behavior (#41490) |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Desktop stability on non-standard environments** | Wayland flickering (#38015), scrollbar jumping (#37997), sleep/wake recovery (#41350), asar packaging (#41327) | High — affects daily usability |
| **Profile isolation failures** | Gateway ignores `--profile` (#41355), worker profile loss (#41517), stale `base_url` (#41092) | High — breaks multi-tenant/team use |
| **Silent failures / missing observability** | Cron model fallback undisclosed (#41377), hooks ignored (#41457), config migration corruption (#38798) | Critical — erodes trust |
| **Platform-specific enterprise blockers** | WeChat single-account (#29144), Windows Discord timeout (#41539), email custom domains (#41331) | Medium-High — limits addressable market |
| **Developer experience friction** | macOS code-signing ambiguity (#41499), `uv` binary resolution fragility (#41534), local build failures | Medium |

### Positive Signals

- Strong community tool ecosystem (`hermes-workspace` in #41553)
- Active multi-platform gateway expansion (Teams document sending #41573, BlueBubbles voice #30529)
- Hooks architecture maturing (entropy guard #41574, session compress #41624)

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>2 weeks old, high engagement, no resolution)

| Issue | Age | Risk |
|:---|:---|:---|
| [#514](https://github.com/NousResearch/hermes-agent/issues/514) A2A Protocol | ~3 months | **Ecosystem positioning risk** — competitor adoption of standard while Hermes deliberates |
| [#29144](https://github.com/NousResearch/hermes-agent/issues/29144) Weixin multi-account | ~3 weeks | **Market access risk** — China enterprise deployment blocked |
| [#38602](https://github.com/NousResearch/hermes-agent/issues/38602) Desktop thin-client | ~4 days | Architecture decision needed on client/server boundary |

### PRs Stalled Despite Clear Value

| PR | Status | Blocker |
|:---|:---|:---|
| [#30529](https://github.com/NousResearch/hermes-agent/pull/30529) BlueBubbles voice uploads | Open since 2026-05-22 | Platform-specific, may need iOS testing access |
| [#33337](https://github.com/NousResearch/hermes-agent/pull/33337) BlueBubbles deduplication | Open since 2026-05-27 | Depends on shared deduplicator architecture buy-in |

### Critical Unfixed P1s

- **#38798** (config migration corruption) and **#41355** (gateway profile ignore) are **data-loss/operational-risk bugs** with no visible PR activity — highest priority for maintainer intervention.

---

*Digest generated from 50 issues and 50 PRs updated 2026-06-08. Data source: NousResearch/hermes-agent GitHub repository.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-08

## 1. Today's Overview

PicoClaw showed **very high development velocity** with 40 tracked activities (21 issues + 19 PRs) in 24 hours, indicating an active maintenance period ahead of the v0.2.9 release cycle. The project closed 17 issues and merged 12 PRs while 4 issues and 7 PRs remain open for continued work. A notable pattern is the surge of **defensive code quality fixes** from contributor `chengzhichao-xydt` addressing error handling gaps across multiple subsystems. Separately, a distinct **trading/finance module** (`clawtrade`) appears to be under parallel development by `jcafeitosa`, suggesting project scope expansion beyond the core AI assistant functionality.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| [v0.2.9-nightly.20260607.7d2b0c2a](https://github.com/sipeed/picoclaw/compare/v0.2.9...main) | Nightly | Automated build; **unstable, use with caution**. No detailed changelog provided beyond commit range. |

**No stable release** published today. The nightly suggests v0.2.9 is approaching stabilization but not yet ready for production use.

---

## 3. Project Progress

### Merged/Closed PRs (12 total)

| PR | Author | Summary | Impact |
|----|--------|---------|--------|
| [#3037](https://github.com/sipeed/picoclaw/pull/3037) | jp39 | **Native Kagi web search provider** — adds `tools.web`/`web_search` integration with Kagi Search API | New feature: expands search provider ecosystem |
| [#3036](https://github.com/sipeed/picoclaw/pull/3036) | SutraHsing | **Canonical Anthropic model ID fix** — changes `claude-sonnet-4.6` → `claude-sonnet-4-6` (dots to hyphens) | Bug fix: resolves API 404 errors for new installs |
| [#3016](https://github.com/sipeed/picoclaw/pull/3016) | chengzhichao-xydt | **Cancel old dispatchTask on reload + nil guard** | Stability: fixes goroutine leak in channel reload |
| [#3046](https://github.com/sipeed/picoclaw/pull/3046) | chengzhichao-xydt | **Add `ok` checks for startup info type assertions** | Defensive: prevents panics on future refactors |
| [#3042](https://github.com/sipeed/picoclaw/pull/3042) | chengzhichao-xydt | **Handle `os.Getwd()` errors** in evolution skills/drafts | Defensive: fixes silent failures when CWD unavailable |
| [#3040](https://github.com/sipeed/picoclaw/pull/3040) | chengzhichao-xydt | **`ok` check for singleflight type assertion** in model probe | Defensive: prevents panic on cache edge cases |
| [#3035](https://github.com/sipeed/picoclaw/pull/3035) | chengzhichao-xydt | **Check `Close()` errors after `io.Copy`** (2 locations) | Reliability: detects disk full/I/O errors |
| [#3034](https://github.com/sipeed/picoclaw/pull/3034) | chengzhichao-xydt | **Check `Close()` error on Feishu resource download** | Reliability: prevents corrupted file registration |
| [#3033](https://github.com/sipeed/picoclaw/pull/3033) | chengzhichao-xydt | **Check `Close()` error after media file download** | Reliability: detects truncated downloads |
| [#2902](https://github.com/sipeed/picoclaw/pull/2902) | puneetdixit200 | **Android Termux documentation guide** | Docs: ARM64 Android deployment support |
| [#2906](https://github.com/sipeed/picoclaw/pull/2906) | SiYue-ZO | **Message bus backpressure + health visibility** | Stability: bounded queues, drop stats, health endpoints |
| [#2936](https://github.com/sipeed/picoclaw/pull/2936) | maxmilian | **Skip skills with missing required binaries** | UX: prevents LLM from advertising unrunnable skills |

**Key theme:** Systematic hardening of error handling across file I/O, type assertions, and goroutine lifecycle management.

---

## 4. Community Hot Topics

### Most Active Discussions (by comment count)

| # | Item | Comments | Analysis |
|---|------|----------|----------|
| [#2674](https://github.com/sipeed/picoclaw/issues/2674) | **Codex OAuth: empty assistant response** | 8 👍4 | **Critical provider integration bug** — ChatGPT backend's `response.output_item.done` streaming format not handled. Fix merged but discussion reveals ongoing provider API fragility. |
| [#286](https://github.com/sipeed/picoclaw/issues/286) | **Android Termux guide** | 8 👍2 | Documentation gap for mobile/edge deployment; resolved by #2902. Shows demand for low-resource device support. |
| [#2952](https://github.com/sipeed/picoclaw/issues/2952) | **"Haven't released in a while"** (Chinese) | 4 | **Meta-feedback on release cadence** + bundled complaints: `exec` command actions, QQ channel restart loops, model provider UX. Indicates user frustration with stability and UI polish. |
| [#2834](https://github.com/sipeed/picoclaw/issues/2834) | **Update from source tutorial** | 4 | Documentation gap for self-upgrades; suggests OTA/update mechanism needed. |
| [#652](https://github.com/sipeed/picoclaw/issues/652) | **Skill-creator workspace broken** | 4 | **Long-standing skill tooling debt** — `init_skill.py` missing from repo. Skills ecosystem has bootstrap problems. |

**Underlying needs:** Better release communication, smoother mobile/edge deployment, self-healing update mechanism, and skill developer experience improvements.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|----------|-------|--------|--------|---------|
| 🔴 **High** | [#3044](https://github.com/sipeed/picoclaw/issues/3044) Matrix `allow_from` colon parsing | **OPEN** | [#3045](https://github.com/sipeed/picoclaw/pull/3045) open | Silently rejects valid Matrix IDs; affects security/ACL functionality |
| 🔴 **High** | [#3041](https://github.com/sipeed/picoclaw/issues/3041) `mcp add` flag parsing broken | **OPEN** | [#3048](https://github.com/sipeed/picoclaw/pull/3048) open | Global flags leak as positionals; breaks http/sse MCP server adds |
| 🟡 **Medium** | [#3049](https://github.com/sipeed/picoclaw/issues/3049) Telegram location messages ignored | **OPEN** | None yet | Missing `message.location` handler; feature gap, not crash |
| 🟡 **Medium** | [#2674](https://github.com/sipeed/picoclaw/issues/2674) Codex OAuth empty responses | **CLOSED** | Merged | Streaming protocol incompatibility with ChatGPT backend |
| 🟢 **Low** | [#2941](https://github.com/sipeed/picoclaw/issues/2941) Anthropic default model ID invalid | **CLOSED** | [#3036](https://github.com/sipeed/picoclaw/pull/3036) | Dots vs hyphens in model name; first-run UX issue |

**Stability assessment:** Two high-severity bugs remain open with active fix PRs. The `chengzhichao-xydt` contributor cluster (6+ PRs) is systematically addressing defensive coding gaps that could become crashes under edge conditions.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in v0.2.9+ | Rationale |
|---------|----------|----------------------|-----------|
| **Omniroute provider** | [#2978](https://github.com/sipeed/picoclaw/issues/2978) | Medium | User asks for combo/routing provider; pattern matches existing multi-provider architecture |
| **Telegram reply-as-mention** | [#2975](https://github.com/sipeed/picoclaw/pull/2975) | Medium | PR stale but well-scoped; improves group chat UX |
| **Kagi search provider** | [#3037](https://github.com/sipeed/picoclaw/pull/3037) | **Merged** | ✅ Already in |
| **ClawHub trading module** | [#3030](https://github.com/sipeed/picoclaw/issues/3030)-[#3032](https://github.com/sipeed/picoclaw/issues/3032) | **In progress** | 6 closed issues suggest parallel finance module development |
| **Native Android support** | [#286](https://github.com/sipeed/picoclaw/issues/286)/[#2902](https://github.com/sipeed/picoclaw/pull/2902) | **Merged** | ✅ Docs landed |

**Prediction:** The `jcafeitosa` trading module issues (#3024-#3032) suggest a **separate binary (`cmd/clawtrade`)** is being developed with exchange connectors, risk management, and hub messaging. This may release independently or as a PicoClaw monorepo expansion.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|-------|----------|----------|
| **Release cadence anxiety** | [#2952](https://github.com/sipeed/picoclaw/issues/2952) "好久没发新版本了" | Medium — users tracking unstable branch |
| **First-run configuration friction** | [#2941](https://github.com/sipeed/picoclaw/issues/2941) invalid defaults, [#2952](https://github.com/sipeed/picoclaw/issues/2952) model provider UX | Medium — new user onboarding issues |
| **Channel-specific bugs** | [#3044](https://github.com/sipeed/picoclaw/issues/3044) Matrix ACL, [#3049](https://github.com/sipeed/picoclaw/issues/3049) Telegram location, [#2952](https://github.com/sipeed/picoclaw/issues/2952) QQ restart loops | High — platform parity gaps |
| **Skill ecosystem brittleness** | [#652](https://github.com/sipeed/picoclaw/issues/652) missing `init_skill.py`, [#2936](https://github.com/sipeed/picoclaw/pull/2936) missing binaries | Medium — skill developer experience |
| **Upgrade path unclear** | [#2834](https://github.com/sipeed/picoclaw/issues/2834) | Low — documentation gap |

### Positive Signals
- Active contributor community (multiple external PRs merged)
- Rapid response to defensive code issues
- Expanding provider ecosystem (Kagi, Omniroute requested)

---

## 8. Backlog Watch

| Item | Age | Issue | Risk |
|------|-----|-------|------|
| **Agent loop reload stability** | ~18 days | [#2904](https://github.com/sipeed/picoclaw/pull/2904) PR open | **High** — core runtime reliability; addresses goroutine leaks, panic cleanup |
| **Message bus backpressure** | ~18 days | [#2906](https://github.com/sipeed/picoclaw/pull/2906) merged ✅ | Resolved |
| **Telegram reply-as-mention** | ~8 days | [#2975](https://github.com/sipeed/picoclaw/pull/2975) PR stale | Medium — UX improvement, low risk |
| **Omniroute provider** | ~8 days | [#2978](https://github.com/sipeed/picoclaw/issues/2978) | Low — needs maintainer triage |
| **Skill-creator broken** | ~3.5 months | [#652](https://github.com/sipeed/picoclaw/issues/652) | **High** — developer onboarding blocker; marked incomplete |

**Maintainer attention needed:**
1. **[#2904](https://github.com/sipeed/picoclaw/pull/2904)** — Agent reload stability PR has been open since May 20 with no merge decision; critical for production deployments
2. **[#652](https://github.com/sipeed/picoclaw/issues/652)** — Skill-creator remains broken with unchecked todo items; blocks skill development workflow
3. **[#2952](https://github.com/sipeed/picoclaw/issues/2952)** — Bundled user complaints need decomposition into trackable issues

---

*Digest generated from GitHub activity data for 2026-06-07/08. All links reference `https://github.com/sipeed/picoclaw`.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-08

## 1. Today's Overview

NanoClaw showed **moderate-to-high activity** on 2026-06-07 with **9 PRs updated** (6 open, 3 closed/merged) and **3 active issues** — all opened or updated within the last 24 hours. No new releases were published. The project appears to be in an active development phase with significant focus on **setup reliability**, **container lifecycle management**, and **security hardening**. Notably, two security-adjacent issues surfaced: an ungated admin-only MCP tool and a credential proxy bypass that silently failed. The maintainer community is responsive with same-day PR submissions, though longer-standing PRs (#1626, #2531) continue to age without resolution.

---

## 2. Releases

**None** — No new releases published.

---

## 3. Project Progress

### Merged/Closed PRs (3 items)

| PR | Author | Description | Outcome |
|:---|:---|:---|:---|
| [#2710](https://github.com/nanocoai/nanoclaw/pull/2710) | markbala | Docs: Ollama prompt caching guide — explains why Claude-Code-CLI → Ollama path is slow and documents dependency-free hash filtering | **Closed** (docs improvement) |
| [#2707](https://github.com/nanocoai/nanoclaw/pull/2707) | gavrielc | **feat(upgrade)**: Startup tripwire + upgrade marker — refuses start after raw `git pull` without sanctioned migration path; fails loudly with self-healing message | **Closed** (version enforcement mechanism) |
| [#2706](https://github.com/nanocoai/nanoclaw/pull/2706) | tier2tech-tian | **fix(账号轮换)**: Account rotation limits — Codex/Gemini modes excluded from Anthropic auto-rotation; DB cursor drift calibration; SIGTERM→SIGKILL killGroup improvement | **Closed** (multi-provider rotation fix) |

**Key advancement**: The upgrade tripwire (#2707) represents a significant operational maturity improvement, preventing the common "git pull broke my install" support burden. The account rotation fixes address production reliability for multi-LLM deployments.

---

## 4. Community Hot Topics

### Most Active Discussions

| Item | Activity | Analysis |
|:---|:---|:---|
| [#2312](https://github.com/nanocoai/nanoclaw/issues/2312) — `groups/global/CLAUDE.md` unconditionally deleted | **2 comments**, open since May 6 | **Underlying need**: Developer experience / clean working tree. The committed file that gets auto-deleted on every startup creates perpetual `git status` noise. This suggests confusion between **version-controlled templates** and **runtime-generated files** — a common architectural tension in agent frameworks. |
| [#2711](https://github.com/nanocoai/nanoclaw/issues/2711) — `create_agent` MCP tool ungated | **0 comments, 0 reactions**, but **critical security** | **Underlying need**: Proper RBAC/authorization boundaries. The documentation claims "admin-only" but implementation lacks any gate. This reveals either: (a) incomplete security audit of MCP tool surface, or (b) documentation drift from intended design. |
| [#2703](https://github.com/nanocoai/nanoclaw/issues/2703) — Setup path advertises broken `pnpm run chat hi` | **0 comments**, fresh | **Underlying need**: First-run success. The "recommended" path leaving `cli/local` unwired while advertising a command that hangs 120s is a **conversion killer** for new users. |

**Pattern**: Issues with zero comments but severe impact suggest the project may need a **triage/severity labeling system** beyond engagement metrics.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#2711](https://github.com/nanocoai/nanoclaw/issues/2711) | **Authorization bypass**: Any container can create agent groups via `create_agent` MCP tool; host performs no role check | **No fix PR** — requires immediate maintainer attention |
| 🟡 **High** | [#2703](https://github.com/nanocoai/nanoclaw/issues/2703) | **Setup regression**: Recommended install path leaves CLI unwired; advertised demo command hangs 120s with `timeout: no reply` | **No fix PR** — #2708 addresses orphaned containers but not this wiring issue |
| 🟡 **High** | [#2705](https://github.com/nanocoai/nanoclaw/pull/2705) | **Credential proxy bypass failure**: `use-native-credential-proxy` skill silently falls back to OneCLI gateway instead of actually opting out; `nativeCredentialsEnabled()` only reads `process.env`, missing launchd/systemd context | **PR open** — [#2705](https://github.com/nanocoai/nanoclaw/pull/2705) by premald |
| 🟢 **Medium** | [#2312](https://github.com/nanocoai/nanoclaw/issues/2312) | **Dirty working tree**: `groups/global/CLAUDE.md` deleted on every startup by `migrateGroupsToClaudeLocal()` | **No fix PR** — trivial fix (remove from repo or make migration idempotent) |
| 🟢 **Medium** | [#2531](https://github.com/nanocoai/nanoclaw/pull/2531) | **UI duplicate text**: `send_message` firing mid-turn causes duplicate text in poll loop | **PR open since May 18** — fix proposed, awaiting review |

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Version |
|:---|:---|:---|
| **DB-backed container configuration** (`env` + `blocked_hosts`) | [#2709](https://github.com/nanocoai/nanoclaw/pull/2709) — implements maintainer-filed #1867 | **High** — follows guidelines, implements maintainer request, fresh PR |
| **Telegram topic isolation with auto-registration** | [#1626](https://github.com/nanocoai/nanoclaw/pull/1626) — open since April 4 | **Uncertain** — aging PR, may need rebase; feature-complete but stalled |
| **Upgrade enforcement / migration safety** | [#2707](https://github.com/nanocoai/nanoclaw/pull/2707) — merged pattern | **Likely extended** — tripwire mechanism may expand to other "sanctioned path" checks |
| **Native credential proxy independence from OneCLI** | [#2705](https://github.com/nanocoai/nanoclaw/pull/2705) | **High if security-focused release** — fixes production deployment blocker |

**Prediction**: Next release (likely v2.0.65+) will include #2709 (container config DB) and #2707's upgrade tripwire. Security fixes (#2711, #2705) may trigger a patch release if maintainer prioritizes CVE-adjacent issues.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Setup friction / first-run failure** | [#2703](https://github.com/nanocoai/nanoclaw/issues/2703) — "recommended path" broken; command hangs 120s | 🔴 Onboarding blocker |
| **Silent failures / misleading docs** | [#2711](https://github.com/nanocoai/nanoclaw/issues/2711) — "admin-only" comment but no enforcement; [#2705](https://github.com/nanocoai/nanoclaw/pull/2705) — "actually bypass" implies prior false advertising | 🟡 Trust erosion |
| **Dirty development environment** | [#2312](https://github.com/nanocoai/nanoclaw/issues/2312) — perpetual git noise | 🟢 Developer annoyance |
| **Container lifecycle leaks** | [#2708](https://github.com/nanocoai/nanoclaw/pull/2708) — orphaned agents on service stop | 🟡 Resource/ops issue |

### Satisfaction Signals

- **Responsive same-day PRs** for operational issues (#2706 account rotation, #2707 upgrade tripwire)
- **Multi-LLM provider support** maturing (Codex/Gemini/Anthropic rotation fixes)
- **Documentation improvements** for self-hosting (#2710 Ollama caching)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1626](https://github.com/nanocoai/nanoclaw/pull/1626) — Telegram topic isolation | **65 days** open | Feature complete but bit-rotting; merge conflicts likely | Maintainer review or explicit close with rationale |
| [#2531](https://github.com/nanocoai/nanoclaw/pull/2531) — Poll loop duplicate text | **21 days** open | Fix ready, low risk | Code review — appears mergeable |
| [#2312](https://github.com/nanocoai/nanoclaw/issues/2312) — CLAUDE.md dirty tree | **33 days** open | Trivial fix, persistent annoyance | Either: remove from `.gitignore` + repo, or make migration check file existence |
| **#1867** (referenced by #2709) | Unknown | Now being implemented | Verify design alignment between maintainer spec and #2709 implementation |

**Critical gap**: [#2711](https://github.com/nanocoai/nanoclaw/issues/2711) (ungated `create_agent`) has **zero comments and no assigned fix** despite being a live security boundary issue. This warrants immediate maintainer triage — at minimum, documentation correction or emergency patch to add role check.

---

*Digest generated from GitHub activity 2026-06-07. All links: [github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw) / [nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw)*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-08

## 1. Today's Overview

IronClaw shows **very high development velocity** with 50 issues and 38 PRs active in the last 24 hours, indicating a project in intensive pre-release engineering. The "Reborn" architecture overhaul dominates all workstreams, with zero new releases suggesting the team is consolidating toward a major milestone rather than shipping incrementally. Security hardening and WebUI v2 beta preparation are the two converging critical paths. The 42:8 open-to-closed issue ratio and 22:16 open-to-merged PR ratio reveal active triage but also substantial work-in-progress that hasn't yet landed.

---

## 2. Releases

**No new releases** (0 published). The pending release PR #3708 (`chore: release`) has been open since 2026-05-16 with breaking API changes queued for `ironclaw_common` (0.4.2→0.5.0), `ironclaw_skills` (0.3.0→0.4.0), and `ironclaw` itself (0.24.0→0.29.1), suggesting a major version bump is imminent but blocked on Reborn stabilization.

---

## 3. Project Progress

### Merged/Closed PRs (16 total, selected significant)

| PR | Description | Significance |
|:---|:---|:---|
| [#4532](https://github.com/nearai/ironclaw/pull/4532) | Slack allowed-channel picker for WebUI v2 admin | **Channel governance** — closes gap between Reborn backend and operator controls |
| [#4511](https://github.com/nearai/ironclaw/pull/4511) | Outbound preference facade contracts | **Delivery infrastructure** — enables user-controlled notification routing |
| [#4530](https://github.com/nearai/ironclaw/pull/4530) | Structured model-visible tool observations | **AI loop safety** — cleaner boundary for tool results vs. recovery metadata |
| [#4463](https://github.com/nearai/ironclaw/pull/4463) | Slack host-beta durable stores | **Reliability** — persistence for conversation state, idempotency |
| [#4516](https://github.com/nearai/ironclaw/pull/4516) | WebChat v2 thread deletion | **Data control** — user-facing privacy feature with safe scoping |
| [#3298](https://github.com/nearai/ironclaw/pull/3298) | Hermetic local CI gate | **Developer experience** — reproducible pre-push validation |
| [#3565](https://github.com/nearai/ironclaw/pull/3565) | Nightly E2E timeout + AGENTS.md refresh | **CI health + onboarding docs** |

### Key Advances
- **WebChat v2 product surface** is approaching feature-complete for beta: thread deletion, session capabilities, skills settings UI, and Slack channel governance all landed
- **Reborn composition runtime** gaining maturity: config seeding on first start, local dev auth wiring, skill state machine formalization
- **Codex compaction strategy** now preserves active tasks — critical for long-running agent sessions

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| # | Issue | Comments | Core Tension |
|:---|:---|:---:|:---|
| [#3280](https://github.com/nearai/ironclaw/issues/3280) | Add ProductWorkflow and InboundTurnService facade | 7 | **Architecture convergence** — the "glue layer" between legacy adapters and Reborn services; blocked on 11 related issues |
| [#3036](https://github.com/nearai/ironclaw/issues/3036) | Configuration-as-Code: tenant blueprints and use-case harnesses | 5 | **Operator usability vs. flexibility** — declarative config is a repeated request; current `.env` + JSON mix is error-prone |
| [#3044](https://github.com/nearai/ironclaw/issues/3044) | Local developer runtime profiles | 3 | **Adoption friction** — engineers want `ironclaw run` without manual grant/mount wiring |
| [#3283](https://github.com/nearai/ironclaw/issues/3283) | Migrate OpenAI-compatible APIs onto Reborn | 3 | **Compatibility promise** — external API stability while internal architecture shifts |
| [#3333](https://github.com/nearai/ironclaw/issues/3333) | Production wiring and missing crates | 3 | **Production readiness** — audit found fake/in-memory seams still present |

### Underlying Needs Analysis
- **#3280** reveals the central architectural risk: Reborn's facade pattern must absorb complexity without becoming a new monolith. The 11 linked dependencies suggest this is a coordination bottleneck, not just a coding task.
- **#3036** and **#3044** together show a community split: operators want enterprise-grade declarative management, while developers want batteries-included local defaults. The project hasn't resolved this duality.

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR? |
|:---|:---|:---|:---:|
| **P0 — Critical** | [#3609](https://github.com/nearai/ironclaw/issues/3609) Approval lease re-attenuation vulnerability | Open | None visible |
| **P0 — Critical** | [#3608](https://github.com/nearai/ironclaw/issues/3608) Dispatch authority sealing gap | Open | None visible |
| **P0 — Critical** | [#3423](https://github.com/nearai/ironclaw/issues/3423) Loop input resume/cancellation semantics undefined | Open | None visible |
| **High** | [#4116](https://github.com/nearai/ironclaw/issues/4116) SSO auth parity gap (Google/GitHub/NEAR) | Open | None visible |
| **High** | [#4042](https://github.com/nearai/ironclaw/issues/4042) Tenant sandbox process capabilities incomplete | Open | None visible |
| **High** | [#3957](https://github.com/nearai/ironclaw/issues/3957) Third-party hook activation hardening | Open | None visible |
| **Medium** | [#3956](https://github.com/nearai/ironclaw/issues/3956) FS bind-mount containment (RESOLVE_NO_XDEV) | Open | None visible |
| **Medium** | [#4059](https://github.com/nearai/ironclaw/issues/4059) Model-visible error recovery context insufficient | Open | None visible |

**Stability Assessment:** Three P0 security issues in the WebUI beta path (#3607 tracker) are unclosed with no linked PRs, representing the highest risk to any near-term release. The "no-exposure safeguards" epic (#3032) and "config-driven composition root" (#3026) are structural blockers explicitly labeled as "cutover blockers" — the team is self-aware about these but they remain unresolved.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Signal Strength | Likely Version | Evidence |
|:---|:---:|:---|:---|
| **WASM-isolated ProductAdapters** | Strong | Post-beta | [#3572](https://github.com/nearai/ironclaw/issues/3572) — Telegram v2 blurred boundaries, explicit plan to componentize |
| **Durable approval policy (not AlwaysAllow)** | Strong | Beta blocker | [#3891](https://github.com/nearai/ironclaw/issues/3891) — security requirement for multi-tenant prod |
| **MissionService for long-running work** | Medium | Post-beta | [#3290](https://github.com/nearai/ironclaw/issues/3290) — replaces "jobs/routines" terminology |
| **Google Calendar/Gmail native extensions** | Medium | Post-beta | [#3829](https://github.com/nearai/ironclaw/issues/3829) — closed as planned, implementation pending |
| **Concurrent background fan-out** | Weak | Future | [#3169](https://github.com/nearai/ironclaw/issues/3169) — intentionally deferred from #3161 |

**Prediction:** The next release will prioritize security blockers (#3608, #3609) and WebUI beta completeness over new capabilities. WASM componentization (#3572) is architecturally committed but likely post-beta.

---

## 7. User Feedback Summary

### Explicit Pain Points (from issue descriptions)

| Source | Pain Point | Issue |
|:---|:---|:---|
| Operators | "Hand-edit mix of `.env`, workspace docs, settings JSON, extension installs, runtime flags — with no schema, no diff, no audit trail" | [#3036](https://github.com/nearai/ironclaw/issues/3036) |
| Developers | "Manually wire grants, mounts, process backends, network policy, and approvals" just to run locally | [#3044](https://github.com/nearai/ironclaw/issues/3044) |
| Security reviewers | "Blocked decisions go only to tracing" instead of durable audit | [#3959](https://github.com/nearai/ironclaw/issues/3959) |
| API consumers | Need OpenAI-compatible surfaces preserved while internals change | [#3283](https://github.com/nearai/ironclaw/issues/3283) |

### Satisfaction Indicators
- **Positive:** Active responsiveness — issues updated same-day, PRs merged within 24h of creation (#4530, #4531, #4532, #4534 all created and merged/updated 2026-06-07)
- **Negative:** Core blockers open for 5+ weeks (#3036 since 2026-04-28) with repeated updates but no resolution, suggesting either complexity underestimation or resource constraints

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#3708](https://github.com/nearai/ironclaw/pull/3708) Release PR | 23 days | **Release blockage** | Merge or close; holding all versioned artifacts |
| [#3036](https://github.com/nearai/ironclaw/issues/3036) Config-as-Code epic | 41 days | **Adoption barrier** | Needs architectural decision on schema language (CUE? Dhall? TOML-native?) |
| [#3026](https://github.com/nearai/ironclaw/issues/3026) Config-driven composition root | 41 days | **Production blocker** | Explicit cutover blocker; no PR linked |
| [#3032](https://github.com/nearai/ironclaw/issues/3032) No-exposure safeguards | 41 days | **Security blocker** | Explicit cutover blocker; no PR linked |
| [#3029](https://github.com/nearai/ironclaw/issues/3029) Migration/compatibility bridges | 41 days | **Upgrade risk** | Explicit cutover blocker; no PR linked |
| [#3169](https://github.com/nearai/ironclaw/issues/3169) Concurrent background fan-out | 38 days | **Scalability ceiling** | Design accepted, implementation deferred — needs scheduling |

**Maintainer Attention Required:** The four "cutover blocker" issues from #2987 (#3026, #3029, #3032, plus #3031 parent) have been open since late April with periodic updates but no visible PRs. These represent the critical path to any production Reborn deployment. The release PR #3708 aging 23 days while breaking changes accumulate suggests either these blockers are holding the release, or release management needs explicit triage.

---

*Digest generated from GitHub activity 2026-06-07. All links: https://github.com/nearai/ironclaw*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-08

## 1. Today's Overview

LobsterAI shows **minimal active development velocity** heading into June 2026. No pull requests were updated or merged in the past 24 hours, and no new releases were published. The only fresh community activity is a single new issue (#2121) questioning token consumption behavior, while 14 older issues received stale-marker updates without resolution. The project appears to be in a **maintenance lull** with accumulating technical debt and unaddressed user experience gaps, particularly around session management, skill system reliability, and IM bot configuration completeness.

---

## 2. Releases

**None.** No new releases published.

---

## 3. Project Progress

**No merged or closed PRs today.** Zero pull request activity indicates no features advanced or bugs fixed through the contribution pipeline in the past 24 hours.

---

## 4. Community Hot Topics

| Issue | Activity | Core Concern |
|-------|----------|--------------|
| [#1509](https://github.com/netease-youdao/LobsterAI/issues/1509) — Skills file generation hangs without progress indication; same model behaves differently vs. Openclaw | 2 comments | **Skill creation reliability and transparency** — users cannot distinguish between processing, failure, or miscomprehension |
| [#2121](https://github.com/netease-youdao/LobsterAI/issues/2121) — Suspected token waste from repeated output | 0 comments, but newly filed | **Cost anxiety** — users monitoring token economics and suspecting client-side inefficiency |

**Underlying needs:** The community is signaling frustration with **opaque AI operations** (no progress visibility, unexplained model behavior variance) and **cost transparency** (token accounting). The comparison to Openclaw in #1509 suggests users are cross-evaluating clients and finding LobsterAI's skill-creator implementation less reliable.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#1500](https://github.com/netease-youdao/LobsterAI/issues/1500) — Disabled skills remain in `activeSkillIds`, continue being injected into prompts | Stale (Apr 7) | None |
| **High** | [#1502](https://github.com/netease-youdao/LobsterAI/issues/1502) — Agent settings skill list changes require Agent switch to sync | Stale (Apr 7) | None |
| **High** | [#1516](https://github.com/netease-youdao/LobsterAI/issues/1516) — Settings panel close leaks GitHub Copilot OAuth polling; tokens lost | Stale (Apr 7) | None |
| **Medium** | [#1506](https://github.com/netease-youdao/LobsterAI/issues/1506) — Scheduled tasks allow IM submission without session selection, fail silently | Stale (Apr 7) | None |
| **Medium** | [#1504](https://github.com/netease-youdao/LobsterAI/issues/1504) — IM Bot AES Key missing required validation | Stale (Apr 7) | None |
| **Medium** | [#1512](https://github.com/netease-youdao/LobsterAI/issues/1512) — QQ Bot group allowlist UI missing add input entirely | Stale (Apr 7) | None |
| **Low** | [#1513](https://github.com/netease-youdao/LobsterAI/issues/1513) — Terms content formatting inconsistencies | Stale (Apr 7) | None |

**Critical pattern:** Three **high-severity bugs** involve state synchronization failures (Redux skill state, Agent config propagation, OAuth lifecycle management) — suggesting systemic weaknesses in the React/state management architecture. All lack fix PRs despite being flagged stale two months ago.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Feature | Likelihood in Next Version |
|-------|---------|---------------------------|
| [#1525](https://github.com/netease-youdao/LobsterAI/issues/1525) — Session color coding | Moderate — UI-only, high user value for power users | ⭐⭐⭐⭐ |
| [#1541](https://github.com/netease-youdao/LobsterAI/issues/1541) — Session tags + filtering | Moderate — foundational for session management at scale | ⭐⭐⭐⭐ |
| [#1537](https://github.com/netease-youdao/LobsterAI/issues/1537) — Message bookmarking/starring | Moderate — extends existing message interaction patterns | ⭐⭐⭐ |
| [#1528](https://github.com/netease-youdao/LobsterAI/issues/1528) — Batch session export | Moderate — data portability demand | ⭐⭐⭐ |
| [#1532](https://github.com/netease-youdao/LobsterAI/issues/1532) — Local usage statistics panel | Lower — requires SQLite aggregation layer | ⭐⭐ |

**Prediction:** Session organization features (#1525, #1541) are most likely to ship next due to clear user demand, implementation clarity, and competitive parity with tools like Obsidian/Notion. The cluster of requests from contributor `MaoQianTu` suggests a coherent UX improvement theme that could be bundled.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Satisfaction Impact |
|------------|----------|---------------------|
| **Skill system unreliability** | #1509 (hanging generation), #1500/#1502 (state desync) | 🔴 Critical — core value proposition compromised |
| **Session management at scale** | #1525, #1528, #1541, #1537 | 🟡 High — power users hitting friction ceiling |
| **IM bot configuration fragility** | #1504, #1506, #1512 | 🟡 High — enterprise/team use cases blocked |
| **Cost opacity** | #2121 | 🟠 Emerging — token-conscious users seeking accountability |
| **Polish gaps** | #1513 (terms formatting) | 🟢 Low — brand perception |

**Use case tension:** The project serves both **individual power users** (session organization, bookmarks, statistics) and **team/enterprise deployments** (IM bots, scheduled tasks, skills). The latter is currently more broken (silent failures, missing UI, validation gaps), suggesting resource misalignment with deployment-ready stability needs.

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|-------|-----|------|---------------|
| [#1518](https://github.com/netease-youdao/LobsterAI/issues/1518) — CI labeler permissions + lint policy | 2 months | 🔴 **Contributor friction** — blocks PR automation, may deter external contributions | Maintainer to merge CI config fix |
| [#1500](https://github.com/netease-youdao/LobsterAI/issues/1500), [#1502](https://github.com/netease-youdao/LobsterAI/issues/1502) | 2 months | 🔴 Core skill system broken | Architecture review of Redux skill state |
| [#1516](https://github.com/netease-youdao/LobsterAI/issues/1516) | 2 months | 🔴 Security-adjacent (token leakage via polling) | AbortController lifecycle audit |
| [#1512](https://github.com/netease-youdao/LobsterAI/issues/1512) | 2 months | 🟡 Feature incomplete (QQ allowlist UI) | UI parity with Feishu/DingTalk implementations |

**Maintainer attention required:** The `#1518` CI infrastructure issue is particularly concerning as it directly impacts project health and contributor experience — yet remains unaddressed despite a clear fix path. The uniform 2-month staleness across 14 issues suggests either **resource constraints** or **prioritization freeze**, warranting community communication about project status.

---

*Digest generated from github.com/netease-youdao/LobsterAI data as of 2026-06-08.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-08

## 1. Today's Overview

Moltis shows **moderate but focused development activity** over the past 24 hours, with three open pull requests receiving updates and one active enhancement issue. No releases were cut, suggesting the team is in a consolidation phase rather than shipping cadence. All three PRs are authored by `s-salamatov`, indicating concentrated contributor effort on infrastructure and platform integrations. The single open issue reflects ongoing attention to mobile UX polish. Overall project health appears **stable but not accelerating**—there's no community churn or urgent firefighting, though the lack of merged code today suggests review bottlenecks or deliberate caution before integration.

---

## 2. Releases

**No new releases** in the past 24 hours. The project remains without a latest release tag in this reporting period.

---

## 3. Project Progress

**No PRs were merged or closed today.** However, three open PRs received updates on 2026-06-07, indicating active development:

| PR | Focus | Status |
|---|---|---|
| [#1113](https://github.com/moltis-org/moltis/pull/1113) | Telegram streaming hotfix | Open, updated 2026-06-07 |
| [#1089](https://github.com/moltis-org/moltis/pull/1089) | Tool result persistence capping | Open, updated 2026-06-07 |
| [#1093](https://github.com/moltis-org/moltis/pull/1093) | Channel activity log visibility | Open, updated 2026-06-07 |

**Features advancing:**
- **Telegram platform reliability**: PR #1113 fixes a regression from prior streaming work (#1099), restoring proper final reply handling when completion notifications are disabled
- **Memory/performance optimization**: PR #1089 continues refinement of session rehydration with content capping across all chat paths (normal, streaming, retry, compaction, inspection)
- **Privacy/observability controls**: PR #1093 adds granular activity log visibility with hierarchical override semantics

---

## 4. Community Hot Topics

**Most active discussion:**

| Item | Activity | Analysis |
|---|---|---|
| [#1107](https://github.com/moltis-org/moltis/issues/1107) — Multiline text input in mobile web UI | 1 comment, created 2026-06-05, updated 2026-06-07 | **Underlying need**: Mobile UX parity with desktop. The preflight checklist structure suggests a disciplined user base; the gap between "searched existing requests" and actual implementation indicates mobile web may be underinvested relative to native/platform integrations (Telegram, etc.). |

**PRs lack visible community engagement** — no comments or reactions on any of the three updated PRs, suggesting either: (a) small maintainer team with async review, (b) PRs are internally-driven infrastructure work, or (c) community participation is concentrated elsewhere (Discord/forum not captured in GitHub metrics).

---

## 5. Bugs & Stability

| Severity | Item | Details | Fix Status |
|---|---|---|---|
| **Medium** | [#1113](https://github.com/moltis-org/moltis/pull/1113) | Telegram streaming regression: final replies fail when completion notifications disabled | **Fix PR open** — hotfix ready, awaiting merge |
| **Low-Medium** | [#1089](https://github.com/moltis-org/moltis/pull/1089) | Unbounded tool result growth on session rehydration (performance/stability risk) | **Fix PR open** — comprehensive coverage across all chat modes |

**No new crash reports or critical regressions** filed today. The Telegram issue (#1113) is a **regression from #1099**, indicating streaming infrastructure remains volatile. The persistence capping work (#1089) is **preventive hardening** against production memory pressure.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Version | Rationale |
|---|---|---|---|
| Multiline mobile web input | [#1107](https://github.com/moltis-org/moltis/issues/1107) | **Moderate** | Small scoped enhancement, but no assignee or milestone; competing with infrastructure PRs |
| Hierarchical activity log controls | [#1093](https://github.com/moltis-org/moltis/pull/1093) | **High** | PR already open with complete implementation; likely merges soon |
| Session memory optimization | [#1089](https://github.com/moltis-org/moltis/pull/1089) | **High** | Critical for scale; comprehensive test coverage suggests near-ready |

**Emerging pattern**: Heavy investment in **observability controls** (#1093) and **resource bounds** (#1089) suggests the project is maturing from feature-building to operational reliability—typical of pre-1.0 or early production deployments.

---

## 7. User Feedback Summary

**Explicit pain point:**
- **Mobile web input friction** ([#1107](https://github.com/moltis-org/moltis/issues/1107)): Single-line constraint breaks natural message composition on mobile browsers

**Inferred pain points from PR context:**
- **Telegram streaming inconsistency**: Users expect uniform behavior regardless of notification settings; the regression suggests configuration matrix testing gaps
- **Session bloat**: Tool result capping implies users hit memory/performance limits with long-running sessions or heavy tool use
- **Privacy/operational noise**: Granular activity log controls suggest channel operators need to manage information exposure to participants

**Satisfaction signal**: Disciplined issue filing with preflight checklists indicates engaged, patient user base willing to follow process.

---

## 8. Backlog Watch

| Risk | Item | Age | Concern |
|---|---|---|---|
| **Review bottleneck** | [#1089](https://github.com/moltis-org/moltis/pull/1089) — Cap persisted tool results | 7 days open | Complex, cross-cutting change touching 6+ code paths; may need dedicated review bandwidth |
| **Platform debt** | [#1113](https://github.com/moltis-org/moltis/pull/1113) — Telegram hotfix | 1 day open | Regression fix should ideally merge quickly; delay risks user-visible Telegram failures |
| **UX neglect** | [#1107](https://github.com/moltis-org/moltis/issues/1107) | 3 days open | No assignee; mobile web may lack champion against platform integration priorities |

**Recommended maintainer attention**: Prioritize #1113 merge given regression status; assign #1107 to frontend/mobile contributor to prevent backlog stagnation; schedule #1089 review session given architectural scope.

---

*Digest generated from github.com/moltis-org/moltis data for 2026-06-08.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-08

## 1. Today's Overview

CoPaw (QwenPaw) shows **moderate community activity** with 5 new issues and 2 open PRs in the last 24 hours, though no releases or merged contributions. The project appears to be in a **maintenance-heavy phase** with zero code integration activity—both PRs remain unmerged and all issues are open. A notable pattern is the **divergence between infrastructure/protocol work** (ACP protocol extension) and **user-facing stability problems** (regression in v1.1.9/1.1.10, UI bugs). The absence of maintainer merges or release activity suggests either a pre-release stabilization period or reduced core team bandwidth.

---

## 2. Releases

**No new releases.** Latest version remains **v1.1.10** (released prior to 2026-06-08).

---

## 3. Project Progress

**No PRs merged or closed today.** Both active PRs remain in open status:

| PR | Status | Progress Assessment |
|---|---|---|
| [#4995](https://github.com/agentscope-ai/QwenPaw/pull/4995) - fix(channels): preserve renderer tool output | Open, first-time contributor | Bug fix for tool output rendering; **ready for review** — addresses attachment metadata loss |
| [#4949](https://github.com/agentscope-ai/QwenPaw/pull/4949) - feat(acp): advertise commands, surface errors, tool params, agent/model meta, file links | Open, under review since 2026-06-03 | Protocol infrastructure work; **5 days in review** — extends ACP server for TUI client compatibility |

**Blocked progress:** No advancement on either PR since yesterday. The ACP protocol PR (#4949) is particularly stalled given its scope and review duration.

---

## 4. Community Hot Topics

| Rank | Item | Comments | Underlying Need |
|:---:|---|:---:|---|
| 🔥 | [#4992](https://github.com/agentscope-ai/QwenPaw/issues/4992) - Visual Model Fallback (独立视觉模型配置) | 2 | **Model flexibility decoupling** — Users want to use text-only models with occasional vision needs without upgrading their entire model stack |
| 🔥 | [#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) - v1.1.9/1.1.10 regression with local Qwen3.6-27B | 2 | **Deployment reliability** — Docker + local vLLM setup broken by recent releases; downgrade as only workaround |
| 3 | [#4994](https://github.com/agentscope-ai/QwenPaw/issues/4994) - Hierarchical memory system with self-evolution | 1 | **Agent autonomy** — Users comparing against "mainstream agent frameworks" (likely AutoGPT, LangGraph); memory is perceived as competitive gap |
| 4 | [#4993](https://github.com/agentscope-ai/QwenPaw/issues/4993) - Image preview drag jitter (macOS) | 1 | **UI polish** — Frontend quality regression affecting daily use |
| 5 | [#4991](https://github.com/agentscope-ai/QwenPaw/issues/4991) - Unlabeled question with screenshot | 1 | **User onboarding friction** — Empty template suggests confusion or incomplete submission |

**Key insight:** The two most-discussed issues represent **architectural flexibility** (#4992) and **release quality** (#4989) — tension between expanding capabilities and stabilizing existing ones.

---

## 5. Bugs & Stability

| Severity | Issue | Details | Fix PR? | Regression? |
|:---:|---|---|---|:---:|
| 🔴 **Critical** | [#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) | v1.1.9/1.1.10: Local vLLM deployment (Qwen3.6-27B) silent failure — no response, no logs, infinite loading | **No** | ✅ Yes (worked in 1.1.5.post2) |
| 🟡 **Medium** | [#4993](https://github.com/agentscope-ai/QwenPaw/issues/4993) | Image preview drag jitter on macOS 26.5 | **No** | Unknown |
| 🟢 **Low** | [#4991](https://github.com/agentscope-ai/QwenPaw/issues/4991) | Unlabeled user question (possibly UI-related per screenshot) | N/A | N/A |

**Critical concern:** The [#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) regression affects a **standard OpenAI-compatible deployment pattern** (vLLM + Docker) with no error logs for debugging. This suggests either: (a) silent exception handling, (b) request format change in 1.1.9+, or (c) timeout/connection issue. The lack of maintainer response or fix PR is **alarming for production users**.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Feature | Predicted Priority | Next Version Likelihood |
|---|---|---|---|
| [#4992](https://github.com/agentscope-ai/QwenPaw/issues/4992) | Independent visual model configuration (`visual_model` fallback) | **High** | Medium — requires architecture change; aligns with multi-model trend |
| [#4994](https://github.com/agentscope-ai/QwenPaw/issues/4994) | Hierarchical self-evolving memory system | Medium-High | Low — major refactor, vague requirements ("absorb mainstream frameworks") |

**Signal analysis:** 
- **#4992** is well-specified with configuration examples and clear use case (deepseek-v4-flash + vision). This matches industry pattern (Claude's approach, GPT-4V routing) and would differentiate QwenPaw in model-flexibility.
- **#4994** is aspirational but underspecified — "self-evolution" and "mainstream frameworks" need concrete reference implementations before actionable.

---

## 7. User Feedback Summary

| Theme | Evidence | Sentiment |
|---|---|---|
| **Version upgrade anxiety** | #4989: "upgrade...then bug appeared"; downgrade as fix | 😠 Negative — trust erosion |
| **Model vendor lock-in frustration** | #4992: "don't want to change main model just for vision" | 😐 Frustrated — seeking flexibility |
| **Competitive comparison pressure** | #4994: "need to quickly absorb mainstream agent frameworks" | 😐 Anxious — FOMO on features |
| **macOS frontend quality** | #4993: daily-use UI bug | 😠 Annoyed — polish gap |
| **Deployment complexity** | #4989: Docker + vLLM + local model stack | 😐 Complex — silent failures make debugging impossible |

**Core pain point:** Users investing in **local/self-hosted deployments** (vLLM, Docker) are experiencing **regressions without diagnostic visibility**. This undermines a key value proposition for privacy-conscious or cost-sensitive users.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [#4949](https://github.com/agentscope-ai/QwenPaw/pull/4949) ACP protocol extension | 5 days open, "Under Review" | **Medium** — Protocol work blocking TUI client; may have dependencies on other ACP changes | Maintainer review/merge or explicit feedback |
| [#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) v1.1.9/1.1.10 regression | 2 days, no maintainer response | **High** — Production regression, no workaround except downgrade | Urgent triage; bisect 1.1.5→1.1.9 changes; hotfix release |
| [#4995](https://github.com/agentscope-ai/QwenPaw/pull/4995) First-time contributor fix | 1 day open | **Low** — Straightforward bug fix, contributor engagement at risk | Review/merge to encourage contribution |

**Maintainer attention gap:** No visible maintainer activity on any issue or PR in the 24h window. The combination of a **production regression** (#4989) and **stalled protocol PR** (#4949) suggests either: concentrated effort on unobserved branch work, or **resource constraint requiring community help with triage**.

---

*Digest generated from github.com/agentscope-ai/CoPaw data as of 2026-06-08. All links reference github.com/agentscope-ai/QwenPaw repository.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-08

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 50 issues and 50 PRs updated in the last 24 hours, though the merge ratio remains skewed toward open work (39 open PRs vs. 11 merged/closed). The project is in active **v0.8.0 release preparation** with a dedicated release PR (#7364) opened today. Most activity concentrates on the `zerocode` TUI client, provider ecosystem expansion, and channel infrastructure hardening. No new releases were published today, suggesting maintainers are consolidating changes before shipping. The community continues to surface significant architectural requests around multi-agent routing, A2A protocol support, and security isolation—indicating the project is maturing beyond single-user tooling toward enterprise-grade deployment scenarios.

---

## 2. Releases

**None today.** Release-prep PR [#7364](https://github.com/zeroclaw-labs/zeroclaw/pull/7364) (`chore(release): release v0.8.0`) was opened but not yet merged.

---

## 3. Project Progress

### Merged/Closed PRs (11 total, selected highlights)

| PR | Description | Significance |
|---|---|---|
| [#7249](https://github.com/zeroclaw-labs/zeroclaw/pull/7249) | Theme system overhaul: color-depth fallback, registry presets, per-agent overrides, palette swatches | **User-facing quality**: Fixes garbled colors in older terminals (macOS Terminal.app, tmux/screen) |
| [#7190](https://github.com/zeroclaw-labs/zeroclaw/pull/7190) | Outbound message queue with sidebar and injection | **UX architecture**: Eliminates input blocking during LLM turns; enables async message handling |
| [#7209](https://github.com/zeroclaw-labs/zeroclaw/pull/7209) | `/model` and `/model-provider` picker with live switching | **Power-user feature**: In-session provider switching without restart |
| [#7178](https://github.com/zeroclaw-labs/zeroclaw/pull/7178) | Per-alias model-provider fallback chains | **Reliability**: Replaces implicit V2/V3 fallback with explicit operator-declared chains |
| [#7315](https://github.com/zeroclaw-labs/zeroclaw/pull/7315) | Bedrock: skip prompt caching for unsupported models | **Bug fix**: Resolves `400` errors on non-Claude/Nova Bedrock models |
| [#7357](https://github.com/zeroclaw-labs/zeroclaw/pull/7357) | Update image history fixture context field | **Test maintenance**: Aligns fixtures with model-provider ref architecture |
| [#7262](https://github.com/zeroclaw-labs/zeroclaw/pull/7262) | Docs for 7 new schema-v3 providers | **Documentation parity** with provider expansion |
| [#7011](https://github.com/zeroclaw-labs/zeroclaw/pull/7011) | Define issue ownership path for maintainers | **Process**: Clarifies stewardship for stale-exempt and in-progress issues |

### Open PRs Advancing

- **[#7330](https://github.com/zeroclaw-labs/zeroclaw/pull/7330)**: Quickstart TUI form UX repair — leveraging rich metadata (`is_secret`, `kind: enum`) for better onboarding
- **[#7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361)**: RFC-6969 per-turn output routing (`send_via`) + voice delivery fixes — resolves double-send bug for voice-only Telegram peers
- **[#7260](https://github.com/zeroclaw-labs/zeroclaw/pull/7260)**: 7 new OpenAI-compatible providers (Morph, GitHub Models, Upstage, Featherless, Arcee, Lambda AI, Inception) under schema-v3

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Comments | 👍 | Topic | Underlying Need |
|---|---|---|---|---|
| [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) **CLOSED** | 28 | 0 | Web dashboard unavailable | **Build system complexity**: Users hit `npm ci && npm run build` requirement repeatedly; indicates packaging/distribution gap for web assets |
| [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) | 11 | 2 | Better logo | **Project identity/branding**: Community wants professional visual identity; low technical risk but blocked awaiting author action |
| [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) | 9 | 1 | Token consumption minimization via skill compilation | **Cost optimization at scale**: 400+ line SKILL.md prompts per weather query is economically unsustainable for production |
| [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) | 9 | 3 | "Full" Docker image with all features | **Onboarding friction**: Feature-flag compile complexity creates barrier for non-technical users wanting WhatsApp, etc. |
| [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) | 9 | 0 | Napcat/OneBot channel support | **QQ ecosystem integration**: Chinese IM platform connectivity gap |

### Analysis

The closed [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) with 28 comments reveals a **recurring pain point**: web dashboard availability depends on manual Node.js build steps, suggesting the project lacks pre-built web assets in releases. The high-engagement feature requests (#5146 token optimization, #3642 Docker simplicity, #3566 A2A below) indicate users are pushing ZeroClaw from **developer tool** toward **deployable infrastructure**.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Description |
|---|---|---|---|---|
| **S0** — Data loss / security risk | [#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) | OPEN | ❌ No | `file_write` tool reports success but files invisible on host filesystem — Docker volume mapping failure |
| **S1** — Workflow blocked | [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) | OPEN, in-progress | ❌ No | Gemini CLI OAuth non-functional after authentication — provider integration broken |
| **S1** — Workflow blocked | [#4873](https://github.com/zeroclaw-labs/zeroclaw/issues/4873) | OPEN | ❌ No | Feishu integration calls LLM directly instead of Agent — routing logic error |
| **S1** — Workflow blocked | [#5155](https://github.com/zeroclaw-labs/zeroclaw/issues/5155) | **CLOSED** | ✅ [#5155 fix implied] | Delegate agents ignore `prompt_injection_mode` config — always inject full skills |
| **S1** — Workflow blocked | [#5803](https://github.com/zeroclaw-labs/zeroclaw/issues/5803) | **CLOSED** | ✅ [#5803 fix implied] | Fallback provider chain ignores `[providers.X]` config, only reads env vars |
| **S2** — Degraded experience | [#4880](https://github.com/zeroclaw-labs/zeroclaw/issues/4880) | **CLOSED** | ✅ [#4880 fix implied] | `context_compression` not triggered in daemon/channel mode — memory bloat |
| **S2** — Degraded behavior | [#5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) | **CLOSED** | ✅ [#5122 fix implied] | `web_fetch` `allowed_private_hosts` bypassed by DNS-to-private-IP resolution — SSRF risk |

### Stability Assessment

**Positive**: Several S1/S2 bugs closed, including security-relevant SSRF fix (#5122) and config resolution fix (#5803). **Concern**: Three S0/S1 issues remain open without linked fix PRs, particularly the Docker `file_write` data-loss bug (#4627) and Gemini OAuth breakage (#4879). The Feishu routing bug (#4873) suggests channel-agent integration remains fragile for enterprise IM platforms.

---

## 6. Feature Requests & Roadmap Signals

### High-Probability Near-Term (v0.8.x or v0.9.0)

| Feature | Issue | Signals | Confidence |
|---|---|---|---|
| **Per-alias webhook routing** | [#6312](https://github.com/zeroclaw-labs/zeroclaw/issues/6312) | PR [#7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361) in flight; RFC-6969 referenced | **High** — code complete |
| **Provider-scoped fallback chains** | [#4647](https://github.com/zeroclaw-labs/zeroclaw/issues/4647) | PR [#7178](https://github.com/zeroclaw-labs/zeroclaw/pull/7178) merged | **Shipped** |
| **7 new schema-v3 providers** | — | PR [#7260](https://github.com/zeroclaw-labs/zeroclaw/pull/7260) open | **High** — pending merge |
| **Azure OpenAI `reasoning_effort`** | — | PR [#7350](https://github.com/zeroclaw-labs/zeroclaw/pull/7350) open | **High** — small, targeted |

### Medium-Term Architectural Bets (v0.9.0+)

| Feature | Issue | Blockers/Complexity |
|---|---|---|
| **A2A Protocol Support** | [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) | 7 👍; requires gateway HTTP refactoring; interop commitment |
| **Multi-Agent Routing** | [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) | 9 👍; highest community demand; complex workspace/session isolation |
| **Air-gapped execution / enclave mode** | [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) | RFC status; security-critical; needs maintainer review; unix socket IPC design |
| **Skill compilation / token minimization** | [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) | High risk label; fundamental agent architecture change; performance-critical |
| **Bubblewrap sandbox hardening** | [#5127](https://github.com/zeroclaw-labs/zeroclaw/issues/5127) | Security-focused; blocked on config design |

### Prediction

**Multi-Agent Routing (#2767)** and **A2A Support (#3566)** are the strongest candidates for v0.9.0 flagship features based on vote count and architectural alignment with the project's gateway/channel expansion. **Air-gapped mode (#6293)** may require dedicated security-focused release cycle.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|---|---|---|
| **Build/packaging complexity** | [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) (28 comments), [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) (9 comments) | High — blocks first-run experience |
| **OAuth/provider authentication fragility** | [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) (Gemini), [#4703](https://github.com/zeroclaw-labs/zeroclaw/issues/4703) (Qwen) | High — breaks core functionality |
| **Channel integration gaps** | [#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) (napcat/OneBot), [#4873](https://github.com/zeroclaw-labs/zeroclaw/issues/4873) (Feishu), [#5145](https://github.com/zeroclaw-labs/zeroclaw/issues/5145) (send_channel_message tool missing) | Medium-High — limits deployment flexibility |
| **Observability/operability** | [#4721](https://github.com/zeroclaw-labs/zeroclaw/issues/4721) (logs to stdout not stderr), [#4832](https://github.com/zeroclaw-labs/zeroclaw/issues/4832) (LeakDetector false positives) | Medium — DevOps friction |
| **Cost/performance at scale** | [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) (token bloat from skills) | Medium — economic sustainability |

### Satisfaction Indicators

- Strong community engagement (50 issues/PRs daily)
- Active maintainer responsiveness (multiple PRs merged same-day)
- Rich feature development (TUI improvements, provider expansion)

### Dissatisfaction Indicators

- "Needs-author-action" and "blocked" labels on popular issues (#4710, #3642, #2467, #6293)
- Recurring web dashboard build issues (#4866 pattern)
- Enterprise features (multi-agent, A2A, air-gapped) still in design phase

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Status | Risk | Action Needed |
|---|---|---|---|---|
| [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) Air-gapped execution / enclave | ~5 weeks | `needs-maintainer-review`, `blocked` | **High** | Security architecture review; RFC approval |
| [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) Full Docker image | ~12 weeks | `blocked`, `needs-author-action` | Medium | Decision on official image strategy; memory vs. convenience tradeoff |
| [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) Webhook transforms | ~14 weeks | `blocked` | **High** | Gateway webhook architecture redesign |
| [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) Better logo | ~11 weeks | `needs-author-action` | Low | Design community coordination or close as non-actionable |
| [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) Multi-Agent Routing | ~14 weeks | `accepted`, `no-stale` | **High** | 9 👍; highest voted open feature; needs RFC or implementation plan |

### PRs At Risk

| PR | Age | Status | Concern |
|---|---|---|---|
| [#7330](https://github.com/zeroclaw-labs/zeroclaw/pull/7330) Quickstart UX fix | 2 days | `DO NOT MERGE - AUTHOR WILL MERGE` | Author-merge pattern may delay integration |
| [#7249](https://github.com/zeroclaw-labs/zeroclaw/pull/7249) Theme enhancements | 3 days | Closed without merge comment | Large XL PR; may need re-implementation |

---

*Digest generated from GitHub activity 2026-06-07 to 2026-06-08. All links: https://github.com/zeroclaw-labs/zeroclaw*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*