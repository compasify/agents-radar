# OpenClaw Ecosystem Digest 2026-07-19

> Issues: 401 | PRs: 500 | Projects covered: 12 | Generated: 2026-07-19 01:27 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-07-19

## Today's Overview

OpenClaw shows **sustained high development activity** with 401 issues and 500 PRs updated in the last 24 hours, alongside the release of **v2026.7.2-beta.3**. The project maintains a healthy ~50:50 split between open/closed items (256 open issues, 253 open PRs vs. 145 closed issues, 247 merged/closed PRs), indicating strong community engagement and responsive maintenance. A major highlight in the latest release is the introduction of **remote coding sessions** — a significant infrastructure enhancement that allows cloud workers to run Control UI sessions and resume OpenCode/Pi sessions directly in terminals. However, a **high-severity P0 bug cluster** around state migration in beta.2 (Issue #109867) and gateway initialization failures (Issue #108435) signals that the v2026.7 release cycle is encountering regression challenges.

---

## Releases

### v2026.7.2-beta.3 (openclaw 2026.7.2-beta.3)

**Highlights:**
- **Remote coding sessions:** Users can now run Control UI sessions on cloud workers, open Codex and Claude catalog sessions in terminals on their owning hosts, and resume OpenCode and Pi sessions directly in a terminal (#107670, #107086, #107200)
- **Native automation and nodes:** (description truncated in source data)

**Migration Notes:**
- Beta.2 → Beta.3 migration requires handling of the state migration issue reported in [#109867](https://github.com/openclaw/openclaw/issues/109867) — the shared SQLite migration creates indexes referencing `managed_outgoing_image_records.agent_id` before adding that column, blocking gateway startup. `doctor --fix` may not fully resolve this automatically.

**Watch Items:**
- Beta.1 → Beta.2 users experienced gateway startup failures ([#108435](https://github.com/openclaw/openclaw/issues/108435)) — affects systemd, Ollama, and manual launch workflows

---

## Project Progress

### Merged/Closed PRs Today (selected notable items)

| PR | Description | Impact |
|---|---|---|
| [#110921](https://github.com/openclaw/openclaw/pull/110921) | **LINE inbound media retry** — retries through ingress drain on transient download failure | Fixes a persistent LINE channel reliability issue |
| [#111045](https://github.com/openclaw/openclaw/pull/111045) | **Bounded trajectory pointer file reads** — prevents OOM from corrupted pointer files | Security hardening |
| [#104211](https://github.com/openclaw/openclaw/pull/104211) | **Diagnostics-OTel span classification** — model calls now classified as client spans for proper dependency graphs | Observability improvement |

### Features That Advanced

- **File read safety refactoring:** Multiple PRs (#110716, #110776, #111104) are consolidating bounded file reads into a centralized `fs-safe` module — a systemic security/robustness improvement
- **Android app expansion:** PR #110995 fixes push-to-talk speech loss, PR #110941 adds audio/document attachment support via share sheet
- **Bash session management:** PR #106000 bounds finished process session retention to prevent long-running Gateway memory leaks

---

## Community Hot Topics

### Most Active Issues

| Issue | Comments | 👍 | Summary |
|---|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) **Linux/Windows Clawdbot Apps** | **113** | 81 | Long-standing request for desktop apps beyond macOS/iOS/Android — community clearly invested |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) **Memory Trust Tagging by Source** | **17** | 0 | Feature to tag memory entries by origin trust level to prevent poisoning attacks |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) **Codex PreToolUse CPU-bound hooks** | **14** | 2 | P1 performance bug: Codex tools spawn CPU-intensive processes stalling gateway |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) **Masked Secrets System** | **13** | 4 | Prevent agents from seeing raw API keys — security hardening |
| [#79077](https://github.com/openclaw/openclaw/issues/79077) **Telegram bot-to-bot and guest-bot modes** | **11** | 8 | Missing support for Telegram's May 2026 release features |

**Analysis:** The community is heavily focused on **security and trust boundaries** (#7707, #10659, #7722) — the most commented issue (#75) is a platform availability request that has remained open for 7+ months with 81 upvotes. The Telegram feature request (#79077) shows users actively wanting to leverage new platform capabilities.

### Most Active Pull Requests

| PR | Status | Summary |
|---|---|---|
| [#111082](https://github.com/openclaw/openclaw/pull/111082) | Needs proof | Fixes closure leak in queued-turn abort listener |
| [#110995](https://github.com/openclaw/openclaw/pull/110995) | Needs proof | Fixes Android push-to-talk speech loss |
| [#111102](https://github.com/openclaw/openclaw/pull/111102) | Needs proof | Fixes DNS SSRF bypass in Codex loopback WebSocket |

---

## Bugs & Stability

### P0 (Release-Blocking) Issues

| Issue | Description | Fix Status |
|---|---|---|
| [#109867](https://github.com/openclaw/openclaw/issues/109867) | **Beta.2 state migration creates index before column** — blocks gateway startup (👍7) | No fix PR yet — marked `queueable-fix` |
| [#108435](https://github.com/openclaw/openclaw/issues/108435) | **Gateway fails to start on v2026.7.1** — affects systemd/Ollama/manual | No fix PR — regression |
| [#101763](https://github.com/openclaw/openclaw/issues/101763) | **Hosted Molty model selector broken** — API receives `claude-opus-4.8` (dot) instead of `claude-opus-4-8` (dash) | **CLOSED** |

### P1 Critical Issues

| Issue | Description | Fix PR |
|---|---|---|
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex pre-tool-use hooks spawn CPU-bound processes, stall gateway | None yet |
| [#109490](https://github.com/openclaw/openclaw/issues/109490) | Codex turns interrupted after client-delegated tool results with `terminate:true` | None yet |
| [#108238](https://github.com/openclaw/openclaw/issues/108238) | Session context counts `cacheRead` into `totalTokens`, triggers false compaction warnings | PR #108533 under review |
| [#99263](https://github.com/openclaw/openclaw/issues/99263) | Gateway crashes on Node 26 — `ERR_INVALID_STATE` from GC-closed FileHandle | None — Node 26 compatibility concern |
| [#99071](https://github.com/openclaw/openclaw/issues/99071) | Repeated Codex Apps plugin discovery causes excessive disk I/O | None yet |
| [#83184](https://github.com/openclaw/openclaw/issues/83184) | Heartbeat-driven replies stuck with `pendingFinalDelivery` | **CLOSED** |
| [#96242](https://github.com/openclaw/openclaw/issues/96242) | Multiple independent paths cause duplicate Telegram messages | None yet |

### Regressions Noted Today

- **v2026.7.1 gateway crash** (Issue #108435) — regression from previous versions
- **v2026.7.1 session context miscalculation** (Issue #108238, Chinese-language report) — regression counting `cacheRead` tokens incorrectly
- **v2026.6.11 `sanitizeContentBlocksImages`** (Issue #98673) — converts text tool results to image blocks, poisoning session history

### Fix PRs in Flight

- PR [#108533](https://github.com/openclaw/openclaw/pull/108533) — fixes embedded compaction hook reset API (addresses compaction issues)
- PR [#110704](https://github.com/openclaw/openclaw/pull/110704) — fixes race condition in in-flight tool promises against run abort (#103905)
- PR [#110384](https://github.com/openclaw/openclaw/pull/110384) — preserves JSONL framing across Codex WebSocket writes
- PR [#108378](https://github.com/openclaw/openclaw/pull/108378) — commits reduced session index before deleting evicted transcripts (P0)

---

## Feature Requests & Roadmap Signals

### High-Interest Requests (by community engagement)

1. **Linux/Windows Desktop Apps** (Issue #75, 81 👍, 113 comments) — The most-requested feature for 7+ months. Likely to get maintainer attention given the sustained demand.

2. **Memory Trust Tagging** (Issue #7707) — Architectural security feature that would differentiate memory origins (user commands vs. web scrapes vs. third-party skills).

3. **Masked Secrets** (Issue #10659, 4 👍) — Prevents agents from accessing raw API keys; critical for enterprise deployments.

4. **Filesystem Sandboxing** (Issue #7722, 4 👍) — Configurable path access restrictions for agent tool execution.

5. **Telegram Bot-to-Bot/Guest Modes** (Issue #79077, 8 👍) — Support for Telegram's May 2026 platform release features.

### Predicted for Next Release (v2026.7.x)

- **Memory Trust Tagging** — security architecture improvement aligned with ongoing security hardening efforts
- **Bounded file reads consolidation** (multiple PRs today) — systemic robustness improvement being actively merged
- **Telegram quote/reply first-class contract** (Issue #88032) — durable inbound contract instead of split prompt/runtime patch surface
- **Dynamic model discovery for OpenRouter** (Issue #10687) — addressing static model catalog limitations

---

## User Feedback Summary

### Pain Points Expressed

- **Session context overflow / forced compaction** — Multiple reports (#78562, #108238) of tool-heavy sessions repeatedly compacting without resolution, leading to degraded user experience
- **Telegram message duplication** (#96242) — Three independent paths causing duplicate sends; affects core delivery reliability
- **Gateway startup fragility** (#108435) — Users on systemd and manual launch both affected by v2026.7.1 regression
- **Android PTT speech loss** (#110995 fix PR) — Mid-hold pauses cause speech to be silently dropped
- **Subagent context pollution** (#96975, #8299) — Child sessions inject too much content into parent context; users want configurable suppression of sub-agent announces

### Satisfaction Signals

- **Remote coding sessions** in v2026.7.2-beta.3 (noted as "Highlights") likely address long-standing user pain around session portability
- **Memory dreaming CPU pegging** (#99910) — user reports gateway becomes unresponsive for ~10 min during memory promotion runs; workload cannot persist

### Underlying User Needs

Looking across issues, users consistently want:
1. **Better security boundaries** — prevent credential leaks, memory poisoning, and unauthorized file access
2. **Reliable message delivery** — no duplicate sends, no silent drops, no stuck "failed" sessions
3. **Platform parity** — Windows/Linux desktop apps, Telegram features, LINE media support
4. **Transparent context management** — understanding and controlling when/why compaction happens

---

## Backlog Watch

### Long-Unanswered Issues Needing Maintainer Attention

| Issue | Age | Comments | 👍 | Risk |
|---|---|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) **Linux/Windows Clawdbot Apps** | ~7 months | 113 | 81 | Community frustration growing — oldest highly-active issue |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) **Webhook sessions fail to reuse existing session** | ~5 months | 10 | 0 | Documented behavior doesn't work as promised |
| [#51572](https://github.com/openclaw/openclaw/issues/51572) **Session-memory hook missing on reset/prune** | ~4 months | 7 | 1 | Memory management gap |
| [#9986](https://github.com/openclaw/openclaw/issues/9986) **Model fallback on context length exceeded** | ~5 months | 6 | 0 | Users stuck when hitting context limits |
| [#6599](https://github.com/openclaw/openclaw/issues/6599) **`/models test-fallback` command** | ~5.5 months | 5 | 1 | Quality-of-life improvement, low complexity |

### Stale Issues That Resurfaced

- **Telegram session failures in Codex** ([#87299](https://github.com/openclaw/openclaw/issues/87299)) — "Something went wrong" errors in large Telegram direct sessions; marked stale but updated today
- **Gateway crash on Node 26** ([#99263](https://github.com/openclaw/openclaw/issues/99263)) — FileHandle GC issue; Node 26 compatibility becoming urgent

### Maintainer Attention Required

- **Telegram group reply routing** ([#79308](https://github.com/openclaw/openclaw/issues/79308), closed) — was closed but user reported replies sent to DM instead of group in v2026.5.7; needs verification that fix is complete
- **Group chat stuck in 'failed' state** ([#86827](https://github.com/openclaw/openclaw/issues/86827), closed) — silently drops all subsequent messages; resolved but represents a class of session lifecycle bugs
- **Codex bootstrap accounting** ([#110665](https://github.com/openclaw/openclaw/issues/110665)) — memory tool recognition misses `memory_recall`; newly filed today with maintainer-aware labels

---

**Project Health Summary:** OpenClaw is in a **high-velocity development period** with major new remote-session infrastructure in the latest beta. The project is balancing feature velocity (new releases every 2-3 days) with regression management — P0 startup issues in the v2026.7 cycle need prompt resolution. The community remains engaged through detailed bug reports and well-articulated feature requests, particularly around security hardening and platform expansion.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report generated from the provided community digest summaries.

---

## Cross-Project Ecosystem Report — 2026-07-19

### 1. Ecosystem Overview

The personal AI agent open-source landscape is experiencing a **rapid bifurcation** between mature, production-oriented platforms and experimental, infrastructure-focused tools. High-velocity projects like OpenClaw and ZeroClaw are shipping features daily (remote sessions, plugin ecosystems, security hardening) while managing regression-heavy release cycles. Mid-tier projects such as NanoBot and CoPaw are consolidating stability improvements and platform support, whereas projects like NullClaw and LobsterAI show signs of stagnation with critical bugs unaddressed for months. A clear trend emerges: **security boundaries, context management, and multi-channel reliability** are the universal pain points across the ecosystem, regardless of project size or maturity.

### 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Status | Health Score (Qualitative) |
|---|---|---|---|---|
| **OpenClaw** | 401 | 500 | **Active** (v2026.7.2-beta.3) | High velocity, regression risks |
| **ZeroClaw** | 50 | 50 | Stale (no release today) | High feature velocity, growing backlog |
| **Hermes Agent** | 50 | 50 | No release today | High responsiveness, strong closures |
| **IronClaw** | 5 | 50 | Stale (no release today) | Heavy internal refactoring, low community engagement |
| **NanoBot** | 7 | 30 | No release today | Stability wave, responsive to bugs |
| **NanoClaw** | 18 | 16 | No release today | Bug-fix focused, responsive maintainers |
| **CoPaw** | 11 | 6 | **Active** (v2.0.0.post3) | Post-release stabilization, community engaged |
| **PicoClaw** | 1 | 8 | No release today | Steady maintenance, moderate velocity |
| **Moltis** | 0 | 3 | No release today | Light activity, incremental improvements |
| **LobsterAI** | 6 | 1 | **Active** (v2026.7.17) | Feature focus, 3-month stale bugs |
| **NullClaw** | 1 | 0 | No release today | **Near-dormant**, single unresolved Android build issue |
| **ZeptoClaw** | 0 | 0 | No release today | **Inactive** |

### 3. OpenClaw's Position

OpenClaw is the **clear leader in community scale and development velocity**, with **401 issues and 500 PRs updated in 24 hours**—an order of magnitude more than any peer. Its key advantages include:

- **Infrastructure innovation**: The new **remote coding sessions** feature (cloud worker sessions, Codex/Pi resume in terminals) is a unique capability absent in all other projects.
- **Release cadence**: Shiping a beta every 2–3 days enables rapid iteration but introduces regressions (2 P0 issues in current cycle).
- **Security-first approach**: Active work on `fs-safe` module, memory trust tagging, and masked secrets systems sets a benchmark for the ecosystem.
- **Community engagement**: The most active user base (113 comments on the Linux/Windows desktop app request) and a healthy 50:50 open/closed issue ratio.

**Differentiator**: OpenClaw is the only project with a **dedicated remote session infrastructure** and a comprehensive security hardening roadmap. Its primary weakness is **regression management**—the v2026.7 cycle introduces P0 gateway startup failures that erode trust in rapid releases.

### 4. Shared Technical Focus Areas

The following requirements are emerging **independently across multiple projects**:

| Requirement | Affected Projects | Specific Needs |
|---|---|---|
| **Security & Secret Management** | OpenClaw, ZeroClaw, Hermes, NanoClaw, IronClaw | Masked secrets, credential encryption classification, SSRF prevention, timing-safe comparisons |
| **Context Window Management** | OpenClaw, NanoBot, CoPaw, Hermes, ZeroClaw | Token-aware compaction, `contextWindowTokens` enforcement, context overflow detection |
| **Multi-Platform Support** | OpenClaw, PicoClaw, NullClaw, ZeroClaw | Linux/Windows desktop apps, ARM builds (RPi, Android/Termux), legacy OS compatibility |
| **Channel Reliability** | OpenClaw, NanoClaw, ZeroClaw, CoPaw | Telegram/Routing dedup, LINE/WhatsApp media retry, session freeze/block detection |
| **OAuth & Credential Compatibility** | Hermes, PicoClaw, ZeroClaw, NanoClaw | Non-standard provider support, credential credential preflight checks |
| **Agent Identity & Memory Isolation** | OpenClaw, CoPaw, ZeroClaw, Moltis | Memory trust tagging, per-project memory isolation, per-agent git identity |

**Analysis**: Security and context management are the **most consensus-driven requirements**, suggesting the ecosystem is maturing beyond basic conversational agents toward production-grade deployments.

### 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | Hermes Agent | NanoBot | CoPaw | IronClaw |
|---|---|---|---|---|---|---|
| **Primary Focus** | Full-stack personal AI | Plugin ecosystem + channels | Desktop-first agent | Lightweight gateway | Agent collaboration | Architecture refactoring |
| **Target User** | Power users, devs | Plugin developers | Desktop power users | Self-hosters | MCP-heavy users | Internal/enterprise |
| **Unique Feature** | Remote coding sessions | WASM plugins, OpenAI gateway | SOUL.md identity rules | One-click Render deploy | MCP coordination bus | "Reborn" simplified runtime |
| **Release Stability** | Beta with regressions | Feature branches, no release | Responsive bug closing | Stability wave in progress | Post-release stabilization | Internal refactoring, no community release |
| **Community Size** | **Largest** (hundreds of issues/PRs) | Large (50/50) | High (50/50) | Moderate (30 PRs) | Moderate (11 issues) | Low (5 issues, 50 PRs mostly internal) |

**Key Differentiator**: OpenClaw targets **broad personal AI use cases** with infrastructure depth; ZeroClaw bets on **plugin extensibility**; Hermes focuses on **desktop UX and identity compliance**; CoPaw leads in **agent-to-agent coordination**.

### 6. Community Momentum & Maturity

**Tier 1: High Velocity / Rapid Iteration**
- **OpenClaw, ZeroClaw, Hermes Agent** — Daily releases or near-daily PR streams. Feature velocity is high, but regressions are common (OpenClaw’s P0 gateway bug, ZeroClaw’s growing backlog). Community feedback loops are fast.
- **NanoBot, NanoClaw** — Bug-fix waves with responsive maintainers; stability is a priority over new features.

**Tier 2: Steady State / Consolidation**
- **CoPaw, PicoClaw, IronClaw** — Focused on architecture improvements (CoPaw: MCP coordination; IronClaw: "Reborn" refactor) or channel additions (PicoClaw: WhatsApp, Simplex). Velocity is moderate; community engagement is healthy.
- **Moltis** — Incremental improvements with light activity; no signs of instability.

**Tier 3: Stagnant / At-Risk**
- **LobsterAI** — 6 open bugs, all stale for 3 months. New release focuses on features, not fixes. Community trust may be eroding.
- **NullClaw** — Single critical Android build bug open for 3 months with no maintainer response. Effectively stalled.
- **ZeptoClaw** — No activity.

### 7. Trend Signals & Recommendations for Developers

**Key Trends Across the Ecosystem**

1.  **Security is the defining requirement for 2026.** Projects are racing to add credential vaults, provenance tracking, and egress controls. **For developers**: Prioritize building plugins that integrate with these nascent security systems (e.g., OAuth vaults, secrets masked from agents).

2.  **Context window management is the "capacity problem" of the year.** Multiple projects are adding callbacks, compaction hooks, and token-aware governors. **For developers**: Tools that help users monitor and visualize context usage (e.g., "context explorer" widgets) will be in high demand.

3.  **Desktop is the battleground, but platform parity is elusive.** OpenClaw’s most-voted feature is Linux/Windows desktop apps. Hermes and IronClaw focus on desktop UX. **For developers**: Cross-platform desktop integrations (e.g., Chrome extensions, taskbar widgets) have a clear gap in the market.

4.  **Channel reliability is table stakes.** Telegram dedup, WhatsApp media retry, and Slack threading are the most common channel complaints. **For developers**: Building reliable multi-channel connectors (especially for WhatsApp, Telegram, and LINE) is a high-impact contribution.

5.  **Multi-agent/plugin ecosystems are maturing.** ZeroClaw’s WASM plugin stack and CoPaw’s MCP coordination bus signal a shift toward extensible, composable architectures. **For developers**: Plugin APIs are becoming first-class; early adopters of WASM plugin models will have a competitive advantage.

6.  **Self-hosting friction remains high.** NanoBot’s Render deploy button and IronClaw’s `config set` command address user frustration with manual configuration. **For developers**: Focus on tools that simplify deployment (Docker Compose, one-click cloud deploys) and post-install config (CLI wizards, UI diagnostic tools).

**Value to AI Agent Developers**: The ecosystem is converging on a **security-first, context-aware, multi-platform architecture**. Developers who build tools that integrate with these shared requirements—especially around credential management, context monitoring, and channel reliability—will find receptive audiences across all major projects. The window for foundational contributions is open, but closing fast as projects commit to specific security and plugin APIs.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-19

## Today's Overview
The NanoBot project shows **high activity**, with 30 PRs updated in the last 24 hours and 7 issues touched — of which 4 were closed. A large wave of **stability-focused PRs** from multiple contributors (santhreal, kuchazi-yy, KDB-Wind) targets JSON null-coercion bugs, filesystem atomicity, and hang-prone message splitting — suggesting a **concerted quality push** in the codebase. The project appears healthy and responsive: several critical bugs reported just days ago already have fix PRs merged or in review. No new releases were cut today, but the volume of low-level bug fixes hints at an imminent patch release.

## Releases
*No new releases today.*

---

## Project Progress
16 PRs were merged or closed in the last 24 hours. Key advances:

- **[Agent recovery from oversized tool results](https://github.com/HKUDS/nanobot/pull/4925)** — Merged. Reuses the in-flight context governor to catch current-turn tool output that exceeds the model’s context window, replacing it with bounded actionable instructions so the agent retries with narrower scope.
- **[One-click deploy to Render](https://github.com/HKUDS/nanobot/pull/4937)** — Merged. Adds a Render Blueprint for single-click deployment of gateway + bundled WebUI with persistent session history and memory.
- **[Memory consolidation preservation of delivery context](https://github.com/HKUDS/nanobot/pull/4627)** — Merged. Ensures the delivery message is not archived prematurely during replay-window consolidation.
- **[Opt-in eager memory consolidation](https://github.com/HKUDS/nanobot/pull/4626)** — Merged. Adds optional eager archiving of conversation slices, disabled by default, as a prerequisite for token-aware memory management.
- **[Aggregated subagent result mode](https://github.com/HKUDS/nanobot/pull/4624)** — Merged. New `agents.defaults.subagentResultMode` option for buffering subagent results then publishing one combined result after the task set drains.
- **[Provenance-gated memory archive facts](https://github.com/HKUDS/nanobot/pull/4621)** — Merged. Includes bounded MEMORY.md excerpts in consolidation prompts to avoid duplicate facts and improve correction recognition.

---

## Community Hot Topics

- **[#2343 — Context window bug with maxToken <= contextWindowTokens (CLOSED)](https://github.com/HKUDS/nanobot/issues/2343)** — The most active issue historically (15 comments), now closed. User reported that `run_agent_loop` does not enforce `contextWindowTokens` before sending requests, causing 400 errors when the total exceeds model limits. The fix likely involved capping messages before provider calls.

- **[#4867 — Preserve exact prompt prefix for Ollama caching (CLOSED)](https://github.com/HKUDS/nanobot/issues/4867)** — User reports that NanoBot adds ~60 seconds per turn when calling Ollama on 32GB VRAM systems, making it unusable. Underlying need: the prompt prefix is not stable enough to allow KV-cache reuse. The community is signaling **performance is a dealbreaker for local model users**.

- **[#4940 — Legacy session metadata loss after restart (OPEN)](https://github.com/HKUDS/nanobot/issues/4940)** — Sessions with `workspace_scope` metadata go silent after restart because `read_session_metadata()` lacks fallback to legacy filename formats. A fix PR [#4977](https://github.com/HKUDS/nanobot/pull/4977) is open.

---

## Bugs & Stability

### High Severity (P1)

| Bug | Issue | Fix PR | Status |
|-----|-------|--------|--------|
| GitStore fails when workspace ≠ CWD (relative paths to Dulwich) | [#4980](https://github.com/HKUDS/nanobot/issues/4980) | [PR #4979](https://github.com/HKUDS/nanobot/pull/4979) | Open |
| Null `runAtMs`/`createdAtMs` in triggers.json causes `TypeError`, quarantining store | N/A | [PR #4986](https://github.com/HKUDS/nanobot/pull/4986) | Open |
| Null `runAtMs`/`durationMs` in cron jobs.json causes same crash | N/A | [PR #4985](https://github.com/HKUDS/nanobot/pull/4985) | Open |
| String timestamps in cron jobs.json cause `TypeError` on comparison | N/A | [PR #4983](https://github.com/HKUDS/nanobot/pull/4983) | Open |
| `config.json` written non-atomically — crash can truncate | N/A | [PR #4984](https://github.com/HKUDS/nanobot/pull/4984) | Open |
| Active exec session process trees not cleaned on shutdown | N/A | [PR #4978](https://github.com/HKUDS/nanobot/pull/4978) | Open |
| Session message cap not enforced at persistence boundary | N/A | [PR #4956](https://github.com/HKUDS/nanobot/pull/4956) | Open |

### Medium Severity (P2)

| Bug | Issue | Fix PR | Status |
|-----|-------|--------|--------|
| Feishu channel hangs on non-empty text when limit ≤ 0 | N/A | [PR #4982](https://github.com/HKUDS/nanobot/pull/4982) | Open |
| Telegram markdown split hangs on non-empty content when max_len ≤ 0 | N/A | [PR #4981](https://github.com/HKUDS/nanobot/pull/4981) | Open |
| CLI apps lose UTF-8 subprocess output on Windows non-UTF-8 locales | [#4975](https://github.com/HKUDS/nanobot/issues/4975) | [PR #4976](https://github.com/HKUDS/nanobot/pull/4976) | Open |

### Recently Fixed (merged/closed today)
- **[Security: Docker Compose disables core container confinement](https://github.com/HKUDS/nanobot/issues/4886)** — CLOSED. `SYS_ADMIN` capability and disabled AppArmor/seccomp in default Docker Compose configuration.
- **[Resource leak: SessionManager._cache unbounded growth](https://github.com/HKUDS/nanobot/issues/4786)** — CLOSED. No TTL/LRU eviction on session cache.

---

## Feature Requests & Roadmap Signals

- **Session-local triggers** — [PR #4942](https://github.com/HKUDS/nanobot/pull/4942) (open, conflict) adds a `local_trigger` tool for agents to create/manage session-scoped triggers. Expected to ship after conflict resolution.
- **RTK exec command rewriter** — [PR #4854](https://github.com/HKUDS/nanobot/pull/4854) (open) adds opt-in RTK rewriting for exec sessions. Likely next version if no blocking conflicts.
- **WebUI polish: unified tool activity UI** — [PR #4963](https://github.com/HKUDS/nanobot/pull/4963) replaces raw nested tool logs with single-line activity language. Shows investment in **user experience for non-technical users**.
- **One-click Render deploy** (merged) — Signals ongoing **community deployment accessibility** focus.

**Prediction**: Next release will likely include the P1 JSON null-coercion fixes, session cap enforcement, GitStore workspace fix, and exec shutdown cleanup — with the WebUI polish and session-local triggers as headlining features.

---

## User Feedback Summary

- **Context window enforcement**: Users are hitting 400 errors when `contextWindowTokens` is not respected ([#2343](https://github.com/HKUDS/nanobot/issues/2343)). Fix is merged; this was a significant pain point for self-hosters.
- **Ollama performance**: A user with 32GB VRAM calls the system "totally unusable" due to 60-second overhead per turn ([#4867](https://github.com/HKUDS/nanobot/issues/4867)). This is the most severe user-reported dissatisfaction currently. The fix (preserving exact prompt prefix for caching) was closed — suggests a workaround exists but the experience may remain suboptimal for local-model-first users.
- **Windows UTF-8 compatibility**: Users on non-UTF-8 Windows locales (e.g., CP936/GBK) lose CLI tool output due to `UnicodeDecodeError` ([#4975](https://github.com/HKUDS/nanobot/issues/4975)). Fix PR open.
- **Session metadata loss**: A user reports workspace data is silently lost on restart for legacy sessions ([#4940](https://github.com/HKUDS/nanobot/issues/4940)). Fix PR open.

---

## Backlog Watch

- **[#4942 — Session-local triggers (OPEN, conflict)](https://github.com/HKUDS/nanobot/pull/4942)** — Feature PR has a conflict marker and appears stalled since July 16. Likely needs maintainer conflict resolution or rebase before merge.
- **[#4854 — RTK exec command rewriter (OPEN, conflict)](https://github.com/HKUDS/nanobot/pull/4854)** — Also has conflict status, open since July 8. Needs attention from maintainers.
- **Security hardening** — While [#4886](https://github.com/HKUDS/nanobot/issues/4886) (Docker confinement) was closed, the fix has not been publicly confirmed merged; verify that `docker-compose.yml` has been updated.
- **Resource leak** — [#4786](https://github.com/HKUDS/nanobot/issues/4786) (unbounded session cache) closed but no corresponding PR visible; ensure the fix is actually in main.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the structured Hermes Agent project digest for July 19, 2026.

---

## Hermes Agent Project Digest: 2026-07-19

### 1. Today's Overview
Project activity is exceptionally high, with 50 issues and 50 pull requests updated in the last 24 hours. This represents a significant spike in community engagement and maintainer response. While the project shipped no new releases today, the development velocity is focused on closing bugs, merging fixes, and landing features on the main branch. The closure rate is strong, with 35 issues closed against 15 remaining open/active, indicating a highly responsive maintainer team addressing a wide range of platform-specific and core agent bugs.

### 2. Releases
No new releases were published on 2026-07-19.

### 3. Project Progress
Two pull requests were merged or closed today, indicating targeted fixes landed on the main branch:

- **[PR #67101 (CLOSED)] - fix(skills): fail closed on unknown curator ownership** ([Link](https://github.com/NousResearch/hermes-agent/pull/67101)): A security-sensitive fix that now requires positive `created_by: agent` provenance before any background-review mutation on skills. This patch was salvaged and re-submitted via PR #67239.
- **[PR #67177 (CLOSED)] - [Enhancement] Long-running update should stream per-stage progress** ([Link](https://github.com/NousResearch/hermes-agent/issues/67177)): While this is an issue closure, the fix for streaming per-stage update progress in the desktop app appears to have been implemented on main.

The primary progress today is visible in the high volume of bleeding-edge pull requests (48 open) that are actively addressing critical bugs surfaced hours earlier (e.g., MCP server tool registration, Windows bootstrap issues, and Kimi provider support).

### 4. Community Hot Topics
The community is highly engaged, primarily around desktop platform stability and core agent behavior:

- **[#38216 (CLOSED) - Desktop crashes on Windows 11 startup (0x80000003)]** ([Link](https://github.com/NousResearch/hermes-agent/issues/38216)): A long-standing bug (since early June) with 10 comments. This was finally closed, suggesting a root-cause fix for the breakpoint exception has been deployed.
- **[#66829 (OPEN) - Desktop always preprocesses images through vision model even when main model supports vision]** ([Link](https://github.com/NousResearch/hermes-agent/issues/66829)): A high-traffic issue (7 comments) revealing a critical UX flaw where a secondary model is forced for image understanding, degrading performance and quality when the main model is perfectly capable.
- **[#66950 (CLOSED) - Identity/memory compliance is probabilistic and unenforced]** ([Link](https://github.com/NousResearch/hermes-agent/issues/66950)): A deep-seated behavioral bug (5 comments) where the agent acknowledges SOUL.md rules but fails to obey them. This taps into core user anxiety about agent reliability and safety.

### 5. Bugs & Stability
A significant portion of today's activity is dedicated to bug fixes, with several P0 and P1 issues appearing and receiving immediate PRs.

- **[CRITICAL - P0] #66994: Installation didn't finish error (Windows)** ([Link](https://github.com/NousResearch/hermes-agent/issues/66994)): A crash in the `install.ps1` script. **Fix PR #67214** is open, targeting localized PowerShell stderr decoding.
- **[CRITICAL - P0] #67210 (PR): fix(anthropic): abort watchdog TLS sockets from a stranger thread** ([Link](https://github.com/NousResearch/hermes-agent/pull/67210)): An open PR addressing a TLS socket corruption bug (FD reuse) that causes crashes in Anthropic cron workflows.
- **[HIGH - P1] #38216: Desktop crash on Windows 11 startup** ([Link](https://github.com/NousResearch/hermes-agent/issues/38216)): Closed today. A consistent breakpoint exception on launch.
- **[HIGH - P2] #66829: Forced image preprocessing (Desktop)** ([Link](https://github.com/NousResearch/hermes-agent/issues/66829)): A feature-blunting bug that wastes tokens and latency by ignoring native vision capabilities.
- **[MEDIUM - P2] #67187: MCP parked server revival doesn't re-register tools** ([Link](https://github.com/NousResearch/hermes-agent/issues/67187)): A tricky session state bug. **Three competing fix PRs are open** (#67223, #67212, #67208), indicating complex root-cause analysis.
- **[MEDIUM - P2] #67083: Terminal tool subprocess inherits wrong session key** ([Link](https://github.com/NousResearch/hermes-agent/issues/67083)): A dangerous environment variable leak between Telegram threads, closed with a fix on main.

### 6. Feature Requests & Roadmap Signals
Several feature requests suggest strong community desire for improved model routing and customizability.

- **Likely in Next Version:** **Smart Model Routing (Issue #66860)** and **Adaptive Thinking for Kimi Endpoints (PR #67228 & #67231)**. The Kimi PRs are active, suggesting Nous is moving fast to support the latest Anthropic-compatible endpoints.
- **Under Discussion (P3/Needs-Decision):** **Embedded Web Dashboard in Desktop (PR #67155)**. A massive UX convergence request to avoid "bouncing to a browser." **Role-based subagents (Issue #66819)** and **Configurable JIT Loading for LM Studio (Issue #67015)** are also under active consideration.
- **Not Planned:** The **Boardstate Phase 2 desktop feature (Issue #66351)** and the **Role-based subagents inheritance (Issue #66819)** have been marked `not-planned`, suggesting the team is focusing on core stability over plugin/skin complexity.

### 7. User Feedback Summary
Sentiment is mixed between high satisfaction with the project's responsiveness and frustration with platform-specific instability.

- **Pain Points:** Windows users are the most vocal and affected, citing installation failures (Issues #66994, #67000), rendering artifacts in legacy `cmd.exe` (Issue #67159), and desktop crashes (Issue #38216). Users express specific dissatisfaction with the "unsupported install method" warning when using a standard git install (Issue #67161).
- **Use Cases:** Power users are pushing the agent into multi-business, role-based scenarios (Issue #66819) and seeking trade-off controls between cost and complexity (Issue #66860). The obsession with session state and lineage (Issues #66685, #66667, #66664) highlights deep engagement with Hermes' branching session model.
- **Dissatisfaction:** The core "probabilistic rule compliance" in Issue #66950 is a fundamental trust issue—users feel the agent hears them but doesn't listen. The frustration over forced image preprocessing (Issue #66829) suggests a critical failure in respecting user-configured model preferences.

### 8. Backlog Watch
Several important items remain unattended or are latently active:

- **[OPEN] PR #24621 - Per-provider streaming toggle for fallback providers** ([Link](https://github.com/NousResearch/hermes-agent/pull/24621)): Open since May 12 (over 2 months). This fix is critical for custom API compatibility. Despite being a P2 with a moderate blast radius, it has not been merged.
- **[OPEN] PR #39452 - CI: OSV scan all tracked lockfiles** ([Link](https://github.com/NousResearch/hermes-agent/pull/39452)): Open since June 5. This security-focused PR adds vulnerability scanning for two missing lockfiles. Its long dormancy represents a continued security blind spot.
- **[OPEN] Issue #65631 - Provider error chunk misclassified as "empty stream" and retried forever** ([Link](https://github.com/NousResearch/hermes-agent/issues/65631)): A P2 bug filed July 16 that describes an infinite retry loop. No associated PR has emerged, suggesting this is a difficult or low-priority streaming handler issue.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Date:** 2026-07-19

## 1. Today's Overview

Project activity today centered on quality-of-life fixes and dependency housekeeping, with 8 merged/closed PRs and 1 open bug issue. Two stale issues from July 10 were closed alongside their associated fix PRs, showing a healthy pattern of issue-to-resolution closure. The open bug in `SplitMessage` (Issue #3264) represents a moderate stability concern that was filed just yesterday and currently lacks a fix PR. Overall, the project shows steady maintenance velocity with several long-running PRs (stale for 2-3 weeks) awaiting final review or merge.

## 2. Releases

No new releases were published in the last 24 hours. The project has not had a tagged release in the observed window.

## 3. Project Progress

**Merged/Closed PRs (8 total):**

- **PR #3242** – feat(whatsapp): add native typing presence *(closed)*  
  Adds `channels.TypingCapable` implementation for WhatsApp native channel, sending composing/paused indicators during reply processing. Fixes Issue #3240.  
  [Link](https://github.com/sipeed/picoclaw/pull/3242)

- **PR #3241** – fix(auth): make OAuth refresh provider-correct and concurrency-safe *(closed)*  
  Resolves the OpenAI JSON vs form-encoded conflict and adds a 30-second debounce to prevent refresh races. Fixes Issue #3239.  
  [Link](https://github.com/sipeed/picoclaw/pull/3241)

- **PR #3225** – Support agent-specific runtime overrides *(closed)*  
  Allows `agents.list` entries to define `max_tokens`, summarization thresholds, and `split_on_marker` with per-agent overrides applied at build time.  
  [Link](https://github.com/sipeed/picoclaw/pull/3225)

- **PR #3200** – feat(models): add configurable default fallback chain *(closed)*  
  Adds a dedicated UI workflow for setting default model fallback chains, persisted through the backend API.  
  [Link](https://github.com/sipeed/picoclaw/pull/3200)

- **PR #3165** – fix(openai_compat): recover Seed XML tool calls *(closed)*  
  Handles Volcengine Doubao Seed's `<seed:tool_call>` XML blocks from streaming responses.  
  [Link](https://github.com/sipeed/picoclaw/pull/3165)

- **PR #2937** – Feat/agent collaboration *(closed)*  
  Long-running PR introducing an internal Agent Collaboration Bus with per-agent mailboxes, collaboration threads, and permission-aware message delivery.  
  [Link](https://github.com/sipeed/picoclaw/pull/2937)

- **PR #3211** – build(deps-dev): bump eslint *(closed)*  
  [Link](https://github.com/sipeed/picoclaw/pull/3211)

- **PR #3208** – build(deps): bump mautrix Go library *(closed)*  
  [Link](https://github.com/sipeed/picoclaw/pull/3208)

**Notable Feature Advancements:**
- Agent collaboration infrastructure (PR #2937) is a foundational feature for multi-agent workflows, now merged after nearly 2 months of development.
- WhatsApp native channel gains user-facing feedback via typing indicators, improving UX for long processing times.
- Model fallback chains and per-agent runtime overrides give users more granular control over inference behavior.

## 4. Community Hot Topics

**Most Active Issue (by recency, no comments yet):**
- **Issue #3264** – `[BUG] SplitMessage hangs on an oversized fenced-code info string`  
  Created yesterday, currently 0 comments but represents a hanging bug affecting channel message splitting. Likely to attract discussion once developers investigate.  
  [Link](https://github.com/sipeed/picoclaw/issues/3264)

**Most Active Issue (by comments):**
- **Issue #3239** and **Issue #3240** each have 1 comment. No issues with multiple comments today—community activity is low for discussion but high for issue resolution.

**Underlying Needs:**
- The two OAuth-related issues (now closed via PR #3241) reflect user frustration with providers that deviate from standard specs, particularly OpenAI's JSON-only refresh endpoint.
- WhatsApp typing presence (Issue #3240, now fixed) addresses a common pain point: users seeing no feedback during multi-second processing delays.

## 5. Bugs & Stability

| Severity | Issue | Status | Description |
|----------|-------|--------|-------------|
| **High** | [#3264](https://github.com/sipeed/picoclaw/issues/3264) | **Open, no fix** | `SplitMessage` hangs forever when a fenced code block's info string extends beyond the chunk split point. Can cause infinite loops in channel message processing. |
| Low | [#3239](https://github.com/sipeed/picoclaw/issues/3239) | **Closed** | OAuth refresh race condition—resolved via PR #3241 with a 30-second debounce. |
| Low | [#3240](https://github.com/sipeed/picoclaw/issues/3240) | **Closed** | Missing WhatsApp typing presence—resolved via PR #3242. |

**Critical Note:** Issue #3264 (infinite loop in `SplitMessage`) remains unfixed. This could cause worker goroutines to hang indefinitely on malformed markdown input. No associated PR exists yet.

## 6. Feature Requests & Roadmap Signals

**Recent Completed Features (likely in next release):**
- **Agent Collaboration Bus** (PR #2937) – Inter-agent mailboxes and permission-aware messaging. This is a major architecture addition.
- **Configurable model fallback chain** (PR #3200) – Web UI for setting default+fallback model order.
- **Agent-specific runtime overrides** (PR #3225) – Per-agent `max_tokens`, summarization, and split markers.
- **WhatsApp typing presence** (PR #3242) – User-facing feedback during processing.
- **Provider-correct OAuth refresh** (PR #3241) – Fixes compatibility with OpenAI and Google.

**Open Feature PRs (likely candidates for next release):**
- **Simplex channel type** (PR #3193) – New communication channel integration, opened 3 weeks ago.
- **Linux ARMv7 build target** (PR #3205) – Enables Raspberry Pi 3B+ support.
- **Go 1.25.12 stdlib vulnerability fix** (PR #3248) – Security-critical, likely to merge soon.

**User Signals:**
- Support for non-standard OAuth providers (e.g., 9router gateway in PR #3205) shows demand for broader OpenAI-compatible backend compatibility.
- Agent override granularity (PR #3225) indicates users want per-agent tuning without global config changes.

## 7. User Feedback Summary

**Pain Points Expressed:**
- **OAuth provider incompatibility** (Issue #3239): OpenAI's non-standard JSON refresh blocked users, and concurrent refresh checks caused race conditions.
- **WhatsApp typing delay confusion** (Issue #3240): Users received no feedback during multi-second reply preparation, leading to perceived unresponsiveness.
- **9router gateway parsing failure** (PR #3205): Users on Raspberry Pi with alternative OpenAI-compatible gateways hit both missing ARM builds and response parsing errors.
- **Stale PRs lingering** (multiple): 5 open PRs are labeled `[stale]`, indicating review bottlenecks that may frustrate contributors.

**Satisfaction Indicators:**
- The agent collaboration feature (PR #2937) received no negative feedback and was merged after extensive development, suggesting community support for multi-agent workflows.
- All three recent issues (July 10) were closed within 8 days with corresponding fix PRs, demonstrating responsive maintainer handling.

## 8. Backlog Watch

**Long-Unanswered Open PRs Needing Attention:**

| PR | Age | Issue |
|----|-----|-------|
| [#3202](https://github.com/sipeed/picoclaw/pull/3202) – fix ID normalization | 18 days | Stale, no reviewer comments. Affects routing ID validation. |
| [#3248](https://github.com/sipeed/picoclaw/pull/3248) – Bump Go to 1.25.12 | 9 days | Security fix for `crypto/tls` and `os` stdlib vulns. No activity. |
| [#3205](https://github.com/sipeed/picoclaw/pull/3205) – 9router gateway + ARMv7 | 17 days | Stale, affects non-x86 users. |
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) – Simplex channel | 22 days | No reviewer comments. New channel integration. |

**Risk:** The Go stdlib vulnerability fix (PR #3248) is security-related and has sat unreviewed for 9 days. Combined with the `SplitMessage` infinite loop (Issue #3264), these represent the highest-priority items needing maintainer attention.

**No long-unanswered Issues currently** – the oldest open issue is #3264 from July 18.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the NanoClaw project digest for July 19, 2026.

---

## NanoClaw Project Digest: 2026-07-19

### 1. Today's Overview
The project saw high activity today, with **18 issues** and **16 PRs** updated in the last 24 hours. The maintainer team was highly responsive, closing 16 issues and merging/accepting 7 PRs, leaving the open/active queue relatively clean at 2 issues and 9 PRs. The day's focus was overwhelmingly on **stability and bug fixing**, with critical patches delivered for the Claude adapter, WhatsApp engagement, and system detection. While no new releases were cut, the volume of merged fixes suggests a maintenance release may be imminent.

### 2. Releases
No new releases were published today.

### 3. Project Progress (Merged/Closed PRs Today)
The following significant PRs were merged or closed today, indicating progress on stability and quality-of-life improvements:

- **Security Fix:** **PR #3065** (`fix(security): authenticate loopback webhook to prevent action forgery`) by QuantumBreakz addresses a **GHSA (CWE-306)** vulnerability where an unprivileged process on the host could forge actions against the agent. This is a critical fix for production deployments.
- **Signal Adapter UX:** **PR #3062** (`fix(signal): send read receipts`) by brianjcohen improves the Signal adapter to emit read receipts, fixing the "delivered-but-unread" indicator for senders.
- **Claude Adapter Stability:** **PR #3077** (`fix(claude): only abort on a rejected rate_limit_event; split rate_limit vs quota`) by javexed stops the Claude adapter from logging false "quota errors" on every normal rate-limit event, which was flooding logs.
- **Agent Runner Fix:** **PR #3083** (`fix(agent-runner): compact_boundary must not surface as a result`) by gavrielc fixes a **double-delivery bug** where SDK context compaction would cause a reply to be sent to the user twice.
- **WhatsApp Delivery Fix:** **PR #3086** (`fix(whatsapp): validate recipient exists before sending`) by alexandra261 prevents silent message failures by checking if a recipient JID is registered on WhatsApp before sending.

### 4. Community Hot Topics
The most active issues and debates centered around subtle, real-world deployment bugs:

- **WhatsApp @mention engagement (Issue #3085):** Reported by glifocat, this bug reveals that `engage_mode=mention` only fires when the user selects an autocomplete pill, not when they type `@name` and hit send. The issue has 1 comment and is considered **high priority** as it directly breaks core functionality for group chats. A fix PR (**#3087**) was opened by the same author on the same day, indicating fast resolution.
- **Rate Limit Log Spam (Issue #3016):** This issue saw continued discussion, with users confirming that the fix in PR #3077 (merged today) resolves the "quota" error spam that appeared in update #2965. The underlying need was for developers to have clean, actionable logs.
- **LXC/Headless Systemd Detection (Issues #1981 & #2482):** A persistent pain point for users running NanoClaw in containers (Proxmox LXC, Hetzner) or via `su -`, where the setup wizard incorrectly downgrades to a `nohup` wrapper. These issues are closely watched by the community as they gate many server-based deployments.

### 5. Bugs & Stability
Today's bug report queue was dominated by regressions and corner cases, ranked by severity:

| Severity | Issue | Description | Fix PR? |
| :--- | :--- | :--- | :--- |
| **Critical** | #2506 | `send_message` dedup silently drops responses when turns complete within 60 seconds. Causes client timeouts. | Closed (fix known). |
| **High** | #3085 (Open) | WhatsApp `engage_mode=mention` fails on typed `@name` text, only works on autocomplete. | **✅ Yes (PR #3087)** |
| **High** | #2784 | Container runner session staleness check misses `ipc-mcp-stdio.ts` changes, causing stale code to run. | Closed (fix known). |
| **Medium** | #3016 | Logging system logs routine `rate_limit_event` messages as "quota errors," spamming logs with noise. | **✅ Yes (PR #3077, merged)** |
| **Medium** | #2894 | WhatsApp adapter silently drops inbound media (images, videos) when CDN fetch fails. | Closed (fix known). |

### 6. Feature Requests & Roadmap Signals
Today's activity leans heavily toward fixes, but signals for upcoming features are visible:

- **Unified iMessage Channel:** Two open PRs (#2999 and #3076) propose a unified `imessage` channel with "local" and "hosted" backends. This is a significant user-requested feature for Apple ecosystem users. **Prediction:** One of these will likely be merged in the next version (v2.0.60+).
- **Keyword-Based Message Routing (Issue #1681):** This "zero-cost" feature for pre-turn model selection (e.g., "research" -> Gemini, "code review" -> Claude) is gaining traction. While closed today, it represents a roadmap signal toward smarter, automated LLM switching.
- **Interactive Telegram Components (PR #2544):** A long-open PR to enable button presses (`callback_query`) and message reactions in Telegram is still pending, signaling a desire for richer Telegram interactions.

### 7. User Feedback Summary
Real user pain points surfaced in today's data:

- **"Deployment is fragile":** Users on headless servers (Hetzner, Proxmox) and inside `su -` shells report a **consistent failure** where systemd is not detected, forcing a degraded runtime (Issues #1981, #2482). This is the top friction point for server admins.
- **"I lost my reply":** The `compact_boundary` bug (PR #3083) and the `send_message` dedup bug (Issue #2506) both manifested as silent failures or duplicate messages, leading to confusion and loss of trust in the agent's reliability.
- **"My WhatsApp bot is broken":** Users reported that the @mention feature (Issue #3085) was unreliable in groups, and that media attachments (Issue #2894) were silently lost. These issues undermine the core value proposition of a personal assistant on WhatsApp.

### 8. Backlog Watch
Several items require maintainer attention:

- **PR #2544 - Telegram `callback_query` support:** Open since **May 18** (2 months). This adds essential interactivity (button presses) to the Telegram adapter. High demand, but appears stalled.
- **Issue #1981 - systemd detection on headless Linux:** Open since **April 24** (nearly 3 months). A fundamental blocker for many server deployments. While a related issue (#2482) was closed, the parent issue remains open.
- **PR #2752 - Discord attachment staging:** Open since **June 12**. This blocks basic file-sharing functionality for Discord users (images, text files). The fix is small but critical for the Discord channel's usefulness.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-19

## Today's Overview
Project activity is very low today, with no new releases, no pull requests, and only one issue updated in the last 24 hours. The sole active issue (#868) is an important Android/Termux build failure that remains open after nearly three months, despite having 7 comments. There are no merged PRs or closed issues today, indicating a quiet period in development. The project appears to be in a maintenance lull, with the only focal point being a persistent cross-platform build problem. Community engagement is minimal, with no new feature discussions or contributions.

## Releases
None

## Project Progress
No pull requests were merged or closed in the last 24 hours. No new features, fixes, or changes were advanced.

## Community Hot Topics
**Issue #868 — [bug] zig build fails on Android/Termux (aarch64) with AccessDenied on options.zig linkat**  
- Author: NOTJuangamer10 | Created: 2026-04-23 | Updated: 2026-07-18 | Comments: 7  
- URL: nullclaw/nullclaw Issue #868  
- *Analysis:* This is the only active discussion, receiving a comment update yesterday after a long silence. The core problem is a file linking permission error during Zig build on Android's Termux environment (aarch64), specifically failing on `options.zig linkat`. The user has provided detailed environment info (Xiaomi Redmi Note 9, LineageOS 22.2, Zig 0.16.0, nullclaw v2026.4.17). The underlying need is for the project to support building on Android mobile devices, which is a realistic use case given Termux's popularity among developers on the go. No fix PRs have been linked, and the issue lacks maintainer response or triage.

## Bugs & Stability
**Severity: HIGH**  
- **Issue #868** — `zig build -Doptimize=ReleaseSmall` fails with `AccessDenied` on `options.zig linkat` on Android/Termux (aarch64). This is a blocking build error for ARM64 Android users. No fix PR exists. The bug has been open for nearly 3 months without resolution or acknowledgment from the maintainers. This represents a significant stability gap for the project's supported platforms.

## Feature Requests & Roadmap Signals
No new feature requests were filed in the last 24 hours. The only community signal is the implicit request from Issue #868: **improved Android/Termux build support**. Given the long-standing nature of this bug, it is unlikely to influence the next version unless the maintainers prioritize cross-platform build compatibility. No roadmap signals are present in today's data.

## User Feedback Summary
- **Pain Point (from Issue #868):** A user on Android (LineageOS 22.2) cannot build the project from source due to an unhandled permission error during file linking. The user took the time to provide full environment details, indicating frustration and a desire to use the project on mobile.  
- **Use Case:** Mobile development/testing using Termux on Android (aarch64).  
- **Satisfaction:** Likely low for this user, as the issue has been open for ~87 days without maintainer intervention. No other user feedback data is available today.

## Backlog Watch
**Issue #868** — [bug] zig build fails on Android/Termux (aarch64) with AccessDenied on options.zig linkat  
- Open since 2026-04-23, last updated 2026-07-18.  
- **Urgency:** High — blocking build on a major platform (Android ARM64).  
- **Maintainer attention needed:** The issue has 7 comments from 2+ participants but no maintainer response. The lack of triage or status update is concerning for project health.  
- **Potential fix direction:** Likely requires adjusting file permission handling during the build process for Android's restricted filesystem (commonly seen with Termux's `linkat` syscall limitations). A simple workaround or build flag might suffice.  
- No other long-unanswered issues were found in the reported data.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the IronClaw project digest for 2026-07-19.

---

## IronClaw Project Digest — 2026-07-19

### 1. Today's Overview
The project saw a significant surge in **internal refactoring velocity** today, processing **50 pull requests** (32 merged/closed) and **5 issues** (4 active). Activity is dominated by the ongoing "Reborn" architecture simplification, with core contributor `ilblackdragon` merging a series of large (XL), low-risk refactors targeting the capability dispatch and runtime lane systems. While no new releases were cut, the sheer volume of merged PRs indicates a stable and heavily developed main branch. The community-facing surface remained quiet, with only one new localization request (Traditional Chinese) representing external contribution.

### 2. Releases
**None.** No new releases were published in the last 24 hours.

### 3. Project Progress — Merged/Closed PRs
Thirty-two PRs were merged or closed today, driven almost entirely by internal architecture work for the "Reborn" runtime.

- **Architecture Simplification (Slice C & Slice B):** Core contributor `ilblackdragon` executed a coordinated refactoring campaign:
    - **Runtime Lane Collapse:** PR [#6240](https://github.com/nearai/ironclaw/pull/6240) replaced the open-trait `RuntimeAdapter` registry with a closed `RuntimeLane` enum, eliminating dynamic dispatch on the hot path.
    - **Authorization Fold:** PR [#6239](https://github.com/nearai/ironclaw/pull/6239) and [#6241](https://github.com/nearai/ironclaw/pull/6241) extracted a centralized `authorize()` method, consolidating security authority checks into a single call point.
    - **DTO Consolidation (Slice B):** PR [#6235](https://github.com/nearai/ironclaw/pull/6235) collapsed the complex `LocalDev*` deployment types into a single `DeploymentConfig` data model.
    - **Result Record Vocabulary:** PRs [#6237](https://github.com/nearai/ironclaw/pull/6237), [#6238](https://github.com/nearai/ironclaw/pull/6238), and [#6242](https://github.com/nearai/ironclaw/pull/6242) established the new `GateRecord`/`Resolution` base vocabulary, paving the way for a future capability-result migration.
- **Security & Stability Fixes:**
    - PR [#6250](https://github.com/nearai/ironclaw/pull/6250) fixed a libSQL descendant listing performance issue (replaced `LIKE` scans with indexed range queries), a symptom of QA profiling.
    - PR [#6234](https://github.com/nearai/ironclaw/pull/6234) removed a dead `trust_decision` field from the capability request family.

### 4. Community Hot Topics
Community interaction remains low, but one issue attracted specific attention regarding internationalization.

- **Localization Request (Open):** Issue [#6158](https://github.com/nearai/ironclaw/issues/6158) proposes adding Traditional Chinese (zh-TW) locale. The user notes the WebUI v2 supports Simplified Chinese (zh-CN) but forces Traditional Chinese users to fall back to a less preferred option. This signals a desire for broader locale support in the user-facing interface, often a precursor to wider regional adoption.

### 5. Bugs & Stability
Two issues of moderate severity were raised today. Both have associated fix PRs under review.

- **High Severity: Credential Exposure in Plaintext:** Issue [#6247](https://github.com/nearai/ironclaw/issues/6247) reports that `McpServerConfig.headers` (containing Bearer tokens) is serialized in plaintext into the database and worker mounts. No fix PR is explicitly linked yet, but this is a direct security exposure.
- **Medium Severity: Authorization Lifecycle Gap:** Issue [#6248](https://github.com/nearai/ironclaw/issues/6248) requests a "credential preflight" check. Currently, the system attempts to spin up sandboxes before verifying if the user has the required external account credentials (e.g., Slack, Google), causing wasted resources. This is described as blocked on the `auth_resume` design, which is precisely what PRs [#6239](https://github.com/nearai/ironclaw/pull/6239) and [#6241](https://github.com/nearai/ironclaw/pull/6241) are restructuring.

### 6. Feature Requests & Roadmap Signals
- **Feature: Extension API Parity for Reborn:** Issue [#6249](https://github.com/nearai/ironclaw/issues/6249) requests that the `ironclaw-reborn` binary implement the same MCP server lifecycle endpoints (`install`, `activate`, `PATCH`) as the v1 gateway. This is critical for users migrating from v1. PR [#6244](https://github.com/nearai/ironclaw/pull/6244) (currently open) directly addresses this by adding a `PATCH` endpoint and thread-scoped MCP sessions.
- **Feature: CLI Configuration Management:** PR [#6246](https://github.com/nearai/ironclaw/pull/6246) introduces an `ironclaw config set` command, allowing users to configure capabilities (Google, LLM credentials, Slack) and token rotation without editing raw files. This suggests a focus on post-onboarding user experience for the "Reborn" CLI.

### 7. User Feedback Summary
Direct user feedback is scarce, but the issues and PR descriptions imply two key pain points:
- **Migration Anxiety:** The dedicated Issue [#6143](https://github.com/nearai/ironclaw/issues/6143) (closed) regarding the staged promotion of "Reborn" to the canonical CLI, alongside the extension API parity request [#6249](https://github.com/nearai/ironclaw/issues/6249), indicates users are concerned about the transition from v1 infrastructure.
- **Configuration Complexity:** The introduction of the `config set` command in PR [#6246](https://github.com/nearai/ironclaw/pull/6246) implies that manually editing `config.toml` or using the raw encrypted store was a point of friction for users.

### 8. Backlog Watch
- **Stalled Release PR:** PR [#5598](https://github.com/nearai/ironclaw/pull/5598) ("chore: release"), authored by the `ironclaw-ci[bot]`, has been open since **2026-07-03** (16 days). It includes breaking changes for `ironclaw_common` and `ironclaw_skills` and attempts to bump the main binary from 0.24.0 to 0.29.1. The longevity of this open release PR, despite the high volume of subsequent merges, suggests potential manual blocking or a complex release checklist. This is a critical signal for project management, as it contains a large batch of unreleased changes.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for **2026-07-19**.

---

## LobsterAI Project Digest — 2026-07-19

### 1. Today's Overview
Project activity is moderate. There are **6 open Issues** and **1 open PR** updated in the last 24 hours, with a **new release (2026.7.17)** shipped. The open Issues are all stale (created in April), indicating a potential backlog of unresolved user problems. Two PRs were successfully merged today, showing forward progress on upstream features, but the lack of closed bugs suggests the team may be prioritizing new features over bug fixes.

### 2. Releases
**New version**: [LobsterAI 2026.7.17](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.7.17)  
**Release date**: 2026-07-17

**What's Changed:**
- `feat(cowork): surface structured run failure details in error UI` — when a co-work run fails, the error UI now shows structured details (#2348)
- `Feat/2026.7.6 service deployment data persistence` — service deployments now persist data across restarts (#2349)
- `feat(skin): a` — (truncated in source) likely continues a UI-skinning feature

**Breaking changes**: None detected.  
**Migration notes**: No migration steps are documented in the release.

### 3. Project Progress
Two PRs were closed/merged today:

- **#1353** `feat(agent): Agent 技能选择器新增全选和清除功能` (closed)  
  Adds “Select All” and “Clear” buttons to the Agent skill picker, plus a `N/M` count badge. Improves UX for bulk-selecting skills.
- **#1464** `fix(im): add duplicate validation for instance name and credential ID` (closed)  
  Prevents duplicate instance names and repeated bot credentials for DingTalk, Feishu, and QQ IM platforms.

One PR remains open:
- **#2358** `fix(cowork): show feedback when session rename fails` — adds localized error feedback when a session rename request fails (fixes #670). This is the only actively updated PR today.

### 4. Community Hot Topics
The **6 open Issues** are all stale (last updated 2026-07-18) and have minimal engagement:

- **#1293** `自定义studio http 的mcp无法使用` (1 comment, 1 👍)  
  User reports that custom MCP is not being updated in the OpenClaw engine; only SSE works.  
  **Link**: [Issue #1293](https://github.com/netease-youdao/LobsterAI/issues/1293)
- **#1296** `上传长图（3M）解析，页面直接报错` (1 comment, 0 👍)  
  Uploading a 3MB long image causes a page crash and makes the entire task unusable.  
  **Link**: [Issue #1296](https://github.com/netease-youdao/LobsterAI/issues/1296)
- **#1307** `bug: Cannot edit another model provider config after closing the edit panel` (1 comment, 0 👍)  
  After closing a model provider’s config panel, editing a different provider becomes impossible – the panel becomes read-only.  
  **Link**: [Issue #1307](https://github.com/netease-youdao/LobsterAI/issues/1307)

**Underlying need**: Users are hitting stability and configuration-management issues that are frustrating daily use (crashes, stuck UI, MCP incompatibility). The low comment count suggests users may not be actively discussing these bugs, but the issues remain unresolved for months.

### 5. Bugs & Stability
All **6 open Issues** are bug reports. Ranked by severity:

| Severity | Issue | Summary | Fix PR exists? |
|----------|-------|---------|----------------|
| **Critical** | [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) | Uploading a 3MB image crashes the page and makes the task unusable | No |
| **High** | [#1298](https://github.com/netease-youdao/LobsterAI/issues/1298) | Inputting short text triggers "content too long" error despite model passing connection test | No |
| **High** | [#1307](https://github.com/netease-youdao/LobsterAI/issues/1307) | Editing model provider configs becomes impossible after closing edit panel | No |
| **Medium** | [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | Custom HTTP MCP not functional in OpenClaw engine | No |
| **Low** | [#1305](https://github.com/netease-youdao/LobsterAI/issues/1305) | Scheduled task history shows incorrect title after task deletion | No |
| **Low** | [#1302](https://github.com/netease-youdao/LobsterAI/issues/1302) | Feature request: code block line numbers (not a crash but a usability issue) | No |

No bug-fix PRs were merged today. The team is likely not actively triaging these stale bugs.

### 6. Feature Requests & Roadmap Signals
The release **2026.7.17** signals two upcoming directions:
- **Co-work error details** – structured failure reporting in the error UI suggests the team is investing in better debugging/observability for collaborative runs.
- **Service deployment data persistence** – indicates the team is solidifying production deployment scenarios.

From open Issues:
- **#1302** `feat(cowork): 为代码块添加行号显示切换按钮` — a feature request for toggling line numbers in code blocks (including for plain text blocks). This is a quality-of-life improvement likely to land in a future release.

**Prediction**: The next minor version will likely include a fix for the session rename feedback (#2358) and possibly the line-number toggle.

### 7. User Feedback Summary
Real pain points captured from open Issues:

- **English**: “After opening and closing a model provider config panel, switching to a different provider makes it read-only. Users cannot edit configurations.” (#1307)
- **Chinese**: “Uploading a 3MB long image causes the page to crash and the entire task to become unusable. New tasks also keep failing.” (#1296)
- **Chinese**: “Custom MCP via HTTP is not being used by the engine; only SSE works. This blocks custom integrations.” (#1293)
- **Chinese**: “After a scheduled task runs successfully and is deleted, the history tab shows the wrong title.” (#1305)

**Satisfaction indicators**: The merged PRs (#1353, #1464) address specific UI and duplicate-validation pain points, which should improve agent configuration and IM platform setup experiences.

### 8. Backlog Watch
**6 open Issues**, all stale since April 2026, remain unaddressed by maintainers:

- [Issue #1293](https://github.com/netease-youdao/LobsterAI/issues/1293) (Apr 2) — Custom MCP engine integration broken
- [Issue #1296](https://github.com/netease-youdao/LobsterAI/issues/1296) (Apr 2) — Large image upload crashes UI
- [Issue #1298](https://github.com/netease-youdao/LobsterAI/issues/1298) (Apr 2) — False input-length limit on short text
- [Issue #1302](https://github.com/netease-youdao/LobsterAI/issues/1302) (Apr 2) — Feature request: code block line numbers
- [Issue #1305](https://github.com/netease-youdao/LobsterAI/issues/1305) (Apr 2) — Scheduled task history title incorrect
- [Issue #1307](https://github.com/netease-youdao/LobsterAI/issues/1307) (Apr 2) — Model provider config panel becomes read-only

**Maintainer attention needed**: These issues are over **3 months old** with no assignee or milestone. The most impactful to address: #1296 (crash on image upload) and #1307 (config panel lockup) directly affect core usability.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-19

## 1. Today’s Overview
Moltis saw light activity over the past 24 hours, with no new issues created and no new releases. Three pull requests were updated: two were merged/closed, and one remains open. The project’s pulse is moderate, with focused development on memory infrastructure, Slack integration flexibility, and web UI improvements for agent-only setups. There are no signs of blocking regressions or critical bugs, indicating steady incremental progress.

## 2. Releases
No new releases were published in the last 24 hours. The latest available version remains unchanged.

## 3. Project Progress
Two pull requests were merged/closed, advancing important areas:

- [#1159 [CLOSED] feat(slack): support configurable API base URL](https://github.com/moltis-org/moltis/pull/1159)  
  Adds `api_base_url` to Slack account configuration, defaulting to `https://slack.com/api`. The change routes all Slack client communication—Socket Mode, Events API, outbound replies, and native streaming—through the custom base URL. Onboarding and account configuration flows were also updated accordingly. This enables self-hosted or proxy-based Slack setups.

- [#1157 [CLOSED] fix(web): support ACP-only chat setup](https://github.com/moltis-org/moltis/pull/1157)  
  Allows the web chat interface to function without any configured LLM model, relying instead on installed ACP (Agent Communication Protocol) agents. The fix ensures ACP-only setups are treated as valid during onboarding. The session header picker now filters to ACP-capable agents, and the bottom model selector is disabled when an ACP agent is active.

## 4. Community Hot Topics
No issues or PRs received comments or reactions in the last 24 hours. The only open PR, [#1158 [OPEN] feat(memory): add zvec vector database memory backend](https://github.com/moltis-org/moltis/pull/1158), has no discussion yet. However, it represents a significant experimental addition—a Zvec + redb-based memory backend, gated behind a `zvec` cargo feature. The author notes they “vibe-coded” it as an experiment, indicating a lightweight, developer-driven contribution. Given the lack of feedback, the community may still be evaluating its utility and stability.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours. The two closed PRs are feature additions and improvements, not bug fixes. The project remains stable with no new critical issues surfaced.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed as issues today. The contributions suggest the following roadmap signals:
- **Custom Slack API base URL** (PR #1159) points to growing demand for self-hosted or enterprise Slack integrations behind proxies or VPNs.
- **ACP-only chat setup** (PR #1157) signals a shift toward agent-first architectures where LLMs are optional, and external agents (via ACP) serve as first-class conversational endpoints.
- **Experimental Zvec memory backend** (PR #1158) hints at interest in alternative vector database backends beyond the default. If adopted, this could become a configurable memory storage option in a future release.

## 7. User Feedback Summary
No explicit user feedback was captured in issues or PR comments today. The closed PRs indirectly reflect pain points: users needed configurable Slack API URLs for non-default Slack deployments, and the web interface previously failed when no LLM was configured, forcing reliance on ACP agents—a limitation now resolved. No user satisfaction or dissatisfaction signals are available.

## 8. Backlog Watch
No open issues exist in the project. The only open PR ([#1158](https://github.com/moltis-org/moltis/pull/1158)) has no comments or reviews since its creation two days ago. Maintainer attention is recommended to review this experimental feature and provide guidance on its maturity, testing requirements, and potential merge timeline to avoid staleness.

---

*Report generated from GitHub data as of 2026-07-19.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-19

## 1. Today's Overview

CoPaw shows high activity today with **11 issues updated** and **6 pull requests** active in the last 24 hours—indicating strong community engagement and a significant bug-fixing push following the recent v2.0.0.post3 release. No new releases landed today, but the project is processing substantial regression reports and feature proposals. Notably, **5 of the 6 PRs are open and under active review**, suggesting maintainers are addressing critical stability concerns in real time. The release duty issue (#6223) for v2.0.0.post3 remains open, indicating post-release verification may still be ongoing.

## 2. Releases

*No new releases were published in the last 24 hours. The most recent release remains **v2.0.0.post3**.*

## 3. Project Progress

Only **one PR was merged/closed** today:

- **[PR #1071 (closed) — Mattermost channel integration](https://github.com/agentscope-ai/QwenPaw/pull/1071)** — A long-standing feature PR from March 2026 introducing Mattermost channel integration was finally closed. This is a *first-time contributor* PR related to issue #621, adding documentation and a new messaging channel integration. The closure after 4+ months may signal either merging or deprecation.

**Notable open PRs advancing project stability:**

- **[PR #6247 — fix(memoryspace): catch OSError](https://github.com/agentscope-ai/QwenPaw/pull/6247)** — Fixes the `recall_history` crash (OSError: File name too long) by wrapping `path.is_file()` in a try/except block.
- **[PR #6248 — fix: distinguish offload vs cancel](https://github.com/agentscope-ai/QwenPaw/pull/6248)** — Addresses a critical regression where shell commands hang permanently after coordinator deadline (issue #6245).
- **[PR #6243 — fix(embedding): expose use_dimensions toggle](https://github.com/agentscope-ai/QwenPaw/pull/6243)** — A *first-time contributor* fix for the embedding dimensions configuration bug.
- **[PR #6237 — feat(scroll): improve exchange and date-aware history recall](https://github.com/agentscope-ai/QwenPaw/pull/6237)** — Enhances history search to return complete conversational turns and support date-aware queries.
- **[PR #6238 — perf(drivers): initialize handlers concurrently](https://github.com/agentscope-ai/QwenPaw/pull/6238)** — Performance optimization for multi-MCP startup, limiting to 8 concurrent handlers.

## 4. Community Hot Topics

- **[Issue #6245: Session permanently blocked when shell command exceeds coordinator deadline](https://github.com/agentscope-ai/QwenPaw/issues/6245)** (2 comments) — Identified as a **regression from #6056 fix** where sessions become permanently blocked after shell command timeout. A fix PR (#6248) is already open. High-impact stability issue.

- **[Issue #6240: 末尾出现注释显示 / Trailing comments in output](https://github.com/agentscope-ai/QwenPaw/issues/6240)** (3 comments, most comments today) — User reports model-generated memory annotations (e.g., `<!-- ⟦ NEXT_RID 改为 1003...`) appearing in chat output after extended conversations. Points to a potential issue with web rendering or model formatting. Chinese-language report with active triage.

- **[Issue #6239: Windows PATH concatenation drops ';' separator](https://github.com/agentscope-ai/QwenPaw/issues/6239)** — User (via AI assistant disclosure) reports that Windows backend loses semicolons when merging User+Machine PATH, causing child processes to lose npm global commands. Important platform-specific bug for Windows users.

- **[Issue #4641: `env set` doesn't propagate to shell subprocesses](https://github.com/agentscope-ai/QwenPaw/issues/4641)** — Long-standing (since May 2026) but still open; user requests `env get` or `--json` flag for runtime environment variable access in scripts. Continues to attract attention.

## 5. Bugs & Stability

**Critical (session-blocking / crash):**

| Issue | Severity | Status | Fix PR |
|-------|----------|--------|--------|
| [#6245 — Session permanently blocked on coordinator deadline](https://github.com/agentscope-ai/QwenPaw/issues/6245) | **Critical** — session unusable until restart | Open | [#6248 open](https://github.com/agentscope-ai/QwenPaw/pull/6248) |
| [#6246 — `recall_history` crashes with OSError (file name too long)](https://github.com/agentscope-ai/QwenPaw/issues/6246) | **High** — crash on search, affected by git diff content | Open | [#6247 open](https://github.com/agentscope-ai/QwenPaw/pull/6247) |
| [#6241 — Agent repetition + memory_search infinite loop](https://github.com/agentscope-ai/QwenPaw/issues/6241) | **High** — endless tool calls, no repeat detection mechanism | Open | None yet |

**Medium/Functional:**

| Issue | Severity | Status |
|-------|----------|--------|
| [#6242 — Embedding `use_dimensions` not exposed to API](https://github.com/agentscope-ai/QwenPaw/issues/6242) | **Medium** — config persists but dimension value never sent | [#6243 open](https://github.com/agentscope-ai/QwenPaw/pull/6243) |
| [#6250 — SANDBOX_FALLBACK hardcoded approval](https://github.com/agentscope-ai/QwenPaw/issues/6250) | **Medium** — no config to skip sandbox fallback approval | None yet |
| [#6239 — Windows PATH ';' separator dropped](https://github.com/agentscope-ai/QwenPaw/issues/6239) | **Medium** — Windows-only, breaks npm tools | None yet |
| [#6249 — TUI stuck in "warming" state on source startup](https://github.com/agentscope-ai/QwenPaw/issues/6249) | **Low-Medium** — startup issue, no clear logs | None yet |
| [#6240 — Trailing comment annotations in output](https://github.com/agentscope-ai/QwenPaw/issues/6240) | **Low** — cosmetic/display issue | None yet |

**Regression watch:** Issue #6245 is explicitly flagged as a regression from the #6056 fix, underscoring the challenge of maintaining stability in a complex agent coordination system.

## 6. Feature Requests & Roadmap Signals

- **[Issue #6244 — 记忆隔离能力 / Memory isolation across projects](https://github.com/agentscope-ai/QwenPaw/issues/6244)** — User proposes introducing "project" concepts to isolate memory by task, narrowing retrieval scope and improving relevance. This aligns with enterprise multi-tenant needs and could become a **major feature in v2.1** if adopted.

- **[Issue #4641 — `env get KEY` and `--json` flag for `env list`](https://github.com/agentscope-ai/QwenPaw/issues/4641)** — Two months old, still open. Users need runtime environment variable inspection without restarts. Moderate effort, high utility for scripting/automation.

- **[PR #6237 — Date-aware history recall](https://github.com/agentscope-ai/QwenPaw/pull/6237)** — Improving Scroll's history recall to return complete conversational turns with date-awareness. Likely to land soon and improve memory search UX.

- **[PR #6238 — Concurrent handler initialization](https://github.com/agentscope-ai/QwenPaw/pull/6238)** — Performance improvement for multi-MCP setups, indicating growing adoption of MCP protocol connections.

**Prediction for next version (v2.0.0.post4 or v2.1.0):** Likely includes the deadline offload fix (#6248), OSError fix in memoryspace (#6247), embedding `use_dimensions` exposure (#6243), and the improved Scroll history recall (#6237). Memory isolation (#6244) is less likely in the immediate patch but a strong candidate for a minor release.

## 7. User Feedback Summary

**Pain points expressed today:**

1. **Session hardening needed** — Two independent users (#6245, #6250) report scenarios where sessions become stuck or blocked with no graceful recovery. Confidence in production use is impacted.
2. **Windows parity issues** — PATH handling (#6239) is a persistent concern for Windows users, especially developers using npm-based toolchains.
3. **Configuration granularity** — Users want more control over sandbox fallback behavior (#6250) and environment variable management (#4641) without resorting to broad approvals.
4. **Memory quality concerns** — Repetitive agent output and memory search loops (#6241) frustrate users, as do truncated/incomplete recall results (#6240).
5. **Chinese-language community vocal** — Several issues submitted in Chinese (#6240, #6244, #6249, #6250) suggest a growing non-English user base with specific workflow expectations.

**Satisfaction signals:** The influx of **first-time contributors** (PR #6243, PR #1071) and detailed bug reports indicates a healthy, engaged community willing to invest in improving the project.

## 8. Backlog Watch

- **[Issue #4641 — `env set` not visible to subprocesses](https://github.com/agentscope-ai/QwenPaw/issues/4641)** — **Opened 2026-05-23 | 2 comments | Last update today** — A clear, well-scoped feature request (runtime env var inspection) that has sat unanswered by maintainers for nearly two months. Moderate implementation effort, high user value.

- **[Issue #6241 — Agent repetition + memory_search infinite loop](https://github.com/agentscope-ai/QwenPaw/issues/6241)** — **Opened today | 1 comment** — While new, it describes a fundamental absence of repeat-detection logic in the framework layer. No maintainer response or PR yet. Given the severity (infinite loops, wasted tokens), this warrants prompt triage.

- **[PR #1071 — Mattermost integration (closed)](https://github.com/agentscope-ai/QwenPaw/pull/1071)** — **Closed after 4+ months** — The closure reason is not explicitly stated in the summary. This could indicate it was finally merged, but given the project's release cadence, it may have been superseded. Worth checking the merge status for users who contributed.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-19

## Today's Overview
The ZeroClaw project remains highly active with 50 issues and 50 PRs updated in the last 24 hours, though the number of closed tickets remains low (11 issues closed, 3 PRs merged/closed). The open/active issue count (39) and open PR count (47) signal a growing backlog of work in progress and a project that is prioritizing feature development and architectural RFCs over rapid bug-fix closure cycles. No new releases were published today, suggesting teams are consolidating work across several large feature branches. The most intense activity centers on security infrastructure, WASM plugin foundations, and channel integration improvements, with notable work on supply chain signing, an OpenAI-compatible gateway endpoint, and plugin egress/secret management.

## Releases
No new releases published today.

## Project Progress
Three PRs were merged or closed in the last 24 hours (exact titles not captured in top-20 display). Activity focused on closed issues includes:
- **#8177** supply chain signing RFC closed as wontfix — the RFC was likely rejected or deferred.
- **#5862** bug fix for ZeroClaw not knowing it can add cron jobs — closed after 14 comments.
- **#2079** GitHub native channel feature implemented and closed.
- **#6378** Discord channel restriction feature implemented and completed.
- **#6672** reasoning_content loss bug with Xiaomi models — fixed and closed (S0 severity).
- **#8056** required CI PR security gate — implemented and closed.
- **#7248** cached input token cost accounting — completed.
- **#5573** SMTP email as a channel — completed.

Active PRs of note that advanced today include **#9157** (hardware serial frame resynchronization fix), **#8920** (ZeroCode chat copy affordances), **#9055** (reproducible docs translation), **#9026** (ACP agent selection via query param), and a **stack of six large plugin foundation PRs from JordanTheJet** (#9137–#9142) covering egress policy, event routing, durable scheduler outbox, TLS profiles, and scoped secrets — all sized XL and risk:high.

## Community Hot Topics
The most active discussions center on architecture, security, and channel integration:

- **#5862** (14 comments, closed) — ZeroClaw not aware of its own cron capability. Community expectation was that the agent should self-discover available tools.
- **#8177** (12 comments, closed as wontfix) — Supply chain signing RFC. High community engagement on hardened CI, but ultimately not pursued.
- **#2079** (9 comments, closed) — Restoring GitHub as a native channel, a long-desired feature.
- **#6378** (8 comments, closed) — Discord channel scoping; community enthusiasm for per-channel control.
- **#6055** (7 comments, open) — Slack thread context hydration. Users need agents that can follow threads without repeated @mentions.
- **#8424** (7 comments, open) — Workspace-relative forbidden path patterns. Emerging pain point for protecting sensitive project files.
- **#9127** (6 comments, open) — KeySource trait for credential encryption classification. Deep architectural discussion about secret management.
- **#8226** (6 comments, open) — Typed per-agent git identity for multi-tenancy.
- **#6293** (6 comments, open) — Air-gapped execution mode. Security-conscious users want offline operation with companion daemon.
- **#8600** (1 👍, 3 comments) — Per-chat model switching. Popular request from users migrating from other platforms.

## Bugs & Stability
Several bugs of varying severity were reported or remain active:

- **#8505** (S1 - workflow blocked, open) — Telegram channel cannot be configured despite following quickstart. Community-reported, accepted as bug.
- **#8559** (S1 - workflow blocked, in-progress) — Agents stop working when exiting web dashboard chat window. Major UX regression.
- **#6724** (accepted, open) — Empty Signal/Voice channel credentials cause supervisor crashloop. Stability issue in channel orchestration.
- **#7911** (accepted, open) — install.sh selects wrong Linux binary on Android/Termux. Installation blocker for mobile users.
- **#9102** (new fix PR open) — Multimodal provider strips unhandled non-image media markers before dispatch. Patch in review.
- **#9113** (new fix PR open) — Streaming HTTP clients missing idle read_timeout, causing hangs. Patch submitted.
- **#9110** (new fix PR open) — Lark channel verification_token comparison vulnerable to timing attack. Security patch submitted.
- **#9090** (fix PR open, size:XL) — Tool-call pairing enforcement chokepoint for Anthropic/Bedrock providers. Major reliability improvement in review.
- **#9157** (fix PR open) — Hardware serial response frame desynchronization. Affects firmware communication.

**Critical**: open S0 severity issues from prior days include **#6672** (reasoning_content loss, now closed/fixed) and **#6002** (Telegram message not clearly addressed to assistant, still open with stale status).

## Feature Requests & Roadmap Signals
Strong signals for the next version focus on:

- **Plugin ecosystem** — Six large PRs from JordanTheJet (#9137–#9142) lay foundation for WASM plugins with scoped secrets, egress policy, event routing, TLS, and durable scheduling. This is clearly a major upcoming release area.
- **Channel expansions** — Open PRs for Matrix progress drafts (#8443), Telegram multi-message mode (#8445), Slack thread hydration (#6055), and SMTP email as channel (#5573, completed).
- **OpenAI-compatible gateway** — PR #8486 adds an OpenAI chat completions endpoint to the gateway, enabling integration with LangChain, Continue.dev, and Aider.
- **Multi-model switching** — Issue #8600 (per-chat model switching) has community support and maintainer acceptance.
- **SearXNG search support** — Issue #5316 is in-progress with high risk rating.
- **Pre-turn intent extraction** — Issue #7431 would allow natural-language routing without explicit command.
- **Cross-turn OTel correlation** — Issue #8933 accepted as RFC for observability improvements.

**Prediction**: The next minor release will likely include the OpenAI gateway endpoint, Telegram multi-message mode, Slack thread hydration, and the initial plugin foundation PRs. Hardware support (Hailo-Ollama PR #9109) may also ship.

## User Feedback Summary
Common pain points expressed in issue discussions:

- **Self-discovery gaps** — Users expect agents to know their own capabilities (cron, tools) without being told (#5862).
- **Channel configuration friction** — Multiple reports of Telegram and other channels being difficult to set up correctly (#8505, #6002).
- **Web UI session fragility** — Exiting chat window kills agent tasks (#8559); WebSocket lifetime issues (#7759).
- **Context overflow** — Long conversations causing hallucination and topic drift (#6517), still in accepted backlog.
- **Mobile/alternative platform support** — Termux installation broken (#7911); hardware serial issues (#9157).
- **Multi-tenancy complexity** — Users running multiple agents need per-agent git identity, model selection, credential isolation (#8226, #8600, #9127).

Satisfaction signals: completion of Discord channel scoping, SMTP email channel, cached token accounting, and GitHub native channel — all features the community explicitly requested.

## Backlog Watch
Issues and PRs needing maintainer attention:

- **#6002** — Telegram message routing bug (S1, stale since May, needs author action). User may have abandoned.
- **#6293** — Air-gapped execution mode RFC (blocked since May, 6 comments). No maintainer update in weeks.
- **#8424** — Workspace-forbidden path patterns RFC (blocked, needs author action since June 28).
- **#6724** — Supervisor crashloop on empty credentials (accepted since May 16, no fix PR yet). Stability issue.
- **#8138** — OpenRouter model fallbacks (blocked since June 22, 6 comments). Users waiting for this feature.
- **#7497** — OCI registries for plugin storage (blocked RFC since June 11). May be superseded by JordanTheJet's plugin PRs.
- **#8486** — OpenAI completions endpoint (needs author action, size:XL, open since June 29). Major feature pending review.
- **#8443** — Matrix progress drafts (needs author action, open since June 28).
- **#9102, #9115** — Fix PRs awaiting review/merge.

The growing number of `needs-author-action` and `blocked` items against architectural RFCs suggests the core team may be bottlenecked on review capacity for large proposals.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*