# OpenClaw Ecosystem Digest 2026-06-15

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-15 00:30 UTC

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

Here is the OpenClaw project digest, based on the provided GitHub data for June 14-15, 2026.

---

## OpenClaw Project Digest
**Date:** 2026-06-15

**Data Snapshot (Last 24h):** 500 Issues updated (436 open, 64 closed), 500 PRs updated (457 open, 43 merged/closed), 1 new release.

### 1. Today's Overview

OpenClaw is experiencing a period of immense community engagement and significant maintenance activity, with over 500 issues and PRs updated in the last 24 hours. However, this activity is heavily skewed by a persistent backlog, with a high volume of open issues (436) relative to closed ones (64), and a very low PR merge rate (43 vs 457 open). While critical bug fixes and major features like enhanced channel delivery are advancing, the project appears to be in a "churn-heavy" phase where the rate of new problem reports far outpaces the rate of resolutions, particularly for long-standing issues. The most critical areas of instability are focused on message delivery (Telegram, Discord, Slack), session state management, authentication provider integrations, and crash loops, suggesting the project is straining under the weight of its expanding feature set.

### 2. Releases

A new beta release was published today: **v2026.6.8-beta.1**.

- **Release Notes Highlights:**
    - **Telegram & WhatsApp Delivery Enhancements:** This release focuses on making channel delivery "richer and less brittle."
        - **Telegram:** Can now send structured rich text (tables, lists, expandable blockquotes), features a prompt-preserving CLI backend delivery, includes migration from retired native drafts, and has safer rich-media boundaries.
        - **WhatsApp:** Specific details on WhatsApp improvements were not fully expanded in the snippet, but fall under the "less brittle" umbrella.
- **Breaking Changes / Migration:** The "retired native draft migration" for Telegram is a notable change for users relying on that legacy feature. Users should verify their Telegram bot configurations and test that rich text formatting works as expected.

### 3. Project Progress

The 43 PRs merged/closed today represent significant strides in infrastructure and plugin stability:

- **WhatsApp Stability:** Major work is being merged to improve WhatsApp reliability. PR #93076 (`fix(whatsapp): preserve auth on terminal disconnects`) prevents credential loss on passive disconnects, and PR #93094 (`fix(whatsapp): bound socket operations`) addresses timeout and delivery semantics.
- **QA Lab Tooling:** PR #92915 (`Convert QA scenarios to YAML files`) is a significant internal improvement, moving the QA scenario corpus from Markdown to direct YAML files for more robust and maintainable testing.
- **Codex Integration:** PR #92625 (`feat(codex): add auto plugin approvals`) streamlines the integration with Codex, moving from a manual `on-request` approval scheme for destructive actions to a configurable `auto` mode.
- **Bug Fixes:** A fix was merged for a critical, long-standing issue (#79847) where the `qmd-manager` was leaking environment variables, which broke integration with `mcporter` (PR #93097).
- **Active Stalled PRs:** Despite new activity, many important PRs remain open for extended periods. PR #90741 (`perf(models-config): unify auth-profile fingerprint cache`) has been open for 10 days and is critical for performance. Similarly, PR #83600 for WhatsApp list reply actions has been open for nearly a month.

### 4. Community Hot Topics

Several issues have generated significant discussion and reactions, revealing core community concerns.

- **Telegram Message Dropping ([#80520](openclaw/openclaw #80520)):** With 11 comments and 3 👍, this is a high-impact bug report detailing the silent dropping of messages. The reporter provided a detailed timeline and logs. The community is frustrated by the lack of a clear resolution path, as the issue requires a live repro.
- **Telegram Bot-to-Bot & Guest Modes ([#79077](openclaw/openclaw #79077)):** This feature request for new Telegram functionality has 8 comments and 8 👍, signaling strong demand for keeping pace with upstream platform changes. It is currently stalled, awaiting product and security review.
- **XAI OAuth Failure ([#83425](openclaw/openclaw #83425)):** A user reported a straightforward OAuth configuration error that completely blocks the `xAI` auth flow. The high comment count (6) suggests this is a common point of confusion or a genuine bug for many users.
- **Skill Author Setup Hooks ([#80213](openclaw/openclaw #80213)):** This feature request for a `setup.script` hook in skills has 7 comments and 4 👍, showing strong developer demand for more powerful skill automation. The issue is currently awaiting a product decision.

### 5. Bugs & Stability

The project is facing a high severity of regressions and critical bugs.

- **Critical (P1) Regressions and Crashes:**
    - **[Bug #83419](openclaw/openclaw #83419) - Anthropic API Compatibility:** A serious bug where group chat context injection creates consecutive `user`-role messages, breaking Anthropic's API requirements. This is a **blocker** for any user on a group chat with an Anthropic model.
    - **[Bug #83366](openclaw/openclaw #83366) - Gateway Event-Loop Starvation:** A systemic performance bug causing Discord/session timeouts under load. This affects the entire gateway's reliability.
    - **[Bug #82070](openclaw/openclaw #82070) - CLI Cold-Start Regression:** A ~14-second delay was introduced for all CLI commands after an update, indicating a significant performance regression in the CLI startup path.
    - **[Bug #828i8](openclaw/openclaw #83972) - Discord `/new` & `/reset` Broken:** A regression where bare slash commands no longer trigger the persona greeting, a fundamental user experience issue.
- **High-Impact (P2) Bugs:**
    - **[Bug #80040](openclaw/openclaw #80040) - Cascading Auth & Session Failure:** A complex, user-visible cascade involving OAuth invalidation, placeholder replies, and duplicate tool execution. This is a severe quality-of-life bug.
    - **[Bug #81934](openclaw/openclaw #81934) - Multiple Failures on macOS:** A user reported that after updating, Gmail sending, Dropbox access, and PDF generation all broke, pointing to a potentially wide-ranging compatibility issue.
- **Fix Status:** Many of these critical bugs (e.g., #83419, #83366, #82070, #80040) have no linked fix PR and are stalled waiting for maintainer review or a live reproduction. This is a major project health concern.

### 6. Feature Requests & Roadmap Signals

The most requested features cluster around improving **developer/plugin extensibility** and **channel parity**.

- **High Priority for Next Version:**
    - **Before_Route_Inbound Hook ([#81061](openclaw/openclaw #81061)):** The 5 comments and 3 👍 on this issue indicate a strong need for pre-routing message interception for channel bridging. This is a natural next step to enable complex multi-platform workflows.
    - **Skill Setup Hooks ([#80213](openclaw/openclaw #80213)):** This feature is almost inevitable given its demand. It allows skill authors to automate post-installation steps, which is critical for complex skills.
    - **Stable Plugin SDK for Skills ([#81913](openclaw/openclaw #81913)):** There is a clear roadmap signal that the team is moving towards a formalized SDK for plugins, suggesting these requests will be addressed in upcoming releases.
- **Lower Priority / Stalled:**
    - **Telegram Bot-to-Bot ([#79077](openclaw/openclaw #79077)):** While highly voted, it is stalled on security and product review, suggesting it is a complex feature with significant architectural implications.
    - **i18n for Slash Commands & UI ([#79458](openclaw/openclaw #79458), [#79034](openclaw/openclaw #79034)):** These feature requests for non-English support are active but low priority, primarily driven by a single community member.

### 7. User Feedback Summary

- **Pain Points:** The most common user pain points are **unreliable message delivery** (Telegram dropping, Slack spamming, Discord timeouts) and **brittle authentication** (OAuth failures with XAI and other providers). There is significant dissatisfaction with regressions introduced in recent updates, such as the CLI cold-start (#82070) and the Discord slash command behavior (#77733).
- **Use Cases & Satisfaction:**
    - **Advanced Users / Plugin Authors:** This group is dissatisfied with the lack of a stable, documented SDK for skills and plugins (#81913, #80213). They need more power and control.
    - **Multi-Platform Users:** Users running agents on multiple channels are facing the brunt of the message-delivery and session-state bugs, causing high friction.
    - **Enterprise / Prosumer:** Users relying on features like `doctor --fix` (#77802) are frustrated by its atomic failure mode, which prevents them from easily recovering from configuration errors.

### 8. Backlog Watch

Several important issues and PRs are languishing and require maintainer attention.

- **Long-Standing, High-Impact Issues:**
    - **[Feature #44395](openclaw/openclaw #44395) - Heading-Aware Chunking:** A fundamental improvement to memory search that has been open for **3 months** with no maintainer action. This is a clear roadmap item that is being neglected.
    - **[Bug #77802](openclaw/openclaw #77802) - `doctor --fix` Fails Atomically:** A configuration management bug open for over a month that prevents users from self-healing their setups. The issue is clearly documented and reproducible.
    - **[Bug #78805](openclaw/openclaw #78805) - Severe Event Loop Blocking:** A regression causing up to 4-second freezes, open for over a month. This is a critical performance bug that the team seems unable to repro, but it is a blocker for affected users.
- **Stalled PRs Needing Review:**
    - **[PR #87449](openclaw/openclaw PR #87449) - fix(mattermost): preserve text-block boundaries in draft preview:** This PR, open for 19 days, fixes a known issue. It's "ready for maintainer look" but has been in that state for weeks.
    - **[PR #90741](openclaw/openclaw PR #90741) - perf(models-config): unify auth-profile fingerprint cache:** This performance improvement PR is "ready for maintainer look" but is stalled. It is a dependency for other work and its delay holds up progress.
    - **[PR #90659](openclaw/openclaw PR #90659) - feat(plugins): expose compaction summary with hook opt-in:** This feature PR is "waiting on author" due to a dirty candidate status, but the author likely requires guidance from a maintainer to finalize it.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report
**Date:** 2026-06-15

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem continues to experience explosive growth, with multiple projects iterating rapidly on multi-channel delivery, agentic autonomy, and developer extensibility. The landscape today shows a **clear bifurcation between mature, stability-focused reference implementations** (OpenClaw, Hermes Agent) and **rapidly-iterating, feature-hungry projects** (NanoBot, NanoClaw, ZeroClaw) that prioritize community contributions and integration velocity. A common thread across nearly all projects is the **tension between security/approval boundaries and agentic freedom**, with multiple simultaneous vulnerability disclosures (NanoClaw, IronClaw) and approval-flow redesigns dominating developer attention. The ecosystem is also converging on **cross-platform connectivity**—every active project has open issues or PRs targeting Matrix, Telegram, Discord, or WhatsApp stability, suggesting that users increasingly expect agents to operate seamlessly across all their communication tools.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Merged/Closed PRs (24h) | Release This Week? | Health Score\(^1\) |
|---|---|---|---|---|---|
| **OpenClaw** | 500 (436 open, 64 closed) | 500 (457 open, 43 merged) | 43 | ✅ v2026.6.8-beta.1 | ⚠️ Churn-heavy / strained |
| **NanoBot** | 4 (1 open) | 32 (16 open, 16 merged) | 16 | ❌ No | ✅ High velocity, healthy |
| **Hermes Agent** | 50 (44 open, 6 closed) | 50 (39 open, 11 merged) | 11 | ❌ No | ✅ Healthy, strong contributors |
| **PicoClaw** | 5 (4 open) | 8 (3 open, 5 merged) | 5 | ✅ v0.2.9-nightly | ✅ Healthy, maturing |
| **NanoClaw** | 7 (7 open) | 11 (6 open, 5 merged) | 5 | ❌ No | ⚠️ Active but security-heavy |
| **NullClaw** | 0 | 0 | 0 | ❌ No | 💤 Dormant |
| **IronClaw** | 25 (14 open, 11 new bugs) | 27 (11 open, 16 merged) | 16 | ❌ No | ✅ High momentum, security focus |
| **LobsterAI** | 2 (2 open, stale) | 4 (3 open, 1 merged) | 1 | ❌ No | ⏸ Low activity, stalled features |
| **Moltis** | 1 (1 open) | 2 (2 open, 0 merged) | 0 | ❌ No | ✅ Stable, low-activity |
| **CoPaw** | 8 (8 open) | 7 (7 open, 0 merged) | 0 | ❌ No | ✅ High engagement, feature phase |
| **ZeptoClaw** | 0 | 0 | 0 | ❌ No | 💤 Dormant |
| **TinyClaw** | 0 | 0 | 0 | ❌ No | 💤 Dormant |
| **ZeroClaw** | 40 (13 open, 27 closed) | 50 (50 open, 0 merged) | 0 | ❌ No | ⚠️ Massive queue, blocked reviews |

*\(^1\) Health Score: ✅ Healthy → ⚠️ Strained/Concerning → ⏸ Low Activity → 💤 Dormant*

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale & Community Size:** OpenClaw's brute-force activity (500+ issues/PRs updated daily) dwarfs every other project. It has the largest contributor base and most diverse device/channel integration surface area.
- **Release Cadence:** The only project publishing structured beta releases with migration notes, signaling a more formal release engineering process.
- **Channel Parity:** OpenClaw leads in simultaneous Telegram, Discord, Slack, and WhatsApp support—others typically focus on 1–2 channels.
- **Plugin/Skill SDK:** The project is actively moving toward a formalized plugin SDK (Feature #81913), which is ahead of most peers.

**Technical Approach Differences:**
- **YAML-based QA infrastructure** (PR #92915) shows a commitment to test maintainability unique among peers.
- **Codex integration** with auto-approvals (#92625) indicates deeper agentic autonomy than Hermes or NanoBot, which still gate approvals heavily.

**Comparative Weaknesses:**
- **Critical bug resolution latency** is the worst in the ecosystem—P1 bugs like Anthropic group-chat blocking (#83419) and gateway event-loop starvation (#83366) have no fix PRs, while NanoBot fixed a similar Anthropic regression in hours (#4333).
- **PR merge rate is abysmal** (43 merges out of 500 updated PRs = 8.6%), far below NanoBot (50%), Hermes (22%), or PicoClaw (62.5%).
- **Backlog neglect** is most visible here—OpenClaw has issues abandoned for months (#44395, 3 months) while NanoBot merged community contributions within days.

**Bottom Line:** OpenClaw is the **largest but slowest-moving** project in the ecosystem. It has the most ambitious scope but struggles to close issues at the rate they open.

---

## 4. Shared Technical Focus Areas

The following requirements appear across **3+ projects simultaneously**, indicating genuine ecosystem-wide demand:

| Focus Area | Affected Projects | Specific Needs |
|---|---|---|
| **Telegram Reliability** | OpenClaw, NanoBot, PicoClaw, ZeroClaw | Code-block chunking, bot-to-bot mode, message dropping, rich text formatting |
| **Matrix Gateway Stability** | Hermes Agent, PicoClaw, OpenClaw | E2EE re-init storms, inbound dispatch failures, `allow_from` auth with colon-delimited IDs |
| **Windows & macOS Support** | Hermes Agent, OpenClaw, CoPaw, IronClaw | Installer failures, cron script backslash mangling, file system EXDEV errors |
| **Memory & Context Architecture** | Hermes Agent, OpenClaw, ZeroClaw | Memory-as-background-context (not user content), chunking strategies, toolset bypass prevention |
| **Multi-Agent Delegation** | NanoBot, ZeroClaw, OpenClaw | Subagent model presets, risk-profile gating, cross-agent session isolation |
| **Security/Approval Boundaries** | NanoClaw, IronClaw, ZeroClaw, OpenClaw | `shell` tool bypass, `extra_args` injection, loopback webhook impersonation, hidden MCP args |
| **WebUI & Desktop UX** | Hermes Agent, NanoBot, CoPaw, OpenClaw | Auto-scroll, model picker visibility, i18n gaps, Arabic/Hebrew RTL support |
| **Plugin/Skill SDK Maturation** | OpenClaw, PicoClaw, ZeroClaw | Setup hooks, out-of-tree channel registration, stable API surface |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes Agent | ZeroClaw | CoPaw |
|---|---|---|---|---|---|
| **Primary Target User** | Multi-channel power users & plugin developers | CLI/API-first developers, automation enthusiasts | Desktop TUI users, macOS power users | Self-hosters, multi-instance operators | Chinese ecosystem (QQ/WeChat/DingTalk), desktop GUI |
| **Feature Velocity vs Stability** | Heavy churn, low resolution | Fast merges, rapid bugfixes | Balanced, structured | Hottest: highest feature addition per week | Feature-rich with localization focus |
| **Channel Breadth** | Telegram, Discord, Slack, WhatsApp, Matrix | Telegram, Matrix | Desktop, Telegram, Discord, WebChat | Email, SMS (5+ providers), Telegram, Discord, Feishu/Lark | QQ, WeChat, DingTalk, Web Console |
| **Agentic Autonomy Level** | Medium–High (auto-approvals in Codex) | Low–Medium (gate-heavy) | Low–Medium (approval dialogs) | Medium (risk profiles, delegate agents) | Low (manual triggers, cron agents) |
| **Security Posture** | Reactive (no fix for P1 auth bypasses) | Fast P1 fix (Anthropic in hours) | Active security review | Multiple S0 disclosures open | No recent disclosures |
| **Architecture** | Monorepo with plugin SDK roadmap | Simpler monolithic Go? | Rust + TypeScript (Desktop) | WASM plugin infrastructure | Python + Tauri (Windows desktop GUI) |
| **Documentation Quality** | Detailed release notes, migration guides | Minimal (only changelogs) | Good (bug reports with root cause) | Heavy label system, RFC governance | i18n-rich, contributor-friendly |
| **Release Discipline** | Structured beta tags | Unscheduled (merge-to-main) | Unscheduled | No recent release | Point releases with patch regressions |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating (Feature-first, high churn)
- **ZeroClaw** — Highest addition velocity; 50 open PRs all being written, SMS channels, smart home tools, new providers. **Most feature-rich project** but severely bottlenecked on reviews.
- **NanoBot** — Best merge rate in the ecosystem. Telegram code-block fix done in <24 hours. Matrix integration merged after 4 months. **Highest contributor satisfaction signal.**
- **OpenClaw** — Absolute activity leader, but drowning in open issues. 436 open issues vs. 64 closed is unsustainable. **Needs process overhaul to maintain developer trust.**

### Tier 2: Healthy & Stabilizing (Balanced additions and maintenance)
- **Hermes Agent** — Strong contributions (i18n with 15 languages, Matrix fixes, macOS notifications). Bug resolution speed is good. **Best all-around health score** among large projects.
- **IronClaw** — Focused on Reborn architecture and security hardening. Active dogfooding program surfacing real bugs. **Deliberate, quality-driven iteration.**
- **PicoClaw** — Error-handling cleanup wave shows maturation. Nightly builds published. **Small but disciplined.**

### Tier 3: Low Activity / Maintenance Mode
- **Moltis** — One feature request and two Docker/CI PRs. **Quiet but not abandoned.**
- **LobsterAI** — Three feature PRs stale for 2 months. Ghost session fix was only merged PR. **Risk of community disengagement.**
- **CoPaw** — Active but no merged PRs today. Bug regressions in latest patch eroding trust. **Warning signs of maintainer bottleneck.**

### Tier 4: Dormant
- **NullClaw, ZeptoClaw, TinyClaw** — Zero activity for 24+ hours. **No market signal.**

---

## 7. Trend Signals (Industry Takeaways for AI Agent Developers)

**1. Security boundaries are the #1 bottleneck to agentic autonomy.**
   - Three independent vulnerability disclosures this week (NanoClaw #2760-2762, IronClaw #4860-4865, ZeroClaw #5842) all target the *same pattern*: shell tool bypass via env/dispatcher wrapping or file path injection.
   - **Takeaway:** Trust models that rely on string matching or classification of arbitrary commands are fundamentally brittle. Expect the ecosystem to converge on capability-seamed sandboxing (WebAssembly, containerized execution) within 6–12 months.

**2. Multi-channel delivery is table stakes, not differentiability.**
   - Every active project supports at least 2 chat platforms; the leaders support 5+. But channel-specific bugs (Telegram code blocks, Matrix E2EE, DingTalk session invisibility) show that quality *deteriorates* with breadth.
   - **Takeaway:** Users now expect seamless cross-platform continuity. The winning projects will invest in **channel-agnostic agent memory/session state** rather than simply adding more transport protocols.

**3. Developer extensibility is the new differentiator.**
   - Top-requested features across OpenClaw, PicoClaw, and ZeroClaw are **setup hooks, stable SDKs, and out-of-tree plugin registries**. The community wants to author skills without forking or deep architecture knowledge.
   - **Takeaway:** The next wave of dominance will come from projects that ship a **documented plugin SDK** before their competitors. NanoBot's rapid merge cycle and Hermes's i18n expansion are early signals of this trend.

**4. Local/self-hosted Windows support is a latent but growing demand.**
   - IronClaw, Hermes Agent, and CoPaw all report Windows installer failures, cron script issues, and filesystem path mangling. The Apple Silicon era drove macOS focus; now users are returning to Windows with higher expectations.
   - **Takeaway:** A reliable "install with one command" Windows experience could unlock a large enterprise/prosumer segment underserved by cloud-only agents.

**5. Token-conscious architecture is becoming mandatory.**
   - ZeroClaw's PR to skip futile history trims (#7440) and NanoBot's zero-usage-tokens bug (#4309) both highlight that developers and users are *measuring* cost per interaction. Hidden inefficiencies (double LLM invocations, unbounded context windows) are now being surfaced as bugs.
   - **Takeaway:** The era of "just call the API and bill the user" is ending. Efficient context management and accurate token accounting will be table stakes for production deployments within 2–3 release cycles.

**6. Governance codification is emerging as a community need.**
   - ZeroClaw's RFC #6808 (work lanes, board automation) and the multi-month release PR #3708 in IronClaw show that mature communities are actively designing processes to handle the PR avalanche.
   - **Takeaway:** Early-stage projects should invest in labeled repositories, automated stale-bot configuration, and clear PR templates *before* reaching critical mass. OpenClaw's current strain is a cautionary tale.

---

*Report generated 2026-06-15. Data reflects open-source repository activity for the 24-hour period ending 2026-06-15 00:00 UTC.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest — 2026-06-15**

---

## 1. Today's Overview

NanoBot saw an exceptional spike in activity over the past 24 hours, with **32 PRs updated** (16 merged/closed, 16 open) and **4 issues updated** (1 active, 3 closed). The project's development velocity is extremely high, driven largely by ongoing WebUI improvements, tool system robustness fixes, and channel integrations. Notably, the sole open issue concerns a **critical zero-usage-tokens bug** in the OpenAI-compatible serve endpoint, which remains unaddressed by a fix PR. The community contributed a long-awaited **Matrix protocol channel integration** (PR #1056) that was finally merged after months of work, and a **feat(tools) for configurable subagent model presets** (PR #4291) continues to mature. Overall, the project is in a very healthy, fast-iteration phase with active maintainer engagement.

---

## 2. Releases

**No new releases** in this period. The last release date is not captured in the data; the project is shipping rapid fixes directly through merges to main.

---

## 3. Project Progress

The following key improvements were **merged or closed** in the last 24 hours:

- **WebUI mobile responsiveness** (#4339, chengyongru) — Tightened spacing, safe-area padding, and wrap behavior for mobile screens.
- **Feat: Matrix protocol channel integration** (#1056, volkergrabbe) — Massive feature addition bringing full Matrix (DM/room) support with access token auth. *Merged after ~4 months*.
- **Fix: preserve fenced code blocks when splitting messages** (#4340, boogieLing) — Fixes long-standing Telegram code-block breakage (#4250).
- **Fix: reject malformed media attachments** (#4312, yu-xin-c) — Prevents string media splitting into per-character attachments.
- **Fix: reject non-positive file pagination limits** (#4311, yu-xin-c) — Clamps `read_file` and `list_dir` limits.
- **Fix: drop orphan tool results from session history** (#4011, boogieLing) — Cleans stale `role: "tool"` messages on restore.
- **Fix: reject malformed CLI app argv payloads** (#4336, yu-xin-c) — Runtime validation for `run_cli_app` args.
- **WebUI locale fixes** (#4331, chengyongru) — Fully localized update check copy across all locales.
- **Documentation improvements** (#4341, #4338, #4295) — Themed README cover, clickable Kimi partner banner, new Open Source Partners strip.
- **Tool config model refactoring** (#4344, chengyongru) — Moved tool config models to side-effect-free modules; open/active.

---

## 4. Community Hot Topics

The most active discussions center on **robustness and deprecation**:

- **#4333 (CLOSED)** — *Anthropic provider sends deprecated `temperature` to opus-4-8 / Fable → 400*. Resolved swiftly; highlights the risk of model-specific parameter suppression logic.
- **#4309 (OPEN)** — *`nanobot serve` always returns zero usage tokens*. The only open issue updated today with 1 comment. Blocked by unknown cause; high priority as it breaks token accounting for downstream consumers.
- **#4250 (CLOSED)** — *Telegram split_message breaks fenced code blocks*. Fixed by #4340; community satisfaction expected to rise once deployed.
- **#4291 (OPEN)** — *Feat(spawn): allow subagents to use configurable model presets*. Active discussion about preset naming and security boundaries.

**Underlying needs**: Users are clearly pushing for (a) production-grade token accounting, (b) reliable multi-channel message formatting, and (c) flexible agent orchestration with model diversity.

---

## 5. Bugs & Stability

| Severity | Bug | Status | Fix PR |
|----------|-----|--------|--------|
| **Critical** | `nanobot serve` returns zero usage tokens for all chats (#4309) | **Open, unassigned** | None yet |
| **High** | Anthropic `opus-4-8` rejected with 400 due to deprecated `temperature` (#4333) | Closed/fixed | Not directly linked |
| **Medium** | Telegram fenced code blocks broken across chunk boundaries (#4250) | Closed/fixed | #4340 merged |
| **Medium** | Malformed media attachments split into per-character (#4312 root cause) | Closed/fixed | #4312 merged |
| **Medium** | Empty injected payloads cause blank user messages (#4337) | Open | #4337 open |
| **Low** | Non-positive file pagination limits cause errors (#4311) | Closed/fixed | #4311 merged |
| **Low** | CLI app argv accepts non-string args (#4336) | Closed/fixed | #4336 merged |

**Ranking note**: The zero-usage-tokens bug (#4309) is the most impactful open defect as it directly harms any consumer relying on OpenAI-compatible usage data (e.g., billing, rate limiting, analytics). No fix PR exists yet.

---

## 6. Feature Requests & Roadmap Signals

**Merged features that signal roadmap direction:**
- **Matrix channel support** — Community-driven, suggests growing demand for decentralized/collaborative chat platforms.
- **WebUI automation management view** (#4330, open) — If merged, will add an automation surface for listing/running/pausing automations from the WebUI.

**Open features under review:**
- **Subagent model presets** (#4291) — Allow child agents to run with different models. High user interest; likely to land in next release.
- **Env-var template resolution in WebUI settings** (#4324, #4325) — Two PRs addressing `${VAR}` templates not being resolved in read/update paths. Likely blockers for config management dashboards.

**Predicted next-version features**: Subagent model presets, env-var resolution in WebUI settings, Feishu WebSocket card rendering fix (#4342), and the automation management view.

---

## 7. User Feedback Summary

- **Pain point #1 — Token accounting broken:** Users relying on `nanobot serve` for production or monitoring cannot trust usage metrics. No workaround mentioned in the issue.
- **Pain point #2 — Model-specific parameter deprecations cause hard failures:** Anthropic’s `opus-4-7` exemption did not extend to `opus-4-8`; users hit 400 errors. Fixed but indicates a need for a more generic deprecation-handling pattern.
- **Positive feedback signal:** High-quality contributions from community members (boogieLing, yu-xin-c, chengyongru, Re-bin) show deep engagement and trust in the project’s direction.
- **Feature satisfaction**: Telegram code-block fix (requested in #4250) was resolved in a single day, reflecting strong maintainer responsiveness to user-reported formatting issues.

---

## 8. Backlog Watch

The following items require **maintainer attention**:

- **#4309 — Zero usage tokens (`nanobot serve`)** — No fix PR exists. This is the top-priority open issue and has been open for 3 days. Urgently needs assignment.
- **#4337 — Empty injected payloads (open)** — Fix PR is open but unmerged; likely to be merged quickly given the pattern of fast approvals.
- **#4344 — Config/agent loop refactoring (open)** — Large structural change; needs careful review to avoid regressions in tool config loading.
- **#4291 — Subagent presets (open)** — Needs review of security implications (e.g., allowing subagents to run with elevated priveleges or different providers). No comments from maintainers yet.
- **Oldest open PR (#1056 was just merged)** — No truly stale items remain; project hygiene is excellent.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-15

## Today's Overview

Hermes Agent shows **high community activity** today, with 50 updated issues and 50 updated PRs in the last 24 hours. The project is in a **healthy maintenance-and-feature development phase**, with 11 merged/closed PRs suggesting steady progress on bug fixes and enhancements. No new releases were published today, but the sheer volume of open issues (44 active) and PRs (39 open) signals a project with deep community engagement and a substantial backlog. The 24-hour activity window spans fixes across the Matrix gateway, cron system, CLI installer, and several new feature PRs including streaming-content skills and kanban workflow automation.

---

## Releases

*No new releases were published today. The latest available version is prior to 2026-06-15.*

---

## Project Progress

**11 PRs merged or closed today**, reflecting active codebase advancement:

- **`#44457`** — [CLOSED] `fix(web): don't re-run the bundled fallback sweep when web-parallel is explicitly disabled` — Follow-up refinement to web plugin fallback logic, ensuring disabled web-parallel backends are not unnecessarily swept during initialization.

- **`#36856`** — [CLOSED] `fix(utils): handle EXDEV in atomic_replace for cross-filesystem symlinks` — Critical cross-filesystem edge case resolved. `atomic_replace` now gracefully handles `EXDEV` errors when target symlinks live on a different filesystem (e.g., managed deployments symlinking config files). Affects every `atomic_json_write`/`atomic_yaml_write` site.

- **`#40529`** — [CLOSED] `fix(cli): surface inline custom provider model in the picker (#40480)` — Desktop model dropdown and platform pickers (Telegram/Discord) now show custom OpenAI-compatible providers configured via `hermes config set model.provider custom`. Previously only visible in CLI.

- **`#46212`** — [CLOSED] `feat(tui): send macOS attention notifications` — New `MacNotificationController` sends native macOS attention notifications for completions, wait-input requests, sudo prompts, approvals, and blocked errors.

**Notable open PRs advancing features today:**

- **`#46365`** — Fix for Matrix media send E2EE re-init storms (see Bugs section)
- **`#46364`** — Windows cron fix preferring Git Bash over WSL (see Bugs section)
- **`#46351`** — New `streaming-content` skill for Twitch/Kick/Rumble transcription
- **`#46360`** — Kanban epoch callback for autonomous spiral/epoch workflows
- **`#38846`** — Large i18n PR adding 15-language support (861 keys, still open and syncing)

---

## Community Hot Topics

### Most Active Issues (by comment count)

1. **#45058** — `[CLOSED] web_search/web_extract silently routes to Parallel.ai without user opt-in`
   - 7 comments, 10 👍
   - **Context:** Commit `e0e257171` changed default backend routing from `firecrawl` (which would fail) to silently sending all unconfigured web traffic to **Parallel.ai**. Users are concerned about **transparency and privacy** — this changes data routing behavior without explicit user consent.
   - **Link:** [Issue #45058](https://github.com/NousResearch/hermes-agent/issues/45058)

2. **#43083** — `[OPEN] Passwords get replaced by *** but model reads back its own conversation history and fails`
   - 7 comments, high engagement despite 0 👍
   - **Context:** The credential redaction mechanism (replacing passwords with `***`) is causing the model to fail on second tool calls because it reads back the redacted conversation history. A **defence-in-depth** design tension exists between security (redacting credentials) and functional model reasoning.
   - **Link:** [Issue #43083](https://github.com/NousResearch/hermes-agent/issues/43083)

3. **#31584** — `[OPEN] Treat memory-context as background context, not authoritative user-message content`
   - 5 comments, persistent discussion since May 24
   - **Context:** Users want memory context to be treated as **background/system prompt material** rather than authoritative user content. Concerns include model confusion and potential attack surface if memory content is maliciously injected.
   - **Link:** [Issue #31584](https://github.com/NousResearch/hermes-agent/issues/31584)

### Most Reacted Issues

| Issue | Description | 👍 |
|-------|-------------|----|
| [#45058](https://github.com/NousResearch/hermes-agent/issues/45058) | Silent Parallel.ai routing | 10 |
| [#44140](https://github.com/NousResearch/hermes-agent/issues/44140) | Desktop UI: auto-scroll, sidebar overlap, session groups | 3 |
| [#36865](https://github.com/NousResearch/hermes-agent/issues/36865) | True "Clean/Professional" theme (ADHD accessibility) | 3 |
| [#41553](https://github.com/NousResearch/hermes-agent/issues/41553) | Hermes Workspace integration in Desktop | 1 |
| [#45103](https://github.com/NousResearch/hermes-agent/issues/45103) | Desktop sidebar hover cards with AI summaries | 1 |
| [#44757](https://github.com/NousResearch/hermes-agent/issues/44757) | Session merge command | 1 |
| [#46142](https://github.com/NousResearch/hermes-agent/issues/46142) | Matrix gateway mautrix migration breaks Tuwunel | 1 |

---

## Bugs & Stability

### Critical / High Severity (P1)

1. **#46310** — `[P1] Matrix gateway media path reconnects + re-inits E2EE per message — exhausts recipient one-time keys`
   - **Impact:** Under burst conditions, per-message E2EE re-init exhausts recipient one-time keys and silently drops messages. Systematic reliability failure for Matrix media.
   - **Fix PR exists:** **#46365** — `fix(send_message): reuse live gateway adapter for Matrix media sends` (opened today)
   - **Link:** [Issue #46310](https://github.com/NousResearch/hermes-agent/issues/46310)

2. **#46142** — `[P1] Matrix gateway — mautrix migration (PR #18505) breaks inbound message dispatch on Tuwunel homeserver`
   - **Impact:** After swapping `nio` for `mautrix`, **no inbound messages are dispatched** on Tuwunel homeservers. Initial sync completes but zero events reach the agent.
   - **No fix PR identified yet.**
   - **Link:** [Issue #46142](https://github.com/NousResearch/hermes-agent/issues/46142)

### Medium Severity (P2)

3. **#46303** — `[P2] Concurrent sessions cross-contaminate (shared memory injection + shared git worktree)`
   - **Impact:** Two concurrent Desktop sessions can cross-contaminate via shared memory injection and shared git worktrees, with no isolation mechanism. Reproducible both inter-and intra-surface.
   - **No fix PR identified yet.**
   - **Link:** [Issue #46303](https://github.com/NousResearch/hermes-agent/issues/46303)

4. **#45519** — `[CLOSED] GLM-5.2 context misdetected as 202,752 — auto-lowers compression threshold`
   - **Impact:** Model metadata resolution via substring matching (`"glm" in "glm-5.2"`) maps to wrong context size (202K vs 1M). Triggers premature compression at ~20% usage.
   - **Status:** Closed — fix presumably merged.
   - **Link:** [Issue #45519](https://github.com/NousResearch/hermes-agent/issues/45519)

5. **#46260** — `[P2] Hermes installer fails at "desktop" stage — npm install exit code 1 on Windows 10`
   - **Impact:** Fresh Windows 10 installs fail completely at the Desktop stage. AI-assisted bug report.
   - **No fix PR identified yet.**
   - **Link:** [Issue #46260](https://github.com/NousResearch/hermes-agent/issues/46260)

6. **#46332** — `[P2] [Windows] Cron jobs with .sh scripts fail — WSL bash preferred over Git Bash + backslashes eaten by MSYS`
   - **Impact:** Cron jobs using `no_agent: true` with `.sh` scripts fail entirely on native Windows due to WSL/Git Bash priority and MSYS path mangling.
   - **Fix PR exists:** **#46364** — `fix(cron): prefer Git Bash and POSIX paths on Windows` (opened today)
   - **Link:** [Issue #46332](https://github.com/NousResearch/hermes-agent/issues/46332)

7. **#46171** — `[P2] [Security] Hermes Agent memory provider tools bypass `disabled_toolsets``
   - **Impact:** Security vulnerability — memory provider tools (`fact_store`, `fact_feedback`) remain model-callable even after `disabled_toolsets` filtering is applied. Defense-in-depth bypass allows models to access memory tools despite explicit disablement.
   - **No fix PR identified yet.**
   - **Link:** [Issue #46171](https://github.com/NousResearch/hermes-agent/issues/46171)

### Lower Severity (P3)

8. **#46320** — `[P3] Desktop bottom-left model switcher lacks global toggle; resuming session overwrites model override`
9. **#46300** — `[P3] zh-Hans i18n translation quality — poor terminology choices`
10. **#40480** — `[P3] Custom provider models not shown in Desktop model selection dropdown` *(fix PR #40529 now merged!)*

---

## Feature Requests & Roadmap Signals

### Most Likely for Next Version

1. **Matrix Gateway Stabilization** — The mautrix migration (PR #18505) introduced significant regressions on certain homeservers. Expect **patch-level fixes** for Matrix E2EE re-init storms and inbound dispatch (PRs #46365, #39779).

2. **Windows Support Improvements** — Multiple Windows-specific issues (installer #46260, cron scripts #46332) suggest a **Windows QA push** is incoming. PR #46364 directly addresses the cron problem.

3. **Desktop UI Polish** — High-value UI requests (auto-scroll #44140, custom provider model picker fix now merged #40529, theme accessibility #36865) indicate active Desktop UX iteration.

### Notable Feature Signals for Mid-Term Roadmap

- **Memory architecture rework** — Issues #31584 (background context treatment), #46171 (toolset bypass), and #46253 (GBrain integration) suggest memory subsystem is due for a **major refactor**.
- **Session management enhancements** — #44757 (session merge command), #22027 (persistent sessions across tab close), #45103 (sidebar AI summaries) point to session UX as a strategic focus.
- **i18n expansion** — PR #38846 (15 languages, 861 keys) is a large, long-running effort that could land in a dot release.
- **Kanban/Workflow automation** — PR #46360 (kanban epoch callback) and #40136 (gamefi-research skill) signal growing interest in **autonomous workflow capabilities**.

---

## User Feedback Summary

### Positive Signals
- **High contribution engagement** — 39 open PRs and 44 open issues indicate a healthy, active community of contributors building features and reporting bugs with detailed analysis.
- **Quality of bug reports** — Many issues include AI-assisted drafts, root cause analysis, and exact reproduction steps (e.g., #46260 with user-reviewed AI draft, #46303 with detailed cross-contamination analysis).

### Pain Points

| Pain Point | Frequency | Severity |
|------------|-----------|----------|
| Matrix gateway instability (E2EE, dispatch) | 2–3 active issues | High |
| Windows installation failures | 2 issues this week | High |
| Web tool silent routing changes | 1 high-reaction issue | Medium |
| Memory cross-contamination in concurrent sessions | New, detailed report | Medium |
| Memory tool policy bypass (security) | New report | Medium |
| Desktop UI friction (scroll, sidebar, model picker) | Multiple reports | Low–Medium |
| i18n quality gaps (Chinese translations) | Ongoing | Low |
| Provider model visibility in Desktop | Recently fixed | Low |

### Dissatisfaction Signals
- **Privacy/Transparency** (#45058, 10 👍) — Users are **uncomfortable** with silent default backend routing changes, especially to commercial services (Parallel.ai). Expect maintainers to implement **opt-in UX**.
- **Accessibility** (#36865, 3 👍) — The "Clean/Professional" theme request with ADHD considerations suggests the existing stylized themes create **cognitive friction** for neurodivergent users.
- **Windows support** — Multiple installer and cron failures suggest Windows is a **second-class platform** in practice, despite support claims.

---

## Backlog Watch

### Long-unanswered Issues (30+ days without maintainer response)

| Issue | Created | Days Open | Summary | Priority |
|-------|---------|-----------|---------|----------|
| [#16108](https://github.com/NousResearch/hermes-agent/issues/16108) | 2026-04-26 | **50 days** | Gateway event idempotency, cancellation, and stale-response suppression | P3 |
| [#22027](https://github.com/NousResearch/hermes-agent/issues/22027) | 2026-05-08 | **38 days** | Persistent agent sessions — tasks should continue when webchat tab is closed | P3 |
| [#23704](https://github.com/NousResearch/hermes-agent/issues/23704) | 2026-05-11 | **35 days** | Hermes cannot send messages with file attachments on Mattermost | P2 |
| [#31584](https://github.com/NousResearch/hermes-agent/issues/31584) | 2026-05-24 | **22 days** | Memory-context should be background context, not authoritative user content | P2 |

### Stale PRs Needing Attention

| PR | Created | Status | Summary |
|----|---------|--------|---------|
| [#39779](https://github.com/NousResearch/hermes-agent/pull/39779) | 2026-06-05 | **10 days open** | fix(matrix): device_id fallback prevents E2EE init failure on fresh bot accounts **(P1)** |
| [#40136](https://github.com/NousResearch/hermes-agent/pull/40136) | 2026-06-05 | **10 days open** | feat(skills): add gamefi-research workflow skill foundation |
| [#38846](https://github.com/NousResearch/hermes-agent/pull/38846) | 2026-06-04 | **11 days open** | feat(desktop): add multilingual i18n support with 15 languages — large PR, needs review |

### Recommendation
- **#23704** (Mattermost file attachments, P2, 35 days) and **#16108** (gateway event idempotency, 50 days) have significant user impact and merit maintainer triage.
- **#39779** (Matrix device_id, P1) is a priority fix for Matrix reliability that has been open for 10 days without merge — potential bottleneck for the broader Matrix stability initiative.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Date:** 2026-06-15  
**Data Period:** Last 24 hours (2026-06-14 to 2026-06-15)

---

## Today's Overview

PicoClaw's development activity remains strong, with **5 issues updated** (4 open, 1 closed) and **8 pull requests updated** (3 open, 5 merged/closed) in the past 24 hours. The project released a **nightly build (v0.2.9-nightly.20260614)**, signaling active ongoing development on the `main` branch ahead of the next stable release. A significant **structural refactoring push** is visible, with three PRs from contributor `chengzhichao-xydt` focused on **error handling hygiene** (explicit error discarding, proper close error capture, structured logging migration). A noteworthy **new feature PR** from `jp39` adds remote WebSocket mode to the `picoclaw agent` command, extending agent connectivity beyond local-only operation. Overall, the project maintains a **healthy pulse**, with sustained community contributions and active maintainer engagement.

---

## Releases

### New Release: **v0.2.9-nightly.20260614**
- **Tag:** `nightly`  
- **Full Changelog:** [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

**Details:** Automated nightly build from `main` branch. No stable release notes or breaking changes documented; labeled as potentially unstable.

**Note:** This is not a stable release. Users are advised to **use with caution**. No migration steps provided.

---

## Project Progress

### Merged/Closed PRs (5 total, all closed today)

| PR | Author | Summary |
|----|--------|---------|
| [#2904](https://github.com/sipeed/picoclaw/pull/2904) | SiYue-ZO | **Fix agent loop reload and panic cleanup stability** – Eliminated detached goroutine race conditions in `ReloadProviderAndConfig`; synchronous `defer/recover` flow prevents blocked goroutines and dangling state |
| [#3124](https://github.com/sipeed/picoclaw/pull/3124) | chengzhichao-xydt | **Fix TTS error response path** – `io.ReadAll` error now captured instead of discarded; provides descriptive fallback when TTS API returns non-200 status |
| [#3123](https://github.com/sipeed/picoclaw/pull/3123) | chengzhichao-xydt | **Fix filesystem Close() error** – Explicitly discards `dirFile.Close()` error on directory FD, matching existing pattern (`_ = dirFile.Sync()`) |
| [#3122](https://github.com/sipeed/picoclaw/pull/3122) | chengzhichao-xydt | **Fix evolution appendJSONLRecords Close()** – Captures `Close()` error on write-only files that could surface delayed failures (disk full, NFS errors) |
| [#3121](https://github.com/sipeed/picoclaw/pull/3121) | chengzhichao-xydt | **Refactor openai_compat logging** – Replaced last `log.Printf` with structured `logger.WarnCF`; removed unused `log` import |

**Key Theme:** Four of five merged PRs are **error-handling improvements** — a concerted cleanup effort targeting silent error discards, a strong signal of increasing codebase maturity.

---

## Community Hot Topics

### Most Active Issues

| Issue | Type | Comments | Status |
|-------|------|----------|--------|
| [#2978](https://github.com/sipeed/picoclaw/issues/2978) | Feature Request | 2 | **CLOSED** – Add omniroute as provider |
| [#3044](https://github.com/sipeed/picoclaw/issues/3044) | Bug | 1 | OPEN – `allow_from` fails for Matrix user IDs with colons |
| [#3041](https://github.com/sipeed/picoclaw/issues/3041) | Bug | 1 | OPEN – `mcp add` mis-parses global flags |
| [#3090](https://github.com/sipeed/picoclaw/issues/3090) | Bug | 1 | OPEN – Panel broken on iOS Safari <16.4 |
| [#3125](https://github.com/sipeed/picoclaw/issues/3125) | Bug | 0 | OPEN – `web_search` tool fails with Brave API from `.security.yml` |

### Open PRs Under Discussion

| PR | Author | Comments | Status |
|----|--------|----------|--------|
| [#3118](https://github.com/sipeed/picoclaw/pull/3118) | jp39 | 0 | OPEN – Remote Pico WebSocket mode for agent |
| [#3120](https://github.com/sipeed/picoclaw/pull/3120) | carlosprados | 0 | OPEN – `RegisterChannelSettings` hook for out-of-tree channels |
| [#2975](https://github.com/sipeed/picoclaw/pull/2975) | Jlan45 | 0 | OPEN – Telegram reply-to-bot as mention in groups |

**Analysis:** Community interest centers on **extensibility** (omniroute provider, out-of-tree channel hooks) and **multi-platform support** (iOS Safari compatibility, Matrix auth). The `mcp add` parsing bug (#3041) and `web_search` API key regression (#3125) are **high-impact blocking issues** for new users.

---

## Bugs & Stability

### Reported Today (2026-06-14→15)

| Bug | Severity | Status | Details |
|-----|----------|--------|---------|
| [#3125](https://github.com/sipeed/picoclaw/issues/3125) – `web_search` tool fails with Brave API from `.security.yml` | **HIGH** | OPEN, no fix PR | Architectural change broke web search; returns `"No results for"` silently – no known workaround |
| [#3090](https://github.com/sipeed/picoclaw/issues/3090) – Panel broken on iOS Safari <16.4 | **MEDIUM** | OPEN, no fix PR | Affects mobile users accessing web panel; iOS 16.4+ required |
| [#3044](https://github.com/sipeed/picoclaw/issues/3044) – `allow_from` fails for Matrix user IDs with colons | **MEDIUM** | OPEN, no fix PR | Standard Matrix ID format (`@user:domain`) silently rejected |
| [#3041](https://github.com/sipeed/picoclaw/issues/3041) – `mcp add` mis-parses global flags | **HIGH** | OPEN, no fix PR | Breaks HTTP/SSE server additions; mis-names stdio servers – major usability blocker for MCP integration |

### Stability Observations
- **No regressions** introduced in today's PRs – all merges are error-handling improvements.
- **Critical silent-failure bugs** (#3125, #3041) remain unaddressed – these impact core functionality (web search, MCP integration).

---

## Feature Requests & Roadmap Signals

### Notable Feature Requests

1. **[#2978](https://github.com/sipeed/picoclaw/issues/2978) – Add omniroute as provider** *(CLOSED – stale)*  
   *User requested a third-party API provider integration. Closed without action; no explanation provided.*

2. **[#3120](https://github.com/sipeed/picoclaw/pull/3120) – RegisterChannelSettings hook for out-of-tree channels** *(OPEN PR)*  
   *Authoring by `carlosprados`; could unlock third-party channel ecosystem without forking PicoClaw. Likely to land in next stable release if accepted.*

3. **[#3118](https://github.com/sipeed/picoclaw/pull/3118) – Remote Pico WebSocket mode for agent** *(OPEN PR)*  
   *Adds `--remote ws://` flag to agent; enables remote agent operation. Strong candidate for next minor release.*

4. **[#2975](https://github.com/sipeed/picoclaw/pull/2975) – Telegram reply-to-bot as mention** *(OPEN PR – stale)*  
   *Long-open PR improving Telegram UX; predates current refactoring wave.*

### Predicted Next Version Features
- **Agent WebSocket remote mode** (#3118) – likely to merge soon given clean unbounded implementation.
- **Out-of-tree channel config hook** (#3120) – complements existing factory API; powerful for plugin ecosystem.
- **Telegram reply interaction** (#2975) – may gain momentum as community engagement rises.

---

## User Feedback Summary

### Pain Points (Explicit & Inferred)

| Pain Point | Source | Impact |
|------------|--------|--------|
| **Silent web_search failures** after `.security.yml` migration | Issue #3125 | Unusable Brave search; no error feedback to user |
| **Matrix user authentication broken** for standard IDs | Issue #3044 | Message filtering silently fails – trust model compromised |
| **`mcp add` unusable** with HTTP/SSE endpoints | Issue #3041 | MCP integration workflow completely broken for non-stdio |
| **No iOS support** for web panel below 16.4 | Issue #3090 | Excludes older Apple mobile devices |
| **Omniroute provider** request closed without explanation | Issue #2978 | User told "how to add combo" but no public documentation provided; frustration potential |

### Satisfaction Signals
- **High-quality error-handling contributions** from multiple contributors (chengzhichao-xydt, SiYue-ZO) suggest the codebase is respected and well-maintained.
- **Nightly build cadence** indicates active development – users see progress.

### Dissatisfaction Signals
- **Stale issues** (3 marked `[stale]`) indicate potential maintainer bandwidth constraints.
- **Business-critical bugs** (#3125) have **no workarounds** – users stuck on older config formats.
- **Closed feature request** (#2978) with no explanation or documentation could alienate contributors.

---

## Backlog Watch

### Items Needing Maintainer Attention

| Item | Age | Status | Risk |
|------|-----|--------|------|
| [#3041](https://github.com/sipeed/picoclaw/issues/3041) – `mcp add` flag parsing bug | 8 days | OPEN, no response from maintainers | **High** – blocks MCP integration for new users |
| [#3125](https://github.com/sipeed/picoclaw/issues/3125) – `web_search` failure | 1 day | OPEN, no response | **Critical** – core search feature broken in nightly |
| [#3090](https://github.com/sipeed/picoclaw/issues/3090) – iOS Safari <16.4 | 5 days | OPEN, no response | **Medium** – mobile accessibility gap |
| [#3044](https://github.com/sipeed/picoclaw/issues/3044) – Matrix `allow_from` | 8 days | OPEN, stale label | **Medium** – authentication bypass risk |
| [#2975](https://github.com/sipeed/picoclaw/pull/2975) – Telegram reply feature (PR) | 16 days | OPEN, stale label | **Low** – feature improvement, but may conflict with future changes |

### Action Recommendations

1. **Immediate:** Address #3125 (Brave web_search regression) – architectural change broke documented functionality; user has zero mitigations.
2. **Short-term:** Provide guidance or fix for #3041 (`mcp add` parsing) – this is a flagship feature usability blocker.
3. **Monitor:** #2978 (omniroute) was closed; consider adding documentation for custom provider configuration to avoid similar requests.
4. **Maintainer bandwidth note:** Five issues/PRs are marked `[stale]` – a triage session may be needed to close, assign, or document responses.

---

*Generated 2026-06-15 by PicoClaw Project Analyst*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-15

## Today's Overview

The NanoClaw project experienced a burst of activity on 2026-06-14, with 7 issues updated and 11 pull requests updated in the last 24 hours. Notably, three high-severity security vulnerabilities were reported by researcher YLChen-007, covering approval bypass, local file exfiltration, and unauthenticated webhook exploitation. On the positive side, 5 PRs were merged or closed, including significant feature work on the Codex agent provider v2, operator-driven provider selection, and container CLI tooling improvements. The project is clearly in an active development phase, but the concentration of security disclosures suggests a need for accelerated auditing and hardening efforts.

## Releases

No new releases were published in the last 24 hours. The latest release tag remains unchanged.

## Project Progress

Five PRs were merged or closed today:

- **[PR #2769]** `docs(add-codex): flag interactive auth step + host-restart step` (Koshkoshinsk) — Docs-only fix adding critical callout for interactive authentication in the Codex provider setup. Without this, agents would stall when trying to authenticate in non-TTY sessions.

- **[PR #2757]** `feat(codex): Codex agent-provider payload v2 — app-server on capability seams, vault-only auth` (omri-maya) — Major feature: Codex is now a full agent provider on the host's capability seams, authenticated vault-only through OneCLI. This is the Codex-specific payload that will install from the skill registry.

- **[PR #2756]** `feat(providers): operator-driven provider selection, switching, and memory migration` (omri-maya) — Turns the agent provider into an explicit, operator-chosen property. Adds a provider registry, setup picker, installer, vault auth walkthrough, and memory-migration skill. Non-default provider payloads (starting with Codex) install from the skill registry.

- **[PR #2764]** `docs(CLAUDE.md): fix two relocated Key Files paths` (glifocat) — Quick docs fix addressing Issue #2763 where `CLAUDE.md` referenced two relocated source files at nonexistent paths.

- **[PR #2758]** `feat(container): data-drive global CLI installs from cli-tools.json` (gavrielc) — Agent global Node CLIs now install from a data manifest instead of hardcoded Dockerfile blocks. Skills needing CLI tools simply add a JSON row, improving maintainability.

## Community Hot Topics

No issues or PRs received comments or reactions during this window. The lack of discussion may reflect the newness of many items (most opened within 24 hours) or a developing review cycle. The most significant items by nature are the security disclosures from YLChen-007:

- **[Issue #2762]** `[Security] NanoClaw add_mcp_server approval flow allows hidden args and env to be approved and persisted without being shown to the approver` — An attacker-controlled agent could submit hidden `args` and `env` parameters that bypass approval visibility. This is a high-impact design flaw in the self-modification flow.

- **[Issue #2761]** `[Security] Local gateway approval bypass via unauthenticated loopback webhook` — The Chat SDK gateway bridge starts an unauthenticated localhost webhook, allowing any process on the machine to impersonate forwarded interaction events and bypass approval.

- **[Issue #2760]** `[Security] Arbitrary local file exfiltration via send_file absolute path handling` — The `send_file` MCP tool accepts absolute paths without constraining the read target, enabling exfiltration of arbitrary files from the host.

These represent a coordinated security audit release, suggesting a systematic review rather than individual bug reports.

## Bugs & Stability

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **Critical** | [#2762] | Hidden `args`/`env` in `add_mcp_server` approval flow | None yet |
| **Critical** | [#2761] | Unauthenticated loopback webhook bypass | None yet |
| **Critical** | [#2760] | Arbitrary file exfiltration via `send_file` | None yet |
| **High** | [#2768] | Prompt caching disabled by default in Claude provider | None yet |
| **Medium** | [#2751] | Budget-exhausted LLM turns silently dropped | [PR #2759] (open) |
| **Low** | [#2763] | `CLAUDE.md` references relocated files | [PR #2764] (closed) |
| **Low** | [#2767] | Legacy Markdown sanitizer obsoleted by upstream | None yet |

**Key observation**: The three security vulnerabilities (Critical) currently have no associated fix PRs, meaning mitigation work has not yet started. The budget-dropping bug (Medium) has an open fix PR [#2759] from the same reporter (assapin), which is encouraging.

PR [#2732] (caburi00) — "Harden host + agent-runner from health audit findings" — remains open and overlaps thematically with the security disclosures. It has been open since June 11 and may incorporate or be superseded by the new findings.

PR [#2750] (sturdy4days) — fixes two stale-journal/corruption bugs ([#2516], [#2640]) related to outbound database journals after container kills — remains open since June 12. This is a stability-critical fix for production deployments.

## Feature Requests & Roadmap Signals

No new feature requests were filed today. The project's trajectory is clearly visible from the merged PRs:

1. **Codex integration** — The Codex v2 payload ([#2757]) and operator-driven provider selection ([#2756]) together create an extensible provider system. This is clearly the next major area of investment.

2. **Container tooling** — The data-driven CLI installation ([#2758]) signals a shift toward more maintainable container builds, likely in preparation for broader distribution.

3. **Stability** — The budget-delivery fix ([#2759]) and stale-journal recovery ([#2750]) show ongoing investment in production reliability.

The security disclosures from YLChen-007 are likely to drive a near-term hardening sprint.

## User Feedback Summary

User-reported pain points visible in today's data:

- **assapin** reports that budget-exhausted LLM turns result in silent failures with no reply to the user ([#2751]). The presence of a fix PR ([#2759]) from the same reporter suggests this is a real production issue.

- **glifocat** reports broken navigation in `CLAUDE.md` due to outdated file paths ([#2763]). While low severity, this impacts developer onboarding and AI-assisted development.

- **chiptoe-svg** reports that the custom Markdown sanitizer is now obsoleted by upstream fixes ([#2767]), suggesting the project carries workarounds that should be cleaned up.

No positive user feedback or testimonials were captured in today's data.

## Backlog Watch

| Item | Age | Status | Notes |
|------|-----|--------|-------|
| **[#2751]** Budget-exhausted LLM turns silently dropped | 3 days | Open issue; open fix PR [#2759] | Should track for merge |
| **[#2750]** Stale outbound.db journals after container kills | 3 days | Open PR | Dual-bug fix, stability critical |
| **[#2732]** Harden host + agent-runner from health audit findings | 4 days | Open PR, 19 files | Overlaps with today's security disclosures, may need rebasing |

**Maintainer attention needed**: The three security vulnerabilities ([#2762], [#2761], [#2760]) have no assigned reviewers and no fix PRs. Given their Critical severity, these should be triaged and assigned within the next 48 hours. The overlap with PR [#2732] suggests a possible consolidation approach.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the IronClaw project digest for **2026-06-15**.

---

## IronClaw Project Digest – 2026-06-15

**Source:** nearai/ironclaw (github.com/nearai/ironclaw)

---

### 1. Today's Overview

The project is in a period of **high activity** with strong forward momentum, particularly around the Reborn architecture. In the last 24 hours, 25 open issues and 27 open PRs were updated, alongside 16 PRs being merged or closed. The core team is working on multiple fronts simultaneously: implementing the Reborn runtime context for communication channels (#4836), improving the user approval flow (#4835), and enhancing the Slack channel integration (#4844). A significant security review is underway, with 6 new high-severity advisory issues filed regarding the `shell` tool’s approval boundaries, indicating a focused effort on hardening the agent sandbox. The community contribution pipeline remains strong, with several merges addressing long-standing UI bugs and code quality improvements.

### 2. Releases

**None.** No new releases were published in the last 24 hours.

---

### 3. Project Progress

The following notable PRs were **merged or closed** today, representing tangible progress:

- **[#4873](https://github.com/nearai/ironclaw/pull/4873) [CLOSED]:** Re-homed the approval→auth→final-reply Slack delivery e2e test that was previously removed to unblock CI. This restores critical coverage for the auth-resume flow.
- **[#4844](https://github.com/nearai/ironclaw/pull/4844) [CLOSED]:** Fixed a misrouting of gate routes in Slack delivery, where approval and auth routes were incorrectly filtered. Replaces a callback filter with a simpler string-based filter to eliminate per-route allocations and fix auth-bypass routing.
- **[#4836](https://github.com/nearai/ironclaw/pull/4836) [CLOSED]:** Merged a major feature (runtime-context communication state) that now tells the model which channels are connected, the delivery target, and the run origin at every loop start. This is a core architectural piece for Reborn.
- **Bug fixes merged:** Issues [#4751](https://github.com/nearai/ironclaw/issues/4751) (Large response tool argument overflow), [#4707](https://github.com/nearai/ironclaw/issues/4707) (Small font size in WebUI), and [#4708](https://github.com/nearai/ironclaw/issues/4708) (Missing syntax highlighting in WebUI) were all closed, indicating successful user-facing fixes from the "Dogfooding" effort.

---

### 4. Community Hot Topics

The most active discussions are concentrated on **security hardening** and **developer ergonomics**.

- **[#4851](https://github.com/nearai/ironclaw/issues/4851) [CLOSED] – Trusted-trigger origin laundering:** This issue identifies a pattern where trust is carried as a type, then flattened to a string, and re-derived downstream. The community discussion (1 comment) highlights this as a root cause for forgeable `ScheduledTrigger` origins.
- **[#4848](https://github.com/nearai/ironclaw/issues/4848) [CLOSED] – Auth-resume by per-invocation identity:** A closed issue identifying a remaining gap in the auth-resume flow, ensuring pending auth requests are matched by `input_ref` rather than just `capability_id` to prevent slot-reuse bugs.
- **[#4644](https://github.com/nearai/ironclaw/issues/4644) [OPEN] – Universal attachments:** This is a large, cross-cutting feature issue that has generated significant discussion. The community need is clear: attachments are silently dropped on Reborn, and the format-support logic is duplicated. Two active PRs ([#4738](https://github.com/nearai/ironclaw/pull/4738), [#4871](https://github.com/nearai/ironclaw/pull/4871)) are directly addressing this, adding web UX and image support.

**Underlying needs:** The community is pushing for a more robust security posture that prevents command injection through the `shell` tool, and for a unified, standard attachment pipeline that works across all channels (v1, v2, and Reborn).

---

### 5. Bugs & Stability

**Today's bug report volume is very high (11 new issues), with a critical cluster of security-related bugs.**

**Critical / High Severity:**
- **[#4865](https://github.com/nearai/ironclaw/issues/4865), [#4864](https://github.com/nearai/ironclaw/issues/4864), [#4863](https://github.com/nearai/ironclaw/issues/4863), [#4862](https://github.com/nearai/ironclaw/issues/4862), [#4861](https://github.com/nearai/ironclaw/issues/4861):** A cluster of 5 security advisories detailing approval bypasses in the `shell` tool. These report that commands wrapped in `env`/shell dispatchers (`env /bin/sh -c`), or chained via newlines, or hidden behind `sort --compress-program`, can bypass the intended classification and execute without proper confirmation. **No fix PRs exist yet.**
- **[#4797](https://github.com/nearai/ironclaw/issues/4797) [OPEN]:** A `write_file` sandbox escape via dangling final symlinks, allowing writes outside the intended `base_dir`. This is older but was updated today.
- **[#4874](https://github.com/nearai/ironclaw/issues/4874) [OPEN]:** A "Illegal invocation" error in WebChat v2 when accessed over plain HTTP from a non-localhost host. Blocks users on LAN deployments.

**Medium Severity:**
- **[#4852](https://github.com/nearai/ironclaw/issues/4852) [OPEN]:** Shell command text is not visible in the Reborn approval dialog or activity history, only the capability name. Reduces user awareness before approval.
- **[#4853](https://github.com/nearai/ironclaw/issues/4853) [OPEN]:** Tool activity disappears after completion on Railway/multi-tenant environments, degrading debugging.
- **[#4857](https://github.com/nearai/ironclaw/issues/4857) [OPEN]:** Clean state incorrectly shows NEAR AI provider as active/configured, misleading new users.

**Low Severity / Polish:**
- **[#4856](https://github.com/nearai/ironclaw/issues/4856), [#4855](https://github.com/nearai/ironclaw/issues/4855), [#4868](https://github.com/nearai/ironclaw/issues/4868):** Accessibility (keyboard/screen-reader), i18n (zh-CN fallback), and mobile viewport clipping issues in the Reborn WebUI.

---

### 6. Feature Requests & Roadmap Signals

- **Universal Attachments (#4644):** Despite being an enhancement request, it has active PRs ([#4738](https://github.com/nearai/ironclaw/pull/4738), [#4871](https://github.com/nearai/ironclaw/pull/4871)) in flight. It is highly likely to land in the next major release, bringing image support and a unified UX to Reborn.
- **Runtime Context Communication Slice (#4828, #4877):** The infrastructure for making models aware of channel state is being wired. [#4877](https://github.com/nearai/ironclaw/issues/4877) explicitly requests extending this from local-dev to the production runtime. Expect this to be a key feature in the next release for enabling context-aware agent behavior.
- **File Size Budget Enforcement (#4850):** A meta-issue tracking the decomposition of files exceeding the 1,500-line budget. This signals an ongoing effort to improve code maintainability.
- **"No run-borking" (#4841):** This active PR aims to replace terminal errors with recovery or user-facing explanations. This is a strong roadmap signal for improving the Reborn production reliability.

---

### 7. User Feedback Summary

**Pain Points:**
- **Security concerns:** The flurry of reported shell approval bypasses (e.g., #4865, #4864) indicates a deep user concern about the trust model of agent code execution. The "Dogfooding" effort (#4692) is effectively surfacing these.
- **Confusing UX:** New users are confused by misleading provider status (#4857), hidden shell commands in dialogs (#4852), and excessive approval prompts for simple read-only GitHub extension requests (#4854).
- **Multi-tenant instability:** Users report that tool activity disappears on multi-tenant environments (#4853), which is a significant debugging and reliability issue for hosted deployments.

**Satisfaction:**
- **Responsive UI fixes:** The quick closure of issues like #4707 (font size) and #4708 (syntax highlighting) shows the team is responsive to immediate UX feedback from the dogfooding program.
- **Approval flow improvement:** The merging of #4835 (persistent "always allow" across threads) directly addresses user frustration with repetitive approvals, signaling positive UX evolution.

---

### 8. Backlog Watch

- **[#4778](https://github.com/nearai/ironclaw/pull/4778) [OPEN, 4 days] – Represent Slack as a product-adapter extension:** This is a large, core-contributor PR that is fundamental to removing Slack from the hardcoded built-in channel list. It has been open since June 11 with no review activity.
- **[#3708](https://github.com/nearai/ironclaw/pull/3708) [OPEN, 30 days] – Chore: Release:** This release PR has been open since May 16. The lack of activity suggests a deliberate hold on cutting a new release while major Reborn features are still in flux. It contains breaking API changes in `ironclaw_common` and `ironclaw_skills`.
- **[#4002](https://github.com/nearai/ironclaw/pull/4002) [OPEN, 22 days] – Actions dependencies bump:** A large batch of GitHub Actions dependency updates (including `actions/checkout@v6`) has been open since May 24. While low risk, it opens the CI pipeline to potential supply-chain vulnerabilities.
- **[#4588](https://github.com/nearai/ironclaw/pull/4588) [OPEN, 6 days] – Observability seams:** This PR introduces hooks for trajectory observation and LLM provider injection. It is critical for enabling external benchmarks (nearai-bench) but has seen no maintainer interaction since its creation.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the project digest for LobsterAI, based on the GitHub data snapshot from 2026-06-14.

---

## LobsterAI Project Digest – 2026-06-14

### 1. Today's Overview
The project shows low activity today, with 2 open issues and 4 pull requests updated in the last 24 hours, but no new releases or merged PRs to indicate forward momentum. Both open issues have been stale since April and have received no new comments or reactions, suggesting they are low priority or blocked. The three open PRs represent substantial feature work (in-session search, system sleep prevention, and a runtime timer) that remain unmerged after two months, indicating a possible bottleneck in code review or testing. The only closed PR is a critical fix for ghost sessions from deleted scheduled tasks, which was merged on June 14 after a similar long wait.

### 2. Releases
No new releases were published today.

### 3. Project Progress
- **PR #1465 (Closed/Fixed):** `fix(scheduled-tasks): 已删除的定时任务重启后作为幽灵会话重新出现` – Author: linlihua. This critical bug fix addresses a data cleanup gap where deleted scheduled tasks would reappear as ghost sessions after an application restart. The root cause was that deleting the task only removed the gateway-side cron record but left the associated local SQLite session record (`cowork_sessions`). The fix ensures the local session is also cleaned up upon task deletion.

### 4. Community Hot Topics
- **PR #1429 (Stale):** `feat(cowork): add in-session message search with mark.js highlighting` – Author: noransu. This feature adds a search bar to the Cowork session view, allowing real-time message search with `mark.js` highlighting, keyboard navigation (`Cmd/Ctrl+F`, `Enter`, `Esc`), and automatic cleanup on session switch. Despite zero comments or reactions, it addresses a common user need for finding past responses in long-running sessions.
- **Issue #1434 (Stale):** [龙虾的语言为中文时，在我的agent里，选择一个agent，在技能tab页，搜索没数据时，展示了英文提示，按钮也是英文的] – Author: xuzx-code. Reports a language inconsistency bug: when the UI is set to Chinese, the "no search results" state in an agent's skills tab still shows English text and buttons. This is a polish/l10n issue likely caused by a missing translated fallback in the UI component.
- **Issue #1435 (Stale):** [新建自定义agent时，名称过长直接超出弹框，展示不友好] – Author: xuzx-code. Reports that excessively long agent names in the creation dialog overflow the modal, causing a poor visual experience. This is a layout/truncation issue that should be a simple CSS fix.

### 5. Bugs & Stability
- **Critical (Fixed):** **PR #1465** – Ghost sessions from deleted scheduled tasks. Fixed on 2026-06-14. No similar bugs reported today.
- **Medium (Open, Stale):** **Issue #1434** – Chinese UI shows English text for empty search results in agent skill tab. No fix PR exists yet.
- **Low (Open, Stale):** **Issue #1435** – Agent name overflows creation modal. No fix PR exists yet.

### 6. Feature Requests & Roadmap Signals
Three unmerged feature PRs (all created on 2026-04-03) are strong candidates for the next minor release:
- **PR #1429:** In-session message search with `mark.js` highlighting – addresses a core productivity gap in the Cowork experience.
- **PR #1430:** Auto-prevent system sleep during session runtime – a reliability feature for long-running agents, leveraging Electron's `powerSaveBlocker` API.
- **PR #1431:** Real-time session runtime timer in `StreamingActivityBar` – provides visual progress awareness for ongoing tasks.

These features together suggest the team is maturing the Cowork session UX, moving from basic functionality toward a more polished, reliable, and user-aware experience.

### 7. User Feedback Summary
- **Pain Points:**
    - **Ghost sessions:** Deleted scheduled tasks reappear after restart (now fixed).
    - **Language inconsistency:** Chinese UI users encounter English strings in agent skill search.
    - **Poor layout:** Agent creation dialog does not handle long names gracefully.
- **Use Cases:**
    - Users are actively monitoring long-running agent tasks and want visual progress indicators (timer) and system sleep prevention.
    - Users need to search through past messages in active Cowork sessions.
- **Satisfaction:**
    - No positive feedback was evident in the data. The main signals are bug reports and requested features, indicating a user base that expects high polish but is not yet fully satisfied.

### 8. Backlog Watch
The following three open PRs have been stale since 2026-04-03 (over two months without updates or merge activity) and require maintainer attention:
- **PR #1429:** `feat(cowork): add in-session message search with mark.js highlighting`
- **PR #1430:** `feat(cowork): 会话运行期间自动阻止系统休眠`
- **PR #1431:** `feat(cowork): StreamingActivityBar 右侧显示会话运行计时器`

All three have zero comments and zero reactions, suggesting they may be waiting for a pull request reviewer assignment or internal testing. If they are no longer a priority, they should be explicitly closed or commented on to avoid contributor confusion.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-15

## 1. Today's Overview
Moltis saw low activity in the last 24 hours, with one open enhancement request, two open pull requests, and no new releases. The project is in a maintenance and refinement phase, with community focus shifting toward Rust-native components (turbovec memory backend) and Docker stability fixes. No regressions or critical bugs were reported. The single open issue and both PRs were created on 2026-06-14, suggesting a steady but quiet development cadence.

## 2. Releases
No new releases were published in the last 24 hours. The latest release remains unchanged. No breaking changes or migration notes to report.

## 3. Project Progress
No PRs were merged or closed in the last 24 hours. Two open PRs are in progress:
- **#1122** (fix: drop VOLUME declarations that shadow the home bind mount) — addresses a Dockerfile design flaw that could cause data loss or container misbehavior when the home directory is bind-mounted.
- **#1121** (chore(deps-dev): bump esbuild from 0.25.12 to 0.28.1) — a routine dependency update for the JavaScript/UI crate.

## 4. Community Hot Topics
No issues or PRs generated significant discussion (0 comments and 0 reactions across all items). The single most notable item is:
- **#1123** [OPEN] [Feature]: Add pure-Rust turbovec as an alternative memory backend for extreme edge compression — created by joeblew999, this feature request proposes a lightweight, Rust-native vector storage backend optimized for extreme compression at the edge. Despite no comments yet, the proposal signals interest in lowering Moltis's memory footprint for constrained environments.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours. The Dockerfile fix in PR #1122 is a stability improvement, preventing potential silent volume-shadowing issues, but is not classified as a bug fix for a current crash-level issue.

## 6. Feature Requests & Roadmap Signals
The only feature request is **#1123** for a pure-Rust turbovec memory backend. This suggests a roadmap interest in:
- Reducing dependency on non-Rust vector libraries
- Improving edge-device compatibility and compression efficiency
- Lowering the barrier for deploying Moltis on resource-constrained hardware

If maintainers prioritize this, it could appear in the next minor or patch release, possibly alongside further Docker and CI infrastructure improvements.

## 7. User Feedback Summary
No direct user feedback was captured in today's data (no comments, no reactions). The feature request in #1123 implicitly reflects a user wanting better compression and Rust-native performance on edge devices. The absence of complaints or negative feedback suggests general satisfaction, but low activity may also indicate a quieter contributor base.

## 8. Backlog Watch
No issues or PRs have remained unanswered for an extended period. All items in the 24-hour window are recent and currently open with timely maintainer attention (or no need for response yet). No backlog items require escalation.

---

**Project Health Summary**: Moltis is in a stable, low-activity period with focused maintenance (Docker fixes, dependency bumps) and one promising feature request targeting edge performance. Community engagement is minimal, but the project remains healthy with no critical blockers or regressions.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the project digest for CoPaw (github.com/agentscope-ai/CoPaw) based on data from 2026-06-15.

---

## CoPaw Project Digest — 2026-06-15

### 1. Today's Overview
Project activity remains at a healthy level, with **8 open Issues** and **7 open PRs** updated in the last 24 hours. The team closed one bug report (#5172), but no new releases were published. A significant influx of first-time contributors has driven a wave of quality-of-life improvements for the Console (i18n, session filtering, UI fixes) and backend adjustments (cron timeouts, skill triggers). The most notable technical development is a large PR introducing **Windows desktop GUI automation** via UIA/Tauri, indicating a push toward agent-driven computer use. Overall, the project is in a **high-engagement, feature-development phase** with a strong community contribution pipeline.

### 2. Releases
**No new releases** in the last 24 hours. The current version remains **v1.1.11.post2**.

### 3. Project Progress
No PRs were merged or closed today. All 7 open PRs remain in active review. Key areas advanced:
- **Desktop Automation:** PR #5187 (jinglinpeng) adds a `computer_use` builtin tool for Windows GUI automation (UIA description, click/type/scroll/drag, app launch) with a Tauri-side control mode.
- **Console Localization:** Two overlapping PRs (#5186, #5175) add Vietnamese (vi) locale support, with #5186 being the more complete superset.
- **Cron/Heartbeat Reliability:** PR #5180 increases the default timeout and adds autonomous context prompts for cron/heartbeat agents.
- **Collaboration Triggers:** PR #5179 expands trigger keywords for the multi-agent collaboration skill to prevent ignored instructions.
- **UX Fixes:** PR #5178 adds a "Filter by Title" input to the session list; PR #5176 fixes horizontal overflow on approval command `<pre>` blocks.

### 4. Community Hot Topics
- **#5156: Integrate `kimi-for-coding` & `uv` Whitelist** (5 comments, 0 reactions) — CoPaw currently only supports Kimi via the official API. Paying Kimi Coding subscribers cannot use their existing subscription within CoPaw. This is a **high-value feature request** for paid users locked out of the ecosystem.
- **#5185: Real-time Timestamp in Agent Context** (1 comment) — Users want `HH:MM:SS` injected into every agent message, not just the date. Current workarounds require a separate tool call, adding latency. Modeled after AstrBot’s approach.
- **#5184: Local Model Providers Not Showing** (2 comments) — A regression in v1.1.11.post2 where locally created model providers disappear from the settings UI.
- **#5177: DingTalk Channel Not Registering in `chats.json`** (1 comment) — Agent responds via DingTalk but the session remains invisible in the console frontend, breaking cross-platform session continuity.

### 5. Bugs & Stability
| Severity | Issue | Summary | Fix PR Exists? |
|----------|-------|---------|----------------|
| **High** | #5184 | Local model providers not displaying after v1.1.11.post2 upgrade | No |
| **High** | #5181 | Plugin dependency `pip install` causes infinite CMD windows on network failure (Wayland desktop) | No |
| **Medium** | #5177 | DingTalk channel messages lost from `chats.json` → invisible in console | No |
| **Low** | #5183 | Pet feature broken on Wayland (Niri compositor) | No |
| **Closed (Duplicate?)** | #5172 | User reported “wait forever after idle → must stop and retry”; likely a timeout/cancellation issue said to be fixed in prior release | Closed by reporter |

Two high-severity regressions (#5184, #5181) were introduced in v1.1.11.post2 and have no associated fix PRs yet—these need immediate maintainer attention.

### 6. Feature Requests & Roadmap Signals
- **Kimi Coding / UV Whitelist (#5156):** If the maintainers embrace a BYO-subscription model for Kimi, this could unlock a large Chinese user base.
- **Real-Time Timestamps (#5185):** Low implementation cost; likely to appear in a minor patch.
- **Unified Model Configuration (#5182):** User wants a single config for text/vector/audio/video models. Suggests a **platform-level model abstraction**—likely a mid-term roadmap item.
- **Desktop GUI Automation (PR #5187):** This is a major feature. If merged, it signals a **strategic pivot toward agentic desktop control**, competing with frameworks like Anthropic’s computer use.

**Prediction for v1.1.12:** Expect the cron timeout fix (#5180), session title filter (#5178), and Vietnamese i18n (#5186) to land. The computer-use PR is larger and may wait for a subsequent release.

### 7. User Feedback Summary
- **Pain Point: Idle Reconnection Failure (#5172):** Agent hangs after idle, only recoverable by hitting “Stop.” Critical for headless/integration use (QQ/WeChat).
- **Pain Point: Plugin Installation UX (#5181):** Popup CMD windows on every retry—unacceptable for production desktop usage. Users want hidden/silent pip installs.
- **Satisfaction:** First-time contributors are actively improving Console UX (filtering, overflow, i18n), indicating a **healthy, engaged community** that finds the project worth contributing to.
- **Frustration:** Two significant regressions in the latest patch (#5184, #5181) are eroding trust in the point-release process.

### 8. Backlog Watch
No Issues or PRs appear to be critically stale. All open items were created on or after 2026-06-12. The most important items needing **maintainer review or merge**:
- **#5184 (Bug: Local models broken)** — 0 comments from maintainers; no fix PR.
- **#5181 (Plugin CMD popups)** — Reported 2 days ago; no fix PR.
- **#5177 (DingTalk not in chats.json)** — Needs a decision on whether this is a data-layer or frontend issue.

*(All items linkable via `github.com/agentscope-ai/CoPaw/issues/{ID}`)*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-15

## Today's Overview

ZeroClaw remains in a period of exceptionally high development velocity with 50 open pull requests and 40 issues updated in the last 24 hours — all PRs remain open, indicating a massive review queue. The project closed 27 issues in this window, signaling strong maintainer activity on the triage and closure side, but the 50 open PRs with zero merges suggests a bottleneck at the review/merge stage. No new releases were published today; the latest tagged version remains unreported. The community contributor pool is unusually wide, with diverse authors filing PRs across channels, config, skills, runtime, and WASM plugin infrastructure — a sign of healthy external participation. The high volume of `risk: high` labeled PRs (17 of the top 20 listed) indicates the team is prioritizing bold architectural changes alongside critical bugfixes.

## Releases

None. No new releases were published in this 24-hour window.

## Project Progress

No pull requests were merged or closed in the last 24 hours — all 50 listed PRs remain open. However, the 27 closed issues indicate significant backend triage progress:

- **Closed Issues (27 total, representative selection):**
  - [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) — Feature request for a "full" Docker image with all feature flags enabled was closed after 3 months, suggesting a resolution or decision was reached.
  - [#1458](https://github.com/zeroclaw-labs/zeroclaw/issues/1458) — Local CA certificate support for custom inference providers was closed (7 comments).
  - [#5528](https://github.com/zeroclaw-labs/zeroclaw/issues/5528) — Email channel config logic bug (S0 severity, potential data loss) was closed.
  - [#6760](https://github.com/zeroclaw-labs/zeroclaw/issues/6760) — Docker documentation update for v0.7.5-debian was closed.
  - [#6474](https://github.com/zeroclaw-labs/zeroclaw/issues/6474) — LLM double-invocation bug (one user request triggering two LLM calls) was closed.
  - Multiple SMS channel integration features (#6451-#6454, #6457-#6458, #6475-#6477, #6494) were closed — indicates a wave of community-contributed channel/tool implementations have been accepted.
  - [#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415) — Major RFC to unify three agent turn engines was closed as executed via a consolidation PR (#7540).

## Community Hot Topics

**Most Active Issue:**
- [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) — **[CLOSED]** "Feature: Provide a 'full' docker image" (13 comments, 3 👍). This highly-commented issue about lowering the barrier for non-technical users via an all-features Docker image was closed today, suggesting maintainers either implemented it or provided an alternative path.

**Most Active Open Issues:**
- [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — *RFC: Work Lanes, Board Automation, and Label Cleanup* (11 comments). A governance RFC proposing lightweight PR lanes and board-owned issue labeling. The high engagement reflects community investment in project management processes.
- [#7470](https://github.com/zeroclaw-labs/zeroclaw/issues/7470) — *Bug: Delegate agentic mode rejects empty risk_profile.allowed_tools* (7 comments, priority P1). A high-severity workflow blocker for multi-agent setups. Active discussion suggests it's a critical pain point for advanced users.
- [#6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856) — *Bug: show_tool_calls is missing from [channel]* (5 comments). A regression in schema v3 affecting visibility of tool call details.

**Underlying Community Needs:**
The most commented items reveal three dominant themes: (1) **Infrastructure for complex deployments** (Docker images, multi-agent setups, RPC bridges), (2) **Usability regressions in schema v3** (missing config options, tool call visibility), and (3) **Process governance** — the community actively wants better workflows for PR management and label hygiene.

## Bugs & Stability

**Critical/S0 Severity (Data Loss/Security Risk):**
- [#5528](https://github.com/zeroclaw-labs/zeroclaw/issues/5528) — **Closed.** Email channel config logic bug (S0). Improper IMAP/SMTP configuration logic could cause data loss or security exposure. Fixed/closed today.

**High Severity (P1, S1 - Workflow Blocked):**
- [#7470](https://github.com/zeroclaw-labs/zeroclaw/issues/7470) — **Open.** Delegate agentic mode blocks when `risk_profile.allowed_tools` is empty, and same-profile gating blocks stricter delegated targets. **No fix PR linked yet.** This is currently the most critical open bug for multi-agent users.
- [#5527](https://github.com/zeroclaw-labs/zeroclaw/issues/5527) — **Closed.** Gemini OAuth context parsing failure (S1). Closed after 2 months.
- [#6847](https://github.com/zeroclaw-labs/zeroclaw/issues/6847) — **Closed.** WhatsApp channel not showing QR code (S1). Closed/fixed.
- [#5842](https://github.com/zeroclaw-labs/zeroclaw/issues/5842) — **Open.** Security tracker for `extra_args` validation on Codex CLI flags (no fix PR). Needs maintainer evaluation — could allow arbitrary CLI flag injection from TOML config.

**Medium Severity (P2, S2 - Degraded Behavior):**
- [#6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856) — **Open.** `show_tool_calls` missing from channel schema v3. 5 comments, active discussion.
- [#5662](https://github.com/zeroclaw-labs/zeroclaw/issues/5662) — **Open.** QQ channel voice messages processed 20+ times, creating duplicate database entries. 2 comments, P1 priority.
- [#7470](https://github.com/zeroclaw-labs/zeroclaw/issues/7470) — Fix PRs in flight: multiple PRs address parts of the delegate agentic mode bug (#7284, #7429, #7399 are high-risk related fixes).

**Bugs with Fix PRs in Progress:**
- PR [#7495](https://github.com/zeroclaw-labs/zeroclaw/pull/7495) — Fixes #5558: Lark/Feishu `ack_reactions` override not working.
- PR [#7485](https://github.com/zeroclaw-labs/zeroclaw/pull/7485) — Fixes #7439: Doctor incorrectly flags custom model providers as invalid.
- PR [#7438](https://github.com/zeroclaw-labs/zeroclaw/pull/7438) — Fixes #6646: Telegram delivery prompt discourages tool use.
- PR [#7424](https://github.com/zeroclaw-labs/zeroclaw/pull/7424) — Fixes #7412: `allowed_private_hosts = ["*"]` doesn't cover DNS-resolved private hosts.
- PR [#7423](https://github.com/zeroclaw-labs/zeroclaw/pull/7423) — Fixes #6584: Reasoning field name normalization breaks multi-turn replay for OpenAI-compatible providers.
- PR [#7399](https://github.com/zeroclaw-labs/zeroclaw/pull/7399) — Fixes #6678: Skill tool names not sanitized for provider regex.
- PR [#7440](https://github.com/zeroclaw-labs/zeroclaw/pull/7440) — Fix: Skip futile history trim when system prompt exceeds budget (~107k tokens with default tools).

## Feature Requests & Roadmap Signals

**Recently Merged/Closed Features (accepted):**
A wave of community-contributed integrations was closed today, indicating they were merged:
- **SMS Channels** (all by @theonlyhennygod): Vonage (#6494), Sinch (#6452), Plivo (#6453), Telnyx (#6451) — four Twilio-sibling SMS gateways.
- **Smart Home Tools** (by @theonlyhennygod): Sonos (#6477), Shazam (#6476), Spotify (#6475), 8Sleep (#6450), Philips Hue (#6449).
- **Model Providers** (by @theonlyhennygod): Arcee AI (#6456), Inception Labs/Mercury (#6458), Lambda AI (#6457), Featherless AI (#6455), Upstage Solar (#6454).

**Open Feature Tracker:**
- [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — **RFC for Work Lanes and Board Automation.** This governance RFC could reshape how the team manages PRs. Likely to be adopted as it has 11 comments and maintainer engagement.
- [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) — **Audit: 153 commits lost in bulk revert.** An ongoing effort to recover features/bugfixes that were reverted in a bulk rollback. This is a significant roadmap item affecting feature completeness.
- [#6823](https://github.com/zeroclaw-labs/zeroclaw/issues/6823) — **Zerocode ACP Bridge.** A TUI-to-daemon RPC connection layer. This is paired with a server-side counterpart and signals architectural investment in remote/cli control.

**Predictions for Next Release:**
The next release is likely to include:
1. The merged SMS channel suite (Vonage, Sinch, Plivo, Telnyx).
2. Multiple smart home/entertainment tools (Sonos, Spotify, Hue, 8Sleep, Shazam).
3. New model providers (Arcee, Inception, Lambda, Featherless, Upstage).
4. The unified agent turn engine consolidation (from RFC #7415).
5. WASM plugin infrastructure (PR #7429, #7416) — likely in beta.
6. Discord slash commands (#7489, #7490).
7. Cached input token pricing support (#7492).
8. The Operator Console gateway web UI redesign (#7665).

## User Feedback Summary

**Pain Points:**
1. **Multi-agent delegation complexity** — Issue #7470 highlights that practical multi-agent reviewer/research setups are broken due to `risk_profile` gating logic. This is the most urgent user blocker currently open.
2. **Schema v3 regressions** — The missing `show_tool_calls` config option (#6856) and the Telegram tool-discouraging prompt (#7438/PR) show users are hitting regressions in the new schema.
3. **Onboarding friction** — WhatsApp QR code not showing (#6847) and the email channel config complexity (#5528, closed) indicate setup is still challenging for new users.
4. **Double LLM invocations** — Issue #6474 (closed) confirms users were being billed twice per request with local LLM servers.
5. **Tool name conflicts** — PR #7399 (#6678) fixes a bug where skill tool names with special characters caused provider API rejections.

**Satisfaction Signals:**
- The high number of feature integration PRs (SMS channels, smart home tools, model providers) from a single prolific contributor (@theonlyhennygod) suggests the project's integration architecture is well-documented and welcoming.
- The Discord slash command PRs (#7489, #7490) have clear user value — operators want skill-driven bot commands.
- The Operator Console redesign (#7665) addresses UI complaints about dead-end navigation.

## Backlog Watch

**Issues Needing Maintainer Attention:**
- [#5842](https://github.com/zeroclaw-labs/zeroclaw/issues/5842) — **Security tracker for `extra_args` validation.** Open since April 17. Allows arbitrary CLI flags via TOML config. No fix PR. This is a security concern that should be prioritized — currently P2 but affects Codex CLI.
- [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) — **Audit: 153 lost commits.** Open since April 24, P2, status:in-progress. This recovery effort directly affects feature parity and bug completeness. Needs a dedicated maintainer champion.
- [#5662](https://github.com/zeroclaw-labs/zeroclaw/issues/5662) — **QQ channel voice duplicate entries.** Open since April 12, P1 priority, only 2 comments. A data integrity bug that could degrade user trust — unusual that it hasn't attracted more maintainer attention.

**Open PRs Needing Review:**
- [#7665](https://github.com/zeroclaw-labs/zeroclaw/pull/7665) — **Operator Console redesign** (filed today). Large surface area redesign. Needs architectural review from core maintainers.
- [#7492](https://github.com/zeroclaw-labs/zeroclaw/pull/7492) — **Cached input token pricing** (XL size, high risk). Impacts cost tracking across all providers. Needs careful backend review.
- [#7490](https://github.com/zeroclaw-labs/zeroclaw/pull/7490) — **Dynamic Discord slash commands from installed skills** (XL size, high risk). Depends on #7489. Complex UX and integration.
- [#7284](https://github.com/zeroclaw-labs/zeroclaw/pull/7284) — **Per-agent workspace dir + Android shell support** (high risk, security-critical). Has been waiting since June 6. Could unblock downstream issues.

**Stale/No-Stale Items:**
- [#6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856) and [#6823](https://github.com/zeroclaw-labs/zeroclaw/issues/6823) both carry `status:no-stale` labels — maintainers have marked these as exempt from auto-stale closure, indicating ongoing active investment.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*