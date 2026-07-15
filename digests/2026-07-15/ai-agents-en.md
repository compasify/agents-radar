# OpenClaw Ecosystem Digest 2026-07-15

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-15 01:16 UTC

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

# OpenClaw Project Digest — 2026-07-15

## Today's Overview

OpenClaw is experiencing an **exceptionally high-activity period**, with 500 issues and 500 pull requests updated in the last 24 hours — indicating a major project pulse likely tied to the **2026.7.1 release fallout**. The project currently has 340 open/active issues and 335 open PRs, with 160 issues closed and 165 PRs merged/closed during the period. **Critical release-blocker (P0) bugs** related to the 2026.7.1 startup migration have dominated the day's activity, with multiple reports of gateway crash-loops and legacy state migration failures that `openclaw doctor` cannot resolve. Despite this, the community remains highly engaged with substantive technical discussion across security, reliability, and feature requests.

## Releases

**No new releases today.** The most recent release is 2026.7.1, which appears to be the source of today's critical regressions.

## Project Progress

**165 PRs were merged or closed** in the last 24 hours, indicating active remediation effort. Notable closed items include:

- **#107133 [CLOSED] P0**: Memory Core embedding_cache conflict permanently blocking Gateway startup on 2026.7.1 — merged/closed, suggesting a fix is in
- **#107727 [CLOSED]**: Gateway refusing readiness after 2026.7.1 update due to plugin install metadata conflict for codex/discord — resolved
- **#102749 [CLOSED] P0**: Startup legacy-state migration never converges when `.migrated` archive already exists — resolved
- **#107471 [CLOSED]**: Session self-service tools (feat) — large PR, merged, giving agents session management capabilities
- **#107478 [OPEN]**: Reject non-decimal `--grid` segments via strict parser (workspaces fix)
- **#107384 [OPEN]**: Fix rate-limit bucket eviction to use window age rather than insertion order
- **#107878 [OPEN]**: Fix `openclaw doctor` to refresh existingState after canonical store state merge

Key fixes in the pipeline cover exec-approvals lock contention (#106971), outbound hook consistency for streamed replies (#107890), Signal styled-span offset handling (#107620), and Google Meet audio wait retention (#107614).

## Community Hot Topics

The most engaged discussions this period reflect **two dominant themes: 2026.7.1 migration failures and deep infrastructure reliability concerns**.

### Most Active Issues

1. **#75 — Linux/Windows Clawdbot Apps** (113 comments, 81 👍)
   - Long-standing request for desktop app parity (macOS/iOS/Android exist)
   - [Issue Link](https://github.com/openclaw/openclaw/issues/75)

2. **#48788 — Centralized filename encoding utility** (19 comments)
   - Architectural solution for multi-encoding Content-Disposition handling across channel adapters (Shift-JIS, EUC-KR, GB18030)
   - [Issue Link](https://github.com/openclaw/openclaw/issues/48788)

3. **#7707 — Memory Trust Tagging by Source** (18 comments, security-focused)
   - Proposes tagging agent memory entries by trust level to prevent memory poisoning
   - [Issue Link](https://github.com/openclaw/openclaw/issues/7707)

4. **#22676 [CLOSED] — Signal daemon stop() race condition** (17 comments, P1, diamond lobster)
   - Race condition on SIGUSR1 restart causing orphaned processes and send failures — now closed, fix likely merged
   - [Issue Link](https://github.com/openclaw/openclaw/issues/22676)

5. **#10659 — Masked Secrets: Prevent Agent from Accessing Raw API Keys** (14 comments, 4 👍, P1, security)
   - Proposal for a system allowing agents to *use* API keys without *seeing* them — protection against prompt injection extraction
   - [Issue Link](https://github.com/openclaw/openclaw/issues/10659)

### Most Active Pull Requests

- **#107471 [CLOSED]**: Session self-service tools (feat) — agents can now manage their own sessions
- **#107604 [OPEN] P0**: Warn before stripping JSON5 comments on config write — addresses user trust issue
- **#107890 [OPEN]**: Make outbound hooks consistent for streamed replies — affects Discord/Telegram/Matrix/Mattermost/Feishu
- **#97175 [OPEN] P1**: Bound deferred turn maintenance with per-task timeout — addresses wedging issues

**Underlying need**: The community is demanding **better migration paths** (repeated 2026.7.1 startup failures), **stronger security guarantees** (masked secrets, memory trust tagging, exec-approval denylists), and **cross-platform parity** (Linux/Windows desktop apps).

## Bugs & Stability

**Critical (P0) — Release-blocking:**

1. **#101290 — CLI startup preflight corrupts live state DB while gateway running** (P0, platinum hermit)
   - Database corruption happening 4 times over 5 days on macOS; vanilla SQLite does not reproduce
   - [Issue Link](https://github.com/openclaw/openclaw/issues/101290)

2. **#107227 — 2026.7.1 startup-migration gate is fatal; `openclaw doctor` doesn't resolve** (P0, crash-loop)
   - Gateway crash-loops with no documented remedy after upgrade
   - [Issue Link](https://github.com/openclaw/openclaw/issues/107227)

3. **#107220 — 2026.7.1 gateway crash-loop: legacy memory sidecar `meta`/`chunks` conflicts fatal** (P0)
   - Inconsistent behavior: `files` conflicts auto-resolve but `meta`/`chunks` are fatal
   - [Issue Link](https://github.com/openclaw/openclaw/issues/107220)

4. **#107133 [CLOSED] — Memory Core embedding_cache conflict permanently blocks Gateway startup** (P0, now resolved)
   - [Issue Link](https://github.com/openclaw/openclaw/issues/107133)

**High (P1) — Active regressions:**

5. **#87744 — Codex-backed Telegram turns timeout waiting for turn/completed** (P1, crash-loop risk)
   - Affects 2026.5.27; 14 comments, 3 👍
   - [Issue Link](https://github.com/openclaw/openclaw/issues/87744)

6. **#102020 — Second message fails with "reply session initialization conflicted"** (P1, cross-channel)
   - Fresh bug reported 2026-07-08; 12 comments
   - [Issue Link](https://github.com/openclaw/openclaw/issues/102020)

7. **#38327 — "Cannot convert undefined or null to object" with google-vertex/gemini-3.1** (P1, regression)
   - [Issue Link](https://github.com/openclaw/openclaw/issues/38327)

8. **#107449 — cron tool JSON Schema incompatible with llama.cpp tool parser** (P1, regression on 2026.7.1)
   - Pattern `"\S"` not supported; has linked PR open
   - [Issue Link](https://github.com/openclaw/openclaw/issues/107449)

9. **#106779 — 2026.7.1 breaks all local llama.cpp providers** (P1, auth-provider impact)
   - MacBook Pro M5 Max; "Unable to generate parser" error
   - [Issue Link](https://github.com/openclaw/openclaw/issues/106779)

10. **#96834 — WhatsApp inbound image wedges main lane ~3 minutes** (P1, message-loss)
    - `active_reply_work/queued_work_without_active_run` state
    - [Issue Link](https://github.com/openclaw/openclaw/issues/96834)

## Feature Requests & Roadmap Signals

**Likely next-version candidates:**

1. **Memory Trust Tagging (#7707)** — High community interest (security focus); aligns with growing security posture
2. **Masked Secrets (#10659)** — P1, endorsed by maintainers; critical for enterprise adoption
3. **Per-Agent TTS/STT Configuration (#66252)** — Multi-language support request; practical for international users
4. **Centralized filename encoding (#48788)** — Architectural improvement affecting all channel adapters
5. **Multi-Session Architecture RFC (#48874)** — Shared LLM with isolated sessions; could be foundational refactor
6. **Linux/Windows Clawdbot Apps (#75)** — Longest-standing request (113 comments); platform parity need

**Other notable proposals:**
- Exec-approval denylist support (#6615, 7 👍)
- Model fallback on context length exceeded (#9986)
- `session:end` internal hook event (#10142) — workflow orchestration integration
- Streaming TTS pipeline for voice calls (#8355) — sentence-level LLM→TTS→audio
- AI safety and quality observability events (#82548) — monitoring non-deterministic behavior

## User Feedback Summary

**Satisfaction signals:**
- High engagement with 500+ PRs/Issues updated daily indicates an active, invested community
- Multiple closed issues suggest maintainers are responsive to critical bugs
- The project's architecture conversations (RFCs, multi-encoding, memory lifecycle) show sophisticated user base

**Dissatisfaction/pain points:**
- **2026.7.1 upgrade pain**: Multiple reports of gateway crash-loops with incomplete recovery paths — the most acute user frustration
- **Database corruption**: #101290 — live state DB corruption is a fundamental trust eroder for production users
- **Documentation gaps**: `openclaw doctor --fix` doesn't resolve the problems it claims to fix (multiple P0s)
- **Platform parity**: Linux/Windows desktop app missing since project inception
- **Config fragility**: JSON5 comments silently stripped on write (#107604), Telegram `parse_mode` hardcoded to Markdown
- **Performance regressions**: DeepSeek cache hit rate <10% after 6.x (#94518), 28s overhead for tiny replies (#95121)

## Backlog Watch

**Issues needing maintainer attention (high priority, unanswered):**

- **#6615 — Exec-approval denylist** (created 2026-02-01, 7 👍, needs maintainer and security review)
  - [Issue Link](https://github.com/openclaw/openclaw/issues/6615)

- **#10659 — Masked Secrets** (created 2026-02-06, P1, needs maintainer + security + product decision)
  - [Issue Link](https://github.com/openclaw/openclaw/issues/10659)

- **#77012 — WebChat session transcript overwritten on every turn** (created 2026-05-04, P1, needs live repro)
  - [Issue Link](https://github.com/openclaw/openclaw/issues/77012)

- **#8299 — Config option to suppress sub-agent announce** (created 2026-02-03, needs product decision)
  - [Issue Link](https://github.com/openclaw/openclaw/issues/8299)

- **#82548 — AI safety and quality observability events** (created 2026-05-16, needs security review)
  - [Issue Link](https://github.com/openclaw/openclaw/issues/82548)

- **#107384 (PR) — Fix rate-limit bucket eviction by window age** (needs proof/verification)
  - [PR Link](https://github.com/openclaw/openclaw/pull/107384)

**Long-stale items:**
- #80040 — Cascading failure on OAuth invalidation (stale since May 10 review request)
- #95553 — Preflight compaction hard-capped at ~60s (stale since June 21)
- #87660 — Lifecycle-aware LLM curation for MEMORY.md (open since May 28, needs product decision)

**Overall project health**: The project is in a **turbulent but responsive state** — a major release (2026.7.1) introduced critical regressions that are being actively patched, but the pace of incoming bug reports (particularly P0s) suggests the release may have been premature. The community's deep engagement and maintainers' rapid closure of critical issues are positive signals. Once migration stability is restored, the robust feature pipeline and security-conscious proposals position OpenClaw strongly for enterprise adoption.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the provided community digest summaries.

---

### Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is currently in a **highly active but turbulent phase**, characterized by a wave of major releases followed by intense stabilization sprints. The landscape is bifurcated between "super-app" or "reference" implementations (like OpenClaw) that are grappling with the complexity of their own rapid growth, and more focused, "opinionated" frameworks (like Moltis and NanoBot) that are iterating on specific architectural improvements. A dominant theme across all projects is a significant community push for **core reliability, security hardening, and production-grade features** such as observability and state management, indicating a maturation of the user base from early adopters to deployment-focused power users.

### Activity Comparison

**Date: 2026-07-15**

| Project | Issues (Updated/Open) | PRs (Updated/Open) | Release Activity | Primary State | Health Score |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 / 340 | 500 / 335 | **Critical Regression** (2026.7.1) | Crisis / Responsive | **4/10** |
| **NanoBot** | 13 / 3 | 65 / 18 | Stable (v0.1.4.post6) | Active Maintenance | **7/10** |
| **Hermes Agent** | 50 / 7 | 50 / 44 | Stable (v0.17.0) | Healthy Cadence | **8/10** |
| **PicoClaw** | 3 / 3 | 9 / 4 | Stable (v0.3.1) | Steady | **6/10** |
| **NanoClaw** | 0 / ~5 | 26 / 19 | None | Internal Burst | **7/10** |
| **IronClaw** | 48 / 36 | 50 / 23 | Blocked (v0.29.1) | High-Velocity Build | **6/10** |
| **LobsterAI** | 0 / 0 | 3 / 0 | Stable (v2026.6.1) | Maintenance / Stale | **5/10** |
| **Moltis** | 2 / 2 | 12 / 4 | Daily Builds (20260714.11) | Rapid Iteration | **8/10** |
| **CoPaw** | 50 / ~30 | 50 / ~25 | **Hotfix** (v2.0.0.post2) | Post-Launch Stabilization | **5/10** |
| **ZeroClaw** | 29 / 23 | 50 / 34 | Feature Frozen (v0.8.3) | High-Velocity Engineering | **7/10** |
| **NullClaw / TinyClaw / ZeptoClaw** | 0 | 0 | None | Inactive | **N/A** |

- **Health Score** is a qualitative synthesis of community engagement, bug-fix velocity, and release stability. OpenClaw, CoPaw, and IronClaw score lower due to critical regressions and infrastructure debt.

### OpenClaw's Position

OpenClaw is the **dominant reference implementation and ecosystem hub**, as evidenced by its massive community (10x the activity volume of competitors) and its role as a source of architectural inspiration for other projects (e.g., CoPaw's "OpenClaw-Inspired Features" meta-issue).

- **Advantages vs. Peers:**
    - **Community Scale:** Its activity trumps all others, creating a larger pool of contributors, plugins, and third-party integrations (e.g., Clawdbot desktop apps).
    - **Architectural Sophistication:** It alone is debating foundational RFCs on multi-session architectures (#48874), memory trust tagging (#7707), and centralized encoding (#48788).
    - **Feature Pipeline:** It has the deepest bench of pending high-value features (Masked Secrets, Exec-Approval Denylist, Streaming TTS).
- **Technical Approach:** OpenClaw’s architecture is data-model-centric, with explicit concepts for state, memory, and sessions. This complexity is both its strength and its current weakness, as the v2026.7.1 migration directly impacted this core data model, causing widespread startup failures.
- **Community Size Comparison:** OpenClaw processes more issues/PRs in a day than some projects do in a month. This scale means it absorbs more user pain (upgrade regressions) but also has the most responsive fix pipeline (165 PRs closed in 24h).

### Shared Technical Focus Areas

Several critical requirements are emerging across multiple, independent projects, confirming these are top priorities for the ecosystem.

- **Security Hardening:**
    - **All major projects** are addressing credential management. *OpenClaw* (Masked Secrets #10659), *Hermes Agent* (token leakage fix #51029), and *IronClaw* (memory visibility leak #5460) are all patching vulnerabilities where credentials or agent data could be exposed.
    - **OpenClaw** (Memory Trust Tagging #7707) and **CoPaw** (Sandbox governance fixes #6109) are focused on preventing agent "poisoning" or runaway execution.
- **State & Message Integrity:**
    - **IronClaw** (#6047) and **OpenClaw** (#101290) are fixing bugs that corrupt message ordering or the state database itself.
    - **NanoClaw** (#2750, #3045) and **OpenClaw** (#107220) are addressing message delivery delays and gateway startup failures due to state conflicts.
- **Observability & Error Diagnostics:**
    - **Hermes Agent** (PR #64684) and **ZeroClaw** (RFC #8933) are building OpenTelemetry-native trace export and correlation features.
    - **IronClaw** (Issue #6108) and **ZeroClaw** (Issue #9001) are specifically calling for better error fidelity, distinguishing between "unreachable" and "invalid credentials" rather than returning generic failures.
- **Local & Smaller Model Compatibility:**
    - **OpenClaw** (#106779, #107449), **Moltis** (#1098, #1136), and **CoPaw** (DeepSeek specific #5951) are all fixing bugs where their systems fail when using local providers (llama.cpp) or smaller models (Gemma 4, oMLX) that produce non-standard output.
- **Platform Parity:**
    - **OpenClaw** (#75) and **IronClaw** (PR #6098) have explicit, reported gaps for Linux/Windows desktop apps and Windows filesystem support, limiting their user base.

### Differentiation Analysis

| Focus Area | OpenClaw | Hermes Agent | IronClaw | NanoBot | Moltis |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary Target User** | Power users / System integrators | Desktop developers | Enterprise / Platform teams | Hobbyists / Chatters | Agent developers / Model testers |
| **Architecture** | Data-model-centric (complex, flexible) | Plugin-centric (configurable, modular) | Monolithic with extension runtime (performant, integrated) | Lightweight, channel-first (simple, fast) | Provider-agnostic sandbox (experimental, safe) |
| **Key Strength** | Ecosystem size & feature depth | Desktop UX & plugin ecosystem | Performance & "unified" architecture | Simplicity & deployment ease | Model compatibility & agent sandboxing |
| **Key Weakness** | Upgrade fragility | Windows Update reliability | CI debt & Windows support | Telegram/Markdown rendering | Smaller community |
| **Innovation Signal** | Memory Trust Tagging, Multi-session RFC | OpenTelemetry OTLP, Supervisory agent | Unified Extension Runtime (Train A/B) | WebUI cron management | Local STT (FunASR), Auto-screenshots |

### Community Momentum & Maturity

- **Tier 1 (Rapidly Iterating/High-Velocity):** **OpenClaw**, **IronClaw**, **ZeroClaw**, and **CoPaw** are in the most intense phase of development, processing 50+ PRs/issues daily. They are either recovering from a major release or building one, with high risk and high reward.
- **Tier 2 (Healthy Cadence/Stabilizing):** **Hermes Agent**, **Moltis**, and **NanoBot** show a balanced mix of feature work and targeted bug fixes. They are growing their user bases without the volatility of the Tier 1 projects.
- **Tier 3 (Steady/Low Activity):** **PicoClaw**, **NanoClaw**, and **LobsterAI** are maintaining stable codebases with focused patches. Their activity suggests a smaller, more niche user base.
- **Tier 4 (Dormant):** **NullClaw**, **TinyClaw**, and **ZeptoClaw** show no activity, indicating they may be deprecated or inactive.

### Trend Signals

1.  **The "Post-Deployment" Crisis:** The largest pain point across the ecosystem is not feature gaps, but **state management failures during upgrades**. OpenClaw’s migration meltdown and CoPaw’s config loss are symptoms of a broader challenge: these agent systems are stateful, and the industry lacks reliable, database-level migration strategies.
2.  **Security is the Next Sticking Point:** The simultaneous emergence of "Masked Secrets" (OpenClaw), credential token leakage fixes (Hermes), and confused-deputy vulnerabilities (ZeroClaw) signals that **credential and data isolation** is the critical blocker for enterprise adoption. The ecosystem is moving from "can it work?" to "can it be trusted?"
3.  **The Rise of "Hindsight" and Observability:** Multiple projects are investing in OTLP trace export (Hermes Agent, ZeroClaw) and memory lifecycle improvements (ZeroClaw’s "Hindsight" stack, OpenClaw’s Memory Trust Tagging). This points to a growing need for **auditability and debuggability** beyond simple chat logs, essential for both development and compliance.
4.  **Fragmentation on "Local-First":** There is a clear tension between supporting local models (OpenClaw, Moltis, CoPaw) and the complexity they introduce. The ecosystem is actively building model-agnostic compatibility layers, but the effort required to support the full range of local LLMs is a major cost center.

**Value for AI Agent Developers:** The key takeaway is that **reliability and security** are now the primary competitive battleground, not raw feature count. When selecting a framework, developers should prioritize projects with robust state management (e.g., IronClaw’s work on write serialization), clear security primitives (Masked Secrets), and comprehensive observability (OTLP export). The "2026.7.1 crisis" at OpenClaw serves as a cautionary tale: a fast-moving, feature-rich project is not a stable foundation if its upgrade path is treacherous.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-15

## Today's Overview

NanoBot saw a notably busy day with **65 updated PRs** (47 merged/closed) and **13 updated issues** (10 closed), indicating a strong maintenance push. The project team appears focused on stabilizing the **heartbeat subsystem**, **unified session routing**, and **WebUI quality-of-life features**, with several high-priority (p1) fixes landing today. Three open issues remain active, including a new bug report about Qwen models exposing thinking content and a resource leak in session message storage. Despite no new releases today, the volume of merged code suggests a release candidate may be approaching.

## Releases

No new releases were published today. The latest available version remains **v0.1.4.post6**, based on issue references.

## Project Progress

**47 PRs were merged or closed today**, reflecting a productive day across multiple subsystems:

### Heartbeat & Cron System (4 PRs landed)
- **#4915** (p1, merged) — Fixed heartbeat response evaluation regressions caused by the migration to cron; added configurable evaluation, stricter prompting, and support for disabling evaluation entirely.
- **#4928** (open, p1) — Fixes heartbeat routing for unified sessions by persisting the last concrete `channel:chat_id` route.
- **#4620** (open) — Adds a `nanobot heartbeat trigger` CLI command with dry-run, JSON output, and explicit channel/chat-id options.
- **#4549** (open) — Adds `model_override` config for routing heartbeats to cheaper models.

### WebUI (5 PRs landed)
- **#4930** (merged) — Added copy action for user messages in the WebUI.
- **#4933** (merged) — Slash commands and app mentions now highlighted with color/glow treatment.
- **#4935** (open, p2) — Validates inferred file paths before making them clickable in preview.
- **#4932** (merged) — Standardized `--config` help text across CLI commands.
- **#4927** (merged) — Fixed `package-lock.json` sync for the `qrcode` dependency to unblock Docker builds.

### Infrastructure & Testing
- **#4936** (merged) — Sped up CI by replacing the OS/Python version cross-product with representative jobs; hardened WebSocket, MCP, and exec-session tests.
- **#4631** (merged) — Added a reusable scripted provider harness for agent runner tests, covering tool-loop scenarios.
- **#4937** (open, p2) — Added one-click Deploy to Render support via a Render Blueprint.

### Other Merged Fixes
- **#4931** (p1, merged) — Restart completion notices now wait for channel reconnection before delivery.
- **#4929** (merged) — Improved Codex error diagnostics by distinguishing OAuth failures from Responses API failures.
- **#4881** (closed) — Windows PowerShell UTF-16 output corruption in ExecTool now fixed.

## Community Hot Topics

### Most Active Issues
1. **#4924** — [bug] `_pick_heartbeat_target_from_sessions` fails with `unifiedSession: true` (3 comments, open). A fix PR (#4928) is already submitted with a clear root-cause analysis and solution. *Likely to merge quickly.*

2. **#2568** — Telegram markdown rendering unreliable since v1.4.post6 (4 comments, closed). User reports intermittent failures — sometimes works, sometimes not. The inconsistency frustrates users. *No fix PR is linked, but the issue is closed.*

3. **#4637** — Telegram long message splits — only the final trunk renders correctly (3 comments, closed). Another Telegram-specific rendering bug that appears resolved.

4. **#1411** — Feature request: Xiaomi smart speaker integration (3 comments, closed in Chinese). User expresses intent to develop the extension themselves.

### Most Active PRs
- **#4928** — Fix heartbeat routing for unified sessions (p1, open). This directly addresses a contributor's reported bug and is the most critical open PR today.
- **#4908** — Refactor channel setup and instance ownership (p1, open). A large architectural follow-up removing coupling introduced by Feishu multi-instance support.

## Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | **#4934** — Qwen models expose thinking/reasoning content in chat responses | New, no comments | None yet |
| **High** | **#4924** — Heartbeat target selection fails with unified sessions | Open, 3 comments | **#4928** (open) |
| **High** | **#4787** — Session.messages list grows unbounded (memory leak) | Open, 1 comment | None yet |
| **Medium** | **#4795** — Streaming LLM calls bypass wall-clock timeout | Closed | Part of larger work |
| **Medium** | **#4881** — Windows ExecTool corrupts PowerShell UTF-16 output | Closed | Fixed |
| **Low** | **#4637** — Telegram long message trunk rendering | Closed | Fixed |

### Critical New Bug: Qwen Thinking Content Leak
Issue **#4934** reports that Qwen models (e.g., `qwen3.6-flash`) via DashScope expose internal thinking/reasoning traces in chat responses. No fix PR yet exists, but this is a high-severity privacy/presentation bug for anyone using Qwen models.

### Memory Leak Concern
Issue **#4787** remains open and unaddressed: `Session.messages` has no upper bound despite `FILE_MAX_MESSAGES=2000` only limiting replay/display. For long-running unified sessions, the list grows indefinitely. No associated PR exists yet.

## Feature Requests & Roadmap Signals

### High-Confidence Near-Term Features
1. **WebUI Cron Job Management** (#4218, closed) — The community wants a UI for managing cron jobs instead of using CLI. Given the current cron/heartbeat refactoring momentum, this is highly likely in the next release.
2. **Deploy to Render** (#4937, open) — One-click deployment support is already proposed and under review for p2 priority.
3. **OAuth Status & Expiry Warnings** (#4689, open, p1) — OAuth provider UX improvements are already coded and awaiting review.

### Lower-Confidence / Longer-Term
- **Xiaomi Smart Speaker Integration** (#1411) — Community interest but no maintainer traction.
- **WhatsApp Bridge Container Communication** (#1086, closed) — User pain point around WebSocket binding on 127.0.0.1 only. Fixed, but suggests broader container networking improvements may be appreciated.
- **Cron "silent" mode** (#1445, closed) — Users don't want messages when cron jobs find nothing meaningful. A PR for heartbeat trigger (#4620) partially addresses this.

## User Feedback Summary

- **Positive**: Users appreciate the active development pace and responsiveness to bugs. The heartbeat system improvements and WebUI copy/highlight features were well-received.
- **Negative/Pain Points**:
  - Telegram markdown rendering remains unreliable across versions (issue #2568).
  - Unified session heartbeat routing broke completely for some users (#4924).
  - Qwen model users are surprised by leaked thinking content (#4934).
  - Docker container users face networking challenges with WebSocket bindings (#1086, though now fixed).
  - Windows users hit UTF-16 encoding issues with PowerShell (#4881, now fixed).

## Backlog Watch

### Issues Needing Maintainer Attention
1. **#4787** (Jul 6) — **Memory leak**: `Session.messages` unbounded growth in long-running sessions. No fix PR exists. With unified sessions becoming more common, this could cause production issues. **Priority: Medium but growing.**

2. **#4934** (Jul 14) — **Qwen thinking content leak**: New, no comments. The bug is clearly described with evidence but has zero engagement from maintainers or community. **Priority: High.**

3. **#2505** (Mar 26, closed) — Custom provider `extraHeaders` support. Closed without clear resolution—potential lingering issue for users of custom API providers.

### Stale PRs Needing Review
- **#4689** — OAuth status/expiry improvements (p1, open since Jul 3). Despite p1 priority and being linked to a fix for #4679, it has no reviewer engagement.
- **#4621** — Memory archive with provenance context (open since Jul 1, conflict). A significant memory system improvement that may be blocked by merge conflicts.

---

*Generated from 65 PRs and 13 issues updated in the last 24 hours on HKUDS/nanobot.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-15

## Today's Overview

Hermes Agent shows a healthy and active development cadence, with 50 issues and 50 PRs updated in the last 24 hours. The project is processing a high volume of community contributions (44 open PRs) while maintaining good closure velocity (43 resolved issues, 6 merged/closed PRs). No new releases were published today, but the pipeline of merged fixes on `main` is substantial, suggesting a future release is accumulating changes. The community remains highly engaged, reporting nuanced bugs in edge cases (multiplexing, delegation, Windows updates) and contributing substantial feature work (OpenTelemetry, Kanban CI tools, skills). Project health appears strong, though the backlog of 44 open PRs bears watching.

## Releases

No new releases today. Last known release is Hermes Agent v0.17.0.

## Project Progress

Six PRs were merged or closed today, reflecting steady progress on quality and feature work:

- **[PR #51372](https://github.com/NousResearch/hermes-agent/pull/51372)** — `fix(gateway): read multiplex_profiles from nested gateway section` — Fixes a config-loading bug where `gateway.multiplex_profiles: true` written under the nested `gateway:` section of `config.yaml` was silently ignored.
- **[PR #51367](https://github.com/NousResearch/hermes-agent/pull/51367)** — `fix(config): write readable unicode yaml` — Ensures config YAML uses readable Unicode instead of escaped emoji/box characters.
- **[PR #64686](https://github.com/NousResearch/hermes-agent/pull/64686)** — `fix(gateway): preserve rate-limit failure metadata` — Prevents loss of failure metadata on non-empty rate-limit error responses.
- **[PR #64684](https://github.com/NousResearch/hermes-agent/pull/64684)** — `feat(observability): add OpenTelemetry OTLP trace export plugin` — Major observability feature adding HTTP/gRPC OTLP export with spans for sessions, turns, LLM requests, tools, subagents, and approvals.
- **[PR #64685](https://github.com/NousResearch/hermes-agent/pull/64685)** — `fix(desktop): resolve fflate import in Windows workspace and harden RDP GPU fallback` — Two Windows desktop fixes for Vite build failures and renderer crashes under RDP.
- **[PR #64680](https://github.com/NousResearch/hermes-agent/pull/64680)** — `fix(gateway): return EphemeralReply from /undo ack to block file-path leak` — Security fix preventing local file path leaks in `/undo` acknowledgement responses.

Additionally, 43 issues were closed, signaling robust bug-fixing across components (agent, cron, CLI, desktop, TUI, gateway, dashboard).

## Community Hot Topics

The most active discussions centered on recent regressions and feature requests:

- **[Issue #59113](https://github.com/NousResearch/hermes-agent/issues/59113)** (Open, 3 comments, 2 👍) — "Dashboard no longer works with docker" — A P2 Docker regression affecting dashboard deployment. The user reports that `127.0.0.1` resolves inside the container rather than the host machine. This has been open since July 5 and is gaining attention.
- **[Issue #50703](https://github.com/NousResearch/hermes-agent/issues/50703)** (Closed, 8 comments) — "Hermes translation of extra_body strips top-level chat_template_kwargs for NVIDIA NIM" — Detailed bug report about `thinking_mode` configuration not being passed to the M3 model through NVIDIA NIM. Sweeper marked as "cannot-reproduce" but received significant community analysis.
- **[Issue #51288](https://github.com/NousResearch/hermes-agent/issues/51288)** (Closed, 3 comments) — Feature request for configuring TUI Gateway WebSocket write timeout via environment variable. Practical ergonomics request from a power user.
- **[Issue #51229](https://github.com/NousResearch/hermes-agent/issues/51229)** (Closed, 3 comments) — Z.AI endpoint caching fix, reflecting ongoing provider integration work.
- **[Issue #50944](https://github.com/NousResearch/hermes-agent/issues/50944)** (Closed, 3 comments) — Desktop model picker persistence bug: "provider persistence writes wrong provider" and toolsets toggles don't persist — important UX quality issue.

**Underlying need**: Community is pushing for better configuration persistence, more robust multi-provider/cross-provider handling, and improved Docker deployment reliability.

## Bugs & Stability

**High severity (P2):**

- **[Issue #64674](https://github.com/NousResearch/hermes-agent/issues/64674)** (Open, new today) — "Telegram adapter fails to start on default-profile gateway when multiplex_profiles: true and bot token lives in a secondary profile .env" — A fresh regression after `hermes update`. The gateway restart fails to load the correct Telegram token. Marked with `sweeper:risk-session-state` and `sweeper:risk-message-delivery` risk tags. No fix PR identified yet as of this writing.
- **[Issue #59113](https://github.com/NousResearch/hermes-agent/issues/59113)** (Open, since July 5) — "Dashboard no longer works with docker" — P2 Docker regression, unresolved. Has 2 👍 reactions, indicating broad impact.
- **[Issue #50734](https://github.com/NousResearch/hermes-agent/issues/50734)** (Closed, P2) — "Agent ignores all safety directives and exfiltrates full .env credentials to LLM providers via read_file tool" — Security bug where `read_file` tool bypassed safety directives. Closed as `implemented-on-main`.
- **[Issue #51029](https://github.com/NousResearch/hermes-agent/issues/51029)** (Closed, P2) — "Multiplexer: secondary profile's platform token leaks from the default profile" — Security bug in multiplex profile token isolation. Closed as `implemented-on-main`.
- **[Issue #51278](https://github.com/NousResearch/hermes-agent/issues/51278)** (Closed, P2) — "Title Generation sends main model name to fallback provider's endpoint" — Provider routing bug during fallback. Closed as `implemented-on-main`.

**Medium severity (P3):**

- Multiple P3 bugs closed today including: `write_file` secret redaction mangling valid Python assignments (Issue #51141), orphaned Telegram typing indicator (Issue #50991), custom providers not recognized by delegate_task (Issue #51303), silent timeout kills subagents in delegation (Issue #51294).
- **[Issue #64674](https://github.com/NousResearch/hermes-agent/issues/64674)** above remains open and P2.

**Fix PRs available for recent bugs:**
- PR #64686 fixes rate-limit metadata loss (related to gateway reliability)
- PR #64685 fixes Windows desktop crashes (fflate build, RDP GPU fallback)
- PR #64680 fixes file-path leak in `/undo` (security)

## Feature Requests & Roadmap Signals

Several feature requests from the community point to near-term roadmap priorities:

- **[Issue #51257](https://github.com/NousResearch/hermes-agent/issues/51257)** (Closed, implemented-on-main) — "Feature: allow a hierarchy of models" — User wants automatic fallback when a provider runs out of credits, with seamless topic transfer. This is a clear signal for multi-model fallback orchestration.
- **[PR #64684](https://github.com/NousResearch/hermes-agent/pull/64684)** (New, open) — "OpenTelemetry OTLP trace export plugin" — Major observability addition, likely a high-value feature for enterprise deployments.
- **[PR #40796](https://github.com/NousResearch/hermes-agent/pull/40796)** (Open) — "Add game-development skill" — Community is contributing domain-specific skills (gaming, git-workflow in PR #40778).
- **[Issue #51175](https://github.com/NousResearch/hermes-agent/issues/51175)** (Closed, not-planned) — "Provider-agnostic balance/credits display in Hermes Desktop" — This was declined as not planned, but the need for integrated billing visibility is clear.
- **[PR #50969](https://github.com/NousResearch/hermes-agent/pull/50969)** (Open) — "Add thread_ownership plugin for Slack" — Multi-agent Slack coordination plugin, reflecting growing multi-agent use cases.

**Prediction**: The next version (v0.18.0?) is likely to include the OpenTelemetry observability plugin, the model hierarchy/fallback feature, continued multiplex profile fixes, and several Windows/macOS desktop stability patches.

## User Feedback Summary

**Positive signals:**
- High engagement: 50 issues + 50 PRs touched in 24 hours.
- Users are clearly deeply invested (e.g., "日常高频使用，体验整体非常好" — "daily high-frequency use, overall excellent experience" in Issue #51320).
- Diverse use cases: Docker, WSL, native Windows, macOS, Telegram, Slack, desktop app.

**Pain points:**
- **Docker deployment instability** — Issue #59113 (Dashboard not working) remains unresolved for 10 days.
- **Windows update failures** — Multiple reports (Issues #51273, #64457, #51015) about pip/updater failing on Windows due to file locking and virtual environment corruption.
- **Desktop UX issues** — Model picker persistence (Issue #50944), text disappearance on send (Issue #51320), session source mislabeling (Issue #50932).
- **Security concerns** — The `.env` credential exfiltration bug (Issue #50734), though fixed, indicates underlying tension about safety directive enforcement. Token leakage in multiplex profiles (Issue #51029) was also a serious concern.
- **Telegram reliability** — Orphaned typing indicators (Issue #50991) and token loading failures after restart (Issue #64674) suggest ongoing Telegram adapter edge cases.

**Satisfaction note**: Most bugs are being actively addressed (43 closed issues today), and users continue contributing detailed reproductions and fixes. The `sweeper:implemented-on-main` label is frequent, indicating maintainers are responsive.

## Backlog Watch

No new long-unanswered issues identified today. All 50 updated issues and 50 updated PRs had maintainer activity within 24 hours. No items found that are more than 7 days old without maintainer response. The project appears well-maintained with no significant backlog stagnation. However, the 44 open PRs represent a substantial review queue that could benefit from prioritization.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-15

## Today's Overview
PicoClaw shows **moderate activity** in the last 24 hours, with **3 open issues** and **9 pull requests** updated. Notably, **5 PRs were merged or closed**, signaling steady progress toward stability. However, no new release was cut, and the project continues to carry several high-priority items, including a migration away from the insecure `libolm` library. Two stale issues remain open, and a new DingTalk bug was filed today.

## Releases
**No new releases** have been published. The latest available version remains **0.3.1**.

## Project Progress
**5 pull requests were merged or closed** in the last 24 hours, reflecting active maintenance:

- **AWS Bedrock compatibility fix** — [PR #2982](https://github.com/sipeed/picoclaw/pull/2982): Fixed `temperature` parameter causing failures on Claude Opus 4.8. A model-dependent fix that drops unsupported parameters.
- **Tool call streaming fix** — [PR #2957](https://github.com/sipeed/picoclaw/pull/2957): Corrected a regression where `tool_calls` messages were being dropped during streaming due to incorrect auxiliary message filtering.
- **Config security fix** — [PR #2270](https://github.com/sipeed/picoclaw/pull/2270): Fixed a panic in `collectSensitive` when handling `SecureString` values in map structures. Adds addressability checks.
- **Tool schema validation fix** — [PR #2128](https://github.com/sipeed/picoclaw/pull/2128): Ensured tool parameters always include a valid `properties` field in JSON Schema, fixing compatibility with strict OpenAI APIs.
- **LLM token usage telemetry** — [PR #3156](https://github.com/sipeed/picoclaw/pull/3156): New feature emitting per-turn input/output token counts on finalized messages over the Pico channel.

## Community Hot Topics

**Most active issue:**
- **#3088 — [Feature] Use vodozemac instead of libolm** — [Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)
  - **8 comments**, **2 👍**, opened 2026-06-09, updated 2026-07-14
  - Still open with `help wanted` and `priority: high` labels. The community strongly supports replacing the unmaintained `libolm` with `vodozemac`. No PR has been opened yet, but the discussion has matured to include compile-time optionality.

**Other significant activity:**
- **#3163 — feat(bedrock): leverage Converse prompt caching via cache points** — [PR #3163](https://github.com/sipeed/picoclaw/pull/3163) remains open, indicating ongoing interest in cost optimization for AWS Bedrock users.
- **#3232 — [BUG] Rate limiting doesn't work if no fallback models configured** — [Issue #3232](https://github.com/sipeed/picoclaw/issues/3232) marked `stale`, but the underlying issue (rate limiting ineffective without fallback) affects users with simple single-model setups.

## Bugs & Stability

**New bug (2026-07-14):**
- **#3255 — DingTalk chat list preview shows fixed "PicoClaw" text** — [Issue #3255](https://github.com/sipeed/picoclaw/issues/3255)
  - Severity: **Medium** — cosmetic bug affects user experience on DingTalk channel. Full reply text is correct inside the chat, but list preview always shows "PicoClaw". No fix PR yet.
  - No comments or reactions yet.

**Existing bugs:**
- **#3232 — Rate limiting ineffective without fallback models** (stale, opened 2026-07-07)
  - Severity: **Medium** — functional bug that breaks rate limiting in simple single-model configurations. No fix PR opened.
- **#3088 — libolm deprecation** (priority: high, opened 2026-06-09)
  - Severity: **High** — security risk from using an unmaintained cryptographic library. No fix PR yet.

## Feature Requests & Roadmap Signals

**Hot feature requests:**
1. **Replace libolm with vodozemac** (Issue #3088) — the most important feature request by community engagement and explicit priority label. Likely targeted for next major release.
2. **AWS Bedrock prompt caching** (PR #3163) — advanced cost optimization for Bedrock users, still in review.
3. **Feishu native audio/video support** (PR #3256) — opened today, improves multimedia handling on Feishu channel by using native message types instead of generic file uploads.

**Prediction for next version:**  
The combination of high-priority security (vodozemac migration) and the stream of Bedrock-related fixes suggests the next release will focus on **provider compatibility hardening** and **cryptographic dependency modernization**.

## User Feedback Summary

**User pain points:**
- **Inconsistent rate limiting** — Users with simple single-model configurations find rate limiting doesn't work, requiring fallback model configuration they don't want (Issue #3232).
- **DingTalk preview misleading** — Channel-specific UI bug degrades user experience on DingTalk (Issue #3255).
- **Security concerns** — Community is aware `libolm` is unmaintained and pushes for replacement (Issue #3088, 2 👍, 8 comments).

**Use cases served:**
- **AWS Bedrock users** benefit from temperature compatibility fix (PR #2982) and ongoing work on prompt caching (PR #3163).
- **Streaming tool users** — the tool_calls streaming fix restores functionality broken by earlier refactoring (PR #2957).
- **Telemetry consumers** — new token usage emission (PR #3156) satisfies demand for cost tracking per conversation.

## Backlog Watch

**Issues needing maintainer attention:**
- **#3088 — vodozemac migration** (opened 2026-06-09, 34 days old)  
  High-priority security issue with community support but no assigned owner or PR. [Link](https://github.com/sipeed/picoclaw/issues/3088)
- **#3232 — Rate limiting without fallback** (opened 2026-07-07, 8 days old, marked stale)  
  Functional regression affecting a common configuration pattern. No fix or response from maintainers. [Link](https://github.com/sipeed/picoclaw/issues/3232)

**PRs needing review:**
- **#3163 — Bedrock prompt caching** (opened 2026-06-23, 22 days old) — complex feature PR with no progress indicators.
- **#3228 — Anthropic system blocks with cache_control** (opened 2026-07-06, 9 days old) — addresses a gap in Anthropic provider that prevents prompt caching.
- **#3233 — Fix PR 3222 backward compat** (opened 2026-07-07, 8 days old, marked stale) — backward compatibility fix for an earlier PR, stalled.

**Project health note:** The `stale` label has been applied to 4 items (2 issues, 2 PRs), suggesting maintainers are actively triaging but may be resource-constrained on review bandwidth.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-15

## Today's Overview
The project shows subdued surface activity with **0 issues updated** in the last 24 hours, but a **highly productive PR pipeline** with **26 PRs updated** in the same window — 7 of which were merged or closed and 19 remain open. No new releases were published today. The real pulse is in the PR queue, suggesting significant internal development cadence rather than community churn. Multiple core-team members (sturdy4days, michaelzetune) and external contributors (joevandyk, jliurner, OmriBenShoham) are actively submitting fixes across polling, security, and channel integration domains. Overall, the project is in a **healthy, active maintenance phase** with strong contributor diversity.

## Releases
**None.** No new releases were tagged on this date.

## Project Progress
**7 PRs were merged/closed today**, spanning fixes, documentation, and feature skills:

- **#3042** — [CLOSED] **feat(setup): offer Dial in the channel picker + wizard, installer, skills, docs** by OmriBenShoham — Adds end-to-end Dial channel support including setup wizard, installer, and documentation. A major channel expansion.
- **#3043** — [CLOSED] **fix(skills): switch Telegram deep-link from t.me to telegram.me** by amit-shafnir (core-team) — Addresses deep-link compatibility across platforms.
- **#2728** — [CLOSED] **fix(telegram): create the wiring row when pairing with a wire-to intent** by sturdy4days — Fixes a critical gap where pairing succeeded but never created the `messaging_group_agents` row, breaking subsequent message routing.
- **#2729** — [CLOSED] **docs(add-telegram): match pairing status-block names to the setup step; fix adapter pin** by sturdy4days — Corrects documentation drift where skill docs referenced status blocks that the setup step never emitted.
- **#2730** — [CLOSED] **fix: NANOCLAW_* flags set in .env never reach process.env under launchd/systemd** by sturdy4days — Fixes environment variable propagation to production process managers.
- **#2753** — [CLOSED] **fix(hooks): pre-commit fell open when pnpm was missing from PATH** by sturdy4days — Developer experience fix for CI/pre-commit linting.

**Key feature advancement:** Dial channel integration (PR #3042) is now fully merged, expanding the project's messaging platform coverage beyond Telegram and Discord.

## Community Hot Topics
No single PR attracted exceptional reaction or comment volume (all showing `undefined` comment counts), indicating focused development rather than heated debate. However, the **most structurally significant open threads** are:

- **#2921** — [OPEN] **fix(compose): gate skill fragments on group skill selection** by michaelzetune — Addresses a bug where `composeGroupClaudeMd` inlined *every* skill's instructions into *every* group's CLAUDE.md, ignoring the group's explicitly configured skill selection. This is architecturally critical for multi-skill per-group setups. [PR Link](https://github.com/nanocoai/nanoclaw/pull/2921)

- **#2750** — [OPEN] **fix: recover stale outbound.db journals after container kills** by sturdy4days — Fixes two linked failure modes (#2516, #2640) where container SIGKILLs or poll races leave `outbound.db` with stale journals, causing message delivery delays up to 60s. [PR Link](https://github.com/nanocoai/nanoclaw/pull/2750)

- **#2800** — [OPEN] **fix(security): validate group folders and forbid implicit image pulls** by sturdy4days — Security hardening that prevents Docker from implicitly pulling container images during spawn, mitigating supply-chain risks. [PR Link](https://github.com/nanocoai/nanoclaw/pull/2800)

**Underlying needs:** The community is demanding **reliability in message delivery** (journal recovery, poll-loop fixes), **security hardening** (image pull control, input validation), and **accurate documentation** (status-block alignment). These aren't flashy features — they're infrastructure stability concerns from users running production instances.

## Bugs & Stability
**Critical/High severity bugs with fix PRs today:**

1. **High** — **#3049** [OPEN] **fix(poll-loop): deliver `<message>` blocks emitted in a tool-call turn** by joevandyk. Messages generated during a tool-call turn are not delivered until the next poll cycle, creating 1-2 second latency spikes. [PR Link](https://github.com/nanocoai/nanoclaw/pull/3049)

2. **Medium** — **#3048** [OPEN] **fix(poll-loop): don't truncate `<message>` body at a quoted `</message>`** by joevandyk. Poll-loop prematurely terminates message parsing when encountering quoted `</message>` tags, silently truncating user messages. [PR Link](https://github.com/nanocoai/nanoclaw/pull/3048)

3. **High** — **#3045** [OPEN] **fix(delivery): drain outbound messages on container exit** by blueye25. When a container exits, its session is removed from active polling, causing outbound messages written just before exit to be delayed up to 60s until the sweep poll. [PR Link](https://github.com/nanocoai/nanoclaw/pull/3045)

4. **High** — **#3044** [OPEN] **fix(channels): download inbound attachments that lost fetchData (#2888)** by mashkovtsevlx. Telegram voice/audio notes attach content without bytes, silently dropped at the chat-sdk bridge. Agents never see the audio content. [PR Link](https://github.com/nanocoai/nanoclaw/pull/3044)

5. **Medium** — **#3047** [OPEN] **fix(add-slack): configure credentials before webhook URL verification** by jliurner. Real install walkthrough revealed the skill installation guide has the credential configuration step after webhook verification, causing first-time setup failures. [PR Link](https://github.com/nanocoai/nanoclaw/pull/3047)

**Regression watch:** #2801 — [OPEN] **fix(router): harden untrusted router input** by sturdy4days — `safeParseContent` returns `JSON.parse(raw)` directly; primitive payloads like `"5"` or `"true"` parse successfully but yield non-objects, causing `.text`/`.sender` reads to return `undefined`. This is a parsing vulnerability that could cause silent message drops. [PR Link](https://github.com/nanocoai/nanoclaw/pull/2801)

## Feature Requests & Roadmap Signals
- **Dial channel support** (PR #3042, #3050) — The most significant feature landing this week. Dial is now natively supported in the channel picker and setup wizard. PR #3050 extends this with the `runChannelSkill` model. This suggests the project is aggressively expanding the set of supported messaging platforms beyond the original Telegram/Discord.

- **Unified approval lifecycle** — PR #3040 [OPEN] **fix: unify approval holds behind one lifecycle contract** by moshe-nanoco (core-team). Proposes standardizing how approval holds work across all channels. This is a precursor to better approval UX and likely targets the next minor release. [PR Link](https://github.com/nanocoai/nanoclaw/pull/3040)

**Prediction for next version:** The next release will likely include:
- Dial channel integration (merged)
- Unified approval lifecycle (in progress)
- Poll-loop reliability fixes (multiple open PRs)
- Attachment download fix for Telegram audio/voice

## User Feedback Summary
**Pain points identified from recent PRs and issues:**

1. **Reliability gaps**: Users report messages delayed 60s on container exit (#3045), missed audio/voice attachments (#3044), and truncated messages from quoted tags (#3048). These are production irritants for anyone using NanoClaw in a live chat context.

2. **Setup friction**: The Slack skill guide has credential ordering wrong (#3047), Telegram docs reference non-existent status blocks (#2729), and environment variables don't propagate to systemd/launchd (#2730). New users face unnecessary friction.

3. **Security anxiety**: The explicit fix to forbid implicit Docker image pulls (#2800) and input validation hardening (#2801) suggest users are worried about supply-chain risks and message injection vulnerabilities in production deployments.

**Satisfaction indicators**: Contributors are actively submitting fixes rather than abandoning the project. The high PR volume (26 updated in 24h) and diversity of authors (at least 8 unique contributors in this digest) indicate a **healthy, collaborative community** that trusts the codebase enough to invest time in fixes.

## Backlog Watch
- **#2800** — [OPEN] **fix(security): validate group folders and forbid implicit image pulls** by sturdy4days. Created 2026-06-17, last updated 2026-07-14. This is a **high-impact security fix** that has been open for nearly a month. It prevents Docker supply-chain attacks and validates filesystem access before mutations. Despite its importance and the contributor's strong track record, it has not been merged. [PR Link](https://github.com/nanocoai/nanoclaw/pull/2800)

- **#2750** — [OPEN] **fix: recover stale outbound.db journals after container kills** by sturdy4days. Created 2026-06-12, last updated 2026-07-14. Fixes #2516 and #2640 — both reported and diagnosed failure modes. This is a **modal 60-second delivery delay** bug that affects production reliability. One month open without merge. [PR Link](https://github.com/nanocoai/nanoclaw/pull/2750)

- **#2801** — [OPEN] **fix(router): harden untrusted router input** by sturdy4days. Created 2026-06-17, last updated 2026-07-14. Silent message parsing failure on primitive JSON payloads — a potential vector for silent message drops. [PR Link](https://github.com/nanocoai/nanoclaw/pull/2801)

**Maintainer attention needed:** The three PRs above have been open 27–33 days each with no maintainer feedback visible in the data. They address security, reliability, and data integrity — not experimental features. The project should prioritize review cycles for these structural improvements over new channel integrations.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-15

## Today's Overview

IronClaw shows **high activity** with 48 issues and 50 PRs updated in the last 24 hours, reflecting a project in active development and bug-fixing mode. The closure rate is strong: 12 issues and 27 PRs were closed/merged, outpacing the 36 open issues and 23 open PRs. Notably, the team landed **two major extension-runtime rollups** (P7b #6065 and Train B #6090) and a **critical chat ordering fix** (#6096). However, the project carries considerable CI debt — main-branch red is described as "noise, not signal" (~70% failure rate in July) — and a series of platform-level enhancement issues filed today signal a push toward systemic quality gates. No new releases were cut.

## Releases

**None.** The last release PR (#5598, bumping `ironclaw` to 0.29.1 with breaking changes in `ironclaw_common` and `ironclaw_skills`) remains open as of July 3, awaiting merge.

**Note:** Issue #6106 calls for a release/staging gate requiring a boot smoke + upgrade-path canary before any future publish, suggesting the team is aware that the current release pipeline lacks sufficient safety checks.

---

## Project Progress

### Merged/Closed PRs Today (27 total)

| PR | Scope | Summary |
|----|-------|---------|
| [#6096](https://github.com/nearai/ironclaw/pull/6096) | **Core fix** | Serializes concurrent inbound-message writes per thread — fixes #6047 (chronological message ordering). Test-reproduced bug, confirmed fix. |
| [#6095](https://github.com/nearai/ironclaw/pull/6095) | **Error fidelity** | Names the blocked provider in Slack auth-unavailable notices; fixes misclassification of I/O faults as invalid input (#5884). |
| [#6089](https://github.com/nearai/ironclaw/pull/6089) | **Infrastructure** | Recovers the resource governor from libSQL/PG contention — classifies `BUSY`/`LOCKED` as typed retryable. |
| [#6065](https://github.com/nearai/ironclaw/pull/6065) | **Extension runtime P7b** | Finalize — Lane A package inventory + DEL-5/DEL-2/DEL-8; last of 9 runtime-train PRs. |
| [#6056](https://github.com/nearai/ironclaw/pull/6056) | **Extension runtime P7a** | Wire state enums + accounts list + deferred legs (runtime PR 8/9). |
| [#6012](https://github.com/nearai/ironclaw/pull/6012) | **Extension runtime P5** | Delivery coordinator + Slack/Telegram outbound (PR 6/8). |
| [#6007](https://github.com/nearai/ironclaw/pull/6007) | **Extension runtime P4** | Generic ingress router + verifier (PR 5/8). |
| [#5896](https://github.com/nearai/ironclaw/pull/5896) | **Security fix** | Fixes WebUI memory browse isolation — scopes to authenticated caller. |
| [#6013](https://github.com/nearai/ironclaw/pull/6013) | **Agent loop** | Tools-capable completion nudge for interactive coding. |
| [#6039](https://github.com/nearai/ironclaw/pull/6039), [#6037](https://github.com/nearai/ironclaw/pull/6037), [#6028](https://github.com/nearai/ironclaw/pull/6028), [#5947](https://github.com/nearai/ironclaw/pull/5947) | **UI fixes** | Light theme colors, chat connection status, MCP tab stray `$`, thread deletion refresh. |

### Major Feature Advancements

- **[PR #6090](https://github.com/nearai/ironclaw/pull/6090)** — **Train B rollup**: a tree-identical squash of 9 phases of the unified extension runtime (P0–P7b), covering generic runtime through finalize. Byte-identical to the 9 constituent branches. This is a **foundational architecture PR** unifying extension lifecycle.
- **[PR #6061](https://github.com/nearai/ironclaw/pull/6061)** — **Train A rollup**: supersedes PRs #5833–#5850, implementing the unified extension model. Together with Train B, these represent the single largest architectural initiative currently underway.
- **[PR #5970](https://github.com/nearai/ironclaw/pull/5970)** — **MCP registration framework**: owner-scoped store, minted IDs, lifecycle chokepoints. Skeleton only — not yet user-facing.
- **[PR #5977](https://github.com/nearai/ironclaw/pull/5977)** — **Skill advertisement optimization**: Reborn now lists skills as one-line entries and loads full bodies only on activation, saving ~7K tokens/call.

---

## Community Hot Topics

### Most Active Issues

| Issue | Comments | Description |
|-------|----------|-------------|
| [#5948](https://github.com/nearai/ironclaw/issues/5948) *(Closed)* | 5 | Assistant falsely reports GitHub extension as activated when only installed |
| [#5889](https://github.com/nearai/ironclaw/issues/5889) *(Closed)* | 2 | "Load older messages" button non-functional in activity panel |
| [#5640](https://github.com/nearai/ironclaw/issues/5640) *(Closed)* | 2 | Harness gap: `hook_security_audit_sink` always `None` in integration tests |
| [#6105](https://github.com/nearai/ironclaw/issues/6105) *(Open)* | 1 | Requests extension/channel lifecycle state-machine test (install→uninstall cycle) |
| [#5460](https://github.com/nearai/ironclaw/issues/5460) *(Closed)* | 1 | Workspace memories visible to all users — critical privacy issue |
| [#5945](https://github.com/nearai/ironclaw/issues/5945) *(Closed)* | 1 | Long multi-tool runs fail with generic "model provider unavailable" |
| [#6099](https://github.com/nearai/ironclaw/issues/6099) *(Open)* | 0* | `POST /llm/test-connection` reports `ok: true` for unreachable endpoints |

### Underlying Needs

The community's most vocal concerns center on **state consistency** — the gap between what the system *reports* (extension status, connection state, message ordering) and what is *actually true*. Issues like [#5948](https://github.com/nearai/ironclaw/issues/5948) (false activation report) and [#6099](https://github.com/nearai/ironclaw/issues/6099) (false success from test-connection) show that users are losing trust in status indicators. The spike of **Slack lifecycle bugs** (#6091, #6092, #6090, #6105) suggests Slack integration is the most stressed extension path. The underlying demand is for **deterministic, verifiable state** that survives disconnection, reconnection, and token revocation — which the Train A/B rollups are directly addressing.

---

## Bugs & Stability

### Critical Severity

| Issue | Description | Status |
|-------|-------------|--------|
| [#6047](https://github.com/nearai/ironclaw/issues/6047) | **[P2] Task messages displayed out of chronological order** — the most fundamental user-facing data integrity bug. Agent acts on wrong message order. | **Fixed** by [#6096](https://github.com/nearai/ironclaw/pull/6096) (merged today) |
| [#6092](https://github.com/nearai/ironclaw/issues/6092) | **[P2] Slack conversation hangs forever** after reconnecting integration — infinite "thinking" state | Open |
| [#6091](https://github.com/nearai/ironclaw/issues/6091) | **[P2] Slack reports conflicting connection states** after disconnect — different UI parts disagree | Open |
| [#5884](https://github.com/nearai/ironclaw/issues/5884) | **[P2] Routine loses credentials after external token revocation** — no recovery path | **Partially fixed** by [#6095](https://github.com/nearai/ironclaw/pull/6095) (improved error messaging, but revocation detection still absent) |
| [#5945](https://github.com/nearai/ironclaw/issues/5945) | **[P2] Long multi-tool runs fail with "model provider unavailable"** after 34+ tool calls | Closed (no explicit fix noted) |

### High Severity

| Issue | Description | Status |
|-------|-------------|--------|
| [#6099](https://github.com/nearai/ironclaw/issues/6099) | `POST /llm/test-connection` reports `ok: true` for unreachable endpoints with invalid keys | Open |
| [#6087](https://github.com/nearai/ironclaw/issues/6087) | Extension catalog load failures silently show empty state — indistinguishable from empty catalog | Open |
| [#6100](https://github.com/nearai/ironclaw/issues/6100) | One-shot context-window cache can be reseeded with stale snapshot after slow write races a later message | Open (pre-existing, found during review of #6096) |
| [#6102](https://github.com/nearai/ironclaw/issues/6102) | `FilesystemSessionThreadService` may be reconstructed mid-process with in-flight calls | Open (follow-up to #6096) |
| [#6101](https://github.com/nearai/ironclaw/issues/6101) | Per-thread write serialization needs extending to assistant/tool-result writes | Open (follow-up to #6096) |

### Medium/Low Severity (reported today)

- [#6085](https://github.com/nearai/ironclaw/issues/6085) — Admin user details show broken "Create token" action (button does nothing)
- [#6083](https://github.com/nearai/ironclaw/issues/6083) — Native `confirm()` dialogs used in several places; requests replacement with Reborn modal

### Windows Platform Blockers

- **[PR #6098](https://github.com/nearai/ironclaw/pull/6098)** *(Open)* — Every write through `LocalFilesystem` fails on Windows because `directory fsync` is not supported. `ironclaw-reborn run`/`serve` cannot boot on Windows at all. This is a first-contributor PR and represents a **severe platform gap**.

### Regression Watch

Issue [#6106](https://github.com/nearai/ironclaw/issues/6106) documents how a *correct* security fix (#5499) crash-looped every hosted deployment whose persistent volume held pre-#5499 state — nothing on the release path could have caught it. This highlights that IronClaw's release pipeline currently has **no upgrade-path canary**, making any state-mutating change a deployment risk.

---

## Feature Requests & Roadmap Signals

### Strong Signals (likely in next release)

1. **[State-machine lifecycle testing](https://github.com/nearai/ironclaw/issues/6105)** for extension/channel lifecycle — the team filed this as an `enhancement` and already has a PR (#6110) delivering the first Slack scenario. This will be the **primary quality gate** for the unified extension runtime.

2. **[Model selection + per-run cost tracking](https://github.com/nearai/ironclaw/pull/6111)** for WebChat v2 (reusing OpenAI-compat API plumbing). This is the top user-facing feature in flight, with an XL PR already submitted.

3. **[Self-verification pass](https://github.com/nearai/ironclaw/pull/6093)** for the agent loop — gated and only active in benchmark profile. Improves correctness for evaluation without altering default behavior.

4. **[Error fidelity enforcements](https://github.com/nearai/ironclaw/issues/6108)** — a cross-cutting rule that no generic failures are returned, and status must not lie. Likely to become a post-merge check in CI.

### Weaker Signals

- **[MCP registration framework](https://github.com/nearai/ironclaw/pull/5970)** — skeleton landed, but explicitly "not user-facing." Future release will add `register` verb, UI, and CLI.
- **[Model-input compatibility corpus](https://github.com/nearai/ironclaw/issues/6107)** — CI replay of real tool-call argument shapes against schemas and parsers. Not yet implemented.

---

## User Feedback Summary

### Pain Points (from bug reports and issue comments)

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **System lies about state** — reports success when delivery fails, reports activation when only installed | #5948, #6099, #6108, #6091 | **Critical** — erodes all trust |
| **Slack integration unreliable** — hangs, conflicting states, credential loss | #6092, #6091, #5884 | **Critical** — Slack is the #1 user-facing bug family |
| **Multi-tool workflows fail silently** after many tool calls | #5945, #6108 | **High** — blocks complex automations |
| **UI doesn't reflect reality** — threads persist after deletion, messages out of order | #6047, #5947 | **High** — confusing UX |
| **No feedback during network issues** — chat connection status hidden | #6037 | Medium |
| **Unreadable light theme** — hard-coded dark colors on buttons and status | #6039 | Low |
| **Windows cannot run** `ironclaw-reborn` at all | PR #6098 | **Critical** — platform blocker |
| **Memory visibility leak** — workspace memories visible to all users | #5460 (closed) | **Critical security** — likely fixed but users will watch the patch |

### Satisfaction Signals

- **Strong response to bug fixes:** The team closed 12 issues and 27 PRs today, with the messaging fix (#6095) and chat ordering fix (#6096) directly addressing high-pain bugs.
- **Architecture momentum:** Users may not see Train A/B rollups directly, but the unified extension model should eliminate the class of Slack-related state bugs that have been the top user-facing issue for two weeks.
- **First contribution welcome:** PR #6098 is from a new contributor (Anubhav-Koul) fixing Windows, indicating community engagement.

### Dissatisfaction Signals

- **Same bugs recur across QA waves:** Issue #6105 documents that extension lifecycle bugs regressed across **all four** QA bug-bash waves despite multiple fixes — suggesting point fixes aren't enough and systemic testing is needed.
- **CI unreliability:** ~70% main-branch failure rate means users cannot trust that "main" is green, and nightly deep CI was dead for 2 months (May 6 – July 8).

---

## Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Reason for Concern |
|-------|-----|--------------------|
| [#5598](https://github.com/nearai/ironclaw/pull/5598) *(Release PR)* | 12 days open | This release PR has **breaking changes** in `ironclaw_common` and `ironclaw_skills` — blocking downstream consumers from using 0.29.x features. The team filed #6106 (release gate) instead of merging this, suggesting uncertainty about its safety. |
| [#5884](https://github.com/nearai/ironclaw/issues/5884) *(Routine loses credentials)* | 6 days since last update | Only partially fixed (#6095 improved messaging). The actual **detection of token revocation** — the root cause — has no fix filed. This is a P2 bug that could cause silent data loss. |
| [#5640](https://github.com/nearai/ironclaw/issues/5640) *(Test harness gap)* | 11 days | Closed today, but the underlying gap (integration harness always `None` for security audit sink) was surfaced by a guard test. The fix is not visible — possible that the test was simply removed rather than the harness fixed. |
| [#5460](https://github.com/nearai/ironclaw/issues/5460) *(Memory visibility leak)* | 15 days | Closed but with only 1 comment — no clear audit trail of how the fix was verified. Given this is a **security issue** (cross-user data exposure), the lack of documentation is concerning. |
| **PR #6098** *(Windows filesystem fix)* | Filed today | This is a **new-contributor PR** fixing a complete platform blocker. If it stalls, it signals that Windows support is not a priority — which limits IronClaw's user base significantly. |

### CI Health Watch

Issue [#6103](https://github.com/nearai/ironclaw/issues/6103) documents that:
- ~70% of July pushes to main are failing
- `nightly-deep-ci.yml` had **zero successful runs** from 2026-05-06 to 2026-07-08 (67 days)
- Problem is ~5 flaky non-hermetic tests

This is the **single largest risk to project health** — if developers and contributors cannot trust CI signal, regressions will accumulate and the quality issues seen in today's report will worsen.

---

*Generated 2026-07-15 from nearai/ironclaw GitHub data. All links: https://github.com/nearai/ironclaw/*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the **LobsterAI Project Digest** for **July 15, 2026**.

---

## 1. Today's Overview
The project is in a **maintenance-heavy** state today, reflecting a focus on **stability and bug fixes** following a quiet release period. No new releases were published, and all 4 open Issues were closed as stale, indicating a low rate of direct community engagement. Development activity was concentrated on the **OpenClaw agent runtime**, with two backported fixes addressing critical infinite-loop scenarios and aborted tool runs. A quality-of-life fix for the UI (preventing scroll jumps in the cowork module) was also merged. Overall, the project appears stable but is not currently shipping new features, and maintainers appear to be cleaning up old bugs.

## 2. Releases
**None.** No new releases were published today. The latest stable iteration remains the previously pinned `v2026.6.1` runtime.

## 3. Project Progress
Three pull requests were merged today, all of which were closed:
- **PR #2331 ([Closed] [area: docs, area: main, area: openclaw])**: Backported a dual-layer fix for OpenClaw `v2026.6.1` to ensure a critical `tool-loop` veto immediately terminates the current Agent run. This prevents runaway tool execution while preserving the behavior of normal plugin vetoes and allowing parallel sibling tools to finish gracefully.
- **PR #2330 ([Closed] [area: docs, area: main, area: openclaw])**: Backported an upstream fix (`7fe287b0d3`) to stop the agent loop at abort boundaries after a tool execution is aborted or an async turn hook fails. This addresses a regression where the agent could continue processing after an abort.
- **PR #2329 ([Closed] [area: renderer, area: cowork])**: Fixed a UI issue in the cowork chat module where streaming responses would cause the conversation to jump or scroll to the top. The fix now respects manual scrolling and cancels pending auto-scroll actions.

## 4. Community Hot Topics
Activity remains low, with no Issues or PRs receiving significant engagement. The most commented Items were all closed as stale:
- **Issue #1389 ([Closed]): Language Selection Bug** – 3 comments. The user reported a localization display issue where selecting "English" still showed Chinese text for some UI elements. This suggests an ongoing challenge with the i18n layer.
- **Issue #1386, #1388, #1390** – Each had 2 comments. None generated community discussion, and all were closed by maintainers due to inactivity.

**Analysis**: The lack of new community Issues in the last 24 hours suggests the user base is either stable or experiencing few new breakages. The stale-closure of these 3-month-old bugs indicates the team is likely clearing the backlog for a future release cycle.

## 5. Bugs & Stability
The four Issues closed today represent **older, unresolved bugs** that were never fixed before being archived. No *new* bugs were reported in the last 24 hours.

| Severity | Issue | Status | Summary | Fix PR? |
| :--- | :--- | :--- | :--- | :--- |
| **High** | #1390 | Closed (Stale) | Timed tasks fail to save on update (intermittent, no repro steps). | None |
| **Medium** | #1388 | Closed (Stale) | Email configuration "Test Connectivity" hangs indefinitely, even after restart. | None |
| **Medium** | #1386 | Closed (Stale) | "Share" feature generates truncated images for long chat histories. | None |
| **Low** | #1389 | Closed (Stale) | Language selector displays Chinese text when English is selected (i18n bug). | None |

**Note**: While these are now closed without a fix, two significant agent-runtime stability fixes were merged today via **PRs #2331 and #2330**, addressing crashes/infinite loops in the OpenClaw engine.

## 6. Feature Requests & Roadmap Signals
No user-facing feature requests were logged today. However, the backported fixes in PRs #2330 and #2331 signal a clear roadmap focus:
- **OpenClaw Runtime Hardening**: The dev team is investing in upstream stability patches (agent loop termination, abort boundaries). This suggests the team is preparing for a more robust agent execution model, likely a prerequisite for more complex workflows in a future release.
- **Prediction**: The next minor release (likely `v2026.7.x`) will include these backported runtime fixes and the scroll-jump UX fix. No major new features are anticipated in the immediate short term.

## 7. User Feedback Summary
User pain points (derived from stale Issues):
- **i18n Confusion (#1389)**: Users expecting an English UI are still seeing mixed Chinese text, which degrades the global experience.
- **Feature Incompleteness (#1386)**: The "Share to image" feature fails for long conversations, indicating a limitation in the rendering pipeline for large content.
- **Usability Blockers (#1388)**: The email configuration wizard has a dead-end state (testing hangs), which prevents users from setting up email integration.
- **Data Loss Risk (#1390)**: Intermittent failure to update timed tasks lowers trust in the automation module.
- **Satisfaction**: The merge of **PR #2329** directly addresses a frequent user annoyance (scroll jumping during streaming), which should improve real-time chat UX.

## 8. Backlog Watch
No new high-priority issues requiring maintainer attention were reported today. The list of stale-closed bugs (#1386, #1388, #1389, #1390) are now archive-quality. These were **not resolved**, meaning the underlying bugs remain technical debt:
- The **hanging email test (#1388)** and **intermittent timed task failure (#1390)** are the most critical unresolved issues in the backlog. Without repro steps, these are hard to fix, but they represent a risk for the automation and communication workflows.
- The **truncated share image (#1386)** is a lower priority but affects a visible user-facing feature.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-15

## Today's Overview
Moltis maintains high development velocity with 12 pull requests updated in the last 24 hours, of which 8 were merged or closed. The project released one new build (20260714.11) and saw 2 open issues active alongside 1 closed bug. Activity is concentrated on fixing robustness issues for smaller/edge-case models, improving browser agent capabilities, and patching MCP OAuth integration with popular services like Notion and Linear.

## Releases
- **20260714.11**: Latest snapshot build with no detailed changelog provided. Likely incorporates the GPT-5.6 model support and MCP OAuth fix merged in recent days.

## Project Progress
Eight pull requests were merged or closed in the last 24 hours:

1. **GPT-5.6 model support** ([#1146](https://github.com/moltis-org/moltis/pull/1146)) — Registered GPT-5.6 Sol, Terra, and Luna in OpenAI and Codex fallback catalogs with documented context windows (1.05M API / 372K backend).

2. **MCP OAuth fix for Notion/Linear** ([#1120](https://github.com/moltis-org/moltis/pull/1120), closes [#1119](https://github.com/moltis-org/moltis/issues/1119)) — Fixed `invalid_target` failure by using direct fetch for `resource_metadata` URLs from `WWW-Authenticate` headers.

3. **Cap persisted tool results before rehydration** ([#1089](https://github.com/moltis-org/moltis/pull/1089)) — Prevents oversized tool results from causing provider API errors during session rehydration.

4. **Fix browser null optional params** ([#1098](https://github.com/moltis-org/moltis/pull/1098)) — Tolerates explicit `null` values for optional browser tool parameters (affects models like Gemma 4).

5. **Coerce stringified scalar tool args** ([#1136](https://github.com/moltis-org/moltis/pull/1136)) — Smaller models (Gemma 4, oMLX) emitting JSON strings for scalar arguments (e.g., `"full_page": "true"`) now automatically coerced before validation.

6. **Fix gateway metrics forcing matrix-sdk** ([#1139](https://github.com/moltis-org/moltis/pull/1139)) — Enabling `metrics` feature no longer unnecessarily pulls in `matrix-sdk`.

7. **Fix CalDAV non-ASCII datetime panic** ([#1145](https://github.com/moltis-org/moltis/pull/1145)) — Prevents panic on non-ASCII datetime values from remote CalDAV servers.

8. **Dependencies update** ([#1141](https://github.com/moltis-org/moltis/pull/1141)) — Updated esbuild and vite across UI and docs directories.

## Community Hot Topics
- **Feature: FunASR/SenseVoice STT engine** ([#1102](https://github.com/moltis-org/moltis/issues/1102)) — Open since June 4 with active licensing discussion updated yesterday. Community desire for local, privacy-preserving speech-to-text alternatives.

- **"main" session can't be deleted** ([#1132](https://github.com/moltis-org/moltis/issues/1132)) — Bug open for nearly a month. Users want to manage default sessions but are blocked.

- **MCP OAuth bug** ([#1119](https://github.com/moltis-org/moltis/issues/1119)) — Now closed, but was the most impactful recent issue causing failures for Notion and Linear MCP servers, directly blocking users of these integrations.

## Bugs & Stability
**High severity (fixed):**
- MCP OAuth `invalid_target` for Notion/Linear — Fixed via [#1120](https://github.com/moltis-org/moltis/pull/1120)
- CalDAV panic on non-ASCII datetimes — Fixed via [#1145](https://github.com/moltis-org/moltis/pull/1145)
- Force-enabled matrix-sdk via metrics feature — Fixed via [#1139](https://github.com/moltis-org/moltis/pull/1139)

**Medium severity (open):**
- "main" session can't be deleted/archived ([#1132](https://github.com/moltis-org/moltis/issues/1132)) — No fix PR yet.

**Robustness improvements (merged):**
- Null optional params in browser tool calls ([#1098](https://github.com/moltis-org/moltis/pull/1098))
- Stringified scalar tool arg coercion ([#1136](https://github.com/moltis-org/moltis/pull/1136))
- Tool result capping on rehydration ([#1089](https://github.com/moltis-org/moltis/pull/1089))

## Feature Requests & Roadmap Signals
- **FunASR/SenseVoice local STT** ([#1102](https://github.com/moltis-org/moltis/issues/1102)) — Strong candidate for next version. Core team is actively evaluating licensing, and the feature addresses a clear pain point for local/offline users avoiding cloud STT.

- **Auto-screenshot after browser actions** ([#1135](https://github.com/moltis-org/moltis/pull/1135), open) — Already implemented as a PR, likely to land soon. Provides per-step visual timeline for browser agent tasks.

- **Context command per chat turn** ([#1124](https://github.com/moltis-org/moltis/pull/1124), open) — Would allow automated runtime context injection; valuable for deployment scenarios.

- **Channel activity log visibility** ([#1093](https://github.com/moltis-org/moltis/pull/1093), open) — Granular logging control for multi-user channels.

## User Feedback Summary
- **Positive**: The MCP OAuth fix (Notion/Linear) directly resolved a blocker for users relying on these integrations. The GPT-5.6 addition keeps the platform current with latest model releases.
- **Pain points**: Smaller/local models (Gemma 4, oMLX) produce non-standard JSON that required two separate fixes ([#1098](https://github.com/moltis-org/moltis/pull/1098), [#1136](https://github.com/moltis-org/moltis/pull/1136)) — indicates users want better compatibility with non-frontier models. The "main" session lock ([#1132](https://github.com/moltis-org/moltis/issues/1132)) is a UX frustration for session management.

## Backlog Watch
- **Feature: FunASR/SenseVoice STT** ([#1102](https://github.com/moltis-org/moltis/issues/1102)) — Open since June 4, needs maintainer decision on licensing compatibility. No PR yet.
- **"main" session deletion** ([#1132](https://github.com/moltis-org/moltis/issues/1132)) — Open since June 18, no maintainer response or fix PR. Moderate impact on UX.
- **PR: Context command for chat turns** ([#1124](https://github.com/moltis-org/moltis/pull/1124)) — Open since June 15 without any comments from maintainers. May need review.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-15

**Generated from GitHub activity (agentscope-ai/CoPaw) for the 24h period ending 2026-07-15.**

---

## 1. Today's Overview

CoPaw had a **high-activity day** in a major stabilization sprint following the v2.0.0 launch. 50 Issues and 50 PRs were updated, with roughly one-third of Issues remaining open. The project released **v2.0.0.post2**, a hotfix addressing critical sandbox, memory, and context-compression regressions that dominated community reports. The maintainer team processed 34 Issues closures and merged 26 PRs, indicating strong triage throughput. However, persistent bug reports around DeepSeek API compatibility, doom-loop tool calls, and scroll-context corruption suggest the v2.0.0 release quality was below user expectations, and multiple fixes are now in review.

---

## 2. Releases

**New: v2.0.0.post2** — This is a stabilization patch release.

**What's Changed:**
- **feat:** More sensitive file detection and allow read-global permissions ([#6067](https://github.com/agentscope-ai/QwenPaw/pull/6067))
- **chore:** Version bump to 2.0.0.post2 ([#6070](https://github.com/agentscope-ai/QwenPaw/pull/6070))
- **test:** Unit regression tests for runtime/security/install ([#6067] tracking)

**Breaking Changes:** None reported. This is a backward-compatible patch release.

**Migration Notes:** Users on v2.0.0 or v2.0.0.post1 should upgrade via `pip install --upgrade qwenpaw` or via the desktop app's auto-update mechanism. Users who encountered sandbox ACE pollution on Windows or missing `_builtin._scripts` modules should see resolution.

---

## 3. Project Progress

**Today's Merged/Closed PRs (26 total):**
- **Sandbox & Governance Fixes:**
  - [#6109](https://github.com/agentscope-ai/QwenPaw/pull/6109) — Fixed sandbox OFF-mode ignoring the global `sandbox_enabled` switch (honor `approval_level=OFF` + `sandbox_enabled=false`)
  - [#6109] resolves the widely-reported bug where sandbox was forced on even when disabled.
- **Context Compression Fix:**
  - [#6108](https://github.com/agentscope-ai/QwenPaw/pull/6108) — Fixed tool results being orphaned after scroll compression, which caused permanent 400 errors on DeepSeek APIs.
- **Desktop Build Fix:**
  - [#6097](https://github.com/agentscope-ai/QwenPaw/pull/6097) — Fixed missing `agentscope.tool._builtin._scripts` subpackage in macOS frozen build (causing auto-memory and Glob tool crashes)
- **Memory & Embedding Fix:**
  - [#6098](https://github.com/agentscope-ai/QwenPaw/pull/6098) — Improved ReMe reliability, observability, and CJK embedding safety (fixes [#5950](https://github.com/agentscope-ai/QwenPaw/issues/5950))
- **New Channel:**
  - [#6112](https://github.com/agentscope-ai/QwenPaw/pull/6112) — Zalo Bot channel plugin (2.0 plugin architecture), superseding #5801
- **Governance Fix:**
  - [#6122](https://github.com/agentscope-ai/QwenPaw/pull/6122) — Clear stale OFF-mode sandbox state reused after global switch toggle
- **Other Fixes:**
  - [#6106](https://github.com/agentscope-ai/QwenPaw/pull/6106) — Fixed `download_catalog` function to handle gzip-encoded JSON responses
  - [#6087](https://github.com/agentscope-ai/QwenPaw/issues/6087) — Related PR merged for real-time injection of user messages in agent iteration loops

**Large Features in Review (Open PRs):**
- [#5187](https://github.com/agentscope-ai/QwenPaw/pull/5187) — Windows desktop GUI automation with UIA + Tauri control mode (still open after 31 days)
- [#6118](https://github.com/agentscope-ai/QwenPaw/pull/6118) — Zalo Bot channel (alternative implementation, open)
- [#6123](https://github.com/agentscope-ai/QwenPaw/pull/6123) — Fix scroll recall loops and enforce hard context limits (new, under review)
- [#5922](https://github.com/agentscope-ai/QwenPaw/pull/5922) — Langfuse observability trace improvements (first-time contributor)

---

## 4. Community Hot Topics

**Most Active Issues (by comment count):**

1. **[#2291](https://github.com/agentscope-ai/QwenPaw/issue/2291) — "Help Wanted: Open Tasks — Come Contribute!"** (64 comments)
   - Maintainer-sourced meta-issue listing P0–P2 tasks; signals active community onboarding and task management.

2. **[#5951](https://github.com/agentscope-ai/QwenPaw/issue/5951) — "Windows 沙箱问题完整排查"** (9 comments) — **CLOSED**
   - Deep investigation of Windows sandbox issues: pwsh infinite recursion, NTFS ACL pollution, missing `CREATE_NO_WINDOW`. The user had to downgrade to v1.x. Analysis traced to desktop shell sandbox initialization defects.

3. **[#578](https://github.com/agentscope-ai/QwenPaw/issue/578) — "OpenClaw-Inspired Features for Compounding Agent Value"** (8 comments) — **Meta-Issue**
   - Long-running meta-issue tracking feature requests inspired by OpenClaw architecture.

4. **[#6089](https://github.com/agentscope-ai/QwenPaw/issue/6089) — "Bug: opencode 免费模型报错"** (7 comments) — **CLOSED**
   - `MODEL_EXECUTION_ERROR` when using opencode free-tier models; likely provider config issue.

5. **[#6113](https://github.com/agentscope-ai/QwenPaw/issue/6113) — "一直卡在搜索记忆" (Stuck in memory search loop)** (5 comments) — **OPEN**
   - User reports v2.0 triggers endless memory retrieval on every query. This is a **high-frustration UX regression**.

**Underlying Needs:** The community is overwhelmingly focused on **stability after v2.0.0**. The top concerns are (a) sandbox reliability on Windows, (b) memory/context corruption with DeepSeek APIs, (c) the new memory search being overly aggressive, and (d) governance/sandbox toggles not working as configured.

---

## 5. Bugs & Stability

**High Severity — Fix Merged or In Review:**

| Bug | Severity | Fix PR | Status |
|-----|----------|--------|--------|
| Windows AppContainer ACE pollution → Electron GPU crash ([#5829](https://github.com/agentscope-ai/QwenPaw/issues/5829)) | **Critical** | [#6109](https://github.com/agentscope-ai/QwenPaw/pull/6109) | Merged |
| Missing `_builtin._scripts` → Glob/auto-memory crash on macOS ([#6097](https://github.com/agentscope-ai/QwenPaw/issues/6097)) | **Critical** | [#6097](https://github.com/agentscope-ai/QwenPaw/pull/6097) | Merged |
| Scroll compression breaks DeepSeek tool→assistant pairing → 400 errors ([#6077](https://github.com/agentscope-ai/QwenPaw/issues/6077), [#6046](https://github.com/agentscope-ai/QwenPaw/issues/6046), [#6009](https://github.com/agentscope-ai/QwenPaw/issues/6009)) | **High** | [#6108](https://github.com/agentscope-ai/QwenPaw/pull/6108) | Merged |
| Scroll recall loops → wasted tokens ([#6116](https://github.com/agentscope-ai/QwenPaw/issues/6116)) | **High** | [#6123](https://github.com/agentscope-ai/QwenPaw/pull/6123) | Open |
| Endless memory search loop on every query ([#6113](https://github.com/agentscope-ai/QwenPaw/issues/6113)) | **High** | [#6120](https://github.com/agentscope-ai/QwenPaw/pull/6120) | Open |
| `approval_level: OFF` not honored; tool approval still fires ([#6020](https://github.com/agentscope-ai/QwenPaw/issues/6020), [#5984](https://github.com/agentscope-ai/QwenPaw/issues/5984)) | **High** | [#6109](https://github.com/agentscope-ai/QwenPaw/pull/6109), [#6122](https://github.com/agentscope-ai/QwenPaw/pull/6122) | Merged |
| Internal error on upstream LLM 400 → session killed ([#6017](https://github.com/agentscope-ai/QwenPaw/issues/6017)) | **High** | — | Open |
| Upgrade overwrites agent config with empty config ([#6100](https://github.com/agentscope-ai/QwenPaw/issues/6100)) | **High** | — | Open |
| Message queue broken in v2.0.0.post1 ([#6088](https://github.com/agentscope-ai/QwenPaw/issues/6088)) | **Medium** | [#6107](https://github.com/agentscope-ai/QwenPaw/pull/6107) | Open |
| CJK embedding truncation (char count vs token count) ([#5950](https://github.com/agentscope-ai/QwenPaw/issues/5950)) | **Medium** | [#6098](https://github.com/agentscope-ai/QwenPaw/pull/6098) | Merged |

**Today's New Bugs (11 opened today, 5 remain open):**
- [#6116](https://github.com/agentscope-ai/QwenPaw/issues/6116) — Doom-loop tool calls (repeated same call 6+ times) — **Open**
- [#6113](https://github.com/agentscope-ai/QwenPaw/issues/6113) — Endless memory search — **Open**
- [#6121](https://github.com/agentscope-ai/QwenPaw/issues/6121) — DeepSeek scroll compression → 400 error — **Open**
- [#6100](https://github.com/agentscope-ai/QwenPaw/issues/6100) — Upgrade resets workspace config — **Open**
- [#6088](https://github.com/agentscope-ai/QwenPaw/issues/6088) — Message queue broken — **Open**

---

## 6. Feature Requests & Roadmap Signals

**Most Upvoted/Active Feature Requests Today:**

- **[#6087](https://github.com/agentscope-ai/QwenPaw/issues/6087)** — **Real-time user message injection during agent iterations** (4 comments): Allow users to interrupt/correct the agent mid-cycle rather than waiting for a turn to complete. This is a power-user request to reduce wasted computation. **Likely in next minor release** given its high value.

- **[#6064](https://github.com/agentscope-ai/QwenPaw/pull/6064)** — **Hermes Agent benchmarking & browser plug-in integration** (4 comments): Polish underlying architecture and benchmark against Hermes Agent's desktop interaction model. The author suggests adding a built-in browser plugin for real-environment interaction.

- **[#6048](https://github.com/agentscope-ai/QwenPaw/issues/6048)** — **CIDR range support for whitelisted hosts** (3 comments): Network administration feature for enterprise deployments.

- **[#5976](https://github.com/agentscope-ai/QwenPaw/issues/5976)** — **Separate channel config for tool call parameters vs. results** (4 comments): Users want to truncate or suppress tool results in channel messages. **Likely in next release** given its simplicity and multiple users requesting it.

- **[#579](https://github.com/agentscope-ai/QwenPaw/issues/579)** — **Agent skills marketplace** (ongoing interest): Community continues to want an ecosystem of shareable agent skills.

**Predictions for v2.1.0:**
- Real-time message injection ([#6087](https://github.com/agentscope-ai/QwenPaw/issues/6087))
- Tool result truncation in channels ([#5976](https://github.com/agentscope-ai/QwenPaw/issues/5976))
- CIDR whitelist support ([#6048](https://github.com/agentscope-ai/QwenPaw/issues/6048))
- Deeper Zalo channel integration ([#6118](https://github.com/agentscope-ai/QwenPaw/pull/6118))

---

## 7. User Feedback Summary

**Pain Points (High Frequency):**

1. **v2.0.0 Upgrade Regressions** — Multiple users report that upgrading from v1.x to v2.0.0 broke previously working workflows. Common complaints: config loss, broken message queue, sandbox forced-on, memory search loops, session corruption. Several users express frustration, with one saying "以前都没事，升级v2.0之后，此问题频发" (it was fine before, after upgrading to v2.0, these issues happen frequently).

2. **DeepSeek API Incompatibility** — The combination of scroll context compression + DeepSeek API strict message ordering causes persistent failures. Users are forced to start new sessions repeatedly. Multiple issues filed with detailed analysis ([#6121](https://github.com/agentscope-ai/QwenPaw/issues/6121), [#6077](https://github.com/agentscope-ai/QwenPaw/issues/6077), [#6046](https://github.com/agentscope-ai/QwenPaw/issues/6046), [#6009](https://github.com/agentscope-ai/QwenPaw/issues/6009)).

3. **Sandbox / Governance Overreach** — The sandbox system is blocking legitimate workflows on Linux ARM (Landlock unavailable), Windows (pwsh recursive explosion), and when explicitly disabled. Users want a reliable OFF switch.

4. **Memory Search Aggressiveness** — The new auto-memory in v2.0 is triggering on every query, including internal system messages, causing delays and feedback loops.

**Positive Signals:**
- The Zalo Bot channel PR ([#618](https://github.com/agentscope-ai/QwenPaw/pull/6118)) and its rapid acceptance show the 2.0 plugin architecture is working.
- The sandbox overhaul tracking issue ([#6023](https://github.com/agentscope-ai/QwenPaw/issues/6023)) has 2 thumbs-up and constructive feedback, indicating users are engaged with the project's direction.

**Satisfaction Rating (Qualitative):** Mixed to negative in the short term due to v2.0.0 regressions, but the maintainer team's **fast response** (closing 34 issues today) signals rapid stabilization. Community engagement remains strong.

---

## 8. Backlog Watch

**Issues Needing Maintainer Attention:**

| Issue | Days Open | Type | Risk |
|-------|-----------|------|------|
| [#5333](https://github.com/agentscope-ai/QwenPaw/issues/5333) — Agent stuck + textbox not disabled | 26 days | Bug (UX) | Medium — affects user trust |
| [#6116](https://github.com/agentscope-ai/QwenPaw/issues/6116) — Doom-loop tool calls | 1 day | Bug (New) | High — wastes tokens/API costs |
| [#6017](https://github.com/agentscope-ai/QwenPaw/issues/6017) — Internal error kills session on LLM 400 | 2 days | Bug (Regression) | High — session unrecoverable |
| [#6100](https://github.com/agentscope-ai/QwenPaw/issues/6100) — Upgrade overwrites agent config | 1 day | Bug (Data Loss) | High — destroys user setup |
| [#6107](https://github.com/agentscope-ai/QwenPaw/pull/6107) — WKWebView stale cache after update | 1 day | PR (macOS) | Medium — affects update experience |
| [#6071](https://github.com/agentscope-ai/QwenPaw/pull/6071) — Route Tauri updates via OSS only | 1 day | PR (CI/CD) | Low — infrastructure |
| [#6065](https://github.com/agentscope-ai/QwenPaw/pull/6065) — Remove dead imports & wrong asyncio mark | 2 days | PR (Cleanup) | Low — merged soon |
| [#5731](https://github.com/agentscope-ai/QwenPaw/pull/5731) — Honor per-request model override (first-time contributor) | 13 days | PR (Feature) | Medium — needs review before merge |
| [#5187](https://github.com/agentscope-ai/QwenPaw/pull/5187) — Windows desktop GUI automation (computer-use) | 31 days | PR (Large Feature) | Extending — risks stale merge conflicts |

**Longest Unanswered High-Severity Issue:**
- **None** — All issues reported today have been seen by maintainers (most have comments or PRs linked). The maintainer team is responsive.

**Recommendation:** Fast-track review of [#5731](https://github.com/agentscope-ai/QwenPaw/pull/5731) to keep first-time contributors engaged. Monitor [#5187](https://github.com/agentscope-ai/QwenPaw/pull/5187) for merge conflicts given its 31-day lifespan.

---

**Project Health Summary:** CoPaw is in a **stabilization phase** after its v2.0.0 release. The maintainer team is responding aggressively to regressions (26 PRs merged today). User sentiment is temporarily strained by the volume of new bugs, but the rapid patch cycle (v2.0.0 → v2.0.0.post2 in 4 days) signals strong project commitment. The community remains actively engaged, contributing code (Zalo channel, Langfuse telemetry) and detailed bug reports. The **current trajectory** is positive if the remaining high-severity issues (memory loops, doom-loops, config loss) are resolved within the week.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-15

## Today's Overview
ZeroClaw shows elevated development activity with 50 PRs and 29 issues updated in the past 24 hours, reflecting an intense push toward the v0.8.4 maintenance train and SOP completion milestones. The project is in a high-velocity engineering phase with 16 PRs merged/closed and 23 open issues actively discussed. A major 7-stack PR series for "Hindsight" memory improvements (PRs #9064–#9069) landed yesterday, signaling significant memory architecture refactoring. No new releases were published today, but the v0.8.3 release (tracker #7320) is feature-frozen and awaiting final validation.

## Releases
No new releases published today.

## Project Progress
**16 PRs merged/closed** in the last 24 hours, including:

- **#9077** (docs): Fixed spurious positional arg in `channel start` CLI example in network-deployment docs
- **#8582** (fix/zerocode): Terminates ephemeral daemon on connection failure, preventing zombie daemon processes
- **#8678** (bug, CLOSED): `advance_step` SOP approval-gate bypass fixed — driver could `sop_advance` without run-status guard
- **#8631** (bug, CLOSED): Headless deterministic SOP steps falsely recorded "Completed" without executing — audit trail integrity fix
- **#8695** (bug, CLOSED): Cron jobs still recalled memory even when `uses_memory = false` — stateless run semantics restored
- **#6689** (bug, CLOSED): Production SOP audit silently no-op — documented `sop_run_*/sop_step_*` memory keys were never written
- **#6686** (bug, CLOSED): SOP cron triggers (`SopCronCache`) had no production caller — now wired
- **#8413** (feature, CLOSED): `channel-filesystem` SOP event source — file create/modify/delete triggers SOP workflows

**Hindsight memory stack (7 PRs, all open):** A coordinated multi-PR series (#9064–#9069 plus #9070) introduces shared/system memory tiers with authorization, configurable recall/injection caps, consolidation/dedup correctness fixes, async retain for server-side vectorization, per-agent backend dispatch, and Telegram DM streaming/trim. This is a major memory architecture overhaul currently under review.

## Community Hot Topics

**Most active issues:**

1. **[#5982 — Per-sender RBAC for multi-tenant deployments](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)** (10 comments)
   - Long-running feature request for per-sender role-based access control to serve customers, operators, and developers on a single instance with isolated workspaces. Tracks onto the multi-user milestone (#8290).

2. **[#6055 — Slack thread context hydration](https://github.com/zeroclaw-labs/zeroclaw/issues/6055)** (7 comments)
   - Users want `conversations.replies` backfill on first bot mention in a thread, so the agent has full context without requiring re-@mentions. Follow-up from #5992.

3. **[#8973 — Landlock blocks shell access on Fedora](https://github.com/zeroclaw-labs/zeroclaw/issues/8973)** (4 comments, 4 days old)
   - High-severity security sandbox regression: shell tool fails completely when Landlock enabled because `sh` cannot access `/dev/null`. Affects Fedora users specifically.

4. **[#9048 — Separate conversation history from long-term memory](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)** (3 comments, 1 day old)
   - RFC highlighting that conversation turns are still written into general memory backend as `MemoryCategory::Conversation`, mixing lifecycle concepts despite documented separation.

5. **[#8933 — Cross-turn conversation correlation for OTel export](https://github.com/zeroclaw-labs/zeroclaw/issues/8933)** (3 comments)
   - RFC proposing an opaque conversation ID through turn-lifecycle observer events for OpenTelemetry tracing across multi-turn interactions.

**Most commented PRs:** The Hindsight memory stack PRs (#9064–#9069) each carry extensive cross-references, though individual comment counts are not displayed in the data. The massive cleanup PR **#8901** (chore: strip comment bureaucracy) touches every crate in the workspace and is the largest open PR by scope.

## Bugs & Stability

**S1 - Workflow blocked:**
- **#8563** (open): SOPs not available to agent through web dashboard chat session — shared/sops directory not detected
- **#8675** (open, 12 days): Malformed native tool-call arguments sent unvalidated to OpenAI/OpenRouter providers → provider 400 → empty reply. Multiple provider formats affected.
- **#7947** (open, 26 days): `execute_pipeline` bypasses per-agent tool gating — confused deputy vulnerability (S0 severity originally, data loss / security risk)
- **#9052** (open, 1 day): `channel-line` omitted from `channels-full` and CI coverage — breaks CI for LINE channel

**S2 - Degraded behavior:**
- **#8973** (open, 4 days): Landlock sandbox blocks `sh` from accessing `/dev/null` on Fedora — shell tool completely unusable with security enabled
- **#9001** (open, 4 days): Provider turn failures bury cause-specific diagnostics under generic retry envelope — hard to debug LM Studio/Ollama connectivity issues
- **#8695** (CLOSED today): Cron jobs ignored `uses_memory = false` — fixed in today's batch
- **#8678** (CLOSED today): SOP approval-gate bypass via `sop_advance` without run-status guard — fixed
- **#8631** (CLOSED today): Headless SOP steps recorded as Completed without executing — fixed

**Severe security-related bugs still open:**
- **#7947** (S0 - pipeline confused deputy, open 27 days)
- **#8973** (Landlock/Fedora, open 4 days)
- **#8675** (Provider tool-call validation, open 12 days)

## Feature Requests & Roadmap Signals

**High-priority accepted features for next release (v0.8.4, target July 31):**

1. **SOP completion** (tracker #8288): Daemon-owned SOP control plane to 5/5 — 13 capabilities tracked. Active work on SOP routing (#8719), channel gate prompts (#8979), and central ingress adapter layer (#8581).

2. **Multi-user milestone** (tracker #8290): Per-principal session/memory isolation + per-sender authorization, building on uniform `Principal` with resolved grants. Underpins the RBAC request (#5982).

3. **OIDC milestone** (tracker #8289): Pluggable `AuthProvider` + uniform `Principal` for first-shippable OIDC authentication.

4. **ZeroRelay** (tracker #8358): Standalone nominated-relay node for daemons behind NAT/CGNAT — blind TLS forwarder.

5. **Pre-hook skip gates** (#5607, blocked): Lightweight precondition script for cron/SOP triggers — clean skip on exit code 10, proceed on 0.

**Emerging signals:**
- **Separate conversation history from long-term memory** (#9048, RFC, 1 day old) — suggests users find the current memory architecture confusing and want clearer lifecycle separation
- **Cross-turn OTel correlation** (#8933, RFC) — observability team wants production-grade conversation tracing
- **SOP authoring surface** (#8736) — full node-graph editor across web and ZeroCode, live run overlays, channel fan-in — a major UX investment

## User Feedback Summary

**Pain points surfaced:**
- **Fedora/Landlock users** (#8973): Shell tool completely broken with security sandbox — critical for Linux desktop users
- **Provider integration pain** (#8675, #9001): Malformed tool calls and opaque `All model_providers/models failed` errors make provider debugging a guessing game
- **Memory lifecycle confusion** (#9048): Users find it hard to understand when conversation turns vs. long-term memory are persisted, despite documented conceptual separation
- **SOP onboarding friction** (#8563): SOPs not showing in web dashboard — basic configuration fails silently
- **Documentation gaps** (#8587): SOP syntax lacks detailed examples beyond basic use case

**Satisfaction signals:**
- Active community engagement with 10+ commenters across high-value RFCs and bug reports
- Multiple contributors submitting PRs for documentation fixes (#9077, #9076), suggesting active user base
- The 7-stack Hindsight memory PRs indicate investment in addressing core architecture concerns

## Backlog Watch

**Important items needing maintainer attention:**

1. **#7947 — Pipeline confused deputy vulnerability** (S0, 27 days open): `execute_pipeline` bypasses per-agent tool gating. No fix PR attached. This is the highest-severity security issue currently open.

2. **#5607 — Pre-hook skip gates for cron/SOP** (accepted, blocked, 96 days): Community feature request awaiting implementation. Blocked status needs clarification.

3. **#8353 — Improve error message context / replace unwrap with expect** (open 19 days, needs-author-action): Small fix PR flagged for author action — appears to have stalled.

4. **#9029 — OpenAiResponsesModelProvider vision capability fix** (open 2 days, needs-author-action): Vision capability override for OpenAI-compatible providers — awaiting author revision.

5. **#8890 — Web search provider HTTP failure classification** (open 6 days, needs-author-action): Cleanup PR for search status enum — stalled on author action.

6. **#8923 — Host-mediated outbound TCP/TLS for channel plugins** (open 6 days, needs-author-action): XL-sized feature for WASM plugin networking — important for channel ecosystem growth.

7. **#8901 — Strip comment bureaucracy across tree** (open 6 days, needs-author-action): Massive XL cleanup affecting every crate — high cross-team coordination needed.

8. **#6685 — SOP HTTP fan-in documented but not wired** (open 61 days): `POST /sop/*` and `/webhook` endpoints documented but never connected — documentation mismatch with implementation.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*