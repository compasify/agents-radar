# OpenClaw Ecosystem Digest 2026-06-14

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-14 00:28 UTC

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

# OpenClaw Project Digest — 2026-06-14

## Today's Overview

OpenClaw shows **high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a vibrant open-source community. Two new beta releases (v2026.6.8-beta.1 and v2026.6.7-beta.1) have shipped, focusing on channel delivery hardening across Telegram, WhatsApp, and Slack. The project faces significant stability challenges: a critical P0 memory leak (RSS 350MB→15.5GB) and multiple P1 session-state and message-loss bugs remain open. Community engagement is strong, with diamond-rated issues drawing sustained discussion on subagent reliability and security concerns.

## Releases

**New versions: v2026.6.8-beta.1 and v2026.6.7-beta.1**

- **v2026.6.8-beta.1** ([release link](https://github.com/openclaw/openclaw/releases/tag/v2026.6.8-beta.1)): Enhances Telegram and WhatsApp channel delivery. Telegram now supports structured rich text (tables, lists, expandable blockquotes), prompt-preserving CLI backend delivery, retired native draft migration, and safer rich-media boundaries. WhatsApp delivery is richer and less brittle.
- **v2026.6.7-beta.1** ([release link](https://github.com/openclaw/openclaw/releases/tag/v2026.6.7-beta.1)): Tighter channel delivery across Slack, Telegram, outbound media, silent replies, progress drafts, and paged action results. Same-channel Slack finals now persist in transcripts; `image` message-tool can send attached media; expandable Telegram blockquotes and spool improvements.

No breaking changes or migration notes are documented in these releases.

## Project Progress

**Merged/closed PRs today (14 closed PRs observed):**

- **Critical fixes:**
  - [#92698](https://github.com/openclaw/openclaw/pull/92698) — Memory: skip markdown placeholder snippets during short-term promotion (fixes context pollution)
  - [#92580](https://github.com/openclaw/openclaw/pull/92580) — Fix(cron): persist resolved delivery target into isolated cron session deliveryContext (fixes delivery failures)
  - [#92463](https://github.com/openclaw/openclaw/pull/92463) — Skip disabled bundled setup fallbacks (reduces noisy warnings)
  - [#92786](https://github.com/openclaw/openclaw/pull/92786) — Tolerate chmod-less volumes when opening agent database (fixes container startup failures)
  - [#92790](https://github.com/openclaw/openclaw/pull/92790) — Clear stale auto fallback origins (prevents stuck fallback routing)
  - [#92604](https://github.com/openclaw/openclaw/pull/92604) — Avoid cumulative usage for context percent (fixes TUI/status display)
  - [#92488](https://github.com/openclaw/openclaw/pull/92488) — Forward image-only input on /v1/responses (API parity fix)
  - [#92745](https://github.com/openclaw/openclaw/pull/92745) — Explain skipped short-term recall hits (better diagnostics)
  - [#92624](https://github.com/openclaw/openclaw/pull/92624) — Honor QMD search timeouts (memory search reliability)
  - [#92724](https://github.com/openclaw/openclaw/pull/92724) — Drop watcher awaitWriteFinish polling (reduces high idle CPU on macOS)
  - [#92809](https://github.com/openclaw/openclaw/pull/92809) — Fix adjacent model token parsing (cosmetic fix)

- **Security fix:** [#53304](https://github.com/openclaw/openclaw/pull/53304) — Rate-limit map pruning + CSP img-src hardening (memory leak + security)

- **User-facing fix:** [#92269](https://github.com/openclaw/openclaw/pull/92269) — Scope foreground reply fence per inbound message (fixes silent reply cancellation in group chats)

## Community Hot Topics

**Most active issues (by comments):**

1. **[Issue #44925](https://github.com/openclaw/openclaw/issues/44925)** (19 comments, diamond-rated) — *Subagent completion silently lost*: No retry, notification, or auto-restart on timeout. Community deeply concerned about reliability of task orchestration across multiple failure modes (E31, E42, E45 error codes). **Underlying need**: Robust subagent lifecycle management with observable failure handling.

2. **[Issue #54253](https://github.com/openclaw/openclaw/issues/54253)** (14 comments, 4 👍) — *LLM Request Failed on RISC-V64*: User successfully installed on RISC-V but runtime LLM calls fail. **Underlying need**: Cross-architecture compatibility for the agent runtime.

3. **[Issue #90991](https://github.com/openclaw/openclaw/issues/90991)** (13 comments, CLOSED) — *Cron scheduled trigger contaminates global runtime state*: System-wide overload failures from cron jobs. Closed as high-priority fix. **Underlying need**: Strict session isolation for scheduled jobs.

4. **[Issue #45740](https://github.com/openclaw/openclaw/issues/45740)** (13 comments, diamond) — *Security: gh-issues skill injects untrusted issue body into sub-agent prompt*: No sanitization. **Underlying need**: Prompt injection defense in skill pipelines — a recurring security theme.

5. **[Issue #42475](https://github.com/openclaw/openclaw/issues/42475)** (12 comments) — *Per-agent cost budget enforcement at gateway level*: Community wants financial guardrails to prevent runaway spending. **Underlying need**: Production-grade cost management without external monitoring.

**Most reacted issue:** [#42840](https://github.com/openclaw/openclaw/issues/42840) (6 👍) — *MathJax/LaTeX Support in Control UI*: Strong user demand for mathematical rendering capability.

## Bugs & Stability

### Critical (P0)

- **[Issue #91588](https://github.com/openclaw/openclaw/issues/91588)** — *Gateway Memory Leak (RSS 350MB→15.5GB over days)*: Diamond-rated, causes OOM crashes and repeated restart cycles. **No fix PR open.** Risk: Production gateways may crash every 2-3 days.

### High Priority (P1)

- **[Issue #44925](https://github.com/openclaw/openclaw/issues/44925)** — Subagent completion silently lost (no retry, no notification). **Fix PR: none.** Risk: Silent task failures in multi-agent orchestration.
- **[Issue #90991](https://github.com/openclaw/openclaw/issues/90991)** (CLOSED) — Cron state contamination (fixed in today's release cycle).
- **[Issue #41744](https://github.com/openclaw/openclaw/issues/41744)** — Feishu image tool loses media before delivery. **Fix PR: none.**
- **[Issue #44905](https://github.com/openclaw/openclaw/issues/44905)** — Discord leaks internal tool-call traces (NO_REPLY, raw JSON). **Fix PR: none.** Security/data leakage risk.
- **[Issue #43367](https://github.com/openclaw/openclaw/issues/43367)** — Multi-agent orchestration unstable (concurrent config overwrites, session-lock failures). **Fix PR: none.**
- **[Issue #85251](https://github.com/openclaw/openclaw/issues/85251)** — Codex app-server goes silent after turn/started (sessions wedge for 360s). **Fix PR: none.**
- **[Issue #40540](https://github.com/openclaw/openclaw/issues/40540)** — `openclaw update` fails with EBUSY on Windows. **Fix PR: none.**

### Regressions

- **[Issue #91778](https://github.com/openclaw/openclaw/issues/91778)** (CLOSED) — `memory_search` broken since v2026.6.1 (index metadata missing). Closed as fixed.
- **[Issue #43747](https://github.com/openclaw/openclaw/issues/43747)** — Memory management inconsistent across users (chaotic chunking/embedding). **Fix PR: none.**

### Fix PRs active today

- [#92800](https://github.com/openclaw/openclaw/pull/92800) — Fix Telegram callback query timeout (inline button presses)
- [#92810](https://github.com/openclaw/openclaw/pull/92810) — Fix voice-call media stream validation
- [#92803](https://github.com/openclaw/openclaw/pull/92803) — Fix MiniMax thinking budget request fallback
- [#92791](https://github.com/openclaw/openclaw/pull/92791) — Recover subagent terminal child result on lost-context sweep
- [#92804](https://github.com/openclaw/openclaw/pull/92804) — Fix ACP final_only text across tool-call boundaries

## Feature Requests & Roadmap Signals

**Top user-requested features (likely candidates for next release):**

1. **[Per-agent cost budgets](https://github.com/openclaw/openclaw/issues/42475)** (P2, 12 comments) — Gateway-level cost enforcement. Strong operational need for production deployments. **Prediction: could land next month** given operator urgency.

2. **[Pre-reset agentic memory flush](https://github.com/openclaw/openclaw/issues/45608)** (P2, 10 comments, 4 👍) — `/new` and daily reset should flush memory like compaction. **Prediction: high community support, likely in v2026.7.x.**

3. **[MathJax/LaTeX support](https://github.com/openclaw/openclaw/issues/42840)** (P2, 7 comments, 6 👍) — Scientific/mathematical content rendering. **Prediction: UI feature, may arrive in next minor release.**

4. **[YAML config support](https://github.com/openclaw/openclaw/issues/45758)** (P3, 7 comments) — Alternative to JSON5. **Prediction: lower priority but frequently requested.**

5. **[Gateway lifecycle hooks](https://github.com/openclaw/openclaw/issues/43454)** (P3, 6 comments) — onSubagentComplete, onToolCallThreshold, onTurnComplete. **Prediction: longer-term roadmap item.**

6. **[Write tool append mode](https://github.com/openclaw/openclaw/issues/40001)** (P1, 11 comments) — Prevent isolated cron sessions from overwriting shared files. **Prediction: critical for multi-session workflows, could be fast-tracked.**

## User Feedback Summary

**Pain points:**

- **Reliability anxiety**: Multiple reports of silent failures (subagent completion lost, memory corruption, cron jobs timing out). Users express concern about "running blind" without notification.
- **Channel-specific regressions**: Discord leakage, Telegram routing issues, Feishu media loss — cross-platform fragmentation frustrates users relying on multiple channels.
- **Memory management chaos**: Users report inconsistent behavior across instances ("3 people using openclaw, never see any of our memory managed the same way").
- **Cost concerns**: DeepSeek prompt cache invalidation ($6/hour burn reported) and need for budget enforcement at gateway level.
- **RISC-V/Arm support**: Growing demand for non-x86 architecture support, with one user successfully installing but facing runtime failures.

**Satisfaction signals:**

- Users praise OpenClaw's extensibility (skills, channels, multi-agent orchestration) but want production hardening.
- Active community triage: 140 issues closed in 24 hours and 190 PRs merged/closed indicates responsive maintainer team.
- Feature requests show sophisticated use cases: cost tracking, security hardening, lifecycle hooks — users are deploying at scale.

## Backlog Watch

**Issues needing maintainer attention (long-unresolved, high impact):**

- **[Issue #45740](https://github.com/openclaw/openclaw/issues/45740)** (Diamond, P1, created 2026-03-14) — *Security: gh-issues skill prompt injection*. No fix PR after 3 months. Requires security review + product decision. **Risk: critical attack surface for production deployments.**

- **[Issue #44905](https://github.com/openclaw/openclaw/issues/44905)** (Platinum, P1, created 2026-03-13) — *Discord leaks internal tool-call traces*. Needs live repro + security review. **Risk: data leakage to users.**

- **[Issue #40001](https://github.com/openclaw/openclaw/issues/40001)** (Diamond, P1, created 2026-03-08) — *Write tool lacks append mode*. Causes silent data loss. Needs product decision. **Risk: data corruption in multi-session workflows.**

- **[Issue #43367](https://github.com/openclaw/openclaw/issues/43367)** (Diamond, P1, created 2026-03-11) — *Multi-agent orchestration unstable*. Needs product decision. **Risk: unreliable concurrent agent operations.**

- **[Issue #91588](https://github.com/openclaw/openclaw/issues/91588)** (Diamond, P0, created 2026-06-09) — *Gateway memory leak*. No fix PR yet. **Risk: production gateways crash every 2-3 days.**

- **[PR #44884](https://github.com/openclaw/openclaw/pull/44884)** (P1, created 2026-03-13) — *Gateway public network hardening*. Open for 3 months, needs review. **Risk: exposed gateways lack comprehensive security.**

**Overdue triage tags on many items**: "needs-product-decision" and "needs-maintainer-review" appear on 15+ of the top 50 issues, suggesting maintainer bandwidth is stretched despite high community activity.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Analysis: AI Agent Open-Source Landscape
**Date:** 2026-06-14

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing a **productization inflection point** — projects are shifting from core agent capability building toward production-grade hardening, multi-channel delivery reliability, and operational cost management. The landscape spans from reference implementations (OpenClaw) to specialized forks (PicoClaw, NanoClaw) and architecture innovators (ZeroClaw, IronClaw), with ~65% of projects in active development cycles this week. A clear pattern emerges: **memory management, channel reliability, and subagent orchestration** are the universal pain points, while differentiation centers on deployment models (desktop vs. server, WASM vs. native plugins) and target user segments (developers, enterprises, hobbyists). Notably, Anthropic model version churn is causing cross-project compatibility crises, and cost governance (budget enforcement, token waste) has become a dominant user request.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | New Release | Health Score* | Key Signal |
|---------|---------------------|-------------------|-------------|---------------|------------|
| **OpenClaw** | 500 | 500 | ✅ v2026.6.8-beta.1 | B+ | P0 memory leak, high community engagement |
| **NanoBot** | 5 | 19 | ❌ | A- | Anthropic API bug, TUI feature PR |
| **Hermes Agent** | 50 | 50 | ❌ | C+ | 44 open issues vs 6 closed, Telegram feature cluster |
| **PicoClaw** | 2 | 7 | ✅ v0.2.9-nightly | B- | Token waste bug unresolved, vision hallucination fixed |
| **NanoClaw** | 1 | 15 | ❌ | A | 14 merges in batch, Signal channel maturity |
| **NullClaw** | 2 | 1 | ❌ | D | Use-after-free bug open, 0 merges in 24h |
| **IronClaw** | 5 | 24 | ❌ | B | 18-day stale E2E failure, attachment integration push |
| **LobsterAI** | 4 | 5 | ❌ | D | 72-day stale blocker issues, low maintenance |
| **CoPaw** | 10 | 8 | ❌ | C | Two critical bugs unreported to fix |
| **Moltis** | 1 | 1 | ❌ | B+ | OAuth bug → fix PR within hours |
| **ZeroClaw** | 42 | 50 | ❌ | B+ | 12 merges, S1 bugs with active fix PRs |
| **TinyClaw** | 0 | 0 | ❌ | N/A | Inactive |
| **ZeptoClaw** | 0 | 0 | ❌ | N/A | Inactive |

*\*Health Score: Expert assessment based on bug-fix ratio, response time, backlog health, and community responsiveness.*

**Activity Tiers:**
- **High Velocity:** OpenClaw, NanoBot, NanoClaw, ZeroClaw — sustained PR throughput
- **Moderate:** Hermes Agent, IronClaw, PicoClaw, CoPaw — active but stretched maintainer teams
- **Low/Maintenance:** NullClaw, LobsterAI, Moltis — focused on specific bug fixes
- **Inactive:** TinyClaw, ZeptoClaw — no detectable development

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Community scale**: 500 issues/500 PRs updated in 24h — 10x larger than next closest (Hermes/ZeroClaw at 50). Diamond-rated issues attract sustained, high-quality discussion.
- **Release cadence**: Two beta releases shipped today (v2026.6.7, v2026.6.8) while peers have no releases — demonstrates production deployment pipeline.
- **Channel depth**: Rich-text Telegram tables, WhatsApp delivery hardening, Slack finals — no peer matches channel-specific feature investment.
- **Ecosystem reference**: As the core reference implementation, OpenClaw's architectural decisions (subagent orchestration, memory compaction) influence downstream forks.

**Technical Approach Differences:**
- **Subagent lifecycle**: Uniquely exposed multiple failure modes (E31, E42, E45) — peers treat subagent tasks as opaque. OpenClaw's transparency attracts both praise (debuggability) and concern (complexity).
- **Memory model**: "Skip markdown snippet promotion" fix (PR #92698) shows precise context management. Contrast with NanoClaw's persistent memory scaffold — different philosophies on memory granularity.
- **Security posture**: Prompt injection defense in skill pipelines (Issue #45740) was raised 3 months ago without fix — a gap vs. ZeroClaw's `allowed_tools` documentation fix or IronClaw's gate-resolution ack PRs.

**Community Size Comparison:**
- OpenClaw: ~500 daily active contributors estimated (500 PRs/day implies >100 active contributors)
- Mid-tier (ZeroClaw, Hermes): ~50 daily contributors
- Lower-tier (NullClaw, Moltis): <10 daily contributors

**Weakness:** The P0 memory leak (RSS 350MB→15.5GB, Issue #91588) with no fix PR is a production risk that smaller, more contained projects (NanoClaw, Moltis) do not face.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects Affected | Specific Needs |
|------------|------------------|----------------|
| **Memory Management** | OpenClaw, Hermes Agent, NanoClaw, ZeroClaw, CoPaw | Inconsistent chunking/embedding across users (OpenClaw #43747), silent hangs on capacity (Hermes #42405), context compression dropping all tokens (CoPaw #5171), persistent memory scaffolds (NanoClaw #2745), Dream Mode consolidation (ZeroClaw #5849, Hermes #10771) |
| **Channel Reliability** | OpenClaw, Hermes, NanoClaw, PicoClaw, CoPaw | Discord tool-call leakage (OpenClaw #44905), Telegram Web incompatibility (Hermes #45785), Signal attachment parity (NanoClaw #2040/#2070), Feishu streaming optimization (CoPaw #5167) |
| **Subagent/Task Orchestration** | OpenClaw, ZeroClaw, NanoClaw, NullClaw | Silent completion loss (OpenClaw #44925), split-brain routing (NanoClaw #2267), use-after-free in cron (NullClaw #941), cron state contamination (OpenClaw #90991) |
| **Cost Governance** | OpenClaw, PicoClaw, LobsterAI | Per-agent budget enforcement (OpenClaw #42475), Evolution mode token waste (PicoClaw #3012), subscription-based API whitelists (LobsterAI/CoPaw #5156) |
| **Anthropic Model Churn** | NanoBot, NullClaw | `temperature` deprecation for opus-4-8/Fable (NanoBot #4333), hardcoded model-name checks breaking against rapid Anthropic releases |
| **CI Stability** | IronClaw, CoPaw | Nightly E2E failures unresolved for 18+ days (IronClaw #4108), Windows/Tauri desktop startup regression (CoPaw #5047) |
| **Cross-Architecture** | OpenClaw, PicoClaw | RISC-V LLM runtime failures (OpenClaw #54253), FreeBSD-specific Evolution mode bugs (PicoClaw #3012) |

**Authentication & Security** — Across all projects, a recurring pattern: 
- Prompt injection defenses (OpenClaw #45740 — 3 months unfixed)
- OAuth flow fragility (Moltis #1119, Hermes #44666/#43586 key_env aliases)
- Missing credential gate ordering (IronClaw #4840 — approval before credential check)

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes Agent | NanoClaw | ZeroClaw | IronClaw | CoPaw |
|-----------|----------|---------|--------------|----------|----------|----------|-------|
| **Target User** | Advanced developers, production ops | CLI power users, developers | Multilingual, platform-heavy users | Ops-focused, enterprise | Plugin/extension developers | Rust ecosystem, low-latency | Chinese ecosystem, desktop users |
| **Primary Channel** | Telegram, WhatsApp, Slack | CLI, WebUI | Telegram, Desktop app, Discord | Signal, CLI | Gateway web dashboard | Slack, WebChat | Feishu, QQ, WeChat |
| **Architecture** | Monolithic with subagent orchestration | Modular with `nanobot agent` CLI | Plugin-platform with MCP | Agent-runner with container lifecycle | WASM plugin system | Rust crate-based | Tauri desktop + web gateway |
| **Memory Approach** | Compaction with skip-promotion | `idleCompact` consolidation | Auto Dream (proposed) | Persistent memory scaffold | Dream Mode consolidation | Not explicit in this digest | LightContextManager |
| **Release Philosophy** | Rapid beta cycles (2 per day) | Feature accumulation, no release this week | v0.16.0 stable, no release this week | Batch merging pre-release | v0.8.0-beta-1, accumulating for v0.8.1 | Long release cycle (29-day open PR) | v1.1.11.post2, low velocity |
| **Unique Strengths** | Broadcast channel richness, community scale | TUI innovation, fast issue-to-fix cycle | Multilingual i18n (15 languages), Telegram Rich Messages | Disaster recovery, Signal channel parity | Plugin system RFCs, cron pause/resume | Rust performance, gate-resolution architecture | Chinese platform deep integration |
| **Unique Weaknesses** | P0 memory leak unfixed, prompt injection stale | Anthropic model-version hardcoding | Maintainer bottleneck (44 open:6 closed), long-stale features | No community issues — too quiet? | S1 canvas regression, WASM path bugs | 18-day stale CI failure, release blocked | Two critical bugs without fix PRs |

**Key Insight:** The ecosystem is **splitting by deployment model** — desktop-heavy projects (CoPaw, Hermes) face Tauri/startup issues while server-side projects (OpenClaw, NanoClaw) focus on channel reliability and OOM prevention. **ZeroClaw and IronClaw are architecture innovators** — ZeroClaw's WASM plugin system and IronClaw's Rust-native crates offer fundamentally different extensibility models than OpenClaw's monolithic approach.

---

## 6. Community Momentum & Maturity

### Tier 1 — Rapid Iteration (High throughput, responsive maintainers)
- **NanoClaw**: 14 PRs merged/closed in 24h, zero backlog issues. The Signal channel maturity push and disaster recovery support signal a project entering production-readiness.
- **ZeroClaw**: 12 PRs merged, 42 issues updated. Architectural RFCs (turn engine unification, native plugins) indicates planning for v0.9+. Strongest community-driven feature development (cron pause/resume contributed by community).
- **NanoBot**: 5 closed issues, 5 merged PRs. TUI and automation management UI indicate maintainers investing in UX maturity.

### Tier 2 — Active Development (Sustained throughput, some maintainer bottlenecks)
- **OpenClaw**: Highest raw activity but also highest bug count and longest-stale security issues. The 500/500 volume is both a strength (community) and weakness (maintainer triage capacity). Diamond-rated issues without assignee indicate **community outstrips maintainer bandwidth**.
- **Hermes Agent**: 50 issues/50 PRs updated but only 6 closed — **maintainer bottleneck is critical**. Telegram Rich Messages feature cluster shows strong community demand but limited throughput.
- **IronClaw**: 24 PRs updated, 6 merged. The 18-day stale E2E failure and 29-day open release PR indicate **release pipeline is the bottleneck**.

### Tier 3 — Stabilization / Low Activity
- **PicoClaw**: One nightly release, but token waste bug unresolved for 9 days. Vision hallucination fixed quickly — responsive but low volume.
- **Moltis**: Single bug report, single fix PR within hours. **Fast response but low feature development** — maintenance phase.

### Tier 4 — At Risk (Stale issues, low maintainer responsiveness)
- **CoPaw**: Two critical bugs (chat freeze, total context loss) without fix PRs. Five community-contributed fix PRs unmerged for 5 days. **User trust risk** — if context loss and freezes remain unaddressed, users will migrate.
- **NullClaw**: Use-after-free bug open, 0 merges in 24h. Small project with critical memory safety bug — **single point of failure risk** if maintainer is unavailable.
- **LobsterAI**: 72-day stale blocker issues, 4 open bugs without maintainer comment. **Lowest health score** — users reporting "dead click" frustration.

### Inactive
- **TinyClaw, ZeptoClaw**: No activity. Likely dormant or abandoned.

---

## 7. Trend Signals

### 1. Production-Grade Hardening is the Dominant Theme
- **Cost management** (OpenClaw #42475, PicoClaw #3012): Users deploying agents at scale demand budget enforcement — not just monitoring. "Per-agent cost budgets at gateway level" is the #1 cross-project feature request.
- **Memory reliability** (affects 6 of 13 projects): Inconsistent compaction, silent hangs, total context loss, and orphan sessions are the top reliability concern. The community is demanding **predictable, observable memory behavior** rather than maximum compression.
- **Channel delivery guarantees** (affects 5+ projects): Discord leakage, Telegram Web gaps, Signal parity — users expect **multi-channel support to be equivalent, not best-effort**.

### 2. Anthropic Model Version Churn is a Cross-Project Crisis
- Projects with hardcoded model-name checks (NanoBot #4333, potentially OpenClaw/Hermes) break when Anthropic releases opus-4.8/Fable. The ecosystem needs a **version-agnostic provider abstraction** — a market opportunity for a shared SDK.

### 3. Subagent Orchestration Maturity Gap
- Cross-project, subagent tasks are treated as opaque black boxes (silent failures, no notification). OpenClaw's explicit failure mode catalog (E31/E42/E45) is the most advanced but still lacks auto-retry. **The industry needs failure-observable subagent protocols** — this is a standardization opportunity.

### 4. WASM vs. Native Plugin Architecture Divergence
- ZeroClaw's WASM plugin system and IronClaw's Rust-native crates represent **fundamentally different extensibility approaches**. The ecosystem lacks a common plugin interface — developers supporting multiple projects face fragmentation. OCI-compliant registries (ZeroClaw #7497) could emerge as a universal plugin distribution format.

### 5. Desktop vs. Server Deployment Split
- Desktop-focused projects (CoPaw/Tauri, Hermes Desktop) struggle with startup times, GPU errors, and cross-platform testing. Server-focused projects (OpenClaw, NanoClaw) optimize for uptime and memory. **The winning architecture may be hybrid** — local agent with server fallback for heavy processing.

### 6. Multilingual Demand is Growing
- Vietnamese (CoPaw #5169), Traditional Chinese (PicoClaw #2935), 15-language i18n (Hermes #38846), Indonesian/Portuguese (CoPaw past patterns). **Non-English UX is no longer optional** for global adoption.

### 7. Plugins/Skills as a Second-Class Citizen
- Skill reliability issues (CoPaw disabled skills still invoked #1439, OpenClaw injected untrusted issue bodies #45740, ZeroClaw allowed_tools does not restrict MCP #6876). **Security boundaries for plugins are underinvested** across the ecosystem — a shared risk.

### Value for AI Agent Developers

1. **Actionable**: Budget enforcement (OpenClaw #42475) and write-tool append mode (OpenClaw #40001) are high-impact, cross-project features — contribute upstream or implement in your fork.
2. **Avoid**: Hardcoded model-version checks — use version-agnostic provider wrappers to survive Anthropic/OpenAI churn.
3. **Monitor**: ZeroClaw's turn engine unification (PR #7540) and IronClaw's attachment pipeline (track #4644) may set architectural standards for the next generation.
4. **Contribute to**: ZeroClaw's Dream Mode (#5849) and Hermes Agent's Auto Memory Consolidation (#10771) — both have strong community support and no assignee, offering high-visibility contribution opportunities.
5. **Watch out for**: CoPaw's context loss (#5171) and null pointer bugs — if you depend on CoPaw's Feishu integration, plan fallback.

---

*Report generated from 2026-06-14 community digest data across 13 projects in the AI agent open-source ecosystem.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-14

## Today's Overview

NanoBot shows **high development velocity** with 19 PRs updated in the last 24 hours, of which 5 were merged/closed. The project remains actively maintained with 5 issues updated (3 closed, 2 open). Today's activity centers on **critical bug fixes** (Anthropic API compatibility, MCP server crash, env-var resolution) alongside **major feature additions** (TUI interface, automation management view, TTS system). No new releases were published today. The community is responsive — all open issues have received some form of maintainer attention.

## Releases

**No new releases today.** The project appears to be accumulating changes for a future tagged release.

## Project Progress

**Merged/Closed PRs (5 items):**

- **[#4326](https://github.com/HKUDS/nanobot/pull/4326)** — `fix(memory): summarize full session tail during idle compaction`  
  Resolves [#4264](https://github.com/HKUDS/nanobot/issues/4264): `idleCompact` now summarizes the **full unconsolidated session tail**, including the recent suffix, rather than only the dropped prefix. Adds opt-in `summary_context` argument to `Consolidator.archive`.

- **[#4327](https://github.com/HKUDS/nanobot/pull/4327)** — `Fix WebUI startup blocking on slow gateway routes`  
  Moves slow HTTP handlers off the gateway event loop, avoids full session JSONL reads for sidebar workspace scope, and makes chat surface fetch only installed CLI apps (not the full remote catalog) at startup.

- **[#4314](https://github.com/HKUDS/nanobot/pull/4314)** — `[refactor] Break tool config schema import cycle`  
  Moves shared Pydantic config `Base` into a new `nanobot.config_base` module. Keeps built-in tool configs beside their implementations, preserving the self-describing authoring pattern.

- **[#4313](https://github.com/HKUDS/nanobot/pull/4313)** — `Feat(webui): config.json/webui parity`  
  Closes the gap between WebUI settings panels and `config.json`. New write endpoints for temperature, tool limits, dream, channels, and memory fields; expanded settings payload; new UI controls in Models and Agent limits panels.

- **[#4098](https://github.com/HKUDS/nanobot/pull/4098)** — `[codex] Fix exec workspace symlink guard and path precedence`  
  Fixes [#4072](https://github.com/HKUDS/nanobot/issues/4072) (blocks restricted exec commands from following relative symlinks escaping workspace) and [#4083](https://github.com/HKUDS/nanobot/issues/4083) (prepends `pathAppend` on Unix for correct tool executable lookup precedence).

## Community Hot Topics

- **[#193](https://github.com/HKUDS/nanobot/issues/193)** — *Ollama API support?* (15 comments, CLOSED)  
  Long-running discussion about adding Ollama API support. Despite being closed, this issue received sustained community attention. The user only sees vLLM support and asks whether Ollama is planned. *Underlying need:* Users want local/consumer-grade model hosting flexibility beyond vLLM.

- **[#4322](https://github.com/HKUDS/nanobot/issues/4322)** — *NameError: `session_key` not defined in context.py after merge* (OPEN)  
  A regression introduced when merging `origin/main` into `fix/prompt-caching`. The extracted `_build_memory_context` method lost a variable reference, causing agent startup crashes. *Underlying need:* Safe branch merging and regression testing for refactored code paths.

- **[#4333](https://github.com/HKUDS/nanobot/issues/4333)** — *Anthropic provider sends deprecated `temperature` to opus-4-8 / Fable* (OPEN)  
  Breaking against newest Anthropic models. The `omit_temperature` check is hardcoded to `"opus-4-7"` only. A fix PR **[#4334](https://github.com/HKUDS/nanobot/pull/4334)** has already been submitted. *Underlying need:* API compatibility with rapidly evolving model versions.

- **[#4329](https://github.com/HKUDS/nanobot/pull/4329)** — *Nanobot TUI* (OPEN)  
  A major new interactive TUI for `nanobot agent` with inline markdown rendering, slash commands, multi-modal input (images + audio transcription), and session management. Falls back to classic Rich-Live cycle when not in TTY. *Underlying need:* Users want a richer terminal experience without leaving the CLI.

## Bugs & Stability

**High Severity:**

1. **[#4333](https://github.com/HKUDS/nanobot/issues/4333)** — Anthropic `temperature` deprecation for opus-4-8 / Fable → 400 on every request  
   **Fix PR available:** [#4334](https://github.com/HKUDS/nanobot/pull/4334) (widens `omit_temperature` check).  
   *Impact:* Complete API failure for users on newest Anthropic models.

2. **[#4322](https://github.com/HKUDS/nanobot/issues/4322)** — `session_key` NameError in context.py after merge  
   *Impact:* Agent crashes at startup after merging specific branches. Regression from a recent refactor.

3. **[#4303](https://github.com/HKUDS/nanobot/issues/4303)** — MCP `_close_server` crashes with cancel-scope task mismatch  
   When `streamableHttp` MCP server session terminates and reconnects, process crashes with `RuntimeError: Attempted to exit cancel scope in a different task`.  
   **Fix PR available:** [#4303](https://github.com/HKUDS/nanobot/pull/4303).

**Medium Severity:**

4. **[#4083](https://github.com/HKUDS/nanobot/issues/4083)** — `pathAppend` does not take executable lookup precedence  
   **Fixed in:** [#4098](https://github.com/HKUDS/nanobot/pull/4098) (now prepends on Unix).

**Low Severity:**

5. **[#4332](https://github.com/HKUDS/nanobot/pull/4332)** — Codex image SSE parser doesn't handle early stream closure  
   `RemoteProtocolError` on incomplete chunked reads even when image result has arrived.  
   **Fix PR available:** [#4332](https://github.com/HKUDS/nanobot/pull/4332).

## Feature Requests & Roadmap Signals

| Feature | PR/Issue | Likelihood for Next Release |
|---|---|---|
| **Interactive TUI** for `nanobot agent` | [#4329](https://github.com/HKUDS/nanobot/pull/4329) | High — substantial code already submitted |
| **Automation management UI** (WebUI) | [#4330](https://github.com/HKUDS/nanobot/pull/4330) | High — PR ready with i18n |
| **TTS configuration system** (multi-provider) | [#4316](https://github.com/HKUDS/nanobot/pull/4316) | High — PR open with WebUI integration |
| **Configurable subagent model presets** | [#4291](https://github.com/HKUDS/nanobot/pull/4291) | Medium — feature-complete PR, design discussion ongoing |
| **WebUI sub-path / reverse proxy support** | [#4328](https://github.com/HKUDS/nanobot/pull/4328) | Medium — addresses real deployment pain |
| **File system tool enable toggle** | [#4138](https://github.com/HKUDS/nanobot/pull/4138) | Medium — aligns with existing `exec`/`web` patterns |
| **Ollama API support** | [#193](https://github.com/HKUDS/nanobot/issues/193) | Low — issue closed, but 15 comments show strong demand |

## User Feedback Summary

**Pain Points:**
- **Anthropic model version churn** — Users on newest models (opus-4-8, Fable) get hard 400s; workaround requires model-name whitelist updates
- **Env-var resolution gaps** — `${VAR}` templates in `config.json` are not resolved consistently across transcription, settings read/write paths, causing silent failures (three related PRs: [#4323](https://github.com/HKUDS/nanobot/pull/4323), [#4324](https://github.com/HKUDS/nanobot/pull/4324), [#4325](https://github.com/HKUDS/nanobot/pull/4325))
- **MCP server reliability** — `_close_server` reconnection crashes with cancel-scope task mismatch
- **Memory compaction correctness** — `idleCompact` could lose the latest corrective conversation turns (now fixed in [#4326](https://github.com/HKUDS/nanobot/pull/4326))

**Satisfaction Signals:**
- Active community submitting both bug reports and fixes — 5 closed issues and 5 merged PRs in 24 hours
- Continued investment in WebUI parity with config.json ([#4313](https://github.com/HKUDS/nanobot/pull/4313)) shows responsiveness to user interface needs
- New TUI development ([#4329](https://github.com/HKUDS/nanobot/pull/4329)) suggests maintainers are investing in core UX

## Backlog Watch

**No items appear critically backlogged.** All open issues have been updated within the last 24 hours, indicating active maintainer triage. The highest-risk item lacking a merged fix is **[#4333](https://github.com/HKUDS/nanobot/issues/4333)** (Anthropic model compatibility), but a fix PR ([#4334](https://github.com/HKUDS/nanobot/pull/4334)) is already open. No long-stale important issues were identified.

**Notable:** Issue [#193](https://github.com/HKUDS/nanobot/issues/193) (Ollama support) was closed but generated 15 comments — if interest resurfaces, maintainers may want to re-evaluate.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-14

## Today's Overview

The Hermes Agent project is experiencing **high activity** with 50 issues and 50 pull requests updated in the last 24 hours, indicating robust community engagement and active development. The open/active issue count (44) significantly outweighs closed items (6), suggesting the maintainer team may be facing a growing backlog despite steady PR throughput (5 merged/closed). Notably, there are **no new releases** today, which may delay deployment of several pending fixes for P1/P2 bugs. The most active discussion centers on Telegram Bot API 10.1 support (multiple related issues and PRs) and critical API key configuration bugs affecting custom provider setups, reflecting friction in configuration workflows.

## Releases

**No new releases today.** The latest available version remains v0.16.0 (2026.6.5).

## Project Progress

**5 pull requests were merged or closed today**, with the following notable completions:

| PR # | Description | Status |
|------|-------------|--------|
| #45870 | **fix(codex): refresh OAuth tokens earlier** — Prevents token expiry during long agent/gateway turns by refreshing 36 hours before expiry. Includes regression test. | Merged |
| #45871 | **fix(checkpoints): remove stale shadow index locks** — Cleans up stale `.lock` files before git commands, preserving active writer locks. Includes regression coverage. | Merged |
| #45826 | **macOS file tool tests fail on resolved /private paths** — Test infrastructure fix. | Closed |
| #42454 | **Photon (iMessage) platform plugin unusable** — SDK dependency resolution failure. | Closed |
| #44942 | **skill-update backup handling corruption** — Three defects in `.bak` interactions fixed. | Closed |

Additional **notable open PRs** advancing features and fixes:
- **#45866** (feat): Native OS notifications for desktop app with per-type toggles
- **#45863** (feat): WhatsApp Cloud Calling sidecar support
- **#45867** (feat): OpenRouter Fusion provider-managed server tool
- **#45873** (fix): Custom provider key_env resolution for issues #44666 and #43586
- **#45874** (fix): Wire `reset_by_platform` YAML field into gateway config

## Community Hot Topics

### Most Active Issues (by comment count)

1. **[#10771] Feature Request: Automatic Memory Consolidation (Auto Dream)** — [Link](https://github.com/NousResearch/hermes-agent/issues/10771)
   - **8 comments, 5 👍** — User request for periodic memory cleanup/deduplication, inspired by Claude Code's "Auto Dream." This has broad interest and touches on long-term agent reliability.

2. **[#44428] Support Telegram Bot API 10.1 Rich Messages** — [Link](https://github.com/NousResearch/hermes-agent/issues/44428)
   - **5 comments, 3 👍** — Drives the most active feature discussion, with 4 related child issues filed today covering rendering bugs, draft streaming, and rich message body styling.

3. **[#23975] Context compression interrupted by gateway messages** — [Link](https://github.com/NousResearch/hermes-agent/issues/23975)
   - **5 comments** — P2 bug causing fallback summary markers; affects active session accuracy.

### Most Active Pull Requests (by participation)

- **#45866** Native OS notifications — new feature with broad cross-platform implications
- **#38846** Multilingual i18n with 15 languages — long-running PR (since June 4) with significant community investment
- **#45873** Custom provider API key resolution — directly addressing top user pain point

**Underlying needs**: The Telegram Rich Messages cluster reveals strong demand for modern messaging features (tables, LaTeX, collapsible blocks). The memory consolidation request (Auto Dream) signals user frustration with stale/inflated context files. The key_env bugs indicate configuration complexity is a barrier to adoption.

## Bugs & Stability

### Critical (P1) — New Today

| Issue | Summary | Fix PR? |
|-------|---------|---------|
| [#45758](https://github.com/NousResearch/hermes-agent/issues/45758) | **Desktop app crash resets config.yaml and deletes .env for non-default profiles** — Data loss risk. | No |
| (Existing) [#27988](https://github.com/NousResearch/hermes-agent/issues/27988) | Codex Responses adapter maps complete response to `finish_reason=incomplete` on Azure Foundry — Incorrect signal. | Closed |
| (Existing) [#29205](https://github.com/NousResearch/hermes-agent/issues/29205) | Anthropic fallback fails after Codex empty turns due to trailing assistant prefill | Closed |

### High (P2) — New Today

| Issue | Summary | Fix PR? |
|-------|---------|---------|
| [#45792](https://github.com/NousResearch/hermes-agent/issues/45792) | **Docker environment detection fails** — Container doesn't recognize its own filesystem. | No |
| [#45785](https://github.com/NousResearch/hermes-agent/issues/45785) | **Telegram Web cannot render sendRichMessage** — Cross-platform rendering gap. | No |
| [#45770](https://github.com/NousResearch/hermes-agent/issues/45770) | **Telegram Rich Message draft streaming broken in private DM topics** | No |
| [#45674](https://github.com/NousResearch/hermes-agent/issues/45674) | **`hermes mcp list` crashes with AttributeError** when server entry is a string | No |
| [#44666](https://github.com/NousResearch/hermes-agent/issues/44666) | `api_key_env` alias silently ignored in custom providers | **PR #45873** |
| [#43586](https://github.com/NousResearch/hermes-agent/issues/43586) | `model: { provider: custom }` + key_env sends "no-key-required" → 401 | **PR #45873** |
| [#42405](https://github.com/NousResearch/hermes-agent/issues/42405) | Memory at capacity → replace zero-match retry loop → silent hang | No |
| [#33907](https://github.com/NousResearch/hermes-agent/issues/33907) | Context compression creates orphan sessions missing from state.db | No |
| [#19245](https://github.com/NousResearch/hermes-agent/issues/19245) | session_search returns empty after crash — orphaned session JSON | No |

### Recurring Themes

- **Configuration/key management bugs** dominate P2 severity: 3 distinct issues about `api_key_env` / `key_env` not being read, plus profile config corruption on crash.
- **Memory and context system issues** show pattern of data loss: orphan sessions, stale locks, retry loops.
- **Platform-specific rendering** (Telegram Web vs mobile, Desktop GPU errors on Linux) highlight cross-platform testing gaps.

## Feature Requests & Roadmap Signals

### Strong Community Demand

1. **Automatic Memory Consolidation** (#10771, 5 👍) — Periodic cleanup/deduplication. Likelihood: **High for next minor release** given 3-month lifespan and steady interest.
2. **Telegram Bot API 10.1 Rich Messages** (#44428, 3 👍) — Already has 4 child issues and multiple PRs in flight. Likelihood: **Very high — near-term implementation expected**.
3. **Runtime `reasoning_effort` tool** (#7273, 4 👍) — Agent-controlled reasoning adjustment. Likelihood: **Moderate** — complex agent integration.

### Other Notable Requests

| Issue | Summary | Signal |
|-------|---------|--------|
| [#45865](https://github.com/NousResearch/hermes-agent/issues/45865) | **Remove provider accounts in UI** — No way to disconnect in Accounts pane | New, unmet need |
| [#45864](https://github.com/NousResearch/hermes-agent/issues/45864) | **Telegram Rich Messages (duplicate)** | Redundant but signals urgency |
| [#45854](https://github.com/NousResearch/hermes-agent/issues/45854) | **Add sendRichMessage to send_message tool** | Technical extension of Rich Messages |
| [#45805](https://github.com/NousResearch/hermes-agent/issues/45805) | **Desktop: thinking level setting cannot persist** — Always reverts to Medium | User frustration with state management |

### Prediction for Next Release

The **Telegram Rich Messages implementation** (#45800, #45861, #45863 plus fix PRs) appears primed for inclusion. The **custom provider key_env fix** (#45873) will likely ship as a hotfix. Memory consolidation (#10771) may be deferred due to complexity.

## User Feedback Summary

### Pain Points

1. **Configuration fragility**: Multiple reports of API keys not being read (`no-key-required` errors), profile configs being reset on crash, and Docker environment misdetection. This creates barriers for new users and production deployments.

2. **Memory system unreliability**: Users report silent hangs (#42405), empty search results after crashes (#19245), orphaned sessions (#33907), and cron jobs that hardcode `skip_memory=True` (#9763). Memory is a core value proposition; these bugs undermine trust.

3. **Telegram Web incompatibility**: Rich Messages work on mobile but fail on Telegram Web — a significant UX gap for desktop users.

4. **Desktop cross-platform issues**: Linux GPU errors (#45102) and Mac test failures (#45826) suggest desktop app QA gaps.

### Use Cases

- **Power users**: Requesting agent-runtime control (reasoning_effort, memory consolidation) — indicate advanced adoption.
- **Developer workflows**: Configuration bugs reported by users like `JerryLiu369`, `jyorko` suggest Hermes is being used in dev/testing pipelines where multiple providers are common.
- **International users**: Multilingual i18n PR (#38846) and China-region OAuth (#36286) indicate growing non-English user base.

### Satisfaction Signals

- Positive: Telegram Rich Messages feature is well-received (👍 on related issues).
- Negative: Configuration bugs causing 401 errors are direct blockers — users are taking time to file detailed bug reports with reproduction steps.

## Backlog Watch

### Long-Open Unresolved Issues Requiring Maintainer Attention

| Issue | Created | Age | Priority | Summary |
|-------|---------|-----|----------|---------|
| [#10771](https://github.com/NousResearch/hermes-agent/issues/10771) | 2026-04-16 | 59 days | P3 | Auto Memory Consolidation — high community interest (5 👍), no maintainer response visible |
| [#7273](https://github.com/NousResearch/hermes-agent/issues/7273) | 2026-04-10 | 65 days | P3 | Runtime reasoning_effort tool — 4 👍, stale |
| [#9763](https://github.com/NousResearch/hermes-agent/issues/9763) | 2026-04-14 | 61 days | P3 | Cron jobs hardcode skip_memory=True — blocks external memory providers |
| [#19245](https://github.com/NousResearch/hermes-agent/issues/19245) | 2026-05-03 | 42 days | P2 | Orphaned session JSON after crash — data loss risk |
| [#18705](https://github.com/NousResearch/hermes-agent/issues/18705) | 2026-05-02 | 43 days | P2 | `.env` override breaks 12-factor app principles — security/ops concern |
| [#23975](https://github.com/NousResearch/hermes-agent/issues/23975) | 2026-05-11 | 34 days | P2 | Context compression interrupted by gateway messages — active sessions affected |

### Stale PRs

| PR | Created | Days Open | Description |
|----|---------|-----------|-------------|
| [#28479](https://github.com/NousResearch/hermes-agent/pull/28479) | 2026-05-19 | 26 days | Fix dispatch to pass session_id — impacts plugins |
| [#30196](https://github.com/NousResearch/hermes-agent/pull/30196) | 2026-05-22 | 23 days | Gateway --replace profile mismatch protection |
| [#30936](https://github.com/NousResearch/hermes-agent/pull/30936) | 2026-05-23 | 22 days | Slack NO_REPLY sentinel suppression |
| [#31477](https://github.com/NousResearch/hermes-agent/pull/31477) | 2026-05-24 | 21 days | Emit recovery-path final response through stream_delta_callback |

### Assessment

The project has **healthy community activity** but the **maintainer team appears stretched** given:
- 44 open issues updated in the last 24 hours vs only 6 closed
- Several P2 bugs from May remain unaddressed
- High-visibility features (Auto Memory) have no maintainer comment in 59 days
- 4+ P2/P3 PRs older than 3 weeks awaiting review

The Telegram Rich Messages cluster and configuration fixes are receiving attention, but the broader memory system reliability issues and long-standing i18n/multilingual efforts show signs of slower progress.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the PicoClaw project digest for **2026-06-14**.

---

## PicoClaw Project Digest – 2026-06-14

### 1. Today's Overview
The PicoClaw project shows **high velocity** today with **7 PRs** updated and **5 merged/closed** in the last 24 hours, indicating sustained development effort. A new **nightly build (v0.2.9-nightly)** was released, cautioning users of potential instability. Community activity is moderate, with **2 issues** updated—one open bug regarding token consumption and one closed hallucination bug. The maintainer team is actively reviewing critical fixes, including a high-priority image routing bug and a TTS voice override feature.

### 2. Releases
- **New Release:** `nightly` – bundled as **v0.2.9-nightly.20260613.c362114c**
  - This is an automated **nightly build** and may contain unstable changes.
  - **Full Changelog:** [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)
  - **No explicit breaking changes** or migration notes were published with this build.

### 3. Project Progress
Merged/closed PRs today advanced key areas:

- **Image & Vision Pipeline (#3017, #2964):** PR [#3117](https://github.com/sipeed/picoclaw/pull/3117) fixed the root cause of issue #3108, routing media turns and `load_image` follow-ups to the configured image model instead of retrying on a text-only model. PR [#2964](https://github.com/sipeed/picoclaw/pull/2964) (still open) adds configurable inbound image compression.
- **TTS & Voice (#3119):** PR [#3119](https://github.com/sipeed/picoclaw/pull/3119) added support for overriding OpenAI TTS voice/response format per-model and an automatic fallback mechanism.
- **Code Quality (#3065, #3066):** Two PRs fixed linter warnings by explicitly ignoring `Close()` errors on failure paths in `seahorse` and temp file handling.
- **Internationalization (#2935):** Closed PR added Traditional Chinese (zh-TW) support to docs and frontend i18n.

### 4. Community Hot Topics
- **Most Active Issue:** [#3012](https://github.com/sipeed/picoclaw/issues/3012) – *"Continuous consumption of tokens every minutes when evolution is enabled"* (3 comments). The user reports token drain every minute with Evolution mode enabled (Draft mode, Code Path Trigger) on FreeBSD using MiniMax. This suggests a potential **runaway loop or polling bug** in the evolution logic.
- **Most Active PR:** [#3118](https://github.com/sipeed/picoclaw/pull/3118) – *"Add remote Pico WebSocket mode to picoclaw agent"* (open, 1 comment). Community member `jp39` is contributing a remote WebSocket connection mode, expanding the CLI agent’s use cases beyond local-only.

### 5. Bugs & Stability
| Issue | Severity | Summary | Fix PR Exists? |
|---|---|---|---|
| [#3012](https://github.com/sipeed/picoclaw/issues/3012) | **High** | Continuous token consumption every minute when Evolution is enabled (Open) | No |
| [#3108](https://github.com/sipeed/picoclaw/issues/3108) | **Medium** | Image description requests hallucinate when active model lacks vision support (Closed) | Yes – merged in [#3117](https://github.com/sipeed/picoclaw/pull/3117) |

**Summary:** One critical open bug (#3012) regarding token waste remains unaddressed. A hallucination bug (#3108) has been resolved by routing vision tasks to the correct model.

### 6. Feature Requests & Roadmap Signals
- **Remote Agent Mode:** PR [#3118](https://github.com/sipeed/picoclaw/pull/3118) adds a `--remote ws://...` flag to the `picoclaw agent` command. This is a community-contributed feature likely targeting the **next minor release (v0.3.0)**.
- **Image Compression Pipeline:** PR [#2964](https://github.com/sipeed/picoclaw/pull/2964) introduces configurable multi-level image compression before sending to models. Useful for reducing bandwidth and token costs on vision queries.
- **TTS Override Per-Model:** The merged [#3119](https://github.com/sipeed/picoclaw/pull/3119) hints at growing demand for fine-grained TTS configuration, especially for OpenRouter users.

### 7. User Feedback Summary
- **Pain Points:**
  - **Token waste:** User `xpader` highlights a serious cost issue with Evolution mode draining tokens every minute. This undermines the value of the “Draft” mode for heavy users.
  - **Vision hallucination (resolved):** User `afjcjsbx` reported that `deepseek-v4-flash` (text-only) was being asked to describe images, producing off-topic answers. The fix merged today addresses this by routing vision calls to the image-specific model.
- **Satisfaction:**
  - The community is actively contributing (e.g., zh-TW locale, remote WebSocket mode), indicating a healthy developer ecosystem.

### 8. Backlog Watch
- **Issue #3012** – *Continuous token consumption*: Open for **9 days** (since 2026-06-05) with 3 comments. No maintainer response or fix PR yet. This is a **high-priority candidate** for the next bugfix release given its cost impact.
- **PR #2964** – *Feat/image input compression*: Open for **17 days** (since 2026-05-28). No merge or closure yet. This is a notable feature waiting for review that could improve vision efficiency.
- **No long-stale issues or PRs** appear to be completely abandoned.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-14

## Today's Overview

NanoClaw shows **heavy development activity** today with 15 PRs updated in the last 24 hours, driven almost entirely by a batch of merged/closed items (14 closed vs. 1 open). The single issue activity was a self-deleted spam post with no actionable content, indicating zero new bug reports or feature requests from the community today. The development cadence suggests the team is **clearing a sustained backlog** of branches that were ready for integration, particularly around agent-to-agent routing fixes, Signal channel improvements, and backup/disaster-recovery infrastructure. With no new releases cut, it appears the project is consolidating features ahead of a potential milestone release.

## Releases

No new releases were published. The project remains at its previous version, despite a large batch of merged PRs covering significant capability improvements and bug fixes. This suggests a release may be imminent once integration testing is complete.

## Project Progress

The following **14 PRs were closed/merged** today, spanning multiple improvement categories:

### Infrastructure & Hardening
- **#2732 (OPEN)** — *Harden host + agent-runner from health audit findings* — Addresses container lifecycle stability, Docker Desktop bind-mount crash-loop (`exit 127`), crash-on-spawn circuit breaker, `MAX_CONCURRENT_CONTAINERS` enforcement, and daemon-level `docker kill` fallback. This is the only open PR but represents critical production-hardening work.
- **#2084** — *Daily project backup + full/per-agent restore* — Adds disaster-recovery state snapshots, pluggable storage (local + S3), CLI restore for full or per-agent recovery.
- **#2692** — *fix(poll-loop): retry transient 5xx API-error results, notify on exhaustion* — Handles Claude SDK returning `529 Overloaded` as a terminal error message rather than throwing, adds retry logic and exhaustion notifications.

### Agent-to-Agent & Routing
- **#2267** — *fix(agent-to-agent): route a2a replies back to originating session* — Fixes "split-brain" where multi-session agent groups routed replies into the newest session instead of the originating one.
- **#2277** — *fix(agent-runner): refresh routing on follow-up messages mid-query* — Fixes frozen routing context that caused null-routed cron tasks to misroute follow-up chat messages.

### Signal Channel Improvements
- **#2203** — *inbound + outbound reaction support* — Bidirectional Signal reactions via MCP `add_reaction` tool.
- **#2071** — *route every non-audio attachment through the inbox path* — PDFs, docs, archives, images now land as readable files at `/workspace/inbox/<msgId>/<name>`.
- **#2070** — *accept host-path attachments in extractAttachmentFiles* — Enables native adapters to pass files already on disk (not base64) through the inbox pipeline.
- **#2040** — *support outbound attachments* — Enables Signal `send` with file attachments via signal-cli JSON-RPC.

### Provider & SDK Improvements
- **#2754** — *feat(runner): onExchangeComplete provider hook + slash-command interruption* — Adds optional lifecycle hook for provider-side post-exchange logic plus slash-command interruption support.
- **#2747** — *feat(onecli): SDK 2.2.1 — credential-stub mounts + machine-checkable pins* — SDK bump 0.5.0 → 2.2.1 with credential-stub mounts and pin verification.
- **#2746** — *feat(providers): agent-surfaces capability seam* — Host-side registry allowing providers to declare capabilities (sending messages, tool execution, memory).
- **#2745** — *feat(memory): opt-in persistent memory scaffold for providers* — Adds `usesMemoryScaffold` capability and container-based persistent memory.

### Ollama & Multimodal
- **#2072** — *feat(ollama): images field for multimodal models via inbox paths* — `ollama_generate` now accepts workspace-relative image paths, base64-encodes and forwards to multimodal models.

### Bug Fixes
- **#2670** — *fix(agent-runner): self-heal poisoned-resume crash loop* — Fixes infinite crash loop on corrupt resumed transcripts where SDK returns 400 as a result event, not a throw.

## Community Hot Topics

No community engagement was observed today due to the low volume of open commentary. The single issue (#2755) was a self-deleted post. The PRs with the most substantive discussion potential are:

- **#2732** (*Harden host + agent-runner*) — Open PR with health audit findings; likely will attract production-deployment feedback.
- **#2692** (*Transient 5xx retry*) — Addresses a real pain point for Claude API users hitting rate limits and overload errors.

**Underlying need**: The batch of closed Signal-related PRs (#2040, #2070, #2071, #2203) indicates strong maintainer focus on **Signal as a first-class channel** with full attachment and reaction support, likely in response to user demand for Signal parity with other chat platforms.

## Bugs & Stability

**Zero new bug reports** in the last 24 hours. However, several significant bugs were fixed in this batch:

| Severity | Issue/Problem | Fix PR | Status |
|----------|--------------|--------|--------|
| **High** | Session crash-loop on corrupt resumed transcripts (SDK 400 silently swallowed) | #2670 | Merged |
| **High** | Docker Desktop bind-mount crash-loop (exit 127) | #2732 | Open/In-progress |
| **High** | Split-brain routing in multi-session agent groups | #2267 | Merged |
| **Medium** | Frozen routing context on cron-task follow-ups | #2277 | Merged |
| **Medium** | API 529 "Overloaded" silently failing as terminal error | #2692 | Merged |

The **poisoned-resume crash loop** (#2670) was the most critical stability fix—it addresses a scenario where agents would enter an infinite crash loop on corrupt transcripts with no self-recovery. The ongoing **container lifecycle hardening** (#2732) targets production reliability issues.

## Feature Requests & Roadmap Signals

No new feature requests were filed today. Based on merged PRs, the following features are likely for the next release:

1. **Signal channel maturity** — Full bidirectional attachments (any file type), reactions, and outbound files position Signal as a fully supported native channel (likely next minor release).
2. **Provider capability system** — The `agent-surfaces` (#2746) and `onExchangeComplete` (#2754) PRs suggest an upcoming **provider plugin architecture** where third-party providers can declare their capabilities and lifecycle hooks.
3. **Persistent memory scaffold** (#2745) — Providers can opt-in to container-backed persistent memory; likely this will be surfaced to users as a configuration toggle for enabling agent memory.
4. **Ollama multimodal** (#2072) — Enables image-based interactions via local Ollama models; important for self-hosted users avoiding cloud API costs.
5. **Disaster recovery** (#2084) — Production-ready backup/restore with S3 support suggests enterprise/ops-focused use case maturation.

**Prediction**: The next version (likely v2.x) will emphasize **Signal native channel support** and **provider extensibility** as headline features.

## User Feedback Summary

With zero community issues or discussions today, direct user feedback is absent. However, the content of merged PRs reveals maintainer responses to latent pain points:

- **Pain point**: "My agent crashes loop on resume and never recovers" → Fixed by #2670
- **Pain point**: "Signal attachments don't work / get dropped" → Fixed by #2040, #2070, #2071
- **Pain point**: "I can't back up my agent state / fear data loss" → Addressed by #2084
- **Pain point**: "API overload errors silently kill my agent" → Fixed by #2692
- **Pain point**: "Multi-session agents reply in wrong thread" → Fixed by #2267

The lack of new user complaints suggests the **Signal attachment** and **crash-loop** issues were significant sources of dissatisfaction that are now being resolved.

## Backlog Watch

No issues or PRs requiring maintainer attention today. The project has no stale issues or unanswered feature requests in the last 24 hours. The only open PR (#2732) is actively being worked (updated today) and addresses production hardening—no backlog concerns.

**Notable**: The complete absence of any open issues or feature requests from the community may indicate either:
1. A quiet period, or
2. The project's issue tracker is well-maintained with fast closure of stale/non-actionable items

Given the high volume of merged PRs, (2) appears more likely—the team is clearing technical debt and infrastructure work before re-engaging with community feature discussions.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the **NullClaw Project Digest** for **2026-06-14**.

---

## NullClaw Project Digest – 2026-06-14

### 1. Today's Overview
The project is in a **moderate state of maintenance activity**, with two open issues updated in the last 24 hours and one new pull request submitted to fix a critical runtime bug. There are **no new releases** rolling out. The most significant development today is a high-priority fix for a "use-after-free" bug affecting cron-based agent jobs, which has garnered community attention and a direct PR within the same day. No items were closed or merged in the past 24 hours, suggesting a bottleneck in code review or merge capacity.

### 2. Releases
**No new releases.** The last available version remains unchanged. Users relying on agent-type cron jobs are urged to track PR #954 for a fix.

### 3. Project Progress
**No pull requests were merged or closed today.** The project saw **no feature advancement or merged fixes** in the last 24 hours. However, one critical fix (PR #954) is now open and pending review.

### 4. Community Hot Topics
- **Issue #941 – Agent-type cron jobs silently fail (Telegram delivery never happens)**  
  *URL:* [Issue #941](https://github.com/nullclaw/nullclaw/issues/941)  
  *Author:* weissfl | *Comments:* 7 | *Reactions:* 0  
  This is the most actively discussed issue. It describes a silent failure where scheduled agent jobs execute on the backend but never spawn a subprocess, resulting in zero delivery. The thread has escalated quickly, leading directly to a contributor submitting a fix (PR #954). The underlying need is **reliable cron execution for agent workflows**, which is core to the platform’s autonomous scheduling promise.

- **Issue #914 – [enhancement] Create JIRA access tool**  
  *URL:* [Issue #914](https://github.com/nullclaw/nullclaw/issues/914)  
  *Author:* sayjeyhi | *Comments:* 1 | *Reactions:* 0  
  While not as active, this feature request signals growing demand for enterprise integrations. The community is looking for a **secure JIRA connector** that allows agents to read, create, and update tickets directly.

### 5. Bugs & Stability
- **HIGH SEVERITY — Use-after-free in OutboundMessage.channel (Issue #941 / PR #954)**  
  *Reported:* weissfl (2026-05-31, updated 2026-06-13) | *Fix PR:* [#954](https://github.com/nullclaw/nullclaw/pull/954) (open, by vernonstinebaker)  
  **Impact:** Any one-shot ("schedule once") agent job fails to deliver output via Telegram, Mattermost, or any channel. Jobs are silently marked complete with no data sent. This is a memory safety bug (use-after-free) in the `OutboundMessage.channel` pointer.  
  **Status:** Root cause identified; fix proposed but not yet merged. This is the most critical stability issue currently open.

### 6. Feature Requests & Roadmap Signals
- **JIRA integration (Issue #914)**  
  A full-featured JIRA tool is requested, covering authentication, CRUD on tickets, sprint retrieval, and commenting. Given the project’s focus on workflow agents, this is a strong candidate for the next minor release if maintainers prioritize enterprise use cases.

**Prediction:** The fix for the cron/agent bug (PR #954) will likely be the next commit to land, followed by consideration of the JIRA tool if community interest grows.

### 7. User Feedback Summary
- **Pain points:**  
  - Silent failure of scheduled agent jobs (Issue #941) is causing lost confidence in cron reliability. Users cannot trust the system to deliver messages on time.  
  - Lack of JIRA integration is a blocker for teams who want to automate project management tasks using NullClaw agents.

- **Satisfaction signal:**  
  - The quick analysis and PR submission for the cron bug (within hours of the issue being flagged) shows that the community and contributors are responsive, which partially mitigates user frustration.

### 8. Backlog Watch
- **Issue #914 – JIRA access tool**  
  *URL:* [Issue #914](https://github.com/nullclaw/nullclaw/issues/914)  
  *Updated:* 2026-06-13 (last comment from 2026-05-13)  
  *Attention needed:* This issue has been open for over a month with only one comment. If the project aims to attract enterprise users, this feature request should receive **maintainer triage**—either a roadmap commitment or a request for community contribution.

- **Issue #941 / PR #954 – Cron/agent bug**  
  *Attention needed:* The fix must be reviewed and merged. If left open, the bug will continue to block users relying on scheduled tasks. This should be the maintainers’ highest priority today.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-14

## 1. Today's Overview
The IronClaw project shows **elevated activity** with 24 pull requests and 5 issues updated in the last 24 hours. The core team is heavily focused on **attachment support integration** (track #4644), with 13 PRs progressing across the byte-storage, transcript, extractor, and frontend stacks. A significant **design pivot** is underway: the `DeferredBusy` drain approach (#4812) is being replaced by an explicit gate-open feedback mechanism (#4838). Two long-running nightly E2E failures (#4108) remain unresolved, indicating lingering CI instability. Overall project health is **productive but in a refactoring-heavy phase** with 18 open PRs awaiting review.

## 2. Releases
**No new releases today.** The previous release candidate PR (#3708) remains open and unmerged—it proposes breaking changes to `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0), plus a major version bump for the main `ironclaw` crate (0.24.0 → 0.29.1). No migration notes are available yet.

## 3. Project Progress
**6 PRs merged/closed today:**

- **Attachment infrastructure (track #4644):** `#4672` (inline attachment uploads on WebChat), `#4670` (bridge inbound bytes → transcript `AttachmentRef`s), `#4668` (MountView-based attachment landing crate), and `#4655` (attachment refs through Reborn transcript) were all merged. These form the core pipeline: byte ingestion → storage → transcript persistence → model visibility.

- **DeferredBusy drain refinements:** Three closed issues (`#4831`, `#4832`, `#4833`) addressed architectural concerns from PR #4812, including routing resubmission through product_workflow replay, batching drains, and filesystem indexing.

- **Other:** `#4654` (extensible attachment format registry) merged as the foundational Track 1 of #4644.

## 4. Community Hot Topics

**Most active issue:**
- **#4817** (OPEN) — *DeferredBusy drain follow-ups* — 3 comments. Tracks three unblocked design decisions after #4812 merge: drain submission doorway architecture, stale-intent policy, and startup sweep. Indicates the team is already planning post-merge improvements.

**Most active PRs (by comment count):**
- **#4841** (OPEN) — *No run-borking failures* — Core contributor serrrfirat addresses a major UX pain point: runs that fail with opaque errors (HostUnavailable, model failure) now get explanation + retry path.
- **#4838** (OPEN) — *Explicit gate-open feedback* — Replaces the just-landed #4812 defer-and-drain approach. This signals a significant architectural reversal based on review feedback.
- **#4836** (OPEN) — *Runtime context surfaces* — Gives the model visibility into channel connections, delivery state, and run origin. Underlying need: enabling the model to make informed decisions about outbound delivery.

**Underlying needs:** The community (primarily core team) is addressing two major themes: (1) **reducing silent/unexplained failures** in production runs, and (2) **giving the model more contextual awareness** to make better decisions autonomously.

## 5. Bugs & Stability

**Critical:**
- **#4108** (OPEN) — *Nightly E2E failed* — Unresolved since May 27, now 18+ days old. Last updated June 13 (failed again). The failure is on the "v2-engine" job. No comments, no assigned fix PR. **Escalating severity** due to duration and lack of maintainer response.

**Medium (with fix PRs):**
- **#4839** (OPEN PR) — *Auth-gate re-dispatch causes Slack re-approval loop* — Capability invocations requiring both approval and credential burn the approval on every resume cycle. Fix PR #4839 preserves invocation identity across re-dispatch.
- **#4844** (OPEN PR) — *Slack gate route filter bug* — `gate_kind_filter` incorrectly allocated per route and accepted `&GateRef` instead of raw string. Fix PR #4844 submitted.
- **#4843** (OPEN PR) — *Gate resolution ack fanout to stale delivery loops* — Same `submitted_run_id` for gate ack and user-message ack causes duplicate processing. Fix PR #4843 implements single-flight per run_id.
- **#4840** (OPEN PR) — *Missing-credential auth gate shown after approval gate* — UX defect: human approves an action that can't run, then sees auth required. Fix PR #4840 surfaces credential gate first.

**Low:**
- **#4680** (OPEN PR) — *OpenAI-compat emits `[non_text_content]` for non-text parts* — Collapses image/audio to opaque literal reaching the model. Fix PR #4680 submitted.

## 6. Feature Requests & Roadmap Signals

**Likely for next release:**
- **Attachment support (#4644)** — 13 PRs in flight across all layers (registry, transcript, ingress, extraction, frontend). The most significant feature push. Stacking indicates final integration is imminent.
- **Run failure resilience (#4841)** — Eliminating "run-borking" terminal errors with explanation + retry. High impact for production deployments.
- **Runtime context awareness (#4836)** — Model-visible channel/delivery/run-origin state. Expected to unlock better autonomous routing decisions.
- **Routine create endpoint (#4264)** — New contributor wcc945's PR adds POST /api/routines to web gateway. If merged, enables programmatic routine creation outside agent flows.

**Moderate probability:**
- **Attachment WebChat UX (#4738)** — Frontend SPA upload UX for attachments, stacked on backend work.
- **OpenAI-compat non-text content fix (#4680)** — Stops dropping non-text content from API-compatible paths.

**Lower probability:**
- **Extractor refactor (#4675)** — Moves text extraction to standalone crate. Cleanup, not feature.

## 7. User Feedback Summary
- **Primary pain point:** Production runs fail with opaque errors and no recovery path (addressed by #4841). The "run-borking" issue is a recurring theme across multiple PRs (#4839, #4840, #4843 on Slack re-approval loops).
- **UX complaint:** Gate ordering confuses users—approval gates appear before credential checks, burning approvals.
- **Feature desire:** Attachment support in WebChat is clearly the most requested capability; the entire #4644 track is driven by user need for file sharing in conversations.
- **No negative sentiment** observed—team is responsive to issues, merging fixes rapidly.

## 8. Backlog Watch

**Critical:**
- **#4108** (OPEN, May 27) — *Nightly E2E failed* — **18 days unanswered.** No fix PR assigned. CI reliability risk. Maintainer attention needed immediately.

**Notable open PRs awaiting review:**
- **#3708** (OPEN, May 16) — *Release PR* — **29 days open.** Blocks all downstream consumers from using new crates. Breaking changes to `ironclaw_common` and `ironclaw_skills` are ready but unmerged. This is the only item preventing a release.
- **#4264** (OPEN, May 31) — *Routine create endpoint* — **14 days open.** New contributor wcc945's first PR. Risk of contributor churn if not reviewed soon.

**Moderate concern:**
- **#4675** (OPEN, June 10) — *Extractor refactor* — No reviewer activity in 4 days. Clean refactoring PR, unlikely to block other work but may cause merge conflicts as #4644 track PRs accumulate.

**Recommendation:** Prioritize #4108 (E2E failure) and #3708 (release) to unblock the project.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the **LobsterAI Project Digest** for **2026-06-14**.

---

## LobsterAI Project Digest: 2026-06-14

### 1. Today's Overview
The project is currently in a **low-activity maintenance phase**. Over the last 24 hours, there were no new releases, and no new Issues or PRs were created. However, 4 issues and 5 PRs were updated, all of which are marked as `stale` (last updated approximately 70 days ago). This suggests the maintainers are performing a **cleanup or review of existing stale items** rather than shipping new features. The four open issues are all bug reports dating from early April, indicating a potential backlog in triaging user-reported problems.

### 2. Releases
**None.** No new versions or tags were published during this period.

### 3. Project Progress
Two pull requests were **closed/merged** today:
- **[PR #1466 (fix/mcp): Modal close button unreachable when content grows tall](https://github.com/netease-youdao/LobsterAI/pull/1466)** – Resolved a UI bug where the MCP server configuration modal's cancel button scrolled out of view due to `overflow-y-auto` being applied to the entire panel. Likely merged to improve MCP server setup UX.
- **[PR #1467 (fix/shortcuts): Display Cmd (⌘) instead of Ctrl on macOS](https://github.com/netease-youdao/LobsterAI/pull/1467)** – Fixed a platform inconsistency where keyboard shortcut labels showed "Ctrl" on macOS instead of the native "⌘" symbol. A small but important UX polish for Mac users.

Three open PRs remain with no new comments today:
- **#1440** – UI refactor for skill selection badges.
- **#1441** – Artifact preview pipeline (HTML/React/Mermaid).
- **#1445** – Validation fixes for skill imports.

### 4. Community Hot Topics
All updated issues are stale, but the following generated the most discussion:

- **[Issue #1443: 有计划支持新版本的openclaw吗？](https://github.com/netease-youdao/LobsterAI/issues/1443)** (2 comments, 0 👍)
  *Need: We would like to know if there is a plan to support the new version of OpenClaw?*
  The user upgraded OpenClaw to v2026.3.24, which introduced breaking changes, and the local deployment failed. This is a **blocker for users who depend on the OpenClaw integration**. The lack of a maintainer response for over 70 days may frustrate users.

- **[Issue #1437: 创建定时任务时，计划选择不重复，清空日历，点击【创建任务】按钮没反应...](https://github.com/netease-youdao/LobsterAI/issues/1437)** (1 comment)
  Critical **UI dead click** bug: users cannot create non-repeating scheduled tasks after clearing the calendar. No error feedback is shown.

### 5. Bugs & Stability
**Severity: Medium-to-High.** No new bugs were reported today, but **four high-impact stale bugs** remain unaddressed from early April:

| Issue | Title | Severity | Fix PR Exists? |
|-------|-------|----------|----------------|
| [#1443](https://github.com/netease-youdao/LobsterAI/issues/1443) | OpenClaw new version compatibility (breaking change) | **High** – blocks deployment | No |
| [#1437](https://github.com/netease-youdao/LobsterAI/issues/1437) | Scheduled task creation "no repeat" button dead click | **High** – UI freeze with no feedback | No |
| [#1439](https://github.com/netease-youdao/LobsterAI/issues/1439) | Disabled skills still invoked in conversation | **High** – security/logic flaw | No |
| [#1442](https://github.com/netease-youdao/LobsterAI/issues/1442) | Agent skill references disappear after first conversation | **Medium** – confusing UX | No |

None of these have an associated fix PR open.

### 6. Feature Requests & Roadmap Signals
The following **user-requested features** emerged from stale issues:
- **OpenClaw v2026.3.24 compatibility** (Issue #1443) – Request to adapt to breaking changes in the upstream OpenClaw framework. This is a dependency upgrade, likely to land in the next minor release.
- **Skill re-import validation** (PR #1445 is open) – The team is actively working on fixing duplicate skill import logic and improving zip import directory naming. This suggests the roadmap includes tightening skill management reliability.

**Prediction:** The next release (v2026.06 or v2026.07) will likely include:
- Fixes for **duplicate skill imports** (PR #1445).
- The **artifact preview pipeline** (PR #1441) for HTML/React/Mermaid.
- Platform-specific UI fixes (PR #1467) and modal scrolling (PR #1466).

### 7. User Feedback Summary
Real user pain points from the data:
- **"Dead click" frustration**: Users cannot create non-repeating scheduled tasks without any error message (Issue #1437).
- **Deployment blockers**: Upgrading a dependency (OpenClaw) causes the app to fail entirely (Issue #1443).
- **Inconsistent behavior**: Skills that are "disabled" still execute in conversation (Issue #1439), and Agent-configured skills disappear after the first message (Issue #1442). Users are questioning the purpose of the "skill selector" feature.

**Satisfaction:** Low among active bug reporters. These issues have been open for ~70 days with no maintainer acknowledgment.

### 8. Backlog Watch
The following items require **immediate maintainer attention** due to age and lack of response:

| Item | Type | Age (days) | Reason for Concern |
|------|------|------------|--------------------|
| [#1443](https://github.com/netease-youdao/LobsterAI/issues/1443) | Issue | 72 | Blocks users on newer OpenClaw; no maintainer comment |
| [#1437](https://github.com/netease-youdao/LobsterAI/issues/1437) | Issue | 72 | Core feature (scheduling) broken with no error feedback |
| [#1439](https://github.com/netease-youdao/LobsterAI/issues/1439) | Issue | 72 | Security/feature flaw: disabled skills still active |
| [#1441](https://github.com/netease-youdao/LobsterAI/pull/1441) | PR | 72 | High-value feature (artifact preview) but no update since initial creation |
| [#1445](https://github.com/netease-youdao/LobsterAI/pull/1445) | PR | 72 | Fixes duplicate imports – still open without merge |

**Project Health Note:** While the codebase shows active work on UI polish and import validation (via PRs), the **lack of response to blocking bugs for over two months** is a significant health concern. Users may lose trust if critical issues like "disabling skills does not work" are ignored.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest — 2026-06-14**

---

### 1. Today’s Overview

Moltis saw a single new issue and an associated pull request filed over the past 24 hours, representing a focused, low-volume day. The project remains in a stable maintenance phase with no new releases. Activity centers on a specific OAuth interoperability bug affecting popular MCP servers (Notion, Linear), which has been promptly addressed by a proposed fix. While project throughput is low, the rapid pairing of a bug report with a fix PR signals a healthy, responsive maintenance cycle.

---

### 2. Releases

No new releases were published today.

---

### 3. Project Progress

**No PRs merged or closed today.**

The only PR currently open is a direct fix for today’s reported bug. No other feature or chore PRs were completed.

---

### 4. Community Hot Topics

Only one issue and one PR are active, both tied to the same topic:

- **[Issue #1119 – Bug: MCP OAuth fails with `invalid_target` for servers using `resource_metadata`](https://github.com/moltis-org/moltis/issues/1119)**  
  Author: `xzavrel` | 1 comment | 0 reactions  
  This is the sole community interaction today. The bug blocks the integration of popular remote MCP servers (Notion, Linear) that return a non-standard OAuth challenge. The single comment likely acknowledges the issue or coordinates with the PR author.

- **[PR #1120 – Fix: use direct fetch for `resource_metadata` URL from WWW-Authenticate](https://github.com/moltis-org/moltis/pull/1120)**  
  Author: `xzavrel`  
  Submitted by the same reporter, this PR directly addresses the bug. No community discussion has occurred yet.

**Underlying need:** Users want seamless OAuth integration with mainstream MCP servers without manual workarounds. The rapid bug-to-fix cycle suggests strong internal alignment on prioritizing connector reliability over new features.

---

### 5. Bugs & Stability

| Bug | Severity | Status | Fix Available? |
|-----|----------|--------|----------------|
| MCP OAuth fails with `invalid_target` for servers using `resource_metadata` (Notion, Linear) | **High** — blocks integration with widely-used external tools | Open | Yes (PR #1120) |

**Details:** The `discover_and_register()` function improperly passes the `resource_metadata` URL, causing OAuth flows to fail with `invalid_target`. The proposed fix (PR #1120) switches to a direct fetch approach. If merged, this bug should be resolved in the next patch release.

No other bugs, crashes, or regressions were reported today.

---

### 6. Feature Requests & Roadmap Signals

No explicit feature requests were filed today.

**Predictions for next version:**  
- Likely: Patch release containing PR #1120 to fix OAuth compatibility with Notion/Linear MCP servers.  
- Possible: Improved OAuth header parsing logic to future-proof against other non-standard `WWW-Authenticate` parameters.

---

### 7. User Feedback Summary

- **Pain point:** User `xzavrel` encountered a clean, reproducible OAuth failure when adding popular SaaS MCP servers. The error message (`invalid_target`) is opaque — the user likely had to debug header parsing to identify the root cause.  
- **Satisfaction signal:** The user proactively contributed a fix PR, suggesting technical confidence in the codebase and a willingness to invest in improvement.  
- **Use case:** Remote MCP server integration (Notion, Linear) for AI agent workflows — a core use case for Moltis.

---

### 8. Backlog Watch

No long-unanswered issues or PRs were noted. All outstanding items are recent (within 24 hours) and actively being addressed.

---

**Project Health Summary:** Low activity, focused on a single high-value bug fix. Responsive bug-to-fix pipeline. No releases, roadmap changes, or community breakdowns. Moltis is in a stable maintenance cadence with fast issue resolution.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the project digest for **CoPaw** (github.com/agentscope-ai/CoPaw) based on data from **2026-06-14**.

---

# CoPaw Project Digest – 2026-06-14

## 1. Today's Overview
Activity is **moderate**, with 10 Issues and 8 PRs updated in the last 24 hours. The project is in a **maintenance-intensive phase** — five PRs submitted by the same first-time contributor (`ly-wang19`) remain under review, targeting edge-case bugs in backup, cron, context, and browser detection. One bug was closed (attachment download 404), but **five new bug reports** surfaced today, several describing critical user-facing regressions (e.g., chat freezes, total context loss). The community is also actively requesting **new integrations** (Vietnamese language, Zalo Bot, Kimi API access). No new releases were cut today.

## 2. Releases
**No new releases today.** The latest version remains **v1.1.11.post2** (noted in Issue #5140). Users are still reporting issues with this release.

## 3. Project Progress
Two PRs were merged or closed today:

- **[PR #4969]** (CLOSED, Merged) – `feat(skill): Add skill tag batch download` by `Leirunlin`. Fixes #2961, adding tag filtering to skill batch download to workspace. This is a **net new feature** that advanced the Skills component.
- **[PR #2498]** (CLOSED) – `fix(agents): use console language when creating agent and fallback unsupported langs` by `Alneys`. This PR addresses a long-standing UX issue where new agents defaulted to English and Chinese persona files regardless of the user's UI language.

## 4. Community Hot Topics
The most active discussions (by comments/reactions) reveal a pattern of **integration and localization demand**:

- **[Issue #5156]** – `[Feature]: 建议支持 kimi-for-coding / 加入 uv 白名单` (4 comments). Users subscribed to Kimi's coding tier cannot use it via QwenPaw because only the official API is supported. **Underlying need:** interoperability with existing paid subscriptions, not just API keys.
- **[Issue #5140]** – `[Bug]: v1.1.11.post2附件下载还是有问题` (6 comments, **CLOSED**). A high-traffic bug report (closed today) regarding attachment downloads failing with 404 for non-text files.
- **[Issue #5047]** – `[Question]: Windows Tauri 桌面端启动特别慢` (3 comments). Users report startup times of **10+ minutes** and frequent "not responding" states on Windows 11 after switching to Tauri.

## 5. Bugs & Stability
Five new bugs were reported today. Severity ranking (High → Low):

| Issue | Severity | Description | Fix PR? |
|---|---|---|---|
| [#5172](https://github.com/agentscope-ai/QwenPaw/issues/5172) | **Critical** | Chat freezes after idle → no response until forced stop; blocks QQ/WeChat channels. | No |
| [#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171) | **Critical** | Context compression can drop **all** context (0 tokens retained) when persona file exceeds threshold. Breaks task continuity. | No |
| [#5174](https://github.com/agentscope-ai/QwenPaw/issues/5174) | **High** | Cron agent can't output knowledge files; heartbeat agent doesn't execute heavy tasks. | No |
| [#5047](https://github.com/agentscope-ai/QwenPaw/issues/5047) | **High** | Tauri desktop startup >10 min on Windows 11. | No |
| [#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140) | **Medium** | (CLOSED) Non-text file download returns 404. | Fixed |

**Status:** No fix PRs exist for the two critical bugs (#5172, #5171). This is a high-risk gap.

## 6. Feature Requests & Roadmap Signals
Today's requests suggest the next release may include:

- **Vietnamese (vi) interface** – [#5169](https://github.com/agentscope-ai/QwenPaw/issues/5169) (formal proposal, 2 comments). Likely high priority for maintainers given previous pattern (Indonesian, Portuguese).
- **Zalo Bot channel support** – [#5168](https://github.com/agentscope-ai/QwenPaw/issues/5168). Strong business case (Vietnam's dominant messaging platform).
- **Kimi for Coding API whitelist** – [#5156](https://github.com/agentscope-ai/QwenPaw/issues/5156). Users want to leverage existing subscriptions.
- **Feishu CardKit streaming optimization** – [#5167](https://github.com/agentscope-ai/QwenPaw/issues/5167). Performance feedback on long replies being "char-by-char" slow.

**Prediction:** Vietnamese locale and Zalo Bot are likely candidates for the next minor release (v1.1.12). The Feishu streaming feedback may be addressed as a performance optimization.

## 7. User Feedback Summary
- **Satisfaction:** Users appreciate the Feishu CardKit streaming integration and the active maintenance. The skill tag download feature (PR #4969) was well-received.
- **Dissatisfaction / Pain Points:**
  - **Desktop performance regression:** "Startup time went from 1-2 minutes to 10+ minutes" (Issue #5047).
  - **Chat reliability:** "If you talk, then wait, then talk again, it just hangs forever" (Issue #5172). Users on QQ/WeChat channels cannot click "stop" — the bot effectively crashes.
  - **Context loss:** "Context completely lost, task interrupted" (Issue #5171), with concrete reproduction conditions.
  - **Integration friction:** "I already paid for Kimi coding, but can't use it" (Issue #5156).

## 8. Backlog Watch
No new "stale" issues were flagged today, but the following long-standing PRs from **2026-06-09** remain **under review** with no maintainer response since update:

- **[PR #5035](https://github.com/agentscope-ai/QwenPaw/pull/5035)** – `fix(local_models): parse llama.cpp server version without fixed-width slice`
- **[PR #5037](https://github.com/agentscope-ai/QwenPaw/pull/5037)** – `fix(config): avoid IndexError on empty Exec= in Linux browser detection`
- **[PR #5038](https://github.com/agentscope-ai/QwenPaw/pull/5038)** – `fix(context): guard empty msg list in LightContextManager.pre_reply`
- **[PR #5040](https://github.com/agentscope-ai/QwenPaw/pull/5040)** – `fix(crons): tolerate invalid jobs in jobs.json instead of failing all`
- **[PR #5041](https://github.com/agentscope-ai/QwenPaw/pull/5041)** – `fix(backup): skip unreadable files instead of failing the whole backup`

All five are from `ly-wang19` and fix specific, well-described edge cases. **They have not been reviewed, scheduled, or merged for 5 days**, which is concerning given the rising number of bug reports in related areas.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-14

## Today's Overview

ZeroClaw shows **high activity** with 42 issues and 50 PRs updated in the last 24 hours, indicating a healthy, fast-moving development cycle. The project has **25 open issues** with active triage, and **12 PRs were merged/closed** today, reflecting sustained delivery. Two critical S1 bugs were reported — a WebSocket `ask_user` failure and a canvas-store regression after PR #6986 — both with fix PRs already open, demonstrating strong incident response. No new releases were cut today; the project appears to be in an active development phase between releases, with major architectural RFCs (unified agent turn engines, native plugin system) and integration trackers (v0.8.1) progressing in parallel.

## Releases

**No new releases today.** The latest release remains v0.8.0-beta-1 (referenced in issue #6876). Trackers for v0.8.1 (#6970) are actively accumulating PRs.

## Project Progress

**12 PRs were merged or closed today**, advancing several areas:

- **Cron & Scheduling**: PR #7398 ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/7398)) merged — adds `pause`/`resume` for scheduled tasks via `enabled` field in `cron_add`/`cron_update` and a `PATCH /api/cron/:id` endpoint
- **Runtime Consolidation**: PR #7415 ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/7415)) was executed as a single consolidation PR (#7540) — unifying `run_tool_call_loop` + `turn_streamed` + `Agent::turn` into a single turn engine
- **Security Fixes**: Issue #6876 (allowed_tools does not restrict MCP tools) was closed — documented as intentional design, with documentation gap now addressed
- **Provider Bugfixes**: Issue #6723 (OpenAI timeout_secs hardcoded at 120s) closed — fix ensures `timeout_secs` config is read by native provider
- **Cross-platform**: Issue #7509 (self-test fails on Windows hosts) closed — zip asset rejection fixed
- **Quickstart**: Issue #7507 (infinite redraw loop on non-TTY stdin) closed — dialoguer checklist no longer floods output

## Community Hot Topics

### Most Active Issues

1. **[#5849 — Dream Mode: Periodic Memory Consolidation](https://github.com/zeroclaw-labs/zeroclaw/issues/5849)** (18 comments, open)  
   *Underlying need:* Users want ZeroClaw to learn from past interactions during idle time, suggesting a demand for continuous, self-improving agents that don't require explicit retraining.

2. **[#5470 — Multiple issues when running safely](https://github.com/zeroclaw-labs/zeroclaw/issues/5470)** (5 comments, closed)  
   *Underlying need:* Users running high-reasoning models (GPT 5.4) encounter Telegram memory deduplication failurers, indicating scaling issues with advanced LLMs.

3. **[#5570 — Faster SQLite memory vector search](https://github.com/zeroclaw-labs/zeroclaw/issues/5570)** (5 comments, closed)  
   *Underlying need:* Users with large memory stores experience O(n) scan latency, requesting approximate nearest neighbor (ANN) indexing for production-scale deployments.

4. **[#7415 — Unify agent turn engines](https://github.com/zeroclaw-labs/zeroclaw/issues/7415)** (4 comments, closed)  
   Major architectural RFC — maintainers fast-tracked this to a single consolidation PR, signaling strong investment in runtime simplification.

5. **[#6760 — Docker documentation update](https://github.com/zeroclaw-labs/zeroclaw/issues/6760)** (4 comments, open)  
   Community member contributed working Docker Compose for Gateway + Web UI — indicates growing self-hosted adoption.

### Most Active PRs

- **#7361** ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/7361)) — Per-turn output routing via `send_via` (XL-sized PR, risk:high) touching 12 channels. This is the largest open PR by scope, implementing RFC-6969.
- **#6667** ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/6667)) — Skills background review fork + `skill_manage` tool (XL-sized, risk:high). Long-running (since May 14) with `needs-author-action`.

## Bugs & Stability

### Critical Bugs (S1 - Workflow Blocked)

1. **canvas-store regression in WS chat/ACP sessions** — Issue #7563 ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/7563))  
   *Status:* Open, reported 2026-06-13. Web UI `/canvas` stays empty after WebSocket chat uses `canvas` tool. Regression from #6986.  
   *Severity:* **S1** — blocks canvas feature for WebSocket users.

2. **`ask_user` fails instantly in gateway web dashboard** — Issue #7542 ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/7542))  
   *Status:* Open, fix PRs exist: #7584 ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/7584)), #7586 ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/7586)).  
   *Fix:* Both PRs authored by xuwei-xy, patching `WsApprovalChannel` to properly await user response.

3. **macOS app not working** — Issue #7527 ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/7527))  
   *Status:* Open, blocked. macOS 15.7.7 — app can't detect granted permissions, displays empty page, window disappears on restart. No fix PR yet.

### Degraded Behavior (S2)

4. **zerocode dark themes inherit unreadable terminal foreground** — Issue #7377 ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/7377))  
   *Status:* Closed. Light terminal + dark zerocode theme = low contrast text in chat/output areas.

### Minor Issues (S3)

5. **macOS Cmd-C treated as quit chord** — Issue #7378 ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/7378))  
   *Status:* Closed. Keybinding collision in zerocode TUI.

6. **Self-test fails on Windows hosts** — Issue #7509 ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/7509))  
   *Status:* Closed. Zip assets rejected by `is_installable_release_asset` on Windows.

7. **Quickstart infinite redraw loop on non-TTY stdin** — Issue #7507 ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/7507))  
   *Status:* Closed. Flooded 4.3 GB output when piped — `dialoguer` checklist issue.

## Feature Requests & Roadmap Signals

### Likely for v0.8.1 (based on tracker #6970)

| Feature | Issue | Priority | Status |
|---------|-------|----------|--------|
| Prompt-triggered skill/plugin install suggestions | [#6289](https://github.com/zeroclaw-labs/zeroclaw/issues/6289) | P2 | Accepted |
| llama.cpp model router for quick switching | [#7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539) | P2 | Accepted |
| Streaming card messages for QQ/DingTalk/WeChat/Feishu | [#7531](https://github.com/zeroclaw-labs/zeroclaw/issues/7531) | P2 | Accepted |
| Multi-session support in gateway web chat UI | [#7543](https://github.com/zeroclaw-labs/zeroclaw/issues/7543) | P2 | Accepted |
| file_read: decode non-UTF-8 text via charset detection | [#7521](https://github.com/zeroclaw-labs/zeroclaw/issues/7521) | P2 | Accepted |
| Delegate tool: allow subagents with different risk profiles | [#7514](https://github.com/zeroclaw-labs/zeroclaw/issues/7514) | P2 | Accepted |

### Longer-term Signals

- **Dream Mode (Memory Consolidation)** — [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) — P2, no-stale. Could land in v0.9+ as a flagship cognitive feature.
- **Native Dynamic-Library Plugin System** — [#7420](https://github.com/zeroclaw-labs/zeroclaw/issues/7420) — RFC under review. Would replace/supplement WASM plugin system for native performance.
- **OCI-Compliant Container Registries for Plugin Storage** — [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) — RFC under review. Enterprise deployment angle.
- **Zerocode TUI / ACP Bridge** — Two trackers: [#6823](https://github.com/zeroclaw-labs/zeroclaw/issues/6823) and [#6826](https://github.com/zeroclaw-labs/zeroclaw/issues/6826) — standalone terminal UI for power users.

## User Feedback Summary

### Pain Points (High Frequency)

1. **WASM plugin installation path mismatch** — PR #7549 ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/7549)) fixes this: CLI-installed plugins were invisible because `plugin install` wrote to `config.data_dir/plugins` but runtime scanned `config.plugins.plugins_dir`. Fix in review.

2. **WhatsApp channel limitations** — Two active requests:
   - `web_fetch` tool not working in WhatsApp Web: Issue #6223 (closed, fix verified).
   - Missing message reaction support (`ack_reactions`): Issue #7518 ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/7518)) — P2, in-progress.

3. **Configuration confusion** — `risk_profile.allowed_tools` does not restrict MCP tools (Issue #6876, closed as by-design, docs updated). OpenAI provider ignores `timeout_secs` (Issue #6723, closed with fix). Users want clearer documentation for security boundaries.

4. **Dashboard unreliability** — Issue #7523 ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/7523)): macOS Homebrew install of v0.8.0 cannot access web dashboard — "Build the frontend" error. User workflow is blocked.

### Satisfaction Signals

- **Docker support improving**: Issue #6760 — community member contributed working Docker Compose config.
- **Cron enhancements merged**: PR #7398 — pause/resume for scheduled tasks, community-authored.
- **Turn engine consolidation**: PR #7415 fast-tracked to PR #7540 — maintainers responsive to architectural feedback.

## Backlog Watch

### Stale Issues Needing Maintainer Attention

| Issue | Last Update | Days Open | Reason for Concern |
|-------|-------------|-----------|-------------------|
| [#5797](https://github.com/zeroclaw-labs/zeroclaw/pull/5797) — TLS CA cert support for custom providers | 2026-06-13 (updated) | 59 days | PR open since April 16, `provider:kilo` tagged. Critical for corporate/self-hosted deployments. |
| [#6667](https://github.com/zeroclaw-labs/zeroclaw/pull/6667) — Skills background review fork | 2026-06-13 (updated) | 30 days | XL-sized, `needs-author-action`. Addresses #4619 integration gap. |
| [#6684](https://github.com/zeroclaw-labs/zeroclaw/pull/6684) — Skill manage patch error differentiation | 2026-06-13 (updated) | 29 days | Stacked on #6667, `needs-author-action`. Blocks clear user feedback. |
| [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) — Dream Mode | 2026-06-13 (updated) | 57 days | `no-stale` applied, but high-comment-count feature without assignee. |
| [#6289](https://github.com/zeroclaw-labs/zeroclaw/issues/6289) — Prompt-triggered install suggestions | 2026-06-13 (updated) | 43 days | Accepted but no assigned PR. Discovery UX gap persists. |

### Stale PRs Needing Review

- **#5797** (TLS CA certs) — 59 days, high risk, no maintainer review comments since April
- **#6716/#6717/#6718** (JordanTheJet skills PRs) — All ~28 days, low/medium risk, docs-only changes
- **#7284** (per-agent workspace dir fix) — 8 days, high risk, no maintainer review yet — critical for multi-tenant security

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*