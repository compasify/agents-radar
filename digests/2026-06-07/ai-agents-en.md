# OpenClaw Ecosystem Digest 2026-06-07

> Issues: 296 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-07 00:27 UTC

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

# OpenClaw Project Digest — 2026-06-07

## 1. Today's Overview

OpenClaw shows **extremely high velocity** with 296 issues and 500 PRs updated in the last 24 hours, indicating a mature, actively maintained project approaching or in a major release cycle. The 408:92 open-to-merged PR ratio suggests significant pending review backlog, with many contributions awaiting maintainer bandwidth. Two beta releases (v2026.6.5-beta.1/2) shipped recently, focused on polishing reasoning-content handling and MCP tool result coercion. The community is intensely engaged around **OpenAI/ChatGPT Responses transport reliability**, **session state integrity**, and **platform-specific delivery bugs** (QQ, Feishu, Discord). Project health is strong on contribution volume but strained on review throughput.

---

## 2. Releases

### v2026.6.5-beta.2 & v2026.6.5-beta.1
- **QQBot reasoning leak fix**: Strips `<thinking>` scaffolding before native delivery, preventing raw reasoning content from leaking into channel replies ([#89913](https://github.com/openclaw/openclaw/issues/89913), [#90132](https://github.com/openclaw/openclaw/issues/90132)) — thanks @openperf
- **MCP tool result coercion**: Handles `resource_link`, `resource`, `audio`, malformed image, and future novel content types gracefully

*No breaking changes noted; these are iterative beta patches ahead of likely 2026.6.5 stable.*

---

## 3. Project Progress

**Merged/Closed PRs (selected from today's activity):**

| PR | Description | Impact |
|---|---|---|
| [#91034](https://github.com/openclaw/openclaw/pull/91034) | Store ACPX process state in SQLite (was XL, closed) | Infrastructure migration to SQLite-backed plugin state |
| [#91030](https://github.com/openclaw/openclaw/pull/91030) | Store device-pair notify state in SQLite (closed) | Pairing reliability, state durability |
| [#91024](https://github.com/openclaw/openclaw/pull/91024) | Add `webwright` skill (closed) | New browser automation skill via Microsoft Webwright |
| [#91032](https://github.com/openclaw/openclaw/pull/91032) | iMessage docs: macOS 26 injection gates (open, waiting) | Security boundary documentation |

**Notable advancing PRs:**
- [#91026](https://github.com/openclaw/openclaw/pull/91026): macOS realtime relay mode for Talk — major platform expansion
- [#91031](https://github.com/openclaw/openclaw/pull/91031): OpenRouter OAuth login for Codex — auth provider diversification
- [#90328](https://github.com/openclaw/openclaw/pull/90328): WebUI model picker shows agent runtimes — UX transparency

---

## 4. Community Hot Topics

| Item | Comments | Analysis |
|---|---|---|
| [#90083](https://github.com/openclaw/openclaw/issues/90083) OpenAI ChatGPT Responses transport fails with `invalid_provider_content_type` for gpt-5.4/5.5 | 14 | **Critical regression** in latest stable; blocks next-gen OpenAI model adoption. Migration path broken. |
| [#67035](https://github.com/openclaw/openclaw/issues/67035) Windows chat UI regression: input swallowed, streamed replies invisible | 14 | Long-running Windows UX crisis, now closed — indicates fix finally shipped or issue aged out |
| [#88312](https://github.com/openclaw/openclaw/issues/88312) Codex turn-completion stall regression | 13 | **Recurring nightmare**: Same bug as #84076, previously "fixed" by #85107. Suggests architectural fragility in Codex native path. |
| [#88929](https://github.com/openclaw/openclaw/issues/88929) Feishu streaming card: typewriter effect + truncation | 11 | Enterprise China market blocker; visual polish degrades professional use |

**Underlying needs:** Enterprise reliability (Feishu, Windows), OpenAI latest-model compatibility, and **regression prevention** for Codex native integrations.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|---|---|---|---|
| **P1** | [#90083](https://github.com/openclaw/openclaw/issues/90083) gpt-5.4/5.5 `invalid_provider_content_type` | OPEN | ❌ No fix PR |
| **P1** | [#88312](https://github.com/openclaw/openclaw/issues/88312) Codex turn-completion stall (regression) | OPEN | ❌ No fix PR; linked PR #85107 insufficient |
| **P1** | [#90991](https://github.com/openclaw/openclaw/issues/90991) Cron trigger contaminates global runtime state | OPEN, new today | ❌ No fix PR |
| **P1** | [#90093](https://github.com/openclaw/openclaw/issues/90093) Native replay sends encrypted reasoning, breaks next turn | OPEN | ❌ No fix PR |
| **P1** | [#90925](https://github.com/openclaw/openclaw/issues/90925) Subagent compaction falls into API-key route (Codex/OAuth) | OPEN, new today | ❌ No fix PR |
| **P1** | [#49603](https://github.com/openclaw/openclaw/issues/49603) Orphaned lock files on gateway restart | OPEN, stale | ❌ No fix PR |
| **P1** | [#71491](https://github.com/openclaw/openclaw/issues/71491) Kimi K2.6 `reasoning_content` 400 after compaction | OPEN | ❌ No fix PR |
| **P1** | [#72031](https://github.com/openclaw/openclaw/issues/72031) `image` tool fails Bedrock with `aws-sdk` auth | OPEN | ❌ No fix PR |
| P2 | [#90595](https://github.com/openclaw/openclaw/issues/90595) Cron "failed" notifications during hot reload | OPEN | ❌ No fix PR |
| P2 | [#90886](https://github.com/openclaw/openclaw/issues/90886) Gateway hangs when provider lacks credentials | OPEN, new today | ❌ No fix PR |
| P2 | [#90428](https://github.com/openclaw/openclaw/issues/90428) `exec` tool triggers SIGTERM on WSL2/Node 24 | OPEN | ❌ No fix PR |

**Critical pattern:** Multiple **P1 auth-provider and session-state regressions** with **zero fix PRs** in flight. The project's review backlog is directly impacting stability.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood in Next Version |
|---|---|---|
| **Topic-session families** (multi-lane contexts per assistant) | [#90916](https://github.com/openclaw/openclaw/issues/90916) | Medium — large architectural change, but high user value |
| **Self-hosted STT/TTS in WebChat** | [#45508](https://github.com/openclaw/openclaw/issues/45508) | Medium — PR exists, needs proof |
| **Per-candidate retry for model fallback** | [#59413](https://github.com/openclaw/openclaw/issues/59413) | Medium — clear enterprise need |
| **Guarantee last N raw messages survive compaction** | [#58818](https://github.com/openclaw/openclaw/issues/58818) | Medium — memory architecture touchy |
| **Local providers as first-class citizens** | [#89265](https://github.com/openclaw/openclaw/issues/89265) | High — aligns with cost trends, open weights |
| **Gateway circuit breaker for unhealthy sessions** | [#62615](https://github.com/openclaw/openclaw/issues/62615) | Medium — reliability infrastructure |
| **Runtime self-context config/tool** | [#90101](https://github.com/openclaw/openclaw/pull/90101) | **High — PR ready for review** |

**Predicted for v2026.7.x:** Runtime self-context (#90101), OpenRouter OAuth (#91031), local provider improvements, and continued MCP/browser expansion.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Severity |
|---|---|---|
| **OpenAI latest-model breakage** | #90083, #90093 | 🔴 Critical — "upgraded and it broke" |
| **Windows UI unusability** | #67035 (now closed), #86811 | 🟡 Improving but historically severe |
| **Codex native path regressions** | #88312, #90925 | 🔴 Critical — recurring, erodes trust |
| **Feishu enterprise polish** | #88929 | 🟡 Market-specific but blocking |
| **Cron alert fatigue** | #90595, #90991 | 🟡 Operational at scale |
| **Auth complexity** (Bedrock, OAuth routing) | #72031, #90925, #64274 | 🟡 Multi-cloud deployment friction |
| **Memory/context loss on compaction/reset** | #58818, #71491, #90354 | 🟡 Core architecture limitation |

**Satisfaction:** Users value the platform breadth (QQ, Feishu, Discord, Telegram, iMessage, WebChat) and extensibility. **Dissatisfaction:** Stability regressions on upgrade, auth provider edge cases, and opaque session state failures.

---

## 8. Backlog Watch

**Critical items needing maintainer attention >30 days:**

| Item | Age | Blocker |
|---|---|---|
| [#59413](https://github.com/openclaw/openclaw/issues/59413) Per-candidate retry for model fallback | ~65 days | `needs-product-decision`, `needs-security-review` |
| [#58818](https://github.com/openclaw/openclaw/issues/58818) Guarantee last N raw messages | ~67 days | `needs-product-decision`, `needs-security-review` |
| [#49603](https://github.com/openclaw/openclaw/issues/49603) Orphaned lock files | ~80 days | `no-new-fix-pr`, core reliability |
| [#43015](https://github.com/openclaw/openclaw/issues/43015) `message.send` schema overexposure | ~88 days | `needs-product-decision`, GPT auto-population breakage |
| [#11955](https://github.com/openclaw/openclaw/issues/11955) Memory/context improvements mega-issue | ~118 days | Large scope, needs roadmap commitment |

**PRs ready for review but stalled:**
- [#90101](https://github.com/openclaw/openclaw/pull/90101) Runtime self-context — `👀 ready for maintainer look`
- [#78441](https://github.com/openclaw/openclaw/pull/78441) Subagent `toolsAllow` forwarding — `👀 ready for maintainer look`
- [#86627](https://github.com/openclaw/openclaw/pull/86627) Core doctor health ordering — `👀 ready for maintainer look`

**Recommendation:** With 408 open PRs and multiple P1 bugs unaddressed, the project would benefit from a **stability sprint** prioritizing review throughput over new feature merge velocity.

---

*Digest generated from openclaw/openclaw GitHub data as of 2026-06-07.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source Personal AI Agent Ecosystem
**Date:** June 7, 2026 | **Analyst:** Senior AI Agent Ecosystem Analyst

---

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is experiencing **intense bifurcation** between mature, multi-platform "do-everything" frameworks and specialized, resource-constrained deployments. **OpenClaw** dominates by contribution volume (800+ daily items) but exhibits classic scale pathologies—review backlog strain and regression accumulation—while **NanoBot**, **Hermes Agent**, and **ZeroClaw** represent viable alternatives with healthier merge ratios but narrower scope. A third tier (**PicoClaw**, **NanoClaw**, **ZeptoClaw**) pursues architectural differentiation through multi-agent collaboration, skills conformance, and embedded deployment discipline respectively. The sector overall is **transitioning from feature expansion to reliability hardening**, with security (OIDC/WASM sandboxing), enterprise messaging (Slack/Teams/Feishu), and context governance (compaction, memory hygiene) dominating cross-project investment. Notably, **LobsterAI**, **Moltis**, **NullClaw**, and **TinyClaw** show minimal or no activity, suggesting market concentration is accelerating.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Release Status | Health Score | Key Stress Indicator |
|:---|:---:|:---:|:---:|:---|:---|:---|
| **OpenClaw** | 296 | 500 | 92 merged | v2026.6.5-beta.2 shipped | 🟡 Strained | 408:92 open-to-merged ratio; 8 P1 bugs unaddressed |
| **NanoBot** | 7 (4 open) | 24 | 10 merged | No release | 🟢 Healthy | Clearing March backlog; prompt caching bug (#4222) needs triage |
| **Hermes Agent** | 50 (48 open) | 50 | 4 merged | v0.16.0 "The Surface" (Jun 5) | 🟡 Post-release strain | 46:4 open-to-closed PR ratio post-major release |
| **PicoClaw** | 12 | 18 | 15 merged | v0.2.9-nightly | 🟢 Healthy | 83% merge rate; 8 new trading issues unresponded |
| **NanoClaw** | 1 | 14 | 3 merged | No release | 🟡 Review bottleneck | 11:3 open-to-merged ratio; 4 PRs >30 days from `cfis` |
| **IronClaw** | 1 (active) | 33 | 11 merged | Release PR #3708 pending (22 days) | 🟡 Release blocked | Nightly E2E failure persists; minimal community discussion |
| **LobsterAI** | 6 (all open, stale) | 0 | 2 closed without merge | No release | 🔴 Maintenance lull | Zero engineering velocity; PRs abandoned after 61 days |
| **Moltis** | 3 new | 0 | 0 | No release | 🟡 Stagnant | Active user engagement, zero delivery pipeline |
| **CoPaw (QwenPaw)** | 11 (9 open) | 0 | 0 | v1.1.10 (regressed) | 🔴 Critical | 0 PRs processed; 3 session regressions in 24h |
| **ZeptoClaw** | 2 | 1 | 0 | No release | 🟢 Stable | Solo-maintainer focus; binary size discipline |
| **ZeroClaw** | 37 | 50 | 5 merged | v0.8.0 in development | 🟡 Merge bottleneck | 45 open PRs (10% merge rate); heavy stacking risk |
| **NullClaw** | 0 | 0 | 0 | No release | ⚪ Inactive | No activity |
| **TinyClaw** | 0 | 0 | 0 | No release | ⚪ Inactive | No activity |

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Closest Peer | Gap |
|:---|:---|:---|:---|
| **Platform breadth** | 15+ channels (QQ, Feishu, Discord, Telegram, iMessage, WebChat, etc.) | NanoBot (WhatsApp, Weixin, Discord, WebUI desktop) | 3× channel coverage |
| **Contribution volume** | 796 items/24h | ZeroClaw (87) | 9× activity magnitude |
| **MCP ecosystem maturity** | Native tool result coercion, resource types, browser skills | Hermes Agent (emerging MCP) | 6+ months head start |
| **Provider diversity** | OpenAI, OpenRouter, Bedrock, Kimi, Codex native, local | NanoBot (GitHub Copilot, OpenAI-compatible) | Broader auth/provider abstraction |

### Technical Approach Differences
- **OpenClaw**: Monolithic Python/Node gateway with **stateful session management** (SQLite-backed ACPX, device-pair state); prioritizes **transport reliability** over binary size
- **NanoBot**: Modular TypeScript with **per-user memory isolation** and **MCP access controls**; stronger multi-tenant security primitives
- **Hermes Agent**: Rust-heavy "Reborn" runtime with **deterministic workflow engine** aspirations; desktop-first (Electron/TUI)
- **ZeroClaw**: WASM plugin sandboxing with **self-hosted privacy** emphasis; OIDC enterprise auth
- **ZeptoClaw**: Go-based **sub-7MB binaries** for robotics; single-purpose, resource-constrained

### Community Size Comparison
OpenClaw's **296 issues/500 PRs daily** dwarfs all peers, but this scale creates **inverse quality**—its 18% merge rate and 8 unaddressed P1 bugs contrast sharply with PicoClaw's 83% merge rate or NanoBot's 42% merge rate. OpenClaw functions as the ecosystem's **"Linux kernel"**—unavoidable reference point, but contributors increasingly fragment to smaller projects (NanoClaw for skills governance, ZeroClaw for security, ZeptoClaw for embedded) where their PRs receive attention.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs | Urgency |
|:---|:---|:---|:---:|
| **Enterprise messaging reliability** | OpenClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, ZeroClaw | Feishu streaming cards (OpenClaw #88929); Slack Socket Mode (NanoClaw #2700-2702); DingTalk proactive (Hermes #40817); Google Chat (PicoClaw #830); Slack channel routing (IronClaw #4509) | 🔴 Critical |
| **Context governance / compaction** | OpenClaw, NanoBot, Hermes Agent, IronClaw, CoPaw | Guarantee last N messages (OpenClaw #58818); prompt caching invalidation (NanoBot #4222); "Dreaming" memory consolidation (Hermes #25309); subagent compaction design (IronClaw #4486); 128K hardcoded limit (CoPaw #4937) | 🔴 Critical |
| **Security / auth modernization** | OpenClaw, NanoBot, ZeroClaw, IronClaw | OAuth routing bugs (OpenClaw #90925); per-MCP access control (NanoBot #2533); OIDC provider (ZeroClaw #7141); local-dev approval gates (IronClaw #4186); secret redaction (ZeroClaw #6978) | 🔴 Critical |
| **Multi-user / multi-tenant isolation** | NanoBot, Hermes Agent, IronClaw, ZeroClaw | Per-user memory (NanoBot #2968); session presence discovery (Hermes #40814); tenant ID deserialization (IronClaw #4523); per-skill permissions (ZeroClaw #5775) | 🟡 High |
| **Desktop / packaged app delivery** | Hermes Agent, NanoBot, OpenClaw | macOS installer spaces (Hermes #40820); ASAR path 404s (Hermes #39472); desktop shell (NanoBot #4195); WebSocket 4403 (Hermes #38412) | 🟡 High |
| **Local / self-hosted / privacy-preserving deployment** | ZeroClaw, NanoClaw, ZeptoClaw, PicoClaw | WASM plugins (ZeroClaw #7314); HTTP/SSE MCP transports (NanoClaw #2208); sub-7MB binaries (ZeptoClaw #629); compiled WhatsApp builds (PicoClaw #2625) | 🟡 High |
| **Deterministic / non-LLM workflows** | Hermes Agent, OpenClaw | Lobster-style workflow engine (Hermes #5354); cron trigger state contamination (OpenClaw #90991) | 🟡 Medium |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature | Risk Profile |
|:---|:---|:---|:---|:---|
| **OpenClaw** | Universal platform coverage | Power users, multi-channel operators | Stateful monolith, Python/Node hybrid | Scale-induced instability |
| **NanoBot** | Multi-tenant safety + bridge reliability | SMBs, shared-channel deployments | Modular TypeScript, ACL-first | Provider migration fragility |
| **Hermes Agent** | Deterministic workflows + desktop polish | Enterprise automation, compliance | Rust core, Electron shell, TUI | Release quality (v0.16.0 post-mortem) |
| **PicoClaw** | Multi-agent collaboration + embedded | IoT/robotics, trading systems | Go, blackboard architecture, tool policies | Domain expansion uncertainty (crypto trading) |
| **NanoClaw** | Skills ecosystem governance | Self-hosters, skill developers | Containerized, conformance framework | Review bottleneck, Signal gaps |
| **IronClaw** | "Reborn" enterprise runtime | Platform builders, near.ai ecosystem | Rust, capability catalog, OpenAI compat | Extended release cycles, minimal community |
| **ZeroClaw** | Security-hardened self-hosting | Privacy-conscious, enterprise IT | WASM sandbox, OIDC, plugin registry | Merge cascade risk, single-contributor concentration |
| **ZeptoClaw** | Extreme binary size discipline | Robotics, edge AI, OTA-constrained | Go, stripped/LTO-optimized, single-binary | Single maintainer, scope limitation |
| **CoPaw** | China-market model integration | Chinese developers, Qwen ecosystem | vLLM-focused, coding-mode optimized | Release regression spiral, zero maintainer response |
| **LobsterAI** | *(None discernible)* | *(Legacy NetEase users)* | *(Unclear)* | Effectively abandoned |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (High Velocity, Active Release Cycles)
| Project | Trajectory | Key Signal |
|:---|:---|:---|
| **OpenClaw** | 🔄 Polishing for stable release | Beta cadence accelerating; review backlog is constraint |
| **Hermes Agent** | 🔄 Post-major-release stabilization | 874-commit v0.16.0 shipped; now stress-testing |
| **ZeroClaw** | 🔄 v0.8.0 release crunch | Security hardening sprint; plugin ecosystem explosion |

### Tier 2: Healthy Integration (Moderate Velocity, Backlog Clearing)
| Project | Trajectory | Key Signal |
|:---|:---|:---|
| **NanoBot** | 📈 Clearing backlog, shipping isolation features | March PRs merged; per-user memory landed |
| **PicoClaw** | 📈 Defensive hardening + architecture expansion | 83% merge rate; multi-agent framework merged |

### Tier 3: Bottlenecked / Constrained (Velocity Present, Blocked)
| Project | Trajectory | Key Signal |
|:---|:---|:---|
| **NanoClaw** | ⏸️ Review bandwidth limited | `cfis` has 6 open PRs spanning subsystems; skills conformance prioritized |
| **IronClaw** | ⏸️ Release process blocked | 22-day-old release PR; nightly E2E failure; core-team only |
| **CoPaw** | ⏸️🔴 Near-frozen, regressions unaddressed | 0 PRs in 24h; 3 critical session bugs; v1.1.10 quality failure |

### Tier 4: Maintenance Lull / Stagnant
| Project | Trajectory | Key Signal |
|:---|:---|:---|
| **LobsterAI** | 📉 Effectively abandoned | 61-day PRs closed without merge; zero engineering |
| **Moltis** | 📉 User engagement without delivery | 3 issues, 0 PRs; cron feature maturing without maintainer response |
| **NullClaw, TinyClaw** | ⚪ No activity | — |

### Tier 5: Disciplined Niche (Low Volume, High Focus)
| Project | Trajectory | Key Signal |
|:---|:---|:---|
| **ZeptoClaw** | 🎯 Binary size obsession | Single maintainer, clear constraint, infrastructure investment |

---

## 7. Trend Signals

| Trend | Evidence | Value for AI Agent Developers |
|:---|:---|:---|
| **"Transport reliability > model capability"** | OpenClaw's 14-comment #90083 (gpt-5.4/5.5 breakage), NanoBot's #2573 (Copilot login), CoPaw's #4989 (vLLM silent failure) | Users prioritize **stable delivery over cutting-edge models**. Invest in provider abstraction layers with escape hatches (`extraBody`, fallback routing) rather than chasing latest-model integrations. |
| **Enterprise auth is table stakes; OAuth fatigue is real** | ZeroClaw #5601 (subscription-native OAuth for 4 Chinese providers), OpenClaw #90925 (OAuth routing bugs), IronClaw #7141 (OIDC umbrella) | "Login, not keys" is emerging expectation. Plan for **pluggable auth architecture** early; API key management becomes UX liability at scale. |
| **Context governance as cost center** | NanoBot #4222 (prompt caching invalidation), OpenClaw #58818 (last N messages), CoPaw #4937 (128K hardcoded), Hermes #25309 (memory consolidation) | Long-context models (200K–512K) create **compression/retention architecture debt**. Design compaction with caching awareness; treat context as tiered storage, not linear buffer. |
| **Self-hosting as privacy/security differentiator** | ZeroClaw's 8 WASM plugins (all "self-hosted"), NanoClaw's Socket Mode Slack (NAT traversal), ZeptoClaw's sub-7MB binaries | "Data never leaves my infrastructure" is **purchasing criterion**, not nice-to-have. WASM sandboxing, local STT/TTS, and air-gapped MCP are competitive moats. |
| **Multi-agent from "separate workers" to "collaborative teams"** | PicoClaw #423 (blackboard framework), Hermes #5354 (deterministic workflows), OpenClaw #90991 (cron global state contamination) | Agent orchestration needs **shared context primitives** and **state isolation discipline** simultaneously. Blackboard + tool policies (PicoClaw #2838) is emerging pattern. |
| **Skills/plugins as liability surface** | NanoClaw #2698 (conformance framework), ZeroClaw #7335 (WASM sandbox resource limits), OpenClaw #91034 (SQLite state migration) | Unmaintained skills rot; untrusted plugins exfiltrate. Invest in **upgrade-maintainable standards** (exemplars, tests, idempotent removal) and **runtime containment** before marketplace growth. |
| **Windows as perpetual second-class citizen** | OpenClaw #67035 (UI regression), Hermes #40840 (ESC character breaks search), CoPaw #4988 (path overflow), PicoClaw #3015 (QQ-Windows) | Cross-platform parity requires **dedicated CI investment**, not reactive bug fixing. Projects with Windows-first testing (none observed) would capture significant underserved market. |

---

**Strategic Recommendation:** For developers selecting a foundation, **OpenClaw** remains the default for multi-channel breadth but requires operational investment in review automation and regression testing. **NanoBot** offers superior multi-tenant safety with manageable scale. **ZeroClaw** is the security-conscious choice with highest enterprise trajectory. **NanoClaw** and **PicoClaw** represent architectural bets—skills governance and multi-agent collaboration respectively—that may define next-generation patterns if their bottlenecks resolve. Avoid **CoPaw** and **LobsterAI** for production deployments given current stability and maintenance indicators.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-07

**Repository:** [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. Today's Overview

NanoBot showed strong community momentum over the past 24 hours with **24 PRs updated** (14 open, 10 merged/closed) and **7 issues active** (4 open, 3 closed), though **no new releases** were published. Activity is concentrated in three areas: **provider compatibility** (GitHub Copilot, OpenAI-compatible image APIs, custom reasoning_content handling), **bridge reliability** (WhatsApp, Weixin), and **desktop/WebUI surface expansion**. The high PR velocity relative to issue count suggests the project is in an active integration/fix phase rather than accumulating unanswered bugs. Multiple long-dormant PRs (late March–early April) were closed today, indicating maintainers are clearing backlog.

---

## 2. Releases

**No new releases** in the last 24 hours.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary | Link |
|---|---|---|---|
| #4228 | Yuxin-Lou | Fix: preserve empty `reasoning_content` in streaming response parsing (closes #4105) | [PR #4228](https://github.com/HKUDS/nanobot/pull/4228) |
| #2968 | franciscomaestre | Feat(memory): per-user memory isolation via `agents.defaults.per_user_memory` | [PR #2968](https://github.com/HKUDS/nanobot/pull/2968) |
| #2555 | franciscomaestre | Fix(whatsapp-bridge): close existing clients on new connection to prevent duplicate messages | [PR #2555](https://github.com/HKUDS/nanobot/pull/2555) |
| #2533 | franciscomaestre | Feat: per-MCP-server `allowFrom` access control | [PR #2533](https://github.com/HKUDS/nanobot/pull/2533) |
| #2532 | franciscomaestre | Feat(search): add Serper.dev as Google Search provider (marked invalid) | [PR #2532](https://github.com/HKUDS/nanobot/pull/2532) |
| #2529 | franciscomaestre | Fix(whatsapp-bridge): download audio messages for transcription | [PR #2529](https://github.com/HKUDS/nanobot/pull/2529) |
| #2528 | franciscomaestre | Fix(whatsapp-bridge): drop messages older than startup to avoid replaying history | [PR #2528](https://github.com/HKUDS/nanobot/pull/2528) |
| #4195 | Re-bin | Feat(desktop): polish desktop shell and shared WebUI surfaces | [PR #4195](https://github.com/HKUDS/nanobot/pull/4195) |
| #4209 | 04cb | Fix(providers): allow dropping default OpenAI image params via null `extraBody` (closes #4167) | [PR #4209](https://github.com/HKUDS/nanobot/pull/4209) |
| #4211 (issue closed) | pblocz | SDK stdio MCP shutdown `RuntimeError` resolved | [Issue #4211](https://github.com/HKUDS/nanobot/issues/4211) |

**Notable advances:**
- **Multi-user isolation** landed with per-user memory directories and per-MCP access controls — critical for production deployments.
- **WhatsApp bridge** got a production-hardening batch: deduplication, audio download, history replay guard.
- **Desktop surface** progressed via Re-bin's shell/WebUI unification PR, preparing NanoBot's first open desktop build.
- **Provider flexibility** improved: OpenAI image API incompatibilities can now be worked around via `extraBody`, and custom-provider reasoning fields are preserved correctly.

---

## 4. Community Hot Topics

### Most Active Issue: GitHub Copilot Login Failure
- **#2573** — [GitHub Copilot login fails with "Authorization header is badly formatted"](https://github.com/HKUDS/nanobot/issues/2573)  
  **9 upvotes, 3 comments, closed 2026-06-06.**  
  Root cause identified as a regression after replacing `litellm` with `openai`. The high vote count and login-flow impact made this a top user pain point. Closure suggests a fix landed off-thread or was validated.

### Active New Enhancement Requests
- **#4220** — [Add GitHub Copilot for Business / GitHub Enterprise support](https://github.com/HKUDS/nanobot/issues/4220)  
  Underlying need: enterprise users want NanoBot to support self-hosted GitHub Enterprise Server endpoints, not just public GitHub individual flows. This directly follows #2573 and signals enterprise adoption interest.

- **#4218** — [WebUI Cron Job Management](https://github.com/HKUDS/nanobot/issues/4218)  
  Underlying need: parity between CLI and WebUI. Users managing scheduled jobs want visual CRUD, real-time status, and error feedback rather than hand-editing `config.json`.

### Competing Fixes for Same Bug
- **#4227** ([michaelxer](https://github.com/HKUDS/nanobot/pull/4227)) and **#4228** ([Yuxin-Lou](https://github.com/HKUDS/nanobot/pull/4228)) both addressed empty-string `reasoning_content` being coerced to `None`. #4228 was merged/closed, indicating maintainer preference for the streaming-parser-level fix.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|---|---|---|---|
| 🔴 High | [#4222](https://github.com/HKUDS/nanobot/issues/4222) | `max_messages` truncation + `microcompact` continuously invalidate prefix/prompt caching, increasing latency/cost | **Open**, no fix PR yet |
| 🟡 Medium | [#4105](https://github.com/HKUDS/nanobot/issues/4105) | Custom provider drops empty-string `reasoning_content` in tool_call messages | Fixed by [#4228](https://github.com/HKUDS/nanobot/pull/4228) |
| 🟡 Medium | [#4211](https://github.com/HKUDS/nanobot/issues/4211) | SDK leaves stdio MCP open → `RuntimeError` at shutdown | **Closed** |
| 🟡 Medium | [#4167](https://github.com/HKUDS/nanobot/issues/4167) | Image generation fails on OpenAI-compatible APIs that reject `response_format` | Fixed by [#4209](https://github.com/HKUDS/nanobot/pull/4209) |
| 🟡 Medium | [#2573](https://github.com/HKUDS/nanobot/issues/2573) | GitHub Copilot OAuth login broken after `openai` migration | **Closed** |
| 🟢 Low | [#4223](https://github.com/HKUDS/nanobot/pull/4223) | Weixin session expires and enters silent loop because state isn't reloaded after pause | Fix PR open |
| 🟢 Low | [#4229](https://github.com/HKUDS/nanobot/pull/4229) | `find_legal_message_start` discards all messages on orphaned trailing tool result | Fix PR open |
| 🟢 Low | [#4219](https://github.com/HKUDS/nanobot/pull/4219) | Orphan tool results not dropped before history trimming | Fix PR open |

**Top concern:** [#4222](https://github.com/HKUDS/nanobot/issues/4222) is the only open bug with clear cost/performance impact and no associated PR. It affects context governance at scale.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Version | Rationale |
|---|---|---|---|
| **WebUI Cron management** | [#4218](https://github.com/HKUDS/nanobot/issues/4218) | High | Natural parity gap; CLI already exists; WebUI manages related surfaces |
| **GitHub Copilot Enterprise/Business** | [#4220](https://github.com/HKUDS/nanobot/issues/4220) | Medium-High | Follows hot Copilot login bug; enterprise demand signal |
| **Desktop shell release** | [#4195](https://github.com/HKUDS/nanobot/pull/4195) | Medium | PR merged; "first open desktop surface" language suggests release timing is strategic |
| **AssemblyAI transcription** | [#4224](https://github.com/HKUDS/nanobot/pull/4224) | Medium | Straightforward provider addition; fits existing transcription abstraction |
| **Cron silent mode + `lock_recipient`** | [#4225](https://github.com/HKUDS/nanobot/pull/4225) | Medium | Small, well-scoped enhancement for background monitoring use cases |
| **WhatsApp forwarded detection + contact handling** | [#4226](https://github.com/HKUDS/nanobot/pull/4226) | Medium | Production-hardening PR from active bridge contributor |
| **Chat sender identity context** | [#4033](https://github.com/HKUDS/nanobot/pull/4033) | Medium | Enables multi-user Discord/group channel behavior; depends on memory/ACL work already merged |
| **SSRF guards for MCP HTTP URLs** | [#4123](https://github.com/HKUDS/nanobot/pull/4123) | Medium | Security hardening; aligns with recent multi-user access control work |

---

## 7. User Feedback Summary

### Pain Points
- **Provider fragility:** Users hit regressions when NanoBot migrates internal provider implementations (e.g., `litellm` → `openai` broke Copilot; OpenAI-compatible image APIs break on strict param passing). They want escape hatches like `extraBody` null overrides.
- **Enterprise gaps:** Copilot Business/GHE support missing; per-user memory and MCP ACLs only just landed.
- **Operational surprises:** Context truncation invalidates prompt caching; cron jobs always notify even for monitoring tasks; Weixin sessions silently die.
- **WebUI incompleteness:** Cron, file previews, and desktop surfaces are behind CLI or not yet exposed.

### Use Cases Emerging
- **Multi-user shared channels** (Discord/WhatsApp) requiring sender identity + memory isolation.
- **Enterprise/self-hosted deployments** needing GHE Copilot, MCP access control, and audit-friendly memory separation.
- **Background automation** requiring silent cron jobs and stable session management.

### Satisfaction Signals
- Rapid closure of high-vote Copilot issue (#2573).
- March PRs finally merged, showing backlog attention.
- Strong contributor continuity from `franciscomaestre` on bridges/multi-user and `yu-xin-c` on security/stability.

---

## 8. Backlog Watch

| Item | Age | Why It Needs Attention | Link |
|---|---|---|---|
| **#4222** — Prompt caching invalidated by truncation/microcompact | 1 day | Performance/cost regression at scale; no PR yet | [Issue #4222](https://github.com/HKUDS/nanobot/issues/4222) |
| **#4094** — Channel dispatch durability and stream identity | 9 days | Fixes 3 issues (#4062–#4064) around WebSocket replay and stream coalescing; unmerged | [PR #4094](https://github.com/HKUDS/nanobot/pull/4094) |
| **#4033** — Chat sender identity context | 10 days | Multi-user chat differentiation; depends on merged memory/ACL infra but unmerged | [PR #4033](https://github.com/HKUDS/nanobot/pull/4033) |
| **#4123** — SSRF guard for MCP HTTP URLs | 7 days | Security hardening for MCP in multi-user setups; review pending | [PR #4123](https://github.com/HKUDS/nanobot/pull/4123) |

**Recommended maintainer focus:** Triage #4222 for prompt caching cost impact, and drive #4094/#4033 toward merge to capitalize on the newly shipped multi-user foundation.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — June 7, 2026

## 1. Today's Overview

Hermes Agent shows **exceptionally high activity** with 50 issues and 50 PRs updated in the last 24 hours, though merge velocity remains low (only 4 PRs merged/closed versus 46 open). The project released **v0.16.0 "The Surface"** two days ago, representing a massive development cycle (874 commits, 542 merged PRs, 170 contributors). Current activity suggests the community is rapidly stress-testing this major release, with bug reports clustering around desktop packaging, gateway stability, and provider integrations. The high open-to-closed ratio (48:2 issues, 46:4 PRs) indicates potential maintainer bandwidth strain post-release.

---

## 2. Releases

### [v0.16.0 "The Surface" — June 5, 2026](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.6.5)

| Metric | Value |
|--------|-------|
| Commits since v0.15.2 | 874 |
| Merged PRs | 542 |
| Files changed | 1,962 |
| Insertions/Deletions | +205,216 / -46,217 |
| Issues closed | 399 (2 P0, 62 P1, 16 security-tagged) |
| Community contributors | 170 |

**Breaking changes & migration notes:** Not detailed in release notes provided; users should monitor for follow-up documentation given the massive surface area of changes.

---

## 3. Project Progress

### Merged/Closed PRs Today (4 total)

| PR | Author | Summary | Status |
|----|--------|---------|--------|
| [#38255](https://github.com/NousResearch/hermes-agent/pull/38255) | OutThisLife | **fix(install): require Node >=20.19/22.12 for desktop build** — Prevents opaque build failures on outdated Node versions; reproducible fix with version matrix | **Merged** |
| [#35544](https://github.com/NousResearch/hermes-agent/pull/35544) | BROCCOLO1D | **fix(tui): show child transcript sessions in resume** — Fixes session picker hiding resumable child sessions with actual transcripts; filters empty parent rows | **Merged** |
| [#40870](https://github.com/NousResearch/hermes-agent/pull/40870) | ackalanka | **feat(memory): mirror Hindsight writes to owned log** — Adds fail-closed audit logging for Tier-0 memory operations | **Merged** |
| *(4th merged PR not fully detailed in data)* | | | |

### Notable Open PRs Advancing

| PR | Author | Feature/Fix |
|----|--------|-------------|
| [#40876](https://github.com/NousResearch/hermes-agent/pull/40876) | themirzaalibaig | **Cursor provider integration** — First-class Cursor Agent API support with transport, auth, model discovery, CLI |
| [#40817](https://github.com/NousResearch/hermes-agent/pull/40817) | Explorer1092 | **DingTalk proactive messaging** — OToMessage batchSend API for cron notifications and cross-platform sends |
| [#40814](https://github.com/NousResearch/hermes-agent/pull/40814) | OmarB97 | **Session presence discovery** — Active-session presence layer for TUI gateway coordination |
| [#40457](https://github.com/NousResearch/hermes-agent/pull/40457) | k176060444-lgtm | **QQ Bot MEDIA delivery** — Direct REST API for image/video/document sends |

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

| Issue | Comments | 👍 | Topic | Underlying Need |
|-------|----------|-----|-------|---------------|
| [#5354](https://github.com/NousResearch/hermes-agent/issues/5354) | 8 | 8 | **Deterministic Workflow Engine (Lobster-style)** | Cost/latency control for repetitive mission-critical tasks; LLM re-planning is overkill for monitoring/rotation jobs |
| [#531](https://github.com/NousResearch/hermes-agent/issues/531) | 4 | 2 | **User Workspace & Knowledge Base** | Persistent document storage beyond 24h ephemeral cache; organizational RAG for long-term user context |
| [#38412](https://github.com/NousResearch/hermes-agent/issues/38412) | 3 | 0 | **Desktop WebSocket 4403 rejection** | Packaged Electron clients cannot authenticate WebSocket leg of remote gateway |
| [#37661](https://github.com/NousResearch/hermes-agent/issues/37661) | 3 | 0 | **mem0-temporal-hygiene plugin** | Time-aware memory deduplication; Mem0 OSS "time-blindness" in production |
| [#27683](https://github.com/NousResearch/hermes-agent/issues/27683) | 3 | 0 | **web_tools.py silent failures** | Plugin initialization ordering bug blocking fresh installs |
| [#25309](https://github.com/NousResearch/hermes-agent/issues/25309) | 3 | 0 | **"Dreaming" memory consolidation** | Biological-sleep-inspired background memory compression; OpenClaw parity |

**Community signal:** Strong demand for **predictability** (deterministic workflows), **persistence** (knowledge base, memory hygiene), and **production hardening** (desktop packaging, plugin reliability). The Lobster-style workflow engine (#5354) has the highest engagement-to-age ratio, suggesting pent-up demand from enterprise/automation users.

---

## 5. Bugs & Stability

### P1 (Critical) — Immediate attention required

| Issue | Component | Description | Fix PR? |
|-------|-----------|-------------|---------|
| [#8090](https://github.com/NousResearch/hermes-agent/issues/8090) | Gateway | `NameError: name 'RedactingFormatter' is not defined` — **crashes gateway on startup** post-#7991 logging refactor | **None identified** |
| [#40695](https://github.com/NousResearch/hermes-agent/issues/40695) | Gateway/Discord | Discord heartbeat blocked by **synchronous SQLite polling** in handoff watcher — gateway death spiral risk | **None identified** |
| [#40863](https://github.com/NousResearch/hermes-agent/issues/40863) | Gateway/Telegram | **Security: removed users can inject prompts before auth check** — auth bypass for banned users | **None identified** |
| [#40806](https://github.com/NousResearch/hermes-agent/pull/40806) | Agent | Flush cursor not reset on compression rotation — **data loss risk** in session transcripts | **PR #40806 open** |

### P2 (High) — Significant impact

| Issue | Component | Description | Fix PR? |
|-------|-----------|-------------|---------|
| [#38412](https://github.com/NousResearch/hermes-agent/issues/38412) | Gateway/Desktop | Remote gateway WebSocket 4403 for packaged Electron | None |
| [#40818](https://github.com/NousResearch/hermes-agent/issues/40818) | Gateway/DingTalk | Proactive messaging completely non-functional | **PR #40817 open** |
| [#32217](https://github.com/NousResearch/hermes-agent/issues/32217) | Tools/Web | SSRF check breaks NVIDIA OpenShell sandbox (DNS unavailable by design) | None |
| [#40820](https://github.com/NousResearch/hermes-agent/issues/40820) | Desktop | macOS installer fails on paths with spaces | None |
| [#39472](https://github.com/NousResearch/hermes-agent/issues/39472) | Desktop/CLI | Dashboard frontend 404 from ASAR-internal path on macOS | None |
| [#40840](https://github.com/NousResearch/hermes-agent/issues/40840) | CLI/Tools | `hermes tools` wizard writes ESC character (`\x1b`) as `SEARXNG_URL` on Windows — **permanently breaks search** | None |
| [#40852](https://github.com/NousResearch/hermes-agent/issues/40852) | CLI/Discord | `/model` validates old model against new provider's catalog — **blocks provider switches** | None |
| [#40862](https://github.com/NousResearch/hermes-agent/issues/40862) | CLI/Config | Model wizard overwrites `model.base_url` when adding provider — **silently breaks default model** | **PR #40869 open** |

### P3 (Medium) — Polishing/UX

| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#40843](https://github.com/NousResearch/hermes-agent/issues/40843) | Camofox HTTP timeout hardcoded 30s, ignores `browser.command_timeout` | None |
| [#40676](https://github.com/NousResearch/hermes-agent/issues/40676) | Model picker hides active model if not in curated list | None |
| [#40855](https://github.com/NousResearch/hermes-agent/issues/40855) | Desktop voice shortcut config displayed but never registered | None |
| [#40815](https://github.com/NousResearch/hermes-agent/issues/40815) | Desktop bootstrap 404 when install-stamp pins non-GitHub commit | None |

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Feature | Predicted Priority for v0.17+ | Rationale |
|----------|---------|------------------------------|-----------|
| [#5354](https://github.com/NousResearch/hermes-agent/issues/5354) | Deterministic Workflow Engine | **High** | Highest community engagement; cost control is enterprise blocker |
| [#531](https://github.com/NousResearch/hermes-agent/issues/531) | User Workspace & Knowledge Base | **High** | Fundamental gap vs. competitors; blocks serious document workflows |
| [#25309](https://github.com/NousResearch/hermes-agent/issues/25309) | "Dreaming" memory consolidation | **Medium** | Differentiating feature; community-built prototype exists |
| [#40876](https://github.com/NousResearch/hermes-agent/pull/40876) | Cursor provider | **Medium-High** | PR already open; Cursor is high-growth IDE market |
| [#40873](https://github.com/NousResearch/hermes-agent/issues/40873) | OpenAI-compatible audio passthrough | **Medium** | Gemma4/Ollama local audio; voice chat parity |
| [#40854](https://github.com/NousResearch/hermes-agent/issues/40854) | Collapsible verbose output | **Low-Medium** | DX quality-of-life; TUI polish |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Desktop packaging fragility** | macOS installer spaces (#40820), ASAR paths (#39472), bootstrap 404s (#40815), voice shortcut unregistered (#40855) | 🔴 High — blocks new user onboarding |
| **Config/data loss via wizards** | ESC character written to .env (#40840), base_url overwritten (#40862), stale base_url on provider switch (#40869) | 🔴 High — erodes trust in CLI tools |
| **Gateway auth/connectivity** | WebSocket 4403 (#38412), DingTalk proactive broken (#40818), Discord heartbeat blocked (#40695) | 🔴 High — production deployment risk |
| **Security gaps** | Removed Telegram users pre-auth processing (#40863) | 🔴 Critical |
| **Memory/time blindness** | Mem0 temporal gaps (#37661), no persistent KB (#531), context compaction UX (#40416) | 🟡 Medium — competitive disadvantage |

### Satisfaction Signals
- Strong contributor growth (170 in v0.16.0 cycle)
- Active plugin ecosystem (mem0-temporal-hygiene, Korean i18n, QQ Bot)
- Rich feature experimentation (Dreaming, Cursor, presence discovery)

---

## 8. Backlog Watch

### Long-unanswered issues needing maintainer triage

| Issue | Age | Last Update | Risk |
|-------|-----|-------------|------|
| [#5354](https://github.com/NousResearch/hermes-agent/issues/5354) Deterministic Workflow Engine | **2 months** (Apr 5) | June 6 | Stalled despite highest engagement; no maintainer response visible |
| [#531](https://github.com/NousResearch/hermes-agent/issues/531) User Workspace & Knowledge Base | **3 months** (Mar 6) | June 6 | Core architecture gap; may need RFC process |
| [#8090](https://github.com/NousResearch/hermes-agent/issues/8090) Gateway crash on startup | **2 months** (Apr 12) | June 6 | **P1 crash with no fix PR** — regression from merged logging refactor |

### PRs needing review/merge decision

| PR | Age | Status | Blocker |
|----|-----|--------|---------|
| [#40806](https://github.com/NousResearch/hermes-agent/pull/40806) Agent flush cursor fix | 1 day | Open | P1 data loss risk — needs fast-track review |
| [#40817](https://github.com/NousResearch/hermes-agent/pull/40817) DingTalk proactive messaging | 1 day | Open | P2 feature with matching bug report |
| [#40876](https://github.com/NousResearch/hermes-agent/pull/40876) Cursor provider | New | Open | Large surface area; needs security review for API key handling |

---

*Digest generated from GitHub activity data for NousResearch/hermes-agent on 2026-06-07.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-07

## 1. Today's Overview

PicoClaw shows **high development velocity** with 30 items updated in the last 24 hours (12 issues, 18 PRs), indicating an active, well-maintained project. The majority of PRs (15 of 18) were merged or closed, reflecting efficient code review and a healthy merge rate. A new nightly build was published, suggesting continuous integration is operational. However, the influx of 10 new open issues from a single contributor (`jcafeitosa`) around cryptocurrency trading infrastructure signals either a major new domain expansion or a coordinated feature sprint. The project appears to be at an inflection point: core stability fixes are being landed while substantial new capability areas (trading, multi-agent cooperation) are being scoped.

---

## 2. Releases

| Version | Type | Details |
|---------|------|---------|
| [v0.2.9-nightly.20260606.89ee8f1b](https://github.com/sipeed/picoclaw/compare/v0.2.9...main) | Nightly | Automated build from `main` branch; **unstable, use with caution** |

**No stable release today.** The nightly build includes all changes merged to `main` since `v0.2.9`, but lacks release notes. Users requiring stability should remain on `v0.2.9`.

---

## 3. Project Progress

### Merged/Closed PRs (15 items)

| PR | Author | Focus | Significance |
|----|--------|-------|------------|
| [#1112](https://github.com/sipeed/picoclaw/pull/1112) | liugangjian | DeepSeek-AI protocol support for ModelScope | Expands China-accessible model provider ecosystem |
| [#2711](https://github.com/sipeed/picoclaw/pull/2711) | openapphub | HTTP-safe clipboard copy | UX fix for non-HTTPS deployments (local/enterprise) |
| [#830](https://github.com/sipeed/picoclaw/pull/830) | zilin | Google Chat channel | New enterprise messaging integration |
| [#423](https://github.com/sipeed/picoclaw/pull/423) | Leeaandrob | **Multi-agent collaboration framework** | Major architecture: blackboard shared context, agent handoff, discovery |
| [#2838](https://github.com/sipeed/picoclaw/pull/2838) | bogdanovich | Frontmatter tool policy filters | Granular agent tool permissions (`allow`/`deny` with globs) |
| [#2662](https://github.com/sipeed/picoclaw/pull/2662) | milseg | Provider docs unification | Documentation debt reduction |
| [#3021](https://github.com/sipeed/picoclaw/pull/3021) | chengzhichao-xydt | Nil agent panic guard | Defensive programming: `GetStartupInfo` safety |
| [#3022](https://github.com/sipeed/picoclaw/pull/3022) | chengzhichao-xydt | `sync.Map` type assertion safety | Three-file fix for unchecked assertions (Slack, Windows, Feishu) |
| [#3023](https://github.com/sipeed/picoclaw/pull/3023) | chengzhichao-xydt | `Close()` error checking in updater | Prevents silent extraction corruption |
| [#3017](https://github.com/sipeed/picoclaw/pull/3017) | chengzhichao-xydt | Base64 encoder cleanup on error | Resource leak fix in media encoding |
| [#3019](https://github.com/sipeed/picoclaw/pull/3019) | chengzhichao-xydt | Type-switch capture, nil guards, `LastInsertId` | WhatsApp, config, database safety |
| [#3020](https://github.com/sipeed/picoclaw/pull/3020) | bogdanovich | Slack formatting + channel routing | Production Slack UX improvement |
| [#3014](https://github.com/sipeed/picoclaw/pull/3014) | chengzhichao-xydt | Goroutine leak fix in `Manager.Reload()` | Critical stability: context cancellation |
| [#2965](https://github.com/sipeed/picoclaw/pull/2965) | maxmilian | Workspace guard scheme-less URL fix | Security/functional: `curl` without `http://` |
| [#3013](https://github.com/sipeed/picoclaw/pull/3013) | shenjiecode | Docs: remove missing script refs | Developer experience cleanup |

**Key Advances:**
- **Multi-agent architecture maturing**: PR #423's collaboration framework + #2838's tool policies suggest agent-to-agent workflows are becoming first-class
- **Defensive programming push**: 7 PRs from `chengzhichao-xydt` systematically eliminate panics, goroutine leaks, and resource leaks
- **Enterprise messaging expansion**: Google Chat (#830) and Slack improvements (#3020) broaden deployment scenarios

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|------|-----------|----------|
| [#2625](https://github.com/sipeed/picoclaw/issues/2625) WhatsApp arm64 builds | 8 comments, 👍1 | **Solved pain point**: Raspberry Pi Zero 2 users needed WhatsApp in default builds. Closed with resolution, but reveals friction in build configurability for embedded/ARM users |
| [#2929](https://github.com/sipeed/picoclaw/issues/2929) Agent-to-agent communication | 3 comments, 👍2 | **Strategic gap acknowledged**: Despite `spawn`/`delegate`, true peer-to-peer agent messaging missing. Closed as completed/duped, likely superseded by PR #423's blackboard |

**Underlying Needs:**
- **Embedded/IoT deployment simplicity**: Users want turnkey binaries, not custom compilation (WhatsApp on ARM)
- **Orchestration over isolation**: Multi-agent is moving from "separate workers" to "collaborative teams"

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| 🔴 **High** | [#3015](https://github.com/sipeed/picoclaw/issues/3015) | QQ channel connection failure on Windows — token timeout from `bots.qq.com` | **Open**, no PR linked |
| 🟡 **Medium** | [#3016](https://github.com/sipeed/picoclaw/pull/3016) / [#3014](https://github.com/sipeed/picoclaw/pull/3014) | Goroutine leak in `Manager.Reload()` — old dispatch tasks never cancelled | **Fixed** (merged) |
| 🟡 **Medium** | [#3017](https://github.com/sipeed/picoclaw/pull/3017) | Base64 encoder not closed on `io.Copy` error — incomplete output | **Fixed** (merged) |
| 🟢 **Low** | [#3018](https://github.com/sipeed/picoclaw/pull/3018) | Unchecked type assertions in LINE channel, evolution store | **Open** (PR pending) |
| 🟢 **Low** | Multiple `chengzhichao-xydt` PRs | `sync.Map` panics, nil agent panics, `Close()` ignores | **Fixed** (merged) |

**Stability Assessment:** Positive trend. The concentrated defensive fixes suggest either proactive hardening or response to production incidents. The open QQ-Windows bug is the most user-facing unresolved issue.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in v0.3.0 |
|---------|--------|----------------------|
| **Cryptocurrency trading infrastructure** | 8 issues from `jcafeitosa` (#3024–#3032): Binance connectors, order book, risk manager, CLI, CI/CD | **High** — appears to be a coordinated sprint with design docs (SDD-001, SDD-002, SDD-009) |
| **Traditional Chinese (zh-TW) i18n** | [#2935](https://github.com/sipeed/picoclaw/pull/2935) | **Medium** — PR open, stale, needs maintainer review |
| **First-class agent-to-agent communication** | [#2929](https://github.com/sipeed/picoclaw/issues/2929) | **High** — architecture landing via PR #423 |
| **Compiled builds with WhatsApp** | [#2625](https://github.com/sipeed/picoclaw/issues/2625) | **Medium** — build system change, low priority but user-demanded |

**Prediction:** v0.3.0 will likely center on **multi-agent collaboration** and may include **trading domain expansion** if the `jcafeitosa` issues represent maintainer-sanctioned roadmap items rather than external proposals.

---

## 7. User Feedback Summary

| Theme | Evidence | Sentiment |
|-------|----------|-----------|
| **Embedded deployment friction** | #2625 (Raspberry Pi Zero 2), WhatsApp compilation | 😤 Frustrated — needs simpler distribution |
| **Windows reliability gaps** | #3015 (QQ channel), #2711 (HTTP clipboard) | 😐 Mixed — fixes coming but platform parity lags |
| **Enterprise messaging needs** | #830 (Google Chat), #3020 (Slack improvements) | 😊 Satisfied — actively addressed |
| **Security-conscious operations** | #2838 (tool policies), #2965 (workspace guard) | 😊 Confident — maintainers responsive |
| **Documentation accuracy** | #3013 (missing script refs) | 😐 Mild friction — docs lag code |

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#2935](https://github.com/sipeed/picoclaw/pull/2935) zh-TW i18n | 2 weeks (stale) | Community contribution decay | Maintainer review/merge or close with feedback |
| [#3015](https://github.com/sipeed/picoclaw/issues/3015) QQ-Windows bug | 1 day | User blocker on Windows | Triage: assign, repro, fix |
| [#3018](https://github.com/sipeed/picoclaw/pull/3018) Defensive fixes (LINE, store) | 1 day | Merge ready? | Review and land to complete hardening cycle |
| [#3030–#3032](https://github.com/sipeed/picoclaw/issues/3030) Trading issues | 1 day | Scope validation | Determine if these are maintainer roadmap or external proposal; respond to prevent contributor frustration |

**Maintainer Attention Required:** The 8 trading-related issues from `jcafeitosa` lack any comments — this is either a pre-coordinated private discussion or a potentially ignored substantial contribution. Public acknowledgment would reduce community uncertainty.

---

*Digest generated from GitHub activity data. All links point to `github.com/sipeed/picoclaw`.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-07

## 1. Today's Overview

NanoClaw showed **strong development velocity** on 2026-06-06 with 14 PRs updated in 24 hours (11 still open, 3 merged/closed) and 1 active issue. No new releases were published. The activity pattern reveals concentrated effort across three fronts: **Signal channel reliability** (2 PRs), **Slack infrastructure modernization** (2 PRs), and **skills ecosystem hardening** (2 merged PRs establishing conformance standards). The project appears healthy with active community contribution, though the high open-to-closed PR ratio (11:3) suggests a potential review bottleneck. Notably, contributor `cfis` dominates open submissions with 6 PRs spanning multiple subsystems, while `mperraillon` and `gavrielc` delivered focused, well-scoped changes.

---

## 2. Releases

**No new releases** published today. Latest release status unchanged.

---

## 3. Project Progress

### Merged/Closed PRs (3 items)

| PR | Author | Description | Significance |
|---|---|---|---|
| [#2698](https://github.com/nanocoai/nanoclaw/pull/2698) | gavrielc | **Skills conformance framework + fleet retrofit** | Establishes upgrade-maintainable skill standard: exemplars, tests per integration point, idempotent `REMOVE.md`, no `VERIFY.md`. Retired non-conforming skills. |
| [#2696](https://github.com/nanocoai/nanoclaw/pull/2696) | gavrielc | **`add-dashboard` skill made conformant** | First exemplar of new standard. Fixed silent drift (broken DB imports from core reorganization) and added integration test. |
| [#2697](https://github.com/nanocoai/nanoclaw/pull/2697) | simonstudios | **Single-instance host lock** | Prevents duplicate message delivery when multiple host processes run concurrently (e.g., `pnpm run dev` + service). Uses file-based locking with 60s sweep coordination. |

**Key advancement:** The skills conformance framework (#2698) is architectural debt repayment with long-term maintainability impact. The `add-dashboard` retrofit (#2696) proves the model works by catching real drift. The host lock (#2697) fixes a production reliability issue affecting self-hosters.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|---|---|---|
| [#2702](https://github.com/nanocoai/nanoclaw/pull/2702) — Slack Socket Mode adapter | Fresh PR, no comments yet | **Infrastructure modernization need**: HTTP webhook mode requires public URLs, creating friction for self-hosters behind NAT/firewall. Socket Mode enables Slack behind private networks. Paired with #2700 (skill setup), this is a complete migration. |
| [#2700](https://github.com/nanocoai/nanoclaw/pull/2700) — `/add-slack` Socket Mode setup | Fresh PR, no comments yet | **Onboarding simplification**: Eliminates manual Event Subscriptions URL, Interactivity URL, and signing secret configuration. Reduces skill setup from ~6 steps to ~2. |
| [#2698](https://github.com/nanocoai/nanoclaw/pull/2698) — Skills conformance | Merged same day | **Ecosystem governance**: Core team prioritizing sustainable skill marketplace over feature velocity. |

**Underlying needs detected:**
- **Self-hosting accessibility**: Socket Mode PRs address network topology barriers
- **Skill ecosystem trust**: Conformance framework prevents "works on my machine" skill rot
- **Operational simplicity**: Reducing manual configuration steps in skill setup

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix Status |
|---|---|---|---|
| **High** | [#2701](https://github.com/nanocoai/nanoclaw/issues/2701) | `ncl groups restart --rebuild` crashes when no packages configured; normal restart works. Rebuild path fails to skip empty package installation. | **No fix PR yet** — open issue |
| **High** | [#2695](https://github.com/nanocoai/nanoclaw/pull/2695) | Signal inbound images unreadable: container can't access host `signal-cli` attachment paths. Requires base64 staging. | Fix PR open, needs review |
| **High** | [#2694](https://github.com/nanocoai/nanoclaw/pull/2694) | Signal DMs silently dropped: missing `isMention`/`isGroup` flags prevent `messaging_group` auto-creation. | Fix PR open, needs review |
| **Medium** | [#2531](https://github.com/nanocoai/nanoclaw/pull/2531) | Duplicate text in poll loop when `send_message` fires mid-turn. Open since 2026-05-18. | Fix PR open, aging |
| **Medium** | [#2184](https://github.com/nanocoai/nanoclaw/pull/2184) | Stale Claude Code session delivers raw error to user before retry. Open since 2026-05-02. | Fix PR open, **1+ month old** |
| **Medium** | [#2230](https://github.com/nanocoai/nanoclaw/pull/2230) | Rootless Podman user mapping fails without `--userns=keep-id`. Open since 2026-05-03. | Fix PR open, aging |
| **Medium** | [#2349](https://github.com/nanocoai/nanoclaw/pull/2349) | Mount security allowlist crashes on entries missing `path` field. Open since 2026-05-08. | Fix PR open, aging |

**Stability assessment:** Signal channel has **two critical reliability gaps** (images broken, DMs dropped) with fixes pending review. The `--rebuild` crash (#2701) is a regression in CLI workflow. Multiple aging fix PRs from `cfis` suggest either review bandwidth constraints or complexity in validation.

---

## 6. Feature Requests & Roadmap Signals

| Item | Type | Likelihood in Next Release |
|---|---|---|
| [#2208](https://github.com/nanocoai/nanoclaw/pull/2208) — HTTP/SSE MCP server transports | Protocol expansion | **High** — foundational for MCP ecosystem growth; open since May but actively updated |
| [#2693](https://github.com/nanocoai/nanoclaw/pull/2693) — `/add-google-contacts-tool` | Utility skill | **High** — follows established `/add-gmail-tool`, `/add-gcal-tool` pattern; standalone, low risk |
| Socket Mode Slack stack (#2700, #2702) | Infrastructure modernization | **High** — paired PRs, complete solution, addresses self-hosting barrier |
| Skills conformance enforcement | Ecosystem governance | **Ongoing** — framework merged, rollout to all skills is multi-sprint |

**Roadmap prediction:** Next release likely emphasizes **MCP transport flexibility** (HTTP/SSE beyond stdio) and **Google Workspace tool completeness** (contacts joining mail/calendar). Slack Socket Mode may ship as infrastructure update.

---

## 7. User Feedback Summary

### Pain Points (from issue/PR descriptions)

| Source | Pain Point | User Context |
|---|---|---|
| [#2701](https://github.com/nanocoai/nanoclaw/issues/2701) | Rebuild fails on minimal groups | User with simple group config (no packages) blocked from standard workflow |
| [#2695](https://github.com/nanocoai/nanoclaw/pull/2695) + [#2694](https://github.com/nanocoai/nanoclaw/pull/2694) | Signal "almost works" but images/DMs broken | Signal users get partial experience; images and private messages silently fail |
| [#2700](https://github.com/nanocoai/nanoclaw/pull/2700) | Slack setup too complex | Users struggle with public URL requirements, multiple manual configuration steps |
| [#2697](https://github.com/nanocoai/nanoclaw/pull/2697) | Duplicate messages in dev/prod overlap | Self-hosters running development instances alongside production service |

### Satisfaction Signals
- **Skills ecosystem investment** (#2698, #2696) shows maintainers addressing long-term trust
- **Rapid Socket Mode response** to Slack friction indicates channel usability prioritization

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [#2184](https://github.com/nanocoai/nanoclaw/pull/2184) — Stale session retry | 36+ days | **User-facing error spam**; affects all Claude Code users with session expiry | Maintainer review/merge; isolated fix, low regression risk |
| [#2230](https://github.com/nanocoai/nanoclaw/pull/2230) — Rootless Podman `keep-id` | 35+ days | **Container security/UX**: Rootless Podman is default on modern distros (Fedora, RHEL) | Review for security implications; may need docs update |
| [#2349](https://github.com/nanocoai/nanoclaw/pull/2349) — Mount allowlist tolerance | 30+ days | **Crash on config edge case**; affects users with incomplete allowlist entries | Quick review; defensive programming, safe merge |
| [#2531](https://github.com/nanocoai/nanoclaw/pull/2531) — Poll loop duplicate text | 20+ days | **Message quality degradation** | Review; may need reproduction confirmation |

**Reviewer bottleneck hypothesis:** `cfis` has 6 open PRs spanning May-June with no merged today. Either:
- PRs require cross-subsystem coordination (MCP, Signal, poll loop, container runner)
- Review bandwidth concentrated on gavrielc's skills conformance push
- Some PRs may have unresolved feedback not visible in summary data

**Recommended maintainer attention:** Batch-review `cfis`'s aging fixes (#2184, #2230, #2349, #2531) to clear stability backlog before feature work.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-07

## 1. Today's Overview

IronClaw shows **high development velocity** with 33 PRs updated in the last 24 hours (22 open, 11 merged/closed), indicating active iteration on the "Reborn" architecture overhaul. No new releases were published, though a release preparation PR (#3708) remains open with breaking API changes pending. The project is heavily focused on **infrastructure hardening**—CI pipeline refinements, E2E test coverage expansion, and core Reborn runtime scaffolding—rather than user-facing features. A nightly E2E failure (#4108) persists as the sole active issue, suggesting quality assurance remains a priority concern. The contributor base is concentrated among core team members (henrypark133, serrrfirat) with limited external participation.

---

## 2. Releases

**No new releases** published today.

**Pending Release:** PR [#3708](https://github.com/nearai/ironclaw/pull/3708) — `ironclaw` 0.24.0 → 0.29.1 (open since 2026-05-16)

| Crate | Version Change | Breaking? |
|-------|---------------|-----------|
| `ironclaw_common` | 0.4.2 → 0.5.0 | ⚠️ **Yes** — enum/struct visibility changes |
| `ironclaw_safety` | 0.2.2 → 0.2.3 | ✓ Compatible |
| `ironclaw_skills` | 0.3.0 → 0.4.0 | ⚠️ **Yes** — trait signature changes |

*Note: This release PR has been open for 22 days with ongoing updates, suggesting extended stabilization period.*

---

## 3. Project Progress

### Merged/Closed PRs Today (11 total; key items highlighted)

| PR | Author | Summary | Significance |
|----|--------|---------|------------|
| [#3805](https://github.com/nearai/ironclaw/issues/3805) (issue closed) | serrrfirat | Notion MCP capability path implementation | **Reborn Lane 5 milestone** — first concrete MCP tool package for capability catalog |
| [#4486](https://github.com/nearai/ironclaw/pull/4486) | henrypark133 | Subagent + compaction unified design (docs) | Architecture decision record for background subagents and context compaction |
| [#4485](https://github.com/nearai/ironclaw/pull/4485) | henrypark133 | *[Same as #4486 with DB migration scope]* — **CLOSED unmerged** | Appears to be duplicate or scope-variant; closed in favor of #4486 |
| [#4520](https://github.com/nearai/ironclaw/pull/4520) | henrypark133 | CI: Reborn-only PR exclusion from legacy tests | **Infrastructure** — prevents CI waste, enables parallel Reborn/legacy pipelines |
| [#4508](https://github.com/nearai/ironclaw/pull/4508) | serrrfirat | Repeated-call warning gates (was immediate stop) | **UX safety** — softer failure mode for agent loops |
| [#4509](https://github.com/nearai/ironclaw/pull/4509) | serrrfirat | Slack channel subject routing | **Integration** — product workflow route keys for Slack |

**Key Advances:**
- **Reborn architecture maturation**: Multiple PRs establishing `PostCapabilityStage`, extension lifecycle E2E coverage, and config seeding
- **OpenAI compatibility layer**: PRs [#4489](https://github.com/nearai/ironclaw/pull/4489) and [#4495](https://github.com/nearai/ironclaw/pull/4495) building `chatcmpl-*` ref system for API compatibility
- **WebUI v2 API surface**: Session capabilities endpoint ([#4519](https://github.com/nearai/ironclaw/pull/4519)), thread deletion ([#4516](https://github.com/nearai/ironclaw/pull/4516))

---

## 4. Community Hot Topics

**Note**: All PRs show `Comments: undefined` and `👍: 0`, indicating **minimal community discussion** on GitHub itself. Analysis relies on PR scope and author patterns.

| Item | Link | Underlying Need |
|------|------|---------------|
| **OpenAI-compatible API routing** | [#4495](https://github.com/nearai/ironclaw/pull/4495), [#4489](https://github.com/nearai/ironclaw/pull/4489) | **Ecosystem interoperability** — users need drop-in OpenAI replacement without client rewrites; idempotency/replay handling suggests production reliability concerns |
| **Subagent + context compaction design** | [#4486](https://github.com/nearai/ironclaw/pull/4486) | **Long-running agent scalability** — addressing context window limits and nested agent orchestration |
| **Slack channel routing** | [#4510](https://github.com/nearai/ironclaw/pull/4510), [#4509](https://github.com/nearai/ironclaw/pull/4509) | **Enterprise multi-tenant deployment** — need per-channel subject isolation for shared workspaces |
| **Local-dev approval gates** | [#4186](https://github.com/nearai/ironclaw/pull/4186) | **Safety/iteration velocity tradeoff** — developers need fast local testing without full policy enforcement |

**Pattern**: Core team is building **platform infrastructure** (Reborn runtime) rather than responding to external user requests. No hot community threads exist.

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix Status |
|----------|------|-------------|------------|
| 🔴 **High** | [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E failed (extensions) — scheduled run failure | **Open**, no fix PR linked; last updated 2026-06-06 |
| 🟡 **Medium** | [#4523](https://github.com/nearai/ironclaw/pull/4523) | `TenantId`/`UserId` deserialization rejected `SYSTEM` sentinel; LLM settings API returned `service_unavailable` | **Fix PR open** — round-trip deserialization fix |
| 🟡 **Medium** | [#4521](https://github.com/nearai/ironclaw/pull/4521) | JSON cleaner for formatting/sanitization (new contributor) | **Open PR** — appears to be feature, may address data quality issues |
| 🟢 **Low** | [#4518](https://github.com/nearai/ironclaw/pull/4518) | Missing Reborn extension lifecycle E2E coverage | **Addressed** — coverage PR open |

**Stability Assessment**: The persistent nightly E2E failure is concerning given the 22-day-old release PR. The `SYSTEM` sentinel bug (PR [#4523](https://github.com/nearai/ironclaw/pull/4523)) suggests serialization brittleness in security-critical identity paths.

---

## 6. Feature Requests & Roadmap Signals

**No explicit user feature requests** found in issues. Roadmap signals from PR activity:

| Signal | Likely Version | Confidence |
|--------|---------------|------------|
| **Reborn GA** (runtime, config seeding, extension lifecycle) | 0.30.x | High — majority of PRs target this |
| **OpenAI-compatible API** (chat completions, refs) | 0.30.x | High — dual PRs with durable storage |
| **Slack enterprise routing** | 0.30.x | Medium — admin wiring in progress |
| **WebUI v2 complete** (threads, sessions, capabilities) | 0.29.1 or 0.30.0 | High — endpoint scaffolding nearly complete |
| **Tool argument normalization** (RC3/M9 audit closure) | Post-0.30 | Medium — Phase A of multi-phase effort |

**Predicted next release contents**: Reborn runtime MVP, WebUI v2, OpenAI compat layer, Slack channel routing.

---

## 7. User Feedback Summary

**Limited direct user feedback available.** Inferred pain points from PR design:

| Pain Point | Evidence | Satisfaction Indicator |
|------------|----------|----------------------|
| Agent loop failures too harsh | [#4508](https://github.com/nearai/ironclaw/pull/4508) warning gates | ⚠️ Improving — was immediate stop |
| Context window exhaustion | [#4486](https://github.com/nearai/ironclaw/pull/4486) compaction design | 🔧 In development |
| OpenAI migration friction | [#4489](https://github.com/nearai/ironclaw/pull/4489), [#4495](https://github.com/nearai/ironclaw/pull/4495) compat layer | 🔧 In development |
| Local development velocity vs. safety | [#4186](https://github.com/nearai/ironclaw/pull/4186) approval gates | ⚠️ Partially addressed |
| CI reliability for Reborn work | [#4520](https://github.com/nearai/ironclaw/pull/4520) scope isolation | ✅ Recently fixed |

**No dissatisfaction signals** in open issues; absence may indicate small user base or alternative feedback channels.

---

## 8. Backlog Watch

| Item | Age | Risk | Needs Attention |
|------|-----|------|---------------|
| [#3708](https://github.com/nearai/ironclaw/pull/3708) Release PR | 22 days | **Blocking release** | Maintainer decision on merge timing |
| [#4002](https://github.com/nearai/ironclaw/pull/4002) Dependabot: 16 action updates | 14 days | Security/CI drift | Review and merge to prevent stale dependencies |
| [#3981](https://github.com/nearai/ironclaw/pull/3981) HTTP redaction marker tests | 14 days | Security coverage gap | Review from security-focused maintainer |
| [#4186](https://github.com/nearai/ironclaw/pull/4186) Local-dev approval gates | 10 days | Developer experience | Core review for safety-critical code |

**Recommendation**: The release PR (#3708) aging without merge while breaking changes accumulate suggests **release process bottleneck**. Consider incremental releases or feature flags to reduce integration risk.

---

*Digest generated from GitHub activity 2026-06-06 to 2026-06-07. All links: https://github.com/nearai/ironclaw*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-07

## 1. Today's Overview

LobsterAI shows **minimal active development** with 6 issues updated but none closed, and 2 stale PRs from April finally closed without merge. All issue activity consists of stale items receiving minor updates (likely bot activity or comment additions) rather than new bug reports or feature discussions. No new releases or merged contributions indicate the project is in a **maintenance lull** with core team attention elsewhere. The 100% open issue rate (6/6 active) and closure of aged PRs suggest **backlog cleanup** rather than forward progress. Community engagement remains low with zero reactions on most items and minimal comment activity.

---

## 2. Releases

**No new releases.** The project has not published any version since prior to this reporting period.

---

## 3. Project Progress

Two stale PRs from April 7, 2026 were closed today without merge:

| PR | Author | Description | Status |
|:---|:---|:---|:---|
| [#1529](https://github.com/netease-youdao/LobsterAI/pull/1529) | MaoQianTu | Batch session export to JSON for cowork mode | **Closed (stale)** |
| [#1530](https://github.com/netease-youdao/LobsterAI/pull/1530) | gongzhi-netease | Multi-Agent task ownership selector for scheduled tasks | **Closed (stale)** |

Both PRs addressed legitimate UX gaps—export functionality and Agent-aware task creation—but were abandoned after two months without integration. This represents **lost progress** on workflow continuity and multi-Agent system clarity.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120) — "建议" (Suggestions) | 1 comment, fresh (June 6) | **Most active new issue.** Three concrete UX requests: task queue pre-input during execution, extended task timeout limits, and responsive grid layout for 2560×1600 displays. User references competing product "WorkBuddy" for task storage patterns—indicates **competitive benchmarking** by power users. |
| [#1495](https://github.com/netease-youdao/LobsterAI/issues/1495) — "无缘无故中断进程" (Random process interruption) | 1 comment, 1 👍 | **Only user-validated issue.** Reports task termination during long-running data collection scripts. Suggests timeout/heartbeat mechanism insufficient for developer workflows. |

**Underlying needs:** Power users need **longer-running, resilient task execution** (development/debugging use cases) and **queue management** for sequential operations. The 2560×1600 layout complaint indicates **desktop-first professional user base** not adequately served by current responsive design.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|:---|:---|:---|:---|
| **High** | [#1495](https://github.com/netease-youdao/LobsterAI/issues/1495) | Silent task termination ("terminated" state) during active script execution | ❌ None |
| **Medium** | [#1496](https://github.com/netease-youdao/LobsterAI/issues/1496) | Task shows "completed" status but returns no output | ❌ None |
| **Medium** | [#1468](https://github.com/netease-youdao/LobsterAI/issues/1468) | AgentCreateModal closes without unsaved changes confirmation | ❌ None |
| **Medium** | [#1469](https://github.com/netease-youdao/LobsterAI/issues/1469) | AgentSettingsPanel closes without unsaved changes confirmation | ❌ None |
| **Medium** | [#1470](https://github.com/netease-youdao/LobsterAI/issues/1470) | McpServerFormModal closes without unsaved changes confirmation (Escape key included) | ❌ None |

**Pattern:** Three related modal data-loss issues (#1468–1470) from the same reporter indicate **systematic absence of dirty-state tracking** across the application's modal system. This is a **framework-level UX debt** affecting all configuration workflows. No fix PRs exist for any stability issue.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Version |
|:---|:---|:---|
| Task queue/pre-input during execution | [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120) | Medium — aligns with #1530's Agent-task ownership work, suggests product direction toward complex workflow orchestration |
| Extended task timeout / configurable limits | [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120) | **High** — simple configuration change, directly addresses #1495 pain point |
| Responsive 3-column layout for 2560×1600 | [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120) | Medium — CSS grid adjustment, low engineering cost |
| Dirty-state confirmation for all modals | [#1468](https://github.com/netease-youdao/LobsterAI/issues/1468)–[#1470](https://github.com/netease-youdao/LobsterAI/issues/1470) | **High** — batchable fix, clear user pain, standard UX pattern |

**Predicted next version priorities:** Timeout configurability and modal guardrails are low-risk, high-impact fixes that address multiple user complaints.

---

## 7. User Feedback Summary

| Pain Point | Evidence | User Segment |
|:---|:---|:---|
| **Task reliability** | #1495, #1496, #2120 (timeout) | Developers using LobsterAI for scripting/data pipelines |
| **Workflow continuity** | #2120 (pre-input queue) | Power users managing multiple sequential tasks |
| **Data loss anxiety** | #1468–1470 | All users configuring Agents or MCP servers |
| **Display optimization** | #2120 (3-column layout) | High-resolution desktop users (creative/technical professionals) |

**Satisfaction gap:** Users appreciate LobsterAI's core Agent-MCP architecture enough to use it for **production-adjacent development work** (data collection scripts, monitoring), but the tool's **reliability boundaries** (timeouts, silent failures) create friction that pushes them toward alternatives like WorkBuddy. The product is being **stretched beyond its stability envelope** by its most engaged users.

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1468](https://github.com/netease-youdao/LobsterAI/issues/1468)–[#1470](https://github.com/netease-youdao/LobsterAI/issues/1470) Modal confirmations | 63 days | **Data loss UX debt accumulating** | Batch implement `beforeunload`/`onClose` guards across modal components |
| [#1495](https://github.com/netease-youdao/LobsterAI/issues/1495) Process termination | 61 days | **Active user workflow blocker** | Investigate timeout/heartbeat logic; add diagnostic logging |
| [#1496](https://github.com/netease-youdao/LobsterAI/issues/1496) Missing task output | 61 days | **Core functionality reliability** | Reproduce with task logs; likely race condition in completion signaling |
| [#1529](https://github.com/netease-youdao/LobsterAI/pull/1529) Batch export | 61 days, now closed | **Feature loss** | Reopen or reimplement; export is standard data portability expectation |
| [#1530](https://github.com/netease-youdao/LobsterAI/pull/1530) Agent task selector | 61 days, now closed | **Multi-Agent UX confusion persists** | Reopen or reimplement; #2120 confirms this gap remains unaddressed |

**Maintainer attention needed:** The closure of #1529 and #1530 without merge or replacement suggests **resource constraints or prioritization shifts** at NetEase Youdao. Community contributions with completed implementations are being discarded, which may discourage future external contributions. A public roadmap or maintainer response to #2120 would signal project vitality.

---

*Digest generated from GitHub activity 2026-06-06 to 2026-06-07. All links: [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-07

## 1. Today's Overview

Moltis showed minimal development activity over the past 24 hours, with **3 new issues filed** but **zero pull requests** and **no releases**. All activity originated from community bug reports and feature requests rather than maintainer-driven code changes. The project appears to be in a maintenance phase with active user engagement but no visible engineering velocity. The absence of merged PRs or closed issues suggests potential maintainer bandwidth constraints. Overall project health indicator: **stable but stagnant** — community is engaged, but delivery pipeline is quiet.

---

## 2. Releases

**No new releases.** No version tags or release notes published in the last 24 hours.

---

## 3. Project Progress

**No merged or closed PRs today.** Zero pull requests were opened, updated, or merged. No features advanced or bugs fixed via code integration. Engineering output appears paused.

---

## 4. Community Hot Topics

| Issue | Activity | Analysis |
|-------|----------|----------|
| [#1112 — Disabling auth doesn't seem to disable auth (Docker)](https://github.com/moltis-org/moltis/issues/1112) | 1 comment | **Most active** — configuration/expectation mismatch in Docker deployments; indicates documentation or environment variable handling gap |
| [#1111 — Archiving a cron session has no visible effect](https://github.com/moltis-org/moltis/issues/1111) | 0 comments, 0 reactions | UI/UX feedback problem — user expects visual confirmation of archive action |
| [#1110 — Keyword to suppress cron job notifications (like NO_REPLY)](https://github.com/moltis-org/moltis/issues/1110) | 0 comments, 0 reactions | Workflow noise reduction request from power users |

**Underlying needs:** Docker deployment friction (#1112) dominates attention. Users need clearer auth configuration semantics and visual feedback for destructive/organizational actions. The notification suppression request signals cron feature maturation — users are scaling beyond basic functionality and need granular control.

---

## 5. Bugs & Stability

| Severity | Issue | Fix PR? | Details |
|----------|-------|---------|---------|
| **High** | [#1112 — Auth disable failure in Docker](https://github.com/moltis-org/moltis/issues/1112) | ❌ None | Security configuration bypass failure; could lock users out or expose unintended access depending on intended behavior |
| **Medium** | [#1111 — Cron session archiving no visible effect](https://github.com/moltis-org/moltis/issues/1111) | ❌ None | UX bug — may be working silently or failing silently; needs clarification |

**No fix PRs exist for either bug.** The auth issue warrants urgent attention due to security implications.

---

## 6. Feature Requests & Roadmap Signals

| Request | Likelihood in Next Version | Rationale |
|---------|---------------------------|-----------|
| [#1110 — Cron notification suppression keyword](https://github.com/moltis-org/moltis/issues/1110) | **Moderate-High** | Low implementation complexity; follows established pattern (`NO_REPLY`); high user value for automated workflows |

**Pattern observation:** Two of three issues relate to cron functionality (#1110, #1111), suggesting this is a heavily used and actively maturing feature area. Expect continued cron-centric development if maintainer resources return.

---

## 7. User Feedback Summary

| Pain Point | Source | User Profile |
|------------|--------|--------------|
| Docker auth configuration confusing/ineffective | [#1112](https://github.com/moltis-org/moltis/issues/1112) | Self-hosted deployer (`methompson`) |
| Lack of visual feedback for session management | [#1111](https://github.com/moltis-org/moltis/issues/1111) | Active cron user (`IlyaBizyaev`) |
| Notification fatigue in automated cron workflows | [#1110](https://github.com/moltis-org/moltis/issues/1110) | Power user/automation-focused (`IlyaBizyaev`) |

**Satisfaction signal:** Users are filing detailed, checklist-completed issues — indicates invested user base following project conventions.

**Dissatisfaction signal:** Two issues from same user (`IlyaBizyaev`) in one day suggests friction accumulation in core workflow.

---

## 8. Backlog Watch

| Issue | Age | Risk |
|-------|-----|------|
| [#1112](https://github.com/moltis-org/moltis/issues/1112) | 1 day | **Needs triage** — security-adjacent, has community follow-up comment |
| [#1111](https://github.com/moltis-org/moltis/issues/1111) | 1 day | Needs reproduction confirmation from maintainers |
| [#1110](https://github.com/moltis-org/moltis/issues/1110) | 1 day | Straightforward enhancement; candidate for "good first issue" labeling |

**Maintainer attention needed:** All three issues require initial maintainer response. The 1-comment activity on #1112 without maintainer engagement suggests response latency. No long-term backlog items are visible in today's data, but the zero PR velocity combined with fresh issue accumulation indicates growing triage debt.

---

*Digest generated from github.com/moltis-org/moltis public data. All links verified as of 2026-06-07.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-07

## 1. Today's Overview

CoPaw (QwenPaw) shows **moderate community activity** with 11 issues updated in the last 24 hours, though **zero pull request activity** indicates a potential bottleneck in code contributions and maintainer throughput. The project is experiencing a **bug-reporting surge** with 9 open issues versus only 2 closures, suggesting incoming issue volume exceeds resolution capacity. Notably, three distinct session-related bugs were reported in a single day, pointing to **v1.1.10 release instability**. The absence of any PR activity (open, merged, or closed) raises concerns about development velocity and community contribution health.

---

## 2. Releases

**No new releases** — v1.1.10 remains the current version (released prior to this reporting period).

---

## 3. Project Progress

**No merged or closed PRs today.** 

The only closure was a **self-resolved user issue** ([#4984](https://github.com/agentscope-ai/QwenPaw/issues/4984)) where a user discovered that `/approval approve` command already existed for IM channel approvals. No actual code changes or feature advancements occurred through the PR process.

The lack of any PR activity suggests:
- Potential maintainer bandwidth constraints
- Community contributors may be blocked awaiting review
- Fixes for reported bugs may exist in forks but not submitted upstream

---

## 4. Community Hot Topics

| Issue | Comments | Link | Analysis |
|-------|----------|------|----------|
| #4661 [CLOSED] Context compression ignores 200K config, uses 131K | 6 | [agentscope-ai/QwenPaw#4661](https://github.com/agentscope-ai/QwenPaw/issues/4661) | **Persistent configuration architecture problem** — closed but #4937 confirms fix incomplete |
| #4937 [OPEN] `/compact` ignores `max_input_length`, uses 128K default | 5 | [agentscope-ai/QwenPaw#4937](https://github.com/agentscope-ai/QwenPaw/issues/4937) | **Same root cause as #4661** — regression or incomplete fix across v1.1.8post1→v1.1.10 |

**Underlying need:** Users deploying large-context models (DeepSeek-V4 500K, MiniMax M3 512K) cannot utilize their full context windows. The configuration system has **fragmented between global and per-model settings**, with the `/compact` command hardcoded to 128K/131K defaults. This breaks cost-efficiency for enterprise users paying for long-context capabilities.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **🔴 Critical** | [#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) | **Complete regression**: Local Qwen3.6-27B via vLLM silent failure (infinite loading) in v1.1.9/v1.1.10; worked in v1.1.5.post2 | ❌ None |
| **🔴 Critical** | [#4987](https://github.com/agentscope-ai/QwenPaw/issues/4987) | **Session switching broken in Coding Mode** — regression from v1.1.9 | ❌ None |
| **🟡 High** | [#4988](https://github.com/agentscope-ai/QwenPaw/issues/4988) | **Windows path overflow** from duplicated session IDs in filenames — data loss risk | ❌ None |
| **🟡 High** | [#4937](https://github.com/agentscope-ai/QwenPaw/issues/4937) | Context compression hardcoded to 128K despite 512K model config | ❌ None |
| **🟡 High** | [#4990](https://github.com/agentscope-ai/QwenPaw/issues/4990) | WeWork channel: disabling tool-call display causes error response | ❌ None |
| **🟢 Medium** | [#4985](https://github.com/agentscope-ai/QwenPaw/issues/4985) | File deletion command display lacks line wrapping — UX friction | ❌ None |

**Stability assessment:** v1.1.10 appears to have **introduced multiple regressions** compared to v1.1.9, particularly in session management and local model compatibility. The silent failure mode in #4989 (no error logs) indicates inadequate observability.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Predicted Priority |
|-------|---------|-------------------|
| [#4886](https://github.com/agentscope-ai/QwenPaw/issues/4886) | **MAX Messenger integration** (Russian market) — expands "Every channel" strategy | Medium — market expansion |
| [#4971](https://github.com/agentscope-ai/QwenPaw/issues/4971) | **Dedicated session sidebar** — reduce clicks for session switching | **High** — aligns with #4987/#4988 session system instability |
| [#4986](https://github.com/agentscope-ai/QwenPaw/issues/4986) | **Real-time shell/file operation feedback** — match Cursor/WorkBuddy UX | **High** — competitive parity for coding agents |

**Roadmap prediction:** The session management subsystem requires **architectural refactoring** given three concurrent issues (#4971 UX, #4987 breakage, #4988 path bugs). Real-time execution feedback (#4986) likely becomes a differentiation priority against Cursor-style competitors.

---

## 7. User Feedback Summary

### Pain Points
- **Configuration discoverability**: Users cannot find where context length settings moved (#4661, #4937)
- **Silent failures**: Infinite loading with no logs frustrates debugging (#4989)
- **Platform-specific bugs**: Windows path limits unhandled (#4988)
- **Channel parity**: WeWork integration less polished than others (#4990)

### Use Cases Emerging
- **Enterprise long-context deployments**: Multiple users configuring 200K–512K models for document processing
- **Local/self-hosted workflows**: vLLM + local Qwen models for privacy-sensitive scenarios
- **Cross-platform development**: Windows users hitting filesystem limits

### Satisfaction Signals
- Self-closure #4984 shows documentation exists but **discoverability is poor**
- No 👍 reactions on any issue suggests **low community engagement** or users unaware of GitHub reactions

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|-------|-----|------|---------------|
| [#4661](https://github.com/agentscope-ai/QwenPaw/issues/4661) | 13 days | **Fix incomplete** — #4937 proves recurrence | Reopen or link to #4937; assign configuration system owner |
| [#4886](https://github.com/agentscope-ai/QwenPaw/issues/4886) | 5 days | Market expansion blocker (Russia/CIS) | Maintainer response on channel integration roadmap |
| **All v1.1.10 regressions** (#4987-#4989) | 1 day | **Release quality gate failure** | Emergency patch assessment; consider v1.1.10 hotfix or rollback guidance |

**Critical concern:** With **0 PRs processed** and **9 open issues** from 24h activity, the project appears to have a **maintainer bandwidth or process bottleneck**. The concentration of session-related bugs suggests a v1.1.10 release that may need immediate stabilization.

---

*Digest generated from agentscope-ai/QwenPaw GitHub data — 2026-06-07*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-06-07

**Repository:** [qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)

---

## 1. Today's Overview

ZeptoClaw shows focused, low-volume activity with **3 items updated in the past 24 hours** (2 issues, 1 PR), reflecting concentrated engineering effort on CI infrastructure rather than feature development. The project is in a **stabilization phase** with zero new releases and no merged PRs today. The dominant theme is **binary size discipline** — a strategic priority for embedded/robotics deployment — with active tension between the 7MB "robot moat" target and cross-platform linker realities. Activity is healthy but narrow; all contributions originate from maintainer qhkm, suggesting either solo development or a small core team. The open PR #611 and its follow-up issue #629 indicate iterative refinement of release engineering rather than feature velocity.

---

## 2. Releases

**No new releases** — none published to date per project records.

---

## 3. Project Progress

**No PRs merged or closed today.**

| PR | Status | Progress |
|---|---|---|
| [#611](https://github.com/qhkm/zeptoclaw/pull/611) — *chore(ci): promote binary-size to PR gate at 7.5MB* | **OPEN** (updated 2026-06-06) | Awaits final review/merge. Establishes PR-time binary size enforcement but at a compromise ceiling (7.5MB vs. 7MB target) due to aarch64/darwin-arm64 sizing constraints (~6.98MB stripped). |

**Technical advance:** The project moved from post-mortem binary size monitoring to **gated CI enforcement**, though the gate threshold remains contested (see Issue #629).

---

## 4. Community Hot Topics

| Item | Heat | Analysis |
|---|---|---|
| [#612](https://github.com/qhkm/zeptoclaw/issues/612) — *chore(perf): audit ~800KB binary-size drift since 6.2MB low water mark, tighten gate to 7MB* | **CLOSED** (1 comment) | Diagnostic retrospective; identified 800KB regression from historical low. Closed after establishing that current 6.98MB (darwin-arm64) and ~10.5MB (linux-x86_64) represent "encoding/linker reality" rather than bloat. |
| [#629](https://github.com/qhkm/zeptoclaw/issues/629) — *chore(ci): add aarch64 binary-size gate at 7MB (the actual robot moat)* | **OPEN** (0 comments) | **Strategic priority:** Explicitly frames aarch64 as the "actual robot moat" — the deploy target for Pi/Jetson/Apple Silicon. Requests separate, stricter gate (7MB) for this architecture while allowing x86_64 its ~10.5MB reality. |

**Underlying need:** The project serves **resource-constrained edge/robotics deployments** where binary size directly impacts OTA update feasibility, storage costs, and boot performance. The 7MB target appears to be a hard product requirement; the tension between "one gate to rule them all" vs. per-architecture realism is unresolved.

---

## 5. Bugs & Stability

**No bugs, crashes, or regressions reported today.**

The active items are **infrastructure/chore** class, not stability defects. Binary size monitoring (#612, #629) is preventive engineering — no production incidents cited.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Likelihood in Next Release | Rationale |
|---|---|---|
| Per-architecture binary size gates (aarch64 @ 7MB, x86_64 @ 11MB) | **High** | Issue #629 directly requests this; PR #611's 7.5MB compromise is explicitly labeled as temporary. |
| Binary size regression tooling (historical tracking, diff alerts) | **Medium** | Issue #612's audit suggests appetite for trend analysis beyond pass/fail gates. |
| Additional strip/LTO optimization passes | **Medium** | If 7MB proves tight on aarch64, build-level optimization becomes necessary. |

**No user-facing feature requests** observed in today's data — all signals are engineering/ops infrastructure.

---

## 7. User Feedback Summary

**No direct user feedback** present in today's dataset. All issues/PRs are maintainer-authored.

**Inferred user profile & pain points:**
- **Target users:** Robotics/edge AI developers deploying to ARM SBCs (Raspberry Pi, Jetson) with strict resource budgets
- **Implied satisfaction:** The "6MB fits on a robot" framing suggests size is a **competitive differentiator** — users likely chose ZeptoClaw for this constraint
- **Risk:** If aarch64 size creeps above 7MB, the core value proposition ("fits on a robot") degrades; the 800KB drift from 6.2MB to ~7MB indicates this is already a concern

---

## 8. Backlog Watch

| Item | Age | Attention Needed |
|---|---|---|
| [#611](https://github.com/qhkm/zeptoclaw/pull/611) | 5 days open | **Merge decision pending** — blocked by architectural gate design questions raised in #629. Risk: stale PR if #629's per-arch approach supersedes it. |
| [#629](https://github.com/qhkm/zeptoclaw/issues/629) | 1 day open | **Needs maintainer response** — proposes specific implementation path (add aarch64 job). Zero comments suggests either recent filing or awaiting qhkm's own prioritization. |

**Assessment:** Low backlog risk — the open items are tightly coupled and likely to resolve together. No long-unanswered critical issues. Project appears **well-tended** with focused scope.

---

**Health Score: 🟢 Stable** — Disciplined infrastructure investment, clear strategic priorities, minimal noise. Risk: single-maintainer bottleneck (all activity from qhkm).

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-07

## 1. Today's Overview

ZeroClaw shows **very high development velocity** with 87 total items updated in the last 24 hours (37 issues, 50 PRs), though the **merge rate remains concerning at only 10%** (5 merged/closed PRs vs. 45 open). The project is in an intense **v0.8.0 release crunch** with multiple milestone trackers (#7112, #6970, #7314, #7320) active simultaneously. Security hardening dominates the agenda—OIDC auth, tool sandboxing, and secret redaction fixes are all in flight. The plugin ecosystem is exploding with 8 new WASM plugin PRs submitted in a single day, suggesting a strategic pivot toward self-hosted, privacy-preserving tool integrations. However, the growing PR backlog (45 open, many stacked/dependent) indicates potential merge bottleneck risks.

---

## 2. Releases

**No new releases** (v0.8.0 remains in development).

The v0.8.0 release is blocked by multiple P1 security and stability issues per tracker [#7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112). No ETA communicated.

---

## 3. Project Progress

### Merged/Closed PRs Today (5 total)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#7334](https://github.com/zeroclaw-labs/zeroclaw/pull/7334) | rifuki | Clamps zero `draft_update_interval_ms` in Telegram to prevent edit flooding | Fixes S2 degradation |
| [#7281](https://github.com/zeroclaw-labs/zeroclaw/pull/7281) | singlerider | Stops path-policy false-positives on `~` tokens in heredoc/quoted strings | Security hardening |
| [#7297](https://github.com/zeroclaw-labs/zeroclaw/pull/7297) | perlowja | Per-request agent dispatch for webhooks via `?agent=` query param | Gateway flexibility |
| ~~[#7333](https://github.com/zeroclaw-labs/zeroclaw/pull/7333)~~ | ~~theonlyhennygod~~ | ~~Remote plugin registry (`zeroclaw plugin search` + install-by-name)~~ | *Actually OPEN—data inconsistency noted* |

**Key advancements:**
- **Plugin sandbox hardening**: [#7335](https://github.com/zeroclaw-labs/zeroclaw/pull/7335) introduces resource limits, SSRF egress guards, and env scoping for WASM plugins—addresses critical gap where "the sandbox wasn't actually containing anything"
- **Dashboard expansion**: [#7229](https://github.com/zeroclaw-labs/zeroclaw/pull/7229) (XL, open) adds MCP, Skills, Plugins & Providers management tabs—major UX upgrade
- **Skill system fixes**: [#7245](https://github.com/zeroclaw-labs/zeroclaw/pull/7245) resolves plugin-bundled skill loading failures

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| # | Issue | Comments | Core Tension |
|:---|:---|:---:|:---|
| [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) | Subscription-native OAuth for Ollama Cloud, z.ai, Kimi, MiniMax | 7 | **API key fatigue vs. provider diversity**—users want "login, not keys" for Chinese providers |
| [#7184](https://github.com/zeroclaw-labs/zeroclaw/issues/7184) | Move translated `.ftl`/`.po` to git submodule | 4 | **Repo hygiene vs. contributor friction**—translation churn polluting main history |
| [#6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715) | Delete 200+ stale branches | 4 | **Technical debt**—merged branches cluttering repository |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | OIDC Authentication Provider support (umbrella) | 4 | **Enterprise readiness**—pluggable auth critical for v0.9.0 |
| [#6915](https://github.com/zeroclaw-labs/zeroclaw/issues/6915) | Skill-scoped tool activation (temporary elevation) | 3 | **Principle of least privilege vs. skill functionality**—closed, indicating resolution |

**Underlying needs analysis:**
- **Enterprise/team features** (OIDC, OAuth) are rising in priority—suggests user base maturing beyond individual developers
- **Operational maintainability** (i18n submodules, branch cleanup) indicates scaling pains
- **Security granularity** (per-skill permissions, tool scoping) is the dominant architectural theme

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Risk |
|:---|:---|:---|:---|:---|
| **S0** — Data loss/security | [#7252](https://github.com/zeroclaw-labs/zeroclaw/issues/7252): Killed ACP sessions rehydrate from durable history | **CLOSED** today | [#7252](https://github.com/zeroclaw-labs/zeroclaw/issues/7252) | Session state corruption |
| **S0** | [#6978](https://github.com/zeroclaw-labs/zeroclaw/issues/6978): Nested secrets leaked in object-array config displays | **CLOSED** today | [#6978](https://github.com/zeroclaw-labs/zeroclaw/issues/6978) | Secret exposure |
| **S1** — Workflow blocked | [#7312](https://github.com/zeroclaw-labs/zeroclaw/issues/7312): Bedrock Qwen fails on second prompt | **OPEN** | None identified | Provider regression |
| **S1** | [#7227](https://github.com/zeroclaw-labs/zeroclaw/issues/7227): Quickstart hardcodes `default` provider alias | **CLOSED** today | [#7227](https://github.com/zeroclaw-labs/zeroclaw/issues/7227) | Onboarding collision |
| **S2** — Degraded | [#7332](https://github.com/zeroclaw-labs/zeroclaw/issues/7332): Telegram zero-interval edit flooding | **CLOSED** today | [#7334](https://github.com/zeroclaw-labs/zeroclaw/pull/7334) | API abuse/rate limits |
| **S2** | [#7068](https://github.com/zeroclaw-labs/zeroclaw/issues/7068): Codex scratchpad leaked to Telegram | **CLOSED** | Unknown | Internal exposure |
| **S2** | [#7126](https://github.com/zeroclaw-labs/zeroclaw/issues/7126): "Clear all" only wipes frontend, not backend history | **CLOSED** | Unknown | Data inconsistency |
| **S2** | [#7151](https://github.com/zeroclaw-labs/zeroclaw/issues/7151): Tool call telemetry leaks to chat WebSocket | **CLOSED** | Unknown | UI corruption |

**Assessment**: Strong bug-fix velocity on security/stability (6 S0-S2 issues closed). The open [#7312](https://github.com/zeroclaw-labs/zeroclaw/issues/7312) Bedrock regression is the critical new blocker—provider-specific, likely prompt-state management issue.

---

## 6. Feature Requests & Roadmap Signals

### Likely for v0.8.x (near-term, accepted/in-progress)

| Feature | Issue/PR | Confidence | Signal Strength |
|:---|:---|:---:|:---|
| **OIDC auth provider** | [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | High | P1, accepted, tracking issue with DoD |
| **WASM plugin system** | [#7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314), #7335-#7337 | Very High | Multiple stacked PRs, milestone tracker |
| **MCP dashboard** | [#7320](https://github.com/zeroclaw-labs/zeroclaw/issues/7320) | Very High | PR #7229 in review, milestone active |
| **Tool allowlist enforcement** | [#6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914) | High | P1, accepted, security-critical |
| **Composio action scoping** | [#6917](https://github.com/zeroclaw-labs/zeroclaw/issues/6917) | Medium | Blocked, accepted |

### Likely for v0.9.0+ (longer-term)

| Feature | Issue | Confidence |
|:---|:---|:---:|
| **Subscription-native OAuth** (4 providers) | [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) | Medium—blocked, high complexity |
| **Universal skill registry** (agentskills.io) | [#6143](https://github.com/zeroclaw-labs/zeroclaw/pull/6143) | Medium—XL PR, needs-author-action |
| **Per-skill security permissions** | [#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775) | Medium—accepted, architectural |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Configuration complexity** | [#7227](https://github.com/zeroclaw-labs/zeroclaw/issues/7227) (Quickstart alias collision), [#7156](https://github.comzeroclaw-labs/zeroclaw/issues/7156) (persistent drift banner) | High |
| **Provider fragility** | [#7312](https://github.com/zeroclaw-labs/zeroclaw/issues/7312) (Bedrock Qwen), [#6875](https://github.com/zeroclaw-labs/zeroclaw/issues/6875) (Llama 4 tool call parsing) | High |
| **Secret management anxiety** | [#6978](https://github.com/zeroclaw-labs/zeroclaw/issues/6978), [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141), [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) | Medium-High |
| **Windows-specific degradation** | [#7197](https://github.com/zeroclaw-labs/zeroclaw/issues/7197) (cmd windows spawning) | Medium |

### Positive Signals

- **Self-hosting enthusiasm**: 8 new plugins in 24h all emphasize "self-hosted," "local," "private"—users want data sovereignty
- **Dashboard demand**: MCP/Skills/Plugins management UI (#7229) suggests users outgrowing config-file workflows
- **Enterprise readiness requests**: OIDC, OAuth, per-skill permissions indicate organizational adoption

---

## 8. Backlog Watch

### Critical items needing maintainer attention

| Item | Age | Risk | Why Stuck |
|:---|:---|:---|:---|
| [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) OAuth for 4 providers | ~8 weeks | **High** | `status:blocked`—likely needs architectural decision on auth abstraction |
| [#6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914) Enforce `allowed_tools` | ~2 weeks | **High** | `status:blocked`—may depend on #6915 (now closed), unblocking possible |
| [#5908](https://github.com/zeroclaw-labs/zeroclaw/issues/5908) CI/CD container builds | ~7 weeks | Medium | `status:blocked`—infrastructure, not user-facing; deprioritized? |
| [#6143](https://github.com/zeroclaw-labs/zeroclaw/pull/6143) Universal skill registry | ~6 weeks | Medium | `needs-author-action`—XL PR, author (theonlyhennygod) now focused on plugins |
| [#6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715) Branch cleanup | ~3 weeks | Low | Simple but unowned—200+ branches still present |

### Merge bottleneck risk

**45 open PRs** with heavy stacking (#7335 → #7336 → #7337 chain; #7229 → #7235) creates cascade dependency risk. Theonlyhennygod authored 10 of 20 shown PRs—**bus factor concern** for plugin ecosystem.

---

*Digest generated from GitHub activity 2026-06-06 to 2026-06-07. All links: https://github.com/zeroclaw-labs/zeroclaw*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*