# OpenClaw Ecosystem Digest 2026-08-07

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-07 02:02 UTC

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

# OpenClaw Project Digest — 2026-08-07

## Today’s Overview

OpenClaw activity remains very high: 500 issues were updated in the last 24 hours (432 open/active, 68 closed) and 500 PRs were updated (402 open, 98 merged/closed), but no new releases were published today. The volume is driven by a large backlog of P1/P2 bug reports and feature requests, many still waiting on `clawsweeper:needs-maintainer-review` or `needs-product-decision` labels. Several serious regressions remain open, especially around DeepSeek provider handling, compaction/data-loss risks, and channel plugin reliability (Feishu, LINE, WhatsApp, Telegram). On the positive side, a steady stream of small-to-medium fixes is moving through review, including provider media fixes, gateway heartbeat targeting, and WebChat/UI reliability improvements.

## Releases

**None.** No new OpenClaw releases were published in this 24-hour window, so there are no changelog entries, breaking changes, or migration notes to report.

## Project Progress

98 PRs were closed or merged in the last 24 hours. Notable closed items visible in today’s data:

- [PR #116793 — refactor(agents): centralize immutable execution attribution](https://github.com/openclaw/openclaw/pull/116793) — Closed as part of a 5-PR stack improving execution correlation/attribution across agent paths; touches gateway, commands, and agent runtimes.
- [PR #116204 — fix(google): accept base64url provider media](https://github.com/openclaw/openclaw/pull/116204) — Fixes Google provider media (Live voice, TTS, video, music, image) being rejected when ProtoJSON uses URL-safe Base64.
- [PR #118601 — fix(plugins): warn when registerHook uses a typed hook event name](https://github.com/openclaw/openclaw/pull/118601) — Improves plugin developer UX by warning when typed hooks won’t receive typed events.
- [PR #117961 — fix(canvas): serve Content-Length on A2UI HEAD responses](https://github.com/openclaw/openclaw/pull/117961) — RFC 9110 compliance fix for the canvas A2UI asset host.
- [PR #118749 — fix(gateway): make doctor dreaming timestamp comparators NaN-safe](https://github.com/openclaw/openclaw/pull/118749) — Hardens `doctor` statistics against malformed `lastRecalledAt` timestamps.
- [PR #119689 — fix(heartbeat): explain target-none skips](https://github.com/openclaw/openclaw/pull/119689) — Adds operator-facing clarity when heartbeat delivery is intentionally disabled.

These changes show continued investment in attribution/audit infrastructure, provider correctness, and plugin observability, though the repo remains heavily gated on maintainer review capacity.

## Community Hot Topics

- [Issue #75 — Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) — **116 comments, 80 👍, closed.** Community demand for native Linux/Windows apps remains very strong; users see macOS/iOS/Android coverage as incomplete without desktop Linux and Windows.
- [Issue #116277 — DeepSeek v4 Flash silent reply failure](https://github.com/openclaw/openclaw/issues/116277) — **114 comments.** A recurring, high-noise bug: DeepSeek v4 Flash silently generates no reply and OpenClaw posts a generic fallback. This is a major trust/reliability pain point for Telegram users.
- [Issue #7707 — Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707) — **28 comments.** Feature request to tag memory by trust level to prevent memory-poisoning/prompt-injection attacks; still needs maintainer/product/security review.
- [Issue #27445 — `announceTarget` option for sub-agent completion routing](https://github.com/openclaw/openclaw/issues/27445) — **12 comments, 5 👍.** Users want sub-agent completions routed back to the parent session as user-message triggers for multi-step orchestration.
- [Issue #88657 — DeepSeek V4 Flash incomplete turn](https://github.com/openclaw/openclaw/issues/88657) — **10 comments.** Similar to #116277, this is a second DeepSeek reliability report with `payloads=0, tools=2, stopReason=stop`; appears version-specific (regression in 2026.5.27/28).

The two DeepSeek threads dominate community pain, strongly suggesting provider-specific response validation and fallback heuristics need immediate attention. The other hot topics center on orchestration control, security hardening, and platform coverage.

## Bugs & Stability

Ranked by severity, with the most critical first:

### P0 / Release Blockers

- [Issue #119263 — Agent DB v14→v15 migration fails: `no such column: entry_valid`; gateway refuses to start](https://github.com/openclaw/openclaw/issues/119263) — Upgrade-blocking schema migration failure on 2026.7.2. `openclaw doctor --fix` cannot repair the DB; gateway will not start. A linked PR is open, but the issue remains active.
- [Issue #118772 — 2026.7.1+ `sessionEntry.totalTokens` inflation causes premature compaction at 4–8% of context window](https://github.com/openclaw/openclaw/issues/118772) — Data-loss regression: cumulative multi-tool-loop usage is counted as current context, triggering compaction far too early. Linked PR open.

### P1 Regressions / Reliability

- [Issue #119087 — Gateway cold start regressed ~2.5x on 1-vCPU containers](https://github.com/openclaw/openclaw/issues/119087) — Significant infrastructure regression between 2026.7.1-beta.1 and 2026.7.2-beta.7.
- [Issue #115700 — `chat.send` rejected with “thread switched branches” after model completes](https://github.com/openclaw/openclaw/issues/115700) — Stale `expectedLeafEntryId` causes persistent delivery failures after retry/fallback/compaction.
- [Issue #115546 — CLI-budget compaction fails ~100% on large sessions; timeout fires far below deadline](https://github.com/openclaw/openclaw/issues/115546) — Compaction aborts at 4.9s–50s despite 180s deadline, causing wake death-spirals.
- [Issue #95553 — Preflight budget compaction hard-capped at ~60s, ignores `compaction.timeoutSeconds`](https://github.com/openclaw/openclaw/issues/95553) — Related compaction timeout/config-ignoring bug.
- [Issue #117445 — Feishu inbound DMs decoded as `?`; never replies](https://github.com/openclaw/openclaw/issues/117445) — Channel-breaking bug in `@openclaw/feishu` on `im.message.receive_v1`.
- [Issue #86050 — Gateway buffers claude-cli stream events; surfaces only see final message](https://github.com/openclaw/openclaw/issues/86050) — WebChat/TUI lose live streaming when using `claude-cli` runtime.
- [Issue #90789 — claude-cli synthetic “No response requested.” leaves Telegram turn fully silent](https://github.com/openclaw/openclaw/issues/90789) — No observability when Claude Code CLI injects a synthetic no-op response.
- [Issue #109881 — Bedrock thinking-signature replay has no protection; permanently bricks Claude 4+ sessions](https://github.com/openclaw/openclaw/issues/109881) — Stored thinking-block signature is rejected on replay, bricking sessions.
- [Issue #92186 — Foreground reply fence cancels delivery of earlier concurrent group replies](https://github.com/openclaw/openclaw/issues/92186) — WhatsApp replies visible in dashboard but never delivered.
- [Issue #117609 — Transient LLM/socket errors not retried at embedded-assistant stage](https://github.com/openclaw/openclaw/issues/117609) — Long multi-step turns die whole on a single transient error.
- [Issue #117209 — Sticky `AuthProfileStoreUnreadable` after runtime snapshot publication failure](https://github.com/openclaw/openclaw/issues/117209) — WeCom/agent replies fail until gateway restart.
- [Issue #119333 — `request_user_input` exposed in Default mode but rejected at runtime](https://github.com/openclaw/openclaw/issues/119333) — Codex harness/tool-description mismatch.
- [Issue #102755 — Project won’t start on Windows/WSL on second build](https://github.com/openclaw/openclaw/issues/102755) — Beta release blocker marked **Yes**.

### Notable Fix PRs in Flight

- [PR #120004 — fix(openai-completions): honor thinking off in reasoning payloads](https://github.com/openclaw/openclaw/pull/120004)
- [PR #120059 — fix(sessions): scope transcript byte stats to the active reset window](https://github.com/openclaw/openclaw/pull/120059)
- [PR #120078 — fix(codex): preserve configured MCP tools in cron runs](https://github.com/openclaw/openclaw/pull/120078)
- [PR #119819 — fix(gateway): target `requestHeartbeat` to the hook’s agentId](https://github.com/openclaw/openclaw/pull/119819)
- [PR #120083 — fix(ui): make active-run steering reliable](https://github.com/openclaw/openclaw/pull/120083)
- [PR #119976 — fix(nextcloud-talk): redact upstream error body text](https://github.com/openclaw/openclaw/pull/119976)
- [PR #119457 — fix(minimax): music download hangs under debug proxy](https://github.com/openclaw/openclaw/pull/119457)

## Feature Requests & Roadmap Signals

Top user-driven feature requests visible today:

- [Issue #7707 — Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707) — Security-focused memory provenance; likely to gain traction given rising prompt-injection concerns.
- [Issue #15032 — Per-spawn tool restrictions for sub-agents](https://github.com/openclaw/openclaw/issues/15032) — DMZ-style web search / least-privilege sub-agents; strongly tied to security hardening.
- [Issue #27445 — `announceTarget` for sub-agent completion routing](https://github.com/openclaw/openclaw/issues/27445) — Enables parent-agent orchestration of multi-step workflows.
- [Issue #88154 — Slack Modal support for interactive workflows](https://github.com/openclaw/openclaw/issues/88154) — First-class Slack form/confirmation UX.
- [Issue #44309 — One-way dispatch mode for A2A handoffs](https://github.com/openclaw/openclaw/issues/44309) — Avoids reply-back ping-pong in agent-to-agent task delivery.
- [Issue #45771 — Pace-aware rate limiting for autonomous agents](https://github.com/openclaw/openclaw/issues/45771) — Addresses Anthropic API budget burn in autonomous loops.
- [Issue #6757 — Agent-triggered context compaction (`self-compact` tool)](https://github.com/openclaw/openclaw/issues/6757) — Filed by an agent itself; likely aligned with long-term autonomous-agent goals.
- [Issue #87362 — Task flow lifecycle hook events for plugin observability](https://github.com/openclaw/openclaw/issues/87362) — Exposes internal `TaskFlowRegistryObserverEvent` to plugins.
- [Issue #6599 — `/models test-fallback` command to verify fallback chains](https://github.com/openclaw/openclaw/issues/6599) — Popular request given provider reliability issues.
- [Issue #71736 — Control UI plugin contribution slots (RFC)](https://github.com/openclaw/openclaw/issues/71736) — SDK-surface proposal for plugin-driven UI slots.

Large in-flight features on the PR side include [PR #104060 — enforce agent-scoped usage budgets](https://github.com/openclaw/openclaw/pull/104060) (closes #42475), [PR #119902 — carry execution identity into approvals](https://github.com/openclaw/openclaw/pull/119902), [PR #116794 — propagate attribution across execution runtimes](https://github.com/openclaw/openclaw/pull/116794), and [PR #105025 — Twilio RCS channel](https://github.com/openclaw/openclaw/pull/105025). The next release is likely to prioritize provider reliability fixes, compaction guardrails, and agent-scoped budget enforcement.

## User Feedback Summary

- **DeepSeek reliability is the #1 expressed pain point.** Users report silent failures, lost replies, and generic “No reply was generated…” messages, especially on Telegram ([#116277](https://github.com/openclaw/openclaw/issues/116277), [#88657](https://github.com/openclaw/openclaw/issues/88657)).
- **Desktop platform demand is strong.** Issue #75 still receives heavy engagement; Linux/Windows app gaps are a recurring complaint.
- **Power users are hitting compaction/data-loss walls.** Several P0/P1 reports describe premature compaction, ignored timeout config, and unrecoverable session failures ([#118772](https://github.com/openclaw/openclaw/issues/118772), [#115546](https://github.com/openclaw/openclaw/issues/115546), [#95553](https://github.com/openclaw/openclaw/issues/95553)).
- **Channel reliability varies significantly.** Feishu, LINE, WhatsApp, Telegram, and Nextcloud Talk all have active bug reports about lost or duplicated messages; this is hurting confidence for users relying on OpenClaw as a daily assistant.
- **Positive sentiment still exists.** [#73537](https://github.com/openclaw/openclaw/issues/73537) praises OpenClaw as “part of our daily workflow” and requests a production-readiness stability label — a sign that users want to trust it for family/business operations but need clearer maturity signals.

## Backlog Watch

Issues and PRs that appear stuck or are waiting for maintainer attention:

- [Issue #7707 — Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707) — Open since Feb, 28 comments, still `needs-maintainer-review`, `needs-product-decision`, `needs-security-review`.
- [Issue #119263 — Agent DB v14→v15 migration failure](https://github.com/openclaw/openclaw/issues/119263) — P0 upgrade blocker since Aug 4, still needs resolution despite linked PR.
- [Issue #118772 — Premature compaction token inflation](https://github.com/openclaw/openclaw/issues/118772) — P0 data-loss issue, linked PR open but not yet landed.
- [Issue #88657 — DeepSeek V4 Flash incomplete turn](https://github.com/openclaw/openclaw/issues/88657) — Open since May, still `needs-live-repro` / `needs-product-decision`.
- [Issue #90354 — Bounded/validated append semantics for memory flush](https://github.com/openclaw/openclaw/issues/90354) — Security-relevant memory guardrails, waiting on product+security review.
- [Issue #15032 — Per-spawn tool restrictions for sub-agents](https://github.com/openclaw/openclaw/issues/15032) — Open since Feb; strong security use case, still `needs-product-decision`.
- [PR #60981 — Filesystem Access Control (PathGuard)](https://github.com/openclaw/openclaw/pull/60981) — Large security PR open since Apr, flagged `stale` and `needs-real-behavior-proof`.
- [PR #61519 — CI: report circular dependencies in PRs](https://github.com/openclaw/openclaw/pull/61519) — Open since Apr, waiting on author/maintainer follow-up.
- [PR #65655 — Harden Mattermost slash callback auth](https://github.com/openclaw/openclaw/pull/65655) — Open since Apr, security fix, still `needs-proof`.
- [PR #79200 — `--message-file` flag for `openclaw message send`](https://github.com/openclaw/openclaw/pull/79200) — Open since May, waiting on author; small CLI quality-of-life fix with broad utility.

Overall, OpenClaw is in an active but backlog-heavy phase: the project is shipping many small fixes, but P0/P1 reliability issues and a long queue of maintainer-review items are the main risks to community trust.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — Personal AI Assistant / Agent Open Source Ecosystem
**Date:** 2026-08-07 | **Coverage:** 12 projects, 24-hour digest window

---

## 1. Ecosystem Overview

The personal AI assistant ecosystem remains dominated by the "Claw" family — OpenClaw and its derivatives (NanoClaw, PicoClaw, IronClaw, ZeroClaw, CoPaw, NullClaw, ZeptoClaw) — which collectively account for the bulk of issue/PR volume and define the shared architectural vocabulary (gateways, channels, hooks, compaction, sub-agents). A second cluster of independent projects (NanoBot, Hermes Agent, LobsterAI) pursues differentiated niches: lightweight Python self-hosting, research-grade desktop agents, and Windows-first consumer UX respectively. Across all active projects, the dominant themes are **provider reliability** (DeepSeek, Bedrock, Qwen), **context/compaction data integrity**, **channel plugin fragility**, and **rising security expectations** (secret hygiene, workspace isolation, memory provenance). The ecosystem is shipping steadily — IronClaw released v1.1.0, ZeroClaw runs a structured v0.8.5 weekly stabilization line, CoPaw is in 2.1.0 beta — but every high-activity project carries open P0/P1 issues, indicating velocity is outpacing hardening.

---

## 2. Activity Comparison

*Health score = composite of merge velocity, open-bug severity, maintainer responsiveness, and backlog hygiene (1–10).*

| Project | Issues updated (24h) | PRs updated (24h) | Release in window | Health | Key signal |
|---|---|---|---|---|---|
| OpenClaw | 500 (432 open) | 500 (98 merged) | None | 6/10 | Massive volume; P0 DB migration + compaction data-loss blockers; maintainer review bottleneck |
| Hermes Agent | 50 (48 open) | 50 (4 merged) | None | 6/10 | Strong refactoring; Feishu approval cluster unresolved for months |
| IronClaw | 50 (27 open) | 50 (17 merged) | **v1.1.0** (Aug 6) | 7/10 | First stable since 1.0.0; QA bug-bash phase with many open P2s |
| CoPaw | 34 (17 open) | 50 (30 merged) | None (2.1.0b1/b2 live) | 6/10 | High turnover but core regressions: `run_tool_batch` broken, infinite-loop bug |
| ZeroClaw | 31 (9 closed) | 50 (5 merged) | None (v0.8.5 line) | 8/10 | Most mature governance; S0 security fix merged; SOP bug cluster emerging |
| NanoBot | 10 (9 open) | 17 (5 merged) | None | 7/10 | Focused hardening; security PRs in flight (API-key leaks, session workspace) |
| NanoClaw | 2 (1 closed) | 14 (8 merged) | None | 7/10 | Steady maintenance; transactional-update fix pending |
| LobsterAI | 5 (all open) | 2 (0 merged) | None | 4/10 | 4-month-old stale issues/PRs; no merge velocity |
| PicoClaw | 0 | 2 (1 closed) | None | 7/10 | Quiet/stable; one feature PR (model fallback) in review |
| NullClaw | 0 | 0 | None | 1/10 | Dormant |
| Moltis | 0 | 0 | None | 1/10 | Dormant |
| ZeptoClaw | 0 | 0 | None | 1/10 | Dormant |

**Volume ratios:** OpenClaw's 500/500 daily updates represent roughly **10× the next tier** (Hermes, IronClaw, CoPaw, ZeroClaw at ~31–50) and **50× the long tail**. Three projects are effectively dormant.

---

## 3. OpenClaw's Position

**Advantages:**
- **Uncontested community scale.** 500 issues + 500 PRs updated daily vs. ~50 for the next busiest project; 98 PRs merged/closed in 24h. No peer approaches this contributor velocity.
- **Reference implementation status.** As the "core reference," it defines ecosystem patterns — gateway architecture, hook-based plugin system, channel adapters, compaction semantics — that derivatives (NanoClaw, PicoClaw, ZeroClaw, CoPaw) explicitly or implicitly follow.
- **Broadest channel coverage.** Feishu, LINE, WhatsApp, Telegram, WebChat, Nextcloud Talk, Slack, WeCom — more platform adapters than any competitor, though reliability varies.
- **Strong investment in audit/attribution infrastructure** (5-PR execution-attribution stack, gateway heartbeat targeting, doctor diagnostics) — an enterprise-grade concern most peers lack.

**Technical approach differences:**
- Gateway-centric routing with `requestHeartbeat` targeting per-agentId, canvas/A2UI asset hosting, and a typed-hook plugin system with developer UX warnings — a more formally layered architecture than NanoBot's WebUI-first or IronClaw's WASM-tool approach.
- **Community demand signal:** Issue #75 (Linux/Windows desktop apps) at 116 comments / 80 👍 shows unmet platform demand that derivatives could exploit.

**Risks:**
- **P0/P1 backlog is the ecosystem's largest trust liability:** DB v14→v15 migration failure (#119263), premature compaction/data loss (#118772), and DeepSeek silent-reply failures (#116277, 114 comments) dominate user sentiment.
- Maintainer review capacity is the binding constraint; security-relevant items (memory trust tagging #7707, PathGuard PR #60981) have waited months.

---

## 4. Shared Technical Focus Areas

Requirements emerging independently across multiple projects:

| Focus area | Projects | Specific needs |
|---|---|---|
| **Provider reliability & fallback** | OpenClaw, CoPaw, ZeroClaw, PicoClaw, IronClaw | DeepSeek silent failures/`reasoning_content` loss (OpenClaw #116277, CoPaw #6667); Bedrock Nova 2 `cachePoint` rejection (ZeroClaw #8720); configurable fallback chains with cooldown (PicoClaw #3200, CoPaw #6659); `/models test-fallback` verification (OpenClaw #6599) |
| **Context/compaction integrity** | OpenClaw, Hermes, CoPaw, IronClaw | Token inflation causing premature compaction (OpenClaw #118772); compaction handoff becoming active turn (Hermes #80696); empty responses and 400 tool-role errors in long sessions (CoPaw #6601/#6726); long-output timeouts (IronClaw #5776) |
| **Channel reliability** | OpenClaw, NanoBot, Hermes, IronClaw, CoPaw, NanoClaw, ZeroClaw | Feishu decoding/approval failures (OpenClaw, Hermes); Matrix auto-join/thread semantics (NanoBot); Slack DM delivery/disconnect (IronClaw); Telegram media-only drops + reply detection (NanoClaw); QQ quoted replies (CoPaw); Telegram group per-user sessions (ZeroClaw) |
| **Security & isolation** | NanoBot, Hermes, OpenClaw, ZeroClaw | Session history inside workspace sandbox (NanoBot #5278); API-key leaks to subprocesses/env (NanoBot #5269/70, Hermes #77164); memory trust/provenance vs. prompt injection (OpenClaw #7707); pipeline tool-gating bypass — **S0** (ZeroClaw #9737); verifiable-intent credential-chain gap (ZeroClaw #9328) |
| **MCP lifecycle management** | CoPaw, Hermes, IronClaw, OpenClaw | Tools failing until restart (CoPaw #6732); null-`args` crash loops (Hermes #80652); configurable timeouts (CoPaw #6724); MCP tool preservation in cron (OpenClaw #120078); opt-in stdio command allowlist (Hermes #62808); stateless 2026-07-28 spec support (CoPaw #6761) |
| **Agent-to-agent orchestration** | ZeroClaw, OpenClaw, CoPaw, NanoBot | Outbound A2A client (ZeroClaw #9106); sub-agent completion routing to parent (`announceTarget`, OpenClaw #27445); one-way dispatch vs. reply ping-pong (OpenClaw #44309); cron+subagent workflows (NanoBot #4290) |
| **Observability & cost control** | NanoBot, Hermes, IronClaw, OpenClaw | Per-request token accounting (NanoBot #5266); desktop cost analytics (Hermes #77221-23); Operator/Inspector diagnostics (IronClaw #7235-7277); execution attribution/audit (OpenClaw PR stack) |
| **Update/upgrade safety** | NanoClaw, OpenClaw, ZeroClaw, CoPaw | Transactional upgrades protecting DB/config (NanoClaw #3195); upgrade-blocking DB migration (OpenClaw #119263); structured breaking-change queue (ZeroClaw #7432); atomic agent-config persistence on shared filesystems (CoPaw #6767) |
| **Desktop & UI coverage** | OpenClaw, Hermes, CoPaw | Linux/Windows native apps (OpenClaw #75); desktop panel/feature parity (Hermes #79407); desktop CI verification after editor switch (CoPaw #6766) |

---

## 5. Differentiation Analysis

| Project | Positioning | Target users | Technical architecture / focus |
|---|---|---|---|
| **OpenClaw** | General-purpose personal AI assistant core | Prosumers, self-hosters, multi-channel power users | Gateway + plugin channels + canvas/A2UI; broad provider matrix; hook-based plugins; execution attribution |
| **Hermes Agent** | Research-grade desktop agent (Nous Research) | Power users, desktop-centric, xAI ecosystem | 0.20.x line; Grok/xAI feature parity; god-file sharding; desktop remote/cloud parity; plugin interface expansion |
| **ZeroClaw** | Security-governed multi-agent runtime | Ops/SRE-minded self-hosters, multi-agent deployments | Rust (clippy/cargo); SOP engine; A2A server; verifiable intents; RFC-driven governance; eval-suite gating |
| **CoPaw** | Qwen/Tongyi ecosystem agent (AgentScope) | Chinese-speaking users; QQ/WeChat/OneBot channels | Python/AgentScope lifecycle; ReMe memory; model fallback with cooldown; shared-filesystem hardening |
| **IronClaw** | Production operations agent (Near AI) | Teams, QA-driven deployments | WASM tools; Operator/Inspector diagnostics; IronHub deep links; Docker/Railway sandbox profiles; Nostr host functions; v1.1.0 stable |
| **NanoBot** | Lightweight Python self-hosted assistant | Hobbyists; Matrix/Weixin users | WebUI-first; session/temp isolation; gzip precompressed assets; drag-and-drop UX; temporary chat mode |
| **NanoClaw** | Skill-centric personal agent | End users on Telegram/CLI | Skill-owned capabilities; transactional updates; host seams; native credential proxy |
| **PicoClaw** | Minimal edge/embedded agent (Sipeed) | Hardware tinkerers, lightweight deployments | Small footprint; QQ multimedia; configurable model fallback chain |
| **LobsterAI** | Windows-first consumer assistant (Youdao) | Non-technical Chinese-speaking users | PowerShell 5.1 runtime; local gateway management; workspace file conventions |

**Key architectural cleavages:** Rust + policy engine (ZeroClaw) vs. Python + lifecycle framework (CoPaw, NanoBot) vs. gateway/plugin monolith (OpenClaw, Hermes) vs. WASM-sandboxed tools (IronClaw). ZeroClaw is the only project with formalized release lines and security severity (S0) handling; IronClaw is the only one to ship a stable release in-window.

---

## 6. Community Momentum & Maturity

**Tier 1 — High-velocity iteration (release trains / major refactors):**
- **IronClaw** — Shipped v1.1.0; deep QA bug-bash with 17 merges/24h; Operator/Inspector feature line moving in parallel.
- **ZeroClaw** — Most mature process: v0.8.5 weekly stabilization, v0.9.0 breaking-change queue, S0 fix merged same-window; SOP bug cluster is the near-term risk.
- **CoPaw** — 30 PRs merged/24h in 2.1.0 beta; very fast issue closure, but core regressions (batch tool API, infinite loops) undermine confidence.
- **OpenClaw** — Extreme volume but blocker-heavy; 98 merges/24h yet P0s linger; momentum without stabilization.
- **Hermes Agent** — Sustained refactoring (god-file sharding epic) plus desktop fixes; platform-specific regressions accumulate.

**Tier 2 — Steady maintenance:**
- **NanoBot** — Focused hardening with responsive maintainers (Matrix auto-join fixed in-window); moderate volume, good fix-PR coverage.
- **NanoClaw** — Consistent merge cadence (8 merged/24h); small project, real-world-driven bug discovery.

**Tier 3 — Maintenance-only / slowing:**
- **PicoClaw** — No issues, one feature PR; stable but low engagement.
- **LobsterAI** — Warning signs: 4-month-old stale PRs with merge conflicts, no merges in window, all 5 issues open.

**Tier 4 — Dormant:** NullClaw, Moltis, ZeptoClaw — zero activity; likely abandoned or frozen.

---

## 7. Trend Signals

**For AI agent developers and platform decision-makers:**

1. **Provider-specific failure modes are the #1 trust killer.** DeepSeek silent replies dominate two projects' user feedback simultaneously (OpenClaw #116277, CoPaw #6667). Expect demand for provider-agnostic response validation, fallback chains with cooldown, and explicit test-fallback tooling (`/models test-fallback`).

2. **Context lifecycle is the new reliability frontier.** Token-accounting bugs causing premature compaction, stale-session 400 errors, and compaction-handoff corruption are now P0/P1 across four projects. Bounded, validated append semantics and transactional context ops will become table stakes.

3. **Security moved from feature to requirement.** API-key leaks, workspace-boundary violations, memory-poisoning vectors, and pipeline authorization bypasses (S0 in ZeroClaw) are being filed and fixed at a rate unseen in previous cycles. Memory provenance/trust tagging and child-process secret scrubbing are the next must-haves.

4. **A2A interop is emerging bottom-up.** Inbound A2A servers exist; outbound clients (ZeroClaw #9106), sub-agent completion routing (OpenClaw #27445), and one-way dispatch modes are the next layer. Multi-agent orchestration semantics are still undefined — an open design space.

5. **Agent self-maintenance is arriving.** Agents filing issues for self-compaction tools (#6757) and autonomous context-management requests indicate the community is pushing toward agents that manage their own context windows.

6. **Channel plugins are the highest-friction integration surface.** Slack, Telegram, Matrix, Feishu, WeChat, and QQ all show recurring delivery/decoding/reply-semantics bugs. Platform adapters need first-class retry, health-check, and thread-semantic support, not just message plumbing.

7. **Cost/token observability demand spikes as autonomous usage grows.** Users report "burning huge token volumes without visible activity" (NanoBot #5266); desktop cost surfaces and per-call accounting are being requested across projects.

8. **Governance is becoming a bottleneck.** ZeroClaw's RFC queue and OpenClaw's `needs-maintainer-review` backlog show community contribution outpacing maintainer capacity. Projects with structured release lines (ZeroClaw, IronClaw) are weathering this better than those relying on ad-hoc triage.

9. **Update safety is a production-readiness gate.** Transactional upgrades, migration fallbacks, and breaking-change queues are emerging as adoption requirements as these tools move from experiments to daily operations.

---

*Data sources: 2026-08-07 community digests for OpenClaw, NanoBot, Hermes Agent, PicoClaw, NanoClaw, NullClaw, IronClaw, LobsterAI, Moltis, CoPaw, ZeptoClaw, ZeroClaw. All issue/PR references are as numbered in source digests.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

## 1. Today's Overview

Nanobot saw sustained, high-velocity activity in the last 24 hours: 10 issues were updated (9 open, 1 closed) and 17 PRs were updated (12 open, 5 closed/merged), with no new releases published. The project appears to be in a focused bug-fixing and hardening phase, with heavy work around session data integrity, API-key isolation, Matrix/Weixin channel compatibility, and WebUI polish. Several security-oriented PRs are in flight, including API-key leak fixes (#5269, #5270), alongside functional fix PRs for session retention (#5272) and attachment staging (#5268). A new security issue was also opened today around session history placement inside the agent workspace (#5278). Overall, the project is highly active but carries a substantial open review queue.

## 2. Releases

No new releases were published in this window. There are no changelog entries, breaking changes, or migration notes to report.

## 3. Project Progress

Five PRs were closed/merged in the window, spanning WebUI features, performance, and Matrix compatibility:

- [#5261 feat(webui): drag sidebar sessions](https://github.com/HKUDS/nanobot/pull/5261) — Adds drag-to-composer session mentions and drag-to-reorder sidebar sessions.
- [#5248 fix(matrix): send non-empty POST body on room join for Continuwuity compatibility](https://github.com/HKUDS/nanobot/pull/5248) — Resolves the Matrix auto-join failure reported in [#5247](https://github.com/HKUDS/nanobot/issues/5247).
- [#5267 fix(webui): tighten interactive motion](https://github.com/HKUDS/nanobot/pull/5267) — Aligns WebUI transition timing and respects reduced-motion preferences.
- [#5259 fix(webui): enforce memory-only temporary sessions](https://github.com/HKUDS/nanobot/pull/5259) — Keeps temporary chat state out of session history, transcripts, and automatic memory.
- [#5262 perf(webui): reduce cold-start payload](https://github.com/HKUDS/nanobot/pull/5262) — Adds precompressed gzip assets, leaner Markdown/code-highlighting chunks, and SPA fallback handling.

Also, the closed issue [#5247 Matrix bot does not auto-join when invited to a room](https://github.com/HKUDS/nanobot/issues/5247) was resolved by #5248.

## 4. Community Hot Topics

Comment activity is relatively low across the current issue set, but a few items stand out:

- [#5198 [Bug] Not possible to change models in a specific session unless reconfiguring the entire instance](https://github.com/HKUDS/nanobot/issues/5198) — 3 comments. Users want per-session model switching, but the UI model blip appears inert and the `/model` command does not behave as expected.
- [#4290 cronjob ends early when there's a subagent spawned](https://github.com/HKUDS/nanobot/issues/4290) — 2 comments. A workflow-blocking bug where the main agent never processes the subagent result, causing subsequent steps to fail.
- [#5276 Allow enforcing session-level temporary file isolation](https://github.com/HKUDS/nanobot/issues/5276) — 1 comment. Users need stronger per-session sandboxing of temporary files even with `restrictToWorkspace` and `bwrap` enabled.

Underlying needs: more user control over model selection per conversation, reliable autonomous cron/subagent composition, and stricter isolation in shared workspace environments.

## 5. Bugs & Stability

Ranked by severity within this window:

- **High / Security — [#5278 Session history should not live inside the agent workspace](https://github.com/HKUDS/nanobot/issues/5278)**  
  Newly opened. Session storage was moved to `<workspace>/sessions/`, weakening workspace sandbox boundaries and potentially exposing session history through model-accessible paths. No fix PR yet.

- **High / Security — [#5276 Allow enforcing session-level temporary file isolation](https://github.com/HKUDS/nanobot/issues/5276)**  
  The global `~/.nanobot/workspace` is read/write by all sessions; shared state is useful for skills but problematic for multi-session/multi-user isolation. No fix PR yet.

- **High / Data integrity — [#5273 Session retention trimming drops proactive channel delivery messages](https://github.com/HKUDS/nanobot/issues/5273)**  
  Background cron/job delivery messages are lost when session trimming enforces token/message/file caps. Fix PR exists: [#5272 fix(session): preserve proactive channel delivery during session retention trimming](https://github.com/HKUDS/nanobot/pull/5272).

- **Medium / Workflow — [#4290 cronjob ends early when there's a subagent spawned](https://github.com/HKUDS/nanobot/issues/4290)**  
  Main agent does not resume after subagent completion, breaking workflows. No fix PR observed.

- **Medium / UX — [#5198 Model switching not possible per session](https://github.com/HKUDS/nanobot/issues/5198)**  
  Model selection is effectively fixed per instance except as fallback. No fix PR observed.

- **Medium / Channel — [#5274 Matrix replies should use the reply feature](https://github.com/HKUDS/nanobot/issues/5274) and [#5275 Matrix “reply in thread” should create a dedicated context](https://github.com/HKUDS/nanobot/issues/5275)**  
  Bot responses do not respect Matrix reply/thread semantics consistently. No fix PR yet.

- **Medium / API — [#5264 /api/sessions/{key}/messages never returns media_urls for files outside the media root](https://github.com/HKUDS/nanobot/issues/5264)**  
  History endpoint drops signed media URLs after refresh. Fix PR exists: [#5268 fix(webui): stage out-of-media-root attachments on history reads](https://github.com/HKUDS/nanobot/pull/5268).

Other important open fix PRs in review:

- [#5271 fix(session): prevent stale background task saves from overwriting session data](https://github.com/HKUDS/nanobot/pull/5271)
- [#5270 fix(cli): stop leaking API keys to CLI app subprocesses](https://github.com/HKUDS/nanobot/pull/5270)
- [#5269 fix(providers): stop writing API keys into process os.environ](https://github.com/HKUDS/nanobot/pull/5269)
- [#5265 fix(tools): reject non-finite number parameters](https://github.com/HKUDS/nanobot/pull/5265)
- [#5263 fix(weixin): harden protocol delivery, streaming, and login](https://github.com/HKUDS/nanobot/pull/5263)

## 6. Feature Requests & Roadmap Signals

Clear feature signals from issues and open PRs:

- **Token observability — [#5266 [enhancement] Logs about token consumption](https://github.com/HKUDS/nanobot/issues/5266)**  
  Users report burning huge token volumes without visible activity and want per-call token accounting.

- **Session/temp isolation — [#5276 Allow enforcing session-level temporary file isolation](https://github.com/HKUDS/nanobot/issues/5276)**  
  A recurring theme around workspace boundaries, privacy, and multi-session security.

- **Matrix threading semantics — [#5274](https://github.com/HKUDS/nanobot/issues/5274) and [#5275](https://github.com/HKUDS/nanobot/issues/5275)**  
  Users want Matrix conversations to behave like Discord/Slack threads, including proper reply and separate thread context handling.

Open feature PRs likely to influence the next release:

- [#5231 feat(memory): archive idle sessions for Dream](https://github.com/HKUDS/nanobot/pull/5231)
- [#5234 feat(agent): integrate mst-python as a metasearch provider](https://github.com/HKUDS/nanobot/pull/5234)
- [#5252 feat(webui): add temporary chat mode](https://github.com/HKUDS/nanobot/pull/5252)
- [#5253 feat(webui): add shared interactive project terminal](https://github.com/HKUDS/nanobot/pull/5253)
- [#5277 feat(webui): add responsive model preset detail pane](https://github.com/HKUDS/nanobot/pull/5277)

Given the cluster of WebUI feature PRs and the memory/provider work, the next version is likely to include temporary chat mode, UI model-preset improvements, Dream idle-session archiving, and possibly the metasearch provider integration.

## 7. User Feedback Summary

User pain points in this window are concentrated around control, transparency, and isolation:

- Frustration with not being able to switch models per session, especially compared to commercial SaaS UIs (#5198).
- Concern over unexplained token consumption and lack of per-request cost visibility (#5266).
- Workflow breakage in cron-driven multi-agent runs, where subagent results are ignored (#4290).
- Need for Matrix reply/thread behavior to match other channels (#5274, #5275).
- Security expectations around session history and temporary files, especially in multi-session or shared-workspace deployments (#5276, #5278).
- Loss of proactive channel notifications during session trimming (#5273).

Satisfaction indicators are indirect but positive: maintainers are actively responding with fix PRs, and the Matrix auto-join issue was closed in this window via #5248. Still, the volume of open security and data-integrity issues suggests users are pushing the project toward stronger isolation guarantees and better operational observability.

## 8. Backlog Watch

The most important long-running open item is:

- [#4290 cronjob ends early when there's a subagent spawned](https://github.com/HKUDS/nanobot/issues/4290)  
  Created Jun 10, 2026; last updated Aug 6, 2026. This is the oldest unresolved workflow bug and has no visible fix PR. It deserves maintainer triage and prioritization.

Other items needing attention:

- [#5198 Not possible to change models in a specific session](https://github.com/HKUDS/nanobot/issues/5198)  
  Created Jul 31; still open with 3 comments and no fix PR.

- [#5231 feat(memory): archive idle sessions for Dream](https://github.com/HKUDS/nanobot/pull/5231)  
  Open since Aug 3 with no visible review activity.

- [#5234 feat(agent): integrate mst-python as a metasearch provider](https://github.com/HKUDS/nanobot/pull/5234)  
  Open since Aug 3, marked priority p1, but no visible review activity.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-07

## 1. Today's Overview

Activity is high: 50 issues and 50 PRs were updated in the last 24 hours, with 48 issues open/active and 46 PRs open; 4 PRs were closed or merged. No release was published, so momentum is focused on stabilizing the current 0.20.x line and executing the repo-wide god-file sharding campaign. The busiest threads are architectural — god-file decomposition, plugin interface expansion, and Grok/xAI parity — while the most urgent open fix-PRs target cron job loss, Telegram reconnect wedges, and compression handoff bugs. Maintainer responsiveness is visible in several desktop/remote fixes closed today, but the long-running Feishu approval-button failure cluster remains unresolved. Overall project health is mixed: strong refactoring and security work is landing, but platform-specific regressions and duplicated bug reports are accumulating.

## 2. Releases

None. No new releases were published in the last 24 hours, so there are no changelog entries, breaking changes, or migration notes to report.

## 3. Project Progress

Four PRs were closed/merged in the last 24 hours; three are visible in the sampled data:

- [PR #80699 — fix(desktop): The desktop's tools reach it on remote and cloud backends too](https://github.com/NousResearch/hermes-agent/pull/80699) — Closed. Removed `HERMES_DESKTOP=1` gating that stripped desktop-only pane, in-app browser, and reaction tools from remote/cloud gateway sessions. This directly addresses a desktop parity regression.
- [PR #80702 — fix(desktop): render agent reactions live](https://github.com/NousResearch/hermes-agent/pull/80702) — Closed. Routes live `message.reaction` updates through the owning runtime's authoritative session state so agent reactions render without reload.
- [PR #80422 — Fireworks user agent](https://github.com/NousResearch/hermes-agent/pull/80422) — Closed. Provider compatibility fix, though the sampled summary is empty.

High-value fix PRs still open and under review:

- [PR #80703 — fix(cron): recover jobs a sibling process wrote during unlocked jobs.json save](https://github.com/NousResearch/hermes-agent/pull/80703) — P1, prevents cron jobs disappearing.
- [PR #80700 — fix(gateway): recover Telegram after fatal disconnect wedge](https://github.com/NousResearch/hermes-agent/pull/80700) — P1, prevents reconnect watcher from having nothing to retry.
- [PR #80696 — fix(agent): stop reference-only compaction handoff from becoming the active turn](https://github.com/NousResearch/hermes-agent/pull/80696) — P1, prevents stale task resumption.
- [PR #80706 — fix(run_agent): release owned SessionDB connection on agent close](https://github.com/NousResearch/hermes-agent/pull/80706) — Fixes SQLite connection/fd leak observed in desktop/isolated backends.
- [PR #80704 — fix(gateway): bound Slack channel-directory startup resolution](https://github.com/NousResearch/hermes-agent/pull/80704) — Fixes slow serial `conversations.info`/`users.info` startup for large Slack installs.

## 4. Community Hot Topics

The most active discussions by comment count — all show 0 👍 reactions, so engagement is driven by long threads rather than reactions:

- [Issue #78647 — Epic: Shard all 20 god files — repo-wide god-file decomposition](https://github.com/NousResearch/hermes-agent/issues/78647) — 51 comments. The central refactoring epic; establishes the 2026-08 policy that god files must be sharded and never reverted.
- [Issue #64182 — Tracking: Plugin Interface Expansion — community ideas, July 2026](https://github.com/NousResearch/hermes-agent/issues/64182) — 27 comments. Reference plan for a stable plugin interface so long-queued contributor PRs can ship.
- [Issue #78645 — Shard agent/context_compressor.py (god-file decomposition)](https://github.com/NousResearch/hermes-agent/issues/78645) — 19 comments. Specific 6,789-line god-file work item with model-first slicing expectations.
- [Issue #80424 — Grok/xAI Feature Parity & Alignment Campaign](https://github.com/NousResearch/hermes-agent/issues/80424) — 9 comments. Meta-issue for aligning Hermes's Grok/xAI surface with the official xAI developer platform.
- [Issue #79407 — [0.20.0 Regression] Desktop bottom operation panel completely missing](https://github.com/NousResearch/hermes-agent/issues/79407) — 8 comments. Users describe the desktop app as a "viewer-only shell" after upgrading.
- [Issue #78637 — Shard hermes_cli/auth.py (god-file decomposition)](https://github.com/NousResearch/hermes-agent/issues/78637) — 8 comments. Another 9,180-line god-file refactor.
- [Issue #7675 — [Feishu] Three issues: card interaction handling, approval buttons, streaming card reply](https://github.com/NousResearch/hermes-agent/issues/7675) — 8 comments. Long-standing Feishu platform bug cluster.

Underlying needs: maintainability pressure from oversized files, contributor desire for stable plugin APIs, desktop feature parity, and repeated Feishu integration pain.

## 5. Bugs & Stability

Ranked by severity/impact:

**P1 fixes in flight:**

- [PR #80703 — fix(cron): recover jobs a sibling process wrote during unlocked jobs.json save](https://github.com/NousResearch/hermes-agent/pull/80703) — Cron jobs disappear while gateway is running; root cause is cross-process `flock` degradation.
- [PR #80700 — fix(gateway): recover Telegram after fatal disconnect wedge](https://github.com/NousResearch/hermes-agent/pull/80700) — Telegram can wedge on fatal disconnect, leaving `_failed_platforms` empty and nothing to reconnect.
- [PR #80696 — fix(agent): stop reference-only compaction handoff from becoming the active turn](https://github.com/NousResearch/hermes-agent/pull/80696) — A `[CONTEXT COMPACTION — REFERENCE ONLY]` handoff can become the sole active user turn and resume stale snapshot work.

**P2 regressions and bugs:**

- [Issue #79407 — Desktop bottom operation panel completely missing in 0.20.0](https://github.com/NousResearch/hermes-agent/issues/79407) — Marked duplicate, but high user impact; app becomes viewer-only.
- [Issue #80646 — `agent_context` hardcoded to "primary"; provider context-skip logic is dead code](https://github.com/NousResearch/hermes-agent/issues/80646) — Affects memory-provider contract for cron/flush/subagent contexts.
- [Issue #80259 — Message reactions gated off for remote-desktop sessions](https://github.com/NousResearch/hermes-agent/issues/80259) — Fixed by closed PR #80699.
- [Issue #80652 — MCP stdio bridge crashes when `args` is null in config](https://github.com/NousResearch/hermes-agent/issues/80652) — TypeError on every connection attempt; `connecting -> parked` loop.
- [Issue #79628 — `use_gateway: true` discards valid direct credential when Tool Gateway is unauthenticated](https://github.com/NousResearch/hermes-agent/issues/79628) — Error message tells users to set the exact credential they already have.
- [Issue #74411 — Desktop SSH version-check uses wrong argument order, falsely claims flags unsupported](https://github.com/NousResearch/hermes-agent/issues/74411) — Blocks Desktop SSH on git/source installs.
- [Issue #79339 — Memory provider `sync_turn()` never called in 0.20](https://github.com/NousResearch/hermes-agent/issues/79339) — P3 label but serious: external memory backends silently stop receiving completed turns.

**Feishu approval-button failure cluster (P2):**

- [Issue #13924 — Feishu approval buttons return error 220340](https://github.com/NousResearch/hermes-agent/issues/13924)
- [Issue #25886 — Feishu/Lark card authorization buttons fail with error 200343](https://github.com/NousResearch/hermes-agent/issues/25886)
- [Issue #38305 — Feishu error 200340 persists in v0.15.2; PR #10256 needs merge](https://github.com/NousResearch/hermes-agent/issues/38305)
- [Issue #10073 — Feishu mobile approval card returns error 200340](https://github.com/NousResearch/hermes-agent/issues/10073)

**Security bugs (P3 but sensitive):**

- [Issue #77164 — child-process env scrub is name-shape heuristic; non-credential-shaped secrets leak to children](https://github.com/NousResearch/hermes-agent/issues/77164)
- [Issue #77484 — emission gaps: raw process(list), traceback in tool result, `*_KEY` regex miss, control-char split, ACP plain formatter](https://github.com/NousResearch/hermes-agent/issues/77484)
- [Issue #77162 — exact-value applied-secret redaction missing on tool-result → provider egress path](https://github.com/NousResearch/hermes-agent/issues/77162)

## 6. Feature Requests & Roadmap Signals

Strong roadmap signals from active feature issues and PRs:

- [Issue #64182 — Plugin Interface Expansion](https://github.com/NousResearch/hermes-agent/issues/64182): community-driven plan to unblock contributor PRs; likely to shape the next plugin API iteration.
- [Issue #80424 — Grok/xAI Feature Parity campaign](https://github.com/NousResearch/hermes-agent/issues/80424): broad push toward full xAI compatibility including reasoning, streaming, imagine, voice/TTS.
- [Issue #77221 — Desktop app has no local token/cost analytics surface](https://github.com/NousResearch/hermes-agent/issues/77221): core metering exists, but desktop UI lacks it.
- [Issue #77222 — Add per-day token/cost time-series aggregation to InsightsEngine](https://github.com/NousResearch/hermes-agent/issues/77222)
- [Issue #77223 — Surface included/estimated/unknown cost buckets in aggregate views](https://github.com/NousResearch/hermes-agent/issues/77223)
- [Issue #70849 — Support per-job `deliver_profile` for multiplexed gateway cron delivery](https://github.com/NousResearch/hermes-agent/issues/70849)

Open feature PRs that are strong candidates for the next minor release:

- [PR #80701 — feat(streaming): cap a streaming response's total lifetime](https://github.com/NousResearch/hermes-agent/pull/80701) — Closes the drip-fed-stream failure mode.
- [PR #80633 — feat(providers): support `auth_type: none` for no-auth provider profiles](https://github.com/NousResearch/hermes-agent/pull/80633)
- [PR #80694 — feat(desktop): add status bar reconnect for offline gateways](https://github.com/NousResearch/hermes-agent/pull/80694)
- [PR #80708 — feat(skills): add bundled grill-me skill](https://github.com/NousResearch/hermes-agent/pull/80708)
- [PR #80627 — fix(gateway): agent_passthrough_commands + clearable Telegram menu](https://github.com/NousResearch/hermes-agent/pull/80627)

Prediction: the next release will likely fold in the streaming lifetime cap, no-auth provider support, desktop reconnect, and at least one bundled skill. The Feishu approval-button fix is a patch-candidate, but only if maintainers finally merge the long-cited PR #10256.

## 7. User Feedback Summary

Real user pain points visible in the last 24 hours:

- **Upgrade regression:** 0.20.0 desktop users report the bottom operation panel disappearing entirely, making the app a "viewer-only shell" ([#79407](https://github.com/NousResearch/hermes-agent/issues/79407)).
- **Silent behavior change:** External memory providers "silently stop receiving completed turns" after 0.20 with no error ([#79339](https://github.com/NousResearch/hermes-agent/issues/79339)).
- **Feishu approval flow:** Users repeatedly blocked by approval-card errors across versions, mobile, and desktop ([#7675](https://github.com/NousResearch/hermes-agent/issues/7675), [#13924](https://github.com/NousResearch/hermes-agent/issues/13924), [#25886](https://github.com/NousResearch/hermes-agent/issues/25886), [#38305](https://github.com/NousResearch/hermes-agent/issues/38305)).
- **SSH source-install users:** False "does not support --ssh-session-token-file" error blocks Desktop SSH despite an up-to-date install ([#74411](https://github.com/NousResearch/hermes-agent/issues/74411)).
- **Remote/cloud desktop users:** Lost tools and reactions due to `HERMES_DESKTOP` env gating; fixed by [PR #80699](https://github.com/NousResearch/hermes-agent/pull/80699).
- **MCP minimal configs:** Null `args` causes a crash loop, not a configuration error ([#80652](https://github.com/NousResearch/hermes-agent/issues/80652)).
- **Gateway scalability:** Slack startup channel-directory resolution is slow for large installs — one production install had 911 IDs ([#80704](https://github.com/NousResearch/hermes-agent/pull/80704)).
- **Custom email domains:** IMAP/SMTP login is hardcoded to `EMAIL_ADDRESS`, breaking custom-domain aliases ([#41331](https://github.com/NousResearch/hermes-agent/issues/41331)).

Satisfaction signals are mostly negative around regressions and unmerged platform fixes, but the fast turnaround on desktop remote/cloud tool gating ([#80699](https://github.com/NousResearch/hermes-agent/pull/80699)) and reactions live rendering ([#80702](https://github.com/NousResearch/hermes-agent/pull/80702)) shows responsive maintainer attention.

## 8. Backlog Watch

Items that need maintainer attention:

- **Feishu approval-button cluster** — unresolved for months despite a cited fix PR:
  - [#7675](https://github.com/NousResearch/hermes-agent/issues/7675) — created 2026-04-11
  - [#10073](https://github.com/NousResearch/hermes-agent/issues/10073) — created 2026-04-15
  - [#13924](https://github.com/NousResearch/hermes-agent/issues/13924) — created 2026-04-22
  - [#38305](https://github.com/NousResearch/hermes-agent/issues/38305) — explicitly notes "PR #10256 provides the correct fix but remains unmerged."
- [Issue #64182 — Plugin Interface Expansion](https://github.com/NousResearch/hermes-agent/issues/64182) — Open since 2026-07-14 with 27 comments; needs maintainer decisions to unblock long-queued contributor PRs.
- [Issue #41331 — Email IMAP/SMTP login user hardcoded to EMAIL_ADDRESS](https://github.com/NousResearch/hermes-agent/issues/41331) — Open since 2026-06-07; no visible response.
- [Issue #61003 — shutdown_forensics false-positive 'Stale systemd unit' warning](https://github.com/NousResearch/hermes-agent/issues/61003) — Open since 2026-07-08.
- [PR #62808 — security: add opt-in allowlist for MCP stdio commands before spawn](https://github.com/NousResearch/hermes-agent/pull/62808) — Security hardening PR open since 2026-07-11.
- [PR #48045 — fix(tui): anchor overlay pickers above composer when status bar is bottom](https://github.com/NousResearch/hermes-agent/pull/48045) — TUI fix open since 2026-06-17; affects `/model`, `/resume`, `/skills`, `/plugins` pickers.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

## 1. Today's Overview

As of 2026-08-07, PicoClaw is in a relatively quiet maintenance and feature-integration phase: there were **0 issues updated in the last 24 hours**, **0 new releases**, and **2 PRs updated**. One PR was closed (#1349) and one remains open (#3200). There are no open bug reports or regressions in the current tracker. Overall project health appears stable, with ongoing work concentrated on model configuration and QQ channel media support rather than urgent defect fixes.

## 2. Releases

**None.**

No new PicoClaw releases were published in the last 24 hours. The latest releases list is empty, so there are no changelog details, breaking changes, or migration notes to report.

## 3. Project Progress

- **#1349 [CLOSED]** — `feat(qq): support parsing and replying to more attachment types`  
  [sipeed/picoclaw PR #1349](https://github.com/sipeed/picoclaw/pull/1349)  
  This PR was closed after being updated on 2026-08-06. It adds QQ Channel support for parsing emoji structures and handling incoming voice, image, video, and file messages. It also enables replying with local attachments by uploading before sending, and prioritizes Markdown replies with a fallback path. This advances PicoClaw's QQ/multimodal integration.

- **#3200 [OPEN]** — `feat(models): add configurable default fallback chain`  
  [sipeed/picoclaw PR #3200](https://github.com/sipeed/picoclaw/pull/3200)  
  Still open, this PR introduces a configurable default fallback chain for models in the web UI. Users would be able to set a default model, add fallback models, reorder the chain, and persist the configuration through the backend API.

## 4. Community Hot Topics

No issues or PRs currently have significant comment/reaction activity in the provided data. The two most notable PRs are:

- **#3200 — Configurable model fallback chain**  
  [sipeed/picoclaw PR #3200](https://github.com/sipeed/picoclaw/pull/3200)  
  This addresses a common operational need: ensuring model availability and reliability through automatic fallbacks. The focus on web UI configuration and backend persistence suggests users want simpler, more durable control over model routing.

- **#1349 — QQ attachment handling**  
  [sipeed/picoclaw PR #1349](https://github.com/sipeed/picoclaw/pull/1349)  
  The underlying demand is richer QQ channel interoperability, especially the ability to send and receive non-text media such as voice, images, video, and files.

## 5. Bugs & Stability

**No new bugs, crashes, or regressions were reported in the last 24 hours.**

There are no open issues in the tracker, and no stability-related fix PRs are currently visible. This suggests the project is not in a high-severity defect cycle at this time.

## 6. Feature Requests & Roadmap Signals

Two clear feature signals emerge from the active PRs:

1. **Model fallback chains** — Users want resilient model selection with a configurable default and fallback order.  
   → [`#3200`](https://github.com/sipeed/picoclaw/pull/3200)

2. **QQ multimedia message support** — Users expect voice, image, video, and file attachments to work in QQ channel conversations.  
   → [`#1349`](https://github.com/sipeed/picoclaw/pull/1349)

If these continue through review and merge, the next PicoClaw version may include both a web UI model fallback workflow and expanded QQ attachment capabilities.

## 7. User Feedback Summary

The available data contains no direct user comments or reactions to quantify sentiment. However, the open/closed PRs imply two recurring user needs:

- **Reliability:** Users want failed model calls to fall back gracefully instead of breaking conversations.
- **Platform completeness:** Users on QQ channel need more than text, including rich media send/receive support.

No explicit complaints or dissatisfaction markers were present in the last 24 hours.

## 8. Backlog Watch

- **#3200 — Configurable model fallback chain**  
  [sipeed/picoclaw PR #3200](https://github.com/sipeed/picoclaw/pull/3200)  
  This PR has been open since **2026-07-01** and was updated on 2026-08-06. It may need maintainer review, feedback, or a merge decision. Given the request touches backend persistence plus web UI behavior, it is the main item to watch for project direction.

- **#1349 — QQ attachment support**  
  [sipeed/picoclaw PR #1349](https://github.com/sipeed/picoclaw/pull/1349)  
  Now closed, but if it was closed without merging, maintainers should clarify whether the feature is deferred or superseded. No other stale issues are present in the tracker.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-07

## Today's Overview

NanoClaw saw a moderately active 24-hour maintenance window: 2 issues were updated (1 closed, 1 open) and 14 pull requests saw activity, with 8 PRs closed/merged and 6 still open. No new releases were published during this window. Activity focused on bug fixes, skill cleanup, and update-mechanism safety, suggesting a project in steady maintenance mode. The most notable risk is an open bug in `/update-nanoclaw` around non-recoverable upgrades, with a corresponding fix PR already submitted.

## Releases

No new releases exist for this digest window. There are no release notes, migration guides, or breaking-change details to report.

## Project Progress

Eight PRs were closed/merged or updated in a closed state during the last 24 hours. The highlights:

- **Skill cleanup / stale dependency removal**  
  - [PR #3172: chore(skills): remove stale qodo and Google MCP skills](https://nanocoai/nanoclaw PR #3172) — removes bundled skills that depended on an unconfigured external Qodo SaaS integration.
  - [PR #2873: fix(skills): split pre-flight from credentials so /update-skills can refresh code](https://nanocoai/nanoclaw PR #2873) — improves skill-update reliability by separating credential checks from code refresh.

- **Scheduling fixes**  
  - [PR #2678: fix(scheduling): re-arm recurrence when a run fails permanently](https://nanocoai/nanoclaw PR #2678) — failed recurring tasks now schedule future occurrences.
  - [PR #2679: fix(scheduling): surface permanently-failed scheduled tasks to the user](https://nanocoai/nanoclaw PR #2679) — turns silent scheduling failures into user-visible notices.

- **Messaging & chat-bridge fixes**  
  - [PR #2213: fix: accept media-only messages (photo/video/file without caption)](https://nanocoai/nanoclaw PR #2213) — fixes silent message drops on Telegram/Chat SDK platforms.
  - [PR #2644: fix: detect reply-to-bot in Telegram extractReplyContext](https://nanocoai/nanoclaw PR #2644) — correctly recognizes replies to the bot itself.
  - [PR #2643: fix: engage pattern/mention wirings on direct address](https://nanocoai/nanoclaw PR #2643) — makes keyword/pattern routing respond to DMs, mentions, and reply-to-bot events.

- **Identity / namespace fix**  
  - [PR #2591: fix: namespace user IDs by channel-type prefix, not bare colon](https://nanocoai/nanoclaw PR #2591) — improves user identity isolation across channels.

## Community Hot Topics

No issues or PRs in the provided data show high comment or reaction counts; all listed issues have 0 comments and PR comment data is unavailable.

The two most notable discussion clusters by activity:

1. **Update safety**  
   - Open bug: [Issue #3194: `/update-nanoclaw` can stamp success without a recoverable cutover](https://nanocoai/nanoclaw Issue #3194)  
   - Open fix: [PR #3195: fix(update): make NanoClaw upgrades transactional](https://nanocoai/nanoclaw PR #3195)  
   The underlying need is clear: users want upgrades that cannot leave the database, config, or external components in an inconsistent state.

2. **Bundled skills interfering with normal use**  
   - Closed issue: [Issue #3171: The two qodo skills depend on an integration nothing sets up and intercept normal coding requests](https://nanocoai/nanoclaw Issue #3171)  
   - Closed cleanup: [PR #3172: chore(skills): remove stale qodo and Google MCP skills](https://nanocoai/nanoclaw PR #3172)  
   This reflects user frustration with preinstalled skills that fail without external credentials and can intercept everyday coding flows.

## Bugs & Stability

Ranked by severity:

1. **High — `/update-nanoclaw` can report success after an unrecoverable change**  
   [Issue #3194](https://nanocoai/nanoclaw Issue #3194) — The updater switches the running checkout before validation, and its rollback only protects Git, not SQLite, gitignored config, or external components.  
   **Fix status:** [PR #3195](https://nanocoai/nanoclaw PR #3195) is open and proposes transactional upgrades.

2. **Medium — Bundled qodo skills depended on missing external setup**  
   [Issue #3171](https://nanocoai/nanoclaw Issue #3171) — Skills required a Qodo SaaS API key at `~/.qodo/config.json` and intercepted normal coding requests.  
   **Fix status:** Appears resolved by [PR #3172](https://nanocoai/nanoclaw PR #3172), which removes the stale qodo and Google MCP skills.

3. **Medium — Media-only messages were silently dropped**  
   [PR #2213](https://nanocoai/nanoclaw PR #2213) — Photos, videos, and files without captions never reached the agent.  
   **Fix status:** Closed/merged.

4. **Medium — Native credential proxy could silently fall back to the gateway**  
   [PR #2705](https://nanocoai/nanoclaw PR #2705) — The `use-native-credential-proxy` skill did not actually bypass OneCLI gateway and only read `process.env`.  
   **Fix status:** Still open.

5. **Low/Medium — Scheduling failures were invisible**  
   [PR #2679](https://nanocoai/nanoclaw PR #2679) — Permanently-failed scheduled tasks were logged but never surfaced to users.  
   **Fix status:** Closed/merged.

No crash-level regressions or new security bugs were reported in this window.

## Feature Requests & Roadmap Signals

Several open PRs point toward likely next-version work:

- **Tavily MCP tool skill**  
  [PR #3190: feat: add Tavily MCP tool skill](https://nanocoai/nanoclaw PR #3190) — Adds a new standalone utility skill for web/search tooling via Tavily MCP.

- **Telegram rich message support**  
  [PR #3193: fix(telegram): update Chat SDK for rich messages](https://nanocoai/nanoclaw PR #3193) — Updates the Telegram/Chat SDK layer to support richer message payloads.

- **Host seams for skill-owned capabilities**  
  [PR #3186: refactor: add host seams for skill-owned capabilities](https://nanocoai/nanoclaw PR #3186) — Architecture work to let skills own capabilities more cleanly.

- **Transactional upgrades**  
  [PR #3195: fix(update): make NanoClaw upgrades transactional](https://nanocoai/nanoclaw PR #3195) — If merged, this would be a stability-focused change likely in the next release.

Based on activity, the next NanoClaw release may include Tavily MCP support, Telegram rich-message handling, and a safer update path.

## User Feedback Summary

Real user pain points visible from this window:

- Bundled skills that do nothing without external accounts are confusing and intrusive; users want them removed or clearly optional.
- Updating NanoClaw should be reversible and should not risk database/config corruption.
- Media-only Telegram messages were being silently ignored, which is a major usability bug for chat-based agents.
- Replies to the bot and direct mentions were not reliably triggering keyword-based wiring.
- Failed scheduled tasks should be visible to users, not just logs.
- Native credential setups need to genuinely bypass the OneCLI gateway.

The overall signal is largely positive: multiple contributor PRs were closed/merged, maintainers are actively processing fixes, and the community is using real-world installs to find concrete integration bugs.

## Backlog Watch

Open PRs that may need maintainer attention, sorted by age:

- [PR #2705: fix(use-native-credential-proxy): actually bypass the OneCLI gateway](https://nanocoai/nanoclaw PR #2705) — Open since **2026-06-07**, over two months. Important for real launchd/systemd installs.
- [PR #3149: fix(cli): add --rw flag to groups config add-mount](https://nanocoai/nanoclaw PR #3149) — Open since **2026-07-29**. Small CLI usability fix.
- [PR #3186: refactor: add host seams for skill-owned capabilities](https://nanocoai/nanoclaw PR #3186) — Open since **2026-08-04**. Architectural refactor.
- [PR #3190: feat: add Tavily MCP tool skill](https://nanocoai/nanoclaw PR #3190) — Open since **2026-08-05**. New-feature skill.
- [PR #3193: fix(telegram): update Chat SDK for rich messages](https://nanocoai/nanoclaw PR #3193) — Open since **2026-08-06**. User-facing chat improvement.
- [PR #3195: fix(update): make NanoClaw upgrades transactional](https://nanocoai/nanoclaw PR #3195) — Open since **2026-08-06**. Should be prioritized because it directly addresses the open [Issue #3194](https://nanocoai/nanoclaw Issue #3194).

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-07

## Today's Overview
As of 2026-08-07, IronClaw shows very high activity: 50 issues were updated in the last 24 hours (27 still open, 23 closed) and 50 PRs were updated (33 open, 17 closed/merged). A new stable release, **ironclaw-v1.1.0**, shipped on 2026-08-06, marking the first stable version since 1.0.0. The project remains in an active QA/bug-bash phase, with many Slack, GitHub, routine reliability, and UI/UX bugs surfacing. At the same time, a substantial Operator/Inspector feature line is progressing through multiple large PRs.

## Releases
### ironclaw-v1.1.0 — released 2026-08-06
- First stable release since 1.0.0, promoting `1.1.0-rc.1` plus fixes listed under "Fixed since 1.1.0-rc.1".
- Headline work includes:
  - Registering arbitrary hosted MCP servers
  - Installing from IronHub deep links
  - Durable file attachments that cross channels
  - A Slack-related improvement (release notes excerpt truncated at "and Slac")
- No breaking changes or migration notes were included in the provided excerpt.

## Project Progress
17 PRs were closed/merged in the update window. Notable items:

- [#7235 — feat(inspector): add operator inspection API and live updates](https://github.com/nearai/ironclaw/pull/7235) *(closed)* — Adds operator-only endpoints for bounded run snapshots, prompt diagnostics, tool activity details, and a live diagnostics stream.
- [#7259 — enforce docs/ publication boundary and consolidate internal docs](https://github.com/nearai/ironclaw/pull/7259) *(closed)* — Fixes a live leak where internal `docs/design/` and `docs/research/` were reachable on the public Mintlify site.
- [#7303 — fix(docker): install curl so orchestrator healthchecks can run](https://github.com/nearai/ironclaw/pull/7303) *(closed)* — Fixes healthy staging nodes being marked `error`.
- [#7289 — fix(memory): sanitize FTS queries for libSQL recall](https://github.com/nearai/ironclaw/pull/7289) *(closed)* — Fixes natural-language persistent-memory recall on the production libSQL path.

Still-open PRs that advanced major features include:
- [#7236 — Inspector debug panel shell](https://github.com/nearai/ironclaw/pull/7236)
- [#7239 — prompt inspection and Prompt tab](https://github.com/nearai/ironclaw/pull/7239)
- [#7277 — model call statistics for Inspector](https://github.com/nearai/ironclaw/pull/7277)
- [#7157 — explicit channel delivery tool](https://github.com/nearai/ironclaw/pull/7157)
- [#7214 — Docker and Railway user sandbox profiles](https://github.com/nearai/ironclaw/pull/7214)
- [#7253 — keep custom MCP registration private and definition-only](https://github.com/nearai/ironclaw/pull/7253)

## Community Hot Topics
Most-discussed issues by comment count:

- [#5553 — Approval notifications disappear instead of remaining in notification history](https://github.com/nearai/ironclaw/issues/5553) *(open, 4 comments)* — Approval prompts flash or never appear, hurting trust in agent workflows.
- [#5702 — GitHub issue search and create capabilities fail with HTTP 403](https://github.com/nearai/ironclaw/issues/5702) *(open, 4 comments)* — GitHub integration is configured but unusable for issue operations.
- [#5522 — Reborn routine fails when task requires reading Slack DMs](https://github.com/nearai/ironclaw/issues/5522) *(open, 3 comments)* — Missing Slack read capability plus a `capability_info` retry loop.
- [#5701 — Activity panel hides tool details and does not update during active run](https://github.com/nearai/ironclaw/issues/5701) *(open, 3 comments)* — Users cannot see live tool activity.
- [#5834 — Slack disconnect request is incorrectly rejected by agent](https://github.com/nearai/ironclaw/issues/5834) *(open, 3 comments)* — No way to disconnect Slack through the agent UI.
- [#3533 — Telegram in v0.28.1 does not automatically setup from UI](https://github.com/nearai/ironclaw/issues/3533) *(closed, 3 comments)* — Older but still active thread.

Underlying needs: notification reliability, integration auth/debugging, Slack lifecycle management, and real-time observability are the dominant community concerns.

## Bugs & Stability
Ranked by severity:

### Critical / P1
- [#5877 — Slack notification delivered to the wrong user](https://github.com/nearai/ironclaw/issues/5877) *(closed)* — Privacy-sensitive workflow results sent to an unrelated recipient.
- [#5456 — Routine runs fail with runner lease expiration](https://github.com/nearai/ironclaw/issues/5456) *(open)* — 90-second inactivity threshold too aggressive for multi-tool routines; dominant failure pattern in QA.
- [#5504 — Routine creation hangs without returning result or error](https://github.com/nearai/ironclaw/issues/5504) *(closed)* — No confirmation or error after initial planning message.

### High / P2
- [#5702 — GitHub issue search/create fail with HTTP 403](https://github.com/nearai/ironclaw/issues/5702) *(open)*
- [#5836 — Routine fails on every scheduled run with "No thread attached"](https://github.com/nearai/ironclaw/issues/5836) *(open)*
- [#5834 — Slack disconnect request incorrectly rejected](https://github.com/nearai/ironclaw/issues/5834) *(open)*
- [#5522 — Slack DM read capability missing + retry loop](https://github.com/nearai/ironclaw/issues/5522) *(open)*
- [#5553 — Approval notifications disappear](https://github.com/nearai/ironclaw/issues/5553) *(open)*
- [#5776 — Long-output prompt causes repeated model timeouts](https://github.com/nearai/ironclaw/issues/5776) *(open)*
- [#5508 — Slack delivery target not found despite active connection](https://github.com/nearai/ironclaw/issues/5508) *(open)*
- [#5707 — Routine creation response exposes internal implementation details](https://github.com/nearai/ironclaw/issues/5707) *(open)*
- [#5509 — Chat creation latency scales with accumulated history](https://github.com/nearai/ironclaw/issues/5509) *(open)*
- [#5552 — Run fails with generic "invalid result" after tool failures](https://github.com/nearai/ironclaw/issues/5552) *(open)*
- [#5701 — Activity panel does not update during active run](https://github.com/nearai/ironclaw/issues/5701) *(open)*

### Medium / P3
- [#5510 — Cannot delete old routines](https://github.com/nearai/ironclaw/issues/5510) *(open)*
- [#5704 — Image preview becomes transparent while chat is active](https://github.com/nearai/ironclaw/issues/5704) *(closed)*
- [#5705 — Terminal icon has no disable option](https://github.com/nearai/ironclaw/issues/5705) *(closed)*
- [#5706 — Sidebar shows raw thread ID under load](https://github.com/nearai/ironclaw/issues/5706) *(closed)*

Related fix PRs seen in the window: [#7300](https://github.com/nearai/ironclaw/pull/7300) restores Slack personal-DM delivery, and [#7305](https://github.com/nearai/ironclaw/pull/7305) softens failed-tool activity summaries.

## Feature Requests & Roadmap Signals
- **Operator/Inspector diagnostics** is a clear roadmap item: issue [#7220](https://github.com/nearai/ironclaw/issues/7220) is closed and implemented through PRs [#7235](https://github.com/nearai/ironclaw/pull/7235), [#7236](https://github.com/nearai/ironclaw/pull/7236), [#7239](https://github.com/nearai/ironclaw/pull/7239), and [#7277](https://github.com/nearai/ironclaw/pull/7277).
- **Explicit channel delivery**: [#7157 — two-lane delivery tool with notification channels](https://github.com/nearai/ironclaw/pull/7157) is open and likely targeted for the next minor release.
- **Sandbox profiles**: [#7214 — Docker and Railway user-sandbox profiles](https://github.com/nearai/ironclaw/pull/7214) adds explicit sandbox scoping.
- **Nostr host functions**: [#7184 — Nostr sign-event host functions for WASM tools](https://github.com/nearai/ironclaw/pull/7184) would extend agent capability reach.
- **User-requested UX features**:
  - [#5510 — Working routine deletion](https://github.com/nearai/ironclaw/issues/5510)
  - [#5705 — Option to disable terminal icon](https://github.com/nearai/ironclaw/issues/5705)

Prediction: the next minor version will likely include the Inspector surface, channel delivery improvements, and the new sandbox profiles.

## User Feedback Summary
Feedback is dominated by QA bug-bash findings rather than general user discussion. Recurring pain points include:

- Slack integration is unreliable: delivery targets vanish, DMs cannot be read, disconnection fails.
- Routine runs frequently fail with opaque errors such as "No thread attached", "invalid result", or lease expiration.
- The activity panel obscures tool-level detail and does not refresh live, making debugging hard.
- GitHub integration is broken in basic issue workflows, reducing agent usefulness.
- The UI exposes implementation details in routine confirmations, while some controls cannot be customized or removed.

Satisfaction signals are mixed: v1.1.0 delivery shows forward momentum on extension reach, but the volume of open P2 bugs suggests stability work is still needed.

## Backlog Watch
Long-unanswered or high-severity items needing maintainer attention:

- **Oldest open cluster (June 2, 0 comments)** — Qwen3.6-35B QA bug set, all still open:
  - [#4339 — Provider tool calls rejected as InvalidInvocation](https://github.com/nearai/ironclaw/issues/4339)
  - [#4340 — Content field blank validation error blocks submission](https://github.com/nearai/ironclaw/issues/4340)
  - [#4341 — Thinking chain-of-thought exposed to user](https://github.com/nearai/ironclaw/issues/4341)
  - [#4342 — Authentication modal persists after refresh](https://github.com/nearai/ironclaw/issues/4342)
  - [#4343 — MCP integration acknowledged but unusable](https://github.com/nearai/ironclaw/issues/4343)
  - [#4344 — Agent mirrors user message while loading](https://github.com/nearai/ironclaw/issues/4344)

- **P1 from June 30**: [#5456 — Runner lease expiration causes routine failures](https://github.com/nearai/ironclaw/issues/5456) remains open.
- **July 1 open items**: [#5507 — Failed routine "No thread attached" blocks debugging](https://github.com/nearai/ironclaw/issues/5507), [#5508](https://github.com/nearai/ironclaw/issues/5508), [#5509](https://github.com/nearai/ironclaw/issues/5509), [#5510](https://github.com/nearai/ironclaw/issues/5510).
- **July 2 open items**: [#5522](https://github.com/nearai/ironclaw/issues/5522), [#5552](https://github.com/nearai/ironclaw/issues/5552), [#5553](https://github.com/nearai/ironclaw/issues/5553).
- **July 6–8 open items**: [#5701](https://github.com/nearai/ironclaw/issues/5701), [#5702](https://github.com/nearai/ironclaw/issues/5702), [#5707](https://github.com/nearai/ironclaw/issues/5707), [#5776](https://github.com/nearai/ironclaw/issues/5776), [#5834](https://github.com/nearai/ironclaw/issues/5834), [#5836](https://github.com/nearai/ironclaw/issues/5836).

The backlog contains several critical routine-reliability and Slack-integration issues that have been open for over a week, and a six-issue QA cluster from June 2 that has received no comments.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

## LobsterAI Project Digest — 2026-08-07

### 1. Today's Overview
LobsterAI showed moderate community activity in the last 24 hours: 5 issues were updated, all remaining open, while 2 PRs were also updated but none were merged or closed. No new releases were published. The project appears to be in a maintenance-heavy phase, with several April-era issues/PRs still open and now marked stale. The newest user-facing concerns are a concrete bug for slash-containing model IDs (#2443) and a UX feature request for input editing (#2444). Overall health is stable, but the growing backlog and absence of merged PRs indicate slower delivery velocity.

### 2. Releases
No new releases were published in this period. There are no release notes, breaking changes, or migration details to report.

### 3. Project Progress
No PRs were merged or closed in the last 24 hours. Two open PRs remain in the queue:

- [PR #1197: Feature/Agent 管理页面交互优化](https://github.com/netease-youdao/LobsterAI/pull/1197) — open, stale, conflicts with main branch; targets Agent management page interaction improvements.
- [PR #1199: feat(model): add context window and token settings](https://github.com/netease-youdao/LobsterAI/pull/1199) — open, stale; adds per-model `contextWindow` and `maxTokens` settings.

Neither PR received comments in this window.

### 4. Community Hot Topics
The only issues with comments are both stale, each with 1 comment and no reactions:

- [Issue #1196: 不要强制在工作目录中建立 Agents.md、User.md等6个文件](https://github.com/netease-youdao/LobsterAI/issues/1196) — users are frustrated by forced creation of AGENTS.md/USER.md files in every working directory and want a global or hidden configuration option.
- [Issue #1198: 网关重启到一半进度条消失，也不知道重启状态，后面的对话都显示模型不可用](https://github.com/netease-youdao/LobsterAI/issues/1198) — a gateway restart UX problem where progress disappears and models are shown unavailable despite Chrome/browser already being open.

These two issues represent long-standing friction points, but today’s activity is not high-velocity. No issue gained notable reactions or new community discussion.

### 5. Bugs & Stability
No fix PRs were linked or merged during this window.

- **Medium severity** — [Issue #2443: 模型 ID 含斜杠的自定义 Provider 无法在界面中使用（SiliconFlow）](https://github.com/netease-youdao/LobsterAI/issues/2443)  
  Custom OpenAI-compatible providers with model IDs containing `/`, e.g. SiliconFlow, cannot be used through the UI. This affects all such providers and is a functional regression/limitation in provider handling.

- **Medium severity / UX** — [Issue #1198: 网关重启到一半进度条消失](https://github.com/netease-youdao/LobsterAI/issues/1198)  
  Gateway restart state is unclear, and the UI incorrectly reports models as unavailable even when the browser is running.

- **Low / informational** — [Issue #2442: 为什么LobsterAI软件的内核还是 ps5.1 始终没有升级到 ps7.4](https://github.com/netease-youdao/LobsterAI/issues/2442)  
  A technical design question about PowerShell 5.1 vs 7.4; not necessarily a regression, but users are confused by the shell version behavior.

### 6. Feature Requests & Roadmap Signals
The most actionable feature signals this cycle:

- [Issue #2444: 输入框编辑模式](https://github.com/netease-youdao/LobsterAI/issues/2444) — requesting an “edit mode” for the input box where Enter creates line breaks and Ctrl+Enter sends messages, possibly with WYSIWYG Markdown editing. This is a clear, well-scoped UX improvement request.
- [Issue #1196: 全局 Agents.md/User.md 方案](https://github.com/netease-youdao/LobsterAI/issues/1196) — users want a global system prompt location rather than per-workspace mandatory files.
- [PR #1199: context window and token settings](https://github.com/netease-youdao/LobsterAI/pull/1199) — already has an implementation proposal for per-model token settings, suggesting roadmap intent.
- [PR #1197: Agent management page interaction optimization](https://github.com/netease-youdao/LobsterAI/pull/1197) — proposes reducing interaction depth for Agent deletion and sidebar operations.

The input-edit-mode request is the most likely candidate for a future minor release if maintainers prioritize UI polish.

### 7. User Feedback Summary
User feedback in the last 24 hours is mostly pain-point oriented:

- Workspace configuration is considered “messy” because deleting/recreating the required AGENTS.md/USER.md files is annoying.
- Gateway restart visibility is poor and produces false “model unavailable” errors.
- Custom provider support is incomplete for model IDs containing slashes, blocking SiliconFlow users.
- Some users are questioning the technical choice of PowerShell 5.1 as execution engine.

No explicit positive feedback, praise, or satisfaction signals were captured in this data window. The recurring theme is configuration and execution UX friction.

### 8. Backlog Watch
Several old items need maintainer attention:

- [Issue #1196](https://github.com/netease-youdao/LobsterAI/issues/1196) — created 2026-04-01, stale as of 2026-08-06; 1 comment, no resolution.
- [Issue #1198](https://github.com/netease-youdao/LobsterAI/issues/1198) — created 2026-04-01, stale as of 2026-08-06; 1 comment, no fix visible.
- [PR #1197](https://github.com/netease-youdao/LobsterAI/pull/1197) — created 2026-04-01, stale, has merge conflicts.
- [PR #1199](https://github.com/netease-youdao/LobsterAI/pull/1199) — created 2026-04-01, stale, has no visible reviewer activity.

These items have been open for over four months. The stale labels were updated on 2026-08-06, but no human maintainer response is evident in the data. They should either be revived, merged, or explicitly closed to prevent backlog decay.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-07

## 1. Today's Overview

CoPaw activity was high over the last 24 hours: **34 issues updated** (17 open, 17 closed), **50 PRs updated** (20 open, 30 closed/merged), and **no new releases**. The project is clearly in a 2.1.0 beta stabilization phase, with significant effort going into memory/context lifecycle refactoring, MCP tool reliability, channel fixes, and desktop UI polish. Maintainers are closing a steady stream of issues, but several severe open bugs remain — especially around long-session handling, `run_tool_batch`, and MCP tool flakiness. Overall health is **productive but mixed**: strong momentum and fast issue turnover, offset by beta regressions and dependency-compatibility concerns.

---

## 2. Releases

**No new releases were published in the last 24 hours.**

The latest user-visible versions in the issue tracker are `2.0.1` stable and `2.1.0b1`/`2.1.0b2` beta. No migration notes or breaking-change announcements are available for this digest period.

---

## 3. Project Progress

### Notable closed / merged PRs (visible in top-20 PR set)

- [#6664 fix(harnesses): degrade gracefully without Codex CLI](https://github.com/agentscope-ai/QwenPaw/pull/6664) — closed; improves harness resilience when Codex CLI is unavailable.
- [#6611 refactor(context): align Scroll and memory with AgentScope lifecycle](https://github.com/agentscope-ai/QwenPaw/pull/6611) — closed; major cleanup of context/memory lifecycle paths.
- [#6530 Fix editable per-tool call limit names](https://github.com/agentscope-ai/QwenPaw/pull/6530) — closed; fixes editing and validation of per-tool call-limit fields.
- [#6744 fix(config): harden agent config persistence on shared filesystems](https://github.com/agentscope-ai/QwenPaw/pull/6744) — closed; atomic writes for agent/ACL persistence. Reopened as [#6767](https://github.com/agentscope-ai/QwenPaw/pull/6767) for further hardening.
- [#6741 feat(memory): improve ReMe configuration and embedding lifecycle](https://github.com/agentscope-ai/QwenPaw/pull/6741) — closed; re-submitted as open PR [#6772](https://github.com/agentscope-ai/QwenPaw/pull/6772).
- [#6739 docs(memory): add embedding model configuration guide](https://github.com/agentscope-ai/QwenPaw/pull/6739) — closed; re-submitted as open PR [#6771](https://github.com/agentscope-ai/QwenPaw/pull/6771).

### Notable open PRs in progress / under review

- [#6659 feat(providers): implement model fallback with cooldown mechanism](https://github.com/agentscope-ai/QwenPaw/pull/6659) — under review; automatic model failover.
- [#6715 feat(onebot): handle remote inbound voice and image media](https://github.com/agentscope-ai/QwenPaw/pull/6715) — OneBot remote-media support.
- [#6769 fix(onebot): expand quoted reply messages](https://github.com/agentscope-ai/QwenPaw/pull/6769) — fixes missing quoted content in QQ replies.
- [#6759 fix: preserve tool call extra content across context lifecycle](https://github.com/agentscope-ai/QwenPaw/pull/6759) — preserves provider-specific tool metadata.
- [#6774 fix(modes): honor in_loop_modes for goal and mission gates](https://github.com/agentscope-ai/QwenPaw/pull/6774) — fixes `/goal` and `/mission` gate handling.
- [#6767 fix(config): harden agent persistence on shared filesystems](https://github.com/agentscope-ai/QwenPaw/pull/6767) — follow-up to #6744.
- [#6764 feat(ci): gate main mergeability on tests](https://github.com/agentscope-ai/QwenPaw/pull/6764) — CI test-gating prerequisite.
- [#6766 fix(ci): target rich chat input in desktop verification](https://github.com/agentscope-ai/QwenPaw/pull/6766) — fixes desktop CI verification after Lexical editor switch.

---

## 4. Community Hot Topics

Most active issues by comment count:

- [#6684 [enhancement] Add channel retry functionality](https://github.com/agentscope-ai/QwenPaw/issues/6684) — **8 comments, closed.** Self-hosted Matrix channels often start faster than QwenPaw, causing failures with no automatic retry/health check. Underlying need: **channel connection resilience**.
- [#6588 `spawn_subagent` treats empty `batch` placeholder as batch mode](https://github.com/agentscope-ai/QwenPaw/issues/6588) — **6 comments, closed.** Edge-case API incompatibility in Responses-compatible model paths.
- [#6601 QwenPaw does not report empty-response errors](https://github.com/agentscope-ai/QwenPaw/issues/6601) — **5 comments, open.** In long sessions, models silently return empty responses and the framework never surfaces an error. Strongly related to long-context reliability.
- [#6667 DeepSeek thinking mode fails in multi-turn: missing `reasoning_content`](https://github.com/agentscope-ai/QwenPaw/issues/6667) — **5 comments, closed.** Thinking-block metadata is lost after OpenAI formatter skips it.
- [#6732 MCP tools periodically fail until Docker restart](https://github.com/agentscope-ai/QwenPaw/issues/6732) — **3 comments, open.** MCP tools stop being recognized after hours; restart restores them.
- [#6612 QwenPaw 2.0.1 incompatible with agentscope 2.0.4.post1](https://github.com/agentscope-ai/QwenPaw/issues/6612) — **3 comments, open.** Proactive/memory subsystem crashes and tool-permission deadlocks caused by upstream AgentScope API changes.
- [#6700 Huge tool output freezes history loading](https://github.com/agentscope-ai/QwenPaw/issues/6700) — **3 comments, closed.** Large tool outputs can make sessions unresponsive and exceed context windows.

The common thread: users are pushing on **long-session stability, MCP tooling, and channel reliability**, not just single-turn feature gaps.

---

## 5. Bugs & Stability

### Critical / high severity (open)

- [#6768 Agent enters infinite loop after completing multi-step task, session blocked for hours](https://github.com/agentscope-ai/QwenPaw/issues/6768) — reported during financial-record import via REST API; the agent became completely unresponsive for hours. **No dedicated fix PR is visible.**
- [#6756 `run_tool_batch` always fails with “No toolkit available in current context”](https://github.com/agentscope-ai/QwenPaw/issues/6756) — core batch-tool API broken in `2.1.0b1` for every agent. **No visible fix PR.**
- [#6726 Long console session fails with 400 “tool role must follow tool_calls”](https://github.com/agentscope-ai/QwenPaw/issues/6726) — happens after 20–30+ tool-call/tool-result pairs accumulate. **No visible fix PR.**
- [#6601 Empty model responses are not reported](https://github.com/agentscope-ai/QwenPaw/issues/6601) — long sessions become completely unresponsive. **No visible fix PR.**
- [#6732 MCP tools fail on a regular basis until Docker restart](https://github.com/agentscope-ai/QwenPaw/issues/6732) — affects MCP tool calling and auto-invocation. **No visible fix PR.**
- [#6612 Incompatibility with agentscope 2.0.4.post1](https://github.com/agentscope-ai/QwenPaw/issues/6612) — causes proactive crashes and tool-permission deadlock. Related PR [#6615](https://github.com/agentscope-ai/QwenPaw/pull/6615) is scoped to config-loading robustness only.
- [#6775 MalwareBytes reports “Trojan Loader” in Windows Desktop version](https://github.com/agentscope-ai/QwenPaw/issues/6775) — user is uninstalling until maintainers respond; likely false positive but requires urgent official clarification.
- [#6755 Cross-day sessions misjudge current date/weekday, scheduling wrong dates](https://github.com/agentscope-ai/QwenPaw/issues/6755) — a real-world calendar task was booked on the wrong day.

### Recently closed bug reports (likely fixed or addressed)

- [#6731 `execute_shell_command` crashes on `sandbox_config`: “replace() should be called on dataclass instances”](https://github.com/agentscope-ai/QwenPaw/issues/6731)
- [#6762 Desktop tool-call block: long shell commands overflow, no line wrapping](https://github.com/agentscope-ai/QwenPaw/issues/6762)
- [#6760 `qwenpaw task` CLI errors after update to 2.0.1](https://github.com/agentscope-ai/QwenPaw/issues/6760)
- [#6698 Browser SDK `open()` always fails with `WireProtocolError: Target crashed`](https://github.com/agentscope-ai/QwenPaw/issues/6698)
- [#6707 400 invalid_request_error when history with tool calls is used with thinking-mode upstream](https://github.com/agentscope-ai/QwenPaw/issues/6707)
- [#6708 SSE in-stream 503 error during streaming is not retried](https://github.com/agentscope-ai/QwenPaw/issues/6708)
- [#6687 OpenRouter multimodal probe overwrites documented capabilities with `false`](https://github.com/agentscope-ai/QwenPaw/issues/6687)
- [#6557 MCP tool names starting with `-` reject strict LLM APIs like Kimi](https://github.com/agentscope-ai/QwenPaw/issues/6557)
- [#6667 DeepSeek thinking-mode `reasoning_content` missing in multi-turn](https://github.com/agentscope-ai/QwenPaw/issues/6667)
- [#6588 Empty `batch` placeholder falsely enabling batch mode in `spawn_subagent`](https://github.com/agentscope-ai/QwenPaw/issues/6588)
- [#6700 Oversized tool output causing history load freezes](https://github.com/agentscope-ai/QwenPaw/issues/6700)
- [#6476 Matrix end-to-end encryption unavailable](https://github.com/agentscope-ai/QwenPaw/issues/6476)

---

## 6. Feature Requests & Roadmap Signals

### Clear roadmap signals

- **MCP reliability is a priority area:**
  - [#6724 Configurable MCP tool-call timeout](https://github.com/agentscope-ai/QwenPaw/issues/6724)
  - [#6761 Question: support for MCP 2026-07-28 stateless spec](https://github.com/agentscope-ai/QwenPaw/issues/6761)
  - [#6732 MCP tool failure until restart](https://github.com/agentscope-ai/QwenPaw/issues/6732)

- **Memory / long-context UX:**
  - [#6700 Request for output truncation and history pagination](https://github.com/agentscope-ai/QwenPaw/issues/6700)
  - [#6737 Better auto-generated titles for history conversations](https://github.com/agentscope-ai/QwenPaw/issues/6737)
  - [#6770 Make user Chrome tab lifetime configurable across response cycles](https://github.com/agentscope-ai/QwenPaw/issues/6770)

- **Channel / localization improvements:**
  - [#6728 WeChat approval prompts should support Chinese approve/deny actions](https://github.com/agentscope-ai/QwenPaw/issues/6728)
  - [#6765 Add Hungarian language support](https://github.com/agentscope-ai/QwenPaw/issues/6765)
  - [#6452 Remove or soften the “multimodal capability not detected” prompt](https://github.com/agentscope-ai/QwenPaw/issues/6452)
  - [#6736 Remove/optimize the session title in the console top-left](https://github.com/agentscope-ai/QwenPaw/issues/6736)

### Likely next-version candidates

Based on open PRs under review, **2.1.0** may include:
- Model fallback with cooldown — [#6659](https://github.com/agentscope-ai/QwenPaw/pull/6659)
- ReMe embedding configuration and lifecycle improvements — [#6772](https://github.com/agentscope-ai/QwenPaw/pull/6772)
- OneBot remote media and quoted-reply support — [#6715](https://github.com/agentscope-ai/QwenPaw/pull/6715), [#6769](https://github.com/agentscope-ai/QwenPaw/pull/6769)
- Shared-filesystem agent persistence hardening — [#6767](https://github.com/agentscope-ai/QwenPaw/pull/6767)
- Preservation of provider-specific tool-call metadata — [#6759](https://github.com/agentscope-ai/QwenPaw/pull/6759)

---

## 7. User Feedback Summary

- **Strong positive sentiment:** Users explicitly thanked maintainers and expressed enthusiasm, e.g. “I love your work. Thanks for all you do” ([#6775](https://github.com/agentscope-ai/QwenPaw/issues/6775)) and “thank u i love All Alibaba-Tongyi: Qwen family” ([#6765](https://github.com/agentscope-ai/QwenPaw/issues/6765)).
- **Biggest dissatisfaction is long-session reliability:** empty responses, 400 tool-role errors, date misjudgment across day boundaries, and hours-long unresponsive sessions.
- **MCP pain is widespread:** tools silently stop working, no configurable timeout, and strict LLM providers reject MCP tool names with leading hyphens.
- **Self-hosted channel users are underserved:** Matrix retry/E2E issues recur, and channel recovery requires manual re-saving.
- **Windows desktop trust issue:** an antivirus false positive caused a user to uninstall — a potential adoption barrier.
- **Large Chinese-speaking user base:** many detailed bug/feature reports are written in Chinese, and localization features (WeChat Chinese actions, better auto-titles, less intrusive prompts) are frequently requested.

Overall, the community is technically engaged and willing to provide root-cause analyses, but beta quality issues and false-positive security alerts are causing real trust/friction.

---

## 8. Backlog Watch

Issues and PRs that need maintainer attention:

- [#6612 QwenPaw 2.0.1 incompatible with agentscope 2.0.4.post1](https://github.com/agentscope-ai/QwenPaw/issues/6612) — open since Jul 31, 3 comments, impacts proactive/memory subsystem; related PR [#6615](https://github.com/agentscope-ai/QwenPaw/pull/6615) is only a partial fix.
- [#6601 QwenPaw does not report empty-response errors](https://github.com/agentscope-ai/QwenPaw/issues/6601) — open since Jul 31, 5 comments, core long-session reliability issue.
- [#6722 Background forked subagent reports completed when worktree finalization fails](https://github.com/agentscope-ai/QwenPaw/issues/6722) — open since Aug 5.
- [#6724 Configurable MCP tool-call timeout](https://github.com/agentscope-ai/QwenPaw/issues/6724) — open since Aug 5.
- [#6726 400 “tool role” error in long sessions](https://github.com/agentscope-ai/QwenPaw/issues/6726) — open since Aug 5.
- [#6728 WeChat approval Chinese action labels](https://github.com/agentscope-ai/QwenPaw/issues/6728) — open since Aug 5.
- [#6756 `run_tool_batch` broken in 2.1.0b1](https://github.com/agentscope-ai/QwenPaw/issues/6756) — open since Aug 6, core tool API regression.
- [#6768 Infinite agent loop blocking sessions for hours](https://github.com/agentscope-ai/QwenPaw/issues/6768) — open since Aug 6.
- [#6775 MalwareBytes false positive on Desktop](https://github.com/agentscope-ai/QwenPaw/issues/6775) — open since Aug 7; urgent communication needed.
- [#6761 MCP stateless 2026-07-28 spec support question](https://github.com/agentscope-ai/QwenPaw/issues/6761) — open; roadmap question from users.

### Older PRs still under review

- [#6564 fix(memory): flush pending turns before compression](https://github.com/agentscope-ai/QwenPaw/pull/6564) — open since Jul 30, under review.
- [#6615 fix(config): handle corrupted agent config and invalid JSON in load_agent_config](https://github.com/agentscope-ai/QwenPaw/pull/6615) — open since Jul 31, first-time contributor.
- [#6723 fix(provider): expire stale capability cache entries and clear on model switch](https://github.com/agentscope-ai/QwenPaw/pull/6723) — open since Aug 5, under review.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-07

## 1. Today's Overview

ZeroClaw is in a period of high, sustained activity: 31 issues and 50 PRs were updated in the last 24 hours, with 9 issues closed and 5 PRs merged/closed. The project is mid-stabilization on the **v0.8.5 weekly line** ([#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459), frozen intake Aug 4, cuts through Aug 30) while prepping v0.9.0 breaking-change work ([#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)). Notable this cycle: two security-relevant fixes landed (pipeline tool-gating, Bedrock prompt-caching exclusion), and a dense cluster of new SOP-subsystem bugs was filed on Aug 6–7. No new release shipped today; 10+ RFCs remain in the maintainer decision queue ([#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)). Overall project health looks solid — steady throughput, active governance, and fast turnaround on regressions — though the SOP and CLI-help bug clusters suggest docs/UX debt around the SOP engine.

## 2. Releases

**No new releases today.** The most recent supporting trackers are the v0.8.5 stabilization line ([#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459)) and the v0.9.0 auth/security/gateway breaking-change queue ([#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)), which remains the public source of truth for upcoming breaking changes and migration notes.

## 3. Project Progress

Five PRs merged/closed in the last 24h, two of which resolve open bugs:

- **[#9737 — fix(tools): enforce agent policy in pipelines](https://github.com/zeroclaw-labs/zeroclaw/pull/9737)** (merged; closes [#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947)) — Fixes the **confused-deputy vulnerability** where `execute_pipeline` bypassed per-agent `ToolAccessPolicy` and authorized sub-tools solely from the global `[pipeline].allowed_tools`. Severity was S0 (security risk); this is the most important merge of the day.
- **[#8943 — fix(providers): exclude Nova 2 from Bedrock prompt caching](https://github.com/zeroclaw-labs/zeroclaw/pull/8943)** (merged; closes [#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720)) — Stops sending `cachePoint` to `us.amazon.nova-2-lite-v1:0`, which was failing long turns with `400: extraneous key [cachePoint] is not permitted`.
- **[#9329 — refactor(zerocode): derive slash commands from the shared command catalogue](https://github.com/zeroclaw-labs/zeroclaw/pull/9329)** (merged; closes [#9172](https://github.com/zeroclaw-labs/zeroclaw/issues/9172)) — Makes `zeroclaw-commands::BUILTIN_COMMANDS` the single source of truth for ZeroCode slash commands, removing duplicated autocomplete/parser/command-identity logic.
- **[#9659 — fix(docs): disambiguate contextual protected literals](https://github.com/zeroclaw-labs/zeroclaw/pull/9659)** (merged; closes [#9657](https://github.com/zeroclaw-labs/zeroclaw/issues/9657)) — Stops the mdBook protected-literal checker from treating generic words like "Signal" as product literals.
- **[#9764 — test(config): widen scheduler-latency margin in onepassword non-blocking load test](https://github.com/zeroclaw-labs/zeroclaw/pull/9764)** (merged; closes [#9763](https://github.com/zeroclaw-labs/zeroclaw/issues/9763)) — De-flakes a wall-clock assertion under CI runner load.

Nine issues were also closed, including #657 (Kimi Code provider request) and the long-dormant **[#1 — CRITICAL: XOR cipher provides no real encryption for stored secrets](https://github.com/zeroclaw-labs/zeroclaw/issues/1)**, which was closed with needs-author-action.

## 4. Community Hot Topics

The most active discussion this cycle is around **governance, inter-agent collaboration, and config migration**:

- **[#6808 — RFC: Work Lanes, Board Automation, and Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** (19 comments, open, needs-maintainer-review) — The highest-traffic item. A governance/rollout tracker (rev 24) for routing work without adding maintainer overhead. Its longevity and steady updates indicate the community is actively co-designing project process.
- **[#9106 — RFC: A2A outbound client (A2ATool)](https://github.com/zeroclaw-labs/zeroclaw/issues/9106)** (11 comments, open, status:accepted) — Proposes the outbound half of A2A so agents can proactively call external A2A-compliant agents, closing the inter-agent collaboration gap left by the inbound-only `A2AServer` shipped in v0.8.2.
- **[#8692 — Tracker: Maintainer decision queue for RFCs and design issues](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** (11 comments, open) — The active decision backlog; its existence reflects a process bottleneck with 10+ RFCs awaiting maintainer ratification.
- **[#9246 — RFC: Preserve Todo tracker configuration during ZeroCode ownership migration](https://github.com/zeroclaw-labs/zeroclaw/issues/9246)** (11 comments, open, accepted) — Consolidates reviewed July proposals to prevent Todo-tracker config loss when ZeroCode takes ownership of files.
- **[#6954 — RFC: Provenance, conversation binding, and reply contract for internally initiated agent turns](https://github.com/zeroclaw-labs/zeroclaw/issues/6954)** (10 comments, open, needs-maintainer-review) — Rewritten Aug 5 with boundary clarifications; addresses identity stability and reply lifecycle for cron/agent-initiated turns.

Underlying needs: the community is pushing for **more automation in project management**, **true agent-to-agent interop**, and **safe config ownership transitions** — all signs of a maturing multi-agent runtime.

## 5. Bugs & Stability

A significant cluster of **SOP-subsystem bugs** was filed on Aug 6, all still open:

| Severity | Issue | Summary |
|---|---|---|
| P1 / high | [#9779 — sops_dir documented default not honoured by daemon](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) | SOP engine silently never loads if `[sop] sops_dir` is omitted, despite docs saying it has a default. No error or log. |
| P1 / high | [#9786 — malformed SOP.toml silently dropped](https://github.com/zeroclaw-labs/zeroclaw/issues/9786) | Unknown trigger field → file dropped with no diagnostic; `sop list` omits it and `sop validate` reports success. |
| P1 / high | [#9770 — cron update silently discards declarative job changes](https://github.com/zeroclaw-labs/zeroclaw/issues/9770) | Six columns (`command`, `name`, `expression/schedule`, `session_target`, `allowed_tools`, `uses_memory`) are dropped on declarative jobs with no error. |
| P2 / high | [#9784 — SOP run marked failed mid-step with no audit event](https://github.com/zeroclaw-labs/zeroclaw/issues/9784) | Agent-driven multi-step SOP failed mid-step; agent discovered only on next `sop_advance`. |
| P2 / high | [#9780 — cron-triggered SOPs cannot do network work](https://github.com/zeroclaw-labs/zeroclaw/issues/9780) | Capability set has no HTTP member; `shell.exec`/`notify.channel` placeholders are unsatisfiable — watch-loops impossible unattended. |
| P2 / high | [#9328 — verifiable-intent evaluates constraints without verifying credential chain](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) | `vi_verify` checks L2 constraints against caller-supplied fulfillment objects without cryptographic chain verification — a security gap in the VI reference implementation. Updated today; no fix PR yet. |
| P2 / medium | [#9783 — finish_run accepts and discards a failure reason](https://github.com/zeroclaw-labs/zeroclaw/issues/9783) | Failed SOP runs record *that* they failed but not *why*. |
| P2 / medium | [#9792 — git channel empty peer allowlist silently drops every event](https://github.com/zeroclaw-labs/zeroclaw/issues/9792) | Even SOP-routed PR events dropped; only a DEBUG line reveals it. |
| P2 / low | [#9796 — cron parent help prints invalid examples](https://github.com/zeroclaw-labs/zeroclaw/issues/9796) | Follow-up to fixed #9672; `add-at`/`add-every`/`once` examples still broken. |
| P2 / high (CI) | [#9771 — zeroclaw-gateway fails clippy -D warnings](https://github.com/zeroclaw-labs/zeroclaw/issues/9771) | Dead code behind `channel-linq` feature; one-line fix proposed. |

**Fixed today:** #7947 (pipeline tool-gating bypass, via [#9737](https://github.com/zeroclaw-labs/zeroclaw/pull/9737)) and #8720 (Bedrock Nova 2 caching, via [#8943](https://github.com/zeroclaw-labs/zeroclaw/pull/8943)). The bug-fix-to-merge turnaround on security items is strong; the SOP cluster is the main stability risk heading into the v0.8.5 weekend cut.

## 6. Feature Requests & Roadmap Signals

- **A2A outbound** — [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) (RFC, accepted) is the clearest roadmap signal: agents will gain the ability to call external A2A agents via an `A2ATool`. Likely v0.9.0 territory alongside the A2A boundary work tracked in [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432).
- **Per-model capability/context config** — [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) (P1 RFC) would let users declare vision support and context windows per alias, fixing misreported capabilities and the 32k-token fallback. High-value usability improvement for mixed-provider setups.
- **Grok Build ACP provider** — [#9104](https://github.com/zeroclaw-labs/zeroclaw/pull/9104) (open, size:L) adds a typed `grok_cli` provider speaking the `grok agent stdio` ACP surface.
- **Per-user Telegram group sessions** — [#9772](https://github.com/zeroclaw-labs/zeroclaw/pull/9772) (open) introduces a `per_user_session` toggle so multi-user group chats don't force a single shared conversation scope.
- **Shell dialect in system prompt** — [#9788](https://github.com/zeroclaw-labs/zeroclaw/issues/9788) (open, P3) asks the model be told the active shell rather than guessing from OS name.
- **WebSocket keepalive** — [#9701](https://github.com/zeroclaw-labs/zeroclaw/pull/9701) (open) adds configurable ping intervals for chat WebSocket stability through intermediaries.
- **Kimi Code provider** — [#657](https://github.com/zeroclaw-labs/zeroclaw/issues/657) was closed today; the linked compatible-provider fix in [#8927](https://github.com/zeroclaw-labs/zeroclaw/pull/8927) (removing unconditional `strip_think_tags`) likely covers the underlying OpenAI-compatible endpoint issue.

Near-term prediction: v0.8.5 (through Aug 30) will absorb the SOP hardening fixes and cron CLI corrections; A2ATool, per-model capability config, and eval-suite gating ([#9212](https://github.com/zeroclaw-labs/zeroclaw/pull/9212)) look like the next v0.9.0 headline features.

## 7. User Feedback Summary

- **Silent configuration failures are the #1 pain point.** Multiple reporters (#9786, #9779, #9792) describe SOP configs vanishing or never loading *with no diagnostic* — indistinguishable from typos or absence. This erodes operator trust and was the dominant theme of new issues today.
- **CLI help is a recurring irritant.** #9672 (closed) showed all three `cron add` examples failing; the follow-up [#9796](https://github.com/zeroclaw-labs/zeroclaw/issues/9796) shows the parent help still prints broken examples. Users following official docs get errors instead of jobs.
- **Bedrock Nova 2 Lite users hit hard caching failures.** [#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720) was fixed promptly by #8943; satisfaction signal is positive (issue closed via merge today).
- **Telegram group collaboration is constrained.** [#9772](https://github.com/zeroclaw-labs/zeroclaw/pull/9772) reflects a real multi-user workflow: one teammate uploads/states a task, another asks follow-ups — but sessions are hardcoded to per-sender scope, forcing workarounds.
- **Governance fatigue is visible.** #6808 and #9496 ("Streamline RFC scope, discussion, voting, and assignment") both argue the RFC process is slower than the decisions it supports, with a 7-day minimum and unanimity requirements on architecture/security items. The community is asking for lighter-weight decision mechanics.

## 8. Backlog Watch

**RFCs awaiting maintainer review (potential bottlenecks):**
- [#6808 — Work Lanes, Board Automation, and Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) (19 comments, in-progress, needs-maintainer-review) — the longest-pending governance item; ratification deferred while rollout proceeds.
- [#6954 — Provenance, conversation binding, reply contract](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) (10 comments, needs-maintainer-review, risk:high).
- [#7100 — Per-model capability & context-window config](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) (P1, needs-maintainer-review, risk:high).
- [#9397 — Treat empty WhatsApp `allowed_groups` as permit-none](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) (P1 security, needs-maintainer-review, risk:high) — a security-relevant RFC that has been waiting since Jul 26.
- [#9530 — Risk precedence for test-only changes](https://github.com/zeroclaw-labs/zeroclaw/issues/9530) and [#9496 — Streamline RFC process](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) (both needs-maintainer-review).

**PRs blocked on author action (needs-author-action)** — mostly IftekharUddin's eval-suite stack, which is large and risks staling:
- [#9221](https://github.com/zeroclaw-labs/zeroclaw/pull/9221) (baseline regression gating, size:XL), [#9214](https://github.com/zeroclaw-labs/zeroclaw/pull/9214) (live execution mode, size:XL), [#9222](https://github.com/zeroclaw-labs/zeroclaw/pull/9222) (LLM-judge grader, size:XL), [#9212](https://github.com/zeroclaw-labs/zeroclaw/pull/9212) (CI regression gate), [#9203](https://github.com/zeroclaw-labs/zeroclaw/pull/9203) (authenticated HTTP fan-in, risk:high), [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) (keep agent turns alive after disconnect, P1), [#8955](https://github.com/zeroclaw-labs/zeroclaw/pull/8955) (Telegram media group batching, size:XL), [#9215](https://github.com/zeroclaw-labs/zeroclaw/pull/9215). Also [#9104](https://github.com/zeroclaw-labs/zeroclaw/pull/9104) (Grok Build provider). These represent significant shipped-ready or near-ready functionality stalled on author response.

**Security item needing attention:** [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) (verifiable-intent credential-chain verification, risk:high) was updated today but has no associated fix PR yet.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*