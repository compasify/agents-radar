# OpenClaw Ecosystem Digest 2026-06-22

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-22 00:30 UTC

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

# OpenClaw Project Digest — 2026-06-22

## Today's Overview

OpenClaw continues at high velocity with **500 issues** and **500 pull requests** updated in the last 24 hours, reflecting a large and engaged community. Activity is dominated by two beta releases pushed in the past day (v2026.6.10-beta.1 and v2026.6.9), both focused on session-state reliability, Telegram delivery fidelity, and compaction model alias resolution. However, the project is carrying significant technical debt: multiple high-impact P1 regressions from the 2026.5.20–2026.6.9 update range remain open, with particular density around session write-lock timeouts, duplicate Telegram replies, compaction timeout fragility, and silent data-loss bugs from storage path relocations. Project health is **active but under strain** from a wave of post-upgrade regressions that have yet to be fully addressed.

## Releases

Two new releases were published:
- **[v2026.6.10-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.6.10-beta.1)** — Focuses on session state reliability: pending subagent completion announcements are now preserved, chat history transcripts kept non-empty, media index alignment maintained, dormant follow-up drains restarted, and compaction model aliases resolved consistently. No breaking changes or migration notes documented.
- **[v2026.6.9](https://github.com/openclaw/openclaw/releases/tag/v2026.6.9)** — Richer Telegram delivery with HTML support, preserved rich markdown and sticker paths, faithful progress draft and command output rendering, safe HTML table normalization, and correct mention/spooled handler routing. No breaking changes documented.

## Project Progress

Today's activity shows **20 merged/closed PRs** and **22 closed issues**. Notable advancements include:

- **PR #68936** ([merged](https://github.com/openclaw/openclaw/pull/68936)) — Autofix pipeline for PR review comments and Windows daemon supervision added.
- **PR #95007** ([closed](https://github.com/openclaw/openclaw/pull/95007)) — Telegram progress drafts now render as plain readable text instead of HTML/code-oriented rows.
- **Issue #91926** ([closed](https://github.com/openclaw/openclaw/issues/91926)) — Gateway restart failure via exec tool (Task Scheduler start phase silently dropped) resolved.
- Several PRs targeting bounded response reads for OpenRouter model scans (PR #95418) and Google prompt cache responses (PR #95417) have moved to "ready for maintainer look" status.

## Community Hot Topics

The most active discussions this week reveal deep frustration with session-state reliability and delivery guarantees:

1. **[#86538 — Session write-lock timeouts block subagent delivery lanes](https://github.com/openclaw/openclaw/issues/86538)** (12 comments) — Users reporting that JSONL write-lock contention stalls the entire agent pipeline, with insufficient owner diagnostics. This is a diamond-lobster-rated P1 with an open linked PR.

2. **[#86519 — Agent repeats identical replies 2-10x on Telegram after 5.20 update](https://github.com/openclaw/openclaw/issues/86519)** (10 comments) — A regression from the 2026.5.20 update where duplicate replies plague Telegram users. Partial improvement in 5.22 but not fully fixed, causing significant user trust erosion.

3. **[#90354 — Bounded/validated append semantics for pre-compaction memory flush](https://github.com/openclaw/openclaw/issues/90354)** (8 comments) — Request for guardrails around memory-flush append operations to prevent oversized or noisy model output from corrupting durable memory.

4. **[#92043 — 180s compaction timeout breaks legitimately-long compactions](https://github.com/openclaw/openclaw/issues/92043)** (8 comments) — A recent timeout reduction from 900s to 180s causes repeated failures for installs with long histories or slow providers, with no partial-progress reuse.

5. **[#92460 — Isolated cron completion announcer drops explicit delivery.channel](https://github.com/openclaw/openclaw/issues/92460)** (8 comments) — Cron jobs that set `delivery.channel` explicitly still fail with "Channel is required" through the isolated-cron path.

## Bugs & Stability

Bugs reported today, ranked by severity:

**Critical (P1, data-loss or crash-loop):**
- **[#95495 — 2026.6.9 silently relocates memory store with no migration](https://github.com/openclaw/openclaw/issues/95495)** — After upgrade, memory vector store moves from `~/.openclaw/memory/` to agent-specific SQLite path, forcing full re-embedding of 1499 files with zero warning. No fix PR yet.
- **[#95248 — release_lane is no-op when claim held by live worker](https://github.com/openclaw/openclaw/issues/95248)** — Stuck Telegram inbound events block agent response until gateway restart. No fix PR yet.
- **[#93375 — Telegram polling enters silent crash loop after transient network timeout](https://github.com/openclaw/openclaw/issues/93375)** — Health monitor cannot recover; polling restarts every 10-15 minutes silently. No fix PR yet.
- **[#92433 — Subagent completion silently dropped when announce steered into ending requester run](https://github.com/openclaw/openclaw/issues/92433)** — Completion enqueued but never processed. No fix PR yet.
- **[#91804 — Internal reasoning leakage in 2026.6.5](https://github.com/openclaw/openclaw/issues/91804)** — Agent thinking exposed to users. No fix PR yet.
- **[#91009 — PreToolUse hook relay spawns CPU-bound processes stalling gateway RPC](https://github.com/openclaw/openclaw/issues/91009)** — Multiple short-lived `openclaw-hooks` processes consume 100% CPU each. Linked PR open.

**High (P1, message-loss or session-state):**
- **[#92076 — Subagent completion fails when requester session inactive](https://github.com/openclaw/openclaw/issues/92076)** — Feishu DM sessions lose subagent results. No fix PR.
- **[#91931 — Preseeded SOUL.md/IDENTITY.md cause bootstrap auto-complete](https://github.com/openclaw/openclaw/issues/91931)** — User-provided BOOTSTRAP.md deleted before first run. Linked PR open.
- **[#91212 — delivery-recovery returns 0 recovered after gateway restart](https://github.com/openclaw/openclaw/issues/91212)** — Recovery starts before channel transport ready; messages lost. No fix PR.

**Regression (P1, worked before):**
- **[#90325 — Matrix channel dispatch broken in v2026.6.1](https://github.com/openclaw/openclaw/issues/90325)** — TypeError on every inbound message. No fix PR.
- **[#89278 — Codex OAuth refresh succeeds but cron/heartbeat fail with 10s timeout](https://github.com/openclaw/openclaw/issues/89278)** — Auth refresh takes >10s, causing cron failures. No fix PR.
- **[#88087 — Poor UX for long-running background tasks on DigitalOcean droplet](https://github.com/openclaw/openclaw/issues/88087)** — User abandoning platform after cumulative friction.

## Feature Requests & Roadmap Signals

Notable feature signals from today's data:

1. **[#90916 — Topic-session families for one assistant across multiple named context lanes](https://github.com/openclaw/openclaw/issues/90916)** (7 comments) — Request for isolated recent transcript context per topic while sharing durable memory. Likely targeted for a 2026.7 or v2026.8 release given community interest and product-decision tag.

2. **[#90354 — Bounded/validated append semantics for memory flush](https://github.com/openclaw/openclaw/issues/90354)** — Strong candidate for next beta given frequent memory-core interactions.

3. **[#91455 — Kubernetes documentation update](https://github.com/openclaw/openclaw/issues/91455)** (7 comments) — User frustration with current Helm/k8s docs; maintainer attention needed.

4. **[PR #93265 — Streamlined agent-assisted configuration onboarding](https://github.com/openclaw/openclaw/pull/93265)** — Large feature adding setup/"onboard" command, migration from supported environments, managed plugin installs. Likely candidate for upcoming stable release.

5. **[PR #95613 — Monthly daily and stable release policy](https://github.com/openclaw/openclaw/pull/95613)** — Proposes formalizing the release cadence; would significantly impact roadmap predictability if adopted.

## User Feedback Summary

Common pain points expressed across this week's activity:

- **Session reliability fatigue**: Users repeatedly report that long agent runs, subagent orchestrations, and cron-isolated sessions fail silently or deliver duplicate messages. Multiple diamond-lobster issues (the highest user-pain rating) focus on this class of problems.
- **Storage and migration anxiety**: The v2026.6.9 memory relocation bug (Issue #95495) with zero migration warning has shaken user confidence in upgrades. "[A] full re-embed (1499 files) with zero upgrade-time warning" captures the frustration.
- **Telegram-specific degradation**: Duplicate replies, silent crash loops, and IP-rotation false alarms (PR #95221) are driving Telegram users to consider alternative channels.
- **Context ceiling / compaction pain**: The 180s timeout change (Issue #92043) converted a slow-but-recoverable scenario into a permanent failure mode; "a legitimately-long compaction fails identically every turn."
- **Abandonment signal**: Issue #88087 from a DigitalOcean user explicitly states they are "tearing it down" after cumulative friction, citing poor UX for background tasks and silent cron wake failures.

## Backlog Watch

Long-unanswered items requiring maintainer attention:

- **[#67915 — Local attachments "Unavailable — Outside allowed folders"](https://github.com/openclaw/openclaw/issues/67915)** — Opened 2026-04-17, stale for 66 days, P2 diamond-lobster, last maintainer activity unclear. Attachments (TTS audio, media files) rendered inaccessible despite correct server config.

- **[#80176 — JSONL session-replay harness (Codex parity Phase 5)](https://github.com/openclaw/openclaw/issues/80176)** — Opened 2026-05-10, 42 days stale, part of a multi-phase parity initiative. No linked PR progress.

- **[#86214 — Codex app-server client closes mid-turn during large image/tool requests](https://github.com/openclaw/openclaw/issues/86214)** — Opened 2026-05-24, P1 platinum-hermit with "needs-live-repro" triage label. Users seeing stopped/aborted UI state with lost image generation tasks.

- **[#51762 — Configurable default agent ID (escape the 'main' prison)](https://github.com/openclaw/openclaw/pull/51762)** — Open since 2026-03-21, 93 days stale. Addresses a fundamental UX limitation (hardcoded `"main"` agent ID fallback) but remains in "needs proof" status with multiple merge-risk warnings.

- **[#46303 — Drain inbound debounce buffer before SIGUSR1 reload](https://github.com/openclaw/openclaw/pull/46303)** — Open since 2026-03-14, with "needs proof" status and extensive merge-risk flags (compatibility, message-delivery, availability). Addresses permanent message loss on config reload but hasn't advanced in months.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-06-22

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing **divergent maturity trajectories**, with established projects like OpenClaw and ZeroClaw processing 500+ daily PRs/Issues while smaller projects enter maintenance or low-activity cycles. A clear **stability vs. feature velocity tension** dominates: the most active projects (OpenClaw, ZeroClaw, IronClaw) ship daily but carry significant regression burdens, while mid-tier projects (NanoBot, CoPaw) demonstrate faster bug turnaround and higher contributor satisfaction. Security is emerging as a cross-cutting concern, with NanoClaw and LobsterAI disclosing SSRF and privilege-escalation vulnerabilities simultaneously. The ecosystem is consolidating around self-hosted infrastructure, mobile support, and production-grade reliability as core differentiators.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | New Release | Health Score |
|---------|---------------------|-------------------|-------------|--------------|
| **OpenClaw** | 500 | 500 | ✅ v2026.6.10-beta.1 | **⚠️ Active but strained** (P1 regressions, data-loss bugs) |
| **ZeroClaw** | 41 | 50 | ❌ | **✅ High velocity** (S1 fixes active, CI hardening) |
| **CoPaw** | 16 | 32 | ❌ (v1.1.12 shipping) | **✅ Healthy** (strong contributor onboarding, mobile push) |
| **IronClaw** | 3 | ~50 (14 merged) | ❌ | **✅ High throughput** (Reborn runtime, CI fixes) |
| **NanoBot** | 10 | 34 | ❌ (v0.2.x latest) | **✅ Responsive** (same-day fixes for critical bugs) |
| **Hermes Agent** | 50 | 50 | ❌ (v2026.4.3 latest) | **⚠️ Moderate** (Gemini sunset crisis, active triage) |
| **NanoClaw** | 2 | 5 | ❌ | **⚠️ Security-focused** (2 high-severity advisories) |
| **PicoClaw** | 5 | 1 (closed) | ✅ (nightly build) | **⚠️ Low-moderate** (token consumption bug unresolved) |
| **LobsterAI** | 15 (14 closed) | 0 | ❌ | **⚠️ Reactive** (backlog grooming, security advisory) |
| **ZeptoClaw** | 1 (closed) | 1 (merged) | ❌ | **✅ Stable-maintenance** (binary size gate shipped) |
| **NullClaw** | 1 (open) | 0 | ❌ | **🚨 Low activity** (critical Windows bug unfixed) |
| **TinyClaw** | 0 | 0 | ❌ | **🟢 Inactive** |
| **Moltis** | 0 | 0 | ❌ | **🟢 Inactive** |

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale dominance**: 500+ daily issues/PRs — 10x ZeroClaw, 30x NanoBot, 100x most others. Largest contributor base and third-party integration ecosystem.
- **Release cadence**: Two beta releases in 24 hours. No other project matches this iteration speed.
- **Telegram & delivery fidelity**: v2026.6.9's HTML support, rich markdown, sticker paths — best-in-class for messaging channel rendering.
- **Session-state engineering**: Subagent completion preservation, media index alignment, dormant follow-up drain restart — architectural depth unmatched by peers.

**Technical Approach Differences:**
- **JSONL session store** (vs. SQLite/mem0): Provides append-only durability but creates write-lock contention (#86538) that peers using database-backed stores don't face.
- **Compaction model with aliases**: Sophisticated memory management that enabled the compaction timeout regression (#92043) — a self-inflicted complexity gap vs. simpler approaches.
- **Diamond-lobster severity rating**: Unique community-legacy pain taxonomy not replicated elsewhere.

**Community Size Comparison:**
- **Largest**: OpenClaw (500 issues/500 PRs) >> ZeroClaw (41/50) ≈ Hermes (50/50) > CoPaw (16/32) > NanoBot (10/34)
- **Active maintainer count**: OpenClaw shows ~15-20 unique contributors in digest; ZeroClaw ~5-8; CoPaw ~8-10 including first-timers.
- **Risk**: "Abandonment signal" in OpenClaw's user feedback (#88087) — a symptom of scale outpacing reliability guarantees.

---

## 4. Shared Technical Focus Areas

**Requirements Emerging Across Multiple Projects:**

| Requirement | Projects | Examples |
|-------------|----------|----------|
| **Self-hosted/hybrid storage** | ZeroClaw, Hermes Agent, IronClaw | mem0 self-hosting PRs (Hermes), Local-First Mode RFC (ZeroClaw) |
| **Mobile/web responsiveness** | CoPaw, Hermes Agent, PicoClaw | 9 mobile PRs in CoPaw (24h), Safari iOS bug (PicoClaw) |
| **Security-hardened approval flows** | NanoClaw, LobsterAI, ZeroClaw | MCP server approval smuggling (NanoClaw), SSRF guard weakened (LobsterAI) |
| **Multi-registry skill distribution** | ZeroClaw, OpenClaw, Hermes Agent | Extra skill registries via `registry:<name>` (ZeroClaw PR #7827) |
| **One-shot/cron scheduling** | IronClaw, OpenClaw, NanoBot | `TriggerSchedule::Once{at}` (IronClaw), cron completion announcer (OpenClaw) |
| **Streaming response reliability** | NanoBot, OpenClaw, CoPaw | Duplicate `tool_use` IDs bricking sessions (NanoBot #4442) |
| **Memory compaction/consolidation** | OpenClaw, ZeroClaw, NanoBot | 180s timeout failure (OpenClaw #92043), tool-based structured output (ZeroClaw #4760) |
| **Model fallback/redundancy** | ZeroClaw, IronClaw, CoPaw | RoutingChatModel unimplemented (CoPaw #5351), OAuth refresh timeout (OpenClaw #89278) |

**Implication:** The ecosystem is converging on **three infra pillars**: self-hostable storage, mobile-first UI, and model-agnostic resilience. Projects missing any of these will lose contributor mindshare.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | NanoBot | CoPaw | IronClaw | Hermes |
|-----------|----------|----------|---------|-------|----------|--------|
| **Target User** | Power users, heavy orchestration | Developer-first, CI-driven | Quick-deploy bot | Multi-agent teams | Production-grade | Power users, CLI-heavy |
| **Feature Focus** | Session-state, delivery fidelity | Governance, test coverage, RFCs | Security, streaming, TTS | Mobile, message queue | Runtime performance (Reborn) | Provider diversity |
| **Storage** | JSONL files | SQLite + mem0 | Memory/history.jsonl | SQLite | Postgres (hosted preview) | mem0 vector store |
| **Channel Support** | Telegram, Feishu, Matrix, cron | Telegram, Lark, Discord, Mattermost | Telegram, Discord, Slack | Feishu, Web, console | CI/workflow triggers | Telegram, WhatsApp, Matrix |
| **Release Strategy** | Beta-driven, daily | Milestone-based | Feature-fix cycles | Patch releases | PR-batch merges | Tagged + tracking commits |
| **Security Posture** | Reactive (P1 regressions) | Proactive (S0/S1 tracking) | Proactive (hours-to-fix) | Moderate (unfixed data loss) | CI-focused | Moderate (E2EE gap) |
| **Community Model** | Large, noisy, high churn | Structured, RFC-governed | Responsive, engaged | Growing, contributor-friendly | Core-team driven | Volunteer-heavy |

**Key Insight:** OpenClaw leads in **raw capability breadth**; ZeroClaw leads in **engineering discipline**; NanoBot leads in **bug-response velocity**; CoPaw leads in **community onboarding**. The ecosystem is fragmenting by reliability vs. features — a tension users must evaluate by deployment risk tolerance.

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapid Iteration (daily releases/merges, high contributor churn):**
- **OpenClaw**: 500+ daily items, but "under strain" — technical debt accumulating faster than fixes. Regression wave from 2026.5.20-6.9 range unresolved. Users reporting abandonment.
- **ZeroClaw**: 41 issues/50 PRs daily, 9 issues + 8 PRs closed. RFC governance scaling well. S1 bug tracking disciplined.
- **IronClaw**: 14 PRs merged daily (Reborn runtime, CI). Core-team driven, low community engagement but high throughput.

**Tier 2 — Moderate Iteration (weekly-ish cycles, growing contributor base):**
- **CoPaw**: 16 issues/32 PRs, 6 first-time contributors today. Mobile responsiveness cluster indicates coordinated feature push. v1.1.12 regressions being worked.
- **NanoBot**: 10 issues/34 PRs, 14 merged. Security fix response measured in hours. Strong next-release probability within days.
- **Hermes Agent**: 50/50 but 70% PR closure. Gemini sunset crisis driving duplicate issues. Maintainers triaging but backlog growing.

**Tier 3 — Stabilizing / Maintenance:**
- **PicoClaw**: Nightly builds, dependency bumps. Critical token consumption bug (#3012) unfixed for days. Pre-release toward v0.3.0 but momentum slowing.
- **ZeptoClaw**: Single PR merged (binary gate). Clean backlog. Approaching feature-complete for deployment constraints.
- **NanoClaw**: Security advisories published, fixes in review. Low feature activity.

**Tier 4 — Inactive / At-Risk:**
- **NullClaw**: Critical Windows bug unfixed, zero other activity. User churn signal (model works in competitor).
- **LobsterAI**: Backlog groomed (14 stale issues closed), only active item is SSRF advisory. No code changes in 24h.
- **TinyClaw, Moltis**: Zero activity. Effectively inactive.

---

## 7. Trend Signals

### From Community Feedback (Across Projects)

1. **"Works on my machine" is no longer acceptable**: Multi-platform failures (Intel Mac arm64 binary #8095, Windows bootstrap kill #50090, Safari iOS <16.4 #3090) show CI coverage gaps are directly causing user churn.

2. **Self-hosting is a first-class requirement**: 9 PRs converging on mem0 self-hosted (Hermes), Local-First Mode RFC (ZeroClaw), Postgres hosted preview (IronClaw). Users demand escape from cloud lock-in.

3. **Silent failures destroy trust**: The most painful bugs across projects are *silent* — messages dropped (#5344 CoPaw), data undetectably relocated (#95495 OpenClaw), streams silently bricked (#4442 NanoBot). Better observability (OTel traces in ZeroClaw, heartbeat commands in NanoBot) is the emerging counter-trend.

4. **Mobile is the new desktop**: CoPaw's 9 PR mobile cluster in 24h, PicoClaw's Safari bug, Hermes' Desktop vs. TUI workspace conflict — the ecosystem is pivoting from CLI-first to browser/mobile-first UX.

5. **Security is accelerating**: 5 security advisories across 3 projects in 24h (NanoClaw #2828/#2827, LobsterAI #2181, ZeroClaw #6613, NanoBot #4434/#4435). The "move fast and fix" phase is giving way to security-hardening requirements.

6. **Self-healing is the new feature**: IronClaw's Reflection Service (failure→learning documents), NanoBot's heartbeat trigger, OpenClaw's dormant follow-up drain restart — agents that recover from failures without operator intervention are the next frontier.

### Value for AI Agent Developers

- **Choose your reliability trade-off**: OpenClaw for breadth, ZeroClaw for discipline, NanoBot for security response, CoPaw for community onboarding.
- **Watch the self-hosting convergence**: If deploying to production, invest in the self-hosted storage stacks emerging across Hermes, ZeroClaw, and IronClaw — they're converging on a common architecture.
- **Mobile-first is table stakes**: Any new agent project without a responsive web or mobile client will be irrelevant within 6 months based on contributor activity signals.
- **Security is a differentiator**: NanoClaw's proactive disclosure model (pre-notified maintainers) vs. reactive patterns elsewhere — projects with transparent security processes will win enterprise adoption.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-22

## Today's Overview

NanoBot is experiencing a highly active development cycle, with **34 pull requests** updated in the last 24 hours and **10 issues** receiving updates. The project has **14 merged/closed PRs** today, indicating a strong release-oriented push, though no new releases were tagged. Activity is concentrated on critical bug fixes (particularly MCP security, streaming reliability, and concurrency safety) alongside substantial feature work (memory tools, heartbeat commands, TTS, and Telegram rich messages). The maintainer team appears responsive, with multiple PRs opened to address the same high-severity bugs within hours of their reporting.

## Releases

**No new releases today.** The latest tagged version remains `v0.2.x` (no exact version specified in data). Given the volume of merged PRs—particularly security fixes and stability patches—a `v0.2.1` or minor release is likely imminent.

## Project Progress

**14 PRs merged/closed in the last 24 hours** (out of 34 updated), including:

- **🔒 Security fixes (merged):**
  - **PR #4436** by `michaelxer`: `fix(tools): gate MCP resource and prompt registration behind enabledTools` — closes two security advisories (#4434, #4435) where MCP deny-all/allowlist policies could be bypassed to expose resources and prompts to the model.
  - **PR #4441** by `michaelxer`: `fix(mcp): force-close streamable_http generator on reconnect failure` — resolves `RuntimeError` crashes during MCP server session termination.

- **🔧 WebUI & CLI fixes:**
  - **PR #4323** by `tobrien`: `fix(transcription): resolve env vars before transcription config lookup`.
  - **PR #4324** by `tobrien`: `fix(webui): resolve env-var templates in settings read paths`.
  - **PR #4325** by `tobrien`: `fix(webui): resolve env-var templates in settings update paths`.
  - **PR #4316** by `tobrien`: `feat(tts): add TTS configuration system with multi-provider support` (feat + merged). Supports OpenAI, Groq (Orpheus), and ElevenLabs.

- **🧠 Memory & agent features:**
  - **PR #4402** by `yu-xin-c`: `feat(memory): add opt-in eager consolidation` — archives completed conversation slices into `memory/history.jsonl`.

- **🛡️ Bug fixes:**
  - **PR #4443** by `michaelxer` and **PR #4444** by `tedyyan` (both addressing #4442): guard against duplicate `tool_use` IDs in streamed Anthropic responses that could permanently brick a session.

- **Other notable closes:**
  - **PR #4323** (env-var transcription fix) and **PR #4325** (settings update env-var resolution) — foundational infrastructure reliability improvements.

## Community Hot Topics

### Most Active Issues (by comments/reactions)

1. **#1011 — [stale] Mattermost Bot** (4 👍, 1 comment)
   - URL: [Issue #1011](https://github.com/HKUDS/nanobot/issues/1011)
   - *Oldest active issue (Feb 2026).* User asking for Mattermost channel support; the comment mentions Discord, Telegram, Slack, WhatsApp concerns. **Needs decision from maintainers.**

2. **#4408 — [CLOSED] Concurrency-safe hooks** (2 comments, 0 👍)
   - URL: [Issue #4408](https://github.com/HKUDS/nanobot/issues/4408)
   - *Critical concurrency bug fixed.* User reported that per-run hooks are not thread-safe due to shared mutable `_extra_hooks` being clobbered during concurrent `run()` calls. The issue was closed, indicating a fix was applied.

### Most Active Pull Requests

The top active PRs cluster around two themes:

1. **Anthropic streaming reliability**: PRs #4444 (`tedyyan`) and #4443 (`michaelxer`) both address the same session-bricking bug (#4442). This duplicate-fix pattern signals **high urgency** community need.

2. **MCP security**: PR #4436 (`michaelxer`) closed the vulnerability reported in #4434/#4435 within **hours** of disclosure—excellent maintainer response time.

### Underlying Needs Analysis
- **Streaming resilience**: Users with Anthropic family providers are experiencing session corruption that silently breaks the agent. The community's rapid duplication of fix attempts demonstrates strong demand.
- **MCP access control**: The `enabledTools` bypass is a security-sensitive concern (exposes arbitrary MCP resources/prompts to the model). The prompt fix is reassuring.
- **Mattermost/Bot channel diversity**: Issue #1011 remains the longest-standing open feature request, with 4 👍, but has only 1 comment and no maintainer engagement.

## Bugs & Stability

### High Severity

1. **#4442 — Duplicate `tool_use` IDs in streamed responses → session bricking** (REPORTED: 2026-06-21)
   - URL: [Issue #4442](https://github.com/HKUDS/nanobot/issues/4442)
   - *Severity: Critical* — A mis-assembled streaming response can persist duplicate `tool_use` IDs, causing all subsequent requests to fail with HTTP 400 and the agent to silently stop replying. Fix PRs #4443 and #4444 were opened same-day.

2. **#4435/#4434 — MCP `enabledTools` allowlist bypass** (REPORTED: 2026-06-21)
   - URL: [#4435](https://github.com/HKUDS/nanobot/issues/4435) | [#4434](https://github.com/HKUDS/nanobot/issues/4434)
   - *Severity: High* — Security advisory. Documentation states `enabledTools: []` registers no capabilities, but resources and prompts were registered unconditionally, exposing them to the model. A denial-all policy was ineffective. **Fixed in PR #4436.**

3. **#4408 — `run()` per-run hooks concurrency unsafety** (REPORTED: 2026-06-18, CLOSED: 2026-06-21)
   - URL: [Issue #4408](https://github.com/HKUDS/nanobot/issues/4408)
   - *Severity: High* — Shared `_extra_hooks` mutating during concurrent `Nanobot.run()` calls leads to indeterminate hook behavior. **Closed**, fix presumed merged.

### Medium Severity

- **#4420 — Redundant `tiktoken` encoding in `estimate_prompt_tokens`** (CLOSED)
  - *Perf issue:* Tools are re-encoded on every call, causing unnecessary CPU overhead. A caching layer is needed.

### Fix Status Summary
- **All three high-severity bugs (MCP bypass, duplicate IDs, concurrency) have immediate fix PRs.** The maintainer team shows strong triage discipline.

## Feature Requests & Roadmap Signals

### Likely Next-Version Features (based on merged PRs and engagement)

1. **Telegram Rich Messages (BOT API 10.1)**
   - Issue #4413 (open, 6/19) requests `sendRichMessage` native support
   - Issue #4422 (closed, 6/20) adds `sendRichMessage` + table/tasklist/math support
   - **Prediction: Will land in v0.2.1.** The closed PR suggests implementation is complete.

2. **Read-only `search_history` tool**
   - Issue #4440 (open, 6/21) + PR #4439 (open)
   - Allows the agent to query `memory/history.jsonl` without loading into context window.
   - **Prediction: Strong candidate for next release.** Code review pending.

3. **Heartbeat enhancements**
   - Issue #4431 — heartbeat-specific model override (separate cheap/fast model)
   - PR #4437 — heartbeat trigger command (`nanobot heartbeat trigger`)
   - **Prediction: Feature-making progress.** Two complementary components under review.

4. **Cron job silent mode + locked recipients**
   - PR #4225 (open, 6/6) — `silent` mode suppresses routine notifications; `lock_recipient` fixes delivery channel.
   - **Prediction: Likely next version.** Mature PR with clear use case.

### Lower Probability / Exploration Phase

- **Weather skill** (PR #4145, open, 6/1)
- **WebUI skill activation** (PR #4284, open, 6/10)
- **Read-only session flag** (PR #4271, open, 6/10)

## User Feedback Summary

### Pain Points (Explicit)

1. **Streaming instability with Anthropic** — "every request in that session is rejected by the API and the agent silently stops replying" (#4442). **High frustration**, as the failure is silent.
2. **MCP security configuration ineffective** — "a deny-all or restrictive `enabledTools` config to leak resources" (#4435). **Trust erosion** for users relying on MCP sandboxing.
3. **Concurrent hook clobbering** — per-run hooks unsafe under load (#4408). **Reliability concern** for multi-agent/sharded deployments.
4. **Slow token estimation** — redundancy in `estimate_prompt_tokens` (#4420). **Perf pain** for latency-sensitive users.

### Satisfaction Signals

- **Rapid bug fixes:** Multiple high-severity bugs (MCP, concurrency, stream) received fix PRs within hours or same-day.
- **Feature responsiveness:** Telegram `sendRichMessage` was requested (#4413) and implemented as a closed PR (#4422) within 2 days.
- **Thoughtful design:** PR #4225 (cron silent mode) reflects deep understanding of real-world cron deployment patterns (background monitoring vs. reminders).

### Use Cases Revealed

- Background monitoring bots that should only notify on exceptions (cron silent mode)
- Multi-channel deployment (Telegram rich formatting, Mattermost request)
- Conversation archival for long-running agents (search history tool)
- Sidebar information panels (read-only sessions for Cloud Demo/Squad)

## Backlog Watch

### Unanswered Issues & Stale PRs Needing Attention

1. **#1011 — Mattermost Bot** (Created: 2026-02-22, Updated: 2026-06-21)
   - URL: [Issue #1011](https://github.com/HKUDS/nanobot/issues/1011)
   - *Age: 4 months.* 4 👍 but no maintainer response. This is the longest-standing open feature request. If accepted, would serve users avoiding Discord/Telegram/Slack for privacy reasons.

2. **#3869 — [question] DeepSeek message hardening** (Created: 2026-05-16, Updated: 2026-06-21)
   - URL: [PR #3869](https://github.com/HKUDS/nanobot/pull/3869)
   - *Age: 36 days.* Addresses null content 400 errors, "(empty)" placeholder leakage, and content discard. Has zero comments. DeepSeek is a popular cost-effective provider; this PR may be languishing.

3. **#4092 — fix openai-compatible tool call parsing** (Created: 2026-05-29, Updated: 2026-06-21)
   - URL: [PR #4092](https://github.com/HKUDS/nanobot/pull/4092)
   - *Age: 23 days.* Fixes two issues (#4059, #4061). No maintainer comments. OpenAI-compatible providers are a large user base.

4. **#4145 — Weather Skill** (Created: 2026-06-01, Updated: 2026-06-21)
   - URL: [PR #4145](https://github.com/HKUDS/nanobot/pull/4145)
   - *Age: 21 days.* Multi-file contribution including documentation and tests. No maintainer feedback.

### Risk Note
The surge in activity (34 PRs, 10 issues) may indicate maintainers are overwhelmed. The backlog of unanswered PRs (#3869, #4092, #4145) combined with rapid-fire bug fixes suggests a **triage bottleneck on non-critical contributions**. The community is contributing significant quality work (tests, docs, new features) that risks demoralization without acknowledgment.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-22

## Today's Overview

Hermes Agent is in a period of **high community engagement and moderate maintenance velocity**, with 50 issues and 50 PRs updated in the last 24 hours. The project closure rate is healthy — **70% of PRs (35/50) and 48% of issues (24/50) were closed or merged**, indicating active triage. A major external dependency event — the **Google Gemini CLI sunset on June 18** — continues to dominate community attention, with multiple duplicate issues and PRs filed. The project also shows sustained momentum on **self-hosted infrastructure support**, with numerous mem0-related PRs converging on a single solution. No new releases were published today, but the codebase saw significant bugfix and feature PRs merged.

## Releases

No new releases were published in the last 24 hours. The most recent tagged version remains `v2026.4.3` referenced in Issue #8919. Users awaiting the AntiGravity CLI provider and other critical fixes may need to track commits on the `main` branch until a release is cut.

## Project Progress

**35 PRs were merged/closed today** across multiple areas of the codebase. Notable progress includes:

- **Self-hosted mem0 support (converged effort):** PRs #13377, #49623, #9488, #20185, #31209, #30902, #27200, #21601, #50479 were all closed or merged today, representing a coordinated push to allow self-hosted Mem0 instances via `MEM0_HOST` env var and `mem0.json` configuration. This was the most active PR cluster.
- **Browser daemon stability:** PR #15008 (`f/tools/browser: escalate SIGTERM→SIGKILL + periodic orphan reap`) was merged, addressing zombie browser processes.
- **Tool execution hygiene:** PR #50468 merged PID re-validation logic across three kill paths to prevent accidental process SIGTERM due to PID recycling (#43846).
- **WhatsApp bridge fix:** PR #50468 also includes WhatsApp port cleanup that only kills LISTENers, fixing a crash vector.
- **Gateway resilience:** Multiple sweeper-implemented-on-main PRs closed for issues #39706 (`hermes update` crash), #49609 (Desktop UI freeze on update), #48234 (Gateway exits on cron IndexError), and #37621 (model switch via `/model` failed to apply).

## Community Hot Topics

| Issue/PR | Comments | Reactions | Key Theme |
|----------|----------|-----------|-----------|
| [#45500](https://github.com/nousresearch/hermes-agent/issues/45500) Matrix E2EE bypass | 6 | 0 | **Security:** Text messages skip E2EE encryption |
| [#29294](https://github.com/nousresearch/hermes-agent/issues/29294) Gemini CLI sunset | 3 | **8 👍** | **Urgent migration:** Provider deprecation |
| [#44943](https://github.com/nousresearch/hermes-agent/issues/44943) AntiGravity support | 1 | **5 👍** | **Provider replacement** for Gemini CLI |
| [#39706](https://github.com/nousresearch/hermes-agent/issues/39706) `hermes update` crash | 3 | **4 👍** | **Critical bug:** Update mechanism broken |
| [#8950](https://github.com/nousresearch/hermes-agent/issues/8950) Missing messaging channels | 5 | **2 👍** | **Feature expansion:** IRC, LINE, QQBot, etc. |
| [#14327](https://github.com/nousresearch/hermes-agent/issues/14327) Per-platform model config | 4 | **2 👍** | **Configuration granularity** |

**Underlying needs analysis:**
- **Provider fragmentation risk:** The Gemini CLI sunset has generated multiple duplicate issues (#29294, #49701, #49705, #44943, #50338) and is the highest-reaction topic. The community urgently needs **AntiGravity CLI** support as a drop-in replacement.
- **Self-hosted infrastructure demand:** The mem0 PR cluster (9 PRs) shows strong demand for **running Hermes without cloud dependencies**, with users wanting local vector stores and LLMs.
- **Matrix E2EE gap:** Issue #45500 reveals a **security inconsistency** — files are encrypted but text is not — which undermines trust for enterprise/private deployments.

## Bugs & Stability

**High-severity bugs reported today:**

| Issue | Severity | Description | Fix PR Exists? |
|-------|----------|-------------|----------------|
| [#50169](https://github.com/nousresearch/hermes-agent/issues/50169) | **P2** | MCP stdio server child processes accumulate as zombies (40+ after 24h) | No |
| [#50449](https://github.com/nousresearch/hermes-agent/issues/50449) | **P2** | Desktop "Thinking" toggle snaps back on; config writes stranded top-level key | No |
| [#50438](https://github.com/nousresearch/hermes-agent/issues/50438) | **P2** | TUI sessions don't record cwd — Desktop groups them under default workspace | No |
| [#50090](https://github.com/nousresearch/hermes-agent/issues/50090) | **P1** | Windows bootstrap-installer kills Gateway without respawning (Telegram bot dies) | No |
| [#50480](https://github.com/nousresearch/hermes-agent/issues/50480) | **P2** | Stale `reasoning_content` causes 400/422 on fallback to strict providers | **PR #50480 open** |
| [#50483](https://github.com/nousresearch/hermes-agent/issues/50483) | P3 | HTTP 400 on DeepSeek/Anthropic after keyboard interrupt leaves orphaned tool_calls | **PR #50483 open** |

**Stability improvements from today:** The merged PR #15008 (browser orphan reaper) and #50468 (PID re-validation) reduce risk of resource leaks and cross-process signal accidents. The MCP circuit breaker (#50482) is open for review and would stop the "restart storm" caused by single failing MCP servers.

## Feature Requests & Roadmap Signals

**Most requested features from today's issues:**

1. **AntiGravity CLI support** (#44943, #50338) — **Urgent replacement** for the dead Gemini CLI provider. With 8+ upvotes across related issues, this is the top community demand.
2. **Self-hosted mem0 finalized** — 9 PRs today suggest this will land soon; the convergence on `MEM0_HOST` / `MEM0_BACKEND=local_rest` indicates imminent roadmapping.
3. **Per-platform model configuration** (#14327, 2 👍) — Demand for granular model assignments per messaging platform.
4. **Dynamic thinking ON/OFF** (#50240, #50293) — Two issues from the same author proposing a model self-detection mechanism to toggle reasoning per task.
5. **Runtime-enforced skills verification** (#44637) — Users want deterministic enforcement of Skills' `Verification` sections beyond prompt-level guidance.
6. **Missing messaging channels** (#8950) — IRC, LINE, QQBot, Twitch, Nostr, Google Chat still absent.

**Prediction for next version:** AntiGravity CLI support will likely be the headline feature, followed by the mem0 self-hosting suite of PRs. The desktop app's TUI session workspace issue (#50438) may also be addressed to improve the Desktop ↔ TUI integration.

## User Feedback Summary

**Pain points:**
- **Provider breakage anxiety:** Multiple users expressed frustration when Gemini CLI died without clear migration path, with comments like "completely non-functional" and "urgently need this integration."
- **Update mechanism fragility:** The `hermes update` crash (#39706) and Windows Gateway kill without respawn (#50090) undermine trust in the self-update process. One user called it "a confusing 'dead window' state."
- **Desktop app reliability:** Two reports today of UI freezes (#49609) and toggle state bugs (#50449) suggest the Electron desktop app needs hardening.

**Satisfaction signals:**
- The rapid handling of the browser orphan reaper (#14073 → PR #15008 merged) shows maintainers take security issues seriously.
- The coordinated mem0 PR merge suggests the team responds to self-hosting demand — users wanting "full control" are seeing their contributions accepted.
- Internationalization progress (PR #49339, Chinese dashboard translation) is a positive signal for the global user base.

**Use case confusion:** Issue #41180 ("Desktop app risks shifting Hermes from power-user harness to watered-down GUI") reflects concern that the Desktop feature may dilute Hermes's power-user DNA — this needs maintainer decision.

## Backlog Watch

**Issues/PRs needing maintainer attention:**

| Item | Age | Last Updated | Reason for Concern |
|------|-----|--------------|---------------------|
| [#8950](https://github.com/nousresearch/hermes-agent/issues/8950) Messaging channels | **70 days** | 2026-06-21 | 5 comments, 2 👍, no maintainer response on adding 7 requested channels |
| [#14327](https://github.com/nousresearch/hermes-agent/issues/14327) Per-platform model config | **60 days** | 2026-06-21 | 4 comments, 2 👍, open since April — detailed use case with no decision |
| [#41180](https://github.com/nousresearch/hermes-agent/issues/41180) Desktop app strategic risk | **15 days** | 2026-06-22 | Needs maintainer decision; could shape product direction |
| [#47759](https://github.com/nousresearch/hermes-agent/issues/47759) Matrix E2EE Windows install | **5 days** | 2026-06-21 | `needs-repro` — user attempted setup but got no guidance |
| [#50111](https://github.com/nousresearch/hermes-agent/pull/50111) Deferred residual-line patch-set | **1 day** | 2026-06-22 | Draft PR marked "NOT FOR MERGE" — unclear whether this is a community process or meta-tracker |

**White whale issue:** [#45500](https://github.com/nousresearch/hermes-agent/issues/45500) Matrix E2EE bypass — a **P1 security issue** that remains open after 9 days without a maintainer assignment or fix PR. Text messages in encrypted Matrix rooms are sent unencrypted while files are encrypted. This is a **compliance/trust issue** for any organization relying on Hermes + Matrix for private communication.

---

*Data sourced from GitHub API for NousResearch/hermes-agent, covering activity ending 2026-06-22 23:59 UTC.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-22

## Today's Overview
Project activity is moderate but concentrated around bug triage and dependency maintenance. Five issues were updated, with three remaining open and focusing on user-facing problems (token consumption, Safari compatibility, and a new feature request for alternative messengers). Only one PR was closed today, a stale configuration fix, while three remain open including a new feature PR improving skill search UX. A new nightly build was published, marking steady pre-release momentum toward v0.3.0, though the project shows signs of accumulating stale items that may need maintainer attention.

## Releases
**Nightly Build (v0.3.0-nightly.20260621.287853ab)**
- Published as an automated nightly; considered potentially unstable
- No breaking changes or migration notes documented
- Full changelog available at: https://github.com/sipeed/picoclaw/compare/v0.3.0...main

## Project Progress
One PR was **closed today** (merged):
- **PR #2565** (closed/merged) – `[type: bug, domain: channel, domain: config, stale]` fix(config): preserve explicit `mention_only=false` in `GroupTriggerConfig`. This fix addresses a subtle Go serialization issue where `omitempty` caused the `false` value of `MentionOnly` to be dropped, reverting user intent to defaults. Important for Matrix and group channel reliability.

Three open PRs remain active:
- **PR #3152** (new, open) – Adds installation instructions to `picoclaw skills search` output, improving discoverability of skill installation flows.
- **PR #3103** – Dependency bump: typescript-eslint 8.59.3 → 8.61.0 (frontend)
- **PR #3105** – Dependency bump: eslint 10.2.1 → 10.4.1 (frontend)

## Community Hot Topics
1. **Issue #3012 – [BUG] Continuous token consumption every minute with evolution enabled** (5 comments, updated 2026-06-21)
   - Most commented issue; user reports persistent token drain when Evolution feature is active in Draft mode. Environment: v0.2.9, MiniMax provider, FreeBSD. No fix PR identified. This is likely the highest-priority unresolved bug due to direct cost impact on users.
   - https://github.com/sipeed/picoclaw/issues/3012

2. **Issue #3093 – [Feature] Request for SimpleX or Tox gateway** (2 comments, 1 👍)
   - User requesting alternative decentralized messaging protocol gateways. Signal that some users want less centralized or more privacy-focused channel backends.
   - https://github.com/sipeed/picoclaw/issues/3093

3. **Issue #3090 – [BUG] Panel broken on Safari iOS <16.4** (2 comments)
   - Web panel compatibility issue affecting older iOS devices. User on Raspberry Pi OS reports login failure. Possible frontend rendering regression.
   - https://github.com/sipeed/picoclaw/issues/3090

## Bugs & Stability
**High Severity**
- **Issue #3012** – Continuous token consumption every minute when Evolution enabled. No fix PR in sight. Cost-impacting bug; maintainers should prioritize investigation. Possibly related to polling loop or draft message generation.

**Medium Severity**
- **Issue #3090** – Panel does not work on Safari iOS <16.4. Affects mobile users on older Apple devices. No fix PR identified.

**Fixed Today**
- **PR #2565** – `mention_only=false` config preservation bug closed and merged. Fixes silent misconfiguration in group channels.

**No crash bugs or regressions reported today.**

## Feature Requests & Roadmap Signals
- **SimpleX / Tox / Wire gateway support** (#3093) – User wants alternative decentralized message transport beyond Matrix/Telegram. Given PicoClaw’s multi-channel architecture, adding new gateway plugins is plausible, but no maintainer response yet. Unlikely for v0.3.0 unless already in development.
- **Installation instructions in skill search** (PR #3152) – Likely to land soon; a straightforward UX enhancement with low implementation cost.
- **Evolution feature improvements** – The token consumption bug in #3012 suggests the Evolution feature is seeing real-world use but needs optimization (e.g., debouncing, rate-limiting, or smarter triggers). Could prompt a v0.3.0 stability patch.

## User Feedback Summary
- **Pain point:** Token waste with Evolution (Issue #3012). Users adopting the Draft/AI-assisted mode experience unexpected costs. One user on FreeBSD reported this as continuous token drainage.
- **Frustration:** Safari iOS compatibility (Issue #3090). Users on older iOS devices cannot access the web panel, suggesting the panel may rely on modern CSS/JS features not polyfilled.
- **Desire for freedom:** Request for SimpleX/Tox (Issue #3093) indicates a segment of users prioritizes decentralized, server-independent communication channels.
- **Satisfaction signal:** Users are actively filing config bugs (PR #2565) and expecting defaults to work correctly; indicates a user base that configures PicoClaw extensively and relies on accurate settings persistence.

## Backlog Watch
- **Issue #3012** – Continuous token consumption (updated 2026-06-21). No fix PR. High priority due to cost impact. Needs maintainer investigation.
- **Issue #3090** – Safari iOS <16.4 (updated 2026-06-21). No fix PR. Moderate priority; affects mobile accessibility.
- **Issue #3041** – `mcp add` mis-parses flags (closed stale, but fix not yet in a released version). Users awaiting official v0.3.0 for this fix.
- **Issue #3103, #3105** – Dependabot PRs stale for 11 days. Low risk, but should be merged to keep CI green.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-22

## Today's Overview
NanoClaw saw moderate activity today with 2 new security vulnerability reports filed, 3 PRs merged/closed, and 3 new open PRs. No new releases were published. The project shows signs of active maintenance: security issues are being disclosed publicly via coordinated advisories, and infrastructure fixes (socket timing, dead service reaping) are moving through the review pipeline. The overall health is solid but warrants user attention to the *two medium-severity security advisories* published in the last 24 hours.

## Releases
No new releases today.

## Project Progress
Three pull requests were merged or closed in the last 24 hours:

- **[PR #2825]** `fix(setup): wait for the host socket before failing the first chat` — Merged. Fixes a race condition where the setup wizard's "first chat" step would fail because the host CLI socket had not yet bound when `service` reported "success." This directly improves onboarding reliability for new users.

- **[PR #2829]** `[follows-guidelines] eee` — Closed (likely test or accidental). Appears to be a placeholder/template PR with minimal content. No functional change.

- **[PR #2168]** `fix(container): pin host.docker.internal to OneCLI's bridge IP in rootless Docker` — Merged. Fixes `host.docker.internal` resolution for agent containers running under rootless Docker by pinning to OneCLI's actual bridge IP at spawn time. Users of rootless Docker who experienced cross-container connectivity issues should see improvements.

## Community Hot Topics
- **[Issue #2828]** [Security] *A2A attachment forwarding follows a symlinked inbox and writes outside the target session root* — 0 comments, 0 reactions. A prompt-injection vector where a compromised target agent can symlink its `inbox/` directory to an arbitrary path, causing file writes to escape the intended session root. Core vulnerability with implications for multi-agent trust.

- **[Issue #2827]** [Security] *`add_mcp_server` approval flow hides runtime `args` and `env`, enabling approval smuggling* — 0 comments, 0 reactions. An approval-flow bypass where the UI card for adding an MCP server only shows name and base URL, while `args` and `env` values (which could include malicious commands) remain hidden from the human approver.

*Neither issue has attracted community discussion yet, likely due to their recent publication (~24h ago). The security release cadence suggests these may have been pre-disclosed to maintainers.*

## Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **High** | [#2828] | A2A attachment forwarding symlink escape – writes outside session root | No fix PR yet |
| **High** | [#2827] | MCP server approval smuggling – hidden args/env bypass user consent | No fix PR yet |
| Medium | [PR #2830] (open) | Dead peer service registrations (launchd/systemd) accumulate when checkouts are deleted without uninstalling | Open |
| Low | [PR #2826] (open) | Skill update flow framed as optional, causing missed upstream fixes for channel/provider code | Open |

**Assessment:** The two *High* severity issues require immediate attention as they involve file-system boundaries and user-approval bypass. No fix PRs exist yet for either. The dead service registration fix ([PR #2830]) is a solid operational improvement.

## Feature Requests & Roadmap Signals
- **[PR #2795]** `feat: add /add-clidash — read-only CLI-derived dashboard skill` — Utility skill that provides a terminal-derived dashboard. Likely a community contribution; awaiting review.
- **[PR #2826]** `fix(update-skills): nudge into skill updates, rebuild container on re-apply` — If approved, this would make skill updates non-optional during host updates and add container rebuild logic on re-apply. Signals a push toward better update hygiene.
- **[PR #2830]** `fix(setup): reap dead peer service registrations` — Addresses a growing operational tech debt: stale launchd/systemd entries breaking service discovery.

**Prediction for next version:** The `update-skills` nudge behavior ([PR #2826]) and dead-registration cleanup ([PR #2830]) are likely candidates for the next minor release, alongside fixes for the two security issues.

## User Feedback Summary
While no explicit user feedback was filed today, the following signals emerge:

- **Pain point:** New users experiencing "first chat" failures due to socket timing ([PR #2825]) — now fixed.
- **Pain point:** Rootless Docker users with agent connectivity issues ([PR #2168]) — now fixed with bridge IP pinning.
- **Pain point:** Stale service registrations from incomplete uninstalls ([PR #2830]) — fix proposed but not yet merged.
- **Security concern:** Two impactful privilege-escalation vectors disclosed ([#2828], [#2827]) — no fix available yet.

Overall, the community appears to be reliability-focused (onboarding, Docker networking, service hygiene) and security-conscious.

## Backlog Watch
None of the open PRs or issues have been unanswered for more than 24 hours. No long-neglected items were detected in today's data.

---

*Generated from NanoClaw GitHub data — all links: [NanoClaw](https://github.com/nanocoai/nanoclaw)*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Based on the GitHub data provided for NullClaw (github.com/nullclaw/nullclaw) on 2026-06-22, here is the project digest.

---

### NullClaw Project Digest — 2026-06-22

**1. Today's Overview**
The project is currently in a low-activity state. In the last 24 hours, there were zero merged pull requests (PRs) and no new releases. Activity is limited to a single open bug issue, indicating a period of maintenance rather than active feature development. The primary project health concern is a critical, high-frequency runtime error affecting Windows users, which represents the sole community interaction point today.

**2. Releases**
No new releases were published in the last 24 hours.

**3. Project Progress**
There were no merged or closed pull requests today. No new features, fixes, or code changes have been integrated into the main branch.

**4. Community Hot Topics**
The only active discussion revolves around a significant bug. The issue has generated 1 comment, indicating direct user engagement.
- **Issue #967: [bug] error: NoResponseContent**
  - **Summary:** A user reports a critical runtime error on Windows 11 using the latest stable release (v2026.5.29). The error `NoResponseContent` occurs when using the `nullclaw agent` command with the `Agnes-2.0-Flash` model.
  - **Analysis:** The underlying need is stability. The user explicitly notes the same model and API key work in another client (Pico), pointing to a specific NullClaw integration bug rather than a provider-side issue.
  - **Link:** [nullclaw/nullclaw Issue #967](https://github.com/nullclaw/nullclaw/issues/967)

**5. Bugs & Stability**
One new stability bug was reported.
- **High Severity: `NoResponseContent` Error (Issue #967)**
  - **Description:** A high-frequency crash (>50% of conversations) on Windows 11. The error occurs after a 27-second response time and yields zero response content. The user experienced this 12 times out of 21 conversations.
  - **Reproduction:** Running `>nullclaw agent -m "你好！"` triggers the error. The model used is `Agnes-2.0-Flash`.
  - **Status:** No linked fix PR exists. The bug is acknowledged as open and is currently the most urgent item in the tracker.
  - **Link:** [nullclaw/nullclaw Issue #967](https://github.com/nullclaw/nullclaw/issues/967)

**6. Feature Requests & Roadmap Signals**
There are no new feature requests in the last 24 hours. The community focus is entirely on resolving the existing stability bug.

**7. User Feedback Summary**
- **Pain Point:** A significant portion of user conversations are failing due to a `NoResponseContent` error, rendering the agent command unusable for the reporter.
- **Use Case:** The user is attempting a standard conversational interaction ("你好！"), indicating a basic functionality failure.
- **Satisfaction:** **Very Low for the affected user.** The user expressed frustration by noting the same setup works in a competing tool (Pico), which implicitly signals dissatisfaction with NullClaw's reliability for this specific model on Windows.

**8. Backlog Watch**
There are no long-unanswered issues or PRs currently identified in the last 24 hours’ data. The sole open issue has been updated recently (2026-06-21) and is unlikely to be "backlogged" yet. However, maintainer attention is critically needed on **Issue #967** to address the regression and prevent further user churn.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the IronClaw project digest for **2026-06-22**.

---

## IronClaw Project Digest – 2026-06-22

### 1. Today's Overview
Project activity is **very high**, driven primarily by core maintainers and automated dependency bots. While there were no new releases, the team merged or closed **14 Pull Requests** in the past 24 hours, signaling a strong push toward stabilization and onboarding of new infrastructure. The majority of activity focuses on the "Reborn" runtime (concurrent turn execution, CI caching fixes) and broad dependency upgrades across the Rust ecosystem. Despite the high throughput, a long-running **Nightly E2E failure** (#4108) remains unresolved, indicating ongoing CI stability challenges.

### 2. Releases
**None.** No new versions were cut in the last 24 hours.

### 3. Project Progress
Fourteen PRs were merged or closed today. Key advances include:

- **Reborn Runtime Performance:** PR #5085 was merged, introducing a `TurnRunScheduler` for concurrent turn execution with per-user/per-type caps, replacing the old serial runner. This is expected to significantly improve throughput for multi-turn conversations.
- **CI Stability & Caching:** PR #5118 fixed a critical cache eviction issue by sharing a single Rust cache across the entire 64-crate closure build matrix, reducing cache bloat and flaky re-downloads.
- **CI Network Resilience:** PR #5115 added `CARGO_NET_RETRY` to handle transient crates.io failures during parallel builds.
- **Workflow Extraction:** PR #5113 extracted cross-cutting platform jobs into a dedicated `platform-and-compat.yml` workflow, improving CI organization.
- **MCP Credential Fix:** PR #4990 centralized NEAR AI MCP credential projection, fixing broken onboarding flows for browser-managed extensions.
- **One-Shot Triggers:** PR #5065 merged, adding a `TriggerSchedule::Once{at}` variant for fire-once scheduled triggers alongside recurring Cron.
- **Dependency Updates:** Major ecosystem bumps were merged: `everything-else` group (43 updates, PR #4876) and `tokio-ecosystem` group (3 updates, PR #4499), including upgrades to `agent-client-protocol` (0.10.4 → 0.14.0) and `hyper`.

### 4. Community Hot Topics
The most active discussions center on major infrastructure PRs. Key items include:

- **Reflection Service (Reborn Learning System):** PR #4975 (WS-3) introduces a turn-completed background reflection service that turns failures into learning documents. This is the third PR in a stacked learning system series (WS-1 #4937, WS-2 #4938), representing a major push toward self-improving agents.
- **Hosted Single-Tenant Postgres Profile:** PR #5081 proposes adding a `hosted-single-tenant` profile for Reborn, enabling a narrow hosted preview path with PostgreSQL-backed durable state. This signals a move toward production-tier deployments.
- **Composio Connector Route:** PR #5109 (new contributor @abbyshekit) adds read-only and gated-write connector routes for the Workbench, aiming to populate the Desktop UI with live connected account data.

**Underlying need:** The community (core team and new contributors) is aggressively building out the Reborn runtime with production-grade features: concurrent execution, durable state, external integrations (Composio), and a learning-from-mistakes system.

### 5. Bugs & Stability
| Issue | Severity | Status | Summary |
|---|---|---|---|
| #4108 | **High** | Open (since 2026-05-27) | **Nightly E2E failing** on the `E2E (extensions)` job. No fix PR exists. Root cause unknown. |
| #5071 | **High** | Closed (fixed) | **Google OAuth token expiry** bug. Proactive refresh before expiry implemented in Reborn. |

**Ranking:** The ongoing Nightly E2E failure (#4108) is the most severe unresolved stability issue, as it blocks full CI confidence for extension-related changes.

### 6. Feature Requests & Roadmap Signals
- **Automations Summary Card:** Issue #5117 requests a "Completed" summary card and count for automations, pairing with the recently shipped filter tab. This is a **high-confidence item for the next release**, as the author (@henrypark133) has already merged the companion filter feature (PR #5065).
- **Workbench Integration:** PR #5109's Composio connector indicates the team is actively wiring the Desktop Workbench with live data sources. Expect this to be part of the next minor release.
- **Learning System:** The stacked PRs #4937 (WS-1), #4938 (WS-2), and #4975 (WS-3) are the largest pending feature set. Given core contributors are authoring these, they are likely targeted for the **next major release** (potentially Reborn v1.0 or equivalent).

### 7. User Feedback Summary
- **Pain Points:** The E2E test failure (#4108) likely impacts developer confidence. CI users experienced chronic "red runs" due to cache eviction and network flakes (addressed by PRs #5118 and #5115).
- **Use Cases:** The one-shot trigger feature (PR #5065) directly addresses a common scheduling use case for "run once and forget" automations. The OAuth token refresh fix (PR #5071) addresses a real friction point for Reborn users who frequently lost access to Google services.
- **Satisfaction:** No direct user satisfaction indicators (reactions, comments) were captured for the 3 issues updated today, indicating low community engagement on those specific threads.

### 8. Backlog Watch
- **Issue #4108 – Nightly E2E Failed:** This is the **oldest critical bug**, open since May 27, 2026. Despite being automatically generated by a bot, the lack of a fix PR or root cause discussion is concerning. It is a blocker for reliable extension testing.
- **PR #4002 – Dependencies Bump (Actions Group):** Open since May 24, 2026, this massive 16-update PR from dependabot has received no review comments or merge attempts. Stale dependency updates on CI actions can lead to unexpected failures or security gaps.
- **PR #2927 – Channel Activation Fix:** Closed today after being open since April 24, 2026. This XL-sized PR fixed a critical first-run fallback bug for WASM channels. Its long gestation (57 days) suggests the project has a bottleneck in reviewing large, cross-cutting patches.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for June 22, 2026.

---

## LobsterAI Project Digest — 2026-06-22

### 1. Today's Overview
The project shows **low activity** in the last 24 hours, with no new Pull Requests (PRs) or releases reported. However, the issue tracker saw a significant cleanup: **14 out of 15 updated issues were closed**, many of which were marked as stale. The only open issue (#2181) is a **critical security advisory**, representing the most pressing item for maintainers. While the "stale" closing suggests a backlog grooming cycle, the lack of new code contributions or feature merges indicates a potential pause in feature development, either for maintenance or strategic planning. The project's health is stable but currently reactive, focusing on security and technical debt over new features.

### 2. Releases
**No new releases were published today.**

### 3. Project Progress
- **Merged/Closed PRs:** 0 new PRs were created or merged in the last 24 hours.
- **Feature/Fix Advancement:** No features or fixes were actively advanced via code changes today.

### 4. Community Hot Topics
Despite no new PRs, the community's attention is focused on two critical areas:

- **Open Issue #2181 (Security):** [LobsterAI restores private-network browser access by default and weakens the bundled OpenClaw SSRF guard](https://github.com/netease-youdao/LobsterAI/issues/2181)
    - **Comments:** 0 | **Reactions:** 0
    - **Analysis:** This is the only open and active issue. While it has no comments yet, its content is highly significant. It reports a regression where the default browser settings (`ProxyCompatible` mode) bypass a bundled SSRF (Server-Side Request Forgery) protection layer from OpenClaw. This could allow an attacker to access internal network resources through the AI's browser, posing a major security risk. This is the top community need: a fix to restore the SSRF guard.

- **Closed Issue #1509 (UX/Model Understanding):** [skills文件长时间生成阻塞无法感知...](https://github.com/netease-youdao/LobsterAI/issues/1509)
    - **Comments:** 3 | **Reactions:** 0
    - **Analysis:** Although closed as stale, this issue reflects a deep user pain point: the "skill creation" process is a black box. The user cannot see intermediate thinking states, cannot tell if the system is working or stuck, and the model's ability to understand complex requests varies even when compared to the bundled OpenClaw. This highlights a need for better process transparency and more sophisticated prompt engineering.

### 5. Bugs & Stability
The following bugs were reported and subsequently closed (likely due to inactivity), but their severity is notable:

- **[CRITICAL] Issue #2181 (Security SSRF Regression):** Restores private-network browser access by default. This is an active, unaddressed vulnerability that could lead to data breaches or internal network scanning. **No fix PR exists yet.**
- **[HIGH] Issue #1516 (OAuth Token Loss):** [Closing Settings panel during GitHub Copilot OAuth causes Token to be silently lost](https://github.com/netease-youdao/LobsterAI/issues/1516). The polling process continues in the background after the UI is closed, leading to Token write failure. A race condition in UI lifecycle management.
- **[HIGH] Issue #1500 (Skill State Desync):** [Disabled skills remain in `activeSkillIds`](https://github.com/netease-youdao/LobsterAI/issues/1500). A state management bug in `skillSlice.ts` causes disabled skills to still be injected into prompts, wasting context window and potentially causing unexpected behavior.
- **[MEDIUM] Issue #1502 (Settings Sync):** [Agent skills not saving until Agent is switched](https://github.com/netease-youdao/LobsterAI/issues/1502). Another state synchronization bug between `activeSkillIds` and the Agent settings panel.
- **[MEDIUM] Issue #1504 / #1506 (IM Bot Validation):** [Missing form validation for AES Key](https://github.com/netease-youdao/LobsterAI/issues/1504) and [empty notification channels](https://github.com/netease-youdao/LobsterAI/issues/1506). These allow users to create non-functional IM bot configurations.

### 6. Feature Requests & Roadmap Signals
Several closed issues point toward a future roadmap focused on **information management and user productivity**:

- **Tagging & Filtering (Issue #1541):** [Sessions need tag classification and filtering](https://github.com/netease-youdao/LobsterAI/issues/1541).
- **Session Color Coding (Issue #1525):** [Visual color differentiation for sessions](https://github.com/netease-youdao/LobsterAI/issues/1525).
- **Message Bookmarks (Issue #1537):** [Mark/Bookmark important AI replies in long conversations](https://github.com/netease-youdao/LobsterAI/issues/1537).
- **Batch Export (Issue #1528):** [Export multiple sessions in batch mode](https://github.com/netease-youdao/LobsterAI/issues/1528).
- **Local Usage Statistics (Issue #1532):** [A dashboard showing session/message counts](https://github.com/netease-youdao/LobsterAI/issues/1532).

**Prediction:** These features align around a "power-user/workflow" update. A future release (likely v1.1 or v2.0) will likely introduce a **tag/session organization system** that integrates color-coding, bookmarking, and filtering. This is the clearest roadmap signal from the backlog.

### 7. User Feedback Summary
- **Pain Points (Negative):**
    - **Process Opacity:** Users are frustrated when LobsterAI is performing a long task (e.g., generating skills) without showing progress or intermediate steps. They feel "locked out" and cannot tell if the system is working or broken (Issue #1509).
    - **Inconsistent Model Behavior:** Users report that the same model prompt works well in OpenClaw but fails or is misinterpreted in LobsterAI, suggesting a difference in how the context or system prompt is constructed (Issue #1509).
    - **Silent Failures:** Multiple bugs cause silent failures—tasks appear to be created but don't work (e.g., IM notifications, OAuth authentication, disabled skills). This severely erodes user trust (Issues #1506, #1516, #1500).

- **Desires (Positive/Neutral):**
    - Users want **better data management** (tags, colors, bookmarks, batch export).
    - Users need **personal analytics** to understand their own usage patterns.

### 8. Backlog Watch
- **[CRITICAL - Maintainer Attention Required] Issue #2181 (Security):** [SSRF guard weakened](https://github.com/netease-youdao/LobsterAI/issues/2181). This is the only active issue and is a security vulnerability. It demands an immediate response: either revert the change or patch the protection layer.
- **[Stale - Low Engagement] All other 14 issues** were closed as stale. While they contain valuable feedback on UX and bugs, the maintainers are clearly struggling to keep up with the volume of reports. The community may expect a statement or a "bugs we know about" section in the release notes.
- **No long-unanswered high-priority issues** exist outside of the security advisory.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-22

## 1. Today's Overview

CoPaw continues to show strong, sustained community engagement with **16 issues** and **32 pull requests** updated in the last 24 hours, indicating a highly active development cycle. Activity is concentrated on two major themes: **mobile responsiveness improvements** and **stabilization of core features** following the v1.1.12 release. Notably, six first-time contributors submitted PRs today, signaling healthy new contributor onboarding. The maintainer team is actively reviewing and iterating on community contributions, with multiple PRs referencing and enhancing each other. The absence of new releases suggests the project is in a consolidation phase, prioritizing bug fixes and UX improvements before the next version.

## 2. Releases

**No new releases today.** The latest available version remains **v1.1.12 (and v1.1.12.post1)**, which introduced a message sending queue feature but also triggered several regressions (see Bugs & Stability section below).

## 3. Project Progress

**Merged/Closed PRs today:** **2** PRs were closed/merged:

- **#5359** — *(Closed)* `feat(console): enhance PR #5350 with marquee and centered menu` — Enhancement to the Chat header mobile responsiveness, adding pull-to-refresh behavior and centered dropdown menus for compact mode.
- **#5365** — *(Closed)* `feat(console): mobile responsive layout for Agent Config page` — Adds responsive CSS for agent configuration tabs on narrow viewports.

**Features advanced but still open:**
- **Slack channel support (#5193)** with Socket Mode and streaming — substantial feature still under review after a week, indicating thorough testing.
- **Scroll context manager (#5321)** — a new retrieval-driven context management strategy with durable history and recall REPL, under review with `first-time-contributor` and `Under Review` labels.
- **Cron job validation cleanup (#5347, #5040)** — migration-based fix for malformed `jobs.json` files, with a newer approach (#5347) superseding the original runtime tolerance fix (#5040).

## 4. Community Hot Topics

| Issue/PR | Comments | Topic |
|---|---|---|
| **#5329** — [ENHANCEMENT] Sidebar agent switching button | **5 comments** | Mobile UX: user on phone browser *hacked* backend access but needs collapsed sidebar agent switcher |
| **#5353** — [CLOSED] Feishu group chat must @ agent | **3 comments** | v1.1.12 regression: essential Feishu integration broken |
| **#5345** — Custom OpenAI-compatible providers lack function calling | **3 comments** | Integration gap: OMLX (and likely others) get text-only responses despite full tools API support |
| **#5354** — Message queue "cross-talk" between sessions | **2 comments** | Core UX regression: message queue sends to wrong agent when switching conversations |

**Analysis:** The most active discussions reveal a clear pattern: **v1.1.12 introduced valuable new features (message queue, file response improvements) but inadvertently broke core workflows**. The message queue cross-talk (#5354) and the Feishu @-mentions regression (#5353) are particularly impactful because they affect daily multi-agent operations. Meanwhile, the mobile side of the community is actively *hacking* together workarounds (#5329) while waiting for official mobile support — a sign of strong demand.

## 5. Bugs & Stability

**Critical severity:**
- **#5354** — *OPEN* — **Message queue cross-talk between sessions** — Switching agents sends queued messages to the wrong agent, and sessions get "stuck" (unswitchable). **Fix PR exists:** #5357 proposes releasing session switch locks in embedded mode, but only addresses part of the problem.
- **#5353** — *CLOSED* — **Feishu group chat @-mention regression** — v1.1.12 ignores configuration and forces @-mentions for all responses. *Status: Closed, presumably fixed in development branch.*

**High severity:**
- **#5344** — *OPEN* — **`/api/console/chat` returns 200 but silently drops messages** when agent is busy — leads to silent data loss in automated/API-driven workflows. **No fix PR yet.**
- **#5328** — *OPEN* — **Deepseek agent stalling during "thinking"** — Agent freezes, requires manual stop/resume. Affects web, console, and Tauri clients. Persists across versions. **No fix PR.**
- **#5330** — *OPEN* — **Zhipu provider: API key test passes, all model tests fail** — Configuration inconsistency blocks entire provider from use.

**Medium severity:**
- **#5358** — *OPEN* — **Session switch throws `TypeError: Cannot read properties of null`** — Occasional JS crash in embedded console mode. **No fix PR.**
- **#5333** — *OPEN* — **Agent stalls but UI shows editable text field, not stop button** — Related to Deepseek compatibility but could affect other models.
- **#5320** — *CLOSED* — **`send_file_to_user` image display regression** — Fixed by PR #5324 (inline content-disposition). Validated by reporter.

**Key observation:** Three critical/high-severity bugs remain unfixed — the message queue cross-talk (#5354) is the most urgent as it directly impacts the v1.1.12 headline feature. The Deepseek stalling issue (#5328) persists across three UI clients and multiple versions, suggesting it may be a fundamental model integration problem.

## 6. Feature Requests & Roadmap Signals

**Most likely for next release (v1.1.13):**

1. **Mobile responsiveness (high probability)** — A coordinated wave of PRs from multiple contributors (#5361-#5369, #5350, #5334, #5362, #5364, #5368) targets mobile adaptation across Settings, Channels, Sessions, CronJobs, SkillPool, Security, Agent Config, and Chat pages. The maintainer is actively engaging (e.g., PRs #5350/#5359 enhancing each other). This cluster strongly suggests mobile-first improvements as the **next release theme**.

2. **Model failover (#5351)** — `RoutingChatModel` exists in code but is never instantiated. Simple fix, high utility for production deployments.

3. **Tool result size hard cap (#5342)** — Addresses cascading failures when LLM calls 502 and pruning hooks are skipped. Defense-in-depth for context explosion.

**Medium-term signals:**

- **Agent office direct interaction (#5327)** — Add chat buttons to agent cards in the "Agent Office" page. Strong community demand from multi-agent managers.
- **Real-time UI updates for API messages (#5322)** — Currently requires manual page refresh to see agent-to-agent messages. Important for headless/automated workflows.
- **Automatic model failover (#5351)** — Config-acknowledged but unimplemented feature.
- **Recency-aware memory search (#5316)** — Weight daily notes by recency for better retrieval.

## 7. User Feedback Summary

**Pain points (negative sentiment):**
- **"My agent gets stuck and I have to manually stop it"** — Multiple users (#5328, #5333) report agents stalling during model thinking, especially with Deepseek.
- **"Messages go to the wrong agent when I switch conversations"** (#5354) — The new message queue, while efficient, creates confusion in multi-agent setups.
- **"I hacked the backend for mobile but the UI doesn't work"** (#5329) — Users are *desperate* for mobile support and building workarounds, indicating this is a top unmet need.
- **"Upgrade broke my workflow"** (#5320, #5353) — v1.1.12 regressions caused real productivity loss (Feishu integration broken, image sending broken).

**Satisfaction signals (positive sentiment):**
- **"The message queue is great progress!"** (#5354) — User acknowledges the value of the new feature despite the cross-talk bug.
- **Active PR collaboration** — Users are not just reporting bugs but contributing fixes (6 first-time contributors today, multiple PRs from same authors collaborating on mobile work).
- **Community patience with open-source** — Issues are filed with detailed reproduction steps, screenshots, and environment info, showing investment in the project's quality.

**Suggestion:** The community is actively *partnering* with maintainers on mobile support. A quick-win would be to merge the mobile responsiveness PR cluster (#5361-#5369) together as a single batch release — this would immediately satisfy the most vocal community need and reduce the "hacked backend" workarounds.

## 8. Backlog Watch

**Issues needing maintainer attention:**

1. **#5344** — *OPEN since June 20* — **API messages silently dropped when agent busy** — No fix PR exists yet. This is a **data loss** scenario; every automated integration is affected. *Priority: Critical for API users.*
2. **#5328** — *OPEN since June 19* — **Deepseek agent stalling** — Cross-platform, cross-version bug with no fix PR. Multiple users affected. *Priority: High for Deepseek users (large user base).*
3. **#5316** — *OPEN since June 18* — **Recency-aware memory search** — Enhancement with no assignee or milestone. *Priority: Low/Medium, could be deferred.*
4. **#5322** — *OPEN since June 19* — **Real-time UI updates for API messages** — No PR or assignee. *Priority: Medium — affects developer UX significantly but not end-users.*

**PRs needing attention:**
- **#5193** — *OPEN since June 15* — **Slack channel support** — Major feature (new integration) sitting unreviewed for 7 days. *Likely awaiting maintainer capacity.*
- **#5040** — *OPEN since June 9* — **Cron job tolerance** — Superseded by #5347 (same author). Maintainers should close #5040 and focus review on #5347.
- **#5097** — *OPEN since June 11* — **Shield icon centering fix** — Trivial CSS change but unreviewed for 11 days. *Low priority but bad signal for first-time contributors.*

**Overall assessment:** Backlog is manageable. The main concern is the **7-day unreviewed Slack integration PR (#5193)** — if this is a priority feature, it needs maintainer bandwidth. The cluster of unfixed high-severity bugs (#5354, #5344, #5328) should be prioritized alongside mobile responsiveness to avoid shipping a pretty mobile experience with broken core functionality.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-06-22

## Today's Overview

The ZeptoClaw project shows relatively low activity over the past 24 hours, with one issue closed and one pull request merged. The project appears to be in a maintenance and optimization phase, with no new releases or incoming feature work observed. The focus remains on solidifying the CI/CD pipeline, particularly around enforcing binary size constraints. The single merged PR today represents the culmination of a two-month effort to make the binary size check a blocking gate rather than a passive metric. Overall, project health appears stable, with attention shifting from feature development to operational hardening.

## Releases

No new releases were published in the last 24 hours. The most recent release remains unknown from this data snapshot.

## Project Progress

**Merged/Closed PRs today: 1**

- **[PR #611 — chore(ci): promote binary-size to PR gate at 7.5MB](https://github.com/qhkm/zeptoclaw/pull/611)** — *Closed/Merged*
  This PR modifies the existing `binary-size` CI job to run on every pull request (instead of only on push-to-main) and lowers the enforcement threshold from an unspecified prior limit to **7.5MB** stripped binary size. Previously the job was effectively a post-merge metric; now it will block PRs that exceed the budget. This directly implements the policy outlined in Issue #537.

**Corresponding Issue:** **[#537 — chore(ci): binary size budget gate](https://github.com/qhkm/zeptoclaw/issues/537)** — *Closed*
  The conceptual motivation was established here: maintaining a 6MB binary as a strategic moat for robot deployment feasibility. The PR sets a slightly relaxed threshold (7.5MB vs. the aspirational 6MB) as a pragmatic first gate.

## Community Hot Topics

No issues or PRs attracted comments or reactions in the last 24 hours. Both items tracked today are zero-comment, zero-reaction items authored directly by the project maintainer (`qhkm`). Community engagement appears minimal in this window.

## Bugs & Stability

**No new bugs, crashes, or regressions reported today.** The activity is entirely focused on CI infrastructure improvements, not runtime or functional fixes.

## Feature Requests & Roadmap Signals

No new feature requests were filed today. The dominant signal from the merged PR and related issue is a strong maintainer-led emphasis on **binary size governance**. This suggests the project's immediate roadmap priorities are:
- **Sustaining small binary footprint** as a core differentiator (likely for embedded/robotics use cases)
- **Enforcing CI discipline** before accepting new dependencies or features

Predictably, the next version may include:
- Further relaxation or tightening of the binary size gate as empirical data from PRs accumulates
- Potential addition of per-dependency size attribution in CI output

No community-driven feature requests appeared to challenge this direction.

## User Feedback Summary

No user feedback, pain points, or testimonials were captured in today's data. The absence of community interaction suggests either that the current user base is satisfied, that changes are transparent, or that the project is in a quiet period. The maintainer's proactive stance on binary size implies a sensitivity to deployment constraints (e.g., robots with limited storage), but no direct user validation of this concern was recorded today.

## Backlog Watch

**No long-unanswered issues or PRs requiring maintainer attention were identified in today's data.** The two tracked items are both authored by the maintainer and were resolved within the same window. The backlog appears clean with no outstanding community questions or stalled contributions.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-22

## Today's Overview

ZeroClaw shows **very high activity** with 41 issues and 50 PRs updated in the last 24 hours, indicating a major development push with strong community engagement. The project is processing substantial governance work (RFCs for workflow automation and crate consolidation), critical bug fixes across multiple providers and platforms, and significant feature work on skills registries, channel enhancements, and developer tooling. While no new releases were published today, the volume of merged/closed items (9 issues, 8 PRs) suggests steady progress toward a future release. The presence of high-severity bugs (S1 blockers) alongside extensive test coverage improvements indicates a project actively hardening its codebase.

## Releases

**No new releases today.** The latest release appears to be 0.8.0, with RFC #6808 referencing work starting from 0.8.0-beta-1.

## Project Progress

Several issues and PRs were **closed/merged today**, demonstrating active codebase improvement:

**Closed Issues (9 total):**
- [#7694](https://github.com/zeroclaw-labs/zeroclaw/issues/7694) — `feat(memory): cover storage-reader timestamp and ordering edge cases` — Memory test coverage enhancement (Audacity88)
- [#7486](https://github.com/zeroclaw-labs/zeroclaw/issues/7486) — `ci: add non-required cross-platform Clippy coverage` — Cross-platform lint workflow (Audacity88)
- [#8089](https://github.com/zeroclaw-labs/zeroclaw/issues/8089) — `[Bug]: Docker and Debian Dockerfile builds fail due to missing aardvark-sys build.rs` — Critical build fix (rikwade)
- [#7907](https://github.com/zeroclaw-labs/zeroclaw/issues/7907) — `[Bug]: agent rename can move owned state before config persistence` — Agent rename safety fix (Audacity88)
- [#7687](https://github.com/zeroclaw-labs/zeroclaw/issues/7687) — `feat(runtime): cover blank-input turn rejection` — Runtime test coverage (Audacity88)
- [#7740](https://github.com/zeroclaw-labs/zeroclaw/issues/7740) — `bug(runtime): base missing-skill suggestions on effective tool set` — Bug fix for skill suggestions (Audacity88)
- [#7807](https://github.com/zeroclaw-labs/zeroclaw/issues/7807) — `[Bug]: Approval overlay can inherit terminal background instead of ZeroCode theme` — TUI theming fix (Audacity88)
- [#7859](https://github.com/zeroclaw-labs/zeroclaw/pull/7859) — `test(runtime): cover blank-input turn rejection` — PR merged by Pick-cat
- [#7845](https://github.com/zeroclaw-labs/zeroclaw/pull/7845) — `test(runtime/tool_execution): add regression for poisoned activated-tool lock recovery` — PR merged by ZOOWH
- [#7819](https://github.com/zeroclaw-labs/zeroclaw/pull/7819) — `fix(runtime): base missing-skill suggestions on effective tool set in process_message path` — PR merged by ZOOWH
- [#7724](https://github.com/zeroclaw-labs/zeroclaw/pull/7724) — `fix(channels): respect ack_reactions config in Lark/Feishu channel` — PR merged by dwc1997

**Key advancements:**
- **Memory testing** improved with edge-case coverage for storage-reader timestamps
- **CI infrastructure** enhanced with cross-platform Clippy coverage (non-blocking)
- **Critical build fix** for Docker containers (aardvark-sys build.rs) — resolved same day
- **Agent rename safety** bug fixed — state mutation now properly sequenced after persistence
- **Skill suggestion accuracy** improved — suggestions now respect the effective (filtered) tool set
- **Runtime testing** expanded with blank-input rejection and tool lock recovery tests

## Community Hot Topics

**Most Active Discussions:**

1. **[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — RFC: Work Lanes, Board Automation, and Label Cleanup** (11 comments)
   *Author: Audacity88 | Status: Accepted, rollout in progress*
   **Analysis:** This governance RFC proposes a systematic approach to managing work routing through GitHub project boards with automatic label-to-lane mapping. The 11 comments and "accepted" status indicate consensus-building around a more automated project management workflow — a sign of the project scaling its contributor base and needing better triage processes.

2. **[#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) — [Feature]: where is napcat channel** (9 comments)
   *Author: irunmyway | Status: Accepted, no-stale*
   **Analysis:** Persistent user demand (~3 months open) for OneBot/NapCat channel support, indicating the ZeroClaw community includes users from the Chinese chatbot ecosystem who need compatibility with existing bot frameworks. The "no-stale" status suggests maintainers acknowledge this as ongoing.

3. **[#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) — [Feature]: Webhook transforms** (6 comments)
   *Author: MexHigh | Status: Accepted*
   **Analysis:** Users need customizable webhook payload transformation to integrate arbitrary webhook senders (specifically GitHub webhooks). This is a gateway enhancement request that would significantly improve ZeroClaw's interoperability.

4. **[#4760](https://github.com/zeroclaw-labs/zeroclaw/issues/4760) — [Feature]: use tool-calling for memory consolidation structured output** (4 comments)
   *Author: whtiehack | Status: Accepted*
   **Analysis:** Technical improvement to replace fragile prompt-constrained JSON parsing with proper tool-calling for memory operations — an architecture quality enhancement.

5. **[#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) — [Feature]: Local-First Mode for Small Models** (3 comments, 2 👍)
   *Author: ThirDecade2020 | Status: In-progress, accepted*
   **Analysis:** High user interest (2 reactions) for supporting small/local models with reduced prompt bloat and no prompt leakage. This signals demand for offline/private deployments with resource-constrained hardware.

## Bugs & Stability

**Critical Bugs (S1 - workflow blocked):**

| Issue | Severity | Status | Description |
|-------|----------|--------|-------------|
| [#7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756) | S1 | Open | Native/MCP tools unavailable on OpenAI Responses/reasoning and Anthropic turns — model-dependent tool delivery |
| [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) | S1 | In progress | context_compression drops assistant(tool_calls) and tool(result) for OpenAI-compatible providers (MiniMax), causing tool loops |
| [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) | S1 | Open, p1 | Gemini CLI OAuth authentication not working after successful auth |
| [#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613) | S1 | Open, p1 | Weak 6-digit pairing code with no configuration options — security concern |
| [#8094](https://github.com/zeroclaw-labs/zeroclaw/issues/8094) | S0 | Open | Anthropic provider added in Quickstart unavailable in chat until reset — UX/data loss risk |
| [#8095](https://github.com/zeroclaw-labs/zeroclaw/issues/8095) | S1 | In progress, p1 | install.sh installs arm64 prebuilt on Intel Macs ("bad CPU type") — **fix PR #8096 exists** |
| [#7898](https://github.com/zeroclaw-labs/zeroclaw/issues/7898) | S1 | Open | rust_native browser snapshots/@ref selectors fail under WebDriver |
| [#7907](https://github.com/zeroclaw-labs/zeroclaw/issues/7907) | S1 | **Closed** | Agent rename moving state before persistence — **FIXED** |

**Degraded Behavior (S2):**
- [#4721](https://github.com/zeroclaw-labs/zeroclaw/issues/4721) — Logs sent to stdout instead of stderr (breaks piped commands)
- [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) — Prompt caching broken on Telegram channel
- [#7740](https://github.com/zeroclaw-labs/zeroclaw/issues/7740) — Missing-skill suggestions built from wrong tool set — **CLOSED**
- [#7807](https://github.com/zeroclaw-labs/zeroclaw/issues/7807) — Approval overlay theming breakage — **CLOSED**
- [#7810](https://github.com/zeroclaw-labs/zeroclaw/issues/7810) — git_operations gives no recovery hint outside repository
- [#7896](https://github.com/zeroclaw-labs/zeroclaw/issues/7896) — Groq native tool messages missing tool name field

**Notable:** The Docker build failure [#8089](https://github.com/zeroclaw-labs/zeroclaw/issues/8089) was **closed same day** it was reported, demonstrating rapid response to build-breaking issues. The Intel Mac detection bug has a corresponding **fix PR #8096** ready for review.

## Feature Requests & Roadmap Signals

**Strong Roadmap Signals:**

1. **Multi-registry skill support** ([PR #7827](https://github.com/zeroclaw-labs/zeroclaw/pull/7827)) — User-configured extra skill registries via `registry:<name>/<skill>` syntax. **Likely to land in next release.** This is a major extensibility improvement allowing private/self-hosted skill catalogs.

2. **Local-First Mode** ([#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)) — Compact prompting for small models. **Status: in-progress, accepted.** High community demand for offline-capable deployments.

3. **Webhook transforms** ([#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467)) — Custom webhook path/transform support. **Status: accepted.** Unblocks generic webhook senders.

4. **Stronger pairing codes** ([#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613)) — Configurable alphanumeric pairing codes. **Status: accepted, p1 security.**

5. **Turn-level OTel trace correlation** ([#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641), [#6642](https://github.com/zeroclaw-labs/zeroclaw/issues/6642)) — Observability improvements: span nesting under turns, capturing full prompt/completion. **Status: in-progress.**

6. **Prompt-triggered install suggestions** ([#6289](https://github.com/zeroclaw-labs/zeroclaw/issues/6289)) — When user asks for capability not installed, suggest relevant skills/plugins. **Status: accepted.**

7. **RFC: Retire aardvark-sys crate** ([#8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043)) — Fold into zeroclaw-hardware. **Status: needs maintainer review.** Architecture simplification.

**Prediction for next version:** The skill registry extensibility ([#7827](https://github.com/zeroclaw-labs/zeroclaw/pull/7827)), webhook transforms ([#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467)), and memory consolidation tool-calling ([#4760](https://github.com/zeroclaw-labs/zeroclaw/issues/4760)) are strong candidates for the upcoming release given their "accepted" status and active PRs.

## User Feedback Summary

**Pain Points:**

- **Intel Mac users locked out** ([#8095](https://github.com/zeroclaw-labs/zeroclaw/issues/8095)) — install.sh downloads arm64 binary on Intel Macs, producing "bad CPU type" error. User JordanTheJet reported this and submitted a fix.
- **Gemini provider unusable** ([#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879)) — CLI OAuth flow authenticates successfully but then errors with rate_limited, blocking all Gemini usage.
- **Telegram prompt caching broken** ([#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360)) — User reports "forcing full prompt re-processing" on Telegram vs working cache on CLI.
- **MCP tools unavailable on major providers** ([#7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756)) — MCP server connects but tools don't reach the model on OpenAI and Anthropic turns.
- **Quickstart provider not immediately usable** ([#8094](https://github.com/zeroclaw-labs/zeroclaw/issues/8094)) — Anthropic provider appears in dashboard but not chat until manual reset.
- **Missing OneBot/NapCat channel** ([#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503)) — User unable to connect onebot-compatible bots, repeatedly requesting this integration.

**Satisfaction Signals:**
- Fast turnaround on Docker build fix ([#8089](https://github.com/zeroclaw-labs/zeroclaw/issues/8089)) — closed same day
- Multiple test coverage PRs being merged (Pick-cat, ZOOWH) suggests a healthy contribution pipeline
- RFC #6808 achieving "accepted" status indicates collaborative governance working
- Community members (Audacity88, JordanTheJet) actively filing well-structured issues and contributing fixes

## Backlog Watch

**Issues Needing Maintainer Attention:**

1. **[#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) — Track 153 commits lost in bulk revert** (2 comments, open since 2026-04-24)
   *Audit issue tracking recovery of 153 reverted commits. **Status: in-progress.*** This represents a significant gap in the codebase and needs systematic recovery planning.

2. **[#8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043) — RFC: Retire standalone aardvark-sys crate** (2 comments, open since 2026-06-20)
   *RFC for crate consolidation. **Needs maintainer-review** label.* This architectural decision impacts build pipeline and Docker builds (recent #8089 failure was related).

3. **[#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) — [Feature]: where is napcat channel** (9 comments, open since 2026-03-02)
   *Long-standing (3.5 months) feature request for OneBot/NapCat integration. **Status: accepted, no-stale.*** Marked no-stale but no assignee or PR visible.

4. **[#7098](https://github.com/zeroclaw-labs/zeroclaw/pull/7098) — feat(channel/mattermost): WebSocket listener mode** (open since 2026-06-02)
   *Large PR (size:L, risk:high) adding WebSocket support to Mattermost channel. **Needs-author-action** label.* This has been open 20 days without maintainer review clearance.

5. **[#7835](https://github.com/zeroclaw-labs/zeroclaw/pull/7835) — fix(tools/git_operations): add recovery hint** (open since 2026-06-17)
   *Small PR with i18n improvements. **Needs-author-action** label.* Addresses the user-reported issue [#7810](https://github.com/zeroclaw-labs/zeroclaw/issues/7810) about unhelpful git error messages.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*