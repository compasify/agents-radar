# OpenClaw Ecosystem Digest 2026-06-26

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-26 00:29 UTC

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

# OpenClaw Project Digest — 2026-06-26

## Today's Overview

OpenClaw shows extremely high community activity with 500 updated issues and 500 updated pull requests in the last 24 hours, though the near-total overlap suggests a periodic batch refresh rather than all being freshly created today. Of the updated issues, 477 remain open and active, with only 23 closed, reflecting a growing backlog of unresolved work. On the PR side, 86 were merged or closed, indicating meaningful progress despite the heavy open count. No new releases were published today, and the project has not shipped a version since at least June 1 (per issue references). Project health is mixed: engagement is massive, but maintainer bandwidth appears stretched, with many critical issues labelled `needs-maintainer-review` and `needs-product-decision` for months.

## Releases

None — no new releases were published in the last 24 hours. The most recent referenced version in issues is `2026.6.1`.

## Project Progress

86 pull requests were merged or closed today. Notable merged/closed PRs include:
- **#68936** (Closed) — Autofix PR review pipeline + Windows daemon, a large (XL) script that adds automated review response and gateway supervision on Windows.
- **#96143** (Closed) — Fix for spurious npm spec errors after transient metadata failures in plugin installation (closes #77616).
- **#61329** (Closed) — UI fix defaulting the Usage view to last 7 days instead of today-only.

Several open PRs show active development:
- **#96875** — Bounds Vydra control response reads against unbounded JSON parsing (security fix, ready for maintainer).
- **#96874** — Bounds TTS/speech response reads, preventing OOM on large audio payloads.
- **#96818** — Ensures Codex Computer Use native tools complete before idle watchdog aborts them.
- **#90923** — Fixes macOS daemon installation when user home directory resides on external APFS volumes.

## Community Hot Topics

- **#48788** (*feat: centralized filename encoding utility*, 18 comments, 1 👍) — An 3-month-old feature request to build a multi-encoding solution for Content-Disposition headers across all channel adapters, currently stalled with `needs-product-decision` and `needs-maintainer-review` labels.
- **#63918** (*Cron agentTurn sends thinking=none to OpenAI*, 17 comments, 1 👍) — A critical compatibility bug where cron jobs send unsupported `thinking=none` to models that require `thinking=minimal`, causing 400 errors for gpt-5-nano users.
- **#58450** (*Agent promises follow-up but doesn't start one*, 15 comments, 3 👍) — A user-facing trust issue where the agent hallucinates follow-up promises without actually scheduling any work, heavily upvoted by the community.
- **#50090** (*Community Skill Development & ClawHub*, 15 comments, 2 👍) — An ecosystem-level feature request to bridge the gap between OpenClaw's skill marketplace promise and its current buggy, insecure implementation.
- **#45740** (*gh-issues skill: untrusted issue body injection*, 14 comments, 1 👍) — A security issue where raw GitHub issue bodies are injected into sub-agent prompts without sanitization, now over 3 months old with an open linked PR.
- **#63216** (*Repeated hard resets despite high reserveTokensFloor*, 11 comments, 3 👍) — A user experiencing persistent context-overflow resets even with aggressive compaction tuning, pointing to a deeper session management issue.
- **#55334** (*sessions.json unbounded growth → OOM*, 10 comments, 1 👍) — A critical memory leak where unpruned sessions with duplicated skillsSnapshot cause gateway out-of-memory kills.

Links: [#48788](https://github.com/openclaw/openclaw/issues/48788), [#63918](https://github.com/openclaw/openclaw/issues/63918), [#58450](https://github.com/openclaw/openclaw/issues/58450), [#50090](https://github.com/openclaw/openclaw/issues/50090), [#45740](https://github.com/openclaw/openclaw/issues/45740), [#63216](https://github.com/openclaw/openclaw/issues/63216), [#55334](https://github.com/openclaw/openclaw/issues/55334)

## Bugs & Stability

High-severity bugs reported or updated today:

**Critical (P1, data-loss / crash-loop / security):**
- **#63216** — Repeated hard context-overflow resets despite high reserveTokensFloor; retry loop re-injects bootstrap context. No fix PR open.
- **#55334** — Sessions.json unbounded growth causing gateway OOM; skillsSnapshot duplicated per session. No fix PR.
- **#54155** — Gateway memory leak: 389MB → 14.7GB over 4 days. No fix PR.
- **#44905** — Discord leaks internal tool-call traces (NO_REPLY, raw JSON, commentary) to channel. No fix PR.
- **#53599** — Chrome extension browser relay removed with no cross-machine replacement (regression). No fix PR.
- **#53540** — Embedded runner "Network connection lost" when LLM generates large parameter tool calls. No fix PR.
- **#52130** — Restart storm from Telegram retry.jitter type mismatch + misleading SecretRef. No fix PR.
- **#91009** — Codex PreToolUse hook spawns CPU-bound processes stalling gateway RPC. Linked PR open.
- **#63918** — Cron thinking=none sent to OpenAI models that reject it. No fix PR.
- **#58957** — Model switch fails silently when context too large. No fix PR.
- **#51396** — clearUnboundScopes strips operator scopes unconditionally for token-auth clients (regression). Linked PR open.
- **#49876** — Cron sessions deliver hallucinated output instead of failing cleanly. No fix PR.
- **#49603** — Orphaned lock files not cleared on gateway restart when PID matches current process. No fix PR.
- **#52249** — ACP parent session stuck until refresh when child completes. No fix PR.

**High (P2, data-loss / message-loss / session-state):**
- **#53628** — ${XDG_CONFIG_HOME} not expanded when installing skills. Linked PR open.
- **#57326** — CLI-backed helper paths still bypass CLI dispatch. No fix PR.
- **#51429** — Hardcoded user workspace path (/Users/wangtao) merged and released. Linked PR open.
- **#50093** — WhatsApp backfill missed messages after reconnection. No fix PR.
- **#50165** — Subagents appear completed before underlying work finishes. No fix PR.
- **#51628** — Telegram delivery queue replay duplicates messages. No fix PR.
- **#52972** — Incorrect "I did not schedule a reminder" note appended after successful cron scheduling. No fix PR.
- **#57256** — `openclaw status` falsely reports mem0 memory as unavailable when working. No fix PR.
- **#62328** — node:sqlite missing FTS5 module breaks memory keyword search. Linked PR open.
- **#65624** — Mattermost slash commands default to cleartext callback URLs exposing tokens. Linked PR open.
- **#65538** — Screen readers announce every token during streaming (accessibility regression). No fix PR.
- **#64438** — Approvals lost on gateway restart showing confusing error. No fix PR.

Security-related bugs are concentrated around prompt injection, credential leakage, and hallucinated output — the most concerning being Discord tool-call leakage (#44905, P1, marked `needs-live-repro`) and the gh-issues skill injection (#45740, P2, `needs-security-review`). Multiple regressions were introduced in version 2026.3.13–2026.3.22, including the Chrome extension removal (#53599) and the scope-stripping issue (#51396).

## Feature Requests & Roadmap Signals

- **#50090** — Community Skill Development & ClawHub marketplace (3 months old, blocked on security and product decisions). Likely foundational for next major release if resolved.
- **#48874** — Multi-Session Architecture with shared LLM layer and isolated sessions (RFC, low priority). Unlikely soon given P1/P2 bug volume.
- **#64046** — Sensitive data masking in configs, logs, and UI (P1 enhancement). Shows strong enterprise/security demand.
- **#63930** — Anthropic advisor tool beta support (server-side tool). Early feature request for new Anthropic capability.
- **#63990** — Multi-index embedding memory with model-aware failover. Indicates growing production deployment needs.
- **#60572** — Multi-slot memory architecture (multiple concurrent memory providers). Community strongly upvoted (3 👍).
- **#58818** — Guarantee last N raw messages survive compaction/reset. Core usability feature for long-running sessions.
- **#56349** — Unbypassable outbound policy enforcement (pre-send guarantee). Security-focused, likely driven by enterprise adopters.
- **#52640** — Persistent task-status surface for long-running channel turns (Discord first). Community desire for better async UX.
- **#50739** — System event priority/bypass-queue mode for reliable in-session alerts. Operational reliability ask.
- **#50199** — Skill priority configuration. Common request from multi-skill deployments.
- **#64438** — Remote reranker endpoint support. Extends existing embedding-provider pattern.

Predictions: The Anthropic advisor tool (#63930) and memory multi-index (#63990) are plausible for the next release given they extend existing patterns. The skill marketplace (#50090) is high-impact but blocked on security review. The sensitive data masking (#64046) addresses a critical enterprise blocker and may be prioritized.

## User Feedback Summary

- **Trust & reliability pain points**: Users report the agent hallucinating follow-ups (#58450), cron jobs fabricating output on failure (#49876), subagents completing prematurely (#50165), and model switches failing silently (#58957). These undermine user trust in autonomous operation.
- **Memory & session management**: Multiple users report uncontrolled memory growth (#54155, #55334), session reset loops (#63216), and inconsistent memory behavior across team members (#43747). This suggests fundamental session lifecycle issues at scale.
- **Security concerns**: Community members flag credential leakage in Mattermost URLs (#65624), GitHub issue injection (#45740), Discord internal tool leakage (#44905), and cleartext API keys in configs (#64046). Enterprise users are demanding better security boundaries.
- **Configuration friction**: Environment variable expansion failures (#53628) and hardcoded developer paths (#51429) create a frustrating setup experience. Users express confusion when documentation describes features not in the release (#48920).
- **Channel-specific issues**: WhatsApp backfill (#50093), Telegram replay (#51628), and Discord tool leakage (#44905) show each channel adapter has unique reliability problems. Discord users particularly lack subagent progress visibility (#95604).
- **Accessibility**: The streaming aria-live bug (#65538) makes the Control UI unusable for screen reader users — a regression that blocks beta release.

## Backlog Watch

Long-open issues needing maintainer attention:

- **#43747** — *Memory management is in chaos* (created Mar 12, P2, regression). Three months old, marked `needs-maintainer-review`. No fix PR.
- **#44905** — *Discord leaks internal tool-call traces* (created Mar 13, P1, security). Over 3 months, marked `needs-live-repro`. No fix PR.
- **#45740** — *gh-issues skill: untrusted issue body injection* (created Mar 14, P2, security). Over 3 months, linked PR open but still needs product decision.
- **#48874** — *Multi-Session Architecture RFC* (created Mar 17, P2). No decision or review.
- **#50090** — *Community Skill Development & ClawHub* (created Mar 19, P2, security). Stalled at `needs-product-decision`.
- **#58450** — *Agent promises follow-up without starting action* (created Mar 31, P2, message-loss). 3 upvotes — strong community signal, no progress.
- **#55334** — *sessions.json unbounded growth → OOM* (created Mar 26, P1, crash-loop). No fix PR despite critical impact.
- **#54155** — *Gateway memory leak 389MB→14.7GB* (created Mar 25, P1, crash-loop). No fix PR.
- **#53599** — *Chrome extension removed without replacement* (created Mar 24, P1, regression, 5 👍). No fix PR — highest community upvote count among open issues.

These nine issues represent a systemic backlog: security, memory management, and cross-channel reliability problems that have been open for 3+ months without resolution. The high volume of `needs-maintainer-review` and `needs-product-decision` labels suggests the project's maintainer bandwidth is insufficient for its community growth.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — AI Agent Open-Source Ecosystem

## June 26, 2026

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing a **sustained development surge** across all major projects, with over 770 issues and 680 PRs updated in a single 24-hour period. While OpenClaw dominates raw activity metrics, the ecosystem shows clear stratification into a **mature core** (OpenClaw, IronClaw, Hermes Agent) with high-volume but stretched maintainer bandwidth, and **emerging challengers** (ZeroClaw, NanoBot) that demonstrate faster iteration cycles and stronger security posture. Three cross-cutting themes dominate: **security hardening** (supply chain signing, credential isolation, sandboxing), **multi-agent orchestration** (delegation policies, sub-agent lifecycle management), and **production reliability** (memory leaks, session management, crash-loop prevention). The competitive landscape is fragmenting along platform specialization (Discord, Telegram, Matrix) and deployment model (desktop vs. cloud vs. embedded), but converging on MCP (Model Context Protocol) as the standard integration interface.

---

## 2. Activity Comparison

| Project | Issues (Updated) | PRs (Updated) | Merged/Closed PRs | Release Today? | Health Score | Active Contributors |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 86 | No | ⚠️ Stretched | High (but backlogged) |
| **IronClaw** | 50 | 50 | 25 | No | ✅ Healthy | High |
| **Hermes Agent** | 50 | 50 | 19 | No | ✅ Healthy | High |
| **ZeroClaw** | 49 | 50 | 1 | No | ⚠️ Review bottleneck | Medium |
| **NanoBot** | 22 | 38 | 14 | No | ✅ Strong security response | Medium |
| **CoPaw** | 27 | 50 | 23 | No | ✅ Healthy | Medium (growing) |
| **PicoClaw** | 3 | 19 | 6 | No | ✅ Stable | Low |
| **NanoClaw** | 1 | 15 | 11 | No | ✅ Stable | Low |
| **LobsterAI** | 0 | 9 | 9 | No | ✅ Strong prioritization | Low |
| **NullClaw** | 0 | 0 | 0 | — | ❌ Inactive | 0 |
| **TinyClaw** | 0 | 0 | 0 | — | ❌ Inactive | 0 |
| **Moltis** | 0 | 0 | 0 | — | ❌ Inactive | 0 |
| **ZeptoClaw** | 0 | 0 | 0 | — | ❌ Inactive | 0 |

*Health Score reflects maintainer responsiveness, bug fix velocity, and community signal; not raw volume.*

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Largest ecosystem by volume** — 500+ issues/PRs per day; unmatched community engagement and third-party skill development
- **Broadest channel support** — Discord, Telegram, WhatsApp, Mattermost, Slack, GitHub issues; covers all major messaging platforms
- **Most mature skill marketplace** — Despite bugs (#50090), ClawHub is the ecosystem's only community skill distribution mechanism
- **Deepest plugin architecture** — 3+ years of skill/plugin framework evolution

**Technical Approach Differences:**
- **Monolithic core** — OpenClaw maintains a single large codebase with all adapters and skills. Contrast: ZeroClaw and NanoBot pursue microservice/WASM-based modularity. This makes OpenClaw harder to refactor but gives tighter integration.
- **Session-based persistence** — `sessions.json` with unbounded growth (#55334) vs. IronClaw's DB-backed architecture and ZeroClaw's WASM isolation. OpenClaw's approach is simpler but causes OOM under load.
- **Streaming-first UX** — Token-by-token streaming across all channels; no other project matches this fidelity, though it causes accessibility regressions (#65538).

**Community Size Comparison:**
- OpenClaw's daily activity (500+ items) exceeds IronClaw + Hermes Agent + ZeroClaw combined (~150 items)
- However, OpenClaw has **9 critical P1 bugs open for 3+ months** vs. IronClaw's <1-week turnaround on similar-severity issues
- Community trust is eroding: 3 heavily-upvoted trust/reliability issues (#58450, #63216, #55334) remain unresolved

**Key Risk:** OpenClaw is the ecosystem leader by volume but is **losing the reliability race**. IronClaw and Hermes Agent are shipping fixes within days for bugs that languish in OpenClaw for months. If the trend continues, power users may migrate to faster-moving alternatives.

---

## 4. Shared Technical Focus Areas

### Security Hardening
| Requirement | Projects Affected |
|---|---|
| Credential isolation / zero-knowledge proxies | **IronClaw** (#4656), **Hermes Agent** (#4432), **OpenClaw** (#44905) |
| Tool allowlist enforcement bypasses | **ZeroClaw** (#8279, S0), **NanoBot** (#4514-4522), **OpenClaw** (#45740) |
| Supply chain signing / provenance | **ZeroClaw** (#8177), **Hermes Agent** (iron-proxy) |
| Sensitive data masking in logs/UI | **OpenClaw** (#64046), **CoPaw** (#5535) |

### Memory & Session Management
| Requirement | Projects Affected |
|---|---|
| Unbounded session file growth → OOM | **OpenClaw** (#55334, #54155), **CoPaw** (#5520) |
| Context window management / compaction | **OpenClaw** (#63216), **Hermes Agent** (#39691 — Headroom.ai compression) |
| Multi-session architecture | **OpenClaw** (#48874), **PicoClaw** (#3142) |
| Persistent task status across restarts | **OpenClaw** (#52640), **Hermes Agent** (#19434) |

### Multi-Agent Orchestration
| Requirement | Projects Affected |
|---|---|
| Sub-agent delegation policies | **ZeroClaw** (#8238), **CoPaw** (#5523), **NanoBot** (#4414) |
| Agent-to-agent handoff with context | **ZeroClaw** (#8279 — fixed), **OpenClaw** (#52249) |
| Approval workflow state machines | **IronClaw** (#5192, #5196), **NanoClaw** (#2857), **NanoBot** (#4437) |

### Platform Parity
| Requirement | Projects Affected |
|---|---|
| Windows service / daemon stability | **OpenClaw** (#68936), **NanoBot** (#4511, #4513), **Hermes Agent** (#46260) |
| macOS on external volumes | **OpenClaw** (#90923), **NanoBot** (fixed via PR) |
| Linux desktop integration | **CoPaw** (#5528), **IronClaw** (#5222) |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | IronClaw | Hermes Agent | ZeroClaw | NanoBot | CoPaw |
|---|---|---|---|---|---|---|
| **Target User** | Hobbyist/power user | Enterprise/production | Developer | Security-conscious | Tinkerer | Chinese market |
| **Primary Platform** | Chat (all channels) | WebUI + API | Desktop (Electron) | CLI + WebUI | WebUI | Chat (QQ/DingTalk) |
| **Architecture** | Monolithic Python | Modular Rust/Python | Electron + Python CLI | Rust → WASM-first | Go + Python | Python + OpenClaw plugin |
| **Deployment Model** | `pip install` + config | Docker Compose | Desktop app + daemon | Binary download | `go build` | pip + plugin manager |
| **Security Posture** | Reactive (bugs open 3+mo) | Proactive (fixes in days) | Proactive (iron-proxy) | Leading (WASM sandbox) | Very responsive (hours) | Moderate |
| **Innovation Vector** | Skill ecosystem | Capability policies | MCP + security | WASM runtime | Security audit tooling | Multi-IM integration |
| **AI Provider Focus** | OpenAI-compatible | Anthropic + OpenAI | OpenAI + DeepSeek | OpenRouter multi-model | OpenAI-compatible | GLM family (Zhipu) |
| **Community Maturity** | Declining trust | High growth | Growing | Emerging | Young | Niche |

**Key Insight:** The ecosystem is **not competing on the same dimensions**. OpenClaw competes on channel breadth and skill count; IronClaw on production reliability and enterprise controls; ZeroClaw on security architecture; CoPaw on Chinese IM integration. The true competition will emerge when these projects mature enough for users to consider switching on the basis of reliability alone.

---

## 6. Community Momentum & Maturity

### Tier 1 — Rapidly Iterating (high velocity, improving quality)
| Project | Signal |
|---|---|
| **IronClaw** | 25 PRs merged/day; dogfooding cycle catches bugs within 24h; capability-policy epic signals enterprise readiness |
| **NanoBot** | 11 security bypasses reported and patched in same day — best security response time in ecosystem |
| **Hermes Agent** | Desktop crash fixed in <24h; 19 PRs merged; advisor audit gate (#52759) shows ML quality focus |

### Tier 2 — Stabilizing (high volume, fixing fundamental issues)
| Project | Signal |
|---|---|
| **CoPaw** | 23 PRs merged; Runtime 2.0 migration nearing completion; first-time contributors joining |
| **ZeroClaw** | RFC-driven development with strong community input; WASM-first direction is ambitious but slow to ship |

### Tier 3 — Stretched (high volume, low resolution velocity)
| Project | Signal |
|---|---|
| **OpenClaw** | 500+ items/day but only 86 merged; 9 critical bugs open 3+ months; maintainer bandwidth insufficient for community size |

### Tier 4 — Stable/Inactive
| Project | Signal |
|---|---|
| **PicoClaw, NanoClaw, LobsterAI** | Low activity, focused maintenance, no new features |
| **NullClaw, TinyClaw, Moltis, ZeptoClaw** | 0 activity — effectively unmaintained |

---

## 7. Trend Signals

### For AI Agent Developers

**1. Security is becoming the primary differentiator**
- 6 of 8 active projects had security vulnerabilities reported this week
- ZeroClaw's WASM sandbox and NanoBot's `fullmatch()` hardening represent the new baseline
- Tool allowlist bypass is the #1 vulnerability class — expect all projects to adopt full-path/regex matching soon
- *Takeaway:* If you ship an agent toolkit, invest in credential isolation before feature velocity

**2. Multi-agent orchestration is moving from experimental to production**
- Delegation policies, sub-agent lifecycle management, and approval workflows are being productionized simultaneously across 4 projects
- ZeroClaw's independent delegate mode (#8238) and OpenClaw's ACP parent-child fix (#52249) show convergence on handoff patterns
- *Takeaway:* Architect for delegation-first; expect your agent to spawn specialists as core behavior

**3. Platform lock-in is breaking down**
- MCP (Model Context Protocol) is the emerging standard — supported by OpenClaw, ZeroClaw, NanoBot
- Every project now supports multiple LLM providers with failover (OpenAI, Anthropic, DeepSeek, GLM, OpenRouter)
- *Takeaway:* Don't hardcode provider calls; build a model-agnostic routing layer

**4. Memory management is the unsolved scaling problem**
- 3 projects have critical memory leak bugs (OpenClaw #55334, CoPaw #5520, ZeroClaw #5903)
- Session compaction, unbounded growth, and orphan processes are universal pain points
- Hermes Agent's Headroom.ai integration (#39691) is the most promising approach
- *Takeaway:* Plan for 10x session growth from day one; don't rely on file-based persistence

**5. Chinese ecosystem projects are diverging from Western counterparts**
- CoPaw focuses on QQ/DingTalk/WeChat — channels invisible to Western projects
- LobsterAI targets GLM (Zhipu) models, not OpenAI Anthropic
- This fragmentation means multi-channel agents need China-specific adapters
- *Takeaway:* Treat Chinese IM as a separate integration track, not a port

**6. Desktop apps are the new frontier**
- Hermes Agent's Electron app and ZeroClaw's web dashboard with in-app upgrades (#8173) signal a shift from CLI-only
- Regression risks are higher: Hermes Agent's `simple-git` crash blocked all macOS users within hours of release
- *Takeaway:* If shipping desktop, invest in CI/CD for Electron/Rust bundling

**7. The "OpenClaw problem" — community growth outpaces maintainer capacity**
- OpenClaw has the most contributors but the slowest fix velocity
- This creates an opportunity for challengers (IronClaw, Hermes Agent) to capture frustrated power users
- *Takeaway:* Don't anchor ecosystem analysis on OpenClaw metrics alone; look at resolution velocity, not raw volume

---

*Report generated from community digest summaries dated 2026-06-26. Data reflects a single 24-hour window and may not represent long-term trends.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the NanoBot project digest for 2026-06-26.

---

## NanoBot Project Digest — 2026-06-26

### 1. Today's Overview
NanoBot experienced a **high-activity security response day**, with 11 new security vulnerabilities reported and multiple corresponding fix PRs opened in quick succession. Total activity was very high: **22 issues** and **38 PRs** were updated in the last 24 hours, with a roughly even split between new work and resolved items (11 issues closed, 14 PRs merged/closed). The maintainers demonstrated strong responsiveness, publishing fix PRs for many of the reported security bypasses on the same day they were disclosed. No new releases were cut today, suggesting the team is consolidating fixes for a planned patch release.

### 2. Releases
**None.** No new releases were published today.

### 3. Project Progress
**Merged/Closed PRs highlight:**
- **[#4493]** [fix] WebUI: WebM→WAV conversion for Xiaomi MiMo ASR transcription (Fixes #4492) — Resolved a provider-specific audio format incompatibility.
- **[#4497]** [bug] fix(dingtalk): Support rich text formatting and HTTP timeout — Fixed connectivity issues and unsupported message types in the DingTalk channel.
- **[#4488]** [bug, regression] Telegram web: “This message is not supported on the web version…” — A regression introduced by the rich messages feature was identified and closed.
- **[#4434, #4435]** Two earlier Security reports on MCP `enabledTools` bypasses were closed, likely superseded by the new batch of fixes.

**Features advanced (open PRs):**
- **MCP Security Hardening:** [#4524] applies `enabledTools` filtering to MCP resources and prompts, not just tool wrappers.
- **MCP Idle Auto-Kill:** [#4506] introduces an `idle_timeout` config to prevent zombie MCP server processes.
- **Subagent & Cron Enhancements:** Multiple PRs from `yu-xin-c` add subagent result aggregation ([#4414]), model override for spawn ([#4415]), cron job model presets ([#4416]), and a heartbeat trigger command ([#4437]).
- **General Fixes:** Stream delta coalescing with `_stream_id` ([#4531]), Anthropic content block validation ([#4532]), session key collision prevention ([#4533]), and tool call ID deduplication ([#4530]).

### 4. Community Hot Topics
The entire community’s attention today was on **security**. The user `YLChen-007` filed **9 separate security advisories**, covering multiple bypass patterns in the `exec` tool and MCP integration. These generated no new comments (typically security reports are filed with minimal discussion to avoid premature disclosure), but the maintainers reacted by opening corresponding fix PRs within hours.

**Top Issues (by security criticality, not comments):**
- **[#4519]** MCP `enabledTools` Scope Bypass — Resources and prompts exposed despite deny-all policy. Fix: [#4524].
- **[#4521]** `exec.allowPatterns` shell-chain bypass.
- **[#4518]** Default login-shell execution in `exec` reintroduces secrets from `.bashrc`.

**Top Feature Request (by implied interest):**
- **[#4508]** “Add `ask_clarification` tool” — Proposed by `ZhouJ-sh`. This suggests users want the agent to pause and ask a question when instructions are ambiguous, rather than guessing or failing silently. No PR yet, but high utility for reliability.

### 5. Bugs & Stability
**High-Severity (Security):**
1. **`exec.allowPatterns` Bypass via Chained Commands** ([#4514, #4515, #4520, #4521, #4522, #4516]) — Six distinct variants of allowlist bypass were reported, including shell-chaining (`; `), comment-tail stripping, and prefix wrapper attacks. Fix PR [#4526] changes `re.search()` to `re.fullmatch()` to prevent chaining. Also, a generic repeated-tool-call guard was added in [#4522].
2. **MCP `enabledTools` Bypass** ([#4519]) — Resources and prompts registered unconditionally even when `enabledTools` was empty. Fix in [#4524].
3. **Secrets Leak via Login Shell** ([#4518]) — `exec` defaulted to login-shell mode for `bash`, sourcing `.bashrc`/`.profile` and potentially exposing secrets to the LLM.

**Medium-Severity (Functional):**
- **Windows Service / Restart Issues** ([#4511, #4513]) — PID file mismatch and port binding conflicts when running as an NSSM service with `/restart`. Still open; no fix PR yet.
- **Telegram Web Unsupported Message Regression** ([#4488]) — Closed, but indicates a rich-message parsing issue that may recur.

**Low-Severity:**
- **Dream cursor never advances when disabled** ([#4242]) — Still open; causes all chat history to be injected into system prompt.

### 6. Feature Requests & Roadmap Signals
**Likely next version (v0.2.2 / hotfix):**
- Security patches for all `exec` and MCP bypasses — the volume of reports makes a point release almost certain.
- PWA support for WebUI ([#4494]) — Already in review, likely to land soon.
- MCP server idle timeout ([#4506]) — Prevents resource leaks, a clear quality-of-life win.

**Under consideration (longer horizon):**
- `ask_clarification` tool ([#4508]) — A new interaction pattern for ambiguous requests.
- Custom provider thinking/reasoning config for non-OpenAI APIs ([#4429]) — Closed as a feature request, likely needs a config extension in a future release.
- HVTracker trust badge ([#4503]) — A PR for readme transparency, merged or closed.

### 7. User Feedback Summary
- **Pain Point: Security Configuration Complexity.** Users are finding that `exec.allowPatterns` and `enabledTools` configurations are easily bypassed, leading to unexpected command execution. This suggests the configuration surface is error-prone and needs simpler semantics (e.g., full-path matching, default-deny).
- **Pain Point: Windows Support Gaps.** Issues [#4511] and [#4513] indicate that running NanoBot as a Windows service (NSSM) with the `/restart` command leads to PID conflicts and port binding failures. This is a stability issue for production Windows deployments.
- **Satisfaction: Responsive Maintainers.** The rapid opening of fix PRs (within hours of security reports) signals strong maintainer engagement and builds trust.
- **Use Case: Multi-Provider ASR.** The Xiaomi MiMo WebM→WAV fix ([#4492]) shows real-world interest in using diverse local/Chinese ASR providers with the WebUI.

### 8. Backlog Watch
The following items remain open and have received no recent maintainer attention despite potential impact:
- **[#4242]** (Disabling `dream.enabled` still injects all chat history) — Last updated 2026-06-08. This is a pollution-of-prompt bug that wastes context windows even when the Dream feature is off. No fix PR exists.
- **[#1710]** (No response generated by agent on Qwen 3.5) — Last updated 2026-06-25 (by comment), but the issue has been open since March 2026. This is a silent-failure bug that may be model-specific.
- **[#4198]** (Subagent `fail_on_tool_error` config) — Last updated 2026-06-25. A feature request to allow subagents to retry after minor tool errors. Has a conceptual fix but no merged PR.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — June 26, 2026

## Today's Overview

Hermes Agent experienced a highly active day with **50 issues updated** (37 open, 13 closed) and **50 pull requests updated** (31 open, 19 merged/closed) in the last 24 hours. Despite no new releases today, the project shows sustained development momentum with maintainers actively addressing a desktop crash regression (#52735, #52753) and merging fixes within hours of reporting. A significant security-focused feature — the iron-proxy credential-injection firewall for sandboxes (#30179) — continues to advance alongside a major README marketing overhaul (#52755). Community engagement remains high, with feature requests spanning credential proxy infrastructure (#4656), Telegram rich message support (#44428), and localization (#52137, #38846). Notably, 7 new PRs were opened today alone, indicating a strong contributor pipeline.

---

## Releases

No new releases were published today. The latest version remains **v0.17.0 (v2026.6.19)**. Users on this version should monitor issue #52735 (desktop crash after in-app update) and issue #52753 (Windows crash post-upgrade), both related to a missing `simple-git` module bundling issue resolved in PRs #52741 and #52745, likely targeting v0.17.1.

---

## Project Progress — Merged/Closed PRs Today

19 PRs were merged or closed today. Key advancements:

- **Desktop crash fix**: PR #52741 (`fix(desktop): bundle simple-git into the packaged app`) and PR #52745 (`desktop: bundle main.cjs for electron`) resolved the `Cannot find module 'simple-git'` crash on macOS and Windows. See [PR #52741](https://github.com/NousResearch/hermes-agent/pull/52741) and [PR #52745](https://github.com/NousResearch/hermes-agent/pull/52745).

- **Telegram polling reliability**: PR #52744 (`fix(telegram): persistent heartbeat loop to detect CLOSE-WAIT polling sockets`) addresses long-standing silent failures in Telegram gateways when TCP sockets enter CLOSE-WAIT state. See [PR #52744](https://github.com/NousResearch/hermes-agent/pull/52744).

- **DeepSeek tool-call repair**: PR #52747 (`fix(agent): repair DeepSeek double-serialized & trailing-content tool-call JSON`) fixes two of four known serialization failure patterns for DeepSeek models. See [PR #52747](https://github.com/NousResearch/hermes-agent/pull/52747).

- **Project branch name sanitization**: PR #52757 (`fix(projects): sanitize branch names to produce valid git refnames`) prevents invalid branch names with consecutive dots. See [PR #52757](https://github.com/NousResearch/hermes-agent/pull/52757).

- **MoA config tolerance**: PR #52758 (`fix(moa): tolerate non-numeric values in hand-edited MoA preset config`) handles user-edited configs with non-numeric temperature/token values. See [PR #52758](https://github.com/NousResearch/hermes-agent/pull/52758).

- **Advisor audit gate**: PR #52759 (`feat(agent): add advisor final audit gate v0`) introduces an evidence-based final-response audit gate (default disabled). See [PR #52759](https://github.com/NousResearch/hermes-agent/pull/52759).

- **Closed issues**: #49462 (stored prompt match fix), #41693 (desktop renderer crash fix), #48248 (billing provider COALESCE bug), #378 (here.now skill), #14185 (todo_tool AttributeError), #43719 (malicious plugin security advisory), #48071 (Nix systemd unit fix), #52023 (OpenAI encrypted content model error), #48173 (stale model prompt), #52695 (table copy/paste styling).

---

## Community Hot Topics

The following issues and PRs generated the most community discussion today:

1. **Issue #4656** — [Feature]: credential proxy daemon — zero-knowledge HTTP/HTTPS broker for agent credentials *(11 comments, 1 👍)*  
   See [Issue #4656](https://github.com/NousResearch/hermes-agent/issues/4656)  
   *Analysis*: This feature request for a credential broker builds on recent PID namespace isolation (#4432). The community is pushing for practical zero-knowledge architectures where even if a sandbox is compromised, attacker cannot exfiltrate API keys. This signals demand for production-grade security boundaries beyond namespace isolation.

2. **Issue #52735** — [Bug]: Desktop app crashes on launch — Cannot find module 'simple-git' *(8 comments, 1 👍)*  
   See [Issue #52735](https://github.com/NousResearch/hermes-agent/issues/52735)  
   *Analysis*: A critical regression affecting macOS users after in-app updates. The missing `simple-git` module in the Electron bundle was the root cause. Two parallel PRs merged today — this was the most disruptive bug of the week.

3. **Issue #39691** — [Feature]: feat(compression): integrate headroom-ai for tool output compression *(8 comments, 10 👍)*  
   See [Issue #39691](https://github.com/NousResearch/hermes-agent/issues/39691)  
   *Analysis*: The most-upsvoted open feature request. The community strongly desires granular, per-tool context compression rather than conversation-level summarization. Headroom-ai integration would reduce token waste from large tool outputs — a clear pain point for heavy automation users.

4. **Issue #8552** — Slack platform: use Block Kit markdown block type instead of legacy mrkdwn *(8 comments, 9 👍)*  
   See [Issue #8552](https://github.com/NousResearch/hermes-agent/issues/8552)  
   *Analysis*: Long-running request (opened April 12) to support modern Slack formatting including markdown tables. High demand from enterprise Slack users.

5. **PR #52756** — [Open]: feat(delegation): calm "will resume" affordance for background delegate_task *(opened today)*  
   See [PR #52756](https://github.com/NousResearch/hermes-agent/pull/52756)  
   *Analysis*: UX enhancement for background task delegation that shows a "will resume" message. Responds to user confusion when subagents run silently.

---

## Bugs & Stability

### Critical / P1 Issues

- **Desktop launch crash — macOS + Windows** (#52735, #52753): `Cannot find module 'simple-git'` after in-app update / fresh install of v0.17.0. **FIXED** via PR #52741 and #52745. See [Issue #52735](https://github.com/NousResearch/hermes-agent/issues/52735) and [dup Issue #52753](https://github.com/NousResearch/hermes-agent/issues/52753).

- **Telegram silent failures** (#48495 root cause): Telegram polling gateway goes permanently silent when long-poll TCP socket enters CLOSE-WAIT. PR #52744 now active. See [PR #52744](https://github.com/NousResearch/hermes-agent/pull/52744).

- **DeepSeek tool-call JSON failures** (#52740): Two patterns remain (out of four) unrepaired — tool calls as escaped JSON strings and trailing-content inclusion. PR #52747 fixes patterns 2 and 4. See [Issue #52740](https://github.com/NousResearch/hermes-agent/issues/52740).

- **OpenAI /v1/responses message flood** (#52711): `status=incomplete` on NVIDIA inference endpoint causes 60 near-identical messages per turn. Needs-repro status. See [Issue #52711](https://github.com/NousResearch/hermes-agent/issues/52711).

- **Curator archives active skills** (#29912): P1 session-state risk — curator archives operationally critical skills during umbrella pass without verified consolidation. Open since May 21. See [Issue #29912](https://github.com/NousResearch/hermes-agent/issues/29912).

- **session_search recall failures** (#19434): Four bugs including JSON/SQLite split-brain and hidden child sessions. P1 cross-session recall broken. Open since May 4. See [Issue #19434](https://github.com/NousResearch/hermes-agent/issues/19434).

- **Desktop pool backends orphaned** (#46778): Electron app leaks Python dashboard processes reparented to launchd. P3 but system-wide resource leak. Open since June 15. See [Issue #46778](https://github.com/NousResearch/hermes-agent/issues/46778).

### Medium / P2 Issues

- **Windows installer failure** (#46260): `npm install` exit code 1 at desktop stage on Windows 10. See [Issue #46260](https://github.com/NousResearch/hermes-agent/issues/46260).

- **Nix build collisions** (#43810): Hard-fail when extraPythonPackages contains deps already in sealed venv. See [Issue #43810](https://github.com/NousResearch/hermes-agent/issues/43810).

- **LSP memory leak** (#52751 PR): `LSPService` accumulates stale LSP clients (~4 GB RAM after 15 hours). PR #52751 submitted today. See [PR #52751](https://github.com/NousResearch/hermes-agent/pull/52751).

---

## Feature Requests & Roadmap Signals

High-signal feature requests from today:

| Feature | Issue | Votes | Likelihood for Next Release |
|---|---|---|---|
| Credential proxy daemon (zero-knowledge broker) | #4656 | 1 👍 | **Medium** — builds on recent security work, maintainer engagement |
| Headroom-ai tool output compression | #39691 | 10 👍 | **High** — highest upvoted, clear pain point, strong community support |
| Russian (ru-RU) localization | #52137 | 0 👍 | **Low** — but aligns with existing i18n skeleton in #38846 |
| Telegram Rich Messages (Bot API 10.1) | #44428 | 5 👍 | **High** — timely for new API feature, Telegram is core platform |
| Upload progress feedback for large files | #46454 | 0 👍 | **Low-Medium** — UX gap affecting all platforms |
| Dashboard `--allowed-hosts` for reverse proxy | #34390 | 0 👍 | **Medium** — security hardening for deployment scenarios |
| Disable toolset per messenger platform | #52597 | 0 👍 | **Low** — niche use case, Matrix-specific |
| Discord oversized video preflight + fallback | #50846 | 0 👍 | **Low-Medium** — Discord is major platform, UX gap |

Likely candidates for v0.17.1 or v0.18.0: **headroom-ai compression** (high community demand + clear integration path), **Telegram Rich Messages** (API just released June 11), and **credential proxy** (security trend). The **marketing README overhaul** (#52755) opened today may land quickly as a non-functional improvement.

---

## User Feedback Summary

**Pain Points (Negative Signal)**

1. **Desktop update regression**: Multiple macOS and Windows users reported that in-app Hermes updates to v0.17.0 broke the desktop app entirely (`simple-git` missing). User frustration high — both issues #52735 and #52753 report fresh installs and app reinstall attempts. *(Resolved in today's PRs.)*

2. **OpenAI / NVIDIA endpoint message flood**: User @acoastalfog reported that a single `status=incomplete` response generated ~60 near-identical messages. Described as "fans one turn into ~60 near-identical messages." Severity: user experience catastrophic for messaging platforms.

3. **Dashboard chat crashing after update**: User @orcolabs-admin reported React error #301 in dashboard chat after update (Issue #36658). Still open since June 1 — a month-old regression.

4. **Nix install complexity**: Users @tbaumann and @nikhilmaddirala report build failures (#43810) and systemd unit misconfiguration (#48071). Nix path remains fragile for new users.

**Satisfaction / Positive Signals**

- High community engagement with feature requests (10 👍 on compression, 9 👍 on Slack Block Kit).
- Quick turnaround on desktop crash: two fix PRs merged same day as bug report.
- DeepSeek tool-call repair (#52747) shows responsiveness to provider-specific model quirks.
- Telegram heartbeat loop fix (#52744) addresses a "silent failure" — users will notice when it's fixed but didn't know to report it.

**Underlying User Needs**

1. **Stability after updates**: Users strongly prefer breaking desktop updates to be tested before release. The `simple-git` bundling oversight suggests a CI/CD gap for Electron packaging.
2. **Cross-platform parity**: Windows installer (#46260), Nix builds (#43810), and macOS desktop (#52735) all indicate platform-specific regressions are common pain points.
3. **Silent failures**: The Telegram CLOSE-WAIT bug and OpenAI incomplete-status issue are "silent" problems — users don't realize messages aren't being delivered. This erodes trust in the platform.

---

## Backlog Watch

Issues and PRs requiring maintainer attention:

| Issue / PR | Status | Age | Why Important |
|---|---|---|---|
| **#29912** — Curator archives active skills (P1) | Open since May 21 | 36 days | Critical session-state bug — skills can be lost during umbrella consolidation |
| **#19434** — session_search recall failures (P1) | Open since May 4 | 53 days | Core retrieval broken: JSON/SQLite split-brain + hidden child sessions. Longest-open P1 |
| **#36658** — Dashboard chat broken (P2) | Open since June 1 | 25 days | React error — affects Web UI users. One month without resolution |
| **#8552** — Slack Block Kit markdown (P2) | Open since April 12 | 75 days | Longest-open high-vote feature request (9 👍). Enterprise Slack users blocked |
| **Context compression #39691** (10 👍) | Open since June 5 | 21 days | Highest-voted open request — clear signal of user need |
| **#43810** — Nix build collisions (P2) | Open since June 10 | 16 days | Blocks NixOS deployment for plugin users |
| **#46260** — Windows installer failure (P2) | Open since June 14 | 12 days | Blocks Windows deployment |
| **#46778** — Desktop pool orphaned backends (P3) | Open since June 15 | 11 days | System resource leak — 1+ leaked Python process per profile per idle-reap cycle |

**Maintainer gap analysis**: The longest-open P1 issues (#29912 and #19434) both impact core functionality — skill management and cross-session recall. Their 36+ day lifespan suggests either high reproduction complexity or insufficient maintainer bandwidth for deep architectural debugging. The Nix and Windows platform issues (#43810, #46260) indicate platform maintainers may be understaffed. The Slack Block Kit request (#8552) at 75 days with 9 👍 signals a potential enterprise adoption blocker that maintainers may want to prioritize.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the PicoClaw project digest for 2026-06-26.

---

## PicoClaw Project Digest | 2026-06-26

### 1. Today’s Overview
The PicoClaw project showed high activity over the last 24 hours, with 19 Pull Requests (PRs) updated and 3 Issues updated. While no new releases were published, the maintainers and community closed 6 PRs and 2 Issues, indicating a strong focus on bug fixing and code stability. The project is currently handling a moderate flow of dependency updates and targeted bug fixes, with a healthy balance between open feature work and closed tickets.

### 2. Releases
**No new releases were published in the last 24 hours.**

### 3. Project Progress
Six PRs were merged or closed in the last 24 hours, demonstrating focused progress on stability and core functionality:

- **[Closed] [PR #3169](https://github.com/sipeed/picoclaw/pull/3169):** **fix(evolution): skip cold path for heartbeat turns** – Prevents draft-mode evolution from consuming tokens on periodic heartbeat checks. Includes a regression test.
- **[Closed] [PR #3168](https://github.com/sipeed/picoclaw/pull/3168):** **fix(model): handle error response read failures** – Improves error reporting when fetching OpenAI-compatible model lists fails.
- **[Closed] [PR #3166](https://github.com/sipeed/picoclaw/pull/3166):** **fix(openai_compat): use structured logger** – Replaces a `log.Printf` call with the project’s existing structured logger, fixing a build failure.
- **[Closed] [PR #3092](https://github.com/sipeed/picoclaw/pull/3092):** **fix(skills_install): add ok checks for version and force type assertions** – Fixes silent failures during skill installation due to missing type assertion checks.
- **[Closed] [PR #3145](https://github.com/sipeed/picoclaw/pull/3145):** **build(deps): bump github.com/github/copilot-sdk/go** – Dependency update from v0.2.0 to v1.0.2.
- **[Closed] [PR #3045](https://github.com/sipeed/picoclaw/pull/3045):** **fix(identity): allow_from fallthrough for Matrix user IDs with colon** – Fixes a bug where Matrix users with standard IDs (e.g., `@alice:example.com`) were incorrectly blocked.

**New open features under development:**
- **[PR #3063](https://github.com/sipeed/picoclaw/pull/3063):** Add a Delta Chat gateway (new channel integration).
- **[PR #3118](https://github.com/sipeed/picoclaw/pull/3118):** Add a remote Pico WebSocket mode for the agent CLI.

### 4. Community Hot Topics
- **[Issue #1757](https://github.com/sipeed/picoclaw/issues/1757) [Closed]** – "channel error when scheduling tasks every hour" (10 comments). *Analysis:* This indicates ongoing friction with the Cron/Channel system for scheduled tasks. The high comment count suggests user confusion or complexity in error messages. This is a significant quality-of-life issue for users relying on PicoClaw as a scheduled assistant.
- **[Issue #3088](https://github.com/sipeed/picoclaw/issues/3088) [Open]** – "use vodozemac instead of libolm" (3 comments, 2 👍). *Analysis:* This is a high-priority security and maintenance request to replace an unmaintained cryptographic library. The low comment count but high impact indicates a clear, agreed-upon need with minimal debate.

### 5. Bugs & Stability
| Severity | Issue/PR | Description | Status |
| --- | --- | --- | --- |
| **High** | **[Issue #1757](https://github.com/sipeed/picoclaw/issues/1757)** | Channel error when agent performs hourly tasks. Bothered a user on a Raspberry Pi Zero W. | **Closed** (fix not identified in data) |
| **High** | **[Issue #3012](https://github.com/sipeed/picoclaw/issues/3012)** | Continuous token consumption every minute when "Evolution" is enabled. | **Closed** (fix likely in PR #3169) |
| **Medium** | **[PR #3172](https://github.com/sipeed/picoclaw/pull/3172)** | Fixes for ignoring `Close()` errors in retry loops to prevent misleading error returns. | **Open** |
| **Medium** | **[PR #3170](https://github.com/sipeed/picoclaw/pull/3170)** | Fixes base64 encoder resource leak on `io.Copy` error path. | **Open** |
| **Medium** | **[PR #3171](https://github.com/sipeed/picoclaw/pull/3171)** | Fixes potential panic in LINE channel `Send` method due to missing type assertion checks. | **Open** |

**Top stability priority:** The token consumption bug (Issue #3012) appears addressed by the merged heartbeat fix (PR #3169). The remaining open bug fixes focus on resource management and error handling.

### 6. Feature Requests & Roadmap Signals
- **[Issue #3088](https://github.com/sipeed/picoclaw/pull/3088):** Replace `libolm` with `vodozemac` (High Priority). **Prediction:** Likely to be included in the next minor release (v0.3.x) as a security-critical dependency upgrade.
- **[PR #3063](https://github.com/sipeed/picoclaw/pull/3063):** Delta Chat gateway integration. **Prediction:** Moderate likelihood for next version; requires review and integration testing.
- **[PR #3118](https://github.com/sipeed/picoclaw/pull/3118):** Remote WebSocket mode for the agent CLI. **Prediction:** High likelihood for next version as it enhances the developer/agent interaction model without breaking changes.
- **[PR #3142](https://github.com/sipeed/picoclaw/pull/3142):** Fix duplicate messages on async sub-agent completion. **Prediction:** High priority for inclusion due to its impact on user experience with multi-agent workflows.

### 7. User Feedback Summary
- **Pain Point (Cron/Scheduling):** Users are struggling with clear error messages when setting up cron-like tasks (Issue #1757). The "channel error" is vague, causing frustration on resource-constrained devices.
- **Pain Point (Cost/Resource Waste):** The Evolution feature is causing unexpected token spending by running on every heartbeat (Issue #3012, fixed in PR #3169). Users expect "draft mode" to be more energy/cost-efficient.
- **Satisfaction Indicator:** The response to the vodkaemac library request (Feature #3088) shows that the community is security-conscious and appreciates the maintainers' prioritization of security updates (tagged "priority: high").

### 8. Backlog Watch
- **[Issue #3088](https://github.com/sipeed/picoclaw/issues/3088) (Open, 17 days stale):** While tagged "priority: high" and "help wanted," this critical security issue has no assignee and minimal recent activity. If the maintainers do not pick this up, it could become a blocker for users requiring secure Matrix communication.
- **[PR #3142](https://github.com/sipeed/picoclaw/pull/3142) (Open, 9 days stale):** A fix for duplicate messages in sub-turn scenarios. This has no comments from maintainers. Silence on a bug that affects core conversation flow could indicate resource constraints.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-26

## Today's Overview
NanoClaw saw unusually high activity today with 15 PRs updated in the last 24 hours and 11 of those merged or closed, reflecting a strong push toward stability and feature completion. The single open issue (#2857) raises a meaningful multi-admin approval gap that could affect enterprise deployments. No new releases were cut, but the volume of merged fixes—particularly around security, migration, and container reliability—suggests an upcoming release is being prepared. Overall, the project is in a healthy, active maintenance and enhancement phase with good contributor throughput.

## Releases
*None. No new versions were published in the reporting period.*

## Project Progress
11 PRs were merged or closed today, spanning several areas:

**Security & Stability**
- [#2817] **fix(security): confine send_file reads to workspace** — Replaced a prior fix with stricter canonical-path validation using `realpath`, blocking symlink escapes and sanitizing filenames before writes. *Merged*
- [#2815] **fix(router): guard safeParseContent against primitive JSON** — Prevents routing errors when primitive JSON values (numbers, arrays) are passed; only parsed objects are returned. Includes regression test. *Merged*
- [#2813] **fix(cli): count socket response cap by bytes** — Fixes an under-counting bug where UTF-8 multi-byte characters could bypass the response byte cap. *Merged*
- [#2854] **fix(onecli): redirect TMPDIR so gateway CA mounts into containers on macOS** — Resolves self-signed certificate errors on Rancher Desktop by ensuring CA bundles are mountable. *Merged*

**Approvals & Auth**
- [#2832] **feat(approvals): reject with reason** — Third button added to approval cards: "Reject with reason…" relays a one-line explanation back to the agent so it can adapt. *Merged*
- [#2855] **feat(auth): subscription-primary credential posture with API-key failover** — OAuth (Claude subscription) becomes primary; `ANTHROPIC_API_KEY` is a hot standby with operator alerts on failover. *Merged*

**Infrastructure & Container Management**
- [#2856] **feat(container): per-container CPU/memory limits (opt-in)** — Two new env knobs (`CONTAINER_CPU_LIMIT`, `CONTAINER_MEMORY_LIMIT`) to prevent one agent from monopolizing host resources. *Merged*
- [#2830] **fix(setup): reap dead peer service registrations whose binary is gone** — Cleans up stale launchd/systemd units after deleting a checkout without uninstalling. *Merged*

**Migrations & Data**
- [#2859] **fix(migrate-v2): don't SELECT is_main from v1 registered_groups** — [OPEN] Critical migration fix for older v1 installs (1.1.0) that lack the `is_main` column; prevents cascade failures into sessions and tasks.

**New Skills**
- [#2843] **feat: add /learn skill** — Distills a reusable skill from any source (directory, URL, pasted text) and saves it to `.claude/skills/`. *Merged*

**Channel/Router**
- [#2472] **feat(slack): per-message thread for top-level posts in per-thread sessions** — Each top-level DM becomes its own session with threaded replies. *Closed*
- [#2471] **feat(router): per-channel threadId rewrite for per-thread sessions** — Adapter hook enabling the Slack fix; no user-facing change. *Closed*

## Community Hot Topics
**Most active discussion (by PR count):** The three open PRs from community contributor `mksocial19-code` (#2858, #2795) and `CutSnake01` (#2824) represent the most sustained engagement, with multiple replacement/follow-up PRs undergoing maintainer review cycles.

- [#2857] **approval should support multi admins and terminal cli approvals** — Zero comments yet, but addresses a real pain point: if the sole admin is unavailable, approval workflows deadlock. The suggestion of terminal CLI fallback for machine owners is pragmatic.
- [#2824] **[OPEN] fix: drop stale "Global Memory" instruction from main seed prompt** — Contributor `CutSnake01` identified outdated instructions persisting in the default prompt, which could confuse LLM agents.

Underlying need: The activity around approval (#2857, #2832) shows a community pushing toward multi-operator, enterprise-grade workflows with auditability and fallback mechanisms.

## Bugs & Stability
**High severity (no known fix PR):**
- [#2857] Multi-admin approval gap — If the sole admin is unreachable, approval deadlocks completely. No fix PR open yet.

**Medium severity (fix in review/merged today):**
- [#2859] **Migration crash on older v1 installs** — `SELECT is_main` from a table that didn't exist in v1.1.0 causes total migration failure. *Open PR #2859 exists, no merge yet.*
- [#2817] **Path traversal in send_file** — Could read files outside `/workspace` via symlinks. *Fix merged today.*
- [#2815] **Router crash on primitive JSON** — Non-object JSON values could bypass routing logic. *Fix merged today.*
- [#2813] **CLI socket response cap bypass** — Multi-byte UTF-8 chars under-counted, potentially exceeding limits. *Fix merged today.*

**Low severity (fixes merged):**
- [#2854] macOS+Rancher Desktop SSL failures from TMPDIR misconfiguration — *Fix merged.*
- [#2830] Orphaned launchd/systemd units accumulating — *Fix merged.*

## Feature Requests & Roadmap Signals
Three strong signals for the next release:

1. **Multi-admin approval (#2857)** — Likely to be prioritized given the enterprise use case; expect a PR within 2 weeks. Could appear in v2.2.0 alongside the "reject with reason" feature (#2832) already merged.
2. **Resource limits for containers (#2856)** — Already merged; will ship in the next release. Enables multi-agent hosting on shared machines without resource starvation.
3. **Subscription-primary auth (#2855)** — Merged; improves reliability for users who rely on OAuth login but want API-key fallback. Reduces silent outages.

**Prediction:** The next NanoClaw release (likely v2.2.x) will bundle the migration fix (#2859), container limits (#2856), auth posture (#2855), and the new `/learn` skill (#2843).

## User Feedback Summary
**Pain points addressed today:**
- *"Migration fails on older v1 installs"* → PR #2859 (open) directly addresses this regression
- *"Approval rejection is a black box for agents"* → #2832 adds reject-with-reason, giving agents actionable feedback
- *"One agent can consume all host resources"* → #2856 adds CPU/memory caps
- *"macOS/Rancher Desktop SSL errors"* → #2854 fixes TMPDIR handling

**Pain points still open:**
- *"Single admin approval bottleneck"* → #2857 remains open with no fix in progress
- *"Stale 'Global Memory' instruction confuses agents"* → #2824 proposes dropping the outdated prompt line, still open

**Satisfaction signals:** The high merge rate (11/15 PRs closed) and the community's willingness to submit replacement PRs (e.g., #2858 replacing #2795, #2817 replacing #2799) indicate a responsive maintainer team that values quality—contributors are iterating based on feedback.

## Backlog Watch
- [#2795] **feat: add /add-clidash** — Open since June 17 (9 days). Awaiting merge after replacement PR #2858 was submitted with requested fixes. The maintainer's requested changes appear to be addressed; this may merge soon.
- [#2824] **fix: drop stale "Global Memory" instruction** — Open since June 20 (6 days). A low-risk, clean fix that removes a confusing prompt artifact. Has 0 comments; could benefit from maintainer sign-off.
- [#2857] **Multi-admin approvals** — Only 1 day old, but no assignee or milestone. Given the enterprise impact, should be triaged promptly.
- [#2859] **Migration v2 fix** — Open since June 25 (1 day). High priority: blocks installation for users upgrading from NanoClaw 1.1.0 or earlier. No merging activity yet.

**Maintainer attention needed:** Three of the four open PRs (#2795, #2824, #2859) are from community contributors awaiting review/merge. #2857 is a feature request, not a PR, but warrants a maintainer response to guide implementation.

---

*Generated from GitHub data as of 2026-06-26*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-26

## Today's Overview

IronClaw shows **high development velocity** with 50 issues and 50 PRs updated in the last 24 hours, balanced evenly between open/active work (33 issues, 25 PRs) and closed/merged items (17 issues, 25 PRs). No new releases were published today. Activity is concentrated on the **Reborn stack** — the next-generation architecture — with significant infrastructure work around persistence performance, capability policy, and memory systems. Dogfooding continues to surface critical UX and tool approval bugs, while a major memory-as-extension PR (#5205) and a capability-policy epic (#5261) signal the project's push toward multi-tenant readiness. **Assessment: Very active, production-focused development phase with heavy refactoring and regression hunting.**

## Releases

No new releases today.

## Project Progress — Merged/Closed PRs Today (25 total)

### Major Fixes & Feature Work
- **#5222** — Fixed triggered-run Slack delivery failures for runs parked in `BlockedApproval`/`BlockedAuth` states (contributor: **henrypark133**)
- **#4997** — Added host-side binary document extraction seam (PDF/PPTX/DOCX/XLSX) for `google-drive.download_file` (contributor: **zetyquickly**)
- **#5223** — Bulk dependency bump (46 updates) including `agent-client-protocol` to v1.0.0 and `rustls` security patches (contributor: **dependabot[bot]**)
- **#5210** — Fixed repeated warnings and lost message state when sending new messages during an open approval gate
- **#5211** — Fixed auto-scroll for new streaming responses in conversation UI
- **#5208** — Fixed frozen message input while awaiting agent response
- **#5212** — Added consistent message timestamps in conversation UI
- **#5229** — Fixed durable capability display previews using runtime owner scope in WebUI runs (`unknown thread` error)
- **#5243** — Fixed "Approve & always allow" not persisting tool permission to Settings > Tools
- **#5242** — Fixed operator-only tools error on Settings page for WebUI users
- **#5129** — Investigated/resolved "Always approve" not working for `outbound_delivery_target_set`
- **#5028** — Made denied activity IDs explicit and stable (follow-up from #4978)
- **#4980** — Added automation creation guidance to empty state
- **#2919** — Widened log target column to prevent module path truncation
- **#3669** — Engine v2: exposed channel-supplied thread/response IDs to tools for correlation
- **#3548** — Added `DISABLE_TOOLS_LIST` flag with security regression testing

## Community Hot Topics

### Most Active Issues

1. **#5119 — IronClaw Reborn Local Dogfooding Findings (06/22-06/28)**
   - Author: **think-in-universe** | 1 comment
   - Tracks all issues found during local Reborn WebUI exercise; umbrella for 8+ child issues
   - [View Issue](https://github.com/nearai/ironclaw/issues/5119)

2. **#5192 — Denying tool approval can still lead to additional approval requests (Reborn)**
   - Author: **sunglow666** | 1 comment
   - Approval flow state machine defect: denial should terminate the chain but doesn't
   - [View Issue](https://github.com/nearai/ironclaw/issues/5192)

3. **#5196 — "Ask each time" tool permission fails with authorization error, triggers duplicate approval**
   - Author: **sunglow666** | 1 comment
   - Core UX regression: approved tools error out, creating confusing re-authorization loop
   - [View Issue](https://github.com/nearai/ironclaw/issues/5196)

4. **#5242 — Tools page shows operator-only tools error for WebUI users**
   - Author: **think-in-universe** | 1 comment (CLOSED)
   - Settings page permissions bug for regular users — already fixed today
   - [View Issue](https://github.com/nearai/ironclaw/issues/5242)

### Most Active PRs

1. **#5094 — `/v1/models`, model validation, external-tool gate foundation** (XL, core)
   - Author: **ilblackdragon** | Latest comment today
   - OpenAI-compatible surface; no production behavior change yet
   - [View PR](https://github.com/nearai/ironclaw/pull/5094)

2. **#5234 — Remove per-record lock convoys via shared `cas_update` helper** (XL, core)
   - Author: **henrypark133** | Latest comment today
   - Fixes performance meltdown under burst: redundant in-process serialization removed
   - [View PR](https://github.com/nearai/ironclaw/pull/5234)

3. **#5205 — Model memory as a userland extension (implements #3537)** (XL, experienced)
   - Author: **BenKurrek** | Latest comment today
   - Major architecture: Extension Manifest v2, source-aware trust, native document-store provider
   - [View PR](https://github.com/nearai/ironclaw/pull/5205)

### Underlying Needs
- **User friction around tool approvals** dominates: duplicate flows, non-persistent "always allow," error loops. Users need reliable, predictable approval UX.
- **Automation reliability** is a top concern: failed scheduled runs ("No thread attached"), blocked delivery, invisible failure states.
- **Multi-user/enterprise readiness** is driving the capability-policy epic (#5261) — admins need per-user tool/skill permissions.

## Bugs & Stability

### Critical
- **#5276** — "No thread attached" causes all scheduled automations to fail with 0% success rate. Root cause unknown; automation system is non-functional for this user.
- **#5192** — Denying tool approval can still trigger additional approvals. Approval state machine defect under active investigation.

### High
- **#5196** — "Ask each time" tools fail with authorization error after approval, triggering duplicate flow.
- **#5243** — "Approve & always allow" does not persist (fix PR exists, merged today).
- **#5210** — Sending messages during open approval gate causes repeated warnings and lost state (merged today).
- **#5253** — Heartbeat lease synchronous Postgres writes create scalability bottleneck (design fix proposed).

### Medium
- **#5229** — Durable capability previews fail with `unknown thread` in WebUI runs (merged today).
- **#5191** — Internal skill activation/debug messages exposed in chat UI.
- **#5208** — Frozen message input during agent response (merged today).
- **#5211** — Streaming responses not auto-scrolling (merged today).
- **#5250** — Forever-hangs and gate-parked-run kills due to incomplete terminal-state predicates (PR open).

### Low
- **#5275** — Doubled `/v2/` basename in chat Logs link (PR open).
- **#5234** — Per-record lock convoys causing performance degradation under burst (PR open).

## Feature Requests & Roadmap Signals

### Under Active Development
- **Capability Policy Epic (#5261)** — Multi-user tool/skill authorization with admin-gated permissions, per-user availability, and DB-backed roles. 7+ child issues created today, PRs for user roles (#5270) and default-policy source (#5263) already open. Likely next major feature.
- **Memory as Extension (#3537 / #5205)** — Extension Manifest v2 architecture enabling third-party memory providers, source-aware trust. PR #5205 implements bulk. Follow-ups tracked in #5264 and #5260.
- **Write Caching/Batching** — PRs #5257 (batch durable event-log appends) and #5253 (lease write-behind) address infrastructure scalability. A planned optimization layer.
- **OpenAI-Compatible API Surface** — PR #5094 adds `/v1/models`, model validation, external-tool gate foundation. Future-proofing for ecosystem compatibility.

### Predicted for Next Release
1. Capability-policy admin REST surface + multi-user auth (child issues of #5261)
2. Memory extension manifest v2 finalization (#5264 follow-ups)
3. Lock-convoy removal (#5234) and write-behind coalescing (#5257)
4. Durable Slack conversation bindings (#5252)
5. Google Drive binary document extraction (#4997, already merged)

## User Feedback Summary

### Pain Points
- **Approval workflow is broken in multiple ways**: approvals not persisting (#5243), duplicate flows after denial (#5192), authorization errors after approval (#5196), and input freezing during pending approvals (#5208)
- **Automations are unreliable**: scheduled runs fail silently with "No thread attached" (#5276); blocked runs never complete delivery (#5222, now fixed)
- **UI polish gaps**: internal debug messages exposed to users (#5191), missing auto-scroll (#5211, fixed), no timestamps (#5212, fixed), frozen inputs (#5208, fixed)
- **Onboarding friction**: empty automation state offers no guidance (#4980, fixed), Settings page shows confusing errors to regular users (#5242, fixed)

### Satisfaction Signals
- **Rapid bug turnaround**: Most UX bugs reported during dogfooding are fixed within 1-2 days
- **Infrastructure investment**: Active work on persistence, batching, and scalability shows production focus
- **Transparent roadmapping**: The capability-policy epic and memory extension work are well-documented with clear child issues

## Backlog Watch

### Issues Needing Maintainer Attention
- **#5276** — Scheduled automation "No thread attached" failure (opened today, 0% success rate) — **Critical blocker for any automation users**
- **#5173** — Daily failure taxonomy (deepseek-v4-flash) — 115 non-pass tests dominated by benchmark defects — needs triage
- **#5220** — Daily failure taxonomy (2026-06-25) — 126 non-pass tests on pinchbench, infrastructure issues — needs triage
- **#5221** — Ironclaw harness backlog (9 candidates, 0 hillclimb steps spent) — standing automation stalled
- **#5191** — Internal skill activation messages in chat UI — UX regression for automation users

### Stale Items
- **#5192** — Denying tool approval leads to additional requests (opened 2026-06-24, no fix PR yet)
- **#5196** — "Ask each time" authorization error loop (opened 2026-06-24, no fix PR yet)
- **#5253** — Heartbeat lease write-behind (backlog from write caching audit, no implementation PR)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for June 26, 2026.

---

## LobsterAI Project Digest — 2026-06-26

### 1. Today's Overview
The project is in a high-velocity maintenance and stabilization phase. While there were no new releases, the team merged 9 pull requests in the last 24 hours, demonstrating a strong push to resolve technical debt and improve reliability. Activity focused entirely on the **OpenClaw** plugin architecture and the **Cowork** (collaborative agent) mode, with specific attention to preventing duplicate messages, fixing state synchronization, and ensuring robust plugin loading. The single open issue is a stale user interface bug regarding scheduled task toggles, which has not yet been addressed. Overall, the project health appears strong, with the core team actively closing out targeted technical fixes.

### 3. Project Progress
All 9 PRs merged today were bug fixes and optimizations, primarily targeting the **OpenClaw** plugin framework and the **Cowork (GLM)** agent collaboration system.

- **OpenClaw Plugin Architecture (4 PRs):**
    - [#2203](https://github.com/netease-youdao/LobsterAI/pull/2203): Fixed the loading of precompiled local extension entries, ensuring TypeScript extensions compile correctly to `index.js` during packaging.
    - [#2202](https://github.com/netease-youdao/LobsterAI/pull/2202): Kept the bundled browser plugin allowlisted in managed OpenClaw configurations, preventing it from being disabled by restrictive allowlists.
    - [#2201](https://github.com/netease-youdao/LobsterAI/pull/2201): Fixed a critical duplication bug where yielded agent sessions produced duplicate assistant replies in the GLM history, and added deduplication for thinking blocks.
    - [#2198](https://github.com/netease-youdao/LobsterAI/pull/2198): Preinstalled official **QQ and Discord** channel plugins for the OpenClaw gateway, fixing environment variable indexing for IM accounts.
- **Cowork & Plan Mode (4 PRs):**
    - [#2204](https://github.com/netease-youdao/LobsterAI/pull/2204): Fixed a rendering bug where `proposed_plan` tags leaked into chat messages. The plan card now correctly reads the block-level tag.
    - [#2205](https://github.com/netease-youdao/LobsterAI/pull/2205): Stylistic update to the plan mode prompt icon (theme-aware SVG).
    - [#2200](https://github.com/netease-youdao/LobsterAI/pull/2200): Fixed a jitter issue where minor assistant snapshot regressions during streaming caused duplicate "plan" messages for Qwen models.
    - [#2199](https://github.com/netease-youdao/LobsterAI/pull/2199): Extended subagent polling to continue running even after the parent agent session completes, with a 5-minute timeout to catch late terminal updates.
- **General Settings:**
    - [#2206](https://github.com/netease-youdao/LobsterAI/pull/2206): Fixed a settings sync issue where the "Launch at Login" toggle state was not verified against the actual OS state, leading to UI desync. Added Windows login item cleanup.

### 4. Community Hot Topics
There is very low community engagement on the tracker today. The only active discussion item is:

- **The Stale Toggle Bug (Issue #1392):** This issue has been open since April 3 with zero reactions and only a single comment from the author. It describes a functional bug where toggles for specific scheduled tasks cannot be clicked. While it has not attracted attention, its longevity signals that this specific UI regression is a known pain point for the reporter.

### 5. Bugs & Stability
- **Critical: Duplicate Messages in Cowork Mode** — Resolved via [#2200](https://github.com/netease-youdao/LobsterAI/pull/2200) and [#2201](https://github.com/netease-youdao/LobsterAI/pull/2201). These fixed two distinct causes of duplicate visible messages (stream jitter and session yield sync), which likely affected user perception of the assistant's reliability.
- **Medium: Settings UI Desync** — Resolved via [#2206](https://github.com/netease-youdao/LobsterAI/pull/2206). The auto-launch toggle could show an incorrect state if the OS setting was changed externally.
- **Medium: Plan Tag Leaking** — Resolved via [#2204](https://github.com/netease-youdao/LobsterAI/pull/2204). Raw markup tags were displayed to the user instead of being processed into plan cards.
- **Low: Scheduled Task Toggle Stuck (Open)** — Issue [#1392](https://github.com/netease-youdao/LobsterAI/pull/1392) remains unaddressed. The bug appears to be specific to certain scheduled tasks, not a global UI failure.

### 6. Feature Requests & Roadmap Signals
No new feature requests were submitted today. The digest signals a clear internal roadmap focus on **infrastructure stability** rather than new user-facing features. The preinstallation of **QQ and Discord plugins** ([#2198](https://github.com/netease-youdao/LobsterAI/pull/2198)) is a strong signal that the OpenClaw gateway is being readied for a wider release, targeting users on Chinese (QQ) and Western (Discord) IM platforms. This suggests the next version (likely 2026.7) will focus on cross-platform connectivity.

### 7. User Feedback Summary
Direct user feedback was minimal today. The only user-reported issue is the "Stale Toggle" bug regarding scheduled tasks. The volume of fixes for **duplicate messages** and **state desync** suggests these were active pain points silently reported (likely via telemetry or internal testing) that the team is now aggressively resolving.

### 8. Backlog Watch
- **Issue #1392 (Stale Toggle Bug):** [Link](https://github.com/netease-youdao/LobsterAI/issues/1392)
    - **Status:** Open for 84 days (since 2026-04-03).
    - **Risk:** High staleness. This is the only open issue in the tracker that a user cared enough to create, but it has been ignored. It likely affects the "scheduled tasks" core workflow. While it has no community traction, its longevity is a weak signal of neglect for that specific feature area.

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

# CoPaw Project Digest — 2026-06-26

## Today's Overview

CoPaw continues to show a healthy development velocity with 27 issues and 50 PRs updated in the last 24 hours. Activity remains high with a 63% open-to-closed ratio on issues (17 open, 10 closed) and a balanced PR pipeline (27 open, 23 merged/closed). The community is actively contributing, with several first-time contributors submitting fixes for critical bugs. No new releases were published today, suggesting the team is consolidating toward a next version, likely v1.2.x or continued iteration on the Runtime 2.0 migration which features heavily in recent PRs. The project is in an active stabilization phase, with regression fixes and Runtime 2.0 compatibility patches dominating the PR landscape.

## Releases

No new releases were published on 2026-06-25. The latest available version remains **v1.1.12.post2** as observed in recent issue reports.

## Project Progress

23 PRs were merged or closed today, reflecting substantial progress across several fronts:

- **Runtime 2.0 Migration**: Multiple PRs addressing the AgentScope 2.0 migration gaps, including #5443 (restoring ACP commands and inline approvals in TUI, closed) and #5442 (mission mode integration with Runtime v2 architecture)
- **Pattern Matching**: #5471 (closed) generalized match patterns across the system
- **Cosmetic Improvements**: #5534 (closed) added a trending badge to the README; #5501 (closed) fixed send-button alignment in wide-screen mode
- **Bug Fixes**: Several closed issues indicate fixes published: #5345 (OpenAI-compatible provider function calling) and #4887 (DingTalk custom endpoint support) were resolved
- **First-Time Contributors**: New contributors submitted fixes for memory leaks (#5536), content moderation caching errors (#5535), and Linux browser detection (#5526)

## Community Hot Topics

The most active discussions reflect three key community concerns:

1. **Browser Automation Stability** — Issue #5520 (1 comment) documents that `browser_use stop()` leaves Chrome renderer processes running, causing memory leaks — reported as a regression from #2733/PR #2843. A fix PR #5536 from first-time contributor C1-BA-B1-F3 was submitted same day.

2. **Context Management Design** — Issue #5455 (4 comments) questions why current time is placed in system context rather than as a per-user-message prefix, sparking architectural discussion. PR #5499 from lecheng2018 implements the proposed change.

3. **Console Rendering Issues** — Issue #5480 (5 comments) describes CSS layout recalculation failures in the web frontend causing long messages to render without formatting. PR #5538 from first-time contributor wananing provides a targeted fix.

## Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **Critical** | #5520 | `browser_use stop()` memory leak — Chrome renderer processes survive, accumulating 150-210MB RSS per cycle (regression from #2733) | PR #5536 submitted |
| **High** | #5505 | MiniMax-M3 image moderation errors cached as `rejects_media=True`, stripping subsequent image requests | PR #5535 submitted |
| **High** | #2733 (reopened via #5520) | Chrome processes not properly closed after browser automation, causing resource exhaustion | Previously fixed, regression noted |
| **Medium** | #5480 | Console long messages render without line breaks/formatting (CSS recalculation missing) | PR #5538 submitted |
| **Medium** | #5479 | Large conversation files (>500KB) crash the web UI frontend | No fix PR yet |
| **Medium** | #5528 | Browser tool fails on Linux with IME-wrapped default browser (`Exec=env … chrome`) | PR #5526 submitted |
| **Medium** | #5472 | GLM-5.x models via OpenCode Go fail with `json_schema_converter.cc` error | Closed (2026-06-25) |
| **Low** | #5539 | Heartbeat tasks interrupted by hardcoded 120s timeout | No fix PR yet |
| **Low** | #5508 | `send_file_to_user` preview links return 404 on Windows local app | Not yet addressed |

## Feature Requests & Roadmap Signals

The following features signal likely roadmap priorities:

- **Plugin ecosystem expansion** — Issue #5484 requests pip-based plugin installation from PyPI, citing projects like Hermes Agent. PR #4622 (DataPaw plugin with 12 BI skills) and #5193 (Slack channel) show active plugin development. Expect plugin infrastructure improvements in v1.2.x.

- **Model management improvements** — Issue #5527 requests dynamic model switching for failover when a provider is rate-limited. PR #5399 adds custom model ordering within providers via drag-and-drop. These point toward a more sophisticated model routing subsystem.

- **Conversation UX** — Issue #5503 requests ability to delete individual responses mid-conversation. Issue #5529 reports `/new` command conflicting with `/news` skill autocomplete. These suggest ongoing UI/UX refinement for the chat interface.

- **Runtime 2.0 completion** — Issues #5523 (spawn_subagent missing from Runtime 2.0 tool registry) and #5442 (mission mode integration) show the migration is still in progress. Full Runtime 2.0 parity appears to be the primary blocker for the next release.

- **Performance** — Issue #5342 requests a hard cap on tool result size at the execution layer to prevent context explosion when LLM calls fail. This represents a defense-in-depth concern for production deployments.

## User Feedback Summary

**Pain Points:**
- Windows users face significant issues: `send_file_to_user` links return 404 (#5508), and the client displays a blank white page in air-gapped environments (#5497) — suggesting packaging/distribution gaps
- Chinese-language users are disproportionately affected by frontend rendering bugs (#5480) and model-specific failures (#5472, #5505), indicating potential localization or region-specific testing gaps
- Browser automation users experience resource exhaustion (#5520) and Linux compatibility issues (#5528), degrading the reliability of a core feature
- Large-session users face data loss risk when the UI crashes on files >500KB (#5479)

**Satisfaction Signals:**
- High community engagement with 27 issues and 50 PRs updated in 24 hours indicates an active, invested user base
- Multiple first-time contributors submitting high-quality fix PRs (wananing with two fixes, C1-BA-B1-F3 with two bug fixes) suggests good onboarding experience
- Feature-rich plugin contributions (DataPaw with 12 BI skills, Slack channel) show advanced users building on the platform

**Use Case Observations:**
- Enterprise/private deployment is a consistent theme (DingTalk custom endpoints #4887, air-gapped installation #5497)
- Multi-model workflows are evolving (dynamic switching #5527, model ordering #5399, provider counting #5512)
- AI agent orchestration with sub-agents (#5523) and mission mode (#5442) represents advanced use cases

## Backlog Watch

Several items require maintainer attention:

- **Issue #5162** — "Conversation thinking logic enters infinite loop" (opened 2026-06-12, last updated 2026-06-25, 5 comments, no resolution). This appears to be a logic bug affecting core conversation flow but lacks a clear reproduction. A maintainer response or reproduction assistance request would help.

- **Issue #5479** — Large conversation file UI crash (opened 2026-06-24, 3 comments, no fix PR). This affects long-term users who accumulate large sessions and could be a high-impact fix for power users.

- **PR #4041** — Tauri tray behavior for Desktop (opened 2026-05-05, "Under Review" since, last activity 2026-06-25). At 52 days in review, this substantial contribution from wfeng007 may need maintainer bandwidth to bring to merge.

- **Issue #5342** — Hard cap on tool result size (opened 2026-06-20, 2 comments). An important production stability concern that has seen no maintainer response yet.

- **Issue #4188** — "Document opening is too laggy" (opened 2026-05-11, closed without resolution on 2026-06-25 with 1 comment total). This appears to have been auto-closed or dismissed rather than addressed, which may frustrate the reporter.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-26

## Today's Overview
ZeroClaw is in a period of intense development activity with **49 open issues** and **49 open pull requests** updated in the last 24 hours, indicating a highly active engineering phase. The project is currently executing against **v0.8.2 and v0.8.3 release milestones** while also laying groundwork for the **v0.9.0 breaking-change track**. Only **1 PR was merged/closed today** alongside 13 closed issues, suggesting the team is prioritizing review and integration velocity. The project is processing multiple high-risk RFCs simultaneously around WASM plugins, supply chain security, and delegation architecture, signaling a significant architectural maturation phase.

## Releases
**No new releases today.**

The last reported release markers are **v0.8.0-beta-1** through **v0.8.1**, with active trackers for **v0.8.2** ([#8181](https://github.com/zeroclaw-labs/zeroclaw/issues/8181)) and **v0.8.3** ([#8071](https://github.com/zeroclaw-labs/zeroclaw/issues/8071)) still open.

---

## Project Progress

**Merged/Closed PRs Today:** 1

### Merged PR:
- **[#8212](https://github.com/zeroclaw-labs/zeroclaw/pull/8212) — fix(self_test): correct comment numbering in run_full function** (by yuxuan-7814)
  - *Risk: low, Size: XS* — Corrected overlapping comment numbers in diagnostic check numbering to align with the `run_quick` function. A minor documentation fix.

### Closed Issues (Notable):
- **[#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) — [Bug]: delegate bypasses parent's tool allowlist** (closed as resolved)
  - *Severity: S0 (data loss/security risk)* — A critical security bug where the `delegate` tool allowed sub-agents to invoke tools the parent policy explicitly excluded. Fix appears to have been implemented.
- **[#6714](https://github.com/zeroclaw-labs/zeroclaw/issues/6714) — Remove remote-markdown-link block from skill audit** (closed)
  - *Priority: p2* — Resolved high false-positive rate on legitimate skills citing docs URLs ending in `.md`.
- **[#8154](https://github.com/zeroclaw-labs/zeroclaw/issues/8154) — Kimi Code (Moonshot endpoint) targets dead URL** (closed)
  - *Priority: p1* — Working URL restored from `https://api.moonshot.cn/coder/v1` to `https://api.kimi.com/coding/v1`.
- **[#7873](https://github.com/zeroclaw-labs/zeroclaw/issues/7873) — Telegram media groups dispatched as separate requests** (closed as resolved)
- **[#7087](https://github.com/zeroclaw-labs/zeroclaw/issues/7087) — `zeroclaw models set` falls through to doctor instead of saving config** (closed)
- **[#8236](https://github.com/zeroclaw-labs/zeroclaw/issues/8236) — voice_wake.rs missing `subject` field in struct literal** (closed as resolved)

### Features/Improvements Advanced (Open but Active PRs):
- **Skills Infrastructure**: PR [#8335](https://github.com/zeroclaw-labs/zeroclaw/pull/8335) makes `skills install/list/remove` bundle-aware, and [#8313](https://github.com/zeroclaw-labs/zeroclaw/pull/8313) defaults to compact skill injection mode.
- **Observability**: PR [#8337](https://github.com/zeroclaw-labs/zeroclaw/pull/8337) adds herdr agent status reporting for CLI interactive mode.
- **In-App Upgrade**: PR [#8173](https://github.com/zeroclaw-labs/zeroclaw/pull/8173) implements end-to-end web dashboard upgrade with auto-restart (RFC #8170).
- **SOP Control Plane**: PR [#8304](https://github.com/zeroclaw-labs/zeroclaw/pull/8304) adds out-of-band approval plane with fail-closed timeout.
- **Nix Builds**: PR [#8336](https://github.com/zeroclaw-labs/zeroclaw/pull/8336) repairs Nix builds broken by missing git dependency hashes.
- **Security**: PR [#8129](https://github.com/zeroclaw-labs/zeroclaw/pull/8129) adds `cargo-audit` step to PR gate.

---

## Community Hot Topics

### Most Active Discussions

1. **[#6808 — RFC: Work Lanes, Board Automation, and Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** (11 comments)
   - *Author: Audacity88* — A governance RFC for routing work without maintaining manual systems. Now in rollout phase. This is the organizing principle behind the project's triage infrastructure.

2. **[#8177 — RFC: Supply chain signing — hardware PGP, hermetic builds, SLSA provenance](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)** (8 comments)
   - *Author: ConYel* — Proposes hardware-backed PGP keys, multi-party quorum, and offline signing for container images and release binaries. Blocked, needs maintainer review.

3. **[#6165 — RFC: Prefer a lighter ZeroClaw core through external integrations](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)** (5 comments)
   - *Author: ilteoood* — Proposes removing dedicated code for integrations (Jira, gws-cli, GitHub) in favor of skills-based interaction. Accepted but blocked.

4. **[#8238 — Add independent delegate mode for specialist handoffs](https://github.com/zeroclaw-labs/zeroclaw/issues/8238)** (4 comments)
   - *Author: vrurg* — In-progress enhancement allowing specialist agents to run under their own policy. A companion to the closed security bug #8279.

5. **[#5903 — MCP stdio child processes accumulate as orphans on daemon](https://github.com/zeroclaw-labs/zeroclaw/issues/5903)** (4 comments)
   - *Author: rordd* — A high-severity bug causing ~48 orphan MCP processes per day. Accepted, no-stale, but no fix PR yet — this is a **critical stability concern**.

**Underlying Needs:** The community is pushing for three themes:
- **Security hardening** (supply chain signing, delegation boundaries, tool allowlists)
- **Architecture simplification** (lighter core via skills/externalization, WASM-first plugin runtime)
- **Operational stability** (process leaks, build failures, failing endpoints)

---

## Bugs & Stability

### Critical/S0 — Data Loss / Security Risk
| Bug | Status | Fix PR |
|-----|--------|--------|
| [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279): Delegate bypasses parent's tool allowlist (S0) | **CLOSED** — resolved | Appears fixed |

### High/S1 — Workflow Blocked
| Bug | Status | Fix PR |
|-----|--------|--------|
| [#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903): MCP stdio orphan processes accumulate (1 per heartbeat tick) | **OPEN** — accepted, no-stale | None yet |
| [#8154](https://github.com/zeroclaw-labs/zeroclaw/issues/8154): Kimi Code endpoint 404 (regression) | **CLOSED** — resolved | Fixed |
| [#8312](https://github.com/zeroclaw-labs/zeroclaw/issues/8312): fill-translations leaves stale entries that re-ship leaked text (S2, data-loss path) | **OPEN** — priority p1 | None yet |

### Medium/S2 — Degraded Behavior
| Bug | Status | Fix PR |
|-----|--------|--------|
| [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514): Telegram images dispatched as separate requests | **OPEN** — accepted, no-stale | Tracker: #7873 (closed) |
| [#8327](https://github.com/zeroclaw-labs/zeroclaw/issues/8327): Native tool `[IMAGE:data:...]` markers sent as plain text, inflating tokens | **OPEN** — new today | None yet |
| [#8334](https://github.com/zeroclaw-labs/zeroclaw/issues/8334): `skills install/list/remove` target data_dir, broken on multi-agent | **OPEN** — new today | [#8335](https://github.com/zeroclaw-labs/zeroclaw/pull/8335) (open) |
| [#7737](https://github.com/zeroclaw-labs/zeroclaw/issues/7737): Approval attribution depends on channel-global side channel | **OPEN** — accepted | None yet |
| [#8236](https://github.com/zeroclaw-labs/zeroclaw/issues/8236): voice_wake.rs missing `subject` field (build break) | **CLOSED** — resolved | Fixed |

### Low/S3 — Minor
| Bug | Status | Fix PR |
|-----|--------|--------|
| [#7087](https://github.com/zeroclaw-labs/zeroclaw/issues/7087): `zeroclaw models set` falls through to doctor | **CLOSED** — resolved | Fixed |

**Key Stability Observation:** The **MCP orphan process leak** ([#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903)) remains the most critical unresolved stability bug — it silently accumulates ~48 processes per day on any daemon with stdio MCP and default heartbeat. Despite being accepted since April 19, **no fix PR exists**.

---

## Feature Requests & Roadmap Signals

### Features Likely for Next Release (v0.8.2 / v0.8.3)

**Strong Signals (with active PRs):**
1. **In-app upgrade from web dashboard** — PR [#8173](https://github.com/zeroclaw-labs/zeroclaw/pull/8173) implements RFC #8170 end-to-end
2. **Skills bundle-aware install/list/remove** — PR [#8335](https://github.com/zeroclaw-labs/zeroclaw/pull/8335) fixes multi-agent skills flow
3. **Compact skill injection (default)** — PR [#8313](https://github.com/zeroclaw-labs/zeroclaw/pull/8313) switches to progressive-disclosure model
4. **ACP MCP support** — PR [#8237](https://github.com/zeroclaw-labs/zeroclaw/pull/8237) adds MCP tool support to standalone ACP sessions
5. **OpenRouter model fallbacks** — Issue [#8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138) (needs maintainer review)

**Roadmap-Longer Term (v0.9.0 cluster):**
- **WASM-first plugin runtime** (RFC [#8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135)) — blocked, needs maintainer review
- **Supply chain signing** (RFC [#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)) — blocked
- **Replace React/Vite with Rust→Wasm web framework** (RFC [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)) — needs author action
- **Goal mode for bounded autonomous sessions** (RFC [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)) — accepted
- **"Everything is a plugin" unified catalog** ([#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489)) — accepted

**Wildcard:**
- **SkillForge wiring** ([#8309](https://github.com/zeroclaw-labs/zeroclaw/issues/8309)) — orphaned auto skill discovery engine, needs decision (wire up or remove)

---

## User Feedback Summary

**Pain Points Expressed:**
1. **Multi-agent installation broken** — `skills install` targets `data_dir` that multi-agent runtimes never load ([#8334](https://github.com/zeroclaw-labs/zeroclaw/issues/8334))
2. **Process leaks erode server reliability** — MCP orphans accumulate on daemon ([#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903)), users likely experiencing gradual memory/resource exhaustion
3. **Provider endpoint breakage** — Kimi Code users hit 404 due to URL drift ([#8154](https://github.com/zeroclaw-labs/zeroclaw/issues/8154), closed)
4. **Token waste from image data** — Native tool `[IMAGE:data:...]` markers sent as plain text, costing real money/tokens ([#8327](https://github.com/zeroclaw-labs/zeroclaw/issues/8327))
5. **Telegram multi-image fragmentation** — Sending multiple images triggers separate agent requests instead of one consolidated message ([#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514))

**Satisfaction Signals:**
- Community is actively contributing: 50 PRs in 24h, including first-time contributors (yuxuan-7814, Super-Cabbage)
- Proposed improvements are getting accepted and implemented (new RFCs have "accepted" status)
- The project is transparent about breaking changes — the v0.9.0 tracker explicitly catalogs them

**Use Cases Driving Development:**
- Professional multi-agent deployments (delegation with policies, specialized agent handoffs)
- Enterprise security requirements (supply chain signing, tool allowlists, capability-gated WASM)
- Developer tooling (herdr integration, Nix builds, CI hardening)
- User-facing web dashboard (in-app upgrades, version management)

---

## Backlog Watch

### Stale/Blocked Items Needing Maintainer Attention

1. **[#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) — MCP stdio orphan process leak** (p1, accepted, no-stale)
   - *Opened: 2026-04-19* — **68 days open.** Causes ~48 orphan processes/day. No fix PR exists despite being labeled `status:accepted` and `status:no-stale`. This is the project's most impactful unresolved bug.

2. **[#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) — Supply chain signing RFC** (p2, blocked, needs-maintainer-review)
   - *Opened: 2026-06-22* — Blocked awaiting maintainer decision on architecture direction.

3. **[#8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135) — WASM-first plugin runtime RFC** (p2, blocked, needs-maintainer-review)
   - *Opened: 2026-06-22* — Critical path dependency for the plugin architecture direction.

4. **[#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) — Replace React/Vite with Rust→Wasm web framework** (p3, needs-author-action)
   - *Opened: 2026-06-22* — Stalled awaiting author response to maintainer requests.

5. **[#8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138) — OpenRouter fallback models** (p2, needs-maintainer-review)
   - *Opened: 2026-06-22* — Small feature, no PR yet; would unblock users of overloaded OpenRouter models.

6. **[#8309](https://github.com/zeroclaw-labs/zeroclaw/issues/8309) — SkillForge wiring decision** (p2, blocked, needs-maintainer-review)
   - *Opened: 2026-06-25* — Orphaned code from February needs a decision: invest in wiring or delete.

**Notable:** The project has 36 open/active issues and 49 open PRs — this represents a **significant review backlog** that may slow time-to-merge for critical fixes. The single merged PR today (a small documentation fix) versus 49 open PRs suggests the review pipeline is a bottleneck.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*