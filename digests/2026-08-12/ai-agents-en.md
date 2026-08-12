# OpenClaw Ecosystem Digest 2026-08-12

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-12 00:58 UTC

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

# OpenClaw Project Digest — 2026-08-12

## Today's Overview

OpenClaw saw very high activity in the last 24 hours: 500 issues and 500 PRs were updated, with 392 issues still open/active and 108 closed. On the PR side, 282 are open while 218 were merged or closed. No new releases were published in this window. The volume is healthy, but a large share of issues continue to carry `needs-maintainer-review` and `needs-product-decision` labels, suggesting maintainer capacity remains a bottleneck. The most active threads remain centered on reliability regressions, silent message loss, and long-debated feature proposals.

## Releases

No new releases were published in the last 24 hours.

## Project Progress

Notable closed/merged PRs in the last 24 hours show progress across channel reliability, state repair, UI polish, and test infrastructure:

- **Channel / platform fixes**
  - [fix(slack): keep previously joined threads active beyond 24 hours #121708](https://github.com/openclaw/openclaw/pull/121708) — addresses silent reply loss when Slack thread participation markers expire.
  - [feat(google): add current-turn native video input #122074](https://github.com/openclaw/openclaw/pull/122074) — adds end-to-end native video input support for compatible Gemini models.
  - [fix(macos): deliver provisional notifications #122179](https://github.com/openclaw/openclaw/pull/122179) and [fix(macos): accept provisional notification authorization #122183](https://github.com/openclaw/openclaw/pull/122183) — closes macOS notification authorization/rejection gap.
  - [refactor(telegram): consolidate bot handlers into named modules #122174](https://github.com/openclaw/openclaw/pull/122174) — reduces Telegram handler complexity and ordering fragility.

- **Gateway / state**
  - [fix(gateway): preserve attachment order in chat history #121980](https://github.com/openclaw/openclaw/pull/121980) — fixes durable-history reordering of mixed media attachments.
  - [fix(state): repair mis-stamped v17 agent databases #122171](https://github.com/openclaw/openclaw/pull/122171) and [fix(state): recover agent databases left incomplete by v17 upgrade #122182](https://github.com/openclaw/openclaw/pull/122182) — repair SQLite state databases left inconsistent by the v17 upgrade path.

- **UI / UX**
  - [fix: speed up streamed assistant output #122206](https://github.com/openclaw/openclaw/pull/122206) — improves perceived latency for OpenAI Responses streaming turns.
  - [fix(ui): keep composer accessory clicks from taking focus #122243](https://github.com/openclaw/openclaw/pull/122243) — fixes unintended composer focus behavior.

- **Engineering / test health**
  - [improve(cli): speed up CLI help process tests #122197](https://github.com/openclaw/openclaw/pull/122197), [improve: remove redundant slow heartbeat admission test #122095](https://github.com/openclaw/openclaw/pull/122095), and [refactor(tests): remove duplicate stream coverage #122190](https://github.com/openclaw/openclaw/pull/122190) — significant CI time reductions.
  - [refactor(mcp): centralize requester runtime materialization #122151](https://github.com/openclaw/openclaw/pull/122151) and [refactor: eliminate final export name collisions #122083](https://github.com/openclaw/openclaw/pull/122083) — reduce drift and ambiguity across runtime and SDK surfaces.

## Community Hot Topics

The highest-signal discussions are dominated by reliability regressions and long-running feature debates:

- [#121058 — Silent reply failures still recurring after #116277 closed (63 comments)](https://github.com/openclaw/openclaw/issues/121058)  
  This is the clearest user pain point this week. Users report the silent-reply failure mode continues even after the previous fix was closed, and monitoring still logs new occurrences. Underlying need: delivery guarantees and a diagnostic path for replies that are never queued.

- [#7707 — Feature Request: Memory Trust Tagging by Source (37 comments)](https://github.com/openclaw/openclaw/issues/7707)  
  A long-running security/trust proposal: tag memory entries by origin to prevent prompt-injection / memory poisoning from web content or third-party skills. The community engagement shows strong demand for memory provenance controls.

- [#92201 — Embedded runner: freshly streamed thinking signatures intermittently invalid on replay (22 comments)](https://github.com/openclaw/openclaw/issues/92201)  
  Closed in this window after significant investigation. Relates to Anthropic signature validation on replayed thinking blocks.

- [#42475 — Feature: Per-agent cost budget enforcement at the gateway level (20 comments)](https://github.com/openclaw/openclaw/issues/42475)  
  Users want daily/monthly cost caps enforced before model dispatch. Motivated by runaway-spend incidents.

- [#87744 — Codex-backed Telegram turns repeatedly time out waiting for turn/completed (17 comments, 3 👍)](https://github.com/openclaw/openclaw/issues/87744)  
  A P1 reliability regression causing Telegram sessions to fail before delivering final answers.

- [#68596 — Feature Request: Configurable streaming watchdog timeout threshold (15 comments, 8 👍)](https://github.com/openclaw/openclaw/issues/68596)  
  Strongly upvoted request to make the 30s streaming watchdog configurable, especially for long-reasoning models.

## Bugs & Stability

The most severe bug activity in the last 24 hours:

- **P0 — closed**: [#121675 — 2026.8.1-beta.1 published without companion @openclaw/* plugins; startup convergence guard boot-loops (closed)](https://github.com/openclaw/openclaw/issues/121675)  
  A release packaging failure that could make configured plugins permanently unresolvable. Closed in this window.

- **P1 — open**: [#121058 — Silent reply failures still recurring](https://github.com/openclaw/openclaw/issues/121058)  
  No fix PR visible. The most pressing open reliability issue.

- **P1 — open**: [#84516 — Codex app-server long agent replies silently truncated at ~1000–1100 chars](https://github.com/openclaw/openclaw/issues/84516)  
  `stop=null`, `aborted=false`, yet replies end mid-sentence. No linked fix PR.

- **P1 — open**: [#87744 — Codex-backed Telegram turns repeatedly time out](https://github.com/openclaw/openclaw/issues/87744)  
  Needs live repro; no linked fix PR.

- **P1 — open**: [#98435 — MCP loopback transport does not auto-reconnect after gateway restart](https://github.com/openclaw/openclaw/issues/98435)  
  `recovered=1` is misleading because the transport is not re-handshaked.

- **P1 — open**: [#97616 — OpenClaw leaks unreaped hook/tool child processes, causing zombie accumulation](https://github.com/openclaw/openclaw/issues/97616)  
  Runtime degradation over time; no fix PR linked.

- **P1 — open**: [#83337 — Plugin/core version drift after upgrade causes silent channel failure](https://github.com/openclaw/openclaw/issues/83337)  
  Channels can silently become disabled after core upgrades without a compatibility warning.

- **P1 — open**: [#114020 — Feishu/Telegram channel dispatch fails: runChannelInboundEvent requires runDispatchLifecycle](https://github.com/openclaw/openclaw/issues/114020)  
  Inbound dispatch broken after upgrading to `2026.7.2-beta.4`.

- **P1 — open**: [#106704 — sessions_yield on a subagent's first turn silently finalizes as ok with empty result](https://github.com/openclaw/openclaw/issues/106704)  
  Design flaw that invites misuse.

- **P1 — closed in window**: [#92201 (Anthropic signature replay)](https://github.com/openclaw/openclaw/issues/92201), [#96827 (message_tool_only self-replies)](https://github.com/openclaw/openclaw/issues/96827), [#119009 (runaway retry loop billed $204)](https://github.com/openclaw/openclaw/issues/119009)  
  These were among the most costly reliability issues and are now closed, though it is not always clear from issue metadata whether the fix has shipped or only the investigation/incident was closed.

## Feature Requests & Roadmap Signals

Several active feature requests are strong roadmap signals:

- **Memory trust / security**: [#7707 — Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707) and [#63990 — Multi-index embedding memory with model-aware failover](https://github.com/openclaw/openclaw/issues/63990) both point toward memory becoming more provenance-aware and resilient.
- **Cost controls**: [#42475 — Per-agent cost budget enforcement at gateway](https://github.com/openclaw/openclaw/issues/42475) and [#47910 — Provider fallback by failure class](https://github.com/openclaw/openclaw/issues/47910) suggest operators want safer failover and spend guardrails.
- **Model/watchdog configurability**: [#68596 — Configurable streaming watchdog timeout](https://github.com/openclaw/openclaw/issues/68596) is strongly upvoted and likely to attract a PR soon.
- **Session features**: [#13700 — Session snapshots save/load checkpoints](https://github.com/openclaw/openclaw/issues/13700) and [#47597 — streamTo="parent" support for subagents](https://github.com/openclaw/openclaw/issues/47597) remain popular session-control enhancements.
- **Gateway UX scale**: Open PRs such as [#122350 — keep model catalog reads responsive](https://github.com/openclaw/openclaw/pull/122350) and [#121459 — let limited browsers request admin access](https://github.com/openclaw/openclaw/pull/121459) suggest gateway scalability and access recovery are currently being actively worked on.
- **Localization**: [#111541 — add locale context and message rendering](https://github.com/openclaw/openclaw/pull/111541) continues to advance and may land in a future release.

## User Feedback Summary

The strongest user dissatisfaction centers on reliability and silent failures:

- Repeated silent reply failures despite issue closure (`#121058`) undermine trust in delivery guarantees.
- Timeouts and truncation in Codex-backed sessions (`#87744`, `#84516`) directly block real Telegram/Discord use cases.
- Upgrade pain is common: plugin/core version drift (`#83337`) and the beta release packaging incident (`#121675`) caused avoidable channel outages.
- Cost surprises are a major concern: one user reported a $204 bill from a runaway retry loop (`#119009`), driving support for gateway-level budget enforcement (`#42475`).
- Accessibility and UX friction still generate user complaints, e.g. screen readers announcing every streamed token (`#65538`) and keyboard users unable to reach Control UI menu footer controls (`#122066`).
- Long-session memory/context issues remain painful: subagent session persistence (`#47975`), memory-core narrative generation producing empty entries (`#90781`), and silent model-switch failures on large contexts (`#58957`).

## Backlog Watch

Several important issues have been open for months and still carry `needs-maintainer-review` / `needs-product-decision` labels:

- [#7707 — Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707) — open since Feb 3, 37 comments, needs security/product review.
- [#42475 — Per-agent cost budget enforcement](https://github.com/openclaw/openclaw/issues/42475) — open since Mar 10, 20 comments, linked PR open but waiting on product decision.
- [#14785 — Reduce tool schema token overhead (~3,500 tok/session)](https://github.com/openclaw/openclaw/issues/14785) — open since Feb 12, a clear efficiency win still unaddressed.
- [#16670 — Onboarding Wizard should include Memory/Embedding setup](https://github.com/openclaw/openclaw/issues/16670) — open since Feb 15; important for new-user success.
- [#39811 — Model configuration accepts unvalidated model names](https://github.com/openclaw/openclaw/issues/39811) — open since Mar 8, P1, linked PR open.
- [#40982 — Raise/remove 3-minute no-output watchdog cap on CLI requests](https://github.com/openclaw/openclaw/issues/40982) — open since Mar 9, P1, linked PR open.
- [#42820 — Feishu send action polluted by poll schema prevents file send](https://github.com/openclaw/openclaw/issues/42820) — open since Mar 11, P1, linked PR open.
- [#50291 — Plugin Hooks missing trace context for observability](https://github.com/openclaw/openclaw/issues/50291) — open since Mar 19, stale, needs maintainer/product review.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — AI Agent / Personal Assistant Ecosystem (2026-08-12)

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is in a high-iteration phase, with OpenClaw acting as the highest-activity reference implementation. Across the tracked projects, the most urgent shared concerns are delivery reliability, agent-loop safety, security/sandboxing, memory/context correctness, and cost governance. The space is fragmenting by deployment model: general-purpose gateways, lightweight bots, desktop assistants, local-first tools, and security-hardened daemons. Only LobsterAI and CoPaw published releases in this window, while most projects accumulated PRs and RFCs faster than maintainers could merge. Overall, the ecosystem is shifting from demo-grade agents to production concerns: trust, observability, least-privilege, and operational control.

## 2. Activity Comparison

Counts reflect 24-hour updates reported in project digests. Health score is a qualitative 1–10 composite of merge throughput, open-severity bug load, release cadence, and maintainer responsiveness.

| Project | Issues updated | PRs updated | Release in window | Health score |
|---|---|---|---|---|
| OpenClaw | 500 (392 open / 108 closed) | 500 (282 open / 218 merged/closed) | None | 7/10 |
| NanoBot | 6 (2 open / 4 closed) | 140 (21 open / 119 merged/closed) | None | 7/10 |
| Hermes Agent | 50 (48 open / 2 closed) | 50 (43 open / 7 merged/closed) | None | 6/10 |
| PicoClaw | 3 (2 open / 1 closed) | 6 (6 open / 0 merged) | None | 4/10 |
| NanoClaw | 1 (1 open / 0 closed) | 8 (5 open / 3 merged/closed) | None | 6/10 |
| NullClaw | 0 | 0 | None | n/a |
| IronClaw | 23 (13 open / 10 closed) | 50 (25 open / 25 merged/closed) | None | 8/10 |
| LobsterAI | ~3 (closed; full update count not given) | 10 (3 open / 7 merged/closed) | 2026.8.11 | 8/10 |
| Moltis | 0 | 2 (2 open / 0 merged) | None | 5/10 |
| CoPaw | 23 (9 open / 14 closed) | 49 (24 open / 25 merged/closed) | v2.1.0-beta.3 | 8/10 |
| ZeptoClaw | 0 | 0 | None | n/a |
| ZeroClaw | 50 (40 open / 10 closed) | 50 (48 open / 2 merged/closed) | None | 6/10 |

## 3. OpenClaw's Position

OpenClaw remains the ecosystem's reference point and largest community surface. Its 24-hour volume — 500 issues and 500 PRs updated — is roughly an order of magnitude above the next tier, and it merged or closed 218 PRs in a single day, far more than any peer. Its main advantages are breadth: the widest channel coverage, a plugin/core architecture, active state repair, MCP centralization, and a large contributor pool. The technical approach is a centralized gateway plus plugin ecosystem, with strong SQLite state management and channel-specific adapters. Compared with peers, OpenClaw is the most general-purpose "assistant OS," whereas NanoBot, Hermes, PicoClaw, and CoPaw are more specialized around bot runtime, desktop UX, lightweight deployment, or console/TUI workflows. The main weaknesses are visible too: maintainer review is a bottleneck, 392 issues remain open, silent reply failures persist, and no release shipped despite very high merge velocity.

## 4. Shared Technical Focus Areas

Several requirements are emerging across multiple projects, independently:

- **Delivery guarantees and agent-loop safety**  
  OpenClaw has silent reply failures and Slack thread expiration; NanoBot has repeated identical messages and `/goal` reply storms; NanoClaw reports silent inbound message drops; Hermes misroutes background-process notifications; CoPaw spawns duplicate sessions for inter-agent messages. The shared need is idempotent delivery, loop detection, and observable session lifecycle.

- **Security, sandboxing, and credential isolation**  
  NanoBot has an `exec.allowPatterns` shell-chain bypass and provider API-key leakage via `os.environ`; ZeroClaw is fixing unbounded WebP decode, delegate workspace isolation, WebAuthn validation, and HTTP egress hardening; CoPaw has a plugin permission gap allowing silent cron creation and message injection; Hermes is redacting MCP credentials. The pattern: least-privilege execution, strict environment hygiene, and plugin permission models are becoming mandatory.

- **Memory, context, and provenance correctness**  
  OpenClaw is discussing memory trust tagging by source; IronClaw is fixing silent task eviction and token-estimator inaccuracy; PicoClaw has broken auto-compression for routed agents; CoPaw fixed memory flush before compression; ZeroClaw notes fragile prompt-and-parse memory consolidation. The shared need is trustworthy context management with provenance and bounded fallbacks.

- **Cost control and provider resilience**  
  OpenClaw is debating per-agent budget enforcement; NanoBot has fallback-model PRs; LobsterAI users report a single rate-limited model freezing the entire app; ZeroClaw closed a token-cost RFI without a committed design; CoPaw fixed stale provider capability caches. Operators want spend guardrails, circuit breakers, and per-provider failure isolation.

- **Protocol interoperability and MCP expansion**  
  ZeroClaw is building an OpenAI-compatible API; IronClaw is adding an ACP executor; NanoClaw merged remote Streamable HTTP MCP support; OpenClaw is centralizing MCP runtime logic; Moltis is adding local CalDAV connectors. MCP, ACP, and OpenAI-compatible surfaces are becoming the ecosystem's integration fabric.

## 5. Differentiation Analysis

| Project | Feature focus | Target users | Technical approach |
|---|---|---|---|
| OpenClaw | General-purpose assistant gateway, channels, plugins, memory | Self-hosters, enthusiasts, broad community | Central gateway + plugin/core split, SQLite state, MCP |
| NanoBot | Lightweight agent bot, WebUI, skills, cron, loop safety | Developers and bot builders | Python agent runtime, subprocess sandboxing, provider routing |
| Hermes Agent | Desktop-centric agent, Windows, WeChat/QQ/Feishu, TTS, Kanban | Desktop power users, especially Windows/Chinese platforms | Desktop app + gateway, cross-process session leases |
| PicoClaw | Small-footprint multi-agent dispatch, Telegram/LINE, guard commands | Lightweight/edge users, hobbyists | Single gateway, dispatch rules, allow/deny command guard |
| NanoClaw | Agent templates/plugins, MCP server support, skills | Claude/codex/opencode workflow users | Provider adapters + template-to-plugin migration |
| IronClaw | Platform-grade runtime, context correctness, tool disclosure, ACP | NEAR AI platform/cloud developers | Kernel/scheduler architecture, durable "reborn" state layer |
| LobsterAI | Chinese-market desktop assistant, Cowork, thinking levels | End-users/enterprise, Chinese UI | Electron desktop app + gateway, versioned model request options |
| Moltis | Local-first connector data, session management, CalDAV | Privacy-focused local users | Gateway + durable local connector layer |
| CoPaw | Console/TUI assistant, marketplace, memory, computer-use | Power users, Qwen ecosystem | Console/desktop + MCP tools, memory lifecycle management |
| ZeroClaw | Security-hardened daemon, SOP, goal mode, OpenAI-compatible API | Security-conscious developers/enterprises | Rust daemon, RFC-driven design, WebAuthn, sandboxing |

## 6. Community Momentum & Maturity

The ecosystem splits into three momentum tiers.

- **Tier 1 — Rapidly iterating and merging:** OpenClaw, IronClaw, CoPaw, and LobsterAI. OpenClaw has the highest absolute activity; IronClaw and CoPaw show strong merge-to-open ratios; LobsterAI shipped a release and is closing user-reported issues quickly.
- **Tier 2 — Active but bottlenecked or hardening:** NanoBot, Hermes, ZeroClaw, and NanoClaw. NanoBot has very high PR churn but many conflict-labeled PRs need rebases. Hermes is merging steadily but carries a serious Windows reliability bug cluster. ZeroClaw is design-heavy with low merge throughput. NanoClaw is small but steady.
- **Tier 3 — Quiet or stalled:** PicoClaw, Moltis, NullClaw, and ZeptoClaw. PicoClaw has zero merges and all PRs marked stale. Moltis has no issue activity and no merges. NullClaw and ZeptoClaw had no activity at all.

Overall, the ecosystem is not uniformly healthy: high activity often means high issue backlog, and low activity often means maintainer-review stalls rather than project stability.

## 7. Trend Signals

Several industry-level trends are visible from community feedback:

- **Silent failure is the top trust killer.** Users across OpenClaw, NanoBot, NanoClaw, and Hermes report messages disappearing, duplicate replies, or no visible error. Agent developers should treat delivery idempotency, watchdog loops, and "dropped message" observability as core features, not edge cases.

- **Security is moving from optional to baseline.** The most severe open issues are allowlist bypasses, API-key leaks, plugin permission gaps, and sandbox escapes. Developers should assume agents will be targeted and build least-privilege defaults into the execution core.

- **Memory needs provenance and bounded fallbacks.** Memory trust tagging, context-window accounting, and compression safety are recurring themes. The next generation of agents will need source-aware memory and explicit handling of context overflow.

- **Cost governance is a product requirement, not an admin nicety.** Runaway retry loops, rate-limit cascades, and silent token spend are causing real financial damage. Per-agent budgets, provider failover, and token accounting are becoming table stakes.

- **Standard protocols are the integration path.** MCP, ACP, and OpenAI-compatible APIs are appearing across projects as the common language for tools, model providers, and clients. Building on these standards will be safer than proprietary integrations.

- **Local-first and privacy-preserving data access is emerging.** Moltis' CalDAV connectors and NanoClaw's MCP server support signal demand for agents that can work over local, private data without depending on cloud availability.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Digest — 2026-08-12

## Today's Overview

NanoBot is in a high-activity maintenance and feature-development window: 6 issues were updated in the last 24h (2 open, 4 closed), while 140 PRs received updates, with 119 now closed/merged and 21 open. No releases were published. The period skews toward security hardening and agent-loop reliability, with an open `exec.allowPatterns` bypass advisory (#5306) and pending fix PRs for repeated tool-call loops and sustained-goal runaway (#5344, #5257). The issue tracker also shows continued user concern about API key isolation and subprocess environment hygiene.

## Releases

No new releases were published in this window.

## Project Progress

- **PR volume:** 140 pull requests were updated in the last 24h; 119 are closed/merged and 21 remain open.
- **Visible closed PRs:** Many of the visible closed PRs carry a `conflict` label, e.g. provider additions like Xiaomi MiMo (#2181), kimi-coding (#1367), and OpenCode Zen (#1094), plus feature PRs for Tavily search (#1321), fallback models (#1199), cron hot reload (#1114), Telegram inline keyboards (#1020), cron channel metadata (#1002), and contributing guidelines (#1383). These appear to be closed as stale/conflicting rather than merged; maintainers may need rebased follow-ups if those features are still wanted.
- **Active open PRs indicate the next likely merge wave:**
  - #5344 — warn instead of silently spiraling on repeated identical tool calls
  - #5345 — fixes the `exec.allowPatterns` shell-chain security bypass
  - #5257 — bounds sustained-goal continuation when the turn goes idle
  - #5314 — decodes nested JSON tool arguments by schema
  - #5341 — makes the weather skill Windows-safe
  - #5342 — redesigns app discovery in the WebUI
  - #5328 — adds OrcaRouter as a named gateway provider
  - #5283 — adds per-session sandbox isolation for non-WebUI channels
  - #4291 — lets subagents use configurable model presets
  - #4145 — fixes the weather skill workflow

## Community Hot Topics

- **#5327 — [bug] Nanobot repeats multiple times the same message while reasoning**  
  <https://github.com/HKUDS/nanobot/issues/5327>  
  The most commented issue of the window (9 comments). Users report random repetition of phrases such as “Good points, let me investigate the issue” during multi-step reasoning. It was closed, but no separate fix PR is visible in the sampled data.

- **#5256 — [bug] `/goal` message produces dozens of repeated replies**  
  <https://github.com/HKUDS/nanobot/issues/5256>  
  Open issue with a matching open fix PR #5257. A single `/goal` caused many near-identical replies while waiting for user input, stopping only after user intervention or model self-recognition of a loop.

- **#4784 — Security: Provider API keys leaked between providers via global `os.environ` mutation**  
  <https://github.com/HKUDS/nanobot/issues/4784>  
  Closed security report about gateway providers overwriting shared `os.environ` entries. It points to a real architectural concern around provider key isolation.

- **#5306 — [Security] `exec.allowPatterns` shell-chain bypass**  
  <https://github.com/HKUDS/nanobot/issues/5306>  
  Open security advisory; fix PR #5345 is now open and references it directly.

Underlying demand: users want the agent loop to be self-limiting and observable, and they want sandboxing/allowlist guarantees that cannot be bypassed through shell syntax or leaked environment variables.

## Bugs & Stability

Ranked roughly by severity:

1. **High — `exec.allowPatterns` shell-chain bypass allows unintended command execution**  
   #5306 <https://github.com/HKUDS/nanobot/issues/5306>  
   Open security issue. Fix PR exists: #5345 <https://github.com/HKUDS/nanobot/pull/5345>.

2. **High — Provider API keys leaked between providers / to subprocesses**  
   #4784 <https://github.com/HKUDS/nanobot/issues/4784>  
   #4783 <https://github.com/HKUDS/nanobot/issues/4783>  
   Both are closed, but they represent serious environment-isolation issues. No release was cut in this window, so users may not yet have the fixes in a published version.

3. **Medium — `/goal` produces repeated reply storms**  
   #5256 <https://github.com/HKUDS/nanobot/issues/5256>  
   Open; fix PR #5257 <https://github.com/HKUDS/nanobot/pull/5257> is in review.

4. **Medium — Repeated identical messages during reasoning**  
   #5327 <https://github.com/HKUDS/nanobot/issues/5327>  
   Closed; likely related to the same loop-detection gap that #5344 addresses.

5. **Low/parser — Nested JSON tool arguments rejected by schema validation**  
   Addressed in PR #5314 <https://github.com/HKUDS/nanobot/pull/5314>, fixing #5311.

6. **Low/portability — Weather workflow broken on Windows PowerShell `curl` alias**  
   Addressed in PR #5341 <https://github.com/HKUDS/nanobot/pull/5341>.

## Feature Requests & Roadmap Signals

- **OpenRouter server tools support**  
  #5333 <https://github.com/HKUDS/nanobot/issues/5333>  
  A closed enhancement request asking for OpenRouter server-side tools like Web Search and Web Fetch. No implementation PR is visible in the sample, but it signals demand for gateway-managed tools.

- **OrcaRouter provider support**  
  #5328 <https://github.com/HKUDS/nanobot/pull/5328>  
  Open PR adding a 150+ model routing gateway. Suggests the provider ecosystem remains a priority.

- **App discovery redesign**  
  #5342 <https://github.com/HKUDS/nanobot/pull/5342>  
  Open WebUI redesign with curated featured apps, registry-backed discovery, and offline fallback.

- **Per-session sandbox isolation**  
  #5283 <https://github.com/HKUDS/nanobot/pull/5283>  
  Open opt-in isolation mode for non-WebUI channels; aligns with security requests from #4784/#4783/#5306.

- **Subagent model presets**  
  #4291 <https://github.com/HKUDS/nanobot/pull/4291>  
  Open since June; would let parent agents spawn subagents with different provider/model presets.

Likely next-version candidates are the loop-hardening and security fixes (#5344, #5345, #5257, #5314), plus actively maintained feature PRs such as #5328 and #5342.

## User Feedback Summary

Users are stress-testing NanoBot with both real workloads and security audits. The strongest dissatisfaction signals are around **agent loop behavior**: repeated identical reasoning messages and dozens of `/goal` replies waste tokens, confuse users, and make the agent look stuck (#5327, #5256). **Security** is another major theme: users expect provider API keys to stay isolated and CLI subprocesses to receive a minimal environment (#4784, #4783). There is also demand for stricter shell allowlisting that cannot be bypassed with command chaining (#5306). On the positive side, #5333 explicitly thanks maintainers for the project, and the large number of contributor PRs — despite many ending up in conflict — shows strong external interest in provider integrations, tools, and WebUI improvements.

## Backlog Watch

- **#5256 — open `/goal` repeat bug**  
  <https://github.com/HKUDS/nanobot/issues/5256>  
  User-facing bug since 2026-08-05; fix PR #5257 has been open for several days and needs review/merge.

- **#5306 — open `exec.allowPatterns` security bypass**  
  <https://github.com/HKUDS/nanobot/issues/5306>  
  Security issue since 2026-08-09; fix PR #5345 should be prioritized.

- **#4291 — subagent model presets**  
  <https://github.com/HKUDS/nanobot/pull/4291>  
  Open since 2026-06-11 and tagged `conflict`; needs maintainer attention to rebase and review or close explicitly.

- **#4145 — weather skill fix**  
  <https://github.com/HKUDS/nanobot/pull/4145>  
  Open since 2026-06-01 and tagged `conflict`; long-unanswered and needs a maintainer decision.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-12

## 1. Today's Overview
Hermes Agent remains highly active: 50 issues were updated in the last 24 hours (48 open, 2 closed) and 50 PRs were updated (43 open, 7 merged/closed). No new releases were published. The ongoing epic to shard all god-files continues to dominate discussion with 67 comments on the repo-wide refactoring issue, while Windows Desktop reliability and process/session state correctness are the most prominent bug themes. Several targeted fix PRs were filed today, including TTS codec handling, background-process session pinning, and WhatsApp auth atomicity.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
The data shows **7 PRs merged or closed** in the last day, but none appear in the top-20 by comment list, so specific merged titles are not visible in this snapshot. One visible closure is issue **#84089** — [“hermes kanban show fails for every task: ProgrammingError: Cannot operate on a closed database”](https://github.com/NousResearch/hermes-agent/issues/84089) — which was closed as duplicate.

The active PR pipeline shows steady progress:
- [#84174](https://github.com/NousResearch/hermes-agent/pull/84174) — pins background process completion delivery to the spawning session, directly addressing #83213.
- [#84181](https://github.com/NousResearch/hermes-agent/pull/84181) — forces Opus codec for local Ogg TTS output, fixing silent voice-bubble degradation (#84102).
- [#84180](https://github.com/NousResearch/hermes-agent/pull/84180) — persists WhatsApp auth state atomically so a full disk cannot erase a paired session.
- [#84145](https://github.com/NousResearch/hermes-agent/pull/84145) — adds the DB storage layer for cross-process turn leases, moving #67442 forward.
- [#84153](https://github.com/NousResearch/hermes-agent/pull/84153) — redacts MCP credentials in `hermes config get` output, a security improvement.

## 4. Community Hot Topics
The most-discussed issues in the last 24h reflect three underlying needs: architecture cleanup, cross-process reliability, and platform stability.

- **[#78647 — Epic: Shard all 20 god files — repo-wide god-file decomposition](https://github.com/NousResearch/hermes-agent/issues/78647) — 67 comments**  
  The highest-engagement item by far. The community and maintainers are aligning on the standing policy that god-files are never reverted, only sharded. This is a long-running refactor with clear mandate.

- **[#67442 — Cross-process turn serialization: CLI-continuity sessions need a DB-level lease](https://github.com/NousResearch/hermes-agent/issues/67442) — 14 comments**  
  A narrow but significant race condition when separate OS processes share a gateway session. The discussion has produced a dedicated storage PR (#84145), indicating maintainers are actively moving this forward.

- **[#66616 — Skills index is stale or degraded](https://github.com/NousResearch/hermes-agent/issues/66616) — 13 comments**  
  Automated watchdog reports the skills index is 29.8h old (limit 26h). This is an automated probe, but the recurring nature suggests a CI scheduling issue.

- **[#78642 — Shard `tools/mcp_tool.py` god-file decomposition](https://github.com/NousResearch/hermes-agent/issues/78642) — 11 comments**  
  Seven-thousand-line file; part of the same sharding epic.

- **[#49190 — Generalize Kanban notifications into an event substrate](https://github.com/NousResearch/hermes-agent/issues/49190) — 8 comments**  
  Long-standing design proposal to decouple notifications from the gateway platform. Still in decision phase.

- **[#83683 — Desktop restart reaps live gateway but never relaunches (WeChat/QQ silent)](https://github.com/NousResearch/hermes-agent/issues/83683) — 6 comments**  
  P1 regression on Windows; high user impact.

## 5. Bugs & Stability
Ranked by severity, with fix PRs where they exist:

**P1 — Windows Desktop / Update chain**
- [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) — Desktop restart kills gateway and doesn’t relaunch; WeChat/QQ/Telegram go silent. Regression.
- [#83562](https://github.com/NousResearch/hermes-agent/issues/83562) — After Windows Desktop update, backend works manually but Desktop reports “Hermes backend exited (0)”.
- [#63717](https://github.com/NousResearch/hermes-agent/issues/63717) — Comprehensive Windows update failure chain with 7 correlated root causes, no fix PR yet.
- [#62792](https://github.com/NousResearch/hermes-agent/issues/62792) — Desktop backend uses venv Python on Windows, locking `.pyd` files and blocking updates.
- Also duplicates: [#68760](https://github.com/NousResearch/hermes-agent/issues/68760) (`hermes.exe` locked, WinError 32), [#82186](https://github.com/NousResearch/hermes-agent/issues/82186) (Update button fails with WinError 5 since Hermes-managed Node).

**P2 — Runtime / Session / Delivery**
- [#73779](https://github.com/NousResearch/hermes-agent/issues/73779) — Feishu multiplex mode WebSocket loop dies with “Future attached to a different loop”; gateway silently stops receiving.
- [#83213](https://github.com/NousResearch/hermes-agent/issues/83213) — Background process completion notifications misrouted after `/new`; **fix PR #84174** filed.
- [#84169](https://github.com/NousResearch/hermes-agent/issues/84169) — Empty `tool_calls` array gets 400 from strict OpenAI-compatible providers (Console Go/opencode.ai).
- [#84172](https://github.com/NousResearch/hermes-agent/issues/84172) — `platform_toolsets.webhook` key ignored; webhook sessions cannot access platform tools.
- [#83427](https://github.com/NousResearch/hermes-agent/issues/83427) — `browser_exec` crashes with `pydantic_core` ModuleNotFoundError under Desktop.
- [#82846](https://github.com/NousResearch/hermes-agent/issues/82846) — Smart-approval auxiliary LLM call has no timeout; stalled provider wedges agent.
- [#80016](https://github.com/NousResearch/hermes-agent/issues/80016) — Email adapter swallows all IMAP failures, never triggers fatal-error/reconnect path.
- [#81410](https://github.com/NousResearch/hermes-agent/issues/81410) — Single-process Nous OAuth refresh returns `invalid_grant` after event-loop stall.

**P2/P3 — Media / TTS**
- [#84102](https://github.com/NousResearch/hermes-agent/issues/84102) — Local TTS providers write Ogg/Vorbis into `.ogg` paths, degrading platform voice bubbles; **fix PR #84181** filed.

## 6. Feature Requests & Roadmap Signals
Clear roadmap signals are visible in both issues and PRs:

- **[#80222](https://github.com/NousResearch/hermes-agent/issues/80222) — per-call model and `reasoning_effort` overrides on `delegate_task`**  
  User request to escape global delegation config. Small, high-value; likely candidate for near-term release.

- **[#83244](https://github.com/NousResearch/hermes-agent/issues/83244) — Add Google Antigravity as a first-class OAuth provider**  
  New provider request; community actively wants more OAuth options.

- **[#82591](https://github.com/NousResearch/hermes-agent/issues/82591) — Kanban zero-authority workers, durable publication, safe reclaim, and godfile eradication**  
  Detailed multi-part implementation plan; ties into the sharding epic.

- **[#49190](https://github.com/NousResearch/hermes-agent/issues/49190) — generalize Kanban notifications into an event substrate**  
  Still needs a decision; would unlock any-surface subscribers.

- New PRs to watch: [#83907](https://github.com/NousResearch/hermes-agent/pull/83907) (subagent handles registry + mid-flight messaging), [#82243](https://github.com/NousResearch/hermes-agent/pull/82243) (compose deferred MCP/plugin tools in `execute_code`), [#82056](https://github.com/NousResearch/hermes-agent/pull/82056) (title args for terminal/code-exec), [#84178](https://github.com/NousResearch/hermes-agent/pull/84178) (Nix home-manager module).

**Prediction:** The next minor release will likely include the TTS codec fix (#84181), process-session pinning (#84174), and config redaction (#84153). Larger features like delegate overrides and Antigravity OAuth remain under evaluation.

## 7. User Feedback Summary
Real user pain points from the last 24h:

- **Windows Desktop reliability is the top dissatisfaction.** At least five open issues/duplicates are update/relaunch failures on Windows. Users report silent messaging gateways, repair installs not fixing the problem, and update buttons completely broken.
- **Session/state confusion is a recurring theme**: background process notifications going to the wrong session (#83213), cross-process lease edge cases (#67442), and OAuth invalidation after event-loop stalls (#81410).
- **Platform integrations are fragile**: Feishu WebSocket crashes, WhatsApp auth loss on full disk, Email adapter masking failures, TTS audio producing unplayable voice bubbles.
- **Positive signals**: users are submitting high-quality feature PRs (Nix module, subagent handles, terminal titles) and detailed bug reports with root-cause analysis, indicating an engaged and technical community.

## 8. Backlog Watch
Items that appear stale or under-attended despite importance:

- **[#29590](https://github.com/NousResearch/hermes-agent/issues/29590) — Hardcoded max_tokens and verbose prompt in `vision_tools.py` cause severe latency**  
  P2, opened 2026-05-21, only 2 comments. No linked PR. This has been unresolved for nearly 3 months.

- **[#49190](https://github.com/NousResearch/hermes-agent/issues/49190) — Generalize Kanban notifications into event substrate**  
  Open since 2026-06-19, 8 comments, still `needs-decision`. The proposal is detailed and uncontroversial; maintainer decision is overdue.

- **[#53894](https://github.com/NousResearch/hermes-agent/pull/53894) — Session-owned profile-keyed shell hooks for dashboard/TUI**  
  Open since 2026-06-28 with high complexity labels; still not merged after six weeks.

- **[#53811](https://github.com/NousResearch/hermes-agent/pull/53811) — Stable tiebreaker for `list_sessions_rich` ordering**  
  Open since 2026-06-27. Small deterministic ordering fix; may be blocked on maintainer capacity.

- **[#68608](https://github.com/NousResearch/hermes-agent/pull/68608) — Gate kanban worker protocol on dispatch context**  
  Open since 2026-07-21, `needs-decision`. Addresses #68592 but has not moved in weeks.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-12

## Today's Overview
PicoClaw saw quiet but active review traffic on 2026-08-12: 3 issues and 6 pull requests were updated in the last 24 hours, with no new releases. No PRs were merged or closed, leaving all open PRs still awaiting maintainer review. Two open bugs received attention — a context-management issue for dispatch-routed agents (#3301) and inert LINE webhook settings (#3328) — each with a corresponding open fix PR. One issue (#3294) was closed as stale. Overall, the project appears to be in a “fixes queued but not landed” phase, with several PRs needing maintainer follow-through.

## Releases
No new releases were published in the last 24 hours. There are no new release notes, breaking changes, or migration notes to report.

## Project Progress
- **Merged/closed PRs today:** 0.
- All 6 open PRs were updated, but none advanced to merge.

Notable open PRs in progress:
- [PR #3316](https://github.com/sipeed/picoclaw/pull/3316) — Fix routed-agent context management for history, summarization, compression, and seahorse bootstrap.
- [PR #3314](https://github.com/sipeed/picoclaw/pull/3314) — Fix `customAllowPatterns` being overridden by default deny rules in `guardCommand`.
- [PR #3329](https://github.com/sipeed/picoclaw/pull/3329) — Warn on inert `line.settings.webhook_host` / `webhook_port` instead of seeding unused config.
- [PR #3315](https://github.com/sipeed/picoclaw/pull/3315) — Support Telegram topics in private bot chats.
- [PR #3317](https://github.com/sipeed/picoclaw/pull/3317) — Log prompt cache tokens in LLM response debug output.
- [PR #3299](https://github.com/sipeed/picoclaw/pull/3299) — Add native Exa web search provider.

No features were officially merged today, but these PRs indicate the next batch of fixes and enhancements is under active development.

## Community Hot Topics
The highest-discussion items were the two issues with 3 comments each:

- [Issue #3301](https://github.com/sipeed/picoclaw/issues/3301) — **\[BUG\] `/clear` and session auto-compression don’t work in chats routed to non-default agent via dispatch rules.**  
  Users report that dispatch-routed agent chats lose context and never trigger auto-compaction. Underlying need: reliable per-channel/per-agent session memory when using multiple agents with dispatch rules.

- [Issue #3294](https://github.com/sipeed/picoclaw/issues/3294) — **\[stale\] `/list models` only shows the current model instead of all configured models.**  
  Closed as stale, but the discussion shows users expect `/list models` to reflect the full configured `model_list`. Underlying need: better model visibility/management in chat UIs like Telegram.

No PRs had visible comment counts or reactions in the provided data.

## Bugs & Stability
Bugs reported or updated today, ranked by severity:

1. **High — [Issue #3301](https://github.com/sipeed/picoclaw/issues/3301): Routed-agent context management broken.**  
   When a chat is routed to a non-default agent via dispatch rules, `/clear` and auto-compression do not work, and the agent does not retain previous messages. This directly affects multi-agent workflows.  
   **Fix PR exists:** [PR #3316](https://github.com/sipeed/picoclaw/pull/3316), still open.

2. **Medium — [Issue #3328](https://github.com/sipeed/picoclaw/issues/3328): `line.settings.webhook_host` / `webhook_port` are never read.**  
   These config values are declared, defaulted, documented, and env-bound, but nothing consumes them. Setting them has no effect and there is no warning. This is a configuration-trust issue for LINE channel deployments.  
   **Fix PR exists:** [PR #3329](https://github.com/sipeed/picoclaw/pull/3329), still open.

3. **Low / Closed — [Issue #3294](https://github.com/sipeed/picoclaw/issues/3294): `/list models` only shows current model.**  
   Closed as stale, but the user-visible behavior may still be incorrect. Users with multiple configured models cannot list them via the chat command.

## Feature Requests & Roadmap Signals
The open PRs and issues point toward several user-requested enhancements that could land in a future release:

- **Native Exa web search provider** — [PR #3299](https://github.com/sipeed/picoclaw/pull/3299) adds Exa as a `tools.web` / `web_search` provider with range filters.
- **Telegram topics in private bot chats** — [PR #3315](https://github.com/sipeed/picoclaw/pull/3315) extends topic support beyond forum supergroups.
- **Prompt cache token logging** — [PR #3317](https://github.com/sipeed/picoclaw/pull/3317) improves LLM usage observability for gateway logs.
- **`/list models` listing all configured models** — although [Issue #3294](https://github.com/sipeed/picoclaw/issues/3294) was closed as stale, the expectation remains that the command should match its description.

If merged, the most likely near-term additions are the Exa provider, Telegram private-chat topic support, and cache-token logging — all low-risk, incremental features.

## User Feedback Summary
Users are actively configuring PicoClaw for real-world multi-agent, multi-channel, and multi-provider setups. The main pain points expressed in the last 24 hours:

- Dispatch-rule routing to non-default agents loses conversation history and never triggers automatic compression, making long-running agent sessions unreliable.
- Some documented config options, like LINE webhook host/port, are silently ignored, undermining trust in configuration.
- `customAllowPatterns` does not work as expected because default deny patterns take precedence, blocking commands like `git push`.
- Telegram’s private bot chat topic mode is not supported, only forum supergroups.
- Users want native Exa web search rather than relying on external workarounds.

Overall, users are engaged and providing detailed reproductions, but dissatisfaction is visible when config options and command descriptions do not match actual behavior. The sentiment would likely improve if the pending fix PRs were merged and released.

## Backlog Watch
Several items need maintainer attention:

- [PR #3299](https://github.com/sipeed/picoclaw/pull/3299) — **Native Exa web search provider** (created 2026-07-26). This is the oldest open PR and is marked `[stale]`. It has not been merged or explicitly rejected.
- [PR #3316](https://github.com/sipeed/picoclaw/pull/3316) — **Routed-agent context fix** for [Issue #3301](https://github.com/sipeed/picoclaw/issues/3301). This is an important bug fix and is also marked `[stale]`.
- [PR #3315](https://github.com/sipeed/picoclaw/pull/3315) and [PR #3317](https://github.com/sipeed/picoclaw/pull/3317) — Both are feature-quality PRs labeled `[stale]`.
- [Issue #3301](https://github.com/sipeed/picoclaw/issues/3301) — High-impact bug with an open fix PR that has not been reviewed/merged.

The number of `[stale]` PRs, combined with zero merges today, suggests maintainer bandwidth may be limited. Prioritizing #3316 and #3299 would unblock the most user-visible fixes and features.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-12

## Today's Overview
NanoClaw saw moderate activity over the last 24 hours: 1 open issue and 8 pull requests were updated, of which 3 PRs were closed/merged. No new releases were published. The main forward motion is around MCP server support and the ongoing agent-template-to-plugin migration, while the single new issue highlights a potentially serious silent inbound-message loss bug. Overall project health appears stable, with active core-team contributions and a steady stream of community-submitted fixes and skills.

## Releases
No new releases were published in the reporting period.

## Project Progress
Three PRs moved to closed/merged:

- **#3190 — [CLOSED] feat: add Tavily MCP tool skill**  
  Adds a standalone Tavily MCP utility skill in `.claude/skills/`, expanding the skill ecosystem.  
  [nanocoai/nanoclaw PR #3190](https://github.com/nanocoai/nanoclaw/pull/3190)

- **#3092 — [CLOSED] feat: support remote Streamable HTTP MCP servers**  
  Core engine and Claude provider support for remote Streamable HTTP MCP servers (`{ type: 'http', url }` entries).  
  [nanocoai/nanoclaw PR #3092](https://github.com/nanocoai/nanoclaw/pull/3092)

- **#3221 — [CLOSED] feat(providers): remote Streamable HTTP MCP servers for codex and opencode**  
  Extends the merged #3092 support to codex and opencode provider payloads, which previously assumed stdio-only MCP configs.  
  [nanocoai/nanoclaw PR #3221](https://github.com/nanocoai/nanoclaw/pull/3221)

Also notable: **#3220** (“feat!: agent templates become Agent Plugins 1.0.0 directories”) remains open and indicates a major template-format migration in progress.  
[nanocoai/nanoclaw PR #3220](https://github.com/nanocoai/nanoclaw/pull/3220)

## Community Hot Topics
The only issue updated in the period is also the most active item:

- **#3226 — Inbound messages silently dropped when a platform reuses a message id**  
  Open issue with 1 comment. The symptom — messages disappearing with no user-visible sign — resonates as a reliability/trust problem. The underlying need is idempotent handling of reused platform message IDs plus visibility when deduplication drops a message.  
  [nanocoai/nanoclaw Issue #3226](https://github.com/nanocoai/nanoclaw/issues/3226)

No PRs in the data show comment/reaction counts beyond defaults, so the community discussion focus is clearly on this inbound-message reliability issue.

## Bugs & Stability
Ranked by severity:

1. **High — Silent inbound message loss**  
   [#3226](https://github.com/nanocoai/nanoclaw/issues/3226): reused platform message IDs cause messages to be silently dropped before reaching the agent. Users experience this as “the agent ignored me.” No fix PR is linked yet.

2. **Medium — Upgrades are not transactional**  
   [#3195 — fix(update): make NanoClaw upgrades transactional](https://github.com/nanocoai/nanoclaw/pull/3195): open PR addressing the risk of partial/broken upgrades.

3. **Medium — Missing DB backfill for channel destinations**  
   [#3145 — fix(db): backfill destinations for existing wirings](https://github.com/nanocoai/nanoclaw/pull/3145): migration 021 preserves existing destinations and custom local names while provisioning missing channel destinations.

4. **Low/Medium — macOS setup missing Apple Silicon + Colima env vars in launchd plist**  
   [#2134 — fix(setup)](https://github.com/nanocoai/nanoclaw/pull/2134): open PR affecting Apple Silicon/Colima users; pending maintainer attention.

## Feature Requests & Roadmap Signals
- **Agent Templates → Agent Plugins 1.0.0**  
  [#3220](https://github.com/nanocoai/nanoclaw/pull/3220) is a breaking-format migration of agent templates into “Agent Plugin” directories. Combined with [#2909](https://github.com/nanocoai/nanoclaw/pull/2909) (setup wizard template flow and first-agent stamping), the next major direction is clearly a first-class template/plugin system.

- **Remote Streamable HTTP MCP servers**  
  Merged in [#3092](https://github.com/nanocoai/nanoclaw/pull/3092) and [#3221](https://github.com/nanocoai/nanoclaw/pull/3221), this is now planned/across Claude, codex, and opencode providers.

- **Tavily MCP skill**  
  [#3190](https://github.com/nanocoai/nanoclaw/pull/3190) signals demand for search-backed MCP tool skills in the library.

Next release likely includes the template-plugin migration, setup-wizard stamping, and remote HTTP MCP support for all providers.

## User Feedback Summary
The main expressed pain point is **inbound reliability** (#3226): users cannot distinguish between platform/agent failure and being ignored, because dropped messages leave no trace. This indicates a need for better observability and safe deduplication. On the positive side, community members are actively submitting useful skills and fixes (Tavily skill, DB backfill, launchd setup), and core-team members are following up with cross-provider hardening — a sign of a responsive maintainer community.

## Backlog Watch
- **#2134 — setup fix for Apple Silicon + Colima**  
  Open since **2026-04-29**, updated 2026-08-11. This is the oldest open PR in the set and appears to need maintainer review/merge.  
  [nanocoai/nanoclaw PR #2134](https://github.com/nanocoai/nanoclaw/pull/2134)

- **#2909 — template setup flow in wizard and first-agent stamping**  
  Open since **2026-07-02**, core-team PR; important for the template/plugin roadmap but still open.  
  [nanocoai/nanoclaw PR #2909](https://github.com/nanocoai/nanoclaw/pull/2909)

- **#3145 — DB migration backfill**  
  Open since **2026-07-28**; a data-integrity fix that could matter for existing installs.  
  [nanocoai/nanoclaw PR #3145](https://github.com/nanocoai/nanoclaw/pull/3145)

- **#3195 — transactional upgrade support**  
  Open since **2026-08-06**; important for safe self-upgrades.  
  [nanocoai/nanoclaw PR #3195](https://github.com/nanocoai/nanoclaw/pull/3195)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-12

## Today's Overview

IronClaw saw very high activity in the last 24 hours: **23 issues updated** (13 open / 10 closed) and **50 PRs updated** (25 open / 25 merged-or-closed), with **no new releases published**. The dominant themes were “reborn” architecture work: context-window correctness, tool-disclosure safety, memory alias handling, channel unification, and profile-agnostic durable storage. A large batch of QA-reported hallucination bugs from earlier in the week were closed, which is a positive stability signal. Overall project health looks good, though several high-risk epics and correctness fixes remain open.

## Releases

No new releases were published in this window.

## Project Progress

Closed/merged PRs in the visible set:

- [nearai/ironclaw#6997](https://github.com/nearai/ironclaw/pull/6997) — Explicit Anthropic `cache_control` breakpoints on both rig/API-key and OAuth transports; closes [#6984](https://github.com/nearai/ironclaw/issues/6984), P0 #1 of the pi-harness adoption program.
- [nearai/ironclaw#7471](https://github.com/nearai/ironclaw/pull/7471) — Process lease expiry now recovers safe runs instead of failing them; journal heartbeat pool isolated from data-plane Postgres traffic.
- [nearai/ironclaw#7470](https://github.com/nearai/ironclaw/pull/7470) — Restored listability for thread index rows missing ordered-projection metadata.
- [nearai/ironclaw#7503](https://github.com/nearai/ironclaw/pull/7503) — Retains the accepted user task across context eviction; oversized tasks fail with `BudgetExceeded` instead of being silently dropped.
- [nearai/ironclaw#7514](https://github.com/nearai/ironclaw/pull/7514) — Enables Railway sandbox shell for the hosted volume profile with a strict release-only environment alias.
- [nearai/ironclaw#7480](https://github.com/nearai/ironclaw/pull/7480) — WebUI long conversation titles now reveal on hover via an overflow-aware marquee component.

Also closed in the issue tracker:

- [nearai/ironclaw#7317](https://github.com/nearai/ironclaw/issues/7317) — Doc-Truth Verification Pipeline proposal.
- [nearai/ironclaw#7405](https://github.com/nearai/ironclaw/issues/7405) — Deferred tool discovery improvements with full signatures and namespace-aware catalog previews.
- [nearai/ironclaw#7487](https://github.com/nearai/ironclaw/issues/7487) / [nearai/ironclaw#7488](https://github.com/nearai/ironclaw/issues/7488) — Tool-disclosure bug fixes: `tool_search` no longer disarms describe-first, and bridge tools no longer force exclusive serialized discovery.
- [nearai/ironclaw#7483](https://github.com/nearai/ironclaw/issues/7483) — Default NEAR AI connection/model probes now use the authenticated runtime session.
- QA truthfulness bugs [nearai/ironclaw#7246](https://github.com/nearai/ironclaw/issues/7246), [nearai/ironclaw#7247](https://github.com/nearai/ironclaw/issues/7247), and [nearai/ironclaw#7294](https://github.com/nearai/ironclaw/issues/7294) were closed.

## Community Hot Topics

Most commented issues in the last 24 hours:

- [nearai/ironclaw#7482](https://github.com/nearai/ironclaw/issues/7482) — **3 comments** · Epic: Pluggable agent loops — ACP executor, edge credential injection, kernel architecture.  
  Active discussion around making IronClaw a kernel/scheduler rather than owning agent loops and per-integration tool code. This is a high-risk architectural signal.

- [nearai/ironclaw#7317](https://github.com/nearai/ironclaw/issues/7317) — **3 comments** · Proposal: Doc-Truth Verification Pipeline.  
  Community interest in preventing stable-release breaking changes from shipping without matching docs, e.g. `origin_gate_matrix`.

- [nearai/ironclaw#7405](https://github.com/nearai/ironclaw/issues/7405) — **2 comments** · Deferred tool discovery with complete signatures and catalog previews.  
  Focused on reducing model turns and improving catalog awareness at large tool counts.

No PRs showed non-zero comment counts in the visible data, and no reactions were recorded.

## Bugs & Stability

### High severity

- [nearai/ironclaw#7484](https://github.com/nearai/ironclaw/issues/7484) — Context window silently evicts the task. Fix PRs [nearai/ironclaw#7503](https://github.com/nearai/ironclaw/pull/7503) and [nearai/ironclaw#7504](https://github.com/nearai/ironclaw/pull/7504) are open.
- [nearai/ironclaw#7485](https://github.com/nearai/ironclaw/issues/7485) — Token estimator double-counts ASCII, halving the effective context window. No fix PR is visible yet.
- [nearai/ironclaw#7486](https://github.com/nearai/ironclaw/issues/7486) — Typed no-progress escape terminally fails legitimate long-running idempotent reads/polling. No fix PR is visible yet.
- [nearai/ironclaw#7476](https://github.com/nearai/ironclaw/issues/7476) — Delivery classification ignores `Failed` vendor message refs, hiding partial-send evidence from the model. No fix PR is visible yet.
- [nearai/ironclaw#7505](https://github.com/nearai/ironclaw/issues/7505) — Memory target-alias resolution is contract vocabulary but only implemented in one provider. Open fix PR: [nearai/ironclaw#7512](https://github.com/nearai/ironclaw/pull/7512).

### Medium severity

- [nearai/ironclaw#7490](https://github.com/nearai/ironclaw/issues/7490) — `retry_disposition()` silent-redrive table is dead code; needs wiring or removal.
- [nearai/ironclaw#7508](https://github.com/nearai/ironclaw/issues/7508) — GitHub MCP extension startup gives a confusing endpoint-verification prompt instead of connecting cleanly.
- [nearai/ironclaw#7489](https://github.com/nearai/ironclaw/issues/7489) — Tracking issue: `result_read` 24 KiB preview ceiling plus read-before-edit gate limits large-file workflows.

### Closed / fixed

- [nearai/ironclaw#7487](https://github.com/nearai/ironclaw/issues/7487) — `tool_search` marked tools disclosed without returning schemas; closed.
- [nearai/ironclaw#7488](https://github.com/nearai/ironclaw/issues/7488) — Bridge tools hardcoded `Exclusive` serialized discovery; closed.
- [nearai/ironclaw#7483](https://github.com/nearai/ironclaw/issues/7483) — Default NEAR AI probes failed without API key; closed.
- QA false-claim bugs [nearai/ironclaw#7246](https://github.com/nearai/ironclaw/issues/7246), [nearai/ironclaw#7247](https://github.com/nearai/ironclaw/issues/7247), and [nearai/ironclaw#7294](https://github.com/nearai/ironclaw/issues/7294) are closed, though the underlying pattern may still deserve systemic hardening.

## Feature Requests & Roadmap Signals

- [nearai/ironclaw#7482](https://github.com/nearai/ironclaw/issues/7482) — Epic: pluggable agent loops via ACP executor and kernel architecture. High risk; likely a longer-term architectural shift.
- [nearai/ironclaw#7467](https://github.com/nearai/ironclaw/issues/7467) — Epic: make Reborn durable state profile-agnostic and migrate legacy profile roots. Corresponding PR [nearai/ironclaw#7456](https://github.com/nearai/ironclaw/pull/7456) is open.
- [nearai/ironclaw#7496](https://github.com/nearai/ironclaw/issues/7496) — Host-mediated IdentyClaw Passport flow; new feature request with no stock path today.
- [nearai/ironclaw#7038](https://github.com/nearai/ironclaw/issues/7038) — Epic: Storybook + AI-first Design System, labeled for v1.3.0.
- [nearai/ironclaw#6879](https://github.com/nearai/ironclaw/issues/6879) — Epic: automation runs are hit-or-miss; also labeled v1.3.0.
- [nearai/ironclaw#7513](https://github.com/nearai/ironclaw/pull/7513) — New CLI `acp serve` command with streaming + cancel support; signals growing interest in ACP interoperability.

**Likely next-version content:** the v1.3.0-labeled work — automation reliability, design-system foundations, and deferred tool discovery — appears to be the near-term roadmap. Context-retention fixes ([#7503](https://github.com/nearai/ironclaw/pull/7503), [#7504](https://github.com/nearai/ironclaw/pull/7504)) and channel unification work ([#7477](https://github.com/nearai/ironclaw/pull/7477), [#7464](https://github.com/nearai/ironclaw/pull/7464), [#7515](https://github.com/nearai/ironclaw/pull/7515)) could land in the same release cycle.

## User Feedback Summary

Real user pain points visible in this window:

- **Truthfulness of agent state claims**: users reported agents falsely claiming GitHub is connected, automations are running, or routines already exist ([#7247](https://github.com/nearai/ironclaw/issues/7247), [#7246](https://github.com/nearai/ironclaw/issues/7246), [#7294](https://github.com/nearai/ironclaw/issues/7294)). These were closed, but the pattern suggests verification-first prompting is still fragile.
- **Setup and connection friction**: GitHub MCP extension shows confusing endpoint prompts ([#7508](https://github.com/nearai/ironclaw/issues/7508)); default NEAR AI provider probes fail without an API key ([#7483](https://github.com/nearai/ironclaw/issues/7483)); IronHub agent link cannot be completed from the WebUI ([#7516](https://github.com/nearai/ironclaw/pull/7516)).
- **Memory continuity concerns**: users expect durable facts to persist across conversations; memory-save guidance and MEMORY.md lane are being fixed in [nearai/ironclaw#7365](https://github.com/nearai/ironclaw/pull/7365), and target-alias inconsistency is tracked in [#7505](https://github.com/nearai/ironclaw/issues/7505).
- **Context-window and long-run reliability**: silent task eviction, token-estimator inaccuracy, and no-progress false positives are affecting long-running or small-model workflows ([#7484](https://github.com/nearai/ironclaw/issues/7484), [#7485](https://github.com/nearai/ironclaw/issues/7485), [#7486](https://github.com/nearai/ironclaw/issues/7486)).
- **Documentation trust**: breaking changes have shipped without doc updates, prompting the Doc-Truth Verification Pipeline proposal ([#7317](https://github.com/nearai/ironclaw/issues/7317)).

## Backlog Watch

- [nearai/ironclaw#6879](https://github.com/nearai/ironclaw/issues/6879) — Open since 2026-07-29, no comments, labeled v1.3.0: “Automation runs are hit-or-miss.” Needs scoping and owner attention.
- [nearai/ironclaw#7038](https://github.com/nearai/ironclaw/issues/7038) — Open since 2026-08-03, no comments: Epic for Storybook + AI-first Design System. A proposal exists but the epic itself is quiet.
- [nearai/ironclaw#5910](https://github.com/nearai/ironclaw/pull/5910) — Open PR since 2026-07-10, no visible comments; fixes approval-gate hydration on notification open. Long wait for review.
- [nearai/ironclaw#7490](https://github.com/nearai/ironclaw/issues/7490) — Dead-code `retry_disposition()` table needs either wiring or removal; open with no fix PR.
- [nearai/ironclaw#7476](https://github.com/nearai/ironclaw/issues/7476) — Delivery failure evidence is hidden from the model in the `MODEL` delivery path; open with no fix PR listed.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-12

## 1. Today's Overview

LobsterAI is in a healthy, high-velocity development cycle. In the last 24 hours, the project published a new release (2026.8.11), merged 7 PRs (including the sizeable `release/2026.8.10` batch into `main`), and closed 3 stale issues as housekeeping. Activity is concentrated around the Cowork agent feature area — scheduled-task visibility, per-model thinking levels, local-file workflows, and UX polish. One bugfix PR (#2475) for a just-shipped feature (per-model thinking level) is already open, indicating a fast feedback loop. Overall project health appears strong: regular releases, responsive maintainers, and a steady flow of community-contributed fixes.

---

## 2. Releases

### [LobsterAI 2026.8.11](https://github.com/netease-youdao/LobsterAI/releases) (published 2026-08-11)

**What's Changed:**
- `feat(cowork)`: add collapse-agent-tasks shortcut and allow modifier shortcuts while typing — [PR #2469](https://github.com/netease-youdao/LobsterAI/pull/2469)
- `feat(cowork)`: mark scheduled task sessions in sidebar — [PR #2...](https://github.com/netease-youdao/LobsterAI/pull/2469) by @liuzhq1986

Additionally, the **2026.8.10 release branch was merged into `main`** ([PR #2477](https://github.com/netease-youdao/LobsterAI/pull/2477)), bringing:
- Configurable model thinking levels (server-driven options, per-session/per-agent persistence)
- Improved Cowork progress visibility
- Scheduled-task identification in the sidebar
- Local-file workflow improvements
- Startup/runtime reliability fixes
- Settings interaction improvements

**Breaking changes / migration notes:** None documented. The model request options are now versioned (from #2457), implying a forward-compatible API contract.

---

## 3. Project Progress

**Merged/closed PRs (7):**

| PR | Description | Status |
|---|---|---|
| [#2477](https://github.com/netease-youdao/LobsterAI/pull/2477) | Merge `release/2026.8.10` → `main`: thinking levels, Cowork progress, reliability fixes | ✅ Merged |
| [#2457](https://github.com/netease-youdao/LobsterAI/pull/2457) | `feat(models)`: configurable thinking levels with server-driven options, OpenClaw alias mapping (`max` → `xhigh`), per-session persistence | ✅ Merged |
| [#2473](https://github.com/netease-youdao/LobsterAI/pull/2473) | `feat(cowork)`: right-click context menu for local file links — open-with/save-as/copy-path/copy-contents/copy-image/reveal-in-folder, plus new `dialog:saveFileCopy` IPC handler | ✅ Merged |
| [#2476](https://github.com/netease-youdao/LobsterAI/pull/2476) | `fix(ui)`: Escape now dismisses only the topmost modal layer (fixes nested-overlay double-dismiss, respects IME composition) | ✅ Merged |
| [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241) | `feat(settings)`: dirty-check confirmation before closing Settings with unsaved changes — fixes #1237 | ✅ Merged |
| [#1239](https://github.com/netease-youdao/LobsterAI/pull/1239) | `feat(main)`: flash taskbar icon (Windows) / bounce Dock icon (macOS) when AI task completes or errors in background | ✅ Merged |
| [#2474](https://github.com/netease-youdao/LobsterAI/pull/2474) | `fix(sidebar)`: align sites icon stroke weight | ✅ Merged |

**New/updated open PRs (3):**
- [#2475](https://github.com/netease-youdao/LobsterAI/pull/2475) — `fix(model-selector)`: per-model thinking level (fixes mutual-exclusion bug); root cause: single shared `thinking_level` field across agents/cowork sessions
- [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) — Dependabot: bump electron 40.2.1 → 43.3.0 (+ electron-builder)
- [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) — `fix(cowork)`: hide internal `[OpenClaw]` main-agent sessions from user-facing session list via new `hidden` column

---

## 4. Community Hot Topics

Most-discussed items in the last 24h (2 comments each):

- **[#1237 — Settings closes without confirmation, API Key silently lost](https://github.com/netease-youdao/LobsterAI/issues/1237)** *(closed)* — Users modified provider configs, closed the dialog via background click/X/Cancel, and lost all changes. Underlying need: **protection against accidental data loss in configuration UI**. Fix landed via [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241).

- **[#1240 — Rate-limited model blocks switching to other models; all dialogs fail](https://github.com/netease-youdao/LobsterAI/issues/1240)** *(closed)* — After exhausting API quota on one model, the user could not switch any agent/dialog to an unaffected model; even a config restore and app restart didn't help. Underlying need: **per-model/per-provider isolation and graceful degradation** when one upstream API is limited. This is the most impactful pain point reported — it can take down the entire app.

- **[#2062 — Task exceeding maximum duration](https://github.com/netease-youdao/LobsterAI/issues/2062)** *(closed)* — A 24-hour continuous task hit the max-duration cap. User was unclear whether the task was stopped or still running in background. Underlying need: **configurable timeouts and clearer terminal state communication** for long-running tasks.

- **[#1183 — Infinite overlay loop "gateway failed to start"](https://github.com/netease-youdao/LobsterAI/issues/1183)** *(still open)* — Windows, version 2026.3.31: after adding a model and toggling it off, the home page repeatedly shows "OpenClaw gateway failed to start within expected time" with a modal overlay that keeps re-appearing. Oldest open issue in the batch (created 2026-04-01).

---

## 5. Bugs & Stability

Ranked by severity:

1. **🔴 High — App-wide paralysis from single-model rate limiting** — [#1240](https://github.com/netease-youdao/LobsterAI/issues/1240) *(closed as stale)*. A rate-limited API made every dialog and all agents report "limited," and model switching did not recover the app. No fix PR yet; this suggests a need for **per-model error isolation and fallback routing**.

2. **🟠 Medium — Gateway startup overlay loop** — [#1183](https://github.com/netease-youdao/LobsterAI/issues/1183) *(still open, ~4 months)*. Windows-only, reproducible with model toggling. Repeated modal prevents normal use. No linked fix; requires maintainer attention.

3. **🟡 Medium — Task max-duration timeout ambiguity** — [#2062](https://github.com/netease-youdao/LobsterAI/issues/2062) *(closed)*. The error text says "stopped" but user couldn't confirm if background execution continued. Needs clearer state reporting and/or configurable limits.

4. **🟢 Low — Settings silent data loss** — [#1237](https://github.com/netease-youdao/LobsterAI/issues/1237) *(closed)*. **Fix landed** in PR [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241).

5. **🟢 Low — Thinking level shared across models** — [PR #2475](https://github.com/netease-youdao/LobsterAI/pull/2475) *(open)*. Setting model B's depth resets model A to default. Fix PR submitted by maintainer; likely to merge soon.

6. **🟢 Low — Escape key dismissing multiple modal layers** — fixed in [#2476](https://github.com/netease-youdao/LobsterAI/pull/2476) (merged).

---

## 6. Feature Requests & Roadmap Signals

- **Per-model thinking levels (shipped + hardening):** Released in 2026.8.10/2026.8.11 ([#2457](https://github.com/netease-youdao/LobsterAI/pull/2457)); follow-up fix [#2475](https://github.com/netease-youdao/LobsterAI/pull/2475) indicates this feature is actively being polished — expect per-model persistence in next patch.

- **Unified taskbar/Dock attention notifications:** [#1239](https://github.com/netease-youdao/LobsterAI/pull/1239) merged — background task completion alerts will likely appear in the next release.

- **Cowork local-file workflows:** Right-click context menu for local file links ([#2473](https://github.com/netease-youdao/LobsterAI/pull/2473)) merged — signals continued investment in **artifact/file management** inside Cowork.

- **Rate-limit resilience (strong signal from #1240):** The failure mode where one provider's quota locks all agents is likely to drive a **provider fallback / circuit-breaker** feature, given how disruptive it was.

- **Configurable task duration limits (from #2062):** Users are pushing 24h+ continuous tasks; a configurable max-duration setting is a plausible near-term addition.

- **Hidden system sessions (from #1181):** The open PR to hide internal `[OpenClaw]` sessions from the UI is a UX cleanliness improvement still awaiting merge.

---

## 7. User Feedback Summary

**Pain points expressed by users (translated from Chinese):**
- Config loss in Settings without any warning (addressed in #1241) — a trust issue with configuration UX.
- A single rate-limited API can freeze *all* model interactions, forcing manual config restores and restarts (#1240) — biggest dissatisfaction signal; users explicitly acknowledged the API works fine on another machine, pointing to an app-level handling flaw.
- Unclear behavior when a task hits max duration — "I don't know if it stopped or is still running in the background" (#2062) — needs explicit terminal-state messaging.
- Startup reliability: the recurring "gateway failed to start" overlay loop makes the app unusable on Windows (#1183).

**Positive signals:**
- Maintainers are responsive — multiple user-reported issues (#1237, #1240, #2062) were actively updated/closed, and community PRs (#1241, #1239) were merged.
- Release cadence is steady (2026.8.10 → 2026.8.11 back-to-back), and each release bundles substantial UX and stability work.
- The `release/2026.8.10` merge note explicitly calls out "startup/runtime reliability" improvements, suggesting maintainers are tracking the #1183-class of problems.

---

## 8. Backlog Watch

Items needing maintainer attention (old, unanswered, or at risk of staleness):

- **[#1183 — Gateway startup overlay loop (Windows)](https://github.com/netease-youdao/LobsterAI/issues/1183)** — Open since 2026-04-01, still unfixed, and the issue title indicates a blocker-level UX bug (repeated modals prevent use). Highest-priority backlog item; no linked fix PR.

- **[#1181 — Hide OpenClaw main-agent sessions from session list](https://github.com/netease-youdao/LobsterAI/pull/1181)** — Open since 2026-04-01. Design-complete fix with a schema migration (`hidden` column). Needs review/merge decision; could be affecting current users' confusion in the Cowork session list.

- **[#1277 — Dependabot: electron 40 → 43 bump](https://github.com/netease-youdao/LobsterAI/pull/1277)** — Open since 2026-04-02; three major versions behind. Electron updates often carry security fixes; worth prioritizing or closing/rebasing.

- **[#1240 — Rate-limit cascade](https://github.com/netease-youdao/LobsterAI/issues/1240)** — Closed as stale, but the underlying failure mode (single provider limit disables all agents) is severe. Recommend reopening as a feature request for per-provider resilience / fallback routing.

- **[#2475 — Per-model thinking level fix](https://github.com/netease-youdao/LobsterAI/pull/2475)** — Newly opened by a maintainer; quick review/merge would close the loop on the just-shipped thinking-levels feature.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-12

## Today's Overview
Moltis shows low, focused development activity over the last 24 hours: no issues were updated, no releases were published, and no PRs were merged or closed. Two open PRs were updated, indicating active work on session-management fixes and a significant local CalDAV/connector feature. The issue tracker is currently empty, which suggests either a healthy triage state or low community reporting volume. Overall, the project appears stable but quiet, with development effort concentrated in review and implementation rather than merging.

## Releases
No new releases were published as of 2026-08-12. There are no changelog entries, breaking changes, or migration notes to report.

## Project Progress
No PRs were merged or closed in the last 24 hours. Two open PRs were updated:

- [PR #1190 — Add durable local CalDAV connectors](https://github.com/moltis-org/moltis/pull/1190)  
  New work proposing provider-neutral connector persistence, atomic CalDAV snapshots, scheduling, projections, bounded local full-text search, prompt-compiled dataset plans, and a trusted read-only `connectors` agent tool. This is feature-stage work, not yet merged.

- [PR #1182 — fix(sessions): allow deleting and archiving the main session](https://github.com/moltis-org/moltis/pull/1182)  
  Updated PR that fixes [issue #1132](https://github.com/moltis-org/moltis/issues/1132), where the `main` session could not be deleted or archived. The fix removes the `main` guard in the gateway while preserving the current-active-channel-session archive restriction and keeping `sessions.clear_all` behavior for main/channel-boundary sessions.

No feature was merged today; progress is still in active development/review.

## Community Hot Topics
There were no active GitHub Issues and no reported comment/reaction counts on either updated PR, meaning current activity is development-driven rather than community discussion-driven.

The two PRs are the only notable activity:

- [PR #1190 — Add durable local CalDAV connectors](https://github.com/moltis-org/moltis/pull/1190)  
  Signals interest in local-first, offline-capable data access, including CalDAV snapshots and local full-text search. The underlying need appears to be reliable, private, locally searchable connector data without depending on provider availability.

- [PR #1182 — fix(sessions): allow deleting and archiving the main session](https://github.com/moltis-org/moltis/pull/1182)  
  Addresses user-facing session management friction: users expect the `main` session to behave like any other session. The underlying need is consistent and predictable session lifecycle controls.

## Bugs & Stability
No new bugs, crashes, or regressions were reported in the last 24 hours.

The only known bug visible in current activity is:

- **Main session cannot be deleted/archived** — [issue #1132](https://github.com/moltis-org/moltis/issues/1132)  
  Severity: low-to-moderate. It is a behavioral limitation rather than a crash or data-loss issue.  
  Fix status: [PR #1182](https://github.com/moltis-org/moltis/pull/1182) is open and targets this issue, but has not yet been merged.

No new stability regressions were observed.

## Feature Requests & Roadmap Signals
The most significant roadmap signal is [PR #1190](https://github.com/moltis-org/moltis/pull/1190), which proposes a broad local-data architecture:

- Durable, provider-neutral connector persistence
- Atomic CalDAV snapshots
- Scheduling and projections
- Bounded local full-text search
- Prompt-compiled dataset plans
- A trusted read-only `connectors` agent tool for local dataset access
- Settings > Connectors account/dataset management

This strongly suggests the next version may move toward richer local integration, offline-first connector behavior, and agent-accessible local datasets. The session-management fix in [PR #1182](https://github.com/moltis-org/moltis/pull/1182) is also likely to land soon, since it resolves a known issue and has received recent updates.

## User Feedback Summary
Direct user feedback in the last 24 hours is minimal.

- Users reported via [issue #1132](https://github.com/moltis-org/moltis/issues/1132) that the inability to delete/archive the `main` session is an unwanted limitation; the open fix indicates the maintainers accept this as a valid pain point.
- [PR #1190](https://github.com/moltis-org/moltis/pull/1190) implies user/contributor demand for local CalDAV data, durable snapshots, and private full-text search over connector data.

No dissatisfaction or negative feedback was recorded in the last 24 hours.

## Backlog Watch
There are currently no open issues in the backlog. However, two PRs deserve maintainer attention:

- [PR #1182 — allow deleting and archiving the main session](https://github.com/moltis-org/moltis/pull/1182)  
  Open since 2026-08-01 and still unmerged. It fixes a known user-facing issue and is now 11 days old. This may be a good candidate for review/merge in the near term.

- [PR #1190 — Add durable local CalDAV connectors](https://github.com/moltis-org/moltis/pull/1190)  
  Large, recently opened feature PR. It will likely require careful architectural review due to its scope, and maintainer input is needed to determine roadmap fit.

No long-unanswered issues or stale community questions were identified.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-12

## 1. Today's Overview

CoPaw activity is high: **23 issues and 49 PRs** were updated in the last 24 hours, with **14 issues closed** and **25 PRs merged/closed**. A new beta, **v2.1.0-beta.3**, was released, and release-note preparation for v2.1.0 is already underway, suggesting the team is moving toward a stable release. The busiest areas are console UI rendering, MCP tool reliability, memory lifecycle management, and desktop/channel workflow fixes. Overall project health looks solid, though several crash and security issues remain open and need triage.

---

## 2. Releases

### [v2.1.0-beta.3](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.0-beta.3)

Notable changes from the release snippet:

- **Feat/files workspace blog** — [QwenPaw #6783](https://github.com/agentscope-ai/QwenPaw/pull/6783)
- **fix(provider): expire stale capability cache entries and clear on model switch** — [QwenPaw #6723](https://github.com/agentscope-ai/QwenPaw/pull/6723)
- chore: version bump to 2.1.0-beta.3

No explicit migration/breaking-change notes were provided in the snippet. Since this is a beta, users upgrading from earlier 2.1.0 betas should watch for previously reported regressions such as desktop subprocess crashes ([#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697)) and Chinese IME console crashes ([#6885](https://github.com/agentscope-ai/QwenPaw/issues/6885)).

---

## 3. Project Progress

Closed/merged PRs in the last 24 hours show continued focus on console UX, memory correctness, channels, and release readiness:

- **fix(files): repair previews and dark mode styling** — [QwenPaw #6915](https://github.com/agentscope-ai/QwenPaw/pull/6915)  
  Fixes Unicode PDF/SVG previews and aligns file preview surfaces with the dark theme.

- **feat(console): unify renderable code block experience** — [QwenPaw #6911](https://github.com/agentscope-ai/QwenPaw/pull/6911)  
  Adds preview/source tabs for LaTeX and Mermaid blocks, improving formula and diagram rendering.

- **feat(channels): warn when a bot is already used by another agent** — [QwenPaw #6909](https://github.com/agentscope-ai/QwenPaw/pull/6909)  
  Adds a conflict warning before saving an enabled channel configuration.

- **fix(memory): flush pending turns before compression** — [QwenPaw #6564](https://github.com/agentscope-ai/QwenPaw/pull/6564)  
  Fixes auto-memory persistence being gated incorrectly during context compression.

- **feat(computer-use): improve native input workflows** — [QwenPaw #6891](https://github.com/agentscope-ai/QwenPaw/pull/6891)  
  Adds bounded keyboard-only sequence actions and improves Windows input targeting.

- **fix(tools): correct read_file tool description** — [QwenPaw #6898](https://github.com/agentscope-ai/QwenPaw/pull/6898)  
  Aligns tool description with actual behavior for binary vs text files.

- **chore: update release notes for v2.1.0** — [QwenPaw #6875](https://github.com/agentscope-ai/QwenPaw/pull/6875)  
  Prepares English/Chinese release notes and README updates.

Notable open/in-review PRs:

- **feat(console): unify apps, plugins, and skills in the marketplace** — [QwenPaw #6880](https://github.com/agentscope-ai/QwenPaw/pull/6880)
- **feat: integrate AnySearch web search** — [QwenPaw #6817](https://github.com/agentscope-ai/QwenPaw/pull/6817)
- **feat(console, tui): expose system commands in slash autocomplete** — [QwenPaw #5869](https://github.com/agentscope-ai/QwenPaw/pull/5869)
- **feat(mcp): add configurable tool call timeout** — [QwenPaw #6874](https://github.com/agentscope-ai/QwenPaw/pull/6874)
- **fix(config): return 422 for invalid channel payloads** — [QwenPaw #6912](https://github.com/agentscope-ai/QwenPaw/pull/6912)

---

## 4. Community Hot Topics

Most active issues by comment count:

- **[#6732 — MCP tools periodically fail until container restart](https://github.com/agentscope-ai/QwenPaw/issues/6732)** — 10 comments, closed.  
  Users report MCP tools becoming unregistered after hours, requiring a full QwenPaw container restart. This is a major operational pain point.

- **[#6893 — Formula rendering; session grouping; active session background](https://github.com/agentscope-ai/QwenPaw/issues/6893)** — 7 comments, closed.  
  Users want proper formula rendering, better session grouping, and clearer active-session visual states.

- **[#5790 — Loading animation does not disappear after Agent response completes](https://github.com/agentscope-ai/QwenPaw/issues/5790)** — 4 comments, closed.  
  Frontend feedback-state bug affecting perceived responsiveness.

- **[#6882 — How to integrate CopilotKit](https://github.com/agentscope-ai/QwenPaw/issues/6882)** — 3 comments, open.  
  User is asking for integration examples or implementation guidance.

- **[#6900 — Isolate chat project directories from the agent workspace](https://github.com/agentscope-ai/QwenPaw/issues/6900)** — 3 comments, closed.  
  Request to separate persisted chat projects from internal agent workspaces.

Underlying themes: MCP reliability, LaTeX/formula rendering, frontend state bugs, integration guidance, and workspace hygiene.

---

## 5. Bugs & Stability

Ranked roughly by severity:

- **[#6919 — Frequent crashes in qwenpaw v2.0.1 (`console process/reply failed`)](https://github.com/agentscope-ai/QwenPaw/issues/6919)** — Open, no fix PR yet.  
  Reproduced in a pip-installed environment; high-impact stability issue.

- **[#6918 — Inter-agent messages spawn a new agent session per message](https://github.com/agentscope-ai/QwenPaw/issues/6918)** — Open, no fix PR yet.  
  Causes duplicate "shadow instances" and likely duplicate execution side effects.

- **[#6916 — Plugins can silently create cron jobs and inject user-visible messages](https://github.com/agentscope-ai/QwenPaw/issues/6916)** — Open, no fix PR yet.  
  Security/permission-model gap with medium-high severity.

- **[#6885 — Console UI crashes on Chinese IME compositionEnd during agent run](https://github.com/agentscope-ai/QwenPaw/issues/6885)** — Open, no fix PR yet.  
  Message queue becomes unusable in v2.1.0b2.

- **[#6910 — Invalid single-channel payloads return HTTP 500](https://github.com/agentscope-ai/QwenPaw/issues/6910)** — Open; fix PR [QwenPaw #6912](https://github.com/agentscope-ai/QwenPaw/pull/6912) is open.

- **[#6883 — Daily page groups subfolder notes under wrong date](https://github.com/agentscope-ai/QwenPaw/issues/6883)** — Open, no fix PR yet.

- **[#6871 — Historical message timestamps shifted by +8h after re-render](https://github.com/agentscope-ai/QwenPaw/issues/6871)** — Closed/resolved.

- **[#6828 — Idle console frontend repaints at ~20% CPU due to CSS animations](https://github.com/agentscope-ai/QwenPaw/issues/6828)** — Closed/resolved.

- **[#6732 — MCP tools periodically fail](https://github.com/agentscope-ai/QwenPaw/issues/6732)** — Closed.  
  Likely related to the provider capability-cache fix in v2.1.0-beta.3 ([QwenPaw #6723](https://github.com/agentscope-ai/QwenPaw/pull/6723)).

- **[#6697 — Desktop injects PYTHONHOME into child env, crashing Python subprocesses](https://github.com/agentscope-ai/QwenPaw/issues/6697)** — Closed/resolved.

- **[#6722 — Background forked subagent reports completed when worktree finalization fails](https://github.com/agentscope-ai/QwenPaw/issues/6722)** — Closed/resolved.

---

## 6. Feature Requests & Roadmap Signals

Strong signals from issues and PRs:

- **LaTeX / formula rendering** remains the most requested UX improvement:  
  [#6893](https://github.com/agentscope-ai/QwenPaw/issues/6893), [#5453](https://github.com/agentscope-ai/QwenPaw/issues/5453), [#4756](https://github.com/agentscope-ai/QwenPaw/issues/4756).  
  The merged code-block unification PR ([#6911](https://github.com/agentscope-ai/QwenPaw/pull/6911)) appears to be the direct response.

- **Workspace/chat directory isolation** — [#6900](https://github.com/agentscope-ai/QwenPaw/issues/6900) was closed, indicating a confirmed design direction.

- **Agent-to-Inbox delivery** — [#6917](https://github.com/agentscope-ai/QwenPaw/issues/6917) asks for agents to push structured reports into a persistent Inbox rather than only chat sessions.

- **CopilotKit integration** — [#6882](https://github.com/agentscope-ai/QwenPaw/issues/6882) needs docs or an example.

- **Desktop quality-of-life** — window geometry persistence ([PR #6877](https://github.com/agentscope-ai/QwenPaw/pull/6877)), image gallery navigation ([PR #5490](https://github.com/agentscope-ai/QwenPaw/pull/5490)), font-size controls and background service mode ([#4154](https://github.com/agentscope-ai/QwenPaw/issues/4154)).

- **Channel-related improvements** — reduce QQ bot workflow noise to avoid rate limits ([#6897](https://github.com/agentscope-ai/QwenPaw/issues/6897)), and community desire for a WeChat group ([#6895](https://github.com/agentscope-ai/QwenPaw/issues/6895)).

Likely next-version candidates: v2.1.0 stable with the closed console/file/memory PRs, followed by marketplace unification ([#6880](https://github.com/agentscope-ai/QwenPaw/pull/6880)), MCP configurable timeout ([#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874)), and AnySearch integration ([#6817](https://github.com/agentscope-ai/QwenPaw/pull/6817)).

---

## 7. User Feedback Summary

- **MCP reliability is the top operational frustration.** Users report tools becoming "unregistered" or "nonexistent" after several hours, requiring container restarts ([#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732)).
- **LaTeX rendering is a strong dissatisfaction point.** Users call the current rendering "尴尬" ("awkward") and "poor" ([#6893](https://github.com/agentscope-ai/QwenPaw/issues/6893), [#4756](https://github.com/agentscope-ai/QwenPaw/issues/4756)).
- **Desktop stability concerns remain.** Crashes and IME-related UI freezes are still open ([#6919](https://github.com/agentscope-ai/QwenPaw/issues/6919), [#6885](https://github.com/agentscope-ai/QwenPaw/issues/6885)).
- **Channel users want less noise.** QQ bot users want reduced step-by-step workflow messages to avoid rate-limiting ([#6897](https://github.com/agentscope-ai/QwenPaw/issues/6897)).
- **Community is actively requesting ecosystem integration guidance** — CopilotKit ([#6882](https://github.com/agentscope-ai/QwenPaw/issues/6882)) and WeChat community channels ([#6895](https://github.com/agentscope-ai/QwenPaw/issues/6895)).
- **Positive signals:** users are filing detailed, well-scoped feature and bug reports, and the maintainers are merging UI/UX fixes quickly.

---

## 8. Backlog Watch

Issues and PRs that may need maintainer attention:

- **[#6882 — CopilotKit integration question](https://github.com/agentscope-ai/QwenPaw/issues/6882)** — Open since Aug 10, with community comments but no visible maintainer guidance yet.
- **[#6916 — Plugin permission gap (silent cron + message injection)](https://github.com/agentscope-ai/QwenPaw/issues/6916)** — Open security issue; should be prioritized.
- **[#6918 — Inter-agent sessions spawning per message](https://github.com/agentscope-ai/QwenPaw/issues/6918)** — Open high-impact bug.
- **[#6883 — Daily page wrong-date grouping](https://github.com/agentscope-ai/QwenPaw/issues/6883)** — Open UI bug.
- **[#6917 — Agent Inbox delivery feature](https://github.com/agentscope-ai/QwenPaw/issues/6917)** — Open feature request with product-design implications.

Long-running PRs needing maintainer/review attention:

- **[#5490 — Navigable fullscreen image gallery](https://github.com/agentscope-ai/QwenPaw/pull/5490)** — Open since Jun 24.
- **[#5869 — Slash-command autocomplete across all UIs](https://github.com/agentscope-ai/QwenPaw/pull/5869)** — Open since Jul 8, under review.
- **[#6302 — Unify provider discovery, model metadata, routing](https://github.com/agentscope-ai/QwenPaw/pull/6302)** — Open since Jul 21.
- **[#6817 — AnySearch web search integration](https://github.com/agentscope-ai/QwenPaw/pull/6817)** — Under review since Aug 8.
- **[#6880 — Unified marketplace for apps, plugins, and skills](https://github.com/agentscope-ai/QwenPaw/pull/6880)** — Under review since Aug 10.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-12

## 1. Today's Overview

ZeroClaw is in a sustained design-and-hardening phase: 50 issues and 50 PRs were updated in the last 24 hours, with 40 issues still open/active and 10 closed. PR activity is dominated by open work (48 open vs. 2 merged/closed), indicating an active review/iteration cycle rather than a high-merge day. The heaviest discussion continues around RFCs in security (shell policy, authentication, HTTP egress), agent runtime (goal mode, sessions, SOP), and the channel/gateway surface (WhatsApp, OpenAI-compatible API). No releases were published in this window. The maintainer decision queue ([#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)) and an RFC-process reform proposal ([#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496)) both saw updates, signaling that process throughput is itself a recognized bottleneck.

## 2. Releases

None. The latest-releases list is empty, so there are no changelog entries, breaking changes, or migration notes to report for 2026-08-12.

## 3. Project Progress

The data overview reports 2 merged/closed PRs in the last 24 hours, but neither appears in the top-comment list, so they cannot be itemized from this extract. Visible progress is concentrated in closed issues and in-flight PRs:

- **Closed issues marking resolution:**
  - [#2269](https://github.com/zeroclaw-labs/zeroclaw/issues/2269) — RFI: Token consumption and cost management for productized agent workloads (closed after 13 comments).
  - [#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232) — RFC: Structured Observability Enhancement (closed).
  - [#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) — Docker Compose gateway loopback-bound behind a published port (S1 workflow blocker, closed).
  - [#9545](https://github.com/zeroclaw-labs/zeroclaw/issues/9545) — Task: gate rustdoc warnings in required PR CI (closed, 👍 1).
  - [#9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) — daemon reload not on SIGUSR1 / misleading degraded-security warning (closed).

- **Feature work advancing in open PRs:**
  - [#9385](https://github.com/zeroclaw-labs/zeroclaw/pull/9385) — `request_approval` for WhatsApp Web transport.
  - [#9841](https://github.com/zeroclaw-labs/zeroclaw/pull/9841) — headless SOP runs plus five defects found reviewing #9494.
  - [#9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182) — PowerShell as the native shell on Windows.
  - [#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) — token accounting on history-trim events.
  - [#9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126) — typed plugin instance config validation.

- **Trackers in progress:** SOP milestone to 5/5 ([#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288)), zerocode SOP pane MVP status visibility ([#9682](https://github.com/zeroclaw-labs/zeroclaw/issues/9682)).

## 4. Community Hot Topics

The most active issues by comment count (all with 10+ comments):

- [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) — RFC: Goal mode v1 (19 comments, 1 👍). Long-running proposal (since 06-24) for durable bounded user objectives across agent turns; the underlying need is multi-turn, interruption-safe task execution owned by the control plane.
- [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) — RFC: ZeroClaw Chat Completions profile (18 comments). Clear demand signal: users want to drive ZeroClaw agents from OpenAI-protocol clients (Open WebUI, LobeChat, Continue.dev, Aider, LangChain).
- [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) — RFC: per-execution confirmation tier for high-risk shell commands + Claude Code-style allow/ask/deny policy (17 comments). Safety/UX friction at the tool boundary.
- [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) — RFC: Pluggable inbound authentication and canonical principals (14 comments). Paired with [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) (9 comments) on the runtime-owned security decision pipeline; together they define the v0.9.0 security architecture.
- [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — Tracker: Maintainer decision queue for RFCs (13 comments). The project's own queue is one of the hottest items, reflecting review throughput pressure.
- [#2269](https://github.com/zeroclaw-labs/zeroclaw/issues/2269) — RFI: Token consumption and cost management (13 comments, closed). Cost viability for productized agent workloads remains an unresolved community concern.
- [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) — RFC: Runtime-owned conversation sessions and transport surface adapters (10 comments).

No PRs appear with notable comment counts in this extract; PR activity is dominated by revision/review churn.

## 5. Bugs & Stability

Highest-severity open bugs updated in the last 24 hours:

- **P1 security bugs, accepted, no dedicated fix PR visible yet:**
  - [#9883](https://github.com/zeroclaw-labs/zeroclaw/issues/9883) — Inbound WebP conversion decodes **unbounded** before the shared image validator runs (risk:high, security). Potential DoS/parser-exposure path in the media pipeline.
  - [#9872](https://github.com/zeroclaw-labs/zeroclaw/issues/9872) — Bounded delegate target resolves filesystem to the **delegator's** workspace instead of its own (risk:high, security/sandbox). Workspace isolation violation for delegated agents.

- **P1 fix PRs in flight (mostly security):**
  - [#9862](https://github.com/zeroclaw-labs/zeroclaw/pull/9862) — bound direct HTTP response handling (streamed bodies, redirect hardening for fal.ai).
  - [#9781](https://github.com/zeroclaw-labs/zeroclaw/pull/9781) — WebAuthn assertion validation (37-byte header, `rpIdHash`, User Present flag).
  - [#9580](https://github.com/zeroclaw-labs/zeroclaw/pull/9580) — harden built-in HTTP egress on the shared network guard.
  - [#9612](https://github.com/zeroclaw-labs/zeroclaw/pull/9612) and [#9609](https://github.com/zeroclaw-labs/zeroclaw/pull/9609) — WhatsApp approval-token lifetime guard and chat-policy enforcement under both modes.
  - [#9885](https://github.com/zeroclaw-labs/zeroclaw/pull/9885) — honor documented `sops_dir` default in the daemon (fixes #9779).
  - [#9900](https://github.com/zeroclaw-labs/zeroclaw/pull/9900) — OpenAI Codex provider no longer retries streaming-only endpoint with `stream=false`.
  - [#9350](https://github.com/zeroclaw-labs/zeroclaw/pull/9350) — cron CLI delivery flags; previously CLI-created jobs ran at delivery mode `"none"` and discarded output.

- **Resolved in this window:** [#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) (Docker port unreachable), [#9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) (SIGUSR1 kills daemon instead of reloading), [#9545](https://github.com/zeroclaw-labs/zeroclaw/issues/9545) (rustdoc warning gate added to required CI).

## 6. Feature Requests & Roadmap Signals

The RFC queue is effectively the roadmap. Strong next-version candidates:

- **OpenAI-compatible API surface** ([#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)) — most likely to expand ecosystem adoption (Open WebUI, LobeChat, Aider, LangChain).
- **High-risk shell confirmation tier with allow/ask/deny policy** ([#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)) — Claude Code-style UX, repeatedly requested.
- **Agent goal mode** ([#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)) — bounded foreground Matrix work spanning multiple turns.
- **Security architecture for v0.9.0** — pluggable inbound auth / canonical principals ([#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)) and runtime-owned security decision pipeline ([#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)).
- **Runtime-owned conversation sessions / transport adapters** ([#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)) and **unified slash-command registry** ([#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929)) — consistency across web, TUI, and channel runtimes.
- **Anthropic stored-profile OAuth alias contract** ([#9464](https://github.com/zeroclaw-labs/zeroclaw/issues/9464), p1, in-progress) — likely to land as PR #9420 follow-up work.
- **Retire the Lucid memory connector at v0.9.0** ([#9644](https://github.com/zeroclaw-labs/zeroclaw/issues/9644)) — dependency cleanup for a dormant upstream.
- **LSP support for ZeroCode coding workflows** ([#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907)) — requested since April, still in RFC state.

Prediction: v0.9.0 looks to be shaped by the security pipeline work (#7141/#7142), SOP control-plane completion ([#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288)), and the Chat Completions compatibility profile (#8603).

## 7. User Feedback Summary

- **Process friction:** [#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) states the RFC process "has become slower and more cumbersome than the decisions it is meant to support" — 7-day minimum discussions, unanimity requirements, and manual vote coordination are named culprits.
- **Cost concern:** [#2269](https://github.com/zeroclaw-labs/zeroclaw/issues/2269) closed without a committed design, but the underlying cost-viability question for productized agent workloads remains live.
- **Operational pain:** config changes require full daemon reload before taking effect ([#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897)); the SIGUSR1 reload bug ([#9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768)) shows operators depend on signal-based reload behavior.
- **Reliability:** memory consolidation via prompt-and-parse JSON is fragile across providers ([#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998)); users want schema validation and bounded fallback.
- **Contributor friction:** many PRs ([#9385](https://github.com/zeroclaw-labs/zeroclaw/pull/9385), [#9841](https://github.com/zeroclaw-labs/zeroclaw/pull/9841), [#9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126), [#9612](https://github.com/zeroclaw-labs/zeroclaw/pull/9612), [#9900](https://github.com/zeroclaw-labs/zeroclaw/pull/9900)) and issues ([#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929), [#9464](https://github.com/zeroclaw-labs/zeroclaw/issues/9464), [#9323](https://github.com/zeroclaw-labs/zeroclaw/issues/9323), [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907)) are labeled `needs-author-action`, indicating stalled or slow iteration loops — a contributor-side health signal.
- **Positive:** security-sensitive fixes (WebAuthn, HTTP egress, WhatsApp auth) are being produced and reviewed actively, and the closed-bug count (10) suggests steady triage.

## 8. Backlog Watch

- **Maintainer attention:** the project's own decision queue ([#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692), created 07-04) is still the active routing point for RFCs and design issues awaiting maintainer or code-owner decisions.
- **Longest-open RFCs awaiting maintainer review:** [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) (06-03), [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) (06-03), [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) (06-03), [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) (06-24), [#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897) (06-17), [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) (07-02), [#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) (07-08), [#9346](https://github.com/zeroclaw-labs/zeroclaw/issues/9346) (07-24), [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) (07-28).
- **Oldest item on the board:** [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) — Opt-in LSP support for ZeroCode (created 04-19, ~4 months, `needs-author-action`) has not progressed to a decision.
- **Also aged:** [#6653](https://github.com/zeroclaw-labs/zeroclaw/issues/6653) — host-architecture policy for emulated installs (created 05-14, `needs-author-action`).
- **At-risk PRs:** [#9612](https://github.com/zeroclaw-labs/zeroclaw/pull/9612) (p1 WhatsApp security fix, `stale-candidate`), [#9385](https://github.com/zeroclaw-labs/zeroclaw/pull/9385) (size:L, `needs-author-action`), [#9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126) and [#9841](https://github.com/zeroclaw-labs/zeroclaw/pull/9841) (both size:XL, `needs-author-action`).
- **Long-running feature PR:** [#8337](https://github.com/zeroclaw-labs/zeroclaw/pull/8337) — Herdr agent reporting integration (created 06-26, size:XL, risk:high) with no visible movement this window.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*