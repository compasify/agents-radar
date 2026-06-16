# OpenClaw Ecosystem Digest 2026-06-16

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-16 00:36 UTC

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

# OpenClaw Project Digest — June 16, 2026

## 1. Today's Overview

OpenClaw is in an extremely active development cycle, with **500 issues and 500 PRs updated in the last 24 hours**, though the vast majority (445 open issues, 436 open PRs) remain open — signaling a growing backlog that may strain maintainer bandwidth. The project had **no new releases today**, but the volume of community-driven enhancements and bug reports suggests strong user engagement, particularly around security, session state integrity, and channel-specific reliability. A notable **P0 critical memory leak (Issue #91588)** and several high-severity regressions (Issues #90325, #31583) indicate that recent shipping velocity may have outpaced stability testing. Overall, the project appears healthy but is accumulating technical debt, especially in security boundaries and multi-channel message routing.

## 2. Releases

**No new releases today.**

## 3. Project Progress

Despite high open-PR counts, several fixes and features advanced through the merge pipeline today:

**Merged/Closed PRs:**
- **#93448** — `fix(guards): allow auth profile sqlite reader` (XS, merged) – Unblocks CI by permitting read-only SQLite access through named bootstrap owner
- **#68936** – `Autofix: add PR review autofix pipeline + Windows daemon` (XL, closed) – Large-scope PR review automation and Windows daemon supervision; closed after review
- **#90003** – `feat(policy): cover exec approvals artifact` (XL, closed) – Adds policy evidence for exec-approvals runtime artifact, including per-agent security rules
- **#93428** – `fix(agents): resolve configured default model in runEmbeddedAgent` (M, closed) – Fixes #93419 where plugin-triggered embedded agents hardcoded OpenAI defaults
- **#93427** – `fix(tui): show activity indicator for system-injected runs` (S, closed) – TUI now shows spinner/running state for cron, webhook, and bridge-notify events

**Other notable PR activity (updated but still open):**
- **#82572** (XL, P1) – Persist followup queues across gateway restarts via SQLite — in proof stage
- **#89123** (L, P2) – Refactor transcript writers through session accessor seam — paves way for SQLite transcript storage
- **#88968** (L, P1) — Critical fix for memory flush failures aborting user replies — ready for maintainer review
- **#90167** (M, P1) – Resolve `${ENV_VAR}` plugin config placeholders at runtime load
- **#91462** (L, P1) – Strip reasoning content from TTS summarization output to fix garbled speech

**Notable CLOSED issues today:**
- **#44993** – Heartbeat/cron stale timestamp bug resolved
- **#93263** – Telegram "not supported" reply bug on 2026.6.8-beta.1 — resolved via PR

## 4. Community Hot Topics

**Most Active Issues (by comment count):**

1. **#75** — [OPEN] Linux/Windows Clawdbot Apps (109 comments, 79 👍)
   - *Link: openclaw/openclaw Issue #75*
   - The single most-requested feature, with massive community demand for desktop client parity across platforms. This has been open since January and remains the top community priority.

2. **#25592** — [OPEN] Text between tool calls leaks to messaging channels (32 comments, P1, security)
   - *Link: openclaw/openclaw Issue #25592*
   - A UX/security double-blow: internal processing output (error handling, narration) gets sent to Slack/iMessage. Community strong consensus this needs urgent fixing.

3. **#9443** — [OPEN] Prebuilt Android APK releases (25 comments, P2)
   - *Link: openclaw/openclaw Issue #9443*
   - Users want compiled Android binaries; build-from-source friction is a real adoption barrier.

4. **#22438** — [OPEN] Tiered bootstrap file loading (17 comments, P2)
   - *Link: openclaw/openclaw Issue #22438*
   - Power users want to avoid wasting LLM tokens on bootstrap files irrelevant to sub-agents/cron. Strong interest in token optimization.

5. **#32473** — [OPEN] Control UI requires HTTPS/localhost secure context (17 comments, 5 👍, regression)
   - *Link: openclaw/openclaw Issue #32473*
   - Docker/VPS users cannot access Control UI without HTTPS — a regression blocking many self-hosters.

6. **#22676** — [OPEN] Signal daemon stop() race condition (17 comments, P1, crash-loop)
   - *Link: openclaw/openclaw Issue #22676*
   - SIGUSR1 restart causes orphaned processes and send failures — a reliability blocker for Signal users.

7. **#32296** — [OPEN] Agent replies to previous message instead of current (15 comments, P1)
   - *Link: openclaw/openclaw Issue #32296*
   - Session context confusion — a fundamental UX issue where agent misaligns with conversation flow.

8. **#29387** — [OPEN] Bootstrap files in agentDir silently ignored (14 comments, 5 👍)
   - *Link: openclaw/openclaw Issue #29387*
   - Per-agent configuration doesn't work as documented; users cannot customize agent bootstraps.

**Underlying Needs Emerging from Hot Topics:**
The community is signaling a clear hierarchy of needs: **(1) Security by default** (masked secrets, tool call leakage, filesystem sandboxing), **(2) State reliability** (session context, race conditions, memory leaks), and **(3) Platform expansion** (Linux/Windows apps, prebuilt Android APKs, Telegram Business, Slack Block Kit). These aren't niche requests — they reflect the maturing user base moving from experimentation to production deployment.

## 5. Bugs & Stability

**Critical (P0):**
- **#91588** — Gateway memory leak: RSS grows from 350MB to 15.5GB over 2-3 days, causing repeated OOM crashes and `launchd-handoff` restart cycles. Environment: OpenClaw gateway process on what appears to be macOS. **No fix PR yet.**

**High Severity (P1, regressions or wide-impact):**

- **#90325** — Matrix channel dispatch broken in v2026.6.1: `TypeError: Cannot read properties of undefined (reading 'run')` — blocks all Matrix communication. Needs live repro. **No fix PR yet.**
  
- **#22676** — Signal daemon `stop()` race condition on SIGUSR1 restart: orphaned processes, port conflicts, send failures. **Linked PR open** (likely fix in progress).
  
- **#31583** — `exec` tool does not inherit `skills.entries.*.env` environment variables — regression that breaks secret injection for subprocesses. **Linked PR open** (#90167 may address).
  
- **#32473** — Control UI requires HTTPS/localhost secure context — regression blocking Docker/VPS users from accessing web UI. **No fix PR yet.**

- **#25592** — Text between tool calls leaks to messaging channels — security/UX issue affecting all channels. **No fix PR yet.**

- **#32296** — Agent replies to previous message instead of current message — session context confusion, causes conversation misalignment. **No fix PR yet.**

- **#31331** — Docker + Sandbox: workspace cannot mount properly — `workspaceAccess` broken in containerized setups. **No fix PR yet.**

- **#29387** — Bootstrap files in `agentDir` silently ignored — per-agent configuration broken; only workspace directory files injected. **No fix PR yet.**

- **#91931** — Preseeded SOUL.md/IDENTITY.md/USER.md cause OpenClaw to auto-complete bootstrap and delete user-provided BOOTSTRAP.md before first run — destructive behavior for new users. **No fix PR yet.**

- **#87327** — Isolated agent runs stall in runtime-plugins phase on 2026.5.22 — cron/isolated sessions fail silently. Needs live repro. **No fix PR yet.**

**Ongoing Stability Issues:**

- **#75380** — `provider-payload.jsonl` and `cache-trace.jsonl` grow unbounded — unbounded disk usage from diagnostic logs. **Linked PR open**.
- **#67417** — `openclaw backup create` fails with ENOENT when session file cleaned up during backup — race condition in backup tool. **No fix PR yet.**
- **#25574** — Config warnings logged repeatedly on every reload (thousands of duplicates) — logs spam. **No fix PR yet.**

## 6. Feature Requests & Roadmap Signals

**Most Requested Features (by community engagement + strategic importance):**

1. **#75** — Linux/Windows Clawdbot Apps — *Likely next version* — The #1 request with 79 👍 and 109 comments. Platform expansion is inevitable given the community size.

2. **#10659** — Masked Secrets (agent can USE but not SEE API keys) — *Likely next version* — 13 comments, 4 👍, strong security signal. With P1 priority and security impact, this aligns with the project's security focus.

3. **#22438** — Tiered bootstrap file loading — *Likely next version* — 17 comments, addresses token waste for power users. Aligns with cost-efficiency trends.

4. **#12602** — Slack Block Kit support — *Possible next version* — 13 comments, enables rich interactive messages in Slack.

5. **#12678** — Capability-based permissions for skills/tools — *Possible next version* — Default-deny high-risk actions; long open (Feb 6). Security-conscious feature.

6. **#6731** — Safe/unsafe ClawdBot (Rust rewrite suggestion) — *Unlikely near-term* — A bold but massive architectural change.

7. **#26370** — Per-agent cron isolation in multi-user deployments — *Possible mid-term* — Multi-user deployments are a growth area.

8. **#28300** — Theme customization system + Custom Theme Studio — *Possible next version* — UI polish signals project maturity.

**Predictions for Next Release:**
Based on priority tags, linked PRs, and the project's trajectory, the next release will likely include: **masked secrets** (#10659), **tiered bootstrap loading** (#22438, already has detailed spec), **exec approvals policy hardening** (#90003, already merged), **followup queue persistence** (#82572, PR active), and **Telegram message suppression fixes** (#85403, PR active). The memory leak (#91588) may be fast-tracked to P0 resolution given its severity.

## 7. User Feedback Summary

**Common Pain Points:**

- **"My agent talks to the wrong person / wrong channel"** — Multiple issues report message misrouting: tool call text leaks (#25592), session context confusion (#32296), sub-agent announce suppression broken (#8299), Mattermost open DM validation (#93237).

- **"Config doesn't work as documented"** — Deep frustration with per-agent bootstrap files being ignored (#29387), Docker Sandbox workspace mounting broken (#31331), Signal daemon race conditions (#22676), backup tool racing with session cleanup (#67417).

- **"I can't deploy this in production"** — Security concerns dominate: no masked secrets (#10659), no filesystem sandboxing (#7722), no capability-based permissions (#12678), memory trust tagging needed (#7707). Users want to use OpenClaw for sensitive workflows but can't trust the current security model.

- **"Deployment is too hard"** — Missing prebuilt Android APKs (#9443), no AWS deployment guide (#13597), lacking backup/restore utility (#13616). Friction between "works on my Mac" and "works in production."

- **"It's too expensive to run"** — Token waste from full bootstrap loading (#22438), tool schema overhead of ~3,500 tokens/session (#14785), unbounded log files (#75380). Users are cost-conscious as API bills grow.

**Positive Signals:**
- Community is proactively filing well-structured, detailed bug reports with reproduction steps — sign of a technically sophisticated user base invested in the project's success.
- Feature requests include thoughtful design proposals (e.g., #22438 tiered loading, #10659 masked secrets architecture).
- Users are deploying OpenClaw in diverse environments (VPS, Docker, multi-user, cron-based) — the project is being used seriously, not just as a toy.

**Satisfaction Indicators:**
- High comment counts on enhancement requests suggest users believe the project is responsive to feedback.
- The "clawsweeper" label system shows active maintainer triage, though some items linger (many issues tagged `needs-maintainer-review` + `needs-product-decision` since February).

## 8. Backlog Watch

**Issues Lacking Maintainer Attention (critical or high-importance, no linked PR):**

1. **#90325** — Matrix channel dispatch broken (P1, regression, since June 4) — **No fix PR, needs maintainer review.** Blocks all Matrix users on latest release.

2. **#32473** — Control UI requires HTTPS (P2, regression, since March 3) — **No fix PR, needs product decision.** Affects Docker/VPS users.

3. **#25592** — Tool call text leaks to channels (P1, since February 24) — **No fix PR, needs security review.** Fundamental security/UX issue.

4. **#32296** — Agent replies to previous message (P1, since March 2) — **No fix PR, needs maintainer review.** Conversation misalignment.

5. **#31331** — Docker Sandbox workspaceAccess broken (P1, since March 2) — **No fix PR, needs security review.** Blocks Docker deployments.

6. **#91931** — Preseeded bootstrap files delete user BOOTSTRAP.md (P1, since June 10) — **No fix PR, needs maintainer review.** Destructive, triggers for new users.

7. **#31583** — `exec` tool doesn't inherit skill-level env vars (P1, regression, since March 2) — **Linked PR open** (#90167). At least has movement.

8. **#22676** — Signal daemon race condition (P1, since February 21) — **Linked PR open.** Long-running issue with partial progress.

9. **#25574** — Config warning log spam (P1, since February 24) — **No fix PR yet.** Annoying but not blocking.

10. **#14785** — Tool schema token overhead (P2, since February 12) — **No fix PR, needs maintainer review.** Token waste issue ignored for 4+ months.

**PRs Needing Maintainer Review (high priority, ready state):**

- **#88968** — Critical fix for memory flush failures aborting user replies (P1, status: "ready for maintainer look") — Fixes #85645, which could be a major UX regression.
- **#85403** — Fix Telegram message-tool reply previews (P1, large, proof supplied with screenshot) — Technical polish for Telegram users.
- **#82572** — Persist followup queues across gateway restarts (P1, XL, proof supplied with video) — Important reliability improvement.
- **#90167** — Resolve config env vars for runtime plugin loads (P1, proof supplied) — Fixes #31583 (env var inheritance regression).

**Worrying Trend:**
Several P1 issues have been open since **February 2026** with no PR and no maintainer decision (e.g., #25592, #32296, #31331, #22676). The "needs-product-decision" label on many suggests product/roadmap indecision may be blocking security-critical fixes. The backlog is building faster than it's being cleared, which could lead to user churn if critical paths remain broken.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the provided community digests.

---

## Cross-Project Comparison Report: Personal AI Agent Ecosystem (2026-06-16)

### 1. Ecosystem Overview

The open-source personal AI agent ecosystem is in a state of **intense, feature-driven expansion**, with major projects like OpenClaw, IronClaw, and CoPaw/QwenPaw processing over 50 PRs and issues each in a single day. The landscape is bifurcating: a cluster of "Claw" family projects (OpenClaw, ZeroClaw, IronClaw) are racing to build a production-grade, multi-channel runtime platform, while smaller projects (Moltis, NullClaw) focus on specific integration gaps. A dominant, recurring theme across all projects is the **tension between developer velocity and stability**, as evidenced by growing backlogs of P1 security and reliability bugs left unaddressed for weeks. The community is clearly moving from experimental use to real-world deployment, demanding robust security, state persistence, and cross-platform support.

### 2. Activity Comparison

| Project | Issues Updated (24h) | Open Issues | PRs Updated (24h) | Open PRs | New Release Today | Health Score |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 | 445 | 500 | 436 | No | **Moderate** (High activity, but growing backlog of P1 bugs) |
| **ZeroClaw** | 50 | 46 | 50 | 47 | No | **High** (High activity, responsive maintainers, active merges) |
| **CoPaw (QwenPaw)** | 50 | N/A | 50 | N/A | No | **High** (Intense, well-balanced feature/ bugfix activity) |
| **IronClaw** | 47 | N/A | 50 | N/A | No | **High** (Sustained, focused on "Reborn" runtime stability) |
| **NanoBot** | 4 | N/A | 35 | N/A | No | **Strong** (High merge rate, focused feature work) |
| **NanoClaw** | 0 | N/A | 12 | 9 | No | **Moderate** (Steady PR activity, community-driven fixes) |
| **Hermes Agent** | 50 | 41 | 50 | 39 | No | **Moderate** (High engagement but maintainer review bottleneck) |
| **LobsterAI** | 0 | 2 | 11 | N/A | No | **Moderate** (Team-driven, low community engagement, stale bugs) |
| **PicoClaw** | 3 | N/A | 12 | 10 | Yes (nightly) | **Stable** (Steady, security-conscious, responsive) |
| **NullClaw** | 3 | 3 | 1 | 1 | No | **Low** (Minimal activity, community reporting issues) |
| **Moltis** | 0 | 0 | 2 | 2 | No | **Dormant** (Low activity, no community interaction) |
| **TinyClaw** | 0 | 0 | 0 | 0 | No | **Inactive** (No activity in 24h) |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | No | **Inactive** (No activity in 24h) |

*Note: "N/A" indicates the specific metric was not clearly broken out in the digest.*

### 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Massive Scale**: OpenClaw’s 500 daily updates dwarf all peers, indicating a very large and active community. This creates a massive feedback loop and a wealth of community-contributed features and bug reports.
- **Mature Feature Set**: It is the clear leader in multi-channel support (Slack, iMessage, Telegram, Matrix, etc.) and advanced agent features like cron, webhooks, and persistent followup queues.
- **Architecture**: OpenClaw is a core reference implementation, with a focus on a gateway model and plugin/agent isolation. Its "Clawdbot" app concept aims for desktop parity, a frontier few others are tackling.

**Technical Approach Differences:**
- OpenClaw’s architecture leans heavily on **plugin-configurable agents** with sophisticated features like tiered bootstrap loading and session state persistence (SQLite). This is more complex than NanoBot’s simpler agent loop but offers more granular control.
- It prioritizes a **gateway-centric** model for routing across multiple chat channels, whereas projects like IronClaw focus more deeply on a single "Reborn" runtime with a unified UI.

**Community Size Comparison:**
- OpenClaw’s community is likely the **largest and loudest** in this cohort. While other projects have high activity, OpenClaw’s volume (500 issues/PRs) suggests an order of magnitude more developers and users. This is a double-edged sword: it provides immense testing and contributions but also overwhelms maintainers, as evidenced by its large and aging backlog.

### 4. Shared Technical Focus Areas

Several requirements are emerging as common pain points across multiple projects, signaling industry-wide challenges:

- **Agent State & Session Persistence**:
    - **OpenClaw**: Followup queues (#82572), session file race conditions (#67417).
    - **NanoClaw**: Per-thread conversation archive (#2772).
    - **CoPaw**: Context compression dropping state (#5171), session file path mismatch (#5025).
- **Security Hardening (Secrets, Scoping, Isolation)**:
    - **OpenClaw**: Masked secrets (#10659), tool call leakage (#25592), filesystem sandboxing (#7722).
    - **ZeroClaw**: MCP bundles not enforced (#7733), certificate management for self-hosted endpoints (#551).
    - **IronClaw**: Credential scoping across threads (#4825, #4939), OAuth flow fragility (#4907).
- **Cross-Platform & Desktop Parity**:
    - **OpenClaw**: Linux/Windows Clawdbot Apps (#75 – most upvoted feature).
    - **CoPaw**: Windows CMD spam (#5181), tray auto-start (#5164).
    - **Hermes Agent**: macOS Desktop segfaults (#46789) and build failures (#40187).
- **Provider Compatibility & Reliability**:
    - **OpenClaw**: Model defaults in plugins (#93428).
    - **ZeroClaw**: Groq/GLM reasoning output leaks (#7725, #7616), Azure credential normalization (#7703).
    - **NullClaw**: Ollama context-window cutoffs (#952).
    - **NanoBot**: DeepSeek empty responses not triggering fallback (#4287).
- **Configurability & Environment Management**:
    - **OpenClaw**: Tiered bootstrap loading (#22438), env var resolution in plugins (#90167).
    - **ZeroClaw**: Configurable reply-intent prechecks (#6067).
    - **Hermes Agent**: Dual sub-agent model config (#46880).

### 5. Differentiation Analysis

| Feature/Area | OpenClaw | NanoBot | IronClaw | CoPaw (QwenPaw) | ZeroClaw |
|---|---|---|---|---|---|
| **Target User** | Power users, self-hosters, multi-channel | General devs, simple agent pipelines | Enterprise, multi-agent orchestration | Chinese market, Alibaba cloud ecosystem | TUI/CLI enthusiasts, production runners |
| **Key Strength** | Feature breadth, community scale, multi-channel support | Merge velocity, API compatibility, bridge stability | "Reborn" runtime, credential/ OAuth security, learning system | Plugin ecosystem, skill market, context visibility | Multi-agent routing, web-first, CI/ supply-chain hardening |
| **Technical Architecture** | Gateway + plugin model, SQLite persistence | Simpler agent loop, focus on API and bridges | Complex "Reborn" runtime, deep auth layer | Desktop-focused, plugin-based, Qwen model affinity | TUI + Gateway, Rust/WASM aspirations |
| **Hot Topic** | Memory leaks, message leakage | Model fallback failures | OAuth/Extension lifecycle | File download 404, Windows CMD spam, context compression | MCP bundle enforcement, multi-agent routing |

### 6. Community Momentum & Maturity

**Tier 1: Rapidly Iterating (All Hands on Deck)**
- **OpenClaw, IronClaw, CoPaw (QwenPaw)** are in full feature sprint, with massive daily update volumes. These are the "superstars" of the ecosystem, where feature velocity is high, but stability debt is accruing. They are the most likely to attract new developers.

**Tier 2: Steady & Stable (Feature-Driven)**
- **ZeroClaw, NanoBot, NanoClaw** are in a healthy state of steady iteration with focused improvements. They maintain good merge rates and responsive maintainers. NanoBot is notable for its high merge velocity and low issue count.
- **PicoClaw** is stable and conservative, focusing on code quality and security fixes over features.

**Tier 3: Stabilizing / Low Activity (Maintenance Mode or Niche)**
- **Hermes Agent**: Has a large community but is experiencing a review bottleneck, suggesting a stabilization phase.
- **LobsterAI**: Internal team-driven, low on community engagement, suggesting a closed or semi-closed development model.
- **NullClaw, Moltis**: Low activity suggests a nascent community, niche focus (Moltis on external agents), or a dormant maintenance period.
- **TinyClaw, ZeptoClaw**: Inactive.

### 7. Trend Signals

Several industry trends are visible from the aggregated community feedback:

1.  **The "Production Wall":** The biggest signal across the ecosystem is that agents are hitting the **"Production Wall"** . Users are no longer just chatting; they are deploying agents for sensitive workflows. This is driving the top two shared needs: **Security** (secrets management, data leakage, MCP scoping) and **Reliability** (session persistence, state recovery, no silent failures).

2.  **The "Multi-Agent Orchestrator" Pattern:** Strong signals from ZeroClaw (#2767), Hermes Agent (#41222), and IronClaw point towards a future where the agent platform is not just a chatbot, but an **orchestrator of sub-agents, skills, and external services**. Requests for Kanban boards, sub-agent model config, and A2A discovery are all part of this.

3.  **Cost Obsession:** Community feedback across projects highlights a growing awareness of **token overhead** and cost. Features like tiered bootstrap loading (OpenClaw), native context compression (ZeroClaw), and per-turn token popovers (CoPaw) are direct responses to users wanting to control their API bills. This is a critical signal for AI agent developers: **efficiency is the next frontier**.

4.  **The Rise of MCP as a Core Protocol:** MCP is not a footnote. It is a central architectural element for tooling and extensions. Both **ZeroClaw** (with its MCP bundle security concerns) and **IronClaw** (with MCP tool approval issues) are wrestling with how to securely and reliably integrate this protocol, indicating that MCP is becoming the "USB-C" of the agent tool ecosystem.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-16

## Today's Overview
NanoBot is experiencing a period of high development velocity, with **35 pull requests** updated in the last 24 hours and 16 merged/closed. The project shows strong community engagement, though issue activity is relatively moderate (4 updated issues). Feature development dominates the PR pipeline, with contributions spanning web UI, MCP stability, provider compatibility, and automation improvements. No new releases were published today. Overall project health is **strong**, with a healthy mix of community-driven fixes and planned feature work.

## Releases
**None** — No new releases were published on this date.

## Project Progress
16 PRs were merged or closed in the last 24 hours, representing significant stabilization and feature advancement:

### Closed/Merged Highlights:
- **#4310** [fix(api): forward real LLM usage in /v1/chat/completions response](https://github.com/HKUDS/nanobot/pull/4310) — Fixes the hardcoded zero usage tokens bug (#4309), now returning real token counts from the agent loop. Critical for downstream billing integrations.
- **#4315** [fix(memory): ignore malformed history entries](https://github.com/HKUDS/nanobot/pull/4315) — Drops corrupted `history.jsonl` rows before prompt/Dream reads, requiring valid string fields. Prevents crashes from external corruption.
- **#4337** [fix(runner): ignore empty injected payloads](https://github.com/HKUDS/nanobot/pull/4337) — Skips empty or non-user pre-normalized injection payloads instead of appending blank messages. Stabilizes mid-turn injection callbacks.
- **#4348** [fix(session): keep auto compact suffix on user turn](https://github.com/HKUDS/nanobot/pull/4348) — Prevents idle auto-compact from persisting partial tool turns by preserving at least the recent suffix.

### Feature Advancements (Open PRs):
- **#4320** [feat(audit): add tools.audit config and AuditTool](https://github.com/HKUDS/nanobot/pull/4320) — Adds a minimal observability module for agent action logging.
- **#4357** [feat(cron): add silent jobs](https://github.com/HKUDS/nanobot/pull/4357) — Allows scheduled jobs to run without auto-delivering responses, ideal for monitoring.
- **#4354** [feat(bridge): send read receipts for WhatsApp](https://github.com/HKUDS/nanobot/pull/4354) — Adds blue double-check marks for incoming messages via `sock.readMessages()`.
- **#4350** [feat(web): add Keenable search provider](https://github.com/HKUDS/nanobot/pull/4350) — Adds a research-driven web search provider alongside existing options.

## Community Hot Topics

### Most Active Discussions:
1. **[#4287 [bug] Empty model responses not triggering fallback](https://github.com/HKUDS/nanobot/issues/4287)** (2 comments, updated Jun 15) — A Telegram bot user reports that DeepSeek's empty responses during peak hours are classified as "non-fallbackable." The core issue is that the fallback logic distinguishes between "error" and "empty response," but users expect any non-useful response to trigger fallback.
2. **[#4345 [bug] Image-strip fallback leaks file path](https://github.com/HKUDS/nanobot/issues/4345)** (0 comments, just filed) — A provider-agnostic fallback strips images on error but substitutes text that includes the local file path and makes the model hallucinate seeing an image. A fix PR (#4346) is already open.

### Underlying Needs:
- **Reliability expectations**: Users want fallback logic to be more aggressive — empty responses and failures should automatically retry with alternative models, not be classified away.
- **Privacy and hallucination**: Users are sensitive to leaked file paths in AI responses, and hallucinated image descriptions erode trust.

## Bugs & Stability

### High Severity:
- **[#4345] Image-strip fallback leaks file path & causes hallucination** — Newly reported (Jun 15). The fallback substitutes the local file path into the retry text, causing models to "see" an image they never received. **Fix exists**: PR #4346 by the same reporter marks stripped images as `unviewable` instead of leaking paths.

### Medium Severity:
- **[#4287] Empty model responses not triggering fallback** — Open since Jun 10. DeepSeek returns empty `choices` during peak hours; system classifies as non-fallbackable. No fix PR yet.
- **[#4309] /v1/chat/completions returns zero usage tokens** — **CLOSED** via PR #4310 (merged), fix confirmed.

### Low Severity:
- [#4322] NameError: `session_key` not defined after merge — Open, stale. Root cause identified: `_build_memory_context` extraction missed a variable. Low impact as it's on a feature branch.

## Feature Requests & Roadmap Signals

### Likely for Next Release:
- **Audit system** (PR #4320) — Minimal observability module; zero overhead when disabled. Likely to ship soon given its non-disruptive design.
- **Silent cron jobs** (PR #4357) — Community-contributed; clean, uncontroversial feature for monitoring use cases.
- **Keenable search provider** (PR #4350) — Straightforward addition; low integration risk.
- **WebUI/Settings parity** (PR #4313) — Closes config.json/WebUI gap; significant UX improvement.

### Emerging Themes:
- **Provider compatibility** (Mistral fixes #4351, Anthropic tool ID sanitization #4356) — Active work on multi-provider stability.
- **Audio transcription robustness** (PR #4353) — Converting audio to WAV 16k mono before STT suggests users rely heavily on voice messaging.
- **Config refactoring** (PR #4344) — Architecture work to decouple tool configs from schema loading indicates growing complexity management.

## User Feedback Summary

### Pain Points:
1. **Model unreliability leads to silent failures** — Users expect automatic fallback on empty or failed model responses, especially during peak hours at commercial providers.
2. **Privacy leaks in fallback messages** — File paths being included in AI responses is a trust-breaking bug.
3. **Missing token usage data** — The zero-usage bug broke billing/metering integrations for OpenAI-compatible API users. (Now fixed.)
4. **Transcription failures** — WhatsApp `.ogg` voice notes failing with certain STT providers, forcing manual workarounds.

### Satisfaction Signals:
- Strong contributor activity on bridges (WhatsApp, general bridge infrastructure).
- Users investing in advanced features (cron, automation, multi-turn sessions).
- Active testing and reporting of edge cases (malformed history, empty payloads, compacting behavior).

## Backlog Watch

### Issues Needing Maintainer Attention:
- **[#4322] NameError: session_key** — Open since Jun 13, stale-labeled. While on a feature branch, it may block the prompt caching fix from merging.
- **[#4303] MCP generator crash on reconnect** — Open since Jun 11, no maintainer response. A `streamableHttp` MCP crash on session termination is a stability risk for users relying on MCP servers.

### PRs Awaiting Review:
- **[#4303] fix(mcp): close tracked generators in _close_server** — Complex fix for a runtime crash; appears to need maintainer review of the asyncio task handling.
- **[#4344] Refactor config and agent loop boundaries** — Large architectural change; likely needs careful maintainer attention before merging.

*No critically abandoned issues identified.* The project's maintainers are responsive, with most open items receiving updates within 1–3 days.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the Hermes Agent project digest for 2026-06-16.

---

## Hermes Agent Project Digest — 2026-06-16

### 1. Today's Overview
The project is in a **high-activity state**, with 50 issues and 50 PRs updated in the last 24 hours, though the volume of new, unreviewed items is also high. Closed/merged activity (9 closed issues, 11 merged/closed PRs) suggests steady progress, but the backlog of open items (41 open issues, 39 open PRs) indicates maintainers may be struggling with review throughput. The majority of recent activity revolves around stabilizing the Desktop GUI, improving gateway reliability, and fixing false-positive notifications from the self-improvement skill creation system.

### 2. Releases
**No new releases** were published today. The latest available version remains v0.15.1 (as referenced in a build log from issue #40187). The next release will likely include the heavy batch of skill-notification and credential-pool fixes currently in the PR queue.

### 3. Project Progress
Today’s merged/closed PRs (11 total) show concrete iterative improvements:
- **Compression tests cleaned up** — `#46938` (merged) removed stale bug markers, confirming the compression boundary is now stable.
- **Runtime footer default enabled** — `#46927` (merged) enables the richer KHAL Pulse footer for the gateway by default.
- **Skill recursive-delete security** — `#46929` (merged) ports a tree-escape guard from the Kilo project, preventing `skill_manage(action=’delete’)` from deleting directories outside the skills tree.
- **Kanban worker failures** — A cluster of related kanban bugs (`#46593`, `#46889`, `#46888`) were closed, fixing unhelpful “protocol violation” errors and a boto3 < 1.34.59 incompatibility.
- **SysOps incident resolved** — Issue `#46906` (regarding P12 deactivating lifecycle jobs) was closed as a confirmed incident.

### 4. Community Hot Topics
The community is most engaged around two themes:

- **Response truncation** — Issue `#7237` ([link](https://github.com/NousResearch/hermes-agent/issues/7237)) has **50 comments and 6 reactions**, and remains closed. This is a high-severity UX pain point: long agent responses are cut off mid-stream in CLI and chat gateways. The level of engagement suggests the fix may not be fully satisfactory or that it is a recurrent problem.
- **Kanban board integration** — Issue `#41222` ([link](https://github.com/NousResearch/hermes-agent/issues/41222)) with 2 reactions and 3 comments requests a native Kanban board within the Desktop app. Users find switching between CLI and desktop for multi-agent workflows “friction.” This is a clear signal that **power users want a unified UI for orchestration**.

Other active threads (1-2 comments) are mostly bug reports from new users running into Desktop build failures on macOS (`#40187`) and model picker issues with custom providers (`#40480`).

### 5. Bugs & Stability
Several new bugs were filed today, ranked by severity:

- **P1 – Max OAuth requests rejected** (`#46675`): HTTP 400 “extra usage” rejection caused by a single-underscore `mcp_` tool-name prefix on Anthropic Max tokens. **Critical**, as it blocks all tool use for OAuth-authenticated users. No fix PR yet.
- **P2 – Zombie sessions after gateway restart** (`#46934`): Sessions stuck in `resume_pending=True` bypass idle resets, causing context bleed. New bug, no fix yet.
- **P2 – Desktop app segfaults on macOS** (`#46789`): All process execution tools return exit code -11. Disruptive but only reported for one user so far.
- **P2 – Skill notification false-positive** (multiple issues: `#46897`, #46936, `#46932`, `#46937`): The system wrongly announces “Skill created” when the skill is not loadable from the session’s search root. **Three fix PRs are already open** (`#46936`, `#46937`, `#46932`), making this the most actively addressed bug today.
- **P2 – MiMo 400 errors on empty web_extract** (`#46756`): Empty tool results from a timed-out Parallel Web Search MCP cause a 400 error. Only reported for Xiaomi’s MiMo model.

### 6. Feature Requests & Roadmap Signals
The following user-requested features are likely candidates for the next minor release (v0.16.x):
- **Global maximum concurrent usage** (`#44761`, 1 comment): Self-hosted users want a cap to avoid overloading their local LLM. Low cost to implement.
- **Dual sub-agent model configuration** (`#46880`): Assigning different models to sub-agents per task type (e.g., coding vs. research). Complex but aligns with the multi-agent roadmap.
- **Per-provider custom HTTP headers** (`#46877`): Would allow provider-specific header injection without global overrides. Small config change.
- **Suppress background-review notifications** (`#46908`): Users want a config gate to stop the self-improvement spam. Mirrors an existing `display.tool_progress` toggle; likely to land soon given multiple related PRs.

### 7. User Feedback Summary
- **Pain point – macOS Desktop builds**: Users on macOS are hitting blocking build errors (Electron compile failures, segfaults). This is likely a **satisfaction detractor** for the Apple developer community.
- **Pain point – Silent MCP failures**: Issue `#31246` (2 comments) highlights that MCP server misconfiguration produces zero log output at default logging levels. PR `#46922` upgrades those messages to `warning`, which will provide relief.
- **Dissatisfaction – Truncated outputs**: The long-running issue `#7237` (50 comments) shows that users are deeply frustrated by mid-response truncation in long-form content.
- **Use case – Multi-agent workflows**: The feature request for an embedded Kanban board (`#41222`) suggests a growing cohort of users who treat Hermes as an orchestrator, not just a chat agent.

### 8. Backlog Watch
The following items have been open for 20+ days without maintainer activity and need attention:
- **Issue #9148** ([link](https://github.com/NousResearch/hermes-agent/issues/9148)) — `/model` picker shows 0 models for custom providers using the `models:` dict field. **Open for 64 days, closed** but with only 1 comment, suggesting the fix may be incomplete or the ticket was closed prematurely.
- **Issue #31246** ([link](https://github.com/NousResearch/hermes-agent/issues/31246)) — MCP server silent failures. **Open for 23 days** without assignment, though a fix PR (`#46922`) was opened today.
- **Issue #32574** ([link](https://github.com/NousResearch/hermes-agent/issues/32574)) — Gateway liveness watchdog. **Open for 21 days**, P1, 1 comment. Despite the priority label, no PR or assignment yet.
- **Issue #41429** ([link](https://github.com/NousResearch/hermes-agent/issues/41429)) — “SERIOUS DUMB DOWN” affecting all models. **Open for 9 days**, P3, but the severity of the description suggests it may deserve re-evaluation.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-16

## Today's Overview

PicoClaw shows **moderate activity** over the past 24 hours with 3 issues updated (1 still open), 12 pull requests touched (10 open, 2 closed/merged), and 1 new nightly release. The project maintains steady development velocity, with a notable cluster of code quality fixes from contributor `chengzhichao-xydt` addressing error handling and type safety across multiple modules. The security fix for the launcher's `allowed_cidrs` bypass (Issue #3069) was closed, and a follow-up diagnostic improvement PR (#3126) was merged, signaling the team is actively hardening network access controls. Overall, the project appears in a healthy state with responsive maintainer attention to both community reports and code hygiene.

## Releases

**v0.2.9-nightly.20260615.13a38bd1** (Nightly Build)

This is an automated nightly build and may be unstable. Use with caution.

- **Full Changelog:** https://github.com/sipeed/picoclaw/compare/v0.2.9...main
- **Note:** No stable release this period; nightly only.

## Project Progress

**Merged/Closed PRs (2):**

- [#3126](https://github.com/sipeed/picoclaw/pull/3126) **fix(web): improve launcher allowlist bypass diagnostics** — merged. Enhances logging for `allow_localhost_bypass` configuration, clarifying startup logs when public/non-loopback host bindings could bypass CIDR restrictions through same-host proxies or tunnels. Directly addresses security issue #3069's root cause by improving visibility.
- [#3097](https://github.com/sipeed/picoclaw/pull/3097) **feat: add shift-enter hint below chat composer** — merged. UI improvement for the Web chat interface: shows a visible Shift+Enter hint below the composer when the user has typed content, keeping newline guidance available without cluttering the input area.

**Notable Open PRs (10):** The remaining 10 PRs are all open, with a heavy concentration of code quality fixes:
- Panic recovery goroutine protection ([#3132](https://github.com/sipeed/picoclaw/pull/3132)) — critical path resilience
- Type assertion safety in registry ([#3131](https://github.com/sipeed/picoclaw/pull/3131)), LINE channel ([#3054](https://github.com/sipeed/picoclaw/pull/3054)), and directory file descriptors ([#3127](https://github.com/sipeed/picoclaw/pull/3127))
- `json.Marshal` error handling in Seahorse tools ([#3130](https://github.com/sipeed/picoclaw/pull/3130))
- Explicit `Close()` error ignores across multiple modules ([#3059](https://github.com/sipeed/picoclaw/pull/3059), [#3128](https://github.com/sipeed/picoclaw/pull/3128), [#3129](https://github.com/sipeed/picoclaw/pull/3129))
- Full JSONL history reader for session details ([#3047](https://github.com/sipeed/picoclaw/pull/3047))
- Telegram reply-as-mention in group chats ([#2975](https://github.com/sipeed/picoclaw/pull/2975))

## Community Hot Topics

- **#2887** [CLOSED] **[BUG] .deb version on RISC-V is not functional with OpenAI model** — 10 comments, closed stale. Was a long-running issue (since May 17). The user reported that the Debian package on RISC-V architecture fails with OpenAI's gpt-5.4 model. The high comment count suggests community involvement in debugging, though it was ultimately closed stale.
  - Link: https://github.com/sipeed/picoclaw/issues/2887

- **#3015** [OPEN] **[BUG] QQ channel connection failure on Windows** — 3 comments, remains open. The QQ messaging channel fails to obtain an app access token from `bots.qq.com` on Windows, while the Pico channel works normally. This appears to be a platform-specific authentication issue that hasn't yet been resolved.
  - Link: https://github.com/sipeed/picoclaw/issues/3015

- **#3069** [CLOSED] **[Security] PicoClaw launcher `allowed_cidrs` bypass through reverse proxy** — reported June 9, closed June 15 with 0 comments but immediately addressed via PR #3126. The issue demonstrated that a same-host reverse proxy could bypass CIDR restrictions because access control trusts `RemoteAddr` directly. The quick close with a diagnostic PR suggests the maintainers treat this seriously.
  - Link: https://github.com/sipeed/picoclaw/issues/3069

## Bugs & Stability

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **High** | [#3069](https://github.com/sipeed/picoclaw/issues/3069) [CLOSED] | Security: `allowed_cidrs` bypass through reverse proxy — access control trusts `RemoteAddr` directly | Fixed via PR [#3126](https://github.com/sipeed/picoclaw/pull/3126) (diagnostics) and likely follow-up hardening |
| **Medium** | [#3015](https://github.com/sipeed/picoclaw/issues/3015) [OPEN] | QQ channel fails to connect on Windows — token retrieval timeout from `bots.qq.com` | No fix PR yet |
| **Medium** | [#2887](https://github.com/sipeed/picoclaw/issues/2887) [CLOSED] | RISC-V .deb package not functional with OpenAI model — stale, may indicate ongoing architecture support gaps | Closed stale |

**Stability improvements in flight:** PR #3132 adds panic recovery to core-path goroutines (tool execution, session processing), which would prevent single goroutine panics from crashing the entire process. This is a significant reliability enhancement.

## Feature Requests & Roadmap Signals

- **Telegram reply-as-mention** ([#2975](https://github.com/sipeed/picoclaw/pull/2975) open since May 30): Users request that replying to a bot message in Telegram group chats should be treated as an @mention when `mention_only: true` is configured. This would improve UX for group chat interactions. Likely to land in the next nightly or v0.3.0.
- **Full JSONL session history** ([#3047](https://github.com/sipeed/picoclaw/pull/3047) open since June 7): Adds a detail-only JSONL reader that ignores `meta.Skip`, allowing the session detail API to show archived messages. This addresses a limitation where session details were truncated.
- **Shift+Enter hint** ([#3097](https://github.com/sipeed/picoclaw/pull/3097) already merged): A small but UX-relevant feature — visible newline guidance in the Web chat composer.

**Prediction for next minor release (v0.3.0):** The merge of the `allowed_cidrs` hardening, Telegram reply-as-mention, and the JSONL history reader are strong candidates. The cluster of `Close()` and type assertion fixes from `chengzhichao-xydt` suggests a code quality milestone may be approaching.

## User Feedback Summary

- **Pain point: RISC-V support gaps.** Issue #2887 (now closed stale) indicates that the .deb package for RISC-V architecture is broken with OpenAI models. Users on RISC-V hardware may be unable to use PicoClaw with cloud AI providers.
- **Pain point: Windows QQ channel broken.** Issue #3015 shows that the QQ messenger integration on Windows is non-functional due to token retrieval failures. This impacts users who rely on QQ for messaging.
- **Security concern: allowlist bypass.** Issue #3069 was reported and handled quickly, but it reveals that users deploying PicoClaw behind reverse proxies could have had their network access controls silently bypassed. The quick response is commendable, but the underlying issue (trusting `RemoteAddr`) may indicate similar patterns elsewhere.

## Backlog Watch

- **#2975** [OPEN] **Telegram reply-as-mention** — Open since May 30 (17 days), 0 comments. While the PR is straightforward, it has not been merged despite being open for over two weeks. Could benefit from a maintainer review or additional testing.
  - Link: https://github.com/sipeed/picoclaw/pull/2975

- **#3047** [OPEN] **Full JSONL history for session detail** — Open since June 7 (9 days), 0 comments. Adds useful functionality for session archival visibility. May require maintainer input to ensure compatibility with existing session management.
  - Link: https://github.com/sipeed/picoclaw/pull/3047

- **#3015** [OPEN] **QQ channel Windows connection failure** — Open since June 6 (10 days), 3 comments. This is a genuine platform bug with no assigned owner or fix PR. If QQ integration is important to the project, this should be prioritized.
  - Link: https://github.com/sipeed/picoclaw/issues/3015

*No issues older than 30 days require immediate maintainer attention beyond those listed above.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-16

## Today’s Overview
NanoClaw saw 12 pull requests updated in the last 24 hours, with 3 merged/closed and 9 still open. No new releases were cut, and no new issues were opened or updated. The development velocity remains high, with active work converging on WhatsApp media delivery, MCP protocol expansion, and container stability. The project shows sustained maintainer engagement across infrastructure, agent runtime, and documentation.

## Releases
**None** — No new releases were created today.

## Project Progress
Three pull requests were merged or closed today, representing real progress:

- **#2774** `feat(update-nanoclaw): upgrade OneCLI gateway when its pinned version moves` — Merged. When `versions.json` pins move for `onecli-gateway` / `onecli-cli`, the update script now surfaces and performs the upgrade, preventing silent version mismatch failures.
- **#2772** `fix(codex): per-thread conversation archive (CDX-004)` — Merged. Fixes a codex archival bug where each exchange was written as a separate file, scattering conversation history across dozens of fragments. Now keys the archive on thread/continuation ID and appends each exchange into a single coherent transcript.
- **#2773** `docs(add-codex): drop redundant TTY warning in auth note` — Closed. Removed duplicated warning text from a skill documentation file.

## Community Hot Topics
No issues or PRs attracted significant comment volume or reactions today. The most strategically important PRs receiving attention include:

- **#2778** `fix(whatsapp): route inbound media through shared session inbox` — Still open. This addresses a critical gap where WhatsApp media never reached the agent due to a path mismatch between host- and container-mounted directories.
- **#2777** `feat: add /add-strava skill for official Strava MCP` — Open. Adds OAuth flow and auto-refreshing token support for the Strava MCP endpoint, signaling growing interest in fitness/activity data integration.
- **#2776** `feat: support remote HTTP/SSE MCP servers` — Open. Extends MCP configuration to support remote servers via HTTP/SSE, enabling connection to cloud-hosted MCP services.
- **#2771** `perf(container): --shm-size=1g + --init for agent containers` — Open. Addresses Chromium performance and zombie process issues in agent containers.

## Bugs & Stability
Several bug fixes and stability improvements are in active review:

- **Medium severity — #2778** `fix(whatsapp): route inbound media through shared session inbox` — WhatsApp media (images, video, audio, documents) never reaches the agent because `downloadInboundMedia` writes to `data/attachments/` on the host, but agent containers only mount the per-session directory. Fix routes media through the shared session inbox. PR is open.
- **Medium severity — #2759** `fix(agent-runner): deliver budget/billing error turns instead of dropping them` — Budget/token-exhausted LLM turns (e.g., Anthropic rate limits) were silently dropped instead of being delivered as error messages to the user. PR is open after several days of review.
- **Low severity — #2628** `fix(cli): honor user-supplied --id in ncl groups create` — The `--id` flag is documented as `(auto)` but `genericCreate` ignores user input, silently overriding with `randomUUID()`. PR has been open since May 27.
- **Low severity — #2627** `fix(reactions): align MCP add_reaction schema with channel reality` — Reaction emojis silently fail because the handler passes shortcode names to channels expecting unicode. PR open since May 27.
- **Low severity — #2626** `fix(signal): replace silent restartService failure with explicit error` — `restartService()` silently no-ops if `launchctl unload` ran previously, causing the wizard to report success when it actually failed. PR open since May 27.

## Feature Requests & Roadmap Signals
No new feature requests were filed today. The following in-progress PRs indicate likely roadmap directions:

- **Remote MCP support (#2776)** — Extending `McpServerConfig` to support HTTP/SSE remote servers will allow NanoClaw agents to connect to third-party MCP services over the network, not just local stdio processes. Likely to land in the next minor release.
- **Strava MCP skill (#2777)** — The `/add-strava` skill represents a template for integrating with official MCP endpoints that require OAuth and token refresh. This pattern is likely to be replicated for other fitness, health, and productivity MCP services.
- **Container performance (#2771)** — Adding `--shm-size=1g` and `--init` to agent containers suggests the team is prioritizing out-of-the-box Chromium reliability. This is a low-risk, high-impact improvement likely to be merged soon.

## User Feedback Summary
No new user feedback was captured in issues or PR comments today. The steady stream of long-standing bug fix PRs (see #2626, #2627, #2628) suggests user frustration with silent failures — CLI commands not honoring flags, reaction emojis failing without explanation, and service restarts silently no-oping. The WhatsApp media delivery fix (#2778) likely addresses a common pain point for users sharing images or documents with agents.

## Backlog Watch
The following PRs have remained open for extended periods without visible maintainer activity:

- **#2628** `fix(cli): honor user-supplied --id` — Open since May 27 (20 days). A CLI UX bug that silently discards user-provided IDs. Has not received maintainer review.
- **#2627** `fix(reactions): align MCP add_reaction schema` — Open since May 27 (20 days). Reaction emojis silently fail on most channels. No maintainer comments.
- **#2626** `fix(signal): replace silent restartService failure` — Open since May 27 (20 days). Signal channel setup may report success when it failed. No maintainer comments.
- **#2759** `fix(agent-runner): deliver budget/billing error turns` — Open since June 14 (2 days). A runtime bug that drops error messages. Has received no comments or reviews.

*All links: github.com/nanocoai/nanoclaw/issues or pull/*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the NullClaw project digest for **2026-06-16**.

---

## NullClaw Project Digest — June 16, 2026

### 1. Today's Overview
Project activity remains moderate, with 3 open issues and 1 open PR updated in the last 24 hours. No new releases or merges were recorded, indicating a period of maintenance and community bug reporting rather than feature rollouts. A single dependency bump PR (Docker/Alpine) suggests ongoing infrastructure hygiene. The community is actively reporting runtime configuration and provider authentication gaps, signaling a need for clearer documentation on rate limits and expanded cloud provider support.

### 2. Releases
**None.** No new releases were published in the last 24 hours. The latest release remains unchanged.

### 3. Project Progress
- **Merged/Closed PRs today:** 0
- **Open PR:** #956 — [Dependencies, Docker] Bump Alpine from 3.23 to 3.24 in the docker-images group (Author: `dependabot[bot]`, created/updated 2026-06-15). No comments or reactions yet. This is a routine security/compatibility update and is not yet merged.

### 4. Community Hot Topics
- **#957 — Rate limit issue** (1 comment, opened June 15)  
  *Link:* [Issue #957](https://github.com/nullclaw/nullclaw/issues/957)  
  User reports that running NullClaw as agent runtime (without memory, JSON output) triggers "The config reader hit a rate limit." The user requests clarification on which config controls rate limiting and how to modify the threshold. Underlying need: better documentation and clearer configurability for production agent deployments.

- **#952 — [Bug] Local model using ollama returns incomplete answers** (1 comment, opened June 11, updated June 15)  
  *Link:* [Issue #952](https://github.com/nullclaw/nullclaw/issues/952)  
  User pulled Gemma via Ollama but the agent stops mid-sentence. This points to a streaming or context-window cutoff issue when using local models. Underlying need: improved compatibility/truncation handling for non-OpenAI model providers.

- **#955 — [Enhancement] Identity based authentication for Azure OpenAI** (0 comments, opened June 15)  
  *Link:* [Issue #955](https://github.com/nullclaw/nullclaw/issues/955)  
  Requests support for `DefaultTokenCredential` from Azure CLI login, citing security policies that prohibit API key use. Underlying need: enterprise-grade authentication without key rotation overhead.

### 5. Bugs & Stability
| Issue | Severity | Summary | Fix PR? |
|-------|----------|---------|---------|
| #952 | **Medium** | Local Ollama model returns incomplete answers (cut-off sentences) | None yet |
| #957 | **Low-to-Medium** | "Rate limit" error from config reader; unclear threshold/tuning | None yet |

No crashes or regressions were reported today. Issue #952 is the most stability-critical, as it directly affects local model usability.

### 6. Feature Requests & Roadmap Signals
- **#955 (Azure OpenAI identity auth)** — Likely to be considered for the next minor release given growing enterprise adoption of Azure. Expect `DefaultAzureCredential` integration.
- **#957 (Rate limit configurability)** — Suggests users are deploying NullClaw in production with high throughput. A future release may expose `MAX_RATE` or similar config knobs.

Both requests signal shift toward enterprise readiness and better production observability.

### 7. User Feedback Summary
- **Pain points:** Lack of clear rate-limit documentation; incomplete responses with local Ollama models; missing Azure identity-based authentication.
- **Use cases:** Agent runtime without memory, JSON output for structured pipelines, enterprise Azure deployments.
- **Sentiment:** Neutral-to-frustrated. Users are encountering blockers that prevent production use, but are actively engaging (opening issues) rather than abandoning the project.

### 8. Backlog Watch
- **#952** (opened June 11, last updated June 15) — No maintainer response yet. This issue is nearly a week old and affects local model functionality, a core use case. Needs triage and possible repro/test by maintainers.
- **#955** (opened June 15) — No comments or assignees. As a feature request with 0 discussion, it risks becoming stale without maintainer acknowledgment or a "good first issue" label.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-16

## Today's Overview

IronClaw remains in an intense development phase with **47 issues updated** and **50 PRs updated** in the last 24 hours, indicating high sustained contributor activity across both bugfix and feature tracks. The project is processing roughly 1.7 updates per hour, with a healthy **50% close/merge rate** (13 of 47 issues closed, 23 of 50 PRs merged/closed). The "Reborn" runtime continues to dominate attention, absorbing most incoming issues and PRs, particularly around OAuth flows, credential scoping, and extension lifecycle management. No new releases were published today, but multiple XL-sized PRs are converging toward what appears to be a significant feature release window.

## Releases

**None.** No new releases were published in the last 24 hours. The last release PR (#3708) remains open and unmerged since May 2026.

## Project Progress

**Merged/closed PRs today** (key selections from 23 total):

- **#4871** — `feat(attachments): image attachment support for vision-capable models` — Merged. Closes a critical gap in the #4644 attachments epic: attached images now reach vision-capable models as real multimodal content, not text pointers.
- **#4559** — `feat(traces): agent-driven Trace Commons onboarding via invite link` — Merged. Enables users to paste a single invite link and complete Trace Commons registration through agent-led consent collection.
- **#4780** — `Steer routine delivery through outbound targets` — Merged. Adds model-visible guidance for outbound delivery target selection before creating routines/triggers.
- **#4936** — `ci(bench): let /benchmark select the framework` — Merged. Adds `--framework ironclaw-reborn` flag to CI benchmark dispatcher.

**Feature areas that advanced:**
- **Attachments/vision pipeline** (#4871 merged, #4902 open for OpenAI-compat vision, #4945 post-merge review fixes)
- **Learning system** (#4937 WS-1 and #4938 WS-2 both open, introducing memory-based learning semantics with confidence scoring)
- **Credentials/authorization scoping** (#4939 open, fixing thread-scoped credential leaks; #4916 fixing local extension auth owner scope)
- **Trace Commons** (#4559 merged, #4940 open for test coverage of agent-invoked host-egress path)
- **Slack personal user tools** (#4941 open, adding user-token-based Slack capabilities)

## Community Hot Topics

**Most active issues (by comment count):**

1. **[#4825 — Reborn: persist "always allow" approvals across threads](https://github.com/nearai/ironclaw/issues/4825)** (3 comments) — **CLOSED**. Addressed a fundamental UX pain: users approving a capability once expected it to persist across threads. The fix removes `thread_id` from persistent approval scope.

2. **[#4908 — Google Calendar Extension shows "Activate" after already active](https://github.com/nearai/ironclaw/issues/4908)** (3 comments) — **OPEN**. Extension status inconsistency between Extensions page and configuration dialog.

3. **[#4907 — Run fails after successful Google OAuth instead of resuming](https://github.com/nearai/ironclaw/issues/4907)** (2 comments) — **OPEN**. OAuth flow completes but the original run dies instead of resuming execution.

4. **[#4880 — Automate Code Review and Review Comment Resolution](https://github.com/nearai/ironclaw/issues/4880)** (2 comments) — **OPEN**. Internal process improvement to automate IronClaw's own PR review workflow.

**Underlying needs:** The community is experiencing significant friction with **extension lifecycle management** — OAuth completion followed by run failure, inconsistent active/needs-setup states, and fragmented setup flows. The "always allow" persistence fix (#4825) addressed a major trust/reliability pain point. The credential scoping family (#4825, #4935) shows growing sophistication in authorization architecture.

## Bugs & Stability

**High Severity:**

- **#4907** — *"Run fails after successful Google OAuth instead of resuming"* — Critical UX break. Auth completes but run dies. Fix PR **#4944** (surfacing denial to model) likely addresses this pattern.
- **#4921** — *"Gmail extension run fails before producing a reply after successful authorization"* — Same class as #4907. No fix PR yet.
- **#4884** — *"Google Calendar auth prompt requests access token instead of guiding users through OAuth flow"* — Incorrect auth flow triggered.

**Medium Severity:**

- **#4942** — *"Tool calls failed won't appear until re-fetch/reload"* — UI state staleness after tool failure.
- **#4917** — *"Automations never run, and panel status numbers misleading"* — Scheduled automations completely non-functional.
- **#4887** — *"Provider-backed MCP tool approval resume can fail with stale capability input_ref"* — Stale state corruption on resume.
- **#4857** — *"Clean state incorrectly shows NEAR AI provider as Active"* — Misleading UI on clean installs.
- **#4913** — *"Google Calendar authorization not reused across conversations"* — Re-auth required every conversation.
- **#4928** — *"Notion OAuth redirects to localhost callback in Railway deployment"* — Deployment-specific OAuth breakage.

**Low Severity / UX Polish:**

- **#4926** — Card expansion stretches all cards in same row.
- **#4923** — Replace Logs/Docs icons with text labels.
- **#4915** — Automations summary-card layout issues.
- **#4764** — Denying shell approval leaves tool invocation pending with no feedback.

**Stability trend:** OAuth and authorization flows are the dominant failure mode in Reborn, with at least 6 distinct issues involving authorization completing but execution failing or state becoming inconsistent. Fix PRs are in progress for several (4944, 4939, 4916).

## Feature Requests & Roadmap Signals

**Near-term signals (likely in next release):**

1. **Learning system** (#4937 WS-1, #4938 WS-2) — Memory-based learning from mistakes, with confidence scoring and `/learn` surface. Flag-gated behind `IRONCLAW_LEARNING_ENABLED`. This is Hermes-parity functionality.
2. **Downloadable project files** (#4933) — Generic path-based project-filesystem read API for WebChat v2, enabling file download from agent output.
3. **Unified attachments** (#4644 family) — Multi-PR epic wiring v1 attachment pipeline into Reborn with extensible format registry. Image vision support (#4871) just merged; OpenAI-compat vision (#4902) in progress.
4. **Run failure recovery** (#4841) — Eliminate "run-borking" terminal errors with failure explanation and retryable runs.

**Long-term signals:**

- **Universal cross-channel attachments** (#4644) — Format registry for all channels (web, Telegram, Slack, WhatsApp).
- **Automations engine fixes** (#4917) — Scheduled automations currently non-functional; basic repair likely before feature expansion.
- **Slack user-token tools** (#4941) — Community contribution adding personal Slack capabilities beyond bot tokens.

## User Feedback Summary

**Key pain points expressed:**

1. **"Auth works but then nothing happens"** — Multiple reports (#4907, #4921, #4925) where OAuth completes but runs fail, creating severe trust erosion. Users invest in auth but see no result.

2. **"I approved this already — why ask again?"** — The "always allow" persistence fix (#4825, now closed) directly addresses the most common user complaint about repetitive approval prompts.

3. **"Setup flow is fragmented and confusing"** — Issue #4890 captures the core complaint: extensions require hopping between Registry, Installed, Configure, and Chat auth pages with no clear guidance.

4. **"Is it active or not?"** — Inconsistent status indicators (#4908, #4857, #4925) where UI shows ACTIVE but also shows Activate/Setup Needed, undermining trust in the interface.

5. **"Scheduled automations just don't run"** — Issue #4917 reports a completely broken automations feature with no error explanation, making it invisible to users why schedules never fire.

**Satisfaction signals:** The learning system PRs (#4937/#4938) and downloadable files (#4933) show investment in features users explicitly asked for. The credential scoping rewrite (#4935) demonstrates architectural maturity being applied to user-facing reliability.

## Backlog Watch

**Long-unanswered items needing maintainer attention:**

1. **[#3705 — chore(deps): bump rand 0.8.5 to 0.8.6](https://github.com/nearai/ironclaw/pull/3705)** — **30 days stale.** Minimal risk dependency bump in `/channels-src/wechat`. The `[NO MERGE]` label on other PRs suggests this may be intentionally deferred.

2. **[#3707 — chore(deps): bump jsonwebtoken from 9.3.1 to 10.3.0](https://github.com/nearai/ironclaw/pull/3707)** — **30 days stale.** Security-sensitive JWT library with a major version bump. Requires review for breaking changes.

3. **[#3708 — chore: release](https://github.com/nearai/ironclaw/pull/3708)** — **30 days stale.** The release automation PR stuck with `ironclaw_common: 0.4.2 → 0.5.0` and `ironclaw: 0.24.0 → 0.29.1`. This PR being stalled for a month suggests release process issues or deliberate feature freeze for an upcoming batch release.

4. **[#4876 — build(deps): bump everything-else group with 43 updates](https://github.com/nearai/ironclaw/pull/4876)** — **2 days stale.** Massive dependency bump PR including `agent-client-protocol 0.10.4 → 0.14.0` and `rustls-nativ...` — this is a high-risk monolithic bump that needs careful review.

**Risk assessment:** The stalled release PR (#3708) combined with 43-package dependency bump (#4876) and active work on credential scoping (which may have breaking changes) suggests the project is accumulating changes for a coordinated release rather than shipping incrementally.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the project digest for **LobsterAI** on **2026-06-16**.

---

## LobsterAI Project Digest — 2026-06-16

### 1. Today's Overview
Activity remains **high**, with 11 Pull Requests updated in the last 24 hours, heavily concentrated on the **voice input (cowork)** and **document artifact** subsystems. Five PRs were merged/closed, indicating a strong push toward stabilizing the `2026.6.11` release branch. No new releases were cut today. The open issue count is low at 2, but both are stale and relate to local skill upload UX bugs.

### 2. Releases
**None.** No new releases were published on this date.

### 3. Project Progress
Five PRs were merged or closed today, reflecting meaningful feature and bug-fix delivery:

- **#2163** (CLOSED) — `feat(voice-input): refine dictation recording UI` — Refined cowork dictation recording UX and added in-memory ASR quota handling for the renderer.
- **#2162** (CLOSED) — `fix(cowork): preserve voice input cancel guard after merge` — Resolved a merge conflict to keep the release branch’s realtime-only ASR flow while preserving draft ownership and cancellation guards.
- **#2161** (CLOSED) — `chore: update about` — Updated the application’s "About" dialog.
- **#2160** (CLOSED) — `fix(voice-input): keep only realtime asr` — Stripped the short ASR upload flow and legacy `voiceInput.recognitionMode` config, making all cowork voice input realtime-only.
- **#2159** (CLOSED) — `feat(artifacts): 支持文档 Artifact 分享与预览优化` — Added support for DOCX, PPTX, XLSX, PDF, CSV, and TSV document sharing and preview via the Artifact panel, including pagination, fallback rendering, and CSP adjustments.

**Summary:** The voice-input subsystem is being simplified to a realtime-only model, while the document artifact feature has received a major capability boost.

### 4. Community Hot Topics
There are **no issues or PRs with high comment counts or reactions** in the last 24 hours. The two open issues (#1426, #1427) have only one comment each and zero upvotes, indicating low community engagement on those items. All PRs are authored by bots or internal team members.

**Analysis:** The project appears to be in a **team-driven development phase** with little external contribution or discussion. The lack of community noise may indicate a stable user base or a pending release after which feedback will increase.

### 5. Bugs & Stability
No new bugs were filed in the last 24 hours. Two stale bugs remain open:

- **#1426** (Stale, Open) — *Uploading a skill via local file gives no success toast, and the skill list does not refresh.* **Severity: Medium.** UX regression that breaks user feedback loops.
- **#1427** (Stale, Open) — *Local skill upload allows duplicate skill names, leading to multiple identical entries.* **Severity: Low-Medium.** Data integrity issue without error feedback.

No corresponding fix PRs are attached to either issue. **Risk:** Both issues have been open since April 3, 2026 — over two months — suggesting they are not prioritized for the current release cycle.

### 6. Feature Requests & Roadmap Signals
- **#1428** (Open, Stale) — `feat(cowork): 会话完成/报错时推送系统通知` — Proposes native OS notifications when a cowork session completes or errors while the window is unfocused. This aligns with a clear user desire for parity with tools like Claude Code and Cursor. Given the current push on cowork voice input (PRs #2160, #2162, #2163), this feature is a **strong candidate for the next minor release**.

**Prediction:** Notification support for background cowork sessions (PR #1428) will likely be merged after the `2026.6.11` branch stabilizes, perhaps in the `2026.7` release.

### 7. User Feedback Summary
Direct user feedback is minimal in this period. The two open bugs (#1426, #1427) indicate real pain points:
- **Lack of visual confirmation** when adding skills via local upload.
- **No duplicate-checking logic** for skill names, leading to a cluttered skill list.

Both issues suggest users are frustrated with the **local skill management workflow** — specifically the lack of UI feedback and data integrity safeguards.

### 8. Backlog Watch
| Item | Type | Age | Status | Maintainer Attention Needed |
|------|------|-----|--------|-----------------------------|
| **#1426** | Bug | 74 days | Open, Stale | High — no activity or assignee |
| **#1427** | Bug | 74 days | Open, Stale | High — no activity or assignee |
| **#1277** | Deps | 75 days | Open | Low — dependabot PR for electron 40→42, may need review |
| **#1428** | Feature PR | 74 days | Open, Stale | Medium — good candidate for next cycle |

**Risk:** The two stale bugs (#1426, #1427) are **critical for UX quality** and have been ignored for over two months. If a new release ships without addressing them, user trust in skill management may degrade.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest — 2026-06-16**

**1. Today’s Overview**
Moltis saw a low-activity day with zero new issues, zero releases, and no merged pull requests. Two open pull requests were updated in the last 24 hours, both authored by `gptme-thomas` and focused on expanding the platform’s extensibility for external agents and runtime context injection. There are no open bugs or regressions reported, and no closed issues or PRs to indicate recent merges. Overall, the project is in a quiet state with steady incremental development on integration features.

**2. Releases**
No new releases were published today.

**3. Project Progress**
No PRs were merged or closed today.

**4. Community Hot Topics**
Both of today’s updated pull requests are new (created 2026-06-15) and have no comments or reactions yet, so no clear community discussion has formed. However, the two topics represent significant architectural additions:

- **PR #1125: Support model and effort selection for external agents**  
  *URL:* https://github.com/moltis-org/moltis/pull/1125  
  *Underlying need:* Users deploying external agents currently lack first-class configuration for model selection and effort tuning. This PR addresses a request for granular control over external-agent behavior directly within Moltis’s `/model` command.

- **PR #1124: Add context command support for chat turns**  
  *URL:* https://github.com/moltis-org/moltis/pull/1124  
  *Underlying need:* Deployments that require dynamic runtime context (e.g., system state, logs) have to manually paste information into each session. This PR proposes automating that via an optional `chat.context_command`, reducing friction for production users.

**5. Bugs & Stability**
No new bugs, crashes, or regressions were reported in the last 24 hours. The project currently has no open issues.

**6. Feature Requests & Roadmap Signals**
While no formal feature requests were opened today, both open PRs signal roadmap priorities:
- **External-agent model/effort selection (PR #1125)** — Likely to be merged next, enabling users to configure custom models and effort levels per external agent, a key requirement for multi-provider setups.
- **Chat context injection (PR #1124)** — Indicates a move toward more automated, deployment-friendly session management. This feature could reduce manual overhead for CI/CD and production environments.

**7. User Feedback Summary**
No user feedback was captured today. The absence of issues and comments suggests either low usage volume or general satisfaction with the current state. The two open PRs imply that advanced users are seeking better external-agent integration and runtime automation.

**8. Backlog Watch**
There are no long-unanswered important issues or PRs requiring maintainer attention. The entire open issue queue is empty, and both open PRs are recent and authored by a core contributor with no pending feedback. No items are currently flagged for maintainer review.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw / QwenPaw Project Digest — 2026-06-16

## 1. Today's Overview
The QwenPaw (formerly CoPaw) project shows **intense activity** with **50 issues updated** and **50 PRs updated** in the last 24 hours. The community is highly engaged, with **19 closed issues** and **35 merged/closed PRs** indicating strong momentum from both maintainers and first-time contributors. No new releases were published today. The project continues to mature rapidly, with significant work on UI/UX improvements, plugin infrastructure (notably DataPaw and the "Agent OS Driver" abstraction for MCP/A2A/ACP), and repeated attention to bug fixes around token tracking, file attachments, and Windows client stability. While feature velocity is high, several long-standing context management and desktop usability issues remain open, suggesting a need for focused stabilization.

---

## 2. Releases
**None.** No new releases were published on 2026-06-16.

---

## 3. Project Progress
**High volume of merged/closed PRs in the last 24 hours (35 closed).** Key advancements include:

- **Skill Injection Fix**: PR #5146 (`fix(skill): Improve skill-slash-inject and display`) was merged, resolving Issue #5031 where slash invocations displayed raw SKILL.md content instead of clean skill output.
- **Context Usage Visibility**: PR #4310 (`feat(console): show context usage`) merged, fulfilling multiple long-standing feature requests (#4284, #4435, #4647, #4782) by adding a context window usage indicator in the chat header.
- **Per-Turn Token Popover**: PR #5130 (`feat(chat): add per-turn token and context usage popover`) merged, adding actionable per-response token and context information — a direct community ask from issues like #5103 and #3366.
- **Windows Desktop Stability**: PR #5192 (`fix(desktop): guard against Windows console crash and self-kill commands`) merged, addressing crash on legacy terminals and preventing self-destructive shutdown behavior.
- **Cron UI & Validation**: PR #4495 (`fix(cron): return 422 for cron validation...`) merged, improving error handling for cron job scheduling.
- **Yuanbao (WeCom-related) Channel**: PR #5150 (`feat(yuanbao): add bot message filtering...`) merged, adding bot detection and env var support.
- **Skill Market Revamp**: PR #5123 (`feat(skill): Update skill-market...`) merged, adding QwenPaw skill market endpoint and category previews.
- **Models Page Overhaul**: PR #5203 (`feat: Models Page Overhaul — Provider Aggregation...`) is **open** and under review, signaling a major UI redesign for model configuration.

---

## 4. Community Hot Topics
### Most Active Issues (by comments)
1. **[#1911 — "小艺" (Huawei HiVoice) Channel Integration](https://github.com/agentscope-ai/QwenPaw/issues/1911)** — **22 comments** — A user added the "小艺" channel and waited 10 minutes for syncing, but mobile queries return "distracted/network congestion" errors. The conversation appears on the test platform but not in CoPaw's dialog list. **Need:** Critical channel stability and debugging support for third-party platform integration.
2. **[#5140 — File Download 404 for non-text attachments](https://github.com/agentscope-ai/QwenPaw/issues/5140)** — **6 comments** — Persistent bug through `v1.1.11.post2`: clicking to download `.docx`/`.pdf` files results in 404 errors, though `.txt`/`.md`/`.py` work. **User frustration** over repeated regression through multiple point releases.
3. **[#5181 — Plugin pip install causing CMD window spam on Windows](https://github.com/agentscope-ai/QwenPaw/issues/5181)** — **5 comments** — Plugin dependency installation spawns visible `cmd.exe` windows; when PyPI is unreachable, user sees infinite loops of popups. **Usability regression** for Windows users on `v1.1.11.post2`.

### Most Active Pull Requests
- **#5212 (OPEN)** — `feat(chat): add wide mode toggle for expanded chat layout` — Fresh PR (2026-06-16) addressing UI flexibility.
- **#5210 (OPEN, first-time contributor)** — `feat(cli): add cron update command` — Community member implementing CLI parity with backend API.
- **#5203 (OPEN)** — Models Page Overhaul — attracts attention as a highly anticipated UI redesign.

**Underlying needs emerging from discussions:**
- **Context visibility** is the dominant theme: users repeatedly request token counters, context usage displays, turn counts — all of which are now being addressed (PRs #4310, #5130 merged today).
- **Plugin stability and isolation** (Windows CMD spam, Python3.13 compatibility, pip dependency loops) show that the plugin ecosystem, while growing, lacks robust error handling.
- **Desktop vs. Web parity** — issues like tray minimization, auto-start, and consistent UI scaling (e.g., #5164, #5211) suggest desktop users want native-app polish.

---

## 5. Bugs & Stability
**Seven active bug reports from the last 24h**, plus several critical regressions tracked:

| Severity | Issue | Description | Fix Available? |
|----------|-------|-------------|----------------|
| **Critical** | [#5192](https://github.com/agentscope-ai/QwenPaw/issues/5192) *(merged PR)* | Windows crash on legacy terminals + self-kill commands | ✅ **Fixed** (PR #5192 merged) |
| **High** | [#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140) | File download 404 for DOCX/PDF (text files work) — persists across `v1.1.11.post2` | ❌ Still open |
| **High** | [#5181](https://github.com/agentscope-ai/QwenPaw/issues/5181) | Plugin pip install on Windows spawns infinite visible cmd popups when PyPI unreachable | ❌ Still open |
| **High** | [#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171) | Context compression drops 100% of context when persona file tokens exceed threshold — **task interruption** | ❌ Still open |
| **High** | [#5184](https://github.com/agentscope-ai/QwenPaw/issues/5184) | Local model providers not displaying in `v1.1.11.post2` (regression from v1.1.11) | ❌ Still open |
| **Medium** | [#5166](https://github.com/agentscope-ai/QwenPaw/issues/5166) | `TeamChat` plugin fails on Python 3.13 (removed `imghdr` module) | ❌ Still open |
| **Medium** | [#5138](https://github.com/agentscope-ai/QwenPaw/issues/5138) | Windows client processes continuously increase, RAM up to 90%+ | ❌ Still open |
| **Medium** | [#5122](https://github.com/agentscope-ai/QwenPaw/issues/5122) | Context compression stats don't match actual API input; skills/MCP cause extra token bloat | ❌ Still open |
| **Low** | [#5025](https://github.com/agentscope-ai/QwenPaw/issues/5025) | `submit_to_agent` fails with `FileNotFoundError` due to session file path mismatch | ❌ Still open |
| **Low** | [#5162](https://github.com/agentscope-ai/QwenPaw/issues/5162) | Conversation thinking logic enters infinite loop | ❌ Still open |

**Healing signals**: PR #5041 (`fix(backup): skip unreadable files instead of failing the whole backup`) is under review, addressing a condition that made entire backups fail on Windows permission issues.

---

## 6. Feature Requests & Roadmap Signals
Strong signal that **context/token visibility, desktop native features, and plugin ecosystem maturity** are the community's top priorities:

| Likelihood | Feature | Issues/PRs | Analysis |
|-----------|---------|-----------|----------|
| **Very High (in progress or merged)** | Per-turn token + context usage display | #4284, #4435, #4647, #4782, #5103 → PRs #4310, #5130 (merged) | ✅ **Shipped this week** |
| **Very High (open PR)** | User input queue (don't wait for response) | #5103, PR #5158 | PR in review; high demand for concurrency |
| **High (open PR)** | Models page redesign with provider grouping | PR #5203 | Comprehensive UI overhaul under review |
| **High (community ask)** | Desktop tray, auto-start, background service | #5164 | Growing need; no PR yet |
| **Medium** | Observability/tracing (Langfuse, OpenTelemetry) | #5009 | Enterprise request; roadmap question remains unanswered |
| **Medium** | Wide mode / expanded chat layout | PR #5212 | Fresh PR; likely for v1.2 |
| **Medium** | Cron job CLI `update` command | PR #5210 (first-time contributor) | Small but useful improvement |
| **Low-Medium** | Headroom compression integration (60-95% token savings) | #5063 | Interesting but complex; requires evaluation |
| **Low** | Feishu CardKit streaming performance optimization | #5167 | Niche channel, but important for Feishu users |

**Predictions for next version (v1.1.12 or v1.2):**
- ✅ Token/context usage display — **already shipped** with #4310 and #5130
- ✅ User input queue — PR #5158 tagged `[Not Ready]`, but priority is high
- ✅ Models page overhaul — PR #5203 looks close-ready
- 🔴 Desktop system tray and auto-start — highly requested, no PR yet

---

## 7. User Feedback Summary
**Overall:** Users are **engaged but noticing regression fatigue** — several persistent bugs (file download 404, plugin CMD spam, continuous process growth on Windows) have survived multiple point releases (`v1.1.11 → v1.1.11.post2`), eroding confidence in patch stability.

**Specific pain points:**
- **"Submit to agent" vs "chat with agent" asymmetry** (Issue #5025): Background agent communication is broken, foreground works — impacts multi-agent workflows.
- **"Copaw → Qwenpaw rename artifacts"** (Issue #5104, closed): Users still find `~/.copaw` vs `~/.qwenpaw` directory conflicts causing plugin installation failures.
- **"Enterprise WeChat approval UI invisible"** (Issue #5190, closed): Access control is enabled but no approval page exists — governance feature shipped without user-facing component.
- **"UI layout wastes screenspace"** (Issue #5211, new): Desktop client has oversized top bar, poor vertical utilization — user provided detailed before/after suggestions.

**Satisfaction signals:**
- **Skill market and DataPaw plugin** (PR #4622): Community contributors actively building analytics plugins, indicating a healthy ecosystem.
- **Context visibility request fulfilled**: Multiple users (lioneltan1234, hyper0x, rescodexa, he402944078-cpu) had overlapping requests, all now addressed — likely to be a well-received feature.

---

## 8. Backlog Watch
High-value items needing maintainer attention:

| Item | Age | Priority | Why |
|------|-----|----------|-----|
| [#1911](https://github.com/agentscope-ai/QwenPaw/issues/1911) — "小艺" channel broken (22 comments) | ~3 months | **High** | Longest-standing open issue with highest engagement. User tried to integrate with Huawei HiVoice; mobile queries fail. No maintainer response evident. |
| [#5063](https://github.com/agentscope-ai/QwenPaw/issues/5063) — Headroom compression feature request (4 comments) | 6 days | **Medium** | Well-researched proposal with clear integration steps. Could dramatically reduce token costs. No maintainer sign-off. |
| [#5009](https://github.com/agentscope-ai/QwenPaw/issues/5009) — Observability/tracing integration roadmap question | 8 days | **Medium** | Enterprise user asking for roadmap clarity. No official answer provided. |
| [#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140) — File download 404 regression (3rd report) | 4 days | **High** | Repeated user reports across versions. Should be prioritized for next patch release. |
| [#5166](https://github.com/agentscope-ai/QwenPaw/issues/5166) — Python 3.13 plugin compatibility (`imghdr` removed) | 4 days | **Medium** | Blocking adoption on newer Python runtimes. |

**Watch list:**
- PR #5088 (Governance & Sandbox Interface) has been under review since 2026-06-10 with no merges — signals potential complexity or design disagreements.
- The rename from `copaw` → `qwenpaw` (Issue #5104) was closed but the underlying directory conflict may still affect new users.

---

*Data as of 2026-06-16. All links reference the `agentscope-ai/QwenPaw` repository.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-16

## 1. Today's Overview
ZeroClaw saw heavy activity over the past 24 hours, with 50 updated issues and 50 updated PRs. The project has 46 open/active issues and 47 open PRs, indicating a robust development pipeline with strong community participation. No new releases were published today. The majority of activity centers on security hardening, multi-agent routing, MCP scoping fixes, and cross-platform CI improvements, with a notable surge of bug fixes around provider compatibility (Groq, GLM, Bedrock) and channel reliability (Telegram, Slack, WhatsApp, IRC, Lark). The maintainer team appears actively engaged, with many PRs receiving prompt reviews and merges.

## 2. Releases
*No new releases today.* The project is tracking toward v0.8.1 (see tracker #6970) and v0.9.0 (tracker #7432), which focus on integration/channel/provider improvements and auth/security/breaking changes respectively.

## 3. Project Progress
Three PRs were closed/merged today:
- #7732 — `fix(self-test): authenticate websocket handshake probe`: Fixes false 401 failures in `zeroclaw self-test` by sending proper `Authorization: Bearer` headers and `?agent=` query parameter to match real client behavior.
- #7542 — [Bug]: `ask_user` tool fails in gateway web dashboard sessions: This closed bug tracked an S1 workflow blocker where the `ask_user` tool failed with "Channel closed before receiving a response" in WebSocket sessions.
- #7005 — [Bug]: Quickstart CLI/runtime bare user-facing strings: Closed as resolved via previous PRs.

Note: Issue #6683 (skill_manage `patch` ignores cooldown) was also closed today, though the fix appears to be in the code paths being reviewed.

## 4. Community Hot Topics

| Issue/PR | Comments | 👍 | Topic |
|----------|----------|----|-------|
| #1458 [CLOSED] | 8 | 0 | Local CA certificates for custom inference providers |
| #2767 | 6 | **9** | Multi-Agent Routing (most 👍) |
| #6067 | 5 | 0 | Configurable channel reply-intent precheck |
| #551 | 4 | 0 | Allow insecure HTTPS for self-signed endpoints |
| #7733 | 1 | 0 | MCP bundles parsed but never enforced at runtime |
| #7218 | 3 | 0 | A2A agent discovery RFC for multi-agent installs |
| #7673 | 3 | 0 | Native context compression as provider pipeline decorator |
| #6055 | 3 | 0 | Slack thread context hydration |

**Analysis:** The most active discussions reveal two core community needs: (1) **Enterprise/self-hosted deployment flexibility** — users want to connect ZeroClaw to custom inference endpoints with self-signed certificates (#551, #1458) and local PKI. (2) **Multi-agent orchestration** — #2767 (9 👍) and #7218 show strong demand for running multiple isolated agents with separate workspaces, sessions, and channel bindings in a single gateway. The MCP security gap (#7733) also generated significant discussion about runtime enforcement of scoping.

## 5. Bugs & Stability

### Critical (S0/S1 severity)
- **#7542** [CLOSED] — `ask_user` fails instantly in gateway web dashboard (S1). **Resolved.**
- **#7733** [OPEN] — `mcp_bundles` parsed but never enforced at runtime (S2, but security-relevant). Per-agent MCP scoping is a silent no-op. **No fix PR yet.**

### High-severity bugs reported today
| ID | Description | Fix PR Exists? |
|----|-------------|----------------|
| #7733 | MCP bundles silently ignored at runtime | ❌ |
| #7741 | Response cache doesn't skip multimodal prompt markers | ❌ |
| #7742 | System prompt stale after tool dispatcher swap | ❌ |
| #7740 | Missing-skill suggestions use unfiltered tool set | ❌ |

### Medium-severity bugs reported today
| ID | Description | Fix PR Exists? |
|----|-------------|----------------|
| #7739 | Email OAuth refresh lacks retry/backoff | ✅ (#7745) |
| #7738 | Email uses random UUID when Message-ID missing | ❌ |
| #7038 | `zeroclaw check` 11/11 websocket 401 despite valid auth | ✅ (#7732) |

### Notable fixes in today's PRs
- **#7725** — GLM-5.1 `reasoning_content` leaking into agent response text (high risk)
- **#7616** — Groq rejects `reasoning_content` on assistant message replay (medium risk)
- **#7723** — Telegram bot ignores replies to its own messages when `mention_only=true`
- **#7724** — Lark/Feishu channel ignores `ack_reactions` config
- **#7722** — Anti-narration unconditionally added to system prompt regardless of `show_tool_calls`
- **#7680** — Heartbeat delivery fails for non-hardcoded channel types (e.g., Matrix)
- **#7710** — IRC mentions triggered by bot nick appearing inside other words
- **#7703** — Azure OpenAI blank credentials not normalized to `None`

## 6. Feature Requests & Roadmap Signals

### High-engagement features likely for v0.8.1/v0.9.0
- **#6067** — Configurable channel reply-intent precheck (lighter model, timeout, timing log) — *accepted for v0.8.1*
- **#6055** — Slack thread context hydration — *accepted*
- **#7468** — Allow aliases to be renamed in TUI — *accepted, zerocode*
- **#7467** — More flexible edit strings with arrow navigation — *accepted, zerocode*

### RFCs indicating architectural direction
- **#7218** — A2A agent discovery via `.well-known/agent-card.json` (multi-agent interoperability with other "claw" systems)
- **#7673** — Native context compression as provider pipeline decorator
- **#7675** — Hardened CI with supply-chain scanning, provenance, SBOM generation
- **#7674** — WebAssembly-first, eliminate Node.js from build/runtime
- **#7743** — Explicit target-profile authority for delegate handoffs (deny-by-default delegation mode)

### Predicted next version content
**v0.8.1** (tracker #6970) likely includes: Slack thread hydration (#6055), configurable reply-intent precheck (#6067), alias renaming (#7468), WhatsApp group allow list (#7720), and multiple provider fixes (Groq, GLM, Bedrock, Azure).

**v0.9.0** (tracker #7432) likely includes: Multi-agent routing (#2767), A2A discovery (#7218), context compression (#7673), MCP bundle enforcement (#7733), delegate handoff authority (#7743), and auth/security hardening.

## 7. User Feedback Summary

### Pain points expressed
1. **Certificate management for custom endpoints** (#551, #1458): Users with self-hosted OpenAI-compatible endpoints using self-signed certificates cannot connect. Requests for both "ignore SSL" and "import custom CA" options.
2. **MCP security isolation doesn't work** (#7733): Users who configure per-agent `mcp_bundles` get a false sense of security — the config is accepted but never enforced at runtime.
3. **Slack thread usability** (#6055): Users must re-@mention the bot for every message in a thread when `strict_mention_in_thread` is enabled. Request for automatic thread history hydration on first mention.
4. **Inconsistent provider behavior** (#7725, #7616): Reasoning model output leaks as agent response text on GLM and Groq endpoints, confusing users.
5. **ZeroCode session management** (#7746): Users cannot find how to load or switch existing sessions in the current documentation.

### Satisfaction signals
- The community is actively contributing fixes (20+ PRs today from multiple contributors)
- Issue #2767 (Multi-Agent Routing) has 9 👍, indicating strong alignment with the project's direction
- Many bugs are being resolved within hours of reporting (e.g., #7732 fixing #7038's false 401 failures)
- Multiple contributors (Alix-007, dwc1997, perlowja, singlerider, Audacity88) submitted well-structured PRs with test coverage

## 8. Backlog Watch

### Issues needing maintainer attention
| Issue | Age | Priority | Problem |
|-------|-----|----------|---------|
| #551 | 4 months | p2, blocked | SSL certificate ignore/import for self-signed endpoints — *blocked* awaiting design decision |
| #7038 | 2 weeks | p2, needs-author-action | `zeroclaw check` 401 failures — author needs to verify the fix in #7732 |
| #6074 | 8 weeks | p2, in-progress | Tracking 153 commits lost in bulk revert — needs recovery plan |
| #7733 | <1 day | p1, accepted | MCP bundles not enforced at runtime — security-relevant, needs urgent fix PR |
| #6683 | 5 weeks | p2, in-progress | Skill cooldown bypass — recently closed but verification needed |
| #6698 | 4 weeks | p2, in-progress | Fluent locale files lag English sources — i18n gap |
| #7675 | 1 day | p2, needs-maintainer-review | Supply-chain CI RFC — needs architectural decision |
| #7674 | 1 day | p3, needs-maintainer-review | WASM-first RFC — needs architectural decision |

### Structural concerns
- **#6074** (153 commits lost in revert c3ff635) remains unresolved — this represents a significant repository integrity issue that could impact future bisection or cherry-picking
- **#7038** (websocket 401 check) has a fix (#7732) but the original reporter hasn't verified it — the issue should be closed or updated
- **#7733** (MCP security gap) was filed today with S2 severity, but the silent no-op of a security isolation field may warrant an S1/S0 re-classification

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*