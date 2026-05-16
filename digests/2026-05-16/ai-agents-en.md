# OpenClaw Ecosystem Digest 2026-05-16

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-16 00:20 UTC

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

# OpenClaw Project Digest — 2026-05-16

## 1. Today's Overview

OpenClaw shows **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a project in rapid development with significant community engagement. The 453:47 open-to-closed issue ratio and 469:31 open-to-merged PR ratio suggest the project is accumulating backlog faster than it's resolving items—a common pattern for fast-growing open-source projects but one requiring attention. The single new release (v2026.5.14-beta.2) continues the aggressive beta cadence with channel/SDK improvements and per-agent configuration overrides. Discord and Telegram channel stability appears to be a major focus area based on issue clustering, while the Codex backend integration continues maturing with multiple fixes in flight.

---

## 2. Releases

### [v2026.5.14-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.5.14-beta.2)

| Aspect | Details |
|--------|---------|
| **Type** | Beta pre-release |
| **Focus** | Channel/SDK normalization, agent configuration flexibility |

**Changes:**
- **Channels/SDK**: Added normalized command turn facts to channel turn construction; exposed command-turn helpers for plugin inbound contexts
- **Agents/config**: Added per-agent bootstrap profile overrides for `contextInjection`, `bootstrapMaxChars`, and `bootstrapTotalMaxChars` with inheritance support

**Assessment**: Incremental beta with infrastructure improvements for plugin developers and finer-grained agent memory control. No breaking changes indicated.

---

## 3. Project Progress

### Recently Merged/Closed PRs (2026-05-15 to 2026-05-16)

| PR | Status | Description | Impact |
|----|--------|-------------|--------|
| [#82363](https://github.com/openclaw/openclaw/pull/82363) | **CLOSED** | Fix session fallback provenance across reloads | Prevents stale fallback chains from persisting incorrectly after config reloads |
| [#82160](https://github.com/openclaw/openclaw/pull/82160) | OPEN | fix(codex): wait for migrated plugin inventory | Resolves race condition where Codex migration could stop plugin discovery prematurely |
| [#82298](https://github.com/openclaw/openclaw/pull/82298) | OPEN | Fix Telegram stop lane and gateway session aborts | Addresses Telegram stop message handling and session abort routing |
| [#82366](https://github.com/openclaw/openclaw/pull/82366) | OPEN | fix: use passive periodic sqlite wal checkpoints | Reduces main event loop blocking from SQLite maintenance |
| [#82365](https://github.com/openclaw/openclaw/pull/82365) | OPEN | fix(skills): refresh snapshots after skill exposure config changes | Ensures skill configuration changes properly invalidate caches |

**Key Advances**: 
- **Telegram reliability**: Multiple PRs targeting stop message handling and delivery routing
- **Codex backend hardening**: Plugin inventory race conditions and session management
- **Performance**: SQLite WAL checkpointing optimization for better gateway responsiveness

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Comments | 👍 | Topic | Link |
|-------|----------|-----|-------|------|
| [#78308](https://github.com/openclaw/openclaw/issues/78308) | 10 | 1 | **MCP tool call approval envelope** | [Feature] Channel-mediated approval for MCP tool calls |
| [#82037](https://github.com/openclaw/openclaw/issues/82037) | 10 | 1 | **WebSocket "wrong protocol" regression** | [Bug] macOS 26.5 connection failures post-2026.5.12 |
| [#78016](https://github.com/openclaw/openclaw/issues/78016) | 9 | 1 | **Matrix voice message handling** | [Bug] Voice messages not processed on Matrix |
| [#79794](https://github.com/openclaw/openclaw/issues/79794) | 8 | 1 | **Discord READY event regression** | [Bug] Guild messages not received in 2026.5.7 |
| [#78461](https://github.com/openclaw/openclaw/issues/78461) | 7 | 3 | **Plugin metadata re-scanning** | [Bug] Repeated metadata loading during normalization |

### Underlying Needs Analysis

| Topic | Community Need | Maturity Signal |
|-------|---------------|---------------|
| MCP tool approval | **Security governance**—users want same consent model for AI tools as shell execution | Production-readiness blocker for enterprise |
| WebSocket protocol handling | **Cross-platform stability**—macOS ecosystem fragility | Platform parity gap |
| Voice/media pipelines | **Multimodal agent interactions**—Matrix/Discord/Slack all affected | Feature gap vs. competitor assistants |
| Discord reliability | **Business-critical channel uptime**—guild message delivery is core | Regression testing gap in release process |

---

## 5. Bugs & Stability

### Critical/High Severity (User-Blocking Regressions)

| Issue | Severity | Version | Fix PR | Description |
|-------|----------|---------|--------|-------------|
| [#82037](https://github.com/openclaw/openclaw/issues/82037) | 🔴 **Critical** | 2026.5.12 | **CLOSED** | WebSocket "wrong protocol" breaks all macOS web/app connections |
| [#81955](https://github.com/openclaw/openclaw/issues/81955) | 🔴 **Critical** | 2026.5.12 | Unknown | Agent persona loss—injection system failure |
| [#82254](https://github.com/openclaw/openclaw/issues/82254) | 🔴 **Critical** | 2026.5.12 | Unknown | "NO!" responses in web UI—complete output corruption |
| [#79794](https://github.com/openclaw/openclaw/issues/79794) | 🟠 **High** | 2026.5.7 | Unknown | Discord guild message ingestion broken |
| [#77930](https://github.com/openclaw/openclaw/issues/77930) | 🟠 **High** | 2026.5.4+ | Unknown | Discord channel loading regression (bisected to beta.2) |
| [#77576](https://github.com/openclaw/openclaw/issues/77576) | 🟠 **High** | 2026.5.3-1 | Unknown | Telegram responses routing to wrong destination |

### Medium Severity (Feature Degradation)

| Issue | Version | Description |
|-------|---------|-------------|
| [#78016](https://github.com/openclaw/openclaw/issues/78016) | Current | Matrix voice messages hallucinated instead of transcribed |
| [#78061](https://github.com/openclaw/openclaw/issues/78061) | Current | Slack thread delivery failure (response generated but not sent) |
| [#82343](https://github.com/openclaw/openclaw/issues/82343) | 2026.5.12 | Codex app-server timeout—response delivery deadlock |
| [#82274](https://github.com/openclaw/openclaw/issues/82274) | 2026.5.12 | Telegram HOL blocking + Codex mid-turn stalls |

### Stability Assessment

**Concerning pattern**: Multiple independent reports of **2026.5.12 as a problematic release** with WebSocket protocol errors, persona loss, and output corruption ("NO!"). The 10-day beta cycle may be insufficient for regression coverage given channel surface area.

**Positive**: Rapid issue closure on [#82037](https://github.com/openclaw/openclaw/issues/82037) and [#82150](https://github.com/openclaw/openclaw/issues/82150) (DeepSeek 500 error) shows responsive maintenance.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Signal Strength | Predicted Version | Rationale |
|-------|---------------|-------------------|-----------|
| [#78308](https://github.com/openclaw/openclaw/issues/78308) MCP consent envelope | ⭐⭐⭐⭐⭐ | 2026.6.x | Security parity with shell exec; enterprise blocker |
| [#77202](https://github.com/openclaw/openclaw/issues/77202) Signal tool-call progress | ⭐⭐⭐⭐☆ | 2026.6.x | Pattern established on Telegram; channel parity |
| [#79047](https://github.com/openclaw/openclaw/issues/79047) Cross-backend context preservation | ⭐⭐⭐⭐☆ | 2026.7.x | Architecture-deep; affects all backend switches |
| [#79458](https://github.com/openclaw/openclaw/issues/79458) i18n slash commands | ⭐⭐⭐☆☆ | 2026.6.x | Low risk, high user impact; community PR likely |
| [#76952](https://github.com/openclaw/openclaw/issues/76952) Realtime Talk docs/phone bridge | ⭐⭐⭐⭐☆ | 2026.6.x | Feature is working but undocumented; mobile expansion |

**Emerging theme**: **Cross-channel consistency**—users expect feature parity (progress indicators, approval flows, voice handling) across all messaging platforms.

---

## 7. User Feedback Summary

### Pain Points (Verbatim Themes)

| Category | Quote/Pattern | Frequency |
|----------|-------------|-----------|
| **Upgrade fragility** | "After upgrading from X to Y..." | Very high—dominant pattern in issues |
| **Channel delivery failures** | "generates response but never delivered" | High—Slack, Telegram, Discord all affected |
| **Identity/persona loss** | "agent loses its identity/persona" | Medium—core value proposition at risk |
| **Configuration tooling** | `doctor --fix` "broken loop" / "fails atomically" | Medium—trust in self-healing eroded |
| **Backend-specific quirks** | Codex, Claude CLI, Ollama each have unique failure modes | High—abstraction layer leaks |

### Satisfaction Indicators

| Positive Signal | Source |
|-----------------|--------|
| "Realtime Talk is working, I love the feature. It feels genuinely useful and low-latency." | [#76952](https://github.com/openclaw/openclaw/issues/76952) |
| Active multi-platform deployment (Matrix, Discord, Telegram, Slack, Signal, Feishu, iMessage) | Issue diversity |
| Deep customization appreciation (bootstrap profiles, context injection) | [#78308](https://github.com/openclaw/openclaw/issues/78308) discussion |

### Core Tension

Users value OpenClaw's **flexibility and channel breadth** but are strained by **regression density** in the rapid release cycle. The project is being used in production-like multi-channel deployments despite beta labeling.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>10 days old, high value, stalled)

| Issue | Age | Blocker | Why It Matters |
|-------|-----|---------|--------------|
| [#68209](https://github.com/openclaw/openclaw/issues/68209) | ~29 days | Runaway context growth on model switch | Data corruption risk; root cause unclear |
| [#36614](https://github.com/openclaw/openclaw/issues/36614) | ~72 days | Session routing contamination | Core session architecture; affects all per-channel-peer configs |
| [#70164](https://github.com/openclaw/openclaw/issues/70164) | ~24 days | WebSocket event skipping | Streaming reliability; Chinese-speaking user base affected |
| [#70493](https://github.com/openclaw/openclaw/issues/70493) | ~23 days | Isolated session Playwright gap | Feature parity between main/isolated sessions |
| [#70330](https://github.com/openclaw/openclaw/issues/70330) | ~24 days | WebChat session rotation data loss | User data loss on gateway restart |

### PRs Stalled in Review

| PR | Age | Blocker |
|----|-----|---------|
| [#47318](https://github.com/openclaw/openclaw/pull/47318) | ~62 days | XL size, needs real-behavior proof |
| [#80802](https://github.com/openclaw/openclaw/pull/80802) | ~5 days | XL size, multi-platform, dirty candidate |
| [#68734](https://github.com/openclaw/openclaw/pull/68734) | ~27 days | Refactor-only, needs behavior proof |

### Recommended Maintainer Actions

1. **Triage 2026.5.12 regressions** as a batch—consider hotfix release or rollback guidance
2. **Expedite review** of [#82298](https://github.com/openclaw/openclaw/pull/82298) (Telegram stop handling) given multiple linked user issues
3. **Architectural decision needed** on [#36614](https://github.com/openclaw/openclaw/issues/36614) session routing—72 days stale, affects core multi-channel design
4. **Establish release quality gate**—the beta.1→beta.2→.3→.4 regression pattern on Discord suggests insufficient automated channel testing

---

*Digest generated from GitHub activity data for openclaw/openclaw on 2026-05-16.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem
*Date: 2026-05-16 | Based on community digest analysis*

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source ecosystem is experiencing **intense parallel development** across at least 10 actively tracked projects, with daily issue/PR volumes exceeding 300 combined. The landscape splits between **mature, multi-channel platforms** (OpenClaw, NanoBot, CoPaw) handling enterprise deployments across Discord/Telegram/Slack/Matrix, and **leaner, security-focused alternatives** (NanoClaw, Moltis) emphasizing auditable cores and sovereign deployment. A dominant pattern is **provider diversification pressure**—no project can assume single-LLM dominance as Anthropic, DeepSeek, MiMo, and OpenRouter each introduce breaking protocol variations. The ecosystem is simultaneously **racing toward production readiness** while accumulating technical debt from rapid iteration, with regression density emerging as the primary user complaint.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases (24h) | Closure/Merge Rate | Health Score* |
|:---|:---|:---|:---|:---|:---|
| **OpenClaw** | 500 | 500 | 1 (beta) | Issues: 453:47 open; PRs: 469:31 open | ⚠️ **Volatile** — High activity, accumulation > resolution, critical regressions in 2026.5.12 |
| **NanoBot** | 58 | 22 | 0 | Issues: 53 closed/5 open; PRs: 17 merged/5 open | ✅ **Healthy** — Documentation sprint + core features, quality gating evident |
| **Hermes Agent** | 50 | 50 | 0 | PRs: 16 merged/34 open | ⚠️ **Stressed** — Active development, unpatched P1s, contributor concentration risk |
| **PicoClaw** | 11 | 35 | 0 (nightly only) | PRs: 22 merged/13 open | ✅ **Stabilizing** — Aggressive bug-fix sprint toward v0.2.8 |
| **NanoClaw** | 50 | 50 | 1 (v2.0.63) | 88% closure/merge rate | ✅ **Strong** — Formal release cadence established, disciplined triage |
| **NullClaw** | 2 | 0 | 0 | 0% | 🔴 **Stagnant** — Minimal activity, unresponsive maintainer pattern |
| **IronClaw** | 17 | 50 | 0 (0.28.2 prior) | PRs: 28 merged/22 open | ⚠️ **Innovating** — Reborn architecture overhaul, crates.io publication gap |
| **LobsterAI** | 1 | 36 | 0 | PRs: 33 merged/3 open | ⚠️ **Consolidating** — High merge velocity, stalled releases, vendor trust risk |
| **Moltis** | 0 | 7 | 0 | 6 merged/1 open | ✅ **Tight** — Zero open issues, same-day fix cycle |
| **CoPaw** | 24 | 50 | 0 | PRs: 34 merged/16 open | ✅ **Active** — Healthy merge ratio, security-responsive |
| **ZeroClaw** | 22 | 50 | 0 | PRs: 6 merged/44 open | 🔴 **Crisis** — Severe review bottleneck, SOP subsystem vaporware |

*\*Health score synthesizes closure rates, severity distribution, release cadence, and maintainer responsiveness*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Peer Comparison |
|:---|:---|:---|
| **Channel breadth** | 8+ platforms (Discord, Telegram, Slack, Matrix, Signal, Feishu, iMessage, WebChat) | Widest coverage; NanoBot matches most, NanoClaw limited to WhatsApp/Discord |
| **Customization depth** | Per-agent bootstrap profiles, context injection, bootstrapMaxChars | Deepest; Hermes has skills but less granular memory control |
| **Realtime capabilities** | "Realtime Talk" deployed and praised | Leading; IronClaw building comparable, others lack |
| **Community scale** | 500 issues/PRs daily = ~10x NanoBot, ~20x PicoClaw | Largest by volume; but may indicate scale without proportional maintainer growth |

### Technical Approach Differences
- **OpenClaw**: Monolithic, batteries-included framework with aggressive beta cadence; prioritizes feature velocity and channel parity
- **NanoClaw**: "Tiny auditable core" with containerized skill isolation; explicit rejection of OpenClaw's "massive attack surface"
- **IronClaw**: Rust-based with WebAssembly extension model; "Reborn" architecture emphasizes structured tool execution over CodeAct
- **Hermes Agent**: Session-centric with heavy investment in cron/scheduling and multi-platform gateway identity

### Community Size Reality
OpenClaw's 500 daily items dwarfs all peers, but **closure ratios are worse** (91% open issues vs. NanoClaw's 12% open). The community is **broad but potentially shallow**—many users in production-like deployments despite beta labeling, straining maintainers.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Evidence |
|:---|:---|:---|
| **Reasoning model compatibility** | OpenClaw, NanoBot, PicoClaw, Hermes, IronClaw, CoPaw, ZeroClaw | DeepSeek `reasoning_content` handling (#82037, #17212, #2741, #3673, #4051, #6672); MiMo thinking mode (#3734, #2862, #4314); Anthropic extended thinking (#5652) |
| **MCP ecosystem integration** | OpenClaw, PicoClaw, Moltis, CoPaw | Tool call approval envelopes (#78308), streamable HTTP transport (#2811), OAuth client secrets (#1001), tool name prefixing (#4428) |
| **Multi-channel parity** | OpenClaw, NanoBot, PicoClaw, Hermes, CoPaw, ZeroClaw | Telegram stop lanes (#82298), Matrix sender identity (#2816), Slack thread delivery (#78061), DingTalk parallel processing (#4431) |
| **Headless/server deployment** | NanoClaw, Hermes, Moltis, ZeroClaw | Systemd session probing (#2494), Docker/Proxmox tolerance (#997), xAI OAuth headless flow (#26588), container credential refresh (#2498) |
| **Security/approval governance** | OpenClaw, NanoBot, Hermes, CoPaw, ZeroClaw | MCP tool approval (#78308), chat-native DM approval (#3774), TOTP shell gating (#5779), backup HMAC signing (#4409) |
| **Task persistence beyond single-turn** | NanoBot, Hermes, CoPaw | LongTaskTool (#3460), `/goal` command (#3788), plan tool (#3791), cron isolation (#4432) |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Maximum channel coverage + realtime voice | Power users, multi-platform communities | TypeScript/Node, monolithic, plugin-extensible |
| **NanoBot** | Structured task persistence + APAC localization | Research/enterprise teams, Chinese-speaking users | Python, Meta-ReAct loops, documentation-first |
| **Hermes Agent** | Session integrity + cron autonomy | Long-running autonomous agent operators | Rust-heavy, skill-centric, state.db architecture |
| **PicoClaw** | Embedded/hardware-friendly + Chinese model priority | Edge/self-hosters, Xiaomi/DeepSeek users | Go, "Seahorse" context manager, nightly builds |
| **NanoClaw** | Minimal attack surface + per-install isolation | Security-conscious self-hosters, container users | TypeScript, v2 container sovereignty, semantic releases |
| **IronClaw** | WebAssembly extensions + Rust performance | Enterprise integrators, NEAR ecosystem | Rust, WASM runtime, workstream-driven "Reborn" |
| **LobsterAI** | Document workspace + enterprise IM integration | Corporate teams, NetEase ecosystem | Electron, artifact preview system, NSP-ClawGuard |
| **Moltis** | Remote access infrastructure + operational simplicity | Self-hosters needing secure remote management | Go, TLS automation, NetBird/Cloudflare mesh |
| **CoPaw** | Multi-agent workspace + Chinese enterprise IM | Alibaba Cloud users, DingTalk/WeCom enterprises | TypeScript, CloudPaw A2A, skill scanner security |
| **ZeroClaw** | SOP framework + broad channel experimentation | Automation-focused operators | Rust, Schema V3, ClawHub skill marketplace |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|:---|:---|:---|
| **🔥 Rapidly Iterating** | OpenClaw, IronClaw, ZeroClaw | >40 PRs/day, architectural overhaul in progress, regression debt accumulating |
| **✅ Active & Stabilizing** | NanoBot, PicoClaw, CoPaw, NanoClaw | Healthy merge ratios, security responsiveness, approaching or maintaining release cadence |
| **🟡 Maintenance Mode** | Hermes, LobsterAI | Significant activity but concentrated on hardening/fixes rather than expansion; release stalls |
| **🔴 At Risk / Stagnant** | NullClaw | Near-zero activity, unresponsive to community reports |

**Contributor Concentration Risks:**
- Hermes: `Phoenix1819` has 5 substantial PRs needing review—disengagement would stall message bus, Matrix crypto, and session management
- PicoClaw: `bogdanovich` has 5 open PRs—merge conflict risk, author fatigue
- ZeroClaw: `JordanTheJet` filed 5 critical SOP defects with zero response—reputation damage imminent

---

## 7. Trend Signals

| Trend | Evidence | Implication for AI Agent Developers |
|:---|:---|:---|
| **Provider diversification as risk mitigation** | NanoClaw #80 (60 👍): "Anthropic terminating subs for OpenClaw usage"; OpenClaw multi-backend fixes | **Design for LLM replaceability**—no single provider is operationally safe; abstraction layers are mandatory |
| **Reasoning-content protocol fragmentation** | DeepSeek, MiMo, Anthropic each require bespoke handling; "reasoning_content" field wars across 6+ projects | **Normalize reasoning extraction** early; expect ongoing whack-a-mole without standardization |
| **Security governance as production blocker** | MCP tool approval (#78308), TOTP shell gating (#5779), backup trust controls (#4409) | **Consent and audit are not nice-to-have**—enterprise adoption requires granular, non-bypassable approval flows |
| **Cross-channel consistency expectation** | Progress indicators, approval flows, voice handling demanded uniformly across Telegram/Discord/Slack/Matrix | **Platform abstraction must preserve UX semantics**, not just message transport |
| **Configuration security & ergonomics** | NanoBot TOML migration (#3402), secret references (#2172), NanoClaw plaintext credential pain | **Separate secrets from config**—environment-variable-only patterns are scaling bottlenecks |
| **"Realtime" and multimodal as table stakes** | OpenClaw Realtime Talk, PicoClaw native audio (#2626), CoPaw Telegram AudioContent (#1516) | **Text-only agents are legacy**—voice, image, and streaming media pipelines require architectural investment |
| **Documentation/implementation trust gap** | ZeroClaw SOP vaporware (#6685-#6689), IronClaw crates.io lag (#3259) | **Docs are liabilities if inaccurate**—implement-then-document or explicitly mark experimental |

---

*Report compiled from 10 project digests covering 1,200+ issues/PRs over 24-hour period. Data current as of 2026-05-16.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-16

## 1. Today's Overview

NanoBot experienced **extremely high activity** on 2026-05-15 with **58 issues updated** (5 open/active, 53 closed) and **22 pull requests** (5 open, 17 merged/closed). The activity pattern reveals a **major documentation and code annotation sprint**—a single contributor (xianqiangfu) closed 25+ structured issues covering Chinese documentation, code comments, architecture diagrams, and technical guides. This suggests either an organized community documentation drive or maintainer-led onboarding preparation. Meanwhile, core development continued with significant feature work including task planning tools, gateway lifecycle notifications, and provider fixes. No new releases were published, indicating this is an accumulation phase toward a future version.

---

## 2. Releases

**No new releases** (v0.1.5.post3.2026.05.13 remains current).

---

## 3. Project Progress

### Merged/Closed PRs Today (17 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#3782](https://github.com/HKUDS/nanobot/pull/3782) | yorkhellen | **fix(webui): remove eager markdown preload** — Eliminates >1MB unnecessary chunk load at startup | Performance: Faster WebUI initialization, reduced bandwidth |
| [#3460](https://github.com/HKUDS/nanobot/pull/3460) | chengyongru | **feat(long-task): add LongTaskTool for multi-step agent tasks** | Core capability: Meta-ReAct loop for sustained complex tasks |
| [#3788](https://github.com/HKUDS/nanobot/pull/3788) | Re-bin | **feat(goal): /goal command & long-running tasks** — Chat-scoped goal state with WebSocket→WebUI pipeline | UX: Persistent task tracking across conversation turns |
| [#3373](https://github.com/HKUDS/nanobot/pull/3373) | JiajunBernoulli | **feat: gateway lifecycle notification hooks (on_start/on_stop)** | Operations: Systemd-deployed gateways now observable |
| [#3792](https://github.com/HKUDS/nanobot/pull/3792) | JiajunBernoulli | **feat: gateway lifecycle notifications in Feishu** | Channel-specific extension of above |
| [#3793](https://github.com/HKUDS/nanobot/pull/3793) | boogieLing | **fix(codex): stabilize prompt cache key** — Fixes per-turn hash instability | Cost/performance: Proper OpenAI prompt caching, reduced API costs |
| [#3840](https://github.com/HKUDS/nanobot/pull/3840) | boogieLing | **fix(web): back off Brave search rate limits** — Retry with 1s delay on HTTP 429 | Reliability: Graceful degradation under search rate limits |
| [#3844](https://github.com/HKUDS/nanobot/pull/3844) | chengyongru | **perf(agent): append runtime context after user content for cache stability** | Performance: Improved KV cache hit rates across turns |
| [#3734](https://github.com/HKUDS/nanobot/pull/3734) | pixan-ai | **fix(providers): wire MiMo to thinking_type** | Provider fix: `reasoning_effort: "none"` now disables MiMo thinking |
| [#3842](https://github.com/HKUDS/nanobot/pull/3842) | Hinotoi-agent | **[security] fix(message): confine local media attachments** | Security: Path traversal prevention in restricted deployments |
| [#3841](https://github.com/HKUDS/nanobot/pull/3841) | chengyongru | **refactor(tools): remove GlobTool** — Redundant with GrepTool's `glob` parameter | Maintenance: Simplified tool surface |
| [#3752](https://github.com/HKUDS/nanobot/pull/3752) | tamvicky | **fix: clear media_paths after voice transcription** | Bug fix: Prevents duplicate audio file tags in WhatsApp |
| [#3764](https://github.com/HKUDS/nanobot/pull/3764) | JiajunBernoulli | **fix(shell): support UNC paths in Windows** | Platform: Enterprise Windows network path support |
| [#3774](https://github.com/HKUDS/nanobot/pull/3774) | chengyongru | **feat(pairing): chat-native DM sender approval** | Security: Private-assistant deployment access control |
| [#3789](https://github.com/HKUDS/nanobot/pull/3789) | Hinotoi-agent | **[security] fix(feishu): confine downloaded media filenames** | Security: Path traversal via malicious filenames |
| [#3785](https://github.com/HKUDS/nanobot/pull/3785) | flyzstu | **feat(providers): add OpenCode Go gateway support** | Provider expansion: Unified GLM/Kimi/DeepSeek/MiMo/Qwen/MiniMax access |

**Key architectural advances:** The convergence of `LongTaskTool`, `/goal` command, and `plan` tool (see open PRs) indicates NanoBot is building **structured task persistence**—a critical capability for agent reliability beyond single-turn interactions.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Comments | Analysis |
|:---|:---|:---|
| [#3790](https://github.com/HKUDS/nanobot/issues/3790) — WebUI print content display corruption | **9 comments** | **Active regression** in v0.1.5.post3.2026.05.13; requires page refresh. Suggests state management or CSS issue in recent WebUI changes. No linked fix PR yet. |
| [#3402](https://github.com/HKUDS/nanobot/issues/3402) — Replace JSON with TOML for configuration | **9 comments** | **Design debate concluded** (closed). Community values human-editable configs; TOML won on merits. Implementation may land in future release. |
| [#2172](https://github.com/HKUDS/nanobot/issues/2172) — Secret reference instead of plaintext | **4 comments** | **Long-standing security request** (opened March 17). References 1Password/env file/exec patterns. Blocked on configuration system architecture; TOML migration (#3402) may enable this. |

### Underlying Needs Analysis

- **#3790**: Users need **stable WebUI rendering** for production deployments; the refresh-workaround indicates friction in daily use.
- **#3402/#2172**: Deep user demand for **configuration security and ergonomics**—plaintext secrets are a barrier to enterprise adoption.
- **#3279** (closed, via #3373/#3792): Gateway operators need **observability** for headless deployments; the rapid Feishu-specific follow-up shows channel-specific customization demand.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| **High** | [#3790](https://github.com/HKUDS/nanobot/issues/3790) WebUI print content corruption | **OPEN** | None yet | Regression in latest build; affects daily usability |
| **Medium** | [#3848](https://github.com/HKUDS/nanobot/issues/3848) WebUI render bug | **CLOSED** | Likely #3782 or related | Visual glitch, screenshot-attached |
| **Medium** | [#2440](https://github.com/HKUDS/nanobot/issues/2440) Codex prompt cache key instability | **CLOSED** | [#3793](https://github.com/HKUDS/nanobot/pull/3793) | Cost/performance impact; now fixed |
| **Medium** | [#2560](https://github.com/HKUDS/nanobot/issues/2560) Brave search rate limits | **CLOSED** | [#3840](https://github.com/HKUDS/nanobot/pull/3840) | Transient failures under load; retry logic added |
| **Low** | [#3752](https://github.com/HKUDS/nanobot/pull/3752) WhatsApp voice transcription residue | **CLOSED** | Self | LLM confusion from stale media paths |

**Stability assessment**: Two security fixes (#3842, #3789) address path traversal in media handling—indicates proactive hardening. The open WebUI regression (#3790) is the primary blocker to current build stability.

---

## 6. Feature Requests & Roadmap Signals

### Open Feature PRs (Potential v0.1.6 Candidates)

| PR | Feature | Signal Strength |
|:---|:---|:---|
| [#3791](https://github.com/HKUDS/nanobot/pull/3791) | **`plan` tool for task decomposition** | **Strong** — Complements merged LongTaskTool/goal features; fills critical agent planning gap |
| [#3847](https://github.com/HKUDS/nanobot/pull/3847) | **`skill_load` tool to prevent skill content loss** | **Strong** — Fixes data loss in multi-turn; user-facing reliability |
| [#3851](https://github.com/HKUDS/nanobot/pull/3851) | **MiMo thinking control via gateway providers** | **Medium** — Follow-up to #3734; provider parity |
| [#3785](https://github.com/HKUDS/nanobot/pull/3785) | **OpenCode Go gateway** | **Medium** — Aggregator provider trend |
| [#3774](https://github.com/HKUDS/nanobot/pull/3774) | **Chat-native DM sender approval (pairing)** | **Medium** — Security/enterprise feature |

### Predicted Next Version Priorities
1. **Task persistence suite**: `plan` + `skill_load` + `goal` form coherent multi-turn reliability
2. **Configuration overhaul**: TOML (#3402) → secret references (#2172) likely sequential
3. **Provider ecosystem expansion**: Gateway aggregators (OpenCode Go, OpenRouter fixes)

---

## 7. User Feedback Summary

### Pain Points
| Source | Issue | Frequency |
|:---|:---|:---|
| #3790, #3848 | **WebUI rendering instability** | Recurring in recent builds |
| #3746 (ref'd in #3782) | **Unnecessary resource loading** | Startup performance |
| #2172 | **Plaintext secrets** | Long-standing security concern |
| #3279 | **Gateway opacity in production** | Now addressed |

### Use Cases Emerging
- **Enterprise/team deployments**: Pairing (#3774), gateway notifications (#3373), Feishu integration (#3792)
- **Long-running research/tasks**: LongTaskTool (#3460), goal tracking (#3788), planning (#3791)
- **Multi-language community**: Massive Chinese documentation sprint indicates APAC user growth

### Satisfaction Indicators
- Rapid closure of documentation issues (25+ in one day) suggests **responsive maintainer/community**
- Security fixes merged same-day (#3842, #3789) shows **vulnerability response maturity**
- No release despite heavy development suggests **quality gating** or pending feature completion

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Needs |
|:---|:---|:---|:---|
| [#2172](https://github.com/HKUDS/nanobot/issues/2172) Secret reference support | **60 days open** | **High** — Blocks enterprise security requirements; referenced as security nightmare | Architecture decision: integration with TOML config migration |
| [#3790](https://github.com/HKUDS/nanobot/issues/3790) WebUI print corruption | **2 days** | **Medium** — Active regression in latest build | Repro confirmation, root cause analysis, hotfix assessment |
| [#3850](https://github.com/HKUDS/nanobot/pull/3850) `ruff format` contributor warning | **New** | **Low** — Developer experience | Quick docs merge to prevent contributor friction |
| [#3851](https://github.com/HKUDS/nanobot/pull/3851) MiMo gateway thinking | **New** | **Low** — Provider parity | Review for consistency with #3734 |

**Critical attention needed**: [#2172](https://github.com/HKUDS/nanobot/issues/2172) has been open since March 17 with no linked implementation PR. Given the security classification and enterprise blocker status, this should be prioritized post-TOML migration. The documentation sprint's closure of 25+ issues frees maintainer bandwidth for core architecture work.

---

*Digest generated from HKUDS/nanobot GitHub activity on 2026-05-15.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-16

## 1. Today's Overview

Hermes Agent shows **very high development velocity** with 50 issues and 50 PRs touched in the last 24 hours, though zero new releases indicate the project is in an active development cycle rather than stabilization. The community is heavily focused on **provider compatibility fixes** (especially DeepSeek and xAI OAuth), **gateway reliability improvements**, and **skill system hardening**. Notably, 16 PRs were merged/closed against 34 remaining open, suggesting maintainers are actively landing changes. A significant portion of activity centers on production-hardening concerns: zombie process handling, proxy support, session integrity, and authentication flows for headless deployments.

---

## 2. Releases

**No new releases** (0 releases published).

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Description | Impact |
|:---|:---|:---|
| [#26660](https://github.com/NousResearch/hermes-agent/pull/26660) | fix(agent): load tool schemas before mutating state in `add_provider()` | Prevents partial state corruption when provider schema loading fails |
| [#26659](https://github.com/NousResearch/hermes-agent/pull/26659) | fix(process_registry): `poll()` must not mark completion as consumed | Fixes regression from #8228 where read-only queries had side effects |
| [#26666](https://github.com/NousResearch/hermes-agent/pull/26666) | fix(xai-oauth): rewrite entitlement-403 hint to not accuse subscribers | UX fix: stops falsely telling paid users they're unsubscribed |
| [#26664](https://github.com/NousResearch/hermes-agent/pull/26664) | fix(xai-oauth): break entitlement-403 credential-refresh loop, bump grok-4.3 context to 1M | **Critical fix**: 18-minute hangs on xAI 403s eliminated; context size corrected |

**Key themes in merged work**: xAI OAuth stability (3 related PRs this cycle), state management correctness, and developer experience improvements.

---

## 4. Community Hot Topics

### Most Active Discussions (by engagement + significance)

| # | Topic | Comments | Analysis |
|:---|:---|:---|:---|
| [#17212](https://github.com/NousResearch/hermes-agent/issues/17212) | DeepSeek API 400 "reasoning_content must be passed back" | 4 | **Closed** — Multi-turn tool call breakage with DeepSeek reasoning models; pattern of provider-specific reasoning-content handling continues |
| [#25833](https://github.com/NousResearch/hermes-agent/issues/25833) | Self-created skills lack mechanism-level guarantees | 4 | Core architectural tension: auto-generated skills have no validation, linting, or execution sandboxing |
| [#15700](https://github.com/NousResearch/hermes-agent/issues/15700) | DeepSeek missing 'thinking: disabled' parameter | 3 | **Closed** — Related to #17212; Anthropic-compatible endpoint requires explicit thinking mode disable |
| [#416](https://github.com/NousResearch/hermes-agent/issues/416) | Skill Validation & Linting — Automated Quality Checks | 3 | **Long-running request** (since March); community wants pre-flight skill validation |
| [#5563](https://github.com/NousResearch/hermes-agent/issues/5563) | [Critical UX] Memory persistence, token waste, state.db corruption, environment hallucination | 3 | **Heavy production user's field report** — most comprehensive real-world feedback; identifies 4 interconnected systemic issues |

**Underlying needs**: The community is pushing for **production-grade reliability** (session integrity, memory correctness) and **skill system maturation** (validation, consistency guarantees). DeepSeek integration appears fragile due to reasoning-content protocol mismatches.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Description |
|:---|:---|:---|:---|:---|
| **P1** | [#5563](https://github.com/NousResearch/hermes-agent/issues/5563) | OPEN | No | Memory corruption, token waste, state.db corruption in production |
| **P1** | [#20470](https://github.com/NousResearch/hermes-agent/issues/20470) | OPEN | No | Telegram DM topic binding not refreshed after session split → compression loop |
| **P1** | [#26599](https://github.com/NousResearch/hermes-agent/issues/26599) | OPEN | No | Codex backend rejects `extra_headers` (HTTP 400) — breaks gpt-5.5 |
| **P1** | [#25839](https://github.com/NousResearch/hermes-agent/issues/25839) | OPEN | No | **Security**: System impersonates user role, tricks parallel agents into skill modification |
| **P2** | [#26651](https://github.com/NousResearch/hermes-agent/issues/26651) | OPEN | [#26652](https://github.com/NousResearch/hermes-agent/pull/26652) | Gateway deadlock on zombie-held scoped lock |
| **P2** | [#17825](https://github.com/NousResearch/hermes-agent/issues/17825) | CLOSED | Yes | DeepSeek reasoning_content dropped during session reload |
| **P2** | [#26623](https://github.com/NousResearch/hermes-agent/issues/26623) | OPEN | No | `hermes doctor` falsely reports Gemini key invalid |
| **P2** | [#26489](https://github.com/NousResearch/hermes-agent/issues/26489) | OPEN | No | Hang with custom provider + LiteLLM proxy + Ollama |
| **P2** | [#26596](https://github.com/NousResearch/hermes-agent/issues/26596) | OPEN | No | Gateway ignores SOUL.md and personalities — hardcoded identity always used |

**Critical pattern**: Multiple **P1 gateway/data integrity bugs** remain unpatched. The zombie lock issue has an open PR (#26652). The security issue (#25839) where system messages impersonate users is particularly concerning for multi-agent deployments.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **Skill validation/linting pipeline** | [#416](https://github.com/NousResearch/hermes-agent/issues/416), [#25833](https://github.com/NousResearch/hermes-agent/issues/25833) | **High** | Multiple requests, clear problem, fits existing architecture |
| **Stage-level tool whitelist** | [#26524](https://github.com/NousResearch/hermes-agent/issues/26524) | Medium | Well-specified RFC, reduces decision fatigue — aligns with agent efficiency goals |
| **Per-job timezone for cron** | [#16610](https://github.com/NousResearch/hermes-agent/issues/16610), [#26549](https://github.com/NousResearch/hermes-agent/issues/26549) | Medium | International user base, config-only change |
| **Native xAI OAuth / SuperGrok** | [#26588](https://github.com/NousResearch/hermes-agent/issues/26588) | **High** | Already partially implemented (#26664, #26666); headless auth gap remains |
| **NATS JetStream kanban hooks** | [#26671](https://github.com/NousResearch/hermes-agent/pull/26671) | Medium | Enterprise integration pattern, PR already open |
| **Hermes Internal Message Bus (MQTT + SQLite)** | [#26375](https://github.com/NousResearch/hermes-agent/pull/26375) | Medium | Large architectural PR, replaces notification system |
| **Canonical user registry (cross-platform identity)** | [#22085](https://github.com/NousResearch/hermes-agent/pull/22085) | Lower | Significant architectural change, long-running PR |

---

## 7. User Feedback Summary

### Pain Points

| Source | Issue | Severity |
|:---|:---|:---|
| Heavy production user (#5563) | "Memory persistence, token waste from session replay, state.db corruption, and environment hallucination" | **Critical** — daily production blocker |
| Docker users (#12188, #23402) | Configuration friction, permission issues with HERMES_UID, unclear model setup | Moderate — onboarding barrier |
| Headless/server users (#26563) | xAI OAuth requires interactive browser flow | Moderate — breaks automated deployment |
| Telegram gateway users (#26581, #20470) | Missing sender identity, session split corruption | Moderate-High |
| International users (#16610) | Fixed UTC timezone breaks cron scheduling | Moderate |

### Satisfaction Signals

- User #5563 opens with: *"Hermes is an extraordinary piece of work... the most capable CLI AI agent I've used"* — **strong product-market fit** despite production issues
- Active plugin ecosystem emerging (#23413, #22095 telemetry, #22088 Matrix crypto)

### Key Use Cases Under Stress

1. **Long-running autonomous agents** (memory/session integrity)
2. **Multi-platform gateway deployments** (Telegram, Matrix, Mattermost)
3. **Enterprise/headless server deployments** (auth, Docker, proxy support)

---

## 8. Backlog Watch

### Issues/PRs Needing Maintainer Attention

| # | Age | Problem | Risk |
|:---|:---|:---|:---|
| [#416](https://github.com/NousResearch/hermes-agent/issues/416) | ~2.5 months | Skill validation — foundational quality issue; blocks production skill workflows | Skills remain unvalidated, runtime failures |
| [#5563](https://github.com/NousResearch/hermes-agent/issues/5563) | ~5 weeks | Production user's comprehensive field report — no maintainer response visible | User may abandon; feedback lost |
| [#22085](https://github.com/NousResearch/hermes-agent/pull/22085) | ~1 week | Cross-platform user registry — 5 PRs from same author (Phoenix1819) suggest coordinated effort | Contributor may disengage if not reviewed |
| [#22081](https://github.com/NousResearch/hermes-agent/pull/22081) | ~1 week | Session hard TTL — disk accumulation, privacy/GDPR concern | Compliance risk |
| [#22088](https://github.com/NousResearch/hermes-agent/pull/22088) | ~1 week | Matrix device self-signing — crypto security | Security regression in Matrix deployments |

**Contributor concentration note**: User `Phoenix1819` has 5 substantial open PRs (#26375, #23413, #22095, #22088, #22085, #22081) spanning message bus, plugins, telemetry, Matrix, and session management — this appears to be a **major contributor** whose work may need prioritized review to maintain engagement.

---

*Digest generated from 50 issues and 50 PRs updated 2026-05-15 to 2026-05-16.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-16

## 1. Today's Overview

PicoClaw shows **high development velocity** with 35 PRs and 11 issues updated in the last 24 hours, indicating an active pre-release stabilization period for v0.2.8. The project is experiencing a **bug-fix sprint** with 22 merged/closed PRs versus 13 open, suggesting maintainers are aggressively landing fixes before the next stable release. Key focus areas include Matrix channel reliability, reasoning content handling for Chinese LLMs (DeepSeek, MiMo), and tool configuration hardening. The automated nightly build pipeline is active, producing daily snapshots from main. Community engagement is moderate with several long-standing enhancement requests still awaiting resolution.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| [v0.2.8-nightly.20260515.794eb04f](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) | Nightly (automated) | Automated build from `main` branch commit `794eb04f`; **unstable, use with caution** |

**No stable release** in the last 24h. The nightly indicates v0.2.8 stable is still in progress with active development continuing. Full changelog compares against v0.2.8 tag, suggesting the stable release exists but nightly builds are tracking additional changes since.

---

## 3. Project Progress

### Merged/Closed PRs (22 total, key highlights)

| PR | Author | Summary | Impact |
|----|--------|---------|--------|
| [#2862](https://github.com/sipeed/picoclaw/pull/2862) | lc6464 | **fix(openai_compat): align MiMo reasoning replay with DeepSeek** | Critical fix for Xiaomi MiMo multi-turn conversations; reuses DeepSeek reasoning replay logic |
| [#2741](https://github.com/sipeed/picoclaw/pull/2741) | lc6464 | **fix(openai_compat): parse reasoning_content in streaming responses** | Hardens SSE parsing, preserves reasoning fields for thinking models |
| [#2811](https://github.com/sipeed/picoclaw/pull/2811) | afjcjsbx | **fix(mcp): support streamable HTTP alias, request-response mode and integration tests** | Major MCP transport refactor + Docker-based integration test framework |
| [#2874](https://github.com/sipeed/picoclaw/pull/2874) | lxowalle | **fix(pico): preserve image media across pico attachments and client** | Fixes image media forwarding in pico_client |
| [#2766](https://github.com/sipeed/picoclaw/pull/2766) | SiYue-ZO | **docs: sync all documentation to V3 config format** | 26-file documentation migration (api_key → api_keys, channels → channel_list) |
| [#2626](https://github.com/sipeed/picoclaw/pull/2626) | webhtb | **feat(agent): support native audio input for multimodal LLMs** | Gemini 1.5 native audio support via protocol-level Audio field |
| [#2270](https://github.com/sipeed/picoclaw/pull/2270) | loafoe | **fix(config): handle non-addressable SecureString values** | Panic fix for sensitive config collection with regression tests |

**Technical trajectory:** Heavy investment in **reasoning model compatibility** (DeepSeek, MiMo), **media handling pipelines** (audio, images), and **configuration system modernization** (V3 schema). The MCP and integration test framework additions indicate production-readiness efforts.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments/Reactions | Analysis |
|------|------|-------------------|----------|
| 1 | [#28](https://github.com/sipeed/picoclaw/issues/28) — **LM Studio Easy Connect** | 19 comments, 👍×2 | **Longest-running open issue** (since Feb 2026). Users want zero-config local LLM integration. Underlying need: reduce barrier to self-hosted models vs. cloud APIs. Stale tag indicates maintainer prioritization gap. |
| 2 | [#1042](https://github.com/sipeed/picoclaw/issues/1042) — **exec guardCommand path misclassification** | 11 comments, 👍×2 | Active bug with **PR #2814** in flight. Core issue: security sandbox false-positives breaking legitimate tools. Community validating fix approach. |
| 3 | [#2706](https://github.com/sipeed/picoclaw/issues/2706) — **DeepSeek v4 thinking model** | 4 comments, 👍×1 | **Closed** — resolved by PRs #2741, #2862. Shows rapid maintainer response to provider-breaking changes. |

### Underlying Needs Analysis

- **Local-first AI**: LM Studio request signals demand for privacy-preserving, offline-capable deployments
- **Security without fragility**: exec guard issues reveal tension between sandboxing and functional tools
- **Chinese model ecosystem**: DeepSeek/MiMo fixes reflect significant user base in China, need for first-class non-OpenAI provider support

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|----------|-------|--------|--------|---------|
| 🔴 **High** | [#1042](https://github.com/sipeed/picoclaw/issues/1042) — exec `guardCommand` blocks valid commands | Open | [#2814](https://github.com/sipeed/picoclaw/pull/2814) | False positive on `curl` with URL parameters misclassified as path traversal; breaks weather tools, other common patterns |
| 🔴 **High** | [#2817](https://github.com/sipeed/picoclaw/issues/2817) — Voice transcription not passed to LLM | Open | None | Groq Whisper succeeds but LLM receives `[voice]` placeholder; media:// reference stale. Breaks voice workflow entirely. |
| 🟡 **Medium** | [#2815](https://github.com/sipeed/picoclaw/issues/2815) — `allow_from` filter broken on Matrix | Open | [#2827](https://github.com/sipeed/picoclaw/pull/2827) | Any non-empty allowlist blocks all messages; MXID colon parsing bug. Security feature non-functional. |
| 🟡 **Medium** | [#2816](https://github.com/sipeed/picoclaw/issues/2816) — Matrix sender identity missing | Open | None | No `chat_id` equivalent injected; breaks user-aware agent behavior vs. Telegram parity |
| 🟡 **Medium** | [#2744](https://github.com/sipeed/picoclaw/issues/2744) — Android v0.2.8 data access failure | Open | None | Complete tab data inaccessibility on Android; platform-specific regression |
| 🟡 **Medium** | [#2878](https://github.com/sipeed/picoclaw/issues/2878) — `load_image` unconfigurable | Open | [#2879](https://github.com/sipeed/picoclaw/pull/2879) | Hardcoded tool registration bypasses config system; fix in review |
| 🟢 **Low** | [#2785](https://github.com/sipeed/picoclaw/issues/2785) — Feishu notification truncation | Open | None | UX issue: only first tool call shown when `separate_messages=false` |

**Regression risk:** Multiple Matrix channel bugs (#2815, #2816, #2785) suggest the Matrix integration lacks test coverage compared to Telegram. The voice pipeline (#2817) appears to have a media lifecycle bug where transcription result isn't wired to message replacement.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in v0.2.8+ | Rationale |
|---------|----------|----------------------|-----------|
| **LM Studio auto-discovery** | [#28](https://github.com/sipeed/picoclaw/issues/28) | Low | Stale since Feb; no PR activity. Competes with existing Ollama support? |
| **Non-destructive session reset** | [#2820](https://github.com/sipeed/picoclaw/issues/2820) | Medium | Well-specified with Seahorse context manager integration path; aligns with conversation durability trend |
| **Configurable tool feedback throttling** | [#2789](https://github.com/sipeed/picoclaw/pull/2789) | High | PR open, author active (bogdanovich), addresses Feishu/UX pain points |
| **Tirith security scanning** | [#2877](https://github.com/sipeed/picoclaw/pull/2877) | Medium | Novel security layer; may slip to v0.2.9 given scope |
| **Native audio multimodal** | [#2626](https://github.com/sipeed/picoclaw/pull/2626) | **Landed** | Already merged — signals v0.2.8 will advertise Gemini audio |

**Emerging pattern:** "Seahorse" context manager is becoming a core architectural concept; features building on it (session reset, history preservation) are likely to see priority.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Intensity |
|-------|----------|-----------|
| **Configuration fragility** | [#2878](https://github.com/sipeed/picoclaw/issues/2878), V3 migration docs | High — tools silently ignore config, schema changes require manual migration |
| **Platform parity gaps** | Matrix vs. Telegram feature comparison | Medium — Matrix lacks sender ID, working allowlists, topic context |
| **Security sandbox overreach** | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | High — breaks legitimate use cases, erodes trust |
| **Voice workflow broken** | [#2817](https://github.com/sipeed/picoclaw/issues/2817) | Critical for voice-first users |
| **Android stability** | [#2744](https://github.com/sipeed/picoclaw/issues/2744) | Blocking for mobile deployments |

### Satisfaction Signals

- **Rapid reasoning model support**: DeepSeek/MiMo fixes landed within days of reports
- **Active nightly builds**: Users can test latest fixes immediately
- **Documentation modernization**: V3 sync reduces onboarding friction

---

## 8. Backlog Watch

### Critical Items Needing Maintainer Attention

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#28](https://github.com/sipeed/picoclaw/issues/28) LM Studio Easy Connect | **94 days** | Community frustration, competitor differentiation | Decision: implement, delegate, or close with workaround docs |
| [#2239](https://github.com/sipeed/picoclaw/pull/2239) Docker privileged mode | **45 days** | Security/ops contention | Review security implications of privileged containers |
| [#2662](https://github.com/sipeed/picoclaw/pull/2662) Unify providers docs | **22 days** | Low — docs debt | Simple merge or close |
| [#2756](https://github.com/sipeed/picoclaw/pull/2756) / [#2791](https://github.com/sipeed/picoclaw/pull/2791) Telegram topic context (duplicate effort?) | **13/9 days** | Merge conflict risk | Coordinate with bogdanovich's PR series; potential overlap |
| [#2836](https://github.com/sipeed/picoclaw/pull/2836) PowerShell security hardening | **7 days** | Security-sensitive, needs expert review | Code review for IEX injection prevention |

### Maintainer Bottleneck Indicators

- **bogdanovich** has **5 open PRs** in various stages (tool feedback, session reset, Telegram topics, exec guard, async context) — potential for author fatigue or merge conflicts
- **Stale tag proliferation**: 8 of 11 issues marked stale despite active recent updates; suggests automated stale bot may need tuning
- **Undefined comment counts** on PRs: Data quality issue or genuinely zero discussion?

---

**Project Health Assessment:** 🟢 **Active, stabilizing** — High merge velocity, responsive to critical bugs, but accumulating UX debt in configuration system and platform parity. v0.2.8 release likely imminent if Matrix and voice bugs are resolved.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-16

## 1. Today's Overview

NanoClaw showed **exceptionally high activity** with 50 issues and 50 PRs updated in the last 24 hours, yielding 44 closed issues and 44 merged/closed PRs against only 6 open items in each category. The project published its **first properly versioned release (v2.0.63)**, establishing a formal release cadence tied to `package.json` bumps on `main`. The day's work centered on v2 architecture hardening—per-install service slugs, systemd session probing fixes, and documentation alignment—alongside ambitious new feature work including an agent network skill and health monitoring. The 88% closure rate across both issues and PRs indicates strong maintainer bandwidth and disciplined triage, though the 12 remaining open items include substantial features requiring review.

---

## 2. Releases

### [v2.0.63](https://github.com/nanocoai/nanoclaw/releases/tag/v2.0.63) — First Properly Published Release

| Aspect | Detail |
|--------|--------|
| **Significance** | Establishes formal release policy: every `package.json` version bump landing on `main` gets a GitHub Release |
| **Prior state** | Version bumps landed without releases; tags were sporadic, causing user confusion |
| **Process** | Manual maintainer cuts; lag expected between merge and release |
| **Changelog** | Rollup of all changes since v2.0.54 ([PR #2502](https://github.com/nanocoai/nanoclaw/pull/2502)) |

**Migration note**: Users previously tracking `main` directly or relying on git tags should now expect structured release notes and can pin to semantic versions.

---

## 3. Project Progress

### Merged/Closed PRs Today (Selected by Impact)

| PR | Author | Type | Summary |
|----|--------|------|---------|
| [#2502](https://github.com/nanocoai/nanoclaw/pull/2502) | glifocat | Docs | v2.0.63 CHANGELOG + RELEASING.md documenting release policy |
| [#2493](https://github.com/nanocoai/nanoclaw/pull/2493) | glifocat | Fix | **v2 service naming**: `com.nanoclaw` → `com.nanoclaw.<sha1(install-path)>` prevents conflicts in multi-install environments |
| [#2489](https://github.com/nanocoai/nanoclaw/pull/2489) | glifocat | Docs | Align `add-gmail-tool`/`add-gcal-tool` skills with v2 container architecture |
| [#954](https://github.com/nanocoai/nanoclaw/pull/954) | SebTardif | Fix | OpenRouter non-Anthropic model routing in Anthropic SDK proxy flow |
| [#956](https://github.com/nanocoai/nanoclaw/pull/956) | SebTardif | Fix | Fast LLM credential sanity checks at `/setup` time (fail-fast vs. silent runtime failures) |
| [#967](https://github.com/nanocoai/nanoclaw/pull/967) | SebTardif | Fix | Stuck session reliability: end stream after first result, stop IPC polling to prevent message drain |
| [#2494](https://github.com/nanocoai/nanoclaw/pull/2494) | glifocat | Fix | **Systemd detection**: re-probe with derived env on `su -`, `pct enter`, headless containers |

**Architecture evolution**: Multiple PRs converge on v2's core premise—**install-path-specific isolation** (service names, per-install slugs) and **robust headless/SSH/container deployment** (systemd session probing, stale docker group remediation).

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | 👍 | Underlying Need |
|------|------|----------|-----|-----------------|
| 1 | [#80](https://github.com/nanocoai/nanoclaw/issues/80) Support non-Claude/Anthropic providers | 32 | 60 | **Provider diversity as risk mitigation**—users report Anthropic subscription terminations for OpenClaw usage; demand for OpenCode, Codex, Gemini, OpenRouter |
| 2 | [#384](https://github.com/nanocoai/nanoclaw/issues/384) Skill marketplace/registry | 9 | 16 | **Security through minimalism**—validate NanoClaw's "tiny auditable core" model with discoverable, vetted skills; reduce attack surface vs. OpenClaw's monolith |
| 3 | [#730](https://github.com/nanocoai/nanoclaw/issues/730) OAuth token expiration in containers | 6 | 0 | **Unattended reliability**—background services cannot refresh `CLAUDE_CODE_OAUTH_TOKEN`; 401 failures every morning |
| 4 | [#398](https://github.com/nanocoai/nanoclaw/issues/398) Attenuate WebFetch/WebSearch | 5 | 0 | **Principle of least privilege**—not all agents need web access; allowlist/blocklist granularity |
| 5 | [#29](https://github.com/nanocoai/nanoclaw/issues/29) Signal messaging channel | 4 | 4 | **Privacy-first communication**—Signal as WhatsApp alternative/replacement |

**Trend analysis**: The top issue (#80, 60 👍) reveals an **existential dependency risk**—users view single-provider lock-in as operational vulnerability. The project partially addresses this through [#2490](https://github.com/nanocoai/nanoclaw/pull/2490) (LiteLLM provider, open) and prior OpenRouter fixes, but lacks a unified provider abstraction.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|----------|-------|--------|--------|---------|
| **Critical** | [#595](https://github.com/nanocoai/nanoclaw/issues/595) OOM crash after ~40h | Closed | [#967](https://github.com/nanocoai/nanoclaw/pull/967) (related) | Ghost sockets accumulate on WhatsApp reconnect; `launchd` masks failure with silent restart |
| **High** | [#730](https://github.com/nanocoai/nanoclaw/issues/730) OAuth token expires overnight | Closed | [#2498](https://github.com/nanocoai/nanoclaw/pull/2498) (pre-spawn refresh) | `CLAUDE_CODE_OAUTH_TOKEN` in `.env` invalid after hours; containers fail with 401 |
| **High** | [#635](https://github.com/nanocoai/nanoclaw/issues/635) WhatsApp auth files world-readable (644) | Closed | — | `store/auth/` permissions expose session credentials on multi-user systems |
| **High** | [#341](https://github.com/nanocoai/nanoclaw/issues/341) add-discord skill breaks Docker | Closed | — | Outdated Apple Container code in skill template |
| **High** | [#342](https://github.com/nanocoai/nanoclaw/issues/342) readSecrets() ignores third-party API env vars | Closed | — | "Not logged in" errors with ZAI, Kimi, OpenRouter |
| **High** | [#233](https://github.com/nanocoai/nanoclaw/issues/233) IPC messages dropped after query result | Closed | — | Race condition in `for await` loop draining follow-up IPC |
| **High** | [#356](https://github.com/nanocoai/nanoclaw/issues/356) ExitPlanMode tool fails | Closed | — | Returns error string instead of exiting; agent stuck in plan mode |
| **Medium** | [#553](https://github.com/nanocoai/nanoclaw/issues/553) Container execution fails post-WA recovery | Closed | — | VPN-dependent WhatsApp connection leaves container in bad state |
| **Medium** | [#611](https://github.com/nanocoai/nanoclaw/issues/611) Agent-runner source never updated | Closed | — | Initial copy to `data/sessions/{group}/agent-runner-src/` is immutable |

**Stability assessment**: The critical OOM (#595) and OAuth expiration (#730) represent **long-running production failures**—both now closed with fixes, but pattern suggests container lifecycle management (socket cleanup, credential refresh) needs systematic hardening. The high-severity cluster around auth/secrets indicates v2's multi-provider support is exposing edge cases in credential resolution.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Version | Rationale |
|---------|----------|---------------------------|-----------|
| **LiteLLM provider abstraction** | [#2490](https://github.com/nanocoai/nanoclaw/pull/2490) (open) | **High** | Directly addresses #80 (60 👍); operational/container skill type fits v2 architecture |
| **Agent network / multi-agent coordination** | [#2497](https://github.com/nanocoai/nanoclaw/pull/2497) (open) | **Medium-High** | Major feature PR open; complexity may require iteration |
| **Health monitoring / silent-fail detection** | [#2498](https://github.com/nanocoai/nanoclaw/pull/2498) (open) | **High** | Production-critical; includes Discord alerting + OAuth refresh |
| **Context compaction nudge** | [#2500](https://github.com/nanocoai/nanoclaw/pull/2500) (open) | **Medium** | Skill-based approach; depends on auto-compact ceiling infrastructure |
| **Groq Whisper cloud backend** | [#2396](https://github.com/nanocoai/nanoclaw/issues/2396) (open) | **Medium** | Builds on #2003 sovereignty model; opt-in preserves local-default principle |
| **Skill marketplace/registry** | [#384](https://github.com/nanocoai/nanoclaw/issues/384) (closed) | **Low-Medium** | Closed without implementation; may require design RFC first |
| **Signal channel** | [#29](https://github.com/nanocoai/nanoclaw/issues/29) (closed) | **Low** | Closed without merge; WhatsApp-centric architecture may defer |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Installation complexity** | [#439](https://github.com/nanocoai/nanoclaw/issues/439) (9 👍): "Claude for installing is nice. But a simple shell script...is way easier, faster and cheaper" | High |
| **Provider lock-in anxiety** | [#80](https://github.com/nanocoai/nanoclaw/issues/80): Anthropic terminating subs for OpenClaw usage | Critical |
| **Headless/server deployment friction** | [#413](https://github.com/nanocoai/nanoclaw/issues/413), [#414](https://github.com/nanocoai/nanoclaw/issues/414), [#2494](https://github.com/nanocoai/nanoclaw/pull/2494): systemd, docker group, `su -` session detection | High |
| **Silent failures in production** | [#595](https://github.com/nanocoai/nanoclaw/issues/595) OOM masked by `launchd`; [#2498](https://github.com/nanocoai/nanoclaw/pull/2498) addresses stuck containers | Critical |
| **Credential management** | [#730](https://github.com/nanocoai/nanoclaw/issues/730) overnight OAuth expiry; [#342](https://github.com/nanocoai/nanoclaw/issues/342) third-party API env var ignorance | High |

### Positive Signals

- **Security model resonance**: [#384](https://github.com/nanocoai/nanoclaw/issues/384) explicitly praises "tiny, auditable core" vs. OpenClaw's "massive attack surface"
- **v2 architecture validation**: Multiple PRs successfully leverage per-install isolation, container-side sovereignty
- **Community contribution quality**: RFCs with implementation proposals (#642 CLI channel), original contributions not derived from upstream

### Satisfaction/Dissatisfaction Ratio

**Dissatisfaction concentrated in**: onboarding (install wizard vs. simplicity), production reliability (auth, OOM, silent failures), and provider flexibility.
**Satisfaction evident in**: security architecture, active maintainer response (88% closure rate), and formalized release process.

---

## 8. Backlog Watch

### Items Needing Maintainer Attention

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#2497](https://github.com/nanocoai/nanoclaw/pull/2497) Agent network | New | **Architecture review** | Large feature PR; needs design alignment on multi-agent coordination model |
| [#2490](https://github.com/nanocoai/nanoclaw/pull/2490) LiteLLM provider | New | **Merge readiness** | High-community-demand (#80); verify operational skill pattern compliance |
| [#2498](https://github.com/nanocoai/nanoclaw/pull/2498) Health monitor | New | **Production critical** | Combines silent-fail detection + OAuth refresh; should prioritize for v2.0.64 |
| [#2500](https://github.com/nanocoai/nanoclaw/pull/2500) Early compact nudge | New | **Feature completeness** | Depends on auto-compact infrastructure; verify ceiling detection accuracy |
| [#2496](https://github.com/nanocoai/nanoclaw/pull/2496) Outbound DB write access | New | **Bug fix** | Command-gate deny responses silently failing; narrow fix, likely quick merge |
| [#2396](https://github.com/nanocoai/nanoclaw/issues/2396) Groq Whisper | 6 days | **Feature request** | Awaiting implementation PR; sovereignty model precedent set by #2003 |

**No stale items >30 days** in active queue—all open items are from 2026-05-15. The backlog is **healthy and current**, with no orphaned high-priority issues. The primary risk is **review bandwidth** on large feature PRs (#2497, #2490) competing with reliability fixes (#2498, #2496).

---

*Digest generated from 50 issues and 50 PRs updated 2026-05-15. Project health: **active, well-maintained, releasing regularly** with v2 architecture maturing and production hardening underway.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-05-16

**Repository:** [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

## 1. Today's Overview

NullClaw showed minimal activity in the last 24 hours with **2 new issues opened** and **zero pull requests or releases**. The project appears to be in a maintenance phase with community members actively reporting bugs and requesting enhancements rather than contributing code. Both issues were opened on 2026-05-15 and remain unaddressed without maintainer comments, suggesting either a small core team or weekend/holiday lull. The lack of merged PRs or releases indicates no immediate feature delivery or hotfix pipeline. Overall project health appears **stable but stagnant**—no critical breakage, yet no forward momentum on community-reported problems.

---

## 2. Releases

*No new releases.*

---

## 3. Project Progress

*No merged or closed pull requests today.*

No features advanced or were fixed in the last 24 hours. The codebase remains static with no integration of community contributions.

---

## 4. Community Hot Topics

| Issue | Activity | Analysis |
|-------|----------|----------|
| [#916 Telegram: include reply_to_message text in inbound context](https://github.com/nullclaw/nullclaw/issues/916) | 0 comments, 0 👍 | **Feature gap in Telegram integration.** Users need conversational context preservation—when replying to messages in Telegram, the bot cannot see what was replied to, limiting coherent multi-turn dialogue. This reveals demand for richer chat platform integrations beyond basic message passing. |
| [#915 [bug] Problem with scheduler unauthorized](https://github.com/nullclaw/nullclaw/issues/915) | 0 comments, 0 👍 | **Authentication/authorization failure in scheduler component.** Affects both Telegram and console interfaces, suggesting core infrastructure issue rather than platform-specific bug. User has provided detailed environment context (Ubuntu, external Ollama, Qwen3.6:27b), indicating willingness to collaborate on debugging. |

**Underlying needs:** (1) Deeper Telegram Bot API utilization for contextual conversations; (2) Robust scheduler authentication that works across deployment configurations, particularly with external LLM hosts.

---

## 5. Bugs & Stability

| Severity | Issue | Fix PR | Details |
|----------|-------|--------|---------|
| **High** | [#915 [bug] Problem with scheduler unauthorized](https://github.com/nullclaw/nullclaw/issues/915) | ❌ None | Scheduler completely non-functional for affected user across all interfaces. Blocks time-based agent automation—core NullClaw functionality. Authorization failure may indicate token/credential propagation bug when using external Ollama instances. |

*No other bugs reported today.*

---

## 6. Feature Requests & Roadmap Signals

| Issue | Likelihood in Next Version | Rationale |
|-------|---------------------------|-----------|
| [#916 Telegram reply context](https://github.com/nullclaw/nullclaw/issues/916) | **Medium-High** | Small, well-scoped change; aligns with improving chat platform UX. No architectural blockers apparent. |
| Scheduler auth robustness (derived from #915) | **High (if bug confirmed)** | Core functionality broken; would likely be prioritized as hotfix once reproduced by maintainers. |

**Emerging pattern:** Requests for richer platform-native integrations (Telegram reply threads) and deployment-flexible authentication suggest NullClaw's user base is expanding beyond simple local setups to more complex, production-like configurations.

---

## 7. User Feedback Summary

| Pain Point | Source | Use Case Context |
|------------|--------|----------------|
| Scheduler authorization failures with external LLM hosts | [#915](https://github.com/nullclaw/nullclaw/issues/915) | Running NullClaw on Ubuntu with Ollama on separate machine (RTX 3090); tool calling works, scheduling doesn't—indicates inconsistent auth model across components |
| Lost conversational context in Telegram replies | [#916](https://github.com/nullclaw/nullclaw/issues/916) | Group chat scenarios where users reply to bot messages without explicit mentions; bot cannot maintain thread coherence |

**Satisfaction signals:** User in #915 explicitly notes "LLM is working fine, and tool calling in nullclaw in general also works mostly fine" — core AI functionality is solid.

**Dissatisfaction signals:** Scheduler as broken component undermines automation value proposition; Telegram integration feels incomplete for natural chat patterns.

---

## 8. Backlog Watch

Both issues from today qualify as **new but already needing attention**:

| Issue | Age | Risk if Unaddressed |
|-------|-----|---------------------|
| [#915 Scheduler unauthorized](https://github.com/nullclaw/nullclaw/issues/915) | 1 day | User may abandon time-based automation features; could indicate broader auth regression affecting other external LLM configurations |
| [#916 Telegram reply context](https://github.com/nullclaw/nullclaw/issues/916) | 1 day | Competitor projects with richer Telegram integrations may capture users seeking conversational agents |

**Maintainer attention needed:** Neither issue has received comment acknowledgment. Given zero PR activity, community may perceive project as unresponsive. Recommend triage response to #915 first due to functional breakage, #916 as quick-win enhancement.

---

*Digest generated from GitHub activity 2026-05-15 to 2026-05-16. Data source: nullclaw/nullclaw public repository.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-16

## Today's Overview

IronClaw shows **intense development velocity** with 50 PRs updated in 24 hours (28 merged/closed, 22 open) and 17 active issues, indicating a project in active feature delivery phase rather than maintenance mode. The dominant theme is **"Reborn"** — a major architectural overhaul of the agent loop, WebUI, and production runtime — consuming the majority of engineering bandwidth. Multiple workstreams (WS-13 through WS-17) are converging toward a production-ready beta, with significant progress on live runtime composition, cancellation safety, and WebChat v2 native surfaces. However, **crates.io publication lags 4 versions behind** (stuck at 0.24.0), creating downstream security exposure due to wasmtime CVEs. The project health is strong on innovation but shows tension between rapid Reborn iteration and ecosystem maintenance obligations.

---

## Releases

**ironclaw-v0.28.2** — Released 2026-05-14
- [Release page](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v0.28.2)

| Category | Change |
|----------|--------|
| **Fixed** | Restored chat-driven `tool_install` functionality, fixed double-invoke bug, and addressed auto-approve footgun in extensions ([#3559](https://github.com/nearai/ironclaw/pull/3559)) |
| **Changed** | LLM provider abstraction: hid provider-specific auth, model fetching, and embeddings config behind facades ([#3416](https://github.com/nearai/ironclaw/pull/3416)) |

*No breaking changes noted. Migration: standard patch upgrade.*

---

## Project Progress

### Merged/Closed PRs (28 total — key items)

| PR | Author | Summary | Significance |
|----|--------|---------|------------|
| [#3652](https://github.com/nearai/ironclaw/pull/3652) | henrypark133 | **WS-16: Live planned runtime composition** — Wired driver, registry, resolver, coordinator, runner, host factory into production runtime builder | Core Reborn infrastructure complete |
| [#3651](https://github.com/nearai/ironclaw/pull/3651) | henrypark133 | **WS-14: Planned driver default path registration** | Enables Reborn to select planned default path while deferring live cutover |
| [#3650](https://github.com/nearai/ironclaw/pull/3650) | henrypark133 | **WS-14-parent: Integrated WS-9 through WS-15** — capability, checkpoint, input, progress, cancellation, identity-context | Six-workstream consolidation; major integration milestone |
| [#3685](https://github.com/nearai/ironclaw/pull/3685) | serrrfirat | **WS-13: Live cancellation wired into host** | Production-grade cancellation with turn-state-backed factory |
| [#3686](https://github.com/nearai/ironclaw/pull/3686) | serrrfirat | **WS-13: Ack drained inputs before cancel exit** | Safety fix for input cursor acknowledgement |
| [#3684](https://github.com/nearai/ironclaw/pull/3684) | serrrfirat | **WS-13: Verify cancellation from turn state** | Durable evidence-based cancellation verification |
| [#3665](https://github.com/nearai/ironclaw/pull/3665) | zetyquickly | `IRONCLAW_DISABLE_CODEACT` flag — switches engine v2 from CodeAct to structured-tools-only | Operational escape hatch for CodeAct issues |
| [#3532](https://github.com/nearai/ironclaw/pull/3532) | ilblackdragon | Fixed `markdown_to_mrkdwn` emphasis-in-link conversion | Slack channel formatting fix |

### Open PRs Advancing Key Features

| PR | Author | Status |
|----|--------|--------|
| [#3679](https://github.com/nearai/ironclaw/pull/3679) | ilblackdragon | **XL: Universal FS dispatch across consumer crates** (+15K/-929 LOC, 61 files) — database migration scale |
| [#3695](https://github.com/nearai/ironclaw/pull/3695) | serrrfirat | **XL: Reborn composition root + live binary** — ships `ironclaw-reborn` binary, narrows public surface |
| [#3688](https://github.com/nearai/ironclaw/pull/3688) | serrrfirat | **XL: ProductAdapter from single ExtensionManifestV2** — eliminates separate TOML format |
| [#3653](https://github.com/nearai/ironclaw/pull/3653) | henrypark133 | **WS-17: Product live planned-runtime cutover proof** | Beta-critical: proves end-to-end product path |

---

## Community Hot Topics

### Most Active by Engagement

| # | Item | Comments | Analysis |
|---|------|----------|----------|
| 1 | [#3259](https://github.com/nearai/ironclaw/issues/3259) **crates.io publication gap** | 4 comments | **Ecosystem blocker**: Downstream users pinned to 0.24.0 with known wasmtime 28.x CVEs. Author `dacoldest` highlights trust/cadence issue. Root need: predictable release pipeline or automated crates.io publish. |
| 2 | [#3616](https://github.com/nearai/ironclaw/issues/3616) **Reborn production ingress wiring** | 2 comments | Bridge from "test-only composition" to production app/gateway/channel path. Tension: WS17 proved manually composed loop works, but production cutover requires solving #3602 (readiness gate), #3620 (tool calls), #3622 (result refs). |
| 3 | [#3602](https://github.com/nearai/ironclaw/issues/3602) **Production readiness gate** | 1 comment | **Risk: high, scope: agent**. Fail-closed validator exists but is uncalled at startup. Safety-critical: prevents production deploys with test/non-durable/noop configurations. |

### Underlying Needs Analysis

- **Reborn beta pressure**: 8 of 17 active issues are Reborn WebUI beta blockers (M1-webui-product, M2-inbound-workflow). The team is racing to define host-owned ingress boundaries (#3578), native routes (#3611), idempotency (#3625), turn scope binding (#3626), and facade methods (#3627).
- **Operational safety**: Multiple "risk: high/medium" issues around production gates, hook DoS budgets (#3689), and event projection narrowing (#3690) reveal concern about third-party extension security in production.

---

## Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **High** | [#3447](https://github.com/nearai/ironclaw/issues/3447) **Nightly E2E failed** | Scheduled run failure since 2026-05-10; persists through 2026-05-15 | **No fix PR identified** — 5 days unaddressed is concerning for release confidence |
| **High** | [#3673](https://github.com/nearai/ironclaw/issues/3673) **openai_compatible drops `reasoning_content`** | Breaks DeepSeek v4-pro multi-turn tool calls; `reasoning_content` field lost in outgoing requests | **No fix PR** — reported 2026-05-15, affects production LLM routing |
| **Medium** | [#3675](https://github.com/nearai/ironclaw/issues/3675) **TUI markdown tables render as plain text** | UX degradation in terminal interface | **No fix PR** — cosmetic but affects developer experience |
| **Medium** | [#3690](https://github.com/nearai/ironclaw/issues/3690) **Hook event over-exposure** | `RuntimeEvent` fully exposed to Installed-tier hooks; carries cross-session data beyond extension needs | Fix planned (follow-up to #3640) |
| **Medium** | [#3689](https://github.com/nearai/ironclaw/issues/3689) **Hook DoS recursion vector** | `HookFailed` triggers new `HookFailed` events; mutual recursion fanout for misbehaving extensions | Fix planned (follow-up to #3640) |

**Regression prevention**: [#3548](https://github.com/nearai/ironclaw/pull/3548) adds `DISABLE_TOOLS_LIST` flag and security regression test — actively addressing tool-list exposure risks.

---

## Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Version |
|--------|--------|---------------------------|
| **Reborn WebUI Beta (M1-M2)** | Issues #3611, #3625-3627, PRs #3695, #3694 | **Very High** — P0 priority, multiple engineers assigned, native routes and idempotency guards in flight |
| **Universal filesystem dispatch** | PR #3679 | **High** — XL PR in review, 61 files touched, database migration required |
| **First-party HTTP egress tool** | PR #3681 | **High** — Built-in `builtin.http` for Reborn first-party tools, delegates to existing host path |
| **Temperature control in Responses API** | PR #3641 | **High** — Per-request temperature support, previously rejected payload |
| **Policy-gated identity/heartbeat context** | Issue #3692 | **Medium** — Deferred from #3649, needs "additional prompt-context shape and runtime policy gating" |
| **Per-channel MCP/built-in tool filtering** | PR #1378 (since March) | **Medium** — Long-running XL PR, multi-channel scoping is clearly desired but complex |

---

## User Feedback Summary

### Pain Points

| User | Issue | Core Problem |
|------|-------|------------|
| `dacoldest` (downstream maintainer) | [#3259](https://github.com/nearai/ironclaw/issues/3259) | **Supply chain security**: Cannot upgrade past 0.24.0 from crates.io, exposed to CVEs. "Pinned to 0.24.0 by wasmtime 28.x CVEs" — explicit dependency conflict. |
| `NikZak` (QA/integrator) | [#3673](https://github.com/nearai/ironclaw/issues/3673) | **LLM provider compatibility**: DeepSeek v4-pro broken in multi-turn tool calling due to field stripping. Suggests insufficient provider-specific testing. |
| `chenyulue` (end user) | [#3675](https://github.com/nearai/ironclaw/issues/3675) | **TUI polish**: Markdown tables unreadable. Developer-facing UX gap. |

### Satisfaction Signals

- Active workstream documentation (`docs/reborn/agent-loop-skeleton.md`, `how-to-port-channel-to-reborn.md`) suggests investment in contributor onboarding
- Rapid closure of stacked WS-13/14/16/17 PRs shows effective parallel development workflow
- Security-focused flags (`DISABLE_TOOLS_LIST`, `IRONCLAW_DISABLE_CODEACT`) indicate responsive operational controls

---

## Backlog Watch

| Issue/PR | Age | Problem | Action Needed |
|----------|-----|---------|---------------|
| [#3259](https://github.com/nearai/ironclaw/issues/3259) crates.io gap | **11 days** (since 2026-05-05) | 4 versions unpublished, CVE exposure | **Maintainer decision**: Automated publish workflow, or manual publish of 0.25.0–0.28.2 backlog |
| [#3447](https://github.com/nearai/ironclaw/issues/3447) Nightly E2E failure | **6 days** (since 2026-05-10) | Release-blocking test failure | Investigation + fix; currently eroding CI confidence |
| [#1378](https://github.com/nearai/ironclaw/pull/1378) Per-channel tool filtering | **59 days** (since 2026-03-18) | XL PR stalled, multi-channel deployments blocked | Rebase decision: Reborn may supersede, or needs explicit close/redirect |
| [#3548](https://github.com/nearai/ironclaw/pull/3548) DISABLE_TOOLS_LIST | **4 days** | Security regression test unchecked in template ("- [ ] `cargo test`") | Finalize test plan, merge for 0.28.3 or defer |

---

*Digest generated from GitHub activity 2026-05-15 to 2026-05-16. All links reference `https://github.com/nearai/ironclaw`.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-16

## 1. Today's Overview

LobsterAI shows **high development velocity** with 36 PRs updated in the last 24 hours and 33 successfully merged or closed, indicating an active release cycle. However, **zero new releases** and only **1 active issue** suggest the team is in a consolidation phase rather than shipping to users. The activity is heavily skewed toward renderer and cowork areas, with significant focus on artifact preview UX and IM platform integrations. Notably, multiple stale PRs from March 2026 received updates, suggesting a backlog cleanup effort. The single open issue reveals a **critical regression** in third-party model provider integration that could erode user trust in vendor neutrality.

---

## 2. Releases

**No new releases** — None published.

---

## 3. Project Progress

### Merged/Closed PRs Today (33 total, selected highlights)

| PR | Area | Description | Link |
|:---|:---|:---|:---|
| #1990 | renderer, cowork, artifacts | PPT preview optimization: widescreen thumbnail sidebar, panel resize fix, tab UI polish | [PR #1990](https://github.com/netease-youdao/LobsterAI/pull/1990) |
| #1989 | renderer, cowork, artifacts | **Multi-tab preview for artifacts**: right-side preview now supports multiple concurrent file tabs | [PR #1989](https://github.com/netease-youdao/LobsterAI/pull/1989) |
| #1987 | renderer, IM | **Pairing code input for 4 IM platforms** (Telegram/Discord/QQ/POPO) — unblocks enterprise approval workflows | [PR #1987](https://github.com/netease-youdao/LobsterAI/pull/1987) |
| #1986 | docs, main | **Fixed character corruption in managed session sync** — critical fix for `appendUniqueSuffix` overlap bug eating characters like `file:///→file://` | [PR #1986](https://github.com/netease-youdao/LobsterAI/pull/1986) |
| #1967 | renderer, main, openclaw, cowork, IM | Removed legacy URLs and documentation | [PR #1967](https://github.com/netease-youdao/LobsterAI/pull/1967) |
| #1962 | renderer, main, openclaw, cowork | **NSP-ClawGuard security monitor hot-toggle** in Settings — adds runtime security plugin control | [PR #1962](https://github.com/netease-youdao/LobsterAI/pull/1962) |

### Key Technical Advances
- **Artifact preview system overhaul**: Multi-tab architecture (#1989) + PPT polish (#1990) positions LobsterAI as a serious document workspace competitor
- **Session reliability**: #1986 fixes a subtle but severe text synchronization bug that corrupts file paths and extensions during real-time collaboration
- **Security hardening**: NSP-ClawGuard integration (#1962) suggests enterprise security compliance is a priority

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| **#1988** — qwen3.6-plus forced to NetEase model, breaking Ali BaiLian integration | 1 comment, 0 reactions, **OPEN** | [Issue #1988](https://github.com/netease-youdao/LobsterAI/issues/1988) |

**Underlying need**: This issue exposes a **vendor lock-in tension** at the core of LobsterAI's business model. Users explicitly choose third-party providers (Ali BaiLian's qwen3.6-plus) for cost or capability reasons, but the system **overrides configurations to force NetEase's own model endpoint**—then fails with "no quota." The user's config edits are actively overwritten, suggesting hardcoded fallback logic or aggressive default injection.

**Signal**: Users want **genuine multi-tenant model neutrality**, not just UI-level provider selection. The "coding plan" feature appears particularly affected, implying plan-specific model routing logic may be bypassing user preferences.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| **🔴 Critical** | #1988 | Model provider override breaks paid third-party integrations; config changes ignored | **NO FIX PR** — open, 1 day old |
| **🟡 High** | #1986 (fixed) | Managed session sync corrupts text (path truncation, extension loss) | **FIXED** in #1986 |
| **🟡 High** | #1987 (fixed) | Missing pairing code UI blocked 4 IM platforms from enterprise pairing workflows | **FIXED** in #1987 |

**Regession pattern**: #1988 suggests a recent update introduced **model routing regression**—the "version update后" (after version update) timing implies either a new default model mapping or broken config precedence logic.

---

## 6. Feature Requests & Roadmap Signals

| PR | Feature | Likelihood in Next Release |
|:---|:---|:---|
| #1985 (OPEN) | **Thinking level control** (Off/Minimal/Low/Medium/High/Adaptive) for chat sessions | **High** — full stack implementation complete (DB migration, Redux, IPC, i18n), just needs review |
| #838 (CLOSED, stale) | Per-channel model override for IM bot sessions | **Medium** — merged to backlog, solves real enterprise need |
| #835 (CLOSED, stale) | JSON paste mode for batch MCP server creation | **Medium** — developer experience win, aligns with MCP ecosystem growth |
| #1185 (CLOSED, stale) | "Open skill folder" button for imported skills | **Low** — nice-to-have, lower priority |

**Predicted next release focus**: Thinking level control (#1985) is the most complete pending feature. Combined with #1962's security toggle and the artifact preview improvements, the next release likely targets **AI reasoning transparency** and **enterprise document collaboration**.

---

## 7. User Feedback Summary

### Pain Points
| Source | Issue | User Impact |
|:---|:---|:---|
| #1988 | **Vendor lock-in override** | Cannot use paid external models; forced to NetEase quota system; config autonomy violated |
| #1986 (pre-fix) | **Silent text corruption** | File paths break in real-time sessions, causing broken links and failed operations |
| #1987 (pre-fix) | **Incomplete IM platform support** | Enterprise users on Telegram/Discord/QQ/POPO couldn't complete security pairing |

### Use Case Signals
- **Multi-model arbitrage**: Users actively mix providers (Ali BaiLian qwen3.6-plus for coding, presumably NetEase for other tasks) — cost/performance optimization is intentional
- **Enterprise IM deployment**: Pairing code requirements indicate regulated environments with approval workflows
- **Heavy document workflows**: PPT/Word preview investments suggest users treat LobsterAI as a workspace, not just a chat interface

### Satisfaction/Dissatisfaction
- **+**: Rapid UX iteration (multi-tab previews, responsive fixes)
- **−**: Trust erosion from config override behavior; "修改配置文件也没用" (editing config is useless) is strong dissatisfaction language

---

## 8. Backlog Watch

| PR/Issue | Age | Problem | Action Needed |
|:---|:---|:---|:---|
| #806 | **52 days** | SQLite performance: missing indexes cause session list and long-conversation lag | Merge or close — low-risk perf win |
| #807 | **52 days** | `executionMode` config ignored, forcing local mode | Merge or close — breaks sandbox security promises |
| #822 | **52 days** | Token refresh race conditions (3 unguarded paths) | **Security-critical** — should be prioritized |
| #826 | **52 days** | `shell.openExternal` allows malicious protocols | **Security-critical** — merged but worth verifying in release |
| #828 | **52 days** | `localfile://` path traversal → arbitrary file read | **Security-critical** — merged but verify |
| #830 | **52 days** | SQLite default config unoptimized for desktop | Merge or close — complementary to #806 |

**Pattern**: The March 25 stale PR cluster represents a **security and performance debt batch** that received attention today (all updated 2026-05-15) but remains unmerged. The maintainers should either:
1. Merge the security fixes (#822, #826, #828) urgently, or
2. Explicitly close with rationale if superseded

The simultaneous update of all stale PRs without merge suggests **automation or bulk triage** rather than individual review completion.

---

## Project Health Assessment

| Metric | Status |
|:---|:---|
| Development velocity | 🟢 Strong (36 PRs/day) |
| Release cadence | 🔴 Stalled (0 releases) |
| Issue resolution | 🟡 Moderate (1 open, but critical) |
| Security posture | 🟡 Improving (new features + backlog fixes) |
| Community trust | 🔴 At risk (#1988 vendor neutrality challenge) |

**Recommendation**: Prioritize #1988 root-cause analysis and hotfix; the model override behavior directly contradicts LobsterAI's value proposition as an open, multi-provider AI workspace.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-16

## 1. Today's Overview

Moltis demonstrates **strong maintainer velocity** with 6 of 7 updated PRs merged/closed in the last 24 hours, including four same-day merges by core contributor `penso`. The project shows **zero open issues** from recent activity, indicating responsive triage. The single open PR (#1002) represents a substantial new feature expansion into remote access infrastructure. No new releases were cut, suggesting either accumulation of changes toward a larger release or release process lag. Overall project health appears **robust** with active development across security, UI, installation, and documentation domains.

---

## 2. Releases

**No new releases** — None published.

---

## 3. Project Progress

### Merged/Closed PRs (6 items)

| PR | Title | Author | Focus Area |
|:---|:---|:---|:---|
| [#1001](https://github.com/moltis-org/moltis/pull/1001) | feat(mcp): support OAuth client secrets | penso | **Security/Auth** — MCP OAuth now supports optional `client_secret` for enterprise/secured deployments |
| [#1000](https://github.com/moltis-org/moltis/pull/1000) | feat(tls): support public IP SAN for generated certs | penso | **Security/Networking** — Auto-generated TLS certs now include configurable public IP as SAN; fixes #996 |
| [#998](https://github.com/moltis-org/moltis/pull/998) | fix(web): prevent chat composer horizontal overflow | penso | **UI/UX** — CSS flex constraints + Playwright regression test; fixes #994 |
| [#997](https://github.com/moltis-org/moltis/pull/997) | fix(install): tolerate missing Proxmox CA cert | penso | **Installation/Reliability** — Proxmox LXC helper no longer fatals on optional CA read failure; fixes #993 |
| [#999](https://github.com/moltis-org/moltis/pull/999) | chore(deps): bump astro 5.18.1 → 6.3.3 | dependabot[bot] | **Dependencies** — Docs infrastructure update |
| [#987](https://github.com/moltis-org/moltis/pull/987) | Replace docs deployment with Astro site | penso | **Documentation** — Modernized docs platform with search, theming, responsive design |

**Key advancement**: Same-day bug-fix-to-merge cycle for three user-reported issues (#993, #994, #996), demonstrating mature CI/CD and maintainer bandwidth.

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|:---|:---|:---|
| [#995](https://github.com/moltis-org/moltis/issues/995) — `portal-tunnel` trustless relay integration | 1 comment, 0 reactions | **Highest-comment issue**; closed without PR reference. Represents architectural interest in **decentralized/trustless infrastructure** — likely exploration of relay options before #1002's NetBird/Cloudflare approach was selected |
| [#1002](https://github.com/moltis-org/moltis/pull/1002) — NetBird + Cloudflare Tunnel support | Open, 0 comments | **Most substantial pending change** (~2 major remote access technologies); signals strategic pivot to **managed connectivity solutions** over pure P2P/trustless approaches |

**Underlying need**: Users want **secure remote access to Moltis instances** without complex networking. The closed #995 (trustless) vs. open #1002 (managed mesh + commercial tunnel) suggests maintainer preference for **operational reliability over ideological decentralization**.

---

## 5. Bugs & Stability

| Severity | Issue | Fix Status | Details |
|:---|:---|:---|:---|
| **Medium** | [#996](https://github.com/moltis-org/moltis/issues/996) — TLS certs localhost-only | ✅ Fixed by [#1000](https://github.com/moltis-org/moltis/pull/1000) | Documentation promised public IP support that didn't exist; now implemented with `tls.public_ip` config |
| **Low** | [#994](https://github.com/moltis-org/moltis/issues/994) — Chat horizontal scrolling (recurrence) | ✅ Fixed by [#998](https://github.com/moltis-org/moltis/pull/998) | **Regression** — "again" in title indicates repeat bug; now has Playwright test for prevention |
| **Medium** | [#993](https://github.com/moltis-org/moltis/issues/993) — Proxmox LXC creation fails on line 91 | ✅ Fixed by [#997](https://github.com/moltis-org/moltis/pull/997) | Installation reliability; optional CA cert handling was too strict |

**Stability assessment**: All reported bugs resolved within 1-4 days. The #994 recurrence warrants monitoring — CSS regressions suggest component-level testing gaps despite new E2E coverage.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Release |
|:---|:---|:---|
| **NetBird mesh networking** | [#1002](https://github.com/moltis-org/moltis/pull/1002) | **High** — Open, actively developed, substantial implementation |
| **Cloudflare Tunnel integration** | [#1002](https://github.com/moltis-org/moltis/pull/1002) | **High** — Paired with NetBird in same PR |
| **OAuth client secret support** | [#1001](https://github.com/moltis-org/moltis/pull/1001) | **Shipped** — Already merged |
| **Public IP TLS SANs** | [#1000](https://github.com/moltis-org/moltis/pull/1000) | **Shipped** — Already merged |
| **Trustless relay / `portal-tunnel`** | [#995](https://github.com/moltis-org/moltis/issues/995) | **Low-Medium** — Closed without implementation; may revisit if managed solutions prove insufficient |

**Predicted next version focus**: Remote access infrastructure (NetBird/Cloudflare), continued security hardening, and documentation maturity.

---

## 7. User Feedback Summary

### Pain Points Addressed
| Issue | User Impact | Resolution |
|:---|:---|:---|
| TLS cert limitations | **VPS/cloud users** couldn't use auto-generated certs with public IPs | Configurable `tls.public_ip` |
| Chat UI breakage | **Mobile/desktop users** experienced layout breakage with long content | Flex constraints + regression test |
| Proxmox install failures | **Self-hosters** using Proxmox LXC had unreliable installs | Graceful optional CA handling |

### Satisfaction Indicators
- **Rapid fix cycle**: All four issues closed within 24h of PR creation
- **Zero open issues** from recent batch — suggests users feel heard
- **Documentation investment**: Astro migration shows commitment to onboarding quality

### Dissatisfaction Risk
- #994's "again" implies **recurring CSS regressions** — users may perceive UI as fragile
- No releases despite 6 merged PRs — **release cadence opacity** for users tracking versions

---

## 8. Backlog Watch

| Item | Age | Concern | Action Needed |
|:---|:---|:---|:---|
| [#1002](https://github.com/moltis-org/moltis/pull/1002) NetBird/Cloudflare | 1 day open | Large feature PR; needs review bandwidth | Maintainer review, potential merge |
| [#987](https://github.com/moltis-org/moltis/pull/987) Astro docs | ~7 days from creation to merge | Long-running docs migration now complete | Monitor for broken links/SEO |

**No critical stale items identified** — project maintains healthy PR velocity. The only watch item is #1002's size: dual remote access technologies in one PR may benefit from splitting for reviewability, though single-author consistency (`penso`) reduces coordination risk.

---

*Digest generated from GitHub activity 2026-05-15 to 2026-05-16. All links: https://github.com/moltis-org/moltis*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-05-16

## 1. Today's Overview

CoPaw (QwenPaw) shows **very high development velocity** with 50 PRs and 24 issues updated in the last 24 hours, indicating an active release cycle likely approaching or following the v1.1.7 release. The merge ratio is healthy at 68% (34 merged/closed vs. 16 open PRs), suggesting maintainers are keeping pace with contributions. No new release was cut today, but the volume of last-day activity around backup security hardening, cron job isolation, and provider customization points to stabilization work for a recent major version. The project demonstrates strong community engagement with first-time contributors and diverse channel integrations (DingTalk, WeCom, Telegram, Matrix, QQ).

---

## 2. Releases

**None today.** The latest release remains unlisted in provided data; however, multiple issues reference v1.1.7 (released ~2026-05-15) and migration concerns from v1.1.6 → v1.1.7 are actively being discussed in [#4430](https://github.com/agentscope-ai/QwenPaw/issues/4430).

---

## 3. Project Progress

### Merged/Closed PRs (34 total; key highlights)

| PR | Description | Impact |
|---|---|---|
| [#4387](https://github.com/agentscope-ai/QwenPaw/pull/4387) | Allow custom base URL for Anthropic provider | Removes `freeze_url` lock-in; enables Anthropic-compatible proxies |
| [#4413](https://github.com/agentscope-ai/QwenPaw/pull/4413) | Custom headers editor + Anthropic auth token support | Closes [#3796](https://github.com/agentscope-ai/QwenPaw/issues/3796); critical for API gateway/proxy users |
| [#4423](https://github.com/agentscope-ai/QwenPaw/pull/4423) | CloudPaw plugin fixes + Alibaba Cloud Skills remote hosting | Stabilizes A2A remote agent integration |
| [#4425](https://github.com/agentscope-ai/QwenPaw/pull/4425) | Cron timeout + `run_id` vs `job.id` fix | Reliability for scheduled agent tasks |
| [#4427](https://github.com/agentscope-ai/QwenPaw/pull/4427) | Suppress duplicate "Thinking…" placeholders in WeCom | UX polish for rapid-fire messages |
| [#4409](https://github.com/agentscope-ai/QwenPaw/pull/4409) | Backup import/restore trust controls (HMAC signing) | **Security-critical**: addresses backup vulnerability |
| [#4198](https://github.com/agentscope-ai/QwenPaw/pull/4198) | Strengthen plan reaffirm from user message | Prevents plan-mode gate bypass |
| [#4120](https://github.com/agentscope-ai/QwenPaw/pull/4120) | Matrix E2EE verify step enhancements | Better encryption UX for Matrix channel |
| [#3787](https://github.com/agentscope-ai/QwenPaw/pull/3787) | Plan panel reopen sync | Fixes stale plan state in UI |
| [#1580](https://github.com/agentscope-ai/QwenPaw/pull/1580), [#1581](https://github.com/agentscope-ai/QwenPaw/pull/1581) | YARA + consistency analyzers for skill scanner | Security scanning infrastructure |

**Themes**: Security hardening (backup trust, skill scanner), provider flexibility (Anthropic custom URLs/headers), cron reliability, and channel UX polish.

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Comments | Topic | Underlying Need |
|---|---|---|---|
| [#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957) | 8 | Agent workspace identity confusion via channel messages | **Critical**: Multi-agent isolation architecture flaw—when Agent B messages Agent A's channel, Agent A assumes B's identity. Root cause in workspace context switching. |
| [#4051](https://github.com/agentscope-ai/QwenPaw/issues/4051) | 7 | DeepSeek v4 flash `think` content parsing failure | Model-specific reasoning format incompatibility; users need reliable reasoning extraction across model providers |
| [#4299](https://github.com/agentscope-ai/QwenPaw/issues/4299) | 7 | `write_file()` dead loop on long outputs | Tool calling robustness under token pressure |
| [#4314](https://github.com/agentscope-ai/QwenPaw/issues/4314) | 7 | MiMo thinking mode + tool calls → 400 error | **Reasoning-content persistence gap** in multi-turn tool use |
| [#1516](https://github.com/agentscope-ai/QwenPaw/issues/1516) | 7 | `AudioContent` unsupported in Telegram | Rich media parity across channels |
| [#2953](https://github.com/agentscope-ai/QwenPaw/issues/2953) | 7 | Wrong info after `copaw app` start | Startup messaging accuracy |

**Analysis**: The highest-engagement issues cluster around **identity isolation** ([#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957)), **reasoning model compatibility** ([#4051](https://github.com/agentscope-ai/QwenPaw/issues/4051), [#4314](https://github.com/agentscope-ai/QwenPaw/issues/4314)), and **channel media support** ([#1516](https://github.com/agentscope-ai/QwenPaw/issues/1516)). These reveal architectural tension between multi-agent flexibility and context isolation, plus rapid model ecosystem fragmentation (DeepSeek, MiMo, Anthropic).

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Description |
|---|---|---|---|---|
| **🔴 Critical** | [#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957) | Closed | ✅ Yes | Agent identity hijacking via channel cross-messaging—**security-adjacent** |
| **🔴 Critical** | [#4421](https://github.com/agentscope-ai/QwenPaw/issues/4421) | Closed | ✅ Yes | Channel configs written plaintext to agent-readable directory—**data exposure** |
| **🟠 High** | [#4299](https://github.com/agentscope-ai/QwenPaw/issues/4299) | Open | ❌ No | `write_file()` infinite loop on long content—blocks file operations |
| **🟠 High** | [#4314](https://github.com/agentscope-ai/QwenPaw/issues/4314) | Closed | ✅ Yes | MiMo reasoning mode breaks multi-turn tool calls |
| **🟠 High** | [#4309](https://github.com/agentscope-ai/QwenPaw/issues/4309) | Closed | ✅ Yes | `browser_use` CDP timeout hangs agent for 5 min |
| **🟡 Medium** | [#2751](https://github.com/agentscope-ai/QwenPaw/issues/2751) | Open | ❌ No | Anthropic API rejects `content.type: "file"` after `send_file_to_user` |
| **🟡 Medium** | [#1516](https://github.com/agentscope-ai/QwenPaw/issues/1516) | Open | ❌ No | Telegram voice messages unsupported |
| **🟡 Medium** | [#4162](https://github.com/agentscope-ai/QwenPaw/issues/4162) | Open | 🔄 In progress | Cron tasks resurrect deleted sessions; PR [#4303](https://github.com/agentscope-ai/QwenPaw/pull/4303) and feature [#4432](https://github.com/agentscope-ai/QwenPaw/issues/4432) address this |
| **🟢 Low** | [#4412](https://github.com/agentscope-ai/QwenPaw/issues/4412) | Open | ❌ No | macOS 15 icon sizing cosmetic issue |

**Stability Assessment**: Two security-adjacent bugs closed promptly. Open risks center on **file tool robustness** ([#4299](https://github.com/agentscope-ai/QwenPaw/issues/4299)), **Anthropic API compatibility** ([#2751](https://github.com/agentscope-ai/QwenPaw/issues/2751)), and **session lifecycle management** for cron jobs ([#4162](https://github.com/agentscope-ai/QwenPaw/issues/4162)).

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in Next Version | Rationale |
|---|---|---|---|
| Built-in plugin discovery/install UI | [#4406](https://github.com/agentscope-ai/QwenPaw/issues/4406) | **High** | Explicitly requests parity with built-in skills; repo already contains unexposed plugins |
| Per-conversation token usage display | [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) | **High** | PR already open with backend+frontend implementation |
| Cron "Clear Before Run" toggle | [#4432](https://github.com/agentscope-ai/QwenPaw/issues/4432) | **High** | Directly addresses [#4162](https://github.com/agentscope-ai/QwenPaw/issues/4162) pain point; well-specified |
| Parallel DingTalk group chat processing | [#4431](https://github.com/agentscope-ai/QwenPaw/issues/4431) | **Medium** | Architectural change; requires per-user context isolation in channel layer |
| Unified `.qwenpaw` config directory | [#4408](https://github.com/agentscope-ai/QwenPaw/issues/4408) | **Medium** | Follows OpenCode convention; breaking change for existing installs |
| `/make-skill` command | [#4282](https://github.com/agentscope-ai/QwenPaw/pull/4282) | **Medium-High** | PR under review; enables session→skill conversion |
| MCP tool name prefixing (collision avoidance) | [#4428](https://github.com/agentscope-ai/QwenPaw/pull/4428) | **Medium** | First-time contributor; solves real multi-MCP-server problem |
| World Cup 2026 companion skill | [#4407](https://github.com/agentscope-ai/QwenPaw/pull/4407) | **Low-Medium** | Seasonal/timely but niche; depends on maintainer appetite |
| Distributed tracing/observability | [#4114](https://github.com/agentscope-ai/QwenPaw/issues/4114) | **Low** | No response from maintainers; infrastructure-heavy |

---

## 7. User Feedback Summary

### Pain Points
- **Migration anxiety**: [#4430](https://github.com/agentscope-ai/QwenPaw/issues/4430) reveals users fear data loss on v1.1.6→1.1.7 upgrade due to uninstall/reinstall requirement; **documentation gap on config/data paths**
- **Session management confusion**: Cron + session binding creates "zombie context" problems ([#4162](https://github.com/agentscope-ai/QwenPaw/issues/4162)); users expect deletion to be destructive
- **Model compatibility whack-a-mole**: DeepSeek reasoning tags, MiMo `reasoning_content`, Anthropic `file` type—each model needs bespoke handling
- **Channel parity gaps**: Telegram audio, DingTalk quoted messages, QQ connectivity—all lagging behind "main" channels

### Positive Signals
- **Security responsiveness**: Backup vulnerability [#4421](https://github.com/agentscope-ai/QwenPaw/issues/4421) and fix [#4409](https://github.com/agentscope-ai/QwenPaw/pull/4409) show rapid security turnaround
- **Provider flexibility**: Custom headers (#3796→#4413) and Anthropic base URLs (#4387) demonstrate openness to enterprise/proxy use cases
- **Skill ecosystem growth**: `/make-skill`, built-in skills, and plugin infrastructure show investment in extensibility

### Satisfaction/Dissatisfaction Ratio
**Mixed-positive for power users** (appreciate flexibility and security response); **frustrated for operators** (channel inconsistencies, session lifecycle surprises, upgrade friction).

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Action Needed |
|---|---|---|---|
| [#1499](https://github.com/agentscope-ai/QwenPaw/issues/1499) QQ integration failure | ~2 months | **Stalled** | "No active model configured" error; local works but QQ fails—likely channel-specific config loading. Needs maintainer triage. |
| [#2751](https://github.com/agentscope-ai/QwenPaw/issues/2751) Anthropic `file` type rejection | ~6 weeks | **Regressing** | Tool return format incompatible with Anthropic API spec. Fix likely requires `send_file_to_user` output transformation. No PR. |
| [#1516](https://github.com/agentscope-ai/QwenPaw/issues/1516) Telegram `AudioContent` | ~2 months | **Feature gap** | Clear spec provided; needs channel maintainer assignment. |
| [#4114](https://github.com/agentscope-ai/QwenPaw/issues/4114) Distributed tracing | ~1 week | **Unacknowledged** | Zero maintainer response; infrastructure ask may be out of scope. |
| [#4361](https://github.com/agentscope-ai/QwenPaw/pull/4361) Shell file guard bypass | ~1 day | **Security** | Open PR fixing file access bypass via shell commands; needs security review priority. |

**Maintainer Attention Recommended**: [#1499](https://github.com/agentscope-ai/QwenPaw/issues/1499) and [#2751](https://github.com/agentscope-ai/QwenPaw/issues/2751) are oldest open bugs with clear reproductions but no assignee. [#4361](https://github.com/agentscope-ai/QwenPaw/pull/4361) should be fast-tracked as security fix.

---

*Digest generated from GitHub activity 2026-05-15. All links reference https://github.com/agentscope-ai/QwenPaw.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-16

## 1. Today's Overview

ZeroClaw shows **very high development velocity** with 50 PRs and 22 issues touched in the last 24 hours, though only 6 PRs merged/closed against 44 remaining open suggests a **significant review bottleneck**. The project is in an intense pre-release phase focused on **v0.8.0** (multi-agent runtime, Schema V3) while simultaneously firefighting **critical production gaps in SOP infrastructure, skill management, and security boundaries**. No new releases were cut today, indicating the team is accumulating changes rather than shipping incrementally. The sheer volume of same-day filed issues (5 by JordanTheJet alone) reveals **deep architectural debt surfacing in production deployments**, particularly around SOP execution paths, skill cooldown enforcement, and observability promises that silently fail.

---

## 2. Releases

**None** — No new releases published. The project remains on whatever version preceded this date, with v0.8.0 in heavy development on PR #6398.

---

## 3. Project Progress

### Merged/Closed PRs (6 total)

| PR | Description | Impact |
|---|---|---|
| [#6525](https://github.com/zeroclaw-labs/zeroclaw/pull/6525) | Matrix channel: stop auto-threading root timeline messages | Fixes UX regression where every message spawned a thread |
| [#6367](https://github.com/zeroclaw-labs/zeroclaw/pull/6367) | Gateway `/api/status` exposes version; sidebar footer displays it | Small but important operational visibility win |
| [#6684](https://github.com/zeroclaw-labs/zeroclaw/pull/6684) | **Wires skill_manage patch cooldown** (closes #6683) | Fixes critical gap where rate-limiting code existed but was never called |
| [#6682](https://github.com/zeroclaw-labs/zeroclaw/pull/6682) | Runs ClawHub install on async runtime | Fixes panic from blocking reqwest inside tokio (related to #6681) |
| [#6688](https://github.com/zeroclaw-labs/zeroclaw/pull/6688) | Delegate agents respect `skills.prompt_injection_mode` config | Fixes context overflow on smaller models when many skills loaded |

### Closed Issues (9)

| Issue | Resolution |
|---|---|
| [#5833](https://github.com/zeroclaw-labs/zeroclaw/issues/5833) | Session ownership model for destructive operations — **closed as completed** |
| [#6679](https://github.com/zeroclaw-labs/zeroclaw/issues/6679) | CI stale branch merge protection — **closed** |
| [#5533](https://github.com/zeroclaw-labs/zeroclaw/issues/5533) | `allowed_path` contains logic bug — **closed** |
| [#5956](https://github.com/zeroclaw-labs/zeroclaw/issues/5956) | Skill audit scope documentation — **closed** |
| [#6400](https://github.com/zeroclaw-labs/zeroclaw/issues/6400) | Docker bind mount shadows web dashboard — **closed** |
| [#6402](https://github.com/zeroclaw-labs/zeroclaw/issues/6402) | Bash completion infinite recursion — **closed** |
| [#6522](https://github.com/zeroclaw-labs/zeroclaw/issues/6522) | Web chat tool approval UI — **closed** |
| [#6657](https://github.com/zeroclaw-labs/zeroclaw/issues/6657) | Advisory scan failure (Boring TLS hostname verification) — **closed** |
| [#6654](https://github.com/zeroclaw-labs/zeroclaw/issues/6654) | Cron read-only queries hitting writable schema path — **closed** |

---

## 4. Community Hot Topics

### Most Active by Engagement

| # | Topic | Comments | Analysis |
|---|-------|----------|----------|
| [#5833](https://github.com/zeroclaw-labs/zeroclaw/issues/5833) | Session ownership for destructive ops | 4 | **Security architecture tension**: Community wants fine-grained capability boundaries between agents, but implementation blocked by complexity of per-agent session scoping. The "needs-maintainer-review" and "status:blocked" tags indicate design disagreement. |
| [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) | SearXNG + CAPTCHA detection | 3 | **Privacy/robustness demand**: Users want escape from DuckDuckGo's rate limits and surveillance. Help-wanted tag suggests maintainer bandwidth constraint. |
| [#6679](https://github.com/zeroclaw-labs/zeroclaw/issues/6679) | Fresh PR checks before stale merge | 2 | **Process integrity**: Audacity88 driving CI hardening to prevent bad merges—reflects trauma from previous incidents (likely related to #6074's 153-commit revert). |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | Tracking 153 lost commits from bulk revert | 2 | **Post-mortem accountability**: Living document to recover work from March 28 disaster. "Status:in-progress" with no recent updates—risk of permanent loss. |

### Underlying Needs
- **Operational trust**: The revert trauma (#6074) and CI hardening (#6679) show community scarred by past breakage, demanding process guarantees.
- **Agent isolation**: Multi-agent runtime (#6398) is coming, but security boundaries (#5833) aren't ready—potential collision.
- **Search sovereignty**: Web search as critical agent tool needs provider diversity (#5316).

---

## 5. Bugs & Stability

### Critical/Severe (S0-S1)

| Issue | Severity | Description | Fix PR? |
|-------|----------|-------------|---------|
| [#6678](https://github.com/zeroclaw-labs/zeroclaw/issues/6678) | **S1** | Anthropic API rejects skill tools: `format!("{}.{}", ...)` violates `^[a-zA-Z0-9_-]{1,128}$` | **NO** — Blocks all Anthropic users with custom skills |
| [#6681](https://github.com/zeroclaw-labs/zeroclaw/issues/6681) | **S1** | `zeroclaw skills install clawhub:*` panics—blocking reqwest in tokio | **YES**: [#6682](https://github.com/zeroclaw-labs/zeroclaw/pull/6682) open, same-day response |
| [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) | **S0** | `reasoning_content` lost in Xiaomi thinking-mode loops—**data loss** | **NO** — Breaks chain-of-thought for mimo-v2.5 users |

### High (S2)

| Issue | Severity | Description | Fix PR? |
|-------|----------|-------------|---------|
| [#6690](https://github.com/zeroclaw-labs/zeroclaw/pull/6690) | S2 (fix PR) | Gateway retry loops forever on `AddrInUse`—log flooding | **YES**: PR open, ozzyfly |
| [#6689](https://github.com/zeroclaw-labs/zeroclaw/issues/6689) | S2-equivalent | SOP audit is **documented but silently no-op**—promised memory keys never written | **NO** — Production compliance failure |
| [#6687](https://github.com/zeroclaw-labs/zeroclaw/issues/6687) | S2-equivalent | Two `SopEngine` instances—MQTT runs invisible to agent status | **NO** — Split-brain in core orchestration |
| [#6686](https://github.com/zeroclaw-labs/zeroclaw/issues/6686) | S2-equivalent | SOP cron triggers parsed but **never called in production** | **NO** — Dead code path |
| [#6685](https://github.com/zeroclaw-labs/zeroclaw/issues/6685) | S2-equivalent | SOP HTTP fan-in endpoints **documented but unwired** | **NO** — Docs/implementation gap |
| [#6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683) | S2-equivalent | `skill_manage patch` ignores cooldown—unbounded writes | **YES**: [#6684](https://github.com/zeroclaw-labs/zeroclaw/pull/6684) merged today |

### Pattern: **SOP Subsystem is Critically Broken**

Five same-day issues from JordanTheJet reveal SOP (Standard Operating Procedure) infrastructure is **largely vaporware**: documented features (audit, cron, HTTP triggers, MQTT visibility) either don't execute or execute invisibly. This is not incremental bug accumulation but **systematic implementation failure** in a core differentiator feature.

---

## 6. Feature Requests & Roadmap Signals

### Likely v0.8.0 (PR #6398 — "DO NOT APPROVE/MERGE")

| Feature | Status | Evidence |
|---------|--------|----------|
| Multi-Agent Runtime + Schema V3 | In review | [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) — massive XL PR touching all subsystems |
| Native extended thinking (Anthropic/Bedrock) | Review pending | [#5652](https://github.com/zeroclaw-labs/zeroclaw/pull/5652) |
| ACP session persistence | Review pending | [#6649](https://github.com/zeroclaw-labs/zeroclaw/pull/6649) |
| TOTP-gated shell commands | Needs author action | [#5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779) — blocked on review feedback |

### Probable v0.7.6 (skills polish)

| Feature | Tracker | Status |
|---------|---------|--------|
| Skills UX overhaul | [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) | Accepted, in progress |
| Skill cooldown enforcement | #6683 → [#6684](https://github.com/zeroclaw-labs/zeroclaw/pull/6684) | **Merged today** |
| Background skill review fork | [#6667](https://github.com/zeroclaw-labs/zeroclaw/pull/6667) | Open, closes #4619 gap |
| Fluent localization for skills install | [#6670](https://github.com/zeroclaw-labs/zeroclaw/issues/6670) | Open |

### Emerging Signals

- **Observability unification**: [#6669](https://github.com/zeroclaw-labs/zeroclaw/issues/6669) suggests post-#6596 audit of all metric/trace sinks—indicates previous split-registry bugs weren't fully eradicated.
- **Channel expansion**: Twilio SMS [#6429](https://github.com/zeroclaw-labs/zeroclaw/pull/6429), Twitch [#6446](https://github.com/zeroclaw-labs/zeroclaw/pull/6446) — maintaining breadth-over-depth strategy.
- **Email channel hardening**: Separate IMAP/SMTP credentials [#6666](https://github.com/zeroclaw-labs/zeroclaw/pull/6666) — enterprise deployability.

---

## 7. User Feedback Summary

### Explicit Pain Points

| User | Issue | Core Complaint |
|------|-------|--------------|
| KundKMC | [#6678](https://github.com/zeroclaw-labs/zeroclaw/issues/6678) | Anthropic integration **completely broken** with custom skills—400 errors on every request |
| NiuBlibing | [#6681](https://github.com/zeroclaw-labs/zeroclaw/issues/6681) | Can't install skills from ClawHub—**crash on launch** |
| babaksh | [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) | Xiaomi thinking models **lose reasoning chain**—breaks agentic loops |
| JordanTheJet | 5 issues (#6685-#6689) | SOP features **documented but don't work**—production deployment impossible |
| NiuBlibing (prev) | [#6522](https://github.com/zeroclaw-labs/zeroclaw/issues/6522) | Web chat missing tool approval UI—supervised mode **backend-only** |

### Satisfaction Signals
- **Fast response on crashes**: #6681 filed and #6682 fix PR opened same day (2026-05-15)
- **Incremental skill system improvements**: #6684 cooldown enforcement merged promptly

### Dissatisfaction Signals
- **"Needs-author-action" / "needs-maintainer-review" accumulation**: Many PRs stalled in review limbo
- **Documentation dishonesty**: SOP docs promise features that literally don't execute (#6685-#6689)
- **Provider-specific fragility**: Anthropic (#6678), Xiaomi (#6672) both broken—suggests insufficient test matrix

---

## 8. Backlog Watch

### Critical PRs Stalled >2 Weeks

| PR | Age | Blocker | Risk |
|----|-----|---------|------|
| [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) v0.8.0 | ~11 days | "DO NOT APPROVE"—incremental review in progress | **Release blocker**; all other work accumulating behind it |
| [#5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779) TOTP shell gating | ~31 days | "needs-author-action", "needs-maintainer-review" | Security feature for destructive commands—high demand, no progress |
| [#5652](https://github.com/zeroclaw-labs/zeroclaw/pull/5652) Native extended thinking | ~35 days | Open, no recent activity | Competitive feature vs. other agent frameworks |
| [#6054](https://github.com/zeroclaw-labs/zeroclaw/pull/6054) Skill timeout respect | ~22 days | Open | Simple fix (S size), should be quick win |

### Critical Issues Unaddressed

| Issue | Age | Why It Matters |
|-------|-----|--------------|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 153 lost commits | ~22 days | **Permanent knowledge loss risk** from March revert; no recovery plan visible |
| [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) SearXNG + CAPTCHA | ~41 days | "Help wanted" = maintainer won't prioritize; search is core agent capability |

### Maintainer Attention Needed

- **JordanTheJet's 5 SOP issues** (#6685-#6689): Filed same day, zero comments, zero assignment. These are not feature requests but **production defect reports**—require immediate triage.
- **#6678 Anthropic skill tool names**: S1 severity, zero response. Blocks paid API users.
- **#6672 Xiaomi reasoning loss**: S0 data loss, zero response.

---

## Project Health Assessment

| Dimension | Score | Rationale |
|-----------|-------|-----------|
| Velocity | ⭐⭐⭐⭐⭐ | 50 PRs, 22 issues in 24h—extraordinary activity |
| Merge Rate | ⭐⭐⭐☆☆ | 12% closure rate (6/50) suggests review crisis |
| Quality | ⭐⭐☆☆☆ | SOP subsystem fundamentally broken; multiple S0/S1 regressions |
| Responsiveness | ⭐⭐⭐☆☆ | Fast on crashes (#6681→#6682), silent on architectural gaps |
| Transparency | ⭐⭐☆☆☆ | Docs promise features that don't exist; audit logs are no-ops |
| Release Cadence | ⭐⭐☆☆☆ | No release today; v0.8.0 monolith blocking pipeline |

**Verdict**: ZeroClaw is a **high-velocity, high-debt project** in a critical stabilization window. The SOP revelations (#6685-#6689) are potentially reputation-damaging if users deployed based on documentation. Immediate priorities: (1) triage JordanTheJet's SOP defects, (2) merge v0.8.0 or split it, (3) fix Anthropic (#6678) and Xiaomi (#6672) blockers before next release.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*