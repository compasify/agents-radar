# OpenClaw Ecosystem Digest 2026-05-22

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-22 00:25 UTC

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

# OpenClaw Project Digest — 2026-05-22

## 1. Today's Overview

OpenClaw shows **extremely high activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a large, active contributor base and rapid development pace. However, the **95% open rate for issues (475/500)** and **91% open rate for PRs (456/500)** suggest significant backlog pressure and potential bottlenecks in review/merge processes. Only 25 issues and 44 PRs were closed/merged, highlighting a throughput challenge despite two new releases shipping. The project appears to be in a **feature-rich but stability-stressed phase**, with multiple P1 regressions and security concerns competing for attention.

---

## 2. Releases

### v2026.5.20 (Stable)
- **Exec approvals hardening**: Removed legacy `cat SKILL.md && printf ... && <skill-wrapper>` allowlist compatibility path. Skill files **must now be loaded with the `read` tool**; only the real skill executable is auto-allowed.
  - *Breaking change*: Any custom skills relying on the old wrapper pattern will require migration.
- **Discord voice session following**: Voice sessions now follow configured Discord users into voice channels.

### v2026.5.20-beta.2 (Beta)
- Identical changelog to stable — appears to be a channel promotion or tagging correction.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary | Status |
|:---|:---|:---|:---|
| [#85054](https://github.com/openclaw/openclaw/pull/85054) | samzong | Fix: Preserve accepted spawn terminal success for pure-relay agents | **Merged** |
| [#85135](https://github.com/openclaw/openclaw/pull/85135) | clawsweeper[bot] | Automerge-ready version of #85054 | **Merged** (bot) |
| [#85117](https://github.com/openclaw/openclaw/pull/85117) | kevinslin | Fix: Await computer use elicitation bridge in Codex | **Closed** |
| [#85086](https://github.com/openclaw/openclaw/pull/85086) | MonkeyLeeT | Fix: Reject active-memory assistant chatter | **Closed** |
| [#83990](https://github.com/openclaw/openclaw/pull/83990) | giodl73-repo | Fix: Allow provider timeout overlays | **Closed** |

### Notable Advances
- **Agent spawn reliability**: The accepted-spawn terminal success fix (#85054/#85135) resolves a classification bug where successful child session acceptances were incorrectly marked as incomplete parent turns.
- **Memory system hardening**: Active-memory filtering (#85086) now rejects model boilerplate to prevent pollution of persistent context.
- **Codex runtime stability**: Computer use bridge async handling improved; progress-only completions now blocked (#85110, open).

---

## 4. Community Hot Topics

| Item | Comments | 👍 | Analysis |
|:---|:---|:---|:---|
| [#75 — Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) | 105 | 75 | **Longest-running platform gap**. macOS/iOS/Android covered since Jan 2026; Linux/Windows demand persists. Blocked by multi-label review pipeline (security, product, maintainer). Underlying need: cross-platform enterprise deployment. |
| [#9443 — Prebuilt Android APK releases](https://github.com/openclaw/openclaw/issues/9443) | 24 | 1 | Notably submitted by AI assistant (QING) on behalf of user. Source-available but no CI artifacts; friction for non-developer Android users. |
| [#22438 — Tiered bootstrap file loading](https://github.com/openclaw/openclaw/issues/22438) | 16 | 0 | Token cost optimization for large workspaces. ~3,500 tok/session fixed overhead is recurring pain point (see also #14785). |
| [#12602 — Slack Block Kit support](https://github.com/openclaw/openclaw/issues/12602) | 13 | 0 | Rich interactive messaging in enterprise Slack environments. Competes with native platform capabilities. |
| [#84059 — EmbeddedAttemptSessionTakeoverError](https://github.com/openclaw/openclaw/issues/84059) | 13 | 8 | **Closed P1** — session file race condition post-2026.5.18 upgrade. Rapid fix turnaround (2 days). |
| [#62505 — Coding Agent never completes](https://github.com/openclaw/openclaw/issues/62505) | 13 | 1 | **Regression** from 2026.4.2. Core productivity use case broken; linked PR open. |

**Underlying needs**: Platform parity (desktop), cost control (tokens), enterprise integration (Slack/Teams), and reliability of core coding workflows.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Description |
|:---|:---|:---|:---|:---|
| **P1** | [#62505](https://github.com/openclaw/openclaw/issues/62505) | Open | ✅ Linked | Coding agent regression — idle loops, vague status updates |
| **P1** | [#31583](https://github.com/openclaw/openclaw/issues/31583) | Open | ✅ Linked | `exec` tool ignores `skills.entries.*.env` — secrets injection broken |
| **P1** | [#55334](https://github.com/openclaw/openclaw/issues/55334) | Open | ❌ | Gateway OOM from unbounded `sessions.json` growth (~50-100 MB/min) |
| **P1** | [#38327](https://github.com/openclaw/openclaw/issues/38327) | Open | ❌ | `Cannot convert undefined or null to object` with Gemini 3.1 Pro |
| **P1** | [#84076](https://github.com/openclaw/openclaw/issues/84076) | **Closed** | ✅ | Codex app-server stalls after `item/completed` |
| **P1** | [#84880](https://github.com/openclaw/openclaw/issues/84880) | Open | ✅ Linked | Subagent `thinking` still rejects non-off on v2026.5.19 |
| **P1** | [#85126](https://github.com/openclaw/openclaw/issues/85126) | Open | ❌ | TUI/WebChat auto-selects wrong `authProfileOverride` |
| **P1** | [#83796](https://github.com/openclaw/openclaw/issues/83796) | **Closed** | ✅ | Codex sandbox escape — agent runs in gateway container not sandbox |

**Trend**: Session state and auth-provider issues dominate P1s. Multiple "regression" tags suggest recent refactors (likely 2026.4.x → 2026.5.x) introduced instability. Security boundary fixes (#83796 sandbox escape) show active threat response.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Native secrets management** (AWS SM, Vault) | [#13610](https://github.com/openclaw/openclaw/issues/13610) | High | Security theme; multiple related PRs in flight (#81185 redaction, #31583 env bug) |
| **Masked secrets / blind API key usage** | [#10659](https://github.com/openclaw/openclaw/issues/10659) | High | Security-critical; aligns with exec approval hardening in v2026.5.20 |
| **Slack Block Kit** | [#12602](https://github.com/openclaw/openclaw/issues/12602) | Medium | Enterprise demand; kevinslin actively shipping Slack improvements (#85062, #85134) |
| **Tiered bootstrap loading** | [#22438](https://github.com/openclaw/openclaw/issues/22438) | Medium | Cost optimization; token pressure is recurring theme |
| **Direct Exec Mode for Cron** | [#18160](https://github.com/openclaw/openclaw/issues/18160) | Medium | Reliability; avoids LLM interpretation overhead |
| **Linux/Windows desktop apps** | [#75](https://github.com/openclaw/openclaw/issues/75) | Low | 105 comments, 4+ months old, multi-label blocker gridlock |
| **Multi-tenancy/RBAC** | [#60127](https://github.com/openclaw/openclaw/issues/60127) | Low | Architectural; no linked PR, broad scope |

---

## 7. User Feedback Summary

### Pain Points
- **"My coding agent stopped working"** ([#62505](https://github.com/openclaw/openclaw/issues/62505)): Core value proposition regressions erode trust
- **Session instability**: Multiple race conditions, file locks, OOMs suggest distributed state management is strained at scale
- **Configuration fragility**: Telegram multi-account ([#62985](https://github.com/openclaw/openclaw/issues/62985)), Feishu validation ([#63101](https://github.com/openclaw/openclaw/issues/63101)), auth profile misselection ([#85126](https://github.com/openclaw/openclaw/issues/85126)) — upgrade path is rocky
- **Token/cost anxiety**: ~3,500 tokens/session overhead ([#14785](https://github.com/openclaw/openclaw/issues/14785)), no bootstrap tiering ([#22438](https://github.com/openclaw/openclaw/issues/22438))

### Satisfaction Signals
- Rapid P1 closure: [#84059](https://github.com/openclaw/openclaw/issues/84059) fixed in 2 days, [#83796](https://github.com/openclaw/openclaw/issues/83796) sandbox escape closed quickly
- Active bot automation: ClawSweeper automerge loop reducing contributor friction
- Rich channel support: Discord voice, Slack approvals, Telegram blockquotes all advancing

### Use Case Tensions
- **Enterprise** (Slack, SSO, secrets mgmt) vs. **Individual** (cost, local-first, TUI)
- **Power users** (cron, subagents, hooks) vs. **Simplicity** (onboarding wizard gaps per [#16670](https://github.com/openclaw/openclaw/issues/16670))

---

## 8. Backlog Watch

### Stalled/Multi-Blocked Issues Needing Maintainer Action

| Issue | Age | Blockers | Risk |
|:---|:---|:---|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows apps | ~5 months | 7 ClawSweeper labels + security + product + maintainer review | Platform equity; enterprise adoption |
| [#6731](https://github.com/openclaw/openclaw/issues/6731) Safe/unsafe ClawdBot | ~4 months | Security review, source repro, product decision | Rust rewrite is aspirational; sandbox config (#7722) more actionable |
| [#7227](https://github.com/openclaw/openclaw/issues/7227) macOS Accessibility permissions for `node` | ~4 months | Stale tag | **Security debt** — all npm packages get GUI automation access |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) Filesystem sandboxing | ~4 months | Security review, product decision | Feasible near-term; config-only approach |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) Masked secrets | ~3.5 months | Security review, source repro | High user value; aligns with release direction |

### PRs Ready for Maintainer Look (per labels)

| PR | Waiting Since | Risk Flags |
|:---|:---|:---|
| [#85062](https://github.com/openclaw/openclaw/pull/85062) Slack native plugin approvals | May 21 | Compatibility, message-delivery, security-boundary |
| [#81185](https://github.com/openclaw/openclaw/pull/81185) Redact exec tool payloads | May 12 | Security-boundary |
| [#79068](https://github.com/openclaw/openclaw/pull/79068) Bound gateway session memory | May 7 | Session-state, message-delivery |
| [#63840](https://github.com/openclaw/openclaw/pull/63840) Slack thread context preservation | Apr 9 | Session-state, message-delivery |

---

*Digest generated from GitHub activity 2026-05-21 to 2026-05-22. All links reference https://github.com/openclaw/openclaw.*

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the provided community digest summaries.

---

## Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem
**Date:** 2026-05-22

### 1. Ecosystem Overview

The personal AI agent open-source landscape is experiencing a **divergent evolution**, characterized by a clear split between a dominant, monolithic "reference architecture" (OpenClaw) and a rapidly diversifying set of specialized forks and alternatives. While OpenClaw drives core innovation at breakneck speed, projects like NanoBot and Hermes Agent are carving out niches in **UI/UX polish** and **multi-channel reliability**, respectively. A strong shared industry-wide bottleneck is emerging around **production-grade stability** and **security hardening**, with nearly every project facing regressions, configuration fragility, and the need for better sandboxing. The ecosystem is maturing from a feature chase into a reliability and scalability arms race.

### 2. Activity Comparison

The following table compares key activity metrics for each project over the last 24 hours.

| Project | Issues (Open/Total) | PRs (Open/Total) | Release Status | Health Score & Assessment |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 475 / 500 | 456 / 500 | **v2026.5.20 (Stable) + Beta** | **Medium**: Extremely high activity but significant backlog (95% open rate), indicating a potential merge bottleneck despite rapid releases. |
| **NanoBot** | 9 / 9 | 8 / 31 | None today | **High**: Strong velocity with healthy closure rate (74%), demonstrating efficient community and maintainer collaboration. |
| **Hermes Agent** | 44 / 50 | 37 / 50 | None today | **Medium**: High community velocity but growing backlog (88% open issues), with new security disclosures demanding immediate attention. |
| **PicoClaw** | 9 / 9 | 20 / 30 | **Nightly Build** | **Medium**: Good maintenance activity but heavily skewed toward automated dependency bumps, with a risk of community contributor attrition from stale PRs. |
| **NanoClaw** | 3 / 3 | 9 / 11 | None today | **High**: Agile and responsive, with rapid bug-fix turnaround and a healthy, diverse contributor base. |
| **Moltis** | 6 / 6 | 4 / 5 | None today | **High**: Responsive maintenance phase with a strong issue-to-PR pipeline, though bug density is a concern. |
| **CoPaw** | 26 / 26 | 9 / 28 | None today | **High**: Very high activity with a rapid merge rate (68%), showing strong project momentum and community management. |
| **ZeroClaw** | 19 / 21 | 45 / 50 | **v0.8.0-beta-1** | **Medium**: Intense development phase post-major release, but the high volume of open work (45 PRs) and long-standing P1 bugs suggest strained maintainer capacity. |
| **IronClaw** | 0 reported | 26 / 47 | Not published today | **High**: Dominated by a massive "Reborn" architecture overhaul. High merge velocity (21 merged) indicates a successful feature push. |
| **LobsterAI** | N/A | 9 / 9 | None today | **Low**: Low activity, consolidating. A backlog of 7 ready-to-merge bug fixes indicates a critical review bottleneck. |
| **NullClaw** | 0 / 0 | 2 / 2 | None today | **Low**: Quiet but stable. Long-unmerged PRs (44 days) are a risk for contributor momentum. |
| **TinyClaw** | 0 | 0 | None | **Dormant**: No activity in the last 24 hours. |

### 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Market Dominance & Speed:** OpenClaw is the undisputed leader in raw development velocity and feature release cadence. No other project comes close to its sheer volume of 500+ daily updates and dual stable/beta releases.
- **Ecosystem Gravity:** It serves as the core reference implementation, with several projects (PicoClaw, NanoClaw, LobsterAI) explicitly designed as forks or lightweight frontends, creating a powerful ecosystem effect.
- **Comprehensive Feature Set:** OpenClaw has the broadest platform support (macOS, iOS, Android) and the deepest Slack integration work.

**Technical Approach Differences:**
- **"Everything Ship" vs. "Opinionated"**: OpenClaw aims to solve all problems for all users simultaneously. In contrast, **Hermes Agent** and **NanoBot** seem more opinionated, focusing on specific user experience problems (TUI polish, WebUI memory).
- **Breaking Change Cadence:** OpenClaw's rapid releases come with a high cost of breaking changes (e.g., exec approvals), while projects like **ZeroClaw** manage change with pre-releases and formal migration guides for bigger architectural shifts (v0.8).

**Community Size:
- **Dominant:** With 500 daily issues, OpenClaw's community engagement metrics dwarf all others (Hermes Agent has 50, CoPaw 26). This scale provides massive testing and feedback data but creates a bottleneck in maintainer bandwidth.

### 4. Shared Technical Focus Areas

A clear set of cross-project requirements is emerging, driven by user demand for production-ready systems.

1.  **Security & Sandboxing:** A top priority across the ecosystem.
    - *Projects:* **OpenClaw** (sandbox escape fix), **Hermes Agent** (4 coordinated security disclosures), **PicoClaw** (tool policy filters), **ZeroClaw** (stale security PRs).
    - *Specific Needs:* Command injection prevention, process isolation, credential management, and API key protection.

2.  **Multi-Provider & API Compatibility:** Users demand choice and cost optimization.
    - *Projects:* **NanoBot** (xAI, Novita, Skywork), **CoPaw** (Gemini/Gemma fix), **ZeroClaw** (DeepSeek-V4 fix), **IronClaw**, **Moltis** (NEAR AI).
    - *Specific Needs:* Seamless model provider swaps, unified skill/behavior portability across models, and robust fallback for API failures.

3.  **Production-Grade Stability & Regressions:**
    - *Projects:* **OpenClaw** (Coding Agent regression), **Hermes Agent** (output truncation, retry storms), **NanoBot** (WebUI session drops), **CoPaw** (memory persistence on model switch).
    - *Specific Needs:* Feature parity between channels (WeCom vs. Desktop), predictable session state, and resilience against LLM API changes.

4.  **Multi-Agent & Multi-User Collaboration:**
    - *Projects:* **ZeroClaw** (v0.8 multi-agent host), **CoPaw** (agent hooks), **PicoClaw** (sub-agent identity).
    - *Specific Needs:* Distinct agent roles/personas, agent-to-agent communication protocols, and collaborative workspace management.

5.  **Developer & DevOps Experience:**
    - *Projects:* **Moltis** (Docker environment stability), **ZeroClaw** (ARM64, Nix packages), **PicoClaw** (Dockerfile), **Hermes Agent** (Homebrew distribution gaps).
    - *Specific Needs:* Reliable containerized deployments, simplified CI/CD integration, and consistent packaging across platforms.

### 5. Differentiation Analysis

| Feature / Focus | Project(s) | Differentiation |
| :--- | :--- | :--- |
| **Core / Reference** | OpenClaw | The "standard" for features and speed. Caters to power users and developers willing to manage breaking changes. |
| **UI/UX & Memory** | NanoBot | Invests heavily in WebUI responsiveness and long-term memory systems (MECE overhaul), focusing on the "daily driver" desktop chat experience. |
| **Multi-Channel/Enterprise** | Hermes Agent, CoPaw | Focus on reliability across diverse platforms: Telegram Business, Slack, WeChat, DingTalk. Solve real-world deployment friction. |
| **Lightweight / Edge** | PicoClaw, TinyClaw | Tailored for resource-constrained environments (Sipeed hardware), offers a minimal "just works" core for homelabs. |
| **Architecture & Modularity** | ZeroClaw, IronClaw | Undergoing major architectural rewrites to be true multi-agent hosts. Target developers building complex agent systems with plugin ecosystems. |
| **Niche Contributors** | NullClaw, Moltis | Smaller projects with specific feature focuses (cron scheduling, telephony) that add unique value to the ecosystem. |

### 6. Community Momentum & Maturity

**Tier 1: Rapidly Iterating (High Feature Velocity)**
- **OpenClaw, ZeroClaw, IronClaw:** These projects are not just iterating; they are undergoing major architectural changes (multi-agent hosts, "Reborn" rewrites). They have the highest risk of regressions but also the potential for the most significant leaps forward.
- **NanoBot, CoPaw:** Highly responsive communities with efficient review processes. They are in a "feature expansion + stability" phase, rapidly integrating new providers and fixing regressions found in production.

**Tier 2: Stabilizing & Consolidating (Performance & Polish)**
- **Hermes Agent:** A high-velocity project that is now paying down significant technical debt in security and TUI reliability. The new security disclosures will force a stabilization period.
- **NanoClaw, Moltis:** Smaller, well-scoped projects in a responsive maintenance phase. They are solidifying their niche by fixing bugs and integrating provider requests quickly.

**Tier 3: Early Stage / Slower Pace (Infrastructure Building)**
- **PicoClaw, LobsterAI:** These projects show signs of maintainer bottleneck or a shift in focus. They are accumulating contributions that need review, risking contributor attrition.
- **NullClaw:** Low maintenance load but at high risk of contributor fatigue due to long-unmerged PRs.

### 7. Trend Signals for AI Agent Developers

- **Shift from "Can it work?" to "Will it stay working?":** The overwhelming volume of bug reports, regressions, and security disclosures signals that the market is no longer impressed by features alone. The premium is now on **predictable, secure, and reliable agent behavior over long sessions and across major updates**.
- **Multi-Agent is the Next Battleground:** The community is moving from "build a better agent" to "orchestrate many agents." This creates a massive new surface area for complexity in identity management, inter-agent communication (ACP protocols), and resource control.
- **The "SaaSification" of Open Source:** Features like Claude Code/Codex subscription reuse, OAuth flows, and enterprise Slack integrations signal a move towards monetzation and embedding agents into existing corporate workflows.
- **Security is an Architectural Problem:** The spate of disclosures (Hermes Agent) and critical fixes (OpenClaw sandbox escape) make it clear that security cannot be patched in. **Future-proof projects will need security-by-design**, including proper sandboxing, credential vaults, and least-privilege execution from day one.
- **The Cost of "Free":** User token anxiety is a recurring theme. The ecosystem is acknowledging that LLM usage is a finite resource. Demand is high for features like tiered context loading, lossless compression, and memory systems that minimize expensive tool calls.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-22

## 1. Today's Overview

NanoBot showed **strong development velocity** with 31 PRs updated in the last 24 hours (23 merged/closed, 8 open) and 9 issues resolved or active. The project demonstrates healthy maintainer responsiveness with same-day turnaround on multiple critical fixes. Activity is concentrated around **WebUI stability improvements**, **provider ecosystem expansion** (xAI Grok, Novita AI, Skywork, Ollama), and **memory system refinements**. No new release was cut today, suggesting the team is accumulating changes for a future version. The high merge rate (74% of updated PRs closed) indicates efficient code review processes.

---

## 2. Releases

**No new releases** — None published today.

---

## 3. Project Progress

### Merged/Closed PRs (23 total, selected highlights)

| PR | Author | Summary | Link |
|:---|:---|:---|:---|
| #3953 | Re-bin | **WebUI sidebar performance**: Batch-renders large chat histories, adds Cmd/Ctrl+K search, defers filtering until dialog opens | [PR #3953](https://github.com/HKUDS/nanobot/pull/3953) |
| #3951 | Re-bin | **Collapsible sidebar refinement**: Cat icon replaces wordmark, persistent desktop rail, unified DOM structure for smooth transitions | [PR #3951](https://github.com/HKUDS/nanobot/pull/3951) |
| #3940 | agbocsardi | **Fix Moonshot API rejection**: Drops redundant `reasoning_effort` for Kimi thinking models (k2.5/k2.6) | [PR #3940](https://github.com/HKUDS/nanobot/pull/3940) |
| #3944 | boogieLing | **Fix WebUI session refresh bug**: Preserves new chats during async session-list updates, fixes "conversation closes after first response" | [PR #3944](https://github.com/HKUDS/nanobot/pull/3944) |
| #3933 | HaisamAbbas | **Fix shell guard false positives**: URL commands (curl/wget) no longer misclassified as workspace path violations | [PR #3933](https://github.com/HKUDS/nanobot/pull/3933) |
| #3936 | Re-bin | **xAI Grok OAuth support**: PKCE-based login with refresh tokens, loopback callback, manual fallback | [PR #3936](https://github.com/HKUDS/nanobot/pull/3936) |
| #3927 | Alex-yang00 | **Novita AI provider**: OpenAI-compatible integration with dedicated API key support | [PR #3927](https://github.com/HKUDS/nanobot/pull/3927) |
| #3916 | Re-bin | **Skywork first-level support**: Auto-exposes in WebUI settings with routing tests | [PR #3916](https://github.com/HKUDS/nanobot/pull/3916) |
| #3923 | Re-bin | **Coding workflow optimization**: Structured `apply_patch` tool with multi-file edits, hunk matching, rollback safety | [PR #3923](https://github.com/HKUDS/nanobot/pull/3923) |
| #3922 | Re-bin | **Fix stdin inheritance in ExecTool**: Detaches stdin for shell commands to prevent hung processes | [PR #3922](https://github.com/HKUDS/nanobot/pull/3922) |
| #3947 | Re-bin | **Stabilize Windows shell tests**: Case-insensitive Git Bash/zsh detection, Python-based cwd for cross-platform consistency | [PR #3947](https://github.com/HKUDS/nanobot/pull/3947) |
| #3684 | chengyongru | **WeChat channel reliability**: Fixes silent message drops from swallowed exceptions, expired tokens, ret=-2 errors | [PR #3684](https://github.com/HKUDS/nanobot/pull/3684) |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Comments/Reactions | Topic | Underlying Need |
|:---|:---|:---|:---|
| [#3790](https://github.com/HKUDS/nanobot/issues/3790) | 14 comments | WebUI print content display corruption | **Production stability** — Users need reliable session rendering for daily use; "refresh to recover" workaround unacceptable for deployed instances |
| [#3884](https://github.com/HKUDS/nanobot/issues/3884) → [PR #3944](https://github.com/HKUDS/nanobot/pull/3944) | 5 comments + fix | WebUI conversation closes after first response | **Session state management** — Async server-client sync causing optimistic UI to revert; indicates architectural tension in WebUI's local-first vs. server-truth design |
| [#3885](https://github.com/HKUDS/nanobot/issues/3885) | 2 comments | Global kill-switch for Dream system jobs | **User control over autonomous behavior** — Memory system's proactive "dream" generation feels intrusive; users want explicit opt-out, not just interval tuning |
| [#3952](https://github.com/HKUDS/nanobot/pull/3952) | Open, high complexity | MECE memory architecture overhaul | **Scalable long-term memory** — Current system suffers from duplication sprawl and fuzzy attribution; enterprise/power users hitting scaling limits |

**Analysis**: The WebUI issues reveal a pattern — the frontend's optimistic updates conflict with server state refreshes. The Dream/memory issues show a product-philosophy tension: autonomous agent behaviors vs. user predictability expectations.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| **High** | WebUI session drops after first response | **Fixed** | [#3944](https://github.com/HKUDS/nanobot/pull/3944) | Race condition between optimistic new-chat creation and server session list refresh |
| **High** | Shell commands blocked by `restrictToWorkspace=true` | **Fixed** | [#3933](https://github.com/HKUDS/nanobot/pull/3933) | URL parsing misclassified `https://` as Windows drive paths — **security regression** |
| **High** | Moonshot API rejects Kimi k2.5/k2.6 requests | **Fixed** | [#3940](https://github.com/HKUDS/nanobot/pull/3940) | Double `reasoning_effort` + `thinking` parameter injection |
| **Medium** | WebUI duplicate `tool_call_id` error | **Reported** | None yet | [#3945](https://github.com/HKUDS/nanobot/issues/3945) — Intermittent, affects conversation flow |
| **Medium** | WebUI print content corruption | **Stale/Needs verification** | None | [#3790](https://github.com/HKUDS/nanobot/issues/3790) — May be resolved by recent sidebar/perf fixes |
| **Low** | ExecTool stdin inheritance causing hangs | **Fixed** | [#3922](https://github.com/HKUDS/nanobot/pull/3922) | Long-running shell commands blocked on inherited stdin |

**Stability Assessment**: Rapid fix turnaround is positive. The shell guard regression (#3933) is concerning — it suggests the security boundary needs more comprehensive test coverage for edge cases.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **Dream system global on/off switch** | [#3885](https://github.com/HKUDS/nanobot/issues/3885), [#3948](https://github.com/HKUDS/nanobot/issues/3948) | **High** | Multiple user complaints, PR #3952 already touching Dream architecture, simple `enabled: false` config pattern |
| **BM25-lite skill router** | [PR #3865](https://github.com/HKUDS/nanobot/pull/3865) | **Medium-High** | ~60% token reduction in system prompts; performance win aligns with cost-conscious users; still open, needs review |
| **Ollama image generation** | [PR #3946](https://github.com/HKUDS/nanobot/pull/3946) | **Medium** | Native/local model support is project ethos; PR open, needs validation |
| **OpenAI/Codex image generation** | [PR #3954](https://github.com/HKUDS/nanobot/pull/3954) | **Medium** | Expands provider coverage; Codex OAuth routing is niche but strategic |
| **Telegram/Feishu group message buffering** | [PR #3949](https://github.com/HKUDS/nanobot/pull/3949) | **Medium** | Quality-of-life for group chat deployments; debouncing is well-understood pattern |
| **xAI Grok OAuth** | [PR #3936](https://github.com/HKUDS/nanobot/pull/3936) | **High** | First-class provider integration, PKCE complete, likely to merge soon |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Intensity |
|:---|:---|:---|
| **Dream/memory autonomy feels invasive** | "此功能对我来说是个困扰...不可控的，真的很烦人" [#3948](https://github.com/HKUDS/nanobot/issues/3948); explicit kill-switch request [#3885](https://github.com/HKUDS/nanobot/issues/3885) | 🔴 High |
| **WebUI session fragility** | Print corruption [#3790](https://github.com/HKUDS/nanobot/issues/3790), conversation drops [#3884](https://github.com/HKUDS/nanobot/issues/3884), duplicate tool_call_id [#3945](https://github.com/HKUDS/nanobot/issues/3945) | 🔴 High |
| **Token/cost anxiety** | "还费TOKEN" [#3948](https://github.com/HKUDS/nanobot/issues/3948); BM25 router motivation is prompt cost reduction | 🟡 Medium |
| **Docker deployment friction** | WebUI localhost-only bootstrap [#3876](https://github.com/HKUDS/nanobot/issues/3876) — fixed but indicates deployment scenario gaps | 🟡 Medium |

### Positive Signals

- **Provider flexibility appreciated**: MiMo token plan docs [#3617](https://github.com/HKUDS/nanobot/issues/3617), rapid addition of Novita/Skywork/xAI
- **WebUI responsiveness improving**: Sidebar perf fixes [#3953](https://github.com/HKUDS/nanobot/pull/3953) address "large chat histories" — suggests power users with substantial conversation volumes

---

## 8. Backlog Watch

| Item | Age | Status | Risk | Action Needed |
|:---|:---|:---|:---|:---|
| [PR #3865](https://github.com/HKUDS/nanobot/pull/3865) — BM25-lite skill router | 6 days | **Open** | Stale; high-value performance win | Maintainer review; author may need rebase |
| [PR #3936](https://github.com/HKUDS/nanobot/pull/3936) — xAI Grok OAuth | 2 days | **Open** | Active; likely merge-ready | Final review, test validation |
| [PR #3952](https://github.com/HKUDS/nanobot/pull/3952) — MECE memory overhaul | 1 day | **Open** | Large architectural change; conflicts with simpler #3885 fix | Decision: incremental config switch vs. full refactor |
| [#3945](https://github.com/HKUDS/nanobot/issues/3945) — Duplicate `tool_call_id` | 1 day | **Open, no PR** | User-facing crash | Needs triage; may relate to recent WebUI changes |

**Recommendation**: The BM25 router (#3865) is at risk of bit-rot given the high PR velocity. The Dream configuration tension between #3885 (simple boolean) and #3952 (full MECE refactor) needs maintainer direction to avoid duplicate or conflicting solutions.

---

*Digest generated from HKUDS/nanobot GitHub activity for 2026-05-21/22. Data reflects 24-hour window ending 2026-05-22.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-22

## 1. Today's Overview

Hermes Agent shows **high community velocity** with 50 issues and 50 PRs updated in the last 24 hours, though the 88% open issue rate (44/50) and 74% open PR rate (37/50) suggest a growing backlog requiring maintainer attention. No new releases were cut today, indicating the project is in an active development phase rather than a stabilization window. Security concerns dominated the day's new issues with four CVE-adjacent reports filed by a single researcher around terminal sandboxing and credential handling. The project continues to expand platform support (Telegram Business, Svix webhooks, Termux/Android optimizations) while grappling with TUI/gateway reliability issues that directly impact user experience.

---

## 2. Releases

**None** — No new releases published today.

---

## 3. Project Progress

### Merged/Closed PRs Today (13 total, notable items):

| PR | Author | Description | Status |
|---|---|---|---|
| [#30121](https://github.com/NousResearch/hermes-agent/pull/30121) | teknium1 | **Termux non-TUI startup optimization** — salvages and improves #29438 with additional fixes; skips subprocess overhead for `hermes`, `hermes chat`, `hermes -z`, `hermes version` on Android | **Merged** |
| [#30051](https://github.com/NousResearch/hermes-agent/pull/30051) | teknium1 | **Computer-use fix**: surfaces `app=…` filter no-match instead of silently falling back to frontmost window; completes #24170 fix cycle | **Merged** |
| [#24324](https://github.com/NousResearch/hermes-agent/pull/24324) | briandevans | Original computer-use app-filter fix (superseded by #30051) | **Closed** |
| [#29438](https://github.com/NousResearch/hermes-agent/pull/29438) | adybag14-cyber | Original Termux optimization (58 commits behind, salvaged as #30121) | **Closed** |
| [#29990](https://github.com/NousResearch/hermes-agent/pull/29990) | toller892 | Trivial typo fix (`calcuating` → `calculating`) | **Merged** |
| [#30117](https://github.com/NousResearch/hermes-agent/pull/30117) | michaelkrauty | **LLM Wiki memory provider** — source-backed durable memory with hybrid search, caretaker CLIs, retrieval evals | **Closed** *(note: merged or closed unclear—likely closed without merge given 0 comments)* |
| [#17322](https://github.com/NousResearch/hermes-agent/pull/17322) | briandevans | `atomic_replace` cross-filesystem fallback for Docker/memory tool reliability | **Merged** |

### Active Development Lines:
- **Android/Termux support** maturing with cold-start optimizations for resource-constrained devices
- **Computer-use toolset** stabilizing after 5-bug cluster (#24170) now fully resolved via PRs #30046, #30032, #30051
- **Memory system** gaining enterprise-grade options (LLM Wiki provider with source attribution)

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Issue/PR | Comments | 👍 | Analysis |
|---|---|---|---|---|
| 1 | [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) Response truncation on output length limit | 31 | 4 | **Core reliability pain point** — affects CLI, Telegram, Discord, Slack gateways; long-form generation fundamentally broken for production use. Closed without clear resolution path, suggesting workaround or "won't fix" for architectural limitation. |
| 2 | [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) Improved Dashboard themes — hard to read | 15 | 24 | **Accessibility/design debt** — highest vote count signals broad user frustration; serif fonts, low contrast, light weights violate WCAG principles. Users want production-ready UI, not aesthetic experiments. |
| 3 | [#24360](https://github.com/NousResearch/hermes-agent/issues/24360) No built-in skills in Homebrew install | 7 | 0 | **Distribution gap** — Homebrew packaging lags behind expected "batteries included" experience; skills folder empty suggests incomplete formula or version skew. |

### Underlying Needs:
- **Reliability over features**: Users need predictable long-form output (#7237) more than new capabilities
- **Polished defaults**: Theme accessibility (#18080) and packaging completeness (#24360) indicate project still feels "alpha" to casual users
- **Gateway stability**: TUI/gateway crashes (#14036, #30023) block adoption for non-technical users

---

## 5. Bugs & Stability

### Critical (P1) — Immediate attention required

| Issue | Component | Description | Fix PR? |
|---|---|---|---|
| [#14036](https://github.com/NousResearch/hermes-agent/issues/14036) | Gateway/TUI + Memory | **SIGPIPE flood → gateway exit(0) mid-turn** with `memory.provider: byterover`; session unusable. Byterover-specific, workaround is disabling external memory. | ❌ None |
| [#30095](https://github.com/NousResearch/hermes-agent/issues/30095) | Agent / Kimi provider | **Hard crash**: `TypeError: unhashable type 'list'` in `sanitize_moonshot_tools` when union types present; blocks all tool use for Moonshot models | ❌ None |
| [#29926](https://github.com/NousResearch/hermes-agent/issues/29926) | CLI / Context compression | **Context compression runs but result discarded** — 162→10 messages saved, then reverted next turn; silent performance regression, token waste | ❌ None |
| [#27678](https://github.com/NousResearch/hermes-agent/pull/27678) | API Server / Gateway | **Crash on fallback provider takeover**: `TypeError: multiple values for keyword argument 'model'` | ✅ **PR open** (#27678) |

### High (P2) — Significant impact

| Issue | Component | Description | Fix PR? |
|---|---|---|---|
| [#22986](https://github.com/NousResearch/hermes-agent/issues/22986) | Agent / Codex | **8x retry rate increase** post-v0.13.0; strict stream-timeout enforcement suspected; persists despite keepalive bypass PR | ❌ None |
| [#24860](https://github.com/NousResearch/hermes-agent/issues/24860) | TUI / Dashboard | **Ctrl+V paste broken, image paste unsupported** in dashboard chat | ❌ None |
| [#28818](https://github.com/NousResearch/hermes-agent/issues/28818) | TUI / Kanban | **Data loss risk**: scratch workspace cleanup deletes real source directories when paths overlap | ❌ None |
| [#30092](https://github.com/NousResearch/hermes-agent/issues/30092) | CLI / macOS | **OSC 11 probe leaks into prompt_toolkit input** on Terminal.app; startup pollution | ❌ None |
| [#30100](https://github.com/NousResearch/hermes-agent/issues/30100) | Security / Terminal | **Command approval bypass** via shell obfuscation (base64, backticks, variable expansion) | ❌ None |
| [#30101](https://github.com/NousResearch/hermes-agent/issues/30101) | Security / Code execution | **Sandbox escape**: same UID, no seccomp/network isolation in code execution | ❌ None |
| [#30102](https://github.com/NousResearch/hermes-agent/issues/30102) | Security / Terminal | **Sudo passwords cached in plaintext** in process memory; memory dump = privilege escalation | ❌ None |
| [#30103](https://github.com/NousResearch/hermes-agent/issues/30103) | Security / Auth | **API key leak via `env_passthrough`**: malicious skills can whitelist credentials to subprocesses | ❌ None |

### Security Cluster Analysis
Four coordinated disclosures by [@yeahboi233](https://github.com/yeahboi233) reveal **systematic sandboxing deficiencies**. The regex-based command guards (#30100), shared-UID execution (#30101), plaintext credential storage (#30102), and permissive env passthrough (#30103) suggest security was not designed in from the start. These are architectural, not patchable bugs—likely require breaking changes to fix properly.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Votes | Predicted Priority | Rationale |
|---|---|---|---|
| [#25267](https://github.com/NousResearch/hermes-agent/issues/25267) Claude Agent SDK with subscription OAuth | 5 | **High** | Codex-style subscription reuse is proven pattern; reduces friction for Claude's large subscriber base; revenue-adjacent for Anthropic partnership |
| [#29688](https://github.com/NousResearch/hermes-agent/issues/29688) Vosk local STT for low-resource devices | 0 | **Medium** | Aligns with Termux/Raspberry Pi support trajectory; edge deployment differentiator |
| [#29726](https://github.com/NousResearch/hermes-agent/issues/29726) MCP server init failure shouldn't block startup | 0 | **High** | Reliability/ops requirement; "fail open" for optional integrations is SRE best practice |
| [#29999](https://github.com/NousResearch/hermes-agent/issues/29999) `image_gen` reference image support | 0 | **Medium** | Multi-modal model enablement (UNI 1.1); plugin ecosystem expansion |
| [#30080](https://github.com/NousResearch/hermes-agent/issues/30080) agentskills.io strict compliance | 0 | **Medium** | Standards adoption (Anthropic, NVIDIA, ~40 clients) for interoperability |
| [#30113](https://github.com/NousResearch/hermes-agent/issues/30113) "No negative goblins" prompt engineering | 0 | **Low** | Philosophical/UX exploration; unlikely to ship as-is |

**Incoming PRs signaling direction:**
- [#30055](https://github.com/NousResearch/hermes-agent/pull/30055): **Telegram Business "Secretary Bot" mode** — observe-with-approval workflow for customer service
- [#30115](https://github.com/NousResearch/hermes-agent/pull/30115): **Svix webhook ingestion** — no-public-HTTP webhook receiving
- [#30117](https://github.com/NousResearch/hermes-agent/pull/30117): **LLM Wiki memory** — source-attributed, durable knowledge with retrieval evals

**Next version likely includes:** Telegram Business, Svix platform, Termux optimizations, Wiki memory, computer-use stability fixes.

---

## 7. User Feedback Summary

### Pain Points (verbatim themes)

| Theme | Evidence | Severity |
|---|---|---|
| **Output reliability** | #7237 truncation, #22986 retry storms, #29926 compression failure | 🔴 Critical |
| **TUI/gateway fragility** | #14036 gateway exits, #30023 Kanban overflow, #24860 paste broken, #30083 Ask tool no paste | 🔴 Critical |
| **Accessibility/readability** | #18080 themes "hard to read", serif fonts, low contrast | 🟡 High |
| **Packaging completeness** | #24360 Homebrew missing skills, #17187 NODE_OPTIONS failure | 🟡 High |
| **Security posture** | #30100-30103 four disclosures in one day | 🔴 Critical |
| **Platform integration friction** | #29125 Claude CLI auth flow, #30091 Slack bot-to-bot dropped | 🟡 High |

### Use Cases Emerging
- **Small business automation**: Telegram Business mode (#30055) signals demand for human-in-the-loop customer service
- **Edge/embedded deployment**: Raspberry Pi 4 + Vosk (#29688), Termux optimizations (#30121) show resource-constrained use
- **Multi-agent collaboration**: Slack bot-to-bot (#30091), Claude subscription reuse (#25267) indicate team/agent-network scenarios

### Satisfaction Signals
- High engagement (50 issues/PRs daily) indicates **strong user investment**
- 24 👍 on theme issue shows **visual polish matters** to broad base
- Feature requests for standards compliance (#30080) suggest **enterprise evaluators** examining project

---

## 8. Backlog Watch

### Long-Unanswered Critical Items

| Issue | Age | Last Activity | Blocker |
|---|---|---|---|
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) Output truncation | ~6 weeks | 2026-05-21 | **Closed without resolution?** — 31 comments, then closed; unclear if fixed or abandoned |
| [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) Theme accessibility | ~3 weeks | 2026-05-21 | Needs design decision; 24 votes unaddressed |
| [#11693](https://github.com/NousResearch/hermes-agent/pull/11693) Memory config limits | ~5 weeks | 2026-05-22 | **Open PR** — registry-dispatched memory ignores `config.yaml`; fix ready but unmerged |
| [#25713](https://github.com/NousResearch/hermes-agent/pull/25713) Sudo password freeze | ~5 weeks | 2026-05-22 | **Open PR** — TUI freeze fix ready; marshals modal to loop thread |

### PRs Needing Maintainer Decision

| PR | Age | Status |
|---|---|---|
| [#26124](https://github.com/NousResearch/hermes-agent/pull/26124) Dashboard chat off event loop | ~1 week | Open — blocks WebSocket keepalives |
| [#27752](https://github.com/NousResearch/hermes-agent/pull/27752) Goal judge error handling | ~1 week | Open — infinite loop risk on judge failure |
| [#25345](https://github.com/NousResearch/hermes-agent/pull/25345) Android HTML browser handoff | ~1 week | Open — local HTTP server for HTML viewing |

### Recommended Maintainer Actions
1. **Security triage**: Acknowledge #30100-30103 with CVE request timeline or architectural response plan
2. **Merge queue**: #11693, #25713, #27678 are reliability fixes with clear scope
3. **Theme decision**: Commit to #18080 redesign or document accessibility as non-goal
4. **Release planning**: Bundle Termux + computer-use fixes + Telegram Business for v0.14.0

---

*Digest generated from 50 issues and 50 PRs updated 2026-05-21/22. All links: https://github.com/NousResearch/hermes-agent*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-22

## 1. Today's Overview

PicoClaw shows **high maintenance velocity** with 30 PRs and 9 issues updated in the last 24 hours, though the majority of PR activity (20 open, 10 merged/closed) consists of automated dependency bumps rather than core feature work. The project released **v0.2.8-nightly.20260521.33f9d638**, indicating active development toward a stable v0.2.8. Community engagement is moderate with several stale issues being closed in bulk, suggesting a cleanup sweep. Two substantive new issues were opened regarding performance optimization and project sustainability funding. The maintainers appear focused on stability polish and provider ecosystem expansion rather than major architectural changes.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| [v0.2.8-nightly.20260521.33f9d638](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) | Nightly | Automated build from `main`; **unstable**, use with caution. No explicit changelog beyond comparison link. |

**Migration Notes:** None provided for nightly. Users on v0.2.8 stable should not migrate to nightly in production.

---

## 3. Project Progress

### Merged/Closed PRs (10 total, notable items):

| PR | Author | Summary | Significance |
|----|--------|---------|------------|
| [#2812](https://github.com/sipeed/picoclaw/pull/2812) | moltenbot000 | Root Dockerfile for development | **Infrastructure** — Docker setup for easier contributor onboarding; closed (stale) |
| [#2779](https://github.com/sipeed/picoclaw/pull/2779) | bogdanovich | Telegram topic group trigger overrides | **Feature** — Granular per-topic bot behavior in Telegram forums; closed (stale) |
| [#2778](https://github.com/sipeed/picoclaw/pull/2778) | bogdanovich | `working_summary` tool feedback for chat | **UX** — Live progress indicators during tool execution; closed (stale) |
| [#2777](https://github.com/sipeed/picoclaw/pull/2777) | bogdanovich | Suppress feedback for scheduled cron turns | **Bugfix** — Prevents ghost messages from background jobs; closed (stale) |
| [#2776](https://github.com/sipeed/picoclaw/pull/2776) | bogdanovich | Stop typing for topic replies | **Bugfix** — Typing indicator cleanup for Telegram topics; closed (stale) |
| [#2772](https://github.com/sipeed/picoclaw/pull/2772) | bogdanovich | Preserve Telegram forum topic for `message` tool | **Bugfix** — Routing fix for interim agent messages; closed (stale) |

**Pattern:** All of bogdanovich's PRs were closed as stale despite being technically sound fixes, suggesting either: (a) merge conflicts accumulated, (b) review bandwidth constraints, or (c) integration into a larger refactor. The Dockerfile PR similarly stalled.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Comments | Topic | Underlying Need |
|------|----------|-------|---------------|
| [#629](https://github.com/sipeed/picoclaw/issues/629) | **15** | LLM call retry logic | **Reliability** — Production deployments need resilience against transient provider failures (HTTP 500); users expect automatic retry with backoff |
| [#2775](https://github.com/sipeed/picoclaw/issues/2775) | 4 | Sub-agent identity confusion from inherited `AGENT.md` | **Multi-agent architecture** — Users building complex agent hierarchies need role isolation; current workspace inheritance breaks separation of concerns |
| [#2702](https://github.com/sipeed/picoclaw/issues/2702) | 4 | Missing sender attribution in group chat history | **Multi-user correctness** — Group channels need conversational memory that distinguishes participants, not just "current sender" |

**Analysis:** The community is pushing PicoClaw toward **production multi-agent and multi-user scenarios**. The retry bug (#629) had the highest comment count, indicating it's a blocker for serious deployments. The sub-agent identity issue reveals architectural tension in PicoClaw's workspace-based configuration inheritance.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Details |
|----------|-------|--------|---------|---------|
| **High** | [#629](https://github.com/sipeed/picoclaw/issues/629) — LLM calls hang on failure without retry | **CLOSED** | Unknown | Long-running tasks deadlock on HTTP 500; workaround unclear |
| **Medium** | [#2702](https://github.com/sipeed/picoclaw/issues/2702) — Group chat history lacks sender attribution | **CLOSED** | Unknown | Breaks multi-user context in Discord/Telegram groups |
| **Medium** | [#2798](https://github.com/sipeed/picoclaw/issues/2798) — PDF stream corruption in Telegram | **CLOSED** | Unknown | PicoClaw-specific; works in OpenClaw with same backend |
| **Medium** | [#2795](https://github.com/sipeed/picoclaw/issues/2795) — Conversation history only shows last user message | **CLOSED** | Unknown | Session compression over-aggressive; breaks user review |
| **Medium** | [#2787](https://github.com/sipeed/picoclaw/issues/2787) — All messages share session `updated` timestamp | **CLOSED** | Unknown | Frontend displays inaccurate message times |

**Concerns:** All five bugs were closed same-day without linked fix PRs visible in the data. This suggests either: (a) fixes were merged in bulk without PR references, (b) issues were closed as duplicates of unlinked PRs, or (c) "stale" closure due to inactivity. The lack of transparency in resolution is a **process risk**.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in v0.2.8+ | Rationale |
|---------|----------|----------------------|-----------|
| **GPT4Free (g4f) provider support** | [#2901](https://github.com/sipeed/picoclaw/issues/2901) | Moderate | Strong user need for low-cost inference; OpenAI-compatible API reduces integration cost |
| **NEAR AI Cloud provider** | [#2917](https://github.com/sipeed/picoclaw/pull/2917) | **High** | Active PR opened 2026-05-21; TEE-capable positioning aligns with privacy trends |
| **Frontmatter tool policy filters** | [#2838](https://github.com/sipeed/picoclaw/pull/2838) | High | Active PR; `allow`/`deny` glob patterns for tools/MCP servers addresses security hardening need |
| **Request-scoped context policies** | [#2914](https://github.com/sipeed/picoclaw/pull/2914) | High | Active PR; `turn_profile` for controlling history/system context/tools per-turn enables fine-grained agent behavior |
| **CPU/Memory/IO optimizations** | [#2916](https://github.com/sipeed/picoclaw/issues/2916) | Moderate | Detailed analysis provided; resource efficiency critical for edge deployment (Sipeed hardware context) |
| **GitHub Sponsors / FUNDING.yml** | [#2912](https://github.com/sipeed/picoclaw/issues/2912) | Low-Moderate | Sustainability infrastructure; low technical risk but requires organizational decision |

**Predicted v0.2.8 stable contents:** NEAR AI provider, tool policy filters, turn context policies. The g4f support may follow as v0.2.9 given it lacks an active PR.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Reliability at scale** | #629 (retry logic), #2798 (PDF corruption) | Critical for production |
| **Observability/debugging** | #2787 (timestamps), #2795 (truncated history) | High for user trust |
| **Multi-agent complexity** | #2775 (role confusion) | High for advanced users |
| **Resource efficiency** | #2916 (CPU/memory/IO optimization request) | High for edge/hardware-constrained deploys |

### Use Cases Emerging

- **Homelab/lightweight deployment**: GPT4Free request (#2901), optimization request (#2916) → users running on Sipeed hardware or personal servers
- **Team/collaborative bots**: Multi-user channel issues (#2702) → workplace Slack/Discord integrations
- **Complex agent workflows**: Sub-agent spawning with distinct roles (#2775) → software engineering, content pipelines

### Satisfaction Signals

- Active nightly builds suggest engaged maintainership
- Rapid issue closure (even if opaque) indicates responsiveness
- Growing provider ecosystem (NEAR AI, g4f interest) shows platform extensibility valued

### Dissatisfaction Signals

- "Stale" mass-closure of technically valid PRs (#2772-#2779) may frustrate contributors
- No funding mechanism (#2912) signals sustainability concern from community
- Session/compression behavior (#2795) described as breaking user expectations

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|-------------|
| [#2662](https://github.com/sipeed/picoclaw/pull/2662) — Unify vendors table in providers docs | ~4 weeks | **Contributor attrition** | Review/merge or provide feedback; documentation debt |
| [#2838](https://github.com/sipeed/picoclaw/pull/2838) — Frontmatter tool policy filters | ~2 weeks | **Security feature delay** | Code review; blocks enterprise hardening use cases |
| [#2916](https://github.com/sipeed/picoclaw/issues/2916) — CPU/Memory/IO optimizations | New | **Performance roadmap input** | Maintainer response to detailed analysis; potential bounty/mentorship |
| [#2912](https://github.com/sipeed/picoclaw/issues/2912) — FUNDING.yml | New | **Sustainability** | Organizational decision on GitHub Sponsors, Open Collective, etc. |

**Critical Gap:** The 6 closed PRs from bogdanovich (2026-05-05 to 2026-05-07) represent ~2 weeks of contributor work that may need rebase or reimplementation. If these fixes were independently merged, the project should update contributors to prevent duplicate effort.

---

*Digest generated from GitHub activity 2026-05-21. All links reference https://github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-22

## Today's Overview
The project is in a period of **high integration activity**, with 11 PRs and 3 issues updated in the last 24 hours. Two PRs were merged/closed, indicating steady progress, while 9 remain open with active review. The most significant development is the continued push toward **multi-provider support** — Codex-only installations, LiteLLM integration, and surfacing Claude Code skills to non-Claude providers are all advancing simultaneously. On the stability front, three new Signal authentication bugs were reported and one already has a fix PR open. The Veo 3.1 video generation feature (PR #2532) from nightlaro remains the largest pending capability, receiving updates throughout the day.

## Releases
**No new releases** published. The project appears to be in an active development cycle between releases.

## Project Progress
**Two PRs closed/merged today:**
- **#2576** `fix(progress): assistant text block改用progressType=text，不再被ea21e58误抑制` — Closed. Fixes a regression where intermediate agent narration ("let me look at this code") was being suppressed in SDK mode, causing users to see only final results. Root cause was `flushPendingThought` doubly filtering assistant text blocks via `progressType='thinking'`.
- **#2577** `feat(deshi): auto-inject channelContext from session_routing` — Closed. Removes agent-fabricated `channelContext` from MCP tool arguments; instead auto-injects `channel/platformId/threadId` by reading directly from SQLite inside the container. Also removes unused `isGroup` field.

**Key open PRs advancing:**
- **#2532** — Veo 3.1 end-to-end video generation/stitching + inbound media (Slack). Updated daily, likely nearing review completion.
- **#2580** — Full Codex-only installation support (new PR, posted today). Includes credential management via OneCLI, Codex as sole provider.
- **#2584** — Fix for Signal JSON field-name mismatch (opened same day as the bug report, rapid response).
- **#2474** — AI-coding-CLI picker for setup flow (Claude Code vs Codex).
- **#2337** — Surface Claude Code skill catalog to non-Claude providers.
- **#2361** — Tighten Codex provider contracts (stale SDK sketch replacement).

## Community Hot Topics

### Most Active Issues
- **#2583** [Signal restartService launchctl issue](https://github.com/nanocoai/nanoclaw/issues/2583) — Reports that `launchctl kickstart -k` silently no-ops when the plist is unloaded. No comments yet, but the bug was filed with a detailed code reference.
- **#2582** [Signal listAccounts deadlock](https://github.com/nanocoai/nanoclaw/issues/2582) — `spawnSync` with no timeout causes deadlock when signal-cli daemon holds the config-file lock during concurrent access.
- **#2581** [Signal JSON field mismatch](https://github.com/nanocoai/nanoclaw/issues/2581) — `signal-cli` >= 0.13 changed field name from `account` to `number`. **Already has a fix PR (#2584) opened the same day.**

### Analysis
The Signal integration is the **most fragile subsystem** right now, with three bugs reported in a single day. The underlying need is clear: the Signal adapter needs better error handling, proper timeouts, and compatibility with newer signal-cli versions. The maintainer responded quickly to #2581 with a fix PR, but #2583 and #2582 remain unaddressed.

## Bugs & Stability

| Issue | Severity | Summary | Fix Available |
|-------|----------|---------|---------------|
| [#2583](https://github.com/nanocoai/nanoclaw/issues/2583) | **High** | `restartService()` silently no-ops when plist is unloaded — users may think restart succeeded when it didn't | No |
| [#2582](https://github.com/nanocoai/nanoclaw/issues/2582) | **High** | Signal `listAccounts` deadlocks indefinitely when daemon holds lock — blocks setup and re-authentication | No |
| [#2581](https://github.com/nanocoai/nanoclaw/issues/2581) | **Medium** | Signal auth wizard always shows "no linked account" on signal-cli >= 0.13 — breaks new user onboarding | Yes ([#2584](https://github.com/nanocoai/nanoclaw/pull/2584)) |

Additionally, the **recently-closed** PR #2576 addressed a regression where assistant text blocks in SDK mode were being suppressed (`progressType` filtering bug), which was disrupting user experience during tool calls.

## Feature Requests & Roadmap Signals

### Likely Next-Release Features
- **Veo 3.1 video generation** (PR #2532) — the largest feature in active development. Enables outbound video generation + stitching via Gemini API and inbound user-uploaded media to Slack.
- **Full Codex-only installation** (PR #2580) — enables NanoClaw to run without Claude Code, using Codex as the sole AI-coding CLI and agent provider.
- **AI-coding-CLI picker** (PR #2474) — setup flow will let users choose between Claude Code and OpenAI Codex for headless tasks.
- **LiteLLM provider** (PR #2490) — adds operational/container skill support for LiteLLM as an agent provider.
- **Telegram claim link** (PR #2578) — submitted by sumsumai, pending review.

### Roadmap Signals
- **Multi-provider standardization**: PR #2337 (skill catalog for non-Claude providers) and #2361 (Codex contract tightening) suggest the project is actively working toward provider-agnostic behavior — skills and personas working identically across Claude Code, Codex, and potentially others.
- **WhatsApp auth resilience**: PR #2579 addresses credential persistence on forced logout, signaling a focus on channel robustness.

## User Feedback Summary

### Pain Points
- **Signal adapter fragility**: Users report three distinct bugs in Signal integration — deadlocks, silent failures, and field-name incompatibility. The rapid fix for #2581 suggests this is impacting new user onboarding.
- **SDK mode progress suppression** (now fixed in #2576): Users were unable to see intermediate agent narration between tool calls, degrading the conversational experience.
- **WhatsApp credential persistence** (PR #2579): Forced logouts leave stale credentials, causing repeated 401 errors on system reboots — a persistence/cleanup annoyance.

### Positive Signals
- The **rapid response** to the Signal JSON field bug (bug filed, fix PR opened same day) indicates strong maintainer engagement.
- **High PR throughput** (11 in 24 hours) with contributions from multiple authors (nightlaro, snymanpaul, chiptoe-svg, cfis, sumsumai, RheagalFire, HokutoMorita) shows a **healthy, diverse contributor base**.

## Backlog Watch

### Issues Needing Maintainer Attention
- **#2583** — `restartService()` silent failure on unloaded plist. No comments or assignments yet. Could cause subtle service management bugs.
- **#2582** — Signal `listAccounts` deadlock. No timeout in `spawnSync` — this is a potential infinite hang. Needs urgency.

### PRs Stalled or Unreviewed
- **#2361** — "Tighten codex provider contracts" (opened 2026-05-09, 13 days ago). Updated yesterday but no review comments. This is a foundational cleanup for Codex support.
- **#2337** — "Surface Claude Code skill catalog" (opened 2026-05-07, 15 days ago). Large feature affecting provider architecture. Updated yesterday but no maintainer signal.
- **#2474** — AI-coding-CLI picker (opened 2026-05-14, 8 days ago). Multiple updates but no review. This is a prerequisite for the Codex-only installation PR.
- **#2490** — LiteLLM provider (opened 2026-05-15, 7 days ago). Updated yesterday, no review comments.

### Assessment
Four important architectural PRs (codex contracts, skill catalog, CLI picker, LiteLLM) are **waiting in the queue for 7–15 days** without maintainer review. This suggests the core team may be **bottlenecked** on review capacity, possibly focused on the Veo 3.1 feature and the new bugfix PRs. The backlog of unreviewed structural changes could delay the multi-provider roadmap.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-05-22

## 1. Today's Overview
NullClaw shows low immediate activity with zero issues updated in the last 24 hours and no new releases. However, two open pull requests were updated recently, indicating ongoing development work behind the scenes. The project appears to be in a steady patch-and-feature phase rather than a major release cycle. Community engagement is quiet, with no new bugs or hot discussions flagged today. Overall, project health is stable but could benefit from increased maintainer responsiveness on pending contributions.

## 2. Releases
**No new releases** are recorded for the current period. The latest available release remains unchanged, with no version bumps, breaking changes, or migration notes to report.

## 3. Project Progress
No pull requests were merged or closed in the last 24 hours. Two open PRs remain under review or in development:

- **[PR #783 — feat(cron): cron subagent, run history, JSON output, security hardening](https://github.com/nullclaw/nullclaw/pull/783)** (Author: yanggf8, Updated: 2026-05-21)  
  Implements a full cron subagent engine with DB-backed scheduling, history tracking, job type support (skill/agent/shell), timezone offsets, delivery routing, and operator alerts. Also adds JSON output for `cron list` and `cron schedule`. Represents a substantial feature addition.

- **[PR #922 — feat(providers): add NEAR AI Cloud provider](https://github.com/nullclaw/nullclaw/pull/922)** (Author: PierreLeGuen, Created/Updated: 2026-05-21)  
  Adds support for NEAR AI Cloud as an OpenAI-compatible provider, with API key configuration, model catalog parsing, and integration documentation. This expands NullClaw's provider ecosystem.

## 4. Community Hot Topics
Both open PRs are currently the most active items, but neither has drawn significant comments or reactions beyond the authors themselves. No issues with high engagement exist today. The underlying need appears to be two-fold:
- **Cron subagent (PR #783):** Users/contributors want robust scheduled task execution within the agent ecosystem, with audit trails and security controls.
- **NEAR AI provider (PR #922):** Growing demand for diverse LLM backend options beyond OpenAI, particularly cloud-hosted models with competitive pricing.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported today. The project has zero open issues, indicating either excellent stability or that users are not filing reports through GitHub. No severity or fix PRs are applicable.

## 6. Feature Requests & Roadmap Signals
Two clear feature directions are visible from the open PRs:
- **Cron/Scheduling subsystem** — likely to be included in the next release given its maturity and the fact it has been open since April 2026.
- **NEAR AI Cloud provider** — a quick-turnaround contribution (submitted just yesterday) that may land soon if accepted.

No user-submitted feature requests were recorded today, but the NEAR AI addition suggests community interest in provider diversity.

## 7. User Feedback Summary
No direct user feedback, pain points, or use cases were shared in the last 24 hours. The absence of issues or comments may indicate either user satisfaction or a lack of active reporting channels. Given the two large feature PRs in flight, the community appears more focused on development contributions than filing tickets.

## 8. Backlog Watch
No long-unanswered issues exist, as the issue tracker shows zero open/active items. However, both open PRs (especially PR #783, open since April 7, 2026) have not been merged for over a month. This suggests maintainers may be:
- Waiting for further testing or documentation
- Blocked by review capacity
- Prioritizing other internal work

**Watch item:** **[PR #783 — Cron subagent](https://github.com/nullclaw/nullclaw/pull/783)** — stale for 44 days; if not merged soon, it could risk conflicts with other changes.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the IronClaw project digest for May 22, 2026.

---

## IronClaw Project Digest
**Date:** 2026-05-22

### 1. Today's Overview
The project is in a state of intense velocity, with the massive "Reborn" architecture overhaul dominating developer activity. Of the 47 pull requests updated in the last 24 hours, 21 were merged or closed, signaling a major push to land core infrastructure. The Reborn cutover is clearly the primary focus, with PRs progressing through dependency chains for skills, budgets, OAuth, and runtime composition. Community activity is relatively low compared to core development, with user-facing bugs reported in the UI and Mission workflows.

### 2. Releases
No new releases were published today. The latest tagged release is `ironclaw-v0.27.0` (April 29, 2026), though the team is aware that crates.io is stalled at `0.24.0` due to a downstream dependency conflict with `wasmtime`. This is tracked in **Issue #3259** as a known blocker for external consumers.

### 3. Project Progress
The primary focus was the "Reborn" next-generation architecture. Key merged/closed PRs include:

- **Runtime & Skills:** PR #3850 ([closed](https://github.com/nearai/ironclaw/pull/3850)) wires filesystem skills into the Reborn runtime context. PR #3848 ([closed](https://github.com/nearai/ironclaw/pull/3848)) adapts skill bundles into a Reborn skill context. PR #3855 ([closed](https://github.com/nearai/ironclaw/pull/3855)) moves generic extension installation state into the `ironclaw_extensions` crate.
- **Workflow & Policies:** PR #3852 ([closed](https://github.com/nearai/ironclaw/pull/3852)) addressed code review follow-ups for the `BeforeInboundPolicy` seam, adding timeouts and rate limiting.
- **Ledger & Persistence:** PR #3759 ([closed](https://github.com/nearai/ironclaw/pull/3759)) added a durable, SQL-backed idempotency ledger for the product workflow.
- **Core Infrastructure:** Two closed issues indicate completed "Reborn cutover blockers": a reference `AgentLoopHost` facade (Issue #3016) and an event substrate integration test suite (Issue #3022).

### 4. Community Hot Topics
The most active discussion centered on the Reborn architecture itself.

- **Issue #3031 ([EPIC] Reborn product surface migration):** With 7 comments, this open epic tracks the migration of user/operator behavior from V1 to Reborn. It highlights the community and team's collective awareness that these deep architectural changes must eventually result in a transparent user experience.
- **Issue #3016 ([CLOSED] Reference AgentLoopHost facade):** With 13 comments, this closed blocker issue was a major coordination point. Comments likely detailed the contract between the new host layer and the existing agent loop logic.
- **Issue #3259 (Publishing versions to crates.io):** With 7 comments, this highlights a significant pain point for downstream consumers who are locked out of the latest 3 minor versions due to a CVE-related dependency mismatch.

### 5. Bugs & Stability
*No critical crashes or regressions were reported today.* The most significant stability concern:

- **Medium - Issue #3839 (Failed Mission "Retry" button returns fired:false):** A user reports that clicking the "Retry" button on a failed mission calls the API but the action is rejected due to the mission being in a "terminal" state or having a "budget exhausted". This indicates a UI/API state mismatch where the retry button is presented for non-retryable states. No fix PR yet.
- **Low - Issue #3821 (Thread::restore_from_messages drops orphan assistant rows):** A user identified a logic bug in the session restoration code where assistant messages without a preceding user message are silently dropped. This is a data integrity concern for custom out-of-band context injection.

### 6. Feature Requests & Roadmap Signals
- **Closer to Implementation - Multi-channel experience:**
    - **Issue #3857 (Slack ProductAdapter MVP):** Created today, this signals that the Reborn architecture is about to get its first major non-Web channel integration. It specifies using preconfigured credentials and routing through Reborn services.
    - **PR #1378 (Per-channel MCP tool filtering):** An old PR still active, this addresses a high-value use case for deployments across Slack, Telegram, and Web, ensuring the right tools are available in the right context.
- **User-requested UI polish:**
    - **Issue #3840 (Improve channel badges in Web UI):** A user request for better visual distinction (colors, icons) between channels like WeChat and Telegram in the conversation list. Low effort, high impact for multi-channel users.

### 7. User Feedback Summary
- **Pain Point:** **Replaying failed missions is broken.** The UI shows a "Retry" button for a mission in a terminal state, and clicking it yields a confusing "fired: false" response (Issue #3839). This undermines user trust in the mission recovery workflow.
- **Pain Point:** **Missing context in Routine notifications.** A long-standing request (Issue #1519, since March) asks for routine notifications to be injected into the user's main chat thread, not isolated in a separate "routine conversation," which users find disorienting.
- **Support Request:** **Unclear `notify_channels` behavior.** A user is confused about how missions created from the Web UI inherit their notification channel setting when created from different source-channel conversations (Issue #3846).

### 8. Backlog Watch
- **Issue #3259 (crates.io publishing blocked):** P0 for ecosystem health. Downstream Rust consumers are pinned to `ironclaw-v0.24.0`. The team has acknowledged this and tagged it, but it remains open. PRs depend on resolving the `wasmtime` CVE situation.
- **PR #1378 (Per-channel MCP tool filtering):** This PR has been open for over two months. It addresses a core multi-tenancy/multi-channel requirement and is marked as "contributor: experienced." It may be waiting for the Reborn architecture to stabilize before merging, but its age warrants a decision.
- **Issue #1519 (Routine notifications lack context):** Open since March 2026 with no recent assignment. It is a significant UX gap for users who use automated routines for notifications.
- **Issue #3447 (Nightly E2E failure):** Open since May 10, this signals a persistent CI issue that could be masking real regressions.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the structured project digest for **LobsterAI** based on GitHub activity through **2026-05-22**.

---

## LobsterAI Project Digest — 2026-05-22

### 1. Today's Overview
Project activity is **low**, with no new issues or releases opened in the last 24 hours. However, a notable **burst of maintenance activity** occurred yesterday (2026-05-21), primarily driven by core contributor `fisherdaddy`, who closed two high-priority pull requests related to the IM bot management UI and gateway restart logic. Despite the lack of fresh issues, the backlog remains active: **9 open PRs** received updates, with several stale feature branches (tagged `[stale]`) showing renewed attention from the maintainers. The project appears to be in a **consolidation phase**, focusing on merging existing improvements rather than adding new features.

### 2. Releases
**None.** No new releases were published in the last 24 hours.

### 3. Project Progress
Two pull requests were closed/merged yesterday, indicating progress in key stability areas:

- **[PR #2025 (Closed)](https://github.com/netease-youdao/LobsterAI/pull/2025):** `refactor(im): redesign im bot management UI` — A redesign of the IM bot management interface, touching the renderer, OpenClaw, and IM subsystems. This suggests an improved user experience for configuring and managing IM bots.
- **[PR #2024 (Closed)](https://github.com/netease-youdao/LobsterAI/pull/2024):** `optimize: optimize gateway restart in settings` — An optimization to the gateway restart process within settings, likely reducing downtime or improving reliability when configuration changes are applied.

### 4. Community Hot Topics
No single issue or PR attracted significant comments or reactions today. However, the most active conversation threads (updated yesterday and receiving attention) center on **quality-of-life improvements for the Cowork module**:

- **[PR #1536 (Stale)](https://github.com/netease-youdao/LobsterAI/pull/1536):** **System notifications for Cowork sessions.** This feature is heavily requested for multitasking users who need to switch windows. It touches core IPC (Electron `Notification` API) and is a strong candidate for inclusion in the next minor release.
- **[PR #1538 (Stale)](https://github.com/netease-youdao/LobsterAI/pull/1538):** **Bookmarking AI replies.** Users want to flag important messages in long conversations. This PR includes a full stack implementation (SQLite, IPC, Renderer) and represents a mature feature ready for review.
- **[PR #1542 (Stale)](https://github.com/netease-youdao/LobsterAI/pull/1542):** **Custom tagging system for sessions.** This would allow users to organize their conversations with custom labels and filters, a common request for power users managing many concurrent Cowork sessions.

**Underlying Need:** The community is clearly asking for better **organization and awareness** within the Cowork platform. Users managing multiple parallel sessions want to be alerted to completions, mark important messages, and classify sessions for later retrieval.

### 5. Bugs & Stability
No new bugs were reported today. However, several **long-standing bugs** with fix PRs attached were updated:

| Bug Description (PR) | Severity | Fix Status |
|---|---|---|
| **Hardcoded Chinese strings in approval dialogs** break English mode. Users switching to English still see Chinese prompts for dangerous operations (e.g., deleting files). [PR #1543](https://github.com/netease-youdao/LobsterAI/pull/1543) | **Medium** | Open (fix ready) |
| **Settings panel memories: "edit" button text is lowercased "edit"** instead of using i18n keys (should be "Edit" / "编辑"). [PR #1540](https://github.com/netease-youdao/LobsterAI/pull/1540) | **Low** | Open (fix ready) |
| **GitHub Copilot OAuth polling persists** after closing the Settings panel, causing 15-minute IPC blocking and silent token loss. [PR #1544](https://github.com/netease-youdao/LobsterAI/pull/1544) | **High** | Open (fix ready) |
| **Agent skill badges (ActiveSkillIds) not syncing** immediately after editing an agent's skills; requires manual re-selection of agents to reflect changes. [PR #1545](https://github.com/netease-youdao/LobsterAI/pull/1545) | **Medium** | Open (fix ready) |
| **Scheduled task notification channel resets** — after changing from "WeChat" to "None", the UI still shows the old selection on re-edit. [PR #1547](https://github.com/netease-youdao/LobsterAI/pull/1547) | **Low** | Open (fix ready, +2 lines) |

**Key finding:** The project has a **cluster of 7 ready-to-merge bug fixes** (PRs #1540–#1547) that have been sitting in stale/open status since April 7. All have clear root causes and minimal code changes. The maintainer bottleneck appears to be review/merge bandwidth.

### 6. Feature Requests & Roadmap Signals
Based on the stale PRs being maintained and updated, the following features are highly likely for the next version (v0.8.x or v1.0.0-beta):

- **Engine Startup Overlay Improvements** ([PR #1546](https://github.com/netease-youdao/LobsterAI/pull/1546)): "Cancel startup" and "View logs" buttons after 30 seconds. This is a stop-gap for users whose OpenClaw engine fails to start (network issues, cache corruption).
- **System Notifications for Cowork** ([PR #1536](https://github.com/netease-youdao/LobsterAI/pull/1536)): A strong signal that the project is moving toward **foreground/background awareness** for the Cowork module.
- **Session Bookmarking & Tagging** ([PR #1538](https://github.com/netease-youdao/LobsterAI/pull/1538) & [PR #1542](https://github.com/netease-youdao/LobsterAI/pull/1542)): These are part of a **"Session Organization Suite"** — multiple PRs from contributor `MaoQianTu` aimed at giving users control over their growing conversation histories.

**Prediction:** The next release will likely bundle the **Engine Overlay escape buttons** + **Bug fix batch (PRs 1540–1547)** as a v0.7.5 hotfix, followed by a v0.8.0 featuring the **Cowork notification & organization features**.

### 7. User Feedback Summary
While no direct user comments were recorded in the last 24 hours, the PR titles and issue links reveal clear pain points:

- **Language Switching Gaps:** "English mode is broken" — users switching from Chinese to English face hardcoded Chinese strings in dialogs and menus ([PR #1540](https://github.com/netease-youdao/LobsterAI/pull/1540), [PR #1543](https://github.com/netease-youdao/LobsterAI/pull/1543)). This suggests a significant non-Chinese-speaking user base that is currently underserved.
- **OAuth Flow Unreliability:** Users trying to log in via GitHub Copilot experience token loss and UI freezes if they close the settings panel prematurely ([PR #1544](https://github.com/netease-youdao/LobsterAI/pull/1544)).
- **Session Management Overhead:** "Users switching to other windows can't perceive task completion" — a direct quote from PR #1536. This indicates that Cowork sessions are becoming a primary-use tool, and users are running them alongside other applications.
- **Scheduled Task Confusion:** The notification channel reset bug ([PR #1547](https://github.com/netease-youdao/LobsterAI/pull/1547)) causes repeated frustration for users trying to silence notifications.

### 8. Backlog Watch
Several important items have been unanswered or unmerged for over 45 days and require maintainer attention:

| Item | Age | Status | Risk |
|---|---|---|---|
| **[PR #1536](https://github.com/netease-youdao/LobsterAI/pull/1536) — System notification for Cowork** | 45 days | Open, stale | **High** — This is a blocker for multitaskers and has a complete, clean implementation. |
| **[PR #1544](https://github.com/netease-youdao/LobsterAI/pull/1544) — Copilot OAuth polling cancel fix** | 45 days | Open, stale | **High** — Directly causes 15-minute UI freezes and silent token loss. Is tagged as fixing Issue #1516, which itself is likely a user-reported bug. |
| **[PR #1546](https://github.com/netease-youdao/LobsterAI/pull/1546) — Engine startup escape buttons** | 45 days | Open, stale | **Medium** — Without this, users stuck on a failing engine startup have no recourse but to kill the process. |
| **All 7 bug-fix PRs (#1540–#1547)** | 45 days | Open, stale | **Medium (collectively)** — These represent known, reproducible, easily fixable bugs that degrade user trust. Their long sit-time suggests a review bottleneck. |

**Recommendation:** The maintainers should prioritize merging the **7 bug-fix PRs** as a single batch. The code changes are minimal (many are 1–5 lines) and address issues directly impacting user experience (i18n, state sync, OAuth reliability, UI consistency). Keeping these open signals a potential resource constraint in the core team.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-22

## 1. Today's Overview

Moltis shows **elevated community activity** with 6 open issues and 5 PRs updated in the last 24 hours, all from the past two days. The project is in a **responsive maintenance phase**, with core contributor **penso** driving critical bug fixes for Docker deployments and Twilio telephony. A new **NEAR AI Cloud provider** integration (#1031) and **vault encryption toggle** (#1033) signal expansion toward enterprise-adjacent configurability. No new releases were published, but the rapid issue-to-PR pipeline (e.g., #977 → #1035, #1032 → #1034) suggests strong maintainer engagement. However, **five of six open issues are bugs**, indicating potential quality friction in recent builds.

## 2. Releases

No new releases published in the last 24 hours. The latest available version remains **20260518.01** (referenced in issue #1032).

## 3. Project Progress

One PR was merged/closed today:
- **#1005 (CLOSED)**: `feat(openai-codex): add reasoning effort support` — Carries `reasoning_effort` through cloned Codex provider instances, serializes configured GPT-5 Codex effort in Responses API requests, and preserves `reasoning.encrypted_content` when no explicit effort is set. *(Author: PeterDaveHello)*

Four open PRs remain, all submitted or updated on 2026-05-21:
- **#1033**: Allow disabling vault encryption at rest (auth.vault_enabled opt-out)
- **#1034**: Fix Twilio gather speech dispatch for phone calls
- **#1035**: Auto-detect Docker host data mounts for browser sandbox
- **#1031**: Add NEAR AI Cloud as an OpenAI-compatible provider

## 4. Community Hot Topics

**Most Active Issue:**
- **#977** [Bug]: Browser sandbox fails when Moltis runs in Docker *(4 comments)* — User reports browser tool crashes in LXC/Podman environments with data mount permission errors. This issue has been open since May 6 and has now spawned a dedicated fix PR (#1035). The underlying need is **reliable Docker-in-Docker sandbox execution** for production containerized deployments.

**Most Active PRs (both by contributor penso):**
- **#1034** fix(telephony): dispatch Twilio gather speech — Fixes a core communication bug where the agent hears the user's greeting but cannot process follow-up speech. This maps directly to issue #1032.
- **#1035** fix(sandbox): auto-detect docker host data mounts — Addresses the long-standing #977 by scanning running containers for Moltis data mounts when direct inspection fails.

Three issues were filed without comments on 2026-05-21 but share a common theme: **Docker deployment problems** (#1037, #977) and **TTS/audio compatibility** (#1030, #1029).

## 5. Bugs & Stability

Five bug reports were active today, ranked by severity:

| Severity | Issue | Description | Fix PR Exists? |
|----------|-------|-------------|----------------|
| **Critical** | #1032 | Phone call: agent greets but never responds to user speech — Twilio `Gather` event not dispatched | ✅ PR #1034 |
| **High** | #977 | Browser sandbox fails in Docker/LXC — `/data/browser` mount permission errors | ✅ PR #1035 |
| **High** | #1037 | `send_image` and `send_document` fail in Docker setups — file access issues in containerized environments | ❌ No fix PR yet |
| **Medium** | #1030 | OpenAI TTS forces `response_format=opus`, unsupported by Speaches proxy — integration breakage | ❌ No fix PR yet |
| **Low** | #1029 | (Enhancement request labeled as bug) Piper TTS audio conversion not handled in dedicated module | ❌ No fix PR yet |

**Pattern**: Three of five bugs (#977, #1037, #1032) are **Docker-related**, suggesting deployment reliability is the top stability concern. PR #1034 and #1035 directly address two of the three.

## 6. Feature Requests & Roadmap Signals

New enhancement requests filed today:

- **#1036** — Support arbitrary inbound file attachments in the web UI. User wants drag-and-drop or upload of any file type (not just images/documents) in chat. *Likelihood for next release:* Medium — appears straightforward to implement, no counter-indications.
- **#1029** — Handle Piper TTS audio conversions within the dedicated TTS module (`crates/voice/src/tts/piper.rs`). User wants Piper to output correctly formatted audio without external post-processing. *Likelihood:* Medium — aligns with ongoing TTS improvements.
- **#1033** (PR) — Allow disabling vault encryption at rest. *Already implemented in open PR*, expected in next release.
- **#1031** (PR) — Add NEAR AI Cloud provider. *Already implemented in open PR*, expected in next release.

**Roadmap signal**: The NEAR AI Cloud integration (PR #1031) suggests Moltis is expanding provider diversity beyond standard OpenAI-compatible endpoints. The vault encryption toggle (PR #1033) signals preparation for **deployment environments with external secret management** (e.g., Kubernetes secrets, HashiCorp Vault).

## 7. User Feedback Summary

Real user pain points from the last 24 hours:

- **Docker deployment friction**: Two users report that core features (browser, media send) break in containerized environments. One user is running LXC on Proxmox with Docker socket mounted — a common homelab/enterprise setup. *"send_image and send_document fail in a Docker setup"* (#1037) indicates the problem extends beyond browsers to basic media sharing.
- **Telephony unreliability**: A user reports Moltis answers phone calls but cannot process spoken responses. *"The agent greets me but never responds to what I say"* (#1032) — this is a fundamental usability failure for voice-interaction use cases.
- **TTS format lock-in**: User reports being forced to use Opus format via OpenAI TTS, breaking compatibility with the Speaches speech proxy. *"Not supported in Speaches"* (#1030) — suggests users are running custom speech pipelines and encountering integration gaps.
- **Positive signal**: Two users preflight-checked their issues against existing bugs, indicating a **thorough, engaged user base**. No direct satisfaction comments in this window, but the volume of well-documented reports suggests active daily usage.

## 8. Backlog Watch

No long-unanswered issues were identified — all open items were created in the last 16 days, and the longest-standing (#977, opened 2026-05-06) has a fix PR (#1035) in review. Maintainer **penso** has been responsive to all Docker and telephony issues. No items require urgent maintainer attention beyond normal PR review.

**Watch items worth monitoring:**
- **#977** — Despite PR #1035 being open, the root issue has persisted 16 days without a release fix. If the PR lags, users may continue experiencing sandbox failures in Docker.
- **#1037** (Docker media send) — No fix PR yet; may need maintainer triage to determine if it shares root cause with #977 or is a separate issue.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-05-22

## Today's Overview

The CoPaw project shows high community activity with 26 issues and 28 PRs updated in the last 24 hours, indicating a healthy and responsive development cycle. The project maintains a strong focus on fixing channel-specific bugs (WeChat iLink, DingTalk, Feishu) and improving context management for long-running agent sessions. Notably, no new releases were published today, but the rapid merge rate (19 closed/merged PRs out of 28) suggests the team is actively processing community contributions across bug fixes and feature work. The issue tracker reveals a growing community of Chinese-language users reporting real-world deployment problems, particularly around WeChat integration stability.

## Releases

No new releases were published today. The latest version remains v1.1.8.post1, as referenced in recent bug reports.

## Project Progress

In the last 24 hours, 19 PRs were merged or closed, demonstrating strong forward momentum. Key advances include:

- **Skill Market System** — PR [#4518](https://github.com/agentscope-ai/QwenPaw/pull/4518) (merged) adds a unified Skill Market with 3 providers, async fan-out search, pagination, and queued install. Refactors skill hub from blocking `http.client` to async `httpx`.
- **WeChat iLink Bug Fixes** — PR [#4576](https://github.com/agentscope-ai/QwenPaw/pull/4576) (merged) fixes message dedup bypass and infinite retry on expired `context_token` in WeChat iLink channel. Secondary content-based dedup added.
- **Browser Automation Improvement** — PR [#4603](https://github.com/agentscope-ai/QwenPaw/pull/4603) (merged) adds headless browser warning message to help users avoid verification triggers.
- **Cron Job Isolation** — PR [#4602](https://github.com/agentscope-ai/QwenPaw/pull/4602) (merged) enables creation of cron jobs without history context, displayed in a unified session while keeping executions isolated.
- **Security Enhancement** — PR [#4569](https://github.com/agentscope-ai/QwenPaw/pull/4569) (merged) adds user deny info in tool response, preventing retry of denied tool calls.
- **Context Compression** — PR [#4004](https://github.com/agentscope-ai/QwenPaw/pull/4004) (closed) addresses auto-deriving `max_input_length` from model context window to fix compression behavior across models with different context sizes.
- **DingTalk Chinese Filenames** — PR [#4600](https://github.com/agentscope-ai/QwenPaw/pull/4600) (open, under review) decodes percent-encoded Chinese filenames when sending files via DingTalk.
- **Whisper Transcription Fix** — PR [#4601](https://github.com/agentscope-ai/QwenPaw/pull/4601) (open, first-time contributor) fixes chat voice input to respect configured Whisper transcription backend instead of always using browser native Speech API.

## Community Hot Topics

The most active discussions in the last 24 hours reveal deep user engagement with real-world deployment issues:

1. **[#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477)** — *"WeChat iLink 微信定时任务推送失败"* (14 comments, CLOSED) — User reports cron task push failures due to stale `context_token` with no retry logic. This issue attracted the most discussion and is now resolved with PR #4576.

2. **[#4559](https://github.com/agentscope-ai/QwenPaw/issues/4559)** — *"超过40多个agent后 页面访问明显变慢"* (8 comments, OPEN) — Performance regression with 40+ agents causing UI slowdown. Suggests underlying frontend rendering or backend state management issues for large-scale agent deployments.

3. **[#4556](https://github.com/agentscope-ai/QwenPaw/issues/4556)** — *"Voice transcription uses browser native Speech API instead of configured Whisper provider"* (4 comments, OPEN) — This is now addressed by PR #4601 from a first-time contributor, showing strong community responsiveness.

4. **[#4585](https://github.com/agentscope-ai/QwenPaw/issues/4585)** — *"Self-developed plugin tools not auto-discovered in WeCom channel"* (4 comments, OPEN) — Plugin tools work in desktop chat but not in channel conversations (WeCom/企业微信), indicating channel-specific plugin discovery gaps.

5. **[#4604](https://github.com/agentscope-ai/QwenPaw/issues/4604)** — *"钉钉Api接口不能发送到钉钉，只能发送到console"* (4 comments, OPEN) — HTTP API requests configured for DingTalk channel output to console instead of actual DingTalk delivery.

## Bugs & Stability

### Critical Severity
1. **WeChat iLink context_token issues** — Multiple reports ([#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477), [#4546](https://github.com/agentscope-ai/QwenPaw/issues/4546), [#4612](https://github.com/agentscope-ai/QwenPaw/issues/4612)) describe expired tokens causing silent failures, infinite retries, and inconsistent "sent successfully" feedback. **Fix PR #4576 merged**, PR #4597 open extends to API-initiated messages.
2. **Model switching wipes long-term memory** — [#4581](https://github.com/agentscope-ai/QwenPaw/issues/4581) (CLOSED as invalid) — User reports long-term memory (MEMORY.md) cleared on model switch. While closed as invalid, this indicates users expect persistent memory across model switches.
3. **Topic list wipe with heavy tool-call history** — [#4519](https://github.com/agentscope-ai/QwenPaw/issues/4519) (CLOSED) — Sending new message in sessions with heavy tool-call history wipes entire topic list from UI (data persists on disk).

### High Severity
4. **Feishu CardKit streaming broken** — [#4572](https://github.com/agentscope-ai/QwenPaw/issues/4572) (CLOSED) — Fix identified: sequence initial value should be 1, not 0, per Feishu API requirements.
5. **DingTalk API channel not delivering** — [#4604](https://github.com/agentscope-ai/QwenPaw/issues/4604) — HTTP API calls to DingTalk channel output only to console.
6. **Gemini/Gemma model crash** — [#4605](https://github.com/agentscope-ai/QwenPaw/issues/4605) — ValidationError on `max_tokens` parameter — QwenPaw passes `max_tokens: 8192` but Gemini API uses `max_output_tokens`.

### Medium Severity
7. **ACP session not auto-closing** — [#4611](https://github.com/agentscope-ai/QwenPaw/issues/4611) — Session remains open after task completion, causing duplicate session conflicts on next invocation.
8. **DingTalk Chinese filename encoding** — [#4586](https://github.com/agentscope-ai/QwenPaw/issues/4586) — File names with Chinese characters get percent-encoded. **Fix PR #4600 open.**
9. **QwenPaw shutdown leaves orphaned processes** — [#4587](https://github.com/agentscope-ai/QwenPaw/issues/4587) — Desktop shutdown doesn't kill backend process, leaving orphaned Python processes.
10. **NO_PROXY env var not honored** — [#4607](https://github.com/agentscope-ai/QwenPaw/issues/4607) — Proxy bypass configuration ignored.

### Low Severity / UI
11. **Dark mode pet import invisible** — [#4592](https://github.com/agentscope-ai/QwenPaw/issues/4592) — Drop zone invisible in dark mode (CLOSED).
12. **max_input_length missing from WebUI** — [#4590](https://github.com/agentscope-ai/QwenPaw/issues/4590) — After v1.1.8 update, the context window setting disappeared from Run Config UI (CLOSED).

## Feature Requests & Roadmap Signals

Several feature requests signal where the community wants CoPaw to evolve:

1. **Lossless Context Compression (DAG-based)** — [#4551](https://github.com/agentscope-ai/QwenPaw/issues/4551) — Proposes DAG-based summarization to preserve compressed context, addressing a pain point for long-running development tasks. This is a significant architectural enhancement that may appear in a future v1.2.x release.

2. **Plugin Agent Hook Support** — [#4613](https://github.com/agentscope-ai/QwenPaw/issues/4613) — User building a LightRAG knowledge base plugin requests `register_agent_hook` API to intercept agent workflows. This is a natural extension for plugin system maturity.

3. **Browser Automation Enhancement** — [#4584](https://github.com/agentscope-ai/QwenPaw/issues/4584) — Request to switch from CDP-based browser automation to Playwright for better stability. Given the existing PR #4603 adding headless warnings, this is likely under consideration.

4. **Unified Workspace Directory** — [#4408](https://github.com/agentscope-ai/QwenPaw/issues/4408) — Suggests `.qwenpaw` hidden folder to keep workspace tidy, inspired by OpenCode.

5. **Mid-Process Intervention** — [#4606](https://github.com/agentscope-ai/QwenPaw/issues/4606) — User wants ability to guide/direction-correct agent during autonomous planning execution. This touches on human-in-the-loop UX design.

6. **Console UI Consistency** — [#4593](https://github.com/agentscope-ai/QwenPaw/issues/4593) — Reports inconsistent animation and padding across console pages. Suggests design system maturity work.

**Prediction**: Context compression improvements (DAG-based), plugin hooks, and continued channel stability fixes are most likely to appear in the next v1.1.9 or v1.2.0 release. The Skill Market feature (#4518) merged today suggests the team is prioritizing the plugin/skill ecosystem.

## User Feedback Summary

**Satisfaction signals:**
- Active community contribution from first-time contributors (5 PRs today) shows low barrier to entry
- Users building sophisticated plugins (LightRAG knowledge base with 4 UI tabs) indicate platform extensibility is valued
- Skill Market feature being well-received with multiple PRs around skill validation

**Dissatisfaction signals:**
- **WeChat integration instability** is the #1 pain point — users report cron push failures, duplicate messages, silent send failures, and inconsistent feedback between API responses and actual delivery
- **Context management confusion** — model switching wiping memory, ACP sessions not closing, topic list disappearing — users expect persistent, predictable state
- **Channel parity gaps** — plugins work in desktop chat but not in WeCom/DingTalk channels; HTTP API doesn't deliver to configured channels
- **Configuration complexity** — multiple reports of settings not taking effect (max_input_length, NO_PROXY, transcription provider)
- **Long session usability** — users with 40+ agents experience slowdown, and those with heavy tool-call history face data corruption issues

## Backlog Watch

Items needing maintainer attention:

1. **[#3054](https://github.com/agentscope-ai/QwenPaw/issues/3054)** — *"OneBot频道定时任务无法发送到群"* (Created 2026-04-08, 3 comments, OPEN) — OneBot channel cron tasks unable to send to groups. Open for over 6 weeks. The `user_id` vs `group_id` field mapping issue remains unresolved.

2. **[#4551](https://github.com/agentscope-ai/QwenPaw/issues/4551)** — *"Lossless Context Compression"* (Created 2026-05-20, 2 comments, OPEN) — Detailed proposal with specific compression ratio analysis. No maintainer response yet. This could be a roadmap-significant feature.

3. **[#4587](https://github.com/agentscope-ai/QwenPaw/issues/4587)** — *"QwenPaw shutdown leaves orphaned processes"* (Created 2026-05-21, 2 comments, OPEN) — Desktop app leaving orphaned backend processes. No fix PR yet.

4. **[#4611](https://github.com/agentscope-ai/QwenPaw/issues/4611)** — *"ACP session does not auto-close after task completion"* (Created 2026-05-21, 2 comments, OPEN) — Session lifecycle management issue that could cause cascading problems for multi-agent workflows.

5. **[#4607](https://github.com/agentscope-ai/QwenPaw/issues/4607)** — *"配置了环境变量NO_PROXY，好像没生效"* (Created 2026-05-21, 2 comments, OPEN) — Environment variable handling issue that affects enterprise users with proxy configurations.



</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-22

## Today's Overview

ZeroClaw enters an intense development phase following the landmark v0.8.0-beta-1 release, which transitions the project from a single-agent daemon to a multi-agent host architecture. The repository shows extremely high activity with 50 PRs and 21 issues updated in the last 24 hours, reflecting a major push toward completing the v0.8 ecosystem. A significant portion of today's activity (13 new issues) comes from a coordinated tracker-based feature rollout for a full Terminal User Interface (TUI) client, indicating the project is actively building out its user-facing tooling. The community is heavily engaged, though the sheer volume of open work—45 open PRs and 19 open issues—suggests maintainer bandwidth may be strained.

## Releases

**v0.8.0-beta-1** was released, representing the project's most significant architectural change to date. This version transforms ZeroClaw from a single-agent daemon into a genuine multi-agent host system.

**Key changes:**
- Multiple named agents can run side-by-side from a single install
- Each agent has its own identity, workspace, memory, model provider, channels, and security profile
- Agents can communicate with each other natively
- Schema V3 configuration format (breaking change from v0.7.x)

**Migration notes:** This is a beta release with breaking schema changes. Users upgrading from v0.7.x will need to migrate their configuration to the new multi-agent format. The changelog at [v0.7.5 → v0.8.0-beta-1](https://github.com/zeroclaw-labs/zeroclaw/releases) contains detailed migration instructions.

## Project Progress

**Merged/closed PRs today (5):**

- **PR #6398** (`feat!: multi-agent runtime and schema V3`) — The massive foundational PR for v0.8.0-beta-1, now merged after community review. This is the centerpiece of the release, enabling the multi-agent architecture across all components (core, channels, providers, tools, security).

- **PR #6839** (`feat(runtime): RPC dispatch layer and Unix socket transport`) — Extracted JSON-RPC 2.0 types from the ACP server into a shared module and implemented the Unix socket transport layer for the daemon, enabling TUI and other clients to connect without routing through HTTP/WS gateway.

- **PR #6771** ([Bug]: Multiline Heredocs incorrectly blocked by SecurityPolicy) — Closed fix for a critical security policy false positive that prevented ZeroClaw from using its own prescribed skill for raising PRs.

**Key advancements:**
- The v0.8 multi-agent runtime is now live in beta
- RPC infrastructure for terminal and desktop clients is taking shape
- Core security policy bugs are being addressed

## Community Hot Topics

**Most active discussions:**

1. **Issue #6059** ([Bug]: Incompatible with DeepSeek-V4 API format) — 12 comments, 4 👍  
   Link: https://github.com/zeroclaw-labs/zeroclaw/issues/6059  
   A long-running discussion about DeepSeek provider compatibility, specifically the thinking mode causing API failures with both V4-Pro and V4-Flash models. The issue has remained open for nearly a month, suggesting the fix is non-trivial.

2. **Issue #5890** ([CLOSED] RFC: Multi-agent UX flow — design) — 10 comments  
   Link: https://github.com/zeroclaw-labs/zeroclaw/issues/5890  
   The design RFC for multi-agent UX that drove the v0.8 work. Now closed after acceptance and implementation.

3. **Issue #6808** (RFC: Work Lanes, Board Automation, and Label Cleanup) — 3 comments  
   Link: https://github.com/zeroclaw-labs/zeroclaw/issues/6808  
   A governance RFC proposing process improvements for issue/PR management, reflecting growing project maturity and maintainer workload concerns.

**Underlying needs:** The community is pushing for better provider compatibility (DeepSeek), improved developer workflow automation, and is actively participating in shaping the project's governance as it scales.

## Bugs & Stability

**New bugs reported today (ranked by severity):**

| Severity | Issue | Affected Component | Summary |
|----------|-------|-------------------|---------|
| **S1 - Blocked** | [#6841](https://github.com/zeroclaw-labs/zeroclaw/issues/6841) | provider | `vision_provider` silently ignored — images routed to fallback provider |
| **S1 - Blocked** | [#6844](https://github.com/zeroclaw-labs/zeroclaw/issues/6844) | channel | Slack `bot_token` cannot be supplied via environment variable (regression) |
| **S2 - Degraded** | [#6836](https://github.com/zeroclaw-labs/zeroclaw/issues/6836) | runtime/daemon | Windows minimal build produces ~26 MB instead of documented ~6 MB |
| **S2 - Degraded** | [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) | provider | DeepSeek-V4 API incompatibility (long-standing, still open) |
| **S2 - Degraded** | [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) | runtime, tool | `tool_filter_groups` is a no-op for real MCP tools |

**Notable:** #6844 is explicitly noted as a regression of a previously closed issue (#6237) that was supposedly fixed but clearly isn't working. No fix PRs exist yet for these new S1 bugs.

## Feature Requests & Roadmap Signals

**New feature requests from today:**

- **Issue #6827** — Support jina.ai as web_search provider (great free tier)  
  Link: https://github.com/zeroclaw-labs/zeroclaw/issues/6827

- **Issue #6820** — ACP protocol extensions for diff/file-proposal message types  
  Link: https://github.com/zeroclaw-labs/zeroclaw/issues/6820

- **Issue #6819** — File/attachment upload protocol for RPC transport  
  Link: https://github.com/zeroclaw-labs/zeroclaw/issues/6819

- **Issue #6818** — `--ephemeral` daemon mode (self-terminate on last client disconnect)  
  Link: https://github.com/zeroclaw-labs/zeroclaw/issues/6818

- **Issue #6817** — Session-scoped runtime overrides without daemon reload  
  Link: https://github.com/zeroclaw-labs/zeroclaw/issues/6817

**Prediction for v0.8.x:** The jina.ai provider (#6827) is a low-effort, high-value addition likely to land soon. The TUI-related features (#6820, #6819, #6818, #6817) are part of a coordinated tracker effort (#6826) and will form the v0.8.x sub-release cycle. The ephemeral daemon mode (#6818) and session overrides (#6817) are likely targets for v0.8.1 or v0.8.2.

## User Feedback Summary

**Pain points expressed today:**
- **Provider compatibility frustrations:** Users report DeepSeek-V4 API issues persisting for nearly a month (#6059)
- **Configuration rigidity:** Slack bot tokens can't use environment variables, forcing secrets into config files (#6844)
- **Multimodal confusion:** Vision routing doesn't work as documented (#6841)
- **Build size surprises:** Windows users expect ~6 MB but get ~26 MB (#6836)

**Positive signals:**
- Community members are actively contributing new provider integrations (jina.ai, NEAR AI Cloud)
- Signal and Discord channel maintainers are submitting quality-of-life improvements
- The multi-agent beta has generated substantial community engagement through the RFC process

## Backlog Watch

**Issues needing maintainer attention:**

1. **Issue #6059** (DeepSeek-V4 API incompatibility) — Open since April 24, marked p1 and in-progress, but no fix PR exists after nearly a month. High community visibility with 4 👍.  
   Link: https://github.com/zeroclaw-labs/zeroclaw/issues/6059

2. **Issue #6699** (tool_filter_groups no-op for MCP tools) — Open since May 16, marked p1, with two distinct bugs identified. Blocking MCP tool filtering for multi-agent setups.  
   Link: https://github.com/zeroclaw-labs/zeroclaw/issues/6699

**PRs needing maintainer review:**

3. **PR #5779** (TOTP gated_commands for shell tool) — Open since April 15, needs-maintainer-review label, significant security enhancement.  
   Link: https://github.com/zeroclaw-labs/zeroclaw/pull/5779

4. **PR #5187** (ARM64 Docker target) — Open since April 2, stale with `needs-author-action`. Important for ARM-based deployments.  
   Link: https://github.com/zeroclaw-labs/zeroclaw/pull/5187

5. **PR #5987** (Nix package) — Open since April 22, needs-author-action. Would improve Linux distribution.  
   Link: https://github.com/zeroclaw-labs/zeroclaw/pull/5987

**Overall health assessment:** The project is in a rapid expansion phase with the v0.8 beta, but the high ratio of open work (45 open PRs, 19 open issues) combined with several long-running p1 bugs suggests maintainer capacity is a concern. The organized tracker-based feature rollout for the TUI is a positive sign of structured development, but the community may benefit from more aggressive issue triage and backlog grooming.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*