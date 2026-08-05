# OpenClaw Ecosystem Digest 2026-08-05

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-05 01:26 UTC

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

# OpenClaw Project Digest — 2026-08-05

## 1. Today's Overview

OpenClaw is in a high-activity stabilization phase: **500 issues and 500 PRs were updated in the last 24 hours**, with **42 issues closed** and **109 PRs merged/closed**. No new release was published, so no version migration or breaking-change notes are available. The most prominent themes are realtime voice/Talk lifecycle correctness, silent subagent completion loss, and P1 migration/startup blockers. Maintainers are actively iterating on a cluster of Talk/GPT-Live PRs, but many older P1/P2 issues remain stuck in `needs-maintainer-review`.

## 2. Releases

**None.** No new OpenClaw releases were published in the observed window, and no changelog, migration, or upgrade notes are available.

## 3. Project Progress

The aggregate data shows **109 PRs moved to merged/closed**, but the individual merged PR list is not enumerated in the snapshot. Among the high-activity PRs updated today, the main forward progress is concentrated in realtime voice and reliability fixes:

- [PR #119321 — feat(macos): add realtime Talk relay](https://github.com/openclaw/openclaw/pull/119321) — macOS Talk can now use the Gateway-owned realtime relay.
- [PR #119212 — fix(talk): preserve agent consults when relay disconnects](https://github.com/openclaw/openclaw/pull/119212)
- [PR #119211 — fix(talk): cancel realtime output without aborting the turn](https://github.com/openclaw/openclaw/pull/119211)
- [PR #119210 — fix(talk): hide private GPT-Live models until configured](https://github.com/openclaw/openclaw/pull/119210)
- [PR #119209 — fix(openai): route GPT-Live through supported auth endpoints](https://github.com/openclaw/openclaw/pull/119209)
- [PR #112820 — feat(plugin-sdk): let plugins open Gateway-managed realtime voice sessions](https://github.com/openclaw/openclaw/pull/112820)
- [PR #118787 — fix(ui): clear split-pane questions after answers and cancellations](https://github.com/openclaw/openclaw/pull/118787)
- [PR #119379 — fix(mcp): guard stdio stdout frame parsing against oversized-buffer crash](https://github.com/openclaw/openclaw/pull/119379)
- [PR #119395 — fix(slack): recover Home and Assistant events after temporary API failures](https://github.com/openclaw/openclaw/pull/119395)
- [PR #118681 — fix(agents): bounded memory flush before recovery compaction](https://github.com/openclaw/openclaw/pull/118681)

No new release was cut from these changes yet, so they are likely targeted for the next 2026.7.x or 2026.8.x build.

## 4. Community Hot Topics

The most-commented issues reveal strong community concern around silent failures, message loss, and realtime voice state:

- [Issue #116277 — DeepSeek v4 Flash silent reply failure — no reply generated, generic fallback](https://github.com/openclaw/openclaw/issues/116277) — **104 comments**, closed. Users were frustrated by the fallback message *"No reply was generated"* and the lack of automatic retry.
- [Issue #116201 — Realtime voice work can retain unbounded provider and consult state](https://github.com/openclaw/openclaw/issues/116201) — **59 comments**, open, `P1`, maintainer-tagged. Voice-session ownership/resource limits are a major concern.
- [Issue #115326 — Crash-loop breaker suppresses Discord/WhatsApp permanently and documented recovery fails](https://github.com/openclaw/openclaw/issues/115326) — **25 comments**, closed. Permanent suppression of channels is one of the most damaging UX failures reported.
- [Issue #44925 — Subagent completion silently lost — no retry, no notification, no auto-restart on timeout](https://github.com/openclaw/openclaw/issues/44925) — **23 comments**, `P1`, still open.
- [Issue #48788 — Centralized filename encoding utility for multi-encoding Content-Disposition handling](https://github.com/openclaw/openclaw/issues/48788) — **20 comments**, open, with cross-channel encoding demand (Feishu, Shift-JIS, EUC-KR, GB18030).

Reactions are also notable on [Issue #42840 — MathJax/LaTeX support in Control UI](https://github.com/openclaw/openclaw/issues/42840) (**10 👍**) and [Issue #91363 — Isolated cron consistently fails with "LLM request failed"](https://github.com/openclaw/openclaw/issues/91363) (**6 👍**). The underlying need is clear: **users want the assistant to retry or surface failures explicitly, not silently drop replies or session state.**

## 5. Bugs & Stability

Ranked by severity and current impact:

### Critical / P1 blockers
- [Issue #119263 — Agent DB v14→v15 migration fails: 'no such column: entry_valid'; gateway refuses to start](https://github.com/openclaw/openclaw/issues/119263) — `P1`, updated 2026-08-05. A linked fix PR is open.
- [Issue #118846 — Gateway main thread saturated from boot by plugin-metadata snapshot + fs statting; local RPC dies](https://github.com/openclaw/openclaw/issues/118846) — `P1`, process-startup CPU starvation.
- [Issue #115908 — Session transcript projection reconcile can livelock under sustained writes](https://github.com/openclaw/openclaw/issues/115908) — `P1`, main-thread stall affecting all transports.
- [Issue #111498 — Main agent blocked by persistent workspace-state migration after Anthropic auth recovery](https://github.com/openclaw/openclaw/issues/111498) — `P1`, migration/state corruption.

### Message loss / delivery failures
- [Issue #44925 — Subagent completion silently lost](https://github.com/openclaw/openclaw/issues/44925), [Issue #67777 — Subagent completion delivery can be lost on direct-announce timeout/drain/orphan prune](https://github.com/openclaw/openclaw/issues/67777), [Issue #92433 — Subagent completion silently dropped when announce steers into a requester run that ends early](https://github.com/openclaw/openclaw/issues/92433) — all `P1`, all still open with no new fix PR.
- [Issue #115700 — chat.send rejected with "thread switched branches" after model completes](https://github.com/openclaw/openclaw/issues/115700) — `P1`, linked fix PR open.
- [Issue #77136 — WebChat fails to render some assistant messages while TUI works fine](https://github.com/openclaw/openclaw/issues/77136) — UI-only message loss.

### Realtime / session state
- [Issue #116201 — Realtime voice retains unbounded provider/consult state](https://github.com/openclaw/openclaw/issues/116201) — `P1`, maintainer-flagged.
- [Issue #107873 — Embedded prompt-lock session takeover aborts visible WebChat turns](https://github.com/openclaw/openclaw/issues/107873) — `P1`.
- [Issue #116010 — All persistent sessions capped at 128k context regardless of model](https://github.com/openclaw/openclaw/issues/116010) — `P2` but linked fix PR is open.

### Auth/provider
- [Issue #115642 — Billing cooldown outlives the outage on subscription auth](https://github.com/openclaw/openclaw/issues/115642) — `P1`.
- [Issue #89278 — Codex OAuth refresh succeeds but cron/heartbeat fail with 10s auth refresh timeout](https://github.com/openclaw/openclaw/issues/89278) — `P1`.
- [Issue #44134 — Google Antigravity ban caused by frequent tool schema reloading](https://github.com/openclaw/openclaw/issues/44134) — `P1`.

### Resource leaks / security
- [Issue #97616 — OpenClaw leaks unreaped hook/tool child processes, causing zombie accumulation](https://github.com/openclaw/openclaw/issues/97616) — `P1`.
- [Issue #75380 — provider-payload.jsonl and cache-trace.jsonl grow unbounded](https://github.com/openclaw/openclaw/issues/75380) — `P1`, security/disk risk.

## 6. Feature Requests & Roadmap Signals

The most likely near-term roadmap items are already visible in the open PR cluster around realtime voice and GPT-Live:

- Realtime voice plugin SDK: [PR #112820](https://github.com/openclaw/openclaw/pull/112820) would let plugins open Gateway-managed realtime voice sessions — a major SDK expansion.
- macOS Talk relay: [PR #119321](https://github.com/openclaw/openclaw/pull/119321) suggests native voice on macOS is an active target.

Community-requested features that may land next:

- [Issue #45758 — Support YAML as config file format](https://github.com/openclaw/openclaw/issues/45758)
- [Issue #45508 — Self-hosted STT/TTS provider support in webchat](https://github.com/openclaw/openclaw/issues/45508)
- [Issue #42840 — MathJax/LaTeX support in Control UI](https://github.com/openclaw/openclaw/issues/42840)
- [Issue #9016 — Expose OpenRouter usage cost to agent runtime](https://github.com/openclaw/openclaw/issues/9016)
- [Issue #16555 — Add TTL/expiry for delivery queue messages](https://github.com/openclaw/openclaw/issues/16555)
- [Issue #44395 — Heading-aware chunking + entity extraction for memory search](https://github.com/openclaw/openclaw/issues/44395)
- [Issue #79168 — Content-based prompt injection scanning on tool output](https://github.com/openclaw/openclaw/issues/79168)
- [Issue #45501 — `session.resetPrompt`: configurable session startup message](https://github.com/openclaw/openclaw/issues/45501)
- [Issue #71736 — Control UI plugin contribution slots](https://github.com/openclaw/openclaw/issues/71736)
- [Issue #44431 — Browser tool: 7 improvements from real-world automation field test](https://github.com/openclaw/openclaw/issues/44431)

The YAML config, OpenRouter cost, and browser tooling requests have broad user support and are relatively self-contained; they are plausible candidates for a near-term minor release.

## 7. User Feedback Summary

The strongest user pain points are **reliability and trust**:

- Repeated reports of **silent subagent completion loss** with no retry, notification, or restart ([#44925](https://github.com/openclaw/openclaw/issues/44925), [#67777](https://github.com/openclaw/openclaw/issues/67777), [#92433](https://github.com/openclaw/openclaw/issues/92433)).
- **"No reply was generated" fallback** from DeepSeek v4 Flash caused significant dissatisfaction ([#116277](https://github.com/openclaw/openclaw/issues/116277)).
- **Crash-loop breaker permanently suppressing Discord/WhatsApp** was a severe real-world outage for affected users ([#115326](https://github.com/openclaw/openclaw/issues/115326)).
- Memory management behavior is confusing and inconsistent across installations ("Memory management is in chaos", [#43747](https://github.com/openclaw/openclaw/issues/43747)).
- Users want **cron isolated sessions to support subagent orchestration** ([#92369](https://github.com/openclaw/openclaw/issues/92369)) and are hitting **auth-provider cooldown/refresh issues** in production ([#115642](https://github.com/openclaw/openclaw/issues/115642), [#89278](https://github.com/openclaw/openclaw/issues/89278)).

On the positive side, some high-profile issues were closed in this window ([#116277](https://github.com/openclaw/openclaw/issues/116277), [#115326](https://github.com/openclaw/openclaw/issues/115326), [#52249](https://github.com/openclaw/openclaw/issues/52249)), and maintainers are actively producing fix PRs for the Talk/realtime cluster. Still, the overall sentiment is cautious: users are happy with the feature surface but frustrated by silent failure modes and long-maintainer-review times.

## 8. Backlog Watch

Several important issues have been open for weeks/months and still carry `needs-maintainer-review` or `no-new-fix-pr`:

- [Issue #9016 — Expose OpenRouter usage cost to agent runtime](https://github.com/openclaw/openclaw/issues/9016) — open since **2026-02-04**, `P2`.
- [Issue #16555 — Add TTL/expiry for delivery queue messages](https://github.com/openclaw/openclaw/issues/16555) — open since **2026-02-14**, `P2`, still no fix.
- [Issue #44134 — Google Antigravity ban from frequent tool schema reloading](https://github.com/openclaw/openclaw/issues/44134) — open since **2026-03-12**, `P1`.
- [Issue #43747 — Memory management is in chaos](https://github.com/openclaw/openclaw/issues/43747) — open since **2026-03-12**, `P2` regression.
- [Issue #44925 — Subagent completion silently lost](https://github.com/openclaw/openclaw/issues/44925) — open since **2026-03-13**, `P1`, no fix PR.
- [Issue #45508 — Self-hosted STT/TTS provider support in webchat](https://github.com/openclaw/openclaw/issues/45508) — open since **2026-03-13**, `P2`.
- [Issue #44431 — Browser tool: 7 improvements from real-world automation field test](https://github.com/openclaw/openclaw/issues/44431) — open since **2026-03-12**, `P2`.
- [Issue #67777 — Subagent completion delivery can be lost on timeout/drain/orphan prune](https://github.com/openclaw/openclaw/issues/67777) — open since **2026-04-16**, `P1`.
- [Issue #75380 — provider-payload.jsonl and cache-trace.jsonl grow unbounded](https://github.com/openclaw/openclaw/issues/75380) — open since **2026-05-01**, `P1`, security impact.
- [Issue #97616 — Leaked unreaped hook/tool child processes](https://github.com/openclaw/openclaw/issues/97616) — open since **2026-06-29**, `P1`.

Long-open PRs also need attention:

- [PR #68986 — Normalize visible assistant output before delivery](https://github.com/openclaw/openclaw/pull/68986) — open since **2026-04-19**, `P2`, needs proof, triage context requested.
- [PR #93952 — Hard-deadline runtime auth refresh to prevent gateway deadlock](https://github.com/openclaw/openclaw/pull/93952) — open since **2026-06-17**, `P1`, waiting on author.
- [PR #112820 — Plugin SDK realtime voice sessions](https://github.com/openclaw/openclaw/pull/112820) — open since **2026-07-23**, large SDK surface change, still `needs proof`.

The concentration of old P1 issues around **subagent delivery**, **auth warmth/cooldown**, and **resource leaks** is the clearest signal for where maintainer attention is most needed next.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — AI Agent Open-Source Ecosystem
**2026-08-05 Digest Analysis**

---

## 1. Ecosystem Overview

The personal AI assistant open-source landscape is in a **high-velocity stabilization phase**, with the largest projects processing 50–500 issues/PRs per day while shipping no new releases. Across all projects, the dominant engineering focus has shifted from feature breadth to **reliability fundamentals**: silent subagent failure, message/approval loss, credential isolation, and token-cost observability. Realtime voice is emerging as the next competitive frontier (OpenClaw's Talk/GPT-Live cluster, NanoClaw's Dial telephony adapter), while security hardening — webhook authentication, per-agent data isolation, API-key containment — has risen to S0/P0 severity in multiple codebases. The ecosystem is also converging on interoperability standards (MCP, OpenAI-compatible APIs, A2A) and unified permission models for autonomous tool use, suggesting a maturing market where trust, cost transparency, and ecosystem connectivity matter more than raw feature count.

## 2. Activity Comparison

| Project | Issues Updated (Closed) | PRs Updated (Merged/Closed) | Release Status | Health Score¹ | Primary Phase |
|---|---|---|---|---|---|
| **OpenClaw** | 500 (42) | 500 (109) | None | 3/5 | High-velocity stabilization; P1 backlog & review bottleneck |
| **IronClaw** | 50 (12) | 50 (18) | None (rc-prep) | 4/5 | Pre-release hardening + architecture refactor |
| **CoPaw** | 28 (11) | 50 (22) | None (v2.1.0b1 tested) | 4/5 | Beta stabilization; responsive maintainers |
| **ZeroClaw** | 50 (2) | 50 (2) | None | 3/5 | RFC-driven design + S0 security fixes |
| **Hermes Agent** | 50 (0) | 50 (5) | None | 3/5 | Maintenance/triage; P0 cache bug; many duplicates |
| **NanoBot** | 5 (1) | 28 (19) | None | 4/5 | Healthy; fast WebUI/provider fixes |
| **LobsterAI** | 1 (0) | 13 (10) | None (release merged) | 3.5/5 | Release prep; stale security bug |
| **NanoClaw** | 0 (0) | 5 (1) | None | 3.5/5 | Consolidation; high-sev Discord fix pending |
| **PicoClaw** | 3 (0) | 4 (0) | None | 3/5 | Stable but critical fixes stalled |
| **NullClaw** | 0 (0) | 1 (0) | None | 3/5 | Quiet; one PR awaiting review |
| **Moltis** | 0 (0) | 1 (0) | None | 2/5 | Dormant (Dependabot only) |
| **ZeptoClaw** | 0 (0) | 0 (0) | None | N/A | No activity |

¹ *Qualitative: velocity + responsiveness + unresolved-severity balance. Not a formal metric.*

**Notable observations:**
- **OpenClaw's scale is an outlier** — 500/500 daily updates is ~10x the next tier, but its closure ratios (8.4% issues, 21.8% PRs) lag CoPaw (39%/44%) and NanoBot (20%/68%).
- **No project shipped a release** in the window; IronClaw and LobsterAI are closest, with release-PR and release-branch integration activity respectively.
- **Security issues cluster in mid-size projects**: NanoBot (#4784 key leakage), LobsterAI (#1202 key leakage), ZeroClaw (three S0 bugs), Hermes (#47583 credential-file reads).

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Community scale**: 500-issue/PR-per-day traffic is 10x Hermes/IronClaw/ZeroClaw and ~100x NanoBot — an order-of-magnitude larger contributor and user base.
- **Realtime voice leadership**: The Talk/GPT-Live PR cluster (relay, auth routing, private-model hiding, plugin SDK sessions) has no equivalent in any other project; this is the clearest technical moat.
- **Channel breadth**: Gateway-owned realtime relay plus Slack/Feishu/Discord/WeCom fixes indicate the broadest transport surface.
- **Plugin SDK expansion**: PR #112820 (Gateway-managed realtime voice for plugins) would create a differentiated extensibility point.

**Technical approach differences:** OpenClaw is a **gateway-centric monorepo** with a heavy reliance on maintainer-driven stabilization; IronClaw (Rust/WASM, architecture-enforcement waves) and ZeroClaw (RFC-first, security-pipeline design) are more formally structured. OpenClaw's approach prioritizes breadth and realtime features over architectural enforcement — which correlates with its larger but slower-moving P1 backlog.

**Weaknesses:** The `needs-maintainer-review` bottleneck is the most acute in the ecosystem: subagent-delivery P1s (#44925, #67777, #92433) have been open 2–4 months with no fix PR, and 42-of-500 issue closures (8.4%) trails the 20–40% range of healthier peers.

## 4. Shared Technical Focus Areas

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **Subagent/async completion reliability** | OpenClaw (#44925, #67777, #92433), Hermes (lifecycle-guard crashes), CoPaw (approval timeouts), NanoClaw (scheduled-task run time) | Retry/notification on lost completions; no silent drops; accurate timestamps |
| **MCP error semantics** | OpenClaw (#119379 stdio guard), NanoBot (#5237 `isError=false` misfire), PicoClaw (#3269 agent-loop hang) | Correct envelope handling; timeouts; crash prevention |
| **Token/cost observability & caching** | OpenClaw (#9016 OpenRouter cost), PicoClaw (#3317, #3251 cache tokens), CoPaw (#6649 GPT-5.6 caching, #6699 skill token bloat), ZeroClaw (#9713), IronClaw (#7001 byte-stable prefix) | Prompt-cache support, usage visibility, on-demand skill loading |
| **Security & credential isolation** | NanoBot (#4784 `os.environ` leak), LobsterAI (#1202 key leak), ZeroClaw (#9565 webhook auth, #9646/#9647 per-agent scoping), Hermes (#47583 file-read guard) | Key containment, per-agent ownership, fail-closed webhooks |
| **Channel parity & encoding** | OpenClaw (#48788 filename encoding), Hermes (#78889 Feishu, #78791 Telegram), NanoBot (Telegram/WeCom fixes), CoPaw (WeChat approval), ZeroClaw (#9313 WeChat cursor) | Cross-channel consistency in attachments, approvals, dedup |
| **Realtime voice/telephony** | OpenClaw (Talk/GPT-Live), NanoClaw (Dial SMS+voice PRs) | Voice sessions, relay ownership, channel expansion |
| **Windows/desktop reliability** | IronClaw (4 Windows release blockers), Hermes (#75791, #46199), LobsterAI (installer), CoPaw (#6697 PYTHONHOME) | Installer, env isolation, status accuracy |
| **Approval/permission UX** | ZeroClaw (#7155 allow/ask/deny), CoPaw (#6655, #6695 silent approvals), NanoClaw (#3185 Discord approvals always reject) | Visible, deterministic approval flows for autonomous agents |
| **Model-specific compatibility** | OpenClaw (DeepSeek fallback), NanoBot (Opus 5), ZeroClaw (Qwen `<tools>`, DSML), CoPaw (DeepSeek thinking mode) | Format quirks, reasoning blocks, cache parameters |

## 5. Differentiation Analysis

| Project | Feature Focus | Target User | Architecture |
|---|---|---|---|
| **OpenClaw** | Realtime voice, broad channel gateway, plugin SDK | General self-hosters, power users | Gateway monorepo; plugin SDK; GPT-Live integration |
| **IronClaw** | Enterprise-grade reliability, WASM tools, skill marketplace (IronHub) | Production/autonomous workloads | Rust; WASM sandbox; Target Crate Architecture waves |
| **ZeroClaw** | Security architecture, OpenAI-compatible interop, A2A | Multi-tenant/security-conscious operators | RFC-driven; Rust; runtime-owned sessions; allow/ask/deny layer |
| **Hermes Agent** | Plugin/hook lifecycle, desktop app, multi-tenant memory | Plugin developers, desktop users | Hook taxonomy + lifecycle catalog; desktop discovery scanner |
| **CoPaw** | Consumer beta polish, channel parity, token efficiency | Daily consumer users (incl. WeChat/China ecosystem) | AgentScope lineage; Scroll compression; console + desktop |
| **NanoBot** | WebUI developer experience, provider compatibility | Lightweight Python deployers | Python; Vite dev mode; trusted-proxy bootstrap |
| **LobsterAI** | Desktop app with credit campaigns, login UX | Consumer desktop (Electron) | Electron; cowork mode; ad-supported free tier |
| **PicoClaw** | Embedded/mobile, provider extensibility | Mobile/remote users | Lightweight; Android target; Exa provider |
| **NanoClaw** | Channel adapters (Dial voice/SMS), scheduled tasks | Channel-breadth adopters | Channel-first; skill-owned capabilities seams |
| **NullClaw** | CLI-backed provider aggregation (codex, gemini, grok) | CLI-tool users | Spawn-per-request provider pattern |
| **Moltis / ZeptoClaw** | — / RFC-heavy security design | — / Interop-first | Inactive / Dormant |

**Key fault lines:** Rust+architecture-enforcement (IronClaw, ZeroClaw) vs. Python/JS velocity (NanoBot, CoPaw, Hermes); consumer desktop economics (LobsterAI's ads/credits, CoPaw's beta) vs. infrastructure-grade reliability (OpenClaw, IronClaw); chat-first vs. voice/telephony expansion.

## 6. Community Momentum & Maturity

- **Tier 1 — Rapidly iterating (release-bound):** **IronClaw** (18 PRs merged, 3 epics closed, migration/Windows blockers being cleared) and **CoPaw** (22 PRs merged, critical beta regressions filed and immediately patched) show the healthiest velocity-to-review ratios. **ZeroClaw** matches raw volume but closes almost nothing — 48/50 items still open, signalling a review-constrained RFC queue rather than execution.
- **Tier 2 — Steady, healthy:** **NanoBot** (68% PR closure rate, fast WebUI/provider fixes) and **LobsterAI** (10/13 PRs merged, release branch integrated) are executing cleanly but lack OpenClaw/IronClaw-scale surface area. **Hermes** has high activity but 0 issue closures and a P0 prompt-cache bug — triage-heavy.
- **Tier 3 — Stabilizing/quiet:** **OpenClaw** is high-volume but increasingly bottlenecked on maintainer review; **NanoClaw**, **PicoClaw**, and **NullClaw** are low-activity with single high-value items waiting on review. **Moltis** and **ZeptoClaw** are effectively dormant.

**Healthiest signals:** IronClaw closing its error-recoverability and hermetic-testing epics; CoPaw's maintainers producing fix PRs same-week for beta regressions; NanoBot's clean fast-fix cadence.
**Weakest signals:** OpenClaw's 2–4-month-old P1 subagent-delivery issues; ZeroClaw's S0 webhook-auth bug with no visible fix PR; LobsterAI's stale critical key-leak issue.

## 7. Trend Signals

1. **Silent failure is now unacceptable.** Across OpenClaw (subagent loss, "No reply was generated"), CoPaw (invisible approval prompts), and ZeroClaw (idle turns on context exhaustion), users consistently demand **explicit retry, notification, or terminal visibility**. *Implication: build retry/idempotency at the transport layer, not just the model layer.*

2. **Credential isolation and per-agent ownership are the new security baseline.** Three independent projects (NanoBot, LobsterAI, ZeroClaw) surfaced key-leakage or missing-ownership bugs in one 24-hour window. Multi-agent deployments are real, and shared global state (env vars, knowledge graphs, session stores) is the attack surface. *Implication: treat every agent boundary as a trust boundary.*

3. **Token/cost transparency is a purchasing decision.** Prompt-cache parameter support (CoPaw #6649), cache-token logging (PicoClaw #3317), byte-stable system prefixes (IronClaw #7001), and usage visibility (OpenClaw #9016, Hermes #78997) show cost-awareness moving from nice-to-have to core. *Implication: instrument cache hits, trims, and provider costs by default.*

4. **Interoperability beats reintegration.** ZeroClaw's Chat Completions RFC names six external client ecosystems; A2A outbound clients and MCP semantics fixes appear in four projects. Users want their agent to plug into existing AI toolchains, not replace them. *Implication: OpenAI-compatible and MCP surfaces are table stakes.*

5. **Approval/permission UX determines trust in autonomous agents.** ZeroClaw's all-tool allow/ask/deny RFC (modeled on Claude Code), CoPaw's silent-approval failures, and NanoClaw's Discord always-reject bug converge on one insight: **the approval path is the agent's trust contract**. It must be visible, deterministic, and channel-portable. *Implication: design permission flows as first-class transport features.*

6. **Voice/telephony is the next channel battleground.** OpenClaw's realtime relay SDK and NanoClaw's Dial SMS+voice PRs (both feature-skills with setup-wizard support) suggest the post-chat assistant will be reachable by voice/phone, not just messaging apps. *Implication: gateway-owned realtime session management will differentiate the next generation.*

7. **Model-specific format quirks are a recurring tax.** DeepSeek, Qwen, Claude Opus 5, and GPT-Live all required project-specific patches in the same window. Agent frameworks must treat model-compatibility layers as first-class maintenance surfaces. *Implication: abstract provider adapters and version them independently of core logic.*

---

**Bottom line for decision-makers:** The ecosystem is converging on reliability, security isolation, and cost transparency as the competitive battleground. OpenClaw leads in community and realtime-voice vision but is constrained by review throughput; IronClaw and CoPaw show the healthiest execute-and-ship discipline; ZeroClaw's RFC pipeline is the one to watch for security/interop architecture. Developers entering the space should prioritize projects with fast closure ratios (CoPaw, NanoBot, IronClaw) and contribute to the shared problem areas — subagent delivery guarantees, credential isolation, and prompt-cache economics — where demand is proven across at least three independent codebases.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

## 1. Today's Overview

NanoBot saw **high PR activity in the last 24 hours**: 28 PRs were updated, with **19 merged/closed** and **9 still open**, while 5 issues were updated (**4 open/active, 1 closed**). No new releases were published. The busiest areas were WebUI polish/refactoring, Anthropic provider compatibility, and channel-specific bug fixes (Telegram, WeCom, Matrix). The project is generally healthy, but the open issue list includes a **provider API-key security concern** and an **MCP error-handling bug** that both need maintainer attention.

## 2. Releases

**None.** No new releases or version tags were reported for this digest period.

## 3. Project Progress

Major merged/closed PRs in the last 24 hours:

- **[PR #5236](https://github.com/HKUDS/nanobot/pull/5236) — fix(anthropic): support Opus 5 effort controls**  
  Replaces hard-coded sampling exclusions with model-family version thresholds for Claude Opus 5 and adaptive thinking.

- **[PR #5239](https://github.com/HKUDS/nanobot/pull/5239) — feat(webui): add integrated Vite dev mode**  
  `nanobot webui --dev` now runs gateway + Vite dev server together with HMR, improving the contributor workflow.

- **[PR #5210](https://github.com/HKUDS/nanobot/pull/5210) — feat(webui): support trusted proxy bootstrap auth**  
  Adds an opt-in tokenless trusted-proxy path for `/webui/bootstrap`, useful behind Cloudflare Tunnel/Access.

- **[PR #5242](https://github.com/HKUDS/nanobot/pull/5242) — fix(commands): reject malformed slash commands**  
  Malformed slash input is no longer forwarded to the LLM; suggestions are offered for typos.

- **[PR #5244](https://github.com/HKUDS/nanobot/pull/5244) — fix(webui): render markdown in prompt rail previews**  
  Assistant snippets now use the existing Markdown renderer while user snippets stay plain text.

- **[PR #5245](https://github.com/HKUDS/nanobot/pull/5245) — fix(webui): align timestamp tooltip styles**  
  Replaces native browser titles with shared tooltip styling and improves keyboard accessibility.

- **[PR #5243](https://github.com/HKUDS/nanobot/pull/5243) — fix(webui): align automation metadata with timestamps**  
  Automation markers moved to the footer beside timestamps with cleaner typography.

- **[PR #5241](https://github.com/HKUDS/nanobot/pull/5241) — fix(webui): refine inline token highlights**  
  More consistent accent color for commands, mentions, and skill highlights.

- **[PR #5240](https://github.com/HKUDS/nanobot/pull/5240) — refactor(webui): unify floating controls**  
  Centralizes floating-surface/item styling while preserving correct Menu/Popover/Combobox semantics.

- **[PR #5222](https://github.com/HKUDS/nanobot/pull/5222) — fix(telegram): keep fenced code intact when language has special chars**  
  Handles languages like `c++`, `objective-c`, and `html+django` correctly in Telegram HTML conversion.

- **[PR #5223](https://github.com/HKUDS/nanobot/pull/5223) — fix(wecom): fall back when filename sanitization strips everything**  
  Prevents WeCom media downloads from targeting a directory path when sanitized filenames become empty.

- **[PR #1776](https://github.com/HKUDS/nanobot/pull/1776) — fix(telegram): add `group_mode` config field**  
  Long-running PR finally closed; the missing Pydantic field is now added, so `group_mode` config is no longer silently ignored.

## 4. Community Hot Topics

The most-commented issues in the last 24h were:

- **[Issue #4784](https://github.com/HKUDS/nanobot/issues/4784) — Security: Provider API keys leaked between providers via global `os.environ` mutation**  
  2 comments. Open since July 6. This is the highest-attention issue because it is a **cross-provider credential isolation risk**. Gateway providers overwrite `os.environ[spec.env_key]`, while non-gateway providers use `setdefault`, causing keys to leak between providers.

- **[Issue #5235](https://github.com/HKUDS/nanobot/issues/5235) — [bug] Anthropic: Opus 5 configuration always rejected**  
  1 comment. Now closed. User reported that `claude-opus-5` was rejected because Nanobot still sends temperature parameters. This was addressed by **[PR #5236](https://github.com/HKUDS/nanobot/pull/5236)**.

- **[Issue #5237](https://github.com/HKUDS/nanobot/issues/5237) — [bug] MCP tool returns "data not found" envelope → agent ignores it**  
  1 comment. Open. MCP servers returning a business error envelope with `isError = False` are treated as successful calls, so the LLM never retries.

Underlying need: users care about **secure provider isolation**, **correct error semantics from MCP tools**, and **smooth support for newest model releases**.

## 5. Bugs & Stability

Open and recently fixed bugs, ranked by severity:

- **High / Security — [Issue #4784](https://github.com/HKUDS/nanobot/issues/4784)**  
  Provider API keys can leak between providers via global `os.environ` mutation. Open, no fix PR yet.

- **High — [Issue #5237](https://github.com/HKUDS/nanobot/issues/5237)**  
  MCP tool business errors with `isError = False` are ignored; agent waits until `tool_timeout` fires. No fix PR currently attached.

- **Medium — [Issue #5247](https://github.com/HKUDS/nanobot/issues/5247)**  
  Matrix bot does not auto-join when invited on Continuwuity, because nio sends an empty POST body on `Api.join()`. Fix PR exists: **[PR #5248](https://github.com/HKUDS/nanobot/pull/5248)**.

- **Medium — [PR #5156](https://github.com/HKUDS/nanobot/pull/5156)**  
  Fix for silently stalled Telegram polling after transient network blips. PR is open, addressing reported issue #5171.

- **Fixed — [Issue #5235](https://github.com/HKUDS/nanobot/issues/5235)**  
  Anthropic Opus 5 temperature rejection was fixed by **[PR #5236](https://github.com/HKUDS/nanobot/pull/5236)**.

- **Fixed — [PR #5222](https://github.com/HKUDS/nanobot/pull/5222)**  
  Telegram code blocks with special-character language tags were corrupted; now resolved.

- **Fixed — [PR #5223](https://github.com/HKUDS/nanobot/pull/5223)**  
  WeCom filename sanitization could make downloads target the directory itself; now has a fallback.

- **Low / Enhancement — [Issue #5246](https://github.com/HKUDS/nanobot/issues/5246)**  
  `.gitignore` rules leave `memory/.cursor` and `memory/history.jsonl` untracked. Not a crash bug, but a workspace hygiene issue.

## 6. Feature Requests & Roadmap Signals

Open feature/architecture PRs likely to influence upcoming releases:

- **[PR #4919](https://github.com/HKUDS/nanobot/pull/4919)** — Telegram custom Bot API base URL and extra headers. Enables self-hosted Bot API servers / enterprise gateways.

- **[PR #5234](https://github.com/HKUDS/nanobot/pull/5234)** — Integrate `mst-python` as a metasearch provider, aggregating multiple search engines via Reciprocal Rank Fusion.

- **[PR #5233](https://github.com/HKUDS/nanobot/pull/5233)** — Separate Mattermost group policy for threads, exposed in WebUI.

- **[PR #5184](https://github.com/HKUDS/nanobot/pull/5184)** — Add Quick Chat and opt-in Temporary Chat as first-class WebUI destinations.

- **[PR #5249](https://github.com/HKUDS/nanobot/pull/5249)** — WebUI visual consistency refactor: unified surfaces, segmented controls, auto-save system theme.

- **[PR #5238](https://github.com/HKUDS/nanobot/pull/5238)** — Refactor session tools to remove request-scoped access grants; simplifies the session authorization model.

Features that recently landed — trusted proxy bootstrap auth ([PR #5210](https://github.com/HKUDS/nanobot/pull/5210)) and integrated Vite dev mode ([PR #5239](https://github.com/HKUDS/nanobot/pull/5239)) — suggest the roadmap is prioritizing **WebUI developer experience** and **secure deployment behind proxies**.

## 7. User Feedback Summary

Real pain points expressed in the last 24h:

- **Credential safety**: Users are worried about API keys leaking between providers due to global environment mutation ([#4784](https://github.com/HKUDS/nanobot/issues/4784)).
- **Model compatibility**: Newest Claude models can be blocked by outdated parameter handling, causing frustration for early adopters ([#5235](https://github.com/HKUDS/nanobot/issues/5235)).
- **MCP reliability**: Business-error envelopes from MCP tools are misinterpreted as success, breaking agent workflows ([#5237](https://github.com/HKUDS/nanobot/issues/5237)).
- **Matrix interoperability**: The bot fails to join rooms on Continuwuity due to empty-POST-body handling ([#5247](https://github.com/HKUDS/nanobot/issues/5247)).

Overall sentiment is mixed but active: bugs are being fixed quickly in the WebUI and provider areas, but the unresolved security issue and MCP semantics problem are likely to be the next pain points users watch.

## 8. Backlog Watch

Issues/PRs that need maintainer attention:

- **[Issue #4784](https://github.com/HKUDS/nanobot/issues/4784)** — Security: provider API key leakage via `os.environ`. Open since **July 6**, 2 comments, no fix PR yet. This is the most important backlog item.

- **[PR #5156](https://github.com/HKUDS/nanobot/pull/5156)** — Fix for Telegram polling stalls. Open since **July 29**, addressing a silently-stuck bot in production with no visible activity on the thread.

- **[PR #4919](https://github.com/HKUDS/nanobot/pull/4919)** — Telegram custom Bot API base URL feature. Open since **July 14**, no visible reviewer discussion yet.

- **[PR #5184](https://github.com/HKUDS/nanobot/pull/5184)** — Quick Chat and Temporary Chat feature. Open since **July 30**, no recent comments.

- **[Issue #5237](https://github.com/HKUDS/nanobot/issues/5237)** — MCP business-error misfire. Opened **August 4**, currently without a linked fix PR.

- **[PR #1776](https://github.com/HKUDS/nanobot/pull/1776)** — Telegram `group_mode` config field. Opened in **March**, finally closed; a good example of a long-lived PR that ended up resolving a real configuration gap.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-05

## 1. Today's Overview

In the 24 hours ending 2026-08-05, Hermes Agent saw 50 issues updated (all open/active, none closed) and 50 PRs updated (45 open, 5 closed/merged). No releases were published. The activity level is high and roughly split between bug reporting, long-running feature discussions, and a cluster of terminal/cron safety fixes. The project appears to be in a maintenance-and-triage phase: several PRs were closed as duplicates, and the highest-priority open work targets a P0 prompt-cache isolation bug plus several lifecycle-guard crashes that can take down the terminal tool. Community engagement is strong, especially around plugin interface expansion, multi-tenant memory isolation, Windows desktop behavior, and Feishu/Telegram gateway parity.

## 2. Releases

No new Hermes Agent releases were published in this window. There are no release notes, breaking changes, or migration guides to report.

## 3. Project Progress

A total of 5 PRs were closed/merged in the last 24 hours. Among the top-comment PRs visible, the following closed items were recorded:

- [PR #78971 — fix(terminal): guard NUL bytes in remote script read fallback (#76762 follow-up)](https://github.com/NousResearch/hermes-agent/pull/78971) — **closed as duplicate**; related to the lifecycle-guard NUL-byte crash family.
- [PR #78992 — fix(deps): update brace-expansion and undici to patched versions](https://github.com/NousResearch/hermes-agent/pull/78992) — **closed as duplicate**; security dependency bumps already covered elsewhere.
- [PR #78988 — fix(aux): don't use primary model for explicit custom fallback endpoint](https://github.com/NousResearch/hermes-agent/pull/78988) — **closed as duplicate**; fixes #78948 but remains superseded/needs another path.

Notable open PRs actively advancing fixes and features:

- [PR #78959 — fix(cache): scope prompt_cache_key by session to stop cross-session bucket sharing](https://github.com/NousResearch/hermes-agent/pull/78959) — **P0 fix** for #78941; session/tenant cache isolation.
- [PR #78994 — fix(guard): never crash on NUL bytes in referenced-script paths](https://github.com/NousResearch/hermes-agent/pull/78994) — lifecycle-guard robustness for terminal tool.
- [PR #78982 — fix(cron): degrade lifecycle_guard when HOME is unresolvable](https://github.com/NousResearch/hermes-agent/pull/78982) — fixes #78974.
- [PR #78995 — fix(kanban): enforce max_in_progress across all gateway boards](https://github.com/NousResearch/hermes-agent/pull/78995) — fixes #78122.
- [PR #78889 — fix(feishu): dedup inbound messages across multiplexed profiles](https://github.com/NousResearch/hermes-agent/pull/78889) — fixes #78514.
- [PR #79007 — fix(agent): guide OAuth users to re-authenticate](https://github.com/NousResearch/hermes-agent/pull/79007) — better OAuth credential failure UX.
- [PR #79000 — feat(skills): add surgical-orchestration skill with second-pass fixes](https://github.com/NousResearch/hermes-agent/pull/79000) — new bundled skill for multi-folder subagent builds.

## 4. Community Hot Topics

The most active discussions reveal a community focused on plugin extensibility, multi-tenancy, and Windows/desktop reliability.

- [Issue #64182 — Plugin Interface Expansion — Tracking Issue (21 comments)](https://github.com/NousResearch/hermes-agent/issues/64182)  
  Community plugin roadmap for stable, shippable plugin interfaces. Underlying need: long-queued plugin PRs are blocked by unclear extension points.

- [Issue #64231 — lifecycle-event catalog, hook taxonomy, batch disposition of pending hook PRs (17 comments)](https://github.com/NousResearch/hermes-agent/issues/64231)  
  Maintainers/contributors are trying to standardize hooks instead of merging one-off `VALID_HOOKS` additions. Underlying need: predictable plugin lifecycle semantics.

- [Issue #34352 — Solving the Multi-Tenant Hermes Problem (14 comments, 2 👍)](https://github.com/NousResearch/hermes-agent/issues/34352)  
  Memory operations bypass the hook system, making tenant isolation impossible without forking core. A production-grade fix allegedly exists. Underlying need: true multi-tenant/multi-agent isolation.

- [Issue #16004 — Configurable bounded auto-continue when max tool-call iterations are reached (9 comments, 1 👍)](https://github.com/NousResearch/hermes-agent/issues/16004)  
  Long-running gateway/desktop sessions can be blocked when tool-call budgets are exhausted. Underlying need: autonomous work should continue safely without human intervention.

- [Issue #54204 — Allow moving/rescoping existing sessions into a different project (8 comments, 3 👍)](https://github.com/NousResearch/hermes-agent/issues/54204)  
  Desktop session/project management remains a notable UX gap.

- [Issue #46199 — Windows portable/isolated deployment guidance (7 comments, 2 👍)](https://github.com/NousResearch/hermes-agent/issues/46199)  
  Security-conscious Windows users want minimal host-system changes and clear official deployment guidance.

- [Issue #78791 — Telegram Feature Parity & Alignment Campaign, Bot API 10.2 (4 comments)](https://github.com/NousResearch/hermes-agent/issues/78791)  
  Meta-issue tracking Telegram surface parity. Underlying need: platform-specific feature completeness.

- [Issue #66668 — Proposal: encoding-safety lint (4 comments)](https://github.com/NousResearch/hermes-agent/issues/66668)  
  Windows/encoding foot-gun prevention as a linting companion to existing checks.

## 5. Bugs & Stability

Active bug reports are ranked below by severity, with fix PRs noted where visible.

| Priority | Issue | Bug Summary | Fix PR |
|---|---|---|---|
| P0 | [#78941 via PR #78959](https://github.com/NousResearch/hermes-agent/pull/78959) | `prompt_cache_key` is not scoped by session/tenant, causing cross-session cache bucket sharing. | [PR #78959](https://github.com/NousResearch/hermes-agent/pull/78959) open |
| P1 | [#76435 — Gateway reconnect loop plus unusable desktop updater](https://github.com/NousResearch/hermes-agent/issues/76435) | Discord gateway reconnect loop, token reset, desktop updater says "managed outside". | No visible fix PR |
| P2 | [#78974 — lifecycle_guard crashes when HOME is unresolvable](https://github.com/NousResearch/hermes-agent/issues/78974) | Breaks **every** terminal command pre-execution. | [PR #78982](https://github.com/NousResearch/hermes-agent/pull/78982) |
| P2 | [#78942 — lifecycle_guard NUL-bearing candidate path still crashes](https://github.com/NousResearch/hermes-agent/issues/78942) | Incomplete fix from #76762; NUL path crashes the guard. | [PR #78994](https://github.com/NousResearch/hermes-agent/pull/78994); [#78971](https://github.com/NousResearch/hermes-agent/pull/78971) closed as duplicate |
| P2 | [#78975 — Feishu cron delivery fails with invalid `receive_id_type="thread_id"`](https://github.com/NousResearch/hermes-agent/issues/78975) | Feishu cron jobs fail 100% with validation error. | No visible fix PR |
| P2 | [#78948 — Auxiliary client sends primary model to custom fallback endpoint](https://github.com/NousResearch/hermes-agent/issues/78948) | Fallback title generation gets 404; wrong model paired with custom endpoint. | [PR #78988](https://github.com/NousResearch/hermes-agent/pull/78988) closed as duplicate; issue still open |
| P2 | [#78953 — Auxiliary-task rows record `cache_read_tokens=0`, under-reporting cost ~37%](https://github.com/NousResearch/hermes-agent/issues/78953) | Local cost accounting materially under-reports billed spend. | No visible fix PR |
| P2 | [#78406 — OpenAI transport not rebuilt until retry budget exhausted](https://github.com/NousResearch/hermes-agent/issues/78406) | Recurring `RemoteProtocolError`; slow recovery from mid-stream connection drops. | No visible fix PR |
| P2 | [#77047 — `read_file` misdetects valid UTF-8 CJK files as binary](https://github.com/NousResearch/hermes-agent/issues/77047) | 1000-byte sample cut lands mid-character. | No visible fix PR |
| P2 | [#75801 — Missing `finish_reason` causes fake network-drop continuations](https://github.com/NousResearch/hermes-agent/issues/75801) | Desktop + OpenCode Go `gpt-5.6-luna` produces 4 fake continuations and strips the answer. | No visible fix PR |
| P2 | [#75791 — `hermes dashboard --status` false negative on Windows 11](https://github.com/NousResearch/hermes-agent/issues/75791) | Reports no dashboard while dashboard is actively serving. | No visible fix PR |
| P3 | [#78514 — Feishu dedup is per-profile, not multiplex-wide](https://github.com/NousResearch/hermes-agent/issues/78514) | Replayed Feishu events processed twice under multiplex mode. | [PR #78889](https://github.com/NousResearch/hermes-agent/pull/78889) |
| P3 | [#78122 — `max_in_progress` enforced per board, not gateway-wide](https://github.com/NousResearch/hermes-agent/issues/78122) | Kanban dispatch does not respect global concurrency limits. | [PR #78995](https://github.com/NousResearch/hermes-agent/pull/78995) |

The most concerning pattern is the terminal/cron lifecycle-guard crash family: multiple issues and duplicate PRs (#78942, #78971, #78974, #78982, #78994) show that a guard intended to make terminal calls safer can itself become a denial-of-service vector for all terminal commands.

## 6. Feature Requests & Roadmap Signals

Several feature requests are getting enough traction to plausibly land in a near-term release:

- **Plugin lifecycle standardization** — [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) and [#64231](https://github.com/NousResearch/hermes-agent/issues/64231) point to a hooks/lifecycle-event catalog. This is the clearest roadmap item and is already being driven by high-comment tracking issues.
- **Desktop project-discovery control** — [#53328](https://github.com/NousResearch/hermes-agent/issues/53328) and [#64615](https://github.com/NousResearch/hermes-agent/issues/64615) both request opt-out/scope limits for the home-directory git scanner. Likely to ship as configuration plus UI toggle.
- **Feishu and Telegram gateway parity** — Feishu is receiving active bug-fix PRs (#78889), while Telegram has a meta-campaign issue (#78791). Platform integration work seems to be accelerating.
- **Desktop usage/cost visibility** — [#78997](https://github.com/NousResearch/hermes-agent/issues/78997) asks for subscription/token usage in the Desktop status bar. This is a small, high-value UI feature likely to be prioritized for heavy users.
- **OAuth/auth UX improvements** — [PR #79007](https://github.com/NousResearch/hermes-agent/pull/79007) suggests maintainers are actively improving credential-failure messaging.
- **Multi-tenant memory isolation** — [#34352](https://github.com/NousResearch/hermes-agent/issues/34352) is architectural and likely longer-term, but it has production users running custom patches and will not disappear.

## 7. User Feedback Summary

Real user pain points visible in this window:

- **Multi-tenant users are forking/patched Hermes** because memory operations bypass the hook system and make tenant isolation impossible ([#34352](https://github.com/NousResearch/hermes-agent/issues/34352)).
- **Windows remains a top friction point**: false dashboard status ([#75791](https://github.com/NousResearch/hermes-agent/issues/75791)), lack of portable/isolated deployment guidance ([#46199](https://github.com/NousResearch/hermes-agent/issues/46199)), and desktop updater confusion ([#76435](https://github.com/NousResearch/hermes-agent/issues/76435)).
- **Desktop auto-scanning is perceived as invasive**: users report Hermes Desktop scanning the entire home directory for git repos on every launch with no way to disable it ([#53328](https://github.com/NousResearch/hermes-agent/issues/53328), [#64615](https://github.com/NousResearch/hermes-agent/issues/64615)).
- **Heavy users want cost control**: they regularly hit quota limits mid-task and need at-a-glance usage visibility ([#78997](https://github.com/NousResearch/hermes-agent/issues/78997)).
- **Docs inconsistencies erode trust**: quickstart calls Nous Portal "free" while Portal pages say a subscription is required ([#78254](https://github.com/NousResearch/hermes-agent/issues/78254)).
- **Power users are engaged but blocked by plugin API ambiguity**: detailed community tracking issues suggest enthusiasm for plugin development, but contributors are waiting on maintainer decisions about hooks and lifecycle events ([#64182](https://github.com/NousResearch/hermes-agent/issues/64182), [#64231](https://github.com/NousResearch/hermes-agent/issues/64231)).
- **Production users are relying on Hermes for real autonomous workloads** and reporting precise, high-quality bugs with reproduction steps — a strong signal of real-world adoption.

## 8. Backlog Watch

The following items have been open for a long time and appear to be waiting on maintainer decisions, architectural direction, or sustained review attention:

- [Issue #34352 — Solving the Multi-Tenant Hermes Problem](https://github.com/NousResearch/hermes-agent/issues/34352)  
  Opened 2026-05-29 · 14 comments · 2 👍 · `needs-decision`  
  Architectural multi-tenancy issue with a production fix in use externally. Needs maintainer decision on hook/memory isolation direction.

- [Issue #16004 — Configurable bounded auto-continue when max tool-call iterations are reached](https://github.com/NousResearch/hermes-agent/issues/16004)  
  Opened 2026-04-26 · 9 comments · `P2` · `needs-decision`  
  Important for long-running autonomous gateway/desktop sessions; no visible PR yet.

- [Issue #29680 — MCP OAuth fails with Supabase token exchange](https://github.com/NousResearch/hermes-agent/issues/29680)  
  Opened 2026-05-21 · 3 👍 · `P2`  
  Supabase MCP OAuth requires `client_secret`; broken flow with no visible fix.

- [Issue #46199 — Windows portable/isolated deployment guidance](https://github.com/NousResearch/hermes-agent/issues/46199)  
  Opened 2026-06-14 · 7 comments · 2 👍  
  Request for officially supported minimal-footprint Windows deployment model.

- [Issue #53328 / #64615 — Desktop auto-scan of entire home directory](https://github.com/NousResearch/hermes-agent/issues/53328)  
  Opened 2026-06-26 · 3 comments · 1 👍; duplicate #64615 opened 2026-07-14  
  Config/opt-out for project discovery is missing and repeatedly requested.

- [Issue #478 — Study Deck Skill: Flashcard/Quiz Generation, Spaced Repetition](https://github.com/NousResearch/hermes-agent/issues/478)  
  Opened 2026-03-06 · 4 👍  
  Long-standing feature request for an education/study skill bundle.

- [PR #26859 — fix(gateway): refresh Discord runtime status](https://github.com/NousResearch/hermes-agent/pull/26859)  
  Opened 2026-05-16 · rewritten against current `main` but still open. May need reviewer attention.

- [PR #47583 — feat(safety): deny reading secret-bearing credential files](https://github.com/NousResearch/hermes-agent/pull/47583)  
  Opened 2026-06-17 · security-related file-read protection; appears to need review/decision.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-05

## 1. Today's Overview

As of 2026-08-05, PicoClaw shows moderate activity: 3 issues and 4 pull requests were updated in the last 24 hours, with no new releases. The open issue load centers on runtime reliability — an MCP connection failure can hang the agent loop, and the Web UI becomes sluggish with long chat histories. Two older PRs were closed as stale, while two feature PRs remain open around web search and prompt-cache observability. Project health is stable, but several important issues have not yet received fixes.

## 2. Releases

No new releases were published in this digest period.

## 3. Project Progress

No PRs were merged today.

- [#3280](https://github.com/sipeed/picoclaw/pull/3280) — `fix(auth): make browser OAuth login survive real-world callback conditions` — **closed as stale**, not merged.
- [#3251](https://github.com/sipeed/picoclaw/pull/3251) — `fix(providers): capture the prompt cache token usage in Anthropic providers` — **closed as stale**, not merged.
- [#3299](https://github.com/sipeed/picoclaw/pull/3299) — `Add native Exa web search provider` — **open**, adds Exa as a `tools.web` / `web_search` provider.
- [#3317](https://github.com/sipeed/picoclaw/pull/3317) — `feat(providers): log prompt cache tokens in LLM response debug output` — **open**, improves usage observability for cache-aware providers such as DeepSeek via Cloudflare AI Gateway.

The active feature work is focused on provider integration and cost/token observability.

## 4. Community Hot Topics

Most active items by comments/reactions:

- [#3182](https://github.com/sipeed/picoclaw/issues/3182) — Android service launch failure, 6 comments, closed as stale.
- [#3281](https://github.com/sipeed/picoclaw/issues/3281) — Web UI chat input lag with longer history, 3 comments, 1 👍.
- [#3269](https://github.com/sipeed/picoclaw/issues/3269) — MCP server connection failure hangs the agent loop and stops replies, 3 comments, 1 👍.

Underlying user need: PicoClaw is being used in real-world mobile, remote, and provider-heavy setups where stability, performance, and authentication reliability are critical.

## 5. Bugs & Stability

Ranked by severity:

1. **High** — [#3269](https://github.com/sipeed/picoclaw/issues/3269): MCP server connection failure causes the agent loop to hang, leaving the chat interface unresponsive. No open fix PR identified.
2. **Medium** — [#3281](https://github.com/sipeed/picoclaw/issues/3281): Web UI input becomes very laggy as session history grows. No fix PR exists yet.
3. **Low / closed** — [#3182](https://github.com/sipeed/picoclaw/issues/3182): Android service cannot launch and settings path cannot be changed; closed as stale without visible resolution.

Observability-related PRs [#3317](https://github.com/sipeed/picoclaw/pull/3317) and [#3251](https://github.com/sipeed/picoclaw/pull/3251) address prompt-cache metrics, but neither targets the reported stability bugs.

## 6. Feature Requests & Roadmap Signals

- **Native Exa web search** ([#3299](https://github.com/sipeed/picoclaw/pull/3299)) — signals planned expansion of `tools.web` / `web_search` provider options.
- **Prompt cache token logging** ([#3317](https://github.com/sipeed/picoclaw/pull/3317)) and Anthropic cache usage capture ([#3251](https://github.com/sipeed/picoclaw/pull/3251)) — point to growing demand for cost and cache transparency.
- **OAuth login robustness** ([#3280](https://github.com/sipeed/picoclaw/pull/3280)) — though closed stale, the PR highlights demand for headless/remote browser login support.

Next releases may include improved web search provider support and better token/cache usage reporting.

## 7. User Feedback Summary

Users are actively running PicoClaw in production-like environments. Recurring pain points:

- Android service startup and path configuration failures ([#3182](https://github.com/sipeed/picoclaw/issues/3182)).
- Severe UI lag during long sessions ([#3281](https://github.com/sipeed/picoclaw/issues/3281)).
- Agent loops stalling completely when an MCP server fails ([#3269](https://github.com/sipeed/picoclaw/issues/3269)).

On the positive side, contributor activity around provider-specific improvements — Exa search, Anthropic cache tokens, Cloudflare AI Gateway usage — shows real usage and demand for cost-aware, extensible integrations.

## 8. Backlog Watch

Items needing maintainer attention:

- [#3269](https://github.com/sipeed/picoclaw/issues/3269) — open since 2026-07-20; critical agent-loop hang, no fix PR.
- [#3281](https://github.com/sipeed/picoclaw/issues/3281) — open since 2026-07-21; Web UI performance regression, no fix PR.
- [#3299](https://github.com/sipeed/picoclaw/pull/3299) — open PR since 2026-07-26; Exa provider addition awaiting review.
- [#3317](https://github.com/sipeed/picoclaw/pull/3317) — open PR since 2026-08-04; prompt cache token logging, needs review.
- [#3182](https://github.com/sipeed/picoclaw/issues/3182) — closed as stale after ~5 weeks; Android issue may need a fresh triage or follow-up.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-05

## 1. Today's Overview

NanoClaw showed moderate pull-request activity over the last 24 hours, with 5 PRs updated, 4 remaining open and 1 closed/merged — while issue traffic was completely flat (0 open, 0 closed) and no new releases shipped. The single merged item, a core-team fix for scheduled-task run time (#3154), represents a meaningful reliability improvement to the agent runner. The open PR pipeline includes one urgent Discord approvals bug fix and two long-running Dial channel integration PRs that have been pending for over three weeks. Overall the project appears in a stable consolidation phase: steady contributor momentum, low issue backlog, but no release cadence signals in this window.

## 2. Releases

No new releases in the last 24 hours. No changelog, breaking-change, or migration information to report.

## 3. Project Progress

**Merged/Closed:**

- [PR #3154 — fix(agent-runner): give scheduled tasks current run time](https://github.com/qwibitai/nanoclaw/pull/3154) *(closed, core-team)* — Improves scheduled task execution by rendering a task's `time` from its effective scheduled occurrence (`process_after`), with the creation timestamp retained as a fallback for legacy rows. Also adds a task-only `current_time` generated when the task reaches the agent, including the weekday and honoring the configured agent-group timezone. This closes a correctness gap where scheduled tasks were observing stale or incorrect run times.

**Notable open PRs still in flight:**

- [PR #3186 — refactor: add host seams for skill-owned capabilities](https://github.com/qwibitai/nanoclaw/pull/3186) — Refactoring work opening extension points for skills; follows contribution guidelines.

## 4. Community Hot Topics

No issues exist in the tracker, and all five PRs report zero comments and zero reactions, so there is no active discussion thread to surface. The items drawing the most sustained attention — by virtue of continued updates — are the **Dial channel** PR pair, both authored by OmriBenShoham and refreshed again on 2026-08-04 after being open since 2026-07-14:

- [PR #3041 — feat(channels): add Dial channel adapter (SMS + AI voice calls)](https://github.com/qwibitai/nanoclaw/pull/3041)
- [PR #3050 — feat(setup): add Dial to the channel picker + wizard/skills (runChannelSkill model)](https://github.com/qwibitai/nanoclaw/pull/3050)

The underlying need: broadening NanoClaw's channel coverage beyond chat-centric integrations into telephony/SMS + AI voice, with setup-wizard support so the new channel is discoverable by end users. The pair's long open lifetime and continued updates suggest an active author working through review feedback or iterating on the implementation.

## 5. Bugs & Stability

One notable bug fix is open, and one fix was merged in this window:

- **[High] Discord approval cards always reject — [PR #3185](https://github.com/qwibitai/nanoclaw/pull/3185)** *(open)* — On Discord, clicking any button on an `ask_question`/approval card resolves to the wrong option, so **every approval is rejected even when the user clicks Approve**. Root cause: the raw HTTP-interaction (webhook) path of the Chat SDK bridge decodes `custom_id` by splitting on `:`, and a stray `\n` delimiter breaks resolution. A fix PR exists and strips the newline delimiter. Severity is high because it silently breaks all Discord approval workflows.
- **[Medium] Scheduled tasks execute with stale run time — merged in [PR #3154](https://github.com/qwibitai/nanoclaw/pull/3154)** — Tasks were not receiving the current run time; resolved by deriving time from `process_after` and injecting a task-scoped `current_time`. Merged, so no further action needed.

No crash, regression, or security reports were filed as GitHub issues in this window.

## 6. Feature Requests & Roadmap Signals

The clearest roadmap signal is the **Dial channel integration** (SMS + AI voice calls), tracked by [PR #3041](https://github.com/qwibitai/nanoclaw/pull/3041) and [PR #3050](https://github.com/qwibitai/nanoclaw/pull/3050). Both are labeled as feature skills and include source changes plus `SKILL.md`, consistent with the project's channel-integration contribution model. If merged, Dial would become a first-class channel in the picker, the setup wizard, and the `runChannelSkill` model.

Additionally, [PR #3186](https://github.com/qwibitai/nanoclaw/pull/3186) hints at an architectural direction: adding "host seams" for skill-owned capabilities, which could enable third-party skills to own host-level functionality more cleanly in a future release. Both Dial and the seams refactor are plausible candidates for inclusion in the next minor release, though no release has been cut in this window.

## 7. User Feedback Summary

Direct user feedback is unavailable this window — the issue tracker has zero items and none of the PRs carry comments or reactions. Inferred pain points from the contribution activity:

- **Discord approval reliability** is broken in production for interactive cards (every click yields "reject"), which erodes trust in agent-driven approval workflows; users need deterministic custom-ID handling. [PR #3185](https://github.com/qwibitai/nanoclaw/pull/3185) addresses this.
- **Scheduled/automation users** need accurate run-time context (time/weekday/timezone) when tasks execute; the merged fix in [PR #3154](https://github.com/qwibitai/nanoclaw/pull/3154) directly targets that experience.
- **Channel breadth demand**: the sustained effort behind Dial (voice/SMS) suggests users want to operate NanoClaw agents outside chat UIs, via phone calls and text.

## 8. Backlog Watch

Items requiring maintainer attention:

- [PR #3041 — feat(channels): add Dial channel adapter](https://github.com/qwibitai/nanoclaw/pull/3041) — Open since **2026-07-14** (22 days). Long-pending feature PR; needs review decision (merge, request changes, or close).
- [PR #3050 — feat(setup): add Dial to channel picker/wizard](https://github.com/qwibitai/nanoclaw/pull/3050) — Open since **2026-07-14**; companion to #3041 and likely gated on it. Should be triaged together.
- [PR #3185 — fix(discord): strip \n delimiter in webhook custom_id](https://github.com/qwibitai/nanoclaw/pull/3185) — Only 1 day old, but addresses a high-severity production bug (all Discord approvals rejected). Recommended fast-track review.
- [PR #3186 — refactor: add host seams for skill-owned capabilities](https://github.com/qwibitai/nanoclaw/pull/3186) — Recently opened; no maintainer response yet. Low urgency, but early review could de-risk the refactor landing.

No unanswered community issues are currently pending, as the issue tracker is empty.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-05

## 1. Today's Overview
NullClaw saw very low activity in the last 24 hours: no issues were updated, no releases were published, and only one pull request was touched. This indicates a quiet maintenance period rather than a surge of new work or user reports. The single active PR, #981, continues to progress, having been updated on 2026-08-04 after its creation on 2026-07-29. Project health appears stable with no new bug reports or regressions, but also no merged contributions today. Overall, the project is in a slow but not stagnant phase, with contributor interest focused on expanding provider support.

## 2. Releases
No new releases were published in the last 24 hours. There are no changelog entries, breaking changes, or migration notes to report.

## 3. Project Progress
No pull requests were merged or closed today. The only PR updated in the period is:

- **[#981 [OPEN] feat(provider): add grok-cli provider for xAI Grok CLI](https://github.com/nullclaw/nullclaw/pull/981)**  
  Author: valonmulolli | Created: 2026-07-29 | Updated: 2026-08-04  
  This PR adds a new optional provider that delegates to the local `grok` CLI from xAI. It follows the existing spawn-per-request pattern already used by `codex-cli`, `gemini-cli`, and `claude-cli` providers. The update on 2026-08-04 indicates ongoing development or revision, though no merge has occurred yet.

## 4. Community Hot Topics
The only active community item is PR #981. There are no issues or PRs with significant comment/reaction counts in this window.

- **[#981 – Add grok-cli provider](https://github.com/nullclaw/nullclaw/pull/981)**  
  This PR represents the most relevant community conversation: a request to integrate xAI's Grok CLI as a provider. The underlying need is clear — users want to use Grok through NullClaw's existing CLI-based provider architecture. The fact that it mirrors the `codex-cli`/`gemini-cli`/`claude-cli` pattern suggests the community values parity across CLI-backed AI models. No maintainer response is visible in the provided data, which may warrant attention.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours. No issue or PR was opened specifically for stability problems. The project appears stable in this window, with zero open issues updated.

## 6. Feature Requests & Roadmap Signals
The dominant feature signal is the new `grok-cli` provider in PR #981. If merged, this would extend NullClaw's provider ecosystem to include xAI's local CLI, completing a pattern across major CLI tools. There are no other feature requests or roadmap hints from issues today. Given the existing provider framework, the next version could plausibly include Grok CLI support as an optional provider, assuming the PR passes review and testing.

## 7. User Feedback Summary
No direct user feedback via issues or comments was recorded in the last 24 hours. The only indirect feedback comes from PR #981, which indicates user interest in using Grok CLI with NullClaw. The proposed implementation treats the Grok CLI as an optional dependency, suggesting users expect a lightweight integration that relies on local authentication rather than API keys. There are no signs of dissatisfaction in the current data, but the absence of maintainer interaction on #981 could be an emerging concern.

## 8. Backlog Watch
- **[#981 – grok-cli provider (open since 2026-07-29, last updated 2026-08-04)](https://github.com/nullclaw/nullclaw/pull/981)**  
  This PR has been open for about a week and is the only active contribution requiring review. No maintainer comments or approvals are visible in the provided data. If maintainers are unavailable, this PR may stall despite active contributor effort. It is the primary item needing maintainer attention in the current backlog.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-05

## 1. Today's Overview

IronClaw is in an intense pre-release stabilization and architecture-refactor window ahead of `ironclaw-v1.1.0-rc.1`. In the last 24 hours, 50 issues and 50 PRs were updated (12 issues closed; 18 PRs merged/closed), with no new releases published. The dominant themes are (a) clearing the remaining Windows release blockers, (b) making the 1.0.0-rc.1 → 1.1.0-rc.1 upgrade migration lossless, and (c) executing the Target Crate Architecture "Waves" that sever legacy crate dependencies. Notably, a new contributor (`theredspoon`) has a seven-PR stack open covering WASM diagnostic sanitization, ambient-proxy disabling, and durable-delivery fixes, indicating healthy external contribution inflow — though its size suggests a review bottleneck. Overall project health is strong but the CI/architecture enforcement surface shows signs of drift, with several audits this week uncovering gates that were green while measuring nothing.

---

## 2. Releases

**No new releases in the last 24 hours.**

One release PR remains open and is worth watching, as it contains breaking changes for downstream crates:
- [PR #5598 — chore: release](https://github.com/nearai/ironclaw/pull/5598) (open since July 3): `ironclaw_common` 0.4.2 → 0.5.0 (⚠ breaking, `copy_impl_added` failures), `ironclaw_skills` 0.3.0 → 0.4.0 (⚠ breaking), `ironclaw_safety` 0.2.2 → 0.2.3 (compatible).

Migration-related work (see §3) suggests the project is preparing release artifacts rather than shipping them this cycle.

---

## 3. Project Progress

**Closed/merged PRs in the last 24h (18 total; notable items below):**

**Windows release blockers (v1.1.0-rc.1):**
- [PR #7197 — ci: pass Windows identity variables to release smoke](https://github.com/nearai/ironclaw/pull/7197) (closed, S). Fixes the preflight `USERNAME is unset` failure; scope was deliberately reduced to avoid changing shipped 1.0.0 behavior on a release branch.
- [PR #7200 — fix(composition): stop icacls writing to CLI stdout on Windows](https://github.com/nearai/ironclaw/pull/7200) (closed, M). Described as the **fourth Windows defect blocking `ironclaw-v1.1.0-rc.1`**; preflight now reaches further than any prior run (compile, `--version`, `--help`, `profile list --json` all pass).

**CI / enforcement hardening:**
- [PR #7167 — fix(ci): unbreak per-package clippy on bin-only crates; classify `.gitignore`](https://github.com/nearai/ironclaw/pull/7167) (closed, L). Root-caused the red `Code Style` gate on `main` (#7119): `--lib` is a hard error on bin-only packages, so the first PR touching only `ironclaw` failed on the flag rather than a lint.
- [PR #7156 — Enforcement: same-layer edge inventory, composition absolute-LOC ceiling, D-E vendor census, ratchet slack](https://github.com/nearai/ironclaw/pull/7156) (closed, L). Sabotage-tested fixes for four defects (#7149, #7151, #7150, #7147) that made CI gates meaningless.
- [PR #7161 — WS10: convert loud path-keyed gates to inventory keying](https://github.com/nearai/ironclaw/pull/7161) (closed, XL). Converts the remaining fail-visible path-pattern gates ahead of the crate family move.

**Architecture refactor (Target Crate Architecture, epic #3773):**
- [PR #7159 — WS5: sever `conversations -> turns` by port inversion](https://github.com/nearai/ironclaw/pull/7159) (closed, XL). Register 4 → 3; the forbidden dependency edge is gone with zero behavior moved. Also resolves the unowned CHECKLIST row from #7148.
- [PR #7160 — WS3: lanes consume a narrow reserve/reconcile/release port](https://github.com/nearai/ironclaw/pull/7160) (closed, XL). MCP and sandbox lanes drop the `ironclaw_resources` dependency entirely (#7067).

**Epics / issues closed:**
- [Issue #6284 — [EPIC] error-recoverability endgame](https://github.com/nearai/ironclaw/issues/6284) (closed, v1.1.0): the model recovers from 100% of errors it sees; recoverability contract (a)–(e) appears landed.
- [Issue #6524 — Epic: Hermetic capability and journey testing platform](https://github.com/nearai/ironclaw/issues/6524) (closed, v1.1.0).
- [Issue #7168 — Agent-installed skills are invisible](https://github.com/nearai/ironclaw/issues/7168) (closed): `skill_install` wrote where discovery does not read — fixed.

**Still open and advancing:**
- [PR #7198 — fix(migration): preserve rc1 state during 1.1 startup](https://github.com/nearai/ironclaw/pull/7198) (XL, open) — addresses #7178: runs the exact 1.0.0-rc.1 → 1.1.0-rc.1 record migration before runtime writers start, preserving threads, append-only messages, OAuth aliases, and extension installations across tenants.
- [PR #7181 — Waves 0–4 batch 2](https://github.com/nearai/ironclaw/pull/7181) (XL, open) — "register to zero," adapter-registry move, ruled decisions; all three initial components merged with zero conflicts.
- [PR #7001 — keep the cached system prefix byte-stable across model calls](https://github.com/nearai/ironclaw/pull/7001) (L, open) — fixes two sources rewriting the provider-cached prompt prefix (inline loop-control nudges, minute-precision clock).

---

## 4. Community Hot Topics

Most-commented issues in the last 24h:

1. **[Issue #6284 — Error-recoverability epic (15 comments, closed)](https://github.com/nearai/ironclaw/issues/6284)** — The most-discussed item: the full contract (run survives, model sees cause + fix, model gets a turn, no false non-success) is now closed as a v1.1.0 epic. The comment volume reflects how central recoverability is to the product's trust story.

2. **[Issue #6524 — Hermetic capability/journey testing platform (4 comments, closed)](https://github.com/nearai/ironclaw/issues/6524)** — Addresses a mechanical question: "Does every supported capability and critical user journey have deterministic, meaningful coverage?"

3. **[Issue #7119 — Code Style clippy red on main (4 comments, closed)](https://github.com/nearai/ironclaw/issues/7119)** — A CI-correctness incident: `origin/main` failed clippy for a package set no PR had previously produced. The community response (fix in #7167 within a day) shows healthy CI ownership.

4. **[Issue #6752 — Instance deletion fails; "Loading your agents..." stuck (3 comments, open)](https://github.com/nearai/ironclaw/issues/6752)** — User-facing blocker from Slack product-feedback; v1-launch-checklist tagged.

5. **[Issue #7145 — WS2 extension_host → loops re-layer (3 comments, open)](https://github.com/nearai/ironclaw/issues/7145)** — Architecture sizing debate: executing the flip showed file-count sizing repeats a prior error; the successor issue argues for sizing from the four-port residue.

Also notable: the `theredspoon` PR stack ([#7027](https://github.com/nearai/ironclaw/pull/7027), [#7028](https://github.com/nearai/ironclaw/pull/7028), [#7029](https://github.com/nearai/ironclaw/pull/7029), [#7034](https://github.com/nearai/ironclaw/pull/7034), [#7048](https://github.com/nearai/ironclaw/pull/7048), [#7063](https://github.com/nearai/ironclaw/pull/7063), [#5101](https://github.com/nearai/ironclaw/pull/5101)) is the most active new-contributor workstream — network hardening (disable ambient proxy discovery), durable outbound delivery fix, WASM guest-diagnostic sanitization, and CI installer reuse. The underlying need: **hardening the delivery/network path so a run's final reply is never lost or misattributed**.

---

## 5. Bugs & Stability

Ranked by severity:

**High**
- [Issue #6752 — Instance deletion fails, "Loading your agents..." stuck on re-login](https://github.com/nearai/ironclaw/issues/6752) (open, 3 comments, v1-launch-checklist) — Production blocker reported via Slack; no fix PR yet.
- [Issue #7185 — Memory not reliably recalled across conversations](https://github.com/nearai/ironclaw/issues/7185) (open) — Multiple Champions testers independently observed context loss between conversations; workspace-scoped and user-visible.
- [Issue #7146 — tracing: 121 sites use `target = "…"` instead of `target: "…"`](https://github.com/nearai/ironclaw/issues/7146) (open) — Systemic observability bug: events are invisible to the filter they name because the syntax records a *field*, not the metadata target. Affects 121 call sites.
- [Issue #7191 — builtin.time lacks relative-offset arithmetic](https://github.com/nearai/ironclaw/issues/7191) (open) — Observed in production: the agent's `{"operation":"parse","input":"24 hours ago"}` failed with opaque `input_error()`, breaking a real GitHub→Slack daily report automation.

**Medium**
- [Issue #7192 — WebUI optimistic user messages render below agent output](https://github.com/nearai/ironclaw/issues/7192) (open) — Conversation reads out of order until the durable row replaces the optimistic one.
- [Issue #7104 — Extractors report "no text found" as Failed rather than Empty](https://github.com/nearai/ironclaw/issues/7104) (open) — Model is told the wrong thing on a deliberate three-outcome distinction.
- [Issue #7103 — Latency-trace field computed even when latency tracing is off](https://github.com/nearai/ironclaw/issues/7103) (open) — Per-tool-call JSON byte-count behavior change, filed with its own test requirement.
- [Issue #7115 — docker entrypoint legacy-Slack migration gated on a dead env var](https://github.com/nearai/ironclaw/issues/7115) (open) — Following the docs skips the migration entirely.
- [Issue #7144 — Pre-existing defects in trace contribution pipeline (29 threads)](https://github.com/nearai/ironclaw/issues/7144) (open) — CodeRabbit surfaced 29 threads on a 17,470-line file that was only moved, not modified; needs triage.
- [Issue #7151 — Composition mass gate is share-based; god crate re-accretes while gate stays green](https://github.com/nearai/ironclaw/issues/7151) (open) — Feature inflow poisons the denominator of the share-based budget.
- [Issue #7147 — Two architecture ratchets carry untracked slack](https://github.com/nearai/ironclaw/issues/7147) (open) — Three open PRs hold three different values of the same baseline; shrink-only gates not actually ratcheting.
- [Issue #7168 — Agent-installed skills invisible](https://github.com/nearai/ironclaw/issues/7168) — **Closed**; fix landed.
- [Issue #7119 — Clippy red on main for a specific package set](https://github.com/nearai/ironclaw/issues/7119) — **Closed**; fixed by [#7167](https://github.com/nearai/ironclaw/pull/7167).

---

## 6. Feature Requests & Roadmap Signals

Strong v1.1.0 / v1.2.0 signals from the last 24h:

- [Issue #7193 — feat(automations): add run-now (manual fire)](https://github.com/nearai/ironclaw/issues/7193) (L, medium risk, open) — Currently no way to fire an automation on demand from model, WebUI, or product surface. High-likelihood next-version feature given the complete surface today is list/pause/resume/rename/delete.
- [Issue #7194 — admin-allowed shared Slack channel as outbound delivery target](https://github.com/nearai/ironclaw/issues/7194) (M, high risk, open) — Agents can enumerate/post to Slack channels but cannot make one an outbound delivery target; the sanctioned route for a run's final reply has nothing to target. Likely candidate for v1.1.x.
- [Issue #7177 — schema-aware ranked search for deferred tool retrieval](https://github.com/nearai/ironclaw/issues/7177) (M, suggested_P2, open) — Relates to Reborn progressive tool disclosure; important vocabulary lives in a tool's canonical capability schema, not just its name/description.
- [Issue #7199 — Suggestion: log candidate-skill-not-chosen vs chosen-and-changed-answer separately](https://github.com/nearai/ironclaw/issues/7199) (open, external user) — Directly feeds the skill-discovery epics #6565/#6941 with a measurable retrieval-payoff signal.
- [Issue #7183 — per-user LLM model selection (currently admin-only)](https://github.com/nearai/ironclaw/issues/7183) (open) — From the Champions check-in; a recurring multi-tenant SaaS request.
- [Issue #7105 — evaluate dedicated identity/session and payments service for cloud API](https://github.com/nearai/ironclaw/issues/7105) (P2, open) — Extraction proposal driven by repeated payments/credit issues in product flow.
- [Issue #6731 — Integrate IronHub into IronClaw](https://github.com/nearai/ironclaw/issues/6731) (epic, v1.1.0, open) — Runtime-discoverable signed tools/skills marketplace; companion docs PR [#6965](https://github.com/nearai/ironclaw/pull/6965) is in review.
- [PR #7184 — Nostr host functions for WASM tools](https://github.com/nearai/ironclaw/pull/7184) (XL, open) — Adds `nostr-sign-event` etc. to the `near:agent@0.4.0` sandbox; host-held keys never enter WASM.

**Prediction:** run-now automations (#7193) and shared-channel outbound delivery (#7194) are the most likely v1.1.x additions given they were filed with concrete product/WebUI scope by a core maintainer (`ilblackdragon`). Per-user model selection (#7183) and the payments-service extraction (#7105) are likely v1.2.0 roadmap items.

---

## 7. User Feedback Summary

Real user pain points surfaced in the last 24h (largely from the 2026-07-23 IronClaw Champions weekly check-in):

- **Memory/context persistence** ([#7185](https://github.com/nearai/ironclaw/issues/7185)): Multiple independent testers (legal, marketing) report that information established in one conversation is not reliably recalled later. This is the single most repeated user complaint this cycle.
- **Web scraping reliability** ([#7180](https://github.com/nearai/ironclaw/issues/7180)): "Hit-or-miss" — some sources succeed, others fail outright with no clear pattern; the agent reaches for the raw `http` tool instead of `web_search`, causing avoidable failures.
- **Model selection locked to admins** ([#7183](https://github.com/nearai/ironclaw/issues/7183)): Users want to choose/switch the underlying LLM per user; currently admin-only.
- **Instance deletion UX** ([#6752](https://github.com/nearai/ironclaw/issues/6752)): Deleting an instance errors and leaves the UI stuck on "Loading your agents..." — a launch-checklist blocker from Slack feedback.
- **Tool input ergonomics** ([#7191](https://github.com/nearai/ironclaw/issues/7191)): A production thread shows the agent failing to compute "24 hours ago"; `builtin.time` cannot parse relative offsets and returns opaque errors.
- **External suggestion** ([#7199](https://github.com/nearai/ironclaw/issues/7199)): A non-maintainer (FaceSeek builder) proposes separating "candidate skill existed but wasn't chosen" from "chosen and changed the final answer" in retrieval logging — an actionable, low-cost improvement aligned with the skill-discovery epics.

Satisfaction signals: the three closed epics (#6284, #6524, #7168) show the team is converting the highest-visibility complaints (error recovery, coverage, skill installs) into shipped fixes.

---

## 8. Backlog Watch

Long-open items needing maintainer attention:

- [Issue #3773 — Epic: Land the IronClaw Target Crate Architecture](https://github.com/nearai/ironclaw/issues/3773) (open since May 19, 0 comments, v1.2.0) — The parent epic for all the WS-wave work; no direct conversation on the epic itself despite heavy execution happening in child issues/PRs.
- [PR #5101 — ci: reuse cargo-component installer in live canary](https://github.com/nearai/ironclaw/pull/5101) (open since June 20, new contributor) — Six weeks without merge; the author's other stack items are moving, but this CI-only change keeps aging.
- [PR #5598 — chore: release](https://github.com/nearai/ironclaw/pull/5598) (open since July 3) — Pending breaking-change release for `ironclaw_common` and `ironclaw_skills`; presumably held for the 1.1.0-rc.1 window but should be tracked.
- [Issue #6565 — Epic: Reliable Skill Discovery, Routing, and Activation](https://github.com/nearai/ironclaw/issues/6565) (open since July 23, suggested_P1) — 21 acceptance criteria; partially superseded by the narrower [#6941](https://github.com/nearai/ironclaw/issues/6941). Needs explicit scoping decisions so the two epics don't drift.
- [Issue #6731 — Integrate IronHub into IronClaw](https://github.com/nearai/ironclaw/issues/6731) (open since July 27, v1.1.0) — Docs PR [#6965](https://github.com/nearai/ironclaw/pull/6965) has been in review since July 31 with no comment count; the epic has only 1 comment despite being a v1.1.0 commitment.
- [Issue #6752 — Instance deletion blocker](https://github.com/nearai/ironclaw/issues/6752) (open since July 28, v1-launch-checklist) — No fix PR attached yet despite launch-checklist severity.

---

*Digest generated 2026-08-05 from IronClaw GitHub activity (issues/PRs updated in the preceding 24 hours). All links reference https://github.com/nearai/ironclaw.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-05

## 1. Today's Overview
LobsterAI saw a moderate, release-oriented burst of activity over the last 24 hours: 1 issue was updated (open), and 13 PRs were touched, of which 10 were merged/closed and 3 remain open. The biggest signal is the merge of `release/2026.8.3` into `main` ([#2430](https://github.com/netease-youdao/LobsterAI/pull/2430)), bringing together credit-campaign work, login experience improvements, Artifact auto-preview controls, and model-error handling fixes. The project also closed several long-stale dependency-update PRs, indicating active backlog cleanup. However, a serious security-related issue about model key leakage remains open and stale, and should be prioritized. Overall, the project is in an active release-preparation state, with no new tagged releases published today.

## 2. Releases
No new releases were published in the last 24 hours.

However, PR [#2430](https://github.com/netease-youdao/LobsterAI/pull/2430) merged `release/2026.8.3` into `main`. According to the PR summary, this release includes:
- Native credit-reward activities
- Streamlined first-run login experience
- Control over Artifact auto-preview
- Improved model-error handling
- Windows installer reliability improvements

This looks like an upcoming or internal release candidate being integrated, but no version tag/release is available in the provided data.

## 3. Project Progress
Merged/closed PRs today (2026-08-04/05):

- [#2430](https://github.com/netease-youdao/LobsterAI/pull/2430) — **Release: 2026.8.3** merged into `main`; packaging the current release cycle.
- [#2429](https://github.com/netease-youdao/LobsterAI/pull/2429) — **Chore: optimize login page** — clean-up in `renderer`/`cowork` areas.
- [#2428](https://github.com/netease-youdao/LobsterAI/pull/2428) — **fix: complete startup credit campaign analytics fields** — added login redirect URL reporting, error details, and auth IPC coverage.
- [#2427](https://github.com/netease-youdao/LobsterAI/pull/2427) — **feat(activity): bundle startup credit campaign artwork** — local poster/CTA assets with server-controlled availability.
- [#2426](https://github.com/netease-youdao/LobsterAI/pull/2426) — **feat(cowork): classify model capacity overload separately from rate limit** — better error messages when providers are overloaded.
- [#2425](https://github.com/netease-youdao/LobsterAI/pull/2425) — **feat(settings): add artifact auto-preview toggle** — users can disable automatic file previews.
- [#2424](https://github.com/netease-youdao/LobsterAI/pull/2424) — **fix(activity): restore active credits campaign** — re-enabled credit-reset entry, campaign passthrough, and 500-credit claim flow.
- [#1282](https://github.com/netease-youdao/LobsterAI/pull/1282) — **chore(deps): bump @headlessui/react** from 1.7.19 to 2.2.9 (closed).
- [#1283](https://github.com/netease-youdao/LobsterAI/pull/1283) — **chore(deps): bump react** from 18.3.1 to 19.2.4 (closed).
- [#1284](https://github.com/netease-youdao/LobsterAI/pull/1284) — **chore(deps): bump react-syntax-highlighter** from 15.6.6 to 16.1.1 (closed).

Key themes: release integration, startup credit campaign polish, improved model-error UX, and long-awaited dependency upgrades.

## 4. Community Hot Topics
The only issue with visible comment activity is:

- [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) — **[OPEN] [stale] 【bug】agent泄漏model key信息，存在敏感信息泄漏风险**  
  Created 2026-04-01, updated 2026-08-04, **1 comment**.  
  Underlying concern: users can ask the agent for model key configuration details, and the agent reveals sensitive key-related environment variables/file locations. This is a security/privacy hot topic and may attract more attention if not addressed.

Active PR with strong feature interest:

- [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) — **[OPEN] feat: add permanent setting to hide sidebar ad banner**  
  Addresses user issue [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342). It responds to the pain point that ads can only be temporarily dismissed, not permanently disabled.

There are no other heavily commented PRs in the last 24h. The activity is mostly maintainer/contributor-driven rather than broad community discussion.

## 5. Bugs & Stability
Ranked by severity:

1. **Critical — Model key information leak**  
   [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202): The agent can be tricked into revealing model key configuration, environment variable names, and key-related info. This is a security risk. It remains open, has a `stale` label, and has no associated fix PR yet. This should be escalated.

2. **Medium — Silent session rename failures**  
   [#1205](https://github.com/netease-youdao/LobsterAI/pull/1205): Open PR that fixes the case where `handleRenameSave` silently swallows errors. Currently, rename failures give no feedback and the input closes. The PR adds a toast and keeps the input open for retry. This bug is not yet fixed because the PR is still open.

3. **Medium/Low — Misleading provider overload errors**  
   [#2426](https://github.com/netease-youdao/LobsterAI/pull/2426) is already merged: provider "overloaded"/capacity errors were being shown as generic rate-limit messages, misleading users into immediate retries. Now classified separately as `ModelOverloaded`.

4. **Low/Stability — Windows installer / model-error handling**  
   [#2430](https://github.com/netease-youdao/LobsterAI/pull/2430) mentions improved model-error handling and Windows installer reliability in the `2026.8.3` release integration.

## 6. Feature Requests & Roadmap Signals
- **Permanent ad-banner hiding**  
  [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) adds a Settings → General toggle to permanently hide the sidebar ad banner. Given it directly resolves issue [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342), it is a strong candidate for an upcoming release.

- **Artifact auto-preview control**  
  [#2425](https://github.com/netease-youdao/LobsterAI/pull/2425) is already merged; users can disable automatic file previews while preserving manual previews. This is likely to appear in the next published release.

- **Startup credit campaign**  
  [#2424](https://github.com/netease-youdao/LobsterAI/pull/2424), [#2427](https://github.com/netease-youdao/LobsterAI/pull/2427), and [#2428](https://github.com/netease-youdao/LobsterAI/pull/2428) all advance a native credit-reward activity with bundled artwork, analytics, and claim flow restoration. This suggests product focus on first-run user acquisition and rewards.

- **Security hardening for agent prompts**  
  Issue [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) implies a need for prompt-level filtering/redaction of sensitive model key information. If prioritized, this could become a security patch in the next release.

## 7. User Feedback Summary
- **Security concern is the loudest signal**: A user demonstrated that the agent leaks model key information through environment variables and config paths ([#1202](https://github.com/netease-youdao/LobsterAI/issues/1202)). This is a trust-breaking issue.
- **Ads are annoying**: Users want to permanently disable the sidebar ad banner, not just dismiss individual ads ([#2374](https://github.com/netease-youdao/LobsterAI/pull/2374), issue [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342)).
- **Error feedback matters**: Session rename failures are silent, leaving users confused ([#1205](https://github.com/netease-youdao/LobsterAI/pull/1205)).
- **Error messages should be accurate**: Provider overload errors were incorrectly presented as rate limits, leading to retry loops ([#2426](https://github.com/netease-youdao/LobsterAI/pull/2426)).
- **Credit/startup campaigns are being actively tuned**: Restoring and polishing the credits campaign ([#2424](https://github.com/netease-youdao/LobsterAI/pull/2424), [#2427](https://github.com/netease-youdao/LobsterAI/pull/2427)) suggests user incentives are an important part of the current product strategy.

## 8. Backlog Watch
These items have been open for a long time and need maintainer attention:

- [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) — **[OPEN] [stale] Security bug: agent leaks model key info**  
  Open since 2026-04-01, updated 2026-08-04. Critical security risk, no fix PR tied to it.

- [#1205](https://github.com/netease-youdao/LobsterAI/pull/1205) — **[OPEN] [stale] fix(cowork): show error toast when session rename fails**  
  Open since 2026-04-01, updated 2026-08-04. A small but user-visible UX fix that is still waiting to land.

- [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) — **[OPEN] chore(deps-dev): bump the electron group across 1 directory with 2 updates**  
  Open since 2026-04-02, updated 2026-08-04. Dependency update for `electron` and `electron-builder`. Keeping this updated is important for stability/security.

- [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) — **[OPEN] feat: add permanent setting to hide sidebar ad banner**  
  Open since 2026-07-21, updated 2026-08-04. Replies to a clear user request; waiting for review/merge.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

## Today's Overview

On 2026-08-05, Moltis is in a low-activity maintenance phase: no issues were created or updated in the last 24 hours, no releases were published, and no pull requests were merged or closed. The only repository activity was a single open Pull Request from Dependabot, bumping `undici` in the website directory. The lack of new bug reports or regression reports suggests no acute stability problems surfaced. However, with zero merged PRs and no issue discussion, project throughput is minimal. Overall, the repository appears stable but currently relies on maintainer follow-up for routine dependency updates.

## Releases

No new releases were published.

## Project Progress

No merged or closed pull requests occurred today, so no features, fixes, or documentation changes were landed. The only updated PR remains open:

- [#1184 — chore(deps-dev): bump undici from 7.28.0 to 7.29.0 in /website in the npm_and_yarn group across 1 directory](https://github.com/moltis-org/moltis/pull/1184)  
  This automated dependency update targets `undici` in the website toolchain. It is still open and awaiting review/merge.

## Community Hot Topics

There are no issues or pull requests with active comment threads or reactions today. The only PR activity is the automated dependency bump:

- [#1184 — Dependabot update for `undici`](https://github.com/moltis-org/moltis/pull/1184)  
  No discussion or reactions are attached. Underlying need: keeping website dependencies current. Maintainer attention is needed to approve or close this routine update.

## Bugs & Stability

No bugs, crashes, or regressions were reported in the last 24 hours. No open issues suggest any stability concerns. The `undici` version bump may contain upstream fixes, but there is no associated bug report or fix PR linked to it. Urgent stability work does not appear outstanding.

## Feature Requests & Roadmap Signals

No feature requests or roadmap-signaling issues were submitted or updated today. There is no data available to predict likely next-version features.

## User Feedback Summary

No user feedback was captured through issues, comments, or reactions during this period. As a result, user satisfaction, pain points, and use-case signals cannot be derived from today’s activity.

## Backlog Watch

No long-unanswered issues or pull requests are visible in the provided data. The only open PR, [#1184](https://github.com/moltis-org/moltis/pull/1184), was created on 2026-08-04, so it is not yet stale, but it is the sole item requiring maintainer review.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-05

## 1. Today's Overview

CoPaw is in a high-tempo beta-stabilization phase: within the last 24 hours, 28 issues were updated (17 open, 11 closed) and 50 pull requests were touched (28 open, 22 merged/closed), with **no new releases** published. The community is actively stress-testing the just-released v2.1.0-beta.1, surfacing regressions in the Windows desktop runtime ([#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697)) and the browser SDK ([#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698)). Maintainers are responding quickly — several bugs reported this week already have open fix PRs, and a full stack of timezone fixes was merged across backend and console. Engagement is strong (three issues above 10 comments), contributor onboarding is visible (four first-time-contributor PRs in the active set), and the open/closed ratio suggests a healthy issue pipeline. Overall project health: busy but well-managed, with velocity driven by beta bugfixes and a steady stream of thoughtful feature requests.

## 2. Releases

No new releases in this window.

## 3. Project Progress

22 PRs were merged/closed today. Notable items among the top-20 by recent activity:

- **Timezone handling landed end-to-end.** [PR #6309](https://github.com/agentscope-ai/QwenPaw/pull/6309) converts naive UTC session timestamps to the user's configured timezone, [PR #6685](https://github.com/agentscope-ai/QwenPaw/pull/6685) improves timestamp parsing in `agentscope_msg_to_message` (both fix [#6301](https://github.com/agentscope-ai/QwenPaw/issues/6301)), and [PR #6618](https://github.com/agentscope-ai/QwenPaw/pull/6618) removes the console-side forced UTC normalization.
- **Scroll compression fix.** [PR #6628](https://github.com/agentscope-ai/QwenPaw/pull/6628) injects the compressed-memory placeholder as a `SystemMsg` instead of `role=user`, fixing HTTP 400 errors on DeepSeek / OpenAI-compatible APIs when `tool` messages lose their preceding `tool_calls`.
- **Console settings sync.** [PR #6682](https://github.com/agentscope-ai/QwenPaw/pull/6682) keeps the legacy `max_iters` field in sync with the UI-bound `loop.iteration.max_iterations` after the Loop Engineering migration.
- **CI/test hardening.** [PR #6678](https://github.com/agentscope-ai/QwenPaw/pull/6678) installs Playwright Chromium for the integration suite; [PR #6686](https://github.com/agentscope-ai/QwenPaw/pull/6686) fixes Chrome contract mismatches and adds missing p-tier markers; [PR #6679](https://github.com/agentscope-ai/QwenPaw/pull/6679) aligns import-local tests with the [#6487](https://github.com/agentscope-ai/QwenPaw/issues/6487) source guard.
- **Long-running security PR closed.** [PR #4267](https://github.com/agentscope-ai/QwenPaw/pull/4267) — macOS file-path whitelisting with `sandbox-exec` protection, under review since May 13 — was finally resolved.

Closed issues freed several older threads: the console approval-prompt question ([#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655)), the anti-duplication false trigger ([#5906](https://github.com/agentscope-ai/QwenPaw/issues/5906)), the Skills-page timeout bug ([#6633](https://github.com/agentscope-ai/QwenPaw/issues/6633)), token-usage write retry ([#6374](https://github.com/agentscope-ai/QwenPaw/issues/6374)), the Kanban request ([#4947](https://github.com/agentscope-ai/QwenPaw/issues/4947), closed after 2 months), and two file-UX requests from rerbin ([#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642), [#6583](https://github.com/agentscope-ai/QwenPaw/issues/6583)).

## 4. Community Hot Topics

- [Issue #6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) — **GPT-5.6 prompt caching in the Responses API provider** (13 comments). Users want `prompt_cache_key` / `prompt_cache_options` / `prompt_cache_breakpoint` support to reuse cached prefixes across multi-turn loops, cutting latency and cost. Signal: cost-efficiency is becoming a first-class concern for heavy agent users.
- [Issue #6655](https://github.com/agentscope-ai/QwenPaw/issues/6655) — **Console channel silently swallows approval prompts** (12 comments, closed). A `del`/`rm` command gated as HIGH risk produces an approval request that never renders in the terminal; the agent times out after 300s with zero user awareness. Outcome of the discussion remains noteworthy because the underlying gap persists for WeChat (see [#6695](https://github.com/agentscope-ai/QwenPaw/issues/6695)).
- [Issue #6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) — **Per-task output directories instead of one flat `media/` folder** (6 comments). Multiple users report artifact sprawl.
- [Issue #6667](https://github.com/agentscope-ai/QwenPaw/issues/6667) — **DeepSeek thinking mode breaks in multi-turn** (5 comments): `reasoning_content` disappears after the OpenAI formatter skips a `ThinkingBlock`; existing retry fallback only covers the first occurrence.
- [Issue #6642](https://github.com/agentscope-ai/QwenPaw/issues/6642) — **Drag-and-drop should reference the original file path** instead of upload-copying into `media/` (5 comments, closed).

Underlying needs: token/cost optimization, channel parity for safety approvals, file-hygiene ergonomics, and non-OpenAI provider compatibility.

## 5. Bugs & Stability

Ranked by severity, with fix status:

- **Critical — [Issue #6697](https://github.com/agentscope-ai/QwenPaw/issues/6697):** v2.1.0b1 desktop (Windows) injects `PYTHONHOME` into child environments, so *every* `python` subprocess crashes with `encodings ModuleNotFoundError`. Affects any tooling that shells out to Python. **No fix PR yet.**
- **High — [Issue #6698](https://github.com/agentscope-ai/QwenPaw/issues/6698):** Browser SDK `open()` always fails with `WireProtocolError: Target crashed` in isolated Playwright sessions, despite `connected=True`. **No fix PR yet.**
- **High — [Issue #6696](https://github.com/agentscope-ai/QwenPaw/issues/6696):** WeChat iLink consumes the one-time `context_token` on the typing indicator, so the real reply is rejected (`ret=-2`) and the "working" indicator sticks. **No fix PR yet.**
- **High — [Issue #6695](https://github.com/agentscope-ai/QwenPaw/issues/6695):** Approval prompts are unreachable in WeChat-only setups (console-only dialog + 5-minute auto-deny). Security-relevant: gated commands silently self-deny. **No fix PR yet.**
- **Medium — [Issue #6683](https://github.com/agentscope-ai/QwenPaw/issues/6683):** App Center install of `qwenpaw-creator` fails with `No module named 'utils.env'` due to a top-level plugin namespace collision. Fix PR [PR #6688](https://github.com/agentscope-ai/QwenPaw/pull/6688) is open (first-time contributor).
- **Medium — [Issue #6690](https://github.com/agentscope-ai/QwenPaw/issues/6690):** `cron pause`/`resume` only mutate the in-memory APScheduler state; `enabled` is lost on restart. Fix PR [PR #6691](https://github.com/agentscope-ai/QwenPaw/pull/6691) is open.
- **Medium — [Issue #6687](https://github.com/agentscope-ai/QwenPaw/issues/6687):** The OpenRouter multimodal probe overwrites documented image/video capabilities with `false`.
- **Medium — [Issue #6624](https://github.com/agentscope-ai/QwenPaw/issues/6624):** Auto-compression (Scroll) doesn't trigger `summarize_when_compact` memory flow, while manual `/compact` works. Fix PR [PR #6629](https://github.com/agentscope-ai/QwenPaw/pull/6629) is open.
- **Medium — [Issue #6667](https://github.com/agentscope-ai/QwenPaw/issues/6667):** DeepSeek multi-turn thinking failure (see Hot Topics); workaround covers the first failure only.
- **Low/UI — [Issue #6673](https://github.com/agentscope-ai/QwenPaw/issues/6673):** Frontend conversation-window display glitch on v2.1.0b1 (closed).

## 6. Feature Requests & Roadmap Signals

- [Issue #6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) — GPT-5.6 prompt caching parameters: likely next iteration of the Responses API provider.
- [Issue #6699](https://github.com/agentscope-ai/QwenPaw/issues/6699) — **On-demand skill loading**: a user with 27+ skills reports 8k–10k tokens (~25–30% of system prompt) wasted per request. Strong candidate for the next minor release given token-cost momentum.
- [Issue #6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) — Channel startup retry/health-check (Matrix is the pain case); implementation PR [PR #6689](https://github.com/agentscope-ai/QwenPaw/pull/6689) is already open.
- [Issue #6455](https://github.com/agentscope-ai/QwenPaw/issues/6455) — One agent running multiple models independently and merging results (e.g., "run with DS V4 Pro, Qwen 3.7 Max, Kimi K3, then union the answers"). Architecturally larger; likely later.
- [Issue #6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) — Built-in Volcengine Agent Plan and Xiaomi MiMo providers.
- [Issue #6694](https://github.com/agentscope-ai/QwenPaw/issues/6694) — Global always-on rules file (`.agent` / `.claude` style).
- [Issue #6674](https://github.com/agentscope-ai/QwenPaw/issues/6674) — Better handling of free-tier 429 rate limits so long tasks aren't interrupted.

**Prediction:** v2.1.0 stable will be hotfix-focused (desktop PYTHONHOME, browser SDK, WeChat channel). The v2.2 window is likely to absorb channel retry ([#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684)/[PR #6689](https://github.com/agentscope-ai/QwenPaw/pull/6689)), on-demand skill loading ([#6699](https://github.com/agentscope-ai/QwenPaw/issues/6699)), and possibly GPT-5.6 caching ([#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649)).

## 7. User Feedback Summary

- **Recurring pain point — approval visibility:** The console ([#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655)) and WeChat ([#6695](https://github.com/agentscope-ai/QwenPaw/issues/6695), [#6696](https://github.com/agentscope-ai/QwenPaw/issues/6696)) channels both make safe-approval flows invisible or broken, causing silent 5-minute timeouts. This is a trust-and-safety issue for non-Web deployments.
- **File handling friction:** Shared complaints about `media/` clutter ([#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643)), unnecessary upload-copy round-trips ([#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642)), and truncated file-name lists ([#6583](https://github.com/agentscope-ai/QwenPaw/issues/6583), closed).
- **Token-budget anxiety:** Skills bloat ([#6699](https://github.com/agentscope-ai/QwenPaw/issues/6699)), prompt-caching demand ([#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649)), and free-tier rate-limit interruptions ([#6674](https://github.com/agentscope-ai/QwenPaw/issues/6674)) all point to cost-sensitivity among daily users.
- **Positive sentiment:** [Issue #6674](https://github.com/agentscope-ai/QwenPaw/issues/6674) explicitly calls CoPaw "a great personal AI assistant" used daily; the release-duty issue ([#6656](https://github.com/agentscope-ai/QwenPaw/issues/6656)) shows a functioning install-verification process; and 22 PRs closed in a day indicate a fast, visible iteration loop that users appreciate.
- **Beta friction:** v2.1.0b1 desktop users are hitting environment-injection and browser-SDK regressions ([#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697), [#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698)) — expected for a beta, but the PYTHONHOME issue is severe enough to be a release-blocker candidate.

## 8. Backlog Watch

Items needing maintainer attention or a decision:

- [PR #6331](https://github.com/agentscope-ai/QwenPaw/pull/6331) — `chore(console): specify Node.js version requirement` (first-time contributor, open since Jul 22). Small, uncontroversial, dormant.
- [PR #6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) — Reranker support for ReMe memory search (open since Jul 23, "Under Review").
- [Issue #6455](https://github.com/agentscope-ai/QwenPaw/issues/6455) — Multi-model parallel execution: high-value workflow request, only 3 comments since Jul 24; deserves a maintainer design note.
- [Issue #6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) — Volcengine + Xiaomi MiMo built-in providers (Jul 27), awaiting triage.
- [PR #6492](https://github.com/agentscope-ai/QwenPaw/pull/6492) — Preserve uploaded filenames in hints (Jul 27), open without visible review activity.
- [PR #6657](https://github.com/agentscope-ai/QwenPaw/pull/6657) — Report sandbox constraints the backend cannot enforce; important for security reproducibility.
- [PR #6615](https://github.com/agentscope-ai/QwenPaw/pull/6615) — AgentScope compatibility and config-loading fixes (first-time contributor, fixes [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612)).
- **Process signal:** [PR #4267](https://github.com/agentscope-ai/QwenPaw/pull/4267) took ~3 months to close despite being security-relevant; a faster security-review path may be worth investing in.

*Digest generated from CoPaw/QwenPaw GitHub data for 2026-08-05.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-05

## 1. Today's Overview

ZeroClaw is in a period of intense architectural design and security hardening: 50 issues and 50 PRs were updated in the last 24 hours, with 48 still open in each category and only 2 issues / 2 PRs closed or merged. The update window produced no new releases. The dominant themes are (a) a large cluster of interlocking RFCs around runtime-owned sessions, attachments, authentication, and a Chat Completions compatibility profile, and (b) a set of S0-severity security bugs involving missing webhook authentication and missing per-agent data isolation. A significant fraction of open items is parked on `needs-maintainer-review` or `needs-author-action`, indicating that maintainer review capacity — not contributor activity — is the current gating constraint on the RFC queue.

## 2. Releases

No new releases in the last 24 hours. The `Latest Releases` list is empty, so no changelog, breaking-change, or migration notes are available for this digest period.

## 3. Project Progress

Two PRs were merged or closed in the window, but neither appears among the top-20 most-commented PRs, suggesting they were small or uncontroversial changes. On the issue side, the **Mixture-of-Agents (MoA) virtual model provider RFC ([#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568))** was closed after ~5 weeks of discussion, removing a major feature proposal from the open queue.

The most active open PRs show steady advancement across several fronts:

- **Model compatibility** — [#9723](https://github.com/zeroclaw-labs/zeroclaw/pull/9723) adds parsing for DeepSeek DSML and `<|tool_call|>` envelopes; [#9477](https://github.com/zeroclaw-labs/zeroclaw/pull/9477) recovers tool invocations wrapped in the `<tools>` tag (as emitted by Qwen2.5-Coder-32B); [#9757](https://github.com/zeroclaw-labs/zeroclaw/pull/9757) delivers Anthropic tool-result images as nested blocks; [#9304](https://github.com/zeroclaw-labs/zeroclaw/pull/9304) retries rejected tool turns with reasoning disabled.
- **Security fixes** — [#9362](https://github.com/zeroclaw-labs/zeroclaw/pull/9362) closes an arbitrary file-write escape in the browser tool's screenshot path; [#9548](https://github.com/zeroclaw-labs/zeroclaw/pull/9548) warns on Codex CLI extra args that alter sandbox/approval boundaries.
- **Reliability** — [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) bounds cron agent runs with a wall-clock timeout so a hung run cannot hold the SQLite job lock forever; [#9715](https://github.com/zeroclaw-labs/zeroclaw/pull/9715) makes JSONL session migration retry-safe under a mutation lock; [#9313](https://github.com/zeroclaw-labs/zeroclaw/pull/9313) persists the WeChat sync cursor only after the inbound batch is enqueued, closing a message-loss window.
- **Evaluation & observability** — [#9224](https://github.com/zeroclaw-labs/zeroclaw/pull/9224) adds repeated live eval runs with `pass@k` and error bars; [#9214](https://github.com/zeroclaw-labs/zeroclaw/pull/9214) adds a live execution mode with a sandboxed tool surface; [#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) exposes token accounting on history-trim events; [#9504](https://github.com/zeroclaw-labs/zeroclaw/pull/9504) shows a terminal notice when a turn ends on context exhaustion.
- **Config & CLI polish** — [#9281](https://github.com/zeroclaw-labs/zeroclaw/pull/9281) rolls back auto-created map aliases transactionally when `config set` fails; [#9399](https://github.com/zeroclaw-labs/zeroclaw/pull/9399) keeps Quickstart checklist rows within terminal width; [#9317](https://github.com/zeroclaw-labs/zeroclaw/pull/9317) fixes ZeroCode TUI input latency by rendering transient frames as a viewport slice.
- **Infrastructure** — [#9527](https://github.com/zeroclaw-labs/zeroclaw/pull/9527) bumps routine build toolchains to Rust 1.97.1 while holding the source floor at 1.96.0; [#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) is Phase 1 of the A2A outbound client (four `a2a_*` tools, shared v1.0 Serde wire model, default-closed config).

## 4. Community Hot Topics

The most active discussions are all architecture RFCs, revealing a community focused on ecosystem interoperability, multi-agent isolation, and operator control:

1. **[#8603 — RFC: ZeroClaw Chat Completions profile](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** — 16 comments. Proposes exposing agent capabilities via the OpenAI Chat Completions protocol to reach Open WebUI, LobeChat, Continue.dev, Aider, LangChain, and the OpenAI SDK. The underlying need is drop-in compatibility with existing AI toolchains rather than custom integrations.

2. **[#8303 — RFC: Goal mode v1 — bounded foreground Matrix work](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)** — 14 comments, 1 👍. A durable way to pursue a bounded user objective across multiple agent turns. The need: real tasks do not fit in a single turn, and users want controlled, resumable multi-turn work.

3. **[#7155 — RFC: Per-execution confirmation tier for high-risk commands](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)** — 13 comments. Revision 2 generalizes the original shell-only policy into a unified all-tool permission layer (allow/ask/deny) modeled on Claude Code. Reflects strong operator demand for granular control over autonomous agent actions.

4. **[#9488 — RFC: Unified attachment architecture for web chat and channels](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)** — 12 comments. Proposes a single attachment lifecycle across web and channel transports, coordinated with #9487 and tracker #9600.

5. **[#8568 — Mixture-of-Agents virtual model provider](https://github.com/zeroclaw-labs/zeroclaw/issues/8568)** — 10 comments, **closed**. The aggregator/judge parallel-model pattern was decided after 5 weeks; users following it were clearly interested in getting multiple model perspectives without leaving the normal model-selection UX.

6. **[#9487 — RFC: Runtime-owned conversation sessions and transport surface adapters](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)** — 10 comments. Part of the session/attachment ownership cluster; Revision 2 ratifies the #9487/#9488/#9600 ownership boundary and requires `InboundAction` at every migrated entry point.

Also active at 10 comments each: [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) (decouple memory lifecycle policy from storage backends) and [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) (pluggable inbound authentication, Rev 7).

## 5. Bugs & Stability

Three high-severity security bugs anchor the stability picture, all involving missing authentication or missing cross-agent isolation:

- **[#9565 — Gateway webhook handlers do not fail closed (WhatsApp Cloud, Linq, WATI)](https://github.com/zeroclaw-labs/zeroclaw/issues/9565)** — **Priority P0, severity S0 — data loss / security risk.** Three inbound webhook handlers in `crates/zeroclaw-gateway/src/lib.rs` dispatch attacker-controllable messages into the agent without authenticating the caller. Status: `in-progress`. This is the single most urgent open item in the repo; no dedicated fix PR is visible in the top-20 list yet.

- **[#9647 — Knowledge graph has no per-agent attribution](https://github.com/zeroclaw-labs/zeroclaw/issues/9647)** — **Priority P1, severity S0.** The `knowledge` tool exposes one globally-shared graph; any agent can read/mutate another agent's knowledge. Status: `accepted`, follow-up planned.

- **[#9646 — Session/channel read+write tools lack per-agent ownership scoping](https://github.com/zeroclaw-labs/zeroclaw/issues/9646)** — **Priority P1, severity S0.** `sessions_list/history/send` and `discord_search` act on model-supplied `session_id`/`channel_id` with no ownership check. Status: `accepted`, follow-up planned.

Additional fix-PRs in flight targeting stability/security defects: [#9362](https://github.com/zeroclaw-labs/zeroclaw/pull/9362) (browser screenshot arbitrary file write), [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) (cron lock held indefinitely on hung agent runs), [#9715](https://github.com/zeroclaw-labs/zeroclaw/pull/9715) (JSONL migration retry safety), [#9313](https://github.com/zeroclaw-labs/zeroclaw/pull/9313) (WeChat cursor persisted before batch enqueue → message loss), and [#9548](https://github.com/zeroclaw-labs/zeroclaw/pull/9548) (risky Codex CLI args).

## 6. Feature Requests & Roadmap Signals

The RFC pipeline points to a near-term roadmap centered on interoperability and a security architecture milestone:

- **OpenAI-compatible Chat Completions surface (#8603)** — If accepted, this is the strongest candidate for the next release: it would let Open WebUI, LobeChat, Aider, LangChain, and OpenAI-SDK clients talk to ZeroClaw directly.
- **Session & attachment ownership batch (#9487, #9488, tracker #9600)** — Coordinated runtime-owned sessions, transport adapters, and unified attachments; tracker #9600 explicitly exists to order four independent workstreams touching the same session-persistence contract. Expect this to land as a batch of PRs.
- **Security architecture milestone (#7141, #7142, #7155)** — Pluggable inbound authentication (Rev 7), runtime-owned security decision pipeline (Rev 6), and the unified all-tool allow/ask/deny permission layer are all queued for maintainer review.
- **A2A outbound client (PR #9324)** — Phase 1 is already in review; a working outbound A2A capability is likely to land soon.
- **Goal mode (#8303)** — Bounded multi-turn objectives; a major UX capability if ratified.
- **Eval tooling (#9224, #9214)** — Pass@k, error bars, and sandboxed live execution are close to landing and will meaningfully improve regression testing.

Prediction: the next minor release will likely bundle the Chat Completions profile (should #8603 be accepted), A2A Phase 1, the session/attachment ownership batch, and the currently in-flight reliability fixes — with the P0 webhook fix (#9565) possibly shipped as a patch release earlier.

## 7. User Feedback Summary

- **Interoperability demand is explicit.** The Chat Completions RFC (#8603) names six concrete client ecosystems users want to connect; the A2A client PR (#9324) and the merged MoA discussion (#8568) reinforce a pattern of users asking ZeroClaw to participate in broader agent/AI networks rather than remain a silo.
- **Security anxiety is high.** The shell-permission RFC (#7155) has undergone two revisions and broadened from shell commands to **all tools**, mirroring Claude Code's allow/ask/deny model. Users want visible, inspectable security posture (#6971).
- **Multi-agent isolation is a lived pain point.** The S0 bugs #9647 and #9646 describe agents reading and mutating each other's sessions and knowledge — evidence that multi-agent deployments are happening and hitting ownership boundaries.
- **Provider/model friction is recurring.** DeepSeek DSML (#9723), Qwen `<tools>` wrappers (#9477), Anthropic tool-result images (#9757), and reasoning-retry behavior (#9304) show users hitting model-specific tool-call format quirks; the community is actively patching these.
- **Silent failure is a frustration.** #9504 addresses the agent going idle with no terminal notice on context exhaustion; #9713 makes token accounting visible on history trims. Users are pushing for observability into *why* the agent stopped or trimmed.

## 8. Backlog Watch

Several long-open items need author or maintainer action:

- **[#5607 — Deterministic precondition gates for cron jobs](https://github.com/zeroclaw-labs/zeroclaw/issues/5607)** — Open since 2026-04-10 (~4 months), `status:accepted`, but no visible implementation PR. The proposed pre-hook semantics (exit 0 proceed, exit 10 skip) are fully specified.
- **[#6850 — Decouple memory lifecycle policy from storage backends](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)** — Open since 2026-05-22, `needs-author-action`, 10 comments; no movement toward implementation.
- **[#6971 — Security UX, runtime credential boundaries](https://github.com/zeroclaw-labs/zeroclaw/issues/6971)** — Open since 2026-05-27, `needs-author-action`; integral to the security milestone but stalled on author response.
- **[#6996 — Granular sandbox policy (filesystem/network)](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)** — Open since 2026-05-28, `in-progress` but `needs-author-action`.
- **[#7141 / #7142 — Pluggable authentication & security decision pipeline](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)** — Both open since 2026-06-03 (Rev 7 / Rev 6), `needs-maintainer-review`; core security architecture waiting on maintainer decisions.
- **[#6653 — Host-architecture policy for emulated installs](https://github.com/zeroclaw-labs/zeroclaw/issues/6653)** — Open since 2026-05-14, priority P3, `needs-author-action`.
- **[#8603 / #7155 / #9488 / #9487](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** — The four highest-engagement RFCs are all `needs-maintainer-review`; none advanced to `accepted` in this window.

The project's own **[#8692 — Maintainer decision queue tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** (9 comments) is the clearest signal of the bottleneck: it exists specifically to track RFCs and design issues awaiting maintainer attention, and none of the large RFCs moved through it in the last 24 hours. With 48 open PRs and 48 open issues being actively updated, contributor supply currently exceeds maintainer review capacity.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*