# OpenClaw Ecosystem Digest 2026-06-11

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-11 00:36 UTC

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

Here is the project digest for OpenClaw, generated from the specified GitHub data snapshot.

---

## OpenClaw Project Digest: 2026-06-11

### Today's Overview

The OpenClaw project shows a very high level of community activity in the last 24 hours, with **500 updated issues** and **500 updated pull requests**, indicating a large, engaged contributor and user base. Of these, the number of **closed/merged PRs (99)** is relatively low compared to the **open PR count (401)**, suggesting a significant backlog in the review and merge pipeline. The project released a new beta version, `v2026.6.6-beta.1`, with a major focus on hardening security boundaries. Overall, the project is active but appears to be grappling with a growing triage and review bottleneck.

### Releases

- **`v2026.6.6-beta.1`**: This release is focused entirely on security hardening. The release notes highlight that "security boundaries are substantially tighter" across a wide range of subsystems, including transcripts, sandbox binds, host environment inheritance, MCP stdio, Codex HTTP access, native search policy, elevated sender checks, deleted-agent ACP bypasses, loopback tools, Discord moderation, and Teams group access. This suggests a proactive effort to patch numerous potential attack vectors and privilege escalation paths. No breaking changes or specific migration notes were provided in the summary.

### Project Progress (Merged/Closed PRs)

Today saw 99 merged or closed pull requests. Notable merged fixes and features include:

- **(Security)**: A critical fix for the `exec` tool was merged, ensuring it honors the `OPENCLAW_STATE_DIR` for command approvals (`#74002`), closing a security boundary gap. A second, more comprehensive fix (`#92056`) was also merged, moving exec approval files under the state directory.
- **(Control UI)**: A fix (`#91305`) resolved a 404 error on the Control UI's bootstrap config endpoint, fixing a major usability blocker for users accessing the web UI.
- **(Model Catalog)**: A fix (`#91720`) removed a problematic transport override for the `gpt-5.3-codex` model catalog entry, fixing authentication issues for users with standard API keys. Another fix (`#91292`) resolved an issue where Google Gemini models failed with `model_not_found` when a provider's base URL was configured as blank.
- **(OpenCode Go)**: Tiered pricing for the `qwen3.7-plus` model was added to the bundled `opencode-go` catalog (`#91351`), improving cost accuracy.
- **(Cron)**: A new feature (`#91471`) adds human-readable ISO time fields to the `cron runs` JSON output, improving log readability.
- **(Gateway)**: A fix (`#92027`) was merged to recover config hot-reloading after watcher errors, improving gateway reliability.
- **(Plugin Config)**: A fix (`#90167`) now resolves `${ENV_VAR}` placeholders in plugin configurations during runtime, a key feature for dynamic setup.

### Community Hot Topics

The most active discussions highlight two major themes: **session state corruption** and **security/permission gaps**.

1.  **Issue #25592: "Text between tool calls leaks to messaging channels"**
    - **Comments:** 31 | **Reactions:** 1
    - **Link:** openclaw/openclaw Issue #25592
    - **Analysis:** This is the most active issue, detailing how internal agent processing (error handling, acknowledgments) is being publicly broadcast to chat channels (Slack, iMessage, etc.). This is a critical UX and security problem (classified as `impact:security` and `impact:message-loss`), violating user expectations of privacy for internal agent workings.

2.  **Issue #88838: "Track core session/transcript SQLite migration via accessor seam"**
    - **Comments:** 19 | **Reactions:** 1
    - **Link:** openclaw/openclaw Issue #88838
    - **Analysis:** This high-priority issue (`P0`) concerns a major architectural refactor to migrate the session/transcript runtime state to SQLite. The community is deeply engaged in planning this change to avoid a "big bang" rewrite, indicating a shared understanding of the risk and a desire for incremental, reviewable progress.

3.  **Issue #32473: "Control UI requires device identity (use HTTPS or localhost secure context)"**
    - **Comments:** 17 | **Reactions:** 4
    - **Link:** openclaw/openclaw Issue #32473
    - **Analysis:** This regression is preventing users on VPS/Docker setups from accessing the Control UI. The high number of upvotes (4) and comments suggests this is a widespread and frustrating pain point for self-hosters.

Other highly discussed topics include a race condition in the signal daemon (`#22676`), session context confusion where agents reply to the wrong message (`#32296`), and a request for a private network access feature flag for web fetch (`#39604`).

### Bugs & Stability

The project is currently facing a significant number of high-severity bugs. Key issues reported or heavily updated in the last 24 hours include:

- **Critical (P0/P1):**
    - **Session State & Data Loss:**
        - **Issue #85030** (`P1`): MCP tools are not being injected into subagent sessions, breaking one of the core extensibility features of the platform.
        - **Issue #86508** (`P1`): Discord runs fail with `EmbeddedAttemptSessionTakeoverError` due to session file changes. This is a regression and a stability blocker for Discord users.
        - **Issue #83184** (`P1`): Heartbeat-driven agent replies can become permanently stuck (`pendingFinalDelivery`), blocking all subsequent heartbeats.
        - **Issue #40001** (`P1`): The `write` tool lacks an append mode, causing isolated cron sessions to silently overwrite and destroy shared workspace files.
    - **Security:**
        - **Issue #29387** (`P1`): Bootstrap files in per-agent directories are silently ignored, a regression that breaks agent-specific configuration.
        - **Issue #31583** (`P1`): The `exec` tool does not inherit environment variables from skill configuration, breaking the secure injection of secrets.
- **Medium (P2):**
    - **Issue #38439** (`P2`): The avatar endpoint returns 404, breaking the Control UI's ability to display agent images (a regression).
    - **Issue #37966** (`P2`): `cacheRetention` settings are ignored for LiteLLM-proxied Anthropic models, increasing API costs for users of this configuration.
    - **Issue #77359** (`P2`): Slash commands are not registered for non-default Discord accounts in a multi-bot setup, a behavior bug that limits multi-account functionality.

**Fix PRs exist** for several of these issues, including `#85030`, `#86508`, `#83184`, and `#38439`, but they remain open.

### Feature Requests & Roadmap Signals

Several recurring themes in feature requests point toward the project's likely roadmap:

- **Tiered & Granular Resource Control:** There is a strong and consistent demand for finer-grained control over agent behavior, especially regarding cost and context. This is seen in requests for per-skill model routing (`#43260`), per-agent cost budgets (`#42475`), re-enabling writable isolated sandboxes (`#37634`), and a direct exec mode for cron jobs to bypass LLM calls (`#18160`). The issue for **tiered bootstrap file loading** (`#22438`) is a direct response to this pain point and seems highly likely to be prioritized.
- **Hardened Security & Audit Trails:** The community is pushing for features that go beyond the recent "softer" security fixes. This includes **masked secrets** (`#10659`), **path-scoped RWX permissions** (`#39979`), and **pre-response enforcement hooks** (`#13583`) to create hard gates for critical workflows. These indicate a user base running high-stakes applications.
- **Platform & Developer Experience:** Requests for **MathJax/LaTeX support** (`#42840`), **backup/restore utilities** (`#13616`, `#40786`), and **post-subagent completion hooks** (`#22358`) show a maturing user base that wants a richer, more robust, and integrated developer experience.

### User Feedback Summary

- **Satisfaction Drivers:** The community is investing effort in complex architectural discussions (SQLite migration in `#88838`) and building advanced features like multi-agent orchestration. This indicates satisfaction with the project's core potential and direction.
- **Dissatisfaction/Pain Points:**
    - **"It doesn't work" regressions:** A large number of `P1` bugs are labeled as **regressions**, indicating recent updates have introduced instability. The issues with the Control UI (`#32473`, `#38439`), session takeover errors (`#86508`), and ignored configuration (`#29387`) are prime examples, creating frustration among users who rely on specific workflows.
    - **Operational Instability:** Users are hitting real-world scaling and reliability issues. This is evident in reports of orphaned processes (`#22676`), multi-agent orchestration instability (`#43367`), and stuck heartbeat loops (`#83184`).
    - **Configuration Complexity:** Issues like `#31583` (env not inherited) and `#43260` (per-skill models) suggest that while the configuration system is powerful, it is sometimes unintuitive or buggy, leading to "silent failures" where expected behavior doesn't occur.

### Backlog Watch

Several important issues and PRs have been open for an extended period and require maintainer attention.

- **Long-standing Security/Privacy Issues:**
    - **Issue #25592** (Feb 24): "Text between tool calls leaks to messaging channels." Despite being the most commented-on issue, the fix PR may be pending product decision or security review. This is a high-risk, high-embarrassment bug.
    - **Issue #10659** (Feb 6): "Feature Request: Masked Secrets." This major security enhancement has been open for over four months with no fix PR, despite high community interest.
- **Critical Regressions Lacking Fix PRs:**
    - **Issue #29387** (Feb 28): "Bootstrap files in agentDir are silently ignored." This is a `P1` regression with no linked fix PR, silently breaking agent-specific setup for many users.
    - **Issue #86508** (May 25): "Discord runs fail with ... SessionTakeoverError." This `P1` regression is a beta release blocker for Discord users with no fix PR in sight.
- **High-Impact Feature PRs Waiting:**
    - **PR #91311** (Jun 8): "Allow Skill Workshop apply through trusted skill symlinks." This PR introduces a significant feature (Skill Workshop) but is stalled, waiting on the author for changes.
    - **PR #90747** (Jun 5): "Cache plugin setup registry to kill the /models CPU storm." This PR addresses a severe performance issue where selecting a model pins a CPU core, but it is still needs proof and carries a high compatibility risk, requiring careful review.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report for the AI Agent and Personal AI Assistant open-source ecosystem, based on the community digest summaries for June 11, 2026.

---

### Cross-Project Ecosystem Report: AI Agent & Personal AI Assistant
**Date:** June 11, 2026

---

### 1. Ecosystem Overview

The open-source AI agent ecosystem is characterized by intense, rapid iteration across a large number of projects, with a clear maturation trend away from simple chat interfaces toward complex, autonomous, and multi-agent workflows. While foundational projects like **OpenClaw** are grappling with the scaling challenges of a massive, established community (high issue volume, review bottlenecks), younger projects like **NanoBot** and **CoPaw** are shipping fixes faster than bugs are reported, indicating a focus on stability and production reliability. A dominant technical theme across the board is the push for robust sub-agent orchestration, resilient provider fallback, and hardened security boundaries, signaling a shift from experimental prototypes to production-grade infrastructure for developers and enterprises.

---

### 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release (24h) | Health Score | Key Signals |
|---|---|---|---|---|---|
| **OpenClaw** | 500 updated | 500 updated (99 merged) | Beta (v2026.6.6-beta.1) | **Fragile Growth** | High engagement, but severe review bottleneck & regressions. |
| **NanoBot** | 10 updated (6 closed) | 33 updated (19 merged) | None | **Very Healthy** | High velocity, bugs fixed faster than reported. |
| **Hermes Agent** | 50 updated | 50 updated (5 merged) | None | **Rapid Dev** | High activity, focus on credential mgmt & platform fixes. |
| **PicoClaw** | 4 new bugs | 6 merged | Nightly build | **Stable/Core** | Active maintenance, quick security response. |
| **NanoClaw** | 1 open issue | 10 updated (6 merged) | None | **Healthy** | Maturating skills architecture, good community contributions. |
| **NullClaw** | 0 new | 4 open, 2 merged | None | **Stable/Steady** | Low volume, but focused on hardening. |
| **IronClaw** | ~10 new bugs | 50 updated (22 merged) | None | **Intense Dev** | "Reborn" v2 WebUI focus, significant bug churn. |
| **LobsterAI** | 0 updated | 22 updated (20 merged) | Major (2026.6.10) | **Stable/Release** | Post-release cleanup, UI polish focus. |
| **TinyClaw** | 0 | 0 | None | **Inactive** | No activity. |
| **Moltis** | 1 new bug | 0 | None | **Low Activity** | Quiet maintenance phase. |
| **CoPaw** | 37 updated (18 closed) | 50 updated (30 merged) | 2 Releases (v1.1.11) | **Very Healthy** | High velocity, strong maintainer throughput. |
| **ZeptoClaw** | 0 | 0 | None | **Inactive** | No activity. |
| **ZeroClaw** | 41 updated (19 closed) | 50 updated (23 merged) | None | **Intense Dev** | Focused on v0.8.0 stable release, critical bug fixing. |

---

### 3. OpenClaw's Position

OpenClaw remains the **ecosystem's center of gravity** by raw activity and community size, acting as the core reference implementation. Its primary advantages are its immense feature set, broad platform/channel support (Slack, iMessage, Discord, etc.), and a highly engaged, sophisticated user base capable of deep architectural discussions. However, its technical approach is showing strain: the project is currently bottlenecked by a massive PR backlog (401 open PRs) and suffers from a high number of P1 regressions (Control UI, session takeovers), suggesting its rapid growth has outpaced its internal quality and review processes. Peers like **NanoBot** and **CoPaw** are outpacing OpenClaw in stability velocity, shipping fixes faster than new bugs emerge, while OpenClaw’s community feedback indicates growing frustration with "it doesn't work" regressions and operational instability.

---

### 4. Shared Technical Focus Areas

Several technical requirements are emerging across multiple independent projects, indicating industry-wide pain points.

- **Sub-Agent Orchestration & Lifecycle:**
    - **Projects:** OpenClaw, NanoBot, PicoClaw, CoPaw, ZeroClaw
    - **Need:** Reliable spawning, data isolation, and result aggregation for sub-agents. Bugs include lost context, duplicate channel messages, and premature workflow termination.

- **Provider & Model Fallback Resilience:**
    - **Projects:** NanoBot, Hermes Agent, IronClaw, OpenClaw, CoPaw
    - **Need:** Graceful degradation when a provider returns empty responses, stalls, or hits rate limits. Users demand transparent fallback mechanisms without workflow interruption.

- **Granular Security & Credential Management:**
    - **Projects:** OpenClaw, Hermes Agent, ZeroClaw, PicoClaw, NullClaw
    - **Need:** Masked secrets, per-skill environment variable inheritance, path-scoped permissions, and SSRF guardrails. Credential pool race conditions are a common critical bug.

- **Developer Experience & Configuration Ergonomics:**
    - **Projects:** OpenClaw, NanoBot, CoPaw, ZeroClaw
    - **Need:** Validation of config at startup (fail fast), backup/restore utilities, and human-readable output for debugging. Users are frustrated by "silent failures" and unclear error messages.

- **Desktop/Web UI Performance:**
    - **Projects:** CoPaw, Hermes Agent, IronClaw, OpenClaw
    - **Need:** Fixing UI lag with large conversations, persistent port assignment, and minimizing startup time. Desktop app polish is a recurring theme for Windows and macOS users.

---

### 5. Differentiation Analysis

| Feature | OpenClaw | NanoBot | CoPaw | ZeroClaw | IronClaw |
|---|---|---|---|---|---|
| **Target User** | Power users, integrators | Developers, Telegram users | Enterprise, WeChat/DingTalk users | Terminal-first developers, Docker | NEAR AI / Rust ecosystem developers |
| **Technical Focus** | Broadest feature set, core reference | High stability, fast shipping | Chinese enterprise IM integration | WASM plugin architecture, CLI TUI | Rust-based engine, Reborn WebUI v2 |
| **Architecture** | Monolithic (straining) | Modular, config-driven | AgentScope-based, modular Runtime 2.0 | Monolithic, moving to lighter core (WASM) | Rust kernel, crates.io ecosystem |
| **Community Model** | Large, but bottlenecked | Lean, highly responsive | Fast, strong maintainer throughput | Active, technically sophisticated | Intense, focused on Rust/NEAR |
| **Key Weakness** | Review bottleneck, regressions | Smaller feature set | Desktop UI performance | Docker ergonomics, TUI polish | crates.io publishing blocked |

---

### 6. Community Momentum & Maturity

**Tier 1: Rapidly Iterating / High Churn (Intense Dev)**
- **NanoBot, CoPaw, ZeroClaw, IronClaw:** These projects are shipping the highest volume of fixes and features. They are in a phase of rapid expansion, with significant architectural changes (Runtime 2.0, WASM plugins, Reborn WebUI) alongside active bug fixing. This tier shows the strongest community velocity.

**Tier 2: Stable Maturation / Core Development**
- **PicoClaw, NanoClaw, NullClaw, LobsterAI:** These projects show steady, predictable progress with a focus on hardening, documentation, and specific integrations (e.g., Feishu for NanoClaw, Windows for NullClaw). They are considered stable and reliable.

**Tier 3: Scaling / Growth Under Pressure**
- **OpenClaw, Hermes Agent:** Both have massive communities but are showing signs of growing pains. OpenClaw is struggling with a review backlog and regressions. Hermes Agent is experiencing intense bug churn, particularly around credential and memory systems, indicating a need for architectural stabilization.

**Tier 4: Low Activity / Inactive**
- **TinyClaw, ZeptoClaw, Moltis:** These projects show minimal to no activity, suggesting they may be considered feature-complete, abandoned, or in a quiet maintenance phase.

---

### 7. Trend Signals

Analysis of community feedback across all projects reveals several key industry trends valuable for AI agent developers.

1.  **From Chat to Automation:** The user base is rapidly moving beyond basic Q&A. The growing demand for sub-agent orchestration, cron-based automation, and scheduled tasks (OpenClaw, NanoBot, NullClaw, ZeroClaw) indicates agents are being deployed as operational infrastructure, not just conversational interfaces.

2.  **The Resilience Imperative:** The single most recurring technical topic is **provider/model fallback**. Users across NanoBot, Hermes, IronClaw, and OpenClaw are demanding that agent pipelines survive API failures, rate limits, and model unavailability without collapsing. This is a hard requirement for production deployments.

3.  **Security is a Table-Stakes Blockbuster:** Users are no longer asking for security features; they are *angry* when they don't work. The intense focus on credential masking, path-scoped permissions, and SSRF guards (OpenClaw, Hermes, ZeroClaw, NullClaw) shows that trust, leak prevention, and audit trails are now primary decision factors, not afterthoughts.

4.  **Desktop Experience is a Bottleneck:** A surprising number of projects (CoPaw, Hermes Agent, IronClaw, LobsterAI) are struggling with Desktop UI performance (lag, font sizes, session management). This signals a gap between server-side agent power and the client-side user experience, particularly for Windows and macOS users.

5.  **Multi-Agent is the New "Agent":** The term "agent" is now evolving to mean "multi-agent system." The dominant architectural challenges across OpenClaw, NanoBot, CoPaw, and ZeroClaw all revolve around inter-agent communication, context isolation, and result aggregation. The core unit of deployment is becoming a swarm, not a single bot.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-11

**Generated from GitHub data (github.com/HKUDS/nanobot)**

---

## 1. Today's Overview

NanoBot shows **very high development velocity** today, with 33 PRs updated in the last 24 hours (19 merged/closed) and 10 issues updated (6 closed). The project is actively shipping fixes and features across multiple subsystems: memory/context management, WebUI improvements, provider resilience, sandbox fixes, and channel integrations. No new release was cut, but the volume of merged work suggests a release candidate may be imminent. Three open bugs with reproduction steps indicate some user friction, but all have corresponding fix PRs or active discussion.

---

## 2. Releases

No new releases published. Last known version is **v0.2.1** (referenced in issue #4287). Given the volume of merged fixes and features, a **v0.2.2 or v0.3.0** release is likely within days.

---

## 3. Project Progress (Merged/Closed PRs Today — 19 items)

### Major Feature Merges
- **PR #4274** — `Scope prompt recent history by session` (chengyongru). Adds session isolation to `history.jsonl` to prevent cross-session context pollution. Closes fundamental architecture issue.
- **PR #4278** — `feat(webui): segment transcript storage` (Re-bin). Replaces single-file transcript with segmented JSONL store for faster large-chat loading.
- **PR #4273** — `feat(exec): add pathPrepend config` (chengyongru). Allows `PATH` lookup precedence for configured tool directories, solving the pip install issue reported in #3934.

### Provider & Resilience Fixes
- **PR #4272** — `fix(providers): allow retry and fallback on stream stalled timeout` (aiguozhi123456). Retries and falls back when streams stall mid-response (#4013, #4287).
- **PR #4281** — `feat(transcription): add SiliconFlow as transcription provider` (morandot). New ASR provider for Whisper-compatible endpoints.
- **PR #4261/OpenAICompatProvider** — Fixed `max_tokens` vs `max_completion_tokens` for GPT-5.x compatibility.

### Channel & WebUI Fixes
- **PR #4277** — `fix(feishu): lazy-load lark SDK during gateway startup` (chengyongru). Prevents import-time WebSocket loop issues.
- **PR #4247** — `fix(webui): auto-compact transcript when file exceeds size limit` (HengWeiBin). Prevents total history loss on oversized transcripts.
- **PR #4255** — `refactor(webui): on-demand version check` (JiajunBernoulli). Removes background polling, adds click-to-check.

### Config & Validation
- **PR #4275** — `Fail fast on invalid config files` (chengyongru). Catches unparseable configs at startup instead of silently breaking.

### Full list: github.com/HKUDS/nanobot/pulls?q=is%3Apr+is%3Amerged+updated%3A%3E2026-06-10

---

## 4. Community Hot Topics

### Most Active Open Issue: Subagent Workflow Breakage
- **Issue #4290** — `[bug] cronjob ends early when there's a subagent spawned` (tjc0726)
  - Summary: Main agent can't reply to subagent results, failing downstream workflow.
  - No comments yet but represents a **critical workflow gap** in the subagent system.
  - [GitHub](https://github.com/HKUDS/nanobot/issues/4290)

### Most Discussed Feature Request: Aggregated Subagent Notifications
- **Issue #4279** — `[enhancement] Support aggregated notifications for subagents to prevent LLM hallucinations` (player-ysd)
  - Proposes batching subagent results instead of real-time delivery to reduce hallucination risk.
  - Signals growing sophistication in subagent orchestration usage.
  - [GitHub](https://github.com/HKUDS/nanobot/issues/4279)

### Cross-Cutting Bug: Empty Model Responses
- **Issue #4287** — `[bug] Empty model responses not triggering fallback` (glebov)
  - DeepSeek returns empty `choices` during peak hours; system classifies as "non-fallbackable"
  - **Fix PR #4288** submitted same day by yonghuname.
  - [GitHub](https://github.com/HKUDS/nanobot/issues/4287) | [Fix PR](https://github.com/HKUDS/nanobot/pull/4288)

### Resolved Issue with Architectural Impact: Cross-Session Context Pollution
- **Issue #4259** — `history.jsonl cross-session context pollution` (chxuan)
  - Identified that all sessions' history entries were mixed into every system prompt.
  - Fixed by **PR #4274** merged today.
  - [GitHub](https://github.com/HKUDS/nanobot/issues/4259)

---

## 5. Bugs & Stability

### 🔴 Critical (with reproduction steps, active impact)
1. **Subagent cron termination (#4290)** — Main agent workflow fails after subagent completes. No fix yet, 0 comments. High severity for automation users.
   - [GitHub](https://github.com/HKUDS/nanobot/issues/4290)

2. **Missing sustained goal context (#4286)** — Agent repeatedly reports missing context for assigned goals. User screenshot attached. No fix PR yet.
   - [GitHub](https://github.com/HKUDS/nanobot/issues/4286)

### 🟠 Medium (with fix PRs or workarounds)
3. **Empty model responses not fallbacking (#4287)** — **Fix PR #4288** submitted. Affects DeepSeek users during peak hours.
   - [GitHub](https://github.com/HKUDS/nanobot/issues/4287) | [Fix PR](https://github.com/HKUDS/nanobot/pull/4288)

### 🟢 Low (resolved or isolated)
4. **bwrap sandbox HOME not reset (#4237)** — **Closed.** PR already merged in prior batch.
   - [GitHub](https://github.com/HKUDS/nanobot/issues/4237)
5. **Stream stalled timeout (#4013)** — **Closed.** Fixed by PR #4272.
   - [GitHub](https://github.com/HKUDS/nanobot/issues/4013)
6. **OpenAIComptProvider token param mismatch (#4261)** — **Closed.**
   - [GitHub](https://github.com/HKUDS/nanobot/issues/4261)

### 🟢 Stability Enhancements Merged
- PR #4283 — Fixes WebUI activity duration display (early reasoning timing no longer overrides total duration).
- PR #4285 — Cron schedule validation at creation time (rejects invalid expressions upfront).
- PR #4257 — Fenced-code-block-aware message splitting (fixes broken HTML rendering in channel messages).

---

## 6. Feature Requests & Roadmap Signals

### High Probability for Next Release (v0.2.2 / v0.3.0)

| Feature | Issue/PR | Likelihood |
|---------|----------|------------|
| **Subagent model presets** — spawn subagents with different models | PR #4291 (open) | High — already submitted |
| **Computer use tools** — pixel-based (pyautogui) + DOM-based (playwright) | PR #4276 (open) | Medium — complex but useful |
| **Slack group require mention** — scope allowlist to @-mentions | PR #4289 (open) | High — small change, clear use case |
| **WebUI skill activation via slash palette** | PR #4284 (open) | Medium — UX enhancement |
| **File management in WebUI settings** | PR #4282 (open) | Medium — user workflow improvement |
| **Aggregated subagent notifications** | Issue #4279 | Low — design not finalized |
| **SiliconFlow transcription provider** | PR #4281 (merged) | **Already shipped** |
| **Segmented transcript storage** | PR #4278 (merged) | **Already shipped** |

### Emerging Patterns
- **Subagent orchestration** is the dominant unsolved challenge — three separate items (#4290, #4279, #4291) all touch subagent lifecycle.
- **Model fallback resilience** is a recurring theme (#4287, #4013, #4272) — users want graceful degradation under load.
- **Configuration ergonomics** — path prepend (#4273), config validation (#4275), cron validation (#4285) all make NanoBot easier to operate.

---

## 7. User Feedback Summary

### Pain Points
1. **Subagent workflow failures (#4290)** — "cronjob ends early when there's a subagent spawned" — breaks automated pipelines.
2. **Context loss after corrections (#4270)** — "If a user corrects the model in the last few messages, those corrections are excluded from the summary" — undermines trust.
3. **Model unavailability during peak hours (#4287)** — DeepSeek returns empty choices; system doesn't fall back — leaves users stranded.
4. **Exec tool limitation with pip (#3934)** — Can't install Python packages via pip in exec tools — solved by PR #4273.

### Satisfaction Signals
- User in #4013: "ive been using 0.1.5post2 (for the webui), its been very good (way to say ty)"
- Positive community engagement: 12 unique issue/PR authors in last 24 hours.
- Call for improvement: cross-session pollution (#4259) was actively diagnosed by user chxuan with detailed data flow analysis — shows sophisticated understanding and investment.

### Use Cases Emerging
- **Telegram bot runtime** (#4287) — production deployment with fallback expectations.
- **Website content generation** (#4286) — sustained goal assignments.
- **Multi-agent workflows** (#4279, #4290) — subagent orchestration for complex tasks.

---

## 8. Backlog Watch

### Open Issues Needing Maintainer Attention

| Issue | Age | Topic | Severity | Status |
|-------|-----|-------|----------|--------|
| #4290 | 0 days | Subagent cron breakage | 🔴 Critical | No comments, no assignee |
| #4286 | 0 days | Missing sustained goal context | 🟠 High | No comments, no assignee |
| #4279 | 0 days | Aggregated subagent notifications | 🟡 Medium | Design phase, no PR |
| #4257 | 3 days | Code-block-aware message splitting | 🟢 Low | PR open, no review yet |

### Long-Pending Items of Note
- No issues older than ~2 weeks in the "latest" set — maintainers are keeping up well with the influx.
- The 19 merged PRs today suggest the team is highly responsive.

### Risk Watch
- **Subagent system** has three concurrent touch points (#4290, #4279, #4291) without clear architectural coordination — risk of conflicting implementations.
- **Context memory** changes in PR #4280 and #4270 touch the same `Consolidator.archive()` path — need careful integration testing to avoid regressions.

---

**Summary:** NanoBot is in a period of rapid maturation. The project is shipping fixes faster than bugs are reported, with strong attention to production-reliability concerns (fallback, rate limiting, sandbox isolation). The subagent system is the most active area of both feature work and bug reports — expect architectural improvements there in the next release.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the structured project digest for **Hermes Agent** on **2026-06-11**.

---

## Hermes Agent Project Digest — 2026-06-11

### 1. Today's Overview

The Hermes Agent project shows **extremely high activity**, with 50 issues and 50 PRs updated in the last 24 hours. This represents a significant spike in community engagement and developer output. The project is in a **rapid development phase**, characterized by a high volume of bug reports (many P2 and P3), a steady stream of feature requests, and an active PR pipeline addressing both stability and new functionality. While there are no new releases today, the sheer volume of incoming work (especially around credential management, memory plugins, and platform-specific bugs) suggests a focus on hardening the codebase, likely in preparation for an upcoming stable release. The community is highly engaged, with users filing detailed, well-structured reports including reproduction steps and proposed fixes.

### 2. Releases

**No new releases were published today (2026-06-11).**

### 3. Project Progress

**Merged/Closed PRs (Today):** 5 PRs were merged or closed.

- **PR #42813** [Closed] [P1] `fix(agent): rename context compressor headers to historical markers` — A critical fix improving the clarity of context compression summaries, shifting language from present-tense ("Active Task") to past-tense ("Historical Task") to better reflect the state of prior sessions.
- **PR #36245** [Closed] [P3] `fix(agent): honor auxiliary task extra_body` — Ensures that auxiliary task configurations (e.g., for profile description, Kanban) are correctly passed to the LLM.
- **PR #41824** [Closed] [P3] `fix(logging): suppress Docker environment verbose startup logs` — Reduces noise in the TUI by filtering out Docker sandbox startup logs from the conversation transcript.
- **Issues #17861, #43441, #12372, #9059** were also closed, indicating progress on a multi-turn history bug for Anthropic, Telegram Markdown rendering, dashboard skill numbering, and interactive command handling.

**Key Features and Fixes Advancing (Open PRs):**
- **Credential Redaction (PR #42846):** A security-focused PR introduces mandatory redaction of credentials from outbound messages to LLM providers.
- **Exponential Backoff (PR #43856):** Directly addresses a long-standing pain point (Issue #15296) by replacing flat TTL for credential pool exhaustion with exponential backoff.
- **Cron Daemon (PR #43864):** Adds a standalone `hermes cron daemon` command, enabling scheduled jobs to run independently of the gateway.
- **Multilingual i18n (PR #38846):** A massive feature branch adding 15 language locales to the desktop app (861 keys) sits alongside the native en/zh skeleton.
- **Termux/PRoot Support (PR #40377):** Implements fixes for running `hermes update` on Android Termux and Linux PRoot environments by auto-setting `UV_LINK_MODE=copy`.

### 4. Community Hot Topics

The community is most engaged around credential management, platform-specific bugs (Telegram), and localization.

- **Topic-to-Profile Routing (Issue #10143)** — (14 comments) A highly requested feature for Telegram. Users want a single bot gateway to route messages from different forum topics to different agent profiles with distinct models, skills, and memory. This signals a strong need for multi-tenant or multi-purpose agent setups within a single platform gateway.
- **OpenAI-Codex Credential Pool Drop (Issue #19566)** — (7 comments, 1 👍) A critical P2 bug where the credential pool can lose a newly added credential during rotation. The community is actively discussing the race condition in `auth.json` rewriting.
- **Honcho Memory Plugin Bugs (Issues #43731, #43733, #43775)** — (4 comments each) A cluster of bugs in the Honcho memory plugin, including one-time migrations re-running, skill invocation text polluting user memory, and a silent failure against self-hosted v3 servers. This indicates a major area of pain for users relying on alternate memory backends.
- **Russian Locale (Issues #40347, #43806)** — (4-1 comments) Two separate feature requests for Russian localization in the desktop app (one even providing an installer), showing strong regional demand.

### 5. Bugs & Stability

A high volume of bugs were reported today, spanning infrastructure, platform, and provider issues.

**P1 (Critical):** None reported today.

**P2 (High):**
- **Telegram Context Compaction (Issue #40416, 4 comments, 1 👍):** A UX regression where compacted messages are visually deleted from the user’s chat view. This is a serious day-to-day usability issue for Telegram users. *No fix PR linked.*
- **Kimi-Coding Provider Broken (Issue #43617):** The `kimi-coding` provider uses a wrong endpoint and user-agent for `sk-kimi-*` keys, breaking all API calls. *No fix PR linked.*
- **Desktop App Ignores `--profile` (Issue #43571):** The desktop app always boots as "default", overwriting CLI sessions. *No fix PR linked.*
- **WhatsApp Bridge Silent Drop (Issue #43830):** Messages to LID-addressed groups are silently dropped due to an outdated Baileys pin. *No fix PR linked, but a security fix (PR #43814) bumps it for a CVE.*
- **MiniMax-M3 Chinese Reasoning Tags Leak (Issue #43827):** Raw Chinese tags like `思考` leak into user-visible output, breaking UX for non-Chinese users. *No fix PR linked.*
- **aiohttp ClientSession Leak (Issue #43657):** An `Unclosed client session` warning on every auxiliary task, indicating a resource leak. *No fix PR linked.*
- **Profile Config Providers Overwrite (Issue #43713):** Sub-profiles clear default providers instead of inheriting them, breaking configuration. *No fix PR linked.*
- **Nix Build Failure (Issue #43810):** Builds hard-fail on plugin dependency collisions with the sealed venv. *No fix PR linked.*
- **Shell Hooks Not Registered in TUI (Issue #43823):** `config.yaml` hooks are silently ignored in the desktop app/TUI. *No fix PR linked.*
- **Email Adapter IMAP Failure (Issue #39856):** Fails on servers without RFC 2971 support (e.g., Purelymail). *No fix PR linked.*
- **OpenAI-Codex False Rate-Limiting (Issue #43747):** A healthy account is incorrectly marked as `usage_limit_reached`. *No fix PR linked.*
- **Security: WhatsApp Bridge CVE (Issue #43814):** A critical security advisory (CVE-2026-48063) requires bumping Baileys to block malicious `protocolMessage` spoofing. *Fix PR #43814 is open.*

**P3 (Medium):**
- Multiple Honcho memory plugin bugs (Issues #43731, #43733, #43775).
- "Browse Hub" skill install always fails (Issue #43829) due to missing `--yes` flag.
- Profile-scoped skills trigger security warnings (Issue #43796).
- `hermes update` is ~8 min slow on Windows due to unconditional Node.js dependency install (Issue #43837).
- Desktop settings window clears prompt text (Issue #43825).

### 6. Feature Requests & Roadmap Signals

Several user-requested features point to clear roadmap priorities:

- **Multi-Backend Desktop Support (Issue #37876, 1 👍):** A strong request to connect to both local and remote Hermes backends simultaneously in the desktop app.
- **Topic-to-Profile Routing (Issue #10143):** Likely a candidate for the next major feature release, given its high comment count and clear use case.
- **Exponential Backoff for Credential Pools (Issue #15296):** The existence of a matching open PR (#43856) suggests this is already being implemented for the next patch release.
- **Feishu Interactive Card Buttons (Issue #43818):** A platform-specific UX improvement to make the `clarify` tool interactive instead of plain text.
- **Trigger Keywords Indexing (PR #43862):** A non-invasive feature to index skill trigger keywords for the LLM system prompt.
- **Russian Locale (Issues #40347, #43806):** Given the provided third-party installer and multiple requests, localizing the desktop app is becoming a community priority.

### 7. User Feedback Summary

- **Satisfaction:** The community is highly engaged and technically proficient. Users are filing detailed, well-researched bugs with reproduction steps and even root cause analyses. The fact that users are reporting issues found via "live debugging sessions with Hermes" (Issue #17861) indicates a sophisticated user base that deeply trusts the tool.
- **Pain Points:**
    1.  **Credential Management:** The credential pool is a persistent source of bugs (dropping credentials, false rate-limiting, flat TTL loops). This is the single largest area of user frustration.
    2.  **Platform-Specific UX:** Telegram users are experiencing significant UX regressions (messages disappearing, raw Markdown). WhatsApp users face silent message drops.
    3.  **Memory Plugin Instability:** Honcho memory plugin is causing duplicated facts, polluted memory, and silent connection failures.
    4.  **Configuration Complexity:** Users are struggling with profile inheritance, shell hooks not working in TUI, and Nix build failures.
    5.  **Desktop App Limitations:** Missing profile selection on startup, prompt clearing on settings open, and single-backend mode are key UX complaints.

### 8. Backlog Watch

Several critical issues and PRs appear to be waiting for maintainer attention:

- **Issue #19566** [P2, open 38 days]: OpenAI-Codex credential pool drops newly added credentials. High engagement (7 comments) but no linked PR.
- **Issue #40416** [P2, open 5 days]: Telegram context compaction deletes user messages. High community reaction (1 👍) and severe UX impact. No fix PR.
- **Issue #39856** [P2, open 6 days]: Email adapter fails on Purelymail (no RFC 2971). Requires a simple error handling fix. No fix PR.
- **Issue #15296** [P3, open 48 days]: Credential pool exponential backoff. A matching PR (#43856) was just opened, which is good progress.
- **PR #40377** [open 5 days]: Termux/PRoot support. This is a complex multi-part fix that has been open for 5 days and is important for mobile/container users.
- **PR #38846** [open 7 days]: Desktop i18n with 15 languages. This is a huge PR that has been synced with upstream but requires careful review due to its scope.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the PicoClaw project digest for 2026-06-11.

---

## PicoClaw Project Digest
**Date:** 2026-06-11
**Source Data Window:** 2026-06-10 - 2026-06-11

### 1. Today's Overview
PicoClaw shows **high maintenance activity** this period, driven by a surge in PR merges and critical security patches. The team closed **6 pull requests** and addressed **1 security vulnerability**, indicating a strong focus on stability and hardening the codebase. While a new **nightly build (v0.2.9-nightly)** was released, the project faces 4 fresh open issues, including a significant duplicate-message bug in sub-agent workflows and platform compatibility problems. Overall, project health appears robust, with maintainers actively processing contributions, though the volume of new issues suggests testing velocity is high.

### 2. Releases
- **Nightly Build (v0.2.9-nightly.20260610.b9a8fad6)**
  - **Status:** Automated, unstable build.
  - **Changelog:** [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)
  - **Note:** No official stable release today. Users relying on production stability should stick to the latest stable tag.

### 3. Project Progress
Six pull requests were merged or closed today, advancing code quality and compatibility:
- **Windows Compatibility (Critical Fix):** PR [#3089](https://github.com/sipeed/picoclaw/pull/3089) (merged) fixes the path separator mismatch with `os.Root` on Windows, resolving the long-standing bug [#2472](https://github.com/sipeed/picoclaw/issues/2472) where `list_dir` returned "invalid argument."
- **Security Hardening:** PR [#3085](https://github.com/sipeed/picoclaw/pull/3085) (merged) blocks the `198.18.0.0/15` range in the SSRF guard, closing security advisory [#3077](https://github.com/sipeed/picoclaw/issues/3077).
- **API Compatibility:** PR [#2951](https://github.com/sipeed/picoclaw/pull/2951) (merged) fixes HTTP 400 errors on OpenAI endpoints by switching `web_search_preview` to the standard `function` type.
- **Model Support:** PR [#2948](https://github.com/sipeed/picoclaw/pull/2948) (merged) skips the deprecated `temperature` parameter for `claude-opus-4-7` models.
- **Error Handling:** PR [#3043](https://github.com/sipeed/picoclaw/pull/3043) (merged) adds proper error checks for `strconv.Atoi` and `json.Unmarshal` calls, preventing silent failures.
- **New Feature:** PR [#2945](https://github.com/sipeed/picoclaw/pull/2945) (merged) introduces **picoclaw-tracer**, a standalone debug trace viewer for LLM calls.

### 4. Community Hot Topics
- **Most Discussed Bug (Sub-agent Duplication):** Issue [#3094](https://github.com/sipeed/picoclaw/issues/3094) ("ForUser字段被同时用于直接推送和主代理汇总") reported a critical UX flaw where asynchronous sub-agent (`spawn`) results are pushed twice to chat channels (raw + summarized). The issue is **zero hours old** with no responses yet, but it directly impacts core workflow usability.
- **Most Reacted Issue (Windows Path Bug):** Issue [#2472](https://github.com/sipeed/picoclaw/issues/2472) received a 👍 and 5 comments. It was the driver for the Windows fix merged today (PR [#3089](https://github.com/sipeed/picoclaw/pull/3089)), demonstrating maintainer responsiveness to community pain points.
- **Security Advisory:** Issue [#3077](https://github.com/sipeed/picoclaw/issues/3077) detailing the SSRF bypass via `198.18.0.0/15` was closed concurrently with its fix PR, showing efficient security handling.

**Underlying Needs:** Users are demanding robustness in cross-platform support (Windows file systems) and core workflow reliability (sub-agent message routing). The security disclosure indicates power users are actively probing attack surfaces.

### 5. Bugs & Stability
| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **High** | [#3094](https://github.com/sipeed/picoclaw/issues/3094) | Duplicate messages from async sub-agents on push channels | No fix yet |
| **Medium** | [#3090](https://github.com/sipeed/picoclaw/issues/3090) | Panel UI broken on Safari iOS <16.4 (likely CSS/JS compatibility) | No fix yet |
| **Medium** | [#3091](https://github.com/sipeed/picoclaw/pull/3091) | Type assertion discarding `ok` in `native_search` (disables feature silently) | Open PR |
| **Medium** | [#3092](https://github.com/sipeed/picoclaw/pull/3092) | `skills_install` type assertions discard `ok` (UX confusion) | Open PR |
| **Low** | [#2472](https://github.com/sipeed/picoclaw/issues/2472) | Windows `list_dir` path error | **Fixed** (merged) |
| **Closed** | [#3077](https://github.com/sipeed/picoclaw/issues/3077) | SSRF bypass via benchmark IP range | **Fixed** (merged) |

**Major Concerns:** The sub-agent duplicate message bug (#3094) is a top priority as it degrades the core multi-agent experience. The Safari compatibility issue (#3090) is a regression affecting mobile web users.

### 6. Feature Requests & Roadmap Signals
- **New Communication Gateways:** Issue [#3093](https://github.com/sipeed/picoclaw/issues/3093) requests support for **SimpleX**, **Tox**, or **Wire** gateways. This signals user demand for privacy-preserving, decentralized messaging integrations. *Prediction:* Unlikely for next minor stable release, but could appear as a community plugin.
- **Agent Collaboration Bus:** PR [#2937](https://github.com/sipeed/picoclaw/pull/2937) (open, stale) introduces an internal **Agent Collaboration Bus** with per-agent mailboxes and isolated threads. *Prediction:* High likelihood of merging in v0.3.0, aligning with the sub-agent issue (#3094) that needs better state routing.
- **Access Control Hardening:** PR [#3083](https://github.com/sipeed/picoclaw/pull/3083) (open) adds trusted proxy CIDRs for the launcher. *Prediction:* Likely to merge soon, as it addresses operational security for multi-host deployments.

### 7. User Feedback Summary
- **Pain Points:**
  - **Windows users** struggle with basic file system tools (`list_dir` broken) — now fixed.
  - **Sub-agent workflows** are unusable on chat channels due to message duplication.
  - **Safari mobile users** (iOS <16.4) cannot access the web panel.
  - **Matrix users** face authentication failures when using standard `@user:server` IDs (PR [#3045](https://github.com/sipeed/picoclaw/pull/3045) open but stale).
- **Satisfaction Signals:**
  - Quick response on the SSRF vulnerability (issue to fix in <48 hours).
  - Active merging of community PRs (at least 6 today from multiple contributors).
- **Dissatisfaction Signals:**
  - The `dm_scope` setting cannot be saved via the UI (PR [#3067](https://github.com/sipeed/picoclaw/pull/3067) open), indicating UI/UX debt.
  - A library-level false positive in `exec` path safety (`restrict_to_workspace`) was reported (PR [#3087](https://github.com/sipeed/picoclaw/pull/3087) open).

### 8. Backlog Watch
- **Stale Collaboration Feature:** PR [#2937](https://github.com/sipeed/picoclaw/pull/2937) ("Feat/agent collaboration") has been open since 2026-05-24 with no recent maintainer activity. Given the duplicate-message bug (#3094), this PR’s architecture for inter-agent mailboxes is increasingly relevant.
- **Matrix User ID Fix:** PR [#3045](https://github.com/sipeed/picoclaw/pull/3045) (fixing `allow_from` for Matrix) has been open for 4 days without review. This blocks all Matrix users with standard IDs from using the allowlist.
- **UI Persistence Bug:** PR [#3067](https://github.com/sipeed/picoclaw/pull/3067) (fix for `dm_scope` save failure) is 2 days old with no comments. This is a low-effort fix that impacts user configuration trust.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-11

## Today's Overview
NanoClaw shows strong development momentum with 10 PRs updated in the last 24 hours, of which 6 were merged or closed. The single open issue (#1690) continues to generate community discussion around multi-runtime agent SDK abstraction. The project is actively maturing its skills-based architecture, with several new skill contributions and important fixes landing. No new releases were published today, but the volume of merged work suggests a release may be approaching.

## Releases
No new releases were published today. The latest available release remains the previous version.

## Project Progress
Six PRs were merged or closed today, representing meaningful progress across infrastructure, documentation, and platform stability:

- **#2719** [MERGED] — `feat: add uninstall.sh` — Per-copy uninstaller with confirmation prompts, dry-run mode, and OneCLI agent cleanup. This fills a significant operational gap for users managing multiple NanoClaw installations.
- **#2721** [MERGED] — `docs: customizing, skills model, and skill guidelines` — Three foundational documentation files that define the skills-based customization contract, helping onboard contributors and users to the project's modular architecture.
- **#2724** [CLOSED] — Opened against wrong repo, closed immediately. No impact.
- **#2723** [CLOSED] — `Finance dd agent` skill contribution (closed, likely merged as skill). Adds a domain-specific agent for financial due diligence workflows.
- **#3** [MERGED] — `Secure IPC with per-group namespaces` — Long-standing security improvement providing per-group IPC directories to prevent privilege escalation between agent groups in multi-tenant setups.
- **#2718** [MERGED] — `fix(feishu): cleanup zombie active_cards on abnormal agent-runner exit` — Production bug fix for Feishu (Lark) integration where interactive cards would show "running" indefinitely after agent-runner timeout.

Additionally, four PRs remain **open** and under active development:
- **#2727** — Container runner log persistence (under review)
- **#2726** — Per-agent-group input/output guardrails (new)
- **#2211** — Tool-visibility skill for live tool-call previews (long-running)
- **#2725** — Web-search-plus skill (multi-provider)

## Community Hot Topics
**Most Active Issue: #1690** — "Multi-runtime agent SDK abstraction (Claude + Codex + local models)"  
- Author: chiptoe-svg | Created: 2026-04-07 | 6 comments, 3 👍  
- [GitHub Issue #1690](https://github.com/nanocoai/nanoclaw/issues/1690)  
- Underlying need: Users want NanoClaw to support multiple AI agent backends (Claude, Codex, local models) as pluggable "runtimes," mirroring the existing channel pattern. This suggests community desire for vendor-neutral agent orchestration, potentially unlocking use cases where users switch between cloud and local models for cost or privacy reasons.

**Most Active PRs (by recency + new comments):**  
- **#2727** — `feat(container-runner): persist agent container stdout+stderr to disk` — Critical for debugging production agent failures; currently all container output is discarded.  
- **#2726** — `feat: add /add-guardrails skill` — New skill for input/output filtering (prompt injection blocking, credential leak detection), indicating growing enterprise/security interest.

## Bugs & Stability
- **#2718** [FIXED] — Feishu (Lark) integration: zombie `active_cards` persisted indefinitely after `agent-runner` abnormal exit. Root cause: card cleanup only fired inside SDK's `final` event handler, which never executed on timeout. Fix merged today.  
  - Severity: Medium (visible production impact on Feishu users, UX degradation, but no data loss)  
  - Fix: brookgao, merged into main branch

No other bugs, crashes, or regressions were reported in the last 24 hours.

## Feature Requests & Roadmap Signals
**Strong signals for next version:**
- **Multi-runtime SDK abstraction (#1690)** — Could evolve into a core platform feature; community interest is consistent over the past 2 months, and author has built a working prototype.
- **Container log persistence (#2727)** — Sibling PR in Microsoft's amplifier-app-nanoclaw; high demand for debugging capabilities.
- **Guardrails skill (#2726)** — Security-conscious users are requesting content filtering; likely to be adopted given the skill-based architecture.
- **Web-search-plus skill (#2725)** — Multi-provider web search without MCP dependency; fills gap for users who want web access without the complexity of MCP tooling.
- **Tool-visibility skill (#2211)** — Long-running PR for live tool-call previews; would enhance debugging and transparency for end users watching agent behavior.

**Predicted next release features:** Log persistence (#2727), guardrails (#2726), and the uninstaller (#2719) are strong candidates given they are clean, self-contained skills with high practical value.

## User Feedback Summary
- **Satisfaction signals:** Users are actively contributing skills (finance DD agent, web-search-plus, guardrails), suggesting the skills-based architecture is gaining traction. The uninstaller PR (#2719) addresses a common pain point for power users.
- **Pain points:** The long-standing #1690 issue indicates users want broader AI model support beyond Claude, pointing to vendor lock-in concerns. The container log discard problem (#2727) suggests debugging production agents is currently difficult. Feishu users experienced real UX issues with stuck "running" indicators.
- **Use case patterns:** Contributors are building domain-specific agents (finance due diligence) and security tooling (guardrails), indicating the platform is being adopted for enterprise and regulated workflows.

## Backlog Watch
- **#1690** — Multi-runtime SDK abstraction (open since 2026-04-07, 67 days)  
  - Has 3 👍 and active discussion; no maintainer response visible. This is the highest-signal feature request without official acknowledgment.  
  - [GitHub Issue #1690](https://github.com/nanocoai/nanoclaw/issues/1690)  
  - **Recommendation:** Maintainers should provide a roadmap response or merge the prototype work to signal direction.

- **#2211** — Tool-visibility skill (open since 2026-05-03, 39 days)  
  - Well-documented, follows skill guidelines, no maintainer activity recently.  
  - [GitHub PR #2211](https://github.com/nanocoai/nanoclaw/pull/2211)  
  - **Recommendation:** Review and merge or provide guidance on remaining blockers.

No other issues or PRs appear to have been neglected beyond reasonable timelines given typical project velocity.

---

*Generated from GitHub activity on 2026-06-11. Data reflects the most recent 24-hour window unless otherwise noted.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the **NullClaw Project Digest** for **2026-06-11**, based on the provided GitHub data.

---

### 1. Today's Overview
Project activity is **moderate**, with a strong focus on bug-fixing and stability improvements, particularly around **agent output handling** and **configuration** defaults. While there are no new releases or fresh issues, the maintainers have been highly responsive, closing two long-standing PRs and merging four new fixes for the queue mode, redaction false-positives, and tool filtering. The pipeline shows a clear effort to harden the agent runner for edge cases (e.g., child process failures) and to improve **gateway test reliability** under contention. Overall project health appears stable with a healthy PR review cadence.

### 2. Releases
**None.** No new versions were tagged in the last 24 hours.

### 3. Project Progress
Two pull requests were **merged/closed** today:
- **#945** (Closed) – **fix(redaction): reject ISO date/time patterns as false-positive phone matches**  
  *Author:* vernonstinebaker  
  *Summary:* Adds an `isDateLike()` guard to prevent the redaction engine from treating ISO-formatted datetimes (e.g., `2026-06-02 20:17`) as phone numbers, eliminating false-positive masking in agent logs.  
  *Link:* [PR #945](https://github.com/nullclaw/nullclaw/pull/945)

- **#946** (Closed) – **fix(agent): filter tools in system prompt text by tool_filter_groups**  
  *Author:* vernonstinebaker  
  *Summary:* Implements a function `filterToolsForPromptText` that omits dynamic MCP tools from the system prompt text (they are still available via native API tool-calling). Removes the removed `Para` dependency.  
  *Link:* [PR #946](https://github.com/nullclaw/nullclaw/pull/946)

### 4. Community Hot Topics
**Most Active PRs (by recency of updates):**

| PR # | Title | Author | Comments | 👍 | Status |
|------|-------|--------|----------|----|--------|
| **#951** | fix(agent_runner): suppress stderr initialization logs on agent failure | vernonstinebaker | 0 | 0 | Open |
| **#949** | fix: make queue_mode configurable from config.json, default to latest | vernonstinebaker | 0 | 0 | Open |
| **#948** | fix cron agent delivery attribution | DonPrus | 0 | 0 | Open |
| **#950** | fix(gateway): move port probe before allocations to prevent test leak | addadi | 0 | 0 | Open |

**Analysis:**  
The most significant discussion (based on the presence of multiple contributors and the nature of the PR) is **#951**, which addresses a user-visible pain point: when an agent crashes, the system was posting internal initialization logs (memory plans, MCP registrations) to channels instead of a clean error. This indicates a deep need for **production-grade error boundaries** and **user-facing error messages** rather than raw internals. PR #949 (queue mode config) and #948 (cron attribution) are also high-value, addressing configuration ergonomics and workflow traceability, respectively.

### 5. Bugs & Stability
**High Severity:**
- **[PR #951]** – **Stderr initialization leaks on agent failure**  
  *Impact:* When a child agent process exits non-zero, internal logs (memory plan, MCP registration, channel startup) are posted to chat channels as if they were agent responses. Severity: **High** (creates noise and potential information leakage). Fix is *in review* (#951).  
  *Link:* [PR #951](https://github.com/nullclaw/nullclaw/pull/951)

**Medium Severity:**
- **[PR #950]** – **Gateway test leak / `AddressInUse` handling**  
  *Impact:* In test environments, a failing port probe causes a memory leak by allocating heavy resources (`Config`, `RuntimeProviderBundle`, `SessionManager`) before the probe. This causes test flakiness in CI. Severity: **Medium** (test-only, but blocks reliable CI). Fix is *in review* (#950).  
  *Link:* [PR #950](https://github.com/nullclaw/nullclaw/pull/950)

**Low Severity:**
- **[PR #945]** – **ISO datetime mistaken as phone number**  
  *Impact:* System prompt datetimes were falsely redacted as phone numbers. *Fixed* and merged today. Severity: **Low** (annoyance, not data loss).  
  *Link:* [PR #945](https://github.com/nullclaw/nullclaw/pull/945)

### 6. Feature Requests & Roadmap Signals
While no explicit feature requests (Issues) were filed in the last 24 hours, the **open PRs** strongly signal the next version's roadmap:

- **Configuration-as-code** – PR #949 introduces a `default_queue_mode` field in `config.json`, moving queue mode from a session-only setting to a persistent, configurable default. This suggests a trend toward **user-defined presets**.
- **Enhanced cron/cross-account attribution** – PR #948 adds origin metadata for cron deliveries, which points toward **multi-account auditing** and **traceable automation workflows**.
- **Tool filtering granularity** – PR #946's dynamic `tool_filter_groups` logic (merged) hints at upcoming support for **per-session tool visibility** without losing native API capabilities.

**Prediction:** The next minor release (v0.x) will likely include these three features, with a focus on **admin-oriented configuration** and **agent failure hardening**.

### 7. User Feedback Summary
No direct user comments or reactions are present in this dataset (0 reactions on any PR/issue). However, **indirect pain points** can be inferred from the PR content:

- **Pain Point A:** "My agent crashed and the channel got flooded with internal Zig logs." → Fix in #951.
- **Pain Point B:** "Cron agents don't know which account triggered them, making audit logs useless." → Fix in #948.
- **Pain Point C:** "The system prompt redacts dates as phone numbers, breaking my workflow." → Fix in #945.
- **Satisfaction Signal:** The quick turnaround on #945 and #946 (submitted 8–9 days ago, merged today) suggests maintainers are **actively listening to edge cases**.

### 8. Backlog Watch
**Unanswered or Stale Items needing maintainer attention:**

- **None identified.** All four open PRs (#951, #949, #948, #950) were created or updated **yesterday (2026-06-10)** and are under active review. No Issues have been opened or updated in the last 24h. The backlog is currently clean.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the IronClaw project digest for June 11, 2026.

---

### IronClaw Project Digest: 2026-06-11

### 1. Today's Overview
IronClaw is in an intense phase of development for its "Reborn" architecture, with significant activity across both the core engine and the new WebUI v2 surface. Today saw high velocity with 50 updated pull requests (22 merged/closed) and a heavy focus on fixing regressions and closing gaps found during local testing. The project is actively stabilizing the Reborn WebUI, fixing bugs in provider configuration, Slack integration, and credential management, while also advancing features like attachment handling and automation panels. A notable concern is the community’s blocked dependency on crates.io, where versions 0.25.0 through 0.27.0 remain unpublished.

### 2. Releases
**No new releases today.** The last tagged release was `v0.27.0` on April 29, 2026. A pending release PR (#3708) has been open since May 16 but not yet merged, which would bump the main crate to `v0.29.1` with breaking changes to `ironclaw_common` and `ironclaw_skills`.

### 3. Project Progress
**22 pull requests were merged or closed today**, representing major advances in stability and feature completeness for the Reborn stack.

- **Slack Automation & Tenant Identity:** The personal-scope triggered-event delivery for Slack was completed (#4730), enabling end-to-end DM delivery for automated runs. Slack was also enabled for QA Railway deployments (#4739).
- **Credential & Auth Fixes:** Manual token runtime credential selection was fixed, ensuring they satisfy runtime requests without stored provider-scope metadata (#4742). Several PRs closed the loop on binding auth evidence to tenant scope (#4585, #4603).
- **Provider & Configuration Stability:** A critical fix for strict-mode providers rejecting tool calls with null-for-unset-optionals was merged (#4642). The Reborn setup API behavior was documented (#4607).
- **UX & WebUI:** The "Always Allow" approval affordance was restored for the WebUI v2 (#4717). The Reborn serve/WebUI testing flow was documented along with a launcher script (#4652). A bug causing agent avatars to show "IC" text instead of the IronClaw icon was fixed (#4734).
- **Test Coverage:** A browser-driven, full-stack E2E test for the Reborn WebUI was closed (#4604), and an epic to build out end-to-end smoke coverage was created (#4632), signaling a push for better QA.

### 4. Community Hot Topics
The most active issue remains a blocker for downstream consumers.

- **#3259 - Publish 0.25.0–0.27.0 to crates.io** (14 comments) - [Link](https://github.com/nearai/ironclaw/issues/3259)
  This is the most commented issue. The project has tagged releases up to v0.27.0, but only v0.24.0 is published on crates.io. Downstream projects are stuck on an older version and potentially exposed to CVEs in `wasmtime 28.x`. The underlying need is for the maintainers to unblock the release pipeline so the community can consume the latest features and security fixes.

- **#3036 - Configuration-as-Code Epic** (6 comments) - [Link](https://github.com/nearai/ironclaw/issues/3036)
  This epic for declarative configuration continues to generate discussion, reflecting a strong operator desire for a single, schematized, auditable configuration method instead of the current mix of env files, JSON settings, and install scripts.

### 5. Bugs & Stability
High activity on bug fixes today, addressing several critical and high-severity issues identified during Reborn WebUI testing. Fix PRs are in place for most.

**Critical:**
- **#4703 - Conversation cannot use NEAR AI provider after successful setup** - [Link](https://github.com/nearai/ironclaw/issues/4703)
  A user can test a connection successfully but then the provider fails to activate for conversations. A fix was attempted in the closed issue #4673, and a more comprehensive fix is in PR #4731.
- **#4704 - Approval loop for builtin.http tool** - [Link](https://github.com/nearai/ironclaw/issues/4704)
  A user approval loop repeats after an `invalid_input` failure without actionable error details. No fix PR linked yet.
- **#4741 - Opaque "Invalid master key" error** - [Link](https://github.com/nearai/ironclaw/issues/4741)
  A new issue report where a corrupt secrets key file fails with a non-actionable error. No fix PR linked.

**High:**
- **#4729 - NEAR AI login broken for local builds** - [Link](https://github.com/nearai/ironclaw/issues/4729)
  `private.near.ai` rejects callback URLs that aren't its own, breaking local development. No fix PR linked.
- **#4642 - Strict-mode providers reject null-for-unset-optionals** (CLOSED) - [Link](https://github.com/nearai/ironclaw/issues/4642)
  A critical compatibility bug affecting most first-party tools with strict LLM providers. **Fix was merged today.**
- **#4673 - NEAR AI provider save fails silently** (CLOSED) - [Link](https://github.com/nearai/ironclaw/issues/4673)
  A key onboarding blocker. **Fix was merged today in PR #4731.**

**Medium:**
- **#4740 - Slack tool parameter schema missing types** - [Link](https://github.com/nearai/ironclaw/issues/4740)
  LLMs guess wrong parameters because the schema only declares `action`. No fix PR linked.
- **#4708 - Generated code lacks syntax highlighting** - [Link](https://github.com/nearai/ironclaw/issues/4708)
- **#4707 - Conversation page font size too small** - [Link](https://github.com/nearai/ironclaw/issues/4707)

### 6. Feature Requests & Roadmap Signals
Several new issues and PRs signal the near-term roadmap direction.

- **Agent-Driven Trace Commons Onboarding** (#4559 PR): A major feature allowing users to onboard to Trace Commons via a simple invite link through the chat agent, replacing a complex CLI flow. High likelihood for inclusion in the next release.
- **Attachment Web UX** (#4738 PR & #4670 PR): The frontend and backend for uploading and processing file attachments in the Reborn WebChat v2 SPA is being wired up. Likely to land in the next version.
- **Programmatic MCP Server Configuration** (#4735 PR): This adds an API to install and update MCP server configurations programmatically. A clear sign of the platform maturing for advanced integrations.
- **Reborn Observability** (#4588 PR & #4737 PR): Adding seams for trajectory observers and documenting operator observability contracts. This is a strong signal that the team is preparing for production monitoring and benchmarking.
- **Automations Panel Refactor** (#4745 PR): The plan to back the WebUI automations panel with a proper repository instead of routing reads through the agent loop, improving performance and architecture.

### 7. User Feedback Summary
Real user pain points are heavily concentrated on the new Reborn WebUI's first-run experience and stability, captured in the "IronClaw Reborn Local Testing Findings" epic (#4692).

- **Dissatisfaction:** Users are frustrated by a "broken first-run experience." The onboarding flow for NEAR AI credentials is broken (#4673, #4703), the model provider configuration system is fragile (#4683), and authorization flows do not recover from failure (#4706). Users also report a lack of clarity in tool approval modals (#4701).
- **Pain Points:** Clicking links in responses navigates away from the conversation (#4733), unsent drafts are lost (#4724), and the composer remains interactive while the assistant is working (#4725). The lack of user/assistant identity in the chat UI (#4722) is also a noted polish issue.
- **Use Cases:** The primary use case being tested is the local setup and basic chat workflow for the Reborn WebUI. The user for the Slack tool (#4740) demonstrates a need for reliable tool integration with clear parameter schemas.

### 8. Backlog Watch
- **#3259 (Publish to crates.io):** Unaddressed for 37 days. This is the single biggest blocker for the external Rust community. The pending release PR (#3708) has not been merged.
- **#3036 (Configuration-as-Code Epic):** Unaddressed for 44 days. This is a long-running request for a fundamental usability improvement that would reduce operator friction significantly.
- **#4741 (Opaque "Invalid master key" error):** Newly filed, no maintainer response or fix PR yet.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for June 11, 2026.

---

## LobsterAI Project Digest — 2026-06-11

### 1. Today's Overview
Project activity is **high**, driven by the release of the `2026.6.9-10` update and a major batch of stale PRs being merged/closed. While there were 0 issues updated in the last 24 hours, 22 pull requests were updated, with **20 of those being merged or closed**. This cleanup (including many `stale`-labeled PRs from early April) suggests a focused effort to reduce technical debt and stabilize the codebase post-release. The single new release (`2026.6.10`) bundles significant new features including data migration, local callback login, and task completion notifications.

### 2. Releases
**New Version:** `LobsterAI 2026.6.10` (published 2026-06-10)  
**GitHub:** [Release Page](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.6.10)

**What's Changed:**
- **Data Migration:** Added user data backup and restore functionality (PR #2125).
- **Authentication:** Introduced a local callback login flow, likely for OAuth or SSO support (PR #2122).
- **Settings:** Began surfacing "OpenCla" (likely OpenClaw) settings in the UI.
- **UI Polish:** Refined markdown rendering, code block syntax highlighting (One Dark/Light), and model selector styling (PR #2139).
- **Windows Fixes:** Fixed the NSIS installer initialization and revamped the engine loading page (PR #2142); fixed in-app Windows updates (PR #2141).
- **Bug Fixes:** Preserved target backups, Cowork sessions, runtimes, and MCP packages during restore operations (PR #2138).

**Break Changes / Migration Notes:** None explicitly documented, but users relying on data migration should verify backup integrity post-update.

### 3. Project Progress
**Merged/Closed PRs (20 total):** The bulk of activity involved the release branch (`2026.6.8`) and a sweeping closure of 12+ stale PRs.

**Key Feature Advances:**
- **Task Completion Notifications:** Restored the ability to bring the main window back from task completion notifications, including macOS Notification Center click handling (PR #2134).
- **Scheduled Tasks (Stale PRs Merged):** Added a "Test Task" button to the creation form (PR #1486), a local macOS notification channel (PR #1489), and fixed a bug where delivery channels weren't updating after editing (PR #1490).
- **Cowork Session Pruning:** Prevented long conversations from exceeding model context windows by introducing automatic session trimming (PR #1499).
- **Agent Settings Migration:** Replaced plain text fields for agent guidance files (`IDENTITY.md`, etc.) with a rich Markdown editor (PR #1503).

**Bug Fixes Closed:**
- Fixed disabled skills still being injected into prompts (PR #1485, PR #1501).
- Fixed `activeSkillIds` not syncing after saving an Agent's skill list without switching agents (PR #1505).
- Fixed POPO IM bot requiring an AES key when enabled (PR #1507).
- Added Windows "close button" behavior (minimize to tray vs. quit) (PR #1497).
- Bumped CI dependencies (Electron, electron-builder, GitHub Actions) via multiple `dependabot` PRs.

### 4. Community Hot Topics
*No issues were updated in the last 24 hours, and no PRs had significant comment threads or reactions.* The most active discussion area this cycle has been the **release branch** (PR #2140) which coordinated the three major features. The lack of community interaction suggests the team is operating in a controlled release cadence with internal testing.

### 5. Bugs & Stability
**Severity: Medium**

- **Bug:** Disabled skills (`activeSkillIds`) were persisting in system prompts, causing unwanted behavior in Cowork sessions.  
  **Status:** Fixed (PR #1485, PR #1501, PR #1505).

- **Bug:** Scheduled task delivery channels (e.g., Feishu, local notification) were not reflecting edits in the UI.  
  **Status:** Fixed (PR #1490).

- **Bug:** Windows in-app update mechanism was broken.  
  **Status:** Fixed (PR #2141).

- **Bug:** NSIS installer initialization caused destructive behavior.  
  **Status:** Fixed, with a redesigned engine loading page (PR #2142).

- **Regression Risk:** The data migration restore (PR #2138) explicitly preserves Cowork sessions and MCP packages, but users with complex backup/restore workflows should test thoroughly.

### 6. Feature Requests & Roadmap Signals
- **User-Requested Features (inferred from merged PRs):**
    - **Data portability:** Backup/restore (PR #2125) addresses a long-standing user need for migration.
    - **Local notification channels:** For scheduled tasks (PR #1489), users wanted macOS native notifications.
    - **Rich text editing for Agent config:** Replacing plain text with Markdown (PR #1503) indicates a push toward better user experience for power users.
- **Predicted Next Version:** Expect continued polish on the data migration pipeline, completion of the OpenClaw settings integration, and further refinements to the Windows installer. The session pruning feature (PR #1499) is likely to be enabled by default in a minor release.

### 7. User Feedback Summary
*No direct user feedback (issues or comments) was recorded in the last 24 hours.* However, the PRs give insight into recurring pain points:

- **Pain Point:** "My disabled skills keep getting called in chat." (Resolved)
- **Pain Point:** "I can't test a scheduled task without saving it first." (Resolved via "Test Task" button)
- **Pain Point:** "Editing a task's notification channel doesn't stick." (Resolved)
- **Pain Point:** "I changed my Agent's skills, but they don't apply to my current session." (Resolved)

**Satisfaction:** The rapid iteration and closure of these long-standing bugs suggests the team is responsive to user friction, but the lack of new issue creation may also indicate a stable or low-engagement user base.

### 8. Backlog Watch
- **PR #1277 (OPEN) — `chore(deps-dev): bump the electron group`**  
  *Updated 2026-06-10* — This dependabot PR bumps Electron from 40.x to 42.x and electron-builder. Despite being open since April 2, it has been updated recently. **Maintainer attention required** to ensure compatibility before the next release, as the jump is significant.

- **PR #2142 (OPEN) — `fix: fix nsis destructive init...`**  
  *Updated 2026-06-10* — This is a currently open PR for a critical Windows fix. It should be prioritized for merge to avoid regressions on Windows deployments.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-11

## Today's Overview
The Moltis project exhibited very low activity over the past 24 hours, with only one open issue updated and no pull requests or new releases. The sole issue is a configuration-related bug report, indicating no active feature development or community-driven improvements were merged today. While the project remains stable, the lack of merged PRs or releases suggests a quiet maintenance phase. The maintainers appear to be in a low-engagement window, with no visible forward momentum on new features or fixes.

## Releases
None. No new releases were published in the last 24 hours.

## Project Progress
No pull requests were merged or closed in the last 24 hours. No features or fixes advanced through code review, and no progress was made on integrating changes from the community.

## Community Hot Topics
The only active issue is **#1114**, a bug report regarding an unconfigured 'coqui' provider. It has zero comments and no reactions, so community discussion is currently absent. The issue itself may be a straightforward configuration oversight, but the lack of engagement suggests it is not a widespread concern among users.  
- [Issue #1114: [Bug]: provider 'coqui' not configured](https://github.com/moltis-org/moltis/issues/1114)

## Bugs & Stability
One bug was reported today, classified as **minor** severity:
- **Issue #1114** – `provider 'coqui' not configured`: The user is running the latest Moltis version but encountered a configuration error for the 'coqui' provider. The issue includes a preflight checklist confirmation that existing bug reports were searched. No fix PR exists yet, and there are no comments from maintainers.

No crashes or regressions were reported.

## Feature Requests & Roadmap Signals
No feature requests were submitted or discussed in the last 24 hours. There are no signals pointing toward upcoming roadmap changes or new capabilities.

## User Feedback Summary
User feedback today is limited to a single bug report. The user appears to have followed proper reporting procedures (used latest version, searched existing issues) and is likely experiencing a configuration friction point. No satisfaction or dissatisfaction signals beyond this one report.

## Backlog Watch
No issues or PRs have gone unanswered beyond a reasonable timeframe, as the only open item is from yesterday. No items currently require maintainer attention beyond triaging the new bug report.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-11

## 1. Today's Overview

CoPaw is experiencing a **high-activity period** with 37 issues and 50 PRs updated in the last 24 hours, alongside two new releases (v1.1.11 and v1.1.11-beta.3). The project closed 18 issues and merged/closed 30 PRs today, indicating strong maintainer throughput. Activity is concentrated around **infrastructure modernization** (AgentScope 2.0 migration, Runtime 2.0 architecture), **packaging/build reliability** (Windows CI fixes, Discord conda-unpack), and **bug fixes** (DingTalk empty cards, file guard preview, error message surfacing). The community is actively reporting UX regressions in desktop and web UI, particularly around session switching performance and tool-call visibility.

---

## 2. Releases

### v1.1.11 (released 2026-06-10)
- **Added**:
  - **Free Model OAuth**: Zero-config free models with one-click OAuth authentication ([#5049](https://github.com/agentscope-ai/QwenPaw/pull/5049))
  - **Xiaomi MiMo Provider**: Xiaomi MiMo Token Plan as a built-in provider ([#4722](https://github.com/agentscope-ai/QwenPaw/pull/4722))
- **Breaking changes**: None explicitly noted
- **Migration notes**: Standard upgrade path; existing configurations should remain compatible

### v1.1.11-beta.3 (released 2026-06-10)
- **Added**:
  - Enhanced `make-skill` flow supporting self-evolving skill creation ([#4857](https://github.com/agentscope-ai/QwenPaw/pull/4857))
- **Removed**:
  - Redundant channel-tests CI workflow ([#5056](https://github.com/agentscope-ai/QwenPaw/pull/5056))

---

## 3. Project Progress

### Merged/Closed PRs Today (Notable):

| PR | Description | Status |
|---|---|---|
| [#5080](https://github.com/agentscope-ai/QwenPaw/pull/5080) | Release v1.1.11 | Merged |
| [#5081](https://github.com/agentscope-ai/QwenPaw/pull/5081) | File guard: allow previewing files outside workspace | Merged |
| [#5079](https://github.com/agentscope-ai/QwenPaw/pull/5079) | Surface original API error reason in user-facing messages | Merged |
| [#5082](https://github.com/agentscope-ai/QwenPaw/pull/5082) | Pin aiohttp<=3.14.0 to fix Windows build SSL error | Merged |
| [#5083](https://github.com/agentscope-ai/QwenPaw/pull/5083) | Use certifi CA bundle for Windows build verification | Merged |
| [#5084](https://github.com/agentscope-ai/QwenPaw/pull/5084) | Compile-check discord after conda-unpack | Merged |
| [#4858](https://github.com/agentscope-ai/QwenPaw/pull/4858) | Auth: scope web login to agents | Merged |

### Architecture Advances:
- **Runtime 2.0 modular architecture** with enhanced `ToolCoordinator` layer (PR [#5078](https://github.com/agentscope-ai/QwenPaw/pull/5078), open) — decomposes monolithic Runner into composable units
- **Agent OS Driver** unified abstraction for MCP/A2A/ACP capabilities (PR [#5067](https://github.com/agentscope-ai/QwenPaw/pull/5067), open)
- **Token usage info** per conversation (PR [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433), open) — under review

---

## 4. Community Hot Topics

### Most Active Issues (by comment count):

1. **[#4342](https://github.com/agentscope-ai/QwenPaw/issues/4342)** (CLOSED) — Unit test coverage Phase 5 (11 comments) — Foundation for testing `local_models/`, `providers/`, `tunnel/`, `utils/`

2. **[#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)** (OPEN, 👍2) — **Migrate backend from AgentScope 1.x to AgentScope 2.0** (8 comments) — Breaking change discussion around architecture upgrade

3. **[#4878](https://github.com/agentscope-ai/QwenPaw/issues/4878)** (CLOSED) — WeChat push delivery failure for scheduled tasks (7 comments) — Root cause identified in channel.py

4. **[#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666)** (CLOSED) — Models configuration page lost after new session (7 comments) — Critical UX regression

5. **[#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064)** (OPEN) — Agent-generated scheduled tasks fail to trigger and cannot be edited (5 comments) — Core feature regression

### Underlying Needs:
- **WeChat integration reliability** is a recurring pain point (multiple tickets about push failures)
- **Desktop session management** — users need persistent port assignment ([#4733](https://github.com/agentscope-ai/QwenPaw/issues/4733)) and auto-update capability ([#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669))
- **Large conversation handling** — users report severe UI lag with >4 sessions or high-token conversations

---

## 5. Bugs & Stability

### Critical Severity:

| Issue | Description | Fix Status |
|---|---|---|
| [#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064) | Agent-generated **scheduled tasks cannot trigger or be edited** | No fix PR yet |
| [#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) | Local Qwen 3.6-27B model **silently fails** after v1.1.9 | Regression; works in v1.1.5.post2 |
| [#5053](https://github.com/agentscope-ai/QwenPaw/issues/5053) | **Windows Tauri desktop client** — 4+ sessions cause 10-second UI lag | No fix PR yet |
| [#4917](https://github.com/agentscope-ai/QwenPaw/issues/4917) | Chat UI freezes when switching from other tabs with large history | No fix PR yet |

### High Severity:

| Issue | Description | Fix Status |
|---|---|---|
| [#5052](https://github.com/agentscope-ai/QwenPaw/issues/5052) | **Tool calls fail** after a few rounds: `got an unexpected keyword argument 'arguments'` | No fix PR yet |
| [#5031](https://github.com/agentscope-ai/QwenPaw/issues/5031) | Skill slash invocation **displays SKILL.md content** instead of executing | No fix PR yet |
| [#4878](https://github.com/agentscope-ai/QwenPaw/issues/4878) | WeChat push delivery **silently fails** with `ret=-3` | Closed; root cause identified |
| [#4834](https://github.com/agentscope-ai/QwenPaw/issues/4834) | **MCP process accumulation** across restarts | Closed |

### Recently Fixed:
- [#5081](https://github.com/agentscope-ai/QwenPaw/pull/5081) — File guard: workspace preview permission fix
- [#5079](https://github.com/agentscope-ai/QwenPaw/pull/5079) — Error messages now surface original API reason
- [#5061](https://github.com/agentscope-ai/QwenPaw/pull/5061) — DingTalk empty AI card fix
- [#5036](https://github.com/agentscope-ai/QwenPaw/pull/5036) — Session filename duplication & Desktop inter-agent call failures
- [#5051](https://github.com/agentscope-ai/QwenPaw/pull/5051) — Desktop port persistence across restarts

---

## 6. Feature Requests & Roadmap Signals

### High-Value Community Requests:

| Request | Issue | Interest |
|---|---|---|
| **Visual Model Fallback** — separate `visual_model` config for text-only LLMs | [#4992](https://github.com/agentscope-ai/QwenPaw/issues/4992) | 👍1 |
| **Token usage visibility** per conversation | [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) | Under review |
| **Context compression** via Headroom integration (60-95% token savings) | [#5063](https://github.com/agentscope-ai/QwenPaw/issues/5063) | Just opened |
| **System tray icon** for Windows desktop (minimize to tray) | [#3751](https://github.com/agentscope-ai/QwenPaw/issues/3751) | Long-standing |
| **Finer file guard control** (read-only whitelist vs blacklist) | [#4356](https://github.com/agentscope-ai/QwenPaw/issues/4356) | Open |
| **Custom endpoint** for DingTalk private/enterprise deployment | [#4887](https://github.com/agentscope-ai/QwenPaw/issues/4887) | Open |
| **Sub-agent task visibility** during execution | [#4923](https://github.com/agentscope-ai/QwenPaw/issues/4923) | Open |

### Next-Version Predictions (v1.2.0 likely):
- **AgentScope 2.0 migration** ([#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)) — the most significant architectural change, already under discussion
- **Runtime 2.0 modular architecture** ([#5078](https://github.com/agentscope-ai/QwenPaw/pull/5078)) — composable runtime units
- **Agent OS Driver** ([#5067](https://github.com/agentscope-ai/QwenPaw/pull/5067)) — unified MCP/A2A/ACP abstraction
- **DataPaw plugin** ([#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622)) — 12 BI skills for data analysis

---

## 7. User Feedback Summary

### Pain Points:
- **Desktop performance**: Multiple users report severe UI lag when switching between 3-4 sessions on Windows Tauri client ([#5053](https://github.com/agentscope-ai/QwenPaw/issues/5053), [#4917](https://github.com/agentscope-ai/QwenPaw/issues/4917))
- **Tool execution opacity**: Agent actions only visible after completion; users can't monitor or cancel long-running operations ([#4170](https://github.com/agentscope-ai/QwenPaw/issues/4170), [#4865](https://github.com/agentscope-ai/QwenPaw/issues/4865))
- **Task reliability**: Agent-generated scheduled tasks cannot trigger or be edited ([#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064))
- **WeChat integration**: Push failures and configuration difficulties persist ([#4878](https://github.com/agentscope-ai/QwenPaw/issues/4878))
- **Local model regression**: Qwen 3.6-27B silent failures after v1.1.9 ([#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989))

### Use Cases:
- **Enterprise DingTalk deployment**: Need custom endpoints for private/enterprise installations ([#4887](https://github.com/agentscope-ai/QwenPaw/issues/4887))
- **Data analysis**: Community contributed DataPaw plugin with 12 BI skills ([#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622))
- **Token-cost optimization**: Users actively seeking Headroom integration for 60-95% token savings ([#5063](https://github.com/agentscope-ai/QwenPaw/issues/5063))

### Satisfaction Signals:
- **Auto-update coming**: Desktop auto-updater PR ([#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669)) addresses long-standing UX request
- **Token usage feature under review**: Community-requested per-conversation token tracking ([#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433))

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention:

| Issue | Created | Age | Priority |
|---|---|---|---|
| [#4057](https://github.com/agentscope-ai/QwenPaw/issues/4057) | 2026-05-06 | 35 days | **High** — AgentScope tracing initialization missing; users must patch source code |
| [#3751](https://github.com/agentscope-ai/QwenPaw/issues/3751) | 2026-04-23 | 49 days | **Medium** — Windows system tray feature request with community interest |
| [#4356](https://github.com/agentscope-ai/QwenPaw/issues/4356) | 2026-05-14 | 27 days | **Medium** — Finer file guard control for agent safety |
| [#4923](https://github.com/agentscope-ai/QwenPaw/issues/4923) | 2026-06-03 | 8 days | **Medium** — Sub-agent task visibility during execution |

### PRs Under Review:

| PR | Created | Status | Notes |
|---|---|---|---|
| [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) | 2026-05-15 | **Under Review** | Token usage info — community-requested feature |
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) | 2026-05-22 | **Under Review** | DataPaw plugin (first-time contributor) |
| [#4858](https://github.com/agentscope-ai/QwenPaw/pull/4858) | 2026-06-01 | **Under Review** | Agent-scoped web login (first-time contributor) |

---

**Project Health Summary**: CoPaw is in a **high-velocity integration phase** with two releases today and significant architectural work (Runtime 2.0, AgentScope 2.0 migration) in flight. Desktop and web UI performance regressions are the top community pain points, but the team is actively addressing build stability and error reporting. The community contribution pipeline is healthy with 4+ first-time contributor PRs active.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the ZeroClaw project digest for June 11, 2026.

---

## ZeroClaw Project Digest — 2026-06-11

### Today's Overview
ZeroClaw is in a period of intense development activity, with **41 issues** and **50 pull requests** updated in the last 24 hours. The project maintains a high velocity, closing 19 issues and merging/landing 23 PRs during this period, while 27 PRs remain open. Activity is heavily concentrated on the upcoming **v0.8.0 stable release** (tracker #7112), the WASM plugin program for v0.8.2 (#7314), and critical bug fixes targeting runtime stability, provider correctness, and the `zerocode` TUI dashboard. A significant number of open issues are tagged with `risk: high` (18 items) and `priority:p1` (5 items), indicating a focused push to resolve critical blockers. No new releases were published today.

### Releases
**None.** No new versions of ZeroClaw were released in the last 24 hours. The project appears to be preparing for a v0.8.0 stable release.

### Project Progress
**23 pull requests** were closed/merged today, reflecting a diverse set of improvements:

- **Runtime & Agent Stability:** Multiple fixes landed for the core agent loop, including a fix to prevent final CLI output clones (#7353) and a comprehensive fix for the `zerocode` dashboard to properly distinguish between loading, error, and live states (#7444).
- **Documentation & Architecture:** A massive XL-sized PR (#7365) reworks the project's mdBook documentation, deriving provider and config surfaces directly from source code, which should significantly improve documentation accuracy.
- **CI/CD Infrastructure:** A CI fix (#7466) restored master compilation after a merge batch, and a separate PR (#7352) improved logging for dashboard cron settings failures.
- **Channel Fixes:** A fix for the Telegram channel (#7438) corrected a prompt that was discouraging tool use, improving compatibility with smaller models.

### Community Hot Topics
The most active discussions highlight deep architectural concerns and user blocking issues:

- **[Feature]: A better LOGO of ZeroClaw (#4710)** — *Closed, 20 comments.* A lighthearted but persistent discussion with 20 comments about redesigning the project logo. While closed, it shows community engagement in the project's identity.
- **[Feature]: Provide a "full" docker image (#3642)** — *Open, 12 comments, 3 👍.* A high-demand request from non-technical users for an all-in-one Docker image. This is a persistent pain point that lowers the barrier to entry.
- **[Bug]: 单轮对话以及多轮对话会出现丢失 user message的现象 (#6034)** — *Open, 6 comments. Severity S1.* A critical bug where user messages are lost in both single and multi-turn conversations. The issue points to a `400 Bad Request` error with a custom API provider, suggesting a provider compatibility issue.
- **[Bug]: tool_search not in default_auto_approve → deferred_loading+webhook silently hangs (#6721)** — *Open, 5 comments.* A high-risk bug where the `tool_search` function (critical for MCP tool loading) is not auto-approved, causing silent 120-second hangs in webhook mode. This is a significant usability and stability issue for automated workflows.

### Bugs & Stability
Today’s activity reveals a focus on stability, with seven new bug reports opened:

- **S1 - Workflow Blocked:**
    - **[#7469]** Default editor is "vi" but the Docker container does not include it. A minor but immediate blocker for users in the container environment who try to edit text.
    - **[#7263]** Subagents do not inherit `cwd` in ACP sessions, causing LLM failures when code repositories are outside the expected workspace.
- **S2 - Degraded Behavior:**
    - **[#7436]** `image_info` tool output fails to reach multimodal/vision models unless called with an absolute POSIX path, silently dropping relative paths. A fix is likely complex due to varying runtime contexts.
- **Fix PRs in Flight:**
    - **[#7456]** (Open) applies MCP `ToolAccessPolicy` to eager MCP registration, closing a security gap where eager MCP tools were not subject to the same policy as deferred ones.
    - **[#7465]** (Open) fixes delegate memory isolation, a critical fix for multi-agent workflows where delegate memory was not being properly scoped.
    - **[#7463]** (Open) fixes a bug where skills in `<agent>/workspace/skills/` were silently ignored because the loader was searching the global data directory instead.

### Feature Requests & Roadmap Signals
The roadmap is clearly defined by three main trackers:

1.  **v0.8.0 Stable (#7112):** This tracker is the main staging ground for breaking changes, config cleanup, and runtime/provider correctness. It is the immediate next milestone.
2.  **v0.8.1 Integration Queue (#6970):** Focuses on adding new channels, providers, and tools. The next minor release after v0.8.0.
3.  **v0.8.2 WASM Plugin Program (#7314):** A longer-term architectural shift towards a lighter core, as detailed in RFC #6165.

High-interest user requests include:
- **Native Dynamic-Library Plugin System (RFC #7420):** A community-led RFC proposing a plugin system via `.so`/`.dylib` files to replace the current monolithic build, directly addressing the "lighter core" vision.
- **Pre-turn routing intent extraction (#7431):** A proposed feature to automatically detect routing requests in natural language before the main LLM call, improving the user experience of the `send_via` feature.
- **`zerocode` TUI enhancements (#7467, #7468):** Users are requesting more flexible text editing (arrow keys) and the ability to rename aliases for agents, providers, and MCP servers directly from the TUI.

### User Feedback Summary
- **Pain Point (High):** **Docker and setup complexity.** Issue #3642 (full Docker image) remains a top-voted request with a long discussion. The "vi" missing from the container (#7469) is a fresh example of friction for new users.
- **Pain Point (Medium):** **MCP and policy complexity.** The bug around `tool_search` and auto-approve (#6721) highlights a configuration trap that can silently break automated workflows, a clear source of frustration for power users.
- **Satisfaction Signal:** The community is actively submitting RFCs (#7420, #7415) and discussing deep architectural changes, indicating a healthy, engaged, and technically sophisticated user base that is invested in the project's future direction.
- **Friction Point:** The "vi" issue and the dashboard state confusion (resolved by #7444) point to a need for better default ergonomics and visual feedback in the `zerocode` TUI, especially for users on macOS.

### Backlog Watch
The following issues merit maintainer attention due to their age, community value, or potential to stall other work:

- **[#3642] Provide a "full" docker image** — *Open since March 15.* A top-3 most commented issue. Blocked by build complexity, but an RFC or a community-led PR would be a significant win for UX.
- **[#6165] RFC: Prefer a lighter ZeroClaw core through external integrations** — *Open since April 27.* This is a foundational architectural discussion. It directly conflicts with the current monolithic tool integrations and needs a maintainer decision to guide the roadmap.
- **[#6034] 失 user message** — *Open since April 23.* This is a workflow-blocking bug (S1) that has been open for over a month. While it may be provider-specific, the lack of resolution could be driving users away.
- **[#5810] `security.otp.gated_actions` silently accepts unknown action names** — *Closed, but resolved only now after being open since April 16.* This was a security-visible bug where config could appear to protect actions it did not. The resolution time (nearly two months) for a security-config validation issue is a concern.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*