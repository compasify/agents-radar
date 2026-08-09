# OpenClaw Ecosystem Digest 2026-08-09

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-09 00:51 UTC

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

# OpenClaw Project Digest — 2026-08-09

## 1. Today's Overview

OpenClaw is in an exceptionally active maintenance cycle: 500 issues and 500 PRs were updated in the last 24 hours, with 49 issues closed and 178 PRs merged/closed. Two security-focused patch releases (v2026.6.33, v2026.6.34) shipped back-to-back, hardening browser, network, and secret-handling boundaries. The dominant community concern remains delivery reliability — silent reply failures, lost subagent completions, and gateway memory leaks dominate the top-engagement issues. Maintainer responsiveness is high (steipete alone authored ~15 of the top-30 PRs), though the 2026.7.x line still carries three open P0 regressions, indicating a rocky upgrade window.

## 2. Releases

Two releases in the last 24h, both on the stable 2026.6.x line:

**v2026.6.34 — Safer browser and network boundaries**
- Sandboxed browser routes now reject unsafe access paths
- Trusted DNS targets enforced
- Custom browser origins validated
- Loopback provider endpoints reject unsafe access paths
- Thanks: @eleqtrizit, @brunowowk, @mosidevv, @pgondhi987 (#97958, #38290, #103075, #110693)

**v2026.6.33 — Safer network and secret boundaries**
- Provider streams, Discord REST responses, browser fetches, OAuth paths, and logs now cap hostile response sizes
- Telegram credentials excluded from diagnostics
- Thanks: @wangmiao0668000666, @Alix-007 (#96989, #95412, #99428)

No explicit breaking changes or migration notes were published with either release. Note that both releases remain on the 2026.6.x line; the 2026.7.1/7.2-beta upgrade path still has open P0 startup blockers ([#108435](https://github.com/openclaw/openclaw/issues/108435), [#112395](https://github.com/openclaw/openclaw/issues/112395)).

## 3. Project Progress

Aggregate data shows **178 PRs merged/closed in the last 24h**. Representative activity from the top-updated set:

**Merged/closed:**
- [fix(ui): keep dashboards alive across view switches (#120640)](https://github.com/openclaw/openclaw/pull/120640) — closes #120639
- [fix(process): report output discarded by retention caps (#120705)](https://github.com/openclaw/openclaw/pull/120705)
- [fix(ui): label pasted-text action "Edit as text" (#120799, #120795)](https://github.com/openclaw/openclaw/pull/120799) — closes #120767

**Features advanced (open PRs):**
- [feat(memory): multi-slot memory role architecture (#88504)](https://github.com/openclaw/openclaw/pull/88504) — large architectural change giving memory multiple owners (factual recall, auto-capture, compaction) instead of one exclusive slot
- [feat(codex): bind native realtime voice to existing sessions (#119001)](https://github.com/openclaw/openclaw/pull/119001)
- [feat(pairing): one-paste device pairing via oc-pair setup links (#120768)](https://github.com/openclaw/openclaw/pull/120768)
- [feat(cli): `openclaw resume` attaches TUI to a recent session (#120664)](https://github.com/openclaw/openclaw/pull/120664)

**Stability/perf fixes in flight:**
- [perf(sessions): externalize large entry blobs out of hot list read (#120268)](https://github.com/openclaw/openclaw/pull/120268) — fixes multi-second session listing on 2.4 GB agent DBs
- [fix(gateway): preserve responses output for media-only turns (#120789)](https://github.com/openclaw/openclaw/pull/120789)
- [fix(agents): apply per-agent contextTokens cap to embedded run budget (#120343)](https://github.com/openclaw/openclaw/pull/120343)
- [fix(infra): classify virtiofs mounts as rollback-journal storage (#120694)](https://github.com/openclaw/openclaw/pull/120694)
- [refactor(gateway): centralize connect failure classification (#120505)](https://github.com/openclaw/openclaw/pull/120505)

## 4. Community Hot Topics

The most-commented issues reveal a clear theme: **silent loss of replies, sessions, and state**.

- **[#116277 — DeepSeek v4 Flash silent reply failure](https://github.com/openclaw/openclaw/issues/116277)** [CLOSED, P1, **179 comments**] — The model silently produced no reply; OpenClaw posted a generic "No reply was generated" fallback. At 6x the comment count of the next-hottest issue, this is the dominant community story. Its closure suggests a fix/workaround landed, but the resonance shows how strongly users penalize silent failures.
- **[#7707 — Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707)** [OPEN, P2, 31 comments] — Tag memory entries by trust level (user commands, web scrapes, third-party skills) to prevent memory-poisoning attacks. Awaiting maintainer+security review since February.
- **[#44925 — Subagent completion silently lost](https://github.com/openclaw/openclaw/issues/44925)** [OPEN, P1, 24 comments, 👍2] — No retry, no notification, no auto-restart on timeout across several failure patterns.
- **[#91588 — Gateway Memory Leak: 350MB → 15.5GB RSS](https://github.com/openclaw/openclaw/issues/91588)** [OPEN, P0, 22 comments, 👍1] — Repeated OOM-kill/restart cycles over 2-3 days of normal use; still no fix PR.
- **[#108435 — 2026.7.1 gateway fails to start](https://github.com/openclaw/openclaw/issues/108435)** [OPEN, P0 regression, 13 comments, 👍3] — Fails under systemd, ollama, and manual launch; highest 👍 count in the top issues.

Underlying need: users are demanding a reliability guarantee — if a reply is generated, it must be delivered; if an agent wedges, it must be visible, alertable, and self-healing.

## 5. Bugs & Stability

Ranked by severity (issue links; fix-PR column shows in-flight related work):

| Sev | Issue | Summary | Fix PR |
|---|---|---|---|
| P0 | [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway RSS grows to 15.5GB over days; OOM crash loops | none linked |
| P0 | [#108435](https://github.com/openclaw/openclaw/issues/108435) | 2026.7.1 gateway won't start (systemd/ollama/manual); regression | none linked |
| P0 | [#112395](https://github.com/openclaw/openclaw/issues/112395) | Startup migration preflight blocks gateway after 6.11→7.1 upgrade; migration tables empty | none linked |
| P1 | [#116277](https://github.com/openclaw/openclaw/issues/116277) | DeepSeek v4 Flash silent reply failure (179 comments) | CLOSED |
| P1 | [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent completion silently lost; no retry/notification/restart | none linked |
| P1 | [#96834](https://github.com/openclaw/openclaw/issues/96834) | WhatsApp image wedges lane ~3min; strands active run state | none linked |
| P1 | [#86215](https://github.com/openclaw/openclaw/issues/86215) | Codex OAuth refresh failures wedge agent for hours; no alerting/rotation | none linked |
| P1 | [#38327](https://github.com/openclaw/openclaw/issues/38327) | "Cannot convert undefined or null to object" — google-vertex/gemini-3.1-pro-preview regression | none linked |
| P1 | [#87327](https://github.com/openclaw/openclaw/issues/87327) | Isolated cron runs stall in runtime-plugins phase before execution | none linked |
| P1 | [#114020](https://github.com/openclaw/openclaw/issues/114020) | Feishu/Telegram dispatch fails on beta.4: runChannelInboundEvent requires runDispatchLifecycle | none linked |

**Related fix PRs in flight:** [#119835](https://github.com/openclaw/openclaw/pull/119835) (preserve quiet Codex native tool results), [#97135](https://github.com/openclaw/openclaw/pull/97135) (hide recovered failed tool progress in auto-reply), [#120721](https://github.com/openclaw/openclaw/pull/120721) (consume prepared images once in CLI-backed turns), [#119139](https://github.com/openclaw/openclaw/pull/119139) (continuous cron job admission), [#120717](https://github.com/openclaw/openclaw/pull/120717) (preserve accepted workspace after SSH loss), [#120703](https://github.com/openclaw/openclaw/pull/120703) (survivor gateway startup retry).

**Pattern:** three of the four P0s cluster on the 2026.7.x upgrade path, while the 2026.6.x line is being actively security-hardened — consistent with a controlled "hold stable on 6.x while fixing 7.x" strategy.

## 6. Feature Requests & Roadmap Signals

High-signal user requests:

- **Memory trust tagging by source** ([#7707](https://github.com/openclaw/openclaw/issues/7707), 31 comments) — anti-memory-poisoning provenance. An architectural multi-slot memory PR ([#88504](https://github.com/openclaw/openclaw/pull/88504)) is already open, so a memory restructure is likely in the next minor release.
- **Fully dynamic model discovery** ([#10687](https://github.com/openclaw/openclaw/issues/10687)) — OpenRouter and fast-moving catalogs; static generated catalog is the blocker.
- **Topic-session families** ([#90916](https://github.com/openclaw/openclaw/issues/90916)) — one assistant, multiple named context lanes with isolated transcripts and shared durable memory.
- **Per-model usage logging for cost tracking** ([#13219](https://github.com/openclaw/openclaw/issues/13219)).
- **Cron auto-retry** ([#49740](https://github.com/openclaw/openclaw/issues/49740)) — `--retry-count` / `--retry-delay` so failed daily crons don't wait 24h.
- **Persistent task-status surface** ([#52640](https://github.com/openclaw/openclaw/issues/52640)) — authoritative status for long-running channel turns (Discord first).
- **OpenAI Realtime speech-to-speech for macOS Talk Mode** ([#71195](https://github.com/openclaw/openclaw/issues/71195)) — sub-second latency parity with the voice-call plugin.

**Near-term roadmap signals from PRs:** one-paste device pairing ([#120768](https://github.com/openclaw/openclaw/pull/120768)), `openclaw resume` CLI ([#120664](https://github.com/openclaw/openclaw/pull/120664)), and Codex realtime voice binding ([#119001](https://github.com/openclaw/openclaw/pull/119001)) — a UX push toward session continuity and voice in the upcoming minor.

## 7. User Feedback Summary

**Recurring pain points (highest engagement):**
- **Silent message/reply loss:** DeepSeek ([#116277](https://github.com/openclaw/openclaw/issues/116277), 179 comments), subagents ([#44925](https://github.com/openclaw/openclaw/issues/44925)), WhatsApp ([#96834](https://github.com/openclaw/openclaw/issues/96834), [#92186](https://github.com/openclaw/openclaw/issues/92186)), Slack ([#96692](https://github.com/openclaw/openclaw/issues/96692)), Feishu ([#114020](https://github.com/openclaw/openclaw/issues/114020), [#108265](https://github.com/openclaw/openclaw/issues/108265)).
- **Gateway reliability:** OOM memory leaks ([#91588](https://github.com/openclaw/openclaw/issues/91588), [#87109](https://github.com/openclaw/openclaw/issues/87109)), startup regressions ([#108435](https://github.com/openclaw/openclaw/issues/108435), [#112395](https://github.com/openclaw/openclaw/issues/112395)), idle heap growth ([#87109](https://github.com/openclaw/openclaw/issues/87109)).
- **Codex integration brittleness:** OAuth wedging ([#86215](https://github.com/openclaw/openclaw/issues/86215)), app-server mid-turn closes ([#83959](https://github.com/openclaw/openclaw/issues/83959), [#86214](https://github.com/openclaw/openclaw/issues/86214)), false `ownsNativeCompaction` assumption ([#103231](https://github.com/openclaw/openclaw/issues/103231)).
- **Trust erosion from incomplete fixes:** e.g., [#94536](https://github.com/openclaw/openclaw/issues/94536) reports "PR #92231 fix incomplete — commitment marked 'sent' but never delivered (second case)" — users are actively re-testing prior fixes and finding edge cases.

**Satisfaction signals:** two rapid security releases with contributor credit; unusually high maintainer throughput; new QA-lab infrastructure ([#120801](https://github.com/openclaw/openclaw/pull/120801), [#120710](https://github.com/openclaw/openclaw/pull/120710)) signals investment in regression prevention.

**Frustration signals:** several "needs-maintainer-review / needs-product-decision" issues aged 3–6 months (e.g., #7707, #10687), and P0 upgrade blockers with multiple 👍 on a stable-channel release.

## 8. Backlog Watch

Long-unanswered items needing maintainer attention:

- **[#7707 Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707)** — open since 2026-02-03, 31 comments; needs security review + product decision. Highest-engagement open feature.
- **[#91588 Gateway Memory Leak (P0)](https://github.com/openclaw/openclaw/issues/91588)** — open since 2026-06-09, 22 comments, no fix PR. Longest-running P0.
- **[#44925 Subagent completion silently lost (P1)](https://github.com/openclaw/openclaw/issues/44925)** — open since 2026-03-13; core reliability class, no linked fix.
- **[#10687 Fully dynamic model discovery](https://github.com/openclaw/openclaw/issues/10687)** — open since 2026-02-06, awaiting product decision.
- **[#86215 Codex OAuth refresh wedging (P1)](https://github.com/openclaw/openclaw/issues/86215)** — open since 2026-05-24, updated today, no fix PR.
- **[#120717 / #120703 release & SSH reliability PRs](https://github.com/openclaw/openclaw/pull/120717)** — both marked "waiting on author"; the survivor/SSH startup convergence logic remains fragile.
- **[#119762 Windows node release validation](https://github.com/openclaw/openclaw/pull/119762)** — BLOCKED on missing production prerelease in `openclaw/openclaw-windows-node`; needs cross-repo unblock.
- **[#119835, #97135, #120268](https://github.com/openclaw/openclaw/pull/119835)** — all marked "needs proof": Codex tool-result preservation, auto-reply progress hiding, and session-list performance are ready for reviewer proofing.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-08-09 | **Audience:** Technical decision-makers & developers

---

## 1. Ecosystem Overview

The personal AI assistant ecosystem is consolidating around a shared architectural core—gateway-orchestrated agents with multi-channel delivery (Discord, Slack, Telegram, WhatsApp, IRC), MCP tool integration, and memory subsystems—while diverging sharply on execution strategy. The dominant community signal across all projects is no longer raw capability but **delivery reliability**: silent reply loss, wedged sessions, and OOM crashes are the top-engagement issues at OpenClaw, Hermes, CoPaw, and ZeroClaw simultaneously. Security hardening is accelerating (two back-to-back OpenClaw patch releases, multiple ZeroClaw S1/P1 security findings, Hermes probe-verified reports), driven by real-world memory-poisoning and secret-leakage threats. Token-cost transparency has emerged as a top-three user demand (NanoBot, IronClaw, ZeroClaw, OpenClaw all have active workstreams). The landscape is bifurcating into high-velocity consolidators (OpenClaw, Hermes, IronClaw, ZeroClaw) and niche specialists (PicoClaw's lightweight channels, Moltis's sandbox tooling, LobsterAI's Electron desktop), with two projects (NullClaw, ZeptoClaw) showing zero activity.

## 2. Activity Comparison

| Project | Issues (24h upd / closed) | PRs (24h upd / merged-closed) | Release Status | Health Score |
|---|---|---|---|---|
| **OpenClaw** | 500 / 49 | 500 / 178 | 2 releases (v2026.6.33, v2026.6.34) | ★★★★☆ — Exceptional throughput; 3 open P0s on 7.x upgrade path |
| **Hermes Agent** | 50 / 12 | 50 / 17 | None | ★★★☆☆ — Strong triage velocity; desktop P1s and update-path distrust |
| **IronClaw** | 30 / 24 | 50 / 32 | None | ★★★★☆ — Healthy v2 consolidation; security-wiring gap (#7391) |
| **CoPaw** | 18 / 2 | 50 / 3 | None | ★★★☆☆ — High engagement; beta-phase bugs in MCP/streaming |
| **ZeroClaw** | 50 / 2 | 50 / 2 | None | ★★★☆☆ — High velocity; persistent S1/P1 security cluster |
| **NanoBot** | 5 / — | 9 / 4 | None | ★★★★☆ — Responsive issue-to-PR turnaround (days) |
| **NanoClaw** | 8 / — | 6 / 3 | None | ★★★☆☆ — Active; 7-week review latency on MCP PRs |
| **PicoClaw** | 3 / 1 | 4 / 0 | None | ★★☆☆☆ — Contributor interest but review/merge bottleneck |
| **Moltis** | 2 / 1 | 1 / 1 | None | ★★★☆☆ — Stable; ~9-week fix turnaround for core bug |
| **LobsterAI** | 1 / 0 | 3 / 1 | None | ★★☆☆☆ — Minimal activity; universal `stale` labels |
| **NullClaw** | 0 / 0 | 0 / 0 | None | — Inactive |
| **ZeptoClaw** | 0 / 0 | 0 / 0 | None | — Inactive |

## 3. OpenClaw's Position

**Advantages vs peers:** OpenClaw's activity volume is an order of magnitude above every competitor (500/500 issues/PRs touched vs. 50/50 for the next tier), reflecting a 10x+ larger contributor base and the strongest maintainer responsiveness—steipete alone authored ~15 of the top-30 PRs. It is the only project shipping security-hardened patch releases on a rapid cadence (two in 24 hours), and the only one investing in dedicated QA-lab infrastructure (#120801, #120710). Its "hold stable on 6.x while fixing 7.x" release strategy, though currently painful for early adopters, is a mature risk-management posture.

**Technical approach differences:** OpenClaw is the reference full-stack implementation—channel-agnostic gateway, subagent orchestration, multi-slot memory architecture (#88504), device pairing, and Codex realtime voice binding. It is deliberately broad, absorbing features peers treat as differentiators (voice, pairing, resume CLI, memory trust tagging). Its weakness is surface-area risk: three open P0s on the 2026.7.x line reveal that breadth strains upgrade stability.

**Community size comparison:** OpenClaw's top issue (#116277, 179 comments) alone exceeds the total engagement of most peer projects' entire daily activity. Hermes (50/50), IronClaw (30/50), ZeroClaw (50/50) form a genuine second tier; the rest are niche or dormant. OpenClaw is effectively the ecosystem's reference point and default evaluation target.

## 4. Shared Technical Focus Areas

These requirements are emerging independently across multiple projects—treat them as validated market demand:

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **Delivery reliability / no silent loss** | OpenClaw (#116277, #44925), Hermes (#57240, #70846), CoPaw (#6822), NanoClaw (#3201) | Guaranteed reply delivery, subagent completion visibility, retry/notification/self-heal, no-silent-drop guarantees for forks and approvals |
| **Gateway/memory lifecycle stability** | OpenClaw (#91588 15.5GB OOM leak), CoPaw (#6822), ZeroClaw (#9035), Hermes (#81663) | Memory ceilings, connection-failure isolation, no task leaks, crash-loop prevention |
| **Security semantics that actually constrain** | ZeroClaw (#9348 allowlist ignored, #9815 forbidden-path bypass), Hermes (#78515 skills guard, #81012 redaction bypass), OpenClaw (2 security releases), NanoBot (#5297 OAuth) | Allowlist/denylist enforcement, provenance/trust tagging, scanning that can't be bypassed via encoding, OAuth for MCP |
| **Token & cost observability** | NanoBot (#5266, merged #5293, #5299), IronClaw (#6989), ZeroClaw (#9816 $0.00 cost), OpenClaw (#13219) | Per-call/per-iteration token logging, accurate cost attribution, visible usage history in UI, budget caps that fire |
| **MCP ecosystem maturation** | NanoClaw (remote HTTP/SSE merged), NanoBot (#5300 crash, #5297 OAuth), CoPaw (#6836 timeouts), PicoClaw (#3302), ZeroClaw (#8731 zombies) | Remote servers, OAuth flows, timeout wiring, crash isolation, schema size budgeting |
| **Memory architecture evolution** | OpenClaw (#88504 multi-slot), Hermes (#51152 core/extended tiering), ZeroClaw (#8424 forbidden paths), LobsterAI (#1193) | Multi-owner memory, tiered injection, lifecycle management, deterministic persistence |
| **Migration & interop** | IronClaw (#6939 migrate from Hermes/Openclaw), ZeroClaw (#8550 OpenAI-compatible endpoint), OpenClaw (#10687 dynamic models) | Low switching costs, standard client interop, dynamic model catalogs |

## 5. Differentiation Analysis

| Project | Feature Focus | Target Users | Technical Architecture |
|---|---|---|---|
| **OpenClaw** | Full-stack reference: subagents, memory multi-slot, pairing, voice, CLI resume | Power users, enterprises, ecosystem adopters | TypeScript gateway + channel adapters; largest integration surface |
| **Hermes Agent** | Desktop-first (macOS/Windows), reasoning preservation, security defense-in-depth | Desktop professionals, security-conscious | Desktop app + gateway; strong session/compression engineering |
| **IronClaw** | v2 "Reborn" architecture, web-push/PWA, shared conversations, Web Debug Inspector | Teams needing modern UX + durable delivery | Rust-based (crate references); CAS-based delivery ownership; stress-test discipline |
| **ZeroClaw** | Automation (SOP/cron), security config semantics, workspace isolation | Ops-heavy single operators | Rust; crates.io publishing, workspace-relative path security, RFC process |
| **CoPaw (QwenPaw)** | Chinese cloud providers (Volcengine, Xiaomi MiMo), Tauri desktop, streaming UI | Chinese-market users, Qwen-model users | Tauri + frontend console; provider-expansion roadmap |
| **NanoBot** | Lightweight WebUI, token observability, temporary chats | Individual users, quick deployments | Lightweight Python/web stack; fast issue-to-fix cycles |
| **NanoClaw** | MCP ecosystem expansion, channel breadth (Mattermost, Telegram rich) | Channel integrators, MCP tinkerers | Node/TS ChannelAdapter v2; host-side OAuth flows |
| **PicoClaw** | Niche channels (IRC, SimpleX, DeltaChat), lightweight | Self-hosters, privacy-focused | Small footprint; IRCv3 long-message handling |
| **Moltis** | Sandbox filesystem tooling (Docker, Apple Containers) | Developers running sandboxed agents | Cross-runtime path translation; container-native fallbacks |
| **LobsterAI** | Electron desktop, LiteLLM multi-provider gateway | Desktop users wanting 100+ LLM providers | Electron + sql.js; write-amplification debt |

## 6. Community Momentum & Maturity

**Tier 1 — Rapid iteration / consolidating (ship daily):** **OpenClaw** (178 PRs merged in 24h) and **IronClaw** (32 PRs, 24 issues closed) are executing at production-software velocity. **Hermes** and **ZeroClaw** are high-throughput but carrying unresolved security/desktop debt that tempers their maturity. **CoPaw** is iterating fast but is visibly beta-grade (SIGBUS crashes, installer lock failures).

**Tier 2 — Steady, responsive:** **NanoBot** has the best engagement-per-issue ratio in the ecosystem (13-comment token issue → merged fix in 2 days). **NanoClaw** and **Moltis** ship meaningful integrations but with review latency (7-week waits) and 9-week bug-fix cycles respectively.

**Tier 3 — Stalling / maintenance-only:** **PicoClaw** has contributor momentum but zero merges in 24h and stale-labelled feature PRs (SimpleX open since June). **LobsterAI** is effectively dormant—all updates carry `stale` labels, including a high-value 4-month-old SQLite performance fix.

**Tier 4 — Inactive:** **NullClaw** and **ZeptoClaw** show no activity; ignore or deprecate.

## 7. Trend Signals

1. **Reliability has replaced capability as the buying criterion.** Across six projects, the most-engaged issues are silent failures, wedged lanes, and OOM crashes—not missing features. Users explicitly demand "if a reply is generated, it must be delivered." AI agent developers should treat delivery guarantees, visibility, and self-healing as table stakes, not differentiators.

2. **Security trust is fracturing at the config layer.** The most dangerous bug class is not an exploit but a **footgun**: ZeroClaw's WhatsApp allowlist silently ignored, OpenClaw memory-poisoning risk, Hermes' agent-authored skills bypassing content scans. Users assume their constraints work; when they don't, trust is lost for the entire category. Expect provenance/trust tagging and "safe-by-default" semantics to become standard.

3. **Token transparency is the new cost-control battleground.** Users are burning millions of tokens with zero visibility (NanoBot #5266) and budget caps that silently never fire (ZeroClaw #9816). Per-iteration diagnostics, usage history UIs, and accurate cost attribution are rapidly becoming required features—not analytics luxuries.

4. **MCP is the winning integration standard—but immature.** Remote HTTP/SSE servers, OAuth flows, timeout wiring, and crash isolation are being requested across five projects simultaneously. The project that nails reliable, authenticated, crash-isolated MCP will capture disproportionate mindshare.

5. **Memory is evolving from a slot to a system.** Multi-owner memory (OpenClaw #88504), core/extended tiering (Hermes #51152), trust provenance, and lifecycle management indicate the next architectural wave: memory as a governed subsystem with explicit ownership, cost control, and security semantics.

6. **Upgrade anxiety is an ecosystem-wide risk.** Hermes users report "every other update bricks everything"; OpenClaw's 7.x line has three open P0s; CoPaw's beta regressions stall conversations. The ecosystem is moving fast enough that release quality is becoming a competitive moat—IronClaw's stress-test workload investment (#7382) is the model to copy.

7. **Standard interop is the migration wedge.** OpenAI-compatible endpoints (ZeroClaw #8550), dynamic model discovery (OpenClaw #10687), and migration tooling from legacy agents (IronClaw #6939) signal that users want optionality—and that the project offering the lowest switching costs will win defectors from the rest.

---

*Report generated 2026-08-09 from community digest data across 12 projects. Health scores are analyst assessments based on throughput, responsiveness, severity of open issues, and release cadence.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-09

## 1. Today's Overview

NanoBot shows a healthy, active development cadence with 5 open issues and 9 PRs touched in the last 24 hours, of which 4 PRs were closed/merged. The project is clearly converging on token-usage observability: an open issue about excessive token consumption (#5266) is being addressed by two linked PRs (#5293 merged, #5299 open) that add per-iteration diagnostics and a WebUI usage history view. The other merged work — temporary chat mode, a dead-code cleanup, and a WebUI hover-clipping fix — indicates a mix of feature work and housekeeping. No new releases were published, so recent improvements remain on the main branch only. Maintainer attention is likely needed on several conflict-marked open PRs and a serious MCP connection crash bug (#5300) reported today.

## 2. Releases

No new releases were published in the last 24 hours. No changelog, breaking-change, or migration notes are available.

## 3. Project Progress

Four PRs were closed/merged, showing steady feature and maintenance progress:

- **#5252 — feat(webui): add temporary chat mode** ([PR #5252](https://github.com/HKUDS/nanobot/pull/5252)) — Adds a Temporary Chat mode to the new-topic hero, created only after the first message, supports multiple temporary chats, and keeps conversations non-persistent (no session/history file). Merged.
- **#5293 — feat(usage): log per-iteration token diagnostics** ([PR #5293](https://github.com/HKUDS/nanobot/pull/5293)) — Directly addresses #5266 by persisting token usage per agent iteration in addition to the existing daily aggregates, making unexpectedly high consumption traceable. Merged.
- **#5296 — refactor: remove verified dead code** ([PR #5296](https://github.com/HKUDS/nanobot/pull/5296)) — Removes 19 repository-internal dead-code units, 11 unreachable test seams, and orphaned frontend dependencies while preserving six API-sensitive units needing explicit compatibility decisions. Merged.
- **#5294 — fix(webui): prevent image hover clipping** ([PR #5294](https://github.com/HKUDS/nanobot/pull/5294)) — Removes hover scaling/ring from assistant image previews so container clipping can't hide image edges; retains zoom cursor, static border, and keyboard focus ring. Merged with regression tests.

Additionally, several open PRs were updated and remain in flight: #5271 (session save race, P0/conflict), #5206 (duplicate streaming logs, P2/conflict), #4276 (model-agnostic computer use, open since June), #5292 (Matrix reply targeting), and #5299 (WebUI token usage details).

## 4. Community Hot Topics

- **#5266 — Logs about token consumption / "too many tokens are burned"** ([Issue #5266](https://github.com/HKUDS/nanobot/issues/5266)) — **Most active issue with 13 comments.** Users report million-token consumption within ~2 hours with no visible user activity. The underlying need is transparency: users want to know *when* and *which* call triggers token burns. The community has responded quickly — PR #5293 (merged) and #5299 (open) both target this exact gap, signaling a well-aligned maintainer/community response.
- **#5297 — MCP OAuth web authorization support** ([Issue #5297](https://github.com/HKUDS/nanobot/issues/5297), 2 comments) — Users need to configure MCP servers requiring web-based OAuth (e.g., Xmind's `https://app.xmind.com/api/mcp`). The proposal is to route auth through a gateway so remote/non-local access can complete OAuth flows via IP/domain.
- **#5295 — Docker Compose deployment failure** ([Issue #5295](https://github.com/HKUDS/nanobot/issues/5295), 2 comments) — Deployment docs fail with `/bin/sh: 0: cannot open /usr/local/bin/entrypoint.sh: Permission denied` on the gateway container, an immediate onboarding blocker for new users.

## 5. Bugs & Stability

Ranked by severity:

- **#5300 — MCP connection failure not isolated + anyio cancel-scope crash** ([Issue #5300](https://github.com/HKUDS/nanobot/issues/5300)) — **Critical.** A remote MCP returning HTTP 530 (Cloudflare error 1033) triggers `RuntimeError: Attempted to exit cancel scope in a different task than it was entered in`, which crashes/hangs the gateway process, leaks tasks, and spikes CPU. No fix PR exists yet. This is the most severe stability bug in the current batch.
- **#5271 — Stale background task saves overwrite session data** ([PR #5271](https://github.com/HKUDS/nanobot/pull/5271)) — **High (P0, conflict label).** Background tasks like `maybe_generate_webui_title` hold a `Session` reference across `chat_with_retry`; if the user runs `/new` in that window, `session.clear()` → `save()` → `invalidate()` races with the stale task, which can overwrite newer session data. A fix PR exists but is marked with conflicts.
- **#5295 — Docker Compose entrypoint permission denied** ([Issue #5295](https://github.com/HKUDS/nanobot/issues/5295)) — **Medium.** Deployment is broken for users following `deployment.md`; gateway exits with code 2. Likely a file-permission/image-build issue.
- **#5206 — Streamed responses logged twice** ([PR #5206](https://github.com/HKUDS/nanobot/pull/5206)) — **Low (P2).** Duplicate `'Response to'` log lines for every streamed message; a fix exists but carries a conflict label.

## 6. Feature Requests & Roadmap Signals

- **Token observability is clearly the top roadmap theme.** Issue #5266 (per-call token logging) is already being implemented by merged PR #5293 and extended by open PR #5299, which adds a bounded history of recent token-usage records with input/output/cached breakdowns in the WebUI. Expect this to land in the next release.
- **#5298 — Budget model-visible MCP schemas** ([Issue #5298](https://github.com/HKUDS/nanobot/issues/5298)) — Proposes reducing context cost when large MCP tool sets are present, since `ToolRegistry.get_definitions()` currently passes all schemas to the provider. A likely candidate for an upcoming optimization release.
- **#5297 — MCP OAuth web authorization** ([Issue #5297](https://github.com/HKUDS/nanobot/issues/5297)) — Strong feature signal as OAuth-protected MCP servers proliferate; the gateway-based auth-flow proposal suggests a design centered on remote access support.
- **#4276 — Model-agnostic computer use** ([PR #4276](https://github.com/HKUDS/nanobot/pull/4276)) — A substantial opt-in feature (`computer_use` + `browser` tools with PyAutoGUI/Playwright backends) that has been open since June 10. Its continued updates suggest it's still actively developed and could be a major feature in a future release.

## 7. User Feedback Summary

The dominant user pain point is **opaque and excessive token consumption** (#5266, 13 comments): users feel tokens are being burned silently, with no per-call visibility. The community response is positive in that the maintainers shipped a diagnostics PR within two days of the report, but users will likely want the follow-up WebUI visibility (PR #5299) to close the loop. Deployment friction (#5295) is a real dissatisfaction point for new users following official docs. Power users are pushing for **broader MCP ecosystem compatibility** — OAuth-protected servers (#5297) and resilience against flaky remote MCPs (#5300) — reflecting real-world production usage beyond local setups. The merged temporary-chat mode (#5252) and image-preview fix (#5294) address smaller UX complaints in the WebUI. Overall, contributors appear engaged and responsive, with issue-to-PR turnaround measured in days.

## 8. Backlog Watch

- **#4276 — model-agnostic computer use** ([PR #4276](https://github.com/HKUDS/nanobot/pull/4276)) — Open since **2026-06-10 (~2 months)**, still updated as recently as today. A major feature that needs maintainer review/decision to avoid becoming a stale epic.
- **#5206 — fix(delivery): log streamed responses exactly once** ([PR #5206](https://github.com/HKUDS/nanobot/pull/5206)) — Open since 2026-08-01 with a **conflict** label; duplicated log lines remain unfixed.
- **#5271 — fix(session): prevent stale background task saves** ([PR #5271](https://github.com/HKUDS/nanobot/pull/5271)) — **P0-labeled** but blocked on conflicts; the underlying data-loss race is serious and deserves priority resolution.
- **#5266 — token consumption logging** ([Issue #5266](https://github.com/HKUDS/nanobot/issues/5266)) — No longer strictly "backlog" given merged PR #5293, but with 13 comments and high community interest, maintainers should ensure the follow-up (#5299) is reviewed promptly.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-09

## 1. Today's Overview

Hermes Agent is in a high-activity bug-fixing and consolidation phase: 50 issues and 50 PRs were updated in the last 24 hours, with 12 issues closed and 17 PRs merged or closed. The dominant theme is session-state reliability — fixes for compression budgeting (#73624) and reasoning-field loss across forks (#57240) both landed today, closing three long-running issues. However, desktop reliability remains the hottest open area, with three P1 bugs around macOS freezes and broken update handoffs drawing the most community engagement. No new release was published in this window. Overall project health is mixed: triage velocity is strong and security hardening is getting serious community contribution, but update-channel regressions and desktop instability are visibly eroding user trust.

## 2. Releases

No new releases in this window.

## 3. Project Progress

17 PRs were merged or closed in the last 24 hours. Notable landings:

- **fix(compression): charge stale thinking to the tail budget only on the newest assistant turn** — [#82116](https://github.com/NousResearch/hermes-agent/pull/82116), closes [#73624](https://github.com/NousResearch/hermes-agent/issues/73624). Stops 19–24% of the compaction budget being spent on reasoning blocks no adapter replays.
- **Reasoning-field preservation across forks and branches** — three PRs landed: [#82109](https://github.com/NousResearch/hermes-agent/pull/82109), [#57248](https://github.com/NousResearch/hermes-agent/pull/57248), [#57454](https://github.com/NousResearch/hermes-agent/pull/57454). Together they close [#57240](https://github.com/NousResearch/hermes-agent/issues/57240), fixing double-encoded `reasoning_details` / `codex_reasoning_items` / `codex_message_items` that caused silent reasoning replay loss in forked sessions.
- **fix(anthropic): keep OAuth requests on subscription limits** — [#82066](https://github.com/NousResearch/hermes-agent/pull/82066). Stabilizes billing fingerprint markers so prompt caching stays valid.
- **fix(desktop): keep tool rows and notices out of the HUD band** — [#82113](https://github.com/NousResearch/hermes-agent/pull/82113). Prevents tool blocks and background notices from pushing the awaited answer out of the compact HUD view.
- **feat(memory): make background review toolsets configurable** — [#45014](https://github.com/NousResearch/hermes-agent/pull/45014). Adds `memory.review_toolsets` config to replace the hardcoded memory/skills whitelist.
- An earlier duplicate fix attempt for #73624 ([#73730](https://github.com/NousResearch/hermes-agent/pull/73730)) was closed as duplicate/invalid.

**Closed issues** (6 of 12 visible in the data): [#73624](https://github.com/NousResearch/hermes-agent/issues/73624) (stale reasoning charged to compression budget), [#57240](https://github.com/NousResearch/hermes-agent/issues/57240) (fork double-encoding), [#72641](https://github.com/NousResearch/hermes-agent/issues/72641) (`/diff` Windows UnicodeDecodeError), [#71058](https://github.com/NousResearch/hermes-agent/issues/71058) (compaction never prunes `codex_reasoning_items`), [#14859](https://github.com/NousResearch/hermes-agent/issues/14859) (session title in status bar), and [#72337](https://github.com/NousResearch/hermes-agent/issues/72337) (cron delivery multi-select UI).

## 4. Community Hot Topics

Most active items by comment count:

- **[#63047](https://github.com/NousResearch/hermes-agent/issues/63047) — Desktop app freeze on macOS 27 beta (P1, 18 comments)**. App becomes completely unresponsive — including Settings — after ~5 messages. The single most-discussed item; no fix PR exists yet.
- **[#81969](https://github.com/NousResearch/hermes-agent/issues/81969) — "scared to update because every other update bricks everything!" (P1, 6 comments)**. User reports repeated breakage and configuration loss on Windows; questions release testing.
- **[#78515](https://github.com/NousResearch/hermes-agent/issues/78515) — Agent-authored skills bypass the Skills Guard content scan (security, P3, 6 comments)**. `background_review` writes skills with `guard_agent_created` off by default, and the result is served into every session's system prompt. Filed as defense-in-depth per `SECURITY.md` §3.2; tagged `needs-decision`.
- **[#40801](https://github.com/NousResearch/hermes-agent/issues/40801) — Cron script-path guard rejects profile-scoped jobs (P2, 6 comments)**. Valid jobs referencing the default profile's scripts directory are rejected — the inverse of previously fixed #32091; `needs-decision`.
- **[#75778](https://github.com/NousResearch/hermes-agent/issues/75778) — Duplicate `hermes-setup` on desktop update (P1, 6 comments)**. The second process fails against the first's marker, and the "failed" window masks the real still-running update.

Underlying need: **update-path reliability and desktop stability are the dominant trust issues.** Secondary themes are non-destructive compaction ([#70846](https://github.com/NousResearch/hermes-agent/issues/70846), 5 comments), false-positive command rejection ([#81322](https://github.com/NousResearch/hermes-agent/issues/81322), 5 comments), and model-behavior loops ([#78807](https://github.com/NousResearch/hermes-agent/issues/78807), 5 comments). Security-conscious users are contributing probe-verified reports, indicating an engaged technical community.

## 5. Bugs & Stability

**Critical / P1**

- **Desktop full UI freeze on macOS 27 beta** — [#63047](https://github.com/NousResearch/hermes-agent/issues/63047). Unresponsive after ~5 messages; locks out Settings. 18 comments, no fix PR.
- **Repeated update breakage on Windows** — [#81969](https://github.com/NousResearch/hermes-agent/issues/81969). User reports losing configuration on every other update. Related open fixes: [#82118](https://github.com/NousResearch/hermes-agent/pull/82118) and [#81983](https://github.com/NousResearch/hermes-agent/pull/81983) both address the `get-windows` / Electron install-script failure on Windows.
- **Desktop update handoff produces duplicate `hermes-setup` process** — [#75778](https://github.com/NousResearch/hermes-agent/issues/75778). The failed second instance masks a live update. No fix PR.
- **state.db FTS index corruption on macOS** — [#63386](https://github.com/NousResearch/hermes-agent/issues/63386). Breaks session search and handoff state; `hermes doctor` detects it. Open since July 12.

**High / P2**

- **Agent flush fails after compression with misleading "full disk" dialog** — [#82001](https://github.com/NousResearch/hermes-agent/issues/82001). Root cause is a session-identity handoff gap, not disk space.
- **Compaction wipes human-visible history** — [#70846](https://github.com/NousResearch/hermes-agent/issues/70846). Users cannot review earlier turns after compaction.
- **Memory tool reports success but writes nothing (Telegram)** — [#81430](https://github.com/NousResearch/hermes-agent/issues/81430). Conflicting health signals between `hermes memory status` and `hermes doctor`; `needs-repro`.
- **Redaction bypass via ANSI CSI/SGR sequences** — [#81012](https://github.com/NousResearch/hermes-agent/issues/81012). ESC-byte-only stripping leaves the `m` glue, leaking vendored tokens wrapped in color codes. Security-relevant, open.
- **Stalled stdio MCP cold-spawn holds tool call for full 300s** — [#81995](https://github.com/NousResearch/hermes-agent/issues/81995). No fail-fast on supervisor respawn; `needs-repro`.
- **Slow TTS blocks text reply delivery** — [#81162](https://github.com/NousResearch/hermes-agent/issues/81162). QQbot gateway awaits synthesis before finishing the turn.
- **Podman + SELinux: mounted skills directory inaccessible without `:z`** — [#82074](https://github.com/NousResearch/hermes-agent/issues/82074). Docker backend regression; flagged duplicate.
- **`lifecycle_guard` rejects ELF binary paths** — [#81322](https://github.com/NousResearch/hermes-agent/issues/81322). `ValueError: embedded null byte` on benign venv-python commands.

**Resolved this window**: [#72641](https://github.com/NousResearch/hermes-agent/issues/72641) (`/diff` Windows encoding crash — closed), [#73624](https://github.com/NousResearch/hermes-agent/issues/73624) (compression budget — fixed via [#82116](https://github.com/NousResearch/hermes-agent/pull/82116)), [#57240](https://github.com/NousResearch/hermes-agent/issues/57240) (fork reasoning loss — fixed via [#82109](https://github.com/NousResearch/hermes-agent/pull/82109) et al.).

**Low / P3**: fork-button intermittently missing on desktop ([#81846](https://github.com/NousResearch/hermes-agent/issues/81846), needs-repro), Kanban WS poll-task leak saturating CPU ([#77833](https://github.com/NousResearch/hermes-agent/issues/77833)), DeepSeek V4 Flash infinite reasoning loop ([#78807](https://github.com/NousResearch/hermes-agent/issues/78807)), npm 12 breaking Linux desktop updates ([#62171](https://github.com/NousResearch/hermes-agent/issues/62171)), TUI npm install on every launch ([#66978](https://github.com/NousResearch/hermes-agent/issues/66978)), npm 11 `allowScripts` warnings ([#43997](https://github.com/NousResearch/hermes-agent/issues/43997)). The npm-install-script cluster (issues #43997/#62171/#66978 and PRs #82118/#81983) is a growing compatibility risk as npm 12 hardens its default policy.

## 6. Feature Requests & Roadmap Signals

**Active feature PRs in review (likely next-version candidates):**

- **Browser Use CLI 3.0 mode** — [#81958](https://github.com/NousResearch/hermes-agent/pull/81958): one `browser_exec` driver replacing twelve `browser_*` tools, composable across all CDP backends (salvage of #66476). Broad blast radius; heavy sweeper flags.
- **Memory core/extended tiering** — [#51152](https://github.com/NousResearch/hermes-agent/pull/51152): `[core]`-prefixed entries always injected, others available on-demand via a new `search` action to cut system-prompt token cost.
- **claude-agent-sdk provider** — [#65982](https://github.com/NousResearch/hermes-agent/pull/65982): official Claude Agent SDK as a first-class runtime under subscription OAuth, fail-closed against metered billing. Multi-area, `needs-decision`.
- **Generic `voice_server` gateway platform** — [#27040](https://github.com/NousResearch/hermes-agent/pull/27040): WebSocket bridge for telephony / WebRTC runtimes. Open since May 16, `needs-decision`.
- **Gateway memory ceiling** — [#81663](https://github.com/NousResearch/hermes-agent/pull/81663): caps `auto` memory budget and emits a systemd ceiling from config, addressing the OOM failure in #81625.

**User-requested features (issues):**

- Memory lifecycle management UX ([#78307](https://github.com/NousResearch/hermes-agent/issues/78307)) — inspection, dedup, conflict detection; `needs-decision`.
- Session-DB auto-prune + VACUUM default-on with operator warning ([#57752](https://github.com/NousResearch/hermes-agent/issues/57752)).
- Unified Cmd+K content search across files, sessions, and skills ([#49103](https://github.com/NousResearch/hermes-agent/issues/49103)).
- ToolCallStormBreaker RFC — suppress repeated identical tool calls ([#35573](https://github.com/NousResearch/hermes-agent/issues/35573)).

**Prediction:** The memory subsystem is the clearest roadmap cluster (tiering, pruning, lifecycle management, review-toolset configurability). Small UX features (cron multi-select, session title in status bar) shipped this window, suggesting incremental UX wins are being merged alongside bug fixes. Browser Use 3.0 and claude-agent-sdk are the most likely large features for the next minor release, but both carry extensive sweeper risk flags and may take longer.

## 7. User Feedback Summary

- **Update anxiety is the loudest sentiment.** "scared to update because every other update bricks everything!" ([#81969](https://github.com/NousResearch/hermes-agent/issues/81969)) — a user reports losing configurations repeatedly and questions whether releases are tested, explicitly citing lost confidence in the product.
- **macOS desktop stability is a top frustration**: full UI freeze including Settings after ~5 messages, with recovery only by "hoping on some defreeze" ([#63047](https://github.com/NousResearch/hermes-agent/issues/63047)).
- **Silent data loss erodes trust**: compaction removes human-readable history ([#70846](https://github.com/NousResearch/hermes-agent/issues/70846)); memory writes return structurally valid success but persist nothing ([#81430](https://github.com/NousResearch/hermes-agent/issues/81430)); forked sessions silently lose reasoning replay ([#57240](https://github.com/NousResearch/hermes-agent/issues/57240)).
- **Misleading diagnostics** frustrate users: a healthy disk is blamed as "often a full disk" when the true cause is a session-identity handoff gap ([#82001](https://github.com/NousResearch/hermes-agent/issues/82001)).
- **Positive signals**: users are filing detailed, probe-verified security reports ([#78515](https://github.com/NousResearch/hermes-agent/issues/78515), [#81012](https://github.com/NousResearch/hermes-agent/issues/81012)) and contributing reproductions — and the reasoning-preservation and compression-budget fixes they asked for landed within the same 24-hour window.

## 8. Backlog Watch

Items needing maintainer attention:

- **[#78515](https://github.com/NousResearch/hermes-agent/issues/78515)** (security, `needs-decision`) — agent-authored skills bypass the content scan by default and enter every session's system prompt. Defense-in-depth priority.
- **[#40801](https://github.com/NousResearch/hermes-agent/issues/40801)** (`needs-decision`, since June 6) — cron script-path guard rejects valid profile-scoped jobs; unresolved inverse of #32091.
- **[#63386](https://github.com/NousResearch/hermes-agent/issues/63386)** (P1, since July 12) — macOS FTS index corruption with only 3 comments; an active-P1 bug getting low engagement relative to its severity.
- **[#57752](https://github.com/NousResearch/hermes-agent/issues/57752)** (since July 3) — session DB auto-prune/VACUUM off by default with no operator warning; unbounded `state.db` growth.
- **[#43997](https://github.com/NousResearch/hermes-agent/issues/43997)** (since June 11) — npm 11 `allowScripts` warnings; becomes a hard failure risk once npm 12's `strict-allow-scripts` lands (cf. #62171).
- **[#35573](https://github.com/NousResearch/hermes-agent/issues/35573)** (RFC since May 30) — ToolCallStormBreaker repeated-tool-loop suppression; no maintainer response visible.
- **[#49103](https://github.com/NousResearch/hermes-agent/issues/49103)** (since June 19) — unified Cmd+K content search; feature request without movement.
- **PR [#27040](https://github.com/NousResearch/hermes-agent/pull/27040)** (since May 16) — generic `voice_server` gateway, `needs-decision`.
- **PR [#65982](https://github.com/NousResearch/hermes-agent/pull/65982)** (since July 16) — claude-agent-sdk provider; large blast radius and dependency on underlying shim PRs.

Most notably, the P1 desktop freeze [#63047](https://github.com/NousResearch/hermes-agent/issues/63047) — the most-commented thread in the project — has no visible fix PR or maintainer status update; a response there would meaningfully de-escalate the project's hottest thread.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-09

## 1. Today's Overview

PicoClaw's activity over the last 24 hours was moderate but **heavily weighted toward open PRs and issue maintenance rather than completed work**. 3 issues were updated — 2 remain open and 1 closed as stale — while 4 PRs were updated, all still open and none merged. No new releases were published in this window. The most notable signals are two recent bug-fix PRs targeting WhatsApp connectivity and agent prefix caching, both awaiting review. The presence of several long-open PRs and stale-labelled items suggests a **project with active contributor interest but a growing review/merge backlog**.

## 2. Releases

**No new releases** were published in this digest window. There are no release notes, breaking changes, or migration steps to report.

## 3. Project Progress

- **Merged/closed PRs today:** 0  
- **Merged/closed issues today:** 1 — [#3292](https://github.com/sipeed/picoclaw/issues/3292) was closed after being labelled `[stale]`; it was a bug report about high CPU usage in the chat input box, not a code fix.

No code changes appear to have landed today. The following open PRs saw updates and remain in active/needed-review status:

- [#3320](https://github.com/sipeed/picoclaw/pull/3320) — fix(deps): bump whatsmeow to unblock WhatsApp "client outdated (405)"
- [#3321](https://github.com/sipeed/picoclaw/pull/3321) — fix(agent): move dynamic context after history to preserve prefix caching
- [#3222](https://github.com/sipeed/picoclaw/pull/3222) — refactor(deltachat): cleanup implementation, documentation -200LOC
- [#3193](https://github.com/sipeed/picoclaw/pull/3193) — Added simplex channel type

## 4. Community Hot Topics

The most discussed items in this window are all issues, as PRs did not have recorded comment/reaction activity in the dataset.

- **[#3287 — Better support long messages in IRC](https://github.com/sipeed/picoclaw/issues/3287)** — 4 comments  
  The core need is that PicoClaw should treat IRCv3 long messages as a single cohesive message, even when client-side splitting occurs due to the 512-byte IRC limit. This is a practical usability gap for IRC users who send or receive longer content.

- **[#3302 — Support OAuth 2.1 for MCP servers same as #2546](https://github.com/sipeed/picoclaw/issues/3302)** — 2 comments  
  Users want OAuth 2.1 support for MCP servers, aligning with an earlier request in #2546. The request is explicitly tagged as a "Nice-to-Have / Enhancement" rather than a core feature.

- **[#3292 — CPU usage too high when focus on input box in chat interface](https://github.com/sipeed/picoclaw/issues/3292)** — 2 comments, closed as stale  
  The issue involved a real performance regression in the web chat interface when an input box is focused, reported on Debian/Linux x64 with Firefox.

## 5. Bugs & Stability

Ranked by severity:

1. **High — WhatsApp channel "client outdated (405)"**  
   [PR #3320](https://github.com/sipeed/picoclaw/pull/3320) reports that WhatsApp now rejects the pinned `whatsmeow` client version. The socket connects and then is dropped ~5s later, with no reconnect attempted. This effectively leaves the native WhatsApp channel dead. A dependency-bump fix PR exists but is **not yet merged**.

2. **Medium — High CPU usage when chat input is focused**  
   [Issue #3292](https://github.com/sipeed/picoclaw/issues/3292) reports high CPU usage in the web interface on Firefox when the input box is selected. The issue was closed as stale, so no fix PR is currently linked.

3. **Medium/Low — Agent prefix caching invalidation**  
   [PR #3321](https://github.com/sipeed/picoclaw/pull/3321) identifies a design issue where dynamic context placed inside the system message invalidates the entire prefix cache ahead of conversation history. This likely increases token usage and latency. A fix PR is open but not merged.

## 6. Feature Requests & Roadmap Signals

Active user-requested features in this window:

- **IRCv3 long-message handling** ([#3287](https://github.com/sipeed/picoclaw/issues/3287)) — Treat client-split IRC messages as one logical message. This is a solid quality-of-life improvement for IRC usage.
- **OAuth 2.1 for MCP servers** ([#3302](https://github.com/sipeed/picoclaw/issues/3302)) — User-requested enhancement for MCP server authentication, explicitly marked as nice-to-have.
- **New channel type: SimpleX** ([PR #3193](https://github.com/sipeed/picoclaw/pull/3193)) — An implementation already exists as an open PR, though it has been open since June 2026 and may need maintainer review.

**Prediction for next version:** The most likely immediate changes are the urgent dependency bump for WhatsApp ([#3320](https://github.com/sipeed/picoclaw/pull/3320)) and the agent caching fix ([#3321](https://github.com/sipeed/picoclaw/pull/3321)), since both unblock existing functionality or improve efficiency. Feature work like IRC long-message handling and SimpleX support may follow if maintainers prioritize community PRs.

## 7. User Feedback Summary

Real user pain points surfaced in this window:

- **IRC users** need long messages to remain coherent after IRC client splitting — currently PicoClaw may interpret split chunks as separate messages ([#3287](https://github.com/sipeed/picoclaw/issues/3287)).
- **MCP users** want modern OAuth 2.1 support for parity with a previously requested feature ([#3302](https://github.com/sipeed/picoclaw/issues/3302)).
- **Web chat users** report annoying high CPU usage when focusing the input box in Firefox on Linux ([#3292](https://github.com/sipeed/picoclaw/issues/3292)).
- **WhatsApp users** are likely affected by the reported client-outdated disconnection ([#3320](https://github.com/sipeed/picoclaw/pull/3320)).
- **Power users/agents** may be paying unnecessary token costs due to prefix caching invalidation caused by dynamic context placement ([#3321](https://github.com/sipeed/picoclaw/pull/3321)).

No positive satisfaction signals were present in this dataset; the overall sentiment is pragmatic and issue-driven.

## 8. Backlog Watch

Items that need maintainer attention:

- **[#3193 — Added simplex channel type](https://github.com/sipeed/picoclaw/pull/3193)**  
  Open since 2026-06-27, stale-labelled, no recorded comments/reactions. This is a functional new feature PR that has been waiting over six weeks.

- **[#3222 — refactor(deltachat): cleanup implementation, documentation -200LOC](https://github.com/sipeed/picoclaw/pull/3222)**  
  Open since 2026-07-03, stale-labelled. Includes removal of legacy features, updated relay list handling, and better secret management. Needs maintainer review or explicit closure.

- **[#3287 — Better support long messages in IRC](https://github.com/sipeed/picoclaw/issues/3287)**  
  Open since 2026-07-22 with 4 comments. It is a clearly scoped feature request but has no maintainer response evident in the provided data.

- **[#3302 — Support OAuth 2.1 for MCP servers](https://github.com/sipeed/picoclaw/issues/3302)**  
  Open since 2026-07-30. Tagged as a nice-to-have enhancement; may need triage to decide whether it enters the roadmap.

The growing number of stale-labelled open PRs and issues suggests that **review bandwidth may be a current bottleneck** for PicoClaw.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-09

## 1. Today's Overview

NanoClaw had a busy, integration-focused 24 hours: 8 issues and 6 PRs were updated, with no new release cut. The most significant activity centered on the Discord approval workflow, where a surfaced bug (#3201) and a targeted fix PR (#3185) indicate active triage. Meanwhile, the project advanced its connectivity story with three closed PRs covering Mattermost (v2 ChannelAdapter), remote HTTP/SSE MCP servers, and the Strava MCP skill. Several of the day's open issues cluster around attachment handling and platform-specific message-ID quirks (Google Chat, Signal, codex images), suggesting channel hardening is the current battleground. Overall project health looks positive but patchy: strong contributor momentum, with a backlog of review-latency and cross-platform edge cases.

## 2. Releases

No new releases in the last 24 hours.

## 3. Project Progress

Three PRs were merged/closed during the period:

- **[#3199 — Add Mattermost channel integration (v2 ChannelAdapter)](https://github.com/nanocoai/nanoclaw/pull/3199)** — closed. Fresh implementation against the current `ChannelAdapter`/`channel-registry.ts` contract, superseding the pre-v2 architecture of #546. A follow-up PR (#3202) is already open, likely iterating on this work.
- **[#2776 — feat: support remote HTTP/SSE MCP servers](https://github.com/nanocoai/nanoclaw/pull/2776)** — closed. Extends `McpServerConfig` to a union type supporting stdio and remote HTTP/SSE, adds `--type`, `--url`, and `--header` options to `ncl groups config add-mcp-server`.
- **[#2777 — feat: add /add-strava skill for official Strava MCP](https://github.com/nanocoai/nanoclaw/pull/2777)** — closed. Wires the official Strava MCP endpoint with a host-side OAuth flow and auto-refreshing token module.

These closures signal a deliberate push to expand NanoClaw's MCP ecosystem and chat-channel coverage. Notably, both #2776 and #2777 were open since 2026-06-15 — roughly seven weeks of review latency before landing.

## 4. Community Hot Topics

- **[#3201 — Discord approval button clicks not registering](https://github.com/nanocoai/nanoclaw/issues/3201)** (2 comments) — the most active item of the day. Admin/owner clicks on Discord approval cards record "0 by [user]" and the request is subsequently rejected, breaking the `ncl groups config update` governance flow. The underlying need is a dependable multi-user approval UX; a fix PR ([#3185](https://github.com/nanocoai/nanoclaw/pull/3185)) is open.
- **[#3177 — Session database lock contention on Docker cross-mount filesystems](https://github.com/nanocoai/nanoclaw/issues/3177)** (1 comment) — severe for macOS/Linux Docker users (29,000+ readonly errors and intermittent delivery failures). Now closed, indicating a fix was addressed.
- **[#3200 — "The Cartographer" persona/system-prompt dump](https://github.com/nanocoai/nanoclaw/issues/3200)** (1 comment) — an off-template issue that reads as a prompt/persona description rather than a bug report. It likely needs maintainer triage as noise, a misdirected feature proposal, or a potential prompt-injection report.

## 5. Bugs & Stability

Ranked by severity:

1. **High — [Discord approvals always rejected (#3201)](https://github.com/nanocoai/nanoclaw/issues/3201)** — Approval/`ask_question` cards resolve to the wrong option; admin/owner votes are not recorded, so config update requests fail even on explicit Approve clicks. Fix PR **[#3185](https://github.com/nanocoai/nanoclaw/pull/3185)** (strip `\n` delimiter in webhook `custom_id`) is open and should be prioritized. Note: #3201 was closed, but the fix PR is still open — resolution should be verified.
2. **High — [SQLite lock contention on Docker mounts (#3177)](https://github.com/nanocoai/nanoclaw/issues/3177)** — `inbound.db`/`outbound.db` hit 29,000+ readonly errors on VirtioFS/macOS. Marked closed, presumably fixed.
3. **Medium — [Inbound attachments silently dropped on Google Chat (#3206)](https://github.com/nanocoai/nanoclaw/issues/3206)** — `isSafeAttachmentName(messageId)` rejects IDs containing `/` or `\`, so staging never happens.
4. **Medium — [codex provider emits undeclared `file` ProviderEvent (#3203)](https://github.com/nanocoai/nanoclaw/issues/3203)** — `/add-codex` fails the container typecheck on `main`; nothing consumes the event, so codex-generated images are silently dropped.
5. **Medium — [Signal image/PDF attachments unreachable from agent container (#2528)](https://github.com/nanocoai/nanoclaw/issues/2528)** — long-standing (open since 2026-05-18); host receives media but the containerized agent can't access it.
6. **Low — [add-opencode skill references removed Dockerfile install blocks (#3204)](https://github.com/nanocoai/nanoclaw/issues/3204)** — a docs/skill regression from the `cli-tools.json` refactor; the guard test still asserts the old shape.

## 6. Feature Requests & Roadmap Signals

- **Persistent group-scoped OneCLI secret assignment ([#3205](https://github.com/nanocoai/nanoclaw/issues/3205))** — an unresolved design fork over which vault secrets an agent receives at spawn. Multi-user secret scoping is a clear architectural gap; an owner decision here would unblock the OneCLI roadmap.
- **Mattermost channel integration ([#3202](https://github.com/nanocoai/nanoclaw/pull/3202), open)** — fresh PR following the closed v2 adapter; likely to land in an upcoming release, possibly with review feedback from #3199.
- **Telegram native rich rendering ([#2877](https://github.com/nanocoai/nanoclaw/pull/2877), open)** — leverages Bot API 10.1 `sendRichMessage`; awaiting maintainer review since 2026-06-28.
- **MCP ecosystem expansion (merged #2776/#2777)** — the remote HTTP/SSE MCP support and Strava skill signal a broader direction; additional official MCP integrations (by type/URL rather than stdio-only) are probable next.

## 7. User Feedback Summary

- **Governance trust is bruised** — owners/admins on Discord literally cannot approve configuration updates (#3201), which is a critical trust-breaker for a multi-user assistant platform.
- **Docker/macOS deployments are fragile** — the SQLite lock-contention episode (#3177) caused mass readonly errors and message delivery failures, a major deployment pain point.
- **Media sharing is inconsistent across channels** — Signal users have waited ~3 months (#2528), and Google Chat users now face silent attachment drops (#3206); cross-platform media reliability is a recurring theme.
- **Contributor sentiment is positive** — new channel and skill PRs (Mattermost, Telegram, Strava, remote MCP) show an engaged technical community actively extending the platform despite review latency.

## 8. Backlog Watch

- **[#2528 — Signal image/PDF attachments unreachable from agent container](https://github.com/nanocoai/nanoclaw/issues/2528)** — open since 2026-05-18 with zero comments; needs maintainer triage or a fix.
- **[#2877 — Telegram rich rendering PR](https://github.com/nanocoai/nanoclaw/pull/2877)** — unreviewed since 2026-06-28; a substantial feature that deserves maintainer feedback or explicit deferral.
- **[#3185 — Discord approval fix PR](https://github.com/nanocoai/nanoclaw/pull/3185)** — directly addresses the hottest bug (#3201), which is already closed; pending review while the underlying UX issue may still be live.
- **[#3205 — OneCLI secret assignment design fork](https://github.com/nanocoai/nanoclaw/issues/3205)** — no comments yet, but the two contradictory directions it flags require an architectural decision.
- **[#3200 — "Cartographer" off-template issue](https://github.com/nanocoai/nanoclaw/issues/3200)** — should be triaged to either close as spam or redirect to proper feature/bug channels.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-09

## 1. Today's Overview

IronClaw is in a high-velocity, healthy state: 30 issues were updated in the last 24 hours (6 open, 24 closed) and 50 PRs were updated (18 open, 32 closed/merged). No new releases were published. The large batch of closed Reborn parity and refactoring trackers suggests the v2 architecture work is consolidating, while active PRs focus on new user-facing surfaces: web-push notifications, presence-based shared conversations, Slack progressive previews, and the Web Debug Inspector. The main caution signals are an open security-wiring gap (#7391), a p1 token-accounting bug (#6989), and a merged breaking change (#7377) that required follow-up delivery fixes.

## 2. Releases

No releases were published in this window.

## 3. Project Progress

32 PRs were closed/merged in the last 24 hours. Notable items from the top-20 list:

- [#7377](https://github.com/nearai/ironclaw/pull/7377) — Breaking change: a run now acts as its invoker; shared-route subject binding removed. Includes follow-ups from the multi-agent audit.
- [#7029](https://github.com/nearai/ironclaw/pull/7029) — Restores durable delivery claim: the `Prepared -> Sending` compare-and-swap becomes the sole authority for vendor-egress ownership.
- [#7382](https://github.com/nearai/ironclaw/pull/7382) — Adds scripted tool-call stress workloads with durable write read-back; Phase 1 of [#7360](https://github.com/nearai/ironclaw/issues/7360).
- [#6938](https://github.com/nearai/ironclaw/pull/6938) — Skills: the model chooses skills instead of a host-side keyword scorer.
- [#7280](https://github.com/nearai/ironclaw/pull/7280) — Adds browser, security, and operator coverage for the Web Debug Inspector.
- [#7393](https://github.com/nearai/ironclaw/pull/7393) — Adds Core delivery pair coverage to the wide-catalog disclosure benchmark.
- [#7389](https://github.com/nearai/ironclaw/pull/7389) — Fixes scheduled live-QA Slack delivery verification after the #7157/#7377 changes.

24 issues were closed, including a broad Reborn parity wave: inbound workflow facade [#3280](https://github.com/nearai/ironclaw/issues/3280), capability lifecycle parity [#3288](https://github.com/nearai/ironclaw/issues/3288), external channel migration [#3285](https://github.com/nearai/ironclaw/issues/3285), agent command behavior [#3286](https://github.com/nearai/ironclaw/issues/3286), CLI/TUI migration [#3284](https://github.com/nearai/ironclaw/issues/3284), memory/workspace surfaces [#3287](https://github.com/nearai/ironclaw/issues/3287), approvals parity epic [#4539](https://github.com/nearai/ironclaw/issues/4539), and Reborn composition refactor [#4470](https://github.com/nearai/ironclaw/issues/4470). Inspector subtasks [#7225](https://github.com/nearai/ironclaw/issues/7225) and [#7226](https://github.com/nearai/ironclaw/issues/7226) also closed.

## 4. Community Hot Topics

- [#3280](https://github.com/nearai/ironclaw/issues/3280) — **7 comments.** Reborn `ProductWorkflow` and `InboundTurnService` facade. Underlying need: completing the Reborn inbound workflow layer between product adapters and host services.
- [#6989](https://github.com/nearai/ironclaw/issues/6989) — **5 comments.** Token accounting uses the content reference string length instead of referenced content. Underlying need: accurate token/cost estimation and hybrid provider-usage accounting.
- [#7360](https://github.com/nearai/ironclaw/issues/7360) — **2 comments.** Stress coverage does not exercise built-in tool-call and durable write paths. Underlying need: prevent regressions in capability writes and memory persistence.
- [#6939](https://github.com/nearai/ironclaw/issues/6939) — **2 comments.** Users need a migration path from legacy Hermes/Openclaw setups to IronClaw. Underlying need: reduce switching costs and preserve user configuration/memory.
- [#3288](https://github.com/nearai/ironclaw/issues/3288) — **2 comments.** Reborn production/scoped capability lifecycle parity. Underlying need: preserve extension, skill, MCP, and WASM lifecycle UX during the Reborn migration.

PR comment counts were not exposed in the provided data. The largest/riskiest PRs drawing attention are [#7398](https://github.com/nearai/ironclaw/pull/7398), [#7397](https://github.com/nearai/ironclaw/pull/7397), [#7396](https://github.com/nearai/ironclaw/pull/7396), [#7395](https://github.com/nearai/ironclaw/pull/7395), and [#7171](https://github.com/nearai/ironclaw/pull/7171).

## 5. Bugs & Stability

Ranked by severity:

- **High — Security validation not wired into live path:** [#7391](https://github.com/nearai/ironclaw/issues/7391) reports `SafetyLayer::validate_input` and `scan_inbound_for_secrets` have no caller on the live Reborn turn path, despite security docs describing that flow. No fix PR is listed yet.
- **High — Skills disappear after install:** [#7171](https://github.com/nearai/ironclaw/pull/7171) describes a user-facing bug where a skill install returns `{"installed": true}` but the skill is absent from Settings and cannot be activated. Fix PR is still open.
- **High — p1 token accounting bug:** [#6989](https://github.com/nearai/ironclaw/issues/6989): `ModelWorkRequest::for_assistant` estimates input tokens from the reference string length, not the referenced content. No fix PR is listed yet.
- **Medium — Outbound send-claim TOCTOU race:** [#7395](https://github.com/nearai/ironclaw/pull/7395) fixes a claim-loss misclassification and allows failed-row reopen. Fix PR is open.
- **Medium — Duplicate gate projection identities:** [#7352](https://github.com/nearai/ironclaw/pull/7352) fixes runs blocked on multiple gates producing the same durable delivery identity. Fix PR is open.
- **Medium — Recovery overwrites terminal status:** [#7028](https://github.com/nearai/ironclaw/pull/7028) fixes interrupted-delivery recovery writing over terminal statuses. Fix PR is open.
- **Medium — WebUI attachment regression:** [#7341](https://github.com/nearai/ironclaw/pull/7341) restores scoped attachment reads and SSE tests after the fetch/ReadableStream migration. Fix PR is open.
- **Low/CI — Hardcoded crate prefixes:** [#7394](https://github.com/nearai/ironclaw/pull/7394) fixes `SANDBOX_DOCKER_EXACT_PATHS` crate prefixes in CI scripts. Fix PR is open.
- **Addressed — Live-QA Slack delivery failures:** [#7389](https://github.com/nearai/ironclaw/pull/7389) closed the gap left by #7157/#7377.

## 6. Feature Requests & Roadmap Signals

- **Legacy migration tool:** [#6939](https://github.com/nearai/ironclaw/issues/6939) requests a tool to port legacy agent setup, configuration, and memory into IronClaw. No PR yet.
- **Web Debug Inspector:** The [#7218](https://github.com/nearai/ironclaw/issues/7218) epic is labelled `v1.1.0` and shows strong momentum: closed subtasks [#7225](https://github.com/nearai/ironclaw/issues/7225)/[#7226](https://github.com/nearai/ironclaw/issues/7226) and open PR [#7291](https://github.com/nearai/ironclaw/pull/7291).
- **Web-push notifications + PWA:** [#7398](https://github.com/nearai/ironclaw/pull/7398) makes the web app a first-party notification channel with W3C Web Push.
- **Presence-based shared conversations:** [#7397](https://github.com/nearai/ironclaw/pull/7397) extends Slack/Telegram shared conversations using the new acting-identity model.
- **Slack progressive previews:** [#7396](https://github.com/nearai/ironclaw/pull/7396) adds generic progressive-preview delivery for Slack channels.
- **Pinned coding tool surface:** [#7392](https://github.com/nearai/ironclaw/issues/7392), opened today, proposes replacing first-party coding tools with the pinned `oh-my-pi` tool contract.
- **Stress coverage expansion:** [#7360](https://github.com/nearai/ironclaw/issues/7360) remains open; PR [#7382](https://github.com/nearai/ironclaw/pull/7382) already delivered Phase 1.

The likely next-version signals are the Web Debug Inspector, web-push channel support, and the new Slack/Telegram conversation and preview features.

## 7. User Feedback Summary

- **Migration pain is the clearest user complaint:** [#6939](https://github.com/nearai/ironclaw/issues/6939) reports legacy Hermes/Openclaw users face high switching costs and several would resist starting over with a clean slate.
- **Skill-install trust issue:** [#7171](https://github.com/nearai/ironclaw/pull/7171) describes a confusing user experience: installs report success but the skill never appears in Settings or becomes activatable.
- **Token/cost accuracy concern:** [#6989](https://github.com/nearai/ironclaw/issues/6989) can undercount or misattribute model input tokens, which matters for users relying on usage accounting.
- **Security-doc mismatch:** [#7391](https://github.com/nearai/ironclaw/issues/7391) points out that documented input validation/secret-leak detection is not actually invoked on the live Reborn turn path, a potential trust issue for security-conscious users.
- **Internal dissatisfaction signal:** [#7389](https://github.com/nearai/ironclaw/pull/7389) notes the scheduled live-QA lane failed every run after #7157 merged, indicating the breaking change initially broke delivery verification.

## 8. Backlog Watch

Items that need maintainer attention:

- [#6989](https://github.com/nearai/ironclaw/issues/6989) — p1 token-accounting bug, open since Aug 1, 5 comments, no fix PR.
- [#6939](https://github.com/nearai/ironclaw/issues/6939) — Migration tool request, open since Jul 31, no implementation PR.
- [#7171](https://github.com/nearai/ironclaw/pull/7171) — Large skill-lifecycle fix, open since Aug 4; closes [#7168](https://github.com/nearai/ironclaw/issues/7168) and is part of epic [#6941](https://github.com/nearai/ironclaw/issues/6941).
- [#7048](https://github.com/nearai/ironclaw/pull/7048) — WASM guest-diagnostics sanitization, open since Aug 3, stacked on dependency [#7063](https://github.com/nearai/ironclaw/pull/7063).
- [#7028](https://github.com/nearai/ironclaw/pull/7028) — Outbound terminal-status recovery fix, open since Aug 3; the stacked successor [#7029](https://github.com/nearai/ironclaw/pull/7029) is already closed, so this branch likely needs rebase/merge attention.
- [#7391](https://github.com/nearai/ironclaw/issues/7391) — New security-wiring gap, no comments and no fix yet; should be triaged promptly.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-09

## 1. Today's Overview

LobsterAI saw minimal activity over the past 24 hours: 1 issue and 3 PRs were updated, and no new releases were cut. Notably, **all four updated items carry the `stale` label**, indicating they have not received substantive maintainer review for extended periods. One PR (#2193, LiteLLM gateway support) was closed, while two PRs and one issue remain open. The project overall appears to be in a low-activity / maintenance phase, with a growing backlog of community contributions awaiting maintainer attention.

## 2. Releases

No new releases were published in this period.

## 3. Project Progress

- **[PR #2193 — feat: add LiteLLM as AI gateway provider (CLOSED)](https://github.com/netease-youdao/LobsterAI/pull/2193)** — The only closed PR today. It adds [LiteLLM](https://litellm.ai) as an AI gateway provider, letting users point the base URL at a LiteLLM proxy to access 100+ LLM providers through one OpenAI-compatible endpoint. It reuses the existing `chatWithOpenAICompatible` handler with no new dependencies, and touches renderer, main, and openclaw areas. If merged, this meaningfully expands multi-provider LLM support.
- PRs #1193 (SQLite write-amplification fix) and #2294 (docs badge) remain open with no visible merge activity today.

## 4. Community Hot Topics

Discussion activity is very low — the only item with any comment activity today is:

- **[Issue #1192 — 自定义已有工具的默认配置 (Customize default configuration for existing tools)](https://github.com/netease-youdao/LobsterAI/issues/1192)** — The lone comment thread. The user wants to hardcode default tool settings (e.g., always launch the browser in headless mode) because relying on the LLM's instruction-following via memory is unreliable ("指令跟随经常不好"). **Underlying need:** users want deterministic, user-overridable tool configuration rather than hoping the model obeys natural-language instructions.
- **[PR #2193 (LiteLLM)](https://github.com/netease-youdao/LobsterAI/pull/2193)** — While it has no recorded comments, its creation and closure signal community demand for broader, gateway-based LLM provider flexibility.

## 5. Bugs & Stability

No crashes or regressions were reported today. Two items are relevant to stability, ranked by severity:

1. **Medium — SQLite write amplification (performance/stability risk).** [PR #1193](https://github.com/netease-youdao/LobsterAI/pull/1193) documents a real flaw: every single row mutation triggers a full `db.export()` + `fs.writeFileSync()` of the entire in-memory database, because `sql.js` has no incremental persistence and `SqliteStore.save()` serializes the whole DB. This can cause severe performance degradation as the database grows. A fix (debounce + batch transactions) exists in the PR but has been open and unreviewed since 2026-04-01.
2. **Low — Disruptive browser window behavior (UX defect).** [Issue #1192](https://github.com/netease-youdao/LobsterAI/issues/1192): the browser tool always pops up a visible window; there is no supported way to force headless mode without relying on model instruction-following.

## 6. Feature Requests & Roadmap Signals

- **Per-tool default configuration (new feature):** [Issue #1192](https://github.com/netease-youdao/LobsterAI/issues/1192) requests a way to "write dead" default configs for existing tools (e.g., headless browser). This fits a broader agent-framework trend toward explicit, declarative tool settings. If maintainers engage, a `toolConfig` / agent-settings surface is a plausible next-version addition.
- **Multi-provider AI gateway (likely merged):** [PR #2193](https://github.com/netease-youdao/LobsterAI/pull/2193) adds LiteLLM support with zero new dependencies; its closure suggests open-source direction toward multi-provider compatibility may be on the roadmap.
- **Storage performance hardening:** [PR #1193](https://github.com/netease-youdao/LobsterAI/pull/1193) would land as an internal performance improvement; debounced/batched writes are a likely candidate for inclusion once reviewed.

## 7. User Feedback Summary

- **Pain point — unreliable LLM tool configuration:** A Chinese-speaking user ([duzhen1996](https://github.com/netease-youdao/LobsterAI/issues/1192)) reports that even after adding memory instructions to launch the browser headlessly, the model frequently fails to comply. They explicitly ask for a hard-coded default configuration. This reflects a broader dissatisfaction: "memory-based" agent behavior is non-deterministic, and users want explicit overrides.
- **Contributor frictions:** The author of [PR #1193](https://github.com/netease-youdao/LobsterAI/pull/1193) identified a concrete performance bug and provided a complete fix, but the PR has been stale for over four months — a contributor-engagement risk.
- **Satisfaction indicators:** No positive feedback or merged community contributions surfaced today; the overall sentiment signal is quiet but leans toward users and contributors waiting on maintainer responses.

## 8. Backlog Watch

All of the following items are stale-labeled and need maintainer attention:

1. **[PR #1193 — perf(sqlite): eliminate write amplification (open since 2026-04-01)](https://github.com/netease-youdao/LobsterAI/pull/1193)** — High-value performance fix for a core storage path, unmerged for 4+ months. Highest priority given its impact on every mutation of the in-memory DB.
2. **[Issue #1192 — tool default configuration request (open since 2026-04-01)](https://github.com/netease-youdao/LobsterAI/issues/1192)** — Simple, well-scoped feature request with no visible maintainer response; the user explicitly asked for help ("谢谢！"). Risks user churn if ignored.
3. **[PR #2294 — docs: add TakoAPI directory badge (open since 2026-07-08)](https://github.com/netease-youdao/LobsterAI/pull/2294)** — Trivial, docs-only change that should be quick to merge or reject; leaving it stale adds noise to the PR queue.

**Health note:** The universal `stale` labeling and multi-month gaps on high-quality contributions suggest maintainer bandwidth is constrained; without triage, these items may be auto-closed by the stale bot regardless of value.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-09

Data snapshot: 2 issues updated (1 open, 1 closed) · 1 PR merged/closed · 0 new releases

## 1. Today's Overview

Moltis logged a light but productive maintenance window: one long-standing Docker sandbox bug was fixed, the related issue was closed, and a new bug surfaced around Apple Container 1.x sandbox detection. The merged [PR #1105](https://github.com/moltis-org/moltis/pull/1105) resolves a ~9-week-old blocker affecting core `Read`/`Write`/`Edit` tools in Docker, a meaningful stability win. However, the fresh report of a false "not running" state for Apple Containers ([#1185](https://github.com/moltis-org/moltis/issues/1185)) suggests cross-runtime sandbox detection still needs hardening. No releases were published, and community engagement metrics are minimal (0 comments/reactions across all items), indicating users are filing standalone reports rather than participating in discussion threads. Overall, project health is stable with steady, if modest, issue-to-PR closure flow.

## 2. Releases

No new releases were published in the last 24 hours; this section is omitted.

## 3. Project Progress

- **Merged/closed: [PR #1105 — Fix Docker sandbox filesystem tool fallback](https://github.com/moltis-org/moltis/pull/1105)** (penso, created 2026-06-05, closed 2026-08-08)
  - Adds regression coverage for sandboxed `Read`/`Write`/`Edit`/`MultiEdit` operations on `/home/sandbox` and `workspace/data` paths.
  - Introduces a fallback from translated Docker host paths to container operations when the gateway process cannot access the host mount.
  - Preserves direct-host missing-list semantics, preventing regressions in filesystem listing behavior.
  - This PR resolves the previously open Docker filesystem bug in [Issue #1096](https://github.com/moltis-org/moltis/issues/1096).

## 4. Community Hot Topics

No items currently have comments or reactions, so there are no active community discussion threads. The most significant items by recency are:

- [Issue #1185 — Apple Container 1.x sandbox starts but Moltis treats it as not running](https://github.com/moltis-org/moltis/issues/1185) (open, filed 2026-08-08): Newly reported, signals demand for reliable sandbox state detection across container runtimes.
- [Issue #1096 — Read/Write/Edit tools don't work in Docker](https://github.com/moltis-org/moltis/issues/1096) (closed 2026-08-08): Long-running Docker filesystem pain point now resolved via PR #1105.

The underlying need across both items is consistent: users expect first-class filesystem tooling regardless of sandbox backend (Docker, Apple Containers). The absence of thread comments suggests users are submitting complete, self-contained reports rather than seeking iterative troubleshooting support.

## 5. Bugs & Stability

1. **[Issue #1185 — Apple Container 1.x sandbox starts but Moltis treats it as not running](https://github.com/moltis-org/moltis/issues/1185)** — Open, new, medium-high severity.
   - Affects macOS users running Apple Container 1.x: the sandbox launches successfully, but Moltis's state detection incorrectly reports it as not running, potentially stalling subsequent orchestration steps.
   - No fix PR currently exists; filed on 2026-08-08, requires maintainer triage and likely reproduces in local macOS environments.

2. **[Issue #1096 — Read/Write/Edit tools don't work in Docker](https://github.com/moltis-org/moltis/issues/1096)** — Closed/fixed.
   - Root cause addressed by [PR #1105](https://github.com/moltis-org/moltis/pull/1105): gateway host-path translation failures for sandboxed filesystem operations.
   - Regression coverage added to prevent recurrence.

## 6. Feature Requests & Roadmap Signals

No explicit feature requests were filed in the last 24 hours. However, [PR #1105](https://github.com/moltis-org/moltis/pull/1105) reveals active roadmap investment in sandbox filesystem robustness: the new regression coverage for `/home/sandbox` and `workspace/data`, plus container-native fallbacks, lays groundwork for supporting a wider matrix of container runtimes. Given the newly filed Apple Container report ([#1185](https://github.com/moltis-org/moltis/issues/1185)), a follow-up fix improving sandbox lifecycle detection across macOS container implementations is the most likely candidate for the next patch release.

## 7. User Feedback Summary

- **Docker users:** Core editing tools (`Read`/`Write`/`Edit`/`MultiEdit`) were non-functional in sandboxed environments since early June; this was the primary reported pain point and is now addressed in the codebase.
- **macOS users:** A new blocker is reported where Apple Container 1.x sandboxes start but are misreported by Moltis, which may render sessions unable to proceed.
- **Satisfaction signals:** Mixed. The Docker fix and added regression tests are positive, but the ~9-week turnaround on a core-functionality bug and the immediate appearance of a similar-class issue on Apple Containers indicate sandbox-detail work remains a recurring user-facing risk.

## 8. Backlog Watch

- **[Issue #1096](https://github.com/moltis-org/moltis/issues/1096)** sat open from 2026-06-03 to 2026-08-08 — a roughly 9-week wait for a fix affecting core tools. Maintainers may want to audit similar sandbox/filesystem issues to detect systemic latency in triage.
- **[Issue #1185](https://github.com/moltis-org/moltis/issues/1185)** is new and unaddressed; a prompt maintainer acknowledgment (e.g., "confirmed" or "reproducing") would help set expectations and reduce uncertainty for macOS users.
- **No open PRs** currently exist, so the maintainer pipeline is clear to take on incoming fixes without queue buildup.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-09

## Today's Overview
CoPaw (QwenPaw) is seeing a high level of community activity: **18 issues** and **50 PRs** were updated in the last 24 hours. The open issue count remains high (16 active issues), while maintainers also closed 2 issues and 3 PRs/merges during the window. The busiest areas are **MCP session reliability**, **provider compatibility**, **frontend UI performance**, and **installation/update friction on Windows/macOS**. No new releases were published, so most recent changes are still in pre-release/beta stabilization.

---

## Releases
No new releases were published in the last 24 hours. The project remains in active development between beta versions, with fixes and features landing via PRs rather than a shipped release today.

---

## Project Progress
Visible closed/merged activity in today's PR sample:

- **PR #6835** — `fix(llm): resolve KeyError '__aiter__' during auto-title generation`  
  Fixes auto-title failures for non-streaming provider responses.  
  https://github.com/agentscope-ai/QwenPaw/pull/6835

- **PR #6836** — `fix(mcp): wire read_timeout_seconds into MCP SDK ClientSession`  
  Addresses MCP client sessions hanging when the timeout was not actually passed to the SDK.  
  https://github.com/agentscope-ai/QwenPaw/pull/6836

- Also closed during the window:
  - **Issue #6756** — `run_tool_batch` "No toolkit available in current context" was closed.  
    https://github.com/agentscope-ai/QwenPaw/issues/6756
  - **Issue #4558** — Long-standing high-CPU during long text output was closed.  
    https://github.com/agentscope-ai/QwenPaw/issues/4558

Several important fixes are actively progressing in open PRs, including MCP session recovery (#6586), model fallback with cooldown (#6659), and pausing offscreen CSS animations (#6834).

---

## Community Hot Topics
The most-discussed issues today show strong user demand around provider support, Docker usability, and blocking behaviors:

- **#6782 — Docker version shows plugin/app marketplace "maintenance"** (9 comments)  
  Users on Docker cannot use plugin/app markets at all, suggesting an environment or networking issue in the container distribution.  
  https://github.com/agentscope-ai/QwenPaw/issues/6782

- **#6811 — OpenAI Responses continuation summary ignores `disable_thinking` and blocks conversation** (5 comments)  
  A beta regression that stalls the main conversation when generating a continuation summary with reasoning-enabled models.  
  https://github.com/agentscope-ai/QwenPaw/issues/6811

- **#6490 — Add Volcengine Agent Plan and Xiaomi MiMo as built-in providers** (5 comments)  
  Users want more native provider choices, especially for cost-effective Chinese cloud/API offerings.  
  https://github.com/agentscope-ai/QwenPaw/issues/6490

- **#6820 — Frontend UI only shows model output after everything has completed** (4 comments)  
  Streaming/real-time rendering expectations are not met for some users, affecting perceived responsiveness.  
  https://github.com/agentscope-ai/QwenPaw/issues/6820

Underlying theme: users are pushing for **more provider integrations**, **less blocking during streaming**, and **more reliable packaged distributions** (Docker, Windows installer, macOS desktop app).

---

## Bugs & Stability
Ranked roughly by severity:

1. **#6814 — SIGBUS crash in SQLite WAL when opening Scroll `history.db` on macOS**  
   Crash on database open, unrelated to model inference. No fix PR visible yet.  
   https://github.com/agentscope-ai/QwenPaw/issues/6814

2. **#6822 — Transient streamable HTTP MCP failure permanently blocks active conversation**  
   The conversation remains blocked after reconnect. Related fix PRs: #6825 and #6836.  
   https://github.com/agentscope-ai/QwenPaw/issues/6822

3. **#6811 — OpenAI Responses continuation summary blocks main chat and misreports cancellation**  
   A beta regression affecting reasoning models with Scroll eviction.  
   https://github.com/agentscope-ai/QwenPaw/issues/6811

4. **#6821 — `reasoning_content` relay fails for thinking-mode models → 400 error**  
   Multi-turn conversations with DeepSeek-style thinking models fail because reasoning content is not passed back.  
   https://github.com/agentscope-ai/QwenPaw/issues/6821

5. **#6812 — Gemini provider sends unsupported `$schema` field in tool schemas**  
   Causes "Model 'unknown' execution failed" in Google API.  
   https://github.com/agentscope-ai/QwenPaw/issues/6812

6. **#6810 — Windows installer/update fails due to locked files (NM host lock)**  
   NSIS errors during upgrade/install; poor upgrade experience on Windows.  
   https://github.com/agentscope-ai/QwenPaw/issues/6810

7. **#6813 — `KeyError: '__aiter__'` in chat auto-title generation**  
   Non-streaming provider responses break title generation. Fix PR #6835 is already closed.  
   https://github.com/agentscope-ai/QwenPaw/issues/6813

8. **#6828 — Console frontend idles at ~20% CPU due to offscreen CSS animations**  
   UI jank on desktop/Tauri; fix PR #6834 is open.  
   https://github.com/agentscope-ai/QwenPaw/issues/6828

9. **#6831 — macOS local Whisper shows ffmpeg disabled because Homebrew PATH is excluded**  
   Usability bug for Apple Silicon desktop users.  
   https://github.com/agentscope-ai/QwenPaw/issues/6831

10. **#6826 — Assistant message end-time display is wrong in chat UI**  
   Shows a few seconds even when the actual thinking took 2 minutes.  
    https://github.com/agentscope-ai/QwenPaw/issues/6826

---

## Feature Requests & Roadmap Signals
There are several clear roadmap signals from both issue reports and incoming PRs:

- **More built-in providers** — Users request Volcengine Agent Plan and Xiaomi MiMo (#6490); PR #6526 adds NVIDIA NIM support.
- **Model fallback/cooldown** — PR #6659 implements automatic failover for rate limits/timeouts, fixing several older issues.
- **Prompt caching** — PR #6668 adds opt-in GPT-5.6+ prompt cache support for OpenAI Responses providers.
- **Better web search integration** — PR #6817 integrates AnySearch as a built-in search provider and MCP capability.
- **Approval UX improvements** — Issue #6832 asks for a one-line description when AI requests approval, so users don't have to read PowerShell code.
- **Cleanup on chat deletion** — Issue #6827 asks to optionally delete temporary files created by agents when a chat is deleted.

Likely next-version themes: **provider expansion**, **MCP reliability**, **streaming/UI responsiveness**, and **approval workflow polish**.

---

## User Feedback Summary
User pain points today are mostly around **stability and operational friction**:

- Docker users are blocked from plugin/app market functionality (#6782).
- Windows users suffer from broken auto-update and installer file-lock errors (#6810).
- Desktop macOS users see confusing Whisper/ffmpeg status (#6831).
- Multiple users report the UI feels non-streaming or delayed (#6820), and chat duration display is misleading (#6826).
- Thinking-mode/reasoning models have API-level reliability problems (#6811, #6821).
- Users want more control over approval transparency and temporary-file cleanup (#6832, #6827).

Satisfaction signals are mixed: the community is highly engaged and actively reporting detailed bugs with reproduction steps, but beta/pre-release quality issues around MCP, provider compatibility, and desktop packaging are currently the biggest sources of dissatisfaction.

---

## Backlog Watch
Items that are older or high-value and may need maintainer attention:

- **#6490 — Volcengine Agent Plan / Xiaomi MiMo providers**  
  Open since July 27, with 5 comments and no visible completion.  
  https://github.com/agentscope-ai/QwenPaw/issues/6490

- **PR #6659 — Model fallback with cooldown**  
  Under review since August 3; fixes #2199, #1327, #2089. High impact for production users.  
  https://github.com/agentscope-ai/QwenPaw/pull/6659

- **PR #6103 — Raise frontend vitest coverage thresholds**  
  Open since July 14; currently the frontend coverage floor is almost zero, so this is important for regression protection.  
  https://github.com/agentscope-ai/QwenPaw/pull/6103

- **PR #6331 — Website should declare Node 22 requirement**  
  Open since July 22; docs/setup mismatch is easy to fix but still pending.  
  https://github.com/agentscope-ai/QwenPaw/pull/6331

- **PR #6528 / #6615 — agent.json corruption and relative path fixes**  
  Both open since late July; config robustness issues affect startup reliability.  
  https://github.com/agentscope-ai/QwenPaw/pull/6528  
  https://github.com/agentscope-ai/QwenPaw/pull/6615

- **PR #6526 — NVIDIA NIM provider support**  
  Open since July 28; a straightforward provider addition that has not yet been merged.  
  https://github.com/agentscope-ai/QwenPaw/pull/6526

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-09

## 1. Today's Overview
ZeroClaw had a very active 24-hour window: **50 issues** and **50 PRs** were updated, with 48 of each still open. Two issues closed ([#8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043) — RFC to retire `aardvark-sys`, now actioned; [#9843](https://github.com/zeroclaw-labs/zeroclaw/issues/9843) — zerocode CPU-spin, closed as needs-repro), and two PRs closed/superseded ([#9494](https://github.com/zeroclaw-labs/zeroclaw/pull/9494), [#9798](https://github.com/zeroclaw-labs/zeroclaw/pull/9798)) with their work continuing in the canonical SOP fix PR [#9841](https://github.com/zeroclaw-labs/zeroclaw/pull/9841). No new releases were cut. The update stream is dominated by security hardening (webhook ingress auth, forbidden-path semantics, leak-detector false positives), headless SOP/cron execution fixes, and a large in-flight stack of Anthropic server-side fallback PRs. Project health looks strong on contributor velocity and maintainer review, but a persistent cluster of P1/S1 bugs in security-sensitive paths remains the main risk.

## 2. Releases
No new releases or release candidates were published in the last 24 hours. Note: PR [#9853](https://github.com/zeroclaw-labs/zeroclaw/pull/9853) (removing `aardvark-sys` and `zeroclaw-robot-kit`) explicitly cites unblocking crates.io publishing ([#9381](https://github.com/zeroclaw-labs/zeroclaw/issues/9381)), suggesting release preparation may be underway.

## 3. Project Progress
Two PRs closed this window — both **superseded rather than merged**, with the work consolidated into the open continuation PR:

- [PR #9494](https://github.com/zeroclaw-labs/zeroclaw/pull/9494) [CLOSED] — `fix(sop)`: drive cron-started headless runs. Closed after a public handoff; its four commits are carried unchanged into [#9841](https://github.com/zeroclaw-labs/zeroclaw/pull/9841).
- [PR #9798](https://github.com/zeroclaw-labs/zeroclaw/pull/9798) [CLOSED] — `docs(sop)`: document which agent executes SOP steps. Explicitly superseded by #9841.
- [PR #9841](https://github.com/zeroclaw-labs/zeroclaw/pull/9841) [OPEN] — Canonical continuation of the SOP work: fixes four blocking review findings from the #9494 review plus one additional defect found during rebase. This is the PR to watch for the "SOP auto-mode runs stuck forever" bug class.
- [Issue #8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043) [CLOSED] — RFC to retire `aardvark-sys` is now executed by [PR #9853](https://github.com/zeroclaw-labs/zeroclaw/pull/9853), which deletes both `aardvark-sys` and `zeroclaw-robot-kit` (zero reverse dependencies for the latter).
- [Issue #9843](https://github.com/zeroclaw-labs/zeroclaw/issues/9843) [CLOSED] — Long-lived zerocode client CPU-spin bug closed as needs-repro, no fix attached.

## 4. Community Hot Topics
Top-discussed issues (by comment count; all links to issues):

- [#8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043) — RFC: retire `aardvark-sys` (11 comments, **closed**). Consolidation signal; now executed by PR #9853.
- [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) — RFC: workspace-relative forbidden path patterns + `.zeroclawignore` (11 comments). Operator demand for protecting workspace-internal secrets like `.env` and `rust-toolchain.toml`.
- [#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) — System prompt tool-availability mismatch across entry points (10 comments). Follow-up to the merged direct-path fix in #8053.
- [#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) — WhatsApp Web answers every DM/group in `business` mode (9 comments). S1 security config footgun; a locked-down-looking config behaves fully open.
- [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) — Batch Telegram media groups into one multimodal turn (6 comments). Long-running channel UX issue since April.
- [#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) — OpenAI-compatible chat completions endpoint (6 comments). Clear interoperability demand from Open WebUI / LobeChat users.

**Underlying needs:** the community is pushing for (1) predictable security semantics where allowlists/denylists actually constrain agent behavior, (2) consolidation of overlapping crates/tools, (3) consistent tool availability across all entry points, and (4) channel UX parity, especially on Telegram.

## 5. Bugs & Stability
Ranked by severity (S1 first, then P1; no fix PR noted unless one appears in this snapshot):

1. [#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) — **S1 security**: WhatsApp Web `business` mode ignores chat-policy allowlist; empty `allowed_groups` permits all groups. In-progress, no fix PR visible.
2. [#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) — **S1 workflow blocked**: exiting the web dashboard chat window stops the agent's task loop. In-progress, no fix PR visible.
3. [#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) — **S1 workflow blocked**: Docker Compose gateway can remain loopback-bound behind a published port ("Connection refused"). In-progress.
4. [#9815](https://github.com/zeroclaw-labs/zeroclaw/issues/9815) — **P1 security** (accepted): `forbidden_paths` is unreachable for any path under `allowed_roots`, `allowed_roots_read_only`, `allowed_roots_write_only`, or the workspace — the allowed-root check returns before the forbidden-path loop runs. No fix PR visible.
5. [#9825](https://github.com/zeroclaw-labs/zeroclaw/issues/9825) — **P1 security** (accepted): high-entropy leak detector redacts public blockchain addresses (e.g., Solana), making payment-request URLs undeliverable. No fix PR visible; overlaps with #9486.
6. [#9387](https://github.com/zeroclaw-labs/zeroclaw/issues/9387) — **P1 security**: interactive approval responses accepted from any chat member on Telegram, Slack, Lark, and Matrix. In-progress, no fix PR visible.
7. [#9390](https://github.com/zeroclaw-labs/zeroclaw/issues/9390) — **P1 security**: emergency stop is a CLI-only state file that no runtime path reads. In-progress, no fix PR visible.
8. [#9805](https://github.com/zeroclaw-labs/zeroclaw/issues/9805) — **P1**: SOP `auto`-mode runs from channel/cron triggers never execute and rot as `running` forever (holding concurrency slots). **Fix PR exists: [#9841](https://github.com/zeroclaw-labs/zeroclaw/pull/9841).**
9. [#9816](https://github.com/zeroclaw-labs/zeroclaw/issues/9816) — **P1** (accepted): Anthropic provider records `cost_usd: 0.0`, so daily/monthly budget caps can never fire. No fix PR visible.
10. [#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) — **P1**: CLI-created cron jobs get `delivery.mode = "none"` hardcoded; runs succeed silently and discard all output. In-progress.
11. [#8731](https://github.com/zeroclaw-labs/zeroclaw/issues/8731) — **P1**: stdio-based MCP servers accumulate as zombie processes under active daemon PIDs. In-progress.
12. [#9834](https://github.com/zeroclaw-labs/zeroclaw/issues/9834) — **P1** (accepted): intermittent `zeroclaw-runtime` test failures from shared process-global state (`turn_streamed` receipts + `model_switch`). No fix PR visible.
13. [#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) — **P1**: system prompt tool-availability mismatch; direct runtime path already fixed in #8053, channels/gateway/WebSocket remain.
14. [#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) — **P2**: high-entropy detector redacts Solana wallet addresses even with `high_entropy_tokens=false` on the channel path. In-progress; related to #9825.
15. [#9656](https://github.com/zeroclaw-labs/zeroclaw/issues/9656) — **P2**: Telegram typing indicator keeps running for the whole approval wait, so a blocked turn looks active. In-progress.

## 6. Feature Requests & Roadmap Signals
Strong roadmap candidates from issues:

- **OpenAI-compatible chat completions endpoint** ([#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550)) — high external demand for standard client interop; likely next-version candidate.
- **Workspace-relative forbidden paths + `.zeroclawignore`** ([#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)) — RFC with 11 comments; would close a real security gap.
- **Telegram channel enhancements**: multi-message mode ([#8445](https://github.com/zeroclaw-labs/zeroclaw/issues/8445)), tool-call progress in partial streaming ([#6663](https://github.com/zeroclaw-labs/zeroclaw/issues/6663)), media-group batching ([#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514)).
- **MCP embedded resource blob intake** ([#9179](https://github.com/zeroclaw-labs/zeroclaw/issues/9179)) — materialize `resource`+`blob` results to workspace and strip base64 from model-facing output.
- **Web-tool surface simplification** ([#9824](https://github.com/zeroclaw-labs/zeroclaw/issues/9824)) — collapse five overlapping web tools into `web_fetch` + `web_research` + `http_request`.
- **RFC process streamlining** ([#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496)) — contributor-driven meta-request to shorten discussion windows and ease voting.

Large feature PRs in flight that may land soon: Anthropic server-side fallback stack ([#9265](https://github.com/zeroclaw-labs/zeroclaw/pull/9265) → [#9266](https://github.com/zeroclaw-labs/zeroclaw/pull/9266) → [#9268](https://github.com/zeroclaw-labs/zeroclaw/pull/9268) → [#9272](https://github.com/zeroclaw-labs/zeroclaw/pull/9272)), ZeroCode multi-session panes ([#9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739)), agent-facing config authoring with operator-approved previews ([#9828](https://github.com/zeroclaw-labs/zeroclaw/pull/9828)), eval run-history receipts ([#9248](https://github.com/zeroclaw-labs/zeroclaw/pull/9248)), and authenticated webhook ingress ([#9744](https://github.com/zeroclaw-labs/zeroclaw/pull/9744)).

## 7. User Feedback Summary
- **Security config footguns dominate**: operators believe they have allowlisted/denylisted correctly, then observe agents replying to all WhatsApp chats ([#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348)), accessing forbidden workspace files ([#9815](https://github.com/zeroclaw-labs/zeroclaw/issues/9815)), taking approvals from any group member ([#9387](https://github.com/zeroclaw-labs/zeroclaw/issues/9387)), and redacting legitimate crypto addresses ([#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486), [#9825](https://github.com/zeroclaw-labs/zeroclaw/issues/9825)).
- **Cost visibility is broken for Anthropic users**: budget caps silently never fire because spend is recorded as $0.00 ([#9816](https://github.com/zeroclaw-labs/zeroclaw/issues/9816)).
- **Workflow blockers**: exiting the dashboard kills long-running agent tasks ([#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559)); cron jobs swallow their output ([#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340)); SOP runs hang forever with no signal ([#9805](https://github.com/zeroclaw-labs/zeroclaw/issues/9805)).
- **Telegram UX**: split media groups, misleading typing indicator during approvals, no multi-message mode — recurring dissatisfaction concentrated in one channel.
- **Process feedback**: contributors find the RFC's 7-day minimum and unanimity requirements too heavy for the decisions being made ([#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496)) — a healthy, self-aware community signal.

## 8. Backlog Watch
Long-running or stalled items needing attention (date = created):

- [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) — Telegram media-group batching (2026-04-08, in-progress, no fix PR).
- [#6663](https://github.com/zeroclaw-labs/zeroclaw/issues/6663) — Telegram tool-call progress in partial streaming (2026-05-14, in-progress).
- [#7099](https://github.com/zeroclaw-labs/zeroclaw/issues/7099) — Route `zeroclaw status` output through CLI i18n (2026-06-02, in-progress).
- [#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) — Tool-availability mismatch across channels/gateway/WebSocket (2026-06-20, in-progress).
- [#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) — OpenAI-compatible endpoint (2026-06-30, in-progress).
- [#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) — Dashboard exit kills agent loop (2026-06-30, in-progress).
- [#8731](https://github.com/zeroclaw-labs/zeroclaw/issues/8731) — MCP stdio zombie processes (2026-07-05, in-progress).
- [#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) — Docker Compose gateway loopback-bound (2026-07-13, in-progress).
- [#9202](https://github.com/zeroclaw-labs/zeroclaw/issues/9202) — `zeroclaw desktop` uses dead download URL, fails to detect installed AppImage (2026-07-20, in-progress).
- [#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) — CLI cron delivery hardcoded to `None` (2026-07-24, in-progress).
- [#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) — WhatsApp allowlist ignored (2026-07-25, in-progress).
- [#9390](https://github.com/zeroclaw-labs/zeroclaw/issues/9390) — Emergency stop state file never read (2026-07-26, in-progress).

PRs flagged `needs-author-action` awaiting follow-up: [#9785](https://github.com/zeroclaw-labs/zeroclaw/pull/9785) (Scoop CI), [#9787](https://github.com/zeroclaw-labs/zeroclaw/pull/9787) (AUR CI), [#9580](https://github.com/zeroclaw-labs/zeroclaw/pull/9580) (net_guard refactor), [#9571](https://github.com/zeroclaw-labs/zeroclaw/pull/9571) (WATI removal), [#9744](https://github.com/zeroclaw-labs/zeroclaw/pull/9744) (webhook ingress auth), [#9410](https://github.com/zeroclaw-labs/zeroclaw/pull/9410) (command audit default-off), [#9828](https://github.com/zeroclaw-labs/zeroclaw/pull/9828) (agent config authoring). Issue [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) has also been sitting in `needs-author-action` since 2026-06-28 despite being one of the most-commented RFCs.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*