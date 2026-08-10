# OpenClaw Ecosystem Digest 2026-08-10

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-10 00:52 UTC

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

# OpenClaw Project Digest — 2026-08-10

## 1. Today's Overview

OpenClaw is in a period of intense stabilization activity. In the last 24 hours, 500 issues were updated (428 open, 72 closed) and 500 PRs were updated (320 open, 180 merged/closed), with no new release published. The dominant community concern remains model reply reliability: the heavily-watched DeepSeek v4 Flash silent-reply failure ([#116277](https://github.com/openclaw/openclaw/issues/116277), 196 comments) was closed on 2026-08-09, but a new issue ([#121058](https://github.com/openclaw/openclaw/issues/121058)) reports the same failure mode recurring, indicating the root cause is not fully resolved. A large wave of fresh PRs targets message-loss, session-state, media handling, and Control UI pairing/onboarding fixes, signaling an active cross-cutting bug-fix push. At the same time, a significant number of long-standing P1 issues remain parked behind `needs-product-decision` and `needs-maintainer-review` labels.

## 2. Releases

No new releases were published in the last 24 hours (0 releases).

## 3. Project Progress

**Merged/closed:** 180 PRs were merged or closed in the last 24 hours (out of 500 updated) — a healthy merge throughput, though specific merged PR titles were not in view. Notable open PRs advancing toward merge include:

- **UI / onboarding:** mobile pairing completion after code redemption ([#120933](https://github.com/openclaw/openclaw/pull/120933)), in-app confirmation for destructive sidebar actions ([#121286](https://github.com/openclaw/openclaw/pull/121286)), Control UI cursor scoping to app-like display modes ([#121258](https://github.com/openclaw/openclaw/pull/121258)), public URL/LAN pairing guidance ([#121032](https://github.com/openclaw/openclaw/pull/121032)), settings mutation coordination ([#116940](https://github.com/openclaw/openclaw/pull/116940)), and removal of custom session icons ([#121263](https://github.com/openclaw/openclaw/pull/121263)).
- **Agent core:** runaway loop guards with turn/error-batch/idle-repeat limits ([#121063](https://github.com/openclaw/openclaw/pull/121063)), bounded resumable compaction recovery ([#120190](https://github.com/openclaw/openclaw/pull/120190)), prompt-caching fix for Claude Opus 5 / Sonnet 5 ([#121283](https://github.com/openclaw/openclaw/pull/121283)), single-consumption of prepared images in CLI-backed turns ([#120721](https://github.com/openclaw/openclaw/pull/120721)), and prompt/stream pipeline consolidation ([#121305](https://github.com/openclaw/openclaw/pull/121305), refactor-only).
- **Gateway / process / perf:** SIGKILL teardown fallback plus token-silence watchdog ([#112312](https://github.com/openclaw/openclaw/pull/112312), draft), Linux tool-child process detachment ([#120398](https://github.com/openclaw/openclaw/pull/120398)), SQLite memory-mapped reads ([#115138](https://github.com/openclaw/openclaw/pull/115138)), ACP bound follow-up delivery ([#110261](https://github.com/openclaw/openclaw/pull/110261)), disappeared-worker failure preservation ([#121122](https://github.com/openclaw/openclaw/pull/121122)), and TLS-cert fallback reason schema ([#121285](https://github.com/openclaw/openclaw/pull/121285)).
- **Channels:** Zalo outbound tool-trace sanitization ([#101441](https://github.com/openclaw/openclaw/pull/101441)) and Slack Enterprise Grid scope preservation ([#121014](https://github.com/openclaw/openclaw/pull/121014)).
- **Memory:** duplicate Gemini embedding-batch prevention ([#120889](https://github.com/openclaw/openclaw/pull/120889)), `memory_get` recall tracking ([#112694](https://github.com/openclaw/openclaw/pull/112694)), and memory plugin authorization contracts ([#121221](https://github.com/openclaw/openclaw/pull/121221)).
- **Media:** cleanup of empty inbound media staging dirs ([#117184](https://github.com/openclaw/openclaw/pull/117184)) and image-understanding fallback to default agent dir ([#121301](https://github.com/openclaw/openclaw/pull/121301)).

## 4. Community Hot Topics

- **[#116277](https://github.com/openclaw/openclaw/issues/116277) — DeepSeek v4 Flash silent reply failure (196 comments, CLOSED, P1):** The single most active issue. The model silently produced no reply on a Telegram group message; OpenClaw posted a generic fallback. Massive engagement indicates widespread impact and frustration over message loss.
- **[#121058](https://github.com/openclaw/openclaw/issues/121058) — Silent reply failures still recurring after #116277 closed (19 comments, new 2026-08-09):** The monitoring cron logging this failure mode recorded fresh occurrences even after closure, including on the day the follow-up was filed. Users are explicitly calling out that closing the issue did not fix the problem.
- **[#92201](https://github.com/openclaw/openclaw/issues/92201) — Anthropic thinking signatures invalid on replay (21 comments, P1):** Embedded runner intermittently persists thinking blocks whose signatures fail revalidation; recovery never fires because the error text is genericized.
- **[#22438](https://github.com/openclaw/openclaw/issues/22438) — Tiered bootstrap file loading (19 comments, P2):** Discussion on saving context-window budget by not loading all bootstrap files into sub-agent and cron sessions.
- **[#91009](https://github.com/openclaw/openclaw/issues/91009) — Codex PreToolUse hook relay spawns CPU-bound processes (18 comments, 2👍, P1):** Gateway RPC stalls and near-100% CPU per hook process; crash-loop impact.
- **[#45740](https://github.com/openclaw/openclaw/issues/45740) — gh-issues skill prompt injection (16 comments, 1👍, P2, security):** Raw GitHub issue bodies injected into sub-agent prompts without sanitization.

**Underlying needs:** (a) elimination of silent message loss, (b) session/context integrity across restarts and replays, (c) security boundaries for secrets and untrusted content, and (d) transparent provider/model behavior.

## 5. Bugs & Stability

Ranked by severity:

- **P0 — [#48920](https://github.com/openclaw/openclaw/issues/48920) Live docs are ahead of release (10 comments, 4👍, `impact:ux-release-blocker`):** Docs document `IsolatedSessions` not present in latest 2026.3.13. No linked fix PR.
- **P1 — message loss / state corruption:**
  - [#121058](https://github.com/openclaw/openclaw/issues/121058) Silent reply failures recurring post-#116277; no fix PR yet.
  - [#94939](https://github.com/openclaw/openclaw/issues/94939) 6.x state migration leaves channel conversation-store SQLite at 0 bytes, orphaning references and breaking MS Teams proactive sends (`impact:data-loss`; linked PR open).
  - [#96242](https://github.com/openclaw/openclaw/issues/96242) Duplicate Telegram messages via at least three independent paths (linked PR open).
  - [#92201](https://github.com/openclaw/openclaw/issues/92201) Invalid Anthropic thinking signatures; recovery wrapper never fires.
  - [#48003](https://github.com/openclaw/openclaw/issues/48003) Steer mode fails to inject messages mid-turn (root-caused to commit `9889c6da5`).
  - [#31583](https://github.com/openclaw/openclaw/issues/31583) `exec` tool doesn't inherit `skills.entries.*.env` (regression, security-relevant).
  - [#47975](https://github.com/openclaw/openclaw/issues/47975) Subagent sessions persist after completion; main session becomes unresponsive.
  - [#72015](https://github.com/openclaw/openclaw/issues/72015) `active-memory` plugin blocks replies; QMD boot init overloads multi-agent gateways.
  - [#91009](https://github.com/openclaw/openclaw/issues/91009) CPU-bound `openclaw-hooks` processes from Codex hook relay.
  - [#97616](https://github.com/openclaw/openclaw/issues/97616) Zombie child-process accumulation and runtime degradation.
  - [#114211](https://github.com/openclaw/openclaw/issues/114211) Matrix room agents looping on no-reply output and stale replay.
  - [#105528](https://github.com/openclaw/openclaw/issues/105528) `exec`/`read` silently return empty output on Windows (intermittent, session-specific).
  - [#87327](https://github.com/openclaw/openclaw/issues/87327) Isolated agent runs stall in runtime-plugins phase before execution start.
  - [#90378](https://github.com/openclaw/openclaw/issues/90378) Cron store silently migrated to SQLite; new jobs default to `delivery.mode=announce`, causing channel errors.
  - [#51049](https://github.com/openclaw/openclaw/issues/51049) WhatsApp inbound never received in k3s nested container (outbound works).
  - [#48786](https://github.com/openclaw/openclaw/issues/48786) Feishu quoted-mention placeholders shown raw (`@_user_N`).
- **Fix PRs now in review** exist for related issues: deferred model-call aborts ([#121142](https://github.com/openclaw/openclaw/pull/121142) → #121018), runaway loop guards ([#121063](https://github.com/openclaw/openclaw/pull/121063) → #120962), prompt caching on Claude 5 models ([#121283](https://github.com/openclaw/openclaw/pull/121283) → #121251), image-understanding `agentDir` fallback ([#121301](https://github.com/openclaw/openclaw/pull/121301) → #121293), Linux tool-child detachment ([#120398](https://github.com/openclaw/openclaw/pull/120398) → #120386), and macOS onboarding error surfacing ([#121306](https://github.com/openclaw/openclaw/pull/121306) → #121236).

## 6. Feature Requests & Roadmap Signals

- **[#10659](https://github.com/openclaw/openclaw/issues/10659) — Masked Secrets (P1, 4👍):** Let agents *use* API keys without *seeing* them; directly addresses leak and prompt-injection risk. Oldest high-value security request (Feb 6), still awaiting product decision.
- **[#22438](https://github.com/openclaw/openclaw/issues/22438) — Tiered bootstrap file loading (P2, 19 comments):** Progressive context control to cut token waste in sub-agents/cron.
- **[#67413](https://github.com/openclaw/openclaw/issues/67413) — Per-agent dreaming configuration (P2, 5👍):** Prevents OOM from all workspaces dreaming at once.
- **[#60572](https://github.com/openclaw/openclaw/issues/60572) — Multi-Slot Memory Architecture (P2, 3👍):** Multiple purpose-specific memory slots instead of one.
- **[#6757](https://github.com/openclaw/openclaw/issues/6757) — Agent-triggered self-compaction:** Allow agents to compact their own context.
- **[#6599](https://github.com/openclaw/openclaw/issues/6599) — `/models test-fallback` command:** Verify fallback chains without waiting for real failures.
- **[#33975](https://github.com/openclaw/openclaw/issues/33975) — Fallback approval mode + model attribution** in messages.
- **[#46656](https://github.com/openclaw/openclaw/issues/46656) — Webchat/Control UI inline buttons:** Currently silently dropped outside Telegram.
- **[#47677](https://github.com/openclaw/openclaw/issues/47677) — Telegram reaction triggers** (2👍): first-class reaction-driven wake-up.
- **[#63990](https://github.com/openclaw/openclaw/issues/63990) — Multi-index embedding memory** with model-aware failover.
- **[#71058](https://github.com/openclaw/openclaw/issues/71058) — Multiple Teams bots per gateway.**
- **[#71452](https://github.com/openclaw/openclaw/issues/71452) — Pagination for list chat/messages** (hardcoded 25-item cap).
- **[#54373](https://github.com/openclaw/openclaw/issues/54373) — Context Provenance RFC:** source/volatility metadata for injected context.
- **[#95724](https://github.com/openclaw/openclaw/issues/95724) — Memory indexed by source directory** rather than per-agent, eliminating duplicate vector stores.

**Prediction:** Masked Secrets (#10659) and the message-reliability/duplicate-delivery fixes are the most likely to land next, given P1/security priority and maintainer attention. Per-agent dreaming (#67413, highest 👍 count) is a strong candidate for a near-term enhancement release.

## 7. User Feedback Summary

- **Silent reply failures are the loudest pain point.** Reporter `sloptop-the-terrible` filed both the original DeepSeek issue (#116277) and the recurrence (#121058), explicitly criticizing that closure did not reflect reality — a signal of low trust in the fix process.
- **Upgrade/migration trauma is recurring:** empty SQLite conversation stores ([#94939](https://github.com/openclaw/openclaw/issues/94939)), silent cron-store migration changing delivery semantics ([#90378](https://github.com/openclaw/openclaw/issues/90378)), and regression where bare `/new`/`/reset` no longer triggers the persona greeting ([#77733](https://github.com/openclaw/openclaw/issues/77733)).
- **Multi-agent deployments are straining:** duplicate Telegram messages ([#96242](https://github.com/openclaw/openclaw/issues/96242)), group-chat context blurring between agents ([#56692](https://github.com/openclaw/openclaw/issues/56692)), and the umbrella duplicate-transcript/replay issue ([#69208](https://github.com/openclaw/openclaw/issues/69208)) all point to immature multi-agent context isolation.
- **Resource-exhaustion complaints:** CPU-bound hook processes ([#91009](https://github.com/openclaw/openclaw/issues/91009)), zombie accumulation ([#97616](https://github.com/openclaw/openclaw/issues/97616)), active-memory reply blocking ([#72015](https://github.com/openclaw/openclaw/issues/72015)), and OOM from all-workspace dreaming ([#67413](https://github.com/openclaw/openclaw/issues/67413)).
- **Windows users feel left behind:** `exec`/`read` intermittently returning empty output ([#105528](https://github.com/openclaw/openclaw/issues/105528)) was flagged as a 2026.6.x regression with no fresh fix PR.
- **Positive signals:** multiple UI pairing/onboarding PRs ([#120933](https://github.com/openclaw/openclaw/pull/120933), [#121032](https://github.com/openclaw/openclaw/pull/121032), [#121306](https://github.com/openclaw/openclaw/pull/121306)) and performance work like SQLite mmap ([#115138](https://github.com/openclaw/openclaw/pull/115138)) show responsiveness in UX and infra areas.

## 8. Backlog Watch

Issues that have been open longest and/or carry high severity but are stuck awaiting maintainer attention:

- **[#48920](https://github.com/openclaw/openclaw/issues/48920) (Mar 17, P0, release blocker):** Live docs ahead of release — no linked fix PR despite 4👍.
- **[#10659](https://github.com/openclaw/openclaw/issues/10659) (Feb 6, P1, 4👍):** Masked Secrets — oldest high-value security feature; marked `needs-product-decision`.
- **[#31583](https://github.com/openclaw/openclaw/issues/31583) (Mar 2, P1 regression):** `exec` env-var inheritance — security-relevant, awaiting maintainer review.
- **[#48003](https://github.com/openclaw/openclaw/issues/48003) (Mar 16, P1, 4👍):** Steer mode mid-turn injection — root cause identified but parked behind product decision.
- **[#45740](https://github.com/openclaw/openclaw/issues/45740) (Mar 14, P2, security):** gh-issues prompt-injection vector — needs security review.
- **[#92201](https://github.com/openclaw/openclaw/issues/92201) (Jun 11, P1):** Anthropic thinking-signature replay failures — unresolved on main.
- **[#91009](https://github.com/openclaw/openclaw/issues/91009) (Jun 6, P1, 2👍):** Codex hook CPU-bound process storm — still waiting on live repro.
- **Oldest feature requests:** [#6599](https://github.com/openclaw/openclaw/issues/6599) and [#6625](https://github.com/openclaw/openclaw/issues/6625) (Feb 1), [#6757](https://github.com/openclaw/openclaw/issues/6757) (Feb 2) — all still in `needs-maintainer-review` / `needs-product-decision`.
- **[#69208](https://github.com/openclaw/openclaw/issues/69208) (Apr 20, P1 umbrella, 13 comments):** Cross-channel duplicate transcript/replay/context-assembly bug family — updated today but no resolution or consolidated fix PR.

Overall health assessment: high contribution velocity and a strong queue of targeted fixes, but recurring silent-reply failures and a build-up of P1s awaiting product decisions are the main risks to release confidence.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report — 2026-08-10

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is firmly in a **stabilization and hardening phase**: none of the 12 tracked projects published a release in the last 24 hours, while collectively they processed ~700 issue updates and ~700 PR updates. Across every active project, community attention centers on the same cluster of concerns — silent message loss, session/context integrity, security boundary enforcement (SSRF, allowlist bypass, webhook authentication), and token-use transparency. Contribution velocity remains high, and maintainers are merging steadily, but a growing governance bottleneck is visible in several projects where PRs and RFCs queue faster than reviewers can process them. Notably, the ecosystem's failure modes are converging: the same classes of bugs (silent reply failures, stalled polling loops, duplicate delivery, state corruption after migration) appear independently in OpenClaw, Hermes, NanoBot, PicoClaw, and ZeroClaw, indicating shared architectural challenges rather than isolated regressions.

## 2. Activity Comparison

| Project | Issues updated (24h) | PRs updated (24h) | Merged/Closed PRs | Release | Health (1–10) |
|---|---|---|---|---|---|
| OpenClaw | 500 (72 closed) | 500 (180 merged/closed) | 180 | None | 7.5 |
| Hermes Agent | 50 (3 closed) | 50 (4 merged/closed) | 4 | None | 7.5 |
| ZeroClaw | 50 (12 closed) | 50 (1 merged/closed) | 1 | None | 6.0 |
| CoPaw | 17 (6 closed) | 50 (1 closed) | 1 | None | 6.5 |
| IronClaw | 22 (7 closed) | 27 (8 merged/closed) | 8 | None | 7.5 |
| NanoBot | 5 (0 closed) | 15 (4 merged/closed) | 4 | None | 6.5 |
| NanoClaw | 1 (0 closed) | 16 (0 merged) | 0 | None | 6.0 |
| PicoClaw | 3 (1 closed) | 6 (1 closed) | 1 | None | 6.5 |
| LobsterAI | 3 (0 closed) | 0 | 0 | None | 5.0 |
| Moltis | 2 (0 closed) | 1 (0 merged) | 0 | None | 6.0 |
| NullClaw | 0 | 0 | 0 | None | 2.0 |
| ZeptoClaw | 0 | 0 | 0 | None | 2.0 |

**Health score basis:** activity volume, merge throughput, unresolved criticals, maintainer responsiveness, and backlog quality. OpenClaw, Hermes, and IronClaw score highest due to strong merge throughput and fast fix-PR turnaround, despite unresolved P0/P1 items. ZeroClaw and NanoClaw are dragged down by review-bound PR pipelines; ZeroClaw additionally carries an open S0 security issue.

## 3. OpenClaw's Position

OpenClaw remains the **clear ecosystem reference and scale leader**: its 24-hour activity (500 issues, 500 PRs, 180 merges) is roughly **10× the next tier** (Hermes/ZeroClaw/CoPaw at ~50), indicating both the largest user base and the most active contributor pipeline in the ecosystem.

**Advantages vs. peers:**
- **Breadth of channel coverage** — Zalo, Feishu, WeCom, Teams, Matrix, WhatsApp, Telegram, Slack; peers (PicoClaw, NanoClaw, CoPaw) each cover only a subset.
- **Architectural maturity** — gateway/worker process isolation, SIGKILL teardown fallbacks, token-silence watchdogs, SQLite mmap reads, ACP delivery, and memory-plugin contracts have no equivalents in smaller projects.
- **Community gravity** — the most-commented issues (DeepSeek silent-reply, 196 comments) set the ecosystem's agenda; peers track the same failure modes weeks later.

**Technical approach differences:** OpenClaw invests heavily in cross-cutting reliability infrastructure (runaway-loop guards, bounded compaction recovery, prompt/stream pipeline consolidation) rather than single-channel fixes. Its main vulnerability is *process trust*: the community explicitly criticized the closure of the DeepSeek silent-reply issue (#116277) while the failure recurred (#121058), and a P0 docs-ahead-of-release issue (#48920) remains unfixed — a credibility gap that smaller, more responsive projects like Hermes are exploiting.

## 4. Shared Technical Focus Areas

Requirements emerging independently across multiple projects:

1. **Elimination of silent message loss / dead connections** — OpenClaw (#121058, #116277), NanoBot (#5156 Telegram polling stall), PicoClaw (#3203 Matrix sync loop death), ZeroClaw (#9314 Telegram long-poll offset), Hermes (#82756 desktop history deletion). The single most common user complaint ecosystem-wide.
2. **Security hardening at the boundary** — OpenClaw (Masked Secrets #10659, gh-issues prompt injection #45740), NanoBot (exec.allowPatterns shell-chain bypass #5305/#5306), PicoClaw (SSRF via media download redirects #3322–#3324), ZeroClaw (webhook fail-closed #9565, verifiable-intent credential chain #9328), NanoClaw (critical tar CVE in agent image #3207), Hermes (vault token process exposure #82829).
3. **Session/context integrity & data-loss prevention** — Hermes (third silent-deletion incident), OpenClaw (6.x state migration zero-byte SQLite #94939), ZeroClaw (config flush races #9284), LobsterAI (context overflow forcing /reset), CoPaw (session identity deadlock #6750).
4. **Memory as a first-class subsystem** — OpenClaw (multi-slot memory #60572, Gemini embedding dedup), CoPaw (ReMe reranker #6398, Auto-Dream tolerance #6841), NanoBot (Dream consolidation tool-mismatch #5302), ZeroClaw (per-agent vector store indexing #95724).
5. **Token/cost observability & context efficiency** — NanoBot (token-usage logs #5266 + API PR #5299), OpenClaw (tiered bootstrap loading #22438), IronClaw (124 tool invocations for a simple workflow #6046).
6. **WebUI/console reliability & UX** — IronClaw (four QA regressions), CoPaw (mobile console #6281, SSE streaming #6843), ZeroClaw (auto-scroll fight #9562), Hermes (desktop freeze #63047, VoiceOver accessibility #26689), OpenClaw (Control UI pairing/onboarding PRs).
7. **Governance/review bottleneck** — ZeroClaw (public maintainer decision-queue #8692), CoPaw (49 open PRs, many unreviewed first-time contributions), OpenClaw (P1s parked behind needs-product-decision), Moltis (untriaged issues).

## 5. Differentiation Analysis

| Project | Core identity | Target users | Distinctive architecture |
|---|---|---|---|
| **OpenClaw** | General-purpose personal assistant, reference implementation | Power users, self-hosters, multi-channel deployments | Gateway/worker process model, widest channel matrix, memory plugin contracts |
| **Hermes Agent** | Desktop-first agent with gateway | macOS/desktop users, automation-heavy | Native desktop app, state.db journaling, cron chaining, accessibility focus |
| **IronClaw** | Automation/routines platform with tool catalog | Workflow automation users | Reborn model w/ progressive tool disclosure, web-push notifications, capability batches |
| **ZeroClaw** | RFC-governed, security-forward agent runtime | Enterprise/scale deployments (WhatsApp Cloud, WeCom) | Rust-based (Tokio), verifiable-intent, formal RFC process, per-agent sandbox/env |
| **CoPaw** | Qwen/Chinese-ecosystem agent | Chinese-speaking users, Qwen/WeChat workflows | ReMe memory search, bilingual approval flows, 2.1.0b2 console iteration |
| **NanoBot** | Lightweight personal agent | Individual developers, budget-conscious | GitAgent protocol, token-usage accounting API, CLI + WebUI |
| **NanoClaw** | Containerized agent image | Docker/Kubernetes deployers | CVE-gated image publishing, hardened prebuilt images, channel adapters (Signal/Slack/Dial) |
| **PicoClaw** | Chat bridge/relayer | Chat-ops integrators | Rich-format preservation (Telegram tables, IRC reassembly), SSRF-hardened downloads |
| **LobsterAI** | Model-flexible agent | Chinese-speaking users, OpenRouter/NVIDIA models | Cross-model subtask orchestration, custom provider parsing |
| **Moltis** | Vault + sandbox runtime manager | Niche reliability-focused users | Recovery-phrase normalization, Apple Container detection |

The ecosystem splits into **generalists** (OpenClaw, ZeroClaw, CoPaw) and **specialists** (PicoClaw on bridging, IronClaw on automation, NanoClaw on containers, Moltis on vault/runtime). Hermes competes with OpenClaw on desktop UX breadth but differentiates on accessibility and cron automation; NanoBot competes on cost transparency and lightweight footprint.

## 6. Community Momentum & Maturity

**Tier 1 — Rapid iteration, high merge velocity:** OpenClaw (180 merges/24h), IronClaw (8 merges, fix PRs for all new QA regressions within hours), Hermes (4 merges, fix PRs in flight for P0/P1 within the same window). These projects convert community reports into fixes fastest.

**Tier 2 — High contribution, review-bound:** CoPaw, ZeroClaw, NanoClaw. Contributor energy is high (49 open PRs each for CoPaw and ZeroClaw), but merge throughput is low (1 merge each), and first-time-contributor PRs age without reviewer feedback. ZeroClaw's S0 webhook issue and CoPaw's unreviewed backlog are the risks.

**Tier 3 — Moderate, stable:** NanoBot, PicoClaw. Healthy triage and targeted fixes (security PRs, lockfile fixes), but smaller contributor bases and slower feature velocity.

**Tier 4 — Low activity / dormant:** LobsterAI (3 stale issues, no PRs, no maintainer responses), Moltis (2 untriaged issues, 1 unmerged PR), NullClaw and ZeptoClaw (zero activity).

**Maturity signal:** the two most mature projects (OpenClaw, Hermes) both show *recurrence* of their most damaging bug class (silent message loss / history deletion) — a sign that scale outpaces root-cause completion. The healthiest pattern is IronClaw's: new QA regressions get matching fix PRs within the same 24-hour window.

## 7. Trend Signals

1. **Reliability is the new feature battleground.** Across all active projects, users rank "silent failure" as the top pain point. Expect investment in watchdogs, liveness checks, reconnection logic, and explicit error surfaces (rather than generic fallbacks) to define the next release cycle. The OpenClaw DeepSeek issue shows the cost of closing issues without root-cause proof.

2. **Security moves from hardening to default-deny.** SSRF blocklists, allowlist bypass audits, webhook authentication, masked secrets, and CVE-gated container publishing are now appearing simultaneously in six projects. The ZeroClaw webhook fail-closed S0 and NanoBot allowPatterns bypass are the most urgent data points: **untrusted input handling is the ecosystem's biggest liability**.

3. **Token economics shift from cost-cutting to observability.** NanoBot's token-usage API, OpenClaw's tiered bootstrap loading, and IronClaw's tool-over-invocation complaints all point to the same need: per-call token accounting and context-budget control as first-class features, not analytics afterthoughts.

4. **Memory subsystems are consolidating into product features.** Multi-slot architectures, reranker-backed retrieval, consolidation tolerance, and per-agent indexing indicate memory is moving from a plugin afterthought to a core architectural primitive.

5. **Multi-agent isolation remains unsolved.** Cross-profile subagents, group-chat context blurring, self-replicating routines, and per-agent environment confinement are being addressed piecemeal; no project has a comprehensive isolation model yet. This is the clearest greenfield opportunity.

6. **Governance scales worse than code.** ZeroClaw's public decision-queue tracker and CoPaw's unreviewed first-time PRs reveal a structural bottleneck: contribution influx now exceeds maintainer capacity across the ecosystem. Projects that institutionalize triage (IronClaw's fast QA-fix loop) are gaining user trust faster than those with heavier process.

**Value for AI agent developers:** build fail-closed authentication into every inbound webhook, expose token usage per call by default, persist conversation state transactionally with recovery paths, add health-check/reconnect logic to all long-poll connections, and treat memory retrieval as a first-class subsystem with model-aware failover. The projects winning user trust in this window — IronClaw, Hermes, OpenClaw on throughput — are those that convert reported failures into shipped fixes within days, not those with the most ambitious roadmaps.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-10

## 1. Today's Overview

NanoBot saw moderate but meaningful activity in the last 24 hours: **5 issues updated** (all open) and **15 PRs updated** (11 open, 4 closed/merged). No new releases were published. The project is in an active maintenance and feature-development phase, with contributions focused on token-use observability, Telegram polling reliability, skill-loading fixes, and WebUI/CI hardening. Two newly filed security issues around `exec.allowPatterns` are the highest-risk items, and no fix PR is visible yet. Overall project health is solid in community engagement, but maintainer attention is needed on long-running PRs and the security advisory backlog.

## 2. Releases

**No new releases** were published in this window, so there are no changelogs, breaking changes, or migration notes to report.

## 3. Project Progress

Four PRs were closed/merged in the last 24 hours:

- **[#4019 — Add GitAgent Protocol support (agent.yaml + SOUL.md)](https://github.com/HKUDS/nanobot/pull/4019)**  
  Closed after a long review period. The PR proposed adding the open GitAgent standard manifest and `SOUL.md` support to NanoBot.

- **[#5307 — Restore Star History chart](https://github.com/HKUDS/nanobot/pull/5307)**  
  Reintroduces the repo Star History visualization using a new provider not affected by the original project’s shutdown.

- **[#5308 — Strengthen user-path coverage and CI gates](https://github.com/HKUDS/nanobot/pull/5308)**  
  Adds user-path tests for CLI, WebUI chat forks, version checks, route auth, and failure boundaries; improves WebUI cleanup; adds V8 coverage reporting and CI enforcement.

- **[#5304 — Fix(webui): explain HTTPS requirement for voice input](https://github.com/HKUDS/nanobot/pull/5304)**  
  Clarifies that voice input requires a secure origin, distinguishes real browser incompatibility from insecure HTTP, and documents trusted HTTPS options for LAN use.

## 4. Community Hot Topics

The most-discussed items by comment count are both issues:

- **[Issue #5266 — Logs about token consumption](https://github.com/HKUDS/nanobot/issues/5266)** — **13 comments**  
  Users report unexpectedly high token burn (e.g., a million tokens in 2 hours without visible activity) and ask for per-call token-consumption logging. This is the clearest community demand in the current window and directly aligns with open PR **[#5299 — expose structured token usage records](https://github.com/HKUDS/nanobot/pull/5299)**.

- **[Issue #5295 — Docker Compose deploy fails: entrypoint permission denied](https://github.com/HKUDS/nanobot/issues/5295)** — **5 comments**  
  Users following `deployment.md` hit `/bin/sh: cannot open /usr/local/bin/entrypoint.sh: Permission denied`, causing the gateway container to exit. This indicates a packaging/documentation gap in the official Docker flow.

PR comment counts were not available in the snapshot, but the breadth of PR activity (15 PRs updated) suggests strong contributor momentum.

## 5. Bugs & Stability

Ranked by severity:

- **[#5306 — Security: `exec.allowPatterns` shell-chain bypass](https://github.com/HKUDS/nanobot/issues/5306)** / **[#5305 — Security: allowlist bypass via OpenAI-compatible API](https://github.com/HKUDS/nanobot/issues/5305)**  
  **High severity.** Both report that `exec.allowPatterns` can be bypassed via chained shell commands, allowing unintended command execution. They appear to be related reports from the same researcher. No fix PR is currently listed.

- **[#5295 — Docker Compose entrypoint permission denied](https://github.com/HKUDS/nanobot/issues/5295)**  
  **High operational impact.** The official Docker Compose deployment is broken for at least one user; no fix PR is visible yet.

- **[#5311 — Agnes AI double-encodes nested-object tool arguments](https://github.com/HKUDS/nanobot/issues/5311)**  
  **Medium.** MCP tool calls with nested-object parameters fail with input validation errors when using Agnes AI as a custom provider. No fix PR yet.

- **[#5156 — Telegram recovery from silently stalled polling](https://github.com/HKUDS/nanobot/pull/5156)**  
  Fix PR remains open for a production issue where the bot stops receiving messages while the process remains alive and silent.

- **[#5301 — Telegram: bridge stdlib logging and detect stalled polling](https://github.com/HKUDS/nanobot/pull/5301)**  
  Open low-risk observability companion to #5156; adds logging and liveness checks without rebuilding connection pools.

- **[#5302 — Prevent unavailable tool calls during Dream consolidation](https://github.com/HKUDS/nanobot/pull/5302)**  
  Open fix for a prompt/tool mismatch where Dream memory consolidation issues tool calls not present in its restricted tool registry.

- **[#5303 — Make weather workflow Windows-safe](https://github.com/HKUDS/nanobot/pull/5303)**  
  Open fix because bare `curl` in PowerShell resolves to `Invoke-WebRequest`, breaking the weather skill on Windows.

## 6. Feature Requests & Roadmap Signals

- **Token-use observability** is the strongest roadmap signal. Users requested logging/cost tracing in **[#5266](https://github.com/HKUDS/nanobot/issues/5266)**, and the open PR **[#5299](https://github.com/HKUDS/nanobot/pull/5299)** adds authenticated `GET /api/settings/usage/records?day=YYYY-MM-DD` for per-day token accounting. This is likely to land in the next version.

- **Responses API normalization** is advancing in **[#5204](https://github.com/HKUDS/nanobot/pull/5204)**, replacing provider-name checks with a declarative `ResponsesCapabilities` profile. Though still open, this refactor signals a cleaner multi-provider architecture.

- **Agent Plugins as a standard package boundary** appears in **[#5288](https://github.com/HKUDS/nanobot/pull/5288)**, integrating Agent Plugins v1 with CLI Apps. This points toward vendor-neutral skills/MCP packaging for the project.

- **Model-agnostic computer use** remains an open proposal in **[#4276](https://github.com/HKUDS/nanobot/pull/4276)**, adding `browser` and `computer_use` tools. It has been open since June and is the largest feature candidates, though its future is unclear.

- **Draft API status improvements** in **[#5255](https://github.com/HKUDS/nanobot/pull/5255)** would make the WebUI truthfully report externally managed `nanobot serve` instances, adding `nanobot api status`. This is still a draft.

## 7. User Feedback Summary

Real user pain points in this window revolve around **cost transparency**, **deployment reliability**, **security controls**, and **platform-specific breakages**:

- Users are concerned about silent token burn and want actionable per-request logs (**#5266**).
- Docker users are blocked by an entrypoint permission error in official compose deployment (**#5295**).
- Security-conscious users are actively auditing allowlist enforcement and found a shell-chain bypass (**#5305**, **#5306**).
- Telegram users experience silent polling stalls, a frustrating failure mode because there is no log signal (**#5156**).
- Windows users hit PowerShell `curl` alias issues in the weather skill (**#5303**).
- Provider-specific edge cases with Agnes AI break MCP workflows (**#5311**).

Satisfaction signals are mixed: contributors are active and maintainers are closing PRs daily, but the unresolved security issues and the long-open Telegram recovery PR are likely sources of community concern.

## 8. Backlog Watch

- **[#4276 — Model-agnostic computer use](https://github.com/HKUDS/nanobot/pull/4276)**  
  Open since 2026-06-10. Large feature PR; needs maintainer review or a clear roadmap decision.

- **[#5156 — Telegram silently stalled polling](https://github.com/HKUDS/nanobot/pull/5156)**  
  Open since 2026-07-29. Fixes a serious production bug and should be prioritized, especially given the related observability PR #5301.

- **[#5204 — Declarative Responses capabilities](https://github.com/HKUDS/nanobot/pull/5204)**  
  Open since 2026-08-01, marked P1. Core provider refactor; prolonged status may block future provider work.

- **[#5266 — Token consumption logging issue](https://github.com/HKUDS/nanobot/issues/5266)**  
  High community interest (13 comments) and directly linked to an open feature PR (#5299). Needs maintainer confirmation of scope and merge path.

- **[#5305 / #5306 — `exec.allowPatterns` security bypass](https://github.com/HKUDS/nanobot/issues/5305)**  
  Filed 2026-08-09. These are not long-running items yet, but they require immediate maintainer attention and a fix release.

- **[#5255 — Truthful API service status](https://github.com/HKUDS/nanobot/pull/5255)**  
  Open draft since 2026-08-05; could improve WebUI reliability signaling once reviewed.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-10

## 1. Today's Overview
The project is in a high-activity stabilization phase: 50 issues and 50 PRs were updated in the last 24 hours (47 issues / 46 PRs still open), with no new releases published. Desktop stability and session-state integrity dominate the tracker — a P0 silent message-deletion bug ([#82756](https://github.com/NousResearch/hermes-agent/issues/82756)) and a P1 desktop freeze ([#63047](https://github.com/NousResearch/hermes-agent/issues/63047)) both already have fix PRs in flight ([#82811](https://github.com/NousResearch/hermes-agent/pull/82811), [#82832](https://github.com/NousResearch/hermes-agent/pull/82832)). Parallel feature work is moving on cron job chaining ([#82827](https://github.com/NousResearch/hermes-agent/pull/82827)) and messaging/approval reliability ([#82825](https://github.com/NousResearch/hermes-agent/pull/82825), [#82835](https://github.com/NousResearch/hermes-agent/pull/82835)). Maintainer responsiveness is strong, but the recurrence of session-history-loss bugs (now a third occurrence) is the clearest project-health risk.

## 2. Releases
No new releases in this window.

## 3. Project Progress
4 PRs were merged or closed in the last 24 hours; the only closure visible in the top-commented set is [#46634](https://github.com/NousResearch/hermes-agent/pull/46634) (full Russian desktop locale, closed as duplicate — the i18n effort may need consolidation). Three issues also closed, including the session-continuity tracking issue [#82616](https://github.com/NousResearch/hermes-agent/issues/82616) and a duplicate SSH bootstrap bug ([#82442](https://github.com/NousResearch/hermes-agent/issues/82442)). Most of today's PR activity is newly opened fixes:

- **Session/data integrity**: [#82811](https://github.com/NousResearch/hermes-agent/pull/82811) fixes the truncate-ordinal address space behind the P0 silent deletion ([#82756]); [#82832](https://github.com/NousResearch/hermes-agent/pull/82832) bounds inflight journal persistence targeting the desktop freeze ([#63047]); [#82794](https://github.com/NousResearch/hermes-agent/pull/82794) routes desktop session popouts to their owning profile; [#82834](https://github.com/NousResearch/hermes-agent/pull/82834) keeps steer provenance in runtime roles.
- **Platform/terminal fixes**: [#82833](https://github.com/NousResearch/hermes-agent/pull/82833) fixes pipe-mode background shells wedging the terminal; [#82828](https://github.com/NousResearch/hermes-agent/pull/82828) stops legacy plugin rows from crashing desktop Settings; [#82825](https://github.com/NousResearch/hermes-agent/pull/82825) preserves approval-card content on Telegram/Feishu; [#82809](https://github.com/NousResearch/hermes-agent/pull/82809) treats empty-bodied 400s from local llama.cpp as transient.
- **Security hardening**: [#82829](https://github.com/NousResearch/hermes-agent/pull/82829) keeps vault tokens out of CLI process surfaces; [#82830](https://github.com/NousResearch/hermes-agent/pull/82830) is the standalone split of the approval hardline-floor fix from [#71996](https://github.com/NousResearch/hermes-agent/pull/71996); [#82837](https://github.com/NousResearch/hermes-agent/pull/82837) adds a sixth "Do NOT capture" class for background review.
- **Features**: [#82827](https://github.com/NousResearch/hermes-agent/pull/82827) adds reactive cron chaining via `trigger_on_complete`; [#82826](https://github.com/NousResearch/hermes-agent/pull/82826) gives scheduled jobs their actual run time; [#82835](https://github.com/NousResearch/hermes-agent/pull/82835) gates Photon setup on real iMessage opt-in.

## 4. Community Hot Topics
- [#63047](https://github.com/NousResearch/hermes-agent/issues/63047) (19 comments) — Desktop app completely unresponsive (including Settings) after ~5 messages on macOS 27 beta. The most-discussed issue; users are seeking workarounds while the persistence fix ([#82832](https://github.com/NousResearch/hermes-agent/pull/82832)) is under review.
- [#26689](https://github.com/NousResearch/hermes-agent/issues/26689) (13 comments, 1 👍) — Accessibility for blind VoiceOver users. Sustained interest in making the desktop app screen-reader-usable.
- [#82616](https://github.com/NousResearch/hermes-agent/issues/82616) (7 comments) — Gateway session continuity broken by state.db FTS corruption; discussion focused on preventing orphan session forks and stale-session resumes after restart.
- [#66824](https://github.com/NousResearch/hermes-agent/issues/66824) / [#71987](https://github.com/NousResearch/hermes-agent/issues/71987) (6 comments each) — Duplicate reports of the same cron `TypeError: '<=' not supported between instances of 'str' and 'int'` on create/update. Two reports signal a core automation path that remains broken.
- [#41889](https://github.com/NousResearch/hermes-agent/issues/41889) (5 comments, 1 👍) — Cross-profile subagent support in `delegate_task`; tagged `needs-decision`.

Underlying needs: session-state integrity and data-loss prevention, desktop reliability, screen-reader accessibility, and dependable cron automation.

## 5. Bugs & Stability
Ranked by severity:

- **P0 – Silent session-history deletion**: [#82756](https://github.com/NousResearch/hermes-agent/issues/82756) — Desktop plain-Enter submit deleted ~65 messages via stale `truncate_before_user_ordinal` plus auto-attached `confirm_truncate`. Third occurrence after [#70516](https://github.com/NousResearch/hermes-agent/issues/70516) (308 messages) and [#80763](https://github.com/NousResearch/hermes-agent/issues/80763) (244 messages). Fix PR: [#82811](https://github.com/NousResearch/hermes-agent/pull/82811).
- **P1 – Desktop freeze**: [#63047](https://github.com/NousResearch/hermes-agent/issues/63047) — App fully unresponsive (including Settings) after ~5 messages on macOS 27 beta. Fix PR: [#82832](https://github.com/NousResearch/hermes-agent/pull/82832).
- **P1 – Test-data contamination**: [#82770](https://github.com/NousResearch/hermes-agent/issues/82770) — 700+ junk open session rows leaked from test fixtures into a production `state.db`.
- **P2 – Local llama.cpp aborts**: [#82805](https://github.com/NousResearch/hermes-agent/issues/82805) — Intermittent empty-bodied HTTP 400 kills whole turns; pooled httpx client reuses a connection closed after SSE. Fix PR: [#82809](https://github.com/NousResearch/hermes-agent/pull/82809).
- **P2 – Usage accounting**: [#82831](https://github.com/NousResearch/hermes-agent/issues/82831) — `normalize_usage` silently records 0 reasoning tokens when usage details are plain dicts.
- **P2 – Update/install repair gaps**: [#77211](https://github.com/NousResearch/hermes-agent/issues/77211) (`hermes update` never repairs a failed npm install on an already-current checkout); [#77753](https://github.com/NousResearch/hermes-agent/issues/77753) (macOS in-app update deadlocks on a stale staged updater binary).
- **P2 – Gateway/platform**: [#78190](https://github.com/NousResearch/hermes-agent/issues/78190) (Gmail MCP OAuth Registration failed 404 on `/register` in gateway); [#80125](https://github.com/NousResearch/hermes-agent/issues/80125) (WeCom `ret=-2` misreported as rate limit, hiding missing `context_token`); [#80841](https://github.com/NousResearch/hermes-agent/issues/80841) (Fastmail `delete_event` confirmation widget cannot be completed from CLI/TUI/Matrix); [#75097](https://github.com/NousResearch/hermes-agent/issues/75097) (iteration-budget semantics diverge).
- **P2 – Windows plugin crash**: [#80560](https://github.com/NousResearch/hermes-agent/issues/80560) — React #310 crash at boot whenever any desktop plugin is installed on Windows 11 (v0.20.0).
- **P3 – Desktop/UX glitches**: [#82836](https://github.com/NousResearch/hermes-agent/issues/82836) (mermaid zoom opens blank dialog); [#82806](https://github.com/NousResearch/hermes-agent/issues/82806) (prompts and timeline disappear after macOS sleep); [#82807](https://github.com/NousResearch/hermes-agent/issues/82807) (sidebar title clipped on hover); [#81055](https://github.com/NousResearch/hermes-agent/issues/81055) (dead TOC fragment links in markdown preview); [#82812](https://github.com/NousResearch/hermes-agent/issues/82812) (`skill_view` fails on unquoted YAML dates).
- **P3 – Model visibility/tooling**: [#46064](https://github.com/NousResearch/hermes-agent/issues/46064) (OpenRouter router models silently dropped from `hermes model`); [#79314](https://github.com/NousResearch/hermes-agent/issues/79314) (Edge TTS silently falls back to whole-response synthesis despite documented sentence streaming).

## 6. Feature Requests & Roadmap Signals
- **Cron job chaining** ([#15831](https://github.com/NousResearch/hermes-agent/issues/15831), open since Apr 26) now has an implementation — [#82827](https://github.com/NousResearch/hermes-agent/pull/82827) adds `trigger_on_complete`; a strong candidate for the next release. Companion PR [#82826](https://github.com/NousResearch/hermes-agent/pull/82826) injects actual run time into scheduled prompts.
- **VoiceOver accessibility** ([#26689](https://github.com/NousResearch/hermes-agent/issues/26689)) remains the most-commented feature request; sustained demand makes it a likely roadmap item despite the P3 label.
- **Cross-profile subagents** ([#41889](https://github.com/NousResearch/hermes-agent/issues/41889)) — `delegate_task` under a specified profile's identity/runtime; still in `needs-decision`.
- **Kanban governance** — the epic [#82591](https://github.com/NousResearch/hermes-agent/issues/82591) (zero-authority workers, durable publication, safe reclaim) and [#82689](https://github.com/NousResearch/hermes-agent/issues/82689) (no operator audit before side-effectful task execution) point to demand for guardrails on autonomous automation.
- **Other in-flight feature PRs**: [#67696](https://github.com/NousResearch/hermes-agent/pull/67696) (first-class `none`/`unlimited` for `agent.max_turns`), [#70854](https://github.com/NousResearch/hermes-agent/pull/70854) (persistent desktop Run Board), [#18188](https://github.com/NousResearch/hermes-agent/pull/18188) (opt-in gateway runtime footer metadata).

## 7. User Feedback Summary
- **Data loss is the top trust issue**: three silent transcript-deletion incidents ([#82756](https://github.com/NousResearch/hermes-agent/issues/82756), [#70516](https://github.com/NousResearch/hermes-agent/issues/70516), [#80763](https://github.com/NousResearch/hermes-agent/issues/80763)) are the most damaging UX failures in the current tracker.
- **Desktop reliability on macOS is strained**: freezes ([#63047](https://github.com/NousResearch/hermes-agent/issues/63047)) and post-sleep transcript loss ([#82806](https://github.com/NousResearch/hermes-agent/issues/82806)) disrupt daily use; macOS 27 beta amplifies the issues.
- **Accessibility gap**: a totally blind user describes Hermes' backend as "extremely powerful" but the desktop UX as very difficult for screen-reader users ([#26689](https://github.com/NousResearch/hermes-agent/issues/26689)).
- **Automation users are blocked**: cron create/update is broken for recurring/`forever` schedules ([#66824](https://github.com/NousResearch/hermes-agent/issues/66824), [#71987](https://github.com/NousResearch/hermes-agent/issues/71987)), and MCP confirmation flows are not completable from CLI/TUI/Matrix ([#80841](https://github.com/NousResearch/hermes-agent/issues/80841)).
- **Update friction**: users are told to "re-run `hermes update`" when that path cannot repair a failed install ([#77211](https://github.com/NousResearch/hermes-agent/issues/77211), [#77753](https://github.com/NousResearch/hermes-agent/issues/77753)).
- **Positive signal**: reports are increasingly high-quality with root-cause analysis (e.g., [#82756](https://github.com/NousResearch/hermes-agent/issues/82756), [#82805](https://github.com/NousResearch/hermes-agent/issues/82805), [#80125](https://github.com/NousResearch/hermes-agent/issues/80125)), indicating a technically engaged and cooperative user base.

## 8. Backlog Watch
- [#26689](https://github.com/NousResearch/hermes-agent/issues/26689) — Accessibility/VoiceOver support; open since May 16, 13 comments, no maintainer decision recorded.
- [#66824](https://github.com/NousResearch/hermes-agent/issues/66824) / [#71987](https://github.com/NousResearch/hermes-agent/issues/71987) — cron `repeat='forever'` TypeError; first reported July 18, duplicated July 26, still unfixed and affects a core tool.
- [#46064](https://github.com/NousResearch/hermes-agent/issues/46064) — OpenRouter router models hidden from `hermes model`; open since June 14 with no fix PR.
- [#41889](https://github.com/NousResearch/hermes-agent/issues/41889) — Cross-profile `delegate_task`; open since June 8, tagged `needs-decision`.
- [#18188](https://github.com/NousResearch/hermes-agent/pull/18188) — Opt-in gateway footer metadata; PR open since May 1, awaiting review/merge.
- [#67696](https://github.com/NousResearch/hermes-agent/pull/67696) — `agent.max_turns` unlimited support; PR open since July 19.
- **Watch item**: [#15831](https://github.com/NousResearch/hermes-agent/issues/15831) is the oldest open feature request (Apr 26) and now has an implementation ([#82827](https://github.com/NousResearch/hermes-agent/pull/82827)) — needs maintainer review to close the loop.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-10

## Today's Overview

PicoClaw saw a moderate burst of activity over the last 24 hours: 3 issues were updated (2 open, 1 closed) and 6 PRs were touched (5 open, 1 closed), with no new releases. The most significant work is security-oriented — three open PRs focus on SSRF hardening for media downloads across WeChat/Weixin, WeCom, and generic channel attachment handling. On the feature side, a Telegram rich-table request was filed and immediately followed by an implementation PR. A stale Matrix reliability bug was closed without a code fix, while a small frontend lockfile issue was closed as fixed. Overall, the project is active and healthy, though several important PRs and reliability issues still need maintainer attention.

## Releases

No new releases in the last 24 hours.

## Project Progress

- [#3326 [CLOSED] fix(web): remove duplicate pnpm lock entries](https://github.com/sipeed/picoclaw/pull/3326) — Closed. Removes duplicate `semver@7.8.5` mappings from `web/frontend/pnpm-lock.yaml`, fixing `ERR_PNPM_BROKEN_LOCKFILE` during frozen installs.
- New open PRs advancing stability/features:
  - [#3327 feat(telegram): render tables with native rich messages](https://github.com/sipeed/picoclaw/pull/3327)
  - [#3324 fix(weixin): use CreateSafeHTTPClient for media downloads](https://github.com/sipeed/picoclaw/pull/3324)
  - [#3323 fix(wecom): use CreateSafeHTTPClient for media downloads](https://github.com/sipeed/picoclaw/pull/3323)
  - [#3322 fix(channels): block private targets on inbound media downloads](https://github.com/sipeed/picoclaw/pull/3322)
  - [#3222 refactor(deltachat): cleanup implementation, documentation -200LOC](https://github.com/sipeed/picoclaw/pull/3222)

## Community Hot Topics

- [#3203 [CLOSED] [BUG] Matrix sync loop has no reconnection logic](https://github.com/sipeed/picoclaw/issues/3203) — 8 comments, 2 👍. This was the most active thread. Users are concerned that Matrix integration dies silently after network/server disruption, no automatic reconnect happens, and systemd restarts are not triggered because the main process stays alive. The issue was closed as stale, but the underlying reliability concern remains real.
- [#3287 [OPEN] [Feature] Better support long messages in IRC](https://github.com/sipeed/picoclaw/issues/3287) — 4 comments. Users want PicoClaw to reassemble IRCv3 split messages into a single cohesive message rather than treating each chunk separately.
- [#3325 [OPEN] [Feature] Render Telegram tables with rich messages](https://github.com/sipeed/picoclaw/issues/3325) — New issue with an immediate companion PR [#3327](https://github.com/sipeed/picoclaw/pull/3327). Users want proper Telegram native table rendering instead of monospaced code blocks.

The underlying theme is clear: users care about production reliability, bridge resilience, and preserving rich formatting across chat platforms.

## Bugs & Stability

Ranked by severity:

1. **SSRF exposure in media downloads — High**  
   Multiple open PRs ([#3322](https://github.com/sipeed/picoclaw/pull/3322), [#3323](https://github.com/sipeed/picoclaw/pull/3323), [#3324](https://github.com/sipeed/picoclaw/pull/3324)) address a serious issue where crafted media URLs can redirect to loopback, link-local, or RFC1918 private hosts. Fixes use `utils.CreateSafeHTTPClient` / `ValidateSafeHTTPURL` / `BlockPrivateTargets`. These need review and merge.

2. **Matrix sync loop silent death — Medium**  
   [#3203](https://github.com/sipeed/picoclaw/issues/3203) documents a bug where the Matrix `/sync` long-poll connection dies permanently after network/homeserver disruption. No reconnection logic exists, and systemd `Restart=on-failure` does not help because the main process stays alive. The issue was closed as stale with no code fix.

3. **Broken frontend lockfile — Low**  
   [#3326](https://github.com/sipeed/picoclaw/pull/3326) fixed duplicate entries in `web/frontend/pnpm-lock.yaml` that broke `pnpm install --frozen-lockfile`. This is resolved in the closed PR.

## Feature Requests & Roadmap Signals

- **Telegram native table rendering** has the strongest near-term signal: [#3325](https://github.com/sipeed/picoclaw/issues/3325) was filed and implemented in the same day by PR [#3327](https://github.com/sipeed/picoclaw/pull/3327). Likely to land in the next release.
- **IRC long-message support** ([#3287](https://github.com/sipeed/picoclaw/issues/3287)) remains an open feature request. No implementation PR yet, but it could be a next roadmap item.
- **DeltaChat cleanup** ([#3222](https://github.com/sipeed/picoclaw/pull/3222)) is a large refactor reducing code by ~200 lines, removing legacy fallbacks, and simplifying configuration. It is still open and may signal upcoming DeltaChat-related roadmap work.

## User Feedback Summary

- Matrix users are frustrated by silent bridge death and lack of reconnection signaling; the process stays alive so operators do not get automatically alerted or restarted.
- IRC users want long messages to be treated as one logical message, not multiple fragmented ones.
- Telegram users want structured tables rendered natively rather than degraded to plain text or code blocks.
- There is also a positive signal: contributors are proactively hardening media download paths against SSRF/private-network abuse, which suggests good security awareness and responsive maintenance.

## Backlog Watch

- [#3203 Matrix sync loop no reconnection logic](https://github.com/sipeed/picoclaw/issues/3203) — Closed as stale, but the bug itself has no known fix. Worth reopening or creating a follow-up for real reconnection/health-check support.
- [#3287 Better support long messages in IRC](https://github.com/sipeed/picoclaw/issues/3287) — Open since 2026-07-22 with 4 comments, no implementation yet.
- [#3222 refactor(deltachat): cleanup implementation](https://github.com/sipeed/picoclaw/pull/3222) — Open since 2026-07-03, no visible maintainer/comment activity in the provided data; needs review.
- [#3322](https://github.com/sipeed/picoclaw/pull/3322), [#3323](https://github.com/sipeed/picoclaw/pull/3323), [#3324](https://github.com/sipeed/picoclaw/pull/3324) — New security-hardening PRs should be prioritized for review and merge.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-10

## Today's Overview

NanoClaw saw moderate activity over the last 24 hours: 1 open issue was filed/updated, and 16 pull requests were updated, but no PRs were merged or closed and no new releases were published. The current PR pipeline is weighted toward internal refactoring, channel fixes, container security, and documentation. The single new issue, [#3217](https://github.com/nanocoai/nanoclaw/issues/3217), identifies a real adoption blocker for Python-dependent installs on the hardened image path. Overall, the project appears healthy but in a consolidation phase, with a substantial open PR backlog awaiting review and merge.

## Releases

None. No new releases were published in the last 24 hours, so there are no changelog entries, breaking changes, or migration notes to report.

## Project Progress

- **Merged/closed PRs today:** 0.
- **Open PRs updated today:** 16.

No user-visible features landed in this window. However, notable open PRs advanced or remain active:

- [#3218](https://github.com/nanocoai/nanoclaw/pull/3218) — Add `--stdin-json` bounded JSON input for `ncl` clients.
- [#3215](https://github.com/nanocoai/nanoclaw/pull/3215) — Redact DM resolution logs.
- [#3214](https://github.com/nanocoai/nanoclaw/pull/3214), [#3213](https://github.com/nanocoai/nanoclaw/pull/3213), [#3212](https://github.com/nanocoai/nanoclaw/pull/3212), [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) — Refactors for lifecycle hooks, renderer registration, migration registry, and skill-owned capabilities.
- [#3207](https://github.com/nanocoai/nanoclaw/pull/3207) — Fix critical `tar` CVE exposed through npm/pnpm in the agent image.
- [#3208](https://github.com/nanocoai/nanoclaw/pull/3208) — Publish agent image to Docker Hub with CVE gates.
- [#2529](https://github.com/nanocoai/nanoclaw/pull/2529), [#3142](https://github.com/nanocoai/nanoclaw/pull/3142), [#3209](https://github.com/nanocoai/nanoclaw/pull/3209) — Fixes for inbound attachments in Signal and Slack.

## Community Hot Topics

- [#3217](https://github.com/nanocoai/nanoclaw/issues/3217) — **Install packages has no pip channel.** This is the only active issue created in the window. It blocks Python-dependent installs from using the hardened prebuilt image path. The underlying need is clear: `install_packages` should support `packages_pip` or an equivalent channel, otherwise Python agents cannot benefit from hardened images.
- [#3207](https://github.com/nanocoai/nanoclaw/pull/3207) and [#3208](https://github.com/nanocoai/nanoclaw/pull/3208) — Container security and CVE-gated publishing are attracting core-team attention.
- [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) and [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) — The proposed Dial channel adapter (SMS + AI voice calls) and setup-wizard integration remain active after several weeks, suggesting sustained interest in expanding channel coverage.

Comment/reaction data was not provided for these PRs, so the above is based on recency, thematic weight, and issue/PR substance.

## Bugs & Stability

Ranked by severity:

1. **Missing pip support in `install_packages`** — [#3217](https://github.com/nanocoai/nanoclaw/issues/3217)  
   Open issue, no fix PR yet. Blocks hardened-image adoption for Python-dependent installs. A companion docs PR, [#3216](https://github.com/nanocoai/nanoclaw/pull/3216), documents the limitation but does not resolve it.

2. **Critical `tar` CVE in agent image** — [#3207](https://github.com/nanocoai/nanoclaw/pull/3207)  
   Grype reports a fixable critical CVE (`GHSA-23hp-3jrh-7fpw`) in two vendored `tar` copies via npm and pnpm. A fix PR is open and should be prioritized.

3. **Inbound attachments dropped or unreachable** — [#2529](https://github.com/nanocoai/nanoclaw/pull/2529), [#3142](https://github.com/nanocoai/nanoclaw/pull/3142)  
   Signal attachments were either dropped or pointed at a path not mounted into the agent container. Both fix PRs remain open.

4. **Slack pasted tables not surfaced to the agent** — [#3209](https://github.com/nanocoai/nanoclaw/pull/3209)  
   Usability bug affecting Slack channel data fidelity; fix PR is open.

5. **DM resolution logs not redacted** — [#3215](https://github.com/nanocoai/nanoclaw/pull/3215)  
   Privacy-sensitive logging issue with an open fix PR.

## Feature Requests & Roadmap Signals

- **Python/pip package channel** — [#3217](https://github.com/nanocoai/nanoclaw/issues/3217) is the clearest near-term roadmap signal. If accepted, `install_packages`/`container_configs` will likely gain Python package support in the next release.
- **Structured CLI input** — [#3218](https://github.com/nanocoai/nanoclaw/pull/3218) adds `--stdin-json`; this could land soon as a self-contained CLI enhancement.
- **Dial channel integration** — [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) and [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) would add SMS and AI voice calling support, plus setup-wizard integration. These are longer-running feature PRs and strong candidates for a future release.
- **Docker Hub publishing with CVE gates** — [#3208](https://github.com/nanocoai/nanoclaw/pull/3208) suggests the team is moving toward formalized release/CI infrastructure.
- **Module/skill architecture refactors** — [#3212](https://github.com/nanocoai/nanoclaw/pull/3212), [#3213](https://github.com/nanocoai/nanoclaw/pull/3213), [#3214](https://github.com/nanocoai/nanoclaw/pull/3214), and [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) point toward a more pluggable host/channel/database architecture.

## User Feedback Summary

- **Pain point:** Python-dependent installs cannot use the hardened prebuilt image because `install_packages` only supports apt and npm ([#3217](https://github.com/nanocoai/nanoclaw/issues/3217)).
- **Pain point:** Inbound attachments in Signal and Slack were dropped, unreachable, or invisible to the agent, hurting real-world channel usability ([#2529](https://github.com/nanocoai/nanoclaw/pull/2529), [#3142](https://github.com/nanocoai/nanoclaw/pull/3142), [#3209](https://github.com/nanocoai/nanoclaw/pull/3209)).
- **Security sensitivity:** Community and core-team PRs are proactively addressing critical CVEs, log redaction, and Docker Hub publishing with CVE gates ([#3207](https://github.com/nanocoai/nanoclaw/pull/3207), [#3208](https://github.com/nanocoai/nanoclaw/pull/3208), [#3215](https://github.com/nanocoai/nanoclaw/pull/3215)).
- **Documentation needs:** Users/contributors are asking for clearer docs on where attachments land and what `install_packages` actually covers ([#3216](https://github.com/nanocoai/nanoclaw/pull/3216), [#3210](https://github.com/nanocoai/nanoclaw/pull/3210)).

No explicit satisfaction surveys or rating data were included; the above is inferred from issue/PR content.

## Backlog Watch

- [#2529](https://github.com/nanocoai/nanoclaw/pull/2529) — `fix(signal): deliver inbound attachments to the agent instead of dropping them`  
  Open since **May 18**, still unmerged; updated Aug 9.

- [#3142](https://github.com/nanocoai/nanoclaw/pull/3142) — Fix Signal image/file attachments through the mounted inbox instead of a dead path  
  Open since **Jul 27**, still unmerged; updated Aug 9.

- [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) and [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) — Dial channel adapter plus setup-wizard integration  
  Open since **Jul 14**, still unmerged; updated Aug 9.

- [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) — Refactor: host seams for skill-owned capabilities  
  Open since **Aug 4**, still unmerged; updated Aug 9.

These PRs have been active but not merged and likely need maintainer attention or review decisions.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-10

## 1. Today's Overview

IronClaw is in a high-velocity bug-fixing and hardening phase: 22 issues were updated in the last 24 hours (15 open, 7 closed) and 27 PRs were updated (19 open, 8 merged/closed), with no new releases published. Activity is concentrated on WebUI regressions, tool discovery/performance, outbound delivery correctness, new notification channels, and routine dependency bumps. Several recently reported P2 QA bugs already have matching fix PRs open from automated and core contributors, including emoji rendering, activity chronology, automation count mismatches, and unsupported streaming Responses API requests. Overall project health is active but pressured: many P2 regressions are being triaged quickly, while one high-severity API bug remains unresolved.

## 2. Releases

No new releases were published in this window.

## 3. Project Progress

Visible merged/closed PRs in the last 24 hours:

- [PR #7171](https://github.com/nearai/ironclaw/pull/7171) — `fix(skills)`: one DB-backed tree for every skill mount, and makes a skill's own commands runnable. Closes issue #7168.
- [PR #7387](https://github.com/nearai/ironclaw/pull/7387) — `chore(deps)`: bumped the "everything-else" dependency group with 12 updates.
- [PR #7022](https://github.com/nearai/ironclaw/pull/7022) — `chore(deps)`: bumped GitHub Actions dependencies (setup-node, docker/login-action).

Several important fixes are still open but close to landing:

- [PR #7404](https://github.com/nearai/ironclaw/pull/7404) — renders emoji shortcodes in chat Markdown, fixing #7346.
- [PR #7403](https://github.com/nearai/ironclaw/pull/7403) — fixes WebUI activity chronology, addressing #7348.
- [PR #7402](https://github.com/nearai/ironclaw/pull/7402) — reports exact automation totals, addressing #7345.
- [PR #7401](https://github.com/nearai/ironclaw/pull/7401) — rejects `stream: true` Responses requests with external tools, preventing the zombie-thread case in #7400 before submission.

## 4. Community Hot Topics

- [Issue #5522](https://github.com/nearai/ironclaw/issues/5522) — closed, 4 comments. The most-discussed item: a Reborn routine fails when a task requires reading Slack DMs because the agent has no Slack read capability and enters a `capability_info` retry loop. This points to a broader need for clearer capability advertising and better failure behavior when integrations are missing.
- [Issue #7400](https://github.com/nearai/ironclaw/issues/7400) — open, 2 comments. High-severity API bug: `stream: true` with caller-provided `tools[]` on `/api/v1/responses` fails mid-stream and leaves an undeletable zombie thread. Developers are likely watching this because it affects stable v1.1.0 users and is 100% reproducible.
- [Issue #7405](https://github.com/nearai/ironclaw/issues/7405) and [Issue #7407](https://github.com/nearai/ironclaw/issues/7407) — open, 2 comments each. Both are enhancement discussions around tool efficiency: complete tool signatures during deferred discovery and concurrent execution of `BatchPolicy::Parallel` capability batches. These represent roadmap-driven work to reduce model turns and improve tool-call throughput.
- [Issues #7346](https://github.com/nearai/ironclaw/issues/7346), [#7348](https://github.com/nearai/ironclaw/issues/7348), [#7349](https://github.com/nearai/ironclaw/issues/7349), and [#7345](https://github.com/nearai/ironclaw/issues/7345) — each with 2 comments. QA users are reporting WebUI regressions around rendering, execution ordering, history persistence, and automation count consistency. The cluster indicates a need for more robust frontend/SSE state synchronization.

## 5. Bugs & Stability

Ranked by severity:

- **High — [Issue #7400](https://github.com/nearai/ironclaw/issues/7400):** `stream: true` + caller `tools[]` on `/api/v1/responses` fails mid-stream and creates a permanently undeletable zombie thread. Affects 1.1.0-rc.1 and 1.1.0 stable. Fix PR [#7401](https://github.com/nearai/ironclaw/pull/7401) rejects the unsupported combination with a stable `400` rather than making the combination work; root-cause streaming support with external tools is still not implemented.
- **P1, closed — [Issue #7292](https://github.com/nearai/ironclaw/issues/7292):** Installed CoinGecko tool could not be used; run failed with a runner heartbeat error. Closed, but noteworthy because it affects core tool-install trust.
- **P2 — [Issue #7346](https://github.com/nearai/ironclaw/issues/7346):** Emoji shortcodes render as raw text in assistant messages. Fix PR [#7404](https://github.com/nearai/ironclaw/pull/7404) is open.
- **P2 — [Issue #7348](https://github.com/nearai/ironclaw/issues/7348):** Activity tool calls and progress messages appear in the wrong chronological order. Fix PR [#7403](https://github.com/nearai/ironclaw/pull/7403) is open.
- **P2 — [Issue #7349](https://github.com/nearai/ironclaw/issues/7349):** Refreshing the chat page causes part of run history and Activity timeline to disappear. No fix PR is visible yet.
- **P2 — [Issue #7345](https://github.com/nearai/ironclaw/issues/7345):** Agent reports 61 automations while the UI shows 50. Fix PR [#7402](https://github.com/nearai/ironclaw/pull/7402) is open.
- **P2 — [Issue #5882](https://github.com/nearai/ironclaw/issues/5882):** Repeated Slack reconnect attempts leave authentication in a broken "Waiting for Slack..." state and require extension reinstall. No fix PR is visible.
- **P2 — [Issue #5552](https://github.com/nearai/ironclaw/issues/5552), closed:** Multiple tool failures produce a generic "invalid result" with no per-tool diagnostics; the root UX issue may still deserve follow-up.
- **P2 — [Issue #5509](https://github.com/nearai/ironclaw/issues/5509), closed:** Chat creation latency scales with accumulated conversation history.
- **P2 — [Issue #6046](https://github.com/nearai/ironclaw/issues/6046):** A simple email-to-sheet workflow results in 124 tool invocations. No fix PR is visible.
- **P2 — [Issue #6479](https://github.com/nearai/ironclaw/issues/6479):** Routines can create or modify other routines, risking self-replicating automations. No guardrail/fix PR is visible.
- **P2 — [Issue #5878](https://github.com/nearai/ironclaw/issues/5878):** Revoked GitHub token produces misleading errors instead of triggering re-authentication. No fix PR is visible.
- **P2 — [Issue #5551](https://github.com/nearai/ironclaw/issues/5551):** Slack-triggered automations post intermediate progress messages instead of final results. No fix PR is visible.
- **P3, closed — [Issue #5510](https://github.com/nearai/ironclaw/issues/5510):** Users could not delete old routines without a full restart.

## 6. Feature Requests & Roadmap Signals

- [Issue #7405](https://github.com/nearai/ironclaw/issues/7405) — Improve deferred tool discovery with complete signatures and namespace-aware catalog previews. Stacked PRs [#7409](https://github.com/nearai/ironclaw/pull/7409) (baseline catalogs at 100–1,000 tools) and [#7410](https://github.com/nearai/ironclaw/pull/7410) (bounded complete signatures) are already open.
- [Issue #7407](https://github.com/nearai/ironclaw/issues/7407) — Execute `BatchPolicy::Parallel` capability batches concurrently in `invoke_capability_batch`, with zero model-facing changes.
- [Issue #7360](https://github.com/nearai/ironclaw/issues/7360) — Expand stress coverage across built-in and durable write paths to prevent regressions in capability writes.
- [Issue #7166](https://github.com/nearai/ironclaw/issues/7166) — Epic labeled `v1.2.0`: tool disclosure follow-up after progressive tool disclosure became the Reborn default.
- [Issue #7392](https://github.com/nearai/ironclaw/issues/7392) — Epic experiment: replace first-party coding tools with the pinned `omp` tool surface from `can1357/oh-my-pi`.
- [PR #7398](https://github.com/nearai/ironclaw/pull/7398) — Adds browser push notifications + PWA support, making the web app a first-party notification channel.
- [PR #7396](https://github.com/nearai/ironclaw/pull/7396) — Adds channel-neutral progressive previews for Slack and Telegram.
- [PR #7131](https://github.com/nearai/ironclaw/pull/7131) — Delivers triggered run failures to the run creator instead of recording them silently.

Likely next-version signals: v1.2.0 appears aligned with tool disclosure follow-up, tool-search signature improvements, parallel batch execution, and new notification-channel features such as web-push and progressive previews.

## 7. User Feedback Summary

- **Integration/auth friction is a recurring theme.** Users report broken Slack reconnect flows ([#5882](https://github.com/nearai/ironclaw/issues/5882)), misleading errors after GitHub token revocation ([#5878](https://github.com/nearai/ironclaw/issues/5878)), and installed tools that fail at runtime ([#7292](https://github.com/nearai/ironclaw/issues/7292)).
- **Routine/automation behavior does not yet match user expectations.** Slack DM reading is missing as a capability ([#5522](https://github.com/nearai/ironclaw/issues/5522)), Slack automations can post intermediate progress instead of final results ([#5551](https://github.com/nearai/ironclaw/issues/5551)), simple workflows over-invoke tools ([#6046](https://github.com/nearai/ironclaw/issues/6046)), and routines can self-replicate ([#6479](https://github.com/nearai/ironclaw/issues/6479)).
- **WebUI trust is being strained by P2 regressions.** Users see raw emoji shortcodes ([#7346](https://github.com/nearai/ironclaw/issues/7346)), incorrect activity ordering ([#7348](https://github.com/nearai/ironclaw/issues/7348)), disappearing history after refresh ([#7349](https://github.com/nearai/ironclaw/issues/7349)), and inconsistent automation counts ([#7345](https://github.com/nearai/ironclaw/issues/7345)).
- **API/developer users are hitting contract-level issues.** The `stream: true` + `tools[]` zombie-thread bug ([#7400](https://github.com/nearai/ironclaw/issues/7400)) is a clear dissatisfaction point because it leaves undeletable state in production databases.

Overall, users are getting value from IronClaw's automation and tool ecosystem, but satisfaction is tempered by auth-flow brittleness, UI consistency problems, and a few severe API edge cases. The fast appearance of fix PRs for the newest QA regressions is a positive signal.

## 8. Backlog Watch

These items are significant, still open, and do not yet have a visible fix PR linked:

- [Issue #5882](https://github.com/nearai/ironclaw/issues/5882) — Repeated Slack reconnect attempts leave auth flow broken. Created 2026-07-09, updated 2026-08-09, 2 comments.
- [Issue #5878](https://github.com/nearai/ironclaw/issues/5878) — Revoked GitHub token produces misleading errors instead of re-auth flow. Created 2026-07-09, updated 2026-08-09, 1 comment.
- [Issue #6046](https://github.com/nearai/ironclaw/issues/6046) — Simple email-to-sheet workflow invokes 124 tools. Created 2026-07-13, updated 2026-08-09, 1 comment.
- [Issue #6479](https://github.com/nearai/ironclaw/issues/6479) — Routines can create/modify other routines, risking self-replicating automations. Created 2026-07-22, updated 2026-08-09, 1 comment.
- [Issue #5551](https://github.com/nearai/ironclaw/issues/5551) — Automation posts intermediate progress to Slack instead of final result. Created 2026-07-02, updated 2026-08-09, 1 comment.

PRs that may need maintainer or reviewer attention:

- [PR #7076](https://github.com/nearai/ironclaw/pull/7076) — "Install the packages the catalog already publishes" by a new contributor, size XL, created 2026-08-03, rebased onto current main but still open.
- [PR #7020](https://github.com/nearai/ironclaw/pull/7020) — `tokio-tungstenite` dependency bump, open since 2026-08-02.
- [PR #7262](https://github.com/nearai/ironclaw/pull/7262) — Wasm toolchain dependency bump, open since 2026-08-05.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-10

## 1. Today's Overview

LobsterAI saw relatively low development activity in the last 24 hours: no pull requests were updated and no new releases were published. Three open issues were active, with one newly created and two existing issues receiving updates after being marked as stale. All currently tracked issues remain open, indicating that no fix or feature PR landed today. Community engagement is centered around model configuration and cross-model collaboration, primarily from Chinese-speaking users. Overall project health appears stable but with a growing backlog of configuration-related and architectural issues that may need maintainer attention.

## 2. Releases

No new releases were published in the last 24 hours. This section is omitted.

## 3. Project Progress

There were no merged or closed pull requests in the last 24 hours. No new features or fixes were officially advanced through PRs during this period.

## 4. Community Hot Topics

The following issues attracted the most attention in the last 24 hours:

- **[#1187] [stale] 建议在设置模型api的选项中增加上下文窗口大小设置和输出token设置**  
  Author: qxjysd | Created: 2026-04-01 | Updated: 2026-08-09 | Comments: 2 | 👍: 1  
  https://github.com/netease-youdao/LobsterAI/issues/1187  
  This is the most-reacted issue in the update window. It requests configurable context window size and output token settings for model APIs, after encountering `Context overflow: prompt too large for the model.` errors with DeepSeek. The discussion indicates a real compatibility mismatch between the configured model context limits and LobsterAI's actual handling.

- **[#2453] 切换自定义模型，被系统定义为不许可？**  
  Author: Alexandre0820 | Created: 2026-08-09 | Updated: 2026-08-09 | Comments: 1 | 👍: 0  
  https://github.com/netease-youdao/LobsterAI/issues/2453  
  A newly filed issue that is likely to become a hot topic. The user reports that switching to custom models defined as `custom_1/openai/gpt-oss-20b:free` is rejected because LobsterAI parses the model name as `provider/model` and misclassifies the provider as "OpenAI". This affects free models on OpenRouter and NVIDIA-hosted models, and is especially annoying when switching models within a thread.

- **[#2132] [stale] 跨模型子任务调用的问题**  
  Author: woxinsj | Created: 2026-06-09 | Updated: 2026-08-09 | Comments: 1 | 👍: 0  
  https://github.com/netease-youdao/LobsterAI/issues/2132  
  This issue discusses cross-model subtask collaboration where a main task (e.g., M3) delegates to a sub-agent (e.g., DeepSeek). The analysis found that a gateway-level function call (`call_function_...`) is neither in `sessions_list` nor in `subagents`, so it is not recognized as a spawned subtask. The author suggests improving notification and hand-off mechanisms between main and subtask models.

## 5. Bugs & Stability

Three issues were active today, two of which describe concrete bugs:

- **High: Custom model switching is rejected due to provider/model misclassification**  
  [#2453](https://github.com/netease-youdao/LobsterAI/issues/2453) — Custom models in the form `custom_1/OpenAI/gpt-oss-20b:free` are incorrectly treated as if the provider is OpenAI, causing the model to be flagged as not permitted. This breaks switching in active threads and affects OpenRouter and NVIDIA models. No fix PR exists yet.

- **Medium: Context overflow with DeepSeek models**  
  [#1187](https://github.com/netease-youdao/LobsterAI/issues/1187) — The system throws `Context overflow: prompt too large for the model.` The user is forced to use `/reset` or `/new` to recover. The root cause appears to be missing or incompatible context window settings. The request to expose context/output token configuration is a likely mitigation, not just a feature.

- **Low/Medium: Cross-model subtask calls not recognized**  
  [#2132](https://github.com/netease-youdao/LobsterAI/issues/2132) — A gateway-level function call is not tracked as a real subtask, so the main task does not receive completion/failure notifications across different models. This is both a design limitation and a potential correctness bug in multi-agent workflows. No fix PR was observed.

## 6. Feature Requests & Roadmap Signals

- **Configurable context window and output token settings** ([#1187](https://github.com/netease-youdao/LobsterAI/issues/1187)) — Users want the ability to set context window size and max output tokens per model API. This is a practical request that aligns with better handling of large prompts and model-specific limits. Given the recurring DeepSeek overflow error, this feature may be prioritized in a future release.

- **Cross-model subtask collaboration protocol** ([#2132](https://github.com/netease-youdao/LobsterAI/issues/2132)) — The issue proposes that when subtasks complete or hit blockers, they should proactively notify the main task. This suggests a roadmap item for making LobsterAI's multi-agent orchestration more robust across mixed model configurations.

- **Smarter model/provider recognition for custom models** ([#2453](https://github.com/netease-youdao/LobsterAI/issues/2453)) — Although filed as a bug, this also signals a need for more flexible model naming and provider mapping, especially for OpenRouter and NVIDIA-hosted models.

## 7. User Feedback Summary

Users are actively using LobsterAI with a variety of external model providers, including DeepSeek, OpenRouter, and NVIDIA. The main pain points are:

- DeepSeek sessions fail with large context prompts due to no configurable context limit.
- Switching custom models within an ongoing thread is blocked by a strict provider/model parsing rule.
- Cross-model multi-agent workflows do not behave like same-model subtask workflows — users expect the main agent to know when sub-tasks finish or encounter issues.

There is no direct praise or satisfaction signal in this data set; the tone is generally constructive, with users diagnosing the issues themselves and suggesting concrete fixes. The lack of maintainer responses in these issues may lead to user frustration over time.

## 8. Backlog Watch

Two issues are labeled stale and date back several months, yet remain open without visible resolution:

- **[#1187] Context/output token settings request** (stale, updated 2026-08-09)  
  https://github.com/netease-youdao/LobsterAI/issues/1187  
  Created 2026-04-01, has 2 comments and 1 👍. The stale label suggests it has not received maintainer attention. It is a clear, actionable configuration enhancement that could resolve a common error.

- **[#2132] Cross-model subtask invocation issue** (stale, updated 2026-08-09)  
  https://github.com/netease-youdao/LobsterAI/issues/2132  
  Created 2026-06-09. The issue includes a detailed root-cause analysis but no fix or maintainer acknowledgment. This is important for users relying on mixed-model agent workflows.

- **[#2453] Custom model switching rejection** (new, not stale)  
  https://github.com/netease-youdao/LobsterAI/issues/2453  
  This is the newest issue and could quickly escalate in priority if more users hit it. Maintainers should consider a quick fix to relax provider validation for custom model definitions.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-10

## Today’s Overview
Project activity over the last 24 hours was minimal but focused: 2 open bugs were updated, 1 pull request remains open, and no new releases were published. No PRs were merged or closed, meaning no feature or fix changes landed in this window. The open work centers on reliability issues: container runtime detection, heartbeat settings persistence, and vault recovery phrase handling. Overall, the project appears in a stable maintenance phase with triage and review awaiting maintainer attention.

## Releases
None. No new Moltis releases were published in the last 24 hours.

## Project Progress
No merged or closed PRs were recorded today, so no completed feature work or fixes can be attributed to this window.

- [PR #1186 — fix(vault): normalize recovery phrase before hashing](https://github.com/moltis-org/moltis/pull/1186) remains open. It proposes normalizing the recovery phrase (stripping dashes, uppercasing) before hashing, so vault unsealing and stored hash derivation are consistent.

## Community Hot Topics
No issues or PRs had notable comment activity or reactions in the last 24 hours. The most significant open items are:

- [Issue #1187 — Heartbeat settings UI silently resets fields not represented by the form](https://github.com/moltis-org/moltis/issues/1187) — suggests a UI/data persistence mismatch that could cause silent configuration loss.
- [Issue #1185 — Apple Container 1.x sandbox starts but Moltis treats it as not running](https://github.com/moltis-org/moltis/issues/1185) — reports a false-negative container status, which can break workflows that depend on accurate runtime state.
- [PR #1186 — fix(vault): normalize recovery phrase before hashing](https://github.com/moltis-org/moltis/pull/1186) — addresses a user-facing friction point in vault recovery.

Underlying needs: users want reliable, lossless configuration persistence, accurate container runtime detection, and forgiving vault recovery input handling.

## Bugs & Stability
Two open bugs were updated in the last 24 hours; neither has a linked fix PR yet.

1. **[Issue #1185 — Apple Container 1.x sandbox starts but Moltis treats it as not running](https://github.com/moltis-org/moltis/issues/1185)**  
   Severity: High (if container state is misread, dependent automation and status reporting break). The sandbox starts successfully, but Moltis’s runtime detection fails.

2. **[Issue #1187 — Heartbeat settings UI silently resets fields not represented by the form](https://github.com/moltis-org/moltis/issues/1187)**  
   Severity: Medium–High (silent settings loss is dangerous for users who do not know the UI is incomplete). Fields outside the form are reset without warning.

Stability-related PR: [PR #1186](https://github.com/moltis-org/moltis/pull/1186) is a fix for vault recovery phrase hashing consistency, but it is not yet merged.

## Feature Requests & Roadmap Signals
No explicit feature requests were filed in the last 24 hours. Roadmap signals are indirect:

- The vault recovery phrase normalization in [PR #1186](https://github.com/moltis-org/moltis/pull/1186) points toward improved input tolerance and recovery UX.
- [Issue #1187](https://github.com/moltis-org/moltis/issues/1187) may lead to a more complete settings form or a round-trip-safe storage model.
- [Issue #1185](https://github.com/moltis-org/moltis/issues/1185) likely requires more robust container/sandbox detection logic.

Next-version candidates include: normalized vault recovery phrase handling, heartbeat settings form fixes, and Apple Container detection improvements.

## User Feedback Summary
Reported pain points are concrete:

- Heartbeat settings can be silently overwritten/reset when the UI form does not cover all stored fields — a data-loss risk.
- Apple Container 1.x sandboxes can be running but appear down to Moltis, causing misleading status.
- Vault recovery currently has case/dash sensitivity friction; the open PR indicates users need the phrase input handling to be more forgiving.

No positive or satisfaction-oriented feedback was recorded in the observed data.

## Backlog Watch
No long-unanswered or stale issues were detected. The newest items are from August 8–9 and still need maintainer triage:

- [Issue #1185](https://github.com/moltis-org/moltis/issues/1185) — open for ~2 days, no comments or assignee.
- [Issue #1187](https://github.com/moltis-org/moltis/issues/1187) — open for ~1 day, no comments or assignee.
- [PR #1186](https://github.com/moltis-org/moltis/pull/1186) — awaiting review/merge.

These items should be prioritized to avoid accumulating unreviewed bug reports and an unmerged fix.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-10

## 1. Today's Overview

CoPaw/QwenPaw is in a highly active contribution phase: 17 issues were updated in the last 24 hours (11 open/active, 6 closed) and 50 PRs were touched (49 open, 1 closed), with no new releases published. The issue tracker shows a mix of 2.1.0b2 console bugs, MCP tool-calling type issues, Gemini provider compatibility problems, and memory/dream pipeline concerns. The PR pipeline is busy but appears review-bound: 49 PRs remain open, many from first-time contributors and several touching important stability/feature areas. Overall community contribution is strong, but maintainer review throughput and release cadence are the current bottlenecks.

## 2. Releases

No new releases in this window. There are no release notes, breaking-change notices, or migration guides to summarize.

## 3. Project Progress

One PR moved to closed state in the last 24 hours:

- [PR #6846](https://github.com/agentscope-ai/QwenPaw/pull/6846) — `feat(providers): catalog DeepSeek V4 context windows (1M)` — Adds `deepseek-v4-flash` and `deepseek-v4-pro` with 1,000,000-token context windows to avoid premature compaction at the 131K default.

Several important fix/feature PRs advanced or remained open for review:

- [PR #6844](https://github.com/agentscope-ai/QwenPaw/pull/6844) — Strips unsupported `$schema` metadata from Gemini tool schemas; likely fixes [Issue #6812](https://github.com/agentscope-ai/QwenPaw/issues/6812).
- [PR #6845](https://github.com/agentscope-ai/QwenPaw/pull/6845) — Preserves assistant completion time when chat history is reloaded; likely fixes [Issue #6826](https://github.com/agentscope-ai/QwenPaw/issues/6826).
- [PR #6854](https://github.com/agentscope-ai/QwenPaw/pull/6854) — Adds localized approval-purpose descriptions, addressing [Issue #6832](https://github.com/agentscope-ai/QwenPaw/issues/6832).
- [PR #6843](https://github.com/agentscope-ai/QwenPaw/pull/6843) — Replaces `BaseHTTPMiddleware` with pure ASGI middleware to stream SSE incrementally in the Console.
- [PR #6842](https://github.com/agentscope-ai/QwenPaw/pull/6842) — Adds a `hidden` flag for agents so plugins can hide agents from UI selectors while keeping them usable.
- [PR #6809](https://github.com/agentscope-ai/QwenPaw/pull/6809) — Sanitizes Chat Completions content for strict OpenAI-compatible providers such as StepFun.

No explicit merge events were recorded in the supplied data.

## 4. Community Hot Topics

Most-commented issues in the last 24 hours:

- [Issue #2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) — 🐾 Help Wanted: Open Tasks — Come Contribute! — **66 comments**. This is the project’s evergreen contribution task board. It continues to attract discussion and should remain a maintainer-priority coordination point.
- [Issue #6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) — 希望Web 控制台适配移动端 — **5 comments**. Users want a mobile-adapted web console for on-the-go operation.
- [Issue #5584](https://github.com/agentscope-ai/QwenPaw/issues/5584) — Unable to connect custom ascend-vllm model — **4 comments**. Reports a regression: 1.1.7 worked, newer versions fail during QwenPaw chat although vLLM backend and other software work.
- [Issue #6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) — Assistant message end time display incorrect — **4 comments**. Console shows only seconds for a 2-minute thinking task.
- [Issue #6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) — MCP tool calls pass numeric-looking strings as numbers — **3 comments**. Causes tool invocation failures for APIs expecting string IDs/keys.
- [Issue #6812](https://github.com/agentscope-ai/QwenPaw/issues/6812) — Model `unknown` execution failed in Google API — **3 comments**. Gemini provider sends `$schema` in tool schemas; Google API rejects it.

Underlying need: users are testing QwenPaw 2.1.0b2 heavily in real workflows and hitting compatibility edge cases around custom model endpoints, MCP type strictness, and frontend rendering. There is also a clear demand for easier contribution coordination via the Help Wanted board.

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Description | Fix status |
|---|---|---|---|
| High | [Issue #6812](https://github.com/agentscope-ai/QwenPaw/issues/6812) | Gemini provider fails with `Model 'unknown' execution failed` because tool schemas include `$schema` metadata. | Fix PR exists: [PR #6844](https://github.com/agentscope-ai/QwenPaw/pull/6844) |
| High | [Issue #6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) | MCP tool calls coerce numeric-looking strings to numbers, breaking API calls. | No fix PR yet |
| High | [Issue #6847](https://github.com/agentscope-ai/QwenPaw/issues/6847) | Antivirus software kills or blocks QwenPaw during task execution; other agents are unaffected. | No fix PR yet |
| Medium | [Issue #6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) | Assistant completion time is wrong after long thinking tasks. | Fix PR exists: [PR #6845](https://github.com/agentscope-ai/QwenPaw/pull/6845) |
| Medium | [Issue #6853](https://github.com/agentscope-ai/QwenPaw/issues/6853) | Memory prompts claim dream process writes to `MEMORY.md`, but it was never implemented; actual writes go to `digest/`. | No fix PR yet |
| Medium | [Issue #6841](https://github.com/agentscope-ai/QwenPaw/issues/6841) | Auto-Dream marks entire task as error when one integration unit fails schema validation after file write. | No fix PR yet; enhancement suggested |
| Medium | [Issue #6838](https://github.com/agentscope-ai/QwenPaw/issues/6838) | Subagent model switching and workspace configuration are broken when using `spawn_subagent`. | No fix PR yet |
| Medium | [Issues #6848](https://github.com/agentscope-ai/QwenPaw/issues/6848), [#6849](https://github.com/agentscope-ai/QwenPaw/issues/6849), [#6850](https://github.com/agentscope-ai/QwenPaw/issues/6850), [#6851](https://github.com/agentscope-ai/QwenPaw/issues/6851), [#6852](https://github.com/agentscope-ai/QwenPaw/issues/6852) | Frontend renderer collapses long multi-line tool output into an unreadable blob. Multiple duplicate reports. | No fix PR yet |

## 6. Feature Requests & Roadmap Signals

Strong roadmap signals from the last 24 hours:

- [Issue #6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) — Mobile-adapted web console. High user demand for mobile operation.
- [Issue #6832](https://github.com/agentscope-ai/QwenPaw/issues/6832) — AI approval requests should include a short description of what the approval is for. Already implemented in [PR #6854](https://github.com/agentscope-ai/QwenPaw/pull/6854).
- [Issue #6840](https://github.com/agentscope-ai/QwenPaw/issues/6840) — User asks for ReMe4 roadmap timeline: Auto-Link, tri-modal search, 4-category digest weights.
- [Issue #6841](https://github.com/agentscope-ai/QwenPaw/issues/6841) — Auto-Dream should tolerate single-unit schema failures and retry instead of failing the whole task.
- [PR #6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) — Reranker support for ReMe memory search. If merged, this would materially improve memory retrieval.
- [PR #6704](https://github.com/agentscope-ai/QwenPaw/pull/6704) — Session fork feature: checkpoint-style snapshot of a conversation context into a new session.
- [PR #6312](https://github.com/agentscope-ai/QwenPaw/pull/6312) — Configurable theme/skin module draft, from the Help Wanted task board.
- [PR #6259](https://github.com/agentscope-ai/QwenPaw/pull/6259) — CIDR support in no-auth host allowlist, useful for trusted internal network ranges.

Prediction: the next QwenPaw release will likely include Gemini schema sanitization, approval purpose descriptions, assistant completion-time fixes, SSE streaming improvements, and the DeepSeek V4 context catalog. Memory-related features (ReMe reranker, Auto-Dream tolerance) are strong candidates if review moves forward.

## 7. User Feedback Summary

Real user pain points visible in this window:

- **Upgrade regressions matter**: [Issue #5584](https://github.com/agentscope-ai/QwenPaw/issues/5584) says 1.1.7 connected to custom ascend-vllm models, but newer versions cannot, causing a major blocker for self-hosted users.
- **Console usability is a recurring complaint**: inaccurate timing ([#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826)), no incremental streaming ([PR #6843](https://github.com/agentscope-ai/QwenPaw/pull/6843)), unreadable long tool output ([#6848](https://github.com/agentscope-ai/QwenPaw/issues/6848), [#6851](https://github.com/agentscope-ai/QwenPaw/issues/6851)), and no mobile support ([#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281)).
- **Approval flow is not transparent**: [Issue #6832](https://github.com/agentscope-ai/QwenPaw/issues/6832) asks for plain-language approval descriptions instead of raw PowerShell inspection.
- **Security tooling conflict**: [Issue #6847](https://github.com/agentscope-ai/QwenPaw/issues/6847) reports antivirus software killing QwenPaw, eroding trust and causing task interruptions.
- **Memory system expectations mismatch**: [Issue #6853](https://github.com/agentscope-ai/QwenPaw/issues/6853) shows the documentation/prompts promise more than the implementation delivers, which can frustrate power users.

Overall, users are actively testing 2.1.0b2 and contributing fixes, but they are encountering several rough edges around provider compatibility, tool argument handling, and frontend rendering.

## 8. Backlog Watch

Issues and PRs that appear important but may need maintainer attention:

- [Issue #2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) — Help Wanted task board with 66 comments. Warning: closed, but still acts as the main contribution entry point; needs active curation.
- [Issue #6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) — Open since 2026-07-20 with no linked PR. Mobile console request has clear demand.
- [PR #6259](https://github.com/agentscope-ai/QwenPaw/pull/6259) — CIDR allowlist support, open since 2026-07-19, no review status changes visible.
- [PR #6312](https://github.com/agentscope-ai/QwenPaw/pull/6312) — Theme/skin module draft, open since 2026-07-21, awaiting maintainer direction.
- [PR #6360](https://github.com/agentscope-ai/QwenPaw/pull/6360) — Fixes context-injection role from system to user, open since 2026-07-22, no comments/review visible.
- [PR #6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) — ReMe reranker support, open since 2026-07-23, under review but still open.
- [PR #6715](https://github.com/agentscope-ai/QwenPaw/pull/6715) — OneBot remote voice/image media handling, open since 2026-08-05.
- [PR #6704](https://github.com/agentscope-ai/QwenPaw/pull/6704) — Session fork feature, open since 2026-08-05, ready for human review.
- [PR #6725](https://github.com/agentscope-ai/QwenPaw/pull/6725) — Reports fork finalization failures in background tasks, open since 2026-08-05.
- [PR #6750](https://github.com/agentscope-ai/QwenPaw/pull/6750) — Fixes session identity deadlock, early session save, and oversized prompt collapse, open since 2026-08-06.
- [PR #6804](https://github.com/agentscope-ai/QwenPaw/pull/6804) — WeChat Chinese approval replies (`允许` / `拒绝`), open since 2026-08-07.
- [PR #6805](https://github.com/agentscope-ai/QwenPaw/pull/6805) — Fixes channel check environment detection, open since 2026-08-07.

The dataset shows a growing backlog of first-time-contributor PRs with no visible reviewer feedback. If maintainers can triage these, the project’s velocity and contributor retention are likely to improve significantly.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-10

## 1. Today's Overview

ZeroClaw is in a period of very high activity: 50 issues and 50 pull requests were touched in the last 24 hours (38 issues open/active, 12 closed; 49 PRs open, 1 closed). The project remains deep in a governance-heavy phase — several long-running RFCs (#6808, #7100, #9397) saw fresh discussion, while the maintainer decision-queue tracker (#8692) confirms a significant process backlog. However, the most urgent signal is operational: an S0/p0 security issue (#9565) — gateway webhook handlers that do not fail closed — is still open and in progress. No new releases shipped in this window; the project appears to be between the unreleased v0.8.4 and the next cut, with release-infrastructure fixes queued.

## 3. Project Progress

One PR was closed/merged in the window:

- [zeroclaw-labs/zeroclaw#9555](https://github.com/zeroclaw-labs/zeroclaw/pull/9555) — `feat(channel): add ICT channel adapter` — Enterprise messaging platform adapter with HMAC-authenticated WebSockets, streaming responses, and cron integration. Closed with `needs-author-action` still attached, so it may have been closed unmerged pending author follow-up.

Nine issues were closed, representing meaningful stability progress:

- [zeroclaw-labs/zeroclaw#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) — System prompt tool-availability mismatch across entry points (p1); direct runtime path already fixed via #8053, closure marks the multi-entry-point class as resolved.
- [zeroclaw-labs/zeroclaw#8560](https://github.com/zeroclaw-labs/zeroclaw/issues/8560) — `browser_open` hang on headless hosts resolved.
- [zeroclaw-labs/zeroclaw#8731](https://github.com/zeroclaw-labs/zeroclaw/issues/8731) — Stdio-based MCP zombie processes resolved.
- [zeroclaw-labs/zeroclaw#9192](https://github.com/zeroclaw-labs/zeroclaw/issues/9192) — `shared_budget` AtomicUsize TOCTOU and `SopEngine::finish_run` mutex panic fixed.
- [zeroclaw-labs/zeroclaw#8681](https://github.com/zeroclaw-labs/zeroclaw/issues/8681) — Goal-mode implementation split stack tracker closed, suggesting the accepted goal-mode feature finished migrating into small mergeable PRs.
- [zeroclaw-labs/zeroclaw#9690](https://github.com/zeroclaw-labs/zeroclaw/issues/9690) — CI fix: container pin shipped rustc below MSRV, breaking the all-features build; resolved.
- [zeroclaw-labs/zeroclaw#9656](https://github.com/zeroclaw-labs/zeroclaw/issues/9656) — Telegram typing indicator running through the whole approval wait; closed with a follow-up label.
- [zeroclaw-labs/zeroclaw#9834](https://github.com/zeroclaw-labs/zeroclaw/issues/9834) — Intermittent `zeroclaw-runtime` test failures from shared process-global state.
- [zeroclaw-labs/zeroclaw#9860](https://github.com/zeroclaw-labs/zeroclaw/issues/9860) — Web UI freeze after filesystem channel "created" event; closed as duplicate.

Several substantial open PRs advanced in the last 24h, including [zeroclaw-labs/zeroclaw#9607](https://github.com/zeroclaw-labs/zeroclaw/pull/9607) (routing coding CLI tools through the configured sandbox/runtime), [zeroclaw-labs/zeroclaw#9314](https://github.com/zeroclaw-labs/zeroclaw/pull/9314) (Telegram long-poll offset only advances after delivery), and [zeroclaw-labs/zeroclaw#9875](https://github.com/zeroclaw-labs/zeroclaw/pull/9875) (per-agent env vars + workspace-confined `HOME`).

## 4. Community Hot Topics

Highest-discussion issues of the window:

- [zeroclaw-labs/zeroclaw#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — *RFC: Work Lanes, Board Automation, and Label Cleanup* (22 comments, revision 24, ratification deferred). The project's own process is the hottest topic: contributors want a lighter-weight routing system and are actively iterating on governance.
- [zeroclaw-labs/zeroclaw#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) — *RFC: Per-model capability & context-window config* (12 comments). Strong demand for model-level `vision`/`context_window` configuration to stop provider-family defaults from misreporting capabilities.
- [zeroclaw-labs/zeroclaw#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) — *RFC: Empty WhatsApp Web `allowed_groups` as permit-none* (11 comments). Default-deny security semantics for channel access.
- [zeroclaw-labs/zeroclaw#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — *Maintainer decision queue tracker* (11 comments). Community is openly tracking that RFCs/design issues are queuing faster than maintainers can process them.
- [zeroclaw-labs/zeroclaw#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) — *RFC: Security posture, credential boundaries, universal ingress policy* (10 comments). Long-running security-governance proposal still awaiting maintainer review.

Underlying need: the community is pushing for (a) faster decision-making via process reform, (b) per-model configuration fidelity, and (c) default-deny security hardening — while maintainers remain the bottleneck.

## 5. Bugs & Stability

Ranked by severity:

**S0 / p0**
- [zeroclaw-labs/zeroclaw#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) — Gateway webhook handlers (WhatsApp Cloud, Linq, WATI) do **not fail closed**: attacker-controllable messages are dispatched without caller authentication. In progress, no fix PR yet. Highest-priority item in the project.

**S1 / p1**
- [zeroclaw-labs/zeroclaw#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) — `verifiable-intent` evaluates L2 constraints without verifying the credential chain; both inputs come from the caller (accepted, high risk).
- [zeroclaw-labs/zeroclaw#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) — MCP/tool-schema cloning drives unbounded RSS growth in the agent loop (accepted; split from an OOM tracker).
- [zeroclaw-labs/zeroclaw#9085](https://github.com/zeroclaw-labs/zeroclaw/issues/9085) — Nested Tokio runtime panic in `try_enable_pgvector` blocks gateway/agent startup with Postgres memory backend.
- [zeroclaw-labs/zeroclaw#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) — Documented default for `[sop] sops_dir` is not honored; SOPs silently never load.
- [zeroclaw-labs/zeroclaw#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) — Config flush can overwrite concurrent writes (S2 behavior, p1 label).

**S2 / p2**
- [zeroclaw-labs/zeroclaw#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) — High-entropy detector redacts Solana wallet addresses even with `high_entropy_tokens=false` on the channel path; breaks real agent workflows.
- [zeroclaw-labs/zeroclaw#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) — Accepted p1 dependency-security item: reconcile `cargo-audit` ignores and remediate wasmtime-wasi CVEs.

**S3**
- [zeroclaw-labs/zeroclaw#9198](https://github.com/zeroclaw-labs/zeroclaw/issues/9198) — Discord typing indicator stuck after dashboard daemon reload.

Relevant fix PRs in flight: [#9868](https://github.com/zeroclaw-labs/zeroclaw/pull/9868) guards link-enricher redirects against private-range exposure; [#9607](https://github.com/zeroclaw-labs/zeroclaw/pull/9607) closes a sandbox-bypass gap for coding CLI tools; [#9314](https://github.com/zeroclaw-labs/zeroclaw/pull/9314) prevents permanent Telegram update loss; [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) keeps agent turns alive when viewers disconnect.

## 6. Feature Requests & Roadmap Signals

Most actionable signals this window:

- **Per-model capability & context-window config** ([#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100)) plus live provider identity on usage events ([#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966)) — likely to land together so the UI context meter reflects the serving model rather than a config helper fallback.
- **Publish-safe blockchain identifier exceptions** ([#9825](https://github.com/zeroclaw-labs/zeroclaw/issues/9825)) — natural companion to the Solana redaction bug (#9486); expect leak-detector allow-listing for public addresses.
- **Per-agent environment + confined HOME** ([#9875](https://github.com/zeroclaw-labs/zeroclaw/pull/9875)) — strengthens the shell-tool security story and was created this window.
- **Native Home Assistant REST tool** ([#8994](https://github.com/zeroclaw-labs/zeroclaw/pull/8994)) and **Langfuse observability backend** ([#9556](https://github.com/zeroclaw-labs/zeroclaw/pull/9556)) — both feature-complete but blocked on author action; good candidates for a near-term release if unstuck.
- **Process reform** — [#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) (streamline RFC scope/voting) and [#9530](https://github.com/zeroclaw-labs/zeroclaw/issues/9530) (risk precedence for test-only changes) indicate the next release may carry governance simplification, not just code.
- **Matrix single-message progress drafts** ([#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443)) — channel UX improvement still awaiting author action after six weeks.

Prediction: the next minor release will prioritize the webhook fail-closed fix (#9565) and model-capability configuration, with goal-mode (tracker #8681 now closed) as the headline feature.

## 7. User Feedback Summary

Real pain points visible in this window:

- **Security false positives hurt usability** — Users cannot state Solana wallet addresses in Telegram (#9486); payment-request URLs are redacted as high-entropy tokens (#9825). The detector works as designed, but the design conflicts with legitimate blockchain workflows.
- **Looks-busy-while-blocked UX** — Telegram keeps sending "typing…" during an entire approval wait, making a blocked turn look healthy (#9656, now closed).
- **Web UI fights the user** — Auto-scroll yanks the viewport down during streaming, making it impossible to read earlier messages (#9562; fix #9749 open). Web UI also froze entirely after a filesystem-channel event (#9860).
- **Config defaults that silently don't apply** — SOPs never load when relying on the documented `sops_dir` default (#9779); context meter ceilings come from the wrong config field (#8966). Users value documented defaults actually being honored.
- **Positive signal:** closed bugs in this window (zombie MCP processes, browser_open hangs, MSRV CI breakage, flaky tests) map to issues users actually filed, and several were fixed by follow-up PRs — a healthy feedback loop.

## 8. Backlog Watch

Items needing maintainer or author attention:

- [zeroclaw-labs/zeroclaw#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — *RFC: Work Lanes / Board Automation* — since 2026-05-20, 22 comments, still `needs-maintainer-review`; the community's most-discussed item is stuck in the exact queue it proposes to fix.
- [zeroclaw-labs/zeroclaw#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) — *Security posture & ingress policy RFC* — open since 2026-05-27, 10 comments, awaiting maintainer review.
- [zeroclaw-labs/zeroclaw#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) — *Per-model capability RFC* — since 2026-06-02, 12 comments, high risk, awaiting review.
- [zeroclaw-labs/zeroclaw#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897) — *Apply security policy/channel config without daemon reload* — since 2026-06-17, p3 but high risk; security-relevant and unanswered.
- [zeroclaw-labs/zeroclaw#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) — *wasmtime-wasi CVE remediation* — accepted p1 since 2026-06-30; dependency-security debt is accumulating.
- **Stalled PRs (needs-author-action, mostly since early-to-mid July):** [#8994](https://github.com/zeroclaw-labs/zeroclaw/pull/8994) (Home Assistant), [#9069](https://github.com/zeroclaw-labs/zeroclaw/pull/9069) (per-agent backend dashboard), [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) (turn lifetime), [#8965](https://github.com/zeroclaw-labs/zeroclaw/pull/8965) (declarative skill auto-activation), [#8955](https://github.com/zeroclaw-labs/zeroclaw/pull/8955) (Telegram media groups), [#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966) (provider identity/context window), [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) (Matrix progress drafts). These represent a large batch of reviewable feature work aging on the vine.
- [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) itself is a notable meta-signal: maintainers have had to create a public decision-queue tracker to manage RFC load, and it remains active.

**Overall health:** code-stability trends positive (multiple S1/S2 bugs closed this window, CI/MSRV issues fixed), but the project is straining under a governance bottleneck — a dozen quality RFCs and feature PRs are waiting on maintainer cycles, while an S0 webhook authentication gap remains open.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*