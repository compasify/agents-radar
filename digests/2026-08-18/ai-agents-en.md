# OpenClaw Ecosystem Digest 2026-08-18

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-17 23:11 UTC

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

# OpenClaw Project Digest — 2026-08-18

## 1. Today's Overview

OpenClaw is in a period of **very high activity**: 500 issues and 500 PRs were updated in the last 24 hours, with 96 PRs merged/closed against 404 still open. Maintainer bandwidth appears to be the primary bottleneck — the vast majority of the top issues carry `clawsweeper:needs-maintainer-review` and `clawsweeper:needs-product-decision` labels, indicating a substantial queue of P1 bug triage. No new releases shipped today. The dominant themes are **Codex integration reliability**, **message-loss/session-state corruption across channels (especially WhatsApp)**, **memory/context management**, and a steady stream of **security hardening** PRs that did land (install-policy acknowledgement). There are notable signs of healthy process: two security-focused feature PRs closed, a raft of test-flakiness fixes merged, and a growing number of "tracking/umbrella" issues suggest the maintainers are consolidating related bugs into coherent workstreams.

---

## 2. Releases

**No new releases in the last 24 hours.** The most recent release context referenced throughout issues is `2026.6.x` (e.g., `2026.6.1`, `2026.6.10`), with several regressions traced to `2026.5.x` and `2026.4.x`. No release notes, breaking changes, or migration guidance to report today.

---

## 3. Project Progress

**96 PRs were merged/closed in the last 24 hours.** The two closed PRs visible in the top-30 sample both concern **install-policy security**:

- **PR #116489** (CLOSED) — `feat(security): require acknowledgement for install policy warnings`. External `security.installPolicy` commands can now return `warn`, requiring an authorized operator to explicitly acknowledge a suspicious plugin/skill install before it proceeds. Interactive CLI installs show the bounded reason and findings and require the exact target name. *(https://github.com/openclaw/openclaw/pull/116489)*
- **PR #120900** (CLOSED) — `feat(ui): review install policy warnings`. Companion Control UI feature letting an authenticated admin review and deliberately continue a warned plugin install via `acknowledgeInstallPolicyWarning: true`. *(https://github.com/openclaw/openclaw/pull/120900)*

Other notable PRs in flight or ready for maintainer review:

- **PR #125163** — Archived deterministic channel sessions now resume on new authorized messages; fixes a silent no-response bug. *(https://github.com/openclaw/openclaw/pull/125163)*
- **PR #125117** — Malformed plugin manifests are now reported during metadata discovery instead of being silently dropped (which previously could lose providers, auth markers, and model catalogs). *(https://github.com/openclaw/openclaw/pull/125117)*
- **PR #124687** — Onboarding no longer prints reusable Gateway tokens inside dashboard URLs (security: token-bearing terminal output). *(https://github.com/openclaw/openclaw/pull/124687)*
- **PR #125264** — Android compact session picker retains pinned sessions regardless of the 24-hour cutoff. *(https://github.com/openclaw/openclaw/pull/125264)*
- **PR #125377** — Configure wizard now honors an explicit system agent instead of persisting workspace to `agents.defaults.workspace`. *(https://github.com/openclaw/openclaw/pull/125377)*
- **PR #125357** — Subagent failure cause is preserved on pending-error timeout announces instead of being flattened to `status: "timeout"`. *(https://github.com/openclaw/openclaw/pull/125357)*
- **Test-infrastructure stabilization** — Several PRs by *steipete* address CI flakes: managed-child process race (#125441), shared `/tmp` browser-profile fixtures (#125440), and Control UI e2e wait pinning (#125439).

**Codex integration** is the single largest PR cluster: hiding OpenClaw-created sessions from the Codex catalog (#125424), fixing automatic-compaction ownership (#120443), and preventing whole-context projection per turn in degraded-engine mode (#125324).

---

## 4. Community Hot Topics

The most-discussed issues reveal three underlying needs: **observability into agent behavior**, **Codex runtime stability**, and **long-context handling**.

- **#77598** (23 comments) — *Track live dev agent behavior and trajectory* — A maintainer-run observational watch issue documenting a 24-hour continuous monitoring of Pash's dev agent. Signals the project's serious investment in understanding real agent behavior rather than just fixing symptoms. *(https://github.com/openclaw/openclaw/issues/77598)*
- **#91009** (20 comments, 2👍) — *Codex PreToolUse native hook relay spawns CPU-bound `openclaw-hooks` processes and stalls gateway RPC* — The most active bug thread. Multiple short-lived hook processes consuming 100%+ CPU each and stalling the gateway; users are clearly hitting this in production on `2026.6.1`. *(https://github.com/openclaw/openclaw/issues/91009)*
- **#68596** (15 comments, 8👍) — *Configurable streaming watchdog timeout threshold* — High reaction count. Users running extended-reasoning models (kimi-k2.5, DeepSeek-R1) are hammered by false "no stream updates for 30s" warnings. The community wants a config knob, not a hardcoded timeout. *(https://github.com/openclaw/openclaw/issues/68596)*
- **#62505** (15 comments) — *Coding Agent never completes anything (worked in 2026.4.2 and earlier)* — A high-visibility regression report with broad sympathy; the user's agent went from productive to producing only vague status updates. *(https://github.com/openclaw/openclaw/issues/62505)*
- **#96834** (15 comments) — *WhatsApp 1:1 inbound image wedges main lane ~3min* — Multimodal input strands `active_reply_work`/`queued_work_without_active_run`; reproduced on 2026.6.10 post-#95039. *(https://github.com/openclaw/openclaw/issues/96834)*

**Reaction-driven signal**: Issue #42840 (MathJax/LaTeX support in Control UI) has 10👍 on only 8 comments — the highest 👍/comment ratio in the sample, indicating broad silent demand from STEM users. *(https://github.com/openclaw/openclaw/issues/42840)*

---

## 5. Bugs & Stability

High-severity bug load remains heavy. Ranked by severity (P0 first), noting where fix PRs exist:

| # | Issue | Severity / Impact | Summary | Fix PR? |
|---|-------|-------------------|---------|---------|
| 1 | **#70903** | **P0**, stale label | Persistent file-based provider cooldown blocks users for hours **after** billing recovery; `disabledUntil` timestamps extend on repeated failures. *(https://github.com/openclaw/openclaw/issues/70903)* | None visible |
| 2 | **#91009** | P1, crash-loop/stall | Codex hook relay spawns CPU-bound `openclaw-hooks` processes; stalls gateway RPC. *(https://github.com/openclaw/openclaw/issues/91009)* | None visible |
| 3 | **#62505** | P1, regression | Coding agent stopped completing anything since 2026.4.2; vague status updates only. *(https://github.com/openclaw/openclaw/issues/62505)* | None visible |
| 4 | **#96834** | P1, session-state/message-loss | WhatsApp image wedges lane ~3 min; strands `active_reply_work`. *(https://github.com/openclaw/openclaw/issues/96834)* | None visible |
| 5 | **#38327** | P1, regression | `"Cannot convert undefined or null to object"` with google-vertex/gemini-3.1-pro-preview since 2026.3.2. *(https://github.com/openclaw/openclaw/issues/38327)* | None visible |
| 6 | **#86215** | P1, auth-provider | Codex OAuth refresh failures wedge agents for hours without alerting or profile rotation. *(https://github.com/openclaw/openclaw/issues/86215)* | None visible |
| 7 | **#67777** | P1, message-loss | Subagent completion delivery lost on direct-announce timeout, drain, or orphan prune. *(https://github.com/openclaw/openclaw/issues/67777)* | None visible |
| 8 | **#74586** | P1, session-state | AM embedded run aborts `memory_search` tool calls; misclassified as timeout despite model completion. *(https://github.com/openclaw/openclaw/issues/74586)* | None visible |
| 9 | **#97616** | P1, regression | OpenClaw leaks unreaped hook/tool child processes → zombie accumulation and runtime degradation. *(https://github.com/openclaw/openclaw/issues/97616)* | None visible |
| 10 | **#71689** | P1, data-loss | Tasks registry restore fails on malformed SQLite (`database disk image is malformed`). *(https://github.com/openclaw/openclaw/issues/71689)* | None visible |

**Security-relevant bug**: #78493 — `sudo openclaw update` leaves mixed root/user ownership; `doctor` then overwrites config after EACCES. *(https://github.com/openclaw/openclaw/issues/78493)*

**Fix PRs that do exist** for bugs in the broader list:
- **#125357** fixes the subagent failure-cause loss (#125356) — one of the few direct bug→PR pairings. *(https://github.com/openclaw/openclaw/pull/125357)*
- **#125163** fixes archived-channel sessions not responding (#124901). *(https://github.com/openclaw/openclaw/pull/125163)*
- **#120443** fixes Codex automatic-compaction ownership no-op (#119977). *(https://github.com/openclaw/openclaw/pull/120443)*
- **#80396** (open, awaiting proof) addresses the silent `MEDIA:`-token-inside-fenced-code-block failure (#41966). *(https://github.com/openclaw/openclaw/pull/80396)*

Notably, **none of the top-10 P1/P0 issues above yet has a linked fix PR** — the bottleneck is real.

---

## 6. Feature Requests & Roadmap Signals

**Strong roadmap signals (high 👍 or active linked PRs):**

- **Per-agent resource isolation** — #67413 (per-agent "dreaming" configuration, 5👍) and #60572 (multi-slot memory architecture, 3👍) both push toward finer-grained control over memory/CPU. Likely candidates for the next minor release given the recurring OOM/freeze complaints. *(https://github.com/openclaw/openclaw/issues/67413, https://github.com/openclaw/openclaw/issues/60572)*
- **Multi-index/multi-model embeddings** — #63990 (model-aware failover, no mixed vector spaces) and #62328 (node:sqlite missing FTS5 → broken keyword fallback) indicate memory-stack hardening is a priority. *(https://github.com/openclaw/openclaw/issues/63990, https://github.com/openclaw/openclaw/issues/62328)*
- **Multiple Teams bot support** — #71058 now has a large feature PR (#112811) implementing multi-bot-account support. Strong candidate for an upcoming release. *(https://github.com/openclaw/openclaw/issues/71058, https://github.com/openclaw/openclaw/pull/112811)*
- **Config flexibility** — #45758 (YAML config support, 2👍), #68596 (watchdog timeout, 8👍), #71142 (configurable upload size limit). A "configurability" theme is emerging; low-risk additions likely to ship.
- **Security/ops UX** — install-policy warnings (#116489/#120900) already landed; #73537 (production-readiness stability labels) suggests the community wants clearer release-risk signaling.
- **Subagent ancestry/lineage** — PR #122015 (record subagent execution lineage) is in progress, aligning with the observability theme of #77598.

**Watch items**: #71058 and #112811 (Teams multi-bot) and #122015 (lineage) are the most likely PRs to merge next, alongside the Codex cluster (#125424, #120443, #125324).

---

## 7. User Feedback Summary

**Pain points (dominant):**

- **Regression fatigue** — Multiple users report "worked before, now broken" (coding agent #62505, Discord channel loading #77930, Vertex auth #38327, zombie processes #97616). A common sentiment: agents that were reliably productive for weeks suddenly degrade after an upgrade.
- **Silent failures are the worst failures** — Recurring complaints about silent message loss (WhatsApp backfill #50093, subagent completion #67777, duplicate delivery #39476), silent tool-parameter drops after long conversations (#53408), and silent model-switch failures (#58957).
- **Context/token waste** — #67419 (bootstrap files re-injected every turn consuming 20–30% of context) resonated (2👍, 10 comments); users are cost-sensitive around long-running sessions.
- **False alarms from the streaming watchdog** (#68596, 8👍) cause needless interrupt friction with reasoning models.
- **Annoying hardcoded values** — #51429 (a developer named *wangtao* apparently hardcoded his working path into a published release) drew 12 comments and is a reputational sore point for the project. *(https://github.com/openclaw/openclaw/issues/51429)*
- **RTL/UX gaps** — #68105 (Hebrew/Arabic punctuation renders on wrong side) and #75947 (UI needs accessibility/ergonomics redesign) show UI polish is a recurring ask.

**Satisfaction signals:**
- #73537 includes a warm thank-you note to Peter (the maintainer) from a family running OpenClaw for Home Assistant control, Telegram automation, and daily workflows — real-world "it genuinely became part of our daily workflow" endorsement. *(https://github.com/openclaw/openclaw/issues/73537)*
- Enthusiastic feature requests with high 👍 (MathJax #42840 at 10👍; watchdog config #68596 at 8👍; per-agent dreaming #67413 at 5👍) indicate an engaged, power-user community that wants to invest more in the tool.

---

## 8. Backlog Watch

Issues that have been open a long time, are high-severity, and/or are stuck waiting on maintainer action:

- **#70903 (P0, `stale` label)** — Provider cooldown persists after billing recovery; users blocked for hours. Created 2026-04-24, last touched 2026-08-17, still **no fix PR and no maintainer decision**. This is the single most urgent backlog item. *(https://github.com/openclaw/openclaw/issues/70903)*
- **#38327 (P1, since 2026-03-06)** — Google Vertex crash-on-every-message regression ("Cannot convert undefined or null to object"), still open after **5+ months**, flagged `clawsweeper:needs-live-repro`. *(https://github.com/openclaw/openclaw/issues/38327)*
- **#62505 (P1, since 2026-04-07)** — "Coding Agent never completes anything" — 4+ months old, high visibility, no fix PR. *(https://github.com/openclaw/openclaw/issues/62505)*
- **#51429 (P2, since 2026-03-21)** — Hardcoded `/Users/wangtao` workspace path shipped in a release; 12 comments but still no product decision. *(https://github.com/openclaw/openclaw/issues/51429)*
- **#50291 (P2, `stale`, since 2026-03-19)** — Missing trace context (messageId, runId, parentSpanId) in plugin hooks; important for distributed-tracing users, now marked stale. *(https://github.com/openclaw/openclaw/issues/50291)*
- **#45224 (P1, since 2026-03-13)** — Unhandled Playwright assertion crashes the entire Gateway; still `not-repro-on-main` — no closure either way after 5 months. *(https://github.com/openclaw/openclaw/issues/45224)*
- **Umbrella issue #69208 (maintainer, P1, since 2026-04-20)** — Duplicate transcript/replay/context bugs across channels; consolidation is good, but it has 14 comments and needs maintainer-driven decomposition before fixes can land. *(https://github.com/openclaw/openclaw/issues/69208)*

**Overall health assessment**: OpenClaw is a **high-velocity but triage-saturated** project. The community is active and constructive, the maintainer team is consolidating bugs into umbrella tracking issues and landing security improvements, but the **P1 fix throughput is lower than the P1 discovery rate** — several 3–5 month-old P1 regressions remain unaddressed, and the top-10 bug list shows no in-progress fix PRs. If this imbalance persists, user trust (already strained by regression reports like #62505 and #51429) will be the primary risk to watch over the next release cycle.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — Personal AI Assistant / Agent OSS Ecosystem
**Date:** 2026-08-18 | **Data window:** 2026-08-17 → 2026-08-18 | **Projects covered:** 12

---

## 1. Ecosystem Overview

The open-source personal AI assistant landscape is entering a **hardening phase**: the dominant conversation has shifted from raw capability demos to production reliability — silent message loss, session-state corruption, agent infinite loops, and credential exposure dominate the bug trackers. The field is bifurcating into a small number of high-velocity platforms (OpenClaw, ZeroClaw, Hermes Agent, CoPaw) and a long tail of smaller, more specialized implementations. Multi-channel integration (WhatsApp, Telegram, Slack, WeChat/Feishu) is now table stakes and the single largest source of reliability defects across every project. Meanwhile, memory/context architecture, spend control, and security hardening are emerging as the next competitive differentiators, with several projects (IronClaw, NanoBot, ZeroClaw) explicitly investing in durable storage, cost firewalls, and credential isolation.

---

## 2. Activity Comparison

| Project | Issues updated (open / closed) | PRs updated (merged/closed) | Release status | Health score | Notes |
|---|---|---|---|---|---|
| **OpenClaw** | ~500 (404 PRs still open) | ~500 (96 merged/closed) | None; 2026.6.x line | **6/10** | High velocity, triage-saturated; P1 fix rate < P1 discovery rate |
| **ZeroClaw** | 50 (43 / 7) | 50 (16 merged) | None; 0.8.4 line | **7/10** | RFC-heavy design phase; security fixes moving fast |
| **Hermes Agent** | 50 (38 / 12) | 50 (8 merged) | **v0.20.3** (rolled up ~125 PRs) | **7.5/10** | Disciplined refactoring; shipping stable tags to downstream consumers |
| **CoPaw** | 14 (8 / 6) | 35 (22 merged) | None; 2.1.x path | **8/10** | Fast maintainer response; same-day fix PRs on new bugs |
| **IronClaw** | 28 (22 / 6) | 44 (16 merged) | None | **7.5/10** | Strong infra focus; critical libSQL bug already has fix PR |
| **NanoClaw** | 4 (3 / 1) | 39 (23 merged) | None | **8/10** | Infrastructure landing fast; fix PRs out for both regressions |
| **NanoBot** | 3 (2 / 1) | 15 (5 merged) | None | **8/10** | Responsive; Telegram polling stall fixed and closed |
| **LobsterAI** | 7 (7 / 0) | 21 (17 merged) | None | **5.5/10** | Contributor momentum high, but April issues stale & unfixed |
| **Moltis** | 2 (0 / 2) | 6 (6 merged) | None | **7.5/10** | Working down old backlog; no regressions reported |
| **PicoClaw** | 4 (3 / 1) | 4 (3 merged) | None | **7/10** | Moderate; same-day fix for Slack upload bug |
| **NullClaw** | 0 | 1 (0 merged) | None | **5/10** | Dormant; 2-month-old Dependabot PR unmerged |
| **ZeptoClaw** | 0 | 0 | None | N/A | No activity recorded |

**Scale context:** OpenClaw's daily PR merge count (96) exceeds the *total* 24h PR activity of all other projects combined (~100). This is the reference implementation by a wide margin.

---

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Unmatched community size and contributor bandwidth.** 500 issues/PRs touched in 24h is 10× the next-largest project (ZeroClaw/Hermes at 50). With 96 merges/day, OpenClaw ships more code in a day than most peers merge in a week.
- **Process maturity.** Umbrella tracking issues (#69208), maintainer-run observational watches (#77598), and `clawsweeper` triage labels indicate institutionalized bug consolidation — something smaller projects lack.
- **Security-forward posture.** Install-policy acknowledgement (#116489, #120900) and token-redaction in onboarding output (#124687) landed as closed PRs in this window — more security features merged in 24h than most peers in a month.
- **Ecosystem gravity.** The "Claw family" (PicoClaw, NanoClaw, NullClaw, ZeptoClaw) indicates OpenClaw's architecture is becoming the substrate others build on.

**Technical approach differences:**
- TypeScript/Node gateway architecture with channel adapters and a plugin/skill system; the Codex integration cluster (4+ active PRs) shows deep coupling to OpenAI's coding agent.
- Heavier emphasis on cross-channel session state than Rust-based peers (ZeroClaw, Moltis), which focus on performance and type safety.

**Achilles heel:** Triage saturation. The top-10 P1/P0 bug list has **zero linked fix PRs**; several regressions are 4–5 months old (#62505, #38327). Peers like CoPaw, NanoBot, and PicoClaw resolve same-day or same-week bugs — OpenClaw's scale is also its bottleneck.

---

## 4. Shared Technical Focus Areas

| Focus area | Projects | Specific needs |
|---|---|---|
| **Channel integration reliability** | OpenClaw, NanoBot, PicoClaw, IronClaw, CoPaw, ZeroClaw | WhatsApp media wedges lanes (#96834); Telegram silent polling stalls (#5171); Slack zero-byte uploads (#3338); Feishu session cross-cancellation (#7011); QQ expired signed URLs (#7088) |
| **Agent loop / tool-call serialization** | OpenClaw, NanoBot, PicoClaw, CoPaw | `complete_goal` infinite loop (#4864); identical tool-failure silent loops (#3311); subagent completion loss on timeout (#67777) |
| **Session-state / message integrity** | OpenClaw, Hermes, CoPaw, NanoClaw | SQLite WAL connection leaks → EMFILE (#79742); task rows firing inside chat sessions (#3301); archived-session no-response (#124901) |
| **Memory & context management** | OpenClaw, Hermes, IronClaw, CoPaw | Bootstrap files re-injected 20–30% of context (#67419); persistent recall not honored across sessions (#7275); compaction threshold mismatches (#88695); base64-as-text token miscounting (#6968) |
| **Security hardening** | OpenClaw, Hermes, ZeroClaw, IronClaw | API keys in URLs (#9973); credential scrubbing in child processes (#70370); install-policy acknowledgement; bounded attachment downloads (#10000); implicit file reads from email (#9993) |
| **MCP / external-agent ecosystem** | NanoClaw, IronClaw, LobsterAI, Moltis, CoPaw | SSE-only transport limitation (#1662); MCP "Tool notfound" after upgrade (#6405); missing bearer auth (#7716); `extendTool` schema extension seam (#3296); MiniMax Code ACP agent (#1204) |
| **Cross-platform / Windows** | ZeroClaw, NanoBot, Hermes, PicoClaw | 74 Windows test failures (#7462); Windows venv child process (#5415); Windows profile-delete handle release (#88727); Windows-safe weather workflow (#5341) |
| **Cost control & watchdog thresholds** | OpenClaw, NanoBot | Configurable streaming watchdog (#68596); hybrid spend firewall (#5409); disabled cron jobs still burning tokens (#5407) |

---

## 5. Differentiation Analysis

| Project | Focus | Target users | Architecture | Distinctive trait |
|---|---|---|---|---|
| **OpenClaw** | General-purpose personal AI assistant | Power users, self-hosters, developers | TypeScript/Node gateway + plugins + channel adapters | Largest ecosystem; Codex integration depth; reference implementation |
| **Hermes Agent** | Production desktop/bot hybrid | Teams, downstream commercial deployers | Multi-profile session management; desktop app + gateway; Python-ish stack | Shipping stable tagged releases; aggressive code-health (god-file epic 20/20); credential-isolation focus |
| **ZeroClaw** | Security-hardened, standards-compliant core | Governance-minded operators, infrastructure teams | Rust; RFC-driven roadmap; Chat Completions profile for OpenAI-client compat | Slow, deliberate design phase; accepted auth/security RFCs for v0.9.0 |
| **CoPaw (QwenPaw)** | Chinese-market work assistant | Chinese enterprise users | Desktop Console + channel adapters (Feishu/DingTalk/WeChat/QQ) | Chinese-language community; per-channel model routing requested; creator-focused |
| **IronClaw** | Durable, scalable agent runtime | Developers running long-lived agent workloads | Rust; durable DB write-pressure engineering; WASM tools | Infrastructure-obsessed: 60% write reduction epic, storage-lane starvation fixes |
| **NanoBot** | Lightweight, production-reliable bot | Telegram-first SMB/indie users | Python; loguru; gateway process identity management | Fast bug turnaround; moving toward spend controls and WebUI collaboration |
| **LobsterAI** | Electron desktop agent client | Chinese desktop users | Electron wrapper around OpenClaw runtime; Cowork chat UX | UX polish velocity high; issue triage lagging badly (April bugs still open) |
| **Moltis** | External-agent orchestration runtime | Developers wiring multiple ACP/code agents | Rust; external-agent providers (MiniMax Code); shadow DOM browser automation | Small, clean; merges long-lived feature PRs; sees external agents as first-class |
| **NanoClaw / PicoClaw / NullClaw / ZeptoClaw** | Smaller Claw-family implementations | Niche channel/hardware deployments | Channel extension seams; IoT (sipeed); minimal footprint | PicoClaw IRC support; NanoClaw hook/seam velocity; NullClaw dormant |

---

## 6. Community Momentum & Maturity

**Tier 1 — High velocity, large community (scale or intensity):**
- **OpenClaw** — Rapidly iterating, but *fix-throughput-constrained*. 96 merges/day yet top P1s lack fix PRs. Momentum is real; bottleneck is maintainer review.
- **ZeroClaw** — Rapid *design* iteration, slower code throughput. 23-comment RFCs, accepted security architecture for v0.9.0. Community is engaged in governance, not just bug reports.
- **Hermes Agent** — Steady, disciplined shipping. v0.20.3 stable tag with ~125 PRs; refactoring epics completed; bot-mode and desktop stabilization are active.

**Tier 2 — Healthy steady state:**
- **CoPaw, NanoClaw, NanoBot, IronClaw, Moltis, PicoClaw** — All merged meaningful code in the window, respond to new bugs with same-day fix PRs, and have manageable backlogs. CoPaw and NanoClaw show the strongest feedback loops (bug → fix PR within 24h).

**Tier 3 — Stabilizing / low engagement:**
- **NullClaw** — Effectively dormant: zero issues, one 2-month-old Dependabot PR unmerged. Stability with no pulse.
- **ZeptoClaw** — No activity recorded.
- **LobsterAI** — *Momentum without triage*: 17 PRs merged but 5 high-impact April issues all marked stale with no fix. Contributor energy is being spent on UI polish, not core blockers.

---

## 7. Trend Signals

1. **Silent failures are the industry's #1 trust killer.** Every active project has a "silent" bug class: silent message loss (OpenClaw #67777), silent polling stalls (NanoBot #5171), silent tool-failure loops (PicoClaw #3311), silent log/run disappearance (NanoClaw #3301). Users consistently rate explicit, actionable error surfacing as the most valuable improvement. **Action:** prioritize failure observability over new features.

2. **Cost control is becoming a first-class product requirement.** NanoBot's Hybrid Spend Firewall (#5409), OpenClaw's context-reinjection waste reports (#67419, 20–30% of context), and stale cron jobs burning tokens (#5407) signal that as agent adoption moves commercial, users demand spend guardrails, not just correctness.

3. **Channel reliability is table stakes and still immature.** WhatsApp, Telegram, Slack, Feishu, QQ, and Weixin all have active integration bugs across multiple projects. Multi-channel support is no longer a differentiator — it's an expectation, and the ecosystem is paying the reliability tax for it.

4. **Standards-based interoperability is gaining ground.** ZeroClaw's Chat Completions profile RFC, Moltis's ACP external agents, Hermes's ACP support, and LobsterAI's VOKO A2A proposal all point to a future where agents are pluggable across frameworks. Watch for OpenClaw to be pulled into this trend.

5. **Memory is the next competitive frontier.** IronClaw is verifying persistent recall in production (#7275); OpenClaw has multi-index/multi-slot memory RFCs (#60572); CoPaw is adding pluggable memory backends (#7079); Hermes is fixing FTS corruption (#72716). Whoever solves *reliable, cross-session memory* first will own the next upgrade cycle.

6. **Desktop clients are a growing pain point.** Hermes desktop session/profile bugs, CoPaw Console session persistence, and LobsterAI Electron issues all surfaced this window. Desktop is where mainstream users meet agents, and session integrity there is currently the weakest link.

7. **Security hardening is accelerating across the board.** API-key URL exposure, credential child-process inheritance, unbounded attachment downloads, and implicit file reads were all fixed within 24 hours across ZeroClaw, Hermes, and OpenClaw. Security fixes are now the fastest-moving PR category — a strong health signal for the ecosystem.

---

**Bottom line for decision-makers:** OpenClaw remains the ecosystem's center of gravity but is riskiest for production adoption this quarter due to fix-lag on known P1s. Hermes Agent and CoPaw offer the best reliability-to-velocity ratios. ZeroClaw is the one to watch for architecture and security leadership. Any project — large or small — that fails to treat *silent failures* as P0 will lose user trust regardless of feature velocity.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-18

## 1. Today's Overview

NanoBot saw high development activity in the last 24 hours: 3 issues were updated (2 open, 1 closed), 15 pull requests were updated (10 open, 5 closed/merged), and no new releases were published. The project is in a steady maintenance-and-feature cycle, with community contributors submitting fixes across Telegram polling, gateway process handling, WebUI features, provider fallback behavior, and cross-platform compatibility. The maintainers also closed several long-running items, including a Telegram polling stall fix and a native TypeScript terminal UI. Overall, the project appears healthy, responsive, and focused on reliability and developer experience.

## 2. Releases

No new releases were recorded in the last 24 hours.

## 3. Project Progress

The following pull requests were closed/merged in the last 24 hours:

- [HKUDS/nanobot #5416 — fix(gateway): stabilize process identities](https://github.com/HKUDS/nanobot/pull/5416)  
  Improves gateway process identity handling by replacing locale-dependent macOS parsing with native `proc_pidinfo` timestamps and aligning process-identity contracts.

- [HKUDS/nanobot #5156 — fix(telegram): recover from silently stalled polling](https://github.com/HKUDS/nanobot/pull/5156)  
  Fixes [issue #5171](https://github.com/HKUDS/nanobot/issues/5171) by adding recovery for Telegram polling that silently stalls after transient network failures.

- [HKUDS/nanobot #5301 — fix(telegram): bridge stdlib logging and detect stalled polling](https://github.com/HKUDS/nanobot/pull/5301)  
  Splits out low-risk observability: stdlib logging bridged into loguru plus a lightweight liveness check that logs without tearing down polling.

- [HKUDS/nanobot #5406 — feat(cli): add native TypeScript terminal UI](https://github.com/HKUDS/nanobot/pull/5406)  
  Adds a native TypeScript TUI, superseding [PR #4329](https://github.com/HKUDS/nanobot/pull/4329). Includes recovery notes about a previous accidental merge state.

- [HKUDS/nanobot #5410 — fix(goal): stop repeating clarification replies](https://github.com/HKUDS/nanobot/pull/5410)  
  Prevents sustained-goal continuation from being re-injected after normal model responses, fixing repeated clarification replies.

Several feature PRs remain open and are moving forward, including WebUI session messaging (#5358), follow-up suggestions (#5408), and temporary side conversations (#5364).

## 4. Community Hot Topics

- [Issue #4864 — [bug] Endless loop for `<tool_call> <function=complete_goal>`](https://github.com/HKUDS/nanobot/issues/4864)  
  The most active issue with 7 comments and 1 reaction. It describes a gateway bug where the `complete_goal` tool's `recap` parameter is parsed as a bare string instead of a JSON object, causing repeated tool-call failures. Underlying need: reliable tool-parameter serialization to prevent agent infinite loops.

- [PR #5406 — feat(cli): add native TypeScript terminal UI](https://github.com/HKUDS/nanobot/pull/5406)  
  Hot due to its recovery note: it supersedes #4329, which was mistakenly marked merged when its head briefly appeared on `main`. The community will likely watch for CLI changes after this merge.

- [Issue #5409 — Prevent Margin Leaks & Surprise LLM Bills: Add a Hybrid Spend Firewall](https://github.com/HKUDS/nanobot/issues/5409)  
  A new feature request asking for spend controls to prevent power users from running infinite loops and exhausting LLM budgets. It reflects growing commercial and production cost concerns around AI agents.

- [PR #5156 / #5301 — Telegram polling reliability](https://github.com/HKUDS/nanobot/pull/5156)  
  These merged fixes address a serious production issue: Telegram bots silently stopping message processing after transient network blips. The underlying need is robust long-running agent infrastructure.

## 5. Bugs & Stability

Ranked by severity:

1. **High — [Issue #4864: Endless loop for `complete_goal` tool call](https://github.com/HKUDS/nanobot/issues/4864)**  
   Open with 7 comments. A gateway parsing regression causes `complete_goal` to fail repeatedly. No fix PR is linked yet, making this the most urgent open stability issue.

2. **Medium — [Issue #5171: Telegram polling stalls silently](https://github.com/HKUDS/nanobot/issues/5171)**  
   Closed. Fixed by [#5156](https://github.com/HKUDS/nanobot/pull/5156) and supported by [#5301](https://github.com/HKUDS/nanobot/pull/5301). This was a serious reliability bug for Telegram-based agents.

3. **Open fix PRs awaiting review/merge:**
   - [PR #5415 — fix(gateway): adopt Windows venv child process](https://github.com/HKUDS/nanobot/pull/5415)
   - [PR #5414 — fix(slack): validate file downloads across redirects](https://github.com/HKUDS/nanobot/pull/5414)
   - [PR #5413 — fix(providers): apply fallback policy to raised errors](https://github.com/HKUDS/nanobot/pull/5413)
   - [PR #5412 — fix(gateway): flush background child output to logs](https://github.com/HKUDS/nanobot/pull/5412)
   - [PR #5407 — fix(cron): retire persisted heartbeat/dream system jobs when disabled](https://github.com/HKUDS/nanobot/pull/5407)

These fixes address cross-platform process handling, security validation, provider fallback robustness, log visibility, and stale cron jobs burning tokens.

## 6. Feature Requests & Roadmap Signals

The following features signal where NanoBot is heading:

- [Issue #5409 — Hybrid Spend Firewall](https://github.com/HKUDS/nanobot/issues/5409)  
  A user-requested cost-control layer for LLM spend. Given the project's commercial transition, this is a plausible next-version priority.

- [PR #5358 — feat(webui): add session messaging via mentions](https://github.com/HKUDS/nanobot/pull/5358)  
  Gives persisted WebUI sessions stable server-owned names and lets users message sessions directly.

- [PR #5408 — feat(webui): add follow-up suggestions](https://github.com/HKUDS/nanobot/pull/5408)  
  Adds ephemeral, chat-scoped follow-up suggestions after successful WebUI turns.

- [PR #5364 — feat(webui): add temporary side conversations](https://github.com/HKUDS/nanobot/pull/5364)  
  Introduces `/side` commands for isolated temporary conversations beside the main topic.

- [PR #5406 — feat(cli): add native TypeScript terminal UI](https://github.com/HKUDS/nanobot/pull/5406)  
  Now closed/merged, indicating the CLI is moving toward a richer TUI experience.

- [PR #5341 — fix(skills): make weather workflow Windows-safe](https://github.com/HKUDS/nanobot/pull/5341)  
  A cross-platform compatibility fix, showing ongoing attention to Windows users.

Likely next-version themes: WebUI collaboration and conversation management, stronger cost controls, and deeper cross-platform reliability.

## 7. User Feedback Summary

Real user pain points from the last 24 hours:

- **Tool serialization compatibility**: [Issue #4864](https://github.com/HKUDS/nanobot/issues/4864) shows that a recent gateway change broke `complete_goal` parameter parsing, causing agent loops.
- **Telegram production reliability**: [Issue #5171](https://github.com/HKUDS/nanobot/issues/5171) highlighted silent, permanent polling stalls; the community contributed and merged fixes quickly.
- **Windows compatibility**: PRs like [#5415](https://github.com/HKUDS/nanobot/pull/5415) and [#5341](https://github.com/HKUDS/nanobot/pull/5341) address Windows venv process adoption and `curl` alias issues.
- **Unexpected costs**: [Issue #5409](https://github.com/HKUDS/nanobot/issues/5409) reflects user concern about infinite loops and LLM spend in commercial deployments.
- **Cron jobs not respecting disabled settings**: [PR #5407](https://github.com/HKUDS/nanobot/pull/5407) reports that disabling heartbeat/dream jobs still leaves persisted jobs firing and burning tokens.

Overall, users are deploying NanoBot in production and care most about stability, predictable costs, and cross-platform behavior. The high volume of contributor-submitted fixes and quick closures suggests a responsive and engaged maintainer community.

## 8. Backlog Watch

- [Issue #4864 — Endless loop for `complete_goal`](https://github.com/HKUDS/nanobot/issues/4864)  
  Open since 2026-07-09, 7 comments, 1 reaction. This is the oldest active issue and still lacks a linked fix PR. Needs maintainer attention.

- [PR #5341 — fix(skills): make weather workflow Windows-safe](https://github.com/HKUDS/nanobot/pull/5341)  
  Open since 2026-08-11 and labeled with `conflict`. Needs rebase or review.

- [PR #5364 — feat(webui): add temporary side conversations](https://github.com/HKUDS/nanobot/pull/5364)  
  Open since 2026-08-13, also labeled with `conflict`. Needs maintainer review and conflict resolution.

- [Issue #5409 — Hybrid Spend Firewall](https://github.com/HKUDS/nanobot/issues/5409)  
  New, no comments yet. It is a substantial product/roadmap request and deserves an official maintainer response.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-18

## 1. Today's Overview

Hermes Agent is in a high-activity period: 50 issues and 50 pull requests were updated in the last 24 hours (38 open / 12 closed issues; 42 open / 8 merged-or-closed PRs), and a new patch release (v0.20.3 / v2026.8.16.2) rolled up ~125 merged PRs since v0.20.2. The dominant themes are desktop/bot-mode stability, multi-profile session correctness, and security hardening around credential isolation in child processes. Notably, a long-running code-health epic — repo-wide god-file sharding ([#78647](https://github.com/NousResearch/hermes-agent/issues/78647)) — was closed at 20/20 completion, signaling disciplined refactoring momentum. The project appears healthy but is carrying several P1/P2 bugs around session-state integrity and gateway reliability that are receiving active PR attention.

## 2. Releases

**v0.20.3 (v2026.8.16.2)** — released 2026-08-16

- Patch release that rolls up ~125 PRs merged since v0.20.2 into a stable tagged release for downstream consumers (Docker images, hosted deployments, fresh installs).
- No breaking changes or migration notes were included in the release description beyond the stable-tag rollup.
- Release page: https://github.com/NousResearch/hermes-agent/releases

## 3. Project Progress

Eight PRs were merged or closed in the last 24 hours, and 12 issues were closed. Notable closings and advances:

- **God-file refactoring epic complete**: [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) — large-file decomposition finished 20/20; all god files are sharded per standing policy.
- **Bot-mode cron visibility**: [#88614](https://github.com/NousResearch/hermes-agent/pull/88614) merged — the Routines/Cronjobs pane now shows profile-owned jobs (fix was superseded/strengthened by [#88731](https://github.com/NousResearch/hermes-agent/pull/88731), which also surfaces legacy untagged jobs).
- **Automated lint/format**: [#88720](https://github.com/NousResearch/hermes-agent/pull/88720) auto-merged by the `auto-fix lint issues & formatting` bot.
- **Desktop session/profile fixes**: several closed issues — BOTS sidebar wrong-session preview ([#88200](https://github.com/NousResearch/hermes-agent/issues/88200)), cross-profile blank-route landing ([#88540](https://github.com/NousResearch/hermes-agent/issues/88540)), failed-intro replacing Bot Chat ([#88146](https://github.com/NousResearch/hermes-agent/issues/88146)), duplicate dashboard backends ([#61023](https://github.com/NousResearch/hermes-agent/issues/61023)).
- **Old config-rewrite bug closed**: [#4775](https://github.com/NousResearch/hermes-agent/issues/4775) — Hermes silently rewriting user-authored `config.yaml` with expanded defaults and resolved secrets.
- **Duplicate feature requests folded into canonical plans**: Telegram menu-button APIs ([#78789](https://github.com/NousResearch/hermes-agent/issues/78789)), WhatsApp group DMs and stickers ([#80065](https://github.com/NousResearch/hermes-agent/issues/80065), [#80059](https://github.com/NousResearch/hermes-agent/issues/80059)).

Active feature work in flight (open PRs): profile-scoped session DB storage ([#88734](https://github.com/NousResearch/hermes-agent/pull/88734)), unified Gateways settings page ([#88735](https://github.com/NousResearch/hermes-agent/pull/88735)), git-backed shared skills via `skills.external_repo` ([#88719](https://github.com/NousResearch/hermes-agent/pull/88719)), native Cursor provider ([#88212](https://github.com/NousResearch/hermes-agent/pull/88212)), bot-to-bot DMs via `hermes peer` ([#88725](https://github.com/NousResearch/hermes-agent/pull/88725)), and persisted Python state in code execution ([#88637](https://github.com/NousResearch/hermes-agent/pull/88637)).

## 4. Community Hot Topics

- **[#78647 — Large-file decomposition epic (CLOSED, 76 comments)](https://github.com/NousResearch/hermes-agent/issues/78647)**: The most-commented item. Reflects sustained community/maintainer investment in code health; the standing policy that god files are sharded and never reverted signals a strong architectural discipline.
- **[#84834 — Webhook Feature Package meta-issue (17 comments)](https://github.com/NousResearch/hermes-agent/issues/84834)**: A graph-gated 5×2×3 repair program covering the entire webhook surface (ingress, execution, delivery, config, UI, deployment, docs). High coordination overhead; community interest in a systematically repaired webhook stack.
- **[#53902 — Renderer stuck in fontations+temporal_rs loop (7 comments)](https://github.com/NousResearch/hermes-agent/issues/53902)**: Desktop app GPU at ~98% active residency / ~13W sustained power draw since v0.17.0. Long-standing (since June 28) with no fix PR visible — a notable candidate for maintainer attention.
- **[#87654 — Vision tools disappear after availability probe (5 comments)](https://github.com/NousResearch/hermes-agent/issues/87654)**: `vision_analyze`/`browser_vision` vanish from sessions because a stub client gets cached. Confusing UX because the dashboard still shows the toolset as enabled.
- **[#79742 — SessionDB leaks per-thread WAL connections (4 comments, 1 👍, P1)](https://github.com/NousResearch/hermes-agent/issues/79742)**: Long-lived `SessionDB` leaks SQLite read connections when reader threads die, leading to fd exhaustion / `EMFILE`. Underlying need: robust session-state infrastructure for long-running gateways.

## 5. Bugs & Stability

Reported or active in the last 24 hours, ranked by severity:

**P1**
- [#79742](https://github.com/NousResearch/hermes-agent/issues/79742) — SessionDB per-thread WAL connection leak → fd exhaustion/EMFILE in long-lived processes.
- [#53666](https://github.com/NousResearch/hermes-agent/issues/53666) — `clarify` tool prompts don't render in chat UI; user sees no question and replies empty.
- [#88655](https://github.com/NousResearch/hermes-agent/issues/88655) — Scheduler-level cron errors bypass `failure_nudge` alerting; jobs died silently for ~5 hours after mixed-version update.

**P2**
- [#87654](https://github.com/NousResearch/hermes-agent/issues/87654) — Vision tools disappear after first availability probe (stub client cached).
- [#87823](https://github.com/NousResearch/hermes-agent/issues/87823) / [#86601](https://github.com/NousResearch/hermes-agent/issues/86601) — Desktop "Read Aloud Replies" / auto-TTS synthesizes and plays each reply twice (two related reports; root cause: temporary-to-canonical ID mutation).
- [#88713](https://github.com/NousResearch/hermes-agent/issues/88713) — `/save` session export crashes with `AttributeError: 'GatewayRunner' object has no attribute 'get_adapter'`.
- [#88695](https://github.com/NousResearch/hermes-agent/issues/88695) — Native Responses compaction still fires at 200K default while Codex OAuth window is now 900K. **Fix PR exists:** [#88722](https://github.com/NousResearch/hermes-agent/pull/88722).
- [#37751](https://github.com/NousResearch/hermes-agent/issues/37751) — Desktop and Gateway config double-write conflict produces contradictory state (e.g., `provider: dashscope` + `base_url: localhost`).
- [#72716](https://github.com/NousResearch/hermes-agent/issues/72716) — `optimize-storage` can stamp empty FTS after interrupted demote → permanent search loss.
- [#88698](https://github.com/NousResearch/hermes-agent/issues/88698) — MCP dual-era protocol boundary conformance gaps (2.0 SDK vs 1.x peers; `initialize` vs `server/discover`).
- [#61828](https://github.com/NousResearch/hermes-agent/issues/61828) — `install.sh --stage` masks stage failures; reports success after `uv` hard-fails.
- [#87025](https://github.com/NousResearch/hermes-agent/issues/87025) — `hermes doctor` still reports npm vulnerabilities; minimal fix is nanoid 3.3.18 override + vite 8.2.1.

**P3**
- [#88706](https://github.com/NousResearch/hermes-agent/issues/88706) — Security: close use-time, provenance, and authority gaps behind #88232/#88435 (credential-leak hardening).
- [#88688](https://github.com/NousResearch/hermes-agent/issues/88688) — Cron/session recovery not fenced by exact ownership generation (successor-owner gap).
- [#88683](https://github.com/NousResearch/hermes-agent/issues/88683) — No single transactional deployment plan across install/update/bootstrap paths.

**Fix PRs in flight:** session DB profile scoping ([#88734](https://github.com/NousResearch/hermes-agent/pull/88734)), compression threshold derivation ([#88722](https://github.com/NousResearch/hermes-agent/pull/88722)), Codex commentary preservation ([#88718](https://github.com/NousResearch/hermes-agent/pull/88718)), Windows profile-delete handle release ([#88727](https://github.com/NousResearch/hermes-agent/pull/88727)), ACP cancelled-session recovery ([#88730](https://github.com/NousResearch/hermes-agent/pull/88730)), and credential scrubbing from PTY/serve environments ([#70370](https://github.com/NousResearch/hermes-agent/pull/70370), [#70372](https://github.com/NousResearch/hermes-agent/pull/70372)).

## 6. Feature Requests & Roadmap Signals

Strong signals for the next minor release:

- **Multi-platform messaging integrations**: ByteDance plugin (TikTok Business + Douyin) Feature Package tracker ([#86950](https://github.com/NousResearch/hermes-agent/issues/86950)) — four standard plugins planned.
- **Git-backed shared skills**: `skills.external_repo` ([#88719](https://github.com/NousResearch/hermes-agent/pull/88719)) — sync skills across installs from a single git repo (shallow clone + `--ff-only`).
- **Project-local capabilities**: [#48970](https://github.com/NousResearch/hermes-agent/issues/48970) — per-project `.hermes/` skills & MCP servers gated by consent (EPIC, open since June, 2 comments).
- **New providers**: native Cursor provider via `CURSOR_API_KEY` without CLIProxy ([#88212](https://github.com/NousResearch/hermes-agent/pull/88212)).
- **Agent-to-agent communication**: `hermes peer` for bot-to-bot DMs across machines/gateways ([#88725](https://github.com/NousResearch/hermes-agent/pull/88725)).
- **Stateful code execution**: persisted Python state per conversation so agents work iteratively ([#88637](https://github.com/NousResearch/hermes-agent/pull/88637)).
- **Deployment reliability**: single transactional deployment plan for install/update/bootstrap ([#88683](https://github.com/NousResearch/hermes-agent/issues/88683)).

Prediction: `skills.external_repo`, Cursor provider, and `hermes peer` are polished, feature-complete PRs likely to merge soon; project-local `.hermes/` remains a longer-horizon epic.

## 7. User Feedback Summary

- **Desktop session/profile confusion is the loudest pain point**: wrong session shown in sidebar ([#88200](https://github.com/NousResearch/hermes-agent/issues/88200)), blank route on cross-profile switch ([#88540](https://github.com/NousResearch/hermes-agent/issues/88540)), bot chat replaced by failed intro/missing pin ([#88146](https://github.com/NousResearch/hermes-agent/issues/88146)), duplicate dashboard backends with multiple profiles ([#61023](https://github.com/NousResearch/hermes-agent/issues/61023)). Users rely on multi-profile setups and are hitting correctness bugs at the profile boundary.
- **TTS double-playback** ([#87823](https://github.com/NousResearch/hermes-agent/issues/87823), [#86601](https://github.com/NousResearch/hermes-agent/issues/86601)) is a clear quality-of-life regression for accessibility-focused users; two independent reports within days indicate a common workflow.
- **Power/performance regression** in the desktop renderer ([#53902](https://github.com/NousResearch/hermes-agent/issues/53902)) has gone ~7 weeks without a fix — users are paying a real electricity/battery cost.
- **Security-conscious users** are feeding back on credential hygiene: child-process inheritance ([#83565](https://github.com/NousResearch/hermes-agent/issues/83565)), PTY/serve env scrubbing ([#70370](https://github.com/NousResearch/hermes-agent/pull/70370), [#70372](https://github.com/NousResearch/hermes-agent/pull/70372)), and the config-rewrite-with-secrets bug ([#4775](https://github.com/NousResearch/hermes-agent/issues/4775), closed).
- **Configuration integrity**: the Desktop/Gateway double-write conflict ([#37751](https://github.com/NousResearch/hermes-agent/issues/37751)) and silent config rewriting indicate users want config changes to be predictable and lossless.

## 8. Backlog Watch

Items needing maintainer attention due to age, severity, or lack of traction:

- **[#53902 — Renderer GPU/power loop (P3, open since 2026-06-28, 7 comments)](https://github.com/NousResearch/hermes-agent/issues/53902)**: ~7 weeks old with no linked fix PR; 4× normal idle power draw.
- **[#53666 — `clarify` prompts invisible in chat UI (P1, open since 2026-06-27, 3 comments)](https://github.com/NousResearch/hermes-agent/issues/53666)**: P1 severity and nearly two months old; affects a core interactive tool.
- **[#61828 — `install.sh --stage` masks failures (P2, open since 2026-07-10, 2 comments)](https://github.com/NousResearch/hermes-agent/issues/61828)**: Bootstrap can report success after `uv` hard-fails; undermines installer trust.
- **[#37751 — Desktop/Gateway config double-write conflict (P2, open since 2026-06-03, 2 comments, 1 👍)](https://github.com/NousResearch/hermes-agent/issues/37751)**: Contradictory model config state; only 2 comments despite clear root-cause analysis.
- **[#48970 — Project-local `.hermes/` EPIC (P3, open since 2026-06-19, 2 comments)](https://github.com/NousResearch/hermes-agent/issues/48970)**: Popular concept (skills + MCP per project) but no maintainer engagement yet.
- **[#72716 — Empty FTS after interrupted demote (P2, open since 2026-07-27, 3 comments)](https://github.com/NousResearch/hermes-agent/issues/72716)**: Permanent search loss risk; fix requires careful storage-layer work.
- **[#87025 — npm audit highs in web/ui-tui workspaces (P3, open since 2026-08-15, 2 comments)](https://github.com/NousResearch/hermes-agent/issues/87025)**: A known minimal fix (nanoid 3.3.18 override + vite 8.2.1) is documented but not yet applied.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-18

## Today's Overview
Activity in the last 24 hours was moderate, with 4 issues updated (3 open/active, 1 closed) and 4 PRs updated (1 open, 3 merged/closed). No new releases were published. Development attention centered on channel integrations (Slack, Weixin) and agent-loop reliability fixes. Two older issues/PRs were also marked or cleared as stale, suggesting maintainers are doing backlog cleanup. The project remains responsive, with a same-day fix PR opened for a Slack upload bug reported today.

## Releases
No new releases in this window.

## Project Progress
Three PRs were merged/closed in the last 24 hours:

- **[PR #3312 — fix(agent): stop turn early on repeated identical tool failure](https://github.com/sipeed/picoclaw/pull/3312)** — Closed after addressing the serious bug where identical tool failures looped silently until `max_tool_iterations`, leaving users without an answer. This was linked to Issue #3311.
- **[PR #271 — fix: env overrides when config.json is missing and add regression test](https://github.com/sipeed/picoclaw/pull/271)** — Closed/merged after a long review cycle. Fixes deployments with no `config.json` by ensuring environment variables are still applied to defaults.
- **[PR #2606 — feat: enhance Weixin channel support and configuration](https://github.com/sipeed/picoclaw/pull/2606)** — Closed/merged. Adds multi-instance support, dynamic channel handling, and improved validation for the Weixin channel.

## Community Hot Topics
- **[Issue #3287 — [Feature] Better support long messages in IRC](https://github.com/sipeed/picoclaw/issues/3287)** — Open, 6 comments, tagged stale. The community wants PicoClaw to treat IRCv3 long messages split across 512-byte chunks as a single cohesive message. This is the most-discussed item and signals a real integration gap for IRC users.
- **[Issue #3311 — [BUG] Repeated identical tool failure loops silently to max_tool_iterations](https://github.com/sipeed/picoclaw/issues/3311)** — Closed with 2 comments. This generated strong user pain because agents could appear hung for minutes without giving any answer. The corresponding fix PR #3312 has now been closed.

## Bugs & Stability
Bugs are ranked by severity:

1. **High — [#3339: Antigravity generation returns generic 429 despite valid OAuth scopes](https://github.com/sipeed/picoclaw/issues/3339)** — New today. Authentication and model discovery work, but every generation request fails with `RESOURCE_EXHAUSTED`. No fix PR yet; this blocks all Antigravity users.
2. **High — [#3311: Repeated identical tool failure loops silently](https://github.com/sipeed/picoclaw/issues/3311)** — Already closed, with fix in PR #3312. This was a serious reliability issue in production over Telegram.
3. **Medium — [#3338: Slack does not attach image media content](https://github.com/sipeed/picoclaw/issues/3338)** — New today. Slack uploads always fail with `file.upload.v2: file size cannot be 0` because `SendMedia` does not set `FileSize`. A fix exists in **[PR #3340](https://github.com/sipeed/picoclaw/pull/3340)**, currently open.

## Feature Requests & Roadmap Signals
- **[Issue #3287 — IRC long-message support](https://github.com/sipeed/picoclaw/issues/3287)** — The most visible feature request this cycle. Users want IRCv3-long messages to be recombined automatically. This is a strong candidate for a future channel-improvement release.
- The merged/closed **[PR #2606 — Weixin channel enhancement](https://github.com/sipeed/picoclaw/pull/2606)** signals continued investment in multi-channel, multi-instance support.
- The new Slack fix PR #3340 suggests that channel media handling is being actively hardened and may appear in the next patch release.

## User Feedback Summary
- **Pain point: silent failures.** Users are particularly frustrated when the agent loops without surfacing an error or answer (Issue #3311). The fix was well targeted.
- **Pain point: broken channel integrations.** Slack media uploads are entirely broken in affected versions, producing a confusing "file size cannot be 0" error (Issue #3338). A user submitted a fix the same day.
- **Pain point: confused error messages.** Antigravity users report a misleading quota error despite valid auth and successful model discovery (Issue #3339).
- **Positive signal:** Users are actively contributing fixes and detailed reproductions, and maintainers are closing long-running PRs from February and April, indicating improved maintenance cadence.

## Backlog Watch
- **[Issue #3287 — IRC long-message support](https://github.com/sipeed/picoclaw/issues/3287)** — Open since 2026-07-22, marked stale, 6 comments. Needs maintainer decision: accept, implement, or close.
- **[PR #3340 — fix(slack): set FileSize on media upload params](https://github.com/sipeed/picoclaw/pull/3340)** — Open fix for a fresh bug; needs review and merge.
- **[Issue #3339 — Antigravity 429 error](https://github.com/sipeed/picoclaw/issues/3339)** — New, zero comments, no fix yet; needs triage and investigation.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-18

## Today's Overview
Activity remains high: 4 issues were updated in the last 24h (3 open, 1 closed) and 39 PRs were updated (16 open, 23 merged/closed). No new releases were published. The bulk of merged/closed PRs continues the channel-layer and extension-seam work: Slack/canvas support, router/delivery hooks, setup-wizard declarations, and MCP tool extension. At the same time, two stability regressions — task rows firing inside chat sessions and unbounded pending-message polling — are already being addressed by open fix PRs. Overall, the project looks healthy: maintainers are landing infrastructure fast and responding to user-reported regressions with focused fixes.

## Releases
No new releases in the last 24h.

## Project Progress
23 PRs were merged/closed in the last 24h. The most significant visible ones are all core-team channel/extension plumbing:

- [#3305 — slack: shared channel-layer library + canvas cluster](https://github.com/nanocoai/nanoclaw/pull/3305) — merged/closed; lands shared Slack Web API client and canvas cluster registration.
- [#3304 — channels: adapter-declared session-mode context defaults](https://github.com/nanocoai/nanoclaw/pull/3304) — adds per-context `sessionMode` defaults for thread-based platforms.
- [#3297 — setup: per-channel pre-step and companion-skill declarations](https://github.com/nanocoai/nanoclaw/pull/3297) — extends the setup wizard with per-channel pre-steps and companion skills.
- [#3296 — agent-runner: extendTool](https://github.com/nanocoai/nanoclaw/pull/3296) — additive MCP tool schema/description extension without editing base tool source.
- [#3295 — channels: generic membership-event hook](https://github.com/nanocoai/nanoclaw/pull/3295) — forwards platform member-joined events to a per-channel handler.
- [#3294 — delivery: post-delivery hook with first-delivery context](https://github.com/nanocoai/nanoclaw/pull/3294) — lets channel modules observe successful first outbound messages.
- [#3293 — router: session-created hook](https://github.com/nanocoai/nanoclaw/pull/3293) — notifies modules when an engaged message creates a new session.
- [#3292 — channels: bridge inbound-policy registration seam](https://github.com/nanocoai/nanoclaw/pull/3292) — enables wrapping `ChannelSetup` for inbound policy interception.

Also closed today: [#1143](https://github.com/nanocoai/nanoclaw/issues/1143), the stale `/data/env` documentation bug that had been open since March.

## Community Hot Topics
Only two issues have recorded comments in this window:

- [#1143 — Docs: Skills docs reference /data/env path that no longer exists](https://github.com/nanocoai/nanoclaw/issues/1143) — 2 comments; closed today. Shows user demand for accurate, current setup documentation.
- [#3203 — codex provider emits an undeclared `file` ProviderEvent; `/add-codex` fails typecheck and generated images are dropped](https://github.com/nanocoai/nanoclaw/issues/3203) — 1 comment; open for ~10 days. Important because it blocks Codex image workflows on `main`.

The underlying need is consistent: users want the Codex skill to be build-safe and functional, and they want task/chat session behavior to preserve run logs and replies correctly.

## Bugs & Stability
Ranked by severity:

1. **High — [#3203: Codex provider emits undeclared `file` ProviderEvent](https://github.com/nanocoai/nanoclaw/issues/3203)**  
   `/add-codex` fails typecheck on `main`, and nothing consumes the event, so Codex-generated images are silently dropped. No direct fix PR is visible; [#3299](https://github.com/nanocoai/nanoclaw/pull/3299) only bumps the Codex pin.

2. **High — [#3301: Task rows firing in chat sessions run one-door](https://github.com/nanocoai/nanoclaw/issues/3301)**  
   Since #2988, a `kind='task'` row in a chat session can switch the whole query into task mode, causing run logs to disappear, replies to be eaten, and series to become unlisted. Fix PR: [#3303](https://github.com/nanocoai/nanoclaw/pull/3303).

3. **Medium — [#3289: Unbounded pending-message polling](https://github.com/nanocoai/nanoclaw/issues/3289)**  
   `getPendingMessages()` loads every due pending row into JavaScript before filtering, which can cause backlog-driven polling slowdowns. Fix PR: [#3291](https://github.com/nanocoai/nanoclaw/pull/3291).

4. **Medium — [#3300: Attachment type not escaped in agent-facing XML](https://github.com/nanocoai/nanoclaw/pull/3300)**  
   Open fix PR from the community; all attachment fields except `type` are escaped.

5. **Low/Docs — [#1143: Stale `/data/env` docs](https://github.com/nanocoai/nanoclaw/issues/1143)**  
   Closed today; no longer an active documentation hazard.

## Feature Requests & Roadmap Signals
Strong signals this week:

- **Local web chat** — Two separate contributions target a local browser chat channel: [#3298 — feat(channels): add local web chat](https://github.com/nanocoai/nanoclaw/pull/3298) and [#3290 — Add webchat channel via native HTTP bridge](https://github.com/nanocoai/nanoclaw/pull/3290). This looks like a likely next-version addition.
- **Session-runtime driver seam** — [#3306](https://github.com/nanocoai/nanoclaw/pull/3306) and [#3307](https://github.com/nanocoai/nanoclaw/pull/3307) introduce a `SessionDriver` seam with Docker as the built-in realization. These are still open but signal a larger architectural direction.
- **ClawMetry operational skill** — [#3288 — Add /add-clawmetry](https://github.com/nanocoai/nanoclaw/pull/3288) adds a read-only local dashboard with a NanoClaw session adapter.
- **Bounded JSON stdin** — [#3218 — feat(cli): accept bounded JSON from stdin](https://github.com/nanocoai/nanoclaw/pull/3218) is still open and would extend both host and container `ncl` clients.
- **Codex maintenance** — [#3299](https://github.com/nanocoai/nanoclaw/pull/3299) bumps `@openai/codex` ahead of GPT-5.4 model retirement on 2026-08-31.

Given the merged/closed hook and channel work, the next release seems likely to include the new channel extension seams, plus at least one of the web-chat proposals.

## User Feedback Summary
User-reported pain points in this window:

- Documentation still references removed paths — [#1143](https://github.com/nanocoai/nanoclaw/issues/1143).
- Codex provider is currently broken for image generation on `main` — [#3203](https://github.com/nanocoai/nanoclaw/issues/3203).
- Task rows firing in chat sessions cause silent data loss of logs/replies — [#3301](https://github.com/nanocoai/nanoclaw/issues/3301).
- Pending-message polling can accumulate into a large backlog — [#3289](https://github.com/nanocoai/nanoclaw/issues/3289).
- OneCLI gateway default bind address is wrong in some setups — fixed by [#3302](https://github.com/nanocoai/nanoclaw/pull/3302).

There is no explicit positive/negative satisfaction score in the data, but the rapid existence of fix PRs for #3301 and #3289 suggests maintainer responsiveness is strong. The two independent web-chat PRs also indicate real user demand for a first-party local chat surface.

## Backlog Watch
- [#3203 — Codex provider `file` ProviderEvent](https://github.com/nanocoai/nanoclaw/issues/3203) — open since 2026-08-08, only 1 comment, blocks Codex image workflows on `main`. Needs maintainer attention.
- [#3218 — CLI bounded JSON stdin](https://github.com/nanocoai/nanoclaw/pull/3218) — open since 2026-08-09 with no visible maintainer comments; may need review or merge decision.
- [#3306 / #3307 / #3308](https://github.com/nanocoai/nanoclaw/pull/3306) — the driver-seam and group-folder-refusal stack is actively moving, but the later PRs depend on earlier ones; worth watching for merge conflicts or review stalls.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-18

## 1. Today's Overview
NullClaw is currently in a low-activity maintenance window. No issues were created, updated, or closed in the last 24 hours, and the sole item of activity was a Dependabot pull request (PR #956) touching container dependencies. There are zero open/active issues across the project, indicating a stable period with no user-reported problems. The only open PR is a routine Alpine base-image version bump. No new releases were published.

---

## 2. Releases
No new releases were published in the last 24 hours. Omitted.

---

## 3. Project Progress
- **Merged/closed PRs today:** None.
- **Features advanced/fixed:** None — no code changes merged today.
- **Maintenance signal:** The only activity is [PR #956](https://github.com/nullclaw/nullclaw/pull/956), a Dependabot update for the `docker-images` group. It bumps the Alpine base image from `3.23` to `3.24`. This has been open since 2026-06-15 and was last updated 2026-08-17, but remains unmerged.

---

## 4. Community Hot Topics
There are no active issues, and the single PR ([#956](https://github.com/nullclaw/nullclaw/pull/956)) has zero reactions and no recorded comments. Underlying need: the PR reflects routine dependency hygiene — keeping the Docker base images current with Alpine 3.24. Its two-month open lifetime suggests a slow review process or that maintainers are intentionally deferring this bump. Low engagement overall indicates no fire drills or controversy in the community right now.

---

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported or fixed in the last 24 hours (0 open/active issues). Stability appears unremarkable — no new defect signals.

---

## 6. Feature Requests & Roadmap Signals
No user-submitted feature requests or roadmap signals exist in the current data (zero issues). The only forward-looking signal is the pending [Alpine 3.24 upgrade](https://github.com/nullclaw/nullclaw/pull/956), which affects the containerized distribution targets. If merged, it will align NullClaw's Docker images with the latest Alpine LTS line, granting updated security patches and package versions. This is the most likely candidate to appear in a future release, though no release timeline is visible.

---

## 7. User Feedback Summary
There is no user feedback data available for this period — no issues, comments, or reactions to analyze. The absence of bug reports and complaints is itself a mild positive indicator, though it may equally reflect low community engagement rather than high satisfaction. No user pain points or use-case signals are currently recorded.

---

## 8. Backlog Watch
- [PR #956 — ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group](https://github.com/nullclaw/nullclaw/pull/956)
  - **Open since:** 2026-06-15 (over 2 months)
  - **Last updated:** 2026-08-17
  - **Status:** Awaiting review/merge; no recorded comments or approvals.
  - **Concern:** A straightforward dependency bump left unmerged for two months is a potential signal of reduced maintainer availability or strict CI requirements. Recommend maintainer action (merge or provide an explanation) to prevent the patch from rotting.

---

*Data source: GitHub (nullclaw/nullclaw), activity window: 2026-08-17 to 2026-08-18.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-18

## Today's Overview
As of 2026-08-18, IronClaw shows high development activity: 28 issues and 44 PRs were updated in the last 24 hours, with no new releases. The open/active issue count is 22, with 6 issues closed; PRs split as 28 open and 16 closed/merged. Work continues to concentrate on the durable write-pressure epic ([#7591](https://github.com/nearai/ironclaw/issues/7591)), the durable notification inbox rollout ([#7687–#7691](https://github.com/nearai/ironclaw/issues/7687)), and QA/dogfooding bug fixes. A serious libSQL write-lane starvation bug ([#7714](https://github.com/nearai/ironclaw/issues/7714)) was reported and already has a dedicated fix PR ([#7717](https://github.com/nearai/ironclaw/pull/7717)). Overall, the project is shipping steadily but is currently balancing infrastructure optimization against user-facing reliability and onboarding gaps.

## Releases
No new releases were published in the last 24 hours. The latest release data is empty.

## Project Progress
16 PRs were closed/merged in the last 24 hours. Notable closed PRs visible in the dataset:

- [#7710](https://github.com/nearai/ironclaw/pull/7710) — `fix(slack)`: addressed multi-agent review findings on [#7682](https://github.com/nearai/ironclaw/pull/7682), including connect-link landing hardening.
- [#7703](https://github.com/nearai/ironclaw/pull/7703) — `feat(wasm)`: typed WIT tool response and bundled guest migration; closed/superseded by [#7711](https://github.com/nearai/ironclaw/pull/7711).
- [#7663](https://github.com/nearai/ironclaw/pull/7663) — `fix(release)`: forward-ported 1.2 fixes and thread-index projection repair onto `main`.

Several write-pressure reduction issues under epic [#7591](https://github.com/nearai/ironclaw/issues/7591) were closed, indicating progress on the DB write optimization roadmap:

- [#7594](https://github.com/nearai/ironclaw/issues/7594) — Tier 1: route loop milestone sink through `CoalescingEventSink`.
- [#7598](https://github.com/nearai/ironclaw/issues/7598) — Tier 2: collapse capability invocation-state writes.
- [#7605](https://github.com/nearai/ironclaw/issues/7605) — Tier 3: fold message lookup-index sibling rows into the message row.

Other closed issues include the design-system component boundary typing ([#7637](https://github.com/nearai/ironclaw/issues/7637)), deterministic no-delivery automation outcomes ([#7647](https://github.com/nearai/ironclaw/issues/7647)), and production verification of persistent memory recall ([#7275](https://github.com/nearai/ironclaw/issues/7275)).

Large feature PRs are also actively moving forward, including run-now automations ([#7708](https://github.com/nearai/ironclaw/pull/7708)), native structured output finalization ([#7693](https://github.com/nearai/ironclaw/pull/7693)), durable backend suggestions ([#7694](https://github.com/nearai/ironclaw/pull/7694)), semantic Google Docs editing tools ([#7718](https://github.com/nearai/ironclaw/pull/7718)), and the WASM capability-response normalization stack ([#7711](https://github.com/nearai/ironclaw/pull/7711)).

## Community Hot Topics
The most active issue threads by comment count are:

- [#7275](https://github.com/nearai/ironclaw/issues/7275) — *Reborn: verify explicit persistent memory recall across conversations in production* — 4 comments. Captures real user feedback that persistent memory is not reliably recalled across sessions.
- [#7591](https://github.com/nearai/ironclaw/issues/7591) — *Epic: reduce durable DB write pressure ~60%* — 3 comments. Maintainer-driven effort to cut row writes and keep multi-worker safety.
- [#7701](https://github.com/nearai/ironclaw/issues/7701), [#7603](https://github.com/nearai/ironclaw/issues/7603), [#7604](https://github.com/nearai/ironclaw/issues/7604), and [#3762](https://github.com/nearai/ironclaw/issues/3762) — each with 2 comments.

The underlying needs are clear: users expect durable memory and immediate identity-file edits to actually affect model behavior, while maintainers are prioritizing write amplification and storage-lane efficiency. The volume of activity around [#7591](https://github.com/nearai/ironclaw/issues/7591) shows a strong architectural focus on database cost and scalability.

## Bugs & Stability
Ranked by severity:

1. **Critical — libSQL write-lane starvation** ([#7714](https://github.com/nearai/ironclaw/issues/7714)): Under PinchBench load, the resource governor’s delta journal stalled ~40s waiting for the shared write connection, causing cascading authority invalidation, permanent reservation leaks, and capability-call failures. Fix PR: [#7717](https://github.com/nearai/ironclaw/pull/7717).
2. **High — Obligation audit records never attached in production** ([#7702](https://github.com/nearai/ironclaw/issues/7702)): The documented host-api contract requires `AuditBefore`/`AuditAfter` records, but they are never written in production. This is a contract violation rather than a write-pressure issue. No fix PR yet.
3. **High — Shutdown flush can hang on a wedged event backend** ([#7705](https://github.com/nearai/ironclaw/issues/7705)): Unbounded shutdown flush and a latching `pending_flush_error` in `CoalescingEventSink` were deliberately deferred from PR [#7631](https://github.com/nearai/ironclaw/pull/7631). No dedicated fix PR yet.
4. **Medium — MCP server flow missing bearer auth and transport options** ([#7716](https://github.com/nearai/ironclaw/issues/7716)): QA bug from Railway instance; the Add MCP server flow lacks API key/bearer token support and STDIO/HTTP transport options.
5. **Medium — Telegram connection flow lacks bot vs. personal account consent** ([#7715](https://github.com/nearai/ironclaw/issues/7715)): Users cannot choose between connecting a bot or a personal account, and are not informed which mode is active.
6. **Medium — Slack unlinked-user connect message is public and manual** ([#7681](https://github.com/nearai/ironclaw/issues/7681)): Connect nudge is visible to everyone in shared channels and requires a manual round trip. Fix PRs: [#7682](https://github.com/nearai/ironclaw/pull/7682) and follow-up [#7710](https://github.com/nearai/ironclaw/pull/7710).

The daily failure taxonomy ([#7704](https://github.com/nearai/ironclaw/issues/7704)) also highlights storage write-lane contention as the largest fixable IronClaw defect in recent Clawbench runs, aligning with the critical [#7714](https://github.com/nearai/ironclaw/issues/7714) report.

## Feature Requests & Roadmap Signals
Customer- and QA-driven feature signals from the last 24 hours:

- [#7719](https://github.com/nearai/ironclaw/issues/7719) — Expose GitHub Projects v2 field manipulation in the GitHub tool. This directly blocked setting Main backlog priority in a real workflow.
- [#7716](https://github.com/nearai/ironclaw/issues/7716) — Add bearer key auth and STDIO/HTTP transport options to the Add MCP server flow.
- [#7715](https://github.com/nearai/ironclaw/issues/7715) — Add consent/selection between bot and personal account in the Telegram connection flow.
- [#7681](https://github.com/nearai/ironclaw/issues/7681) — Private, one-click Slack connect flow for unlinked users.
- [#3762](https://github.com/nearai/ironclaw/issues/3762) — WebUI edits to `AGENTS.md` should update the system prompt for current/future conversations. This is labeled `suggested_P1` and `v1.4.0`, making it a strong near-term roadmap candidate.

Larger roadmap signals include the durable notification inbox epic ([#7687](https://github.com/nearai/ironclaw/issues/7687), [#7688](https://github.com/nearai/ironclaw/issues/7688), [#7689](https://github.com/nearai/ironclaw/issues/7689), [#7690](https://github.com/nearai/ironclaw/issues/7690), [#7691](https://github.com/nearai/ironclaw/issues/7691)), run-now automations ([#7708](https://github.com/nearai/ironclaw/pull/7708)), structured output finalization ([#7693](https://github.com/nearai/ironclaw/pull/7693)), durable backend suggestions ([#7694](https://github.com/nearai/ironclaw/pull/7694)), and the OOBE automation-tasks prototype ([#6994](https://github.com/nearai/ironclaw/pull/6994)).

## User Feedback Summary
The most significant user-reported pain point is persistent memory reliability: [#7275](https://github.com/nearai/ironclaw/issues/7275) cites feedback that information explicitly established in one conversation is not reliably recalled later. Relatedly, [#3762](https://github.com/nearai/ironclaw/issues/3762) shows users expect WebUI edits to `AGENTS.md` to take effect in ongoing and future conversations, but the system prompt does not update.

Onboarding/authentication feedback also surfaced: Slack users get a public, non-actionable connect nudge ([#7681](https://github.com/nearai/ironclaw/issues/7681)); MCP server setup lacks bearer authentication ([#7716](https://github.com/nearai/ironclaw/issues/7716)); and Telegram connection mode is unclear ([#7715](https://github.com/nearai/ironclaw/issues/7715)). Overall, visible feedback skews toward dissatisfaction with memory/identity-file consistency and connection/onboarding UX; no positive feedback items appeared in the provided data.

## Backlog Watch
Several older items may need maintainer attention:

- [#3762](https://github.com/nearai/ironclaw/issues/3762) — Opened 2026-05-18, `suggested_P1`, `customer`, `v1.4.0`. The `AGENTS.md` WebUI propagation issue remains open after three months.
- [#6994](https://github.com/nearai/ironclaw/pull/6994) — OOBE automation-tasks prototype opened 2026-08-01; still open with no visible recent review activity beyond updates.
- [#7184](https://github.com/nearai/ironclaw/pull/7184) — Nostr host functions for WASM tools, opened 2026-08-04 by a new contributor; still open.
- [#7513](https://github.com/nearai/ironclaw/pull/7513) — ACP serve command with streaming + cancel support, opened 2026-08-11 by a new contributor; still open.
- [#7406](https://github.com/nearai/ironclaw/pull/7406) — Dependabot actions group update, opened 2026-08-09; still open.

These items are not necessarily abandoned, but the mix of customer-labeled issues and newer-contributor PRs suggests they merit review or explicit roadmap placement.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-18

## Today’s Overview

In the 24-hour window ending 2026-08-18, LobsterAI saw **7 issue updates (all open)** and **21 PR updates**, of which **17 PRs were closed/merged** and **4 remain open**. No new release was published. The codebase is seeing strong contributor momentum, mainly around Cowork UX polish, Electron/main-process fixes, and runtime upgrades. At the same time, several user-reported issues from mid-April remain open and marked `[stale]`, suggesting that while PR throughput is high, public issue triage is lagging. Overall project health is mixed: healthy contributor activity, but a growing backlog of unresolved integration and stability bugs.

## Releases

No new releases were published in this 24-hour window.

## Project Progress

The visible closed/merged PRs in this window show continued work on agent UX, Electron reliability, and runtime integration.

### Runtime & Integration
- **OpenClaw runtime upgrade** — [PR #1663](https://github.com/netease-youdao/LobsterAI/pull/1663): upgraded OpenClaw to `v2026.4.12` and the `openclaw-weixin` plugin to `2.1.8`, fixing plugin SDK compatibility issues.
- **DeepSeek Harness (dsh) integration** — [PR #2502](https://github.com/netease-youdao/LobsterAI/pull/2502) and [PR #2505](https://github.com/netease-youdao/LobsterAI/pull/2505) landed engine and process-launcher support for dsh; docs are still open in [PR #2506](https://github.com/netease-youdao/LobsterAI/pull/2506).
- **Per-agent working directories** — [PR #1668](https://github.com/netease-youdao/LobsterAI/pull/1668): each non-main Agent can now have its own working directory, falling back to OpenClaw defaults when unset.
- **Qwen console link migration** — [PR #1667](https://github.com/netease-youdao/LobsterAI/pull/1667): moved Lingji/DashScope links to Alibaba Cloud Bailian console, matching upstream changes.

### Cowork & UI/UX
- **Scroll-to-bottom button** — [PR #1636](https://github.com/netease-youdao/LobsterAI/pull/1636)
- **Regenerate AI reply button** — [PR #1637](https://github.com/netease-youdao/LobsterAI/pull/1637)
- **Copy button for tool results** — [PR #1640](https://github.com/netease-youdao/LobsterAI/pull/1640)
- **Esc key support for modals** — [PR #1641](https://github.com/netease-youdao/LobsterAI/pull/1641)
- **Session list grouped by time period** — [PR #1675](https://github.com/netease-youdao/LobsterAI/pull/1675)
- **i18n tooltip fixes** — [PR #1639](https://github.com/netease-youdao/LobsterAI/pull/1639)
- **Non-main Agent welcome area** — still open as [PR #1660](https://github.com/netease-youdao/LobsterAI/pull/1660), but related per-agent work suggests it may be close to merging.

### Main Process / Electron / Reliability
- **Edit context menu for text inputs** — [PR #2503](https://github.com/netease-youdao/LobsterAI/pull/2503)
- **Skill upgrade progress overlay** — [PR #2501](https://github.com/netease-youdao/LobsterAI/pull/2501)
- **Windows Explorer right-click menu** — [PR #1642](https://github.com/netease-youdao/LobsterAI/pull/1642)
- **Sensitive log sanitization** — [PR #1661](https://github.com/netease-youdao/LobsterAI/pull/1661)
- **Settings/provider experience fixes** — [PR #1669](https://github.com/netease-youdao/LobsterAI/pull/1669)

## Community Hot Topics

- **[Issue #1653 — `groupPolicy` keeps being overwritten by allowlist](https://github.com/netease-youdao/LobsterAI/issues/1653)** — 2 comments. This is the most-discussed issue in the window. Users report that a configured group policy is silently replaced after a short period. Underlying need: a persistent, race-free configuration sync mechanism for policy settings.

- **[Issue #2500 — VOKO: cross-platform instant messaging and group collaboration for AI agents](https://github.com/netease-youdao/LobsterAI/issues/2500)** — 1 comment. A new external project proposal pitching A2A-standardized communication between agent frameworks and IM channels. Underlying signal: users are interested in multi-agent interoperability beyond LobsterAI’s own runtime.

- **Other updated issues** — [Issue #1635](https://github.com/netease-youdao/LobsterAI/issues/1635), [Issue #1643](https://github.com/netease-youdao/LobsterAI/issues/1643), [Issue #1644](https://github.com/netease-youdao/LobsterAI/issues/1644), [Issue #1662](https://github.com/netease-youdao/LobsterAI/issues/1662), and [Issue #1671](https://github.com/netease-youdao/LobsterAI/issues/1671) each have 1 comment but zero reactions. They represent long-standing user pain points rather than high-engagement conversations.

## Bugs & Stability

The following bugs were active or updated in the last 24 hours. None had a visible fix PR in this window.

| Severity | Issue | Summary | Status |
|---|---|---|---|
| High | [#1635 — Ollama local models unusable](https://github.com/netease-youdao/LobsterAI/issues/1635) | Local Ollama models, including Qwen3 and Gemma4, fail inside LobsterAI while working in other clients like Cherry Studio. | Open, stale, no fix PR |
| High | [#1662 — Non-SSE MCP engines cannot be used](https://github.com/netease-youdao/LobsterAI/issues/1662) | Only SSE-based MCP servers are discoverable; other MCP transport types are not recognized. | Open, stale, no fix PR |
| Medium-High | [#1671 — Markdown to Word conversion stops with `sse response finish reason: full`](https://github.com/netease-youdao/LobsterAI/issues/1671) | Long document conversion is truncated mid-task by a full SSE response. | Open, stale, no fix PR |
| Medium | [#1653 — `groupPolicy` overwritten every few minutes](https://github.com/netease-youdao/LobsterAI/issues/1653) | Policy setting is replaced by `allowlist` shortly after being set. | Open, stale, no fix PR |
| Low-Medium | [#1643 — Manual scheduled task save shows false “unsaved content” warning](https://github.com/netease-youdao/LobsterAI/issues/1643) | Save succeeds, but the UI warns that content is still unsaved. | Open, stale, no fix PR |

## Feature Requests & Roadmap Signals

- **[Issue #1644 — MD-based workflows and multi-agent orchestration](https://github.com/netease-youdao/LobsterAI/issues/1644)** — A user requests that the main Agent be able to discover and coordinate other existing Agents to complete complex tasks. This aligns with the recently merged per-agent working directory feature and suggests that deeper multi-agent orchestration may be a roadmap direction.

- **[Issue #2500 — VOKO A2A interoperability](https://github.com/netease-youdao/LobsterAI/issues/2500)** — An external proposal for cross-framework, cross-IM agent communication. This is more ecosystem outreach than a direct feature request, but it highlights demand for open interoperability.

- **[PR #2504 — OrcaRouter provider integration](https://github.com/netease-youdao/LobsterAI/pull/2504)** — Open PR adding OrcaRouter as a first-class provider, mirroring OpenRouter wiring. Likely candidate for the next release if reviewed and merged.

- **[PR #2506 — dsh runtime documentation](https://github.com/netease-youdao/LobsterAI/pull/2506)** — Docs for DeepSeek Harness runtime setup. Since dsh engine integration and process launcher PRs are already closed, docs and a follow-up release are expected.

- **[PR #1660 — Non-main Agent welcome area](https://github.com/netease-youdao/LobsterAI/pull/1660)** — Open PR to show Agent name and description on the home/welcome screen when a non-main Agent is selected. Combined with per-agent working directories, this suggests a broader push toward per-agent personalization.

## User Feedback Summary

User reports in this window cluster around real integration blockers:

- Local model users are frustrated: **Ollama models that work in other tools fail inside LobsterAI** ([#1635](https://github.com/netease-youdao/LobsterAI/issues/1635)).
- MCP users are constrained by **SSE-only support**, leaving many existing MCP servers unusable ([#1662](https://github.com/netease-youdao/LobsterAI/issues/1662)).
- Long-running generation tasks are **truncated mid-response**, breaking document conversion workflows ([#1671](https://github.com/netease-youdao/LobsterAI/issues/1671)).
- Configuration persistence issues remain, e.g. **groupPolicy being overwritten** ([#1653](https://github.com/netease-youdao/LobsterAI/issues/1653)).

On the positive side, community contributors continue to submit practical UX improvements — scroll-to-bottom, regenerate replies, tool-result copy buttons, Esc-to-close, and i18n fixes. This indicates an active user base that values the Cowork chat experience and is willing to contribute fixes directly.

## Backlog Watch

Several important issues and PRs have been open for a long time and need maintainer attention:

| Item | Since | Why It Matters |
|---|---|---|
| [#1635 — Ollama local models unusable](https://github.com/netease-youdao/LobsterAI/issues/1635) | 2026-04-12 | Blocks users relying on local models. |
| [#1662 — Non-SSE MCP cannot be used](https://github.com/netease-youdao/LobsterAI/issues/1662) | 2026-04-14 | Blocks non-SSE MCP server integrations. |
| [#1671 — MD-to-Word conversion truncated](https://github.com/netease-youdao/LobsterAI/issues/1671) | 2026-04-14 | Causes incomplete output in document workflows. |
| [#1653 — groupPolicy overwritten](https://github.com/netease-youdao/LobsterAI/issues/1653) | 2026-04-13 | Configuration reliability issue. |
| [#1643 — Scheduled task save false error](https://github.com/netease-youdao/LobsterAI/issues/1643) | 2026-04-12 | Minor but confusing UX bug. |
| [#1644 — Workflow-based multi-agent orchestration](https://github.com/netease-youdao/LobsterAI/issues/1644) | 2026-04-12 | Potentially important roadmap direction. |
| [#1660 — Non-main Agent welcome area](https://github.com/netease-youdao/LobsterAI/pull/1660) | 2026-04-13 | Open PR stuck for months despite related merged work. |
| [#1277 — Dependabot Electron group bump](https://github.com/netease-youdao/LobsterAI/pull/1277) | 2026-04-02 | Long-open dependency update; needs rebase/review or explicit closure. |

The `[stale]` labels on many April issues suggest automated staleness handling is active, but these are not resolved user problems. A maintainer pass to either fix, close, or re-scope these items would significantly improve the project’s responsiveness signal.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-18

## Today's Overview

Moltis saw moderate activity in the last 24 hours: 2 issues were closed and 6 PRs were merged/closed, with 3 PRs still open. No new releases were published. The day mixed housekeeping (dependency bumps, CI format gate cleanup) with meaningful feature landings, including external-agent model/effort selection, a MiniMax Code ACP agent, and configurable WebUI RPC timeouts. The open PRs show active work on heartbeat configuration correctness and a new managed Files library / Settings browser. Overall project health looks stable, with no crashes or security regressions reported in this window.

## Releases

No new releases were published in the last 24 hours, so there are no changelog entries, breaking changes, or migration notes to detail.

## Project Progress

Six PRs were merged/closed:

- **#1125 — Support model and effort selection for external agents** ([PR](https://github.com/moltis-org/moltis/pull/1125))  
  Adds first-class `models = [...]` and `efforts = [...]` configuration for external-agent providers, plus `/model` integration and metadata persistence.

- **#1103 — fix(browser): pierce shadow DOM lookups efficiently** ([PR](https://github.com/moltis-org/moltis/pull/1103))  
  Fixes and improves shadow DOM traversal in browser snapshot and ref-based lookup paths.

- **#1204 — feat: add MiniMax Code ACP agent** ([PR](https://github.com/moltis-org/moltis/pull/1204))  
  Adds `acp-minimax-code` as a named external-agent kind backed by `mcode acp`, including executable detection, registry, docs, and config validation.

- **#1130 — feat: make webui rpc timeout configurable** ([PR](https://github.com/moltis-org/moltis/pull/1130))  
  Resolves the long-standing feature request #1127 by making the WebUI RPC timeout user-configurable.

- **#1207 — chore(deps): bump cargo group with 4 updates** ([PR](https://github.com/moltis-org/moltis/pull/1207))  
  Updates `wasmtime-wasi`, `cmov`, `quinn-proto`, and `serde_with`.

- **#1087 — chore(deps): bump tar from 0.4.45 to 0.4.46** ([PR](https://github.com/moltis-org/moltis/pull/1087))  
  Routine dependency bump.

Two issues were also closed:

- **#1202 — Format CI gate is red on main** ([Issue](https://github.com/moltis-org/moltis/issues/1202)) — files exceeding the 1500-line limit.
- **#1127 — allow to configure rpc timeout** ([Issue](https://github.com/moltis-org/moltis/issues/1127)) — resolved by #1130.

## Community Hot Topics

No issues or PRs in this window had reported comment/reaction activity; issue 👍 counts were 0 and PR comment fields were not populated, so engagement metrics are limited.

The most substantive community-driven items were:

- **Heartbeat configuration fixes**: [#1209](https://github.com/moltis-org/moltis/pull/1209) and [#1208](https://github.com/moltis-org/moltis/pull/1208) address real configuration pitfalls. The underlying need is that users expect partial updates and documented scheduling windows to behave predictably.

- **External-agent extensibility**: [#1125](https://github.com/moltis-org/moltis/pull/1125) and [#1204](https://github.com/moltis-org/moltis/pull/1204) show demand for broader provider support and more granular model/effort control.

- **New managed Files library**: [#1206](https://github.com/moltis-org/moltis/pull/1206) is an open, large-scope PR adding a persistent Files library, Settings browser, and container mount configurations. It signals interest in richer local data/file management.

## Bugs & Stability

Ranked by severity:

1. **Heartbeat config clobbering / default overwrite** — [#1209](https://github.com/moltis-org/moltis/pull/1209)  
   `heartbeat.update` deserializes params directly into `HeartbeatConfig` and replaces the whole config, causing omitted keys to fall back to defaults. This can silently overwrite user configuration. An open fix treats params as a patch instead.

2. **Heartbeat `active_hours` ignored** — [#1208](https://github.com/moltis-org/moltis/pull/1208)  
   `is_within_active_hours` exists and is tested, but nothing calls it, so the feature has no effect. An open fix wires it into the cron scheduler.

3. **Format CI gate red on main** — [#1202](https://github.com/moltis-org/moltis/issues/1202)  
   `scripts/check-file-size.sh` failed on two large files (`store.rs`, `admin.rs`), making the Format job red. This is repository-hygiene/CI severity rather than runtime severity; the issue is closed.

4. **Shadow DOM lookup limitation** — [#1103](https://github.com/moltis-org/moltis/pull/1103)  
   Browser snapshot and ref-based lookup paths previously did not efficiently pierce shadow DOM. This was fixed and merged.

No crashes or security regressions were reported in this window.

## Feature Requests & Roadmap Signals

- **Configurable RPC timeout** ([#1127](https://github.com/moltis-org/moltis/issues/1127)) — requested in June, now implemented by #1130. Likely shipping in the next release.
- **Model and effort selection for external agents** ([#1125](https://github.com/moltis-org/moltis/pull/1125)) — merged; likely a next-version feature.
- **MiniMax Code ACP agent** ([#1204](https://github.com/moltis-org/moltis/pull/1204)) — merged; expands the external agent ecosystem.
- **Managed Files library and Settings browser** ([#1206](https://github.com/moltis-org/moltis/pull/1206)) — still open; a larger product-direction signal around data-directory management, file APIs, and UI settings browsing.

Prediction: the next Moltis release will likely include heartbeat patch semantics, active-hours support, configurable RPC timeout, external-agent model/effort selection, MiniMax Code support, and shadow DOM browser improvements. The Files library / Settings browser may land later or in a subsequent minor release.

## User Feedback Summary

User pain points visible in this window center on configuration control and external-agent flexibility:

- Heartbeat partial updates should not reset unrelated settings ([#1209](https://github.com/moltis-org/moltis/pull/1209)).
- `active_hours` should actually restrict scheduled heartbeats ([#1208](https://github.com/moltis-org/moltis/pull/1208)).
- Operators want configurable RPC timeouts for WebUI connections ([#1127](https://github.com/moltis-org/moltis/issues/1127)).
- Users are requesting more external agent providers, including MiniMax Code ([#1204](https://github.com/moltis-org/moltis/pull/1204)).
- Browser automation needed robust shadow DOM piercing for agent reliability ([#1103](https://github.com/moltis-org/moltis/pull/1103)).

Overall, the pattern indicates a user base pushing for both reliability and broader integration choices. Explicit satisfaction signals are sparse due to low comment counts, but the merge of several long-lived requests suggests maintainer responsiveness is improving.

## Backlog Watch

Several items closed this week had been open for a long time:

- **#1087 — tar bump** ([PR](https://github.com/moltis-org/moltis/pull/1087)): open from May 29 to Aug 17 (~80 days).
- **#1103 — shadow DOM fix** ([PR](https://github.com/moltis-org/moltis/pull/1103)): open from Jun 4 to Aug 17 (~74 days).
- **#1125 — model/effort selection** ([PR](https://github.com/moltis-org/moltis/pull/1125)): open from Jun 15 to Aug 17 (~63 days).
- **#1127 — RPC timeout request** ([Issue](https://github.com/moltis-org/moltis/issues/1127)): open from Jun 17 to Aug 17 (~61 days).

These long lead times suggest maintainer bandwidth has been constrained, but the recent closings indicate backlog is being worked down. No old open issues appear in this window. The PRs to watch now are the fresh heartbeat fixes ([#1208](https://github.com/moltis-org/moltis/pull/1208), [#1209](https://github.com/moltis-org/moltis/pull/1209)) and the large Files library feature ([#1206](https://github.com/moltis-org/moltis/pull/1206)).

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-18

## 1. Today's Overview

CoPaw is in a high-activity stabilization and feature-delivery phase: 35 PRs were updated in the last 24 hours (13 open, 22 merged/closed) and 14 issues were active (8 still open). No new release was published, so all merged work is accumulating toward the next 2.1.x patch or 2.2. Community discussion is concentrated on 2.1.0 regressions around sessions, media handling, and MCP behavior, while contributors continue to push UI polish, provider integrations, and new memory/search backends. Maintainer response appears fast, with several bug reports closed or addressed by corresponding PRs within the same day.

## 2. Releases

No new releases were published in this window.

## 3. Project Progress

Highlights from the 22 merged/closed PRs updated in the last 24 hours:

- **DataPaw native app runtime** — [PR #6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) adds a native DataPaw PawApp runtime and durable analysis workspace. A standalone release pipeline for it is proposed in [PR #7089](https://github.com/agentscope-ai/QwenPaw/pull/7089).
- **AnySearch web search integration** — [PR #6817](https://github.com/agentscope-ai/QwenPaw/pull/6817) was closed, with a refreshed integration opened as [PR #7081](https://github.com/agentscope-ai/QwenPaw/pull/7081), including MCP env-ref header fixes.
- **Console UI/UX improvements**:
  - [PR #7083](https://github.com/agentscope-ai/QwenPaw/pull/7083) — compact background task list with scroll hint.
  - [PR #7036](https://github.com/agentscope-ai/QwenPaw/pull/7036) — unified media download controls.
  - [PR #7017](https://github.com/agentscope-ai/QwenPaw/pull/7017) — newly installed PawApps open without manual reload.
  - [PR #6975](https://github.com/agentscope-ai/QwenPaw/pull/6975) — context-usage ring now updates after `/compact`.
  - [PR #6981](https://github.com/agentscope-ai/QwenPaw/pull/6981) — remove `/approve` and `/deny` hints from chat input placeholders.
- **Token accounting fix** — [PR #6968](https://github.com/agentscope-ai/QwenPaw/pull/6968) stops counting base64 image data as text tokens, preventing false context-window pressure.
- **GitPanel style fix** — [PR #5151](https://github.com/agentscope-ai/QwenPaw/pull/5151) fixes Tabs styles not applying because of a `prefixCls` mismatch.

## 4. Community Hot Topics

The most discussed items are bug reports and setup pain points, not features:

- [Issue #6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) *(closed, 7 comments)* — MCP tools fail with “Tool notfound” after upgrading to 2.0, even when the `[mcp-key]__[tool_name]` naming convention is correct. Underlying need: clearer MCP upgrade diagnostics.
- [Issue #7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) *(open, 6 comments)* — Console stop request can cancel an active Feishu session when multiple UI sessions share identity values. This is a serious multi-session isolation bug.
- [Issue #7085](https://github.com/agentscope-ai/QwenPaw/issues/7085) *(open, 3 comments)* — Request for per-channel model configuration, e.g. DingTalk uses `gpt-4o`, WeChat uses `qwen-max`, Console uses local `llama.cpp`.
- [Issue #7063](https://github.com/agentscope-ai/QwenPaw/issues/7063) *(closed as invalid, 3 comments)* — Agent tool-call crash caused by misusing a coroutine in `_execute_tool_call`. The closing suggests it was a user-side or environment-specific issue.

No PRs attracted significant commentary in this window.

## 5. Bugs & Stability

Ranked by potential impact:

1. **Multi-session cancellation / identity crossing** — [Issue #7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) *(open)*: Console stop request can terminate an active Feishu conversation. No linked fix PR yet; highest-severity open bug.
2. **Expired QQ image URLs poison OneBot sessions** — [Issue #7088](https://github.com/agentscope-ai/QwenPaw/issues/7088) *(closed)*: signed `rkey` URLs expire, causing provider-side download failures and stale-message poisoning. [PR #7087](https://github.com/agentscope-ai/QwenPaw/pull/7087) directly addresses the root cause by localizing remote media URLs before model requests.
3. **`_StructuredOutputDynamicClass` Pydantic init failure** — [Issue #7082](https://github.com/agentscope-ai/QwenPaw/issues/7082) *(open)*: model execution fails during agent/toolkit initialization with “not fully defined”; likely needs `model_rebuild_` handling.
4. **Cannot open historical conversation with a single history item** — [Issue #7084](https://github.com/agentscope-ai/QwenPaw/issues/7084) *(open)*: with only one historical chat, opening a new chat makes the existing history entry unclickable.
5. **Plugin runtime hooks lost after workspace reload** — [Issue #7077](https://github.com/agentscope-ai/QwenPaw/issues/7077) *(closed)*: hot-installed plugins lose `register_runtime_hook()` / `register_skill_provider()` callbacks when the workspace instance is replaced.
6. **Creator LLM config 404** — [Issue #7076](https://github.com/agentscope-ai/QwenPaw/issues/7076) *(open)*: `qwenpaw-creator` reports 404 on LLM model configuration in 2.1.0.
7. **Console image attachments lost on session reload** — [Issue #7051](https://github.com/agentscope-ai/QwenPaw/issues/7051) *(closed)*: images render initially but become broken thumbnails after reopening the chat.
8. **`cron update` no-op** — [Issue #7048](https://github.com/agentscope-ai/QwenPaw/issues/7048) *(closed as invalid)*: `qwenpaw cron update <id> --text` returns success but does not change the prompt.

## 6. Feature Requests & Roadmap Signals

Clear roadmap signals are emerging:

- **Per-channel model configuration** — [Issue #7085](https://github.com/agentscope-ai/QwenPaw/issues/7085) is likely to be prioritized given its concrete use cases and existing channel abstraction.
- **Single-window agent collaboration** — [Issue #6925](https://github.com/agentscope-ai/QwenPaw/issues/6925) asks that collaborating agents share one conversation session instead of spawning new sessions.
- **Scheduled task observability** — [Issue #7075](https://github.com/agentscope-ai/QwenPaw/issues/7075) requests start time, duration, end time, and run result for cron tasks.
- **Pluggable long-term memory** — [Issue #7079](https://github.com/agentscope-ai/QwenPaw/issues/7079) and [PR #7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) add an optional PowerContext-backed `BaseMemoryManager` backend.
- **Provider/model metadata unification** — [PR #6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) is a large catalog-driven provider/model routing change.
- **New provider support** — [PR #6515](https://github.com/agentscope-ai/QwenPaw/pull/6515) adds Volcengine Agent Plan and Xiaomi MiMo V2.5 API as built-in providers.
- **Session-scoped multi-project directories** — [PR #6976](https://github.com/agentscope-ai/QwenPaw/pull/6976) enables a chat to bind to multiple ordered project directories.
- **Persistent workspace artifact cards** — [PR #6719](https://github.com/agentscope-ai/QwenPaw/pull/6719) persists WorkBuddy-style artifact cards in chat sessions.
- **System prompt file picker** — [PR #7078](https://github.com/agentscope-ai/QwenPaw/pull/7078) adds a focused prompt-file picker to the Console files workspace.

## 7. User Feedback Summary

- **Upgrade friction is real for MCP users**: the most-commented issue this window is still [Issue #6405](https://github.com/agentscope-ai/QwenPaw/issues/6405), where MCP tools stop working after upgrading to 2.0. Users understand the naming convention but still hit “Tool notfound”.
- **Chinese-speaking users are highly active**: most feature requests and bug reports are written in Chinese, especially around channel-specific behavior, scheduled tasks, and creator configuration.
- **Console/desktop session persistence concerns are growing**: multiple reports describe lost image attachments, broken history selection, and background-task UI issues. These are affecting trust in the 2.1.x desktop experience.
- **Positive contributor momentum exists**: many UI fixes, especially around token usage, context ring, language options, and media controls, show that the project is responsive to reported annoyances.
- **Power users want more control**: per-channel model routing, memory backend pluggability, and detailed cron execution logs are common asks from advanced deployments.

## 8. Backlog Watch

Items that appear to need maintainer attention:

- [PR #6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) *(open since 2026-07-21)* — Large provider discovery / model routing refactor. No visible review or close activity; risk of becoming stale.
- [PR #6515](https://github.com/agentscope-ai/QwenPaw/pull/6515) *(open since 2026-07-28)* — Adds Volcengine Agent Plan and Xiaomi MiMo V2.5 providers; waiting for maintainer feedback.
- [PR #6719](https://github.com/agentscope-ai/QwenPaw/pull/6719) *(open since 2026-08-05)* — Persistent workspace artifact cards; no comment data captured, still unmerged.
- [Issue #7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) *(open since 2026-08-14, 6 comments)* — Serious multi-session cancellation bug in 2.1.0 with no linked fix PR yet.
- [Issue #6925](https://github.com/agentscope-ai/QwenPaw/issues/6925) *(open since 2026-08-12)* — Agent collaboration in a single session window; no maintainer signal yet.
- [Issue #7082](https://github.com/agentscope-ai/QwenPaw/issues/7082) *(open since 2026-08-17)* — Pydantic `_StructuredOutputDynamicClass` failure may be a hidden blocker for tool/agent init and should be triaged quickly.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

## ZeroClaw Project Digest — 2026-08-18

### 1. Today’s Overview

ZeroClaw had a very active 24-hour window: 50 issues and 50 PRs were updated, with 43 issues remaining open/active and 7 closed, while 16 PRs moved to merged/closed status. Activity was dominated by RFCs and high-risk architecture/security work around authentication, session ownership, attachments, shell policy, and provider reliability. A large batch of security-focused bug fixes and CI hardening changes also landed or reached review. No release was published; the current referenced release line remains 0.8.4. Maintainer review bandwidth appears to be a bottleneck, with several high-risk PRs and RFCs still awaiting maintainer action.

### 2. Releases

No new releases were published in the 2026-08-17/2026-08-18 window. The roadmap RFC tracker still references `0.8.4` as the current release, with `0.8.0-beta-1` as the starting point for the work-lanes rollout. No migration or breaking-change notes are available for this window.

### 3. Project Progress

The following notable PRs were closed/merged or otherwise moved forward in the update window:

- **#9996** — `fix(security): make action budget accounting atomic`  
  Reserves sender-scoped action-budget capacity atomically before tool execution, fixing parallel-dispatch over-counting/under-counting.  
  https://github.com/zeroclaw-labs/zeroclaw/pull/9996

- **#9973** — `fix(providers): keep Gemini API keys out of URLs`  
  Moves Gemini API keys from URLs to the `x-goog-api-key` header to prevent exposure via logs/diagnostics.  
  https://github.com/zeroclaw-labs/zeroclaw/pull/9973

- **#10000** — `fix(channels): bound QQ and Mattermost downloads`  
  Adds a shared bounded HTTP reader to enforce download size limits for both channels.  
  https://github.com/zeroclaw-labs/zeroclaw/pull/10000

- **#9993** — `fix(email): stop implicit attachment file reads`  
  Builds MIME attachments only from in-memory data, preventing empty payloads from becoming local file reads.  
  https://github.com/zeroclaw-labs/zeroclaw/pull/9993

- **#9612** — `fix(channels): tie the WhatsApp Cloud approval token to a guard so no exit orphans it`  
  Fixes a credential-leak/lifecycle bug in WhatsApp approval flow.  
  https://github.com/zeroclaw-labs/zeroclaw/pull/9612

- **#9765** — `fix(sop): load SOP definitions from the shared workspace, not data_dir`  
  Corrects SOP definition loading to use `workspace_dir` for definitions and `data_dir` only for the durable run store.  
  https://github.com/zeroclaw-labs/zeroclaw/pull/9765

- **#9544** — `fix(delegate): honor configured provider fallbacks`  
  Delegated agents now use the canonical session provider builder, so aliases, routing, retries, and fallback candidates are respected.  
  https://github.com/zeroclaw-labs/zeroclaw/pull/9544

- **#9398** — `ci(tests): add scheduled macOS and Windows tests`  
  Adds a scheduled platform test workflow to catch cross-platform regressions outside Linux.  
  https://github.com/zeroclaw-labs/zeroclaw/pull/9398

- **#10039** — `ci(clippy): share Clippy command runner across workflows`  
  Extracts repeated Clippy logic into `scripts/ci/run_clippy.sh` to prevent workflow drift.  
  https://github.com/zeroclaw-labs/zeroclaw/pull/10039

- **#10010** — `test(cron): avoid ETXTBSY race in custom shell test`  
  Replaces runtime-written executable fixtures with symlinks to avoid a test race.  
  https://github.com/zeroclaw-labs/zeroclaw/pull/10010

- **#10043** — `ci(lint): remove duplicate architecture test guards`  
  Removes duplicate architecture-test invocations from the Lint workflow.  
  https://github.com/zeroclaw-labs/zeroclaw/pull/10043

- **#9547** — `chore(channels): upgrade CPAL to 0.18`  
  Upgrades audio dependency and migrates Voice Wake to CPAL 0.18 APIs.  
  https://github.com/zeroclaw-labs/zeroclaw/pull/9547

Closed issues in the window include **#7884** (shared Clippy runner), **#9594** (coding-agent tools charge action budget twice), and **#9849** (non-atomic `RateLimitedTool` budget check). These align with the merged action-budget and CI-sharing work above.

### 4. Community Hot Topics

The most active issues by comment count show heavy RFC and governance discussion:

- **#6808 — RFC: Work Lanes, Board Automation, and Label Cleanup** (23 comments)  
  Ratified governance RFC for routing work with less manual maintainer overhead.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/6808

- **#8603 — RFC: ZeroClaw Chat Completions profile** (23 comments)  
  Would let OpenAI-compatible clients such as Open WebUI, LobeChat, and Continue.dev use ZeroClaw.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/8603

- **#8303 — RFC: Goal mode v1 — bounded foreground Matrix work** (22 comments, 1 👍)  
  Proposes durable, bounded multi-turn user objectives.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/8303

- **#7155 — RFC: per-execution confirmation tier for high-risk shell commands** (20 comments)  
  A shell-policy contract with allow/ask/deny patterns, similar to Claude Code.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/7155

- **#9487 — RFC: Runtime-owned conversation sessions and transport surface adapters** (19 comments)  
  Architectural proposal to make sessions runtime-owned and normalize inbound actions.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/9487

- **#9488 — RFC: Unified attachment architecture for web chat and channels** (18 comments)  
  Companion proposal for attachments across all channels.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/9488

Underlying needs: the community is pushing for interoperability with standard client protocols, safer shell/tool execution, session/attachment abstractions that scale across channels, and lower maintainer process burden. The RFC-heavy activity suggests a deliberate design phase before the next major release.

On the PR side, comment counts were not available, but the largest/highest-risk open PRs include **#9109** (Hailo-Ollama support, size XL), **#10003** (Reliable provider attempt accounting, size XL), and **#9314** (Telegram long-poll offset fix, p1, size XL).

### 5. Bugs & Stability

Ranked by severity and user impact:

- **#7462 — 74 test failures on Windows** (p1, S2)  
  Windows test failures caused by Unix-only test commands, path semantics, and console encoding; CI does not run tests on Windows by default. No dedicated fix PR is listed yet, though #9398 adds scheduled Windows/macOS CI.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/7462

- **#9849 — RateLimitedTool budget check is non-atomic under parallel dispatch** (p2, S2, closed)  
  Parallel tool calls could jointly exceed `max_actions_per_hour`. Fix PR **#9996** landed in this window.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/9849

- **#9594 — Coding-agent tools charge the action budget twice** (p2, S2, closed)  
  Double charging for a single successful tool invocation. Closed as accepted/follow-up; likely addressed by action-budget accounting work.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/9594

- **#10023 — Failure logs claim the requested model, not the pinned fallback model** (p2, in progress)  
  Misleading retry/cooldown logs when a fallback provider serves a different pinned model.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/10023

Security-related bug fixes in the window:

- **#9973** fixed Gemini API keys appearing in URLs.  
- **#10000** bounded QQ/Mattermost attachment downloads.  
- **#9993** eliminated implicit email attachment file reads.  
- **#9612** fixed WhatsApp approval token lifecycle/orphaning.  
- **#9397** remains open: empty WhatsApp Web `allowed_groups` should be permit-none instead of allow-all.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/9397

### 6. Feature Requests & Roadmap Signals

The roadmap is clearly converging on a v0.9.0 security/architecture milestone, tracked by **#7432**:

- **#7141** — Pluggable inbound authentication and canonical principals (accepted RFC)  
- **#7142** — Runtime-owned security decision pipeline and restrictive overlays (accepted RFC)  
- **#9346** — Unified package/capability/config/runtime-state catalog contract (accepted RFC)  
- **#7100** — Per-model capability and context-window config (accepted RFC)  
- **#9487 / #9488** — Runtime-owned sessions and unified attachment architecture  
- **#8603** — Chat Completions profile for OpenAI-compatible clients  
- **#8303** — Goal mode v1  
- **#7155** — High-risk shell command policy and allow/ask/deny  
- **#6165** — Lighter core via external integrations (old, needs maintainer review)  
- **#9621** — Staged opt-in telemetry for usage-based maintainer decisions  
- **#9496** — Streamline RFC scope, discussion, voting, and assignment

Predictions: the next minor/major release will likely include the accepted auth/security RFCs, per-model capability configuration, and possibly the Chat Completions profile if **#8603** finishes ratification. The `0.8.x` line is still absorbing the work-lanes governance rollout from **#6808**.

### 7. User Feedback Summary

Real pain points visible in this window:

- **Contributors find the RFC process slow and heavy**: **#9496** explicitly calls out the 7-day minimum discussion period, unanimity requirements, and manual vote coordination.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/9496

- **Windows developers are underserved by CI**: **#7462** reports 74 local test failures that CI does not catch because tests only run on Linux.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/7462

- **Operators want config changes to apply without daemon reload**: **#7897** describes security/channel config updates that persist but do not take effect until `/admin/reload`.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/7897

- **Maintainers lack real usage data**: **#9621** notes that decisions about removing or keeping features are made without knowing actual production usage.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/9621

- **Security-sensitive bugs are getting fixed quickly**, especially around API key exposure, channel download limits, and file-read side effects, which is a positive signal for project health.

### 8. Backlog Watch

Items that appear stuck or are waiting on maintainer/author attention:

- **#6165 — RFC: Prefer a lighter ZeroClaw core through external integrations**  
  Open since 2026-04-27, labeled `needs-maintainer-review`. This is a major architectural direction and has been waiting months.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/6165

- **#9487 / #9488 — Session and attachment architecture RFCs**  
  Both are high-risk architecture RFCs with `needs-maintainer-review`; #9488 also has `needs-author-action`.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/9487  
  https://github.com/zeroclaw-labs/zeroclaw/issues/9488

- **#9598 — RFC: Define the SOP capability permission contract**  
  Needs maintainer review; affects v0.9.0 SOP authorization.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/9598

- **#8692 — Maintainer decision queue for RFCs and design issues**  
  The tracker itself is the coordination point for pending maintainer decisions.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/8692

- **#6653 — Define host-architecture policy for emulated installs**  
  Open since 2026-05-14, low priority but unresolved architecture policy.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/6653

- **#9056 — PR: surface cause-specific provider failure diagnostics**  
  Labeled `needs-author-action` and `stale-candidate`; needs author update or closure.  
  https://github.com/zeroclaw-labs/zeroclaw/pull/9056

- **#9109 — PR: native Hailo-Ollama support**  
  Large, high-risk feature PR with `needs-author-action`; has been open since 2026-07-17.  
  https://github.com/zeroclaw-labs/zeroclaw/pull/9109

- **#9314 — PR: Telegram long-poll offset fix**  
  p1, high-risk, size XL, still open and needs maintainer review.  
  https://github.com/zeroclaw-labs/zeroclaw/pull/9314

- **#9808 — Dependabot rust-all bump with 46 updates**  
  Open, risk high, size large; dependencies may need maintainer attention before merging.  
  https://github.com/zeroclaw-labs/zeroclaw/pull/9808

Overall, ZeroClaw is in a healthy but intense design-and-hardening phase: security fixes are moving quickly, while the largest architectural RFCs and cross-platform CI improvements still need sustained maintainer investment.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*